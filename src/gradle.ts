// Gradle v9.9.2 (services.gradle.org/versions/current, 2026-11-20). Source: gradle/gradle tag v9.9.2 read statically, not run:
// CLI option definitions in platforms/core-runtime (*BuildOptions.java, HelpRenderer.java, property converters),
// built-in task @Option declarations (help/tasks/dependencies/dependencyInsight/properties/init/wrapper/test/updateDaemonJvm/report tasks),
// userguide reference/runtime-configuration/command_line_interface.adoc and releases/upgrading/upgrading_major_version_9.adoc.
// -b/--build-file and -c/--settings-file were removed in Gradle 9.0 and are no longer listed.
// Built-in tasks that only exist when a plugin is applied (e.g. build/run/check/clean/test) are modelled as subcommands without per-task options except test.

const consoleModeArg: Fig.Arg = {
  name: "mode",
  default: "auto",
  suggestions: [
    {
      name: "auto",
      description:
        "Enables color and other rich output in the console output when the build process is attached to a console, or to generate plain text only when not attached to a console",
    },
    {
      name: "plain",
      description:
        "Disables all color and other rich output in the console output. This is the default when Gradle is not attached to a terminal",
    },
    {
      name: "colored",
      description:
        "Enables colored output without rich status information such as progress bars",
    },
    {
      name: "rich",
      description:
        "Enables color and other rich output in the console output, regardless of whether the build process is not attached to a console",
    },
    {
      name: "verbose",
      description:
        "Enables color and other rich output like the rich, but output task names and outcomes at the lifecycle log level, as is done by default in Gradle 3.5 and earlier",
    },
  ],
};

const warningModeArg: Fig.Arg = {
  name: "mode",
  default: "summary",
  suggestions: [
    {
      name: "all",
      description: "Log all warnings",
    },
    {
      name: "fail",
      description:
        "Log all warnings and fail the build if there are any warnings",
    },
    {
      name: "summary",
      description:
        "Suppress all warnings and log a summary at the end of the build",
    },
    {
      name: "none",
      description:
        "Suppress all warnings, including the summary at the end of the build",
    },
  ],
};

const booleanArg: Fig.Arg = {
  name: "enabled",
  suggestions: ["true", "false"],
};

// Options that enable behavior come with a `--no-` inverse (also true for boolean task options)
const toggleOptions = (
  name: string,
  description: string,
  disableDescription = `Disables --${name}`
): Fig.Option[] => [
  {
    name: `--${name}`,
    description,
    exclusiveOn: [`--no-${name}`],
  },
  {
    name: `--no-${name}`,
    description: disableDescription,
    exclusiveOn: [`--${name}`],
  },
];

