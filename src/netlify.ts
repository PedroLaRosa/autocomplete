// Netlify CLI v27.20.1 (npm netlify-cli latest, 2026-11-19). Source: command definitions in dist/commands/** of the
// netlify-cli@27.20.1 npm package, cross-checked with docs/commands/*.md at tag v27.20.1 of github.com/netlify/cli.
// Read statically (the CLI was not executed). Removed upstream: addons:*, dev:trace, lm:*, completion:generate:alias.

const contextSuggestions = [
  "production",
  "deploy-preview",
  "branch-deploy",
  "dev",
];

const scopeSuggestions = ["builds", "functions", "post-processing", "runtime"];

const agentSuggestions = ["claude", "codex", "gemini"];

const contextDescription = (subject: string, suffix = "") =>
  `Specify a deploy context for ${subject} ("production", "deploy-preview", "branch-deploy", "dev") or \`branch:your-branch\` where \`your-branch\` is the name of a branch${suffix}`;

const contextArg = (): Fig.Arg => ({
  name: "context",
  suggestions: contextSuggestions,
});

const globalOptions: Fig.Option[] = [
  {
    name: "--auth",
    description:
      "Netlify auth token - can be used to run this command without logging in",
    args: {
      name: "token",
    },
  },
  {
    name: "--debug",
    description: "Print debugging information",
  },
  {
    name: "--http-proxy",
    description: "Proxy server address to route requests through",
    hidden: true,
    args: {
      name: "address",
      isOptional: true,
    },
  },
  {
    name: "--http-proxy-certificate-filename",
    description: "Certificate file to use when connecting using a proxy server",
    hidden: true,
    args: {
      name: "file",
      isOptional: true,
      template: "filepaths",
    },
  },
];

const workspaceOptions: Fig.Option[] = [
  {
    name: "--filter",
    description:
      "For monorepos, specify the name of the application to run the command in",
    args: {
      name: "app",
    },
  },
  ...globalOptions,
];

/**
 * Appends the options every Netlify command inherits. All commands except a
 * few (api, recipes, completion, status, switch, login, teams) also accept
 * `--filter`.
 */
const withBaseOptions = (
  subcommand: Fig.Subcommand,
  { workspace = true }: { workspace?: boolean } = {}
): Fig.Subcommand => ({
  ...subcommand,
  options: [
    ...(subcommand.options ?? []),
    ...(workspace ? workspaceOptions : globalOptions),
  ],
});

// Flag injected by the CLI itself on commands that prompt for confirmation
const forceOption: Fig.Option = {
  name: "--force",
  description: "Bypasses prompts & Force the command to run",
};

const jsonOption = (description: string): Fig.Option => ({
  name: "--json",
  description,
});

const offlineOption: Fig.Option = {
  name: ["-o", "--offline"],
  description: "Disables any features that require network access",
};

const projectOption: Fig.Option = {
  name: "--project",
  description: "Project ID or name (if not in a linked directory)",
  args: {
    name: "project",
  },
};

const siteTargetOption = (short = false): Fig.Option => ({
  name: short ? ["-s", "--site"] : "--site",
  description: "A project name or ID to target",
  args: {
    name: "name-or-id",
  },
});

const siteIdOption: Fig.Option = {
  name: "--site-id",
  description: "A project name or ID to target",
  hidden: true,
  args: {
    name: "name-or-id",
  },
};

const regionOption: Fig.Option = {
  name: "--region",
  description:
    "The region where the store data is held, such as 'eu-central-1'; when omitted, the default region is used",
  args: {
    name: "region",
  },
};

const agentOption = (name: Fig.SingleOrArray<string>): Fig.Option => ({
  name,
  description: "Agent type (claude, codex, gemini)",
  args: {
    name: "agent",
    suggestions: agentSuggestions,
  },
});

const modelOption: Fig.Option = {
  name: ["-m", "--model"],
  description: "Model to use for the agent",
  args: {
    name: "model",
  },
};

const geoOptions: Fig.Option[] = [
  {
    name: "--geo",
    description:
      "Force geolocation data to be updated, use cached data from the last 24h if found, or use a mock location",
    args: {
      name: "mode",
      suggestions: ["cache", "mock", "update"],
    },
  },
  {
    name: "--country",
    description:
      "Two-letter country code (https://ntl.fyi/country-codes) to use as mock geolocation (enables --geo=mock automatically)",
    args: {
      name: "geoCountry",
    },
  },
  {
    name: "--staticServerPort",
    description:
      "Port of the static app server used when no framework is detected",
    hidden: true,
    args: {
      name: "port",
    },
  },
];

const internalDisableEdgeFunctions: Fig.Option = {
  name: "--internal-disable-edge-functions",
  description:
    "Disables edge functions. Use this if your environment doesn't support Deno. This option is internal and should not be used by end users",
  hidden: true,
};

const agents: Fig.Subcommand = withBaseOptions({
  name: "agents",
  description: "Manage Netlify AI agent tasks",
});

const agentsCreate: Fig.Subcommand = withBaseOptions({
  name: ["agents:create", "agents:run"],
  description: "Create and run a new agent task on your site",
  args: {
    name: "prompt",
    description: "The prompt for the agent to execute",
    isOptional: true,
  },
  options: [
    {
      name: ["-p", "--prompt"],
      description: "Agent prompt",
      args: {
        name: "prompt",
      },
    },
    agentOption(["-a", "--agent"]),
    modelOption,
    {
      name: ["-b", "--branch"],
      description: "Git branch to work on",
      args: {
        name: "branch",
      },
    },
    projectOption,
    jsonOption("Output result as JSON"),
  ],
});

