// Django v6.1.3 (latest stable on PyPI, 2026-11-19). Source: the Django 6.1.3 wheel from PyPI, read statically (not executed):
// argparse definitions in django/core/management/{base,templates,__init__}.py, django/core/management/commands/*,
// django/contrib/{auth,contenttypes,gis,sessions,staticfiles}/management/commands/* and DiscoverRunner.add_arguments in django/test/runner.py.
// The docs site was not reachable, so descriptions are the commands' own help strings.
const DJANGO_ICON_URL = "https://github.com/django.png";

const ALWAYS_AVAILABLE_OPTIONS: Fig.Option[] = [
  {
    name: ["-h", "--help"],
    description: "Show this help message and exit",
  },
  {
    name: "--version",
    description: "Show program's version number and exit",
  },
  {
    name: ["-v", "--verbosity"],
    description:
      "Verbosity level; 0=minimal output, 1=normal output, 2=verbose output, 3=very verbose output",
    args: {
      name: "{0,1,2,3}",
      suggestions: ["0", "1", "2", "3"],
    },
  },
  {
    name: "--settings",
    description:
      'The Python path to a settings module, e.g. "myproject.settings.main". If this isn\'t provided, the DJANGO_SETTINGS_MODULE environment variable will be used',
    args: {
      name: "SETTINGS",
    },
  },
  {
    name: "--pythonpath",
    description:
      'A directory to add to the Python path, e.g. "/home/djangoprojects/myproject"',
    args: {
      name: "PYTHONPATH",
      template: "folders",
    },
  },
  {
    name: "--traceback",
    description: "Display a full stack trace on CommandError exceptions",
  },
  {
    name: "--no-color",
    description: "Don't colorize the command output",
  },
  {
    name: "--force-color",
    description: "Force colorization of the command output",
  },
];

// Added by BaseCommand to every command whose requires_system_checks is not empty
const SKIP_CHECKS_OPTION: Fig.Option = {
  name: "--skip-checks",
  description: "Skip system checks",
};

const NO_INPUT_OPTION: Fig.Option = {
  name: ["--noinput", "--no-input"],
  description: "Tells Django to NOT prompt the user for input of any kind",
};

const databaseOption = (description: string): Fig.Option => ({
  name: "--database",
  description,
  args: {
    name: "DATABASE",
  },
});

// Serializer formats built into Django (the "python" serializer is only an intermediate format)
const SERIALIZATION_FORMATS: Fig.Suggestion[] = [
  { name: "json", description: "JSON" },
  { name: "jsonl", description: "JSON Lines" },
  { name: "xml", description: "XML" },
  { name: "yaml", description: "YAML (requires PyYAML)" },
];

// Options shared by startapp and startproject (django/core/management/templates.py)
const TEMPLATE_COMMAND_OPTIONS: Fig.Option[] = [
  {
    name: "--template",
    description: "The path or URL to load the template from",
    args: {
      name: "TEMPLATE",
    },
  },
  {
    name: ["--extension", "-e"],
    description:
      'The file extension(s) to render (default: "py"). Separate multiple extensions with commas, or use -e multiple times',
    isRepeatable: true,
    args: {
      name: "EXTENSIONS",
    },
  },
  {
    name: ["--name", "-n"],
    description:
      "The file name(s) to render. Separate multiple file names with commas, or use -n multiple times",
    isRepeatable: true,
    args: {
      name: "FILES",
    },
  },
  {
    name: ["--exclude", "-x"],
    description:
      "The directory name(s) to exclude, in addition to .git and __pycache__. Can be used multiple times",
    isRepeatable: true,
    args: {
      name: "DIRECTORY",
      isOptional: true,
    },
  },
];

const TEMPLATE_COMMAND_ARGS: Fig.Arg[] = [
  {
    name: "name",
    description: "Name of the application or project",
  },
  {
    name: "directory",
    description:
      "Optional destination directory, this will be created if needed",
    isOptional: true,
    template: "folders",
  },
];

