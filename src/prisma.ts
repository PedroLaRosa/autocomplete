// Prisma v7.10.1 (latest stable: GitHub "Latest" release and npm "prev" tag, published 2026-10-15; re-verified 2026-11-20). Source: arg parsers and *-completion.ts in prisma/prisma packages/cli and packages/migrate at tag 7.10.1, @prisma/cli-dev 0.16.28 (prisma dev), docs cli/v7
// ponytail: npm "latest" is the 8.0.0-rc.34 prerelease, a new CLI from prisma/prisma-cli (auth, project, service, contract, migration...) that drops generate, studio and migrate dev; its own spec once it ships stable

const commonOptions: Fig.Option = {
  name: ["-h", "--help"],
  description: "Display this help message",
};
const schemaOptions: Fig.Option = {
  name: "--schema",
  description: "Custom path to your Prisma schema",
  args: {
    name: "Schema path",
    template: "filepaths",
  },
};
const configOption: Fig.Option = {
  name: "--config",
  description: "Custom path to your Prisma config file",
  args: {
    name: "Config path",
    template: "filepaths",
  },
};
const baseOptions: Fig.Option[] = [commonOptions, schemaOptions, configOption];
const urlOption: Fig.Option = {
  name: "--url",
  description: "Override the datasource URL from the Prisma config file",
  args: {
    name: "url",
  },
};
const debugOption: Fig.Option = {
  name: "--debug",
  description: "Enable debug logging",
};
const devServerArg: Fig.Arg = {
  name: "name",
  description: "Name(s) or glob pattern(s) of the server(s)",
  isVariadic: true,
};
const linkOptions: Fig.Option[] = [
  {
    name: "--api-key",
    description: "Workspace API key (CI / non-interactive)",
    args: {
      name: "key",
    },
  },
  {
    name: "--database",
    description: "Database ID to link to (e.g. db_abc123)",
    args: {
      name: "id",
    },
  },
  {
    name: "--force",
    description: "Re-link even if already linked to Prisma Postgres",
  },
];

