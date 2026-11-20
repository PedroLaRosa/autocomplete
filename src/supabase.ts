// Supabase CLI v3.2.0 (npm "latest" and GitHub tag v3.2.0, 2026-11-20). Source: read statically, nothing was executed.
// Visible commands and flags come from the clispec reference supabase/supabase apps/docs/spec/cli_v1_commands.yaml,
// which the CLI generates from its own command tree (version 3.2.0). Hidden, deprecated and unlisted flags and
// commands, enum values and mutually exclusive flag groups were read from apps/cli/src at tag v3.2.0.
// Commands that need --experimental (storage, network-bans, ...) are listed normally; --experimental is a global flag.
// Left out: the feature-flagged experimental `stack` and `compute` command families, commands and flags that only
// print a removal notice, and projects create --release-channel/--postgres-engine (values come from the API schema).

const regions = [
  "ap-east-1",
  "ap-northeast-1",
  "ap-northeast-2",
  "ap-south-1",
  "ap-southeast-1",
  "ap-southeast-2",
  "ca-central-1",
  "eu-central-1",
  "eu-central-2",
  "eu-north-1",
  "eu-west-1",
  "eu-west-2",
  "eu-west-3",
  "sa-east-1",
  "us-east-1",
  "us-east-2",
  "us-west-1",
  "us-west-2",
];

const instanceSizes = [
  "large",
  "medium",
  "micro",
  "12xlarge",
  "16xlarge",
  "24xlarge",
  "24xlarge_high_memory",
  "24xlarge_optimized_cpu",
  "24xlarge_optimized_memory",
  "2xlarge",
  "48xlarge",
  "48xlarge_high_memory",
  "48xlarge_optimized_cpu",
  "48xlarge_optimized_memory",
  "4xlarge",
  "8xlarge",
  "small",
  "xlarge",
];

const remoteDbOption: Fig.Option = {
  name: "--remote",
  description:
    "Target a remote database: the linked project, or --remote=<ref|branch|url>",
  requiresSeparator: true,
  args: { name: "ref|branch|url", isOptional: true },
};

const remoteProjectOption: Fig.Option = {
  name: "--remote",
  description:
    "Target another project: --remote=<ref|branch>. Defaults to the linked project",
  requiresSeparator: true,
  args: { name: "ref|branch", isOptional: true },
};

const remoteParentProjectOption: Fig.Option = {
  name: "--remote",
  description:
    "Target another project: --remote=<ref>. Defaults to the linked project",
  requiresSeparator: true,
  args: { name: "ref", isOptional: true },
};

const remoteStorageOption: Fig.Option = {
  name: "--remote",
  description:
    "Target a remote Storage API: the linked project, or --remote=<ref|branch>",
  requiresSeparator: true,
  args: { name: "ref|branch", isOptional: true },
};

const remoteLogsOption: Fig.Option = {
  name: "--remote",
  description:
    "Target a remote log source: the linked project, or --remote=<ref|branch>",
  requiresSeparator: true,
  args: { name: "ref|branch", isOptional: true },
};

const deprecatedLocalOption: Fig.Option = {
  name: "--local",
  description:
    "Deprecated, removed in v4: local is the default, so --local is not needed",
  hidden: true,
  deprecated: true,
};

const deprecatedLinkedOption: Fig.Option = {
  name: "--linked",
  description: "Deprecated, removed in v4: use --remote",
  hidden: true,
  deprecated: true,
};

const deprecatedDbUrlOption: Fig.Option = {
  name: "--db-url",
  description: "Deprecated, removed in v4: use --remote=<db-url>",
  hidden: true,
  deprecated: true,
  args: { name: "db-url" },
};

const deprecatedProjectRefOption: Fig.Option = {
  name: "--project-ref",
  description: "Deprecated, removed in v4: use --remote=<ref>",
  hidden: true,
  deprecated: true,
  args: { name: "project-ref" },
};

const dbTargetOptions: Fig.Option[] = [
  remoteDbOption,
  deprecatedLocalOption,
  deprecatedLinkedOption,
  deprecatedDbUrlOption,
  deprecatedProjectRefOption,
];

const projectTargetOptions: Fig.Option[] = [
  remoteProjectOption,
  deprecatedProjectRefOption,
];

const parentProjectTargetOptions: Fig.Option[] = [
  remoteParentProjectOption,
  deprecatedProjectRefOption,
];

const storageTargetOptions: Fig.Option[] = [
  remoteStorageOption,
  deprecatedLocalOption,
  deprecatedLinkedOption,
  deprecatedProjectRefOption,
];

const logTargetOptions: Fig.Option[] = [
  remoteLogsOption,
  deprecatedLocalOption,
  deprecatedLinkedOption,
  deprecatedProjectRefOption,
];

const noDescriptionsOption: Fig.Option = {
  name: "--no-descriptions",
  description: "Disable completion descriptions",
};

const schemaOption: Fig.Option = {
  name: ["--schema", "-s"],
  description: "Comma separated list of schema to include",
  isRepeatable: true,
  args: { name: "schema" },
};

const strictCoverageOption: Fig.Option = {
  name: "--strict-coverage",
  description:
    "Fail when bundled pg-delta finds schema objects it cannot manage instead of leaving them unmanaged",
};

const passwordOption: Fig.Option = {
  name: ["--password", "-p"],
  description: "Database password for the project selected with --remote",
  args: { name: "password" },
};

const additionalContextOption: Fig.Option = {
  name: "--additional-context",
  description: "Extra context to prefill on the issue form",
  args: { name: "additional-context" },
};

const noBrowserOption: Fig.Option = {
  name: "--no-browser",
  description: "Print the issue form URL without opening a browser",
};

