// Contentstack CLI (csdx) v2.0.2 (npm "latest" of @contentstack/cli, 2026-11-20). Source: oclif.manifest.json
// and compiled lib/ of the npm tarballs of @contentstack/cli 2.0.2 and every plugin it bundles (cli-auth, cli-config,
// cli-cm-import, cli-cm-export, cli-cm-seed, cli-cm-bootstrap, cli-cm-export-to-csv, cli-cm-clone, cli-migration,
// cli-cm-branches, cli-audit, cli-cm-import-setup 2.0.2; cli-bulk-operations 2.1.1) plus @oclif/plugin-plugins 5.5.2
// and @oclif/plugin-help 6.3.0, read statically (the binary was not run). Region names come from cli-config lib,
// bootstrap app names from cli-cm-bootstrap lib. No generator: `auth:tokens:list` prints token secrets.

// Flags shared by commands that render a table (oclif CLITable flags)
const tableOptions: Fig.Option[] = [
  {
    name: "--columns",
    description: "Columns to display, separated by comma",
    args: { name: "columns" },
  },
  {
    name: "--sort",
    description: "Sort the table by a column, prepend '-' for descending order",
    args: { name: "column" },
  },
  {
    name: "--filter",
    description: "Filter rows by a column value, for example name=foo",
    args: { name: "filter" },
  },
  { name: "--csv", description: "Output results in CSV format" },
  {
    name: "--no-truncate",
    description: "Prevent truncation of long text in columns",
  },
  { name: "--no-header", description: "Hide table headers in output" },
  {
    name: "--output",
    description: "Output format",
    args: { name: "format", suggestions: ["csv", "json", "yaml"] },
  },
];

const stackApiKey = (description: string): Fig.Option => ({
  name: ["-k", "--stack-api-key"],
  description,
  args: { name: "stack-api-key" },
});

const alias = (description: string): Fig.Option => ({
  name: ["-a", "--alias"],
  description,
  args: { name: "alias" },
});

const yes = (description: string): Fig.Option => ({
  name: ["-y", "--yes"],
  description,
});

const configFile = (description: string): Fig.Option => ({
  name: ["-c", "--config"],
  description,
  args: { name: "config", template: "filepaths" },
});

const dataDir = (description: string): Fig.Option => ({
  name: ["-d", "--data-dir"],
  description,
  args: { name: "data-dir", template: "folders" },
});

const branchOptions = (what: string): Fig.Option[] => [
  {
    name: "--branch",
    description: `Name of the branch ${what}`,
    args: { name: "branch" },
    exclusiveOn: ["--branch-alias"],
  },
  {
    name: "--branch-alias",
    description: `Alias of the branch ${what}`,
    args: { name: "branch-alias" },
    exclusiveOn: ["--branch"],
  },
];

const stackModules = [
  "stack",
  "assets",
  "locales",
  "environments",
  "extensions",
  "webhooks",
  "global-fields",
  "entries",
  "content-types",
  "custom-roles",
  "workflows",
  "publishing-rules",
  "labels",
  "marketplace-apps",
  "taxonomies",
  "personalize",
  "composable-studio",
];

const auditModules = [
  "content-types",
  "global-fields",
  "entries",
  "extensions",
  "workflows",
  "custom-roles",
  "assets",
  "field-rules",
  "composable-studio",
];

const auditOptions: Fig.Option[] = [
  configFile("Path of the external config"),
  dataDir("Path where the data is stored"),
  {
    name: "--show-console-output",
    description: "Display the audit result for individual modules",
  },
  {
    name: "--report-path",
    description: "Path to store the audit reports",
    args: { name: "report-path", template: "folders" },
  },
  {
    name: "--modules",
    description: "Modules to audit",
    isRepeatable: true,
    args: { name: "module", isVariadic: true, suggestions: auditModules },
  },
];

