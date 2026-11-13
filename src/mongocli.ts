// MongoDB CLI v2.0.11 (GitHub release, 2026-11-12). Source: `--help` on every
// subcommand of the release binary, walked with a Cobra help parser.

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
const projectIdFlag: Fig.Option = {
  name: "--projectId",
  description: "Hexadecimal string that identifies the project to use",
  args: { name: "projectId" },
};
const processNameFlag: Fig.Option = {
  name: "--processName",
  description:
    "Unique identifier for the host of a MongoDB process in the following format: {hostname}:{port}",
  args: { name: "processName" },
  isRepeatable: true,
};
const apiKeyFlag: Fig.Option = {
  name: "--apiKey",
  description: "Datadog API Key, Opsgenie API Key, or VictorOps API key",
  args: { name: "apiKey" },
};
const enabledFlag: Fig.Option = {
  name: "--enabled",
  description: "Flag that indicates whether to enable the alert configuration",
};
const eventFlag: Fig.Option = {
  name: "--event",
  description: "Type of event that triggered the alert",
  args: { name: "event" },
};
const matcherFieldNameFlag: Fig.Option = {
  name: "--matcherFieldName",
  description: "Name of the field in the target object to match on",
  args: { name: "matcherFieldName" },
};
const matcherOperatorFlag: Fig.Option = {
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
};
const matcherValueFlag: Fig.Option = {
  name: "--matcherValue",
  description: "Value to test with the specified operator",
  args: { name: "matcherValue" },
};
const metricModeFlag: Fig.Option = {
  name: "--metricMode",
  description:
    "Option that indicates whether Atlas computes the current metric value as an average",
  args: { name: "metricMode" },
};
const metricNameFlag: Fig.Option = {
  name: "--metricName",
  description:
    "Name of the metric against which this command checks the configured alert",
  args: { name: "metricName" },
};
const metricOperatorFlag: Fig.Option = {
  name: "--metricOperator",
  description:
    "Comparison operator to apply when checking the current metric value",
  args: { name: "metricOperator", suggestions: ["LESS_THAN", "GREATER_THAN"] },
};
const metricThresholdFlag: Fig.Option = {
  name: "--metricThreshold",
  description: "Threshold value outside of which an alert will be triggered",
  args: { name: "metricThreshold" },
};
const metricUnitsFlag: Fig.Option = {
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
};
const notificationChannelNameFlag: Fig.Option = {
  name: "--notificationChannelName",
  description: "Slack channel name",
  args: { name: "notificationChannelName" },
};
const notificationDelayMinFlag: Fig.Option = {
  name: "--notificationDelayMin",
  description:
    "Number of minutes to wait after an alert condition is detected before sending out the first notification",
  args: { name: "notificationDelayMin" },
};
const notificationEmailAddressFlag: Fig.Option = {
  name: "--notificationEmailAddress",
  description: "Email address to which alert notifications are sent",
  args: { name: "notificationEmailAddress" },
};
const notificationEmailEnabledFlag: Fig.Option = {
  name: "--notificationEmailEnabled",
  description: "Flag that enables email notifications",
};
const notificationIntervalMinFlag: Fig.Option = {
  name: "--notificationIntervalMin",
  description:
    "Number of minutes to wait between successive notifications for unacknowledged alerts that are not resolved",
  args: { name: "notificationIntervalMin" },
};
const notificationMobileNumberFlag: Fig.Option = {
  name: "--notificationMobileNumber",
  description: "Mobile number to which alert notifications are sent",
  args: { name: "notificationMobileNumber" },
};
const notificationRegionFlag: Fig.Option = {
  name: "--notificationRegion",
  description: "Region that indicates which API URL to use",
  args: { name: "notificationRegion" },
};
const notificationServiceKeyFlag: Fig.Option = {
  name: "--notificationServiceKey",
  description: "PagerDuty service key",
  args: { name: "notificationServiceKey" },
};
const notificationSmsEnabledFlag: Fig.Option = {
  name: "--notificationSmsEnabled",
  description: "Flag that enables text message notifications",
};
const notificationTeamIdFlag: Fig.Option = {
  name: "--notificationTeamId",
  description: "Unique identifier of a team",
  args: { name: "notificationTeamId" },
};
const notificationTokenFlag: Fig.Option = {
  name: "--notificationToken",
  description: "Slack API token, or Bot token",
  args: { name: "notificationToken" },
};
const notificationTypeFlag: Fig.Option = {
  name: "--notificationType",
  description: "Type of alert notification",
  args: {
    name: "notificationType",
    suggestions: [
      "DATADOG",
      "EMAIL",
      "ORG",
      "OPS_GENIE",
      "PAGER_DUTY",
      "SLACK",
      "SMS",
      "USER",
      "VICTOR_OPS",
    ],
  },
};
const notificationUsernameFlag: Fig.Option = {
  name: "--notificationUsername",
  description: "Name of the Atlas user to which to send notifications",
  args: { name: "notificationUsername" },
};
const notificationVictorOpsRoutingKeyFlag: Fig.Option = {
  name: "--notificationVictorOpsRoutingKey",
  description: "Routing key associated with your Splunk On-Call account",
  args: { name: "notificationVictorOpsRoutingKey" },
};
const limitFlag: Fig.Option = {
  name: "--limit",
  description: "Number of items per results page, up to a maximum of 500",
  args: { name: "limit", default: "100" },
};
const pageFlag: Fig.Option = {
  name: "--page",
  description: "Page number that specifies a page of results",
  args: { name: "page", default: "1" },
};
const statusFlag: Fig.Option = {
  name: "--status",
  description: "State of the alert",
  args: {
    name: "status",
    suggestions: ["TRACKING", "OPEN", "CLOSED", "CANCELLED"],
  },
};
const commentFlag: Fig.Option = {
  name: "--comment",
  description: "Optional description or comment for the entry",
  args: { name: "comment" },
};
const clusterIdFlag: Fig.Option = {
  name: "--clusterId",
  description: "Unique identifier of the cluster",
  args: { name: "clusterId" },
};
const passwordFlag: Fig.Option = {
  name: "--password",
  description: "Password for the user",
  args: { name: "password" },
};
const usernameFlag: Fig.Option = {
  name: "--username",
  description: "Name that identifies the user",
  args: { name: "username" },
};
const authDBFlag: Fig.Option = {
  name: "--authDB",
  description: "Authentication database name",
  args: { name: "authDB", default: "admin" },
};
const maxDateFlag: Fig.Option = {
  name: "--maxDate",
  description: "Maximum created date",
  args: { name: "maxDate" },
};
const minDateFlag: Fig.Option = {
  name: "--minDate",
  description: "Minimum created date",
  args: { name: "minDate" },
};
const orgIdFlag: Fig.Option = {
  name: "--orgId",
  description: "Organization ID to use",
  args: { name: "orgId" },
};
const typeFlag: Fig.Option = {
  name: "--type",
  description: "Type of event that triggered the alert",
  args: { name: "type" },
  isRepeatable: true,
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
const typeFlag2: Fig.Option = {
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
};
const forceFlag2: Fig.Option = {
  name: "--force",
  description: "Flag that indicates whether to overwrite the destination file",
};
const outFlag: Fig.Option = {
  name: "--out",
  description: "Output file name",
  args: { name: "out", template: "filepaths" },
};
const fileFlag: Fig.Option = {
  name: ["--file", "-f"],
  description: "Path to the file that contains encrypted audit logs",
  args: { name: "file", template: "filepaths" },
};
const descFlag: Fig.Option = {
  name: "--desc",
  description: "Description of the API key",
  args: { name: "desc" },
};
const alertTypeFlag: Fig.Option = {
  name: "--alertType",
  description: "Alert types to silence during the maintenance window",
  args: {
    name: "alertType",
    suggestions: ["HOST", "REPLICA_SET", "CLUSTER", "AGENT", "BACKUP"],
  },
  isRepeatable: true,
};
const descFlag2: Fig.Option = {
  name: "--desc",
  description: "Description of the maintenance window",
  args: { name: "desc" },
};
const endDateFlag: Fig.Option = {
  name: "--endDate",
  description:
    "Timestamp in ISO 8601 date and time format in UTC when the maintenance window ends",
  args: { name: "endDate" },
};
const startDateFlag: Fig.Option = {
  name: "--startDate",
  description:
    "Timestamp in ISO 8601 date and time format in UTC when the maintenance window starts",
  args: { name: "startDate" },
};
const durationFlag: Fig.Option = {
  name: "--duration",
  description:
    "Length of time in milliseconds for which you want to return results",
  args: { name: "duration" },
};
const hostIdFlag: Fig.Option = {
  name: "--hostId",
  description: "Unique identifier for the host of a MongoDB process",
  args: { name: "hostId" },
};
const sinceFlag: Fig.Option = {
  name: "--since",
  description:
    "Date and time from which the query retrieves the suggested indexes",
  args: { name: "since" },
};
const emailFlag: Fig.Option = {
  name: "--email",
  description: "Email address for the user",
  args: { name: "email" },
};
const assignmentFlag: Fig.Option = {
  name: "--assignment",
  description:
    "Flag indicating whether this blockstore can be assigned backup jobs",
};
const encryptedCredentialsFlag: Fig.Option = {
  name: "--encryptedCredentials",
  description:
    "Flag indicating whether the username and password were encrypted using the credentials tool",
};
const labelFlag: Fig.Option = {
  name: "--label",
  description:
    "Array of tags to manage which backup jobs Ops Manager can assign to which blockstores",
  args: { name: "label" },
  isRepeatable: true,
};
const loadFactorFlag: Fig.Option = {
  name: "--loadFactor",
  description:
    "A positive, non-zero integer that expresses how much backup work this snapshot store should perform compared to another snapshot store",
  args: { name: "loadFactor" },
};
const maxCapacityGBFlag: Fig.Option = {
  name: "--maxCapacityGB",
  description: "Maximum amount of data in GB the blockstore can store",
  args: { name: "maxCapacityGB" },
};
const sslFlag: Fig.Option = {
  name: "--ssl",
  description:
    "Flag that indicates whether the blockstore accepts only connections encrypted using TLS",
};
const uriFlag: Fig.Option = {
  name: "--uri",
  description:
    "Comma-separated list of hosts in the <hostname:port> format for accessing the blockstore",
  args: { name: "uri" },
};
const writeConcernFlag: Fig.Option = {
  name: "--writeConcern",
  description: "Write concern for the blockstore",
  args: { name: "writeConcern" },
};
const awsAccessKeyFlag: Fig.Option = {
  name: "--awsAccessKey",
  description:
    "AWS Access Key ID that can access the Amazon S3 bucket specified in s3BucketName",
  args: { name: "awsAccessKey" },
};
const awsSecretKeyFlag: Fig.Option = {
  name: "--awsSecretKey",
  description:
    "AWS Secret Access Key that can access the Amazon S3 bucket specified in s3BucketName",
  args: { name: "awsSecretKey" },
};
const endDateFlag2: Fig.Option = {
  name: "--endDate",
  description:
    "Timestamp, in ISO 8601 date format, when the list of host assignments ends",
  args: { name: "endDate" },
};
const startDateFlag2: Fig.Option = {
  name: "--startDate",
  description:
    "Timestamp, in ISO 8601 date format, when the list of host assignments starts",
  args: { name: "startDate" },
};
const awsAuthModeFlag: Fig.Option = {
  name: "--awsAuthMode",
  description: "AWS authentication mode for standby cluster commands",
  args: {
    name: "awsAuthMode",
    suggestions: ["staticCredentials", "assumeRole", "credentialsChain"],
  },
};
const awsProfileFlag: Fig.Option = {
  name: "--awsProfile",
  description:
    "Named AWS profile from the shared AWS config files to use with the default credentials chain, including AWS SSO profiles after aws sso login",
  args: { name: "awsProfile" },
};
const awsRegionFlag: Fig.Option = {
  name: "--awsRegion",
  description:
    "AWS region of the Amazon S3 bucket that holds the standby cluster DR state file",
  args: { name: "awsRegion" },
};
const awsRoleArnFlag: Fig.Option = {
  name: "--awsRoleArn",
  description: "AWS IAM role ARN to assume for standby cluster commands",
  args: { name: "awsRoleArn" },
};
const s3BucketEndpointFlag: Fig.Option = {
  name: "--s3BucketEndpoint",
  description:
    "URL of an S3-compatible endpoint for the standby cluster DR state file",
  args: { name: "s3BucketEndpoint" },
};
const s3BucketNameFlag: Fig.Option = {
  name: "--s3BucketName",
  description:
    "Name of the Amazon S3 bucket that holds the standby cluster DR state file",
  args: { name: "s3BucketName" },
};
const s3KeyFlag: Fig.Option = {
  name: "--s3Key",
  description:
    "Object key of the standby cluster DR state file, for example <clusterPrefix>/dr_status_<componentId>.json",
  args: { name: "s3Key" },
};
const roleFlag: Fig.Option = {
  name: "--role",
  description: "Role or roles that you want to assign to the API key",
  args: { name: "role" },
  isRepeatable: true,
};
const roleFlag2: Fig.Option = {
  name: "--role",
  description: "User's roles for the associated organization",
  args: { name: "role" },
  isRepeatable: true,
};
const teamIdFlag: Fig.Option = {
  name: "--teamId",
  description: "Unique 24-digit string that identifies the team",
  args: { name: "teamId" },
};
const noDescriptionsFlag: Fig.Option = {
  name: "--no-descriptions",
  description: "Disable completion descriptions",
};

const completionSpec: Fig.Spec = {
  name: "mongocli",
  description: "CLI tool to manage your MongoDB Cloud",
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
          name: ["delete", "rm"],
          description: "Delete a profile",
          options: [forceFlag],
          args: { name: "name" },
        },
        {
          name: "edit",
          description: "Opens the config file with the default text editor",
        },
      ],
      options: [
        {
          name: "--service",
          description: "Type of MongoDB service",
          args: {
            name: "service",
            suggestions: ["cloud-manager", "ops-manager"],
            default: "cloud-manager",
          },
        },
      ],
    },
    {
      name: ["cloud-manager", "cm"],
      description: "MongoDB Cloud Manager operations",
      subcommands: [
        {
          name: ["clusters", "cluster"],
          description: "Manage clusters for your project",
          subcommands: [
            {
              name: ["list", "ls"],
              description: "List clusters for your project",
              options: [outputFlag, projectIdFlag],
            },
            {
              name: "describe",
              description: "Describe a cluster",
              options: [outputFlag, projectIdFlag],
              args: { name: "id|name" },
            },
            {
              name: "create",
              description: "Create a MongoDB cluster",
              options: [
                {
                  name: ["--file", "-f"],
                  description: "Filename to use to create the cluster",
                  args: { name: "file", template: "filepaths" },
                },
                projectIdFlag,
              ],
            },
            {
              name: "update",
              description: "Update a MongoDB cluster",
              options: [
                {
                  name: ["--file", "-f"],
                  description: "Filename to use to update the cluster",
                  args: { name: "file", template: "filepaths" },
                },
                projectIdFlag,
              ],
            },
            {
              name: ["delete", "rm"],
              description: "Completely removes a cluster from your project",
              options: [forceFlag, projectIdFlag],
              args: { name: "name" },
            },
            {
              name: "apply",
              description: "Apply a new cluster configuration for your project",
              options: [
                {
                  name: ["--file", "-f"],
                  description:
                    "Filename to use to change the automation config",
                  args: { name: "file", template: "filepaths" },
                },
                projectIdFlag,
              ],
            },
            {
              name: ["indexes", "index"],
              description: "Manage cluster rolling indexes for your project",
              subcommands: [
                {
                  name: "create",
                  description:
                    "Create a rolling index for your MongoDB cluster",
                  options: [
                    {
                      name: "--MaxVariable",
                      description:
                        "Flag that determines which characters to ignore",
                      args: { name: "MaxVariable" },
                    },
                    {
                      name: "--alternate",
                      description:
                        "Flag that determines whether collation should consider whitespace and punctuation as base characters during comparisons",
                      args: { name: "alternate" },
                    },
                    {
                      name: "--backwards",
                      description:
                        "Flag that indicates whether strings with diacritics sort from the back to the front of the string",
                    },
                    {
                      name: "--caseFirst",
                      description:
                        "Flag that determines the sort order of case differences during tertiary level comparisons",
                      args: { name: "caseFirst" },
                    },
                    {
                      name: "--caseLevel",
                      description: "Flag that enables index case comparison",
                    },
                    {
                      name: "--collectionName",
                      description: "Name of the collection",
                      args: { name: "collectionName" },
                    },
                    {
                      name: "--db",
                      description: "Name of the database",
                      args: { name: "db" },
                    },
                    {
                      name: "--key",
                      description:
                        "Field to be indexed and the type of index in the following format: field:type",
                      args: { name: "key" },
                      isRepeatable: true,
                    },
                    {
                      name: "--locale",
                      description: "Locale that the ICU defines",
                      args: { name: "locale" },
                    },
                    {
                      name: "--normalization",
                      description:
                        "Flag that indicates whether collation checks if text requires normalization and performs normalization to compare text",
                    },
                    {
                      name: "--numericOrdering",
                      description:
                        "Flag that indicates that collation compares numeric strings as numbers",
                    },
                    projectIdFlag,
                    {
                      name: "--rsName",
                      description: "Replica set that the index is built on",
                      args: { name: "rsName" },
                    },
                    {
                      name: "--sparse",
                      description: "Flag that creates a sparse index",
                    },
                    {
                      name: "--strength",
                      description: "Level of comparison to perform",
                      args: { name: "strength" },
                    },
                  ],
                  args: { name: "indexName", isOptional: true },
                },
              ],
            },
            {
              name: "unmanage",
              description: "Stop managing a cluster via automation",
              options: [forceFlag, projectIdFlag],
              args: { name: "name" },
            },
            {
              name: "restart",
              description: "Restart a cluster for your project",
              options: [forceFlag, processNameFlag, projectIdFlag],
              args: { name: "clusterName" },
            },
            {
              name: "startup",
              description: "Start up a cluster for your project",
              options: [forceFlag, processNameFlag, projectIdFlag],
              args: { name: "clusterName" },
            },
            {
              name: "shutdown",
              description: "Shutdown a cluster for your project",
              options: [forceFlag, processNameFlag, projectIdFlag],
              args: { name: "clusterName" },
            },
            {
              name: ["reclaimFreeSpace", "rfs"],
              description: "Reclaim unused space for a cluster using compact",
              options: [
                forceFlag,
                processNameFlag,
                projectIdFlag,
                {
                  name: "--timestamp",
                  description:
                    "Timestamp in ISO 8601 format when the service reclaims the space",
                  args: { name: "timestamp" },
                },
              ],
              args: { name: "clusterName" },
            },
            {
              name: "resync",
              description: "Start an initial sync for a cluster or process",
              options: [
                forceFlag,
                processNameFlag,
                projectIdFlag,
                {
                  name: "--timestamp",
                  description:
                    "Timestamp in ISO 8601 format when the sync starts",
                  args: { name: "timestamp" },
                },
              ],
              args: { name: "clusterName" },
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
                    apiKeyFlag,
                    enabledFlag,
                    eventFlag,
                    matcherFieldNameFlag,
                    matcherOperatorFlag,
                    matcherValueFlag,
                    metricModeFlag,
                    metricNameFlag,
                    metricOperatorFlag,
                    metricThresholdFlag,
                    metricUnitsFlag,
                    notificationChannelNameFlag,
                    notificationDelayMinFlag,
                    notificationEmailAddressFlag,
                    notificationEmailEnabledFlag,
                    notificationIntervalMinFlag,
                    notificationMobileNumberFlag,
                    notificationRegionFlag,
                    notificationServiceKeyFlag,
                    notificationSmsEnabledFlag,
                    notificationTeamIdFlag,
                    notificationTokenFlag,
                    notificationTypeFlag,
                    notificationUsernameFlag,
                    notificationVictorOpsRoutingKeyFlag,
                    outputFlag,
                    projectIdFlag,
                  ],
                },
                {
                  name: ["list", "ls"],
                  description:
                    "Returns all alert configurations for your project",
                  options: [limitFlag, outputFlag, pageFlag, projectIdFlag],
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
                    apiKeyFlag,
                    enabledFlag,
                    eventFlag,
                    matcherFieldNameFlag,
                    matcherOperatorFlag,
                    matcherValueFlag,
                    metricModeFlag,
                    metricNameFlag,
                    metricOperatorFlag,
                    metricThresholdFlag,
                    metricUnitsFlag,
                    notificationChannelNameFlag,
                    notificationDelayMinFlag,
                    notificationEmailAddressFlag,
                    notificationEmailEnabledFlag,
                    notificationIntervalMinFlag,
                    notificationMobileNumberFlag,
                    notificationRegionFlag,
                    notificationServiceKeyFlag,
                    notificationSmsEnabledFlag,
                    notificationTeamIdFlag,
                    notificationTokenFlag,
                    notificationTypeFlag,
                    notificationUsernameFlag,
                    notificationVictorOpsRoutingKeyFlag,
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
                outputFlag,
                pageFlag,
                projectIdFlag,
                statusFlag,
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
            {
              name: "global",
              description:
                "Retrieves all the global alerts for the specified Ops Manager project",
              subcommands: [
                {
                  name: ["list", "ls"],
                  description:
                    "Returns all global alerts for the specified Ops Manager project",
                  options: [limitFlag, outputFlag, pageFlag, statusFlag],
                },
              ],
            },
          ],
        },
        {
          name: ["backups", "backup"],
          description: "Manage continuous backups for your project",
          subcommands: [
            {
              name: ["snapshots", "snapshot"],
              description: "Manage backup snapshots for your project",
              subcommands: [
                {
                  name: ["list", "ls"],
                  description: "List snapshots for a project and cluster",
                  options: [limitFlag, outputFlag, pageFlag, projectIdFlag],
                  args: { name: "clusterId" },
                },
                {
                  name: "schedule",
                  description: "Manage backup snapshot schedules for a cluster",
                  subcommands: [
                    {
                      name: ["describe", "get"],
                      description: "Describe a snapshot schedule for a cluster",
                      options: [clusterIdFlag, outputFlag, projectIdFlag],
                    },
                    {
                      name: "update",
                      description: "Update a snapshot schedule for a cluster",
                      options: [
                        {
                          name: "--clusterCheckpointIntervalMin",
                          description:
                            "Number of minutes between successive cluster checkpoints",
                          args: {
                            name: "clusterCheckpointIntervalMin",
                            suggestions: ["15", "30", "60"],
                          },
                        },
                        clusterIdFlag,
                        {
                          name: "--dailySnapshotRetentionDays",
                          description:
                            "Number of days to retain daily snapshots",
                          args: { name: "dailySnapshotRetentionDays" },
                        },
                        {
                          name: "--monthlySnapshotRetentionMonths",
                          description:
                            "Number of months to retain monthly snapshots",
                          args: { name: "monthlySnapshotRetentionMonths" },
                        },
                        outputFlag,
                        {
                          name: "--pointInTimeWindowHours",
                          description:
                            "Number of hours in the past for which MongoDB should create a point-in-time snapshot",
                          args: { name: "pointInTimeWindowHours" },
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
                          description:
                            "Minute of the hour to schedule snapshots",
                          args: { name: "referenceMinuteOfHour" },
                        },
                        {
                          name: "--referenceTimeZoneOffset",
                          description:
                            "ISO-8601-formatted timezone offset where the Ops Manager host resides",
                          args: { name: "referenceTimeZoneOffset" },
                        },
                        {
                          name: "--snapshotIntervalHours",
                          description: "Number of hours between snapshots",
                          args: {
                            name: "snapshotIntervalHours",
                            suggestions: ["6", "8", "12", "24"],
                          },
                        },
                        {
                          name: "--snapshotRetentionDays",
                          description:
                            "Number of days to keep recent snapshots",
                          args: { name: "snapshotRetentionDays" },
                        },
                        {
                          name: "--weeklySnapshotRetentionWeeks",
                          description:
                            "Number of weeks to retain weekly snapshots",
                          args: { name: "weeklySnapshotRetentionWeeks" },
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              name: ["restores", "restore"],
              description: "Manage restore jobs for your project",
              subcommands: [
                {
                  name: ["list", "ls"],
                  description: "Lists restore jobs for a project and cluster",
                  options: [limitFlag, outputFlag, pageFlag, projectIdFlag],
                  args: { name: "clusterId" },
                },
                {
                  name: "start",
                  description: "Start a restore job for a project and cluster",
                  options: [
                    {
                      name: "--checkpointId",
                      description:
                        "Unique identifier for the sharded cluster checkpoint that represents the point in time to which your data will be restored",
                      args: { name: "checkpointId" },
                    },
                    clusterIdFlag,
                    {
                      name: "--expirationHours",
                      description:
                        "Number of hours the download URL is valid once the restore job is complete",
                      args: { name: "expirationHours" },
                    },
                    {
                      name: "--expires",
                      description:
                        "Timestamp in ISO 8601 date and time format after which the URL is no longer available",
                      args: { name: "expires" },
                    },
                    {
                      name: "--maxDownloads",
                      description:
                        "Number of times the download URL can be used",
                      args: { name: "maxDownloads" },
                    },
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
                      name: "--pointInTimeUTCMillis",
                      description:
                        "Timestamp in the number of milliseconds that have elapsed since the UNIX epoch that represents the point in time to which your data will be restored",
                      args: { name: "pointInTimeUTCMillis" },
                    },
                    projectIdFlag,
                    {
                      name: "--snapshotId",
                      description:
                        "Unique identifier of the snapshot to restore",
                      args: { name: "snapshotId" },
                    },
                    {
                      name: "--targetClusterId",
                      description: "Unique identifier of the target cluster",
                      args: { name: "targetClusterId" },
                    },
                    {
                      name: "--targetProjectId",
                      description:
                        "Unique identifier of the project that contains the destination cluster for the restore job",
                      args: { name: "targetProjectId" },
                    },
                  ],
                  args: { name: "AUTOMATED_RESTORE|HTTP" },
                },
              ],
            },
            {
              name: ["checkpoints", "checkpoint"],
              description: "Manage backup checkpoints for your project",
              subcommands: [
                {
                  name: ["list", "ls"],
                  description:
                    "List continuous backup checkpoints for your project",
                  options: [limitFlag, outputFlag, pageFlag, projectIdFlag],
                  args: { name: "clusterId" },
                },
              ],
            },
            {
              name: "enable",
              description: "Enable backup for a given hostname",
              options: [projectIdFlag],
              args: { name: "hostname" },
            },
            {
              name: "disable",
              description: "Disable backup for a given hostname",
              options: [projectIdFlag],
              args: { name: "hostname" },
            },
            {
              name: "config",
              description: "Manage backup configurations for your project",
              subcommands: [
                {
                  name: ["describe", "get"],
                  description: "Get a backup configuration",
                  options: [outputFlag, projectIdFlag],
                  args: { name: "clusterId" },
                },
                {
                  name: ["list", "ls"],
                  description: "List backup configurations for your project",
                  options: [limitFlag, outputFlag, pageFlag, projectIdFlag],
                },
                {
                  name: "update",
                  description: "Update a backup configuration",
                  options: [
                    {
                      name: "--authMechanism",
                      description:
                        "Authentication mechanism needed to connect to the sync source database",
                      args: { name: "authMechanism" },
                    },
                    {
                      name: "--encryption",
                      description:
                        "Flag that indicates if encryption is enabled for the backup configuration",
                    },
                    {
                      name: "--excludedNamespace",
                      description:
                        "List of database names and collection names to omit from the backup",
                      args: { name: "excludedNamespace" },
                      isRepeatable: true,
                    },
                    {
                      name: "--includedNamespace",
                      description:
                        "List of database names and collection names to include in the backup",
                      args: { name: "includedNamespace" },
                      isRepeatable: true,
                    },
                    outputFlag,
                    passwordFlag,
                    projectIdFlag,
                    {
                      name: "--provisioned",
                      description:
                        "Flag that indicates if Ops Manager has provisioned the resources needed to store a backup",
                    },
                    {
                      name: "--ssl",
                      description:
                        "Flag that indicates if TLS is enabled for the sync source database",
                    },
                    {
                      name: "--status",
                      description: "Status of the backup configuration",
                      args: { name: "status" },
                    },
                    {
                      name: "--storageEngine",
                      description: "Storage engine for the backup",
                      args: { name: "storageEngine" },
                    },
                    {
                      name: "--syncSource",
                      description:
                        "Mongod instance from which you retrieve backup data",
                      args: { name: "syncSource" },
                    },
                    usernameFlag,
                  ],
                  args: { name: "clusterId" },
                },
              ],
            },
          ],
        },
        {
          name: ["servers", "server"],
          description: "Manage automated servers for your project",
          subcommands: [
            {
              name: ["list", "ls"],
              description:
                "List all available servers running an automation agent for your project",
              options: [limitFlag, outputFlag, pageFlag, projectIdFlag],
            },
          ],
        },
        {
          name: "automation",
          description: "Manage automation configuration for your project",
          subcommands: [
            {
              name: "status",
              description: "Show the current status of the automation config",
              options: [outputFlag, projectIdFlag],
            },
            {
              name: ["describe", "show", "get"],
              description:
                "Get the current automation configuration for a project",
              options: [outputFlag, projectIdFlag],
            },
            {
              name: "update",
              description:
                "Update the current automation configuration for a project",
              options: [
                {
                  name: ["--file", "-f"],
                  description: "Filename to use",
                  args: { name: "file", template: "filepaths" },
                },
                projectIdFlag,
              ],
            },
            {
              name: "watch",
              description: "Watch for automation changes to be completed",
              options: [projectIdFlag],
            },
          ],
        },
        {
          name: "security",
          description: "Manage security configuration for your project",
          subcommands: [
            {
              name: "enable",
              description: "Enable authentication mechanisms for your project",
              options: [projectIdFlag],
              args: { name: "MONGODB-CR|SCRAM-SHA-256" },
            },
          ],
        },
        {
          name: ["dbusers", "dbuser", "databaseUsers", "databaseUser"],
          description: "Manage database users for your project",
          subcommands: [
            {
              name: "create",
              description: "Create a database user for your project",
              options: [
                authDBFlag,
                {
                  name: "--mechanisms",
                  description: "Authentication mechanism",
                  args: {
                    name: "mechanisms",
                    suggestions: ["SCRAM-SHA-1", "SCRAM-SHA-256"],
                    default: "[SCRAM-SHA-1]",
                  },
                  isRepeatable: true,
                },
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
                  name: ["--username", "-u"],
                  description: "Username for authenticating to MongoDB",
                  args: { name: "username" },
                },
              ],
            },
            {
              name: ["list", "ls"],
              description: "List database users for your project",
              options: [outputFlag, projectIdFlag],
            },
            {
              name: ["delete", "rm"],
              description: "Delete a database user for your project",
              options: [authDBFlag, forceFlag, projectIdFlag],
              args: { name: "username" },
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
                  description:
                    "Return all events for the specified organization",
                  options: [
                    limitFlag,
                    maxDateFlag,
                    minDateFlag,
                    orgIdFlag,
                    outputFlag,
                    pageFlag,
                    typeFlag,
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
                    maxDateFlag,
                    minDateFlag,
                    outputFlag,
                    pageFlag,
                    projectIdFlag,
                    typeFlag,
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "monitoring",
          description: "Manage monitoring for your project",
          subcommands: [
            {
              name: "enable",
              description: "Enable monitoring for a given hostname",
              options: [projectIdFlag],
              args: { name: "hostname" },
            },
            {
              name: "disable",
              description: "Disable monitoring for a given hostname",
              options: [projectIdFlag],
              args: { name: "hostname" },
            },
            {
              name: ["stop", "rm"],
              description: "Stops monitoring the MongoDB process specified",
              options: [forceFlag, projectIdFlag],
              args: { name: "ID" },
            },
          ],
        },
        {
          name: ["processes", "process"],
          description: "Manage MongoDB processes for your project",
          subcommands: [
            {
              name: ["list", "ls"],
              description: "List MongoDB processes for your project",
              options: [
                clusterIdFlag,
                limitFlag,
                outputFlag,
                pageFlag,
                projectIdFlag,
              ],
            },
            {
              name: ["describe", "get"],
              description: "Describe MongoDB processes for your project",
              options: [outputFlag, projectIdFlag],
              args: { name: "hostId" },
            },
          ],
        },
        {
          name: ["metrics", "metric", "measurements", "measurement"],
          description: "Get measurements on the state of the MongoDB process",
          subcommands: [
            {
              name: ["process", "processes"],
              description: "Get measurements for a given host",
              options: [
                endFlag,
                granularityFlag,
                outputFlag,
                periodFlag,
                projectIdFlag,
                startFlag,
                typeFlag2,
              ],
              args: { name: "hostId" },
            },
            {
              name: ["disks", "disk"],
              description:
                "List available disks or disks measurements for a given host",
              subcommands: [
                {
                  name: ["list", "ls"],
                  description: "List available disks for a given host",
                  options: [limitFlag, outputFlag, pageFlag, projectIdFlag],
                  args: { name: "ID" },
                },
                {
                  name: "describe",
                  description:
                    "Describe disks measurements for a given host partition",
                  options: [
                    endFlag,
                    granularityFlag,
                    limitFlag,
                    outputFlag,
                    pageFlag,
                    periodFlag,
                    projectIdFlag,
                    startFlag,
                    typeFlag2,
                  ],
                  args: [{ name: "hostId" }, { name: "name" }],
                },
              ],
            },
            {
              name: ["databases", "database"],
              description:
                "List available databases or databases measurements for a given host",
              subcommands: [
                {
                  name: ["list", "ls"],
                  description: "List available databases for a given host",
                  options: [limitFlag, outputFlag, pageFlag, projectIdFlag],
                  args: { name: "ID" },
                },
                {
                  name: "describe",
                  description:
                    "Describe database measurements for a given host database",
                  options: [
                    endFlag,
                    granularityFlag,
                    limitFlag,
                    outputFlag,
                    pageFlag,
                    periodFlag,
                    projectIdFlag,
                    startFlag,
                    typeFlag2,
                  ],
                  args: [{ name: "hostId" }, { name: "name" }],
                },
              ],
            },
          ],
        },
        {
          name: ["logs", "log"],
          description: "Manage log collection jobs for your project",
          subcommands: [
            {
              name: ["jobs", "job"],
              description: "Manage log collection jobs for your project",
              subcommands: [
                {
                  name: "collect",
                  description: "Start a job to collect logs for your project",
                  options: [
                    {
                      name: "--logCollectionFromDate",
                      description:
                        "Timestamp to filter the logs within the range >= LogCollectionFromDate and <= LogCollectionToDate",
                      args: { name: "logCollectionFromDate" },
                    },
                    {
                      name: "--logCollectionToDate",
                      description:
                        "Timestamp to filter the logs within the range >= LogCollectionFromDate and <= LogCollectionToDate",
                      args: { name: "logCollectionToDate" },
                    },
                    outputFlag,
                    projectIdFlag,
                    {
                      name: "--redacted",
                      description:
                        "Flag that indicates whether to replace emails, hostnames, IP addresses, and namespaces in API responses involving this job with random string values",
                    },
                    {
                      name: "--sizeRequestedPerFileBytes",
                      description: "Size for each log file in bytes",
                      args: { name: "sizeRequestedPerFileBytes" },
                    },
                    {
                      name: "--type",
                      description:
                        "Array of strings specifying the types of logs to collect",
                      args: { name: "type" },
                      isRepeatable: true,
                    },
                  ],
                  args: [{ name: "resourceType" }, { name: "resourceName" }],
                },
                {
                  name: ["list", "ls"],
                  description: "List log collection jobs for your project",
                  options: [
                    outputFlag,
                    projectIdFlag,
                    {
                      name: "--verbose",
                      description:
                        "Flag that returns all child jobs in the response",
                    },
                  ],
                },
                {
                  name: "download",
                  description:
                    "Download logs generated by a log collection job",
                  options: [forceFlag2, outFlag, projectIdFlag],
                  args: { name: "ID" },
                },
                {
                  name: ["delete", "rm"],
                  description: "Delete a log collection job from your project",
                  options: [forceFlag, projectIdFlag],
                  args: { name: "ID" },
                },
              ],
            },
            {
              name: [
                "keyProviders",
                "keyproviders",
                "key-providers",
                "keyProvider",
                "keyprovider",
                "key-provider",
                "keys",
              ],
              description: "Manage your key collections",
              subcommands: [
                {
                  name: ["list", "ls"],
                  description:
                    "Lists all key provider configurations found in the encrypted audit log file",
                  options: [fileFlag, outputFlag],
                },
              ],
            },
            {
              name: "decrypt",
              description:
                "Decrypts an audit log file with the provided local key file or with a server that supports KMIP",
              options: [
                fileFlag,
                {
                  name: "--kmipClientCertificateFile",
                  description:
                    "Path to the Client Certificate file used to connect to the server that supports Key Management Interoperability Protocol (KMIP)",
                  args: {
                    name: "kmipClientCertificateFile",
                    template: "filepaths",
                  },
                },
                {
                  name: "--kmipClientCertificatePassword",
                  description:
                    "Password to decrypt the Private Key of the Client Certificate used to connect to the server that supports KMIP",
                  args: { name: "kmipClientCertificatePassword" },
                },
                {
                  name: "--kmipPassword",
                  description:
                    "Password that authenticates the username to the server that supports KMIP",
                  args: { name: "kmipPassword" },
                },
                {
                  name: "--kmipServerCAFile",
                  description:
                    "Path to the CA file used to connect to the server that supports KMIP",
                  args: { name: "kmipServerCAFile", template: "filepaths" },
                },
                {
                  name: "--kmipUsername",
                  description:
                    "Username for authenticating to the server that supports KMIP",
                  args: { name: "kmipUsername" },
                },
                {
                  name: "--localKeyFile",
                  description:
                    "Path to the file that contains the Key Encryption Key (KEK) that is used to encrypt the Log Encryption Key (LEK)",
                  args: { name: "localKeyFile", template: "filepaths" },
                },
                {
                  name: ["--out", "-o"],
                  description:
                    "Path to the file where MongoCLI will save the contents of the decrypted audit log",
                  args: { name: "out", template: "filepaths" },
                },
              ],
            },
          ],
        },
        {
          name: ["agents", "agent"],
          description: "Manage MongoDB Agents",
          subcommands: [
            {
              name: ["list", "ls"],
              description: "List available MongoDB Agents for your project",
              options: [limitFlag, outputFlag, pageFlag, projectIdFlag],
              args: { name: "AUTOMATION|MONITORING|BACKUP" },
            },
            {
              name: "upgrade",
              description:
                "Upgrade MongoDB Agents to the latest available version",
              options: [outputFlag, projectIdFlag],
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
              description: "Agent API Keys operations",
              subcommands: [
                {
                  name: ["list", "ls"],
                  description:
                    "List available MongoDB Agent API Keys for your project",
                  options: [outputFlag, projectIdFlag],
                },
                {
                  name: "create",
                  description: "Create an Agent API Key for your project",
                  options: [descFlag, outputFlag, projectIdFlag],
                },
                {
                  name: ["delete", "rm"],
                  description: "Delete an Agent API Key for your project",
                  options: [forceFlag, projectIdFlag],
                  args: { name: "ID" },
                },
              ],
            },
            {
              name: ["versions", "version"],
              description: "Manage MongoDB Agents versions",
              subcommands: [
                {
                  name: ["list", "ls"],
                  description:
                    "List MongoDB Agent versions in the provided project",
                  options: [outputFlag, projectIdFlag],
                },
              ],
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
          description: "Manage Ops Manager/Cloud Manager maintenance windows",
          subcommands: [
            {
              name: "create",
              description: "Create a maintenance window",
              options: [
                alertTypeFlag,
                descFlag2,
                endDateFlag,
                outputFlag,
                projectIdFlag,
                startDateFlag,
              ],
            },
            {
              name: ["list", "ls"],
              description: "List maintenance windows",
              options: [outputFlag, projectIdFlag],
            },
            {
              name: ["delete", "rm"],
              description: "Delete a maintenance window",
              options: [forceFlag, projectIdFlag],
              args: { name: "ID" },
            },
            {
              name: "describe",
              description: "Get a maintenance window",
              options: [outputFlag, projectIdFlag],
              args: { name: "ID" },
            },
            {
              name: "update",
              description: "Update a maintenance window",
              options: [
                alertTypeFlag,
                descFlag2,
                endDateFlag,
                outputFlag,
                projectIdFlag,
                startDateFlag,
              ],
              args: { name: "ID" },
            },
          ],
        },
        {
          name: [
            "performanceAdvisor",
            "performanceadvisor",
            "performance-advisor",
          ],
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
                    hostIdFlag,
                    outputFlag,
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
              description:
                "Get log lines for slow queries for a specified host",
              subcommands: [
                {
                  name: ["list", "ls"],
                  description:
                    "Return log lines for slow queries that the Performance Advisor and Query Profiler identified",
                  options: [
                    durationFlag,
                    hostIdFlag,
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
                    },
                    outputFlag,
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
                    hostIdFlag,
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
                    {
                      name: "--namespaces",
                      description:
                        "Namespaces from which to retrieve suggested indexes",
                      args: { name: "namespaces" },
                    },
                    outputFlag,
                    projectIdFlag,
                    sinceFlag,
                  ],
                },
              ],
            },
          ],
        },
        {
          name: [
            "featurePolicies",
            "featurepolicies",
            "feature-policies",
            "featurePolicy",
            "featurepolicy",
            "feature-policy",
          ],
          description: "Manage feature control policies",
          subcommands: [
            {
              name: ["list", "ls"],
              description: "List feature control policies for your project",
              options: [limitFlag, outputFlag, pageFlag, projectIdFlag],
            },
            {
              name: "update",
              description: "Update feature control policies for your project",
              options: [
                {
                  name: ["--file", "-f"],
                  description:
                    "File name that identifies an optional file with a json policy configuration",
                  args: { name: "file", template: "filepaths" },
                },
                {
                  name: "--name",
                  description:
                    "Identifying label for the external system that manages this Ops Manager Project",
                  args: { name: "name" },
                },
                outputFlag,
                {
                  name: "--policy",
                  description:
                    "List of policies that the external system applies to this Ops Manager Project",
                  args: { name: "policy" },
                  isRepeatable: true,
                },
                projectIdFlag,
                {
                  name: "--systemId",
                  description:
                    "Unique identifier of the external system that manages this Ops Manager Project",
                  args: { name: "systemId" },
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
                  description: "Create one new organization link",
                  options: [
                    {
                      name: "--linkToken",
                      description: "Link-token generated by Atlas",
                      args: { name: "linkToken" },
                    },
                    orgIdFlag,
                  ],
                },
                {
                  name: ["delete", "rm"],
                  description: "Delete one link-token",
                  options: [forceFlag, orgIdFlag],
                },
                {
                  name: ["describe", "get"],
                  description:
                    "Return the status of the connection between the specified source organization and the target MongoDB Atlas organization",
                  options: [orgIdFlag, outputFlag],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: ["ops-manager", "om"],
      description: "MongoDB Ops Manager operations",
      subcommands: [
        {
          name: ["clusters", "cluster"],
          description: "Manage clusters for your project",
          subcommands: [
            {
              name: ["list", "ls"],
              description: "List clusters for your project",
              options: [outputFlag, projectIdFlag],
            },
            {
              name: "describe",
              description: "Describe a cluster",
              options: [outputFlag, projectIdFlag],
              args: { name: "id|name" },
            },
            {
              name: "create",
              description: "Create a MongoDB cluster",
              options: [
                {
                  name: ["--file", "-f"],
                  description: "Filename to use to create the cluster",
                  args: { name: "file", template: "filepaths" },
                },
                projectIdFlag,
              ],
            },
            {
              name: "update",
              description: "Update a MongoDB cluster",
              options: [
                {
                  name: ["--file", "-f"],
                  description: "Filename to use to update the cluster",
                  args: { name: "file", template: "filepaths" },
                },
                projectIdFlag,
              ],
            },
            {
              name: ["delete", "rm"],
              description: "Completely removes a cluster from your project",
              options: [forceFlag, projectIdFlag],
              args: { name: "name" },
            },
            {
              name: "apply",
              description: "Apply a new cluster configuration for your project",
              options: [
                {
                  name: ["--file", "-f"],
                  description:
                    "Filename to use to change the automation config",
                  args: { name: "file", template: "filepaths" },
                },
                projectIdFlag,
              ],
            },
            {
              name: ["indexes", "index"],
              description: "Manage cluster rolling indexes for your project",
              subcommands: [
                {
                  name: "create",
                  description:
                    "Create a rolling index for your MongoDB cluster",
                  options: [
                    {
                      name: "--MaxVariable",
                      description:
                        "Flag that determines which characters to ignore",
                      args: { name: "MaxVariable" },
                    },
                    {
                      name: "--alternate",
                      description:
                        "Flag that determines whether collation should consider whitespace and punctuation as base characters during comparisons",
                      args: { name: "alternate" },
                    },
                    {
                      name: "--backwards",
                      description:
                        "Flag that indicates whether strings with diacritics sort from the back to the front of the string",
                    },
                    {
                      name: "--caseFirst",
                      description:
                        "Flag that determines the sort order of case differences during tertiary level comparisons",
                      args: { name: "caseFirst" },
                    },
                    {
                      name: "--caseLevel",
                      description: "Flag that enables index case comparison",
                    },
                    {
                      name: "--collectionName",
                      description: "Name of the collection",
                      args: { name: "collectionName" },
                    },
                    {
                      name: "--db",
                      description: "Name of the database",
                      args: { name: "db" },
                    },
                    {
                      name: "--key",
                      description:
                        "Field to be indexed and the type of index in the following format: field:type",
                      args: { name: "key" },
                      isRepeatable: true,
                    },
                    {
                      name: "--locale",
                      description: "Locale that the ICU defines",
                      args: { name: "locale" },
                    },
                    {
                      name: "--normalization",
                      description:
                        "Flag that indicates whether collation checks if text requires normalization and performs normalization to compare text",
                    },
                    {
                      name: "--numericOrdering",
                      description:
                        "Flag that indicates that collation compares numeric strings as numbers",
                    },
                    projectIdFlag,
                    {
                      name: "--rsName",
                      description: "Replica set that the index is built on",
                      args: { name: "rsName" },
                    },
                    {
                      name: "--sparse",
                      description: "Flag that creates a sparse index",
                    },
                    {
                      name: "--strength",
                      description: "Level of comparison to perform",
                      args: { name: "strength" },
                    },
                  ],
                  args: { name: "indexName", isOptional: true },
                },
              ],
            },
            {
              name: "unmanage",
              description: "Stop managing a cluster via automation",
              options: [forceFlag, projectIdFlag],
              args: { name: "name" },
            },
            {
              name: "restart",
              description: "Restart a cluster for your project",
              options: [forceFlag, processNameFlag, projectIdFlag],
              args: { name: "clusterName" },
            },
            {
              name: "startup",
              description: "Start up a cluster for your project",
              options: [forceFlag, processNameFlag, projectIdFlag],
              args: { name: "clusterName" },
            },
            {
              name: "shutdown",
              description: "Shutdown a cluster for your project",
              options: [forceFlag, processNameFlag, projectIdFlag],
              args: { name: "clusterName" },
            },
            {
              name: ["reclaimFreeSpace", "rfs"],
              description: "Reclaim unused space for a cluster using compact",
              options: [
                forceFlag,
                processNameFlag,
                projectIdFlag,
                {
                  name: "--timestamp",
                  description:
                    "Timestamp in ISO 8601 format when the service reclaims the space",
                  args: { name: "timestamp" },
                },
              ],
              args: { name: "clusterName" },
            },
            {
              name: "resync",
              description: "Start an initial sync for a cluster or process",
              options: [
                forceFlag,
                processNameFlag,
                projectIdFlag,
                {
                  name: "--timestamp",
                  description:
                    "Timestamp in ISO 8601 format when the sync starts",
                  args: { name: "timestamp" },
                },
              ],
              args: { name: "clusterName" },
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
                    apiKeyFlag,
                    enabledFlag,
                    eventFlag,
                    matcherFieldNameFlag,
                    matcherOperatorFlag,
                    matcherValueFlag,
                    metricModeFlag,
                    metricNameFlag,
                    metricOperatorFlag,
                    metricThresholdFlag,
                    metricUnitsFlag,
                    notificationChannelNameFlag,
                    notificationDelayMinFlag,
                    notificationEmailAddressFlag,
                    notificationEmailEnabledFlag,
                    notificationIntervalMinFlag,
                    notificationMobileNumberFlag,
                    notificationRegionFlag,
                    notificationServiceKeyFlag,
                    notificationSmsEnabledFlag,
                    notificationTeamIdFlag,
                    notificationTokenFlag,
                    notificationTypeFlag,
                    notificationUsernameFlag,
                    notificationVictorOpsRoutingKeyFlag,
                    outputFlag,
                    projectIdFlag,
                  ],
                },
                {
                  name: ["list", "ls"],
                  description:
                    "Returns all alert configurations for your project",
                  options: [limitFlag, outputFlag, pageFlag, projectIdFlag],
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
                    apiKeyFlag,
                    enabledFlag,
                    eventFlag,
                    matcherFieldNameFlag,
                    matcherOperatorFlag,
                    matcherValueFlag,
                    metricModeFlag,
                    metricNameFlag,
                    metricOperatorFlag,
                    metricThresholdFlag,
                    metricUnitsFlag,
                    notificationChannelNameFlag,
                    notificationDelayMinFlag,
                    notificationEmailAddressFlag,
                    notificationEmailEnabledFlag,
                    notificationIntervalMinFlag,
                    notificationMobileNumberFlag,
                    notificationRegionFlag,
                    notificationServiceKeyFlag,
                    notificationSmsEnabledFlag,
                    notificationTeamIdFlag,
                    notificationTokenFlag,
                    notificationTypeFlag,
                    notificationUsernameFlag,
                    notificationVictorOpsRoutingKeyFlag,
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
                outputFlag,
                pageFlag,
                projectIdFlag,
                statusFlag,
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
            {
              name: "global",
              description:
                "Retrieves all the global alerts for the specified Ops Manager project",
              subcommands: [
                {
                  name: ["list", "ls"],
                  description:
                    "Returns all global alerts for the specified Ops Manager project",
                  options: [limitFlag, outputFlag, pageFlag, statusFlag],
                },
              ],
            },
          ],
        },
        {
          name: ["backups", "backup"],
          description: "Manage continuous backups for your project",
          subcommands: [
            {
              name: ["snapshots", "snapshot"],
              description: "Manage backup snapshots for your project",
              subcommands: [
                {
                  name: ["list", "ls"],
                  description: "List snapshots for a project and cluster",
                  options: [limitFlag, outputFlag, pageFlag, projectIdFlag],
                  args: { name: "clusterId" },
                },
                {
                  name: "schedule",
                  description: "Manage backup snapshot schedules for a cluster",
                  subcommands: [
                    {
                      name: ["describe", "get"],
                      description: "Describe a snapshot schedule for a cluster",
                      options: [clusterIdFlag, outputFlag, projectIdFlag],
                    },
                    {
                      name: "update",
                      description: "Update a snapshot schedule for a cluster",
                      options: [
                        {
                          name: "--clusterCheckpointIntervalMin",
                          description:
                            "Number of minutes between successive cluster checkpoints",
                          args: {
                            name: "clusterCheckpointIntervalMin",
                            suggestions: ["15", "30", "60"],
                          },
                        },
                        clusterIdFlag,
                        {
                          name: "--dailySnapshotRetentionDays",
                          description:
                            "Number of days to retain daily snapshots",
                          args: { name: "dailySnapshotRetentionDays" },
                        },
                        {
                          name: "--monthlySnapshotRetentionMonths",
                          description:
                            "Number of months to retain monthly snapshots",
                          args: { name: "monthlySnapshotRetentionMonths" },
                        },
                        outputFlag,
                        {
                          name: "--pointInTimeWindowHours",
                          description:
                            "Number of hours in the past for which MongoDB should create a point-in-time snapshot",
                          args: { name: "pointInTimeWindowHours" },
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
                          description:
                            "Minute of the hour to schedule snapshots",
                          args: { name: "referenceMinuteOfHour" },
                        },
                        {
                          name: "--referenceTimeZoneOffset",
                          description:
                            "ISO-8601-formatted timezone offset where the Ops Manager host resides",
                          args: { name: "referenceTimeZoneOffset" },
                        },
                        {
                          name: "--snapshotIntervalHours",
                          description: "Number of hours between snapshots",
                          args: {
                            name: "snapshotIntervalHours",
                            suggestions: ["6", "8", "12", "24"],
                          },
                        },
                        {
                          name: "--snapshotRetentionDays",
                          description:
                            "Number of days to keep recent snapshots",
                          args: { name: "snapshotRetentionDays" },
                        },
                        {
                          name: "--weeklySnapshotRetentionWeeks",
                          description:
                            "Number of weeks to retain weekly snapshots",
                          args: { name: "weeklySnapshotRetentionWeeks" },
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              name: ["restores", "restore"],
              description: "Manage restore jobs for your project",
              subcommands: [
                {
                  name: ["list", "ls"],
                  description: "Lists restore jobs for a project and cluster",
                  options: [limitFlag, outputFlag, pageFlag, projectIdFlag],
                  args: { name: "clusterId" },
                },
                {
                  name: "start",
                  description: "Start a restore job for a project and cluster",
                  options: [
                    {
                      name: "--checkpointId",
                      description:
                        "Unique identifier for the sharded cluster checkpoint that represents the point in time to which your data will be restored",
                      args: { name: "checkpointId" },
                    },
                    clusterIdFlag,
                    {
                      name: "--expirationHours",
                      description:
                        "Number of hours the download URL is valid once the restore job is complete",
                      args: { name: "expirationHours" },
                    },
                    {
                      name: "--expires",
                      description:
                        "Timestamp in ISO 8601 date and time format after which the URL is no longer available",
                      args: { name: "expires" },
                    },
                    {
                      name: "--maxDownloads",
                      description:
                        "Number of times the download URL can be used",
                      args: { name: "maxDownloads" },
                    },
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
                      name: "--pointInTimeUTCMillis",
                      description:
                        "Timestamp in the number of milliseconds that have elapsed since the UNIX epoch that represents the point in time to which your data will be restored",
                      args: { name: "pointInTimeUTCMillis" },
                    },
                    projectIdFlag,
                    {
                      name: "--snapshotId",
                      description:
                        "Unique identifier of the snapshot to restore",
                      args: { name: "snapshotId" },
                    },
                    {
                      name: "--targetClusterId",
                      description: "Unique identifier of the target cluster",
                      args: { name: "targetClusterId" },
                    },
                    {
                      name: "--targetProjectId",
                      description:
                        "Unique identifier of the project that contains the destination cluster for the restore job",
                      args: { name: "targetProjectId" },
                    },
                  ],
                  args: { name: "AUTOMATED_RESTORE|HTTP" },
                },
              ],
            },
            {
              name: ["checkpoints", "checkpoint"],
              description: "Manage backup checkpoints for your project",
              subcommands: [
                {
                  name: ["list", "ls"],
                  description:
                    "List continuous backup checkpoints for your project",
                  options: [limitFlag, outputFlag, pageFlag, projectIdFlag],
                  args: { name: "clusterId" },
                },
              ],
            },
            {
              name: "enable",
              description: "Enable backup for a given hostname",
              options: [projectIdFlag],
              args: { name: "hostname" },
            },
            {
              name: "disable",
              description: "Disable backup for a given hostname",
              options: [projectIdFlag],
              args: { name: "hostname" },
            },
            {
              name: "config",
              description: "Manage backup configurations for your project",
              subcommands: [
                {
                  name: ["describe", "get"],
                  description: "Get a backup configuration",
                  options: [outputFlag, projectIdFlag],
                  args: { name: "clusterId" },
                },
                {
                  name: ["list", "ls"],
                  description: "List backup configurations for your project",
                  options: [limitFlag, outputFlag, pageFlag, projectIdFlag],
                },
                {
                  name: "update",
                  description: "Update a backup configuration",
                  options: [
                    {
                      name: "--authMechanism",
                      description:
                        "Authentication mechanism needed to connect to the sync source database",
                      args: { name: "authMechanism" },
                    },
                    {
                      name: "--encryption",
                      description:
                        "Flag that indicates if encryption is enabled for the backup configuration",
                    },
                    {
                      name: "--excludedNamespace",
                      description:
                        "List of database names and collection names to omit from the backup",
                      args: { name: "excludedNamespace" },
                      isRepeatable: true,
                    },
                    {
                      name: "--includedNamespace",
                      description:
                        "List of database names and collection names to include in the backup",
                      args: { name: "includedNamespace" },
                      isRepeatable: true,
                    },
                    outputFlag,
                    passwordFlag,
                    projectIdFlag,
                    {
                      name: "--provisioned",
                      description:
                        "Flag that indicates if Ops Manager has provisioned the resources needed to store a backup",
                    },
                    {
                      name: "--ssl",
                      description:
                        "Flag that indicates if TLS is enabled for the sync source database",
                    },
                    {
                      name: "--status",
                      description: "Status of the backup configuration",
                      args: { name: "status" },
                    },
                    {
                      name: "--storageEngine",
                      description: "Storage engine for the backup",
                      args: { name: "storageEngine" },
                    },
                    {
                      name: "--syncSource",
                      description:
                        "Mongod instance from which you retrieve backup data",
                      args: { name: "syncSource" },
                    },
                    usernameFlag,
                  ],
                  args: { name: "clusterId" },
                },
              ],
            },
          ],
        },
        {
          name: ["servers", "server"],
          description: "Manage automated servers for your project",
          subcommands: [
            {
              name: ["list", "ls"],
              description:
                "List all available servers running an automation agent for your project",
              options: [limitFlag, outputFlag, pageFlag, projectIdFlag],
            },
          ],
        },
        {
          name: "automation",
          description: "Manage automation configuration for your project",
          subcommands: [
            {
              name: "status",
              description: "Show the current status of the automation config",
              options: [outputFlag, projectIdFlag],
            },
            {
              name: ["describe", "show", "get"],
              description:
                "Get the current automation configuration for a project",
              options: [outputFlag, projectIdFlag],
            },
            {
              name: "update",
              description:
                "Update the current automation configuration for a project",
              options: [
                {
                  name: ["--file", "-f"],
                  description: "Filename to use",
                  args: { name: "file", template: "filepaths" },
                },
                projectIdFlag,
              ],
            },
            {
              name: "watch",
              description: "Watch for automation changes to be completed",
              options: [projectIdFlag],
            },
          ],
        },
        {
          name: "security",
          description: "Manage security configuration for your project",
          subcommands: [
            {
              name: "enable",
              description: "Enable authentication mechanisms for your project",
              options: [projectIdFlag],
              args: { name: "MONGODB-CR|SCRAM-SHA-256" },
            },
          ],
        },
        {
          name: ["dbusers", "dbuser", "databaseUsers", "databaseUser"],
          description: "Manage database users for your project",
          subcommands: [
            {
              name: "create",
              description: "Create a database user for your project",
              options: [
                authDBFlag,
                {
                  name: "--mechanisms",
                  description: "Authentication mechanism",
                  args: {
                    name: "mechanisms",
                    suggestions: ["SCRAM-SHA-1", "SCRAM-SHA-256"],
                    default: "[SCRAM-SHA-1]",
                  },
                  isRepeatable: true,
                },
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
                  name: ["--username", "-u"],
                  description: "Username for authenticating to MongoDB",
                  args: { name: "username" },
                },
              ],
            },
            {
              name: ["list", "ls"],
              description: "List database users for your project",
              options: [outputFlag, projectIdFlag],
            },
            {
              name: ["delete", "rm"],
              description: "Delete a database user for your project",
              options: [authDBFlag, forceFlag, projectIdFlag],
              args: { name: "username" },
            },
          ],
        },
        {
          name: "owner",
          description: "Manage Ops Manager owners",
          subcommands: [
            {
              name: "create",
              description: "Create the first user for Ops Manager",
              options: [
                {
                  name: "--accessListIp",
                  description:
                    "IP addresses to add to the new user's access list",
                  args: { name: "accessListIp" },
                  isRepeatable: true,
                },
                emailFlag,
                {
                  name: "--firstName",
                  description: "First or given name for the user",
                  args: { name: "firstName" },
                },
                {
                  name: "--lastName",
                  description:
                    "Last name, family name, or surname for the user",
                  args: { name: "lastName" },
                },
                outputFlag,
                {
                  name: ["--password", "-p"],
                  description: "Password for the user",
                  args: { name: "password" },
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
                  description:
                    "Return all events for the specified organization",
                  options: [
                    limitFlag,
                    maxDateFlag,
                    minDateFlag,
                    orgIdFlag,
                    outputFlag,
                    pageFlag,
                    typeFlag,
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
                    maxDateFlag,
                    minDateFlag,
                    outputFlag,
                    pageFlag,
                    projectIdFlag,
                    typeFlag,
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "monitoring",
          description: "Manage monitoring for your project",
          subcommands: [
            {
              name: "enable",
              description: "Enable monitoring for a given hostname",
              options: [projectIdFlag],
              args: { name: "hostname" },
            },
            {
              name: "disable",
              description: "Disable monitoring for a given hostname",
              options: [projectIdFlag],
              args: { name: "hostname" },
            },
            {
              name: ["stop", "rm"],
              description: "Stops monitoring the MongoDB process specified",
              options: [forceFlag, projectIdFlag],
              args: { name: "ID" },
            },
          ],
        },
        {
          name: ["processes", "process"],
          description: "Manage MongoDB processes for your project",
          subcommands: [
            {
              name: ["list", "ls"],
              description: "List MongoDB processes for your project",
              options: [
                clusterIdFlag,
                limitFlag,
                outputFlag,
                pageFlag,
                projectIdFlag,
              ],
            },
            {
              name: ["describe", "get"],
              description: "Describe MongoDB processes for your project",
              options: [outputFlag, projectIdFlag],
              args: { name: "hostId" },
            },
          ],
        },
        {
          name: ["metrics", "metric", "measurements", "measurement"],
          description: "Get measurements on the state of the MongoDB process",
          subcommands: [
            {
              name: ["process", "processes"],
              description: "Get measurements for a given host",
              options: [
                endFlag,
                granularityFlag,
                outputFlag,
                periodFlag,
                projectIdFlag,
                startFlag,
                typeFlag2,
              ],
              args: { name: "hostId" },
            },
            {
              name: ["disks", "disk"],
              description:
                "List available disks or disks measurements for a given host",
              subcommands: [
                {
                  name: ["list", "ls"],
                  description: "List available disks for a given host",
                  options: [limitFlag, outputFlag, pageFlag, projectIdFlag],
                  args: { name: "ID" },
                },
                {
                  name: "describe",
                  description:
                    "Describe disks measurements for a given host partition",
                  options: [
                    endFlag,
                    granularityFlag,
                    limitFlag,
                    outputFlag,
                    pageFlag,
                    periodFlag,
                    projectIdFlag,
                    startFlag,
                    typeFlag2,
                  ],
                  args: [{ name: "hostId" }, { name: "name" }],
                },
              ],
            },
            {
              name: ["databases", "database"],
              description:
                "List available databases or databases measurements for a given host",
              subcommands: [
                {
                  name: ["list", "ls"],
                  description: "List available databases for a given host",
                  options: [limitFlag, outputFlag, pageFlag, projectIdFlag],
                  args: { name: "ID" },
                },
                {
                  name: "describe",
                  description:
                    "Describe database measurements for a given host database",
                  options: [
                    endFlag,
                    granularityFlag,
                    limitFlag,
                    outputFlag,
                    pageFlag,
                    periodFlag,
                    projectIdFlag,
                    startFlag,
                    typeFlag2,
                  ],
                  args: [{ name: "hostId" }, { name: "name" }],
                },
              ],
            },
          ],
        },
        {
          name: ["logs", "log"],
          description: "Manage log collection jobs for your project",
          subcommands: [
            {
              name: ["jobs", "job"],
              description: "Manage log collection jobs for your project",
              subcommands: [
                {
                  name: "collect",
                  description: "Start a job to collect logs for your project",
                  options: [
                    {
                      name: "--logCollectionFromDate",
                      description:
                        "Timestamp to filter the logs within the range >= LogCollectionFromDate and <= LogCollectionToDate",
                      args: { name: "logCollectionFromDate" },
                    },
                    {
                      name: "--logCollectionToDate",
                      description:
                        "Timestamp to filter the logs within the range >= LogCollectionFromDate and <= LogCollectionToDate",
                      args: { name: "logCollectionToDate" },
                    },
                    outputFlag,
                    projectIdFlag,
                    {
                      name: "--redacted",
                      description:
                        "Flag that indicates whether to replace emails, hostnames, IP addresses, and namespaces in API responses involving this job with random string values",
                    },
                    {
                      name: "--sizeRequestedPerFileBytes",
                      description: "Size for each log file in bytes",
                      args: { name: "sizeRequestedPerFileBytes" },
                    },
                    {
                      name: "--type",
                      description:
                        "Array of strings specifying the types of logs to collect",
                      args: { name: "type" },
                      isRepeatable: true,
                    },
                  ],
                  args: [{ name: "resourceType" }, { name: "resourceName" }],
                },
                {
                  name: ["list", "ls"],
                  description: "List log collection jobs for your project",
                  options: [
                    outputFlag,
                    projectIdFlag,
                    {
                      name: "--verbose",
                      description:
                        "Flag that returns all child jobs in the response",
                    },
                  ],
                },
                {
                  name: "download",
                  description:
                    "Download logs generated by a log collection job",
                  options: [forceFlag2, outFlag, projectIdFlag],
                  args: { name: "ID" },
                },
                {
                  name: ["delete", "rm"],
                  description: "Delete a log collection job from your project",
                  options: [forceFlag, projectIdFlag],
                  args: { name: "ID" },
                },
              ],
            },
            {
              name: [
                "keyProviders",
                "keyproviders",
                "key-providers",
                "keyProvider",
                "keyprovider",
                "key-provider",
                "keys",
              ],
              description: "Manage your key collections",
              subcommands: [
                {
                  name: ["list", "ls"],
                  description:
                    "Lists all key provider configurations found in the encrypted audit log file",
                  options: [fileFlag, outputFlag],
                },
              ],
            },
            {
              name: "decrypt",
              description:
                "Decrypts an audit log file with the provided local key file or with a server that supports KMIP",
              options: [
                fileFlag,
                {
                  name: "--kmipClientCertificateFile",
                  description:
                    "Path to the Client Certificate file used to connect to the server that supports Key Management Interoperability Protocol (KMIP)",
                  args: {
                    name: "kmipClientCertificateFile",
                    template: "filepaths",
                  },
                },
                {
                  name: "--kmipClientCertificatePassword",
                  description:
                    "Password to decrypt the Private Key of the Client Certificate used to connect to the server that supports KMIP",
                  args: { name: "kmipClientCertificatePassword" },
                },
                {
                  name: "--kmipPassword",
                  description:
                    "Password that authenticates the username to the server that supports KMIP",
                  args: { name: "kmipPassword" },
                },
                {
                  name: "--kmipServerCAFile",
                  description:
                    "Path to the CA file used to connect to the server that supports KMIP",
                  args: { name: "kmipServerCAFile", template: "filepaths" },
                },
                {
                  name: "--kmipUsername",
                  description:
                    "Username for authenticating to the server that supports KMIP",
                  args: { name: "kmipUsername" },
                },
                {
                  name: "--localKeyFile",
                  description:
                    "Path to the file that contains the Key Encryption Key (KEK) that is used to encrypt the Log Encryption Key (LEK)",
                  args: { name: "localKeyFile", template: "filepaths" },
                },
                {
                  name: ["--out", "-o"],
                  description:
                    "Path to the file where MongoCLI will save the contents of the decrypted audit log",
                  args: { name: "out", template: "filepaths" },
                },
              ],
            },
          ],
        },
        {
          name: ["agents", "agent"],
          description: "Manage MongoDB Agents",
          subcommands: [
            {
              name: ["list", "ls"],
              description: "List available MongoDB Agents for your project",
              options: [limitFlag, outputFlag, pageFlag, projectIdFlag],
              args: { name: "AUTOMATION|MONITORING|BACKUP" },
            },
            {
              name: "upgrade",
              description:
                "Upgrade MongoDB Agents to the latest available version",
              options: [outputFlag, projectIdFlag],
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
              description: "Agent API Keys operations",
              subcommands: [
                {
                  name: ["list", "ls"],
                  description:
                    "List available MongoDB Agent API Keys for your project",
                  options: [outputFlag, projectIdFlag],
                },
                {
                  name: "create",
                  description: "Create an Agent API Key for your project",
                  options: [descFlag, outputFlag, projectIdFlag],
                },
                {
                  name: ["delete", "rm"],
                  description: "Delete an Agent API Key for your project",
                  options: [forceFlag, projectIdFlag],
                  args: { name: "ID" },
                },
              ],
            },
            {
              name: ["versions", "version"],
              description: "Manage MongoDB Agents versions",
              subcommands: [
                {
                  name: ["list", "ls"],
                  description:
                    "List MongoDB Agent versions in the provided project",
                  options: [outputFlag, projectIdFlag],
                },
              ],
            },
          ],
        },
        {
          name: [
            "diagnoseArchives",
            "diagnosearchives",
            "diagnose-archives",
            "diagnoseArchive",
            "diagnosearchive",
            "diagnose-archive",
          ],
          description: "Manage diagnose archives",
          subcommands: [
            {
              name: ["download", "get"],
              description: "Download diagnose archives",
              options: [
                {
                  name: "--limit",
                  description: "Max number of entries for the diagnose archive",
                  args: { name: "limit" },
                },
                {
                  name: "--minutes",
                  description:
                    "Beginning of the period, in UNIX Epoch format, from which to start retrieving the diagnose archive",
                  args: { name: "minutes" },
                },
                {
                  name: "--out",
                  description: "Optional output file name",
                  args: {
                    name: "out",
                    default: "diagnose-archive.tar.gz",
                    template: "filepaths",
                  },
                },
                projectIdFlag,
              ],
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
          description: "Manage Ops Manager/Cloud Manager maintenance windows",
          subcommands: [
            {
              name: "create",
              description: "Create a maintenance window",
              options: [
                alertTypeFlag,
                descFlag2,
                endDateFlag,
                outputFlag,
                projectIdFlag,
                startDateFlag,
              ],
            },
            {
              name: ["list", "ls"],
              description: "List maintenance windows",
              options: [outputFlag, projectIdFlag],
            },
            {
              name: ["delete", "rm"],
              description: "Delete a maintenance window",
              options: [forceFlag, projectIdFlag],
              args: { name: "ID" },
            },
            {
              name: "describe",
              description: "Get a maintenance window",
              options: [outputFlag, projectIdFlag],
              args: { name: "ID" },
            },
            {
              name: "update",
              description: "Update a maintenance window",
              options: [
                alertTypeFlag,
                descFlag2,
                endDateFlag,
                outputFlag,
                projectIdFlag,
                startDateFlag,
              ],
              args: { name: "ID" },
            },
          ],
        },
        {
          name: [
            "performanceAdvisor",
            "performanceadvisor",
            "performance-advisor",
          ],
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
                    hostIdFlag,
                    outputFlag,
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
              description:
                "Get log lines for slow queries for a specified host",
              subcommands: [
                {
                  name: ["list", "ls"],
                  description:
                    "Return log lines for slow queries that the Performance Advisor and Query Profiler identified",
                  options: [
                    durationFlag,
                    hostIdFlag,
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
                    },
                    outputFlag,
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
                    hostIdFlag,
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
                    {
                      name: "--namespaces",
                      description:
                        "Namespaces from which to retrieve suggested indexes",
                      args: { name: "namespaces" },
                    },
                    outputFlag,
                    projectIdFlag,
                    sinceFlag,
                  ],
                },
              ],
            },
          ],
        },
        {
          name: ["versionManifest", "versionmanifest", "version-manifest"],
          description: "Manage Ops Manager version manifest",
          subcommands: [
            {
              name: "update",
              description: "Update Ops Manager version manifest",
              options: [
                {
                  name: "--force",
                  description:
                    "Flag that indicates whether to skip the Ops Manager version check",
                },
                outputFlag,
              ],
              args: { name: "version" },
            },
          ],
        },
        {
          name: "admin",
          description: "Manage backup administration",
          subcommands: [
            {
              name: ["backups", "backup"],
              description: "Manage backup administration",
              subcommands: [
                {
                  name: ["blockstores", "blockstore"],
                  description: "Manage backup blockstore configurations",
                  subcommands: [
                    {
                      name: ["list", "ls"],
                      description: "List backup blockstore configurations",
                      options: [limitFlag, outputFlag, pageFlag],
                    },
                    {
                      name: ["describe", "get"],
                      description: "Get a backup blockstore configuration",
                      options: [outputFlag],
                      args: { name: "ID" },
                    },
                    {
                      name: "create",
                      description: "Create a backup blockstore configuration",
                      options: [
                        assignmentFlag,
                        encryptedCredentialsFlag,
                        labelFlag,
                        loadFactorFlag,
                        maxCapacityGBFlag,
                        {
                          name: "--name",
                          description:
                            "Unique name that labels this blockstore",
                          args: { name: "name" },
                        },
                        outputFlag,
                        sslFlag,
                        uriFlag,
                        writeConcernFlag,
                      ],
                    },
                    {
                      name: "update",
                      description: "Update a backup blockstore configuration",
                      options: [
                        assignmentFlag,
                        encryptedCredentialsFlag,
                        labelFlag,
                        loadFactorFlag,
                        maxCapacityGBFlag,
                        outputFlag,
                        sslFlag,
                        uriFlag,
                        writeConcernFlag,
                      ],
                      args: { name: "ID" },
                    },
                    {
                      name: ["delete", "rm"],
                      description: "Delete a backup blockstore configuration",
                      options: [forceFlag],
                      args: { name: "ID" },
                    },
                  ],
                },
                {
                  name: [
                    "fileSystems",
                    "filesystems",
                    "file-systems",
                    "fileSystem",
                    "filesystem",
                    "file-system",
                  ],
                  description: "Manage file system configurations",
                  subcommands: [
                    {
                      name: ["list", "ls"],
                      description: "List file system configurations",
                      options: [limitFlag, outputFlag, pageFlag],
                    },
                    {
                      name: ["describe", "get"],
                      description: "Get a file system configuration",
                      options: [outputFlag],
                      args: { name: "ID" },
                    },
                    {
                      name: ["delete", "rm"],
                      description: "Delete a file system configuration",
                      options: [forceFlag],
                      args: { name: "ID" },
                    },
                    {
                      name: "create",
                      description: "Create a file system configuration",
                      options: [
                        {
                          name: "--assignment",
                          description:
                            "Flag indicating whether this file system store can be assigned backup jobs",
                        },
                        encryptedCredentialsFlag,
                        labelFlag,
                        loadFactorFlag,
                        {
                          name: "--mmapv1CompressionSetting",
                          description:
                            "Compression setting for the MMAPv1 storage engine snaphots",
                          args: { name: "mmapv1CompressionSetting" },
                        },
                        {
                          name: "--name",
                          description:
                            "Unique name that labels this file system store configuration",
                          args: { name: "name" },
                        },
                        outputFlag,
                        {
                          name: "--storePath",
                          description:
                            "Location on the file system store host for storing file system-based backups",
                          args: { name: "storePath", template: "filepaths" },
                        },
                        {
                          name: "--wtCompressionSetting",
                          description:
                            "Compression setting for the WiredTiger storage engine snaphots",
                          args: { name: "wtCompressionSetting" },
                        },
                      ],
                    },
                    {
                      name: "update",
                      description: "Update a file system configuration",
                      options: [
                        {
                          name: "--assignment",
                          description:
                            "Flag indicating whether this file system store can be assigned backup jobs",
                        },
                        encryptedCredentialsFlag,
                        labelFlag,
                        loadFactorFlag,
                        {
                          name: "--mmapv1CompressionSetting",
                          description:
                            "Compression setting for the MMAPv1 storage engine snaphots",
                          args: { name: "mmapv1CompressionSetting" },
                        },
                        outputFlag,
                        {
                          name: "--storePath",
                          description:
                            "Location on the file system store host for storing file system-based backups",
                          args: { name: "storePath", template: "filepaths" },
                        },
                        {
                          name: "--wtCompressionSetting",
                          description:
                            "Compression setting for the WiredTiger storage engine snaphots",
                          args: { name: "wtCompressionSetting" },
                        },
                      ],
                      args: { name: "ID" },
                    },
                  ],
                },
                {
                  name: "s3",
                  description: "Manage backup s3 blockstore configurations",
                  subcommands: [
                    {
                      name: ["list", "ls"],
                      description: "List backup s3 blockstore configurations",
                      options: [limitFlag, outputFlag, pageFlag],
                    },
                    {
                      name: ["delete", "rm"],
                      description:
                        "Delete a backup s3 blockstore configuration",
                      options: [forceFlag],
                      args: { name: "ID" },
                    },
                    {
                      name: "create",
                      description:
                        "Create a backup S3 blockstore configuration",
                      options: [
                        {
                          name: "--acceptedTos",
                          description:
                            "Flag that indicates whether you accepted the terms of service for using Amazon S3-compatible stores with Ops Manager",
                        },
                        assignmentFlag,
                        awsAccessKeyFlag,
                        awsSecretKeyFlag,
                        {
                          name: "--disableProxyS3",
                          description:
                            "Flag that indicates whether to use the HTTP proxy when connecting to Amazon S3",
                        },
                        encryptedCredentialsFlag,
                        labelFlag,
                        loadFactorFlag,
                        {
                          name: "--name",
                          description:
                            "Unique name that labels this blockstore",
                          args: { name: "name" },
                        },
                        outputFlag,
                        {
                          name: "--pathStyleAccessEnabled",
                          description:
                            "Flag that indicates the style of the endpoint",
                        },
                        {
                          name: "--s3AuthMethod",
                          description:
                            "Method used to authorize access to the Amazon S3 bucket specified in s3BucketName",
                          args: {
                            name: "s3AuthMethod",
                            suggestions: ["KEYS", "IAM_ROLE"],
                          },
                        },
                        {
                          name: "--s3BucketEndpoint",
                          description:
                            "URL that Ops Manager uses to access this Amazon S3 or S3-compatible bucket",
                          args: { name: "s3BucketEndpoint" },
                        },
                        {
                          name: "--s3BucketName",
                          description:
                            "Name of the Amazon S3 bucket that hosts the S3 blockstore",
                          args: { name: "s3BucketName" },
                        },
                        {
                          name: "--s3MaxConnections",
                          description:
                            "Positive integer that indicates the maximum number of connections to this Amazon S3 blockstore",
                          args: { name: "s3MaxConnections" },
                        },
                        {
                          name: "--sseEnabled",
                          description:
                            "Flag that indicates whether the Amazon S3 blockstore enables server-side encryption",
                        },
                        uriFlag,
                        writeConcernFlag,
                      ],
                    },
                    {
                      name: "update",
                      description:
                        "Update a backup S3 blockstore configuration",
                      options: [
                        {
                          name: "--acceptedTos",
                          description:
                            "Flag that indicates whether you accepted the terms of service for using Amazon S3-compatible stores with Ops Manager",
                        },
                        assignmentFlag,
                        awsAccessKeyFlag,
                        awsSecretKeyFlag,
                        {
                          name: "--disableProxyS3",
                          description:
                            "Flag that indicates whether to use the HTTP proxy when connecting to Amazon S3",
                        },
                        encryptedCredentialsFlag,
                        labelFlag,
                        loadFactorFlag,
                        outputFlag,
                        {
                          name: "--pathStyleAccessEnabled",
                          description:
                            "Flag that indicates the style of the endpoint",
                        },
                        {
                          name: "--s3AuthMethod",
                          description:
                            "Method used to authorize access to the Amazon S3 bucket specified in s3BucketName",
                          args: {
                            name: "s3AuthMethod",
                            suggestions: ["KEYS", "IAM_ROLE"],
                          },
                        },
                        {
                          name: "--s3BucketEndpoint",
                          description:
                            "URL that Ops Manager uses to access this Amazon S3 or S3-compatible bucket",
                          args: { name: "s3BucketEndpoint" },
                        },
                        {
                          name: "--s3BucketName",
                          description:
                            "Name of the Amazon S3 bucket that hosts the S3 blockstore",
                          args: { name: "s3BucketName" },
                        },
                        {
                          name: "--s3MaxConnections",
                          description:
                            "Positive integer that indicates the maximum number of connections to this Amazon S3 blockstore",
                          args: { name: "s3MaxConnections" },
                        },
                        {
                          name: "--sseEnabled",
                          description:
                            "Flag that indicates whether the Amazon S3 blockstore enables server-side encryption",
                        },
                        uriFlag,
                        writeConcernFlag,
                      ],
                      args: { name: "ID" },
                    },
                    {
                      name: ["describe", "get"],
                      description: "Get a backup s3 blockstore configuration",
                      options: [outputFlag],
                      args: { name: "ID" },
                    },
                  ],
                },
                {
                  name: "oplog",
                  description: "Manage backup oplog configurations",
                  subcommands: [
                    {
                      name: ["list", "ls"],
                      description: "List backup oplog configurations",
                      options: [limitFlag, outputFlag, pageFlag],
                    },
                    {
                      name: ["describe", "get"],
                      description: "Get a backup oplog configuration",
                      options: [outputFlag],
                      args: { name: "name" },
                    },
                    {
                      name: "create",
                      description: "Create a backup oplog configuration",
                      options: [
                        {
                          name: "--assignment",
                          description:
                            "Flag indicating whether this oplog can be assigned backup jobs",
                        },
                        encryptedCredentialsFlag,
                        labelFlag,
                        maxCapacityGBFlag,
                        {
                          name: "--name",
                          description:
                            "Unique name that labels this oplog store",
                          args: { name: "name" },
                        },
                        outputFlag,
                        {
                          name: "--ssl",
                          description:
                            "Flag that indicates whether this oplog store accepts only connections encrypted using TLS",
                        },
                        uriFlag,
                        writeConcernFlag,
                      ],
                    },
                    {
                      name: "update",
                      description: "Update a backup oplog configuration",
                      options: [
                        {
                          name: "--assignment",
                          description:
                            "Flag indicating whether this oplog can be assigned backup jobs",
                        },
                        encryptedCredentialsFlag,
                        labelFlag,
                        maxCapacityGBFlag,
                        outputFlag,
                        {
                          name: "--ssl",
                          description:
                            "Flag that indicates whether this oplog store accepts only connections encrypted using TLS",
                        },
                        uriFlag,
                        writeConcernFlag,
                      ],
                      args: { name: "ID" },
                    },
                    {
                      name: ["delete", "rm"],
                      description: "Delete a backup oplog configuration",
                      options: [forceFlag],
                      args: { name: "name" },
                    },
                  ],
                },
                {
                  name: "sync",
                  description: "Manage backup sync configurations",
                  subcommands: [
                    {
                      name: ["list", "ls"],
                      description: "List backup sync configurations",
                      options: [limitFlag, outputFlag, pageFlag],
                    },
                    {
                      name: ["delete", "rm"],
                      description: "Delete a backup sync configuration",
                      options: [forceFlag],
                      args: { name: "ID" },
                    },
                    {
                      name: "create",
                      description: "Create a backup sync configuration",
                      options: [
                        {
                          name: "--assignment",
                          description:
                            "Flag indicating whether this sync store can be assigned backup jobs",
                        },
                        encryptedCredentialsFlag,
                        labelFlag,
                        loadFactorFlag,
                        maxCapacityGBFlag,
                        {
                          name: "--name",
                          description:
                            "Unique name that labels this sync store",
                          args: { name: "name" },
                        },
                        outputFlag,
                        sslFlag,
                        uriFlag,
                        writeConcernFlag,
                      ],
                    },
                    {
                      name: "update",
                      description: "Update a backup sync configuration",
                      options: [
                        {
                          name: "--assignment",
                          description:
                            "Flag indicating whether this sync store can be assigned backup jobs",
                        },
                        encryptedCredentialsFlag,
                        labelFlag,
                        loadFactorFlag,
                        maxCapacityGBFlag,
                        outputFlag,
                        sslFlag,
                        uriFlag,
                        writeConcernFlag,
                      ],
                      args: { name: "ID" },
                    },
                    {
                      name: ["describe", "get"],
                      description: "Get a backup sync configuration",
                      options: [outputFlag],
                      args: { name: "ID" },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: [
            "softwareComponents",
            "softwarecomponents",
            "software-components",
            "softwareComponent",
            "softwarecomponent",
            "software-component",
          ],
          description:
            "Manage earliest and latest versions of MongoDB Agent, MongoDB Tools, and BI Connector in your environment",
          subcommands: [
            {
              name: ["list", "ls"],
              description:
                "List versions of MongoDB Agent, MongoDB Tools, and BI Connector in your environment",
              options: [outputFlag],
            },
          ],
        },
        {
          name: [
            "featurePolicies",
            "featurepolicies",
            "feature-policies",
            "featurePolicy",
            "featurepolicy",
            "feature-policy",
          ],
          description: "Manage feature control policies",
          subcommands: [
            {
              name: ["list", "ls"],
              description: "List feature control policies for your project",
              options: [limitFlag, outputFlag, pageFlag, projectIdFlag],
            },
            {
              name: "update",
              description: "Update feature control policies for your project",
              options: [
                {
                  name: ["--file", "-f"],
                  description:
                    "File name that identifies an optional file with a json policy configuration",
                  args: { name: "file", template: "filepaths" },
                },
                {
                  name: "--name",
                  description:
                    "Identifying label for the external system that manages this Ops Manager Project",
                  args: { name: "name" },
                },
                outputFlag,
                {
                  name: "--policy",
                  description:
                    "List of policies that the external system applies to this Ops Manager Project",
                  args: { name: "policy" },
                  isRepeatable: true,
                },
                projectIdFlag,
                {
                  name: "--systemId",
                  description:
                    "Unique identifier of the external system that manages this Ops Manager Project",
                  args: { name: "systemId" },
                },
              ],
            },
          ],
        },
        {
          name: ["serverUsage", "serverusage", "server-usage"],
          description: "Manage your server usage",
          subcommands: [
            {
              name: ["projects", "project"],
              description: "Manage your server usage for a project",
              subcommands: [
                {
                  name: ["serverType", "servertype", "server-type"],
                  description: "Manage your server type for a project",
                  subcommands: [
                    {
                      name: ["describe", "get"],
                      description: "Get the default server type for a project",
                      options: [outputFlag, projectIdFlag],
                    },
                    {
                      name: "set",
                      description: "Set the default server type for a project",
                      options: [projectIdFlag],
                      args: { name: "type" },
                    },
                  ],
                },
                {
                  name: ["hosts", "host"],
                  description: "Manage host assignment for a project",
                  subcommands: [
                    {
                      name: ["list", "ls"],
                      description: "List all host assignments for one project",
                      options: [
                        endDateFlag2,
                        limitFlag,
                        outputFlag,
                        pageFlag,
                        projectIdFlag,
                        startDateFlag2,
                      ],
                    },
                  ],
                },
              ],
            },
            {
              name: ["organizations", "organization"],
              description: "Manage your server usage for an organization",
              subcommands: [
                {
                  name: ["serverType", "servertype", "server-type"],
                  description: "Manage your server type for an organization",
                  subcommands: [
                    {
                      name: ["describe", "get"],
                      description:
                        "Get the default server type for an organization",
                      options: [orgIdFlag, outputFlag],
                    },
                    {
                      name: "set",
                      description:
                        "Set the default server type for an organization",
                      options: [orgIdFlag],
                      args: { name: "type" },
                    },
                  ],
                },
                {
                  name: ["hosts", "host"],
                  description: "Manage host assignment for an organization",
                  subcommands: [
                    {
                      name: ["list", "ls"],
                      description:
                        "List all host assignments for one organization",
                      options: [
                        endDateFlag2,
                        limitFlag,
                        orgIdFlag,
                        outputFlag,
                        pageFlag,
                        startDateFlag2,
                      ],
                    },
                  ],
                },
              ],
            },
            {
              name: "capture",
              description:
                "Capture a snapshot of usage for the processes Ops Manager manages",
            },
            {
              name: "download",
              description: "Download the server usage report",
              options: [
                endDateFlag2,
                forceFlag2,
                {
                  name: "--format",
                  description: "Compression format of the resulting report",
                  args: {
                    name: "format",
                    suggestions: ["ZIP", "TAR", ".GZ"],
                    default: "tar.gz",
                  },
                },
                outFlag,
                {
                  name: "--skipRedaction",
                  description:
                    "Flag that indicates whether to skip the redaction of sensitive values",
                },
                startDateFlag2,
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
                  description: "Create one new organization link",
                  options: [
                    {
                      name: "--linkToken",
                      description: "Link-token generated by Atlas",
                      args: { name: "linkToken" },
                    },
                    orgIdFlag,
                  ],
                },
                {
                  name: ["delete", "rm"],
                  description: "Delete one link-token",
                  options: [forceFlag, orgIdFlag],
                },
                {
                  name: ["describe", "get"],
                  description:
                    "Return the status of the connection between the specified source organization and the target MongoDB Atlas organization",
                  options: [orgIdFlag, outputFlag],
                },
              ],
            },
          ],
        },
        {
          name: ["standby-clusters", "standbyClusters", "sc"],
          description:
            "Manage standby cluster disaster recovery without Ops Manager",
          subcommands: [
            {
              name: "configure",
              description:
                "Configure access to the disaster recovery state file of your standby cluster",
              options: [
                awsAccessKeyFlag,
                awsAuthModeFlag,
                awsProfileFlag,
                awsRegionFlag,
                awsRoleArnFlag,
                awsSecretKeyFlag,
                s3BucketEndpointFlag,
                s3BucketNameFlag,
                s3KeyFlag,
              ],
            },
            {
              name: "describe",
              description:
                "Return the current disaster recovery state of your standby cluster",
              options: [
                awsAccessKeyFlag,
                awsAuthModeFlag,
                awsProfileFlag,
                awsRegionFlag,
                awsRoleArnFlag,
                awsSecretKeyFlag,
                outputFlag,
                s3BucketEndpointFlag,
                s3BucketNameFlag,
                s3KeyFlag,
              ],
            },
            {
              name: "failover",
              description:
                "Trigger a failover of your standby cluster without Ops Manager",
              options: [
                awsAccessKeyFlag,
                awsAuthModeFlag,
                awsProfileFlag,
                awsRegionFlag,
                awsRoleArnFlag,
                awsSecretKeyFlag,
                forceFlag,
                outputFlag,
                s3BucketEndpointFlag,
                s3BucketNameFlag,
                s3KeyFlag,
                {
                  name: ["--watch", "-w"],
                  description:
                    "Flag that indicates whether to watch the DR state file until the failover completes",
                },
              ],
            },
            {
              name: "lag",
              description:
                "Report the replication lag of your standby cluster without Ops Manager",
              options: [
                awsAccessKeyFlag,
                awsAuthModeFlag,
                awsProfileFlag,
                awsRegionFlag,
                awsRoleArnFlag,
                awsSecretKeyFlag,
                {
                  name: ["--output", "-o"],
                  description: "Output format",
                  args: { name: "output" },
                },
                s3BucketEndpointFlag,
                s3BucketNameFlag,
                s3KeyFlag,
                {
                  name: "--shards",
                  description:
                    "Also report the replication lag of each individual shard",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "iam",
      description: "Organization and projects operations",
      subcommands: [
        {
          name: ["projects", "project"],
          description: "Manage your Ops Manager or Cloud Manager projects",
          subcommands: [
            {
              name: ["list", "ls"],
              description: "Return all projects",
              options: [limitFlag, orgIdFlag, outputFlag, pageFlag],
            },
            {
              name: "create",
              description: "Create a project in your organization",
              options: [
                orgIdFlag,
                outputFlag,
                {
                  name: "--ownerId",
                  description:
                    "Unique 24-digit string that identifies the Atlas user to be granted the Project Owner role on the specified project",
                  args: { name: "ownerId" },
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
                  options: [limitFlag, outputFlag, pageFlag, projectIdFlag],
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
                  options: [limitFlag, outputFlag, pageFlag, projectIdFlag],
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
              description: "Manage your Ops Manager or Cloud Manager teams",
              subcommands: [
                {
                  name: ["list", "ls"],
                  description: "Return all teams for a project",
                  options: [limitFlag, outputFlag, pageFlag, projectIdFlag],
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
              name: ["invitations", "invitation"],
              description: "Invitation operations",
              subcommands: [
                {
                  name: ["list", "ls"],
                  description: "Return all pending invitations to your project",
                  options: [emailFlag, outputFlag, projectIdFlag],
                },
                {
                  name: ["describe", "get"],
                  description:
                    "Return the details for the specified pending invitation to your project",
                  options: [outputFlag, projectIdFlag],
                  args: { name: "invitationId" },
                },
                {
                  name: ["delete", "rm"],
                  description:
                    "Remove the specified pending invitation to your project",
                  options: [forceFlag, projectIdFlag],
                  args: { name: "invitationId" },
                },
                {
                  name: ["invite", "create"],
                  description:
                    "Invite the specified MongoDB user to your project",
                  options: [
                    outputFlag,
                    projectIdFlag,
                    {
                      name: "--role",
                      description: "User's roles for the associated project",
                      args: {
                        name: "role",
                        suggestions: [
                          "GROUP_CLUSTER_MANAGER",
                          "GROUP_DATA_ACCESS_ADMIN",
                          "GROUP_DATA_ACCESS_READ_ONLY",
                          "GROUP_DATA_ACCESS_READ_WRITE",
                          "GROUP_OWNER",
                          "GROUP_READ_ONLY",
                          "GROUP_AUTOMATION_ADMIN",
                          "GROUP_BACKUP_ADMIN",
                          "GROUP_MONITORING_ADMIN",
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
                {
                  name: ["update", "updates"],
                  description:
                    "Modifies the details of the specified pending invitation to your project",
                  options: [emailFlag, outputFlag, projectIdFlag, roleFlag2],
                  args: { name: "invitationId", isOptional: true },
                },
              ],
            },
          ],
        },
        {
          name: ["organizations", "organization", "orgs", "org"],
          description: "Manage your Ops Manager or Cloud Manager organizations",
          subcommands: [
            {
              name: ["list", "ls"],
              description: "Return all organizations",
              options: [
                {
                  name: "--includeDeleted",
                  description:
                    "Flag that indictaes whether to include deleted organizations in the list",
                },
                limitFlag,
                {
                  name: "--name",
                  description:
                    "Organization name to perform a case-insensitive search for",
                  args: { name: "name" },
                },
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
              name: "create",
              description:
                "Create an Ops Manager or Cloud Manager organization",
              options: [outputFlag],
              args: { name: "name" },
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
                  options: [limitFlag, orgIdFlag, outputFlag, pageFlag],
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
                  description:
                    "Remove the specified API key for your organization",
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
                      options: [limitFlag, orgIdFlag, outputFlag, pageFlag],
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
              description: "Manage your Ops Manager or Cloud Manager users",
              subcommands: [
                {
                  name: ["list", "ls"],
                  description: "Return all users for an organization",
                  options: [limitFlag, orgIdFlag, outputFlag, pageFlag],
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
                  options: [emailFlag, orgIdFlag, outputFlag, roleFlag2],
                  args: { name: "invitationId", isOptional: true },
                },
                {
                  name: ["invite", "create"],
                  description:
                    "Invite the specified MongoDB user to your organization",
                  options: [
                    orgIdFlag,
                    outputFlag,
                    roleFlag2,
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
          name: [
            "globalApiKeys",
            "globalapikeys",
            "global-api-keys",
            "globalApiKey",
            "globalapikey",
            "global-api-key",
          ],
          description: "Global API Keys operations",
          subcommands: [
            {
              name: ["list", "ls"],
              description:
                "Return all global API keys for your Ops Manager instance",
              options: [limitFlag, outputFlag, pageFlag],
            },
            {
              name: ["describe", "show"],
              description:
                "Return the details for the specified global API key for your Ops Manager instance",
              options: [outputFlag],
              args: { name: "ID" },
            },
            {
              name: "create",
              description:
                "Create a global API key for your Ops Manager instance",
              options: [
                descFlag,
                outputFlag,
                {
                  name: "--role",
                  description:
                    "Role or roles that you want to assign to the API key",
                  args: {
                    name: "role",
                    suggestions: [
                      "GLOBAL_AUTOMATION_ADMIN",
                      "GLOBAL_OWNER",
                      "GLOBAL_READ_ONLY",
                      "GLOBAL_USER_ADMIN",
                    ],
                  },
                  isRepeatable: true,
                },
              ],
            },
            {
              name: "update",
              description:
                "Modify the roles and description for a global API key",
              options: [
                descFlag,
                outputFlag,
                {
                  name: "--role",
                  description:
                    "Role or roles that you want to assign to the API key",
                  args: {
                    name: "role",
                    suggestions: [
                      "GLOBAL_AUTOMATION_ADMIN",
                      "GLOBAL_OWNER",
                      "GLOBAL_READ_ONLY",
                      "GLOBAL_USER_ADMIN",
                    ],
                  },
                  isRepeatable: true,
                },
              ],
              args: { name: "ID" },
            },
            {
              name: ["delete", "rm"],
              description:
                "Remove the specified global API key from your Ops Manager instance",
              options: [forceFlag],
              args: { name: "ID" },
            },
          ],
        },
        {
          name: [
            "globalAccessLists",
            "globalaccesslists",
            "global-access-lists",
            "globalAccessList",
            "globalaccesslist",
            "global-access-list",
            "globalWhitelists",
            "globalwhitelists",
            "global-whitelists",
            "globalWhitelist",
            "globalwhitelist",
            "global-whitelist",
          ],
          description: "Manage IP access list for Global API Key",
          subcommands: [
            {
              name: ["list", "ls"],
              description:
                "Return all IP access list entries for your global API key",
              options: [limitFlag, outputFlag, pageFlag],
            },
            {
              name: ["describe", "show"],
              description:
                "Return the details for the specified access list entry for your global API key",
              options: [outputFlag],
              args: { name: "ID" },
            },
            {
              name: "create",
              description:
                "Create an IP access list entry for your global API key",
              options: [
                {
                  name: "--cidr",
                  description:
                    "Access list entry in CIDR notation to be added for your API key",
                  args: { name: "cidr" },
                },
                {
                  name: "--desc",
                  description:
                    "IP address to add to the access list for your API key",
                  args: { name: "desc" },
                },
                outputFlag,
              ],
            },
            {
              name: ["delete", "rm"],
              description:
                "Remove the specified IP access list entry for your global API key",
              options: [forceFlag],
              args: { name: "ID" },
            },
          ],
        },
        {
          name: ["users", "user"],
          description: "Manage your Ops Manager or Cloud Manager users",
          subcommands: [
            {
              name: "invite",
              description:
                "Create a MongoDB user for your MongoDB application and invite the MongoDB user to your organizations and projects",
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
                  description:
                    "Last name, family name, or surname for the user",
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
                usernameFlag,
              ],
            },
            {
              name: ["describe", "get"],
              description: "Return the details for the specified MongoDB user",
              options: [
                {
                  name: "--id",
                  description: "Unique 24-digit identifier of the user",
                  args: { name: "id" },
                },
                outputFlag,
                usernameFlag,
              ],
            },
            {
              name: ["delete", "rm"],
              description: "Remove the specified Ops Manager user",
              options: [forceFlag],
              args: { name: "userId" },
            },
          ],
        },
        {
          name: ["teams", "team"],
          description: "Manage your Ops Manager or Cloud Manager teams",
          subcommands: [
            {
              name: ["list", "ls"],
              description: "Return all teams for your organization",
              options: [limitFlag, orgIdFlag, outputFlag, pageFlag],
            },
            {
              name: ["describe", "get"],
              description:
                "Return the details for the specified team for your organization",
              options: [
                {
                  name: "--id",
                  description:
                    "Unique 24-digit string that identifies the team",
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
              name: ["users", "user"],
              description: "Manage your Ops Manager or Cloud Manager users",
              subcommands: [
                {
                  name: ["list", "ls"],
                  description: "Return all users for a team",
                  options: [orgIdFlag, outputFlag, teamIdFlag],
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
      ],
    },
    {
      name: "auth",
      description: "Manage the CLI's authentication state",
      subcommands: [
        {
          name: "login",
          description: "Authenticate with MongoDB Cloud Manager",
          options: [
            {
              name: "--noBrowser",
              description: "Don't try to open a browser session",
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
      name: "atlas",
      description:
        "MongoDB Atlas operations (use the dedicated Atlas CLI, 'atlas')",
      deprecated: true,
    },
    {
      name: "login",
      description: "Log in to the CLI (use 'mongocli auth login')",
      deprecated: true,
    },
    {
      name: "logout",
      description: "Log out of the CLI (use 'mongocli auth logout')",
      deprecated: true,
    },
    {
      name: "whoami",
      description:
        "Show the authenticated account (use 'mongocli auth whoami')",
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
    { name: ["--version", "-v"], description: "Version for mongocli" },
  ],
};

export default completionSpec;
