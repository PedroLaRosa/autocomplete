// Jest v30.5.2 (npm latest, 2026-11-20). Source: jest-cli@30.5.2 yargs option table (src/args.ts), jest-config/jest-validate 30.5.x
// (deprecated/removed CLI options) and docs/CLI.md at tag v30.5.2; read statically from the npm tarballs/git, jest was not executed.
// Not carried over from earlier specs because Jest 30 rejects them as unrecognized/deprecated: --init (use create-jest),
// --testPathPattern (now --testPathPatterns), --setupTestFrameworkScriptFile (now --setupFilesAfterEnv).
// The -v alias of --version is kept because docs/CLI.md documents it, but it is not defined in args.ts.
const listOption = (
  name: string | string[],
  description: string,
  argName: string,
  template?: Fig.TemplateStrings
): Fig.Option => ({
  name,
  description,
  isRepeatable: true,
  args: {
    name: argName,
    isVariadic: true,
    ...(template && { template }),
  },
});

const pathOption = (
  name: string,
  description: string,
  template: Fig.TemplateStrings = "filepaths"
): Fig.Option => ({
  name,
  description,
  args: { name: "path", template },
});

const jsonOption = (name: string, description: string): Fig.Option => ({
  name,
  description,
  args: { name: "json" },
});

const completionSpec: Fig.Spec = {
  name: "jest",
  description:
    "A delightful JavaScript Testing Framework with a focus on simplicity",
  args: {
    name: "regexForTestFiles",
    description: "Regular expressions matched against test file paths",
    isVariadic: true,
    isOptional: true,
    template: "filepaths",
  },
  options: [
    {
      name: "--all",
      description:
        "Run all tests, even if onlyChanged is set by default (the opposite of --onlyChanged)",
    },
    {
      name: "--automock",
      description: "Automock all files by default",
    },
    {
      name: ["--bail", "-b"],
      displayName: "--bail[=<n>]",
      requiresSeparator: true,
      description:
        "Exit the test suite immediately upon n number of failing test suite. Defaults to 1",
      args: {
        name: "n",
        isOptional: true,
      },
    },
    {
      name: "--cache",
      description: "Whether to use the transform cache. Defaults to true",
    },
    {
      name: "--no-cache",
      description: "Disable the transform cache",
    },
    pathOption(
      "--cacheDirectory",
      "The directory where Jest should store its cached dependency information",
      "folders"
    ),
    {
      name: "--changedFilesWithAncestor",
      description:
        "Runs tests related to the current changes and the changes made in the last commit",
    },
    {
      name: "--changedSince",
      description:
        "Runs tests related to the changes since the provided branch or commit hash",
      args: {
        name: "since",
      },
    },
    {
      name: "--ci",
      description:
        "Instead of the regular behavior of storing a new snapshot automatically, will fail the test and require Jest to be run with --updateSnapshot",
    },
    {
      name: "--clearCache",
      description:
        "Deletes the Jest cache directory and then exits without running tests",
    },
    {
      name: "--clearMocks",
      description:
        "Automatically clear mock calls, instances, contexts and results before every test",
    },
    {
      name: "--collectCoverageFrom",
      displayName: "--collectCoverageFrom=<glob>",
      requiresSeparator: true,
      description:
        "A glob pattern relative to rootDir matching the files that coverage info needs to be collected from",
      args: {
        name: "glob",
      },
    },
    {
      name: "--collectTests",
      description:
        "Discover and print all test suites and test names without executing them",
    },
    {
      name: ["--color", "--colors"],
      description:
        "Forces test results output highlighting even if stdout is not a TTY. Set to false to disable colors",
    },
    {
      name: ["--config", "-c"],
      displayName: "--config=<path>",
      description:
        "The path to a Jest config file specifying how to find and execute tests, or a JSON-encoded configuration",
      args: {
        name: "path",
        template: "filepaths",
      },
    },
    {
      name: ["--coverage", "--collectCoverage"],
      displayName: "--coverage[=<boolean>]",
      requiresSeparator: true,
      description: "Enable or disable coverage, disabled by default",
      args: {
        name: "true|false",
        isOptional: true,
        suggestions: [
          {
            name: "true",
          },
          {
            name: "false",
          },
        ],
      },
    },
    pathOption(
      "--coverageDirectory",
      "The directory where Jest should output its coverage files",
      "folders"
    ),
    listOption(
      "--coveragePathIgnorePatterns",
      "Regexp patterns matched against file paths; coverage is skipped for files that match",
      "regex"
    ),
    {
      name: "--coverageProvider",
      displayName: "--coverageProvider=<provider>",
      requiresSeparator: true,
      description:
        "Indicates which provider should be used to instrument code for coverage",
      args: {
        name: "babel|v8",
        suggestions: [{ name: "babel" }, { name: "v8" }],
      },
    },
    {
      name: "--coverageReporters",
      description:
        "A list of reporter names that Jest uses when writing coverage reports; any istanbul reporter can be used",
      isRepeatable: true,
      args: {
        name: "reporter",
        isVariadic: true,
        suggestions: [
          "clover",
          "cobertura",
          "html",
          "html-spa",
          "json",
          "json-summary",
          "lcov",
          "lcovonly",
          "none",
          "teamcity",
          "text",
          "text-lcov",
          "text-summary",
        ],
      },
    },
    jsonOption(
      "--coverageThreshold",
      "A JSON string used to configure minimum threshold enforcement for coverage results"
    ),
    {
      name: "--debug",
      description: "Print debugging info about your Jest config",
    },
    {
      name: "--detectLeaks",
      description:
        "Experimental: detect memory leaks in tests by checking whether the global object is garbage collected after each test",
    },
    {
      name: "--detectOpenHandles",
      description:
        "Attempt to collect and print open handles preventing Jest from exiting cleanly (implies --runInBand)",
    },
    {
      name: ["--env", "--testEnvironment"],
      displayName: "--env=<environment>",
      requiresSeparator: true,
      description: "The test environment used for all tests",
      args: {
        name: "jsdom|node|path/to/env.js",
        template: "filepaths",
        suggestions: [{ name: "jsdom" }, { name: "node" }],
      },
    },
    {
      name: "--errorOnDeprecated",
      description: "Make calling deprecated APIs throw helpful error messages",
    },
    {
      name: ["--expand", "-e"],
      description:
        "Use this flag to show full diffs and errors instead of a patch",
    },
    pathOption(
      "--filter",
      "Path to a module exporting a function that filters the list of tests to run"
    ),
    {
      name: "--findRelatedTests",
      displayName: "--findRelatedTests <path1> ... <pathN>",
      description:
        "Find and run the tests that cover a space separated list of source files that were passed in as arguments",
      args: {
        name: "<path1> ... <pathN>",
        isVariadic: true,
        template: "filepaths",
      },
    },
    {
      name: "--forceExit",
      description: "Force Jest to exit after all tests have completed running",
    },
    pathOption(
      "--globalSetup",
      "The path to a module that runs once before all tests"
    ),
    pathOption(
      "--globalTeardown",
      "The path to a module that runs once after all tests"
    ),
    jsonOption(
      "--globals",
      "A JSON string with a map of global variables that need to be available in all test environments"
    ),
    jsonOption(
      "--haste",
      "A JSON string with a map of variables for the haste module system"
    ),
    {
      name: ["--help", "-h"],
      description: "Show the help information",
    },
    listOption(
      "--ignoreProjects",
      "Ignore the tests of the specified projects, identified by the displayName of each project",
      "project"
    ),
    {
      name: "--injectGlobals",
      description:
        "Insert Jest's globals (expect, test, describe, beforeEach etc.) into the global environment",
    },
    {
      name: "--json",
      description: "Prints the test results in JSON",
    },
    {
      name: "--lastCommit",
      description:
        "Run all tests affected by file changes in the last commit made",
    },
    {
      name: "--listTests",
      description:
        "Lists all test files that Jest will run given the arguments, and exits",
    },
    {
      name: "--logHeapUsage",
      description: "Logs the heap usage after every test",
    },
    {
      name: "--maxConcurrency",
      displayName: "--maxConcurrency=<num>",
      requiresSeparator: true,
      description:
        "Prevents Jest from executing more than the specified amount of tests at the same time (only affects test.concurrent)",
      args: {
        name: "num",
      },
    },
    {
      name: ["--maxWorkers", "-w"],
      displayName: "--maxWorkers=<num>|<string>",
      description:
        "Specifies the maximum number of workers the worker-pool will spawn for running tests, e.g. 4 or 50%",
      args: {
        name: "<num>|<string>",
      },
    },
    listOption(
      "--moduleDirectories",
      "Directory names to be searched recursively up from the requiring module's location",
      "directory"
    ),
    listOption(
      "--moduleFileExtensions",
      "File extensions your modules use, looked up when a module is required without an extension",
      "extension"
    ),
    jsonOption(
      "--moduleNameMapper",
      "A JSON string with a map from regular expressions to module names or arrays of module names"
    ),
    listOption(
      "--modulePathIgnorePatterns",
      "Regexp patterns matched against module paths before they are considered visible to the module loader",
      "regex"
    ),
    listOption(
      "--modulePaths",
      "Absolute paths to additional locations to search when resolving modules",
      "path",
      "folders"
    ),
    {
      name: "--noStackTrace",
      description: "Disables stack trace in test results output",
    },
    {
      name: "--notify",
      description: "Activates native OS notifications for test results",
    },
    {
      name: "--notifyMode",
      description: "Specifies when notifications will appear for test results",
      args: {
        name: "mode",
        suggestions: [
          "always",
          "failure",
          "success",
          "change",
          "success-change",
          "failure-change",
        ],
      },
    },
    {
      name: ["--onlyChanged", "-o"],
      description:
        "Attempts to identify which tests to run based on which files have changed in the current repository",
    },
    {
      name: ["--onlyFailures", "-f"],
      description: "Run tests that failed in the previous execution",
    },
    {
      name: "--openHandlesTimeout",
      description:
        "Print a warning if Jest has not exited cleanly after this number of milliseconds (0 disables the warning)",
      args: {
        name: "milliseconds",
      },
    },
    {
      name: "--outputFile",
      displayName: "--outputFile=<filename>",
      requiresSeparator: true,
      description:
        "Write test results to a file when the --json option is also specified",
      args: {
        name: "filename",
      },
    },
    {
      name: "--passWithNoTests",
      description: "Allows the test suite to pass when no files are found",
    },
    {
      name: "--preset",
      description: "A preset that is used as a base for Jest's configuration",
      args: {
        name: "preset",
      },
    },
    pathOption(
      "--prettierPath",
      "The path to the prettier module used for inline snapshots"
    ),
    {
      name: "--projects",
      displayName: "--projects <path1> ... <pathN>",
      description:
        "Run tests from one or more projects, found in the specified paths; also takes path globs",
      args: {
        name: "<path1> ... <pathN>",
        isVariadic: true,
        template: "filepaths",
      },
    },
    {
      name: "--randomize",
      description:
        "Shuffle the order of the tests within a file, based on the seed (see --seed)",
    },
    {
      name: "--reporters",
      displayName: "--reporters=<reporter>",
      requiresSeparator: true,
      isRepeatable: true,
      description: "Run tests with specified reporters",
      args: {
        name: "reporter",
        suggestions: ["default", "summary", "github-actions", "agent"],
      },
    },
    {
      name: "--resetMocks",
      description:
        "Automatically reset mock state before every test, removing fake implementations",
    },
    {
      name: "--resetModules",
      description:
        "Reset the module registry for every test file before running each individual test",
    },
    jsonOption(
      "--resolver",
      "A JSON string which allows the use of a custom resolver"
    ),
    {
      name: "--restoreMocks",
      description:
        "Automatically restore mock state and implementation before every test",
    },
    pathOption(
      "--rootDir",
      "The root directory that Jest should scan for tests and modules within",
      "folders"
    ),
    {
      name: "--roots",
      displayName: "--roots <path1> ... <pathN>",
      description:
        "A list of paths to directories that Jest should use to search for files in",
      args: {
        name: "<path1> ... <pathN>",
        isVariadic: true,
        template: "folders",
      },
    },
    {
      name: ["--runInBand", "-i"],
      description:
        "Run all tests serially in the current process, rather than creating a worker pool of child processes that run tests",
    },
    {
      name: "--runner",
      description:
        "Allows to use a custom runner instead of Jest's default test runner",
      args: {
        name: "runner",
      },
    },
    {
      name: "--runTestsByPath",
      description:
        "Run only the tests that were specified with their exact paths",
    },
    {
      name: "--seed",
      description:
        "Sets a seed value that can be retrieved in a test file via jest.getSeed()",
      args: {
        name: "num",
      },
    },
    listOption(
      "--selectProjects",
      "Run only the tests of the specified projects, identified by the displayName of each project",
      "project"
    ),
    listOption(
      "--setupFiles",
      "Paths to modules that run some code to configure or set up the testing environment before each test",
      "path",
      "filepaths"
    ),
    listOption(
      "--setupFilesAfterEnv",
      "Paths to modules that run some code to configure or set up the testing framework before each test file",
      "path",
      "filepaths"
    ),
    {
      name: "--shard",
      description:
        "Execute only the given shard of the test suite, in the form shardIndex/shardCount (1-based)",
      args: {
        name: "shardIndex/shardCount",
      },
    },
    {
      name: "--showConfig",
      description: "Print your Jest config and then exits",
    },
    {
      name: "--showSeed",
      description: "Prints the seed value in the test report summary",
    },
    {
      name: "--silent",
      description: "Prevent tests from printing messages through the console",
    },
    {
      name: "--skipFilter",
      description: "Disables the filter provided by --filter",
    },
    listOption(
      "--snapshotSerializers",
      "Paths to snapshot serializer modules Jest should use for snapshot testing",
      "path",
      "filepaths"
    ),
    jsonOption(
      "--testEnvironmentOptions",
      "A JSON string with options that will be passed to the test environment"
    ),
    {
      name: "--testFailureExitCode",
      description: "Exit code of jest when the test run failed",
      args: {
        name: "code",
      },
    },
    {
      name: "--testLocationInResults",
      description: "Adds a location field to test results",
    },
    listOption(
      "--testMatch",
      "The glob patterns Jest uses to detect test files",
      "glob"
    ),
    {
      name: ["--testNamePattern", "-t"],
      displayName: "--testNamePattern=<regex>",
      description: "Run only tests with a name that matches the regex",
      args: {
        name: "regex",
      },
    },
    {
      name: "--testPathIgnorePatterns",
      displayName: "--testPathIgnorePatterns=<regex>|[array]",
      requiresSeparator: true,
      isRepeatable: true,
      description:
        "Regexp pattern strings that are tested against all tests paths before executing the test; tests with a matching path are skipped",
      args: {
        name: "regex|[array]",
      },
    },
    {
      name: "--testPathPatterns",
      displayName: "--testPathPatterns=<regex>",
      requiresSeparator: true,
      isRepeatable: true,
      description:
        "A regexp pattern string that is matched against all tests paths before executing the test",
      args: {
        name: "regex",
      },
    },
    listOption(
      "--testRegex",
      "Regexp patterns that Jest uses to detect test files",
      "regex"
    ),
    pathOption(
      "--testResultsProcessor",
      "A node module used as a custom results processor that receives the result object"
    ),
    {
      name: "--testRunner",
      displayName: "--testRunner=<path>",
      requiresSeparator: true,
      description: "Lets you specify a custom test runner",
      args: {
        name: "path",
        template: "filepaths",
      },
    },
    {
      name: "--testSequencer",
      displayName: "--testSequencer=<path>",
      requiresSeparator: true,
      description: "Lets you specify a custom test sequencer",
      args: {
        name: "path",
        template: "filepaths",
      },
    },
    {
      name: "--testTimeout",
      displayName: "--testTimeout=<num>",
      requiresSeparator: true,
      description: "Default timeout of a test in milliseconds",
      args: {
        name: "timeout in ms",
      },
    },
    jsonOption(
      "--transform",
      "A JSON string which maps from regular expressions to paths to transformers"
    ),
    listOption(
      "--transformIgnorePatterns",
      "Regexp patterns matched against all source file paths before transformation",
      "regex"
    ),
    listOption(
      "--unmockedModulePathPatterns",
      "Regexp patterns matched against modules before the module loader automatically returns a mock for them",
      "regex"
    ),
    {
      name: ["--updateSnapshot", "-u"],
      description:
        "Use this flag to re-record every snapshot that fails during this test run",
    },
    {
      name: "--useStderr",
      description: "Divert all output to stderr",
    },
    {
      name: "--verbose",
      description:
        "Display individual test results with the test suite hierarchy",
    },
    {
      name: ["--version", "-v"],
      description: "Print the version and exit",
    },
    {
      name: "--waitForUnhandledRejections",
      description:
        "Gives one event loop turn to handle rejectionHandled, uncaughtException or unhandledRejection",
    },
    {
      name: "--watch",
      description:
        "Watch files for changes and rerun tests related to changed files",
    },
    {
      name: "--no-watch",
      description: "Explicitly disable watch mode",
    },
    {
      name: "--watchAll",
      description:
        "Watch files for changes and rerun all tests when something changes",
    },
    {
      name: "--no-watchAll",
      description: "Explicitly disable watch-all mode",
    },
    listOption(
      "--watchPathIgnorePatterns",
      "Regexp patterns matched against paths before triggering a test re-run in watch mode; matching paths are skipped",
      "regex"
    ),
    {
      name: "--watchman",
      description:
        "Whether to use watchman for file crawling. Defaults to true",
    },
    {
      name: "--no-watchman",
      description: "Disable watchman for file crawling",
    },
    {
      name: "--workerGracefulExitTimeout",
      description:
        "Timeout in milliseconds for worker processes to exit gracefully after tests complete, after which they are force-killed",
      args: {
        name: "milliseconds",
      },
    },
    {
      name: "--workerThreads",
      description:
        "Use worker threads instead of child processes for parallelization (experimental)",
    },
  ],
};

export default completionSpec;
