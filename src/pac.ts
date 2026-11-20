// Microsoft Power Platform CLI (pac) v2.15.1 (NuGet Microsoft.PowerApps.CLI, latest stable, 2026-11-20).
// Source: pac.doc.json shipped in the 2.15.1 Microsoft.PowerApps.CLI.Tool (net10.0)
// and Microsoft.PowerApps.CLI (Windows) packages: every command, flag, alias,
// switch, required flag and enum compared. The generated reference docs
// (MicrosoftDocs/power-platform, power-platform/developer/cli/reference) cover
// pac test run, which neither pac.doc.json lists (the verb ships in
// bolt.module.tests.dll). A string-only `--record` flag in that DLL has no help
// text and is left out. The noun aliases (org, powerpages, paportal, pfx,
// virtual-agent) are confirmed in the 2.15.1 assemblies.

const backupRetentionPeriodDays: Fig.Suggestion[] = [
  { name: "7", description: "7" },
  { name: "14", description: "14" },
  { name: "21", description: "21" },
  { name: "28", description: "28" },
];
const solutionTypes: Fig.Suggestion[] = [
  { name: "Unmanaged", description: "Unmanaged" },
  { name: "Managed", description: "Managed" },
  { name: "Both", description: "Both" },
];
const envCopyTypes: Fig.Suggestion[] = [
  { name: "MinimalCopy", description: "MinimalCopy" },
  { name: "FullCopy", description: "FullCopy" },
];
const teamTypes: Fig.Suggestion[] = [
  { name: "Owner", description: "Owner" },
  { name: "Access", description: "Access" },
  { name: "AadSecurityGroup", description: "AadSecurityGroup" },
  { name: "AadOfficeGroup", description: "AadOfficeGroup" },
];
const membershipTypes: Fig.Suggestion[] = [
  { name: "MembersAndGuests", description: "MembersAndGuests" },
  { name: "Members", description: "Members" },
  { name: "Owners", description: "Owners" },
  { name: "Guests", description: "Guests" },
];
const solutionCheckerMode: Fig.Suggestion[] = [
  { name: "none", description: "None" },
  { name: "warn", description: "Warn" },
  { name: "block", description: "Block" },
];
const connectionTemplates: Fig.Suggestion[] = [
  { name: "NoAuth", description: "NoAuth" },
  { name: "BasicAuth", description: "BasicAuth" },
  { name: "ApiKey", description: "ApiKey" },
  { name: "OAuthGeneric", description: "OAuthGeneric" },
  { name: "OAuthAAD", description: "OAuthAAD" },
];
const trueFalse: Fig.Suggestion[] = [
  { name: "true", description: "True" },
  { name: "false", description: "False" },
];
const syncAsync: Fig.Suggestion[] = [
  { name: "sync", description: "Sync" },
  { name: "async", description: "Async" },
];
const skipFault: Fig.Suggestion[] = [
  { name: "skip", description: "Skip" },
  { name: "fault", description: "Fault" },
];
const pcfComponentTypes: Fig.Suggestion[] = [
  { name: "field", description: "Field" },
  { name: "dataset", description: "Dataset" },
];
const pcfFrameworkTypes: Fig.Suggestion[] = [
  { name: "none", description: "None" },
  { name: "react", description: "React" },
];
const pcfPatchStrategies: Fig.Suggestion[] = [
  { name: "None", description: "None" },
  { name: "GitTags", description: "GitTags" },
  { name: "FileTracking", description: "FileTracking" },
  { name: "Manifest", description: "Manifest" },
];
const msBuildVerbosityLevels: Fig.Suggestion[] = [
  { name: "minimal", description: "Minimal" },
  { name: "normal", description: "Normal" },
  { name: "detailed", description: "Detailed" },
  { name: "diagnostic", description: "Diagnostic" },
];
const pcfPatchTargets: Fig.Suggestion[] = [
  { name: "build", description: "Build" },
  { name: "project", description: "Project" },
];
const importPluginType: Fig.Suggestion[] = [
  { name: "Nuget", description: "Nuget" },
  { name: "Assembly", description: "Assembly" },
];
const applicationInstallStates: Fig.Suggestion[] = [
  { name: "NotInstalled", description: "NotInstalled" },
  { name: "Installed", description: "Installed" },
  { name: "All", description: "All" },
];
const solutionPatchStrategies: Fig.Suggestion[] = [
  { name: "None", description: "None" },
  { name: "GitTags", description: "GitTags" },
  { name: "FileTracking", description: "FileTracking" },
  { name: "Solution", description: "Solution" },
];
const logLevels: Fig.Suggestion[] = [
  { name: "Off", description: "Off" },
  { name: "Critical", description: "Critical" },
  { name: "Error", description: "Error" },
  { name: "Warning", description: "Warning" },
  { name: "Information", description: "Information" },
  { name: "Verbose", description: "Verbose" },
  { name: "ActivityTracing", description: "ActivityTracing" },
  { name: "All", description: "All" },
];
const environmentTypes: Fig.Suggestion[] = [
  {
    name: "Trial",
    description: "Trial",
  },
  {
    name: "Sandbox",
    description: "Sandbox",
  },
  {
    name: "Production",
    description: "Production",
  },
  {
    name: "Developer",
    description: "Developer",
  },
  {
    name: "Teams",
    description: "Teams",
  },
  {
    name: "SubscriptionBasedTrial",
    description: "SubscriptionBasedTrial",
  },
];
const azureLocations: Fig.Suggestion[] = [
  { name: "unitedstates", description: "Unitedstates" },
  { name: "unitedstatesfirstrelease", description: "Unitedstatesfirstrelease" },
  { name: "europe", description: "Europe" },
  { name: "asia", description: "Asia" },
  { name: "australia", description: "Australia" },
  { name: "india", description: "India" },
  { name: "japan", description: "Japan" },
  { name: "canada", description: "Canada" },
  { name: "unitedkingdom", description: "Unitedkingdom" },
  { name: "southamerica", description: "Southamerica" },
  { name: "france", description: "France" },
  { name: "unitedarabemirates", description: "Unitedarabemirates" },
  { name: "germany", description: "Germany" },
  { name: "switzerland", description: "Switzerland" },
  { name: "norway", description: "Norway" },
  { name: "korea", description: "Korea" },
];
const basicStandard = ["Basic", "Standard"];
const enabledDisabled = ["Enabled", "Disabled"];
const canvasLayouts = ["Experimental", "SourceCode"];
const licensingReportTypes = [
  "BillingDetailsPerEnvironment",
  "FeatureDetailsPerResource",
];
const environmentSkus = [
  "Standard",
  "Premium",
  "Developer",
  "Basic",
  "Production",
  "Sandbox",
  "Trial",
  "Default",
  "Support",
  "SubscriptionBasedTrial",
  "Teams",
  "Platform",
];
const includeExclude = ["NotSpecified", "Include", "Exclude"];
const advisorScenarios = ["WebApiStarRetirement"];
// ponytail: these two come from the "[A|B|C]" prose in the SolutionPackager flag help
const packagerErrorLevels = ["Verbose", "Info", "Warning", "Error", "Off"];
const packagerComponentTypes = ["WebResource", "Plugin", "Workflow", "None"];
const orgSettingsIncludes = [
  "autonumbering",
  "calendar",
  "customization",
  "emailtracking",
  "externalapplications",
  "general",
  "isvconfig",
  "marketing",
  "outlooksynchronization",
  "relationshiproles",
  "sales",
];

const environmentOption: Fig.Option = {
  name: ["--environment", "-env"],
  description:
    "Specifies the target Dataverse. The value may be a Guid or absolute https URL. When not specified, the active organization selected for the current auth profile will be used",
  args: { name: "environment" },
};
const columnsOption: Fig.Option = {
  name: "--columns",
  description:
    "Comma-separated list of response properties to include in table output. Use --json for the complete response",
  args: { name: "columns" },
};
const websiteIdOption: Fig.Option = {
  name: "--id",
  description: "Website unique identifier (ID)",
  isRequired: true,
  args: { name: "id" },
};
const validateOnlyOption: Fig.Option = {
  name: "--validate-only",
  description:
    "When true, validates the request without executing it. Use with validateProperties to validate only specific fields; if validateProperties is empty, the entire request is validated. Defaults to false (validate and execute)",
  args: { name: "validate-only" },
};
const validatePropertiesOption: Fig.Option = {
  name: "--validate-properties",
  description:
    'A comma-separated list of property names to validate (e.g. "property1,property2"). Applies only when validateOnly is true',
  args: { name: "validate-properties" },
};
const maxAsyncWaitTimeOption: Fig.Option = {
  name: ["--max-async-wait-time", "-wt"],
  description:
    "Max asynchronous wait time in minutes. The default value is 60 minutes",
  args: { name: "max-async-wait-time" },
};
const botIdOption: Fig.Option = {
  name: "--bot-id",
  description: "The bot ID",
  isRequired: true,
  args: { name: "bot-id" },
};
const outputDirectoryOption: Fig.Option = {
  name: ["--outputDirectory", "-o"],
  description: "Output directory",
  args: { name: "outputDirectory" },
};
const entitlementIdOption: Fig.Option = {
  name: "--entitlement-id",
  description: "The entitlement ID",
  isRequired: true,
  args: { name: "entitlement-id" },
};
const billingPolicyIdOption: Fig.Option = {
  name: "--billing-policy-id",
  description: "The billing policy ID",
  isRequired: true,
  args: { name: "billing-policy-id" },
};
const pageSizeOption: Fig.Option = {
  name: "--page-size",
  description: "The page size for pagination",
  args: { name: "page-size" },
};
const componentIdOption: Fig.Option = {
  name: ["--component-id", "-id"],
  description: "Dataverse record ID (GUID) for the component",
  isRequired: true,
  args: { name: "component-id" },
};
const componentTypeOption: Fig.Option = {
  name: ["--component-type", "-t"],
  description:
    "Component type (for example, ServiceEndpoint, PluginAssembly, CopilotStudio)",
  isRequired: true,
  args: { name: "component-type" },
};
const asyncOption: Fig.Option = {
  name: ["--async", "-a"],
  description:
    "Optional boolean argument to run pac verbs asynchronously, defaults to false",
};
const policyIdOption: Fig.Option = {
  name: "--policy-id",
  description: "The unique identifier of the policy",
  isRequired: true,
  args: { name: "policy-id" },
};
const fromDateOption: Fig.Option = {
  name: "--from-date",
  description: "The start date (inclusive) of the query range",
  isRequired: true,
  args: { name: "from-date" },
};
const toDateOption: Fig.Option = {
  name: "--to-date",
  description: "The end date (inclusive) of the query range",
  isRequired: true,
  args: { name: "to-date" },
};
const startDateOption: Fig.Option = {
  name: "--start-date",
  description: "The start date for the query range",
  isRequired: true,
  args: { name: "start-date" },
};
const endDateOption: Fig.Option = {
  name: "--end-date",
  description:
    "The end date for the query range. Defaults to current UTC time if not provided",
  args: { name: "end-date" },
};
const environmentIdOption: Fig.Option = {
  name: "--environment-id",
  description: "Filter by environment identifier",
  args: { name: "environment-id" },
};
const continuationTokenOption: Fig.Option = {
  name: "--continuation-token",
  description: "Continuation token for paging",
  args: { name: "continuation-token" },
};
const catalogEnvironmentOption: Fig.Option = {
  name: ["--environment", "-env"],
  description:
    "Url or ID of the environment that has catalog installed. When not specified, the active organization selected for the current auth profile will be used",
  args: { name: "environment" },
};
const groupIdOption: Fig.Option = {
  name: "--group-id",
  description: "The group ID",
  isRequired: true,
  args: { name: "group-id" },
};
const pageNumberOption: Fig.Option = {
  name: "--page-number",
  description: "The page number for pagination",
  args: { name: "page-number" },
};
const flowIdOption: Fig.Option = {
  name: "--flow-id",
  description: "The flow ID",
  isRequired: true,
  args: { name: "flow-id" },
};

