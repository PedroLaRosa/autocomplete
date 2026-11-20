// Encore v1.58.9 (latest git tag of encoredev/encore, tagged 2026-11-12, checked 2026-11-20). Source: cobra command
// definitions read statically from cli/cmd/encore/** at that tag (the binary was not built or run). Internal hidden
// commands (sqlc plugin, kubernetes exec-credentials, completion) are left out; `bits` is not linked into the binary.

const languages = ["go", "ts"];

const llmRulesTools = ["cursor", "claudecode", "vscode", "agentsmd", "zed"];

const boolArg: Fig.Arg = {
  name: "bool",
  isOptional: true,
  suggestions: ["true", "false"],
};

const namespaceOption: Fig.Option = {
  name: ["--namespace", "-n"],
  description: "Namespace to use (defaults to active namespace)",
  args: { name: "namespace" },
};

const orgOption: Fig.Option = {
  name: "--org",
  description: "ID or slug of the org to create the app in",
  args: { name: "org" },
};

const langOption: Fig.Option = {
  name: ["--lang", "-l"],
  description: "Programming language to use for the app",
  args: { name: "lang", suggestions: languages },
};

const llmRulesOption: Fig.Option = {
  name: ["--llm-rules", "-r"],
  description: "Initialize the app with llm rules for a specific tool",
  args: { name: "tool", suggestions: llmRulesTools },
};

const formatOption = (formats: string[], defaultValue: string): Fig.Option => ({
  name: ["--format", "-f"],
  description: "Output format",
  args: { name: "format", suggestions: formats, default: defaultValue },
});

// `encore db` options shared by shell, proxy and conn-uri
const dbConnectOptions: Fig.Option[] = [
  namespaceOption,
  {
    name: ["--env", "-e"],
    description: 'Environment name to connect to (such as "prod")',
    args: { name: "env", default: "local" },
  },
  {
    name: ["--test", "-t"],
    description:
      "Connect to the integration test database (implies --env=local)",
    exclusiveOn: ["--shadow"],
  },
  {
    name: "--shadow",
    description: "Connect to the shadow database (implies --env=local)",
    exclusiveOn: ["--test", "-t"],
  },
  {
    name: "--write",
    description: "Connect with write privileges",
    exclusiveOn: ["--admin", "--superuser"],
  },
  {
    name: "--admin",
    description: "Connect with admin privileges",
    exclusiveOn: ["--write", "--superuser"],
  },
  {
    name: "--superuser",
    description: "Connect as a superuser",
    exclusiveOn: ["--write", "--admin"],
  },
];

const secretEnvTypes = [
  "development",
  "dev",
  "production",
  "prod",
  "preview",
  "pr",
  "ephemeral",
  "local",
];

const configValues: Record<string, string[]> = {
  "run.browser": ["auto", "never", "always"],
  llm_rules: llmRulesTools,
};

