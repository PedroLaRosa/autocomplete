// PHPUnit v13.4.8 (Packagist and GitHub tag 13.4.8, 2026-11-20). Source: src/TextUI/Help.php,
// src/TextUI/Configuration/Cli/Builder.php and DEPRECATIONS.md at tag 13.4.8, read statically
// (the binary was not executed); the PHAR-only options come from build/templates/phar-autoload.php.in

const parseList = (out: string): Fig.Suggestion[] =>
  out
    .split("\n")
    .map((line) => line.match(/^\s*- (.+?) \(\d+ tests?\)\s*$/)?.[1])
    .filter((name): name is string => name !== undefined)
    .map((name) => ({ name, icon: "fig://icon?type=php" }));

const suites: Fig.Generator = {
  script: ["phpunit", "--list-suites"],
  postProcess: parseList,
};

const groups: Fig.Generator = {
  script: ["phpunit", "--list-groups"],
  postProcess: parseList,
};

const orders = [
  "default",
  "defects",
  "duration-ascending",
  "duration-descending",
  "modified-ascending",
  "modified-descending",
  "random",
  "reverse",
  "size-ascending",
  "size-descending",
];

const fileOption = (
  name: string,
  description: string,
  argName = "file"
): Fig.Option => ({
  name,
  description,
  args: { name: argName, template: "filepaths" },
});

const folderOption = (name: string, description: string): Fig.Option => ({
  name,
  description,
  args: { name: "dir", template: "folders" },
});

const stopOn = (what: string, description: string): Fig.Option => ({
  name: `--stop-on-${what}`,
  description: `Stop after first (or n-th) ${description}`,
  requiresSeparator: true,
  args: { name: "n", isOptional: true },
});

// [suffix, condition that is reported through the shell exit code]
const failOnConditions: [string, string][] = [
  ["empty-test-suite", "no tests were run"],
  ["warning", "a warning was triggered"],
  ["risky", "a test was considered risky"],
  ["deprecation", "a deprecation was triggered"],
  ["self-deprecation", "a deprecation was triggered in first-party code"],
  [
    "direct-deprecation",
    "a deprecation was triggered in third-party code called from first-party code",
  ],
  [
    "indirect-deprecation",
    "a deprecation was triggered in third-party code called from third-party code",
  ],
  ["phpunit-deprecation", "a PHPUnit deprecation was triggered"],
  ["phpunit-notice", "a PHPUnit notice was triggered"],
  ["phpunit-warning", "a PHPUnit warning was triggered"],
  ["notice", "a notice was triggered"],
  ["skipped", "a test was skipped"],
  ["incomplete", "a test was marked incomplete"],
];

const failOnOptions: Fig.Option[] = [
  ...failOnConditions.map(([suffix, condition]): Fig.Option => ({
    name: `--fail-on-${suffix}`,
    description: `Signal failure using shell exit code when ${condition}`,
    exclusiveOn: [`--do-not-fail-on-${suffix}`],
  })),
  {
    name: "--fail-on-all-issues",
    description:
      "Signal failure using shell exit code when an issue is triggered",
  },
  ...failOnConditions.map(([suffix, condition]): Fig.Option => ({
    name: `--do-not-fail-on-${suffix}`,
    description: `Do not signal failure using shell exit code when ${condition}`,
    exclusiveOn: [`--fail-on-${suffix}`],
  })),
];

const displayOptions: Fig.Option[] = [
  ["incomplete", "incomplete tests"],
  ["skipped", "skipped tests"],
  ["deprecations", "deprecations triggered by tests"],
  ["phpunit-deprecations", "PHPUnit deprecations"],
  ["phpunit-notices", "PHPUnit notices"],
  ["errors", "errors triggered by tests"],
  ["notices", "notices triggered by tests"],
  ["warnings", "warnings triggered by tests"],
  ["all-issues", "all issues that are triggered"],
].map(([suffix, what]) => ({
  name: `--display-${suffix}`,
  description: `Display details for ${what}`,
}));

