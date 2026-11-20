// Remix v3.3.0 (npm `remix` latest, 2026-11-19). Source: @remix-run/cli 1.0.3 sources shipped in the
// `remix` package (commands, flag tables, help text, shell completion logic) read from the npm tarball, not executed.
// This is the Remix 3 `remix` binary; the Remix 2.x / @remix-run/dev commands (build, dev, setup, ...) no longer exist.
const icon = "https://remix.run/favicon-dark.1.png";

const connectionEnvOption: Fig.Option = {
  name: "--connection-env",
  description: "Read the database connection from an environment variable",
  args: { name: "name" },
};

const journalTableOption: Fig.Option = {
  name: "--journal-table",
  description: "Use a migration journal table",
  args: { name: "name" },
};

const migrationsOption: Fig.Option = {
  name: "--migrations",
  description: "Load migrations from a directory",
  args: { name: "path", template: "folders" },
};

const seedOption: Fig.Option = {
  name: "--seed",
  description: "Run a SQL seed file",
  args: { name: "path", template: "filepaths" },
};

const toMigrationOption = (description: string): Fig.Option => ({
  name: "--to",
  description,
  args: { name: "migration" },
});

const forceOption = (description: string): Fig.Option => ({
  name: "--force",
  description,
});

const globOption = (name: string, description: string): Fig.Option => ({
  name,
  description,
  isRepeatable: true,
  args: { name: "glob", template: "filepaths" },
});

const pathOption = (
  name: string | string[],
  description: string,
  template: "filepaths" | "folders"
): Fig.Option => ({
  name,
  description,
  args: { name: "path", template },
});

const percentOption = (name: string, description: string): Fig.Option => ({
  name,
  description,
  args: { name: "percent" },
});

const booleanPair = (
  name: string,
  description: string,
  negatedDescription: string
): Fig.Option[] => [
  { name: `--${name}`, description },
  { name: `--no-${name}`, description: negatedDescription },
];