const subcommands: Fig.Subcommand[] = [
  {
    name: "app",
    description: "Commands to create and link Encore apps",
    subcommands: [
      {
        name: "clone",
        description:
          "Clone an existing Encore app from Encore Cloud to your computer",
        args: [
          { name: "app-id" },
          { name: "directory", isOptional: true, template: "folders" },
        ],
      },
      {
        name: "create",
        description: "Create a new Encore app",
        args: { name: "name", isOptional: true },
        options: [
          {
            name: "--platform",
            description: "Whether to create the app with the Encore Platform",
            requiresSeparator: true,
            args: boolArg,
          },
          {
            name: "--example",
            description: "URL to example code to use",
            args: { name: "example" },
          },
          orgOption,
          langOption,
          llmRulesOption,
        ],
      },
      {
        name: "init",
        description:
          "Register an existing local repo as a new app on Encore Cloud",
        args: { name: "name", isOptional: true },
        options: [orgOption, langOption],
      },
      {
        name: "link",
        description:
          "Link an existing local repo to an existing Encore Cloud app",
        args: { name: "app-id", isOptional: true },
        options: [
          {
            name: ["--force", "-f"],
            description: "Force link even if the app is already linked",
          },
        ],
      },
    ],
  },
  {
    name: "auth",
    description: "Commands to authenticate with Encore",
    subcommands: [
      {
        name: "login",
        description: "Log in to Encore",
        options: [
          {
            name: ["--auth-key", "-k"],
            description: "Auth Key to use for login",
            args: { name: "auth-key" },
          },
        ],
      },
      {
        name: "logout",
        description: "Logs out the currently logged in user",
      },
      { name: "signup", description: "Create a new Encore account" },
      { name: "whoami", description: "Show the current logged in user" },
    ],
  },
  {
    name: ["build", "eject"],
    description: "Build provides ways to build your application for deployment",
    subcommands: [
      {
        name: "docker",
        description:
          "Builds a portable docker image of your Encore application",
        args: { name: "image-tag" },
        options: [
          {
            name: ["--push", "-p"],
            description: "Push image to remote repository",
          },
          {
            name: "--base",
            description: "Base image to build from",
            args: { name: "base", default: "scratch" },
          },
          { name: "--cgo", description: "Enable cgo" },
          {
            name: "--skip-config",
            description: "Do not read or generate a infra configuration file",
          },
          {
            name: "--config",
            description: "Infra configuration file path",
            args: { name: "config", template: "filepaths" },
          },
          {
            name: "--services",
            description: "Services to include in the image (comma-separated)",
            isRepeatable: true,
            args: { name: "services" },
          },
          {
            name: "--gateways",
            description: "Gateways to include in the image (comma-separated)",
            isRepeatable: true,
            args: { name: "gateways" },
          },
          {
            name: "--os",
            description: "The target operating system",
            args: { name: "os", suggestions: ["linux"], default: "linux" },
          },
          {
            name: "--arch",
            description: "The target architecture",
            args: {
              name: "arch",
              suggestions: ["amd64", "arm64"],
              default: "amd64",
            },
          },
        ],
      },
    ],
  },
  {
    name: "check",
    description: "Runs a list of HTTP requests against a fresh app instance",
    args: {
      name: "spec",
      description:
        "One command per line, e.g. 'curl /ping' (read from stdin if omitted and piped)",
      isOptional: true,
    },
    options: [
      {
        name: "--timeout",
        description: "How long to wait for /__encore/healthz before giving up",
        args: { name: "duration", default: "60s" },
      },
    ],
  },
  {
    name: "config",
    description: "Get or set a configuration value",
    args: [
      {
        name: "key",
        isOptional: true,
        suggestions: Object.keys(configValues),
      },
      {
        name: "value",
        isOptional: true,
        generators: {
          custom: async (tokens) =>
            (configValues[tokens[tokens.length - 2]] ?? []).map((name) => ({
              name,
            })),
        },
      },
    ],
    options: [
      { name: "--all", description: "View all settings" },
      {
        name: "--app",
        description: "Set the value for the current app",
        exclusiveOn: ["--global"],
      },
      {
        name: "--global",
        description: "Set the value at the global level",
        exclusiveOn: ["--app"],
      },
    ],
  },
  {
    name: "daemon",
    description: "Starts the encore daemon",
    subcommands: [
      { name: "env", description: "Prints Encore environment information" },
    ],
    options: [
      {
        name: ["--foreground", "-f"],
        description: "Start the daemon in the foreground",
      },
    ],
  },
  {
    name: "db",
    description: "Database management commands",
    subcommands: [
      {
        name: "conn-uri",
        description: "Outputs the database connection string",
        args: { name: "db-name", isOptional: true },
        options: dbConnectOptions,
      },
      {
        name: "proxy",
        description: "Sets up a proxy tunnel to the database",
        options: [
          ...dbConnectOptions,
          {
            name: ["--port", "-p"],
            description: "Port to listen on (defaults to a random port)",
            args: { name: "port", default: "0" },
          },
        ],
      },
      {
        name: "reset",
        description:
          "Resets the databases with the given names. Use --all to reset all databases",
        args: { name: "database-names", isVariadic: true, isOptional: true },
        options: [
          namespaceOption,
          {
            name: "--all",
            description: "Reset all services in the application",
          },
          {
            name: ["--test", "-t"],
            description: "Reset databases in the test cluster instead",
            exclusiveOn: ["--shadow"],
          },
          {
            name: "--shadow",
            description: "Reset databases in the shadow cluster instead",
            exclusiveOn: ["--test", "-t"],
          },
        ],
      },
      {
        name: "shell",
        description: "Connects to the database via psql shell",
        args: {
          name: "database-name",
          isOptional: true,
          template: "folders",
        },
        options: dbConnectOptions,
      },
    ],
  },
  {
    name: "exec",
    description: "Runs executable scripts against the local Encore app",
    args: [
      { name: "path/to/script", isOptional: true, template: "filepaths" },
      { name: "args", isVariadic: true, isOptional: true },
    ],
    options: [namespaceOption],
  },
  {
    name: "gen",
    description: "Code generation commands",
    subcommands: [
      {
        name: "client",
        description: "Generates an API client for your app",
        args: { name: "app-id", isOptional: true },
        options: [
          {
            name: ["--lang", "-l"],
            description: "The language to generate code for",
            args: {
              name: "lang",
              suggestions: [
                {
                  name: "typescript",
                  description:
                    "A TypeScript client using the in-browser Fetch API",
                },
                {
                  name: "javascript",
                  description:
                    "A JavaScript client using the in-browser Fetch API",
                },
                { name: "go", description: "A Go client using net/http" },
                { name: "openapi", description: "An OpenAPI specification" },
              ],
            },
          },
          {
            name: ["--output", "-o"],
            description: "The filename to write the generated client code to",
            args: {
              name: "output",
              template: "filepaths",
              suggestCurrentToken: true,
            },
          },
          {
            name: ["--env", "-e"],
            description:
              "The environment to fetch the API for (defaults to the local environment)",
            args: { name: "env", default: "local" },
          },
          {
            name: ["--services", "-s"],
            description: "The names of the services to include in the output",
            isRepeatable: true,
            args: { name: "services" },
          },
          {
            name: ["--excluded-services", "-x"],
            description: "The names of the services to exclude in the output",
            isRepeatable: true,
            args: { name: "services" },
          },
          {
            name: ["--tags", "-t"],
            description: "The names of endpoint tags to include in the output",
            isRepeatable: true,
            args: { name: "tags" },
          },
          {
            name: "--excluded-tags",
            description: "The names of endpoint tags to exclude in the output",
            isRepeatable: true,
            args: { name: "tags" },
          },
          {
            name: "--openapi-exclude-private-endpoints",
            description: "Exclude private endpoints from the OpenAPI spec",
          },
          {
            name: "--openapi-emit-tags",
            description:
              "Emit endpoint tags on each operation in the OpenAPI spec",
          },
          {
            name: "--ts:shared-types",
            description:
              "Import types from ~backend instead of re-generating them",
          },
          {
            name: "--target",
            description: "An optional target for the client",
            args: {
              name: "target",
              suggestions: [
                {
                  name: "leap",
                  description: "A TypeScript client for apps created with Leap",
                },
              ],
            },
          },
        ],
      },
      { name: "wrappers", description: "Generates user-facing wrapper code" },
    ],
  },
  {
    name: ["kubernetes", "k8s"],
    description: "Kubernetes management commands",
    subcommands: [
      {
        name: "configure",
        description:
          "Updates your kubectl config to point to the Kubernetes cluster(s) for the specified environment",
        options: [
          {
            name: ["--env", "-e"],
            description: "Environment name",
            isRequired: true,
            args: { name: "env" },
          },
        ],
      },
    ],
  },
  {
    name: "llm-rules",
    description: "Commands to create LLM rules for apps",
    subcommands: [
      {
        name: "init",
        description: "Initialize llm rules for this project",
        options: [llmRulesOption],
      },
    ],
  },
  {
    name: "logs",
    description: "Streams logs from your application",
    options: [
      {
        name: ["--env", "-e"],
        description:
          "Environment name to stream logs from (defaults to the primary environment)",
        args: { name: "env" },
      },
      {
        name: "--json",
        description: "Whether to print logs in raw JSON format",
      },
      {
        name: ["--quiet", "-q"],
        description: "Do not print the initial message while waiting for logs",
      },
    ],
  },
  {
    name: "mcp",
    description: "MCP (Message Context Provider) commands",
    subcommands: [
      {
        name: "run",
        description: "Runs an stdio-based MCP session",
        options: [
          {
            name: "--app",
            description: "The app ID to use for the MCP session",
            args: { name: "app" },
          },
        ],
      },
      {
        name: "start",
        description: "Starts an SSE based MCP session and prints the SSE URL",
        options: [
          {
            name: "--app",
            description: "The app ID to use for the MCP session",
            args: { name: "app" },
          },
        ],
      },
    ],
  },
  {
    name: ["namespace", "ns"],
    description: "Manage infrastructure namespaces",
    subcommands: [
      {
        name: "create",
        description: "Create a new infrastructure namespace",
        args: { name: "name" },
      },
      {
        name: ["delete", "del"],
        description: "Delete an infrastructure namespace",
        args: { name: "name" },
      },
      {
        name: ["list", "ls"],
        description: "List infrastructure namespaces",
        options: [
          {
            name: ["--output", "-o"],
            description: "Output format",
            args: { name: "output", suggestions: ["columns", "json"] },
          },
        ],
      },
      {
        name: "switch",
        description: "Switch to a different infrastructure namespace",
        args: {
          name: "name",
          description: "Namespace name, or - for the previously active one",
        },
        options: [
          {
            name: ["--create", "-c"],
            description: "Create the namespace before switching",
          },
        ],
      },
    ],
  },
  {
    name: "rand",
    description:
      "Utilities for generating cryptographically secure random data",
    subcommands: [
      {
        name: "bytes",
        description:
          "Generates random bytes and outputs them in the specified format",
        args: { name: "bytes" },
        options: [
          formatOption(
            [
              "hex",
              "base32",
              "base32hex",
              "base32crockford",
              "base64",
              "base64url",
              "raw",
            ],
            "hex"
          ),
          {
            name: "--no-padding",
            description: "Omit padding characters from base32/base64 output",
          },
        ],
      },
      {
        name: "uuid",
        description: "Generates a random UUID (defaults to version 4)",
        options: [
          {
            name: ["--v1", "-1"],
            description: "Generate a version 1 UUID",
            exclusiveOn: ["--v4", "-4", "--v6", "-6", "--v7", "-7"],
          },
          {
            name: ["--v4", "-4"],
            description: "Generate a version 4 UUID",
            exclusiveOn: ["--v1", "-1", "--v6", "-6", "--v7", "-7"],
          },
          {
            name: ["--v6", "-6"],
            description: "Generate a version 6 UUID",
            exclusiveOn: ["--v1", "-1", "--v4", "-4", "--v7", "-7"],
          },
          {
            name: ["--v7", "-7"],
            description: "Generate a version 7 UUID",
            exclusiveOn: ["--v1", "-1", "--v4", "-4", "--v6", "-6"],
          },
        ],
      },
      {
        name: "words",
        description:
          "Generates random 4-5 letter words for memorable passphrases",
        args: { name: "num" },
        options: [
          {
            name: ["--sep", "-s"],
            description: "Separator between words",
            args: { name: "separator", default: " " },
          },
        ],
      },
    ],
  },
  {
    name: "run",
    description: "Runs your application",
    options: [
      {
        name: "--browser",
        description:
          "Whether to open the local development dashboard in the browser on startup",
        args: {
          name: "browser",
          default: "auto",
          suggestions: ["auto", "never", "always"],
        },
      },
      {
        name: "--color",
        description: "Whether to display colorized output",
        requiresSeparator: true,
        args: boolArg,
      },
      {
        name: "--debug",
        description: "Compile for debugging (disables some optimizations)",
        requiresSeparator: true,
        args: {
          name: "mode",
          isOptional: true,
          suggestions: ["enabled", "break"],
        },
      },
      {
        name: "--json",
        description: "Display logs in JSON format",
      },
      {
        name: "--listen",
        description: 'Address to listen on (for example "0.0.0.0:4000")',
        args: { name: "listen" },
      },
      {
        name: ["--level", "-l"],
        description: "Minimum log level to display",
        args: {
          name: "level",
          suggestions: ["trace", "debug", "info", "warn", "error"],
        },
      },
      namespaceOption,
      {
        name: "--no-color",
        description: "Equivalent to --color=false",
        hidden: true,
      },
      {
        name: ["--port", "-p"],
        description: "Port to listen on",
        args: { name: "port", default: "4000" },
      },
      {
        name: "--redact",
        description: "Redact sensitive data in traces when running locally",
      },
      {
        name: ["--watch", "-w"],
        description: "Watch for changes and live-reload",
        requiresSeparator: true,
        args: boolArg,
      },
    ],
  },
  {
    name: ["secret", "secrets"],
    description: "Secret management commands",
    subcommands: [
      {
        name: "archive",
        description:
          "Archives a secret value (use 'encore secret delete <id>' instead)",
        deprecated: true,
        args: { name: "id" },
      },
      {
        name: "delete",
        description: "Deletes a secret value",
        args: { name: "id" },
        options: [
          {
            name: ["--yes", "-y"],
            description: "Skip confirmation prompt",
          },
        ],
      },
      {
        name: "list",
        description: "Lists secrets, optionally for a specific key",
        args: { name: "keys", isVariadic: true, isOptional: true },
      },
      {
        name: "set",
        description: "Sets a secret value",
        args: { name: "secret-name" },
        options: [
          {
            name: ["--type", "-t"],
            description:
              "Environment type(s) to set for (comma-separated list)",
            isRepeatable: true,
            args: { name: "types", suggestions: secretEnvTypes },
          },
          {
            name: ["--env", "-e"],
            description:
              "Environment name(s) to set for (comma-separated list)",
            isRepeatable: true,
            args: { name: "envs" },
          },
          {
            name: ["--dev", "-d"],
            description: "To set the secret for development use",
            hidden: true,
          },
          {
            name: ["--prod", "-p"],
            description: "To set the secret for production use",
            hidden: true,
          },
        ],
      },
      {
        name: "unarchive",
        description:
          "Unarchives a secret value (use 'encore secret delete <id>' instead)",
        deprecated: true,
        args: { name: "id" },
      },
    ],
  },
  {
    name: "telemetry",
    description: "Reports the current telemetry status",
    subcommands: [
      { name: "disable", description: "Disables telemetry reporting" },
      { name: "enable", description: "Enables telemetry reporting" },
    ],
  },
  {
    name: "test",
    description: "Tests your application",
    args: {
      name: "go test flags",
      description: "Takes all the same flags as `go test`",
      isVariadic: true,
      isOptional: true,
    },
    options: [
      {
        name: "--codegen-debug",
        description:
          "Dump generated code (for debugging Encore's code generation)",
      },
      {
        name: "--prepare",
        description: "Prepare for running tests (without running them)",
      },
      {
        name: "--trace",
        description:
          "Specifies a trace file to write trace information about the parse and compilation process to",
        args: { name: "file", template: "filepaths" },
      },
      { name: "--no-color", description: "Disable colorized output" },
    ],
  },
  {
    name: "version",
    description: "Reports the current version of the encore application",
    subcommands: [
      {
        name: "update",
        description:
          "Checks for an update of encore and, if one is available, runs the appropriate command to update it",
      },
    ],
  },
  // Hidden commands
  {
    name: "alpha",
    description: "Pre-release functionality in alpha stage",
    hidden: true,
    subcommands: [
      {
        name: "deploy",
        description: "Deploy an Encore app to a cloud environment",
        options: [
          {
            name: "--app",
            description: "App slug to deploy to (default current app)",
            args: { name: "app" },
          },
          {
            name: ["--env", "-e"],
            description: "Environment to deploy to",
            isRequired: true,
            args: { name: "env" },
          },
          {
            name: "--commit",
            description: "Commit to deploy",
            exclusiveOn: ["--branch"],
            args: { name: "commit" },
          },
          {
            name: "--branch",
            description: "Branch to deploy",
            exclusiveOn: ["--commit"],
            args: { name: "branch" },
          },
          formatOption(["text", "json"], "text"),
        ],
      },
    ],
  },
  {
    name: "debug",
    description: "A collection of debug commands",
    hidden: true,
    subcommands: [
      {
        name: "build",
        description:
          "Checks your application for compile-time errors using Encore's compiler",
        options: [
          {
            name: "--codegen-debug",
            description:
              "Dump generated code (for debugging Encore's code generation)",
          },
          { name: "--tests", description: "Parse tests as well" },
        ],
      },
      {
        name: "meta",
        description: "Outputs the parsed metadata",
        options: [
          formatOption(["proto", "json"], "proto"),
          { name: "--tests", description: "Parse tests as well" },
        ],
      },
    ],
  },
];

// Cobra's built-in `help [command]` lists every visible command, without flags
const helpSubcommands = (commands: Fig.Subcommand[]): Fig.Subcommand[] =>
  commands
    .filter((command) => !command.hidden && !command.deprecated)
    .map((command) => ({
      name: command.name,
      description: command.description,
      ...(command.subcommands && {
        subcommands: helpSubcommands(command.subcommands),
      }),
    }));

const completionSpec: Fig.Spec = {
  name: "encore",
  description: "Encore is the fastest way of developing backend applications",
  subcommands: [
    ...subcommands,
    {
      name: "help",
      description: "Help about any command",
      subcommands: helpSubcommands(subcommands),
    },
  ],
  options: [
    {
      name: ["--verbose", "-v"],
      description: "Verbose output",
      isPersistent: true,
      isRepeatable: true,
    },
    {
      name: "--trace",
      description: "File to write execution trace data to",
      isPersistent: true,
      args: { name: "file", template: "filepaths" },
    },
    { name: ["--help", "-h"], description: "Display help", isPersistent: true },
  ],
};
export default completionSpec;