const subcommands: Fig.Subcommand[] = [
  {
    name: "backups",
    description: "Manage Supabase physical backups",
    subcommands: [
      {
        name: "list",
        description: "Lists available physical backups",
        options: projectTargetOptions,
      },
      {
        name: "restore",
        description: "Restore to a specific timestamp using PITR",
        options: [
          {
            name: ["--timestamp", "-t"],
            description: "The recovery time target in seconds since epoch",
            args: { name: "timestamp" },
          },
          ...projectTargetOptions,
        ],
      },
    ],
  },
  {
    name: "bootstrap",
    description: "Bootstrap a Supabase project from a starter template",
    args: { name: "template", isOptional: true },
    options: [
      {
        name: ["--password", "-p"],
        description: "Password to your remote Postgres database",
        args: { name: "password" },
      },
    ],
  },
  {
    name: "branches",
    description: "Manage preview branches",
    subcommands: [
      {
        name: "create",
        description: "Create a preview branch",
        args: { name: "name", isOptional: true },
        options: [
          {
            name: "--git-branch",
            description: "Associate a git branch with the new preview branch",
            args: { name: "git-branch" },
          },
          {
            name: "--notify-url",
            description: "URL to notify when branch is active healthy",
            args: { name: "notify-url" },
          },
          {
            name: "--persistent",
            description: "Whether to create a persistent branch",
          },
          {
            name: "--region",
            description: "Select a region to deploy the branch database",
            args: { name: "region", suggestions: regions },
          },
          {
            name: "--size",
            description:
              "Select a desired instance size for the branch database",
            args: { name: "size", suggestions: instanceSizes },
          },
          {
            name: "--with-data",
            description:
              "Whether to clone production data to the branch database",
          },
          ...parentProjectTargetOptions,
        ],
      },
      {
        name: "delete",
        description: "Delete a preview branch",
        args: { name: "name", isOptional: true },
        options: parentProjectTargetOptions,
      },
      {
        name: "disable",
        description: "Disable preview branching",
        hidden: true,
        options: parentProjectTargetOptions,
      },
      {
        name: "get",
        description: "Retrieve details of a preview branch",
        args: { name: "name", isOptional: true },
        options: parentProjectTargetOptions,
      },
      {
        name: "list",
        description: "List all preview branches",
        options: parentProjectTargetOptions,
      },
      {
        name: "pause",
        description: "Pause a preview branch",
        args: { name: "name", isOptional: true },
        options: parentProjectTargetOptions,
      },
      {
        name: "unpause",
        description: "Unpause a preview branch",
        args: { name: "name", isOptional: true },
        options: parentProjectTargetOptions,
      },
      {
        name: "update",
        description: "Update a preview branch",
        args: { name: "name", isOptional: true },
        options: [
          {
            name: "--git-branch",
            description: "Change the associated git branch",
            args: { name: "git-branch" },
          },
          {
            name: "--name",
            description: "Rename the preview branch",
            args: { name: "name" },
          },
          {
            name: "--notify-url",
            description: "URL to notify when branch is active healthy",
            args: { name: "notify-url" },
          },
          {
            name: "--persistent",
            description: "Switch between ephemeral and persistent branch",
          },
          {
            name: "--status",
            description: "Override the current branch status",
            args: {
              name: "status",
              suggestions: [
                "RUNNING_MIGRATIONS",
                "MIGRATIONS_PASSED",
                "MIGRATIONS_FAILED",
                "FUNCTIONS_DEPLOYED",
                "FUNCTIONS_FAILED",
              ],
            },
          },
          ...parentProjectTargetOptions,
        ],
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
        options: [noDescriptionsOption],
      },
      {
        name: "fish",
        description: "Generate the autocompletion script for fish",
        options: [noDescriptionsOption],
      },
      {
        name: "powershell",
        description: "Generate the autocompletion script for powershell",
        options: [noDescriptionsOption],
      },
      {
        name: "zsh",
        description: "Generate the autocompletion script for zsh",
        options: [noDescriptionsOption],
      },
    ],
  },
  {
    name: "config",
    description: "Manage project configurations",
    subcommands: [
      {
        name: "convert",
        description: "Convert config.toml to config.jsonc",
        options: [
          {
            name: "--dry-run",
            description:
              "Print the converted config.jsonc to stdout without writing any file",
          },
        ],
      },
      {
        name: "diff",
        description: "Diff local config against a remote project",
        options: [
          {
            name: "--exit-code",
            description:
              "Exit with status 2 when any difference is found (errors keep exiting 1)",
          },
          ...projectTargetOptions,
        ],
      },
      {
        name: "pull",
        description: "Pull remote config into the project config file",
        options: [
          {
            name: "--dry-run",
            description:
              "Show what would be written without touching the config file",
          },
          {
            name: "--force",
            description:
              "Write even when the project config file has uncommitted changes in git",
          },
          {
            name: "--remote-label",
            description:
              "Name of the [remotes.*] block to write into, overriding the block config pull would otherwise reuse or create",
            args: { name: "remote-label" },
          },
          ...projectTargetOptions,
        ],
      },
      {
        name: "push",
        description: "Push local config to linked project",
        options: projectTargetOptions,
      },
      {
        name: "validate",
        description: "Validate the project config file",
        options: [
          {
            name: "--resolve-env",
            description:
              "Read the shell and .env files, and check the values env() references supply",
          },
        ],
      },
    ],
  },
  {
    name: "db",
    description: "Manage databases",
    subcommands: [
      {
        name: "advisors",
        description: "Checks database for security and performance issues",
        options: [
          {
            name: "--fail-on",
            description:
              "Issue level to exit with non-zero status: none, info, warn, error",
            args: {
              name: "fail-on",
              suggestions: ["none", "info", "warn", "error"],
              default: "none",
            },
          },
          {
            name: "--level",
            description: "Minimum issue level to display: info, warn, error",
            args: {
              name: "level",
              suggestions: ["info", "warn", "error"],
              default: "warn",
            },
          },
          {
            name: "--type",
            description:
              "Type of advisors to check: all, security, performance",
            args: {
              name: "type",
              suggestions: ["all", "security", "performance"],
              default: "all",
            },
          },
          ...dbTargetOptions,
        ],
      },
      {
        name: "diff",
        description: "Diffs a database for schema changes",
        options: [
          {
            name: ["--file", "-f"],
            description:
              "In normal mode, names and saves the complete schema diff as a new migration; it does not filter objects",
            args: { name: "file" },
          },
          {
            name: "--from",
            description:
              "Diff from local, migrations, remote (always the linked project), a project ref, a branch, or a Postgres URL",
            args: {
              name: "from",
              suggestions: ["local", "migrations", "remote"],
            },
          },
          {
            name: ["--output", "-o"],
            description:
              "Write flattened explicit diff SQL to a file for review; this is not a portable apply script",
            args: { name: "output", template: "filepaths" },
          },
          schemaOption,
          strictCoverageOption,
          {
            name: "--to",
            description:
              "Diff to local, migrations, remote (always the linked project), a project ref, a branch, or a Postgres URL",
            args: {
              name: "to",
              suggestions: ["local", "migrations", "remote"],
            },
          },
          {
            name: "--use-migra",
            description: "Use migra to generate schema diff",
            exclusiveOn: ["--use-pgadmin", "--use-pg-delta"],
          },
          {
            name: "--use-pg-delta",
            description: "Use pg-delta to generate schema diff",
            exclusiveOn: ["--use-migra", "--use-pgadmin"],
          },
          {
            name: "--use-pgadmin",
            description: "Use pgAdmin to generate schema diff",
            exclusiveOn: ["--use-migra", "--use-pg-delta"],
          },
          ...dbTargetOptions,
        ],
      },
      {
        name: "dump",
        description: "Dumps data or schemas from a database",
        options: [
          {
            name: "--data-only",
            description: "Dumps only data records",
            exclusiveOn: ["--keep-comments", "--role-only"],
          },
          {
            name: "--dry-run",
            description: "Prints the pg_dump script that would be executed",
          },
          {
            name: ["--exclude", "-x"],
            description: "List of schema.tables to exclude from data-only dump",
            isRepeatable: true,
            args: { name: "exclude" },
          },
          {
            name: ["--file", "-f"],
            description: "File path to save the dumped contents",
            args: { name: "file", template: "filepaths" },
          },
          {
            name: "--keep-comments",
            description: "Keeps commented lines from pg_dump output",
            exclusiveOn: ["--data-only"],
          },
          passwordOption,
          {
            name: "--role-only",
            description: "Dumps only cluster roles",
            exclusiveOn: ["--data-only", "--schema"],
          },
          {
            name: ["--schema", "-s"],
            description: "Comma separated list of schema to include",
            isRepeatable: true,
            exclusiveOn: ["--role-only"],
            args: { name: "schema" },
          },
          {
            name: "--use-copy",
            description: "Use copy statements in place of inserts",
          },
          ...dbTargetOptions,
        ],
      },
      {
        name: "lint",
        description: "Checks a database for typing error",
        options: [
          {
            name: "--fail-on",
            description: "Error level to exit with non-zero status",
            args: {
              name: "fail-on",
              suggestions: ["none", "warning", "error"],
              default: "none",
            },
          },
          {
            name: "--level",
            description: "Error level to emit",
            args: {
              name: "level",
              suggestions: ["warning", "error"],
              default: "warning",
            },
          },
          schemaOption,
          ...dbTargetOptions,
        ],
      },
      {
        name: "pull",
        description: "Pull schema from a database",
        args: { name: "migration name", isOptional: true },
        options: [
          {
            name: "--declarative",
            description:
              "Replace the declarative schema tree from the selected database instead of creating a migration",
            exclusiveOn: ["--diff-engine"],
          },
          {
            name: "--diff-engine",
            description: "Diff engine to use for migration-style db pull",
            exclusiveOn: ["--declarative"],
            args: {
              name: "diff-engine",
              suggestions: ["migra", "pg-delta"],
              default: "pg-delta",
            },
          },
          passwordOption,
          schemaOption,
          strictCoverageOption,
          ...dbTargetOptions,
        ],
      },
      {
        name: "push",
        description: "Push new migrations to a database",
        options: [
          {
            name: "--dry-run",
            description:
              "Print the migrations that would be applied, but don't actually apply them",
          },
          {
            name: "--include-all",
            description:
              "Include all migrations not found in the migration history table",
          },
          {
            name: "--include-roles",
            description: "Include custom roles from supabase/roles.sql",
          },
          {
            name: "--include-seed",
            description: "Include seed data from your config",
          },
          passwordOption,
          {
            name: "--skip-vault",
            description: "Skip updating vault secrets from the config file",
          },
          ...dbTargetOptions,
        ],
      },
      {
        name: "query",
        description: "Execute a SQL query against the database",
        args: { name: "sql", isOptional: true },
        options: [
          {
            name: ["--file", "-f"],
            description: "Path to a SQL file to execute",
            args: { name: "file", template: "filepaths" },
          },
          {
            name: ["--output", "-o"],
            description: "Output format: table, json, or csv",
            args: {
              name: "output",
              suggestions: ["json", "table", "csv"],
              default: "json",
            },
          },
          {
            name: "--read-only",
            description:
              "Runs the statement in a read-only transaction; a hosted target needs no confirmation",
          },
          ...dbTargetOptions,
        ],
      },
      {
        name: "reset",
        description: "Resets a database to current migrations",
        options: [
          {
            name: "--last",
            description: "Reset up to the last n migration versions",
            exclusiveOn: ["--version"],
            args: { name: "last" },
          },
          {
            name: "--no-seed",
            description: "Skip running the seed script after reset",
            exclusiveOn: ["--sql-paths"],
          },
          {
            name: "--sql-paths",
            description: "Override db.seed.sql_paths for this reset",
            isRepeatable: true,
            exclusiveOn: ["--no-seed"],
            args: { name: "sql-paths" },
          },
          {
            name: "--version",
            description: "Reset up to the specified version",
            exclusiveOn: ["--last"],
            args: { name: "version" },
          },
          ...dbTargetOptions,
        ],
      },
      {
        name: "schema",
        description: "Manage database schema",
        subcommands: [
          {
            name: "declarative",
            description: "Manage declarative database schemas",
            subcommands: [
              {
                name: "generate",
                description: "Generate declarative schema from a database",
                options: [
                  {
                    name: "--output-dir",
                    description:
                      "Write the generated declarative schema to this directory without changing the configured declarative schema path",
                    args: { name: "output-dir", template: "folders" },
                  },
                  {
                    name: "--overwrite",
                    description:
                      "Overwrite declarative schema files without confirmation",
                  },
                  passwordOption,
                  {
                    name: "--reset",
                    description:
                      "Reset local database before generating (local data will be lost)",
                  },
                  schemaOption,
                  {
                    name: "--no-cache",
                    description:
                      "Disable catalog cache and force fresh shadow database setup",
                  },
                  strictCoverageOption,
                  ...dbTargetOptions,
                ],
              },
              {
                name: "sync",
                description: "Generate a new migration from declarative schema",
                options: [
                  {
                    name: "--apply",
                    description:
                      "Apply the generated migration to the local database without prompting",
                    exclusiveOn: ["--no-apply"],
                  },
                  {
                    name: ["--file", "-f"],
                    description: "Saves schema diff to a new migration file",
                    args: { name: "file", default: "declarative_sync" },
                  },
                  {
                    name: "--name",
                    description: "Name for the generated migration file",
                    args: { name: "name" },
                  },
                  {
                    name: "--no-apply",
                    description:
                      "Generate the migration file without prompting or applying it to the local database",
                    exclusiveOn: ["--apply"],
                  },
                  schemaOption,
                  {
                    name: "--no-cache",
                    description:
                      "Disable catalog cache and force fresh shadow database setup",
                  },
                  strictCoverageOption,
                ],
              },
            ],
          },
        ],
      },
      {
        name: "start",
        description: "Starts local Postgres database",
        options: [
          {
            name: "--from-backup",
            description: "Path to a logical backup file",
            args: { name: "from-backup", template: "filepaths" },
          },
        ],
      },
      {
        name: "test",
        description: "Tests a database with pgTAP",
        hidden: true,
        args: {
          name: "path",
          isOptional: true,
          isVariadic: true,
          template: "filepaths",
        },
        options: dbTargetOptions,
      },
    ],
  },
  {
    name: "domains",
    description: "Manage custom domain names for Supabase projects",
    subcommands: [
      {
        name: "activate",
        description: "Activate the custom hostname for a project",
        options: projectTargetOptions,
      },
      {
        name: "create",
        description: "Create a custom hostname",
        options: [
          {
            name: "--custom-hostname",
            description: "The custom hostname to use for your Supabase project",
            isRequired: true,
            args: { name: "custom-hostname" },
          },
          ...projectTargetOptions,
        ],
      },
      {
        name: "delete",
        description: "Delete the custom hostname config",
        options: projectTargetOptions,
      },
      {
        name: "get",
        description: "Get the current custom hostname config",
        options: projectTargetOptions,
      },
      {
        name: "reverify",
        description: "Re-verify the custom hostname config",
        options: projectTargetOptions,
      },
    ],
  },
  {
    name: "encryption",
    description: "Manage encryption keys",
    subcommands: [
      {
        name: "get-root-key",
        description: "Get root encryption key",
        options: projectTargetOptions,
      },
      {
        name: "update-root-key",
        description: "Update the root encryption key",
        options: projectTargetOptions,
      },
    ],
  },
  {
    name: "feedback",
    description: "Send feedback to the Supabase team",
    subcommands: [
      {
        name: "add",
        description: "Send feedback to the Supabase team",
        args: { name: "message", isOptional: true, isVariadic: true },
        options: [
          {
            name: "--project-ref",
            description:
              "Project ref to attribute the feedback to (defaults to SUPABASE_PROJECT_ID, then the linked project)",
            args: { name: "project-ref" },
          },
        ],
      },
      {
        name: "delete",
        description: "Delete previously submitted feedback",
        args: { name: "token" },
        options: [
          {
            name: "--project-ref",
            description:
              "Project ref of the Supabase project the feedback was submitted with",
            args: { name: "project-ref" },
          },
        ],
      },
    ],
  },
  {
    name: "functions",
    description: "Manage Supabase Edge functions",
    subcommands: [
      {
        name: "delete",
        description: "Delete a Function from Supabase",
        args: { name: "Function name" },
        options: projectTargetOptions,
      },
      {
        name: "deploy",
        description: "Deploy a Function to Supabase",
        args: { name: "Function name", isOptional: true, isVariadic: true },
        options: [
          {
            name: "--import-map",
            description: "Path to import map file",
            args: { name: "import-map", template: "filepaths" },
          },
          {
            name: ["--jobs", "-j"],
            description: "Maximum number of parallel jobs",
            args: { name: "jobs", default: "1" },
          },
          {
            name: "--no-verify-jwt",
            description: "Disable JWT verification for the Function",
          },
          {
            name: "--prune",
            description:
              "Delete Functions that exist in Supabase project but not locally",
          },
          {
            name: "--use-api",
            description: "Bundle functions server-side without using Docker",
            exclusiveOn: ["--use-docker", "--legacy-bundle"],
          },
          {
            name: "--use-docker",
            description: "Use Docker to bundle functions locally",
            hidden: true,
            exclusiveOn: ["--use-api", "--legacy-bundle"],
          },
          {
            name: "--legacy-bundle",
            description: "Use legacy bundling",
            hidden: true,
            exclusiveOn: ["--use-api", "--use-docker"],
          },
          ...projectTargetOptions,
        ],
      },
      {
        name: "download",
        description: "Download a Function from Supabase",
        args: { name: "Function name", isOptional: true },
        options: [
          {
            name: "--use-api",
            description: "Unbundle functions server-side without using Docker",
            exclusiveOn: ["--use-docker"],
          },
          {
            name: "--use-docker",
            description: "Use Docker to unbundle functions locally",
            hidden: true,
            exclusiveOn: ["--use-api"],
          },
          ...projectTargetOptions,
        ],
      },
      {
        name: "list",
        description: "List all Functions in Supabase",
        options: projectTargetOptions,
      },
      {
        name: "new",
        description: "Create a new Function locally",
        args: { name: "Function name" },
        options: [
          {
            name: "--auth",
            description: "Use a specific auth mode",
            args: {
              name: "auth",
              suggestions: ["none", "apikey", "user"],
              default: "apikey",
            },
          },
        ],
      },
      {
        name: "serve",
        description: "Serve all Functions locally",
        args: { name: "Function name", isOptional: true, isVariadic: true },
        options: [
          {
            name: "--env-file",
            description:
              "Path to an env file. Overrides supabase/functions/.env and per-Function .env files",
            args: { name: "env-file", template: "filepaths" },
          },
          {
            name: "--import-map",
            description: "Path to import map file",
            args: { name: "import-map", template: "filepaths" },
          },
          {
            name: "--inspect",
            description: "Alias of --inspect-mode brk",
            exclusiveOn: ["--inspect-mode"],
          },
          {
            name: "--inspect-main",
            description: "Allow inspecting the main worker",
          },
          {
            name: "--inspect-mode",
            description: "Activate inspector capability for debugging",
            exclusiveOn: ["--inspect"],
            args: { name: "inspect-mode", suggestions: ["run", "brk", "wait"] },
          },
          {
            name: "--no-verify-jwt",
            description: "Disable JWT verification for the Function",
          },
          { name: "--all", description: "Serve all Functions", hidden: true },
        ],
      },
    ],
  },
  {
    name: "gen",
    description: "Run code generation tools",
    subcommands: [
      {
        name: "bearer-jwt",
        description: "Generate a Bearer Auth JWT for accessing Data API",
        options: [
          {
            name: "--exp",
            description: "Expiry timestamp for this token",
            args: { name: "exp" },
          },
          {
            name: "--payload",
            description: "Custom claims in JSON format",
            args: { name: "payload", default: "{}" },
          },
          {
            name: "--role",
            description: "Postgres role to use",
            isRequired: true,
            args: { name: "role" },
          },
          {
            name: "--sub",
            description: "User ID to impersonate",
            args: { name: "sub", default: "anonymous" },
          },
          {
            name: "--valid-for",
            description: "Validity duration for this token",
            args: { name: "valid-for", default: "30m0s" },
          },
        ],
      },
      {
        name: "signing-key",
        description: "Generate a JWT signing key",
        options: [
          {
            name: "--algorithm",
            description: "Algorithm for signing key generation",
            args: {
              name: "algorithm",
              suggestions: ["ES256", "RS256"],
              default: "ES256",
            },
          },
          {
            name: "--append",
            description:
              "Append new key to existing keys file instead of overwriting",
          },
        ],
      },
      {
        name: "types",
        description: "Generate types from Postgres schema",
        args: {
          name: "language",
          isOptional: true,
          suggestions: [{ name: "typescript", hidden: true }],
        },
        options: [
          {
            name: "--lang",
            description: "Output language of the generated types",
            args: {
              name: "lang",
              suggestions: ["typescript", "go", "python", "swift", "dart"],
              default: "typescript",
            },
          },
          {
            name: "--query-timeout",
            description: "Maximum timeout allowed for the database query",
            args: { name: "query-timeout", default: "15s" },
          },
          schemaOption,
          {
            name: "--swift-access-control",
            description: "Access control for Swift generated types",
            args: {
              name: "swift-access-control",
              suggestions: ["internal", "public"],
              default: "internal",
            },
          },
          {
            name: "--postgrest-v9-compat",
            description:
              "Generate types compatible with PostgREST v9 and below",
            hidden: true,
          },
          {
            name: "--project-id",
            description: "Deprecated, removed in v4: use --remote=<ref>",
            hidden: true,
            deprecated: true,
            args: { name: "project-id" },
          },
          ...dbTargetOptions,
        ],
      },
    ],
  },
  {
    name: "init",
    description: "Initialize a local project",
    options: [
      {
        name: "--force",
        description:
          "Write a fresh supabase/config.toml, replacing an existing config.toml and removing any config.json or config.jsonc",
      },
      {
        name: ["--interactive", "-i"],
        description: "Enables interactive mode to configure IDE settings",
      },
      {
        name: "--use-orioledb",
        description: "Use OrioleDB storage engine for Postgres",
      },
      {
        name: "--with-vscode-workspace",
        description: "Generate VS Code workspace",
        hidden: true,
      },
      {
        name: "--with-vscode-settings",
        description: "Generate VS Code settings for Deno",
        hidden: true,
      },
      {
        name: "--with-intellij-settings",
        description: "Generate IntelliJ IDEA settings for Deno",
        hidden: true,
      },
    ],
  },
  {
    name: "inspect",
    description: "Inspect project tools",
    subcommands: [
      {
        name: "db",
        description: "Inspect database",
        subcommands: [
          {
            name: "bloat",
            description: "Show relation bloat",
            options: dbTargetOptions,
          },
          {
            name: "blocking",
            description: "Show blocking queries",
            options: dbTargetOptions,
          },
          {
            name: "cache-hit",
            description: "Show cache hit rates for tables and indices",
            deprecated: { description: 'Use "db-stats" instead' },
            options: dbTargetOptions,
          },
          {
            name: "calls",
            description: "Show queries by call count",
            options: dbTargetOptions,
          },
          {
            name: "collation-drift",
            description: "Show indexes affected by collation version drift",
            options: dbTargetOptions,
          },
          {
            name: "db-stats",
            description: "Show database stats",
            options: dbTargetOptions,
          },
          {
            name: "index-sizes",
            description: "Show index sizes of individual indexes",
            deprecated: { description: 'Use "index-stats" instead' },
            options: dbTargetOptions,
          },
          {
            name: "index-stats",
            description: "Show index stats",
            options: dbTargetOptions,
          },
          {
            name: "index-usage",
            description: "Show information about the efficiency of indexes",
            deprecated: { description: 'Use "index-stats" instead' },
            options: dbTargetOptions,
          },
          {
            name: "locks",
            description: "Show exclusive locks",
            options: dbTargetOptions,
          },
          {
            name: "long-running-queries",
            description: "Show long-running queries",
            options: dbTargetOptions,
          },
          {
            name: "outliers",
            description: "Show query outliers by time",
            options: dbTargetOptions,
          },
          {
            name: "replication-slots",
            description: "Show replication slots",
            options: dbTargetOptions,
          },
          {
            name: "role-configs",
            description:
              "Show configuration settings for database roles when they have been modified",
            deprecated: { description: 'Use "role-stats" instead' },
            options: dbTargetOptions,
          },
          {
            name: "role-connections",
            description:
              "Show number of active connections for all database roles",
            deprecated: { description: 'Use "role-stats" instead' },
            options: dbTargetOptions,
          },
          {
            name: "role-stats",
            description: "Show role stats",
            options: dbTargetOptions,
          },
          {
            name: "seq-scans",
            description:
              "Show number of sequential scans recorded against all tables",
            deprecated: { description: 'Use "index-stats" instead' },
            options: dbTargetOptions,
          },
          {
            name: "table-record-counts",
            description: "Show estimated number of rows per table",
            deprecated: { description: 'Use "table-stats" instead' },
            options: dbTargetOptions,
          },
          {
            name: "table-sizes",
            description:
              "Show table sizes of individual tables without their index sizes",
            deprecated: { description: 'Use "table-stats" instead' },
            options: dbTargetOptions,
          },
          {
            name: "table-stats",
            description: "Show table stats",
            options: dbTargetOptions,
          },
          {
            name: "toast-sizes",
            description: "Show TOAST table sizes and dead chunk counts",
            options: dbTargetOptions,
          },
          {
            name: "traffic-profile",
            description: "Show traffic profile",
            options: dbTargetOptions,
          },
          {
            name: "unused-indexes",
            description: "Show indexes with low usage",
            deprecated: { description: 'Use "index-stats" instead' },
            options: dbTargetOptions,
          },
          {
            name: "vacuum-stats",
            description: "Show vacuum stats",
            options: dbTargetOptions,
          },
          {
            name: "xid-age",
            description: "Show XID age for user tables",
            options: dbTargetOptions,
          },
        ],
      },
      {
        name: "report",
        description: "Generate a CSV output for all inspect commands",
        options: [
          {
            name: "--output-dir",
            description: "Path to save CSV files in",
            args: { name: "output-dir", template: "folders", default: "." },
          },
          ...dbTargetOptions,
        ],
      },
    ],
  },
  {
    name: "issue",
    description: "Open GitHub issue forms",
    subcommands: [
      {
        name: "bug",
        description: "Open a bug report",
        options: [
          {
            name: "--actual-output",
            description: "Actual output or error text",
            args: { name: "actual-output" },
          },
          additionalContextOption,
          {
            name: "--area",
            description: "Affected CLI area",
            args: { name: "area" },
          },
          {
            name: "--command",
            description: "Command that failed",
            args: { name: "command" },
          },
          {
            name: "--crash-report-id",
            description: "Crash report or support ticket ID, if you have one",
            args: { name: "crash-report-id" },
          },
          {
            name: "--docker-services",
            description: "Relevant Docker service status or logs",
            args: { name: "docker-services" },
          },
          {
            name: "--expected-behavior",
            description: "Expected behavior",
            args: { name: "expected-behavior" },
          },
          noBrowserOption,
          {
            name: "--reproduce",
            description: "Steps to reproduce",
            args: { name: "reproduce" },
          },
        ],
      },
      {
        name: "docs",
        description: "Open a documentation issue",
        options: [
          additionalContextOption,
          {
            name: "--improvement",
            description: "Suggested documentation improvement",
            args: { name: "improvement" },
          },
          {
            name: "--issue-type",
            description: "Documentation issue type",
            args: { name: "issue-type" },
          },
          {
            name: "--link",
            description: "Relevant documentation link",
            args: { name: "link" },
          },
          noBrowserOption,
          {
            name: "--problem",
            description: "What is confusing, missing, or incorrect",
            args: { name: "problem" },
          },
        ],
      },
      {
        name: "feature",
        description: "Open a feature request",
        options: [
          additionalContextOption,
          {
            name: "--alternatives",
            description: "Alternatives considered",
            args: { name: "alternatives" },
          },
          {
            name: "--area",
            description: "Affected CLI area",
            args: { name: "area" },
          },
          {
            name: "--existing-issues",
            description: "Prefill the existing issues checklist",
          },
          noBrowserOption,
          {
            name: "--problem",
            description: "Problem the feature should solve",
            args: { name: "problem" },
          },
          {
            name: "--proposed-solution",
            description: "Proposed solution",
            args: { name: "proposed-solution" },
          },
        ],
      },
    ],
  },
  {
    name: "link",
    description: "Link to a Supabase project",
    args: { name: "ref-or-branch", isOptional: true },
    options: [
      {
        name: "--project-ref",
        description:
          "Project ref of the Supabase project, or the name of one of its branches",
        args: { name: "project-ref" },
      },
      {
        name: "--skip-pooler",
        description: "Use direct connection instead of pooler",
      },
      {
        name: "--frozen",
        description: "Leave supabase/supabase.lock untouched (stack mode only)",
        hidden: true,
      },
      {
        name: ["--password", "-p"],
        description: "Password to your remote Postgres database",
        hidden: true,
        args: { name: "password" },
      },
    ],
  },
  {
    name: "login",
    description: "Authenticate using an access token",
    options: [
      {
        name: "--name",
        description: "Name that will be used to store token in your settings",
        args: { name: "name" },
      },
      {
        name: "--no-browser",
        description: "Do not open browser automatically",
      },
      {
        name: "--token",
        description: "Use provided token instead of automatic login flow",
        args: { name: "token" },
      },
    ],
  },
  { name: "logout", description: "Log out and delete access tokens locally" },
  {
    name: "logs",
    description: "Browse local or hosted logs",
    options: [
      {
        name: "--file",
        description:
          "Read custom hosted log SQL from a file; use - to read stdin",
        args: { name: "file", template: "filepaths" },
      },
      {
        name: "--from",
        description: "Start at a UTC timestamp ending in Z",
        args: { name: "from" },
      },
      {
        name: "--kind",
        description: "Compute stream; requires --service compute",
        args: { name: "kind", suggestions: ["app", "requests", "builds"] },
      },
      {
        name: "--level",
        description: "Severity filter; repeat for several levels",
        isRepeatable: true,
        args: {
          name: "level",
          suggestions: [
            "error",
            "warn",
            "warning",
            "info",
            "debug",
            "log",
            "notice",
          ],
        },
      },
      {
        name: "--limit",
        description:
          "Initial filtered history count (default 100, maximum 1000). SQL controls its own LIMIT",
        args: { name: "limit" },
      },
      {
        name: "--resource",
        description:
          "Compute name or function ID remotely, or a local instance ID",
        args: { name: "resource" },
      },
      {
        name: "--search",
        description: "Case-insensitive message substring (hosted only)",
        args: { name: "search" },
      },
      {
        name: "--service",
        description:
          "Service selector; repeat for multiple services. See logs sources",
        isRepeatable: true,
        args: { name: "service" },
      },
      {
        name: "--since",
        description:
          "Duration or UTC timestamp; defaults to 1h. Local stacks also accept start",
        args: { name: "since" },
      },
      {
        name: "--sql",
        description:
          "Custom hosted log SQL; requires --remote. L reruns the query",
        args: { name: "sql" },
      },
      {
        name: "--stack",
        description: "Select a local stack by name",
        args: { name: "stack" },
      },
      {
        name: "--stack-id",
        description: "Select a local stack by ID",
        args: { name: "stack-id" },
      },
      {
        name: "--to",
        description:
          "Initial end at a UTC timestamp ending in Z. L advances to now",
        args: { name: "to" },
      },
      ...logTargetOptions,
    ],
    subcommands: [
      {
        name: "sources",
        description: "List supported sources and filters",
        options: [
          {
            name: "--service",
            description: "Describe one service",
            args: { name: "service" },
          },
          {
            name: "--stack",
            description: "Select a local stack by name",
            args: { name: "stack" },
          },
          {
            name: "--stack-id",
            description: "Select a local stack by ID",
            args: { name: "stack-id" },
          },
          ...logTargetOptions,
        ],
      },
    ],
  },
  {
    name: "migration",
    description: "Manage database migration scripts",
    subcommands: [
      {
        name: "down",
        description: "Resets applied migrations up to the last n versions",
        options: [
          {
            name: "--last",
            description: "Reset up to the last n migration versions",
            args: { name: "last", default: "1" },
          },
          ...dbTargetOptions,
        ],
      },
      {
        name: "fetch",
        description: "Fetch migration files from history table",
        options: dbTargetOptions,
      },
      {
        name: "list",
        description:
          "List local files and the target database's migration history",
        options: [passwordOption, ...dbTargetOptions],
      },
      {
        name: "new",
        description: "Create an empty migration script",
        args: { name: "migration name" },
      },
      {
        name: "repair",
        description: "Repair the migration history table",
        args: { name: "version", isOptional: true, isVariadic: true },
        options: [
          passwordOption,
          {
            name: "--status",
            description: "Version status to update",
            isRequired: true,
            args: { name: "status", suggestions: ["applied", "reverted"] },
          },
          ...dbTargetOptions,
        ],
      },
      {
        name: "squash",
        description: "Squash migrations to a single file",
        options: [
          passwordOption,
          {
            name: "--version",
            description: "Squash up to the specified version",
            args: { name: "version" },
          },
          ...dbTargetOptions,
        ],
      },
      {
        name: "up",
        description: "Apply pending migrations to a database",
        options: [
          {
            name: "--include-all",
            description:
              "Include all migrations not found in the migration history table",
          },
          ...dbTargetOptions,
        ],
      },
    ],
  },
  {
    name: "network-bans",
    description: "Manage network bans",
    subcommands: [
      {
        name: "get",
        description: "Get the current network bans",
        options: projectTargetOptions,
      },
      {
        name: "remove",
        description: "Remove a network ban",
        options: [
          {
            name: "--db-unban-ip",
            description: "IP to allow DB connections from",
            isRepeatable: true,
            args: { name: "db-unban-ip" },
          },
          ...projectTargetOptions,
        ],
      },
    ],
  },
  {
    name: "network-restrictions",
    description: "Manage network restrictions",
    subcommands: [
      {
        name: "get",
        description: "Get the current network restrictions",
        options: projectTargetOptions,
      },
      {
        name: "update",
        description: "Update network restrictions",
        options: [
          {
            name: "--append",
            description:
              "Append to existing restrictions instead of replacing them",
          },
          {
            name: "--bypass-cidr-checks",
            description: "Bypass some of the CIDR validation checks",
          },
          {
            name: "--db-allow-cidr",
            description: "CIDR to allow DB connections from",
            isRepeatable: true,
            args: { name: "db-allow-cidr" },
          },
          ...projectTargetOptions,
        ],
      },
    ],
  },
  {
    name: "notebooks",
    description: "Manage Supabase notebooks",
    subcommands: [
      {
        name: "pull",
        description: "Pull notebooks from Supabase",
        args: { name: "Notebook id", isOptional: true },
        options: projectTargetOptions,
      },
      {
        name: "push",
        description: "Push notebooks to Supabase",
        args: { name: "Notebook name", isOptional: true },
        options: projectTargetOptions,
      },
    ],
  },
  {
    name: "orgs",
    description: "Manage Supabase organizations",
    subcommands: [
      {
        name: "create",
        description: "Create an organization",
        args: { name: "name" },
      },
      { name: "list", description: "List all organizations" },
    ],
  },
  {
    name: "postgres-config",
    description: "Manage Postgres database config",
    subcommands: [
      {
        name: "delete",
        description: "Delete Postgres database config overrides",
        options: [
          {
            name: "--config",
            description: "Config keys to delete (comma-separated)",
            isRepeatable: true,
            args: { name: "config" },
          },
          {
            name: "--no-restart",
            description: "Do not restart the database after deleting config",
          },
          ...projectTargetOptions,
        ],
      },
      {
        name: "get",
        description: "Get Postgres database config",
        options: projectTargetOptions,
      },
      {
        name: "update",
        description: "Update Postgres database config",
        options: [
          {
            name: "--config",
            description: "Config overrides specified as a 'key=value' pair",
            isRepeatable: true,
            args: { name: "config" },
          },
          {
            name: "--no-restart",
            description: "Do not restart the database after updating config",
          },
          {
            name: "--replace-existing-overrides",
            description:
              "If true, replaces all existing overrides with the ones provided",
          },
          ...projectTargetOptions,
        ],
      },
    ],
  },
  {
    name: "projects",
    description: "Manage projects",
    subcommands: [
      {
        name: "api-keys",
        description: "List API keys",
        options: [
          {
            name: "--reveal",
            description:
              "Reveal the secret API keys in full (e.g. sb_secret_...)",
          },
          ...projectTargetOptions,
        ],
      },
      {
        name: "create",
        description: "Create a project",
        args: { name: "name", isOptional: true },
        options: [
          {
            name: "--db-password",
            description: "Database password of the project",
            args: { name: "db-password" },
          },
          {
            name: "--high-availability",
            description: "Enable high availability for the project",
          },
          {
            name: "--org-id",
            description: "Organization ID to create the project in",
            args: { name: "org-id" },
          },
          {
            name: "--region",
            description:
              "Select a region close to you for the best performance",
            args: { name: "region", suggestions: regions },
          },
          {
            name: "--size",
            description: "Select a desired instance size for your project",
            args: { name: "size", suggestions: instanceSizes },
          },
          {
            name: ["--interactive", "-i"],
            description: "Enables interactive mode",
            hidden: true,
          },
          {
            name: "--plan",
            description: "Select a plan that suits your needs",
            hidden: true,
            args: { name: "plan" },
          },
        ],
      },
      {
        name: "delete",
        description: "Delete a project",
        args: { name: "ref", isOptional: true },
      },
      { name: "list", description: "List all projects" },
    ],
  },
  {
    name: "pull",
    description: "Pull remote project state into the local checkout",
    options: [
      {
        name: "--dry-run",
        description:
          "Show what would be pulled without writing or changing anything",
      },
      {
        name: "--force",
        description:
          "Write even when the project config file, supabase/migrations, or supabase/functions has uncommitted or untracked changes in git",
      },
      {
        name: "--remote-label",
        description:
          "Name of the [remotes.*] block the config step writes into, overriding the block it would otherwise reuse or create",
        args: { name: "remote-label" },
      },
      {
        name: "--with-migration-history",
        description:
          "Fetch the remote migration history table into supabase/migrations, even when it already has files",
      },
      ...projectTargetOptions,
    ],
  },
  {
    name: "secrets",
    description: "Manage Supabase secrets",
    subcommands: [
      {
        name: "list",
        description: "List all secrets on Supabase",
        options: projectTargetOptions,
      },
      {
        name: "set",
        description: "Set a secret(s) on Supabase",
        args: { name: "NAME=VALUE", isVariadic: true },
        options: [
          {
            name: "--env-file",
            description: "Read secrets from a .env file",
            args: { name: "env-file", template: "filepaths" },
          },
          ...projectTargetOptions,
        ],
      },
      {
        name: "unset",
        description: "Unset a secret(s) on Supabase",
        args: { name: "NAME", isOptional: true, isVariadic: true },
        options: [
          {
            name: "--all",
            description:
              "Unset every secret except SUPABASE_ ones. Required when no names are given",
          },
          {
            name: "--dry-run",
            description:
              "Print the secrets that would be unset without unsetting them",
          },
          ...projectTargetOptions,
        ],
      },
    ],
  },
  {
    name: "seed",
    description: "Seed a Supabase project",
    subcommands: [
      {
        name: "buckets",
        description: "Seed buckets declared in storage.buckets",
        options: storageTargetOptions,
      },
    ],
  },
  { name: "services", description: "Show versions of all Supabase services" },
  {
    name: "snippets",
    description: "Manage Supabase SQL snippets",
    subcommands: [
      {
        name: "download",
        description: "Download contents of a SQL snippet",
        args: { name: "snippet-id" },
        options: projectTargetOptions,
      },
      {
        name: "list",
        description: "List all SQL snippets",
        options: projectTargetOptions,
      },
    ],
  },
  {
    name: "ssl-enforcement",
    description: "Manage SSL enforcement",
    subcommands: [
      {
        name: "get",
        description: "Get SSL enforcement configuration",
        options: projectTargetOptions,
      },
      {
        name: "update",
        description: "Update SSL enforcement configuration",
        options: [
          {
            name: "--disable-db-ssl-enforcement",
            description:
              "Whether the DB should disable SSL enforcement for all external connections",
            exclusiveOn: ["--enable-db-ssl-enforcement"],
          },
          {
            name: "--enable-db-ssl-enforcement",
            description:
              "Whether the DB should enable SSL enforcement for all external connections",
            exclusiveOn: ["--disable-db-ssl-enforcement"],
          },
          ...projectTargetOptions,
        ],
      },
    ],
  },
  {
    name: "sso",
    description: "Manage Single Sign-On (SSO) authentication",
    subcommands: [
      {
        name: "add",
        description: "Add a new SSO identity provider",
        options: [
          {
            name: "--attribute-mapping-file",
            description:
              "File containing a JSON mapping between SAML attributes to custom JWT claims",
            args: { name: "attribute-mapping-file", template: "filepaths" },
          },
          {
            name: "--domains",
            description:
              "Comma separated list of email domains to associate with the added identity provider",
            isRepeatable: true,
            args: { name: "domains" },
          },
          {
            name: "--metadata-file",
            description:
              "File containing a SAML 2.0 Metadata XML document describing the identity provider",
            exclusiveOn: ["--metadata-url"],
            args: { name: "metadata-file", template: "filepaths" },
          },
          {
            name: "--metadata-url",
            description:
              "URL pointing to a SAML 2.0 Metadata XML document describing the identity provider",
            exclusiveOn: ["--metadata-file"],
            args: { name: "metadata-url" },
          },
          {
            name: "--name-id-format",
            description:
              "URI reference representing the classification of string-based identifier information",
            args: {
              name: "name-id-format",
              suggestions: [
                "urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress",
                "urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified",
                "urn:oasis:names:tc:SAML:2.0:nameid-format:persistent",
                "urn:oasis:names:tc:SAML:2.0:nameid-format:transient",
              ],
            },
          },
          {
            name: "--skip-url-validation",
            description:
              "Skip local validation of the SAML 2.0 Metadata URL (HTTPS requirement, live GET probe, and UTF-8 body decode)",
          },
          {
            name: ["--type", "-t"],
            description:
              "Type of identity provider (according to supported protocol)",
            isRequired: true,
            args: { name: "type", suggestions: ["saml"] },
          },
          ...projectTargetOptions,
        ],
      },
      {
        name: "info",
        description:
          "Returns the SAML SSO settings required for the identity provider",
        options: projectTargetOptions,
      },
      {
        name: "list",
        description: "List all SSO identity providers",
        options: projectTargetOptions,
      },
      {
        name: "remove",
        description: "Remove an existing SSO identity provider",
        args: { name: "provider-id" },
        options: projectTargetOptions,
      },
      {
        name: "show",
        description: "Show information about an SSO identity provider",
        args: { name: "provider-id" },
        options: [
          {
            name: "--metadata",
            description: "Show SAML 2.0 XML Metadata only",
          },
          ...projectTargetOptions,
        ],
      },
      {
        name: "update",
        description: "Update information about an SSO identity provider",
        args: { name: "provider-id" },
        options: [
          {
            name: "--add-domains",
            description:
              "Add this comma separated list of email domains to the identity provider",
            isRepeatable: true,
            exclusiveOn: ["--domains"],
            args: { name: "add-domains" },
          },
          {
            name: "--attribute-mapping-file",
            description:
              "File containing a JSON mapping between SAML attributes to custom JWT claims",
            args: { name: "attribute-mapping-file", template: "filepaths" },
          },
          {
            name: "--domains",
            description:
              "Replace domains with this comma separated list of email domains",
            isRepeatable: true,
            exclusiveOn: ["--add-domains", "--remove-domains"],
            args: { name: "domains" },
          },
          {
            name: "--metadata-file",
            description:
              "File containing a SAML 2.0 Metadata XML document describing the identity provider",
            exclusiveOn: ["--metadata-url"],
            args: { name: "metadata-file", template: "filepaths" },
          },
          {
            name: "--metadata-url",
            description:
              "URL pointing to a SAML 2.0 Metadata XML document describing the identity provider",
            exclusiveOn: ["--metadata-file"],
            args: { name: "metadata-url" },
          },
          {
            name: "--name-id-format",
            description:
              "URI reference representing the classification of string-based identifier information",
            args: {
              name: "name-id-format",
              suggestions: [
                "urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress",
                "urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified",
                "urn:oasis:names:tc:SAML:2.0:nameid-format:persistent",
                "urn:oasis:names:tc:SAML:2.0:nameid-format:transient",
              ],
            },
          },
          {
            name: "--remove-domains",
            description:
              "Remove this comma separated list of email domains from the identity provider",
            isRepeatable: true,
            exclusiveOn: ["--domains"],
            args: { name: "remove-domains" },
          },
          {
            name: "--skip-url-validation",
            description:
              "Skip local validation of the SAML 2.0 Metadata URL (HTTPS requirement, live GET probe, and UTF-8 body decode)",
          },
          ...projectTargetOptions,
        ],
      },
    ],
  },
  {
    name: "start",
    description: "Start local Supabase stack",
    options: [
      {
        name: ["--exclude", "-x"],
        description: "Names of containers to not start",
        isRepeatable: true,
        args: {
          name: "exclude",
          suggestions: [
            "gotrue",
            "realtime",
            "storage-api",
            "imgproxy",
            "kong",
            "mailpit",
            "postgrest",
            "postgres-meta",
            "studio",
            "edge-runtime",
            "logflare",
            "vector",
            "supavisor",
          ],
        },
      },
      {
        name: "--ignore-health-check",
        description: "Ignore unhealthy services and exit 0",
      },
      {
        name: "--preview",
        description: "Connect to feature preview branch",
        hidden: true,
      },
    ],
  },
  {
    name: "status",
    description: "Show status of local Supabase containers",
    options: [
      {
        name: "--override-name",
        description: "Override specific variable names",
        isRepeatable: true,
        args: { name: "override-name" },
      },
      {
        name: "--exclude",
        description: "Names of containers to omit from output",
        hidden: true,
        isRepeatable: true,
        args: { name: "exclude" },
      },
      {
        name: "--ignore-health-check",
        description: "Ignore unhealthy services and exit 0",
        hidden: true,
      },
    ],
  },
  {
    name: "stop",
    description: "Stop all local Supabase containers",
    options: [
      {
        name: "--all",
        description:
          "Stop all local Supabase instances from all projects across the machine",
        exclusiveOn: ["--project-id"],
      },
      {
        name: "--no-backup",
        description: "Deletes all data volumes after stopping",
      },
      {
        name: "--project-id",
        description: "Local project ID to stop",
        exclusiveOn: ["--all"],
        args: { name: "project-id" },
      },
      {
        name: "--backup",
        description: "Backs up the current database before stopping",
        hidden: true,
      },
    ],
  },
  {
    name: "storage",
    description: "Manage Supabase Storage objects",
    subcommands: [
      {
        name: "cp",
        description: "Copy objects from src to dst path",
        args: [
          { name: "src", template: "filepaths" },
          { name: "dst", template: "filepaths" },
        ],
        options: [
          {
            name: "--cache-control",
            description: "Custom Cache-Control header for HTTP upload",
            args: { name: "cache-control", default: "max-age=3600" },
          },
          {
            name: "--content-type",
            description: "Custom Content-Type header for HTTP upload",
            args: { name: "content-type", default: "auto-detect" },
          },
          {
            name: ["--jobs", "-j"],
            description: "Maximum number of parallel jobs",
            args: { name: "jobs", default: "1" },
          },
          {
            name: ["--recursive", "-r"],
            description: "Recursively copy a directory",
          },
          ...storageTargetOptions,
        ],
      },
      {
        name: "ls",
        description: "List objects by path prefix",
        args: { name: "path", isOptional: true },
        options: [
          {
            name: ["--recursive", "-r"],
            description: "Recursively list a directory",
          },
          ...storageTargetOptions,
        ],
      },
      {
        name: "mv",
        description: "Move objects from src to dst path",
        args: [{ name: "src" }, { name: "dst" }],
        options: [
          {
            name: ["--recursive", "-r"],
            description: "Recursively move a directory",
          },
          ...storageTargetOptions,
        ],
      },
      {
        name: "rm",
        description: "Remove objects by file path",
        args: { name: "file", isVariadic: true },
        options: [
          {
            name: ["--recursive", "-r"],
            description: "Recursively remove a directory",
          },
          ...storageTargetOptions,
        ],
      },
    ],
  },
  {
    name: "telemetry",
    description: "Manage telemetry",
    subcommands: [
      { name: "disable", description: "Disable telemetry" },
      { name: "enable", description: "Enable telemetry" },
      { name: "status", description: "Show telemetry status" },
    ],
  },
  {
    name: "test",
    description: "Run tests on local Supabase containers",
    subcommands: [
      {
        name: "db",
        description: "Tests a database with pgTAP",
        args: {
          name: "path",
          isOptional: true,
          isVariadic: true,
          template: "filepaths",
        },
        options: dbTargetOptions,
      },
      {
        name: "new",
        description: "Create a new test file",
        args: { name: "name" },
        options: [
          {
            name: ["--template", "-t"],
            description: "Template framework to generate",
            args: {
              name: "template",
              suggestions: ["pgtap"],
              default: "pgtap",
            },
          },
        ],
      },
    ],
  },
  { name: "unlink", description: "Unlink a Supabase project" },
  {
    name: "vanity-subdomains",
    description: "Manage vanity subdomains",
    subcommands: [
      {
        name: "activate",
        description: "Activate a vanity subdomain",
        options: [
          {
            name: "--desired-subdomain",
            description:
              "The desired vanity subdomain to use for your Supabase project",
            isRequired: true,
            args: { name: "desired-subdomain" },
          },
          ...projectTargetOptions,
        ],
      },
      {
        name: "check-availability",
        description: "Check subdomain availability",
        options: [
          {
            name: "--desired-subdomain",
            description:
              "The desired vanity subdomain to use for your Supabase project",
            isRequired: true,
            args: { name: "desired-subdomain" },
          },
          ...projectTargetOptions,
        ],
      },
      {
        name: "delete",
        description: "Delete the vanity subdomain",
        options: projectTargetOptions,
      },
      {
        name: "get",
        description: "Get the current vanity subdomain",
        options: projectTargetOptions,
      },
    ],
  },
  { name: "whoami", description: "Show the current user" },
];

