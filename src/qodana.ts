// Qodana CLI v2026.2.4 (latest non-nightly git tag of JetBrains/qodana-cli, 2026-11-19). Source: cobra command definitions in internal/cmd/*.go and internal/platform/cmd/scan_options.go, linter list in internal/platform/product/product.go (read from a shallow clone at tag v2026.2.4, binary not run).
// The `completion` command is cobra's built-in one (internal/cmd/root.go special-cases it), its shell list is not taken from qodana source.
// The CLI runs `scan` when no command is given. Flags that are only available outside the Qodana container (--linter, --within-docker, --image, --env, --volume, --user, --skip-pull) are included.
// The Qodana CLI repo: https://github.com/JetBrains/qodana-cli
const icon = "fig://template?badge=🔧";

const linters = [
  "qodana-jvm",
  "qodana-jvm-community",
  "qodana-android",
  "qodana-jvm-android",
  "qodana-php",
  "qodana-python",
  "qodana-python-community",
  "qodana-js",
  "qodana-dotnet",
  "qodana-cdnet",
  "qodana-ruby",
  "qodana-cpp",
  "qodana-go",
  "qodana-rust",
  "qodana-clang",
  "qodana-poly",
];

const configOption: Fig.Option = {
  name: "--config",
  description:
    "Set a custom configuration file instead of 'qodana.yaml' (relative paths in it are based on the project directory)",
  args: {
    name: "file",
    template: "filepaths",
  },
};

const linterOption = (description: string): Fig.Option => ({
  name: ["-l", "--linter"],
  description,
  args: {
    name: "linter",
    suggestions: linters,
  },
});

const projectDirOption = (description: string): Fig.Option => ({
  name: ["-i", "--project-dir"],
  description,
  args: {
    name: "dir",
    template: "folders",
  },
});

const resultsDirOption: Fig.Option = {
  name: ["-o", "--results-dir"],
  description:
    "Override directory to save Qodana inspection results to (default <userCacheDir>/JetBrains/<linter>/results)",
  args: {
    name: "dir",
    template: "folders",
  },
};

const reportDirOption: Fig.Option = {
  name: ["-r", "--report-dir"],
  description:
    "Override directory to save Qodana HTML report to (default <userCacheDir>/JetBrains/<linter>/results/report)",
  args: {
    name: "dir",
    template: "folders",
  },
};

const analysisIdOption: Fig.Option = {
  name: ["-a", "--analysis-id"],
  description: "Unique report identifier (GUID) to be used by Qodana Cloud",
  args: {
    name: "guid",
  },
};

