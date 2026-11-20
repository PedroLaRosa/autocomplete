// TypeORM CLI v1.1.3 (npm latest, 2026-11-19). Source: installed typeorm@1.1.3 from npm, ran `typeorm --help`
// and `typeorm <command> --help` for every command, and read the yargs builders in typeorm/commands/*.js.
// The typeorm-ts-node-commonjs and typeorm-ts-node-esm wrappers (same commands) are not listed separately.
const cliOptions: Record<string, Fig.Option> = {
  help: { name: ["-h", "--help"], description: "Show help for command" },
  version: { name: ["-v", "--version"], description: "Show the version" },
  dataSource: {
    name: ["-d", "--dataSource"],
    description: "Path to the file where your DataSource instance is defined",
    args: { name: "file", template: "filepaths" },
    isRequired: true,
  },
  outputJs: {
    name: ["-o", "--outputJs"],
    description:
      "Generate a migration file on Javascript instead of Typescript",
  },
  esm: {
    name: "--esm",
    description: "Generate a migration file on ESM instead of CommonJS",
  },
  timestamp: {
    name: ["-t", "--timestamp"],
    description: "Custom timestamp for the migration name",
    args: { name: "timestamp" },
  },
};

const transactionOption = (action: "run" | "revert"): Fig.Option => ({
  name: ["-t", "--transaction"],
  description: `Indicates if transaction should be used or not for migration ${action} (enabled by default)`,
  args: {
    name: "mode",
    default: "default",
    suggestions: [
      { name: "default", description: "Use the data source's configuration" },
      { name: "all", description: "Run everything in a single transaction" },
      { name: "each", description: "Use one transaction per migration" },
      { name: "none", description: "Do not use transactions" },
    ],
  },
});

const pathArg = (what: string): Fig.Arg => ({
  name: "path",
  description: `Path of the ${what} file`,
  template: "filepaths",
});

// Commands that only need the data source option
const dataSourceCommand = (
  name: string,
  description: string
): Fig.Subcommand => ({
  name,
  description,
  options: [cliOptions.help, cliOptions.dataSource, cliOptions.version],
});

const completionSpec: Fig.Spec = {
  name: "typeorm",
  description: "TypeORM CLI",
  subcommands: [
    dataSourceCommand(
      "schema:sync",
      "Synchronizes your entities with database schema"
    ),
    dataSourceCommand(
      "schema:log",
      "Shows sql to be executed by schema:sync command"
    ),
    dataSourceCommand(
      "schema:drop",
      "Drops all tables in the database on your default dataSource"
    ),
    {
      name: "query",
      description: "Executes given SQL query on a default dataSource",
      args: {
        name: "query",
        description: "The SQL Query to run",
        isOptional: true,
      },
      options: [cliOptions.help, cliOptions.dataSource, cliOptions.version],
    },
    {
      name: "entity:create",
      description: "Generates a new entity",
      args: pathArg("entity"),
      options: [cliOptions.help, cliOptions.version],
    },
    {
      name: "subscriber:create",
      description: "Generates a new subscriber",
      args: pathArg("subscriber"),
      options: [cliOptions.help, cliOptions.version],
    },
    {
      name: "migration:create",
      description: "Creates a new migration file",
      args: pathArg("migration"),
      options: [
        cliOptions.help,
        cliOptions.outputJs,
        cliOptions.esm,
        cliOptions.timestamp,
        cliOptions.version,
      ],
    },
    {
      name: "migration:generate",
      description:
        "Generates a new migration file with sql needs to be executed to update schema",
      args: pathArg("migration"),
      options: [
        cliOptions.help,
        cliOptions.dataSource,
        {
          name: ["-p", "--pretty"],
          description: "Pretty-print generated SQL",
        },
        cliOptions.outputJs,
        cliOptions.esm,
        {
          name: ["--dr", "--dryrun"],
          description:
            "Prints out the contents of the migration instead of writing it to a file",
        },
        {
          name: ["--ch", "--check"],
          description:
            "Verifies that the current database is up to date and that no migrations are needed (otherwise exits with code 1)",
        },
        cliOptions.timestamp,
        cliOptions.version,
      ],
    },
    {
      name: "migration:run",
      description: "Runs all pending migrations",
      options: [
        cliOptions.help,
        cliOptions.dataSource,
        transactionOption("run"),
        {
          name: ["-f", "--fake"],
          description:
            "Fakes running the migrations if table schema has already been changed manually or externally (e.g. through another project)",
        },
        cliOptions.version,
      ],
    },
    dataSourceCommand(
      "migration:show",
      "Show all migrations and whether they have been run or not"
    ),
    {
      name: "migration:revert",
      description: "Reverts last executed migration",
      options: [
        cliOptions.help,
        cliOptions.dataSource,
        transactionOption("revert"),
        {
          name: ["-f", "--fake"],
          description: "Fakes reverting the migration",
        },
        cliOptions.version,
      ],
    },
    {
      name: "version",
      description: "Prints TypeORM version this project uses",
      options: [cliOptions.help, cliOptions.version],
    },
    dataSourceCommand(
      "cache:clear",
      "Clears all data stored in query runner cache"
    ),
    {
      name: "init",
      description:
        "Generates initial TypeORM project structure (inside a directory called as name, or the current directory when no name is given)",
      options: [
        cliOptions.help,
        {
          name: ["-n", "--name"],
          description: "Name of the project directory",
          args: { name: "name" },
        },
        {
          name: ["--db", "--database"],
          description: "Database type you'll use in your project",
          args: {
            name: "database",
            suggestions: [
              "postgres",
              "mysql",
              "mariadb",
              "better-sqlite3",
              "mssql",
              "oracle",
              "mongodb",
              "cockroachdb",
              "spanner",
            ],
          },
        },
        {
          name: "--express",
          description:
            "Indicates if express server sample code should be included in the project",
        },
        {
          name: "--docker",
          description:
            "Set to true if docker-compose must be generated as well",
        },
        {
          name: ["--ms", "--module"],
          description: "Module system to use for project",
          args: {
            name: "module",
            default: "commonjs",
            suggestions: ["commonjs", "esm"],
          },
        },
        cliOptions.version,
      ],
    },
  ],
  options: [cliOptions.help, cliOptions.version],
};

export default completionSpec;
