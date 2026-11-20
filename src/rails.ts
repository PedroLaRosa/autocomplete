// Rails v8.1.4.1 (RubyGems rails gem and git tag v8.1.4.1, released 2026-11-04; re-verified 2026-11-20). Source: railties v8.1.4.1 lib/rails/commands/* (all Thor commands), generators (app_base.rb, app_generator.rb, plugin_generator.rb, base.rb), commands/help/USAGE; rake tasks from railties/activerecord v8.1.4.1 and rake 13.4.2 lib/rake/application.rb (rake CLI options). Not run: read statically
import { filepaths } from "@tabsmith/autocomplete-generators";

const RB_ICON =
  "https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons/file_type_ruby.svg";

// Thor runtime options shared by `rails new` and `rails generate`
const runtimeOptions: Fig.Option[] = [
  {
    name: ["-f", "--force"],
    description: "Overwrite files that already exist",
  },
  {
    name: ["-p", "--pretend"],
    description: "Run but do not make any changes",
  },
  {
    name: ["-q", "--quiet"],
    description: "Suppress status output",
  },
  {
    name: ["-s", "--skip"],
    description: "Skip files that already exist",
  },
  {
    name: "--skip-namespace",
    description: "Skip namespace (affects only isolated engines)",
  },
  {
    name: "--skip-collision-check",
    description: "Skip collision check",
  },
];

const environmentOption = (command: string): Fig.Option => ({
  name: ["-e", "--environment"],
  description: `The environment to run \`${command}\` in (e.g. test / development / production)`,
  args: { name: "environment" },
});

const rubyOption: Fig.Option = {
  name: ["-r", "--ruby"],
  description: "Path to the Ruby binary of your choice",
  args: { name: "path" },
};

const helpOption: Fig.Option = {
  name: ["-h", "--help"],
  description: "Show this help message and quit",
};

// Options shared by the application and plugin generators (Rails::Generators::AppBase)
const sharedAppOptions = (kind: "application" | "plugin"): Fig.Option[] => [
  {
    name: ["-n", "--name"],
    description: "Name of the app",
    args: { name: "name" },
  },
  {
    name: ["-m", "--template"],
    description: `Path to some ${kind} template (can be a filesystem path or URL)`,
    args: { name: "template" },
  },
  {
    name: ["-d", "--database"],
    description: "Preconfigure for selected database - defaults to sqlite3",
    args: {
      name: "database",
      suggestions: [
        "mysql",
        "trilogy",
        "postgresql",
        "sqlite3",
        "mariadb-mysql",
        "mariadb-trilogy",
      ],
    },
  },
  {
    name: ["-G", "--skip-git"],
    description: "Skip git init, .gitignore and .gitattributes",
  },
  {
    name: "--skip-docker",
    description: "Skip Dockerfile, .dockerignore and bin/docker-entrypoint",
  },
  {
    name: "--skip-keeps",
    description: "Skip source control .keep files",
  },
  {
    name: ["-M", "--skip-action-mailer"],
    description: "Skip Action Mailer files",
  },
  {
    name: "--skip-action-mailbox",
    description: "Skip Action Mailbox gem",
  },
  {
    name: "--skip-action-text",
    description: "Skip Action Text gem",
  },
  {
    name: ["-O", "--skip-active-record"],
    description: "Skip Active Record files",
  },
  {
    name: "--skip-active-job",
    description: "Skip Active Job",
  },
  {
    name: "--skip-active-storage",
    description: "Skip Active Storage files",
  },
  {
    name: ["-C", "--skip-action-cable"],
    description: "Skip Action Cable files",
  },
  {
    name: ["-A", "--skip-asset-pipeline"],
    description: "Skip the asset pipeline setup",
  },
  {
    name: ["-J", "--skip-javascript", "--skip-js"],
    description: "Skip JavaScript files",
  },
  {
    name: "--skip-hotwire",
    description: "Skip Hotwire integration",
  },
  {
    name: "--skip-jbuilder",
    description: "Skip jbuilder gem",
  },
  {
    name: ["-T", "--skip-test"],
    description: "Skip test files",
  },
  {
    name: "--skip-system-test",
    description: "Skip system test files",
  },
  {
    name: "--skip-bootsnap",
    description: "Skip bootsnap gem",
  },
  {
    name: "--skip-dev-gems",
    description: "Skip development gems (e.g., web-console)",
  },
  {
    name: "--skip-thruster",
    description: "Skip Thruster setup",
  },
  {
    name: "--skip-rubocop",
    description: "Skip RuboCop setup",
  },
  {
    name: "--skip-brakeman",
    description: "Skip brakeman setup",
  },
  {
    name: "--skip-bundler-audit",
    description: "Skip bundler-audit setup",
  },
  {
    name: "--skip-ci",
    description: "Skip GitHub CI files",
  },
  {
    name: "--skip-kamal",
    description: "Skip Kamal setup",
  },
  {
    name: "--skip-solid",
    description: "Skip Solid Cache, Queue, and Cable setup",
  },
  {
    name: "--dev",
    description: `Set up the ${kind} with Gemfile pointing to your Rails checkout`,
  },
  {
    name: "--devcontainer",
    description: "Generate devcontainer files",
  },
  {
    name: "--edge",
    description: `Set up the ${kind} with a Gemfile pointing to the current stable branch on the Rails repository`,
  },
  {
    name: ["--main", "--master"],
    description: `Set up the ${kind} with Gemfile pointing to Rails repository main branch`,
  },
  {
    name: "--rc",
    description:
      "Path to file containing extra configuration options for rails command",
    args: { name: "path", template: "filepaths" },
  },
  {
    name: "--no-rc",
    description:
      "Skip loading of extra configuration options from .railsrc file",
  },
];

