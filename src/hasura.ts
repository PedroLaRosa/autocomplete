// Hasura CLI v2.51.9 (latest stable cli/v2.51.9 tag of hasura/graphql-engine, tag dated 2026-11-10; checked 2026-11-20). Source: cobra command and flag definitions in cli/commands/*.go read statically at that tag (binary not executed).
// The v3 / DDN `ddn` CLI is a separate tool and is not covered here.

const rootOptions: Fig.Option[] = [
  {
    name: "--envfile",
    description: ".env filename to load ENV vars from",
    isPersistent: true,
    args: {
      name: "file",
      default: ".env",
      template: "filepaths",
    },
  },
  {
    name: ["-h", "--help"],
    description: "Help for hasura",
    isPersistent: true,
  },
  {
    name: "--log-level",
    description: "Log level",
    isPersistent: true,
    args: {
      name: "level",
      suggestions: ["DEBUG", "INFO", "WARN", "ERROR", "FATAL"],
      default: "INFO",
    },
  },
  {
    name: "--no-color",
    description: "Do not colorize output",
    isPersistent: true,
  },
  {
    name: "--project",
    description: "Directory where commands are executed (default: current dir)",
    isPersistent: true,
    args: {
      name: "directory",
      template: "folders",
    },
  },
  {
    name: "--skip-update-check",
    description: "Skip automatic update check on command execution",
    isPersistent: true,
  },
  {
    name: "--cli-ext-path",
    description: "Path to cli-ext binary",
    hidden: true,
    isPersistent: true,
    args: {
      name: "path",
      template: "filepaths",
    },
  },
];

const endpointOption: Fig.Option = {
  name: "--endpoint",
  description:
    "Http(s) endpoint for Hasura GraphQL engine (env `HASURA_GRAPHQL_ENDPOINT`)",
  args: { name: "url" },
};

const adminSecretOption: Fig.Option = {
  name: "--admin-secret",
  description: "Admin secret for Hasura GraphQL engine",
  args: { name: "secret" },
};

const accessKeyOption: Fig.Option = {
  name: "--access-key",
  description:
    "Access key for Hasura GraphQL engine, use --admin-secret instead",
  deprecated: true,
  args: { name: "key" },
};

const insecureSkipTLSVerifyOption: Fig.Option = {
  name: "--insecure-skip-tls-verify",
  description: "Skip TLS verification and disable cert checking",
};

const certificateAuthorityOption: Fig.Option = {
  name: "--certificate-authority",
  description: "Path to a cert file for the certificate authority",
  args: {
    name: "file",
    template: "filepaths",
  },
};

const headerOption: Fig.Option = {
  name: "--header",
  description:
    'Custom HTTP header to send with every request to Hasura GraphQL engine, in "Name: value" form',
  isRepeatable: true,
  args: { name: "header" },
};

const disableInteractiveOption: Fig.Option = {
  name: "--disable-interactive",
  description: "Disables interactive prompts",
};

const databaseNameOption: Fig.Option = {
  name: "--database-name",
  description: "Database on which operation should be applied",
  args: { name: "database" },
};

// Connection flags accepted by scripts update-project-v2/v3 (no --header there)
const scriptsConnectionOptions: Fig.Option[] = [
  endpointOption,
  adminSecretOption,
  accessKeyOption,
  insecureSkipTLSVerifyOption,
  certificateAuthorityOption,
];

// Connection flags accepted by console, deploy and (as persistent flags) the actions, metadata, migrate and seed groups
const connectionOptions: Fig.Option[] = [
  ...scriptsConnectionOptions,
  headerOption,
];

const asPersistent = (options: Fig.Option[]): Fig.Option[] =>
  options.map((option) => ({ ...option, isPersistent: true }));

const noTransactionOption: Fig.Option = {
  name: "--no-transaction",
  description: "Disable transaction for migration",
  exclusiveOn: ["--per-migration-transaction"],
};

const perMigrationTransactionOption: Fig.Option = {
  name: "--per-migration-transaction",
  description:
    "Enable per-migration transaction control; add '-- hasura:no-transaction' as the first line of a SQL file to run that migration without a transaction (not supported on MSSQL/BigQuery sources)",
  exclusiveOn: ["--no-transaction"],
};

const outputFormatSuggestions = ["json", "yaml"];

