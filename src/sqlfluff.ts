// SQLFluff v4.5.0 (PyPI latest, 2026-11-20). Source: wheel sqlfluff-4.5.0 unpacked and read statically (src/sqlfluff/cli/commands.py click definitions, core/dialects/__init__.py, core/types.py FormatType, core/templaters); the CLI was not executed, so --help output was not compared
// The dbt templater (separate sqlfluff-templater-dbt plugin) is not listed in the templater suggestions

const dialects = [
  "ansi",
  "athena",
  "bigquery",
  "clickhouse",
  "databricks",
  "db2",
  "doris",
  "duckdb",
  "exasol",
  "flink",
  "greenplum",
  "hive",
  "impala",
  "mariadb",
  "materialize",
  "mysql",
  "oracle",
  "postgres",
  "redshift",
  "snowflake",
  "soql",
  "sparksql",
  "sqlite",
  "starrocks",
  "teradata",
  "trino",
  "tsql",
  "vertica",
];

const verbosityDescription =
  "Verbosity, how detailed should the output be. This is stackable, so -vv is more verbose than -v. For the most verbose option try -vvvv or -vvvvv";

// Options shared by every command (common_options)
const commonOptions: Fig.Option[] = [
  {
    name: ["--verbose", "-v"],
    description: verbosityDescription,
    isRepeatable: 5,
  },
  {
    name: ["--nocolor", "-n"],
    description: "No color - output will be without ANSI color codes",
  },
  {
    name: "--color",
    description: "Force color output with ANSI color codes",
  },
];

const recursionLimit = (verb: string): Fig.Option => ({
  name: "--recursion-limit",
  description: `Set the Python recursion limit before ${verb}`,
  args: { name: "limit" },
});

const writeOutput: Fig.Option = {
  name: "--write-output",
  description:
    "Optionally provide a filename to write the results to, mostly used in tandem with --format. NB: Setting an output file re-enables normal stdout logging",
  args: { name: "file", template: "filepaths" },
};

const noFail: Fig.Option = {
  name: "--nofail",
  description:
    "If set, the exit code will always be zero, regardless of violations found. This is potentially useful during rollout",
};

const fixedSuffix: Fig.Option = {
  name: ["--fixed-suffix", "-x"],
  description: "An optional suffix to add to fixed files",
  args: { name: "suffix" },
};

const formatOption = (description: string, formats: string[]): Fig.Option => ({
  name: ["--format", "-f"],
  description,
  args: { name: "format", suggestions: formats },
});

// Options shared by lint, fix, format, parse and render (core_options)
const coreOptions = (includeRules = true): Fig.Option[] => [
  {
    name: ["--dialect", "-d"],
    description: "The dialect of SQL to lint",
    args: {
      name: "dialect",
      description: "Name of dialect, eg. ansi",
      suggestions: dialects,
    },
  },
  {
    name: ["--templater", "-t"],
    description: "The templater to use (default=jinja)",
    args: {
      name: "templater",
      description: "Name of templater to use, eg. raw",
      suggestions: ["raw", "jinja", "python", "placeholder"],
    },
  },
  ...(includeRules
    ? [
        {
          name: ["--rules", "-r"],
          description:
            "Narrow the search to only specific rules. Multiple rules can be specified with commas, eg. LT01,LT02",
          args: { name: "rules" },
        } satisfies Fig.Option,
      ]
    : []),
  {
    name: ["--exclude-rules", "-e"],
    description:
      "Exclude specific rules. This could either be the allowlist, or the general set if there is no specific allowlist. Multiple rules can be specified with commas",
    args: { name: "rules" },
  },
  {
    name: "--config",
    description:
      "Include additional config file. By default the config is generated from the standard configuration files described in the documentation. This argument allows you to specify an additional configuration file that overrides the standard configuration files. N.B. cfg format is required",
    args: { name: "extra_config_path", template: "filepaths" },
  },
  {
    name: "--ignore-local-config",
    description:
      "Ignore config files in default search path locations. This option allows the user to lint with the default config or can be used in conjunction with --config to only reference the custom config file",
  },
  {
    name: "--encoding",
    description:
      "Specify encoding to use when reading and writing files. Defaults to autodetect",
    args: { name: "encoding" },
  },
  {
    name: ["--ignore", "-i"],
    description:
      "Ignore particular families of errors so that they don't cause a failed run. Behaves somewhat like noqa comments, except it applies globally. Multiple families can be comma separated, eg. parsing,templating",
    args: {
      name: "errors",
      suggestions: ["templating", "lexing", "parsing", "linting"],
    },
  },
  {
    name: "--bench",
    description: "Set this flag to engage the benchmarking tool output",
  },
  {
    name: "--logger",
    description: "Choose to limit the logging to one of the loggers",
    args: {
      name: "logger",
      description: "Name of logger to limit to, eg. templater",
      suggestions: [
        "templater",
        "lexer",
        "parser",
        "linter",
        "rules",
        "config",
      ],
    },
  },
  {
    name: "--disable-noqa",
    description: "Set this flag to ignore inline noqa comments",
  },
  {
    name: "--disable-noqa-except",
    description: "Ignore all but the listed rules inline noqa comments",
    args: { name: "rules" },
  },
  {
    name: "--library-path",
    description:
      "Override the library_path value from the [sqlfluff:templater:jinja] configuration value. Set this to 'none' to disable entirely. This overrides any values set by users in configuration files or inline directives",
    args: { name: "path", template: "folders", suggestions: ["none"] },
  },
  {
    name: "--stdin-filename",
    description:
      "When using stdin as an input, load the configuration as if the contents of stdin was in a file in the listed location. This is useful for some editors that pass file contents from the editor that might not match the content on disk",
    args: { name: "file", template: "filepaths" },
  },
];