const newCommand: Fig.Subcommand = {
  name: "new",
  description: "Create a new rails application",
  args: {
    name: "path",
    description:
      "Path to directory to be created containing the new application",
  },
  options: [
    rubyOption,
    ...sharedAppOptions("application"),
    {
      name: "--api",
      description: "Preconfigure smaller stack for API only apps",
    },
    {
      name: "--minimal",
      description: "Preconfigure a minimal rails app",
    },
    {
      name: ["-j", "--javascript", "--js"],
      description: "Choose JavaScript approach - defaults to importmap",
      args: {
        name: "approach",
        suggestions: ["importmap", "bun", "webpack", "esbuild", "rollup"],
      },
    },
    {
      name: ["-c", "--css"],
      description:
        "Choose CSS processor. Check https://github.com/rails/cssbundling-rails for more options",
      args: {
        name: "processor",
        suggestions: ["tailwind", "bootstrap", "bulma", "postcss", "sass"],
      },
    },
    {
      name: ["-B", "--skip-bundle"],
      description: "Don't run bundle install",
    },
    {
      name: "--skip-decrypted-diffs",
      description:
        "Don't configure git to show decrypted diffs of encrypted credentials",
    },
    ...runtimeOptions,
    helpOption,
    {
      name: ["-v", "--version"],
      description: "Show Rails version number and quit",
    },
  ],
};

const pluginCommand: Fig.Subcommand = {
  name: "plugin",
  description: "Create a new Rails railtie or engine",
  subcommands: [
    {
      name: "new",
      description: "Create a new Rails railtie or engine",
      args: {
        name: "path",
        description:
          "Path to directory to be created containing the new plugin",
      },
      options: [
        rubyOption,
        ...sharedAppOptions("plugin"),
        {
          name: "--dummy-path",
          description: "Create dummy application at given path",
          args: { name: "path", template: "folders", default: "test/dummy" },
        },
        {
          name: "--full",
          description:
            "Generate a rails engine with bundled Rails application for testing",
        },
        {
          name: "--mountable",
          description: "Generate mountable isolated engine",
        },
        {
          name: "--skip-gemspec",
          description: "Skip gemspec file",
        },
        {
          name: "--skip-gemfile-entry",
          description:
            "If creating plugin in application's directory skip adding entry to Gemfile",
        },
        {
          name: "--api",
          description: "Generate a smaller stack for API application plugins",
        },
        ...runtimeOptions,
        helpOption,
      ],
    },
  ],
};

