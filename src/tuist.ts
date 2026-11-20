// Tuist v4.218.1 (git tag 4.218.1 of tuist/tuist, same version as the Homebrew cask, 2026-11-20).
// Source: static read of the Swift ArgumentParser definitions under cli/Sources of that tag
// (TuistCommand plus every command module); the binary is macOS-only and was not run. The macOS
// command set (`#if os(macOS)` branches) is modelled and hidden commands/options are marked hidden.
// Not modelled: the TUIST_* environment variables behind most options, the template-specific
// options of `tuist scaffold <template>` (loaded from the template at runtime) and external
// `tuist-<name>` plugin tasks.

const pagination = (items: string, pageSize: number): Fig.Option[] => [
  {
    name: "--page",
    description: "The page number to fetch (1-indexed)",
    args: { name: "page" },
  },
  {
    name: "--page-size",
    description: `The number of ${items} per page. Defaults to ${pageSize}`,
    args: { name: "page-size" },
  },
];

const pathOption = (
  description = "The path to the directory or a subdirectory of the project"
): Fig.Option => ({
  name: ["--path", "-p"],
  description,
  args: { name: "path", template: "folders" },
});

const jsonOption = (description = "The output in JSON format"): Fig.Option => ({
  name: "--json",
  description,
});

const projectOption: Fig.Option = {
  name: ["--project", "-P"],
  description:
    "The full handle of the project. Must be in the format of account-handle/project-handle",
  args: { name: "project" },
};

const accountOption: Fig.Option = {
  name: "--account",
  description:
    "Account handle. Defaults to the account in the project's full handle",
  args: { name: "account" },
};

const verboseOption: Fig.Option = {
  name: "--verbose",
  description: "Display verbose logs",
};

const fullHandleOption: Fig.Option = {
  name: "--full-handle",
  description:
    "The full handle of the project (account-handle/project-handle). Defaults to the one in the project's configuration",
  args: { name: "full-handle" },
};

const shardReferenceOption: Fig.Option = {
  name: "--shard-reference",
  description:
    "Explicit shard reference. Derived from environment variables for supported CI providers",
  args: { name: "shard-reference" },
};

const gitBranchOption: Fig.Option = {
  name: "--git-branch",
  description: "Filter builds by git branch",
  args: { name: "git-branch" },
};

const statusOption: Fig.Option = {
  name: "--status",
  description: "Filter builds by status (success or failure)",
  args: { name: "status", suggestions: ["success", "failure"] },
};

const xcodeprojPathOption: Fig.Option = {
  name: ["--xcodeproj-path", "-p"],
  description: "The path to the Xcode project",
  isRequired: true,
  args: { name: "xcodeproj-path", template: "folders" },
};

const configurationOption: Fig.Option = {
  name: ["--configuration", "-c"],
  description: "Choose configuration (default: debug)",
  args: {
    name: "configuration",
    suggestions: ["debug", "release"],
    default: "debug",
  },
};

const buildTestsOption: Fig.Option = {
  name: "--build-tests",
  description: "Build both source and test targets",
};

const rosettaOption: Fig.Option = {
  name: "--rosetta",
  description:
    "When passed, append arch=x86_64 to the 'destination' to run simulator in a Rosetta mode",
};

const pageOption: Fig.Option = {
  name: "--page",
  description: "Page number, starting at 1",
  args: { name: "page", default: "1" },
};

const pageSizeOption: Fig.Option = {
  name: "--page-size",
  description: "Results per page (1–100)",
  args: { name: "page-size", default: "20" },
};

const skipQuarantineOption: Fig.Option = {
  name: "--skip-quarantine",
  description:
    "When passed, the quarantine feature is disabled and tests run regardless of whether they are quarantined on the server",
};

const shardIndexOption: Fig.Option = {
  name: "--shard-index",
  description: "The zero-based shard index to execute",
  args: { name: "shard-index" },
};

const inspectModeOption: Fig.Option = {
  name: "--inspect-mode",
  description:
    "Inspect mode: 'local' parses the xcresult on this machine, 'remote' uploads it for server-side processing, 'off' skips test analysis entirely (no xcresult parsing, archiving, or upload — the Tests dashboard is not populated). When omitted, defaults to 'remote' for tuist-hosted instances and 'local' for self-hosted ones",
  args: {
    name: "inspect-mode",
    suggestions: ["local", "remote", "off"],
  },
};

const runReportPathOption: Fig.Option = {
  name: "--run-report-path",
  description:
    "Path where a JSON report of the run, including the dashboard URLs, will be saved",
  args: { name: "run-report-path", template: "filepaths" },
};

const urlOption: Fig.Option = {
  name: "--url",
  description: "The URL of the server",
  args: { name: "url" },
};

const noBinaryCacheOption: Fig.Option = {
  name: "--no-binary-cache",
  description: "Ignore binary cache and use sources only",
};

const xcodebuildPassthrough: Fig.Subcommand = {
  name: "--",
  description:
    "Arguments that will be passed through to xcodebuild. Use -- followed by xcodebuild arguments",
  args: {
    name: "passthrough-xcode-build-arguments",
    isVariadic: true,
    isOptional: true,
  },
};

const buildRunOptions: Fig.Option[] = [
  {
    name: "--generate",
    description: "Force the generation of the project before building",
  },
  {
    name: "--clean",
    description: "When passed, it cleans the project before building it",
  },
  pathOption("The path to the directory that contains the project to be built"),
  {
    name: ["--device", "-d"],
    description: "Build on a specific device",
    args: { name: "device" },
  },
  {
    name: "--platform",
    description: "Build for a specific platform",
    args: {
      name: "platform",
      suggestions: ["ios", "macos", "tvos", "visionos", "watchos"],
    },
  },
  {
    name: ["--os", "-o"],
    description: "Build with a specific version of the OS",
    args: { name: "os" },
  },
  rosettaOption,
  {
    name: ["--configuration", "-C"],
    description: "The configuration to be used when building the scheme",
    args: { name: "configuration" },
  },
  {
    name: "--build-output-path",
    description:
      "The directory where build products will be copied to when the project is built",
    args: { name: "build-output-path", template: "folders" },
  },
  {
    name: "--derived-data-path",
    description:
      "Overrides the folder that should be used for derived data when building the project",
    deprecated: true,
    args: { name: "derived-data-path" },
  },
  {
    name: "--generate-only",
    description:
      "When passed, it generates the project and skips building. This is useful for debugging purposes",
  },
  noBinaryCacheOption,
];

const buildRunArgs: Fig.Arg = {
  name: "scheme",
  description:
    "The scheme to be built. By default it builds all the buildable schemes of the project in the current directory",
  isOptional: true,
};

const cacheWarmOptions: Fig.Option[] = [
  pathOption(
    "The path to the directory that contains the project whose targets will be cached"
  ),
  {
    name: ["--configuration", "-c"],
    description: "Configuration to use for binary caching",
    args: { name: "configuration" },
  },
  {
    name: "--external-only",
    description:
      "If passed, the command doesn't cache the targets passed in the `--targets` argument, but only their dependencies. Deprecated: use `--cache-profile only-external` instead",
    deprecated: true,
  },
  {
    name: "--generate-only",
    description:
      "When passed, it generates the project and skips warming the cache. This is useful for debugging purposes",
  },
  {
    name: "--no-upload",
    description:
      "Store the generated artifacts only in the local cache and do not upload them to the remote cache",
  },
  {
    name: "--destination",
    description:
      "Destinations to warm: all, simulator, or device. Native macOS targets and exact-target products retain complete caching",
    args: {
      name: "destination",
      suggestions: ["all", "simulator", "device"],
      default: "all",
    },
  },
  {
    name: "--cache-profile",
    description:
      "Cache profile to use for warming. Accepts built-in profiles (only-external, all-possible, none) or a custom profile name defined in your Tuist configuration. Applies the same profile-based target filtering as `tuist generate`, including base behavior, targetQueries, and exceptTargetQueries",
    args: { name: "cache-profile" },
  },
  {
    name: "--print-hashes",
    description:
      "When passed, the hashes of the cacheable frameworks in the given project are printed",
  },
];

const cacheWarmArgs: Fig.Arg = {
  name: "targets",
  description:
    "A list of targets to cache. Those and their dependant targets will be cached. If no target is specified, all the project targets (excluding the external ones) and their dependencies will be cached",
  isVariadic: true,
  isOptional: true,
};

const generateRunOptions: Fig.Option[] = [
  pathOption(),
  {
    name: ["--open", "-o"],
    description: "Open the project after generating it",
  },
  {
    name: "--no-open",
    description: "Don't open the project after generating it",
  },
  noBinaryCacheOption,
  {
    name: "--cache-profile",
    description:
      "Binary cache profile to use: only-external, all-possible, none, or a custom profile name. Defaults to the profile configured in Tuist.swift, or 'only-external' if not configured",
    args: {
      name: "cache-profile",
      suggestions: ["only-external", "all-possible", "none"],
    },
  },
  {
    name: ["--configuration", "-c"],
    description: "Configuration to generate for",
    args: { name: "configuration" },
  },
  {
    name: "--destination",
    description:
      "Destinations to generate: all, simulator, or device. Native macOS targets remain supported",
    args: {
      name: "destination",
      suggestions: ["all", "simulator", "device"],
      default: "all",
    },
  },
];

const generateRunArgs: Fig.Arg = {
  name: "query",
  description:
    "Targets to focus on, specified by name or tag query (e.g. 'tag:feature'). Other targets will be linked as binaries if possible. If no target is specified, all the project targets will be generated (except external ones, such as Swift packages)",
  isVariadic: true,
  isOptional: true,
};