const sharedOptions: Fig.Option[] = [
  // Help and version
  {
    name: ["-?", "-h", "--help"],
    description:
      "Shows a help message with the built-in CLI options organized into logical sections",
  },
  {
    name: ["-v", "--version"],
    description:
      "Prints Gradle, Groovy, Ant, Launcher & Daemon JVM, and operating system version information and exit without executing any tasks",
  },
  {
    name: ["-V", "--show-version"],
    description:
      "Prints Gradle, Groovy, Ant, Launcher & Daemon JVM, and operating system version information and continue execution of specified tasks",
  },
  {
    name: ["-S", "--full-stacktrace"],
    description:
      "Print out the full (very verbose) stacktrace for any exceptions",
  },
  {
    name: ["-s", "--stacktrace"],
    description:
      "Print out the stacktrace also for user exceptions (e.g. compile error)",
  },
  ...toggleOptions(
    "scan",
    "Create a Build Scan with fine-grained information about all aspects of your Gradle build",
    "Disables the creation of a Build Scan"
  ),
  {
    name: "--develocity-url",
    description:
      "Default URL of the Develocity server to publish Build Scan to. Triggers auto-application of the Develocity plugin if not already applied",
    args: {
      name: "url",
    },
  },
  {
    name: "--develocity-plugin-version",
    description:
      "Version of the Develocity plugin to auto-apply. Used only if --develocity-url or --scan triggers auto-application of the Develocity plugin",
    args: {
      name: "version",
    },
  },

  // Debugging (Gradle properties)
  {
    name: "-Dorg.gradle.debug",
    description:
      "Debug the Gradle Daemon process. Gradle will wait for you to attach a debugger at localhost:5005 by default",
    args: booleanArg,
  },
  {
    name: "-Dorg.gradle.debug.host",
    description:
      "Specifies the host address to listen on or connect to when debug is enabled. In the server mode on Java 9 and above, passing * will make the server listen on all network interfaces",
    args: {
      name: "host",
    },
  },
  {
    name: "-Dorg.gradle.debug.port",
    description: "Specifies the port number to listen on when debug is enabled",
    args: {
      name: "port",
      default: "5005",
    },
  },
  {
    name: "-Dorg.gradle.debug.server",
    description:
      "If set to true and debugging is enabled, Gradle runs the build with the socket-attach mode of the debugger. Otherwise, the socket-listen mode is used",
    args: { ...booleanArg, default: "true" },
  },
  {
    name: "-Dorg.gradle.debug.suspend",
    description:
      "If set to true and debugging is enabled, the JVM running Gradle will suspend until a debugger is attached",
    args: { ...booleanArg, default: "true" },
  },

  // Performance
  ...toggleOptions(
    "build-cache",
    "Enables the Gradle build cache. Gradle will try to reuse outputs from previous builds. Default is off",
    "Disables the Gradle build cache"
  ),
  ...toggleOptions(
    "configuration-cache",
    "Enables the configuration cache. Gradle will try to reuse the build configuration from previous builds. Default is off",
    "Disables the configuration cache"
  ),
  {
    name: "--configuration-cache-problems",
    description: "Configures how the configuration cache handles problems",
    args: {
      name: "mode",
      default: "fail",
      suggestions: [
        {
          name: "fail",
          description:
            "Report problems and fail the build if there are any problems",
        },
        {
          name: "warn",
          description: "Report problems without failing the build",
        },
      ],
    },
  },
  ...toggleOptions(
    "configure-on-demand",
    "Configures necessary projects only. Gradle will attempt to reduce configuration time for large multi-project builds. Default is off",
    "Disables the use of configuration on demand"
  ),
  ...toggleOptions(
    "isolated-projects",
    "Enables Isolated Projects. Projects are configured in parallel. Implies --configuration-cache. Default is off",
    "Disables Isolated Projects"
  ),
  {
    name: "--max-workers",
    description:
      "Sets the maximum number of workers that Gradle may use. Default is number of processors",
    args: {
      name: "number",
    },
  },
  ...toggleOptions(
    "parallel",
    "Build projects in parallel. Gradle will attempt to determine the optimal number of executor threads to use. Default is off",
    "Disables parallel project execution"
  ),
  {
    name: "--priority",
    description:
      "Specifies the scheduling priority for the Gradle daemon and all processes launched by it",
    args: {
      name: "priority",
      default: "normal",
      suggestions: ["normal", "low"],
    },
  },
  {
    name: "--profile",
    description:
      "Generates a high-level performance report in the build directory under reports/profile. --scan is preferred",
  },
  ...toggleOptions(
    "watch-fs",
    "Enables file system watching. Gradle re-uses information it collects about the file system between builds. Enabled by default on operating systems where Gradle supports this feature",
    "Disables file system watching"
  ),

  // Gradle daemon
  ...toggleOptions(
    "daemon",
    "Use the Gradle Daemon to run the build. Starts the daemon if not running or existing daemon busy. Default is on",
    "Runs the build without the Gradle Daemon. Useful occasionally if you have configured Gradle to always run with the daemon by default"
  ),
  {
    name: "--foreground",
    description: "Starts the Gradle Daemon in a foreground process",
  },
  {
    name: "-Dorg.gradle.daemon.idletimeout",
    description:
      "Gradle Daemon will stop itself after this number of milliseconds of idle time",
    args: {
      name: "milliseconds",
      default: "10800000",
    },
  },

  // Logging
  {
    name: "-Dorg.gradle.logging.level",
    description: "Set logging level via Gradle properties",
    args: {
      name: "level",
      suggestions: ["quiet", "warn", "lifecycle", "info", "debug"],
    },
  },
  {
    name: ["-q", "--quiet"],
    description: "Log errors only",
  },
  {
    name: ["-w", "--warn"],
    description: "Set log level to warn",
  },
  {
    name: ["-i", "--info"],
    description: "Set log level to info",
  },
  {
    name: ["-d", "--debug"],
    description: "Log in debug mode",
  },
  {
    name: "-Dorg.gradle.console",
    description: "Specify console mode via Gradle properties",
    args: consoleModeArg,
  },
  {
    name: "--console",
    description: "Specifies which type of console output to generate",
    args: consoleModeArg,
  },
  {
    name: "--console-unicode",
    description:
      "Specifies which character types are allowed in the console output",
    args: {
      name: "mode",
      default: "auto",
      suggestions: ["auto", "disable", "enable"],
    },
  },
  {
    name: "-Dorg.gradle.console.interactive",
    description:
      "Set to false to disable all interactive prompting, using default values instead",
    args: booleanArg,
  },
  {
    name: "--non-interactive",
    description: "Do not prompt for user input",
  },
  ...toggleOptions(
    "problems-report",
    "Enable the generation of the HTML problems report (enabled by default)",
    "Disable the generation of the HTML problems report"
  ),
  {
    name: "-Dorg.gradle.warning.mode",
    description: "Specify warning mode via Gradle properties",
    args: warningModeArg,
  },
  {
    name: "--warning-mode",
    description: "Specifies how to log warnings",
    args: warningModeArg,
  },

  // Execution
  {
    name: "--include-build",
    description: "Run the build as a composite, including the specified build",
    isRepeatable: true,
    args: {
      name: "directory",
      template: "folders",
    },
  },
  {
    name: "--offline",
    description:
      "Specifies that the build should operate without accessing network resources",
  },
  {
    name: ["-U", "--refresh-dependencies"],
    description: "Refresh the state of dependencies",
  },
  {
    name: "--rerun-tasks",
    description:
      "Ignores previously cached task results, forcing all tasks and their dependencies to execute",
  },
  ...toggleOptions(
    "continue",
    "Continue task execution after a task failure",
    "Stop task execution after a task failure"
  ),
  {
    name: ["-m", "--dry-run"],
    description:
      "Run Gradle with all task actions disabled. Use this to show which task would have executed",
  },
  {
    name: "--task-graph",
    description:
      "Run Gradle with all task actions disabled and print the task dependency graph",
  },
  {
    name: ["-t", "--continuous"],
    description:
      "Enables continuous build. Gradle does not exit and will re-execute tasks when task file inputs change",
  },
  {
    name: "--write-locks",
    description:
      "Indicates that all resolved configurations that are lockable should have their lock state persisted",
  },
  {
    name: "--update-locks",
    description:
      "Indicates that versions for the specified modules have to be updated in the lock file. Implies --write-locks",
    args: {
      name: "group:name",
      isVariadic: true,
    },
  },
  {
    name: ["-a", "--no-rebuild"],
    description:
      "Do not rebuild project dependencies. Useful for debugging and fine-tuning buildSrc, but can lead to wrong results. Use with caution",
    isDangerous: true,
  },
  {
    name: ["-x", "--exclude-task"],
    description: "Specifies a task to exclude from execution",
    isRepeatable: true,
    args: {
      name: "task",
    },
  },
  {
    name: "--property-upgrade-report",
    description: "Runs the build with the experimental property upgrade report",
  },

  // Dependency verification
  {
    name: ["-F", "--dependency-verification"],
    description: "Configures the dependency verification mode",
    args: {
      name: "mode",
      default: "strict",
      suggestions: ["strict", "lenient", "off"],
    },
  },
  {
    name: ["-M", "--write-verification-metadata"],
    description:
      "Generates checksums for dependencies used in the project (comma-separated list) for dependency verification",
    args: {
      name: "checksums",
      suggestions: ["sha256", "sha512", "pgp", "sha1", "md5"],
    },
  },
  {
    name: "--refresh-keys",
    description: "Refresh the public keys used for dependency verification",
  },
  {
    name: "--export-keys",
    description: "Exports the public keys used for dependency verification",
  },

  // Environment
  {
    name: ["-g", "--gradle-user-home"],
    description:
      "Specifies the Gradle user home directory. The default is the .gradle directory in the user’s home directory",
    args: {
      name: "directory",
      template: "folders",
    },
  },
  {
    name: ["-p", "--project-dir"],
    description:
      "Specifies the start directory for Gradle. Defaults to current directory",
    args: {
      name: "directory",
      default: "./",
      template: "folders",
    },
  },
  {
    name: "--project-cache-dir",
    description:
      "Specifies the project-specific cache directory. Default value is .gradle in the root project directory",
    args: {
      name: "directory",
      template: "folders",
    },
  },
  {
    name: ["-D", "--system-prop"],
    description:
      "Sets a system property of the JVM, for example -Dmyprop=myvalue",
    isRepeatable: true,
    args: {
      name: "system property",
    },
  },
  {
    name: ["-I", "--init-script"],
    description: "Specifies an initialization script",
    isRepeatable: true,
    args: {
      name: "file",
      template: "filepaths",
    },
  },
  {
    name: ["-P", "--project-prop"],
    description:
      "Sets a project property of the root project, for example -Pmyprop=myvalue",
    isRepeatable: true,
    args: {
      name: "project property",
    },
  },
  {
    name: "-Dorg.gradle.jvmargs",
    description: "Set JVM arguments",
    args: {
      name: "arguments",
    },
  },
  {
    name: "-Dorg.gradle.java.home",
    description: "Set JDK home dir",
    args: {
      name: "directory",
      template: "folders",
    },
  },
];