const agentsList: Fig.Subcommand = withBaseOptions({
  name: "agents:list",
  description: "List agent tasks for the current site",
  options: [
    jsonOption("Output result as JSON"),
    {
      name: ["-s", "--status"],
      description: "Filter by status (new, running, done, error, cancelled)",
      args: {
        name: "status",
        suggestions: ["new", "running", "done", "error", "cancelled"],
      },
    },
    projectOption,
  ],
});

const agentsShow: Fig.Subcommand = withBaseOptions({
  name: "agents:show",
  description: "Show details of a specific agent task",
  args: {
    name: "id",
    description: "Agent task ID to show",
  },
  options: [jsonOption("Output result as JSON"), projectOption],
});

const agentsStop: Fig.Subcommand = withBaseOptions({
  name: "agents:stop",
  description: "Stop a running agent task",
  args: {
    name: "id",
    description: "Agent task ID to stop",
  },
  options: [jsonOption("Output result as JSON"), projectOption],
});

const api: Fig.Subcommand = withBaseOptions(
  {
    name: "api",
    description: "Run any Netlify API method",
    args: {
      name: "apiMethod",
      description: "Open API method to run",
      isOptional: true,
    },
    options: [
      {
        name: ["-d", "--data"],
        description: "Data to use",
        args: {
          name: "data",
        },
      },
      {
        name: "--list",
        description: "List out available API methods",
      },
    ],
  },
  { workspace: false }
);

const blobs: Fig.Subcommand = withBaseOptions({
  name: ["blobs", "blob"],
  description: "Manage objects in Netlify Blobs",
});

const blobsDelete: Fig.Subcommand = withBaseOptions({
  name: ["blobs:delete", "blob:delete"],
  description:
    "Deletes an object with a given key, if it exists, from a Netlify Blobs store",
  args: [
    {
      name: "store",
      description: "Name of the store",
    },
    {
      name: "key",
      description: "Object key",
    },
  ],
  options: [regionOption, forceOption],
});

const blobsGet: Fig.Subcommand = withBaseOptions({
  name: ["blobs:get", "blob:get"],
  description:
    "Reads an object with a given key from a Netlify Blobs store and, if it exists, prints the content to the terminal or saves it to a file",
  args: [
    {
      name: "store",
      description: "Name of the store",
    },
    {
      name: "key",
      description: "Object key",
    },
  ],
  options: [
    {
      name: ["-O", "--output"],
      description:
        "Defines the filesystem path where the blob data should be persisted",
      args: {
        name: "path",
        template: "filepaths",
      },
    },
    regionOption,
  ],
});

const blobsList: Fig.Subcommand = withBaseOptions({
  name: ["blobs:list", "blob:list"],
  description: "Lists objects in a Netlify Blobs store",
  args: {
    name: "store",
    description: "Name of the store",
  },
  options: [
    {
      name: ["-d", "--directories"],
      description:
        "Indicates that keys with the '/' character should be treated as directories, returning a list of sub-directories at a given level rather than all the keys inside them",
    },
    {
      name: ["-p", "--prefix"],
      description:
        "A string for filtering down the entries; when specified, only the entries whose key starts with that prefix are returned",
      args: {
        name: "prefix",
      },
    },
    jsonOption("Output list contents as JSON"),
    regionOption,
  ],
});

const blobsSet: Fig.Subcommand = withBaseOptions({
  name: ["blobs:set", "blob:set"],
  description:
    "Writes to a Netlify Blobs store an object with the data provided in the command or the contents of a file defined by the 'input' parameter",
  args: [
    {
      name: "store",
      description: "Name of the store",
    },
    {
      name: "key",
      description: "Object key",
    },
    {
      name: "value",
      description: "Object value",
      isOptional: true,
      isVariadic: true,
    },
  ],
  options: [
    {
      name: ["-i", "--input"],
      description:
        "Defines the filesystem path where the blob data should be read from",
      args: {
        name: "path",
        template: "filepaths",
      },
    },
    regionOption,
    forceOption,
  ],
});

const build: Fig.Subcommand = withBaseOptions({
  name: "build",
  description: "Build on your local machine",
  options: [
    {
      name: "--context",
      description: contextDescription(
        "environment variables read during the build",
        ' (default: value of CONTEXT or "production")'
      ),
      args: contextArg(),
    },
    {
      name: "--dry",
      description: "Dry run: show instructions without running them",
    },
    offlineOption,
  ],
});

const claim: Fig.Subcommand = withBaseOptions({
  name: "claim",
  description: "Claim an anonymously deployed site and link it to your account",
  options: [
    {
      name: ["-s", "--site"],
      description: "The site ID of the anonymous deploy to claim",
      isRequired: true,
      args: {
        name: "siteId",
      },
    },
    {
      name: "--token",
      description: "The drop token provided when the site was deployed",
      isRequired: true,
      args: {
        name: "token",
      },
    },
  ],
});

const clone: Fig.Subcommand = withBaseOptions({
  name: "clone",
  description: "Clone a repository and link it to a Netlify project",
  args: [
    {
      name: "repository",
      description:
        "Repository URL, GitHub shorthand (owner/repo), Netlify site name, or Netlify site URL",
    },
    {
      name: "targetDir",
      description:
        "Directory in which to clone the repository - will be created if it does not exist",
      isOptional: true,
      template: "folders",
    },
  ],
  options: [
    {
      name: "--id",
      description:
        "ID of existing Netlify project to link to (only for GitHub/GitLab repos)",
      args: {
        name: "id",
      },
    },
    {
      name: "--name",
      description:
        "Name of existing Netlify project to link to (only for GitHub/GitLab repos)",
      args: {
        name: "name",
      },
    },
  ],
});