const testRunOptions: Fig.Option[] = [
  {
    name: ["--clean", "-c"],
    description: "When passed, it cleans the project before testing it",
  },
  {
    name: ["--no-upload", "-n"],
    description:
      "When passed, the result necessary for test selection is not persisted to the server",
  },
  pathOption(
    "The path to the directory that contains the project to be tested"
  ),
  {
    name: ["--device", "-d"],
    description: "Test on a specific device",
    args: { name: "device" },
  },
  {
    name: "--platform",
    description: "Test on a specific platform",
    args: { name: "platform" },
  },
  {
    name: ["--os", "-o"],
    description: "Test with a specific version of the OS",
    args: { name: "os" },
  },
  {
    name: "--destination",
    description:
      "Destinations to use cached binaries for: all, simulator, or device. Native macOS targets remain supported. 'device' requires a device -destination after the terminator (--)",
    args: {
      name: "destination",
      suggestions: ["all", "simulator", "device"],
      default: "all",
    },
  },
  rosettaOption,
  {
    name: ["--configuration", "-C"],
    description: "The configuration to be used when testing the scheme",
    args: { name: "configuration" },
  },
  {
    name: "--skip-ui-tests",
    description: "When passed, it skips testing UI Tests targets",
  },
  {
    name: "--skip-unit-tests",
    description: "When passed, it skips testing Unit Tests targets",
  },
  {
    name: ["--result-bundle-path", "-T"],
    description: "Path where test result bundle will be saved",
    args: { name: "result-bundle-path", template: "folders" },
  },
  {
    name: "--coverage-output-path",
    description:
      "Directory where each run's code coverage will be saved as LCOV (<result bundle name>.lcov), with repository-relative paths. Requires coverage uploads",
    args: { name: "coverage-output-path", template: "folders" },
  },
  runReportPathOption,
  {
    name: "--derived-data-path",
    description:
      "Overrides the folder that should be used for derived data when testing a project",
    deprecated: true,
    args: { name: "derived-data-path", template: "folders" },
  },
  {
    name: "--retry-count",
    description:
      "Tests will retry <number> of times until success. Example: if 1 is specified, the test will be retried at most once, hence it will run up to 2 times",
    deprecated: true,
    args: { name: "retry-count", default: "0" },
  },
  {
    name: "--test-plan",
    description: "The test plan to run",
    args: { name: "test-plan" },
  },
  {
    name: "--test-targets",
    description:
      "The list of test identifiers you want to test. Expected format is TestTarget[/TestClass[/TestMethod]] or tag:tagName[/TestClass[/TestMethod]] using target metadata tags. It is applied before --skip-test-targets",
    isRepeatable: true,
    args: { name: "test-targets", isVariadic: true },
  },
  {
    name: "--skip-test-targets",
    description:
      "The list of test identifiers you want to skip testing. Expected format is TestTarget[/TestClass[/TestMethod]] or tag:tagName[/TestClass[/TestMethod]] using target metadata tags",
    isRepeatable: true,
    args: { name: "skip-test-targets", isVariadic: true },
  },
  {
    name: "--filter-configurations",
    description:
      "The list of configurations you want to test. It is applied before --skip-configuration",
    isRepeatable: true,
    args: { name: "configurations", isVariadic: true },
  },
  {
    name: "--skip-configurations",
    description: "The list of configurations you want to skip testing",
    isRepeatable: true,
    args: { name: "skip-configurations", isVariadic: true },
  },
  noBinaryCacheOption,
  {
    name: "--no-selective-testing",
    description: "Run all tests without using selective testing",
  },
  {
    name: "--generate-only",
    description:
      "When passed, it generates the project and skips testing. This is useful for debugging purposes",
  },
  {
    name: "--without-building",
    description: "When passed, run the tests without building",
  },
  {
    name: "--build-only",
    description: "When passed, build the tests, but don't run them",
  },
  skipQuarantineOption,
  {
    name: "--shard-max",
    description: "Maximum number of shards to distribute tests across",
    args: { name: "shard-max" },
  },
  {
    name: "--shard-min",
    description: "Minimum number of shards",
    args: { name: "shard-min" },
  },
  {
    name: "--shard-total",
    description:
      "Exact number of shards (mutually exclusive with --shard-min/--shard-max). With suite granularity, the final shard is the catch-all",
    exclusiveOn: ["--shard-min", "--shard-max"],
    args: { name: "shard-total" },
  },
  {
    name: "--shard-max-duration",
    description: "Target maximum duration per shard in milliseconds",
    args: { name: "shard-max-duration" },
  },
  {
    name: "--shard-granularity",
    description: "Sharding granularity level: module (default) or suite",
    args: {
      name: "shard-granularity",
      suggestions: ["module", "suite"],
      default: "module",
    },
  },
  shardReferenceOption,
  {
    name: "--shard-plan-id",
    description: "Exact shard plan identifier emitted by the build-only job",
    args: { name: "shard-plan-id" },
  },
  {
    name: "--shard-skip-upload",
    description:
      "Skip uploading test products to remote storage. Use when you provide test products to shard runners yourself, for example via shared volumes",
  },
  {
    name: "--shard-archive-path",
    description:
      "Path to a locally managed shard archive. In build-for-testing mode Tuist writes the optimized archive there; in shard execution mode Tuist extracts it instead of downloading test products from remote storage",
    args: { name: "shard-archive-path", template: "filepaths" },
  },
  shardIndexOption,
  {
    name: "--stress-new-tests",
    description:
      "Rerun the test cases this branch adds, priced by duration, and flag any that prove flaky. 'report' warns; 'enforce' fails the run on a flaky test case. Off when omitted",
    args: {
      name: "stress-new-tests",
      suggestions: ["report", "enforce"],
    },
  },
  inspectModeOption,
];

const testRunArgs: Fig.Arg = {
  name: "scheme",
  description:
    "The scheme to be tested. By default it tests all the testable targets of the project in the current directory",
  isOptional: true,
};

