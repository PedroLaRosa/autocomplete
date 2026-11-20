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
  name: "postgres",
  description: "Manage Azure Database for PostgreSQL",
  subcommands: [
    {
      name: "flexible-server",
      description: "Manage Azure Database for PostgreSQL flexible servers",
      subcommands: [
        {
          name: "create",
          description: "Create a PostgreSQL flexible server",
          options: [
            acquirePolicyToken,
            {
              name: ["--admin-display-name", "-m"],
              description:
                "Display name of the Microsoft Entra administrator user or group",
              args: { name: "admin-display-name" },
            },
            {
              name: ["--admin-object-id", "-i"],
              description:
                "The unique identifier of the Microsoft Entra administrator",
              args: { name: "admin-object-id" },
            },
            {
              name: ["--admin-password", "-p"],
              description:
                "The password of the administrator. Minimum 8 characters and maximum 128 characters. Password must contain characters from three of the following categories: English uppercase letters, English lowercase letters, numbers, and non-alphanumeric characters",
              args: { name: "admin-password" },
            },
            {
              name: ["--admin-type", "-t"],
              description: "Type of the Microsoft Entra administrator",
              args: {
                name: "admin-type",
                suggestions: ["Group", "ServicePrincipal", "Unknown", "User"],
              },
            },
            {
              name: ["--admin-user", "-u"],
              description:
                "Administrator username for the server. Once set, it cannot be changed",
              args: { name: "admin-user" },
            },
            {
              name: "--allow-same-zone",
              description:
                "Allow primary and standby in the same zone when multi-zone capacity is unavailable",
            },
            {
              name: ["--backup-federated-client-id", "-f"],
              description: "The client ID of the geo backup federated identity",
              args: { name: "backup-federated-client-id" },
            },
            {
              name: "--backup-identity",
              description:
                "The name or resource identifier of the geo backup user identity for data encryption. The identity needs to be in the same region as the backup region",
              args: { name: "backup-identity" },
            },
            {
              name: "--backup-key",
              description:
                "The resource identifier of the geo backup keyvault key for data encryption. The key needs to be in the same region as the backup region",
              args: { name: "backup-key" },
            },
            {
              name: "--backup-retention",
              description:
                "The number of days a backup is retained. Range of 7 to 35 days. Default is 7 days",
              args: { name: "backup-retention" },
            },
            changeReference,
            {
              name: ["--database-name", "-d"],
              description:
                "The default database name for an elastic cluster. Only applicable when --node-count is present",
              args: { name: "database-name" },
            },
            {
              name: "--federated-client-id",
              description: "The client ID of the federated identity",
              args: { name: "federated-client-id" },
            },
            {
              name: "--fips-mode",
              description:
                "Enable or disable FIPS (Federal Information Processing Standards) mode. The service default is Disabled on creation. If omitted on update, the current value is preserved",
              args: { name: "fips-mode", suggestions: ["Disabled", "Enabled"] },
            },
            {
              name: "--geo-redundant-backup",
              description: "Whether or not geo redundant backup is enabled",
              args: {
                name: "geo-redundant-backup",
                suggestions: ["Disabled", "Enabled"],
              },
            },
            {
              name: "--identity",
              description:
                "The name or resource identifier of the user assigned identity for data encryption",
              args: { name: "identity" },
            },
            {
              name: "--immutable-backup",
              description:
                "Enable or disable immutable backups at server creation. When enabled, backups cannot be changed or deleted during the retention period",
              args: {
                name: "immutable-backup",
                suggestions: ["Disabled", "Enabled"],
              },
            },
            {
              name: "--iops",
              description:
                "Value of IOPS in (operations/sec) to be allocated for this server. This value can only be updated if flexible server is using Premium SSD v2 Disks",
              args: { name: "iops" },
            },
            {
              name: "--key",
              description:
                "The resource identifier of the primary keyvault key for data encryption",
              args: { name: "key" },
            },
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
            },
            {
              name: "--microsoft-entra-auth",
              description: "Whether Microsoft Entra authentication is enabled",
              args: {
                name: "microsoft-entra-auth",
                suggestions: ["Disabled", "Enabled"],
              },
            },
            {
              name: ["--name", "-n"],
              description:
                "Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters",
              args: { name: "name" },
            },
            {
              name: "--node-count",
              description: "The number of nodes for elastic cluster",
              args: { name: "node-count" },
            },
            {
              name: "--password-auth",
              description: "Whether password authentication is enabled",
              args: {
                name: "password-auth",
                suggestions: ["Disabled", "Enabled"],
              },
            },
            {
              name: "--performance-tier",
              description: "Performance tier of the server",
              args: { name: "performance-tier" },
            },
            {
              name: "--private-dns-zone",
              description:
                "This parameter only applies for a server with private access and is required when using --vnet or --subnet. The name or resource identifier of an existing private DNS zone. You can use a private DNS zone from the same resource group, a different resource group, or a different subscription. If you want to use a zone from a different resource group or subscription, please provide its resource identifier",
              args: { name: "private-dns-zone" },
            },
            {
              name: "--public-access",
              description:
                "Determines the public access. Enter single or range of IP addresses to be included in the allowed list of IPs. IP address ranges must be dash-separated and not contain any spaces. Specifying 0.0.0.0 allows public access from any resources deployed within Azure to access your server. Setting it to \"None\" sets the server in public access mode but does not create a firewall rule. Acceptable values are 'Disabled', 'Enabled', 'All', 'None','{startIP}' and '{startIP}-{destinationIP}' where startIP and destinationIP ranges from 0.0.0.0 to 255.255.255.255",
              args: { name: "public-access" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: [
                "--storage-auto-grow-increment-percent",
                "--sag-increment-percent",
              ],
              description:
                "Storage autogrow increment as a positive percentage of the current allocated storage size, not an absolute size increment or a utilization threshold. Requires PremiumV2_LRS storage with autogrow enabled; for update, autogrow must already be enabled",
              args: { name: "storage-auto-grow-increment-percent" },
            },
            {
              name: [
                "--storage-auto-grow-max-threshold-mb",
                "--sag-max-threshold",
              ],
              description:
                "Maximum allocated storage size autogrow may reach, in MB, not a disk-utilization trigger threshold. Must be at least the current or requested storage size (1 GB = 1,024 MB). Requires PremiumV2_LRS storage with autogrow enabled; for update, autogrow must already be enabled",
              args: { name: "storage-auto-grow-max-threshold-mb" },
            },
            {
              name: "--sku-name",
              description:
                "The name of the compute SKU. Follows the convention Standard_{VM name}. Examples: Standard_B1ms",
              args: { name: "sku-name" },
            },
            {
              name: "--standby-zone",
              description:
                "The availability zone information of the standby server when high availability is enabled",
              args: { name: "standby-zone" },
            },
            {
              name: "--storage-auto-grow",
              description:
                "Enable or disable autogrow of the storage. Default value is Disabled",
              args: {
                name: "storage-auto-grow",
                suggestions: ["Disabled", "Enabled"],
              },
            },
            {
              name: "--storage-size",
              description:
                "The storage capacity of the server. Minimum is 32 GiB and max is 16 TiB",
              args: { name: "storage-size" },
            },
            {
              name: "--storage-type",
              description:
                "Storage type for the server. Allowed values are Premium_LRS and PremiumV2_LRS. Default value is Premium_LRS. Must set --iops and --throughput if using PremiumV2_LRS",
              args: {
                name: "storage-type",
                suggestions: ["PremiumV2_LRS", "Premium_LRS"],
              },
            },
            {
              name: "--subnet",
              description:
                "Name or identifier of an existing subnet. If you want to use a subnet from a different resource group or subscription, please provide its resource identifier instead of name",
              args: { name: "subnet" },
            },
            {
              name: "--tags",
              description:
                "Space-separated tags: key[=value] [key[=value] ...]. Use '' to clear existing tags",
              args: { name: "tags", isOptional: true, isVariadic: true },
            },
            {
              name: "--throughput",
              description:
                "Storage throughput in (MB/sec) for the server. This value can only be updated if flexible server is using Premium SSD v2 Disks",
              args: { name: "throughput" },
            },
            {
              name: "--tier",
              description:
                "Compute tier of the server. Accepted values: Burstable, GeneralPurpose, MemoryOptimized",
              args: { name: "tier" },
            },
            {
              name: "--version",
              description:
                "Server major version. Supported values are: 11, 12, 13, 14, 15, 16, 17, 18, 19",
              args: { name: "version" },
            },
            {
              name: "--vnet",
              description:
                "Name or identifier of an existing virtual network. If you want to use a vnet from a different resource group or subscription, please provide a resource identifier. The name must be between 2 to 64 characters. The name must begin with a letter or number, end with a letter, number or underscore, and may contain only letters, numbers, underscores, periods, or hyphens",
              args: { name: "vnet" },
            },
            {
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
            {
              name: "--zonal-resiliency",
              description: "Enable or disable high availability feature",
              args: {
                name: "zonal-resiliency",
                suggestions: ["Disabled", "Enabled"],
              },
            },
            {
              name: ["--zone", "-z"],
              description:
                "Availability zone into which to provision the resource",
              args: { name: "zone" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a flexible server",
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
                "Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters",
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
          name: "geo-restore",
          description: "Geo-restore a flexible server from backup",
          options: [
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
              isRequired: true,
            },
            {
              name: "--source-server",
              description:
                "The name or resource identifier of the source server to restore from",
              args: { name: "source-server" },
              isRequired: true,
            },
            acquirePolicyToken,
            {
              name: ["--backup-federated-client-id", "-f"],
              description: "The client ID of the geo backup federated identity",
              args: { name: "backup-federated-client-id" },
            },
            {
              name: "--backup-identity",
              description:
                "The name or resource identifier of the geo backup user identity for data encryption. The identity needs to be in the same region as the backup region",
              args: { name: "backup-identity" },
            },
            {
              name: "--backup-key",
              description:
                "The resource identifier of the geo backup keyvault key for data encryption. The key needs to be in the same region as the backup region",
              args: { name: "backup-key" },
            },
            changeReference,
            {
              name: "--federated-client-id",
              description: "The client ID of the federated identity",
              args: { name: "federated-client-id" },
            },
            {
              name: "--geo-redundant-backup",
              description: "Whether or not geo redundant backup is enabled",
              args: {
                name: "geo-redundant-backup",
                suggestions: ["Disabled", "Enabled"],
              },
            },
            {
              name: "--identity",
              description:
                "The name or resource identifier of the user assigned identity for data encryption",
              args: { name: "identity" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids", isVariadic: true },
            },
            {
              name: "--key",
              description:
                "The resource identifier of the primary keyvault key for data encryption",
              args: { name: "key" },
            },
            {
              name: ["--name", "-n"],
              description:
                "Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters",
              args: { name: "name" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: "--private-dns-zone",
              description:
                "This parameter only applies for a server with private access and is required when using --vnet or --subnet. The name or resource identifier of an existing private DNS zone. You can use a private DNS zone from the same resource group, a different resource group, or a different subscription. If you want to use a zone from a different resource group or subscription, please provide its resource identifier",
              args: { name: "private-dns-zone" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--restore-time",
              description:
                "The point in time in UTC to restore from (ISO8601 format), e.g., 2026-03-22T18:20:22+00:00 The default value is set to current time",
              args: { name: "restore-time" },
            },
            {
              name: "--subnet",
              description:
                "Name or identifier of an existing subnet. If you want to use a subnet from a different resource group or subscription, please provide its resource identifier instead of name",
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
                "Name or identifier of an existing virtual network. If you want to use a vnet from a different resource group or subscription, please provide a resource identifier. The name must be between 2 to 64 characters. The name must begin with a letter or number, end with a letter, number or underscore, and may contain only letters, numbers, underscores, periods, or hyphens",
              args: { name: "vnet" },
            },
            {
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
            {
              name: ["--zone", "-z"],
              description:
                "Availability zone into which to provision the resource",
              args: { name: "zone" },
            },
          ],
        },
        {
          name: "list",
          description: "List available flexible servers",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--show-cluster",
              description: "Only show elastic clusters",
            },
          ],
        },
        {
          name: "list-skus",
          description: "Lists available sku's in the given region",
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
          name: "migrate-network",
          description:
            "Migrate an Azure Database for PostgreSQL server from VNet integration to a Private Link network model",
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
                "Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters",
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
          name: "restart",
          description: "Restart a flexible server",
          options: [
            acquirePolicyToken,
            changeReference,
            {
              name: "--failover",
              description:
                "Forced or planned failover for server restart operation. Allowed values: Forced, Planned",
              args: { name: "failover" },
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
                "Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters",
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
          name: "restore",
          description: "Restore a flexible server from backup",
          options: [
            {
              name: "--source-server",
              description:
                "The name or resource identifier of the source server to restore from",
              args: { name: "source-server" },
              isRequired: true,
            },
            acquirePolicyToken,
            {
              name: ["--backup-federated-client-id", "-f"],
              description: "The client ID of the geo backup federated identity",
              args: { name: "backup-federated-client-id" },
            },
            {
              name: "--backup-identity",
              description:
                "The name or resource identifier of the geo backup user identity for data encryption. The identity needs to be in the same region as the backup region",
              args: { name: "backup-identity" },
            },
            {
              name: "--backup-key",
              description:
                "The resource identifier of the geo backup keyvault key for data encryption. The key needs to be in the same region as the backup region",
              args: { name: "backup-key" },
            },
            changeReference,
            {
              name: "--federated-client-id",
              description: "The client ID of the federated identity",
              args: { name: "federated-client-id" },
            },
            {
              name: "--geo-redundant-backup",
              description: "Whether or not geo redundant backup is enabled",
              args: {
                name: "geo-redundant-backup",
                suggestions: ["Disabled", "Enabled"],
              },
            },
            {
              name: "--identity",
              description:
                "The name or resource identifier of the user assigned identity for data encryption",
              args: { name: "identity" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids", isVariadic: true },
            },
            {
              name: "--key",
              description:
                "The resource identifier of the primary keyvault key for data encryption",
              args: { name: "key" },
            },
            {
              name: ["--name", "-n"],
              description:
                "Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters",
              args: { name: "name" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: "--private-dns-zone",
              description:
                "This parameter only applies for a server with private access and is required when using --vnet or --subnet. The name or resource identifier of an existing private DNS zone. You can use a private DNS zone from the same resource group, a different resource group, or a different subscription. If you want to use a zone from a different resource group or subscription, please provide its resource identifier",
              args: { name: "private-dns-zone" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--restore-time",
              description:
                "The point in time in UTC to restore from (ISO8601 format), e.g., 2026-03-22T18:20:22+00:00 The default value is set to current time",
              args: { name: "restore-time" },
            },
            {
              name: "--sku-name",
              description:
                "The name of the compute SKU. Follows the convention Standard_{VM name}. Examples: Standard_B1ms",
              args: { name: "sku-name" },
            },
            {
              name: "--storage-type",
              description:
                "Storage type for the new server. Allowed value is PremiumV2_LRS. Default is for the new server to match storage type of the source server",
              args: { name: "storage-type", suggestions: ["PremiumV2_LRS"] },
            },
            {
              name: "--subnet",
              description:
                "Name or identifier of an existing subnet. If you want to use a subnet from a different resource group or subscription, please provide its resource identifier instead of name",
              args: { name: "subnet" },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
            {
              name: "--tier",
              description:
                "Compute tier of the server. Accepted values: Burstable, GeneralPurpose, MemoryOptimized",
              args: { name: "tier" },
            },
            {
              name: "--vnet",
              description:
                "Name or identifier of an existing virtual network. If you want to use a vnet from a different resource group or subscription, please provide a resource identifier. The name must be between 2 to 64 characters. The name must begin with a letter or number, end with a letter, number or underscore, and may contain only letters, numbers, underscores, periods, or hyphens",
              args: { name: "vnet" },
            },
            {
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
            {
              name: ["--zone", "-z"],
              description:
                "Availability zone into which to provision the resource",
              args: { name: "zone" },
            },
          ],
        },
        {
          name: "revive-dropped",
          description: "Revive a dropped flexible server from backup",
          options: [
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
              isRequired: true,
            },
            {
              name: "--source-server",
              description:
                "The name or resource identifier of the source server to restore from",
              args: { name: "source-server" },
              isRequired: true,
            },
            acquirePolicyToken,
            {
              name: "--backup-identity",
              description:
                "The name or resource identifier of the geo backup user identity for data encryption. The identity needs to be in the same region as the backup region",
              args: { name: "backup-identity" },
            },
            {
              name: "--backup-key",
              description:
                "The resource identifier of the geo backup keyvault key for data encryption. The key needs to be in the same region as the backup region",
              args: { name: "backup-key" },
            },
            changeReference,
            {
              name: "--geo-redundant-backup",
              description: "Whether or not geo redundant backup is enabled",
              args: {
                name: "geo-redundant-backup",
                suggestions: ["Disabled", "Enabled"],
              },
            },
            {
              name: "--identity",
              description:
                "The name or resource identifier of the user assigned identity for data encryption",
              args: { name: "identity" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids", isVariadic: true },
            },
            {
              name: "--key",
              description:
                "The resource identifier of the primary keyvault key for data encryption",
              args: { name: "key" },
            },
            {
              name: ["--name", "-n"],
              description:
                "Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters",
              args: { name: "name" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: "--private-dns-zone",
              description:
                "This parameter only applies for a server with private access and is required when using --vnet or --subnet. The name or resource identifier of an existing private DNS zone. You can use a private DNS zone from the same resource group, a different resource group, or a different subscription. If you want to use a zone from a different resource group or subscription, please provide its resource identifier",
              args: { name: "private-dns-zone" },
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
                "Name or identifier of an existing subnet. If you want to use a subnet from a different resource group or subscription, please provide its resource identifier instead of name",
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
                "Name or identifier of an existing virtual network. If you want to use a vnet from a different resource group or subscription, please provide a resource identifier. The name must be between 2 to 64 characters. The name must begin with a letter or number, end with a letter, number or underscore, and may contain only letters, numbers, underscores, periods, or hyphens",
              args: { name: "vnet" },
            },
            {
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
            {
              name: ["--zone", "-z"],
              description:
                "Availability zone into which to provision the resource",
              args: { name: "zone" },
            },
          ],
        },
        {
          name: "show",
          description: "Get the details of a flexible server",
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
                "Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters",
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
          name: "show-connection-string",
          description:
            "Show the connection strings for a PostgreSQL flexible-server database",
          options: [
            acquirePolicyToken,
            {
              name: ["--admin-password", "-p"],
              description:
                "The password of the administrator. Minimum 8 characters and maximum 128 characters. Password must contain characters from three of the following categories: English uppercase letters, English lowercase letters, numbers, and non-alphanumeric characters",
              args: { name: "admin-password" },
            },
            {
              name: ["--admin-user", "-u"],
              description:
                "Administrator username for the server. Once set, it cannot be changed",
              args: { name: "admin-user" },
            },
            changeReference,
            {
              name: ["--database-name", "-d"],
              description: "The name of the database",
              args: { name: "database-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids", isVariadic: true },
            },
            {
              name: "--pg-bouncer",
              description: "Show connection strings for PgBouncer",
            },
            {
              name: ["--server-name", "-s"],
              description: "Name of the server",
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
          name: "start",
          description: "Start a flexible server",
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
                "Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters",
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
          name: "stop",
          description: "Stop a flexible server",
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
                "Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters",
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
          name: "update",
          description: "Update a flexible server",
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
                "The password of the administrator. Minimum 8 characters and maximum 128 characters. Password must contain characters from three of the following categories: English uppercase letters, English lowercase letters, numbers, and non-alphanumeric characters",
              args: { name: "admin-password" },
            },
            {
              name: "--allow-same-zone",
              description:
                "Allow primary and standby in the same zone when multi-zone capacity is unavailable",
            },
            {
              name: ["--backup-federated-client-id", "-f"],
              description: "The client ID of the geo backup federated identity",
              args: { name: "backup-federated-client-id" },
            },
            {
              name: "--backup-identity",
              description:
                "The name or resource identifier of the geo backup user identity for data encryption. The identity needs to be in the same region as the backup region",
              args: { name: "backup-identity" },
            },
            {
              name: "--backup-key",
              description:
                "The resource identifier of the geo backup keyvault key for data encryption. The key needs to be in the same region as the backup region",
              args: { name: "backup-key" },
            },
            {
              name: "--backup-retention",
              description:
                "The number of days a backup is retained. Range of 7 to 35 days. Default is 7 days",
              args: { name: "backup-retention" },
            },
            changeReference,
            {
              name: "--federated-client-id",
              description: "The client ID of the federated identity",
              args: { name: "federated-client-id" },
            },
            {
              name: "--fips-mode",
              description:
                "Enable or disable FIPS (Federal Information Processing Standards) mode. The service default is Disabled on creation. If omitted on update, the current value is preserved",
              args: { name: "fips-mode", suggestions: ["Disabled", "Enabled"] },
            },
            {
              name: "--force-string",
              description:
                "When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON",
            },
            {
              name: "--identity",
              description:
                "The name or resource identifier of the user assigned identity for data encryption",
              args: { name: "identity" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids", isVariadic: true },
            },
            {
              name: "--iops",
              description:
                "Value of IOPS in (operations/sec) to be allocated for this server. This value can only be updated if flexible server is using Premium SSD v2 Disks",
              args: { name: "iops" },
            },
            {
              name: "--key",
              description:
                "The resource identifier of the primary keyvault key for data encryption",
              args: { name: "key" },
            },
            {
              name: "--maintenance-window",
              description:
                'Period of time (UTC) designated for maintenance. Examples: "Sun:23:30" to schedule on Sunday, 11:30pm UTC. To set back to default pass in "Disabled"',
              args: { name: "maintenance-window" },
            },
            {
              name: "--microsoft-entra-auth",
              description: "Whether Microsoft Entra authentication is enabled",
              args: {
                name: "microsoft-entra-auth",
                suggestions: ["Disabled", "Enabled"],
              },
            },
            {
              name: ["--name", "-n"],
              description:
                "Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters",
              args: { name: "name" },
            },
            {
              name: "--node-count",
              description: "The number of nodes for elastic cluster",
              args: { name: "node-count" },
            },
            {
              name: "--password-auth",
              description: "Whether password authentication is enabled",
              args: {
                name: "password-auth",
                suggestions: ["Disabled", "Enabled"],
              },
            },
            {
              name: "--performance-tier",
              description: "Performance tier of the server",
              args: { name: "performance-tier" },
            },
            {
              name: "--private-dns-zone",
              description:
                "This parameter only applies for a server with private access and is required when using --vnet or --subnet. The name or resource identifier of an existing private DNS zone. You can use a private DNS zone from the same resource group, a different resource group, or a different subscription. If you want to use a zone from a different resource group or subscription, please provide its resource identifier",
              args: { name: "private-dns-zone" },
            },
            {
              name: "--public-access",
              description: "Enable or disable the public access on a server",
              args: {
                name: "public-access",
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
              name: [
                "--storage-auto-grow-increment-percent",
                "--sag-increment-percent",
              ],
              description:
                "Storage autogrow increment as a positive percentage of the current allocated storage size, not an absolute size increment or a utilization threshold. Requires PremiumV2_LRS storage with autogrow enabled; for update, autogrow must already be enabled",
              args: { name: "storage-auto-grow-increment-percent" },
            },
            {
              name: [
                "--storage-auto-grow-max-threshold-mb",
                "--sag-max-threshold",
              ],
              description:
                "Maximum allocated storage size autogrow may reach, in MB, not a disk-utilization trigger threshold. Must be at least the current or requested storage size (1 GB = 1,024 MB). Requires PremiumV2_LRS storage with autogrow enabled; for update, autogrow must already be enabled",
              args: { name: "storage-auto-grow-max-threshold-mb" },
            },
            {
              name: "--set",
              description:
                "Update an object by specifying a property path and value to set. Example: --set property1.property2=<value>",
              args: { name: "set", isVariadic: true },
            },
            {
              name: "--sku-name",
              description:
                "The name of the compute SKU. Follows the convention Standard_{VM name}. Examples: Standard_B1ms",
              args: { name: "sku-name" },
            },
            {
              name: "--standby-zone",
              description:
                "The availability zone information of the standby server when high availability is enabled",
              args: { name: "standby-zone" },
            },
            {
              name: "--storage-auto-grow",
              description:
                "Enable or disable autogrow of the storage. Default value is Disabled",
              args: {
                name: "storage-auto-grow",
                suggestions: ["Disabled", "Enabled"],
              },
            },
            {
              name: "--storage-size",
              description:
                "The storage capacity of the server. Minimum is 32 GiB and max is 16 TiB",
              args: { name: "storage-size" },
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
              name: "--throughput",
              description:
                "Storage throughput in (MB/sec) for the server. This value can only be updated if flexible server is using Premium SSD v2 Disks",
              args: { name: "throughput" },
            },
            {
              name: "--tier",
              description:
                "Compute tier of the server. Accepted values: Burstable, GeneralPurpose, MemoryOptimized",
              args: { name: "tier" },
            },
            {
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
            {
              name: "--zonal-resiliency",
              description: "Enable or disable high availability feature",
              args: {
                name: "zonal-resiliency",
                suggestions: ["Disabled", "Enabled"],
              },
            },
          ],
        },
        {
          name: "upgrade",
          description: "Upgrade the major version of a flexible server",
          options: [
            {
              name: ["--version", "-v"],
              description:
                "Server major version. Supported values are: 12, 13, 14, 15, 16, 17, 18, 19",
              args: { name: "version" },
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
              description:
                "Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters",
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
              name: "--validate-only",
              description:
                "Run a pre-upgrade validation against the server without performing major version upgrade on resource. Returns the prevalidation check result",
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
            "Wait for the flexible server to satisfy certain conditions",
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
              name: ["--name", "-n"],
              description:
                "Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters",
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
          name: "advanced-threat-protection-setting",
          description:
            "Manage advanced threat protection setting for a PostgreSQL flexible server",
          subcommands: [
            {
              name: "show",
              description:
                "Get advanced threat protection settings for a PostgreSL flexible server",
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
                  name: ["--server-name", "-s"],
                  description: "Name of the server",
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
                "Updates advanced threat protection setting state for a flexible server",
              options: [
                {
                  name: "--state",
                  description: "State of advanced threat protection setting",
                  args: { name: "state", suggestions: ["Disabled", "Enabled"] },
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
                  name: ["--server-name", "-s"],
                  description: "Name of the server",
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
          name: "autonomous-tuning",
          description:
            "Autonomous tuning analyzes read queries captured in query store and recommends operations on tables or index changes to optimize these queries",
          subcommands: [
            {
              name: "list-index-recommendations",
              description:
                "Get available autonomous tuning index recommendations associated with a PostgreSQL flexible server",
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
                  name: ["--recommendation-type", "-r"],
                  description: "Retrieve recommendations based on type",
                  args: {
                    name: "recommendation-type",
                    suggestions: ["CreateIndex", "DropIndex", "ReIndex"],
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--server-name", "-s"],
                  description: "Name of the server",
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
              name: "list-settings",
              description:
                "Get autonomous tuning settings associated to a PostgreSQL flexible server",
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
                  name: ["--server-name", "-s"],
                  description: "Name of the server",
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
              name: "list-table-recommendations",
              description:
                "Get available autonomous tuning table recommendations associated with a PostgreSQL flexible server",
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
                  name: ["--recommendation-type", "-r"],
                  description: "Retrieve recommendations based on type",
                  args: {
                    name: "recommendation-type",
                    suggestions: ["AnalyzeTable", "VacuumTable"],
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--server-name", "-s"],
                  description: "Name of the server",
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
              name: "set-settings",
              description:
                "Update an autonomous tuning setting for a PostgreSQL flexible server",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "The name of the tuning setting",
                  args: {
                    name: "name",
                    suggestions: [
                      "analysis_interval",
                      "max_columns_per_index",
                      "max_index_count",
                      "max_indexes_per_table",
                      "max_queries_per_database",
                      "max_regression_factor",
                      "max_total_size_factor",
                      "min_improvement_factor",
                      "mode",
                      "unused_dml_per_table",
                      "unused_min_period",
                      "unused_reads_per_table",
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
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--server-name", "-s"],
                  description: "Name of the server",
                  args: { name: "server-name" },
                },
                {
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
                },
                {
                  name: ["--value", "-v"],
                  description: "Value of the tuning setting",
                  args: { name: "value" },
                },
              ],
            },
            {
              name: "show",
              description:
                "Show state of autonomous tuning for a PostgreSQL flexible server",
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
                  name: ["--server-name", "-s"],
                  description: "Name of the server",
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
              name: "show-settings",
              description:
                "Get an autonomous tuning setting for a PostgreSQL flexible server",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "The name of the tuning setting",
                  args: {
                    name: "name",
                    suggestions: [
                      "analysis_interval",
                      "max_columns_per_index",
                      "max_index_count",
                      "max_indexes_per_table",
                      "max_queries_per_database",
                      "max_regression_factor",
                      "max_total_size_factor",
                      "min_improvement_factor",
                      "mode",
                      "unused_dml_per_table",
                      "unused_min_period",
                      "unused_reads_per_table",
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
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--server-name", "-s"],
                  description: "Name of the server",
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
                "Update autonomous tuning to be enabled/disabled for a PostgreSQL flexible server",
              options: [
                {
                  name: "--enabled",
                  description: "Enable or disable autonomous tuning feature",
                  args: { name: "enabled", suggestions: ["False", "True"] },
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
                  name: ["--server-name", "-s"],
                  description: "Name of the server",
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
          name: "backup",
          description: "Manage flexible server backups",
          subcommands: [
            {
              name: "create",
              description: "Create a new backup for a flexible server",
              options: [
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
                {
                  name: ["--server-name", "-s"],
                  description: "Name of the server",
                  args: { name: "server-name" },
                  isRequired: true,
                },
                acquirePolicyToken,
                changeReference,
                {
                  name: ["--name", "-n"],
                  description: "The name of the backup",
                  args: { name: "name" },
                },
              ],
            },
            {
              name: "delete",
              description: "Delete a specific backup",
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
                  description: "The name of the backup",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--server-name", "-s"],
                  description: "Name of the server",
                  args: { name: "server-name" },
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
              description: "List all the backups for a given server",
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
                  name: ["--server-name", "-s"],
                  description: "Name of the server",
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
              name: "show",
              description:
                "Show the details of a specific backup for a given server",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: ["--name", "-n"],
                  description: "The name of the backup",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--server-name", "-s"],
                  description: "Name of the server",
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
          name: "db",
          description: "Manage PostgreSQL databases on a flexible server",
          subcommands: [
            {
              name: "create",
              description: "Create a PostgreSQL database on a flexible server",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "The name of the database",
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
                  name: ["--server-name", "-s"],
                  description: "Name of the server",
                  args: { name: "server-name" },
                  isRequired: true,
                },
                acquirePolicyToken,
                changeReference,
                {
                  name: "--charset",
                  description:
                    "The charset of the database. The default value is UTF8",
                  args: { name: "charset" },
                },
                {
                  name: "--collation",
                  description: "The collation of the database",
                  args: { name: "collation" },
                },
              ],
            },
            {
              name: "delete",
              description: "Delete a database on a flexible server",
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
                  description: "The name of the database",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--server-name", "-s"],
                  description: "Name of the server",
                  args: { name: "server-name" },
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
              description: "List the databases for a flexible server",
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
                  name: ["--server-name", "-s"],
                  description: "Name of the server",
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
              name: "show",
              description: "Show the details of a database",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: ["--name", "-n"],
                  description: "The name of the database",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--server-name", "-s"],
                  description: "Name of the server",
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
          name: "deploy",
          description:
            "Enable and run GitHub Actions workflow for PostgreSQL server",
          subcommands: [
            {
              name: "run",
              description: "Run an existing workflow in your github repository",
              options: [
                {
                  name: "--action-name",
                  description: "The name of the github action",
                  args: { name: "action-name" },
                  isRequired: true,
                },
                {
                  name: "--branch",
                  description:
                    "The name of the branch you want upload github action file. The default will be your current branch",
                  args: { name: "branch" },
                  isRequired: true,
                },
                acquirePolicyToken,
                changeReference,
              ],
            },
            {
              name: "setup",
              description:
                "Create GitHub Actions workflow file for PostgreSQL server",
              options: [
                {
                  name: ["--admin-password", "-p"],
                  description:
                    "The password of the administrator. Minimum 8 characters and maximum 128 characters. Password must contain characters from three of the following categories: English uppercase letters, English lowercase letters, numbers, and non-alphanumeric characters",
                  args: { name: "admin-password" },
                  isRequired: true,
                },
                {
                  name: ["--admin-user", "-u"],
                  description:
                    "Administrator username for the server. Once set, it cannot be changed",
                  args: { name: "admin-user" },
                  isRequired: true,
                },
                {
                  name: "--repo",
                  description:
                    "The name of your github username and repository e.g., Azure/azure-cli",
                  args: { name: "repo" },
                  isRequired: true,
                },
                {
                  name: "--sql-file",
                  description:
                    "The path of the sql file. The sql file should be already in the repository",
                  args: { name: "sql-file" },
                  isRequired: true,
                },
                acquirePolicyToken,
                {
                  name: "--action-name",
                  description: "The name of the github action",
                  args: { name: "action-name" },
                },
                {
                  name: "--allow-push",
                  description:
                    "Push the action yml file to the remote repository. The changes will be pushed to origin repository, specified branch or current branch if not specified",
                  args: {
                    name: "allow-push",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: "--branch",
                  description:
                    "The name of the branch you want upload github action file. The default will be your current branch",
                  args: { name: "branch" },
                },
                changeReference,
                {
                  name: ["--database-name", "-d"],
                  description: "The name of the database",
                  args: { name: "database-name" },
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
                  name: ["--server-name", "-s"],
                  description: "Name of the server",
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
          name: "fabric-mirroring",
          description:
            "Bring your PostgreSQL data into Microsoft Fabric. Mirroring allows you to create a replica of your data in OneLake which can be used for all your analytical needs",
          subcommands: [
            {
              name: "start",
              description:
                "Enable bringing your PostgreSQL data into Microsoft Fabric",
              options: [
                {
                  name: ["--database-names", "-d"],
                  description:
                    "Space-separated list of the database names to be mirrored. Required if --mirroring is enabled",
                  args: { name: "database-names", isVariadic: true },
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
                  name: ["--server-name", "-s"],
                  description: "Name of the server",
                  args: { name: "server-name" },
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
              name: "stop",
              description:
                "Stop bringing your PostgreSQL data into Microsoft Fabric",
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
                  name: ["--server-name", "-s"],
                  description: "Name of the server",
                  args: { name: "server-name" },
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
              name: "update-databases",
              description: "Update allowed mirrored databases",
              options: [
                {
                  name: ["--database-names", "-d"],
                  description:
                    "Space-separated list of the database names to be mirrored. Required if --mirroring is enabled",
                  args: { name: "database-names", isVariadic: true },
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
                  name: ["--server-name", "-s"],
                  description: "Name of the server",
                  args: { name: "server-name" },
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
          ],
        },
        {
          name: "firewall-rule",
          description: "Manage firewall rules for a server",
          subcommands: [
            {
              name: "create",
              description: "Create a new firewall rule for a flexible server",
              options: [
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
                {
                  name: ["--server-name", "-s"],
                  description: "Name of the server",
                  args: { name: "server-name" },
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
                  name: ["--name", "-n"],
                  description:
                    "The name of the firewall rule. If name is omitted, default name will be chosen for firewall rule name. The firewall rule name can only contain 0-9, a-z, A-Z, '-' and '_'. Additionally, the name of the firewall rule must be at least 3 characters and no more than 128 characters in length",
                  args: { name: "name" },
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
              description: "Delete a firewall rule",
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
                    "The name of the firewall rule. If name is omitted, default name will be chosen for firewall rule name. The firewall rule name can only contain 0-9, a-z, A-Z, '-' and '_'. Additionally, the name of the firewall rule must be at least 3 characters and no more than 128 characters in length",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--server-name", "-s"],
                  description: "Name of the server",
                  args: { name: "server-name" },
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
              description: "List all firewall rules for a flexible server",
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
                  name: ["--server-name", "-s"],
                  description: "Name of the server",
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
              name: "show",
              description: "Get the details of a firewall rule",
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
                    "The name of the firewall rule. If name is omitted, default name will be chosen for firewall rule name. The firewall rule name can only contain 0-9, a-z, A-Z, '-' and '_'. Additionally, the name of the firewall rule must be at least 3 characters and no more than 128 characters in length",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--server-name", "-s"],
                  description: "Name of the server",
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
              description: "Update a firewall rule",
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
                  name: "--end-ip-address",
                  description:
                    "The end IP address of the firewall rule. Must be IPv4 format. Use value '0.0.0.0' to represent all Azure-internal IP addresses",
                  args: { name: "end-ip-address" },
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
                  description:
                    "The name of the firewall rule. If name is omitted, default name will be chosen for firewall rule name. The firewall rule name can only contain 0-9, a-z, A-Z, '-' and '_'. Additionally, the name of the firewall rule must be at least 3 characters and no more than 128 characters in length",
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
                  name: ["--server-name", "-s"],
                  description: "Name of the server",
                  args: { name: "server-name" },
                },
                {
                  name: "--set",
                  description:
                    "Update an object by specifying a property path and value to set. Example: --set property1.property2=<value>",
                  args: { name: "set", isVariadic: true },
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
          name: "identity",
          description: "Manage server user assigned identities",
          subcommands: [
            {
              name: "assign",
              description: "Add user assigned managed identities to the server",
              options: [
                {
                  name: ["--identity", "-n"],
                  description:
                    "Space-separated names or identifiers of identities",
                  args: { name: "identity", isVariadic: true },
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
                  name: ["--server-name", "-s"],
                  description: "Name of the server",
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
                "List all user assigned managed identities from the server",
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
                  name: ["--server-name", "-s"],
                  description: "Name of the server",
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
              name: "remove",
              description:
                "Remove user assigned managed identites from the server",
              options: [
                {
                  name: ["--identity", "-n"],
                  description:
                    "Space-separated names or identifiers of identities",
                  args: { name: "identity", isVariadic: true },
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
                  name: ["--server-name", "-s"],
                  description: "Name of the server",
                  args: { name: "server-name" },
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
              description:
                "Get an user assigned managed identity from the server",
              options: [
                {
                  name: ["--identity", "-n"],
                  description: "Name or identifier of identity to show",
                  args: { name: "identity" },
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
                  name: ["--server-name", "-s"],
                  description: "Name of the server",
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
                "Update to enable or disable system assigned managed identity on the server",
              options: [
                {
                  name: "--system-assigned",
                  description:
                    "Enable or disable system assigned identity to authenticate to cloud services without storing credentials in code. Default is Disabled",
                  args: {
                    name: "system-assigned",
                    suggestions: ["Disabled", "Enabled"],
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
                  name: ["--server-name", "-s"],
                  description: "Name of the server",
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
          name: "maintenance-event",
          description:
            "Manage maintenance events for PostgreSQL flexible servers",
          subcommands: [
            {
              name: "apply-now",
              description: "Apply a maintenance event immediately",
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
                  name: "--maintenance-event-id",
                  description: "The maintenance event identifier",
                  args: { name: "maintenance-event-id" },
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
                  name: ["--server-name", "-s"],
                  description: "Name of the server",
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
              description: "List maintenance events for a flexible server",
              options: [
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
                {
                  name: ["--server-name", "-s"],
                  description: "Name of the server",
                  args: { name: "server-name" },
                  isRequired: true,
                },
                {
                  name: "--maintenance-status",
                  description: "Filter maintenance events by status",
                  args: {
                    name: "maintenance-status",
                    suggestions: ["Past", "Upcoming"],
                  },
                },
              ],
            },
            {
              name: "reschedule",
              description:
                "Reschedule a maintenance event to a new UTC datetime",
              options: [
                {
                  name: ["--start-time", "-t"],
                  description:
                    "New UTC start time to target rescheduling maintenance (ISO8601 format), e.g., 2026-04-10T10:00:00+00:00",
                  args: { name: "start-time" },
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
                  name: "--maintenance-event-id",
                  description: "The maintenance event identifier",
                  args: { name: "maintenance-event-id" },
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
                  name: ["--server-name", "-s"],
                  description: "Name of the server",
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
              name: "show",
              description: "Show details of a maintenance event",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: "--maintenance-event-id",
                  description: "The maintenance event identifier",
                  args: { name: "maintenance-event-id" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--server-name", "-s"],
                  description: "Name of the server",
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
          name: "microsoft-entra-admin",
          description: "Manage server Microsoft Entra administrators",
          subcommands: [
            {
              name: "create",
              description: "Create a Microsoft Entra administrator",
              options: [
                {
                  name: ["--display-name", "-u"],
                  description:
                    "Display name of the Microsoft Entra administrator user or group",
                  args: { name: "display-name" },
                  isRequired: true,
                },
                {
                  name: ["--object-id", "-i"],
                  description:
                    "The unique identifier of the Microsoft Entra administrator",
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
                  name: ["--server-name", "-s"],
                  description: "Name of the server",
                  args: { name: "server-name" },
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
                  name: ["--type", "-t"],
                  description: "Type of the Microsoft Entra administrator",
                  args: {
                    name: "type",
                    suggestions: [
                      "Group",
                      "ServicePrincipal",
                      "Unknown",
                      "User",
                    ],
                  },
                },
              ],
            },
            {
              name: "delete",
              description: "Delete a Microsoft Entra administrator",
              options: [
                {
                  name: ["--object-id", "-i"],
                  description:
                    "The unique identifier of the Microsoft Entra administrator",
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
                  name: ["--server-name", "-s"],
                  description: "Name of the server",
                  args: { name: "server-name" },
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
              description: "List all Microsoft Entra administrators",
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
                  name: ["--server-name", "-s"],
                  description: "Name of the server",
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
              name: "show",
              description: "Get a Microsoft Entra administrator",
              options: [
                {
                  name: ["--object-id", "-i"],
                  description:
                    "The unique identifier of the Microsoft Entra administrator",
                  args: { name: "object-id" },
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
                  name: ["--server-name", "-s"],
                  description: "Name of the server",
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
              name: "wait",
              description:
                "Wait for a Microsoft Entra administrator to satisfy certain conditions",
              options: [
                {
                  name: ["--object-id", "-i"],
                  description:
                    "The unique identifier of the Microsoft Entra administrator",
                  args: { name: "object-id" },
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
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--server-name", "-s"],
                  description: "Name of the server",
                  args: { name: "server-name" },
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
          name: "migration",
          description:
            "Manage migration workflows for PostgreSQL Flexible Servers",
          subcommands: [
            {
              name: "check-name-availability",
              description: "Checks if the provided migration-name can be used",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "Name of the migration",
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
                  name: ["--server-name", "-s"],
                  description: "Migration target server name",
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
              name: "create",
              description:
                "Create a new migration workflow for a flexible server",
              options: [
                {
                  name: ["--properties", "-b"],
                  description:
                    "Request properties. Use double or no quotes to pass in json filepath as argument",
                  args: { name: "properties" },
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
                  name: ["--server-name", "-s"],
                  description: "Migration target server name",
                  args: { name: "server-name" },
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
                  name: "--migration-mode",
                  description: "Either offline or online(with CDC) migration",
                  args: {
                    name: "migration-mode",
                    suggestions: ["offline", "online"],
                  },
                },
                {
                  name: "--migration-option",
                  description:
                    "Supported Migration Option. Default is ValidateAndMigrate",
                  args: {
                    name: "migration-option",
                    suggestions: ["Migrate", "Validate", "ValidateAndMigrate"],
                  },
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the migration",
                  args: { name: "name" },
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
              name: "list",
              description: "List the migrations of a flexible server",
              options: [
                {
                  name: "--filter",
                  description:
                    "Indicate whether all the migrations or just the Active migrations are returned. Valid values are: Active and All",
                  args: { name: "filter", suggestions: ["Active", "All"] },
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
                  name: ["--server-name", "-s"],
                  description: "Migration target server name",
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
              name: "show",
              description: "Get the details of a specific migration",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "Name of the migration",
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
                  name: ["--server-name", "-s"],
                  description: "Migration target server name",
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
              description: "Update a specific migration",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "Name of the migration",
                  args: { name: "name" },
                  isRequired: true,
                },
                acquirePolicyToken,
                {
                  name: "--cancel",
                  description:
                    "Cancel the data migration for all the databases",
                },
                changeReference,
                {
                  name: "--cutover",
                  description:
                    "Cut-over the data migration for all the databases in the migration. After this is complete, subsequent updates to all databases will not be migrated to the target",
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
                  name: ["--server-name", "-s"],
                  description: "Migration target server name",
                  args: { name: "server-name" },
                },
                {
                  name: "--setup-replication",
                  description:
                    "Allow the migration workflow to setup logical replication on the source. Note that this command will restart the source server",
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
          name: "parameter",
          description:
            "Commands for managing server parameter values for flexible server",
          subcommands: [
            {
              name: "list",
              description: "List the parameter values for a flexible server",
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
                  name: ["--server-name", "-s"],
                  description: "Name of the server",
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
              name: "set",
              description: "Update the parameter of a flexible server",
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
                  description: "The name of the server configuration",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--server-name", "-s"],
                  description: "Name of the server",
                  args: { name: "server-name" },
                },
                {
                  name: "--source",
                  description: "Source of the configuration",
                  args: { name: "source" },
                },
                {
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
                },
                {
                  name: ["--value", "-v"],
                  description: "Value of the configuration",
                  args: { name: "value" },
                },
              ],
            },
            {
              name: "show",
              description: 'Get the parameter for a flexible server."',
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: ["--name", "-n"],
                  description: "The name of the server configuration",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--server-name", "-s"],
                  description: "Name of the server",
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
          name: "private-endpoint-connection",
          description:
            "Manage PostgreSQL flexible server private endpoint connections",
          subcommands: [
            {
              name: "approve",
              description:
                "Approve the specified private endpoint connection associated with a PostgreSQL flexible server",
              options: [
                {
                  name: "--description",
                  description: "Comments for approve operation",
                  args: { name: "description" },
                  isRequired: true,
                },
                acquirePolicyToken,
                changeReference,
                {
                  name: "--id",
                  description:
                    "The identifier of the private endpoint connection associated with the Server. If specified --server-name/-s and --name/-n, this should be omitted",
                  args: { name: "id" },
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
                    "The name of the private endpoint connection associated with the Server. Required if --id is not specified",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--server-name", "-s"],
                  description: "Name of the server",
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
              name: "delete",
              description:
                "Delete the specified private endpoint connection associated with a PostgreSQL flexible server",
              options: [
                acquirePolicyToken,
                changeReference,
                {
                  name: "--id",
                  description:
                    "The identifier of the private endpoint connection associated with the Server. If specified --server-name/-s and --name/-n, this should be omitted",
                  args: { name: "id" },
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
                    "The name of the private endpoint connection associated with the Server. Required if --id is not specified",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--server-name", "-s"],
                  description: "Name of the server",
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
                "List all private endpoint connections associated with a PostgreSQL flexible server",
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
                  name: ["--server-name", "-s"],
                  description: "Name of the server",
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
              name: "reject",
              description:
                "Reject the specified private endpoint connection associated with a PostgreSQL flexible server",
              options: [
                {
                  name: "--description",
                  description: "Comments for reject operation",
                  args: { name: "description" },
                  isRequired: true,
                },
                acquirePolicyToken,
                changeReference,
                {
                  name: "--id",
                  description:
                    "The identifier of the private endpoint connection associated with the Server. If specified --server-name/-s and --name/-n, this should be omitted",
                  args: { name: "id" },
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
                    "The name of the private endpoint connection associated with the Server. Required if --id is not specified",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--server-name", "-s"],
                  description: "Name of the server",
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
              name: "show",
              description:
                "Show details of a private endpoint connection associated with a PostgreSQL flexible server",
              options: [
                {
                  name: "--id",
                  description:
                    "The identifier of the private endpoint connection associated with the Server. If specified --server-name/-s and --name/-n, this should be omitted",
                  args: { name: "id" },
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
                    "The name of the private endpoint connection associated with the Server. Required if --id is not specified",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--server-name", "-s"],
                  description: "Name of the server",
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
          name: "private-link-resource",
          description:
            "Get Private link resource for a PostgreSQL flexible server",
          subcommands: [
            {
              name: "list",
              description:
                "List private link resources associated with a PostgreSQL flexible server",
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
                  name: ["--server-name", "-s"],
                  description: "Name of the server",
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
              name: "show",
              description:
                "Get private link resource for a PostgreSQL flexible server",
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
                  name: ["--server-name", "-s"],
                  description: "Name of the server",
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
          name: "replica",
          description: "Manage read replicas",
          subcommands: [
            {
              name: "create",
              description: "Create a read replica for a server",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "Name of the read replica",
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
                  name: "--source-server",
                  description:
                    "The name or resource identifier of the source server to restore from",
                  args: { name: "source-server" },
                  isRequired: true,
                },
                acquirePolicyToken,
                {
                  name: ["--backup-federated-client-id", "-f"],
                  description:
                    "The client ID of the geo backup federated identity",
                  args: { name: "backup-federated-client-id" },
                },
                changeReference,
                {
                  name: "--federated-client-id",
                  description: "The client ID of the federated identity",
                  args: { name: "federated-client-id" },
                },
                {
                  name: "--identity",
                  description:
                    "The name or resource identifier of the user assigned identity for data encryption",
                  args: { name: "identity" },
                },
                {
                  name: "--key",
                  description:
                    "The resource identifier of the primary keyvault key for data encryption",
                  args: { name: "key" },
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
                  name: "--performance-tier",
                  description: "Performance tier of the server",
                  args: { name: "performance-tier" },
                },
                {
                  name: "--private-dns-zone",
                  description:
                    "This parameter only applies for a server with private access and is required when using --vnet or --subnet. The name or resource identifier of an existing private DNS zone. You can use a private DNS zone from the same resource group, a different resource group, or a different subscription. If you want to use a zone from a different resource group or subscription, please provide its resource identifier",
                  args: { name: "private-dns-zone" },
                },
                {
                  name: "--sku-name",
                  description:
                    "The name of the compute SKU. Follows the convention Standard_{VM name}. Examples: Standard_B1ms",
                  args: { name: "sku-name" },
                },
                {
                  name: "--storage-size",
                  description:
                    "The storage capacity of the server. Minimum is 32 GiB and max is 16 TiB",
                  args: { name: "storage-size" },
                },
                {
                  name: "--storage-type",
                  description:
                    "Storage type for the read replica. Allowed value is PremiumV2_LRS. Default is for the read replica to match storage type of the primary server",
                  args: {
                    name: "storage-type",
                    suggestions: ["PremiumV2_LRS"],
                  },
                },
                {
                  name: "--subnet",
                  description:
                    "Name or identifier of an existing subnet. If you want to use a subnet from a different resource group or subscription, please provide its resource identifier instead of name",
                  args: { name: "subnet" },
                },
                {
                  name: "--tags",
                  description:
                    "Space-separated tags: key[=value] [key[=value] ...]. Use '' to clear existing tags",
                  args: { name: "tags", isOptional: true, isVariadic: true },
                },
                {
                  name: "--tier",
                  description:
                    "Compute tier of the server. Accepted values: Burstable, GeneralPurpose, MemoryOptimized",
                  args: { name: "tier" },
                },
                {
                  name: "--vnet",
                  description:
                    "Name or identifier of an existing virtual network. If you want to use a vnet from a different resource group or subscription, please provide a resource identifier. The name must be between 2 to 64 characters. The name must begin with a letter or number, end with a letter, number or underscore, and may contain only letters, numbers, underscores, periods, or hyphens",
                  args: { name: "vnet" },
                },
                {
                  name: ["--yes", "-y"],
                  description: "Do not prompt for confirmation",
                },
                {
                  name: ["--zone", "-z"],
                  description:
                    "Availability zone into which to provision the resource",
                  args: { name: "zone" },
                },
              ],
            },
            {
              name: "list",
              description: "List all read replicas for a given server",
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
                    "Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters",
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
              name: "promote",
              description:
                "Stop replication of a read replica and promote it to an independent server or as a primary server",
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
                  description: "Name of the read replica",
                  args: { name: "name" },
                },
                {
                  name: "--promote-mode",
                  description:
                    "Whether to promote read replica to an independent server or promote it as a primary server",
                  args: {
                    name: "promote-mode",
                    suggestions: ["standalone", "switchover"],
                  },
                },
                {
                  name: "--promote-option",
                  description:
                    "Whether to sync data before promoting read replica or promote as soon as possible",
                  args: {
                    name: "promote-option",
                    suggestions: ["forced", "planned"],
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
          ],
        },
        {
          name: "server-logs",
          description:
            "Manage server logs (log files) for a PostgreSQL flexible server",
          subcommands: [
            {
              name: "download",
              description:
                "Download log files for a PostgreSQL flexible server",
              options: [
                {
                  name: ["--name", "-n"],
                  description:
                    "Space-separated list of log filenames on the server to download",
                  args: { name: "name", isVariadic: true },
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
                  name: ["--server-name", "-s"],
                  description: "Name of the server",
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
              description: "List log files for a PostgreSQL flexible server",
              options: [
                {
                  name: "--file-last-written",
                  description:
                    "Integer in hours to indicate file last modify time",
                  args: { name: "file-last-written" },
                },
                {
                  name: "--filename-contains",
                  description: "The pattern that file name should match",
                  args: { name: "filename-contains" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: "--max-file-size",
                  description: "The file size limitation to filter files",
                  args: { name: "max-file-size" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--server-name", "-s"],
                  description: "Name of the server",
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
          name: "virtual-endpoint",
          description:
            "Manage virtual endpoints for a PostgreSQL flexible server",
          subcommands: [
            {
              name: "create",
              description:
                "Create a new virtual endpoint for a flexible server",
              options: [
                {
                  name: ["--endpoint-type", "-t"],
                  description:
                    "Virtual Endpoints offer two distinct types of connection points. Writer endpoint (Read/Write), this endpoint always points to the current primary server. Read-only endpoint, This endpoint can point to either a read replica or primary server",
                  args: { name: "endpoint-type", suggestions: ["ReadWrite"] },
                  isRequired: true,
                },
                {
                  name: ["--members", "-m"],
                  description:
                    "The read replicas the virtual endpoints point to",
                  args: { name: "members" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the virtual endpoint. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters",
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
                  name: ["--server-name", "-s"],
                  description: "Name of the server",
                  args: { name: "server-name" },
                  isRequired: true,
                },
                acquirePolicyToken,
                changeReference,
              ],
            },
            {
              name: "delete",
              description: "Delete a virtual endpoint",
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
                    "Name of the virtual endpoint. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--server-name", "-s"],
                  description: "Name of the server",
                  args: { name: "server-name" },
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
              description: "List all virtual endpoints for a flexible server",
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
                  name: ["--server-name", "-s"],
                  description: "Name of the server",
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
              name: "show",
              description: "Get the details of a virtual endpoint",
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
                    "Name of the virtual endpoint. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--server-name", "-s"],
                  description: "Name of the server",
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
              description: "Update a virtual endpoint",
              options: [
                {
                  name: ["--endpoint-type", "-t"],
                  description:
                    "Virtual Endpoints offer two distinct types of connection points. Writer endpoint (Read/Write), this endpoint always points to the current primary server. Read-only endpoint, This endpoint can point to either a read replica or primary server",
                  args: { name: "endpoint-type", suggestions: ["ReadWrite"] },
                  isRequired: true,
                },
                {
                  name: ["--members", "-m"],
                  description:
                    "The read replicas the virtual endpoints point to",
                  args: { name: "members" },
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
                  description:
                    "Name of the virtual endpoint. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--server-name", "-s"],
                  description: "Name of the server",
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
      ],
    },
  ],
};

export default completion;