const completion: Fig.Subcommand = withBaseOptions(
  {
    name: "completion",
    description: "Generate shell completion script",
  },
  { workspace: false }
);

const completionInstall: Fig.Subcommand = withBaseOptions({
  name: ["completion:install", "completion:generate"],
  description: "Generates completion script for your preferred shell",
});

const completionUninstall: Fig.Subcommand = withBaseOptions({
  name: ["completion:uninstall", "completion:remove"],
  description: "Uninstalls the installed completions",
  hidden: true,
});

const create: Fig.Subcommand = withBaseOptions({
  name: "create",
  description: "Create a new Netlify project using an AI agent",
  args: {
    name: "prompt",
    description: "Description of the site to create",
    isOptional: true,
  },
  options: [
    {
      name: ["-p", "--prompt"],
      description: "Description of the site to create",
      args: {
        name: "prompt",
      },
    },
    agentOption("--agent"),
    modelOption,
    {
      name: ["-n", "--name"],
      description: "Project name (subdomain)",
      args: {
        name: "name",
      },
    },
    {
      name: ["-d", "--dir"],
      description:
        "Directory to create the project in (defaults to current directory)",
      args: {
        name: "path",
        template: "folders",
      },
    },
    {
      name: ["-a", "--account-slug"],
      description: "Account slug to create the project under",
      args: {
        name: "slug",
      },
    },
    {
      name: "--git",
      description: "Create a git repository and push source code (e.g. github)",
      args: {
        name: "provider",
        suggestions: ["github"],
      },
    },
    {
      name: "--repo-owner",
      description: "GitHub org or user to create the repo under",
      args: {
        name: "owner",
      },
    },
    {
      name: "--no-download",
      description: "Skip downloading source code after the agent run completes",
    },
    {
      name: "--no-wait",
      description:
        "Return immediately after starting the agent run without polling for completion",
    },
    jsonOption("Output result as JSON"),
  ],
});

const database: Fig.Subcommand = withBaseOptions({
  name: ["database", "db"],
  description:
    "Provision a production ready Postgres database with a single command",
  subcommands: [
    withBaseOptions(
      {
        name: "status",
        description:
          "Check the status of the database, including applied and pending migrations",
        options: [
          {
            name: ["-b", "--branch"],
            description:
              "Netlify branch name to query; defaults to the local development database",
            args: {
              name: "branch",
            },
          },
          {
            name: "--show-credentials",
            description:
              "Include the full connection string (including username and password) in the output",
          },
          jsonOption("Output result as JSON"),
        ],
      },
      { workspace: false }
    ),
    withBaseOptions({
      name: "init",
      description:
        "Interactive setup: install the package, scaffold a starter migration, and verify the database",
      options: [
        {
          name: ["-y", "--yes"],
          description:
            "Non-interactive mode. Accepts the defaults for every prompt",
        },
      ],
    }),
    withBaseOptions({
      name: "connect",
      description: "Connect to the database",
      options: [
        {
          name: ["-q", "--query"],
          description: "Execute a single query and exit",
          args: {
            name: "sql",
          },
        },
        jsonOption(
          "Output query results as JSON. When used without --query, prints the connection details as JSON instead"
        ),
      ],
    }),
    withBaseOptions({
      name: "reset",
      description:
        "Reset the local development database, removing all data and tables",
      options: [
        {
          name: "--force",
          description:
            "Skip the confirmation prompt shown when the local database has to be deleted",
        },
        jsonOption("Output result as JSON"),
      ],
    }),
    withBaseOptions({
      name: "migrations",
      description: "Manage database migrations",
      subcommands: [
        withBaseOptions({
          name: "apply",
          description:
            "Apply database migrations to the local development database",
          options: [
            {
              name: "--to",
              description:
                "Target migration name or prefix to apply up to (applies all if omitted)",
              args: {
                name: "name",
              },
            },
            jsonOption("Output result as JSON"),
          ],
        }),
        withBaseOptions({
          name: "new",
          description: "Create a new migration",
          options: [
            {
              name: ["-d", "--description"],
              description:
                "Purpose of the migration (used to generate the file name)",
              args: {
                name: "description",
              },
            },
            {
              name: ["-s", "--scheme"],
              description: "Numbering scheme for migration prefixes",
              args: {
                name: "scheme",
                suggestions: ["timestamp", "sequential"],
              },
            },
            jsonOption("Output result as JSON"),
          ],
        }),
        withBaseOptions({
          name: "pull",
          description: "Pull migrations and overwrite local migration files",
          options: [
            {
              name: ["-b", "--branch"],
              description:
                "Pull migrations for a specific branch (defaults to 'production'; pass --branch with no value to use local git branch)",
              args: {
                name: "branch",
                isOptional: true,
              },
            },
            {
              name: "--force",
              description: "Skip confirmation prompt",
            },
            jsonOption("Output result as JSON"),
          ],
        }),
        withBaseOptions({
          name: "reset",
          description:
            "Delete local migration files that have not been applied yet",
          options: [
            {
              name: ["-b", "--branch"],
              description:
                "Target a remote preview branch instead of the local development database",
              args: {
                name: "branch",
              },
            },
            jsonOption("Output result as JSON"),
          ],
        }),
      ],
    }),
  ],
});

