// Azure CLI v2.93.0 root: one file per top-level group/command in az/2.93.0/ (see index.ts for the source)
const completion: Fig.Spec = {
  name: "az",
  subcommands: [
    {
      name: "account",
      description: "Manage Azure subscription information",
      loadSpec: "az/2.93.0/account",
    },
    {
      name: "acr",
      description: "Manage private registries with Azure Container Registries",
      loadSpec: "az/2.93.0/acr",
    },
    {
      name: "ad",
      description:
        "Manage Microsoft Entra ID (formerly known as Azure Active Directory, Azure AD, AAD) entities needed for Azure role-based access control (Azure RBAC) through Microsoft Graph API",
      loadSpec: "az/2.93.0/ad",
    },
    {
      name: "advisor",
      description: "Manage Azure Advisor",
      loadSpec: "az/2.93.0/advisor",
    },
    {
      name: "aks",
      description: "Azure Kubernetes Service",
      loadSpec: "az/2.93.0/aks",
    },
    {
      name: "ams",
      description: "Manage Azure Media Services resources",
      loadSpec: "az/2.93.0/ams",
    },
    {
      name: "apim",
      description: "Manage Azure API Management services",
      loadSpec: "az/2.93.0/apim",
    },
    {
      name: "appconfig",
      description: "Manage App Configurations",
      loadSpec: "az/2.93.0/appconfig",
    },
    {
      name: "appservice",
      description: "Manage Appservice",
      loadSpec: "az/2.93.0/appservice",
    },
    {
      name: "aro",
      description: "Manage Azure Red Hat OpenShift resource types",
      loadSpec: "az/2.93.0/aro",
    },
    {
      name: "backup",
      description: "Manage Azure Backups",
      loadSpec: "az/2.93.0/backup",
    },
    {
      name: "batch",
      description: "Manage Azure Batch",
      loadSpec: "az/2.93.0/batch",
    },
    {
      name: "bicep",
      description: "Bicep CLI command group",
      loadSpec: "az/2.93.0/bicep",
    },
    {
      name: "billing",
      description: "Manage Azure Billing",
      loadSpec: "az/2.93.0/billing",
    },
    {
      name: "bot",
      description: "Manage Microsoft Azure Bot Service",
      loadSpec: "az/2.93.0/bot",
    },
    {
      name: "cache",
      description:
        "Commands to manage CLI objects cached using the --defer argument",
      loadSpec: "az/2.93.0/cache",
    },
    {
      name: "capacity",
      description: "Manage capacity",
      loadSpec: "az/2.93.0/capacity",
    },
    {
      name: "cloud",
      description: "Manage registered Azure clouds",
      loadSpec: "az/2.93.0/cloud",
    },
    {
      name: "cognitiveservices",
      description: "Manage Cognitive Services",
      loadSpec: "az/2.93.0/cognitiveservices",
    },
    {
      name: "compute-fleet",
      description: "Manage for Azure Compute Fleet",
      loadSpec: "az/2.93.0/compute-fleet",
    },
    {
      name: "compute-recommender",
      description:
        "Manage sku/zone/region recommender info for compute resources",
      loadSpec: "az/2.93.0/compute-recommender",
    },
    {
      name: "config",
      description: "Manage Azure CLI configuration",
      loadSpec: "az/2.93.0/config",
    },
    {
      name: "configure",
      description:
        "Manage Azure CLI configuration. This command is interactive",
      loadSpec: "az/2.93.0/configure",
    },
    {
      name: "connection",
      description:
        "Commands to manage Service Connector local connections which allow local environment to connect Azure Resource. If you want to manage connection for compute service, please run 'az webapp/containerapp/spring connection'",
      loadSpec: "az/2.93.0/connection",
    },
    {
      name: "consumption",
      description: "Manage consumption of Azure resources",
      loadSpec: "az/2.93.0/consumption",
    },
    {
      name: "container",
      description: "Manage Azure Container Instances",
      loadSpec: "az/2.93.0/container",
    },
    {
      name: "containerapp",
      description: "Manage Azure Container Apps",
      loadSpec: "az/2.93.0/containerapp",
    },
    {
      name: "cosmosdb",
      description: "Manage Azure Cosmos DB database accounts",
      loadSpec: "az/2.93.0/cosmosdb",
    },
    {
      name: "data-boundary",
      description: "Data boundary operations",
      loadSpec: "az/2.93.0/data-boundary",
    },
    {
      name: "databoxedge",
      description: "Manage device with databoxedge",
      loadSpec: "az/2.93.0/databoxedge",
    },
    {
      name: "deployment",
      description:
        "Manage Azure Resource Manager template deployment at subscription scope",
      loadSpec: "az/2.93.0/deployment",
    },
    {
      name: "deployment-scripts",
      description:
        "Manage deployment scripts at subscription or resource group scope",
      loadSpec: "az/2.93.0/deployment-scripts",
    },
    {
      name: "disk",
      description: "Manage Azure Managed Disks",
      loadSpec: "az/2.93.0/disk",
    },
    {
      name: "disk-access",
      description: "Manage disk access resources",
      loadSpec: "az/2.93.0/disk-access",
    },
    {
      name: "disk-encryption-set",
      description: "Disk Encryption Set resource",
      loadSpec: "az/2.93.0/disk-encryption-set",
    },
    {
      name: "dls",
      description: "Manage Data Lake Store accounts and filesystems",
      loadSpec: "az/2.93.0/dls",
    },
    {
      name: "dms",
      description: "Manage Azure Data Migration Service (classic) instances",
      loadSpec: "az/2.93.0/dms",
    },
    {
      name: "eventgrid",
      description:
        "Manage Azure Event Grid topics, domains, domain topics, system topics partner topics, event subscriptions, system topic event subscriptions and partner topic event subscriptions",
      loadSpec: "az/2.93.0/eventgrid",
    },
    {
      name: "eventhubs",
      description: "Manage Event Hub",
      loadSpec: "az/2.93.0/eventhubs",
    },
    {
      name: "extension",
      description: "Manage and update CLI extensions",
      loadSpec: "az/2.93.0/extension",
    },
    {
      name: "feature",
      description: "Manage resource provider features",
      loadSpec: "az/2.93.0/feature",
    },
    {
      name: "feedback",
      description: "Send feedback to the Azure CLI Team",
      loadSpec: "az/2.93.0/feedback",
    },
    {
      name: "find",
      description:
        "I'm an AI assistant, my advice is based on Microsoft Learn documentation as well as the usage patterns of Azure CLI and Azure ARM users. Using me improves Azure products and documentation",
      loadSpec: "az/2.93.0/find",
    },
    {
      name: "functionapp",
      description:
        "Manage function apps. To install the Azure Functions Core tools see https://github.com/Azure/azure-functions-core-tools",
      loadSpec: "az/2.93.0/functionapp",
    },
    {
      name: "group",
      description: "Manage resource groups and template deployments",
      loadSpec: "az/2.93.0/group",
    },
    {
      name: "hdinsight",
      description: "Manage HDInsight resources",
      loadSpec: "az/2.93.0/hdinsight",
    },
    {
      name: "identity",
      description: "Manage Managed Identity",
      loadSpec: "az/2.93.0/identity",
    },
    {
      name: "image",
      description: "Manage custom virtual machine images",
      loadSpec: "az/2.93.0/image",
    },
    {
      name: "interactive",
      description:
        "Start interactive mode. Installs the Interactive extension if not installed already",
      loadSpec: "az/2.93.0/interactive",
    },
    {
      name: "iot",
      description: "Manage Internet of Things (IoT) assets",
      loadSpec: "az/2.93.0/iot",
    },
    {
      name: "keyvault",
      description: "Manage KeyVault keys, secrets, and certificates",
      loadSpec: "az/2.93.0/keyvault",
    },
    {
      name: "lab",
      description: "Manage azure devtest labs",
      loadSpec: "az/2.93.0/lab",
    },
    {
      name: "lock",
      description: "Manage Azure locks",
      loadSpec: "az/2.93.0/lock",
    },
    {
      name: "logicapp",
      description: "Manage logic apps",
      loadSpec: "az/2.93.0/logicapp",
    },
    {
      name: "login",
      description: "Log in to Azure",
      loadSpec: "az/2.93.0/login",
    },
    {
      name: "logout",
      description: "Log out to remove access to Azure subscriptions",
      loadSpec: "az/2.93.0/logout",
    },
    {
      name: "managed-cassandra",
      description: "Azure Managed Cassandra",
      loadSpec: "az/2.93.0/managed-cassandra",
    },
    {
      name: "managedapp",
      description:
        "Manage template solutions provided and maintained by Independent Software Vendors (ISVs)",
      loadSpec: "az/2.93.0/managedapp",
    },
    {
      name: "managedservices",
      description:
        "Manage the registration assignments and definitions in Azure",
      loadSpec: "az/2.93.0/managedservices",
    },
    {
      name: "maps",
      description: "Manage Azure Maps",
      loadSpec: "az/2.93.0/maps",
    },
    {
      name: "mariadb",
      description: "Manage Azure Database for MariaDB servers",
      loadSpec: "az/2.93.0/mariadb",
    },
    {
      name: "monitor",
      description: "Manage the Azure Monitor Service",
      loadSpec: "az/2.93.0/monitor",
    },
    {
      name: "mysql",
      description: "Manage Azure Database for MySQL servers",
      loadSpec: "az/2.93.0/mysql",
    },
    {
      name: "netappfiles",
      description: "Manage Azure NetApp Files (ANF) Resources",
      loadSpec: "az/2.93.0/netappfiles",
    },
    {
      name: "network",
      description: "Manage Azure Network resources",
      loadSpec: "az/2.93.0/network",
    },
    {
      name: "policy",
      description:
        "Manage resources defined and used by the Azure Policy service",
      loadSpec: "az/2.93.0/policy",
    },
    {
      name: "postgres",
      description: "Manage Azure Database for PostgreSQL",
      loadSpec: "az/2.93.0/postgres",
    },
    {
      name: "ppg",
      description: "Manage Proximity Placement Groups",
      loadSpec: "az/2.93.0/ppg",
    },
    {
      name: "private-link",
      description: "Private-link association CLI command group",
      loadSpec: "az/2.93.0/private-link",
    },
    {
      name: "provider",
      description: "Manage resource providers",
      loadSpec: "az/2.93.0/provider",
    },
    {
      name: "redis",
      description: "Manage dedicated Redis caches for your Azure applications",
      loadSpec: "az/2.93.0/redis",
    },
    {
      name: "relay",
      description:
        "Manage Azure Relay Service namespaces, WCF relays, hybrid connections, and rules",
      loadSpec: "az/2.93.0/relay",
    },
    {
      name: "resource",
      description: "Manage Azure resources",
      loadSpec: "az/2.93.0/resource",
    },
    {
      name: "resourcemanagement",
      description: "Resourcemanagement CLI command group",
      loadSpec: "az/2.93.0/resourcemanagement",
    },
    {
      name: "rest",
      description: "Invoke a custom request",
      loadSpec: "az/2.93.0/rest",
    },
    {
      name: "restore-point",
      description: "Manage restore point with res",
      loadSpec: "az/2.93.0/restore-point",
    },
    {
      name: "role",
      description: "Manage Azure role-based access control (Azure RBAC)",
      loadSpec: "az/2.93.0/role",
    },
    {
      name: "search",
      description: "Manage Azure AI Search",
      loadSpec: "az/2.93.0/search",
    },
    {
      name: "security",
      description:
        "Manage your security posture with Microsoft Defender for Cloud",
      loadSpec: "az/2.93.0/security",
    },
    {
      name: "servicebus",
      description: "Manage Service Bus",
      loadSpec: "az/2.93.0/servicebus",
    },
    {
      name: "sf",
      description: "Manage and administer Azure Service Fabric clusters",
      loadSpec: "az/2.93.0/sf",
    },
    {
      name: "sig",
      description: "Manage shared image gallery",
      loadSpec: "az/2.93.0/sig",
    },
    {
      name: "signalr",
      description: "Manage Azure SignalR Service",
      loadSpec: "az/2.93.0/signalr",
    },
    {
      name: "snapshot",
      description:
        "Manage point-in-time copies of managed disks, native blobs, or other snapshots",
      loadSpec: "az/2.93.0/snapshot",
    },
    {
      name: "sql",
      description: "Manage Azure SQL Databases and Data Warehouses",
      loadSpec: "az/2.93.0/sql",
    },
    {
      name: "sshkey",
      description: "Manage ssh public key with vm",
      loadSpec: "az/2.93.0/sshkey",
    },
    {
      name: "stack",
      description:
        "A deployment stack is a native Azure resource type that enables you to perform operations on a resource collection as an atomic unit",
      loadSpec: "az/2.93.0/stack",
    },
    {
      name: "stack-whatif",
      description:
        "A deployment stack What-If is a preview of an operation to be performed on a new or existing deployment stack",
      loadSpec: "az/2.93.0/stack-whatif",
    },
    {
      name: "staticwebapp",
      description: "Manage static apps",
      loadSpec: "az/2.93.0/staticwebapp",
    },
    {
      name: "storage",
      description: "Manage Azure Cloud Storage resources",
      loadSpec: "az/2.93.0/storage",
    },
    {
      name: "survey",
      description: "Take Azure CLI survey",
      loadSpec: "az/2.93.0/survey",
    },
    {
      name: "synapse",
      description: "Manage and operate Synapse Workspace, Spark Pool, SQL Pool",
      loadSpec: "az/2.93.0/synapse",
    },
    {
      name: "tag",
      description: "Tag Management on a resource",
      loadSpec: "az/2.93.0/tag",
    },
    {
      name: "term",
      description: "Manage marketplace agreement with marketplaceordering",
      loadSpec: "az/2.93.0/term",
    },
    {
      name: "ts",
      description:
        "Manage template specs at subscription or resource group scope",
      loadSpec: "az/2.93.0/ts",
    },
    {
      name: "upgrade",
      description: "Upgrade Azure CLI and extensions",
      loadSpec: "az/2.93.0/upgrade",
    },
    {
      name: "version",
      description:
        "Show the versions of Azure CLI modules and extensions in JSON format by default or format configured by --output",
      loadSpec: "az/2.93.0/version",
    },
    {
      name: "vm",
      description: "Manage Linux or Windows virtual machines",
      loadSpec: "az/2.93.0/vm",
    },
    {
      name: "vmss",
      description:
        "Manage groupings of virtual machines in an Azure Virtual Machine Scale Set (VMSS)",
      loadSpec: "az/2.93.0/vmss",
    },
    {
      name: "webapp",
      description: "Manage web apps",
      loadSpec: "az/2.93.0/webapp",
    },
  ],
  options: [
    {
      name: "--debug",
      description: "Increase logging verbosity to show all debug logs",
      isPersistent: true,
    },
    {
      name: ["--help", "-h"],
      description: "Show this help message and exit",
      isPersistent: true,
    },
    {
      name: "--only-show-errors",
      description: "Only show errors, suppressing warnings",
      isPersistent: true,
    },
    {
      name: ["--output", "-o"],
      description: "Output format",
      args: {
        name: "output",
        suggestions: ["json", "jsonc", "none", "table", "tsv", "yaml", "yamlc"],
      },
      isPersistent: true,
    },
    {
      name: "--query",
      description:
        "JMESPath query string. See http://jmespath.org/ for more information and examples",
      args: { name: "query" },
      isPersistent: true,
    },
    {
      name: "--subscription",
      description:
        "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
      args: { name: "subscription" },
      isPersistent: true,
    },
    {
      name: "--verbose",
      description:
        "Increase logging verbosity. Use --debug for full debug logs",
      isPersistent: true,
    },
  ],
};

const versions: Fig.VersionDiffMap = { "2.93.0": {} };

export { versions };
export default completion;