const helpSubcommands = (items: Fig.Subcommand[]): Fig.Subcommand[] =>
  items
    .filter((item) => !item.hidden)
    .map(({ name, description, deprecated, subcommands: children }) => ({
      name,
      description,
      ...(deprecated ? { deprecated } : {}),
      ...(children ? { subcommands: helpSubcommands(children) } : {}),
    }));

const completionSpec: Fig.Spec = {
  name: "supabase",
  description: "Supabase CLI",
  subcommands: [
    ...subcommands,
    {
      name: "help",
      description: "Help about any command",
      subcommands: helpSubcommands(subcommands),
    },
  ],
  options: [
    {
      name: "--agent",
      description: "Override agent detection: yes, no, or auto",
      isPersistent: true,
      args: {
        name: "agent",
        suggestions: ["auto", "yes", "no"],
        default: "auto",
      },
    },
    {
      name: "--debug",
      description: "Output debug logs to stderr",
      isPersistent: true,
    },
    {
      name: "--dns-resolver",
      description: "Lookup domain names using the specified resolver",
      isPersistent: true,
      args: {
        name: "dns-resolver",
        suggestions: ["native", "https"],
        default: "native",
      },
    },
    {
      name: "--experimental",
      description: "Enable experimental features",
      isPersistent: true,
    },
    {
      name: "--network-id",
      description:
        "Use the specified docker network instead of a generated one",
      isPersistent: true,
      args: { name: "network-id" },
    },
    {
      name: ["--output", "-o"],
      description: "Output format of status variables",
      isPersistent: true,
      args: {
        name: "output",
        suggestions: ["env", "pretty", "json", "toml", "yaml"],
        default: "pretty",
      },
    },
    {
      name: "--output-format",
      description:
        "Output format: text (default), json, or stream-json (NDJSON)",
      isPersistent: true,
      args: {
        name: "output-format",
        suggestions: ["text", "json", "stream-json"],
        default: "text",
      },
    },
    {
      name: "--profile",
      description: "Use a specific profile for connecting to Supabase API",
      isPersistent: true,
      args: { name: "profile", default: "supabase" },
    },
    {
      name: "--workdir",
      description: "Path to the directory containing your supabase/ folder",
      isPersistent: true,
      args: { name: "workdir", template: "folders" },
    },
    {
      name: "--yes",
      description: "Answer yes to all prompts",
      isPersistent: true,
    },
    {
      name: ["--help", "-h"],
      description: "Show help information",
      isPersistent: true,
    },
    { name: ["--version", "-v"], description: "Show version information" },
  ],
};

export default completionSpec;