// Built-in task options: available as task options for all tasks, must follow the task name
const taskOptions: Fig.Option[] = [
  {
    name: "--rerun",
    description:
      "Causes the task to be rerun even if up-to-date. Similar to --rerun-tasks, but for a specific task",
  },
  ...sharedOptions,
];

const configurationNameOption = (description: string): Fig.Option => ({
  name: "--configuration",
  description,
  args: {
    name: "configuration",
  },
});

const completionSpec: Fig.Spec = {
  name: "gradle",
  description:
    "Gradle is an open-source build automation tool that is designed to be flexible enough to build almost any type of software",
  subcommands: [
    {
      name: "build",
      description: "Compute all outputs",
      options: taskOptions,
    },
    {
      name: "run",
      description: "Run applications",
      options: taskOptions,
    },
    {
      name: "check",
      description: "Run all checks",
      options: taskOptions,
    },
    {
      name: "clean",
      description: "Clear the contents of the build directory",
      options: taskOptions,
    },
    {
      name: "projects",
      description: "List of all sub-projects",
      options: taskOptions,
    },
    {
      name: "tasks",
      description: "List of main tasks of the selected project",
      options: [
        ...toggleOptions(
          "all",
          "Show additional tasks and detail. By default, this report shows only those tasks which have been assigned to a task group",
          "Limit the report to tasks assigned to a task group"
        ),
        {
          name: "--group",
          description:
            "If you need to be more precise, you can display only the tasks from a specific group",
          args: {
            name: "group",
          },
        },
        {
          name: "--groups",
          description:
            "Show tasks for specific groups (can be used multiple times to specify multiple groups)",
          isRepeatable: true,
          args: {
            name: "group",
          },
        },
        ...toggleOptions("types", "Show task class types"),
        ...toggleOptions(
          "provenance",
          "Show where each task was registered (e.g., by a plugin or build script)"
        ),
        ...taskOptions,
      ],
    },
    {
      name: "help",
      description: "Display task usage information",
      options: [
        {
          name: "--task",
          description: "The task to show help for",
          args: {
            name: "task",
          },
        },
        ...taskOptions,
      ],
    },
    {
      name: "dependencies",
      description:
        "Gives you a list of the dependencies of the selected project, broken down by configuration",
      options: [
        configurationNameOption(
          "Restrict the report to a particular configuration such as compileClasspath"
        ),
        ...taskOptions,
      ],
    },
    {
      name: "buildEnvironment",
      description:
        "Visualises the buildscript dependencies of the selected project",
      options: taskOptions,
    },
    {
      name: "dependencyInsight",
      description:
        "Gives you an insight into a particular dependency (or dependencies) that match specified input",
      options: [
        {
          name: "--dependency",
          description: "Shows the details of given dependency",
          isRequired: true,
          args: {
            name: "dependency",
          },
        },
        configurationNameOption(
          "Looks for the dependency in given configuration"
        ),
        ...toggleOptions(
          "single-path",
          "Show at most one path to each dependency"
        ),
        ...toggleOptions(
          "all-variants",
          "Show all variants of each dependency"
        ),
        ...taskOptions,
      ],
    },
    {
      name: "outgoingVariants",
      description: "Displays the outgoing variants of the selected project",
      options: [
        {
          name: "--variant",
          description: "The name of the single variant to report",
          args: {
            name: "variant",
          },
        },
        ...toggleOptions(
          "all",
          "Shows all variants, including legacy and deprecated configurations, and variants without attributes"
        ),
        ...taskOptions,
      ],
    },
    {
      name: "resolvableConfigurations",
      description:
        "Displays the configurations that can be resolved in the selected project",
      options: [
        configurationNameOption("The name of the configuration to report"),
        ...toggleOptions(
          "all",
          "Shows all resolvable configurations, including legacy and deprecated configurations"
        ),
        ...toggleOptions(
          "recursive",
          "Lists all extended configurations of the reported configurations, including any which are extended transitively"
        ),
        ...taskOptions,
      ],
    },
    {
      name: "artifactTransforms",
      description:
        "Displays the Artifact Transforms that can be executed in the selected project",
      options: [
        {
          name: "--type",
          description: "The type of Transform to report",
          args: {
            name: "type",
          },
        },
        ...taskOptions,
      ],
    },
    {
      name: "properties",
      description: "Gives you a list of the properties of the selected project",
      options: [
        {
          name: "--property",
          description: "A specific property to output",
          args: {
            name: "property",
          },
        },
        ...taskOptions,
      ],
    },
    {
      name: "--status",
      description:
        "(Standalone command) List running and recently stopped Gradle daemons. Only displays daemons of the same Gradle version",
    },
    {
      name: "--stop",
      description:
        "(Standalone command) Stop all Gradle Daemons of the same version",
    },
    {
      name: "init",
      description: "Create new Gradle builds, with new or existing projects",
      options: [
        {
          name: "--type",
          description: "Set the type of project to generate",
          args: {
            name: "type",
            default: "basic",
            suggestions: [
              "basic",
              "pom",
              "cpp-application",
              "cpp-library",
              "groovy-application",
              "groovy-gradle-plugin",
              "groovy-library",
              "java-application",
              "java-gradle-plugin",
              "java-library",
              "kotlin-application",
              "kotlin-gradle-plugin",
              "kotlin-library",
              "scala-application",
              "scala-library",
              "swift-application",
              "swift-library",
            ],
          },
        },
        {
          name: "--dsl",
          description:
            "Set the build script DSL to be used in generated scripts",
          args: {
            name: "dsl",
            default: "kotlin",
            suggestions: ["kotlin", "groovy"],
          },
        },
        {
          name: "--test-framework",
          description: "Set the test framework to be used",
          args: {
            name: "test framework",
            suggestions: [
              "junit",
              "testng",
              "spock",
              "kotlintest",
              "scalatest",
              "junit-jupiter",
              "xctest",
              "cpptest",
            ],
          },
        },
        {
          name: "--project-name",
          description: "Set the project name",
          args: {
            name: "name",
          },
        },
        {
          name: "--package",
          description: "Set the package for source files",
          args: {
            name: "package",
          },
        },
        {
          name: "--java-version",
          description: "Provides java version to use in the project",
          args: {
            name: "version",
          },
        },
        {
          name: "--into",
          description: "Set the directory where the project is generated",
          args: {
            name: "directory",
            template: "folders",
          },
        },
        {
          name: "--insecure-protocol",
          description:
            "How to handle insecure URLs used for Maven Repositories",
          args: {
            name: "option",
            suggestions: ["fail", "warn", "allow", "upgrade"],
          },
        },
        ...toggleOptions(
          "use-defaults",
          "Use default values for options not configured explicitly"
        ),
        ...toggleOptions(
          "overwrite",
          "Allow existing files in the build directory to be overwritten"
        ),
        ...toggleOptions(
          "split-project",
          "Split functionality across multiple subprojects"
        ),
        ...toggleOptions(
          "incubating",
          "Allow the generated build to use new features and APIs"
        ),
        ...toggleOptions("comments", "Include clarifying comments in files"),
        ...taskOptions,
      ],
    },
    {
      name: "wrapper",
      description:
        "Generates a script, gradlew, that invokes a declared version of Gradle, downloading it beforehand if necessary",
      options: [
        {
          name: "--gradle-version",
          description:
            "The Gradle version used for downloading and executing the Wrapper",
          args: {
            name: "version",
            suggestions: [
              "latest",
              "release-candidate",
              "release-milestone",
              "release-nightly",
              "nightly",
            ],
          },
        },
        {
          name: "--distribution-type",
          description: "The Gradle distribution type used for the Wrapper",
          args: {
            name: "type",
            default: "bin",
            suggestions: ["bin", "all"],
          },
        },
        {
          name: "--gradle-distribution-url",
          description: "The full URL pointing to Gradle distribution ZIP file",
          args: {
            name: "url",
          },
        },
        {
          name: "--gradle-distribution-sha256-sum",
          description:
            "The SHA256 hash sum used for verifying the downloaded Gradle distribution",
          args: {
            name: "SHA256 hash sum",
          },
        },
        {
          name: "--network-timeout",
          description:
            "Timeout in ms to use when the wrapper is performing network operations",
          args: {
            name: "milliseconds",
          },
        },
        {
          name: "--retries",
          description: "The number of download retries",
          args: {
            name: "number",
          },
        },
        {
          name: "--retry-back-off-ms",
          description:
            "The initial back off in milliseconds between retries (doubles on each failure)",
          args: {
            name: "milliseconds",
          },
        },
        ...toggleOptions(
          "validate-url",
          "Sets task to validate the configured distribution url"
        ),
        ...taskOptions,
      ],
    },
    {
      name: "updateDaemonJvm",
      description: "Generates or updates the Gradle Daemon JVM criteria",
      options: [
        {
          name: "--jvm-version",
          description:
            "The version of the JVM required to run the Gradle Daemon",
          args: {
            name: "version",
          },
        },
        {
          name: "--jvm-vendor",
          description:
            "The vendor of the JVM required to run the Gradle Daemon",
          args: {
            name: "vendor",
            suggestions: [
              "ADOPTIUM",
              "ADOPTOPENJDK",
              "AMAZON",
              "APPLE",
              "AZUL",
              "BELLSOFT",
              "GRAAL_VM",
              "HEWLETT_PACKARD",
              "IBM",
              "JETBRAINS",
              "MICROSOFT",
              "ORACLE",
              "SAP",
              "TENCENT",
            ],
          },
        },
        ...toggleOptions(
          "native-image-capable",
          "Indicates if the native-image capability is required"
        ),
        ...taskOptions,
      ],
    },
    {
      name: "test",
      description: "Run a test task",
      options: [
        {
          name: "--tests",
          description:
            "Sets test class or method name to be included (in addition to the test task filters), '*' is supported",
          isRepeatable: true,
          args: {
            name: "pattern",
          },
        },
        ...toggleOptions(
          "fail-fast",
          "Stops test execution after the first failed test"
        ),
        ...toggleOptions(
          "debug-jvm",
          "Enable debugging for the test process. The process is started suspended and listening on port 5005"
        ),
        ...toggleOptions("test-dry-run", "Simulate test execution"),
        ...taskOptions,
      ],
    },
  ],
  options: [...sharedOptions],

  // There isn't a generator for gradle tasks (takes too long)
  args: {
    name: "task name",
    isVariadic: true,
    isOptional: true,
  },
};

export default completionSpec;