// Options shared by lint, fix and format (lint_options)
const lintOptions: Fig.Option[] = [
  {
    name: ["--quiet", "-q"],
    description:
      "Suppresses routine status and progress output while preserving diagnostics and command results. It cannot be used together with -v/--verbose",
  },
  {
    name: ["--processes", "-p"],
    description:
      "The number of parallel processes to run. Positive numbers work as expected. Zero and negative numbers will work as number_of_cpus - number. e.g -1 means all cpus except one. 0 means all cpus",
    args: { name: "processes" },
  },
  {
    name: "--disable-progress-bar",
    description: "Disables progress bars",
  },
  {
    name: "--persist-timing",
    description:
      "A filename to persist the timing information for a linting run to in csv format for external analysis. This feature should be treated as beta, and the format of the csv file may change in future releases without warning",
    args: { name: "file", template: "filepaths" },
  },
  {
    name: "--warn-unused-ignores",
    description: "Warn about unneeded '-- noqa:' comments",
  },
  {
    name: "--disregard-sqlfluffignores",
    description:
      "Perform the operation regardless of .sqlfluffignore configurations",
  },
];

const pathsArg: Fig.Arg = {
  name: "paths",
  description:
    "File or directory to process, or - to read from stdin (default: current directory)",
  template: "filepaths",
  isOptional: true,
  isVariadic: true,
};

const completionSpec: Fig.Spec = {
  name: "sqlfluff",
  description: "A dialect-flexible and configurable SQL linter",
  options: [
    {
      name: "--version",
      description: "Show the version and exit",
      isPersistent: true,
    },
    {
      name: ["--help", "-h"],
      description: "Show help for sqlfluff",
      isPersistent: true,
    },
  ],
  subcommands: [
    {
      name: "lint",
      description: "Lint SQL files via passing a list of files or using stdin",
      args: pathsArg,
      options: [
        ...commonOptions,
        ...coreOptions(),
        ...lintOptions,
        formatOption(
          "What format to return the lint result in (default=human)",
          [
            "human",
            "json",
            "yaml",
            "sarif",
            "github-annotation",
            "github-annotation-native",
            "gitlab",
            "none",
          ]
        ),
        writeOutput,
        {
          name: "--annotation-level",
          description:
            'When format is set to "github-annotation", "github-annotation-native" or "gitlab", default annotation level (default=warning). "failure" and "error" are equivalent. Any rules configured only as warnings will always come through with type "notice" regardless of this option',
          args: {
            name: "level",
            description: "Level of annotation, eg. warning",
            suggestions: ["notice", "warning", "failure", "error"],
          },
        },
        noFail,
        recursionLimit("linting"),
      ],
    },
    {
      name: "fix",
      description: "Fix SQL files",
      args: pathsArg,
      options: [
        ...commonOptions,
        ...coreOptions(),
        ...lintOptions,
        {
          name: ["--force", "-f"],
          description:
            "Deprecated, this is now the default behaviour. Fixes are applied file by file during the linting process",
          deprecated: true,
        },
        {
          name: "--check",
          description:
            "Analyse all files and ask for confirmation before applying any fixes. Fixes will be applied all together at the end of the operation",
        },
        fixedSuffix,
        {
          name: "--FIX-EVEN-UNPARSABLE",
          description:
            "Enables fixing of files that have templating or parse errors. Note that --ignore and noqa merely prevent errors from being displayed, the fix command will not make any fixes in files that have templating or parse errors unless this is enabled",
        },
        {
          name: "--show-lint-violations",
          description: "Show lint violations",
        },
        recursionLimit("fixing"),
      ],
    },
    {
      name: "format",
      description:
        "Autoformat SQL files using a known subset of fairly stable fix rules",
      args: pathsArg,
      options: [
        ...commonOptions,
        // sqlfluff format exits with an error if --rules is given
        ...coreOptions(false),
        ...lintOptions,
        fixedSuffix,
        recursionLimit("formatting"),
      ],
    },
    {
      name: "parse",
      description: "Parse SQL files and just spit out the result",
      args: {
        name: "path",
        description:
          "File or directory to parse, or - to read from stdin (default: current directory)",
        template: "filepaths",
      },
      options: [
        ...commonOptions,
        ...coreOptions(),
        recursionLimit("parsing"),
        {
          name: ["--code-only", "-c"],
          description: "Output only the code elements of the parse tree",
        },
        {
          name: ["--include-meta", "-m"],
          description:
            "Include meta segments (indents, dedents and placeholders) in the output. When outputting JSON or YAML, this also includes position information for each segment",
        },
        formatOption("What format to return the parse result in", [
          "human",
          "json",
          "yaml",
          "none",
        ]),
        writeOutput,
        {
          name: "--parse-statistics",
          description:
            "Set this flag to enabled detailed debugging readout on the use of terminators in the parser",
        },
        noFail,
      ],
    },
    {
      name: "render",
      description: "Render SQL files and just spit out the result",
      args: {
        name: "path",
        description: "File to render, or - to read from stdin",
        template: "filepaths",
      },
      options: [...commonOptions, ...coreOptions()],
    },
    {
      name: "dialects",
      description: "Show the current dialects available",
      options: commonOptions,
    },
    {
      name: "version",
      description: "Show the version of sqlfluff",
      options: commonOptions,
    },
    {
      name: "rules",
      description: "Show the current rules in use",
      options: commonOptions,
    },
  ],
};
export default completionSpec;