// Rake CLI options (rake 13.4.2) accepted by every rake-backed `rails` task
const rakeOutArg: Fig.Arg = {
  name: "out",
  description: "Output stream: stderr (default) or stdout",
  isOptional: true,
  suggestions: ["stderr", "stdout"],
};
const rakePatternArg: Fig.Arg = { name: "pattern", isOptional: true };
const rakeOptions: Fig.Option[] = [
  {
    name: ["-A", "--all"],
    description:
      "Show all tasks, even uncommented ones (in combination with -T or -D)",
  },
  {
    name: "--backtrace",
    description: "Enable full backtrace",
    requiresSeparator: true,
    args: rakeOutArg,
  },
  {
    name: ["-B", "--build-all"],
    description:
      "Build all prerequisites, including those which are up-to-date",
  },
  {
    name: ["-C", "--directory"],
    description: "Change to DIRECTORY before doing anything",
    args: { name: "directory", template: "folders", isOptional: true },
  },
  {
    name: "--comments",
    description: "Show commented tasks only",
  },
  {
    name: ["-D", "--describe"],
    description: "Describe the tasks (matching optional PATTERN), then exit",
    args: rakePatternArg,
  },
  {
    name: ["-e", "--execute"],
    description: "Execute some Ruby code and exit",
    args: { name: "code" },
  },
  {
    name: ["-E", "--execute-continue"],
    description:
      "Execute some Ruby code, then continue with normal task processing",
    args: { name: "code" },
  },
  {
    name: ["-f", "--rakefile"],
    description: "Use FILENAME as the rakefile to search for",
    args: { name: "filename", template: "filepaths", isOptional: true },
  },
  {
    name: ["-G", "--no-system", "--nosystem"],
    description:
      "Use standard project Rakefile search paths, ignore system wide rakefiles",
  },
  {
    name: ["-g", "--system"],
    description:
      "Use system wide (global) rakefiles (usually '~/.rake/*.rake')",
  },
  {
    name: ["-I", "--libdir"],
    description: "Include LIBDIR in the search path for required modules",
    args: { name: "libdir", template: "folders" },
  },
  {
    name: "--job-stats",
    description:
      "Display job statistics. LEVEL=history displays a complete job list",
    args: { name: "level", isOptional: true },
  },
  {
    name: ["-j", "--jobs"],
    description:
      "Specifies the maximum number of tasks to execute in parallel (default is number of CPU cores + 4)",
    args: { name: "number", isOptional: true },
  },
  {
    name: ["-m", "--multitask"],
    description: "Treat all tasks as multitasks",
  },
  {
    name: ["-n", "--dry-run"],
    description: "Do a dry run without executing actions",
  },
  {
    name: ["-N", "--no-search", "--nosearch"],
    description: "Do not search parent directories for the Rakefile",
  },
  {
    name: ["-P", "--prereqs"],
    description: "Display the tasks and dependencies, then exit",
  },
  {
    name: ["-p", "--execute-print"],
    description: "Execute some Ruby code, print the result, then exit",
    args: { name: "code" },
  },
  {
    name: ["-q", "--quiet"],
    description: "Do not log messages to standard output",
  },
  {
    name: ["-R", "--rakelibdir", "--rakelib"],
    description:
      "Auto-import any .rake files in RAKELIBDIR (default is 'rakelib')",
    args: { name: "rakelibdir", template: "folders" },
  },
  {
    name: ["-r", "--require"],
    description: "Require MODULE before executing rakefile",
    args: { name: "module" },
  },
  {
    name: "--rules",
    description: "Trace the rules resolution",
  },
  {
    name: ["-s", "--silent"],
    description:
      "Like --quiet, but also suppresses the 'in directory' announcement",
  },
  {
    name: "--suppress-backtrace",
    description:
      "Suppress backtrace lines matching regexp PATTERN. Ignored if --trace is on",
    args: { name: "pattern" },
  },
  {
    name: ["-T", "--tasks"],
    description:
      "Display the tasks (matching optional PATTERN) with descriptions, then exit. -AT combination displays all the tasks, including those without descriptions",
    args: rakePatternArg,
  },
  {
    name: "-t",
    description: "Turn on invoke/execute tracing, enable full backtrace",
  },
  {
    name: "--trace",
    description: "Turn on invoke/execute tracing, enable full backtrace",
    requiresSeparator: true,
    args: rakeOutArg,
  },
  {
    name: ["-v", "--verbose"],
    description: "Log message to standard output",
  },
  {
    name: ["-V", "--version"],
    description: "Display the program version",
  },
  {
    name: ["-W", "--where"],
    description: "Describe the tasks (matching optional PATTERN), then exit",
    args: rakePatternArg,
  },
  {
    name: ["-X", "--no-deprecation-warnings"],
    description: "Disable the deprecation warnings",
  },
  {
    name: ["-h", "--help"],
    description: "Display this help message",
  },
];

