// MongoDB Atlas CLI v1.60.0 (GitHub release, 2026-11-12). Source: `--help` on
// every subcommand of the release binary, walked with a Cobra help parser.

const outputFlag: Fig.Option = {
  name: ["--output", "-o"],
  description: "Output format",
  args: {
    name: "output",
    suggestions: ["json", "json-path", "go-template", "go-template-file"],
  },
};
const forceFlag: Fig.Option = {
  name: "--force",
  description:
    "Flag that indicates whether to skip the confirmation prompt before proceeding with the requested action",
};
const autoScalingModeFlag: Fig.Option = {
  name: "--autoScalingMode",
  description: "Mode in which the cluster scales",
  args: {
    name: "autoScalingMode",
    suggestions: ["clusterWideScaling", "independentShardScaling"],
    default: "clusterWideScaling",
  },
};
const clusterNameFlag: Fig.Option = {
  name: "--clusterName",
  description: "Name of the cluster",
  args: { name: "clusterName" },
};
const currentIpFlag: Fig.Option = {
  name: "--currentIp",
  description:
    "Flag that adds the IP address from the host that is currently executing the command to the access list",
};
const enableTerminationProtectionFlag: Fig.Option = {
  name: "--enableTerminationProtection",
  description: "Enables termination protection for your cluster",
};
const passwordFlag: Fig.Option = {
  name: "--password",
  description: "Password for the user",
  args: { name: "password" },
};
const projectIdFlag: Fig.Option = {
  name: "--projectId",
  description: "Hexadecimal string that identifies the project to use",
  args: { name: "projectId" },
};
const providerFlag: Fig.Option = {
  name: "--provider",
  description: "Name of your cloud service provider",
  args: { name: "provider", suggestions: ["AWS", "AZURE", "GCP"] },
};
const tagFlag: Fig.Option = {
  name: "--tag",
  description:
    "List that contains key-value pairs between 1 to 255 characters in length for tagging and categorizing the cluster",
  args: { name: "tag" },
  isRepeatable: true,
};
const limitFlag: Fig.Option = {
  name: "--limit",
  description: "Number of items per results page, up to a maximum of 500",
  args: { name: "limit", default: "100" },
};
const omitCountFlag: Fig.Option = {
  name: "--omitCount",
  description:
    "Flag that indicates whether the JSON response returns the total number of items (totalCount) in the JSON response",
};
const orgIdFlag: Fig.Option = {
  name: "--orgId",
  description: "Organization ID to use",
  args: { name: "orgId" },
};
const pageFlag: Fig.Option = {
  name: "--page",
  description: "Page number that specifies a page of results",
  args: { name: "page", default: "1" },
};
const compactFlag: Fig.Option = {
  name: ["--compact", "-c"],
  description:
    "Flag that enables the compact array response structure for a json output",
};
const descFlag: Fig.Option = {
  name: "--desc",
  description: "Description of the API key",
  args: { name: "desc" },
};
const roleFlag: Fig.Option = {
  name: "--role",
  description: "Role or roles that you want to assign to the API key",
  args: { name: "role" },
  isRepeatable: true,
};
const federationSettingsIdFlag: Fig.Option = {
  name: "--federationSettingsId",
  description:
    "Unique 24-hexadecimal digit string that identifies the federation settings",
  args: { name: "federationSettingsId" },
};
const emailFlag: Fig.Option = {
  name: "--email",
  description: "Email address for the user",
  args: { name: "email" },
};
const teamIdFlag: Fig.Option = {
  name: "--teamId",
  description: "Unique 24-digit string that identifies the team",
  args: { name: "teamId" },
};
const tierFlag: Fig.Option = {
  name: "--tier",
  description: "Tier for each data-bearing server in the cluster",
  args: { name: "tier" },
};
const fileFlag: Fig.Option = {
  name: ["--file", "-f"],
  description:
    "Path to an optional JSON configuration file that defines cluster settings",
  args: { name: "file", template: "filepaths" },
};
const mdbVersionFlag: Fig.Option = {
  name: "--mdbVersion",
  description: "Major MongoDB version of the cluster",
  args: { name: "mdbVersion" },
};
const watchFlag: Fig.Option = {
  name: ["--watch", "-w"],
  description:
    "Flag that indicates whether to watch the command until it completes its execution or the watch times out",
};
const watchTimeoutFlag: Fig.Option = {
  name: "--watchTimeout",
  description: "Time in seconds until a watch times out",
  args: { name: "watchTimeout" },
};
const collectionFlag: Fig.Option = {
  name: "--collection",
  description: "Name of the collection",
  args: { name: "collection" },
};
const dbFlag: Fig.Option = {
  name: "--db",
  description: "Name of the database",
  args: { name: "db" },
};
const fileFlag2: Fig.Option = {
  name: ["--file", "-f"],
  description: "Name of the JSON index configuration file to use",
  args: { name: "file", template: "filepaths" },
};
const commentFlag: Fig.Option = {
  name: "--comment",
  description: "Optional description or comment for the entry",
  args: { name: "comment" },
};
const outFlag: Fig.Option = {
  name: "--out",
  description: "Output file name",
  args: { name: "out", template: "filepaths" },
};
const bucketIdFlag: Fig.Option = {
  name: "--bucketId",
  description: "Unique identifier that Atlas assigns to the bucket",
  args: { name: "bucketId" },
};
const retentionUnitFlag: Fig.Option = {
  name: "--retentionUnit",
  description:
    "Unit of time in which Atlas measures snapshot retention: 'days' 'weeks' 'months'",
  args: { name: "retentionUnit" },
};
const retentionValueFlag: Fig.Option = {
  name: "--retentionValue",
  description:
    "Duration in days, weeks, or months that Atlas retains the snapshot",
  args: { name: "retentionValue" },
};
const endFlag: Fig.Option = {
  name: "--end",
  description:
    "ISO 8601-formatted date and time that specifies when to stop retrieving measurements",
  args: { name: "end" },
};
const granularityFlag: Fig.Option = {
  name: "--granularity",
  description:
    "ISO 8601-formatted duration that specifies the interval between measurement data points",
  args: { name: "granularity" },
};
const periodFlag: Fig.Option = {
  name: "--period",
  description:
    "ISO 8601-formatted time period that specifies the length of time in the past to query",
  args: { name: "period" },
};
const startFlag: Fig.Option = {
  name: "--start",
  description:
    "ISO 8601-formatted date and time that specifies when to start retrieving measurements",
  args: { name: "start" },
};
const durationFlag: Fig.Option = {
  name: "--duration",
  description:
    "Length of time in milliseconds for which you want to return results",
  args: { name: "duration" },
};
const processNameFlag: Fig.Option = {
  name: "--processName",
  description:
    "Unique identifier for the host of a MongoDB process in the following format: {hostname}:{port}. You can obtain a list of possible values from the 'id' field when you run the 'atlas processes list' command",
  args: { name: "processName" },
};
const sinceFlag: Fig.Option = {
  name: "--since",
  description:
    "Date and time from which the query retrieves the suggested indexes",
  args: { name: "since" },
};
const namespacesFlag: Fig.Option = {
  name: "--namespaces",
  description: "Namespaces from which to retrieve suggested indexes",
  args: { name: "namespaces" },
  isRepeatable: true,
};
const forceFlag2: Fig.Option = {
  name: "--force",
  description: "Flag that indicates whether to overwrite the destination file",
};
const regionFlag: Fig.Option = {
  name: "--region",
  description:
    "Cloud provider region in which you want to create the private endpoint connection",
  args: { name: "region" },
};
const endpointServiceIdFlag: Fig.Option = {
  name: "--endpointServiceId",
  description:
    "Unique 24-character alphanumeric string that identifies the private endpoint in Atlas",
  args: { name: "endpointServiceId" },
};
const atlasCidrBlockFlag: Fig.Option = {
  name: "--atlasCidrBlock",
  description:
    "CIDR block that Atlas uses for all network peering connections created in the project",
  args: { name: "atlasCidrBlock" },
};
const instanceFlag: Fig.Option = {
  name: ["--instance", "-i"],
  description: "Name of your Atlas Stream Processing instance",
  args: { name: "instance" },
};
const dataFederationFlag: Fig.Option = {
  name: "--dataFederation",
  description: "Identifier of the Federated Database Instance",
  args: { name: "dataFederation" },
};
const protocolFlag: Fig.Option = {
  name: "--protocol",
  description: "Protocol used to authenticate the user",
  args: { name: "protocol", default: "OIDC" },
};
const envelopeFlag: Fig.Option = {
  name: "--envelope",
  description:
    "Flag that indicates whether Application wraps the response in an envelope JSON object",
};
const fileFlag3: Fig.Option = {
  name: "--file",
  description: "Path to your API request file",
  args: { name: "file", template: "filepaths" },
};
const groupIdFlag: Fig.Option = {
  name: "--groupId",
  description:
    "Unique 24-hexadecimal digit string that identifies your project",
  args: { name: "groupId" },
};
const outputFlag2: Fig.Option = {
  name: ["--output", "-o"],
  description: "Preferred api format",
  args: {
    name: "output",
    suggestions: ["json", "go-template"],
    default: "json",
  },
};
const outputFileFlag: Fig.Option = {
  name: "--outputFile",
  description: "File to write the api output to",
  args: { name: "outputFile", template: "filepaths" },
};
const prettyFlag: Fig.Option = {
  name: "--pretty",
  description:
    "Flag that indicates whether the response body should be in the prettyprint format",
};
const versionFlag: Fig.Option = {
  name: "--version",
  description: "API version to use when calling the Atlas API endpoints",
  args: { name: "version", default: "2025-03-12" },
};
const orgIdFlag2: Fig.Option = {
  name: "--orgId",
  description:
    "Unique 24-hexadecimal digit string that identifies the organization that contains your projects",
  args: { name: "orgId" },
};
const itemsPerPageFlag: Fig.Option = {
  name: "--itemsPerPage",
  description: "Number of items that the response returns per page",
  args: { name: "itemsPerPage" },
};
const pageNumFlag: Fig.Option = {
  name: "--pageNum",
  description:
    "Number of the page that displays the current set of the total objects that the response returns",
  args: { name: "pageNum" },
};
const cloudFlag: Fig.Option = {
  name: "--cloud",
  description: "Cloud provider scope",
  args: { name: "cloud" },
};
const geographyFlag: Fig.Option = {
  name: "--geography",
  description: "Geography scope",
  args: { name: "geography" },
};
const versionFlag2: Fig.Option = {
  name: "--version",
  description: "API version to use when calling the Atlas API endpoints",
  args: { name: "version", default: "2023-01-01" },
};
const clusterNameFlag2: Fig.Option = {
  name: "--clusterName",
  description: "Human-readable label that identifies the cluster",
  args: { name: "clusterName" },
};
const nLogsFlag: Fig.Option = {
  name: "--nLogs",
  description: "Maximum number of lines from the log to return",
  args: { name: "nLogs" },
};
const eventTypeFlag: Fig.Option = {
  name: "--eventType",
  description: "Category of incident recorded at this moment in time",
  args: { name: "eventType" },
  isRepeatable: true,
};
const alertConfigIdFlag: Fig.Option = {
  name: "--alertConfigId",
  description:
    "Unique 24-hexadecimal digit string that identifies the alert configuration",
  args: { name: "alertConfigId" },
};
const alertIdFlag: Fig.Option = {
  name: "--alertId",
  description: "Unique 24-hexadecimal digit string that identifies the alert",
  args: { name: "alertId" },
};
const includeCountFlag: Fig.Option = {
  name: "--includeCount",
  description:
    "Flag that indicates whether MongoDB Cloud calculates the total number of items for the response",
};
const versionFlag3: Fig.Option = {
  name: "--version",
  description: "API version to use when calling the Atlas API endpoints",
  args: {
    name: "version",
    suggestions: ["2023-01-01", "2024-05-30"],
    default: "2024-05-30",
  },
};
const versionFlag4: Fig.Option = {
  name: "--version",
  description: "API version to use when calling the Atlas API endpoints",
  args: {
    name: "version",
    suggestions: ["2023-01-01", "2024-05-30", "preview"],
    default: "preview",
  },
};
const versionFlag5: Fig.Option = {
  name: "--version",
  description: "API version to use when calling the Atlas API endpoints",
  args: { name: "version", default: "2024-05-30" },
};
const collectionNameFlag: Fig.Option = {
  name: "--collectionName",
  description:
    "Name of the collection that contains one or more Atlas Search indexes",
  args: { name: "collectionName" },
};
const databaseNameFlag: Fig.Option = {
  name: "--databaseName",
  description:
    "Label that identifies the database that contains the collection with one or more Atlas Search indexes",
  args: { name: "databaseName" },
};
const clusterNameFlag3: Fig.Option = {
  name: "--clusterName",
  description:
    "Name of the cluster that contains the collection with one or more Atlas Search indexes",
  args: { name: "clusterName" },
};
const versionFlag6: Fig.Option = {
  name: "--version",
  description: "API version to use when calling the Atlas API endpoints",
  args: { name: "version", default: "2024-11-13" },
};
const versionFlag7: Fig.Option = {
  name: "--version",
  description: "API version to use when calling the Atlas API endpoints",
  args: {
    name: "version",
    suggestions: ["2023-01-01", "2024-08-05"],
    default: "2024-08-05",
  },
};
const snapshotIdFlag: Fig.Option = {
  name: "--snapshotId",
  description:
    "Unique 24-hexadecimal digit string that identifies the desired snapshot",
  args: { name: "snapshotId" },
};
const databaseNameFlag2: Fig.Option = {
  name: "--databaseName",
  description: "Human-readable label that identifies the database",
  args: { name: "databaseName" },
};
const collectionNameFlag2: Fig.Option = {
  name: "--collectionName",
  description: "Human-readable label that identifies the collection",
  args: { name: "collectionName" },
};
const roleIdFlag: Fig.Option = {
  name: "--roleId",
  description: "Unique 24-hexadecimal digit string that identifies the role",
  args: { name: "roleId" },
};
const versionFlag8: Fig.Option = {
  name: "--version",
  description: "API version to use when calling the Atlas API endpoints",
  args: { name: "version", default: "preview" },
};
const versionFlag9: Fig.Option = {
  name: "--version",
  description: "API version to use when calling the Atlas API endpoints",
  args: {
    name: "version",
    suggestions: ["2023-01-01", "2023-02-01"],
    default: "2023-02-01",
  },
};
const connectionStringIdFlag: Fig.Option = {
  name: "--connectionStringId",
  description:
    "Unique 24-hexadecimal digit string that identifies this private endpoint connection string",
  args: { name: "connectionStringId" },
};
const clusterNameFlag4: Fig.Option = {
  name: "--clusterName",
  description:
    "Human-readable label that identifies the sharded cluster this topology belongs to",
  args: { name: "clusterName" },
};
const clusterNameFlag5: Fig.Option = {
  name: "--clusterName",
  description: "Human-readable label that identifies this cluster",
  args: { name: "clusterName" },
};
const versionFlag10: Fig.Option = {
  name: "--version",
  description: "API version to use when calling the Atlas API endpoints",
  args: {
    name: "version",
    suggestions: ["2023-01-01", "2023-02-01", "2024-08-05"],
    default: "2024-08-05",
  },
};
const versionFlag11: Fig.Option = {
  name: "--version",
  description: "API version to use when calling the Atlas API endpoints",
  args: { name: "version", default: "2024-08-05" },
};
const clusterNameFlag6: Fig.Option = {
  name: "--clusterName",
  description:
    "Human-readable label that identifies the cluster to pin namespaces to",
  args: { name: "clusterName" },
};
const endFlag2: Fig.Option = {
  name: "--end",
  description: "Date and time when MongoDB Cloud stops reporting the metrics",
  args: { name: "end" },
};
const periodFlag2: Fig.Option = {
  name: "--period",
  description: "Duration over which Atlas reports the metrics",
  args: { name: "period" },
};
const startFlag2: Fig.Option = {
  name: "--start",
  description: "Date and time when MongoDB Cloud begins reporting the metrics",
  args: { name: "start" },
};
const versionFlag12: Fig.Option = {
  name: "--version",
  description: "API version to use when calling the Atlas API endpoints",
  args: { name: "version", default: "2023-11-15" },
};
const processIdFlag: Fig.Option = {
  name: "--processId",
  description:
    "Combination of hostname and IANA port that serves the MongoDB process",
  args: { name: "processId" },
};
const roleNameFlag: Fig.Option = {
  name: "--roleName",
  description: "Human-readable label that identifies the role for the request",
  args: { name: "roleName" },
};
const limitNameFlag: Fig.Option = {
  name: "--limitName",
  description:
    "Human-readable label that identifies this data federation instance limit",
  args: { name: "limitName" },
};
const tenantNameFlag: Fig.Option = {
  name: "--tenantName",
  description:
    "Human-readable label that identifies the federated database instance to which the query limit applies",
  args: { name: "tenantName" },
};
const endDateFlag: Fig.Option = {
  name: "--endDate",
  description:
    "Timestamp that specifies the end point for the range of log messages to download",
  args: { name: "endDate" },
};
const outputFlag3: Fig.Option = {
  name: ["--output", "-o"],
  description: "Preferred api format",
  args: { name: "output", default: "gzip" },
};
const startDateFlag: Fig.Option = {
  name: "--startDate",
  description:
    "Timestamp that specifies the starting point for the range of log messages to download",
  args: { name: "startDate" },
};
const databaseNameFlag3: Fig.Option = {
  name: "--databaseName",
  description: "The database against which the database user authenticates",
  args: { name: "databaseName" },
};
const usernameFlag: Fig.Option = {
  name: "--username",
  description:
    "Human-readable label that represents the user that authenticates to MongoDB",
  args: { name: "username" },
};
const includeRawFlag: Fig.Option = {
  name: "--includeRaw",
  description:
    "Flag that indicates whether to include the raw document in the output",
};
const federationSettingsIdFlag2: Fig.Option = {
  name: "--federationSettingsId",
  description:
    "Unique 24-hexadecimal digit string that identifies your federation",
  args: { name: "federationSettingsId" },
};
const nameFlag: Fig.Option = {
  name: "--name",
  description: "Human-readable label that identifies the flex cluster",
  args: { name: "name" },
};
const invoiceIdFlag: Fig.Option = {
  name: "--invoiceId",
  description:
    "Unique 24-hexadecimal digit string that identifies the invoice submitted to the specified organization",
  args: { name: "invoiceId" },
};
const versionFlag13: Fig.Option = {
  name: "--version",
  description: "API version to use when calling the Atlas API endpoints",
  args: {
    name: "version",
    suggestions: ["2023-01-01", "preview"],
    default: "preview",
  },
};
const metricIntegrationIdFlag: Fig.Option = {
  name: "--metricIntegrationId",
  description: "Unique identifier of the metric integration configuration",
  args: { name: "metricIntegrationId" },
};
const userIdFlag: Fig.Option = {
  name: "--userId",
  description:
    "Unique 24-hexadecimal digit string that identifies the pending or active user in the project",
  args: { name: "userId" },
};
const versionFlag14: Fig.Option = {
  name: "--version",
  description: "API version to use when calling the Atlas API endpoints",
  args: { name: "version", default: "2025-02-19" },
};
const userIdFlag2: Fig.Option = {
  name: "--userId",
  description:
    "Unique 24-hexadecimal digit string that identifies the pending or active user in the organization",
  args: { name: "userId" },
};
const orgMembershipStatusesFlag: Fig.Option = {
  name: "--orgMembershipStatuses",
  description: "Organization membership status to filter users by",
  args: { name: "orgMembershipStatuses" },
  isRepeatable: true,
};
const orgMembershipStatusFlag: Fig.Option = {
  name: "--orgMembershipStatus",
  description: "Deprecated: Use orgMembershipStatuses instead",
  args: { name: "orgMembershipStatus" },
};
const usernameFlag2: Fig.Option = {
  name: "--username",
  description: "Email address to filter users by",
  args: { name: "username" },
};
const versionFlag15: Fig.Option = {
  name: "--version",
  description: "API version to use when calling the Atlas API endpoints",
  args: {
    name: "version",
    suggestions: ["2023-01-01", "2025-02-19"],
    default: "2025-02-19",
  },
};
const granularityFlag2: Fig.Option = {
  name: "--granularity",
  description:
    "Duration that specifies the interval at which Atlas reports the metrics",
  args: { name: "granularity" },
};
const processIdFlag2: Fig.Option = {
  name: "--processId",
  description:
    "Combination of hostname and Internet Assigned Numbers Authority (IANA) port that serves the MongoDB process",
  args: { name: "processId" },
};
const mFlag: Fig.Option = {
  name: "--m",
  description:
    "One or more types of measurement to request for this MongoDB process",
  args: { name: "m" },
  isRepeatable: true,
};
const processIdFlag3: Fig.Option = {
  name: "--processId",
  description: "Combination of host and port that serves the MongoDB process",
  args: { name: "processId" },
};
const cloudProviderFlag: Fig.Option = {
  name: "--cloudProvider",
  description: "Cloud service provider that manages this private endpoint",
  args: { name: "cloudProvider" },
};
const cloudProviderFlag2: Fig.Option = {
  name: "--cloudProvider",
  description:
    "Cloud service provider that manages this private endpoint service",
  args: { name: "cloudProvider" },
};
const limitNameFlag2: Fig.Option = {
  name: "--limitName",
  description: "Human-readable label that identifies this project limit",
  args: { name: "limitName" },
};
const idFlag: Fig.Option = {
  name: "--id",
  description: "Unique identifier of the log integration configuration",
  args: { name: "id" },
};
const logIntegrationIdFlag: Fig.Option = {
  name: "--logIntegrationId",
  description: "Unique identifier of the log integration configuration",
  args: { name: "logIntegrationId" },
};
const queryShapeHashFlag: Fig.Option = {
  name: "--queryShapeHash",
  description:
    "A SHA256 hash of a query shape, output by MongoDB commands like $queryStats and $explain or slow query logs",
  args: { name: "queryShapeHash" },
};
const mcpConfigIdFlag: Fig.Option = {
  name: "--mcpConfigId",
  description: "Unique identifier of the MCP configuration",
  args: { name: "mcpConfigId" },
};
const secretIdFlag: Fig.Option = {
  name: "--secretId",
  description: "Unique 24-hexadecimal digit string that identifies the secret",
  args: { name: "secretId" },
};
const resourcePolicyIdFlag: Fig.Option = {
  name: "--resourcePolicyId",
  description:
    "Unique 24-hexadecimal digit string that identifies an atlas resource policy",
  args: { name: "resourcePolicyId" },
};
const sandboxConfigIdFlag: Fig.Option = {
  name: "--sandboxConfigId",
  description:
    "Unique 24-hexadecimal digit string that identifies the sandbox configuration",
  args: { name: "sandboxConfigId" },
};
const clientIdFlag: Fig.Option = {
  name: "--clientId",
  description: "The Client ID of the Service Account",
  args: { name: "clientId" },
};
const envelopeFlag2: Fig.Option = {
  name: "--envelope",
  description:
    "Flag that indicates whether to wrap the response in an envelope",
};
const groupIdFlag2: Fig.Option = {
  name: "--groupId",
  description: "Unique 24-hexadecimal digit string that identifies the project",
  args: { name: "groupId" },
};
const standbyLinkIdFlag: Fig.Option = {
  name: "--standbyLinkId",
  description:
    "Unique 24-hexadecimal digit string that identifies the standby link",
  args: { name: "standbyLinkId" },
};
const idFlag2: Fig.Option = {
  name: "--id",
  description: "The VPC Peering Connection id",
  args: { name: "id" },
};
const versionFlag16: Fig.Option = {
  name: "--version",
  description: "API version to use when calling the Atlas API endpoints",
  args: { name: "version", default: "2023-02-01" },
};
const tenantNameFlag2: Fig.Option = {
  name: "--tenantName",
  description: "Label that identifies the stream workspace",
  args: { name: "tenantName" },
};
const versionFlag17: Fig.Option = {
  name: "--version",
  description: "API version to use when calling the Atlas API endpoints",
  args: {
    name: "version",
    suggestions: ["2025-03-12", "preview"],
    default: "preview",
  },
};
const connectionNameFlag: Fig.Option = {
  name: "--connectionName",
  description: "Label that identifies the stream connection",
  args: { name: "connectionName" },
};
const failoverConnectionIdFlag: Fig.Option = {
  name: "--failoverConnectionId",
  description: "Label that identifies the stream failover connection id",
  args: { name: "failoverConnectionId" },
};
const connectionIdFlag: Fig.Option = {
  name: "--connectionId",
  description: "Unique ID that identifies the Private Link connection",
  args: { name: "connectionId" },
};
const processorNameFlag: Fig.Option = {
  name: "--processorName",
  description: "Label that identifies the stream processor",
  args: { name: "processorName" },
};
const integrationTypeFlag: Fig.Option = {
  name: "--integrationType",
  description:
    "Human-readable label that identifies the service which you want to integrate with MongoDB Cloud",
  args: { name: "integrationType" },
};
const targetNamespaceFlag: Fig.Option = {
  name: "--targetNamespace",
  description: "Namespaces to use for generated kubernetes entities",
  args: { name: "targetNamespace" },
};
const noDescriptionsFlag: Fig.Option = {
  name: "--no-descriptions",
  description: "Disable completion descriptions",
};

const completionSpec: Fig.Spec = {
  name: "atlas",
  description: "CLI tool to manage MongoDB Atlas",
  subcommands: [
    {
      name: "config",
      description: "Configure and manage your user profiles",
      subcommands: [
        {
          name: "set",
          description: "Configure specific properties of a profile",
          args: [{ name: "propertyName" }, { name: "value" }],
        },
        {
          name: ["list", "ls"],
          description: "Return a list of available profiles by name",
          options: [outputFlag],
        },
        {
          name: ["describe", "get"],
          description: "Return the profile you specify",
          options: [outputFlag],
          args: { name: "name" },
        },
        {
          name: ["rename", "mv"],
          description: "Rename a profile",
          args: [{ name: "oldProfileName" }, { name: "newProfileName" }],
        },
        {
          name: "edit",
          description: "Opens the config file with the default text editor",
        },
      ],
    },
    {
      name: "auth",
      description: "Manage the CLI's authentication state",
      subcommands: [
        {
          name: "login",
          description: "Authenticate with MongoDB Atlas",
          options: [
            {
              name: "--authType",
              description: "Authentication type to use",
              args: {
                name: "authType",
                suggestions: [
                  "UserAccount",
                  "UserAccountLegacy",
                  "ServiceAccount",
                  "APIKeys",
                ],
              },
            },
            {
              name: "--clientId",
              description:
                "Service Account client ID. Must be set together with --clientSecret, --authType, and --output",
              args: { name: "clientId" },
            },
            {
              name: "--clientSecret",
              description: "Service Account client secret",
              args: { name: "clientSecret" },
            },
            { name: "--gov", description: "Log in to Atlas for Government" },
            {
              name: "--noBrowser",
              description: "Don't automatically open a browser session",
            },
            {
              name: "--orgId",
              description: "Organization ID to save as the profile default",
              args: { name: "orgId" },
            },
            {
              name: ["--output", "-o"],
              description: "Default output format to save to the profile",
              args: { name: "output", suggestions: ["plaintext", "json"] },
            },
            {
              name: "--privateApiKey",
              description: "Private API key",
              args: { name: "privateApiKey" },
            },
            {
              name: "--projectId",
              description: "Project ID to save as the profile default",
              args: { name: "projectId" },
            },
            {
              name: "--publicApiKey",
              description: "Public API key",
              args: { name: "publicApiKey" },
            },
          ],
        },
        {
          name: "whoami",
          description:
            "Verifies and displays information about your authentication state",
        },
        {
          name: "logout",
          description: "Log out of the CLI",
          options: [forceFlag],
        },
        {
          name: "register",
          description: "Register with MongoDB Atlas",
          options: [
            {
              name: "--noBrowser",
              description: "Don't try to open a browser session",
            },
          ],
        },
      ],
    },
    {
      name: ["setup", "quickstart"],
      description: "Login, authenticate, create, and access an Atlas cluster",
      options: [
        {
          name: "--accessListIp",
          description: "IP address to grant access to the deployment",
          args: { name: "accessListIp" },
          isRepeatable: true,
        },
        autoScalingModeFlag,
        clusterNameFlag,
        {
          name: "--connectWith",
          description: "Method for connecting to the cluster",
          args: {
            name: "connectWith",
            suggestions: ["compass", "mongosh", "vscode", "skip"],
          },
        },
        currentIpFlag,
        enableTerminationProtectionFlag,
        {
          name: "--force",
          description:
            "Flag that indicates whether to skip the request for input and create a cluster with the default settings for any unspecified options",
        },
        { name: "--gov", description: "Login with Atlas for Government" },
        {
          name: "--mdbVersion",
          description: "Major MongoDB version of the deployment",
          args: { name: "mdbVersion" },
        },
        {
          name: "--noBrowser",
          description: "Don't try to open a browser session",
        },
        passwordFlag,
        projectIdFlag,
        providerFlag,
        {
          name: ["--region", "-r"],
          description: "Physical location of your MongoDB cluster",
          args: { name: "region" },
        },
        {
          name: "--skipSampleData",
          description:
            "Flag that indicates whether to skip loading sample data into your MongoDB cluster",
        },
        tagFlag,
        {
          name: "--tier",
          description: "Tier for each data-bearing server in the cluster",
          args: { name: "tier", default: "M0" },
        },
        {
          name: "--username",
          description: "Username for authenticating to MongoDB",
          args: { name: "username" },
        },
      ],
    },
    {
      name: ["projects", "project"],
      description: "Manage your Atlas projects",
      subcommands: [
        {
          name: ["list", "ls"],
          description: "Return all projects",
          options: [limitFlag, omitCountFlag, orgIdFlag, outputFlag, pageFlag],
        },
        {
          name: "create",
          description: "Create a project in your organization",
          options: [
            {
              name: "--govCloudRegionsOnly",
              description:
                "Flag that designates that the project uses only the AWS GovCloud region",
            },
            orgIdFlag,
            outputFlag,
            {
              name: "--ownerId",
              description:
                "Unique 24-digit string that identifies the Atlas user to be granted the Project Owner role on the specified project",
              args: { name: "ownerId" },
            },
            {
              name: "--tag",
              description:
                "List that contains key-value pairs between 1 to 255 characters in length for tagging and categorizing the project",
              args: { name: "tag" },
              isRepeatable: true,
            },
            {
              name: "--withoutDefaultAlertSettings",
              description:
                "Flag that creates the new project without the default alert settings enabled",
            },
          ],
          args: { name: "projectName" },
        },
        {
          name: "update",
          description: "Update a project",
          options: [
            {
              name: ["--file", "-f"],
              description:
                "Path to the JSON configuration file that defines project configuration settings",
              args: { name: "file", template: "filepaths" },
            },
            outputFlag,
          ],
          args: { name: "ID" },
        },
        {
          name: ["delete", "rm"],
          description: "Remove the specified project",
          options: [forceFlag],
          args: { name: "ID" },
        },
        {
          name: ["describe", "show", "get"],
          description: "Return the details for the specified project",
          options: [outputFlag],
          args: { name: "ID" },
        },
        {
          name: [
            "apiKeys",
            "apikeys",
            "api-keys",
            "apiKey",
            "apikey",
            "api-key",
          ],
          description: "Manage API Keys for your project",
          subcommands: [
            {
              name: ["list", "ls"],
              description:
                "Return all organization API keys assigned to your project",
              options: [
                compactFlag,
                limitFlag,
                omitCountFlag,
                outputFlag,
                pageFlag,
                projectIdFlag,
              ],
            },
            {
              name: "create",
              description:
                "Create an organization API key and assign it to your project",
              options: [descFlag, outputFlag, projectIdFlag, roleFlag],
            },
            {
              name: ["delete", "rm"],
              description:
                "Remove the specified organization API key from your project",
              options: [forceFlag, projectIdFlag],
              args: { name: "ID" },
            },
            {
              name: ["assign", "update"],
              description:
                "Assign the specified organization API key to your project and modify the API key's roles for the project",
              options: [outputFlag, projectIdFlag, roleFlag],
              args: { name: "ID" },
            },
          ],
        },
        {
          name: ["users", "user"],
          description: "Manage users for a project",
          subcommands: [
            {
              name: ["list", "ls"],
              description: "Return all users for a project",
              options: [
                compactFlag,
                limitFlag,
                omitCountFlag,
                outputFlag,
                pageFlag,
                projectIdFlag,
              ],
            },
            {
              name: ["delete", "rm"],
              description: "Remove the specified user from your project",
              options: [forceFlag, projectIdFlag],
              args: { name: "ID" },
            },
          ],
        },
        {
          name: ["teams", "team"],
          description: "Manage your Atlas teams",
          subcommands: [
            {
              name: ["list", "ls"],
              description: "Return all teams for a project",
              options: [
                limitFlag,
                omitCountFlag,
                outputFlag,
                pageFlag,
                projectIdFlag,
              ],
            },
            {
              name: "add",
              description: "Add the specified team to your project",
              options: [
                outputFlag,
                projectIdFlag,
                {
                  name: "--role",
                  description:
                    "User role that applies to all members of the specified team for the associated project",
                  args: {
                    name: "role",
                    suggestions: [
                      "GROUP_CLUSTER_MANAGER",
                      "GROUP_DATA_ACCESS_ADMIN",
                      "GROUP_DATA_ACCESS_READ_ONLY",
                      "GROUP_DATA_ACCESS_READ_WRITE",
                      "GROUP_OWNER",
                      "GROUP_READ_ONLY",
                    ],
                  },
                  isRepeatable: true,
                },
              ],
              args: { name: "teamId" },
            },
            {
              name: ["delete", "rm"],
              description: "Remove the specified team from your project",
              options: [forceFlag, projectIdFlag],
              args: { name: "teamId" },
            },
            {
              name: ["update", "updates"],
              description:
                "Modify the roles for the specified team for your project",
              options: [
                outputFlag,
                projectIdFlag,
                {
                  name: "--role",
                  description:
                    "User role that applies to all members of the specified team for the associated project",
                  args: {
                    name: "role",
                    suggestions: [
                      "GROUP_CLUSTER_MANAGER",
                      "GROUP_DATA_ACCESS_ADMIN",
                      "GROUP_DATA_ACCESS_READ_ONLY",
                      "GROUP_DATA_ACCESS_READ_WRITE",
                      "GROUP_OWNER",
                      "GROUP_READ_ONLY",
                    ],
                  },
                  isRepeatable: true,
                },
              ],
              args: { name: "teamId" },
            },
          ],
        },
        {
          name: ["settings", "setting"],
          description: "Settings operations",
          subcommands: [
            {
              name: ["describe", "get"],
              description:
                "Retrieve details for settings to the specified project",
              options: [outputFlag, projectIdFlag],
            },
            {
              name: ["update", "updates"],
              description: "Updates settings for a project",
              options: [
                {
                  name: "--disableCollectDatabaseSpecificsStatistics",
                  description:
                    "Flag that disables the Collect Database Specific Statistics project setting",
                },
                {
                  name: "--disableDataExplorer",
                  description:
                    "Flag that disables the Data Explorer project setting",
                },
                {
                  name: "--disableDataExplorerGenAIFeatures",
                  description:
                    "Flag that disables the Data Explorer GenAI Features project setting",
                },
                {
                  name: "--disableDataExplorerGenAISampleDocumentPassing",
                  description:
                    "Flag that disables the Data Explorer GenAI Sample Document Passing project setting",
                },
                {
                  name: "--disablePerformanceAdvisor",
                  description:
                    "Flag that disables the Performance Advisor project setting",
                },
                {
                  name: "--disableRealtimePerformancePanel",
                  description:
                    "Flag that disables the Real Time Performance Panel project setting",
                },
                {
                  name: "--disableSchemaAdvisor",
                  description:
                    "Flag that disables the Schema Advisor project setting",
                },
                {
                  name: "--enableCollectDatabaseSpecificsStatistics",
                  description:
                    "Flag that enables the Collect Database Specific Statistics project setting",
                },
                {
                  name: "--enableDataExplorer",
                  description:
                    "Flag that enables the Data Explorer project setting",
                },
                {
                  name: "--enableDataExplorerGenAIFeatures",
                  description:
                    "Flag that enables the Data Explorer GenAI Features project setting",
                },
                {
                  name: "--enableDataExplorerGenAISampleDocumentPassing",
                  description:
                    "Flag that enables the Data Explorer GenAI Sample Document Passing project setting",
                },
                {
                  name: "--enablePerformanceAdvisor",
                  description:
                    "Flag that enables the Performance Advisor project setting",
                },
                {
                  name: "--enableRealtimePerformancePanel",
                  description:
                    "Flag that enables the Real Time Performance Panel project setting",
                },
                {
                  name: "--enableSchemaAdvisor",
                  description:
                    "Flag that enables the Schema Advisor project setting",
                },
                outputFlag,
                projectIdFlag,
              ],
            },
          ],
        },
      ],
    },
    {
      name: ["organizations", "organization", "orgs", "org"],
      description: "Manage your Atlas organizations",
      subcommands: [
        {
          name: "create",
          description: "Create an organization",
          options: [
            {
              name: "--apiKeyDescription",
              description: "Description of the API key",
              args: { name: "apiKeyDescription" },
            },
            {
              name: "--apiKeyRole",
              description:
                "Role or roles that you want to assign to the API key",
              args: { name: "apiKeyRole" },
              isRepeatable: true,
            },
            federationSettingsIdFlag,
            outputFlag,
            {
              name: "--ownerId",
              description:
                "Unique 24-digit string that identifies the Atlas user to be granted the Org Owner role on the specified organization",
              args: { name: "ownerId" },
            },
          ],
          args: { name: "name" },
        },
        {
          name: ["list", "ls"],
          description: "Return all organizations",
          options: [
            {
              name: "--includeDeleted",
              description:
                "Flag that indicates whether to include deleted organizations in the list",
            },
            limitFlag,
            {
              name: "--name",
              description:
                "Organization name to perform a case-insensitive search for",
              args: { name: "name" },
            },
            omitCountFlag,
            outputFlag,
            pageFlag,
          ],
        },
        {
          name: ["describe", "show"],
          description: "Return the details for the specified organizations",
          options: [outputFlag],
          args: { name: "ID" },
        },
        {
          name: ["delete", "rm"],
          description: "Remove the specified organization",
          options: [forceFlag],
          args: { name: "ID" },
        },
        {
          name: [
            "apiKeys",
            "apikeys",
            "api-keys",
            "apiKey",
            "apikey",
            "api-key",
          ],
          description: "Organization API Keys operations",
          subcommands: [
            {
              name: ["list", "ls"],
              description: "Return all API keys for your organization",
              options: [
                compactFlag,
                limitFlag,
                omitCountFlag,
                orgIdFlag,
                outputFlag,
                pageFlag,
              ],
            },
            {
              name: ["describe", "show"],
              description:
                "Return the details for the specified API key for your organization",
              options: [orgIdFlag, outputFlag],
              args: { name: "ID" },
            },
            {
              name: ["assign", "updates"],
              description:
                "Modify the roles or description for the specified organization API key",
              options: [descFlag, orgIdFlag, outputFlag, roleFlag],
              args: { name: "apiKeyId" },
            },
            {
              name: "create",
              description: "Create an API Key for your organization",
              options: [descFlag, orgIdFlag, outputFlag, roleFlag],
            },
            {
              name: ["delete", "rm"],
              description: "Remove the specified API key for your organization",
              options: [forceFlag, orgIdFlag],
              args: { name: "ID" },
            },
            {
              name: [
                "accessLists",
                "accesslists",
                "access-lists",
                "accessList",
                "accesslist",
                "access-list",
                "whitelists",
                "whitelist",
              ],
              description: "Manage the IP access list for your API Key",
              subcommands: [
                {
                  name: ["list", "ls"],
                  description:
                    "Return all IP access list entries for your API Key",
                  options: [
                    limitFlag,
                    omitCountFlag,
                    orgIdFlag,
                    outputFlag,
                    pageFlag,
                  ],
                  args: { name: "apiKeyID" },
                },
                {
                  name: "create",
                  description:
                    "Create an IP access list entry for your API Key",
                  options: [
                    {
                      name: "--apiKey",
                      description:
                        "Unique 24-digit ID that identifies your API key",
                      args: { name: "apiKey" },
                    },
                    {
                      name: "--cidr",
                      description:
                        "Access list entry in CIDR notation to be added for your API key",
                      args: { name: "cidr" },
                      isRepeatable: true,
                    },
                    currentIpFlag,
                    {
                      name: "--ip",
                      description:
                        "IP address to add to the access list for your API key",
                      args: { name: "ip" },
                      isRepeatable: true,
                    },
                    orgIdFlag,
                    outputFlag,
                  ],
                },
                {
                  name: ["delete", "rm"],
                  description:
                    "Remove the specified IP access list entry from your API Key",
                  options: [
                    {
                      name: "--apiKey",
                      description:
                        "Unique 24-digit ID that identifies your API key",
                      args: { name: "apiKey" },
                    },
                    forceFlag,
                    orgIdFlag,
                  ],
                  args: { name: "entry" },
                },
              ],
            },
          ],
        },
        {
          name: ["users", "user"],
          description: "Manage your Atlas users",
          subcommands: [
            {
              name: ["list", "ls"],
              description: "Return all users for an organization",
              options: [
                limitFlag,
                omitCountFlag,
                orgIdFlag,
                outputFlag,
                pageFlag,
              ],
            },
          ],
        },
        {
          name: ["invitations", "invitation"],
          description: "Invitation operations",
          subcommands: [
            {
              name: ["list", "ls"],
              description:
                "Return all pending invitations to your organization",
              options: [emailFlag, orgIdFlag, outputFlag],
            },
            {
              name: ["describe", "get"],
              description:
                "Return the details for the specified pending invitation to your organization",
              options: [orgIdFlag, outputFlag],
              args: { name: "invitationId" },
            },
            {
              name: ["delete", "rm"],
              description:
                "Remove the specified pending invitation to your organization",
              options: [forceFlag, orgIdFlag],
              args: { name: "invitationId" },
            },
            {
              name: ["update", "updates"],
              description:
                "Modifies the details of the specified pending invitation to your organization",
              options: [
                emailFlag,
                {
                  name: ["--file", "-f"],
                  description:
                    "Path to an optional JSON configuration file that defines invitation settings",
                  args: { name: "file", template: "filepaths" },
                },
                orgIdFlag,
                outputFlag,
                {
                  name: "--role",
                  description: "User's roles for the associated organization",
                  args: {
                    name: "role",
                    suggestions: [
                      "ORG_OWNER",
                      "ORG_MEMBER",
                      "ORG_GROUP_CREATOR",
                      "ORG_BILLING_ADMIN",
                      "ORG_READ_ONLY",
                    ],
                  },
                  isRepeatable: true,
                },
              ],
              args: { name: "invitationId", isOptional: true },
            },
            {
              name: ["invite", "create"],
              description:
                "Invite the specified MongoDB user to your organization",
              options: [
                {
                  name: ["--file", "-f"],
                  description:
                    "Path to an optional JSON configuration file that defines invitation settings",
                  args: { name: "file", template: "filepaths" },
                },
                orgIdFlag,
                outputFlag,
                {
                  name: "--role",
                  description: "User's roles for the associated organization",
                  args: {
                    name: "role",
                    suggestions: [
                      "ORG_OWNER",
                      "ORG_MEMBER",
                      "ORG_GROUP_CREATOR",
                      "ORG_BILLING_ADMIN",
                      "ORG_READ_ONLY",
                    ],
                  },
                  isRepeatable: true,
                },
                {
                  name: "--teamId",
                  description:
                    "Unique 24-digit string that identifies the team",
                  args: { name: "teamId" },
                  isRepeatable: true,
                },
              ],
              args: { name: "email" },
            },
          ],
        },
      ],
    },
    {
      name: ["users", "user"],
      description: "Manage your Atlas users",
      subcommands: [
        {
          name: "invite",
          description:
            "Create an Atlas user for your MongoDB Atlas application and invite the Atlas user to your organizations and projects",
          options: [
            {
              name: "--country",
              description:
                "ISO 3166-1 alpha two-letter country code of the user's geographic location",
              args: { name: "country" },
            },
            emailFlag,
            {
              name: "--firstName",
              description: "First or given name for the user",
              args: { name: "firstName" },
            },
            {
              name: "--lastName",
              description: "Last name, family name, or surname for the user",
              args: { name: "lastName" },
            },
            {
              name: "--mobile",
              description: "Mobile phone number for the user",
              args: { name: "mobile" },
            },
            {
              name: "--orgRole",
              description:
                "Unique 24-digit string that identifies the organization, colon, and the user's role for the organization",
              args: { name: "orgRole" },
              isRepeatable: true,
            },
            outputFlag,
            passwordFlag,
            {
              name: "--projectRole",
              description:
                "Unique 24-digit string that identifies the project, colon, and the user's role for the project",
              args: { name: "projectRole" },
              isRepeatable: true,
            },
            {
              name: "--username",
              description: "Name that identifies the user",
              args: { name: "username" },
            },
          ],
        },
        {
          name: ["describe", "get"],
          description: "Return the details for the specified Atlas user",
          options: [
            {
              name: "--id",
              description: "Unique 24-digit identifier of the user",
              args: { name: "id" },
            },
            outputFlag,
            {
              name: "--username",
              description: "Name that identifies the user",
              args: { name: "username" },
            },
          ],
        },
      ],
    },
    {
      name: ["teams", "team"],
      description: "Manage your Atlas teams",
      subcommands: [
        {
          name: ["list", "ls"],
          description: "Return all teams for your organization",
          options: [
            compactFlag,
            limitFlag,
            omitCountFlag,
            orgIdFlag,
            outputFlag,
            pageFlag,
          ],
        },
        {
          name: ["describe", "get"],
          description:
            "Return the details for the specified team for your organization",
          options: [
            {
              name: "--id",
              description: "Unique 24-digit string that identifies the team",
              args: { name: "id" },
            },
            {
              name: "--name",
              description: "Label that identifies the team",
              args: { name: "name" },
            },
            orgIdFlag,
            outputFlag,
          ],
        },
        {
          name: "create",
          description: "Create a team for your organization",
          options: [
            orgIdFlag,
            outputFlag,
            {
              name: "--username",
              description:
                "Comma-separated list that contains the valid usernames of the MongoDB users to add to the new team",
              args: { name: "username" },
              isRepeatable: true,
            },
          ],
          args: { name: "name" },
        },
        {
          name: ["rename", "update"],
          description: "Rename a team in your organization",
          options: [orgIdFlag, outputFlag, teamIdFlag],
          args: { name: "newName" },
        },
        {
          name: ["users", "user"],
          description: "Manage your Atlas users",
          subcommands: [
            {
              name: ["list", "ls"],
              description: "Return all users for a team",
              options: [compactFlag, orgIdFlag, outputFlag, teamIdFlag],
            },
            {
              name: "add",
              description:
                "Add the specified MongoDB user to a team for your organization",
              options: [orgIdFlag, outputFlag, teamIdFlag],
              args: { name: "userId", isVariadic: true },
            },
            {
              name: ["delete", "rm"],
              description:
                "Remove the specified user from a team for your organization",
              options: [forceFlag, orgIdFlag, teamIdFlag],
              args: { name: "userId" },
            },
          ],
        },
        {
          name: ["delete", "rm"],
          description: "Remove the specified team from your organization",
          options: [forceFlag, orgIdFlag],
          args: { name: "teamId" },
        },
      ],
    },
    {
      name: ["clusters", "cluster"],
      description: "Manage clusters for your project",
      subcommands: [
        {
          name: ["list", "ls"],
          description: "Return all clusters for your project",
          options: [
            autoScalingModeFlag,
            limitFlag,
            omitCountFlag,
            outputFlag,
            pageFlag,
            projectIdFlag,
            tierFlag,
          ],
        },
        {
          name: ["describe", "get"],
          description:
            "Return the details for the specified cluster for your project",
          options: [autoScalingModeFlag, outputFlag, projectIdFlag],
          args: { name: "clusterName" },
        },
        {
          name: [
            "advancedSettings",
            "advancedsettings",
            "advanced-settings",
            "advancedSetting",
            "advancedsetting",
            "advanced-setting",
            "settings",
          ],
          description:
            "Manage advanced configuration settings for your cluster",
          subcommands: [
            {
              name: ["describe", "get"],
              description:
                "Retrieve advanced configuration settings for one cluster",
              options: [outputFlag, projectIdFlag],
              args: { name: "clusterName" },
            },
            {
              name: "update",
              description:
                "Update advanced configuration settings for one cluster",
              options: [
                {
                  name: "--disableFailIndexKeyTooLong",
                  description:
                    "Flag that disables writing documents that exceed 1024 bytes without indexing",
                },
                {
                  name: "--disableJavascript",
                  description:
                    "Flag that disables the execution of operations that perform server-side executions of JavaScript",
                },
                {
                  name: "--disableTableScan",
                  description:
                    "Flag that disables executing any query that requires a collection scan to return results",
                },
                {
                  name: "--enableFailIndexKeyTooLong",
                  description:
                    "Flag that enables writing documents that exceed 1024 bytes without indexing",
                },
                {
                  name: "--enableJavascript",
                  description:
                    "Flag that enables the execution of operations that perform server-side executions of JavaScript",
                },
                {
                  name: "--enableTableScan",
                  description:
                    "Flag that enables executing any query that requires a collection scan to return results",
                },
                {
                  name: "--oplogMinRetentionHours",
                  description:
                    "Minimum retention window for cluster's oplog expressed in hours",
                  args: { name: "oplogMinRetentionHours" },
                },
                {
                  name: "--oplogSizeMB",
                  description:
                    "Storage limit of cluster's oplog expressed in megabytes",
                  args: { name: "oplogSizeMB" },
                },
                outputFlag,
                projectIdFlag,
                {
                  name: "--readConcern",
                  description:
                    "Default level of acknowledgment requested from MongoDB for read operations set for this cluster",
                  args: { name: "readConcern" },
                },
                {
                  name: "--sampleRefreshIntervalBIConnector",
                  description:
                    "Interval in seconds at which the mongosqld process re-samples data to create its relational schema",
                  args: {
                    name: "sampleRefreshIntervalBIConnector",
                    default: "-1",
                  },
                },
                {
                  name: "--sampleSizeBIConnector",
                  description:
                    "Number of documents per database to sample when gathering schema information",
                  args: { name: "sampleSizeBIConnector", default: "-1" },
                },
                {
                  name: "--tlsProtocol",
                  description:
                    "Minimum Transport Layer Security (TLS) version that the cluster accepts for incoming connections",
                  args: { name: "tlsProtocol" },
                },
                {
                  name: "--writeConcern",
                  description:
                    "Default level of acknowledgment requested from MongoDB for write operations set for this cluster",
                  args: { name: "writeConcern" },
                },
              ],
              args: { name: "clusterName" },
            },
          ],
        },
        {
          name: "create",
          description: "Create a cluster for your project",
          options: [
            autoScalingModeFlag,
            {
              name: "--backup",
              description:
                "Flag that enables Continuous Cloud Backup for your deployment",
            },
            {
              name: "--biConnector",
              description:
                "Flag that enables BI Connector for Atlas on the deployment",
            },
            {
              name: "--diskSizeGB",
              description: "Capacity, in gigabytes, of the host's root volume",
              args: { name: "diskSizeGB", default: "2" },
            },
            enableTerminationProtectionFlag,
            fileFlag,
            mdbVersionFlag,
            {
              name: ["--members", "-m"],
              description: "Number of members in the replica set",
              args: { name: "members", default: "3" },
            },
            outputFlag,
            projectIdFlag,
            providerFlag,
            {
              name: ["--region", "-r"],
              description: "Physical location of your MongoDB cluster",
              args: { name: "region" },
            },
            {
              name: ["--shards", "-s"],
              description: "Number of shards in the cluster",
              args: { name: "shards", default: "1" },
            },
            tagFlag,
            {
              name: "--tier",
              description: "Tier for each data-bearing server in the cluster",
              args: { name: "tier", default: "FLEX" },
            },
            {
              name: "--type",
              description: "Type of the cluster that you want to create",
              args: {
                name: "type",
                suggestions: ["REPLICASET", "SHARDED"],
                default: "REPLICASET",
              },
            },
            watchFlag,
            watchTimeoutFlag,
          ],
          args: { name: "name", isOptional: true },
        },
        {
          name: "connect",
          description: "Connect to an Atlas cluster",
          options: [
            {
              name: "--autoScalingMode",
              description: "Mode in which the cluster scales",
              args: {
                name: "autoScalingMode",
                suggestions: ["clusterWideScaling", "independentShardScaling"],
              },
            },
            {
              name: "--connectWith",
              description: "Method for connecting to the deployment",
              args: {
                name: "connectWith",
                suggestions: [
                  "compass",
                  "connectionString",
                  "mongosh",
                  "vscode",
                ],
              },
            },
            {
              name: "--connectionStringType",
              description: "Type of connection string",
              args: { name: "connectionStringType", default: "standard" },
            },
            outputFlag,
            passwordFlag,
            projectIdFlag,
            {
              name: "--username",
              description: "Username for authenticating to MongoDB",
              args: { name: "username" },
            },
          ],
          args: { name: "clusterName", isOptional: true },
        },
        {
          name: "watch",
          description:
            "Watch the specified cluster in your project until it becomes available",
          options: [projectIdFlag],
          args: { name: "clusterName" },
        },
        {
          name: "update",
          description: "Modify the settings of the specified cluster",
          options: [
            {
              name: "--autoScalingMode",
              description: "Mode in which the cluster scales",
              args: {
                name: "autoScalingMode",
                suggestions: ["clusterWideScaling", "independentShardScaling"],
              },
            },
            {
              name: "--disableTerminationProtection",
              description: "Disables termination protection for your cluster",
            },
            {
              name: "--diskSizeGB",
              description: "Capacity, in gigabytes, of the host's root volume",
              args: { name: "diskSizeGB" },
            },
            enableTerminationProtectionFlag,
            fileFlag,
            mdbVersionFlag,
            outputFlag,
            projectIdFlag,
            tagFlag,
            tierFlag,
          ],
          args: { name: "clusterName", isOptional: true },
        },
        {
          name: "pause",
          description: "Pause the specified running MongoDB cluster",
          options: [autoScalingModeFlag, outputFlag, projectIdFlag],
          args: { name: "clusterName" },
        },
        {
          name: "start",
          description: "Start the specified paused MongoDB cluster",
          options: [autoScalingModeFlag, outputFlag, projectIdFlag],
          args: { name: "clusterName" },
        },
        {
          name: ["delete", "rm"],
          description: "Remove the specified cluster from your project",
          options: [forceFlag, projectIdFlag, watchFlag, watchTimeoutFlag],
          args: { name: "clusterName" },
        },
        {
          name: "upgrade",
          description:
            "Upgrade a shared cluster's tier, disk size, and/or MongoDB version",
          options: [
            {
              name: "--disableTerminationProtection",
              description: "Disables termination protection for your cluster",
            },
            {
              name: "--diskSizeGB",
              description: "Capacity, in gigabytes, of the host's root volume",
              args: { name: "diskSizeGB" },
            },
            enableTerminationProtectionFlag,
            fileFlag,
            mdbVersionFlag,
            outputFlag,
            projectIdFlag,
            tagFlag,
            tierFlag,
          ],
          args: { name: "clusterName", isOptional: true },
        },
        {
          name: "failover",
          description:
            "Starts a failover test for the specified cluster in the specified project",
          options: [forceFlag, projectIdFlag],
          args: { name: "clusterName" },
        },
        {
          name: ["indexes", "index"],
          description: "Manage cluster rolling indexes for your project",
          subcommands: [
            {
              name: "create",
              description:
                "Create a rolling index for the specified cluster for your project",
              options: [
                clusterNameFlag,
                collectionFlag,
                dbFlag,
                {
                  name: ["--file", "-f"],
                  description:
                    "Path to an optional JSON configuration file that defines index settings",
                  args: { name: "file", template: "filepaths" },
                },
                {
                  name: "--key",
                  description:
                    "Field to be indexed and the type of index in the following format: field:type",
                  args: { name: "key" },
                  isRepeatable: true,
                },
                projectIdFlag,
                {
                  name: "--sparse",
                  description: "Flag that creates a sparse index",
                },
              ],
              args: { name: "indexName", isOptional: true },
            },
          ],
        },
        {
          name: ["search", "fts"],
          description: "Manage Atlas Search for your cluster",
          subcommands: [
            {
              name: ["indexes", "index"],
              description: "Manage Atlas Search indexes for your cluster",
              subcommands: [
                {
                  name: ["list", "ls"],
                  description: "List all Atlas Search indexes for a cluster",
                  options: [
                    clusterNameFlag,
                    collectionFlag,
                    dbFlag,
                    outputFlag,
                    projectIdFlag,
                  ],
                },
                {
                  name: "create",
                  description: "Create a search index for a cluster",
                  options: [
                    clusterNameFlag,
                    fileFlag2,
                    outputFlag,
                    projectIdFlag,
                  ],
                  args: { name: "indexName", isOptional: true },
                },
                {
                  name: "describe",
                  description:
                    "Return the details for the search index for a cluster",
                  options: [clusterNameFlag, outputFlag, projectIdFlag],
                  args: { name: "indexId" },
                },
                {
                  name: "update",
                  description: "Modify a search index for a cluster",
                  options: [
                    clusterNameFlag,
                    fileFlag2,
                    outputFlag,
                    projectIdFlag,
                  ],
                  args: { name: "indexId" },
                },
                {
                  name: ["delete", "rm"],
                  description:
                    "Delete the specified search index from the specified cluster",
                  options: [clusterNameFlag, forceFlag, projectIdFlag],
                  args: { name: "indexId" },
                },
              ],
            },
            {
              name: ["nodes", "node"],
              description: "Manage Atlas Search nodes for your cluster",
              subcommands: [
                {
                  name: ["list", "ls"],
                  description: "List all Atlas Search nodes for a cluster",
                  options: [clusterNameFlag, outputFlag, projectIdFlag],
                },
                {
                  name: "delete",
                  description: "Delete a search node for a cluster",
                  options: [
                    clusterNameFlag,
                    forceFlag,
                    outputFlag,
                    projectIdFlag,
                    watchFlag,
                    watchTimeoutFlag,
                  ],
                },
                {
                  name: "create",
                  description: "Create a search node for a cluster",
                  options: [
                    clusterNameFlag,
                    fileFlag2,
                    outputFlag,
                    projectIdFlag,
                    watchFlag,
                    watchTimeoutFlag,
                  ],
                },
                {
                  name: "update",
                  description: "Update a search node for a cluster",
                  options: [
                    clusterNameFlag,
                    fileFlag2,
                    outputFlag,
                    projectIdFlag,
                    watchFlag,
                    watchTimeoutFlag,
                  ],
                },
              ],
            },
          ],
        },
        {
          name: [
            "onlineArchives",
            "onlinearchives",
            "online-archives",
            "onlineArchive",
            "onlinearchive",
            "online-archive",
          ],
          description: "Manage online archives for your cluster",
          subcommands: [
            {
              name: ["list", "ls"],
              description: "Return all online archives for your cluster",
              options: [
                clusterNameFlag,
                limitFlag,
                omitCountFlag,
                outputFlag,
                pageFlag,
                projectIdFlag,
              ],
            },
            {
              name: "describe",
              description:
                "Return the details for the specified online archive for your cluster",
              options: [clusterNameFlag, outputFlag, projectIdFlag],
              args: { name: "archiveId" },
            },
            {
              name: "create",
              description:
                "Create an online archive for a collection in the specified cluster",
              options: [
                {
                  name: "--archiveAfter",
                  description:
                    "Number of days after which to archive cluster data",
                  args: { name: "archiveAfter" },
                },
                clusterNameFlag,
                collectionFlag,
                {
                  name: "--dateField",
                  description:
                    "Name of an already indexed date field from the documents",
                  args: { name: "dateField" },
                },
                {
                  name: "--dateFormat",
                  description: "Date format for the date field",
                  args: {
                    name: "dateFormat",
                    suggestions: [
                      "ISODATE",
                      "EPOCH_SECONDS",
                      "EPOCH_MILLIS",
                      "EPOCH_NANOSECONDS",
                    ],
                    default: "ISODATE",
                  },
                },
                dbFlag,
                {
                  name: "--expireAfterDays",
                  description:
                    "Number of days used in the date criteria for nominating documents for deletion",
                  args: { name: "expireAfterDays" },
                },
                {
                  name: "--file",
                  description:
                    "Path to an optional JSON configuration file that defines online archive settings",
                  args: { name: "file", template: "filepaths" },
                },
                outputFlag,
                {
                  name: "--partition",
                  description: "Fields to use to partition data",
                  args: { name: "partition" },
                  isRepeatable: true,
                },
                projectIdFlag,
              ],
            },
            {
              name: "update",
              description:
                "Modify the archiving rule for the specified online archive for a cluster",
              options: [
                {
                  name: "--archiveAfter",
                  description:
                    "Number of days after which to archive cluster data",
                  args: { name: "archiveAfter" },
                },
                clusterNameFlag,
                {
                  name: "--expireAfterDays",
                  description:
                    "Number of days used in the date criteria for nominating documents for deletion",
                  args: { name: "expireAfterDays" },
                },
                {
                  name: "--file",
                  description:
                    "Path to an optional JSON configuration file that defines online archive settings",
                  args: { name: "file", template: "filepaths" },
                },
                outputFlag,
                projectIdFlag,
              ],
              args: { name: "archiveId" },
            },
            {
              name: "start",
              description: "Start a paused online archive from a cluster",
              options: [clusterNameFlag, outputFlag, projectIdFlag],
              args: { name: "archiveId" },
            },
            {
              name: "pause",
              description: "Pause the specfied online archive for your cluster",
              options: [clusterNameFlag, outputFlag, projectIdFlag],
              args: { name: "archiveId" },
            },
            {
              name: ["delete", "rm"],
              description:
                "Remove the specified online archive from your cluster",
              options: [clusterNameFlag, forceFlag, projectIdFlag],
              args: { name: "archiveId" },
            },
            {
              name: "watch",
              description: "Watch for an archive to be available",
              options: [clusterNameFlag, projectIdFlag],
              args: { name: "archiveId" },
            },
          ],
        },
        {
          name: [
            "connectionStrings",
            "connectionstrings",
            "connection-strings",
            "connectionString",
            "connectionstring",
            "connection-string",
            "cs",
          ],
          description: "Manage MongoDB cluster connection string",
          subcommands: [
            {
              name: ["describe", "get"],
              description:
                "Return the SRV connection string for the cluster you specify",
              options: [
                outputFlag,
                projectIdFlag,
                {
                  name: "--type",
                  description: "Type of connection string",
                  args: { name: "type", default: "standard" },
                },
              ],
              args: { name: "clusterName" },
            },
          ],
        },
        {
          name: [
            "availableRegions",
            "availableregions",
            "available-regions",
            "availableRegion",
            "availableregion",
            "available-region",
          ],
          description: "Manage available regions for your project",
          subcommands: [
            {
              name: ["list", "ls"],
              description:
                "List available regions that Atlas supports for new deployments",
              options: [outputFlag, projectIdFlag, providerFlag, tierFlag],
            },
          ],
        },
        {
          name: [
            "sampleData",
            "sampledata",
            "sample-data",
            "sampleDatum",
            "sampledatum",
            "sample-datum",
          ],
          description: "Manage sample data for your cluster",
          subcommands: [
            {
              name: "load",
              description:
                "Load sample data into the specified cluster for your project",
              options: [outputFlag, projectIdFlag],
              args: { name: "clusterName" },
            },
            {
              name: ["describe", "get"],
              description:
                "Return the details for the specified sample data load job",
              options: [outputFlag, projectIdFlag],
              args: { name: "id" },
            },
            {
              name: "watch",
              description:
                "Watch the specified sample data job in your cluster until it completes",
              options: [projectIdFlag],
              args: { name: "id" },
            },
          ],
        },
      ],
    },
    {
      name: ["dbusers", "dbuser"],
      description: "Manage database users for your project",
      subcommands: [
        {
          name: ["list", "ls"],
          description: "Return all database users for your project",
          options: [
            compactFlag,
            limitFlag,
            omitCountFlag,
            outputFlag,
            pageFlag,
            projectIdFlag,
          ],
        },
        {
          name: ["describe", "get"],
          description:
            "Return the details for the specified database user for your project",
          options: [
            {
              name: "--authDB",
              description: "Authentication database name",
              args: { name: "authDB", default: "admin" },
            },
            outputFlag,
            projectIdFlag,
          ],
          args: { name: "username" },
        },
        {
          name: "create",
          description: "Create a database user for your project",
          options: [
            {
              name: "--awsIAMType",
              description:
                "AWS IAM method by which the provided username is authenticated",
              args: {
                name: "awsIAMType",
                suggestions: ["NONE", "USER", "ROLE"],
                default: "NONE",
              },
            },
            {
              name: "--deleteAfter",
              description:
                "Timestamp in ISO 8601 in UTC after which Atlas deletes the user",
              args: { name: "deleteAfter" },
            },
            {
              name: "--desc",
              description: "Description of this database user",
              args: { name: "desc" },
            },
            {
              name: "--ldapType",
              description:
                "LDAP method by which the provided username is authenticated",
              args: {
                name: "ldapType",
                suggestions: ["NONE", "USER", "GROUP"],
                default: "NONE",
              },
            },
            {
              name: "--oidcType",
              description:
                "OIDC method by which the provided database user is authenticated",
              args: {
                name: "oidcType",
                suggestions: ["NONE", "USER", "IDP_GROUP"],
                default: "NONE",
              },
            },
            outputFlag,
            {
              name: ["--password", "-p"],
              description: "Password for the database user",
              args: { name: "password" },
            },
            projectIdFlag,
            {
              name: "--role",
              description:
                "Comma-separated list that specifies the user's roles and the databases or collections on which the roles apply",
              args: { name: "role" },
              isRepeatable: true,
            },
            {
              name: "--scope",
              description: "Array of clusters that this user has access to",
              args: { name: "scope" },
              isRepeatable: true,
            },
            {
              name: ["--username", "-u"],
              description: "Username for authenticating to MongoDB",
              args: { name: "username" },
            },
            {
              name: "--x509Type",
              description:
                "X.509 method for authenticating the specified username",
              args: {
                name: "x509Type",
                suggestions: ["NONE", "MANAGED", "CUSTOMER"],
                default: "NONE",
              },
            },
          ],
          args: { name: "builtInRole", isOptional: true, isVariadic: true },
        },
        {
          name: ["delete", "rm"],
          description: "Remove the specified database user from your project",
          options: [
            {
              name: "--authDB",
              description: "Authentication database name",
              args: { name: "authDB", default: "admin" },
            },
            forceFlag,
            projectIdFlag,
          ],
          args: { name: "username" },
        },
        {
          name: "update",
          description: "Modify the details of a database user in your project",
          options: [
            {
              name: "--authDB",
              description: "Authentication database name",
              args: { name: "authDB" },
            },
            {
              name: "--desc",
              description: "Description of this database user",
              args: { name: "desc" },
            },
            outputFlag,
            {
              name: ["--password", "-p"],
              description: "Password for the database user",
              args: { name: "password" },
            },
            projectIdFlag,
            {
              name: "--role",
              description:
                "User's roles and the databases or collections on which the roles apply",
              args: { name: "role" },
              isRepeatable: true,
            },
            {
              name: "--scope",
              description: "Array of clusters that this user has access to",
              args: { name: "scope" },
              isRepeatable: true,
            },
            {
              name: ["--username", "-u"],
              description: "Username for authenticating to MongoDB",
              args: { name: "username" },
            },
            {
              name: "--x509Type",
              description:
                "X.509 method for authenticating the specified username",
              args: {
                name: "x509Type",
                suggestions: ["NONE", "MANAGED", "CUSTOMER"],
                default: "NONE",
              },
            },
          ],
          args: { name: "username" },
        },
        {
          name: ["certs", "cert"],
          description: "Manage Atlas x509 certificates for your database users",
          subcommands: [
            {
              name: ["list", "ls"],
              description:
                "Return all Atlas-managed, unexpired X.509 certificates for the specified database user",
              options: [
                limitFlag,
                omitCountFlag,
                outputFlag,
                pageFlag,
                projectIdFlag,
              ],
              args: { name: "username" },
            },
            {
              name: "create",
              description:
                "Create a new Atlas-managed X.509 certificate for the specified database user",
              options: [
                {
                  name: "--monthsUntilExpiration",
                  description:
                    "Number of months until the X.509 certificate expires",
                  args: { name: "monthsUntilExpiration", default: "3" },
                },
                outputFlag,
                projectIdFlag,
                {
                  name: "--username",
                  description: "Username of a database user",
                  args: { name: "username" },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: [
        "customDbRoles",
        "customdbroles",
        "custom-db-roles",
        "customDbRole",
        "customdbrole",
        "custom-db-role",
        "customDBRoles",
      ],
      description: "Manage custom database roles for your project",
      subcommands: [
        {
          name: "create",
          description: "Create a custom database role for your project",
          options: [
            {
              name: "--inheritedRole",
              description:
                "List of inherited roles and the database on which the role is granted",
              args: { name: "inheritedRole" },
              isRepeatable: true,
            },
            outputFlag,
            {
              name: "--privilege",
              description: "List of actions per database and collection",
              args: { name: "privilege" },
              isRepeatable: true,
            },
            projectIdFlag,
          ],
          args: { name: "roleName" },
        },
        {
          name: ["describe", "get"],
          description: "Return a single custom database role for your project",
          options: [outputFlag, projectIdFlag],
          args: { name: "roleName" },
        },
        {
          name: ["list", "ls"],
          description: "List custom database roles for your project",
          options: [outputFlag, projectIdFlag],
        },
        {
          name: ["delete", "rm"],
          description:
            "Remove the specified custom database role from your project",
          options: [forceFlag, projectIdFlag],
          args: { name: "roleName" },
        },
        {
          name: "update",
          description: "Update a custom database role for your project",
          options: [
            {
              name: "--append",
              description:
                "Input action and inheritedRoles to append to the existing role",
            },
            {
              name: "--inheritedRole",
              description:
                "List of inherited roles and the database on which the role is granted",
              args: { name: "inheritedRole" },
              isRepeatable: true,
            },
            outputFlag,
            {
              name: "--privilege",
              description: "List of actions per database and collection",
              args: { name: "privilege" },
              isRepeatable: true,
            },
            projectIdFlag,
          ],
          args: { name: "roleName" },
        },
      ],
    },
    {
      name: [
        "accessLists",
        "accesslists",
        "access-lists",
        "accessList",
        "accesslist",
        "access-list",
        "whitelists",
        "whitelist",
      ],
      description:
        "Manage the list of IP addresses that can access your Atlas project",
      subcommands: [
        {
          name: ["describe", "get"],
          description:
            "Return the details for the specified IP access list entry",
          options: [outputFlag, projectIdFlag],
          args: { name: "entry" },
        },
        {
          name: ["list", "ls"],
          description: "Return all IP access list entries for your project",
          options: [
            limitFlag,
            omitCountFlag,
            outputFlag,
            pageFlag,
            projectIdFlag,
          ],
        },
        {
          name: "create",
          description: "Create an IP access list entry for your project",
          options: [
            commentFlag,
            currentIpFlag,
            {
              name: "--deleteAfter",
              description:
                "ISO-8601-formatted UTC date after which Atlas removes the entry from the access list",
              args: { name: "deleteAfter" },
            },
            outputFlag,
            projectIdFlag,
            {
              name: "--type",
              description: "Type of access list entry",
              args: {
                name: "type",
                suggestions: ["cidrBlock", "ipAddress", "awsSecurityGroup"],
                default: "ipAddress",
              },
            },
          ],
          args: { name: "entry", isOptional: true },
        },
        {
          name: ["delete", "rm"],
          description:
            "Remove the specified IP access list entry from your project",
          options: [forceFlag, projectIdFlag],
          args: { name: "entry" },
        },
      ],
    },
    {
      name: ["alerts", "alert"],
      description: "Manage alerts for your project",
      subcommands: [
        {
          name: ["settings", "config"],
          description: "Manages alerts configuration for your project",
          subcommands: [
            {
              name: "create",
              description: "Create an alert configuration for your project",
              options: [
                {
                  name: "--apiKey",
                  description:
                    "Datadog API Key, Opsgenie API Key, or VictorOps API key",
                  args: { name: "apiKey" },
                },
                {
                  name: "--enabled",
                  description:
                    "Flag that indicates whether to enable the alert configuration",
                },
                {
                  name: "--event",
                  description: "Type of event that triggered the alert",
                  args: { name: "event" },
                },
                {
                  name: ["--file", "-f"],
                  description:
                    "Path to the JSON configuration file that defines alert configuration settings",
                  args: { name: "file", template: "filepaths" },
                },
                {
                  name: "--matcherFieldName",
                  description:
                    "Name of the field in the target object to match on",
                  args: { name: "matcherFieldName" },
                },
                {
                  name: "--matcherOperator",
                  description:
                    "Comparison operator to apply when checking the current metric against matcherValue",
                  args: {
                    name: "matcherOperator",
                    suggestions: [
                      "CONTAINS",
                      "ENDS_WITH",
                      "EQUALS",
                      "NOT_CONTAINS",
                      "NOT_EQUALS",
                      "REGEX",
                      "STARTS_WITH",
                    ],
                  },
                },
                {
                  name: "--matcherValue",
                  description: "Value to test with the specified operator",
                  args: { name: "matcherValue" },
                },
                {
                  name: "--metricMode",
                  description:
                    "Option that indicates whether Atlas computes the current metric value as an average",
                  args: { name: "metricMode" },
                },
                {
                  name: "--metricName",
                  description:
                    "Name of the metric against which this command checks the configured alert",
                  args: { name: "metricName" },
                },
                {
                  name: "--metricOperator",
                  description:
                    "Comparison operator to apply when checking the current metric value",
                  args: {
                    name: "metricOperator",
                    suggestions: ["LESS_THAN", "GREATER_THAN"],
                  },
                },
                {
                  name: "--metricThreshold",
                  description:
                    "Threshold value outside of which an alert will be triggered",
                  args: { name: "metricThreshold" },
                },
                {
                  name: "--metricUnits",
                  description: "Units for the threshold value",
                  args: {
                    name: "metricUnits",
                    suggestions: [
                      "BITS",
                      "BYTES",
                      "DAYS",
                      "GIGABITS",
                      "GIGABYTES",
                      "HOURS",
                      "KILOBITS",
                      "KILOBYTES",
                      "MEGABITS",
                      "MEGABYTES",
                      "MILLISECONDS",
                      "MINUTES",
                      "PETABYTES",
                      "RAW",
                      "SECONDS",
                      "TERABYTES",
                    ],
                  },
                },
                {
                  name: "--notificationChannelName",
                  description: "Slack channel name",
                  args: { name: "notificationChannelName" },
                },
                {
                  name: "--notificationDelayMin",
                  description:
                    "Number of minutes to wait after an alert condition is detected before sending out the first notification",
                  args: { name: "notificationDelayMin" },
                },
                {
                  name: "--notificationEmailAddress",
                  description:
                    "Email address to which alert notifications are sent",
                  args: { name: "notificationEmailAddress" },
                },
                {
                  name: "--notificationEmailEnabled",
                  description: "Flag that enables email notifications",
                },
                {
                  name: "--notificationIntervalMin",
                  description:
                    "Number of minutes to wait between successive notifications for unacknowledged alerts that are not resolved",
                  args: { name: "notificationIntervalMin" },
                },
                {
                  name: "--notificationMobileNumber",
                  description:
                    "Mobile number to which alert notifications are sent",
                  args: { name: "notificationMobileNumber" },
                },
                {
                  name: "--notificationRegion",
                  description: "Region that indicates which API URL to use",
                  args: { name: "notificationRegion" },
                },
                {
                  name: "--notificationRole",
                  description:
                    "List that contains the one or more organization or project roles that receive the configured alert",
                  args: { name: "notificationRole" },
                  isRepeatable: true,
                },
                {
                  name: "--notificationServiceKey",
                  description: "PagerDuty service key",
                  args: { name: "notificationServiceKey" },
                },
                {
                  name: "--notificationSmsEnabled",
                  description: "Flag that enables text message notifications",
                },
                {
                  name: "--notificationTeamId",
                  description: "Unique identifier of a team",
                  args: { name: "notificationTeamId" },
                },
                {
                  name: "--notificationToken",
                  description: "Slack API token, or Bot token",
                  args: { name: "notificationToken" },
                },
                {
                  name: "--notificationType",
                  description: "Type of alert notification",
                  args: {
                    name: "notificationType",
                    suggestions: [
                      "DATADOG",
                      "EMAIL",
                      "MICROSOFT_TEAMS",
                      "ORG",
                      "OPS_GENIE",
                      "PAGER_DUTY",
                      "SLACK",
                      "SMS",
                      "TEAM",
                      "USER",
                      "VICTOR_OPS",
                      "WEBHOOK",
                    ],
                  },
                },
                {
                  name: "--notificationUsername",
                  description:
                    "Name of the Atlas user to which to send notifications",
                  args: { name: "notificationUsername" },
                },
                {
                  name: "--notificationVictorOpsRoutingKey",
                  description:
                    "Routing key associated with your Splunk On-Call account",
                  args: { name: "notificationVictorOpsRoutingKey" },
                },
                {
                  name: "--notificationWebhookSecret",
                  description:
                    "Authentication secret for a webhook-based alert",
                  args: { name: "notificationWebhookSecret" },
                },
                {
                  name: "--notificationWebhookUrl",
                  description:
                    "Target URL for a webhook-based alert or Microsoft Teams alert",
                  args: { name: "notificationWebhookUrl" },
                },
                outputFlag,
                projectIdFlag,
              ],
            },
            {
              name: ["list", "ls"],
              description: "Returns all alert configurations for your project",
              options: [
                compactFlag,
                limitFlag,
                outputFlag,
                pageFlag,
                projectIdFlag,
              ],
            },
            {
              name: ["describe", "get"],
              description:
                "Return the details for the specified alert settings for your project",
              options: [outputFlag, projectIdFlag],
              args: { name: "alertConfigId" },
            },
            {
              name: ["delete", "rm"],
              description:
                "Remove the specified alert configuration for your project",
              options: [forceFlag, projectIdFlag],
              args: { name: "alertConfigId" },
            },
            {
              name: ["fields", "field"],
              description:
                "Manages alert configuration fields for your project",
              subcommands: [
                {
                  name: ["type", "types"],
                  description:
                    "Return all available field types that the matcherFieldName option accepts when you create or update an alert configuration",
                  options: [outputFlag],
                },
              ],
            },
            {
              name: "update",
              description:
                "Modify the details of the specified alert configuration for your project",
              options: [
                {
                  name: "--apiKey",
                  description:
                    "Datadog API Key, Opsgenie API Key, or VictorOps API key",
                  args: { name: "apiKey" },
                },
                {
                  name: "--enabled",
                  description:
                    "Flag that indicates whether to enable the alert configuration",
                },
                {
                  name: "--event",
                  description: "Type of event that triggered the alert",
                  args: { name: "event" },
                },
                {
                  name: ["--file", "-f"],
                  description:
                    "Path to the JSON configuration file that defines alert configuration settings",
                  args: { name: "file", template: "filepaths" },
                },
                {
                  name: "--matcherFieldName",
                  description:
                    "Name of the field in the target object to match on",
                  args: { name: "matcherFieldName" },
                },
                {
                  name: "--matcherOperator",
                  description:
                    "Comparison operator to apply when checking the current metric against matcherValue",
                  args: {
                    name: "matcherOperator",
                    suggestions: [
                      "CONTAINS",
                      "ENDS_WITH",
                      "EQUALS",
                      "NOT_CONTAINS",
                      "NOT_EQUALS",
                      "REGEX",
                      "STARTS_WITH",
                    ],
                  },
                },
                {
                  name: "--matcherValue",
                  description: "Value to test with the specified operator",
                  args: { name: "matcherValue" },
                },
                {
                  name: "--metricMode",
                  description:
                    "Option that indicates whether Atlas computes the current metric value as an average",
                  args: { name: "metricMode" },
                },
                {
                  name: "--metricName",
                  description:
                    "Name of the metric against which this command checks the configured alert",
                  args: { name: "metricName" },
                },
                {
                  name: "--metricOperator",
                  description:
                    "Comparison operator to apply when checking the current metric value",
                  args: {
                    name: "metricOperator",
                    suggestions: ["LESS_THAN", "GREATER_THAN"],
                  },
                },
                {
                  name: "--metricThreshold",
                  description:
                    "Threshold value outside of which an alert will be triggered",
                  args: { name: "metricThreshold" },
                },
                {
                  name: "--metricUnits",
                  description: "Units for the threshold value",
                  args: {
                    name: "metricUnits",
                    suggestions: [
                      "BITS",
                      "BYTES",
                      "DAYS",
                      "GIGABITS",
                      "GIGABYTES",
                      "HOURS",
                      "KILOBITS",
                      "KILOBYTES",
                      "MEGABITS",
                      "MEGABYTES",
                      "MILLISECONDS",
                      "MINUTES",
                      "PETABYTES",
                      "RAW",
                      "SECONDS",
                      "TERABYTES",
                    ],
                  },
                },
                {
                  name: "--notificationChannelName",
                  description: "Slack channel name",
                  args: { name: "notificationChannelName" },
                },
                {
                  name: "--notificationDelayMin",
                  description:
                    "Number of minutes to wait after an alert condition is detected before sending out the first notification",
                  args: { name: "notificationDelayMin" },
                },
                {
                  name: "--notificationEmailAddress",
                  description:
                    "Email address to which alert notifications are sent",
                  args: { name: "notificationEmailAddress" },
                },
                {
                  name: "--notificationEmailEnabled",
                  description: "Flag that enables email notifications",
                },
                {
                  name: "--notificationIntervalMin",
                  description:
                    "Number of minutes to wait between successive notifications for unacknowledged alerts that are not resolved",
                  args: { name: "notificationIntervalMin" },
                },
                {
                  name: "--notificationMobileNumber",
                  description:
                    "Mobile number to which alert notifications are sent",
                  args: { name: "notificationMobileNumber" },
                },
                {
                  name: "--notificationRegion",
                  description: "Region that indicates which API URL to use",
                  args: { name: "notificationRegion" },
                },
                {
                  name: "--notificationRole",
                  description:
                    "List that contains the one or more organization or project roles that receive the configured alert",
                  args: { name: "notificationRole" },
                  isRepeatable: true,
                },
                {
                  name: "--notificationServiceKey",
                  description: "PagerDuty service key",
                  args: { name: "notificationServiceKey" },
                },
                {
                  name: "--notificationSmsEnabled",
                  description: "Flag that enables text message notifications",
                },
                {
                  name: "--notificationTeamId",
                  description: "Unique identifier of a team",
                  args: { name: "notificationTeamId" },
                },
                {
                  name: "--notificationToken",
                  description: "Slack API token, or Bot token",
                  args: { name: "notificationToken" },
                },
                {
                  name: "--notificationType",
                  description: "Type of alert notification",
                  args: {
                    name: "notificationType",
                    suggestions: [
                      "DATADOG",
                      "EMAIL",
                      "MICROSOFT_TEAMS",
                      "ORG",
                      "OPS_GENIE",
                      "PAGER_DUTY",
                      "SLACK",
                      "SMS",
                      "TEAM",
                      "USER",
                      "VICTOR_OPS",
                      "WEBHOOK",
                    ],
                  },
                },
                {
                  name: "--notificationUsername",
                  description:
                    "Name of the Atlas user to which to send notifications",
                  args: { name: "notificationUsername" },
                },
                {
                  name: "--notificationVictorOpsRoutingKey",
                  description:
                    "Routing key associated with your Splunk On-Call account",
                  args: { name: "notificationVictorOpsRoutingKey" },
                },
                {
                  name: "--notificationWebhookSecret",
                  description:
                    "Authentication secret for a webhook-based alert",
                  args: { name: "notificationWebhookSecret" },
                },
                {
                  name: "--notificationWebhookUrl",
                  description:
                    "Target URL for a webhook-based alert or Microsoft Teams alert",
                  args: { name: "notificationWebhookUrl" },
                },
                {
                  name: "--notifierId",
                  description:
                    "System-generated unique identifier assigned to each notification method",
                  args: { name: "notifierId" },
                },
                outputFlag,
                projectIdFlag,
              ],
              args: { name: "alertConfigId" },
            },
            {
              name: "enable",
              description:
                "Enables one alert configuration for the specified project",
              options: [outputFlag, projectIdFlag],
              args: { name: "alertConfigId" },
            },
            {
              name: "disable",
              description:
                "Disables one alert configuration for the specified project",
              options: [outputFlag, projectIdFlag],
              args: { name: "alertConfigId" },
            },
          ],
        },
        {
          name: ["describe", "get"],
          description:
            "Return the details for the specified alert for your project",
          options: [outputFlag, projectIdFlag],
          args: { name: "alertId" },
        },
        {
          name: ["list", "ls"],
          description: "Return all alerts for your project",
          options: [
            limitFlag,
            omitCountFlag,
            outputFlag,
            pageFlag,
            projectIdFlag,
            {
              name: "--status",
              description: "State of the alert",
              args: {
                name: "status",
                suggestions: ["TRACKING", "OPEN", "CLOSED", "CANCELLED"],
              },
            },
          ],
        },
        {
          name: ["acknowledge", "ack"],
          description: "Acknowledges the specified alert for your project",
          options: [
            commentFlag,
            {
              name: ["--forever", "-F"],
              description: "Option that acknowledges an alert 'forever'",
            },
            outputFlag,
            projectIdFlag,
            {
              name: "--until",
              description:
                "ISO 8601-formatted time until which the alert is acknowledged",
              args: { name: "until" },
            },
          ],
          args: { name: "alertId" },
        },
        {
          name: ["unacknowledge", "unack"],
          description: "Unacknowledge the specified alert for your project",
          options: [commentFlag, outputFlag, projectIdFlag],
          args: { name: "alertId" },
        },
      ],
    },
    {
      name: ["backups", "backup"],
      description: "Manage cloud backups for your project",
      subcommands: [
        {
          name: ["snapshots", "snapshot"],
          description: "Manage cloud backup snapshots for your project",
          subcommands: [
            {
              name: ["list", "ls"],
              description:
                "Return all cloud backup snapshots for your project and cluster",
              options: [
                limitFlag,
                omitCountFlag,
                outputFlag,
                pageFlag,
                projectIdFlag,
              ],
              args: { name: "clusterName" },
            },
            {
              name: ["create", "take"],
              description:
                "Create a backup snapshot for your project and cluster",
              options: [
                {
                  name: "--desc",
                  description: "Description of the on-demand snapshot",
                  args: { name: "desc" },
                },
                outputFlag,
                projectIdFlag,
                {
                  name: "--retention",
                  description:
                    "Number of days that Atlas should retain the on-demand snapshot",
                  args: { name: "retention", default: "1" },
                },
              ],
              args: { name: "clusterName" },
            },
            {
              name: ["describe", "get"],
              description:
                "Return the details for the specified snapshot for your project",
              options: [clusterNameFlag, outputFlag, projectIdFlag],
              args: { name: "snapshotId" },
            },
            {
              name: "watch",
              description:
                "Watch the specified snapshot in your project until it becomes available",
              options: [clusterNameFlag, projectIdFlag],
              args: { name: "snapshotId" },
            },
            {
              name: ["delete", "rm"],
              description: "Remove the specified backup snapshot",
              options: [clusterNameFlag, forceFlag, projectIdFlag],
              args: { name: "snapshotId" },
            },
            {
              name: "download",
              description:
                "Download one snapshot for the specified flex cluster",
              options: [clusterNameFlag, outFlag, projectIdFlag],
              args: { name: "snapshotId" },
            },
          ],
        },
        {
          name: ["restores", "restore"],
          description: "Manage cloud backup restore jobs for your project",
          subcommands: [
            {
              name: ["list", "ls"],
              description:
                "Return all cloud backup restore jobs for your project and cluster",
              options: [
                limitFlag,
                omitCountFlag,
                outputFlag,
                pageFlag,
                projectIdFlag,
              ],
              args: { name: "clusterName" },
            },
            {
              name: "start",
              description: "Start a restore job for your project and cluster",
              options: [
                clusterNameFlag,
                {
                  name: "--oplogInc",
                  description:
                    "32-bit incrementing ordinal that represents operations within a given second",
                  args: { name: "oplogInc" },
                },
                {
                  name: "--oplogTs",
                  description:
                    "Oplog timestamp given as a timestamp in the number of seconds that have elapsed since the UNIX Epoch",
                  args: { name: "oplogTs" },
                },
                outputFlag,
                {
                  name: "--pointInTimeUTCSeconds",
                  description:
                    "Timestamp in the number of seconds that have elapsed since the UNIX epoch that represents the point in time to which your data will be restored",
                  args: { name: "pointInTimeUTCSeconds" },
                },
                projectIdFlag,
                {
                  name: "--snapshotId",
                  description: "Unique identifier of the snapshot to restore",
                  args: { name: "snapshotId" },
                },
                {
                  name: "--targetClusterName",
                  description: "Name of the target cluster",
                  args: { name: "targetClusterName" },
                },
                {
                  name: "--targetProjectId",
                  description:
                    "Unique identifier of the project that contains the destination cluster for the restore job",
                  args: { name: "targetProjectId" },
                },
              ],
              args: { name: "automated|download|pointInTime" },
            },
            {
              name: ["describe", "get"],
              description: "Describe a cloud backup restore job",
              options: [clusterNameFlag, outputFlag, projectIdFlag],
              args: { name: "restoreJobId" },
            },
            {
              name: "watch",
              description: "Watch for a restore job to complete",
              options: [clusterNameFlag, outputFlag, projectIdFlag],
              args: { name: "restoreJobId" },
            },
          ],
        },
        {
          name: ["exports", "export"],
          description: "Manage cloud backup export jobs for your project",
          subcommands: [
            {
              name: ["jobs", "job"],
              description: "Manage cloud backup export jobs for your project",
              subcommands: [
                {
                  name: ["list", "ls"],
                  description:
                    "Return all cloud backup export jobs for your project and cluster",
                  options: [
                    limitFlag,
                    omitCountFlag,
                    outputFlag,
                    pageFlag,
                    projectIdFlag,
                  ],
                  args: { name: "clusterName" },
                },
                {
                  name: ["describe", "get"],
                  description:
                    "Return one cloud backup export job for your project, cluster and job",
                  options: [
                    clusterNameFlag,
                    {
                      name: "--exportId",
                      description:
                        "Unique string that identifies the AWS S3 bucket to which you export your snapshots",
                      args: { name: "exportId" },
                    },
                    outputFlag,
                    projectIdFlag,
                  ],
                },
                {
                  name: "create",
                  description:
                    "Export one backup snapshot for an M10 or higher Atlas cluster to an existing AWS S3 bucket",
                  options: [
                    bucketIdFlag,
                    clusterNameFlag,
                    {
                      name: "--customData",
                      description:
                        "Custom data to include in the metadata file named .complete that Atlas uploads to the bucket when the export job finishes",
                      args: { name: "customData" },
                      isRepeatable: true,
                    },
                    outputFlag,
                    projectIdFlag,
                    {
                      name: "--snapshotId",
                      description: "Unique identifier of the snapshot",
                      args: { name: "snapshotId" },
                    },
                  ],
                },
                {
                  name: "watch",
                  description: "Watch for the specified export job to complete",
                  options: [clusterNameFlag, outputFlag, projectIdFlag],
                  args: { name: "exportJobId" },
                },
              ],
            },
            {
              name: ["buckets", "bucket"],
              description:
                "Manage cloud backup export buckets for your project",
              subcommands: [
                {
                  name: ["list", "ls"],
                  description:
                    "List cloud backup restore buckets for your project and cluster",
                  options: [
                    limitFlag,
                    omitCountFlag,
                    outputFlag,
                    pageFlag,
                    projectIdFlag,
                  ],
                },
                {
                  name: "create",
                  description:
                    "Create an export destination for Atlas backups using an existing AWS S3 bucket",
                  options: [
                    {
                      name: "--cloudProvider",
                      description:
                        "Name of the provider of the cloud service where Atlas can access the S3 bucket",
                      args: { name: "cloudProvider" },
                    },
                    {
                      name: "--iamRoleId",
                      description:
                        "Unique identifier that Atlas assigns to the cloud provider access role for the bucket",
                      args: { name: "iamRoleId" },
                    },
                    outputFlag,
                    projectIdFlag,
                  ],
                  args: { name: "bucketName" },
                },
                {
                  name: ["delete", "rm"],
                  description: "Delete a snapshot export bucket",
                  options: [bucketIdFlag, forceFlag, projectIdFlag],
                },
                {
                  name: ["describe", "get"],
                  description: "Return one snapshot export bucket",
                  options: [bucketIdFlag, outputFlag, projectIdFlag],
                },
              ],
            },
          ],
        },
        {
          name: "schedule",
          description:
            "Return a cloud backup schedule for the cluster you specify",
          subcommands: [
            {
              name: ["describe", "get"],
              description:
                "Describe a cloud backup schedule for the cluster you specify",
              options: [outputFlag, projectIdFlag],
              args: { name: "clusterName" },
            },
            {
              name: ["update", "updates"],
              description:
                "Modify the backup schedule for the specified cluster for your project",
              options: [
                {
                  name: "--autoExport",
                  description:
                    "Flag that enables automatic export of cloud backup snapshots to the AWS bucket",
                },
                clusterNameFlag,
                {
                  name: "--exportBucketId",
                  description:
                    "Unique identifier that Atlas assigns to the bucket",
                  args: { name: "exportBucketId" },
                },
                {
                  name: "--exportFrequencyType",
                  description: "Frequency associated with the export policy",
                  args: { name: "exportFrequencyType" },
                },
                {
                  name: ["--file", "-f"],
                  description:
                    "Path to an optional JSON configuration file that defines backup schedule settings",
                  args: { name: "file", template: "filepaths" },
                },
                {
                  name: "--noAutoExport",
                  description:
                    "Flag that disables automatic export of cloud backup snapshots to the AWS bucket",
                },
                {
                  name: "--noUpdateSnapshots",
                  description:
                    "Flag that disables applying the retention changes in the updated backup policy to snapshots that Atlas took previously",
                },
                {
                  name: "--noUseOrgAndGroupNamesInExportPrefix",
                  description:
                    "Flag that disables usage of organization and project names instead of organization and project UUIDs in the path for the metadata files that Atlas uploads to your S3 bucket after it finishes exporting the snapshots",
                },
                outputFlag,
                {
                  name: "--policy",
                  description:
                    "Array containing a document for each backup policy item in the desired updated backup policy",
                  args: { name: "policy" },
                  isRepeatable: true,
                },
                projectIdFlag,
                {
                  name: "--referenceHourOfDay",
                  description:
                    "Hour of the day to schedule snapshots using a 24-hour clock",
                  args: { name: "referenceHourOfDay" },
                },
                {
                  name: "--referenceMinuteOfHour",
                  description: "Minute of the hour to schedule snapshots",
                  args: { name: "referenceMinuteOfHour" },
                },
                {
                  name: "--restoreWindowDays",
                  description:
                    "Number of days back in time you can restore to with Continuous Cloud Backup accuracy",
                  args: { name: "restoreWindowDays" },
                },
                {
                  name: "--updateSnapshots",
                  description:
                    "Flag that enables applying the retention changes in the updated backup policy to snapshots that Atlas took previously",
                },
                {
                  name: "--useOrgAndGroupNamesInExportPrefix",
                  description:
                    "Flag that enables usage of organization and project names instead of organization and project UUIDs in the path for the metadata files that Atlas uploads to your S3 bucket after it finishes exporting the snapshots",
                },
              ],
            },
            {
              name: ["delete", "rm"],
              description: "Delete all backup schedules of a cluster",
              options: [forceFlag, projectIdFlag],
              args: { name: "clusterName" },
            },
          ],
        },
        {
          name: ["compliancePolicy", "compliancepolicy", "compliance-policy"],
          description: "Manage cloud backup compliance policy for your project",
          subcommands: [
            {
              name: "setup",
              description:
                "Setup the backup compliance policy for your project with a configuration file",
              options: [
                {
                  name: ["--file", "-f"],
                  description:
                    "Path to a JSON configuration file that defines backup compliance policy settings",
                  args: { name: "file", template: "filepaths" },
                },
                forceFlag,
                outputFlag,
                projectIdFlag,
                watchFlag,
              ],
            },
            {
              name: "enable",
              description:
                "Enable Backup Compliance Policy without any configuration",
              options: [
                {
                  name: "--authorizedEmail",
                  description:
                    "Email address of a security or legal representative",
                  args: { name: "authorizedEmail" },
                },
                {
                  name: "--authorizedUserFirstName",
                  description:
                    "First name of the user who is authorized to update the Backup Compliance Policy settings",
                  args: { name: "authorizedUserFirstName" },
                },
                {
                  name: "--authorizedUserLastName",
                  description:
                    "Last name of the user who is authorized to update the Backup Compliance Policy settings",
                  args: { name: "authorizedUserLastName" },
                },
                forceFlag,
                outputFlag,
                projectIdFlag,
                watchFlag,
              ],
            },
            {
              name: ["describe", "get"],
              description:
                "Return the backup compliance policy for your project",
              options: [outputFlag, projectIdFlag],
            },
            {
              name: ["policies", "policy"],
              description:
                "Manage the individual policy items of the backup compliance policy for your project",
              subcommands: [
                {
                  name: ["describe", "get"],
                  description:
                    "Return the individual policy items of the backup compliance policy for your project",
                  options: [outputFlag, projectIdFlag],
                },
                {
                  name: "ondemand",
                  description:
                    "Manage the on-demand policy item of the backup compliance policy for your project",
                  subcommands: [
                    {
                      name: "create",
                      description:
                        "Create the on-demand policy item of the backup compliance policy for your project",
                      options: [
                        outputFlag,
                        projectIdFlag,
                        retentionUnitFlag,
                        retentionValueFlag,
                        watchFlag,
                      ],
                    },
                    {
                      name: "update",
                      description:
                        "Update the on-demand policy of the backup compliance for your project",
                      options: [
                        outputFlag,
                        projectIdFlag,
                        retentionUnitFlag,
                        retentionValueFlag,
                        watchFlag,
                      ],
                    },
                    {
                      name: ["describe", "get"],
                      description:
                        "Return the on-demand policy item of the backup compliance policy for your project",
                      options: [outputFlag, projectIdFlag],
                    },
                  ],
                },
                {
                  name: "scheduled",
                  description:
                    "Manage the scheduled policy items of the backup compliance policy for your project",
                  subcommands: [
                    {
                      name: "create",
                      description:
                        "Create a scheduled policy item for the backup compliance policy for your project",
                      options: [
                        {
                          name: "--frequencyInterval",
                          description:
                            "Number that indicates the frequency interval for a set of snapshots",
                          args: { name: "frequencyInterval" },
                        },
                        {
                          name: "--frequencyType",
                          description:
                            "Frequency type associated with the backup policy: 'daily', 'hourly', 'monthly', 'weekly'",
                          args: { name: "frequencyType" },
                        },
                        outputFlag,
                        projectIdFlag,
                        retentionUnitFlag,
                        retentionValueFlag,
                        watchFlag,
                      ],
                    },
                    {
                      name: ["describe", "get", "list", "ls"],
                      description:
                        "Return the scheduled policy items of the backup compliance policy for your project",
                      options: [outputFlag, projectIdFlag],
                    },
                  ],
                },
              ],
            },
            {
              name: ["copyProtection", "copyprotection", "copy-protection"],
              description:
                "Manage copy protection of the backup compliance policy for your project",
              subcommands: [
                {
                  name: "enable",
                  description:
                    "Enable copy protection of the backup compliance policy for your project",
                  options: [outputFlag, projectIdFlag, watchFlag],
                },
                {
                  name: "disable",
                  description:
                    "Disable copy protection of the backup compliance policy for your project",
                  options: [outputFlag, projectIdFlag, watchFlag],
                },
              ],
            },
            {
              name: [
                "pointInTimeRestores",
                "pointintimerestores",
                "point-in-time-restores",
                "pointInTimeRestore",
                "pointintimerestore",
                "point-in-time-restore",
              ],
              description:
                "Manage whether the project uses Continuous Cloud Backups with a Backup Compliance Policy",
              subcommands: [
                {
                  name: "enable",
                  description:
                    "Enable Point-in-Time restores of the backup compliance policy for your project",
                  options: [
                    outputFlag,
                    projectIdFlag,
                    {
                      name: "--restoreWindowDays",
                      description:
                        "Number of days back in time you can restore to with Continuous Cloud Backup accuracy",
                      args: { name: "restoreWindowDays" },
                    },
                    watchFlag,
                  ],
                },
              ],
            },
            {
              name: [
                "encryptionAtRest",
                "encryptionatrest",
                "encryption-at-rest",
              ],
              description:
                "Manage encryption-at-rest for the backup compliance policy for your project",
              subcommands: [
                {
                  name: "enable",
                  description:
                    "Enable encryption-at-rest for the backup compliance policy for your project",
                  options: [outputFlag, projectIdFlag, watchFlag],
                },
                {
                  name: "disable",
                  description:
                    "Disable encryption-at-rest for the backup compliance policy for your project",
                  options: [outputFlag, projectIdFlag, watchFlag],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: ["events", "event"],
      description: "Manage events for your organization or project",
      subcommands: [
        {
          name: ["organizations", "organization", "orgs", "org"],
          description: "Organization operations",
          subcommands: [
            {
              name: ["list", "ls"],
              description: "Return all events for the specified organization",
              options: [
                limitFlag,
                {
                  name: "--maxDate",
                  description: "Maximum created date",
                  args: { name: "maxDate" },
                },
                {
                  name: "--minDate",
                  description: "Minimum created date",
                  args: { name: "minDate" },
                },
                omitCountFlag,
                orgIdFlag,
                outputFlag,
                pageFlag,
                {
                  name: "--type",
                  description: "Type of event that triggered the alert",
                  args: { name: "type" },
                  isRepeatable: true,
                },
              ],
            },
          ],
        },
        {
          name: ["projects", "project"],
          description: "Project operations",
          subcommands: [
            {
              name: ["list", "ls"],
              description: "Return all events for the specified project",
              options: [
                limitFlag,
                {
                  name: "--maxDate",
                  description: "Maximum created date",
                  args: { name: "maxDate" },
                },
                {
                  name: "--minDate",
                  description: "Minimum created date",
                  args: { name: "minDate" },
                },
                omitCountFlag,
                outputFlag,
                pageFlag,
                projectIdFlag,
                {
                  name: "--type",
                  description: "Type of event that triggered the alert",
                  args: { name: "type" },
                  isRepeatable: true,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: ["metrics", "metric", "measurements", "measurement"],
      description: "Get metrics on the MongoDB process",
      subcommands: [
        {
          name: ["processes", "process"],
          description: "Return the process measurements for the specified host",
          options: [
            endFlag,
            granularityFlag,
            limitFlag,
            outputFlag,
            pageFlag,
            periodFlag,
            projectIdFlag,
            startFlag,
            {
              name: "--type",
              description: "Measurements to return",
              args: { name: "type" },
              isRepeatable: true,
            },
          ],
          args: { name: "hostname:port" },
        },
        {
          name: ["disks", "disk"],
          description: "List available disks or disk metrics for a given host",
          subcommands: [
            {
              name: ["list", "ls"],
              description:
                "Return all disks or disk partitions on the specified host for your project",
              options: [
                limitFlag,
                omitCountFlag,
                outputFlag,
                pageFlag,
                projectIdFlag,
              ],
              args: { name: "hostname:port" },
            },
            {
              name: "describe",
              description:
                "Return the measurements of a disk or partition on the specified host",
              options: [
                endFlag,
                granularityFlag,
                limitFlag,
                outputFlag,
                pageFlag,
                periodFlag,
                projectIdFlag,
                startFlag,
                {
                  name: "--type",
                  description: "Measurements to return",
                  args: {
                    name: "type",
                    suggestions: [
                      "DATABASE_AVERAGE_OBJECT_SIZE",
                      "DATABASE_COLLECTION_COUNT",
                      "DATABASE_DATA_SIZE",
                      "DATABASE_STORAGE_SIZE",
                      "DATABASE_INDEX_SIZE",
                      "DATABASE_INDEX_COUNT",
                      "DATABASE_EXTENT_COUNT",
                      "DATABASE_OBJECT_COUNT",
                      "DATABASE_VIEW_COUNT",
                    ],
                  },
                  isRepeatable: true,
                },
              ],
              args: [{ name: "hostname:port" }, { name: "diskName" }],
            },
          ],
        },
        {
          name: ["databases", "database"],
          description:
            "List available databases or database metrics for a given host",
          subcommands: [
            {
              name: ["list", "ls"],
              description:
                "Return all databases running on the specified host for your project",
              options: [
                limitFlag,
                omitCountFlag,
                outputFlag,
                pageFlag,
                projectIdFlag,
              ],
              args: { name: "hostname:port" },
            },
            {
              name: "describe",
              description:
                "Return the measurements of a database on the specified host",
              options: [
                endFlag,
                granularityFlag,
                limitFlag,
                outputFlag,
                pageFlag,
                periodFlag,
                projectIdFlag,
                startFlag,
                {
                  name: "--type",
                  description: "Measurements to return",
                  args: {
                    name: "type",
                    suggestions: [
                      "DATABASE_AVERAGE_OBJECT_SIZE",
                      "DATABASE_COLLECTION_COUNT",
                      "DATABASE_DATA_SIZE",
                      "DATABASE_STORAGE_SIZE",
                      "DATABASE_INDEX_SIZE",
                      "DATABASE_INDEX_COUNT",
                      "DATABASE_EXTENT_COUNT",
                      "DATABASE_OBJECT_COUNT",
                      "DATABASE_VIEW_COUNT",
                    ],
                  },
                  isRepeatable: true,
                },
              ],
              args: [{ name: "hostname:port" }, { name: "databaseName" }],
            },
          ],
        },
      ],
    },
    {
      name: ["performanceAdvisor", "performanceadvisor", "performance-advisor"],
      description:
        "Learn more about slow queries and get suggestions to improve database performance",
      subcommands: [
        {
          name: ["namespaces", "namespace"],
          description:
            "Retrieve namespaces for collections experiencing slow queries",
          subcommands: [
            {
              name: ["list", "ls"],
              description:
                "Return up to 20 namespaces for collections experiencing slow queries on the specified host",
              options: [
                durationFlag,
                outputFlag,
                processNameFlag,
                projectIdFlag,
                sinceFlag,
              ],
            },
          ],
        },
        {
          name: [
            "slowQueryLogs",
            "slowquerylogs",
            "slow-query-logs",
            "slowQueryLog",
            "slowquerylog",
            "slow-query-log",
          ],
          description: "Get log lines for slow queries for a specified host",
          subcommands: [
            {
              name: ["list", "ls"],
              description:
                "Return log lines for slow queries that the Performance Advisor and Query Profiler identified",
              options: [
                durationFlag,
                {
                  name: "--nLog",
                  description: "Maximum number of log lines to return",
                  args: { name: "nLog", default: "20000" },
                },
                {
                  name: "--namespaces",
                  description:
                    "Namespaces from which to retrieve suggested slow query logs formatted as <database>.<collection>. Omit this parameter to return results for all namespaces",
                  args: { name: "namespaces" },
                  isRepeatable: true,
                },
                outputFlag,
                processNameFlag,
                projectIdFlag,
                sinceFlag,
              ],
            },
          ],
        },
        {
          name: [
            "suggestedIndexes",
            "suggestedindexes",
            "suggested-indexes",
            "suggestedIndex",
            "suggestedindex",
            "suggested-index",
          ],
          description:
            "Get suggested indexes for collections experiencing slow queries",
          subcommands: [
            {
              name: ["list", "ls"],
              description:
                "Return the suggested indexes for collections experiencing slow queries",
              options: [
                durationFlag,
                {
                  name: "--nExamples",
                  description:
                    "Maximum number of example queries to provide that a suggested index will improve",
                  args: { name: "nExamples" },
                },
                {
                  name: "--nIndexes",
                  description: "Maximum number of indexes to suggest",
                  args: { name: "nIndexes" },
                },
                namespacesFlag,
                outputFlag,
                processNameFlag,
                projectIdFlag,
                sinceFlag,
              ],
            },
          ],
        },
        {
          name: [
            "slowOperationThreshold",
            "slowoperationthreshold",
            "slow-operation-threshold",
            "slowOT",
            "sot",
            "slowMS",
          ],
          description:
            "Enable or disable management of the slow operation threshold for your cluster",
          subcommands: [
            {
              name: ["enable", "ls"],
              description:
                "Enable the application-managed slow operation threshold for your project",
              options: [projectIdFlag],
            },
            {
              name: "disable",
              description:
                "Disable the application-managed slow operation threshold for your project",
              options: [projectIdFlag],
            },
          ],
        },
      ],
    },
    {
      name: ["logs", "log"],
      description: "Download host logs for your project",
      subcommands: [
        {
          name: "download",
          description:
            "Download a compressed file that contains the MongoDB logs for the specified host",
          options: [
            {
              name: ["--decompress", "-d"],
              description:
                "Flag that indicates whether to decompress the log files",
            },
            {
              name: "--end",
              description:
                "Ending date and time for the range of log messages to retrieve, given in UNIX time",
              args: { name: "end" },
            },
            forceFlag2,
            outFlag,
            projectIdFlag,
            {
              name: "--start",
              description:
                "UNIX Epoch-formatted starting date and time for the range of log messages to retrieve",
              args: { name: "start" },
            },
          ],
          args: [
            { name: "hostname" },
            {
              name: "mongodbgz|mongosgz|mongosqldgz|mongodb-audit-loggz|mongos-audit-loggz",
            },
          ],
        },
      ],
    },
    {
      name: ["processes", "process"],
      description: "Manage MongoDB processes for your project",
      subcommands: [
        {
          name: ["list", "ls"],
          description: "Return all MongoDB processes for your project",
          options: [
            compactFlag,
            limitFlag,
            omitCountFlag,
            outputFlag,
            pageFlag,
            projectIdFlag,
          ],
        },
        {
          name: "describe",
          description:
            "Return the details for the specified MongoDB process for your project",
          options: [outputFlag, projectIdFlag],
          args: { name: "hostname:port" },
        },
      ],
    },
    {
      name: [
        "privateEndpoints",
        "privateendpoints",
        "private-endpoints",
        "privateEndpoint",
        "privateendpoint",
        "private-endpoint",
      ],
      description: "Manage Atlas private endpoints",
      subcommands: [
        {
          name: "aws",
          description: "Manage AWS Private Endpoints",
          subcommands: [
            {
              name: ["list", "ls"],
              description: "Return all AWS private endpoints for your project",
              options: [outputFlag, projectIdFlag],
            },
            {
              name: ["describe", "get"],
              description:
                "Return the details for the specified AWS private endpoints for your project",
              options: [outputFlag, projectIdFlag],
              args: { name: "privateEndpointId" },
            },
            {
              name: "create",
              description: "Create a new AWS private endpoint for your project",
              options: [outputFlag, projectIdFlag, regionFlag],
            },
            {
              name: ["delete", "rm"],
              description:
                "Remove the specified AWS private endpoint from your project",
              options: [forceFlag, projectIdFlag],
              args: { name: "privateEndpointId" },
            },
            {
              name: "watch",
              description:
                "Watch the specified AWS private endpoint in your project until it becomes available",
              options: [projectIdFlag],
              args: { name: "privateEndpointId" },
            },
            {
              name: ["interfaces", "interface"],
              description: "Manage Atlas AWS private endpoint interfaces",
              subcommands: [
                {
                  name: ["create", "add"],
                  description:
                    "Create a new interface for the specified AWS private endpoint",
                  options: [
                    outputFlag,
                    {
                      name: "--privateEndpointId",
                      description:
                        "Unique 22-character alphanumeric string that identifies the AWS PrivateLink connection in AWS. You can find this value on the AWS VPC Dashboard under Endpoints > VPC ID",
                      args: { name: "privateEndpointId" },
                    },
                    projectIdFlag,
                  ],
                  args: { name: "endpointServiceId" },
                },
                {
                  name: ["describe", "get"],
                  description:
                    "Return the details for the specified AWS private endpoint interface for your project",
                  options: [endpointServiceIdFlag, outputFlag, projectIdFlag],
                  args: { name: "interfaceEndpointId" },
                },
                {
                  name: ["delete", "rm"],
                  description:
                    "Remove the specified AWS private endpoint interface and related service from your project",
                  options: [endpointServiceIdFlag, forceFlag, projectIdFlag],
                  args: { name: "interfaceEndpointId" },
                },
              ],
            },
          ],
        },
        {
          name: "azure",
          description: "Manage Azure Private Endpoints",
          subcommands: [
            {
              name: ["list", "ls"],
              description:
                "Return all Azure private endpoints for your project",
              options: [outputFlag, projectIdFlag],
            },
            {
              name: ["describe", "get"],
              description:
                "Return the details for the specified Azure private endpoint for your project",
              options: [outputFlag, projectIdFlag],
              args: { name: "privateEndpointId" },
            },
            {
              name: "create",
              description:
                "Create a new Azure private endpoint for your project",
              options: [outputFlag, projectIdFlag, regionFlag],
            },
            {
              name: ["delete", "rm"],
              description:
                "Remove the specified Azure private endpoint from your project",
              options: [forceFlag, projectIdFlag],
              args: { name: "privateEndpointId" },
            },
            {
              name: "watch",
              description:
                "Watch the specified Azure private endpoint in your project until it becomes available",
              options: [projectIdFlag],
              args: { name: "privateEndpointId" },
            },
            {
              name: ["interfaces", "interface"],
              description: "Manage Atlas Azure private endpoint interfaces",
              subcommands: [
                {
                  name: ["create", "add"],
                  description:
                    "Create a new interface for the specified Azure private endpoint",
                  options: [
                    outputFlag,
                    {
                      name: "--privateEndpointId",
                      description:
                        "Unique string that identifies the Azure private endpoint in Azure",
                      args: { name: "privateEndpointId" },
                    },
                    {
                      name: "--privateEndpointIpAddress",
                      description:
                        "Private IP address of the private endpoint network interface you created in your Azure VNet",
                      args: { name: "privateEndpointIpAddress" },
                    },
                    projectIdFlag,
                  ],
                  args: { name: "endpointServiceId" },
                },
                {
                  name: ["describe", "get"],
                  description:
                    "Return the details for the specified Azure private endpoint interface for your project",
                  options: [endpointServiceIdFlag, outputFlag, projectIdFlag],
                  args: { name: "privateEndpointResourceId" },
                },
                {
                  name: ["delete", "rm"],
                  description:
                    "Remove the specified Azure private endpoint interface and related service from your project",
                  options: [endpointServiceIdFlag, forceFlag, projectIdFlag],
                  args: { name: "privateEndpointResourceId" },
                },
              ],
            },
          ],
        },
        {
          name: "gcp",
          description: "Manage GCP private endpoints",
          subcommands: [
            {
              name: "create",
              description: "Create a new GCP private endpoint for your project",
              options: [
                outputFlag,
                {
                  name: "--portMappingEnabled",
                  description:
                    "Flag that indicates whether this endpoint service uses PSC port-mapping",
                },
                projectIdFlag,
                regionFlag,
              ],
            },
            {
              name: ["delete", "rm"],
              description: "Delete a GCP private endpoint for your project",
              options: [forceFlag, projectIdFlag],
              args: { name: "privateEndpointId" },
            },
            {
              name: ["list", "ls"],
              description: "List GCP private endpoints for your project",
              options: [outputFlag, projectIdFlag],
            },
            {
              name: ["describe", "get"],
              description:
                "Return a specific GCP private endpoint for your project",
              options: [outputFlag, projectIdFlag],
              args: { name: "privateEndpointId" },
            },
            {
              name: "watch",
              description:
                "Watch the specified GCP private endpoint to detect changes in the endpoint's state",
              options: [projectIdFlag],
              args: { name: "privateEndpointId" },
            },
            {
              name: ["interfaces", "interface"],
              description: "Manage Atlas GCP private endpoint interfaces",
              subcommands: [
                {
                  name: ["describe", "get"],
                  description:
                    "Return a specific GCP private endpoint interface for your project",
                  options: [endpointServiceIdFlag, outputFlag, projectIdFlag],
                  args: { name: "id" },
                },
                {
                  name: ["delete", "rm"],
                  description:
                    "Delete a specific GCP private endpoint interface for your project",
                  options: [endpointServiceIdFlag, forceFlag, projectIdFlag],
                  args: { name: "id" },
                },
                {
                  name: ["create", "add"],
                  description: "Create a GCP private endpoint interface",
                  options: [
                    {
                      name: "--endpoint",
                      description:
                        "List of GCP endpoints in the group separated by commas, such as: endpointName1@ipAddress1,...,endpointNameN@ipAddressN",
                      args: { name: "endpoint" },
                      isRepeatable: true,
                    },
                    endpointServiceIdFlag,
                    {
                      name: "--gcpProjectId",
                      description:
                        "Unique identifier of the GCP project in which the network peer resides",
                      args: { name: "gcpProjectId" },
                    },
                    outputFlag,
                    projectIdFlag,
                  ],
                  args: { name: "endpointGroupId" },
                },
              ],
            },
          ],
        },
        {
          name: [
            "regionalModes",
            "regionalmodes",
            "regional-modes",
            "regionalMode",
            "regionalmode",
            "regional-mode",
          ],
          description:
            "Manage regionalized private endpoint setting for your Atlas project",
          subcommands: [
            {
              name: "enable",
              description:
                "Enable the regionalized private endpoint setting for your project",
              options: [outputFlag, projectIdFlag],
            },
            {
              name: "disable",
              description:
                "Disable the regionalized private endpoint setting for your project",
              options: [outputFlag, projectIdFlag],
            },
            {
              name: ["describe", "get"],
              description:
                "Return the regionalized private endpoint setting for your project",
              options: [outputFlag, projectIdFlag],
            },
          ],
        },
      ],
    },
    {
      name: "networking",
      description: "Manage or configure network peering for your Atlas project",
      subcommands: [
        {
          name: ["containers", "container"],
          description: "Manage Network Peering containers",
          subcommands: [
            {
              name: ["list", "ls"],
              description:
                "Return all network peering containers for your project",
              options: [
                limitFlag,
                omitCountFlag,
                outputFlag,
                pageFlag,
                projectIdFlag,
                providerFlag,
              ],
            },
            {
              name: ["delete", "rm"],
              description:
                "Remove the specified network peering container from your project before creating any clusters",
              options: [forceFlag, projectIdFlag],
              args: { name: "containerId" },
            },
          ],
        },
        {
          name: "peering",
          description: "Manage Network Peering connections",
          subcommands: [
            {
              name: ["list", "ls"],
              description:
                "Return the details for all network peering connections for your project",
              options: [
                limitFlag,
                omitCountFlag,
                outputFlag,
                pageFlag,
                projectIdFlag,
                {
                  name: "--provider",
                  description: "Name of your cloud service provider",
                  args: {
                    name: "provider",
                    suggestions: ["AWS", "AZURE", "GCP"],
                    default: "AWS",
                  },
                },
              ],
            },
            {
              name: "create",
              description:
                "Create a connection with AWS, Azure and Google Cloud",
              subcommands: [
                {
                  name: "azure",
                  description:
                    "Create a network peering connection between the Atlas VPC and your Azure VNet",
                  options: [
                    atlasCidrBlockFlag,
                    {
                      name: "--directoryId",
                      description:
                        "Unique identifier for an Azure AD directory",
                      args: { name: "directoryId" },
                    },
                    outputFlag,
                    projectIdFlag,
                    {
                      name: "--region",
                      description:
                        "Cloud provider region where the VPC that you peered with the Atlas VPC resides",
                      args: { name: "region" },
                    },
                    {
                      name: "--resourceGroup",
                      description: "Name of your Azure resource group",
                      args: { name: "resourceGroup" },
                    },
                    {
                      name: "--subscriptionId",
                      description:
                        "Unique identifier of the Azure subscription in which the VNet resides",
                      args: { name: "subscriptionId" },
                    },
                    {
                      name: "--vnet",
                      description: "Name of your Azure VNet",
                      args: { name: "vnet" },
                    },
                  ],
                },
                {
                  name: "aws",
                  description:
                    "Create a network peering connection between the Atlas VPC and your AWS VPC",
                  options: [
                    {
                      name: "--accountId",
                      description:
                        "Unique twelve-digit AWS account ID that owns the peer VPC",
                      args: { name: "accountId" },
                    },
                    atlasCidrBlockFlag,
                    outputFlag,
                    projectIdFlag,
                    {
                      name: "--region",
                      description:
                        "Cloud provider region where the VPC that you peered with the Atlas VPC resides",
                      args: { name: "region" },
                    },
                    {
                      name: "--routeTableCidrBlock",
                      description: "Peer VPC CIDR block or subnet",
                      args: { name: "routeTableCidrBlock" },
                    },
                    {
                      name: "--vpcId",
                      description: "Unique identifier of the peer VPC",
                      args: { name: "vpcId" },
                    },
                  ],
                },
                {
                  name: "gcp",
                  description:
                    "Create a network peering connection between the Atlas VPC and your Google Cloud VPC",
                  options: [
                    atlasCidrBlockFlag,
                    {
                      name: "--gcpProjectId",
                      description:
                        "Unique identifier of the GCP project in which the network peer resides",
                      args: { name: "gcpProjectId" },
                    },
                    {
                      name: "--network",
                      description:
                        "Unique identifier of the Network Peering connection in the Atlas project",
                      args: { name: "network" },
                    },
                    outputFlag,
                    projectIdFlag,
                    {
                      name: "--region",
                      description:
                        "List of Atlas regions where the container resides",
                      args: { name: "region" },
                      isRepeatable: true,
                    },
                  ],
                },
              ],
            },
            {
              name: "watch",
              description:
                "Watch the specified peering connection in your project until it becomes available",
              options: [outputFlag, projectIdFlag],
              args: { name: "peerId" },
            },
            {
              name: ["delete", "rm"],
              description:
                "Remove the specified peering connection from your project",
              options: [forceFlag, projectIdFlag],
              args: { name: "peerId" },
            },
          ],
        },
      ],
    },
    {
      name: "security",
      description: "Manage security configuration for your project",
      subcommands: [
        {
          name: [
            "customerCerts",
            "customercerts",
            "customer-certs",
            "customerCert",
            "customercert",
            "customer-cert",
            "certs",
          ],
          description: "Manage customer x509 certificates for your project",
          subcommands: [
            {
              name: "describe",
              description:
                "Return the details for the current customer-managed X.509 configuration for your project",
              options: [outputFlag, projectIdFlag],
            },
            {
              name: "create",
              description:
                "Saves a customer-managed X.509 configuration for your project",
              options: [
                {
                  name: "--casFile",
                  description:
                    "Path to a PEM file containing one or more CAs for database user authentication",
                  args: { name: "casFile", template: "filepaths" },
                },
                outputFlag,
                projectIdFlag,
              ],
            },
            {
              name: "disable",
              description:
                "Clear customer-managed X.509 settings on a project, including the uploaded Certificate Authority, and disable self-managed X.509",
              options: [projectIdFlag],
            },
          ],
        },
        {
          name: "ldap",
          description: "LDAP operations",
          subcommands: [
            {
              name: "verify",
              description:
                "Request verification of an LDAP configuration for your project",
              subcommands: [
                {
                  name: "status",
                  description:
                    "Get the status of an LDAP configuration request",
                  subcommands: [
                    {
                      name: "watch",
                      description:
                        "Watch for an LDAP configuration request to complete",
                      options: [projectIdFlag],
                      args: { name: "requestId" },
                    },
                  ],
                  options: [outputFlag, projectIdFlag],
                  args: { name: "requestId" },
                },
              ],
              options: [
                {
                  name: "--authzQueryTemplate",
                  description:
                    "RFC 4515-formatted or RFC 4516-formatted LDAP query template that Atlas executes to obtain the LDAP authorization groups to which the authenticated user belongs",
                  args: { name: "authzQueryTemplate" },
                },
                {
                  name: "--bindPassword",
                  description: "Password used to authenticate the bindUsername",
                  args: { name: "bindPassword" },
                },
                {
                  name: "--bindUsername",
                  description:
                    "User distinguished name (DN) that Atlas uses to connect to the LDAP server",
                  args: { name: "bindUsername" },
                },
                {
                  name: "--caCertificate",
                  description:
                    "Certificate Authority (CA) used to verify the identity of the LDAP server",
                  args: { name: "caCertificate" },
                },
                {
                  name: "--hostname",
                  description: "Hostname or IP address of the LDAP server",
                  args: { name: "hostname" },
                },
                outputFlag,
                {
                  name: "--port",
                  description:
                    "Port that the LDAP server listens to for client connections",
                  args: { name: "port", default: "636" },
                },
                projectIdFlag,
              ],
            },
            {
              name: "save",
              description: "Save an LDAP configuration for your project",
              options: [
                {
                  name: "--authenticationEnabled",
                  description:
                    "Flag that indicates whether to enable LDAP user authentication",
                },
                {
                  name: "--authorizationEnabled",
                  description:
                    "Flag that indicates whether to enable LDAP user authorization",
                },
                {
                  name: "--authzQueryTemplate",
                  description:
                    "RFC 4515-formatted or RFC 4516-formatted LDAP query template that Atlas executes to obtain the LDAP authorization groups to which the authenticated user belongs",
                  args: { name: "authzQueryTemplate" },
                },
                {
                  name: "--bindPassword",
                  description: "Password used to authenticate the bindUsername",
                  args: { name: "bindPassword" },
                },
                {
                  name: "--bindUsername",
                  description:
                    "User distinguished name (DN) that Atlas uses to connect to the LDAP server",
                  args: { name: "bindUsername" },
                },
                {
                  name: "--caCertificate",
                  description:
                    "Certificate Authority (CA) used to verify the identity of the LDAP server",
                  args: { name: "caCertificate" },
                },
                {
                  name: "--hostname",
                  description: "Hostname or IP address of the LDAP server",
                  args: { name: "hostname" },
                },
                {
                  name: "--mappingLdapQuery",
                  description:
                    "RFC 4515-formatted or RFC 4516-formatted LDAP query template that inserts the LDAP name that the regex matches into an LDAP query URI",
                  args: { name: "mappingLdapQuery" },
                },
                {
                  name: "--mappingMatch",
                  description:
                    "ECMAScript-formatted regular expression (regex) to match against a provided username",
                  args: { name: "mappingMatch" },
                },
                {
                  name: "--mappingSubstitution",
                  description:
                    "LDAP distinguished name (DN) template that converts the LDAP username that matches the regex specified in the match option into an LDAP DN",
                  args: { name: "mappingSubstitution" },
                },
                outputFlag,
                {
                  name: "--port",
                  description:
                    "Port that the LDAP server listens to for client connections",
                  args: { name: "port", default: "636" },
                },
                projectIdFlag,
              ],
            },
            {
              name: ["delete", "rm"],
              description:
                "Remove the current LDAP configuration captured in the userToDNMapping document from your project",
              options: [forceFlag, projectIdFlag],
            },
            {
              name: "get",
              description:
                "Return the current LDAP configuration details for your project",
              options: [outputFlag, projectIdFlag],
            },
          ],
        },
      ],
    },
    {
      name: ["integrations", "integration"],
      description: "Configure third-party integrations for your Atlas project",
      subcommands: [
        {
          name: ["create", "update"],
          description: "Create operations",
          subcommands: [
            {
              name: ["OPS_GENIE", "ops_genie", "opsGenie"],
              description:
                "Create or update an Opsgenie integration for your project",
              options: [
                {
                  name: "--apiKey",
                  description:
                    "Opsgenie API key that allows Atlas to access your Opsgenie account",
                  args: { name: "apiKey" },
                },
                outputFlag,
                projectIdFlag,
                {
                  name: "--region",
                  description:
                    "Code that indicates which regional URL MongoDB uses to access the third-party API. Valid values are US and EU",
                  args: {
                    name: "region",
                    suggestions: ["US", "EU"],
                    default: "US",
                  },
                },
              ],
            },
            {
              name: ["PAGER_DUTY", "pager_duty", "pagerDuty"],
              description:
                "Create or update a PagerDuty integration for your project",
              options: [
                outputFlag,
                projectIdFlag,
                {
                  name: "--serviceKey",
                  description:
                    "Service key associated with your PagerDuty account",
                  args: { name: "serviceKey" },
                },
              ],
            },
            {
              name: ["DATADOG", "datadog"],
              description:
                "Create or update a Datadog integration for your project",
              options: [
                {
                  name: "--apiKey",
                  description:
                    "Datadog API key that allows Atlas to access your Datadog account",
                  args: { name: "apiKey" },
                },
                outputFlag,
                projectIdFlag,
                {
                  name: "--region",
                  description:
                    "Code that indicates which regional URL MongoDB uses to access the Datadog API. Valid values are US, EU, US3, US5, and AP1",
                  args: {
                    name: "region",
                    suggestions: ["US", "EU", "US3", "US5", "AP1"],
                    default: "US",
                  },
                },
              ],
            },
            {
              name: ["VICTOR_OPS", "victor_ops", "victorOps"],
              description:
                "Create or update a Splunk On-Call integration for your project",
              options: [
                {
                  name: "--apiKey",
                  description:
                    "Splunk On-Call API key that allows Atlas to access your Splunk On-Call account",
                  args: { name: "apiKey" },
                },
                outputFlag,
                projectIdFlag,
                {
                  name: "--routingKey",
                  description:
                    "Routing key associated with your Splunk On-Call account",
                  args: { name: "routingKey" },
                },
              ],
            },
            {
              name: ["WEBHOOK", "webhook"],
              description:
                "Create or update a webhook integration for your project",
              options: [
                outputFlag,
                projectIdFlag,
                {
                  name: "--secret",
                  description: "Secret that secures your webhook",
                  args: { name: "secret" },
                },
                {
                  name: "--url",
                  description:
                    "Endpoint web address to which Atlas sends notifications",
                  args: { name: "url" },
                },
              ],
            },
          ],
        },
        {
          name: ["list", "ls"],
          description:
            "Return all active third-party integrations for your project",
          options: [outputFlag, projectIdFlag],
        },
        {
          name: ["delete", "rm"],
          description:
            "Remove the specified third-party integration from your project",
          options: [forceFlag, projectIdFlag],
          args: { name: "integrationType" },
        },
        {
          name: "describe",
          description:
            "Return the details for the specified third-party integration for your project",
          options: [outputFlag, projectIdFlag],
          args: { name: "integrationType" },
        },
      ],
    },
    {
      name: [
        "maintenanceWindows",
        "maintenancewindows",
        "maintenance-windows",
        "maintenanceWindow",
        "maintenancewindow",
        "maintenance-window",
      ],
      description: "Manage Atlas maintenance windows",
      subcommands: [
        {
          name: "update",
          description: "Modify the maintenance window for your project",
          options: [
            {
              name: "--dayOfWeek",
              description:
                "Day of the week that you want the maintenance window to start, as a 1-based integer",
              args: { name: "dayOfWeek" },
            },
            {
              name: "--hourOfDay",
              description:
                "Hour of the day that you want the maintenance window to start according to a 24-hour clock",
              args: { name: "hourOfDay" },
            },
            outputFlag,
            projectIdFlag,
            {
              name: "--startASAP",
              description:
                "Flag that starts maintenance immediately upon receiving this request",
            },
          ],
        },
        {
          name: ["clear", "rm", "delete"],
          description:
            "Clear the current maintenance window setting for your project",
          options: [forceFlag, outputFlag, projectIdFlag],
        },
        {
          name: "defer",
          description:
            "Defer scheduled maintenance for your project for one week",
          options: [outputFlag, projectIdFlag],
        },
        {
          name: ["describe", "get"],
          description: "Return the maintenance window details for your project",
          options: [outputFlag, projectIdFlag],
        },
      ],
    },
    {
      name: [
        "customDns",
        "customdns",
        "custom-dns",
        "customDn",
        "customdn",
        "custom-dn",
      ],
      description:
        "Manage DNS configuration of Atlas project’s clusters deployed to AWS",
      subcommands: [
        {
          name: ["aws", "aw"],
          description:
            "Manage DNS configuration of an Atlas project’s cluster deployed to AWS",
          subcommands: [
            {
              name: "enable",
              description:
                "Enable the custom DNS configuration of an Atlas cluster deployed to AWS in the specified project",
              options: [outputFlag, projectIdFlag],
            },
            {
              name: "disable",
              description:
                "Disable the custom DNS configuration of an Atlas cluster deployed to AWS in the specified project",
              options: [outputFlag, projectIdFlag],
            },
            {
              name: ["describe", "get"],
              description:
                "Describe the custom DNS configuration of an Atlas cluster deployed to AWS in the specified project",
              options: [outputFlag, projectIdFlag],
            },
          ],
        },
      ],
    },
    {
      name: [
        "cloudProviders",
        "cloudproviders",
        "cloud-providers",
        "cloudProvider",
        "cloudprovider",
        "cloud-provider",
      ],
      description: "Manage cloud provider access in Atlas using AWS IAM roles",
      subcommands: [
        {
          name: [
            "accessRoles",
            "accessroles",
            "access-roles",
            "accessRole",
            "accessrole",
            "access-role",
          ],
          description: "Manage AWS IAM role access in Atlas",
          subcommands: [
            {
              name: "aws",
              description: "Manage AWS IAM role access in Atlas",
              subcommands: [
                {
                  name: "create",
                  description: "Create an AWS IAM role",
                  options: [outputFlag, projectIdFlag],
                },
                {
                  name: "authorize",
                  description: "Authorize an AWS IAM role",
                  options: [
                    {
                      name: "--iamAssumedRoleArn",
                      description:
                        "Role ARN that Atlas assumes to access your AWS account",
                      args: { name: "iamAssumedRoleArn" },
                    },
                    outputFlag,
                    projectIdFlag,
                  ],
                  args: { name: "roleId" },
                },
                {
                  name: "deauthorize",
                  description: "Deauthorize an AWS IAM role",
                  options: [forceFlag, projectIdFlag],
                  args: { name: "roleId" },
                },
              ],
            },
            {
              name: ["list", "ls"],
              description: "List AWS IAM role access in Atlas",
              options: [outputFlag, projectIdFlag],
            },
          ],
        },
      ],
    },
    {
      name: ["streams", "stream"],
      description: "Manage your Atlas Stream Processing deployments",
      subcommands: [
        {
          name: ["instances", "instance"],
          description: "Manage Atlas Stream Processing instances",
          subcommands: [
            {
              name: "create",
              description:
                "Create an Atlas Stream Processing instance for your project",
              options: [
                outputFlag,
                projectIdFlag,
                {
                  name: "--provider",
                  description:
                    "Cloud service provider that applies to the provisioned Atlas Stream Processing instance",
                  args: {
                    name: "provider",
                    suggestions: ["AWS", "AZURE"],
                    default: "AWS",
                  },
                },
                {
                  name: ["--region", "-r"],
                  description:
                    "Human-readable label that identifies the physical location of your Atlas Stream Processing instance",
                  args: { name: "region" },
                },
                {
                  name: "--tier",
                  description: "Tier for your Stream Instance",
                  args: { name: "tier", default: "SP30" },
                },
              ],
              args: { name: "name" },
            },
            {
              name: "update",
              description:
                "Updates an Atlas Stream Processing instance for your project",
              options: [
                outputFlag,
                projectIdFlag,
                {
                  name: "--provider",
                  description:
                    "Cloud service provider that applies to the provisioned Atlas Stream Processing instance",
                  args: {
                    name: "provider",
                    suggestions: ["AWS", "AZURE"],
                    default: "AWS",
                  },
                },
                {
                  name: ["--region", "-r"],
                  description:
                    "Human-readable label that identifies the physical location of your Atlas Stream Processing instance",
                  args: { name: "region" },
                },
              ],
              args: { name: "name" },
            },
            {
              name: "list",
              description:
                "List all the Atlas Stream Processing instances for your project",
              options: [limitFlag, outputFlag, pageFlag, projectIdFlag],
            },
            {
              name: ["delete", "rm"],
              description: "Delete an Atlas Stream Processing instance",
              options: [forceFlag, projectIdFlag],
              args: { name: "name" },
            },
            {
              name: "describe",
              description:
                "Describe an Atlas Stream Processing instance for your project",
              options: [outputFlag, projectIdFlag],
              args: { name: "name" },
            },
            {
              name: "download",
              description:
                "Download a compressed file that contains the logs for the specified Atlas Stream Processing instance",
              options: [
                {
                  name: "--end",
                  description:
                    "Ending date and time for the range of log messages to retrieve, given in UNIX time",
                  args: { name: "end" },
                },
                forceFlag2,
                outFlag,
                projectIdFlag,
                {
                  name: "--start",
                  description:
                    "UNIX Epoch-formatted starting date and time for the range of log messages to retrieve",
                  args: { name: "start" },
                },
              ],
              args: { name: "tenantName" },
            },
          ],
        },
        {
          name: ["connections", "connection"],
          description: "Manage Atlas Stream Processing connections",
          subcommands: [
            {
              name: ["list", "ls"],
              description:
                "Returns all Atlas Stream Processing connections from your Atlas Stream Processing instance",
              options: [instanceFlag, outputFlag, projectIdFlag],
            },
            {
              name: "describe",
              description:
                "Return the details for the specified Atlas Stream Processing connection",
              options: [instanceFlag, outputFlag, projectIdFlag],
              args: { name: "streamConnectionName" },
            },
            {
              name: "create",
              description:
                "Creates a connection for an Atlas Stream Processing instance",
              options: [
                {
                  name: ["--file", "-f"],
                  description:
                    "Path to a JSON configuration file that defines an Atlas Stream Processing connection",
                  args: { name: "file", template: "filepaths" },
                },
                instanceFlag,
                outputFlag,
                projectIdFlag,
              ],
              args: { name: "connectionName", isOptional: true },
            },
            {
              name: "delete",
              description:
                "Remove the specified Atlas Stream Processing connection from your project",
              options: [forceFlag, instanceFlag, projectIdFlag],
              args: { name: "connectionName" },
            },
            {
              name: "update",
              description:
                "Modify the details of the specified connection within your Atlas Stream Processing instance",
              options: [
                {
                  name: ["--file", "-f"],
                  description:
                    "Path to a JSON configuration file that defines an Atlas Stream Processing connection",
                  args: { name: "file", template: "filepaths" },
                },
                instanceFlag,
                outputFlag,
                projectIdFlag,
              ],
              args: { name: "connectionName" },
            },
          ],
        },
        {
          name: [
            "privateLinks",
            "privatelinks",
            "private-links",
            "privateLink",
            "privatelink",
            "private-link",
          ],
          description: "Manage Atlas Stream Processing PrivateLink endpoints",
          subcommands: [
            {
              name: "create",
              description:
                "Creates a PrivateLink endpoint that can be used as an Atlas Stream Processor connection",
              options: [
                {
                  name: ["--file", "-f"],
                  description:
                    "Path to a JSON configuration file that defines an Atlas Stream Processing PrivateLink endpoint",
                  args: { name: "file", template: "filepaths" },
                },
                outputFlag,
                projectIdFlag,
                {
                  name: "--provider",
                  description: "Name of your cloud service provider",
                  args: {
                    name: "provider",
                    suggestions: ["AWS", "AZURE"],
                    default: "AZURE",
                  },
                },
              ],
            },
            {
              name: "list",
              description:
                "Lists the PrivateLink endpoints in the project that can be used as Atlas Stream Processor connections",
              options: [outputFlag, projectIdFlag],
            },
            {
              name: "describe",
              description:
                "Describes a PrivateLink endpoint that can be used as an Atlas Stream Processor connection",
              options: [outputFlag, projectIdFlag],
              args: { name: "connectionID" },
            },
            {
              name: ["delete", "rm"],
              description:
                "Deletes an Atlas Stream Processing PrivateLink endpoint",
              options: [forceFlag, projectIdFlag],
              args: { name: "connectionID" },
            },
          ],
        },
      ],
    },
    {
      name: [
        "liveMigrations",
        "livemigrations",
        "live-migrations",
        "liveMigration",
        "livemigration",
        "live-migration",
        "lm",
      ],
      description: "Manage a Live Migration to Atlas for your organization",
      subcommands: [
        {
          name: "link",
          description: "Manage the link-token for your organization",
          subcommands: [
            {
              name: "create",
              description: "Create a new link-token for a push live migration",
              options: [
                {
                  name: "--accessListIp",
                  description:
                    "IP address access list entries that are associated with the link-token",
                  args: { name: "accessListIp" },
                  isRepeatable: true,
                },
                orgIdFlag,
                outputFlag,
              ],
            },
            {
              name: ["delete", "rm"],
              description: "Delete one link-token",
              options: [forceFlag, orgIdFlag],
            },
          ],
        },
        {
          name: "validation",
          description:
            "Manage a Live Migration validation job for your project",
          subcommands: [
            {
              name: "create",
              description:
                "Create a new validation request for a push live migration",
              options: [
                {
                  name: "--clusterName",
                  description:
                    "Human-readable label that identifies the Atlas destination cluster",
                  args: { name: "clusterName" },
                },
                {
                  name: "--drop",
                  description:
                    "Flag that indicates whether this process should drop existing collections from the destination (Atlas) cluster given in --destinationClusterName before starting the migration of data from the source cluster",
                },
                forceFlag,
                {
                  name: "--migrationHost",
                  description:
                    "List of hosts running the MongoDB Agent that can transfer your MongoDB data from the source (Cloud Manager or Ops Manager) to destination (Atlas) deployments",
                  args: { name: "migrationHost" },
                  isRepeatable: true,
                },
                outputFlag,
                projectIdFlag,
                {
                  name: "--sourceCACertificatePath",
                  description:
                    "Path to the CA certificate that signed TLS certificates use to authenticate to the source Cloud Manager or Ops Manager cluster",
                  args: {
                    name: "sourceCACertificatePath",
                    template: "filepaths",
                  },
                },
                {
                  name: "--sourceClusterName",
                  description:
                    "Human-readable label that identifies the source Cloud Manager or Ops Manager cluster",
                  args: { name: "sourceClusterName" },
                },
                {
                  name: "--sourceManagedAuthentication",
                  description:
                    "Flag that indicates whether MongoDB Automation manages authentication to the source Cloud Manager or Ops Manager cluster",
                },
                {
                  name: ["--sourcePassword", "-p"],
                  description:
                    "Password that authenticates the username to the source Cloud Manager or Ops Manager cluster",
                  args: { name: "sourcePassword" },
                },
                {
                  name: "--sourceProjectId",
                  description:
                    "Unique 24-hexadecimal digit string that identifies the source project",
                  args: { name: "sourceProjectId" },
                },
                {
                  name: "--sourceSsl",
                  description:
                    "Flag that indicates whether data source has TLS enabled",
                },
                {
                  name: ["--sourceUsername", "-u"],
                  description:
                    "Human-readable label that identifies the SCRAM-SHA user that connects to the source Cloud Manager or Ops Manager cluster",
                  args: { name: "sourceUsername" },
                },
              ],
            },
            {
              name: ["describe", "get"],
              description: "Return one validation job",
              options: [
                outputFlag,
                projectIdFlag,
                {
                  name: "--validationId",
                  description:
                    "Unique 24-hexadecimal digit string that identifies the validation job",
                  args: { name: "validationId" },
                },
              ],
            },
          ],
        },
        {
          name: "create",
          description: "Create a new push live migration",
          options: [
            {
              name: "--clusterName",
              description:
                "Human-readable label that identifies the Atlas destination cluster",
              args: { name: "clusterName" },
            },
            {
              name: "--drop",
              description:
                "Flag that indicates whether this process should drop existing collections from the destination (Atlas) cluster given in --destinationClusterName before starting the migration of data from the source cluster",
            },
            forceFlag,
            {
              name: "--migrationHost",
              description:
                "List of hosts running the MongoDB Agent that can transfer your MongoDB data from the source (Cloud Manager or Ops Manager) to destination (Atlas) deployments",
              args: { name: "migrationHost" },
              isRepeatable: true,
            },
            outputFlag,
            projectIdFlag,
            {
              name: "--sourceCACertificatePath",
              description:
                "Path to the CA certificate that signed TLS certificates use to authenticate to the source Cloud Manager or Ops Manager cluster",
              args: { name: "sourceCACertificatePath", template: "filepaths" },
            },
            {
              name: "--sourceClusterName",
              description:
                "Human-readable label that identifies the source Cloud Manager or Ops Manager cluster",
              args: { name: "sourceClusterName" },
            },
            {
              name: "--sourceManagedAuthentication",
              description:
                "Flag that indicates whether MongoDB Automation manages authentication to the source Cloud Manager or Ops Manager cluster",
            },
            {
              name: ["--sourcePassword", "-p"],
              description:
                "Password that authenticates the username to the source Cloud Manager or Ops Manager cluster",
              args: { name: "sourcePassword" },
            },
            {
              name: "--sourceProjectId",
              description:
                "Unique 24-hexadecimal digit string that identifies the source project",
              args: { name: "sourceProjectId" },
            },
            {
              name: "--sourceSsl",
              description:
                "Flag that indicates whether data source has TLS enabled",
            },
            {
              name: ["--sourceUsername", "-u"],
              description:
                "Human-readable label that identifies the SCRAM-SHA user that connects to the source Cloud Manager or Ops Manager cluster",
              args: { name: "sourceUsername" },
            },
          ],
        },
        {
          name: ["describe", "get"],
          description: "Return a push live migration job",
          options: [
            {
              name: "--liveMigrationId",
              description:
                "Unique 24-hexadecimal digit string that identifies the live migration job",
              args: { name: "liveMigrationId" },
            },
          ],
        },
        {
          name: "cutover",
          description:
            "Start the cutover for a push live migration and confirm when the cutover completes",
          options: [
            {
              name: "--liveMigrationId",
              description:
                "Unique 24-hexadecimal digit string that identifies the live migration job",
              args: { name: "liveMigrationId" },
            },
            outputFlag,
            projectIdFlag,
          ],
        },
      ],
    },
    {
      name: [
        "accessLogs",
        "accesslogs",
        "access-logs",
        "accessLog",
        "accesslog",
        "access-log",
      ],
      description: "Return the access logs for a cluster",
      subcommands: [
        {
          name: ["list", "ls"],
          description:
            "Retrieve the access logs of a cluster identified by the cluster's name or hostname",
          options: [
            {
              name: "--authResult",
              description: "Authentication attempts that Atlas should return",
              args: { name: "authResult" },
            },
            clusterNameFlag,
            {
              name: "--end",
              description:
                "Timestamp in the number of milliseconds that have elapsed, since the UNIX Epoch, for the last entry that Atlas returns from the database access logs",
              args: { name: "end" },
            },
            {
              name: "--hostname",
              description:
                "The fully qualified domain name (FQDN) of the target node that should receive the authentication attempt",
              args: { name: "hostname" },
            },
            {
              name: "--ip",
              description:
                "IP address that attempted to authenticate with the database",
              args: { name: "ip" },
            },
            {
              name: "--nLog",
              description: "Maximum number of log lines to return",
              args: { name: "nLog" },
            },
            outputFlag,
            projectIdFlag,
            {
              name: "--start",
              description:
                "Timestamp in the number of milliseconds that have elapsed, since the UNIX Epoch, for the first entry that Atlas returns from the database access logs",
              args: { name: "start" },
            },
          ],
        },
      ],
    },
    {
      name: ["dataFederation", "datafederation", "data-federation"],
      description: "Data federation",
      subcommands: [
        {
          name: ["list", "ls"],
          description: "Returns all data federation databases for your project",
          options: [
            outputFlag,
            projectIdFlag,
            {
              name: "--type",
              description: "Type of Federated Database Instances to return",
              args: { name: "type" },
            },
          ],
        },
        {
          name: "describe",
          description:
            "Return the details for the specified data federation database for your project",
          options: [outputFlag, projectIdFlag],
          args: { name: "name" },
        },
        {
          name: "create",
          description: "Creates a new Data Federation database",
          options: [
            {
              name: "--awsRoleId",
              description:
                "Amazon Resource Name (ARN) of the role which Atlas Data Federation uses for accessing the data stores",
              args: { name: "awsRoleId" },
            },
            {
              name: "--awsTestS3Bucket",
              description:
                "Name of an Amazon S3 data bucket that Atlas Data Federation uses to validate the provided role",
              args: { name: "awsTestS3Bucket" },
            },
            {
              name: ["--file", "-f"],
              description:
                "Path to an optional JSON configuration file that defines data federation settings",
              args: { name: "file", template: "filepaths" },
            },
            outputFlag,
            projectIdFlag,
            {
              name: "--region",
              description:
                "Name of the region to which Atlas Data Federation routes client connections for data processing",
              args: { name: "region" },
            },
          ],
          args: { name: "name" },
        },
        {
          name: "delete",
          description:
            "Remove the specified data federation database from your project",
          options: [forceFlag, projectIdFlag],
          args: { name: "name" },
        },
        {
          name: "update",
          description:
            "Modify the details of the specified data federation database for your project",
          options: [
            {
              name: "--awsRoleId",
              description:
                "Amazon Resource Name (ARN) of the role which Atlas Data Federation uses for accessing the data stores",
              args: { name: "awsRoleId" },
            },
            {
              name: "--awsTestS3Bucket",
              description:
                "Name of an Amazon S3 data bucket that Atlas Data Federation uses to validate the provided role",
              args: { name: "awsTestS3Bucket" },
            },
            {
              name: ["--file", "-f"],
              description:
                "Path to an optional JSON configuration file that defines data federation settings",
              args: { name: "file", template: "filepaths" },
            },
            outputFlag,
            projectIdFlag,
            {
              name: "--region",
              description:
                "Name of the region to which Atlas Data Federation routes client connections for data processing",
              args: { name: "region" },
            },
          ],
          args: { name: "name" },
        },
        {
          name: "logs",
          description:
            "Returns logs of the specified data federation database for your project",
          options: [
            {
              name: "--end",
              description: "Timestamp in UNIX epoch format when the logs end",
              args: { name: "end" },
            },
            forceFlag2,
            outFlag,
            projectIdFlag,
            {
              name: "--start",
              description: "Timestamp in UNIX epoch format when the logs start",
              args: { name: "start" },
            },
          ],
          args: { name: "name" },
        },
        {
          name: [
            "privateEndpoints",
            "privateendpoints",
            "private-endpoints",
            "privateEndpoint",
            "privateendpoint",
            "private-endpoint",
          ],
          description: "Data federation private endpoints",
          subcommands: [
            {
              name: ["list", "ls"],
              description:
                "Returns all data federation private endpoints for your project",
              options: [outputFlag, projectIdFlag],
            },
            {
              name: "describe",
              description:
                "Return the details for the specified data federation private endpoint for your project",
              options: [outputFlag, projectIdFlag],
              args: { name: "endpointId" },
            },
            {
              name: "create",
              description: "Creates a new Data Federation private endpoint",
              options: [commentFlag, outputFlag, projectIdFlag],
              args: { name: "endpointId" },
            },
            {
              name: "delete",
              description:
                "Remove the specified data federation private endpoint from your project",
              options: [forceFlag, projectIdFlag],
              args: { name: "endpointId" },
            },
          ],
        },
        {
          name: [
            "queryLimits",
            "querylimits",
            "query-limits",
            "queryLimit",
            "querylimit",
            "query-limit",
          ],
          description: "Data federation query limits",
          subcommands: [
            {
              name: ["list", "ls"],
              description:
                "Returns all data federation query limits for your project",
              options: [dataFederationFlag, outputFlag, projectIdFlag],
            },
            {
              name: "describe",
              description:
                "Return the details for the specified data federation query limit for your project",
              options: [dataFederationFlag, outputFlag, projectIdFlag],
              args: { name: "name" },
            },
            {
              name: "create",
              description: "Creates a new Data Federation query limit",
              options: [
                dataFederationFlag,
                outputFlag,
                {
                  name: "--overrunPolicy",
                  description:
                    "Action to take when the usage limit is exceeded",
                  args: { name: "overrunPolicy" },
                },
                projectIdFlag,
                {
                  name: "--value",
                  description: "Value given to the query limit",
                  args: { name: "value" },
                },
              ],
              args: { name: "name" },
            },
            {
              name: "delete",
              description:
                "Remove the specified data federation query limit from your project",
              options: [dataFederationFlag, forceFlag, projectIdFlag],
              args: { name: "name" },
            },
          ],
        },
      ],
    },
    {
      name: "auditing",
      description:
        "Returns database auditing settings for MongoDB Cloud projects",
      subcommands: [
        {
          name: ["describe", "get"],
          description:
            "Returns the auditing configuration for the specified project",
          options: [outputFlag, projectIdFlag],
        },
        {
          name: "update",
          description:
            "Updates the auditing configuration for the specified project",
          options: [
            {
              name: "--auditAuthorizationSuccess",
              description:
                "Flag that indicates whether someone set auditing to track successful authentications",
            },
            {
              name: "--auditFilter",
              description:
                "JSON document that specifies which events to record",
              args: { name: "auditFilter" },
            },
            {
              name: "--enabled",
              description:
                "Flag that indicates whether someone enabled database auditing for the specified project",
            },
            {
              name: ["--file", "-f"],
              description:
                "Path to an optional JSON configuration file that defines auditing filters",
              args: { name: "file", template: "filepaths" },
            },
            outputFlag,
            projectIdFlag,
          ],
        },
      ],
    },
    {
      name: [
        "federatedAuthentication",
        "federatedauthentication",
        "federated-authentication",
      ],
      description: "Manage Atlas Federated Authentication",
      subcommands: [
        {
          name: [
            "federationSettings",
            "federationsettings",
            "federation-settings",
            "federationSetting",
            "federationsetting",
            "federation-setting",
          ],
          description:
            "Manage Atlas Federated Authentication Federation Settings",
          subcommands: [
            {
              name: ["describe", "get"],
              description:
                "Return the Federation Settings details for the specified organization",
              options: [orgIdFlag, outputFlag],
            },
            {
              name: [
                "identityProvider",
                "identityprovider",
                "identity-provider",
              ],
              description: "Manage Federated Authentication Identity Providers",
              subcommands: [
                {
                  name: "create",
                  description:
                    "Create Federated Authentication Identity Providers",
                  subcommands: [
                    {
                      name: "oidc",
                      description: "Create an OIDC identity provider",
                      options: [
                        {
                          name: "--associatedDomain",
                          description:
                            "List of domains associated with the Identity Provider",
                          args: { name: "associatedDomain" },
                          isRepeatable: true,
                        },
                        {
                          name: "--audience",
                          description:
                            "Identifier of the intended recipient of the token",
                          args: { name: "audience" },
                        },
                        {
                          name: "--authorizationType",
                          description: "Type of authorization",
                          args: {
                            name: "authorizationType",
                            suggestions: ["GROUP", "USER"],
                          },
                        },
                        {
                          name: "--clientId",
                          description:
                            "Client identifier that is assigned to an application by the Identity Provider",
                          args: { name: "clientId" },
                        },
                        {
                          name: "--desc",
                          description: "Description of the Identity Provider",
                          args: { name: "desc" },
                        },
                        federationSettingsIdFlag,
                        {
                          name: "--groupsClaim",
                          description:
                            "Identifier of the claim which contains IdP Group IDs in the token",
                          args: { name: "groupsClaim" },
                        },
                        {
                          name: "--idpType",
                          description: "Type of Identity Provider",
                          args: {
                            name: "idpType",
                            suggestions: ["WORKFORCE", "WORKLOAD"],
                          },
                        },
                        {
                          name: "--issuerUri",
                          description:
                            "Unique string that identifies the issuer of the OIDC metadata/discovery document URL",
                          args: { name: "issuerUri" },
                        },
                        outputFlag,
                        {
                          name: "--requestedScope",
                          description:
                            "Scopes that MongoDB applications will request from the authorization endpoint",
                          args: { name: "requestedScope" },
                          isRepeatable: true,
                        },
                        {
                          name: "--userClaim",
                          description:
                            "Identifier of the claim which contains the user ID in the token",
                          args: { name: "userClaim" },
                        },
                      ],
                      args: { name: "displayName", isOptional: true },
                    },
                  ],
                },
                {
                  name: "update",
                  description:
                    "Update Federated Authentication Identity Providers",
                  subcommands: [
                    {
                      name: "oidc",
                      description: "Update an OIDC identity provider",
                      options: [
                        {
                          name: "--associatedDomain",
                          description:
                            "List of domains associated with the Identity Provider",
                          args: { name: "associatedDomain" },
                          isRepeatable: true,
                        },
                        {
                          name: "--audience",
                          description:
                            "Identifier of the intended recipient of the token",
                          args: { name: "audience" },
                        },
                        {
                          name: "--authorizationType",
                          description: "Type of authorization",
                          args: {
                            name: "authorizationType",
                            suggestions: ["GROUP", "USER"],
                          },
                        },
                        {
                          name: "--clientId",
                          description:
                            "Client identifier that is assigned to an application by the Identity Provider",
                          args: { name: "clientId" },
                        },
                        {
                          name: "--desc",
                          description: "Description of the Identity Provider",
                          args: { name: "desc" },
                        },
                        federationSettingsIdFlag,
                        {
                          name: "--groupsClaim",
                          description:
                            "Identifier of the claim which contains IdP Group IDs in the token",
                          args: { name: "groupsClaim" },
                        },
                        {
                          name: "--idpType",
                          description: "Type of Identity Provider",
                          args: {
                            name: "idpType",
                            suggestions: ["WORKFORCE", "WORKLOAD"],
                          },
                        },
                        {
                          name: "--issuerUri",
                          description:
                            "Unique string that identifies the issuer of the OIDC metadata/discovery document URL",
                          args: { name: "issuerUri" },
                        },
                        outputFlag,
                        {
                          name: "--requestedScope",
                          description:
                            "Scopes that MongoDB applications will request from the authorization endpoint",
                          args: { name: "requestedScope" },
                          isRepeatable: true,
                        },
                        {
                          name: "--userClaim",
                          description:
                            "Identifier of the claim which contains the user ID in the token",
                          args: { name: "userClaim" },
                        },
                      ],
                      args: { name: "identityProviderId", isOptional: true },
                    },
                  ],
                },
                {
                  name: "describe",
                  description:
                    "Describe the specified identity provider from your federation settings",
                  options: [federationSettingsIdFlag, outputFlag],
                  args: { name: "identityProviderId" },
                },
                {
                  name: "list",
                  description:
                    "List the identity providers from your federation settings",
                  options: [
                    federationSettingsIdFlag,
                    {
                      name: "--idpType",
                      description: "Type of Identity Provider",
                      args: {
                        name: "idpType",
                        suggestions: ["WORKFORCE", "WORKLOAD"],
                        default: "WORKFORCE",
                      },
                    },
                    limitFlag,
                    outputFlag,
                    pageFlag,
                    protocolFlag,
                  ],
                },
                {
                  name: "delete",
                  description:
                    "Remove the specified identity provider from your federation settings",
                  options: [federationSettingsIdFlag, forceFlag, outputFlag],
                  args: { name: "identityProviderId" },
                },
                {
                  name: "revokeJwk",
                  description:
                    "Revoke the JWK token from the specified identity provider from your federation settings",
                  options: [federationSettingsIdFlag, outputFlag],
                  args: { name: "identityProviderId" },
                },
              ],
            },
            {
              name: [
                "connectedOrgConfigs",
                "connectedorgconfigs",
                "connected-org-configs",
                "connectedOrgConfig",
                "connectedorgconfig",
                "connected-org-config",
              ],
              description:
                "Manage Atlas Federated Authentication Connected Orgs Config",
              subcommands: [
                {
                  name: "connect",
                  description:
                    "Connect an Identity Provider to an Organization",
                  options: [
                    federationSettingsIdFlag,
                    {
                      name: "--identityProviderId",
                      description: "Unique identifier of the identity provider",
                      args: { name: "identityProviderId" },
                    },
                    orgIdFlag,
                    outputFlag,
                    protocolFlag,
                  ],
                },
                {
                  name: "disconnect",
                  description:
                    "Connect an Identity Provider to an Organization",
                  options: [
                    federationSettingsIdFlag,
                    {
                      name: "--identityProviderId",
                      description: "Unique identifier of the identity provider",
                      args: { name: "identityProviderId" },
                    },
                    orgIdFlag,
                    outputFlag,
                    protocolFlag,
                  ],
                },
                {
                  name: "describe",
                  description: "Describe a Connected Org Config",
                  options: [federationSettingsIdFlag, orgIdFlag, outputFlag],
                },
                {
                  name: "list",
                  description: "Describe a Connected Org Config",
                  options: [
                    federationSettingsIdFlag,
                    limitFlag,
                    orgIdFlag,
                    outputFlag,
                    pageFlag,
                  ],
                },
                {
                  name: "delete",
                  description: "Delete a connected org config Organization",
                  options: [
                    federationSettingsIdFlag,
                    forceFlag,
                    orgIdFlag,
                    outputFlag,
                  ],
                },
                {
                  name: "update",
                  description:
                    "Update One Org Config Connected to One Federation Setting",
                  options: [
                    federationSettingsIdFlag,
                    {
                      name: "--file",
                      description:
                        "Path to a JSON configuration file that defines connected orgs configurations",
                      args: { name: "file", template: "filepaths" },
                    },
                    orgIdFlag,
                    outputFlag,
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "api",
      description:
        "Access all features of the Atlas Administration API through the Atlas CLI by using the 'atlas api <tag> <operationId>' command",
      subcommands: [
        {
          name: "aiModelApiKeys",
          description:
            "Returns, adds, edits, and removes API Keys for your AI Models",
          subcommands: [
            {
              name: ["createGroupModelKey", "createGroupAiModelApiKey"],
              description: "Create a new AI model API key for the given group",
              options: [
                envelopeFlag,
                fileFlag3,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag,
              ],
            },
            {
              name: ["deleteGroupModelKey", "deleteGroupAiModelApiKey"],
              description:
                "Delete an existing AI model API key in the given group",
              options: [
                {
                  name: "--apiKeyId",
                  description: "The id of the API key to be deleted",
                  args: { name: "apiKeyId" },
                },
                envelopeFlag,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag,
              ],
            },
            {
              name: ["getGroupModelKey", "getGroupAiModelApiKey"],
              description:
                "Retrieve a single AI model API key for the given group",
              options: [
                {
                  name: "--apiKeyId",
                  description: "The id of the API key to be retrieved",
                  args: { name: "apiKeyId" },
                },
                envelopeFlag,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag,
              ],
            },
            {
              name: ["getOrgModelKey", "getOrgAiModelApiKey"],
              description:
                "Retrieve a single AI model API key for the given organization",
              options: [
                {
                  name: "--apiKeyId",
                  description: "The id of the API key to be retrieved",
                  args: { name: "apiKeyId" },
                },
                envelopeFlag,
                orgIdFlag2,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag,
              ],
            },
            {
              name: ["listGroupModelKeys", "listGroupAiModelApiKeys"],
              description: "Retrieve AI model API keys for the given group",
              options: [
                envelopeFlag,
                groupIdFlag,
                itemsPerPageFlag,
                outputFlag2,
                outputFileFlag,
                pageNumFlag,
                prettyFlag,
                versionFlag,
              ],
            },
            {
              name: ["listOrgModelKeys", "listOrgAiModelApiKeys"],
              description:
                "Retrieve AI model API keys for the given organization",
              options: [
                envelopeFlag,
                itemsPerPageFlag,
                orgIdFlag2,
                outputFlag2,
                outputFileFlag,
                pageNumFlag,
                prettyFlag,
                versionFlag,
              ],
            },
            {
              name: ["updateGroupModelKey", "updateGroupAiModelApiKey"],
              description:
                "Update an existing AI model API key in the given group",
              options: [
                {
                  name: "--apiKeyId",
                  description: "The id of the API key to be updated",
                  args: { name: "apiKeyId" },
                },
                envelopeFlag,
                fileFlag3,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag,
              ],
            },
          ],
        },
        {
          name: "aiModelRateLimits",
          description:
            "Returns, adds, edits, and removes Rate Limits for your AI Models",
          subcommands: [
            {
              name: [
                "getGroupRateLimits",
                "getGroupAiModelApiCloudGeographyModelGroupNameRateLimits",
              ],
              description:
                "Retrieve a single scoped AI model rate limit for the given group",
              options: [
                cloudFlag,
                envelopeFlag,
                geographyFlag,
                groupIdFlag,
                {
                  name: "--modelGroupName",
                  description: "The name of the model group to be retrieved",
                  args: { name: "modelGroupName" },
                },
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag,
              ],
            },
            {
              name: ["getGroupModelLimits", "getGroupAiModelApiRateLimits"],
              description: "Retrieve AI model rate limits for the given group",
              options: [
                envelopeFlag,
                groupIdFlag,
                itemsPerPageFlag,
                outputFlag2,
                outputFileFlag,
                pageNumFlag,
                prettyFlag,
                versionFlag,
              ],
            },
            {
              name: [
                "getOrgRateLimits",
                "getOrgAiModelApiCloudGeographyModelGroupNameRateLimits",
              ],
              description:
                "Retrieve a single scoped AI model rate limit for the given organization",
              options: [
                cloudFlag,
                envelopeFlag,
                geographyFlag,
                {
                  name: "--modelGroupName",
                  description: "The name of the model group to be retrieved",
                  args: { name: "modelGroupName" },
                },
                orgIdFlag2,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag,
              ],
            },
            {
              name: ["getOrgModelLimits", "getOrgAiModelApiRateLimits"],
              description:
                "Retrieve AI model rate limits for the given organization",
              options: [
                envelopeFlag,
                itemsPerPageFlag,
                orgIdFlag2,
                outputFlag2,
                outputFileFlag,
                pageNumFlag,
                prettyFlag,
                versionFlag,
              ],
            },
            {
              name: [
                "resetGroupModelLimits",
                "resetGroupAiModelApiCloudGeographyModelGroupNameRateLimits",
              ],
              description:
                "Reset the scoped AI model rate limit for the given model group to default values",
              options: [
                cloudFlag,
                envelopeFlag,
                geographyFlag,
                groupIdFlag,
                {
                  name: "--modelGroupName",
                  description:
                    "The name of the model group to be reset to default rate limits",
                  args: { name: "modelGroupName" },
                },
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag,
              ],
            },
            {
              name: ["resetGroupRateLimits", "resetGroupAiModelApiRateLimits"],
              description:
                "Reset the AI Model rate limits for the given group to default values",
              options: [
                envelopeFlag,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag,
              ],
            },
            {
              name: [
                "updateGroupRateLimits",
                "updateGroupAiModelApiCloudGeographyModelGroupNameRateLimits",
              ],
              description:
                "Update a scoped AI model rate limit for the given model group",
              options: [
                cloudFlag,
                envelopeFlag,
                fileFlag3,
                geographyFlag,
                groupIdFlag,
                {
                  name: "--modelGroupName",
                  description: "The name of the model group to be updated",
                  args: { name: "modelGroupName" },
                },
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag,
              ],
            },
          ],
        },
        {
          name: "awsClustersDns",
          description:
            "Returns and edits custom DNS configurations for MongoDB Cloud database deployments on AWS",
          subcommands: [
            {
              name: ["getAwsCustomDns", "getGroupAwsCustomDns"],
              description:
                "Returns the custom DNS configuration for AWS clusters in the specified project",
              options: [
                envelopeFlag,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag2,
              ],
            },
            {
              name: ["toggleAwsCustomDns", "toggleGroupAwsCustomDns"],
              description:
                "Enables or disables the custom DNS configuration for AWS clusters in the specified project",
              options: [
                envelopeFlag,
                fileFlag3,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag2,
              ],
            },
          ],
        },
        {
          name: "accessTracking",
          description:
            "Returns access logs for authentication attempts made to Atlas database deployments",
          subcommands: [
            {
              name: [
                "getAccessHistoryCluster",
                "getGroupDbAccessHistoryCluster",
              ],
              description:
                "Returns the access logs of one cluster identified by the cluster's name",
              options: [
                {
                  name: "--authResult",
                  description:
                    "Flag that indicates whether the response returns the successful authentication attempts only",
                },
                clusterNameFlag2,
                {
                  name: "--end",
                  description:
                    "Date and time when to stop retrieving database history",
                  args: { name: "end" },
                },
                envelopeFlag,
                groupIdFlag,
                {
                  name: "--ipAddress",
                  description:
                    "One Internet Protocol address that attempted to authenticate with the database",
                  args: { name: "ipAddress" },
                },
                nLogsFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                {
                  name: "--start",
                  description:
                    "Date and time when MongoDB Cloud begins retrieving database history",
                  args: { name: "start" },
                },
                versionFlag2,
              ],
            },
            {
              name: [
                "getAccessHistoryProcess",
                "getGroupDbAccessHistoryProcess",
              ],
              description:
                "Returns the access logs of one cluster identified by the cluster's hostname",
              options: [
                {
                  name: "--authResult",
                  description:
                    "Flag that indicates whether the response returns the successful authentication attempts only",
                },
                {
                  name: "--end",
                  description:
                    "Date and time when to stop retrieving database history",
                  args: { name: "end" },
                },
                envelopeFlag,
                groupIdFlag,
                {
                  name: "--hostname",
                  description:
                    "Fully qualified domain name or IP address of the MongoDB host that stores the log files that you want to download",
                  args: { name: "hostname" },
                },
                {
                  name: "--ipAddress",
                  description:
                    "One Internet Protocol address that attempted to authenticate with the database",
                  args: { name: "ipAddress" },
                },
                nLogsFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                {
                  name: "--start",
                  description:
                    "Date and time when MongoDB Cloud begins retrieving database history",
                  args: { name: "start" },
                },
                versionFlag2,
              ],
            },
          ],
        },
        {
          name: "activityFeed",
          description:
            "Returns pre-filtered activity feed links for projects and organizations",
          subcommands: [
            {
              name: "getGroupActivityFeed",
              description:
                "Returns a pre-filtered activity feed link for the specified project based on the provided date range and event types",
              options: [
                {
                  name: "--clusterName",
                  description:
                    "Human-readable label that identifies the cluster",
                  args: { name: "clusterName" },
                  isRepeatable: true,
                },
                eventTypeFlag,
                groupIdFlag,
                {
                  name: "--maxDate",
                  description:
                    "End date and time for events to include in the activity feed link",
                  args: { name: "maxDate" },
                },
                {
                  name: "--minDate",
                  description:
                    "Start date and time for events to include in the activity feed link",
                  args: { name: "minDate" },
                },
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag,
              ],
            },
            {
              name: "getOrgActivityFeed",
              description:
                "Returns a pre-filtered activity feed link for the specified organization based on the provided date range and event types",
              options: [
                eventTypeFlag,
                {
                  name: "--maxDate",
                  description:
                    "End date and time for events to include in the activity feed link",
                  args: { name: "maxDate" },
                },
                {
                  name: "--minDate",
                  description:
                    "Start date and time for events to include in the activity feed link",
                  args: { name: "minDate" },
                },
                orgIdFlag2,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag,
              ],
            },
          ],
        },
        {
          name: "alertConfigurations",
          description:
            "Returns and edits the conditions that trigger alerts and how MongoDB Cloud notifies users",
          subcommands: [
            {
              name: ["createAlertConfig", "createGroupAlertConfig"],
              description:
                "Creates one alert configuration for the specified project",
              options: [
                envelopeFlag,
                fileFlag3,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag2,
              ],
            },
            {
              name: ["deleteAlertConfig", "deleteGroupAlertConfig"],
              description:
                "Removes one alert configuration from the specified project",
              options: [
                alertConfigIdFlag,
                envelopeFlag,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag2,
              ],
            },
            {
              name: ["getAlertConfigs", "getGroupAlertAlertConfigs"],
              description:
                "Returns all alert configurations set for the specified alert",
              options: [
                alertIdFlag,
                envelopeFlag,
                groupIdFlag,
                includeCountFlag,
                itemsPerPageFlag,
                outputFlag2,
                outputFileFlag,
                pageNumFlag,
                prettyFlag,
                versionFlag2,
              ],
            },
            {
              name: ["getAlertConfig", "getGroupAlertConfig"],
              description:
                "Returns the specified alert configuration from the specified project",
              options: [
                alertConfigIdFlag,
                envelopeFlag,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag2,
              ],
            },
            {
              name: [
                "listMatcherFieldNames",
                "listAlertConfigMatcherFieldNames",
              ],
              description:
                "Get all field names that the matchers.fieldName parameter accepts when you create or update an Alert Configuration",
              options: [
                envelopeFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag2,
              ],
            },
            {
              name: ["listAlertConfigs", "listGroupAlertConfigs"],
              description: "Returns all alert configurations for one project",
              options: [
                envelopeFlag,
                groupIdFlag,
                includeCountFlag,
                itemsPerPageFlag,
                outputFlag2,
                outputFileFlag,
                pageNumFlag,
                prettyFlag,
                versionFlag2,
              ],
            },
            {
              name: ["toggleAlertConfig", "toggleGroupAlertConfig"],
              description:
                "Enables or disables the specified alert configuration in the specified project",
              options: [
                {
                  name: "--alertConfigId",
                  description:
                    "Unique 24-hexadecimal digit string that identifies the alert configuration that triggered this alert",
                  args: { name: "alertConfigId" },
                },
                envelopeFlag,
                fileFlag3,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag2,
              ],
            },
            {
              name: ["updateAlertConfig", "updateGroupAlertConfig"],
              description:
                "Updates one alert configuration in the specified project",
              options: [
                alertConfigIdFlag,
                envelopeFlag,
                fileFlag3,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag2,
              ],
            },
          ],
        },
        {
          name: "alerts",
          description:
            "Returns and acknowledges alerts that MongoDB Cloud triggers based on the alert conditions that you define",
          subcommands: [
            {
              name: ["acknowledgeAlert", "acknowledgeGroupAlert"],
              description: "Confirms receipt of one existing alert",
              options: [
                alertIdFlag,
                envelopeFlag,
                fileFlag3,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag3,
              ],
            },
            {
              name: ["getAlert", "getGroupAlert"],
              description: "Returns one alert",
              options: [
                alertIdFlag,
                envelopeFlag,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag2,
              ],
            },
            {
              name: ["getAlertConfigAlerts", "getGroupAlertConfigAlerts"],
              description:
                "Returns all open alerts that the specified alert configuration triggers",
              options: [
                alertConfigIdFlag,
                envelopeFlag,
                groupIdFlag,
                includeCountFlag,
                itemsPerPageFlag,
                outputFlag2,
                outputFileFlag,
                pageNumFlag,
                prettyFlag,
                versionFlag2,
              ],
            },
            {
              name: ["listAlerts", "listGroupAlerts"],
              description: "Returns all alerts",
              options: [
                envelopeFlag,
                groupIdFlag,
                includeCountFlag,
                itemsPerPageFlag,
                outputFlag2,
                outputFileFlag,
                pageNumFlag,
                prettyFlag,
                {
                  name: "--status",
                  description: "Status of the alerts to return",
                  args: { name: "status" },
                },
                versionFlag2,
              ],
            },
          ],
        },
        {
          name: "atlasSearch",
          description:
            "Returns, adds, edits, and removes Atlas Search indexes for the specified cluster",
          subcommands: [
            {
              name: [
                "createClusterSearchDeployment",
                "createGroupClusterSearchDeployment",
              ],
              description: "Creates Search Nodes for the specified cluster",
              options: [
                {
                  name: "--clusterName",
                  description:
                    "Label that identifies the cluster to create Search Nodes for",
                  args: { name: "clusterName" },
                },
                envelopeFlag,
                fileFlag3,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag4,
                watchFlag,
                watchTimeoutFlag,
              ],
            },
            {
              name: [
                "createClusterSearchIndex",
                "createGroupClusterSearchIndex",
              ],
              description:
                "Creates one Atlas Search index on the specified collection",
              options: [
                {
                  name: "--clusterName",
                  description:
                    "Name of the cluster that contains the collection on which to create an Atlas Search index",
                  args: { name: "clusterName" },
                },
                envelopeFlag,
                fileFlag3,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag5,
              ],
            },
            {
              name: [
                "deleteClusterSearchDeployment",
                "deleteGroupClusterSearchDeployment",
              ],
              description: "Deletes the Search Nodes for the specified cluster",
              options: [
                {
                  name: "--clusterName",
                  description: "Label that identifies the cluster to delete",
                  args: { name: "clusterName" },
                },
                envelopeFlag,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag4,
                watchFlag,
                watchTimeoutFlag,
              ],
            },
            {
              name: [
                "deleteClusterSearchIndex",
                "deleteGroupClusterSearchIndex",
              ],
              description:
                "Removes one Atlas Search index that you identified with its unique ID",
              options: [
                {
                  name: "--clusterName",
                  description:
                    "Name of the cluster that contains the database and collection with one or more Application Search indexes",
                  args: { name: "clusterName" },
                },
                envelopeFlag,
                groupIdFlag,
                {
                  name: "--indexId",
                  description:
                    "Unique 24-hexadecimal digit string that identifies the Atlas Search index",
                  args: { name: "indexId" },
                },
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag5,
              ],
            },
            {
              name: [
                "deleteIndexByName",
                "deleteGroupClusterSearchIndexByName",
              ],
              description:
                "Removes one Atlas Search index that you identified with its database, collection, and name",
              options: [
                {
                  name: "--clusterName",
                  description:
                    "Name of the cluster that contains the database and collection with one or more Application Search indexes",
                  args: { name: "clusterName" },
                },
                collectionNameFlag,
                databaseNameFlag,
                envelopeFlag,
                groupIdFlag,
                {
                  name: "--indexName",
                  description: "Name of the Atlas Search index to delete",
                  args: { name: "indexName" },
                },
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag5,
              ],
            },
            {
              name: [
                "getClusterSearchDeployment",
                "getGroupClusterSearchDeployment",
              ],
              description: "Returns the Search Nodes for the specified cluster",
              options: [
                {
                  name: "--clusterName",
                  description:
                    "Label that identifies the cluster to return the Search Nodes for",
                  args: { name: "clusterName" },
                },
                envelopeFlag,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                {
                  name: "--version",
                  description:
                    "API version to use when calling the Atlas API endpoints",
                  args: {
                    name: "version",
                    suggestions: [
                      "2023-01-01",
                      "2024-05-30",
                      "2025-03-12",
                      "preview",
                    ],
                    default: "preview",
                  },
                },
              ],
            },
            {
              name: ["getClusterSearchIndex", "getGroupClusterSearchIndex"],
              description:
                "Returns one Atlas Search index that you identified with its unique ID",
              options: [
                clusterNameFlag3,
                envelopeFlag,
                groupIdFlag,
                {
                  name: "--indexId",
                  description:
                    "Unique 24-hexadecimal digit string that identifies the Application Search index",
                  args: { name: "indexId" },
                },
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag5,
              ],
            },
            {
              name: ["getIndexByName", "getGroupClusterSearchIndexByName"],
              description:
                "Returns one Atlas Search index that you identified with its database, collection name, and index name",
              options: [
                clusterNameFlag3,
                collectionNameFlag,
                databaseNameFlag,
                envelopeFlag,
                groupIdFlag,
                {
                  name: "--indexName",
                  description: "Name of the Atlas Search index to return",
                  args: { name: "indexName" },
                },
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag5,
              ],
            },
            {
              name: ["listSearchIndex", "listGroupClusterSearchIndex"],
              description:
                "Returns all Atlas Search indexes on the specified collection",
              options: [
                clusterNameFlag3,
                collectionNameFlag,
                databaseNameFlag,
                envelopeFlag,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag5,
              ],
            },
            {
              name: [
                "listClusterSearchIndexes",
                "listGroupClusterSearchIndexes",
              ],
              description:
                "Returns all Atlas Search indexes on the specified cluster",
              options: [
                clusterNameFlag3,
                envelopeFlag,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag5,
              ],
            },
            {
              name: [
                "updateClusterSearchDeployment",
                "updateGroupClusterSearchDeployment",
              ],
              description: "Updates the Search Nodes for the specified cluster",
              options: [
                {
                  name: "--clusterName",
                  description:
                    "Label that identifies the cluster to update the Search Nodes for",
                  args: { name: "clusterName" },
                },
                envelopeFlag,
                fileFlag3,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag4,
                watchFlag,
                watchTimeoutFlag,
              ],
            },
            {
              name: [
                "updateClusterSearchIndex",
                "updateGroupClusterSearchIndex",
              ],
              description:
                "Updates one Atlas Search index that you identified with its unique ID",
              options: [
                {
                  name: "--clusterName",
                  description:
                    "Name of the cluster that contains the collection whose Atlas Search index you want to update",
                  args: { name: "clusterName" },
                },
                envelopeFlag,
                fileFlag3,
                groupIdFlag,
                {
                  name: "--indexId",
                  description:
                    "Unique 24-hexadecimal digit string that identifies the Atlas Search index",
                  args: { name: "indexId" },
                },
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag5,
              ],
            },
            {
              name: [
                "updateIndexByName",
                "updateGroupClusterSearchIndexByName",
              ],
              description:
                "Updates one Atlas Search index that you identified with its database, collection name, and index name",
              options: [
                {
                  name: "--clusterName",
                  description:
                    "Name of the cluster that contains the collection whose Atlas Search index you want to update",
                  args: { name: "clusterName" },
                },
                collectionNameFlag,
                databaseNameFlag,
                envelopeFlag,
                fileFlag3,
                groupIdFlag,
                {
                  name: "--indexName",
                  description: "Name of the Atlas Search index to update",
                  args: { name: "indexName" },
                },
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag5,
              ],
            },
          ],
        },
        {
          name: "auditing",
          description:
            "Returns and edits database auditing settings for MongoDB Cloud projects",
          subcommands: [
            {
              name: "getGroupAuditLog",
              description:
                "Returns the auditing configuration for the specified project",
              options: [
                envelopeFlag,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag2,
              ],
            },
            {
              name: ["updateAuditLog", "updateGroupAuditLog"],
              description:
                "Updates the auditing configuration for the specified project",
              options: [
                envelopeFlag,
                fileFlag3,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag2,
              ],
            },
          ],
        },
        {
          name: "cloudBackups",
          description:
            "Manages Cloud Backup snapshots, snapshot export buckets, restore jobs, and schedules",
          subcommands: [
            {
              name: [
                "cancelBackupRestoreJob",
                "cancelGroupClusterBackupRestoreJob",
              ],
              description:
                "Cancels one cloud backup restore job of one cluster from the specified project",
              options: [
                clusterNameFlag2,
                envelopeFlag,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                {
                  name: "--restoreJobId",
                  description:
                    "Unique 24-hexadecimal digit string that identifies the restore job to remove",
                  args: { name: "restoreJobId" },
                },
                versionFlag2,
              ],
            },
            {
              name: ["createExportBucket", "createGroupBackupExportBucket"],
              description:
                "Creates a Snapshot Export Bucket for an AWS S3 Bucket, Azure Blob Storage Container, or Google Cloud Storage Bucket",
              options: [
                envelopeFlag,
                fileFlag3,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag3,
              ],
            },
            {
              name: [
                "createBackupPrivateEndpoint",
                "createGroupBackupPrivateEndpoint",
              ],
              description:
                "Creates a private endpoint in the specified region for secure, private connectivity between Atlas and cloud provider object storage services for backup operations",
              options: [
                {
                  name: "--cloudProvider",
                  description:
                    "Human-readable label that identifies the cloud provider for the private endpoint to create",
                  args: { name: "cloudProvider" },
                },
                envelopeFlag,
                fileFlag3,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag6,
              ],
            },
            {
              name: ["createBackupExport", "createGroupClusterBackupExport"],
              description:
                "Exports one backup Snapshot for dedicated Atlas cluster using Cloud Backups to an Export Bucket",
              options: [
                clusterNameFlag2,
                envelopeFlag,
                fileFlag3,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                versionFlag2,
                watchFlag,
                watchTimeoutFlag,
              ],
            },
            {
              name: [
                "createBackupRestoreJob",
                "createGroupClusterBackupRestoreJob",
              ],
              description:
                "Restores one snapshot of one cluster from the specified project",
              options: [
                clusterNameFlag2,
                envelopeFlag,
                fileFlag3,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag2,
              ],
            },
            {
              name: [
                "createCollectionRestoreJob",
                "createGroupClusterCollectionRestoreJob",
              ],
              description:
                "Creates one collection-level restore job for one cluster from the specified project",
              options: [
                {
                  name: "--clusterName",
                  description:
                    "Human-readable label that identifies the source cluster for the restore",
                  args: { name: "clusterName" },
                },
                envelopeFlag,
                fileFlag3,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag,
              ],
            },
            {
              name: ["deleteExportBucket", "deleteGroupBackupExportBucket"],
              description: "Deletes an Export Bucket",
              options: [
                envelopeFlag,
                {
                  name: "--exportBucketId",
                  description:
                    "Unique 24-hexadecimal character string that identifies the Export Bucket",
                  args: { name: "exportBucketId" },
                },
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                versionFlag2,
              ],
            },
            {
              name: [
                "deleteBackupPrivateEndpoint",
                "deleteGroupBackupPrivateEndpoint",
              ],
              description:
                "Deletes one private endpoint, identified by its ID, for object storage backup operations",
              options: [
                {
                  name: "--cloudProvider",
                  description:
                    "Human-readable label that identifies the cloud provider of the private endpoint to delete",
                  args: { name: "cloudProvider" },
                },
                {
                  name: "--endpointId",
                  description:
                    "Unique 24-hexadecimal digit string that identifies the private endpoint to delete",
                  args: { name: "endpointId" },
                },
                envelopeFlag,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag6,
              ],
            },
            {
              name: [
                "deleteClusterBackupSchedule",
                "deleteGroupClusterBackupSchedule",
              ],
              description:
                "Removes all cloud backup schedules for the specified cluster",
              options: [
                clusterNameFlag2,
                envelopeFlag,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                versionFlag7,
              ],
            },
            {
              name: [
                "deleteClusterBackupSnapshot",
                "deleteGroupClusterBackupSnapshot",
              ],
              description: "Removes the specified snapshot",
              options: [
                clusterNameFlag2,
                envelopeFlag,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                snapshotIdFlag,
                versionFlag2,
                watchFlag,
                watchTimeoutFlag,
              ],
            },
            {
              name: [
                "deleteBackupShardedCluster",
                "deleteGroupClusterBackupSnapshotShardedCluster",
              ],
              description:
                "Removes one snapshot of one sharded cluster from the specified project",
              options: [
                clusterNameFlag2,
                envelopeFlag,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                snapshotIdFlag,
                versionFlag2,
              ],
            },
            {
              name: [
                "disableCompliancePolicy",
                "disableGroupBackupCompliancePolicy",
              ],
              description:
                "Disables the Backup Compliance Policy settings with the specified project",
              options: [
                envelopeFlag,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag6,
                watchFlag,
                watchTimeoutFlag,
              ],
            },
            {
              name: ["getCompliancePolicy", "getGroupBackupCompliancePolicy"],
              description:
                "Returns the Backup Compliance Policy settings with the specified project",
              options: [
                envelopeFlag,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                {
                  name: "--version",
                  description:
                    "API version to use when calling the Atlas API endpoints",
                  args: {
                    name: "version",
                    suggestions: ["2023-01-01", "2023-10-01"],
                    default: "2023-10-01",
                  },
                },
              ],
            },
            {
              name: ["getExportBucket", "getGroupBackupExportBucket"],
              description:
                "Returns one Export Bucket associated with the specified Project",
              options: [
                envelopeFlag,
                {
                  name: "--exportBucketId",
                  description:
                    "Unique 24-hexadecimal character string that identifies the Export Bucket",
                  args: { name: "exportBucketId" },
                },
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                versionFlag3,
              ],
            },
            {
              name: [
                "getBackupPrivateEndpoint",
                "getGroupBackupPrivateEndpoint",
              ],
              description:
                "Returns one private endpoint, identified by its ID, for object storage backup operations",
              options: [
                {
                  name: "--cloudProvider",
                  description:
                    "Human-readable label that identifies the cloud provider of the private endpoint",
                  args: { name: "cloudProvider" },
                },
                {
                  name: "--endpointId",
                  description:
                    "Unique 24-hexadecimal digit string that identifies the private endpoint",
                  args: { name: "endpointId" },
                },
                envelopeFlag,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag6,
              ],
            },
            {
              name: ["getBackupExport", "getGroupClusterBackupExport"],
              description:
                "Returns one Cloud Backup Snapshot Export Job associated with the specified Atlas cluster",
              options: [
                clusterNameFlag2,
                envelopeFlag,
                {
                  name: "--exportId",
                  description:
                    "Unique 24-hexadecimal character string that identifies the Export Job",
                  args: { name: "exportId" },
                },
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                versionFlag2,
              ],
            },
            {
              name: ["getBackupRestoreJob", "getGroupClusterBackupRestoreJob"],
              description:
                "Returns one cloud backup restore job for one cluster from the specified project",
              options: [
                {
                  name: "--clusterName",
                  description:
                    "Human-readable label that identifies the cluster with the restore jobs you want to return",
                  args: { name: "clusterName" },
                },
                envelopeFlag,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                {
                  name: "--restoreJobId",
                  description:
                    "Unique 24-hexadecimal digit string that identifies the restore job to return",
                  args: { name: "restoreJobId" },
                },
                versionFlag2,
              ],
            },
            {
              name: ["getBackupSchedule", "getGroupClusterBackupSchedule"],
              description:
                "Returns the cloud backup schedule for the specified cluster within the specified project",
              options: [
                clusterNameFlag2,
                envelopeFlag,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag7,
              ],
            },
            {
              name: [
                "getClusterBackupSnapshot",
                "getGroupClusterBackupSnapshot",
              ],
              description: "Returns one snapshot from the specified cluster",
              options: [
                clusterNameFlag2,
                envelopeFlag,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                snapshotIdFlag,
                versionFlag2,
              ],
            },
            {
              name: [
                "getBackupSnapshotDatabase",
                "getGroupClusterBackupSnapshotDatabase",
              ],
              description:
                "Returns one database that exists in the specified snapshot",
              options: [
                clusterNameFlag2,
                databaseNameFlag2,
                envelopeFlag,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                snapshotIdFlag,
                versionFlag,
              ],
            },
            {
              name: [
                "getSnapshotDatabaseCollection",
                "getGroupClusterBackupSnapshotDatabaseCollection",
              ],
              description:
                "Returns one collection that exists in the specified database in the snapshot",
              options: [
                clusterNameFlag2,
                collectionNameFlag2,
                databaseNameFlag2,
                envelopeFlag,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                snapshotIdFlag,
                versionFlag,
              ],
            },
            {
              name: [
                "getBackupShardedCluster",
                "getGroupClusterBackupSnapshotShardedCluster",
              ],
              description:
                "Returns one snapshot of one sharded cluster from the specified project",
              options: [
                clusterNameFlag2,
                envelopeFlag,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                snapshotIdFlag,
                versionFlag2,
              ],
            },
            {
              name: [
                "getCollectionRestoreJob",
                "getGroupClusterCollectionRestoreJob",
              ],
              description:
                "Returns one collection restore job for one cluster from the specified project",
              options: [
                {
                  name: "--clusterName",
                  description:
                    "Human-readable label that identifies the cluster with the collection restore jobs you want to return",
                  args: { name: "clusterName" },
                },
                envelopeFlag,
                groupIdFlag,
                {
                  name: "--jobId",
                  description:
                    "Unique 24-hexadecimal digit string that identifies the collection restore job to return",
                  args: { name: "jobId" },
                },
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag,
              ],
            },
            {
              name: [
                "getRestoreJobCollection",
                "getGroupClusterCollectionRestoreJobCollection",
              ],
              description:
                "Returns one collection-level restore state for one collection restore job from the specified project",
              options: [
                {
                  name: "--clusterName",
                  description:
                    "Human-readable label that identifies the cluster with the collection restore job you want to return",
                  args: { name: "clusterName" },
                },
                envelopeFlag,
                groupIdFlag,
                {
                  name: "--jobId",
                  description:
                    "Unique 24-hexadecimal digit string that identifies the collection restore job",
                  args: { name: "jobId" },
                },
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                {
                  name: "--sourceNamespace",
                  description:
                    "Source namespace that identifies the collection to return",
                  args: { name: "sourceNamespace" },
                },
                versionFlag,
              ],
            },
            {
              name: ["listExportBuckets", "listGroupBackupExportBuckets"],
              description:
                "Returns all Export Buckets associated with the specified Project",
              options: [
                envelopeFlag,
                groupIdFlag,
                includeCountFlag,
                itemsPerPageFlag,
                outputFlag2,
                outputFileFlag,
                pageNumFlag,
                prettyFlag,
                versionFlag3,
              ],
            },
            {
              name: [
                "listBackupPrivateEndpoints",
                "listGroupBackupPrivateEndpoints",
              ],
              description:
                "Returns the private endpoints of the specified cloud provider for object storage backup operations",
              options: [
                {
                  name: "--cloudProvider",
                  description:
                    "Human-readable label that identifies the cloud provider for the private endpoints to return",
                  args: { name: "cloudProvider" },
                },
                envelopeFlag,
                groupIdFlag,
                includeCountFlag,
                itemsPerPageFlag,
                outputFlag2,
                outputFileFlag,
                pageNumFlag,
                prettyFlag,
                versionFlag6,
              ],
            },
            {
              name: ["listBackupExports", "listGroupClusterBackupExports"],
              description:
                "Returns all Cloud Backup Snapshot Export Jobs associated with the specified Atlas cluster",
              options: [
                clusterNameFlag2,
                envelopeFlag,
                groupIdFlag,
                includeCountFlag,
                itemsPerPageFlag,
                outputFlag2,
                outputFileFlag,
                pageNumFlag,
                prettyFlag,
                versionFlag2,
              ],
            },
            {
              name: [
                "listBackupRestoreJobs",
                "listGroupClusterBackupRestoreJobs",
              ],
              description:
                "Returns all cloud backup restore jobs for one cluster from the specified project",
              options: [
                {
                  name: "--clusterName",
                  description:
                    "Human-readable label that identifies the cluster with the restore jobs you want to return",
                  args: { name: "clusterName" },
                },
                envelopeFlag,
                groupIdFlag,
                includeCountFlag,
                itemsPerPageFlag,
                outputFlag2,
                outputFileFlag,
                pageNumFlag,
                prettyFlag,
                versionFlag2,
              ],
            },
            {
              name: [
                "listSnapshotDatabaseCollections",
                "listGroupClusterBackupSnapshotDatabaseCollections",
              ],
              description:
                "Returns the list of collections in the specified database that exist in the snapshot",
              options: [
                clusterNameFlag2,
                databaseNameFlag2,
                envelopeFlag,
                groupIdFlag,
                includeCountFlag,
                itemsPerPageFlag,
                outputFlag2,
                outputFileFlag,
                pageNumFlag,
                prettyFlag,
                snapshotIdFlag,
                versionFlag,
              ],
            },
            {
              name: [
                "listBackupSnapshotDatabases",
                "listGroupClusterBackupSnapshotDatabases",
              ],
              description:
                "Returns the list of databases that exist in the specified snapshot",
              options: [
                clusterNameFlag2,
                envelopeFlag,
                groupIdFlag,
                includeCountFlag,
                itemsPerPageFlag,
                outputFlag2,
                outputFileFlag,
                pageNumFlag,
                prettyFlag,
                snapshotIdFlag,
                versionFlag,
              ],
            },
            {
              name: [
                "listBackupShardedClusters",
                "listGroupClusterBackupSnapshotShardedClusters",
              ],
              description:
                "Returns all snapshots of one sharded cluster from the specified project",
              options: [
                clusterNameFlag2,
                envelopeFlag,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag2,
              ],
            },
            {
              name: ["listBackupSnapshots", "listGroupClusterBackupSnapshots"],
              description:
                "Returns all snapshots of one cluster from the specified project",
              options: [
                clusterNameFlag2,
                envelopeFlag,
                groupIdFlag,
                includeCountFlag,
                itemsPerPageFlag,
                {
                  name: "--oplogInc",
                  description:
                    "Oplog operation number that represents the desired point in time",
                  args: { name: "oplogInc" },
                },
                {
                  name: "--oplogTs",
                  description:
                    "Oplog timestamp that represents the desired point in time",
                  args: { name: "oplogTs" },
                },
                outputFlag2,
                outputFileFlag,
                pageNumFlag,
                {
                  name: "--pointInTimeUtcSeconds",
                  description:
                    "Desired point in time, expressed as the number of seconds that have elapsed since the UNIX epoch",
                  args: { name: "pointInTimeUtcSeconds" },
                },
                prettyFlag,
                versionFlag2,
              ],
            },
            {
              name: [
                "listRestoreJobCollections",
                "listGroupClusterCollectionRestoreJobCollections",
              ],
              description:
                "Returns all collection-level restore states for one collection restore job from the specified project",
              options: [
                {
                  name: "--clusterName",
                  description:
                    "Human-readable label that identifies the cluster with the collection restore job you want to return",
                  args: { name: "clusterName" },
                },
                envelopeFlag,
                groupIdFlag,
                itemsPerPageFlag,
                {
                  name: "--jobId",
                  description:
                    "Unique 24-hexadecimal digit string that identifies the collection restore job",
                  args: { name: "jobId" },
                },
                outputFlag2,
                outputFileFlag,
                pageNumFlag,
                prettyFlag,
                {
                  name: "--sourceNamespace",
                  description: "Source namespace to filter by",
                  args: { name: "sourceNamespace" },
                },
                {
                  name: "--state",
                  description: "Collection-level state to filter by",
                  args: { name: "state" },
                },
                {
                  name: "--targetNamespace",
                  description: "Target namespace to filter by",
                  args: { name: "targetNamespace" },
                },
                versionFlag,
              ],
            },
            {
              name: [
                "listCollectionRestoreJobs",
                "listGroupClusterCollectionRestoreJobs",
              ],
              description:
                "Returns all collection restore jobs for one cluster from the specified project",
              options: [
                {
                  name: "--clusterName",
                  description:
                    "Human-readable label that identifies the cluster with the collection restore jobs you want to return",
                  args: { name: "clusterName" },
                },
                envelopeFlag,
                groupIdFlag,
                itemsPerPageFlag,
                outputFlag2,
                outputFileFlag,
                pageNumFlag,
                prettyFlag,
                versionFlag,
              ],
            },
            {
              name: ["takeSnapshots", "takeGroupClusterBackupSnapshots"],
              description:
                "Takes one on-demand snapshot for the specified cluster",
              options: [
                clusterNameFlag2,
                envelopeFlag,
                fileFlag3,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag2,
                watchFlag,
                watchTimeoutFlag,
              ],
            },
            {
              name: [
                "updateCompliancePolicy",
                "updateGroupBackupCompliancePolicy",
              ],
              description:
                "Updates the Backup Compliance Policy settings for the specified project",
              options: [
                envelopeFlag,
                fileFlag3,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                {
                  name: "--overwriteBackupPolicies",
                  description:
                    "Flag that indicates whether to overwrite non complying backup policies with the new data protection settings or not",
                },
                prettyFlag,
                {
                  name: "--version",
                  description:
                    "API version to use when calling the Atlas API endpoints",
                  args: {
                    name: "version",
                    suggestions: ["2023-01-01", "2023-10-01"],
                    default: "2023-10-01",
                  },
                },
                watchFlag,
                watchTimeoutFlag,
              ],
            },
            {
              name: [
                "updateBackupExportBucket",
                "updateGroupBackupExportBucket",
              ],
              description:
                "Updates the private networking settings for one snapshot export bucket in the specified project",
              options: [
                envelopeFlag,
                {
                  name: "--exportBucketId",
                  description:
                    "Unique 24-hexadecimal character string that identifies the snapshot export bucket",
                  args: { name: "exportBucketId" },
                },
                fileFlag3,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag5,
              ],
            },
            {
              name: [
                "updateBackupSchedule",
                "updateGroupClusterBackupSchedule",
              ],
              description:
                "Updates the cloud backup schedule for one cluster within the specified project",
              options: [
                clusterNameFlag2,
                envelopeFlag,
                fileFlag3,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag7,
              ],
            },
            {
              name: [
                "updateBackupSnapshot",
                "updateGroupClusterBackupSnapshot",
              ],
              description:
                "Changes the expiration date for one cloud backup snapshot for one cluster in the specified project",
              options: [
                clusterNameFlag2,
                envelopeFlag,
                fileFlag3,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                snapshotIdFlag,
                versionFlag2,
                watchFlag,
                watchTimeoutFlag,
              ],
            },
          ],
        },
        {
          name: "cloudMigrationService",
          description: "Manages the Cloud Migration Service",
          subcommands: [
            {
              name: "createGroupLiveMigration",
              description:
                "Migrate one cluster that Cloud or Ops Manager manages to MongoDB Atlas",
              options: [
                envelopeFlag,
                fileFlag3,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag3,
              ],
            },
            {
              name: ["createLinkToken", "createOrgLiveMigrationLinkToken"],
              description:
                "Create one link-token that contains all the information required to complete the link",
              options: [
                envelopeFlag,
                fileFlag3,
                orgIdFlag2,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag2,
              ],
            },
            {
              name: ["cutoverMigration", "cutoverGroupLiveMigration"],
              description: "Cut over the migrated cluster to MongoDB Atlas",
              options: [
                envelopeFlag,
                groupIdFlag,
                {
                  name: "--liveMigrationId",
                  description:
                    "Unique 24-hexadecimal digit string that identifies the migration",
                  args: { name: "liveMigrationId" },
                },
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag2,
              ],
            },
            {
              name: ["deleteLinkTokens", "deleteOrgLiveMigrationLinkTokens"],
              description:
                "Remove one organization link and its associated public API key",
              options: [
                envelopeFlag,
                orgIdFlag2,
                outputFlag2,
                outputFileFlag,
                versionFlag2,
              ],
            },
            {
              name: "getGroupLiveMigration",
              description: "Return details of one cluster migration job",
              options: [
                envelopeFlag,
                groupIdFlag,
                {
                  name: "--liveMigrationId",
                  description:
                    "Unique 24-hexadecimal digit string that identifies the migration",
                  args: { name: "liveMigrationId" },
                },
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag2,
              ],
            },
            {
              name: [
                "getMigrationValidateStatus",
                "getGroupLiveMigrationValidateStatus",
              ],
              description: "Return the status of one migration validation job",
              options: [
                envelopeFlag,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                {
                  name: "--validationId",
                  description:
                    "Unique 24-hexadecimal digit string that identifies the validation job",
                  args: { name: "validationId" },
                },
                versionFlag2,
              ],
            },
            {
              name: [
                "listAvailableProjects",
                "listOrgLiveMigrationAvailableProjects",
              ],
              description:
                "Return all projects that you can migrate to the specified organization",
              options: [
                envelopeFlag,
                orgIdFlag2,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag2,
              ],
            },
            {
              name: ["validateLiveMigrations", "validateGroupLiveMigrations"],
              description:
                "Verifies whether the provided credentials, available disk space, MongoDB versions, and so on meet the requirements of the migration request",
              options: [
                envelopeFlag,
                fileFlag3,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag3,
              ],
            },
          ],
        },
        {
          name: "cloudProviderAccess",
          description:
            "Returns, adds, authorizes, and removes AWS IAM roles in Atlas",
          subcommands: [
            {
              name: [
                "authorizeProviderAccessRole",
                "authorizeGroupCloudProviderAccessRole",
              ],
              description:
                "Grants access to the specified project for the specified access role",
              options: [
                envelopeFlag,
                fileFlag3,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                roleIdFlag,
                versionFlag2,
              ],
            },
            {
              name: [
                "createCloudProviderAccess",
                "createGroupCloudProviderAccess",
              ],
              description:
                "Creates one access role for the specified cloud provider",
              options: [
                envelopeFlag,
                fileFlag3,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag2,
              ],
            },
            {
              name: [
                "deauthorizeProviderAccessRole",
                "deauthorizeGroupCloudProviderAccessRole",
              ],
              description:
                "Revokes access to the specified project for the specified access role",
              options: [
                {
                  name: "--cloudProvider",
                  description:
                    "Human-readable label that identifies the cloud provider of the role to deauthorize",
                  args: { name: "cloudProvider" },
                },
                envelopeFlag,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                roleIdFlag,
                versionFlag2,
              ],
            },
            {
              name: ["getCloudProviderAccess", "getGroupCloudProviderAccess"],
              description:
                "Returns the access role with the specified id and with access to the specified project",
              options: [
                envelopeFlag,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                roleIdFlag,
                versionFlag2,
              ],
            },
            {
              name: ["listCloudProviderAccess", "listGroupCloudProviderAccess"],
              description:
                "Returns all cloud provider access roles with access to the specified project",
              options: [
                envelopeFlag,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag2,
              ],
            },
          ],
        },
        {
          name: "clusterOutageSimulation",
          description: "Returns, starts, or ends a cluster outage simulation",
          subcommands: [
            {
              name: ["endOutageSimulation", "endGroupClusterOutageSimulation"],
              description: "Ends a cluster outage simulation",
              options: [
                {
                  name: "--clusterName",
                  description:
                    "Human-readable label that identifies the cluster that is undergoing outage simulation",
                  args: { name: "clusterName" },
                },
                envelopeFlag,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag2,
                watchFlag,
                watchTimeoutFlag,
              ],
            },
            {
              name: ["getOutageSimulation", "getGroupClusterOutageSimulation"],
              description: "Returns one outage simulation for one cluster",
              options: [
                {
                  name: "--clusterName",
                  description:
                    "Human-readable label that identifies the cluster that is undergoing outage simulation",
                  args: { name: "clusterName" },
                },
                envelopeFlag,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag2,
              ],
            },
            {
              name: [
                "startOutageSimulation",
                "startGroupClusterOutageSimulation",
              ],
              description: "Starts a cluster outage simulation",
              options: [
                {
                  name: "--clusterName",
                  description:
                    "Human-readable label that identifies the cluster to undergo an outage simulation",
                  args: { name: "clusterName" },
                },
                envelopeFlag,
                fileFlag3,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag2,
                watchFlag,
                watchTimeoutFlag,
              ],
            },
          ],
        },
        {
          name: "clusters",
          description: "Returns, adds, edits, and removes database deployments",
          subcommands: [
            {
              name: ["createCluster", "createGroupCluster"],
              description: "Creates one cluster in the specified project",
              options: [
                envelopeFlag,
                fileFlag3,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                {
                  name: "--version",
                  description:
                    "API version to use when calling the Atlas API endpoints",
                  args: {
                    name: "version",
                    suggestions: [
                      "2023-01-01",
                      "2023-02-01",
                      "2024-08-05",
                      "2024-10-23",
                    ],
                    default: "2024-10-23",
                  },
                },
                watchFlag,
                watchTimeoutFlag,
              ],
            },
            {
              name: [
                "createEndpointConnectionString",
                "createGroupClusterPrivateEndpointConnectionString",
              ],
              description:
                "Creates one private endpoint connection string for the specified cluster",
              options: [
                clusterNameFlag2,
                envelopeFlag,
                fileFlag3,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag8,
              ],
            },
            {
              name: "createGroupMongosTopology",
              description:
                "Attaches a dedicated mongos topology to an existing sharded cluster, triggering the transition from colocated to dedicated mongos",
              options: [
                envelopeFlag,
                fileFlag3,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag8,
              ],
            },
            {
              name: ["deleteCluster", "deleteGroupCluster"],
              description: "Removes one cluster from the specified project",
              options: [
                clusterNameFlag2,
                envelopeFlag,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                {
                  name: "--retainBackups",
                  description:
                    "Flag that indicates whether to retain backup snapshots for the deleted dedicated cluster",
                },
                versionFlag9,
                watchFlag,
                watchTimeoutFlag,
              ],
            },
            {
              name: [
                "deleteEndpointConnectionString",
                "deleteGroupClusterPrivateEndpointConnectionString",
              ],
              description:
                "Deletes one private endpoint connection string from the specified cluster",
              options: [
                clusterNameFlag2,
                connectionStringIdFlag,
                envelopeFlag,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag8,
              ],
            },
            {
              name: "deleteGroupMongosTopology",
              description:
                "Removes the dedicated mongos topology from the specified cluster, transitioning it back to colocated mongos",
              options: [
                clusterNameFlag4,
                envelopeFlag,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag8,
              ],
            },
            {
              name: ["getCluster", "getGroupCluster"],
              description:
                "Returns the details for one cluster in the specified project",
              options: [
                clusterNameFlag5,
                envelopeFlag,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag10,
              ],
            },
            {
              name: [
                "getClusterAdaptiveSettings",
                "getGroupClusterAdaptiveSettings",
              ],
              description:
                "Returns the Adaptive Settings for the specified cluster, including client-provided overrides and the effective settings derived from those overrides and Atlas-managed defaults",
              options: [
                clusterNameFlag2,
                envelopeFlag,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag,
              ],
            },
            {
              name: [
                "getAutoEmbeddingInference",
                "getGroupClusterAutoEmbeddingInference",
              ],
              description:
                "Returns the configured and effective inference scope for Auto-Embedding indexes on the specified cluster",
              options: [
                {
                  name: "--clusterName",
                  description:
                    "Name of the cluster for which to return the inference scope",
                  args: { name: "clusterName" },
                },
                envelopeFlag,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag8,
              ],
            },
            {
              name: [
                "getAutoEmbeddingOperation",
                "getGroupClusterAutoEmbeddingInferenceOperation",
              ],
              description:
                "Returns one tracked Auto-Embedding inference scope operation",
              options: [
                {
                  name: "--clusterName",
                  description:
                    "Name of the cluster for which to return an operation",
                  args: { name: "clusterName" },
                },
                envelopeFlag,
                groupIdFlag,
                {
                  name: "--operationId",
                  description: "Unique identifier of the operation",
                  args: { name: "operationId" },
                },
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag8,
              ],
            },
            {
              name: [
                "getEndpointConnectionString",
                "getGroupClusterPrivateEndpointConnectionString",
              ],
              description:
                "Returns one private endpoint connection string from the specified cluster",
              options: [
                clusterNameFlag2,
                connectionStringIdFlag,
                envelopeFlag,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag8,
              ],
            },
            {
              name: ["getProcessArgs", "getGroupClusterProcessArgs"],
              description:
                "Returns the advanced configuration details for one cluster in the specified project",
              options: [
                clusterNameFlag2,
                envelopeFlag,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag7,
              ],
            },
            {
              name: ["getClusterSqlInterface", "getGroupClusterSqlInterface"],
              description:
                "Returns the current SQL Interface status, either ON or OFF, for the specified cluster",
              options: [
                clusterNameFlag2,
                envelopeFlag,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag8,
              ],
            },
            {
              name: ["getClusterStatus", "getGroupClusterStatus"],
              description:
                "Returns the status of all changes that you made to the specified cluster in the specified project",
              options: [
                clusterNameFlag2,
                envelopeFlag,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag2,
              ],
            },
            {
              name: "getGroupMongosTopology",
              description:
                "Returns the dedicated mongos topology for the specified cluster, or a topology staged before its cluster exists",
              options: [
                clusterNameFlag4,
                envelopeFlag,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag8,
              ],
            },
            {
              name: ["getSampleDatasetLoad", "getGroupSampleDatasetLoad"],
              description:
                "Checks the progress of loading the sample dataset into one cluster",
              options: [
                envelopeFlag,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                {
                  name: "--sampleDatasetId",
                  description:
                    "Unique 24-hexadecimal digit string that identifies the loaded sample dataset",
                  args: { name: "sampleDatasetId" },
                },
                versionFlag2,
              ],
            },
            {
              name: [
                "grantMongoEmployeeAccess",
                "grantGroupClusterMongoDbEmployeeAccess",
              ],
              description:
                "Grants MongoDB employee cluster access for the given duration and at the specified level for one cluster",
              options: [
                clusterNameFlag5,
                envelopeFlag,
                fileFlag3,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag11,
              ],
            },
            {
              name: "listClusterDetails",
              description:
                "Returns the details for all clusters in all projects to which you have access",
              options: [
                envelopeFlag,
                includeCountFlag,
                itemsPerPageFlag,
                outputFlag2,
                outputFileFlag,
                pageNumFlag,
                prettyFlag,
                versionFlag2,
              ],
            },
            {
              name: [
                "listAutoEmbeddingOperations",
                "listGroupClusterAutoEmbeddingInferenceOperations",
              ],
              description:
                "Returns tracked Auto-Embedding inference scope operations for one cluster",
              options: [
                {
                  name: "--clusterName",
                  description:
                    "Name of the cluster for which to return operations",
                  args: { name: "clusterName" },
                },
                envelopeFlag,
                groupIdFlag,
                includeCountFlag,
                itemsPerPageFlag,
                outputFlag2,
                outputFileFlag,
                pageNumFlag,
                prettyFlag,
                versionFlag8,
              ],
            },
            {
              name: [
                "listEndpointConnectionStrings",
                "listGroupClusterPrivateEndpointConnectionStrings",
              ],
              description:
                "Returns all private endpoint connection strings for the specified cluster",
              options: [
                clusterNameFlag2,
                envelopeFlag,
                groupIdFlag,
                includeCountFlag,
                itemsPerPageFlag,
                {
                  name: "--managementType",
                  description: "Filter records by management type",
                  args: { name: "managementType" },
                },
                outputFlag2,
                outputFileFlag,
                pageNumFlag,
                prettyFlag,
                {
                  name: "--status",
                  description: "Filter records by lifecycle status",
                  args: { name: "status" },
                },
                versionFlag8,
              ],
            },
            {
              name: [
                "listClusterProviderRegions",
                "listGroupClusterProviderRegions",
              ],
              description:
                "Returns the list of regions available for the specified cloud provider at the specified tier",
              options: [
                envelopeFlag,
                groupIdFlag,
                includeCountFlag,
                itemsPerPageFlag,
                outputFlag2,
                outputFileFlag,
                pageNumFlag,
                prettyFlag,
                {
                  name: "--providers",
                  description: "Cloud providers whose regions to retrieve",
                  args: { name: "providers" },
                  isRepeatable: true,
                },
                {
                  name: "--tier",
                  description: "Cluster tier for which to retrieve the regions",
                  args: { name: "tier" },
                },
                versionFlag2,
              ],
            },
            {
              name: ["listClusters", "listGroupClusters"],
              description:
                "Returns the details for all clusters in the specific project to which you have access",
              options: [
                envelopeFlag,
                groupIdFlag,
                includeCountFlag,
                {
                  name: "--includeDeletedWithRetainedBackups",
                  description:
                    "Flag that indicates whether to return Clusters with retain backups",
                },
                itemsPerPageFlag,
                outputFlag2,
                outputFileFlag,
                pageNumFlag,
                prettyFlag,
                versionFlag10,
              ],
            },
            {
              name: "listGroupMongosTopologies",
              description:
                "Returns the dedicated mongos topologies in the specified project, including topologies staged before their cluster exists",
              options: [
                envelopeFlag,
                groupIdFlag,
                includeCountFlag,
                itemsPerPageFlag,
                outputFlag2,
                outputFileFlag,
                pageNumFlag,
                prettyFlag,
                versionFlag8,
              ],
            },
            {
              name: [
                "pinFeatureCompatibilityVersion",
                "pinGroupClusterFeatureCompatibilityVersion",
              ],
              description:
                "Pins the Feature Compatibility Version (FCV) to the current MongoDB version and sets the pin expiration date",
              options: [
                clusterNameFlag5,
                envelopeFlag,
                fileFlag3,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag5,
              ],
            },
            {
              name: [
                "requestSampleDatasetLoad",
                "requestGroupSampleDatasetLoad",
              ],
              description:
                "Requests loading the MongoDB sample dataset into the specified cluster",
              options: [
                envelopeFlag,
                groupIdFlag,
                {
                  name: "--name",
                  description:
                    "Human-readable label that identifies the cluster into which you load the sample dataset",
                  args: { name: "name" },
                },
                outputFlag2,
                outputFileFlag,
                versionFlag2,
                watchFlag,
                watchTimeoutFlag,
              ],
            },
            {
              name: [
                "resetAutoEmbeddingInference",
                "resetGroupClusterAutoEmbeddingInference",
              ],
              description:
                "Resets the explicit inference scope so that Atlas manages the Auto-Embedding scope",
              options: [
                {
                  name: "--clusterName",
                  description:
                    "Name of the cluster for which to reset the inference scope",
                  args: { name: "clusterName" },
                },
                envelopeFlag,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag8,
              ],
            },
            {
              name: ["restartPrimaries", "restartGroupClusterPrimaries"],
              description:
                "Starts a failover test for the specified cluster in the specified project",
              options: [
                clusterNameFlag2,
                envelopeFlag,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag9,
              ],
            },
            {
              name: [
                "revokeMongoEmployeeAccess",
                "revokeGroupClusterMongoDbEmployeeAccess",
              ],
              description:
                "Revokes a previously granted MongoDB employee cluster access",
              options: [
                clusterNameFlag5,
                envelopeFlag,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag11,
              ],
            },
            {
              name: [
                "unpinFeatureCompatibilityVersion",
                "unpinGroupClusterFeatureCompatibilityVersion",
              ],
              description:
                "Unpins the current fixed Feature Compatibility Version (FCV)",
              options: [
                clusterNameFlag5,
                envelopeFlag,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag5,
              ],
            },
            {
              name: ["updateCluster", "updateGroupCluster"],
              description:
                "Updates the details for one cluster in the specified project",
              options: [
                clusterNameFlag2,
                envelopeFlag,
                fileFlag3,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                {
                  name: "--version",
                  description:
                    "API version to use when calling the Atlas API endpoints",
                  args: {
                    name: "version",
                    suggestions: [
                      "2023-01-01",
                      "2023-02-01",
                      "2024-08-05",
                      "2024-10-23",
                    ],
                    default: "2024-10-23",
                  },
                },
                watchFlag,
                watchTimeoutFlag,
              ],
            },
            {
              name: [
                "updateClusterAdaptiveSettings",
                "updateGroupClusterAdaptiveSettings",
              ],
              description:
                "Updates the client-provided Adaptive Settings overrides for the specified cluster and returns the resulting Adaptive Settings, including the effective settings derived from those overrides and Atlas-managed defaults",
              options: [
                clusterNameFlag2,
                envelopeFlag,
                fileFlag3,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag,
              ],
            },
            {
              name: [
                "updateAutoEmbeddingInference",
                "updateGroupClusterAutoEmbeddingInference",
              ],
              description:
                "Updates the explicit inference scope for Auto-Embedding indexes on the specified cluster",
              options: [
                {
                  name: "--clusterName",
                  description:
                    "Name of the cluster for which to update the inference scope",
                  args: { name: "clusterName" },
                },
                envelopeFlag,
                fileFlag3,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag8,
              ],
            },
            {
              name: [
                "updateEndpointConnectionString",
                "updateGroupClusterPrivateEndpointConnectionString",
              ],
              description: "Updates one private endpoint connection string",
              options: [
                clusterNameFlag2,
                connectionStringIdFlag,
                envelopeFlag,
                fileFlag3,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag8,
              ],
            },
            {
              name: ["updateProcessArgs", "updateGroupClusterProcessArgs"],
              description:
                "Updates the advanced configuration details for one cluster in the specified project",
              options: [
                clusterNameFlag2,
                envelopeFlag,
                fileFlag3,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag7,
              ],
            },
            {
              name: [
                "updateClusterSqlInterface",
                "updateGroupClusterSqlInterface",
              ],
              description:
                "Enables or disables the SQL Interface for the specified cluster by setting its status to ON or OFF",
              options: [
                clusterNameFlag2,
                envelopeFlag,
                fileFlag3,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag8,
              ],
            },
            {
              name: "updateGroupMongosTopology",
              description:
                "Updates the dedicated mongos tier (instance size or region placements) for the specified cluster",
              options: [
                clusterNameFlag4,
                envelopeFlag,
                fileFlag3,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag8,
              ],
            },
            {
              name: [
                "upgradeTenantUpgrade",
                "upgradeGroupClusterTenantUpgrade",
              ],
              description:
                "Upgrades a shared-tier cluster to a Flex or Dedicated (M10+) cluster in the specified project",
              options: [
                envelopeFlag,
                fileFlag3,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag2,
              ],
            },
          ],
        },
        {
          name: "collectionLevelMetrics",
          description:
            "Returns, adds, and edits pinned namespaces for the specified cluster or process",
          subcommands: [
            {
              name: [
                "getClusterNamespaces",
                "getGroupClusterCollStatNamespaces",
              ],
              description:
                "Return the subset of namespaces from the given cluster sorted by highest total execution time (descending) within the given time window",
              options: [
                clusterNameFlag6,
                {
                  name: "--clusterView",
                  description:
                    "Human-readable label that identifies the cluster topology to retrieve metrics for",
                  args: { name: "clusterView" },
                },
                endFlag2,
                envelopeFlag,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                periodFlag2,
                startFlag2,
                versionFlag12,
              ],
            },
            {
              name: [
                "getProcessNamespaces",
                "getGroupProcessCollStatNamespaces",
              ],
              description:
                "Return the subset of namespaces from the given process ranked by highest total execution time (descending) within the given time window",
              options: [
                endFlag2,
                envelopeFlag,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                periodFlag2,
                processIdFlag,
                startFlag2,
                versionFlag12,
              ],
            },
            {
              name: [
                "listCollStatMeasurements",
                "listGroupClusterCollStatMeasurements",
              ],
              description:
                "Get a list of the Coll Stats Latency cluster-level measurements for the given namespace",
              options: [
                {
                  name: "--clusterName",
                  description:
                    "Human-readable label that identifies the cluster to retrieve metrics for",
                  args: { name: "clusterName" },
                },
                {
                  name: "--clusterView",
                  description:
                    "Human-readable label that identifies the cluster topology to retrieve metrics for",
                  args: { name: "clusterView" },
                },
                collectionNameFlag2,
                databaseNameFlag2,
                endFlag2,
                envelopeFlag,
                groupIdFlag,
                {
                  name: "--metrics",
                  description:
                    "List that contains the metrics that you want to retrieve for the associated data series",
                  args: { name: "metrics" },
                  isRepeatable: true,
                },
                outputFlag2,
                outputFileFlag,
                periodFlag2,
                startFlag2,
                versionFlag12,
              ],
            },
            {
              name: [
                "listPinnedNamespaces",
                "listGroupClusterCollStatPinnedNamespaces",
              ],
              description:
                "Returns a list of given cluster's pinned namespaces, a set of namespaces manually selected by users to collect query latency metrics on",
              options: [
                {
                  name: "--clusterName",
                  description:
                    "Human-readable label that identifies the cluster to retrieve pinned namespaces for",
                  args: { name: "clusterName" },
                },
                envelopeFlag,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                versionFlag12,
              ],
            },
            {
              name: ["listCollStatMetrics", "listGroupCollStatMetrics"],
              description:
                "Returns all available Coll Stats Latency metric names and their respective units for the specified project at the time of request",
              options: [
                envelopeFlag,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                versionFlag12,
              ],
            },
            {
              name: [
                "listProcessMeasurements",
                "listGroupProcessCollStatMeasurements",
              ],
              description:
                "Get a list of the Coll Stats Latency process-level measurements for the given namespace",
              options: [
                collectionNameFlag2,
                databaseNameFlag2,
                endFlag2,
                envelopeFlag,
                groupIdFlag,
                {
                  name: "--metrics",
                  description:
                    "List that contains the metrics that you want to retrieve for the associated data series",
                  args: { name: "metrics" },
                  isRepeatable: true,
                },
                outputFlag2,
                outputFileFlag,
                periodFlag2,
                processIdFlag,
                startFlag2,
                versionFlag12,
              ],
            },
            {
              name: [
                "pinNamespaces",
                "pinGroupClusterCollStatPinnedNamespaces",
              ],
              description:
                "Pin provided list of namespaces for collection-level latency metrics collection for the given Group and Cluster",
              options: [
                clusterNameFlag6,
                envelopeFlag,
                fileFlag3,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                versionFlag12,
              ],
            },
            {
              name: [
                "unpinNamespaces",
                "unpinGroupClusterCollStatUnpinNamespaces",
              ],
              description:
                "Unpin provided list of namespaces for collection-level latency metrics collection for the given Group and Cluster",
              options: [
                {
                  name: "--clusterName",
                  description:
                    "Human-readable label that identifies the cluster to unpin namespaces from",
                  args: { name: "clusterName" },
                },
                envelopeFlag,
                fileFlag3,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                versionFlag12,
              ],
            },
            {
              name: [
                "updatePinnedNamespaces",
                "updateGroupClusterCollStatPinnedNamespaces",
              ],
              description:
                "Add provided list of namespaces to existing pinned namespaces list for collection-level latency metrics collection for the given Group and Cluster",
              options: [
                clusterNameFlag6,
                envelopeFlag,
                fileFlag3,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                versionFlag12,
              ],
            },
          ],
        },
        {
          name: "customDatabaseRoles",
          description:
            "Returns, adds, edits, and removes custom database user privilege roles",
          subcommands: [
            {
              name: ["createCustomDbRole", "createGroupCustomDbRoleRole"],
              description: "Creates one custom role in the specified project",
              options: [
                envelopeFlag,
                fileFlag3,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag2,
              ],
            },
            {
              name: ["deleteCustomDbRole", "deleteGroupCustomDbRoleRole"],
              description: "Removes one custom role from the specified project",
              options: [
                envelopeFlag,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                roleNameFlag,
                versionFlag2,
              ],
            },
            {
              name: ["getCustomDbRole", "getGroupCustomDbRoleRole"],
              description: "Returns one custom role for the specified project",
              options: [
                envelopeFlag,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                roleNameFlag,
                versionFlag2,
              ],
            },
            {
              name: ["listCustomDbRoles", "listGroupCustomDbRoleRoles"],
              description: "Returns all custom roles for the specified project",
              options: [
                envelopeFlag,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag2,
              ],
            },
            {
              name: ["updateCustomDbRole", "updateGroupCustomDbRoleRole"],
              description: "Updates one custom role in the specified project",
              options: [
                envelopeFlag,
                fileFlag3,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                roleNameFlag,
                versionFlag2,
              ],
            },
          ],
        },
        {
          name: "dataFederation",
          description:
            "Returns, adds, edits, and removes Federated Database Instances",
          subcommands: [
            {
              name: ["createDataFederation", "createGroupDataFederation"],
              description:
                "Creates one federated database instance in the specified project",
              options: [
                envelopeFlag,
                fileFlag3,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                {
                  name: "--skipRoleValidation",
                  description:
                    "Flag that indicates whether this request should check if the requesting IAM role can read from the S3 bucket",
                },
                versionFlag2,
              ],
            },
            {
              name: [
                "createPrivateEndpointId",
                "createGroupPrivateNetworkSettingEndpointId",
              ],
              description:
                "Adds one private endpoint for Federated Database Instances and Online Archives to the specified projects",
              options: [
                envelopeFlag,
                fileFlag3,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag2,
              ],
            },
            {
              name: ["deleteDataFederation", "deleteGroupDataFederation"],
              description:
                "Removes one federated database instance from the specified project",
              options: [
                envelopeFlag,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                {
                  name: "--tenantName",
                  description:
                    "Human-readable label that identifies the federated database instance to remove",
                  args: { name: "tenantName" },
                },
                versionFlag2,
              ],
            },
            {
              name: [
                "deleteDataFederationLimit",
                "deleteGroupDataFederationLimit",
              ],
              description:
                "Deletes one query limit for one federated database instance",
              options: [
                envelopeFlag,
                groupIdFlag,
                limitNameFlag,
                outputFlag2,
                outputFileFlag,
                tenantNameFlag,
                versionFlag2,
              ],
            },
            {
              name: [
                "deletePrivateEndpointId",
                "deleteGroupPrivateNetworkSettingEndpointId",
              ],
              description:
                "Removes one private endpoint for Federated Database Instances and Online Archives in the specified project",
              options: [
                {
                  name: "--endpointId",
                  description:
                    "Unique 22-character alphanumeric string that identifies the private endpoint to remove",
                  args: { name: "endpointId" },
                },
                envelopeFlag,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag2,
              ],
            },
            {
              name: [
                "downloadFederationQueryLogs",
                "downloadGroupDataFederationQueryLogs",
              ],
              description:
                "Downloads the query logs for the specified federated database instance",
              options: [
                endDateFlag,
                groupIdFlag,
                outputFlag3,
                outputFileFlag,
                startDateFlag,
                {
                  name: "--tenantName",
                  description:
                    "Human-readable label that identifies the federated database instance for which you want to download query logs",
                  args: { name: "tenantName" },
                },
                versionFlag2,
              ],
            },
            {
              name: ["getDataFederation", "getGroupDataFederation"],
              description:
                "Returns the details of one federated database instance within the specified project",
              options: [
                envelopeFlag,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                {
                  name: "--tenantName",
                  description:
                    "Human-readable label that identifies the Federated Database to return",
                  args: { name: "tenantName" },
                },
                versionFlag2,
              ],
            },
            {
              name: ["getDataFederationLimit", "getGroupDataFederationLimit"],
              description:
                "Returns the details of one query limit for the specified federated database instance in the specified project",
              options: [
                envelopeFlag,
                groupIdFlag,
                limitNameFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                tenantNameFlag,
                versionFlag2,
              ],
            },
            {
              name: [
                "getPrivateEndpointId",
                "getGroupPrivateNetworkSettingEndpointId",
              ],
              description:
                "Returns the specified private endpoint for Federated Database Instances or Online Archives in the specified project",
              options: [
                {
                  name: "--endpointId",
                  description:
                    "Unique 22-character alphanumeric string that identifies the private endpoint to return",
                  args: { name: "endpointId" },
                },
                envelopeFlag,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag2,
              ],
            },
            {
              name: ["listDataFederation", "listGroupDataFederation"],
              description:
                "Returns the details of all federated database instances in the specified project",
              options: [
                envelopeFlag,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                {
                  name: "--type",
                  description: "Type of Federated Database Instances to return",
                  args: { name: "type" },
                },
                versionFlag2,
              ],
            },
            {
              name: [
                "listDataFederationLimits",
                "listGroupDataFederationLimits",
              ],
              description:
                "Returns query limits for a federated databases instance in the specified project",
              options: [
                envelopeFlag,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                {
                  name: "--tenantName",
                  description:
                    "Human-readable label that identifies the federated database instance for which you want to retrieve query limits",
                  args: { name: "tenantName" },
                },
                versionFlag2,
              ],
            },
            {
              name: [
                "listPrivateEndpointIds",
                "listGroupPrivateNetworkSettingEndpointIds",
              ],
              description:
                "Returns all private endpoints for Federated Database Instances and Online Archives in the specified project",
              options: [
                envelopeFlag,
                groupIdFlag,
                includeCountFlag,
                itemsPerPageFlag,
                outputFlag2,
                outputFileFlag,
                pageNumFlag,
                prettyFlag,
                versionFlag2,
              ],
            },
            {
              name: ["setDataFederationLimit", "setGroupDataFederationLimit"],
              description:
                "Creates or updates one query limit for one federated database instance",
              options: [
                envelopeFlag,
                fileFlag3,
                groupIdFlag,
                limitNameFlag,
                outputFlag2,
                outputFileFlag,
                tenantNameFlag,
                versionFlag2,
              ],
            },
            {
              name: ["updateDataFederation", "updateGroupDataFederation"],
              description:
                "Updates the details of one federated database instance in the specified project",
              options: [
                envelopeFlag,
                fileFlag3,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                {
                  name: "--skipRoleValidation",
                  description:
                    "Flag that indicates whether this request should check if the requesting IAM role can read from the S3 bucket",
                },
                {
                  name: "--tenantName",
                  description:
                    "Human-readable label that identifies the federated database instance to update",
                  args: { name: "tenantName" },
                },
                versionFlag2,
              ],
            },
          ],
        },
        {
          name: "databaseUsers",
          description: "Returns, adds, edits, and removes database users",
          subcommands: [
            {
              name: ["createDatabaseUser", "createGroupDatabaseUser"],
              description: "Creates one database user in the specified project",
              options: [
                envelopeFlag,
                fileFlag3,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag2,
              ],
            },
            {
              name: ["deleteDatabaseUser", "deleteGroupDatabaseUser"],
              description:
                "Removes one database user from the specified project",
              options: [
                databaseNameFlag3,
                envelopeFlag,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                usernameFlag,
                versionFlag2,
              ],
            },
            {
              name: ["getDatabaseUser", "getGroupDatabaseUser"],
              description:
                "Returns one database user that belong to the specified project",
              options: [
                databaseNameFlag3,
                envelopeFlag,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                usernameFlag,
                versionFlag2,
              ],
            },
            {
              name: ["listDatabaseUsers", "listGroupDatabaseUsers"],
              description:
                "Returns all database users that belong to the specified project",
              options: [
                envelopeFlag,
                groupIdFlag,
                includeCountFlag,
                itemsPerPageFlag,
                outputFlag2,
                outputFileFlag,
                pageNumFlag,
                prettyFlag,
                versionFlag2,
              ],
            },
            {
              name: ["updateDatabaseUser", "updateGroupDatabaseUser"],
              description:
                "Updates one database user that belongs to the specified project",
              options: [
                databaseNameFlag3,
                envelopeFlag,
                fileFlag3,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                usernameFlag,
                versionFlag2,
              ],
            },
          ],
        },
        {
          name: "encryptionAtRestUsingCustomerKeyManagement",
          description:
            "Returns and edits the Encryption at Rest using Customer Key Management configuration",
          subcommands: [
            {
              name: [
                "createRestPrivateEndpoint",
                "createGroupEncryptionAtRestPrivateEndpoint",
              ],
              description:
                "Creates a private endpoint in the specified region for encryption at rest using customer key management",
              options: [
                {
                  name: "--cloudProvider",
                  description:
                    "Human-readable label that identifies the cloud provider for the private endpoint to create",
                  args: { name: "cloudProvider" },
                },
                envelopeFlag,
                fileFlag3,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag2,
              ],
            },
            {
              name: ["getEncryptionAtRest", "getGroupEncryptionAtRest"],
              description:
                "Returns the configuration for encryption at rest using the keys you manage through your cloud provider",
              options: [
                envelopeFlag,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag2,
              ],
            },
            {
              name: [
                "getRestPrivateEndpoint",
                "getGroupEncryptionAtRestPrivateEndpoint",
              ],
              description:
                "Returns one private endpoint, identified by its ID, for encryption at rest using Customer Key Management",
              options: [
                {
                  name: "--cloudProvider",
                  description:
                    "Human-readable label that identifies the cloud provider of the private endpoint",
                  args: { name: "cloudProvider" },
                },
                {
                  name: "--endpointId",
                  description:
                    "Unique 24-hexadecimal digit string that identifies the private endpoint",
                  args: { name: "endpointId" },
                },
                envelopeFlag,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag2,
              ],
            },
            {
              name: [
                "listRestPrivateEndpoints",
                "listGroupEncryptionAtRestPrivateEndpoints",
              ],
              description:
                "Returns the private endpoints of the specified cloud provider for encryption at rest using customer key management",
              options: [
                {
                  name: "--cloudProvider",
                  description:
                    "Human-readable label that identifies the cloud provider for the private endpoints to return",
                  args: { name: "cloudProvider" },
                },
                envelopeFlag,
                groupIdFlag,
                includeCountFlag,
                itemsPerPageFlag,
                outputFlag2,
                outputFileFlag,
                pageNumFlag,
                prettyFlag,
                versionFlag2,
              ],
            },
            {
              name: [
                "requestPrivateEndpointDeletion",
                "requestGroupEncryptionAtRestPrivateEndpointDeletion",
              ],
              description:
                "Deletes one private endpoint, identified by its ID, for encryption at rest using Customer Key Management",
              options: [
                {
                  name: "--cloudProvider",
                  description:
                    "Human-readable label that identifies the cloud provider of the private endpoint to delete",
                  args: { name: "cloudProvider" },
                },
                {
                  name: "--endpointId",
                  description:
                    "Unique 24-hexadecimal digit string that identifies the private endpoint to delete",
                  args: { name: "endpointId" },
                },
                envelopeFlag,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag2,
              ],
            },
            {
              name: ["updateEncryptionAtRest", "updateGroupEncryptionAtRest"],
              description:
                "Updates the configuration for encryption at rest using the keys you manage through your cloud provider",
              options: [
                envelopeFlag,
                fileFlag3,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag2,
              ],
            },
          ],
        },
        {
          name: "ephemeralClusters",
          description: "Create and return Atlas Ephemeral clusters",
          subcommands: [
            {
              name: "createEphemeralCluster",
              description:
                "Creates an Atlas Ephemeral cluster and returns its connection and claim details",
              options: [fileFlag3, outputFlag2, outputFileFlag, versionFlag8],
            },
            {
              name: "getEphemeralCluster",
              description:
                "Returns the details for one Atlas Ephemeral cluster",
              options: [
                {
                  name: "--clusterId",
                  description: "Unique ID of the ephemeral cluster to look up",
                  args: { name: "clusterId" },
                },
                outputFlag2,
                outputFileFlag,
                versionFlag8,
              ],
            },
          ],
        },
        {
          name: "events",
          description: "Returns events",
          subcommands: [
            {
              name: "getGroupEvent",
              description: "Returns one event for the specified project",
              options: [
                envelopeFlag,
                {
                  name: "--eventId",
                  description:
                    "Unique 24-hexadecimal digit string that identifies the event that you want to return",
                  args: { name: "eventId" },
                },
                groupIdFlag,
                includeRawFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag2,
              ],
            },
            {
              name: "getOrgEvent",
              description: "Returns one event for the specified organization",
              options: [
                envelopeFlag,
                {
                  name: "--eventId",
                  description:
                    "Unique 24-hexadecimal digit string that identifies the event that you want to return",
                  args: { name: "eventId" },
                },
                includeRawFlag,
                orgIdFlag2,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag2,
              ],
            },
            {
              name: "listEventTypes",
              description:
                "Returns a list of all event types, along with a description and additional metadata about each event",
              options: [
                envelopeFlag,
                includeCountFlag,
                itemsPerPageFlag,
                outputFlag2,
                outputFileFlag,
                pageNumFlag,
                prettyFlag,
                versionFlag2,
              ],
            },
            {
              name: "listGroupEvents",
              description: "Returns events for the specified project",
              options: [
                {
                  name: "--clusterNames",
                  description:
                    "Human-readable label that identifies the cluster",
                  args: { name: "clusterNames" },
                  isRepeatable: true,
                },
                envelopeFlag,
                eventTypeFlag,
                {
                  name: "--excludedEventType",
                  description:
                    "Category of event that you would like to exclude from query results, such as CLUSTER_CREATED",
                  args: { name: "excludedEventType" },
                  isRepeatable: true,
                },
                groupIdFlag,
                includeCountFlag,
                includeRawFlag,
                itemsPerPageFlag,
                {
                  name: "--maxDate",
                  description:
                    "Date and time from when MongoDB Cloud stops returning events",
                  args: { name: "maxDate" },
                },
                {
                  name: "--minDate",
                  description:
                    "Date and time from when MongoDB Cloud starts returning events",
                  args: { name: "minDate" },
                },
                outputFlag2,
                outputFileFlag,
                pageNumFlag,
                prettyFlag,
                versionFlag2,
              ],
            },
            {
              name: "listOrgEvents",
              description: "Returns events for the specified organization",
              options: [
                envelopeFlag,
                eventTypeFlag,
                includeCountFlag,
                includeRawFlag,
                itemsPerPageFlag,
                {
                  name: "--maxDate",
                  description:
                    "Date and time from when MongoDB Cloud stops returning events",
                  args: { name: "maxDate" },
                },
                {
                  name: "--minDate",
                  description:
                    "Date and time from when MongoDB Cloud starts returning events",
                  args: { name: "minDate" },
                },
                orgIdFlag2,
                outputFlag2,
                outputFileFlag,
                pageNumFlag,
                prettyFlag,
                versionFlag2,
              ],
            },
          ],
        },
        {
          name: "federatedAuthentication",
          description:
            "Returns, adds, edits, and removes federation-related features such as role mappings and connected organization configurations",
          subcommands: [
            {
              name: [
                "createRoleMapping",
                "createFederationSettingConnectedOrgConfigRoleMapping",
              ],
              description:
                "Adds one role mapping to the specified organization in the specified federation",
              options: [
                envelopeFlag,
                federationSettingsIdFlag2,
                fileFlag3,
                orgIdFlag2,
                outputFlag2,
                outputFileFlag,
                versionFlag2,
              ],
            },
            {
              name: [
                "createIdentityProvider",
                "createFederationSettingIdentityProvider",
              ],
              description:
                "Creates one identity provider within the specified federation",
              options: [
                envelopeFlag,
                federationSettingsIdFlag2,
                fileFlag3,
                outputFlag2,
                outputFileFlag,
                versionFlag12,
              ],
            },
            {
              name: "deleteFederationSetting",
              description:
                "Deletes the federation settings instance and all associated data, including identity providers and domains",
              options: [
                federationSettingsIdFlag2,
                outputFlag2,
                outputFileFlag,
                versionFlag2,
              ],
            },
            {
              name: [
                "deleteRoleMapping",
                "deleteFederationSettingConnectedOrgConfigRoleMapping",
              ],
              description:
                "Removes one role mapping in the specified organization from the specified federation",
              options: [
                envelopeFlag,
                federationSettingsIdFlag2,
                {
                  name: "--id",
                  description:
                    "Unique 24-hexadecimal digit string that identifies the role mapping that you want to remove",
                  args: { name: "id" },
                },
                orgIdFlag2,
                outputFlag2,
                outputFileFlag,
                versionFlag2,
              ],
            },
            {
              name: [
                "deleteIdentityProvider",
                "deleteFederationSettingIdentityProvider",
              ],
              description:
                "Deletes one identity provider in the specified federation",
              options: [
                envelopeFlag,
                federationSettingsIdFlag2,
                {
                  name: "--identityProviderId",
                  description:
                    "Unique 24-hexadecimal digit string that identifies the identity provider to connect",
                  args: { name: "identityProviderId" },
                },
                outputFlag2,
                outputFileFlag,
                versionFlag12,
              ],
            },
            {
              name: [
                "getConnectedOrgConfig",
                "getFederationSettingConnectedOrgConfig",
              ],
              description:
                "Returns the specified connected organization configuration from the specified federation",
              options: [
                envelopeFlag,
                federationSettingsIdFlag2,
                {
                  name: "--orgId",
                  description:
                    "Unique 24-hexadecimal digit string that identifies the connected organization configuration to return",
                  args: { name: "orgId" },
                },
                outputFlag2,
                outputFileFlag,
                versionFlag2,
              ],
            },
            {
              name: [
                "getRoleMapping",
                "getFederationSettingConnectedOrgConfigRoleMapping",
              ],
              description:
                "Returns one role mapping from the specified organization in the specified federation",
              options: [
                envelopeFlag,
                federationSettingsIdFlag2,
                {
                  name: "--id",
                  description:
                    "Unique 24-hexadecimal digit string that identifies the role mapping that you want to return",
                  args: { name: "id" },
                },
                orgIdFlag2,
                outputFlag2,
                outputFileFlag,
                versionFlag2,
              ],
            },
            {
              name: [
                "getIdentityProvider",
                "getFederationSettingIdentityProvider",
              ],
              description:
                "Returns one identity provider in the specified federation by the identity provider's id",
              options: [
                envelopeFlag,
                federationSettingsIdFlag2,
                {
                  name: "--identityProviderId",
                  description:
                    "Unique string that identifies the identity provider to connect",
                  args: { name: "identityProviderId" },
                },
                outputFlag2,
                outputFileFlag,
                versionFlag12,
              ],
            },
            {
              name: [
                "getIdentityProviderMetadata",
                "getFederationSettingIdentityProviderMetadata",
              ],
              description:
                "Returns the metadata of one identity provider in the specified federation",
              options: [
                federationSettingsIdFlag2,
                {
                  name: "--identityProviderId",
                  description:
                    "Legacy 20-hexadecimal digit string that identifies the identity provider",
                  args: { name: "identityProviderId" },
                },
                outputFlag2,
                outputFileFlag,
                versionFlag2,
              ],
            },
            {
              name: ["getFederationSettings", "getOrgFederationSettings"],
              description:
                "Returns information about the federation settings for the specified organization",
              options: [
                envelopeFlag,
                orgIdFlag2,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag2,
              ],
            },
            {
              name: [
                "listRoleMappings",
                "listFederationSettingConnectedOrgConfigRoleMappings",
              ],
              description:
                "Returns all role mappings from the specified organization in the specified federation",
              options: [
                envelopeFlag,
                federationSettingsIdFlag2,
                orgIdFlag2,
                outputFlag2,
                outputFileFlag,
                versionFlag2,
              ],
            },
            {
              name: [
                "listConnectedOrgConfigs",
                "listFederationSettingConnectedOrgConfigs",
              ],
              description:
                "Returns all connected organization configurations in the specified federation",
              options: [
                envelopeFlag,
                federationSettingsIdFlag2,
                itemsPerPageFlag,
                outputFlag2,
                outputFileFlag,
                pageNumFlag,
                versionFlag2,
              ],
            },
            {
              name: [
                "listIdentityProviders",
                "listFederationSettingIdentityProviders",
              ],
              description:
                "Returns all identity providers with the provided protocol and type in the specified federation",
              options: [
                envelopeFlag,
                federationSettingsIdFlag2,
                {
                  name: "--idpType",
                  description: "The types of the target identity providers",
                  args: { name: "idpType" },
                  isRepeatable: true,
                },
                itemsPerPageFlag,
                outputFlag2,
                outputFileFlag,
                pageNumFlag,
                {
                  name: "--protocol",
                  description: "The protocols of the target identity providers",
                  args: { name: "protocol" },
                  isRepeatable: true,
                },
                versionFlag2,
              ],
            },
            {
              name: [
                "removeConnectedOrgConfig",
                "removeFederationSettingConnectedOrgConfig",
              ],
              description:
                "Removes one connected organization configuration from the specified federation",
              options: [
                envelopeFlag,
                federationSettingsIdFlag2,
                {
                  name: "--orgId",
                  description:
                    "Unique 24-hexadecimal digit string that identifies the connected organization configuration to remove",
                  args: { name: "orgId" },
                },
                outputFlag2,
                outputFileFlag,
                versionFlag2,
              ],
            },
            {
              name: [
                "revokeIdentityProviderJwks",
                "revokeFederationSettingIdentityProviderJwks",
              ],
              description:
                "Revokes the JWKS tokens from the requested OIDC identity provider",
              options: [
                envelopeFlag,
                federationSettingsIdFlag2,
                {
                  name: "--identityProviderId",
                  description:
                    "Unique 24-hexadecimal digit string that identifies the identity provider to connect",
                  args: { name: "identityProviderId" },
                },
                outputFlag2,
                outputFileFlag,
                versionFlag12,
              ],
            },
            {
              name: [
                "updateConnectedOrgConfig",
                "updateFederationSettingConnectedOrgConfig",
              ],
              description:
                "Updates one connected organization configuration from the specified federation",
              options: [
                envelopeFlag,
                federationSettingsIdFlag2,
                fileFlag3,
                {
                  name: "--orgId",
                  description:
                    "Unique 24-hexadecimal digit string that identifies the connected organization configuration to update",
                  args: { name: "orgId" },
                },
                outputFlag2,
                outputFileFlag,
                versionFlag2,
              ],
            },
            {
              name: [
                "updateRoleMapping",
                "updateFederationSettingConnectedOrgConfigRoleMapping",
              ],
              description:
                "Updates one role mapping in the specified organization in the specified federation",
              options: [
                envelopeFlag,
                federationSettingsIdFlag2,
                fileFlag3,
                {
                  name: "--id",
                  description:
                    "Unique 24-hexadecimal digit string that identifies the role mapping that you want to update",
                  args: { name: "id" },
                },
                orgIdFlag2,
                outputFlag2,
                outputFileFlag,
                versionFlag2,
              ],
            },
            {
              name: [
                "updateIdentityProvider",
                "updateFederationSettingIdentityProvider",
              ],
              description:
                "Updates one identity provider in the specified federation",
              options: [
                envelopeFlag,
                federationSettingsIdFlag2,
                fileFlag3,
                {
                  name: "--identityProviderId",
                  description:
                    "Unique string that identifies the identity provider to connect",
                  args: { name: "identityProviderId" },
                },
                outputFlag2,
                outputFileFlag,
                versionFlag12,
              ],
            },
          ],
        },
        {
          name: "flexClusters",
          description: "Returns, adds, edits, and removes flex clusters",
          subcommands: [
            {
              name: ["createFlexCluster", "createGroupFlexCluster"],
              description: "Creates one flex cluster in the specified project",
              options: [
                envelopeFlag,
                fileFlag3,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag6,
                watchFlag,
                watchTimeoutFlag,
              ],
            },
            {
              name: ["deleteFlexCluster", "deleteGroupFlexCluster"],
              description:
                "Removes one flex cluster from the specified project",
              options: [
                envelopeFlag,
                groupIdFlag,
                nameFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag6,
                watchFlag,
                watchTimeoutFlag,
              ],
            },
            {
              name: ["getFlexCluster", "getGroupFlexCluster"],
              description:
                "Returns details for one flex cluster in the specified project",
              options: [
                envelopeFlag,
                groupIdFlag,
                nameFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag6,
              ],
            },
            {
              name: ["listFlexClusters", "listGroupFlexClusters"],
              description:
                "Returns details for all flex clusters in the specified project",
              options: [
                envelopeFlag,
                groupIdFlag,
                includeCountFlag,
                itemsPerPageFlag,
                outputFlag2,
                outputFileFlag,
                pageNumFlag,
                prettyFlag,
                versionFlag6,
              ],
            },
            {
              name: ["tenantUpgrade", "tenantGroupFlexClusterUpgrade"],
              description:
                "Upgrades a flex cluster to a dedicated cluster (M10+) in the specified project",
              options: [
                envelopeFlag,
                fileFlag3,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag6,
              ],
            },
            {
              name: ["updateFlexCluster", "updateGroupFlexCluster"],
              description: "Updates one flex cluster in the specified project",
              options: [
                envelopeFlag,
                fileFlag3,
                groupIdFlag,
                nameFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag6,
                watchFlag,
                watchTimeoutFlag,
              ],
            },
          ],
        },
        {
          name: "flexRestoreJobs",
          description:
            "Returns and adds restore jobs for flex database deployments",
          subcommands: [
            {
              name: [
                "createFlexRestoreJob",
                "createGroupFlexClusterBackupRestoreJob",
              ],
              description:
                "Restores one snapshot of one flex cluster from the specified project",
              options: [
                envelopeFlag,
                fileFlag3,
                groupIdFlag,
                {
                  name: "--name",
                  description:
                    "Human-readable label that identifies the flex cluster whose snapshot you want to restore",
                  args: { name: "name" },
                },
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag6,
                watchFlag,
                watchTimeoutFlag,
              ],
            },
            {
              name: [
                "getFlexRestoreJob",
                "getGroupFlexClusterBackupRestoreJob",
              ],
              description:
                "Returns one restore job for one flex cluster from the specified project",
              options: [
                envelopeFlag,
                groupIdFlag,
                nameFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                {
                  name: "--restoreJobId",
                  description:
                    "Unique 24-hexadecimal digit string that identifies the restore job to return",
                  args: { name: "restoreJobId" },
                },
                versionFlag6,
              ],
            },
            {
              name: [
                "listFlexRestoreJobs",
                "listGroupFlexClusterBackupRestoreJobs",
              ],
              description:
                "Returns all restore jobs for one flex cluster from the specified project",
              options: [
                envelopeFlag,
                groupIdFlag,
                includeCountFlag,
                itemsPerPageFlag,
                nameFlag,
                outputFlag2,
                outputFileFlag,
                pageNumFlag,
                prettyFlag,
                versionFlag6,
              ],
            },
          ],
        },
        {
          name: "flexSnapshots",
          description:
            "Returns and requests to download flex database deployment snapshots",
          subcommands: [
            {
              name: ["downloadFlexBackup", "downloadGroupFlexClusterBackup"],
              description:
                "Requests one snapshot for the specified flex cluster",
              options: [
                envelopeFlag,
                fileFlag3,
                groupIdFlag,
                nameFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag6,
              ],
            },
            {
              name: [
                "getFlexBackupSnapshot",
                "getGroupFlexClusterBackupSnapshot",
              ],
              description:
                "Returns one snapshot of one flex cluster from the specified project",
              options: [
                envelopeFlag,
                groupIdFlag,
                nameFlag,
                outputFlag2,
                outputFileFlag,
                snapshotIdFlag,
                versionFlag6,
              ],
            },
            {
              name: [
                "listFlexBackupSnapshots",
                "listGroupFlexClusterBackupSnapshots",
              ],
              description:
                "Returns all snapshots of one flex cluster from the specified project",
              options: [
                envelopeFlag,
                groupIdFlag,
                includeCountFlag,
                itemsPerPageFlag,
                nameFlag,
                outputFlag2,
                outputFileFlag,
                pageNumFlag,
                prettyFlag,
                versionFlag6,
              ],
            },
          ],
        },
        {
          name: "globalClusters",
          description:
            "Returns, adds, and removes Global Cluster managed namespaces and custom zone mappings",
          subcommands: [
            {
              name: [
                "createCustomZoneMapping",
                "createGroupClusterGlobalWriteCustomZoneMapping",
              ],
              description:
                "Creates one custom zone mapping for the specified global cluster",
              options: [
                clusterNameFlag5,
                envelopeFlag,
                fileFlag3,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag10,
              ],
            },
            {
              name: [
                "createManagedNamespace",
                "createGroupClusterGlobalWriteManagedNamespace",
              ],
              description:
                "Creates one managed namespace within the specified global cluster",
              options: [
                clusterNameFlag5,
                envelopeFlag,
                fileFlag3,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag10,
              ],
            },
            {
              name: [
                "deleteCustomZoneMapping",
                "deleteGroupClusterGlobalWriteCustomZoneMapping",
              ],
              description:
                "Removes all custom zone mappings for the specified global cluster",
              options: [
                clusterNameFlag5,
                envelopeFlag,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag10,
              ],
            },
            {
              name: [
                "deleteManagedNamespaces",
                "deleteGroupClusterGlobalWriteManagedNamespaces",
              ],
              description:
                "Removes one managed namespace within the specified global cluster",
              options: [
                clusterNameFlag5,
                {
                  name: "--collection",
                  description:
                    "Human-readable label that identifies the collection associated with the managed namespace",
                  args: { name: "collection" },
                },
                {
                  name: "--db",
                  description:
                    "Human-readable label that identifies the database that contains the collection",
                  args: { name: "db" },
                },
                envelopeFlag,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag10,
              ],
            },
            {
              name: ["getClusterGlobalWrites", "getGroupClusterGlobalWrites"],
              description:
                "Returns one managed namespace within the specified global cluster",
              options: [
                clusterNameFlag5,
                envelopeFlag,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag10,
              ],
            },
          ],
        },
        {
          name: "invoices",
          description: "Returns invoices",
          subcommands: [
            {
              name: [
                "createCostExplorerProcess",
                "createOrgBillingCostExplorerUsageProcess",
              ],
              description:
                "Creates a query process within the Cost Explorer for the given parameters",
              options: [
                envelopeFlag,
                fileFlag3,
                orgIdFlag2,
                outputFlag2,
                outputFileFlag,
                versionFlag2,
              ],
            },
            {
              name: "createOrgInvoiceReport",
              description:
                "Requests asynchronous generation of a report for the specified invoice",
              options: [
                fileFlag3,
                {
                  name: "--invoiceId",
                  description:
                    "Unique string that identifies the invoice for which to generate the report",
                  args: { name: "invoiceId" },
                },
                orgIdFlag2,
                outputFlag2,
                outputFileFlag,
                versionFlag,
              ],
            },
            {
              name: [
                "generateInvoiceReport",
                "generateOrgInvoiceAndDownloadReport",
              ],
              description:
                "Generates and downloads a report for the specified invoice",
              options: [
                fileFlag3,
                {
                  name: "--invoiceId",
                  description:
                    "Unique string that identifies the invoice for which to generate the report",
                  args: { name: "invoiceId" },
                },
                orgIdFlag2,
                outputFlag3,
                outputFileFlag,
                versionFlag8,
              ],
            },
            {
              name: "getOrgAssociatedInvoices",
              description:
                "Returns a list of invoice IDs for the specified organization and month/year",
              options: [
                {
                  name: "--includeLinkedOrgs",
                  description:
                    "Whether to include invoices from linked organizations",
                },
                {
                  name: "--month",
                  description:
                    "The month for which to retrieve invoices (1-12)",
                  args: { name: "month" },
                },
                orgIdFlag2,
                outputFlag2,
                outputFileFlag,
                versionFlag,
                {
                  name: "--year",
                  description: "The year for which to retrieve invoices",
                  args: { name: "year" },
                },
              ],
            },
            {
              name: ["getCostExplorerUsage", "getOrgBillingCostExplorerUsage"],
              description:
                "Returns the usage details for a Cost Explorer query, if the query is finished and the data is ready to be viewed",
              options: [
                envelopeFlag,
                orgIdFlag2,
                {
                  name: ["--output", "-o"],
                  description: "Preferred api format",
                  args: {
                    name: "output",
                    suggestions: ["csv", "json", "go-template"],
                  },
                },
                outputFileFlag,
                {
                  name: "--token",
                  description:
                    "Unique 64 digit string that identifies the Cost Explorer query",
                  args: { name: "token" },
                },
                versionFlag2,
              ],
            },
            {
              name: ["getInvoice", "getOrgInvoice"],
              description:
                "Returns one invoice that MongoDB issued to the specified organization",
              options: [
                envelopeFlag,
                invoiceIdFlag,
                orgIdFlag2,
                {
                  name: ["--output", "-o"],
                  description: "Preferred api format",
                  args: {
                    name: "output",
                    suggestions: ["csv", "json", "go-template"],
                  },
                },
                outputFileFlag,
                prettyFlag,
                versionFlag2,
              ],
            },
            {
              name: ["getInvoiceCsv", "getOrgInvoiceCsv"],
              description:
                "Returns one invoice that MongoDB issued to the specified organization in CSV format",
              options: [
                envelopeFlag,
                invoiceIdFlag,
                orgIdFlag2,
                {
                  name: ["--output", "-o"],
                  description: "Preferred api format",
                  args: { name: "output", default: "csv" },
                },
                outputFileFlag,
                prettyFlag,
                versionFlag2,
              ],
            },
            {
              name: "getOrgInvoiceReport",
              description:
                "Returns the status and details of a previously requested invoice report",
              options: [
                {
                  name: "--invoiceId",
                  description:
                    "Unique string that identifies the invoice the report was generated for",
                  args: { name: "invoiceId" },
                },
                orgIdFlag2,
                outputFlag2,
                outputFileFlag,
                {
                  name: "--reportId",
                  description:
                    "Unique string that identifies the report to retrieve",
                  args: { name: "reportId" },
                },
                versionFlag,
              ],
            },
            {
              name: "getSku",
              description:
                "Returns details about a single SKU (Stock Keeping Unit) by its identifier",
              options: [
                envelopeFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                {
                  name: "--skuId",
                  description: "Unique identifier of the SKU to retrieve",
                  args: { name: "skuId" },
                },
                versionFlag,
              ],
            },
            {
              name: ["listInvoicePending", "listOrgInvoicePending"],
              description:
                "Returns all invoices accruing charges for the current billing cycle for the specified organization",
              options: [
                envelopeFlag,
                orgIdFlag2,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag2,
              ],
            },
            {
              name: "listOrgInvoiceReports",
              description:
                "Returns all unexpired reports for the specified invoice, newest first",
              options: [
                envelopeFlag,
                includeCountFlag,
                {
                  name: "--invoiceId",
                  description:
                    "Unique string that identifies the invoice to list reports for",
                  args: { name: "invoiceId" },
                },
                itemsPerPageFlag,
                orgIdFlag2,
                outputFlag2,
                outputFileFlag,
                pageNumFlag,
                prettyFlag,
                versionFlag,
              ],
            },
            {
              name: ["listInvoices", "listOrgInvoices"],
              description:
                "Returns all invoices that MongoDB issued to the specified organization",
              options: [
                envelopeFlag,
                {
                  name: "--fromDate",
                  description:
                    "Retrieve the invoices the startDates of which are greater than or equal to the fromDate",
                  args: { name: "fromDate" },
                },
                includeCountFlag,
                itemsPerPageFlag,
                {
                  name: "--orderBy",
                  description: "Field used to order the returned invoices by",
                  args: { name: "orderBy" },
                },
                orgIdFlag2,
                outputFlag2,
                outputFileFlag,
                pageNumFlag,
                prettyFlag,
                {
                  name: "--sortBy",
                  description: "Field used to sort the returned invoices by",
                  args: { name: "sortBy" },
                },
                {
                  name: "--statusNames",
                  description: "Statuses of the invoice to be retrieved",
                  args: { name: "statusNames" },
                  isRepeatable: true,
                },
                {
                  name: "--toDate",
                  description:
                    "Retrieve the invoices the endDates of which are smaller than or equal to the toDate",
                  args: { name: "toDate" },
                },
                versionFlag2,
                {
                  name: "--viewLinkedInvoices",
                  description:
                    "Flag that indicates whether to return linked invoices in the linkedInvoices field",
                },
              ],
            },
            {
              name: "listSkuServices",
              description: "Returns all launched SKU services",
              options: [
                envelopeFlag,
                includeCountFlag,
                itemsPerPageFlag,
                outputFlag2,
                outputFileFlag,
                pageNumFlag,
                prettyFlag,
                versionFlag,
              ],
            },
            {
              name: "listSkus",
              description:
                "Returns all available SKUs (Stock Keeping Units) that can appear on MongoDB invoices",
              options: [
                envelopeFlag,
                includeCountFlag,
                itemsPerPageFlag,
                outputFlag2,
                outputFileFlag,
                pageNumFlag,
                prettyFlag,
                versionFlag,
              ],
            },
            {
              name: ["searchInvoiceLineItems", "searchOrgInvoiceLineItems"],
              description:
                "Query the lineItems of the specified invoice and return the result JSON",
              options: [
                envelopeFlag,
                fileFlag3,
                invoiceIdFlag,
                itemsPerPageFlag,
                orgIdFlag2,
                outputFlag2,
                outputFileFlag,
                pageNumFlag,
                versionFlag11,
              ],
            },
          ],
        },
        {
          name: "ldapConfiguration",
          description:
            "Returns, edits, verifies, and removes LDAP configurations",
          subcommands: [
            {
              name: [
                "deleteLdapUserMapping",
                "deleteGroupUserSecurityLdapUserToDnMapping",
              ],
              description:
                "Removes the current LDAP Distinguished Name mapping captured in the userToDNMapping document from the LDAP configuration for the specified project",
              options: [
                envelopeFlag,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag2,
              ],
            },
            {
              name: ["getUserSecurity", "getGroupUserSecurity"],
              description:
                "Returns the current LDAP configuration for the specified project",
              options: [
                envelopeFlag,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag2,
              ],
            },
            {
              name: ["getUserSecurityVerify", "getGroupUserSecurityLdapVerify"],
              description:
                "Returns the status of one request to verify one LDAP configuration for the specified project",
              options: [
                envelopeFlag,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                {
                  name: "--requestId",
                  description:
                    "Unique string that identifies the request to verify an Lightweight Directory Access Protocol (LDAP) configuration",
                  args: { name: "requestId" },
                },
                versionFlag2,
              ],
            },
            {
              name: ["updateUserSecurity", "updateGroupUserSecurity"],
              description:
                "Edits the LDAP configuration for the specified project",
              options: [
                envelopeFlag,
                fileFlag3,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag2,
              ],
            },
            {
              name: ["verifyUserSecurityLdap", "verifyGroupUserSecurityLdap"],
              description:
                "Verifies the LDAP configuration for the specified project",
              options: [
                envelopeFlag,
                fileFlag3,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag2,
                watchFlag,
                watchTimeoutFlag,
              ],
            },
          ],
        },
        {
          name: "limitDescription",
          description: "Returns User-Configurable Project Limits",
          subcommands: [
            {
              name: "getDefaultGroupLimit",
              description:
                "Returns the description of one user-configurable, project-level limit, along with its default and maximum values",
              options: [
                envelopeFlag,
                {
                  name: "--limitName",
                  description: "Identifies the user-managed limit",
                  args: { name: "limitName" },
                },
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag8,
              ],
            },
            {
              name: "listDefaultGroupLimits",
              description:
                "Returns a list of all user-configurable, project-level limits, along with a description and their default and maximum values",
              options: [
                envelopeFlag,
                itemsPerPageFlag,
                outputFlag2,
                outputFileFlag,
                pageNumFlag,
                prettyFlag,
                versionFlag8,
              ],
            },
          ],
        },
        {
          name: "maintenanceWindows",
          description: "Returns, edits, and removes maintenance windows",
          subcommands: [
            {
              name: ["deferMaintenanceWindow", "deferGroupMaintenanceWindow"],
              description:
                "Defers the maintenance window for the specified project",
              options: [
                envelopeFlag,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                versionFlag2,
              ],
            },
            {
              name: ["getMaintenanceWindow", "getGroupMaintenanceWindow"],
              description:
                "Returns the maintenance window for the specified project",
              options: [
                envelopeFlag,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag13,
              ],
            },
            {
              name: ["resetMaintenanceWindow", "resetGroupMaintenanceWindow"],
              description:
                "Resets the maintenance window for the specified project",
              options: [
                envelopeFlag,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                versionFlag2,
              ],
            },
            {
              name: [
                "toggleMaintenanceAutoDefer",
                "toggleGroupMaintenanceWindowAutoDefer",
              ],
              description:
                "Toggles automatic deferral of the maintenance window for the specified project",
              options: [
                envelopeFlag,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                versionFlag2,
              ],
            },
            {
              name: ["updateMaintenanceWindow", "updateGroupMaintenanceWindow"],
              description:
                "Updates the maintenance window for the specified project",
              options: [
                envelopeFlag,
                fileFlag3,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                versionFlag13,
              ],
            },
          ],
        },
        {
          name: "metricIntegrations",
          description:
            "Returns, creates, updates, and removes metric integration configurations for a project",
          subcommands: [
            {
              name: "createGroupMetricIntegration",
              description:
                "Creates a new metric integration configuration identified by a unique ID",
              options: [
                envelopeFlag,
                fileFlag3,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag,
              ],
            },
            {
              name: "deleteGroupMetricIntegration",
              description:
                "Removes the configuration for one metric integration identified by its unique ID",
              options: [
                envelopeFlag,
                groupIdFlag,
                metricIntegrationIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag,
              ],
            },
            {
              name: "getGroupMetricIntegration",
              description:
                "Returns the configuration for one metric integration identified by its unique ID",
              options: [
                envelopeFlag,
                groupIdFlag,
                metricIntegrationIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag,
              ],
            },
            {
              name: "listGroupMetricIntegrations",
              description:
                "Returns all metric integration configurations for the project",
              options: [
                envelopeFlag,
                groupIdFlag,
                includeCountFlag,
                {
                  name: "--integrationType",
                  description:
                    "Optional filter by integration type (e.g., OTEL)",
                  args: { name: "integrationType" },
                },
                itemsPerPageFlag,
                outputFlag2,
                outputFileFlag,
                pageNumFlag,
                prettyFlag,
                {
                  name: "--providerType",
                  description:
                    "Optional filter by provider type (e.g., CUSTOM)",
                  args: { name: "providerType" },
                },
                versionFlag,
              ],
            },
            {
              name: "updateGroupMetricIntegration",
              description:
                "Updates the configuration for one metric integration identified by its unique ID",
              options: [
                envelopeFlag,
                fileFlag3,
                groupIdFlag,
                metricIntegrationIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag,
              ],
            },
          ],
        },
        {
          name: "mongoDbCloudUsers",
          description: "Returns, adds, and edits MongoDB Cloud users",
          subcommands: [
            {
              name: "addGroupUserRole",
              description:
                "Adds one project-level role to the MongoDB Cloud user",
              options: [
                envelopeFlag,
                fileFlag3,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                userIdFlag,
                versionFlag14,
              ],
            },
            {
              name: "addGroupUsers",
              description: "Adds one MongoDB Cloud user to one project",
              options: [
                envelopeFlag,
                fileFlag3,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag14,
              ],
            },
            {
              name: "addOrgTeamUser",
              description: "Adds one MongoDB Cloud user to one team",
              options: [
                envelopeFlag,
                fileFlag3,
                orgIdFlag2,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                {
                  name: "--teamId",
                  description:
                    "Unique 24-hexadecimal digit string that identifies the team to add the MongoDB Cloud user to",
                  args: { name: "teamId" },
                },
                versionFlag14,
              ],
            },
            {
              name: ["addOrgRole", "addOrgUserRole"],
              description:
                "Adds one organization-level role to the MongoDB Cloud user",
              options: [
                envelopeFlag,
                fileFlag3,
                orgIdFlag2,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                userIdFlag2,
                versionFlag14,
              ],
            },
            {
              name: "createOrgUser",
              description:
                "Invites one new or existing MongoDB Cloud user to join the organization",
              options: [
                envelopeFlag,
                fileFlag3,
                orgIdFlag2,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag14,
              ],
            },
            {
              name: "getGroupUser",
              description:
                "Returns information about the specified MongoDB Cloud user within the context of the specified project",
              options: [
                envelopeFlag,
                groupIdFlag,
                orgMembershipStatusesFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                userIdFlag,
                versionFlag14,
              ],
            },
            {
              name: "getOrgUser",
              description:
                "Returns information about the specified MongoDB Cloud user within the context of the specified organization",
              options: [
                envelopeFlag,
                orgIdFlag2,
                orgMembershipStatusesFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                userIdFlag2,
                versionFlag14,
              ],
            },
            {
              name: "listGroupUsers",
              description:
                "Returns details about the pending and active MongoDB Cloud users associated with the specified project",
              options: [
                envelopeFlag,
                {
                  name: "--flattenTeams",
                  description:
                    "Flag that indicates whether the returned list should include users who belong to a team with a role in this project",
                },
                groupIdFlag,
                includeCountFlag,
                {
                  name: "--includeOrgUsers",
                  description:
                    "Flag that indicates whether the returned list should include users with implicit access to the project, the Organization Owner or Organization Read Only role",
                },
                itemsPerPageFlag,
                orgMembershipStatusFlag,
                orgMembershipStatusesFlag,
                outputFlag2,
                outputFileFlag,
                pageNumFlag,
                prettyFlag,
                usernameFlag2,
                versionFlag15,
              ],
            },
            {
              name: ["listTeamUsers", "listOrgTeamUsers"],
              description:
                "Returns details about the pending and active MongoDB Cloud users associated with the specified team in the organization",
              options: [
                envelopeFlag,
                itemsPerPageFlag,
                orgIdFlag2,
                orgMembershipStatusFlag,
                orgMembershipStatusesFlag,
                outputFlag2,
                outputFileFlag,
                pageNumFlag,
                prettyFlag,
                {
                  name: "--teamId",
                  description:
                    "Unique 24-hexadecimal digit string that identifies the team whose application users you want to return",
                  args: { name: "teamId" },
                },
                {
                  name: "--userId",
                  description:
                    "Unique 24-hexadecimal digit string to filter users by",
                  args: { name: "userId" },
                },
                usernameFlag2,
                versionFlag15,
              ],
            },
            {
              name: "listOrgUsers",
              description:
                "Returns details about the pending and active MongoDB Cloud users associated with the specified organization",
              options: [
                envelopeFlag,
                includeCountFlag,
                itemsPerPageFlag,
                orgIdFlag2,
                orgMembershipStatusFlag,
                orgMembershipStatusesFlag,
                outputFlag2,
                outputFileFlag,
                pageNumFlag,
                prettyFlag,
                usernameFlag2,
                versionFlag15,
              ],
            },
            {
              name: "removeGroupUser",
              description:
                "Removes one MongoDB Cloud user from the specified project",
              options: [
                envelopeFlag,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                userIdFlag,
                versionFlag15,
              ],
            },
            {
              name: "removeGroupUserRole",
              description:
                "Removes one project-level role from the MongoDB Cloud user",
              options: [
                envelopeFlag,
                fileFlag3,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                userIdFlag,
                versionFlag14,
              ],
            },
            {
              name: "removeOrgTeamUser",
              description: "Removes one MongoDB Cloud user from one team",
              options: [
                envelopeFlag,
                fileFlag3,
                orgIdFlag2,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                {
                  name: "--teamId",
                  description:
                    "Unique 24-hexadecimal digit string that identifies the team to remove the MongoDB user from",
                  args: { name: "teamId" },
                },
                versionFlag14,
              ],
            },
            {
              name: "removeOrgUser",
              description:
                "Removes one MongoDB Cloud user in the specified organization",
              options: [
                envelopeFlag,
                orgIdFlag2,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                userIdFlag2,
                versionFlag15,
              ],
            },
            {
              name: ["removeOrgRole", "removeOrgUserRole"],
              description:
                "Removes one organization-level role from the MongoDB Cloud user",
              options: [
                envelopeFlag,
                fileFlag3,
                orgIdFlag2,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                userIdFlag2,
                versionFlag14,
              ],
            },
            {
              name: "updateOrgUser",
              description:
                "Updates one MongoDB Cloud user in the specified organization",
              options: [
                envelopeFlag,
                fileFlag3,
                orgIdFlag2,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                userIdFlag2,
                versionFlag14,
              ],
            },
          ],
        },
        {
          name: "monitoringAndLogs",
          description:
            "Returns database deployment monitoring and logging data",
          subcommands: [
            {
              name: ["downloadClusterLog", "downloadGroupClusterLog"],
              description:
                "Returns a compressed (.gz) log file that contains a range of log messages for the specified host for the specified project",
              options: [
                {
                  name: "--endDate",
                  description:
                    "Specifies the date and time for the ending point of the range of log messages to retrieve, in the number of seconds that have elapsed since the UNIX epoch",
                  args: { name: "endDate" },
                },
                envelopeFlag,
                groupIdFlag,
                {
                  name: "--hostName",
                  description:
                    "Human-readable label that identifies the host that stores the log files that you want to download",
                  args: { name: "hostName" },
                },
                {
                  name: "--logName",
                  description:
                    "Human-readable label that identifies the log file that you want to return",
                  args: { name: "logName" },
                },
                outputFlag3,
                outputFileFlag,
                {
                  name: "--startDate",
                  description:
                    "Specifies the date and time for the starting point of the range of log messages to retrieve, in the number of seconds that have elapsed since the UNIX epoch",
                  args: { name: "startDate" },
                },
                versionFlag9,
              ],
            },
            {
              name: [
                "getIndexMeasurements",
                "getGroupHostFtsMetricIndexMeasurements",
              ],
              description:
                "Returns the Atlas Search metrics data series within the provided time range for one namespace and index name on the specified process",
              options: [
                collectionNameFlag2,
                databaseNameFlag2,
                endFlag2,
                envelopeFlag,
                granularityFlag2,
                groupIdFlag,
                {
                  name: "--indexName",
                  description: "Human-readable label that identifies the index",
                  args: { name: "indexName" },
                },
                {
                  name: "--metrics",
                  description:
                    "List that contains the measurements that MongoDB Atlas reports for the associated data series",
                  args: { name: "metrics" },
                  isRepeatable: true,
                },
                outputFlag2,
                outputFileFlag,
                periodFlag2,
                processIdFlag,
                startFlag2,
                versionFlag13,
              ],
            },
            {
              name: "getGroupProcess",
              description:
                "Returns the processes for the specified host for the specified project",
              options: [
                envelopeFlag,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                processIdFlag2,
                versionFlag2,
              ],
            },
            {
              name: ["getDatabase", "getGroupProcessDatabase"],
              description:
                "Returns one database running on the specified host for the specified project",
              options: [
                {
                  name: "--databaseName",
                  description:
                    "Human-readable label that identifies the database that the specified MongoDB process serves",
                  args: { name: "databaseName" },
                },
                envelopeFlag,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                processIdFlag2,
                versionFlag2,
              ],
            },
            {
              name: [
                "getDatabaseMeasurements",
                "getGroupProcessDatabaseMeasurements",
              ],
              description:
                "Returns the measurements of one database for the specified host for the specified project",
              options: [
                {
                  name: "--databaseName",
                  description:
                    "Human-readable label that identifies the database that the specified MongoDB process serves",
                  args: { name: "databaseName" },
                },
                endFlag2,
                envelopeFlag,
                granularityFlag2,
                groupIdFlag,
                mFlag,
                outputFlag2,
                outputFileFlag,
                periodFlag2,
                prettyFlag,
                processIdFlag2,
                startFlag2,
                versionFlag2,
              ],
            },
            {
              name: ["getProcessDisk", "getGroupProcessDisk"],
              description:
                "Returns measurement details for one disk or partition for the specified host for the specified project",
              options: [
                envelopeFlag,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                {
                  name: "--partitionName",
                  description:
                    "Human-readable label of the disk or partition to which the measurements apply",
                  args: { name: "partitionName" },
                },
                processIdFlag2,
                versionFlag2,
              ],
            },
            {
              name: [
                "getProcessDiskMeasurements",
                "getGroupProcessDiskMeasurements",
              ],
              description:
                "Returns the measurements of one disk or partition for the specified host for the specified project",
              options: [
                endFlag2,
                envelopeFlag,
                granularityFlag2,
                groupIdFlag,
                mFlag,
                outputFlag2,
                outputFileFlag,
                {
                  name: "--partitionName",
                  description:
                    "Human-readable label of the disk or partition to which the measurements apply",
                  args: { name: "partitionName" },
                },
                periodFlag2,
                prettyFlag,
                processIdFlag2,
                startFlag2,
                versionFlag2,
              ],
            },
            {
              name: ["getProcessMeasurements", "getGroupProcessMeasurements"],
              description:
                "Returns disk, partition, or host measurements per process for the specified host for the specified project",
              options: [
                endFlag2,
                envelopeFlag,
                granularityFlag2,
                groupIdFlag,
                mFlag,
                outputFlag2,
                outputFileFlag,
                periodFlag2,
                prettyFlag,
                processIdFlag2,
                startFlag2,
                versionFlag2,
              ],
            },
            {
              name: [
                "listIndexMeasurements",
                "listGroupHostFtsMetricIndexMeasurements",
              ],
              description:
                "Returns the Atlas Search index metrics within the specified time range for one namespace in the specified process",
              options: [
                collectionNameFlag2,
                databaseNameFlag2,
                endFlag2,
                envelopeFlag,
                granularityFlag2,
                groupIdFlag,
                {
                  name: "--metrics",
                  description:
                    "List that contains the measurements that MongoDB Atlas reports for the associated data series",
                  args: { name: "metrics" },
                  isRepeatable: true,
                },
                outputFlag2,
                outputFileFlag,
                periodFlag2,
                processIdFlag,
                startFlag2,
                versionFlag13,
              ],
            },
            {
              name: ["listMeasurements", "listGroupHostFtsMetricMeasurements"],
              description:
                "Returns the Atlas Search hardware and status data series within the provided time range for one process in the specified project",
              options: [
                endFlag2,
                envelopeFlag,
                granularityFlag2,
                groupIdFlag,
                {
                  name: "--metrics",
                  description:
                    "List that contains the metrics that you want MongoDB Atlas to report for the associated data series",
                  args: { name: "metrics" },
                  isRepeatable: true,
                },
                outputFlag2,
                outputFileFlag,
                periodFlag2,
                processIdFlag,
                startFlag2,
                versionFlag2,
              ],
            },
            {
              name: ["listHostFtsMetrics", "listGroupHostFtsMetrics"],
              description:
                "Returns all Atlas Search metric types available for one process in the specified project",
              options: [
                envelopeFlag,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                processIdFlag,
                versionFlag2,
              ],
            },
            {
              name: ["listDatabases", "listGroupProcessDatabases"],
              description:
                "Returns the list of databases running on the specified host for the specified project",
              options: [
                envelopeFlag,
                groupIdFlag,
                includeCountFlag,
                itemsPerPageFlag,
                outputFlag2,
                outputFileFlag,
                pageNumFlag,
                prettyFlag,
                processIdFlag2,
                versionFlag2,
              ],
            },
            {
              name: ["listProcessDisks", "listGroupProcessDisks"],
              description:
                "Returns the list of disks or partitions for the specified host for the specified project",
              options: [
                envelopeFlag,
                groupIdFlag,
                includeCountFlag,
                itemsPerPageFlag,
                outputFlag2,
                outputFileFlag,
                pageNumFlag,
                prettyFlag,
                processIdFlag2,
                versionFlag2,
              ],
            },
            {
              name: "listGroupProcesses",
              description:
                "Returns details of all processes for the specified project",
              options: [
                envelopeFlag,
                groupIdFlag,
                includeCountFlag,
                itemsPerPageFlag,
                outputFlag2,
                outputFileFlag,
                pageNumFlag,
                prettyFlag,
                versionFlag2,
              ],
            },
          ],
        },
        {
          name: "networkPeering",
          description:
            "Returns, adds, edits, and removes network peering containers and peering connections",
          subcommands: [
            {
              name: "createGroupContainer",
              description:
                "Creates one new network peering container in the specified project",
              options: [
                envelopeFlag,
                fileFlag3,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag2,
              ],
            },
            {
              name: "createGroupPeer",
              description:
                "Creates one new network peering connection in the specified project",
              options: [
                envelopeFlag,
                fileFlag3,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag2,
              ],
            },
            {
              name: "deleteGroupContainer",
              description:
                "Removes one network peering container in the specified project",
              options: [
                {
                  name: "--containerId",
                  description:
                    "Unique 24-hexadecimal digit string that identifies the MongoDB Cloud network container that you want to remove",
                  args: { name: "containerId" },
                },
                envelopeFlag,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag2,
              ],
            },
            {
              name: "deleteGroupPeer",
              description:
                "Removes one network peering connection in the specified project",
              options: [
                envelopeFlag,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                {
                  name: "--peerId",
                  description:
                    "Unique 24-hexadecimal digit string that identifies the network peering connection that you want to delete",
                  args: { name: "peerId" },
                },
                prettyFlag,
                versionFlag2,
              ],
            },
            {
              name: "getGroupContainer",
              description:
                "Returns details about one network peering container in one specified project",
              options: [
                {
                  name: "--containerId",
                  description:
                    "Unique 24-hexadecimal digit string that identifies the MongoDB Cloud network container",
                  args: { name: "containerId" },
                },
                envelopeFlag,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag2,
              ],
            },
            {
              name: "getGroupPeer",
              description:
                "Returns details about one specified network peering connection in the specified project",
              options: [
                envelopeFlag,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                {
                  name: "--peerId",
                  description:
                    "Unique 24-hexadecimal digit string that identifies the network peering connection that you want to retrieve",
                  args: { name: "peerId" },
                },
                prettyFlag,
                versionFlag2,
              ],
            },
            {
              name: "listGroupContainerAll",
              description:
                "Returns details about all network peering containers in the specified project",
              options: [
                envelopeFlag,
                groupIdFlag,
                includeCountFlag,
                itemsPerPageFlag,
                outputFlag2,
                outputFileFlag,
                pageNumFlag,
                prettyFlag,
                versionFlag2,
              ],
            },
            {
              name: "listGroupContainers",
              description:
                "Returns details about all network peering containers in the specified project for the specified cloud provider",
              options: [
                envelopeFlag,
                groupIdFlag,
                includeCountFlag,
                itemsPerPageFlag,
                outputFlag2,
                outputFileFlag,
                pageNumFlag,
                prettyFlag,
                {
                  name: "--providerName",
                  description:
                    "Cloud service provider that serves the desired network peering containers",
                  args: { name: "providerName" },
                },
                versionFlag2,
              ],
            },
            {
              name: "listGroupPeers",
              description:
                "Returns details about all network peering connections in the specified project",
              options: [
                envelopeFlag,
                groupIdFlag,
                includeCountFlag,
                itemsPerPageFlag,
                outputFlag2,
                outputFileFlag,
                pageNumFlag,
                prettyFlag,
                {
                  name: "--providerName",
                  description:
                    "Cloud service provider to use for this VPC peering connection",
                  args: { name: "providerName" },
                },
                versionFlag2,
              ],
            },
            {
              name: "updateGroupContainer",
              description:
                "Updates the network details and labels of one specified network peering container in the specified project",
              options: [
                {
                  name: "--containerId",
                  description:
                    "Unique 24-hexadecimal digit string that identifies the MongoDB Cloud network container that you want to remove",
                  args: { name: "containerId" },
                },
                envelopeFlag,
                fileFlag3,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag2,
              ],
            },
            {
              name: "updateGroupPeer",
              description:
                "Updates one specified network peering connection in the specified project",
              options: [
                envelopeFlag,
                fileFlag3,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                {
                  name: "--peerId",
                  description:
                    "Unique 24-hexadecimal digit string that identifies the network peering connection that you want to update",
                  args: { name: "peerId" },
                },
                prettyFlag,
                versionFlag2,
              ],
            },
          ],
        },
        {
          name: "onlineArchive",
          description: "Returns, adds, edits, or removes an online archive",
          subcommands: [
            {
              name: ["createOnlineArchive", "createGroupClusterOnlineArchive"],
              description: "Creates one online archive",
              options: [
                {
                  name: "--clusterName",
                  description:
                    "Human-readable label that identifies the cluster that contains the collection for which you want to create one online archive",
                  args: { name: "clusterName" },
                },
                envelopeFlag,
                fileFlag3,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag2,
                watchFlag,
                watchTimeoutFlag,
              ],
            },
            {
              name: ["deleteOnlineArchive", "deleteGroupClusterOnlineArchive"],
              description: "Removes one online archive",
              options: [
                {
                  name: "--archiveId",
                  description:
                    "Unique 24-hexadecimal digit string that identifies the online archive to delete",
                  args: { name: "archiveId" },
                },
                {
                  name: "--clusterName",
                  description:
                    "Human-readable label that identifies the cluster that contains the collection from which you want to remove an online archive",
                  args: { name: "clusterName" },
                },
                envelopeFlag,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag2,
                watchFlag,
                watchTimeoutFlag,
              ],
            },
            {
              name: [
                "downloadQueryLogs",
                "downloadGroupClusterOnlineArchiveQueryLogs",
              ],
              description:
                "Downloads query logs for the specified online archive",
              options: [
                {
                  name: "--archiveOnly",
                  description:
                    "Flag that indicates whether to download logs for queries against your online archive only or both your online archive and cluster",
                },
                {
                  name: "--clusterName",
                  description:
                    "Human-readable label that identifies the cluster that contains the collection for which you want to return the query logs from one online archive",
                  args: { name: "clusterName" },
                },
                {
                  name: "--endDate",
                  description:
                    "Date and time that specifies the end point for the range of log messages to return",
                  args: { name: "endDate" },
                },
                envelopeFlag,
                groupIdFlag,
                outputFlag3,
                outputFileFlag,
                {
                  name: "--startDate",
                  description:
                    "Date and time that specifies the starting point for the range of log messages to return",
                  args: { name: "startDate" },
                },
                versionFlag2,
              ],
            },
            {
              name: ["getOnlineArchive", "getGroupClusterOnlineArchive"],
              description: "Returns one online archive for one cluster",
              options: [
                {
                  name: "--archiveId",
                  description:
                    "Unique 24-hexadecimal digit string that identifies the online archive to return",
                  args: { name: "archiveId" },
                },
                {
                  name: "--clusterName",
                  description:
                    "Human-readable label that identifies the cluster that contains the specified collection from which Application created the online archive",
                  args: { name: "clusterName" },
                },
                envelopeFlag,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag2,
              ],
            },
            {
              name: ["listOnlineArchives", "listGroupClusterOnlineArchives"],
              description: "Returns details of all online archives",
              options: [
                {
                  name: "--clusterName",
                  description:
                    "Human-readable label that identifies the cluster that contains the collection for which you want to return the online archives",
                  args: { name: "clusterName" },
                },
                envelopeFlag,
                groupIdFlag,
                includeCountFlag,
                itemsPerPageFlag,
                outputFlag2,
                outputFileFlag,
                pageNumFlag,
                prettyFlag,
                versionFlag2,
              ],
            },
            {
              name: ["updateOnlineArchive", "updateGroupClusterOnlineArchive"],
              description: "Updates, pauses, or resumes one online archive",
              options: [
                {
                  name: "--archiveId",
                  description:
                    "Unique 24-hexadecimal digit string that identifies the online archive to update",
                  args: { name: "archiveId" },
                },
                {
                  name: "--clusterName",
                  description:
                    "Human-readable label that identifies the cluster that contains the specified collection from which Application created the online archive",
                  args: { name: "clusterName" },
                },
                envelopeFlag,
                fileFlag3,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag2,
                watchFlag,
                watchTimeoutFlag,
              ],
            },
          ],
        },
        {
          name: "organizations",
          description:
            "Returns, adds, and edits organizational units in MongoDB Cloud",
          subcommands: [
            {
              name: "createOrg",
              description:
                "Creates one organization in MongoDB Cloud and links it to the requesting Service Account's or API Key's organization",
              options: [
                envelopeFlag,
                fileFlag3,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag2,
              ],
            },
            {
              name: "deleteOrg",
              description: "Removes one specified organization",
              options: [
                envelopeFlag,
                orgIdFlag2,
                outputFlag2,
                outputFileFlag,
                versionFlag2,
              ],
            },
            {
              name: "getOrg",
              description:
                "Returns one organization to which the requesting Service Account or API Key has access",
              options: [
                envelopeFlag,
                orgIdFlag2,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag2,
              ],
            },
            {
              name: "getOrgDelegationSettings",
              description:
                "Returns the delegation settings for the specified organization",
              options: [
                envelopeFlag,
                orgIdFlag2,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag,
              ],
            },
            {
              name: "getOrgGroups",
              description:
                "Returns multiple projects in the specified organization",
              options: [
                envelopeFlag,
                includeCountFlag,
                itemsPerPageFlag,
                {
                  name: "--name",
                  description:
                    "Human-readable label of the project to use to filter the returned list",
                  args: { name: "name" },
                },
                orgIdFlag2,
                outputFlag2,
                outputFileFlag,
                pageNumFlag,
                prettyFlag,
                versionFlag2,
              ],
            },
            {
              name: "getOrgMaintenanceSettings",
              description:
                "Returns maintenance settings for the specified organization",
              options: [
                envelopeFlag,
                orgIdFlag2,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag,
              ],
            },
            {
              name: "getOrgSettings",
              description:
                "Returns details about the specified organization's settings",
              options: [
                envelopeFlag,
                orgIdFlag2,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag2,
              ],
            },
            {
              name: "listOrgs",
              description:
                "Returns all organizations to which the requesting Service Account or API Key has access",
              options: [
                envelopeFlag,
                includeCountFlag,
                itemsPerPageFlag,
                {
                  name: "--name",
                  description:
                    "Human-readable label of the organization to use to filter the returned list",
                  args: { name: "name" },
                },
                outputFlag2,
                outputFileFlag,
                pageNumFlag,
                prettyFlag,
                versionFlag2,
              ],
            },
            {
              name: "resetOrgMaintenanceSettings",
              description:
                "Resets maintenance settings for the specified organization to their default values",
              options: [
                envelopeFlag,
                orgIdFlag2,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag,
              ],
            },
            {
              name: "updateOrg",
              description: "Updates one organization",
              options: [
                envelopeFlag,
                fileFlag3,
                orgIdFlag2,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag2,
              ],
            },
            {
              name: "updateOrgDelegationSettings",
              description:
                "Updates the delegation settings for the specified organization",
              options: [
                envelopeFlag,
                fileFlag3,
                orgIdFlag2,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag,
              ],
            },
            {
              name: "updateOrgMaintenanceSettings",
              description:
                "Updates maintenance settings for the specified organization",
              options: [
                envelopeFlag,
                fileFlag3,
                orgIdFlag2,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag,
              ],
            },
            {
              name: "updateOrgSettings",
              description: "Updates the organization's settings",
              options: [
                envelopeFlag,
                fileFlag3,
                orgIdFlag2,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag2,
              ],
            },
          ],
        },
        {
          name: "overloadProtectionSimulation",
          description:
            "Returns and starts overload protection simulations for a cluster",
          subcommands: [
            {
              name: [
                "createClusterOverloadSimulation",
                "createGroupClusterOverloadSimulation",
              ],
              description:
                "Starts an overload protection simulation for one cluster",
              options: [
                {
                  name: "--clusterName",
                  description:
                    "Human-readable label that identifies the cluster on which to start the overload protection simulation",
                  args: { name: "clusterName" },
                },
                envelopeFlag,
                fileFlag3,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag,
              ],
            },
            {
              name: [
                "deleteClusterOverloadSimulation",
                "deleteGroupClusterOverloadSimulation",
              ],
              description:
                "Deletes the overload protection simulation for one cluster",
              options: [
                {
                  name: "--clusterName",
                  description:
                    "Human-readable label that identifies the cluster on which the overload protection simulation is running",
                  args: { name: "clusterName" },
                },
                envelopeFlag,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                {
                  name: "--simulationId",
                  description:
                    "Unique 24-hexadecimal digit string that identifies the overload protection simulation",
                  args: { name: "simulationId" },
                },
                versionFlag,
              ],
            },
            {
              name: [
                "getClusterOverloadSimulation",
                "getGroupClusterOverloadSimulation",
              ],
              description:
                "Returns the overload protection simulation for one cluster",
              options: [
                {
                  name: "--clusterName",
                  description:
                    "Human-readable label that identifies the cluster on which the overload protection simulation is running",
                  args: { name: "clusterName" },
                },
                envelopeFlag,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                {
                  name: "--simulationId",
                  description:
                    "Unique 24-hexadecimal digit string that identifies the overload protection simulation",
                  args: { name: "simulationId" },
                },
                versionFlag,
              ],
            },
            {
              name: [
                "listClusterOverloadSimulations",
                "listGroupClusterOverloadSimulations",
              ],
              description:
                "Returns all overload protection simulations for one cluster",
              options: [
                {
                  name: "--clusterName",
                  description:
                    "Human-readable label that identifies the cluster on which the overload protection simulations are running",
                  args: { name: "clusterName" },
                },
                envelopeFlag,
                groupIdFlag,
                itemsPerPageFlag,
                outputFlag2,
                outputFileFlag,
                pageNumFlag,
                prettyFlag,
                versionFlag,
              ],
            },
          ],
        },
        {
          name: "performanceAdvisor",
          description:
            "Returns suggested indexes and slow query data for a database deployment",
          subcommands: [
            {
              name: ["disableManagedSlowMs", "disableGroupManagedSlowMs"],
              description:
                "Disables the slow operation threshold that MongoDB Cloud calculated for the specified project",
              options: [
                envelopeFlag,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag2,
              ],
            },
            {
              name: ["enableManagedSlowMs", "enableGroupManagedSlowMs"],
              description:
                "Enables MongoDB Cloud to use its slow operation threshold for the specified project",
              options: [
                envelopeFlag,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag2,
              ],
            },
            {
              name: ["getManagedSlowMs", "getGroupManagedSlowMs"],
              description: "Get whether the Managed Slow MS feature is enabled",
              options: [
                envelopeFlag,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag2,
              ],
            },
            {
              name: [
                "listDropIndexSuggestions",
                "listGroupClusterPerformanceAdvisorDropIndexSuggestions",
              ],
              description:
                "Returns the indexes that the Performance Advisor suggests to drop",
              options: [
                clusterNameFlag2,
                envelopeFlag,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                versionFlag11,
              ],
            },
            {
              name: [
                "listSchemaAdvice",
                "listGroupClusterPerformanceAdvisorSchemaAdvice",
              ],
              description:
                "Returns the schema suggestions that the Performance Advisor detects",
              options: [
                clusterNameFlag2,
                envelopeFlag,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                versionFlag11,
              ],
            },
            {
              name: [
                "listClusterSuggestedIndexes",
                "listGroupClusterPerformanceAdvisorSuggestedIndexes",
              ],
              description:
                "Returns the indexes that the Performance Advisor suggests",
              options: [
                clusterNameFlag2,
                envelopeFlag,
                groupIdFlag,
                namespacesFlag,
                outputFlag2,
                outputFileFlag,
                {
                  name: "--processIds",
                  description:
                    "Process IDs from which to retrieve suggested indexes",
                  args: { name: "processIds" },
                  isRepeatable: true,
                },
                sinceFlag,
                {
                  name: "--until",
                  description:
                    "Date and time up until which the query retrieves the suggested indexes",
                  args: { name: "until" },
                },
                versionFlag11,
              ],
            },
            {
              name: [
                "listPerformanceAdvisorNamespaces",
                "listGroupProcessPerformanceAdvisorNamespaces",
              ],
              description:
                "Returns up to 20 namespaces for collections experiencing slow queries on the specified host",
              options: [
                {
                  name: "--duration",
                  description:
                    "Length of time expressed during which the query finds suggested indexes among the managed namespaces in the cluster",
                  args: { name: "duration" },
                },
                envelopeFlag,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                processIdFlag3,
                sinceFlag,
                versionFlag2,
              ],
            },
            {
              name: [
                "listSlowQueryLogs",
                "listGroupProcessPerformanceAdvisorSlowQueryLogs",
              ],
              description:
                "Returns log lines for slow queries that the Performance Advisor and Query Profiler identified",
              options: [
                {
                  name: "--duration",
                  description:
                    "Length of time expressed during which the query finds slow queries among the managed namespaces in the cluster",
                  args: { name: "duration" },
                },
                envelopeFlag,
                groupIdFlag,
                {
                  name: "--includeMetrics",
                  description:
                    "Whether or not to include metrics extracted from the slow query log as separate fields",
                },
                {
                  name: "--includeOpType",
                  description:
                    "Whether or not to include the operation type (read/write/command) extracted from the slow query log as a separate field",
                },
                {
                  name: "--includeReplicaState",
                  description:
                    "Whether or not to include the replica state of the host when the slow query log was generated as a separate field",
                },
                nLogsFlag,
                {
                  name: "--namespaces",
                  description: "Namespaces from which to retrieve slow queries",
                  args: { name: "namespaces" },
                  isRepeatable: true,
                },
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                processIdFlag3,
                {
                  name: "--since",
                  description:
                    "Date and time from which the query retrieves the slow queries",
                  args: { name: "since" },
                },
                versionFlag2,
              ],
            },
            {
              name: [
                "listSuggestedIndexes",
                "listGroupProcessPerformanceAdvisorSuggestedIndexes",
              ],
              description:
                "Returns the indexes that the Performance Advisor suggests",
              options: [
                {
                  name: "--duration",
                  description:
                    "Length of time expressed during which the query finds suggested indexes among the managed namespaces in the cluster",
                  args: { name: "duration" },
                },
                envelopeFlag,
                groupIdFlag,
                includeCountFlag,
                itemsPerPageFlag,
                {
                  name: "--nExamples",
                  description:
                    "Maximum number of example queries that benefit from the suggested index",
                  args: { name: "nExamples" },
                },
                {
                  name: "--nIndexes",
                  description:
                    "Number that indicates the maximum indexes to suggest",
                  args: { name: "nIndexes" },
                },
                namespacesFlag,
                outputFlag2,
                outputFileFlag,
                pageNumFlag,
                prettyFlag,
                processIdFlag3,
                sinceFlag,
                versionFlag2,
              ],
            },
          ],
        },
        {
          name: "privateEndpointServices",
          description:
            "Returns, adds, edits, and removes private endpoint services",
          subcommands: [
            {
              name: [
                "createPrivateEndpointService",
                "createGroupPrivateEndpointEndpointService",
              ],
              description:
                "Creates one private endpoint service for the specified cloud service provider",
              options: [
                envelopeFlag,
                fileFlag3,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag2,
                watchFlag,
                watchTimeoutFlag,
              ],
            },
            {
              name: [
                "createPrivateEndpoint",
                "createGroupPrivateEndpointEndpointServiceEndpoint",
              ],
              description:
                "Creates one private endpoint for the specified cloud service provider",
              options: [
                cloudProviderFlag,
                {
                  name: "--endpointServiceId",
                  description:
                    "Unique 24-hexadecimal digit string that identifies the private endpoint service for which you want to create a private endpoint",
                  args: { name: "endpointServiceId" },
                },
                envelopeFlag,
                fileFlag3,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag2,
              ],
            },
            {
              name: [
                "deletePrivateEndpointService",
                "deleteGroupPrivateEndpointEndpointService",
              ],
              description:
                "Removes one private endpoint service from the specified project",
              options: [
                cloudProviderFlag2,
                {
                  name: "--endpointServiceId",
                  description:
                    "Unique 24-hexadecimal digit string that identifies the private endpoint service that you want to delete",
                  args: { name: "endpointServiceId" },
                },
                envelopeFlag,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag2,
                watchFlag,
                watchTimeoutFlag,
              ],
            },
            {
              name: [
                "deletePrivateEndpoint",
                "deleteGroupPrivateEndpointEndpointServiceEndpoint",
              ],
              description:
                "Removes one private endpoint from the specified project and private endpoint service, as managed by the specified cloud service provider",
              options: [
                cloudProviderFlag,
                {
                  name: "--endpointId",
                  description:
                    "Unique string that identifies the private endpoint you want to delete",
                  args: { name: "endpointId" },
                },
                {
                  name: "--endpointServiceId",
                  description:
                    "Unique 24-hexadecimal digit string that identifies the private endpoint service from which you want to delete a private endpoint",
                  args: { name: "endpointServiceId" },
                },
                envelopeFlag,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag2,
              ],
            },
            {
              name: [
                "getPrivateEndpointService",
                "getGroupPrivateEndpointEndpointService",
              ],
              description:
                "Returns the name, interfaces, and state of the specified private endpoint service from one project",
              options: [
                cloudProviderFlag2,
                {
                  name: "--endpointServiceId",
                  description:
                    "Unique 24-hexadecimal digit string that identifies the private endpoint service that you want to return",
                  args: { name: "endpointServiceId" },
                },
                envelopeFlag,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag2,
              ],
            },
            {
              name: [
                "getPrivateEndpoint",
                "getGroupPrivateEndpointEndpointServiceEndpoint",
              ],
              description:
                "Returns the connection state of the specified private endpoint",
              options: [
                cloudProviderFlag,
                {
                  name: "--endpointId",
                  description:
                    "Unique string that identifies the private endpoint you want to return",
                  args: { name: "endpointId" },
                },
                {
                  name: "--endpointServiceId",
                  description:
                    "Unique 24-hexadecimal digit string that identifies the private endpoint service for which you want to return a private endpoint",
                  args: { name: "endpointServiceId" },
                },
                envelopeFlag,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag2,
              ],
            },
            {
              name: [
                "getRegionalEndpointMode",
                "getGroupPrivateEndpointRegionalMode",
              ],
              description:
                "Checks whether each region in the specified cloud service provider can create multiple private endpoints per region",
              options: [
                envelopeFlag,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag2,
              ],
            },
            {
              name: [
                "listPrivateEndpointService",
                "listGroupPrivateEndpointEndpointService",
              ],
              description:
                "Returns the name, interfaces, and state of all private endpoint services for the specified cloud service provider",
              options: [
                cloudProviderFlag2,
                envelopeFlag,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag2,
              ],
            },
            {
              name: [
                "toggleRegionalEndpointMode",
                "toggleGroupPrivateEndpointRegionalMode",
              ],
              description:
                "Enables or disables the ability to create multiple private endpoints per region in all cloud service providers in one project",
              options: [
                envelopeFlag,
                fileFlag3,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag2,
              ],
            },
            {
              name: [
                "updatePrivateEndpointService",
                "updateGroupPrivateEndpointEndpointService",
              ],
              description:
                "Updates the specified private endpoint service for the project",
              options: [
                {
                  name: "--endpointServiceId",
                  description:
                    "Unique 24-hexadecimal digit string that identifies the private endpoint service that you want to update",
                  args: { name: "endpointServiceId" },
                },
                envelopeFlag,
                fileFlag3,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag2,
              ],
            },
          ],
        },
        {
          name: "programmaticApiKeys",
          description:
            "Returns, adds, edits, and removes access tokens to use the MongoDB Cloud API",
          subcommands: [
            {
              name: "addGroupApiKey",
              description:
                "Assigns the specified organization API key to the specified project",
              options: [
                {
                  name: "--apiUserId",
                  description:
                    "Unique 24-hexadecimal digit string that identifies this organization API key that you want to assign to one project",
                  args: { name: "apiUserId" },
                },
                envelopeFlag,
                fileFlag3,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag2,
              ],
            },
            {
              name: "createGroupApiKey",
              description:
                "Creates and assigns the specified organization API key to the specified project",
              options: [
                envelopeFlag,
                fileFlag3,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag2,
              ],
            },
            {
              name: "createOrgApiKey",
              description: "Creates one API key for the specified organization",
              options: [
                envelopeFlag,
                fileFlag3,
                orgIdFlag2,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag2,
              ],
            },
            {
              name: ["createOrgAccessEntry", "createOrgApiKeyAccessListEntry"],
              description:
                "Creates the access list entries for the specified organization API key",
              options: [
                {
                  name: "--apiUserId",
                  description:
                    "Unique 24-hexadecimal digit string that identifies this organization API key for which you want to create a new access list entry",
                  args: { name: "apiUserId" },
                },
                envelopeFlag,
                fileFlag3,
                includeCountFlag,
                itemsPerPageFlag,
                orgIdFlag2,
                outputFlag2,
                outputFileFlag,
                pageNumFlag,
                prettyFlag,
                versionFlag2,
              ],
            },
            {
              name: "deleteOrgApiKey",
              description:
                "Removes one organization API key from the specified organization",
              options: [
                {
                  name: "--apiUserId",
                  description:
                    "Unique 24-hexadecimal digit string that identifies this organization API key",
                  args: { name: "apiUserId" },
                },
                envelopeFlag,
                orgIdFlag2,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag2,
              ],
            },
            {
              name: ["deleteAccessEntry", "deleteOrgApiKeyAccessListEntry"],
              description:
                "Removes the specified access list entry from the specified organization API key",
              options: [
                {
                  name: "--apiUserId",
                  description:
                    "Unique 24-hexadecimal digit string that identifies this organization API key for which you want to remove access list entries",
                  args: { name: "apiUserId" },
                },
                envelopeFlag,
                {
                  name: "--ipAddress",
                  description:
                    "One IP address or multiple IP addresses represented as one CIDR block to limit requests to API resources in the specified organization",
                  args: { name: "ipAddress" },
                },
                orgIdFlag2,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag2,
              ],
            },
            {
              name: "getOrgApiKey",
              description: "Returns one organization API key",
              options: [
                {
                  name: "--apiUserId",
                  description:
                    "Unique 24-hexadecimal digit string that identifies this organization API key that you want to update",
                  args: { name: "apiUserId" },
                },
                envelopeFlag,
                orgIdFlag2,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag2,
              ],
            },
            {
              name: ["getOrgAccessEntry", "getOrgApiKeyAccessListEntry"],
              description:
                "Returns one access list entry for the specified organization API key",
              options: [
                {
                  name: "--apiUserId",
                  description:
                    "Unique 24-hexadecimal digit string that identifies this organization API key for which you want to return access list entries",
                  args: { name: "apiUserId" },
                },
                envelopeFlag,
                {
                  name: "--ipAddress",
                  description:
                    "One IP address or multiple IP addresses represented as one CIDR block to limit requests to API resources in the specified organization",
                  args: { name: "ipAddress" },
                },
                orgIdFlag2,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag2,
              ],
            },
            {
              name: "listGroupApiKeys",
              description:
                "Returns all organization API keys that you assigned to the specified project",
              options: [
                envelopeFlag,
                groupIdFlag,
                includeCountFlag,
                itemsPerPageFlag,
                outputFlag2,
                outputFileFlag,
                pageNumFlag,
                prettyFlag,
                versionFlag2,
              ],
            },
            {
              name: ["listOrgAccessEntries", "listOrgApiKeyAccessListEntries"],
              description:
                "Returns all access list entries that you configured for the specified organization API key",
              options: [
                {
                  name: "--apiUserId",
                  description:
                    "Unique 24-hexadecimal digit string that identifies this organization API key for which you want to return access list entries",
                  args: { name: "apiUserId" },
                },
                envelopeFlag,
                includeCountFlag,
                itemsPerPageFlag,
                orgIdFlag2,
                outputFlag2,
                outputFileFlag,
                pageNumFlag,
                prettyFlag,
                versionFlag2,
              ],
            },
            {
              name: "listOrgApiKeys",
              description:
                "Returns all organization API keys for the specified organization",
              options: [
                envelopeFlag,
                includeCountFlag,
                itemsPerPageFlag,
                orgIdFlag2,
                outputFlag2,
                outputFileFlag,
                pageNumFlag,
                prettyFlag,
                versionFlag2,
              ],
            },
            {
              name: "removeGroupApiKey",
              description:
                "Removes one organization API key from the specified project",
              options: [
                {
                  name: "--apiUserId",
                  description:
                    "Unique 24-hexadecimal digit string that identifies this organization API key that you want to unassign from one project",
                  args: { name: "apiUserId" },
                },
                envelopeFlag,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag2,
              ],
            },
            {
              name: ["updateApiKeyRoles", "updateGroupApiKeyRoles"],
              description:
                "Updates the roles of the organization API key that you specify for the project that you specify",
              options: [
                {
                  name: "--apiUserId",
                  description:
                    "Unique 24-hexadecimal digit string that identifies this organization API key that you want to unassign from one project",
                  args: { name: "apiUserId" },
                },
                envelopeFlag,
                fileFlag3,
                groupIdFlag,
                includeCountFlag,
                itemsPerPageFlag,
                outputFlag2,
                outputFileFlag,
                pageNumFlag,
                prettyFlag,
                versionFlag2,
              ],
            },
            {
              name: "updateOrgApiKey",
              description:
                "Updates one organization API key in the specified organization",
              options: [
                {
                  name: "--apiUserId",
                  description:
                    "Unique 24-hexadecimal digit string that identifies this organization API key you want to update",
                  args: { name: "apiUserId" },
                },
                envelopeFlag,
                fileFlag3,
                orgIdFlag2,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag2,
              ],
            },
          ],
        },
        {
          name: "projectIpAccessList",
          description:
            "Returns, adds, edits, and removes network access limits to database deployments in Atlas",
          subcommands: [
            {
              name: ["createAccessListEntry", "createGroupAccessListEntry"],
              description:
                "Adds one or more access list entries to the specified project",
              options: [
                envelopeFlag,
                fileFlag3,
                groupIdFlag,
                includeCountFlag,
                itemsPerPageFlag,
                outputFlag2,
                outputFileFlag,
                pageNumFlag,
                prettyFlag,
                versionFlag2,
              ],
            },
            {
              name: ["deleteAccessListEntry", "deleteGroupAccessListEntry"],
              description:
                "Removes one access list entry from the specified project's IP access list",
              options: [
                {
                  name: "--entryValue",
                  description:
                    "Access list entry that you want to remove from the project's IP access list",
                  args: { name: "entryValue" },
                },
                envelopeFlag,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag2,
              ],
            },
            {
              name: ["getAccessListEntry", "getGroupAccessListEntry"],
              description:
                "Returns one access list entry from the specified project's IP access list",
              options: [
                {
                  name: "--entryValue",
                  description:
                    "Access list entry that you want to return from the project's IP access list",
                  args: { name: "entryValue" },
                },
                envelopeFlag,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag2,
              ],
            },
            {
              name: ["getAccessListStatus", "getGroupAccessListStatus"],
              description:
                "Returns the status of one project IP access list entry",
              options: [
                {
                  name: "--entryValue",
                  description:
                    "Network address or cloud provider security construct that identifies which project access list entry to be verified",
                  args: { name: "entryValue" },
                },
                envelopeFlag,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag2,
              ],
            },
            {
              name: ["listAccessListEntries", "listGroupAccessListEntries"],
              description:
                "Returns all access list entries from the specified project's IP access list",
              options: [
                envelopeFlag,
                groupIdFlag,
                includeCountFlag,
                itemsPerPageFlag,
                outputFlag2,
                outputFileFlag,
                pageNumFlag,
                prettyFlag,
                versionFlag2,
              ],
            },
          ],
        },
        {
          name: "projects",
          description:
            "Returns, adds, and edits collections of clusters and users in MongoDB Cloud",
          subcommands: [
            {
              name: "createGroup",
              description: "Creates one project",
              options: [
                envelopeFlag,
                fileFlag3,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                {
                  name: "--projectOwnerId",
                  description:
                    "Unique 24-hexadecimal digit string that identifies the MongoDB Cloud user to whom to grant the Project Owner role on the specified project",
                  args: { name: "projectOwnerId" },
                },
                versionFlag2,
              ],
            },
            {
              name: "deleteGroup",
              description: "Removes the specified project",
              options: [
                envelopeFlag,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag2,
              ],
            },
            {
              name: "deleteGroupLimit",
              description: "Removes the specified project limit",
              options: [
                envelopeFlag,
                groupIdFlag,
                limitNameFlag2,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag2,
              ],
            },
            {
              name: "getGroup",
              description: "Returns details about the specified project",
              options: [
                envelopeFlag,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag2,
              ],
            },
            {
              name: "getGroupByName",
              description:
                "Returns details about the project identified by its name",
              options: [
                envelopeFlag,
                {
                  name: "--groupName",
                  description:
                    "Human-readable label that identifies this project",
                  args: { name: "groupName" },
                },
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag2,
              ],
            },
            {
              name: "getGroupIpAddresses",
              description: "Returns all IP addresses for this project",
              options: [
                envelopeFlag,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag2,
              ],
            },
            {
              name: "getGroupLimit",
              description:
                "Returns the specified limit for the specified project",
              options: [
                envelopeFlag,
                groupIdFlag,
                limitNameFlag2,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag2,
              ],
            },
            {
              name: ["getMongoDbVersions", "getGroupMongoDbVersions"],
              description:
                "Returns the MongoDB Long Term Support Major Versions available to new clusters in this project",
              options: [
                {
                  name: "--cloudProvider",
                  description: "Filter results to only one cloud provider",
                  args: { name: "cloudProvider" },
                },
                {
                  name: "--defaultStatus",
                  description:
                    "Filter results to only the default values per tier",
                  args: { name: "defaultStatus" },
                },
                envelopeFlag,
                groupIdFlag,
                {
                  name: "--instanceSize",
                  description: "Filter results to only one instance size",
                  args: { name: "instanceSize" },
                },
                itemsPerPageFlag,
                outputFlag2,
                outputFileFlag,
                pageNumFlag,
                prettyFlag,
                versionFlag2,
              ],
            },
            {
              name: "getGroupSettings",
              description:
                "Returns details about the specified project's settings",
              options: [
                envelopeFlag,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag13,
              ],
            },
            {
              name: "listGroupLimits",
              description: "Returns all the limits for the specified project",
              options: [
                envelopeFlag,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag2,
              ],
            },
            {
              name: "listGroups",
              description: "Returns details about all projects",
              options: [
                envelopeFlag,
                includeCountFlag,
                itemsPerPageFlag,
                outputFlag2,
                outputFileFlag,
                pageNumFlag,
                prettyFlag,
                versionFlag2,
              ],
            },
            {
              name: "migrateGroup",
              description:
                "Migrates a project from its current organization to another organization",
              options: [
                envelopeFlag,
                fileFlag3,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                versionFlag5,
              ],
            },
            {
              name: "setGroupLimit",
              description: "Sets the specified project limit",
              options: [
                envelopeFlag,
                fileFlag3,
                groupIdFlag,
                limitNameFlag2,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag2,
              ],
            },
            {
              name: "updateGroup",
              description:
                "Updates the human-readable label that identifies the specified project, or the tags associated with the project",
              options: [
                envelopeFlag,
                fileFlag3,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag2,
              ],
            },
            {
              name: "updateGroupSettings",
              description: "Updates the settings of the specified project",
              options: [
                envelopeFlag,
                fileFlag3,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag13,
              ],
            },
          ],
        },
        {
          name: "pushBasedLogExport",
          description:
            "You can continually export mongod, mongos, and audit logs to an AWS S3 bucket",
          subcommands: [
            {
              name: "createGroupLogIntegration",
              description:
                "Creates a new log integration configuration identified by a unique ID",
              options: [
                envelopeFlag,
                fileFlag3,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag,
              ],
            },
            {
              name: "createOrgLogIntegration",
              description:
                "Creates a new organization-level log integration configuration identified by a unique ID",
              options: [
                envelopeFlag,
                fileFlag3,
                orgIdFlag2,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag,
              ],
            },
            {
              name: "deleteGroupLogIntegration",
              description:
                "Removes the configuration for one log integration identified by its unique ID",
              options: [
                envelopeFlag,
                groupIdFlag,
                idFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag,
              ],
            },
            {
              name: "deleteOrgLogIntegration",
              description:
                "Removes one organization-level log integration configuration identified by its unique ID",
              options: [
                envelopeFlag,
                logIntegrationIdFlag,
                orgIdFlag2,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag,
              ],
            },
            {
              name: "getGroupLogIntegration",
              description:
                "Returns the configuration for one log integration identified by its unique ID",
              options: [
                envelopeFlag,
                groupIdFlag,
                idFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag,
              ],
            },
            {
              name: "getOrgLogIntegration",
              description:
                "Returns the configuration for one organization-level log integration identified by its unique ID",
              options: [
                envelopeFlag,
                logIntegrationIdFlag,
                orgIdFlag2,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag,
              ],
            },
            {
              name: "listGroupLogIntegrations",
              description:
                "Returns all log integration configurations for the project",
              options: [
                envelopeFlag,
                groupIdFlag,
                includeCountFlag,
                {
                  name: "--integrationType",
                  description:
                    "Optional filter by integration type (e.g., S3_LOG_EXPORT)",
                  args: { name: "integrationType" },
                },
                itemsPerPageFlag,
                outputFlag2,
                outputFileFlag,
                pageNumFlag,
                prettyFlag,
                versionFlag,
              ],
            },
            {
              name: "listOrgLogIntegrations",
              description:
                "Returns all log integration configurations for the organization",
              options: [
                envelopeFlag,
                includeCountFlag,
                itemsPerPageFlag,
                orgIdFlag2,
                outputFlag2,
                outputFileFlag,
                pageNumFlag,
                prettyFlag,
                versionFlag,
              ],
            },
            {
              name: "updateGroupLogIntegration",
              description:
                "Updates the configuration for one log integration identified by its unique ID",
              options: [
                envelopeFlag,
                fileFlag3,
                groupIdFlag,
                idFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag,
              ],
            },
            {
              name: "updateOrgLogIntegration",
              description:
                "Updates one organization-level log integration configuration identified by its unique ID",
              options: [
                envelopeFlag,
                fileFlag3,
                logIntegrationIdFlag,
                orgIdFlag2,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag,
              ],
            },
          ],
        },
        {
          name: "querySampling",
          description:
            "Starts, returns, and stops query sampling on one namespace of one cluster",
          subcommands: [
            {
              name: [
                "createClusterQuerySampling",
                "createGroupClusterQuerySampling",
              ],
              description:
                "Starts query sampling on one namespace of the specified cluster",
              options: [
                clusterNameFlag2,
                envelopeFlag,
                fileFlag3,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag,
              ],
            },
            {
              name: [
                "deleteClusterQuerySampling",
                "deleteGroupClusterQuerySampling",
              ],
              description:
                "Stops query sampling on one namespace of the specified cluster",
              options: [
                clusterNameFlag2,
                envelopeFlag,
                groupIdFlag,
                {
                  name: "--namespace",
                  description:
                    "Human-readable label that identifies the namespace (<database>.<collection>) on which queries are sampled",
                  args: { name: "namespace" },
                },
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag,
              ],
            },
            {
              name: ["getClusterQuerySampling", "getGroupClusterQuerySampling"],
              description:
                "Returns the query sampling state of one namespace of the specified cluster, including counters for the operations sampled so far",
              options: [
                clusterNameFlag2,
                envelopeFlag,
                groupIdFlag,
                {
                  name: "--namespace",
                  description:
                    "Human-readable label that identifies the namespace (<database>.<collection>) on which queries are sampled",
                  args: { name: "namespace" },
                },
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag,
              ],
            },
          ],
        },
        {
          name: "queryShapeInsights",
          description:
            "The atlas api sub-command is automatically generated from the MongoDB Atlas Admin API and offers full coverage of the Admin API",
          subcommands: [
            {
              name: ["getClusterQueryShape", "getGroupClusterQueryShape"],
              description: "Returns the details for a single query shape",
              options: [
                clusterNameFlag2,
                envelopeFlag,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                queryShapeHashFlag,
                versionFlag,
              ],
            },
            {
              name: [
                "getQueryShapeDetails",
                "getGroupClusterQueryShapeInsightDetails",
              ],
              description:
                "Returns the metadata and statistics summary for a given query shape hash",
              options: [
                clusterNameFlag2,
                envelopeFlag,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                {
                  name: "--processIds",
                  description:
                    "Process IDs from which to retrieve query shape statistics",
                  args: { name: "processIds" },
                  isRepeatable: true,
                },
                queryShapeHashFlag,
                {
                  name: "--since",
                  description:
                    "Date and time from which to retrieve query shape statistics",
                  args: { name: "since" },
                },
                {
                  name: "--until",
                  description:
                    "Date and time up until which to retrieve query shape statistics",
                  args: { name: "until" },
                },
                versionFlag,
              ],
            },
            {
              name: [
                "listQueryShapeSummaries",
                "listGroupClusterQueryShapeInsightSummaries",
              ],
              description:
                "Returns a list of query shape statistics summaries for a given cluster",
              options: [
                clusterNameFlag2,
                {
                  name: "--commands",
                  description:
                    "Retrieve query shape statistics matching specified MongoDB commands",
                  args: { name: "commands" },
                  isRepeatable: true,
                },
                envelopeFlag,
                groupIdFlag,
                {
                  name: "--nSummaries",
                  description:
                    "Maximum number of query statistic summaries to return",
                  args: { name: "nSummaries" },
                },
                {
                  name: "--namespaces",
                  description:
                    "Namespaces from which to retrieve query shape statistics",
                  args: { name: "namespaces" },
                  isRepeatable: true,
                },
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                {
                  name: "--processIds",
                  description:
                    "Process IDs from which to retrieve query shape statistics",
                  args: { name: "processIds" },
                  isRepeatable: true,
                },
                {
                  name: "--queryShapeHashes",
                  description:
                    "A list of SHA256 hashes of desired query shapes, output by MongoDB commands like $queryStats and $explain or slow query logs",
                  args: { name: "queryShapeHashes" },
                  isRepeatable: true,
                },
                {
                  name: "--series",
                  description: "Query shape statistics data series to retrieve",
                  args: { name: "series" },
                  isRepeatable: true,
                },
                {
                  name: "--since",
                  description:
                    "Date and time from which to retrieve query shape statistics",
                  args: { name: "since" },
                },
                {
                  name: "--until",
                  description:
                    "Date and time up until which to retrieve query shape statistics",
                  args: { name: "until" },
                },
                versionFlag,
              ],
            },
            {
              name: ["listClusterQueryShapes", "listGroupClusterQueryShapes"],
              description: "Returns a list of query shapes for one cluster",
              options: [
                clusterNameFlag2,
                envelopeFlag,
                groupIdFlag,
                includeCountFlag,
                itemsPerPageFlag,
                outputFlag2,
                outputFileFlag,
                pageNumFlag,
                prettyFlag,
                {
                  name: "--status",
                  description: "The status of query shapes to retrieve",
                  args: { name: "status" },
                },
                versionFlag,
              ],
            },
            {
              name: ["updateClusterQueryShape", "updateGroupClusterQueryShape"],
              description: "Updates the rejection status of a query shape",
              options: [
                clusterNameFlag2,
                envelopeFlag,
                fileFlag3,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                queryShapeHashFlag,
                versionFlag,
              ],
            },
          ],
        },
        {
          name: "rateLimiting",
          description:
            "Returns details about rate limit policies for the Atlas Administration API",
          subcommands: [
            {
              name: "getRateLimit",
              description: "Get one rate limit endpoint set",
              options: [
                {
                  name: "--endpointSetId",
                  description: "The ID of the rate limit endpoint set",
                  args: { name: "endpointSetId" },
                },
                envelopeFlag,
                {
                  name: "--groupId",
                  description:
                    "Unique 24-hexadecimal digit string that identifies the Atlas Project to request rate limits for",
                  args: { name: "groupId" },
                },
                {
                  name: "--ipAddress",
                  description: "An IP address to request rate limits for",
                  args: { name: "ipAddress" },
                },
                {
                  name: "--orgId",
                  description:
                    "Unique 24-hexadecimal digit string that identifies the Atlas Organization to request rate limits for",
                  args: { name: "orgId" },
                },
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                {
                  name: "--userId",
                  description:
                    "A string that identifies the Atlas user to request rate limits for",
                  args: { name: "userId" },
                },
                versionFlag,
              ],
            },
            {
              name: "listRateLimits",
              description:
                "Get all rate limits for all v2 Atlas Administration API endpoint sets",
              options: [
                {
                  name: "--endpointPath",
                  description:
                    "Filters the returned endpoint sets by the provided endpoint path",
                  args: { name: "endpointPath", template: "filepaths" },
                },
                envelopeFlag,
                {
                  name: "--groupId",
                  description:
                    "Unique 24-hexadecimal digit string that identifies the Atlas Project to request rate limits for",
                  args: { name: "groupId" },
                },
                {
                  name: "--ipAddress",
                  description: "An IP address to request rate limits for",
                  args: { name: "ipAddress" },
                },
                itemsPerPageFlag,
                {
                  name: "--name",
                  description:
                    "Filters the returned endpoint sets by the provided endpoint set name",
                  args: { name: "name" },
                },
                {
                  name: "--orgId",
                  description:
                    "Unique 24-hexadecimal digit string that identifies the Atlas Organization to request rate limits for",
                  args: { name: "orgId" },
                },
                outputFlag2,
                outputFileFlag,
                pageNumFlag,
                prettyFlag,
                {
                  name: "--userId",
                  description:
                    "A string that identifies the Atlas user to request rate limits for",
                  args: { name: "userId" },
                },
                versionFlag,
              ],
            },
          ],
        },
        {
          name: "remoteMcpConfigurations",
          description:
            "Returns and manages Remote MCP configurations for organizations and projects",
          subcommands: [
            {
              name: "createGroupMcpConfig",
              description:
                "Creates an MCP configuration for the specified project",
              options: [
                fileFlag3,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                versionFlag,
              ],
            },
            {
              name: ["createGroupMcpSecret", "createGroupMcpConfigSecret"],
              description:
                "Creates a new secret on the ingress service account of the specified project-level MCP configuration",
              options: [
                fileFlag3,
                groupIdFlag,
                mcpConfigIdFlag,
                outputFlag2,
                outputFileFlag,
                versionFlag,
              ],
            },
            {
              name: "createOrgMcpConfig",
              description:
                "Creates an MCP configuration for the specified organization",
              options: [
                fileFlag3,
                orgIdFlag2,
                outputFlag2,
                outputFileFlag,
                versionFlag,
              ],
            },
            {
              name: ["createOrgMcpSecret", "createOrgMcpConfigSecret"],
              description:
                "Creates a new secret on the ingress service account of the specified organization-level MCP configuration",
              options: [
                fileFlag3,
                mcpConfigIdFlag,
                orgIdFlag2,
                outputFlag2,
                outputFileFlag,
                versionFlag,
              ],
            },
            {
              name: "deleteGroupMcpConfig",
              description:
                "Deletes the MCP configuration with the specified ID for the specified project",
              options: [
                {
                  name: "--cascading",
                  description:
                    "Flag that indicates whether to delete the MCP configuration even if it has active secrets",
                },
                groupIdFlag,
                {
                  name: "--mcpConfigId",
                  description:
                    "Unique identifier of the MCP configuration to delete",
                  args: { name: "mcpConfigId" },
                },
                outputFlag2,
                outputFileFlag,
                versionFlag,
              ],
            },
            {
              name: ["deleteGroupMcpSecret", "deleteGroupMcpConfigSecret"],
              description:
                "Deletes the specified secret from the ingress service account of the specified project-level MCP configuration",
              options: [
                groupIdFlag,
                mcpConfigIdFlag,
                outputFlag2,
                outputFileFlag,
                secretIdFlag,
                versionFlag,
              ],
            },
            {
              name: "deleteOrgMcpConfig",
              description:
                "Deletes the MCP configuration with the specified ID for the specified organization",
              options: [
                {
                  name: "--cascading",
                  description:
                    "Flag that indicates whether to delete the MCP configuration even if it has active secrets",
                },
                {
                  name: "--mcpConfigId",
                  description:
                    "Unique identifier of the MCP configuration to delete",
                  args: { name: "mcpConfigId" },
                },
                orgIdFlag2,
                outputFlag2,
                outputFileFlag,
                versionFlag,
              ],
            },
            {
              name: ["deleteOrgMcpSecret", "deleteOrgMcpConfigSecret"],
              description:
                "Deletes the specified secret from the ingress service account of the specified organization-level MCP configuration",
              options: [
                mcpConfigIdFlag,
                orgIdFlag2,
                outputFlag2,
                outputFileFlag,
                secretIdFlag,
                versionFlag,
              ],
            },
            {
              name: "getGroupMcpConfig",
              description:
                "Returns the MCP configuration with the specified ID for the specified project",
              options: [
                envelopeFlag,
                groupIdFlag,
                mcpConfigIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag,
              ],
            },
            {
              name: ["getGroupMcpSecret", "getGroupMcpConfigSecret"],
              description:
                "Returns metadata for the specified secret on the ingress service account of a project-level MCP configuration",
              options: [
                envelopeFlag,
                groupIdFlag,
                mcpConfigIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                secretIdFlag,
                versionFlag,
              ],
            },
            {
              name: "getOrgMcpConfig",
              description:
                "Returns the MCP configuration with the specified ID for the specified organization",
              options: [
                envelopeFlag,
                mcpConfigIdFlag,
                orgIdFlag2,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag,
              ],
            },
            {
              name: ["getOrgMcpSecret", "getOrgMcpConfigSecret"],
              description:
                "Returns metadata for the specified secret on the ingress service account of an organization-level MCP configuration",
              options: [
                envelopeFlag,
                mcpConfigIdFlag,
                orgIdFlag2,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                secretIdFlag,
                versionFlag,
              ],
            },
            {
              name: ["listGroupMcpSecrets", "listGroupMcpConfigSecrets"],
              description:
                "Returns metadata for all secrets on the ingress service account of the specified project-level MCP configuration",
              options: [
                envelopeFlag,
                groupIdFlag,
                includeCountFlag,
                itemsPerPageFlag,
                mcpConfigIdFlag,
                outputFlag2,
                outputFileFlag,
                pageNumFlag,
                prettyFlag,
                versionFlag,
              ],
            },
            {
              name: "listGroupMcpConfigs",
              description:
                "Returns all MCP configurations associated with the specified project",
              options: [
                envelopeFlag,
                groupIdFlag,
                includeCountFlag,
                itemsPerPageFlag,
                outputFlag2,
                outputFileFlag,
                pageNumFlag,
                prettyFlag,
                versionFlag,
              ],
            },
            {
              name: ["listOrgMcpSecrets", "listOrgMcpConfigSecrets"],
              description:
                "Returns metadata for all secrets on the ingress service account of the specified organization-level MCP configuration",
              options: [
                envelopeFlag,
                includeCountFlag,
                itemsPerPageFlag,
                mcpConfigIdFlag,
                orgIdFlag2,
                outputFlag2,
                outputFileFlag,
                pageNumFlag,
                prettyFlag,
                versionFlag,
              ],
            },
            {
              name: "listOrgMcpConfigs",
              description:
                "Returns all MCP configurations associated with the specified organization",
              options: [
                envelopeFlag,
                includeCountFlag,
                itemsPerPageFlag,
                orgIdFlag2,
                outputFlag2,
                outputFileFlag,
                pageNumFlag,
                prettyFlag,
                versionFlag,
              ],
            },
            {
              name: "updateGroupMcpConfig",
              description:
                "Updates the specified MCP configuration for the project",
              options: [
                fileFlag3,
                groupIdFlag,
                {
                  name: "--mcpConfigId",
                  description:
                    "Unique identifier of the MCP configuration to update",
                  args: { name: "mcpConfigId" },
                },
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag,
              ],
            },
            {
              name: "updateOrgMcpConfig",
              description:
                "Updates the specified MCP configuration for the organization",
              options: [
                fileFlag3,
                {
                  name: "--mcpConfigId",
                  description:
                    "Unique identifier of the MCP configuration to update",
                  args: { name: "mcpConfigId" },
                },
                orgIdFlag2,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag,
              ],
            },
          ],
        },
        {
          name: "resourcePolicies",
          description:
            "Configure and manage Atlas Resource Policies within your organization",
          subcommands: [
            {
              name: "createOrgResourcePolicy",
              description:
                "Create one Atlas Resource Policy for an organization",
              options: [
                envelopeFlag,
                fileFlag3,
                orgIdFlag2,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag11,
              ],
            },
            {
              name: "deleteOrgResourcePolicy",
              description:
                "Delete one Atlas Resource Policy for an organization",
              options: [
                envelopeFlag,
                orgIdFlag2,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                resourcePolicyIdFlag,
                versionFlag11,
              ],
            },
            {
              name: ["getNonCompliantResources", "getOrgNonCompliantResources"],
              description:
                "Return all non-compliant resources for an organization",
              options: [
                envelopeFlag,
                orgIdFlag2,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag11,
              ],
            },
            {
              name: "getOrgResourcePolicy",
              description:
                "Return one Atlas Resource Policy for an organization",
              options: [
                envelopeFlag,
                orgIdFlag2,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                resourcePolicyIdFlag,
                versionFlag11,
              ],
            },
            {
              name: "listOrgResourcePolicies",
              description:
                "Return all Atlas Resource Policies for the organization",
              options: [
                envelopeFlag,
                orgIdFlag2,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag11,
              ],
            },
            {
              name: "updateOrgResourcePolicy",
              description:
                "Update one Atlas Resource Policy for an organization",
              options: [
                envelopeFlag,
                fileFlag3,
                orgIdFlag2,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                resourcePolicyIdFlag,
                versionFlag11,
              ],
            },
            {
              name: ["validateResourcePolicies", "validateOrgResourcePolicies"],
              description:
                "Validate one Atlas Resource Policy for an organization",
              options: [
                envelopeFlag,
                fileFlag3,
                orgIdFlag2,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag11,
              ],
            },
          ],
        },
        {
          name: "rollingIndex",
          description:
            "Creates one index to a database deployment in a rolling manner",
          subcommands: [
            {
              name: [
                "createRollingIndex",
                "createGroupClusterIndexRollingIndex",
              ],
              description:
                "Creates an index on the cluster identified by its name in a rolling manner",
              options: [
                {
                  name: "--clusterName",
                  description:
                    "Human-readable label that identifies the cluster on which MongoDB Cloud creates an index",
                  args: { name: "clusterName" },
                },
                envelopeFlag,
                fileFlag3,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag2,
              ],
            },
          ],
        },
        {
          name: "root",
          description:
            "Returns details that describe the MongoDB Cloud build and the access token that requests this resource",
          subcommands: [
            {
              name: "getSystemStatus",
              description:
                "This resource returns information about the MongoDB application along with API key meta data",
              options: [
                envelopeFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag2,
              ],
            },
            {
              name: [
                "listControlPlaneAddresses",
                "listControlPlaneIpAddresses",
              ],
              description: "Returns all control plane IP addresses",
              options: [
                envelopeFlag,
                outputFlag2,
                outputFileFlag,
                versionFlag12,
              ],
            },
          ],
        },
        {
          name: "sandbox",
          description: "Returns, adds, edits, and removes sandbox templates",
          subcommands: [
            {
              name: "createOrgSandboxConfig",
              description:
                "Create one sandbox configuration for an organization",
              options: [
                envelopeFlag,
                fileFlag3,
                orgIdFlag2,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag8,
              ],
            },
            {
              name: "deleteOrgSandboxConfig",
              description:
                "Delete the default sandbox configuration and disable sandbox for an organization",
              options: [
                orgIdFlag2,
                outputFlag2,
                outputFileFlag,
                sandboxConfigIdFlag,
                versionFlag8,
              ],
            },
            {
              name: [
                "generateSandboxClusterDescription",
                "generateGroupSandboxClusterDescription",
              ],
              description:
                "Return cluster description from sandbox template configuration for M0 and M10 clusters only",
              options: [
                envelopeFlag,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                sandboxConfigIdFlag,
                versionFlag8,
              ],
            },
            {
              name: "getOrgSandboxConfig",
              description:
                "Return the default sandbox configuration for an organization",
              options: [
                envelopeFlag,
                orgIdFlag2,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                sandboxConfigIdFlag,
                versionFlag8,
              ],
            },
            {
              name: "listOrgSandboxConfig",
              description:
                "Return an array of sandbox configuration IDs for an organization",
              options: [
                envelopeFlag,
                itemsPerPageFlag,
                orgIdFlag2,
                outputFlag2,
                outputFileFlag,
                pageNumFlag,
                prettyFlag,
                versionFlag8,
              ],
            },
            {
              name: "updateOrgSandboxConfig",
              description:
                "Update an existing sandbox configuration for an organization",
              options: [
                envelopeFlag,
                fileFlag3,
                orgIdFlag2,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                sandboxConfigIdFlag,
                versionFlag8,
              ],
            },
          ],
        },
        {
          name: "serviceAccounts",
          description: "Endpoints for managing Service Accounts and secrets",
          subcommands: [
            {
              name: "createGroupServiceAccount",
              description:
                "Creates one Service Account for the specified Project",
              options: [
                envelopeFlag,
                fileFlag3,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag11,
              ],
            },
            {
              name: ["createAccessList", "createGroupServiceAccountAccessList"],
              description:
                "Add Access List Entries for the specified Service Account for the project",
              options: [
                clientIdFlag,
                envelopeFlag,
                fileFlag3,
                groupIdFlag,
                includeCountFlag,
                itemsPerPageFlag,
                outputFlag2,
                outputFileFlag,
                pageNumFlag,
                prettyFlag,
                versionFlag11,
              ],
            },
            {
              name: ["createGroupSecret", "createGroupServiceAccountSecret"],
              description:
                "Create a secret for the specified Service Account in the specified Project",
              options: [
                clientIdFlag,
                envelopeFlag,
                fileFlag3,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag11,
              ],
            },
            {
              name: "createOrgServiceAccount",
              description:
                "Creates one Service Account for the specified Organization",
              options: [
                envelopeFlag,
                fileFlag3,
                orgIdFlag2,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag11,
              ],
            },
            {
              name: [
                "createOrgAccessList",
                "createOrgServiceAccountAccessList",
              ],
              description:
                "Add Access List Entries for the specified Service Account for the organization",
              options: [
                clientIdFlag,
                envelopeFlag,
                fileFlag3,
                includeCountFlag,
                itemsPerPageFlag,
                orgIdFlag2,
                outputFlag2,
                outputFileFlag,
                pageNumFlag,
                prettyFlag,
                versionFlag11,
              ],
            },
            {
              name: ["createOrgSecret", "createOrgServiceAccountSecret"],
              description: "Create a secret for the specified Service Account",
              options: [
                clientIdFlag,
                envelopeFlag,
                fileFlag3,
                orgIdFlag2,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag11,
              ],
            },
            {
              name: "deleteGroupServiceAccount",
              description:
                "Removes the specified Service Account from the specified project",
              options: [
                clientIdFlag,
                envelopeFlag,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag11,
              ],
            },
            {
              name: [
                "deleteGroupAccessEntry",
                "deleteGroupServiceAccountAccessListEntry",
              ],
              description:
                "Removes the specified access list entry from the specified Service Account for the project",
              options: [
                clientIdFlag,
                envelopeFlag,
                groupIdFlag,
                {
                  name: "--ipAddress",
                  description:
                    "One IP address or multiple IP addresses represented as one CIDR block",
                  args: { name: "ipAddress" },
                },
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag11,
              ],
            },
            {
              name: ["deleteGroupSecret", "deleteGroupServiceAccountSecret"],
              description: "Deletes the specified Service Account secret",
              options: [
                clientIdFlag,
                envelopeFlag,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                secretIdFlag,
                versionFlag11,
              ],
            },
            {
              name: "deleteOrgServiceAccount",
              description: "Deletes the specified Service Account",
              options: [
                clientIdFlag,
                envelopeFlag,
                orgIdFlag2,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag11,
              ],
            },
            {
              name: [
                "deleteOrgAccessEntry",
                "deleteOrgServiceAccountAccessListEntry",
              ],
              description:
                "Removes the specified access list entry from the specified Service Account for the organization",
              options: [
                clientIdFlag,
                envelopeFlag,
                {
                  name: "--ipAddress",
                  description:
                    "One IP address or multiple IP addresses represented as one CIDR block",
                  args: { name: "ipAddress" },
                },
                orgIdFlag2,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag11,
              ],
            },
            {
              name: ["deleteOrgSecret", "deleteOrgServiceAccountSecret"],
              description: "Deletes the specified Service Account secret",
              options: [
                clientIdFlag,
                envelopeFlag,
                orgIdFlag2,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                secretIdFlag,
                versionFlag11,
              ],
            },
            {
              name: "getGroupServiceAccount",
              description:
                "Returns one Service Account in the specified Project",
              options: [
                clientIdFlag,
                envelopeFlag,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag11,
              ],
            },
            {
              name: "getOrgServiceAccount",
              description: "Returns the specified Service Account",
              options: [
                clientIdFlag,
                envelopeFlag,
                orgIdFlag2,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag11,
              ],
            },
            {
              name: ["getServiceAccountGroups", "getOrgServiceAccountGroups"],
              description:
                "Returns a list of all projects the specified Service Account is a part of",
              options: [
                clientIdFlag,
                envelopeFlag,
                itemsPerPageFlag,
                orgIdFlag2,
                outputFlag2,
                outputFileFlag,
                pageNumFlag,
                prettyFlag,
                versionFlag11,
              ],
            },
            {
              name: "inviteGroupServiceAccount",
              description:
                "Assigns the specified Service Account to the specified Project",
              options: [
                clientIdFlag,
                envelopeFlag,
                fileFlag3,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag11,
              ],
            },
            {
              name: ["listAccessList", "listGroupServiceAccountAccessList"],
              description:
                "Returns all access list entries that you configured for the specified Service Account for the project",
              options: [
                clientIdFlag,
                envelopeFlag,
                groupIdFlag,
                includeCountFlag,
                itemsPerPageFlag,
                outputFlag2,
                outputFileFlag,
                pageNumFlag,
                prettyFlag,
                versionFlag11,
              ],
            },
            {
              name: "listGroupServiceAccounts",
              description:
                "Returns all Service Accounts for the specified Project",
              options: [
                envelopeFlag,
                groupIdFlag,
                {
                  name: "--includeSystemManaged",
                  description:
                    "Flag that indicates whether system-managed Service Accounts (such as those used for MCP ingress/egress integrations) are included in the response",
                },
                itemsPerPageFlag,
                outputFlag2,
                outputFileFlag,
                pageNumFlag,
                prettyFlag,
                versionFlag11,
              ],
            },
            {
              name: ["listOrgAccessList", "listOrgServiceAccountAccessList"],
              description:
                "Returns all access list entries that you configured for the specified Service Account for the organization",
              options: [
                clientIdFlag,
                envelopeFlag,
                includeCountFlag,
                itemsPerPageFlag,
                orgIdFlag2,
                outputFlag2,
                outputFileFlag,
                pageNumFlag,
                prettyFlag,
                versionFlag11,
              ],
            },
            {
              name: "listOrgServiceAccounts",
              description:
                "Returns all Service Accounts for the specified Organization",
              options: [
                envelopeFlag,
                {
                  name: "--includeSystemManaged",
                  description:
                    "Flag that indicates whether system-managed Service Accounts (such as those used for MCP ingress/egress integrations) are included in the response",
                },
                itemsPerPageFlag,
                orgIdFlag2,
                outputFlag2,
                outputFileFlag,
                pageNumFlag,
                prettyFlag,
                versionFlag11,
              ],
            },
            {
              name: "updateGroupServiceAccount",
              description:
                "Updates one Service Account in the specified Project",
              options: [
                clientIdFlag,
                envelopeFlag,
                fileFlag3,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag11,
              ],
            },
            {
              name: "updateOrgServiceAccount",
              description:
                "Updates the specified Service Account in the specified Organization",
              options: [
                clientIdFlag,
                envelopeFlag,
                fileFlag3,
                orgIdFlag2,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag11,
              ],
            },
          ],
        },
        {
          name: "shardKeyAnalyzer",
          description:
            "Analyzes how well a candidate shard key would distribute a collection across the shards of a cluster",
          subcommands: [
            {
              name: [
                "createShardKeyAnalysis",
                "createGroupClusterShardKeyAnalysis",
              ],
              description:
                "Analyzes how well one candidate shard key would distribute one collection across the shards of the specified cluster",
              options: [
                {
                  name: "--clusterName",
                  description:
                    "Human-readable label that identifies the cluster that contains the collection to analyze",
                  args: { name: "clusterName" },
                },
                envelopeFlag,
                fileFlag3,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag,
              ],
            },
            {
              name: ["getShardKeyAnalysis", "getGroupClusterShardKeyAnalysis"],
              description:
                "Returns one completed shard key analysis for the specified cluster",
              options: [
                {
                  name: "--analysisId",
                  description:
                    "Unique 24-hexadecimal digit string that identifies the shard key analysis to return",
                  args: { name: "analysisId" },
                },
                {
                  name: "--clusterName",
                  description:
                    "Human-readable label that identifies the cluster with the shard key analysis you want to return",
                  args: { name: "clusterName" },
                },
                envelopeFlag,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag,
              ],
            },
            {
              name: [
                "getAnalysisOperation",
                "getGroupClusterShardKeyAnalysisOperation",
              ],
              description:
                "Returns the progress of one shard key analysis for the specified cluster",
              options: [
                {
                  name: "--clusterName",
                  description:
                    "Human-readable label that identifies the cluster with the shard key analysis operation you want to return",
                  args: { name: "clusterName" },
                },
                envelopeFlag,
                groupIdFlag,
                {
                  name: "--operationId",
                  description:
                    "Unique 24-hexadecimal digit string that identifies the shard key analysis operation to return",
                  args: { name: "operationId" },
                },
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag,
              ],
            },
            {
              name: [
                "listShardKeyAnalyses",
                "listGroupClusterShardKeyAnalyses",
              ],
              description:
                "Returns all completed shard key analyses for the specified cluster, newest first",
              options: [
                {
                  name: "--clusterName",
                  description:
                    "Human-readable label that identifies the cluster with the shard key analyses you want to return",
                  args: { name: "clusterName" },
                },
                envelopeFlag,
                groupIdFlag,
                includeCountFlag,
                itemsPerPageFlag,
                outputFlag2,
                outputFileFlag,
                pageNumFlag,
                prettyFlag,
                versionFlag,
              ],
            },
            {
              name: [
                "listAnalysisOperations",
                "listGroupClusterShardKeyAnalysisOperations",
              ],
              description:
                "Returns every shard key analysis attempt for the specified cluster, newest first, including attempts that are still running and attempts that failed",
              options: [
                {
                  name: "--clusterName",
                  description:
                    "Human-readable label that identifies the cluster with the shard key analysis operations you want to return",
                  args: { name: "clusterName" },
                },
                envelopeFlag,
                groupIdFlag,
                includeCountFlag,
                itemsPerPageFlag,
                outputFlag2,
                outputFileFlag,
                pageNumFlag,
                prettyFlag,
                versionFlag,
              ],
            },
          ],
        },
        {
          name: "shardingInsights",
          description:
            "Returns the cluster-level sharding state of one sharded cluster, including the balancer state, config server availability, and the configured balancing window",
          subcommands: [
            {
              name: ["getClusterShardMetric", "getGroupClusterShardMetric"],
              description:
                "Returns the size, load and open alerts of one shard in one sharded cluster",
              options: [
                clusterNameFlag2,
                envelopeFlag,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                {
                  name: "--replicaSetName",
                  description:
                    "Name of the replica set that identifies the shard",
                  args: { name: "replicaSetName" },
                },
                versionFlag,
              ],
            },
            {
              name: [
                "getShardMetricMeasurements",
                "getGroupClusterShardMetricMeasurements",
              ],
              description:
                "Returns time series of the requested measurements for one shard of the specified sharded cluster",
              options: [
                clusterNameFlag2,
                endFlag2,
                envelopeFlag,
                {
                  name: "--granularity",
                  description:
                    "Interval between consecutive data points, in ISO 8601 duration format",
                  args: { name: "granularity" },
                },
                groupIdFlag,
                {
                  name: "--m",
                  description: "One or more measurements to return",
                  args: { name: "m" },
                  isRepeatable: true,
                },
                {
                  name: "--nodeType",
                  description:
                    "Members of the shard whose readings are averaged into the shard's series",
                  args: { name: "nodeType" },
                },
                outputFlag2,
                outputFileFlag,
                periodFlag2,
                prettyFlag,
                {
                  name: "--replicaSetName",
                  description:
                    "Human-readable label that identifies the shard, as the replica set name of its members",
                  args: { name: "replicaSetName" },
                },
                startFlag2,
                versionFlag,
              ],
            },
            {
              name: [
                "getClusterShardingInsights",
                "getGroupClusterShardingInsights",
              ],
              description:
                "Returns the cluster-level sharding state of one sharded cluster: the number of shards, the balancer state, the availability of the config servers, and the configured balancing window",
              options: [
                clusterNameFlag2,
                envelopeFlag,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag,
              ],
            },
            {
              name: [
                "listShardMetricMeasurements",
                "listGroupClusterShardMetricMeasurements",
              ],
              description:
                "Returns time series of the requested measurements for every shard of the specified sharded cluster, one series per shard and measurement",
              options: [
                clusterNameFlag2,
                endFlag2,
                envelopeFlag,
                {
                  name: "--granularity",
                  description:
                    "Interval between consecutive data points, in ISO 8601 duration format",
                  args: { name: "granularity" },
                },
                groupIdFlag,
                {
                  name: "--m",
                  description: "One or more measurements to return",
                  args: { name: "m" },
                  isRepeatable: true,
                },
                {
                  name: "--nodeType",
                  description:
                    "Members of each shard whose readings are averaged into the shard's series",
                  args: { name: "nodeType" },
                },
                outputFlag2,
                outputFileFlag,
                periodFlag2,
                prettyFlag,
                startFlag2,
                versionFlag,
              ],
            },
            {
              name: ["listClusterShardMetrics", "listGroupClusterShardMetrics"],
              description:
                "Returns the size and load of every shard in one sharded cluster",
              options: [
                clusterNameFlag2,
                envelopeFlag,
                groupIdFlag,
                includeCountFlag,
                itemsPerPageFlag,
                outputFlag2,
                outputFileFlag,
                pageNumFlag,
                prettyFlag,
                versionFlag,
              ],
            },
          ],
        },
        {
          name: "shardingRecommendations",
          description:
            "Returns Sharding Advisor recommendations for one cluster",
          subcommands: [
            {
              name: [
                "getClusterShardingRecommendations",
                "getGroupClusterShardingRecommendations",
              ],
              description:
                "Returns the active Sharding Advisor recommendations for one cluster",
              options: [
                clusterNameFlag2,
                envelopeFlag,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag,
              ],
            },
          ],
        },
        {
          name: "standbyLinks",
          description:
            "Returns, adds, edits, and removes standby links between clusters for disaster recovery within a specified project",
          subcommands: [
            {
              name: "createGroupStandbyLink",
              description:
                "Creates a disaster recovery standby link between an active cluster and a standby cluster",
              options: [
                envelopeFlag2,
                fileFlag3,
                {
                  name: "--groupId",
                  description:
                    "Unique 24-hexadecimal digit string that identifies the project containing the clusters",
                  args: { name: "groupId" },
                },
                outputFlag2,
                outputFileFlag,
                versionFlag8,
              ],
            },
            {
              name: [
                "createStandbyLinkFailover",
                "createGroupStandbyLinkFailover",
              ],
              description:
                "Creates a new failover operation to promote a standby cluster or reverse cluster roles",
              options: [
                envelopeFlag2,
                fileFlag3,
                groupIdFlag2,
                outputFlag2,
                outputFileFlag,
                standbyLinkIdFlag,
                versionFlag8,
              ],
            },
            {
              name: "deleteGroupStandbyLink",
              description:
                "Terminates an existing standby link and converts the active and standby clusters back to regular clusters",
              options: [
                envelopeFlag2,
                groupIdFlag2,
                outputFlag2,
                outputFileFlag,
                standbyLinkIdFlag,
                versionFlag8,
              ],
            },
            {
              name: "getGroupStandbyLink",
              description:
                "Returns detailed information about a specific standby link including status, group ID, and cluster unique IDs",
              options: [
                envelopeFlag2,
                groupIdFlag2,
                outputFlag2,
                outputFileFlag,
                standbyLinkIdFlag,
                versionFlag8,
              ],
            },
            {
              name: ["getStandbyLinkFailover", "getGroupStandbyLinkFailover"],
              description:
                "Returns the current status and details of a specific failover operation for a standby link",
              options: [
                envelopeFlag2,
                {
                  name: "--failoverId",
                  description:
                    "Unique 24-hexadecimal digit string that identifies the failover operation",
                  args: { name: "failoverId" },
                },
                groupIdFlag2,
                outputFlag2,
                outputFileFlag,
                standbyLinkIdFlag,
                versionFlag8,
              ],
            },
            {
              name: [
                "inspectFailoverReadiness",
                "inspectGroupStandbyLinkFailoverReadiness",
              ],
              description:
                "Returns the failover readiness metrics for the specified standby link in the specified project",
              options: [
                envelopeFlag2,
                groupIdFlag2,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                standbyLinkIdFlag,
                versionFlag8,
              ],
            },
            {
              name: [
                "listStandbyLinkFailovers",
                "listGroupStandbyLinkFailovers",
              ],
              description:
                "Returns all failover operations for the specified standby link",
              options: [
                envelopeFlag,
                groupIdFlag2,
                itemsPerPageFlag,
                outputFlag2,
                outputFileFlag,
                pageNumFlag,
                prettyFlag,
                standbyLinkIdFlag,
                versionFlag8,
              ],
            },
            {
              name: "listGroupStandbyLinks",
              description:
                "Returns all standby links for the specified project",
              options: [
                envelopeFlag,
                groupIdFlag2,
                itemsPerPageFlag,
                outputFlag2,
                outputFileFlag,
                pageNumFlag,
                prettyFlag,
                versionFlag8,
              ],
            },
          ],
        },
        {
          name: "streams",
          description: "Returns, adds, edits, and removes Streams Workspaces",
          subcommands: [
            {
              name: [
                "acceptVpcPeeringConnection",
                "acceptGroupStreamVpcPeeringConnection",
              ],
              description:
                "Requests the acceptance of an incoming VPC Peering connection",
              options: [
                envelopeFlag,
                fileFlag3,
                groupIdFlag,
                idFlag2,
                outputFlag2,
                outputFileFlag,
                versionFlag16,
              ],
            },
            {
              name: ["createStreamConnection", "createGroupStreamConnection"],
              description:
                "Creates one connection for a stream workspace in the specified project",
              options: [
                envelopeFlag,
                fileFlag3,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                tenantNameFlag2,
                versionFlag16,
              ],
            },
            {
              name: [
                "createFailoverConnection",
                "createGroupStreamConnectionFailoverConnection",
              ],
              description:
                "Creates one failover connection for a stream workspace in the specified project",
              options: [
                {
                  name: "--connectionName",
                  description:
                    "Label that identifies the stream connection name",
                  args: { name: "connectionName" },
                },
                envelopeFlag,
                fileFlag3,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                tenantNameFlag2,
                versionFlag,
              ],
            },
            {
              name: [
                "createPrivateLinkConnection",
                "createGroupStreamPrivateLinkConnection",
              ],
              description: "Creates one Private Link in the specified project",
              options: [
                envelopeFlag,
                fileFlag3,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag16,
              ],
            },
            {
              name: ["createStreamProcessor", "createGroupStreamProcessor"],
              description:
                "Create one Stream Processor within the specified stream workspace",
              options: [
                envelopeFlag,
                fileFlag3,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                tenantNameFlag2,
                versionFlag5,
              ],
            },
            {
              name: ["createStreamWorkspace", "createGroupStreamWorkspace"],
              description:
                "Creates one stream workspace in the specified project",
              options: [
                envelopeFlag,
                fileFlag3,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag16,
              ],
            },
            {
              name: [
                "createWorkspacePrivateEndpoint",
                "createGroupStreamsWorkspacePrivateEndpoint",
              ],
              description:
                "Registers one VPC endpoint for Atlas Stream Processing in the specified project",
              options: [
                envelopeFlag,
                fileFlag3,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag17,
              ],
            },
            {
              name: ["deleteStreamConnection", "deleteGroupStreamConnection"],
              description:
                "Delete one connection of the specified stream workspace",
              options: [
                connectionNameFlag,
                envelopeFlag,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                tenantNameFlag2,
                versionFlag16,
              ],
            },
            {
              name: [
                "deleteStreamFailoverConnection",
                "deleteGroupStreamConnectionFailoverConnection",
              ],
              description:
                "Delete one failover connection of the specified stream workspace",
              options: [
                connectionNameFlag,
                envelopeFlag,
                failoverConnectionIdFlag,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                tenantNameFlag2,
                versionFlag,
              ],
            },
            {
              name: [
                "deletePrivateLinkConnection",
                "deleteGroupStreamPrivateLinkConnection",
              ],
              description: "Deletes one Private Link in the specified project",
              options: [
                connectionIdFlag,
                envelopeFlag,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag16,
              ],
            },
            {
              name: ["deleteStreamProcessor", "deleteGroupStreamProcessor"],
              description:
                "Delete a Stream Processor within the specified stream workspace",
              options: [
                envelopeFlag,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                processorNameFlag,
                tenantNameFlag2,
                versionFlag5,
              ],
            },
            {
              name: [
                "deleteVpcPeeringConnection",
                "deleteGroupStreamVpcPeeringConnection",
              ],
              description: "Deletes an incoming VPC Peering connection",
              options: [
                envelopeFlag,
                groupIdFlag,
                idFlag2,
                outputFlag2,
                outputFileFlag,
                versionFlag16,
              ],
            },
            {
              name: ["deleteStreamWorkspace", "deleteGroupStreamWorkspace"],
              description:
                "Delete one stream workspace in the specified project",
              options: [
                envelopeFlag,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                {
                  name: "--tenantName",
                  description:
                    "Label that identifies the stream workspace to delete",
                  args: { name: "tenantName" },
                },
                versionFlag16,
              ],
            },
            {
              name: [
                "deleteWorkspacePrivateEndpoint",
                "deleteGroupStreamsWorkspacePrivateEndpoint",
              ],
              description:
                "Removes one private endpoint registered for Atlas Stream Processing in the specified project",
              options: [
                {
                  name: "--endpointId",
                  description: "Unique identifier of your VPC endpoint",
                  args: { name: "endpointId" },
                },
                envelopeFlag,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                versionFlag17,
              ],
            },
            {
              name: ["downloadAuditLogs", "downloadGroupStreamAuditLogs"],
              description:
                "Downloads the audit logs for the specified Atlas Streams Processing workspace or stream processor",
              options: [
                endDateFlag,
                envelopeFlag,
                groupIdFlag,
                outputFlag3,
                outputFileFlag,
                {
                  name: "--spName",
                  description:
                    "Name of the stream processor to download logs for",
                  args: { name: "spName" },
                },
                startDateFlag,
                tenantNameFlag2,
                versionFlag16,
              ],
            },
            {
              name: [
                "downloadOperationalLogs",
                "downloadGroupStreamOperationalLogs",
              ],
              description:
                "Downloads the operational logs for the specified Atlas Streams Processing workspace or stream processor",
              options: [
                endDateFlag,
                envelopeFlag,
                groupIdFlag,
                outputFlag3,
                outputFileFlag,
                {
                  name: "--spName",
                  description:
                    "Name of the stream processor to download logs for",
                  args: { name: "spName" },
                },
                startDateFlag,
                tenantNameFlag2,
                versionFlag,
              ],
            },
            {
              name: ["getAccountDetails", "getGroupStreamAccountDetails"],
              description:
                "Returns the Account ID, and the VPC ID for the group and region specified",
              options: [
                {
                  name: "--cloudProvider",
                  description: 'One of "aws", "azure" or "gcp"',
                  args: { name: "cloudProvider" },
                },
                envelopeFlag,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                {
                  name: "--regionName",
                  description: "The cloud provider specific region name",
                  args: { name: "regionName" },
                },
                versionFlag6,
              ],
            },
            {
              name: ["getStreamConnection", "getGroupStreamConnection"],
              description:
                "Returns the details of one stream connection within the specified stream workspace",
              options: [
                {
                  name: "--connectionName",
                  description:
                    "Label that identifies the stream connection to return",
                  args: { name: "connectionName" },
                },
                envelopeFlag,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                {
                  name: "--tenantName",
                  description:
                    "Label that identifies the stream workspace to return",
                  args: { name: "tenantName" },
                },
                versionFlag16,
              ],
            },
            {
              name: [
                "getStreamFailoverConnection",
                "getGroupStreamConnectionFailoverConnection",
              ],
              description:
                "Get one failover connection of the specified stream workspace",
              options: [
                connectionNameFlag,
                envelopeFlag,
                failoverConnectionIdFlag,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                tenantNameFlag2,
                versionFlag,
              ],
            },
            {
              name: [
                "getPrivateLinkConnection",
                "getGroupStreamPrivateLinkConnection",
              ],
              description:
                "Returns the details of one Private Link connection within the project",
              options: [
                connectionIdFlag,
                envelopeFlag,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                versionFlag16,
              ],
            },
            {
              name: ["getStreamProcessor", "getGroupStreamProcessor"],
              description:
                "Get one Stream Processor within the specified stream workspace",
              options: [
                envelopeFlag,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                processorNameFlag,
                tenantNameFlag2,
                versionFlag5,
              ],
            },
            {
              name: ["getStreamProcessors", "getGroupStreamProcessors"],
              description:
                "Returns all Stream Processors within the specified stream workspace, including information on which processors are failover-eligible",
              options: [
                envelopeFlag,
                groupIdFlag,
                includeCountFlag,
                itemsPerPageFlag,
                outputFlag2,
                outputFileFlag,
                pageNumFlag,
                prettyFlag,
                tenantNameFlag2,
                versionFlag5,
              ],
            },
            {
              name: ["getStreamWorkspace", "getGroupStreamWorkspace"],
              description:
                "Returns the details of one stream workspace within the specified project",
              options: [
                envelopeFlag,
                groupIdFlag,
                {
                  name: "--includeConnections",
                  description:
                    "Flag to indicate whether connections information should be included in the stream workspace",
                },
                outputFlag2,
                outputFileFlag,
                {
                  name: "--tenantName",
                  description:
                    "Label that identifies the stream workspace to return",
                  args: { name: "tenantName" },
                },
                versionFlag16,
              ],
            },
            {
              name: [
                "getWorkspacePrivateEndpoint",
                "getGroupStreamsWorkspacePrivateEndpoint",
              ],
              description:
                "Returns one private endpoint registered for Atlas Stream Processing in the specified project",
              options: [
                {
                  name: "--endpointId",
                  description: "Unique identifier of your VPC endpoint",
                  args: { name: "endpointId" },
                },
                envelopeFlag,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                versionFlag17,
              ],
            },
            {
              name: [
                "listActivePeeringConnections",
                "listGroupStreamActiveVpcPeeringConnections",
              ],
              description:
                "Returns a list of active incoming VPC Peering Connections",
              options: [
                envelopeFlag,
                groupIdFlag,
                itemsPerPageFlag,
                outputFlag2,
                outputFileFlag,
                pageNumFlag,
                prettyFlag,
                versionFlag6,
              ],
            },
            {
              name: [
                "listFailoverConnections",
                "listGroupStreamConnectionFailoverConnections",
              ],
              description:
                "Returns all failover connections for the specified connection in a stream workspace",
              options: [
                connectionNameFlag,
                envelopeFlag,
                groupIdFlag,
                itemsPerPageFlag,
                outputFlag2,
                outputFileFlag,
                pageNumFlag,
                prettyFlag,
                tenantNameFlag2,
                versionFlag,
              ],
            },
            {
              name: ["listStreamConnections", "listGroupStreamConnections"],
              description:
                "Returns all connections of the stream instance for the specified project",
              options: [
                envelopeFlag,
                groupIdFlag,
                itemsPerPageFlag,
                outputFlag2,
                outputFileFlag,
                pageNumFlag,
                prettyFlag,
                tenantNameFlag2,
                versionFlag16,
              ],
            },
            {
              name: [
                "listPrivateLinkConnections",
                "listGroupStreamPrivateLinkConnections",
              ],
              description:
                "Returns all Private Link connections for the specified project",
              options: [
                envelopeFlag,
                groupIdFlag,
                itemsPerPageFlag,
                outputFlag2,
                outputFileFlag,
                pageNumFlag,
                prettyFlag,
                versionFlag16,
              ],
            },
            {
              name: [
                "listVpcPeeringConnections",
                "listGroupStreamVpcPeeringConnections",
              ],
              description: "Returns a list of incoming VPC Peering Connections",
              options: [
                envelopeFlag,
                groupIdFlag,
                itemsPerPageFlag,
                outputFlag2,
                outputFileFlag,
                pageNumFlag,
                prettyFlag,
                {
                  name: "--requesterAccountId",
                  description: "The Account ID of the VPC Peering connection/s",
                  args: { name: "requesterAccountId" },
                },
                versionFlag16,
              ],
            },
            {
              name: ["listStreamWorkspaces", "listGroupStreamWorkspaces"],
              description:
                "Returns all stream workspaces for the specified project",
              options: [
                envelopeFlag,
                groupIdFlag,
                itemsPerPageFlag,
                outputFlag2,
                outputFileFlag,
                pageNumFlag,
                prettyFlag,
                versionFlag16,
              ],
            },
            {
              name: [
                "listWorkspacePrivateEndpoints",
                "listGroupStreamsWorkspacePrivateEndpoints",
              ],
              description:
                "Returns all private endpoints registered for Atlas Stream Processing in the specified project",
              options: [
                envelopeFlag,
                groupIdFlag,
                includeCountFlag,
                itemsPerPageFlag,
                outputFlag2,
                outputFileFlag,
                pageNumFlag,
                prettyFlag,
                versionFlag17,
              ],
            },
            {
              name: [
                "rejectVpcPeeringConnection",
                "rejectGroupStreamVpcPeeringConnection",
              ],
              description:
                "Requests the rejection of an incoming VPC Peering connection",
              options: [
                envelopeFlag,
                groupIdFlag,
                idFlag2,
                outputFlag2,
                outputFileFlag,
                versionFlag16,
              ],
            },
            {
              name: ["startStreamProcessor", "startGroupStreamProcessor"],
              description:
                "Start a Stream Processor within the specified stream workspace",
              options: [
                envelopeFlag,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                processorNameFlag,
                tenantNameFlag2,
                versionFlag5,
              ],
            },
            {
              name: [
                "startStreamProcessorWith",
                "startGroupStreamProcessorWith",
              ],
              description:
                "Start a Stream Processor within the specified stream workspace",
              options: [
                envelopeFlag,
                fileFlag3,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                processorNameFlag,
                tenantNameFlag2,
                versionFlag,
              ],
            },
            {
              name: ["stopStreamProcessor", "stopGroupStreamProcessor"],
              description:
                "Stop a Stream Processor within the specified stream workspace",
              options: [
                envelopeFlag,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                processorNameFlag,
                tenantNameFlag2,
                versionFlag5,
              ],
            },
            {
              name: ["updateStreamConnection", "updateGroupStreamConnection"],
              description:
                "Update one connection for the specified stream workspace in the specified project",
              options: [
                connectionNameFlag,
                envelopeFlag,
                fileFlag3,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                tenantNameFlag2,
                versionFlag16,
              ],
            },
            {
              name: [
                "updateStreamFailoverConnection",
                "updateGroupStreamConnectionFailoverConnection",
              ],
              description:
                "Update one failover connection of the specified stream workspace",
              options: [
                connectionNameFlag,
                envelopeFlag,
                failoverConnectionIdFlag,
                fileFlag3,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                tenantNameFlag2,
                versionFlag,
              ],
            },
            {
              name: [
                "updatePrivateLinkConnection",
                "updateGroupStreamPrivateLinkConnection",
              ],
              description:
                "Updates one Private Link connection in the specified project",
              options: [
                connectionIdFlag,
                envelopeFlag,
                fileFlag3,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag,
              ],
            },
            {
              name: ["updateStreamProcessor", "updateGroupStreamProcessor"],
              description:
                "Modify one existing Stream Processor within the specified stream workspace",
              options: [
                envelopeFlag,
                fileFlag3,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                processorNameFlag,
                tenantNameFlag2,
                versionFlag5,
              ],
            },
            {
              name: ["updateStreamWorkspace", "updateGroupStreamWorkspace"],
              description:
                "Update one stream workspace in the specified project",
              options: [
                envelopeFlag,
                fileFlag3,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                {
                  name: "--tenantName",
                  description:
                    "Label that identifies the stream workspace to update",
                  args: { name: "tenantName" },
                },
                versionFlag16,
              ],
            },
            {
              name: [
                "withStreamSampleConnections",
                "withGroupStreamSampleConnections",
              ],
              description:
                "Creates one stream workspace in the specified project with sample connections",
              options: [
                envelopeFlag,
                fileFlag3,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag11,
              ],
            },
          ],
        },
        {
          name: "teams",
          description: "Returns, adds, edits, or removes teams",
          subcommands: [
            {
              name: "addGroupTeams",
              description: "Adds one or more teams to the specified project",
              options: [
                envelopeFlag,
                fileFlag3,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag2,
              ],
            },
            {
              name: "createOrgTeam",
              description: "Creates one team in the specified organization",
              options: [
                envelopeFlag,
                fileFlag3,
                orgIdFlag2,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag2,
              ],
            },
            {
              name: "deleteOrgTeam",
              description:
                "Removes one team specified using its unique 24-hexadecimal digit identifier from the organization specified using its unique 24-hexadecimal digit identifier",
              options: [
                envelopeFlag,
                orgIdFlag2,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                {
                  name: "--teamId",
                  description:
                    "Unique 24-hexadecimal digit string that identifies the team that you want to delete",
                  args: { name: "teamId" },
                },
                versionFlag2,
              ],
            },
            {
              name: "getGroupTeam",
              description:
                "Returns one team to which the authenticated user has access in the project specified using its unique 24-hexadecimal digit identifier",
              options: [
                envelopeFlag,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                {
                  name: "--teamId",
                  description:
                    "Unique 24-hexadecimal digit string that identifies the team for which you want to get",
                  args: { name: "teamId" },
                },
                versionFlag2,
              ],
            },
            {
              name: "getOrgTeam",
              description:
                "Returns one team that you identified using its unique 24-hexadecimal digit ID",
              options: [
                envelopeFlag,
                orgIdFlag2,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                {
                  name: "--teamId",
                  description:
                    "Unique 24-hexadecimal digit string that identifies the team whose information you want to return",
                  args: { name: "teamId" },
                },
                versionFlag2,
              ],
            },
            {
              name: ["getTeamByName", "getOrgTeamByName"],
              description:
                "Returns one team that you identified using its human-readable name",
              options: [
                envelopeFlag,
                orgIdFlag2,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                {
                  name: "--teamName",
                  description:
                    "Name of the team whose information you want to return",
                  args: { name: "teamName" },
                },
                versionFlag2,
              ],
            },
            {
              name: "listGroupTeams",
              description:
                "Returns all teams to which the authenticated user has access in the project specified using its unique 24-hexadecimal digit identifier",
              options: [
                envelopeFlag,
                groupIdFlag,
                includeCountFlag,
                itemsPerPageFlag,
                outputFlag2,
                outputFileFlag,
                pageNumFlag,
                prettyFlag,
                versionFlag2,
              ],
            },
            {
              name: "listOrgTeams",
              description:
                "Returns all teams that belong to the specified organization",
              options: [
                envelopeFlag,
                includeCountFlag,
                itemsPerPageFlag,
                orgIdFlag2,
                outputFlag2,
                outputFileFlag,
                pageNumFlag,
                prettyFlag,
                versionFlag2,
              ],
            },
            {
              name: "removeGroupTeam",
              description:
                "Removes one team specified using its unique 24-hexadecimal digit identifier from the project specified using its unique 24-hexadecimal digit identifier",
              options: [
                envelopeFlag,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                {
                  name: "--teamId",
                  description:
                    "Unique 24-hexadecimal digit string that identifies the team that you want to remove from the specified project",
                  args: { name: "teamId" },
                },
                versionFlag2,
              ],
            },
            {
              name: "renameOrgTeam",
              description: "Renames one team in the specified organization",
              options: [
                envelopeFlag,
                fileFlag3,
                orgIdFlag2,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                {
                  name: "--teamId",
                  description:
                    "Unique 24-hexadecimal digit string that identifies the team that you want to rename",
                  args: { name: "teamId" },
                },
                versionFlag2,
              ],
            },
            {
              name: "updateGroupTeam",
              description:
                "Updates the project roles assigned to the specified team",
              options: [
                envelopeFlag,
                fileFlag3,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                {
                  name: "--teamId",
                  description:
                    "Unique 24-hexadecimal digit string that identifies the team for which you want to update roles",
                  args: { name: "teamId" },
                },
                versionFlag2,
              ],
            },
          ],
        },
        {
          name: "thirdPartyIntegrations",
          description:
            "Returns, adds, edits, and removes third-party service integration configurations",
          subcommands: [
            {
              name: "createGroupIntegration",
              description:
                "Adds the settings for configuring one third-party service integration",
              options: [
                envelopeFlag,
                fileFlag3,
                groupIdFlag,
                includeCountFlag,
                integrationTypeFlag,
                itemsPerPageFlag,
                outputFlag2,
                outputFileFlag,
                pageNumFlag,
                prettyFlag,
                versionFlag2,
              ],
            },
            {
              name: "deleteGroupIntegration",
              description:
                "Removes the settings that permit configuring one third-party service integration",
              options: [
                envelopeFlag,
                groupIdFlag,
                integrationTypeFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag2,
              ],
            },
            {
              name: "getGroupIntegration",
              description:
                "Returns the settings for configuring integration with one third-party service",
              options: [
                envelopeFlag,
                groupIdFlag,
                integrationTypeFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                versionFlag2,
              ],
            },
            {
              name: "listGroupIntegrations",
              description:
                "Returns the settings that permit integrations with all configured third-party services",
              options: [
                envelopeFlag,
                groupIdFlag,
                includeCountFlag,
                itemsPerPageFlag,
                outputFlag2,
                outputFileFlag,
                pageNumFlag,
                prettyFlag,
                versionFlag2,
              ],
            },
            {
              name: "updateGroupIntegration",
              description:
                "Updates the settings for configuring integration with one third-party service",
              options: [
                envelopeFlag,
                fileFlag3,
                groupIdFlag,
                includeCountFlag,
                integrationTypeFlag,
                itemsPerPageFlag,
                outputFlag2,
                outputFileFlag,
                pageNumFlag,
                prettyFlag,
                versionFlag2,
              ],
            },
          ],
        },
        {
          name: "x509Authentication",
          description:
            "Returns, edits, and removes user-managed X.509 configurations",
          subcommands: [
            {
              name: ["createDatabaseUserCert", "createGroupDatabaseUserCert"],
              description:
                "Generates one X.509 certificate for the specified MongoDB user",
              options: [
                envelopeFlag,
                fileFlag3,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                prettyFlag,
                {
                  name: "--username",
                  description:
                    "Human-readable label that represents the MongoDB database user account for whom to create a certificate",
                  args: { name: "username" },
                },
                versionFlag2,
              ],
            },
            {
              name: [
                "disableSecurityCustomerX509",
                "disableGroupUserSecurityCustomerX509",
              ],
              description:
                "Clears the customer-managed X.509 settings on a project, including the uploaded Certificate Authority, which disables self-managed X.509",
              options: [
                envelopeFlag,
                groupIdFlag,
                outputFlag2,
                outputFileFlag,
                versionFlag2,
              ],
            },
            {
              name: ["listDatabaseUserCerts", "listGroupDatabaseUserCerts"],
              description:
                "Returns all unexpired X.509 certificates for the specified MongoDB user",
              options: [
                envelopeFlag,
                groupIdFlag,
                includeCountFlag,
                itemsPerPageFlag,
                outputFlag2,
                outputFileFlag,
                pageNumFlag,
                prettyFlag,
                {
                  name: "--username",
                  description:
                    "Human-readable label that represents the MongoDB database user account whose certificates you want to return",
                  args: { name: "username" },
                },
                versionFlag2,
              ],
            },
          ],
        },
      ],
    },
    {
      name: "kubernetes",
      description: "Manage Kubernetes resources",
      subcommands: [
        {
          name: "config",
          description: "Manage Kubernetes configuration resources",
          subcommands: [
            {
              name: "apply",
              description:
                "Generate and apply Kubernetes configuration resources for use with Atlas Kubernetes Operator",
              options: [
                {
                  name: "--clusterName",
                  description:
                    "One or more comma separated cluster names to import",
                  args: { name: "clusterName" },
                  isRepeatable: true,
                },
                {
                  name: "--dataFederationName",
                  description:
                    "One or more comma separated data federation names to import",
                  args: { name: "dataFederationName" },
                  isRepeatable: true,
                },
                {
                  name: "--independentResources",
                  description:
                    "Flag that makes the generated resources that support independent usage, to use external IDs rather than Kubernetes references",
                },
                {
                  name: "--kubeContext",
                  description: "Name of the kubeconfig context to use",
                  args: { name: "kubeContext" },
                },
                {
                  name: "--kubeconfig",
                  description:
                    "Path to the kubeconfig file to use for CLI requests",
                  args: { name: "kubeconfig", template: "filepaths" },
                },
                {
                  name: "--operatorVersion",
                  description:
                    "Version of Atlas Kubernetes Operator to generate resources for",
                  args: { name: "operatorVersion" },
                },
                orgIdFlag,
                projectIdFlag,
                targetNamespaceFlag,
              ],
            },
            {
              name: "generate",
              description:
                "Generate Kubernetes configuration resources for use with Atlas Kubernetes Operator",
              options: [
                {
                  name: "--clusterName",
                  description:
                    "One or more comma separated cluster names to import",
                  args: { name: "clusterName" },
                  isRepeatable: true,
                },
                {
                  name: "--crdType",
                  description: "Type of the CRD to generate",
                  args: {
                    name: "crdType",
                    suggestions: ["curated", "generated"],
                    default: "curated",
                  },
                },
                {
                  name: "--dataFederationName",
                  description:
                    "One or more comma separated data federation names to import",
                  args: { name: "dataFederationName" },
                  isRepeatable: true,
                },
                {
                  name: "--includeSecrets",
                  description:
                    "Flag that generates kubernetes secrets with data for projects, users, deployments entities",
                },
                {
                  name: "--independentResources",
                  description:
                    "Flag that makes the generated resources that support independent usage, to use external IDs rather than Kubernetes references",
                },
                {
                  name: "--operatorVersion",
                  description:
                    "Version of Atlas Kubernetes Operator to generate resources for",
                  args: { name: "operatorVersion", default: "2.16.0" },
                },
                orgIdFlag,
                projectIdFlag,
                targetNamespaceFlag,
              ],
            },
          ],
        },
        {
          name: "dry-run",
          description:
            "Deploy and run Atlas Kubernetes Operator in dry-run mode",
          options: [
            {
              name: "--operatorVersion",
              description:
                "Version of Atlas Kubernetes Operator to generate resources for",
              args: { name: "operatorVersion", default: "2.16.0" },
            },
            orgIdFlag,
            targetNamespaceFlag,
            {
              name: "--watch",
              description:
                "Flag that indicates whether to watch the command until it completes its execution or the watch times out",
            },
            {
              name: "--watchNamespace",
              description:
                "List that contains namespaces that the operator will listen to",
              args: { name: "watchNamespace" },
              isRepeatable: true,
            },
            {
              name: "--watchTimeout",
              description: "Time in seconds until a watch times out",
              args: { name: "watchTimeout", default: "120" },
            },
          ],
        },
        {
          name: "operator",
          description: "Manage Atlas Kubernetes Operator",
          subcommands: [
            {
              name: "install",
              description: "Install Atlas Kubernetes Operator to a cluster",
              options: [
                {
                  name: "--atlasGov",
                  description:
                    "Flag that indicates whether to configure Atlas for Government as a target of the operator",
                },
                {
                  name: "--configOnly",
                  description:
                    "Flag that indicates whether to generate only the operator configuration files without installing the Operator",
                },
                {
                  name: "--import",
                  description:
                    "Flag that indicates whether to import existing Atlas resources into the cluster for the operator to manage",
                },
                {
                  name: "--ipAccessList",
                  description:
                    "A comma-separated list of IP or CIDR block to allowlist for Operator to communicate with Atlas APIs",
                  args: { name: "ipAccessList" },
                },
                {
                  name: "--kubeContext",
                  description: "Name of the kubeconfig context to use",
                  args: { name: "kubeContext" },
                },
                {
                  name: "--kubeconfig",
                  description:
                    "Path to the kubeconfig file to use for CLI requests",
                  args: { name: "kubeconfig", template: "filepaths" },
                },
                {
                  name: "--operatorVersion",
                  description: "Version of the operator to install",
                  args: { name: "operatorVersion" },
                },
                orgIdFlag,
                {
                  name: "--projectName",
                  description:
                    "Name of the project to create or use with the installed operator",
                  args: { name: "projectName" },
                },
                {
                  name: "--resourceDeletionProtection",
                  description:
                    "Toggle atlas operator deletion protection for resources like Projects, Deployments, etc",
                },
                {
                  name: "--subresourceDeletionProtection",
                  description:
                    "Toggle atlas operator deletion protection for subresources like Alerts, Integrations, etc",
                },
                {
                  name: "--targetNamespace",
                  description: "Namespace where to install the operator",
                  args: { name: "targetNamespace" },
                },
                {
                  name: "--watchNamespace",
                  description:
                    "List that contains namespaces that the operator will listen to",
                  args: { name: "watchNamespace" },
                  isRepeatable: true,
                },
              ],
            },
          ],
        },
      ],
      options: [
        {
          name: ["--profile", "-P"],
          description:
            "Name of the profile to use from your configuration file",
          isPersistent: true,
          args: { name: "profile" },
        },
      ],
    },
    { name: "local", description: "Manage MongoDB Atlas local instances" },
    {
      name: "plugin",
      description: "Manage plugins for the AtlasCLI",
      subcommands: [
        {
          name: "list",
          description: "Returns a list of all installed plugins",
        },
        {
          name: "install",
          description: "Install Atlas CLI plugin from a GitHub repository",
          options: [
            {
              name: "--skipSignatureVerification",
              description: "Skip signature verification",
            },
          ],
          args: {
            name: "github-owner/github-repository-name",
            isOptional: true,
          },
        },
        {
          name: "uninstall",
          description: "Uninstall Atlas CLI plugin",
          args: { name: "plugin", isOptional: true },
        },
        {
          name: "update",
          description: "Update Atlas CLI plugin",
          options: [
            { name: "--all", description: "Update all plugins" },
            {
              name: "--skipSignatureVerification",
              description: "Skip signature verification",
            },
          ],
          args: { name: "plugin", isOptional: true },
        },
      ],
    },
    {
      name: "completion",
      description: "Generate the autocompletion script for the specified shell",
      subcommands: [
        {
          name: "bash",
          description: "Generate the autocompletion script for bash",
          options: [noDescriptionsFlag],
        },
        {
          name: "zsh",
          description: "Generate the autocompletion script for zsh",
          options: [noDescriptionsFlag],
        },
        {
          name: "fish",
          description: "Generate the autocompletion script for fish",
          options: [noDescriptionsFlag],
        },
        {
          name: "powershell",
          description: "Generate the autocompletion script for powershell",
          options: [noDescriptionsFlag],
        },
      ],
    },
    { name: "help", description: "Help about any command" },
    {
      name: ["dataLakes", "datalakes", "dataLake", "datalake"],
      description: "Manage Atlas Data Lakes (use 'atlas dataFederation')",
      deprecated: true,
    },
    {
      name: "login",
      description: "Log in to the CLI (use 'atlas auth login')",
      deprecated: true,
    },
    {
      name: "logout",
      description: "Log out of the CLI (use 'atlas auth logout')",
      deprecated: true,
    },
    {
      name: "whoami",
      description: "Show the authenticated account (use 'atlas auth whoami')",
      deprecated: true,
    },
  ],
  options: [
    {
      name: ["--profile", "-P"],
      description: "Name of the profile to use from your configuration file",
      isPersistent: true,
      args: { name: "profile" },
    },
    { name: ["--version", "-v"], description: "Version for atlas" },
  ],
};

export default completionSpec;