const completionSpec: Fig.Spec = {
  name: "qodana",
  description: "Run Qodana as fast as possible, with minimum effort required",
  options: [
    {
      name: ["-h", "--help"],
      description: "Show help page for command",
      isPersistent: true,
      priority: 1,
    },
    {
      name: ["-v", "--version"],
      description: "Version for Qodana",
    },
    {
      name: "--log-level",
      description: "Set log-level for output (default error)",
      isPersistent: true,
      args: {
        name: "level",
        suggestions: [
          "panic",
          "fatal",
          "error",
          "warn",
          "info",
          "debug",
          "trace",
        ],
      },
    },
    {
      name: "--disable-update-checks",
      description: "Disable check for updates",
      isPersistent: true,
    },
  ],
  subcommands: [
    {
      name: "init",
      description: "Configure a project for Qodana",
      icon,
      priority: 100,
      options: [
        projectDirOption(
          'Root directory of the project to configure (default ".")'
        ),
        {
          name: ["-f", "--force"],
          description:
            "Force initialization (overwrite existing valid qodana.yaml)",
        },
        configOption,
      ],
    },
    {
      name: "scan",
      description: "Scan a project with Qodana",
      icon,
      priority: 99,
      options: [
        linterOption(
          "Linter to use for the analysis (default is determined from the project files)"
        ),
        {
          name: "--within-docker",
          description:
            "Run the analysis in a Docker container (true) or in native mode (false), the default depends on the environment and the project",
          args: {
            name: "bool",
            suggestions: ["true", "false"],
          },
        },
        {
          name: "--image",
          description:
            "Docker image to use for the analysis, implies --within-docker=true and sets --linter to the one preinstalled in the image",
          args: {
            name: "image",
          },
        },
        {
          name: "--ide",
          description:
            "Run Qodana without a container using the given product code (add -EAP to get EAP versions), use --linter with --within-docker=false instead",
          deprecated: true,
          exclusiveOn: ["-l", "--linter"],
          args: {
            name: "code",
            suggestions: [
              "QDJVM",
              "QDJVMC",
              "QDPHP",
              "QDPY",
              "QDPYC",
              "QDJS",
              "QDNET",
              "QDCPP",
              "QDGO",
            ],
          },
        },
        projectDirOption(
          'Root directory of the inspected project (default ".")'
        ),
        {
          name: "--repository-root",
          description:
            "Path to the root of the Git repository, must be the same as --project-dir or contain it",
          args: {
            name: "dir",
            template: "folders",
          },
        },
        resultsDirOption,
        {
          name: "--cache-dir",
          description:
            "Override cache directory (default <userCacheDir>/JetBrains/<linter>/cache)",
          args: {
            name: "dir",
            template: "folders",
          },
        },
        reportDirOption,
        {
          name: "--print-problems",
          description: "Print all found problems by Qodana in the CLI output",
        },
        {
          name: "--code-climate",
          description:
            "Generate a Code Climate report in SARIF format (compatible with GitLab Code Quality), saved to the results directory (default true on GitLab CI)",
        },
        {
          name: "--bitbucket-insights",
          description:
            "Send the results to BitBucket Code Insights (default true in BitBucket Pipelines)",
        },
        {
          name: "--clear-cache",
          description:
            "Clear the local Qodana cache before running the analysis",
        },
        {
          name: ["-w", "--show-report"],
          description: "Serve HTML report on port",
          priority: 100,
        },
        {
          name: "--port",
          description:
            "Port to serve the report on, use --show-report-port instead",
          deprecated: true,
          args: {
            name: "port",
          },
        },
        {
          name: "--show-report-port",
          description: "Port to serve the report on (default 8080)",
          args: {
            name: "port",
          },
        },
        configOption,
        analysisIdOption,
        {
          name: ["-b", "--baseline"],
          description:
            "Provide the path to an existing SARIF report to be used in the baseline state calculation",
          args: {
            name: "file",
            template: "filepaths",
          },
        },
        {
          name: "--baseline-include-absent",
          description:
            "Include in the output report the results from the baseline run that are absent in the current run",
        },
        {
          name: "--full-history",
          description:
            "Go through the full commit history and run the analysis on each commit, starting from --commit if given (can take a long time)",
        },
        {
          name: "--commit",
          description:
            "Base changes commit to reset to, resets git and starts a diff run that analyzes only files changed since the given commit",
          args: {
            name: "commit",
          },
        },
        {
          name: "--fail-threshold",
          description:
            "Set the number of problems that will serve as a quality gate. If this number is reached, the inspection run is terminated with a non-zero exit code",
          args: {
            name: "number",
          },
        },
        {
          name: "--disable-sanity",
          description:
            "Skip running the inspections configured by the sanity profile",
        },
        {
          name: ["-d", "--only-directory"],
          description:
            "Directory inside the project-dir directory that must be inspected. If not specified, the whole project is inspected",
          args: {
            name: "dir",
            template: "folders",
          },
        },
        {
          name: "--source-directory",
          description: "Deprecated, use --only-directory instead",
          deprecated: true,
          exclusiveOn: ["-d", "--only-directory"],
          args: {
            name: "dir",
            template: "folders",
          },
        },
        {
          name: ["-n", "--profile-name"],
          description: "Profile name defined in the project",
          exclusiveOn: ["-p", "--profile-path"],
          args: {
            name: "name",
          },
        },
        {
          name: ["-p", "--profile-path"],
          description: "Path to the profile file",
          exclusiveOn: ["-n", "--profile-name"],
          args: {
            name: "file",
            template: "filepaths",
          },
        },
        {
          name: "--run-promo",
          description:
            "Set to 'true' to have the application run the inspections configured by the promo profile; set to 'false' otherwise (default: 'true' only if Qodana is executed with the default profile)",
          args: {
            name: "bool",
            suggestions: ["true", "false"],
          },
        },
        {
          name: "--script",
          description: 'Override the run scenario (default "default")',
          args: {
            name: "script",
          },
        },
        {
          name: "--coverage-dir",
          description: "Directory with coverage data to process",
          args: {
            name: "dir",
            template: "folders",
          },
        },
        {
          name: "--apply-fixes",
          description: "Apply all available quick-fixes, including cleanup",
          exclusiveOn: ["--cleanup"],
        },
        {
          name: "--cleanup",
          description: "Run project cleanup",
          exclusiveOn: ["--apply-fixes"],
        },
        {
          name: "--fixes-strategy",
          description:
            "Set the strategy for applying quick-fixes, use --apply-fixes or --cleanup instead",
          deprecated: true,
          args: {
            name: "strategy",
            suggestions: ["apply", "cleanup", "none"],
          },
        },
        {
          name: "--property",
          description:
            "Set a JVM property to be used while running Qodana using the --property property.name=value1,value2,...,valueN notation",
          insertValue: "--property {cursor}=",
          isRepeatable: true,
          args: {
            name: "property",
          },
        },
        {
          name: ["-s", "--save-report"],
          description: "Generate HTML report (default true)",
          priority: 99,
        },
        {
          name: "--timeout",
          description:
            "Qodana analysis time limit in milliseconds, the process exits with --timeout-exit-code when reached (negative means no timeout)",
          args: {
            name: "ms",
          },
        },
        {
          name: "--timeout-exit-code",
          description: "Exit code used when --timeout is reached (default 1)",
          args: {
            name: "code",
          },
        },
        {
          name: "--diff-start",
          description:
            "Commit to start a diff run from, only files changed between --diff-start and --diff-end are analysed",
          args: {
            name: "commit",
          },
        },
        {
          name: "--diff-end",
          description:
            "Commit to end a diff run on, only files changed between --diff-start and --diff-end are analysed",
          args: {
            name: "commit",
          },
        },
        {
          name: "--force-local-changes-script",
          description:
            "Override the default run scenario for diff runs to always use the local-changes script",
          hidden: true,
        },
        {
          name: "--reverse",
          description:
            "Override the default run scenario for diff runs to always use the reverse-scoped script",
        },
        {
          name: "--jvm-debug-port",
          description: "Enable JVM remote debug under the given port",
          hidden: true,
          args: {
            name: "port",
          },
        },
        {
          name: "--no-statistics",
          description:
            "[qodana-clang/qodana-dotnet] Disable sending anonymous statistics",
        },
        {
          name: "--compile-commands",
          description:
            "[qodana-clang] Path to compile_commands.json, relative to the project directory (default ./build/compile_commands.json)",
          args: {
            name: "file",
            template: "filepaths",
          },
        },
        {
          name: "--clang-args",
          description:
            "[qodana-clang] Extra arguments for clang, split with POSIX shell quoting rules and appended after '--' unless you include '--' yourself",
          args: {
            name: "args",
          },
        },
        {
          name: "--solution",
          description: "[qodana-cdnet] Relative path to the solution file",
          args: {
            name: "file",
            template: "filepaths",
          },
        },
        {
          name: "--project",
          description: "[qodana-cdnet] Relative path to the project file",
          args: {
            name: "file",
            template: "filepaths",
          },
        },
        {
          name: "--configuration",
          description: "[qodana-cdnet] Build configuration",
          args: {
            name: "configuration",
          },
        },
        {
          name: "--platform",
          description: "[qodana-cdnet] Build platform",
          args: {
            name: "platform",
          },
        },
        {
          name: "--no-build",
          description:
            "[qodana-cdnet] Do not build the project before analysis",
        },
        {
          name: ["-e", "--env"],
          description:
            "Container runs only: define additional environment variables for the Qodana container (you can use the flag multiple times). CLI is not reading full host environment variables and does not pass it to the Qodana container for security reasons",
          isRepeatable: true,
          args: {
            name: "variable",
          },
        },
        {
          name: ["-v", "--volume"],
          description:
            "Container runs only: define additional volumes for the Qodana container (you can use the flag multiple times)",
          isRepeatable: true,
          args: {
            name: "volume",
          },
        },
        {
          name: ["-u", "--user"],
          description:
            "Container runs only: override the user inside the Qodana container, as uid[:gid] (e.g. '0:0' for root, '$(id -u):$(id -g)' for the current user). Default: the current system user, or root in privileged images",
          args: {
            name: "user",
          },
        },
        {
          name: "--skip-pull",
          description:
            "Container runs only: skip pulling the latest Qodana container",
        },
        {
          name: "--global-config-dir",
          description:
            "Path to the global configurations directory with a qodana-global-configurations.yaml file in the root, requires --global-config-id",
          hidden: true,
          dependsOn: ["--global-config-id"],
          args: {
            name: "dir",
            template: "folders",
          },
        },
        {
          name: "--global-config-id",
          description:
            "Id of the global configuration defined in qodana-global-configurations.yaml, requires --global-config-dir",
          hidden: true,
          dependsOn: ["--global-config-dir"],
          args: {
            name: "id",
          },
        },
      ],
    },
    {
      name: "show",
      description: "Show a Qodana report",
      icon,
      priority: 98,
      options: [
        linterOption("Override linter to use"),
        projectDirOption(
          'Root directory of the inspected project (default ".")'
        ),
        resultsDirOption,
        reportDirOption,
        {
          name: ["-p", "--port"],
          description: "Specify port to serve report at (default 8080)",
          priority: 100,
          args: {
            name: "port",
          },
        },
        {
          name: ["-d", "--dir-only"],
          description: "Open report directory only, don't serve it",
        },
        configOption,
      ],
    },
    {
      name: "send",
      description: "Send a Qodana report to Cloud",
      icon,
      options: [
        linterOption("Override linter to use"),
        projectDirOption(
          'Root directory of the inspected project (default ".")'
        ),
        resultsDirOption,
        reportDirOption,
        configOption,
        analysisIdOption,
      ],
    },
    {
      name: "pull",
      description: "Pull latest version of linter",
      icon,
      options: [
        linterOption("Override linter to use"),
        {
          name: "--image",
          description: "Image to pull",
          args: {
            name: "image",
          },
        },
        projectDirOption(
          'Root directory of the inspected project (default ".")'
        ),
        configOption,
      ],
    },
    {
      name: "view",
      description: "View SARIF files in CLI",
      icon,
      priority: 97,
      options: [
        {
          name: ["-f", "--sarif-file"],
          description: 'Path to the SARIF file (default "qodana.sarif.json")',
          args: {
            name: "file",
            template: "filepaths",
          },
        },
      ],
    },
    {
      name: "contributors",
      description: "Calculate active project contributors",
      icon,
      options: [
        {
          name: ["-i", "--project-dir"],
          description:
            "Project directory, can be specified multiple times to check multiple projects (default: the current directory)",
          isRepeatable: true,
          args: {
            name: "dir",
            template: "folders",
          },
        },
        {
          name: ["-d", "--days"],
          description:
            "Number of days since when to calculate the number of active contributors (default 90)",
          args: {
            name: "days",
          },
        },
        {
          name: ["-o", "--output"],
          description: "Output format (default tabular)",
          args: {
            name: "format",
            suggestions: ["tabular", "json"],
          },
        },
      ],
    },
    {
      name: "cloc",
      description: "Calculate lines of code for projects with boyter/scc",
      icon,
      options: [
        {
          name: ["-i", "--project-dir"],
          description:
            "Project directory, can be specified multiple times to check multiple projects (default: the current directory)",
          isRepeatable: true,
          args: {
            name: "dir",
            template: "folders",
          },
        },
        {
          name: ["-o", "--output"],
          description: "Output format (default tabular)",
          args: {
            name: "format",
            suggestions: [
              "tabular",
              "wide",
              "json",
              "csv",
              "csv-stream",
              "cloc-yaml",
              "html",
              "html-table",
              "sql",
              "sql-insert",
              "openmetrics",
            ],
          },
        },
      ],
    },
    {
      name: "completion",
      description: "Generate the autocompletion script for the given shell",
      subcommands: [
        {
          name: "bash",
          description: "Generate the autocompletion script for bash",
        },
        {
          name: "fish",
          description: "Generate the autocompletion script for fish",
        },
        {
          name: "powershell",
          description: "Generate the autocompletion script for powershell",
        },
        {
          name: "zsh",
          description: "Generate the autocompletion script for zsh",
        },
      ],
    },
  ],
};
export default completionSpec;
