// knex v3.3.0 (GitHub release, 2026-06-26). Source: bin/cli.js and package.json on knex/knex master
const extensionOption = (what: string): Fig.Option => ({
  name: "-x",
  description: `Specify the ${what} extension (default js)`,
  args: {
    name: "extension",
    suggestions: ["js", "mjs", "coffee", "ts", "eg", "ls"],
    isOptional: true,
  },
});

const stubOption = (what: string, dir: string): Fig.Option => ({
  name: "--stub",
  description: `Specify the ${what} stub to use. If using <name> the file must be located in config.${dir}.directory`,
  args: { name: "relative/path/from/knexfile|name", template: "filepaths" },
});

const disableTransactions: Fig.Option = {
  name: "--disable-transactions",
  description: "Run migrations without an implicit transaction",
};

const verbose: Fig.Option = {
  name: "--verbose",
  description: "Verbose output",
};

const migrationName: Fig.Arg = { name: "name" };

const completionSpec: Fig.Spec = {
  name: "knex",
  description: "SQL query builder for JavaScript",
  subcommands: [
    {
      name: "init",
      description: "Create a fresh knexfile",
      options: [extensionOption("knexfile")],
    },
    {
      name: "migrate:make",
      description: "Create a named migration file",
      args: { name: "name" },
      options: [extensionOption("stub"), stubOption("migration", "migrations")],
    },
    {
      name: "migrate:latest",
      description: "Run all migrations that have not yet been run",
      options: [disableTransactions, verbose],
    },
    {
      name: "migrate:up",
      description:
        "Run the next or the specified migration that has not yet been run",
      args: { ...migrationName, isOptional: true },
      options: [disableTransactions],
    },
    {
      name: "migrate:rollback",
      description: "Rollback the last batch of migrations performed",
      options: [
        { name: "--all", description: "Rollback all completed migrations" },
        disableTransactions,
        verbose,
      ],
    },
    {
      name: "migrate:down",
      description:
        "Undo the last or the specified migration that was already run",
      args: { ...migrationName, isOptional: true },
      options: [disableTransactions],
    },
    {
      name: "migrate:to",
      description:
        "Run all migrations up to and including the specified migration",
      args: migrationName,
      options: [disableTransactions],
    },
    {
      name: "migrate:before",
      description:
        "Run all migrations before the specified migration (exclusive)",
      args: migrationName,
      options: [disableTransactions],
    },
    {
      name: "migrate:currentVersion",
      description: "View the current version for the migration",
    },
    {
      name: ["migrate:list", "migrate:status"],
      description: "List all migrations files with status",
    },
    {
      name: "migrate:unlock",
      description: "Forcibly unlocks the migrations lock table",
    },
    {
      name: "seed:make",
      description: "Create a named seed file",
      args: { name: "name" },
      options: [
        extensionOption("stub"),
        stubOption("seed", "seeds"),
        {
          name: "--timestamp-filename-prefix",
          description:
            "Enable a timestamp prefix on name of generated seed files",
        },
      ],
    },
    {
      name: "seed:run",
      description: "Run seed files",
      options: [
        verbose,
        { name: "--specific", description: "Run specific seed file" },
      ],
    },
    {
      name: "help",
      description: "Display help for command",
      args: { name: "command", isOptional: true, template: "help" },
    },
  ],
  options: [
    {
      name: ["-V", "--version"],
      description: "Output the version number",
    },
    {
      name: "--debug",
      description: "Run with debugging",
      isPersistent: true,
    },
    {
      name: "--knexfile",
      description: "Specify the knexfile path",
      isPersistent: true,
      args: { name: "path", template: "filepaths", isOptional: true },
    },
    {
      name: "--knexpath",
      description: "Specify the path to knex instance",
      isPersistent: true,
      args: { name: "path", template: "filepaths", isOptional: true },
    },
    {
      name: "--cwd",
      description: "Specify the working directory",
      isPersistent: true,
      args: { name: "path", template: "folders", isOptional: true },
    },
    {
      name: "--client",
      description: "Set DB client",
      isPersistent: true,
      args: { name: "name", isOptional: true },
    },
    {
      name: "--connection",
      description: "Set DB connection",
      isPersistent: true,
      args: { name: "address", isOptional: true },
    },
    {
      name: "--migrations-directory",
      description: "Set migrations directory",
      isPersistent: true,
      args: { name: "path", template: "folders", isOptional: true },
    },
    {
      name: "--migrations-table-name",
      description: "Set migrations table name",
      isPersistent: true,
      args: { name: "name", isOptional: true },
    },
    {
      name: "--env",
      // ponytail: "default:" inside a string broke the skypack parser (9aedebba)
      description:
        "Environment, default is process.env.NODE_ENV || development",
      isPersistent: true,
      args: { name: "name", isOptional: true },
    },
    {
      name: "--esm",
      description: "Enable ESM interop",
      isPersistent: true,
    },
    {
      name: "--specific",
      description: "Specify one seed file to execute",
      isPersistent: true,
      args: { name: "path", template: "filepaths", isOptional: true },
    },
    {
      name: "--timestamp-filename-prefix",
      description: "Enable a timestamp prefix on name of generated seed files",
      isPersistent: true,
    },
    {
      name: ["-h", "--help"],
      description: "Display help for command",
      isPersistent: true,
    },
  ],
};

export default completionSpec;