const deploy: Fig.Subcommand = withBaseOptions({
  name: "deploy",
  description: "Deploy your project to Netlify",
  options: [
    {
      name: ["-d", "--dir"],
      description: "Specify a folder to deploy",
      args: {
        name: "path",
        template: "folders",
      },
    },
    {
      name: ["-f", "--functions"],
      description: "Specify a functions folder to deploy",
      args: {
        name: "folder",
        template: "folders",
      },
    },
    {
      name: ["-p", "--prod"],
      description: "Deploy to production",
      exclusiveOn: ["--alias", "--branch", "--prod-if-unlocked", "--draft"],
    },
    {
      name: "--prod-if-unlocked",
      description: "Deploy to production if unlocked, create a draft otherwise",
      exclusiveOn: ["--alias", "--branch", "--prod", "--draft"],
    },
    {
      name: "--draft",
      description: "Explicitly create a draft deploy",
      hidden: true,
      exclusiveOn: ["--prod", "--prod-if-unlocked"],
    },
    {
      name: "--alias",
      description:
        "Specifies the alias for deployment, the string at the beginning of the deploy subdomain. Useful for creating predictable deployment URLs. Avoid setting an alias string to the same value as a deployed branch. `alias` doesn’t create a branch deploy and can’t be used in conjunction with the branch subdomain feature. Maximum 37 characters",
      args: {
        name: "name",
      },
    },
    {
      name: ["-b", "--branch"],
      description: "Do not use - renamed to --alias",
      hidden: true,
      deprecated: {
        insertValue: "--alias",
        description: "Renamed to --alias",
      },
      args: {
        name: "name",
      },
    },
    {
      name: ["-O", "--open"],
      description: "Open project after deploy",
    },
    {
      name: ["-m", "--message"],
      description: "A short message to include in the deploy log",
      args: {
        name: "message",
      },
    },
    {
      name: ["-s", "--site"],
      description: "A project name or ID to deploy to",
      args: {
        name: "name-or-id",
      },
    },
    jsonOption("Output deployment data as JSON"),
    {
      name: "--timeout",
      description: "Timeout to wait for deployment to finish",
      args: {
        name: "number",
      },
    },
    {
      name: "--trigger",
      description:
        "Trigger a new build of your project on Netlify without uploading local files",
    },
    {
      name: "--remote",
      description:
        "Build your project on Netlify instead of locally. Useful when building with native packages, on devices with limited resources or missing toolchains. Build logs stream in real time and are available on Netlify",
    },
    {
      name: "--build",
      description: "Do not use - this is now the default",
      hidden: true,
      deprecated: true,
    },
    {
      name: "--no-build",
      description:
        "Do not run build command before deploying. Only use this if you have no need for a build or your project has already been built",
    },
    {
      name: "--context",
      description: contextDescription(
        "environment variables read during the build",
        " (default: dev)"
      ),
      args: contextArg(),
    },
    {
      name: "--env",
      description:
        "Set an environment variable for this deploy only. Applies to deployed functions only. Can be specified multiple times",
      isRepeatable: true,
      args: {
        name: "KEY=VALUE",
      },
    },
    {
      name: "--secret-env",
      description:
        "Set a secret environment variable for this deploy only. Applies to deployed functions only. The value is masked in the Netlify UI and API. Can be specified multiple times",
      isRepeatable: true,
      args: {
        name: "KEY=VALUE",
      },
    },
    {
      name: "--skip-functions-cache",
      description:
        "Ignore any functions created as part of a previous `build` or `deploy` commands, forcing them to be bundled again as part of the deployment",
    },
    {
      name: "--upload-source-zip",
      description: "Upload source code as a zip file",
      hidden: true,
    },
    {
      name: "--create-site",
      description:
        "Create a new site and deploy to it. Optionally specify a name, otherwise a random name will be generated. Uses your default team if --team is omitted",
      hidden: true,
      args: {
        name: "name",
        isOptional: true,
      },
    },
    {
      name: "--site-name",
      description:
        "Name for a new site. Implies --create-site if the site does not already exist",
      args: {
        name: "name",
      },
    },
    {
      name: "--team",
      description:
        "Specify team slug when creating a site. Only works with --create-site or --site-name flag",
      args: {
        name: "slug",
      },
    },
    {
      name: "--allow-anonymous",
      description:
        "If not logged in, deploy anonymously and create a claimable site instead of requiring authentication",
    },
    {
      name: "--created-via",
      description: 'Specify the source of the deploy (e.g., "cli", "drop")',
      args: {
        name: "source",
      },
    },
  ],
});

const dev: Fig.Subcommand = withBaseOptions({
  name: ["dev", "develop"],
  description: "Local dev server",
  options: [
    {
      name: ["-c", "--command"],
      description: "Command to run",
      args: {
        name: "command",
      },
    },
    {
      name: "--context",
      description: contextDescription(
        "environment variables",
        " (default: dev)"
      ),
      args: contextArg(),
    },
    {
      name: ["-p", "--port"],
      description: "Port of netlify dev",
      args: {
        name: "port",
      },
    },
    {
      name: "--skip-wait-port",
      description: "Disables waiting for target port to become available",
      hidden: true,
    },
    {
      name: "--no-open",
      description: "Disables the automatic opening of a browser window",
    },
    {
      name: "--target-port",
      description: "Port of target app server",
      args: {
        name: "port",
      },
    },
    {
      name: "--framework",
      description:
        "Framework to use. Defaults to #auto which automatically detects a framework",
      args: {
        name: "name",
      },
    },
    {
      name: ["-d", "--dir"],
      description: "Dir with static files",
      args: {
        name: "path",
        template: "folders",
      },
    },
    {
      name: ["-f", "--functions"],
      description: "Specify a functions folder to serve",
      args: {
        name: "folder",
        template: "folders",
      },
    },
    offlineOption,
    {
      name: "--offline-env",
      description:
        "Disables fetching environment variables from the Netlify API",
      hidden: true,
    },
    internalDisableEdgeFunctions,
    {
      name: ["-l", "--live"],
      description:
        "Start a public live session; optionally, supply a subdomain to generate a custom URL",
      args: {
        name: "subdomain",
        isOptional: true,
      },
    },
    {
      name: "--functions-port",
      description: "Port of functions server",
      args: {
        name: "port",
      },
    },
    ...geoOptions,
    {
      name: ["-e", "--edge-inspect"],
      description:
        "Enable the V8 Inspector Protocol for Edge Functions, with an optional address in the host:port format",
      exclusiveOn: ["-E", "--edge-inspect-brk"],
      args: {
        name: "address",
        isOptional: true,
      },
    },
    {
      name: ["-E", "--edge-inspect-brk"],
      description:
        "Enable the V8 Inspector Protocol for Edge Functions and pause execution on the first line of code, with an optional address in the host:port format",
      exclusiveOn: ["-e", "--edge-inspect"],
      args: {
        name: "address",
        isOptional: true,
      },
    },
    {
      name: "--skip-gitignore",
      description: "Skip adding .netlify to .gitignore file",
    },
  ],
});