const completionSpec: Fig.Spec = {
  name: "phpunit",
  description:
    "The PHPUnit is a command-line test runner that can be invoked through the phpunit command",
  args: {
    name: "directory|file",
    template: "filepaths",
    isVariadic: true,
    isOptional: true,
  },
  options: [
    // Configuration
    fileOption(
      "--bootstrap",
      "A PHP script that is included before the tests run"
    ),
    {
      name: ["-c", "--configuration"],
      description: "Read configuration from XML file",
      args: { name: "file", template: "filepaths" },
    },
    {
      name: "--no-configuration",
      description: "Ignore default configuration file (phpunit.xml)",
    },
    {
      name: "--extension",
      description: "Register test runner extension with bootstrap class",
      isRepeatable: true,
      args: { name: "class" },
    },
    {
      name: "--no-extensions",
      description: "Do not register test runner extensions",
    },
    {
      name: "--include-path",
      description: "Prepend PHP's include_path with given path(s)",
      args: { name: "path(s)" },
    },
    {
      name: "-d",
      description: "Sets a php.ini value",
      isRepeatable: true,
      args: { name: "key[=value]" },
    },
    folderOption("--cache-directory", "Specify cache directory"),
    {
      name: "--generate-configuration",
      description: "Generate configuration file with suggested settings",
    },
    {
      name: "--migrate-configuration",
      description: "Migrate configuration file to current format",
    },
    {
      name: "--validate-configuration",
      description: "Validate XML configuration file",
    },
    {
      name: "--generate-baseline",
      description: "Generate baseline for issues",
      exclusiveOn: ["--ignore-baseline", "--use-baseline"],
      args: { name: "file", template: "filepaths" },
    },
    {
      name: "--use-baseline",
      description: "Use baseline to ignore issues",
      exclusiveOn: ["--generate-baseline"],
      args: { name: "file", template: "filepaths" },
    },
    {
      name: "--ignore-baseline",
      description: "Do not use baseline to ignore issues",
      exclusiveOn: ["--generate-baseline"],
    },

    // Selection
    {
      name: "--all",
      description: "Ignore test selection from XML configuration file",
    },
    { name: "--list-suites", description: "List available test suites" },
    {
      name: "--testsuite",
      description: "Only run tests from the specified test suite(s)",
      args: { name: "name", generators: suites },
    },
    {
      name: "--exclude-testsuite",
      description: "Exclude tests from the specified test suite(s)",
      args: { name: "name", generators: suites },
    },
    { name: "--list-groups", description: "List available test groups" },
    {
      name: "--group",
      description:
        'Only run tests from the specified group(s); use "a+b" for the tests that are in group "a" and in group "b"',
      isRepeatable: true,
      args: { name: "name", generators: groups },
    },
    {
      name: "--exclude-group",
      description:
        'Exclude tests from the specified group(s); use "a+b" for the tests that are in group "a" and in group "b"',
      isRepeatable: true,
      args: { name: "name", generators: groups },
    },
    {
      name: "--covers",
      description: "Only run tests that intend to cover the specified name",
      isRepeatable: true,
      args: { name: "name" },
    },
    {
      name: "--uses",
      description: "Only run tests that intend to use the specified name",
      isRepeatable: true,
      args: { name: "name" },
    },
    {
      name: "--requires-php-extension",
      description: "Only run tests that require the specified PHP extension",
      isRepeatable: true,
      args: { name: "name" },
    },
    { name: "--list-test-files", description: "List available test files" },
    {
      name: "--list-test-ids",
      description: "List available tests as test IDs",
    },
    { name: "--list-tests", description: "List available tests" },
    fileOption("--list-tests-xml", "List available tests in XML format"),
    {
      name: "--filter",
      description: "Filter which tests to run",
      args: { name: "pattern" },
    },
    {
      name: "--exclude-filter",
      description: "Exclude tests for the specified filter pattern",
      args: { name: "pattern" },
    },
    {
      name: "--test-suffix",
      description:
        "Only search for test in files with specified suffix(es). Default: Test.php,.phpt",
      isRepeatable: true,
      args: { name: "suffixes" },
    },
    fileOption(
      "--test-files-file",
      "Only run test files listed in file (one file by line)"
    ),
    {
      name: "--run-test-id",
      description: "Only run the test identified by the specified test ID",
      args: { name: "test-id" },
    },
    fileOption(
      "--test-id-filter-file",
      "Only run tests listed by test ID in file (one test ID per line)"
    ),

    // Execution
    {
      name: "--process-isolation",
      description: "Run each test in a separate PHP process",
    },
    {
      name: "--globals-backup",
      description: "Backup and restore $GLOBALS for each test",
    },
    {
      name: "--static-backup",
      description: "Backup and restore static properties for each test",
    },
    {
      name: "--strict-coverage",
      description: "Be strict about code coverage metadata",
    },
    {
      name: "--require-coverage-contribution",
      description:
        "Be strict about tests that do not contribute to code coverage",
    },
    {
      name: "--strict-global-state",
      description: "Be strict about changes to global state",
    },
    {
      name: "--disallow-test-output",
      description: "Be strict about output during tests",
    },
    {
      name: "--enforce-time-limit",
      description: "Enforce time limit based on test size",
    },
    {
      name: "--default-time-limit",
      description: "Timeout in seconds for tests that have no declared size",
      args: { name: "sec" },
    },
    {
      name: "--timeout",
      description:
        "Stop the test run after the specified number of seconds (wall-clock time for the entire run)",
      args: { name: "sec" },
    },
    {
      name: "--do-not-report-useless-tests",
      description: "Do not report tests that do not test anything",
    },
    stopOn("defect", "error, failure, warning, or risky test"),
    stopOn("error", "error"),
    stopOn("failure", "failure"),
    stopOn("warning", "warning"),
    stopOn("risky", "risky test"),
    stopOn("deprecation", "test that triggered a deprecation"),
    stopOn("notice", "test that triggered a notice"),
    stopOn("skipped", "skipped test"),
    stopOn("incomplete", "incomplete test"),
    ...failOnOptions,
    {
      name: "--record-test-run-history",
      description: "Record test run history",
      exclusiveOn: ["--do-not-record-test-run-history"],
    },
    {
      name: "--do-not-record-test-run-history",
      description: "Do not record test run history",
      exclusiveOn: ["--record-test-run-history"],
    },
    {
      name: "--cache-result",
      description:
        "Record test run history (deprecated, use --record-test-run-history)",
      deprecated: true,
    },
    {
      name: "--do-not-cache-result",
      description:
        "Do not record test run history (deprecated, use --do-not-record-test-run-history)",
      deprecated: true,
    },
    {
      name: "--cache-test-index",
      description: "Write test index to cache file",
      exclusiveOn: ["--do-not-cache-test-index"],
    },
    {
      name: "--do-not-cache-test-index",
      description: "Do not write test index to cache file",
      exclusiveOn: ["--cache-test-index"],
    },
    {
      name: "--warn-when-php-is-not-configured-for-development",
      description:
        "Trigger a test runner warning when PHP is not configured for development",
      exclusiveOn: ["--do-not-warn-when-php-is-not-configured-for-development"],
    },
    {
      name: "--do-not-warn-when-php-is-not-configured-for-development",
      description:
        "Do not trigger a test runner warning when PHP is not configured for development",
      exclusiveOn: ["--warn-when-php-is-not-configured-for-development"],
    },
    {
      name: "--order-by",
      description: "Run tests in the specified order",
      args: { name: "order", suggestions: orders },
    },
    {
      name: "--resolve-dependencies",
      description:
        "Reorder tests to resolve dependencies between them (default)",
      exclusiveOn: ["--ignore-dependencies"],
    },
    {
      name: "--ignore-dependencies",
      description: "Do not reorder tests to resolve dependencies between them",
      exclusiveOn: ["--resolve-dependencies"],
    },
    {
      name: "--random-order",
      description: 'Alias for "--order-by random"',
      exclusiveOn: ["--reverse-order"],
    },
    {
      name: "--random-order-seed",
      description:
        "Use the specified random seed when running tests in random order",
      args: { name: "N" },
    },
    {
      name: "--repeat",
      description: "Run each test N times, stopping at the first failure",
      exclusiveOn: ["--retry"],
      args: { name: "N" },
    },
    {
      name: "--retry",
      description:
        "Attempt each test up to N times, stopping at the first success",
      exclusiveOn: ["--repeat"],
      args: { name: "N" },
    },
    {
      name: "--reverse-order",
      description: 'Alias for "--order-by reverse"',
      exclusiveOn: ["--random-order"],
    },

    // Reporting
    {
      name: "--colors",
      description: "Use colors in output",
      requiresSeparator: true,
      args: {
        name: "flag",
        isOptional: true,
        suggestions: ["never", "auto", "always"],
      },
    },
    {
      name: "--columns",
      description: "Number of columns to use for progress output",
      args: {
        name: "n",
        suggestions: [
          {
            name: "max",
            description: "Use maximum number of columns for progress output",
          },
        ],
      },
    },
    {
      name: "--diff-context",
      description:
        "Number of context lines shown around changes in diffs (default: 3)",
      args: { name: "n" },
    },
    {
      name: "--stderr",
      description: "Write to STDERR instead of STDOUT",
    },
    {
      name: "--no-progress",
      description: "Disable output of test execution progress",
    },
    {
      name: "--no-results",
      description: "Disable output of test results",
    },
    {
      name: "--no-output",
      description: "Disable all output",
      exclusiveOn: ["--compact", "--teamcity", "--testdox", "--debug"],
    },
    ...displayOptions,
    {
      name: "--reverse-list",
      description: "Print defects in reverse order",
    },
    {
      name: "--compact",
      description:
        "Replace default progress and result output with compact format",
      exclusiveOn: ["--teamcity", "--testdox", "--debug", "--no-output"],
    },
    {
      name: "--teamcity",
      description:
        "Replace default progress and result output with TeamCity format",
      exclusiveOn: ["--compact", "--no-output"],
    },
    {
      name: "--testdox",
      description: "Replace default result output with TestDox format",
      exclusiveOn: ["--compact", "--no-output"],
    },
    {
      name: "--testdox-summary",
      description:
        "Repeat TestDox output for tests with errors, failures, or issues",
      exclusiveOn: ["--compact", "--no-output"],
    },
    {
      name: "--debug",
      description:
        "Replace default progress and result output with debugging information",
      exclusiveOn: ["--compact", "--no-output"],
    },
    {
      name: "--with-telemetry",
      description:
        "Include telemetry information in debugging information output",
    },

    // Logging
    fileOption("--log-junit", "Write test results in JUnit XML format to file"),
    fileOption(
      "--log-otr",
      "Write test results in Open Test Reporting XML format to file"
    ),
    fileOption(
      "--log-teamcity",
      "Write test results in TeamCity format to file"
    ),
    fileOption(
      "--testdox-html",
      "Write test results in TestDox format (HTML) to file"
    ),
    fileOption(
      "--testdox-text",
      "Write test results in TestDox format (plain text) to file"
    ),
    fileOption("--log-events-text", "Stream events as plain text to file"),
    {
      ...fileOption(
        "--log-events-verbose-text",
        "Stream events as plain text with extended information to file"
      ),
      deprecated: true,
    },
    {
      name: "--include-git-information",
      description: "Include Git information in supported formats",
    },
    {
      name: "--no-logging",
      description: "Ignore logging configured in the XML configuration file",
    },

    // Code coverage
    fileOption(
      "--coverage-clover",
      "Write code coverage report in Clover XML format to file"
    ),
    fileOption(
      "--coverage-openclover",
      "Write code coverage report in OpenClover XML format to file"
    ),
    fileOption(
      "--coverage-cobertura",
      "Write code coverage report in Cobertura XML format to file"
    ),
    fileOption(
      "--coverage-crap4j",
      "Write code coverage report in Crap4J XML format to file"
    ),
    folderOption(
      "--coverage-html",
      "Write code coverage report in HTML format to directory"
    ),
    {
      name: "--without-class-view",
      description:
        "Render code coverage report in HTML format without class view",
    },
    {
      name: "--without-file-view",
      description:
        "Render code coverage report in HTML format without file view",
    },
    folderOption(
      "--coverage-jsonl",
      "Write code coverage report in JSONL format to directory"
    ),
    fileOption("--coverage-php", "Write serialized code coverage data to file"),
    {
      name: "--coverage-text",
      description:
        "Write code coverage report in text format to file [default: standard output]",
      requiresSeparator: true,
      args: { name: "file", template: "filepaths", isOptional: true },
    },
    {
      name: "--only-summary-for-coverage-text",
      description:
        "Option for code coverage report in text format: only show summary",
    },
    {
      name: "--show-uncovered-for-coverage-text",
      description:
        "Option for code coverage report in text format: show uncovered files",
    },
    folderOption(
      "--coverage-xml",
      "Write code coverage report in XML format to directory"
    ),
    {
      name: "--exclude-source-from-xml-coverage",
      description:
        "Exclude source element from code coverage report in XML format",
    },
    {
      name: "--warm-coverage-cache",
      description: "Warm static analysis cache",
    },
    {
      name: "--coverage-filter",
      description: "Include directory in code coverage reporting",
      isRepeatable: true,
      args: { name: "dir", template: "folders" },
    },
    {
      name: "--branch-coverage",
      description: "Report branch coverage in addition to line coverage",
    },
    {
      name: "--path-coverage",
      description: "Report path coverage in addition to line/branch coverage",
    },
    {
      name: "--disable-coverage-ignore",
      description: "Disable metadata for ignoring code coverage",
    },
    {
      name: "--disable-coverage-targeting",
      description: "Disable metadata for code coverage targeting",
    },
    {
      name: "--no-coverage",
      description:
        "Ignore code coverage reporting configured in the XML configuration file",
    },

    // PHAR only
    {
      name: "--manifest",
      description:
        "Print Software Bill of Materials (SBOM) in plain-text format (PHAR only)",
    },
    {
      name: "--sbom",
      description:
        "Print Software Bill of Materials (SBOM) in CycloneDX XML format (PHAR only)",
    },
    {
      name: "--composer-lock",
      description:
        "Print composer.lock file used to build the PHAR (PHAR only)",
    },

    // Miscellaneous
    {
      name: ["-h", "--help"],
      description: "Prints this usage information",
    },
    {
      name: "--version",
      description: "Prints the version and exits",
    },
    {
      name: "--atleast-version",
      description: "Checks that version is greater than min and exits",
      args: { name: "min" },
    },
    {
      name: "--check-version",
      description: "Checks whether PHPUnit is the latest version and exits",
    },
    {
      name: "--check-php-configuration",
      description: "Checks whether PHP configuration follows best practices",
    },
  ],
};

export default completionSpec;