const completionSpec: Fig.Spec = {
  name: "remix",
  description: "The Remix web framework CLI",
  options: [
    {
      name: "--config",
      description: "Use a custom Remix config file",
      isPersistent: true,
      args: { name: "path", template: "filepaths" },
    },
    {
      name: "--no-color",
      description: "Disable ANSI color output",
      isPersistent: true,
    },
    {
      name: ["-h", "--help"],
      description: "Show help",
      isPersistent: true,
    },
    {
      name: ["-v", "--version"],
      description: "Show version",
    },
  ],
  subcommands: [
    {
      name: "assets",
      description: "List or inspect browser-reachable assets",
      icon,
      subcommands: [
        {
          name: "inspect",
          description: "Inspect one asset URL or file",
          args: { name: "url-or-file", template: "filepaths" },
        },
      ],
    },
    {
      name: "completion",
      description: "Print shell completion scripts for Remix",
      icon,
      args: {
        name: "shell",
        description: "Shell to print the completion script for",
        suggestions: ["bash", "zsh"],
      },
    },
    {
      name: "db",
      description: "Manage the current app database",
      icon,
      subcommands: [
        {
          name: "migrate",
          description: "Apply pending migrations",
          options: [
            connectionEnvOption,
            journalTableOption,
            migrationsOption,
            toMigrationOption("Stop after applying the specified migration"),
          ],
        },
        {
          name: "rollback",
          description: "Revert applied migrations (the most recent by default)",
          options: [
            connectionEnvOption,
            {
              name: "--dry-run",
              description: "Report what would be reverted without running it",
            },
            journalTableOption,
            migrationsOption,
            {
              name: "--step",
              description: "Revert this many migrations, newest first",
              exclusiveOn: ["--to"],
              args: { name: "count" },
            },
            {
              ...toMigrationOption(
                "Revert back through the specified migration"
              ),
              exclusiveOn: ["--step"],
            },
          ],
        },
        {
          name: "status",
          description: "Report the status of known migrations",
          options: [connectionEnvOption, journalTableOption, migrationsOption],
        },
        {
          name: "seed",
          description: "Run the SQL seed file",
          options: [connectionEnvOption, seedOption],
        },
        {
          name: "reset",
          description: "Wipe, migrate, and optionally seed the database",
          options: [
            connectionEnvOption,
            forceOption("Confirm the destructive command (required)"),
            journalTableOption,
            migrationsOption,
            seedOption,
          ],
        },
        {
          name: "wipe",
          description: "Destructively recreate the configured database",
          options: [
            connectionEnvOption,
            forceOption("Confirm the destructive command (required)"),
          ],
        },
      ],
    },
    {
      name: "doctor",
      description: "Check project health for the current project",
      icon,
      options: [
        {
          name: "--json",
          description: "Print doctor findings as JSON",
        },
        {
          name: "--strict",
          description:
            "Exit with status 1 when warning-level findings are present",
        },
        {
          name: "--no-strict",
          description:
            "Do not exit with status 1 when warning-level findings are present",
        },
        {
          name: "--fix",
          description: "Apply available low-risk fixes",
        },
      ],
    },
    {
      name: "help",
      description: "Show help for Remix commands",
      icon,
      args: {
        name: "command",
        isOptional: true,
        suggestions: [
          "assets",
          "completion",
          "db",
          "doctor",
          "new",
          "routes",
          "test",
          "version",
        ],
      },
    },
    {
      name: "new",
      description: "Create a new Remix project",
      icon,
      args: {
        name: "target-dir",
        description: "Directory to create the project in",
        template: "folders",
      },
      options: [
        {
          name: "--app-name",
          description: "Display name of the app",
          args: { name: "name" },
        },
        {
          name: "--force",
          description: "Continue even if the target directory is not empty",
        },
      ],
    },
    {
      name: "routes",
      description: "Show the route tree for the current project",
      icon,
      options: [
        {
          name: "--json",
          description: "Print the normalized route tree as JSON",
          exclusiveOn: ["--table", "--verbose"],
        },
        {
          name: "--table",
          description: "Print routes as a flat table",
          exclusiveOn: ["--json"],
        },
        {
          name: "--no-headers",
          description: "Omit the table header row when using --table",
          dependsOn: ["--table"],
        },
        {
          name: "--verbose",
          description: "Show full owner paths in tree or table output",
          exclusiveOn: ["--json"],
        },
      ],
    },
    {
      name: "test",
      description: "Run tests for the current project",
      icon,
      args: {
        name: "glob",
        description: "Test files, globs or partial file names to select",
        isOptional: true,
        isVariadic: true,
        template: "filepaths",
      },
      options: [
        ...booleanPair(
          "browser.echo",
          "Echo browser console output",
          "Do not echo browser console output"
        ),
        ...booleanPair(
          "browser.open",
          "Open the browser after tests finish",
          "Do not open the browser after tests finish"
        ),
        globOption("--glob.browser", "Glob pattern for browser test files"),
        globOption("--glob.e2e", "Glob pattern for E2E test files"),
        globOption("--glob.exclude", "Glob pattern to exclude from discovery"),
        globOption(
          "--glob.test",
          "Glob pattern for all test files (default: **/*.test{,.e2e,.browser}.{ts,tsx})"
        ),
        {
          name: ["-c", "--concurrency"],
          description:
            "Maximum concurrent test workers (default: os.availableParallelism())",
          args: { name: "count" },
        },
        ...booleanPair(
          "coverage",
          "Collect test coverage",
          "Do not collect test coverage"
        ),
        pathOption(
          "--coverage.dir",
          "Coverage report output directory (default: .coverage)",
          "folders"
        ),
        globOption("--coverage.include", "Coverage inclusion glob"),
        globOption("--coverage.exclude", "Coverage exclusion glob"),
        percentOption(
          "--coverage.branches",
          "Minimum branch coverage percentage"
        ),
        percentOption(
          "--coverage.functions",
          "Minimum function coverage percentage"
        ),
        percentOption("--coverage.lines", "Minimum line coverage percentage"),
        percentOption(
          "--coverage.statements",
          "Minimum statement coverage percentage"
        ),
        pathOption(["-s", "--setup"], "Path to a setup module", "filepaths"),
        pathOption(
          "--playwrightConfig",
          "Path to a Playwright config file",
          "filepaths"
        ),
        {
          name: ["-p", "--project"],
          description: "Playwright project name",
          isRepeatable: true,
          args: { name: "name" },
        },
        {
          name: "--pool",
          description: "Worker pool (default: forks)",
          args: { name: "pool", suggestions: ["forks", "threads"] },
        },
        {
          name: ["-q", "--quiet"],
          description: "Do not print skipped tests",
        },
        {
          name: "--no-quiet",
          description: "Print skipped tests",
        },
        {
          name: "--only",
          description: "Test name pattern",
          isRepeatable: true,
          args: { name: "pattern" },
        },
        {
          name: ["-r", "--reporter"],
          description: "Reporter (default: spec)",
          args: {
            name: "name",
            suggestions: ["spec", "files", "tap", "dot"],
          },
        },
        {
          name: ["-t", "--type"],
          description: "Test type (default: server, browser, e2e)",
          isRepeatable: true,
          args: { name: "type", suggestions: ["server", "browser", "e2e"] },
        },
        {
          name: ["-w", "--watch"],
          description: "Re-run tests when files change",
        },
        {
          name: "--no-watch",
          description: "Do not re-run tests when files change",
        },
      ],
    },
    {
      name: "version",
      description: "Show the current Remix version",
      icon,
    },
  ],
};

export default completionSpec;