const rakeTask = (name: string, description: string): Fig.Subcommand => ({
  name,
  description,
  options: rakeOptions,
});

// `rails generate` and `rails destroy` take the same generator argument
const generatorArgs: Fig.Arg[] = [
  {
    name: "generator",
    filterStrategy: "fuzzy",
    suggestions: ["model", "resource", "scaffold", "controller", "migration"],
    generators: {
      script: ["rails", "g", "--help"],
      cache: {
        cacheByDirectory: true,
        strategy: "stale-while-revalidate",
      },
      postProcess(out) {
        const lines = out.split("Rails:")[1].trim().split("\n");

        type GeneratorCommand = [string, string[]];

        const dict: GeneratorCommand[] = ["Rails:", ...lines].reduce(
          (arr, line) => {
            if (line.endsWith(":"))
              return [...arr, [line.replace(":", ""), []]];

            const trimmed = line.trim();
            if (!trimmed.length) return arr;
            arr[arr.length - 1][1].push(line.trim());
            return arr;
          },
          []
        );

        return dict.reduce<Fig.Suggestion[]>((arr, [plugin, commands]) => {
          return [
            ...arr,
            ...commands.map((name) => ({
              insertValue: name,
              name: `${name} (${plugin})`,
            })),
          ];
        }, []);
      },
    },
  },
  {
    name: "args",
    isVariadic: true,
  },
];

const generatorOptions: Fig.Option[] = [
  {
    name: ["-h", "--help"],
    description: "Print generator's options and usage",
  },
  ...runtimeOptions,
];

const testArgs: Fig.Arg = {
  name: "files or directories",
  generators: filepaths({
    extensions: ["rb"],
    editFileSuggestions: { icon: RB_ICON },
  }),
  isOptional: true,
  isVariadic: true,
};

// `rails test:<folder>` shortcuts (Rails::Command::TestCommand)
const testSubcommands: Fig.Subcommand[] = [
  ["all", "Run all tests, including system tests"],
  [
    "functionals",
    "Run tests in test/controllers, test/mailers, and test/functional",
  ],
  ["units", "Run tests in test/models, test/helpers, and test/unit"],
  ["system", "Run system tests only"],
  ["generators", "Run tests in test/lib/generators"],
  ...[
    "models",
    "helpers",
    "channels",
    "controllers",
    "mailers",
    "integration",
    "jobs",
    "mailboxes",
  ].map((folder) => [folder, `Run tests in test/${folder}`]),
].map(([name, description]) => ({
  name: `test:${name}`,
  description,
  args: testArgs,
}));

