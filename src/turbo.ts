// Turborepo (turbo) v2.11.13 (npm latest and git tag v2.11.13, 2026-11-19).
// Source: ran the npm turbo@2.11.13 binary (`turbo --help` and `--help` of every command and subcommand)
// and read the usage-rs argument definitions in crates/turborepo-cli/src/cli/args.rs at tag v2.11.13.
// Hidden commands (boundaries, trace, scan, config) and hidden flags are not listed.
import { gitGenerators } from "./git";

const turboIcon =
  "data:image/png;base64,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";

interface TurboJSON {
  $schema?: string;
  globalDependencies?: string[];
  // `tasks` replaced `pipeline` in turbo 2.0
  tasks?: TurboTasks;
  pipeline?: TurboTasks;
}

type TurboTasks = {
  [name: string]: {
    cache?: boolean;
    dependsOn?: string[];
    outputs?: string[];
  };
};

const boolSuggestions = ["true", "false"];

const globalOptions: Fig.Option[] = [
  {
    name: ["-h", "--help"],
    description: "Print help",
    isPersistent: true,
  },
  {
    name: "--skip-infer",
    description:
      "Skip any attempts to infer which version of Turbo the project is configured to use",
    isPersistent: true,
  },
  {
    name: "--no-update-notifier",
    description: "Disable the turbo update notification",
    isPersistent: true,
  },
  {
    name: "--api",
    description: "Override the endpoint for API calls",
    isPersistent: true,
    args: { name: "url" },
  },
  {
    name: "--color",
    description: "Force color usage in the terminal",
    isPersistent: true,
  },
  {
    name: "--no-color",
    description: "Suppress color usage in the terminal",
    isPersistent: true,
  },
  {
    name: "--cwd",
    description: "The directory in which to run turbo",
    isPersistent: true,
    args: { name: "dir", template: "folders" },
  },
  {
    name: "--heap",
    description: "Specify a file to save a pprof heap profile",
    isPersistent: true,
    args: { name: "file", template: "filepaths" },
  },
  {
    name: "--ui",
    description: "Specify whether to use the streaming UI or TUI",
    isPersistent: true,
    args: {
      name: "mode",
      suggestions: [
        { name: "tui", description: "Terminal UI" },
        { name: "stream", description: "Streaming UI" },
      ],
    },
  },
  {
    name: "--login",
    description: "Override the login endpoint",
    isPersistent: true,
    args: { name: "url" },
  },
  {
    name: "--preflight",
    description:
      "Precede HTTP requests with an OPTIONS request for authorization",
    isPersistent: true,
  },
  {
    name: "--remote-cache-timeout",
    description: "Set a timeout for all HTTP requests",
    isPersistent: true,
    args: { name: "timeout" },
  },
  {
    name: "--team",
    description: "Set the team slug for API calls",
    isPersistent: true,
    args: { name: "slug" },
  },
  {
    name: "--token",
    description: "Set the auth token for API calls",
    isPersistent: true,
    args: { name: "token" },
  },
  {
    name: "--trace",
    description: "Specify a file to save a pprof trace",
    isPersistent: true,
    args: { name: "file", template: "filepaths" },
  },
  {
    name: "--verbosity",
    description:
      "Verbosity level. Useful when debugging Turborepo or creating logs for issue reports",
    isPersistent: true,
    args: { name: "count" },
  },
  {
    name: "--dangerously-disable-package-manager-check",
    description: "Allow for missing `packageManager` in `package.json`",
    isPersistent: true,
  },
  {
    name: "--root-turbo-json",
    description:
      "Use the `turbo.json` located at the provided path instead of one at the root of the repository",
    isPersistent: true,
    args: { name: "path", template: "filepaths" },
  },
  {
    name: "--experimental-otel-enabled",
    description: "Enable OpenTelemetry metrics export",
    isPersistent: true,
    requiresSeparator: true,
    args: { name: "bool", suggestions: boolSuggestions, isOptional: true },
  },
  {
    name: "--experimental-otel-protocol",
    description: "OTLP transport protocol",
    isPersistent: true,
    args: { name: "protocol", suggestions: ["grpc", "http-protobuf"] },
  },
  {
    name: "--experimental-otel-endpoint",
    description: "OTLP collector endpoint URL",
    isPersistent: true,
    args: { name: "url" },
  },
  {
    name: "--experimental-otel-timeout-ms",
    description: "OTLP export timeout in milliseconds (default: 10000)",
    isPersistent: true,
    args: { name: "milliseconds" },
  },
  {
    name: "--experimental-otel-interval-ms",
    description: "OTLP export interval in milliseconds (default: 15000)",
    isPersistent: true,
    args: { name: "milliseconds" },
  },
  {
    name: "--experimental-otel-header",
    description: "Add header to OTLP requests",
    isPersistent: true,
    isRepeatable: true,
    args: { name: "key=value" },
  },
  {
    name: "--experimental-otel-resource",
    description: "Add resource attribute to metrics",
    isPersistent: true,
    isRepeatable: true,
    args: { name: "key=value" },
  },
  {
    name: "--experimental-otel-metrics-run-summary",
    description: "Emit run-level summary metrics (default: true)",
    isPersistent: true,
    requiresSeparator: true,
    args: { name: "bool", suggestions: boolSuggestions, isOptional: true },
  },
  {
    name: "--experimental-otel-metrics-task-details",
    description: "Emit per-task detail metrics (default: false)",
    isPersistent: true,
    requiresSeparator: true,
    args: { name: "bool", suggestions: boolSuggestions, isOptional: true },
  },
  {
    name: "--experimental-otel-use-remote-cache-token",
    description: "Use remote cache token for OTLP authentication",
    isPersistent: true,
    requiresSeparator: true,
    args: { name: "bool", suggestions: boolSuggestions, isOptional: true },
  },
];