const completionSpec: Fig.Spec = {
  name: "pac",
  description: "Microsoft Power Platform CLI",
  subcommands: [
    {
      name: "admin",
      description: "Work with your Power Platform Admin Account",
      subcommands: [
        {
          name: "list",
          description: "List all environments from your tenant",
          options: [
            {
              name: ["--environment", "-env"],
              description:
                "List all environments that contain given string in their name or ID",
              args: { name: "environment" },
            },
            {
              name: ["--type", "-t"],
              description: "List all environments with the given type",
              args: { name: "type", suggestions: environmentTypes },
            },
            {
              name: ["--name", "-n"],
              description:
                "List all environments that contain given string in their name",
              args: { name: "name" },
            },
            {
              name: ["--application", "-a"],
              description:
                "List all environments that have specified application installed. To specify application, use unique name or ID",
              args: { name: "application" },
            },
          ],
        },
        {
          name: "create",
          description: "Creates a Dataverse instance in your tenant",
          options: [
            {
              name: ["--name", "-n"],
              description: "Sets the name of the environment",
              args: { name: "name" },
            },
            {
              name: ["--region", "-r"],
              description:
                "Sets the environment's region name. [defaults to unitedstates]",
              args: { name: "region", suggestions: azureLocations },
            },
            {
              name: ["--type", "-t"],
              description: "Sets the environment Type",
              isRequired: true,
              args: { name: "type", suggestions: environmentTypes },
            },
            {
              name: ["--currency", "-c"],
              description:
                "Sets the currency used for your environment. [defaults to USD]",
              args: { name: "currency" },
            },
            {
              name: ["--language", "-l"],
              description:
                "Sets the language used for your environment. [defaults to English]",
              args: { name: "language" },
            },
            {
              name: ["--templates", "-tm"],
              description:
                'Sets the Dynamics 365 app that needs to be deployed, passed as comma separated values. For example: -tm "D365_Sample, D365_Sales"',
              args: { name: "templates" },
            },
            {
              name: ["--domain", "-d"],
              description:
                "The domain name is part of the environment URL. If domain name is already in use, a numeric value is appended to the domain name. For example: If 'contoso' is already in use, then the environment URL is updated to https://{contoso}0.crm.dynamics.com",
              args: { name: "domain" },
            },
            {
              name: ["--input-file", "-if"],
              description:
                'The verb arguments to be passed in a .json input file. For example: {"name" : "contoso"}. The arguments passed through command-line will take precedence over arguments from the .json input file',
              args: { name: "input-file" },
            },
            asyncOption,
            maxAsyncWaitTimeOption,
            {
              name: ["--user", "-u"],
              description:
                "Object ID or user principal name (UPN) of Microsoft Entra ID user to be assigned to the environment",
              args: { name: "user" },
            },
            {
              name: ["--app-version", "-av"],
              description:
                "(Preview) Pin the application version to a specific build (e.g. 10.0.43). Consumed by Finance & Operations or Project Operations templates only; ignored otherwise",
              args: { name: "app-version" },
            },
            {
              name: ["--enable-demo-data", "-edd"],
              description:
                "(Preview) Install demo data in the environment. Consumed by Finance & Operations or Project Operations templates only; ignored otherwise",
            },
            {
              name: ["--enable-dev-tools", "-edt"],
              description:
                "(Preview) Enable developer tooling (X++ development tools) for the environment. Consumed by Finance & Operations or Project Operations templates only; ignored otherwise. Use 'pac admin list-app-templates' to discover available templates",
            },
            {
              name: ["--enable-test-modules", "-etm"],
              description:
                "(Preview) Install F&O test modules in the environment. Consumed by Finance & Operations or Project Operations templates only; ignored otherwise",
            },
            {
              name: "--macro-region",
              description:
                "Sets the environment's macro-region ID. Currently known IDs: asia-pacific, emea, eu-efta, europe-uk, north-america, the-americas",
              args: { name: "macro-region" },
            },
            {
              name: ["--platform-version", "-pv"],
              description:
                "(Preview) Pin the platform version (e.g. 7.0.7256). Requires --app-version. Consumed by Finance & Operations or Project Operations templates only; ignored otherwise",
              args: { name: "platform-version" },
            },
            {
              name: ["--security-group-id", "-sgid"],
              description:
                "Microsoft Entra ID Security Group Id or Microsoft 365 Group Id (required for Teams environment)",
              args: { name: "security-group-id" },
            },
          ],
        },
        {
          name: "backup",
          description: "Takes a manual backup of your environment",
          options: [
            {
              name: ["--environment", "-env"],
              description:
                "Environment URL or ID of the Environment that requires backup",
              args: { name: "environment" },
            },
            {
              name: ["--label", "-l"],
              description: "Sets the backup label as provided",
              isRequired: true,
              args: { name: "label" },
            },
          ],
        },
        {
          name: "set-backup-retention-period",
          description:
            "Sets the backup retention period in days as provided. Valid values are: 7, 14, 21, 28",
          options: [
            {
              name: ["--environment", "-env"],
              description:
                "Environment URL or ID of the Environment that requires backup",
              args: { name: "environment" },
            },
            {
              name: ["--backup-retention-period", "-br"],
              description:
                "Sets the backup retention period in days as provided. Valid values are: 7, 14, 21, 28",
              isRequired: true,
              args: {
                name: "backup-retention-period",
                suggestions: backupRetentionPeriodDays,
              },
            },
            asyncOption,
            maxAsyncWaitTimeOption,
          ],
        },
        {
          name: "delete",
          description: "Deletes the environment from your tenant",
          options: [
            {
              name: ["--environment", "-env"],
              description:
                "Environment URL or ID of the Environment that needs to be deleted from your tenant",
              args: { name: "environment" },
            },
            asyncOption,
            maxAsyncWaitTimeOption,
          ],
        },
        {
          name: "reset",
          description: "Reset the environment from your tenant",
          options: [
            {
              name: ["--environment", "-env"],
              description:
                "URL or ID of the Environment that needs to be reset",
              args: { name: "environment" },
            },
            {
              name: ["--currency", "-c"],
              description:
                "Sets the currency used for your environment. [defaults to USD]",
              args: { name: "currency" },
            },
            {
              name: ["--domain", "-d"],
              description:
                "The domain name is part of the environment URL. If domain name is already in use, a numeric value is appended to the domain name. For example: If 'contoso' is already in use, then the environment URL is updated to https://{contoso}0.crm.dynamics.com",
              args: { name: "domain" },
            },
            {
              name: ["--name", "-n"],
              description: "Sets the name of the environment",
              args: { name: "name" },
            },
            {
              name: ["--language", "-l"],
              description:
                "Sets the language used for your environment. [defaults to English]",
              args: { name: "language" },
            },
            {
              name: ["--purpose", "-p"],
              description:
                "Sets the description used to associate the environment with a specific intent",
              args: { name: "purpose" },
            },
            {
              name: ["--templates", "-tm"],
              description:
                'Sets the Dynamics 365 app that needs to be deployed, passed as comma separated values. For example: -tm "D365_Sample, D365_Sales"',
              args: { name: "templates" },
            },
            {
              name: ["--input-file", "-if"],
              description:
                'The verb arguments to be passed in a .json input file. For example: {"name" : "contoso"}. The arguments passed through command-line will take precedence over arguments from the .json input file',
              args: { name: "input-file" },
            },
            asyncOption,
            maxAsyncWaitTimeOption,
          ],
        },
        {
          name: "list-backups",
          description: "Lists all backups of your environment",
          options: [
            {
              name: ["--environment", "-env"],
              description:
                "List all environments that contain a given string in their Environment ID or URL",
              args: { name: "environment" },
            },
          ],
        },
        {
          name: "restore",
          description: "Restores an environment to a given backup",
          options: [
            {
              name: ["--source-env", "-se"],
              description:
                "Environment URL or ID of the source environment required for restore",
              args: { name: "source-env" },
            },
            {
              name: ["--target-env", "-te"],
              description:
                "Environment URL or ID of the target environment required for restore. This would default to source URL/ID if not provided",
              args: { name: "target-env" },
            },
            {
              name: ["--selected-backup", "-sb"],
              description:
                "DateTime of the backup in 'mm/dd/yyyy hh:mm' format OR string 'latest'",
              isRequired: true,
              args: { name: "selected-backup" },
            },
            {
              name: ["--name", "-n"],
              description: "Optional name of the restored environment",
              args: { name: "name" },
            },
            {
              name: ["--skip-audit-data", "-sa"],
              description:
                "Switch indicating whether audit data should be skipped",
            },
            asyncOption,
            maxAsyncWaitTimeOption,
          ],
        },
        {
          name: "copy",
          description: "Copy Source Environment to Destination Environment",
          options: [
            {
              name: ["--source-env", "-se"],
              description:
                "Environment URL or ID of the source environment that is being copied",
              args: { name: "source-env" },
            },
            {
              name: ["--target-env", "-te"],
              description: "Environment URL or ID of the target environment",
              args: { name: "target-env" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the target environment",
              args: { name: "name" },
            },
            {
              name: ["--type", "-t"],
              description:
                "Type of environment copy to perform with the admin copy command",
              args: { name: "type", suggestions: envCopyTypes },
            },
            {
              name: ["--skip-audit-data", "-sa"],
              description:
                "Switch indicating whether audit data should be skipped",
            },
            asyncOption,
            maxAsyncWaitTimeOption,
          ],
        },
        {
          name: "status",
          description:
            "This command lists the status of all the operations in progress",
        },
        {
          name: "assign-user",
          description:
            "Assign a user to a target Dataverse environment with specified security role",
          options: [
            {
              name: ["--environment", "-env"],
              description: "ID or URL of the environment to assign a user to",
              args: { name: "environment" },
            },
            {
              name: ["--user", "-u"],
              description:
                "Object ID or user principal name (UPN) of Microsoft Entra ID user to be assigned to the environment or Application ID if assigning an Application User",
              isRequired: true,
              args: { name: "user" },
            },
            {
              name: ["--role", "-r"],
              description: "Name or ID of security role to be applied to user",
              isRequired: true,
              args: { name: "role" },
            },
            {
              name: ["--application-user", "-au"],
              description:
                "Specifies whether the input user is an application user. If a business unit isn't specified, the application user is added to the authenticated users business unit",
            },
            {
              name: ["--business-unit", "-bu"],
              description:
                "ID of business unit to associate application user with",
              args: { name: "business-unit" },
            },
            {
              name: ["--async", "-a"],
              description:
                "Optional boolean argument to run pac verbs asynchronously, defaults to false. Deprecated: this parameter is ignored",
              deprecated: true,
            },
          ],
        },
        {
          name: "assign-group",
          description:
            "Assign group to target Dataverse environment with specified security role",
          options: [
            {
              name: ["--environment", "-env"],
              description: "ID or URL of the environment to assign a user to",
              args: { name: "environment" },
            },
            {
              name: ["--group", "-g"],
              description:
                "Microsoft Entra ID object ID of group to assign to target Dataverse environment",
              isRequired: true,
              args: { name: "group" },
            },
            {
              name: ["--group-name", "-gn"],
              description: "Name of the group or team to create in Dataverse",
              isRequired: true,
              args: { name: "group-name" },
            },
            {
              name: ["--role", "-r"],
              description: "Name or ID of security role to be applied to user",
              isRequired: true,
              args: { name: "role" },
            },
            {
              name: ["--team-type", "-tt"],
              description: "Type of team",
              isRequired: true,
              args: { name: "team-type", suggestions: teamTypes },
            },
            {
              name: ["--membership-type", "-mt"],
              description: "Team membership type",
              isRequired: true,
              args: { name: "membership-type", suggestions: membershipTypes },
            },
            {
              name: ["--business-unit", "-bu"],
              description:
                "ID of business unit to associate application user with",
              args: { name: "business-unit" },
            },
          ],
        },
        {
          name: "list-app-templates",
          description:
            "Lists all supported Dataverse templates of model-driven apps in Dynamics 365",
          options: [
            {
              name: ["--region", "-r"],
              description:
                "Sets the environment's region name. [defaults to unitedstates]",
              args: { name: "region", suggestions: azureLocations },
            },
          ],
        },
        {
          name: "create-service-principal",
          description:
            "Add Microsoft Entra ID application and associated application user to the Dataverse environment",
          options: [
            {
              name: ["--environment", "-env"],
              description:
                "Environment (ID, org ID, url, unique name, or partial name)",
              args: { name: "environment" },
            },
            {
              name: ["--name", "-n"],
              description: "Application name to create in Entra ID",
              args: { name: "name" },
            },
            {
              name: ["--role", "-r"],
              description:
                "Name or ID of security role to be applied to application user. The default value is: 'System Administrator'",
              args: { name: "role" },
            },
          ],
        },
        {
          name: "list-service-principal",
          description:
            "List Microsoft Entra ID applications which have access to Dataverse",
          options: [
            {
              name: ["--filter", "-f"],
              description: "Application name 'starts with' filter",
              args: { name: "filter" },
            },
            {
              name: ["--max", "-m"],
              description: "Max number of applications to show. Default: 20",
              args: { name: "max" },
            },
          ],
        },
        {
          name: "set-governance-config",
          description: "Enable, disable, and edit managed environments",
          options: [
            {
              name: ["--environment", "-env"],
              description:
                "URL or ID of the environment for which managed environments need to be enabled, disabled or edited",
              isRequired: true,
              args: { name: "environment" },
            },
            {
              name: ["--protection-level", "-pl"],
              description:
                "Set protection level : 'Standard' to enable managed environments, 'Basic' to disable managed environments",
              isRequired: true,
              args: { name: "protection-level", suggestions: basicStandard },
            },
            {
              name: ["--disable-group-sharing", "-dgs"],
              description: "Disable group sharing",
            },
            {
              name: ["--exclude-analysis", "-ea"],
              description:
                "Exclude usage insights for the environment from the weekly digest email",
            },
            {
              name: ["--include-insights", "-ii"],
              description:
                "Include insights in the Power Platform Admin Center homepage cards",
            },
            {
              name: ["--limit-sharing-mode", "-lsm"],
              description: "Limit sharing mode",
              args: { name: "limit-sharing-mode" },
            },
            {
              name: ["--max-limit-user-sharing", "-ml"],
              description:
                "If group sharing is disabled, specify the number of people that makers can share canvas apps with",
              args: { name: "max-limit-user-sharing" },
            },
            {
              name: ["--solution-checker-mode", "-scm"],
              description: "Solution checker validation mode",
              args: {
                name: "solution-checker-mode",
                suggestions: solutionCheckerMode,
              },
            },
            {
              name: ["--checker-rule-overrides", "-cro"],
              description: "Solution checker rule overrides",
              args: { name: "checker-rule-overrides" },
            },
            {
              name: ["--cloud-flows-limit", "-cfl"],
              description:
                "Number of people that makers can share solution cloud flows with",
              args: { name: "cloud-flows-limit" },
            },
            {
              name: ["--cloud-flows-mode", "-cfm"],
              description: "Solution cloud flows limit sharing mode",
              args: { name: "cloud-flows-mode" },
            },
            {
              name: ["--maker-onboarding-markdown", "-mom"],
              description: "Maker onboarding markdown",
              args: { name: "maker-onboarding-markdown" },
            },
            {
              name: ["--maker-onboarding-url", "-mou"],
              description: "Maker onboarding URL",
              args: { name: "maker-onboarding-url" },
            },
            {
              name: ["--suppress-validation-emails", "-sve"],
              description: "Suppress validation emails",
            },
          ],
        },
        {
          name: "list-tenant-settings",
          description: "List tenant settings",
          options: [
            {
              name: ["--settings-file", "-s"],
              description: "The .json file to output tenant settings",
              args: { name: "settings-file" },
            },
          ],
        },
        {
          name: "update-tenant-settings",
          description: "Update tenant settings",
          options: [
            {
              name: ["--settings-file", "-s"],
              description: "The .json file with tenant settings",
              args: { name: "settings-file" },
            },
            {
              name: ["--setting-name", "-n"],
              description:
                "Name of the setting to be updated. For example: powerPlatform.helpSupportSettings.useSupportBingSearchByAllUsers",
              args: { name: "setting-name" },
            },
            {
              name: ["--setting-value", "-v"],
              description: "Value of the setting to be updated",
              args: { name: "setting-value" },
            },
          ],
        },
        {
          name: "application",
          description: "Work with Microsoft Entra ID applications",
          subcommands: [
            {
              name: "list",
              description:
                "List Microsoft Entra ID applications registered under your tenant",
            },
            {
              name: "register",
              description:
                "Register Microsoft Entra ID application with your tenant",
              options: [
                {
                  name: ["--application-id", "-id"],
                  description: "Application Id",
                  isRequired: true,
                  args: { name: "application-id" },
                },
              ],
            },
            {
              name: "unregister",
              description:
                "Unregister Microsoft Entra ID application from your tenant",
              options: [
                {
                  name: ["--application-id", "-id"],
                  description: "Application Id",
                  isRequired: true,
                  args: { name: "application-id" },
                },
              ],
            },
          ],
        },
        {
          name: "add-group",
          description: "Add environment to a group",
          options: [
            {
              name: ["--environment-group", "-eg"],
              description: "Environment group",
              isRequired: true,
              args: { name: "environment-group" },
            },
            {
              name: ["--environment", "-env"],
              description:
                "Environment (ID, org ID, url, unique name, or partial name)",
              args: { name: "environment" },
            },
          ],
        },
        {
          name: "dlp-policy",
          description: "Work with data loss prevention (DLP) policies",
          subcommands: [
            { name: "list", description: "List DLP policies in the tenant" },
            {
              name: "show",
              description: "Show details of a specific DLP policy",
              options: [
                {
                  name: ["--policy-name", "-pn"],
                  description: "The policy name (GUID identifier)",
                  isRequired: true,
                  args: { name: "policy-name" },
                },
              ],
            },
          ],
        },
        {
          name: "list-groups",
          description: "List environment groups from your tenant",
        },
        {
          name: "list-roles",
          description: "List security roles from a Dataverse environment",
          options: [
            {
              name: ["--business-unit", "-bu"],
              description:
                "Name or ID of business unit to filter security roles by",
              args: { name: "business-unit" },
            },
            {
              name: ["--environment", "-env"],
              description:
                "ID or URL of the environment to list security roles from",
              args: { name: "environment" },
            },
            {
              name: "--include-child-roles",
              description:
                "Include child security roles. By default, only parent security roles are listed",
            },
          ],
        },
        {
          name: "query",
          description: "Run tenant-level resource query",
          options: [
            {
              name: ["--output-file", "-of"],
              description:
                "Path to save query results. Format depends on --output-type: raw JSON for Json, simple text for List, and CSV for Grid",
              args: { name: "output-file" },
            },
            {
              name: ["--output-type", "-ot"],
              description: "Output type for query results (Defaults to Grid)",
              args: {
                name: "output-type",
                suggestions: ["Json", "List", "Grid"],
              },
            },
            {
              name: ["--query", "-q"],
              description: "Resource Query JSON as a string",
              args: { name: "query" },
            },
            {
              name: ["--query-file", "-qf"],
              description: "Path to a JSON file containing the Resource Query",
              args: { name: "query-file" },
            },
          ],
        },
        {
          name: "self-elevate",
          description:
            "Self-elevate to System Administrator role in an environment (requires Global admin, Power Platform admin, or Dynamics 365 admin)",
          options: [environmentOption],
        },
        {
          name: "set-runtime-state",
          description: "Update environment administration mode",
          options: [
            {
              name: ["--environment", "-env"],
              description:
                "URL or ID of the environment for which administration mode needs to be updated",
              isRequired: true,
              args: { name: "environment" },
            },
            {
              name: ["--runtime-state", "-rs"],
              description: "The environment runtime state",
              isRequired: true,
              args: {
                name: "runtime-state",
                suggestions: ["AdminMode", "Enabled"],
              },
            },
            asyncOption,
            {
              name: ["--background-operations", "-bo"],
              description: "The environment background operations state",
              args: {
                name: "background-operations",
                suggestions: enabledDisabled,
              },
            },
            maxAsyncWaitTimeOption,
          ],
        },
      ],
    },
    {
      name: "analytics",
      description:
        "(Preview) Retrieve and run Power Platform advisor recommendations and remediations",
      subcommands: [
        {
          name: "execute-recommendation-action",
          description:
            "(Preview) Execute a recommended action on a set of recommendation resource(s)",
          options: [
            {
              name: "--action-name",
              description: "The name of the action to execute",
              isRequired: true,
              args: { name: "action-name" },
            },
            {
              name: "--action-parameters",
              description:
                "The collection of parameters to carry out the action for a resource Provide the value as a JSON object",
              isRequired: true,
              args: { name: "action-parameters" },
            },
            {
              name: "--scenario",
              description:
                "The name of the recommendation for which the action is triggered",
              isRequired: true,
              args: { name: "scenario" },
            },
          ],
        },
        {
          name: "get-action-schema",
          description: "(Preview) Gets the schema for an action",
          options: [
            {
              name: "--action-name",
              description: "The name of the action",
              isRequired: true,
              args: { name: "action-name" },
            },
            {
              name: "--scenario",
              description: "The recommendation name",
              isRequired: true,
              args: { name: "scenario" },
            },
            {
              name: "--x-ms-api-version",
              description: "The API version",
              args: { name: "x-ms-api-version" },
            },
          ],
        },
        {
          name: "get-recommendation-resources",
          description:
            "(Preview) Gets the list of resources for a recommendation for the tenant",
          options: [
            {
              name: "--scenario",
              description: "The recommendation name",
              isRequired: true,
              args: { name: "scenario" },
            },
            columnsOption,
            {
              name: "--skip-token",
              description: "Skip token for the next page of resources",
              args: { name: "skip-token" },
            },
          ],
        },
        {
          name: "get-recommendation-scenarios",
          description:
            "(Preview) Gets the list of recommendation scenario names for the tenant",
          options: [
            {
              name: "--x-ms-api-version",
              description: "The API version",
              args: { name: "x-ms-api-version" },
            },
          ],
        },
        {
          name: "get-recommendations",
          description:
            "(Preview) Gets the list of recommendations for the tenant",
          options: [
            columnsOption,
            {
              name: "--skip-token",
              description: "Skip token for the next page of recommendations",
              args: { name: "skip-token" },
            },
          ],
        },
        {
          name: "get-scenario-actions",
          description: "(Preview) Gets allowed actions for a recommendation",
          options: [
            {
              name: "--scenario",
              description: "The recommendation name",
              isRequired: true,
              args: { name: "scenario" },
            },
            {
              name: "--x-ms-api-version",
              description: "The API version",
              args: { name: "x-ms-api-version" },
            },
          ],
        },
      ],
    },
    {
      name: "app-management",
      description:
        "(Preview) Discover and install Dynamics 365 application packages into environments",
      subcommands: [
        {
          name: "get-application-package-install-status",
          description:
            "(Preview) Gets install progress for an operation by its operation ID",
          options: [
            {
              name: "--operation-id",
              description: "Operation ID",
              isRequired: true,
              args: { name: "operation-id" },
            },
            environmentOption,
          ],
        },
        {
          name: "get-environment-application-package",
          description:
            "(Preview) Lists available app packages for a target environment with OData filtering",
          options: [
            {
              name: "--app-install-state",
              description: "Application package install state",
              args: {
                name: "app-install-state",
                suggestions: applicationInstallStates,
              },
            },
            columnsOption,
            environmentOption,
            {
              name: "--lcid",
              description: "Application package supported language ID",
              args: { name: "lcid" },
            },
          ],
        },
        {
          name: "get-tenant-application-package",
          description:
            "(Preview) Get the list of available application packages for a tenant",
          options: [columnsOption],
        },
        {
          name: "install-application-package",
          description:
            "(Preview) Installs an app package by unique name into a target environment",
          options: [
            {
              name: "--unique-name",
              description: "Package unique name",
              isRequired: true,
              args: { name: "unique-name" },
            },
            environmentOption,
            {
              name: "--payload-value",
              description:
                "Payload value to use when installing the application package",
              args: { name: "payload-value" },
            },
          ],
        },
      ],
    },
    {
      name: "application",
      description:
        "Commands for listing and installing available Dataverse applications from Microsoft Marketplace",
      subcommands: [
        {
          name: "list",
          description:
            "List available Dataverse applications from Microsoft Marketplace",
          options: [
            {
              name: ["--environment", "-env"],
              description:
                "List available Dataverse applications for given environment (by ID or url); if not specified, list all applications in the tenant",
              args: { name: "environment" },
            },
            {
              name: ["--output", "-o"],
              description:
                "Location of the JSON file to be created with list of the Dataverse applications from Microsoft Marketplace",
              args: { name: "output" },
            },
            {
              name: ["--installState", "-s"],
              description: "Filter by application install state",
              args: {
                name: "installState",
                suggestions: applicationInstallStates,
              },
            },
          ],
        },
        {
          name: "install",
          description:
            "Installs or updates Dataverse application to target environment",
          options: [
            {
              name: ["--environment", "-env"],
              description:
                "List available Dataverse applications for given environment (by ID or url); if not specified, list all applications in the tenant",
              args: { name: "environment" },
            },
            {
              name: ["--application-name", "-an"],
              description:
                "Unique name of the application to install to the target environment",
              args: { name: "application-name" },
            },
            {
              name: ["--application-list", "-al"],
              description:
                "Location of the JSON file with list of the Dataverse applications from Microsoft Marketplace to be installed",
              args: { name: "application-list" },
            },
          ],
        },
      ],
    },
    {
      name: "auth",
      description: "Manage how you authenticate to various services",
      subcommands: [
        {
          name: "create",
          description:
            "Create and store authentication profiles on this computer",
          options: [
            {
              name: ["--name", "-n"],
              description:
                "The name you want to give to this authentication profile (maximum 30 characters)",
              args: { name: "name" },
            },
            {
              name: ["--url", "-u"],
              description:
                "The resource URL to connect to. Deprecated: use `--environment` instead",
              deprecated: true,
              args: { name: "url" },
            },
            {
              name: ["--username", "-un"],
              description:
                "Optional: The username to authenticate with; shows a Microsoft Entra ID dialog if not specified",
              args: { name: "username" },
            },
            {
              name: ["--password", "-p"],
              description: "Optional: The password to authenticate with",
              args: { name: "password" },
            },
            {
              name: ["--applicationId", "-id"],
              description: "Optional: The application ID to authenticate with",
              args: { name: "applicationId" },
            },
            {
              name: ["--clientSecret", "-cs"],
              description: "Optional: The client secret to authenticate with",
              args: { name: "clientSecret" },
            },
            {
              name: ["--certificateDiskPath", "-cdp"],
              description:
                "Optional: The certificate disk path to authenticate with",
              args: { name: "certificateDiskPath" },
            },
            {
              name: ["--certificatePassword", "-cp"],
              description:
                "Optional: The certificate password to authenticate with",
              args: { name: "certificatePassword" },
            },
            {
              name: ["--tenant", "-t"],
              description:
                "Tenant ID if using application ID/client secret or application ID/client certificate",
              args: { name: "tenant" },
            },
            {
              name: ["--cloud", "-ci"],
              description: "Optional: The cloud instance to authenticate with",
              args: {
                name: "cloud",
                suggestions: [
                  "Public",
                  "UsGov",
                  "UsGovHigh",
                  "UsGovDod",
                  "China",
                  "UsNat",
                  "UsSec",
                ],
              },
            },
            {
              name: ["--deviceCode", "-dc"],
              description:
                "Use the Microsoft Entra ID Device Code flow for interactive sign-in",
            },
            {
              name: ["--managedIdentity", "-mi"],
              description: "Use default Azure identity",
            },
            {
              name: ["--environment", "-env"],
              description:
                "Default environment (ID, url, unique name, or partial name)",
              args: { name: "environment" },
            },
            {
              name: ["--azureDevOpsFederated", "-adof"],
              description:
                "Use Azure DevOps Federation for Service Principal Auth; requires --tenant and --applicationId arguments",
            },
            {
              name: ["--githubFederated", "-ghf"],
              description:
                "Use GitHub Federation for Service Principal Auth; requires --tenant and --applicationId arguments",
            },
          ],
        },
        {
          name: "list",
          description:
            "List the authentication profiles stored on this computer",
        },
        {
          name: "select",
          description: "Select which authentication profile should be active",
          options: [
            {
              name: ["--index", "-i"],
              description: "The index of the profile to be active",
              args: { name: "index" },
            },
            {
              name: ["--name", "-n"],
              description: "The name of the profile to be active",
              args: { name: "name" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a particular authentication profile",
          options: [
            {
              name: ["--index", "-i"],
              description: "The index of the profile to be deleted",
              args: { name: "index" },
            },
            {
              name: ["--name", "-n"],
              description: "The name of the profile to be active",
              args: { name: "name" },
            },
          ],
        },
        {
          name: "update",
          description:
            "Update name or target environment of an existing authentication profile",
          options: [
            {
              name: ["--index", "-i"],
              description: "The index of the profile to be named/renamed",
              isRequired: true,
              args: { name: "index" },
            },
            {
              name: ["--name", "-n"],
              description:
                "The name you want to give to this authentication profile (maximum 30 characters)",
              args: { name: "name" },
            },
            {
              name: ["--environment", "-env"],
              description:
                "Default environment (ID, url, unique name, or partial name)",
              args: { name: "environment" },
            },
          ],
        },
        {
          name: "name",
          description: "Name or rename an existing authentication profile",
          options: [
            {
              name: ["--index", "-i"],
              description: "The index of the profile to be named/renamed",
              isRequired: true,
              args: { name: "index" },
            },
            {
              name: ["--name", "-n"],
              description:
                "The name you want to give to this authentication profile (maximum 30 characters)",
              isRequired: true,
              args: { name: "name" },
            },
          ],
        },
        {
          name: "clear",
          description:
            "Clear all authentication profiles stored on this computer",
        },
        {
          name: "token",
          description:
            "Display a Power Platform API access token for the currently selected authentication profile",
        },
        {
          name: "who",
          description:
            "Display information about currently selected authentication profile",
        },
      ],
    },
    {
      name: "authorization",
      description:
        "(Preview) Manage Power Platform RBAC role definitions and scoped role assignments",
      subcommands: [
        {
          name: "create-environment-group-role-assignment",
          description:
            "(Preview) Creates a new role assignment for the specified environment group. Preview",
          options: [
            {
              name: "--environment-group-id",
              description: "The unique identifier of the environment group",
              isRequired: true,
              args: { name: "environment-group-id" },
            },
            {
              name: "--principal-object-id",
              description: "The Id of the principal to assign",
              args: { name: "principal-object-id" },
            },
            {
              name: "--principal-type",
              description: "The type of the principal",
              args: { name: "principal-type" },
            },
            {
              name: "--role-definition-id",
              description: "The Id of the role definition",
              args: { name: "role-definition-id" },
            },
            {
              name: "--scope",
              description: "The assignment scope",
              args: { name: "scope" },
            },
          ],
        },
        {
          name: "create-environment-role-assignment",
          description:
            "(Preview) Creates a new role assignment for the specified environment. Preview",
          options: [
            environmentOption,
            {
              name: "--principal-object-id",
              description: "The Id of the principal to assign",
              args: { name: "principal-object-id" },
            },
            {
              name: "--principal-type",
              description: "The type of the principal",
              args: { name: "principal-type" },
            },
            {
              name: "--role-definition-id",
              description: "The Id of the role definition",
              args: { name: "role-definition-id" },
            },
            {
              name: "--scope",
              description: "The assignment scope",
              args: { name: "scope" },
            },
          ],
        },
        {
          name: "create-role-assignment",
          description: "(Preview) Creates a new role assignment. Preview",
          options: [
            {
              name: "--principal-object-id",
              description: "The Id of the principal to assign",
              args: { name: "principal-object-id" },
            },
            {
              name: "--principal-type",
              description: "The type of the principal",
              args: { name: "principal-type" },
            },
            {
              name: "--role-definition-id",
              description: "The Id of the role definition",
              args: { name: "role-definition-id" },
            },
            {
              name: "--scope",
              description: "The assignment scope",
              args: { name: "scope" },
            },
          ],
        },
        {
          name: "delete-environment-group-role-assignment",
          description:
            "(Preview) Deletes a role assignment by ID for the specified environment group. Preview",
          options: [
            {
              name: "--environment-group-id",
              description: "The unique identifier of the environment group",
              isRequired: true,
              args: { name: "environment-group-id" },
            },
            {
              name: "--role-assignment-id",
              description: "The unique identifier of the role assignment",
              isRequired: true,
              args: { name: "role-assignment-id" },
            },
          ],
        },
        {
          name: "delete-environment-role-assignment",
          description:
            "(Preview) Deletes a role assignment by ID for the specified environment. Preview",
          options: [
            {
              name: "--role-assignment-id",
              description: "The unique identifier of the role assignment",
              isRequired: true,
              args: { name: "role-assignment-id" },
            },
            environmentOption,
          ],
        },
        {
          name: "delete-role-assignment",
          description: "(Preview) Deletes a role assignment by ID. Preview",
          options: [
            {
              name: "--role-assignment-id",
              description: "The unique identifier of the role assignment",
              isRequired: true,
              args: { name: "role-assignment-id" },
            },
          ],
        },
        {
          name: "list-environment-group-role-assignments",
          description:
            "(Preview) Retrieves a list of role assignments for the specified environment group. Preview",
          options: [
            {
              name: "--environment-group-id",
              description: "The unique identifier of the environment group",
              isRequired: true,
              args: { name: "environment-group-id" },
            },
            columnsOption,
          ],
        },
        {
          name: "list-environment-role-assignments",
          description:
            "(Preview) Retrieves a list of role assignments for the specified environment. Preview",
          options: [columnsOption, environmentOption],
        },
        {
          name: "list-role-assignments",
          description:
            "(Preview) Retrieves a list of role assignments. Preview",
          options: [columnsOption],
        },
        {
          name: "list-role-definitions",
          description:
            "(Preview) Retrieves a list of role definitions. Preview",
          options: [columnsOption],
        },
        {
          name: "search-environment-role-assignments",
          description:
            "(Preview) Searches role assignments for the specified environment, with optional transitive lookup up to parent scopes or down into nested scopes. Preview",
          options: [
            {
              name: "--scope",
              description: "The scope to filter role assignments by",
              isRequired: true,
              args: { name: "scope" },
            },
            {
              name: "--continuation-token",
              description:
                "The continuation token from a previous response, used to retrieve the next page of results",
              args: { name: "continuation-token" },
            },
            environmentOption,
            {
              name: "--expand-environment-clusters",
              description:
                "Whether to include role assignments inherited from the environment cluster an environment belongs to",
              args: { name: "expand-environment-clusters" },
            },
            {
              name: "--expand-environment-groups",
              description:
                "Whether to include role assignments inherited from the environment groups an environment belongs to",
              args: { name: "expand-environment-groups" },
            },
            {
              name: "--expand-security-groups",
              description:
                "Whether to include role assignments inherited from the security groups the principal belongs to",
              args: { name: "expand-security-groups" },
            },
            {
              name: "--include-nested-scopes",
              description:
                "Whether to include role assignments from scopes nested under the provided scope",
              args: { name: "include-nested-scopes" },
            },
            {
              name: "--include-parent-scopes",
              description:
                "Whether to include role assignments from parent scopes up to the tenant",
              args: { name: "include-parent-scopes" },
            },
            {
              name: "--include-virtual-entra-role-assignments",
              description:
                "Whether to include virtual role assignments granted through an Entra directory role",
              args: { name: "include-virtual-entra-role-assignments" },
            },
            {
              name: "--permission",
              description: "The permission to filter by",
              args: { name: "permission" },
            },
            {
              name: "--principal-object-id",
              description: "The Id of the principal to filter by",
              args: { name: "principal-object-id" },
            },
            {
              name: "--principal-type",
              description: "The type of the principal to filter by",
              args: { name: "principal-type" },
            },
          ],
        },
        {
          name: "search-role-assignments",
          description:
            "(Preview) Searches role assignments by scope, principal, and permission, with optional transitive lookup up to parent scopes or down into nested scopes. Preview",
          options: [
            {
              name: "--scope",
              description: "The scope to filter role assignments by",
              isRequired: true,
              args: { name: "scope" },
            },
            {
              name: "--continuation-token",
              description:
                "The continuation token from a previous response, used to retrieve the next page of results",
              args: { name: "continuation-token" },
            },
            {
              name: "--expand-environment-clusters",
              description:
                "Whether to include role assignments inherited from the environment cluster an environment belongs to",
              args: { name: "expand-environment-clusters" },
            },
            {
              name: "--expand-environment-groups",
              description:
                "Whether to include role assignments inherited from the environment groups an environment belongs to",
              args: { name: "expand-environment-groups" },
            },
            {
              name: "--expand-security-groups",
              description:
                "Whether to include role assignments inherited from the security groups the principal belongs to",
              args: { name: "expand-security-groups" },
            },
            {
              name: "--include-nested-scopes",
              description:
                "Whether to include role assignments from scopes nested under the provided scope",
              args: { name: "include-nested-scopes" },
            },
            {
              name: "--include-parent-scopes",
              description:
                "Whether to include role assignments from parent scopes up to the tenant",
              args: { name: "include-parent-scopes" },
            },
            {
              name: "--include-virtual-entra-role-assignments",
              description:
                "Whether to include virtual role assignments granted through an Entra directory role",
              args: { name: "include-virtual-entra-role-assignments" },
            },
            {
              name: "--permission",
              description: "The permission to filter by",
              args: { name: "permission" },
            },
            {
              name: "--principal-object-id",
              description: "The Id of the principal to filter by",
              args: { name: "principal-object-id" },
            },
            {
              name: "--principal-type",
              description: "The type of the principal to filter by",
              args: { name: "principal-type" },
            },
          ],
        },
      ],
    },
    {
      name: "canvas",
      description: "Operating with Power Apps .msapp files",
      subcommands: [
        {
          name: "download",
          description: "Download canvas app as .msapp file",
          options: [
            {
              name: ["--name", "-n"],
              description: "Canvas app exact, partial name, or App ID",
              isRequired: true,
              args: { name: "name" },
            },
            {
              name: ["--file-name", "-f"],
              description:
                "File name (usually with .msapp extension). If not provided file is saved in current directory with 'appname'.msapp",
              args: { name: "file-name" },
            },
            {
              name: ["--overwrite", "-o"],
              description: "Allow file overwrite",
            },
            environmentOption,
            {
              name: ["--extract-to-directory", "-d"],
              description: "Directory name to extract canvas app to",
              args: { name: "extract-to-directory" },
            },
          ],
        },
        {
          name: "list",
          description: "List canvas apps",
          options: [environmentOption],
        },
        {
          name: "pack",
          description: "(Preview) Pack sources into an msapp file",
          options: [
            {
              name: "--sources",
              description: "Directory to sources to be packed",
              isRequired: true,
              args: { name: "sources" },
            },
            {
              name: "--msapp",
              description: "Path to .msapp file",
              args: { name: "msapp" },
            },
            {
              name: "--disable-load-from-yaml",
              description:
                "When specified, disables loading the packed app from *.pa.yaml files in the 'Src' directory. Only supported with 'SourceCode' layout",
            },
            {
              name: "--layout",
              description:
                "The layout to use for the sources directory. Note: 'Experimental' layout is deprecated and will be removed in a future release. Use 'SourceCode' layout for the latest supported layout",
              args: { name: "layout", suggestions: canvasLayouts },
            },
            { name: "--overwrite", description: "Allow file overwrite" },
          ],
        },
        {
          name: "unpack",
          description: "(Preview) Extract an msapp file into sources",
          options: [
            {
              name: "--sources",
              description: "Directory to sources to be unpacked",
              args: { name: "sources" },
            },
            {
              name: "--msapp",
              description: "Path to .msapp file",
              isRequired: true,
              args: { name: "msapp" },
            },
            {
              name: "--layout",
              description:
                "The layout to use for the sources directory. Note: 'Experimental' layout is deprecated and will be removed in a future release. Use 'SourceCode' layout for the latest supported layout",
              args: { name: "layout", suggestions: canvasLayouts },
            },
            { name: "--overwrite", description: "Allow file overwrite" },
          ],
        },
        {
          name: "create",
          description: "Generate a canvas app from a custom connector",
          deprecated: true,
          options: [
            {
              name: "--msapp",
              description: "Path to .msapp file to be generated",
              isRequired: true,
              args: { name: "msapp" },
            },
            {
              name: "--connector-id",
              description:
                "The ID of the Connector to generate the Power App from",
              args: { name: "connector-id" },
            },
            {
              name: "--connector-display-name",
              description:
                "The display name of the Connector to generate the Power App from",
              args: { name: "connector-display-name" },
            },
            {
              name: "--environment",
              description:
                "The target Environment ID or URL. The default value is the environment of your currently active Dataverse Auth Profile",
              args: { name: "environment" },
            },
          ],
        },
      ],
    },
    {
      name: "catalog",
      description: "Commands for working with Catalog in Power Platform",
      subcommands: [
        {
          name: "list",
          description:
            "List all published catalog items from the current Dataverse organization",
          options: [
            {
              name: ["--catalog-item-name", "-n"],
              description: "Catalog item name to search for",
              args: { name: "catalog-item-name" },
            },
            {
              name: ["--catalog-item-id", "-cid"],
              description:
                "Catalog item ID to search for. When catalog item ID is used, catalog item name is ignored",
              args: { name: "catalog-item-id" },
            },
            {
              name: ["--include-active", "-ia"],
              description: "Include active items",
            },
            catalogEnvironmentOption,
          ],
        },
        {
          name: "submit",
          description: "Submit catalog approval request",
          options: [
            {
              name: ["--path", "-p"],
              description: "Path to catalog submission document",
              isRequired: true,
              args: { name: "path" },
            },
            {
              name: ["--package-zip", "-pz"],
              description: "Path to package zip file",
              args: { name: "package-zip" },
            },
            {
              name: ["--solution-zip", "-sz"],
              description: "Path to solution zip file",
              args: { name: "solution-zip" },
            },
            {
              name: ["--poll-status", "-ps"],
              description: "Poll to check status of your request",
            },
            catalogEnvironmentOption,
          ],
        },
        {
          name: "install",
          description: "Install a catalog item to the target environment",
          options: [
            {
              name: ["--catalog-item-id", "-cid"],
              description:
                "Catalog item to be installed on the target environment",
              isRequired: true,
              args: { name: "catalog-item-id" },
            },
            {
              name: ["--target-url", "-tu"],
              description:
                "Url of the target environment for catalog item installation. Deprecated: use `--target-env` instead",
              deprecated: true,
              args: { name: "target-url" },
            },
            {
              name: ["--settings", "-s"],
              description:
                "Runtime Package Settings for the installation framework to execute. The format of the string must be `key=value|key=value`",
              args: { name: "settings" },
            },
            {
              name: ["--target-version", "-tv"],
              description:
                "Target version to install. If left empty, the published version is selected",
              args: { name: "target-version" },
            },
            {
              name: ["--poll-status", "-ps"],
              description: "Poll to check status of your request",
            },
            catalogEnvironmentOption,
            {
              name: ["--target-env", "-te"],
              description:
                "Url or ID of the target environment for catalog item installation",
              args: { name: "target-env" },
            },
          ],
        },
        {
          name: "status",
          description: "Get status of the catalog install/submit request",
          options: [
            {
              name: ["--tracking-id", "-id"],
              description: "Request tracking ID",
              isRequired: true,
              args: { name: "tracking-id" },
            },
            {
              name: ["--type", "-t"],
              description: "Request type",
              isRequired: true,
              args: { name: "type", suggestions: ["Install", "Submit"] },
            },
            catalogEnvironmentOption,
          ],
        },
        {
          name: "update",
          description: "Update settings for the catalog",
          options: [
            {
              name: ["--path", "-p"],
              description: "Path to catalog settings document",
              isRequired: true,
              args: { name: "path" },
            },
            catalogEnvironmentOption,
          ],
        },
        {
          name: "create-submission",
          description:
            "Create catalog submission document. Note: This command will be removed in a future release",
          options: [
            {
              name: ["--path", "-p"],
              description: "Path to catalog submission document",
              args: { name: "path" },
            },
          ],
        },
      ],
    },
    {
      name: "code",
      description:
        "(Preview) Commands to manage your code apps. For the latest features and improvements, use the npm-based Power Apps CLI instead. Learn more at https://aka.ms/pacodeapps",
      subcommands: [
        {
          name: "add-data-source",
          description: "Adds a new datasource to the app",
          options: [
            {
              name: ["--apiId", "-a"],
              description: "The api id of the datasource",
              isRequired: true,
              args: { name: "apiId" },
            },
            {
              name: ["--connectionId", "-c"],
              description: "The connection id of the datasource",
              args: { name: "connectionId" },
            },
            {
              name: ["--connectionRef", "-cr"],
              description: "The connection reference ID",
              args: { name: "connectionRef" },
            },
            {
              name: ["--dataset", "-d"],
              description: "The dataset name of the datasource",
              args: { name: "dataset" },
            },
            {
              name: ["--environment", "-env"],
              description: "The environment URL to connect to the data source",
              args: { name: "environment" },
            },
            {
              name: ["--logLevel", "-l"],
              description: "The logging level for the command",
              args: { name: "logLevel" },
            },
            {
              name: ["--solutionId", "-s"],
              description:
                "The solution ID of the connection reference. Used only when connection reference parameter is present",
              args: { name: "solutionId" },
            },
            {
              name: ["--storedProcedure", "-sp"],
              description:
                "The stored procedure name to add (only supported for shared_sql)",
              args: { name: "storedProcedure" },
            },
            {
              name: ["--table", "-t"],
              description: "The table name of the datasource",
              args: { name: "table" },
            },
          ],
        },
        {
          name: "delete-data-source",
          description: "Deletes a data source from the current app",
          options: [
            {
              name: ["--apiId", "-a"],
              description: "The api id of the datasource",
              isRequired: true,
              args: { name: "apiId" },
            },
            {
              name: ["--dataSourceName", "-ds"],
              description: "The name of the data source to delete",
              isRequired: true,
              args: { name: "dataSourceName" },
            },
            {
              name: ["--storedProcedure", "-sp"],
              description: "The stored procedure name to remove from the app",
              args: { name: "storedProcedure" },
            },
          ],
        },
        {
          name: "init",
          description: "Initializes a Code app in the current directory",
          options: [
            {
              name: ["--displayName", "-n"],
              description: "The display name of the Code app",
              isRequired: true,
              args: { name: "displayName" },
            },
            {
              name: ["--appUrl", "-a"],
              description: "The local url the app is running on",
              args: { name: "appUrl" },
            },
            {
              name: ["--buildPath", "-b"],
              description: "The directory of your apps build assets",
              args: { name: "buildPath" },
            },
            {
              name: ["--description", "-d"],
              description: "The description of the Code App",
              args: { name: "description" },
            },
            environmentOption,
            {
              name: ["--fileEntryPoint", "-f"],
              description: "The entry point for the app to load from",
              args: { name: "fileEntryPoint" },
            },
            {
              name: ["--logoPath", "-l"],
              description: "The path to the logo file for the app",
              args: { name: "logoPath" },
            },
            {
              name: ["--region", "-c"],
              description: "The region to host the Code app in",
              args: { name: "region" },
            },
          ],
        },
        {
          name: "list",
          description:
            "Lists the code apps available in the current environment",
        },
        {
          name: "list-connection-references",
          description:
            "Lists connection references in the specified environment and solution",
          options: [
            {
              name: ["--solutionId", "-s"],
              description:
                "The ID of the solution to list connection references from",
              isRequired: true,
              args: { name: "solutionId" },
            },
            {
              name: ["--environment", "-env"],
              description:
                "The environment URL to list connection references from. If not provided, uses the current environment",
              args: { name: "environment" },
            },
          ],
        },
        {
          name: "list-datasets",
          description: "Lists datasets accessible by the provided connector",
          options: [
            {
              name: ["--apiId", "-a"],
              description: "The api id of the datasource",
              isRequired: true,
              args: { name: "apiId" },
            },
            {
              name: ["--connectionId", "-c"],
              description: "The connection id of the datasource",
              args: { name: "connectionId" },
            },
          ],
        },
        {
          name: "list-sql-stored-procedures",
          description:
            "Lists stored procedures accessible by the provided SQL connection and dataset",
          options: [
            {
              name: ["--connectionId", "-c"],
              description: "The connection id of the datasource",
              isRequired: true,
              args: { name: "connectionId" },
            },
            {
              name: ["--dataset", "-d"],
              description: "The dataset name of the datasource",
              isRequired: true,
              args: { name: "dataset" },
            },
          ],
        },
        {
          name: "list-tables",
          description:
            "Lists tables accessible by the provided connector and dataset",
          options: [
            {
              name: ["--apiId", "-a"],
              description: "The api id of the datasource",
              isRequired: true,
              args: { name: "apiId" },
            },
            {
              name: ["--connectionId", "-c"],
              description: "The connection id of the datasource",
              args: { name: "connectionId" },
            },
            {
              name: ["--dataset", "-d"],
              description: "The dataset name of the datasource",
              args: { name: "dataset" },
            },
          ],
        },
        {
          name: "push",
          description: "Publishes a new version of a Code app",
          options: [
            environmentOption,
            {
              name: ["--solutionName", "-s"],
              description:
                "The Solution Name for the code app to associate with",
              args: { name: "solutionName" },
            },
          ],
        },
        {
          name: "run",
          description:
            "Runs a local server for connections loading locally in the app",
          options: [
            {
              name: ["--appUrl", "-a"],
              description: "The local url the app is running on",
              args: { name: "appUrl" },
            },
            {
              name: ["--port", "-p"],
              description: "The port to run the local server on",
              args: { name: "port" },
            },
          ],
        },
      ],
    },
    {
      name: "connection",
      description: "Commands for working with Dataverse connection",
      subcommands: [
        {
          name: "create",
          description: "Create new Dataverse connection",
          options: [
            {
              name: ["--tenant-id", "-t"],
              description: "Tenant Id",
              isRequired: true,
              args: { name: "tenant-id" },
            },
            {
              name: ["--name", "-n"],
              description: "Connection name",
              isRequired: true,
              args: { name: "name" },
            },
            {
              name: ["--application-id", "-a"],
              description: "Application Id",
              isRequired: true,
              args: { name: "application-id" },
            },
            {
              name: ["--client-secret", "-cs"],
              description: "Client Secret",
              isRequired: true,
              args: { name: "client-secret" },
            },
            environmentOption,
          ],
        },
        {
          name: "delete",
          description: "Delete Dataverse connection",
          options: [
            {
              name: ["--connection-id", "-id"],
              description: "Connection Id",
              isRequired: true,
              args: { name: "connection-id" },
            },
            environmentOption,
          ],
        },
        {
          name: "list",
          description: "List all Connections",
          options: [environmentOption],
        },
        {
          name: "update",
          description: "Update Dataverse connection",
          options: [
            {
              name: ["--tenant-id", "-t"],
              description: "Tenant Id",
              isRequired: true,
              args: { name: "tenant-id" },
            },
            {
              name: ["--connection-id", "-id"],
              description: "Connection Id",
              isRequired: true,
              args: { name: "connection-id" },
            },
            {
              name: ["--application-id", "-a"],
              description: "Application Id",
              isRequired: true,
              args: { name: "application-id" },
            },
            {
              name: ["--client-secret", "-cs"],
              description: "Client Secret",
              isRequired: true,
              args: { name: "client-secret" },
            },
            environmentOption,
          ],
        },
      ],
    },
    {
      name: "connectivity",
      description:
        "(Preview) List an environment's connectors, connector details, and maker connections",
      subcommands: [
        {
          name: "get-connector-by-id",
          description:
            "(Preview) Retrieves a specific connector by ID in the specified environment",
          options: [
            {
              name: "--connector-id",
              description: "ID of the connector",
              isRequired: true,
              args: { name: "connector-id" },
            },
            {
              name: "--filter",
              description: "Filter query to specify the environment",
              isRequired: true,
              args: { name: "filter" },
            },
            environmentOption,
          ],
        },
        {
          name: "list-connections",
          description:
            "(Preview) Retrieves a list of connections in the specified environment",
          options: [columnsOption, environmentOption],
        },
        {
          name: "list-connectors",
          description:
            "(Preview) Retrieves a list of connectors in the specified environment",
          options: [
            {
              name: "--filter",
              description: "Filter query to specify the environment",
              isRequired: true,
              args: { name: "filter" },
            },
            columnsOption,
            environmentOption,
          ],
        },
      ],
    },
    {
      name: "connector",
      description: "Commands for working with Power Platform Connectors",
      subcommands: [
        {
          name: "list",
          description: "List the Connectors registered in Dataverse",
          options: [environmentOption],
        },
        {
          name: "init",
          description: "Initializes a new API Properties file for a Connector",
          options: [
            {
              name: ["--connection-template", "-ct"],
              description:
                "Generate an initial Connection Parameters set with the specified template",
              args: {
                name: "connection-template",
                suggestions: connectionTemplates,
              },
            },
            {
              name: "--generate-script-file",
              description: "Generate an initial Connector Script file",
            },
            {
              name: "--generate-settings-file",
              description: "Generate an initial Connector Settings file",
            },
            outputDirectoryOption,
          ],
        },
        {
          name: "create",
          description: "Creates a new row in the Connector table in Dataverse",
          options: [
            {
              name: ["--api-definition-file", "-df"],
              description:
                "The filename and path to read the Connector's OpenApiDefinition",
              args: { name: "api-definition-file" },
            },
            {
              name: ["--api-properties-file", "-pf"],
              description:
                "The filename and path to read the Connector's API Properties file",
              args: { name: "api-properties-file" },
            },
            {
              name: ["--icon-file", "-if"],
              description: "The filename and path to and Icon .png file",
              args: { name: "icon-file" },
            },
            {
              name: ["--script-file", "-sf"],
              description: "The filename and path to a Script .csx file",
              args: { name: "script-file" },
            },
            {
              name: ["--solution-unique-name", "-sol"],
              description:
                "The unique name of the solution to add the connector to",
              args: { name: "solution-unique-name" },
            },
            environmentOption,
            {
              name: "--settings-file",
              description: "The filename and path Connector Settings file",
              args: { name: "settings-file" },
            },
          ],
        },
        {
          name: "download",
          description:
            "Download a Connector's OpenApiDefinition and API Properties file",
          options: [
            {
              name: ["--connector-id", "-id"],
              description: "The ID of the Connector",
              isRequired: true,
              args: { name: "connector-id" },
            },
            outputDirectoryOption,
            environmentOption,
          ],
        },
        {
          name: "update",
          description: "Updates a Connector Entity in Dataverse",
          options: [
            {
              name: ["--connector-id", "-id"],
              description: "The ID of the Connector",
              args: { name: "connector-id" },
            },
            {
              name: ["--api-definition-file", "-df"],
              description:
                "The filename and path to read the Connector's OpenApiDefinition",
              args: { name: "api-definition-file" },
            },
            {
              name: ["--api-properties-file", "-pf"],
              description:
                "The filename and path to read the Connector's API Properties file",
              args: { name: "api-properties-file" },
            },
            {
              name: ["--icon-file", "-if"],
              description: "The filename and path to and Icon .png file",
              args: { name: "icon-file" },
            },
            {
              name: ["--script-file", "-sf"],
              description: "The filename and path to a Script .csx file",
              args: { name: "script-file" },
            },
            {
              name: ["--solution-unique-name", "-sol"],
              description:
                "The unique name of the solution to add the connector to",
              args: { name: "solution-unique-name" },
            },
            environmentOption,
            {
              name: "--settings-file",
              description: "The filename and path Connector Settings file",
              args: { name: "settings-file" },
            },
          ],
        },
      ],
    },
    {
      name: "copilot-studio",
      description:
        "(Preview) Administer Copilot Studio agents and export tenant licensing reports",
      subcommands: [
        {
          name: "delete-copilot-agent",
          description: "(Preview) Delete a bot",
          options: [botIdOption, environmentOption],
        },
        {
          name: "download-agent-channel-manifest",
          description:
            '(Preview) Downloads the channel manifest package for the specified agent and channel as a zip file. Currently only the "M365" channel is supported',
          options: [
            {
              name: "--agent-id",
              description: "The bot ID",
              isRequired: true,
              args: { name: "agent-id" },
            },
            {
              name: "--channel-name",
              description:
                'The channel name. Currently only "M365" is supported',
              isRequired: true,
              args: { name: "channel-name" },
            },
            {
              name: "--out-file",
              description:
                "The local file path to write the downloaded content to",
              isRequired: true,
              args: { name: "out-file" },
            },
            environmentOption,
            {
              name: "--include-agent-schema",
              description:
                "Whether to include the agent schema in the downloaded manifest package",
              args: { name: "include-agent-schema" },
            },
          ],
        },
        {
          name: "download-licensing-report-file",
          description:
            "(Preview) Downloads a generated licensing report as a gzip-compressed CSV file. Use the file name returned by a report operation with a Succeeded status",
          options: [
            {
              name: "--file-name",
              description:
                "The report file name, returned by a report operation with a Succeeded status",
              isRequired: true,
              args: { name: "file-name" },
            },
            {
              name: "--out-file",
              description:
                "The local file path to write the downloaded content to",
              isRequired: true,
              args: { name: "out-file" },
            },
            {
              name: "--report-name",
              description: "The name of the generated report",
              isRequired: true,
              args: { name: "report-name", suggestions: licensingReportTypes },
            },
          ],
        },
        {
          name: "generate-licensing-report",
          description:
            "(Preview) Starts generating a Copilot Studio licensing report for your tenant over the requested date range. Generation runs asynchronously; poll the URL in the Location header for status. Requires the Global, Dynamics 365, or Power Platform administrator role",
          options: [
            {
              name: "--end-date",
              description:
                "The inclusive UTC end date of the report range. Must be on or after the start date",
              isRequired: true,
              args: { name: "end-date" },
            },
            {
              name: "--report-name",
              description: "The name of the report to generate",
              isRequired: true,
              args: { name: "report-name", suggestions: licensingReportTypes },
            },
            {
              name: "--start-date",
              description: "The inclusive UTC start date of the report range",
              isRequired: true,
              args: { name: "start-date" },
            },
            {
              name: "--granularity",
              description:
                "The granularity of a licensing report. Daily returns one row per day in the date range, and Summary returns a single summarized row for the whole range",
              args: { name: "granularity", suggestions: ["Daily", "Summary"] },
            },
          ],
        },
        {
          name: "get-bot-quarantine-status",
          description: "(Preview) Retrieve the quarantine status of a bot",
          options: [botIdOption, environmentOption],
        },
        {
          name: "get-connector-consent-bypass",
          description:
            "(Preview) Get the admin connector consent bypass setting for a bot",
          options: [botIdOption, environmentOption],
        },
        {
          name: "get-licensing-report-operation",
          description:
            "(Preview) Gets the status of a licensing report generation operation. When the status is Succeeded, the response includes the report file name and the Location header contains the download URL",
          options: [
            {
              name: "--operation-id",
              description:
                "The report operation ID, returned in the Location header when report generation starts",
              isRequired: true,
              args: { name: "operation-id" },
            },
            {
              name: "--report-name",
              description: "The name of the report being generated",
              isRequired: true,
              args: { name: "report-name", suggestions: licensingReportTypes },
            },
          ],
        },
        {
          name: "get-maker-evaluation-test-run",
          description:
            "(Preview) Get the status and results of a specific maker evaluation test run",
          options: [
            botIdOption,
            {
              name: "--test-run-id",
              description: "The test run ID",
              isRequired: true,
              args: { name: "test-run-id" },
            },
            columnsOption,
            environmentOption,
          ],
        },
        {
          name: "get-maker-evaluation-test-set",
          description:
            "(Preview) Get a specific test set for maker evaluation of a bot",
          options: [
            botIdOption,
            {
              name: "--test-set-id",
              description: "The test set ID",
              isRequired: true,
              args: { name: "test-set-id" },
            },
            environmentOption,
          ],
        },
        {
          name: "list-maker-evaluation-test-runs",
          description:
            "(Preview) List all maker evaluation test runs for a bot",
          options: [botIdOption, columnsOption, environmentOption],
        },
        {
          name: "list-maker-evaluation-test-sets",
          description:
            "(Preview) Retrieves the list of test sets for a bot in a specified environment",
          options: [botIdOption, columnsOption, environmentOption],
        },
        {
          name: "reassign-copilot-agent",
          description: "(Preview) Reassign the owner of the bot",
          options: [
            botIdOption,
            {
              name: "--new-owner-aad-user-id",
              description: "The new owner Entra ID",
              isRequired: true,
              args: { name: "new-owner-aad-user-id" },
            },
            environmentOption,
          ],
        },
        {
          name: "run-maker-evaluation-test-set",
          description:
            "(Preview) Trigger a maker evaluation test run for a specific test set",
          options: [
            botIdOption,
            {
              name: "--test-set-id",
              description: "The test set ID",
              isRequired: true,
              args: { name: "test-set-id" },
            },
            environmentOption,
            {
              name: "--evaluation-run-name",
              description: "The name of the evaluation run",
              args: { name: "evaluation-run-name" },
            },
            {
              name: "--mcs-connection-id",
              description:
                "The connection ID for the MCS connector that is used to execute the evaluation run, or leave empty for an anonymous run",
              args: { name: "mcs-connection-id" },
            },
            {
              name: "--run-on-published-bot",
              description:
                "Indicates whether the operation should run on a published bot instance. If set to false, the operation will run on a draft bot instance",
              args: { name: "run-on-published-bot" },
            },
            {
              name: "--tools-connections",
              description:
                "The tools connections that will be used to execute the evaluation run. This is a list of tools along with the corresponding user connections that should be used for each tool. Provide the value as a JSON array",
              args: { name: "tools-connections" },
            },
          ],
        },
        {
          name: "set-bot-as-quarantined",
          description: "(Preview) Set the quarantine status of a bot to true",
          options: [botIdOption, environmentOption],
        },
        {
          name: "set-bot-as-unquarantined",
          description: "(Preview) Set the quarantine status of a bot to false",
          options: [botIdOption, environmentOption],
        },
        {
          name: "set-connector-consent-bypass",
          description:
            "(Preview) Set the admin connector consent bypass setting for a bot",
          options: [
            {
              name: "--admin-consent-bypass",
              description:
                "Indicates whether to enable admin connector consent bypass for the bot",
              isRequired: true,
              args: { name: "admin-consent-bypass" },
            },
            botIdOption,
            environmentOption,
          ],
        },
      ],
    },
    {
      name: ["copilot", "virtual-agent"],
      description: "Tools and utilities for copilot management",
      subcommands: [
        {
          name: "list",
          description:
            "List of copilots in the current or target Dataverse environment",
          options: [environmentOption],
        },
        {
          name: "status",
          description:
            "Poll the deployment status of a specified copilot in the current or target Dataverse environment",
          options: [
            environmentOption,
            {
              name: ["--bot-id", "-id"],
              description: "The ID of a copilot (Chatbot)",
              isRequired: true,
              args: { name: "bot-id" },
            },
          ],
        },
        {
          name: "extract-translation",
          description:
            "Extracts file containing localized content for one or more bots",
          options: [
            environmentOption,
            {
              name: ["--sourcedir", "-src"],
              description:
                "Source solution directory. When specified, will ignore the connected environment when looking for bots and instead look for content in the solution folder",
              args: { name: "sourcedir" },
            },
            {
              name: ["--bot", "-id"],
              description:
                "The Copilot ID or schema name (unique name found in Bot Details or file name in solution explorer)",
              args: { name: "bot" },
            },
            {
              name: "--outdir",
              description: "The output directory to write to",
              args: { name: "outdir" },
            },
            {
              name: "--format",
              description:
                "The file format in which to write localized files, either 'resx' or 'json'. The default is 'resx'",
              args: { name: "format" },
            },
            {
              name: ["--all", "-a"],
              description:
                "Write localization files for all supported languages. By default, only the primary language is written",
            },
            {
              name: ["--overwrite", "-o"],
              description:
                "Allow overwrite of the output data file if it already exists",
            },
          ],
        },
        {
          name: "merge-translation",
          description:
            "Merge files containing localized content for one or more bots",
          options: [
            environmentOption,
            {
              name: ["--sourcedir", "-src"],
              description:
                "Source solution directory. When specified, will ignore the connected environment when looking for bots and instead look for content in the solution folder",
              args: { name: "sourcedir" },
            },
            {
              name: ["--file", "-f"],
              description:
                "The list of files that contain translations. Glob patterns are supported",
              args: { name: "file" },
            },
            {
              name: "--whatif",
              description:
                "Does not execute the command, but outputs the details of what would happen",
            },
            {
              name: "--verbose",
              description:
                "Output more diagnostic information during data import/export",
            },
            {
              name: ["--solution", "-s"],
              description: "Name of the solution",
              args: { name: "solution" },
            },
          ],
        },
        {
          name: "extract-template",
          description:
            "Extracts a template file from an existing copilot in an environment",
          options: [
            environmentOption,
            {
              name: ["--bot", "-id"],
              description:
                "The Copilot ID or schema name (unique name found in Bot Details or file name in solution explorer)",
              isRequired: true,
              args: { name: "bot" },
            },
            {
              name: "--templateFileName",
              description:
                "Location of the yaml file to write the copilot template to",
              isRequired: true,
              args: { name: "templateFileName" },
            },
            {
              name: ["--overwrite", "-o"],
              description:
                "Allow overwrite of the output data file if it already exists",
            },
            {
              name: "--templateName",
              description:
                "Template name or 'kickStartTemplate' if name is not specified",
              args: { name: "templateName" },
            },
            {
              name: "--templateVersion",
              description:
                "Template version in X.X.X format or 1.0.0 if version is not specified",
              args: { name: "templateVersion" },
            },
          ],
        },
        {
          name: "create",
          description:
            "Creates a new copilot using an existing template file as the reference",
          options: [
            environmentOption,
            {
              name: "--schemaName",
              description: "The schema name (unique name) of the new copilot",
              isRequired: true,
              args: { name: "schemaName" },
            },
            {
              name: "--templateFileName",
              description:
                "Source yaml file containing the copilot template that was extracted using the extract-template command",
              isRequired: true,
              args: { name: "templateFileName" },
            },
            {
              name: "--displayName",
              description: "The display name of the new copilot",
              isRequired: true,
              args: { name: "displayName" },
            },
            {
              name: ["--solution", "-s"],
              description: "Name of the solution",
              isRequired: true,
              args: { name: "solution" },
            },
          ],
        },
        {
          name: "clone",
          description:
            "Clone a Copilot Studio agent to a local workspace directory",
          options: [
            {
              name: ["--bot", "-id"],
              description:
                "The Copilot ID or schema name (unique name found in Bot Details or file name in solution explorer)",
              isRequired: true,
              args: { name: "bot" },
            },
            {
              name: ["--component-collection", "-cc"],
              description:
                "Component collection ID to clone. Repeat for multiple",
              args: { name: "component-collection" },
            },
            {
              name: ["--display-name", "-dn"],
              description: "Display name of the agent (used for folder naming)",
              args: { name: "display-name" },
            },
            environmentOption,
            {
              name: ["--output-dir", "-od"],
              description:
                "Root folder for clone output. Defaults to current directory",
              args: { name: "output-dir" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a Custom Copilot",
          options: [
            {
              name: ["--bot", "-id"],
              description:
                "The Copilot ID or schema name (unique name found in Bot Details or file name in solution explorer)",
              isRequired: true,
              args: { name: "bot" },
            },
            {
              name: ["--confirm", "-y"],
              description: "Required to confirm deletion of the copilot",
            },
            environmentOption,
          ],
        },
        {
          name: "init",
          description:
            "Create a new Copilot Studio agent workspace from a template",
          options: [
            {
              name: ["--name", "-n"],
              description: "Agent display name",
              isRequired: true,
              args: { name: "name" },
            },
            {
              name: ["--publisher-prefix", "-pp"],
              description: "Publisher customization prefix for the solution",
              isRequired: true,
              args: { name: "publisher-prefix" },
            },
            {
              name: ["--authoring-mode", "-am"],
              description:
                "The agent authoring shape to scaffold (default: 'classic'). Use 'cli-copilot' to scaffold a CLI-authored CliCopilot agent",
              args: { name: "authoring-mode" },
            },
            environmentOption,
            {
              name: ["--instructions", "-ins"],
              description: "Agent system instructions",
              args: { name: "instructions" },
            },
            {
              name: ["--project-dir", "-pd"],
              description:
                "Target directory for the agent workspace. Defaults to current directory",
              args: { name: "project-dir" },
            },
            {
              name: ["--schema-name", "-sn"],
              description:
                "Full agent schema name. Overrides the default derivation ({publisher-prefix}_{sanitized-name}). Used as-is without modification",
              args: { name: "schema-name" },
            },
            {
              name: ["--template", "-t"],
              description:
                "Template profile name (default, minimal). Defaults to 'default'",
              args: { name: "template" },
            },
          ],
        },
        {
          name: "mcp",
          description:
            "Information about local MCP (Model Context Protocol) server",
          options: [
            {
              name: ["--run", "-r"],
              description: "Run the local MCP (Model Context Protocol) server",
            },
          ],
        },
        {
          name: "model",
          description: "Work with AI Builder models",
          subcommands: [
            {
              name: "list",
              description: "AI Builder models in the current environment",
              options: [environmentOption],
            },
            {
              name: "predict",
              description: "Sends text or prompt to AI Model",
              options: [
                {
                  name: ["--model-id", "-id"],
                  description: "AI Builder model Id",
                  args: { name: "model-id" },
                },
                {
                  name: ["--model-name", "-n"],
                  description: "Full or partial AI Model name",
                  args: { name: "model-name" },
                },
                {
                  name: ["--prompt", "-p"],
                  description: "Prompt to send to AI Model",
                  args: { name: "prompt" },
                },
                {
                  name: ["--text", "-t"],
                  description: "Text to send to AI Model",
                  args: { name: "text" },
                },
                environmentOption,
              ],
            },
            {
              name: "prepare-fetch",
              description:
                "Takes the FetchXML file from the AI Large Language Model (LLM) and prepares it for execution against the current environment",
              options: [
                {
                  name: ["--inputFile", "-i"],
                  description:
                    "Input FetchXML file that usually comes from AI LLM",
                  isRequired: true,
                  args: { name: "inputFile" },
                },
                {
                  name: ["--outputFile", "-o"],
                  description:
                    "Output FetchXML file that is ready to execute against the current environment",
                  isRequired: true,
                  args: { name: "outputFile" },
                },
                environmentOption,
              ],
            },
          ],
        },
        {
          name: "pack",
          description:
            "Package a Copilot Studio agent workspace into a solution zip file",
          options: [
            {
              name: ["--publisher-prefix", "-pp"],
              description: "Publisher customization prefix for the solution",
              isRequired: true,
              args: { name: "publisher-prefix" },
            },
            {
              name: ["--output-path", "-op"],
              description:
                "Output path for the solution zip file. Defaults to current directory",
              args: { name: "output-path" },
            },
            {
              name: ["--project-dir", "-pd"],
              description:
                "Agent workspace directory to package. Defaults to current directory",
              args: { name: "project-dir" },
            },
            {
              name: ["--solution-name", "-sn"],
              description:
                "Solution unique name. If omitted, derived from the agent schema name",
              args: { name: "solution-name" },
            },
          ],
        },
        {
          name: "publish",
          description: "Publish a Custom Copilot",
          options: [
            {
              name: ["--bot", "-id"],
              description:
                "The Copilot ID or schema name (unique name found in Bot Details or file name in solution explorer)",
              isRequired: true,
              args: { name: "bot" },
            },
            environmentOption,
          ],
        },
        {
          name: "pull",
          description:
            "Pull remote changes from Copilot Studio and merge with local workspace",
          options: [
            {
              name: ["--project-dir", "-pd"],
              description:
                "Path to the project directory. Defaults to the current working directory",
              args: { name: "project-dir" },
            },
          ],
        },
        {
          name: "push",
          description: "Push local workspace changes to Copilot Studio",
          options: [
            {
              name: ["--project-dir", "-pd"],
              description:
                "Path to the project directory. Defaults to the current working directory",
              args: { name: "project-dir" },
            },
            {
              name: ["--overwrite", "-o"],
              description:
                "Replace the cloud copies of items that also changed in the cloud since your last pull",
            },
          ],
        },
        {
          name: "quarantine",
          description: "Quarantine status of copilot agent",
          options: [
            {
              name: ["--bot-id", "-id"],
              description: "The ID of the copilot to quarantine/unquarantine",
              isRequired: true,
              args: { name: "bot-id" },
            },
            {
              name: ["--environment", "-env"],
              description:
                "Environment (ID, org ID, url, unique name, or partial name)",
              args: { name: "environment" },
            },
            {
              name: ["--status", "-s"],
              description:
                "Quarantine status value. true = quarantine, false = unquarantine. Defaults to true",
            },
          ],
        },
      ],
    },
    {
      name: "data",
      description: "Import and export data from Dataverse",
      subcommands: [
        {
          name: "export",
          description: "Export data",
          options: [
            {
              name: ["--schemaFile", "-sf"],
              description:
                "Schema file name. It can be created using the Configuration Migration Tool",
              isRequired: true,
              args: { name: "schemaFile" },
            },
            {
              name: ["--dataFile", "-df"],
              description: "File name for data zip file. Default data.zip",
              args: { name: "dataFile" },
            },
            {
              name: ["--overwrite", "-o"],
              description:
                "Allow overwrite of the output data file if it already exists",
            },
            {
              name: ["--verbose", "-v"],
              description:
                "Output more diagnostic information during data import/export",
            },
            environmentOption,
          ],
        },
        {
          name: "import",
          description: "Import data",
          options: [
            {
              name: ["--dataDirectory", "-dd"],
              description:
                "Directory name with data for import. Deprecated: this parameter is ignored",
              deprecated: true,
              args: { name: "dataDirectory" },
            },
            {
              name: ["--data", "-d"],
              description: "Zip file or directory name with data for import",
              isRequired: true,
              args: { name: "data" },
            },
            {
              name: ["--connection-count", "-c"],
              description:
                "Number of parallel connections to use during import. Default: 5",
              args: { name: "connection-count" },
            },
            {
              name: ["--verbose", "-v"],
              description:
                "Output more diagnostic information during data import/export",
            },
            environmentOption,
          ],
        },
        {
          name: "bulk-delete",
          description: "Manage bulk delete jobs",
          subcommands: [
            {
              name: "cancel",
              description: "Cancel a bulk delete job",
              options: [
                {
                  name: ["--id", "-id"],
                  description: "The bulk delete job ID (GUID)",
                  isRequired: true,
                  args: { name: "id" },
                },
                environmentOption,
              ],
            },
            {
              name: "list",
              description: "List bulk delete jobs in the environment",
              options: [environmentOption],
            },
            {
              name: "pause",
              description: "Pause a running bulk delete job",
              options: [
                {
                  name: ["--id", "-id"],
                  description: "The bulk delete job ID (GUID)",
                  isRequired: true,
                  args: { name: "id" },
                },
                environmentOption,
              ],
            },
            {
              name: "resume",
              description: "Resume a paused bulk delete job",
              options: [
                {
                  name: ["--id", "-id"],
                  description: "The bulk delete job ID (GUID)",
                  isRequired: true,
                  args: { name: "id" },
                },
                environmentOption,
              ],
            },
            {
              name: "schedule",
              description: "Schedule a bulk delete job for records in a table",
              options: [
                {
                  name: ["--entity", "-e"],
                  description:
                    "The logical name of the table (e.g., account, activitypointer)",
                  isRequired: true,
                  args: { name: "entity" },
                },
                environmentOption,
                {
                  name: ["--fetchxml", "-fx"],
                  description:
                    "FetchXML query to filter records. If omitted, all records in the table are targeted",
                  args: { name: "fetchxml" },
                },
                {
                  name: ["--job-name", "-jn"],
                  description: "A descriptive name for the bulk delete job",
                  args: { name: "job-name" },
                },
                {
                  name: ["--recurrence", "-r"],
                  description:
                    "Recurrence pattern for the job (e.g., FREQ=DAILY;INTERVAL=1)",
                  args: { name: "recurrence" },
                },
                {
                  name: ["--start-time", "-st"],
                  description:
                    "The scheduled start time in ISO 8601 format (e.g., 2025-06-01T00:00:00Z). Defaults to now",
                  args: { name: "start-time" },
                },
              ],
            },
            {
              name: "show",
              description: "Show details of a specific bulk delete job",
              options: [
                {
                  name: ["--id", "-id"],
                  description: "The bulk delete job ID (GUID)",
                  isRequired: true,
                  args: { name: "id" },
                },
                environmentOption,
              ],
            },
          ],
        },
        {
          name: "retention",
          description: "Manage long-term data retention policies",
          subcommands: [
            {
              name: "enable-entity",
              description: "Enable archival/retention for a specific table",
              options: [
                {
                  name: ["--entity", "-e"],
                  description:
                    "The logical name of the table to configure retention for",
                  isRequired: true,
                  args: { name: "entity" },
                },
                environmentOption,
              ],
            },
            {
              name: "list",
              description:
                "List retention policies configured in the environment",
              options: [environmentOption],
            },
            {
              name: "set",
              description: "Create or update a retention policy for a table",
              options: [
                {
                  name: ["--criteria", "-c"],
                  description:
                    "FetchXML criteria defining which records to retain",
                  isRequired: true,
                  args: { name: "criteria" },
                },
                {
                  name: ["--entity", "-e"],
                  description:
                    "The logical name of the table to configure retention for",
                  isRequired: true,
                  args: { name: "entity" },
                },
                environmentOption,
                {
                  name: ["--recurrence", "-r"],
                  description:
                    "Recurrence pattern for the job (e.g., FREQ=DAILY;INTERVAL=1)",
                  args: { name: "recurrence" },
                },
                {
                  name: ["--start-time", "-st"],
                  description:
                    "The scheduled start time in ISO 8601 format (e.g., 2025-06-01T00:00:00Z). Defaults to now",
                  args: { name: "start-time" },
                },
              ],
            },
            {
              name: "show",
              description: "Show details of a specific retention policy",
              options: [
                {
                  name: ["--id", "-id"],
                  description: "The retention configuration ID (GUID)",
                  isRequired: true,
                  args: { name: "id" },
                },
                environmentOption,
              ],
            },
            {
              name: "status",
              description: "Check the status of a retention operation",
              options: [
                {
                  name: ["--id", "-id"],
                  description: "The retention operation ID (GUID)",
                  isRequired: true,
                  args: { name: "id" },
                },
                environmentOption,
              ],
            },
          ],
        },
      ],
    },
    {
      name: "dynamics",
      description:
        "(Preview) Administer Finance and Operations environments, maintenance, and versions",
      subcommands: [
        {
          name: "apply-fin-ops-version",
          description:
            "(Preview) Applies the specified Finance and Operations application version to an environment as a long-running operation",
          options: [
            {
              name: "--version",
              description:
                "The Finance and Operations application version to apply (for example, 10.0.47.5)",
              isRequired: true,
              args: { name: "version" },
            },
            environmentOption,
          ],
        },
        {
          name: "get-fin-ops-maintenance-settings",
          description:
            "(Preview) Retrieves the F&O maintenance settings for an environment managed by Power Platform admin center",
          options: [environmentOption],
        },
        {
          name: "get-fin-ops-operation-errors",
          description:
            "(Preview) Retrieves recent operation errors for a Finance and Operations environment",
          options: [
            columnsOption,
            environmentOption,
            {
              name: "--max-results",
              description:
                "The maximum number of operation errors to return. Defaults to 20 and is capped at 1000",
              args: { name: "max-results" },
            },
          ],
        },
        {
          name: "get-fin-ops-properties",
          description:
            "(Preview) Retrieves Finance and Operations environment properties such as AOS counts, deployment type, and demo dataset",
          options: [environmentOption],
        },
        {
          name: "get-fin-ops-versions",
          description:
            "(Preview) Retrieves the list of Finance and Operations application versions available for an environment",
          options: [columnsOption, environmentOption],
        },
        {
          name: "update-fin-ops-maintenance-settings",
          description:
            "(Preview) Updates the F&O maintenance settings for an environment managed by Power Platform admin center",
          options: [
            environmentOption,
            {
              name: "--updated-maintenance-window-cadence",
              description: "Cadence for major version application updates",
              args: {
                name: "updated-maintenance-window-cadence",
                suggestions: ["EveryUpdate", "EveryOtherUpdate", "Regulated"],
              },
            },
            {
              name: "--updated-maintenance-window-days-of-week",
              description:
                "The updated maintenance window days of the week. Provide the value as a JSON array",
              args: { name: "updated-maintenance-window-days-of-week" },
            },
          ],
        },
      ],
    },
    {
      name: ["env", "org"],
      description: "Work with your Dataverse organization",
      subcommands: [
        {
          name: "who",
          description:
            "Displays information about the current Dataverse organization",
          options: [environmentOption],
        },
        {
          name: "list",
          description:
            "List all Dataverse environments from Global Discovery Service (GDS)",
          options: [
            {
              name: ["--filter", "-f"],
              description: "Show only environments containing filter criteria",
              args: { name: "filter" },
            },
          ],
        },
        {
          name: "fetch",
          description: "Performs FetchXML query against Dataverse",
          options: [
            {
              name: ["--xml", "-x"],
              description: "FetchXML query to run",
              args: { name: "xml" },
            },
            {
              name: ["--xmlFile", "-xf"],
              description: "File with FetchXML query to run",
              args: { name: "xmlFile" },
            },
            environmentOption,
          ],
        },
        {
          name: "list-settings",
          description: "List environment settings",
          options: [
            {
              name: ["--filter", "-f"],
              description: "Show only settings containing filter criteria",
              args: { name: "filter" },
            },
            environmentOption,
          ],
        },
        {
          name: "update-settings",
          description: "Update environment settings",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the setting to update",
              isRequired: true,
              args: { name: "name" },
            },
            {
              name: ["--value", "-v"],
              description: "Value to which setting should be updated to",
              args: { name: "value" },
            },
            environmentOption,
          ],
        },
        {
          name: "select",
          description:
            "Select default organization for current authentication profile",
          options: [
            {
              name: ["--environment", "-env"],
              description:
                "Default environment (ID, url, unique name, or partial name)",
              args: { name: "environment" },
            },
          ],
        },
        {
          name: "features",
          description: "Work with Finance and Operations environment features",
          subcommands: [
            {
              name: "list",
              description:
                "List features in a Finance & Operations environment",
              options: [
                {
                  name: "--enabled",
                  description:
                    "Filter features by enabled state. Use 'true' to show only enabled features, 'false' to show only disabled features",
                  args: { name: "enabled" },
                },
                environmentOption,
                {
                  name: "--featureName",
                  description:
                    "Filter by FeatureName using partial match (client-side contains)",
                  args: { name: "featureName" },
                },
                {
                  name: ["--module", "-m"],
                  description: "Filter features by exact module name",
                  args: { name: "module" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Filter by feature Name (tries exact match first, then partial match if not found)",
                  args: { name: "name" },
                },
                {
                  name: ["--type", "-t"],
                  description:
                    "Filter features by source type. Supported values: 'erp' (Finance & Operations, default), 'all' (alias for 'erp' until Dataverse support is added)",
                  args: { name: "type" },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "environment-management",
      description:
        "(Preview) Manage environment lifecycle, governance, DR, SKU, and environment groups",
      subcommands: [
        {
          name: "add-environment-to-group",
          description: "(Preview) Add the environment to the environment group",
          options: [groupIdOption, environmentOption],
        },
        {
          name: "copy-environment",
          description:
            "(Preview) Copy the environment from the specified source to the target",
          options: [
            {
              name: "--copy-type",
              description: "Represents the type of copy operation",
              isRequired: true,
              args: { name: "copy-type", suggestions: ["Minimal", "Full"] },
            },
            {
              name: "--source-environment-id",
              description: "Source environment ID to copy from",
              isRequired: true,
              args: { name: "source-environment-id" },
            },
            {
              name: "--target-environment-id",
              description:
                "The ID of the target environment that will be overwritten",
              isRequired: true,
              args: { name: "target-environment-id" },
            },
            {
              name: "--copy-options-environment-name-to-override",
              description: "Environment name to override on target environment",
              args: { name: "copy-options-environment-name-to-override" },
            },
            {
              name: "--copy-options-execute-advanced-copy-for-finance-and-operations",
              description:
                "Boolean flag to execute advanced copy for Finance and Operations data",
              args: {
                name: "copy-options-execute-advanced-copy-for-finance-and-operations",
              },
            },
            {
              name: "--copy-options-security-group-id-to-override",
              description:
                "Security group ID to override on target environment",
              args: { name: "copy-options-security-group-id-to-override" },
            },
            {
              name: "--copy-options-skip-audit-data",
              description: "Boolean flag to skip audit data for copy",
              args: { name: "copy-options-skip-audit-data" },
            },
            validateOnlyOption,
            validatePropertiesOption,
          ],
        },
        {
          name: "create-environment-backup",
          description:
            "(Preview) Creates a backup of the specified environment",
          options: [
            {
              name: "--label",
              description: "The label for the manually created backup",
              isRequired: true,
              args: { name: "label" },
            },
            environmentOption,
          ],
        },
        {
          name: "create-environment-group",
          description: "(Preview) Create the environment group",
          options: [
            {
              name: "--children-group-ids",
              description: "Provide the value as a JSON array",
              args: { name: "children-group-ids" },
            },
            {
              name: "--created-by-display-name",
              description:
                "Display name of the identity that created the new environment group",
              args: { name: "created-by-display-name" },
            },
            {
              name: "--created-by-email",
              description:
                "Email address of the identity that created the new environment group",
              args: { name: "created-by-email" },
            },
            {
              name: "--created-by-id",
              description:
                "ID of the identity that created the new environment group",
              args: { name: "created-by-id" },
            },
            {
              name: "--created-by-tenant-id",
              description:
                "Tenant ID of the identity that created the new environment group",
              args: { name: "created-by-tenant-id" },
            },
            {
              name: "--created-by-type",
              description:
                "Identity type of the creator of the new environment group",
              args: { name: "created-by-type" },
            },
            {
              name: "--created-by-user-principal-name",
              description:
                "User principal name of the identity that created the new environment group",
              args: { name: "created-by-user-principal-name" },
            },
            {
              name: "--created-time",
              description:
                "Creation time to record for the new environment group",
              args: { name: "created-time" },
            },
            {
              name: "--description",
              description: "Description for the new environment group",
              args: { name: "description" },
            },
            {
              name: "--display-name",
              description: "Display name for the new environment group",
              args: { name: "display-name" },
            },
            {
              name: "--id",
              description: "ID to assign to the new environment group",
              args: { name: "id" },
            },
            {
              name: "--last-modified-by-display-name",
              description:
                "Display name of the identity that last modified the new environment group",
              args: { name: "last-modified-by-display-name" },
            },
            {
              name: "--last-modified-by-email",
              description:
                "Email address of the identity that last modified the new environment group",
              args: { name: "last-modified-by-email" },
            },
            {
              name: "--last-modified-by-id",
              description:
                "ID of the identity that last modified the new environment group",
              args: { name: "last-modified-by-id" },
            },
            {
              name: "--last-modified-by-tenant-id",
              description:
                "Tenant ID of the identity that last modified the new environment group",
              args: { name: "last-modified-by-tenant-id" },
            },
            {
              name: "--last-modified-by-type",
              description:
                "Identity type of the last modifier of the new environment group",
              args: { name: "last-modified-by-type" },
            },
            {
              name: "--last-modified-by-user-principal-name",
              description:
                "User principal name of the identity that last modified the new environment group",
              args: { name: "last-modified-by-user-principal-name" },
            },
            {
              name: "--last-modified-time",
              description:
                "Last modified time to record for the new environment group",
              args: { name: "last-modified-time" },
            },
            {
              name: "--parent-group-id",
              description:
                "ID of the parent group for the new environment group",
              args: { name: "parent-group-id" },
            },
          ],
        },
        {
          name: "create-environment-management-settings",
          description: "(Preview) Create environment management settings",
          options: [
            {
              name: "--body",
              description:
                "The JSON request body, or @<path> to read it from a file",
              isRequired: true,
              args: { name: "body" },
            },
            environmentOption,
          ],
        },
        {
          name: "delete-environment-backup",
          description: "(Preview) Deletes the specified backup",
          options: [
            {
              name: "--backup-id",
              description: "The ID of the backup",
              isRequired: true,
              args: { name: "backup-id" },
            },
            environmentOption,
          ],
        },
        {
          name: "delete-environment-by-id",
          description: "(Preview) Deletes the specified environment by ID",
          options: [
            environmentOption,
            validateOnlyOption,
            validatePropertiesOption,
          ],
        },
        {
          name: "delete-environment-group",
          description: "(Preview) Delete the environment group",
          options: [groupIdOption],
        },
        {
          name: "disable-disaster-recovery",
          description:
            "(Preview) Disables disaster recovery on the specified environment",
          options: [
            environmentOption,
            validateOnlyOption,
            validatePropertiesOption,
          ],
        },
        {
          name: "disable-managed-environment",
          description:
            "(Preview) Disables managed governance for the specified environment",
          options: [
            environmentOption,
            validateOnlyOption,
            validatePropertiesOption,
          ],
        },
        {
          name: "enable-disaster-recovery",
          description:
            "(Preview) Enables disaster recovery on the specified environment",
          options: [
            environmentOption,
            validateOnlyOption,
            validatePropertiesOption,
          ],
        },
        {
          name: "enable-managed-environment",
          description:
            "(Preview) Enables managed governance for the specified environment",
          options: [
            environmentOption,
            validateOnlyOption,
            validatePropertiesOption,
          ],
        },
        {
          name: "get-business-continuity-state-full-snapshot",
          description:
            "(Preview) Gets business continuity snapshot including LastSyncTime",
          options: [environmentOption],
        },
        {
          name: "get-environment-backups",
          description:
            "(Preview) Gets the backups for the specified environment",
          options: [columnsOption, environmentOption],
        },
        {
          name: "get-environment-by-id-for-user",
          description: "(Preview) Retrieves a single environment by ID",
          options: [
            environmentOption,
            {
              name: "--select",
              description:
                "Comma-separated list of properties to include in the response",
              args: { name: "select" },
            },
          ],
        },
        {
          name: "get-environment-copy-candidates",
          description:
            "(Preview) Gets the list of environments that can be copied as the target environment",
          options: [
            {
              name: "--source-environment-id",
              description: "The ID of the source environment to copy from",
              isRequired: true,
              args: { name: "source-environment-id" },
            },
            columnsOption,
            validateOnlyOption,
            validatePropertiesOption,
          ],
        },
        {
          name: "get-environment-group",
          description: "(Preview) Get the environment group",
          options: [groupIdOption],
        },
        {
          name: "get-environment-group-operation",
          description: "(Preview) Get operation status",
          options: [
            {
              name: "--operation-id",
              description: "The operation ID",
              isRequired: true,
              args: { name: "operation-id" },
            },
          ],
        },
        {
          name: "get-environment-operation-by-id",
          description:
            "(Preview) Gets the status of an environment lifecycle operation scoped under a specific environment, enabling environment-level authorization on the operation lookup",
          options: [
            {
              name: "--operation-id",
              description: "The ID of the operation",
              isRequired: true,
              args: { name: "operation-id" },
            },
            {
              name: "--target-environment-id",
              description: "The ID of the target environment",
              isRequired: true,
              args: { name: "target-environment-id" },
            },
            columnsOption,
          ],
        },
        {
          name: "get-operation-by-id",
          description:
            "(Preview) Gets the status of an environment lifecycle operation",
          options: [
            {
              name: "--operation-id",
              description: "The ID of the operation",
              isRequired: true,
              args: { name: "operation-id" },
            },
            columnsOption,
          ],
        },
        {
          name: "get-operations-for-environment",
          description:
            "(Preview) Lists the environment lifecycle operations for a specific environment",
          options: [
            columnsOption,
            {
              name: "--continuation-token",
              description:
                "An opaque token returned by a previous response, used to fetch the next page of results. Omit to retrieve the first page",
              args: { name: "continuation-token" },
            },
            environmentOption,
            {
              name: "--limit",
              description:
                "The maximum number of records to return per request. Must be a positive integer; a server default applies if omitted",
              args: { name: "limit" },
            },
          ],
        },
        {
          name: "get-provisioning-currencies",
          description:
            "(Preview) Retrieves available currencies for environment provisioning in a location",
          options: [
            {
              name: "--location",
              description: "The location name",
              isRequired: true,
              args: { name: "location" },
            },
            columnsOption,
          ],
        },
        {
          name: "get-provisioning-languages",
          description:
            "(Preview) Retrieves available languages for environment provisioning in a location",
          options: [
            {
              name: "--location",
              description: "The location name",
              isRequired: true,
              args: { name: "location" },
            },
            columnsOption,
          ],
        },
        {
          name: "get-provisioning-templates",
          description:
            "(Preview) Retrieves available templates for environment provisioning in a location",
          options: [
            {
              name: "--location",
              description: "The location name",
              isRequired: true,
              args: { name: "location" },
            },
            columnsOption,
          ],
        },
        {
          name: "get-restore-candidates",
          description:
            "(Preview) Gets the list of restore candidates when restore from the specified environment",
          options: [
            {
              name: "--source-environment-id",
              description: "The ID of the source environment to restore from",
              isRequired: true,
              args: { name: "source-environment-id" },
            },
            columnsOption,
            validateOnlyOption,
            validatePropertiesOption,
          ],
        },
        {
          name: "get-supported-locations",
          description:
            "(Preview) Gets the list of supported locations for environment provisioning",
          options: [columnsOption],
        },
        {
          name: "link-dataverse",
          description:
            "(Preview) Links a Dataverse instance to an existing environment",
          options: [
            {
              name: "--base-language-code",
              description: "The base language code (e.g., 1033 for English)",
              args: { name: "base-language-code" },
            },
            {
              name: "--currency-code",
              description: "The currency code (e.g., USD)",
              args: { name: "currency-code" },
            },
            {
              name: "--currency-name",
              description: "The currency name",
              args: { name: "currency-name" },
            },
            {
              name: "--currency-precision",
              description: "The currency precision",
              args: { name: "currency-precision" },
            },
            {
              name: "--currency-symbol",
              description: "The currency symbol",
              args: { name: "currency-symbol" },
            },
            {
              name: "--domain-name",
              description: "The domain name",
              args: { name: "domain-name" },
            },
            environmentOption,
            {
              name: "--security-group-id",
              description: "The security group ID",
              args: { name: "security-group-id" },
            },
            {
              name: "--template-metadata",
              description:
                "A JSON object payload customized for the selected templates. Provide the value as a JSON object",
              args: { name: "template-metadata" },
            },
            {
              name: "--templates",
              description:
                "The templates to apply. Provide the value as a JSON array",
              args: { name: "templates" },
            },
          ],
        },
        {
          name: "list-environment-groups",
          description: "(Preview) List the environment groups",
          options: [columnsOption],
        },
        {
          name: "list-environment-management-settings",
          description: "(Preview) Get environment management setting by ID",
          options: [
            columnsOption,
            environmentOption,
            {
              name: "--select",
              description: "List of properties to select for this entity",
              args: { name: "select" },
            },
            {
              name: "--top",
              description:
                "Number of records to retrieve. Defaults to 500 if not set",
              args: { name: "top" },
            },
          ],
        },
        {
          name: "list-environments-for-user",
          description:
            "(Preview) Returns a list of environments available for the authenticated user",
          options: [
            columnsOption,
            {
              name: "--filter",
              description:
                "OData filter expression to restrict the set of environments returned. Supported filter properties include `dataverseId`, `type`, `geo`, `state`, `environmentGroupId`, and `domainName`",
              args: { name: "filter" },
            },
            {
              name: "--ids",
              description:
                "Comma-separated list of environment IDs to retrieve. When specified, only environments matching these IDs are returned",
              args: { name: "ids" },
            },
            {
              name: "--orderby",
              description: "OData order-by expression for sorting the results",
              args: { name: "orderby" },
            },
            {
              name: "--select",
              description:
                "Comma-separated list of properties to include in the response",
              args: { name: "select" },
            },
            {
              name: "--skip",
              description:
                "Number of environments to skip before returning results",
              args: { name: "skip" },
            },
            {
              name: "--top",
              description: "Maximum number of environments to return",
              args: { name: "top" },
            },
          ],
        },
        {
          name: "modify-environment-sku",
          description: "(Preview) Modifies sku for the specified environment",
          options: [
            {
              name: "--environment-sku",
              description: "The environment SKU",
              isRequired: true,
              args: { name: "environment-sku", suggestions: environmentSkus },
            },
            environmentOption,
            validateOnlyOption,
            validatePropertiesOption,
          ],
        },
        {
          name: "perform-dr-drill",
          description:
            "(Preview) Performs DR Drill for the specified environment",
          options: [
            environmentOption,
            validateOnlyOption,
            validatePropertiesOption,
          ],
        },
        {
          name: "perform-failback",
          description:
            "(Preview) Performs failback for the specified environment, switching it back from its current (paired) region to its original primary region. This is the inverse of force failover",
          options: [
            environmentOption,
            validateOnlyOption,
            validatePropertiesOption,
          ],
        },
        {
          name: "perform-force-failover",
          description:
            "(Preview) Fails over environment to its paired region as of LastSyncTime",
          options: [
            environmentOption,
            {
              name: "--last-sync-time",
              description:
                "The sync time to fail over to. Optional: if null or omitted, fails over to the latest available sync point",
              args: { name: "last-sync-time" },
            },
            validateOnlyOption,
            validatePropertiesOption,
          ],
        },
        {
          name: "provision-new-environment",
          description: "(Preview) Provisions a new environment",
          options: [
            {
              name: "--display-name",
              description: "The display name of the environment",
              isRequired: true,
              args: { name: "display-name" },
            },
            {
              name: "--environment-sku",
              description: "The environment SKU",
              isRequired: true,
              args: { name: "environment-sku", suggestions: environmentSkus },
            },
            {
              name: "--billing-policy-id",
              description: "The billing policy ID",
              args: { name: "billing-policy-id" },
            },
            {
              name: "--cluster-category",
              description: "The cluster category. Eg: FirstRelease",
              args: { name: "cluster-category" },
            },
            {
              name: "--connected-group-id-for-teams-environment",
              description:
                "Microsoft 365 Group ID to be linked to the Teams environment during provisioning. This property is not applicable for non-Teams environments",
              args: { name: "connected-group-id-for-teams-environment" },
            },
            {
              name: "--database-type",
              description:
                "The type of database to create (e.g., CommonDataService). CommonDataService requires either location or macroRegion, linkedEnvironmentMetadata.baseLanguageCode, and linkedEnvironmentMetadata.currency.code",
              args: { name: "database-type" },
            },
            {
              name: "--description",
              description: "An optional description for the environment",
              args: { name: "description" },
            },
            {
              name: "--fin-ops-metadata-id",
              description: "The FinOps environment ID",
              args: { name: "fin-ops-metadata-id" },
            },
            {
              name: "--fin-ops-metadata-type",
              description: "The FinOps environment link type",
              args: { name: "fin-ops-metadata-type" },
            },
            {
              name: "--fin-ops-metadata-url",
              description: "The FinOps environment URL",
              args: { name: "fin-ops-metadata-url" },
            },
            {
              name: "--governance-configuration-protection-level",
              description: "The environment governance protection level",
              args: {
                name: "governance-configuration-protection-level",
                suggestions: basicStandard,
              },
            },
            {
              name: "--linked-environment-metadata-base-language-code",
              description: "The base language code (e.g., 1033 for English)",
              args: { name: "linked-environment-metadata-base-language-code" },
            },
            {
              name: "--linked-environment-metadata-currency",
              description:
                "Currency settings for an environment. Provide the value as a JSON object",
              args: { name: "linked-environment-metadata-currency" },
            },
            {
              name: "--linked-environment-metadata-domain-name",
              description: "The domain name",
              args: { name: "linked-environment-metadata-domain-name" },
            },
            {
              name: "--linked-environment-metadata-security-group-id",
              description: "The security group ID",
              args: { name: "linked-environment-metadata-security-group-id" },
            },
            {
              name: "--linked-environment-metadata-template-metadata",
              description:
                "A JSON object payload customized for the selected templates. Provide the value as a JSON object",
              args: { name: "linked-environment-metadata-template-metadata" },
            },
            {
              name: "--linked-environment-metadata-templates",
              description:
                "The templates to apply. Provide the value as a JSON array",
              args: { name: "linked-environment-metadata-templates" },
            },
            {
              name: "--location",
              description:
                "The location where the environment will be provisioned. Mutually exclusive with MacroRegion",
              args: { name: "location" },
            },
            {
              name: "--macro-region",
              description:
                "The macro region where the environment will be provisioned",
              args: { name: "macro-region" },
            },
            {
              name: "--parent-environment-group-id",
              description: "The environment group ID",
              args: { name: "parent-environment-group-id" },
            },
            {
              name: "--used-by-display-name",
              description: "The display name of the user",
              args: { name: "used-by-display-name" },
            },
            {
              name: "--used-by-tenant-id",
              description: "The tenant ID of the user",
              args: { name: "used-by-tenant-id" },
            },
            {
              name: "--used-by-type",
              description: "The type of the user identity (e.g., User)",
              args: { name: "used-by-type" },
            },
            {
              name: "--used-by-user-id",
              description: "The ID of the user",
              args: { name: "used-by-user-id" },
            },
          ],
        },
        {
          name: "recover-environment",
          description: "(Preview) Recover the deleted environment",
          options: [
            environmentOption,
            validateOnlyOption,
            validatePropertiesOption,
          ],
        },
        {
          name: "remove-environment-from-group",
          description:
            "(Preview) Remove the environment from the environment group",
          options: [groupIdOption, environmentOption],
        },
        {
          name: "reset-environment",
          description: "(Preview) Resets the specified environment",
          options: [
            {
              name: "--base-language-code",
              description:
                "The base language code (e.g., 1033 for English) for the environment to reset to",
              args: { name: "base-language-code" },
            },
            {
              name: "--currency-code",
              description: "The currency code (e.g., USD)",
              args: { name: "currency-code" },
            },
            {
              name: "--currency-name",
              description: "The currency name",
              args: { name: "currency-name" },
            },
            {
              name: "--currency-precision",
              description: "The currency precision",
              args: { name: "currency-precision" },
            },
            {
              name: "--currency-symbol",
              description: "The currency symbol",
              args: { name: "currency-symbol" },
            },
            {
              name: "--description",
              description:
                "An optional description for the environment to reset to",
              args: { name: "description" },
            },
            {
              name: "--display-name",
              description: "The display name for the environment to reset to",
              args: { name: "display-name" },
            },
            {
              name: "--domain-name",
              description: "Domain name for the environment to reset to",
              args: { name: "domain-name" },
            },
            environmentOption,
            {
              name: "--security-group-id",
              description: "Security group ID for the environment to reset to",
              args: { name: "security-group-id" },
            },
            {
              name: "--templates",
              description:
                "Templates to apply for the environment after reset. Provide the value as a JSON array",
              args: { name: "templates" },
            },
            validateOnlyOption,
            validatePropertiesOption,
          ],
        },
        {
          name: "restore-environment",
          description:
            "(Preview) Restores the specified environment to a previous backup",
          options: [
            {
              name: "--restore-point-date-time",
              description:
                "The point in time to restore the environment to. Must include a timezone offset per RFC 3339 (e.g., 2025-04-30T12:34:56+02:00)",
              isRequired: true,
              args: { name: "restore-point-date-time" },
            },
            {
              name: "--source-environment-id",
              description:
                "The ID of the source environment from which the backup will be restored",
              isRequired: true,
              args: { name: "source-environment-id" },
            },
            {
              name: "--target-environment-id",
              description:
                "The ID of the target environment that will be overwritten",
              isRequired: true,
              args: { name: "target-environment-id" },
            },
            {
              name: "--restore-options-environment-name-to-override",
              description: "Environment name to override on target environment",
              args: { name: "restore-options-environment-name-to-override" },
            },
            {
              name: "--restore-options-security-group-id-to-override",
              description:
                "Security group ID to override on target environment",
              args: { name: "restore-options-security-group-id-to-override" },
            },
            {
              name: "--restore-options-skip-audit-data",
              description: "Boolean flag to skip audit data during restore",
              args: { name: "restore-options-skip-audit-data" },
            },
            validateOnlyOption,
            validatePropertiesOption,
          ],
        },
        {
          name: "update-environment-group",
          description: "(Preview) Update the environment group",
          options: [
            groupIdOption,
            {
              name: "--children-group-ids",
              description: "Provide the value as a JSON array",
              args: { name: "children-group-ids" },
            },
            {
              name: "--created-by-display-name",
              description:
                "Updated display name of the identity that created the environment group",
              args: { name: "created-by-display-name" },
            },
            {
              name: "--created-by-email",
              description:
                "Updated email address of the identity that created the environment group",
              args: { name: "created-by-email" },
            },
            {
              name: "--created-by-id",
              description:
                "Updated ID of the identity that created the environment group",
              args: { name: "created-by-id" },
            },
            {
              name: "--created-by-tenant-id",
              description:
                "Updated tenant ID of the identity that created the environment group",
              args: { name: "created-by-tenant-id" },
            },
            {
              name: "--created-by-type",
              description:
                "Updated identity type of the creator of the environment group",
              args: { name: "created-by-type" },
            },
            {
              name: "--created-by-user-principal-name",
              description:
                "Updated user principal name of the identity that created the environment group",
              args: { name: "created-by-user-principal-name" },
            },
            {
              name: "--created-time",
              description:
                "Updated creation time to record for the environment group",
              args: { name: "created-time" },
            },
            {
              name: "--description",
              description: "Updated description for the environment group",
              args: { name: "description" },
            },
            {
              name: "--display-name",
              description: "Updated display name for the environment group",
              args: { name: "display-name" },
            },
            {
              name: "--id",
              description: "Updated ID to apply to the environment group",
              args: { name: "id" },
            },
            {
              name: "--last-modified-by-display-name",
              description:
                "Updated display name of the identity that last modified the environment group",
              args: { name: "last-modified-by-display-name" },
            },
            {
              name: "--last-modified-by-email",
              description:
                "Updated email address of the identity that last modified the environment group",
              args: { name: "last-modified-by-email" },
            },
            {
              name: "--last-modified-by-id",
              description:
                "Updated ID of the identity that last modified the environment group",
              args: { name: "last-modified-by-id" },
            },
            {
              name: "--last-modified-by-tenant-id",
              description:
                "Updated tenant ID of the identity that last modified the environment group",
              args: { name: "last-modified-by-tenant-id" },
            },
            {
              name: "--last-modified-by-type",
              description:
                "Updated identity type of the last modifier of the environment group",
              args: { name: "last-modified-by-type" },
            },
            {
              name: "--last-modified-by-user-principal-name",
              description:
                "Updated user principal name of the identity that last modified the environment group",
              args: { name: "last-modified-by-user-principal-name" },
            },
            {
              name: "--last-modified-time",
              description:
                "Updated last modified time to record for the environment group",
              args: { name: "last-modified-time" },
            },
            {
              name: "--parent-group-id",
              description: "Updated parent group ID for the environment group",
              args: { name: "parent-group-id" },
            },
          ],
        },
        {
          name: "update-environment-management-settings",
          description:
            "(Preview) Update fields on the environment management setting",
          options: [
            {
              name: "--body",
              description:
                "The JSON request body, or @<path> to read it from a file",
              isRequired: true,
              args: { name: "body" },
            },
            environmentOption,
          ],
        },
      ],
    },
    {
      name: "governance",
      description:
        "(Preview) Manage rule-based data policies and cross-tenant connection reports",
      subcommands: [
        {
          name: "create-cross-tenant-connection-report",
          description:
            "(Preview) Generate or fetch a cross-tenant connection report",
        },
        {
          name: "create-enviornment-group-rule-based-assignment",
          description:
            "(Preview) Creates a rule-based policy assignment for an environment group",
          options: [
            {
              name: "--group-id",
              description: "The unique identifier of the environment group",
              isRequired: true,
              args: { name: "group-id" },
            },
            policyIdOption,
            {
              name: "--assignment-overrides",
              description:
                "List of policy assignment overrides. Provide the value as a JSON array",
              args: { name: "assignment-overrides" },
            },
          ],
        },
        {
          name: "create-environment-rule-based-assignment",
          description:
            "(Preview) Creates a rule-based policy assignment for an environment",
          options: [
            policyIdOption,
            {
              name: "--assignment-overrides",
              description:
                "List of policy assignment overrides. Provide the value as a JSON array",
              args: { name: "assignment-overrides" },
            },
            environmentOption,
          ],
        },
        {
          name: "create-rule-based-policy",
          description:
            "(Preview) Creates a rule-based policy with rule sets and metadata",
          options: [
            {
              name: "--name",
              description: "The name of the policy",
              args: { name: "name" },
            },
            {
              name: "--rule-sets",
              description: "Provide the value as a JSON array",
              args: { name: "rule-sets" },
            },
          ],
        },
        {
          name: "create-rule-set",
          description:
            "(Preview) Creates the Rule Set for the environment group",
          options: [
            {
              name: "--group-id",
              description: "The unique identifier of the environment group",
              isRequired: true,
              args: { name: "group-id" },
            },
            {
              name: "--environment-filter-type",
              description: "The type of environment filter",
              args: {
                name: "environment-filter-type",
                suggestions: includeExclude,
              },
            },
            {
              name: "--environment-filter-values",
              description:
                "The environment information. Provide the value as a JSON array",
              args: { name: "environment-filter-values" },
            },
            {
              name: "--id",
              description: "The ID of the Rule Set",
              args: { name: "id" },
            },
            {
              name: "--last-modified",
              description: "The last modified timestamp",
              args: { name: "last-modified" },
            },
            {
              name: "--parameters",
              description:
                "The Rule Set parameters. Provide the value as a JSON array",
              args: { name: "parameters" },
            },
          ],
        },
        {
          name: "delete-rule-set",
          description:
            "(Preview) Deletes the Rule Set. Only tenant admins can delete",
          options: [
            {
              name: "--rule-set-id",
              description: "The unique identifier of the Rule Set",
              isRequired: true,
              args: { name: "rule-set-id" },
            },
          ],
        },
        {
          name: "get-cross-tenant-connection-report",
          description:
            "(Preview) Get a cross-tenant connection report by report ID for a tenant",
          options: [
            {
              name: "--report-id",
              description: "The report ID",
              isRequired: true,
              args: { name: "report-id" },
            },
            columnsOption,
          ],
        },
        {
          name: "get-rule-based-policy-by-id",
          description:
            "(Preview) Gets policy details by ID including rule sets and metadata",
          options: [policyIdOption, columnsOption],
        },
        {
          name: "get-rule-set",
          description:
            "(Preview) Returns the Rule Set for the given environment group",
          options: [
            {
              name: "--group-id",
              description: "The unique identifier of the environment group",
              isRequired: true,
              args: { name: "group-id" },
            },
            columnsOption,
          ],
        },
        {
          name: "get-rule-set-list-for-tenant",
          description:
            "(Preview) Returns all the Rule Sets under the given tenant with OData pagination support",
          options: [
            columnsOption,
            {
              name: "--expand",
              description: "OData expand query option",
              args: { name: "expand" },
            },
            {
              name: "--filter",
              description: "OData filter query option",
              args: { name: "filter" },
            },
            {
              name: "--select",
              description: "OData select query option",
              args: { name: "select" },
            },
            {
              name: "--skiptoken",
              description: "OData skip token for pagination",
              args: { name: "skiptoken" },
            },
            {
              name: "--top",
              description: "OData top query option to limit results",
              args: { name: "top" },
            },
          ],
        },
        {
          name: "list-cross-tenant-connection-reports",
          description:
            "(Preview) List cross-tenant connection reports for a tenant",
          options: [columnsOption],
        },
        {
          name: "list-rule-assignments",
          description:
            "(Preview) Lists rule assignments for a tenant with rule set details",
          options: [
            {
              name: "--include-rule-set-counts",
              description: "Flag to include rule set counts in the response",
              isRequired: true,
              args: { name: "include-rule-set-counts" },
            },
            columnsOption,
          ],
        },
        {
          name: "list-rule-assignments-by-environment-group-id",
          description:
            "(Preview) Lists rule assignments for an environment group",
          options: [
            {
              name: "--environment-group-id",
              description: "The unique identifier of the environment group",
              isRequired: true,
              args: { name: "environment-group-id" },
            },
            {
              name: "--include-rule-set-counts",
              description: "Flag to include rule set counts in the response",
              isRequired: true,
              args: { name: "include-rule-set-counts" },
            },
            columnsOption,
          ],
        },
        {
          name: "list-rule-assignments-by-environment-id",
          description:
            "(Preview) Lists rule assignments for a specific environment",
          options: [
            {
              name: "--include-rule-set-counts",
              description: "Flag to include rule set counts in the response",
              isRequired: true,
              args: { name: "include-rule-set-counts" },
            },
            columnsOption,
            environmentOption,
          ],
        },
        {
          name: "list-rule-assignments-by-policy-id",
          description:
            "(Preview) Lists rule assignments for a policy with rule set details",
          options: [
            {
              name: "--include-rule-set-counts",
              description: "Flag to include rule set counts in the response",
              isRequired: true,
              args: { name: "include-rule-set-counts" },
            },
            policyIdOption,
            columnsOption,
          ],
        },
        {
          name: "list-rule-based-policies",
          description:
            "(Preview) List rule based policies available in the tenant",
          options: [columnsOption],
        },
        {
          name: "patch-rule-based-policy",
          description:
            "(Preview) Allows adding or updating one or more rule sets to an existing policy",
          options: [
            policyIdOption,
            {
              name: "--name",
              description: "The name of the policy",
              args: { name: "name" },
            },
            {
              name: "--rule-sets",
              description: "Provide the value as a JSON array",
              args: { name: "rule-sets" },
            },
          ],
        },
        {
          name: "remove-rule-from-rule-based-policy",
          description: "(Preview) Removes a rule set from an existing policy",
          options: [
            policyIdOption,
            {
              name: "--name",
              description: "The name of the policy",
              args: { name: "name" },
            },
            {
              name: "--rule-sets",
              description: "Provide the value as a JSON array",
              args: { name: "rule-sets" },
            },
          ],
        },
        {
          name: "update-rule-based-policy-by-id",
          description:
            "(Preview) Updates a policy by ID including rule sets and metadata",
          options: [
            policyIdOption,
            {
              name: "--name",
              description: "The name of the policy",
              args: { name: "name" },
            },
            {
              name: "--rule-sets",
              description: "Provide the value as a JSON array",
              args: { name: "rule-sets" },
            },
          ],
        },
        {
          name: "update-rule-set",
          description: "(Preview) Updates the Rule Set",
          options: [
            {
              name: "--rule-set-id",
              description: "The unique identifier of the Rule Set",
              isRequired: true,
              args: { name: "rule-set-id" },
            },
            {
              name: "--environment-filter-type",
              description: "The type of environment filter",
              args: {
                name: "environment-filter-type",
                suggestions: includeExclude,
              },
            },
            {
              name: "--environment-filter-values",
              description:
                "The environment information. Provide the value as a JSON array",
              args: { name: "environment-filter-values" },
            },
            {
              name: "--id",
              description: "The ID of the Rule Set",
              args: { name: "id" },
            },
            {
              name: "--last-modified",
              description: "The last modified timestamp",
              args: { name: "last-modified" },
            },
            {
              name: "--parameters",
              description:
                "The Rule Set parameters. Provide the value as a JSON array",
              args: { name: "parameters" },
            },
          ],
        },
      ],
    },
    {
      name: "help",
      description: "Show help for the Microsoft Power Platform CLI",
    },
    {
      name: "licensing",
      description:
        "(Preview) Manage licensing, entitlements, capacity, billing policies, and allocations",
      subcommands: [
        {
          name: "add-billing-policy-environment",
          description: "(Preview) Link billing policy ID with environments",
          options: [
            billingPolicyIdOption,
            {
              name: "--environment-ids",
              description: "Provide the value as a JSON array",
              args: { name: "environment-ids" },
            },
          ],
        },
        {
          name: "create-billing-policy",
          description: "(Preview) Creates the billing policy at tenant level",
          options: [
            {
              name: "--billing-instrument-id",
              description:
                "ID of the billing instrument for the new billing policy",
              args: { name: "billing-instrument-id" },
            },
            {
              name: "--billing-instrument-resource-group",
              description: "The resource group within the tenant subscription",
              args: { name: "billing-instrument-resource-group" },
            },
            {
              name: "--billing-instrument-subscription-id",
              description: "The tenant subscription Id",
              args: { name: "billing-instrument-subscription-id" },
            },
            {
              name: "--location",
              description: "Location for the tenant-level billing policy",
              args: { name: "location" },
            },
            {
              name: "--name",
              description: "Name of the tenant-level billing policy to create",
              args: { name: "name" },
            },
            {
              name: "--status",
              description: "The desired ISV contract status",
              args: { name: "status", suggestions: enabledDisabled },
            },
          ],
        },
        {
          name: "create-isv-contract",
          description: "(Preview) Create an ISV contract",
          options: [
            {
              name: "--geo",
              description:
                "Resource location for billing account creation. Immutable",
              isRequired: true,
              args: { name: "geo" },
            },
            {
              name: "--name",
              description: "Name of the ISV contract to create",
              isRequired: true,
              args: { name: "name" },
            },
            {
              name: "--status",
              description: "The desired ISV contract status",
              isRequired: true,
              args: { name: "status", suggestions: enabledDisabled },
            },
            {
              name: "--billing-instrument-id",
              description:
                "ID of the billing instrument for the new ISV contract",
              args: { name: "billing-instrument-id" },
            },
            {
              name: "--billing-instrument-resource-group",
              description: "The resource group within the tenant subscription",
              args: { name: "billing-instrument-resource-group" },
            },
            {
              name: "--billing-instrument-subscription-id",
              description: "The tenant subscription Id",
              args: { name: "billing-instrument-subscription-id" },
            },
            {
              name: "--conditions-api-filter",
              description:
                "The Power Platform connector filter. Provide the value as a JSON object",
              args: { name: "conditions-api-filter" },
            },
            {
              name: "--consumer-tenant-id",
              description: "The ID of the customer tenant",
              args: { name: "consumer-tenant-id" },
            },
            {
              name: "--power-automate-policy-cloud-flow-runs-pay-as-you-go-state",
              description:
                "Pay-as-you-go state for cloud flow runs under the new ISV contract",
              args: {
                name: "power-automate-policy-cloud-flow-runs-pay-as-you-go-state",
                suggestions: enabledDisabled,
              },
            },
            {
              name: "--power-automate-policy-desktop-flow-attended-runs-pay-as-you-go-state",
              description:
                "Pay-as-you-go state for attended desktop flow runs under the new ISV contract",
              args: {
                name: "power-automate-policy-desktop-flow-attended-runs-pay-as-you-go-state",
                suggestions: enabledDisabled,
              },
            },
            {
              name: "--power-automate-policy-desktop-flow-unattended-runs-pay-as-you-go-state",
              description:
                "Pay-as-you-go state for unattended desktop flow runs under the new ISV contract",
              args: {
                name: "power-automate-policy-desktop-flow-unattended-runs-pay-as-you-go-state",
                suggestions: enabledDisabled,
              },
            },
          ],
        },
        {
          name: "delete-billing-policy",
          description: "(Preview) Delete billing policy",
          options: [billingPolicyIdOption],
        },
        {
          name: "delete-isv-contract",
          description: "(Preview) Delete an ISV contract",
          options: [
            {
              name: "--isv-contract-id",
              description: "The ISV contract ID",
              isRequired: true,
              args: { name: "isv-contract-id" },
            },
          ],
        },
        {
          name: "get-all-resource-thresholds",
          description:
            "(Preview) Get all resource thresholds for the specified entitlement",
          options: [entitlementIdOption],
        },
        {
          name: "get-allocations-availability-v2",
          description:
            "(Preview) Get the entitlements available to be allocated for the scope",
          options: [
            columnsOption,
            {
              name: "--filter",
              description: "OData filter expression",
              args: { name: "filter" },
            },
          ],
        },
        {
          name: "get-allocations-by-environment",
          description:
            "(Preview) Get currency allocations and enforcement rules for an environment",
          options: [columnsOption, environmentOption],
        },
        {
          name: "get-billing-policy",
          description:
            "(Preview) Get the billing policy at tenant level by policy ID",
          options: [billingPolicyIdOption],
        },
        {
          name: "get-billing-policy-environment",
          description:
            "(Preview) Get the environment linked to the billing policy",
          options: [billingPolicyIdOption, environmentOption],
        },
        {
          name: "get-currency-allocation-by-environment",
          description: "(Preview) Get currency allocations for the environment",
          options: [columnsOption, environmentOption],
        },
        {
          name: "get-entitlement",
          description: "(Preview) Get the entitlement details for the tenant",
          options: [entitlementIdOption],
        },
        {
          name: "get-environment-billing-policy",
          description:
            "(Preview) Get the linked billing policy details for an environment",
          options: [environmentOption],
        },
        {
          name: "get-environment-resources",
          description:
            "(Preview) Get environment resource entitlement snapshots for an entitlement",
          options: [
            entitlementIdOption,
            fromDateOption,
            toDateOption,
            columnsOption,
            {
              name: "--continuation-token",
              description: "Continuation token for pagination",
              args: { name: "continuation-token" },
            },
            environmentOption,
            {
              name: "--include-fields",
              description:
                "Comma separated additional fields to include in the response",
              args: { name: "include-fields" },
            },
            {
              name: "--orderby-consumed",
              description: "Order by consumed date time if specified",
              args: { name: "orderby-consumed" },
            },
            {
              name: "--search-request",
              description: "Search request for filtering the resources",
              args: { name: "search-request" },
            },
          ],
        },
        {
          name: "get-fin-ops-license-summary-v2",
          description:
            "(Preview) Get FinOps license summary (V2) for the tenant",
        },
        {
          name: "get-isv-contract",
          description: "(Preview) Get an ISV contract by its identifier (ID)",
          options: [
            {
              name: "--isv-contract-id",
              description: "The ISV contract ID",
              isRequired: true,
              args: { name: "isv-contract-id" },
            },
          ],
        },
        {
          name: "get-many-entitlements-reserved-v2",
          description: "(Preview) Get the reserved entitlements for the scope",
          options: [
            {
              name: "--filter",
              description: "OData filter expression",
              args: { name: "filter" },
            },
          ],
        },
        {
          name: "get-many-environment-entitlements",
          description:
            "(Preview) Get the entitlements for the tenant by environment",
          options: [
            environmentOption,
            {
              name: "--filter",
              description: "OData filter expression",
              args: { name: "filter" },
            },
          ],
        },
        {
          name: "get-storage-warning-by-category",
          description:
            "(Preview) Storage warning thresholds filtered by category",
          options: [
            {
              name: "--storage-category",
              description: "The storage category value",
              isRequired: true,
              args: { name: "storage-category" },
            },
          ],
        },
        {
          name: "get-storage-warning-by-category-and-entity",
          description:
            "(Preview) Storage warning thresholds filtered by category and storage entity name",
          options: [
            {
              name: "--entity-name",
              description: "The name of the entity",
              isRequired: true,
              args: { name: "entity-name" },
            },
            {
              name: "--storage-category",
              description: "The storage category value",
              isRequired: true,
              args: { name: "storage-category" },
            },
          ],
        },
        {
          name: "get-tenant-capacity-details",
          description:
            "(Preview) Get the tenant capacity details for the tenant",
          options: [columnsOption],
        },
        {
          name: "get-tenant-license-trends",
          description:
            "(Preview) Get the license trends for the tenant for the specified entitlement",
          options: [
            entitlementIdOption,
            fromDateOption,
            toDateOption,
            columnsOption,
            {
              name: "--filter",
              description: "OData filter expression",
              args: { name: "filter" },
            },
            {
              name: "--top",
              description: "The maximum number of records to return",
              args: { name: "top" },
            },
          ],
        },
        {
          name: "get-tenant-resource-consumption-by-user",
          description:
            "(Preview) Get resource consumption by entitlement and user ID",
          options: [
            entitlementIdOption,
            fromDateOption,
            toDateOption,
            {
              name: "--user-id",
              description: "The user ID",
              isRequired: true,
              args: { name: "user-id" },
            },
            columnsOption,
            {
              name: "--continuation-token",
              description: "Continuation token for pagination",
              args: { name: "continuation-token" },
            },
            pageSizeOption,
            {
              name: "--search-request",
              description: "Search request for filtering",
              args: { name: "search-request" },
            },
          ],
        },
        {
          name: "get-tenant-resources-across-environments",
          description:
            "(Preview) Get tenant resources for an entitlement across all environments",
          options: [
            entitlementIdOption,
            fromDateOption,
            toDateOption,
            columnsOption,
            {
              name: "--continuation-token",
              description:
                "Opaque continuation token returned by the previous page, or null for the first page",
              args: { name: "continuation-token" },
            },
            {
              name: "--page-size",
              description:
                "Maximum number of environments to fan out to per page",
              args: { name: "page-size" },
            },
          ],
        },
        {
          name: "get-tenant-user-consumption-by-resource",
          description:
            "(Preview) Get tenant user consumption by entitlement and resource ID",
          options: [
            entitlementIdOption,
            fromDateOption,
            {
              name: "--resource-id",
              description: "The resource ID",
              isRequired: true,
              args: { name: "resource-id" },
            },
            toDateOption,
            columnsOption,
            {
              name: "--continuation-token",
              description: "Continuation token for pagination",
              args: { name: "continuation-token" },
            },
            pageSizeOption,
            {
              name: "--search-request",
              description: "Search request for filtering",
              args: { name: "search-request" },
            },
          ],
        },
        {
          name: "get-tenant-users",
          description:
            "(Preview) Get the list of tenant users entitlement snapshot for the specified entitlement",
          options: [
            entitlementIdOption,
            fromDateOption,
            toDateOption,
            columnsOption,
            {
              name: "--continuation-token",
              description: "Continuation token for pagination",
              args: { name: "continuation-token" },
            },
            {
              name: "--orderby-consumed",
              description: "Order by consumed field",
              args: { name: "orderby-consumed" },
            },
            pageSizeOption,
            {
              name: "--search-request",
              description: "Search request for filtering the users",
              args: { name: "search-request" },
            },
          ],
        },
        {
          name: "get-user-per-flow-capacity-source",
          description:
            "(Preview) Get user per flow capacity source data with pagination and filtering options",
          options: [
            startDateOption,
            columnsOption,
            endDateOption,
            environmentIdOption,
            {
              name: "--flow-context",
              description: "Filter by flow context",
              args: { name: "flow-context" },
            },
            {
              name: "--flow-license-categorization",
              description: "Filter by flow license categorization",
              args: { name: "flow-license-categorization" },
            },
            pageNumberOption,
            pageSizeOption,
            {
              name: "--resource-id",
              description: "Filter by resource identifier",
              args: { name: "resource-id" },
            },
            {
              name: "--user-id",
              description: "Filter by user identifier",
              args: { name: "user-id" },
            },
          ],
        },
        {
          name: "get-user-per-flow-capacity-source-flow-context-summary",
          description:
            "(Preview) Get flow context summary for user per flow capacity source",
          options: [
            startDateOption,
            columnsOption,
            endDateOption,
            environmentIdOption,
            pageNumberOption,
            pageSizeOption,
          ],
        },
        {
          name: "get-user-per-flow-capacity-source-flow-context-summary-for-user-id",
          description:
            "(Preview) Get flow context summary for a specific user's per flow capacity source",
          options: [
            startDateOption,
            {
              name: "--user-id",
              description: "The user identifier",
              isRequired: true,
              args: { name: "user-id" },
            },
            columnsOption,
            endDateOption,
            environmentIdOption,
            pageNumberOption,
            pageSizeOption,
          ],
        },
        {
          name: "get-user-per-flow-capacity-source-tenant-context-summary",
          description:
            "(Preview) Get tenant context summary for user per flow capacity source",
          options: [startDateOption, endDateOption, environmentIdOption],
        },
        {
          name: "get-user-per-flow-capacity-source-user-context-summary",
          description:
            "(Preview) Get the user per flow capacity source user context summary",
          options: [
            startDateOption,
            columnsOption,
            endDateOption,
            environmentIdOption,
            pageNumberOption,
            pageSizeOption,
          ],
        },
        {
          name: "get-user-per-flow-capacity-source-user-context-summary-for-user-id",
          description:
            "(Preview) Get user context summary for a specific user's per flow capacity source",
          options: [
            startDateOption,
            {
              name: "--user-id",
              description: "The user identifier",
              isRequired: true,
              args: { name: "user-id" },
            },
            columnsOption,
            endDateOption,
            environmentIdOption,
            pageNumberOption,
            pageSizeOption,
          ],
        },
        {
          name: "list-allocations-by-environment",
          description:
            "(Preview) Get currency allocations and enforcement rules for all environments",
        },
        {
          name: "list-billing-policies",
          description:
            "(Preview) Get the list of billing policies for the tenant",
          options: [
            columnsOption,
            {
              name: "--top",
              description: "The ISV contract ID",
              args: { name: "top" },
            },
          ],
        },
        {
          name: "list-billing-policy-environments",
          description:
            "(Preview) Get the list of environments linked to the billing policy",
          options: [billingPolicyIdOption, columnsOption],
        },
        {
          name: "list-currency-reports",
          description: "(Preview) Get the currency report for the tenant",
          options: [
            {
              name: "--include-allocations",
              description: "Flag indicating to include allocations",
              args: { name: "include-allocations" },
            },
            {
              name: "--include-consumptions",
              description: "Flag indicating to include consumptions",
              args: { name: "include-consumptions" },
            },
          ],
        },
        {
          name: "list-isv-contracts",
          description: "(Preview) Get the list of ISV contracts for the tenant",
          options: [
            columnsOption,
            {
              name: "--top",
              description: "Top limit of results",
              args: { name: "top" },
            },
          ],
        },
        {
          name: "list-storage-warnings",
          description: "(Preview) Storage warning thresholds",
        },
        {
          name: "patch-currency-allocation-by-environment",
          description:
            "(Preview) Allocate and deallocate the currencies for the environment",
          options: [
            {
              name: "--currency-allocations",
              description:
                "Specify the request body with environment ID and currency details. Provide the value as a JSON array",
              args: { name: "currency-allocations" },
            },
            environmentOption,
          ],
        },
        {
          name: "put-allocations-v2",
          description: "(Preview) Set the allocations for the scope",
          options: [
            {
              name: "--allocated-entitlements",
              description:
                "Allocated entitlements. Provide the value as a JSON array",
              args: { name: "allocated-entitlements" },
            },
            {
              name: "--scope-environment-group-id",
              description:
                "Environment group ID that scopes the licensing allocations to set",
              args: { name: "scope-environment-group-id" },
            },
            {
              name: "--scope-environment-id",
              description:
                "Environment ID that scopes the licensing allocations to set",
              args: { name: "scope-environment-id" },
            },
            {
              name: "--scope-resource-id",
              description:
                "Resource ID that scopes the licensing allocations to set",
              args: { name: "scope-resource-id" },
            },
            {
              name: "--scope-tenant-id",
              description:
                "Tenant ID that scopes the licensing allocations to set",
              args: { name: "scope-tenant-id" },
            },
            {
              name: "--scope-user-group-id",
              description:
                "User group ID that scopes the licensing allocations to set",
              args: { name: "scope-user-group-id" },
            },
            {
              name: "--scope-user-id",
              description:
                "User ID that scopes the licensing allocations to set",
              args: { name: "scope-user-id" },
            },
          ],
        },
        {
          name: "refresh-provisioning-status",
          description:
            "(Preview) Refresh the billing policy provisioning status",
          options: [billingPolicyIdOption],
        },
        {
          name: "remove-billing-policy-environment",
          description: "(Preview) Unlink billing policy ID from environments",
          options: [
            billingPolicyIdOption,
            {
              name: "--environment-ids",
              description: "Provide the value as a JSON array",
              args: { name: "environment-ids" },
            },
          ],
        },
        {
          name: "retrieve-temporary-currency-entitlement-count",
          description:
            "(Preview) Get the temporary currency count and limit for the month by type",
          options: [
            {
              name: "--currency-type",
              description: "The currency type",
              isRequired: true,
              args: {
                name: "currency-type",
                suggestions: [
                  "AI",
                  "AppPass",
                  "AppPassForTeams",
                  "Invoice",
                  "MCSSessions",
                  "MCSMessages",
                  "PAHostedRPA",
                  "PAUnattendedRPA",
                  "PerFlowPlan",
                  "PortalAddOns",
                  "PortalLogins",
                  "PortalViews",
                  "PowerPagesAuthenticated",
                  "PowerPagesAnonymous",
                  "PowerAutomatePerProcess",
                  "ProcessMiningDataStorage",
                  "SCMessages",
                  "VAConversations",
                ],
              },
            },
          ],
        },
        {
          name: "update-allocations-by-environment",
          description:
            "(Preview) Update currency allocations and enforcement rules for an environment",
          options: [
            {
              name: "--currency-allocations",
              description:
                "The per-currency allocations, including enforcement rules such as TenantPool that can be enabled or disabled. Provide the value as a JSON array",
              args: { name: "currency-allocations" },
            },
            {
              name: "--environment-id",
              description: "The environment ID",
              args: { name: "environment-id" },
            },
          ],
        },
        {
          name: "update-billing-policy",
          description: "(Preview) Updates the billing policy at tenant level",
          options: [
            billingPolicyIdOption,
            {
              name: "--name",
              description: "Updated name for the tenant-level billing policy",
              args: { name: "name" },
            },
            {
              name: "--status",
              description: "The desired ISV contract status",
              args: { name: "status", suggestions: enabledDisabled },
            },
          ],
        },
        {
          name: "update-isv-contract",
          description: "(Preview) Update an ISV contract",
          options: [
            {
              name: "--isv-contract-id",
              description: "The ISV contract ID",
              isRequired: true,
              args: { name: "isv-contract-id" },
            },
            {
              name: "--conditions-api-filter",
              description:
                "The Power Platform connector filter. Provide the value as a JSON object",
              args: { name: "conditions-api-filter" },
            },
            {
              name: "--name",
              description: "Updated name for the ISV contract",
              args: { name: "name" },
            },
            {
              name: "--power-automate-policy-cloud-flow-runs-pay-as-you-go-state",
              description:
                "Updated pay-as-you-go state for cloud flow runs under the ISV contract",
              args: {
                name: "power-automate-policy-cloud-flow-runs-pay-as-you-go-state",
                suggestions: enabledDisabled,
              },
            },
            {
              name: "--power-automate-policy-desktop-flow-attended-runs-pay-as-you-go-state",
              description:
                "Updated pay-as-you-go state for attended desktop flow runs under the ISV contract",
              args: {
                name: "power-automate-policy-desktop-flow-attended-runs-pay-as-you-go-state",
                suggestions: enabledDisabled,
              },
            },
            {
              name: "--power-automate-policy-desktop-flow-unattended-runs-pay-as-you-go-state",
              description:
                "Updated pay-as-you-go state for unattended desktop flow runs under the ISV contract",
              args: {
                name: "power-automate-policy-desktop-flow-unattended-runs-pay-as-you-go-state",
                suggestions: enabledDisabled,
              },
            },
            {
              name: "--status",
              description: "The desired ISV contract status",
              args: { name: "status", suggestions: enabledDisabled },
            },
          ],
        },
        {
          name: "upsert-resource-threshold",
          description:
            "(Preview) Create or update the resource threshold for an environment resource",
          options: [
            entitlementIdOption,
            {
              name: "--resource-id",
              description: "The resource ID",
              isRequired: true,
              args: { name: "resource-id" },
            },
            environmentOption,
            {
              name: "--limit",
              description:
                "Licensing consumption limit for the environment resource threshold",
              args: { name: "limit" },
            },
            {
              name: "--notification-threshold",
              description:
                "Consumption threshold at which to notify users about the environment resource",
              args: { name: "notification-threshold" },
            },
            {
              name: "--notify-if-over-capacity",
              description:
                "Whether to send a notification when the environment resource exceeds allocated capacity",
              args: { name: "notify-if-over-capacity" },
            },
            {
              name: "--resource-consumption",
              description:
                "Current consumption value for the environment resource threshold",
              args: { name: "resource-consumption" },
            },
            {
              name: "--stop-if-over-capacity",
              description:
                "Whether to stop the environment resource when it exceeds allocated capacity",
              args: { name: "stop-if-over-capacity" },
            },
            {
              name: "--stop-resource",
              description:
                "Whether to stop the environment resource when its licensing threshold is exceeded",
              args: { name: "stop-resource" },
            },
          ],
        },
      ],
    },
    {
      name: "managed-identity",
      description:
        "Commands for managing Managed Identity records for Dataverse components",
      subcommands: [
        {
          name: "configure-fic",
          description:
            "(Preview) Create the federated identity credential on the managed identity or app registration",
          options: [
            componentIdOption,
            componentTypeOption,
            environmentOption,
            {
              name: ["--version", "-v"],
              description:
                "The managed identity version to use for FIC generation. Version 1 uses CN-based FIC paths; version 2 uses SHA256-hashed paths that support certificates with special characters. Defaults to the version stored on the managed identity record",
              args: { name: "version" },
            },
          ],
        },
        {
          name: "create",
          description:
            "(Preview) Create and link a managed identity to a Dataverse component",
          options: [
            {
              name: ["--application-id", "-aid"],
              description:
                "Application (client) ID of the managed identity or app registration",
              isRequired: true,
              args: { name: "application-id" },
            },
            componentIdOption,
            componentTypeOption,
            {
              name: ["--tenant-id", "-tid"],
              description:
                "Azure AD tenant ID for the managed identity or application registration",
              isRequired: true,
              args: { name: "tenant-id" },
            },
            environmentOption,
          ],
        },
        {
          name: "delete",
          description:
            "(Preview) Remove the managed identity linked to a Dataverse component",
          options: [
            componentIdOption,
            componentTypeOption,
            {
              name: ["--confirm", "-y"],
              description: "Confirms the delete operation without prompting",
            },
            environmentOption,
          ],
        },
        {
          name: "get",
          description:
            "(Preview) Show the managed identity linked to a Dataverse component",
          options: [componentIdOption, componentTypeOption, environmentOption],
        },
        {
          name: "show-fic",
          description:
            "(Preview) Show the computed federated identity credential for a Dataverse component",
          options: [
            componentIdOption,
            componentTypeOption,
            environmentOption,
            {
              name: ["--version", "-v"],
              description:
                "The managed identity version to use for FIC generation. Version 1 uses CN-based FIC paths; version 2 uses SHA256-hashed paths that support certificates with special characters. Defaults to the version stored on the managed identity record",
              args: { name: "version" },
            },
          ],
        },
        {
          name: "update",
          description:
            "(Preview) Update tenant or application identifiers for the linked managed identity",
          options: [
            componentIdOption,
            componentTypeOption,
            {
              name: ["--application-id", "-aid"],
              description:
                "Application (client) ID of the managed identity or app registration",
              args: { name: "application-id" },
            },
            environmentOption,
            {
              name: ["--tenant-id", "-tid"],
              description:
                "Azure AD tenant ID for the managed identity or application registration",
              args: { name: "tenant-id" },
            },
          ],
        },
        {
          name: "upgrade-version",
          description:
            "(Preview) Upgrade managed identity to the latest supported version for the component type",
          options: [
            componentIdOption,
            componentTypeOption,
            {
              name: ["--confirm", "-y"],
              description:
                "Confirms the upgrade-version operation when updating or reverting the managed identity version",
            },
            environmentOption,
            {
              name: "--revert-version",
              description:
                "Revert the managed identity to the previous version instead of upgrading",
            },
            {
              name: "--skip-fic-configuration",
              description:
                "Skip automatic federated identity credential configuration. When set, shows FIC values for manual Azure Portal configuration and requires user confirmation before version upgrade",
            },
            {
              name: "--target-version",
              description:
                "Target version to upgrade to (e.g., 2). Performs all intermediate upgrades automatically. If not specified, upgrades by one version",
              args: { name: "target-version" },
            },
          ],
        },
        {
          name: "verify-fic",
          description:
            "(Preview) Verify whether the federated identity credential exists",
          options: [
            componentIdOption,
            componentTypeOption,
            environmentOption,
            {
              name: ["--version", "-v"],
              description:
                "The managed identity version to use for FIC generation. Version 1 uses CN-based FIC paths; version 2 uses SHA256-hashed paths that support certificates with special characters. Defaults to the version stored on the managed identity record",
              args: { name: "version" },
            },
          ],
        },
      ],
    },
    {
      name: "model",
      description: "Commands for working with model-driven apps",
      subcommands: [
        {
          name: "create",
          description: "Creates a new model-driven app",
          options: [
            {
              name: ["--name", "-n"],
              description: "The display name for the new model-driven app",
              isRequired: true,
              args: { name: "name" },
            },
            {
              name: ["--description", "-d"],
              description: "Description for the new model-driven app",
              args: { name: "description" },
            },
            environmentOption,
            {
              name: "--publish",
              description: "Publish the app after creation",
            },
            {
              name: "--solution",
              description:
                "Solution unique name to add the app to. Defaults to 'Default' if not specified",
              args: { name: "solution" },
            },
          ],
        },
        {
          name: "genpage",
          description: "Work with generative pages in model-driven apps",
          subcommands: [
            {
              name: "add",
              description:
                "Attach one or more existing generative pages to a model-driven app's sitemap (no re-upload). Use 'pac model genpage upload' to create or update the page itself; use this verb to make an already-uploaded page show up in another app",
              options: [
                {
                  name: "--page-id",
                  description:
                    "Comma-separated generative page IDs (GUIDs) to add to the app",
                  isRequired: true,
                  args: { name: "page-id" },
                },
                {
                  name: "--app-id",
                  description:
                    "The model-driven app's ID (GUID). Mutually exclusive with --app-name",
                  args: { name: "app-id" },
                },
                {
                  name: "--app-name",
                  description:
                    "The model-driven app's unique name. Mutually exclusive with --app-id",
                  args: { name: "app-name" },
                },
                {
                  name: "--area",
                  description:
                    "Optional Area ID in the sitemap to place the page under. Defaults to the first Area",
                  args: { name: "area" },
                },
                environmentOption,
                {
                  name: "--group",
                  description:
                    "Optional Group ID in the sitemap to place the page under. Defaults to the first Group of the chosen Area",
                  args: { name: "group" },
                },
                {
                  name: "--language-code",
                  description:
                    "Language code (LCID) for the SubArea title. Defaults to 1033 (en-US)",
                  args: { name: "language-code" },
                },
                {
                  name: "--publish",
                  description:
                    "Publish the model-driven app after adding the page(s)",
                },
                {
                  name: "--solution",
                  description:
                    "Unique name of the Dataverse solution context for the sitemap update. Defaults to 'Default'",
                  args: { name: "solution" },
                },
              ],
            },
            {
              name: "download",
              description: "Pull generated pages from a model-driven app",
              options: [
                {
                  name: "--app-id",
                  description: "The ID of the model-driven app",
                  isRequired: true,
                  args: { name: "app-id" },
                },
                environmentOption,
                {
                  name: ["--output-directory", "-o"],
                  description:
                    "Directory to save pulled pages. Defaults to current directory",
                  args: { name: "output-directory" },
                },
                {
                  name: "--page-id",
                  description: "Comma-separated list of page IDs to pull",
                  args: { name: "page-id" },
                },
              ],
            },
            {
              name: "generate-types",
              description:
                "Generates TypeScript schema definitions for data sources",
              options: [
                {
                  name: "--data-sources",
                  description:
                    "Comma-separated list of data sources used (e.g., 'account,lead,contact')",
                  isRequired: true,
                  args: { name: "data-sources" },
                },
                environmentOption,
                {
                  name: ["--output-file", "-o"],
                  description:
                    "Path to save the generated TypeScript schema file (defaults to RuntimeTypes.ts)",
                  args: { name: "output-file" },
                },
              ],
            },
            {
              name: "get-connector-schema",
              description:
                "Gets a connector table column schema or REST operation schema for generated pages",
              options: [
                {
                  name: "--connection-id",
                  description:
                    "Connection id to use for connector metadata discovery",
                  isRequired: true,
                  args: { name: "connection-id" },
                },
                {
                  name: "--connector-id",
                  description:
                    "Connector API id (for example, /providers/Microsoft.PowerApps/apis/shared_sharepointonline)",
                  isRequired: true,
                  args: { name: "connector-id" },
                },
                {
                  name: "--dataset",
                  description:
                    "Dataset identifier for tabular connector discovery (for example, a SharePoint site URL or SQL server/database). Required with --table",
                  args: { name: "dataset" },
                },
                environmentOption,
                {
                  name: "--operation",
                  description:
                    "REST operation identifier for operation schema mode. Cannot be used with --dataset or --table",
                  args: { name: "operation" },
                },
                {
                  name: "--table",
                  description:
                    "Table identifier for tabular schema mode. Requires --dataset and cannot be used with --operation",
                  args: { name: "table" },
                },
              ],
            },
            {
              name: "list",
              description:
                "List generated pages — env-wide by default, or for one app when --app-id is supplied. Pass --include-unpublished to also list draft pages",
              options: [
                {
                  name: "--app-id",
                  description: "The ID of the model-driven app",
                  args: { name: "app-id" },
                },
                environmentOption,
                {
                  name: "--include-unpublished",
                  description:
                    "Include unpublished generative pages in the list (default: only published)",
                },
              ],
            },
            {
              name: "list-connector-operations",
              description:
                "Lists connector REST operations for generated pages",
              options: [
                {
                  name: "--connection-id",
                  description:
                    "Connection id to use for connector metadata discovery",
                  isRequired: true,
                  args: { name: "connection-id" },
                },
                {
                  name: "--connector-id",
                  description:
                    "Connector API id (for example, /providers/Microsoft.PowerApps/apis/shared_sharepointonline)",
                  isRequired: true,
                  args: { name: "connector-id" },
                },
                environmentOption,
              ],
            },
            {
              name: "list-connector-tables",
              description: "Lists connector tables for generated pages",
              options: [
                {
                  name: "--connection-id",
                  description:
                    "Connection id to use for connector metadata discovery",
                  isRequired: true,
                  args: { name: "connection-id" },
                },
                {
                  name: "--connector-id",
                  description:
                    "Connector API id (for example, /providers/Microsoft.PowerApps/apis/shared_sharepointonline)",
                  isRequired: true,
                  args: { name: "connector-id" },
                },
                {
                  name: "--dataset",
                  description:
                    "Dataset identifier for tabular connector discovery (for example, a SharePoint site URL or SQL server/database). Required with --table",
                  args: { name: "dataset" },
                },
                environmentOption,
              ],
            },
            {
              name: "remove",
              description:
                "Detach existing generative AI page(s) from a model-driven app's sitemap. The page row in Dataverse is preserved (it may still be referenced from other apps)",
              options: [
                {
                  name: "--page-id",
                  description:
                    "One or more uxagentproject ids to remove (comma separated)",
                  isRequired: true,
                  args: { name: "page-id" },
                },
                {
                  name: "--app-id",
                  description:
                    "Model-driven app id (uniqueid) to remove the page(s) from. Mutually exclusive with --app-name",
                  args: { name: "app-id" },
                },
                {
                  name: "--app-name",
                  description:
                    "Model-driven app unique name to remove the page(s) from. Mutually exclusive with --app-id",
                  args: { name: "app-name" },
                },
                environmentOption,
                {
                  name: "--publish",
                  description:
                    "Publish the model-driven app after the sitemap edit so changes go live immediately",
                },
                {
                  name: "--solution",
                  description:
                    "Dataverse solution unique name for the sitemap update. Defaults to 'Default'",
                  args: { name: "solution" },
                },
              ],
            },
            {
              name: "transpile",
              description:
                "Transpiles a TypeScript file with runtime types for testing and debugging",
              options: [
                {
                  name: "--code-file",
                  description: "Path to the file containing the page code",
                  isRequired: true,
                  args: { name: "code-file" },
                },
                {
                  name: "--data-sources",
                  description:
                    "Comma-separated list of data sources used (e.g., 'account,lead,contact')",
                  args: { name: "data-sources" },
                },
                environmentOption,
                {
                  name: "--output-file",
                  description:
                    "Path to save the transpiled JavaScript output (defaults to [code-file].compiled.js)",
                  args: { name: "output-file" },
                },
              ],
            },
            {
              name: "upload",
              description:
                "Upload a generated page to Dataverse and publish it. Creates a new page when --page-id is omitted; updates the existing page when --page-id is supplied. To attach a page that already exists in the environment to another app's sitemap without re-uploading, use 'pac model genpage add' instead",
              options: [
                {
                  name: "--app-id",
                  description: "The ID of the model-driven app",
                  isRequired: true,
                  args: { name: "app-id" },
                },
                {
                  name: "--code-file",
                  description: "Path to the file containing the page code",
                  isRequired: true,
                  args: { name: "code-file" },
                },
                {
                  name: "--actions",
                  description:
                    "Path to a JSON file with Dataverse Custom API (action/function) bindings to persist in the page's config.json under actionBindings",
                  args: { name: "actions" },
                },
                {
                  name: "--add-to-sitemap",
                  description: "Add the page to the app's sitemap navigation",
                },
                {
                  name: "--agent-message",
                  description: "The agent's response message",
                  args: { name: "agent-message" },
                },
                {
                  name: "--agent-message-file",
                  description:
                    "Path to a file containing the agent's response message",
                  args: { name: "agent-message-file" },
                },
                {
                  name: "--compiled-code-file",
                  description:
                    "Path to the file containing the compiled JavaScript code. If not provided, TypeScript will be automatically transpiled to JavaScript",
                  args: { name: "compiled-code-file" },
                },
                {
                  name: "--connectors",
                  description:
                    "Path to a JSON file with connector bindings to persist in the page's config.json",
                  args: { name: "connectors" },
                },
                {
                  name: "--data-sources",
                  description:
                    "Comma-separated list of data sources used (e.g., 'account,lead,contact')",
                  args: { name: "data-sources" },
                },
                environmentOption,
                {
                  name: "--model",
                  description:
                    "The AI model used to generate the page (e.g., 'claude-3-5-sonnet-20241022')",
                  args: { name: "model" },
                },
                {
                  name: ["--name", "-n"],
                  description: "The name of the page",
                  args: { name: "name" },
                },
                {
                  name: "--page-id",
                  description:
                    "The ID of the page to update. If not provided, a new page will be created",
                  args: { name: "page-id" },
                },
                {
                  name: "--prompt",
                  description: "The user prompt that generated this page",
                  args: { name: "prompt" },
                },
                {
                  name: "--prompt-file",
                  description:
                    "Path to a file containing the user prompt that generated this page",
                  args: { name: "prompt-file" },
                },
              ],
            },
          ],
        },
        {
          name: "list",
          description: "Lists all model-driven apps in the environment",
          options: [environmentOption],
        },
        {
          name: "list-languages",
          description: "Lists enabled languages in the Dataverse environment",
          options: [environmentOption],
        },
        {
          name: "list-tables",
          description: "List Dataverse tables in the connected environment",
          options: [
            environmentOption,
            {
              name: ["--search", "-s"],
              description:
                "Comma-separated list of names to search for (matches logical name, schema name, or display name)",
              args: { name: "search" },
            },
            {
              name: ["--type", "-t"],
              description:
                "Filter by table type: 'custom', 'standard', or 'all' (default: all)",
              args: { name: "type" },
            },
          ],
        },
      ],
    },
    {
      name: "modelbuilder",
      description: "Code Generator for Dataverse APIs and Tables",
      subcommands: [
        {
          name: "build",
          description: "Builds a code model for Dataverse APIs and Tables",
          options: [
            {
              name: ["--suppressGeneratedCodeAttribute", "-sgca"],
              description:
                "When set, this suppress all generated objects being tagged with the code generation engine and version",
            },
            {
              name: ["--language", "-l"],
              description:
                "The language to use for the generated proxy code. This value can be either 'CS' or 'VB'. The default language is 'CS'",
              args: { name: "language" },
            },
            {
              name: ["--namespace", "-n"],
              description:
                "The namespace for the generated code. The default namespace is the global namespace",
              args: { name: "namespace" },
            },
            {
              name: ["--serviceContextName", "-sctx"],
              description:
                "The name for the generated service context. If a value is passed in, it's used for the Service Context. If not, no Service Context is generated",
              args: { name: "serviceContextName" },
            },
            {
              name: ["--generatesdkmessages", "-a"],
              description:
                "When set, emits Sdk message classes as part of code generation",
            },
            {
              name: ["--emitentityetc", "-etc"],
              description:
                "When set, includes the entity ETC ( entity type code ) in the generated code",
            },
            {
              name: ["--emitvirtualattributes", "-eva"],
              description:
                "When set, includes supporting name attributes for lookups that enable filtering on the primary name attribute values of lookup attributes",
            },
            {
              name: ["--emitfieldsclasses", "-efc"],
              description:
                "Generate a constants structure that contains all of the field names by entity at the time of code generation",
            },
            {
              name: ["--entitynamesfilter", "-enf"],
              description:
                "Filters the list of entities are retrieved when reading data from Dataverse. Passed in as a semicolon separated list. Using the form <entitylogicalname>;<entitylogicalname>",
              args: { name: "entitynamesfilter" },
            },
            {
              name: ["--messagenamesfilter", "-mnf"],
              description:
                "Filters the list of messages that are retrieved when reading data from Dataverse. Passed in as a semicolon separated list, required messages (Create, Update, Delete, Retrieve, RetrieveMultiple, Associate and Disassociate) are always included. Use a trailing or leading asterisk (*) with the names of the messages to allow for all messages starting with or ending with a string. Using the form <messagename>;<messagename>",
              args: { name: "messagenamesfilter" },
            },
            {
              name: ["--outdirectory", "-o"],
              description:
                "Write directory for entity, message, and optionset files",
              isRequired: true,
              args: { name: "outdirectory" },
            },
            {
              name: ["--entitytypesfolder", "-etf"],
              description:
                "Folder name that contains entities. The default name is 'Entities'",
              args: { name: "entitytypesfolder" },
            },
            {
              name: ["--messagestypesfolder", "-mtf"],
              description:
                "Folder name that contains messages. The default name is 'Messages'",
              args: { name: "messagestypesfolder" },
            },
            {
              name: ["--optionsetstypesfolder", "-otf"],
              description:
                "Folder name that contains option sets. The default name is 'OptionSets'",
              args: { name: "optionsetstypesfolder" },
            },
            {
              name: ["--generateGlobalOptionSets", "-go"],
              description:
                "Emit all Global OptionSets. Note: If an entity contains a reference to a global optionset, it is emitted even if this switch is not present",
              args: { name: "generateGlobalOptionSets" },
            },
            {
              name: ["--writesettingsTemplateFile", "-wstf"],
              description:
                "When set, writes a settings file out to the output directory with the current passed settings or default settings",
              args: { name: "writesettingsTemplateFile" },
            },
            {
              name: ["--settingsTemplateFile", "-stf"],
              description:
                "Contains Settings to be used for this run of the Dataverse Model Builder, overrides any duplicate parameters on command line. Can't be set when --writesettingstemplate is used",
              args: { name: "settingsTemplateFile" },
            },
            {
              name: "--suppressINotifyPattern",
              description:
                "When enabled, doesn't write the INotify wrappers for properties and classes",
              args: { name: "suppressINotifyPattern" },
            },
            {
              name: ["--logLevel", "-ll"],
              description: "Log level. The default value is 'Off'",
              args: { name: "logLevel", suggestions: logLevels },
            },
            environmentOption,
          ],
        },
      ],
    },
    {
      name: "package",
      description: "Commands for working with Dataverse package projects",
      subcommands: [
        {
          name: "init",
          description:
            "Initializes a directory with a new Dataverse package project",
          options: [
            outputDirectoryOption,
            {
              name: "--package-name",
              description:
                "Sets the default name of the package. Applies to the generation of ImportExtension.GetNameOfImport",
              args: { name: "package-name" },
            },
            {
              name: ["--layer", "-l"],
              description:
                "(Preview) X++ layer. Allowed values: USR, CUS, VAR, SL1, SL2, SL3, BUS, HFX, GLS, DIS, ISV. Default: ISV",
              args: { name: "layer" },
            },
            {
              name: ["--model", "-m"],
              description:
                "(Preview) Name(s) of the X++ model(s) to scaffold. Accepts a single name or a comma-separated list (e.g. ModelA,ModelB). Required when --package-type is erp",
              args: { name: "model" },
            },
            {
              name: ["--package-type", "-pt"],
              description:
                "Type of package project to scaffold. Allowed values: dataverse, erp (Preview). Default: dataverse",
              args: { name: "package-type" },
            },
            {
              name: ["--publisher", "-pub"],
              description:
                "(Preview) Publisher name written into the model descriptor. Default: Microsoft",
              args: { name: "publisher" },
            },
            {
              name: ["--source-root", "-sr"],
              description:
                "(Preview) Source root path (relative to output directory) where models will live. Default: ./src",
              args: { name: "source-root" },
            },
          ],
        },
        {
          name: "add-external-package",
          description:
            "Adds a package that is external to the Dataverse solution system to a Package Deployer Package project",
          options: [
            {
              name: ["--path", "-p"],
              description: "Path to the external package",
              isRequired: true,
              args: { name: "path" },
            },
            {
              name: ["--package-type", "-t"],
              description:
                "The type of the package being added. For example: 'xpp' for FnO packages",
              isRequired: true,
              args: { name: "package-type" },
            },
            {
              name: "--import-order",
              description:
                "A whole number that indicates the order to insert this item into the final ImportConfig.xml file at build time. Negative numbers are inserted before existing elements. Positive numbers are added after existing elements",
              args: { name: "import-order" },
            },
            {
              name: ["--skip-validation", "-sv"],
              description:
                "Adds the item to the project file even if the file doesn't exist or appears to be invalid. Note: Using this doesn't affect any validation performed by MSBuild",
            },
          ],
        },
        {
          name: "add-solution",
          description:
            "Adds a prebuilt Dataverse solution file to a Package Deployer Package project",
          options: [
            {
              name: ["--path", "-p"],
              description:
                "Path to the Dataverse solution file. The file must be a compressed ZIP file",
              isRequired: true,
              args: { name: "path" },
            },
            {
              name: "--import-order",
              description:
                "A whole number that indicates the order to insert this item into the final ImportConfig.xml file at build time. Negative numbers are inserted before existing elements. Positive numbers are added after existing elements",
              args: { name: "import-order" },
            },
            {
              name: ["--skip-validation", "-sv"],
              description:
                "Adds the item to the project file even if the file doesn't exist or appears to be invalid. Note: Using this doesn't affect any validation performed by MSBuild",
            },
            {
              name: "--publish-workflows-activate-plugins",
              description:
                "Explicitly indicates whether to publish the workflows and activate plug-ins when this solution is imported",
              args: {
                name: "publish-workflows-activate-plugins",
                suggestions: trueFalse,
              },
            },
            {
              name: "--overwrite-unmanaged-customizations",
              description:
                "Explicitly indicates whether to overwrite unmanaged customizations when this solution is imported",
              args: {
                name: "overwrite-unmanaged-customizations",
                suggestions: trueFalse,
              },
            },
            {
              name: "--import-mode",
              description:
                "Explicitly specifies the required mode when importing this solution",
              args: { name: "import-mode", suggestions: syncAsync },
            },
            {
              name: "--missing-dependency-behavior",
              description:
                "Specifies the behavior on import when a dependency of this solution is missing from the target environment",
              args: {
                name: "missing-dependency-behavior",
                suggestions: skipFault,
              },
            },
            {
              name: "--dependency-overrides",
              description:
                "A semicolon delimited list of overrides. This value overrides any dependency information encoded in the solution's metadata. Each override should be in the format: `<uniquename>:<minVersion>:<maxVersion>`. Where minVersion and maxVersion are optional but should be in .NET version format syntax",
              args: { name: "dependency-overrides" },
            },
          ],
        },
        {
          name: "add-reference",
          description: "Adds reference to Dataverse solution project",
          options: [
            {
              name: ["--path", "-p"],
              description:
                "The path to the referenced Dataverse solution project",
              isRequired: true,
              args: { name: "path" },
            },
            {
              name: "--import-order",
              description:
                "A whole number that indicates the order to insert this item into the final ImportConfig.xml file at build time. Negative numbers are inserted before existing elements. Positive numbers are added after existing elements",
              args: { name: "import-order" },
            },
            {
              name: "--publish-workflows-activate-plugins",
              description:
                "Explicitly indicates whether to publish the workflows and activate plug-ins when this solution is imported",
              args: {
                name: "publish-workflows-activate-plugins",
                suggestions: trueFalse,
              },
            },
            {
              name: "--overwrite-unmanaged-customizations",
              description:
                "Explicitly indicates whether to overwrite unmanaged customizations when this solution is imported",
              args: {
                name: "overwrite-unmanaged-customizations",
                suggestions: trueFalse,
              },
            },
            {
              name: "--import-mode",
              description:
                "Explicitly specifies the required mode when importing this solution",
              args: { name: "import-mode", suggestions: syncAsync },
            },
            {
              name: "--missing-dependency-behavior",
              description:
                "Specifies the behavior on import when a dependency of this solution is missing from the target environment",
              args: {
                name: "missing-dependency-behavior",
                suggestions: skipFault,
              },
            },
            {
              name: "--dependency-overrides",
              description:
                "A semicolon delimited list of overrides. This value overrides any dependency information encoded in the solution's metadata. Each override should be in the format: `<uniquename>:<minVersion>:<maxVersion>`. Where minVersion and maxVersion are optional but should be in .NET version format syntax",
              args: { name: "dependency-overrides" },
            },
          ],
        },
        {
          name: "deploy",
          description: "Deploys package to Dataverse",
          options: [
            {
              name: ["--logFile", "-lf"],
              description: "Log file path",
              args: { name: "logFile" },
            },
            {
              name: ["--logConsole", "-c"],
              description: "Output log to console",
            },
            {
              name: ["--package", "-p"],
              description: "Path to a package dll or zip file with a package",
              args: { name: "package" },
            },
            {
              name: ["--settings", "-s"],
              description:
                "Runtime Package Settings that are passed to the package that is being deployed. The format of the string must be `key=value|key=value`",
              args: { name: "settings" },
            },
            {
              name: ["--verbose", "-vdbg"],
              description: "Emit verbose logs to the log outputs",
            },
            {
              name: ["--argument-file", "-af"],
              description:
                "(Preview) Path to a JSON file matching the IncrementalSyncParameters (or ModuleSyncParameters) contract. Required for --db-sync Incremental",
              args: { name: "argument-file" },
            },
            {
              name: ["--build-type", "-bt"],
              description:
                "(Preview) How the package is applied. Allowed values: Full, Incremental, Delete. Default: Full. Used with --package-type erp",
              args: { name: "build-type" },
            },
            {
              name: ["--db-sync", "-ds"],
              description:
                "(Preview) Database synchronization mode to run after deploy. Allowed values: None, Full, Module, Incremental. Default: None. Used with --package-type erp",
              args: { name: "db-sync" },
            },
            environmentOption,
            {
              name: ["--modules", "-m"],
              description:
                "(Preview) Comma-separated list of module names to synchronize. Required when --db-sync is Module",
              args: { name: "modules" },
            },
            {
              name: ["--outputDirectory", "-o"],
              description:
                "(Preview) Solution-mode only: root folder containing .erp/xpp.json. Defaults to the current directory. When --package is omitted under --package-type erp, all models listed in .erp/xpp.json are deployed in dependency order",
              args: { name: "outputDirectory" },
            },
            {
              name: ["--package-type", "-pt"],
              description:
                "Target platform for deployment. Allowed values: dataverse, erp (Preview). Default: dataverse",
              args: { name: "package-type" },
            },
            {
              name: ["--release-type", "-rt"],
              description:
                "(Preview) Package classification. Allowed values: Dev, Release. Default: Dev. Release packages force a full database sync on the server. Used with --package-type erp",
              args: { name: "release-type" },
            },
            {
              name: ["--solution", "-sz"],
              description:
                "Path to the Dataverse solution file. The file must be a compressed ZIP or CAB file",
              args: { name: "solution" },
            },
            {
              name: ["--solution-root", "-sr"],
              description:
                "(Preview) Solution-mode only: root folder containing .erp/xpp.json. Defaults to the current directory. When --package is omitted under --package-type erp, all models listed in .erp/xpp.json are deployed in dependency order",
              args: { name: "solution-root" },
            },
          ],
        },
        {
          name: "show",
          description: "Shows details of Dataverse package",
          options: [
            {
              name: ["--package", "-p"],
              description: "Path to a package dll or zip file with a package",
              isRequired: true,
              args: { name: "package" },
            },
            {
              name: ["--logFile", "-lf"],
              description: "Log file path",
              args: { name: "logFile" },
            },
            {
              name: ["--verbose", "-vdbg"],
              description: "Emit verbose logs to the log outputs",
            },
            environmentOption,
          ],
        },
        {
          name: "compile",
          description:
            "(Preview) Compiles a package. With --package-type erp, compiles X++ models using xppc.exe from the installed SDK and produces a deployable ZIP per model",
          options: [
            {
              name: ["--package-type", "-pt"],
              description:
                "Target platform for deployment. Allowed values: dataverse, erp (Preview). Default: dataverse",
              isRequired: true,
              args: { name: "package-type" },
            },
            {
              name: ["--app-version", "-av"],
              description:
                "Four-part F&O application version of the SDK to compile against (e.g. 10.0.2588.0). When omitted, the SDK registered for the active environment is used",
              args: { name: "app-version" },
            },
            {
              name: "--incremental",
              description:
                "Compile only changed artifacts (passes -incremental to xppc)",
            },
            {
              name: ["--language", "-lang"],
              description:
                "Comma-separated list of locales to compile labels for (e.g. en-US or en-US,fr,de). When omitted, LabelC builds every locale found in the source — matches Visual Studio's default Build Models behavior. Only affects the labels stage; xppc + best-practices + package run once over the combined output",
              args: { name: "language" },
            },
            {
              name: ["--license-file", "-lf"],
              description:
                "Path to an ISV license file to inject into each produced model ZIP. Written to <Model>/bin/<filename> inside the ZIP",
              args: { name: "license-file" },
            },
            {
              name: ["--model", "-m"],
              description:
                "Model name(s) to compile. Accepts a single name or comma-separated list. When omitted, all models listed in .erp/xpp.json are compiled",
              args: { name: "model" },
            },
            {
              name: "--output",
              description:
                "Directory where the deployable ZIPs will be written. Default: <repoRoot>/bin",
              args: { name: "output" },
            },
            outputDirectoryOption,
            {
              name: "--skip-bp",
              description:
                "Skip the best-practices check step. By default the compile pipeline runs labels -> X++ -> best-practices",
            },
            {
              name: ["--solution-root", "-sr"],
              description:
                "Root folder of the X++ solution (contains .erp/xpp.json). Defaults to the current directory",
              args: { name: "solution-root" },
            },
          ],
        },
        {
          name: "db-sync",
          description:
            "(Preview) Synchronizes the Finance and Operations application database with Dataverse",
          options: [
            {
              name: ["--argument-file", "-af"],
              description:
                "(Preview) Path to a JSON file matching the IncrementalSyncParameters (or ModuleSyncParameters) contract. Required for --db-sync Incremental",
              args: { name: "argument-file" },
            },
            {
              name: ["--db-sync", "-ds"],
              description:
                "Database synchronization mode. Allowed values: Full, Module, Incremental. Default: Full",
              args: { name: "db-sync" },
            },
            environmentOption,
            {
              name: ["--modules", "-m"],
              description:
                "(Preview) Comma-separated list of module names to synchronize. Required when --db-sync is Module",
              args: { name: "modules" },
            },
          ],
        },
      ],
    },
    {
      name: ["pages", "powerpages", "paportal"],
      description: "Commands for working with Power Pages website",
      subcommands: [
        {
          name: "list",
          description:
            "List all Power Pages websites from the current Dataverse environment",
          options: [
            {
              name: ["--verbose", "-v"],
              description: "Enables verbose mode to provide more details",
            },
            environmentOption,
          ],
        },
        {
          name: "download",
          description:
            "Download Power Pages website content from the current Dataverse environment",
          options: [
            {
              name: ["--path", "-p"],
              description:
                "Path where the Power Pages website content is downloaded",
              isRequired: true,
              args: { name: "path" },
            },
            {
              name: ["--webSiteId", "-id"],
              description: "Power Pages website ID to download",
              isRequired: true,
              args: { name: "webSiteId" },
            },
            {
              name: ["--includeEntities", "-ie"],
              description:
                "Download only the entities specified for this argument using comma separated entity logical names",
              args: { name: "includeEntities" },
            },
            {
              name: ["--excludeEntities", "-xe"],
              description:
                "Comma separated list of entity logical names to exclude downloading",
              args: { name: "excludeEntities" },
            },
            {
              name: ["--overwrite", "-o"],
              description: "Power Pages website content to overwrite",
            },
            {
              name: ["--modelVersion", "-mv"],
              description:
                "Power Pages website data model version to download. When not specified, 'Standard' will be used. [Enhanced or Standard]",
              args: { name: "modelVersion" },
            },
            environmentOption,
          ],
        },
        {
          name: "upload",
          description:
            "Upload Power Pages website content to current Dataverse environment",
          options: [
            {
              name: ["--path", "-p"],
              description:
                "Path from where the Power Pages website content is uploaded",
              isRequired: true,
              args: { name: "path" },
            },
            {
              name: ["--deploymentProfile", "-dp"],
              description:
                "Deployment profile name to be used. Defaults to 'default'",
              args: { name: "deploymentProfile" },
            },
            {
              name: ["--forceUploadAll", "-f"],
              description:
                "Upload all Power Pages website content to the current Dataverse environment",
            },
            {
              name: ["--modelVersion", "-mv"],
              description: "Power Pages website data model version to upload",
              args: { name: "modelVersion" },
            },
            environmentOption,
          ],
        },
        {
          name: "bootstrap-migrate",
          description: "Migrates HTML code from bootstrap V3 to V5",
          options: [
            {
              name: ["--path", "-p"],
              description: "Path of website content",
              isRequired: true,
              args: { name: "path" },
            },
          ],
        },
        {
          name: "clone",
          description:
            "Create Power Pages website content based on existing website content",
          options: [
            {
              name: ["--outputDirectory", "-od"],
              description:
                "Path where the Power Pages website content is saved after cloning",
              isRequired: true,
              args: { name: "outputDirectory" },
            },
            {
              name: ["--path", "-p"],
              description: "Path of website content",
              isRequired: true,
              args: { name: "path" },
            },
            {
              name: ["--name", "-n"],
              description:
                "Name for the cloned Power Pages site. If not provided, defaults to 'Copy of <original-site-name>'",
              args: { name: "name" },
            },
            {
              name: ["--overwrite", "-o"],
              description:
                "Overwrites the existing folder present at the output path",
              args: { name: "overwrite" },
            },
          ],
        },
        {
          name: "download-code-site",
          description:
            "Download Power Pages website content from the current Dataverse environment",
          options: [
            {
              name: ["--path", "-p"],
              description:
                "Path where the Power Pages website content is downloaded",
              isRequired: true,
              args: { name: "path" },
            },
            {
              name: ["--webSiteId", "-id"],
              description: "Power Pages website ID to download",
              isRequired: true,
              args: { name: "webSiteId" },
            },
            environmentOption,
            {
              name: ["--overwrite", "-o"],
              description: "Power Pages website content to overwrite",
            },
          ],
        },
        {
          name: "migrate-datamodel",
          description:
            "Manage data model migration for your Power Pages website",
          options: [
            {
              name: ["--webSiteId", "-id"],
              description: "Power Pages website ID to update the site",
              isRequired: true,
              args: { name: "webSiteId" },
            },
            {
              name: ["--checkMigrationStatus", "-s"],
              description:
                "To check the status of the site with migration in progress",
            },
            environmentOption,
            {
              name: ["--mode", "-m"],
              description:
                "Choose from configurationData / configurationDataReferences / all - based on your requirement",
              args: {
                name: "mode",
                suggestions: [
                  "configurationData",
                  "configurationDataReferences",
                  "all",
                ],
              },
            },
            {
              name: ["--portalId", "-pid"],
              description: "Portal ID for the website under migration",
              args: { name: "portalId" },
            },
            {
              name: ["--resetMigration", "-rs"],
              description: "Resets the data model migration process",
            },
            {
              name: ["--revertToStandardDataModel", "-r"],
              description: "Revert site from enhanced to standard data model",
            },
            {
              name: ["--siteCustomizationReportPath", "-p"],
              description: "Local path to store the site customization report",
              args: { name: "siteCustomizationReportPath" },
            },
            {
              name: ["--updateDataModelVersion", "-u"],
              description:
                "Update data model version for the site once the data is migrated successfully",
            },
            {
              name: ["--verbose", "-v"],
              description:
                "Enables verbose mode to provide more details during data model migration",
            },
          ],
        },
        {
          name: "upload-code-site",
          description: "Uploads your compiled code to Power Pages site",
          options: [
            {
              name: ["--rootPath", "-rp"],
              description: "Root source folder to initialize Power Pages code",
              isRequired: true,
              args: { name: "rootPath" },
            },
            {
              name: ["--compiledPath", "-cp"],
              description: "Location of compiled code",
              args: { name: "compiledPath" },
            },
            {
              name: ["--siteName", "-sn"],
              description: "Name of the site",
              args: { name: "siteName" },
            },
          ],
        },
      ],
    },
    {
      name: "pcf",
      description:
        "Commands for working with Power Apps component framework projects",
      subcommands: [
        {
          name: "init",
          description:
            "Initializes a directory with a new Power Apps component framework project",
          options: [
            {
              name: ["--namespace", "-ns"],
              description: "The namespace for the component",
              args: { name: "namespace" },
            },
            {
              name: ["--name", "-n"],
              description: "The name for the component",
              args: { name: "name" },
            },
            {
              name: ["--template", "-t"],
              description: "Choose a template for the component",
              args: { name: "template", suggestions: pcfComponentTypes },
            },
            {
              name: ["--framework", "-fw"],
              description:
                "The rendering framework for control. The default value is 'none', which means HTML",
              args: { name: "framework", suggestions: pcfFrameworkTypes },
            },
            outputDirectoryOption,
            {
              name: ["--run-npm-install", "-npm"],
              description:
                "Auto run 'npm install' after the control is created. The default value is 'false'",
            },
          ],
        },
        {
          name: "push",
          description:
            "Import the Power Apps component framework project into the current Dataverse organization",
          options: [
            {
              name: ["--publisher-prefix", "-pp"],
              description:
                "Customization prefix value for the Dataverse solution publisher",
              args: { name: "publisher-prefix" },
            },
            {
              name: ["--verbosity", "-v"],
              description:
                "Verbosity level for MSBuild when building the temporary solution wrapper",
              args: { name: "verbosity", suggestions: msBuildVerbosityLevels },
            },
            {
              name: ["--force-import", "-f"],
              description:
                "Force a full update of the control as part of a temporary solution. Deprecated: this parameter is ignored",
              deprecated: true,
            },
            {
              name: ["--interactive", "-i"],
              description:
                "Indicates that actions in the build are allowed to interact with the user. Don't use this argument in an automated scenario where interactivity is not expected",
            },
            {
              name: ["--incremental", "-inc"],
              description:
                "Pushes only files which are different using entity updates",
            },
            environmentOption,
            {
              name: "--solution-unique-name",
              description:
                "The unique name of the solution to add the component to",
              args: { name: "solution-unique-name" },
            },
          ],
        },
        {
          name: "version",
          description: "Patch version for controls",
          options: [
            {
              name: ["--strategy", "-s"],
              description:
                "Updates patch version for 'ControlManifest.xml' files using specified strategy. If using gittags, set a personal access token in the following environment variable \"PacCli.PAT\"",
              args: { name: "strategy", suggestions: pcfPatchStrategies },
            },
            {
              name: ["--patchversion", "-pv"],
              description: "Patch version for controls",
              args: { name: "patchversion" },
            },
            {
              name: ["--path", "-p"],
              description:
                "Absolute/Relative path of the 'ControlManifest.xml' for updating",
              args: { name: "path" },
            },
            {
              name: ["--allmanifests", "-a"],
              description:
                "Updates patch version for all 'ControlManifest.xml' files",
            },
            {
              name: ["--updatetarget", "-ut"],
              description: "Specify which target manifest needs to be updated",
              args: { name: "updatetarget", suggestions: pcfPatchTargets },
            },
            {
              name: ["--filename", "-fn"],
              description:
                "Tracker CSV file name to be used when using filetracking as a strategy. The default value is 'ControlsStateVersionInfo.csv'",
              args: { name: "filename" },
            },
          ],
        },
      ],
    },
    {
      name: "pipeline",
      description: "Work with Pipelines",
      subcommands: [
        {
          name: "list",
          description: "List Pipelines",
          options: [
            {
              name: ["--pipeline", "-p"],
              description:
                "Pipeline name or ID for which show list of details such as deployment stages",
              args: { name: "pipeline" },
            },
            {
              name: ["--environment", "-env"],
              description: "Deployment Environment",
              args: { name: "environment" },
            },
          ],
        },
        {
          name: "deploy",
          description: "Start pipeline deployment",
          options: [
            {
              name: ["--solutionName", "-sn"],
              description: "Solution Name",
              isRequired: true,
              args: { name: "solutionName" },
            },
            {
              name: ["--stageId", "-sid"],
              description: "Deployment Stage ID",
              isRequired: true,
              args: { name: "stageId" },
            },
            {
              name: ["--environment", "-env"],
              description: "Deployment Environment",
              args: { name: "environment" },
            },
            {
              name: ["--currentVersion", "-cv"],
              description: "Current solution version",
              isRequired: true,
              args: { name: "currentVersion" },
            },
            {
              name: ["--newVersion", "-nv"],
              description: "New solution version",
              isRequired: true,
              args: { name: "newVersion" },
            },
            {
              name: ["--wait", "-w"],
              description: "Wait until the deployment finishes",
            },
          ],
        },
      ],
    },
    {
      name: "plugin",
      description: "Commands for working with Dataverse plug-in class library",
      subcommands: [
        {
          name: "init",
          description:
            "Initializes a directory with a new Dataverse plug-in class library",
          options: [
            {
              name: ["--signing-key-file-path", "-sk"],
              description:
                "Relative path to the Dataverse plug-in assembly originator key file for signing",
              args: { name: "signing-key-file-path" },
            },
            outputDirectoryOption,
            {
              name: ["--author", "-a"],
              description:
                "One or more authors of the Dataverse Plug-in Package",
              args: { name: "author" },
            },
            {
              name: ["--skip-signing", "-ss"],
              description:
                "Skip plug-in assembly signing that gives the plug-in assembly a strong name. The default value is 'false'",
            },
          ],
        },
        {
          name: "push",
          description: "Import plug-in into Dataverse",
          options: [
            {
              name: ["--pluginId", "-id"],
              description: "ID of plug-in assembly or plug-in package",
              isRequired: true,
              args: { name: "pluginId" },
            },
            {
              name: ["--pluginFile", "-pf"],
              description: "File name of plug-in assembly or plug-in package",
              args: { name: "pluginFile" },
            },
            {
              name: ["--type", "-t"],
              description:
                "Type of item if not specified explicitly through --pluginFile. The default value is: 'Nuget'",
              args: { name: "type", suggestions: importPluginType },
            },
            {
              name: ["--configuration", "-c"],
              description: "Build configuration. The default value is: 'Debug'",
              args: { name: "configuration" },
            },
            environmentOption,
          ],
        },
      ],
    },
    {
      name: "power-apps",
      description:
        "(Preview) List and inspect Power Apps across environments for admin governance",
      subcommands: [
        {
          name: "get-admin-app",
          description: "(Preview) Returns a PowerApp",
          options: [
            {
              name: "--app",
              description: "Name field of the PowerApp",
              isRequired: true,
              args: { name: "app" },
            },
            environmentOption,
          ],
        },
        {
          name: "get-admin-apps",
          description: "(Preview) Returns a list of apps",
          options: [
            columnsOption,
            environmentOption,
            {
              name: "--skiptoken",
              description: "Get next page of responses",
              args: { name: "skiptoken" },
            },
            {
              name: "--top",
              description: "Number of apps in the response",
              args: { name: "top" },
            },
          ],
        },
      ],
    },
    {
      name: "power-automate",
      description:
        "(Preview) Inspect Power Automate cloud flows, actions, and run history as an admin",
      subcommands: [
        {
          name: "list-cloud-flows",
          description: "(Preview) Returns a list of cloud flows",
          options: [
            columnsOption,
            {
              name: "--created-by",
              description: "The creator Dataverse ID",
              args: { name: "created-by" },
            },
            {
              name: "--created-on-end-date",
              description: "Filter for created on or before this date",
              args: { name: "created-on-end-date" },
            },
            {
              name: "--created-on-start-date",
              description: "Filter for created on or after this date",
              args: { name: "created-on-start-date" },
            },
            environmentOption,
            {
              name: "--modified-on-end-date",
              description: "Filter for modified on or before this date",
              args: { name: "modified-on-end-date" },
            },
            {
              name: "--modified-on-start-date",
              description: "Filter for modified on or after this date",
              args: { name: "modified-on-start-date" },
            },
            {
              name: "--owner-id",
              description: "The owner Dataverse ID",
              args: { name: "owner-id" },
            },
            {
              name: "--resource-id",
              description: "The resource ID",
              args: { name: "resource-id" },
            },
            {
              name: "--workflow-id",
              description: "The workflow ID",
              args: { name: "workflow-id" },
            },
          ],
        },
        {
          name: "list-flow-actions",
          description: "(Preview) Returns a list of flow actions",
          options: [
            columnsOption,
            {
              name: "--connector",
              description: "The connector name",
              args: { name: "connector" },
            },
            environmentOption,
            {
              name: "--exact",
              description:
                "Use exact matching for parameterName and parameterValue",
              args: { name: "exact" },
            },
            {
              name: "--is-trigger",
              description:
                "Indicates if the action is a trigger. No filter if unset",
              args: { name: "is-trigger" },
            },
            {
              name: "--parameter-name",
              description:
                "A keyword to search within the parameter name field",
              args: { name: "parameter-name" },
            },
            {
              name: "--parameter-value",
              description:
                "A keyword to search within the parameter value field",
              args: { name: "parameter-value" },
            },
            {
              name: "--parent-process-stage-id",
              description: "The parent process stage ID",
              args: { name: "parent-process-stage-id" },
            },
            {
              name: "--workflow-id",
              description: "The workflow ID",
              args: { name: "workflow-id" },
            },
          ],
        },
        {
          name: "list-flow-runs",
          description: "(Preview) Returns a list of flow runs",
          options: [
            {
              name: "--workflow-id",
              description: "The workflow ID",
              isRequired: true,
              args: { name: "workflow-id" },
            },
            columnsOption,
            environmentOption,
          ],
        },
      ],
    },
    {
      name: ["power-fx", "pfx"],
      description: "(Preview) Commands for working with Power Fx",
      subcommands: [
        {
          name: "repl",
          description:
            "(Preview) Launch interactive Power Fx Read-Eval-Print Loop",
          options: [environmentOption],
        },
        {
          name: "run",
          description: "(Preview) Run a file of Power Fx instructions",
          options: [
            {
              name: ["--file", "-f"],
              description: "Path of file to execute",
              isRequired: true,
              args: { name: "file" },
            },
            {
              name: ["--echo", "-e"],
              description: "True if input commands should echo back to output",
            },
            environmentOption,
          ],
        },
      ],
    },
    {
      name: "power-pages",
      description:
        "(Preview) Manage Power Pages sites, firewall, certificates, and custom domains",
      subcommands: [
        {
          name: "add-allowed-ip-addresses",
          description:
            "(Preview) These IP addresses will be able to access the website",
          options: [
            websiteIdOption,
            environmentOption,
            {
              name: "--ip-addresses",
              description: "Provide the value as a JSON array",
              args: { name: "ip-addresses" },
            },
          ],
        },
        {
          name: "add-ssl-binding-by-portal",
          description:
            "(Preview) Binds the specified certificate thumbprint to the custom domain hostname of the website",
          options: [
            {
              name: "--host-name",
              description:
                "The custom domain hostname to bind the certificate to",
              isRequired: true,
              args: { name: "host-name" },
            },
            websiteIdOption,
            {
              name: "--thumbprint",
              description: "The thumbprint of the certificate to bind",
              isRequired: true,
              args: { name: "thumbprint" },
            },
            environmentOption,
          ],
        },
        {
          name: "convert-trial-to-production",
          description:
            "(Preview) Convert a trial website to a production website",
          options: [
            websiteIdOption,
            {
              name: "--enable-cdn",
              description:
                "Enable Content Delivery Network (CDN) for the website",
              args: { name: "enable-cdn" },
            },
            {
              name: "--enable-waf",
              description:
                "Enable Web Application Firewall (WAF) for the website",
              args: { name: "enable-waf" },
            },
            environmentOption,
            {
              name: "--use-dynamics365-portal-add-on-license",
              description:
                "Use Dynamics 365 Portal Add-On License for the website",
              args: { name: "use-dynamics365-portal-add-on-license" },
            },
          ],
        },
        {
          name: "create-custom-domain",
          description:
            "(Preview) Adds the specified custom host name to the website",
          options: [
            {
              name: "--custom-domain",
              description: "The custom host name to add to the website",
              isRequired: true,
              args: { name: "custom-domain" },
            },
            websiteIdOption,
            environmentOption,
          ],
        },
        {
          name: "create-waf-rules",
          description:
            "(Preview) Create web application Firewall rules on the given website",
          options: [
            websiteIdOption,
            {
              name: "--custom-rules",
              description: "Provide the value as a JSON array",
              args: { name: "custom-rules" },
            },
            environmentOption,
            {
              name: "--managed-rules",
              description: "Provide the value as a JSON array",
              args: { name: "managed-rules" },
            },
          ],
        },
        {
          name: "create-website",
          description: "(Preview) Trigger the creation of a new website",
          options: [
            {
              name: "--dataverse-organization-id",
              description: "Dataverse organization's unique identifier (ID)",
              isRequired: true,
              args: { name: "dataverse-organization-id" },
            },
            {
              name: "--name",
              description: "Name of the website",
              isRequired: true,
              args: { name: "name" },
            },
            {
              name: "--selected-base-language",
              description:
                "Language ID - https://go.microsoft.com/fwlink/?linkid=2208135",
              isRequired: true,
              args: { name: "selected-base-language" },
            },
            {
              name: "--subdomain",
              description: "Subdomain for the website URL",
              isRequired: true,
              args: { name: "subdomain" },
            },
            {
              name: "--template-name",
              description: "Website template name",
              isRequired: true,
              args: {
                name: "template-name",
                suggestions: [
                  { name: "StarterLayout1", description: "Starter Layout 1" },
                  { name: "StarterLayout2", description: "Starter Layout 2" },
                  { name: "StarterLayout3", description: "Starter Layout 3" },
                  { name: "StarterLayout4", description: "Starter Layout 4" },
                  { name: "StarterLayout5", description: "Starter Layout 5" },
                  { name: "BlankPage", description: "Blank Page" },
                  {
                    name: "BookMeetings",
                    description: "Schedule and Manage Meetings",
                  },
                  { name: "FAQ", description: "Frequently Asked Questions" },
                  {
                    name: "ProgramRegistration",
                    description: "Program Registration",
                  },
                  {
                    name: "BuildingPermit",
                    description: "Application Processing",
                  },
                  { name: "Community", description: "Community" },
                  { name: "EventPortal", description: "Event Portal" },
                  {
                    name: "CustomerSelfServicePortal",
                    description: "Customer Self Service Portal",
                  },
                  {
                    name: "EmployeeSelfServicePortal",
                    description: "Employee Self Service Portal",
                  },
                  { name: "PartnerPortal", description: "Partner Portal" },
                  { name: "CustomerPortal", description: "Customer Portal" },
                  { name: "FieldService", description: "Field Service" },
                  {
                    name: "DefaultPortalTemplate",
                    description: "Starter Layout 1",
                  },
                  {
                    name: "PowerPortals_ProgramRegistration",
                    description: "Program Registration",
                  },
                  {
                    name: "PowerPortals_BookMeeting",
                    description: "Schedule and Manage Meetings",
                  },
                ],
              },
            },
            environmentOption,
            {
              name: "--website-record-id",
              description:
                "Dataverse record unique identifier (ID) of the website",
              args: { name: "website-record-id" },
            },
          ],
        },
        {
          name: "delete-certificate-by-portal",
          description:
            "(Preview) Deletes the certificate identified by the given thumbprint and type from the website",
          options: [
            {
              name: "--cert-type",
              description: "The type of certificate (e.g., SSL, MANAGED)",
              isRequired: true,
              args: { name: "cert-type" },
            },
            websiteIdOption,
            {
              name: "--thumbprint",
              description: "The thumbprint of the certificate to delete",
              isRequired: true,
              args: { name: "thumbprint" },
            },
            environmentOption,
          ],
        },
        {
          name: "delete-host-name-for-portal",
          description:
            "(Preview) Removes the specified custom host name from the website and cleans up associated SSL bindings and AFD configuration",
          options: [
            {
              name: "--host-name",
              description: "The custom host name to remove from the website",
              isRequired: true,
              args: { name: "host-name" },
            },
            websiteIdOption,
            environmentOption,
          ],
        },
        {
          name: "delete-ssl-binding-by-thumbprint",
          description:
            "(Preview) Removes the SSL binding for the specified hostname and certificate thumbprint from the website",
          options: [
            {
              name: "--host-name",
              description:
                "The custom domain hostname whose SSL binding will be removed",
              isRequired: true,
              args: { name: "host-name" },
            },
            websiteIdOption,
            {
              name: "--thumbprint",
              description: "The thumbprint of the certificate to unbind",
              isRequired: true,
              args: { name: "thumbprint" },
            },
            environmentOption,
          ],
        },
        {
          name: "delete-waf-custom-rules",
          description:
            "(Preview) Deletes web application firewall custom rules on the given website",
          options: [
            {
              name: "--body",
              description:
                "The JSON request body, or @<path> to read it from a file",
              isRequired: true,
              args: { name: "body" },
            },
            websiteIdOption,
            environmentOption,
          ],
        },
        {
          name: "delete-website",
          description:
            "(Preview) Trigger the deletion of a website by specifying the website ID",
          options: [websiteIdOption, environmentOption],
        },
        {
          name: "disable-waf",
          description:
            "(Preview) Disable web application Firewall on the given website",
          options: [websiteIdOption, environmentOption],
        },
        {
          name: "enable-waf",
          description:
            "(Preview) Enable web application firewall on the given website",
          options: [websiteIdOption, environmentOption],
        },
        {
          name: "get-affected-sites",
          description:
            "(Preview) Lists the websites in the tenant affected by an exception scenario, with each site's existing grant state, so an admin can review and select sites before granting",
          options: [
            {
              name: "--exception-type",
              description:
                'The exception scenario discriminator, e.g. "WebApiStarRetirement"',
              isRequired: true,
              args: { name: "exception-type", suggestions: advisorScenarios },
            },
            columnsOption,
            environmentOption,
          ],
        },
        {
          name: "get-allowed-ip-addresses",
          description:
            "(Preview) Returns the list of IP addresses in the website's IP restriction allow list",
          options: [websiteIdOption, environmentOption],
        },
        {
          name: "get-certificates-by-portal",
          description:
            "(Preview) Returns the list of certificates associated with the specified website, filtered by certificate type",
          options: [
            {
              name: "--cert-type",
              description:
                "The type of certificate to retrieve. Allowed values: SSL, MANAGED",
              isRequired: true,
              args: { name: "cert-type" },
            },
            websiteIdOption,
            environmentOption,
          ],
        },
        {
          name: "get-exceptions",
          description:
            "(Preview) Lists the tenant's exception state rows (optionally filtered by exception type) with the derived lifecycle status",
          options: [
            environmentOption,
            {
              name: "--exception-type",
              description:
                'Optional exception scenario discriminator to filter by, e.g. "WebApiStarRetirement"',
              args: { name: "exception-type", suggestions: advisorScenarios },
            },
          ],
        },
        {
          name: "get-security-scan-report",
          description:
            "(Preview) Get the deep scan report for a Power Pages website",
          options: [websiteIdOption, columnsOption, environmentOption],
        },
        {
          name: "get-security-scan-score",
          description:
            "(Preview) Get the deep scan score for a Power Pages website",
          options: [websiteIdOption, environmentOption],
        },
        {
          name: "get-waf-rules",
          description:
            "(Preview) Get the web application firewall rules associated with the given website",
          options: [
            websiteIdOption,
            environmentOption,
            {
              name: "--rule-type",
              description: "Type of web application firewall rules to retrieve",
              args: { name: "rule-type", suggestions: ["managed", "custom"] },
            },
          ],
        },
        {
          name: "get-waf-status",
          description:
            "(Preview) Get the status of web application firewall associated with the given website",
          options: [websiteIdOption, environmentOption],
        },
        {
          name: "get-website-by-id",
          description:
            "(Preview) Get website details using a specified website ID",
          options: [websiteIdOption, environmentOption],
        },
        {
          name: "get-websites",
          description:
            "(Preview) Get a list of all the websites in your environment",
          options: [
            columnsOption,
            environmentOption,
            {
              name: "--skip",
              description:
                "The number of items to skip before returning the remaining items",
              args: { name: "skip" },
            },
          ],
        },
        {
          name: "grant-exception",
          description:
            "(Preview) Grants a break-glass admin exception (one-time per website and exception type) across one or more websites in the tenant. Gating, validation, and audit/state writes are synchronous; application-setting propagation is queued asynchronously",
          options: [
            environmentOption,
            {
              name: "--exception-type",
              description:
                'Exception scenario discriminator identifying which admin exception ("break-glass") scenario a grant, revoke, or query targets',
              args: { name: "exception-type", suggestions: advisorScenarios },
            },
            {
              name: "--portal-ids",
              description:
                "Websites the exception should be applied to (deduplicated server-side). Provide the value as a JSON array",
              args: { name: "portal-ids" },
            },
            {
              name: "--risk-acknowledged",
              description:
                "Whether the admin explicitly acknowledged the risk. Must be true to proceed",
              args: { name: "risk-acknowledged" },
            },
          ],
        },
        {
          name: "list-host-names-for-portal",
          description:
            "(Preview) Returns the list of custom host names configured for the specified website",
          options: [websiteIdOption, environmentOption],
        },
        {
          name: "list-ssl-bindings-by-thumbprints",
          description:
            "(Preview) Returns the SSL bindings (certificate thumbprints) associated with the specified hostname on the website",
          options: [
            {
              name: "--host-name",
              description:
                "The custom domain hostname to filter SSL bindings by",
              isRequired: true,
              args: { name: "host-name" },
            },
            websiteIdOption,
            environmentOption,
          ],
        },
        {
          name: "remove-allowed-ip-addresses",
          description:
            "(Preview) Removes the specified IP addresses from the website's IP restriction allow list",
          options: [
            websiteIdOption,
            environmentOption,
            {
              name: "--ip-addresses",
              description: "Provide the value as a JSON array",
              args: { name: "ip-addresses" },
            },
          ],
        },
        {
          name: "restart-website",
          description: "(Preview) Restart the website for the given site ID",
          options: [websiteIdOption, environmentOption],
        },
        {
          name: "revoke-exception",
          description:
            "(Preview) Revokes a previously granted admin exception across one or more websites in the tenant. Each exception state row is force-expired and asynchronous application-setting revert is queued",
          options: [
            environmentOption,
            {
              name: "--exception-type",
              description:
                'Exception scenario discriminator identifying which admin exception ("break-glass") scenario a grant, revoke, or query targets',
              args: { name: "exception-type", suggestions: advisorScenarios },
            },
            {
              name: "--portal-ids",
              description:
                "Websites whose exception should be revoked (deduplicated server-side). Provide the value as a JSON array",
              args: { name: "portal-ids" },
            },
          ],
        },
        {
          name: "set-portal-bootstrap-v5-enabled",
          description:
            "(Preview) Stamp bootstrap version five (5) status as enabled for website",
          options: [websiteIdOption, environmentOption],
        },
        {
          name: "set-portal-data-model-version",
          description: "(Preview) Stamp data model version for website",
          options: [
            websiteIdOption,
            environmentOption,
            {
              name: "--is-new-data-model",
              description: "Whether the portal uses the enhanced data model",
              args: { name: "is-new-data-model" },
            },
          ],
        },
        {
          name: "start-deep-scan",
          description: "(Preview) Start deep scan for a Power Pages website",
          options: [websiteIdOption, environmentOption],
        },
        {
          name: "start-quick-scan",
          description:
            "(Preview) Execute a quick scan for a Power Pages website",
          options: [
            websiteIdOption,
            environmentOption,
            {
              name: "--lcid",
              description: "Language code identifier (LCID) for the website",
              args: { name: "lcid" },
            },
          ],
        },
        {
          name: "start-website",
          description: "(Preview) Start the website for the given site ID",
          options: [websiteIdOption, environmentOption],
        },
        {
          name: "stop-website",
          description: "(Preview) Stop the website for the given site ID",
          options: [websiteIdOption, environmentOption],
        },
        {
          name: "toggle-afd-traffic-routing",
          description:
            "(Preview) Toggles traffic routing between Azure Front Door and web apps for a portal. When enableAFD is true, enables the AFD endpoint and adds service tag restrictions to web apps. When false, removes service tags and disables the AFD endpoint",
          options: [
            {
              name: "--enable-afd",
              description: "True to enable AFD routing, false to disable",
              isRequired: true,
              args: { name: "enable-afd" },
            },
            websiteIdOption,
            environmentOption,
          ],
        },
        {
          name: "update-portal-security-group",
          description:
            "(Preview) Update the security group for site visibility for a website",
          options: [
            websiteIdOption,
            environmentOption,
            {
              name: "--security-group-id",
              description: "Security group ID",
              args: { name: "security-group-id" },
            },
          ],
        },
        {
          name: "update-site-visibility",
          description: "(Preview) Update site visibility for a website",
          options: [
            websiteIdOption,
            environmentOption,
            {
              name: "--site-visibility",
              description: "Site visibility",
              args: { name: "site-visibility" },
            },
          ],
        },
        {
          name: "update-waf-policy-settings",
          description:
            "(Preview) Updates policy-level web application firewall settings (enforcement mode and JavaScript/CAPTCHA challenge cookie lifetimes) on the given website. Only the fields provided in the request body are applied; omitted fields are left unchanged",
          options: [
            websiteIdOption,
            {
              name: "--captcha-expiration-in-minutes",
              description:
                "CAPTCHA challenge cookie validity lifetime in minutes. The accepted range is validated by Azure Front Door",
              args: { name: "captcha-expiration-in-minutes" },
            },
            environmentOption,
            {
              name: "--javascript-challenge-expiration-in-minutes",
              description:
                "JavaScript challenge cookie validity lifetime in minutes. The accepted range is validated by Azure Front Door",
              args: { name: "javascript-challenge-expiration-in-minutes" },
            },
            {
              name: "--mode",
              description:
                "Web application firewall enforcement mode. Prevention blocks matching requests; Detection only logs them",
              args: { name: "mode", suggestions: ["Prevention", "Detection"] },
            },
          ],
        },
        {
          name: "upload-certificate",
          description:
            "(Preview) Validates and uploads an SSL or managed certificate for the specified website. The certificate file and password must be provided as multipart form data",
          options: [
            {
              name: "--cert-type",
              description: "The type of certificate (e.g., SSL, MANAGED)",
              isRequired: true,
              args: { name: "cert-type" },
            },
            websiteIdOption,
            environmentOption,
            {
              name: "--file",
              description: "The certificate file (.pfx)",
              args: { name: "file" },
            },
            {
              name: "--password",
              description: "The certificate password",
              args: { name: "password" },
            },
          ],
        },
      ],
    },
    {
      name: "resource-query",
      description:
        "(Preview) Query environments, apps, flows, and resources across the tenant",
      subcommands: [
        {
          name: "query-resources",
          description:
            "(Preview) Executes a KQL query against Azure Resource Graph with ARG paging",
          options: [
            {
              name: "--body",
              description:
                "The JSON request body, or @<path> to read it from a file",
              isRequired: true,
              args: { name: "body" },
            },
          ],
        },
      ],
    },
    {
      name: "solution",
      description: "Commands for working with Dataverse solution projects",
      subcommands: [
        {
          name: "init",
          description:
            "Initializes a directory with a new Dataverse solution project",
          options: [
            {
              name: ["--publisher-name", "-pn"],
              description: "Name of the Dataverse solution publisher",
              isRequired: true,
              args: { name: "publisher-name" },
            },
            {
              name: ["--publisher-prefix", "-pp"],
              description:
                "Customization prefix value for the Dataverse solution publisher",
              isRequired: true,
              args: { name: "publisher-prefix" },
            },
            outputDirectoryOption,
          ],
        },
        {
          name: "add-reference",
          description:
            "Adds a reference from the project in the current directory to the project at 'path'",
          options: [
            {
              name: ["--path", "-p"],
              description: "The path to the referenced project",
              isRequired: true,
              args: { name: "path" },
            },
          ],
        },
        {
          name: "list",
          description:
            "List all Solutions from the current Dataverse organization",
          options: [
            environmentOption,
            {
              name: "--includeSystemSolutions",
              description:
                "Include system solutions like those published by Microsoft",
            },
          ],
        },
        {
          name: "delete",
          description:
            "Delete a solution from Dataverse in the current environment",
          options: [
            {
              name: ["--solution-name", "-sn"],
              description: "Name of the solution",
              isRequired: true,
              args: { name: "solution-name" },
            },
            environmentOption,
          ],
        },
        {
          name: "online-version",
          description: "Gets or sets version for solution loaded in Dataverse",
          options: [
            {
              name: ["--solution-name", "-sn"],
              description: "Name of the solution",
              isRequired: true,
              args: { name: "solution-name" },
            },
            {
              name: ["--solution-version", "-sv"],
              description:
                "Specify the solution version number. If omitted, the current online solution version is returned",
              args: { name: "solution-version" },
            },
            environmentOption,
          ],
        },
        {
          name: "version",
          description: "Update build or revision version for the solution",
          options: [
            {
              name: ["--strategy", "-s"],
              description:
                "Updates build version for 'Solution.xml' file using specified strategy. If using gittags, set personal access token in the following environment variable \"PacCli.PAT\"",
              args: { name: "strategy", suggestions: solutionPatchStrategies },
            },
            {
              name: ["--patchversion", "-pv"],
              description:
                "Patch version for the solution. Deprecated: this parameter is ignored",
              deprecated: true,
              args: { name: "patchversion" },
            },
            {
              name: ["--buildversion", "-bv"],
              description: "Build version for the solution",
              args: { name: "buildversion" },
            },
            {
              name: ["--revisionversion", "-rv"],
              description: "Revision version for the solution",
              args: { name: "revisionversion" },
            },
            {
              name: ["--filename", "-fn"],
              description:
                "Tracker CSV file name to be used when using filetracking as a strategy. The default value is 'ControlsStateVersionInfo.csv'",
              args: { name: "filename" },
            },
            {
              name: ["--solutionPath", "-sp"],
              description:
                "Path to Dataverse solution directory or Solution.xml file",
              args: { name: "solutionPath" },
            },
          ],
        },
        {
          name: "import",
          description: "Import the solution into Dataverse",
          options: [
            {
              name: ["--path", "-p"],
              description:
                "Path to solution zip file. If not specified, assumes the current folder is a cdsproj project",
              args: { name: "path" },
            },
            {
              name: ["--activate-plugins", "-ap"],
              description: "Activate plug-ins and workflows on the solution",
            },
            {
              name: ["--force-overwrite", "-f"],
              description: "Force an overwrite of unmanaged customizations",
            },
            {
              name: ["--skip-dependency-check", "-s"],
              description:
                "Skip dependency check against dependencies flagged as product update",
            },
            {
              name: ["--import-as-holding", "-h"],
              description: "Import the solution as a holding solution",
            },
            {
              name: ["--stage-and-upgrade", "-up"],
              description: "Import and upgrade the solution",
            },
            {
              name: ["--publish-changes", "-pc"],
              description: "Publish your changes upon a successful import",
            },
            {
              name: ["--async", "-a"],
              description: "Imports the solution asynchronously",
            },
            maxAsyncWaitTimeOption,
            {
              name: "--settings-file",
              description:
                "The .json file with the deployment settings for connection references and environment variables",
              args: { name: "settings-file", template: "filepaths" },
            },
            {
              name: ["--skip-lower-version", "-slv"],
              description:
                "Skip solution import if same or higher version is present in current environment",
            },
            environmentOption,
          ],
        },
        {
          name: "export",
          description: "Export a solution from Dataverse",
          options: [
            {
              name: ["--name", "-n"],
              description: "The name of the solution to be exported",
              isRequired: true,
              args: { name: "name" },
            },
            {
              name: ["--path", "-p"],
              description:
                "Path where the exported solution zip file is written",
              args: { name: "path" },
            },
            {
              name: ["--managed", "-m"],
              description:
                "Whether the solution should be exported as a managed solution",
            },
            {
              name: ["--targetversion", "-v"],
              description:
                "The version that the exported solution will support. Deprecated: this parameter is ignored",
              deprecated: true,
              args: { name: "targetversion" },
            },
            {
              name: ["--include", "-i"],
              description:
                "Which settings should be included in the solution being exported",
              args: { name: "include", suggestions: orgSettingsIncludes },
            },
            {
              name: ["--async", "-a"],
              description: "Exports the solution asynchronously",
            },
            maxAsyncWaitTimeOption,
            {
              name: ["--overwrite", "-ow"],
              description:
                "The exported solution file can overwrite the solution zip file on the local file system",
            },
            environmentOption,
          ],
        },
        {
          name: "clone",
          description:
            "Create a solution project based on an existing solution in your organization",
          options: [
            {
              name: ["--name", "-n"],
              description: "The name of the solution to be exported",
              isRequired: true,
              args: { name: "name" },
            },
            {
              name: ["--targetversion", "-v"],
              description:
                "The version that the exported solution will support. Deprecated: this parameter is ignored",
              deprecated: true,
              args: { name: "targetversion" },
            },
            {
              name: ["--include", "-i"],
              description:
                "Which settings should be included in the solution being exported",
              args: { name: "include", suggestions: orgSettingsIncludes },
            },
            outputDirectoryOption,
            {
              name: ["--async", "-a"],
              description: "Exports the solution asynchronously",
            },
            maxAsyncWaitTimeOption,
            {
              name: ["--packagetype", "-p"],
              description:
                "Specifies the extraction type for the solution. Can be: 'Unmanaged', 'Managed' or 'Both'. The default value is: 'Both'",
              args: { name: "packagetype", suggestions: solutionTypes },
            },
            {
              name: ["--localize", "-loc"],
              description:
                "Extract or merge all string resources into .resx files",
            },
            environmentOption,
            {
              name: ["--map", "-m"],
              description:
                "The full path to a mapping xml file from which to read component folders to pack",
              args: { name: "map" },
            },
          ],
        },
        {
          name: "publish",
          description: "Publishes all customizations",
          options: [
            {
              name: ["--async", "-a"],
              description: "Publishes all customizations asynchronously",
            },
            maxAsyncWaitTimeOption,
            environmentOption,
          ],
        },
        {
          name: "upgrade",
          description: "Apply solution upgrade",
          options: [
            {
              name: ["--solution-name", "-sn"],
              description: "Name of the solution",
              isRequired: true,
              args: { name: "solution-name" },
            },
            {
              name: ["--async", "-a"],
              description: "Upgrades solution asynchronously",
            },
            maxAsyncWaitTimeOption,
            environmentOption,
          ],
        },
        {
          name: "add-license",
          description: "Add license and plan info to the solution",
          options: [
            {
              name: ["--planDefinitionFile", "-pd"],
              description:
                "License plan definition file in CSV format; expected columns: Service ID, Display name, More info URL",
              isRequired: true,
              args: { name: "planDefinitionFile" },
            },
            {
              name: ["--planMappingFile", "-pm"],
              description:
                "License plan mapping file in CSV format; expected columns: Service ID, Component name",
              isRequired: true,
              args: { name: "planMappingFile" },
            },
          ],
        },
        {
          name: "check",
          description:
            "Upload a Dataverse solution project to run against the Power Apps Checker service",
          options: [
            {
              name: ["--path", "-p"],
              description:
                "Path where one or more solution files to be checked exist. The path can contain glob/wildcard characters",
              args: { name: "path" },
            },
            {
              name: ["--solutionUrl", "-u"],
              description: "SAS Uri pointing to solution.zip to be analyzed",
              args: { name: "solutionUrl" },
            },
            outputDirectoryOption,
            {
              name: ["--geo", "-g"],
              description:
                "Which geographical instance of the Power Apps Checker service to use",
              args: {
                name: "geo",
                suggestions: [
                  "PreviewUnitedStates",
                  "UnitedStates",
                  "Europe",
                  "Asia",
                  "Australia",
                  "Japan",
                  "India",
                  "Canada",
                  "SouthAmerica",
                  "UnitedKingdom",
                  "France",
                  "SouthAfrica",
                  "Germany",
                  "UnitedArabEmirates",
                  "Switzerland",
                  "Norway",
                  "Singapore",
                  "Korea",
                  "Sweden",
                  "Italy",
                  "Poland",
                  "NewZealand",
                  "USGovernment",
                  "USGovernmentL4",
                  "USGovernmentL5DoD",
                  "China",
                ],
              },
            },
            {
              name: ["--customEndpoint", "-ce"],
              description:
                "Specify a custom URL as the Power Apps Checker endpoint",
              args: { name: "customEndpoint" },
            },
            {
              name: ["--ruleLevelOverride", "-rl"],
              description:
                'Path to a file containing a JSON array rules and levels to override. Accepted values for OverrideLevel are: Critical, High, Medium, Low, Informational. Example: [{"Id":"meta-remove-dup-reg","OverrideLevel":"Medium"},{"Id":"il-avoid-specialized-update-ops","OverrideLevel":"Medium"}]',
              args: { name: "ruleLevelOverride" },
            },
            {
              name: ["--ruleSet", "-rs"],
              description:
                'Select a rule set that is executed as part of this build. Values: A valid Guid, "AppSource Certification", "Solution Checker" (default)',
              args: { name: "ruleSet" },
            },
            {
              name: ["--excludedFiles", "-ef"],
              description:
                "Exclude Files from the Analysis. Pass as comma-separated values",
              args: { name: "excludedFiles" },
            },
            {
              name: ["--saveResults", "-sav"],
              description:
                "Uses current environment to store solution analysis results that can be seen in Solution Health Hub App. By default, this argument is set to false",
            },
            {
              name: ["--clearCache", "-cc"],
              description:
                "Clears the solution checker enforcement cache, for your tenant, of all records that pertain to past results for your solutions",
            },
            environmentOption,
          ],
        },
        {
          name: "create-settings",
          description:
            "Create a settings file from solution zip or solution folder",
          options: [
            {
              name: ["--solution-zip", "-z"],
              description: "Path to solution zip file",
              args: { name: "solution-zip" },
            },
            {
              name: ["--solution-folder", "-f"],
              description:
                "Path to the local, unpacked solution folder: either the root of the 'Other/Solution.xml' file or a folder with a .cdsproj file",
              args: { name: "solution-folder" },
            },
            {
              name: ["--settings-file", "-s"],
              description:
                "The .json file with the deployment settings for connection references and environment variables",
              args: { name: "settings-file" },
            },
          ],
        },
        {
          name: "pack",
          description:
            "Package solution components on local filesystem into solution.zip (SolutionPackager)",
          options: [
            {
              name: ["--zipfile", "-z"],
              description: "The full path to the solution ZIP file",
              isRequired: true,
              args: { name: "zipfile" },
            },
            {
              name: ["--folder", "-f"],
              description:
                "The path to the root folder on the local filesystem. When unpacking or extracting, this is written to. When packing this is read from",
              args: { name: "folder" },
            },
            {
              name: ["--packagetype", "-p"],
              description:
                "When unpacking or extracting, use to specify dual Managed and Unmanaged operation. When packing, use to specify Managed or Unmanaged from a previous unpack 'Both'. Can be: 'Unmanaged', 'Managed' or 'Both'. The default value is 'Unmanaged'",
              args: { name: "packagetype", suggestions: solutionTypes },
            },
            {
              name: ["--log", "-l"],
              description: "The path to the log file",
              args: { name: "log" },
            },
            {
              name: ["--errorlevel", "-e"],
              description:
                "Minimum logging level for log output [Verbose|Info|Warning|Error|Off]. The default value is 'Info'",
              args: { name: "errorlevel", suggestions: packagerErrorLevels },
            },
            {
              name: ["--singleComponent", "-sc"],
              description:
                "Only perform action on a single component type [WebResource|Plugin|Workflow|None]. The default value is 'None'",
              args: {
                name: "singleComponent",
                suggestions: packagerComponentTypes,
              },
            },
            {
              name: ["--allowDelete", "-ad"],
              description:
                "Dictates if delete operations may occur. The default value is 'false'",
            },
            {
              name: ["--allowWrite", "-aw"],
              description:
                "Dictates if write operations may occur. The default value is 'false'",
            },
            {
              name: ["--clobber", "-c"],
              description:
                "Enables that files marked read-only can be deleted or overwritten. The default value is 'false'",
            },
            {
              name: ["--map", "-m"],
              description:
                "The full path to a mapping xml file from which to read component folders to pack",
              args: { name: "map" },
            },
            {
              name: ["--sourceLoc", "-src"],
              description:
                "Generates a template resource file. Valid only on extract. Possible values are 'auto', or language code of the language you wish to export. You can use Language Code Identifier (LCID), or International Organization for Standardization (ISO) language code formats. When present, this extracts the string resources from the given locale as a neutral .resx. If 'auto' or just the long or short form of the switch is specified, the base locale for the solution is used",
              args: { name: "sourceLoc" },
            },
            {
              name: ["--localize", "-loc"],
              description:
                "Extract or merge all string resources into .resx files",
            },
            {
              name: ["--useLcid", "-lcid"],
              description:
                "Use Language Code Identifier (LCID) values (1033) rather than International Organization for Standardization (ISO) codes (en-US) for language files",
            },
            {
              name: ["--useUnmanagedFileForMissingManaged", "-same"],
              description:
                "Use the same XML source file when packaging for Managed and only Unmanaged XML file is found; applies to AppModuleSiteMap, AppModuleMap, FormXml files",
            },
            {
              name: ["--disablePluginRemap", "-dpm"],
              description:
                "Disabled plug-in fully qualified type name remapping. The default value is 'false'",
            },
          ],
        },
        {
          name: "unpack",
          description:
            "Extract solution components from solution.zip onto local filesystem (SolutionPackager)",
          options: [
            {
              name: ["--zipfile", "-z"],
              description: "The full path to the solution ZIP file",
              isRequired: true,
              args: { name: "zipfile" },
            },
            {
              name: ["--folder", "-f"],
              description:
                "The path to the root folder on the local filesystem. When unpacking or extracting, this is written to. When packing this is read from",
              args: { name: "folder" },
            },
            {
              name: ["--packagetype", "-p"],
              description:
                "When unpacking or extracting, use to specify dual Managed and Unmanaged operation. When packing, use to specify Managed or Unmanaged from a previous unpack 'Both'. Can be: 'Unmanaged', 'Managed' or 'Both'. The default value is 'Unmanaged'",
              args: { name: "packagetype", suggestions: solutionTypes },
            },
            {
              name: ["--log", "-l"],
              description: "The path to the log file",
              args: { name: "log" },
            },
            {
              name: ["--errorlevel", "-e"],
              description:
                "Minimum logging level for log output [Verbose|Info|Warning|Error|Off]. The default value is 'Info'",
              args: { name: "errorlevel", suggestions: packagerErrorLevels },
            },
            {
              name: ["--singleComponent", "-sc"],
              description:
                "Only perform action on a single component type [WebResource|Plugin|Workflow|None]. The default value is 'None'",
              args: {
                name: "singleComponent",
                suggestions: packagerComponentTypes,
              },
            },
            {
              name: ["--allowDelete", "-ad"],
              description:
                "Dictates if delete operations may occur. The default value is 'false'",
            },
            {
              name: ["--allowWrite", "-aw"],
              description:
                "Dictates if write operations may occur. The default value is 'false'",
            },
            {
              name: ["--clobber", "-c"],
              description:
                "Enables that files marked read-only can be deleted or overwritten. The default value is 'false'",
            },
            {
              name: ["--map", "-m"],
              description:
                "The full path to a mapping xml file from which to read component folders to pack",
              args: { name: "map" },
            },
            {
              name: ["--sourceLoc", "-src"],
              description:
                "Generates a template resource file. Valid only on extract. Possible values are 'auto', or language code of the language you wish to export. You can use Language Code Identifier (LCID), or International Organization for Standardization (ISO) language code formats. When present, this extracts the string resources from the given locale as a neutral .resx. If 'auto' or just the long or short form of the switch is specified, the base locale for the solution is used",
              args: { name: "sourceLoc" },
            },
            {
              name: ["--localize", "-loc"],
              description:
                "Extract or merge all string resources into .resx files",
            },
            {
              name: ["--useLcid", "-lcid"],
              description:
                "Use Language Code Identifier (LCID) values (1033) rather than International Organization for Standardization (ISO) codes (en-US) for language files",
            },
            {
              name: ["--useUnmanagedFileForMissingManaged", "-same"],
              description:
                "Use the same XML source file when packaging for Managed and only Unmanaged XML file is found; applies to AppModuleSiteMap, AppModuleMap, FormXml files",
            },
            {
              name: ["--disablePluginRemap", "-dpm"],
              description:
                "Disabled plug-in fully qualified type name remapping. The default value is 'false'",
            },
          ],
        },
        {
          name: "add-solution-component",
          description:
            "Add one or more solution components to the target unmanaged solution in Dataverse",
          options: [
            {
              name: ["--solutionUniqueName", "-sn"],
              description: "Name of the solution",
              isRequired: true,
              args: { name: "solutionUniqueName" },
            },
            {
              name: ["--component", "-c"],
              description:
                "The schema name or ID of the component to add to the target solution",
              isRequired: true,
              args: { name: "component" },
            },
            {
              name: ["--componentType", "-ct"],
              description:
                "The value that represents the solution component that you're adding",
              isRequired: true,
              args: { name: "componentType" },
            },
            {
              name: ["--AddRequiredComponents", "-arc"],
              description:
                "Indicates whether other solution components required by the solution component that you're adding should also be added to the unmanaged solution",
            },
            {
              name: ["--environment", "-env"],
              description: "Environment URL or ID of the target environment",
              args: { name: "environment" },
            },
            {
              name: ["--async", "-a"],
              description: "Imports the solution asynchronously",
            },
          ],
        },
        {
          name: "sync",
          description:
            "Sync the current Dataverse solution project to the current state of the solution in your organization",
          options: [
            {
              name: ["--solution-folder", "-f"],
              description:
                "Path to the local, unpacked solution folder: either the root of the 'Other/Solution.xml' file or a folder with a .cdsproj file",
              args: { name: "solution-folder" },
            },
            {
              name: ["--include", "-i"],
              description:
                "Which settings should be included in the solution being exported",
              args: { name: "include", suggestions: orgSettingsIncludes },
            },
            {
              name: ["--async", "-a"],
              description: "Exports the solution asynchronously",
            },
            maxAsyncWaitTimeOption,
            {
              name: ["--packagetype", "-p"],
              description:
                "When unpacking or extracting, use to specify dual Managed and Unmanaged operation. When packing, use to specify Managed or Unmanaged from a previous unpack 'Both'. Can be: 'Unmanaged', 'Managed' or 'Both'. The default value is: 'Both'",
              args: { name: "packagetype", suggestions: solutionTypes },
            },
            {
              name: ["--localize", "-loc"],
              description:
                "Extract or merge all string resources into .resx files",
            },
            environmentOption,
            {
              name: ["--map", "-m"],
              description:
                "The full path to a mapping xml file from which to read component folders to pack",
              args: { name: "map" },
            },
          ],
        },
      ],
    },
    {
      name: "telemetry",
      description: "Manage telemetry settings",
      subcommands: [
        {
          name: "enable",
          description:
            "Choose to send usage information to help Microsoft improve this product",
        },
        {
          name: "disable",
          description:
            "Choose to not send usage information to help Microsoft improve this product",
        },
        { name: "status", description: "Show the current status of telemetry" },
      ],
    },
    {
      name: "test",
      description: "(Deprecated) Execution of automated tests for a Power App",
      deprecated: true,
      subcommands: [
        {
          name: "run",
          description: "(Preview) Execute tests defined in a Test Plan file",
          options: [
            {
              name: ["--test-plan-file", "-test"],
              description: "Path to the Test Plan file",
              isRequired: true,
              args: { name: "test-plan-file" },
            },
            {
              name: ["--environment-id", "-env"],
              description: "Environment ID for the app to be tested",
              isRequired: true,
              args: { name: "environment-id" },
            },
            {
              name: ["--tenant", "-t"],
              description: "Tenant ID for the app being tested",
              isRequired: true,
              args: { name: "tenant" },
            },
            {
              name: ["--output-directory", "-o"],
              description: "Path to save test output and logs",
              args: { name: "output-directory" },
            },
            {
              name: ["--domain", "-d"],
              description:
                "The player domain for the app being tested for Canvas provider or endpoint for other provider types",
              args: { name: "domain" },
            },
            {
              name: ["--auth", "-a"],
              description:
                "The certificate provider for the user authentication for app being tested",
              args: {
                name: "auth",
                suggestions: ["None", "Certenv", "Certstore"],
              },
            },
            {
              name: ["--log-level", "-l"],
              description: "Log detail level",
              args: {
                name: "log-level",
                suggestions: [
                  "Trace",
                  "Debug",
                  "Information",
                  "Warning",
                  "Error",
                  "Critical",
                  "None",
                ],
              },
            },
            {
              name: ["--provider", "-p"],
              description: "The application type being tested",
              args: {
                name: "provider",
                suggestions: ["Canvas", "Mda", "Portal", "Powerfx"],
              },
            },
            {
              name: ["--queryparams", "-q"],
              description: "Query parameters for the app being tested",
              args: { name: "queryparams" },
            },
            {
              name: ["--use-static-context", "-c"],
              description:
                "Enable use of static context for Playwright browser",
            },
            {
              name: ["--user-auth", "-u"],
              description: "The user authentication type for app being tested",
              args: {
                name: "user-auth",
                suggestions: ["Storagestate", "Dataverse"],
              },
            },
          ],
        },
      ],
    },
    {
      name: "tool",
      description: "Power Platform tools that can be installed and launched",
      subcommands: [
        {
          name: "list",
          description:
            "List the launchable tools and their local install state and version",
        },
        {
          name: "admin",
          description:
            "Launch Power Platform Admin Center for the current environment",
          options: [environmentOption],
        },
        {
          name: "maker",
          description:
            "Launch Power Apps Maker Portal for the current environment",
          options: [environmentOption],
        },
        {
          name: "prt",
          description: "Launch Plug-in Registration Tool (PRT)",
          options: [
            {
              name: ["--update", "-u"],
              description:
                "Update tool to latest available version from nuget.org",
            },
            {
              name: ["--clear", "-c"],
              description: "Clear tool from local file cache",
            },
          ],
        },
        {
          name: "cmt",
          description: "Launch Configuration Migration Tool (CMT)",
          options: [
            {
              name: ["--update", "-u"],
              description:
                "Update tool to latest available version from nuget.org",
            },
            {
              name: ["--clear", "-c"],
              description: "Clear tool from local file cache",
            },
          ],
        },
        {
          name: "pd",
          description: "Launch Package Deployer (PD)",
          options: [
            {
              name: ["--update", "-u"],
              description:
                "Update tool to latest available version from nuget.org",
            },
            {
              name: ["--clear", "-c"],
              description: "Clear tool from local file cache",
            },
          ],
        },
        {
          name: "init-skills",
          description:
            "Extract PAC CLI AI skill definition files to a local folder",
          options: [
            {
              name: ["--output", "-o"],
              description:
                "Output folder for skills files. Default: .github/skills",
              args: { name: "output" },
            },
            {
              name: ["--skills", "-s"],
              description:
                "Comma-separated list of skill names (top-level noun names) to copy, e.g. admin,auth. Default: all skills",
              args: { name: "skills" },
            },
          ],
        },
        {
          name: "xpp",
          description: "Manage X++ SDK installations on this machine",
          subcommands: [
            {
              name: "install",
              description:
                "Download and install the X++ compiler and PackagesLocalDirectory for the active environment",
              options: [
                {
                  name: ["--app-version", "-av"],
                  description:
                    "Four-part F&O application version to install (e.g. 10.0.2588.0). When omitted, the version is queried from Dataverse",
                  args: { name: "app-version" },
                },
                environmentOption,
              ],
            },
            {
              name: "list",
              description: "List X++ SDKs installed on this machine",
            },
            {
              name: "uninstall",
              description: "Remove an installed X++ SDK and its registration",
              options: [
                {
                  name: ["--version", "-v"],
                  description:
                    "Four-part SDK version to remove (e.g. 10.0.2588.0). Omit to remove the SDK registered for the active environment",
                  args: { name: "version" },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "user-management",
      description:
        "(Preview) Assign the Power Platform system administrator role to a user",
      subcommands: [
        {
          name: "apply-admin-role",
          description:
            "(Preview) Apply the system administrator role to the selected user",
          options: [environmentOption],
        },
      ],
    },
    {
      name: "workflows-agent",
      description:
        "(Preview) Fulfill DSR export and delete requests for Power Automate and agent data",
      subcommands: [
        {
          name: "delete-approval",
          description:
            "(Preview) Deletes an approval and associated records for DSR compliance",
          options: [
            {
              name: "--approval-id",
              description: "The approval ID",
              isRequired: true,
              args: { name: "approval-id" },
            },
          ],
        },
        {
          name: "delete-connection",
          description: "(Preview) Deletes a connection for DSR compliance",
          options: [
            {
              name: "--connection-identifier",
              description:
                "The connection identifier in apiName/connectionName format",
              isRequired: true,
              args: { name: "connection-identifier" },
            },
          ],
        },
        {
          name: "delete-flow",
          description:
            "(Preview) Deletes a flow in the M365 Copilot workflows environment for DSR compliance",
          options: [flowIdOption],
        },
        {
          name: "delete-prompt",
          description:
            "(Preview) Deletes an AI model prompt for DSR compliance",
          options: [
            {
              name: "--prompt-id",
              description: "The AI model prompt ID",
              isRequired: true,
              args: { name: "prompt-id" },
            },
          ],
        },
        {
          name: "get-approvals",
          description:
            "(Preview) Returns approval records for DSR compliance export",
          options: [continuationTokenOption],
        },
        {
          name: "get-connections",
          description:
            "(Preview) Returns user connections for DSR compliance export",
          options: [continuationTokenOption],
        },
        {
          name: "get-flow-runs-non-singleton",
          description:
            "(Preview) Returns flow run records for a flow in an environment",
          options: [flowIdOption, continuationTokenOption, environmentOption],
        },
        {
          name: "get-flow-runs-singleton",
          description:
            "(Preview) Returns flow run records for a flow for DSR export",
          options: [flowIdOption, continuationTokenOption],
        },
        {
          name: "get-flows",
          description:
            "(Preview) Returns flows owned by the calling user for DSR export",
          options: [continuationTokenOption],
        },
        {
          name: "get-prompts",
          description:
            "(Preview) Returns AI prompt records for DSR compliance export",
          options: [continuationTokenOption],
        },
        {
          name: "get-run-history-data",
          description:
            "(Preview) Returns run history customer data for a flow run",
          options: [
            flowIdOption,
            {
              name: "--run-id",
              description: "The run ID",
              isRequired: true,
              args: { name: "run-id" },
            },
            {
              name: "--continuation-token",
              description: "Base64-encoded continuation token for paging",
              args: { name: "continuation-token" },
            },
          ],
        },
        {
          name: "get-run-history-data-non-singleton",
          description:
            "(Preview) Returns run history data for a flow run in an environment",
          options: [
            flowIdOption,
            {
              name: "--run-id",
              description: "The run ID",
              isRequired: true,
              args: { name: "run-id" },
            },
            {
              name: "--continuation-token",
              description: "Base64-encoded continuation token for paging",
              args: { name: "continuation-token" },
            },
            environmentOption,
          ],
        },
      ],
    },
  ],
};

export default completionSpec;
