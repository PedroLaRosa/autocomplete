// pytest v9.2.0 (PyPI latest release, 2026-11-20). Source: sdist pytest-9.2.0 read statically (not executed):
// parser.addoption/addini calls in src/_pytest/**, cross-checked with the `pytest --help` output in doc/en/reference/reference.rst.
const completionSpec: Fig.Spec = {
  name: "pytest",
  args: {
    name: "File or Directory",
    description:
      "The test file or directory you want to run pytest on. If omitted, pytest will run all \
      of the files of the form test_*.py or *_test.py in the current directory \
      and its subdirectories",
    isOptional: true,
    isVariadic: true,
    template: ["filepaths", "folders"],
  },
  options: [
    {
      name: "--assert",
      description:
        "Control assertion debugging tools. 'plain' performs no assertion debugging. 'rewrite' (the default) rewrites assert statements in test modules on import to provide assert expression information",
      args: {
        name: "Mode",
        suggestions: ["plain", "rewrite"],
      },
    },
    {
      name: "--basetemp",
      description:
        "Base temporary directory for this test run (warning: this directory is removed if it exists)",
      args: {
        name: "Directory",
        template: "folders",
      },
    },
    {
      name: ["-c", "--config-file"],
      description:
        "Load configuration from `FILE` instead of trying to locate one of the implicit configuration files",
      args: {
        name: "File",
        template: "filepaths",
      },
    },
    {
      name: "--cache-clear",
      description: "Remove all cache contents at start of test run",
    },
    {
      name: "--cache-show",
      description:
        "Show cache contents, don't perform collection or tests. Optional argument: glob (default: '*')",
      args: {
        name: "Glob",
        isOptional: true,
        default: "*",
      },
    },
    {
      name: "--capture",
      description: "Per-test capturing method",
      args: {
        name: "Method",
        description: "One of fd|sys|no|tee-sys",
        suggestions: ["fd", "sys", "no", "tee-sys"],
      },
    },
    {
      name: "--code-highlight",
      description:
        "Whether code should be highlighted (only if --color is also enabled)",
      dependsOn: ["--color"],
      args: {
        name: "Highlight",
        suggestions: ["yes", "no"],
      },
    },
    {
      name: ["--co", "--collect-only"],
      description: "Only collect tests, don't execute them",
    },
    {
      name: "--collect-in-virtualenv",
      description: "Don't ignore tests in a local virtualenv directory",
    },
    {
      name: "--color",
      description: "Color terminal output",
      args: {
        name: "Color",
        suggestions: ["yes", "no", "auto"],
      },
    },
    {
      name: "--confcutdir",
      description: "Only load conftest.py's relative to specified dir",
      args: {
        name: "Dir",
        template: ["folders"],
      },
    },

    {
      name: "--continue-on-collection-errors",
      description: "Force test execution even if collection errors occur",
    },
    {
      name: "--debug",
      description:
        "Store internal tracing debug information in this log file. This file is opened with 'w' and truncated as a result, care advised. Defaults to 'pytestdebug.log'",
      args: {
        name: "Debug File Name",
        isOptional: true,
        default: "pytestdebug.log",
      },
    },
    {
      name: "--durations",
      description: "Show N slowest setup/test durations (N=0 for all)",
      args: {
        name: "N",
        description: "(N=0 for all)",
      },
    },
    {
      name: "--durations-min",
      description:
        "Minimal duration in seconds for inclusion in slowest list. Default: 0.005 (or 0.0 if -vv is given)",
      args: {
        name: "N",
        default: "0.005",
      },
    },
    {
      name: "--deselect",
      description:
        "Deselect item (via node id prefix) during collection (multi-allowed)",
      isRepeatable: true,
      args: {
        name: "nodeid_prefix",
      },
    },
    {
      name: ["--disable-warnings", "--disable-pytest-warnings"],
      description: "Disable warnings summary",
    },
    {
      name: "--doctest-continue-on-failure",
      description:
        "For a given doctest, continue to run after the first failure",
    },
    {
      name: "--doctest-ignore-import-errors",
      description: "Ignore doctest collection errors",
    },
    {
      name: "--doctest-modules",
      description: "Run doctests in all .py modules",
    },
    {
      name: "--doctest-report",
      description: "Choose another output format for diffs on doctest failure",
      args: {
        name: "Output format",
        description: "None,cdiff,ndiff,udiff,only_first_failure",
        suggestions: ["none", "cdiff", "ndiff", "udiff", "only_first_failure"],
      },
    },
    {
      name: "--doctest-glob",
      description: "Doctests file matching pattern, default: test*.txt",
      isRepeatable: true,
      args: {
        name: "Pattern",
        default: "test*.txt",
      },
    },
    {
      name: ["--exitfirst", "-x"],
      description: "Exit instantly on first error or failed test",
    },
    {
      name: ["--failed-first", "--ff"],
      description:
        "Run all tests, but run the last failures first. This may re-order tests and thus lead to repeated fixture setup/teardown",
    },
    {
      name: ["--fixtures", "--funcargs"],
      description:
        "Show available fixtures, sorted by plugin appearance (fixtures with leading '_' are only shown with '-v')",
    },
    {
      name: "--fixtures-per-test",
      description: "Show fixtures per test",
    },
    {
      name: "--full-trace",
      description: "Don't cut any tracebacks (default is to cut)",
    },
    {
      name: ["--help", "-h"],
      description: "Show help message and configuration info",
    },
    {
      name: "--ignore",
      description: "Ignore path during collection (multi-allowed)",
      isRepeatable: true,
      args: {
        name: "Path",
        template: "filepaths",
      },
    },
    {
      name: "--ignore-glob",
      description: "Ignore path pattern during collection (multi-allowed)",
      isRepeatable: true,
      args: {
        name: "Path",
        template: "filepaths",
      },
    },
    {
      name: "--import-mode",
      description:
        "Prepend/append to sys.path when importing test modules and conftest files, default is to prepend",
      args: {
        name: "Mode",
        default: "prepend",
        suggestions: ["prepend", "append", "importlib"],
      },
    },
    {
      name: ["--junitxml", "--junit-xml"],
      description: "Create junit-xml style report file at given path",
      args: {
        name: "Path",
        template: ["filepaths", "folders"],
      },
    },
    {
      name: ["--junitprefix", "--junit-prefix"],
      description: "Prepend prefix to classnames in junit-xml output",
      args: {
        name: "Str",
        description: "String to prepend",
      },
    },
    {
      name: "-k",
      description:
        "Only run tests matching the given keyword expression, e.g. -k 'test_method or test_other', -k 'not (slow or network)'. Names in the expression are matched case-insensitively as substrings of the test's keywords: its own name (including any parametrization id), the names of its class, module and directories, the names of the markers applied to it or to its parents, attributes assigned directly to the test function, and any names in its 'extra_keyword_matches' set. Use -m to match marker names exactly, including their arguments",
      args: {
        name: "Expression",
        description: "Ex: 'test_method or test_other'",
      },
    },
    {
      name: "--keep-duplicates",
      description: "Keep duplicate tests",
    },
    {
      name: ["--showlocals", "-l"],
      description: "Show locals in tracebacks (disabled by default)",
    },

    {
      name: ["--last-failed-no-failures", "--lfnf"],
      description:
        "With --lf, determines whether to execute tests when there are no previously (known) failures or when no cached lastfailed data was found. 'all' (the default) runs the full test suite again, 'none' just emits a message about no known failures and exits successfully",
      args: {
        name: "Tests",
        suggestions: ["all", "none"],
        default: "all",
      },
    },
    {
      name: ["--last-failed", "--lf"],
      description:
        "Rerun only the tests that failed at the last run (or all if none failed)",
    },
    {
      name: "--log-auto-indent",
      description:
        "Auto-indent multiline messages passed to the logging module. Accepts true|on, false|off or an integer",
      args: {
        name: "Log Auto Indent Setting",
        suggestions: ["true", "false"],
      },
    },
    {
      name: "--log-cli-level",
      description: "CLI logging level",
      args: {
        name: "Log CLI Level",
        suggestions: ["CRITICAL", "ERROR", "WARNING", "INFO", "DEBUG"],
      },
    },
    {
      name: "--log-cli-format",
      description: "Log format used by the logging module",
      args: {
        name: "Log CLI Format",
      },
    },
    {
      name: "--log-cli-date-format",
      description: "Log date format used by the logging module",
      args: { name: "Log CLI Date Format" },
    },
    {
      name: "--log-date-format",
      description: "Log date format used by the logging module",
      args: { name: "Log Date Format" },
    },
    {
      name: "--log-format",
      description: "Log format used by the logging module",
      args: {
        name: "Log Format",
      },
    },
    {
      name: "--log-file",
      description: "Path to a file when logging will be written",
      args: {
        name: "Log File Path",
        template: "filepaths",
        suggestCurrentToken: true,
      },
    },
    {
      name: "--log-file-mode",
      description: "Log file open mode",
      args: {
        name: "Mode",
        default: "w",
        suggestions: [
          { name: "w", description: "Overwrite the log file" },
          { name: "a", description: "Append to the log file" },
        ],
      },
    },
    {
      name: "--log-file-level",
      description: "Log file logging level",
      args: {
        name: "Log File Level",
        suggestions: ["CRITICAL", "ERROR", "WARNING", "INFO", "DEBUG"],
      },
    },
    {
      name: "--log-file-date-format",
      description: "Log date format used by the logging module",
      args: { name: "Log File Date Format" },
    },
    {
      name: "--log-file-format",
      description: "Log format used by the logging module",
      args: {
        name: "Log File Format",
      },
    },
    {
      name: "--log-disable",
      description: "Disable a logger by name. Can be passed multiple times",
      isRepeatable: true,
      args: {
        name: "Logger",
      },
    },
    {
      name: "--log-level",
      description:
        "Level of messages to catch/display. Not set by default, so it depends on the root/parent log handler's effective level, where it is `WARNING` by default",
      args: {
        name: "Level",
        suggestions: ["CRITICAL", "ERROR", "WARNING", "INFO", "DEBUG"],
      },
    },
    {
      name: "-m",
      description:
        "Only run tests matching given mark expression. For example: -m 'mark1 and not mark2'",
      args: {
        name: "Mark Expression",
      },
    },
    {
      name: "--markers",
      description: "Show markers (builtin, plugin and per-project ones)",
    },
    {
      name: "--maxfail",
      description: "Exit after first num failures or errors",
      args: {
        name: "num",
      },
    },
    {
      name: "--max-warnings",
      description:
        "Exit with error if all tests pass but the number of warnings exceeds this threshold",
      args: {
        name: "num",
      },
    },
    {
      name: ["--new-first", "--nf"],
      description:
        "Run tests from new files first, then the rest of the tests sorted by file mtime",
    },
    {
      name: "--noconftest",
      description: "Don't load any conftest.py files",
    },
    {
      name: "--no-fold-skipped",
      description: "Do not fold skipped tests in short summary",
    },
    {
      name: "--force-short-summary",
      description:
        "Force condensed summary output regardless of verbosity level",
    },
    {
      name: "--no-header",
      description: "Disable header",
    },
    {
      name: "--no-showlocals",
      description:
        "Hide locals in tracebacks (negate --showlocals passed through addopts)",
    },
    {
      name: "--no-summary",
      description: "Disable summary",
    },
    {
      name: ["--override-ini", "-o"],
      description: 'Override configuration option with "option=value" style',
      isRepeatable: true,
      args: {
        name: "Override INI",
        description: "Ex: `-o strict_xfail=True -o cache_dir=cache`",
      },
    },
    {
      name: "-p",
      description:
        "Early-load given plugin module name or entry point (multi-allowed). To avoid loading of plugins, use the `no:` prefix, e.g. `no:doctest`. See also --disable-plugin-autoload",
      isRepeatable: true,
      args: {
        name: "Plugin name",
      },
    },
    {
      name: "--disable-plugin-autoload",
      description:
        "Disable plugin auto-loading through entry point packaging metadata. Only plugins explicitly specified in -p or env var PYTEST_PLUGINS will be loaded",
    },
    {
      name: "--pastebin",
      description: "Send failed|all info to bpaste.net pastebin service",
      args: {
        name: "mode",
        suggestions: ["failed", "all"],
      },
    },
    {
      name: "--pdb",
      description:
        "Start the interactive Python debugger on errors or KeyboardInterrupt",
    },
    {
      name: "--pdbcls",
      description:
        "Specify a custom interactive Python debugger for use with --pdb",
      args: {
        name: "modulename:classname",
        description: "Ex: --pdbcls=IPython.terminal.debugger:TerminalPdb",
      },
    },
    {
      name: "--pyargs",
      description: "Try to interpret all arguments as python packages",
    },
    {
      name: ["--quiet", "-q"],
      description: "Decrease verbosity",
      isRepeatable: true,
    },
    {
      name: "-r",
      description:
        "Show extra test summary info as specified by chars: (f)ailed, (E)rror, (s)kipped, (x)failed, (X)passed, (p)assed, (P)assed with output, (a)ll except passed (p/P), or (A)ll. (w)arnings are enabled by default (see --disable-warnings), 'N' can be used to reset the list. (default: 'fE')",
      args: {
        name: "chars",
        suggestions: ["a", "A", "E", "f", "N", "p", "P", "s", "w", "x", "X"],
        default: "fE",
      },
    },
    {
      name: "--rootdir",
      description:
        "Define root directory for tests. Can be relative path: 'root_dir', './root_dir', 'root_dir/another_dir/'; absolute path: '/home/user/root_dir'; path with variables:'$HOME/root_dir'",
      args: {
        name: "Root Dir",
        template: "folders",
      },
    },
    {
      name: "--runxfail",
      description:
        "Report the results of xfail tests as if they were not marked",
    },
    {
      name: "-s",
      description: "Shortcut for --capture=no",
    },
    {
      name: "--setup-only",
      description: "Only setup fixtures, do not execute tests",
    },
    {
      name: "--setup-show",
      description: "Show setup of fixtures while executing tests",
    },
    {
      name: "--setup-plan",
      description:
        "Show what fixtures and tests would be executed but don't execute anything",
    },
    {
      name: "--show-capture",
      description:
        "Controls how captured stdout/stderr/log is shown on failed tests",
      args: {
        name: "Capture method",
        suggestions: ["no", "stdout", "stderr", "log", "all"],
        default: "all",
      },
    },
    {
      name: ["--stepwise", "--sw"],
      description:
        "Exit on test failure and continue from last failing test next time",
    },
    {
      name: ["--stepwise-skip", "--sw-skip"],
      description:
        "Ignore the first failing test but stop on the next failing test. Implicitly enables --stepwise",
    },
    {
      name: ["--stepwise-reset", "--sw-reset"],
      description:
        "Resets stepwise state, restarting the stepwise workflow. Implicitly enables --stepwise",
    },
    {
      name: "--strict",
      description: "Enables the strict option",
    },
    {
      name: "--strict-config",
      description:
        "Any warnings encountered while parsing the `pytest` section of the configuration file raise errors",
    },
    {
      name: "--strict-markers",
      description:
        "Markers not registered in the `markers` section of the configuration file raise errors",
    },
    {
      name: "--tb",
      description: "Traceback print mode",
      args: {
        name: "Traceback print mode",
        suggestions: ["auto", "long", "short", "line", "native", "no"],
      },
    },
    {
      name: "--trace",
      description: "Immediately break when running each test",
    },
    {
      name: "--trace-config",
      description: "Trace considerations of conftest.py files",
    },
    {
      name: ["--verbose", "-v"],
      description: "Increase verbosity",
      isRepeatable: true,
    },
    {
      name: "--verbosity",
      description: "Set verbosity. Default is 0",
      args: {
        name: "Verbosity level",
        default: "0",
      },
    },
    {
      name: ["--version", "-V"],
      description:
        "Display pytest version and information about plugins. When given twice, also display information about plugins",
      isRepeatable: true,
    },
    {
      name: "--xfail-tb",
      description: "Show tracebacks for xfail (as long as --tb != no)",
    },
    {
      name: ["--pythonwarnings", "-W"],
      description:
        "Set which warnings to report, see -W option of python itself",
      isRepeatable: true,
      args: {
        name: "Warnings to report",
      },
    },
  ],
};
export default completionSpec;