const defaultCommands: Fig.Subcommand[] = [
  {
    name: ["c", "console"],
    description: "Interact with your Rails application from the command line",
    options: [
      {
        name: ["-s", "--sandbox"],
        description: "Rollback database modifications on exit",
      },
      environmentOption("console"),
    ],
  },
  {
    name: ["s", "server"],
    description:
      "Launch a web server to access your application through a browser",
    options: [
      environmentOption("server"),
      {
        name: ["-p", "--port"],
        description: "Run Rails on the specified port - defaults to 3000",
        args: { name: "port" },
      },
      {
        name: ["-b", "--binding"],
        description:
          "Bind Rails to the specified IP - defaults to 'localhost' in development and '0.0.0.0' in other environments",
        args: { name: "IP" },
      },
      {
        name: ["-c", "--config"],
        description:
          "Use a custom rackup configuration - defaults to config.ru",
        args: { name: "file", template: "filepaths" },
      },
      {
        name: ["-d", "--daemon"],
        description: "Run server as a Daemon",
      },
      {
        name: ["-u", "--using"],
        description:
          "Specify the Rack server used to run the application (thin/puma/webrick)",
        args: { name: "server" },
      },
      {
        name: ["-P", "--pid"],
        description: "Specify the PID file - defaults to tmp/pids/server.pid",
        args: { name: "PID", template: "filepaths" },
      },
      {
        name: ["-C", "--dev-caching"],
        description: "Specify whether to perform caching in development",
      },
      {
        name: "--early-hints",
        description: "Enable HTTP/2 early hints",
      },
      {
        name: "--log-to-stdout",
        description:
          "Whether to log to stdout. Enabled by default in development when not daemonized",
      },
    ],
  },
  {
    name: ["db", "dbconsole"],
    description:
      "Start a console for the database specified in config/database.yml",
    options: [
      environmentOption("dbconsole"),
      {
        name: "--mode",
        description:
          "Automatically put the sqlite3 database in the specified mode",
        args: {
          name: "mode",
          suggestions: ["html", "list", "line", "column"],
        },
      },
      {
        name: ["-p", "--include-password"],
        description: "Automatically provide the password from database.yml",
      },
      {
        name: "--header",
        description: "Turn on column headers (sqlite3 only)",
      },
      {
        name: ["--db", "--database"],
        description: "Specify the database to use",
        args: { name: "database" },
      },
    ],
  },
  {
    name: "notes",
    description:
      "Show comments in your code annotated with FIXME, OPTIMIZE, and TODO",
    options: [
      {
        name: ["-a", "--annotations"],
        description: "Filter by specific annotations, e.g. Foobar TODO",
        requiresSeparator: true,
        args: {
          name: "annotations",
          isVariadic: true,
          description: "Filter by specific annotations, e.g. Foobar TODO",
        },
      },
    ],
  },
  {
    name: ["g", "generate"],
    description: "Use templates to generate Rails resources",
    args: generatorArgs,
    options: generatorOptions,
  },
  {
    name: ["d", "destroy"],
    description: "Remove code generated by `rails generate`",
    args: generatorArgs,
    options: generatorOptions,
  },
  {
    name: ["r", "runner"],
    description: "Run Ruby code in the context of your application",
    args: [
      {
        name: "code or file",
        description:
          "Ruby code, path to a Ruby file, or - to read the script from stdin",
        template: "filepaths",
      },
      {
        name: "args",
        description: "Arguments made available to the script in ARGV",
        isVariadic: true,
        isOptional: true,
      },
    ],
    options: [
      environmentOption("runner"),
      {
        name: ["-w", "--skip-executor"],
        description: "Don't wrap with Rails Executor",
      },
    ],
  },
  {
    name: "routes",
    description: "List all of the routes defined in your application",
    options: [
      {
        name: ["-c", "--controller"],
        description:
          "Filter by a specific controller, e.g. PostsController or Admin::PostsController",
        args: { name: "controller" },
      },
      {
        name: ["-g", "--grep"],
        description: "Grep routes by a specific pattern",
        args: { name: "pattern" },
      },
      {
        name: ["-E", "--expanded"],
        description: "Print routes expanded vertically with parts explained",
      },
      {
        name: ["-u", "--unused"],
        description: "Print unused routes",
      },
    ],
  },
  {
    name: ["t", "test"],
    description: "Run your test suite",
    args: testArgs,
    async generateSpec(_, executeShellCommand) {
      const { stdout: helpText } = await executeShellCommand({
        command: "rails",
        args: ["test", "--help"],
      });
      const argRegex =
        /(?:(-[a-zA-Z]), )?(--[^ ]+?)[ =]([A-Z_]+)?[ \r\n]+([^\n]+)/g;

      const options = Array.from(helpText.matchAll(argRegex)).map((match) => {
        const [_match, _short, long, arg, description] = match;
        return {
          name: long.replace(/\[.+\]/g, ""),
          description,
          args: { name: arg },
        };
      });

      return { name: "test", options };
    },
  },
  ...testSubcommands,
  newCommand,
  pluginCommand,
  {
    name: "about",
    description: "List versions of all Rails frameworks and the environment",
  },
  {
    name: "app:update",
    description:
      "Update configs and some other initially generated files (or use just update:configs or update:bin)",
    options: runtimeOptions,
  },
  {
    name: "boot",
    description: "Boot the application and exit",
    options: [environmentOption("boot")],
  },
  {
    name: "credentials:edit",
    description:
      "Open the decrypted credentials in `$VISUAL` or `$EDITOR` for editing",
    options: [environmentOption("credentials")],
  },
  {
    name: "credentials:show",
    description: "Show the decrypted credentials",
    options: [environmentOption("credentials")],
  },
  {
    name: "credentials:diff",
    description: "Enroll/disenroll in decrypted diffs of credentials using git",
    args: {
      name: "path",
      description: "Credentials file to show decrypted",
      template: "filepaths",
      isOptional: true,
    },
    options: [
      environmentOption("credentials"),
      {
        name: "--enroll",
        description:
          "Enroll project in credentials file diffing with `git diff`",
      },
      {
        name: "--disenroll",
        description: "Disenroll project from credentials file diffing",
      },
    ],
  },
  {
    name: "credentials:fetch",
    description: "Fetch a value in the decrypted credentials",
    args: {
      name: "path",
      description: "Dot-separated path of the value to fetch",
    },
    options: [environmentOption("credentials")],
  },
  {
    name: "dev:cache",
    description: "Toggle Action Controller development mode caching on/off",
  },
  {
    name: "devcontainer",
    description:
      "Generate a Dev Container setup based on current application configuration",
  },
  ...(["edit", "show"] as const).map((action): Fig.Subcommand => ({
    name: `encrypted:${action}`,
    description:
      action === "edit"
        ? "Open the decrypted file in `$VISUAL` or `$EDITOR` for editing"
        : "Show the decrypted contents of the file",
    args: { name: "file", template: "filepaths" },
    options: [
      {
        name: ["-k", "--key"],
        description: "The Rails.root relative path to the encryption key",
        args: {
          name: "path",
          template: "filepaths",
          default: "config/master.key",
        },
      },
    ],
  })),
  {
    name: "initializers",
    description:
      "Print out all defined initializers in the order they are invoked by Rails",
    options: [environmentOption("initializers")],
  },
  {
    name: "middleware",
    description: "Print out your Rack middleware stack",
  },
  {
    name: "restart",
    description: "Restart app by touching tmp/restart.txt",
  },
  {
    name: "secret",
    description:
      "Generate a cryptographically secure secret key (this is typically used to generate a secret for cookie sessions)",
  },
  {
    name: "stats",
    description:
      "Report code statistics (KLOCs, etc) from the application or engine",
  },
  {
    name: "version",
    description: "Show the Rails version",
  },
  // Rake tasks from railties and Active Record
  rakeTask(
    "app:template",
    "Apply the template supplied by LOCATION=(/path/to/template) or URL"
  ),
  rakeTask(
    "db:create",
    "Create the database from DATABASE_URL or config/database.yml for the current RAILS_ENV"
  ),
  rakeTask(
    "db:drop",
    "Drop the database from DATABASE_URL or config/database.yml for the current RAILS_ENV"
  ),
  rakeTask(
    "db:encryption:init",
    "Generate a set of keys for configuring Active Record encryption in a given environment"
  ),
  rakeTask("db:environment:set", "Set the environment value for the database"),
  rakeTask(
    "db:fixtures:load",
    "Load fixtures into the current environment's database"
  ),
  rakeTask(
    "db:migrate",
    "Migrate the database (options: VERSION=x, VERBOSE=false, SCOPE=blog)"
  ),
  rakeTask("db:migrate:down", 'Run the "down" for a given migration VERSION'),
  rakeTask(
    "db:migrate:redo",
    "Roll back the database one migration and re-migrate up (options: STEP=x, VERSION=x)"
  ),
  rakeTask(
    "db:migrate:reset",
    "Resets your database using your migrations for the current environment"
  ),
  rakeTask("db:migrate:status", "Display status of migrations"),
  rakeTask("db:migrate:up", 'Run the "up" for a given migration VERSION'),
  rakeTask(
    "db:prepare",
    "Run setup if database does not exist, or run migrations if it does"
  ),
  rakeTask(
    "db:reset",
    "Drop and recreate all databases from their schema for the current environment and load the seeds"
  ),
  rakeTask(
    "db:rollback",
    "Roll the schema back to the previous version (specify steps w/ STEP=n)"
  ),
  rakeTask("db:schema:cache:clear", "Clear a db/schema_cache.yml file"),
  rakeTask("db:schema:cache:dump", "Create a db/schema_cache.yml file"),
  rakeTask(
    "db:schema:dump",
    "Create a database schema file (either db/schema.rb or db/structure.sql, depending on configuration)"
  ),
  rakeTask(
    "db:schema:load",
    "Load a database schema file (either db/schema.rb or db/structure.sql, depending on configuration) into the database"
  ),
  rakeTask("db:seed", "Load the seed data from db/seeds.rb"),
  rakeTask(
    "db:seed:replant",
    "Truncate tables of each database for current environment and load the seeds"
  ),
  rakeTask(
    "db:setup",
    "Create all databases, load all schemas, and initialize with the seed data (use db:reset to also drop all databases first)"
  ),
  rakeTask("db:version", "Retrieve the current schema version number"),
  rakeTask(
    "log:clear",
    "Truncate all/specified *.log files in log/ to zero bytes (specify which logs with LOGS=test,development)"
  ),
  rakeTask(
    "time:zones",
    "List all time zones, list by two-letter country code, or list by UTC offset"
  ),
  rakeTask(
    "tmp:clear",
    "Clear cache, socket and screenshot files from tmp/ (narrow w/ tmp:cache:clear, tmp:sockets:clear, tmp:screenshots:clear)"
  ),
  rakeTask("tmp:create", "Create tmp directories for cache, sockets, and pids"),
  rakeTask(
    "yarn:install",
    "Install all JavaScript dependencies as specified via Yarn"
  ),
  rakeTask(
    "zeitwerk:check",
    "Check project structure for Zeitwerk compatibility"
  ),
];