// Options common to cm:stacks:bulk-assets, bulk-entries and bulk-taxonomies
const bulkOptions: Fig.Option[] = [
  alias(
    "Name of a saved management token to authenticate the command, alternative to --stack-api-key"
  ),
  stackApiKey("API key of the source stack, use either this flag or --alias"),
  {
    name: "--environments",
    description: "Environments to publish to, separated by spaces",
    isRepeatable: true,
    args: { name: "environment", isVariadic: true },
  },
  {
    name: "--locales",
    description: "Locale codes to publish, separated by spaces",
    isRepeatable: true,
    args: { name: "locale", isVariadic: true },
  },
  {
    name: "--source-env",
    description: "Source environment for cross-publish",
    args: { name: "source-env" },
  },
  {
    name: "--source-alias",
    description:
      "Alias of the source environment delivery token, required for cross-publish (add it with auth:tokens:add)",
    args: { name: "source-alias" },
  },
  {
    name: "--publish-mode",
    description:
      "Publish mode: bulk uses the Bulk Publish API, single makes individual API calls",
    args: {
      name: "publish-mode",
      default: "bulk",
      suggestions: ["bulk", "single"],
    },
  },
  {
    name: "--branch",
    description: "Name of the branch to perform the operation on",
    args: { name: "branch", default: "main" },
  },
  configFile("Path of a JSON configuration file that defines the options"),
  yes("Skip interactive confirmation prompts"),
  {
    name: "--retry-failed",
    description:
      "Retry failed operations listed in a log file, overrides all other flags",
    args: { name: "log-file", template: "filepaths" },
  },
  {
    name: "--revert",
    description:
      "Revert operations using the success logs in a log folder, works like --retry-failed",
    args: { name: "log-folder", template: "folders" },
  },
  {
    name: "--bulk-operation-file",
    description:
      "Folder to store operation logs, with separate files for success and failure",
    args: {
      name: "folder",
      default: "bulk-operation",
      template: "folders",
    },
  },
];

const operationOption = (
  description: string,
  operations: string[]
): Fig.Option => ({
  name: "--operation",
  description,
  args: { name: "operation", suggestions: operations },
});

const regions: Fig.Suggestion[] = [
  { name: "AWS-NA", description: "AWS North America" },
  { name: "AWS-EU", description: "AWS Europe" },
  { name: "AWS-AU", description: "AWS Australia" },
  { name: "AZURE-NA", description: "Azure North America" },
  { name: "AZURE-EU", description: "Azure Europe" },
  { name: "GCP-NA", description: "GCP North America" },
  { name: "GCP-EU", description: "GCP Europe" },
  { name: "NA", description: "Alias of AWS-NA" },
  { name: "EU", description: "Alias of AWS-EU" },
  { name: "AU", description: "Alias of AWS-AU" },
];

