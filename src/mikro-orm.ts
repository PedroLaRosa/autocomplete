// MikroORM CLI v7.2.10 (@mikro-orm/cli, npm "latest" dist-tag, 2026-11-19). Source: static read of the yargs command
// and option definitions in the published @mikro-orm/cli@7.2.10 package (cli.js, CLIConfigurator.js, commands/*.js); not run.

const runOption: Fig.Option = {
  name: ["-r", "--run"],
  description: "Runs queries",
};

const dumpQueriesOption: Fig.Option = {
  name: ["-d", "--dump"],
  description: "Dumps all queries to console",
};

const fkChecksOption: Fig.Option = {
  name: "--fk-checks",
  description: "Do not skip foreign key checks",
};

const schemaOption: Fig.Option = {
  name: "--schema",
  description: "Set the current schema for wildcard schema entities",
  args: { name: "schema" },
};

const dropDbOption: Fig.Option = {
  name: "--drop-db",
  description: "Drop the whole database",
};

// Without a value the default seeder from the ORM config is used
const seedOption = (description: string): Fig.Option => ({
  name: "--seed",
  description,
  args: { name: "seed", isOptional: true },
});

const migrationVersionOptions = (direction: "up" | "down"): Fig.Option[] => [
  {
    name: ["-t", "--to"],
    description: `Migrate ${direction} to specific version`,
    args: { name: "version" },
  },
  {
    name: ["-f", "--from"],
    description: "Start migration from specific version",
    args: { name: "version" },
  },
  {
    name: ["-o", "--only"],
    description: "Migrate only specified versions",
    args: { name: "versions" },
  },
  {
    name: ["-s", "--schema"],
    description:
      "Target schema to run the migration against (PostgreSQL, MySQL, Oracle)",
    args: { name: "schema" },
  },
];

const migrationNameOption: Fig.Option = {
  name: ["-n", "--name"],
  description: "Name of the migration to log/unlog",
  isRequired: true,
  args: { name: "name" },
};

