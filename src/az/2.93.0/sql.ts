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
  name: "sql",
  description: "Manage Azure SQL Databases and Data Warehouses",
  subcommands: [
    {
      name: "list-usages",
      description: "Gets all subscription usage metrics in a given location",
      options: [
        {
          name: ["--location", "-l"],
          description:
            "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
          args: { name: "location" },
          isRequired: true,
        },
        acquirePolicyToken,
        changeReference,
      ],
    },
    {
      name: "show-usage",
      description: "Gets a subscription usage metric",
      options: [
        {
          name: ["--location", "-l"],
          description:
            "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
          args: { name: "location" },
          isRequired: true,
        },
        {
          name: ["--usage", "-u"],
          description: "Name of usage metric to return. Required",
          args: { name: "usage" },
          isRequired: true,
        },
        acquirePolicyToken,
        changeReference,
      ],
    },
    {
      name: "db",
      description: "Manage databases",
      subcommands: [
        {
          name: "copy",
          description: "Create a copy of a database",
          options: [
            {
              name: "--dest-name",
              description:
                "Name of the database that will be created as the copy destination",
              args: { name: "dest-name" },
              isRequired: true,
            },
            acquirePolicyToken,
            {
              name: ["--assign-identity", "-i"],
              description: "Assign identity for database",
              args: {
                name: "assign-identity",
                suggestions: ["false", "true"],
                isOptional: true,
              },
            },
            {
              name: "--auto-pause-delay",
              description:
                "Time in minutes after which database is automatically paused. A value of -1 means that automatic pause is disabled",
              args: { name: "auto-pause-delay" },
            },
            {
              name: "--availability-zone",
              description: "Availability zone",
              args: { name: "availability-zone" },
            },
            {
              name: ["--backup-storage-redundancy", "--bsr"],
              description:
                "Backup storage redundancy used to store backups. Allowed values include: Local, Zone, Geo, GeoZone",
              args: { name: "backup-storage-redundancy" },
            },
            {
              name: ["--capacity", "-c"],
              description:
                "The capacity component of the sku in integer number of DTUs or vcores",
              args: { name: "capacity" },
            },
            changeReference,
            {
              name: "--compute-model",
              description: "The compute model of the database",
              args: {
                name: "compute-model",
                suggestions: ["Provisioned", "Serverless"],
              },
            },
            {
              name: "--dest-resource-group",
              description:
                "Name of the resource group to create the copy in. If unspecified, defaults to the origin resource group",
              args: { name: "dest-resource-group" },
            },
            {
              name: "--dest-server",
              description:
                "Name of the server to create the copy in. If unspecified, defaults to the origin server",
              args: { name: "dest-server" },
            },
            {
              name: "--elastic-pool",
              description:
                "The name or resource id of the elastic pool to create the database in",
              args: { name: "elastic-pool" },
            },
            {
              name: "--encryption-protector",
              description:
                "Specifies the Azure key vault key to be used as database encryption protector key",
              args: { name: "encryption-protector" },
            },
            {
              name: ["--encryption-protector-auto-rotation", "--epauto"],
              description:
                "Specifies the database encryption protector key auto rotation flag. Can be either true, false or null",
              args: {
                name: "encryption-protector-auto-rotation",
                suggestions: ["false", "true"],
                isOptional: true,
              },
            },
            {
              name: ["--family", "-f"],
              description:
                "The compute generation component of the sku (for vcore skus only). Allowed values include: Gen4, Gen5",
              args: { name: "family" },
            },
            {
              name: "--federated-client-id",
              description:
                "The federated client id for the SQL Database. It is used for cross tenant CMK scenario",
              args: { name: "federated-client-id" },
            },
            {
              name: ["--read-replicas", "--ha-replicas"],
              description:
                "The number of high availability replicas to provision for the database. Only settable for Hyperscale edition",
              args: { name: "read-replicas" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids", isVariadic: true },
            },
            {
              name: "--keys",
              description: "The list of AKV keys for the SQL Database",
              args: { name: "keys", isVariadic: true },
            },
            {
              name: "--license-type",
              description:
                "The license type to apply for this database.LicenseIncluded if you need a license, or BasePriceif you have a license and are eligible for the Azure HybridBenefit",
              args: {
                name: "license-type",
                suggestions: ["BasePrice", "LicenseIncluded"],
              },
            },
            {
              name: "--min-capacity",
              description:
                "Minimal capacity that database will always have allocated, if not paused",
              args: { name: "min-capacity" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the Azure SQL Database",
              args: { name: "name" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: "--preferred-enclave-type",
              description: "Specifies type of enclave for this resource",
              args: {
                name: "preferred-enclave-type",
                suggestions: ["Default", "VBS"],
              },
            },
            {
              name: "--read-scale",
              description:
                "If enabled, connections that have application intent set to readonly in their connection string may be routed to a readonly secondary replica. This property is only settable for Premium and Business Critical databases",
              args: {
                name: "read-scale",
                suggestions: ["Disabled", "Enabled"],
              },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: ["--server", "-s"],
              description:
                "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
              args: { name: "server" },
            },
            {
              name: ["--service-level-objective", "--service-objective"],
              description:
                "The service objective for the new database. For example: Basic, S0, P1, GP_Gen4_1, GP_S_Gen5_8, BC_Gen5_2, HS_Gen5_32",
              args: { name: "service-level-objective" },
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
              name: ["--user-assigned-identity-id", "--umi"],
              description:
                "The list of user assigned identity for the SQL Database",
              args: { name: "user-assigned-identity-id", isVariadic: true },
            },
            {
              name: ["--zone-redundant", "-z"],
              description:
                "Specifies whether to enable zone redundancy. Default is true if no value is specified",
              args: {
                name: "zone-redundant",
                suggestions: ["false", "true"],
                isOptional: true,
              },
            },
          ],
        },
        {
          name: "create",
          description: "Create a database",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the Azure SQL Database",
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
              name: ["--server", "-s"],
              description:
                "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
              args: { name: "server" },
              isRequired: true,
            },
            acquirePolicyToken,
            {
              name: ["--assign-identity", "-i"],
              description: "Assign identity for database",
              args: {
                name: "assign-identity",
                suggestions: ["false", "true"],
                isOptional: true,
              },
            },
            {
              name: "--auto-pause-delay",
              description:
                "Time in minutes after which database is automatically paused. A value of -1 means that automatic pause is disabled",
              args: { name: "auto-pause-delay" },
            },
            {
              name: "--availability-zone",
              description: "Availability zone",
              args: { name: "availability-zone" },
            },
            {
              name: ["--backup-storage-redundancy", "--bsr"],
              description:
                "Backup storage redundancy used to store backups. Allowed values include: Local, Zone, Geo, GeoZone",
              args: { name: "backup-storage-redundancy" },
            },
            {
              name: ["--capacity", "-c"],
              description:
                "The capacity component of the sku in integer number of DTUs or vcores",
              args: { name: "capacity" },
            },
            {
              name: "--catalog-collation",
              description: "Collation of the metadata catalog",
              args: {
                name: "catalog-collation",
                suggestions: [
                  "DATABASE_DEFAULT",
                  "SQL_Latin1_General_CP1_CI_AS",
                ],
              },
            },
            changeReference,
            {
              name: "--collation",
              description: "The collation of the database",
              args: { name: "collation" },
            },
            {
              name: "--compute-model",
              description: "The compute model of the database",
              args: {
                name: "compute-model",
                suggestions: ["Provisioned", "Serverless"],
              },
            },
            {
              name: ["--edition", "--tier", "-e"],
              description:
                "The edition component of the sku. Allowed values include: Basic, Standard, Premium, GeneralPurpose, BusinessCritical, Hyperscale",
              args: { name: "edition" },
            },
            {
              name: "--elastic-pool",
              description:
                "The name or resource id of the elastic pool to create the database in",
              args: { name: "elastic-pool" },
            },
            {
              name: "--encryption-protector",
              description:
                "Specifies the Azure key vault key to be used as database encryption protector key",
              args: { name: "encryption-protector" },
            },
            {
              name: ["--encryption-protector-auto-rotation", "--epauto"],
              description:
                "Specifies the database encryption protector key auto rotation flag. Can be either true, false or null",
              args: {
                name: "encryption-protector-auto-rotation",
                suggestions: ["false", "true"],
                isOptional: true,
              },
            },
            {
              name: [
                "--free-limit-exhaustion-behavior",
                "--exhaustion-behavior",
                "--fleb",
              ],
              description:
                "Specifies the behavior when monthly free limits are exhausted for the free database.AutoPause: The database will be auto paused upon exhaustion of free limits for remainder of the month.BillForUsage: The database will continue to be online upon exhaustion of free limitsand any overage will be billed",
              args: {
                name: "free-limit-exhaustion-behavior",
                suggestions: ["AutoPause", "BillOverUsage"],
              },
            },
            {
              name: ["--family", "-f"],
              description:
                "The compute generation component of the sku (for vcore skus only). Allowed values include: Gen4, Gen5",
              args: { name: "family" },
            },
            {
              name: "--federated-client-id",
              description:
                "The federated client id for the SQL Database. It is used for cross tenant CMK scenario",
              args: { name: "federated-client-id" },
            },
            {
              name: ["--use-free-limit", "--free-limit"],
              description:
                "Whether or not the database uses free monthly limits. Allowed on one database in a subscription",
              args: {
                name: "use-free-limit",
                suggestions: ["false", "true"],
                isOptional: true,
              },
            },
            {
              name: ["--read-replicas", "--ha-replicas"],
              description:
                "The number of high availability replicas to provision for the database. Only settable for Hyperscale edition",
              args: { name: "read-replicas" },
            },
            {
              name: "--keys",
              description: "The list of AKV keys for the SQL Database",
              args: { name: "keys", isVariadic: true },
            },
            {
              name: "--ledger-on",
              description:
                "Create a ledger database, in which the integrity of all data is protected by the ledger feature. All tables in the ledger database must be ledger tables. Note: the value of this property cannot be changed after the database has been created",
              args: {
                name: "ledger-on",
                suggestions: ["Disabled", "Enabled"],
                isOptional: true,
              },
            },
            {
              name: "--license-type",
              description:
                "The license type to apply for this database.LicenseIncluded if you need a license, or BasePriceif you have a license and are eligible for the Azure HybridBenefit",
              args: {
                name: "license-type",
                suggestions: ["BasePrice", "LicenseIncluded"],
              },
            },
            {
              name: ["--maint-config-id", "-m"],
              description:
                "Specified maintenance configuration id or name for this resource",
              args: { name: "maint-config-id" },
            },
            {
              name: "--max-size",
              description:
                "The max storage size. If no unit is specified, defaults to bytes (B)",
              args: { name: "max-size" },
            },
            {
              name: "--min-capacity",
              description:
                "Minimal capacity that database will always have allocated, if not paused",
              args: { name: "min-capacity" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: "--preferred-enclave-type",
              description: "Specifies type of enclave for this resource",
              args: {
                name: "preferred-enclave-type",
                suggestions: ["Default", "VBS"],
              },
            },
            {
              name: "--read-scale",
              description:
                "If enabled, connections that have application intent set to readonly in their connection string may be routed to a readonly secondary replica. This property is only settable for Premium and Business Critical databases",
              args: {
                name: "read-scale",
                suggestions: ["Disabled", "Enabled"],
              },
            },
            {
              name: "--sample-name",
              description:
                "The name of the sample schema to apply when creating thisdatabase",
              args: { name: "sample-name", suggestions: ["AdventureWorksLT"] },
            },
            {
              name: ["--service-level-objective", "--service-objective"],
              description:
                "The service objective for the new database. For example: Basic, S0, P1, GP_Gen4_1, GP_S_Gen5_8, BC_Gen5_2, HS_Gen5_32",
              args: { name: "service-level-objective" },
            },
            {
              name: "--tags",
              description:
                "Space-separated tags: key[=value] [key[=value] ...]. Use '' to clear existing tags",
              args: { name: "tags", isOptional: true, isVariadic: true },
            },
            {
              name: ["--user-assigned-identity-id", "--umi"],
              description:
                "The list of user assigned identity for the SQL Database",
              args: { name: "user-assigned-identity-id", isVariadic: true },
            },
            {
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
            {
              name: ["--zone-redundant", "-z"],
              description:
                "Specifies whether to enable zone redundancy. Default is true if no value is specified",
              args: {
                name: "zone-redundant",
                suggestions: ["false", "true"],
                isOptional: true,
              },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a database",
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
              description: "Name of the Azure SQL Database",
              args: { name: "name" },
            },
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
              name: ["--server", "-s"],
              description:
                "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
              args: { name: "server" },
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
          description: "Export a database to a bacpac",
          options: [
            {
              name: ["--admin-user", "-u"],
              description: "Required. Administrator login name",
              args: { name: "admin-user" },
              isRequired: true,
            },
            {
              name: "--storage-key",
              description: "Required. Storage key",
              args: { name: "storage-key" },
              isRequired: true,
            },
            {
              name: "--storage-key-type",
              description: "Required. Storage key type",
              args: {
                name: "storage-key-type",
                suggestions: [
                  "ManagedIdentity",
                  "SharedAccessKey",
                  "StorageAccessKey",
                ],
              },
              isRequired: true,
            },
            {
              name: "--storage-uri",
              description: "Required. Storage Uri",
              args: { name: "storage-uri" },
              isRequired: true,
            },
            acquirePolicyToken,
            {
              name: ["--admin-password", "-p"],
              description: "Required. Administrator login password",
              args: { name: "admin-password" },
            },
            {
              name: ["--auth-type", "-a"],
              description: "Authentication type",
              args: {
                name: "auth-type",
                suggestions: ["ADPassword", "ManagedIdentity", "SQL"],
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
              name: ["--name", "-n"],
              description: "Name of the Azure SQL Database",
              args: { name: "name" },
            },
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
              name: ["--server", "-s"],
              description:
                "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
              args: { name: "server" },
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
            "Imports a bacpac into a new database, or an existing empty database",
          options: [
            {
              name: ["--admin-user", "-u"],
              description: "Required. Administrator login name",
              args: { name: "admin-user" },
              isRequired: true,
            },
            {
              name: "--storage-key",
              description: "Required. Storage key",
              args: { name: "storage-key" },
              isRequired: true,
            },
            {
              name: "--storage-key-type",
              description: "Required. Storage key type",
              args: {
                name: "storage-key-type",
                suggestions: [
                  "ManagedIdentity",
                  "SharedAccessKey",
                  "StorageAccessKey",
                ],
              },
              isRequired: true,
            },
            {
              name: "--storage-uri",
              description: "Required. Storage Uri",
              args: { name: "storage-uri" },
              isRequired: true,
            },
            acquirePolicyToken,
            {
              name: ["--admin-password", "-p"],
              description: "Required. Administrator login password",
              args: { name: "admin-password" },
            },
            {
              name: ["--auth-type", "-a"],
              description: "Authentication type",
              args: {
                name: "auth-type",
                suggestions: ["ADPassword", "ManagedIdentity", "SQL"],
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
              name: ["--name", "-n"],
              description: "Name of the Azure SQL Database",
              args: { name: "name" },
            },
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
              name: ["--server", "-s"],
              description:
                "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
              args: { name: "server" },
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
          description: "List databases on a server or elastic pool",
          options: [
            {
              name: "--elastic-pool",
              description:
                "If specified, lists only the databases in this elastic pool",
              args: { name: "elastic-pool" },
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
              name: ["--server", "-s"],
              description:
                "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
              args: { name: "server" },
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
          name: "list-deleted",
          description: "Get a list of restorable dropped databases",
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
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: ["--server", "-s"],
              description:
                "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
              args: { name: "server" },
            },
            {
              name: "--skiptoken",
              description:
                "The continuation token for the next page of deleted databases",
              args: { name: "skiptoken" },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
            {
              name: "--top",
              description: "The maximum number of deleted databases to return",
              args: { name: "top" },
            },
          ],
        },
        {
          name: "list-editions",
          description:
            "Show database editions available for the currently active subscription",
          options: [
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
              isRequired: true,
            },
            acquirePolicyToken,
            {
              name: ["--available", "-a"],
              description:
                "If specified, show only results that are available in the specified region",
            },
            changeReference,
            {
              name: "--dtu",
              description:
                "Number of DTUs to search for. If unspecified, all DTU sizes are shown",
              args: { name: "dtu" },
            },
            {
              name: ["--edition", "--tier", "-e"],
              description:
                "Edition to search for. If unspecified, all editions are shown",
              args: { name: "edition" },
            },
            {
              name: "--service-objective",
              description:
                "Service objective to search for. If unspecified, all service objectives are shown",
              args: { name: "service-objective" },
            },
            {
              name: ["--show-details", "-d"],
              description: "List of additional details to include in output",
              args: {
                name: "show-details",
                suggestions: ["max-size"],
                isVariadic: true,
              },
            },
            {
              name: "--vcores",
              description:
                "Number of vcores to search for. If unspecified, all vcore sizes are shown",
              args: { name: "vcores" },
            },
          ],
        },
        {
          name: "list-usages",
          description: "Gets database usages",
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
              description: "Name of the Azure SQL Database",
              args: { name: "name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: ["--server", "-s"],
              description:
                "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
              args: { name: "server" },
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
          name: "rename",
          description: "Rename a database",
          options: [
            {
              name: "--new-name",
              description: "The new name that the database will be renamed to",
              args: { name: "new-name" },
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
              description: "Name of the Azure SQL Database",
              args: { name: "name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: ["--server", "-s"],
              description:
                "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
              args: { name: "server" },
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
          name: "restore",
          description: "Create a new database by restoring from a backup",
          options: [
            {
              name: "--dest-name",
              description:
                "Name of the database that will be created as the restore destination",
              args: { name: "dest-name" },
              isRequired: true,
            },
            acquirePolicyToken,
            {
              name: ["--assign-identity", "-i"],
              description: "Assign identity for database",
              args: {
                name: "assign-identity",
                suggestions: ["false", "true"],
                isOptional: true,
              },
            },
            {
              name: "--auto-pause-delay",
              description:
                "Time in minutes after which database is automatically paused. A value of -1 means that automatic pause is disabled",
              args: { name: "auto-pause-delay" },
            },
            {
              name: "--availability-zone",
              description: "Availability zone",
              args: { name: "availability-zone" },
            },
            {
              name: ["--backup-storage-redundancy", "--bsr"],
              description:
                "Backup storage redundancy used to store backups. Allowed values include: Local, Zone, Geo, GeoZone",
              args: { name: "backup-storage-redundancy" },
            },
            {
              name: ["--capacity", "-c"],
              description:
                "The capacity component of the sku in integer number of DTUs or vcores",
              args: { name: "capacity" },
            },
            changeReference,
            {
              name: "--compute-model",
              description: "The compute model of the database",
              args: {
                name: "compute-model",
                suggestions: ["Provisioned", "Serverless"],
              },
            },
            {
              name: "--deleted-time",
              description:
                'If specified, restore from a deleted database instead of from an existing database. Must match the deleted time of a deleted database in the same server. Either --time or --deleted-time (or both) must be specified. Time should be in following format: "YYYY-MM-DDTHH:MM:SS"',
              args: { name: "deleted-time" },
            },
            {
              name: ["--edition", "--tier", "-e"],
              description:
                "The edition component of the sku. Allowed values include: Basic, Standard, Premium, GeneralPurpose, BusinessCritical, Hyperscale",
              args: { name: "edition" },
            },
            {
              name: "--elastic-pool",
              description:
                "The name or resource id of the elastic pool to create the database in",
              args: { name: "elastic-pool" },
            },
            {
              name: "--encryption-protector",
              description:
                "Specifies the Azure key vault key to be used as database encryption protector key",
              args: { name: "encryption-protector" },
            },
            {
              name: ["--encryption-protector-auto-rotation", "--epauto"],
              description:
                "Specifies the database encryption protector key auto rotation flag. Can be either true, false or null",
              args: {
                name: "encryption-protector-auto-rotation",
                suggestions: ["false", "true"],
                isOptional: true,
              },
            },
            {
              name: ["--family", "-f"],
              description:
                "The compute generation component of the sku (for vcore skus only). Allowed values include: Gen4, Gen5",
              args: { name: "family" },
            },
            {
              name: "--federated-client-id",
              description:
                "The federated client id for the SQL Database. It is used for cross tenant CMK scenario",
              args: { name: "federated-client-id" },
            },
            {
              name: ["--read-replicas", "--ha-replicas"],
              description:
                "The number of high availability replicas to provision for the database. Only settable for Hyperscale edition",
              args: { name: "read-replicas" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids", isVariadic: true },
            },
            {
              name: "--keys",
              description: "The list of AKV keys for the SQL Database",
              args: { name: "keys", isVariadic: true },
            },
            {
              name: "--license-type",
              description:
                "The license type to apply for this database.LicenseIncluded if you need a license, or BasePriceif you have a license and are eligible for the Azure HybridBenefit",
              args: {
                name: "license-type",
                suggestions: ["BasePrice", "LicenseIncluded"],
              },
            },
            {
              name: "--min-capacity",
              description:
                "Minimal capacity that database will always have allocated, if not paused",
              args: { name: "min-capacity" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the Azure SQL Database",
              args: { name: "name" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: "--preferred-enclave-type",
              description: "Specifies type of enclave for this resource",
              args: {
                name: "preferred-enclave-type",
                suggestions: ["Default", "VBS"],
              },
            },
            {
              name: "--read-scale",
              description:
                "If enabled, connections that have application intent set to readonly in their connection string may be routed to a readonly secondary replica. This property is only settable for Premium and Business Critical databases",
              args: {
                name: "read-scale",
                suggestions: ["Disabled", "Enabled"],
              },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: ["--server", "-s"],
              description:
                "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
              args: { name: "server" },
            },
            {
              name: ["--service-level-objective", "--service-objective"],
              description:
                "The service objective for the new database. For example: Basic, S0, P1, GP_Gen4_1, GP_S_Gen5_8, BC_Gen5_2, HS_Gen5_32",
              args: { name: "service-level-objective" },
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
              name: ["--time", "-t"],
              description:
                'The point in time of the source database that will be restored to create the new database. Must be greater than or equal to the source database\'s earliestRestoreDate value. Either --time or --deleted-time (or both) must be specified. Time should be in following format: "YYYY-MM-DDTHH:MM:SS"',
              args: { name: "time" },
            },
            {
              name: ["--user-assigned-identity-id", "--umi"],
              description:
                "The list of user assigned identity for the SQL Database",
              args: { name: "user-assigned-identity-id", isVariadic: true },
            },
            {
              name: ["--zone-redundant", "-z"],
              description:
                "Specifies whether to enable zone redundancy. Default is true if no value is specified",
              args: {
                name: "zone-redundant",
                suggestions: ["false", "true"],
                isOptional: true,
              },
            },
          ],
        },
        {
          name: "show",
          description: "Get the details for a database",
          options: [
            {
              name: "--expand-keys",
              description: "Expand the AKV keys for the database",
              args: {
                name: "expand-keys",
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
              name: "--keys-filter",
              description: "Expand the AKV keys for the database",
              args: { name: "keys-filter" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the Azure SQL Database",
              args: { name: "name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: ["--server", "-s"],
              description:
                "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
              args: { name: "server" },
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
          name: "show-connection-string",
          description: "Generates a connection string to a database",
          options: [
            {
              name: ["--client", "-c"],
              description: "Type of client connection provider",
              args: {
                name: "client",
                suggestions: [
                  "ado.net",
                  "jdbc",
                  "odbc",
                  "php",
                  "php_pdo",
                  "sqlcmd",
                ],
              },
              isRequired: true,
            },
            acquirePolicyToken,
            {
              name: ["--auth-type", "-a"],
              description: "Type of authentication",
              args: {
                name: "auth-type",
                suggestions: ["ADIntegrated", "ADPassword", "SqlPassword"],
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
              name: ["--name", "-n"],
              description: "Name of the Azure SQL Database",
              args: { name: "name" },
            },
            {
              name: ["--server", "-s"],
              description:
                "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
              args: { name: "server" },
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
          name: "show-deleted",
          description: "Get the details for a deleted database",
          options: [
            {
              name: ["--restorable-dropped-database-id", "-r"],
              description: "Restorable dropped database id",
              args: { name: "restorable-dropped-database-id" },
              isRequired: true,
            },
            acquirePolicyToken,
            changeReference,
            {
              name: "--expand-keys",
              description: "Expand the AKV keys for the database",
              args: {
                name: "expand-keys",
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
              name: "--keys-filter",
              description: "Expand the AKV keys for the database",
              args: { name: "keys-filter" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: ["--server", "-s"],
              description:
                "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
              args: { name: "server" },
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
          description: "Update a database",
          options: [
            acquirePolicyToken,
            {
              name: "--add",
              description:
                "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
              args: { name: "add", isVariadic: true },
            },
            {
              name: ["--assign-identity", "-i"],
              description: "Assign identity for database",
              args: {
                name: "assign-identity",
                suggestions: ["false", "true"],
                isOptional: true,
              },
            },
            {
              name: "--auto-pause-delay",
              description:
                "Time in minutes after which database is automatically paused. A value of -1 means that automatic pause is disabled",
              args: { name: "auto-pause-delay" },
            },
            {
              name: ["--backup-storage-redundancy", "--bsr"],
              description:
                "Backup storage redundancy used to store backups. Allowed values include: Local, Zone, Geo, GeoZone",
              args: { name: "backup-storage-redundancy" },
            },
            {
              name: ["--capacity", "-c"],
              description:
                "The capacity component of the sku in integer number of DTUs or vcores",
              args: { name: "capacity" },
            },
            changeReference,
            {
              name: "--compute-model",
              description: "The compute model of the database",
              args: {
                name: "compute-model",
                suggestions: ["Provisioned", "Serverless"],
              },
            },
            {
              name: ["--edition", "--tier", "-e"],
              description:
                "The edition component of the sku. Allowed values include: Basic, Standard, Premium, GeneralPurpose, BusinessCritical, Hyperscale",
              args: { name: "edition" },
            },
            {
              name: "--elastic-pool",
              description:
                "The name or resource id of the elastic pool to move the database into",
              args: { name: "elastic-pool" },
            },
            {
              name: "--encryption-protector",
              description:
                "Specifies the Azure key vault key to be used as database encryption protector key",
              args: { name: "encryption-protector" },
            },
            {
              name: ["--encryption-protector-auto-rotation", "--epauto"],
              description:
                "Specifies the database encryption protector key auto rotation flag. Can be either true, false or null",
              args: {
                name: "encryption-protector-auto-rotation",
                suggestions: ["false", "true"],
                isOptional: true,
              },
            },
            {
              name: [
                "--free-limit-exhaustion-behavior",
                "--exhaustion-behavior",
                "--fleb",
              ],
              description:
                "Specifies the behavior when monthly free limits are exhausted for the free database.AutoPause: The database will be auto paused upon exhaustion of free limits for remainder of the month.BillForUsage: The database will continue to be online upon exhaustion of free limitsand any overage will be billed",
              args: {
                name: "free-limit-exhaustion-behavior",
                suggestions: ["AutoPause", "BillOverUsage"],
              },
            },
            {
              name: ["--family", "-f"],
              description:
                "The compute generation component of the sku (for vcore skus only). Allowed values include: Gen4, Gen5",
              args: { name: "family" },
            },
            {
              name: "--federated-client-id",
              description:
                "The federated client id for the SQL Database. It is used for cross tenant CMK scenario",
              args: { name: "federated-client-id" },
            },
            {
              name: "--filter",
              description:
                "An OData filter expression to apply to the response",
              args: { name: "filter" },
            },
            {
              name: "--force-string",
              description:
                "When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON",
            },
            {
              name: ["--use-free-limit", "--free-limit"],
              description:
                "Whether or not the database uses free monthly limits. Allowed on one database in a subscription",
              args: {
                name: "use-free-limit",
                suggestions: ["false", "true"],
                isOptional: true,
              },
            },
            {
              name: ["--read-replicas", "--ha-replicas"],
              description:
                "The number of high availability replicas to provision for the database. Only settable for Hyperscale edition",
              args: { name: "read-replicas" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids", isVariadic: true },
            },
            {
              name: "--keys",
              description: "The list of AKV keys for the SQL Database",
              args: { name: "keys", isVariadic: true },
            },
            {
              name: "--keys-to-remove",
              description:
                "The list of AKV keys to remove from the SQL Database",
              args: { name: "keys-to-remove", isVariadic: true },
            },
            {
              name: ["--maint-config-id", "-m"],
              description:
                "Specified maintenance configuration id or name for this resource",
              args: { name: "maint-config-id" },
            },
            {
              name: "--manual-cutover",
              description:
                "Whether to do manual cutover during Update SLO. Allowed when updating database to Hyperscale tier",
              args: {
                name: "manual-cutover",
                suggestions: ["false", "true"],
                isOptional: true,
              },
            },
            {
              name: "--max-size",
              description:
                "The new maximum size of the database expressed in bytes",
              args: { name: "max-size" },
            },
            {
              name: "--min-capacity",
              description:
                "Minimal capacity that database will always have allocated, if not paused",
              args: { name: "min-capacity" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the Azure SQL Database",
              args: { name: "name" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: "--perform-cutover",
              description:
                "Whether to perform cutover when updating database to Hyperscale tier is in progress",
              args: {
                name: "perform-cutover",
                suggestions: ["false", "true"],
                isOptional: true,
              },
            },
            {
              name: "--preferred-enclave-type",
              description: "Specifies type of enclave for this resource",
              args: {
                name: "preferred-enclave-type",
                suggestions: ["Default", "VBS"],
              },
            },
            {
              name: "--read-scale",
              description:
                "If enabled, connections that have application intent set to readonly in their connection string may be routed to a readonly secondary replica. This property is only settable for Premium and Business Critical databases",
              args: {
                name: "read-scale",
                suggestions: ["Disabled", "Enabled"],
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
              name: ["--server", "-s"],
              description:
                "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
              args: { name: "server" },
            },
            {
              name: "--service-objective",
              description:
                "The name of the new service objective. If this is a standalone db service objective and the db is currently in an elastic pool, then the db is removed from the pool",
              args: { name: "service-objective" },
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
              name: ["--user-assigned-identity-id", "--umi"],
              description:
                "The list of user assigned identity for the SQL Database",
              args: { name: "user-assigned-identity-id", isVariadic: true },
            },
            {
              name: ["--zone-redundant", "-z"],
              description:
                "Specifies whether to enable zone redundancy. Default is true if no value is specified",
              args: {
                name: "zone-redundant",
                suggestions: ["false", "true"],
                isOptional: true,
              },
            },
          ],
        },
        {
          name: "advanced-threat-protection-setting",
          description: "Manage a database's advanced threat protection setting",
          subcommands: [
            {
              name: "show",
              description: "Gets an advanced threat protection setting",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the Azure SQL Database",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--server", "-s"],
                  description:
                    "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
                  args: { name: "server" },
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
                "Update a database's advanced threat protection setting",
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
                  description: "Name of the Azure SQL Database",
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
                  name: ["--server", "-s"],
                  description:
                    "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
                  args: { name: "server" },
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
                    "State of the advanced threat protection setting",
                  args: { name: "state" },
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
          name: "audit-policy",
          description: "Manage a database's auditing policy",
          subcommands: [
            {
              name: "show",
              description: "Show database audit policy",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the Azure SQL Database",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--server", "-s"],
                  description:
                    "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
                  args: { name: "server" },
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
              description: "Update a database's auditing policy",
              options: [
                acquirePolicyToken,
                {
                  name: "--actions",
                  description:
                    "List of actions and action groups to audit.These are space seperated values.Example: --actions FAILED_DATABASE_AUTHENTICATION_GROUP BATCH_COMPLETED_GROUP",
                  args: { name: "actions", isVariadic: true },
                },
                {
                  name: "--add",
                  description:
                    "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
                  args: { name: "add", isVariadic: true },
                },
                {
                  name: ["--blob-storage-target-state", "--bsts"],
                  description:
                    "Indicate whether blob storage is a destination for audit records",
                  args: {
                    name: "blob-storage-target-state",
                    suggestions: ["Disabled", "Enabled"],
                  },
                },
                changeReference,
                {
                  name: ["--event-hub", "--eh"],
                  description:
                    "The name of the event hub. If none is specified when providing event_hub_authorization_rule_id, the default event hub will be selected",
                  args: { name: "event-hub" },
                },
                {
                  name: ["--event-hub-authorization-rule-id", "--ehari"],
                  description:
                    "The resource Id for the event hub authorization rule",
                  args: { name: "event-hub-authorization-rule-id" },
                },
                {
                  name: ["--event-hub-target-state", "--ehts"],
                  description:
                    "Indicate whether event hub is a destination for audit records",
                  args: {
                    name: "event-hub-target-state",
                    suggestions: ["Disabled", "Enabled"],
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
                  name: ["--log-analytics-target-state", "--lats"],
                  description:
                    "Indicate whether log analytics is a destination for audit records",
                  args: {
                    name: "log-analytics-target-state",
                    suggestions: ["Disabled", "Enabled"],
                  },
                },
                {
                  name: ["--log-analytics-workspace-resource-id", "--lawri"],
                  description:
                    "The workspace ID (resource ID of a Log Analytics workspace) for a Log Analytics workspace to which you would like to send Audit Logs",
                  args: { name: "log-analytics-workspace-resource-id" },
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the Azure SQL Database",
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
                  name: "--retention-days",
                  description: "The number of days to retain audit logs",
                  args: { name: "retention-days" },
                },
                {
                  name: ["--server", "-s"],
                  description:
                    "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
                  args: { name: "server" },
                },
                {
                  name: "--set",
                  description:
                    "Update an object by specifying a property path and value to set. Example: --set property1.property2=<value>",
                  args: { name: "set", isVariadic: true },
                },
                {
                  name: "--state",
                  description: "Auditing policy state",
                  args: { name: "state", suggestions: ["Disabled", "Enabled"] },
                },
                {
                  name: "--storage-account",
                  description: "Name of the storage account",
                  args: { name: "storage-account" },
                },
                {
                  name: "--storage-endpoint",
                  description: "The storage account endpoint",
                  args: { name: "storage-endpoint" },
                },
                {
                  name: "--storage-key",
                  description: "Access key for the storage account",
                  args: { name: "storage-key" },
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
                "Place the CLI in a waiting state until a condition of the database's audit policy is met",
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
                  description: "Name of the Azure SQL Database",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--server", "-s"],
                  description:
                    "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
                  args: { name: "server" },
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
          name: "classification",
          description: "Manage sensitivity classifications",
          subcommands: [
            {
              name: "delete",
              description:
                "Delete the sensitivity classification of a given column",
              options: [
                {
                  name: "--column",
                  description: "The name of the column",
                  args: { name: "column" },
                  isRequired: true,
                },
                {
                  name: "--schema",
                  description: "The name of the schema",
                  args: { name: "schema" },
                  isRequired: true,
                },
                {
                  name: "--table",
                  description: "The name of the table",
                  args: { name: "table" },
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
                  description: "Name of the Azure SQL Database",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--server", "-s"],
                  description:
                    "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
                  args: { name: "server" },
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
                "Get the sensitivity classifications of a given database",
              options: [
                { name: "--count", args: { name: "count" } },
                {
                  name: "--filter",
                  description:
                    "An OData filter expression to apply to the response",
                  args: { name: "filter" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the Azure SQL Database",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--server", "-s"],
                  description:
                    "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
                  args: { name: "server" },
                },
                { name: "--skip-token", args: { name: "skip-token" } },
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
                "Get the sensitivity classification of a given column",
              options: [
                {
                  name: "--column",
                  description: "The name of the column",
                  args: { name: "column" },
                  isRequired: true,
                },
                {
                  name: "--schema",
                  description: "The name of the schema",
                  args: { name: "schema" },
                  isRequired: true,
                },
                {
                  name: "--table",
                  description: "The name of the table",
                  args: { name: "table" },
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
                  description: "Name of the Azure SQL Database",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--server", "-s"],
                  description:
                    "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
                  args: { name: "server" },
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
              description: "Update a columns's sensitivity classification",
              options: [
                {
                  name: "--column",
                  description: "The name of the column",
                  args: { name: "column" },
                  isRequired: true,
                },
                {
                  name: "--schema",
                  description: "The name of the schema",
                  args: { name: "schema" },
                  isRequired: true,
                },
                {
                  name: "--table",
                  description: "The name of the table",
                  args: { name: "table" },
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
                  name: "--information-type",
                  description: "The information type",
                  args: { name: "information-type" },
                },
                {
                  name: "--label",
                  description: "The label name",
                  args: { name: "label" },
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the Azure SQL Database",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--server", "-s"],
                  description:
                    "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
                  args: { name: "server" },
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
              name: "recommendation",
              description: "Manage sensitivity classification recommendations",
              subcommands: [
                {
                  name: "disable",
                  description:
                    "Disable sensitivity recommendations for a given column (recommendations are enabled by default on all columns)",
                  options: [
                    {
                      name: "--column",
                      description: "The name of the column",
                      args: { name: "column" },
                      isRequired: true,
                    },
                    {
                      name: "--schema",
                      description: "The name of the schema",
                      args: { name: "schema" },
                      isRequired: true,
                    },
                    {
                      name: "--table",
                      description: "The name of the table",
                      args: { name: "table" },
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
                      description: "Name of the Azure SQL Database",
                      args: { name: "name" },
                    },
                    {
                      name: ["--resource-group", "-g"],
                      description:
                        "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                      args: { name: "resource-group" },
                    },
                    {
                      name: ["--server", "-s"],
                      description:
                        "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
                      args: { name: "server" },
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
                  name: "enable",
                  description:
                    "Enable sensitivity recommendations for a given column (recommendations are enabled by default on all columns)",
                  options: [
                    {
                      name: "--column",
                      description: "The name of the column",
                      args: { name: "column" },
                      isRequired: true,
                    },
                    {
                      name: "--schema",
                      description: "The name of the schema",
                      args: { name: "schema" },
                      isRequired: true,
                    },
                    {
                      name: "--table",
                      description: "The name of the table",
                      args: { name: "table" },
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
                      description: "Name of the Azure SQL Database",
                      args: { name: "name" },
                    },
                    {
                      name: ["--resource-group", "-g"],
                      description:
                        "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                      args: { name: "resource-group" },
                    },
                    {
                      name: ["--server", "-s"],
                      description:
                        "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
                      args: { name: "server" },
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
                    "List the recommended sensitivity classifications of a given database",
                  options: [
                    {
                      name: "--filter",
                      description:
                        "An OData filter expression to apply to the response",
                      args: { name: "filter" },
                    },
                    {
                      name: "--ids",
                      description:
                        "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                      args: { name: "ids", isVariadic: true },
                    },
                    {
                      name: "--include-disabled-recommendations",
                      description:
                        "Whether to include disabled sensitivity-classification recommendations",
                      args: { name: "include-disabled-recommendations" },
                    },
                    {
                      name: ["--name", "-n"],
                      description: "Name of the Azure SQL Database",
                      args: { name: "name" },
                    },
                    {
                      name: ["--resource-group", "-g"],
                      description:
                        "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                      args: { name: "resource-group" },
                    },
                    {
                      name: ["--server", "-s"],
                      description:
                        "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
                      args: { name: "server" },
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
          name: "geo-backup",
          description: "Manage SQL database geo redundant backups",
          subcommands: [
            {
              name: "list",
              description: "Gets a list of recoverable databases",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Retrieves all requested geo-redundant backups under this resource group",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--server-name", "--server", "-s"],
                  description:
                    "Retrieves all requested geo-redundant backups under this server",
                  args: { name: "server-name" },
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
              name: "restore",
              description: "Restore a geo-redundant backup to a new database",
              options: [
                {
                  name: "--dest-database",
                  description:
                    "Name of the database that will be created as the restore destination",
                  args: { name: "dest-database" },
                  isRequired: true,
                },
                {
                  name: "--dest-server",
                  description: "Name of the server to restore database to",
                  args: { name: "dest-server" },
                  isRequired: true,
                },
                {
                  name: "--geo-backup-id",
                  description:
                    "The resource id of the geo-redundant backup to be restored. Use 'az sql db geo-backup list' or 'az sql db geo-backup show' for backup id",
                  args: { name: "geo-backup-id" },
                  isRequired: true,
                },
                {
                  name: "--resource-group",
                  description:
                    "Name of the target resource group of the server to restore database to",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
                acquirePolicyToken,
                {
                  name: ["--assign-identity", "-i"],
                  description: "Assign identity for database",
                  args: {
                    name: "assign-identity",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: "--auto-pause-delay",
                  description:
                    "Time in minutes after which database is automatically paused. A value of -1 means that automatic pause is disabled",
                  args: { name: "auto-pause-delay" },
                },
                {
                  name: "--availability-zone",
                  description: "Availability zone",
                  args: { name: "availability-zone" },
                },
                {
                  name: ["--backup-storage-redundancy", "--bsr"],
                  description:
                    "Backup storage redundancy used to store backups. Allowed values include: Local, Zone, Geo, GeoZone",
                  args: { name: "backup-storage-redundancy" },
                },
                {
                  name: ["--capacity", "-c"],
                  description:
                    "The capacity component of the sku in integer number of DTUs or vcores",
                  args: { name: "capacity" },
                },
                changeReference,
                {
                  name: "--compute-model",
                  description: "The compute model of the database",
                  args: {
                    name: "compute-model",
                    suggestions: ["Provisioned", "Serverless"],
                  },
                },
                {
                  name: ["--edition", "--tier", "-e"],
                  description:
                    "The edition component of the sku. Allowed values include: Basic, Standard, Premium, GeneralPurpose, BusinessCritical, Hyperscale",
                  args: { name: "edition" },
                },
                {
                  name: "--elastic-pool",
                  description:
                    "The name or resource id of the elastic pool to create the database in",
                  args: { name: "elastic-pool" },
                },
                {
                  name: "--encryption-protector",
                  description:
                    "Specifies the Azure key vault key to be used as database encryption protector key",
                  args: { name: "encryption-protector" },
                },
                {
                  name: ["--encryption-protector-auto-rotation", "--epauto"],
                  description:
                    "Specifies the database encryption protector key auto rotation flag. Can be either true, false or null",
                  args: {
                    name: "encryption-protector-auto-rotation",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: ["--family", "-f"],
                  description:
                    "The compute generation component of the sku (for vcore skus only). Allowed values include: Gen4, Gen5",
                  args: { name: "family" },
                },
                {
                  name: "--federated-client-id",
                  description:
                    "The federated client id for the SQL Database. It is used for cross tenant CMK scenario",
                  args: { name: "federated-client-id" },
                },
                {
                  name: ["--read-replicas", "--ha-replicas"],
                  description:
                    "The number of high availability replicas to provision for the database. Only settable for Hyperscale edition",
                  args: { name: "read-replicas" },
                },
                {
                  name: "--keys",
                  description: "The list of AKV keys for the SQL Database",
                  args: { name: "keys", isVariadic: true },
                },
                {
                  name: "--license-type",
                  description:
                    "The license type to apply for this database.LicenseIncluded if you need a license, or BasePriceif you have a license and are eligible for the Azure HybridBenefit",
                  args: {
                    name: "license-type",
                    suggestions: ["BasePrice", "LicenseIncluded"],
                  },
                },
                {
                  name: "--min-capacity",
                  description:
                    "Minimal capacity that database will always have allocated, if not paused",
                  args: { name: "min-capacity" },
                },
                {
                  name: "--preferred-enclave-type",
                  description: "Specifies type of enclave for this resource",
                  args: {
                    name: "preferred-enclave-type",
                    suggestions: ["Default", "VBS"],
                  },
                },
                {
                  name: "--read-scale",
                  description:
                    "If enabled, connections that have application intent set to readonly in their connection string may be routed to a readonly secondary replica. This property is only settable for Premium and Business Critical databases",
                  args: {
                    name: "read-scale",
                    suggestions: ["Disabled", "Enabled"],
                  },
                },
                {
                  name: ["--service-level-objective", "--service-objective"],
                  description:
                    "The service objective for the new database. For example: Basic, S0, P1, GP_Gen4_1, GP_S_Gen5_8, BC_Gen5_2, HS_Gen5_32",
                  args: { name: "service-level-objective" },
                },
                {
                  name: "--tags",
                  description:
                    "Space-separated tags: key[=value] [key[=value] ...]. Use '' to clear existing tags",
                  args: { name: "tags", isOptional: true, isVariadic: true },
                },
                {
                  name: ["--user-assigned-identity-id", "--umi"],
                  description:
                    "The list of user assigned identity for the SQL Database",
                  args: { name: "user-assigned-identity-id", isVariadic: true },
                },
                {
                  name: ["--zone-redundant", "-z"],
                  description:
                    "Specifies whether to enable zone redundancy. Default is true if no value is specified",
                  args: {
                    name: "zone-redundant",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
              ],
            },
            {
              name: "show",
              description:
                "Gets a recoverable database, which is a resource representing a database's geo backup",
              options: [
                {
                  name: ["--database-name", "--database", "-d"],
                  description:
                    "Retrieves a requested geo-redundant backup under this database",
                  args: { name: "database-name" },
                },
                {
                  name: "--expand-keys",
                  description: "Expand the AKV keys for the database",
                  args: {
                    name: "expand-keys",
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
                  name: "--keys-filter",
                  description: "Expand the AKV keys for the database",
                  args: { name: "keys-filter" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Retrieves a requested geo-redundant backup under this resource group",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--server-name", "--server", "-s"],
                  description:
                    "Retrieves a requested geo-redundant backup under this server",
                  args: { name: "server-name" },
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
          name: "ledger-digest-uploads",
          description: "Manage ledger digest upload settings",
          subcommands: [
            {
              name: "disable",
              description: "Disable uploading ledger digests",
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
                  description: "Name of the Azure SQL Database",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--server", "-s"],
                  description:
                    "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
                  args: { name: "server" },
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
              name: "enable",
              description:
                "Enable uploading ledger digests to an Azure Storage account or to Azure Confidential Ledger. If uploading ledger digests is already enabled, the cmdlet resets the digest storage endpoint to a new value",
              options: [
                {
                  name: "--endpoint",
                  description:
                    "The endpoint of a digest storage, which can be either an Azure Blob storage or a ledger in Azure Confidential Ledger",
                  args: { name: "endpoint" },
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
                  description: "Name of the Azure SQL Database",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--server", "-s"],
                  description:
                    "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
                  args: { name: "server" },
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
              description: "Show the current ledger digest settings",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the Azure SQL Database",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--server", "-s"],
                  description:
                    "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
                  args: { name: "server" },
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
          name: "ltr-backup",
          description: "Manage SQL database long term retention backups",
          subcommands: [
            {
              name: "delete",
              description: "Delete a long term retention backup",
              options: [
                {
                  name: ["--database", "-d"],
                  description:
                    "Name of the Azure SQL Database. If specified (along with server name), retrieves all requested backups under this database",
                  args: { name: "database" },
                  isRequired: true,
                },
                {
                  name: ["--location", "-l"],
                  description: "The location of the desired backups",
                  args: { name: "location" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "The name of the LTR backup. Use 'az sql db ltr-backup show' or 'az sql db ltr-backup list' for backup name",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: ["--server", "-s"],
                  description:
                    "Name of the Azure SQL Server. If specified, retrieves all requested backups under this server",
                  args: { name: "server" },
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
                "List the long term retention backups for a location, server or database",
              options: [
                {
                  name: ["--location", "-l"],
                  description: "The location of the desired backups",
                  args: { name: "location" },
                  isRequired: true,
                },
                {
                  name: ["--database", "-d"],
                  description:
                    "Name of the Azure SQL Database. If specified (along with server name), retrieves all requested backups under this database",
                  args: { name: "database" },
                },
                {
                  name: ["--database-state", "--state"],
                  description:
                    "'All', 'Live', or 'Deleted'. Will fetch backups only from databases of specified state. If no state provied, defaults to 'All'",
                  args: { name: "database-state" },
                },
                {
                  name: ["--only-latest-per-database", "--latest"],
                  description:
                    "If true, will only return the latest backup for each database",
                  args: { name: "only-latest-per-database" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--server", "-s"],
                  description:
                    "Name of the Azure SQL Server. If specified, retrieves all requested backups under this server",
                  args: { name: "server" },
                },
              ],
            },
            {
              name: "lock-time-based-immutability",
              description:
                "Lock the time based immutability on a long term retention backup to prevent deletion",
              options: [
                {
                  name: ["--database", "-d"],
                  description:
                    "Name of the Azure SQL Database. If specified (along with server name), retrieves all requested backups under this database",
                  args: { name: "database" },
                  isRequired: true,
                },
                {
                  name: ["--location", "-l"],
                  description: "The location of the desired backups",
                  args: { name: "location" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "The name of the LTR backup. Use 'az sql db ltr-backup show' or 'az sql db ltr-backup list' for backup name",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: ["--server", "-s"],
                  description:
                    "Name of the Azure SQL Server. If specified, retrieves all requested backups under this server",
                  args: { name: "server" },
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
              name: "remove-legal-hold-immutability",
              description:
                "Remove a legal hold on the long term retention backup database",
              options: [
                {
                  name: ["--database", "-d"],
                  description:
                    "Name of the Azure SQL Database. If specified (along with server name), retrieves all requested backups under this database",
                  args: { name: "database" },
                  isRequired: true,
                },
                {
                  name: ["--location", "-l"],
                  description: "The location of the desired backups",
                  args: { name: "location" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "The name of the LTR backup. Use 'az sql db ltr-backup show' or 'az sql db ltr-backup list' for backup name",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: ["--server", "-s"],
                  description:
                    "Name of the Azure SQL Server. If specified, retrieves all requested backups under this server",
                  args: { name: "server" },
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
              name: "remove-time-based-immutability",
              description:
                "Disable the time based immutability on a long term retention backup",
              options: [
                {
                  name: ["--database", "-d"],
                  description:
                    "Name of the Azure SQL Database. If specified (along with server name), retrieves all requested backups under this database",
                  args: { name: "database" },
                  isRequired: true,
                },
                {
                  name: ["--location", "-l"],
                  description: "The location of the desired backups",
                  args: { name: "location" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "The name of the LTR backup. Use 'az sql db ltr-backup show' or 'az sql db ltr-backup list' for backup name",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: ["--server", "-s"],
                  description:
                    "Name of the Azure SQL Server. If specified, retrieves all requested backups under this server",
                  args: { name: "server" },
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
              name: "restore",
              description:
                "Restore a long term retention backup to a new database",
              options: [
                {
                  name: "--backup-id",
                  description:
                    "The resource id of the long term retention backup to be restored. Use 'az sql db ltr-backup show' or 'az sql db ltr-backup list' for backup id",
                  args: { name: "backup-id" },
                  isRequired: true,
                },
                {
                  name: "--dest-database",
                  description:
                    "Name of the database that will be created as the restore destination",
                  args: { name: "dest-database" },
                  isRequired: true,
                },
                {
                  name: "--dest-resource-group",
                  description:
                    "Name of the resource group of the server to restore database to",
                  args: { name: "dest-resource-group" },
                  isRequired: true,
                },
                {
                  name: "--dest-server",
                  description: "Name of the server to restore database to",
                  args: { name: "dest-server" },
                  isRequired: true,
                },
                acquirePolicyToken,
                {
                  name: ["--assign-identity", "-i"],
                  description: "Assign identity for database",
                  args: {
                    name: "assign-identity",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: "--auto-pause-delay",
                  description:
                    "Time in minutes after which database is automatically paused. A value of -1 means that automatic pause is disabled",
                  args: { name: "auto-pause-delay" },
                },
                {
                  name: "--availability-zone",
                  description: "Availability zone",
                  args: { name: "availability-zone" },
                },
                {
                  name: ["--backup-storage-redundancy", "--bsr"],
                  description:
                    "Backup storage redundancy used to store backups. Allowed values include: Local, Zone, Geo, GeoZone",
                  args: { name: "backup-storage-redundancy" },
                },
                {
                  name: ["--capacity", "-c"],
                  description:
                    "The capacity component of the sku in integer number of DTUs or vcores",
                  args: { name: "capacity" },
                },
                changeReference,
                {
                  name: "--compute-model",
                  description: "The compute model of the database",
                  args: {
                    name: "compute-model",
                    suggestions: ["Provisioned", "Serverless"],
                  },
                },
                {
                  name: ["--edition", "--tier", "-e"],
                  description:
                    "The edition component of the sku. Allowed values include: Basic, Standard, Premium, GeneralPurpose, BusinessCritical, Hyperscale",
                  args: { name: "edition" },
                },
                {
                  name: "--elastic-pool",
                  description:
                    "The name or resource id of the elastic pool to create the database in",
                  args: { name: "elastic-pool" },
                },
                {
                  name: "--encryption-protector",
                  description:
                    "Specifies the Azure key vault key to be used as database encryption protector key",
                  args: { name: "encryption-protector" },
                },
                {
                  name: ["--encryption-protector-auto-rotation", "--epauto"],
                  description:
                    "Specifies the database encryption protector key auto rotation flag. Can be either true, false or null",
                  args: {
                    name: "encryption-protector-auto-rotation",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: ["--family", "-f"],
                  description:
                    "The compute generation component of the sku (for vcore skus only). Allowed values include: Gen4, Gen5",
                  args: { name: "family" },
                },
                {
                  name: "--federated-client-id",
                  description:
                    "The federated client id for the SQL Database. It is used for cross tenant CMK scenario",
                  args: { name: "federated-client-id" },
                },
                {
                  name: ["--read-replicas", "--ha-replicas"],
                  description:
                    "The number of high availability replicas to provision for the database. Only settable for Hyperscale edition",
                  args: { name: "read-replicas" },
                },
                {
                  name: "--keys",
                  description: "The list of AKV keys for the SQL Database",
                  args: { name: "keys", isVariadic: true },
                },
                {
                  name: "--license-type",
                  description:
                    "The license type to apply for this database.LicenseIncluded if you need a license, or BasePriceif you have a license and are eligible for the Azure HybridBenefit",
                  args: {
                    name: "license-type",
                    suggestions: ["BasePrice", "LicenseIncluded"],
                  },
                },
                {
                  name: "--min-capacity",
                  description:
                    "Minimal capacity that database will always have allocated, if not paused",
                  args: { name: "min-capacity" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--preferred-enclave-type",
                  description: "Specifies type of enclave for this resource",
                  args: {
                    name: "preferred-enclave-type",
                    suggestions: ["Default", "VBS"],
                  },
                },
                {
                  name: "--read-scale",
                  description:
                    "If enabled, connections that have application intent set to readonly in their connection string may be routed to a readonly secondary replica. This property is only settable for Premium and Business Critical databases",
                  args: {
                    name: "read-scale",
                    suggestions: ["Disabled", "Enabled"],
                  },
                },
                {
                  name: ["--service-level-objective", "--service-objective"],
                  description:
                    "The service objective for the new database. For example: Basic, S0, P1, GP_Gen4_1, GP_S_Gen5_8, BC_Gen5_2, HS_Gen5_32",
                  args: { name: "service-level-objective" },
                },
                {
                  name: "--tags",
                  description:
                    "Space-separated tags: key[=value] [key[=value] ...]. Use '' to clear existing tags",
                  args: { name: "tags", isOptional: true, isVariadic: true },
                },
                {
                  name: ["--user-assigned-identity-id", "--umi"],
                  description:
                    "The list of user assigned identity for the SQL Database",
                  args: { name: "user-assigned-identity-id", isVariadic: true },
                },
                {
                  name: ["--zone-redundant", "-z"],
                  description:
                    "Specifies whether to enable zone redundancy. Default is true if no value is specified",
                  args: {
                    name: "zone-redundant",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
              ],
            },
            {
              name: "set-legal-hold-immutability",
              description:
                "Set a legal hold on the long term retention backup database",
              options: [
                {
                  name: ["--database", "-d"],
                  description:
                    "Name of the Azure SQL Database. If specified (along with server name), retrieves all requested backups under this database",
                  args: { name: "database" },
                  isRequired: true,
                },
                {
                  name: ["--location", "-l"],
                  description: "The location of the desired backups",
                  args: { name: "location" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "The name of the LTR backup. Use 'az sql db ltr-backup show' or 'az sql db ltr-backup list' for backup name",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: ["--server", "-s"],
                  description:
                    "Name of the Azure SQL Server. If specified, retrieves all requested backups under this server",
                  args: { name: "server" },
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
              name: "show",
              description: "Get a long term retention backup for a database",
              options: [
                {
                  name: ["--database", "-d"],
                  description:
                    "Name of the Azure SQL Database. If specified (along with server name), retrieves all requested backups under this database",
                  args: { name: "database" },
                  isRequired: true,
                },
                {
                  name: ["--location", "-l"],
                  description: "The location of the desired backups",
                  args: { name: "location" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "The name of the LTR backup. Use 'az sql db ltr-backup show' or 'az sql db ltr-backup list' for backup name",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: ["--server", "-s"],
                  description:
                    "Name of the Azure SQL Server. If specified, retrieves all requested backups under this server",
                  args: { name: "server" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "wait",
              description:
                "Place the CLI in a waiting state until a condition of the database is met",
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
                  name: "--expand",
                  description: "The child resources to include in the response",
                  args: { name: "expand" },
                },
                {
                  name: "--filter",
                  description:
                    "An OData filter expression to apply to the response",
                  args: { name: "filter" },
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
                  description: "Name of the Azure SQL Database",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--server", "-s"],
                  description:
                    "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
                  args: { name: "server" },
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
          name: "ltr-policy",
          description: "Manage SQL database long term retention policy",
          subcommands: [
            {
              name: "set",
              description: "Update long term retention settings for a database",
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
                  name: ["--make-backups-immutable", "--tb-immutability"],
                  description:
                    "Whether to enable time based immutability on the LTR backups. Possible values are: 'True', 'False', 'Enabled', 'Disabled'",
                  args: { name: "make-backups-immutable" },
                },
                {
                  name: "--monthly-retention",
                  description:
                    "Retention for the monthly backup. If just a number is passed instead of an ISO 8601 string, days will be assumed as the units.There is a minimum of 7 days and a maximum of 10 years",
                  args: { name: "monthly-retention" },
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the Azure SQL Database",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--server", "-s"],
                  description:
                    "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
                  args: { name: "server" },
                },
                {
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
                },
                {
                  name: "--tb-immutability-mode",
                  description:
                    "The mode of time based immutability to be set on the LTR backups. Possible values are: 'Locked', 'Unlocked'. This is only valid if make-backups-immutable is enabled",
                  args: { name: "tb-immutability-mode" },
                },
                {
                  name: "--week-of-year",
                  description:
                    "The Week of Year, 1 to 52, in which to take the yearly LTR backup",
                  args: { name: "week-of-year" },
                },
                {
                  name: "--weekly-retention",
                  description:
                    "Retention for the weekly backup. If just a number is passed instead of an ISO 8601 string, days will be assumed as the units.There is a minimum of 7 days and a maximum of 10 years",
                  args: { name: "weekly-retention" },
                },
                {
                  name: "--yearly-retention",
                  description:
                    "Retention for the yearly backup. If just a number is passed instead of an ISO 8601 string, days will be assumed as the units.There is a minimum of 7 days and a maximum of 10 years",
                  args: { name: "yearly-retention" },
                },
                {
                  name: ["--yes", "-y"],
                  description: "Do not prompt for confirmation",
                },
              ],
            },
            {
              name: "show",
              description: "Show the long term retention policy for a database",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the Azure SQL Database",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--server", "-s"],
                  description:
                    "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
                  args: { name: "server" },
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
          name: "op",
          description: "Manage operations on a database",
          subcommands: [
            {
              name: "cancel",
              description: "Cancels the asynchronous operation on the database",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "The unique name of the operation to cancel",
                  args: { name: "name" },
                  isRequired: true,
                },
                acquirePolicyToken,
                changeReference,
                {
                  name: ["--database", "-d"],
                  description: "Name of the Azure SQL Database",
                  args: { name: "database" },
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
                  name: ["--server", "-s"],
                  description:
                    "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
                  args: { name: "server" },
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
                "Gets a list of operations performed on the database",
              options: [
                {
                  name: ["--database", "-d"],
                  description: "Name of the Azure SQL Database",
                  args: { name: "database" },
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
                  name: ["--server", "-s"],
                  description:
                    "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
                  args: { name: "server" },
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
          name: "replica",
          description: "Manage replication between databases",
          subcommands: [
            {
              name: "create",
              description:
                "Create a database as a readable secondary replica of an existing database",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "Name of the Azure SQL Database",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: "--partner-server",
                  description:
                    "Name of the server to create the new replica in",
                  args: { name: "partner-server" },
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
                  name: ["--server", "-s"],
                  description:
                    "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
                  args: { name: "server" },
                  isRequired: true,
                },
                acquirePolicyToken,
                {
                  name: ["--assign-identity", "-i"],
                  description: "Assign identity for database",
                  args: {
                    name: "assign-identity",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: "--auto-pause-delay",
                  description:
                    "Time in minutes after which database is automatically paused. A value of -1 means that automatic pause is disabled",
                  args: { name: "auto-pause-delay" },
                },
                {
                  name: "--availability-zone",
                  description: "Availability zone",
                  args: { name: "availability-zone" },
                },
                {
                  name: ["--backup-storage-redundancy", "--bsr"],
                  description:
                    "Backup storage redundancy used to store backups. Allowed values include: Local, Zone, Geo, GeoZone",
                  args: { name: "backup-storage-redundancy" },
                },
                {
                  name: ["--capacity", "-c"],
                  description:
                    "The capacity component of the sku in integer number of DTUs or vcores",
                  args: { name: "capacity" },
                },
                changeReference,
                {
                  name: "--compute-model",
                  description: "The compute model of the database",
                  args: {
                    name: "compute-model",
                    suggestions: ["Provisioned", "Serverless"],
                  },
                },
                {
                  name: "--elastic-pool",
                  description:
                    "The name or resource id of the elastic pool to create the database in",
                  args: { name: "elastic-pool" },
                },
                {
                  name: "--encryption-protector",
                  description:
                    "Specifies the Azure key vault key to be used as database encryption protector key",
                  args: { name: "encryption-protector" },
                },
                {
                  name: ["--encryption-protector-auto-rotation", "--epauto"],
                  description:
                    "Specifies the database encryption protector key auto rotation flag. Can be either true, false or null",
                  args: {
                    name: "encryption-protector-auto-rotation",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: ["--family", "-f"],
                  description:
                    "The compute generation component of the sku (for vcore skus only). Allowed values include: Gen4, Gen5",
                  args: { name: "family" },
                },
                {
                  name: "--federated-client-id",
                  description:
                    "The federated client id for the SQL Database. It is used for cross tenant CMK scenario",
                  args: { name: "federated-client-id" },
                },
                {
                  name: ["--read-replicas", "--ha-replicas"],
                  description:
                    "The number of high availability replicas to provision for the database. Only settable for Hyperscale edition",
                  args: { name: "read-replicas" },
                },
                {
                  name: "--keys",
                  description: "The list of AKV keys for the SQL Database",
                  args: { name: "keys", isVariadic: true },
                },
                {
                  name: "--license-type",
                  description:
                    "The license type to apply for this database.LicenseIncluded if you need a license, or BasePriceif you have a license and are eligible for the Azure HybridBenefit",
                  args: {
                    name: "license-type",
                    suggestions: ["BasePrice", "LicenseIncluded"],
                  },
                },
                {
                  name: "--min-capacity",
                  description:
                    "Minimal capacity that database will always have allocated, if not paused",
                  args: { name: "min-capacity" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--partner-database",
                  description:
                    "Name of the new replica. If unspecified, defaults to the source database name",
                  args: { name: "partner-database" },
                },
                {
                  name: "--partner-resource-group",
                  description:
                    "Name of the resource group to create the new replica in. If unspecified, defaults to the origin resource group",
                  args: { name: "partner-resource-group" },
                },
                {
                  name: "--partner-sub-id",
                  description:
                    "Subscription id to create the new replica in. If unspecified, defaults to the origin subscription id",
                  args: { name: "partner-sub-id" },
                },
                {
                  name: "--preferred-enclave-type",
                  description: "Specifies type of enclave for this resource",
                  args: {
                    name: "preferred-enclave-type",
                    suggestions: ["Default", "VBS"],
                  },
                },
                {
                  name: "--read-scale",
                  description:
                    "If enabled, connections that have application intent set to readonly in their connection string may be routed to a readonly secondary replica. This property is only settable for Premium and Business Critical databases",
                  args: {
                    name: "read-scale",
                    suggestions: ["Disabled", "Enabled"],
                  },
                },
                {
                  name: "--secondary-type",
                  description:
                    "Type of secondary to create. Allowed values include: Geo, Named",
                  args: { name: "secondary-type" },
                },
                {
                  name: ["--service-level-objective", "--service-objective"],
                  description:
                    "The service objective for the new database. For example: Basic, S0, P1, GP_Gen4_1, GP_S_Gen5_8, BC_Gen5_2, HS_Gen5_32",
                  args: { name: "service-level-objective" },
                },
                {
                  name: "--tags",
                  description:
                    "Space-separated tags: key[=value] [key[=value] ...]. Use '' to clear existing tags",
                  args: { name: "tags", isOptional: true, isVariadic: true },
                },
                {
                  name: ["--user-assigned-identity-id", "--umi"],
                  description:
                    "The list of user assigned identity for the SQL Database",
                  args: { name: "user-assigned-identity-id", isVariadic: true },
                },
                {
                  name: ["--zone-redundant", "-z"],
                  description:
                    "Specifies whether to enable zone redundancy. Default is true if no value is specified",
                  args: {
                    name: "zone-redundant",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
              ],
            },
            {
              name: "delete-link",
              description:
                "Permanently stop data replication between two database replicas",
              options: [
                {
                  name: "--partner-server",
                  description:
                    "Name of the server that the other replica is in",
                  args: { name: "partner-server" },
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
                  description: "Name of the Azure SQL Database",
                  args: { name: "name" },
                },
                {
                  name: "--partner-resource-group",
                  description:
                    "Name of the resource group that the other replica is in. If unspecified, defaults to the first database's resource group",
                  args: { name: "partner-resource-group" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--server", "-s"],
                  description:
                    "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
                  args: { name: "server" },
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
              name: "list-links",
              description:
                "List the replicas of a database and their replication status",
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
                  description: "Name of the Azure SQL Database",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--server", "-s"],
                  description:
                    "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
                  args: { name: "server" },
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
              name: "set-primary",
              description:
                "Set the primary replica database by failing over from the current primary replica database",
              options: [
                acquirePolicyToken,
                {
                  name: "--allow-data-loss",
                  description:
                    "If specified, the failover operation will allow data loss",
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
                  description: "Name of the database to fail over",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of the resource group containing the secondary replica that will become the new primary",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--server", "-s"],
                  description:
                    "Name of the server containing the secondary replica that will become the new primary. You can configure the default using az configure --defaults sql-server=<name>",
                  args: { name: "server" },
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
          name: "str-policy",
          description: "Manage SQL database short term retention policy",
          subcommands: [
            {
              name: "set",
              description:
                "Update short term retention settings for a live database",
              options: [
                acquirePolicyToken,
                changeReference,
                {
                  name: "--diffbackup-hours",
                  description:
                    "New backup short term retention policy differential backup interval in hours.Valid differential backup interval for live database can be 12 or 24 hours",
                  args: { name: "diffbackup-hours" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: "--lock-immutability",
                  description:
                    "Whether to lock backup immutability. Locking is irreversible. Setting false does not unlock an already locked policy",
                  args: {
                    name: "lock-immutability",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the Azure SQL Database",
                  args: { name: "name" },
                },
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
                  name: "--retention-days",
                  description:
                    "New backup short term retention policy retention in days.Valid retention days for live database of (DTU) Basic can be 1-7 days; Rest models can be 1-35 days",
                  args: { name: "retention-days" },
                },
                {
                  name: ["--server", "-s"],
                  description:
                    "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
                  args: { name: "server" },
                },
                {
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
                },
                {
                  name: ["--yes", "-y"],
                  description:
                    "Do not prompt for confirmation when locking backup immutability",
                },
              ],
            },
            {
              name: "show",
              description:
                "Show the short term retention policy for a live database",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the Azure SQL Database",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--server", "-s"],
                  description:
                    "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
                  args: { name: "server" },
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
                "Place the CLI in a waiting state until the policy is set",
              options: [
                {
                  name: "--policy-name",
                  description: 'The policy name. Should always be "default"',
                  args: { name: "policy-name" },
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
                  description: "Name of the Azure SQL Database",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--server", "-s"],
                  description:
                    "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
                  args: { name: "server" },
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
          name: "tde",
          description: "Manage a database's transparent data encryption",
          subcommands: [
            {
              name: "set",
              description:
                "Sets a database's transparent data encryption configuration",
              options: [
                {
                  name: "--status",
                  description: "Status of the transparent data encryption",
                  args: {
                    name: "status",
                    suggestions: ["Disabled", "Enabled"],
                  },
                  isRequired: true,
                },
                acquirePolicyToken,
                changeReference,
                {
                  name: ["--database", "-d"],
                  description: "Name of the Azure SQL Database",
                  args: { name: "database" },
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
                  name: ["--server", "-s"],
                  description:
                    "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
                  args: { name: "server" },
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
              description: "Shows a Transparent Data Encryption",
              options: [
                {
                  name: ["--database", "-d"],
                  description: "Name of the Azure SQL Database",
                  args: { name: "database" },
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
                  name: ["--server", "-s"],
                  description:
                    "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
                  args: { name: "server" },
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
              name: "key",
              description: "Manage a database's encryption protector",
              subcommands: [
                {
                  name: "revalidate",
                  description:
                    "Revalidates a database's encryption protector key",
                  options: [
                    acquirePolicyToken,
                    changeReference,
                    {
                      name: ["--database", "-d"],
                      description: "Name of the Azure SQL Database",
                      args: { name: "database" },
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
                      name: ["--server", "-s"],
                      description:
                        "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
                      args: { name: "server" },
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
                  description:
                    "Reverts a database's encryption protector key to server level",
                  options: [
                    acquirePolicyToken,
                    changeReference,
                    {
                      name: ["--database", "-d"],
                      description: "Name of the Azure SQL Database",
                      args: { name: "database" },
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
                      name: ["--server", "-s"],
                      description:
                        "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
                      args: { name: "server" },
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
      name: "dw",
      description: "Manage data warehouses",
      subcommands: [
        {
          name: "create",
          description: "Create a data warehouse",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the data warehouse",
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
              name: ["--server", "-s"],
              description:
                "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
              args: { name: "server" },
              isRequired: true,
            },
            acquirePolicyToken,
            {
              name: "--availability-zone",
              description: "Availability zone",
              args: { name: "availability-zone" },
            },
            {
              name: ["--backup-storage-redundancy", "--bsr"],
              description:
                "Backup storage redundancy used to store backups. Allowed values include: Local, Zone, Geo, GeoZone",
              args: { name: "backup-storage-redundancy" },
            },
            changeReference,
            {
              name: "--collation",
              description: "The collation of the data warehouse",
              args: { name: "collation" },
            },
            {
              name: "--max-size",
              description:
                "The max storage size. If no unit is specified, defaults to bytes (B)",
              args: { name: "max-size" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: ["--service-level-objective", "--service-objective"],
              description:
                "The service objective for the new database. For example: DW100, DW1000c",
              args: { name: "service-level-objective" },
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
          name: "delete",
          description: "Delete a data warehouse",
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
              description: "Name of the data warehouse",
              args: { name: "name" },
            },
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
              name: ["--server", "-s"],
              description:
                "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
              args: { name: "server" },
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
          description: "List data warehouses for a server",
          options: [
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
              name: ["--server", "-s"],
              description:
                "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
              args: { name: "server" },
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
          name: "pause",
          description: "Pauses a datawarehouse",
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
              description: "Name of the data warehouse",
              args: { name: "name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: ["--server", "-s"],
              description:
                "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
              args: { name: "server" },
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
          description: "Resumes a datawarehouse",
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
              description: "Name of the data warehouse",
              args: { name: "name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: ["--server", "-s"],
              description:
                "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
              args: { name: "server" },
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
          description: "Get the details for a data warehouse",
          options: [
            {
              name: "--filter",
              description:
                "An OData filter expression to apply to the response",
              args: { name: "filter" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids", isVariadic: true },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the data warehouse",
              args: { name: "name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: ["--server", "-s"],
              description:
                "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
              args: { name: "server" },
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
          description: "Update a data warehouse",
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
              name: "--filter",
              description:
                "An OData filter expression to apply to the response",
              args: { name: "filter" },
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
              name: "--max-size",
              description:
                "The max storage size. If no unit is specified, defaults to bytes (B)",
              args: { name: "max-size" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the data warehouse",
              args: { name: "name" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
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
              name: ["--server", "-s"],
              description:
                "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
              args: { name: "server" },
            },
            {
              name: "--service-objective",
              description:
                "The service objective of the data warehouse. For example: DW100, DW1000c",
              args: { name: "service-objective" },
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
      name: "elastic-pool",
      description: "Manage elastic pools",
      subcommands: [
        {
          name: "create",
          description: "Create an elastic pool",
          options: [
            {
              name: ["--name", "-n"],
              description: "The name of the elastic pool",
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
              name: ["--server", "-s"],
              description:
                "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
              args: { name: "server" },
              isRequired: true,
            },
            acquirePolicyToken,
            {
              name: ["--capacity", "--dtu", "-c"],
              description:
                "The capacity component of the sku in integer number of DTUs or vcores",
              args: { name: "capacity" },
            },
            changeReference,
            {
              name: ["--db-max-capacity", "--db-dtu-max", "--db-max-dtu"],
              description:
                "The maximum capacity (in DTUs or vcores) any one database can consume",
              args: { name: "db-max-capacity" },
            },
            {
              name: ["--db-min-capacity", "--db-dtu-min", "--db-min-dtu"],
              description:
                "The minumum capacity (in DTUs or vcores) each database is guaranteed",
              args: { name: "db-min-capacity" },
            },
            {
              name: ["--edition", "--tier", "-e"],
              description:
                "The edition component of the sku. Allowed values include: Basic, Standard, Premium, GeneralPurpose, BusinessCritical",
              args: { name: "edition" },
            },
            {
              name: ["--family", "-f"],
              description:
                "The compute generation component of the sku (for vcore skus only). Allowed values include: Gen4, Gen5",
              args: { name: "family" },
            },
            {
              name: ["--read-replicas", "--ha-replicas"],
              description:
                "The number of high availability replicas to provision for the database. Only settable for Hyperscale edition",
              args: { name: "read-replicas" },
            },
            {
              name: "--license-type",
              description: "The license type to apply for this elastic pool",
              args: {
                name: "license-type",
                suggestions: ["BasePrice", "LicenseIncluded"],
              },
            },
            {
              name: ["--maint-config-id", "-m"],
              description:
                "Specified maintenance configuration id or name for this resource",
              args: { name: "maint-config-id" },
            },
            {
              name: ["--max-size", "--storage"],
              description:
                "The max storage size. If no unit is specified, defaults to bytes (B)",
              args: { name: "max-size" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: "--preferred-enclave-type",
              description:
                "The preferred enclave type for the Azure SQL Elastic Pool. Allowed values include: Default, VBS",
              args: {
                name: "preferred-enclave-type",
                suggestions: ["Default", "VBS"],
              },
            },
            {
              name: "--tags",
              description:
                "Space-separated tags: key[=value] [key[=value] ...]. Use '' to clear existing tags",
              args: { name: "tags", isOptional: true, isVariadic: true },
            },
            {
              name: ["--zone-redundant", "-z"],
              description:
                "Specifies whether to enable zone redundancy. Default is true if no value is specified",
              args: {
                name: "zone-redundant",
                suggestions: ["false", "true"],
                isOptional: true,
              },
            },
          ],
        },
        {
          name: "delete",
          description: "Deletes an elastic pool",
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
              description: "The name of the elastic pool",
              args: { name: "name" },
            },
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
              name: ["--server", "-s"],
              description:
                "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
              args: { name: "server" },
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
          description: "Gets all elastic pools in a server",
          options: [
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
              name: ["--server", "-s"],
              description:
                "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
              args: { name: "server" },
            },
            {
              name: "--skip",
              description: "The number of elastic pools to skip",
              args: { name: "skip" },
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
          name: "list-dbs",
          description: "Gets a list of databases in an elastic pool",
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
              description: "The name of the elastic pool",
              args: { name: "name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: ["--server", "-s"],
              description:
                "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
              args: { name: "server" },
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
          name: "list-editions",
          description:
            "List elastic pool editions available for the active subscription",
          options: [
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
              isRequired: true,
            },
            acquirePolicyToken,
            {
              name: ["--available", "-a"],
              description:
                "If specified, show only results that are available in the specified region",
            },
            changeReference,
            {
              name: "--dtu",
              description:
                "Number of DTUs to search for. If unspecified, all DTU sizes are shown",
              args: { name: "dtu" },
            },
            {
              name: ["--edition", "--tier", "-e"],
              description:
                "Edition to search for. If unspecified, all editions are shown",
              args: { name: "edition" },
            },
            {
              name: ["--show-details", "-d"],
              description: "List of additional details to include in output",
              args: {
                name: "show-details",
                suggestions: [
                  "db-max-dtu",
                  "db-max-size",
                  "db-min-dtu",
                  "max-size",
                ],
                isVariadic: true,
              },
            },
            {
              name: "--vcores",
              description:
                "Number of vcores to search for. If unspecified, all vcore sizes are shown",
              args: { name: "vcores" },
            },
          ],
        },
        {
          name: "show",
          description: "Gets an elastic pool",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids", isVariadic: true },
            },
            {
              name: ["--name", "-n"],
              description: "The name of the elastic pool",
              args: { name: "name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: ["--server", "-s"],
              description:
                "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
              args: { name: "server" },
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
          description: "Update an elastic pool",
          options: [
            acquirePolicyToken,
            {
              name: "--add",
              description:
                "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
              args: { name: "add", isVariadic: true },
            },
            {
              name: ["--capacity", "--dtu", "-c"],
              description:
                "The capacity component of the sku in integer number of DTUs or vcores",
              args: { name: "capacity" },
            },
            changeReference,
            {
              name: ["--db-max-capacity", "--db-dtu-max", "--db-max-dtu"],
              description:
                "The maximum capacity (in DTUs or vcores) any one database can consume",
              args: { name: "db-max-capacity" },
            },
            {
              name: ["--db-min-capacity", "--db-dtu-min", "--db-min-dtu"],
              description:
                "The minumum capacity (in DTUs or vcores) each database is guaranteed",
              args: { name: "db-min-capacity" },
            },
            {
              name: ["--edition", "--tier", "-e"],
              description:
                "The edition component of the sku. Allowed values include: Basic, Standard, Premium, GeneralPurpose, BusinessCritical",
              args: { name: "edition" },
            },
            {
              name: ["--family", "-f"],
              description:
                "The compute generation component of the sku (for vcore skus only). Allowed values include: Gen4, Gen5",
              args: { name: "family" },
            },
            {
              name: "--force-string",
              description:
                "When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON",
            },
            {
              name: ["--read-replicas", "--ha-replicas"],
              description:
                "The number of high availability replicas to provision for the database. Only settable for Hyperscale edition",
              args: { name: "read-replicas" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids", isVariadic: true },
            },
            {
              name: ["--maint-config-id", "-m"],
              description:
                "Specified maintenance configuration id or name for this resource",
              args: { name: "maint-config-id" },
            },
            {
              name: ["--max-size", "--storage"],
              description:
                "The max storage size. If no unit is specified, defaults to bytes (B)",
              args: { name: "max-size" },
            },
            {
              name: ["--name", "-n"],
              description: "The name of the elastic pool",
              args: { name: "name" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: "--preferred-enclave-type",
              description:
                "Type of enclave to be configured for the elastic pool",
              args: {
                name: "preferred-enclave-type",
                suggestions: ["Default", "VBS"],
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
              name: ["--server", "-s"],
              description:
                "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
              args: { name: "server" },
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
              name: ["--zone-redundant", "-z"],
              description:
                "Specifies whether to enable zone redundancy. Default is true if no value is specified",
              args: {
                name: "zone-redundant",
                suggestions: ["false", "true"],
                isOptional: true,
              },
            },
          ],
        },
        {
          name: "op",
          description: "Manage operations on an elastic pool",
          subcommands: [
            {
              name: "cancel",
              description:
                "Cancels the asynchronous operation on the elastic pool",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "The unique name of the operation to cancel",
                  args: { name: "name" },
                  isRequired: true,
                },
                acquirePolicyToken,
                changeReference,
                {
                  name: "--elastic-pool",
                  description: "Name of the Azure SQL Elastic Pool",
                  args: { name: "elastic-pool" },
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
                  name: ["--server", "-s"],
                  description:
                    "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
                  args: { name: "server" },
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
                "Gets a list of operations performed on the elastic pool",
              options: [
                {
                  name: "--elastic-pool",
                  description: "Name of the Azure SQL Elastic Pool",
                  args: { name: "elastic-pool" },
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
                  name: ["--server", "-s"],
                  description:
                    "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
                  args: { name: "server" },
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
      name: "failover-group",
      description: "Manage SQL Failover Groups",
      subcommands: [
        {
          name: "create",
          description: "Creates a failover group",
          options: [
            {
              name: ["--name", "-n"],
              description: "The name of the Failover Group",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--partner-server",
              description: "The name of the partner server of a Failover Group",
              args: { name: "partner-server" },
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
              name: ["--server", "-s"],
              description:
                "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
              args: { name: "server" },
              isRequired: true,
            },
            acquirePolicyToken,
            {
              name: "--add-db",
              description: "List of databases to add to Failover Group",
              args: { name: "add-db", isVariadic: true },
            },
            changeReference,
            {
              name: "--failover-policy",
              description: "The failover policy of the Failover Group",
              args: {
                name: "failover-policy",
                suggestions: ["Automatic", "Manual"],
              },
            },
            {
              name: "--grace-period",
              description:
                "Interval in hours before automatic failover is initiated if an outage occurs on the primary server. This indicates that Azure SQL Database will not initiate automatic failover before the grace period expires. Please note that failover operation with --allow-data-loss option might cause data loss due to the nature of asynchronous synchronization",
              args: { name: "grace-period" },
            },
            {
              name: "--partner-resource-group",
              description:
                "The name of the resource group of the partner server",
              args: { name: "partner-resource-group" },
            },
            {
              name: "--partner-server-ids",
              description:
                "The list of partner server resource id's of the Failover Group",
              args: { name: "partner-server-ids", isVariadic: true },
            },
            {
              name: "--ro-endpoint-target",
              description:
                "The resource id of the read only endpoint target server",
              args: { name: "ro-endpoint-target" },
            },
            {
              name: "--ro-failover-policy",
              description:
                "The policy of the read only endpoint of the Failover Group",
              args: {
                name: "ro-failover-policy",
                suggestions: ["Disabled", "Enabled"],
              },
            },
            {
              name: "--secondary-type",
              description: "Databases secondary type on partner server",
              args: { name: "secondary-type", suggestions: ["Geo", "Standby"] },
            },
          ],
        },
        {
          name: "delete",
          description: "Deletes a failover group",
          options: [
            {
              name: ["--name", "-n"],
              description: "The name of the Failover Group",
              args: { name: "name" },
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
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: ["--server", "-s"],
              description:
                "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
              args: { name: "server" },
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
          description: "Lists the failover groups in a server",
          options: [
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
              name: ["--server", "-s"],
              description:
                "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
              args: { name: "server" },
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
          name: "set-primary",
          description:
            "Set the primary of the failover group by failing over all databases from the current primary server",
          options: [
            {
              name: ["--name", "-n"],
              description: "The name of the Failover Group",
              args: { name: "name" },
              isRequired: true,
            },
            acquirePolicyToken,
            {
              name: "--allow-data-loss",
              description:
                "Complete the failover even if doing so may result in data loss. This will allow the failover to proceed even if a primary database is unavailable",
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
              name: ["--server", "-s"],
              description:
                "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
              args: { name: "server" },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
            {
              name: ["--try-planned-before-forced-failover", "--tpbff"],
              description:
                "Performs a planned failover as the first step, and if it fails for any reason, then initiates a forced failover with potential data loss. This will allow the failover to proceed even if a primary database is unavailable",
            },
          ],
        },
        {
          name: "show",
          description: "Gets a failover group",
          options: [
            {
              name: ["--name", "-n"],
              description: "The name of the Failover Group",
              args: { name: "name" },
              isRequired: true,
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
              name: ["--server", "-s"],
              description:
                "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
              args: { name: "server" },
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
          description: "Updates the failover group",
          options: [
            {
              name: ["--name", "-n"],
              description: "The name of the Failover Group",
              args: { name: "name" },
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
              name: "--add-db",
              description: "List of databases to add to Failover Group",
              args: { name: "add-db", isVariadic: true },
            },
            changeReference,
            {
              name: "--failover-policy",
              description: "The failover policy of the Failover Group",
              args: {
                name: "failover-policy",
                suggestions: ["Automatic", "Manual"],
              },
            },
            {
              name: "--force-string",
              description:
                "When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON",
            },
            {
              name: "--grace-period",
              description:
                "Interval in hours before automatic failover is initiated if an outage occurs on the primary server. This indicates that Azure SQL Database will not initiate automatic failover before the grace period expires. Please note that failover operation with --allow-data-loss option might cause data loss due to the nature of asynchronous synchronization",
              args: { name: "grace-period" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids", isVariadic: true },
            },
            {
              name: "--partner-server-ids",
              description:
                "The list of partner server resource id's of the Failover Group",
              args: { name: "partner-server-ids", isVariadic: true },
            },
            {
              name: "--remove",
              description:
                "Remove a property or an element from a list. Example: --remove property.list <indexToRemove> OR --remove propertyToRemove",
              args: { name: "remove", isVariadic: true },
            },
            {
              name: "--remove-db",
              description: "List of databases to remove from Failover Group",
              args: { name: "remove-db", isVariadic: true },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--ro-endpoint-target",
              description:
                "The resource id of the read only endpoint target server",
              args: { name: "ro-endpoint-target" },
            },
            {
              name: "--ro-failover-policy",
              description:
                "The policy of the read only endpoint of the Failover Group",
              args: {
                name: "ro-failover-policy",
                suggestions: ["Disabled", "Enabled"],
              },
            },
            {
              name: "--secondary-type",
              description: "Databases secondary type on partner server",
              args: { name: "secondary-type", suggestions: ["Geo", "Standby"] },
            },
            {
              name: ["--server", "-s"],
              description:
                "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
              args: { name: "server" },
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
      name: "instance-failover-group",
      description: "Manage SQL Instance Failover Groups",
      subcommands: [
        {
          name: "create",
          description:
            "Creates an instance failover group between two connected managed instances",
          options: [
            {
              name: ["--source-mi", "--mi"],
              description: "Name of the Azure SQL Managed Instance",
              args: { name: "source-mi" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "The name of the Instance Failover Group",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--partner-mi",
              description:
                "The name of the partner managed instance of a Instance Failover Group",
              args: { name: "partner-mi" },
              isRequired: true,
            },
            {
              name: "--partner-resource-group",
              description:
                "The name of the resource group of the partner managed instance",
              args: { name: "partner-resource-group" },
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
              name: "--failover-policy",
              description: "The failover policy of the Instance Failover Group",
              args: {
                name: "failover-policy",
                suggestions: ["Automatic", "Manual"],
              },
            },
            {
              name: "--grace-period",
              description:
                "Interval in hours before automatic failover is initiated if an outage occurs on the primary server. This indicates that Azure SQL Database will not initiate automatic failover before the grace period expires. Please note that failover operation with --allow-data-loss option might cause data loss due to the nature of asynchronous synchronization",
              args: { name: "grace-period" },
            },
            {
              name: "--secondary-type",
              description:
                "Intended usage of the secondary instance in the Failover Group. Standby indicates that the secondary instance will be used as a passive replica for disaster recovery only",
              args: { name: "secondary-type" },
            },
          ],
        },
        {
          name: "delete",
          description: "Deletes a failover group",
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
              description: "The name of the Instance Failover Group",
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
          name: "set-primary",
          description:
            "Set the primary of the instance failover group by failing over all databases from the current primary managed instance",
          options: [
            {
              name: ["--location", "-l"],
              description:
                "Location of the secondary instance in the Instance Failover Group. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "The name of the Instance Failover Group",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group of the secondary instance in the Instance Failover Group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            acquirePolicyToken,
            {
              name: "--allow-data-loss",
              description:
                "Complete the failover even if doing so may result in data loss. This will allow the failover to proceed even if a primary database is unavailable",
            },
            changeReference,
          ],
        },
        {
          name: "show",
          description: "Gets a failover group",
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
              description: "The name of the Instance Failover Group",
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
          description: "Updates the instance failover group",
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
              description: "The name of the Instance Failover Group",
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
              name: "--failover-policy",
              description: "The failover policy of the Instance Failover Group",
              args: {
                name: "failover-policy",
                suggestions: ["Automatic", "Manual"],
              },
            },
            {
              name: "--force-string",
              description:
                "When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON",
            },
            {
              name: "--grace-period",
              description:
                "Interval in hours before automatic failover is initiated if an outage occurs on the primary server. This indicates that Azure SQL Database will not initiate automatic failover before the grace period expires. Please note that failover operation with --allow-data-loss option might cause data loss due to the nature of asynchronous synchronization",
              args: { name: "grace-period" },
            },
            {
              name: "--remove",
              description:
                "Remove a property or an element from a list. Example: --remove property.list <indexToRemove> OR --remove propertyToRemove",
              args: { name: "remove", isVariadic: true },
            },
            {
              name: "--secondary-type",
              description:
                "Intended usage of the secondary instance in the Failover Group. Standby indicates that the secondary instance will be used as a passive replica for disaster recovery only",
              args: { name: "secondary-type" },
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
      name: "instance-pool",
      description: "Manage instance pools",
      subcommands: [
        {
          name: "create",
          description: "Create an instance pool",
          options: [
            {
              name: ["--capacity", "-c"],
              description: "Capacity of the instance pool in vcores",
              args: { name: "capacity" },
              isRequired: true,
            },
            {
              name: ["--edition", "--tier", "-e"],
              description:
                "The edition component of the sku. Allowed value: GeneralPurpose",
              args: { name: "edition" },
              isRequired: true,
            },
            {
              name: ["--family", "-f"],
              description:
                "The compute generation component of the sku. Allowed value: Gen5",
              args: { name: "family" },
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
              description: "Instance Pool Name",
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
                "Name or ID of the subnet that allows access to an Instance Pool. If subnet name is provided, --vnet-name must be provided",
              args: { name: "subnet" },
              isRequired: true,
            },
            acquirePolicyToken,
            changeReference,
            {
              name: "--license-type",
              description: "The license type to apply for this instance pool",
              args: {
                name: "license-type",
                suggestions: ["BasePrice", "LicenseIncluded"],
              },
            },
            {
              name: ["--maint-config-id", "-m"],
              description:
                "Assign maintenance configuration to this managed instance",
              args: { name: "maint-config-id" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: "--tags",
              description:
                "Space-separated tags: key[=value] [key[=value] ...]. Use '' to clear existing tags",
              args: { name: "tags", isOptional: true, isVariadic: true },
            },
            {
              name: "--vnet-name",
              description: "The virtual network name",
              args: { name: "vnet-name" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete an instance pool",
          options: [
            {
              name: ["--name", "-n"],
              description: "Instance Pool Name",
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
            {
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "list",
          description: "List available instance pools",
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
          description: "Get the details for an instance pool",
          options: [
            {
              name: ["--name", "-n"],
              description: "Instance Pool Name",
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
          description: "Update an instance pool",
          options: [
            {
              name: ["--name", "-n"],
              description: "Instance Pool Name",
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
            {
              name: ["--capacity", "-c"],
              description: "Capacity of the instance pool in vcores",
              args: { name: "capacity" },
            },
            changeReference,
            {
              name: ["--edition", "--tier", "-e"],
              description:
                "The edition component of the sku. Allowed values include: GeneralPurpose, BusinessCritical",
              args: { name: "edition" },
            },
            {
              name: ["--family", "-f"],
              description:
                "The compute generation component of the sku. Allowed values include: Gen4, Gen5",
              args: { name: "family" },
            },
            {
              name: "--force-string",
              description:
                "When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON",
            },
            {
              name: "--license-type",
              description: "The license type to apply for this instance pool",
              args: {
                name: "license-type",
                suggestions: ["BasePrice", "LicenseIncluded"],
              },
            },
            {
              name: ["--maint-config-id", "-m"],
              description:
                "Assign maintenance configuration to this managed instance",
              args: { name: "maint-config-id" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
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
              name: "--tags",
              description:
                "Space-separated tags: key[=value] [key[=value] ...]. Use '' to clear existing tags",
              args: { name: "tags", isOptional: true, isVariadic: true },
            },
          ],
        },
        {
          name: "wait",
          description: "Wait for an instance pool to reach a desired state",
          options: [
            {
              name: ["--name", "-n"],
              description: "Instance Pool Name",
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
      name: "mi",
      description: "Manage SQL managed instances",
      subcommands: [
        {
          name: "create",
          description: "Create a managed instance",
          options: [
            {
              name: ["--name", "-n"],
              description: "The managed instance name",
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
                "Name or ID of the subnet that allows access to an Azure Sql Managed Instance. If subnet name is provided, --vnet-name must be provided",
              args: { name: "subnet" },
              isRequired: true,
            },
            acquirePolicyToken,
            {
              name: ["--admin-password", "-p"],
              description:
                "The administrator login password (required formanaged instance creation)",
              args: { name: "admin-password" },
            },
            {
              name: ["--admin-user", "-u"],
              description:
                "Administrator username for the managed instance. Canonly be specified when the managed instance is beingcreated (and is required for creation)",
              args: { name: "admin-user" },
            },
            {
              name: ["--authentication-metadata", "--am"],
              description:
                "Preferred metadata to use for authentication of synced on-prem users. Default is AzureAD",
              args: {
                name: "authentication-metadata",
                suggestions: ["AzureAD", "Paired", "Windows"],
              },
            },
            {
              name: ["--assign-identity", "-i"],
              description:
                "Generate and assign an Azure Active Directory Identity for this managed instance for use with key management services like Azure KeyVault",
            },
            {
              name: ["--backup-storage-redundancy", "--bsr"],
              description:
                "Backup storage redundancy used to store backups. Allowed values include: Local, Zone, Geo, GeoZone",
              args: { name: "backup-storage-redundancy" },
            },
            {
              name: ["--capacity", "-c"],
              description:
                "The capacity of the managed instance in integer number of vcores",
              args: { name: "capacity" },
            },
            changeReference,
            {
              name: "--collation",
              description: "The collation of the managed instance",
              args: { name: "collation" },
            },
            {
              name: "--database-format",
              description:
                "Managed Instance database format specific to the SQL. Allowed values include: AlwaysUpToDate, SQLServer2022",
              args: {
                name: "database-format",
                suggestions: [
                  "AlwaysUpToDate",
                  "SQLServer2022",
                  "SQLServer2025",
                ],
              },
            },
            {
              name: "--dns-zone-partner",
              description:
                "The resource id of the partner Managed Instance to inherit DnsZone property from for Managed Instance creation",
              args: { name: "dns-zone-partner" },
            },
            {
              name: ["--edition", "--tier", "-e"],
              description:
                "The edition component of the sku. Allowed values include: GeneralPurpose, BusinessCritical",
              args: { name: "edition" },
            },
            {
              name: "--enable-ad-only-auth",
              description:
                "Enable Azure Active Directory Only Authentication for this server",
            },
            {
              name: "--external-admin-name",
              description:
                "Display name of the Azure AD administrator user, group or application",
              args: { name: "external-admin-name" },
            },
            {
              name: "--external-admin-principal-type",
              description: "User, Group or Application",
              args: { name: "external-admin-principal-type" },
            },
            {
              name: "--external-admin-sid",
              description:
                "The unique ID of the Azure AD administrator. Object Id for User or Group, Client Id for Applications",
              args: { name: "external-admin-sid" },
            },
            {
              name: ["--family", "-f"],
              description:
                "The compute generation component of the sku. Allowed values include: Gen4, Gen5",
              args: { name: "family" },
            },
            {
              name: "--gpv2",
              description:
                "Whether or not this is a GPv2 variant of General Purpose edition",
              args: {
                name: "gpv2",
                suggestions: ["false", "true"],
                isOptional: true,
              },
            },
            {
              name: ["--identity-type", "-t"],
              description:
                "Type of Identity to be used. Possible values are SystemAsssigned,UserAssigned, SystemAssignedUserAssigned and None",
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
              name: "--instance-pool-name",
              description:
                "Name of the Instance Pool where managed instance will be placed",
              args: { name: "instance-pool-name" },
            },
            {
              name: "--iops",
              description:
                "The storage iops of the managed instance. Storage iops can be specified in increments of 1",
              args: { name: "iops" },
            },
            {
              name: ["--key-id", "-k"],
              description: "The key vault URI for encryption",
              args: { name: "key-id" },
            },
            {
              name: "--license-type",
              description:
                "The license type to apply for this managed instance",
              args: {
                name: "license-type",
                suggestions: ["BasePrice", "LicenseIncluded"],
              },
            },
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
            },
            {
              name: ["--maint-config-id", "-m"],
              description:
                "Assign maintenance configuration to this managed instance",
              args: { name: "maint-config-id" },
            },
            {
              name: "--memory",
              description:
                "The memory size of the managed instance. Memory size must be specified in GB",
              args: { name: "memory" },
            },
            {
              name: "--minimal-tls-version",
              description:
                "The minimal TLS version enforced by the managed instance for inbound connections",
              args: {
                name: "minimal-tls-version",
                suggestions: ["1.0", "1.1", "1.2", "None"],
              },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: ["--primary-user-assigned-identity-id", "--pid"],
              description: "The ID of the primary user managed identity",
              args: { name: "primary-user-assigned-identity-id" },
            },
            {
              name: "--pricing-model",
              description:
                "Managed Instance pricing model. Allowed values include: Regular, Freemium",
              args: {
                name: "pricing-model",
                suggestions: ["Freemium", "Regular"],
              },
            },
            {
              name: "--proxy-override",
              description:
                "The connection type used for connecting to the instance",
              args: {
                name: "proxy-override",
                suggestions: ["Default", "Proxy", "Redirect"],
              },
            },
            {
              name: "--public-data-endpoint-enabled",
              description:
                "Whether or not the public data endpoint is enabled for the instance",
              args: {
                name: "public-data-endpoint-enabled",
                suggestions: ["false", "true"],
                isOptional: true,
              },
            },
            {
              name: "--service-principal-type",
              description:
                "Service Principal type to be used for this Managed Instance. Possible values are SystemAssigned and None",
              args: {
                name: "service-principal-type",
                suggestions: ["None", "SystemAssigned"],
              },
            },
            {
              name: "--storage",
              description:
                "The storage size of the managed instance. Storage size must be specified in increments of 32 GB",
              args: { name: "storage" },
            },
            {
              name: "--tags",
              description:
                "Space-separated tags: key[=value] [key[=value] ...]. Use '' to clear existing tags",
              args: { name: "tags", isOptional: true, isVariadic: true },
            },
            {
              name: "--timezone-id",
              description:
                "The time zone id for the instance to set. A list of time zone ids is exposed through the sys.time_zone_info (Transact-SQL) view",
              args: { name: "timezone-id" },
            },
            {
              name: ["--user-assigned-identity-id", "-a"],
              description:
                "Generate and assign an User Managed Identity(UMI) for this server",
              args: { name: "user-assigned-identity-id", isVariadic: true },
            },
            {
              name: "--vnet-name",
              description: "The virtual network name",
              args: { name: "vnet-name" },
            },
            {
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
            {
              name: ["--zone-redundant", "-z"],
              description:
                "Specifies whether to enable zone redundancy. Default is true if no value is specified",
              args: {
                name: "zone-redundant",
                suggestions: ["false", "true"],
                isOptional: true,
              },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a managed instance",
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
              description: "The managed instance name",
              args: { name: "name" },
            },
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
          name: "failover",
          description: "Failover a managed instance",
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
              description: "The managed instance name",
              args: { name: "name" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: "--replica-type",
              description: "The type of managed-instance replica to fail over",
              args: { name: "replica-type" },
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
          description: "List available managed instances",
          options: [
            {
              name: "--expand-ad-admin",
              description:
                "Expand the Active Directory Administrator for the server",
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
          name: "refresh-external-governance-status",
          description: "Refresh external governance enablement status",
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
              name: ["--managed-instance-name", "--mi"],
              description: "The name of the managed instance",
              args: { name: "managed-instance-name" },
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
              description: "The name of the resource group",
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
          description: "Get the details for a managed instance",
          options: [
            {
              name: "--expand-ad-admin",
              description:
                "Expand the Active Directory Administrator for the server",
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids", isVariadic: true },
            },
            {
              name: ["--name", "-n"],
              description: "The managed instance name",
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
          description: "Start the managed instance",
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
              name: ["--managed-instance", "--mi"],
              description: "The name of the managed instance",
              args: { name: "managed-instance" },
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
              description: "Name of the resource group",
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
          description: "Stop the managed instance",
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
              name: ["--managed-instance", "--mi"],
              description: "The name of the managed instance",
              args: { name: "managed-instance" },
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
              description: "Name of the resource group",
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
          description: "Update a managed instance",
          options: [
            acquirePolicyToken,
            {
              name: "--add",
              description:
                "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
              args: { name: "add", isVariadic: true },
            },
            {
              name: ["--admin-password", "-p"],
              description:
                "The administrator login password (required formanaged instance creation)",
              args: { name: "admin-password" },
            },
            {
              name: ["--authentication-metadata", "--am"],
              description:
                "Preferred metadata to use for authentication of synced on-prem users. Default is AzureAD",
              args: {
                name: "authentication-metadata",
                suggestions: ["AzureAD", "Paired", "Windows"],
              },
            },
            {
              name: ["--assign-identity", "-i"],
              description:
                "Generate and assign an Azure Active Directory Identity for this managed instance for use with key management services like Azure KeyVault. If identity is already assigned - do nothing",
            },
            {
              name: ["--backup-storage-redundancy", "--bsr"],
              description:
                "Backup storage redundancy used to store backups. Allowed values include: Local, Zone, Geo, GeoZone",
              args: { name: "backup-storage-redundancy" },
            },
            {
              name: ["--capacity", "-c"],
              description:
                "The capacity of the managed instance in integer number of vcores",
              args: { name: "capacity" },
            },
            changeReference,
            {
              name: "--database-format",
              description:
                "Managed Instance database format specific to the SQL. Allowed values include: AlwaysUpToDate, SQLServer2022",
              args: {
                name: "database-format",
                suggestions: [
                  "AlwaysUpToDate",
                  "SQLServer2022",
                  "SQLServer2025",
                ],
              },
            },
            {
              name: ["--edition", "--tier", "-e"],
              description:
                "The edition component of the sku. Allowed values include: GeneralPurpose, BusinessCritical",
              args: { name: "edition" },
            },
            {
              name: ["--family", "-f"],
              description:
                "The compute generation component of the sku. Allowed values include: Gen4, Gen5",
              args: { name: "family" },
            },
            {
              name: "--force-string",
              description:
                "When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON",
            },
            {
              name: "--gpv2",
              description:
                "Whether or not this is a GPv2 variant of General Purpose edition",
              args: {
                name: "gpv2",
                suggestions: ["false", "true"],
                isOptional: true,
              },
            },
            {
              name: ["--identity-type", "-t"],
              description:
                "Type of Identity to be used. Possible values are SystemAsssigned,UserAssigned, SystemAssignedUserAssigned and None",
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
              name: "--instance-pool-name",
              description:
                "Name of the Instance Pool where managed instance will be placed",
              args: { name: "instance-pool-name" },
            },
            {
              name: "--iops",
              description:
                "The storage iops of the managed instance. Storage iops can be specified in increments of 1",
              args: { name: "iops" },
            },
            {
              name: ["--key-id", "-k"],
              description: "The key vault URI for encryption",
              args: { name: "key-id" },
            },
            {
              name: "--license-type",
              description:
                "The license type to apply for this managed instance",
              args: {
                name: "license-type",
                suggestions: ["BasePrice", "LicenseIncluded"],
              },
            },
            {
              name: ["--maint-config-id", "-m"],
              description:
                "Change maintenance configuration for this managed instance",
              args: { name: "maint-config-id" },
            },
            {
              name: "--memory",
              description:
                "The memory size of the managed instance. Memory size must be specified in GB",
              args: { name: "memory" },
            },
            {
              name: "--minimal-tls-version",
              description:
                "The minimal TLS version enforced by the managed instance for inbound connections",
              args: {
                name: "minimal-tls-version",
                suggestions: ["1.0", "1.1", "1.2", "None"],
              },
            },
            {
              name: ["--name", "-n"],
              description: "The managed instance name",
              args: { name: "name" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: ["--primary-user-assigned-identity-id", "--pid"],
              description: "The ID of the primary user managed identity",
              args: { name: "primary-user-assigned-identity-id" },
            },
            {
              name: "--pricing-model",
              description:
                "Managed Instance pricing model. Allowed values include: Regular, Freemium",
              args: {
                name: "pricing-model",
                suggestions: ["Freemium", "Regular"],
              },
            },
            {
              name: "--proxy-override",
              description:
                "The connection type used for connecting to the instance",
              args: {
                name: "proxy-override",
                suggestions: ["Default", "Proxy", "Redirect"],
              },
            },
            {
              name: "--public-data-endpoint-enabled",
              description:
                "Whether or not the public data endpoint is enabled for the instance",
              args: {
                name: "public-data-endpoint-enabled",
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
              name: "--service-principal-type",
              description:
                "Service Principal type to be used for this Managed Instance. Possible values are SystemAssigned and None",
              args: {
                name: "service-principal-type",
                suggestions: ["None", "SystemAssigned"],
              },
            },
            {
              name: "--set",
              description:
                "Update an object by specifying a property path and value to set. Example: --set property1.property2=<value>",
              args: { name: "set", isVariadic: true },
            },
            {
              name: "--storage",
              description:
                "The storage size of the managed instance. Storage size must be specified in increments of 32 GB",
              args: { name: "storage" },
            },
            {
              name: "--subnet",
              description:
                "Name or ID of the subnet that allows access to an Azure Sql Managed Instance. If subnet name is provided, --vnet-name must be provided",
              args: { name: "subnet" },
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
              name: ["--user-assigned-identity-id", "-a"],
              description:
                "Generate and assign an User Managed Identity(UMI) for this server",
              args: { name: "user-assigned-identity-id", isVariadic: true },
            },
            {
              name: "--vnet-name",
              description: "The virtual network name",
              args: { name: "vnet-name" },
            },
            {
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
            {
              name: ["--zone-redundant", "-z"],
              description:
                "Specifies whether to enable zone redundancy. Default is true if no value is specified",
              args: {
                name: "zone-redundant",
                suggestions: ["false", "true"],
                isOptional: true,
              },
            },
          ],
        },
        {
          name: "ad-admin",
          description:
            "Manage a managed instance's Active Directory administrator",
          subcommands: [
            {
              name: "create",
              description:
                "Creates a new managed instance Active Directory administrator",
              options: [
                {
                  name: ["--display-name", "-u"],
                  description:
                    "Display name of the Azure AD administrator user or group",
                  args: { name: "display-name" },
                  isRequired: true,
                },
                {
                  name: ["--managed-instance", "--mi"],
                  description: "Name of the Azure SQL Managed Instance",
                  args: { name: "managed-instance" },
                  isRequired: true,
                },
                {
                  name: ["--object-id", "-i"],
                  description: "The unique ID of the Azure AD administrator",
                  args: { name: "object-id" },
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
                "Deletes an existing managed instance Active Directory Administrator",
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
                  name: ["--managed-instance", "--mi"],
                  description: "Name of the Azure SQL Managed Instance",
                  args: { name: "managed-instance" },
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
                "Returns a list of managed instance Active Directory Administrators",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: ["--managed-instance", "--mi"],
                  description: "Name of the Azure SQL Managed Instance",
                  args: { name: "managed-instance" },
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
                "Updates an existing managed instance Active Directory administrator",
              options: [
                {
                  name: ["--display-name", "-u"],
                  description:
                    "Display name of the Azure AD administrator user or group",
                  args: { name: "display-name" },
                  isRequired: true,
                },
                {
                  name: ["--object-id", "-i"],
                  description: "The unique ID of the Azure AD administrator",
                  args: { name: "object-id" },
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
                  name: ["--managed-instance", "--mi"],
                  description: "Name of the Azure SQL Managed Instance",
                  args: { name: "managed-instance" },
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
          name: "ad-only-auth",
          description:
            "Manage a Managed Instance's Azure Active Directory only settings",
          subcommands: [
            {
              name: "disable",
              description:
                "Disable Azure Active Directory only Authentication for this Managed Instance",
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
                  description: "The managed instance name",
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
              name: "enable",
              description:
                "Enable Azure Active Directory only Authentication for this Managed Instance",
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
                  description: "The managed instance name",
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
              name: "get",
              description:
                "Get a specific Azure Active Directory only Authentication property",
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
                  description: "The managed instance name",
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
          name: "advanced-threat-protection-setting",
          description:
            "Manage a SQL Managed Instance's advanced threat protection setting",
          subcommands: [
            {
              name: "show",
              description: "Gets an advanced threat protection setting",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: ["--name", "-n"],
                  description: "The managed instance name",
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
                "Update a SQL Managed Instance's advanced threat protection setting",
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
                  description: "The managed instance name",
                  args: { name: "name" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
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
                  name: "--state",
                  description:
                    "State of the advanced threat protection setting",
                  args: { name: "state" },
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
          name: "dtc",
          description: "Commands related to managed instance DTC management",
          subcommands: [
            {
              name: "show",
              description: "Get managed instance DTC settings",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: ["--managed-instance-name", "--mi"],
                  description: "The name of the managed instance",
                  args: { name: "managed-instance-name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description: "Name of the resource group",
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
              description: "Update managed instance DTC settings",
              options: [
                acquirePolicyToken,
                {
                  name: "--add",
                  description:
                    "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
                  args: { name: "add", isVariadic: true },
                },
                {
                  name: "--allow-inbound-enabled",
                  description: "Allow Inbound traffic to managed instance DTC",
                  args: {
                    name: "allow-inbound-enabled",
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
                  name: "--allow-outbound-enabled",
                  description: "Allow Outbound traffic of managed instance DTC",
                  args: {
                    name: "allow-outbound-enabled",
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
                  name: "--authentication",
                  description: "Authentication type of managed instance DTC",
                  args: { name: "authentication" },
                },
                changeReference,
                {
                  name: "--dtc-enabled",
                  description: "Active status of managed instance DTC",
                  args: {
                    name: "dtc-enabled",
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
                    "--external-dns-suffix-search-list",
                    "--external-dns-suffixes",
                  ],
                  description:
                    'External dns suffix search list of managed instance DTC. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: {
                    name: "external-dns-suffix-search-list",
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
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: ["--managed-instance-name", "--mi"],
                  description: "The name of the managed instance",
                  args: { name: "managed-instance-name" },
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
                  description: "Name of the resource group",
                  args: { name: "resource-group" },
                },
                {
                  name: "--set",
                  description:
                    "Update an object by specifying a property path and value to set. Example: --set property1.property2=<value>",
                  args: { name: "set", isVariadic: true },
                },
                {
                  name: [
                    "--sna-lu6point2-transactions-enabled",
                    "--sna-lu-transactions",
                  ],
                  description:
                    "Allow SNA LU 6.2 Transactions to managed instance DTC",
                  args: {
                    name: "sna-lu6point2-transactions-enabled",
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
                {
                  name: [
                    "--xa-transactions-default-timeout",
                    "--xa-default-timeout",
                  ],
                  description:
                    "Default timeout for XA Transactions (in seconds)",
                  args: { name: "xa-transactions-default-timeout" },
                },
                {
                  name: [
                    "--xa-transactions-maximum-timeout",
                    "--xa-max-timeout",
                  ],
                  description:
                    "Maximum timeout for XA Transactions (in seconds)",
                  args: { name: "xa-transactions-maximum-timeout" },
                },
                {
                  name: ["--xa-transactions-enabled", "--xa-transactions"],
                  description: "Allow XA Transactions to managed instance DTC",
                  args: {
                    name: "xa-transactions-enabled",
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
                  name: ["--managed-instance-name", "--mi"],
                  description: "The name of the managed instance",
                  args: { name: "managed-instance-name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description: "Name of the resource group",
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
          name: "endpoint-cert",
          description: "Endpoint certificates management commands",
          subcommands: [
            {
              name: "list",
              description:
                "List certificates used on endpoints on the target instance",
              options: [
                {
                  name: [
                    "--managed-instance-name",
                    "--managed-instance",
                    "--instance-name",
                    "--mi",
                  ],
                  description: "Name of the managed instance",
                  args: { name: "managed-instance-name" },
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
                "Get a certificate used on the endpoint with the given id",
              options: [
                {
                  name: ["--endpoint-type", "--name", "-n"],
                  description:
                    "Type of the endpoint whose certificate the customer is looking for",
                  args: { name: "endpoint-type" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: [
                    "--managed-instance-name",
                    "--managed-instance",
                    "--instance-name",
                    "--mi",
                  ],
                  description: "Name of the managed instance",
                  args: { name: "managed-instance-name" },
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
          description: "Manage a SQL Instance's keys",
          subcommands: [
            {
              name: "create",
              description: "Creates a SQL Instance key",
              options: [
                {
                  name: ["--kid", "-k"],
                  description:
                    'The Azure Key Vault key identifier of the server key. An example key identifier is "https://YourVaultName.vault.azure.net/keys/YourKeyName/01234567890123456789012345678901"',
                  args: { name: "kid" },
                  isRequired: true,
                },
                {
                  name: ["--managed-instance", "--mi"],
                  description: "Name of the Azure SQL Managed Instance",
                  args: { name: "managed-instance" },
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
              description: "Deletes a SQL Instance key",
              options: [
                {
                  name: ["--kid", "-k"],
                  description:
                    'The Azure Key Vault key identifier of the server key. An example key identifier is "https://YourVaultName.vault.azure.net/keys/YourKeyName/01234567890123456789012345678901"',
                  args: { name: "kid" },
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
                  name: ["--managed-instance", "--mi"],
                  description: "Name of the Azure SQL Managed Instance",
                  args: { name: "managed-instance" },
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
              description: "Gets a list of managed instance keys",
              options: [
                {
                  name: "--filter",
                  description:
                    "An OData filter expression to apply to the response",
                  args: { name: "filter" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: ["--managed-instance", "--mi"],
                  description: "Name of the Azure SQL Managed Instance",
                  args: { name: "managed-instance" },
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
              description: "Shows a SQL Instance key",
              options: [
                {
                  name: ["--kid", "-k"],
                  description:
                    'The Azure Key Vault key identifier of the server key. An example key identifier is "https://YourVaultName.vault.azure.net/keys/YourKeyName/01234567890123456789012345678901"',
                  args: { name: "kid" },
                  isRequired: true,
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: ["--managed-instance", "--mi"],
                  description: "Name of the Azure SQL Managed Instance",
                  args: { name: "managed-instance" },
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
          name: "link",
          description: "Instance link management commands",
          subcommands: [
            {
              name: "create",
              description:
                "Create a Managed Instance link between Sql On-Prem and Sql Managed Instance",
              options: [
                {
                  name: [
                    "--managed-instance-name",
                    "--managed-instance",
                    "--instance-name",
                    "--mi",
                  ],
                  description: "Name of the managed instance",
                  args: { name: "managed-instance-name" },
                  isRequired: true,
                },
                {
                  name: ["--link-name", "--name", "-n"],
                  description: "Managed Instance link name",
                  args: { name: "link-name" },
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
                  name: "--databases",
                  description:
                    'Databases in the distributed availability group Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "databases", isVariadic: true },
                },
                {
                  name: "--failover-mode",
                  description:
                    "The link failover mode - can be Manual if intended to be used for two-way failover with a supported SQL Server, or None for one-way failover to Azure",
                  args: {
                    name: "failover-mode",
                    suggestions: ["Manual", "None"],
                  },
                },
                {
                  name: [
                    "--instance-availability-group-name",
                    "--instance-ag-name",
                  ],
                  description: "Managed instance side availability group name",
                  args: { name: "instance-availability-group-name" },
                },
                {
                  name: "--instance-link-role",
                  description: "Managed instance side link role",
                  args: {
                    name: "instance-link-role",
                    suggestions: ["Primary", "Secondary"],
                  },
                },
                {
                  name: "--link-mode",
                  description:
                    "Specifies whether the link operates in single-database or multi-database mode",
                  args: {
                    name: "link-mode",
                    suggestions: ["MultiDatabase", "SingleDatabase"],
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
                  name: [
                    "--partner-availability-group-name",
                    "--partner-ag-name",
                  ],
                  description: "SQL server side availability group name",
                  args: { name: "partner-availability-group-name" },
                },
                {
                  name: "--partner-endpoint",
                  description:
                    "SQL server side endpoint - IP or DNS resolvable name",
                  args: { name: "partner-endpoint" },
                },
                {
                  name: "--seeding-mode",
                  description:
                    "Database seeding mode – can be Automatic (default), or Manual for supported scenarios",
                  args: {
                    name: "seeding-mode",
                    suggestions: ["Automatic", "Manual"],
                  },
                },
              ],
            },
            {
              name: "delete",
              description:
                "Drop a Managed Instance link between Sql On-Prem and Sql Managed Instance",
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
                  name: [
                    "--managed-instance-name",
                    "--managed-instance",
                    "--instance-name",
                    "--mi",
                  ],
                  description: "Name of the managed instance",
                  args: { name: "managed-instance-name" },
                },
                {
                  name: ["--link-name", "--name", "-n"],
                  description: "Managed Instance link name",
                  args: { name: "link-name" },
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
              name: "failover",
              description:
                "Performs requested failover type in this Managed Instance link",
              options: [
                {
                  name: "--failover-type",
                  description:
                    "The failover type, can be ForcedAllowDataLoss or Planned",
                  args: {
                    name: "failover-type",
                    suggestions: ["ForcedAllowDataLoss", "Planned"],
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
                  name: [
                    "--managed-instance-name",
                    "--managed-instance",
                    "--instance-name",
                    "--mi",
                  ],
                  description: "The name of the managed instance",
                  args: { name: "managed-instance-name" },
                },
                {
                  name: ["--link-name", "--name", "-n"],
                  description: "Managed Instance link name",
                  args: { name: "link-name" },
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
              description: "Get a list of Managed Instance links in instance",
              options: [
                {
                  name: [
                    "--managed-instance-name",
                    "--managed-instance",
                    "--instance-name",
                    "--mi",
                  ],
                  description: "Name of the managed instance",
                  args: { name: "managed-instance-name" },
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
              description: "Get a Managed Instance link info",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: [
                    "--managed-instance-name",
                    "--managed-instance",
                    "--instance-name",
                    "--mi",
                  ],
                  description: "Name of the managed instance",
                  args: { name: "managed-instance-name" },
                },
                {
                  name: ["--link-name", "--name", "-n"],
                  description: "Managed Instance link name",
                  args: { name: "link-name" },
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
              description: "Update a Managed Instance link",
              options: [
                acquirePolicyToken,
                changeReference,
                {
                  name: "--databases",
                  description:
                    'Databases in the distributed availability group. This property can be updated only for links in MultiDatabase mode. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "databases", isVariadic: true },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: [
                    "--managed-instance-name",
                    "--managed-instance",
                    "--instance-name",
                    "--mi",
                  ],
                  description: "The name of the managed instance",
                  args: { name: "managed-instance-name" },
                },
                {
                  name: ["--link-name", "--name", "-n"],
                  description: "Managed Instance link name",
                  args: { name: "link-name" },
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
                  name: "--replication-mode",
                  description: "Replication mode of the link",
                  args: {
                    name: "replication-mode",
                    suggestions: ["Async", "Sync"],
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
          ],
        },
        {
          name: "op",
          description: "Manage operations on a managed instance",
          subcommands: [
            {
              name: "cancel",
              description:
                "Cancels the asynchronous operation on the managed instance",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "The unique name of the operation to cancel",
                  args: { name: "name" },
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
                  name: ["--managed-instance", "--mi"],
                  description: "Name of the Azure SQL Managed Instance",
                  args: { name: "managed-instance" },
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
                "Gets a list of operations performed on the managed instance",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: ["--managed-instance", "--mi"],
                  description: "Name of the Azure SQL Managed Instance",
                  args: { name: "managed-instance" },
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
              description: "Gets a management operation on a managed instance",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "The unique name of the operation to show",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: ["--managed-instance", "--mi"],
                  description: "Name of the Azure SQL Managed Instance",
                  args: { name: "managed-instance" },
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
          name: "partner-cert",
          description: "Server trust certificate management commands",
          subcommands: [
            {
              name: "create",
              description:
                "Upload a server trust certificate from box to Sql Managed Instance",
              options: [
                {
                  name: ["--certificate-name", "--name", "-n"],
                  description: "Name of of the certificate to upload",
                  args: { name: "certificate-name" },
                  isRequired: true,
                },
                {
                  name: [
                    "--managed-instance-name",
                    "--managed-instance",
                    "--instance-name",
                    "--mi",
                  ],
                  description: "Name of the managed instance",
                  args: { name: "managed-instance-name" },
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
                  name: "--public-blob",
                  description: "The certificate public blob",
                  args: { name: "public-blob" },
                },
              ],
            },
            {
              name: "delete",
              description:
                "Delete a server trust certificate that was uploaded from box to Sql Managed Instance",
              options: [
                acquirePolicyToken,
                {
                  name: ["--certificate-name", "--name", "-n"],
                  description: "Name of of the certificate to delete",
                  args: { name: "certificate-name" },
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
                    "--managed-instance-name",
                    "--managed-instance",
                    "--instance-name",
                    "--mi",
                  ],
                  description: "Name of the managed instance",
                  args: { name: "managed-instance-name" },
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
                "Get a list of server trust certificates that were uploaded from box to the given Sql Managed Instance",
              options: [
                {
                  name: [
                    "--managed-instance-name",
                    "--managed-instance",
                    "--instance-name",
                    "--mi",
                  ],
                  description: "Name of the managed instance",
                  args: { name: "managed-instance-name" },
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
                "Get a server trust certificate that was uploaded from box to Sql Managed Instance",
              options: [
                {
                  name: ["--certificate-name", "--name", "-n"],
                  description: "Name of of the certificate to get",
                  args: { name: "certificate-name" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: [
                    "--managed-instance-name",
                    "--managed-instance",
                    "--instance-name",
                    "--mi",
                  ],
                  description: "Name of the managed instance",
                  args: { name: "managed-instance-name" },
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
          name: "server-configuration-option",
          description: "Server configuration option management commands",
          subcommands: [
            {
              name: "list",
              description:
                "List a list of managed instance server configuration options",
              options: [
                {
                  name: [
                    "--managed-instance-name",
                    "--managed-instance",
                    "--instance-name",
                    "--mi",
                  ],
                  description: "Name of the managed instance",
                  args: { name: "managed-instance-name" },
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
              name: "set",
              description: "Set managed instance server configuration option",
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
                  name: [
                    "--managed-instance-name",
                    "--managed-instance",
                    "--instance-name",
                    "--mi",
                  ],
                  description: "Name of the managed instance",
                  args: { name: "managed-instance-name" },
                },
                {
                  name: ["--server-configuration-option-name", "--name", "-n"],
                  description: "Name of the server configuration option",
                  args: {
                    name: "server-configuration-option-name",
                    suggestions: ["allowPolybaseExport"],
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
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--server-configuration-option-value", "--value"],
                  description: "Value of the server configuration option",
                  args: { name: "server-configuration-option-value" },
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
              description: "Get managed instance server configuration option",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: [
                    "--managed-instance-name",
                    "--managed-instance",
                    "--instance-name",
                    "--mi",
                  ],
                  description: "Name of the managed instance",
                  args: { name: "managed-instance-name" },
                },
                {
                  name: ["--server-configuration-option-name", "--name", "-n"],
                  description: "Name of the server configuration option",
                  args: {
                    name: "server-configuration-option-name",
                    suggestions: ["allowPolybaseExport"],
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
                  name: [
                    "--managed-instance-name",
                    "--managed-instance",
                    "--instance-name",
                    "--mi",
                  ],
                  description: "Name of the managed instance",
                  args: { name: "managed-instance-name" },
                },
                {
                  name: "--interval",
                  description: "Polling interval in seconds",
                  args: { name: "interval" },
                },
                {
                  name: ["--server-configuration-option-name", "--name", "-n"],
                  description: "Name of the server configuration option",
                  args: {
                    name: "server-configuration-option-name",
                    suggestions: ["allowPolybaseExport"],
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
          name: "start-stop-schedule",
          description: "Manage the managed instance's start stop schedule",
          subcommands: [
            {
              name: "create",
              description: "Create the managed instance's Start/Stop schedule",
              options: [
                {
                  name: ["--managed-instance", "--mi"],
                  description: "The name of the managed instance",
                  args: { name: "managed-instance" },
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
                  name: "--description",
                  description: "The description of the schedule",
                  args: { name: "description" },
                },
                {
                  name: "--schedule-list",
                  description:
                    'Schedule list. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "schedule-list", isVariadic: true },
                },
                {
                  name: "--timezone-id",
                  description: "The time zone of the schedule",
                  args: { name: "timezone-id" },
                },
              ],
            },
            {
              name: "delete",
              description: "Delete the managed instance's Start/Stop schedule",
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
                  name: ["--managed-instance", "--mi"],
                  description: "The name of the managed instance",
                  args: { name: "managed-instance" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description: "Name of the resource group",
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
              description: "List the managed instance's Start/Stop schedules",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: ["--managed-instance", "--mi"],
                  description: "The name of the managed instance",
                  args: { name: "managed-instance" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description: "Name of the resource group",
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
              description: "Get the managed instance's Start/Stop schedule",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: ["--managed-instance", "--mi"],
                  description: "The name of the managed instance",
                  args: { name: "managed-instance" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description: "Name of the resource group",
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
              description: "Update the managed instance's Start/Stop schedule",
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
                  name: "--description",
                  description: "The description of the schedule",
                  args: { name: "description" },
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
                  name: ["--managed-instance", "--mi"],
                  description: "The name of the managed instance",
                  args: { name: "managed-instance" },
                },
                {
                  name: "--remove",
                  description:
                    "Remove a property or an element from a list. Example: --remove property.list <indexToRemove> OR --remove propertyToRemove",
                  args: { name: "remove", isVariadic: true },
                },
                {
                  name: ["--resource-group", "-g"],
                  description: "Name of the resource group",
                  args: { name: "resource-group" },
                },
                {
                  name: "--schedule-list",
                  description:
                    'Schedule list. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "schedule-list", isVariadic: true },
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
                  name: "--timezone-id",
                  description: "The time zone of the schedule",
                  args: { name: "timezone-id" },
                },
              ],
            },
          ],
        },
        {
          name: "tde-key",
          description: "Manage a SQL Instance's encryption protector",
          subcommands: [
            {
              name: "set",
              description: "Sets the SQL Instance's encryption protector",
              options: [
                {
                  name: ["--server-key-type", "-t"],
                  description: "The type of the server key",
                  args: {
                    name: "server-key-type",
                    suggestions: ["AzureKeyVault", "ServiceManaged"],
                  },
                  isRequired: true,
                },
                acquirePolicyToken,
                {
                  name: "--auto-rotation-enabled",
                  description:
                    "The key auto rotation opt in status. Can be either true or false",
                  args: {
                    name: "auto-rotation-enabled",
                    suggestions: ["false", "true"],
                    isOptional: true,
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
                  name: ["--kid", "-k"],
                  description:
                    'The Azure Key Vault key identifier of the server key. An example key identifier is "https://YourVaultName.vault.azure.net/keys/YourKeyName/01234567890123456789012345678901"',
                  args: { name: "kid" },
                },
                {
                  name: ["--managed-instance", "--mi"],
                  description: "Name of the Azure SQL Managed Instance",
                  args: { name: "managed-instance" },
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
              description: "Shows a server encryption protector",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: ["--managed-instance", "--mi"],
                  description: "Name of the Azure SQL Managed Instance",
                  args: { name: "managed-instance" },
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
      name: "midb",
      description: "Manage SQL Managed Instance databases",
      subcommands: [
        {
          name: "create",
          description: "Create a managed database",
          options: [
            {
              name: ["--managed-instance", "--mi"],
              description: "Name of the Azure SQL Managed Instance",
              args: { name: "managed-instance" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "The name of the Azure SQL Managed Database",
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
              name: "--collation",
              description:
                "The collation of the Azure SQL Managed Database collation to use, e.g.: SQL_Latin1_General_CP1_CI_AS or Latin1_General_100_CS_AS_SC",
              args: { name: "collation" },
            },
            {
              name: "--ledger-on",
              description:
                "Create a ledger database, in which the integrity of all data is protected by the ledger feature. All tables in the ledger database must be ledger tables. Note: the value of this property cannot be changed after the database has been created",
              args: {
                name: "ledger-on",
                suggestions: ["Disabled", "Enabled"],
                isOptional: true,
              },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
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
          name: "delete",
          description: "Delete a managed database",
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
              name: ["--managed-instance", "--mi"],
              description: "Name of the Azure SQL Managed Instance",
              args: { name: "managed-instance" },
            },
            {
              name: ["--name", "-n"],
              description: "The name of the Azure SQL Managed Database",
              args: { name: "name" },
            },
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
          description: "List managed databases on a managed instance",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids", isVariadic: true },
            },
            {
              name: ["--managed-instance", "--mi"],
              description: "Name of the Azure SQL Managed Instance",
              args: { name: "managed-instance" },
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
          name: "list-deleted",
          description: "List restorable deleted managed databases",
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
              name: ["--managed-instance", "--mi"],
              description: "Name of the Azure SQL Managed Instance",
              args: { name: "managed-instance" },
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
          name: "recover",
          description:
            "Recover a managed database using geo-pair instance backup",
          options: [
            {
              name: ["--recoverable-database-id", "-r"],
              description:
                "The id of recoverable database from geo-replicated instance",
              args: { name: "recoverable-database-id" },
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
              name: ["--managed-instance", "--mi"],
              description: "Name of the Azure SQL Managed Instance",
              args: { name: "managed-instance" },
            },
            {
              name: ["--name", "-n"],
              description: "The name of the Azure SQL Managed Database",
              args: { name: "name" },
            },
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
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
          ],
        },
        {
          name: "restore",
          description: "Restore a managed database",
          options: [
            {
              name: "--dest-name",
              description:
                "Name of the managed database that will be created as the restore destination",
              args: { name: "dest-name" },
              isRequired: true,
            },
            {
              name: ["--time", "-t"],
              description:
                'The point in time of the source database that will be restored to create the new database. Must be greater than or equal to the source database\'s earliestRestoreDate value. Time should be in following format: "YYYY-MM-DDTHH:MM:SS"',
              args: { name: "time" },
              isRequired: true,
            },
            acquirePolicyToken,
            changeReference,
            {
              name: "--deleted-time",
              description:
                "If specified, restore from a deleted database instead of from an existing database. Must match the deleted time of a deleted database on the source Managed Instance",
              args: { name: "deleted-time" },
            },
            {
              name: "--dest-mi",
              description:
                "Name of the managed instance to restore managed database to. This can be same managed instance, or another managed instance on same subscription. When not specified it defaults to source managed instance",
              args: { name: "dest-mi" },
            },
            {
              name: "--dest-resource-group",
              description:
                "Name of the resource group of the managed instance to restore managed database to. When not specified it defaults to source resource group",
              args: { name: "dest-resource-group" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids", isVariadic: true },
            },
            {
              name: ["--managed-instance", "--mi"],
              description: "Name of the Azure SQL Managed Instance",
              args: { name: "managed-instance" },
            },
            {
              name: ["--name", "-n"],
              description: "The name of the Azure SQL Managed Database",
              args: { name: "name" },
            },
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
              name: ["--source-sub", "-s"],
              description:
                "Subscription id of the source database, the one restored from. This parameter should be used when doing cross subscription restore",
              args: { name: "source-sub" },
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
          ],
        },
        {
          name: "show",
          description: "Get the details for a managed database",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids", isVariadic: true },
            },
            {
              name: ["--managed-instance", "--mi"],
              description: "Name of the Azure SQL Managed Instance",
              args: { name: "managed-instance" },
            },
            {
              name: ["--name", "-n"],
              description: "The name of the Azure SQL Managed Database",
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
          description: "Update a managed database",
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
              name: ["--managed-instance", "--mi"],
              description: "Name of the Azure SQL Managed Instance",
              args: { name: "managed-instance" },
            },
            {
              name: ["--name", "-n"],
              description: "The name of the Azure SQL Managed Database",
              args: { name: "name" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
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
                "Space-separated tags: key[=value] [key[=value] ...]. Use '' to clear existing tags",
              args: { name: "tags", isOptional: true, isVariadic: true },
            },
          ],
        },
        {
          name: "advanced-threat-protection-setting",
          description:
            "Manage a SQL Managed Instance database's advanced threat protection setting",
          subcommands: [
            {
              name: "show",
              description: "Gets an advanced threat protection setting",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: ["--managed-instance", "--mi"],
                  description: "Name of the Azure SQL Managed Instance",
                  args: { name: "managed-instance" },
                },
                {
                  name: ["--name", "-n"],
                  description: "The name of the Azure SQL Managed Database",
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
                "Update a SQL Managed Instance database's advanced threat protection setting",
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
                  name: ["--managed-instance", "--mi"],
                  description: "Name of the Azure SQL Managed Instance",
                  args: { name: "managed-instance" },
                },
                {
                  name: ["--name", "-n"],
                  description: "The name of the Azure SQL Managed Database",
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
                  name: "--state",
                  description:
                    "State of the advanced threat protection setting",
                  args: { name: "state" },
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
          name: "copy",
          description:
            "Start, complete, cancel and list managed database copy operations",
          subcommands: [
            {
              name: "cancel",
              description: "Cancel managed database copy operation",
              options: [
                {
                  name: "--dest-mi",
                  description:
                    "Name of the managed instance to copy the managed database to",
                  args: { name: "dest-mi" },
                  isRequired: true,
                },
                acquirePolicyToken,
                changeReference,
                {
                  name: ["--dest-resource-group", "--dest-rg"],
                  description:
                    "Name of the resource group to copy the managed database to. If unspecified, defaults to the origin resource group",
                  args: { name: "dest-resource-group" },
                },
                {
                  name: ["--dest-subscription-id", "--dest-sub-id"],
                  description:
                    "Id of the subscription to move the managed database to. If unspecified, defaults to the origin subscription id",
                  args: { name: "dest-subscription-id" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: ["--managed-instance", "--mi"],
                  description: "Name of the Azure SQL Managed Instance",
                  args: { name: "managed-instance" },
                },
                {
                  name: ["--name", "-n"],
                  description: "The name of the Azure SQL Managed Database",
                  args: { name: "name" },
                },
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
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
                },
              ],
            },
            {
              name: "complete",
              description: "Complete managed database copy operation",
              options: [
                {
                  name: "--dest-mi",
                  description:
                    "Name of the managed instance to copy the managed database to",
                  args: { name: "dest-mi" },
                  isRequired: true,
                },
                acquirePolicyToken,
                changeReference,
                {
                  name: ["--dest-resource-group", "--dest-rg"],
                  description:
                    "Name of the resource group to copy the managed database to. If unspecified, defaults to the origin resource group",
                  args: { name: "dest-resource-group" },
                },
                {
                  name: ["--dest-subscription-id", "--dest-sub-id"],
                  description:
                    "Id of the subscription to move the managed database to. If unspecified, defaults to the origin subscription id",
                  args: { name: "dest-subscription-id" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: ["--managed-instance", "--mi"],
                  description: "Name of the Azure SQL Managed Instance",
                  args: { name: "managed-instance" },
                },
                {
                  name: ["--name", "-n"],
                  description: "The name of the Azure SQL Managed Database",
                  args: { name: "name" },
                },
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
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
                },
              ],
            },
            {
              name: "list",
              description: "List managed database copy operations",
              options: [
                {
                  name: "--dest-mi",
                  description:
                    "Name of the target managed instance to show copy operations for",
                  args: { name: "dest-mi" },
                },
                {
                  name: ["--dest-resource-group", "--dest-rg"],
                  description:
                    "Name of the target resource group to show copy operations for",
                  args: { name: "dest-resource-group" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: ["--only-latest-per-database", "--latest"],
                  description:
                    "Flag that only shows latest copy operation per managed database",
                },
                {
                  name: ["--managed-instance", "--mi"],
                  description: "Name of the source managed instance",
                  args: { name: "managed-instance" },
                },
                {
                  name: ["--name", "-n"],
                  description: "The name of the Azure SQL Managed Database",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description: "Name of the source resource group",
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
              description: "Start managed database copy operation",
              options: [
                {
                  name: "--dest-mi",
                  description:
                    "Name of the managed instance to copy the managed database to",
                  args: { name: "dest-mi" },
                  isRequired: true,
                },
                acquirePolicyToken,
                changeReference,
                {
                  name: ["--dest-resource-group", "--dest-rg"],
                  description:
                    "Name of the resource group to copy the managed database to. If unspecified, defaults to the origin resource group",
                  args: { name: "dest-resource-group" },
                },
                {
                  name: ["--dest-subscription-id", "--dest-sub-id"],
                  description:
                    "Id of the subscription to move the managed database to. If unspecified, defaults to the origin subscription id",
                  args: { name: "dest-subscription-id" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: ["--managed-instance", "--mi"],
                  description: "Name of the Azure SQL Managed Instance",
                  args: { name: "managed-instance" },
                },
                {
                  name: ["--name", "-n"],
                  description: "The name of the Azure SQL Managed Database",
                  args: { name: "name" },
                },
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
          name: "ledger-digest-uploads",
          description: "Manage ledger digest upload settings",
          subcommands: [
            {
              name: "disable",
              description: "Disable uploading ledger digests",
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
                  name: ["--managed-instance", "--mi"],
                  description: "Name of the Azure SQL Managed Instance",
                  args: { name: "managed-instance" },
                },
                {
                  name: ["--name", "-n"],
                  description: "The name of the Azure SQL Managed Database",
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
              name: "enable",
              description:
                "Enable uploading ledger digests to an Azure Storage account or to Azure Confidential Ledger. If uploading ledger digests is already enabled, the cmdlet resets the digest storage endpoint to a new value",
              options: [
                {
                  name: "--endpoint",
                  description:
                    "The endpoint of a digest storage, which can be either an Azure Blob storage or a ledger in Azure Confidential Ledger",
                  args: { name: "endpoint" },
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
                  name: ["--managed-instance", "--mi"],
                  description: "Name of the Azure SQL Managed Instance",
                  args: { name: "managed-instance" },
                },
                {
                  name: ["--name", "-n"],
                  description: "The name of the Azure SQL Managed Database",
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
              description: "Show the current ledger digest settings",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: ["--managed-instance", "--mi"],
                  description: "Name of the Azure SQL Managed Instance",
                  args: { name: "managed-instance" },
                },
                {
                  name: ["--name", "-n"],
                  description: "The name of the Azure SQL Managed Database",
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
          name: "log-replay",
          description:
            "SQL Managed Instance database Log Replay service commands",
          subcommands: [
            {
              name: "complete",
              description: "Complete Log Replay service on specified database",
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
                  name: ["--last-backup-name", "--last-bn"],
                  description: "The name of the last backup to restore",
                  args: { name: "last-backup-name" },
                },
                {
                  name: ["--managed-instance", "--mi"],
                  description: "Name of the Azure SQL Managed Instance",
                  args: { name: "managed-instance" },
                },
                {
                  name: ["--name", "-n"],
                  description: "The name of the Azure SQL Managed Database",
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
              description: "Get status of Log Replay service",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: ["--managed-instance", "--mi"],
                  description: "Name of the Azure SQL Managed Instance",
                  args: { name: "managed-instance" },
                },
                {
                  name: ["--name", "-n"],
                  description: "The name of the Azure SQL Managed Database",
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
              description: "Start Log Replay service on specified database",
              options: [
                {
                  name: ["--storage-sas", "--ss"],
                  description:
                    "The authorization Sas token to access storage container where backups are",
                  args: { name: "storage-sas" },
                  isRequired: true,
                },
                {
                  name: ["--storage-uri", "--su"],
                  description:
                    "The URI of the storage container where backups are",
                  args: { name: "storage-uri" },
                  isRequired: true,
                },
                acquirePolicyToken,
                {
                  name: ["--auto-complete", "-a"],
                  description:
                    "The flag that in usage with last_backup_name automatically completes log replay servise",
                },
                changeReference,
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: ["--last-backup-name", "--last-bn"],
                  description: "The name of the last backup to restore",
                  args: { name: "last-backup-name" },
                },
                {
                  name: ["--managed-instance", "--mi"],
                  description: "Name of the Azure SQL Managed Instance",
                  args: { name: "managed-instance" },
                },
                {
                  name: ["--name", "-n"],
                  description: "The name of the Azure SQL Managed Database",
                  args: { name: "name" },
                },
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
                  name: ["--storage-identity", "--si"],
                  description: "The storage container identity to use",
                  args: {
                    name: "storage-identity",
                    suggestions: ["ManagedIdentity", "SharedAccessSignature"],
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
              name: "stop",
              description: "Stop Log Replay service",
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
                  name: ["--managed-instance", "--mi"],
                  description: "Name of the Azure SQL Managed Instance",
                  args: { name: "managed-instance" },
                },
                {
                  name: ["--name", "-n"],
                  description: "The name of the Azure SQL Managed Database",
                  args: { name: "name" },
                },
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
              name: "wait",
              description:
                "Place the CLI in a waiting state until a condition of the managed database is met",
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
                  name: ["--managed-instance", "--mi"],
                  description: "Name of the Azure SQL Managed Instance",
                  args: { name: "managed-instance" },
                },
                {
                  name: ["--name", "-n"],
                  description: "The name of the Azure SQL Managed Database",
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
          name: "ltr-backup",
          description:
            "Manage SQL Managed Instance database long term retention backups",
          subcommands: [
            {
              name: "delete",
              description: "Delete a long term retention backup",
              options: [
                acquirePolicyToken,
                {
                  name: ["--backup-id", "--id"],
                  description:
                    "The resource id of the backups. Use 'az sql midb ltr-backup show' or 'az sql midb ltr-backup list' for backup id. If provided, other arguments are not required",
                  args: { name: "backup-id" },
                },
                changeReference,
                {
                  name: ["--database", "-d"],
                  description: "The name of the Azure SQL Managed Database",
                  args: { name: "database" },
                },
                {
                  name: ["--location", "-l"],
                  description: "The location of the desired backup(s)",
                  args: { name: "location" },
                },
                {
                  name: ["--managed-instance", "--mi"],
                  description: "Name of the Azure SQL Managed Instance",
                  args: { name: "managed-instance" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "The name of the LTR backup. Use 'az sql midb ltr-backup show' or 'az sql midb ltr-backup list' for backup name",
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
              description:
                "List the long term retention backups for a location, instance or database",
              options: [
                {
                  name: ["--location", "-l"],
                  description: "The location of the desired backup(s)",
                  args: { name: "location" },
                  isRequired: true,
                },
                {
                  name: ["--database", "-d"],
                  description:
                    "The name of the Azure SQL Managed Database. If specified (along with instance name), retrieves all requested backups under this database",
                  args: { name: "database" },
                },
                {
                  name: ["--database-state", "--state"],
                  description:
                    "'All', 'Live', or 'Deleted'. Will fetch backups only from databases of specified state. If no state provied, defaults to 'All'",
                  args: { name: "database-state" },
                },
                {
                  name: ["--only-latest-per-database", "--latest"],
                  description:
                    "If true, will only return the latest backup for each database",
                },
                {
                  name: ["--managed-instance", "--mi"],
                  description:
                    "Name of the Azure SQL Managed Instance. If specified, retrieves all requested backups under this managed instance",
                  args: { name: "managed-instance" },
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
              name: "restore",
              description:
                "Restore a long term retention backup to a new database",
              options: [
                {
                  name: ["--backup-id", "--id"],
                  description:
                    "The resource id of the long term retention backup to be restored. Use 'az sql midb ltr-backup show' or 'az sql midb ltr-backup list' for backup id",
                  args: { name: "backup-id" },
                  isRequired: true,
                },
                {
                  name: "--dest-database",
                  description:
                    "Name of the managed database that will be created as the restore destination",
                  args: { name: "dest-database" },
                  isRequired: true,
                },
                {
                  name: "--dest-mi",
                  description:
                    "Name of the managed instance to restore managed database to",
                  args: { name: "dest-mi" },
                  isRequired: true,
                },
                {
                  name: "--dest-resource-group",
                  description:
                    "Name of the resource group of the managed instance to restore managed database to",
                  args: { name: "dest-resource-group" },
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
              name: "show",
              description:
                "Get a long term retention backup for a managed database",
              options: [
                {
                  name: ["--backup-id", "--id"],
                  description:
                    "The resource id of the backups. Use 'az sql midb ltr-backup show' or 'az sql midb ltr-backup list' for backup id. If provided, other arguments are not required",
                  args: { name: "backup-id" },
                },
                {
                  name: ["--database", "-d"],
                  description: "The name of the Azure SQL Managed Database",
                  args: { name: "database" },
                },
                {
                  name: ["--location", "-l"],
                  description: "The location of the desired backup(s)",
                  args: { name: "location" },
                },
                {
                  name: ["--managed-instance", "--mi"],
                  description: "Name of the Azure SQL Managed Instance",
                  args: { name: "managed-instance" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "The name of the LTR backup. Use 'az sql midb ltr-backup show' or 'az sql midb ltr-backup list' for backup name",
                  args: { name: "name" },
                },
              ],
            },
            {
              name: "wait",
              description:
                "Place the CLI in a waiting state until a condition of the managed database is met",
              options: [
                {
                  name: ["--database", "-d"],
                  description: "The name of the Azure SQL Managed Database",
                  args: { name: "database" },
                  isRequired: true,
                },
                {
                  name: ["--managed-instance", "--mi"],
                  description: "Name of the Azure SQL Managed Instance",
                  args: { name: "managed-instance" },
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
          name: "ltr-policy",
          description:
            "Manage SQL Managed Instance database long term retention policy",
          subcommands: [
            {
              name: "set",
              description:
                "Update long term retention settings for a managed database",
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
                  name: ["--managed-instance", "--mi"],
                  description: "Name of the Azure SQL Managed Instance",
                  args: { name: "managed-instance" },
                },
                {
                  name: "--monthly-retention",
                  description:
                    "Retention for the monthly backup. If just a number is passed instead of an ISO 8601 string, days will be assumed as the units.There is a minimum of 7 days and a maximum of 10 years",
                  args: { name: "monthly-retention" },
                },
                {
                  name: ["--name", "-n"],
                  description: "The name of the Azure SQL Managed Database",
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
                  name: "--week-of-year",
                  description:
                    "The Week of Year, 1 to 52, in which to take the yearly LTR backup",
                  args: { name: "week-of-year" },
                },
                {
                  name: "--weekly-retention",
                  description:
                    "Retention for the weekly backup. If just a number is passed instead of an ISO 8601 string, days will be assumed as the units.There is a minimum of 7 days and a maximum of 10 years",
                  args: { name: "weekly-retention" },
                },
                {
                  name: "--yearly-retention",
                  description:
                    "Retention for the yearly backup. If just a number is passed instead of an ISO 8601 string, days will be assumed as the units.There is a minimum of 7 days and a maximum of 10 years",
                  args: { name: "yearly-retention" },
                },
              ],
            },
            {
              name: "show",
              description:
                "Show the long term retention policy for a managed database",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: ["--managed-instance", "--mi"],
                  description: "Name of the Azure SQL Managed Instance",
                  args: { name: "managed-instance" },
                },
                {
                  name: ["--name", "-n"],
                  description: "The name of the Azure SQL Managed Database",
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
          name: "move",
          description:
            "Start, complete, cancel and list managed database move operations",
          subcommands: [
            {
              name: "cancel",
              description: "Cancel managed database move operation",
              options: [
                {
                  name: "--dest-mi",
                  description:
                    "Name of the managed instance to move the managed database to",
                  args: { name: "dest-mi" },
                  isRequired: true,
                },
                acquirePolicyToken,
                changeReference,
                {
                  name: ["--dest-resource-group", "--dest-rg"],
                  description:
                    "Name of the resource group to move the managed database to. If unspecified, defaults to the origin resource group",
                  args: { name: "dest-resource-group" },
                },
                {
                  name: ["--dest-subscription-id", "--dest-sub-id"],
                  description:
                    "Id of the subscription to move the managed database to. If unspecified, defaults to the origin subscription id",
                  args: { name: "dest-subscription-id" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: ["--managed-instance", "--mi"],
                  description: "Name of the Azure SQL Managed Instance",
                  args: { name: "managed-instance" },
                },
                {
                  name: ["--name", "-n"],
                  description: "The name of the Azure SQL Managed Database",
                  args: { name: "name" },
                },
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
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
                },
              ],
            },
            {
              name: "complete",
              description: "Complete managed database move operation",
              options: [
                {
                  name: "--dest-mi",
                  description:
                    "Name of the managed instance to move the managed database to",
                  args: { name: "dest-mi" },
                  isRequired: true,
                },
                acquirePolicyToken,
                changeReference,
                {
                  name: ["--dest-resource-group", "--dest-rg"],
                  description:
                    "Name of the resource group to move the managed database to. If unspecified, defaults to the origin resource group",
                  args: { name: "dest-resource-group" },
                },
                {
                  name: ["--dest-subscription-id", "--dest-sub-id"],
                  description:
                    "Id of the subscription to move the managed database to. If unspecified, defaults to the origin subscription id",
                  args: { name: "dest-subscription-id" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: ["--managed-instance", "--mi"],
                  description: "Name of the Azure SQL Managed Instance",
                  args: { name: "managed-instance" },
                },
                {
                  name: ["--name", "-n"],
                  description: "The name of the Azure SQL Managed Database",
                  args: { name: "name" },
                },
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
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
                },
              ],
            },
            {
              name: "list",
              description: "List managed database move operations",
              options: [
                {
                  name: "--dest-mi",
                  description:
                    "Name of the target managed instance to show move operations for",
                  args: { name: "dest-mi" },
                },
                {
                  name: ["--dest-resource-group", "--dest-rg"],
                  description:
                    "Name of the target resource group to show move operations for",
                  args: { name: "dest-resource-group" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: ["--only-latest-per-database", "--latest"],
                  description:
                    "Flag that only shows latest move operation per managed database",
                },
                {
                  name: ["--managed-instance", "--mi"],
                  description: "Name of the source managed instance",
                  args: { name: "managed-instance" },
                },
                {
                  name: ["--name", "-n"],
                  description: "The name of the Azure SQL Managed Database",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description: "Name of the source resource group",
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
              description: "Start managed database move operation",
              options: [
                {
                  name: "--dest-mi",
                  description:
                    "Name of the managed instance to move the managed database to",
                  args: { name: "dest-mi" },
                  isRequired: true,
                },
                acquirePolicyToken,
                changeReference,
                {
                  name: ["--dest-resource-group", "--dest-rg"],
                  description:
                    "Name of the resource group to move the managed database to. If unspecified, defaults to the origin resource group",
                  args: { name: "dest-resource-group" },
                },
                {
                  name: ["--dest-subscription-id", "--dest-sub-id"],
                  description:
                    "Id of the subscription to move the managed database to. If unspecified, defaults to the origin subscription id",
                  args: { name: "dest-subscription-id" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: ["--managed-instance", "--mi"],
                  description: "Name of the Azure SQL Managed Instance",
                  args: { name: "managed-instance" },
                },
                {
                  name: ["--name", "-n"],
                  description: "The name of the Azure SQL Managed Database",
                  args: { name: "name" },
                },
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
          name: "short-term-retention-policy",
          description:
            "Manage SQL Managed Instance database backup short term retention policy",
          subcommands: [
            {
              name: "set",
              description:
                "Update short term retention for automated backups on a single database",
              options: [
                {
                  name: "--retention-days",
                  description:
                    "New backup short term retention policy in days. Valid policy for live database is 7-35 days, valid policy for dropped databases is 0-35 days",
                  args: { name: "retention-days" },
                  isRequired: true,
                },
                acquirePolicyToken,
                changeReference,
                {
                  name: "--deleted-time",
                  description:
                    "If specified, updates retention days for a deleted database, instead of an existing database. Must match the deleted time of a deleted database on the source Managed Instance",
                  args: { name: "deleted-time" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: "--lock-immutability",
                  description:
                    "Whether to lock backup immutability for a live managed database. Locking is irreversible. Cannot be used with --deleted-time, even when false",
                  args: {
                    name: "lock-immutability",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: ["--managed-instance", "--mi"],
                  description: "Name of the Azure SQL Managed Instance",
                  args: { name: "managed-instance" },
                },
                {
                  name: ["--name", "-n"],
                  description: "The name of the Azure SQL Managed Database",
                  args: { name: "name" },
                },
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
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
                },
                {
                  name: ["--yes", "-y"],
                  description:
                    "Do not prompt for confirmation when locking backup immutability",
                },
              ],
            },
            {
              name: "show",
              description:
                "Show short term retention for automated backups on a single database",
              options: [
                {
                  name: "--deleted-time",
                  description:
                    "If specified, shows retention days for a deleted database, instead of an existing database.Must match the deleted time of a deleted database on the source Managed Instance",
                  args: { name: "deleted-time" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: ["--managed-instance", "--mi"],
                  description: "Name of the Azure SQL Managed Instance",
                  args: { name: "managed-instance" },
                },
                {
                  name: ["--name", "-n"],
                  description: "The name of the Azure SQL Managed Database",
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
      name: "recoverable-midb",
      description: "Recoverable managed databases command group",
      subcommands: [
        {
          name: "list",
          description:
            "Get all recoverable managed databases for given instance name",
          options: [
            {
              name: ["--instance-name", "--mi"],
              description: "The name of the managed instance. Required",
              args: { name: "instance-name" },
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
          description: "Get recoverable managed database",
          options: [
            {
              name: ["--database-name", "-n"],
              description:
                "The id of recoverable database from geo-replicated instance",
              args: { name: "database-name" },
              isRequired: true,
            },
            {
              name: ["--instance-name", "--mi"],
              description: "The name of the managed instance. Required",
              args: { name: "instance-name" },
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
      name: "server",
      description: "Manage SQL servers",
      subcommands: [
        {
          name: "create",
          description: "Create a server",
          options: [
            {
              name: ["--name", "-n"],
              description:
                "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
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
              name: ["--admin-password", "-p"],
              description:
                "The administrator login password (required forserver creation)",
              args: { name: "admin-password" },
            },
            {
              name: ["--admin-user", "-u"],
              description:
                "Administrator username for the server. Oncecreated it cannot be changed",
              args: { name: "admin-user" },
            },
            {
              name: ["--assign-identity", "-i"],
              description:
                "Generate and assign an Azure Active Directory Identity for this server for use with key management services like Azure KeyVault",
            },
            changeReference,
            {
              name: "--enable-ad-only-auth",
              description:
                "Enable Azure Active Directory Only Authentication for this server",
            },
            {
              name: ["--enable-public-network", "-e"],
              description:
                "Set whether public network access to server is allowed or not. When false,only connections made through Private Links can reach this server",
              args: {
                name: "enable-public-network",
                suggestions: ["false", "true"],
                isOptional: true,
              },
            },
            {
              name: "--external-admin-name",
              description:
                "Display name of the Azure AD administrator user, group or application",
              args: { name: "external-admin-name" },
            },
            {
              name: "--external-admin-principal-type",
              description: "User, Group or Application",
              args: { name: "external-admin-principal-type" },
            },
            {
              name: "--external-admin-sid",
              description:
                "The unique ID of the Azure AD administrator. Object Id for User or Group, Client Id for Applications",
              args: { name: "external-admin-sid" },
            },
            {
              name: ["--federated-client-id", "--fid"],
              description:
                "The federated client id used in cross tenant CMK scenario",
              args: { name: "federated-client-id" },
            },
            {
              name: ["--identity-type", "-t"],
              description:
                "Type of Identity to be used. Possible values are SystemAsssigned,UserAssigned, SystemAssigned,UserAssigned and None",
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
              name: ["--key-id", "-k"],
              description: "The key vault URI for encryption",
              args: { name: "key-id" },
            },
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
            },
            {
              name: "--minimal-tls-version",
              description:
                "The minimal TLS version enforced by the sql server for inbound connections",
              args: {
                name: "minimal-tls-version",
                suggestions: ["1.0", "1.1", "1.2", "1.3"],
              },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: ["--primary-user-assigned-identity-id", "--pid"],
              description: "The ID of the primary user managed identity",
              args: { name: "primary-user-assigned-identity-id" },
            },
            {
              name: ["--restrict-outbound-network-access", "-r"],
              description:
                "Set whether outbound network access to server is restricted or not. When true,the outbound connections from the server will be restricted",
              args: {
                name: "restrict-outbound-network-access",
                suggestions: ["false", "true"],
                isOptional: true,
              },
            },
            {
              name: ["--soft-delete-retention-days", "--sdrd"],
              description:
                "Specify the number of days to retain soft deleted server (0-7). Set to 0 to disable soft delete. Set to 1-7 days to enable soft delete with the specified retention period. During the retention period, the server can be restored using az sql server restore",
              args: { name: "soft-delete-retention-days" },
            },
            {
              name: "--tags",
              description:
                "Space-separated tags: key[=value] [key[=value] ...]. Use '' to clear existing tags",
              args: { name: "tags", isOptional: true, isVariadic: true },
            },
            {
              name: ["--user-assigned-identity-id", "-a"],
              description:
                "Generate and assign an User Managed Identity(UMI) for this server",
              args: { name: "user-assigned-identity-id", isVariadic: true },
            },
          ],
        },
        {
          name: "delete",
          description: "Deletes a server",
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
              description:
                "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
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
          description: "List available servers",
          options: [
            {
              name: "--expand-ad-admin",
              description:
                "Expand the Active Directory Administrator for the server",
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
          name: "list-usages",
          description: "Gets server usages",
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
              description:
                "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
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
          name: "refresh-external-governance-status",
          description: "Refreshes external governance status",
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
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: ["--server", "-s"],
              description:
                "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
              args: { name: "server" },
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
          name: "restore",
          description: "Restore a deleted SQL server",
          options: [
            {
              name: ["--location", "-l"],
              description:
                "Location where the deleted server was originally located",
              args: { name: "location" },
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
              description: "Name of the deleted server to restore",
              args: { name: "name" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of the resource group where the server was originally located",
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
          description: "Gets a server",
          options: [
            {
              name: "--expand-ad-admin",
              description:
                "Expand the Active Directory Administrator for the server",
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids", isVariadic: true },
            },
            {
              name: ["--name", "-n"],
              description:
                "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
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
          description: "Update a server",
          options: [
            acquirePolicyToken,
            {
              name: "--add",
              description:
                "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
              args: { name: "add", isVariadic: true },
            },
            {
              name: ["--admin-password", "-p"],
              description: "The administrator login password",
              args: { name: "admin-password" },
            },
            {
              name: ["--assign_identity", "-i"],
              description:
                "Generate and assign an Azure Active Directory Identity for this server for use with key management services like Azure KeyVault",
            },
            changeReference,
            {
              name: ["--enable-public-network", "-e"],
              description:
                "Set whether public network access to server is allowed or not. When false,only connections made through Private Links can reach this server",
              args: {
                name: "enable-public-network",
                suggestions: ["false", "true"],
                isOptional: true,
              },
            },
            {
              name: ["--federated-client-id", "--fid"],
              description:
                "The federated client id used in cross tenant CMK scenario",
              args: { name: "federated-client-id" },
            },
            {
              name: "--force-string",
              description:
                "When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON",
            },
            {
              name: ["--identity-type", "-t"],
              description:
                "Type of Identity to be used. Possible values are SystemAsssigned,UserAssigned, SystemAssigned,UserAssigned and None",
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
              name: ["--key-id", "-k"],
              description: "The key vault URI for encryption",
              args: { name: "key-id" },
            },
            {
              name: "--minimal-tls-version",
              description:
                "The minimal TLS version enforced by the sql server for inbound connections",
              args: {
                name: "minimal-tls-version",
                suggestions: ["1.0", "1.1", "1.2", "1.3"],
              },
            },
            {
              name: ["--name", "-n"],
              description:
                "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
              args: { name: "name" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: ["--primary-user-assigned-identity-id", "--pid"],
              description: "The ID of the primary user managed identity",
              args: { name: "primary-user-assigned-identity-id" },
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
              name: ["--restrict-outbound-network-access", "-r"],
              description:
                "Set whether outbound network access to server is restricted or not. When true,the outbound connections from the server will be restricted",
              args: {
                name: "restrict-outbound-network-access",
                suggestions: ["false", "true"],
                isOptional: true,
              },
            },
            {
              name: ["--soft-delete-retention-days", "--sdrd"],
              description:
                "Specify the number of days to retain soft deleted server (0-7). Set to 0 to disable soft delete. Set to 1-7 days to enable soft delete with the specified retention period",
              args: { name: "soft-delete-retention-days" },
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
              name: ["--user-assigned-identity-id", "-a"],
              description:
                "Generate and assign an User Managed Identity(UMI) for this server",
              args: { name: "user-assigned-identity-id", isVariadic: true },
            },
          ],
        },
        {
          name: "wait",
          description:
            "Place the CLI in a waiting state until a condition of the SQL server is met",
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
              name: "--expand",
              description: "The child resources to include in the response",
              args: { name: "expand" },
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
              description:
                "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
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
          name: "ad-admin",
          description: "Manage a server's Active Directory administrator",
          subcommands: [
            {
              name: "create",
              description: "Create a new server Active Directory administrator",
              options: [
                {
                  name: ["--display-name", "-u"],
                  description:
                    "Display name of the Azure AD administrator user or group",
                  args: { name: "display-name" },
                  isRequired: true,
                },
                {
                  name: ["--object-id", "-i"],
                  description: "The unique ID of the Azure AD administrator",
                  args: { name: "object-id" },
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
                  name: ["--server-name", "--server", "-s"],
                  description:
                    "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
                  args: { name: "server-name" },
                  isRequired: true,
                },
                acquirePolicyToken,
                changeReference,
              ],
            },
            {
              name: "delete",
              description: "Sets a server's AD admin",
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
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--server-name", "--server", "-s"],
                  description:
                    "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
                  args: { name: "server-name" },
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
                "Gets a list of Azure Active Directory administrators in a server",
              options: [
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
                  name: ["--server-name", "--server", "-s"],
                  description:
                    "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
                  args: { name: "server-name" },
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
                "Update an existing server Active Directory administrator",
              options: [
                {
                  name: ["--display-name", "-u"],
                  description:
                    "Display name of the Azure AD administrator user or group",
                  args: { name: "display-name" },
                  isRequired: true,
                },
                {
                  name: ["--object-id", "-i"],
                  description: "The unique ID of the Azure AD administrator",
                  args: { name: "object-id" },
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
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
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
                  name: ["--server-name", "--server", "-s"],
                  description:
                    "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
                  args: { name: "server-name" },
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
          name: "ad-only-auth",
          description:
            "Manage Azure Active Directory only Authentication settings for this Server",
          subcommands: [
            {
              name: "disable",
              description:
                "Disable Azure Active Directory only Authentication for this Server",
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
                  description:
                    "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
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
              name: "enable",
              description:
                "Enable Azure Active Directory only Authentication for this Server",
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
                  description:
                    "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
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
              name: "get",
              description:
                "Get a specific Azure Active Directory only Authentication property",
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
                  description:
                    "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
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
          name: "advanced-threat-protection-setting",
          description: "Manage a server's advanced threat protection setting",
          subcommands: [
            {
              name: "show",
              description: "Gets an advanced threat protection setting",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
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
                "Update a server's advanced threat protection setting",
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
                  description:
                    "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
                  args: { name: "name" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
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
                  name: "--state",
                  description:
                    "State of the advanced threat protection setting",
                  args: { name: "state" },
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
          name: "audit-policy",
          description: "Manage a server's auditing policy",
          subcommands: [
            {
              name: "show",
              description: "Show server audit policy",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
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
              description: "Update a server's auditing policy",
              options: [
                acquirePolicyToken,
                {
                  name: "--actions",
                  description:
                    "List of actions and action groups to audit.These are space seperated values.Example: --actions FAILED_DATABASE_AUTHENTICATION_GROUP BATCH_COMPLETED_GROUP",
                  args: { name: "actions", isVariadic: true },
                },
                {
                  name: "--add",
                  description:
                    "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
                  args: { name: "add", isVariadic: true },
                },
                {
                  name: ["--blob-storage-target-state", "--bsts"],
                  description:
                    "Indicate whether blob storage is a destination for audit records",
                  args: {
                    name: "blob-storage-target-state",
                    suggestions: ["Disabled", "Enabled"],
                  },
                },
                changeReference,
                {
                  name: ["--event-hub", "--eh"],
                  description:
                    "The name of the event hub. If none is specified when providing event_hub_authorization_rule_id, the default event hub will be selected",
                  args: { name: "event-hub" },
                },
                {
                  name: ["--event-hub-authorization-rule-id", "--ehari"],
                  description:
                    "The resource Id for the event hub authorization rule",
                  args: { name: "event-hub-authorization-rule-id" },
                },
                {
                  name: ["--event-hub-target-state", "--ehts"],
                  description:
                    "Indicate whether event hub is a destination for audit records",
                  args: {
                    name: "event-hub-target-state",
                    suggestions: ["Disabled", "Enabled"],
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
                  name: ["--log-analytics-target-state", "--lats"],
                  description:
                    "Indicate whether log analytics is a destination for audit records",
                  args: {
                    name: "log-analytics-target-state",
                    suggestions: ["Disabled", "Enabled"],
                  },
                },
                {
                  name: ["--log-analytics-workspace-resource-id", "--lawri"],
                  description:
                    "The workspace ID (resource ID of a Log Analytics workspace) for a Log Analytics workspace to which you would like to send Audit Logs",
                  args: { name: "log-analytics-workspace-resource-id" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
                  args: { name: "name" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
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
                  name: "--retention-days",
                  description: "The number of days to retain audit logs",
                  args: { name: "retention-days" },
                },
                {
                  name: "--set",
                  description:
                    "Update an object by specifying a property path and value to set. Example: --set property1.property2=<value>",
                  args: { name: "set", isVariadic: true },
                },
                {
                  name: "--state",
                  description: "Auditing policy state",
                  args: { name: "state", suggestions: ["Disabled", "Enabled"] },
                },
                {
                  name: "--storage-account",
                  description: "Name of the storage account",
                  args: { name: "storage-account" },
                },
                {
                  name: "--storage-endpoint",
                  description: "The storage account endpoint",
                  args: { name: "storage-endpoint" },
                },
                {
                  name: "--storage-key",
                  description: "Access key for the storage account",
                  args: { name: "storage-key" },
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
                "Place the CLI in a waiting state until a condition of the server's audit policy is met",
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
                  description:
                    "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
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
          name: "conn-policy",
          description: "Manage a server's connection policy",
          subcommands: [
            {
              name: "show",
              description: "Gets a server's secure connection policy",
              options: [
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
                  name: ["--server", "-s"],
                  description:
                    "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
                  args: { name: "server" },
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
              description: "Updates a server's secure connection policy",
              options: [
                {
                  name: ["--connection-type", "-t"],
                  description:
                    "The required parameters for updating a secure connection policy. The value is default",
                  args: {
                    name: "connection-type",
                    suggestions: ["Default", "Proxy", "Redirect"],
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
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--server", "-s"],
                  description:
                    "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
                  args: { name: "server" },
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
          name: "deleted-server",
          description: "Gets details of deleted SQL servers",
          subcommands: [
            {
              name: "list",
              description:
                "List all deleted SQL servers in a location or subscription",
              options: [
                {
                  name: ["--location", "-l"],
                  description:
                    "Location where the deleted servers were originally located. Omit to list deleted servers in all locations",
                  args: { name: "location" },
                },
              ],
            },
            {
              name: "show",
              description:
                "Get the details of a deleted SQL server in a specific location",
              options: [
                {
                  name: ["--location", "-l"],
                  description:
                    "Location where the deleted server was originally located",
                  args: { name: "location" },
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
                  description: "Name of the deleted server",
                  args: { name: "name" },
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
          name: "dns-alias",
          description: "Manage a server's DNS aliases",
          subcommands: [
            {
              name: "create",
              description: "Creates a server DNS alias",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "Name of the DNS alias",
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
                  name: ["--server", "-s"],
                  description:
                    "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
                  args: { name: "server" },
                  isRequired: true,
                },
                acquirePolicyToken,
                changeReference,
              ],
            },
            {
              name: "delete",
              description: "Deletes the server DNS alias with the given name",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "Name of the DNS alias",
                  args: { name: "name" },
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
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--server", "-s"],
                  description:
                    "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
                  args: { name: "server" },
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
              description: "Gets a list of server DNS aliases for a server",
              options: [
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
                  name: ["--server", "-s"],
                  description:
                    "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
                  args: { name: "server" },
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
              name: "set",
              description: "Sets a server to which DNS alias should point",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "Name of the DNS alias",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: "--original-server",
                  description:
                    "The name of the server to which alias is currently pointing",
                  args: { name: "original-server" },
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
                  name: "--original-resource-group",
                  description: "Name of the original resource group",
                  args: { name: "original-resource-group" },
                },
                {
                  name: "--original-subscription-id",
                  description: "ID of the original subscription",
                  args: { name: "original-subscription-id" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--server", "-s"],
                  description:
                    "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
                  args: { name: "server" },
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
              description: "Gets a server DNS alias",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "Name of the DNS alias",
                  args: { name: "name" },
                  isRequired: true,
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
                  name: ["--server", "-s"],
                  description:
                    "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
                  args: { name: "server" },
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
          name: "firewall-rule",
          description: "Manage a server's firewall rules",
          subcommands: [
            {
              name: "create",
              description: "Create a firewall rule",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "The name of the firewall rule",
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
                  name: ["--server", "-s"],
                  description:
                    "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
                  args: { name: "server" },
                  isRequired: true,
                },
                acquirePolicyToken,
                changeReference,
                {
                  name: "--end-ip-address",
                  description:
                    "The end IP address of the firewall rule. Must be IPv4 format. Use value '0.0.0.0' to represent all Azure-internal IP addresses",
                  args: { name: "end-ip-address" },
                },
                {
                  name: "--start-ip-address",
                  description:
                    "The start IP address of the firewall rule. Must be IPv4 format. Use value '0.0.0.0' to represent all Azure-internal IP addresses",
                  args: { name: "start-ip-address" },
                },
              ],
            },
            {
              name: "delete",
              description: "Deletes a firewall rule",
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
                  description: "The name of the firewall rule",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--server", "-s"],
                  description:
                    "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
                  args: { name: "server" },
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
              description: "List a server's firewall rules",
              options: [
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
                  name: ["--server", "-s"],
                  description:
                    "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
                  args: { name: "server" },
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
              description: "Shows the details for a firewall rule",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: ["--name", "-n"],
                  description: "The name of the firewall rule",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--server", "-s"],
                  description:
                    "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
                  args: { name: "server" },
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
              description: "Update a firewall rule",
              options: [
                acquirePolicyToken,
                changeReference,
                {
                  name: "--end-ip-address",
                  description:
                    "The end IP address of the firewall rule. Must be IPv4 format. Use value '0.0.0.0' to represent all Azure-internal IP addresses",
                  args: { name: "end-ip-address" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: ["--name", "-n"],
                  description: "The name of the firewall rule",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--server", "-s"],
                  description:
                    "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
                  args: { name: "server" },
                },
                {
                  name: "--start-ip-address",
                  description:
                    "The start IP address of the firewall rule. Must be IPv4 format. Use value '0.0.0.0' to represent all Azure-internal IP addresses",
                  args: { name: "start-ip-address" },
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
          name: "ipv6-firewall-rule",
          description: "Manage a server's ipv6 firewall rules",
          subcommands: [
            {
              name: "create",
              description: "Create an ipv6 firewall rule",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "The name of the IPv6 firewall rule",
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
                  name: ["--server", "-s"],
                  description:
                    "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
                  args: { name: "server" },
                  isRequired: true,
                },
                acquirePolicyToken,
                changeReference,
                {
                  name: "--end-ipv6-address",
                  description:
                    "The end IPv6 address of the firewall rule. Must be IPv6 format",
                  args: { name: "end-ipv6-address" },
                },
                {
                  name: "--start-ipv6-address",
                  description:
                    "The start IPv6 address of the firewall rule. Must be IPv6 format",
                  args: { name: "start-ipv6-address" },
                },
              ],
            },
            {
              name: "delete",
              description: "Deletes an IPv6 firewall rule",
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
                  description: "The name of the IPv6 firewall rule",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--server", "-s"],
                  description:
                    "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
                  args: { name: "server" },
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
              description: "List a server's ipv6 firewall rules",
              options: [
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
                  name: ["--server", "-s"],
                  description:
                    "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
                  args: { name: "server" },
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
              description: "Shows the details for an ipv6 firewall rule",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: ["--name", "-n"],
                  description: "The name of the IPv6 firewall rule",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--server", "-s"],
                  description:
                    "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
                  args: { name: "server" },
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
              description: "Update an ipv6 firewall rule",
              options: [
                acquirePolicyToken,
                changeReference,
                {
                  name: "--end-ipv6-address",
                  description:
                    "The end IPv6 address of the firewall rule. Must be IPv6 format",
                  args: { name: "end-ipv6-address" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: ["--name", "-n"],
                  description: "The name of the IPv6 firewall rule",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--server", "-s"],
                  description:
                    "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
                  args: { name: "server" },
                },
                {
                  name: "--start-ipv6-address",
                  description:
                    "The start IPv6 address of the firewall rule. Must be IPv6 format",
                  args: { name: "start-ipv6-address" },
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
          description: "Manage a server's keys",
          subcommands: [
            {
              name: "create",
              description: "Creates a server key",
              options: [
                {
                  name: ["--kid", "-k"],
                  description:
                    'The Azure Key Vault key identifier of the server key. An example key identifier is "https://YourVaultName.vault.azure.net/keys/YourKeyName/01234567890123456789012345678901"',
                  args: { name: "kid" },
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
                  name: ["--server", "-s"],
                  description:
                    "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
                  args: { name: "server" },
                  isRequired: true,
                },
                acquirePolicyToken,
                changeReference,
              ],
            },
            {
              name: "delete",
              description: "Deletes a server key",
              options: [
                {
                  name: ["--kid", "-k"],
                  description:
                    'The Azure Key Vault key identifier of the server key. An example key identifier is "https://YourVaultName.vault.azure.net/keys/YourKeyName/01234567890123456789012345678901"',
                  args: { name: "kid" },
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
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--server", "-s"],
                  description:
                    "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
                  args: { name: "server" },
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
              description: "Gets a list of server keys",
              options: [
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
                  name: ["--server", "-s"],
                  description:
                    "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
                  args: { name: "server" },
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
              description: "Shows a server key",
              options: [
                {
                  name: ["--kid", "-k"],
                  description:
                    'The Azure Key Vault key identifier of the server key. An example key identifier is "https://YourVaultName.vault.azure.net/keys/YourKeyName/01234567890123456789012345678901"',
                  args: { name: "kid" },
                  isRequired: true,
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
                  name: ["--server", "-s"],
                  description:
                    "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
                  args: { name: "server" },
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
          name: "ms-support",
          description: "Manage a server's Microsoft support operations",
          subcommands: [
            {
              name: "audit-policy",
              description:
                "Manage a server's Microsoft support operations auditing policy",
              subcommands: [
                {
                  name: "show",
                  description:
                    "Show server Microsoft support operations audit policy",
                  options: [
                    {
                      name: "--ids",
                      description:
                        "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                      args: { name: "ids", isVariadic: true },
                    },
                    {
                      name: ["--name", "-n"],
                      description:
                        "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
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
                    "Update a server's Microsoft support operations auditing policy",
                  options: [
                    acquirePolicyToken,
                    {
                      name: "--add",
                      description:
                        "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
                      args: { name: "add", isVariadic: true },
                    },
                    {
                      name: ["--blob-storage-target-state", "--bsts"],
                      description:
                        "Indicate whether blob storage is a destination for audit records",
                      args: {
                        name: "blob-storage-target-state",
                        suggestions: ["Disabled", "Enabled"],
                      },
                    },
                    changeReference,
                    {
                      name: ["--event-hub", "--eh"],
                      description:
                        "The name of the event hub. If none is specified when providing event_hub_authorization_rule_id, the default event hub will be selected",
                      args: { name: "event-hub" },
                    },
                    {
                      name: ["--event-hub-authorization-rule-id", "--ehari"],
                      description:
                        "The resource Id for the event hub authorization rule",
                      args: { name: "event-hub-authorization-rule-id" },
                    },
                    {
                      name: ["--event-hub-target-state", "--ehts"],
                      description:
                        "Indicate whether event hub is a destination for audit records",
                      args: {
                        name: "event-hub-target-state",
                        suggestions: ["Disabled", "Enabled"],
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
                      name: ["--log-analytics-target-state", "--lats"],
                      description:
                        "Indicate whether log analytics is a destination for audit records",
                      args: {
                        name: "log-analytics-target-state",
                        suggestions: ["Disabled", "Enabled"],
                      },
                    },
                    {
                      name: [
                        "--log-analytics-workspace-resource-id",
                        "--lawri",
                      ],
                      description:
                        "The workspace ID (resource ID of a Log Analytics workspace) for a Log Analytics workspace to which you would like to send Audit Logs",
                      args: { name: "log-analytics-workspace-resource-id" },
                    },
                    {
                      name: ["--name", "-n"],
                      description:
                        "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
                      args: { name: "name" },
                    },
                    {
                      name: "--no-wait",
                      description:
                        "Do not wait for the long-running operation to finish",
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
                      name: "--state",
                      description: "Auditing policy state",
                      args: {
                        name: "state",
                        suggestions: ["Disabled", "Enabled"],
                      },
                    },
                    {
                      name: "--storage-account",
                      description: "Name of the storage account",
                      args: { name: "storage-account" },
                    },
                    {
                      name: "--storage-endpoint",
                      description: "The storage account endpoint",
                      args: { name: "storage-endpoint" },
                    },
                    {
                      name: "--storage-key",
                      description: "Access key for the storage account",
                      args: { name: "storage-key" },
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
                    "Place the CLI in a waiting state until a condition of the server's Microsoft support operations audit policy is met",
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
                      description:
                        "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
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
          name: "outbound-firewall-rule",
          description: "Manage a server's outbound firewall rules",
          subcommands: [
            {
              name: "create",
              description: "Create a new outbound firewall rule",
              options: [
                {
                  name: ["--outbound-rule-fqdn", "-n"],
                  description:
                    "The allowed FQDN for the outbound firewall rule",
                  args: { name: "outbound-rule-fqdn" },
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
                  name: ["--server", "-s"],
                  description:
                    "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
                  args: { name: "server" },
                  isRequired: true,
                },
                acquirePolicyToken,
                changeReference,
              ],
            },
            {
              name: "delete",
              description: "Delete the outbound firewall rule",
              options: [
                {
                  name: ["--outbound-rule-fqdn", "-n"],
                  description:
                    "The allowed FQDN for the outbound firewall rule",
                  args: { name: "outbound-rule-fqdn" },
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
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--server", "-s"],
                  description:
                    "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
                  args: { name: "server" },
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
              description: "List a server's outbound firewall rules",
              options: [
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
                  name: ["--server", "-s"],
                  description:
                    "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
                  args: { name: "server" },
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
              description: "Show the details for an outbound firewall rule",
              options: [
                {
                  name: ["--outbound-rule-fqdn", "-n"],
                  description:
                    "The allowed FQDN for the outbound firewall rule",
                  args: { name: "outbound-rule-fqdn" },
                  isRequired: true,
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
                  name: ["--server", "-s"],
                  description:
                    "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
                  args: { name: "server" },
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
          name: "tde-key",
          description: "Manage a server's encryption protector",
          subcommands: [
            {
              name: "revalidate",
              description: "Revalidate a server encryption protector",
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
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--server", "-s"],
                  description:
                    "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
                  args: { name: "server" },
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
              name: "set",
              description:
                "Sets the server's encryption protector. Ensure to create the key first https://learn.microsoft.com/en-us/cli/azure/sql/server/key?view=azure-cli-latest#az-sql-server-key-create",
              options: [
                {
                  name: ["--server-key-type", "-t"],
                  description: "The type of the server key",
                  args: {
                    name: "server-key-type",
                    suggestions: ["AzureKeyVault", "ServiceManaged"],
                  },
                  isRequired: true,
                },
                acquirePolicyToken,
                {
                  name: "--auto-rotation-enabled",
                  description:
                    "The key auto rotation opt in status. Can be either true or false",
                  args: {
                    name: "auto-rotation-enabled",
                    suggestions: ["false", "true"],
                    isOptional: true,
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
                  name: ["--kid", "-k"],
                  description:
                    'The Azure Key Vault key identifier of the server key. An example key identifier is "https://YourVaultName.vault.azure.net/keys/YourKeyName/01234567890123456789012345678901"',
                  args: { name: "kid" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--server", "-s"],
                  description:
                    "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
                  args: { name: "server" },
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
              description: "Gets a server encryption protector",
              options: [
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
                  name: ["--server", "-s"],
                  description:
                    "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
                  args: { name: "server" },
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
          name: "vnet-rule",
          description: "Manage a server's virtual network rules",
          subcommands: [
            {
              name: "create",
              description:
                "Create a virtual network rule to allows access to an Azure SQL Server",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "The name of the virtual network rule",
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
                  name: ["--server", "-s"],
                  description:
                    "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
                  args: { name: "server" },
                  isRequired: true,
                },
                {
                  name: "--subnet",
                  description:
                    "Name or ID of the subnet that allows access to an Azure Sql Server. If subnet name is provided, --vnet-name must be provided",
                  args: { name: "subnet" },
                  isRequired: true,
                },
                acquirePolicyToken,
                changeReference,
                {
                  name: ["--ignore-missing-endpoint", "-i"],
                  description:
                    "Create firewall rule before the virtual network has vnet service endpoint enabled",
                  args: {
                    name: "ignore-missing-endpoint",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: "--vnet-name",
                  description: "The virtual network name",
                  args: { name: "vnet-name" },
                },
              ],
            },
            {
              name: "delete",
              description:
                "Deletes the virtual network rule with the given name",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "The name of the virtual network rule",
                  args: { name: "name" },
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
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--server", "-s"],
                  description:
                    "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
                  args: { name: "server" },
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
              description: "Gets a list of virtual network rules in a server",
              options: [
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
                  name: ["--server", "-s"],
                  description:
                    "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
                  args: { name: "server" },
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
              description: "Gets a virtual network rule",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "The name of the virtual network rule",
                  args: { name: "name" },
                  isRequired: true,
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
                  name: ["--server", "-s"],
                  description:
                    "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
                  args: { name: "server" },
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
              description: "Update a virtual network rule",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "The name of the virtual network rule",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: "--subnet",
                  description:
                    "Name or ID of the subnet that allows access to an Azure Sql Server. If subnet name is provided, --vnet-name must be provided",
                  args: { name: "subnet" },
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
                  name: ["--ignore-missing-endpoint", "-i"],
                  description:
                    "Create firewall rule before the virtual network has vnet service endpoint enabled",
                  args: {
                    name: "ignore-missing-endpoint",
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
                  name: ["--server", "-s"],
                  description:
                    "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
                  args: { name: "server" },
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
      name: "stg",
      description: "Manage Server Trust Groups",
      subcommands: [
        {
          name: "create",
          description: "Create a Server Trust Group",
          options: [
            {
              name: ["--group-member", "-m"],
              description:
                "Managed Instance that is to be a member of the group. Specify resource group, subscription id and the name of the instance",
              args: { name: "group-member", isVariadic: true },
              isRequired: true,
            },
            {
              name: ["--location", "-l"],
              description: "The location name of the Server Trust Group",
              args: { name: "location" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "The name of the Server Trust Group",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description: "The resource group name",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--trust-scope",
              description: "The trust scope of the Server Trust Group",
              args: { name: "trust-scope", isVariadic: true },
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
          name: "delete",
          description: "Delete a Server Trust Group",
          options: [
            {
              name: ["--location", "-l"],
              description: "The location of the Server Trust Group",
              args: { name: "location" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "The name of the Server Trust Group",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description: "The resource group name",
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
          description: "Retrieve a list of Server Trust Groups",
          options: [
            {
              name: ["--resource-group", "-g"],
              description: "The resource group name",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--instance-name",
              description: "Managed Instance name",
              args: { name: "instance-name" },
            },
            {
              name: ["--location", "-l"],
              description: "The location of the Server Trust Group",
              args: { name: "location" },
            },
          ],
        },
        {
          name: "show",
          description: "Retrieve a Server Trust Group",
          options: [
            {
              name: ["--location", "-l"],
              description: "The location of the Server Trust Group",
              args: { name: "location" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "The name of the Server Trust Group",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description: "The resource group name",
              args: { name: "resource-group" },
              isRequired: true,
            },
          ],
        },
      ],
    },
    {
      name: "virtual-cluster",
      description: "Manage SQL virtual clusters",
      subcommands: [
        {
          name: "delete",
          description: "Delete a virtual cluster",
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
              description: "The virtual cluster name",
              args: { name: "name" },
            },
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
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
          ],
        },
        {
          name: "list",
          description: "List available virtual clusters",
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
          description: "Get the details for a virtual cluster",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids", isVariadic: true },
            },
            {
              name: ["--name", "-n"],
              description: "The virtual cluster name",
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
      name: "vm",
      description: "Manage SQL virtual machines",
      subcommands: [
        {
          name: "add-to-group",
          description:
            "Adds SQL virtual machine to a SQL virtual machine group",
          options: [
            {
              name: ["--sqlvm-group", "-r"],
              description:
                "Name or resource ID of the SQL virtual machine group. If only name provided, SQL virtual machine group should be in the same resource group of the SQL virtual machine",
              args: { name: "sqlvm-group" },
              isRequired: true,
            },
            acquirePolicyToken,
            {
              name: ["--bootstrap-acc-pwd", "-b"],
              description:
                "Password for the cluster bootstrap account if provided in the SQL virtual machine group",
              args: { name: "bootstrap-acc-pwd" },
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
              description: "Name of the SQL virtual machine",
              args: { name: "name" },
            },
            {
              name: ["--operator-acc-pwd", "-p"],
              description:
                "Password for the cluster operator account provided in the SQL virtual machine group",
              args: { name: "operator-acc-pwd" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: ["--service-acc-pwd", "-s"],
              description:
                "Password for the SQL service account provided in the SQL virtual machine group",
              args: { name: "service-acc-pwd" },
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
          name: "create",
          description: "Creates a SQL virtual machine",
          options: [
            {
              name: ["--name", "-n"],
              description:
                "Name of the SQL virtual machine. The name of the new SQL virtual machine must be equal to the underlying virtual machine created from SQL marketplace image",
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
              name: "--backup-pwd",
              description: "Password for encryption on backup",
              args: { name: "backup-pwd" },
            },
            {
              name: "--backup-schedule-type",
              description: "Backup schedule type",
              args: {
                name: "backup-schedule-type",
                suggestions: ["Automated", "Manual"],
              },
            },
            {
              name: "--backup-system-dbs",
              description: "Include system databases on backup",
              args: {
                name: "backup-system-dbs",
                suggestions: ["false", "true"],
                isOptional: true,
              },
            },
            changeReference,
            {
              name: "--connectivity-type",
              description: "SQL Server connectivity option",
              args: {
                name: "connectivity-type",
                suggestions: ["LOCAL", "PRIVATE", "PUBLIC"],
              },
            },
            {
              name: "--credential-name",
              description: "Credential name",
              args: { name: "credential-name" },
            },
            {
              name: "--day-of-week",
              description: "Day of week to apply the patch on",
              args: {
                name: "day-of-week",
                suggestions: [
                  "Everyday",
                  "Friday",
                  "Monday",
                  "Saturday",
                  "Sunday",
                  "Thursday",
                  "Tuesday",
                  "Wednesday",
                ],
              },
            },
            {
              name: "--enable-auto-backup",
              description:
                "Enable or disable autobackup on SQL virtual machine. If any backup settings provided, parameter automatically sets to true",
              args: {
                name: "enable-auto-backup",
                suggestions: ["false", "true"],
                isOptional: true,
              },
            },
            {
              name: "--enable-auto-patching",
              description:
                "Enable or disable autopatching on SQL virtual machine. If any autopatching settings provided, parameter automatically sets to true",
              args: {
                name: "enable-auto-patching",
                suggestions: ["false", "true"],
                isOptional: true,
              },
            },
            {
              name: "--enable-encryption",
              description:
                "Enable encryption for backup on SQL virtual machine",
              args: {
                name: "enable-encryption",
                suggestions: ["false", "true"],
                isOptional: true,
              },
            },
            {
              name: "--enable-key-vault-credential",
              description:
                "Enable or disable key vault credential setting. If any key vault settings provided, parameter automatically sets to true",
              args: {
                name: "enable-key-vault-credential",
                suggestions: ["false", "true"],
                isOptional: true,
              },
            },
            {
              name: "--enable-r-services",
              description: "Enable or disable R services (SQL 2016 onwards)",
              args: {
                name: "enable-r-services",
                suggestions: ["false", "true"],
                isOptional: true,
              },
            },
            {
              name: "--full-backup-duration",
              description:
                "Duration of the time window of a given day during which full backups can take place. 1-23 hours",
              args: { name: "full-backup-duration" },
            },
            {
              name: "--full-backup-frequency",
              description:
                "Frequency of full backups. In both cases, full backups begin during the next scheduled time window",
              args: {
                name: "full-backup-frequency",
                suggestions: ["Daily", "Weekly"],
              },
            },
            {
              name: "--full-backup-start-hour",
              description:
                "Start time of a given day during which full backups can take place. 0-23 hours",
              args: { name: "full-backup-start-hour" },
            },
            {
              name: "--image-offer",
              description:
                "SQL image offer. Examples include SQL2008R2-WS2008, SQL2008-WS2008",
              args: { name: "image-offer" },
            },
            {
              name: "--image-sku",
              description: "SQL image sku",
              args: {
                name: "image-sku",
                suggestions: [
                  "Developer",
                  "Enterprise",
                  "Express",
                  "Standard",
                  "Web",
                ],
              },
            },
            {
              name: "--key-vault",
              description: "Azure Key Vault url",
              args: { name: "key-vault" },
            },
            {
              name: "--least-privilege-mode",
              description:
                "SQL IaaS Agent Least Privilege Mode. Updates from sysadmin to specific permissions used per feature",
              args: {
                name: "least-privilege-mode",
                suggestions: ["Enabled", "NotSet"],
              },
            },
            {
              name: ["--license-type", "-i"],
              description: "SQL Server license type",
              args: {
                name: "license-type",
                suggestions: ["AHUB", "DR", "PAYG"],
              },
            },
            {
              name: ["--location", "-l"],
              description:
                "Location. If not provided, virtual machine should be in the same region of resource group.You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
            },
            {
              name: "--log-backup-frequency",
              description: "Frequency of log backups. 5-60 minutes",
              args: { name: "log-backup-frequency" },
            },
            {
              name: "--maintenance-window-duration",
              description: "Duration of patching. 30-180 minutes",
              args: { name: "maintenance-window-duration" },
            },
            {
              name: "--maintenance-window-start-hour",
              description:
                "Hour of the day when patching is initiated. Local VM time 0-23 hours",
              args: { name: "maintenance-window-start-hour" },
            },
            {
              name: "--port",
              description: "SQL Server port",
              args: { name: "port" },
            },
            {
              name: "--retention-period",
              description: "Retention period of backup. 1-30 days",
              args: { name: "retention-period" },
            },
            {
              name: "--sa-key",
              description: "Storage account key where backup will be taken to",
              args: { name: "sa-key" },
            },
            {
              name: "--sp-name",
              description: "Service principal name to access key vault",
              args: { name: "sp-name" },
            },
            {
              name: "--sp-secret",
              description: "Service principal name secret to access key vault",
              args: { name: "sp-secret" },
            },
            {
              name: "--sql-auth-update-pwd",
              description: "SQL Server sysadmin login password",
              args: { name: "sql-auth-update-pwd" },
            },
            {
              name: "--sql-auth-update-username",
              description: "SQL Server sysadmin login to create",
              args: { name: "sql-auth-update-username" },
            },
            {
              name: "--sql-mgmt-type",
              description:
                "Argument 'sql_management_mode' has been deprecated and will be removed in a future release. SQL Server management type. If NoAgent selected, please provide --image-sku and --offer-type",
              args: {
                name: "sql-mgmt-type",
                suggestions: ["Full", "LightWeight", "NoAgent"],
              },
            },
            {
              name: "--sql-workload-type",
              description: "SQL Server workload type",
              args: {
                name: "sql-workload-type",
                suggestions: ["DW", "GENERAL", "OLTP"],
              },
            },
            {
              name: "--storage-account",
              description: "Storage account url where backup will be taken to",
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
          name: "delete",
          description: "Deletes a SQL virtual machine",
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
              description: "Name of the SQL virtual machine",
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
          name: "enable-azure-ad-auth",
          description:
            "Enable Azure AD authentication of a SQL virtual machine",
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
              name: "--msi-client-id",
              description: "Virutal Machine Managed Identity Client ID",
              args: { name: "msi-client-id" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the SQL virtual machine",
              args: { name: "name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--skip-client-validation",
              description:
                "Skip client side Azure AD authentication validation, the server side validation will still happen",
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
            "Lists all SQL virtual machines in a resource group or subscription",
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
          name: "remove-from-group",
          description:
            "Remove SQL virtual machine from its current SQL virtual machine group",
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
              description: "Name of the SQL virtual machine",
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
          description: "Gets a SQL virtual machine",
          options: [
            {
              name: "--expand",
              description:
                "Get the SQLIaaSExtension configuration settings. To view all settings, use *. To select only a few, the settings must be space-separated",
              args: {
                name: "expand",
                suggestions: [
                  "*",
                  "AssessmentSettings",
                  "AutoBackupSettings",
                  "AutoPatchingSettings",
                  "KeyVaultCredentialSettings",
                  "ServerConfigurationsManagementSettings",
                ],
                isVariadic: true,
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
              description: "Name of the SQL virtual machine",
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
          name: "start-assessment",
          description:
            "Starts SQL best practice assessment on SQL virtual machine",
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
              description: "Name of the SQL virtual machine",
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
          description: "Updates the properties of a SQL virtual machine",
          options: [
            acquirePolicyToken,
            {
              name: "--add",
              description:
                "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
              args: { name: "add", isVariadic: true },
            },
            {
              name: "--agent-rg",
              description:
                "Resource group containing the AMA resources DCE and DCR",
              args: { name: "agent-rg" },
            },
            {
              name: ["--assessment-day-of-week", "--am-day"],
              description: "Day of the week to run assessment",
              args: {
                name: "assessment-day-of-week",
                suggestions: [
                  "Friday",
                  "Monday",
                  "Saturday",
                  "Sunday",
                  "Thursday",
                  "Tuesday",
                  "Wednesday",
                ],
              },
            },
            {
              name: ["--assessment-monthly-occurrence", "--am-month-occ"],
              description:
                "Occurrence of the DayOfWeek day within a month to schedule assessment. Supports values 1,2,3,4 and -1. Use -1 for last DayOfWeek day of the month (for example - last Tuesday of the month)",
              args: {
                name: "assessment-monthly-occurrence",
                suggestions: ["-1", "1", "2", "3", "4"],
              },
            },
            {
              name: ["--enable-assessment-schedule", "--am-schedule"],
              description:
                "Enable or disable assessment Schedule. If any assessment schedule settings provided, parameter automatically sets to true",
              args: {
                name: "enable-assessment-schedule",
                suggestions: ["false", "true"],
                isOptional: true,
              },
            },
            {
              name: ["--assessment-start-time-local", "--am-time"],
              description:
                "Time of the day in HH:mm format. Examples include 17:30, 05:13",
              args: { name: "assessment-start-time-local" },
            },
            {
              name: ["--assessment-weekly-interval", "--am-week-int"],
              description:
                "Number of weeks to schedule between 2 assessment runs. Supports value from 1-6",
              args: {
                name: "assessment-weekly-interval",
                suggestions: ["1", "2", "3", "4", "5", "6"],
              },
            },
            {
              name: "--backup-pwd",
              description: "Password for encryption on backup",
              args: { name: "backup-pwd" },
            },
            {
              name: "--backup-schedule-type",
              description: "Backup schedule type",
              args: {
                name: "backup-schedule-type",
                suggestions: ["Automated", "Manual"],
              },
            },
            {
              name: "--backup-system-dbs",
              description: "Include system databases on backup",
              args: {
                name: "backup-system-dbs",
                suggestions: ["false", "true"],
                isOptional: true,
              },
            },
            changeReference,
            {
              name: "--connectivity-type",
              description: "SQL Server connectivity option",
              args: {
                name: "connectivity-type",
                suggestions: ["LOCAL", "PRIVATE", "PUBLIC"],
              },
            },
            {
              name: "--credential-name",
              description: "Credential name",
              args: { name: "credential-name" },
            },
            {
              name: "--day-of-week",
              description: "Day of week to apply the patch on",
              args: {
                name: "day-of-week",
                suggestions: [
                  "Everyday",
                  "Friday",
                  "Monday",
                  "Saturday",
                  "Sunday",
                  "Thursday",
                  "Tuesday",
                  "Wednesday",
                ],
              },
            },
            {
              name: "--enable-assessment",
              description:
                "Enable or disable assessment feature. If any assessment settings provided, parameter automatically sets to true",
              args: {
                name: "enable-assessment",
                suggestions: ["false", "true"],
                isOptional: true,
              },
            },
            {
              name: "--enable-auto-backup",
              description:
                "Enable or disable autobackup on SQL virtual machine. If any backup settings provided, parameter automatically sets to true",
              args: {
                name: "enable-auto-backup",
                suggestions: ["false", "true"],
                isOptional: true,
              },
            },
            {
              name: "--enable-auto-patching",
              description:
                "Enable or disable autopatching on SQL virtual machine. If any autopatching settings provided, parameter automatically sets to true",
              args: {
                name: "enable-auto-patching",
                suggestions: ["false", "true"],
                isOptional: true,
              },
            },
            {
              name: "--enable-encryption",
              description:
                "Enable encryption for backup on SQL virtual machine",
              args: {
                name: "enable-encryption",
                suggestions: ["false", "true"],
                isOptional: true,
              },
            },
            {
              name: "--enable-key-vault-credential",
              description:
                "Enable or disable key vault credential setting. If any key vault settings provided, parameter automatically sets to true",
              args: {
                name: "enable-key-vault-credential",
                suggestions: ["false", "true"],
                isOptional: true,
              },
            },
            {
              name: "--enable-r-services",
              description: "Enable or disable R services (SQL 2016 onwards)",
              args: {
                name: "enable-r-services",
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
              name: "--full-backup-duration",
              description:
                "Duration of the time window of a given day during which full backups can take place. 1-23 hours",
              args: { name: "full-backup-duration" },
            },
            {
              name: "--full-backup-frequency",
              description:
                "Frequency of full backups. In both cases, full backups begin during the next scheduled time window",
              args: {
                name: "full-backup-frequency",
                suggestions: ["Daily", "Weekly"],
              },
            },
            {
              name: "--full-backup-start-hour",
              description:
                "Start time of a given day during which full backups can take place. 0-23 hours",
              args: { name: "full-backup-start-hour" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids", isVariadic: true },
            },
            {
              name: "--image-sku",
              description: "SQL image sku",
              args: {
                name: "image-sku",
                suggestions: [
                  "Developer",
                  "Enterprise",
                  "Express",
                  "Standard",
                  "Web",
                ],
              },
            },
            {
              name: "--key-vault",
              description: "Azure Key Vault url",
              args: { name: "key-vault" },
            },
            {
              name: "--least-privilege-mode",
              description:
                "SQL IaaS Agent Least Privilege Mode. Updates from sysadmin to specific permissions used per feature",
              args: {
                name: "least-privilege-mode",
                suggestions: ["Enabled", "NotSet"],
              },
            },
            {
              name: ["--license-type", "-i"],
              description: "SQL Server license type",
              args: {
                name: "license-type",
                suggestions: ["AHUB", "DR", "PAYG"],
              },
            },
            {
              name: "--log-backup-frequency",
              description: "Frequency of log backups. 5-60 minutes",
              args: { name: "log-backup-frequency" },
            },
            {
              name: "--maintenance-window-duration",
              description: "Duration of patching. 30-180 minutes",
              args: { name: "maintenance-window-duration" },
            },
            {
              name: "--maintenance-window-start-hour",
              description:
                "Hour of the day when patching is initiated. Local VM time 0-23 hours",
              args: { name: "maintenance-window-start-hour" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the SQL virtual machine",
              args: { name: "name" },
            },
            {
              name: "--port",
              description: "SQL Server port",
              args: { name: "port" },
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
              name: "--retention-period",
              description: "Retention period of backup. 1-30 days",
              args: { name: "retention-period" },
            },
            {
              name: "--sa-key",
              description: "Storage account key where backup will be taken to",
              args: { name: "sa-key" },
            },
            {
              name: "--set",
              description:
                "Update an object by specifying a property path and value to set. Example: --set property1.property2=<value>",
              args: { name: "set", isVariadic: true },
            },
            {
              name: "--sp-name",
              description: "Service principal name to access key vault",
              args: { name: "sp-name" },
            },
            {
              name: "--sp-secret",
              description: "Service principal name secret to access key vault",
              args: { name: "sp-secret" },
            },
            {
              name: "--sql-mgmt-type",
              description:
                "Argument 'sql_management_mode' has been deprecated and will be removed in a future release. SQL Server management type. Updates from LightWeight to Full",
              args: {
                name: "sql-mgmt-type",
                suggestions: ["Full", "LightWeight", "NoAgent"],
              },
            },
            {
              name: "--sql-workload-type",
              description: "SQL Server workload type",
              args: {
                name: "sql-workload-type",
                suggestions: ["DW", "GENERAL", "OLTP"],
              },
            },
            {
              name: "--storage-account",
              description: "Storage account url where backup will be taken to",
              args: { name: "storage-account" },
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
              name: "--workspace-name",
              description:
                "Name of the Log Analytics workspace to associate with VM",
              args: { name: "workspace-name" },
            },
            {
              name: "--workspace-rg",
              description:
                "Resource group containing the Log Analytics workspace",
              args: { name: "workspace-rg" },
            },
            {
              name: "--workspace-sub",
              description:
                "Subscription containing the Log Analytics workspace",
              args: { name: "workspace-sub" },
            },
            {
              name: ["--yes", "-y"],
              description:
                "Argument 'prompt' has been deprecated and will be removed in a future release. Do not prompt for confirmation. Requires --sql-mgmt-type",
              args: { name: "yes" },
            },
          ],
        },
        {
          name: "validate-azure-ad-auth",
          description:
            "Validate Azure AD authentication of a SQL virtual machine at the client side without enabling it",
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
              name: "--msi-client-id",
              description: "Virutal Machine Managed Identity Client ID",
              args: { name: "msi-client-id" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the SQL virtual machine",
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
          name: "group",
          description: "Manage SQL virtual machine groups",
          subcommands: [
            {
              name: "create",
              description: "Creates a SQL virtual machine group",
              options: [
                {
                  name: ["--domain-fqdn", "-f"],
                  description: "Fully qualified name of the domain",
                  args: { name: "domain-fqdn" },
                  isRequired: true,
                },
                {
                  name: ["--image-offer", "-i"],
                  description:
                    "SQL image offer. Examples may include SQL2016-WS2016, SQL2017-WS2016",
                  args: { name: "image-offer" },
                  isRequired: true,
                },
                {
                  name: ["--image-sku", "-s"],
                  description: "SQL image sku",
                  args: {
                    name: "image-sku",
                    suggestions: ["Developer", "Enterprise"],
                  },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the SQL virtual machine group",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: ["--operator-acc", "-p"],
                  description:
                    "Account name used for operating cluster i.e. will be part of administrators group on all the participating virtual machines in the cluster",
                  args: { name: "operator-acc" },
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
                  name: ["--service-acc", "-e"],
                  description:
                    "Account name under which SQL service will run on all participating SQL virtual machines in the cluster",
                  args: { name: "service-acc" },
                  isRequired: true,
                },
                {
                  name: ["--storage-account", "-u"],
                  description:
                    "Storage account url of the witness storage account",
                  args: { name: "storage-account" },
                  isRequired: true,
                },
                acquirePolicyToken,
                {
                  name: "--bootstrap-acc",
                  description:
                    "Account name used for creating cluster (at minimum needs permissions to 'Create Computer Objects' in domain)",
                  args: { name: "bootstrap-acc" },
                },
                changeReference,
                {
                  name: "--cluster-subnet-type",
                  description: "Cluster subnet type",
                  args: {
                    name: "cluster-subnet-type",
                    suggestions: ["MultiSubnet", "SingleSubnet"],
                  },
                },
                {
                  name: "--fsw-path",
                  description: "Optional path for fileshare witness",
                  args: { name: "fsw-path" },
                },
                {
                  name: ["--location", "-l"],
                  description:
                    "Location. If not provided, group will be created in the same reosurce group location.You can configure the default location using az configure --defaults location=<location>",
                  args: { name: "location" },
                },
                {
                  name: "--ou-path",
                  description:
                    "Organizational Unit path in which the nodes and cluster will be present. Example: OU=WSCluster,DC=testdomain,DC=com",
                  args: { name: "ou-path" },
                },
                {
                  name: ["--sa-key", "-k"],
                  description: "Primary key of the witness storage account",
                  args: { name: "sa-key" },
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
              name: "delete",
              description: "Deletes a SQL virtual machine group",
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
                  description: "Name of the SQL virtual machine group",
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
              description:
                "Lists all SQL virtual machine groups in a resource group or subscription",
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
              description: "Gets a SQL virtual machine group",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the SQL virtual machine group",
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
                "Updates a SQL virtual machine group if there are not SQL virtual machines attached to the group",
              options: [
                acquirePolicyToken,
                {
                  name: "--add",
                  description:
                    "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
                  args: { name: "add", isVariadic: true },
                },
                {
                  name: "--bootstrap-acc",
                  description:
                    "Account name used for creating cluster (at minimum needs permissions to 'Create Computer Objects' in domain)",
                  args: { name: "bootstrap-acc" },
                },
                changeReference,
                {
                  name: "--cluster-subnet-type",
                  description: "Cluster subnet type",
                  args: {
                    name: "cluster-subnet-type",
                    suggestions: ["MultiSubnet", "SingleSubnet"],
                  },
                },
                {
                  name: ["--domain-fqdn", "-f"],
                  description: "Fully qualified name of the domain",
                  args: { name: "domain-fqdn" },
                },
                {
                  name: "--force-string",
                  description:
                    "When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON",
                },
                {
                  name: "--fsw-path",
                  description: "Optional path for fileshare witness",
                  args: { name: "fsw-path" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the SQL virtual machine group",
                  args: { name: "name" },
                },
                {
                  name: ["--operator-acc", "-p"],
                  description:
                    "Account name used for operating cluster i.e. will be part of administrators group on all the participating virtual machines in the cluster",
                  args: { name: "operator-acc" },
                },
                {
                  name: "--ou-path",
                  description:
                    "Organizational Unit path in which the nodes and cluster will be present. Example: OU=WSCluster,DC=testdomain,DC=com",
                  args: { name: "ou-path" },
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
                  name: ["--sa-key", "-k"],
                  description: "Primary key of the witness storage account",
                  args: { name: "sa-key" },
                },
                {
                  name: ["--service-acc", "-e"],
                  description:
                    "Account name under which SQL service will run on all participating SQL virtual machines in the cluster",
                  args: { name: "service-acc" },
                },
                {
                  name: "--set",
                  description:
                    "Update an object by specifying a property path and value to set. Example: --set property1.property2=<value>",
                  args: { name: "set", isVariadic: true },
                },
                {
                  name: ["--storage-account", "-u"],
                  description:
                    "Storage account url of the witness storage account",
                  args: { name: "storage-account" },
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
              ],
            },
            {
              name: "ag-listener",
              description: "Manage SQL availability group listeners",
              subcommands: [
                {
                  name: "create",
                  description: "Creates an availability group listener",
                  options: [
                    {
                      name: ["--ag-name", "-a"],
                      description:
                        "Name of the availability group. Please refer to https://learn.microsoft.com/sql/database-engine/availability-groups/windows/use-the-availability-group-wizard-sql-server-management-studio?view=sql-server-2017 to create and availability group",
                      args: { name: "ag-name" },
                      isRequired: true,
                    },
                    {
                      name: ["--group-name", "-r"],
                      description: "Name of the SQL virtual machine group",
                      args: { name: "group-name" },
                      isRequired: true,
                    },
                    {
                      name: ["--ip-address", "-i"],
                      description:
                        "Private IP address bound to the availability group listener",
                      args: { name: "ip-address" },
                      isRequired: true,
                    },
                    {
                      name: ["--load-balancer", "-b"],
                      description: "Name or resource ID of the load balancer",
                      args: { name: "load-balancer" },
                      isRequired: true,
                    },
                    {
                      name: ["--name", "-n"],
                      description: "Name of the availability group listener",
                      args: { name: "name" },
                      isRequired: true,
                    },
                    {
                      name: ["--probe-port", "-e"],
                      description: "Probe port",
                      args: { name: "probe-port" },
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
                      name: ["--sqlvms", "-q"],
                      description:
                        "Space-separated list of SQL virtual machine instance name or resource IDs that are enrolled into the availability group",
                      args: { name: "sqlvms", isVariadic: true },
                      isRequired: true,
                    },
                    {
                      name: ["--subnet", "-u"],
                      description:
                        "The name or resource id of the subnet to include in the private IP",
                      args: { name: "subnet" },
                      isRequired: true,
                    },
                    acquirePolicyToken,
                    changeReference,
                    {
                      name: ["--port", "-p"],
                      description: "Listener port",
                      args: { name: "port" },
                    },
                    {
                      name: ["--public-ip", "-c"],
                      description: "Name or resource ID of the public IP",
                      args: { name: "public-ip" },
                    },
                    {
                      name: "--vnet-name",
                      description:
                        "Name of the virtual network. Provide only if name of the subnet has been provided",
                      args: { name: "vnet-name" },
                    },
                  ],
                },
                {
                  name: "delete",
                  description: "Deletes an availability group listener",
                  options: [
                    {
                      name: ["--group-name", "-r"],
                      description: "Name of the SQL virtual machine group",
                      args: { name: "group-name" },
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
                      description: "Name of the availability group listener",
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
                  description:
                    "Lists all availability group listeners in a SQL virtual machine group",
                  options: [
                    {
                      name: ["--group-name", "-r"],
                      description: "Name of the SQL virtual machine group",
                      args: { name: "group-name" },
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
                  description: "Gets an availability group listener",
                  options: [
                    {
                      name: ["--group-name", "-r"],
                      description: "Name of the SQL virtual machine group",
                      args: { name: "group-name" },
                      isRequired: true,
                    },
                    {
                      name: "--expand",
                      description:
                        "Get the SQLIaaSExtension configuration settings. To view all settings, use *. To select only a few, the settings must be space-separated",
                      args: {
                        name: "expand",
                        suggestions: [
                          "*",
                          "AssessmentSettings",
                          "AutoBackupSettings",
                          "AutoPatchingSettings",
                          "KeyVaultCredentialSettings",
                          "ServerConfigurationsManagementSettings",
                        ],
                        isVariadic: true,
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
                      description: "Name of the availability group listener",
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
                  description: "Updates an availability group listener",
                  options: [
                    {
                      name: ["--group-name", "-r"],
                      description: "Name of the SQL virtual machine group",
                      args: { name: "group-name" },
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
                      name: "--ids",
                      description:
                        "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                      args: { name: "ids", isVariadic: true },
                    },
                    {
                      name: ["--name", "-n"],
                      description: "Name of the availability group listener",
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
                      name: ["--sqlvms", "-q"],
                      description:
                        "Space-separated list of SQL virtual machine instance name or resource IDs that are enrolled into the availability group",
                      args: { name: "sqlvms", isVariadic: true },
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
};

export default completion;