const completionSpec: Fig.Spec = {
  name: "hasura",
  description: "Hasura GraphQL engine command line tool",
  subcommands: [
    {
      name: "actions",
      description: "Manage Hasura Actions",
      options: asPersistent(connectionOptions),
      subcommands: [
        {
          name: "codegen",
          description: "Generate code for Actions",
          options: [
            {
              name: "--derive-from",
              description: "Derive Action from a Hasura operation",
              args: { name: "operation" },
            },
          ],
          args: {
            name: "action-name",
            isOptional: true,
            isVariadic: true,
          },
        },
        {
          name: "create",
          description: "Create a Hasura Action",
          options: [
            {
              name: "--derive-from",
              description: "Derive Action from a Hasura operation",
              args: { name: "operation" },
            },
            {
              name: "--kind",
              description: "Kind to use in Action",
              args: {
                name: "kind",
                suggestions: ["synchronous", "asynchronous"],
              },
            },
            {
              name: "--webhook",
              description: "Webhook to use in Action",
              args: { name: "webhook" },
            },
            {
              name: "--with-codegen",
              description: "Create Action along with codegen",
            },
          ],
          args: {
            name: "action-name",
          },
        },
        {
          name: "use-codegen",
          description: "Use the codegen to generate code for Hasura Actions",
          options: [
            {
              name: "--framework",
              description: "Framework to be used by codegen",
              args: { name: "framework" },
            },
            {
              name: "--output-dir",
              description: "Directory to create the codegen files",
              args: {
                name: "directory",
                template: "folders",
              },
            },
            {
              name: "--with-starter-kit",
              description: "Clone starter kit for a framework",
            },
          ],
        },
      ],
    },
    {
      name: "completion",
      description: "Generate auto-completion code",
      options: [
        {
          name: "--file",
          description: "File to which output has to be written",
          args: {
            name: "file",
            template: "filepaths",
          },
        },
      ],
      args: {
        name: "shell",
        suggestions: ["bash", "zsh"],
      },
    },
    {
      name: "console",
      description: "Open the Console to manage the database and try out APIs",
      options: [
        {
          name: "--address",
          description: "Address to serve console and migration API from",
          args: {
            name: "address",
            default: "localhost",
          },
        },
        {
          name: "--api-host",
          description:
            "Host serving migrate API (preview: usage may change in future)",
          args: {
            name: "url",
            default: "http://localhost",
          },
        },
        {
          name: "--api-port",
          description: "Port for serving migrate API",
          args: {
            name: "port",
            default: "9693",
          },
        },
        {
          name: "--browser",
          description: "Open console in a specific browser",
          args: { name: "browser" },
        },
        {
          name: "--console-hge-endpoint",
          description:
            "Endpoint on which the CLI Console should reach the HGE server",
          args: { name: "url" },
        },
        {
          name: "--console-port",
          description: "Port for serving console",
          args: {
            name: "port",
            default: "9695",
          },
        },
        {
          name: "--no-browser",
          description: "Do not automatically open console in browser",
        },
        {
          name: "--static-dir",
          description:
            "Directory where static assets mentioned in the console html template can be served from",
          args: {
            name: "directory",
            template: "folders",
          },
        },
        {
          name: "--use-server-assets",
          description:
            "When rendering console, use assets provided by HGE server",
        },
        ...connectionOptions,
      ],
    },
    {
      name: "deploy",
      description:
        "Apply Hasura Metadata and database migrations to graphql-engine (preview)",
      options: [
        {
          name: "--with-seeds",
          description: "Apply available seeds data to databases",
        },
        ...connectionOptions,
        disableInteractiveOption,
        {
          name: "--disable-auto-state-migration",
          description:
            "After a config v3 update, disable automatically moving state from hdb_catalog.schema_migrations to catalog state",
          hidden: true,
        },
        noTransactionOption,
        perMigrationTransactionOption,
      ],
    },
    {
      name: "docs",
      description: "Generate CLI docs in various formats",
      hidden: true,
      options: [
        {
          name: "--type",
          description: "Type of documentation to generate",
          args: {
            name: "type",
            suggestions: ["man", "md", "mdx", "rest", "yaml"],
            default: "md",
          },
        },
        {
          name: "--directory",
          description: "Directory where docs should be generated",
          args: {
            name: "directory",
            default: "docs",
            template: "folders",
          },
        },
      ],
    },
    {
      name: "help",
      description: "Help about any command",
      args: {
        name: "command",
        isOptional: true,
        isVariadic: true,
      },
    },
    {
      name: "init",
      description: "Initialize a new Hasura GraphQL engine project",
      options: [
        {
          name: "--version",
          description: "Config version to be used",
          args: {
            name: "int",
            suggestions: ["2", "3"],
            default: "3",
          },
        },
        {
          name: "--directory",
          description:
            "Name of directory where files will be created, use the directory-name argument instead",
          deprecated: true,
          args: {
            name: "directory",
            template: "folders",
          },
        },
        endpointOption,
        adminSecretOption,
        accessKeyOption,
        {
          name: "--install-manifest",
          description:
            "Install manifest to be cloned, refer to the install-manifests directory of hasura/graphql-engine instead",
          deprecated: true,
          args: { name: "manifest" },
        },
        {
          name: "--fetch",
          description:
            "Fetch the metadata and migrations from server without prompt",
          hidden: true,
        },
      ],
      args: {
        name: "directory-name",
        isOptional: true,
        template: "folders",
      },
    },
    {
      name: ["metadata", "md"],
      description:
        "Manage Hasura GraphQL engine Metadata saved in the database",
      options: asPersistent(connectionOptions),
      subcommands: [
        {
          name: "apply",
          description: "Apply Hasura Metadata on a database",
          options: [
            {
              name: "--from-file",
              description:
                "Apply metadata from migrations/metadata.[yaml|json], deprecated with config v1",
              deprecated: true,
            },
            {
              name: "--dry-run",
              description:
                "Show metadata generated from project directory without applying to server",
            },
            {
              name: ["-o", "--output"],
              description: "Specify an output format to show applied metadata",
              args: {
                name: "format",
                suggestions: outputFormatSuggestions,
                default: "json",
              },
            },
            {
              name: "--disallow-inconsistent-metadata",
              description: "Disallow inconsistent metadata to be applied",
            },
          ],
        },
        {
          name: "apply-data-sources",
          description:
            "Apply only the data sources (connection configuration) from the project metadata",
          options: [
            {
              name: "--dry-run",
              description:
                "Show the metadata API request that would be sent to the server, without applying it",
            },
          ],
        },
        {
          name: ["clear", "reset"],
          description: "Clear Hasura GraphQL engine Metadata on the database",
        },
        {
          name: "codemod",
          description: "Run codemods on Hasura Metadata",
          subcommands: [
            {
              name: "migrate-postgres-comments",
              description:
                "Copy PostgreSQL table, column, function and computed-field COMMENTs into local Hasura Metadata",
              options: [
                {
                  name: "--source",
                  description:
                    "The Postgres-family source to migrate comments for (default: all Postgres-family sources)",
                  args: { name: "source" },
                },
                {
                  name: "--dry-run",
                  description:
                    "Print the proposed metadata changes without writing any files",
                },
              ],
            },
          ],
        },
        {
          name: "diff",
          description: "Show a highlighted diff of Hasura Metadata (preview)",
          options: [
            {
              name: "--type",
              description: "Specify a type of diff",
              args: {
                name: "type",
                suggestions: ["unified-json", "unified-yaml", "yaml", "json"],
              },
            },
          ],
          args: [
            {
              name: "file1",
              isOptional: true,
              template: "filepaths",
            },
            {
              name: "file2",
              isOptional: true,
              template: "filepaths",
            },
          ],
        },
        {
          name: "export",
          description:
            "Export Hasura GraphQL engine Metadata from the database",
          options: [
            {
              name: ["-o", "--output"],
              description:
                "Write metadata to standard output in given format (does not modify project metadata)",
              args: {
                name: "format",
                suggestions: outputFormatSuggestions,
              },
            },
          ],
        },
        {
          name: ["inconsistency", "inconsistencies", "ic"],
          description: "Manage inconsistent objects in the Hasura Metadata",
          subcommands: [
            {
              name: "drop",
              description: "Drop inconsistent objects from the Hasura Metadata",
            },
            {
              name: ["list", "ls"],
              description:
                "List all inconsistent objects from the Hasura Metadata",
              options: [
                {
                  name: ["-o", "--output"],
                  description:
                    "Select output format for inconsistent metadata objects",
                  args: {
                    name: "format",
                    suggestions: ["json"],
                  },
                },
              ],
            },
            {
              name: "status",
              description:
                "Check if the Hasura Metadata is inconsistent or not",
            },
          ],
        },
        {
          name: "reload",
          description:
            "Reload Hasura GraphQL engine schema to pick up changes in any underlying data sources (database or remote schema)",
        },
      ],
    },
    {
      name: "migrate",
      description: "Manage migrations on the database",
      options: asPersistent([
        databaseNameOption,
        ...connectionOptions,
        disableInteractiveOption,
        {
          name: "--disable-auto-state-migration",
          description:
            "After a config v3 update, disable automatically moving state from hdb_catalog.schema_migrations to catalog state",
          hidden: true,
        },
      ]),
      subcommands: [
        {
          name: "apply",
          description: "Apply migrations on the database",
          options: [
            {
              name: "--up",
              description: "Apply all or N up migration steps",
              exclusiveOn: ["--down", "--goto", "--version"],
              args: { name: "steps" },
            },
            {
              name: "--down",
              description: "Apply all or N down migration steps",
              exclusiveOn: ["--up", "--goto", "--version"],
              args: { name: "steps" },
            },
            {
              name: "--goto",
              description: "Apply migration chain up to the version specified",
              exclusiveOn: ["--up", "--down", "--version"],
              args: { name: "version" },
            },
            {
              name: "--version",
              description: "Only apply this particular migration",
              exclusiveOn: ["--up", "--down", "--goto"],
              args: { name: "version" },
            },
            {
              name: "--skip-execution",
              description:
                "Skip executing the migration action, but mark them as applied",
              exclusiveOn: ["--dry-run"],
            },
            {
              name: "--type",
              description: "Type of migration to be used with version flag",
              args: {
                name: "type",
                suggestions: ["up", "down"],
                default: "up",
              },
            },
            {
              name: "--dry-run",
              description:
                "Print the names of migrations which are going to be applied",
              exclusiveOn: ["--skip-execution", "--all-databases"],
            },
            {
              name: "--all-databases",
              description:
                "Attempt to apply migrations on all databases present on server",
              exclusiveOn: ["--dry-run"],
            },
            {
              name: "--progressbar-logs",
              description: "Print the logs of progressbar",
              hidden: true,
            },
            noTransactionOption,
            perMigrationTransactionOption,
          ],
        },
        {
          name: "create",
          description: "Create sql files required for a migration",
          options: [
            {
              name: "--from-server",
              description:
                "Take pg_dump of schema (default: public) and Hasura metadata from the server",
            },
            {
              name: "--sql-from-file",
              description:
                "Path to an SQL file which contains the SQL statements",
              args: {
                name: "file",
                template: "filepaths",
              },
            },
            {
              name: "--sql-from-server",
              description:
                "Take pg_dump from the server (default: public) and save it as a migration, use --from-server instead",
              deprecated: true,
            },
            {
              name: "--schema",
              description:
                "Name of Postgres schema to export as a migration, provide multiple schemas as a comma separated list",
              isRepeatable: true,
              args: {
                name: "schemas",
                default: "public",
              },
            },
            {
              name: "--metadata-from-file",
              description:
                "Path to a Hasura metadata file to be used for up actions, no longer accepted",
              deprecated: true,
              args: {
                name: "file",
                template: "filepaths",
              },
            },
            {
              name: "--metadata-from-server",
              description:
                "Take metadata from the server and write it as an up migration file, no longer accepted",
              deprecated: true,
            },
            {
              name: "--up-sql",
              description:
                "Sql string/query that is to be used to create an up migration",
              args: { name: "sql" },
            },
            {
              name: "--down-sql",
              description:
                "Sql string/query that is to be used to create a down migration",
              args: { name: "sql" },
            },
          ],
          args: {
            name: "migration-name",
          },
        },
        {
          name: "delete",
          description:
            "Clear migrations from local project and server (preview)",
          options: [
            {
              name: "--version",
              description: "Deletes the specified version in migrations",
              exclusiveOn: ["--all"],
              args: { name: "uint" },
            },
            {
              name: "--all",
              description: "Clears all migrations for selected database",
              exclusiveOn: ["--version"],
            },
            {
              name: "--force",
              description: "Executes operation without any confirmation",
              isDangerous: true,
            },
            {
              name: "--server",
              description: "Reset migrations only on server",
            },
          ],
        },
        {
          name: "squash",
          description: "Squash multiple migrations into a single one (preview)",
          options: [
            {
              name: "--from",
              description: "Start squashing from this version",
              isRequired: true,
              args: { name: "uint" },
            },
            {
              name: "--to",
              description: "Squash up to this version",
              args: {
                name: "int",
                default: "-1",
              },
            },
            {
              name: "--name",
              description: "Name for the new squashed migration",
              args: {
                name: "name",
                default: "squashed",
              },
            },
            {
              name: "--delete-source",
              description:
                "Delete the source files after squashing without any confirmation",
            },
          ],
        },
        {
          name: "status",
          description: "Display current status of migrations on a database",
        },
      ],
    },
    {
      name: ["plugins", "plugin"],
      description: "Manage plugins for the CLI",
      subcommands: [
        {
          name: "install",
          description: "Install a plugin from the index",
          options: [
            {
              name: "--version",
              description: "Version to be installed",
              args: { name: "version" },
            },
            {
              name: "--manifest-file",
              description: "Specify local manifest file (dev)",
              hidden: true,
              args: {
                name: "file",
                template: "filepaths",
              },
            },
          ],
          args: {
            name: "plugin-name",
          },
        },
        {
          name: ["list", "ls"],
          description:
            "List all available plugins from index, versions and installation status",
          options: [
            {
              name: "--dont-update-index",
              description:
                "Do not update the plugin index local cache, only show the list",
            },
          ],
        },
        {
          name: "uninstall",
          description: "Uninstall a plugin",
          args: {
            name: "plugin-name",
          },
        },
        {
          name: "upgrade",
          description: "Upgrade a plugin to a newer version",
          options: [
            {
              name: "--version",
              description: "Version to be upgraded",
              args: { name: "version" },
            },
          ],
          args: {
            name: "plugin-name",
          },
        },
      ],
    },
    {
      name: "scripts",
      description: "Execute helper scripts to manage Hasura Projects",
      subcommands: [
        {
          name: ["update-project-v2", "update-config-v2"],
          description: "Update the Hasura Project from config v1 to v2",
          options: [
            {
              name: "--metadata-dir",
              description: "Metadata directory",
              args: {
                name: "directory",
                default: "metadata",
                template: "folders",
              },
            },
            ...scriptsConnectionOptions,
          ],
        },
        {
          name: "update-project-v3",
          description: "Update the Hasura Project from config v2 to v3",
          options: [
            {
              name: "--database-name",
              description:
                "Database name for which the current migrations / seeds belong to",
              args: { name: "database" },
            },
            {
              name: "--force",
              description: "Do not ask for confirmation",
              isDangerous: true,
            },
            {
              name: "--move-state-only",
              description:
                "Do only a state migration from old hdb_catalog.* table to catalog state and skip others",
            },
            ...scriptsConnectionOptions,
          ],
        },
      ],
    },
    {
      name: ["seed", "sd", "seeds"],
      description: "Manage seed data",
      options: asPersistent([
        databaseNameOption,
        ...connectionOptions,
        disableInteractiveOption,
      ]),
      subcommands: [
        {
          name: "apply",
          description: "Apply seed data",
          options: [
            {
              name: ["-f", "--file"],
              description: "Seed file to apply",
              isRepeatable: true,
              args: {
                name: "file",
                template: "filepaths",
              },
            },
            {
              name: "--all-databases",
              description:
                "Attempt to apply seeds on all databases present on server",
            },
          ],
        },
        {
          name: "create",
          description: "Create a new seed file",
          options: [
            {
              name: "--from-table",
              description:
                "Name of table from which seed file has to be initialized, e.g. table1, myschema1.table1",
              isRepeatable: true,
              args: { name: "table" },
            },
          ],
          args: {
            name: "seed-name",
          },
        },
      ],
    },
    {
      name: "update-cli",
      description: "Update the CLI to latest or a specific version",
      options: [
        {
          name: "--version",
          description: "A specific version to install",
          args: { name: "version" },
        },
      ],
    },
    {
      name: "version",
      description: "Print the CLI version",
    },
  ],
  options: rootOptions,
};

export default completionSpec;