const completionSpec: Fig.Spec = {
  name: "csdx",
  description: "Contentstack CLI",
  subcommands: [
    // auth
    {
      name: ["auth:login", "login"],
      description: "Log in to Contentstack and save the session",
      options: [
        {
          name: ["-u", "--username"],
          description: "Email address of your Contentstack account",
          args: { name: "email" },
          exclusiveOn: ["--oauth"],
        },
        {
          name: ["-p", "--password"],
          description: "Password of your Contentstack account",
          args: { name: "password" },
          exclusiveOn: ["--oauth"],
        },
        {
          name: "--oauth",
          description: "Log in with single sign-on (SSO) using OAuth",
          exclusiveOn: ["--username", "--password"],
        },
      ],
    },
    {
      name: ["auth:logout", "logout"],
      description: "Log out of Contentstack and clear the session",
      options: [yes("Skip the confirmation and force log out")],
    },
    {
      name: ["auth:whoami", "whoami"],
      description: "Display the email address of the logged-in user",
    },
    {
      name: "auth:tokens",
      description: "Manage authentication tokens for API access",
      options: tableOptions,
    },
    {
      name: "auth:tokens:add",
      description:
        "Add a management or delivery token to your session for use with other CLI commands",
      options: [
        alias("Alias (name) to assign to the token"),
        {
          name: "--delivery",
          description: "Save the token as a delivery token",
          exclusiveOn: ["--management"],
        },
        {
          name: "--management",
          description: "Save the token as a management token",
          exclusiveOn: ["--delivery", "--environment"],
        },
        {
          name: ["-e", "--environment"],
          description: "Environment name for a delivery token",
          args: { name: "environment" },
          exclusiveOn: ["--management"],
        },
        stackApiKey("API key of the stack"),
        yes("Skip the confirmation"),
        {
          name: "--token",
          description: "Value of the token",
          args: { name: "token" },
        },
      ],
    },
    {
      name: "auth:tokens:list",
      description: "List all tokens added to the session",
      options: tableOptions,
    },
    {
      name: "auth:tokens:remove",
      description: "Remove a selected token from the session",
      options: [alias("Alias (name) of the token to delete")],
    },

    // config
    {
      name: "config:get:base-branch",
      description: "Get the current branch set for the CLI",
    },
    {
      name: ["config:get:early-access-header", "config:get:ea-header"],
      description: "Display Early Access headers",
    },
    {
      name: "config:get:log",
      description: "Get the logging configuration of the CLI",
    },
    {
      name: "config:get:proxy",
      description: "Get the proxy configuration of the CLI",
    },
    {
      name: "config:get:rate-limit",
      description: "Get the rate limit of organizations",
    },
    {
      name: "config:get:region",
      description: "Get the current region set for the CLI",
    },
    {
      name: "config:set:base-branch",
      description: "Set the branch for the CLI",
      options: [
        stackApiKey("API key of the stack"),
        {
          name: "--base-branch",
          description: "Base branch (target branch)",
          args: { name: "base-branch" },
        },
      ],
    },
    {
      name: ["config:set:early-access-header", "config:set:ea-header"],
      description: "Set an Early Access header",
      options: [
        {
          name: "--header-alias",
          description: "Name (alias) for this Early Access header",
          args: { name: "header-alias" },
        },
        {
          name: "--header",
          description: "Early Access header value",
          args: { name: "header" },
        },
      ],
    },
    {
      name: "config:set:log",
      description: "Set the logging configuration of the CLI",
      options: [
        {
          name: "--level",
          description: "Log level of the CLI, defaults to info",
          args: {
            name: "level",
            suggestions: ["debug", "info", "warn", "error"],
          },
        },
        {
          name: "--path",
          description:
            "Directory where logs are saved, defaults to ~/.contentstack/logs",
          args: { name: "path", template: "folders" },
        },
        {
          name: "--show-console-logs",
          description: "Enable console logging",
          exclusiveOn: ["--no-show-console-logs"],
        },
        {
          name: "--no-show-console-logs",
          description: "Disable console logging",
          exclusiveOn: ["--show-console-logs"],
        },
      ],
    },
    {
      name: "config:set:proxy",
      description: "Set the proxy configuration of the CLI",
      options: [
        {
          name: "--host",
          description: "Proxy host address",
          args: { name: "host" },
          isRequired: true,
        },
        {
          name: "--port",
          description: "Proxy port number",
          args: { name: "port" },
          isRequired: true,
        },
        {
          name: "--protocol",
          description: "Proxy protocol",
          args: {
            name: "protocol",
            default: "http",
            suggestions: ["http", "https"],
          },
        },
        {
          name: "--username",
          description: "Proxy username",
          args: { name: "username" },
        },
      ],
    },
    {
      name: "config:set:rate-limit",
      description: "Set the rate limit of the CLI",
      options: [
        {
          name: "--org",
          description: "UID of the organization",
          args: { name: "org" },
        },
        {
          name: "--utilize",
          description:
            "Utilization percentages for the rate limit, separated by commas",
          args: { name: "utilize", default: "50" },
        },
        {
          name: "--limit-name",
          description:
            "Names of the limits, for example limit, getLimit, bulkLimit",
          isRepeatable: true,
          args: {
            name: "limit-name",
            isVariadic: true,
            suggestions: ["limit", "getLimit", "bulkLimit"],
          },
        },
        {
          name: "--default",
          description: "Reset to the default rate limit",
        },
      ],
    },
    {
      name: "config:set:region",
      description: "Set the region for the CLI",
      options: [
        {
          name: "--cda",
          description:
            "Custom host of the content delivery API, requires --cma, --ui-host and --name",
          args: { name: "cda" },
          dependsOn: ["--cma", "--ui-host", "--name"],
        },
        {
          name: "--cma",
          description:
            "Custom host of the content management API, requires --cda, --ui-host and --name",
          args: { name: "cma" },
          dependsOn: ["--cda", "--ui-host", "--name"],
        },
        {
          name: "--ui-host",
          description:
            "Custom UI host of the CLI, requires --cda, --cma and --name",
          args: { name: "ui-host" },
          dependsOn: ["--cda", "--cma", "--name"],
        },
        {
          name: "--name",
          description:
            "Name of the custom region, requires --cda, --cma and --ui-host",
          args: { name: "name" },
          dependsOn: ["--cda", "--cma", "--ui-host"],
        },
        {
          name: "--developer-hub",
          description: "Custom host of the Developer Hub API",
          args: { name: "developer-hub" },
        },
        {
          name: "--personalize",
          description: "Custom host of the Personalize API",
          args: { name: "personalize" },
        },
        {
          name: "--launch",
          description: "Custom host of the Launch API",
          args: { name: "launch" },
        },
        {
          name: "--studio",
          description: "Custom host of the Studio API",
          args: { name: "studio" },
        },
        {
          name: "--cs-assets",
          description: "Custom host of the Contentstack Assets API",
          args: { name: "cs-assets" },
        },
        {
          name: "--auth-api",
          description: "Custom host of the Auth API",
          args: { name: "auth-api" },
        },
      ],
      args: {
        name: "region",
        description: "Region to use",
        isOptional: true,
        suggestions: regions,
      },
    },
    {
      name: "config:remove:base-branch",
      description: "Remove the branch configuration of the CLI",
      options: [
        stackApiKey("API key of the stack"),
        yes("Force the removal without confirmation"),
      ],
    },
    {
      name: ["config:remove:early-access-header", "config:remove:ea-header"],
      description: "Remove an Early Access header",
      options: [
        {
          name: "--header-alias",
          description: "Alias name of the Early Access header",
          args: { name: "header-alias" },
        },
        yes("Skip the confirmation and force the removal"),
      ],
    },
    {
      name: "config:remove:proxy",
      description: "Remove the proxy configuration from the global config",
    },
    {
      name: "config:remove:rate-limit",
      description: "Remove the rate limit of an organization",
      options: [
        {
          name: "--org",
          description: "UID of the organization",
          args: { name: "org" },
        },
      ],
    },

    // cm
    {
      name: "cm:bootstrap",
      description: "Bootstrap Contentstack apps",
      options: [
        {
          name: "--app-name",
          description: "Name of the app to bootstrap",
          args: {
            name: "app-name",
            suggestions: [
              { name: "compass-app", description: "Compass App" },
              { name: "kickstart-next", description: "Kickstart Next.js" },
              {
                name: "kickstart-next-ssr",
                description: "Kickstart Next.js SSR",
              },
              {
                name: "kickstart-next-ssg",
                description: "Kickstart Next.js SSG",
              },
              {
                name: "kickstart-next-graphql",
                description: "Kickstart Next.js GraphQL",
              },
              {
                name: "kickstart-next-middleware",
                description: "Kickstart Next.js Middleware",
              },
              { name: "kickstart-nuxt", description: "Kickstart NuxtJS" },
              {
                name: "kickstart-nuxt-ssr",
                description: "Kickstart NuxtJS SSR",
              },
            ],
          },
        },
        {
          name: "--project-dir",
          description: "Directory to set up the project in",
          args: { name: "project-dir", template: "folders" },
        },
        {
          ...stackApiKey("API key of the stack to seed content into"),
          exclusiveOn: ["--org", "--stack-name"],
        },
        {
          name: "--org",
          description: "UID of the organization to create a new stack in",
          args: { name: "org" },
          exclusiveOn: ["--stack-api-key"],
        },
        {
          name: ["-n", "--stack-name"],
          description: "Name of the new stack to create",
          args: { name: "stack-name" },
          exclusiveOn: ["--stack-api-key"],
        },
        yes("Skip the stack confirmation"),
        {
          name: "--run-dev-server",
          description: "Start the development server after setup",
        },
        alias("Alias of the management token"),
      ],
    },
    {
      name: "cm:branches",
      description: "List the branches",
      options: [
        stackApiKey("API key of the stack"),
        {
          name: "--verbose",
          description: "Display information in detailed format",
        },
      ],
    },
    {
      name: "cm:branches:create",
      description: "Create a new branch",
      options: [
        {
          name: "--uid",
          description: "UID (unique name) of the branch to create",
          args: { name: "uid" },
        },
        {
          name: "--source",
          description: "Source branch to create the new branch from",
          args: { name: "source" },
        },
        stackApiKey("API key of the stack"),
      ],
    },
    {
      name: "cm:branches:delete",
      description: "Delete a branch",
      options: [
        {
          name: "--uid",
          description: "UID of the branch to delete",
          args: { name: "uid" },
        },
        stackApiKey("API key of the stack"),
        yes("Skip the confirmation and force the deletion"),
      ],
    },
    {
      name: "cm:branches:diff",
      description: "Show the differences between two branches",
      options: [
        {
          name: "--base-branch",
          description: "Base branch (target branch)",
          args: { name: "base-branch" },
        },
        {
          name: "--compare-branch",
          description: "Compare branch (source branch)",
          args: { name: "compare-branch" },
        },
        {
          name: "--module",
          description: "Module to compare",
          args: {
            name: "module",
            suggestions: ["content-types", "global-fields", "all"],
          },
        },
        stackApiKey("API key of the stack to show the branch differences for"),
        {
          name: "--format",
          description: "Format of the difference output",
          args: {
            name: "format",
            default: "compact-text",
            suggestions: ["compact-text", "detailed-text"],
          },
        },
        {
          name: "--csv-path",
          description:
            "Custom path of the CSV output file, defaults to the current working directory",
          args: { name: "csv-path", template: "filepaths" },
        },
      ],
    },
    {
      name: "cm:branches:merge",
      description: "Merge changes from a branch",
      options: [
        {
          name: "--compare-branch",
          description: "Compare branch (source branch)",
          args: { name: "compare-branch" },
        },
        {
          name: "--base-branch",
          description: "Base branch (target branch)",
          args: { name: "base-branch" },
        },
        {
          name: "--comment",
          description: "Comment for the merge",
          args: { name: "comment" },
        },
        stackApiKey("API key of the stack to merge the branches of"),
        {
          name: "--export-summary-path",
          description: "Path to export the merge summary file to",
          args: { name: "path", template: "filepaths" },
        },
        {
          name: "--use-merge-summary",
          description: "Path of the merge summary file to use",
          args: { name: "path", template: "filepaths" },
        },
        {
          name: "--no-revert",
          description: "Do not create the revert branch",
        },
        {
          name: "--strategy",
          description: "Merge strategy",
          hidden: true,
          args: {
            name: "strategy",
            suggestions: [
              "merge_prefer_base",
              "merge_prefer_compare",
              "overwrite_with_compare",
              "custom_preferences",
            ],
          },
        },
        {
          name: "--strategy-sub-options",
          description: "Merge strategy sub options",
          hidden: true,
          args: {
            name: "sub-option",
            suggestions: ["new", "modified", "both"],
          },
        },
        {
          name: "--merge-action",
          description: "Merge action",
          hidden: true,
          args: {
            name: "action",
            suggestions: ["export", "execute", "both"],
          },
        },
      ],
    },
    {
      name: "cm:branches:merge-status",
      description: "Check the status of a branch merge job",
      options: [
        {
          ...stackApiKey("API key of the stack"),
          isRequired: true,
        },
        {
          name: "--merge-uid",
          description: "UID of the merge job to check the status of",
          args: { name: "merge-uid" },
          isRequired: true,
        },
      ],
    },
    {
      name: "cm:export-to-csv",
      description:
        "Export entries, taxonomies, teams or organization users to CSV",
      options: [
        {
          name: "--action",
          description: "Kind of data to export",
          args: {
            name: "action",
            suggestions: ["entries", "users", "teams", "taxonomies"],
          },
        },
        alias("Alias of the management token"),
        {
          name: "--org",
          description: "UID of the organization to export users from",
          args: { name: "org" },
        },
        {
          name: ["-n", "--stack-name"],
          description: "Name of the stack, used as the CSV file name",
          args: { name: "stack-name" },
        },
        stackApiKey("API key of the source stack"),
        {
          name: "--org-name",
          description: "Name of the organization, used as the CSV file name",
          args: { name: "org-name" },
        },
        {
          name: "--locale",
          description: "Locale of the entries to export",
          args: { name: "locale" },
        },
        {
          name: "--content-type",
          description: "Content type of the entries to export",
          args: { name: "content-type" },
        },
        {
          name: "--branch",
          description: "Branch to export entries from",
          args: { name: "branch" },
        },
        {
          name: "--team-uid",
          description: "UID of a specific team in the organization",
          args: { name: "team-uid" },
        },
        {
          name: "--taxonomy-uid",
          description: "UID of the taxonomy whose terms you want to export",
          args: { name: "taxonomy-uid" },
        },
        {
          name: "--include-fallback",
          description:
            "Include fallback locale data when exporting taxonomies, using the hierarchy defined in the branch settings",
        },
        {
          name: "--fallback-locale",
          description:
            "Fallback locale for the taxonomy export, takes priority over the branch fallback hierarchy",
          args: { name: "fallback-locale" },
        },
        {
          name: "--delimiter",
          description: "Delimiter that separates data fields in the CSV file",
          args: { name: "delimiter", default: "," },
        },
      ],
    },
    {
      name: "cm:stacks:audit",
      description:
        "Perform audits and find possible errors in the exported Contentstack data",
      options: [...auditOptions, ...tableOptions],
    },
    {
      name: "cm:stacks:audit:fix",
      description:
        "Perform audits and fix possible errors in the exported Contentstack data",
      options: [
        ...auditOptions,
        {
          name: "--copy-dir",
          description: "Create a backup of the original data",
        },
        {
          name: "--copy-path",
          description: "Path to store the backup of the copied data",
          args: { name: "copy-path", template: "folders" },
          dependsOn: ["--copy-dir"],
        },
        {
          name: "--fix-only",
          description: "Fix options to apply",
          isRepeatable: true,
          args: {
            name: "fix-option",
            isVariadic: true,
            suggestions: [
              "reference",
              "global_field",
              "json:rte",
              "json:extension",
              "blocks",
              "group",
              "content_types",
            ],
          },
        },
        {
          ...yes("Skip the confirmation"),
          hidden: true,
        },
        {
          name: "--external-config",
          description: "External config as JSON input",
          hidden: true,
          args: { name: "external-config" },
        },
        ...tableOptions,
      ],
    },
    {
      name: "cm:stacks:bulk-assets",
      description:
        "Bulk publish, unpublish or cross-publish assets, and delete or move assets in CS Assets",
      options: [
        ...bulkOptions,
        operationOption(
          "Operation to perform: publish or unpublish (CMS, needs a stack API key or alias), delete or move (CS Assets, needs OAuth or a token with --space-uid and --org-uid)",
          ["publish", "unpublish", "delete", "move"]
        ),
        {
          name: "--folder-uid",
          description:
            "UID of the assets folder to publish assets from, defaults to cs_root",
          args: { name: "folder-uid" },
        },
        {
          name: "--backup-dir",
          description:
            "Path to the import backup directory, to publish each imported asset only to the environments and locales it was published to in the source stack",
          args: { name: "backup-dir", template: "folders" },
          exclusiveOn: [
            "--source-env",
            "--folder-uid",
            "--environments",
            "--locales",
          ],
        },
        {
          name: "--dry-run",
          description: "Preview the publish plan without making any API calls",
        },
        {
          name: "--space-uid",
          description: "CS Assets space UID",
          args: { name: "space-uid" },
        },
        {
          name: "--org-uid",
          description: "Organization UID for the CS Assets API",
          args: { name: "org-uid" },
        },
        {
          name: "--workspace",
          description: "CS Assets workspace",
          args: { name: "workspace", default: "main" },
        },
        {
          name: "--asset-uids-file",
          description:
            'Path to a JSON file of the form { "uids": ["uid1", "uid2"] } listing the asset UIDs',
          args: { name: "asset-uids-file", template: "filepaths" },
        },
        {
          name: "--locale",
          description:
            "Locale code for bulk delete only, a single locale per run",
          args: { name: "locale" },
        },
        {
          name: "--target-folder-uid",
          description:
            'Destination CS Assets folder UID for bulk move, use "root" for the root folder',
          args: { name: "target-folder-uid" },
        },
      ],
    },
    {
      name: "cm:stacks:bulk-entries",
      description: "Bulk publish, unpublish or cross-publish entries",
      options: [
        ...bulkOptions,
        operationOption("Whether to publish or unpublish content", [
          "publish",
          "unpublish",
        ]),
        {
          name: "--content-types",
          description:
            "UIDs of the content types to operate on, defaults to all content types",
          isRepeatable: true,
          args: { name: "content-type", isVariadic: true },
        },
        {
          name: "--filter",
          description: "Filter entries by status",
          args: {
            name: "status",
            suggestions: ["draft", "modified", "non-localized", "unpublished"],
          },
        },
        {
          name: "--include-variants",
          description:
            "Include entry variants in the operation, by default only base entries are processed",
        },
      ],
    },
    {
      name: "cm:stacks:bulk-taxonomies",
      description: "Publish taxonomies to environments and locales",
      options: [
        ...bulkOptions,
        operationOption("Whether to publish or unpublish content", [
          "publish",
          "unpublish",
        ]),
        {
          name: "--taxonomies",
          description:
            "Taxonomy UIDs to include, separated by commas, defaults to all taxonomies in the stack (for example products_tax,brands_tax)",
          args: { name: "taxonomies" },
        },
      ],
    },
    {
      name: ["cm:stacks:clone", "cm:stack-clone"],
      description:
        "Clone the structure and optionally the content of a stack into another stack",
      options: [
        {
          name: "--source-branch",
          description: "Branch of the source stack",
          args: { name: "source-branch" },
          exclusiveOn: ["--source-branch-alias"],
        },
        {
          name: "--source-branch-alias",
          description: "Alias of the branch of the source stack",
          args: { name: "source-branch-alias" },
          exclusiveOn: ["--source-branch"],
        },
        {
          name: "--target-branch",
          description: "Branch of the target stack",
          args: { name: "target-branch" },
          exclusiveOn: ["--target-branch-alias"],
        },
        {
          name: "--target-branch-alias",
          description: "Alias of the branch of the target stack",
          args: { name: "target-branch-alias" },
          exclusiveOn: ["--target-branch"],
        },
        {
          name: "--source-management-token-alias",
          description: "Source management token alias",
          args: { name: "alias" },
        },
        {
          name: "--destination-management-token-alias",
          description: "Destination management token alias",
          args: { name: "alias" },
        },
        {
          name: ["-n", "--stack-name"],
          description: "Name of the new stack that stores the cloned content",
          args: { name: "stack-name" },
        },
        {
          name: "--type",
          description: "Type of data to clone",
          args: {
            name: "type",
            suggestions: [
              {
                name: "a",
                description:
                  "Structure (all modules except entries and assets)",
              },
              {
                name: "b",
                description:
                  "Structure with content (all modules including entries and assets)",
              },
            ],
          },
        },
        {
          name: "--source-stack-api-key",
          description: "API key of the source stack",
          args: { name: "source-stack-api-key" },
        },
        {
          name: "--destination-stack-api-key",
          description: "API key of the destination stack",
          args: { name: "destination-stack-api-key" },
        },
        {
          name: "--import-webhook-status",
          description: "State the imported webhooks are set to",
          args: {
            name: "status",
            default: "disable",
            suggestions: ["disable", "current"],
          },
        },
        yes("Force override all Marketplace prompts"),
        {
          name: "--skip-audit",
          description: "Skip the audit fix that occurs during the import",
        },
        configFile("Path of the external configuration"),
      ],
    },
    {
      name: "cm:stacks:export",
      description: "Export content from a stack",
      options: [
        configFile("Path of the config file"),
        stackApiKey("API key of the source stack"),
        dataDir(
          "Path in your file system to store the exported content, for example ./content"
        ),
        alias(
          "Management token alias of the source stack to export content from"
        ),
        {
          name: "--module",
          description:
            "Module to export, if not specified all modules of the stack are exported",
          args: { name: "module", suggestions: stackModules },
        },
        {
          name: "--content-types",
          description:
            "UIDs of the content types whose content you want to export",
          isRepeatable: true,
          args: { name: "content-type", isVariadic: true },
        },
        ...branchOptions(
          "to export content from, if not specified content is exported from all branches of the stack"
        ),
        {
          name: "--secured-assets",
          description: "Use for assets that are secured",
        },
        yes("Force override all Marketplace prompts"),
        {
          name: "--query",
          description:
            "Query object (inline JSON or file path) to filter module exports",
          hidden: true,
          args: { name: "query" },
        },
      ],
    },
    {
      name: "cm:stacks:import",
      description: "Import content into a stack",
      options: [
        configFile(
          "Path of the configuration JSON file containing the options for a single run"
        ),
        stackApiKey("API key of the target stack"),
        dataDir(
          "Path in your file system where the content to import is stored, for a branch export point it to the branch folder"
        ),
        alias(
          "Management token alias of the destination stack to import content into"
        ),
        {
          name: "--module",
          description:
            "Module to import, if not specified all modules are imported",
          args: {
            name: "module",
            suggestions: [
              ...stackModules.slice(0, -1),
              "variant-entries",
              "composable-studio",
            ],
          },
        },
        {
          name: "--backup-dir",
          description: "Backup directory name when importing a specific module",
          args: { name: "backup-dir", template: "folders" },
        },
        ...branchOptions(
          "to import content into, if not specified content is imported into the main branch"
        ),
        {
          name: "--import-webhook-status",
          description:
            "State the imported webhooks are set to, current keeps the state of the source stack",
          args: {
            name: "status",
            default: "disable",
            suggestions: ["disable", "current"],
          },
        },
        yes("Force override all Marketplace prompts"),
        {
          name: "--replace-existing",
          description: "Replace the existing module in the target stack",
        },
        {
          name: "--skip-existing",
          description: "Skip the warning messages about existing modules",
        },
        {
          name: "--personalize-project-name",
          description: "Unique name for the Personalize project",
          args: { name: "project-name" },
        },
        {
          name: "--skip-audit",
          description: "Skip the audit fix that occurs during the import",
        },
        {
          name: "--exclude-global-modules",
          description: "Exclude the branch-independent modules from the import",
        },
        {
          name: "--skip-assets-publish",
          description: "Skip asset publishing during the import",
        },
        {
          name: "--skip-entries-publish",
          description: "Skip entry publishing during the import",
        },
        {
          name: "--skip-taxonomy-publish",
          description: "Skip taxonomy publishing during the import",
        },
      ],
    },
    {
      name: "cm:stacks:import-setup",
      description:
        "Generate mappers and a backup folder for importing (overwriting) specific modules",
      options: [
        stackApiKey("API key of the target stack"),
        dataDir(
          "Path in your file system where the content to import is stored, for a branch export point it to the branch folder"
        ),
        alias(
          "Management token alias of the destination stack to import content into"
        ),
        {
          name: "--module",
          description: "Modules to set up the import for",
          isRepeatable: true,
          args: {
            name: "module",
            isVariadic: true,
            suggestions: ["global-fields", "content-types", "entries"],
          },
        },
        ...branchOptions(
          "to import content into, if not specified content is imported into the main branch"
        ),
      ],
    },
    {
      name: "cm:stacks:migration",
      description: "Run a Contentstack migration script",
      options: [
        {
          ...stackApiKey(
            "API key of your stack, use either this flag or --alias"
          ),
          exclusiveOn: ["--alias"],
        },
        alias(
          "Management token alias, use either this flag or --stack-api-key"
        ),
        {
          name: "--file-path",
          description: "Path of the migration script file",
          args: { name: "file-path", template: "filepaths" },
        },
        {
          name: "--branch",
          description: "Name of the target branch to perform the migration on",
          args: { name: "branch" },
        },
        configFile("Path of the JSON configuration file"),
        {
          name: "--inline-config",
          description:
            "Inline configuration as <key1>:<value1>, which makes the script reusable",
          isRepeatable: true,
          args: { name: "inline-config", isVariadic: true },
        },
        {
          name: "--multiple",
          description:
            "Migrate multiple files in one run, give the folder that holds the migration scripts as the file path",
        },
      ],
    },
    {
      name: "cm:stacks:seed",
      description:
        "Create a stack from existing content types, entries, assets and more",
      options: [
        {
          name: "--repo",
          description:
            "GitHub organization name or GitHub user name/repository name",
          args: { name: "repo" },
        },
        {
          name: "--org",
          description: "UID of the organization to create a new stack in",
          args: { name: "org" },
          exclusiveOn: ["--stack-api-key"],
        },
        {
          ...stackApiKey("API key of the stack to seed content into"),
          exclusiveOn: ["--org", "--stack-name"],
        },
        {
          name: ["-n", "--stack-name"],
          description: "Name of the new stack to create",
          args: { name: "stack-name" },
          exclusiveOn: ["--stack-api-key"],
        },
        yes("Skip the stack confirmation"),
        alias("Alias of the management token"),
        {
          name: "--locale",
          description: "Master locale for the stack creation",
          hidden: true,
          args: { name: "locale" },
        },
      ],
    },

    // oclif help and plugin management
    {
      name: "help",
      description: "Display help for csdx",
      options: [
        {
          name: ["-n", "--nested-commands"],
          description: "Include all nested commands in the output",
        },
      ],
      args: {
        name: "command",
        description: "Command to show help for",
        isOptional: true,
      },
    },
    {
      name: "plugins",
      description: "List installed plugins",
      options: [
        { name: "--json", description: "Format output as JSON" },
        { name: "--core", description: "Show core plugins" },
      ],
    },
    {
      name: "plugins:inspect",
      description: "Display installation properties of a plugin",
      options: [
        { name: "--json", description: "Format output as JSON" },
        { name: ["-v", "--verbose"], description: "Show verbose output" },
      ],
      args: {
        name: "plugin",
        description: "Plugin to inspect",
        default: ".",
        isVariadic: true,
      },
    },
    {
      name: ["plugins:install", "plugins:add"],
      description: "Install a plugin into csdx",
      options: [
        { name: "--json", description: "Format output as JSON" },
        {
          name: ["-f", "--force"],
          description:
            "Force npm to fetch remote resources even if a local copy exists on disk",
        },
        { name: ["-s", "--silent"], description: "Silence npm output" },
        { name: ["-v", "--verbose"], description: "Show verbose npm output" },
      ],
      args: {
        name: "plugin",
        description: "Plugin to install",
        isVariadic: true,
      },
    },
    {
      name: "plugins:link",
      description: "Link a plugin into the CLI for development",
      options: [
        {
          name: "--install",
          description: "Install dependencies after linking the plugin",
        },
        { name: ["-v", "--verbose"], description: "Show verbose output" },
      ],
      args: {
        name: "path",
        description: "Path of the plugin",
        default: ".",
        template: "folders",
      },
    },
    {
      name: "plugins:reset",
      description: "Remove all user-installed and linked plugins",
      options: [
        {
          name: "--hard",
          description:
            "Delete node_modules and package manager files in addition to uninstalling plugins",
        },
        {
          name: "--reinstall",
          description: "Reinstall all plugins after uninstalling",
        },
      ],
    },
    {
      name: ["plugins:uninstall", "plugins:unlink", "plugins:remove"],
      description: "Remove a plugin from the CLI",
      options: [
        { name: ["-v", "--verbose"], description: "Show verbose output" },
      ],
      args: {
        name: "plugin",
        description: "Plugin to uninstall",
        isVariadic: true,
      },
    },
    {
      name: "plugins:update",
      description: "Update installed plugins",
      options: [
        { name: ["-v", "--verbose"], description: "Show verbose output" },
      ],
    },
  ],
  options: [
    {
      name: ["-h", "--help"],
      description: "Show help for csdx",
      isPersistent: true,
    },
    {
      name: ["-v", "--version"],
      description: "Show the CLI version",
    },
  ],
};

export default completionSpec;