const filterOption: Fig.Option = {
  name: ["-F", "--filter"],
  description:
    "Use the given selector to specify package(s) to act as entry points (syntax mirrors pnpm's)",
  isRepeatable: true,
  args: { name: "selector" },
};

const affectedOption = (description: string): Fig.Option => ({
  name: "--affected",
  description,
});

const outputFormatOption = (experimental = false): Fig.Option => ({
  name: "--output",
  description: `${experimental ? "EXPERIMENTAL: " : ""}Output format`,
  args: { name: "format", suggestions: ["pretty", "json"] },
});

const packagesArg: Fig.Arg = {
  name: "packages",
  description:
    "Get insight into a specific package, such as its dependencies and tasks",
  isOptional: true,
  isVariadic: true,
};

const tasksArg: Fig.Arg = {
  name: "tasks",
  isVariadic: true,
  generators: {
    script: [
      "bash",
      "-c",
      "until [[ ( -f turbo.json || $PWD = '/' ) ]]; do cd ..; done; cat turbo.json",
    ],
    postProcess: (out) => {
      let turbo: TurboJSON;
      try {
        turbo = JSON.parse(out);
      } catch (err: unknown) {
        console.error(err);
        return [];
      }
      return Object.entries(turbo.tasks ?? turbo.pipeline ?? {}).map(
        ([key, value]) => {
          const descriptionParts = [];
          if (value.dependsOn) {
            descriptionParts.push(
              `depends on ${value.dependsOn
                .map((item) => `'${item}'`)
                .join(", ")}`
            );
          }
          if (value.outputs) {
            descriptionParts.push(
              `outputs ${value.outputs.map((item) => `'${item}'`).join(", ")}`
            );
          }
          return {
            name: key,
            description:
              descriptionParts.length > 0
                ? "Task: " + descriptionParts.join(", ")
                : "Task",
            icon: turboIcon,
          };
        }
      );
    },
  },
};