const completionSpec: Fig.Spec = {
  name: "prisma",
  description:
    "Prisma is a modern DB toolkit to query, migrate and model your database",
  icon: "https://raw.githubusercontent.com/prisma/docs/main/src/images/favicon-16x16.png",
  options: [
    commonOptions,
    {
      name: "--preview-feature",
      description: "Run Preview Prisma commands",
    },
  ],
  subcommands: [
    {
      name: "init",
      description: "Set up Prisma for your app",
      options: [
        commonOptions,
        {
          name: "--datasource-provider",
          description: "Define the datasource provider to use",
          args: {
            description: "Choose provider",
            suggestions: [
              "postgresql",
              "mysql",
              "sqlite",
              "sqlserver",
              "mongodb",
              "cockroachdb",
              "prismapostgres",
            ],
            default: "postgresql",
          },
        },
        {
          name: "--generator-provider",
          description: "Define the generator provider to use",
          args: {
            name: "provider",
            suggestions: ["prisma-client", "prisma-client-js"],
            default: "prisma-client",
          },
        },
        {
          name: "--preview-feature",
          description: "Define a preview feature to use",
          isRepeatable: true,
          args: {
            name: "feature",
          },
        },
        {
          name: "--output",
          description: "Define Prisma Client generator output path to use",
          args: {
            name: "path",
            template: "folders",
          },
        },
        {
          name: "--url",
          description: "Define a custom datasource url",
          args: {
            name: "full url",
            template: "filepaths",
          },
        },
        {
          name: "--db",
          description:
            "Provision a fully managed Prisma Postgres database on the Prisma Data Platform",
        },
        {
          name: "--with-model",
          description: "Add example model to created schema file",
        },
        {
          name: "--no-skills",
          description: "Skip installing Prisma agent skills",
        },
      ],
    },
    {
      name: "bootstrap",
      description: "Bootstrap a Prisma Postgres project",
      options: [
        commonOptions,
        ...linkOptions,
        {
          name: "--template",
          description: "Starter template name",
          args: {
            name: "template",
            suggestions: [
              "nextjs",
              "express",
              "hono",
              "fastify",
              "nuxt",
              "sveltekit",
              "remix",
              "react-router-7",
              "astro",
              "nest",
            ],
          },
        },
      ],
    },
    {
      name: "dev",
      description: "Start a local Prisma Postgres server for development",
      options: [
        commonOptions,
        debugOption,
        {
          name: ["-n", "--name"],
          description:
            "Name of the server (helps keep state isolated between different projects)",
          args: {
            name: "name",
            default: "default",
          },
        },
        {
          name: ["-p", "--port"],
          description: "Main port number for the HTTP server",
          args: {
            name: "port",
            default: "51213",
          },
        },
        {
          name: ["-P", "--db-port"],
          description: "Port number for the database server",
          args: {
            name: "port",
            default: "51214",
          },
        },
        {
          name: "--shadow-db-port",
          description: "Port number for the shadow database server",
          args: {
            name: "port",
            default: "51215",
          },
        },
        {
          name: ["-d", "--detach"],
          description: "Run the server in the background",
        },
      ],
      subcommands: [
        {
          name: "ls",
          description: "List available servers",
          options: [debugOption],
        },
        {
          name: "rm",
          description: "Remove servers",
          args: devServerArg,
          options: [
            debugOption,
            {
              name: "--force",
              description: "Stop any running servers before removing them",
              isDangerous: true,
            },
          ],
        },
        {
          name: "start",
          description: "Start one or more stopped servers",
          args: devServerArg,
          options: [debugOption],
        },
        {
          name: "stop",
          description: "Stop servers",
          args: devServerArg,
          options: [debugOption],
        },
      ],
    },
    {
      name: "generate",
      description: "Generate artifacts (e.g. Prisma Client)",
      options: [
        ...baseOptions,
        {
          name: "--sql",
          description: "Generate typed sql module",
        },
        {
          name: "--generator",
          description: "Generator to use (may be provided multiple times)",
          isRepeatable: true,
          args: {
            name: "generator",
          },
        },
        {
          name: "--no-hints",
          description:
            "Hides the hint messages but still outputs errors and warnings",
        },
        {
          name: "--watch",
          description: "Watch the Prisma schema and rerun after a change",
        },
        {
          name: "--require-models",
          description: "Do not allow generating a client without models",
        },
      ],
    },
    {
      name: "studio",
      description: "Browse your data with Prisma Studio",
      options: [
        commonOptions,
        configOption,
        urlOption,
        {
          name: ["-p", "--port"],
          description: "Port to start Studio on",
          args: {
            name: "port",
          },
        },
        {
          name: ["-b", "--browser"],
          description: "Browser to open Studio in",
          args: {
            name: "Browser choice",
            suggestions: ["firefox", "chrome", "safari", "none"],
          },
        },
      ],
    },
    {
      name: "validate",
      description: "Validate your Prisma schema",
      options: baseOptions,
    },
    {
      name: "format",
      description: "Format your Prisma schema",
      options: [
        ...baseOptions,
        {
          name: "--check",
          description: "Check if the schema is formatted",
        },
      ],
    },
    {
      name: "migrate",
      description: "Migrate your database",
      options: [commonOptions, configOption],
      subcommands: [
        {
          name: "dev",
          icon: "💻",
          description:
            "Create a migration from changes in Prisma schema and apply it to the database",
          options: [
            ...baseOptions,
            urlOption,
            {
              name: "--create-only",
              description:
                "Create a new migration but do not apply it. The migration will be empty if there are no changes in Prisma schema",
            },
            {
              name: ["-n", "--name"],
              description:
                "The name of the migration. If no name is provided, the CLI will prompt you",
              args: {
                name: "filename",
                isOptional: true,
              },
            },
          ],
        },
        {
          name: "reset",
          icon: "🔃",
          description:
            "Reset your database and apply all migrations, all data will be lost",
          options: [
            ...baseOptions,
            {
              name: ["-f", "--force"],
              description: "Skip the confirmation prompt",
              isDangerous: true,
            },
          ],
        },
        {
          name: "deploy",
          icon: "🚀",
          description:
            "Apply pending migrations to update the database schema in production/staging",
          options: baseOptions,
        },
        {
          name: "resolve",
          description:
            "Resolve issues with database migrations in deployment databases",
          options: [
            ...baseOptions,
            {
              name: "--applied",
              description: "Record a specific migration as applied",
              args: {
                name: "migration file path",
                template: "filepaths",
              },
            },
            {
              name: "--rolled-back",
              description: "Record a specific migration as rolled back",
              args: {
                name: "migration file path",
                template: "filepaths",
              },
            },
          ],
        },
        {
          name: "status",
          description: "Check the status of your database migrations",
          options: baseOptions,
        },
        {
          name: "diff",
          description:
            "Compares the database schema from two arbitrary sources, and outputs the differences either as a human-readable summary (by default) or an executable script",
          options: [
            commonOptions,
            configOption,
            {
              name: ["-o", "--output"],
              description: "Writes to a file instead of stdout",
              args: {
                name: "filepath",
                template: "filepaths",
              },
            },
            {
              name: "--from-empty",
              description: "Flag to assume from is an empty datamodel",
            },
            {
              name: "--to-empty",
              description: "Flag to assume to is an empty datamodel",
            },
            {
              name: "--from-schema",
              description:
                "Path to a Prisma schema file, uses the 'datamodel' for the diff",
              args: {
                name: "filepath",
                template: "filepaths",
              },
            },
            {
              name: "--to-schema",
              description:
                "Path to a Prisma schema file, uses the 'datamodel' for the diff",
              args: {
                name: "filepath",
                template: "filepaths",
              },
            },
            {
              name: "--from-migrations",
              description: "Path to the Prisma Migrate migrations directory",
              args: {
                name: "folder",
                template: "folders",
              },
            },
            {
              name: "--to-migrations",
              description: "Path to the Prisma Migrate migrations directory",
              args: {
                name: "folder",
                template: "folders",
              },
            },
            {
              name: "--from-config-datasource",
              description:
                "Flag to use the datasource from the Prisma config file",
            },
            {
              name: "--to-config-datasource",
              description:
                "Flag to use the datasource from the Prisma config file",
            },
            {
              name: "--script",
              description:
                "Render a SQL script to stdout instead of the default human readable summary (not supported on MongoDB)",
            },
            {
              name: "--exit-code",
              description:
                "Change the exit code behavior to signal if the diff is empty or not (Empty: 0, Error: 1, Not empty: 2). Default behavior is Success: 0, Error: 1",
            },
          ],
        },
      ],
    },
    {
      name: "db",
      description: "Manage your database schema and lifecycle",
      options: [commonOptions, configOption],
      subcommands: [
        {
          name: "pull",
          description:
            "Pull the state from the database to the Prisma schema using introspection",
          options: [
            ...baseOptions,
            urlOption,
            {
              name: "--force",
              description: "Ignore current Prisma schema file",
              isDangerous: true,
            },
            {
              name: "--print",
              description: "Print the introspected Prisma schema to stdout",
            },
            {
              name: "--composite-type-depth",
              description:
                "Specify the depth for introspecting composite types (e.g. Embedded Documents in MongoDB). Number, default is -1 for infinite depth, 0 = off",
              args: {
                name: "number",
              },
            },
            {
              name: "--schemas",
              description:
                "Specify the database schemas to introspect. This overrides the schemas defined in the datasource block of your Prisma schema",
              args: {
                name: "schemas",
              },
            },
          ],
        },
        {
          name: "push",
          description:
            "Push the state from your Prisma schema to the database during prototyping, without migration files",
          options: [
            ...baseOptions,
            urlOption,
            {
              name: "--force-reset",
              description:
                "Resets the database and then updates the schema - useful if you need to start from scratch due to unexecutable migrations",
              isDangerous: true,
            },
            {
              name: "--accept-data-loss",
              description:
                "Ignore data loss warnings. This option is required if as a result of making the schema changes, data may be lost",
              isDangerous: true,
            },
          ],
        },
        {
          name: "seed",
          isDangerous: true,
          description: "Seed your database",
          options: baseOptions,
        },
        {
          name: "execute",
          isDangerous: true,
          description: "Execute native commands to your database",
          options: [
            commonOptions,
            configOption,
            {
              name: "--file",
              description:
                "Path to a file. The content will be sent as the script to be executed",
              exclusiveOn: ["--stdin"],
              args: {
                name: "filepath",
                template: "filepaths",
              },
            },
            {
              name: "--stdin",
              description:
                "Use the terminal standard input as the script to be executed",
              exclusiveOn: ["--file"],
            },
          ],
        },
      ],
    },
    {
      name: ["version", "-v", "--version"],
      description: "Print current version of Prisma components",
      options: [
        commonOptions,
        configOption,
        {
          name: "--json",
          description: "Output JSON",
        },
      ],
    },
    {
      name: "debug",
      description: "Print information helpful for debugging and bug reports",
      options: baseOptions,
    },
    {
      name: "platform",
      description: "Prisma Data Platform commands",
      options: [commonOptions],
      subcommands: [
        {
          name: "status",
          description: "Show Prisma Data Platform service status",
          options: [
            commonOptions,
            {
              name: "--json",
              description: "Output raw JSON from the status API",
            },
          ],
        },
      ],
    },
    {
      name: "postgres",
      description: "Manage Prisma Postgres databases",
      options: [commonOptions],
      subcommands: [
        {
          name: "link",
          description: "Link a local project to a Prisma Postgres database",
          options: [commonOptions, ...linkOptions],
        },
      ],
    },
    {
      name: "mcp",
      description: "Starts an MCP server to use with AI development tools",
      options: [
        {
          name: "--early-access",
          description: "Enable early access features",
        },
      ],
    },
    {
      name: "complete",
      description: "Generate shell completion scripts",
      args: {
        name: "shell",
        suggestions: ["zsh", "bash", "fish", "powershell"],
      },
    },
  ],
};

export default completionSpec;
