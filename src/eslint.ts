// ESLint v10.15.0 (npm latest dist-tag, 2026-11-19).
// Source: `eslint --help` of eslint@10.15.0 installed from npm into a scratch dir, plus lib/options.js, lib/cli.js,
// lib/shared/flags.js and lib/cli-engine/formatters of that package.
// Removed the eslintrc-era options that no longer exist in v10 (--no-eslintrc, --env, --rulesdir, --ignore-path,
// --resolve-plugins-relative-to) and the built-in formatters dropped in v9; added the options new since v8/v9.
const completionSpec: Fig.Spec = {
  name: "eslint",
  description: "Pluggable JavaScript linter",
  options: [
    {
      name: "--no-config-lookup",
      description: "Disable look up for eslint.config.*",
    },
    {
      name: ["-c", "--config"],
      description: "Use this configuration instead of eslint.config.* look up",
      args: {
        template: "filepaths",
      },
    },
    {
      name: "--inspect-config",
      description: "Open the config inspector with the current configuration",
    },
    {
      name: "--ext",
      description: "Specify additional file extensions to lint",
      isRepeatable: true,
      args: {
        name: "Extension",
      },
    },
    {
      name: "--global",
      description: "Define global variables",
      isRepeatable: true,
      args: {
        name: "Variables",
      },
    },
    {
      name: "--parser",
      description: "Specify the parser to be used",
      args: {
        name: "Parser",
      },
    },
    {
      name: "--parser-options",
      description: "Specify parser options",
      args: {
        name: "Options",
      },
    },
    {
      name: "--plugin",
      description: "Specify plugins",
      isRepeatable: true,
      args: {
        name: "Plugin",
        generators: {
          script: [
            "bash",
            "-c",
            "{ ls node_modules ; ls $(npm root -g) ; ls $(yarn global dir)/node_modules/ ; } | cat",
          ],
          postProcess: (out) =>
            out
              .split("\n")
              .filter((dir) => dir.startsWith("eslint-plugin"))
              .map((dir) => ({ name: dir.split(" ")[0].slice(14) })),
        },
      },
    },
    {
      name: "--rule",
      description: "Specify rules",
      isRepeatable: true,
      args: {
        name: "Rule",
      },
    },
    {
      name: "--fix",
      description: "Automatically fix problems",
    },
    {
      name: "--fix-dry-run",
      description:
        "Automatically fix problems without saving the changes to the file system",
    },
    {
      name: "--fix-type",
      description:
        "Specify the types of fixes to apply (requires --fix or --fix-dry-run)",
      isRepeatable: true,
      args: {
        suggestions: ["directive", "problem", "suggestion", "layout"],
      },
    },
    {
      name: "--no-ignore",
      description: "Disable use of ignore files and patterns",
    },
    {
      name: "--ignore-pattern",
      description: "Patterns of files to ignore",
      isRepeatable: true,
      args: {
        name: "Pattern",
      },
    },
    {
      name: "--stdin",
      description: "Lint code provided on <STDIN>",
    },
    {
      name: "--stdin-filename",
      description: "Specify filename to process STDIN as",
      args: {
        template: "filepaths",
      },
    },
    {
      name: "--quiet",
      description: "Report errors only",
    },
    {
      name: "--max-warnings",
      description: "Number of warnings to trigger nonzero exit code",
      args: {
        default: "-1",
      },
    },
    {
      name: ["-o", "--output-file"],
      description: "Specify file to write report to",
      args: {
        template: "filepaths",
      },
    },
    {
      name: ["-f", "--format"],
      description: "Use a specific output format",
      args: {
        default: "stylish",
        suggestions: ["stylish", "json", "json-with-metadata", "html"],
      },
    },
    {
      name: "--color",
      description: "Force enabling of color",
      exclusiveOn: ["--no-color"],
    },
    {
      name: "--no-color",
      description: "Force disabling of color",
      exclusiveOn: ["--color"],
    },
    {
      name: "--no-inline-config",
      description: "Prevent comments from changing config or rules",
    },
    {
      name: "--report-unused-disable-directives",
      description:
        "Adds reported errors for unused eslint-disable and eslint-enable directives",
    },
    {
      name: "--report-unused-disable-directives-severity",
      description:
        "Chooses severity level for reporting unused eslint-disable and eslint-enable directives",
      args: {
        suggestions: ["off", "warn", "error", "0", "1", "2"],
      },
    },
    {
      name: "--report-unused-inline-configs",
      description:
        "Adds reported errors for unused eslint inline config comments",
      args: {
        suggestions: ["off", "warn", "error", "0", "1", "2"],
      },
    },
    {
      name: "--cache",
      description: "Only check changed files",
    },
    {
      name: "--cache-file",
      description: "Path to the cache file (deprecated: use --cache-location)",
      deprecated: true,
      args: {
        template: "filepaths",
        default: ".eslintcache",
      },
    },
    {
      name: "--cache-location",
      description: "Path to the cache file or directory",
      args: {
        template: ["filepaths", "folders"],
      },
    },
    {
      name: "--cache-strategy",
      description: "Strategy to use for detecting changed files in the cache",
      args: {
        suggestions: ["metadata", "content"],
        default: "metadata",
      },
    },
    {
      name: "--suppress-all",
      description: "Suppress all violations",
    },
    {
      name: "--suppress-rule",
      description: "Suppress specific rules",
      isRepeatable: true,
      args: {
        name: "Rule",
      },
    },
    {
      name: "--suppressions-location",
      description: "Specify the location of the suppressions file",
      args: {
        template: "filepaths",
      },
    },
    {
      name: "--prune-suppressions",
      description: "Prune unused suppressions",
    },
    {
      name: "--pass-on-unpruned-suppressions",
      description: "Ignore unused suppressions",
    },
    {
      name: "--init",
      description: "Run config initialization wizard",
    },
    {
      name: "--env-info",
      description: "Output execution environment information",
    },
    {
      name: "--no-error-on-unmatched-pattern",
      description: "Prevent errors when pattern is unmatched",
    },
    {
      name: "--exit-on-fatal-error",
      description: "Exit with exit code 2 in case of fatal error",
    },
    {
      name: "--no-warn-ignored",
      description:
        "Suppress warnings when the file list includes ignored files",
    },
    {
      name: "--pass-on-no-patterns",
      description: "Exit with exit code 0 in case no file patterns are passed",
    },
    {
      name: "--debug",
      description: "Output debugging information",
    },
    {
      name: ["-h", "--help"],
      description: "Show help",
    },
    {
      name: ["-v", "--version"],
      description: "Output the version number",
    },
    {
      name: "--print-config",
      description: "Print the configuration for the given file",
      args: {
        template: "filepaths",
      },
    },
    {
      name: "--stats",
      description: "Add statistics to the lint report",
    },
    {
      name: "--flag",
      description: "Enable a feature flag",
      isRepeatable: true,
      args: {
        name: "Flag",
        suggestions: [
          {
            name: "unstable_native_nodejs_ts_config",
            description: "Use native Node.js to load TypeScript configuration",
          },
        ],
      },
    },
    {
      name: "--mcp",
      description: "Start the ESLint MCP server",
    },
    {
      name: "--concurrency",
      description:
        "Number of linting threads, auto to choose automatically, off for no multithreading",
      args: {
        name: "Threads",
        default: "off",
        suggestions: ["auto", "off"],
      },
    },
  ],
  args: {
    name: "file|dir|glob",
    description: "File(s) to lint",
    template: ["filepaths", "folders"],
    isVariadic: true,
  },
};

export default completionSpec;