// Options shared by `turbo run` and `turbo watch`
const executionOptions: Fig.Option[] = [
  {
    name: "--cache-dir",
    description: "Override the filesystem cache directory",
    args: { name: "dir", template: "folders" },
  },
  {
    name: "--concurrency",
    description:
      "Limit the concurrency of task execution (use `1` for serial execution)",
    args: { name: "limit" },
  },
  {
    name: "--continue",
    description:
      "Specify how task execution should proceed when an error occurs",
    requiresSeparator: true,
    args: {
      name: "mode",
      isOptional: true,
      default: "never",
      suggestions: [
        { name: "never", description: "Cancel all tasks" },
        {
          name: "dependencies-successful",
          description: "Continue running tasks whose dependencies succeeded",
        },
        {
          name: "always",
          description:
            "Continue running all tasks, even those whose dependencies failed",
        },
      ],
    },
  },
  {
    name: "--single-package",
    description: "Run turbo in single-package mode",
  },
  {
    name: "--framework-inference",
    description:
      "Specify whether or not to do framework inference for tasks (default: true)",
    args: { name: "bool", suggestions: boolSuggestions, isOptional: true },
  },
  {
    name: "--global-deps",
    description:
      "Specify glob of global filesystem dependencies to be hashed (useful for .env and files in the root directory)",
    isRepeatable: true,
    insertValue: "--global-deps='{cursor}'",
    args: { name: "glob" },
  },
  {
    name: "--env-mode",
    description: "Environment variable mode",
    args: {
      name: "mode",
      isOptional: true,
      suggestions: [
        {
          name: "loose",
          description: "Pass the entire existing environment",
        },
        {
          name: "strict",
          description: "Use an allowlist specified in turbo.json",
        },
      ],
    },
  },
  filterOption,
  affectedOption(
    "Filter to only packages that are affected by changes between the current branch and `main`"
  ),
  {
    name: "--output-logs",
    description: "Set type of process output logging",
    args: {
      name: "level",
      suggestions: [
        { name: "full", description: "Show all output (default)" },
        {
          name: "hash-only",
          description: "Only turbo-computed task hashes",
        },
        {
          name: "new-only",
          description: "Only new output with hashes for cached tasks",
        },
        { name: "errors-only", description: "Only output of failed tasks" },
        { name: "none", description: "Hide process output" },
      ],
    },
  },
  {
    name: "--log-order",
    description: "Set type of task output order",
    args: {
      name: "order",
      suggestions: [
        {
          name: "auto",
          description: "Let turbo decide based on its own heuristics",
        },
        {
          name: "stream",
          description: "Show output as soon as it is available",
        },
        {
          name: "grouped",
          description: "Show output when a command has finished execution",
        },
      ],
    },
  },
  {
    name: "--json",
    description:
      "Output machine-readable NDJSON to stdout instead of human-readable text (disables the TUI and forces stream mode)",
  },
  {
    name: "--log-file",
    description:
      "Write structured JSON logs to a file (defaults to `.turbo/logs/<epoch_millis>.json`)",
    args: { name: "file", template: "filepaths", isOptional: true },
  },
  {
    name: "--only",
    description:
      "Only execute the tasks specified, do not execute parent tasks",
  },
  {
    name: "--log-prefix",
    description: "Set how task logs are prefixed",
    args: {
      name: "prefix",
      default: "auto",
      suggestions: [
        { name: "auto", description: "Let turbo decide" },
        { name: "task", description: "Prefix logs with the task id" },
        { name: "none", description: "Remove prefixes from task logs" },
      ],
    },
  },
];

const profileArg: Fig.Arg = {
  name: "file",
  template: "filepaths",
  isOptional: true,
};