const completionSpec: Fig.Spec = {
  name: "tuist",
  description: "Build better apps faster",
  subcommands: [
    {
      name: "init",
      description: "Get started with Tuist in your project",
      options: [
        pathOption("The path to the directory from where to start"),
        {
          name: ["--build-system", "--workflow"],
          description:
            "The build system to integrate with, non-interactively. One of 'xcode' (integrate an existing Xcode project or workspace), 'generated-xcode' (create a Tuist-generated Xcode project), 'gradle' (integrate a Gradle project), or 'bazel' (integrate a Bazel workspace). When set, all remaining prompts are answered from the other flags. `--workflow` is accepted as an alias",
          args: {
            name: "build-system",
            suggestions: ["xcode", "generated-xcode", "gradle", "bazel"],
          },
        },
        {
          name: "--name",
          description:
            "The project name. Also the server project handle. Defaults to the current directory name",
          args: { name: "name" },
        },
        {
          name: "--platform",
          description:
            "The platform for a 'generated-xcode' project. One of 'ios', 'macos', 'tvos', 'watchos'",
          args: {
            name: "platform",
            suggestions: ["ios", "macos", "tvos", "watchos"],
          },
        },
        {
          name: "--no-server",
          description: "Do not integrate with the Tuist server",
        },
        {
          name: "--account",
          description:
            "The handle of the account that should own the project. Must be your handle or an organization you belong to",
          exclusiveOn: ["--create-organization"],
          args: { name: "account" },
        },
        {
          name: "--create-organization",
          description:
            "Create a new organization with this handle and use it as the project owner. Mutually exclusive with --account",
          exclusiveOn: ["--account"],
          args: { name: "create-organization" },
        },
        {
          name: ["--answers", "-a"],
          description: "Base64-encoded prompt answers",
          hidden: true,
          args: { name: "answers" },
        },
      ],
    },
    {
      name: "hash",
      description:
        "Utilities to debug the hashing logic used by features like binary caching or selective testing",
      subcommands: [
        {
          name: "cache",
          description:
            "Returns the hashes that will be used to persist binaries of the graph in its current state to the cache",
          options: [
            pathOption(
              "The path to the directory that contains the project whose targets will be cached"
            ),
            {
              name: ["--configuration", "-c"],
              description:
                "The project configuration the cache binaries will be bound to",
              args: { name: "configuration" },
            },
            {
              name: "--destination",
              description:
                "Cache destinations: all, simulator, or device. Restricted destinations also print their SDK fingerprints",
              args: {
                name: "destination",
                suggestions: ["all", "simulator", "device"],
                default: "all",
              },
            },
          ],
        },
        {
          name: "selective-testing",
          description:
            "Returns the hashes that will be used to persist targets' test results to select tests in future test runs",
          options: [
            pathOption(
              "The path to the directory that contains the project whose tests will run selectively"
            ),
          ],
        },
      ],
    },
    {
      name: "bazel",
      description:
        "Integrate Bazel with Tuist's remote cache, build insights, and test quarantine",
      hidden: true,
      subcommands: [
        {
          name: "setup",
          description:
            "Generate a .bazelrc.tuist file that configures Bazel to use Tuist's remote cache and build insights",
          options: [
            pathOption(
              "The path to the directory containing the Tuist project"
            ),
            {
              name: "--no-build-insights",
              description:
                "Do not configure Bazel to send build insights through the Build Event Service",
            },
            {
              name: "--no-add-bazelrc-import",
              description:
                "Do not add the generated .bazelrc.tuist import to .bazelrc",
            },
            {
              name: "--no-remote-downloader",
              description: "Do not fetch dependencies through Kura",
            },
            {
              name: "--remote-execution",
              description:
                "Run Linux actions on Tuist remote executors when the account has remote execution enabled. Falls back to the remote cache alone when it is not available",
            },
          ],
        },
        {
          name: "test",
          description: "Run Bazel tests with Tuist's test quarantine policies",
          options: [
            pathOption(
              "The path to the Tuist project and Bazel working directory"
            ),
            {
              name: "--bazel",
              description: "The Bazel executable to run",
              args: { name: "bazel", default: "bazel" },
            },
            {
              name: "--no-quarantine",
              description: "Do not apply Tuist's skipped and muted test states",
            },
          ],
          args: {
            name: "arguments",
            description:
              "Arguments forwarded to 'bazel test', including target patterns",
            isVariadic: true,
            isOptional: true,
          },
        },
        {
          name: "credential-helper",
          description:
            "Provide credentials to Bazel following the credential helper specification",
          options: [
            pathOption(
              "The path to the directory containing the Tuist project"
            ),
            {
              name: "--bazelrc-path",
              description:
                "The path to the directory containing the generated .bazelrc.tuist file",
              args: { name: "bazelrc-path" },
            },
          ],
          args: {
            name: "command",
            description:
              "The credential helper command to run. Only 'get' is supported",
          },
        },
      ],
    },
    {
      name: "cargo",
      description: "Run Cargo with Tuist build and test insights",
      args: {
        name: "arguments",
        description: "Cargo arguments, including the subcommand",
        isVariadic: true,
        isOptional: true,
      },
    },
    {
      name: "build",
      description: "A set of commands to manage your project builds",
      subcommands: [
        {
          name: "run",
          description:
            "Builds a project (deprecated: Use 'tuist xcodebuild build' instead)",
          hidden: true,
          deprecated: true,
          subcommands: [xcodebuildPassthrough],
          options: buildRunOptions,
          args: buildRunArgs,
        },
        {
          name: "list",
          description: "Lists all builds in a project",
          options: [
            {
              name: ["--project", "-P"],
              description:
                "The full handle of the project. Must be in the format of account-handle/project-handle",
              args: { name: "full-handle" },
            },
            pathOption(),
            gitBranchOption,
            statusOption,
            {
              name: "--scheme",
              description: "Filter builds by scheme",
              args: { name: "scheme" },
            },
            {
              name: "--configuration",
              description: "Filter builds by configuration",
              args: { name: "configuration" },
            },
            {
              name: "--tags",
              description:
                "Filter builds by tags. Returns builds containing ALL specified tags",
              isRepeatable: true,
              args: { name: "tags", isVariadic: true },
            },
            {
              name: "--values",
              description:
                "Filter builds by custom values (key=value format). Returns builds matching ALL specified values",
              isRepeatable: true,
              args: { name: "values", isVariadic: true },
            },
            ...pagination("builds", 10),
            jsonOption(),
          ],
        },
        {
          name: "show",
          description: "Shows information about a build",
          options: [
            {
              name: ["--project", "-P"],
              description:
                "The full handle of the project. Must be in the format of account-handle/project-handle",
              args: { name: "full-handle" },
            },
            pathOption(),
            jsonOption(),
          ],
          args: {
            name: "build-id",
            description: "The ID of the build to show",
          },
        },
        {
          name: "xcode",
          description: "A set of commands to inspect Xcode build details",
          subcommands: [
            {
              name: "target",
              description: "A set of commands to manage build targets",
              subcommands: [
                {
                  name: "list",
                  description: "Lists all targets for a build",
                  options: [
                    projectOption,
                    pathOption(),
                    {
                      name: "--status",
                      description:
                        "Filter targets by status (success or failure)",
                      args: { name: "status" },
                    },
                    ...pagination("targets", 10),
                    jsonOption(),
                  ],
                  args: {
                    name: "build-id",
                    description: "The ID of the build",
                  },
                },
              ],
            },
            {
              name: "file",
              description: "A set of commands to manage build files",
              subcommands: [
                {
                  name: "list",
                  description: "Lists compiled files for a build",
                  options: [
                    projectOption,
                    pathOption(),
                    {
                      name: "--target",
                      description: "Filter by target name",
                      args: { name: "target" },
                    },
                    {
                      name: "--file-type",
                      description: "Filter by file type",
                      args: { name: "file-type" },
                    },
                    {
                      name: "--sort-by",
                      description:
                        "Sort by field (compilation_duration or path)",
                      args: { name: "sort-by" },
                    },
                    ...pagination("files", 10),
                    jsonOption(),
                  ],
                  args: {
                    name: "build-id",
                    description: "The ID of the build",
                  },
                },
              ],
            },
            {
              name: "issue",
              description: "A set of commands to manage build issues",
              subcommands: [
                {
                  name: "list",
                  description: "Lists issues for a build",
                  options: [
                    projectOption,
                    pathOption(),
                    {
                      name: "--type",
                      description: "Filter by issue type (warning or error)",
                      args: { name: "type" },
                    },
                    {
                      name: "--target",
                      description: "Filter by target name",
                      args: { name: "target" },
                    },
                    ...pagination("issues", 10),
                    jsonOption(),
                  ],
                  args: {
                    name: "build-id",
                    description: "The ID of the build",
                  },
                },
              ],
            },
            {
              name: "cache-task",
              description: "A set of commands to manage build cache tasks",
              subcommands: [
                {
                  name: "list",
                  description: "Lists cacheable tasks for a build",
                  options: [
                    projectOption,
                    pathOption(),
                    {
                      name: "--status",
                      description:
                        "Filter by cache status (hit_local, hit_remote, or miss)",
                      args: { name: "status" },
                    },
                    {
                      name: "--task-type",
                      description: "Filter by task type (clang or swift)",
                      args: { name: "task-type" },
                    },
                    ...pagination("tasks", 10),
                    jsonOption(),
                  ],
                  args: {
                    name: "build-id",
                    description: "The ID of the build",
                  },
                },
              ],
            },
            {
              name: "cas-output",
              description: "A set of commands to manage build CAS outputs",
              subcommands: [
                {
                  name: "list",
                  description: "Lists CAS outputs for a build",
                  options: [
                    projectOption,
                    pathOption(),
                    {
                      name: "--operation",
                      description: "Filter by operation (download or upload)",
                      args: { name: "operation" },
                    },
                    {
                      name: "--output-type",
                      description:
                        "Filter by output type (e.g. swift, object, swiftmodule, dSYM, llvm-bc)",
                      args: { name: "output-type" },
                    },
                    ...pagination("outputs", 10),
                    jsonOption(),
                  ],
                  args: {
                    name: "build-id",
                    description: "The ID of the build",
                  },
                },
              ],
            },
          ],
        },
        {
          name: "gradle",
          description: "A set of commands to inspect Gradle build details",
          subcommands: [
            {
              name: "task",
              description: "A set of commands to inspect Gradle build tasks",
              subcommands: [
                {
                  name: "list",
                  description: "Lists all tasks for a Gradle build",
                  options: [
                    projectOption,
                    pathOption(),
                    {
                      name: "--outcome",
                      description:
                        "Filter tasks by outcome (local_hit, remote_hit, up_to_date, executed, failed, skipped, no_source)",
                      args: { name: "outcome" },
                    },
                    ...pagination("tasks", 10),
                    jsonOption(),
                  ],
                  args: {
                    name: "build-id",
                    description: "The ID of the Gradle build",
                  },
                },
              ],
            },
            {
              name: "failure",
              description:
                "A set of commands to inspect why a Gradle build failed",
              subcommands: [
                {
                  name: "list",
                  description:
                    "Lists the failed tasks and configuration steps of a Gradle build with their failure messages",
                  options: [projectOption, pathOption(), jsonOption()],
                  args: {
                    name: "build-id",
                    description: "The ID of the Gradle build",
                  },
                },
              ],
            },
          ],
        },
        {
          name: "cargo",
          description: "A set of commands to inspect Cargo builds",
          subcommands: [
            {
              name: "list",
              description: "Lists the Cargo builds of a project, newest first",
              options: [
                projectOption,
                pathOption(),
                gitBranchOption,
                statusOption,
                {
                  name: "--command",
                  description:
                    "Filter builds by Cargo command, for example build or check",
                  args: { name: "command" },
                },
                ...pagination("builds", 10),
                jsonOption(),
              ],
            },
            {
              name: "show",
              description:
                "Shows a Cargo build, including its cache statistics",
              options: [projectOption, pathOption(), jsonOption()],
              args: {
                name: "build-id",
                description: "The ID of the Cargo build",
              },
            },
          ],
        },
        {
          name: "mix",
          description: "A set of commands to inspect Mix builds",
          subcommands: [
            {
              name: "list",
              description: "Lists the Mix builds of a project, newest first",
              options: [
                projectOption,
                pathOption(),
                gitBranchOption,
                statusOption,
                {
                  name: "--mix-env",
                  description:
                    "Filter builds by Mix environment, for example dev or test",
                  args: { name: "mix-env" },
                },
                ...pagination("builds", 10),
                jsonOption(),
              ],
            },
            {
              name: "show",
              description: "Shows a Mix build, including its cache statistics",
              options: [projectOption, pathOption(), jsonOption()],
              args: {
                name: "build-id",
                description: "The ID of the Mix build",
              },
            },
          ],
        },
        {
          name: "once",
          description: "A set of commands to inspect Once runs",
          subcommands: [
            {
              name: "list",
              description: "Lists the Once runs of a project, newest first",
              options: [
                projectOption,
                pathOption(),
                {
                  name: "--kind",
                  description: "Filter runs by kind (build, test, or generic)",
                  args: {
                    name: "kind",
                    suggestions: ["build", "test", "generic"],
                  },
                },
                {
                  name: "--status",
                  description: "Filter runs by status (success or failure)",
                  args: {
                    name: "status",
                    suggestions: ["success", "failure"],
                  },
                },
                {
                  name: "--git-branch",
                  description: "Filter runs by git branch",
                  args: { name: "git-branch" },
                },
                ...pagination("runs", 10),
                jsonOption(),
              ],
            },
            {
              name: "show",
              description:
                "Shows a Once run, including its actions, cache, and test totals",
              options: [projectOption, pathOption(), jsonOption()],
              args: {
                name: "run-id",
                description: "The ID of the Once run",
              },
            },
          ],
        },
        {
          name: "bazel",
          description: "A set of commands to inspect Bazel invocations",
          subcommands: [
            {
              name: "list",
              description:
                "Lists the Bazel invocations of a project, newest first",
              options: [
                projectOption,
                pathOption(),
                {
                  name: "--git-branch",
                  description: "Filter invocations by git branch",
                  args: { name: "git-branch" },
                },
                {
                  name: "--status",
                  description:
                    "Filter invocations by status (success or failure)",
                  args: {
                    name: "status",
                    suggestions: ["success", "failure"],
                  },
                },
                ...pagination("invocations", 10),
                jsonOption(),
              ],
            },
            {
              name: "show",
              description:
                "Shows a Bazel invocation, including its cache statistics, build metrics and critical path",
              options: [projectOption, pathOption(), jsonOption()],
              args: {
                name: "invocation-id",
                description: "The Bazel invocation ID",
              },
            },
            {
              name: "step",
              description:
                "A set of commands to inspect the actions recorded for a Bazel invocation",
              subcommands: [
                {
                  name: "list",
                  description:
                    "Lists the actions recorded for a Bazel invocation, longest first",
                  options: [
                    projectOption,
                    pathOption(),
                    {
                      name: "--status",
                      description:
                        "Filter steps by status, for example failure or remote_hit",
                      args: {
                        name: "status",
                        suggestions: [
                          "success",
                          "failure",
                          "unknown",
                          "local_hit",
                          "remote_hit",
                          "cache_hit",
                          "up_to_date",
                          "skipped",
                          "no_source",
                        ],
                      },
                    },
                    {
                      name: "--target",
                      description: "Filter steps by target label",
                      args: { name: "target" },
                    },
                    {
                      name: "--search",
                      description:
                        "Case-insensitive search across step titles, packages and targets",
                      args: { name: "search" },
                    },
                    {
                      name: "--sort-by",
                      description:
                        "Sort by duration_ms (longest first, the default) or start_ms (earliest first)",
                      args: {
                        name: "sort-by",
                        suggestions: ["duration_ms", "start_ms"],
                      },
                    },
                    ...pagination("steps", 10),
                    jsonOption(),
                  ],
                  args: {
                    name: "invocation-id",
                    description: "The Bazel invocation ID",
                  },
                },
                {
                  name: "show",
                  description:
                    "Shows a Bazel invocation step, including the log its action published",
                  options: [projectOption, pathOption(), jsonOption()],
                  args: [
                    {
                      name: "invocation-id",
                      description: "The Bazel invocation ID",
                    },
                    {
                      name: "step-id",
                      description:
                        "The step ID returned by `tuist build bazel step list`",
                    },
                  ],
                },
              ],
            },
            {
              name: "logs",
              description:
                "Prints the console output and test logs captured for a Bazel invocation, in order",
              options: [projectOption, pathOption(), jsonOption()],
              args: {
                name: "invocation-id",
                description: "The Bazel invocation ID",
              },
            },
          ],
        },
        xcodebuildPassthrough,
      ],
      options: buildRunOptions,
      args: buildRunArgs,
    },
    {
      name: "cache",
      description: "Cache-related commands",
      subcommands: [
        {
          name: "warm",
          description: "Warms the local and remote cache",
          options: cacheWarmOptions,
          args: cacheWarmArgs,
        },
        {
          name: "config",
          description: "Get remote cache configuration for your project",
          options: [
            jsonOption("Output the result in JSON format"),
            {
              name: "--force-refresh",
              description:
                "Force refresh the authentication token, ignoring any cached credentials",
            },
            pathOption(
              "The path to the directory containing the Tuist project"
            ),
            {
              name: "--url",
              description:
                "The URL of the server. If not provided, it defaults to the Tuist server",
              args: { name: "url" },
            },
          ],
          args: {
            name: "full-handle",
            description:
              "The full handle of the project (account-handle/project-handle). If not provided, it is read from the project configuration",
            isOptional: true,
          },
        },
      ],
      options: cacheWarmOptions,
      args: cacheWarmArgs,
    },
    {
      name: "cache-proxy",
      description: "Run the machine-wide Xcode compilation-cache proxy",
      hidden: true,
      options: [
        {
          name: ["--url", "-u"],
          description:
            "The server URL. Defaults to production URL if not specified",
          args: { name: "url" },
        },
        {
          name: "--account",
          description: "The account handle used to resolve the cache endpoint",
          args: { name: "account" },
        },
      ],
    },
    {
      name: "cache-start",
      description:
        "Remove the LaunchAgent of the retired per-project Xcode cache daemon",
      hidden: true,
      options: [
        {
          name: ["--url", "-u"],
          description:
            "Unused. Accepted so that existing LaunchAgents keep parsing",
          args: { name: "url" },
        },
        {
          name: "--no-upload",
          description:
            "Unused. Accepted so that existing LaunchAgents keep parsing",
        },
      ],
      args: {
        name: "full-handle",
        description:
          "The full handle of the project (account-handle/project-handle)",
      },
    },
    {
      name: "sample-host-metrics",
      description:
        "Continuously sample host metrics (CPU, memory, network, disk) for build insights",
      hidden: true,
    },
    {
      name: "clean",
      description: "Clean all the artifacts stored locally",
      options: [
        {
          name: "--remote",
          description: "Clean the remote cache",
        },
        pathOption(
          "The path to the directory that contains the project that should be cleaned"
        ),
      ],
      args: {
        name: "clean-categories",
        description:
          "The cache and artifact categories to be cleaned. If no category is specified, everything is cleaned",
        suggestions: [
          "plugins",
          "generatedAutomationProjects",
          "projectDescriptionHelpers",
          "manifests",
          "editProjects",
          "runs",
          "binaries",
          "selectiveTests",
          "generationMetadata",
          "cargo",
          "dependencies",
        ],
        isVariadic: true,
        isOptional: true,
      },
    },
    {
      name: "dump",
      description: "Outputs the manifest as a JSON",
      options: [pathOption("The path to the folder where the manifest is")],
      args: {
        name: "manifest",
        description: "The manifest to be dumped",
        suggestions: [
          "project",
          "workspace",
          "config",
          "template",
          "plugin",
          "package",
        ],
        default: "project",
        isOptional: true,
      },
    },
    {
      name: "edit",
      description:
        "Generates a temporary project to edit the project in the current directory",
      options: [
        pathOption("The path to the directory whose project will be edited"),
        {
          name: ["--permanent", "-P"],
          description:
            "It creates the project in the current directory or the one indicated by -p and doesn't block the process",
        },
        {
          name: ["--only-current-directory", "-o"],
          description: "It only includes the manifest in the current directory",
        },
      ],
    },
    {
      name: "generate",
      description: "Generate a project or inspect generation runs",
      subcommands: [
        {
          name: "run",
          description:
            "Generates an Xcode workspace to start working on the project",
          options: generateRunOptions,
          args: generateRunArgs,
        },
        {
          name: "list",
          description: "Lists all the generations in a project",
          options: [
            {
              name: ["--project", "-P"],
              description:
                "The full handle of the project. Must be in the format of account-handle/project-handle. If not provided, it will be read from the project's Tuist.swift",
              args: { name: "project-full-handle" },
            },
            pathOption(),
            {
              name: "--git-branch",
              description: "Filter generations by git branch",
              args: { name: "git-branch" },
            },
            jsonOption(),
          ],
        },
        {
          name: "show",
          description: "Shows information about a generation",
          options: [
            {
              name: ["--project", "-P"],
              description:
                "The full handle of the project. Must be in the format of account-handle/project-handle. If not provided, it will be read from the project's Tuist.swift",
              args: { name: "project-full-handle" },
            },
            pathOption(),
            jsonOption(),
          ],
          args: {
            name: "generation-id",
            description: "The ID of the generation to show",
          },
        },
      ],
      options: generateRunOptions,
      args: generateRunArgs,
    },
    {
      name: "graph",
      description:
        "Generates a graph from the workspace or project in the current directory",
      options: [
        {
          name: ["--skip-test-targets", "-t"],
          description: "Skip Test targets during graph rendering",
        },
        {
          name: ["--skip-external-dependencies", "-d"],
          description: "Skip external dependencies",
        },
        {
          name: ["--skip-macro-support-targets", "-m"],
          description:
            "Skip Swift Macro support targets (SwiftSyntax, SwiftCompilerPlugin, etc.). Macro plugin targets themselves are still shown",
        },
        {
          name: ["--platform", "-l"],
          description:
            "A platform to filter. Only targets for this platform will be showed in the graph. Available platforms: ios, macos, tvos, watchos",
          args: {
            name: "platform",
            suggestions: ["ios", "macos", "tvos", "visionos", "watchos"],
          },
        },
        {
          name: ["--format", "-f"],
          description: "Available formats: dot, json, png, svg",
          args: {
            name: "format",
            suggestions: ["dot", "json", "png", "svg"],
            default: "png",
          },
        },
        {
          name: "--no-open",
          description: "Don't open the file after generating it",
        },
        {
          name: ["--algorithm", "-a"],
          description:
            "Available formats: dot, neato, twopi, circo, fdp, sfdp, patchwork",
          args: {
            name: "layout-algorithm",
            suggestions: [
              "dot",
              "neato",
              "twopi",
              "circo",
              "fdp",
              "sfdp",
              "patchwork",
            ],
            default: "dot",
          },
        },
        pathOption(
          "The path to the directory that contains the project whose targets will be cached"
        ),
        {
          name: ["--output-path", "-o"],
          description: "The path where the graph will be generated",
          args: { name: "output-path" },
        },
      ],
      args: {
        name: "targets",
        description:
          "A list of targets to filter. Those and their dependent targets will be showed in the graph",
        isVariadic: true,
        isOptional: true,
      },
    },
    {
      name: "install",
      description:
        "Installs any remote content (e.g. dependencies) necessary to interact with the project",
      options: [
        pathOption(),
        {
          name: ["--update", "-u"],
          description:
            "Instead of simple install, update external content when available",
        },
      ],
      args: {
        name: "passthrough-arguments",
        description:
          "Arguments to pass to the underlying 'swift package' invocation",
        isVariadic: true,
        isOptional: true,
      },
    },
    {
      name: "migration",
      description:
        "A set of utilities to assist in the migration of Xcode projects to Tuist",
      subcommands: [
        {
          name: "settings-to-xcconfig",
          description:
            "It extracts the build settings from a project or a target into an xcconfig file",
          options: [
            xcodeprojPathOption,
            {
              name: ["--xcconfig-path", "-x"],
              description:
                "The path to the .xcconfig file where build settings will be extracted",
              isRequired: true,
              args: { name: "xcconfig-path", template: "folders" },
            },
            {
              name: ["--target", "-t"],
              description:
                "The name of the target whose build settings will be extracted. When not passed, it extracts the build settings of the project",
              args: { name: "target" },
            },
          ],
        },
        {
          name: "check-empty-settings",
          description:
            "It checks if the build settings of a project or target are empty. Otherwise it exits unsuccessfully",
          options: [
            xcodeprojPathOption,
            {
              name: ["--target", "-t"],
              description:
                "The name of the target whose build settings will be checked. When not passed, it checks the build settings of the project",
              args: { name: "target" },
            },
          ],
        },
        {
          name: "list-targets",
          description:
            "It lists the targets of a project sorted by number of dependencies",
          options: [xcodeprojPathOption],
        },
      ],
    },
    {
      name: "plugin",
      description: "A set of commands for plugin's management",
      subcommands: [
        {
          name: "archive",
          description: "Archives a plugin into a NameOfPlugin.tuist-plugin.zip",
          options: [
            pathOption(
              "The path to the directory that contains the definition of the plugin"
            ),
          ],
        },
        {
          name: "build",
          description: "Builds a plugin",
          options: [
            configurationOption,
            pathOption(
              "The path to the directory that contains the definition of the plugin"
            ),
            buildTestsOption,
            {
              name: "--show-bin-path",
              description: "Print the binary output path",
            },
            {
              name: "--targets",
              description: "Build the specified targets",
              isRepeatable: true,
              args: { name: "targets" },
            },
            {
              name: "--products",
              description: "Build the specified products",
              isRepeatable: true,
              args: { name: "products" },
            },
          ],
        },
        {
          name: "run",
          description: "Runs a plugin",
          options: [
            configurationOption,
            pathOption(
              "The path to the directory that contains the definition of the plugin"
            ),
            buildTestsOption,
            {
              name: "--skip-build",
              description: "Skip building the plugin",
            },
          ],
          args: [
            {
              name: "task",
              description: "The plugin task to run",
            },
            {
              name: "arguments",
              description: "The arguments to pass to the plugin task",
              isVariadic: true,
              isOptional: true,
            },
          ],
        },
        {
          name: "test",
          description: "Tests a plugin",
          options: [
            configurationOption,
            pathOption(
              "The path to the directory that contains the definition of the plugin"
            ),
            buildTestsOption,
            {
              name: "--test-products",
              description: "Test the specified products",
              isRepeatable: true,
              args: { name: "test-products" },
            },
          ],
        },
      ],
    },
    {
      name: "registry",
      description: "A set of commands to interact with the Tuist Registry",
      subcommands: [
        {
          name: "setup",
          description: "Set up the Tuist Registry",
          options: [
            pathOption(
              "The path to the directory that contains the project to set up the registry for"
            ),
          ],
        },
        {
          name: "login",
          description: "Log in to the registry",
          options: [
            pathOption(
              "The path to the directory that contains the project to which registry you want to log in"
            ),
          ],
        },
        {
          name: "logout",
          description: "Log out of the registry",
          options: [
            pathOption(
              "The path to the directory that contains the project to which registry you want to log out of"
            ),
          ],
        },
      ],
    },
    {
      name: "run",
      description: "Runs a preview or a scheme from a generated project",
      options: [
        pathOption(
          "The path to the directory that contains the project with the target or scheme to be run"
        ),
        {
          name: "--device",
          description: "The device name to run on",
          args: { name: "device" },
        },
        {
          name: "--generate",
          description: "Force the generation of the project before running",
        },
        {
          name: "--clean",
          description: "When passed, it cleans the project before running",
        },
        {
          name: ["--configuration", "-C"],
          description: "The configuration to be used when building the scheme",
          args: { name: "configuration" },
        },
        {
          name: ["--os", "-o"],
          description: "The OS version of the simulator",
          args: { name: "os" },
        },
        rosettaOption,
      ],
      args: [
        {
          name: "runnable",
          description:
            "A preview URL, app name with a specifier such as App@latest or App@feature-branch, or a scheme from a generated project",
        },
        {
          name: "arguments",
          description: "Arguments to forward to the app or CLI",
          isVariadic: true,
          isOptional: true,
        },
      ],
    },
    {
      name: "runner",
      description: "Interact with Tuist runners",
      subcommands: [
        {
          name: "ssh",
          description: "Open a shell for a running job",
          options: [pathOption()],
          args: {
            name: "job-ref",
            description:
              "A Tuist runner job URL, GitHub Actions job URL, or job ID",
          },
        },
        {
          name: "volume",
          description: "Inspect and delete persistent runner cache volumes",
          subcommands: [
            {
              name: "list",
              description: "List and filter volumes by name and repository",
              options: [
                accountOption,
                pathOption("Project directory"),
                jsonOption(
                  "Return response data and pagination as JSON. Unknown optional values are omitted"
                ),
                pageOption,
                pageSizeOption,
                {
                  name: "--name",
                  description: "Filter by exact volume name (cache key)",
                  args: { name: "name" },
                },
                {
                  name: "--repository",
                  description:
                    "Filter by exact repository, including its owner or namespace",
                  args: { name: "repository" },
                },
                {
                  name: "--sort-by",
                  description: "Sort volumes by field",
                  args: {
                    name: "sort-by",
                    suggestions: [
                      "volume",
                      "repository",
                      "used_space",
                      "capacity",
                      "last_used",
                    ],
                  },
                },
                {
                  name: "--sort-order",
                  description: "Sort order",
                  args: {
                    name: "sort-order",
                    suggestions: ["asc", "desc"],
                  },
                },
              ],
            },
            {
              name: "show",
              description: "Show volume details",
              options: [
                accountOption,
                pathOption("Project directory"),
                jsonOption(
                  "Return response data and pagination as JSON. Unknown optional values are omitted"
                ),
              ],
              args: { name: "volume-id", description: "Volume UUID" },
            },
            {
              name: "jobs",
              description: "Show jobs that used a volume",
              options: [
                accountOption,
                pathOption("Project directory"),
                jsonOption(
                  "Return response data and pagination as JSON. Unknown optional values are omitted"
                ),
                pageOption,
                pageSizeOption,
              ],
              args: { name: "volume-id", description: "Volume UUID" },
            },
            {
              name: "analytics",
              description:
                "Show storage, hit rate, job runs and trends. Defaults to the last seven days",
              options: [
                accountOption,
                pathOption("Project directory"),
                jsonOption(
                  "Return response data and pagination as JSON. Unknown optional values are omitted"
                ),
                {
                  name: "--volume",
                  description: "Volume UUID. Omit for account-wide analytics",
                  args: { name: "volume" },
                },
                {
                  name: "--start",
                  description: "Inclusive range start as an ISO 8601 timestamp",
                  args: { name: "start" },
                },
                {
                  name: "--end",
                  description: "Inclusive range end as an ISO 8601 timestamp",
                  args: { name: "end" },
                },
              ],
            },
            {
              name: "delete",
              description:
                "Delete a volume and its saved contents. Running jobs keep their copies but cannot save them",
              options: [
                accountOption,
                pathOption("Project directory"),
                jsonOption(
                  "Return response data and pagination as JSON. Unknown optional values are omitted"
                ),
                {
                  name: "--yes",
                  description:
                    "Confirm deleting the volume. This cannot be undone",
                },
              ],
              args: { name: "volume-id", description: "Volume UUID" },
            },
          ],
        },
        {
          name: "profile",
          description:
            "Manage runner profiles: their machine shapes, Xcode versions, and the branches that save their cache volumes",
          subcommands: [
            {
              name: "list",
              description:
                "List the account's runner profiles and the branches that save their cache volumes",
              options: [
                accountOption,
                pathOption("Project directory"),
                jsonOption("Return the response as JSON"),
              ],
            },
            {
              name: "catalog",
              description:
                "List the machine shapes and Xcode versions runner profiles can use",
              options: [
                accountOption,
                pathOption("Project directory"),
                jsonOption("Return the response as JSON"),
              ],
            },
            {
              name: "create",
              description:
                "Create a runner profile. Run 'tuist runner profile catalog' for the available shapes and Xcode versions",
              options: [
                {
                  name: "--platform",
                  description: "The platform the profile's jobs run on",
                  isRequired: true,
                  args: {
                    name: "platform",
                    suggestions: ["linux", "macos"],
                  },
                },
                {
                  name: "--vcpus",
                  description: "VCPUs of an available shape for the platform",
                  isRequired: true,
                  args: { name: "vcpus" },
                },
                {
                  name: "--memory-gb",
                  description:
                    "Memory in GB of an available shape for the platform",
                  isRequired: true,
                  args: { name: "memory-gb" },
                },
                {
                  name: "--xcode-version",
                  description:
                    "An available Xcode version. Required for macOS profiles",
                  args: { name: "xcode-version" },
                },
                {
                  name: "--save-cache-from",
                  description:
                    "Additional branch name or * pattern whose jobs save the profile's cache volumes. Repeat for several branches",
                  isRepeatable: true,
                  args: { name: "save-cache-from" },
                },
                {
                  name: "--save-cache-from-all-branches",
                  description:
                    "Save the profile's cache volumes from every successful job of the repository",
                  exclusiveOn: ["--no-save-cache-from-all-branches"],
                },
                {
                  name: "--no-save-cache-from-all-branches",
                  description:
                    "Save the profile's cache volumes only from the default branch and the --save-cache-from branches",
                  exclusiveOn: ["--save-cache-from-all-branches"],
                },
                {
                  name: "--save-cache-from-default-branch",
                  description:
                    "Save the profile's cache volumes from jobs on each repository's default branch",
                  exclusiveOn: ["--no-save-cache-from-default-branch"],
                },
                {
                  name: "--no-save-cache-from-default-branch",
                  description:
                    "Do not save the profile's cache volumes from jobs on each repository's default branch",
                  exclusiveOn: ["--save-cache-from-default-branch"],
                },
                accountOption,
                pathOption("Project directory"),
                jsonOption("Return the response as JSON"),
              ],
              args: {
                name: "name",
                description:
                  "Profile name: up to 32 lowercase letters, digits, and hyphens, starting with a letter. Workflows use it as runs-on: tuist-<name>",
              },
            },
            {
              name: "update",
              description:
                "Change a profile's machine shape, Xcode version, or the branches that save its cache volumes. Omitted options keep their value",
              options: [
                {
                  name: "--vcpus",
                  description:
                    "VCPUs of an available shape for the profile's platform. Pass with --memory-gb",
                  args: { name: "vcpus" },
                },
                {
                  name: "--memory-gb",
                  description:
                    "Memory in GB of an available shape for the profile's platform",
                  args: { name: "memory-gb" },
                },
                {
                  name: "--xcode-version",
                  description: "An available Xcode version for a macOS profile",
                  args: { name: "xcode-version" },
                },
                {
                  name: "--save-cache-from",
                  description:
                    "Additional branch name or * pattern whose jobs save the profile's cache volumes. Repeat for several branches. Replaces the current list",
                  isRepeatable: true,
                  args: { name: "save-cache-from" },
                },
                {
                  name: "--clear-save-cache-from",
                  description:
                    "Remove the additional branches that save the profile's cache volumes",
                },
                {
                  name: "--save-cache-from-all-branches",
                  description:
                    "Save the profile's cache volumes from every successful job of the repository",
                  exclusiveOn: ["--no-save-cache-from-all-branches"],
                },
                {
                  name: "--no-save-cache-from-all-branches",
                  description:
                    "Save the profile's cache volumes only from the default branch and the --save-cache-from branches",
                  exclusiveOn: ["--save-cache-from-all-branches"],
                },
                {
                  name: "--save-cache-from-default-branch",
                  description:
                    "Save the profile's cache volumes from jobs on each repository's default branch",
                  exclusiveOn: ["--no-save-cache-from-default-branch"],
                },
                {
                  name: "--no-save-cache-from-default-branch",
                  description:
                    "Do not save the profile's cache volumes from jobs on each repository's default branch",
                  exclusiveOn: ["--save-cache-from-default-branch"],
                },
                accountOption,
                pathOption("Project directory"),
                jsonOption("Return the response as JSON"),
              ],
              args: {
                name: "name",
                description: "Profile name, without the runs-on label prefix",
              },
            },
            {
              name: "delete",
              description:
                "Delete a runner profile. Jobs that request its runs-on label stop being picked up; running jobs finish",
              options: [
                {
                  name: "--yes",
                  description: "Confirm deleting the profile",
                },
                accountOption,
                pathOption("Project directory"),
                jsonOption("Return the response as JSON"),
              ],
              args: {
                name: "name",
                description: "Profile name, without the runs-on label prefix",
              },
            },
          ],
        },
      ],
    },
    {
      name: "sandbox",
      description:
        "Manage your account's Tuist sandboxes and run commands in them",
      subcommands: [
        {
          name: "list",
          description:
            "List sandboxes, newest first, with their status and shape",
          options: [
            accountOption,
            pathOption("Project directory"),
            jsonOption(
              "Return the response as JSON. Unknown optional values are omitted"
            ),
            {
              name: "--search",
              description:
                "Text the sandbox ID, Amp Orb ID or Anthropic session ID contains",
              args: { name: "search" },
            },
            {
              name: "--status",
              description: "Only sandboxes with this status",
              args: {
                name: "status",
                suggestions: [
                  "active",
                  "idle",
                  "starting",
                  "resuming",
                  "paused",
                  "archived",
                  "failed",
                ],
              },
            },
            {
              name: "--vcpus",
              description: "Only sandboxes with this many vCPUs",
              args: { name: "vcpus" },
            },
            {
              name: "--sort-by",
              description: "Sort sandboxes by field",
              args: {
                name: "sort-by",
                suggestions: ["created", "last_active", "identifier"],
              },
            },
            {
              name: "--sort-order",
              description: "Sort order",
              args: { name: "sort-order", suggestions: ["asc", "desc"] },
            },
            pageOption,
            pageSizeOption,
          ],
        },
        {
          name: "show",
          description: "Show a sandbox's details",
          options: [
            accountOption,
            pathOption("Project directory"),
            jsonOption(
              "Return the response as JSON. Unknown optional values are omitted"
            ),
          ],
          args: { name: "sandbox-id", description: "Sandbox UUID" },
        },
        {
          name: "analytics",
          description:
            "Show vCPU-hours, sandboxes created, durations and peak usage against limits. Defaults to the last 30 days",
          options: [
            accountOption,
            pathOption("Project directory"),
            jsonOption(
              "Return the response as JSON. Unknown optional values are omitted"
            ),
            {
              name: "--start",
              description: "Range start as an ISO 8601 timestamp",
              args: { name: "start" },
            },
            {
              name: "--end",
              description:
                "Range end as an ISO 8601 timestamp. Defaults to now",
              args: { name: "end" },
            },
          ],
        },
        {
          name: "create",
          description:
            "Boot a bare sandbox from a template. Useful to try a template before connecting an environment",
          options: [
            accountOption,
            pathOption("Project directory"),
            jsonOption(
              "Return the response as JSON. Unknown optional values are omitted"
            ),
            {
              name: "--platform",
              description: "Linux or macos. Defaults to linux",
              args: {
                name: "platform",
                suggestions: ["linux", "macos"],
                default: "linux",
              },
            },
            {
              name: "--template",
              description:
                "Template name. Defaults to the server's default template for the platform",
              args: { name: "template" },
            },
            {
              name: "--vcpus",
              description:
                "VCPUs: 2, 4 or 8 on Linux, 8 on macOS. Pass it with --memory-gb",
              args: { name: "vcpus" },
            },
            {
              name: "--memory-gb",
              description:
                "Memory in GB: 4, 8 or 16 on Linux (with 2, 4 or 8 vCPUs), 8, 16 or 24 on macOS. Pass it with --vcpus",
              args: { name: "memory-gb" },
            },
            {
              name: "--workspace-gb",
              description: "Workspace disk size in GB (1–100)",
              args: { name: "workspace-gb" },
            },
          ],
        },
        {
          name: "exec",
          description:
            "Run a shell command in a sandbox, resuming it first when paused, and stream its output",
          subcommands: [
            {
              name: "--",
              description: "The command to run, after `--`",
              args: {
                name: "command",
                isVariadic: true,
                isOptional: true,
              },
            },
          ],
          options: [
            accountOption,
            pathOption("Project directory"),
            jsonOption(
              "Return the response as JSON. Unknown optional values are omitted"
            ),
            {
              name: "--cwd",
              description:
                "Working directory in the sandbox. Defaults to the sandbox's workspace",
              args: { name: "cwd" },
            },
            {
              name: "--env",
              description:
                "An environment variable as NAME=VALUE. Repeatable. Never stored",
              isRepeatable: true,
              args: { name: "env" },
            },
            {
              name: "--timeout",
              description:
                "Kill the command after this many seconds (1–21600). Defaults to one hour",
              args: { name: "timeout" },
            },
          ],
          args: { name: "sandbox-id", description: "Sandbox UUID" },
        },
        {
          name: "sync",
          description:
            "Mirror the local Git worktree's files into a sandbox, including uncommitted and untracked ones",
          options: [
            accountOption,
            pathOption("Project directory"),
            jsonOption(
              "Return the response as JSON. Unknown optional values are omitted"
            ),
            {
              name: "--to",
              description:
                "The repository's path in the sandbox. Defaults to $HOME/work/<repository name>",
              args: { name: "to" },
            },
          ],
          args: { name: "sandbox-id", description: "Sandbox UUID" },
        },
        {
          name: "cp",
          description:
            "Copy a file or directory into or out of a sandbox, such as a built .app, an .xcresult bundle or a screenshot",
          options: [
            accountOption,
            pathOption("Project directory"),
            jsonOption(
              "Return the response as JSON. Unknown optional values are omitted"
            ),
          ],
          args: [
            {
              name: "source",
              description: "What to copy: a local path, or <sandbox-id>:<path>",
            },
            {
              name: "destination",
              description:
                "Where to copy it: a local path, or <sandbox-id>:<path>",
            },
          ],
        },
        {
          name: "pause",
          description:
            "Pause a running sandbox, snapshotting it to its node's disk",
          options: [
            accountOption,
            pathOption("Project directory"),
            jsonOption(
              "Return the response as JSON. Unknown optional values are omitted"
            ),
          ],
          args: { name: "sandbox-id", description: "Sandbox UUID" },
        },
        {
          name: "resume",
          description: "Resume a paused or archived sandbox",
          options: [
            accountOption,
            pathOption("Project directory"),
            jsonOption(
              "Return the response as JSON. Unknown optional values are omitted"
            ),
          ],
          args: { name: "sandbox-id", description: "Sandbox UUID" },
        },
        {
          name: "archive",
          description:
            "Move a paused sandbox's disks to object storage, freeing them on its node",
          options: [
            accountOption,
            pathOption("Project directory"),
            jsonOption(
              "Return the response as JSON. Unknown optional values are omitted"
            ),
          ],
          args: { name: "sandbox-id", description: "Sandbox UUID" },
        },
        {
          name: "delete",
          description: "Delete a sandbox and its disks. This cannot be undone",
          options: [
            accountOption,
            pathOption("Project directory"),
            jsonOption(
              "Return the response as JSON. Unknown optional values are omitted"
            ),
            {
              name: "--yes",
              description: "Confirm deleting the sandbox and its disks",
            },
          ],
          args: { name: "sandbox-id", description: "Sandbox UUID" },
        },
      ],
    },
    {
      name: "scaffold",
      description: "Generates new project based on a template",
      subcommands: [
        {
          name: "list",
          description: "Lists available scaffold templates",
          options: [
            jsonOption(),
            pathOption("The path where you want to list templates from"),
          ],
        },
      ],
      options: [
        jsonOption(),
        pathOption(
          "The path to the folder where the template will be generated (Default: Current directory)"
        ),
      ],
      args: {
        name: "template",
        description: "Name of template you want to use",
      },
    },
    {
      name: "setup",
      description: "Commands to set up and configure Tuist services",
      subcommands: [
        {
          name: "cache",
          description: "Set up the Tuist Xcode cache",
          options: [pathOption()],
        },
        {
          name: "insights",
          description:
            "Set up the insights daemon to gain access to richer data, such as machine metrics for build insights",
        },
      ],
    },
    {
      name: "teardown",
      description:
        "Commands to tear down Tuist services previously set up with `tuist setup`",
      subcommands: [
        {
          name: "cache",
          description:
            "Stop the Tuist Xcode cache proxy and remove its LaunchAgent and socket",
          options: [pathOption()],
        },
        {
          name: "insights",
          description:
            "Stop the insights daemon and remove its LaunchAgent and sampled machine metrics",
        },
      ],
    },
    {
      name: "test",
      description: "Tests a project",
      subcommands: [
        {
          name: "run",
          description: "Tests a project",
          subcommands: [xcodebuildPassthrough],
          options: testRunOptions,
          args: testRunArgs,
        },
        {
          name: "show",
          description: "Shows information about a test run",
          options: [projectOption, pathOption(), jsonOption()],
          args: {
            name: "test-run-id",
            description: "The ID of the test run to show",
          },
        },
        {
          name: "list",
          description: "Lists all test runs in a project",
          options: [
            projectOption,
            pathOption(),
            {
              name: "--git-branch",
              description: "Filter test runs by git branch",
              args: { name: "git-branch" },
            },
            {
              name: "--status",
              description: "Filter test runs by status (success or failure)",
              args: { name: "status" },
            },
            {
              name: "--scheme",
              description: "Filter test runs by scheme",
              args: { name: "scheme" },
            },
            ...pagination("test runs", 10),
            jsonOption(),
          ],
        },
        {
          name: "case",
          description: "A set of commands to manage test cases",
          subcommands: [
            {
              name: "list",
              description: "Lists test cases for a project",
              options: [
                projectOption,
                pathOption(),
                {
                  name: "--quarantined",
                  description: "Filter by quarantined test cases",
                },
                {
                  name: "--flaky",
                  description: "Filter by flaky test cases",
                },
                {
                  name: "--skip-testing",
                  description: "Output as xcodebuild -skip-testing arguments",
                },
                ...pagination("test cases", 10),
                jsonOption(),
              ],
            },
            {
              name: "show",
              description: "Shows information about a test case",
              options: [projectOption, pathOption(), jsonOption()],
              args: {
                name: "test-case-identifier",
                description:
                  "The test case identifier. Either a UUID or the format Module/Suite/TestCase (or Module/TestCase)",
              },
            },
            {
              name: "update",
              description: "Updates a test case",
              options: [
                {
                  name: "--state",
                  description: "The new state for the test case",
                  args: {
                    name: "state",
                    suggestions: ["enabled", "muted", "skipped"],
                  },
                },
                {
                  name: "--flaky",
                  description: "Mark the test case as flaky",
                  exclusiveOn: ["--no-flaky"],
                },
                {
                  name: "--no-flaky",
                  description: "Mark the test case as not flaky",
                  exclusiveOn: ["--flaky"],
                },
                projectOption,
                pathOption(),
                jsonOption(),
              ],
              args: {
                name: "test-case-identifier",
                description:
                  "The test case identifier. Either a UUID or the format Module/Suite/TestCase (or Module/TestCase)",
              },
            },
            {
              name: "events",
              description:
                "Lists events for a test case (e.g. marked flaky, quarantined)",
              options: [
                projectOption,
                pathOption(),
                {
                  name: "--page",
                  description: "Page number for pagination",
                  args: { name: "page" },
                },
                {
                  name: "--page-size",
                  description:
                    "Number of events per page (default: 20, max: 100)",
                  args: { name: "page-size" },
                },
                jsonOption(),
              ],
              args: {
                name: "test-case-identifier",
                description:
                  "The test case identifier. Either a UUID or the format Module/Suite/TestCase (or Module/TestCase)",
              },
            },
            {
              name: "run",
              description: "A set of commands to manage test case runs",
              subcommands: [
                {
                  name: "list",
                  description: "Lists runs for a test case",
                  options: [
                    projectOption,
                    pathOption(),
                    {
                      name: "--flaky",
                      description: "Filter by flaky runs",
                    },
                    {
                      name: "--test-run-id",
                      description: "Filter by test run ID",
                      args: { name: "test-run-id" },
                    },
                    ...pagination("runs", 10),
                    jsonOption(),
                  ],
                  args: {
                    name: "test-case-identifier",
                    description:
                      "The test case identifier. Either a UUID or the format Module/Suite/TestCase (or Module/TestCase)",
                    isOptional: true,
                  },
                },
                {
                  name: "show",
                  description: "Shows information about a test case run",
                  options: [projectOption, pathOption(), jsonOption()],
                  args: {
                    name: "test-case-run-id",
                    description: "The ID of the test case run to show",
                  },
                },
              ],
            },
          ],
        },
        {
          name: "module",
          description: "A set of commands to manage test module runs",
          subcommands: [
            {
              name: "list",
              description: "Lists module runs for a test run",
              options: [
                projectOption,
                pathOption(),
                {
                  name: "--status",
                  description: "Filter by status (success or failure)",
                  args: { name: "status" },
                },
                ...pagination("module runs", 10),
                jsonOption(),
              ],
              args: {
                name: "test-run-id",
                description: "The ID of the test run",
              },
            },
          ],
        },
        {
          name: "suite",
          description: "A set of commands to manage test suite runs",
          subcommands: [
            {
              name: "list",
              description: "Lists suite runs for a test run",
              options: [
                projectOption,
                pathOption(),
                {
                  name: "--status",
                  description: "Filter by status (success or failure)",
                  args: { name: "status" },
                },
                {
                  name: "--module-name",
                  description: "Filter by module name",
                  args: { name: "module-name" },
                },
                ...pagination("suite runs", 10),
                jsonOption(),
              ],
              args: {
                name: "test-run-id",
                description: "The ID of the test run",
              },
            },
          ],
        },
        {
          name: "xcode",
          description: "A set of commands to inspect Xcode test details",
          subcommands: [
            {
              name: "target",
              description: "A set of commands to manage test targets",
              subcommands: [
                {
                  name: "list",
                  description: "Lists all targets for a test run",
                  options: [
                    projectOption,
                    pathOption(),
                    {
                      name: "--hit-status",
                      description:
                        "Filter by hit status (miss, local, or remote)",
                      args: {
                        name: "hit-status",
                        suggestions: ["miss", "local", "remote"],
                      },
                    },
                    ...pagination("targets", 10),
                    jsonOption(),
                  ],
                  args: {
                    name: "test-run-id",
                    description: "The ID of the test run",
                  },
                },
              ],
            },
          ],
        },
        xcodebuildPassthrough,
      ],
      options: testRunOptions,
      args: testRunArgs,
    },
    {
      name: "inspect",
      description:
        "Inspect your project to identify issues such as implicit or redundant dependencies",
      subcommands: [
        {
          name: "bundle",
          description:
            "Inspects an app bundle. The app bundle has to be either `.app`, `.xcarchive`, `.ipa`, `.aab`, or `.apk`",
          options: [
            {
              name: ["--configuration", "-C"],
              description: "The configuration of the app to inspect",
              args: { name: "configuration" },
            },
            {
              name: "--platforms",
              description:
                "The platforms (iOS, tvOS, visionOS, watchOS or macOS) to inspect the app for",
              isRepeatable: true,
              args: {
                name: "platforms",
                suggestions: ["ios", "macos", "tvos", "visionos", "watchos"],
              },
            },
            {
              name: "--derived-data-path",
              description:
                "The derived data path to find the app in. When absent, the system-configured one",
              args: { name: "derived-data-path", template: "folders" },
            },
            jsonOption(),
            pathOption(
              "The path to the directory that contains the project associated with the inspected bundle"
            ),
            {
              name: "--tags",
              description:
                "Tags to attach to the bundle for filtering and grouping",
              isRepeatable: true,
              args: { name: "tags", isVariadic: true },
            },
            verboseOption,
          ],
          args: {
            name: "bundle",
            description:
              "The path to the bundle, or the name of an app for Apple platforms to resolve from Xcode build products",
            template: "folders",
          },
        },
        {
          name: "dependencies",
          description:
            "Inspects implicit and redundant dependencies in Tuist projects, failing when issues are found",
          options: [
            pathOption("The path to the directory that contains the project"),
            {
              name: "--only",
              description:
                "Run only specified checks. Can be repeated. Default: implicit",
              isRepeatable: true,
              args: {
                name: "only",
                suggestions: ["implicit", "redundant"],
              },
            },
            {
              name: "--output",
              description:
                "The output format. Available options: text, summary, json",
              args: {
                name: "output",
                suggestions: ["text", "summary", "json"],
                default: "text",
              },
            },
            jsonOption("Output the result as JSON. Alias for '--output json'"),
            verboseOption,
          ],
        },
        {
          name: "implicit-imports",
          description:
            "Find implicit imports in Tuist projects failing when cases are found",
          hidden: true,
          options: [
            pathOption("The path to the directory that contains the project"),
            verboseOption,
          ],
        },
        {
          name: "redundant-imports",
          description:
            "Find redundant imports in Tuist projects failing when cases are found",
          hidden: true,
          options: [
            pathOption("The path to the directory that contains the project"),
            verboseOption,
          ],
        },
        {
          name: "build",
          description: "Inspects the latest build",
          options: [
            pathOption(
              "The path to the directory that contains the project to inspect the latest build for"
            ),
            {
              name: "--derived-data-path",
              description:
                "The path to the directory containing the project's derived data artifacts",
              args: { name: "derived-data-path", template: "folders" },
            },
            verboseOption,
          ],
        },
        {
          name: "test",
          description: "Inspects the latest test results",
          options: [
            pathOption(
              "The path to the directory that contains the project to inspect the latest test results for"
            ),
            {
              name: "--derived-data-path",
              description:
                "The path to the directory containing the project's derived data artifacts",
              args: { name: "derived-data-path", template: "folders" },
            },
            {
              name: "--mode",
              description:
                "Processing mode: 'local' parses the xcresult on this machine, 'remote' uploads it for server-side processing, 'off' skips test analysis entirely (nothing is parsed, archived, or uploaded). When omitted, defaults to 'remote' for tuist-hosted instances and 'local' for self-hosted ones",
              args: {
                name: "mode",
                suggestions: ["local", "remote", "off"],
              },
            },
            verboseOption,
          ],
          args: {
            name: "result-bundle-path",
            description:
              "The path to the result bundle (.xcresult) to inspect. If not provided, the most recent result bundle from the derived data directory will be used",
            template: "filepaths",
            isOptional: true,
          },
        },
      ],
      options: [verboseOption],
    },
    {
      name: "coverage",
      description: "Utilities for the code coverage gathered by test runs",
      subcommands: [
        {
          name: "complete",
          description:
            "Signal that the coverage pipeline of a commit has finished, so its coverage is complete",
          options: [
            pathOption(
              "The path to the directory containing the Tuist project"
            ),
            fullHandleOption,
            {
              name: "--commit",
              description:
                "The commit whose coverage pipeline finished. Defaults to the checkout's HEAD, or the commit the CI provider reports",
              args: { name: "commit" },
            },
            jsonOption("Print the commit's coverage as JSON"),
          ],
        },
        {
          name: "show",
          description:
            "Show the coverage of a commit, or of a branch's latest complete commit",
          options: [
            pathOption(
              "The path to the directory containing the Tuist project"
            ),
            fullHandleOption,
            {
              name: "--branch",
              description:
                "The branch whose latest complete commit to show. Defaults to the project's default branch",
              args: { name: "branch" },
            },
            {
              name: "--commit",
              description: "The commit to show. Takes precedence over --branch",
              args: { name: "commit" },
            },
            jsonOption(),
          ],
        },
        {
          name: "files",
          description:
            "List the coverage of a commit's files, least covered first",
          options: [
            pathOption(
              "The path to the directory containing the Tuist project"
            ),
            fullHandleOption,
            {
              name: "--branch",
              description:
                "The branch whose latest complete commit to read. Defaults to the project's default branch",
              args: { name: "branch" },
            },
            {
              name: "--commit",
              description: "The commit to read. Takes precedence over --branch",
              args: { name: "commit" },
            },
            {
              name: "--search",
              description: "Only list files whose path contains this text",
              args: { name: "search" },
            },
            {
              name: "--sort-by",
              description: "Sort by coverage or path. Defaults to coverage",
              args: {
                name: "sort-by",
                suggestions: ["coverage", "path"],
              },
            },
            {
              name: "--sort-order",
              description:
                "Sort ascending (asc) or descending (desc). Defaults to asc",
              args: { name: "sort-order", suggestions: ["asc", "desc"] },
            },
            ...pagination("files", 20),
            jsonOption(),
          ],
        },
        {
          name: "file",
          description:
            "Show the coverage of one file at a commit, with its functions",
          options: [
            pathOption(
              "The path to the directory containing the Tuist project"
            ),
            fullHandleOption,
            {
              name: "--branch",
              description:
                "The branch whose latest complete commit to read. Defaults to the project's default branch",
              args: { name: "branch" },
            },
            {
              name: "--commit",
              description: "The commit to read. Takes precedence over --branch",
              args: { name: "commit" },
            },
            {
              name: "--lines",
              description:
                "Include per-line execution counts, and list the uncovered lines",
            },
            jsonOption(),
          ],
          args: {
            name: "file-path",
            description: "The file's path, as listed by `tuist coverage files`",
          },
        },
      ],
    },
    {
      name: "xcodebuild",
      description:
        "Tuist xcodebuild extends the xcodebuild CLI with server capabilities such as insights and analytics",
      subcommands: [
        {
          name: "test",
          description:
            "Tuist xcodebuild test extends the xcodebuild CLI test action with insights",
          options: [
            skipQuarantineOption,
            shardIndexOption,
            shardReferenceOption,
            {
              name: "--shard-plan-id",
              description:
                "Exact shard plan identifier emitted by the build-for-testing job",
              args: { name: "shard-plan-id" },
            },
            {
              name: "--shard-archive-path",
              description:
                "Path to a locally managed shard archive. Tuist extracts this archive instead of downloading test products from remote storage",
              args: {
                name: "shard-archive-path",
                template: "filepaths",
              },
            },
            inspectModeOption,
            {
              name: "--stress-new-tests",
              description:
                "Rerun the test cases this branch adds, priced by duration, and flag any that prove flaky. 'report' warns; 'enforce' fails the run on a flaky test case. Off when omitted",
              args: {
                name: "stress-new-tests",
                suggestions: ["report", "enforce"],
              },
            },
            runReportPathOption,
          ],
          args: {
            name: "passthrough-xcodebuild-arguments",
            description:
              "Arguments that will be passed through to the xcodebuild CLI. All arguments are forwarded to xcodebuild",
            isVariadic: true,
            isOptional: true,
          },
        },
        {
          name: "test-without-building",
          description:
            "Tuist xcodebuild test-without-building extends the xcodebuild CLI test action with insights",
          options: [
            skipQuarantineOption,
            shardIndexOption,
            shardReferenceOption,
            {
              name: "--shard-plan-id",
              description:
                "Exact shard plan identifier emitted by the build-for-testing job",
              args: { name: "shard-plan-id" },
            },
            {
              name: "--shard-archive-path",
              description:
                "Path to a locally managed shard archive. Tuist extracts this archive instead of downloading test products from remote storage",
              args: {
                name: "shard-archive-path",
                template: "filepaths",
              },
            },
            inspectModeOption,
          ],
          args: {
            name: "passthrough-xcodebuild-arguments",
            description:
              "Arguments that will be passed through to the xcodebuild CLI. All arguments are forwarded to xcodebuild",
            isVariadic: true,
            isOptional: true,
          },
        },
        {
          name: "build",
          description:
            "Tuist xcodebuild build extends the xcodebuild CLI build action with insights",
          options: [runReportPathOption],
          args: {
            name: "passthrough-xcodebuild-arguments",
            description:
              "Arguments that will be passed through to the xcodebuild CLI. All arguments are forwarded to xcodebuild",
            isVariadic: true,
            isOptional: true,
          },
        },
        {
          name: "build-for-testing",
          description:
            "Tuist xcodebuild build-for-testing extends the xcodebuild CLI build-for-testing action with insights",
          options: [
            {
              name: "--shard-max",
              description:
                "Maximum number of shards to distribute tests across",
              args: { name: "shard-max" },
            },
            {
              name: "--shard-min",
              description: "Minimum number of shards",
              args: { name: "shard-min" },
            },
            {
              name: "--shard-total",
              description:
                "Exact number of shards (mutually exclusive with --shard-min/--shard-max). With suite granularity, the final shard is the catch-all",
              exclusiveOn: ["--shard-min", "--shard-max"],
              args: { name: "shard-total" },
            },
            {
              name: "--shard-max-duration",
              description: "Target maximum duration per shard in milliseconds",
              args: { name: "shard-max-duration" },
            },
            {
              name: "--shard-granularity",
              description:
                "Sharding granularity level: module (default) or suite",
              args: {
                name: "shard-granularity",
                suggestions: ["module", "suite"],
                default: "module",
              },
            },
            shardReferenceOption,
            {
              name: "--shard-skip-upload",
              description:
                "Skip uploading test products to remote storage. Use when you provide test products to shard runners yourself, for example via shared volumes",
            },
            {
              name: "--shard-archive-path",
              description:
                "Path where Tuist should write the optimized shard archive instead of uploading test products to remote storage",
              args: {
                name: "shard-archive-path",
                template: "filepaths",
              },
            },
          ],
          args: {
            name: "passthrough-xcodebuild-arguments",
            description:
              "Arguments that will be passed through to the xcodebuild CLI. All arguments are forwarded to xcodebuild",
            isVariadic: true,
            isOptional: true,
          },
        },
        {
          name: "archive",
          description:
            "Tuist xcodebuild archive extends the xcodebuild CLI archive action with insights",
          args: {
            name: "passthrough-xcodebuild-arguments",
            description:
              "Arguments that will be passed through to the xcodebuild CLI. All arguments are forwarded to xcodebuild",
            isVariadic: true,
            isOptional: true,
          },
        },
      ],
    },
    {
      name: "share",
      description: "Generate a link to share your app or CLI",
      options: [
        pathOption(
          "The path to the directory that contains a Tuist or Xcode project with a buildable scheme that can output runnable artifacts"
        ),
        {
          name: "--executable",
          description:
            "The executable path relative to a CLI distribution directory. Includes the entire directory in the preview",
          args: { name: "executable" },
        },
        {
          name: "--icon",
          description:
            "A PNG icon to show for an executable preview, such as a Linux app",
          args: { name: "icon", template: "filepaths" },
        },
        {
          name: ["--configuration", "-C"],
          description:
            "The configuration of the app to share. Ignored when the app paths are passed directly",
          args: { name: "configuration" },
        },
        {
          name: "--platforms",
          description:
            "The platforms (iOS, tvOS, visionOS, watchOS or macOS) to share the app for. Ignored when the app paths are passed directly",
          isRepeatable: true,
          args: {
            name: "platforms",
            suggestions: ["ios", "macos", "tvos", "visionos", "watchos"],
          },
        },
        {
          name: "--derived-data-path",
          description:
            "The derived data path to find the apps in. When absent, the system-configured one",
          args: { name: "derived-data-path", template: "folders" },
        },
        jsonOption(),
        {
          name: "--track",
          description: "The track of the preview (e.g., 'beta', 'nightly')",
          args: { name: "track" },
        },
        {
          name: "--release-notes",
          description: "Plain-text release notes describing this preview build",
          args: { name: "release-notes" },
        },
      ],
      args: {
        name: "apps",
        description:
          "An app name, app bundles, an .ipa or .apk file, an executable, or a directory containing a CLI distribution",
        isVariadic: true,
        isOptional: true,
      },
    },
    {
      name: "account",
      description: "A set of commands to manage your Tuist account",
      subcommands: [
        {
          name: "tokens",
          description: "Manage Tuist account tokens",
          subcommands: [
            {
              name: "create",
              description: "Create a new Tuist account token",
              options: [
                {
                  name: ["--scopes", "-s"],
                  description: "The scopes for the token",
                  isRequired: true,
                  isRepeatable: true,
                  args: {
                    name: "scopes",
                    suggestions: [
                      "ci",
                      "account:cache:read",
                      "account:cache:write",
                      "account:members:read",
                      "account:members:write",
                      "account:registry:read",
                      "account:registry:write",
                      "account:runners:read",
                      "account:runners:write",
                      "account:sandboxes:write",
                      "project:previews:read",
                      "project:previews:write",
                      "project:admin:read",
                      "project:admin:write",
                      "project:cache:read",
                      "project:cache:write",
                      "project:bundles:read",
                      "project:bundles:write",
                      "project:tests:read",
                      "project:tests:write",
                      "project:builds:read",
                      "project:builds:write",
                      "project:runs:read",
                      "project:runs:write",
                    ],
                    isVariadic: true,
                  },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "A unique identifier for the token. Must be 1-32 characters and contain only alphanumeric characters, hyphens, and underscores",
                  isRequired: true,
                  args: { name: "name" },
                },
                {
                  name: ["--expires", "-e"],
                  description:
                    "When the token should expire. Use format like '30d' (days), '6m' (months), or '1y' (years). If not specified, the token never expires",
                  args: { name: "expires" },
                },
                {
                  name: "--projects",
                  description:
                    "The project handles to grant the token access to. If not provided, the token has access to all projects",
                  isRepeatable: true,
                  args: { name: "projects", isVariadic: true },
                },
                {
                  name: "--path",
                  description:
                    "The path to the directory or a subdirectory of the project",
                  args: { name: "path", template: "folders" },
                },
              ],
              args: {
                name: "account-handle",
                description: "The account handle to create the token for",
              },
            },
            {
              name: "list",
              description: "List Tuist account tokens",
              options: [pathOption(), jsonOption("Output the result as JSON")],
              args: {
                name: "account-handle",
                description: "The account handle to list the tokens for",
              },
            },
            {
              name: "revoke",
              description: "Revoke a Tuist account token",
              options: [pathOption()],
              args: [
                {
                  name: "account-handle",
                  description: "The account handle to revoke the token for",
                },
                {
                  name: "name",
                  description: "The name of the token to revoke",
                },
              ],
            },
          ],
        },
        {
          name: "update",
          description: "Update account settings",
          options: [
            {
              name: "--handle",
              description: "The new handle",
              isRequired: true,
              args: { name: "handle" },
            },
            pathOption(),
          ],
          args: {
            name: "account-handle",
            description:
              "The account handle of the account to update. If omitted, defaults to the account you're currently authenticated as",
            isOptional: true,
          },
        },
      ],
    },
    {
      name: "project",
      description: "A set of commands to manage your Tuist projects",
      subcommands: [
        {
          name: "show",
          description:
            "Show information about the specified project. Use --web flag to open the project in the browser",
          options: [
            {
              name: "--web",
              description: "Open a project in the browser",
            },
            pathOption("The path to the Tuist project"),
          ],
          args: {
            name: "full-handle",
            description:
              "The project to show. The full handle must be in the format of account-handle/project-handle",
            template: "folders",
            isOptional: true,
          },
        },
        {
          name: "create",
          description: "Create a new project",
          options: [
            pathOption(),
            {
              name: "--build-system",
              description: "The build system used by the project",
              args: {
                name: "build-system",
                suggestions: [
                  "xcode",
                  "gradle",
                  "bazel",
                  "once",
                  "mix",
                  "cargo",
                ],
              },
            },
          ],
          args: {
            name: "full-handle",
            description:
              "The project to create. The full handle must be in the format of account-handle/project-handle",
            template: "folders",
          },
        },
        {
          name: "list",
          description: "List projects you have access to",
          options: [jsonOption(), pathOption()],
        },
        {
          name: "delete",
          description: "Delete a Tuist project",
          options: [pathOption()],
          args: {
            name: "full-handle",
            description:
              "The project to delete. Must be in the format of account-handle/project-handle",
            template: "folders",
          },
        },
        {
          name: "tokens",
          description: "Manage Tuist project tokens",
          hidden: true,
          subcommands: [
            {
              name: "create",
              description:
                "Create a new Tuist project token. You can save this token in the `TUIST_TOKEN` environment variable to authenticate requests against the Tuist API",
              hidden: true,
              options: [pathOption()],
              args: {
                name: "full-handle",
                description:
                  "The project to create the token for. Must be in the format of account-handle/project-handle",
              },
            },
            {
              name: "list",
              description: "List Tuist project tokens",
              hidden: true,
              options: [pathOption()],
              args: {
                name: "full-handle",
                description:
                  "The project to list the tokens for. Must be in the format of account-handle/project-handle",
              },
            },
            {
              name: "revoke",
              description: "Revoke Tuist project tokens",
              hidden: true,
              options: [pathOption()],
              args: [
                {
                  name: "project-token-id",
                  description: "The ID of the project token to revoke",
                },
                {
                  name: "full-handle",
                  description:
                    "The project to revoke the token for. Must be in the format of account-handle/project-handle",
                },
              ],
            },
          ],
        },
        {
          name: "update",
          description: "Update project settings",
          options: [
            {
              name: "--default-branch",
              description:
                "Set the default branch name for the repository linked to the project",
              args: { name: "default-branch" },
            },
            {
              name: "--visibility",
              description:
                "Set the project's visibility. When private, only project's members have access to the project. Public projects are accessible by anyone",
              args: {
                name: "visibility",
                suggestions: ["public", "private"],
              },
            },
            pathOption("The path to the Tuist project"),
          ],
          args: {
            name: "full-handle",
            description:
              "The full handle of the project to update. Must be in the format of account-handle/project-handle",
            isOptional: true,
          },
        },
        {
          name: "repository",
          description:
            "Manage the GitHub repository a Tuist project is linked to",
          subcommands: [
            {
              name: "connect",
              description:
                "Link a project to a GitHub repository the account's GitHub App installation can access",
              options: [
                projectOption,
                pathOption("The path to the Tuist project"),
              ],
              args: {
                name: "repository",
                description:
                  "The repository's full handle, in the format owner/name",
              },
            },
            {
              name: "disconnect",
              description: "Remove a project's link to its GitHub repository",
              options: [
                projectOption,
                pathOption("The path to the Tuist project"),
              ],
            },
          ],
        },
      ],
    },
    {
      name: "bundle",
      description: "A set of commands to manage your project bundles",
      subcommands: [
        {
          name: "list",
          description: "Lists all the bundles in a project",
          options: [
            {
              name: ["--project", "-P"],
              description:
                "The full handle of the project. Must be in the format of account-handle/project-handle. If not provided, it will be read from the project's Tuist.swift",
              args: { name: "project" },
            },
            pathOption(),
            {
              name: "--git-branch",
              description: "Filter bundles by git branch",
              args: { name: "git-branch" },
            },
            {
              name: "--tags",
              description:
                "Filter bundles by tags. Returns bundles containing ALL specified tags",
              isRepeatable: true,
              args: { name: "tags", isVariadic: true },
            },
            jsonOption(),
          ],
        },
        {
          name: "show",
          description: "Shows information about a bundle",
          options: [
            {
              name: ["--project", "-P"],
              description:
                "The full handle of the project. Must be in the format of account-handle/project-handle. If not provided, it will be read from the project's Tuist.swift",
              args: { name: "project" },
            },
            pathOption(),
            jsonOption(),
          ],
          args: {
            name: "bundle-id",
            description: "The ID of the bundle to show",
          },
        },
        {
          name: "artifact",
          description: "A set of commands to manage bundle artifacts",
          subcommands: [
            {
              name: "list",
              description: "Lists artifacts for a bundle",
              options: [
                projectOption,
                pathOption(),
                {
                  name: "--page-size",
                  description:
                    "The number of artifacts per page. Defaults to 50",
                  args: { name: "page-size" },
                },
                jsonOption(),
              ],
              args: {
                name: "bundle-id",
                description: "The ID of the bundle",
              },
            },
          ],
        },
      ],
    },
    {
      name: "organization",
      description: "A set of commands to manage your Tuist organizations",
      subcommands: [
        {
          name: "create",
          description: "Create a new organization",
          options: [pathOption()],
          args: {
            name: "organization-name",
            description: "The name of the organization to create",
          },
        },
        {
          name: "list",
          description: "List your organizations",
          options: [jsonOption(), pathOption()],
        },
        {
          name: "delete",
          description: "Delete a new organization",
          options: [pathOption()],
          args: {
            name: "organization-name",
            description: "The name of the organization to delete",
            template: "folders",
          },
        },
        {
          name: "show",
          description: "Show information about the specified organization",
          options: [jsonOption(), pathOption()],
          args: {
            name: "organization-name",
            description: "The name of the organization to show",
          },
        },
        {
          name: "invite",
          description: "Invite a new member to your organization",
          options: [
            {
              name: "--role",
              description:
                "The role the invitee gets when they accept the invitation. Defaults to user",
              args: {
                name: "role",
                suggestions: ["user", "admin", "viewer"],
              },
            },
            pathOption(),
          ],
          args: [
            {
              name: "organization-name",
              description: "The name of the organization to invite the user to",
            },
            {
              name: "email",
              description: "The email of the user to invite",
            },
          ],
        },
        {
          name: "remove",
          description:
            "A set of commands to remove members or cancel pending invitations",
          subcommands: [
            {
              name: "invite",
              description: "Cancel pending invitation",
              options: [pathOption()],
              args: [
                {
                  name: "organization-name",
                  description:
                    "The name of the organization to cancel the invitation for",
                },
                {
                  name: "email",
                  description:
                    "The email of the user to cancel the invitation for",
                },
              ],
            },
            {
              name: "member",
              description: "Remove a member from your organization",
              options: [pathOption()],
              args: [
                {
                  name: "organization-name",
                  description:
                    "The name of the organization to remove the organization member from",
                },
                {
                  name: "username",
                  description:
                    "The username of the member you want to remove from the organization",
                },
              ],
            },
            {
              name: "sso",
              description: "Remove the SSO provider for your organization",
              options: [pathOption()],
              args: {
                name: "organization-name",
                description:
                  "The name of the organization for which you want to update the SSO provider for",
              },
            },
          ],
        },
        {
          name: "update",
          description: "A set of commands to update the organization",
          subcommands: [
            {
              name: "member",
              description: "Update a member from your organization",
              options: [
                {
                  name: "--role",
                  description: "The new member role",
                  isRequired: true,
                  args: {
                    name: "role",
                    suggestions: ["admin", "user", "viewer"],
                  },
                },
                pathOption(),
              ],
              args: [
                {
                  name: "organization-name",
                  description:
                    "The name of the organization for which you want to update the member for",
                },
                {
                  name: "username",
                  description: "The username of the member you want to update",
                },
              ],
            },
            {
              name: "sso",
              description: "Update the SSO provider for your organization",
              options: [
                {
                  name: "--provider",
                  description: "The SSO provider to use",
                  isRequired: true,
                  args: {
                    name: "provider",
                    suggestions: ["google", "okta"],
                  },
                },
                {
                  name: ["--organization-id", "-o"],
                  description:
                    "The identity provider organization identifier used to scope identities. For Google, this is the Google Workspace domain (for example, tuist.dev for tuist@tuist.dev). For Okta, it is the Okta organization domain (such as my-org.okta.com). This is distinct from the verified login email domain used for discovery and enrollment, which is configured in the dashboard",
                  isRequired: true,
                  args: { name: "organization-id" },
                },
                {
                  name: "--enrollment-policy",
                  description:
                    "How authenticated users join the organization. Automatic enrollment allows users from the provider's trusted domain to join without an invitation; invitation-only requires an invitation. When omitted, the current policy is preserved if the provider is unchanged. New configurations and provider changes default to automatic for Google and invitation-only for Okta",
                  args: {
                    name: "enrollment-policy",
                    suggestions: ["automatic", "invitation-only"],
                  },
                },
                pathOption(),
              ],
              args: {
                name: "organization-name",
                description:
                  "The name of the organization for which you want to update the SSO provider for",
              },
            },
          ],
        },
        {
          name: "billing",
          description: "Open billing dashboard for the specified organization",
          options: [pathOption()],
          args: {
            name: "organization-name",
            description:
              "The name of the organization to show billing dashboard for",
          },
        },
      ],
    },
    {
      name: "auth",
      description: "Manage authentication",
      subcommands: [
        {
          name: "login",
          description: "Log in a user",
          options: [
            {
              name: "--email",
              description: "Email to authenticate with",
              args: { name: "email" },
            },
            {
              name: "--password",
              description: "Password to authenticate with",
              args: { name: "password" },
            },
            urlOption,
          ],
        },
        {
          name: "logout",
          description: "Removes an existing Tuist session",
          options: [pathOption(), urlOption],
        },
        {
          name: "whoami",
          description:
            "Display the user's email identity currently authenticated and in use",
          options: [pathOption(), urlOption],
        },
        {
          name: "refresh-token",
          description: "Refreshes the token for a particular URL",
          hidden: true,
          args: {
            name: "url",
            description:
              "The URL of the server the token is being refreshed for",
          },
        },
        {
          name: "token",
          description: "Prints the authentication token for a server URL",
          hidden: true,
          options: [
            {
              name: "--url",
              description:
                "The URL of the server. Defaults to the current server",
              args: { name: "url" },
            },
          ],
        },
      ],
    },
    {
      name: "version",
      description: "Outputs the current version of tuist",
    },
    {
      name: "analytics-upload",
      description: "Upload a command event to the server",
      hidden: true,
      options: [
        {
          name: "--project-path",
          description: "The path to the project directory",
          hidden: true,
          args: { name: "project-path" },
        },
      ],
      args: [
        {
          name: "event-file-path",
          description: "Path to the JSON file containing the command event",
        },
        {
          name: "full-handle",
          description:
            "The full handle of the project (account-handle/project-handle)",
        },
        { name: "server-url", description: "The server URL" },
        {
          name: "session-directory",
          description:
            "Path to the session directory containing logs and network recordings",
          isOptional: true,
        },
      ],
    },
  ],
  options: [
    {
      name: ["--help", "-h"],
      description: "Show help information",
      isPersistent: true,
    },
  ],
};

export default completionSpec;