// Generator that searches asynchronously for more Rails commands through the help command
export const railsCommandsGenerator: Fig.Generator = {
  custom: async (_, executeShellCommand) => {
    // parse help text to find more commands
    let commands: Fig.Subcommand[] = [];
    try {
      const { stdout: helpText } = await executeShellCommand({
        command: "rails",
        // eslint-disable-next-line @tabsmith/fig-linter/no-useless-arrays
        args: ["--tasks"],
      });

      const defaultCommandNames = defaultCommands.flatMap((c) => c.name);
      const matches = Array.from(helpText.matchAll(/rails ([^ ]+)/g));
      commands = matches
        .map((match) => ({ name: match[1] }))
        .filter((cmd) => !defaultCommandNames.includes(cmd.name));
    } catch (e) {
      console.log("ERROR", e);
    }

    return commands;
  },
  cache: {
    strategy: "stale-while-revalidate",
    ttl: 1000 * 60 * 60 * 24 * 3, // 3 days
    cacheByDirectory: true,
  },
};

const rootOptions: Fig.Option[] = [
  {
    name: ["-h", "--help"],
    description: "Show help for the rails command",
  },
  {
    name: ["-v", "--version"],
    description: "Show the Rails version",
  },
];

const completionSpec: Fig.Spec = {
  name: "rails",
  description: "Ruby on Rails CLI",
  icon: "https://avatars.githubusercontent.com/u/4223?s=48&v=4",
  options: rootOptions,
  generateSpec: async (_, executeShellCommand) => {
    const isRailsDirectory =
      (
        await executeShellCommand({
          command: "bash",
          args: [
            "-c",
            `until [[ -f Gemfile ]] || [[ $PWD = '/' ]]; do cd ..; done; if [ -f Gemfile ]; then cat Gemfile | \\grep "gem ['\\"]rails['\\"]"; fi`,
          ],
        })
      ).status === 0;

    if (!isRailsDirectory) {
      return {
        name: "rails",
        subcommands: [newCommand, pluginCommand],
      };
    }

    return {
      name: "rails",
      subcommands: defaultCommands,
      args: {
        generators: railsCommandsGenerator,
        isOptional: true,
      },
    };
  },
};

export default completionSpec;