const completionSpec: Fig.Spec = {
  name: "turbo",
  description:
    "Turborepo is a high-performance build system for JavaScript and TypeScript codebases",
  options: [
    {
      name: "--version",
      description: "Print the version",
    },
    ...globalOptions,
  ],
  subcommands: [
    {
      name: "bin",
      description: "Get the path to the turbo binary",
    },
    {
      name: "completion",
      description: "Generate the autocompletion script for the specified shell",
      args: {
        name: "shell",
        suggestions: ["bash", "elvish", "fish", "powershell", "zsh"],
      },
    },
    {
      name: "daemon",
      description: "Run the Turborepo background daemon",
      options: [
        {
          name: "--idle-time",
          description: "Set the idle timeout for turbod (default: 4h0m0s)",
          args: { name: "duration" },
        },
        {
          name: "--turbo-json-path",
          description:
            "Path to a custom turbo.json file to watch from --root-turbo-json",
          args: { name: "file", template: "filepaths" },
        },
      ],
      subcommands: [
        {
          name: "clean",
          description:
            "Stop the turbo daemon if it is already running, and remove any stale daemon state",
          options: [
            {
              name: "--clean-logs",
              description: "Clean the daemon logs (default: true)",
              requiresSeparator: true,
              args: {
                name: "bool",
                suggestions: boolSuggestions,
                isOptional: true,
              },
            },
          ],
        },
        {
          name: "logs",
          description: "Show the daemon logs",
        },
        {
          name: "restart",
          description: "Restart the turbo daemon",
        },
        {
          name: "start",
          description: "Ensure that the turbo daemon is running",
        },
        {
          name: "status",
          description: "Report the status of the turbo daemon",
          options: [
            {
              name: "--json",
              description: "Report status in JSON format",
            },
          ],
        },
        {
          name: "stop",
          description: "Stop the turbo daemon",
        },
      ],
    },
    {
      name: "devtools",
      description: "Visualize your monorepo's package graph in the browser",
      options: [
        {
          name: "--port",
          description: "Port for the WebSocket server (default: 9876)",
          args: { name: "port" },
        },
        {
          name: "--no-open",
          description: "Do not automatically open the browser",
        },
      ],
    },
    {
      name: "docs",
      description: "Search the Turborepo documentation",
      options: [
        {
          name: "--docs-version",
          description: "Override the docs version (minimum: 2.7.5)",
          args: { name: "version" },
        },
      ],
      args: {
        name: "query",
        description: "The search query",
      },
    },
    {
      name: "exec",
      description:
        "EXPERIMENTAL: Run a command with the repository's managed tools (not yet implemented)",
      options: [
        {
          name: "--print-env",
          description:
            "Print the managed environment instead of running a command",
          requiresSeparator: true,
          args: {
            name: "format",
            suggestions: [
              {
                name: "bin",
                description: "Path to the repository's managed bin directory",
              },
              { name: "sh", description: "POSIX shell `export` statements" },
              { name: "fish", description: "Fish `set -gx` statements" },
              { name: "pwsh", description: "PowerShell `$env:` assignments" },
              {
                name: "json",
                description: "JSON object of the variables `turbo exec` sets",
              },
            ],
          },
        },
      ],
      args: {
        name: "command",
        description: "The program to run and its arguments (after `--`)",
        isCommand: true,
        isOptional: true,
      },
    },
    {
      name: ["generate", "g", "gen"],
      description: "Generate a new app / package",
      options: [
        {
          name: ["-c", "--config"],
          description: "Generator configuration file",
          args: { name: "file", template: "filepaths" },
        },
        {
          name: ["-r", "--root"],
          description:
            "The root of your repository (default: directory with root turbo.json)",
          args: { name: "dir", template: "folders" },
        },
        {
          name: ["-a", "--args"],
          description: "Answers passed directly to generator",
          args: { name: "answers", isVariadic: true },
        },
      ],
      args: {
        name: "generator name",
        description: "The name of the generator to run",
        isOptional: true,
      },
      subcommands: [
        {
          name: ["run", "r"],
          description: "Run a custom generator",
          options: [
            {
              name: ["-c", "--config"],
              description: "Generator configuration file",
              args: { name: "file", template: "filepaths" },
            },
            {
              name: ["-r", "--root"],
              description:
                "The root of your repository (default: directory with root turbo.json)",
              args: { name: "dir", template: "folders" },
            },
            {
              name: ["-a", "--args"],
              description: "Answers passed directly to generator",
              args: { name: "answers", isVariadic: true },
            },
          ],
          args: {
            name: "generator name",
            description: "The name of the generator to run",
            isOptional: true,
          },
        },
        {
          name: ["workspace", "w"],
          description: "Add a new package or app to your project",
          options: [
            {
              name: ["-n", "--name"],
              description: "Name for the new workspace",
              args: { name: "name" },
            },
            {
              name: ["-b", "--empty"],
              description: "Generate an empty workspace",
              exclusiveOn: ["-c", "--copy"],
            },
            {
              name: ["-c", "--copy"],
              description:
                "Generate a workspace using an existing workspace as a template (a local workspace name or a GitHub URL with any branch and/or subdirectory)",
              exclusiveOn: ["-b", "--empty"],
              args: { name: "source", isOptional: true },
            },
            {
              name: ["-d", "--destination"],
              description: "Where the new workspace should be created",
              args: { name: "dir", template: "folders" },
            },
            {
              name: ["-t", "--type"],
              description: "The type of workspace to create",
              args: { name: "type" },
            },
            {
              name: ["-r", "--root"],
              description:
                "The root of your repository (default: directory with root turbo.json)",
              args: { name: "dir", template: "folders" },
            },
            {
              name: ["-p", "--example-path"],
              description:
                "Path to the example when the GitHub URL contains a branch name with a slash (e.g. bug/fix-1)",
              args: { name: "path" },
            },
            {
              name: "--show-all-dependencies",
              description:
                "Do not filter available dependencies by the workspace type",
            },
          ],
        },
      ],
    },
    {
      name: "get-mfe-port",
      description: "Get the port assigned to the current microfrontend",
    },
    {
      name: "hook",
      description:
        "EXPERIMENTAL: Print a shell hook that activates managed tools at the prompt",
      args: {
        name: "shell",
        suggestions: ["bash", "zsh", "fish", "powershell", "pwsh"],
      },
    },
    {
      name: "info",
      description: "Print debugging information",
    },
    {
      name: "link",
      description:
        "Link your local directory to a Vercel organization and enable remote caching",
      options: [
        {
          name: "--no-gitignore",
          description: "Do not create or modify .gitignore",
        },
        {
          name: "--scope",
          description: "The scope, i.e. Vercel team, to which you are linking",
          args: { name: "scope" },
        },
        {
          name: ["-y", "--yes"],
          description: "Answer yes to all prompts",
        },
      ],
    },
    {
      name: "login",
      description: "Login to your Vercel account",
      options: [
        {
          name: "--sso-team",
          description:
            "Attempt to authenticate to the specified team using SSO",
          exclusiveOn: ["--manual"],
          args: { name: "team" },
        },
        {
          name: "--manual",
          description:
            "Manually enter token instead of requesting one from the login service",
          exclusiveOn: ["--sso-team"],
        },
      ],
    },
    {
      name: "logout",
      description: "Logout of your Vercel account",
      options: [
        {
          name: "--invalidate",
          description:
            "Invalidate the token on the server (pass `--invalidate=false` to skip the remote revoke)",
          requiresSeparator: true,
          args: {
            name: "bool",
            suggestions: boolSuggestions,
            isOptional: true,
          },
        },
      ],
    },
    {
      name: "ls",
      description: "List packages in your monorepo",
      options: [
        affectedOption(
          "Show only packages that are affected by changes between the current branch and `main`"
        ),
        filterOption,
        outputFormatOption(true),
      ],
      args: packagesArg,
    },
    {
      name: "prune",
      description: "Prepare a subset of your monorepo",
      options: [
        {
          name: "--scope",
          description:
            "Specify package to act as entry point for pruned monorepo (use the positional arguments instead)",
          deprecated: true,
          isRepeatable: true,
          args: {
            name: "package",
          },
        },
        {
          name: "--docker",
          description:
            "Output pruned workspace into 'full' and 'json' directories optimized for Docker layer caching",
        },
        {
          name: "--production",
          description:
            "Exclude in-workspace devDependencies when selecting packages to include",
        },
        {
          name: "--out-dir",
          description:
            "Directory to write the pruned monorepo to (default: out)",
          args: { name: "dir", template: "folders" },
        },
        {
          name: "--use-gitignore",
          description:
            "Respect `.gitignore` when copying files to the output directory",
          requiresSeparator: true,
          args: {
            name: "bool",
            suggestions: boolSuggestions,
            isOptional: true,
          },
        },
      ],
      args: {
        name: "scope",
        description: "Workspaces that should be included in the subset",
        isVariadic: true,
      },
    },
    {
      name: "query",
      description:
        "Query your monorepo using GraphQL (starts a GraphQL server with GraphiQL if no query is provided)",
      options: [
        {
          name: ["-V", "--variables"],
          description: "Pass variables to the query via a JSON file",
          args: { name: "file", template: "filepaths" },
        },
        {
          name: "--schema",
          description: "Print the GraphQL schema",
        },
      ],
      args: {
        name: "query",
        description: "The query to run, either a file path or a query string",
        isOptional: true,
        template: "filepaths",
      },
      subcommands: [
        {
          name: "affected",
          description:
            "Check which packages or tasks are affected by changes between two git refs",
          options: [
            {
              name: "--packages",
              description:
                "Return affected packages instead of tasks, optionally filtered by name",
              isRepeatable: true,
              args: { name: "package", isOptional: true, isVariadic: true },
            },
            {
              name: "--tasks",
              description: "Filter to specific task names (e.g. build, test)",
              isRepeatable: true,
              args: { name: "task", isOptional: true, isVariadic: true },
            },
            {
              name: "--base",
              description: "Base git ref for comparison",
              args: {
                name: "ref",
                generators: gitGenerators.remoteLocalBranches,
              },
            },
            {
              name: "--head",
              description: "Head git ref for comparison",
              args: {
                name: "ref",
                generators: gitGenerators.remoteLocalBranches,
              },
            },
            {
              name: "--exit-code",
              description:
                "Exit with code 1 when affected packages or tasks are found, 0 when none are found, or 2 on errors",
            },
          ],
        },
        {
          name: "ls",
          description:
            "List packages in your monorepo (shorthand for a packages query)",
          options: [
            affectedOption(
              "Show only packages that are affected by changes between the current branch and `main`"
            ),
            filterOption,
            outputFormatOption(),
          ],
          args: packagesArg,
        },
      ],
    },
    {
      name: "run",
      description: "Run tasks across projects in your monorepo",
      icon: turboIcon,
      args: tasksArg,
      options: [
        {
          name: "--cache",
          description:
            "Set the cache behavior for this run as comma-separated key:value pairs for the local and remote cache",
          exclusiveOn: [
            "--force",
            "--remote-only",
            "--remote-cache-read-only",
            "--no-cache",
          ],
          args: {
            name: "cache config",
            suggestions: [
              {
                name: "local:rw,remote:rw",
                description: "Read and write both the local and remote cache",
              },
              {
                name: "local:w,remote:w",
                description: "Ignore the existing cache (like --force)",
              },
              {
                name: "remote:rw",
                description: "Only use the remote cache (like --remote-only)",
              },
              {
                name: "local:rw,remote:r",
                description:
                  "Treat the remote cache as read only (like --remote-cache-read-only)",
              },
              {
                name: "local:r,remote:r",
                description:
                  "Do not save task results to the cache (like --no-cache)",
              },
            ],
          },
        },
        {
          name: "--force",
          description:
            "Ignore the existing cache (equivalent to `--cache=local:w,remote:w`)",
          exclusiveOn: ["--cache"],
        },
        {
          name: "--remote-only",
          description:
            "Ignore the local filesystem cache and only use the remote cache. Deprecated: use `--cache=remote:rw`",
          deprecated: true,
          exclusiveOn: ["--cache"],
        },
        {
          name: "--remote-cache-read-only",
          description:
            "Treat the remote cache as read only. Deprecated: use `--cache=local:rw,remote:r`",
          deprecated: true,
          exclusiveOn: ["--cache"],
        },
        {
          name: "--no-cache",
          description:
            "Avoid saving task results to the cache. Deprecated: use `--cache=local:r,remote:r`",
          deprecated: true,
          exclusiveOn: ["--cache"],
        },
        {
          name: "--cache-workers",
          description:
            "Set the number of concurrent cache operations (default: 10)",
          args: { name: "workers" },
        },
        {
          name: ["--dry", "--dry-run"],
          description:
            "List the packages in scope and the tasks that would be run",
          args: {
            name: "format",
            suggestions: ["text", "json"],
            isOptional: true,
          },
        },
        {
          name: "--graph",
          description:
            "Generate a graph of the task execution, written to a file (.svg, .html, .mermaid, .dot) or to stdout as a dot graph when no file is given",
          args: { name: "file", template: "filepaths", isOptional: true },
        },
        {
          name: "--daemon",
          description: "The daemon is no longer used for `turbo run`",
          deprecated: true,
          exclusiveOn: ["--no-daemon"],
        },
        {
          name: "--no-daemon",
          description: "The daemon is no longer used for `turbo run`",
          deprecated: true,
          exclusiveOn: ["--daemon"],
        },
        {
          name: "--profile",
          description:
            "File to write turbo's performance profile into (load it in chrome://tracing)",
          exclusiveOn: ["--anon-profile"],
          args: profileArg,
        },
        {
          name: "--anon-profile",
          description:
            "File to write turbo's performance profile into, with all identifying data omitted",
          exclusiveOn: ["--profile"],
          args: profileArg,
        },
        {
          name: "--summarize",
          description: "Generate a summary of the turbo run",
        },
        {
          name: "--parallel",
          description:
            "Execute all tasks in parallel. Deprecated: use `persistent` and `with` in the task configuration",
          deprecated: true,
        },
        ...executionOptions,
      ],
    },
    {
      name: "setup",
      description:
        "EXPERIMENTAL: Provision repository tools and dependencies (not yet implemented)",
      options: [
        {
          name: "--plan",
          description:
            "Report the proposed setup without writing or installing",
          exclusiveOn: ["--check"],
        },
        {
          name: "--check",
          description:
            "Re-hash installed tools without writing, resolving, or downloading",
          exclusiveOn: ["--plan", "--force", "--update-lock", "--no-lock"],
        },
        {
          name: "--force",
          description:
            "Reinstall selected versions without refreshing resolution",
        },
        {
          name: "--frozen",
          description:
            "Require an existing, current turbo.lock (the default in CI)",
          exclusiveOn: ["--no-frozen", "--no-lock", "--update-lock"],
        },
        {
          name: "--no-frozen",
          description: "Allow lock creation or updates, including in CI",
        },
        {
          name: "--offline",
          description:
            "Use only tools already in the tool store, never make HTTP requests",
        },
        {
          name: "--tools-only",
          description: "Skip dependency installation",
        },
        {
          name: "--no-lock",
          description:
            "Provision without writing turbo.lock (overrides CI-inferred frozen mode)",
          exclusiveOn: ["--update-lock"],
        },
        {
          name: "--update-lock",
          description:
            "Refresh floating requests and provision repository-policy-selected tools",
        },
        {
          name: "--verbose",
          description:
            "Stream every dependency installer's output live instead of showing a spinner",
        },
      ],
    },
    {
      name: "telemetry",
      description: "Enable or disable anonymous telemetry",
      subcommands: [
        {
          name: "disable",
          description: "Disable anonymous telemetry",
        },
        {
          name: "enable",
          description: "Enable anonymous telemetry",
        },
        {
          name: "status",
          description: "Report the status of telemetry",
        },
      ],
    },
    {
      name: "unlink",
      description:
        "Unlink the current directory from your Vercel organization and disable remote caching",
    },
    {
      name: "watch",
      description: "Re-run tasks whenever files change",
      args: tasksArg,
      options: [
        ...executionOptions,
        {
          name: "--experimental-write-cache",
          description: "EXPERIMENTAL: Write to cache in watch mode",
        },
      ],
    },
  ],
};
export default completionSpec;