const completionSpec: Fig.Spec = {
  name: "mikro-orm",
  description:
    "TypeScript ORM for Node.js based on Data Mapper, Unit of Work and Identity Map patterns",
  subcommands: [
    {
      name: "cache:clear",
      description: "Clear metadata cache",
    },
    {
      name: "cache:generate",
      description: "Generate metadata cache",
      options: [
        {
          name: "--ts",
          description: "Generate development cache for '.ts' files",
        },
        {
          name: ["-c", "--combined"],
          description:
            "Generate production cache into a single JSON file that can be used with the GeneratedCacheAdapter",
          args: { name: "file", isOptional: true, template: "filepaths" },
        },
      ],
    },
    {
      name: "compile",
      description:
        "Pre-compile optimized entity functions for runtimes that prohibit eval (e.g. Cloudflare Workers)",
      options: [
        {
          name: "--out",
          description:
            "Output path for the generated file (defaults to next to your ORM config)",
          args: { name: "path", template: "filepaths" },
        },
      ],
    },
    {
      name: "discovery:export",
      description:
        "Generate a TypeScript barrel file with entity exports for typed Kysely and ORM config",
      options: [
        {
          name: ["-p", "--path"],
          description: "Glob patterns for entity source files",
          isRepeatable: true,
          args: { name: "glob", template: "filepaths" },
        },
        {
          name: ["-o", "--out"],
          description: "Output file path (defaults to next to ORM config)",
          args: { name: "file", template: "filepaths" },
        },
        {
          name: ["-d", "--dump"],
          description: "Print to stdout instead of writing a file",
        },
      ],
    },
    {
      name: "generate-entities",
      description: "Generate entities based on current database schema",
      options: [
        {
          name: ["-s", "--save"],
          description: "Saves entities to directory defined by --path",
        },
        {
          name: ["-d", "--dump"],
          description: "Dumps all entities to console",
        },
        {
          name: ["-p", "--path"],
          description: "Sets path to directory where to save entities",
          args: { name: "path", template: "folders" },
        },
        {
          name: "--schema",
          description: "Generates entities only for given schema",
          args: { name: "schema" },
        },
      ],
    },
    {
      name: "database:create",
      description: "Create your database if it does not exist",
    },
    {
      name: "database:import",
      description: "Imports the SQL file to the database",
      args: { name: "file", template: "filepaths" },
    },
    {
      name: "seeder:run",
      description: "Seed the database using the seeder class",
      options: [
        {
          name: ["-c", "--class"],
          description: "Seeder class to run",
          args: { name: "class" },
        },
      ],
    },
    {
      name: "seeder:create",
      description: "Create a new seeder class",
      args: {
        name: "seeder",
        description:
          'Name for the seeder class (e.g. "test" will generate "TestSeeder")',
      },
    },
    {
      name: "schema:create",
      description: "Create database schema based on current metadata",
      options: [
        runOption,
        dumpQueriesOption,
        fkChecksOption,
        schemaOption,
        seedOption(
          "Allows to seed the database on create or drop and recreate"
        ),
      ],
    },
    {
      name: "schema:drop",
      description: "Drop database schema based on current metadata",
      options: [
        runOption,
        dumpQueriesOption,
        fkChecksOption,
        schemaOption,
        {
          name: "--drop-migrations-table",
          description: "Drop also migrations table",
        },
        dropDbOption,
      ],
    },
    {
      name: "schema:update",
      description: "Update database schema based on current metadata",
      options: [
        runOption,
        dumpQueriesOption,
        fkChecksOption,
        schemaOption,
        {
          name: "--safe",
          description: "Allows to disable table and column dropping",
        },
        {
          name: "--drop-tables",
          description: "Allows to disable table dropping",
        },
      ],
    },
    {
      name: "schema:fresh",
      description:
        "Drop and recreate database schema based on current metadata",
      options: [
        runOption,
        schemaOption,
        seedOption(
          "Allows to seed the database on create or drop and recreate"
        ),
        dropDbOption,
      ],
    },
    {
      name: "migration:create",
      description: "Create new migration with current schema diff",
      options: [
        { name: ["-b", "--blank"], description: "Create blank migration" },
        { name: ["-i", "--initial"], description: "Create initial migration" },
        dumpQueriesOption,
        {
          name: ["-p", "--path"],
          description: "Sets path to directory where to save entities",
          args: { name: "path", template: "folders" },
        },
        {
          name: ["-n", "--name"],
          description: "Specify custom name for the file",
          args: { name: "name" },
        },
      ],
    },
    {
      name: "migration:up",
      description: "Migrate up to the latest version",
      options: migrationVersionOptions("up"),
    },
    {
      name: "migration:down",
      description: "Migrate one step down",
      options: migrationVersionOptions("down"),
    },
    {
      name: "migration:list",
      description: "List all executed migrations",
    },
    {
      name: "migration:check",
      description:
        "Check if migrations are needed, exits with 1 when schema changes are detected",
    },
    {
      name: "migration:pending",
      description: "List all pending migrations",
    },
    {
      name: "migration:fresh",
      description: "Clear the database and rerun all migrations",
      options: [
        seedOption(
          "Allows to seed the database after dropping it and rerunning all migrations"
        ),
        dropDbOption,
      ],
    },
    {
      name: "migration:log",
      description: "Mark a migration as executed without running it",
      options: [migrationNameOption],
    },
    {
      name: "migration:unlog",
      description:
        "Remove a migration from the executed list without reverting it",
      options: [migrationNameOption],
    },
    {
      name: "migration:rollup",
      description: "Combine multiple migrations into a single migration",
    },
    {
      name: "debug",
      description: "Debug CLI configuration",
    },
  ],
  options: [
    {
      name: "--config",
      description: "Set path to the ORM configuration file",
      isPersistent: true,
      isRepeatable: true,
      args: { name: "path", template: "filepaths" },
    },
    {
      name: ["--contextName", "--context"],
      description:
        "Set name of config to load out of the ORM configuration file, used when config file exports an array or a function",
      isPersistent: true,
      args: { name: "name" },
    },
    {
      name: ["-q", "--quiet"],
      description: "Do not show any auxiliary output",
      isPersistent: true,
    },
    {
      name: ["-v", "--version"],
      description: "Show version number",
      isPersistent: true,
    },
    {
      name: ["-h", "--help"],
      description: "Show help",
      isPersistent: true,
    },
  ],
};

export default completionSpec;