const devExec: Fig.Subcommand = withBaseOptions({
  name: "dev:exec",
  description:
    "Runs a command within the netlify dev environment. For example, with environment variables from any installed add-ons",
  args: {
    name: "cmd",
    description: "The command that should be executed",
    isCommand: true,
  },
  options: [
    {
      name: "--context",
      description: contextDescription(
        "environment variables",
        " (default: dev)"
      ),
      args: contextArg(),
    },
  ],
});

const env: Fig.Subcommand = withBaseOptions({
  name: "env",
  description: "Control environment variables for the current project",
});

const envClone: Fig.Subcommand = withBaseOptions({
  name: ["env:clone", "env:migrate"],
  description: "Clone environment variables from one project to another",
  options: [
    {
      name: ["-f", "--from"],
      description: "Project ID (From)",
      args: {
        name: "from",
      },
    },
    {
      name: ["-t", "--to"],
      description: "Project ID (To)",
      isRequired: true,
      args: {
        name: "to",
      },
    },
    forceOption,
  ],
});

const envGet: Fig.Subcommand = withBaseOptions({
  name: "env:get",
  description:
    "Get resolved value of specified environment variable (includes netlify.toml)",
  args: {
    name: "name",
    description: "Environment variable name",
  },
  options: [
    {
      name: ["-c", "--context"],
      description: contextDescription("environment variables"),
      args: contextArg(),
    },
    jsonOption("Output environment variables as JSON"),
    siteTargetOption(),
    siteIdOption,
    {
      name: ["-s", "--scope"],
      description: "Specify a scope",
      args: {
        name: "scope",
        suggestions: [...scopeSuggestions, "any"],
      },
    },
  ],
});

const envImport: Fig.Subcommand = withBaseOptions({
  name: "env:import",
  description: "Import and set environment variables from .env file",
  args: {
    name: "fileName",
    description: ".env file to import",
    template: "filepaths",
  },
  options: [
    {
      name: ["-r", "--replace-existing"],
      description:
        "Replace all existing variables instead of merging them with the current ones",
    },
    jsonOption("Output environment variables as JSON"),
    siteTargetOption(true),
    siteIdOption,
  ],
});

const envList: Fig.Subcommand = withBaseOptions({
  name: "env:list",
  description:
    "Lists resolved environment variables for project (includes netlify.toml)",
  options: [
    {
      name: ["-c", "--context"],
      description: contextDescription(
        "environment variables",
        " (default: all contexts)"
      ),
      args: contextArg(),
    },
    {
      ...jsonOption("Output environment variables as JSON"),
      exclusiveOn: ["--plain"],
    },
    siteTargetOption(),
    siteIdOption,
    {
      name: "--plain",
      description: "Output environment variables as plaintext",
      exclusiveOn: ["--json"],
    },
    {
      name: ["-s", "--scope"],
      description: "Specify a scope",
      args: {
        name: "scope",
        suggestions: [...scopeSuggestions, "any"],
      },
    },
  ],
});

const envSet: Fig.Subcommand = withBaseOptions({
  name: "env:set",
  description: "Set value of environment variable",
  args: [
    {
      name: "key",
      description: "Environment variable key",
    },
    {
      name: "value",
      description: "Value to set to",
      isOptional: true,
    },
  ],
  options: [
    {
      name: ["-c", "--context"],
      description: contextDescription(
        "environment variables",
        " (default: all contexts)"
      ),
      isRepeatable: true,
      args: {
        ...contextArg(),
        isVariadic: true,
      },
    },
    jsonOption("Output environment variables as JSON"),
    siteTargetOption(),
    siteIdOption,
    {
      name: ["-s", "--scope"],
      description: "Specify a scope (default: all scopes)",
      isRepeatable: true,
      args: {
        name: "scope",
        isVariadic: true,
        suggestions: scopeSuggestions,
      },
    },
    {
      name: "--secret",
      description:
        "Indicate whether the environment variable value can be read again",
    },
    forceOption,
  ],
});

const envUnset: Fig.Subcommand = withBaseOptions({
  name: ["env:unset", "env:delete", "env:remove"],
  description: "Unset an environment variable which removes it from the UI",
  args: {
    name: "key",
    description: "Environment variable key",
  },
  options: [
    {
      name: ["-c", "--context"],
      description: contextDescription(
        "environment variables",
        " (default: all contexts)"
      ),
      isRepeatable: true,
      args: {
        ...contextArg(),
        isVariadic: true,
      },
    },
    jsonOption("Output environment variables as JSON"),
    siteTargetOption(true),
    siteIdOption,
    forceOption,
  ],
});