const DJANGO_NATIVE_COMMANDS: Fig.Subcommand[] = [
  {
    name: "changepassword",
    icon: DJANGO_ICON_URL,
    options: [
      databaseOption('Specifies the database to use. Default is "default"'),
    ],
    description: "Change a user's password for django.contrib.auth",
    args: {
      name: "username",
      description:
        "Username to change password for; by default, it's the current username",
      isOptional: true,
    },
  },
  {
    name: "createsuperuser",
    icon: DJANGO_ICON_URL,
    options: [
      {
        name: "--username",
        description: "Specifies the login for the superuser",
        args: {
          name: "USERNAME",
        },
      },
      {
        name: ["--noinput", "--no-input"],
        description:
          "Tells Django to NOT prompt the user for input of any kind. You must use --username with --noinput, along with an option for any other required field. Superusers created with --noinput will not be able to log in until they're given a valid password",
      },
      databaseOption('Specifies the database to use. Default is "default"'),
      {
        name: "--email",
        description: "Specifies the email for the superuser",
        args: {
          name: "EMAIL",
        },
      },
      SKIP_CHECKS_OPTION,
    ],
    description: "Used to create a superuser",
  },
  {
    name: "remove_stale_contenttypes",
    icon: DJANGO_ICON_URL,
    options: [
      NO_INPUT_OPTION,
      databaseOption(
        'Nominates the database to use. Defaults to the "default" database'
      ),
      {
        name: "--include-stale-apps",
        description:
          "Deletes stale content types including ones from previously installed apps that have been removed from INSTALLED_APPS",
      },
      SKIP_CHECKS_OPTION,
    ],
    description: "Deletes stale content types in the database",
  },
  {
    name: "check",
    icon: DJANGO_ICON_URL,
    options: [
      {
        name: ["--tag", "-t"],
        description: "Run only checks labeled with given tag",
        isRepeatable: true,
        args: {
          name: "TAGS",
        },
      },
      {
        name: "--list-tags",
        description:
          "List available tags. Specify --deploy to include available deployment tags",
      },
      {
        name: "--deploy",
        description: "Check deployment settings",
      },
      {
        name: "--fail-level",
        description:
          "Message level that will cause the command to exit with a non-zero status. Default is ERROR",
        args: {
          name: "{CRITICAL,ERROR,WARNING,INFO,DEBUG}",
          suggestions: ["CRITICAL", "ERROR", "WARNING", "INFO", "DEBUG"],
        },
      },
      {
        name: "--database",
        description: "Run database related checks against these aliases",
        isRepeatable: true,
        args: {
          name: "DATABASES",
        },
      },
    ],
    description: "Checks the entire Django project for potential problems",
    args: {
      name: "app_label",
      isVariadic: true,
      isOptional: true,
    },
  },
  {
    name: "compilemessages",
    icon: DJANGO_ICON_URL,
    options: [
      {
        name: ["--locale", "-l"],
        description:
          "Locale(s) to process (e.g. de_AT). Default is to process all. Can be used multiple times",
        isRepeatable: true,
        args: {
          name: "LOCALE",
        },
      },
      {
        name: ["--exclude", "-x"],
        description:
          "Locales to exclude. Default is none. Can be used multiple times",
        isRepeatable: true,
        args: {
          name: "EXCLUDE",
        },
      },
      {
        name: ["--use-fuzzy", "-f"],
        description: "Use fuzzy translations",
      },
      {
        name: ["--ignore", "-i"],
        description:
          "Ignore directories matching this glob-style pattern. Use multiple times to ignore more",
        isRepeatable: true,
        args: {
          name: "PATTERN",
        },
      },
    ],
    description:
      "Compiles .po files to .mo files for use with builtin gettext support",
  },
  {
    name: "createcachetable",
    icon: DJANGO_ICON_URL,
    options: [
      databaseOption(
        'Nominates a database onto which the cache tables will be installed. Defaults to the "default" database'
      ),
      {
        name: "--dry-run",
        description:
          "Does not create the table, just prints the SQL that would be run",
      },
    ],
    description: "Creates the tables needed to use the SQL cache backend",
    args: {
      name: "table_name",
      description:
        "Optional table names. Otherwise, settings.CACHES is used to find cache tables",
      isVariadic: true,
      isOptional: true,
    },
  },
  {
    name: "dbshell",
    icon: DJANGO_ICON_URL,
    options: [
      databaseOption(
        'Nominates a database onto which to open a shell. Defaults to the "default" database'
      ),
    ],
    description:
      "Runs the command-line client for specified database, or the default database if none is provided",
    args: {
      name: "parameters",
      description:
        "Extra arguments for the database client (put them after --)",
      isOptional: true,
      isVariadic: true,
    },
  },
  {
    name: "diffsettings",
    icon: DJANGO_ICON_URL,
    options: [
      {
        name: "--all",
        description:
          'Display all settings, regardless of their value. In "hash" mode, default values are prefixed by "###"',
      },
      {
        name: "--default",
        description:
          "The settings module to compare the current settings against. Leave empty to compare against Django's default settings",
        args: {
          name: "MODULE",
        },
      },
      {
        name: "--output",
        description:
          "Selects the output format. 'hash' mode displays each changed setting, with the settings that don't appear in the defaults followed by ###. 'unified' mode prefixes the default setting with a minus sign, followed by the changed setting prefixed with a plus sign",
        args: {
          name: "{hash,unified}",
          suggestions: ["hash", "unified"],
        },
      },
    ],
    description:
      "Displays differences between the current settings.py and Django's default settings",
  },
  {
    name: "dumpdata",
    icon: DJANGO_ICON_URL,
    options: [
      {
        name: "--format",
        description: "Specifies the output serialization format for fixtures",
        args: {
          name: "FORMAT",
          suggestions: SERIALIZATION_FORMATS,
        },
      },
      {
        name: "--indent",
        description:
          "Specifies the indent level to use when pretty-printing output",
        args: {
          name: "INDENT",
        },
      },
      databaseOption(
        'Nominates a specific database to dump fixtures from. Defaults to the "default" database'
      ),
      {
        name: ["-e", "--exclude"],
        description:
          "An app_label or app_label.ModelName to exclude (use multiple --exclude to exclude multiple apps/models)",
        isRepeatable: true,
        args: {
          name: "EXCLUDE",
        },
      },
      {
        name: "--natural-foreign",
        description: "Use natural foreign keys if they are available",
      },
      {
        name: "--natural-primary",
        description: "Use natural primary keys if they are available",
      },
      {
        name: ["-a", "--all"],
        description:
          "Use Django's base manager to dump all models stored in the database, including those that would otherwise be filtered or modified by a custom manager",
      },
      {
        name: "--pks",
        description:
          "Only dump objects with given primary keys. Accepts a comma-separated list of keys. This option only works when you specify one model",
        args: {
          name: "PRIMARY_KEYS",
        },
      },
      {
        name: ["-o", "--output"],
        description: "Specifies file to which the output is written",
        args: {
          name: "OUTPUT",
          template: "filepaths",
        },
      },
      SKIP_CHECKS_OPTION,
    ],
    description:
      "Output the contents of the database as a fixture of the given format (using each model's default manager unless --all is specified)",
    args: {
      name: "app_label[.ModelName]",
      description:
        "Restricts dumped data to the specified app_label or app_label.ModelName",
      isOptional: true,
      isVariadic: true,
    },
  },
  {
    name: "flush",
    icon: DJANGO_ICON_URL,
    options: [
      NO_INPUT_OPTION,
      databaseOption(
        'Nominates a database to flush. Defaults to the "default" database'
      ),
      SKIP_CHECKS_OPTION,
    ],
    description:
      'Removes ALL DATA from the database, including data added during migrations. Does not achieve a "fresh install" state',
  },
  {
    name: "inspectdb",
    icon: DJANGO_ICON_URL,
    options: [
      databaseOption(
        'Nominates a database to introspect. Defaults to using the "default" database'
      ),
      {
        name: "--include-partitions",
        description: "Also output models for partition tables",
      },
      {
        name: "--include-views",
        description: "Also output models for database views",
      },
    ],
    description:
      "Introspects the database tables in the given database and outputs a Django model module",
    args: {
      name: "table",
      description: "Selects what tables or views should be introspected",
      isOptional: true,
      isVariadic: true,
    },
  },
  {
    name: "loaddata",
    icon: DJANGO_ICON_URL,
    options: [
      databaseOption(
        'Nominates a specific database to load fixtures into. Defaults to the "default" database'
      ),
      {
        name: "--app",
        description: "Only look for fixtures in the specified app",
        args: {
          name: "APP_LABEL",
        },
      },
      {
        name: ["--ignorenonexistent", "-i"],
        description:
          "Ignores entries in the serialized data for fields that do not currently exist on the model",
      },
      {
        name: ["-e", "--exclude"],
        description:
          "An app_label or app_label.ModelName to exclude. Can be used multiple times",
        isRepeatable: true,
        args: {
          name: "EXCLUDE",
        },
      },
      {
        name: "--format",
        description: "Format of serialized data when reading from stdin",
        args: {
          name: "FORMAT",
          suggestions: SERIALIZATION_FORMATS,
        },
      },
      SKIP_CHECKS_OPTION,
    ],
    description: "Installs the named fixture(s) in the database",
    args: {
      name: "fixture",
      description: "Fixture labels",
      isVariadic: true,
    },
  },
  {
    name: "makemessages",
    icon: DJANGO_ICON_URL,
    options: [
      {
        name: ["--locale", "-l"],
        description:
          "Creates or updates the message files for the given locale(s) (e.g. pt_BR). Can be used multiple times",
        isRepeatable: true,
        args: {
          name: "LOCALE",
        },
      },
      {
        name: ["--exclude", "-x"],
        description:
          "Locales to exclude. Default is none. Can be used multiple times",
        isRepeatable: true,
        args: {
          name: "EXCLUDE",
        },
      },
      {
        name: ["--domain", "-d"],
        description: 'The domain of the message files (default: "django")',
        args: {
          name: "DOMAIN",
          suggestions: ["django", "djangojs"],
        },
      },
      {
        name: ["--all", "-a"],
        description: "Updates the message files for all existing locales",
      },
      {
        name: ["--extension", "-e"],
        description:
          'The file extension(s) to examine (default: "html,txt,py", or "js" if the domain is "djangojs"). Separate multiple extensions with commas, or use -e multiple times',
        isRepeatable: true,
        args: {
          name: "EXTENSIONS",
        },
      },
      {
        name: ["--symlinks", "-s"],
        description:
          "Follows symlinks to directories when examining source code and templates for translation strings",
      },
      {
        name: ["--ignore", "-i"],
        description:
          "Ignore files or directories matching this glob-style pattern. Use multiple times to ignore more",
        isRepeatable: true,
        args: {
          name: "PATTERN",
        },
      },
      {
        name: "--no-default-ignore",
        description:
          "Don't ignore the common glob-style patterns 'CVS', '.*', '*~' and '*.pyc'",
      },
      {
        name: "--no-wrap",
        description: "Don't break long message lines into several lines",
      },
      {
        name: "--no-location",
        description: "Don't write '#: filename:line' lines",
      },
      {
        name: "--add-location",
        description:
          "Controls '#: filename:line' lines. If the option is 'full' (the default if not given), the lines include both file name and line number. If it's 'file', the line number is omitted. If it's 'never', the lines are suppressed (same as --no-location). --add-location requires gettext 0.19 or newer",
        args: {
          name: "location",
          isOptional: true,
          default: "full",
          suggestions: [
            {
              name: "full",
              description: "The lines include both file name and line number",
            },
            { name: "file", description: "The line number is omitted" },
            {
              name: "never",
              description: "The lines are suppressed (same as --no-location)",
            },
          ],
        },
      },
      {
        name: "--no-obsolete",
        description: "Remove obsolete message strings",
      },
      {
        name: "--keep-pot",
        description:
          "Keep .pot file after making messages. Useful when debugging",
      },
    ],
    description:
      "Runs over the entire source tree of the current directory and pulls out all strings marked for translation. It creates (or updates) a message file in the conf/locale (in the django tree) or locale (for projects and applications) directory. You must run this command with one of either the --locale, --exclude, or --all options",
  },
  {
    name: "makemigrations",
    icon: DJANGO_ICON_URL,
    options: [
      {
        name: "--dry-run",
        description:
          "Just show what migrations would be made; don't actually write them",
      },
      {
        name: "--merge",
        description: "Enable fixing of migration conflicts",
      },
      {
        name: "--empty",
        description: "Create an empty migration",
      },
      NO_INPUT_OPTION,
      {
        name: ["-n", "--name"],
        description: "Use this name for migration file(s)",
        args: {
          name: "NAME",
        },
      },
      {
        name: "--no-header",
        description: "Do not add header comments to new migration file(s)",
      },
      {
        name: "--check",
        description:
          "Exit with a non-zero status if model changes are missing migrations and don't actually write them. Implies --dry-run",
      },
      {
        name: "--scriptable",
        description:
          "Divert log output and input prompts to stderr, writing only paths of generated migration files to stdout",
      },
      {
        name: "--update",
        description:
          "Merge model changes into the latest migration and optimize the resulting operations",
      },
      SKIP_CHECKS_OPTION,
    ],
    description: "Creates new migration(s) for apps",
    args: {
      name: "app_label",
      description: "Specify the app label(s) to create migrations for",
      isOptional: true,
      isVariadic: true,
    },
  },
  {
    name: "migrate",
    icon: DJANGO_ICON_URL,
    options: [
      NO_INPUT_OPTION,
      databaseOption(
        'Nominates a database to synchronize. Defaults to the "default" database'
      ),
      {
        name: "--fake",
        description: "Mark migrations as run without actually running them",
      },
      {
        name: "--fake-initial",
        description:
          "Detect if tables already exist and fake-apply initial migrations if so. Make sure that the current database schema matches your initial migration before using this flag. Django will only check for an existing table name",
      },
      {
        name: "--plan",
        description:
          "Shows a list of the migration actions that will be performed",
      },
      {
        name: "--run-syncdb",
        description: "Creates tables for apps without migrations",
      },
      {
        name: "--check",
        description:
          "Exits with a non-zero status if unapplied migrations exist and does not actually apply migrations",
      },
      {
        name: "--prune",
        description:
          "Delete nonexistent migrations from the django_migrations table",
      },
      SKIP_CHECKS_OPTION,
    ],
    description:
      "Updates database schema. Manages both apps with migrations and those without",
    args: [
      {
        name: "app_label",
        description: "App label of an application to synchronize the state",
        isOptional: true,
      },
      {
        name: "migration_name",
        description:
          'Database state will be brought to the state after that migration. Use the name "zero" to unapply all migrations',
        isOptional: true,
      },
    ],
  },
  {
    // Only available when django.contrib.gis is in INSTALLED_APPS
    name: "ogrinspect",
    icon: DJANGO_ICON_URL,
    options: [
      {
        name: "--blank",
        description:
          "Use a comma separated list of OGR field names to add the `blank=True` option to the field definition. Set to `true` to apply to all applicable fields",
        args: {
          name: "FIELDS",
        },
      },
      {
        name: "--decimal",
        description:
          "Use a comma separated list of OGR float fields to generate `DecimalField` instead of the default `FloatField`. Set to `true` to apply to all OGR float fields",
        args: {
          name: "FIELDS",
        },
      },
      {
        name: "--geom-name",
        description:
          "Specifies the model name for the Geometry Field (defaults to `geom`)",
        args: {
          name: "NAME",
          default: "geom",
        },
      },
      {
        name: "--layer",
        description:
          "The key for specifying which layer in the OGR data source to use. Defaults to 0 (the first layer). May be an integer or a string identifier for the layer",
        args: {
          name: "LAYER",
          default: "0",
        },
      },
      {
        name: "--multi-geom",
        description:
          "Treat the geometry in the data source as a geometry collection",
      },
      {
        name: "--name-field",
        description:
          "Specifies a field name to return for the __str__() method",
        args: {
          name: "FIELD",
        },
      },
      {
        name: "--no-imports",
        description:
          "Do not include `from django.contrib.gis.db import models` statement",
      },
      {
        name: "--null",
        description:
          "Use a comma separated list of OGR field names to add the `null=True` option to the field definition. Set to `true` to apply to all applicable fields",
        args: {
          name: "FIELDS",
        },
      },
      {
        name: "--srid",
        description:
          "The SRID to use for the Geometry Field. If it can be determined, the SRID of the data source is used",
        args: {
          name: "SRID",
        },
      },
      {
        name: "--mapping",
        description: "Generate mapping dictionary for use with `LayerMapping`",
      },
    ],
    description:
      "Inspects the given OGR-compatible data source (e.g., a shapefile) and outputs a GeoDjango model with the given model name",
    args: [
      {
        name: "data_source",
        description: "Path to the data source",
        template: "filepaths" as const,
      },
      {
        name: "model_name",
        description: "Name of the model to create",
      },
    ],
  },
  {
    name: "optimizemigration",
    icon: DJANGO_ICON_URL,
    options: [
      {
        name: "--check",
        description:
          "Exit with a non-zero status if the migration can be optimized",
      },
      SKIP_CHECKS_OPTION,
    ],
    description: "Optimizes the operations for the named migration",
    args: [
      {
        name: "app_label",
        description:
          "App label of the application to optimize the migration for",
      },
      {
        name: "migration_name",
        description: "Migration name to optimize the operations for",
      },
    ],
  },
  {
    name: "sendtestemail",
    icon: DJANGO_ICON_URL,
    options: [
      {
        name: "--managers",
        description:
          "Send a test email to the addresses specified in settings.MANAGERS",
      },
      {
        name: "--admins",
        description:
          "Send a test email to the addresses specified in settings.ADMINS",
      },
      {
        name: "--using",
        description:
          "Specify the MAILERS alias to use for sending the test email. Defaults to 'default'",
        args: {
          name: "USING",
        },
      },
      SKIP_CHECKS_OPTION,
    ],
    description:
      "Sends a test email to the email addresses specified as arguments",
    args: {
      name: "email",
      description: "One or more email addresses to send a test email to",
      // This argument is not optional when no other arguments are supplied.
      // But it is optional when either `--managers` or `--admins` are supplied as arguments,
      // so keeping it as `isOptional` for now to keep things simple.
      isOptional: true,
      isVariadic: true,
    },
  },
  {
    name: "shell",
    icon: DJANGO_ICON_URL,
    options: [
      {
        name: "--no-startup",
        description:
          "When using plain Python, ignore the PYTHONSTARTUP environment variable and ~/.pythonrc.py script",
      },
      {
        name: "--no-imports",
        description: "Disable automatic imports of models",
      },
      {
        name: ["-i", "--interface"],
        description:
          'Specify an interactive interpreter interface. Available options: "ipython", "bpython", and "python"',
        args: {
          name: "{ipython,bpython,python}",
          suggestions: ["ipython", "bpython", "python"],
        },
      },
      {
        name: ["-c", "--command"],
        description:
          "Instead of opening an interactive shell, run a command as Django and exit",
        args: {
          name: "COMMAND",
        },
      },
    ],
    description:
      "Runs a Python interactive interpreter. Tries to use IPython or bpython, if one of them is available. Any standard input is executed as code",
  },
  {
    name: "showmigrations",
    icon: DJANGO_ICON_URL,
    options: [
      databaseOption(
        'Nominates a database to show migrations for. Defaults to the "default" database'
      ),
      {
        name: ["--list", "-l"],
        description:
          "Shows a list of all migrations and which are applied. With a verbosity level of 2 or above, the applied datetimes will be included",
      },
      {
        name: ["--plan", "-p"],
        description:
          "Shows all migrations in the order they will be applied. With a verbosity level of 2 or above all direct migration dependencies and reverse dependencies (run_before) will be included",
      },
      SKIP_CHECKS_OPTION,
    ],
    description: "Shows all available migrations for the current project",
    args: {
      name: "app_label",
      description: "App labels of applications to limit the output to",
      isOptional: true,
      isVariadic: true,
    },
  },
  {
    name: "sqlflush",
    icon: DJANGO_ICON_URL,
    options: [
      databaseOption(
        'Nominates a database to print the SQL for. Defaults to the "default" database'
      ),
      SKIP_CHECKS_OPTION,
    ],
    description:
      "Returns a list of the SQL statements required to return all tables in the database to the state they were in just after they were installed",
  },
  {
    name: "sqlmigrate",
    icon: DJANGO_ICON_URL,
    options: [
      databaseOption(
        'Nominates a database to create SQL for. Defaults to the "default" database'
      ),
      {
        name: "--backwards",
        description:
          "Creates SQL to unapply the migration, rather than to apply it",
      },
      SKIP_CHECKS_OPTION,
    ],
    description: "Prints the SQL statements for the named migration",
    args: [
      {
        name: "app_label",
        description: "App label of the application containing the migration",
      },
      {
        name: "migration_name",
        description: "Migration name to print the SQL for",
      },
    ],
  },
  {
    name: "sqlsequencereset",
    icon: DJANGO_ICON_URL,
    options: [
      databaseOption(
        'Nominates a database to print the SQL for. Defaults to the "default" database'
      ),
      SKIP_CHECKS_OPTION,
    ],
    description:
      "Prints the SQL statements for resetting sequences for the given app name(s)",
    args: {
      name: "app_label",
      description: "One or more application label",
      isVariadic: true,
    },
  },
  {
    name: "squashmigrations",
    icon: DJANGO_ICON_URL,
    options: [
      {
        name: "--no-optimize",
        description: "Do not try to optimize the squashed operations",
      },
      NO_INPUT_OPTION,
      {
        name: "--squashed-name",
        description: "Sets the name of the new squashed migration",
        args: {
          name: "SQUASHED_NAME",
        },
      },
      {
        name: "--no-header",
        description:
          "Do not add a header comment to the new squashed migration",
      },
      SKIP_CHECKS_OPTION,
    ],
    description:
      "Squashes an existing set of migrations (from first until specified) into a single new one",
    args: [
      {
        name: "app_label",
        description: "App label of the application to squash migrations for",
      },
      {
        name: "start_migration_name",
        description:
          "Migrations will be squashed starting from and including this migration",
        isOptional: true,
      },
      {
        name: "migration_name",
        description:
          "Migrations will be squashed until and including this migration",
      },
    ],
  },
  {
    name: "startapp",
    icon: DJANGO_ICON_URL,
    options: TEMPLATE_COMMAND_OPTIONS,
    description:
      "Creates a Django app directory structure for the given app name in the current directory or optionally in the given directory",
    args: TEMPLATE_COMMAND_ARGS,
  },
  {
    name: "startproject",
    icon: DJANGO_ICON_URL,
    options: TEMPLATE_COMMAND_OPTIONS,
    description:
      "Creates a Django project directory structure for the given project name in the current directory or optionally in the given directory",
    args: TEMPLATE_COMMAND_ARGS,
  },
  {
    name: "test",
    icon: DJANGO_ICON_URL,
    options: [
      NO_INPUT_OPTION,
      {
        name: "--failfast",
        description: "Stops the test suite after the first failure",
      },
      {
        name: "--testrunner",
        description:
          "Tells Django to use specified test runner class instead of the one specified by the TEST_RUNNER setting",
        args: {
          name: "TESTRUNNER",
        },
      },
      {
        name: ["-t", "--top-level-directory"],
        description: "Top level of project for unittest discovery",
        args: {
          name: "TOP_LEVEL",
          template: "folders",
        },
      },
      {
        name: ["-p", "--pattern"],
        description: "The test matching pattern. Defaults to test*.py",
        args: {
          name: "PATTERN",
        },
      },
      {
        name: "--keepdb",
        description: "Preserves the test DB between runs",
      },
      {
        name: "--shuffle",
        description: "Shuffles test case order",
        args: {
          name: "SEED",
          isOptional: true,
        },
      },
      {
        name: ["-r", "--reverse"],
        description: "Reverses test case order",
      },
      {
        name: "--debug-mode",
        description: "Sets settings.DEBUG to True",
      },
      {
        name: ["-d", "--debug-sql"],
        description: "Prints logged SQL queries on failure",
      },
      {
        name: "--parallel",
        description:
          'Run tests using up to N parallel processes. Use the value "auto" to run one test process for each processor core',
        args: {
          name: "N",
          isOptional: true,
          suggestions: ["auto"],
        },
      },
      {
        name: "--tag",
        description:
          "Run only tests with the specified tag. Can be used multiple times",
        isRepeatable: true,
        args: {
          name: "TAGS",
        },
      },
      {
        name: "--exclude-tag",
        description:
          "Do not run tests with the specified tag. Can be used multiple times",
        isRepeatable: true,
        args: {
          name: "EXCLUDE_TAGS",
        },
      },
      {
        name: "--pdb",
        description:
          "Runs a debugger (pdb, or ipdb if installed) on error or failure",
      },
      {
        name: ["-b", "--buffer"],
        description: "Discard output from passing tests",
      },
      {
        name: "--no-faulthandler",
        description: "Disables the Python faulthandler module during tests",
      },
      {
        name: "--timing",
        description:
          "Output timings, including database set up and total run time",
      },
      {
        name: "-k",
        description:
          "Only run test methods and classes that match the pattern or substring. Can be used multiple times. Same as unittest -k option",
        isRepeatable: true,
        args: {
          name: "TEST_NAME_PATTERNS",
        },
      },
      {
        name: "--durations",
        description: "Show the N slowest test cases (N=0 for all)",
        args: {
          name: "N",
        },
      },
    ],
    description:
      "Discover and run tests in the specified modules or the current directory",
    args: {
      name: "test_label",
      description:
        "Module paths to test; can be modulename, modulename.TestCase or modulename.TestCase.test_method",
      isOptional: true,
      isVariadic: true,
    },
  },
  {
    name: "testserver",
    icon: DJANGO_ICON_URL,
    options: [
      NO_INPUT_OPTION,
      {
        name: "--addrport",
        description: "Port number or ipaddr:port to run the server on",
        args: {
          name: "ADDRPORT",
        },
      },
      {
        name: ["--ipv6", "-6"],
        description: "Tells Django to use an IPv6 address",
      },
    ],
    description:
      "Runs a development server with data from the given fixture(s)",
    args: {
      name: "fixture",
      description: "Path(s) to fixtures to load before running the server",
      isOptional: true,
      isVariadic: true,
    },
  },
  {
    name: "clearsessions",
    icon: DJANGO_ICON_URL,
    options: [SKIP_CHECKS_OPTION],
    description:
      "Can be run as a cronjob or directly to clean out expired sessions when the backend supports it",
  },
  {
    name: "collectstatic",
    icon: DJANGO_ICON_URL,
    options: [
      {
        name: ["--noinput", "--no-input"],
        description: "Do NOT prompt the user for input of any kind",
      },
      {
        name: "--no-post-process",
        description: "Do NOT post process collected files",
      },
      {
        name: ["-i", "--ignore"],
        description:
          "Ignore files or directories matching this glob-style pattern. Use multiple times to ignore more",
        isRepeatable: true,
        args: {
          name: "PATTERN",
        },
      },
      {
        name: ["-n", "--dry-run"],
        description: "Do everything except modify the filesystem",
      },
      {
        name: ["-c", "--clear"],
        description:
          "Clear the existing files using the storage before trying to copy or link the original file",
      },
      {
        name: ["-l", "--link"],
        description: "Create a symbolic link to each file instead of copying",
      },
      {
        name: "--no-default-ignore",
        description:
          "Don't ignore the common private glob-style patterns (defaults to 'CVS', '.*' and '*~')",
      },
      SKIP_CHECKS_OPTION,
    ],
    description: "Collect static files in a single location",
  },
  {
    name: "findstatic",
    icon: DJANGO_ICON_URL,
    options: [
      {
        name: "--first",
        description: "Only return the first match for each static file",
      },
      SKIP_CHECKS_OPTION,
    ],
    description: "Finds the absolute paths for the given static file(s)",
    args: {
      name: "staticfile",
      isVariadic: true,
    },
  },
  {
    name: "runserver",
    icon: DJANGO_ICON_URL,
    options: [
      {
        name: ["--ipv6", "-6"],
        description: "Tells Django to use an IPv6 address",
      },
      {
        name: "--nothreading",
        description: "Tells Django to NOT use threading",
      },
      {
        name: "--noreload",
        description: "Tells Django to NOT use the auto-reloader",
      },
      {
        name: "--nostatic",
        description:
          "Tells Django to NOT automatically serve static files at STATIC_URL",
      },
      {
        name: "--insecure",
        description: "Allows serving static files even if DEBUG is False",
      },
      SKIP_CHECKS_OPTION,
    ],
    description:
      "Starts a lightweight web server for development and also serves static files",
    args: {
      name: "addrport",
      description: "Optional port number, or ipaddr:port",
      isOptional: true,
    },
  },
].map((subcommand) => {
  return {
    ...subcommand,
    options: [
      ...subcommand.options.map((option) => ({
        priority: 51,
        ...option,
      })),
      ...ALWAYS_AVAILABLE_OPTIONS.map((option) =>
        // runserver accepts --verbosity and --traceback but never uses them,
        // so Django hides them from its help (suppressed_base_arguments)
        subcommand.name === "runserver" &&
        (option.name === "--traceback" || option.name.includes("--verbosity"))
          ? { ...option, hidden: true }
          : option
      ),
    ],
  };
});

const completionSpec: Fig.Spec = {
  name: "django-admin",
  description: "Utility script for the Django Web framework",
  icon: DJANGO_ICON_URL,
  options: [
    {
      name: ["-h", "--help"],
      description: "Show the list of available subcommands",
    },
    {
      name: "--version",
      description: "Show Django's version number and exit",
    },
  ],
  subcommands: [
    {
      name: "help",
      description: "Usage and help information for django-admin",
      icon: DJANGO_ICON_URL,
      options: [
        {
          name: "--commands",
          description: "List only the names of the available subcommands",
        },
      ],
      args: {
        name: "subcommand",
        isOptional: true,
        suggestions: DJANGO_NATIVE_COMMANDS.filter(
          (command) => command.name != "help"
        ).map((command) => ({
          name: command.name,
          description: command.description,
          icon: command.icon,
        })),
      },
    },
    {
      name: "version",
      description: "Print the Django version",
      icon: DJANGO_ICON_URL,
    },
    ...DJANGO_NATIVE_COMMANDS,
  ],
};

export default completionSpec;