const functions: Fig.Subcommand = withBaseOptions({
  name: ["functions", "function"],
  description: "Manage netlify functions",
});

const functionsBuild: Fig.Subcommand = withBaseOptions({
  name: ["functions:build", "function:build"],
  description: "Build functions locally",
  options: [
    {
      name: ["-f", "--functions"],
      description: "Specify a functions directory to build to",
      args: {
        name: "directory",
        template: "folders",
      },
    },
    {
      name: ["-s", "--src"],
      description: "Specify the source directory for the functions",
      args: {
        name: "directory",
        template: "folders",
      },
    },
  ],
});

const functionsCreate: Fig.Subcommand = withBaseOptions({
  name: ["functions:create", "function:create"],
  description: "Create a new function locally",
  args: {
    name: "name",
    description:
      "Name of your new function file inside your functions directory",
    isOptional: true,
  },
  options: [
    {
      name: ["-n", "--name"],
      description: "Function name",
      args: {
        name: "name",
      },
    },
    {
      name: ["-u", "--url"],
      description: "Pull template from URL",
      args: {
        name: "url",
      },
    },
    {
      name: ["-l", "--language"],
      description: "Function language",
      args: {
        name: "lang",
        suggestions: ["javascript", "typescript"],
      },
    },
    {
      name: ["-t", "--template"],
      description:
        "Bundled template to use (skips the interactive template picker)",
      args: {
        name: "name",
      },
    },
    offlineOption,
  ],
});

const functionsInvoke: Fig.Subcommand = withBaseOptions({
  name: ["functions:invoke", "function:trigger"],
  description:
    "Trigger a function while in netlify dev with simulated data, good for testing function calls including Netlify's Event Triggered Functions",
  args: {
    name: "name",
    description: "Function name to invoke",
    isOptional: true,
  },
  options: [
    {
      name: ["-n", "--name"],
      description: "Function name to invoke",
      args: {
        name: "name",
      },
    },
    {
      name: ["-f", "--functions"],
      description:
        "Specify a functions folder to parse, overriding netlify.toml",
      args: {
        name: "dir",
        template: "folders",
      },
    },
    {
      name: ["-q", "--querystring"],
      description: "Querystring to add to your function invocation",
      args: {
        name: "query",
      },
    },
    {
      name: ["-p", "--payload"],
      description:
        "Supply POST payload in stringified json, or a path to a json file",
      args: {
        name: "data",
        template: "filepaths",
      },
    },
    {
      name: "--identity",
      description:
        "Simulate Netlify Identity authentication JWT. pass --identity to affirm unauthenticated request",
      exclusiveOn: ["--no-identity"],
    },
    {
      name: "--no-identity",
      description:
        "Simulate Netlify Identity authentication JWT. pass --no-identity to affirm unauthenticated request",
      exclusiveOn: ["--identity"],
    },
    {
      name: "--port",
      description: "Port where netlify dev is accessible. e.g. 8888",
      args: {
        name: "port",
      },
    },
    offlineOption,
  ],
});

const functionsList: Fig.Subcommand = withBaseOptions({
  name: ["functions:list", "function:list"],
  description: "List functions that exist locally",
  options: [
    {
      name: ["-f", "--functions"],
      description: "Specify a functions directory to list",
      args: {
        name: "dir",
        template: "folders",
      },
    },
    jsonOption("Output function data as JSON"),
  ],
});

const functionsServe: Fig.Subcommand = withBaseOptions({
  name: ["functions:serve", "function:serve"],
  description: "Serve functions locally",
  options: [
    {
      name: ["-f", "--functions"],
      description: "Specify a functions directory to serve",
      args: {
        name: "dir",
        template: "folders",
      },
    },
    {
      name: ["-p", "--port"],
      description: "Specify a port for the functions server",
      args: {
        name: "port",
      },
    },
    offlineOption,
  ],
});

const gitCredential: Fig.Subcommand = withBaseOptions({
  name: "git-credential",
  description:
    "Git credential helper for Netlify authentication (used internally by git)",
  hidden: true,
  args: {
    name: "operation",
    description: "Git credential operation (get, store, erase)",
    suggestions: ["get", "store", "erase"],
  },
});

const init: Fig.Subcommand = withBaseOptions({
  name: "init",
  description:
    "Configure continuous deployment for a new or existing project. To create a new project without continuous deployment, use `netlify sites:create`",
  options: [
    {
      name: ["-m", "--manual"],
      description: "Manually configure a git remote for CI",
    },
    {
      name: "--git-remote-name",
      description: 'Name of Git remote to use. e.g. "origin"',
      args: {
        name: "name",
      },
    },
    {
      name: "--skip-agent-setup",
      description:
        "Skip installing Netlify skills and adding the Netlify MCP server for AI coding agents",
    },
    {
      name: "--skip-mcp-setup",
      description:
        "Skip adding the Netlify MCP server to your AI coding agents",
    },
    {
      name: "--mcp-scope",
      description:
        "Add the Netlify MCP server for this project only, or for your user across all projects",
      args: {
        name: "scope",
        suggestions: ["project", "user"],
      },
    },
    {
      name: "--reset-mcp-setup",
      description:
        "Forget your saved Netlify MCP server choices and ask which AI coding agents to set up",
    },
    {
      name: "--reset-context",
      description:
        "Replace locally edited Netlify skills with the latest release, and migrate or delete edited copies under renamed or deprecated names",
    },
    {
      name: "--force",
      description:
        "Reinitialize CI hooks if the linked project is already configured to use CI",
    },
  ],
});

const link: Fig.Subcommand = withBaseOptions({
  name: "link",
  description:
    "Link a local repo or project folder to an existing project on Netlify",
  options: [
    {
      name: "--id",
      description: "ID of project to link to",
      args: {
        name: "id",
      },
    },
    {
      name: "--name",
      description: "Name of project to link to",
      args: {
        name: "name",
      },
    },
    {
      name: "--git-remote-name",
      description: 'Name of Git remote to use. e.g. "origin"',
      args: {
        name: "name",
      },
    },
    {
      name: "--git-remote-url",
      description: "URL of the repository (or Github `owner/repo`) to link to",
      args: {
        name: "name",
      },
    },
  ],
});

const login: Fig.Subcommand = withBaseOptions(
  {
    name: "login",
    description: "Login to your Netlify account",
    options: [
      {
        name: "--new",
        description: "Login to new Netlify account",
      },
      {
        name: "--request",
        description: "Create a login ticket for agent/human-in-the-loop auth",
        args: {
          name: "message",
        },
      },
      {
        name: "--check",
        description:
          "Check the status of a login ticket created with --request",
        args: {
          name: "ticket-id",
        },
      },
      jsonOption("Output as JSON (for use with --request or --check)"),
    ],
  },
  { workspace: false }
);

const logout: Fig.Subcommand = withBaseOptions({
  name: "logout",
  description: "Logout of your Netlify account",
  hidden: true,
});

const logs: Fig.Subcommand = withBaseOptions({
  name: ["logs", "log"],
  description: "View logs from your project",
  options: [
    {
      name: ["-s", "--source"],
      description:
        "Log sources to include. Defaults to functions, edge-functions and server",
      isRepeatable: true,
      args: {
        name: "type",
        isVariadic: true,
        suggestions: ["functions", "edge-functions", "deploy", "server"],
      },
    },
    {
      name: "--function",
      description: "Filter to specific functions by name",
      isRepeatable: true,
      args: {
        name: "name",
        isVariadic: true,
      },
    },
    {
      name: "--edge-function",
      description: "Filter to specific edge functions by name or path",
      isRepeatable: true,
      args: {
        name: "name",
        isVariadic: true,
      },
    },
    {
      name: "--since",
      description:
        "Start of the historical log window. Accepts a duration (e.g. 10m, 1h, 24h) or an ISO 8601 timestamp. Defaults to 10m",
      args: {
        name: "time",
      },
    },
    {
      name: "--until",
      description:
        "End of the historical log window. Accepts a duration or an ISO 8601 timestamp (defaults to now)",
      args: {
        name: "time",
      },
    },
    {
      name: ["-f", "--follow"],
      description:
        "Stream logs in real time instead of showing historical logs",
    },
    {
      name: ["-u", "--url"],
      description:
        "Show logs for the deploy behind the given URL. Supports deploy permalinks and branch subdomains. Server logs support branch subdomains only",
      args: {
        name: "url",
      },
    },
    {
      name: ["-d", "--deploy-id"],
      description:
        "Show logs for a specific deploy by ID, including failed builds. Can be used with all sources except server",
      args: {
        name: "deploy-id",
      },
    },
    {
      name: ["-l", "--level"],
      description: "Log levels to include",
      isRepeatable: true,
      args: {
        name: "levels",
        isVariadic: true,
        suggestions: ["trace", "debug", "info", "warn", "error", "fatal"],
      },
    },
    jsonOption("Output logs as JSON Lines"),
  ],
});

const deprecatedLogsCommand = (
  name: Fig.SingleOrArray<string>
): Fig.Subcommand =>
  withBaseOptions({
    name,
    description: "Deprecated: use `netlify logs` instead",
    hidden: true,
    deprecated: {
      insertValue: "logs",
      description: "Replaced by `netlify logs`",
    },
  });

const open: Fig.Subcommand = withBaseOptions({
  name: "open",
  description: "Open settings for the project linked to the current folder",
  options: [
    {
      name: "--site",
      description: "Open project",
    },
    {
      name: "--admin",
      description: "Open Netlify project",
    },
  ],
});

const openAdmin: Fig.Subcommand = withBaseOptions({
  name: "open:admin",
  description: "Opens current project admin UI in Netlify",
});

const openSite: Fig.Subcommand = withBaseOptions({
  name: "open:site",
  description: "Opens current project url in browser",
});

const recipes: Fig.Subcommand = withBaseOptions(
  {
    name: "recipes",
    description:
      "Create and modify files in a project using pre-defined recipes",
    args: {
      name: "name",
      description: "Name of the recipe",
      isOptional: true,
    },
    options: [
      {
        name: ["-n", "--name"],
        description: "Recipe name to use",
        args: {
          name: "name",
        },
      },
    ],
  },
  { workspace: false }
);

const recipesList: Fig.Subcommand = withBaseOptions({
  name: "recipes:list",
  description:
    "List the recipes available to create and modify files in a project",
});

const serve: Fig.Subcommand = withBaseOptions({
  name: "serve",
  description:
    "Build the project for production and serve locally. This does not watch the code for changes, so if you need to rebuild your project then you must exit and run `serve` again",
  options: [
    {
      name: "--context",
      description: contextDescription(
        "environment variables",
        " (default: dev)"
      ),
      args: contextArg(),
    },
    {
      name: ["-p", "--port"],
      description: "Port of netlify dev",
      args: {
        name: "port",
      },
    },
    {
      name: ["-d", "--dir"],
      description: "Dir with static files",
      args: {
        name: "path",
        template: "folders",
      },
    },
    {
      name: ["-f", "--functions"],
      description: "Specify a functions folder to serve",
      args: {
        name: "folder",
        template: "folders",
      },
    },
    offlineOption,
    internalDisableEdgeFunctions,
    {
      name: "--functions-port",
      description: "Port of functions server",
      args: {
        name: "port",
      },
    },
    ...geoOptions,
  ],
});

const sites: Fig.Subcommand = withBaseOptions({
  name: "sites",
  description: "Handle various project operations",
});

const sitesCreate: Fig.Subcommand = withBaseOptions({
  name: "sites:create",
  description: "Create an empty project (advanced)",
  options: [
    {
      name: ["-n", "--name"],
      description: "Name of project",
      args: {
        name: "name",
      },
    },
    {
      name: ["-a", "--account-slug"],
      description: "Account slug to create the project under",
      args: {
        name: "slug",
      },
    },
    {
      name: ["-c", "--with-ci"],
      description: "Initialize CI hooks during project creation",
    },
    {
      name: ["-m", "--manual"],
      description: "Force manual CI setup. Used --with-ci flag",
    },
    {
      name: "--disable-linking",
      description: "Create the project without linking it to current directory",
    },
    {
      name: ["-p", "--prompt"],
      description:
        "Description of the site to create (delegates to `netlify create`)",
      args: {
        name: "prompt",
      },
    },
    jsonOption("Output project data as JSON"),
  ],
});

const sitesDelete: Fig.Subcommand = withBaseOptions({
  name: "sites:delete",
  description: "Delete a project",
  args: {
    name: "id",
    description: "Project ID to delete",
  },
  options: [
    {
      name: ["-f", "--force"],
      description: "Delete without prompting (useful for CI)",
      isDangerous: true,
    },
  ],
});

const sitesList: Fig.Subcommand = withBaseOptions({
  name: "sites:list",
  description: "List all projects you have access to",
  options: [jsonOption("Output project data as JSON")],
});

const sitesSearch: Fig.Subcommand = withBaseOptions({
  name: "sites:search",
  description: "Search for projects by name",
  args: {
    name: "search-term",
    description: "Full or partial project name to search for",
  },
  options: [jsonOption("Output project data as JSON")],
});

const status: Fig.Subcommand = withBaseOptions(
  {
    name: "status",
    description: "Print status information",
    options: [
      {
        name: "--verbose",
        description: "Output system info",
      },
      jsonOption("Output status information as JSON"),
    ],
  },
  { workspace: false }
);

const statusHooks: Fig.Subcommand = withBaseOptions({
  name: "status:hooks",
  description: "Print hook information of the linked project",
});

const switchCommand: Fig.Subcommand = withBaseOptions(
  {
    name: "switch",
    description: "Switch your active Netlify account",
    options: [
      {
        name: "--email",
        description: "Switch to the account matching this email address",
        args: {
          name: "email",
        },
      },
    ],
  },
  { workspace: false }
);

const teams: Fig.Subcommand = withBaseOptions(
  {
    name: "teams",
    description: "Handle various team operations",
  },
  { workspace: false }
);

const teamsList: Fig.Subcommand = withBaseOptions({
  name: "teams:list",
  description: "List all teams you have access to",
  options: [jsonOption("Output team data as JSON")],
});

const unlink: Fig.Subcommand = withBaseOptions({
  name: "unlink",
  description: "Unlink a local folder from a Netlify project",
});

const watch: Fig.Subcommand = withBaseOptions({
  name: "watch",
  description: "Watch for project deploy to finish",
});

const subcommands: Fig.Subcommand[] = [
  agents,
  agentsCreate,
  agentsList,
  agentsShow,
  agentsStop,
  api,
  blobs,
  blobsDelete,
  blobsGet,
  blobsList,
  blobsSet,
  build,
  claim,
  clone,
  completion,
  completionInstall,
  completionUninstall,
  create,
  database,
  deploy,
  dev,
  devExec,
  env,
  envClone,
  envGet,
  envImport,
  envList,
  envSet,
  envUnset,
  functions,
  functionsBuild,
  functionsCreate,
  functionsInvoke,
  functionsList,
  functionsServe,
  gitCredential,
  init,
  link,
  login,
  logout,
  logs,
  deprecatedLogsCommand(["logs:function", "logs:functions"]),
  deprecatedLogsCommand("logs:edge-functions"),
  deprecatedLogsCommand(["logs:deploy", "logs:build"]),
  open,
  openAdmin,
  openSite,
  recipes,
  recipesList,
  serve,
  sites,
  sitesCreate,
  sitesDelete,
  sitesList,
  sitesSearch,
  status,
  statusHooks,
  switchCommand,
  teams,
  teamsList,
  unlink,
  watch,
];

const completionSpec: Fig.Spec = {
  name: "netlify",
  description: "Netlify command line tool",
  subcommands: [
    ...subcommands,
    {
      name: "help",
      description: "List available sub-commands",
      args: {
        name: "subcommand",
        description: "The command to display help for",
        isOptional: true,
        suggestions: subcommands.filter((subcommand) => !subcommand.hidden),
      },
    },
  ],
  options: [
    {
      name: "--telemetry-disable",
      description: "Opt out of sharing usage data",
      exclusiveOn: ["--telemetry-enable"],
    },
    {
      name: "--telemetry-enable",
      description: "Allow your usage to help shape development",
      exclusiveOn: ["--telemetry-disable"],
    },
    {
      name: ["-V", "-v", "--version"],
      description: "Output the version number",
    },
  ],
};

export default completionSpec;
