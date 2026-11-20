// Appwrite CLI v28.14.0 (npm appwrite-cli "latest" and git tag 28.14.0 of appwrite/sdk-for-cli, released 2026-11-18; re-verified 2026-11-20).
// Source: static read of the Go/cobra command tree in internal/cmd of appwrite/sdk-for-cli at tag 28.14.0 (hand-written commands plus
// internal/cmd/services/*.go): every command path, alias, flag, shorthand, required flag, repeatable flag and enum was compared with this
// spec, and enum suggestions that the flag help lists explicitly (provider, output, interval, dimensions, response-type, compression,
// encryption, template deployment type, environment resources, MFA type) were added. The binary was not run.

const icon =
  "https://raw.githubusercontent.com/appwrite/appwrite/master/public/images/icon.svg";

const listOptions: Fig.Option[] = [
  {
    name: "--filter",
    description: "Filter using a simple comparison expression",
    args: { name: "filter" },
    isRepeatable: true,
  },
  {
    name: "--where",
    description: "Filter using a simple comparison expression",
    deprecated: { description: "Use --filter instead" },
    args: { name: "where" },
    isRepeatable: true,
  },
  {
    name: "--sort-asc",
    description: "Sort results by an attribute in ascending order",
    args: { name: "sort-asc" },
    isRepeatable: true,
  },
  {
    name: "--sort-desc",
    description: "Sort results by an attribute in descending order",
    args: { name: "sort-desc" },
    isRepeatable: true,
  },
  {
    name: "--limit",
    description: "Maximum number of results to return",
    args: { name: "limit" },
  },
  {
    name: "--offset",
    description: "Number of results to skip",
    args: { name: "offset" },
  },
  {
    name: "--cursor-after",
    description: "Return results after this cursor ID",
    args: { name: "cursor-after" },
  },
  {
    name: "--cursor-before",
    description: "Return results before this cursor ID",
    args: { name: "cursor-before" },
  },
];

const booleans = ["true", "false"];

const negatable = (name: string, description: string): Fig.Option[] => [
  { name: `--${name}`, description },
  {
    name: `--no-${name}`,
    description: `Don't ${description.charAt(0).toLowerCase()}${description.slice(1)}`,
  },
];

const enumStyle: Fig.Option = {
  name: "--enum-style",
  description:
    "How enums are declared; const emits an `as const` object and a union type",
  args: { name: "style", suggestions: ["enum", "const"] },
};

// `push <resource> all` means the same as --all.
const allArg: Fig.Arg = { name: "all", isOptional: true, suggestions: ["all"] };

const resourceAliases = {
  bucket: ["bucket", "buckets"],
  team: ["team", "teams"],
  topic: ["topic", "topics"],
  webhook: ["webhook", "webhooks"],
  table: ["table", "tables"],
  collection: ["collection", "collections"],
  function: ["function", "functions"],
  site: ["site", "sites"],
};

const prune: Fig.Option = {
  name: "--prune",
  description:
    "Delete databases, tables and columns missing from the config, and recreate columns whose type changed",
};

const attempts: Fig.Option = {
  name: ["-a", "--attempts"],
  description: "Max number of attempts before timing out (default: 30)",
  args: { name: "attempts" },
};

const pullCode = (label: string): Fig.Option[] => [
  {
    name: "--with-variables",
    description: `Pull ${label} variables into a .env file`,
  },
  ...negatable("code", "Pull the source code of the latest deployment"),
];

const pushDeployable = (
  singular: "function" | "site",
  label: string
): Fig.Subcommand => ({
  name: resourceAliases[singular],
  description: `Push ${label} in the current directory`,
  icon,
  args: allArg,
  options: [
    {
      name: ["-f", `--${singular}-id`],
      description: `ID of ${singular} to run`,
      args: { name: `${singular}-id` },
    },
    { name: "--force", description: "Skip confirmation prompts" },
    {
      name: ["-A", "--async"],
      description: `Don't wait for ${label} deployments status`,
    },
    ...negatable("code", `Push the ${singular}'s code`),
    ...negatable("logs", "Stream deployment build logs"),
    {
      name: "--activate",
      description: `Activate the ${singular}'s deployment after it is ready`,
      args: { name: "activate", isOptional: true, suggestions: booleans },
    },
    { name: "--with-variables", description: `Push ${singular} variables` },
  ],
});

const completionShells = ["bash", "zsh", "fish", "powershell"];

const completionSpec: Fig.Spec = {
  name: "appwrite",
  description:
    "Appwrite is an open-source self-hosted backend server that abstracts and simplifies complex and repetitive development tasks behind a very simple REST API",
  subcommands: [
    {
      name: "login",
      description: "Authenticate with your Appwrite account",
      icon,
      options: [
        {
          name: "--endpoint",
          description:
            "Endpoint to sign in to, or stored account endpoint with --switch",
          args: { name: "endpoint" },
        },
        {
          name: "--email",
          description:
            "Email for self hosted login, or stored account email with --switch",
          args: { name: "email" },
        },
        {
          name: "--password",
          description: "Password, for self hosted instances",
          args: { name: "password" },
        },
        {
          name: "--mfa",
          description:
            "MFA factor to challenge on self hosted instances; pass the code itself with --code",
          args: {
            name: "factor",
            suggestions: ["email", "phone", "totp", "recoveryCode"],
          },
        },
        {
          name: "--code",
          description:
            "MFA code from the factor chosen with --mfa, on self hosted instances",
          args: { name: "code" },
        },
        {
          name: "--self-signed",
          description:
            "Accept a self-signed certificate on self hosted instances",
          args: { name: "self-signed", suggestions: booleans },
        },
        {
          name: "--switch",
          description: "Switch to another signed-in account",
        },
        { name: "--new", description: "Sign in to another account" },
      ],
    },
    {
      name: "logout",
      description: "Log out of your Appwrite account",
      icon,
      options: [
        { name: "--all", description: "Sign out of every stored session" },
      ],
    },
    {
      name: "whoami",
      description: "Show the currently authenticated account",
      icon,
    },
    {
      name: "sessions",
      description: "List the sessions stored in the CLI preferences",
      icon,
    },
    {
      name: "client",
      description: "Configure the CLI's endpoint, project and API key",
      icon,
      options: [
        {
          name: ["-e", "--endpoint"],
          description: "Set your Appwrite server endpoint",
          args: { name: "endpoint" },
        },
        {
          name: ["-p", "--project-id"],
          description: "Set your Appwrite project ID",
          args: { name: "project-id" },
        },
        {
          name: "--environment-id",
          description:
            "Set the environment of the project to act in (empty for the project itself)",
          args: { name: "environment-id" },
        },
        {
          name: ["-k", "--key"],
          description: "Set your Appwrite server's API key",
          args: { name: "key" },
        },
        {
          name: "--self-signed",
          description: "Configure the CLI to use a self-signed certificate",
          args: { name: "self-signed", suggestions: booleans },
        },
        { name: ["-d", "--debug"], description: "Print CLI debug information" },
        { name: ["-r", "--reset"], description: "Reset the CLI configuration" },
      ],
    },
    {
      name: "init",
      description: "Scaffold a project, function, site, or resource",
      icon,
      subcommands: [
        {
          name: "project",
          description: "Init a new Appwrite project",
          icon,
          options: [
            {
              name: "--organization-id",
              description: "Appwrite organization ID",
              args: { name: "organization-id" },
            },
            {
              name: "--project-id",
              description: "Appwrite project ID",
              args: { name: "project-id" },
            },
            {
              name: "--project-name",
              description: "Appwrite project name",
              args: { name: "project-name" },
            },
            {
              name: "--environment-id",
              description:
                "ID of the project environment to act in, instead of the project itself",
              args: { name: "environment-id" },
            },
            {
              name: "--region",
              description:
                "Cloud region to create the project in. Defaults to the one closest to you",
              args: { name: "region" },
            },
          ],
        },
        {
          name: resourceAliases.function,
          description: "Init a new Appwrite function",
          icon,
          options: [
            {
              name: "--name",
              description: "Function name",
              args: { name: "name" },
            },
            {
              name: "--function-id",
              description: "Function ID or unique()",
              args: { name: "function-id", suggestions: ["unique()"] },
            },
            {
              name: "--runtime",
              description: "Execution runtime",
              args: { name: "runtime" },
            },
            {
              name: "--build-specification",
              description: "Build CPU and memory specification",
              args: { name: "build-specification" },
            },
            {
              name: "--runtime-specification",
              description: "Runtime CPU and memory specification",
              args: { name: "runtime-specification" },
            },
            ...negatable("public", "Allow anyone to execute the function"),
            {
              name: "--source",
              description: "Source workflow",
              args: { name: "source", suggestions: ["local", "github"] },
            },
            {
              name: "--domain-target",
              description: "Function endpoint",
              args: { name: "domain-target", suggestions: ["region", "edge"] },
            },
            {
              name: "--domain",
              description:
                "Generated function domain label, without its suffix",
              args: { name: "domain" },
            },
            {
              name: "--installation-id",
              description: "Appwrite GitHub installation ID",
              args: { name: "installation-id" },
            },
            {
              name: "--repository-mode",
              description: "GitHub repository mode",
              args: {
                name: "repository-mode",
                suggestions: ["existing", "new"],
              },
            },
            {
              name: "--provider-repository-id",
              description: "GitHub provider repository ID",
              args: { name: "provider-repository-id" },
            },
            {
              name: "--repository-name",
              description: "Name of a new GitHub repository",
              args: { name: "repository-name" },
            },
            ...negatable(
              "repository-private",
              "Create a private GitHub repository"
            ),
            {
              name: "--provider-branch",
              description: "Production branch for Git deployments",
              args: { name: "provider-branch" },
            },
            {
              name: "--provider-root-directory",
              description: "Path to the function in the Git repository",
              args: { name: "provider-root-directory" },
            },
            {
              name: "--provider-silent-mode",
              description: "Disable VCS commit and pull request comments",
            },
            {
              name: "--env-file",
              description: "Import function variables from a .env file",
              args: { name: "env-file", template: "filepaths" },
            },
            {
              name: "--deploy",
              description:
                "Create and deploy the function after initialization",
            },
          ],
        },
        {
          name: resourceAliases.site,
          description: "Init a new Appwrite site",
          icon,
        },
        {
          name: ["skill", "skills"],
          description: "Install Appwrite skills for AI coding agents",
          icon,
          options: [
            {
              name: "--all",
              description: "Install every available Appwrite skill",
            },
            {
              name: "--skill",
              description: "Skill directory name to install",
              args: { name: "skill" },
              isRepeatable: true,
            },
            {
              name: "--agent",
              description:
                "Agent directory to install to. Defaults to .agents for non-interactive installs",
              args: { name: "agent", suggestions: [".agents", ".claude"] },
              isRepeatable: true,
            },
            {
              name: "--method",
              description:
                "Installation method. Defaults to symlink for non-interactive installs",
              args: { name: "method", suggestions: ["symlink", "copy"] },
            },
          ],
        },
        {
          name: "apns",
          description:
            "Set up Apple Push Notification service for Appwrite Push",
          icon,
          options: [
            {
              name: "--key-path",
              description: "Path to an APNs auth key (.p8)",
              args: { name: "key-path", template: "filepaths" },
              exclusiveOn: ["--create-key", "--reset"],
            },
            {
              name: "--key-id",
              description: "APNs key ID",
              args: { name: "key-id" },
              exclusiveOn: ["--create-key", "--reset"],
            },
            {
              name: "--team-id",
              description: "Apple Developer team ID",
              args: { name: "team-id" },
            },
            {
              name: "--bundle-id",
              description: "Bundle ID of the iOS app",
              args: { name: "bundle-id" },
            },
            {
              name: "--create-key",
              description:
                "Create the APNs key by signing in with your Apple ID (experimental)",
              exclusiveOn: ["--key-path", "--key-id"],
            },
            {
              name: "--environment",
              description: "APNs environment to set up",
              args: {
                name: "environment",
                suggestions: ["production", "sandbox", "all"],
                default: "all",
              },
            },
            {
              name: "--provider",
              description: "How --create-key creates the key",
              args: {
                name: "provider",
                suggestions: ["appwrite", "expo", "fastlane"],
              },
            },
            {
              name: "--reset",
              description:
                "Sign in to Apple again instead of reusing the saved sign-in, and create the key (implies --create-key)",
              exclusiveOn: ["--key-path", "--key-id"],
            },
            {
              name: "--register-app-id",
              description:
                "Register the bundle ID as an App ID with Push Notifications in the Apple Developer portal (experimental)",
            },
          ],
        },
        {
          name: resourceAliases.bucket,
          description: "Init a new Appwrite bucket",
          icon,
        },
        {
          name: resourceAliases.team,
          description: "Init a new Appwrite team",
          icon,
        },
        {
          name: resourceAliases.topic,
          description: "Init a new Appwrite topic",
          icon,
        },
        {
          name: resourceAliases.collection,
          description: "Init a new Appwrite collection",
          icon,
        },
        {
          name: resourceAliases.table,
          description: "Init a new Appwrite table",
          icon,
        },
      ],
    },
    {
      name: "pull",
      description: "Pull remote project resources into this directory",
      icon,
      options: [
        {
          name: ["-a", "--all"],
          description: "Pull every resource in the project",
        },
      ],
      subcommands: [
        {
          name: "all",
          description: "Pull all resources from your Appwrite project",
          icon,
        },
        {
          name: "settings",
          description: "Pull your Appwrite project settings",
          icon,
        },
        {
          name: resourceAliases.bucket,
          description: "Pull buckets from your Appwrite project",
          icon,
        },
        {
          name: resourceAliases.team,
          description: "Pull teams from your Appwrite project",
          icon,
        },
        {
          name: resourceAliases.topic,
          description: "Pull topics from your Appwrite project",
          icon,
        },
        {
          name: resourceAliases.webhook,
          description: "Pull webhooks from your Appwrite project",
          icon,
        },
        {
          name: "analytics",
          description: "Pull analytics properties from your Appwrite project",
          icon,
        },
        {
          name: resourceAliases.table,
          description: "Pull tables from your Appwrite project",
          icon,
        },
        {
          name: resourceAliases.collection,
          description: "Pull collections from your Appwrite project",
          icon,
        },
        {
          name: resourceAliases.function,
          description: "Pull functions from your Appwrite project",
          icon,
          options: pullCode("functions"),
        },
        {
          name: resourceAliases.site,
          description: "Pull sites from your Appwrite project",
          icon,
          options: pullCode("sites"),
        },
      ],
    },
    {
      name: "push",
      description: "Push local project resources",
      icon,
      options: [
        {
          name: ["-a", "--all"],
          description: "Push every resource in the project config",
        },
        prune,
      ],
      subcommands: [
        {
          name: "all",
          description: "Push all resources in the current project",
          icon,
          options: [
            ...negatable("logs", "Stream deployment build logs"),
            prune,
          ],
        },
        {
          name: "settings",
          description: "Push project name, services and auth settings",
          icon,
        },
        {
          name: resourceAliases.bucket,
          description: "Push buckets in the current project",
          icon,
          args: allArg,
        },
        {
          name: resourceAliases.team,
          description: "Push teams in the current project",
          icon,
          args: allArg,
        },
        {
          name: resourceAliases.webhook,
          description: "Push webhooks in the current project",
          icon,
          args: allArg,
        },
        {
          name: resourceAliases.topic,
          description: "Push messaging topics in the current project",
          icon,
          args: allArg,
        },
        {
          name: "analytics",
          description: "Push analytics properties in the current project",
          icon,
          args: allArg,
        },
        {
          name: resourceAliases.table,
          description: "Push tables in the current project",
          icon,
          args: allArg,
          options: [attempts, prune],
        },
        {
          name: resourceAliases.collection,
          description: "Push collections in the current project",
          icon,
          args: allArg,
          options: [attempts, prune],
          deprecated: { description: "Use `push tables` instead" },
        },
        pushDeployable("function", "functions"),
        pushDeployable("site", "sites"),
      ],
    },
    {
      name: "run",
      description: "Run the project locally for development",
      icon,
      subcommands: [
        {
          name: resourceAliases.function,
          description: "Run functions in the current directory",
          icon,
          options: [
            {
              name: "--function-id",
              description: "ID of function to run",
              args: { name: "function-id" },
            },
            {
              name: "--port",
              description: "Local port",
              args: { name: "port" },
            },
            {
              name: "--user-id",
              description: "ID of user to impersonate",
              args: { name: "user-id" },
            },
            {
              name: "--with-variables",
              description: "Run with function variables from function settings",
            },
            ...negatable(
              "reload",
              "Live reload the server when function files change"
            ),
          ],
        },
      ],
    },
    {
      name: "types",
      description: "Generate TypeScript types for your project",
      icon,
      args: { name: "output-directory", template: "folders" },
      options: [
        {
          name: ["-l", "--language"],
          description: "The language of the types",
          args: {
            name: "language",
            default: "auto",
            suggestions: [
              "auto",
              "ts",
              "js",
              "php",
              "kotlin",
              "swift",
              "java",
              "dart",
              "cs",
              "python",
            ],
          },
        },
        {
          name: ["-s", "--strict"],
          description:
            "Enable strict mode to automatically convert field names to follow language conventions",
        },
        enumStyle,
      ],
    },
    {
      name: "generate",
      description: "Generate a type-safe SDK from your project config",
      icon,
      options: [
        {
          name: ["-o", "--output"],
          description: "Output directory for generated files",
          args: { name: "output", template: "folders", default: "generated" },
        },
        {
          name: ["-l", "--language"],
          description: "Target language for SDK generation",
          args: { name: "language", suggestions: ["typescript"] },
        },
        {
          name: "--server",
          description: "Override server-side generation",
          args: {
            name: "server",
            default: "auto",
            suggestions: ["auto", "true", "false"],
          },
        },
        {
          name: "--appwrite-import-source",
          description:
            "Override Appwrite import source in generated files. Auto-detected from package.json/deno.json if not provided",
          args: {
            name: "source",
            suggestions: ["node-appwrite", "appwrite", "@appwrite.io/console"],
          },
        },
        {
          name: "--import-extension",
          description:
            "Override import file extension in generated files (.js for ESM, empty string for CJS)",
          args: { name: "extension", suggestions: [".js"] },
        },
        enumStyle,
      ],
    },
    {
      name: "terminal",
      description: "Browse your projects in an interactive terminal interface",
      icon,
      options: [
        {
          name: "--project-id",
          description:
            "Project ID to open, instead of APPWRITE_PROJECT_ID or the project config's",
          args: { name: "ID" },
        },
        {
          name: "--theme",
          description:
            "Color theme: auto follows the terminal, dark or light also paint the background",
          args: {
            name: "theme",
            default: "auto",
            suggestions: ["auto", "dark", "light"],
          },
        },
        {
          name: "--debug",
          description: "Write debug logs to debug.log in the working directory",
        },
      ],
    },
    {
      name: "update",
      description: "Update the CLI to the latest version",
      icon,
      options: [
        {
          name: ["-f", "--force"],
          description:
            "Update even if the target is not newer or the binary location looks unexpected",
        },
        {
          name: "--manual",
          description:
            "Show manual update instructions instead of auto-updating",
        },
      ],
    },
    {
      name: "completion",
      description: "Generate shell completion scripts",
      icon,
      subcommands: [
        ...completionShells.map((shell): Fig.Subcommand => ({
          name: shell,
          description: `Generate the autocompletion script for ${shell}`,
          icon,
          options: [
            {
              name: "--no-descriptions",
              description: "Disable completion descriptions",
            },
          ],
        })),
        {
          name: "install",
          description: "Install shell completion script",
          icon,
          args: {
            name: "shell",
            isOptional: true,
            suggestions: ["zsh", "bash", "fish"],
          },
        },
      ],
    },
    {
      name: "help",
      description: "Help about any command",
      icon,
      args: { name: "command", isOptional: true },
    },
    {
      name: "list-organizations",
      description: "Organizations your session can access",
      icon,
      options: [
        {
          name: "--limit",
          description: "Maximum number of organizations to return",
          args: { name: "limit" },
        },
        {
          name: "--offset",
          description:
            "Number of organizations to skip before returning results",
          args: { name: "offset" },
        },
        {
          name: "--search",
          description: "Search term to filter your list results",
          args: { name: "search" },
        },
      ],
    },
    {
      name: "list-projects",
      description: "Projects your session can access",
      icon,
      options: [
        {
          name: "--limit",
          description: "Maximum number of projects to return",
          args: { name: "limit" },
        },
        {
          name: "--offset",
          description: "Number of projects to skip before returning results",
          args: { name: "offset" },
        },
        {
          name: "--search",
          description: "Search term to filter your list results",
          args: { name: "search" },
        },
        {
          name: "--organization-id",
          description: "Only show projects in this organization",
          args: { name: "organization-id" },
        },
      ],
    },
    {
      name: "account",
      description: "Manage your own user account",
      icon,
      subcommands: [
        { name: "get", description: "Get the currently logged in user", icon },
        {
          name: "create",
          description:
            "Use this endpoint to allow a new user to register a new account in your project",
          icon,
          options: [
            {
              name: "--user-id",
              description: "User ID",
              args: { name: "user-id" },
              isRequired: true,
            },
            {
              name: "--email",
              description: "User email",
              args: { name: "email" },
              isRequired: true,
            },
            {
              name: "--password",
              description: "New user password",
              args: { name: "password" },
              isRequired: true,
            },
            {
              name: "--name",
              description: "User name",
              args: { name: "name" },
            },
          ],
        },
        {
          name: "list-consents",
          description:
            "Get a list of the OAuth2 consents the current user has given to third-party apps",
          icon,
          options: [
            {
              name: "--queries",
              description:
                "Array of query strings generated using the Query class provided by the SDK",
              args: { name: "queries" },
              isRepeatable: true,
            },
            {
              name: "--total",
              description:
                "When set to false, the total count returned will be 0 and will not be calculated",
            },
            ...listOptions,
          ],
        },
        {
          name: "get-consent",
          description:
            "Get an OAuth2 consent the current user has given to a third-party app by its unique ID",
          icon,
          options: [
            {
              name: "--consent-id",
              description: "Consent unique ID",
              args: { name: "consent-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "delete-consent",
          description: "Delete an OAuth2 consent by its unique ID",
          icon,
          options: [
            {
              name: "--consent-id",
              description: "Consent unique ID",
              args: { name: "consent-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "list-consent-tokens",
          description:
            "Get a list of the token families issued under an OAuth2 consent",
          icon,
          options: [
            {
              name: "--consent-id",
              description: "Consent unique ID",
              args: { name: "consent-id" },
              isRequired: true,
            },
            {
              name: "--queries",
              description:
                "Array of query strings generated using the Query class provided by the SDK",
              args: { name: "queries" },
              isRepeatable: true,
            },
            {
              name: "--total",
              description:
                "When set to false, the total count returned will be 0 and will not be calculated",
            },
            ...listOptions,
          ],
        },
        {
          name: "get-consent-token",
          description:
            "Get a token family issued under an OAuth2 consent by its unique ID",
          icon,
          options: [
            {
              name: "--consent-id",
              description: "Consent unique ID",
              args: { name: "consent-id" },
              isRequired: true,
            },
            {
              name: "--token-id",
              description: "Token unique ID",
              args: { name: "token-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "delete-consent-token",
          description:
            "Delete a token family issued under an OAuth2 consent by its unique ID",
          icon,
          options: [
            {
              name: "--consent-id",
              description: "Consent unique ID",
              args: { name: "consent-id" },
              isRequired: true,
            },
            {
              name: "--token-id",
              description: "Token unique ID",
              args: { name: "token-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "create-device",
          description: "Create an account switching device",
          icon,
        },
        {
          name: "get-device",
          description:
            "Get the account switching device for the current browser, including every session it holds, the name of the user each session belongs to, and the ID of the active session",
          icon,
          options: [
            {
              name: "--device-id",
              description: "Device ID",
              args: { name: "device-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "delete-device",
          description:
            "Delete the account switching device for the current browser",
          icon,
          options: [
            {
              name: "--device-id",
              description: "Device ID",
              args: { name: "device-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "update-device-session",
          description:
            "Switch the active account on an account switching device to one of the sessions it holds",
          icon,
          options: [
            {
              name: "--device-id",
              description: "Device ID",
              args: { name: "device-id" },
              isRequired: true,
            },
            {
              name: "--session-id",
              description:
                "ID of the session, held by the device, to make active",
              args: { name: "session-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "update-email",
          description: "Update currently logged in user account email address",
          icon,
          options: [
            {
              name: "--email",
              description: "User email",
              args: { name: "email" },
              isRequired: true,
            },
            {
              name: "--password",
              description: "User password",
              args: { name: "password" },
              isRequired: true,
            },
          ],
        },
        {
          name: "list-identities",
          description:
            "Get the list of identities for the currently logged in user",
          icon,
          options: [
            {
              name: "--queries",
              description:
                "Array of query strings generated using the Query class provided by the SDK",
              args: { name: "queries" },
              isRepeatable: true,
            },
            {
              name: "--total",
              description:
                "When set to false, the total count returned will be 0 and will not be calculated",
            },
            ...listOptions,
          ],
        },
        {
          name: "delete-identity",
          description: "Delete an identity by its unique ID",
          icon,
          options: [
            {
              name: "--identity-id",
              description: "Identity ID",
              args: { name: "identity-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "list-memberships",
          description:
            "Get the team memberships of the currently logged in user",
          icon,
          options: [
            {
              name: "--queries",
              description:
                "Array of query strings generated using the Query class provided by the SDK",
              args: { name: "queries" },
              isRepeatable: true,
            },
            {
              name: "--total",
              description:
                "When set to false, the total count returned will be 0 and will not be calculated",
            },
            ...listOptions,
          ],
        },
        {
          name: "update-mfa",
          description: "Enable or disable MFA on an account",
          icon,
          options: [
            {
              name: "--mfa",
              description: "Enable or disable MFA",
              isRequired: true,
            },
          ],
        },
        {
          name: "create-mfa-authenticator",
          description: "Add an authenticator app to be used as an MFA factor",
          icon,
          options: [
            {
              name: "--type",
              description: "Type of authenticator",
              args: { name: "type", suggestions: ["totp"] },
              isRequired: true,
            },
          ],
        },
        {
          name: "update-mfa-authenticator",
          description:
            "Verify an authenticator app after adding it using the add authenticator method",
          icon,
          options: [
            {
              name: "--type",
              description: "Type of authenticator",
              args: { name: "type" },
              isRequired: true,
            },
            {
              name: "--otp",
              description: "Valid verification token",
              args: { name: "otp" },
              isRequired: true,
            },
          ],
        },
        {
          name: "delete-mfa-authenticator",
          description: "Delete an authenticator for a user by ID",
          icon,
          options: [
            {
              name: "--type",
              description: "Type of authenticator",
              args: { name: "type" },
              isRequired: true,
            },
          ],
        },
        {
          name: "create-mfa-challenge",
          description: "Begin the process of MFA verification after sign-in",
          icon,
          options: [
            {
              name: "--factor",
              description: "Factor used for verification",
              args: {
                name: "factor",
                suggestions: [
                  "email",
                  "phone",
                  "totp",
                  "recoveryCode",
                  "custom",
                ],
              },
              isRequired: true,
            },
          ],
        },
        {
          name: "update-mfa-challenge",
          description:
            "Complete the MFA challenge by providing the one-time password",
          icon,
          options: [
            {
              name: "--challenge-id",
              description: "ID of the challenge",
              args: { name: "challenge-id" },
              isRequired: true,
            },
            {
              name: "--otp",
              description: "Valid verification token",
              args: { name: "otp" },
              isRequired: true,
            },
          ],
        },
        {
          name: "list-mfa-factors",
          description:
            "List the factors available on the account to be used as a MFA challange",
          icon,
        },
        {
          name: "get-mfa-recovery-codes",
          description:
            "Get recovery codes that can be used as backup for MFA flow",
          icon,
        },
        {
          name: "create-mfa-recovery-codes",
          description: "Generate recovery codes as backup for MFA flow",
          icon,
        },
        {
          name: "update-mfa-recovery-codes",
          description:
            "Regenerate recovery codes that can be used as backup for MFA flow",
          icon,
        },
        {
          name: "update-name",
          description: "Update currently logged in user account name",
          icon,
          options: [
            {
              name: "--name",
              description: "User name",
              args: { name: "name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "list-passkeys",
          description:
            "Get the list of verified passkeys registered by the currently logged in user",
          icon,
          options: [
            {
              name: "--queries",
              description:
                "Array of query strings generated using the Query class provided by the SDK",
              args: { name: "queries" },
              isRepeatable: true,
            },
            {
              name: "--total",
              description:
                "When set to false, the total count returned will be 0 and will not be calculated",
            },
            ...listOptions,
          ],
        },
        {
          name: "create-passkey",
          description:
            "Start registering a passkey for the currently logged in user",
          icon,
          options: [
            {
              name: "--passkey-id",
              description: "Passkey ID",
              args: { name: "passkey-id" },
            },
            {
              name: "--name",
              description: "Passkey name, shown when listing passkeys",
              args: { name: "name" },
            },
          ],
        },
        {
          name: "get-passkey",
          description:
            "Get a verified passkey of the currently logged in user by its unique ID",
          icon,
          options: [
            {
              name: "--passkey-id",
              description: "Passkey ID",
              args: { name: "passkey-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "update-passkey",
          description: "Rename a passkey of the currently logged in user",
          icon,
          options: [
            {
              name: "--passkey-id",
              description: "Passkey ID",
              args: { name: "passkey-id" },
              isRequired: true,
            },
            {
              name: "--name",
              description: "Passkey name",
              args: { name: "name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "delete-passkey",
          description: "Delete a passkey from the currently logged in user",
          icon,
          options: [
            {
              name: "--passkey-id",
              description: "Passkey ID",
              args: { name: "passkey-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "update-passkey-verification",
          description:
            "Complete a passkey registration started with Create passkey",
          icon,
          options: [
            {
              name: "--passkey-id",
              description: "Passkey ID",
              args: { name: "passkey-id" },
              isRequired: true,
            },
            {
              name: "--credential",
              description:
                "Registration credential returned by the authenticator, in the JSON form produced by `PublicKeyCredential.toJSON()`",
              args: { name: "credential" },
              isRequired: true,
            },
          ],
        },
        {
          name: "update-password",
          description: "Update currently logged in user password",
          icon,
          options: [
            {
              name: "--password",
              description: "New user password",
              args: { name: "password" },
              isRequired: true,
            },
            {
              name: "--old-password",
              description: "Current user password",
              args: { name: "old-password" },
            },
          ],
        },
        {
          name: "update-phone",
          description: "Update the currently logged in user's phone number",
          icon,
          options: [
            {
              name: "--phone",
              description: "Phone number",
              args: { name: "phone" },
              isRequired: true,
            },
            {
              name: "--password",
              description: "User password",
              args: { name: "password" },
              isRequired: true,
            },
          ],
        },
        {
          name: "get-prefs",
          description:
            "Get the preferences as a key-value object for the currently logged in user",
          icon,
        },
        {
          name: "update-prefs",
          description: "Update currently logged in user account preferences",
          icon,
          options: [
            {
              name: "--prefs",
              description: "Prefs key-value JSON object",
              args: { name: "prefs" },
              isRequired: true,
            },
          ],
        },
        {
          name: "create-recovery",
          description:
            "Sends the user an email with a temporary secret key for password reset",
          icon,
          options: [
            {
              name: "--email",
              description: "User email",
              args: { name: "email" },
              isRequired: true,
            },
            {
              name: "--url",
              description:
                "URL to redirect the user back to your app from the recovery email",
              args: { name: "url" },
              isRequired: true,
            },
          ],
        },
        {
          name: "update-recovery",
          description:
            "Use this endpoint to complete the user account password reset",
          icon,
          options: [
            {
              name: "--user-id",
              description: "User ID",
              args: { name: "user-id" },
              isRequired: true,
            },
            {
              name: "--secret",
              description: "Valid reset token",
              args: { name: "secret" },
              isRequired: true,
            },
            {
              name: "--password",
              description: "New user password",
              args: { name: "password" },
              isRequired: true,
            },
          ],
        },
        {
          name: "create-recovery-otp",
          description:
            "Use this endpoint to send a 6-digit password recovery code to the user's email address",
          icon,
          options: [
            {
              name: "--email",
              description: "User email",
              args: { name: "email" },
              isRequired: true,
            },
            { name: "--phrase", description: "Toggle for security phrase" },
          ],
        },
        {
          name: "update-recovery-otp",
          description:
            "Use this endpoint to complete the user password recovery process using the 6-digit code that was emailed by createRecoveryOTP (https://appwrite.io/docs/references/cloud/client-web/account#createRecoveryOTP)",
          icon,
          options: [
            {
              name: "--user-id",
              description: "User ID",
              args: { name: "user-id" },
              isRequired: true,
            },
            {
              name: "--secret",
              description: "Valid recovery OTP code",
              args: { name: "secret" },
              isRequired: true,
            },
            {
              name: "--password",
              description: "New user password",
              args: { name: "password" },
              isRequired: true,
            },
          ],
        },
        {
          name: "list-sessions",
          description:
            "Get the list of active sessions across different devices for the currently logged in user",
          icon,
          options: [
            {
              name: "--total",
              description:
                "When set to false, the total count returned will be 0 and will not be calculated",
            },
          ],
        },
        {
          name: "delete-sessions",
          description:
            "Delete all sessions from the user account and remove any sessions cookies from the end client",
          icon,
          options: [
            {
              name: "--current",
              description: "Delete the current session too",
            },
          ],
        },
        {
          name: "create-anonymous-session",
          description:
            "Use this endpoint to allow a new user to register an anonymous account in your project",
          icon,
        },
        {
          name: "create-email-password-session",
          description:
            "Allow the user to login into their account by providing a valid email and password combination",
          icon,
          options: [
            {
              name: "--email",
              description: "User email",
              args: { name: "email" },
              isRequired: true,
            },
            {
              name: "--password",
              description: "User password",
              args: { name: "password" },
              isRequired: true,
            },
            {
              name: "--duration",
              description: "Session length in seconds",
              args: { name: "duration" },
            },
          ],
        },
        {
          name: "create-id-token-session",
          description:
            "Allow the user to login to their account using an OpenID Connect ID token obtained natively from the OAuth2 provider, for example via Google Credential Manager on Android or Sign in with Apple on iOS",
          icon,
          options: [
            {
              name: "--provider",
              description: "OAuth2 provider that issued the ID token",
              args: { name: "provider", suggestions: ["apple", "google"] },
              isRequired: true,
            },
            {
              name: "--id-token",
              description:
                "OpenID Connect ID token (JWT) obtained natively from the provider, for example via Google Credential Manager or Sign in with Apple",
              args: { name: "id-token" },
              isRequired: true,
            },
            {
              name: "--nonce",
              description: "Raw nonce used when requesting the ID token",
              args: { name: "nonce" },
            },
            {
              name: "--access-token",
              description:
                "Provider access token to store alongside the session for calling provider APIs",
              args: { name: "access-token" },
            },
            {
              name: "--access-token-expiry",
              description:
                "Seconds until the provider access token expires, as reported by the provider",
              args: { name: "access-token-expiry" },
            },
            {
              name: "--name",
              description: "User name",
              args: { name: "name" },
            },
          ],
        },
        {
          name: "create-ldap-session",
          description:
            "Allow the user to login into their account by providing the username and password they use in the project's LDAP directory",
          icon,
          options: [
            {
              name: "--username",
              description:
                "Directory username, matched against the username attribute of the project's LDAP configuration",
              args: { name: "username" },
              isRequired: true,
            },
            {
              name: "--password",
              description: "Directory password",
              args: { name: "password" },
              isRequired: true,
            },
            {
              name: "--duration",
              description: "Session length in seconds",
              args: { name: "duration" },
            },
          ],
        },
        {
          name: "update-magic-url-session",
          description: "Use this endpoint to create a session from token",
          icon,
          options: [
            {
              name: "--user-id",
              description: "User ID",
              args: { name: "user-id" },
              isRequired: true,
            },
            {
              name: "--secret",
              description: "Valid verification token",
              args: { name: "secret" },
              isRequired: true,
            },
          ],
        },
        {
          name: "update-phone-session",
          description: "Use this endpoint to create a session from token",
          icon,
          options: [
            {
              name: "--user-id",
              description: "User ID",
              args: { name: "user-id" },
              isRequired: true,
            },
            {
              name: "--secret",
              description: "Valid verification token",
              args: { name: "secret" },
              isRequired: true,
            },
          ],
        },
        {
          name: "create-session",
          description: "Use this endpoint to create a session from token",
          icon,
          options: [
            {
              name: "--user-id",
              description: "User ID",
              args: { name: "user-id" },
              isRequired: true,
            },
            {
              name: "--secret",
              description: "Secret of a token generated by login methods",
              args: { name: "secret" },
              isRequired: true,
            },
          ],
        },
        {
          name: "get-session",
          description:
            "Use this endpoint to get a logged in user's session using a Session ID",
          icon,
          options: [
            {
              name: "--session-id",
              description: "Session ID",
              args: { name: "session-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "update-session",
          description: "Use this endpoint to extend a session's length",
          icon,
          options: [
            {
              name: "--session-id",
              description: "Session ID",
              args: { name: "session-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "delete-session",
          description: "Logout the user",
          icon,
          options: [
            {
              name: "--session-id",
              description: "Session ID",
              args: { name: "session-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "update-status",
          description: "Block the currently logged in user account",
          icon,
        },
        {
          name: "create-email-token",
          description:
            "Sends the user an email with a secret key for creating a session",
          icon,
          options: [
            {
              name: "--user-id",
              description: "User ID",
              args: { name: "user-id" },
              isRequired: true,
            },
            {
              name: "--email",
              description: "User email",
              args: { name: "email" },
              isRequired: true,
            },
            { name: "--phrase", description: "Toggle for security phrase" },
          ],
        },
        {
          name: "create-magic-url-token",
          description:
            "Sends the user an email with a secret key for creating a session",
          icon,
          options: [
            {
              name: "--user-id",
              description: "Unique Id",
              args: { name: "user-id" },
              isRequired: true,
            },
            {
              name: "--email",
              description: "User email",
              args: { name: "email" },
              isRequired: true,
            },
            {
              name: "--url",
              description:
                "URL to redirect the user back to your app from the magic URL login",
              args: { name: "url" },
            },
            { name: "--phrase", description: "Toggle for security phrase" },
          ],
        },
        {
          name: "create-o-auth-2-token",
          description:
            "Allow the user to login to their account using the OAuth2 provider of their choice",
          icon,
          options: [
            {
              name: "--provider",
              description: "OAuth2 Provider",
              args: {
                name: "provider",
                suggestions: [
                  "amazon",
                  "apple",
                  "appwrite",
                  "atlassian",
                  "auth0",
                  "authentik",
                  "autodesk",
                  "bitbucket",
                  "bitly",
                  "box",
                  "cloudflare",
                  "dailymotion",
                  "discord",
                  "disqus",
                  "dropbox",
                  "etsy",
                  "facebook",
                  "figma",
                  "fusionauth",
                  "github",
                  "gitlab",
                  "google",
                  "huggingface",
                  "instagram",
                  "kakao",
                  "keycloak",
                  "kick",
                  "line",
                  "linear",
                  "linkedin",
                  "microsoft",
                  "naver",
                  "netlify",
                  "notion",
                  "oidc",
                  "okta",
                  "patreon",
                  "paypal",
                  "paypalSandbox",
                  "podio",
                  "railway",
                  "reddit",
                  "resend",
                  "roblox",
                  "salesforce",
                  "slack",
                  "spotify",
                  "strava",
                  "stripe",
                  "tiktok",
                  "tradeshift",
                  "tradeshiftBox",
                  "twitch",
                  "vercel",
                  "vipps",
                  "vippsSandbox",
                  "vk",
                  "webflow",
                  "wordpress",
                  "workos",
                  "x",
                  "yahoo",
                  "yammer",
                  "yandex",
                  "zoho",
                  "zoom",
                ],
              },
              isRequired: true,
            },
            {
              name: "--success",
              description:
                "URL to redirect back to your app after a successful login attempt",
              args: { name: "success" },
            },
            {
              name: "--failure",
              description:
                "URL to redirect back to your app after a failed login attempt",
              args: { name: "failure" },
            },
            {
              name: "--scopes",
              description: "A list of custom OAuth2 scopes",
              args: { name: "scopes" },
              isRepeatable: true,
            },
            {
              name: "--state",
              description:
                "An opaque value your app generates and keeps, for example in a cookie",
              args: { name: "state" },
            },
          ],
        },
        {
          name: "create-passkey-token",
          description: "Start signing in with a passkey",
          icon,
        },
        {
          name: "update-passkey-token",
          description:
            "Complete a passkey sign-in started with Create passkey token",
          icon,
          options: [
            {
              name: "--challenge-id",
              description: "Challenge ID returned by createPasskeyToken",
              args: { name: "challenge-id" },
              isRequired: true,
            },
            {
              name: "--credential",
              description:
                "Authentication credential returned by the authenticator, in the JSON form produced by `PublicKeyCredential.toJSON()`",
              args: { name: "credential" },
              isRequired: true,
            },
          ],
        },
        {
          name: "create-phone-token",
          description:
            "Sends the user an SMS with a secret key for creating a session",
          icon,
          options: [
            {
              name: "--user-id",
              description: "Unique Id",
              args: { name: "user-id" },
              isRequired: true,
            },
            {
              name: "--phone",
              description: "Phone number",
              args: { name: "phone" },
              isRequired: true,
            },
          ],
        },
        {
          name: "create-email-verification",
          description:
            "Use this endpoint to send a verification message to your user email address to confirm they are the valid owners of that address",
          icon,
          options: [
            {
              name: "--url",
              description:
                "URL to redirect the user back to your app from the verification email",
              args: { name: "url" },
              isRequired: true,
            },
          ],
        },
        {
          name: "create-verification",
          description:
            "Use this endpoint to send a verification message to your user email address to confirm they are the valid owners of that address",
          icon,
          options: [
            {
              name: "--url",
              description:
                "URL to redirect the user back to your app from the verification email",
              args: { name: "url" },
              isRequired: true,
            },
          ],
        },
        {
          name: "update-email-verification",
          description:
            "Use this endpoint to complete the user email verification process",
          icon,
          options: [
            {
              name: "--user-id",
              description: "User ID",
              args: { name: "user-id" },
              isRequired: true,
            },
            {
              name: "--secret",
              description: "Valid verification token",
              args: { name: "secret" },
              isRequired: true,
            },
          ],
        },
        {
          name: "update-verification",
          description:
            "Use this endpoint to complete the user email verification process",
          icon,
          options: [
            {
              name: "--user-id",
              description: "User ID",
              args: { name: "user-id" },
              isRequired: true,
            },
            {
              name: "--secret",
              description: "Valid verification token",
              args: { name: "secret" },
              isRequired: true,
            },
          ],
        },
        {
          name: "create-email-verification-otp",
          description:
            "Use this endpoint to send a 6-digit verification code to the currently logged in user's email address",
          icon,
          options: [
            { name: "--phrase", description: "Toggle for security phrase" },
          ],
        },
        {
          name: "update-email-verification-otp",
          description:
            "Use this endpoint to complete the user email verification process using the 6-digit code that was emailed by createEmailVerificationOTP (https://appwrite.io/docs/references/cloud/client-web/account#createEmailVerificationOTP)",
          icon,
          options: [
            {
              name: "--user-id",
              description: "User ID",
              args: { name: "user-id" },
              isRequired: true,
            },
            {
              name: "--secret",
              description: "Valid verification OTP code",
              args: { name: "secret" },
              isRequired: true,
            },
          ],
        },
        {
          name: "create-phone-verification",
          description:
            "Use this endpoint to send a verification SMS to the currently logged in user",
          icon,
        },
        {
          name: "update-phone-verification",
          description:
            "Use this endpoint to complete the user phone verification process",
          icon,
          options: [
            {
              name: "--user-id",
              description: "User ID",
              args: { name: "user-id" },
              isRequired: true,
            },
            {
              name: "--secret",
              description: "Valid verification token",
              args: { name: "secret" },
              isRequired: true,
            },
          ],
        },
      ],
    },
    {
      name: "activities",
      description: "List and inspect project activity events",
      icon,
      subcommands: [
        {
          name: "list-events",
          description: "List all events for selected filters",
          icon,
          options: [
            {
              name: "--queries",
              description:
                "Array of query strings generated using the Query class provided by the SDK",
              args: { name: "queries" },
              isRepeatable: true,
            },
            {
              name: "--total",
              description:
                "When set to false, the total count returned will be 0 and will not be calculated",
            },
            ...listOptions,
          ],
        },
        {
          name: "get-event",
          description: "Get event by ID",
          icon,
          options: [
            {
              name: "--event-id",
              description: "Event ID",
              args: { name: "event-id" },
              isRequired: true,
            },
          ],
        },
      ],
    },
    {
      name: "analytics",
      description: "Analytics properties, annotations, events and metrics",
      icon,
      subcommands: [
        {
          name: "list-properties",
          description: "List analytics properties for the current project",
          icon,
          options: [
            {
              name: "--queries",
              description:
                "Array of query strings generated using the Query class provided by the SDK",
              args: { name: "queries" },
              isRepeatable: true,
            },
            {
              name: "--search",
              description: "Search term to filter your list results",
              args: { name: "search" },
            },
            {
              name: "--total",
              description:
                "When set to false, the total count returned will be 0 and will not be calculated",
            },
            ...listOptions,
          ],
        },
        {
          name: "create-property",
          description:
            "Create a new analytics property to track a website or application",
          icon,
          options: [
            {
              name: "--property-id",
              description: "Unique ID",
              args: { name: "property-id" },
              isRequired: true,
            },
            {
              name: "--name",
              description: "Human-readable name for this property",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--domain",
              description: "Primary domain to track (e.g. example.com)",
              args: { name: "domain" },
            },
            {
              name: "--enabled",
              description: "Whether the property accepts events",
            },
            {
              name: "--allowed-origins",
              description: "Allowed origins for tracking",
              args: { name: "allowed-origins" },
              isRepeatable: true,
            },
            {
              name: "--identify-users",
              description:
                "Record the signed-in user's ID on events sent from a client session, so traffic can be broken down and counted by user",
            },
            {
              name: "--type",
              description: "Kind of product this property tracks",
              args: { name: "type" },
            },
          ],
        },
        {
          name: "get-property",
          description: "Get an analytics property by ID",
          icon,
          options: [
            {
              name: "--property-id",
              description: "Analytics property unique ID",
              args: { name: "property-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "update-property",
          description: "Update an analytics property",
          icon,
          options: [
            {
              name: "--property-id",
              description: "Analytics property unique ID",
              args: { name: "property-id" },
              isRequired: true,
            },
            {
              name: "--name",
              description: "Human-readable name for this property",
              args: { name: "name" },
            },
            {
              name: "--domain",
              description: "Primary domain to track (e.g. example.com)",
              args: { name: "domain" },
            },
            {
              name: "--enabled",
              description: "Whether the property accepts events",
            },
            {
              name: "--allowed-origins",
              description: "Allowed origins for tracking",
              args: { name: "allowed-origins" },
              isRepeatable: true,
            },
            {
              name: "--identify-users",
              description:
                "Record the signed-in user's ID on events sent from a client session, so traffic can be broken down and counted by user",
            },
            {
              name: "--type",
              description: "Kind of product this property tracks",
              args: { name: "type" },
            },
          ],
        },
        {
          name: "delete-property",
          description:
            "Delete an analytics property along with every event and session collected for it",
          icon,
          options: [
            {
              name: "--property-id",
              description: "Analytics property unique ID",
              args: { name: "property-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "list-annotations",
          description: "List the annotations of an analytics property",
          icon,
          options: [
            {
              name: "--property-id",
              description: "Analytics property unique ID",
              args: { name: "property-id" },
              isRequired: true,
            },
            {
              name: "--queries",
              description:
                "Array of query strings generated using the Query class provided by the SDK",
              args: { name: "queries" },
              isRepeatable: true,
            },
            {
              name: "--total",
              description:
                "When set to false, the total count returned will be 0 and will not be calculated",
            },
            ...listOptions,
          ],
        },
        {
          name: "create-annotation",
          description:
            "Create an annotation that marks a point in time on an analytics property's charts",
          icon,
          options: [
            {
              name: "--property-id",
              description: "Analytics property unique ID",
              args: { name: "property-id" },
              isRequired: true,
            },
            {
              name: "--annotation-id",
              description: "Unique ID",
              args: { name: "annotation-id" },
              isRequired: true,
            },
            {
              name: "--date",
              description:
                "Point in time the annotation marks, in ISO 8601 (https://www.iso.org/iso-8601-date-and-time-format.html) format",
              args: { name: "date" },
              isRequired: true,
            },
            {
              name: "--content",
              description: "Annotation text",
              args: { name: "content" },
              isRequired: true,
            },
          ],
        },
        {
          name: "get-annotation",
          description: "Get an analytics annotation by ID",
          icon,
          options: [
            {
              name: "--property-id",
              description: "Analytics property unique ID",
              args: { name: "property-id" },
              isRequired: true,
            },
            {
              name: "--annotation-id",
              description: "Annotation unique ID",
              args: { name: "annotation-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "update-annotation",
          description: "Update an analytics annotation",
          icon,
          options: [
            {
              name: "--property-id",
              description: "Analytics property unique ID",
              args: { name: "property-id" },
              isRequired: true,
            },
            {
              name: "--annotation-id",
              description: "Annotation unique ID",
              args: { name: "annotation-id" },
              isRequired: true,
            },
            {
              name: "--date",
              description:
                "Point in time the annotation marks, in ISO 8601 (https://www.iso.org/iso-8601-date-and-time-format.html) format",
              args: { name: "date" },
            },
            {
              name: "--content",
              description: "Annotation text",
              args: { name: "content" },
            },
          ],
        },
        {
          name: "delete-annotation",
          description: "Delete an analytics annotation",
          icon,
          options: [
            {
              name: "--property-id",
              description: "Analytics property unique ID",
              args: { name: "property-id" },
              isRequired: true,
            },
            {
              name: "--annotation-id",
              description: "Annotation unique ID",
              args: { name: "annotation-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "create-event",
          description:
            "Send a tracking event from a browser, native app, or server-side SDK",
          icon,
          options: [
            {
              name: "--property-id",
              description: "Analytics property ID",
              args: { name: "property-id" },
              isRequired: true,
            },
            {
              name: "--name",
              description: "Event name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--url",
              description: "Full page URL or screen identifier",
              args: { name: "url" },
              isRequired: true,
            },
            {
              name: "--domain",
              description: "Hostname (e.g. example.com)",
              args: { name: "domain" },
            },
            {
              name: "--referrer",
              description: "Referrer URL",
              args: { name: "referrer" },
            },
            {
              name: "--screen-width",
              description: "Viewport width in CSS pixels",
              args: { name: "screen-width" },
            },
            {
              name: "--session-hash",
              description: "Optional session hash (provided by SDK)",
              args: { name: "session-hash" },
            },
            {
              name: "--scroll-depth",
              description: "Scroll depth percentage 0-100",
              args: { name: "scroll-depth" },
            },
            {
              name: "--engagement-time",
              description: "Engagement time in seconds, 0-4294967295",
              args: { name: "engagement-time" },
            },
            {
              name: "--props",
              description:
                "Custom string properties as a flat key=value list (max 32 entries, alternating key,value)",
              args: { name: "props" },
              isRepeatable: true,
            },
            {
              name: "--user-id",
              description: "Override user ID",
              args: { name: "user-id" },
            },
            {
              name: "--ip",
              description: "Override IP address",
              args: { name: "ip" },
            },
            {
              name: "--user-agent",
              description: "Override user agent",
              args: { name: "user-agent" },
            },
            {
              name: "--interactive",
              description:
                "Whether this event is a visitor interaction that ends a bounce",
            },
          ],
        },
        {
          name: "list-metrics",
          description:
            "Read analytics metrics (visitors, sessions, pageviews, events, bounceRate, …) for a property over a date range",
          icon,
          options: [
            {
              name: "--property-id",
              description: "Analytics property unique ID",
              args: { name: "property-id" },
              isRequired: true,
            },
            {
              name: "--queries",
              description: "Up to 10 filter queries in Utopia syntax",
              args: { name: "queries" },
              isRepeatable: true,
            },
            {
              name: "--interval",
              description: "Time bucket size",
              args: { name: "interval", suggestions: ["1h", "1d", "1w", "1m"] },
            },
            {
              name: "--dimensions",
              description: "Dimension to break the metrics down by",
              args: {
                name: "dimensions",
                suggestions: [
                  "country",
                  "region",
                  "city",
                  "browser",
                  "browserVersion",
                  "operatingSystem",
                  "operatingSystemVersion",
                  "device",
                  "screenSize",
                  "referrerSource",
                  "channel",
                  "utmSource",
                  "utmMedium",
                  "utmCampaign",
                  "utmContent",
                  "utmTerm",
                  "page",
                  "hostname",
                  "entryPage",
                  "exitPage",
                  "trafficType",
                  "botName",
                  "botCategory",
                  "userId",
                  "eventName",
                  "props",
                ],
              },
              isRepeatable: true,
            },
            {
              name: "--prop-key",
              description:
                "Custom prop key whose values to rank, with `dimensions[]=props`",
              args: { name: "prop-key" },
            },
            {
              name: "--date-range",
              description: "Date range shorthand (e.g. 7d, 30d)",
              args: { name: "date-range" },
            },
            {
              name: "--start-at",
              description: "Explicit window start in ISO 8601",
              args: { name: "start-at" },
            },
            {
              name: "--end-at",
              description: "Explicit window end in ISO 8601",
              args: { name: "end-at" },
            },
            {
              name: "--limit",
              description: "Maximum number of ranked values to return",
              args: { name: "limit" },
            },
            {
              name: "--total",
              description:
                "When set to false, the total count returned will be 0 and will not be calculated",
            },
            {
              name: "--filter",
              description: "Filter using a simple comparison expression",
              args: { name: "filter" },
              isRepeatable: true,
            },
            {
              name: "--where",
              description: "Filter using a simple comparison expression",
              deprecated: { description: "Use --filter instead" },
              args: { name: "where" },
              isRepeatable: true,
            },
            {
              name: "--sort-asc",
              description: "Sort results by an attribute in ascending order",
              args: { name: "sort-asc" },
              isRepeatable: true,
            },
            {
              name: "--sort-desc",
              description: "Sort results by an attribute in descending order",
              args: { name: "sort-desc" },
              isRepeatable: true,
            },
            {
              name: "--cursor-after",
              description: "Return results after this cursor ID",
              args: { name: "cursor-after" },
            },
            {
              name: "--cursor-before",
              description: "Return results before this cursor ID",
              args: { name: "cursor-before" },
            },
          ],
        },
      ],
    },
    {
      name: "apps",
      description: "OAuth2 applications, keys, scopes, installations",
      icon,
      subcommands: [
        {
          name: "list",
          description: "List applications",
          icon,
          options: [
            {
              name: "--queries",
              description:
                "Array of query strings generated using the Query class provided by the SDK",
              args: { name: "queries" },
              isRepeatable: true,
            },
            {
              name: "--total",
              description:
                "When set to false, the total count returned will be 0 and will not be calculated",
            },
            ...listOptions,
          ],
        },
        {
          name: "create",
          description: "Create a new application",
          icon,
          options: [
            {
              name: "--app-id",
              description: "Application ID",
              args: { name: "app-id" },
              isRequired: true,
            },
            {
              name: "--name",
              description: "Application name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--redirect-uris",
              description: "Redirect URIs",
              args: { name: "redirect-uris" },
              isRepeatable: true,
              isRequired: true,
            },
            {
              name: "--description",
              description:
                "Application description shown to users during OAuth2 consent",
              args: { name: "description" },
            },
            {
              name: "--client-uri",
              description:
                "Application homepage URL shown to users during OAuth2 consent",
              args: { name: "client-uri" },
            },
            {
              name: "--logo-uri",
              description:
                "Application logo URL shown to users during OAuth2 consent",
              args: { name: "logo-uri" },
            },
            {
              name: "--privacy-policy-url",
              description:
                "Application privacy policy URL shown to users during OAuth2 consent",
              args: { name: "privacy-policy-url" },
            },
            {
              name: "--terms-url",
              description:
                "Application terms of service URL shown to users during OAuth2 consent",
              args: { name: "terms-url" },
            },
            {
              name: "--contacts",
              description: "Application support or security contact emails",
              args: { name: "contacts" },
              isRepeatable: true,
            },
            {
              name: "--tagline",
              description:
                "Application tagline shown to users during OAuth2 consent",
              args: { name: "tagline" },
            },
            {
              name: "--tags",
              description:
                "Application tags shown to users during OAuth2 consent",
              args: { name: "tags" },
              isRepeatable: true,
            },
            {
              name: "--images",
              description:
                "Application image URLs shown to users during OAuth2 consent",
              args: { name: "images" },
              isRepeatable: true,
            },
            {
              name: "--support-url",
              description:
                "Application support URL shown to users during OAuth2 consent",
              args: { name: "support-url" },
            },
            {
              name: "--data-deletion-url",
              description:
                "Application data deletion URL shown to users during OAuth2 consent",
              args: { name: "data-deletion-url" },
            },
            {
              name: "--post-logout-redirect-uris",
              description:
                "Post-logout redirect URIs for OpenID Connect RP-Initiated Logout",
              args: { name: "post-logout-redirect-uris" },
              isRepeatable: true,
            },
            { name: "--enabled", description: "Is application enabled?" },
            {
              name: "--type",
              description: "OAuth2 client type",
              args: { name: "type" },
            },
            {
              name: "--device-flow",
              description:
                "Allow this client to use the OAuth2 Device Authorization Grant (RFC 8628) for input-constrained devices such as TVs and CLIs",
            },
            {
              name: "--team-id",
              description: "Team unique ID",
              args: { name: "team-id" },
            },
          ],
        },
        {
          name: "list-installation-scopes",
          description:
            "List scopes an application can request when installed on a team",
          icon,
        },
        {
          name: "list-o-auth-2-scopes",
          description:
            "List scopes an application can request during the OAuth2 flow",
          icon,
        },
        {
          name: "get",
          description: "Get an application by its unique ID",
          icon,
          options: [
            {
              name: "--app-id",
              description: "Application unique ID",
              args: { name: "app-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "update",
          description: "Update an application by its unique ID",
          icon,
          options: [
            {
              name: "--app-id",
              description: "Application unique ID",
              args: { name: "app-id" },
              isRequired: true,
            },
            {
              name: "--name",
              description: "Application name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--description",
              description:
                "Application description shown to users during OAuth2 consent",
              args: { name: "description" },
            },
            {
              name: "--client-uri",
              description:
                "Application homepage URL shown to users during OAuth2 consent",
              args: { name: "client-uri" },
            },
            {
              name: "--logo-uri",
              description:
                "Application logo URL shown to users during OAuth2 consent",
              args: { name: "logo-uri" },
            },
            {
              name: "--privacy-policy-url",
              description:
                "Application privacy policy URL shown to users during OAuth2 consent",
              args: { name: "privacy-policy-url" },
            },
            {
              name: "--terms-url",
              description:
                "Application terms of service URL shown to users during OAuth2 consent",
              args: { name: "terms-url" },
            },
            {
              name: "--contacts",
              description: "Application support or security contact emails",
              args: { name: "contacts" },
              isRepeatable: true,
            },
            {
              name: "--tagline",
              description:
                "Application tagline shown to users during OAuth2 consent",
              args: { name: "tagline" },
            },
            {
              name: "--tags",
              description:
                "Application tags shown to users during OAuth2 consent",
              args: { name: "tags" },
              isRepeatable: true,
            },
            {
              name: "--images",
              description:
                "Application image URLs shown to users during OAuth2 consent",
              args: { name: "images" },
              isRepeatable: true,
            },
            {
              name: "--support-url",
              description:
                "Application support URL shown to users during OAuth2 consent",
              args: { name: "support-url" },
            },
            {
              name: "--data-deletion-url",
              description:
                "Application data deletion URL shown to users during OAuth2 consent",
              args: { name: "data-deletion-url" },
            },
            { name: "--enabled", description: "Is application enabled?" },
            {
              name: "--redirect-uris",
              description: "Redirect URIs",
              args: { name: "redirect-uris" },
              isRepeatable: true,
            },
            {
              name: "--post-logout-redirect-uris",
              description:
                "Post-logout redirect URIs for OpenID Connect RP-Initiated Logout",
              args: { name: "post-logout-redirect-uris" },
              isRepeatable: true,
            },
            {
              name: "--type",
              description: "OAuth2 client type",
              args: { name: "type" },
            },
            {
              name: "--device-flow",
              description:
                "Allow this client to use the OAuth2 Device Authorization Grant (RFC 8628) for input-constrained devices such as TVs and CLIs",
            },
            {
              name: "--installation-scopes",
              description:
                "Scopes the application requests when installed on a team",
              args: { name: "installation-scopes" },
              isRepeatable: true,
            },
            {
              name: "--installation-redirect-url",
              description:
                "URL users are redirected to after creating or updating an installation of this application",
              args: { name: "installation-redirect-url" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete an application by its unique ID",
          icon,
          options: [
            {
              name: "--app-id",
              description: "Application unique ID",
              args: { name: "app-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "list-installations",
          description: "List installations of an application",
          icon,
          options: [
            {
              name: "--app-id",
              description: "Application unique ID",
              args: { name: "app-id" },
              isRequired: true,
            },
            {
              name: "--queries",
              description:
                "Array of query strings generated using the Query class provided by the SDK",
              args: { name: "queries" },
              isRepeatable: true,
            },
            {
              name: "--total",
              description:
                "When set to false, the total count returned will be 0 and will not be calculated",
            },
            ...listOptions,
          ],
        },
        {
          name: "get-installation",
          description: "Get an installation of an application by its unique ID",
          icon,
          options: [
            {
              name: "--app-id",
              description: "Application unique ID",
              args: { name: "app-id" },
              isRequired: true,
            },
            {
              name: "--installation-id",
              description: "Installation unique ID",
              args: { name: "installation-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "delete-installation",
          description:
            "Delete an installation of an application by its unique ID",
          icon,
          options: [
            {
              name: "--app-id",
              description: "Application unique ID",
              args: { name: "app-id" },
              isRequired: true,
            },
            {
              name: "--installation-id",
              description: "Installation unique ID",
              args: { name: "installation-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "create-installation-token",
          description: "Create a token for an installation of an application",
          icon,
          options: [
            {
              name: "--app-id",
              description: "Application unique ID",
              args: { name: "app-id" },
              isRequired: true,
            },
            {
              name: "--installation-id",
              description: "Installation unique ID",
              args: { name: "installation-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "list-keys",
          description: "List app keys for an application",
          icon,
          options: [
            {
              name: "--app-id",
              description: "Application unique ID",
              args: { name: "app-id" },
              isRequired: true,
            },
            {
              name: "--queries",
              description:
                "Array of query strings generated using the Query class provided by the SDK",
              args: { name: "queries" },
              isRepeatable: true,
            },
            {
              name: "--total",
              description:
                "When set to false, the total count returned will be 0 and will not be calculated",
            },
            ...listOptions,
          ],
        },
        {
          name: "create-key",
          description: "Create a new app key for an application",
          icon,
          options: [
            {
              name: "--app-id",
              description: "Application unique ID",
              args: { name: "app-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "get-key",
          description: "Get an app key by its unique ID",
          icon,
          options: [
            {
              name: "--app-id",
              description: "Application unique ID",
              args: { name: "app-id" },
              isRequired: true,
            },
            {
              name: "--key-id",
              description: "App key unique ID",
              args: { name: "key-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "delete-key",
          description: "Delete an app key by its unique ID",
          icon,
          options: [
            {
              name: "--app-id",
              description: "Application unique ID",
              args: { name: "app-id" },
              isRequired: true,
            },
            {
              name: "--key-id",
              description: "App key unique ID",
              args: { name: "key-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "update-labels",
          description: "Update the labels of an application",
          icon,
          options: [
            {
              name: "--app-id",
              description: "Application unique ID",
              args: { name: "app-id" },
              isRequired: true,
            },
            {
              name: "--labels",
              description: "Array of application labels",
              args: { name: "labels" },
              isRepeatable: true,
              isRequired: true,
            },
          ],
        },
        {
          name: "list-secrets",
          description: "List client secrets for an application",
          icon,
          options: [
            {
              name: "--app-id",
              description: "Application unique ID",
              args: { name: "app-id" },
              isRequired: true,
            },
            {
              name: "--queries",
              description:
                "Array of query strings generated using the Query class provided by the SDK",
              args: { name: "queries" },
              isRepeatable: true,
            },
            {
              name: "--total",
              description:
                "When set to false, the total count returned will be 0 and will not be calculated",
            },
            ...listOptions,
          ],
        },
        {
          name: "create-secret",
          description: "Create a new client secret for an application",
          icon,
          options: [
            {
              name: "--app-id",
              description: "Application unique ID",
              args: { name: "app-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "get-secret",
          description: "Get an application client secret by its unique ID",
          icon,
          options: [
            {
              name: "--app-id",
              description: "Application unique ID",
              args: { name: "app-id" },
              isRequired: true,
            },
            {
              name: "--secret-id",
              description: "Secret unique ID",
              args: { name: "secret-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "delete-secret",
          description: "Delete an application client secret by its unique ID",
          icon,
          options: [
            {
              name: "--app-id",
              description: "Application unique ID",
              args: { name: "app-id" },
              isRequired: true,
            },
            {
              name: "--secret-id",
              description: "Secret unique ID",
              args: { name: "secret-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "update-team",
          description:
            "Transfer an application to another team by its unique ID",
          icon,
          options: [
            {
              name: "--app-id",
              description: "Application unique ID",
              args: { name: "app-id" },
              isRequired: true,
            },
            {
              name: "--team-id",
              description: "Team ID of the team to transfer application to",
              args: { name: "team-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "delete-tokens",
          description: "Revoke all tokens for an application by its unique ID",
          icon,
          options: [
            {
              name: "--app-id",
              description: "Application unique ID",
              args: { name: "app-id" },
              isRequired: true,
            },
          ],
        },
      ],
    },
    {
      name: "backups",
      description: "Backup policies, archives, and restorations",
      icon,
      subcommands: [
        {
          name: "list-archives",
          description: "List all archives for a project",
          icon,
          options: [
            {
              name: "--queries",
              description:
                "Array of query strings generated using the Query class provided by the SDK",
              args: { name: "queries" },
              isRepeatable: true,
            },
            {
              name: "--total",
              description:
                "When set to false, the total count returned will be 0 and will not be calculated",
            },
            ...listOptions,
          ],
        },
        {
          name: "create-archive",
          description: "Create a new archive asynchronously for a project",
          icon,
          options: [
            {
              name: "--services",
              description: "Array of services to backup",
              args: { name: "services" },
              isRepeatable: true,
              isRequired: true,
            },
            {
              name: "--resource-id",
              description: "Resource ID",
              args: { name: "resource-id" },
            },
          ],
        },
        {
          name: "get-archive",
          description: "Get a backup archive using it's ID",
          icon,
          options: [
            {
              name: "--archive-id",
              description: "Archive ID",
              args: { name: "archive-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "delete-archive",
          description: "Delete an existing archive for a project",
          icon,
          options: [
            {
              name: "--archive-id",
              description: "Policy ID",
              args: { name: "archive-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "list-policies",
          description: "List all policies for a project",
          icon,
          options: [
            {
              name: "--queries",
              description:
                "Array of query strings generated using the Query class provided by the SDK",
              args: { name: "queries" },
              isRepeatable: true,
            },
            {
              name: "--total",
              description:
                "When set to false, the total count returned will be 0 and will not be calculated",
            },
            ...listOptions,
          ],
        },
        {
          name: "create-policy",
          description: "Create a new backup policy",
          icon,
          options: [
            {
              name: "--policy-id",
              description: "Policy ID",
              args: { name: "policy-id" },
              isRequired: true,
            },
            {
              name: "--services",
              description: "Array of services to backup",
              args: { name: "services" },
              isRepeatable: true,
              isRequired: true,
            },
            {
              name: "--retention",
              description: "Days to keep backups before deletion",
              args: { name: "retention" },
              isRequired: true,
            },
            {
              name: "--schedule",
              description: "Schedule CRON syntax",
              args: { name: "schedule" },
              isRequired: true,
            },
            {
              name: "--name",
              description: "Policy name",
              args: { name: "name" },
            },
            {
              name: "--resource-id",
              description: "Resource ID",
              args: { name: "resource-id" },
            },
            {
              name: "--enabled",
              description:
                "Is policy enabled? When set to 'disabled', no backups will be taken",
            },
          ],
        },
        {
          name: "get-policy",
          description: "Get a backup policy using it's ID",
          icon,
          options: [
            {
              name: "--policy-id",
              description: "Policy ID",
              args: { name: "policy-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "update-policy",
          description: "Update an existing policy using it's ID",
          icon,
          options: [
            {
              name: "--policy-id",
              description: "Policy ID",
              args: { name: "policy-id" },
              isRequired: true,
            },
            {
              name: "--name",
              description: "Policy name",
              args: { name: "name" },
            },
            {
              name: "--retention",
              description: "Days to keep backups before deletion",
              args: { name: "retention" },
            },
            {
              name: "--schedule",
              description: "Cron expression",
              args: { name: "schedule" },
            },
            {
              name: "--enabled",
              description:
                "Is Backup enabled? When set to 'disabled', No backup will be taken",
            },
          ],
        },
        {
          name: "delete-policy",
          description: "Delete a policy using it's ID",
          icon,
          options: [
            {
              name: "--policy-id",
              description: "Policy ID",
              args: { name: "policy-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "create-restoration",
          description:
            "Create and trigger a new restoration for a backup on a project",
          icon,
          options: [
            {
              name: "--archive-id",
              description: "Backup archive ID to restore",
              args: { name: "archive-id" },
              isRequired: true,
            },
            {
              name: "--services",
              description: "Array of services to restore",
              args: { name: "services" },
              isRepeatable: true,
              isRequired: true,
            },
            {
              name: "--new-resource-id",
              description: "Destination resource ID",
              args: { name: "new-resource-id" },
            },
            {
              name: "--new-resource-name",
              description: "Database name",
              args: { name: "new-resource-name" },
            },
          ],
        },
        {
          name: "list-restorations",
          description: "List all backup restorations for a project",
          icon,
          options: [
            {
              name: "--queries",
              description:
                "Array of query strings generated using the Query class provided by the SDK",
              args: { name: "queries" },
              isRepeatable: true,
            },
            {
              name: "--total",
              description:
                "When set to false, the total count returned will be 0 and will not be calculated",
            },
            ...listOptions,
          ],
        },
        {
          name: "get-restoration",
          description: "Get the current status of a backup restoration",
          icon,
          options: [
            {
              name: "--restoration-id",
              description: "Restoration ID",
              args: { name: "restoration-id" },
              isRequired: true,
            },
          ],
        },
      ],
    },
    {
      name: "databases",
      description: "Use `tablesdb` instead",
      icon,
      deprecated: true,
      subcommands: [
        {
          name: "list",
          description:
            "Get a list of all databases from the current Appwrite project",
          icon,
          options: [
            {
              name: "--queries",
              description:
                "Array of query strings generated using the Query class provided by the SDK",
              args: { name: "queries" },
              isRepeatable: true,
            },
            {
              name: "--search",
              description: "Search term to filter your list results",
              args: { name: "search" },
            },
            {
              name: "--total",
              description:
                "When set to false, the total count returned will be 0 and will not be calculated",
            },
            ...listOptions,
          ],
        },
        {
          name: "create",
          description: "Create a new Database",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Unique Id",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--name",
              description: "Database name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--enabled",
              description:
                "Is the database enabled? When set to 'disabled', users cannot access the database but Server SDKs with an API key can still read and write to the database",
            },
            {
              name: "--description",
              description: "Optional description for the database",
              args: { name: "description" },
            },
          ],
        },
        {
          name: "list-transactions",
          description: "List transactions across all databases",
          icon,
          options: [
            {
              name: "--queries",
              description:
                "Array of query strings generated using the Query class provided by the SDK",
              args: { name: "queries" },
              isRepeatable: true,
            },
            {
              name: "--total",
              description:
                "When set to false, the total count returned will be 0 and will not be calculated",
            },
            ...listOptions,
          ],
        },
        {
          name: "create-transaction",
          description: "Create a new transaction",
          icon,
          options: [
            {
              name: "--ttl",
              description: "Seconds before the transaction expires",
              args: { name: "ttl" },
            },
          ],
        },
        {
          name: "get-transaction",
          description: "Get a transaction by its unique ID",
          icon,
          options: [
            {
              name: "--transaction-id",
              description: "Transaction ID",
              args: { name: "transaction-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "update-transaction",
          description:
            "Update a transaction, to either commit or roll back its operations",
          icon,
          options: [
            {
              name: "--transaction-id",
              description: "Transaction ID",
              args: { name: "transaction-id" },
              isRequired: true,
            },
            { name: "--commit", description: "Commit transaction?" },
            { name: "--rollback", description: "Rollback transaction?" },
          ],
        },
        {
          name: "delete-transaction",
          description: "Delete a transaction by its unique ID",
          icon,
          options: [
            {
              name: "--transaction-id",
              description: "Transaction ID",
              args: { name: "transaction-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "create-operations",
          description: "Create multiple operations in a single transaction",
          icon,
          options: [
            {
              name: "--transaction-id",
              description: "Transaction ID",
              args: { name: "transaction-id" },
              isRequired: true,
            },
            {
              name: "--operations",
              description: "Array of staged operations",
              args: { name: "operations" },
              isRepeatable: true,
            },
          ],
        },
        {
          name: "get",
          description: "Get a database by its unique ID",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "update",
          description: "Update a database by its unique ID",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--name",
              description: "Database name",
              args: { name: "name" },
            },
            {
              name: "--enabled",
              description:
                "Is database enabled? When set to 'disabled', users cannot access the database but Server SDKs with an API key can still read and write to the database",
            },
            {
              name: "--description",
              description: "Optional description for the database",
              args: { name: "description" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a database by its unique ID",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "list-collections",
          description:
            "Get a list of all collections that belong to the provided databaseId",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--queries",
              description:
                "Array of query strings generated using the Query class provided by the SDK",
              args: { name: "queries" },
              isRepeatable: true,
            },
            {
              name: "--search",
              description: "Search term to filter your list results",
              args: { name: "search" },
            },
            {
              name: "--total",
              description:
                "When set to false, the total count returned will be 0 and will not be calculated",
            },
            ...listOptions,
          ],
        },
        {
          name: "create-collection",
          description: "Create a new Collection",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--collection-id",
              description: "Unique Id",
              args: { name: "collection-id" },
              isRequired: true,
            },
            {
              name: "--name",
              description: "Collection name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--permissions",
              description: "An array of permissions strings",
              args: { name: "permissions" },
              isRepeatable: true,
            },
            {
              name: "--document-security",
              description:
                "Enables configuring permissions for individual documents",
            },
            {
              name: "--enabled",
              description:
                "Is collection enabled? When set to 'disabled', users cannot access the collection but Server SDKs with and API key can still read and write to the collection",
            },
            {
              name: "--attributes",
              description: "Array of attribute definitions to create",
              args: { name: "attributes" },
              isRepeatable: true,
            },
            {
              name: "--indexes",
              description: "Array of index definitions to create",
              args: { name: "indexes" },
              isRepeatable: true,
            },
            {
              name: "--description",
              description: "Optional description for the collection",
              args: { name: "description" },
            },
          ],
        },
        {
          name: "get-collection",
          description: "Get a collection by its unique ID",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--collection-id",
              description: "Collection ID",
              args: { name: "collection-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "update-collection",
          description: "Update a collection by its unique ID",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--collection-id",
              description: "Collection ID",
              args: { name: "collection-id" },
              isRequired: true,
            },
            {
              name: "--name",
              description: "Collection name",
              args: { name: "name" },
            },
            {
              name: "--permissions",
              description: "An array of permission strings",
              args: { name: "permissions" },
              isRepeatable: true,
            },
            {
              name: "--document-security",
              description:
                "Enables configuring permissions for individual documents",
            },
            {
              name: "--enabled",
              description:
                "Is collection enabled? When set to 'disabled', users cannot access the collection but Server SDKs with and API key can still read and write to the collection",
            },
            {
              name: "--purge",
              description:
                "When true, purge all cached list responses for this collection as part of the update",
            },
            {
              name: "--description",
              description: "Optional description for the collection",
              args: { name: "description" },
            },
          ],
        },
        {
          name: "delete-collection",
          description: "Delete a collection by its unique ID",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--collection-id",
              description: "Collection ID",
              args: { name: "collection-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "list-attributes",
          description: "List attributes in the collection",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--collection-id",
              description: "Collection ID",
              args: { name: "collection-id" },
              isRequired: true,
            },
            {
              name: "--queries",
              description:
                "Array of query strings generated using the Query class provided by the SDK",
              args: { name: "queries" },
              isRepeatable: true,
            },
            {
              name: "--total",
              description:
                "When set to false, the total count returned will be 0 and will not be calculated",
            },
            ...listOptions,
          ],
        },
        {
          name: "create-big-int-attribute",
          description: "Create a bigint attribute",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--collection-id",
              description: "Collection ID",
              args: { name: "collection-id" },
              isRequired: true,
            },
            {
              name: "--key",
              description: "Attribute Key",
              args: { name: "key" },
              isRequired: true,
            },
            {
              name: "--required",
              description: "Is attribute required?",
              isRequired: true,
            },
            {
              name: "--min",
              description: "Minimum value",
              args: { name: "min" },
            },
            {
              name: "--max",
              description: "Maximum value",
              args: { name: "max" },
            },
            {
              name: "--xdefault",
              description: "Default value",
              args: { name: "xdefault" },
            },
            { name: "--array", description: "Is attribute an array?" },
            {
              name: "--description",
              description: "Optional description for the attribute",
              args: { name: "description" },
            },
          ],
        },
        {
          name: "update-big-int-attribute",
          description: "Update a bigint attribute",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--collection-id",
              description: "Collection ID",
              args: { name: "collection-id" },
              isRequired: true,
            },
            {
              name: "--key",
              description: "Attribute Key",
              args: { name: "key" },
              isRequired: true,
            },
            {
              name: "--required",
              description: "Is attribute required?",
              isRequired: true,
            },
            {
              name: "--xdefault",
              description: "Default value",
              args: { name: "xdefault" },
              isRequired: true,
            },
            {
              name: "--min",
              description: "Minimum value",
              args: { name: "min" },
            },
            {
              name: "--max",
              description: "Maximum value",
              args: { name: "max" },
            },
            {
              name: "--new-key",
              description: "New Attribute Key",
              args: { name: "new-key" },
            },
            {
              name: "--description",
              description: "Optional description for the attribute",
              args: { name: "description" },
            },
          ],
        },
        {
          name: "create-boolean-attribute",
          description: "Create a boolean attribute",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--collection-id",
              description: "Collection ID",
              args: { name: "collection-id" },
              isRequired: true,
            },
            {
              name: "--key",
              description: "Attribute Key",
              args: { name: "key" },
              isRequired: true,
            },
            {
              name: "--required",
              description: "Is attribute required?",
              isRequired: true,
            },
            {
              name: "--xdefault",
              description: "Default value for attribute when not provided",
            },
            { name: "--array", description: "Is attribute an array?" },
            {
              name: "--description",
              description: "Optional description for the attribute",
              args: { name: "description" },
            },
          ],
        },
        {
          name: "update-boolean-attribute",
          description: "Update a boolean attribute",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--collection-id",
              description: "Collection ID",
              args: { name: "collection-id" },
              isRequired: true,
            },
            {
              name: "--key",
              description: "Attribute Key",
              args: { name: "key" },
              isRequired: true,
            },
            {
              name: "--required",
              description: "Is attribute required?",
              isRequired: true,
            },
            {
              name: "--xdefault",
              description: "Default value for attribute when not provided",
              isRequired: true,
            },
            {
              name: "--new-key",
              description: "New attribute key",
              args: { name: "new-key" },
            },
            {
              name: "--description",
              description: "Optional description for the attribute",
              args: { name: "description" },
            },
          ],
        },
        {
          name: "create-datetime-attribute",
          description:
            "Create a date time attribute according to the ISO 8601 standard",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--collection-id",
              description: "Collection ID",
              args: { name: "collection-id" },
              isRequired: true,
            },
            {
              name: "--key",
              description: "Attribute Key",
              args: { name: "key" },
              isRequired: true,
            },
            {
              name: "--required",
              description: "Is attribute required?",
              isRequired: true,
            },
            {
              name: "--xdefault",
              description:
                "Default value for the attribute in ISO 8601 (https://www.iso.org/iso-8601-date-and-time-format.html) format",
              args: { name: "xdefault" },
            },
            { name: "--array", description: "Is attribute an array?" },
            {
              name: "--description",
              description: "Optional description for the attribute",
              args: { name: "description" },
            },
          ],
        },
        {
          name: "update-datetime-attribute",
          description: "Update a date time attribute",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--collection-id",
              description: "Collection ID",
              args: { name: "collection-id" },
              isRequired: true,
            },
            {
              name: "--key",
              description: "Attribute Key",
              args: { name: "key" },
              isRequired: true,
            },
            {
              name: "--required",
              description: "Is attribute required?",
              isRequired: true,
            },
            {
              name: "--xdefault",
              description: "Default value for attribute when not provided",
              args: { name: "xdefault" },
              isRequired: true,
            },
            {
              name: "--new-key",
              description: "New attribute key",
              args: { name: "new-key" },
            },
            {
              name: "--description",
              description: "Optional description for the attribute",
              args: { name: "description" },
            },
          ],
        },
        {
          name: "create-email-attribute",
          description: "Create an email attribute",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--collection-id",
              description: "Collection ID",
              args: { name: "collection-id" },
              isRequired: true,
            },
            {
              name: "--key",
              description: "Attribute Key",
              args: { name: "key" },
              isRequired: true,
            },
            {
              name: "--required",
              description: "Is attribute required?",
              isRequired: true,
            },
            {
              name: "--xdefault",
              description: "Default value for attribute when not provided",
              args: { name: "xdefault" },
            },
            { name: "--array", description: "Is attribute an array?" },
            {
              name: "--description",
              description: "Optional description for the attribute",
              args: { name: "description" },
            },
          ],
        },
        {
          name: "update-email-attribute",
          description: "Update an email attribute",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--collection-id",
              description: "Collection ID",
              args: { name: "collection-id" },
              isRequired: true,
            },
            {
              name: "--key",
              description: "Attribute Key",
              args: { name: "key" },
              isRequired: true,
            },
            {
              name: "--required",
              description: "Is attribute required?",
              isRequired: true,
            },
            {
              name: "--xdefault",
              description: "Default value for attribute when not provided",
              args: { name: "xdefault" },
              isRequired: true,
            },
            {
              name: "--new-key",
              description: "New Attribute Key",
              args: { name: "new-key" },
            },
            {
              name: "--description",
              description: "Optional description for the attribute",
              args: { name: "description" },
            },
          ],
        },
        {
          name: "create-enum-attribute",
          description: "Create an enum attribute",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--collection-id",
              description: "Collection ID",
              args: { name: "collection-id" },
              isRequired: true,
            },
            {
              name: "--key",
              description: "Attribute Key",
              args: { name: "key" },
              isRequired: true,
            },
            {
              name: "--elements",
              description: "Array of enum values",
              args: { name: "elements" },
              isRepeatable: true,
              isRequired: true,
            },
            {
              name: "--required",
              description: "Is attribute required?",
              isRequired: true,
            },
            {
              name: "--xdefault",
              description: "Default value for attribute when not provided",
              args: { name: "xdefault" },
            },
            { name: "--array", description: "Is attribute an array?" },
            {
              name: "--description",
              description: "Optional description for the attribute",
              args: { name: "description" },
            },
          ],
        },
        {
          name: "update-enum-attribute",
          description: "Update an enum attribute",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--collection-id",
              description: "Collection ID",
              args: { name: "collection-id" },
              isRequired: true,
            },
            {
              name: "--key",
              description: "Attribute Key",
              args: { name: "key" },
              isRequired: true,
            },
            {
              name: "--elements",
              description: "Updated list of enum values",
              args: { name: "elements" },
              isRepeatable: true,
              isRequired: true,
            },
            {
              name: "--required",
              description: "Is attribute required?",
              isRequired: true,
            },
            {
              name: "--xdefault",
              description: "Default value for attribute when not provided",
              args: { name: "xdefault" },
              isRequired: true,
            },
            {
              name: "--new-key",
              description: "New Attribute Key",
              args: { name: "new-key" },
            },
            {
              name: "--description",
              description: "Optional description for the attribute",
              args: { name: "description" },
            },
          ],
        },
        {
          name: "create-float-attribute",
          description: "Create a float attribute",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--collection-id",
              description: "Collection ID",
              args: { name: "collection-id" },
              isRequired: true,
            },
            {
              name: "--key",
              description: "Attribute Key",
              args: { name: "key" },
              isRequired: true,
            },
            {
              name: "--required",
              description: "Is attribute required?",
              isRequired: true,
            },
            {
              name: "--min",
              description: "Minimum value",
              args: { name: "min" },
            },
            {
              name: "--max",
              description: "Maximum value",
              args: { name: "max" },
            },
            {
              name: "--xdefault",
              description: "Default value",
              args: { name: "xdefault" },
            },
            { name: "--array", description: "Is attribute an array?" },
            {
              name: "--description",
              description: "Optional description for the attribute",
              args: { name: "description" },
            },
          ],
        },
        {
          name: "update-float-attribute",
          description: "Update a float attribute",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--collection-id",
              description: "Collection ID",
              args: { name: "collection-id" },
              isRequired: true,
            },
            {
              name: "--key",
              description: "Attribute Key",
              args: { name: "key" },
              isRequired: true,
            },
            {
              name: "--required",
              description: "Is attribute required?",
              isRequired: true,
            },
            {
              name: "--xdefault",
              description: "Default value",
              args: { name: "xdefault" },
              isRequired: true,
            },
            {
              name: "--min",
              description: "Minimum value",
              args: { name: "min" },
            },
            {
              name: "--max",
              description: "Maximum value",
              args: { name: "max" },
            },
            {
              name: "--new-key",
              description: "New Attribute Key",
              args: { name: "new-key" },
            },
            {
              name: "--description",
              description: "Optional description for the attribute",
              args: { name: "description" },
            },
          ],
        },
        {
          name: "create-integer-attribute",
          description: "Create an integer attribute",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--collection-id",
              description: "Collection ID",
              args: { name: "collection-id" },
              isRequired: true,
            },
            {
              name: "--key",
              description: "Attribute Key",
              args: { name: "key" },
              isRequired: true,
            },
            {
              name: "--required",
              description: "Is attribute required?",
              isRequired: true,
            },
            {
              name: "--min",
              description: "Minimum value",
              args: { name: "min" },
            },
            {
              name: "--max",
              description: "Maximum value",
              args: { name: "max" },
            },
            {
              name: "--xdefault",
              description: "Default value",
              args: { name: "xdefault" },
            },
            { name: "--array", description: "Is attribute an array?" },
            {
              name: "--description",
              description: "Optional description for the attribute",
              args: { name: "description" },
            },
          ],
        },
        {
          name: "update-integer-attribute",
          description: "Update an integer attribute",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--collection-id",
              description: "Collection ID",
              args: { name: "collection-id" },
              isRequired: true,
            },
            {
              name: "--key",
              description: "Attribute Key",
              args: { name: "key" },
              isRequired: true,
            },
            {
              name: "--required",
              description: "Is attribute required?",
              isRequired: true,
            },
            {
              name: "--xdefault",
              description: "Default value",
              args: { name: "xdefault" },
              isRequired: true,
            },
            {
              name: "--min",
              description: "Minimum value",
              args: { name: "min" },
            },
            {
              name: "--max",
              description: "Maximum value",
              args: { name: "max" },
            },
            {
              name: "--new-key",
              description: "New Attribute Key",
              args: { name: "new-key" },
            },
            {
              name: "--description",
              description: "Optional description for the attribute",
              args: { name: "description" },
            },
          ],
        },
        {
          name: "create-ip-attribute",
          description: "Create IP address attribute",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--collection-id",
              description: "Collection ID",
              args: { name: "collection-id" },
              isRequired: true,
            },
            {
              name: "--key",
              description: "Attribute Key",
              args: { name: "key" },
              isRequired: true,
            },
            {
              name: "--required",
              description: "Is attribute required?",
              isRequired: true,
            },
            {
              name: "--xdefault",
              description: "Default value",
              args: { name: "xdefault" },
            },
            { name: "--array", description: "Is attribute an array?" },
            {
              name: "--description",
              description: "Optional description for the attribute",
              args: { name: "description" },
            },
          ],
        },
        {
          name: "update-ip-attribute",
          description: "Update an ip attribute",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--collection-id",
              description: "Collection ID",
              args: { name: "collection-id" },
              isRequired: true,
            },
            {
              name: "--key",
              description: "Attribute Key",
              args: { name: "key" },
              isRequired: true,
            },
            {
              name: "--required",
              description: "Is attribute required?",
              isRequired: true,
            },
            {
              name: "--xdefault",
              description: "Default value",
              args: { name: "xdefault" },
              isRequired: true,
            },
            {
              name: "--new-key",
              description: "New Attribute Key",
              args: { name: "new-key" },
            },
            {
              name: "--description",
              description: "Optional description for the attribute",
              args: { name: "description" },
            },
          ],
        },
        {
          name: "create-line-attribute",
          description: "Create a geometric line attribute",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--collection-id",
              description: "Collection ID",
              args: { name: "collection-id" },
              isRequired: true,
            },
            {
              name: "--key",
              description: "Attribute Key",
              args: { name: "key" },
              isRequired: true,
            },
            {
              name: "--required",
              description: "Is attribute required?",
              isRequired: true,
            },
            {
              name: "--xdefault",
              description:
                "Default value for attribute when not provided, two-dimensional array of coordinate pairs, [[longitude, latitude], [longitude, latitude], …], listing the vertices of the line in order",
              args: { name: "xdefault" },
              isRepeatable: true,
            },
            {
              name: "--description",
              description: "Optional description for the attribute",
              args: { name: "description" },
            },
          ],
        },
        {
          name: "update-line-attribute",
          description: "Update a line attribute",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--collection-id",
              description: "Collection ID",
              args: { name: "collection-id" },
              isRequired: true,
            },
            {
              name: "--key",
              description: "Attribute Key",
              args: { name: "key" },
              isRequired: true,
            },
            {
              name: "--required",
              description: "Is attribute required?",
              isRequired: true,
            },
            {
              name: "--xdefault",
              description:
                "Default value for attribute when not provided, two-dimensional array of coordinate pairs, [[longitude, latitude], [longitude, latitude], …], listing the vertices of the line in order",
              args: { name: "xdefault" },
              isRepeatable: true,
            },
            {
              name: "--new-key",
              description: "New attribute key",
              args: { name: "new-key" },
            },
            {
              name: "--description",
              description: "Optional description for the attribute",
              args: { name: "description" },
            },
          ],
        },
        {
          name: "create-longtext-attribute",
          description: "Create a longtext attribute",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--collection-id",
              description: "Collection ID",
              args: { name: "collection-id" },
              isRequired: true,
            },
            {
              name: "--key",
              description: "Attribute Key",
              args: { name: "key" },
              isRequired: true,
            },
            {
              name: "--required",
              description: "Is attribute required?",
              isRequired: true,
            },
            {
              name: "--xdefault",
              description: "Default value for attribute when not provided",
              args: { name: "xdefault" },
            },
            { name: "--array", description: "Is attribute an array?" },
            {
              name: "--encrypt",
              description: "Toggle encryption for the attribute",
            },
            {
              name: "--description",
              description: "Optional description for the attribute",
              args: { name: "description" },
            },
          ],
        },
        {
          name: "update-longtext-attribute",
          description: "Update a longtext attribute",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--collection-id",
              description: "Collection ID",
              args: { name: "collection-id" },
              isRequired: true,
            },
            {
              name: "--key",
              description: "Attribute Key",
              args: { name: "key" },
              isRequired: true,
            },
            {
              name: "--required",
              description: "Is attribute required?",
              isRequired: true,
            },
            {
              name: "--xdefault",
              description: "Default value for attribute when not provided",
              args: { name: "xdefault" },
              isRequired: true,
            },
            {
              name: "--new-key",
              description: "New Attribute Key",
              args: { name: "new-key" },
            },
            {
              name: "--description",
              description: "Optional description for the attribute",
              args: { name: "description" },
            },
          ],
        },
        {
          name: "create-mediumtext-attribute",
          description: "Create a mediumtext attribute",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--collection-id",
              description: "Collection ID",
              args: { name: "collection-id" },
              isRequired: true,
            },
            {
              name: "--key",
              description: "Attribute Key",
              args: { name: "key" },
              isRequired: true,
            },
            {
              name: "--required",
              description: "Is attribute required?",
              isRequired: true,
            },
            {
              name: "--xdefault",
              description: "Default value for attribute when not provided",
              args: { name: "xdefault" },
            },
            { name: "--array", description: "Is attribute an array?" },
            {
              name: "--encrypt",
              description: "Toggle encryption for the attribute",
            },
            {
              name: "--description",
              description: "Optional description for the attribute",
              args: { name: "description" },
            },
          ],
        },
        {
          name: "update-mediumtext-attribute",
          description: "Update a mediumtext attribute",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--collection-id",
              description: "Collection ID",
              args: { name: "collection-id" },
              isRequired: true,
            },
            {
              name: "--key",
              description: "Attribute Key",
              args: { name: "key" },
              isRequired: true,
            },
            {
              name: "--required",
              description: "Is attribute required?",
              isRequired: true,
            },
            {
              name: "--xdefault",
              description: "Default value for attribute when not provided",
              args: { name: "xdefault" },
              isRequired: true,
            },
            {
              name: "--new-key",
              description: "New Attribute Key",
              args: { name: "new-key" },
            },
            {
              name: "--description",
              description: "Optional description for the attribute",
              args: { name: "description" },
            },
          ],
        },
        {
          name: "create-point-attribute",
          description: "Create a geometric point attribute",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--collection-id",
              description: "Collection ID",
              args: { name: "collection-id" },
              isRequired: true,
            },
            {
              name: "--key",
              description: "Attribute Key",
              args: { name: "key" },
              isRequired: true,
            },
            {
              name: "--required",
              description: "Is attribute required?",
              isRequired: true,
            },
            {
              name: "--xdefault",
              description:
                "Default value for attribute when not provided, array of two numbers [longitude, latitude], representing a single coordinate",
              args: { name: "xdefault" },
              isRepeatable: true,
            },
            {
              name: "--description",
              description: "Optional description for the attribute",
              args: { name: "description" },
            },
          ],
        },
        {
          name: "update-point-attribute",
          description: "Update a point attribute",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--collection-id",
              description: "Collection ID",
              args: { name: "collection-id" },
              isRequired: true,
            },
            {
              name: "--key",
              description: "Attribute Key",
              args: { name: "key" },
              isRequired: true,
            },
            {
              name: "--required",
              description: "Is attribute required?",
              isRequired: true,
            },
            {
              name: "--xdefault",
              description:
                "Default value for attribute when not provided, array of two numbers [longitude, latitude], representing a single coordinate",
              args: { name: "xdefault" },
              isRepeatable: true,
            },
            {
              name: "--new-key",
              description: "New attribute key",
              args: { name: "new-key" },
            },
            {
              name: "--description",
              description: "Optional description for the attribute",
              args: { name: "description" },
            },
          ],
        },
        {
          name: "create-polygon-attribute",
          description: "Create a geometric polygon attribute",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--collection-id",
              description: "Collection ID",
              args: { name: "collection-id" },
              isRequired: true,
            },
            {
              name: "--key",
              description: "Attribute Key",
              args: { name: "key" },
              isRequired: true,
            },
            {
              name: "--required",
              description: "Is attribute required?",
              isRequired: true,
            },
            {
              name: "--xdefault",
              description:
                "Default value for attribute when not provided, three-dimensional array where the outer array holds one or more linear rings, [[[longitude, latitude], …], …], the first ring is the exterior boundary, any additional rings are interior holes, and each ring must start and end with the same coordinate pair",
              args: { name: "xdefault" },
              isRepeatable: true,
            },
            {
              name: "--description",
              description: "Optional description for the attribute",
              args: { name: "description" },
            },
          ],
        },
        {
          name: "update-polygon-attribute",
          description: "Update a polygon attribute",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--collection-id",
              description: "Collection ID",
              args: { name: "collection-id" },
              isRequired: true,
            },
            {
              name: "--key",
              description: "Attribute Key",
              args: { name: "key" },
              isRequired: true,
            },
            {
              name: "--required",
              description: "Is attribute required?",
              isRequired: true,
            },
            {
              name: "--xdefault",
              description:
                "Default value for attribute when not provided, three-dimensional array where the outer array holds one or more linear rings, [[[longitude, latitude], …], …], the first ring is the exterior boundary, any additional rings are interior holes, and each ring must start and end with the same coordinate pair",
              args: { name: "xdefault" },
              isRepeatable: true,
            },
            {
              name: "--new-key",
              description: "New attribute key",
              args: { name: "new-key" },
            },
            {
              name: "--description",
              description: "Optional description for the attribute",
              args: { name: "description" },
            },
          ],
        },
        {
          name: "create-relationship-attribute",
          description: "Create relationship attribute",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--collection-id",
              description: "Collection ID",
              args: { name: "collection-id" },
              isRequired: true,
            },
            {
              name: "--related-collection-id",
              description: "Related Collection ID",
              args: { name: "related-collection-id" },
              isRequired: true,
            },
            {
              name: "--type",
              description: "Relationship type",
              args: {
                name: "type",
                suggestions: [
                  "oneToOne",
                  "oneToMany",
                  "manyToOne",
                  "manyToMany",
                ],
              },
              isRequired: true,
            },
            { name: "--two-way", description: "Is Two Way?" },
            {
              name: "--key",
              description: "Attribute Key",
              args: { name: "key" },
            },
            {
              name: "--two-way-key",
              description: "Two Way Attribute Key",
              args: { name: "two-way-key" },
            },
            {
              name: "--on-delete",
              description: "Delete constraint",
              args: {
                name: "on-delete",
                suggestions: ["cascade", "restrict", "setNull"],
              },
            },
            {
              name: "--description",
              description: "Optional description for the attribute",
              args: { name: "description" },
            },
          ],
        },
        {
          name: "update-relationship-attribute",
          description: "Update relationship attribute",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--collection-id",
              description: "Collection ID",
              args: { name: "collection-id" },
              isRequired: true,
            },
            {
              name: "--key",
              description: "Attribute Key",
              args: { name: "key" },
              isRequired: true,
            },
            {
              name: "--on-delete",
              description: "Delete constraint",
              args: {
                name: "on-delete",
                suggestions: ["cascade", "restrict", "setNull"],
              },
            },
            {
              name: "--new-key",
              description: "New Attribute Key",
              args: { name: "new-key" },
            },
            {
              name: "--description",
              description: "Optional description for the attribute",
              args: { name: "description" },
            },
          ],
        },
        {
          name: "create-string-attribute",
          description: "Create a string attribute",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--collection-id",
              description: "Collection ID",
              args: { name: "collection-id" },
              isRequired: true,
            },
            {
              name: "--key",
              description: "Attribute Key",
              args: { name: "key" },
              isRequired: true,
            },
            {
              name: "--size",
              description:
                "Attribute size for text attributes, in number of characters",
              args: { name: "size" },
              isRequired: true,
            },
            {
              name: "--required",
              description: "Is attribute required?",
              isRequired: true,
            },
            {
              name: "--xdefault",
              description: "Default value for attribute when not provided",
              args: { name: "xdefault" },
            },
            { name: "--array", description: "Is attribute an array?" },
            {
              name: "--encrypt",
              description: "Toggle encryption for the attribute",
            },
            {
              name: "--description",
              description: "Optional description for the attribute",
              args: { name: "description" },
            },
          ],
        },
        {
          name: "update-string-attribute",
          description: "Update a string attribute",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--collection-id",
              description: "Collection ID",
              args: { name: "collection-id" },
              isRequired: true,
            },
            {
              name: "--key",
              description: "Attribute Key",
              args: { name: "key" },
              isRequired: true,
            },
            {
              name: "--required",
              description: "Is attribute required?",
              isRequired: true,
            },
            {
              name: "--xdefault",
              description: "Default value for attribute when not provided",
              args: { name: "xdefault" },
              isRequired: true,
            },
            {
              name: "--size",
              description: "Maximum size of the string attribute",
              args: { name: "size" },
            },
            {
              name: "--new-key",
              description: "New Attribute Key",
              args: { name: "new-key" },
            },
            {
              name: "--description",
              description: "Optional description for the attribute",
              args: { name: "description" },
            },
          ],
        },
        {
          name: "create-text-attribute",
          description: "Create a text attribute",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--collection-id",
              description: "Collection ID",
              args: { name: "collection-id" },
              isRequired: true,
            },
            {
              name: "--key",
              description: "Attribute Key",
              args: { name: "key" },
              isRequired: true,
            },
            {
              name: "--required",
              description: "Is attribute required?",
              isRequired: true,
            },
            {
              name: "--xdefault",
              description: "Default value for attribute when not provided",
              args: { name: "xdefault" },
            },
            { name: "--array", description: "Is attribute an array?" },
            {
              name: "--encrypt",
              description: "Toggle encryption for the attribute",
            },
            {
              name: "--description",
              description: "Optional description for the attribute",
              args: { name: "description" },
            },
          ],
        },
        {
          name: "update-text-attribute",
          description: "Update a text attribute",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--collection-id",
              description: "Collection ID",
              args: { name: "collection-id" },
              isRequired: true,
            },
            {
              name: "--key",
              description: "Attribute Key",
              args: { name: "key" },
              isRequired: true,
            },
            {
              name: "--required",
              description: "Is attribute required?",
              isRequired: true,
            },
            {
              name: "--xdefault",
              description: "Default value for attribute when not provided",
              args: { name: "xdefault" },
              isRequired: true,
            },
            {
              name: "--new-key",
              description: "New Attribute Key",
              args: { name: "new-key" },
            },
            {
              name: "--description",
              description: "Optional description for the attribute",
              args: { name: "description" },
            },
          ],
        },
        {
          name: "create-url-attribute",
          description: "Create a URL attribute",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--collection-id",
              description: "Collection ID",
              args: { name: "collection-id" },
              isRequired: true,
            },
            {
              name: "--key",
              description: "Attribute Key",
              args: { name: "key" },
              isRequired: true,
            },
            {
              name: "--required",
              description: "Is attribute required?",
              isRequired: true,
            },
            {
              name: "--xdefault",
              description: "Default value for attribute when not provided",
              args: { name: "xdefault" },
            },
            { name: "--array", description: "Is attribute an array?" },
            {
              name: "--description",
              description: "Optional description for the attribute",
              args: { name: "description" },
            },
          ],
        },
        {
          name: "update-url-attribute",
          description: "Update an url attribute",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--collection-id",
              description: "Collection ID",
              args: { name: "collection-id" },
              isRequired: true,
            },
            {
              name: "--key",
              description: "Attribute Key",
              args: { name: "key" },
              isRequired: true,
            },
            {
              name: "--required",
              description: "Is attribute required?",
              isRequired: true,
            },
            {
              name: "--xdefault",
              description: "Default value for attribute when not provided",
              args: { name: "xdefault" },
              isRequired: true,
            },
            {
              name: "--new-key",
              description: "New Attribute Key",
              args: { name: "new-key" },
            },
            {
              name: "--description",
              description: "Optional description for the attribute",
              args: { name: "description" },
            },
          ],
        },
        {
          name: "create-varchar-attribute",
          description: "Create a varchar attribute",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--collection-id",
              description: "Collection ID",
              args: { name: "collection-id" },
              isRequired: true,
            },
            {
              name: "--key",
              description: "Attribute Key",
              args: { name: "key" },
              isRequired: true,
            },
            {
              name: "--size",
              description:
                "Attribute size for varchar attributes, in number of characters",
              args: { name: "size" },
              isRequired: true,
            },
            {
              name: "--required",
              description: "Is attribute required?",
              isRequired: true,
            },
            {
              name: "--xdefault",
              description: "Default value for attribute when not provided",
              args: { name: "xdefault" },
            },
            { name: "--array", description: "Is attribute an array?" },
            {
              name: "--encrypt",
              description: "Toggle encryption for the attribute",
            },
            {
              name: "--description",
              description: "Optional description for the attribute",
              args: { name: "description" },
            },
          ],
        },
        {
          name: "update-varchar-attribute",
          description: "Update a varchar attribute",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--collection-id",
              description: "Collection ID",
              args: { name: "collection-id" },
              isRequired: true,
            },
            {
              name: "--key",
              description: "Attribute Key",
              args: { name: "key" },
              isRequired: true,
            },
            {
              name: "--required",
              description: "Is attribute required?",
              isRequired: true,
            },
            {
              name: "--xdefault",
              description: "Default value for attribute when not provided",
              args: { name: "xdefault" },
              isRequired: true,
            },
            {
              name: "--size",
              description: "Maximum size of the varchar attribute",
              args: { name: "size" },
            },
            {
              name: "--new-key",
              description: "New Attribute Key",
              args: { name: "new-key" },
            },
            {
              name: "--description",
              description: "Optional description for the attribute",
              args: { name: "description" },
            },
          ],
        },
        {
          name: "get-attribute",
          description: "Get attribute by ID",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--collection-id",
              description: "Collection ID",
              args: { name: "collection-id" },
              isRequired: true,
            },
            {
              name: "--key",
              description: "Attribute Key",
              args: { name: "key" },
              isRequired: true,
            },
          ],
        },
        {
          name: "delete-attribute",
          description: "Deletes an attribute",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--collection-id",
              description: "Collection ID",
              args: { name: "collection-id" },
              isRequired: true,
            },
            {
              name: "--key",
              description: "Attribute Key",
              args: { name: "key" },
              isRequired: true,
            },
          ],
        },
        {
          name: "list-documents",
          description:
            "Get a list of all the user's documents in a given collection",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--collection-id",
              description: "Collection ID",
              args: { name: "collection-id" },
              isRequired: true,
            },
            {
              name: "--queries",
              description:
                "Array of query strings generated using the Query class provided by the SDK",
              args: { name: "queries" },
              isRepeatable: true,
            },
            {
              name: "--transaction-id",
              description:
                "Transaction ID to read uncommitted changes within the transaction",
              args: { name: "transaction-id" },
            },
            {
              name: "--total",
              description:
                "When set to false, the total count returned will be 0 and will not be calculated",
            },
            {
              name: "--ttl",
              description: "TTL (seconds) for caching list responses",
              args: { name: "ttl" },
            },
            ...listOptions,
            {
              name: "--select",
              description: "Attribute to include in the response",
              args: { name: "select" },
              isRepeatable: true,
            },
          ],
        },
        {
          name: "create-document",
          description: "Create a new Document",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--collection-id",
              description: "Collection ID",
              args: { name: "collection-id" },
              isRequired: true,
            },
            {
              name: "--document-id",
              description: "Document ID",
              args: { name: "document-id" },
              isRequired: true,
            },
            {
              name: "--data",
              description: "Document data as JSON object",
              args: { name: "data" },
              isRequired: true,
            },
            {
              name: "--permissions",
              description: "An array of permissions strings",
              args: { name: "permissions" },
              isRepeatable: true,
            },
            {
              name: "--transaction-id",
              description: "Transaction ID for staging the operation",
              args: { name: "transaction-id" },
            },
          ],
        },
        {
          name: "create-documents",
          description: "Create new Documents",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--collection-id",
              description: "Collection ID",
              args: { name: "collection-id" },
              isRequired: true,
            },
            {
              name: "--documents",
              description: "Array of documents data as JSON objects",
              args: { name: "documents" },
              isRepeatable: true,
              isRequired: true,
            },
            {
              name: "--transaction-id",
              description: "Transaction ID for staging the operation",
              args: { name: "transaction-id" },
            },
          ],
        },
        {
          name: "upsert-documents",
          description: "Create or update Documents",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--collection-id",
              description: "Collection ID",
              args: { name: "collection-id" },
              isRequired: true,
            },
            {
              name: "--documents",
              description: "Array of document data as JSON objects",
              args: { name: "documents" },
              isRepeatable: true,
              isRequired: true,
            },
            {
              name: "--transaction-id",
              description: "Transaction ID for staging the operation",
              args: { name: "transaction-id" },
            },
          ],
        },
        {
          name: "update-documents",
          description:
            "Update all documents that match your queries, if no queries are submitted then all documents are updated",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--collection-id",
              description: "Collection ID",
              args: { name: "collection-id" },
              isRequired: true,
            },
            {
              name: "--data",
              description: "Document data as JSON object",
              args: { name: "data" },
            },
            {
              name: "--queries",
              description:
                "Array of query strings generated using the Query class provided by the SDK",
              args: { name: "queries" },
              isRepeatable: true,
            },
            {
              name: "--transaction-id",
              description: "Transaction ID for staging the operation",
              args: { name: "transaction-id" },
            },
            ...listOptions,
          ],
        },
        {
          name: "delete-documents",
          description:
            "Bulk delete documents using queries, if no queries are passed then all documents are deleted",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--collection-id",
              description: "Collection ID",
              args: { name: "collection-id" },
              isRequired: true,
            },
            {
              name: "--queries",
              description:
                "Array of query strings generated using the Query class provided by the SDK",
              args: { name: "queries" },
              isRepeatable: true,
            },
            {
              name: "--transaction-id",
              description: "Transaction ID for staging the operation",
              args: { name: "transaction-id" },
            },
            ...listOptions,
          ],
        },
        {
          name: "create-query",
          description:
            "Get a list of all the user's documents in a given collection using a POST request",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--collection-id",
              description: "Collection ID",
              args: { name: "collection-id" },
              isRequired: true,
            },
            {
              name: "--queries",
              description:
                "Array of query strings generated using the Query class provided by the SDK",
              args: { name: "queries" },
              isRepeatable: true,
            },
            {
              name: "--transaction-id",
              description:
                "Transaction ID to read uncommitted changes within the transaction",
              args: { name: "transaction-id" },
            },
            {
              name: "--total",
              description:
                "When set to false, the total count returned will be 0 and will not be calculated",
            },
            {
              name: "--ttl",
              description: "TTL (seconds) for caching list responses",
              args: { name: "ttl" },
            },
            ...listOptions,
            {
              name: "--select",
              description: "Attribute to include in the response",
              args: { name: "select" },
              isRepeatable: true,
            },
          ],
        },
        {
          name: "get-document",
          description: "Get a document by its unique ID",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--collection-id",
              description: "Collection ID",
              args: { name: "collection-id" },
              isRequired: true,
            },
            {
              name: "--document-id",
              description: "Document ID",
              args: { name: "document-id" },
              isRequired: true,
            },
            {
              name: "--queries",
              description:
                "Array of query strings generated using the Query class provided by the SDK",
              args: { name: "queries" },
              isRepeatable: true,
            },
            {
              name: "--transaction-id",
              description:
                "Transaction ID to read uncommitted changes within the transaction",
              args: { name: "transaction-id" },
            },
            {
              name: "--select",
              description: "Attribute to include in the response",
              args: { name: "select" },
              isRepeatable: true,
            },
          ],
        },
        {
          name: "upsert-document",
          description: "Create or update a Document",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--collection-id",
              description: "Collection ID",
              args: { name: "collection-id" },
              isRequired: true,
            },
            {
              name: "--document-id",
              description: "Document ID",
              args: { name: "document-id" },
              isRequired: true,
            },
            {
              name: "--data",
              description: "Document data as JSON object",
              args: { name: "data" },
            },
            {
              name: "--permissions",
              description: "An array of permissions strings",
              args: { name: "permissions" },
              isRepeatable: true,
            },
            {
              name: "--transaction-id",
              description: "Transaction ID for staging the operation",
              args: { name: "transaction-id" },
            },
          ],
        },
        {
          name: "update-document",
          description: "Update a document by its unique ID",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--collection-id",
              description: "Collection ID",
              args: { name: "collection-id" },
              isRequired: true,
            },
            {
              name: "--document-id",
              description: "Document ID",
              args: { name: "document-id" },
              isRequired: true,
            },
            {
              name: "--data",
              description: "Document data as JSON object",
              args: { name: "data" },
            },
            {
              name: "--permissions",
              description: "An array of permissions strings",
              args: { name: "permissions" },
              isRepeatable: true,
            },
            {
              name: "--transaction-id",
              description: "Transaction ID for staging the operation",
              args: { name: "transaction-id" },
            },
          ],
        },
        {
          name: "delete-document",
          description: "Delete a document by its unique ID",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--collection-id",
              description: "Collection ID",
              args: { name: "collection-id" },
              isRequired: true,
            },
            {
              name: "--document-id",
              description: "Document ID",
              args: { name: "document-id" },
              isRequired: true,
            },
            {
              name: "--transaction-id",
              description: "Transaction ID for staging the operation",
              args: { name: "transaction-id" },
            },
          ],
        },
        {
          name: "decrement-document-attribute",
          description:
            "Decrement a specific attribute of a document by a given value",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--collection-id",
              description: "Collection ID",
              args: { name: "collection-id" },
              isRequired: true,
            },
            {
              name: "--document-id",
              description: "Document ID",
              args: { name: "document-id" },
              isRequired: true,
            },
            {
              name: "--attribute",
              description: "Attribute key",
              args: { name: "attribute" },
              isRequired: true,
            },
            {
              name: "--value",
              description: "Value to increment the attribute by",
              args: { name: "value" },
            },
            {
              name: "--min",
              description: "Minimum value for the attribute",
              args: { name: "min" },
            },
            {
              name: "--transaction-id",
              description: "Transaction ID for staging the operation",
              args: { name: "transaction-id" },
            },
          ],
        },
        {
          name: "increment-document-attribute",
          description:
            "Increment a specific attribute of a document by a given value",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--collection-id",
              description: "Collection ID",
              args: { name: "collection-id" },
              isRequired: true,
            },
            {
              name: "--document-id",
              description: "Document ID",
              args: { name: "document-id" },
              isRequired: true,
            },
            {
              name: "--attribute",
              description: "Attribute key",
              args: { name: "attribute" },
              isRequired: true,
            },
            {
              name: "--value",
              description: "Value to increment the attribute by",
              args: { name: "value" },
            },
            {
              name: "--max",
              description: "Maximum value for the attribute",
              args: { name: "max" },
            },
            {
              name: "--transaction-id",
              description: "Transaction ID for staging the operation",
              args: { name: "transaction-id" },
            },
          ],
        },
        {
          name: "list-indexes",
          description: "List indexes in the collection",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--collection-id",
              description: "Collection ID",
              args: { name: "collection-id" },
              isRequired: true,
            },
            {
              name: "--queries",
              description:
                "Array of query strings generated using the Query class provided by the SDK",
              args: { name: "queries" },
              isRepeatable: true,
            },
            {
              name: "--total",
              description:
                "When set to false, the total count returned will be 0 and will not be calculated",
            },
            ...listOptions,
          ],
        },
        {
          name: "create-index",
          description: "Creates an index on the attributes listed",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--collection-id",
              description: "Collection ID",
              args: { name: "collection-id" },
              isRequired: true,
            },
            {
              name: "--key",
              description: "Index Key",
              args: { name: "key" },
              isRequired: true,
            },
            {
              name: "--type",
              description: "Index type",
              args: { name: "type" },
              isRequired: true,
            },
            {
              name: "--attributes",
              description: "Array of attributes to index",
              args: { name: "attributes" },
              isRepeatable: true,
              isRequired: true,
            },
            {
              name: "--orders",
              description: "Array of index orders",
              args: { name: "orders" },
              isRepeatable: true,
            },
            {
              name: "--lengths",
              description: "Length of index",
              args: { name: "lengths" },
              isRepeatable: true,
            },
            {
              name: "--description",
              description: "Optional description for the index",
              args: { name: "description" },
            },
          ],
        },
        {
          name: "get-index",
          description: "Get an index by its unique ID",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--collection-id",
              description: "Collection ID",
              args: { name: "collection-id" },
              isRequired: true,
            },
            {
              name: "--key",
              description: "Index Key",
              args: { name: "key" },
              isRequired: true,
            },
          ],
        },
        {
          name: "delete-index",
          description: "Delete an index",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--collection-id",
              description: "Collection ID",
              args: { name: "collection-id" },
              isRequired: true,
            },
            {
              name: "--key",
              description: "Index Key",
              args: { name: "key" },
              isRequired: true,
            },
          ],
        },
      ],
    },
    {
      name: "documentsdb",
      description: "Document databases, collections and documents",
      icon,
      subcommands: [
        {
          name: "list",
          description:
            "Get a list of all databases from the current Appwrite project",
          icon,
          options: [
            {
              name: "--queries",
              description:
                "Array of query strings generated using the Query class provided by the SDK",
              args: { name: "queries" },
              isRepeatable: true,
            },
            {
              name: "--total",
              description:
                "When set to false, the total count returned will be 0 and will not be calculated",
            },
            ...listOptions,
          ],
        },
        {
          name: "create",
          description: "Create a new Database",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Unique Id",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--name",
              description: "Database name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--enabled",
              description:
                "Is the database enabled? When set to 'disabled', users cannot access the database but Server SDKs with an API key can still read and write to the database",
            },
            {
              name: "--description",
              description: "Optional description for the database",
              args: { name: "description" },
            },
            {
              name: "--specification",
              description: "Database specification",
              args: { name: "specification" },
            },
            {
              name: "--replicas",
              description:
                "Number of high availability replicas (0-5) for the dedicated database backing this database",
              args: { name: "replicas" },
            },
            {
              name: "--sync-mode",
              description:
                "Replication sync mode for the dedicated database backing this database",
              args: {
                name: "sync-mode",
                suggestions: ["async", "sync", "quorum"],
              },
            },
          ],
        },
        {
          name: "list-specifications",
          description:
            "List the dedicated database specifications available on the current plan",
          icon,
        },
        {
          name: "list-transactions",
          description: "List transactions across all databases",
          icon,
          options: [
            {
              name: "--queries",
              description:
                "Array of query strings generated using the Query class provided by the SDK",
              args: { name: "queries" },
              isRepeatable: true,
            },
            {
              name: "--total",
              description:
                "When set to false, the total count returned will be 0 and will not be calculated",
            },
            ...listOptions,
          ],
        },
        {
          name: "create-transaction",
          description: "Create a new transaction",
          icon,
          options: [
            {
              name: "--ttl",
              description: "Seconds before the transaction expires",
              args: { name: "ttl" },
            },
          ],
        },
        {
          name: "get-transaction",
          description: "Get a transaction by its unique ID",
          icon,
          options: [
            {
              name: "--transaction-id",
              description: "Transaction ID",
              args: { name: "transaction-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "update-transaction",
          description:
            "Update a transaction, to either commit or roll back its operations",
          icon,
          options: [
            {
              name: "--transaction-id",
              description: "Transaction ID",
              args: { name: "transaction-id" },
              isRequired: true,
            },
            { name: "--commit", description: "Commit transaction?" },
            { name: "--rollback", description: "Rollback transaction?" },
          ],
        },
        {
          name: "delete-transaction",
          description: "Delete a transaction by its unique ID",
          icon,
          options: [
            {
              name: "--transaction-id",
              description: "Transaction ID",
              args: { name: "transaction-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "create-operations",
          description: "Create multiple operations in a single transaction",
          icon,
          options: [
            {
              name: "--transaction-id",
              description: "Transaction ID",
              args: { name: "transaction-id" },
              isRequired: true,
            },
            {
              name: "--operations",
              description: "Array of staged operations",
              args: { name: "operations" },
              isRepeatable: true,
            },
          ],
        },
        {
          name: "get",
          description: "Get a database by its unique ID",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "update",
          description: "Update a database by its unique ID",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--name",
              description: "Database name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--enabled",
              description:
                "Is database enabled? When set to 'disabled', users cannot access the database but Server SDKs with an API key can still read and write to the database",
            },
            {
              name: "--description",
              description: "Optional description for the database",
              args: { name: "description" },
            },
            {
              name: "--specification",
              description: "Database specification",
              args: { name: "specification" },
            },
            {
              name: "--replicas",
              description:
                "Number of high availability replicas (0-5) for the dedicated database backing this database",
              args: { name: "replicas" },
            },
            {
              name: "--sync-mode",
              description:
                "Replication sync mode for the dedicated database backing this database",
              args: {
                name: "sync-mode",
                suggestions: ["async", "sync", "quorum"],
              },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a database by its unique ID",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "list-collections",
          description:
            "Get a list of all collections that belong to the provided databaseId",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--queries",
              description:
                "Array of query strings generated using the Query class provided by the SDK",
              args: { name: "queries" },
              isRepeatable: true,
            },
            {
              name: "--search",
              description: "Search term to filter your list results",
              args: { name: "search" },
            },
            {
              name: "--total",
              description:
                "When set to false, the total count returned will be 0 and will not be calculated",
            },
            ...listOptions,
          ],
        },
        {
          name: "create-collection",
          description: "Create a new Collection",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--collection-id",
              description: "Unique Id",
              args: { name: "collection-id" },
              isRequired: true,
            },
            {
              name: "--name",
              description: "Collection name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--permissions",
              description: "An array of permissions strings",
              args: { name: "permissions" },
              isRepeatable: true,
            },
            {
              name: "--document-security",
              description:
                "Enables configuring permissions for individual documents",
            },
            {
              name: "--enabled",
              description:
                "Is collection enabled? When set to 'disabled', users cannot access the collection but Server SDKs with and API key can still read and write to the collection",
            },
            {
              name: "--attributes",
              description: "Array of attribute definitions to create",
              args: { name: "attributes" },
              isRepeatable: true,
            },
            {
              name: "--indexes",
              description: "Array of index definitions to create",
              args: { name: "indexes" },
              isRepeatable: true,
            },
            {
              name: "--description",
              description: "Optional description for the collection",
              args: { name: "description" },
            },
          ],
        },
        {
          name: "get-collection",
          description: "Get a collection by its unique ID",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--collection-id",
              description: "Collection ID",
              args: { name: "collection-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "update-collection",
          description: "Update a collection by its unique ID",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--collection-id",
              description: "Collection ID",
              args: { name: "collection-id" },
              isRequired: true,
            },
            {
              name: "--name",
              description: "Collection name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--permissions",
              description: "An array of permission strings",
              args: { name: "permissions" },
              isRepeatable: true,
            },
            {
              name: "--document-security",
              description:
                "Enables configuring permissions for individual documents",
            },
            {
              name: "--enabled",
              description:
                "Is collection enabled? When set to 'disabled', users cannot access the collection but Server SDKs with and API key can still read and write to the collection",
            },
            {
              name: "--purge",
              description:
                "When true, purge all cached list responses for this collection as part of the update",
            },
            {
              name: "--description",
              description: "Optional description for the collection",
              args: { name: "description" },
            },
          ],
        },
        {
          name: "delete-collection",
          description: "Delete a collection by its unique ID",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--collection-id",
              description: "Collection ID",
              args: { name: "collection-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "list-documents",
          description:
            "Get a list of all the user's documents in a given collection",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--collection-id",
              description: "Collection ID",
              args: { name: "collection-id" },
              isRequired: true,
            },
            {
              name: "--queries",
              description:
                "Array of query strings generated using the Query class provided by the SDK",
              args: { name: "queries" },
              isRepeatable: true,
            },
            {
              name: "--transaction-id",
              description:
                "Transaction ID to read uncommitted changes within the transaction",
              args: { name: "transaction-id" },
            },
            {
              name: "--total",
              description:
                "When set to false, the total count returned will be 0 and will not be calculated",
            },
            {
              name: "--ttl",
              description:
                "TTL (seconds) for cached responses when caching is enabled for select queries",
              args: { name: "ttl" },
            },
            ...listOptions,
            {
              name: "--select",
              description: "Attribute to include in the response",
              args: { name: "select" },
              isRepeatable: true,
            },
          ],
        },
        {
          name: "create-document",
          description: "Create a new Document",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--collection-id",
              description: "Collection ID",
              args: { name: "collection-id" },
              isRequired: true,
            },
            {
              name: "--document-id",
              description: "Document ID",
              args: { name: "document-id" },
              isRequired: true,
            },
            {
              name: "--data",
              description: "Document data as JSON object",
              args: { name: "data" },
              isRequired: true,
            },
            {
              name: "--permissions",
              description: "An array of permissions strings",
              args: { name: "permissions" },
              isRepeatable: true,
            },
            {
              name: "--transaction-id",
              description: "Transaction ID for staging the operation",
              args: { name: "transaction-id" },
            },
          ],
        },
        {
          name: "create-documents",
          description: "Create new Documents",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--collection-id",
              description: "Collection ID",
              args: { name: "collection-id" },
              isRequired: true,
            },
            {
              name: "--documents",
              description: "Array of documents data as JSON objects",
              args: { name: "documents" },
              isRepeatable: true,
              isRequired: true,
            },
            {
              name: "--transaction-id",
              description: "Transaction ID for staging the operation",
              args: { name: "transaction-id" },
            },
          ],
        },
        {
          name: "upsert-documents",
          description: "Create or update Documents",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--collection-id",
              description: "Collection ID",
              args: { name: "collection-id" },
              isRequired: true,
            },
            {
              name: "--documents",
              description: "Array of document data as JSON objects",
              args: { name: "documents" },
              isRepeatable: true,
              isRequired: true,
            },
            {
              name: "--transaction-id",
              description: "Transaction ID for staging the operation",
              args: { name: "transaction-id" },
            },
          ],
        },
        {
          name: "update-documents",
          description:
            "Update all documents that match your queries, if no queries are submitted then all documents are updated",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--collection-id",
              description: "Collection ID",
              args: { name: "collection-id" },
              isRequired: true,
            },
            {
              name: "--data",
              description: "Document data as JSON object",
              args: { name: "data" },
            },
            {
              name: "--queries",
              description:
                "Array of query strings generated using the Query class provided by the SDK",
              args: { name: "queries" },
              isRepeatable: true,
            },
            {
              name: "--transaction-id",
              description: "Transaction ID for staging the operation",
              args: { name: "transaction-id" },
            },
            ...listOptions,
          ],
        },
        {
          name: "delete-documents",
          description:
            "Bulk delete documents using queries, if no queries are passed then all documents are deleted",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--collection-id",
              description: "Collection ID",
              args: { name: "collection-id" },
              isRequired: true,
            },
            {
              name: "--queries",
              description:
                "Array of query strings generated using the Query class provided by the SDK",
              args: { name: "queries" },
              isRepeatable: true,
            },
            {
              name: "--transaction-id",
              description: "Transaction ID for staging the operation",
              args: { name: "transaction-id" },
            },
            ...listOptions,
          ],
        },
        {
          name: "create-query",
          description:
            "Get a list of all the user's documents in a given collection using a POST request",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--collection-id",
              description: "Collection ID",
              args: { name: "collection-id" },
              isRequired: true,
            },
            {
              name: "--queries",
              description:
                "Array of query strings generated using the Query class provided by the SDK",
              args: { name: "queries" },
              isRepeatable: true,
            },
            {
              name: "--transaction-id",
              description:
                "Transaction ID to read uncommitted changes within the transaction",
              args: { name: "transaction-id" },
            },
            {
              name: "--total",
              description:
                "When set to false, the total count returned will be 0 and will not be calculated",
            },
            {
              name: "--ttl",
              description:
                "TTL (seconds) for cached responses when caching is enabled for select queries",
              args: { name: "ttl" },
            },
            ...listOptions,
            {
              name: "--select",
              description: "Attribute to include in the response",
              args: { name: "select" },
              isRepeatable: true,
            },
          ],
        },
        {
          name: "get-document",
          description: "Get a document by its unique ID",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--collection-id",
              description: "Collection ID",
              args: { name: "collection-id" },
              isRequired: true,
            },
            {
              name: "--document-id",
              description: "Document ID",
              args: { name: "document-id" },
              isRequired: true,
            },
            {
              name: "--queries",
              description:
                "Array of query strings generated using the Query class provided by the SDK",
              args: { name: "queries" },
              isRepeatable: true,
            },
            {
              name: "--transaction-id",
              description:
                "Transaction ID to read uncommitted changes within the transaction",
              args: { name: "transaction-id" },
            },
            {
              name: "--select",
              description: "Attribute to include in the response",
              args: { name: "select" },
              isRepeatable: true,
            },
          ],
        },
        {
          name: "upsert-document",
          description: "Create or update a Document",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--collection-id",
              description: "Collection ID",
              args: { name: "collection-id" },
              isRequired: true,
            },
            {
              name: "--document-id",
              description: "Document ID",
              args: { name: "document-id" },
              isRequired: true,
            },
            {
              name: "--data",
              description: "Document data as JSON object",
              args: { name: "data" },
            },
            {
              name: "--permissions",
              description: "An array of permissions strings",
              args: { name: "permissions" },
              isRepeatable: true,
            },
            {
              name: "--transaction-id",
              description: "Transaction ID for staging the operation",
              args: { name: "transaction-id" },
            },
          ],
        },
        {
          name: "update-document",
          description: "Update a document by its unique ID",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--collection-id",
              description: "Collection ID",
              args: { name: "collection-id" },
              isRequired: true,
            },
            {
              name: "--document-id",
              description: "Document ID",
              args: { name: "document-id" },
              isRequired: true,
            },
            {
              name: "--data",
              description: "Document data as JSON object",
              args: { name: "data" },
            },
            {
              name: "--permissions",
              description: "An array of permissions strings",
              args: { name: "permissions" },
              isRepeatable: true,
            },
            {
              name: "--transaction-id",
              description: "Transaction ID for staging the operation",
              args: { name: "transaction-id" },
            },
          ],
        },
        {
          name: "delete-document",
          description: "Delete a document by its unique ID",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--collection-id",
              description: "Collection ID",
              args: { name: "collection-id" },
              isRequired: true,
            },
            {
              name: "--document-id",
              description: "Document ID",
              args: { name: "document-id" },
              isRequired: true,
            },
            {
              name: "--transaction-id",
              description: "Transaction ID for staging the operation",
              args: { name: "transaction-id" },
            },
          ],
        },
        {
          name: "decrement-document-attribute",
          description: "Decrement a specific column of a row by a given value",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--collection-id",
              description: "Collection ID",
              args: { name: "collection-id" },
              isRequired: true,
            },
            {
              name: "--document-id",
              description: "Document ID",
              args: { name: "document-id" },
              isRequired: true,
            },
            {
              name: "--attribute",
              description: "Attribute key",
              args: { name: "attribute" },
              isRequired: true,
            },
            {
              name: "--value",
              description: "Value to decrement the attribute by",
              args: { name: "value" },
            },
            {
              name: "--min",
              description: "Minimum value for the attribute",
              args: { name: "min" },
            },
            {
              name: "--transaction-id",
              description: "Transaction ID for staging the operation",
              args: { name: "transaction-id" },
            },
          ],
        },
        {
          name: "increment-document-attribute",
          description: "Increment a specific column of a row by a given value",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--collection-id",
              description: "Collection ID",
              args: { name: "collection-id" },
              isRequired: true,
            },
            {
              name: "--document-id",
              description: "Document ID",
              args: { name: "document-id" },
              isRequired: true,
            },
            {
              name: "--attribute",
              description: "Attribute key",
              args: { name: "attribute" },
              isRequired: true,
            },
            {
              name: "--value",
              description: "Value to increment the attribute by",
              args: { name: "value" },
            },
            {
              name: "--max",
              description: "Maximum value for the attribute",
              args: { name: "max" },
            },
            {
              name: "--transaction-id",
              description: "Transaction ID for staging the operation",
              args: { name: "transaction-id" },
            },
          ],
        },
        {
          name: "list-indexes",
          description: "List indexes in the collection",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--collection-id",
              description: "Collection ID",
              args: { name: "collection-id" },
              isRequired: true,
            },
            {
              name: "--queries",
              description:
                "Array of query strings generated using the Query class provided by the SDK",
              args: { name: "queries" },
              isRepeatable: true,
            },
            {
              name: "--total",
              description:
                "When set to false, the total count returned will be 0 and will not be calculated",
            },
            ...listOptions,
          ],
        },
        {
          name: "create-index",
          description: "Creates an index on the attributes listed",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--collection-id",
              description: "Collection ID",
              args: { name: "collection-id" },
              isRequired: true,
            },
            {
              name: "--key",
              description: "Index Key",
              args: { name: "key" },
              isRequired: true,
            },
            {
              name: "--type",
              description: "Index type",
              args: { name: "type" },
              isRequired: true,
            },
            {
              name: "--attributes",
              description: "Array of attributes to index",
              args: { name: "attributes" },
              isRepeatable: true,
              isRequired: true,
            },
            {
              name: "--orders",
              description: "Array of index orders",
              args: { name: "orders" },
              isRepeatable: true,
            },
            {
              name: "--lengths",
              description: "Length of index",
              args: { name: "lengths" },
              isRepeatable: true,
            },
            {
              name: "--description",
              description: "Optional description for the index",
              args: { name: "description" },
            },
          ],
        },
        {
          name: "get-index",
          description: "Get index by ID",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--collection-id",
              description: "Collection ID",
              args: { name: "collection-id" },
              isRequired: true,
            },
            {
              name: "--key",
              description: "Index Key",
              args: { name: "key" },
              isRequired: true,
            },
          ],
        },
        {
          name: "delete-index",
          description: "Delete an index",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--collection-id",
              description: "Collection ID",
              args: { name: "collection-id" },
              isRequired: true,
            },
            {
              name: "--key",
              description: "Index Key",
              args: { name: "key" },
              isRequired: true,
            },
          ],
        },
        {
          name: "create-failover",
          description:
            "Trigger a manual failover for a dedicated database with high availability enabled",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--target-replica-id",
              description: "Target replica ID to promote",
              args: { name: "target-replica-id" },
            },
          ],
        },
        {
          name: "list-operations",
          description:
            "List the lifecycle operations recorded for a dedicated database, newest first",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--status",
              description: "Filter by operation status",
              args: { name: "status" },
            },
            {
              name: "--limit",
              description: "Maximum number of operations to return",
              args: { name: "limit" },
            },
            {
              name: "--offset",
              description: "Number of operations to skip",
              args: { name: "offset" },
            },
          ],
        },
        {
          name: "get-replicas",
          description: "Get high availability status for a dedicated database",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "get-status",
          description:
            "Get real-time health and status information for a dedicated database",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
          ],
        },
      ],
    },
    {
      name: "domains",
      description: "Register domains and manage their DNS records",
      icon,
      subcommands: [
        {
          name: "list",
          description: "List all domains registered for this project",
          icon,
          options: [
            {
              name: "--queries",
              description:
                "Array of query strings generated using the Query class provided by the SDK",
              args: { name: "queries" },
              isRepeatable: true,
            },
            {
              name: "--search",
              description: "Search term to filter your list results",
              args: { name: "search" },
            },
            {
              name: "--total",
              description:
                "When set to false, the total count returned will be 0 and will not be calculated",
            },
            ...listOptions,
          ],
        },
        {
          name: "create",
          description: "Create a new domain",
          icon,
          options: [
            {
              name: "--team-id",
              description: "Team unique ID",
              args: { name: "team-id" },
              isRequired: true,
            },
            {
              name: "--domain",
              description: 'Domain name (e.g. "example.com")',
              args: { name: "domain" },
              isRequired: true,
            },
          ],
        },
        {
          name: "get-price",
          description: "Get the registration price for a domain name",
          icon,
          options: [
            {
              name: "--domain",
              description: "Domain name to get price for",
              args: { name: "domain" },
              isRequired: true,
            },
            {
              name: "--period-years",
              description: "Number of years to calculate the domain price for",
              args: { name: "period-years" },
            },
            {
              name: "--registration-type",
              description: "Type of registration pricing to fetch",
              args: {
                name: "registration-type",
                suggestions: ["new", "transfer", "renewal", "trade"],
              },
            },
          ],
        },
        {
          name: "list-prices",
          description:
            "Check availability and get the requested registration price for one or more domain names",
          icon,
          options: [
            {
              name: "--domains",
              description: "Domain names to check availability and price for",
              args: { name: "domains" },
              isRepeatable: true,
              isRequired: true,
            },
            {
              name: "--period-years",
              description: "Number of years to calculate the domain price for",
              args: { name: "period-years" },
            },
            {
              name: "--registration-type",
              description: "Type of registration pricing to fetch",
              args: {
                name: "registration-type",
                suggestions: ["new", "transfer", "renewal", "trade"],
              },
            },
          ],
        },
        {
          name: "get",
          description: "Get a domain by its unique ID",
          icon,
          options: [
            {
              name: "--domain-id",
              description: "Domain unique ID",
              args: { name: "domain-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a domain by its unique ID",
          icon,
          options: [
            {
              name: "--domain-id",
              description: "Domain unique ID",
              args: { name: "domain-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "update-nameservers",
          description: "Update the registrar nameservers for the given domain",
          icon,
          options: [
            {
              name: "--domain-id",
              description: "Domain unique ID",
              args: { name: "domain-id" },
              isRequired: true,
            },
            {
              name: "--nameservers",
              description: "Nameservers to set for the domain",
              args: { name: "nameservers" },
              isRepeatable: true,
            },
          ],
        },
        {
          name: "verify-nameservers",
          description:
            "Verify which NS records are used and update the domain accordingly",
          icon,
          options: [
            {
              name: "--domain-id",
              description: "Domain unique ID",
              args: { name: "domain-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "get-preset-google-workspace",
          description: "List Google Workspace DNS records",
          icon,
          options: [
            {
              name: "--domain-id",
              description: "Domain unique ID",
              args: { name: "domain-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "create-preset-google-workspace",
          description: "Add Google Workspace DNS records to the domain",
          icon,
          options: [
            {
              name: "--domain-id",
              description: "Domain unique ID",
              args: { name: "domain-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "get-preset-i-cloud",
          description: "List iCloud DNS records",
          icon,
          options: [
            {
              name: "--domain-id",
              description: "Domain unique ID",
              args: { name: "domain-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "create-preset-i-cloud",
          description: "Add iCloud DNS records to the domain",
          icon,
          options: [
            {
              name: "--domain-id",
              description: "Domain unique ID",
              args: { name: "domain-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "get-preset-mailgun",
          description: "List Mailgun DNS records",
          icon,
          options: [
            {
              name: "--domain-id",
              description: "Domain unique ID",
              args: { name: "domain-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "create-preset-mailgun",
          description: "Add Mailgun DNS records to the domain",
          icon,
          options: [
            {
              name: "--domain-id",
              description: "Domain unique ID",
              args: { name: "domain-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "get-preset-outlook",
          description: "List Outlook DNS records",
          icon,
          options: [
            {
              name: "--domain-id",
              description: "Domain unique ID",
              args: { name: "domain-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "create-preset-outlook",
          description: "Add Outlook DNS records to the domain",
          icon,
          options: [
            {
              name: "--domain-id",
              description: "Domain unique ID",
              args: { name: "domain-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "get-preset-proton-mail",
          description: "List ProtonMail DNS records",
          icon,
          options: [
            {
              name: "--domain-id",
              description: "Domain unique ID",
              args: { name: "domain-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "create-preset-proton-mail",
          description: "Add ProtonMail DNS records to the domain",
          icon,
          options: [
            {
              name: "--domain-id",
              description: "Domain unique ID",
              args: { name: "domain-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "get-preset-zoho",
          description: "List Zoho DNS records",
          icon,
          options: [
            {
              name: "--domain-id",
              description: "Domain unique ID",
              args: { name: "domain-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "create-preset-zoho",
          description: "Add Zoho Mail DNS records to the domain",
          icon,
          options: [
            {
              name: "--domain-id",
              description: "Domain unique ID",
              args: { name: "domain-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "list-records",
          description: "List DNS records for a given domain",
          icon,
          options: [
            {
              name: "--domain-id",
              description: "Domain unique ID",
              args: { name: "domain-id" },
              isRequired: true,
            },
            {
              name: "--queries",
              description:
                "Array of query strings generated using the Query class provided by the SDK",
              args: { name: "queries" },
              isRepeatable: true,
            },
            {
              name: "--total",
              description:
                "When set to false, the total count returned will be 0 and will not be calculated",
            },
            ...listOptions,
          ],
        },
        {
          name: "create-record-a",
          description: "Create a new A record for the given domain",
          icon,
          options: [
            {
              name: "--domain-id",
              description: "Domain unique ID",
              args: { name: "domain-id" },
              isRequired: true,
            },
            {
              name: "--name",
              description:
                "Record name relative to the domain, such as `www`, or `@` for the domain itself",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--value",
              description: "IPv4 address for this A record",
              args: { name: "value" },
              isRequired: true,
            },
            {
              name: "--ttl",
              description: "Time to live, in seconds",
              args: { name: "ttl" },
              isRequired: true,
            },
            {
              name: "--comment",
              description: "A comment explaining what this record is for",
              args: { name: "comment" },
            },
          ],
        },
        {
          name: "update-record-a",
          description: "Update an existing A record for the given domain",
          icon,
          options: [
            {
              name: "--domain-id",
              description: "Domain unique ID",
              args: { name: "domain-id" },
              isRequired: true,
            },
            {
              name: "--record-id",
              description: "DNS record unique ID",
              args: { name: "record-id" },
              isRequired: true,
            },
            {
              name: "--name",
              description:
                "Record name relative to the domain, such as `www`, or `@` for the domain itself",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--value",
              description: "IPv4 address for this A record",
              args: { name: "value" },
              isRequired: true,
            },
            {
              name: "--ttl",
              description: "Time to live, in seconds",
              args: { name: "ttl" },
              isRequired: true,
            },
            {
              name: "--comment",
              description: "A comment explaining what this record is for",
              args: { name: "comment" },
            },
          ],
        },
        {
          name: "create-record-aaaa",
          description: "Create a new AAAA record for the given domain",
          icon,
          options: [
            {
              name: "--domain-id",
              description: "Domain unique ID",
              args: { name: "domain-id" },
              isRequired: true,
            },
            {
              name: "--name",
              description:
                "Record name relative to the domain, such as `www`, or `@` for the domain itself",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--value",
              description: "IPv6 address for this AAAA record",
              args: { name: "value" },
              isRequired: true,
            },
            {
              name: "--ttl",
              description: "Time to live, in seconds",
              args: { name: "ttl" },
              isRequired: true,
            },
            {
              name: "--comment",
              description: "A comment explaining what this record is for",
              args: { name: "comment" },
            },
          ],
        },
        {
          name: "update-record-aaaa",
          description: "Update an existing AAAA record for the given domain",
          icon,
          options: [
            {
              name: "--domain-id",
              description: "Domain unique ID",
              args: { name: "domain-id" },
              isRequired: true,
            },
            {
              name: "--record-id",
              description: "DNS record unique ID",
              args: { name: "record-id" },
              isRequired: true,
            },
            {
              name: "--name",
              description:
                "Record name relative to the domain, such as `www`, or `@` for the domain itself",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--value",
              description: "IPv6 address for this AAAA record",
              args: { name: "value" },
              isRequired: true,
            },
            {
              name: "--ttl",
              description: "Time to live, in seconds",
              args: { name: "ttl" },
              isRequired: true,
            },
            {
              name: "--comment",
              description: "A comment for this record",
              args: { name: "comment" },
            },
          ],
        },
        {
          name: "create-record-alias",
          description: "Create a new ALIAS record for the given domain",
          icon,
          options: [
            {
              name: "--domain-id",
              description: "Domain unique ID",
              args: { name: "domain-id" },
              isRequired: true,
            },
            {
              name: "--name",
              description:
                "Record name relative to the domain, such as `www`, or `@` for the domain itself",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--value",
              description: "Target domain for this ALIAS record",
              args: { name: "value" },
              isRequired: true,
            },
            {
              name: "--ttl",
              description: "Time to live, in seconds",
              args: { name: "ttl" },
              isRequired: true,
            },
            {
              name: "--comment",
              description: "A comment for this record",
              args: { name: "comment" },
            },
          ],
        },
        {
          name: "update-record-alias",
          description:
            "Update an existing ALIAS record for the specified domain",
          icon,
          options: [
            {
              name: "--domain-id",
              description: "Domain unique ID",
              args: { name: "domain-id" },
              isRequired: true,
            },
            {
              name: "--record-id",
              description: "DNS record unique ID",
              args: { name: "record-id" },
              isRequired: true,
            },
            {
              name: "--name",
              description:
                "Record name relative to the domain, such as `www`, or `@` for the domain itself",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--value",
              description: "Target domain for this ALIAS record",
              args: { name: "value" },
              isRequired: true,
            },
            {
              name: "--ttl",
              description: "Time to live, in seconds",
              args: { name: "ttl" },
              isRequired: true,
            },
            {
              name: "--comment",
              description: "A comment for this record",
              args: { name: "comment" },
            },
          ],
        },
        {
          name: "create-record-caa",
          description: "Create a new CAA record for the given domain",
          icon,
          options: [
            {
              name: "--domain-id",
              description: "Domain unique ID",
              args: { name: "domain-id" },
              isRequired: true,
            },
            {
              name: "--name",
              description:
                "Record name relative to the domain, such as `www`, or `@` for the domain itself",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--value",
              description: "CAA value (e.g. issuer domain)",
              args: { name: "value" },
              isRequired: true,
            },
            {
              name: "--ttl",
              description: "Time to live, in seconds",
              args: { name: "ttl" },
              isRequired: true,
            },
            {
              name: "--comment",
              description: "A comment for this record",
              args: { name: "comment" },
            },
          ],
        },
        {
          name: "update-record-caa",
          description: "Update an existing CAA record for the given domain",
          icon,
          options: [
            {
              name: "--domain-id",
              description: "Domain unique ID",
              args: { name: "domain-id" },
              isRequired: true,
            },
            {
              name: "--record-id",
              description: "DNS record unique ID",
              args: { name: "record-id" },
              isRequired: true,
            },
            {
              name: "--name",
              description:
                "Record name relative to the domain, such as `www`, or `@` for the domain itself",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--value",
              description: "CAA value (e.g. issuer domain)",
              args: { name: "value" },
              isRequired: true,
            },
            {
              name: "--ttl",
              description: "Time to live, in seconds",
              args: { name: "ttl" },
              isRequired: true,
            },
            {
              name: "--comment",
              description: "A comment for this record",
              args: { name: "comment" },
            },
          ],
        },
        {
          name: "create-record-cname",
          description: "Create a new CNAME record for the given domain",
          icon,
          options: [
            {
              name: "--domain-id",
              description: "Domain unique ID",
              args: { name: "domain-id" },
              isRequired: true,
            },
            {
              name: "--name",
              description: "Record name relative to the domain, such as `www`",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--value",
              description: "Canonical target for this CNAME record",
              args: { name: "value" },
              isRequired: true,
            },
            {
              name: "--ttl",
              description: "Time to live, in seconds",
              args: { name: "ttl" },
              isRequired: true,
            },
            {
              name: "--comment",
              description: "A comment for this record",
              args: { name: "comment" },
            },
          ],
        },
        {
          name: "update-record-cname",
          description: "Update an existing CNAME record for the given domain",
          icon,
          options: [
            {
              name: "--domain-id",
              description: "Domain unique ID",
              args: { name: "domain-id" },
              isRequired: true,
            },
            {
              name: "--record-id",
              description: "DNS record unique ID",
              args: { name: "record-id" },
              isRequired: true,
            },
            {
              name: "--name",
              description: "Record name relative to the domain, such as `www`",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--value",
              description: "Canonical target for this CNAME record",
              args: { name: "value" },
              isRequired: true,
            },
            {
              name: "--ttl",
              description: "Time to live, in seconds",
              args: { name: "ttl" },
              isRequired: true,
            },
            {
              name: "--comment",
              description: "A comment for this record",
              args: { name: "comment" },
            },
          ],
        },
        {
          name: "create-record-https",
          description: "Create a new HTTPS record for the given domain",
          icon,
          options: [
            {
              name: "--domain-id",
              description: "Domain unique ID",
              args: { name: "domain-id" },
              isRequired: true,
            },
            {
              name: "--name",
              description:
                "Record name relative to the domain, such as `www`, or `@` for the domain itself",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--value",
              description: "Target for the HTTPS record",
              args: { name: "value" },
              isRequired: true,
            },
            {
              name: "--ttl",
              description: "Time to live, in seconds",
              args: { name: "ttl" },
              isRequired: true,
            },
            {
              name: "--comment",
              description: "A comment for this record",
              args: { name: "comment" },
            },
          ],
        },
        {
          name: "update-record-https",
          description: "Update an existing HTTPS record for the given domain",
          icon,
          options: [
            {
              name: "--domain-id",
              description: "Domain unique ID",
              args: { name: "domain-id" },
              isRequired: true,
            },
            {
              name: "--record-id",
              description: "DNS record unique ID",
              args: { name: "record-id" },
              isRequired: true,
            },
            {
              name: "--name",
              description:
                "Record name relative to the domain, such as `www`, or `@` for the domain itself",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--value",
              description: "Target for the HTTPS record",
              args: { name: "value" },
              isRequired: true,
            },
            {
              name: "--ttl",
              description: "Time to live, in seconds",
              args: { name: "ttl" },
              isRequired: true,
            },
            {
              name: "--comment",
              description: "A comment for this record",
              args: { name: "comment" },
            },
          ],
        },
        {
          name: "create-record-mx",
          description: "Create a new MX record for the given domain",
          icon,
          options: [
            {
              name: "--domain-id",
              description: "Domain unique ID",
              args: { name: "domain-id" },
              isRequired: true,
            },
            {
              name: "--name",
              description:
                "Record name relative to the domain, such as `www`, or `@` for the domain itself",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--value",
              description: "Mail server domain for this MX record",
              args: { name: "value" },
              isRequired: true,
            },
            {
              name: "--ttl",
              description: "Time to live, in seconds",
              args: { name: "ttl" },
              isRequired: true,
            },
            {
              name: "--priority",
              description: "MX priority",
              args: { name: "priority" },
              isRequired: true,
            },
            {
              name: "--comment",
              description: "A comment for this record",
              args: { name: "comment" },
            },
          ],
        },
        {
          name: "update-record-mx",
          description: "Update an existing MX record for the given domain",
          icon,
          options: [
            {
              name: "--domain-id",
              description: "Domain unique ID",
              args: { name: "domain-id" },
              isRequired: true,
            },
            {
              name: "--record-id",
              description: "DNS record unique ID",
              args: { name: "record-id" },
              isRequired: true,
            },
            {
              name: "--name",
              description:
                "Record name relative to the domain, such as `www`, or `@` for the domain itself",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--value",
              description: "Mail server domain for this MX record",
              args: { name: "value" },
              isRequired: true,
            },
            {
              name: "--ttl",
              description: "Time to live, in seconds",
              args: { name: "ttl" },
              isRequired: true,
            },
            {
              name: "--priority",
              description: "MX priority",
              args: { name: "priority" },
              isRequired: true,
            },
            {
              name: "--comment",
              description: "A comment for this record",
              args: { name: "comment" },
            },
          ],
        },
        {
          name: "create-record-ns",
          description: "Create a new NS record for the given domain",
          icon,
          options: [
            {
              name: "--domain-id",
              description: "Domain unique ID",
              args: { name: "domain-id" },
              isRequired: true,
            },
            {
              name: "--name",
              description:
                "Record name relative to the domain, such as `www`, or `@` for the domain itself",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--value",
              description: "Nameserver target for this NS record",
              args: { name: "value" },
              isRequired: true,
            },
            {
              name: "--ttl",
              description: "Time to live, in seconds",
              args: { name: "ttl" },
              isRequired: true,
            },
            {
              name: "--comment",
              description: "A comment for this record",
              args: { name: "comment" },
            },
          ],
        },
        {
          name: "update-record-ns",
          description: "Update an existing NS record for the given domain",
          icon,
          options: [
            {
              name: "--domain-id",
              description: "Domain unique ID",
              args: { name: "domain-id" },
              isRequired: true,
            },
            {
              name: "--record-id",
              description: "DNS record unique ID",
              args: { name: "record-id" },
              isRequired: true,
            },
            {
              name: "--name",
              description:
                "Record name relative to the domain, such as `www`, or `@` for the domain itself",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--value",
              description: "Nameserver target for this NS record",
              args: { name: "value" },
              isRequired: true,
            },
            {
              name: "--ttl",
              description: "Time to live, in seconds",
              args: { name: "ttl" },
              isRequired: true,
            },
            {
              name: "--comment",
              description: "A comment for this record",
              args: { name: "comment" },
            },
          ],
        },
        {
          name: "create-record-srv",
          description: "Create a new SRV record for the given domain",
          icon,
          options: [
            {
              name: "--domain-id",
              description: "Domain unique ID",
              args: { name: "domain-id" },
              isRequired: true,
            },
            {
              name: "--name",
              description:
                "Record name relative to the domain: the service and protocol, such as `_sip._tcp`",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--value",
              description: "Target hostname for this SRV record",
              args: { name: "value" },
              isRequired: true,
            },
            {
              name: "--ttl",
              description: "Time to live, in seconds",
              args: { name: "ttl" },
              isRequired: true,
            },
            {
              name: "--priority",
              description: "Record priority",
              args: { name: "priority" },
              isRequired: true,
            },
            {
              name: "--weight",
              description:
                "Record weight, used to share load between targets of equal priority",
              args: { name: "weight" },
              isRequired: true,
            },
            {
              name: "--port",
              description: "Port number for the service",
              args: { name: "port" },
              isRequired: true,
            },
            {
              name: "--comment",
              description: "A comment for this record",
              args: { name: "comment" },
            },
          ],
        },
        {
          name: "update-record-srv",
          description: "Update an existing SRV record for the given domain",
          icon,
          options: [
            {
              name: "--domain-id",
              description: "Domain unique ID",
              args: { name: "domain-id" },
              isRequired: true,
            },
            {
              name: "--record-id",
              description: "DNS record unique ID",
              args: { name: "record-id" },
              isRequired: true,
            },
            {
              name: "--name",
              description:
                "Record name relative to the domain: the service and protocol, such as `_sip._tcp`",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--value",
              description: "Target hostname for this SRV record",
              args: { name: "value" },
              isRequired: true,
            },
            {
              name: "--ttl",
              description: "Time to live, in seconds",
              args: { name: "ttl" },
              isRequired: true,
            },
            {
              name: "--priority",
              description: "Record priority",
              args: { name: "priority" },
              isRequired: true,
            },
            {
              name: "--weight",
              description:
                "Record weight, used to share load between targets of equal priority",
              args: { name: "weight" },
              isRequired: true,
            },
            {
              name: "--port",
              description: "Port number for the service",
              args: { name: "port" },
              isRequired: true,
            },
            {
              name: "--comment",
              description: "A comment for this record",
              args: { name: "comment" },
            },
          ],
        },
        {
          name: "create-record-txt",
          description: "Create a new TXT record for the given domain",
          icon,
          options: [
            {
              name: "--domain-id",
              description: "Domain unique ID",
              args: { name: "domain-id" },
              isRequired: true,
            },
            {
              name: "--name",
              description:
                "Record name relative to the domain, such as `www`, or `@` for the domain itself",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--ttl",
              description: "Time to live, in seconds",
              args: { name: "ttl" },
              isRequired: true,
            },
            {
              name: "--value",
              description: "TXT record value",
              args: { name: "value" },
            },
            {
              name: "--comment",
              description: "A comment for this record",
              args: { name: "comment" },
            },
          ],
        },
        {
          name: "update-record-txt",
          description: "Update an existing TXT record for the given domain",
          icon,
          options: [
            {
              name: "--domain-id",
              description: "Domain unique ID",
              args: { name: "domain-id" },
              isRequired: true,
            },
            {
              name: "--record-id",
              description: "DNS record unique ID",
              args: { name: "record-id" },
              isRequired: true,
            },
            {
              name: "--name",
              description:
                "Record name relative to the domain, such as `www`, or `@` for the domain itself",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--value",
              description: "TXT record value",
              args: { name: "value" },
              isRequired: true,
            },
            {
              name: "--ttl",
              description: "Time to live, in seconds",
              args: { name: "ttl" },
              isRequired: true,
            },
            {
              name: "--comment",
              description: "A comment for this record",
              args: { name: "comment" },
            },
          ],
        },
        {
          name: "get-record",
          description:
            "Get a single DNS record for a given domain by record ID",
          icon,
          options: [
            {
              name: "--domain-id",
              description: "Domain unique ID",
              args: { name: "domain-id" },
              isRequired: true,
            },
            {
              name: "--record-id",
              description: "DNS record unique ID",
              args: { name: "record-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "delete-record",
          description: "Delete a DNS record for the given domain",
          icon,
          options: [
            {
              name: "--domain-id",
              description: "Domain unique ID",
              args: { name: "domain-id" },
              isRequired: true,
            },
            {
              name: "--record-id",
              description: "DNS record unique ID",
              args: { name: "record-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "update-team",
          description: "Update the team ID for a specific domain",
          icon,
          options: [
            {
              name: "--domain-id",
              description: "Domain unique ID",
              args: { name: "domain-id" },
              isRequired: true,
            },
            {
              name: "--team-id",
              description: "New team unique ID",
              args: { name: "team-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "get-transfer-status",
          description: "Retrieve the current transfer status for a domain",
          icon,
          options: [
            {
              name: "--domain-id",
              description: "Domain unique ID",
              args: { name: "domain-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "get-zone",
          description: "Retrieve the DNS zone file for the given domain",
          icon,
          options: [
            {
              name: "--domain-id",
              description: "Domain unique ID",
              args: { name: "domain-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "update-zone",
          description:
            "Update the DNS zone for the given domain using the provided zone file content",
          icon,
          options: [
            {
              name: "--domain-id",
              description: "Domain unique ID",
              args: { name: "domain-id" },
              isRequired: true,
            },
            {
              name: "--content",
              description: "DNS zone file content as a string",
              args: { name: "content" },
              isRequired: true,
            },
          ],
        },
      ],
    },
    {
      name: "embeddings",
      description: "Create text embeddings",
      icon,
      subcommands: [
        {
          name: "create-text-embeddings",
          description:
            "Generate vector embeddings for an array of text using the selected embedding model",
          icon,
          options: [
            {
              name: "--texts",
              description: "Array of text to generate embeddings",
              args: { name: "texts" },
              isRepeatable: true,
              isRequired: true,
            },
            {
              name: "--model",
              description:
                "The embedding model to use for generating vector embeddings",
              args: { name: "model" },
            },
          ],
        },
      ],
    },
    {
      name: "functions",
      description: "Serverless functions, deployments, and executions",
      icon,
      subcommands: [
        {
          name: "list",
          description: "Get a list of all the project's functions",
          icon,
          options: [
            {
              name: "--queries",
              description:
                "Array of query strings generated using the Query class provided by the SDK",
              args: { name: "queries" },
              isRepeatable: true,
            },
            {
              name: "--search",
              description: "Search term to filter your list results",
              args: { name: "search" },
            },
            {
              name: "--total",
              description:
                "When set to false, the total count returned will be 0 and will not be calculated",
            },
            ...listOptions,
          ],
        },
        {
          name: "create",
          description: "Create a new function",
          icon,
          options: [
            {
              name: "--function-id",
              description: "Function ID",
              args: { name: "function-id" },
              isRequired: true,
            },
            {
              name: "--name",
              description: "Function name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--runtime",
              description: "Execution runtime",
              args: { name: "runtime" },
              isRequired: true,
            },
            {
              name: "--execute",
              description:
                "An array of role strings with execution permissions",
              args: { name: "execute" },
              isRepeatable: true,
            },
            {
              name: "--events",
              description: "Events list",
              args: { name: "events" },
              isRepeatable: true,
            },
            {
              name: "--schedule",
              description: "Schedule CRON syntax",
              args: { name: "schedule" },
            },
            {
              name: "--timeout",
              description: "Function maximum execution time in seconds",
              args: { name: "timeout" },
            },
            {
              name: "--enabled",
              description:
                "Is function enabled? When set to 'disabled', users cannot access the function but Server SDKs with and API key can still access the function",
            },
            {
              name: "--logging",
              description:
                "When disabled, executions will exclude logs and errors, and will be slightly faster",
            },
            {
              name: "--entrypoint",
              description: "Entrypoint File",
              args: { name: "entrypoint" },
            },
            {
              name: "--commands",
              description: "Build Commands",
              args: { name: "commands" },
            },
            {
              name: "--scopes",
              description:
                "List of scopes allowed for API key auto-generated for every execution",
              args: { name: "scopes" },
              isRepeatable: true,
            },
            {
              name: "--installation-id",
              description:
                "Appwrite Installation ID for VCS (Version Control System) deployment",
              args: { name: "installation-id" },
            },
            {
              name: "--provider-repository-id",
              description: "Repository ID of the repo linked to the function",
              args: { name: "provider-repository-id" },
            },
            {
              name: "--provider-branch",
              description:
                "Production branch for the repo linked to the function",
              args: { name: "provider-branch" },
            },
            {
              name: "--provider-silent-mode",
              description:
                "Is the VCS (Version Control System) connection in silent mode for the repo linked to the function? In silent mode, no comments or checks are posted to commits and pull requests",
            },
            {
              name: "--provider-root-directory",
              description: "Path to function code in the linked repo",
              args: { name: "provider-root-directory" },
            },
            {
              name: "--provider-branches",
              description:
                "List of branch name patterns to trigger automatic deployments",
              args: { name: "provider-branches" },
              isRepeatable: true,
            },
            {
              name: "--provider-paths",
              description:
                "List of file path patterns to trigger automatic deployments",
              args: { name: "provider-paths" },
              isRepeatable: true,
            },
            {
              name: "--build-specification",
              description: "Build specification for the function deployments",
              args: { name: "build-specification" },
            },
            {
              name: "--runtime-specification",
              description: "Runtime specification for the function executions",
              args: { name: "runtime-specification" },
            },
            {
              name: "--deployment-retention",
              description:
                "Days to keep non-active deployments before deletion",
              args: { name: "deployment-retention" },
            },
            {
              name: "--interval",
              description: "Minutes between scheduled executions",
              args: { name: "interval" },
            },
            {
              name: "--description",
              description: "Optional description for the function",
              args: { name: "description" },
            },
            {
              name: "--provider-comments",
              description:
                "Post a build summary on pull requests for the repo linked to the function",
            },
            {
              name: "--provider-deployments",
              description:
                "Deploy every push that matches the branch and path rules for the repo linked to the function",
            },
            {
              name: "--provider-statuses",
              description:
                "Report the build status on each commit for the repo linked to the function",
            },
          ],
        },
        {
          name: "list-runtimes",
          description:
            "Get a list of all runtimes that are currently active on your instance",
          icon,
          options: [
            {
              name: "--total",
              description:
                "When set to false, the total count returned will be 0 and will not be calculated",
            },
          ],
        },
        {
          name: "list-specifications",
          description: "List allowed function specifications for this instance",
          icon,
          options: [
            {
              name: "--type",
              description: "Specification type to list",
              args: { name: "type", suggestions: ["runtimes", "builds"] },
            },
            {
              name: "--total",
              description:
                "When set to false, the total count returned will be 0 and will not be calculated",
            },
          ],
        },
        {
          name: "get",
          description: "Get a function by its unique ID",
          icon,
          options: [
            {
              name: "--function-id",
              description: "Function ID",
              args: { name: "function-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "update",
          description: "Update function by its unique ID",
          icon,
          options: [
            {
              name: "--function-id",
              description: "Function ID",
              args: { name: "function-id" },
              isRequired: true,
            },
            {
              name: "--name",
              description: "Function name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--runtime",
              description: "Execution runtime",
              args: { name: "runtime" },
            },
            {
              name: "--execute",
              description:
                "An array of role strings with execution permissions",
              args: { name: "execute" },
              isRepeatable: true,
            },
            {
              name: "--events",
              description: "Events list",
              args: { name: "events" },
              isRepeatable: true,
            },
            {
              name: "--schedule",
              description: "Schedule CRON syntax",
              args: { name: "schedule" },
            },
            {
              name: "--timeout",
              description: "Maximum execution time in seconds",
              args: { name: "timeout" },
            },
            {
              name: "--enabled",
              description:
                "Is function enabled? When set to 'disabled', users cannot access the function but Server SDKs with and API key can still access the function",
            },
            {
              name: "--logging",
              description:
                "When disabled, executions will exclude logs and errors, and will be slightly faster",
            },
            {
              name: "--entrypoint",
              description: "Entrypoint File",
              args: { name: "entrypoint" },
            },
            {
              name: "--commands",
              description: "Build Commands",
              args: { name: "commands" },
            },
            {
              name: "--scopes",
              description:
                "List of scopes allowed for API Key auto-generated for every execution",
              args: { name: "scopes" },
              isRepeatable: true,
            },
            {
              name: "--installation-id",
              description:
                "Appwrite Installation ID for VCS (Version Controle System) deployment",
              args: { name: "installation-id" },
            },
            {
              name: "--provider-repository-id",
              description: "Repository ID of the repo linked to the function",
              args: { name: "provider-repository-id" },
            },
            {
              name: "--provider-branch",
              description:
                "Production branch for the repo linked to the function",
              args: { name: "provider-branch" },
            },
            {
              name: "--provider-silent-mode",
              description:
                "Is the VCS (Version Control System) connection in silent mode for the repo linked to the function? In silent mode, no comments or checks are posted to commits and pull requests",
            },
            {
              name: "--provider-root-directory",
              description: "Path to function code in the linked repo",
              args: { name: "provider-root-directory" },
            },
            {
              name: "--provider-branches",
              description:
                "List of branch name patterns to trigger automatic deployments",
              args: { name: "provider-branches" },
              isRepeatable: true,
            },
            {
              name: "--provider-paths",
              description:
                "List of file path patterns to trigger automatic deployments",
              args: { name: "provider-paths" },
              isRepeatable: true,
            },
            {
              name: "--build-specification",
              description: "Build specification for the function deployments",
              args: { name: "build-specification" },
            },
            {
              name: "--runtime-specification",
              description: "Runtime specification for the function executions",
              args: { name: "runtime-specification" },
            },
            {
              name: "--deployment-retention",
              description:
                "Days to keep non-active deployments before deletion",
              args: { name: "deployment-retention" },
            },
            {
              name: "--interval",
              description: "Minutes between scheduled executions",
              args: { name: "interval" },
            },
            {
              name: "--description",
              description: "Optional description for the function",
              args: { name: "description" },
            },
            {
              name: "--provider-comments",
              description:
                "Post a build summary on pull requests for the repo linked to the function",
            },
            {
              name: "--provider-deployments",
              description:
                "Deploy every push that matches the branch and path rules for the repo linked to the function",
            },
            {
              name: "--provider-statuses",
              description:
                "Report the build status on each commit for the repo linked to the function",
            },
            {
              name: "--email-enabled",
              description: "Enable inbound email triggering for this function",
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a function by its unique ID",
          icon,
          options: [
            {
              name: "--function-id",
              description: "Function ID",
              args: { name: "function-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "update-function-deployment",
          description: "Update the function active deployment",
          icon,
          options: [
            {
              name: "--function-id",
              description: "Function ID",
              args: { name: "function-id" },
              isRequired: true,
            },
            {
              name: "--deployment-id",
              description: "Deployment ID",
              args: { name: "deployment-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "list-deployments",
          description: "Get a list of all the function's code deployments",
          icon,
          options: [
            {
              name: "--function-id",
              description: "Function ID",
              args: { name: "function-id" },
              isRequired: true,
            },
            {
              name: "--queries",
              description:
                "Array of query strings generated using the Query class provided by the SDK",
              args: { name: "queries" },
              isRepeatable: true,
            },
            {
              name: "--search",
              description: "Search term to filter your list results",
              args: { name: "search" },
            },
            {
              name: "--total",
              description:
                "When set to false, the total count returned will be 0 and will not be calculated",
            },
            ...listOptions,
          ],
        },
        {
          name: "create-deployment",
          description: "Create a new function code deployment",
          icon,
          options: [
            {
              name: "--function-id",
              description: "Function ID",
              args: { name: "function-id" },
              isRequired: true,
            },
            {
              name: "--code",
              description: "Gzip file with your code package",
              args: { name: "code" },
              isRequired: true,
            },
            {
              name: "--activate",
              description:
                "Automatically activate the deployment when it is finished building",
              isRequired: true,
            },
            {
              name: "--entrypoint",
              description: "Entrypoint File",
              args: { name: "entrypoint" },
            },
            {
              name: "--commands",
              description: "Build Commands",
              args: { name: "commands" },
            },
          ],
        },
        {
          name: "create-duplicate-deployment",
          description: "Create a new build for an existing function deployment",
          icon,
          options: [
            {
              name: "--function-id",
              description: "Function ID",
              args: { name: "function-id" },
              isRequired: true,
            },
            {
              name: "--deployment-id",
              description: "Deployment ID",
              args: { name: "deployment-id" },
              isRequired: true,
            },
            {
              name: "--build-id",
              description: "Build unique ID",
              args: { name: "build-id" },
            },
          ],
        },
        {
          name: "create-template-deployment",
          description: "Create a deployment based on a template",
          icon,
          options: [
            {
              name: "--function-id",
              description: "Function ID",
              args: { name: "function-id" },
              isRequired: true,
            },
            {
              name: "--repository",
              description: "Repository name of the template",
              args: { name: "repository" },
              isRequired: true,
            },
            {
              name: "--owner",
              description: "The name of the owner of the template",
              args: { name: "owner" },
              isRequired: true,
            },
            {
              name: "--root-directory",
              description: "Path to function code in the template repo",
              args: { name: "root-directory" },
              isRequired: true,
            },
            {
              name: "--type",
              description: "Type for the reference provided",
              args: { name: "type", suggestions: ["commit", "branch", "tag"] },
              isRequired: true,
            },
            {
              name: "--reference",
              description:
                "Reference value, can be a commit hash, branch name, or release tag",
              args: { name: "reference" },
              isRequired: true,
            },
            {
              name: "--activate",
              description:
                "Automatically activate the deployment when it is finished building",
            },
          ],
        },
        {
          name: "create-vcs-deployment",
          description:
            "Create a deployment when a function is connected to VCS",
          icon,
          options: [
            {
              name: "--function-id",
              description: "Function ID",
              args: { name: "function-id" },
              isRequired: true,
            },
            {
              name: "--type",
              description: "Type of reference passed",
              args: { name: "type", suggestions: ["branch", "commit"] },
              isRequired: true,
            },
            {
              name: "--reference",
              description: "VCS reference to create deployment from",
              args: { name: "reference" },
              isRequired: true,
            },
            {
              name: "--activate",
              description:
                "Automatically activate the deployment when it is finished building",
            },
          ],
        },
        {
          name: "get-deployment",
          description: "Get a function deployment by its unique ID",
          icon,
          options: [
            {
              name: "--function-id",
              description: "Function ID",
              args: { name: "function-id" },
              isRequired: true,
            },
            {
              name: "--deployment-id",
              description: "Deployment ID",
              args: { name: "deployment-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "delete-deployment",
          description: "Delete a code deployment by its unique ID",
          icon,
          options: [
            {
              name: "--function-id",
              description: "Function ID",
              args: { name: "function-id" },
              isRequired: true,
            },
            {
              name: "--deployment-id",
              description: "Deployment ID",
              args: { name: "deployment-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "get-deployment-download",
          description: "Get a function deployment content by its unique ID",
          icon,
          options: [
            {
              name: "--function-id",
              description: "Function ID",
              args: { name: "function-id" },
              isRequired: true,
            },
            {
              name: "--deployment-id",
              description: "Deployment ID",
              args: { name: "deployment-id" },
              isRequired: true,
            },
            {
              name: "--type",
              description: "Deployment file to download",
              args: { name: "type" },
            },
            {
              name: "--token",
              description:
                "Presigned source-download token for accessing this deployment without a session (jobs-service)",
              args: { name: "token" },
            },
            {
              name: "--destination",
              description: "Path to save the file to",
              args: { name: "destination" },
              isRequired: true,
            },
          ],
        },
        {
          name: "update-deployment-status",
          description: "Cancel an ongoing function deployment build",
          icon,
          options: [
            {
              name: "--function-id",
              description: "Function ID",
              args: { name: "function-id" },
              isRequired: true,
            },
            {
              name: "--deployment-id",
              description: "Deployment ID",
              args: { name: "deployment-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "list-executions",
          description:
            "Get a list of all the current user function execution logs",
          icon,
          options: [
            {
              name: "--function-id",
              description: "Function ID",
              args: { name: "function-id" },
              isRequired: true,
            },
            {
              name: "--queries",
              description:
                "Array of query strings generated using the Query class provided by the SDK",
              args: { name: "queries" },
              isRepeatable: true,
            },
            {
              name: "--total",
              description:
                "When set to false, the total count returned will be 0 and will not be calculated",
            },
            ...listOptions,
          ],
        },
        {
          name: "create-execution",
          description: "Trigger a function execution",
          icon,
          options: [
            {
              name: "--function-id",
              description: "Function ID",
              args: { name: "function-id" },
              isRequired: true,
            },
            {
              name: "--body",
              description: "HTTP body of execution",
              args: { name: "body" },
            },
            { name: "--async", description: "Execute code in the background" },
            {
              name: "--path",
              description: "HTTP path of execution",
              args: { name: "path" },
            },
            {
              name: "--method",
              description: "HTTP method of execution",
              args: { name: "method" },
            },
            {
              name: "--headers",
              description: "HTTP headers of execution",
              args: { name: "headers" },
            },
            {
              name: "--scheduled-at",
              description:
                "Scheduled execution time in ISO 8601 (https://www.iso.org/iso-8601-date-and-time-format.html) format",
              args: { name: "scheduled-at" },
            },
          ],
        },
        {
          name: "get-execution",
          description: "Get a function execution log by its unique ID",
          icon,
          options: [
            {
              name: "--function-id",
              description: "Function ID",
              args: { name: "function-id" },
              isRequired: true,
            },
            {
              name: "--execution-id",
              description: "Execution ID",
              args: { name: "execution-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "delete-execution",
          description: "Delete a function execution by its unique ID",
          icon,
          options: [
            {
              name: "--function-id",
              description: "Function ID",
              args: { name: "function-id" },
              isRequired: true,
            },
            {
              name: "--execution-id",
              description: "Execution ID",
              args: { name: "execution-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "list-variables",
          description: "Get a list of all variables of a specific function",
          icon,
          options: [
            {
              name: "--function-id",
              description: "Function unique ID",
              args: { name: "function-id" },
              isRequired: true,
            },
            {
              name: "--queries",
              description:
                "Array of query strings generated using the Query class provided by the SDK",
              args: { name: "queries" },
              isRepeatable: true,
            },
            {
              name: "--total",
              description:
                "When set to false, the total count returned will be 0 and will not be calculated",
            },
            ...listOptions,
          ],
        },
        {
          name: "create-variable",
          description: "Create a new function environment variable",
          icon,
          options: [
            {
              name: "--function-id",
              description: "Function unique ID",
              args: { name: "function-id" },
              isRequired: true,
            },
            {
              name: "--variable-id",
              description: "Variable ID",
              args: { name: "variable-id" },
              isRequired: true,
            },
            {
              name: "--key",
              description: "Variable key",
              args: { name: "key" },
              isRequired: true,
            },
            {
              name: "--value",
              description: "Variable value",
              args: { name: "value" },
              isRequired: true,
            },
            {
              name: "--secret",
              description:
                "Secret variables can be updated or deleted, but only functions can read them during build and runtime",
            },
            {
              name: "--description",
              description: "Optional description for the variable",
              args: { name: "description" },
            },
          ],
        },
        {
          name: "get-variable",
          description: "Get a variable by its unique ID",
          icon,
          options: [
            {
              name: "--function-id",
              description: "Function unique ID",
              args: { name: "function-id" },
              isRequired: true,
            },
            {
              name: "--variable-id",
              description: "Variable unique ID",
              args: { name: "variable-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "update-variable",
          description: "Update variable by its unique ID",
          icon,
          options: [
            {
              name: "--function-id",
              description: "Function unique ID",
              args: { name: "function-id" },
              isRequired: true,
            },
            {
              name: "--variable-id",
              description: "Variable unique ID",
              args: { name: "variable-id" },
              isRequired: true,
            },
            {
              name: "--key",
              description: "Variable key",
              args: { name: "key" },
            },
            {
              name: "--value",
              description: "Variable value",
              args: { name: "value" },
            },
            {
              name: "--secret",
              description:
                "Secret variables can be updated or deleted, but only functions can read them during build and runtime",
            },
            {
              name: "--description",
              description: "Optional description for the variable",
              args: { name: "description" },
            },
          ],
        },
        {
          name: "delete-variable",
          description: "Delete a variable by its unique ID",
          icon,
          options: [
            {
              name: "--function-id",
              description: "Function unique ID",
              args: { name: "function-id" },
              isRequired: true,
            },
            {
              name: "--variable-id",
              description: "Variable unique ID",
              args: { name: "variable-id" },
              isRequired: true,
            },
          ],
        },
      ],
    },
    {
      name: "graphql",
      description: "Query and mutate any resource via GraphQL",
      icon,
      subcommands: [
        {
          name: "query",
          description: "Execute a GraphQL query",
          icon,
          options: [
            {
              name: "--query",
              description:
                "Raw GraphQL document, or a JSON request object or array for variables, operation names, or batching",
              args: { name: "query" },
              isRequired: true,
            },
          ],
        },
        {
          name: "mutation",
          description: "Execute a GraphQL mutation",
          icon,
          options: [
            {
              name: "--query",
              description:
                "Raw GraphQL document, or a JSON request object or array for variables, operation names, or batching",
              args: { name: "query" },
              isRequired: true,
            },
          ],
        },
      ],
    },
    {
      name: "locale",
      description: "Localize your app based on user location",
      icon,
      subcommands: [
        {
          name: "get",
          description: "Get the current user location based on IP",
          icon,
        },
        {
          name: "list-codes",
          description:
            "List of all locale codes in ISO 639-1 (https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes)",
          icon,
          options: [
            {
              name: "--total",
              description:
                "When set to false, the total count returned will be 0 and will not be calculated",
            },
          ],
        },
        {
          name: "list-continents",
          description: "List of all continents",
          icon,
          options: [
            {
              name: "--total",
              description:
                "When set to false, the total count returned will be 0 and will not be calculated",
            },
          ],
        },
        {
          name: "list-countries",
          description: "List of all countries",
          icon,
          options: [
            {
              name: "--total",
              description:
                "When set to false, the total count returned will be 0 and will not be calculated",
            },
          ],
        },
        {
          name: "list-countries-eu",
          description:
            "List of all countries that are currently members of the EU",
          icon,
          options: [
            {
              name: "--total",
              description:
                "When set to false, the total count returned will be 0 and will not be calculated",
            },
          ],
        },
        {
          name: "list-countries-phones",
          description: "List of all countries phone codes",
          icon,
          options: [
            {
              name: "--total",
              description:
                "When set to false, the total count returned will be 0 and will not be calculated",
            },
          ],
        },
        {
          name: "list-currencies",
          description:
            "List of all currencies, including currency symbol, name, plural, and decimal digits for all major and minor currencies",
          icon,
          options: [
            {
              name: "--total",
              description:
                "When set to false, the total count returned will be 0 and will not be calculated",
            },
          ],
        },
        {
          name: "list-languages",
          description:
            "List of all languages classified by ISO 639-1 including 2-letter code, name in English, and name in the respective language",
          icon,
          options: [
            {
              name: "--total",
              description:
                "When set to false, the total count returned will be 0 and will not be calculated",
            },
          ],
        },
      ],
    },
    {
      name: "messaging",
      description: "Topics, subscribers, and message delivery",
      icon,
      subcommands: [
        {
          name: "list-messages",
          description:
            "Get a list of all messages from the current Appwrite project",
          icon,
          options: [
            {
              name: "--queries",
              description:
                "Array of query strings generated using the Query class provided by the SDK",
              args: { name: "queries" },
              isRepeatable: true,
            },
            {
              name: "--search",
              description: "Search term to filter your list results",
              args: { name: "search" },
            },
            {
              name: "--total",
              description:
                "When set to false, the total count returned will be 0 and will not be calculated",
            },
            ...listOptions,
          ],
        },
        {
          name: "create-email",
          description: "Create a new email message",
          icon,
          options: [
            {
              name: "--message-id",
              description: "Message ID",
              args: { name: "message-id" },
              isRequired: true,
            },
            {
              name: "--subject",
              description: "Email Subject",
              args: { name: "subject" },
              isRequired: true,
            },
            {
              name: "--content",
              description: "Email Content",
              args: { name: "content" },
              isRequired: true,
            },
            {
              name: "--topics",
              description: "List of Topic IDs",
              args: { name: "topics" },
              isRepeatable: true,
            },
            {
              name: "--users",
              description: "List of User IDs",
              args: { name: "users" },
              isRepeatable: true,
            },
            {
              name: "--targets",
              description: "List of Targets IDs",
              args: { name: "targets" },
              isRepeatable: true,
            },
            {
              name: "--cc",
              description: "Array of target IDs to be added as CC",
              args: { name: "cc" },
              isRepeatable: true,
            },
            {
              name: "--bcc",
              description: "Array of target IDs to be added as BCC",
              args: { name: "bcc" },
              isRepeatable: true,
            },
            {
              name: "--attachments",
              description:
                "Array of compound ID strings of bucket IDs and file IDs to be attached to the email",
              args: { name: "attachments" },
              isRepeatable: true,
            },
            { name: "--draft", description: "Is message a draft" },
            { name: "--html", description: "Is content of type HTML" },
            {
              name: "--scheduled-at",
              description:
                "Scheduled delivery time for message in ISO 8601 (https://www.iso.org/iso-8601-date-and-time-format.html) format",
              args: { name: "scheduled-at" },
            },
            {
              name: "--reply-to-email",
              description: "Email address to reply to",
              args: { name: "reply-to-email" },
            },
            {
              name: "--reply-to-name",
              description: "Name of the reply to recipient",
              args: { name: "reply-to-name" },
            },
            {
              name: "--emails",
              description: "List of email addresses to send the message to",
              args: { name: "emails" },
              isRepeatable: true,
            },
          ],
        },
        {
          name: "update-email",
          description: "Update an email message by its unique ID",
          icon,
          options: [
            {
              name: "--message-id",
              description: "Message ID",
              args: { name: "message-id" },
              isRequired: true,
            },
            {
              name: "--topics",
              description: "List of Topic IDs",
              args: { name: "topics" },
              isRepeatable: true,
            },
            {
              name: "--users",
              description: "List of User IDs",
              args: { name: "users" },
              isRepeatable: true,
            },
            {
              name: "--targets",
              description: "List of Targets IDs",
              args: { name: "targets" },
              isRepeatable: true,
            },
            {
              name: "--subject",
              description: "Email Subject",
              args: { name: "subject" },
            },
            {
              name: "--content",
              description: "Email Content",
              args: { name: "content" },
            },
            { name: "--draft", description: "Is message a draft" },
            { name: "--html", description: "Is content of type HTML" },
            {
              name: "--cc",
              description: "Array of target IDs to be added as CC",
              args: { name: "cc" },
              isRepeatable: true,
            },
            {
              name: "--bcc",
              description: "Array of target IDs to be added as BCC",
              args: { name: "bcc" },
              isRepeatable: true,
            },
            {
              name: "--scheduled-at",
              description:
                "Scheduled delivery time for message in ISO 8601 (https://www.iso.org/iso-8601-date-and-time-format.html) format",
              args: { name: "scheduled-at" },
            },
            {
              name: "--attachments",
              description:
                "Array of compound ID strings of bucket IDs and file IDs to be attached to the email",
              args: { name: "attachments" },
              isRepeatable: true,
            },
            {
              name: "--reply-to-email",
              description: "Email address to reply to",
              args: { name: "reply-to-email" },
            },
            {
              name: "--reply-to-name",
              description: "Name of the reply to recipient",
              args: { name: "reply-to-name" },
            },
            {
              name: "--emails",
              description: "List of email addresses to send the message to",
              args: { name: "emails" },
              isRepeatable: true,
            },
          ],
        },
        {
          name: "create-push",
          description: "Create a new push notification",
          icon,
          options: [
            {
              name: "--message-id",
              description: "Message ID",
              args: { name: "message-id" },
              isRequired: true,
            },
            {
              name: "--title",
              description: "Title for push notification",
              args: { name: "title" },
            },
            {
              name: "--body",
              description: "Body for push notification",
              args: { name: "body" },
            },
            {
              name: "--topics",
              description: "List of Topic IDs",
              args: { name: "topics" },
              isRepeatable: true,
            },
            {
              name: "--users",
              description: "List of User IDs",
              args: { name: "users" },
              isRepeatable: true,
            },
            {
              name: "--targets",
              description: "List of Targets IDs",
              args: { name: "targets" },
              isRepeatable: true,
            },
            {
              name: "--data",
              description:
                "Additional key-value pair data for push notification",
              args: { name: "data" },
            },
            {
              name: "--action",
              description: "Action for push notification",
              args: { name: "action" },
            },
            {
              name: "--image",
              description: "Image for push notification",
              args: { name: "image" },
            },
            {
              name: "--icon",
              description: "Icon for push notification",
              args: { name: "icon" },
            },
            {
              name: "--sound",
              description: "Sound for push notification",
              args: { name: "sound" },
            },
            {
              name: "--color",
              description: "Color for push notification",
              args: { name: "color" },
            },
            {
              name: "--tag",
              description: "Tag for push notification",
              args: { name: "tag" },
            },
            {
              name: "--badge",
              description: "Badge for push notification",
              args: { name: "badge" },
            },
            { name: "--draft", description: "Is message a draft" },
            {
              name: "--scheduled-at",
              description:
                "Scheduled delivery time for message in ISO 8601 (https://www.iso.org/iso-8601-date-and-time-format.html) format",
              args: { name: "scheduled-at" },
            },
            {
              name: "--content-available",
              description:
                "If set to true, the notification will be delivered in the background",
            },
            {
              name: "--critical",
              description:
                "If set to true, the notification will be marked as critical",
            },
            {
              name: "--priority",
              description: "Set the notification priority",
              args: { name: "priority" },
            },
            {
              name: "--channel-id",
              description:
                "ID of the notification channel to deliver the notification on",
              args: { name: "channel-id" },
            },
          ],
        },
        {
          name: "update-push",
          description: "Update a push notification by its unique ID",
          icon,
          options: [
            {
              name: "--message-id",
              description: "Message ID",
              args: { name: "message-id" },
              isRequired: true,
            },
            {
              name: "--topics",
              description: "List of Topic IDs",
              args: { name: "topics" },
              isRepeatable: true,
            },
            {
              name: "--users",
              description: "List of User IDs",
              args: { name: "users" },
              isRepeatable: true,
            },
            {
              name: "--targets",
              description: "List of Targets IDs",
              args: { name: "targets" },
              isRepeatable: true,
            },
            {
              name: "--title",
              description: "Title for push notification",
              args: { name: "title" },
            },
            {
              name: "--body",
              description: "Body for push notification",
              args: { name: "body" },
            },
            {
              name: "--data",
              description: "Additional Data for push notification",
              args: { name: "data" },
            },
            {
              name: "--action",
              description: "Action for push notification",
              args: { name: "action" },
            },
            {
              name: "--image",
              description: "Image for push notification",
              args: { name: "image" },
            },
            {
              name: "--icon",
              description: "Icon for push notification",
              args: { name: "icon" },
            },
            {
              name: "--sound",
              description: "Sound for push notification",
              args: { name: "sound" },
            },
            {
              name: "--color",
              description: "Color for push notification",
              args: { name: "color" },
            },
            {
              name: "--tag",
              description: "Tag for push notification",
              args: { name: "tag" },
            },
            {
              name: "--badge",
              description: "Badge for push notification",
              args: { name: "badge" },
            },
            { name: "--draft", description: "Is message a draft" },
            {
              name: "--scheduled-at",
              description:
                "Scheduled delivery time for message in ISO 8601 (https://www.iso.org/iso-8601-date-and-time-format.html) format",
              args: { name: "scheduled-at" },
            },
            {
              name: "--content-available",
              description:
                "If set to true, the notification will be delivered in the background",
            },
            {
              name: "--critical",
              description:
                "If set to true, the notification will be marked as critical",
            },
            {
              name: "--priority",
              description: "Set the notification priority",
              args: { name: "priority" },
            },
            {
              name: "--channel-id",
              description:
                "ID of the notification channel to deliver the notification on",
              args: { name: "channel-id" },
            },
          ],
        },
        {
          name: "create-sms",
          description: "Create a new SMS message",
          icon,
          options: [
            {
              name: "--message-id",
              description: "Message ID",
              args: { name: "message-id" },
              isRequired: true,
            },
            {
              name: "--content",
              description: "SMS Content",
              args: { name: "content" },
              isRequired: true,
            },
            {
              name: "--topics",
              description: "List of Topic IDs",
              args: { name: "topics" },
              isRepeatable: true,
            },
            {
              name: "--users",
              description: "List of User IDs",
              args: { name: "users" },
              isRepeatable: true,
            },
            {
              name: "--targets",
              description: "List of Targets IDs",
              args: { name: "targets" },
              isRepeatable: true,
            },
            { name: "--draft", description: "Is message a draft" },
            {
              name: "--scheduled-at",
              description:
                "Scheduled delivery time for message in ISO 8601 (https://www.iso.org/iso-8601-date-and-time-format.html) format",
              args: { name: "scheduled-at" },
            },
          ],
        },
        {
          name: "update-sms",
          description: "Update an SMS message by its unique ID",
          icon,
          options: [
            {
              name: "--message-id",
              description: "Message ID",
              args: { name: "message-id" },
              isRequired: true,
            },
            {
              name: "--topics",
              description: "List of Topic IDs",
              args: { name: "topics" },
              isRepeatable: true,
            },
            {
              name: "--users",
              description: "List of User IDs",
              args: { name: "users" },
              isRepeatable: true,
            },
            {
              name: "--targets",
              description: "List of Targets IDs",
              args: { name: "targets" },
              isRepeatable: true,
            },
            {
              name: "--content",
              description: "Email Content",
              args: { name: "content" },
            },
            { name: "--draft", description: "Is message a draft" },
            {
              name: "--scheduled-at",
              description:
                "Scheduled delivery time for message in ISO 8601 (https://www.iso.org/iso-8601-date-and-time-format.html) format",
              args: { name: "scheduled-at" },
            },
          ],
        },
        {
          name: "get-message",
          description: "Get a message by its unique ID",
          icon,
          options: [
            {
              name: "--message-id",
              description: "Message ID",
              args: { name: "message-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a message",
          icon,
          options: [
            {
              name: "--message-id",
              description: "Message ID",
              args: { name: "message-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "list-targets",
          description: "Get a list of the targets associated with a message",
          icon,
          options: [
            {
              name: "--message-id",
              description: "Message ID",
              args: { name: "message-id" },
              isRequired: true,
            },
            {
              name: "--queries",
              description:
                "Array of query strings generated using the Query class provided by the SDK",
              args: { name: "queries" },
              isRepeatable: true,
            },
            {
              name: "--total",
              description:
                "When set to false, the total count returned will be 0 and will not be calculated",
            },
            ...listOptions,
          ],
        },
        {
          name: "list-providers",
          description:
            "Get a list of all providers from the current Appwrite project",
          icon,
          options: [
            {
              name: "--queries",
              description:
                "Array of query strings generated using the Query class provided by the SDK",
              args: { name: "queries" },
              isRepeatable: true,
            },
            {
              name: "--search",
              description: "Search term to filter your list results",
              args: { name: "search" },
            },
            {
              name: "--total",
              description:
                "When set to false, the total count returned will be 0 and will not be calculated",
            },
            ...listOptions,
          ],
        },
        {
          name: "create-apns-provider",
          description: "Create a new Apple Push Notification service provider",
          icon,
          options: [
            {
              name: "--provider-id",
              description: "Provider ID",
              args: { name: "provider-id" },
              isRequired: true,
            },
            {
              name: "--name",
              description: "Provider name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--auth-key",
              description: "APNS authentication key",
              args: { name: "auth-key" },
            },
            {
              name: "--auth-key-id",
              description: "APNS authentication key ID",
              args: { name: "auth-key-id" },
            },
            {
              name: "--team-id",
              description: "APNS team ID",
              args: { name: "team-id" },
            },
            {
              name: "--bundle-id",
              description: "APNS bundle ID",
              args: { name: "bundle-id" },
            },
            { name: "--sandbox", description: "Use APNS sandbox environment" },
            { name: "--enabled", description: "Set as enabled" },
          ],
        },
        {
          name: "update-apns-provider",
          description:
            "Update a Apple Push Notification service provider by its unique ID",
          icon,
          options: [
            {
              name: "--provider-id",
              description: "Provider ID",
              args: { name: "provider-id" },
              isRequired: true,
            },
            {
              name: "--name",
              description: "Provider name",
              args: { name: "name" },
            },
            { name: "--enabled", description: "Set as enabled" },
            {
              name: "--auth-key",
              description: "APNS authentication key",
              args: { name: "auth-key" },
            },
            {
              name: "--auth-key-id",
              description: "APNS authentication key ID",
              args: { name: "auth-key-id" },
            },
            {
              name: "--team-id",
              description: "APNS team ID",
              args: { name: "team-id" },
            },
            {
              name: "--bundle-id",
              description: "APNS bundle ID",
              args: { name: "bundle-id" },
            },
            { name: "--sandbox", description: "Use APNS sandbox environment" },
          ],
        },
        {
          name: "create-appwrite-provider",
          description: "Create a new Appwrite push provider",
          icon,
          options: [
            {
              name: "--provider-id",
              description: "Provider ID",
              args: { name: "provider-id" },
              isRequired: true,
            },
            {
              name: "--name",
              description: "Provider name",
              args: { name: "name" },
              isRequired: true,
            },
            { name: "--enabled", description: "Set as enabled" },
            {
              name: "--qos",
              description: "Default QoS for topics on this provider (0 or 1)",
              args: { name: "qos" },
            },
            {
              name: "--expiry",
              description:
                "Default message retention in seconds for offline delivery",
              args: { name: "expiry" },
            },
          ],
        },
        {
          name: "update-appwrite-provider",
          description: "Update an Appwrite push provider by its unique ID",
          icon,
          options: [
            {
              name: "--provider-id",
              description: "Provider ID",
              args: { name: "provider-id" },
              isRequired: true,
            },
            {
              name: "--name",
              description: "Provider name",
              args: { name: "name" },
            },
            { name: "--enabled", description: "Set as enabled" },
            {
              name: "--qos",
              description: "Default QoS for topics on this provider (0 or 1)",
              args: { name: "qos" },
            },
            {
              name: "--expiry",
              description:
                "Default message retention in seconds for offline delivery",
              args: { name: "expiry" },
            },
          ],
        },
        {
          name: "create-fcm-provider",
          description: "Create a new Firebase Cloud Messaging provider",
          icon,
          options: [
            {
              name: "--provider-id",
              description: "Provider ID",
              args: { name: "provider-id" },
              isRequired: true,
            },
            {
              name: "--name",
              description: "Provider name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--service-account-json",
              description: "FCM service account JSON",
              args: { name: "service-account-json" },
            },
            { name: "--enabled", description: "Set as enabled" },
          ],
        },
        {
          name: "update-fcm-provider",
          description:
            "Update a Firebase Cloud Messaging provider by its unique ID",
          icon,
          options: [
            {
              name: "--provider-id",
              description: "Provider ID",
              args: { name: "provider-id" },
              isRequired: true,
            },
            {
              name: "--name",
              description: "Provider name",
              args: { name: "name" },
            },
            { name: "--enabled", description: "Set as enabled" },
            {
              name: "--service-account-json",
              description: "FCM service account JSON",
              args: { name: "service-account-json" },
            },
          ],
        },
        {
          name: "create-mailgun-provider",
          description: "Create a new Mailgun provider",
          icon,
          options: [
            {
              name: "--provider-id",
              description: "Provider ID",
              args: { name: "provider-id" },
              isRequired: true,
            },
            {
              name: "--name",
              description: "Provider name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--api-key",
              description: "Mailgun API Key",
              args: { name: "api-key" },
            },
            {
              name: "--domain",
              description: "Mailgun Domain",
              args: { name: "domain" },
            },
            { name: "--is-eu-region", description: "Set as EU region" },
            {
              name: "--from-name",
              description: "Sender Name",
              args: { name: "from-name" },
            },
            {
              name: "--from-email",
              description: "Sender email address",
              args: { name: "from-email" },
            },
            {
              name: "--reply-to-name",
              description: "Name set in the reply to field for the mail",
              args: { name: "reply-to-name" },
            },
            {
              name: "--reply-to-email",
              description: "Email set in the reply to field for the mail",
              args: { name: "reply-to-email" },
            },
            { name: "--enabled", description: "Set as enabled" },
          ],
        },
        {
          name: "update-mailgun-provider",
          description: "Update a Mailgun provider by its unique ID",
          icon,
          options: [
            {
              name: "--provider-id",
              description: "Provider ID",
              args: { name: "provider-id" },
              isRequired: true,
            },
            {
              name: "--name",
              description: "Provider name",
              args: { name: "name" },
            },
            {
              name: "--api-key",
              description: "Mailgun API Key",
              args: { name: "api-key" },
            },
            {
              name: "--domain",
              description: "Mailgun Domain",
              args: { name: "domain" },
            },
            { name: "--is-eu-region", description: "Set as EU region" },
            { name: "--enabled", description: "Set as enabled" },
            {
              name: "--from-name",
              description: "Sender Name",
              args: { name: "from-name" },
            },
            {
              name: "--from-email",
              description: "Sender email address",
              args: { name: "from-email" },
            },
            {
              name: "--reply-to-name",
              description: "Name set in the reply to field for the mail",
              args: { name: "reply-to-name" },
            },
            {
              name: "--reply-to-email",
              description: "Email set in the reply to field for the mail",
              args: { name: "reply-to-email" },
            },
          ],
        },
        {
          name: "create-msg-91-provider",
          description: "Create a new MSG91 provider",
          icon,
          options: [
            {
              name: "--provider-id",
              description: "Provider ID",
              args: { name: "provider-id" },
              isRequired: true,
            },
            {
              name: "--name",
              description: "Provider name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--template-id",
              description: "Msg91 template ID",
              args: { name: "template-id" },
            },
            {
              name: "--sender-id",
              description: "Msg91 sender ID",
              args: { name: "sender-id" },
            },
            {
              name: "--auth-key",
              description: "Msg91 auth key",
              args: { name: "auth-key" },
            },
            { name: "--enabled", description: "Set as enabled" },
          ],
        },
        {
          name: "update-msg-91-provider",
          description: "Update a MSG91 provider by its unique ID",
          icon,
          options: [
            {
              name: "--provider-id",
              description: "Provider ID",
              args: { name: "provider-id" },
              isRequired: true,
            },
            {
              name: "--name",
              description: "Provider name",
              args: { name: "name" },
            },
            { name: "--enabled", description: "Set as enabled" },
            {
              name: "--template-id",
              description: "Msg91 template ID",
              args: { name: "template-id" },
            },
            {
              name: "--sender-id",
              description: "Msg91 sender ID",
              args: { name: "sender-id" },
            },
            {
              name: "--auth-key",
              description: "Msg91 auth key",
              args: { name: "auth-key" },
            },
          ],
        },
        {
          name: "create-resend-provider",
          description: "Create a new Resend provider",
          icon,
          options: [
            {
              name: "--provider-id",
              description: "Provider ID",
              args: { name: "provider-id" },
              isRequired: true,
            },
            {
              name: "--name",
              description: "Provider name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--api-key",
              description: "Resend API key",
              args: { name: "api-key" },
            },
            {
              name: "--from-name",
              description: "Sender Name",
              args: { name: "from-name" },
            },
            {
              name: "--from-email",
              description: "Sender email address",
              args: { name: "from-email" },
            },
            {
              name: "--reply-to-name",
              description: "Name set in the reply to field for the mail",
              args: { name: "reply-to-name" },
            },
            {
              name: "--reply-to-email",
              description: "Email set in the reply to field for the mail",
              args: { name: "reply-to-email" },
            },
            { name: "--enabled", description: "Set as enabled" },
          ],
        },
        {
          name: "update-resend-provider",
          description: "Update a Resend provider by its unique ID",
          icon,
          options: [
            {
              name: "--provider-id",
              description: "Provider ID",
              args: { name: "provider-id" },
              isRequired: true,
            },
            {
              name: "--name",
              description: "Provider name",
              args: { name: "name" },
            },
            { name: "--enabled", description: "Set as enabled" },
            {
              name: "--api-key",
              description: "Resend API key",
              args: { name: "api-key" },
            },
            {
              name: "--from-name",
              description: "Sender Name",
              args: { name: "from-name" },
            },
            {
              name: "--from-email",
              description: "Sender email address",
              args: { name: "from-email" },
            },
            {
              name: "--reply-to-name",
              description: "Name set in the Reply To field for the mail",
              args: { name: "reply-to-name" },
            },
            {
              name: "--reply-to-email",
              description: "Email set in the Reply To field for the mail",
              args: { name: "reply-to-email" },
            },
          ],
        },
        {
          name: "create-sendgrid-provider",
          description: "Create a new Sendgrid provider",
          icon,
          options: [
            {
              name: "--provider-id",
              description: "Provider ID",
              args: { name: "provider-id" },
              isRequired: true,
            },
            {
              name: "--name",
              description: "Provider name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--api-key",
              description: "Sendgrid API key",
              args: { name: "api-key" },
            },
            {
              name: "--from-name",
              description: "Sender Name",
              args: { name: "from-name" },
            },
            {
              name: "--from-email",
              description: "Sender email address",
              args: { name: "from-email" },
            },
            {
              name: "--reply-to-name",
              description: "Name set in the reply to field for the mail",
              args: { name: "reply-to-name" },
            },
            {
              name: "--reply-to-email",
              description: "Email set in the reply to field for the mail",
              args: { name: "reply-to-email" },
            },
            { name: "--enabled", description: "Set as enabled" },
          ],
        },
        {
          name: "update-sendgrid-provider",
          description: "Update a Sendgrid provider by its unique ID",
          icon,
          options: [
            {
              name: "--provider-id",
              description: "Provider ID",
              args: { name: "provider-id" },
              isRequired: true,
            },
            {
              name: "--name",
              description: "Provider name",
              args: { name: "name" },
            },
            { name: "--enabled", description: "Set as enabled" },
            {
              name: "--api-key",
              description: "Sendgrid API key",
              args: { name: "api-key" },
            },
            {
              name: "--from-name",
              description: "Sender Name",
              args: { name: "from-name" },
            },
            {
              name: "--from-email",
              description: "Sender email address",
              args: { name: "from-email" },
            },
            {
              name: "--reply-to-name",
              description: "Name set in the Reply To field for the mail",
              args: { name: "reply-to-name" },
            },
            {
              name: "--reply-to-email",
              description: "Email set in the Reply To field for the mail",
              args: { name: "reply-to-email" },
            },
          ],
        },
        {
          name: "create-ses-provider",
          description: "Create a new Amazon SES provider",
          icon,
          options: [
            {
              name: "--provider-id",
              description: "Provider ID",
              args: { name: "provider-id" },
              isRequired: true,
            },
            {
              name: "--name",
              description: "Provider name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--access-key",
              description: "AWS access key ID",
              args: { name: "access-key" },
            },
            {
              name: "--secret-key",
              description: "AWS secret access key",
              args: { name: "secret-key" },
            },
            {
              name: "--region",
              description: "AWS region, for example us-east-1",
              args: { name: "region" },
            },
            {
              name: "--from-name",
              description: "Sender Name",
              args: { name: "from-name" },
            },
            {
              name: "--from-email",
              description: "Sender email address",
              args: { name: "from-email" },
            },
            {
              name: "--reply-to-name",
              description: "Name set in the reply to field for the mail",
              args: { name: "reply-to-name" },
            },
            {
              name: "--reply-to-email",
              description: "Email set in the reply to field for the mail",
              args: { name: "reply-to-email" },
            },
            { name: "--enabled", description: "Set as enabled" },
          ],
        },
        {
          name: "update-ses-provider",
          description: "Update an Amazon SES provider by its unique ID",
          icon,
          options: [
            {
              name: "--provider-id",
              description: "Provider ID",
              args: { name: "provider-id" },
              isRequired: true,
            },
            {
              name: "--name",
              description: "Provider name",
              args: { name: "name" },
            },
            { name: "--enabled", description: "Set as enabled" },
            {
              name: "--access-key",
              description: "AWS access key ID",
              args: { name: "access-key" },
            },
            {
              name: "--secret-key",
              description: "AWS secret access key",
              args: { name: "secret-key" },
            },
            {
              name: "--region",
              description: "AWS region, for example us-east-1",
              args: { name: "region" },
            },
            {
              name: "--from-name",
              description: "Sender Name",
              args: { name: "from-name" },
            },
            {
              name: "--from-email",
              description: "Sender email address",
              args: { name: "from-email" },
            },
            {
              name: "--reply-to-name",
              description: "Name set in the Reply To field for the mail",
              args: { name: "reply-to-name" },
            },
            {
              name: "--reply-to-email",
              description: "Email set in the Reply To field for the mail",
              args: { name: "reply-to-email" },
            },
          ],
        },
        {
          name: "create-smtp-provider",
          description: "Create a new SMTP provider",
          icon,
          options: [
            {
              name: "--provider-id",
              description: "Provider ID",
              args: { name: "provider-id" },
              isRequired: true,
            },
            {
              name: "--name",
              description: "Provider name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--host",
              description: "SMTP hosts",
              args: { name: "host" },
              isRequired: true,
            },
            {
              name: "--port",
              description: "The default SMTP server port",
              args: { name: "port" },
            },
            {
              name: "--username",
              description: "Authentication username",
              args: { name: "username" },
            },
            {
              name: "--password",
              description: "Authentication password",
              args: { name: "password" },
            },
            {
              name: "--encryption",
              description: "Encryption type",
              args: { name: "encryption", suggestions: ["ssl", "tls"] },
            },
            { name: "--auto-tls", description: "Enable SMTP AutoTLS feature" },
            {
              name: "--mailer",
              description: "The value to use for the X-Mailer header",
              args: { name: "mailer" },
            },
            {
              name: "--from-name",
              description: "Sender Name",
              args: { name: "from-name" },
            },
            {
              name: "--from-email",
              description: "Sender email address",
              args: { name: "from-email" },
            },
            {
              name: "--reply-to-name",
              description: "Name set in the reply to field for the mail",
              args: { name: "reply-to-name" },
            },
            {
              name: "--reply-to-email",
              description: "Email set in the reply to field for the mail",
              args: { name: "reply-to-email" },
            },
            { name: "--enabled", description: "Set as enabled" },
          ],
        },
        {
          name: "update-smtp-provider",
          description: "Update a SMTP provider by its unique ID",
          icon,
          options: [
            {
              name: "--provider-id",
              description: "Provider ID",
              args: { name: "provider-id" },
              isRequired: true,
            },
            {
              name: "--name",
              description: "Provider name",
              args: { name: "name" },
            },
            {
              name: "--host",
              description: "SMTP hosts",
              args: { name: "host" },
            },
            {
              name: "--port",
              description: "SMTP port",
              args: { name: "port" },
            },
            {
              name: "--username",
              description: "Authentication username",
              args: { name: "username" },
            },
            {
              name: "--password",
              description: "Authentication password",
              args: { name: "password" },
            },
            {
              name: "--encryption",
              description: "Encryption type",
              args: { name: "encryption", suggestions: ["ssl", "tls"] },
            },
            { name: "--auto-tls", description: "Enable SMTP AutoTLS feature" },
            {
              name: "--mailer",
              description: "The value to use for the X-Mailer header",
              args: { name: "mailer" },
            },
            {
              name: "--from-name",
              description: "Sender Name",
              args: { name: "from-name" },
            },
            {
              name: "--from-email",
              description: "Sender email address",
              args: { name: "from-email" },
            },
            {
              name: "--reply-to-name",
              description: "Name set in the Reply To field for the mail",
              args: { name: "reply-to-name" },
            },
            {
              name: "--reply-to-email",
              description: "Email set in the Reply To field for the mail",
              args: { name: "reply-to-email" },
            },
            { name: "--enabled", description: "Set as enabled" },
          ],
        },
        {
          name: "create-telesign-provider",
          description: "Create a new Telesign provider",
          icon,
          options: [
            {
              name: "--provider-id",
              description: "Provider ID",
              args: { name: "provider-id" },
              isRequired: true,
            },
            {
              name: "--name",
              description: "Provider name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--from",
              description: "Sender Phone number",
              args: { name: "from" },
            },
            {
              name: "--customer-id",
              description: "Telesign customer ID",
              args: { name: "customer-id" },
            },
            {
              name: "--api-key",
              description: "Telesign API key",
              args: { name: "api-key" },
            },
            { name: "--enabled", description: "Set as enabled" },
          ],
        },
        {
          name: "update-telesign-provider",
          description: "Update a Telesign provider by its unique ID",
          icon,
          options: [
            {
              name: "--provider-id",
              description: "Provider ID",
              args: { name: "provider-id" },
              isRequired: true,
            },
            {
              name: "--name",
              description: "Provider name",
              args: { name: "name" },
            },
            { name: "--enabled", description: "Set as enabled" },
            {
              name: "--customer-id",
              description: "Telesign customer ID",
              args: { name: "customer-id" },
            },
            {
              name: "--api-key",
              description: "Telesign API key",
              args: { name: "api-key" },
            },
            {
              name: "--from",
              description: "Sender number",
              args: { name: "from" },
            },
          ],
        },
        {
          name: "create-textmagic-provider",
          description: "Create a new Textmagic provider",
          icon,
          options: [
            {
              name: "--provider-id",
              description: "Provider ID",
              args: { name: "provider-id" },
              isRequired: true,
            },
            {
              name: "--name",
              description: "Provider name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--from",
              description: "Sender Phone number",
              args: { name: "from" },
            },
            {
              name: "--username",
              description: "Textmagic username",
              args: { name: "username" },
            },
            {
              name: "--api-key",
              description: "Textmagic apiKey",
              args: { name: "api-key" },
            },
            { name: "--enabled", description: "Set as enabled" },
          ],
        },
        {
          name: "update-textmagic-provider",
          description: "Update a Textmagic provider by its unique ID",
          icon,
          options: [
            {
              name: "--provider-id",
              description: "Provider ID",
              args: { name: "provider-id" },
              isRequired: true,
            },
            {
              name: "--name",
              description: "Provider name",
              args: { name: "name" },
            },
            { name: "--enabled", description: "Set as enabled" },
            {
              name: "--username",
              description: "Textmagic username",
              args: { name: "username" },
            },
            {
              name: "--api-key",
              description: "Textmagic apiKey",
              args: { name: "api-key" },
            },
            {
              name: "--from",
              description: "Sender number",
              args: { name: "from" },
            },
          ],
        },
        {
          name: "create-twilio-provider",
          description: "Create a new Twilio provider",
          icon,
          options: [
            {
              name: "--provider-id",
              description: "Provider ID",
              args: { name: "provider-id" },
              isRequired: true,
            },
            {
              name: "--name",
              description: "Provider name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--from",
              description: "Sender phone number or alphanumeric sender ID",
              args: { name: "from" },
            },
            {
              name: "--account-sid",
              description: "Twilio account secret ID",
              args: { name: "account-sid" },
            },
            {
              name: "--auth-token",
              description: "Twilio authentication token",
              args: { name: "auth-token" },
            },
            { name: "--enabled", description: "Set as enabled" },
          ],
        },
        {
          name: "update-twilio-provider",
          description: "Update a Twilio provider by its unique ID",
          icon,
          options: [
            {
              name: "--provider-id",
              description: "Provider ID",
              args: { name: "provider-id" },
              isRequired: true,
            },
            {
              name: "--name",
              description: "Provider name",
              args: { name: "name" },
            },
            { name: "--enabled", description: "Set as enabled" },
            {
              name: "--account-sid",
              description: "Twilio account secret ID",
              args: { name: "account-sid" },
            },
            {
              name: "--auth-token",
              description: "Twilio authentication token",
              args: { name: "auth-token" },
            },
            {
              name: "--from",
              description: "Sender phone number or alphanumeric sender ID",
              args: { name: "from" },
            },
          ],
        },
        {
          name: "create-vonage-provider",
          description: "Create a new Vonage provider",
          icon,
          options: [
            {
              name: "--provider-id",
              description: "Provider ID",
              args: { name: "provider-id" },
              isRequired: true,
            },
            {
              name: "--name",
              description: "Provider name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--from",
              description: "Sender Phone number",
              args: { name: "from" },
            },
            {
              name: "--api-key",
              description: "Vonage API key",
              args: { name: "api-key" },
            },
            {
              name: "--api-secret",
              description: "Vonage API secret",
              args: { name: "api-secret" },
            },
            { name: "--enabled", description: "Set as enabled" },
          ],
        },
        {
          name: "update-vonage-provider",
          description: "Update a Vonage provider by its unique ID",
          icon,
          options: [
            {
              name: "--provider-id",
              description: "Provider ID",
              args: { name: "provider-id" },
              isRequired: true,
            },
            {
              name: "--name",
              description: "Provider name",
              args: { name: "name" },
            },
            { name: "--enabled", description: "Set as enabled" },
            {
              name: "--api-key",
              description: "Vonage API key",
              args: { name: "api-key" },
            },
            {
              name: "--api-secret",
              description: "Vonage API secret",
              args: { name: "api-secret" },
            },
            {
              name: "--from",
              description: "Sender number",
              args: { name: "from" },
            },
          ],
        },
        {
          name: "get-provider",
          description: "Get a provider by its unique ID",
          icon,
          options: [
            {
              name: "--provider-id",
              description: "Provider ID",
              args: { name: "provider-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "delete-provider",
          description: "Delete a provider by its unique ID",
          icon,
          options: [
            {
              name: "--provider-id",
              description: "Provider ID",
              args: { name: "provider-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "list-topics",
          description:
            "Get a list of all topics from the current Appwrite project",
          icon,
          options: [
            {
              name: "--queries",
              description:
                "Array of query strings generated using the Query class provided by the SDK",
              args: { name: "queries" },
              isRepeatable: true,
            },
            {
              name: "--search",
              description: "Search term to filter your list results",
              args: { name: "search" },
            },
            {
              name: "--total",
              description:
                "When set to false, the total count returned will be 0 and will not be calculated",
            },
            ...listOptions,
          ],
        },
        {
          name: "create-topic",
          description: "Create a new topic",
          icon,
          options: [
            {
              name: "--topic-id",
              description: "Topic ID",
              args: { name: "topic-id" },
              isRequired: true,
            },
            {
              name: "--name",
              description: "Topic Name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--subscribe",
              description: "An array of role strings with subscribe permission",
              args: { name: "subscribe" },
              isRepeatable: true,
            },
            {
              name: "--qos",
              description: "MQTT delivery quality of service for this topic",
              args: { name: "qos" },
            },
            {
              name: "--expiry",
              description: "Message retention in seconds for offline delivery",
              args: { name: "expiry" },
            },
            {
              name: "--description",
              description: "Optional description for the topic",
              args: { name: "description" },
            },
          ],
        },
        {
          name: "get-topic",
          description: "Get a topic by its unique ID",
          icon,
          options: [
            {
              name: "--topic-id",
              description: "Topic ID",
              args: { name: "topic-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "update-topic",
          description: "Update a topic by its unique ID",
          icon,
          options: [
            {
              name: "--topic-id",
              description: "Topic ID",
              args: { name: "topic-id" },
              isRequired: true,
            },
            {
              name: "--name",
              description: "Topic Name",
              args: { name: "name" },
            },
            {
              name: "--subscribe",
              description: "An array of role strings with subscribe permission",
              args: { name: "subscribe" },
              isRepeatable: true,
            },
            {
              name: "--qos",
              description: "MQTT delivery quality of service for this topic",
              args: { name: "qos" },
            },
            {
              name: "--expiry",
              description: "Message retention in seconds for offline delivery",
              args: { name: "expiry" },
            },
            {
              name: "--description",
              description: "Optional description for the topic",
              args: { name: "description" },
            },
          ],
        },
        {
          name: "delete-topic",
          description: "Delete a topic by its unique ID",
          icon,
          options: [
            {
              name: "--topic-id",
              description: "Topic ID",
              args: { name: "topic-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "list-subscribers",
          description:
            "Get a list of all subscribers from the current Appwrite project",
          icon,
          options: [
            {
              name: "--topic-id",
              description: "Topic ID",
              args: { name: "topic-id" },
              isRequired: true,
            },
            {
              name: "--queries",
              description:
                "Array of query strings generated using the Query class provided by the SDK",
              args: { name: "queries" },
              isRepeatable: true,
            },
            {
              name: "--search",
              description: "Search term to filter your list results",
              args: { name: "search" },
            },
            {
              name: "--total",
              description:
                "When set to false, the total count returned will be 0 and will not be calculated",
            },
            ...listOptions,
          ],
        },
        {
          name: "create-subscriber",
          description: "Create a new subscriber",
          icon,
          options: [
            {
              name: "--topic-id",
              description: "Topic ID",
              args: { name: "topic-id" },
              isRequired: true,
            },
            {
              name: "--subscriber-id",
              description: "Subscriber ID",
              args: { name: "subscriber-id" },
              isRequired: true,
            },
            {
              name: "--target-id",
              description: "Target ID",
              args: { name: "target-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "get-subscriber",
          description: "Get a subscriber by its unique ID",
          icon,
          options: [
            {
              name: "--topic-id",
              description: "Topic ID",
              args: { name: "topic-id" },
              isRequired: true,
            },
            {
              name: "--subscriber-id",
              description: "Subscriber ID",
              args: { name: "subscriber-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "delete-subscriber",
          description: "Delete a subscriber by its unique ID",
          icon,
          options: [
            {
              name: "--topic-id",
              description: "Topic ID",
              args: { name: "topic-id" },
              isRequired: true,
            },
            {
              name: "--subscriber-id",
              description: "Subscriber ID",
              args: { name: "subscriber-id" },
              isRequired: true,
            },
          ],
        },
      ],
    },
    {
      name: "migrations",
      description: "Migrate data between services",
      icon,
      subcommands: [
        {
          name: "list",
          description: "List all migrations in the current project",
          icon,
          options: [
            {
              name: "--queries",
              description:
                "Array of query strings generated using the Query class provided by the SDK",
              args: { name: "queries" },
              isRepeatable: true,
            },
            {
              name: "--search",
              description: "Search term to filter your list results",
              args: { name: "search" },
            },
            {
              name: "--total",
              description:
                "When set to false, the total count returned will be 0 and will not be calculated",
            },
            ...listOptions,
          ],
        },
        {
          name: "create-appwrite-migration",
          description:
            "Migrate data from another Appwrite project to your current project",
          icon,
          options: [
            {
              name: "--resources",
              description: "List of resources to migrate",
              args: { name: "resources" },
              isRepeatable: true,
              isRequired: true,
            },
            {
              name: "--endpoint",
              description: "Source Appwrite endpoint",
              args: { name: "endpoint" },
              isRequired: true,
            },
            {
              name: "--project-id",
              description: "Source Project ID",
              args: { name: "project-id" },
              isRequired: true,
            },
            {
              name: "--api-key",
              description: "Source API Key",
              args: { name: "api-key" },
              isRequired: true,
            },
            {
              name: "--on-duplicate",
              description:
                "Behavior when a row with an existing $id is encountered",
              args: { name: "on-duplicate" },
            },
          ],
        },
        {
          name: "create-csv-export",
          description:
            "Export documents to a CSV file from your Appwrite database",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID containing the source collection",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--collection-id",
              description: "Collection ID to export documents from",
              args: { name: "collection-id" },
              isRequired: true,
            },
            {
              name: "--filename",
              description:
                "The name of the file to be created for the export, excluding the .csv extension",
              args: { name: "filename" },
              isRequired: true,
            },
            {
              name: "--columns",
              description: "List of attributes to export",
              args: { name: "columns" },
              isRepeatable: true,
            },
            {
              name: "--queries",
              description:
                "Array of query strings generated using the Query class provided by the SDK to filter documents to export",
              args: { name: "queries" },
              isRepeatable: true,
            },
            {
              name: "--delimiter",
              description: "The character that separates each column value",
              args: { name: "delimiter" },
            },
            {
              name: "--enclosure",
              description: "The character that encloses each column value",
              args: { name: "enclosure" },
            },
            {
              name: "--escape",
              description: "The escape character for the enclosure character",
              args: { name: "escape" },
            },
            {
              name: "--header",
              description:
                "Whether to include the header row with column names",
            },
            {
              name: "--notify",
              description:
                "Set to true to receive an email when the export is complete",
            },
            ...listOptions,
          ],
        },
        {
          name: "create-csv-import",
          description:
            "Import documents from a CSV file into your Appwrite database",
          icon,
          options: [
            {
              name: "--bucket-id",
              description: "Storage bucket unique ID",
              args: { name: "bucket-id" },
              isRequired: true,
            },
            {
              name: "--file-id",
              description: "File ID",
              args: { name: "file-id" },
              isRequired: true,
            },
            {
              name: "--database-id",
              description: "Database ID containing the target collection",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--collection-id",
              description: "Collection ID to import documents into",
              args: { name: "collection-id" },
              isRequired: true,
            },
            {
              name: "--internal-file",
              description: "Is the file stored in an internal bucket?",
            },
            {
              name: "--on-duplicate",
              description:
                "Behavior when a row with an existing $id is encountered",
              args: { name: "on-duplicate" },
            },
          ],
        },
        {
          name: "create-firebase-migration",
          description:
            "Migrate data from a Firebase project to your Appwrite project",
          icon,
          options: [
            {
              name: "--resources",
              description: "List of resources to migrate",
              args: { name: "resources" },
              isRepeatable: true,
              isRequired: true,
            },
            {
              name: "--service-account",
              description: "JSON of the Firebase service account credentials",
              args: { name: "service-account" },
              isRequired: true,
            },
          ],
        },
        {
          name: "get-firebase-report",
          description:
            "Generate a report of the data in a Firebase project before migrating",
          icon,
          options: [
            {
              name: "--resources",
              description: "List of resources to migrate",
              args: { name: "resources" },
              isRepeatable: true,
              isRequired: true,
            },
            {
              name: "--service-account",
              description: "JSON of the Firebase service account credentials",
              args: { name: "service-account" },
              isRequired: true,
            },
          ],
        },
        {
          name: "create-json-export",
          description:
            "Export documents to a JSON file from your Appwrite database",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID containing the source collection",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--collection-id",
              description: "Collection ID to export documents from",
              args: { name: "collection-id" },
              isRequired: true,
            },
            {
              name: "--filename",
              description:
                "The name of the file to be created for the export, excluding the .json extension",
              args: { name: "filename" },
              isRequired: true,
            },
            {
              name: "--columns",
              description: "List of attributes to export",
              args: { name: "columns" },
              isRepeatable: true,
            },
            {
              name: "--queries",
              description:
                "Array of query strings generated using the Query class provided by the SDK to filter documents to export",
              args: { name: "queries" },
              isRepeatable: true,
            },
            {
              name: "--notify",
              description:
                "Set to true to receive an email when the export is complete",
            },
            ...listOptions,
          ],
        },
        {
          name: "create-json-import",
          description:
            "Import documents from a JSON file into your Appwrite database",
          icon,
          options: [
            {
              name: "--bucket-id",
              description: "Storage bucket unique ID",
              args: { name: "bucket-id" },
              isRequired: true,
            },
            {
              name: "--file-id",
              description: "File ID",
              args: { name: "file-id" },
              isRequired: true,
            },
            {
              name: "--database-id",
              description: "Database ID containing the target collection",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--collection-id",
              description: "Collection ID to import documents into",
              args: { name: "collection-id" },
              isRequired: true,
            },
            {
              name: "--internal-file",
              description: "Is the file stored in an internal bucket?",
            },
            {
              name: "--on-duplicate",
              description:
                "Behavior when a row with an existing $id is encountered",
              args: { name: "on-duplicate" },
            },
          ],
        },
        {
          name: "create-n-host-migration",
          description:
            "Migrate data from an NHost project to your Appwrite project",
          icon,
          options: [
            {
              name: "--resources",
              description: "List of resources to migrate",
              args: { name: "resources" },
              isRepeatable: true,
              isRequired: true,
            },
            {
              name: "--subdomain",
              description: "Source's Subdomain",
              args: { name: "subdomain" },
              isRequired: true,
            },
            {
              name: "--region",
              description: "Source's Region",
              args: { name: "region" },
              isRequired: true,
            },
            {
              name: "--admin-secret",
              description: "Source's Admin Secret",
              args: { name: "admin-secret" },
              isRequired: true,
            },
            {
              name: "--database",
              description: "Source's Database Name",
              args: { name: "database" },
              isRequired: true,
            },
            {
              name: "--username",
              description: "Source's Database Username",
              args: { name: "username" },
              isRequired: true,
            },
            {
              name: "--password",
              description: "Source's Database Password",
              args: { name: "password" },
              isRequired: true,
            },
            {
              name: "--port",
              description: "Source's Database Port",
              args: { name: "port" },
            },
          ],
        },
        {
          name: "get-n-host-report",
          description:
            "Generate a detailed report of the data in an NHost project before migrating",
          icon,
          options: [
            {
              name: "--resources",
              description: "List of resources to migrate",
              args: { name: "resources" },
              isRepeatable: true,
              isRequired: true,
            },
            {
              name: "--subdomain",
              description: "Source's Subdomain",
              args: { name: "subdomain" },
              isRequired: true,
            },
            {
              name: "--region",
              description: "Source's Region",
              args: { name: "region" },
              isRequired: true,
            },
            {
              name: "--admin-secret",
              description: "Source's Admin Secret",
              args: { name: "admin-secret" },
              isRequired: true,
            },
            {
              name: "--database",
              description: "Source's Database Name",
              args: { name: "database" },
              isRequired: true,
            },
            {
              name: "--username",
              description: "Source's Database Username",
              args: { name: "username" },
              isRequired: true,
            },
            {
              name: "--password",
              description: "Source's Database Password",
              args: { name: "password" },
              isRequired: true,
            },
            {
              name: "--port",
              description: "Source's Database Port",
              args: { name: "port" },
            },
          ],
        },
        {
          name: "create-supabase-migration",
          description:
            "Migrate data from a Supabase project to your Appwrite project",
          icon,
          options: [
            {
              name: "--resources",
              description: "List of resources to migrate",
              args: { name: "resources" },
              isRepeatable: true,
              isRequired: true,
            },
            {
              name: "--endpoint",
              description: "Source's Supabase Endpoint",
              args: { name: "endpoint" },
              isRequired: true,
            },
            {
              name: "--api-key",
              description: "Source's API Key",
              args: { name: "api-key" },
              isRequired: true,
            },
            {
              name: "--database-host",
              description: "Source's Database Host",
              args: { name: "database-host" },
              isRequired: true,
            },
            {
              name: "--username",
              description: "Source's Database Username",
              args: { name: "username" },
              isRequired: true,
            },
            {
              name: "--password",
              description: "Source's Database Password",
              args: { name: "password" },
              isRequired: true,
            },
            {
              name: "--port",
              description: "Source's Database Port",
              args: { name: "port" },
            },
          ],
        },
        {
          name: "get-supabase-report",
          description:
            "Generate a report of the data in a Supabase project before migrating",
          icon,
          options: [
            {
              name: "--resources",
              description: "List of resources to migrate",
              args: { name: "resources" },
              isRepeatable: true,
              isRequired: true,
            },
            {
              name: "--endpoint",
              description: "Source's Supabase Endpoint",
              args: { name: "endpoint" },
              isRequired: true,
            },
            {
              name: "--api-key",
              description: "Source's API Key",
              args: { name: "api-key" },
              isRequired: true,
            },
            {
              name: "--database-host",
              description: "Source's Database Host",
              args: { name: "database-host" },
              isRequired: true,
            },
            {
              name: "--username",
              description: "Source's Database Username",
              args: { name: "username" },
              isRequired: true,
            },
            {
              name: "--password",
              description: "Source's Database Password",
              args: { name: "password" },
              isRequired: true,
            },
            {
              name: "--port",
              description: "Source's Database Port",
              args: { name: "port" },
            },
          ],
        },
        {
          name: "get",
          description: "Get a migration by its unique ID",
          icon,
          options: [
            {
              name: "--migration-id",
              description: "Migration unique ID",
              args: { name: "migration-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "retry",
          description: "Retry a failed migration",
          icon,
          options: [
            {
              name: "--migration-id",
              description: "Migration unique ID",
              args: { name: "migration-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a migration by its unique ID",
          icon,
          options: [
            {
              name: "--migration-id",
              description: "Migration ID",
              args: { name: "migration-id" },
              isRequired: true,
            },
          ],
        },
      ],
    },
    {
      name: "mongo",
      description: "Dedicated MongoDB databases",
      icon,
      subcommands: [
        {
          name: "list",
          description: "List all dedicated databases",
          icon,
          options: [
            {
              name: "--queries",
              description: "Array of query strings",
              args: { name: "queries" },
              isRepeatable: true,
            },
            {
              name: "--total",
              description:
                "When set to false, the total count returned will be 0 and will not be calculated",
            },
            ...listOptions,
          ],
        },
        {
          name: "create",
          description:
            "Create a new dedicated database with the chosen engine and configuration",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--name",
              description: "Database display name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--version",
              description: "Database engine version",
              args: { name: "version" },
            },
            {
              name: "--specification",
              description: "Specification identifier",
              args: { name: "specification" },
            },
            {
              name: "--replicas",
              description: "Number of high availability replicas (0-5)",
              args: { name: "replicas" },
            },
            {
              name: "--sync-mode",
              description: "Replication sync mode preference",
              args: {
                name: "sync-mode",
                suggestions: ["async", "sync", "quorum"],
              },
            },
            {
              name: "--network-idle-timeout-seconds",
              description: "Connection idle timeout in seconds",
              args: { name: "network-idle-timeout-seconds" },
            },
            {
              name: "--network-ip-allowlist",
              description: "IP addresses/CIDR ranges allowed to connect",
              args: { name: "network-ip-allowlist" },
              isRepeatable: true,
            },
            {
              name: "--idle-timeout-minutes",
              description:
                "Minutes of inactivity before container scales to zero",
              args: { name: "idle-timeout-minutes" },
            },
            {
              name: "--pitr",
              description: "Enable point-in-time recovery (PITR)",
            },
            {
              name: "--pitr-retention-days",
              description: "Number of days to retain PITR data",
              args: { name: "pitr-retention-days" },
            },
            {
              name: "--storage-autoscaling",
              description:
                "Enable automatic storage expansion when usage exceeds threshold",
            },
            {
              name: "--storage-autoscaling-threshold-percent",
              description:
                "Storage usage percentage (50-95) that triggers automatic expansion",
              args: { name: "storage-autoscaling-threshold-percent" },
            },
            {
              name: "--storage-autoscaling-max-gb",
              description: "Maximum storage size in GB for autoscaling",
              args: { name: "storage-autoscaling-max-gb" },
            },
          ],
        },
        {
          name: "list-specifications",
          description:
            "List the dedicated database specifications available on the current plan",
          icon,
        },
        {
          name: "get",
          description: "Get a dedicated database by its unique ID",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "update",
          description: "Update a dedicated database configuration",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--name",
              description: "Database display name",
              args: { name: "name" },
            },
            {
              name: "--status",
              description: "Database status",
              args: {
                name: "status",
                suggestions: ["ready", "paused", "inactive"],
              },
            },
            {
              name: "--specification",
              description: "Specification",
              args: { name: "specification" },
            },
            {
              name: "--replicas",
              description: "Number of high availability replicas (0-5)",
              args: { name: "replicas" },
            },
            {
              name: "--sync-mode",
              description: "Replication sync mode preference",
              args: {
                name: "sync-mode",
                suggestions: ["async", "sync", "quorum"],
              },
            },
            {
              name: "--network-idle-timeout-seconds",
              description: "Connection idle timeout in seconds (60-86400)",
              args: { name: "network-idle-timeout-seconds" },
            },
            {
              name: "--network-ip-allowlist",
              description: "IP addresses/CIDR ranges allowed to connect",
              args: { name: "network-ip-allowlist" },
              isRepeatable: true,
            },
            {
              name: "--idle-timeout-minutes",
              description: "Minutes before container scales to zero",
              args: { name: "idle-timeout-minutes" },
            },
            {
              name: "--pitr",
              description: "Enable or disable point-in-time recovery (PITR)",
            },
            {
              name: "--pitr-retention-days",
              description: "Days to retain PITR data",
              args: { name: "pitr-retention-days" },
            },
            {
              name: "--storage-autoscaling",
              description:
                "Enable automatic storage expansion when usage exceeds threshold",
            },
            {
              name: "--storage-autoscaling-threshold-percent",
              description:
                "Storage usage percentage (50-95) that triggers automatic expansion",
              args: { name: "storage-autoscaling-threshold-percent" },
            },
            {
              name: "--storage-autoscaling-max-gb",
              description: "Maximum storage size in GB for autoscaling",
              args: { name: "storage-autoscaling-max-gb" },
            },
            {
              name: "--metrics-trace-sample-rate",
              description: "Fraction of queries to trace (0.0–1.0)",
              args: { name: "metrics-trace-sample-rate" },
            },
            {
              name: "--metrics-slow-query-log-threshold-ms",
              description:
                "Threshold in ms above which queries are logged as slow",
              args: { name: "metrics-slow-query-log-threshold-ms" },
            },
            {
              name: "--sql-api-enabled",
              description: "Enable the SQL API sidecar for this database",
            },
            {
              name: "--sql-api-allowed-statements",
              description: "Statement types the SQL API accepts",
              args: {
                name: "sql-api-allowed-statements",
                suggestions: [
                  "SELECT",
                  "INSERT",
                  "UPDATE",
                  "DELETE",
                  "CREATE",
                  "ALTER",
                  "DROP",
                  "TRUNCATE",
                  "GRANT",
                  "REVOKE",
                ],
              },
              isRepeatable: true,
            },
            {
              name: "--sql-api-max-rows",
              description:
                "Maximum rows returned per SQL API execution (1-1000000)",
              args: { name: "sql-api-max-rows" },
            },
            {
              name: "--sql-api-max-bytes",
              description:
                "Maximum serialised SQL API result payload in bytes (1024-104857600)",
              args: { name: "sql-api-max-bytes" },
            },
            {
              name: "--sql-api-timeout-seconds",
              description:
                "Per-call SQL API execution timeout in seconds (1-300)",
              args: { name: "sql-api-timeout-seconds" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a dedicated database",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "list-backups",
          description: "List all backups for a dedicated database",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--queries",
              description:
                "Array of query strings generated using the Query class provided by the SDK",
              args: { name: "queries" },
              isRepeatable: true,
            },
            {
              name: "--total",
              description:
                "When set to false, the total count returned will be 0 and will not be calculated",
            },
            ...listOptions,
          ],
        },
        {
          name: "create-backup",
          description: "Create a manual backup of a dedicated database",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--type",
              description: "Backup type: full or incremental",
              args: { name: "type" },
            },
          ],
        },
        {
          name: "list-backup-policies",
          description:
            "List scheduled backup policies for a dedicated database",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--queries",
              description:
                "Array of query strings generated using the Query class provided by the SDK",
              args: { name: "queries" },
              isRepeatable: true,
            },
            {
              name: "--total",
              description:
                "When set to false, the total count returned will be 0 and will not be calculated",
            },
            ...listOptions,
          ],
        },
        {
          name: "create-backup-policy",
          description:
            "Create a scheduled backup policy for a dedicated database",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--policy-id",
              description: "Policy ID",
              args: { name: "policy-id" },
              isRequired: true,
            },
            {
              name: "--name",
              description: "Policy name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--schedule",
              description: "Schedule CRON syntax",
              args: { name: "schedule" },
              isRequired: true,
            },
            {
              name: "--retention",
              description: "Days to keep backups before deletion",
              args: { name: "retention" },
              isRequired: true,
            },
            {
              name: "--type",
              description: "Backup type: full or incremental",
              args: { name: "type" },
            },
            {
              name: "--enabled",
              description:
                "Is policy enabled? When disabled, no backups will be taken",
            },
          ],
        },
        {
          name: "get-backup-policy",
          description: "Get a scheduled backup policy for a dedicated database",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--policy-id",
              description: "Policy ID",
              args: { name: "policy-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "update-backup-policy",
          description:
            "Update a scheduled backup policy for a dedicated database",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--policy-id",
              description: "Policy ID",
              args: { name: "policy-id" },
              isRequired: true,
            },
            {
              name: "--name",
              description: "Policy name",
              args: { name: "name" },
            },
            {
              name: "--schedule",
              description: "Schedule CRON syntax",
              args: { name: "schedule" },
            },
            {
              name: "--retention",
              description: "Days to keep backups before deletion",
              args: { name: "retention" },
            },
            {
              name: "--enabled",
              description:
                "Is policy enabled? When disabled, no backups will be taken",
            },
          ],
        },
        {
          name: "delete-backup-policy",
          description:
            "Delete a scheduled backup policy for a dedicated database",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--policy-id",
              description: "Policy ID",
              args: { name: "policy-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "update-backup-storage",
          description:
            "Configure off-cluster backup storage for a dedicated database",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--provider",
              description: "Storage provider for off-cluster backups",
              args: { name: "provider", suggestions: ["s3", "gcs", "azure"] },
              isRequired: true,
            },
            {
              name: "--bucket",
              description: "Storage bucket or container name",
              args: { name: "bucket" },
              isRequired: true,
            },
            {
              name: "--access-key",
              description: "Access key or client ID for authentication",
              args: { name: "access-key" },
              isRequired: true,
            },
            {
              name: "--secret-key",
              description:
                "Secret key or service account JSON for authentication",
              args: { name: "secret-key" },
              isRequired: true,
            },
            {
              name: "--region",
              description: "Storage region",
              args: { name: "region" },
            },
            {
              name: "--prefix",
              description: "Object key prefix for backups",
              args: { name: "prefix" },
            },
            {
              name: "--endpoint",
              description:
                "Custom endpoint for S3-compatible storage (e.g. MinIO)",
              args: { name: "endpoint" },
            },
          ],
        },
        {
          name: "get-backup",
          description:
            "Get details of a specific database backup including its status, size, and timestamps",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--backup-id",
              description: "Backup ID",
              args: { name: "backup-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "delete-backup",
          description: "Delete a database backup",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--backup-id",
              description: "Backup ID",
              args: { name: "backup-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "list-branches",
          description: "List all ephemeral branches for a dedicated database",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "create-branch",
          description:
            "Create an ephemeral database branch from the primary via PVC snapshot",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--branch-id",
              description: "Branch ID",
              args: { name: "branch-id" },
            },
            {
              name: "--ttl",
              description: "Time-to-live in seconds before the branch expires",
              args: { name: "ttl" },
            },
          ],
        },
        {
          name: "delete-branch",
          description: "Delete an ephemeral database branch",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--branch-id",
              description: "Branch ID",
              args: { name: "branch-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "update-credentials",
          description:
            "Queue a rotation of the primary connection credentials for a dedicated database",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "create-failover",
          description:
            "Trigger a manual failover for a dedicated database with high availability enabled",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--target-replica-id",
              description: "Target replica ID to promote",
              args: { name: "target-replica-id" },
            },
          ],
        },
        {
          name: "update-maintenance",
          description: "Update the maintenance window for a dedicated database",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--day",
              description: "Day of the week for the maintenance window",
              args: {
                name: "day",
                suggestions: ["sun", "mon", "tue", "wed", "thu", "fri", "sat"],
              },
              isRequired: true,
            },
            {
              name: "--hour-utc",
              description: "Hour in UTC (0-23) for maintenance window start",
              args: { name: "hour-utc" },
              isRequired: true,
            },
          ],
        },
        {
          name: "create-migration",
          description: "Migrate a database between shared and dedicated types",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--target-type",
              description: "Target database type to migrate to",
              args: {
                name: "target-type",
                suggestions: ["shared", "dedicated"],
              },
              isRequired: true,
            },
            {
              name: "--specification",
              description:
                "Target specification to provision when migrating to dedicated",
              args: { name: "specification" },
            },
          ],
        },
        {
          name: "list-operations",
          description:
            "List the lifecycle operations recorded for a dedicated database, newest first",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--status",
              description: "Filter by operation status",
              args: { name: "status" },
            },
            {
              name: "--limit",
              description: "Maximum number of operations to return",
              args: { name: "limit" },
            },
            {
              name: "--offset",
              description: "Number of operations to skip",
              args: { name: "offset" },
            },
          ],
        },
        {
          name: "get-pitr",
          description:
            "Get available point-in-time recovery windows for a dedicated database",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "get-replicas",
          description: "Get high availability status for a dedicated database",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "list-restorations",
          description: "List all restorations for a dedicated database",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--status",
              description: "Filter by restoration status",
              args: { name: "status" },
            },
            {
              name: "--type",
              description: "Filter by restoration type",
              args: { name: "type" },
            },
            {
              name: "--limit",
              description: "Maximum number of restorations to return",
              args: { name: "limit" },
            },
            {
              name: "--offset",
              description: "Number of restorations to skip",
              args: { name: "offset" },
            },
          ],
        },
        {
          name: "create-restoration",
          description:
            "Restore a database from a backup or to a specific point in time (PITR)",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--type",
              description: "Restoration type",
              args: { name: "type", suggestions: ["backup", "pitr"] },
            },
            {
              name: "--backup-id",
              description:
                "Backup ID to restore from (required for backup type)",
              args: { name: "backup-id" },
            },
            {
              name: "--target-database-id",
              description: "Existing database ID to restore into",
              args: { name: "target-database-id" },
            },
            {
              name: "--target-time",
              description:
                "Target time for PITR (required for pitr type) as an ISO 8601 (https://www.iso.org/iso-8601-date-and-time-format.html) datetime",
              args: { name: "target-time" },
            },
            {
              name: "--restore-mode",
              description: "Where the backup is restored",
              args: {
                name: "restore-mode",
                suggestions: ["in_place", "clone", "copy"],
              },
            },
            {
              name: "--target-name",
              description:
                "Display name for the database a copy restoration provisions",
              args: { name: "target-name" },
            },
            {
              name: "--auto-promote",
              description:
                "Whether a clone restoration switches the database over as soon as the recovery is ready",
            },
          ],
        },
        {
          name: "get-restoration",
          description:
            "Get details of a specific database restoration including its status, type, and timestamps",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--restoration-id",
              description: "Restoration ID",
              args: { name: "restoration-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "promote-restoration",
          description:
            "Switch the database over to the clone a restoration recovered",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--restoration-id",
              description: "Restoration ID",
              args: { name: "restoration-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "get-status",
          description:
            "Get real-time health and status information for a dedicated database",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "create-upgrade",
          description: "Upgrade a dedicated database to a new engine version",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--target-version",
              description: "Target engine version to upgrade to",
              args: { name: "target-version" },
              isRequired: true,
            },
          ],
        },
      ],
    },
    {
      name: "mysql",
      description: "Dedicated MySQL databases",
      icon,
      subcommands: [
        {
          name: "list",
          description: "List all dedicated databases",
          icon,
          options: [
            {
              name: "--queries",
              description: "Array of query strings",
              args: { name: "queries" },
              isRepeatable: true,
            },
            {
              name: "--total",
              description:
                "When set to false, the total count returned will be 0 and will not be calculated",
            },
            ...listOptions,
          ],
        },
        {
          name: "create",
          description:
            "Create a new dedicated database with the chosen engine and configuration",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--name",
              description: "Database display name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--version",
              description: "Database engine version",
              args: { name: "version" },
            },
            {
              name: "--specification",
              description: "Specification identifier",
              args: { name: "specification" },
            },
            {
              name: "--replicas",
              description: "Number of high availability replicas (0-5)",
              args: { name: "replicas" },
            },
            {
              name: "--sync-mode",
              description: "Replication sync mode preference",
              args: {
                name: "sync-mode",
                suggestions: ["async", "sync", "quorum"],
              },
            },
            {
              name: "--network-idle-timeout-seconds",
              description: "Connection idle timeout in seconds",
              args: { name: "network-idle-timeout-seconds" },
            },
            {
              name: "--network-ip-allowlist",
              description: "IP addresses/CIDR ranges allowed to connect",
              args: { name: "network-ip-allowlist" },
              isRepeatable: true,
            },
            {
              name: "--idle-timeout-minutes",
              description:
                "Minutes of inactivity before container scales to zero",
              args: { name: "idle-timeout-minutes" },
            },
            {
              name: "--pitr",
              description: "Enable point-in-time recovery (PITR)",
            },
            {
              name: "--pitr-retention-days",
              description: "Number of days to retain PITR data",
              args: { name: "pitr-retention-days" },
            },
            {
              name: "--storage-autoscaling",
              description:
                "Enable automatic storage expansion when usage exceeds threshold",
            },
            {
              name: "--storage-autoscaling-threshold-percent",
              description:
                "Storage usage percentage (50-95) that triggers automatic expansion",
              args: { name: "storage-autoscaling-threshold-percent" },
            },
            {
              name: "--storage-autoscaling-max-gb",
              description: "Maximum storage size in GB for autoscaling",
              args: { name: "storage-autoscaling-max-gb" },
            },
          ],
        },
        {
          name: "list-specifications",
          description:
            "List the dedicated database specifications available on the current plan",
          icon,
        },
        {
          name: "get",
          description: "Get a dedicated database by its unique ID",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "update",
          description: "Update a dedicated database configuration",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--name",
              description: "Database display name",
              args: { name: "name" },
            },
            {
              name: "--status",
              description: "Database status",
              args: {
                name: "status",
                suggestions: ["ready", "paused", "inactive"],
              },
            },
            {
              name: "--specification",
              description: "Specification",
              args: { name: "specification" },
            },
            {
              name: "--replicas",
              description: "Number of high availability replicas (0-5)",
              args: { name: "replicas" },
            },
            {
              name: "--sync-mode",
              description: "Replication sync mode preference",
              args: {
                name: "sync-mode",
                suggestions: ["async", "sync", "quorum"],
              },
            },
            {
              name: "--network-idle-timeout-seconds",
              description: "Connection idle timeout in seconds (60-86400)",
              args: { name: "network-idle-timeout-seconds" },
            },
            {
              name: "--network-ip-allowlist",
              description: "IP addresses/CIDR ranges allowed to connect",
              args: { name: "network-ip-allowlist" },
              isRepeatable: true,
            },
            {
              name: "--idle-timeout-minutes",
              description: "Minutes before container scales to zero",
              args: { name: "idle-timeout-minutes" },
            },
            {
              name: "--pitr",
              description: "Enable or disable point-in-time recovery (PITR)",
            },
            {
              name: "--pitr-retention-days",
              description: "Days to retain PITR data",
              args: { name: "pitr-retention-days" },
            },
            {
              name: "--storage-autoscaling",
              description:
                "Enable automatic storage expansion when usage exceeds threshold",
            },
            {
              name: "--storage-autoscaling-threshold-percent",
              description:
                "Storage usage percentage (50-95) that triggers automatic expansion",
              args: { name: "storage-autoscaling-threshold-percent" },
            },
            {
              name: "--storage-autoscaling-max-gb",
              description: "Maximum storage size in GB for autoscaling",
              args: { name: "storage-autoscaling-max-gb" },
            },
            {
              name: "--metrics-trace-sample-rate",
              description: "Fraction of queries to trace (0.0–1.0)",
              args: { name: "metrics-trace-sample-rate" },
            },
            {
              name: "--metrics-slow-query-log-threshold-ms",
              description:
                "Threshold in ms above which queries are logged as slow",
              args: { name: "metrics-slow-query-log-threshold-ms" },
            },
            {
              name: "--sql-api-enabled",
              description: "Enable the SQL API sidecar for this database",
            },
            {
              name: "--sql-api-allowed-statements",
              description: "Statement types the SQL API accepts",
              args: {
                name: "sql-api-allowed-statements",
                suggestions: [
                  "SELECT",
                  "INSERT",
                  "UPDATE",
                  "DELETE",
                  "CREATE",
                  "ALTER",
                  "DROP",
                  "TRUNCATE",
                  "GRANT",
                  "REVOKE",
                ],
              },
              isRepeatable: true,
            },
            {
              name: "--sql-api-max-rows",
              description:
                "Maximum rows returned per SQL API execution (1-1000000)",
              args: { name: "sql-api-max-rows" },
            },
            {
              name: "--sql-api-max-bytes",
              description:
                "Maximum serialised SQL API result payload in bytes (1024-104857600)",
              args: { name: "sql-api-max-bytes" },
            },
            {
              name: "--sql-api-timeout-seconds",
              description:
                "Per-call SQL API execution timeout in seconds (1-300)",
              args: { name: "sql-api-timeout-seconds" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a dedicated database",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "list-backups",
          description: "List all backups for a dedicated database",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--queries",
              description:
                "Array of query strings generated using the Query class provided by the SDK",
              args: { name: "queries" },
              isRepeatable: true,
            },
            {
              name: "--total",
              description:
                "When set to false, the total count returned will be 0 and will not be calculated",
            },
            ...listOptions,
          ],
        },
        {
          name: "create-backup",
          description: "Create a manual backup of a dedicated database",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--type",
              description: "Backup type: full or incremental",
              args: { name: "type" },
            },
          ],
        },
        {
          name: "list-backup-policies",
          description:
            "List scheduled backup policies for a dedicated database",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--queries",
              description:
                "Array of query strings generated using the Query class provided by the SDK",
              args: { name: "queries" },
              isRepeatable: true,
            },
            {
              name: "--total",
              description:
                "When set to false, the total count returned will be 0 and will not be calculated",
            },
            ...listOptions,
          ],
        },
        {
          name: "create-backup-policy",
          description:
            "Create a scheduled backup policy for a dedicated database",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--policy-id",
              description: "Policy ID",
              args: { name: "policy-id" },
              isRequired: true,
            },
            {
              name: "--name",
              description: "Policy name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--schedule",
              description: "Schedule CRON syntax",
              args: { name: "schedule" },
              isRequired: true,
            },
            {
              name: "--retention",
              description: "Days to keep backups before deletion",
              args: { name: "retention" },
              isRequired: true,
            },
            {
              name: "--type",
              description: "Backup type: full or incremental",
              args: { name: "type" },
            },
            {
              name: "--enabled",
              description:
                "Is policy enabled? When disabled, no backups will be taken",
            },
          ],
        },
        {
          name: "get-backup-policy",
          description: "Get a scheduled backup policy for a dedicated database",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--policy-id",
              description: "Policy ID",
              args: { name: "policy-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "update-backup-policy",
          description:
            "Update a scheduled backup policy for a dedicated database",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--policy-id",
              description: "Policy ID",
              args: { name: "policy-id" },
              isRequired: true,
            },
            {
              name: "--name",
              description: "Policy name",
              args: { name: "name" },
            },
            {
              name: "--schedule",
              description: "Schedule CRON syntax",
              args: { name: "schedule" },
            },
            {
              name: "--retention",
              description: "Days to keep backups before deletion",
              args: { name: "retention" },
            },
            {
              name: "--enabled",
              description:
                "Is policy enabled? When disabled, no backups will be taken",
            },
          ],
        },
        {
          name: "delete-backup-policy",
          description:
            "Delete a scheduled backup policy for a dedicated database",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--policy-id",
              description: "Policy ID",
              args: { name: "policy-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "update-backup-storage",
          description:
            "Configure off-cluster backup storage for a dedicated database",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--provider",
              description: "Storage provider for off-cluster backups",
              args: { name: "provider", suggestions: ["s3", "gcs", "azure"] },
              isRequired: true,
            },
            {
              name: "--bucket",
              description: "Storage bucket or container name",
              args: { name: "bucket" },
              isRequired: true,
            },
            {
              name: "--access-key",
              description: "Access key or client ID for authentication",
              args: { name: "access-key" },
              isRequired: true,
            },
            {
              name: "--secret-key",
              description:
                "Secret key or service account JSON for authentication",
              args: { name: "secret-key" },
              isRequired: true,
            },
            {
              name: "--region",
              description: "Storage region",
              args: { name: "region" },
            },
            {
              name: "--prefix",
              description: "Object key prefix for backups",
              args: { name: "prefix" },
            },
            {
              name: "--endpoint",
              description:
                "Custom endpoint for S3-compatible storage (e.g. MinIO)",
              args: { name: "endpoint" },
            },
          ],
        },
        {
          name: "get-backup",
          description:
            "Get details of a specific database backup including its status, size, and timestamps",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--backup-id",
              description: "Backup ID",
              args: { name: "backup-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "delete-backup",
          description: "Delete a database backup",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--backup-id",
              description: "Backup ID",
              args: { name: "backup-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "list-branches",
          description: "List all ephemeral branches for a dedicated database",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "create-branch",
          description:
            "Create an ephemeral database branch from the primary via PVC snapshot",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--branch-id",
              description: "Branch ID",
              args: { name: "branch-id" },
            },
            {
              name: "--ttl",
              description: "Time-to-live in seconds before the branch expires",
              args: { name: "ttl" },
            },
          ],
        },
        {
          name: "delete-branch",
          description: "Delete an ephemeral database branch",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--branch-id",
              description: "Branch ID",
              args: { name: "branch-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "update-credentials",
          description:
            "Queue a rotation of the primary connection credentials for a dedicated database",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "create-execution",
          description: "Execute SQL through the console-facing Cloud endpoint",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--sql",
              description: "SQL statement to execute",
              args: { name: "sql" },
              isRequired: true,
            },
            {
              name: "--bindings",
              description: "Optional bound parameters",
              args: { name: "bindings" },
            },
            {
              name: "--timeout-seconds",
              description: "Per-call execution timeout override",
              args: { name: "timeout-seconds" },
            },
          ],
        },
        {
          name: "create-failover",
          description:
            "Trigger a manual failover for a dedicated database with high availability enabled",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--target-replica-id",
              description: "Target replica ID to promote",
              args: { name: "target-replica-id" },
            },
          ],
        },
        {
          name: "update-maintenance",
          description: "Update the maintenance window for a dedicated database",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--day",
              description: "Day of the week for the maintenance window",
              args: {
                name: "day",
                suggestions: ["sun", "mon", "tue", "wed", "thu", "fri", "sat"],
              },
              isRequired: true,
            },
            {
              name: "--hour-utc",
              description: "Hour in UTC (0-23) for maintenance window start",
              args: { name: "hour-utc" },
              isRequired: true,
            },
          ],
        },
        {
          name: "create-migration",
          description: "Migrate a database between shared and dedicated types",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--target-type",
              description: "Target database type to migrate to",
              args: {
                name: "target-type",
                suggestions: ["shared", "dedicated"],
              },
              isRequired: true,
            },
            {
              name: "--specification",
              description:
                "Target specification to provision when migrating to dedicated",
              args: { name: "specification" },
            },
          ],
        },
        {
          name: "list-operations",
          description:
            "List the lifecycle operations recorded for a dedicated database, newest first",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--status",
              description: "Filter by operation status",
              args: { name: "status" },
            },
            {
              name: "--limit",
              description: "Maximum number of operations to return",
              args: { name: "limit" },
            },
            {
              name: "--offset",
              description: "Number of operations to skip",
              args: { name: "offset" },
            },
          ],
        },
        {
          name: "get-pitr",
          description:
            "Get available point-in-time recovery windows for a dedicated database",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "get-pooler",
          description:
            "Get the connection pooler configuration for a dedicated database",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "update-pooler",
          description:
            "Update the connection pooler configuration for a dedicated database",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--mode",
              description: "Connection pool mode",
              args: { name: "mode", suggestions: ["transaction", "session"] },
            },
            {
              name: "--max-connections",
              description: "Client-connection ceiling the pooler accepts",
              args: { name: "max-connections" },
            },
            {
              name: "--default-pool-size",
              description: "Default pool size per user",
              args: { name: "default-pool-size" },
            },
            {
              name: "--read-write-splitting",
              description:
                "Route SELECTs to HA replicas, writes and locked reads to the primary",
            },
            {
              name: "--pooler-cpu-request",
              description:
                'Pooler sidecar CPU request override (Kubernetes quantity, e.g. "250m" or "1")',
              args: { name: "pooler-cpu-request" },
            },
            {
              name: "--pooler-cpu-limit",
              description:
                'Pooler sidecar CPU limit override (Kubernetes quantity, e.g. "500m" or "1")',
              args: { name: "pooler-cpu-limit" },
            },
            {
              name: "--pooler-memory-request",
              description:
                'Pooler sidecar memory request override (Kubernetes quantity, e.g. "128Mi" or "1Gi")',
              args: { name: "pooler-memory-request" },
            },
            {
              name: "--pooler-memory-limit",
              description:
                'Pooler sidecar memory limit override (Kubernetes quantity, e.g. "256Mi" or "1Gi")',
              args: { name: "pooler-memory-limit" },
            },
          ],
        },
        {
          name: "get-replicas",
          description: "Get high availability status for a dedicated database",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "list-restorations",
          description: "List all restorations for a dedicated database",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--status",
              description: "Filter by restoration status",
              args: { name: "status" },
            },
            {
              name: "--type",
              description: "Filter by restoration type",
              args: { name: "type" },
            },
            {
              name: "--limit",
              description: "Maximum number of restorations to return",
              args: { name: "limit" },
            },
            {
              name: "--offset",
              description: "Number of restorations to skip",
              args: { name: "offset" },
            },
          ],
        },
        {
          name: "create-restoration",
          description:
            "Restore a database from a backup or to a specific point in time (PITR)",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--type",
              description: "Restoration type",
              args: { name: "type", suggestions: ["backup", "pitr"] },
            },
            {
              name: "--backup-id",
              description:
                "Backup ID to restore from (required for backup type)",
              args: { name: "backup-id" },
            },
            {
              name: "--target-database-id",
              description: "Existing database ID to restore into",
              args: { name: "target-database-id" },
            },
            {
              name: "--target-time",
              description:
                "Target time for PITR (required for pitr type) as an ISO 8601 (https://www.iso.org/iso-8601-date-and-time-format.html) datetime",
              args: { name: "target-time" },
            },
            {
              name: "--restore-mode",
              description: "Where the backup is restored",
              args: {
                name: "restore-mode",
                suggestions: ["in_place", "clone", "copy"],
              },
            },
            {
              name: "--target-name",
              description:
                "Display name for the database a copy restoration provisions",
              args: { name: "target-name" },
            },
            {
              name: "--auto-promote",
              description:
                "Whether a clone restoration switches the database over as soon as the recovery is ready",
            },
          ],
        },
        {
          name: "get-restoration",
          description:
            "Get details of a specific database restoration including its status, type, and timestamps",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--restoration-id",
              description: "Restoration ID",
              args: { name: "restoration-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "promote-restoration",
          description:
            "Switch the database over to the clone a restoration recovered",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--restoration-id",
              description: "Restoration ID",
              args: { name: "restoration-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "get-status",
          description:
            "Get real-time health and status information for a dedicated database",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "create-upgrade",
          description: "Upgrade a dedicated database to a new engine version",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--target-version",
              description: "Target engine version to upgrade to",
              args: { name: "target-version" },
              isRequired: true,
            },
          ],
        },
      ],
    },
    {
      name: "oauth2",
      description: "Authorize apps and issue OAuth2 and OIDC tokens",
      icon,
      subcommands: [
        {
          name: "authorize",
          description: "Begin the OAuth2 authorization flow",
          icon,
          options: [
            {
              name: "--client-id",
              description: "OAuth2 client ID",
              args: { name: "client-id" },
            },
            {
              name: "--redirect-uri",
              description:
                "Redirect URI where visitor will be redirected after authorization, whether successful or not",
              args: { name: "redirect-uri" },
            },
            {
              name: "--response-type",
              description: "OAuth2 / OIDC response type",
              args: {
                name: "response-type",
                suggestions: ["code", "id_token", "code id_token"],
              },
            },
            {
              name: "--scope",
              description: "Space-separated OAuth2 scopes",
              args: { name: "scope" },
            },
            {
              name: "--state",
              description: "OAuth2 state",
              args: { name: "state" },
            },
            {
              name: "--nonce",
              description: "OIDC nonce parameter to prevent replay attacks",
              args: { name: "nonce" },
            },
            {
              name: "--code-challenge",
              description: "PKCE code challenge",
              args: { name: "code-challenge" },
            },
            {
              name: "--code-challenge-method",
              description: "PKCE code challenge method",
              args: { name: "code-challenge-method" },
            },
            {
              name: "--prompt",
              description:
                "OIDC prompt parameter for customization of consent screen",
              args: { name: "prompt" },
            },
            {
              name: "--max-age",
              description:
                "OIDC max_age paraleter for customization of consent screen",
              args: { name: "max-age" },
            },
            {
              name: "--authorization-details",
              description: "Rich authorization request",
              args: { name: "authorization-details" },
            },
            {
              name: "--resource",
              description: "RFC 8707 resource indicator URI or URI list",
              args: { name: "resource" },
              isRepeatable: true,
            },
            {
              name: "--audience",
              description:
                "Compatibility alias for a single OAuth2 resource indicator URI",
              args: { name: "audience" },
            },
            {
              name: "--request-uri",
              description:
                "OAuth2 authorization request handle returned by the pushed authorization request endpoint",
              args: { name: "request-uri" },
            },
          ],
        },
        {
          name: "authorize-post",
          description: "Begin the OAuth2 authorization flow",
          icon,
          options: [
            {
              name: "--client-id",
              description: "OAuth2 client ID",
              args: { name: "client-id" },
            },
            {
              name: "--redirect-uri",
              description:
                "Redirect URI where visitor will be redirected after authorization, whether successful or not",
              args: { name: "redirect-uri" },
            },
            {
              name: "--response-type",
              description: "OAuth2 / OIDC response type",
              args: {
                name: "response-type",
                suggestions: ["code", "id_token", "code id_token"],
              },
            },
            {
              name: "--scope",
              description: "Space-separated OAuth2 scopes",
              args: { name: "scope" },
            },
            {
              name: "--state",
              description: "OAuth2 state",
              args: { name: "state" },
            },
            {
              name: "--nonce",
              description: "OIDC nonce parameter to prevent replay attacks",
              args: { name: "nonce" },
            },
            {
              name: "--code-challenge",
              description: "PKCE code challenge",
              args: { name: "code-challenge" },
            },
            {
              name: "--code-challenge-method",
              description: "PKCE code challenge method",
              args: { name: "code-challenge-method" },
            },
            {
              name: "--prompt",
              description:
                "OIDC prompt parameter for customization of consent screen",
              args: { name: "prompt" },
            },
            {
              name: "--max-age",
              description:
                "OIDC max_age paraleter for customization of consent screen",
              args: { name: "max-age" },
            },
            {
              name: "--authorization-details",
              description: "Rich authorization request",
              args: { name: "authorization-details" },
            },
            {
              name: "--resource",
              description: "RFC 8707 resource indicator URI or URI list",
              args: { name: "resource" },
              isRepeatable: true,
            },
            {
              name: "--audience",
              description:
                "Compatibility alias for a single OAuth2 resource indicator URI",
              args: { name: "audience" },
            },
            {
              name: "--request-uri",
              description:
                "OAuth2 authorization request handle returned by the pushed authorization request endpoint",
              args: { name: "request-uri" },
            },
          ],
        },
        {
          name: "create-device-authorization",
          description: "Start the OAuth2 Device Authorization Grant",
          icon,
          options: [
            {
              name: "--client-id",
              description: "OAuth2 client ID",
              args: { name: "client-id" },
            },
            {
              name: "--scope",
              description: "Space-separated OAuth2 scopes",
              args: { name: "scope" },
            },
            {
              name: "--authorization-details",
              description: "Rich authorization request",
              args: { name: "authorization-details" },
            },
            {
              name: "--resource",
              description: "RFC 8707 resource indicator URI or URI list",
              args: { name: "resource" },
              isRepeatable: true,
            },
            {
              name: "--audience",
              description:
                "Compatibility alias for a single OAuth2 resource indicator URI",
              args: { name: "audience" },
            },
          ],
        },
        {
          name: "create-grant",
          description: "Exchange a device flow user code for an OAuth2 grant",
          icon,
          options: [
            {
              name: "--user-code",
              description: "User code displayed on the device",
              args: { name: "user-code" },
              isRequired: true,
            },
          ],
        },
        {
          name: "get-grant",
          description: "Get an OAuth2 grant by its ID",
          icon,
          options: [
            {
              name: "--grant-id",
              description:
                "Grant ID made during authorization, provided to consent screen in URL search params",
              args: { name: "grant-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "introspect",
          description: "Introspect an OAuth2 access token or refresh token",
          icon,
          options: [
            {
              name: "--token",
              description: "The access token or refresh token to introspect",
              args: { name: "token" },
              isRequired: true,
            },
            {
              name: "--token-type-hint",
              description: "Type of token to introspect",
              args: {
                name: "token-type-hint",
                suggestions: ["access_token", "refresh_token"],
              },
            },
            {
              name: "--client-id",
              description: "OAuth2 client ID",
              args: { name: "client-id" },
            },
            {
              name: "--client-secret",
              description: "OAuth2 client secret",
              args: { name: "client-secret" },
            },
          ],
        },
        {
          name: "list-organizations",
          description: "List the organizations the current session can access",
          icon,
          hidden: true,
          options: [
            {
              name: "--limit",
              description: "Maximum number of organizations to return",
              args: { name: "limit" },
            },
            {
              name: "--offset",
              description:
                "Number of organizations to skip before returning results",
              args: { name: "offset" },
            },
            {
              name: "--search",
              description: "Search term to filter your list results",
              args: { name: "search" },
            },
          ],
        },
        {
          name: "create-par",
          description:
            "Store an OAuth2 authorization request server-side and receive a short-lived request_uri handle for the authorize endpoint",
          icon,
          options: [
            {
              name: "--client-id",
              description: "OAuth2 client ID",
              args: { name: "client-id" },
              isRequired: true,
            },
            {
              name: "--redirect-uri",
              description:
                "Redirect URI where visitor will be redirected after authorization, whether successful or not",
              args: { name: "redirect-uri" },
              isRequired: true,
            },
            {
              name: "--response-type",
              description: "OAuth2 / OIDC response type",
              args: { name: "response-type" },
              isRequired: true,
            },
            {
              name: "--scope",
              description: "Space-separated OAuth2 scopes",
              args: { name: "scope" },
            },
            {
              name: "--state",
              description: "OAuth2 state",
              args: { name: "state" },
            },
            {
              name: "--nonce",
              description: "OIDC nonce parameter to prevent replay attacks",
              args: { name: "nonce" },
            },
            {
              name: "--code-challenge",
              description: "PKCE code challenge",
              args: { name: "code-challenge" },
            },
            {
              name: "--code-challenge-method",
              description: "PKCE code challenge method",
              args: { name: "code-challenge-method" },
            },
            {
              name: "--prompt",
              description:
                "OIDC prompt parameter for customization of consent screen",
              args: { name: "prompt" },
            },
            {
              name: "--max-age",
              description:
                "OIDC max_age parameter for customization of consent screen",
              args: { name: "max-age" },
            },
            {
              name: "--authorization-details",
              description: "Rich authorization request",
              args: { name: "authorization-details" },
            },
            {
              name: "--resource",
              description: "RFC 8707 resource indicator URI or URI list",
              args: { name: "resource" },
              isRepeatable: true,
            },
            {
              name: "--audience",
              description:
                "Compatibility alias for a single OAuth2 resource indicator URI",
              args: { name: "audience" },
            },
          ],
        },
        {
          name: "list-projects",
          description: "List the projects the current session can access",
          icon,
          hidden: true,
          options: [
            {
              name: "--limit",
              description: "Maximum number of projects to return",
              args: { name: "limit" },
            },
            {
              name: "--offset",
              description:
                "Number of projects to skip before returning results",
              args: { name: "offset" },
            },
            {
              name: "--search",
              description: "Search term to filter your list results",
              args: { name: "search" },
            },
            {
              name: "--organization-id",
              description: "Only show projects in this organization",
              args: { name: "organization-id" },
            },
          ],
        },
        {
          name: "reject",
          description: "Reject an OAuth2 grant when the user denies consent",
          icon,
          options: [
            {
              name: "--grant-id",
              description:
                "Grant ID made during authorization, provided to consent screen in URL search params",
              args: { name: "grant-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "revoke",
          description: "Revoke an OAuth2 access token or refresh token",
          icon,
          options: [
            {
              name: "--token",
              description: "The access or refresh token to revoke",
              args: { name: "token" },
              isRequired: true,
            },
            {
              name: "--token-type-hint",
              description:
                "Type of token to revoke (access_token or refresh_token)",
              args: { name: "token-type-hint" },
            },
            {
              name: "--client-id",
              description: "OAuth2 client ID",
              args: { name: "client-id" },
            },
            {
              name: "--client-secret",
              description: "OAuth2 client secret",
              args: { name: "client-secret" },
            },
          ],
        },
        {
          name: "create-token",
          description:
            "Exchange an OAuth2 authorization code, refresh token, or device code for access and refresh tokens",
          icon,
          options: [
            {
              name: "--grant-type",
              description: "OAuth2 grant type",
              args: {
                name: "grant-type",
                suggestions: [
                  "authorization_code",
                  "refresh_token",
                  "urn:ietf:params:oauth:grant-type:device_code",
                ],
              },
              isRequired: true,
            },
            {
              name: "--code",
              description:
                "Authorization code to be exchanged for access and refresh tokens",
              args: { name: "code" },
            },
            {
              name: "--refresh-token",
              description:
                "Refresh token to be exchanged for a new access and refresh tokens",
              args: { name: "refresh-token" },
            },
            {
              name: "--device-code",
              description:
                "Device code obtained from the device authorization endpoint",
              args: { name: "device-code" },
            },
            {
              name: "--client-id",
              description: "OAuth2 client ID",
              args: { name: "client-id" },
            },
            {
              name: "--client-secret",
              description: "OAuth2 client secret",
              args: { name: "client-secret" },
            },
            {
              name: "--code-verifier",
              description: "PKCE code verifier",
              args: { name: "code-verifier" },
            },
            {
              name: "--redirect-uri",
              description: "Redirect URI",
              args: { name: "redirect-uri" },
            },
            {
              name: "--resource",
              description: "RFC 8707 resource indicator URI or URI list",
              args: { name: "resource" },
              isRepeatable: true,
            },
            {
              name: "--audience",
              description:
                "Compatibility alias for a single OAuth2 resource indicator URI",
              args: { name: "audience" },
            },
          ],
        },
      ],
    },
    {
      name: "organization",
      description: "Manage organization-level projects",
      icon,
      subcommands: [
        {
          name: "get",
          description: "Get the current organization",
          icon,
          options: [
            {
              name: "--organization-id",
              description: "Organization to act on",
              args: { name: "organization-id" },
            },
          ],
        },
        {
          name: "update",
          description: "Update the current organization's name",
          icon,
          options: [
            {
              name: "--name",
              description: "New organization name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--organization-id",
              description: "Organization to act on",
              args: { name: "organization-id" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete the current organization",
          icon,
          options: [
            {
              name: "--organization-id",
              description: "Organization to act on",
              args: { name: "organization-id" },
            },
          ],
        },
        {
          name: "list-installations",
          description: "List app installations on the organization",
          icon,
          options: [
            {
              name: "--queries",
              description:
                "Array of query strings generated using the Query class provided by the SDK",
              args: { name: "queries" },
              isRepeatable: true,
            },
            {
              name: "--total",
              description:
                "When set to false, the total count returned will be 0 and will not be calculated",
            },
            ...listOptions,
            {
              name: "--organization-id",
              description: "Organization to act on",
              args: { name: "organization-id" },
            },
          ],
        },
        {
          name: "create-installation",
          description: "Install an app on the organization",
          icon,
          options: [
            {
              name: "--app-id",
              description: "Application unique ID",
              args: { name: "app-id" },
              isRequired: true,
            },
            {
              name: "--authorization-details",
              description:
                "Authorization details granted to the installation as a JSON array of objects, each with a `type` and app-defined fields",
              args: { name: "authorization-details" },
            },
            {
              name: "--organization-id",
              description: "Organization to act on",
              args: { name: "organization-id" },
            },
          ],
        },
        {
          name: "get-installation",
          description:
            "Get an app installation on the organization by its unique ID",
          icon,
          options: [
            {
              name: "--installation-id",
              description: "Installation unique ID",
              args: { name: "installation-id" },
              isRequired: true,
            },
            {
              name: "--organization-id",
              description: "Organization to act on",
              args: { name: "organization-id" },
            },
          ],
        },
        {
          name: "update-installation",
          description: "Update an app installation on the organization",
          icon,
          options: [
            {
              name: "--installation-id",
              description: "Installation unique ID",
              args: { name: "installation-id" },
              isRequired: true,
            },
            {
              name: "--authorization-details",
              description:
                "Authorization details granted to the installation as a JSON array of objects, each with a `type` and app-defined fields",
              args: { name: "authorization-details" },
            },
            {
              name: "--organization-id",
              description: "Organization to act on",
              args: { name: "organization-id" },
            },
          ],
        },
        {
          name: "delete-installation",
          description:
            "Uninstall an app from the organization by its installation ID",
          icon,
          options: [
            {
              name: "--installation-id",
              description: "Installation unique ID",
              args: { name: "installation-id" },
              isRequired: true,
            },
            {
              name: "--organization-id",
              description: "Organization to act on",
              args: { name: "organization-id" },
            },
          ],
        },
        {
          name: "list-memberships",
          description:
            "Get a list of all memberships from the current organization",
          icon,
          options: [
            {
              name: "--queries",
              description:
                "Array of query strings generated using the Query class provided by the SDK",
              args: { name: "queries" },
              isRepeatable: true,
            },
            {
              name: "--search",
              description: "Search term to filter your list results",
              args: { name: "search" },
            },
            {
              name: "--total",
              description:
                "When set to false, the total count returned will be 0 and will not be calculated",
            },
            ...listOptions,
            {
              name: "--organization-id",
              description: "Organization to act on",
              args: { name: "organization-id" },
            },
          ],
        },
        {
          name: "create-membership",
          description: "Invite a new member to join the current organization",
          icon,
          options: [
            {
              name: "--roles",
              description: "Array of strings",
              args: { name: "roles" },
              isRepeatable: true,
              isRequired: true,
            },
            {
              name: "--email",
              description: "Email of the new organization member",
              args: { name: "email" },
            },
            {
              name: "--user-id",
              description: "ID of the user to be added to the organization",
              args: { name: "user-id" },
            },
            {
              name: "--phone",
              description: "Phone number",
              args: { name: "phone" },
            },
            {
              name: "--url",
              description:
                "URL to redirect the user back to your app from the invitation email",
              args: { name: "url" },
            },
            {
              name: "--name",
              description: "Name of the new organization member",
              args: { name: "name" },
            },
            {
              name: "--organization-id",
              description: "Organization to act on",
              args: { name: "organization-id" },
            },
          ],
        },
        {
          name: "get-membership",
          description:
            "Get a membership from the current organization by its unique ID",
          icon,
          options: [
            {
              name: "--membership-id",
              description: "Membership ID",
              args: { name: "membership-id" },
              isRequired: true,
            },
            {
              name: "--organization-id",
              description: "Organization to act on",
              args: { name: "organization-id" },
            },
          ],
        },
        {
          name: "update-membership",
          description:
            "Modify the roles of a member in the current organization",
          icon,
          options: [
            {
              name: "--membership-id",
              description: "Membership ID",
              args: { name: "membership-id" },
              isRequired: true,
            },
            {
              name: "--roles",
              description: "An array of strings",
              args: { name: "roles" },
              isRepeatable: true,
              isRequired: true,
            },
            {
              name: "--organization-id",
              description: "Organization to act on",
              args: { name: "organization-id" },
            },
          ],
        },
        {
          name: "delete-membership",
          description: "Remove a member from the current organization",
          icon,
          options: [
            {
              name: "--membership-id",
              description: "Membership ID",
              args: { name: "membership-id" },
              isRequired: true,
            },
            {
              name: "--organization-id",
              description: "Organization to act on",
              args: { name: "organization-id" },
            },
          ],
        },
        {
          name: "list-projects",
          description: "Get a list of all projects",
          icon,
          options: [
            {
              name: "--queries",
              description:
                "Array of query strings generated using the Query class provided by the SDK",
              args: { name: "queries" },
              isRepeatable: true,
            },
            {
              name: "--search",
              description: "Search term to filter your list results",
              args: { name: "search" },
            },
            {
              name: "--total",
              description:
                "When set to false, the total count returned will be 0 and will not be calculated",
            },
            ...listOptions,
            {
              name: "--organization-id",
              description: "Organization to act on",
              args: { name: "organization-id" },
            },
          ],
        },
        {
          name: "create-project",
          description: "Create a new project",
          icon,
          options: [
            {
              name: "--project-id",
              description: "Unique Id",
              args: { name: "project-id" },
              isRequired: true,
            },
            {
              name: "--name",
              description: "Project name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--region",
              description: "Project Region",
              args: { name: "region" },
            },
            {
              name: "--organization-id",
              description: "Organization to act on",
              args: { name: "organization-id" },
            },
          ],
        },
        {
          name: "get-project",
          description: "Get a project",
          icon,
          options: [
            {
              name: "--project-id",
              description: "Project unique ID",
              args: { name: "project-id" },
              isRequired: true,
            },
            {
              name: "--organization-id",
              description: "Organization to act on",
              args: { name: "organization-id" },
            },
          ],
        },
        {
          name: "update-project",
          description: "Update a project by its unique ID",
          icon,
          options: [
            {
              name: "--project-id",
              description: "Project unique ID",
              args: { name: "project-id" },
              isRequired: true,
            },
            {
              name: "--name",
              description: "Project name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--organization-id",
              description: "Organization to act on",
              args: { name: "organization-id" },
            },
          ],
        },
        {
          name: "delete-project",
          description: "Delete a project by its unique ID",
          icon,
          options: [
            {
              name: "--project-id",
              description: "Project unique ID",
              args: { name: "project-id" },
              isRequired: true,
            },
            {
              name: "--organization-id",
              description: "Organization to act on",
              args: { name: "organization-id" },
            },
          ],
        },
        {
          name: "list-project-keys",
          description:
            "Get a list of all API keys of a project in your organization",
          icon,
          options: [
            {
              name: "--project-id",
              description: "Project unique ID",
              args: { name: "project-id" },
              isRequired: true,
            },
            {
              name: "--queries",
              description:
                "Array of query strings generated using the Query class provided by the SDK",
              args: { name: "queries" },
              isRepeatable: true,
            },
            {
              name: "--total",
              description:
                "When set to false, the total count returned will be 0 and will not be calculated",
            },
            ...listOptions,
            {
              name: "--organization-id",
              description: "Organization to act on",
              args: { name: "organization-id" },
            },
          ],
        },
        {
          name: "create-ephemeral-project-key",
          description:
            "Create a new ephemeral API key for a project in your organization",
          icon,
          options: [
            {
              name: "--project-id",
              description: "Project unique ID",
              args: { name: "project-id" },
              isRequired: true,
            },
            {
              name: "--scopes",
              description: "Key scopes list",
              args: { name: "scopes" },
              isRepeatable: true,
              isRequired: true,
            },
            {
              name: "--duration",
              description: "Time in seconds before ephemeral key expires",
              args: { name: "duration" },
              isRequired: true,
            },
            {
              name: "--organization-id",
              description: "Organization to act on",
              args: { name: "organization-id" },
            },
          ],
        },
        {
          name: "get-project-key",
          description: "Get a project key by its unique ID",
          icon,
          options: [
            {
              name: "--project-id",
              description: "Project unique ID",
              args: { name: "project-id" },
              isRequired: true,
            },
            {
              name: "--key-id",
              description: "Key ID",
              args: { name: "key-id" },
              isRequired: true,
            },
            {
              name: "--organization-id",
              description: "Organization to act on",
              args: { name: "organization-id" },
            },
          ],
        },
        {
          name: "update-project-key",
          description: "Update a project key by its unique ID",
          icon,
          options: [
            {
              name: "--project-id",
              description: "Project unique ID",
              args: { name: "project-id" },
              isRequired: true,
            },
            {
              name: "--key-id",
              description: "Key ID",
              args: { name: "key-id" },
              isRequired: true,
            },
            {
              name: "--name",
              description: "Key name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--scopes",
              description: "Key scopes list",
              args: { name: "scopes" },
              isRepeatable: true,
              isRequired: true,
            },
            {
              name: "--expire",
              description:
                "Expiration time in ISO 8601 (https://www.iso.org/iso-8601-date-and-time-format.html) format",
              args: { name: "expire" },
            },
            {
              name: "--description",
              description: "Optional description for the key",
              args: { name: "description" },
            },
            {
              name: "--organization-id",
              description: "Organization to act on",
              args: { name: "organization-id" },
            },
          ],
        },
        {
          name: "delete-project-key",
          description: "Delete a project key by its unique ID",
          icon,
          options: [
            {
              name: "--project-id",
              description: "Project unique ID",
              args: { name: "project-id" },
              isRequired: true,
            },
            {
              name: "--key-id",
              description: "Key ID",
              args: { name: "key-id" },
              isRequired: true,
            },
            {
              name: "--organization-id",
              description: "Organization to act on",
              args: { name: "organization-id" },
            },
          ],
        },
      ],
    },
    {
      name: "postgresql",
      description: "Dedicated PostgreSQL databases",
      icon,
      subcommands: [
        {
          name: "list",
          description: "List all dedicated databases",
          icon,
          options: [
            {
              name: "--queries",
              description: "Array of query strings",
              args: { name: "queries" },
              isRepeatable: true,
            },
            {
              name: "--total",
              description:
                "When set to false, the total count returned will be 0 and will not be calculated",
            },
            ...listOptions,
          ],
        },
        {
          name: "create",
          description:
            "Create a new dedicated database with the chosen engine and configuration",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--name",
              description: "Database display name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--version",
              description: "Database engine version",
              args: { name: "version" },
            },
            {
              name: "--specification",
              description: "Specification identifier",
              args: { name: "specification" },
            },
            {
              name: "--replicas",
              description: "Number of high availability replicas (0-5)",
              args: { name: "replicas" },
            },
            {
              name: "--sync-mode",
              description: "Replication sync mode preference",
              args: {
                name: "sync-mode",
                suggestions: ["async", "sync", "quorum"],
              },
            },
            {
              name: "--network-idle-timeout-seconds",
              description: "Connection idle timeout in seconds",
              args: { name: "network-idle-timeout-seconds" },
            },
            {
              name: "--network-ip-allowlist",
              description: "IP addresses/CIDR ranges allowed to connect",
              args: { name: "network-ip-allowlist" },
              isRepeatable: true,
            },
            {
              name: "--idle-timeout-minutes",
              description:
                "Minutes of inactivity before container scales to zero",
              args: { name: "idle-timeout-minutes" },
            },
            {
              name: "--pitr",
              description: "Enable point-in-time recovery (PITR)",
            },
            {
              name: "--pitr-retention-days",
              description: "Number of days to retain PITR data",
              args: { name: "pitr-retention-days" },
            },
            {
              name: "--storage-autoscaling",
              description:
                "Enable automatic storage expansion when usage exceeds threshold",
            },
            {
              name: "--storage-autoscaling-threshold-percent",
              description:
                "Storage usage percentage (50-95) that triggers automatic expansion",
              args: { name: "storage-autoscaling-threshold-percent" },
            },
            {
              name: "--storage-autoscaling-max-gb",
              description: "Maximum storage size in GB for autoscaling",
              args: { name: "storage-autoscaling-max-gb" },
            },
          ],
        },
        {
          name: "list-specifications",
          description:
            "List the dedicated database specifications available on the current plan",
          icon,
        },
        {
          name: "get",
          description: "Get a dedicated database by its unique ID",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "update",
          description: "Update a dedicated database configuration",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--name",
              description: "Database display name",
              args: { name: "name" },
            },
            {
              name: "--status",
              description: "Database status",
              args: {
                name: "status",
                suggestions: ["ready", "paused", "inactive"],
              },
            },
            {
              name: "--specification",
              description: "Specification",
              args: { name: "specification" },
            },
            {
              name: "--replicas",
              description: "Number of high availability replicas (0-5)",
              args: { name: "replicas" },
            },
            {
              name: "--sync-mode",
              description: "Replication sync mode preference",
              args: {
                name: "sync-mode",
                suggestions: ["async", "sync", "quorum"],
              },
            },
            {
              name: "--network-idle-timeout-seconds",
              description: "Connection idle timeout in seconds (60-86400)",
              args: { name: "network-idle-timeout-seconds" },
            },
            {
              name: "--network-ip-allowlist",
              description: "IP addresses/CIDR ranges allowed to connect",
              args: { name: "network-ip-allowlist" },
              isRepeatable: true,
            },
            {
              name: "--idle-timeout-minutes",
              description: "Minutes before container scales to zero",
              args: { name: "idle-timeout-minutes" },
            },
            {
              name: "--pitr",
              description: "Enable or disable point-in-time recovery (PITR)",
            },
            {
              name: "--pitr-retention-days",
              description: "Days to retain PITR data",
              args: { name: "pitr-retention-days" },
            },
            {
              name: "--storage-autoscaling",
              description:
                "Enable automatic storage expansion when usage exceeds threshold",
            },
            {
              name: "--storage-autoscaling-threshold-percent",
              description:
                "Storage usage percentage (50-95) that triggers automatic expansion",
              args: { name: "storage-autoscaling-threshold-percent" },
            },
            {
              name: "--storage-autoscaling-max-gb",
              description: "Maximum storage size in GB for autoscaling",
              args: { name: "storage-autoscaling-max-gb" },
            },
            {
              name: "--metrics-trace-sample-rate",
              description: "Fraction of queries to trace (0.0–1.0)",
              args: { name: "metrics-trace-sample-rate" },
            },
            {
              name: "--metrics-slow-query-log-threshold-ms",
              description:
                "Threshold in ms above which queries are logged as slow",
              args: { name: "metrics-slow-query-log-threshold-ms" },
            },
            {
              name: "--sql-api-enabled",
              description: "Enable the SQL API sidecar for this database",
            },
            {
              name: "--sql-api-allowed-statements",
              description: "Statement types the SQL API accepts",
              args: {
                name: "sql-api-allowed-statements",
                suggestions: [
                  "SELECT",
                  "INSERT",
                  "UPDATE",
                  "DELETE",
                  "CREATE",
                  "ALTER",
                  "DROP",
                  "TRUNCATE",
                  "GRANT",
                  "REVOKE",
                ],
              },
              isRepeatable: true,
            },
            {
              name: "--sql-api-max-rows",
              description:
                "Maximum rows returned per SQL API execution (1-1000000)",
              args: { name: "sql-api-max-rows" },
            },
            {
              name: "--sql-api-max-bytes",
              description:
                "Maximum serialised SQL API result payload in bytes (1024-104857600)",
              args: { name: "sql-api-max-bytes" },
            },
            {
              name: "--sql-api-timeout-seconds",
              description:
                "Per-call SQL API execution timeout in seconds (1-300)",
              args: { name: "sql-api-timeout-seconds" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a dedicated database",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "list-backups",
          description: "List all backups for a dedicated database",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--queries",
              description:
                "Array of query strings generated using the Query class provided by the SDK",
              args: { name: "queries" },
              isRepeatable: true,
            },
            {
              name: "--total",
              description:
                "When set to false, the total count returned will be 0 and will not be calculated",
            },
            ...listOptions,
          ],
        },
        {
          name: "create-backup",
          description: "Create a manual backup of a dedicated database",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--type",
              description: "Backup type: full or incremental",
              args: { name: "type" },
            },
          ],
        },
        {
          name: "list-backup-policies",
          description:
            "List scheduled backup policies for a dedicated database",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--queries",
              description:
                "Array of query strings generated using the Query class provided by the SDK",
              args: { name: "queries" },
              isRepeatable: true,
            },
            {
              name: "--total",
              description:
                "When set to false, the total count returned will be 0 and will not be calculated",
            },
            ...listOptions,
          ],
        },
        {
          name: "create-backup-policy",
          description:
            "Create a scheduled backup policy for a dedicated database",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--policy-id",
              description: "Policy ID",
              args: { name: "policy-id" },
              isRequired: true,
            },
            {
              name: "--name",
              description: "Policy name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--schedule",
              description: "Schedule CRON syntax",
              args: { name: "schedule" },
              isRequired: true,
            },
            {
              name: "--retention",
              description: "Days to keep backups before deletion",
              args: { name: "retention" },
              isRequired: true,
            },
            {
              name: "--type",
              description: "Backup type: full or incremental",
              args: { name: "type" },
            },
            {
              name: "--enabled",
              description:
                "Is policy enabled? When disabled, no backups will be taken",
            },
          ],
        },
        {
          name: "get-backup-policy",
          description: "Get a scheduled backup policy for a dedicated database",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--policy-id",
              description: "Policy ID",
              args: { name: "policy-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "update-backup-policy",
          description:
            "Update a scheduled backup policy for a dedicated database",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--policy-id",
              description: "Policy ID",
              args: { name: "policy-id" },
              isRequired: true,
            },
            {
              name: "--name",
              description: "Policy name",
              args: { name: "name" },
            },
            {
              name: "--schedule",
              description: "Schedule CRON syntax",
              args: { name: "schedule" },
            },
            {
              name: "--retention",
              description: "Days to keep backups before deletion",
              args: { name: "retention" },
            },
            {
              name: "--enabled",
              description:
                "Is policy enabled? When disabled, no backups will be taken",
            },
          ],
        },
        {
          name: "delete-backup-policy",
          description:
            "Delete a scheduled backup policy for a dedicated database",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--policy-id",
              description: "Policy ID",
              args: { name: "policy-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "update-backup-storage",
          description:
            "Configure off-cluster backup storage for a dedicated database",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--provider",
              description: "Storage provider for off-cluster backups",
              args: { name: "provider", suggestions: ["s3", "gcs", "azure"] },
              isRequired: true,
            },
            {
              name: "--bucket",
              description: "Storage bucket or container name",
              args: { name: "bucket" },
              isRequired: true,
            },
            {
              name: "--access-key",
              description: "Access key or client ID for authentication",
              args: { name: "access-key" },
              isRequired: true,
            },
            {
              name: "--secret-key",
              description:
                "Secret key or service account JSON for authentication",
              args: { name: "secret-key" },
              isRequired: true,
            },
            {
              name: "--region",
              description: "Storage region",
              args: { name: "region" },
            },
            {
              name: "--prefix",
              description: "Object key prefix for backups",
              args: { name: "prefix" },
            },
            {
              name: "--endpoint",
              description:
                "Custom endpoint for S3-compatible storage (e.g. MinIO)",
              args: { name: "endpoint" },
            },
          ],
        },
        {
          name: "get-backup",
          description:
            "Get details of a specific database backup including its status, size, and timestamps",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--backup-id",
              description: "Backup ID",
              args: { name: "backup-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "delete-backup",
          description: "Delete a database backup",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--backup-id",
              description: "Backup ID",
              args: { name: "backup-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "list-branches",
          description: "List all ephemeral branches for a dedicated database",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "create-branch",
          description:
            "Create an ephemeral database branch from the primary via PVC snapshot",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--branch-id",
              description: "Branch ID",
              args: { name: "branch-id" },
            },
            {
              name: "--ttl",
              description: "Time-to-live in seconds before the branch expires",
              args: { name: "ttl" },
            },
          ],
        },
        {
          name: "delete-branch",
          description: "Delete an ephemeral database branch",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--branch-id",
              description: "Branch ID",
              args: { name: "branch-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "update-credentials",
          description:
            "Queue a rotation of the primary connection credentials for a dedicated database",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "create-execution",
          description: "Execute SQL through the console-facing Cloud endpoint",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--sql",
              description: "SQL statement to execute",
              args: { name: "sql" },
              isRequired: true,
            },
            {
              name: "--bindings",
              description: "Optional bound parameters",
              args: { name: "bindings" },
            },
            {
              name: "--timeout-seconds",
              description: "Per-call execution timeout override",
              args: { name: "timeout-seconds" },
            },
          ],
        },
        {
          name: "list-extensions",
          description:
            "List installed and available extensions for a PostgreSQL database",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "create-extension",
          description: "Install a database extension",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--name",
              description:
                "Extension name (e.g., pgvector, postgis, uuid-ossp)",
              args: { name: "name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "delete-extension",
          description:
            "Uninstall a database extension from a PostgreSQL database",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--extension-name",
              description: "Extension name to uninstall",
              args: { name: "extension-name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "create-failover",
          description:
            "Trigger a manual failover for a dedicated database with high availability enabled",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--target-replica-id",
              description: "Target replica ID to promote",
              args: { name: "target-replica-id" },
            },
          ],
        },
        {
          name: "update-maintenance",
          description: "Update the maintenance window for a dedicated database",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--day",
              description: "Day of the week for the maintenance window",
              args: {
                name: "day",
                suggestions: ["sun", "mon", "tue", "wed", "thu", "fri", "sat"],
              },
              isRequired: true,
            },
            {
              name: "--hour-utc",
              description: "Hour in UTC (0-23) for maintenance window start",
              args: { name: "hour-utc" },
              isRequired: true,
            },
          ],
        },
        {
          name: "create-migration",
          description: "Migrate a database between shared and dedicated types",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--target-type",
              description: "Target database type to migrate to",
              args: {
                name: "target-type",
                suggestions: ["shared", "dedicated"],
              },
              isRequired: true,
            },
            {
              name: "--specification",
              description:
                "Target specification to provision when migrating to dedicated",
              args: { name: "specification" },
            },
          ],
        },
        {
          name: "list-operations",
          description:
            "List the lifecycle operations recorded for a dedicated database, newest first",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--status",
              description: "Filter by operation status",
              args: { name: "status" },
            },
            {
              name: "--limit",
              description: "Maximum number of operations to return",
              args: { name: "limit" },
            },
            {
              name: "--offset",
              description: "Number of operations to skip",
              args: { name: "offset" },
            },
          ],
        },
        {
          name: "get-pitr",
          description:
            "Get available point-in-time recovery windows for a dedicated database",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "get-pooler",
          description:
            "Get the connection pooler configuration for a dedicated database",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "update-pooler",
          description:
            "Update the connection pooler configuration for a dedicated database",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--mode",
              description: "Connection pool mode",
              args: { name: "mode", suggestions: ["transaction", "session"] },
            },
            {
              name: "--max-connections",
              description: "Client-connection ceiling the pooler accepts",
              args: { name: "max-connections" },
            },
            {
              name: "--default-pool-size",
              description: "Default pool size per user",
              args: { name: "default-pool-size" },
            },
            {
              name: "--read-write-splitting",
              description:
                "Route SELECTs to HA replicas, writes and locked reads to the primary",
            },
            {
              name: "--pooler-cpu-request",
              description:
                'Pooler sidecar CPU request override (Kubernetes quantity, e.g. "250m" or "1")',
              args: { name: "pooler-cpu-request" },
            },
            {
              name: "--pooler-cpu-limit",
              description:
                'Pooler sidecar CPU limit override (Kubernetes quantity, e.g. "500m" or "1")',
              args: { name: "pooler-cpu-limit" },
            },
            {
              name: "--pooler-memory-request",
              description:
                'Pooler sidecar memory request override (Kubernetes quantity, e.g. "128Mi" or "1Gi")',
              args: { name: "pooler-memory-request" },
            },
            {
              name: "--pooler-memory-limit",
              description:
                'Pooler sidecar memory limit override (Kubernetes quantity, e.g. "256Mi" or "1Gi")',
              args: { name: "pooler-memory-limit" },
            },
          ],
        },
        {
          name: "get-replicas",
          description: "Get high availability status for a dedicated database",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "list-restorations",
          description: "List all restorations for a dedicated database",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--status",
              description: "Filter by restoration status",
              args: { name: "status" },
            },
            {
              name: "--type",
              description: "Filter by restoration type",
              args: { name: "type" },
            },
            {
              name: "--limit",
              description: "Maximum number of restorations to return",
              args: { name: "limit" },
            },
            {
              name: "--offset",
              description: "Number of restorations to skip",
              args: { name: "offset" },
            },
          ],
        },
        {
          name: "create-restoration",
          description:
            "Restore a database from a backup or to a specific point in time (PITR)",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--type",
              description: "Restoration type",
              args: { name: "type", suggestions: ["backup", "pitr"] },
            },
            {
              name: "--backup-id",
              description:
                "Backup ID to restore from (required for backup type)",
              args: { name: "backup-id" },
            },
            {
              name: "--target-database-id",
              description: "Existing database ID to restore into",
              args: { name: "target-database-id" },
            },
            {
              name: "--target-time",
              description:
                "Target time for PITR (required for pitr type) as an ISO 8601 (https://www.iso.org/iso-8601-date-and-time-format.html) datetime",
              args: { name: "target-time" },
            },
            {
              name: "--restore-mode",
              description: "Where the backup is restored",
              args: {
                name: "restore-mode",
                suggestions: ["in_place", "clone", "copy"],
              },
            },
            {
              name: "--target-name",
              description:
                "Display name for the database a copy restoration provisions",
              args: { name: "target-name" },
            },
            {
              name: "--auto-promote",
              description:
                "Whether a clone restoration switches the database over as soon as the recovery is ready",
            },
          ],
        },
        {
          name: "get-restoration",
          description:
            "Get details of a specific database restoration including its status, type, and timestamps",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--restoration-id",
              description: "Restoration ID",
              args: { name: "restoration-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "promote-restoration",
          description:
            "Switch the database over to the clone a restoration recovered",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--restoration-id",
              description: "Restoration ID",
              args: { name: "restoration-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "get-status",
          description:
            "Get real-time health and status information for a dedicated database",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "create-upgrade",
          description: "Upgrade a dedicated database to a new engine version",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--target-version",
              description: "Target engine version to upgrade to",
              args: { name: "target-version" },
              isRequired: true,
            },
          ],
        },
      ],
    },
    {
      name: "presences",
      description: "Real-time user presence tracking",
      icon,
      subcommands: [
        {
          name: "list",
          description: "List presence logs",
          icon,
          options: [
            {
              name: "--queries",
              description:
                "Array of query strings generated using the Query class provided by the SDK",
              args: { name: "queries" },
              isRepeatable: true,
            },
            {
              name: "--total",
              description:
                "When set to false, the total count returned will be 0 and will not be calculated",
            },
            {
              name: "--ttl",
              description: "TTL (seconds) for caching list responses",
              args: { name: "ttl" },
            },
            ...listOptions,
          ],
        },
        {
          name: "get",
          description: "Get a presence log by its unique ID",
          icon,
          options: [
            {
              name: "--presence-id",
              description: "Presence unique ID",
              args: { name: "presence-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "upsert",
          description: "Create or update a presence log by its user ID",
          icon,
          options: [
            {
              name: "--presence-id",
              description: "Presence unique ID",
              args: { name: "presence-id" },
              isRequired: true,
            },
            {
              name: "--user-id",
              description: "User ID",
              args: { name: "user-id" },
              isRequired: true,
            },
            {
              name: "--status",
              description: "Presence status",
              args: { name: "status" },
              isRequired: true,
            },
            {
              name: "--permissions",
              description: "An array of permissions strings",
              args: { name: "permissions" },
              isRepeatable: true,
            },
            {
              name: "--expires-at",
              description: "Presence expiry datetime",
              args: { name: "expires-at" },
            },
            {
              name: "--metadata",
              description: "Presence metadata object",
              args: { name: "metadata" },
            },
          ],
        },
        {
          name: "update",
          description: "Update a presence log by its unique ID",
          icon,
          options: [
            {
              name: "--presence-id",
              description: "Presence unique ID",
              args: { name: "presence-id" },
              isRequired: true,
            },
            {
              name: "--user-id",
              description: "User ID",
              args: { name: "user-id" },
              isRequired: true,
            },
            {
              name: "--status",
              description: "Presence status",
              args: { name: "status" },
            },
            {
              name: "--expires-at",
              description: "Presence expiry datetime",
              args: { name: "expires-at" },
            },
            {
              name: "--metadata",
              description: "Presence metadata object",
              args: { name: "metadata" },
            },
            {
              name: "--permissions",
              description: "An array of permissions strings",
              args: { name: "permissions" },
              isRepeatable: true,
            },
            {
              name: "--purge",
              description:
                "When true, purge cached responses used by list presences endpoint",
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a presence log by its unique ID",
          icon,
          options: [
            {
              name: "--presence-id",
              description: "Presence unique ID",
              args: { name: "presence-id" },
              isRequired: true,
            },
          ],
        },
      ],
    },
    {
      name: "project",
      description: "Usage, variables, and project-level settings",
      icon,
      subcommands: [
        {
          name: "get",
          description: "Get a project",
          icon,
          options: [
            {
              name: "--project-id",
              description: "Project to act on",
              args: { name: "project-id" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a project",
          icon,
          options: [
            {
              name: "--project-id",
              description: "Project to act on",
              args: { name: "project-id" },
            },
          ],
        },
        {
          name: "update-auth-method",
          description: "Update properties of a specific auth method",
          icon,
          options: [
            {
              name: "--method-id",
              description: "Auth Method ID",
              args: {
                name: "method-id",
                suggestions: [
                  "email-password",
                  "magic-url",
                  "email-otp",
                  "anonymous",
                  "invites",
                  "jwt",
                  "phone",
                  "passkey",
                  "ldap",
                ],
              },
              isRequired: true,
            },
            {
              name: "--enabled",
              description: "Auth method status",
              isRequired: true,
            },
            {
              name: "--project-id",
              description: "Project to act on",
              args: { name: "project-id" },
            },
          ],
        },
        {
          name: "list-environments",
          description: "Get a list of all environments of the project",
          icon,
          options: [
            {
              name: "--queries",
              description:
                "Array of query strings generated using the Query class provided by the SDK",
              args: { name: "queries" },
              isRepeatable: true,
            },
            {
              name: "--total",
              description:
                "When set to false, the total count returned will be 0 and will not be calculated",
            },
            ...listOptions,
            {
              name: "--project-id",
              description: "Project to act on",
              args: { name: "project-id" },
            },
          ],
        },
        {
          name: "create-environment",
          description: "Create a new environment of the project",
          icon,
          options: [
            {
              name: "--environment-id",
              description:
                "Environment ID, unique within the project and passed in the `X-Appwrite-Environment` header to act in the environment",
              args: { name: "environment-id" },
              isRequired: true,
            },
            {
              name: "--name",
              description: "Environment name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--resources",
              description:
                "Resources to copy from the project into the environment, by type",
              args: {
                name: "resources",
                suggestions: [
                  "database",
                  "table",
                  "column",
                  "index",
                  "bucket",
                  "team",
                  "function",
                  "site",
                  "row",
                  "file",
                  "user",
                  "membership",
                  "deployment",
                  "site-deployment",
                ],
              },
              isRepeatable: true,
            },
            {
              name: "--project-id",
              description: "Project to act on",
              args: { name: "project-id" },
            },
          ],
        },
        {
          name: "get-environment",
          description:
            "Get an environment of the project by its ID, the one passed in the `X-Appwrite-Environment` header to act in it",
          icon,
          options: [
            {
              name: "--environment-id",
              description: "Environment ID",
              args: { name: "environment-id" },
              isRequired: true,
            },
            {
              name: "--project-id",
              description: "Project to act on",
              args: { name: "project-id" },
            },
          ],
        },
        {
          name: "update-environment",
          description: "Update the name of an environment of the project",
          icon,
          options: [
            {
              name: "--environment-id",
              description: "Environment ID",
              args: { name: "environment-id" },
              isRequired: true,
            },
            {
              name: "--name",
              description: "Environment name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--project-id",
              description: "Project to act on",
              args: { name: "project-id" },
            },
          ],
        },
        {
          name: "delete-environment",
          description:
            "Delete an environment of the project, with all of its resources and users",
          icon,
          options: [
            {
              name: "--environment-id",
              description: "Environment ID",
              args: { name: "environment-id" },
              isRequired: true,
            },
            {
              name: "--project-id",
              description: "Project to act on",
              args: { name: "project-id" },
            },
          ],
        },
        {
          name: "list-keys",
          description: "Get a list of all API keys from the current project",
          icon,
          options: [
            {
              name: "--queries",
              description:
                "Array of query strings generated using the Query class provided by the SDK",
              args: { name: "queries" },
              isRepeatable: true,
            },
            {
              name: "--total",
              description:
                "When set to false, the total count returned will be 0 and will not be calculated",
            },
            ...listOptions,
            {
              name: "--project-id",
              description: "Project to act on",
              args: { name: "project-id" },
            },
          ],
        },
        {
          name: "create-ephemeral-key",
          description: "Create a new ephemeral API key",
          icon,
          options: [
            {
              name: "--scopes",
              description: "Key scopes list",
              args: { name: "scopes" },
              isRepeatable: true,
              isRequired: true,
            },
            {
              name: "--duration",
              description: "Time in seconds before ephemeral key expires",
              args: { name: "duration" },
              isRequired: true,
            },
            {
              name: "--project-id",
              description: "Project to act on",
              args: { name: "project-id" },
            },
          ],
        },
        {
          name: "get-key",
          description: "Get a key by its unique ID",
          icon,
          options: [
            {
              name: "--key-id",
              description: "Key ID",
              args: { name: "key-id" },
              isRequired: true,
            },
            {
              name: "--project-id",
              description: "Project to act on",
              args: { name: "project-id" },
            },
          ],
        },
        {
          name: "update-key",
          description: "Update a key by its unique ID",
          icon,
          options: [
            {
              name: "--key-id",
              description: "Key ID",
              args: { name: "key-id" },
              isRequired: true,
            },
            {
              name: "--name",
              description: "Key name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--scopes",
              description: "Key scopes list",
              args: { name: "scopes" },
              isRepeatable: true,
              isRequired: true,
            },
            {
              name: "--expire",
              description:
                "Expiration time in ISO 8601 (https://www.iso.org/iso-8601-date-and-time-format.html) format",
              args: { name: "expire" },
            },
            {
              name: "--description",
              description: "Optional description for the key",
              args: { name: "description" },
            },
            {
              name: "--project-id",
              description: "Project to act on",
              args: { name: "project-id" },
            },
          ],
        },
        {
          name: "delete-key",
          description: "Delete a key by its unique ID",
          icon,
          options: [
            {
              name: "--key-id",
              description: "Key ID",
              args: { name: "key-id" },
              isRequired: true,
            },
            {
              name: "--project-id",
              description: "Project to act on",
              args: { name: "project-id" },
            },
          ],
        },
        {
          name: "update-labels",
          description: "Update the project labels",
          icon,
          options: [
            {
              name: "--labels",
              description: "Array of project labels",
              args: { name: "labels" },
              isRepeatable: true,
              isRequired: true,
            },
            {
              name: "--project-id",
              description: "Project to act on",
              args: { name: "project-id" },
            },
          ],
        },
        {
          name: "update-ldap",
          description: "Update the LDAP configuration for your project",
          icon,
          options: [
            {
              name: "--enabled",
              description: "Enable or disable LDAP sign-in",
            },
            {
              name: "--hosts",
              description:
                "Directory hostnames or IP addresses, tried in order until one answers",
              args: { name: "hosts" },
              isRepeatable: true,
            },
            {
              name: "--port",
              description: "Directory port",
              args: { name: "port" },
            },
            {
              name: "--encryption",
              description: "Transport encryption",
              args: {
                name: "encryption",
                suggestions: ["none", "ldaps", "starttls"],
              },
            },
            {
              name: "--verification",
              description:
                "Certificate verification, false for disabled or true for enabled",
            },
            {
              name: "--certificate",
              description:
                "Certificate in PEM format of the authority that signed the directory certificate, or the directory certificate itself when it is self-signed",
              args: { name: "certificate" },
            },
            {
              name: "--timeout",
              description:
                "Seconds to wait for the directory to connect and answer each operation",
              args: { name: "timeout" },
            },
            {
              name: "--base-dn",
              description: "Subtree the user search starts from",
              args: { name: "base-dn" },
            },
            {
              name: "--bind-dn",
              description: "Service account used to search for users",
              args: { name: "bind-dn" },
            },
            {
              name: "--bind-password",
              description: "Service account password",
              args: { name: "bind-password" },
            },
            {
              name: "--user-filter",
              description: "LDAP filter that finds the user signing in",
              args: { name: "user-filter" },
            },
            {
              name: "--required-group-dn",
              description:
                "Group a user must belong to in order to sign in, checked on every sign-in",
              args: { name: "required-group-dn" },
            },
            {
              name: "--id-attribute",
              description:
                "Attribute holding the identifier that stays the same when an entry is renamed or moved",
              args: { name: "id-attribute" },
            },
            {
              name: "--email-attribute",
              description: "Attribute holding the email address",
              args: { name: "email-attribute" },
            },
            {
              name: "--name-attribute",
              description: "Attribute holding the display name",
              args: { name: "name-attribute" },
            },
            {
              name: "--phone-attribute",
              description:
                "Attribute holding the phone number, in international format",
              args: { name: "phone-attribute" },
            },
            {
              name: "--project-id",
              description: "Project to act on",
              args: { name: "project-id" },
            },
          ],
        },
        {
          name: "create-ldap-test",
          description:
            "Test the stored LDAP configuration against the directory without signing anyone in",
          icon,
          options: [
            {
              name: "--username",
              description: "Username to look up in the directory",
              args: { name: "username" },
            },
            {
              name: "--password",
              description: "Password of the user to verify",
              args: { name: "password" },
            },
            {
              name: "--project-id",
              description: "Project to act on",
              args: { name: "project-id" },
            },
          ],
        },
        {
          name: "list-mock-phones",
          description: "Get a list of all mock phones in the project",
          icon,
          options: [
            {
              name: "--queries",
              description:
                "Array of query strings generated using the Query class provided by the SDK",
              args: { name: "queries" },
              isRepeatable: true,
            },
            {
              name: "--total",
              description:
                "When set to false, the total count returned will be 0 and will not be calculated",
            },
            {
              name: "--limit",
              description: "Maximum number of results to return",
              args: { name: "limit" },
            },
            {
              name: "--offset",
              description: "Number of results to skip",
              args: { name: "offset" },
            },
            {
              name: "--project-id",
              description: "Project to act on",
              args: { name: "project-id" },
            },
          ],
        },
        {
          name: "create-mock-phone",
          description: "Create a new mock phone for your project",
          icon,
          options: [
            {
              name: "--number",
              description: "Phone number to associate with the mock phone",
              args: { name: "number" },
              isRequired: true,
            },
            {
              name: "--otp",
              description:
                "One-time password (OTP) to associate with the mock phone",
              args: { name: "otp" },
              isRequired: true,
            },
            {
              name: "--project-id",
              description: "Project to act on",
              args: { name: "project-id" },
            },
          ],
        },
        {
          name: "get-mock-phone",
          description: "Get a mock phone by its unique number",
          icon,
          options: [
            {
              name: "--number",
              description: "Phone number associated with the mock phone",
              args: { name: "number" },
              isRequired: true,
            },
            {
              name: "--project-id",
              description: "Project to act on",
              args: { name: "project-id" },
            },
          ],
        },
        {
          name: "update-mock-phone",
          description: "Update a mock phone by its unique number",
          icon,
          options: [
            {
              name: "--number",
              description: "Phone number associated with the mock phone",
              args: { name: "number" },
              isRequired: true,
            },
            {
              name: "--otp",
              description:
                "One-time password (OTP) to associate with the mock phone",
              args: { name: "otp" },
              isRequired: true,
            },
            {
              name: "--project-id",
              description: "Project to act on",
              args: { name: "project-id" },
            },
          ],
        },
        {
          name: "delete-mock-phone",
          description: "Delete a mock phone by its unique number",
          icon,
          options: [
            {
              name: "--number",
              description: "Phone number associated with the mock phone",
              args: { name: "number" },
              isRequired: true,
            },
            {
              name: "--project-id",
              description: "Project to act on",
              args: { name: "project-id" },
            },
          ],
        },
        {
          name: "list-o-auth-2-providers",
          description:
            "Get a list of all OAuth2 providers supported by the server, along with the project's configuration for each",
          icon,
          options: [
            {
              name: "--queries",
              description:
                "Array of query strings generated using the Query class provided by the SDK",
              args: { name: "queries" },
              isRepeatable: true,
            },
            {
              name: "--total",
              description:
                "When set to false, the total count returned will be 0 and will not be calculated",
            },
            {
              name: "--limit",
              description: "Maximum number of results to return",
              args: { name: "limit" },
            },
            {
              name: "--offset",
              description: "Number of results to skip",
              args: { name: "offset" },
            },
            {
              name: "--project-id",
              description: "Project to act on",
              args: { name: "project-id" },
            },
          ],
        },
        {
          name: "update-o-auth-2-server",
          description: "Update the OAuth2 server (OIDC provider) configuration",
          icon,
          options: [
            {
              name: "--enabled",
              description: "Enable or disable the OAuth2 server",
              isRequired: true,
            },
            {
              name: "--authorization-url",
              description: "URL to your application with consent screen",
              args: { name: "authorization-url" },
              isRequired: true,
            },
            {
              name: "--scopes",
              description: "List of allowed OAuth2 scopes",
              args: { name: "scopes" },
              isRepeatable: true,
            },
            {
              name: "--authorization-details-types",
              description: "List of accepted `authorization_details` types",
              args: { name: "authorization-details-types" },
              isRepeatable: true,
            },
            {
              name: "--access-token-duration",
              description:
                "Access token duration in seconds for confidential clients (server-side apps that authenticate with a client secret)",
              args: { name: "access-token-duration" },
            },
            {
              name: "--refresh-token-duration",
              description:
                "Refresh token duration in seconds for confidential clients (server-side apps that authenticate with a client secret)",
              args: { name: "refresh-token-duration" },
            },
            {
              name: "--public-access-token-duration",
              description:
                "Access token duration in seconds for public clients (SPAs, mobile, and native apps that cannot keep a client secret)",
              args: { name: "public-access-token-duration" },
            },
            {
              name: "--public-refresh-token-duration",
              description:
                "Refresh token duration in seconds for public clients (SPAs, mobile, and native apps that cannot keep a client secret)",
              args: { name: "public-refresh-token-duration" },
            },
            {
              name: "--installation-access-token-duration",
              description:
                "Access token duration in seconds for app installation access tokens",
              args: { name: "installation-access-token-duration" },
            },
            {
              name: "--confidential-pkce",
              description:
                "When enabled, PKCE is required for confidential clients (server-side flows using client_secret)",
            },
            {
              name: "--verification-url",
              description:
                "URL to your application page where users enter the device flow user code",
              args: { name: "verification-url" },
            },
            {
              name: "--user-code-length",
              description:
                "Number of characters in the device flow user code, excluding the formatting separator",
              args: { name: "user-code-length" },
            },
            {
              name: "--user-code-format",
              description:
                "Character set for device flow user codes: `numeric` (digits only — best for numeric keypads and TV remotes), `alphabetic` (letters only), or `alphanumeric` (letters and digits — highest entropy per character)",
              args: { name: "user-code-format" },
            },
            {
              name: "--device-code-duration",
              description:
                "Lifetime in seconds of device flow device codes and user codes",
              args: { name: "device-code-duration" },
            },
            {
              name: "--default-scopes",
              description:
                "List of OAuth2 scopes used when an authorization request omits the scope parameter",
              args: { name: "default-scopes" },
              isRepeatable: true,
            },
            {
              name: "--installation-scopes",
              description:
                "List of scopes an application may request when installed on a team",
              args: { name: "installation-scopes" },
              isRepeatable: true,
            },
            {
              name: "--project-id",
              description: "Project to act on",
              args: { name: "project-id" },
            },
          ],
        },
        {
          name: "update-o-auth-2-amazon",
          description: "Update the project OAuth2 Amazon configuration",
          icon,
          options: [
            {
              name: "--client-id",
              description: "'Client ID' of Amazon OAuth2 app",
              args: { name: "client-id" },
            },
            {
              name: "--client-secret",
              description: "'Client Secret' of Amazon OAuth2 app",
              args: { name: "client-secret" },
            },
            { name: "--enabled", description: "OAuth2 sign-in method status" },
            {
              name: "--project-id",
              description: "Project to act on",
              args: { name: "project-id" },
            },
          ],
        },
        {
          name: "update-o-auth-2-apple",
          description: "Update the project OAuth2 Apple configuration",
          icon,
          options: [
            {
              name: "--service-id",
              description: "'Service ID' of Apple OAuth2 app",
              args: { name: "service-id" },
            },
            {
              name: "--key-id",
              description: "'Key ID' of Apple OAuth2 app",
              args: { name: "key-id" },
            },
            {
              name: "--team-id",
              description: "'Team ID' of Apple OAuth2 app",
              args: { name: "team-id" },
            },
            {
              name: "--p-8-file",
              description:
                "Contents of the Apple OAuth2 app .p8 private key file",
              args: { name: "p-8-file" },
            },
            {
              name: "--enabled",
              description: "Browser-based OAuth2 sign-in status",
            },
            {
              name: "--native-client-ids",
              description:
                "App bundle IDs accepted as ID token audiences for native Sign in with Apple",
              args: { name: "native-client-ids" },
              isRepeatable: true,
            },
            {
              name: "--native-enabled",
              description: "Native Sign in with Apple status",
            },
            {
              name: "--project-id",
              description: "Project to act on",
              args: { name: "project-id" },
            },
          ],
        },
        {
          name: "update-o-auth-2-appwrite",
          description: "Update the project OAuth2 Appwrite configuration",
          icon,
          options: [
            {
              name: "--client-id",
              description: "'Client ID' of Appwrite OAuth2 app",
              args: { name: "client-id" },
            },
            {
              name: "--client-secret",
              description: "'Client Secret' of Appwrite OAuth2 app",
              args: { name: "client-secret" },
            },
            { name: "--enabled", description: "OAuth2 sign-in method status" },
            {
              name: "--project-id",
              description: "Project to act on",
              args: { name: "project-id" },
            },
          ],
        },
        {
          name: "update-o-auth-2-atlassian",
          description: "Update the project OAuth2 Atlassian configuration",
          icon,
          options: [
            {
              name: "--client-id",
              description: "'Client ID' of Atlassian OAuth2 app",
              args: { name: "client-id" },
            },
            {
              name: "--client-secret",
              description: "'Client Secret' of Atlassian OAuth2 app",
              args: { name: "client-secret" },
            },
            { name: "--enabled", description: "OAuth2 sign-in method status" },
            {
              name: "--project-id",
              description: "Project to act on",
              args: { name: "project-id" },
            },
          ],
        },
        {
          name: "update-o-auth-2-auth-0",
          description: "Update the project OAuth2 Auth0 configuration",
          icon,
          options: [
            {
              name: "--client-id",
              description: "'Client ID' of Auth0 OAuth2 app",
              args: { name: "client-id" },
            },
            {
              name: "--client-secret",
              description: "'Client Secret' of Auth0 OAuth2 app",
              args: { name: "client-secret" },
            },
            {
              name: "--endpoint",
              description: "Domain of Auth0 instance",
              args: { name: "endpoint" },
            },
            { name: "--enabled", description: "OAuth2 sign-in method status" },
            {
              name: "--prompt",
              description: "Array of Auth0 OAuth2 prompt values",
              args: { name: "prompt" },
              isRepeatable: true,
            },
            {
              name: "--project-id",
              description: "Project to act on",
              args: { name: "project-id" },
            },
          ],
        },
        {
          name: "update-o-auth-2-authentik",
          description: "Update the project OAuth2 Authentik configuration",
          icon,
          options: [
            {
              name: "--client-id",
              description: "'Client ID' of Authentik OAuth2 app",
              args: { name: "client-id" },
            },
            {
              name: "--client-secret",
              description: "'Client Secret' of Authentik OAuth2 app",
              args: { name: "client-secret" },
            },
            {
              name: "--endpoint",
              description: "Domain of Authentik instance",
              args: { name: "endpoint" },
            },
            { name: "--enabled", description: "OAuth2 sign-in method status" },
            {
              name: "--project-id",
              description: "Project to act on",
              args: { name: "project-id" },
            },
          ],
        },
        {
          name: "update-o-auth-2-autodesk",
          description: "Update the project OAuth2 Autodesk configuration",
          icon,
          options: [
            {
              name: "--client-id",
              description: "'Client ID' of Autodesk OAuth2 app",
              args: { name: "client-id" },
            },
            {
              name: "--client-secret",
              description: "'Client Secret' of Autodesk OAuth2 app",
              args: { name: "client-secret" },
            },
            { name: "--enabled", description: "OAuth2 sign-in method status" },
            {
              name: "--project-id",
              description: "Project to act on",
              args: { name: "project-id" },
            },
          ],
        },
        {
          name: "update-o-auth-2-bitbucket",
          description: "Update the project OAuth2 Bitbucket configuration",
          icon,
          options: [
            {
              name: "--key",
              description: "'Key' of Bitbucket OAuth2 app",
              args: { name: "key" },
            },
            {
              name: "--secret",
              description: "'Secret' of Bitbucket OAuth2 app",
              args: { name: "secret" },
            },
            { name: "--enabled", description: "OAuth2 sign-in method status" },
            {
              name: "--project-id",
              description: "Project to act on",
              args: { name: "project-id" },
            },
          ],
        },
        {
          name: "update-o-auth-2-bitly",
          description: "Update the project OAuth2 Bitly configuration",
          icon,
          options: [
            {
              name: "--client-id",
              description: "'Client ID' of Bitly OAuth2 app",
              args: { name: "client-id" },
            },
            {
              name: "--client-secret",
              description: "'Client Secret' of Bitly OAuth2 app",
              args: { name: "client-secret" },
            },
            { name: "--enabled", description: "OAuth2 sign-in method status" },
            {
              name: "--project-id",
              description: "Project to act on",
              args: { name: "project-id" },
            },
          ],
        },
        {
          name: "update-o-auth-2-box",
          description: "Update the project OAuth2 Box configuration",
          icon,
          options: [
            {
              name: "--client-id",
              description: "'Client ID' of Box OAuth2 app",
              args: { name: "client-id" },
            },
            {
              name: "--client-secret",
              description: "'Client Secret' of Box OAuth2 app",
              args: { name: "client-secret" },
            },
            { name: "--enabled", description: "OAuth2 sign-in method status" },
            {
              name: "--project-id",
              description: "Project to act on",
              args: { name: "project-id" },
            },
          ],
        },
        {
          name: "update-o-auth-2-cloudflare",
          description: "Update the project OAuth2 Cloudflare configuration",
          icon,
          options: [
            {
              name: "--client-id",
              description: "'Client ID' of Cloudflare OAuth2 app",
              args: { name: "client-id" },
            },
            {
              name: "--client-secret",
              description: "'Client Secret' of Cloudflare OAuth2 app",
              args: { name: "client-secret" },
            },
            { name: "--enabled", description: "OAuth2 sign-in method status" },
            {
              name: "--project-id",
              description: "Project to act on",
              args: { name: "project-id" },
            },
          ],
        },
        {
          name: "update-o-auth-2-dailymotion",
          description: "Update the project OAuth2 Dailymotion configuration",
          icon,
          options: [
            {
              name: "--api-key",
              description: "'API Key' of Dailymotion OAuth2 app",
              args: { name: "api-key" },
            },
            {
              name: "--api-secret",
              description: "'API Secret' of Dailymotion OAuth2 app",
              args: { name: "api-secret" },
            },
            { name: "--enabled", description: "OAuth2 sign-in method status" },
            {
              name: "--project-id",
              description: "Project to act on",
              args: { name: "project-id" },
            },
          ],
        },
        {
          name: "update-o-auth-2-discord",
          description: "Update the project OAuth2 Discord configuration",
          icon,
          options: [
            {
              name: "--client-id",
              description: "'Client ID' of Discord OAuth2 app",
              args: { name: "client-id" },
            },
            {
              name: "--client-secret",
              description: "'Client Secret' of Discord OAuth2 app",
              args: { name: "client-secret" },
            },
            { name: "--enabled", description: "OAuth2 sign-in method status" },
            {
              name: "--prompt",
              description: "Array with at most one Discord OAuth2 prompt value",
              args: { name: "prompt" },
              isRepeatable: true,
            },
            {
              name: "--project-id",
              description: "Project to act on",
              args: { name: "project-id" },
            },
          ],
        },
        {
          name: "update-o-auth-2-disqus",
          description: "Update the project OAuth2 Disqus configuration",
          icon,
          options: [
            {
              name: "--public-key",
              description:
                "'Public Key, also known as API Key' of Disqus OAuth2 app",
              args: { name: "public-key" },
            },
            {
              name: "--secret-key",
              description:
                "'Secret Key, also known as API Secret' of Disqus OAuth2 app",
              args: { name: "secret-key" },
            },
            { name: "--enabled", description: "OAuth2 sign-in method status" },
            {
              name: "--project-id",
              description: "Project to act on",
              args: { name: "project-id" },
            },
          ],
        },
        {
          name: "update-o-auth-2-dropbox",
          description: "Update the project OAuth2 Dropbox configuration",
          icon,
          options: [
            {
              name: "--app-key",
              description: "'App Key' of Dropbox OAuth2 app",
              args: { name: "app-key" },
            },
            {
              name: "--app-secret",
              description: "'App Secret' of Dropbox OAuth2 app",
              args: { name: "app-secret" },
            },
            { name: "--enabled", description: "OAuth2 sign-in method status" },
            {
              name: "--project-id",
              description: "Project to act on",
              args: { name: "project-id" },
            },
          ],
        },
        {
          name: "update-o-auth-2-etsy",
          description: "Update the project OAuth2 Etsy configuration",
          icon,
          options: [
            {
              name: "--key-string",
              description: "'Keystring' of Etsy OAuth2 app",
              args: { name: "key-string" },
            },
            {
              name: "--shared-secret",
              description: "'Shared Secret' of Etsy OAuth2 app",
              args: { name: "shared-secret" },
            },
            { name: "--enabled", description: "OAuth2 sign-in method status" },
            {
              name: "--project-id",
              description: "Project to act on",
              args: { name: "project-id" },
            },
          ],
        },
        {
          name: "update-o-auth-2-facebook",
          description: "Update the project OAuth2 Facebook configuration",
          icon,
          options: [
            {
              name: "--app-id",
              description: "'App ID' of Facebook OAuth2 app",
              args: { name: "app-id" },
            },
            {
              name: "--app-secret",
              description: "'App Secret' of Facebook OAuth2 app",
              args: { name: "app-secret" },
            },
            { name: "--enabled", description: "OAuth2 sign-in method status" },
            {
              name: "--project-id",
              description: "Project to act on",
              args: { name: "project-id" },
            },
          ],
        },
        {
          name: "update-o-auth-2-figma",
          description: "Update the project OAuth2 Figma configuration",
          icon,
          options: [
            {
              name: "--client-id",
              description: "'Client ID' of Figma OAuth2 app",
              args: { name: "client-id" },
            },
            {
              name: "--client-secret",
              description: "'Client Secret' of Figma OAuth2 app",
              args: { name: "client-secret" },
            },
            { name: "--enabled", description: "OAuth2 sign-in method status" },
            {
              name: "--project-id",
              description: "Project to act on",
              args: { name: "project-id" },
            },
          ],
        },
        {
          name: "update-o-auth-2-fusion-auth",
          description: "Update the project OAuth2 FusionAuth configuration",
          icon,
          options: [
            {
              name: "--client-id",
              description: "'Client ID' of FusionAuth OAuth2 app",
              args: { name: "client-id" },
            },
            {
              name: "--client-secret",
              description: "'Client Secret' of FusionAuth OAuth2 app",
              args: { name: "client-secret" },
            },
            {
              name: "--endpoint",
              description: "Domain of FusionAuth instance",
              args: { name: "endpoint" },
            },
            { name: "--enabled", description: "OAuth2 sign-in method status" },
            {
              name: "--project-id",
              description: "Project to act on",
              args: { name: "project-id" },
            },
          ],
        },
        {
          name: "update-o-auth-2-git-hub",
          description: "Update the project OAuth2 GitHub configuration",
          icon,
          options: [
            {
              name: "--client-id",
              description:
                "'OAuth2 app Client ID, or App ID' of GitHub OAuth2 app",
              args: { name: "client-id" },
            },
            {
              name: "--client-secret",
              description: "'Client Secret' of GitHub OAuth2 app",
              args: { name: "client-secret" },
            },
            { name: "--enabled", description: "OAuth2 sign-in method status" },
            {
              name: "--prompt",
              description: "Array of GitHub OAuth2 prompt values",
              args: { name: "prompt" },
              isRepeatable: true,
            },
            {
              name: "--project-id",
              description: "Project to act on",
              args: { name: "project-id" },
            },
          ],
        },
        {
          name: "update-o-auth-2-gitlab",
          description: "Update the project OAuth2 Gitlab configuration",
          icon,
          options: [
            {
              name: "--application-id",
              description: "'Application ID' of Gitlab OAuth2 app",
              args: { name: "application-id" },
            },
            {
              name: "--secret",
              description: "'Secret' of Gitlab OAuth2 app",
              args: { name: "secret" },
            },
            {
              name: "--endpoint",
              description: "Endpoint URL of self-hosted GitLab instance",
              args: { name: "endpoint" },
            },
            { name: "--enabled", description: "OAuth2 sign-in method status" },
            {
              name: "--project-id",
              description: "Project to act on",
              args: { name: "project-id" },
            },
          ],
        },
        {
          name: "update-o-auth-2-google",
          description: "Update the project OAuth2 Google configuration",
          icon,
          options: [
            {
              name: "--client-id",
              description: "'Client ID' of Google OAuth2 app",
              args: { name: "client-id" },
            },
            {
              name: "--client-secret",
              description: "'Client Secret' of Google OAuth2 app",
              args: { name: "client-secret" },
            },
            {
              name: "--prompt",
              description: "Array of Google OAuth2 prompt values",
              args: { name: "prompt" },
              isRepeatable: true,
            },
            {
              name: "--enabled",
              description: "Browser-based OAuth2 sign-in status",
            },
            {
              name: "--native-client-ids",
              description:
                "Additional OAuth2 client IDs accepted as ID token audiences for native sign-in (Android and iOS client IDs)",
              args: { name: "native-client-ids" },
              isRepeatable: true,
            },
            {
              name: "--native-enabled",
              description: "Native Google sign-in status",
            },
            {
              name: "--project-id",
              description: "Project to act on",
              args: { name: "project-id" },
            },
          ],
        },
        {
          name: "update-o-auth-2-hugging-face",
          description: "Update the project OAuth2 Hugging Face configuration",
          icon,
          options: [
            {
              name: "--client-id",
              description: "'Client ID' of Hugging Face OAuth2 app",
              args: { name: "client-id" },
            },
            {
              name: "--client-secret",
              description: "'Client Secret' of Hugging Face OAuth2 app",
              args: { name: "client-secret" },
            },
            { name: "--enabled", description: "OAuth2 sign-in method status" },
            {
              name: "--project-id",
              description: "Project to act on",
              args: { name: "project-id" },
            },
          ],
        },
        {
          name: "update-o-auth-2-instagram",
          description: "Update the project OAuth2 Instagram configuration",
          icon,
          options: [
            {
              name: "--client-id",
              description: "'Client ID' of Instagram OAuth2 app",
              args: { name: "client-id" },
            },
            {
              name: "--client-secret",
              description: "'Client Secret' of Instagram OAuth2 app",
              args: { name: "client-secret" },
            },
            { name: "--enabled", description: "OAuth2 sign-in method status" },
            {
              name: "--project-id",
              description: "Project to act on",
              args: { name: "project-id" },
            },
          ],
        },
        {
          name: "update-o-auth-2-kakao",
          description: "Update the project OAuth2 Kakao configuration",
          icon,
          options: [
            {
              name: "--client-id",
              description: "'REST API key' of Kakao OAuth2 app",
              args: { name: "client-id" },
            },
            {
              name: "--client-secret",
              description: "'Client Secret' of Kakao OAuth2 app",
              args: { name: "client-secret" },
            },
            { name: "--enabled", description: "OAuth2 sign-in method status" },
            {
              name: "--prompt",
              description: "Array of Kakao OAuth2 prompt values",
              args: { name: "prompt" },
              isRepeatable: true,
            },
            {
              name: "--project-id",
              description: "Project to act on",
              args: { name: "project-id" },
            },
          ],
        },
        {
          name: "update-o-auth-2-keycloak",
          description: "Update the project OAuth2 Keycloak configuration",
          icon,
          options: [
            {
              name: "--client-id",
              description: "'Client ID' of Keycloak OAuth2 app",
              args: { name: "client-id" },
            },
            {
              name: "--client-secret",
              description: "'Client Secret' of Keycloak OAuth2 app",
              args: { name: "client-secret" },
            },
            {
              name: "--endpoint",
              description: "Domain of Keycloak instance",
              args: { name: "endpoint" },
            },
            {
              name: "--realm-name",
              description: "Keycloak realm name",
              args: { name: "realm-name" },
            },
            { name: "--enabled", description: "OAuth2 sign-in method status" },
            {
              name: "--project-id",
              description: "Project to act on",
              args: { name: "project-id" },
            },
          ],
        },
        {
          name: "update-o-auth-2-kick",
          description: "Update the project OAuth2 Kick configuration",
          icon,
          options: [
            {
              name: "--client-id",
              description: "'Client ID' of Kick OAuth2 app",
              args: { name: "client-id" },
            },
            {
              name: "--client-secret",
              description: "'Client Secret' of Kick OAuth2 app",
              args: { name: "client-secret" },
            },
            { name: "--enabled", description: "OAuth2 sign-in method status" },
            {
              name: "--project-id",
              description: "Project to act on",
              args: { name: "project-id" },
            },
          ],
        },
        {
          name: "update-o-auth-2-line",
          description: "Update the project OAuth2 LINE configuration",
          icon,
          options: [
            {
              name: "--client-id",
              description: "'Client ID' of LINE OAuth2 app",
              args: { name: "client-id" },
            },
            {
              name: "--client-secret",
              description: "'Client Secret' of LINE OAuth2 app",
              args: { name: "client-secret" },
            },
            { name: "--enabled", description: "OAuth2 sign-in method status" },
            {
              name: "--project-id",
              description: "Project to act on",
              args: { name: "project-id" },
            },
          ],
        },
        {
          name: "update-o-auth-2-linear",
          description: "Update the project OAuth2 Linear configuration",
          icon,
          options: [
            {
              name: "--client-id",
              description: "'Client ID' of Linear OAuth2 app",
              args: { name: "client-id" },
            },
            {
              name: "--client-secret",
              description: "'Client Secret' of Linear OAuth2 app",
              args: { name: "client-secret" },
            },
            { name: "--enabled", description: "OAuth2 sign-in method status" },
            {
              name: "--project-id",
              description: "Project to act on",
              args: { name: "project-id" },
            },
          ],
        },
        {
          name: "update-o-auth-2-linkedin",
          description: "Update the project OAuth2 Linkedin configuration",
          icon,
          options: [
            {
              name: "--client-id",
              description: "'Client ID' of Linkedin OAuth2 app",
              args: { name: "client-id" },
            },
            {
              name: "--primary-client-secret",
              description:
                "'Primary Client Secret or Secondary Client Secret' of Linkedin OAuth2 app",
              args: { name: "primary-client-secret" },
            },
            { name: "--enabled", description: "OAuth2 sign-in method status" },
            {
              name: "--project-id",
              description: "Project to act on",
              args: { name: "project-id" },
            },
          ],
        },
        {
          name: "update-o-auth-2-microsoft",
          description: "Update the project OAuth2 Microsoft configuration",
          icon,
          options: [
            {
              name: "--application-id",
              description:
                "'Entra ID Application ID, also known as Client ID' of Microsoft OAuth2 app",
              args: { name: "application-id" },
            },
            {
              name: "--application-secret",
              description:
                "'Entra ID Application Secret, also known as Client Secret' of Microsoft OAuth2 app",
              args: { name: "application-secret" },
            },
            {
              name: "--tenant",
              description: "Microsoft Entra ID tenant identifier",
              args: { name: "tenant" },
            },
            { name: "--enabled", description: "OAuth2 sign-in method status" },
            {
              name: "--prompt",
              description: "Array of Microsoft OAuth2 prompt values",
              args: { name: "prompt" },
              isRepeatable: true,
            },
            {
              name: "--project-id",
              description: "Project to act on",
              args: { name: "project-id" },
            },
          ],
        },
        {
          name: "update-o-auth-2-naver",
          description: "Update the project OAuth2 Naver configuration",
          icon,
          options: [
            {
              name: "--client-id",
              description: "'Client ID' of Naver OAuth2 app",
              args: { name: "client-id" },
            },
            {
              name: "--client-secret",
              description: "'Client Secret' of Naver OAuth2 app",
              args: { name: "client-secret" },
            },
            { name: "--enabled", description: "OAuth2 sign-in method status" },
            {
              name: "--project-id",
              description: "Project to act on",
              args: { name: "project-id" },
            },
          ],
        },
        {
          name: "update-o-auth-2-netlify",
          description: "Update the project OAuth2 Netlify configuration",
          icon,
          options: [
            {
              name: "--client-id",
              description: "'Client ID' of Netlify OAuth2 app",
              args: { name: "client-id" },
            },
            {
              name: "--client-secret",
              description: "'Client Secret' of Netlify OAuth2 app",
              args: { name: "client-secret" },
            },
            { name: "--enabled", description: "OAuth2 sign-in method status" },
            {
              name: "--project-id",
              description: "Project to act on",
              args: { name: "project-id" },
            },
          ],
        },
        {
          name: "update-o-auth-2-notion",
          description: "Update the project OAuth2 Notion configuration",
          icon,
          options: [
            {
              name: "--oauth-client-id",
              description: "'OAuth Client ID' of Notion OAuth2 app",
              args: { name: "oauth-client-id" },
            },
            {
              name: "--oauth-client-secret",
              description: "'OAuth Client Secret' of Notion OAuth2 app",
              args: { name: "oauth-client-secret" },
            },
            { name: "--enabled", description: "OAuth2 sign-in method status" },
            {
              name: "--project-id",
              description: "Project to act on",
              args: { name: "project-id" },
            },
          ],
        },
        {
          name: "update-o-auth-2-oidc",
          description: "Update the project OAuth2 Oidc configuration",
          icon,
          options: [
            {
              name: "--client-id",
              description: "'Client ID' of Oidc OAuth2 app",
              args: { name: "client-id" },
            },
            {
              name: "--client-secret",
              description: "'Client Secret' of Oidc OAuth2 app",
              args: { name: "client-secret" },
            },
            {
              name: "--well-known-url",
              description: "OpenID Connect well-known configuration URL",
              args: { name: "well-known-url" },
            },
            {
              name: "--authorization-url",
              description: "OpenID Connect authorization endpoint URL",
              args: { name: "authorization-url" },
            },
            {
              name: "--token-url",
              description: "OpenID Connect token endpoint URL",
              args: { name: "token-url" },
            },
            {
              name: "--user-info-url",
              description: "OpenID Connect user info endpoint URL",
              args: { name: "user-info-url" },
            },
            {
              name: "--prompt",
              description:
                "Array of OpenID Connect prompt values controlling the authentication and consent screens",
              args: { name: "prompt" },
              isRepeatable: true,
            },
            {
              name: "--max-age",
              description: "Maximum authentication age in seconds",
              args: { name: "max-age" },
            },
            { name: "--enabled", description: "OAuth2 sign-in method status" },
            {
              name: "--project-id",
              description: "Project to act on",
              args: { name: "project-id" },
            },
          ],
        },
        {
          name: "update-o-auth-2-okta",
          description: "Update the project OAuth2 Okta configuration",
          icon,
          options: [
            {
              name: "--client-id",
              description: "'Client ID' of Okta OAuth2 app",
              args: { name: "client-id" },
            },
            {
              name: "--client-secret",
              description: "'Client Secret' of Okta OAuth2 app",
              args: { name: "client-secret" },
            },
            {
              name: "--domain",
              description: "Okta company domain",
              args: { name: "domain" },
            },
            {
              name: "--authorization-server-id",
              description: "Custom Authorization Servers",
              args: { name: "authorization-server-id" },
            },
            { name: "--enabled", description: "OAuth2 sign-in method status" },
            {
              name: "--prompt",
              description: "Array of Okta OAuth2 prompt values",
              args: { name: "prompt" },
              isRepeatable: true,
            },
            {
              name: "--project-id",
              description: "Project to act on",
              args: { name: "project-id" },
            },
          ],
        },
        {
          name: "update-o-auth-2-patreon",
          description: "Update the project OAuth2 Patreon configuration",
          icon,
          options: [
            {
              name: "--client-id",
              description: "'Client ID' of Patreon OAuth2 app",
              args: { name: "client-id" },
            },
            {
              name: "--client-secret",
              description: "'Client Secret' of Patreon OAuth2 app",
              args: { name: "client-secret" },
            },
            { name: "--enabled", description: "OAuth2 sign-in method status" },
            {
              name: "--project-id",
              description: "Project to act on",
              args: { name: "project-id" },
            },
          ],
        },
        {
          name: "update-o-auth-2-paypal",
          description: "Update the project OAuth2 Paypal configuration",
          icon,
          options: [
            {
              name: "--client-id",
              description: "'Client ID' of Paypal OAuth2 app",
              args: { name: "client-id" },
            },
            {
              name: "--secret-key",
              description:
                "'Secret Key 1 or Secret Key 2' of Paypal OAuth2 app",
              args: { name: "secret-key" },
            },
            { name: "--enabled", description: "OAuth2 sign-in method status" },
            {
              name: "--project-id",
              description: "Project to act on",
              args: { name: "project-id" },
            },
          ],
        },
        {
          name: "update-o-auth-2-paypal-sandbox",
          description: "Update the project OAuth2 PaypalSandbox configuration",
          icon,
          options: [
            {
              name: "--client-id",
              description: "'Client ID' of PaypalSandbox OAuth2 app",
              args: { name: "client-id" },
            },
            {
              name: "--secret-key",
              description:
                "'Secret Key 1 or Secret Key 2' of PaypalSandbox OAuth2 app",
              args: { name: "secret-key" },
            },
            { name: "--enabled", description: "OAuth2 sign-in method status" },
            {
              name: "--project-id",
              description: "Project to act on",
              args: { name: "project-id" },
            },
          ],
        },
        {
          name: "update-o-auth-2-podio",
          description: "Update the project OAuth2 Podio configuration",
          icon,
          options: [
            {
              name: "--client-id",
              description: "'Client ID' of Podio OAuth2 app",
              args: { name: "client-id" },
            },
            {
              name: "--client-secret",
              description: "'Client Secret' of Podio OAuth2 app",
              args: { name: "client-secret" },
            },
            { name: "--enabled", description: "OAuth2 sign-in method status" },
            {
              name: "--project-id",
              description: "Project to act on",
              args: { name: "project-id" },
            },
          ],
        },
        {
          name: "update-o-auth-2-railway",
          description: "Update the project OAuth2 Railway configuration",
          icon,
          options: [
            {
              name: "--client-id",
              description: "'Client ID' of Railway OAuth2 app",
              args: { name: "client-id" },
            },
            {
              name: "--client-secret",
              description: "'Client Secret' of Railway OAuth2 app",
              args: { name: "client-secret" },
            },
            { name: "--enabled", description: "OAuth2 sign-in method status" },
            {
              name: "--project-id",
              description: "Project to act on",
              args: { name: "project-id" },
            },
          ],
        },
        {
          name: "update-o-auth-2-reddit",
          description: "Update the project OAuth2 Reddit configuration",
          icon,
          options: [
            {
              name: "--client-id",
              description: "'Client ID' of Reddit OAuth2 app",
              args: { name: "client-id" },
            },
            {
              name: "--client-secret",
              description: "'Client Secret' of Reddit OAuth2 app",
              args: { name: "client-secret" },
            },
            { name: "--enabled", description: "OAuth2 sign-in method status" },
            {
              name: "--project-id",
              description: "Project to act on",
              args: { name: "project-id" },
            },
          ],
        },
        {
          name: "update-o-auth-2-resend",
          description: "Update the project OAuth2 Resend configuration",
          icon,
          options: [
            {
              name: "--client-id",
              description: "'Client ID' of Resend OAuth2 app",
              args: { name: "client-id" },
            },
            {
              name: "--client-secret",
              description: "'Client Secret' of Resend OAuth2 app",
              args: { name: "client-secret" },
            },
            { name: "--enabled", description: "OAuth2 sign-in method status" },
            {
              name: "--project-id",
              description: "Project to act on",
              args: { name: "project-id" },
            },
          ],
        },
        {
          name: "update-o-auth-2-roblox",
          description: "Update the project OAuth2 Roblox configuration",
          icon,
          options: [
            {
              name: "--client-id",
              description: "'Client ID' of Roblox OAuth2 app",
              args: { name: "client-id" },
            },
            {
              name: "--client-secret",
              description: "'Client Secret' of Roblox OAuth2 app",
              args: { name: "client-secret" },
            },
            { name: "--enabled", description: "OAuth2 sign-in method status" },
            {
              name: "--project-id",
              description: "Project to act on",
              args: { name: "project-id" },
            },
          ],
        },
        {
          name: "update-o-auth-2-salesforce",
          description: "Update the project OAuth2 Salesforce configuration",
          icon,
          options: [
            {
              name: "--customer-key",
              description: "'Consumer Key' of Salesforce OAuth2 app",
              args: { name: "customer-key" },
            },
            {
              name: "--customer-secret",
              description: "'Consumer Secret' of Salesforce OAuth2 app",
              args: { name: "customer-secret" },
            },
            { name: "--enabled", description: "OAuth2 sign-in method status" },
            {
              name: "--prompt",
              description: "Array of Salesforce OAuth2 prompt values",
              args: { name: "prompt" },
              isRepeatable: true,
            },
            {
              name: "--project-id",
              description: "Project to act on",
              args: { name: "project-id" },
            },
          ],
        },
        {
          name: "update-o-auth-2-slack",
          description: "Update the project OAuth2 Slack configuration",
          icon,
          options: [
            {
              name: "--client-id",
              description: "'Client ID' of Slack OAuth2 app",
              args: { name: "client-id" },
            },
            {
              name: "--client-secret",
              description: "'Client Secret' of Slack OAuth2 app",
              args: { name: "client-secret" },
            },
            { name: "--enabled", description: "OAuth2 sign-in method status" },
            {
              name: "--project-id",
              description: "Project to act on",
              args: { name: "project-id" },
            },
          ],
        },
        {
          name: "update-o-auth-2-spotify",
          description: "Update the project OAuth2 Spotify configuration",
          icon,
          options: [
            {
              name: "--client-id",
              description: "'Client ID' of Spotify OAuth2 app",
              args: { name: "client-id" },
            },
            {
              name: "--client-secret",
              description: "'Client Secret' of Spotify OAuth2 app",
              args: { name: "client-secret" },
            },
            { name: "--enabled", description: "OAuth2 sign-in method status" },
            {
              name: "--project-id",
              description: "Project to act on",
              args: { name: "project-id" },
            },
          ],
        },
        {
          name: "update-o-auth-2-strava",
          description: "Update the project OAuth2 Strava configuration",
          icon,
          options: [
            {
              name: "--client-id",
              description: "'Client ID' of Strava OAuth2 app",
              args: { name: "client-id" },
            },
            {
              name: "--client-secret",
              description: "'Client Secret' of Strava OAuth2 app",
              args: { name: "client-secret" },
            },
            { name: "--enabled", description: "OAuth2 sign-in method status" },
            {
              name: "--project-id",
              description: "Project to act on",
              args: { name: "project-id" },
            },
          ],
        },
        {
          name: "update-o-auth-2-stripe",
          description: "Update the project OAuth2 Stripe configuration",
          icon,
          options: [
            {
              name: "--client-id",
              description: "'Client ID' of Stripe OAuth2 app",
              args: { name: "client-id" },
            },
            {
              name: "--api-secret-key",
              description: "'API Secret Key' of Stripe OAuth2 app",
              args: { name: "api-secret-key" },
            },
            { name: "--enabled", description: "OAuth2 sign-in method status" },
            {
              name: "--project-id",
              description: "Project to act on",
              args: { name: "project-id" },
            },
          ],
        },
        {
          name: "update-o-auth-2-tik-tok",
          description: "Update the project OAuth2 TikTok configuration",
          icon,
          options: [
            {
              name: "--client-id",
              description: "'Client key' of TikTok OAuth2 app",
              args: { name: "client-id" },
            },
            {
              name: "--client-secret",
              description: "'Client secret' of TikTok OAuth2 app",
              args: { name: "client-secret" },
            },
            { name: "--enabled", description: "OAuth2 sign-in method status" },
            {
              name: "--project-id",
              description: "Project to act on",
              args: { name: "project-id" },
            },
          ],
        },
        {
          name: "update-o-auth-2-tradeshift",
          description: "Update the project OAuth2 Tradeshift configuration",
          icon,
          options: [
            {
              name: "--oauth-2-client-id",
              description: "'OAuth2 Client ID' of Tradeshift OAuth2 app",
              args: { name: "oauth-2-client-id" },
            },
            {
              name: "--oauth-2-client-secret",
              description: "'OAuth2 Client Secret' of Tradeshift OAuth2 app",
              args: { name: "oauth-2-client-secret" },
            },
            { name: "--enabled", description: "OAuth2 sign-in method status" },
            {
              name: "--project-id",
              description: "Project to act on",
              args: { name: "project-id" },
            },
          ],
        },
        {
          name: "update-o-auth-2-tradeshift-sandbox",
          description:
            "Update the project OAuth2 Tradeshift Sandbox configuration",
          icon,
          options: [
            {
              name: "--oauth-2-client-id",
              description:
                "'OAuth2 Client ID' of Tradeshift Sandbox OAuth2 app",
              args: { name: "oauth-2-client-id" },
            },
            {
              name: "--oauth-2-client-secret",
              description:
                "'OAuth2 Client Secret' of Tradeshift Sandbox OAuth2 app",
              args: { name: "oauth-2-client-secret" },
            },
            { name: "--enabled", description: "OAuth2 sign-in method status" },
            {
              name: "--project-id",
              description: "Project to act on",
              args: { name: "project-id" },
            },
          ],
        },
        {
          name: "update-o-auth-2-twitch",
          description: "Update the project OAuth2 Twitch configuration",
          icon,
          options: [
            {
              name: "--client-id",
              description: "'Client ID' of Twitch OAuth2 app",
              args: { name: "client-id" },
            },
            {
              name: "--client-secret",
              description: "'Client Secret' of Twitch OAuth2 app",
              args: { name: "client-secret" },
            },
            { name: "--enabled", description: "OAuth2 sign-in method status" },
            {
              name: "--project-id",
              description: "Project to act on",
              args: { name: "project-id" },
            },
          ],
        },
        {
          name: "update-o-auth-2-vercel",
          description: "Update the project OAuth2 Vercel configuration",
          icon,
          options: [
            {
              name: "--client-id",
              description: "'Client ID' of Vercel OAuth2 app",
              args: { name: "client-id" },
            },
            {
              name: "--client-secret",
              description: "'Client Secret' of Vercel OAuth2 app",
              args: { name: "client-secret" },
            },
            { name: "--enabled", description: "OAuth2 sign-in method status" },
            {
              name: "--project-id",
              description: "Project to act on",
              args: { name: "project-id" },
            },
          ],
        },
        {
          name: "update-o-auth-2-vipps",
          description:
            "Update the project OAuth2 Vipps MobilePay configuration",
          icon,
          options: [
            {
              name: "--client-id",
              description: "'Client ID' of Vipps MobilePay OAuth2 app",
              args: { name: "client-id" },
            },
            {
              name: "--client-secret",
              description: "'Client Secret' of Vipps MobilePay OAuth2 app",
              args: { name: "client-secret" },
            },
            { name: "--enabled", description: "OAuth2 sign-in method status" },
            {
              name: "--project-id",
              description: "Project to act on",
              args: { name: "project-id" },
            },
          ],
        },
        {
          name: "update-o-auth-2-vipps-sandbox",
          description:
            "Update the project OAuth2 Vipps MobilePay Sandbox configuration",
          icon,
          options: [
            {
              name: "--client-id",
              description: "'Client ID' of Vipps MobilePay Sandbox OAuth2 app",
              args: { name: "client-id" },
            },
            {
              name: "--client-secret",
              description:
                "'Client Secret' of Vipps MobilePay Sandbox OAuth2 app",
              args: { name: "client-secret" },
            },
            { name: "--enabled", description: "OAuth2 sign-in method status" },
            {
              name: "--project-id",
              description: "Project to act on",
              args: { name: "project-id" },
            },
          ],
        },
        {
          name: "update-o-auth-2vk",
          description: "Update the project OAuth2 VK configuration",
          icon,
          options: [
            {
              name: "--client-id",
              description: "'Client ID' of VK OAuth2 app",
              args: { name: "client-id" },
            },
            {
              name: "--client-secret",
              description: "'Client Secret' of VK OAuth2 app",
              args: { name: "client-secret" },
            },
            { name: "--enabled", description: "OAuth2 sign-in method status" },
            {
              name: "--project-id",
              description: "Project to act on",
              args: { name: "project-id" },
            },
          ],
        },
        {
          name: "update-o-auth-2-webflow",
          description: "Update the project OAuth2 Webflow configuration",
          icon,
          options: [
            {
              name: "--client-id",
              description: "'Client ID' of Webflow OAuth2 app",
              args: { name: "client-id" },
            },
            {
              name: "--client-secret",
              description: "'Client Secret' of Webflow OAuth2 app",
              args: { name: "client-secret" },
            },
            { name: "--enabled", description: "OAuth2 sign-in method status" },
            {
              name: "--project-id",
              description: "Project to act on",
              args: { name: "project-id" },
            },
          ],
        },
        {
          name: "update-o-auth-2-word-press",
          description: "Update the project OAuth2 WordPress configuration",
          icon,
          options: [
            {
              name: "--client-id",
              description: "'Client ID' of WordPress OAuth2 app",
              args: { name: "client-id" },
            },
            {
              name: "--client-secret",
              description: "'Client Secret' of WordPress OAuth2 app",
              args: { name: "client-secret" },
            },
            { name: "--enabled", description: "OAuth2 sign-in method status" },
            {
              name: "--project-id",
              description: "Project to act on",
              args: { name: "project-id" },
            },
          ],
        },
        {
          name: "update-o-auth-2-work-os",
          description: "Update the project OAuth2 WorkOS configuration",
          icon,
          options: [
            {
              name: "--client-id",
              description: "'Client ID' of WorkOS OAuth2 app",
              args: { name: "client-id" },
            },
            {
              name: "--client-secret",
              description: "'Client Secret' of WorkOS OAuth2 app",
              args: { name: "client-secret" },
            },
            { name: "--enabled", description: "OAuth2 sign-in method status" },
            {
              name: "--project-id",
              description: "Project to act on",
              args: { name: "project-id" },
            },
          ],
        },
        {
          name: "update-o-auth-2x",
          description: "Update the project OAuth2 X configuration",
          icon,
          options: [
            {
              name: "--customer-key",
              description: "'Customer Key' of X OAuth2 app",
              args: { name: "customer-key" },
            },
            {
              name: "--secret-key",
              description: "'Secret Key' of X OAuth2 app",
              args: { name: "secret-key" },
            },
            { name: "--enabled", description: "OAuth2 sign-in method status" },
            {
              name: "--project-id",
              description: "Project to act on",
              args: { name: "project-id" },
            },
          ],
        },
        {
          name: "update-o-auth-2-yahoo",
          description: "Update the project OAuth2 Yahoo configuration",
          icon,
          options: [
            {
              name: "--client-id",
              description:
                "'Client ID, also known as Customer Key' of Yahoo OAuth2 app",
              args: { name: "client-id" },
            },
            {
              name: "--client-secret",
              description:
                "'Client Secret, also known as Customer Secret' of Yahoo OAuth2 app",
              args: { name: "client-secret" },
            },
            { name: "--enabled", description: "OAuth2 sign-in method status" },
            {
              name: "--project-id",
              description: "Project to act on",
              args: { name: "project-id" },
            },
          ],
        },
        {
          name: "update-o-auth-2-yandex",
          description: "Update the project OAuth2 Yandex configuration",
          icon,
          options: [
            {
              name: "--client-id",
              description: "'Client ID' of Yandex OAuth2 app",
              args: { name: "client-id" },
            },
            {
              name: "--client-secret",
              description: "'Client Secret' of Yandex OAuth2 app",
              args: { name: "client-secret" },
            },
            { name: "--enabled", description: "OAuth2 sign-in method status" },
            {
              name: "--project-id",
              description: "Project to act on",
              args: { name: "project-id" },
            },
          ],
        },
        {
          name: "update-o-auth-2-zoho",
          description: "Update the project OAuth2 Zoho configuration",
          icon,
          options: [
            {
              name: "--client-id",
              description: "'Client ID' of Zoho OAuth2 app",
              args: { name: "client-id" },
            },
            {
              name: "--client-secret",
              description: "'Client Secret' of Zoho OAuth2 app",
              args: { name: "client-secret" },
            },
            { name: "--enabled", description: "OAuth2 sign-in method status" },
            {
              name: "--prompt",
              description: "Array of Zoho OAuth2 prompt values",
              args: { name: "prompt" },
              isRepeatable: true,
            },
            {
              name: "--project-id",
              description: "Project to act on",
              args: { name: "project-id" },
            },
          ],
        },
        {
          name: "update-o-auth-2-zoom",
          description: "Update the project OAuth2 Zoom configuration",
          icon,
          options: [
            {
              name: "--client-id",
              description: "'Client ID' of Zoom OAuth2 app",
              args: { name: "client-id" },
            },
            {
              name: "--client-secret",
              description: "'Client Secret' of Zoom OAuth2 app",
              args: { name: "client-secret" },
            },
            { name: "--enabled", description: "OAuth2 sign-in method status" },
            {
              name: "--project-id",
              description: "Project to act on",
              args: { name: "project-id" },
            },
          ],
        },
        {
          name: "get-o-auth-2-provider",
          description: "Get a single OAuth2 provider configuration",
          icon,
          options: [
            {
              name: "--provider-id",
              description: "OAuth2 provider key",
              args: { name: "provider-id" },
              isRequired: true,
            },
            {
              name: "--project-id",
              description: "Project to act on",
              args: { name: "project-id" },
            },
          ],
        },
        {
          name: "delete-passwords",
          description:
            "Delete all passwords in the project, forcing every user to reset their password",
          icon,
          options: [
            {
              name: "--project-id",
              description: "Project to act on",
              args: { name: "project-id" },
            },
          ],
        },
        {
          name: "list-platforms",
          description: "Get a list of all platforms in the project",
          icon,
          options: [
            {
              name: "--queries",
              description:
                "Array of query strings generated using the Query class provided by the SDK",
              args: { name: "queries" },
              isRepeatable: true,
            },
            {
              name: "--total",
              description:
                "When set to false, the total count returned will be 0 and will not be calculated",
            },
            ...listOptions,
            {
              name: "--project-id",
              description: "Project to act on",
              args: { name: "project-id" },
            },
          ],
        },
        {
          name: "create-android-platform",
          description: "Create a new Android platform for your project",
          icon,
          options: [
            {
              name: "--platform-id",
              description: "Platform ID",
              args: { name: "platform-id" },
              isRequired: true,
            },
            {
              name: "--name",
              description: "Platform name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--application-id",
              description: "Android application ID",
              args: { name: "application-id" },
              isRequired: true,
            },
            {
              name: "--fingerprints",
              description:
                'SHA-256 fingerprints of the certificates your app is signed with, such as "14:6D:E9:...:2B:6A"',
              args: { name: "fingerprints" },
              isRepeatable: true,
            },
            {
              name: "--project-id",
              description: "Project to act on",
              args: { name: "project-id" },
            },
          ],
        },
        {
          name: "update-android-platform",
          description: "Update an Android platform by its unique ID",
          icon,
          options: [
            {
              name: "--platform-id",
              description: "Platform ID",
              args: { name: "platform-id" },
              isRequired: true,
            },
            {
              name: "--name",
              description: "Platform name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--application-id",
              description: "Android application ID",
              args: { name: "application-id" },
              isRequired: true,
            },
            {
              name: "--fingerprints",
              description:
                'SHA-256 fingerprints of the certificates your app is signed with, such as "14:6D:E9:...:2B:6A"',
              args: { name: "fingerprints" },
              isRepeatable: true,
            },
            {
              name: "--project-id",
              description: "Project to act on",
              args: { name: "project-id" },
            },
          ],
        },
        {
          name: "create-apple-platform",
          description: "Create a new Apple platform for your project",
          icon,
          options: [
            {
              name: "--platform-id",
              description: "Platform ID",
              args: { name: "platform-id" },
              isRequired: true,
            },
            {
              name: "--name",
              description: "Platform name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--bundle-identifier",
              description: "Apple bundle identifier",
              args: { name: "bundle-identifier" },
              isRequired: true,
            },
            {
              name: "--project-id",
              description: "Project to act on",
              args: { name: "project-id" },
            },
          ],
        },
        {
          name: "update-apple-platform",
          description: "Update an Apple platform by its unique ID",
          icon,
          options: [
            {
              name: "--platform-id",
              description: "Platform ID",
              args: { name: "platform-id" },
              isRequired: true,
            },
            {
              name: "--name",
              description: "Platform name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--bundle-identifier",
              description: "Apple bundle identifier",
              args: { name: "bundle-identifier" },
              isRequired: true,
            },
            {
              name: "--project-id",
              description: "Project to act on",
              args: { name: "project-id" },
            },
          ],
        },
        {
          name: "create-linux-platform",
          description: "Create a new Linux platform for your project",
          icon,
          options: [
            {
              name: "--platform-id",
              description: "Platform ID",
              args: { name: "platform-id" },
              isRequired: true,
            },
            {
              name: "--name",
              description: "Platform name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--package-name",
              description: "Linux package name",
              args: { name: "package-name" },
              isRequired: true,
            },
            {
              name: "--project-id",
              description: "Project to act on",
              args: { name: "project-id" },
            },
          ],
        },
        {
          name: "update-linux-platform",
          description: "Update a Linux platform by its unique ID",
          icon,
          options: [
            {
              name: "--platform-id",
              description: "Platform ID",
              args: { name: "platform-id" },
              isRequired: true,
            },
            {
              name: "--name",
              description: "Platform name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--package-name",
              description: "Linux package name",
              args: { name: "package-name" },
              isRequired: true,
            },
            {
              name: "--project-id",
              description: "Project to act on",
              args: { name: "project-id" },
            },
          ],
        },
        {
          name: "create-web-platform",
          description: "Create a new web platform for your project",
          icon,
          options: [
            {
              name: "--platform-id",
              description: "Platform ID",
              args: { name: "platform-id" },
              isRequired: true,
            },
            {
              name: "--name",
              description: "Platform name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--hostname",
              description: "Platform web hostname",
              args: { name: "hostname" },
              isRequired: true,
            },
            {
              name: "--project-id",
              description: "Project to act on",
              args: { name: "project-id" },
            },
          ],
        },
        {
          name: "update-web-platform",
          description: "Update a web platform by its unique ID",
          icon,
          options: [
            {
              name: "--platform-id",
              description: "Platform ID",
              args: { name: "platform-id" },
              isRequired: true,
            },
            {
              name: "--name",
              description: "Platform name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--hostname",
              description: "Platform web hostname",
              args: { name: "hostname" },
              isRequired: true,
            },
            {
              name: "--project-id",
              description: "Project to act on",
              args: { name: "project-id" },
            },
          ],
        },
        {
          name: "create-windows-platform",
          description: "Create a new Windows platform for your project",
          icon,
          options: [
            {
              name: "--platform-id",
              description: "Platform ID",
              args: { name: "platform-id" },
              isRequired: true,
            },
            {
              name: "--name",
              description: "Platform name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--package-identifier-name",
              description: "Windows package identifier name",
              args: { name: "package-identifier-name" },
              isRequired: true,
            },
            {
              name: "--project-id",
              description: "Project to act on",
              args: { name: "project-id" },
            },
          ],
        },
        {
          name: "update-windows-platform",
          description: "Update a Windows platform by its unique ID",
          icon,
          options: [
            {
              name: "--platform-id",
              description: "Platform ID",
              args: { name: "platform-id" },
              isRequired: true,
            },
            {
              name: "--name",
              description: "Platform name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--package-identifier-name",
              description: "Windows package identifier name",
              args: { name: "package-identifier-name" },
              isRequired: true,
            },
            {
              name: "--project-id",
              description: "Project to act on",
              args: { name: "project-id" },
            },
          ],
        },
        {
          name: "get-platform",
          description: "Get a platform by its unique ID",
          icon,
          options: [
            {
              name: "--platform-id",
              description: "Platform ID",
              args: { name: "platform-id" },
              isRequired: true,
            },
            {
              name: "--project-id",
              description: "Project to act on",
              args: { name: "project-id" },
            },
          ],
        },
        {
          name: "delete-platform",
          description: "Delete a platform by its unique ID",
          icon,
          options: [
            {
              name: "--platform-id",
              description: "Platform ID",
              args: { name: "platform-id" },
              isRequired: true,
            },
            {
              name: "--project-id",
              description: "Project to act on",
              args: { name: "project-id" },
            },
          ],
        },
        {
          name: "list-policies",
          description:
            "Get a list of all project policies and their current configuration",
          icon,
          options: [
            {
              name: "--queries",
              description:
                "Array of query strings generated using the Query class provided by the SDK",
              args: { name: "queries" },
              isRepeatable: true,
            },
            {
              name: "--total",
              description:
                "When set to false, the total count returned will be 0 and will not be calculated",
            },
            {
              name: "--limit",
              description: "Maximum number of results to return",
              args: { name: "limit" },
            },
            {
              name: "--offset",
              description: "Number of results to skip",
              args: { name: "offset" },
            },
            {
              name: "--project-id",
              description: "Project to act on",
              args: { name: "project-id" },
            },
          ],
        },
        {
          name: "update-account-devices-policy",
          description:
            "Update whether account devices are enabled for the project",
          icon,
          options: [
            {
              name: "--enabled",
              description:
                "Set to true to allow account devices, or false to disable them for this project",
              isRequired: true,
            },
            {
              name: "--project-id",
              description: "Project to act on",
              args: { name: "project-id" },
            },
          ],
        },
        {
          name: "update-deny-aliased-email-policy",
          description:
            "Configures if aliased emails such as subaddresses and emails with suffixes are denied during new users sign-ups and email updates",
          icon,
          options: [
            {
              name: "--enabled",
              description:
                "Set whether or not to block aliased emails during signup and email updates",
              isRequired: true,
            },
            {
              name: "--project-id",
              description: "Project to act on",
              args: { name: "project-id" },
            },
          ],
        },
        {
          name: "update-deny-corporate-email-policy",
          description:
            "Configures if only corporate email addresses (non-free and non-disposable domains) are allowed during new user sign-ups and email updates",
          icon,
          options: [
            {
              name: "--enabled",
              description:
                "Set whether or not to restrict sign-ups and email updates to corporate email addresses only",
              isRequired: true,
            },
            {
              name: "--project-id",
              description: "Project to act on",
              args: { name: "project-id" },
            },
          ],
        },
        {
          name: "update-deny-disposable-email-policy",
          description:
            "Configures if disposable emails from known temporary domains are denied during new users sign-ups and email updates",
          icon,
          options: [
            {
              name: "--enabled",
              description:
                "Set whether or not to block disposable email addresses during signup and email updates",
              isRequired: true,
            },
            {
              name: "--project-id",
              description: "Project to act on",
              args: { name: "project-id" },
            },
          ],
        },
        {
          name: "update-deny-free-email-policy",
          description:
            "Configures if emails from free providers such as Gmail or Yahoo are denied during new users sign-ups and email updates",
          icon,
          options: [
            {
              name: "--enabled",
              description:
                "Set whether or not to block free email addresses during signup and email updates",
              isRequired: true,
            },
            {
              name: "--project-id",
              description: "Project to act on",
              args: { name: "project-id" },
            },
          ],
        },
        {
          name: "update-deny-realtime-guests-policy",
          description:
            "Configures if guests, connections without a signed-in user, may subscribe to realtime channels",
          icon,
          options: [
            {
              name: "--enabled",
              description:
                "Set whether or not to stop guests from subscribing to realtime channels",
              isRequired: true,
            },
            {
              name: "--project-id",
              description: "Project to act on",
              args: { name: "project-id" },
            },
          ],
        },
        {
          name: "update-membership-privacy-policy",
          description:
            "Updating this policy allows you to control if team members can see other members information",
          icon,
          options: [
            {
              name: "--user-id",
              description:
                "Set to true if you want make user ID visible to all team members, or false to hide it",
            },
            {
              name: "--user-email",
              description:
                "Set to true if you want make user email visible to all team members, or false to hide it",
            },
            {
              name: "--user-phone",
              description:
                "Set to true if you want make user phone number visible to all team members, or false to hide it",
            },
            {
              name: "--user-name",
              description:
                "Set to true if you want make user name visible to all team members, or false to hide it",
            },
            {
              name: "--user-mfa",
              description:
                "Set to true if you want make user MFA status visible to all team members, or false to hide it",
            },
            {
              name: "--user-accessed-at",
              description:
                "Set to true if you want make user last access time visible to all team members, or false to hide it",
            },
            {
              name: "--project-id",
              description: "Project to act on",
              args: { name: "project-id" },
            },
          ],
        },
        {
          name: "update-mfa-factors-policy",
          description:
            "Updating this policy allows you to control which factors users can use to complete an MFA challenge",
          icon,
          options: [
            {
              name: "--totp",
              description:
                "Set to true to allow TOTP to complete an MFA challenge, or false to disable it",
            },
            {
              name: "--email",
              description:
                "Set to true to allow email to complete an MFA challenge, or false to disable it",
            },
            {
              name: "--phone",
              description:
                "Set to true to allow phone (SMS) to complete an MFA challenge, or false to disable it",
            },
            {
              name: "--custom",
              description:
                "Set to true to allow the custom factor to complete an MFA challenge, or false to disable it",
            },
            {
              name: "--project-id",
              description: "Project to act on",
              args: { name: "project-id" },
            },
          ],
        },
        {
          name: "update-passkey-policy",
          description:
            "Set the relying party ID passkeys are bound to: the domain of your application",
          icon,
          options: [
            {
              name: "--rp-id",
              description:
                "Relying party ID: the domain of your application, such as `example.com`",
              args: { name: "rp-id" },
              isRequired: true,
            },
            {
              name: "--project-id",
              description: "Project to act on",
              args: { name: "project-id" },
            },
          ],
        },
        {
          name: "update-password-dictionary-policy",
          description:
            "Updating this policy allows you to control if new passwords are checked against most common passwords dictionary",
          icon,
          options: [
            {
              name: "--enabled",
              description: "Toggle password dictionary policy",
              isRequired: true,
            },
            {
              name: "--deny-list",
              description:
                "Custom blocked values using case-sensitive equality",
              args: { name: "deny-list" },
              isRepeatable: true,
            },
            {
              name: "--project-id",
              description: "Project to act on",
              args: { name: "project-id" },
            },
          ],
        },
        {
          name: "update-password-history-policy",
          description: "Updates one of password strength policies",
          icon,
          options: [
            {
              name: "--total",
              description: "Set the password history length per user",
              args: { name: "total" },
              isRequired: true,
            },
            {
              name: "--project-id",
              description: "Project to act on",
              args: { name: "project-id" },
            },
          ],
        },
        {
          name: "update-password-personal-data-policy",
          description:
            "Updating this policy allows you to control if password strength is checked against personal data",
          icon,
          options: [
            {
              name: "--enabled",
              description: "Toggle password personal data policy",
              isRequired: true,
            },
            {
              name: "--deny-list",
              description:
                "Custom blocked values using case-insensitive substring matching",
              args: { name: "deny-list" },
              isRepeatable: true,
            },
            {
              name: "--project-id",
              description: "Project to act on",
              args: { name: "project-id" },
            },
          ],
        },
        {
          name: "update-password-pwned-policy",
          description:
            "Updating this policy allows you to control if passwords are checked against the Have I Been Pwned breach database",
          icon,
          options: [
            { name: "--enabled", description: "Toggle password pwned policy" },
            {
              name: "--sessions",
              description:
                "Whether a sign-in with a breached password is refused until the password is reset",
            },
            {
              name: "--users",
              description:
                "Whether a breached password is rejected when a user signs up or sets a new password",
            },
            {
              name: "--project-id",
              description: "Project to act on",
              args: { name: "project-id" },
            },
          ],
        },
        {
          name: "update-password-rotation-policy",
          description:
            "Require a password reset when an email/password sign-in uses a password older than the configured maximum age",
          icon,
          options: [
            { name: "--enabled", description: "Enable password rotation" },
            {
              name: "--max-age",
              description: "Maximum password age in seconds",
              args: { name: "max-age" },
            },
            {
              name: "--project-id",
              description: "Project to act on",
              args: { name: "project-id" },
            },
          ],
        },
        {
          name: "update-password-strength-policy",
          description:
            "Update the password strength requirements for users in the project",
          icon,
          options: [
            {
              name: "--min",
              description: "Minimum password length",
              args: { name: "min" },
            },
            {
              name: "--uppercase",
              description:
                "Whether passwords must include at least one uppercase letter",
            },
            {
              name: "--lowercase",
              description:
                "Whether passwords must include at least one lowercase letter",
            },
            {
              name: "--number",
              description: "Whether passwords must include at least one number",
            },
            {
              name: "--symbols",
              description: "Whether passwords must include at least one symbol",
            },
            {
              name: "--project-id",
              description: "Project to act on",
              args: { name: "project-id" },
            },
          ],
        },
        {
          name: "update-session-alert-policy",
          description:
            "Updating this policy allows you to control if email alert is sent upon session creation",
          icon,
          options: [
            {
              name: "--enabled",
              description: "Toggle session alert policy",
              isRequired: true,
            },
            {
              name: "--project-id",
              description: "Project to act on",
              args: { name: "project-id" },
            },
          ],
        },
        {
          name: "update-session-duration-policy",
          description:
            "Update maximum duration how long sessions created within a project should stay active for",
          icon,
          options: [
            {
              name: "--duration",
              description: "Maximum session length in seconds",
              args: { name: "duration" },
              isRequired: true,
            },
            {
              name: "--project-id",
              description: "Project to act on",
              args: { name: "project-id" },
            },
          ],
        },
        {
          name: "update-session-invalidation-policy",
          description:
            "Updating this policy allows you to control if existing sessions should be invalidated when a password of a user is changed",
          icon,
          options: [
            {
              name: "--enabled",
              description: "Toggle session invalidation policy",
              isRequired: true,
            },
            {
              name: "--project-id",
              description: "Project to act on",
              args: { name: "project-id" },
            },
          ],
        },
        {
          name: "update-session-limit-policy",
          description: "Update the maximum number of sessions allowed per user",
          icon,
          options: [
            {
              name: "--total",
              description:
                "Set the maximum number of sessions allowed per user",
              args: { name: "total" },
              isRequired: true,
            },
            {
              name: "--project-id",
              description: "Project to act on",
              args: { name: "project-id" },
            },
          ],
        },
        {
          name: "update-user-limit-policy",
          description: "Update the maximum number of users in the project",
          icon,
          options: [
            {
              name: "--total",
              description:
                "Set the maximum number of users allowed in the project",
              args: { name: "total" },
              isRequired: true,
            },
            {
              name: "--project-id",
              description: "Project to act on",
              args: { name: "project-id" },
            },
          ],
        },
        {
          name: "get-policy",
          description: "Get a policy by its unique ID",
          icon,
          options: [
            {
              name: "--policy-id",
              description: "Policy ID",
              args: {
                name: "policy-id",
                suggestions: [
                  "password-dictionary",
                  "password-history",
                  "password-strength",
                  "password-personal-data",
                  "password-pwned",
                  "password-rotation",
                  "session-alert",
                  "session-duration",
                  "session-invalidation",
                  "session-limit",
                  "user-limit",
                  "membership-privacy",
                  "mfa-factors",
                  "deny-aliased-email",
                  "deny-disposable-email",
                  "deny-free-email",
                  "deny-corporate-email",
                  "deny-realtime-guests",
                  "passkey",
                  "account-devices",
                ],
              },
              isRequired: true,
            },
            {
              name: "--project-id",
              description: "Project to act on",
              args: { name: "project-id" },
            },
          ],
        },
        {
          name: "get-prefs",
          description: "Get the project preferences",
          icon,
          options: [
            {
              name: "--project-id",
              description: "Project to act on",
              args: { name: "project-id" },
            },
          ],
        },
        {
          name: "update-prefs",
          description: "Update the project preferences",
          icon,
          options: [
            {
              name: "--prefs",
              description: "Prefs key-value JSON object",
              args: { name: "prefs" },
              isRequired: true,
            },
            {
              name: "--project-id",
              description: "Project to act on",
              args: { name: "project-id" },
            },
          ],
        },
        {
          name: "update-protocol",
          description: "Update properties of a specific protocol",
          icon,
          options: [
            {
              name: "--protocol-id",
              description: "Protocol name",
              args: {
                name: "protocol-id",
                suggestions: ["rest", "graphql", "websocket"],
              },
              isRequired: true,
            },
            {
              name: "--enabled",
              description: "Protocol status",
              isRequired: true,
            },
            {
              name: "--project-id",
              description: "Project to act on",
              args: { name: "project-id" },
            },
          ],
        },
        {
          name: "update-service",
          description: "Update properties of a specific service",
          icon,
          options: [
            {
              name: "--service-id",
              description: "Service name",
              args: {
                name: "service-id",
                suggestions: [
                  "account",
                  "avatars",
                  "databases",
                  "tablesdb",
                  "locale",
                  "health",
                  "project",
                  "storage",
                  "teams",
                  "users",
                  "vcs",
                  "sites",
                  "functions",
                  "proxy",
                  "graphql",
                  "migrations",
                  "messaging",
                  "advisor",
                  "oauth2",
                ],
              },
              isRequired: true,
            },
            {
              name: "--enabled",
              description: "Service status",
              isRequired: true,
            },
            {
              name: "--project-id",
              description: "Project to act on",
              args: { name: "project-id" },
            },
          ],
        },
        {
          name: "delete-sessions",
          description: "Delete all sessions in the project",
          icon,
          options: [
            {
              name: "--project-id",
              description: "Project to act on",
              args: { name: "project-id" },
            },
          ],
        },
        {
          name: "update-smtp",
          description: "Update the SMTP configuration for your project",
          icon,
          options: [
            {
              name: "--host",
              description: "SMTP server hostname (domain)",
              args: { name: "host" },
            },
            {
              name: "--port",
              description: "SMTP server port",
              args: { name: "port" },
            },
            {
              name: "--username",
              description: "SMTP server username",
              args: { name: "username" },
            },
            {
              name: "--password",
              description: "SMTP server password",
              args: { name: "password" },
            },
            {
              name: "--sender-email",
              description:
                "Email address shown in inbox as the sender of the email",
              args: { name: "sender-email" },
            },
            {
              name: "--sender-name",
              description: "Name shown in inbox as the sender of the email",
              args: { name: "sender-name" },
            },
            {
              name: "--reply-to-email",
              description: "Email used when user replies to the email",
              args: { name: "reply-to-email" },
            },
            {
              name: "--reply-to-name",
              description: "Name used when user replies to the email",
              args: { name: "reply-to-name" },
            },
            {
              name: "--secure",
              description:
                "Configures if communication with SMTP server is encrypted",
              args: { name: "secure", suggestions: ["tls", "ssl"] },
            },
            { name: "--enabled", description: "Enable or disable custom SMTP" },
            {
              name: "--project-id",
              description: "Project to act on",
              args: { name: "project-id" },
            },
          ],
        },
        {
          name: "create-smtp-test",
          description: "Send a test email to verify SMTP configuration",
          icon,
          options: [
            {
              name: "--emails",
              description: "Array of emails to send test email to",
              args: { name: "emails" },
              isRepeatable: true,
              isRequired: true,
            },
            {
              name: "--project-id",
              description: "Project to act on",
              args: { name: "project-id" },
            },
          ],
        },
        {
          name: "list-email-templates",
          description:
            "Get a list of all custom email templates configured for the project",
          icon,
          options: [
            {
              name: "--queries",
              description:
                "Array of query strings generated using the Query class provided by the SDK",
              args: { name: "queries" },
              isRepeatable: true,
            },
            {
              name: "--total",
              description:
                "When set to false, the total count returned will be 0 and will not be calculated",
            },
            {
              name: "--limit",
              description: "Maximum number of results to return",
              args: { name: "limit" },
            },
            {
              name: "--offset",
              description: "Number of results to skip",
              args: { name: "offset" },
            },
            {
              name: "--project-id",
              description: "Project to act on",
              args: { name: "project-id" },
            },
          ],
        },
        {
          name: "update-email-template",
          description:
            "Update a custom email template for the specified locale and type",
          icon,
          options: [
            {
              name: "--template-id",
              description: "Custom email template type",
              args: {
                name: "template-id",
                suggestions: [
                  "verification",
                  "magicSession",
                  "recovery",
                  "invitation",
                  "mfaChallenge",
                  "sessionAlert",
                  "otpSession",
                  "otpVerification",
                  "otpRecovery",
                ],
              },
              isRequired: true,
            },
            {
              name: "--locale",
              description: "Custom email template locale",
              args: { name: "locale" },
            },
            {
              name: "--subject",
              description: "Subject of the email template",
              args: { name: "subject" },
            },
            {
              name: "--message",
              description: "Plain or HTML body of the email template message",
              args: { name: "message" },
            },
            {
              name: "--sender-name",
              description: "Name of the email sender",
              args: { name: "sender-name" },
            },
            {
              name: "--sender-email",
              description: "Email of the sender",
              args: { name: "sender-email" },
            },
            {
              name: "--reply-to-email",
              description: "Reply to email",
              args: { name: "reply-to-email" },
            },
            {
              name: "--reply-to-name",
              description: "Reply to name",
              args: { name: "reply-to-name" },
            },
            {
              name: "--project-id",
              description: "Project to act on",
              args: { name: "project-id" },
            },
          ],
        },
        {
          name: "get-email-template",
          description:
            "Get a custom email template for the specified locale and type",
          icon,
          options: [
            {
              name: "--template-id",
              description: "Custom email template type",
              args: {
                name: "template-id",
                suggestions: [
                  "verification",
                  "magicSession",
                  "recovery",
                  "invitation",
                  "mfaChallenge",
                  "sessionAlert",
                  "otpSession",
                  "otpVerification",
                  "otpRecovery",
                ],
              },
              isRequired: true,
            },
            {
              name: "--locale",
              description: "Custom email template locale",
              args: { name: "locale" },
            },
            {
              name: "--project-id",
              description: "Project to act on",
              args: { name: "project-id" },
            },
          ],
        },
        {
          name: "list-variables",
          description: "Get a list of all project environment variables",
          icon,
          options: [
            {
              name: "--queries",
              description:
                "Array of query strings generated using the Query class provided by the SDK",
              args: { name: "queries" },
              isRepeatable: true,
            },
            {
              name: "--total",
              description:
                "When set to false, the total count returned will be 0 and will not be calculated",
            },
            ...listOptions,
            {
              name: "--project-id",
              description: "Project to act on",
              args: { name: "project-id" },
            },
          ],
        },
        {
          name: "create-variable",
          description: "Create a new project environment variable",
          icon,
          options: [
            {
              name: "--variable-id",
              description: "Variable unique ID",
              args: { name: "variable-id" },
              isRequired: true,
            },
            {
              name: "--key",
              description: "Variable key",
              args: { name: "key" },
              isRequired: true,
            },
            {
              name: "--value",
              description: "Variable value",
              args: { name: "value" },
              isRequired: true,
            },
            {
              name: "--secret",
              description:
                "Secret variables can be updated or deleted, but only projects can read them during build and runtime",
            },
            {
              name: "--description",
              description: "Optional description for the variable",
              args: { name: "description" },
            },
            {
              name: "--project-id",
              description: "Project to act on",
              args: { name: "project-id" },
            },
          ],
        },
        {
          name: "get-variable",
          description: "Get a variable by its unique ID",
          icon,
          options: [
            {
              name: "--variable-id",
              description: "Variable unique ID",
              args: { name: "variable-id" },
              isRequired: true,
            },
            {
              name: "--project-id",
              description: "Project to act on",
              args: { name: "project-id" },
            },
          ],
        },
        {
          name: "update-variable",
          description: "Update variable by its unique ID",
          icon,
          options: [
            {
              name: "--variable-id",
              description: "Variable unique ID",
              args: { name: "variable-id" },
              isRequired: true,
            },
            {
              name: "--key",
              description: "Variable key",
              args: { name: "key" },
            },
            {
              name: "--value",
              description: "Variable value",
              args: { name: "value" },
            },
            {
              name: "--secret",
              description:
                "Secret variables can be updated or deleted, but only projects can read them during build and runtime",
            },
            {
              name: "--description",
              description: "Optional description for the variable",
              args: { name: "description" },
            },
            {
              name: "--project-id",
              description: "Project to act on",
              args: { name: "project-id" },
            },
          ],
        },
        {
          name: "delete-variable",
          description: "Delete a variable by its unique ID",
          icon,
          options: [
            {
              name: "--variable-id",
              description: "Variable unique ID",
              args: { name: "variable-id" },
              isRequired: true,
            },
            {
              name: "--project-id",
              description: "Project to act on",
              args: { name: "project-id" },
            },
          ],
        },
      ],
    },
    {
      name: "proxy",
      description: "Domain configuration beyond DNS",
      icon,
      subcommands: [
        {
          name: "create-invalidation",
          description: "Create a new CDN cache invalidation for a domain",
          icon,
          options: [
            {
              name: "--domain",
              description: "Domain name",
              args: { name: "domain" },
              isRequired: true,
            },
            {
              name: "--type",
              description: "Type of reference passed",
              args: { name: "type", suggestions: ["tag", "path", "all"] },
              isRequired: true,
            },
            {
              name: "--reference",
              description: "Reference to invalidate",
              args: { name: "reference" },
            },
          ],
        },
        {
          name: "list-rules",
          description: "Get a list of all the proxy rules",
          icon,
          options: [
            {
              name: "--queries",
              description:
                "Array of query strings generated using the Query class provided by the SDK",
              args: { name: "queries" },
              isRepeatable: true,
            },
            {
              name: "--total",
              description:
                "When set to false, the total count returned will be 0 and will not be calculated",
            },
            ...listOptions,
          ],
        },
        {
          name: "create-api-rule",
          description:
            "Create a new proxy rule for serving Appwrite's API on custom domain",
          icon,
          options: [
            {
              name: "--domain",
              description: "Domain name",
              args: { name: "domain" },
              isRequired: true,
            },
          ],
        },
        {
          name: "create-function-rule",
          description:
            "Create a new proxy rule for executing Appwrite Function on custom domain",
          icon,
          options: [
            {
              name: "--domain",
              description: "Domain name",
              args: { name: "domain" },
              isRequired: true,
            },
            {
              name: "--function-id",
              description: "ID of function to be executed",
              args: { name: "function-id" },
              isRequired: true,
            },
            {
              name: "--branch",
              description: "Name of VCS branch to deploy changes automatically",
              args: { name: "branch" },
            },
          ],
        },
        {
          name: "create-redirect-rule",
          description:
            "Create a new proxy rule for to redirect from custom domain to another domain",
          icon,
          options: [
            {
              name: "--domain",
              description: "Domain name",
              args: { name: "domain" },
              isRequired: true,
            },
            {
              name: "--url",
              description: "Target URL of redirection",
              args: { name: "url" },
              isRequired: true,
            },
            {
              name: "--status-code",
              description: "Status code of redirection",
              args: { name: "status-code" },
              isRequired: true,
            },
            {
              name: "--resource-id",
              description: "ID of parent resource",
              args: { name: "resource-id" },
              isRequired: true,
            },
            {
              name: "--resource-type",
              description: "Type of parent resource",
              args: { name: "resource-type" },
              isRequired: true,
            },
          ],
        },
        {
          name: "create-site-rule",
          description:
            "Create a new proxy rule for serving Appwrite Site on custom domain",
          icon,
          options: [
            {
              name: "--domain",
              description: "Domain name",
              args: { name: "domain" },
              isRequired: true,
            },
            {
              name: "--site-id",
              description: "ID of site to be executed",
              args: { name: "site-id" },
              isRequired: true,
            },
            {
              name: "--branch",
              description: "Name of VCS branch to deploy changes automatically",
              args: { name: "branch" },
            },
          ],
        },
        {
          name: "create-smtp-rule",
          description:
            "Create an SMTP ingress rule that asynchronously executes an Appwrite Function for incoming email",
          icon,
          options: [
            {
              name: "--domain",
              description: "Domain that receives email",
              args: { name: "domain" },
              isRequired: true,
            },
            {
              name: "--function-id",
              description: "ID of function to execute",
              args: { name: "function-id" },
              isRequired: true,
            },
            {
              name: "--branch",
              description: "Name of VCS branch to deploy changes automatically",
              args: { name: "branch" },
            },
          ],
        },
        {
          name: "get-rule",
          description: "Get a proxy rule by its unique ID",
          icon,
          options: [
            {
              name: "--rule-id",
              description: "Rule ID",
              args: { name: "rule-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "delete-rule",
          description: "Delete a proxy rule by its unique ID",
          icon,
          options: [
            {
              name: "--rule-id",
              description: "Rule ID",
              args: { name: "rule-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "update-function-rule",
          description:
            "Update the function and VCS branch a function proxy rule executes",
          icon,
          options: [
            {
              name: "--rule-id",
              description: "Rule ID",
              args: { name: "rule-id" },
              isRequired: true,
            },
            {
              name: "--function-id",
              description: "ID of function to be executed",
              args: { name: "function-id" },
              isRequired: true,
            },
            {
              name: "--branch",
              description: "Name of VCS branch to deploy changes automatically",
              args: { name: "branch" },
            },
          ],
        },
        {
          name: "update-redirect-rule",
          description:
            "Update the target URL, status code and parent resource of a redirect proxy rule",
          icon,
          options: [
            {
              name: "--rule-id",
              description: "Rule ID",
              args: { name: "rule-id" },
              isRequired: true,
            },
            {
              name: "--url",
              description: "Target URL of redirection",
              args: { name: "url" },
              isRequired: true,
            },
            {
              name: "--status-code",
              description: "Status code of redirection",
              args: { name: "status-code" },
              isRequired: true,
            },
            {
              name: "--resource-id",
              description: "ID of parent resource",
              args: { name: "resource-id" },
              isRequired: true,
            },
            {
              name: "--resource-type",
              description: "Type of parent resource",
              args: { name: "resource-type" },
              isRequired: true,
            },
          ],
        },
        {
          name: "update-site-rule",
          description:
            "Update the site and VCS branch a site proxy rule serves",
          icon,
          options: [
            {
              name: "--rule-id",
              description: "Rule ID",
              args: { name: "rule-id" },
              isRequired: true,
            },
            {
              name: "--site-id",
              description: "ID of site to be executed",
              args: { name: "site-id" },
              isRequired: true,
            },
            {
              name: "--branch",
              description: "Name of VCS branch to deploy changes automatically",
              args: { name: "branch" },
            },
          ],
        },
        {
          name: "update-rule-status",
          description:
            "If not succeeded yet, retry verification process of a proxy rule domain",
          icon,
          options: [
            {
              name: "--rule-id",
              description: "Rule ID",
              args: { name: "rule-id" },
              isRequired: true,
            },
          ],
        },
      ],
    },
    {
      name: "advisor",
      description:
        "The Advisor service surfaces actionable reports about your project resources, with CTA descriptors for one-click remediation in the console",
      icon,
      subcommands: [
        {
          name: "list-reports",
          description: "Get a list of all the project's analyzer reports",
          icon,
          options: [
            {
              name: "--queries",
              description:
                "Array of query strings generated using the Query class provided by the SDK",
              args: { name: "queries" },
              isRepeatable: true,
            },
            {
              name: "--total",
              description:
                "When set to false, the total count returned will be 0 and will not be calculated",
            },
            ...listOptions,
          ],
        },
        {
          name: "get-report",
          description: "Get an analyzer report by its unique ID",
          icon,
          options: [
            {
              name: "--report-id",
              description: "Report ID",
              args: { name: "report-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "delete-report",
          description: "Delete an analyzer report by its unique ID",
          icon,
          options: [
            {
              name: "--report-id",
              description: "Report ID",
              args: { name: "report-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "list-insights",
          description:
            "List the insights produced under a single analyzer report",
          icon,
          options: [
            {
              name: "--report-id",
              description: "Parent report ID",
              args: { name: "report-id" },
              isRequired: true,
            },
            {
              name: "--queries",
              description:
                "Array of query strings generated using the Query class provided by the SDK",
              args: { name: "queries" },
              isRepeatable: true,
            },
            {
              name: "--total",
              description:
                "When set to false, the total count returned will be 0 and will not be calculated",
            },
            ...listOptions,
          ],
        },
        {
          name: "get-insight",
          description:
            "Get an insight by its unique ID, scoped to its parent report",
          icon,
          options: [
            {
              name: "--report-id",
              description: "Parent report ID",
              args: { name: "report-id" },
              isRequired: true,
            },
            {
              name: "--insight-id",
              description: "Insight ID",
              args: { name: "insight-id" },
              isRequired: true,
            },
          ],
        },
      ],
    },
    {
      name: "sites",
      description: "Static and SSR sites and their deployments",
      icon,
      subcommands: [
        {
          name: "list",
          description: "Get a list of all the project's sites",
          icon,
          options: [
            {
              name: "--queries",
              description:
                "Array of query strings generated using the Query class provided by the SDK",
              args: { name: "queries" },
              isRepeatable: true,
            },
            {
              name: "--search",
              description: "Search term to filter your list results",
              args: { name: "search" },
            },
            {
              name: "--total",
              description:
                "When set to false, the total count returned will be 0 and will not be calculated",
            },
            ...listOptions,
          ],
        },
        {
          name: "create",
          description: "Create a new site",
          icon,
          options: [
            {
              name: "--site-id",
              description: "Site ID",
              args: { name: "site-id" },
              isRequired: true,
            },
            {
              name: "--name",
              description: "Site name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--framework",
              description: "Sites framework",
              args: { name: "framework" },
              isRequired: true,
            },
            {
              name: "--build-runtime",
              description: "Runtime to use during build step",
              args: { name: "build-runtime" },
              isRequired: true,
            },
            {
              name: "--enabled",
              description:
                "Is site enabled? When set to 'disabled', users cannot access the site but Server SDKs with and API key can still access the site",
            },
            {
              name: "--logging",
              description:
                "When disabled, request logs will exclude logs and errors, and site responses will be slightly faster",
            },
            {
              name: "--timeout",
              description: "Maximum request time in seconds",
              args: { name: "timeout" },
            },
            {
              name: "--install-command",
              description: "Install Command",
              args: { name: "install-command" },
            },
            {
              name: "--build-command",
              description: "Build Command",
              args: { name: "build-command" },
            },
            {
              name: "--start-command",
              description: "Custom start command",
              args: { name: "start-command" },
            },
            {
              name: "--output-directory",
              description: "Output Directory for site",
              args: { name: "output-directory" },
            },
            {
              name: "--adapter",
              description: "Framework adapter defining rendering strategy",
              args: { name: "adapter", suggestions: ["static", "ssr"] },
            },
            {
              name: "--installation-id",
              description:
                "Appwrite Installation ID for VCS (Version Control System) deployment",
              args: { name: "installation-id" },
            },
            {
              name: "--fallback-file",
              description: "Fallback file for single page application sites",
              args: { name: "fallback-file" },
            },
            {
              name: "--provider-repository-id",
              description: "Repository ID of the repo linked to the site",
              args: { name: "provider-repository-id" },
            },
            {
              name: "--provider-branch",
              description: "Production branch for the repo linked to the site",
              args: { name: "provider-branch" },
            },
            {
              name: "--provider-silent-mode",
              description:
                "Is the VCS (Version Control System) connection in silent mode for the repo linked to the site? In silent mode, no comments or checks are posted to commits and pull requests",
            },
            {
              name: "--provider-root-directory",
              description: "Path to site code in the linked repo",
              args: { name: "provider-root-directory" },
            },
            {
              name: "--provider-branches",
              description:
                "List of branch name patterns to trigger automatic deployments",
              args: { name: "provider-branches" },
              isRepeatable: true,
            },
            {
              name: "--provider-paths",
              description:
                "List of file path patterns to trigger automatic deployments",
              args: { name: "provider-paths" },
              isRepeatable: true,
            },
            {
              name: "--build-specification",
              description: "Build specification for the site deployments",
              args: { name: "build-specification" },
            },
            {
              name: "--runtime-specification",
              description: "Runtime specification for the SSR executions",
              args: { name: "runtime-specification" },
            },
            {
              name: "--deployment-retention",
              description:
                "Days to keep non-active deployments before deletion",
              args: { name: "deployment-retention" },
            },
            {
              name: "--scopes",
              description:
                "List of scopes allowed for API key auto-generated for every site build and SSR execution",
              args: { name: "scopes" },
              isRepeatable: true,
            },
            {
              name: "--description",
              description: "Optional description for the site",
              args: { name: "description" },
            },
            {
              name: "--provider-comments",
              description:
                "Post a build summary on pull requests for the repo linked to the site",
            },
            {
              name: "--provider-deployments",
              description:
                "Deploy every push that matches the branch and path rules for the repo linked to the site",
            },
            {
              name: "--provider-statuses",
              description:
                "Report the build status on each commit for the repo linked to the site",
            },
          ],
        },
        {
          name: "list-frameworks",
          description:
            "Get a list of all frameworks that are currently available on the server instance",
          icon,
          options: [
            {
              name: "--total",
              description:
                "When set to false, the total count returned will be 0 and will not be calculated",
            },
          ],
        },
        {
          name: "list-specifications",
          description: "List allowed site specifications for this instance",
          icon,
          options: [
            {
              name: "--type",
              description: "Specification type to list",
              args: { name: "type", suggestions: ["runtimes", "builds"] },
            },
            {
              name: "--total",
              description:
                "When set to false, the total count returned will be 0 and will not be calculated",
            },
          ],
        },
        {
          name: "get",
          description: "Get a site by its unique ID",
          icon,
          options: [
            {
              name: "--site-id",
              description: "Site ID",
              args: { name: "site-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "update",
          description: "Update site by its unique ID",
          icon,
          options: [
            {
              name: "--site-id",
              description: "Site ID",
              args: { name: "site-id" },
              isRequired: true,
            },
            {
              name: "--name",
              description: "Site name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--framework",
              description: "Sites framework",
              args: { name: "framework" },
              isRequired: true,
            },
            {
              name: "--enabled",
              description:
                "Is site enabled? When set to 'disabled', users cannot access the site but Server SDKs with and API key can still access the site",
            },
            {
              name: "--logging",
              description:
                "When disabled, request logs will exclude logs and errors, and site responses will be slightly faster",
            },
            {
              name: "--timeout",
              description: "Maximum request time in seconds",
              args: { name: "timeout" },
            },
            {
              name: "--install-command",
              description: "Install Command",
              args: { name: "install-command" },
            },
            {
              name: "--build-command",
              description: "Build Command",
              args: { name: "build-command" },
            },
            {
              name: "--start-command",
              description: "Custom start command",
              args: { name: "start-command" },
            },
            {
              name: "--output-directory",
              description: "Output Directory for site",
              args: { name: "output-directory" },
            },
            {
              name: "--build-runtime",
              description: "Runtime to use during build step",
              args: { name: "build-runtime" },
            },
            {
              name: "--adapter",
              description: "Framework adapter defining rendering strategy",
              args: { name: "adapter", suggestions: ["static", "ssr"] },
            },
            {
              name: "--fallback-file",
              description: "Fallback file for single page application sites",
              args: { name: "fallback-file" },
            },
            {
              name: "--installation-id",
              description:
                "Appwrite Installation ID for VCS (Version Control System) deployment",
              args: { name: "installation-id" },
            },
            {
              name: "--provider-repository-id",
              description: "Repository ID of the repo linked to the site",
              args: { name: "provider-repository-id" },
            },
            {
              name: "--provider-branch",
              description: "Production branch for the repo linked to the site",
              args: { name: "provider-branch" },
            },
            {
              name: "--provider-silent-mode",
              description:
                "Is the VCS (Version Control System) connection in silent mode for the repo linked to the site? In silent mode, no comments or checks are posted to commits and pull requests",
            },
            {
              name: "--provider-root-directory",
              description: "Path to site code in the linked repo",
              args: { name: "provider-root-directory" },
            },
            {
              name: "--provider-branches",
              description:
                "List of branch name patterns to trigger automatic deployments",
              args: { name: "provider-branches" },
              isRepeatable: true,
            },
            {
              name: "--provider-paths",
              description:
                "List of file path patterns to trigger automatic deployments",
              args: { name: "provider-paths" },
              isRepeatable: true,
            },
            {
              name: "--build-specification",
              description: "Build specification for the site deployments",
              args: { name: "build-specification" },
            },
            {
              name: "--runtime-specification",
              description: "Runtime specification for the SSR executions",
              args: { name: "runtime-specification" },
            },
            {
              name: "--deployment-retention",
              description:
                "Days to keep non-active deployments before deletion",
              args: { name: "deployment-retention" },
            },
            {
              name: "--scopes",
              description:
                "List of scopes allowed for API key auto-generated for every site build and SSR execution",
              args: { name: "scopes" },
              isRepeatable: true,
            },
            {
              name: "--description",
              description: "Optional description for the site",
              args: { name: "description" },
            },
            {
              name: "--provider-comments",
              description:
                "Post a build summary on pull requests for the repo linked to the site",
            },
            {
              name: "--provider-deployments",
              description:
                "Deploy every push that matches the branch and path rules for the repo linked to the site",
            },
            {
              name: "--provider-statuses",
              description:
                "Report the build status on each commit for the repo linked to the site",
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a site by its unique ID",
          icon,
          options: [
            {
              name: "--site-id",
              description: "Site ID",
              args: { name: "site-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "update-analytics",
          description: "Turn analytics on or off for a site",
          icon,
          options: [
            {
              name: "--site-id",
              description: "Site ID",
              args: { name: "site-id" },
              isRequired: true,
            },
            {
              name: "--enabled",
              description:
                "Inject the analytics tracker into the site's production domains",
              isRequired: true,
            },
          ],
        },
        {
          name: "update-site-deployment",
          description: "Update the site active deployment",
          icon,
          options: [
            {
              name: "--site-id",
              description: "Site ID",
              args: { name: "site-id" },
              isRequired: true,
            },
            {
              name: "--deployment-id",
              description: "Deployment ID",
              args: { name: "deployment-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "list-deployments",
          description: "Get a list of all the site's code deployments",
          icon,
          options: [
            {
              name: "--site-id",
              description: "Site ID",
              args: { name: "site-id" },
              isRequired: true,
            },
            {
              name: "--queries",
              description:
                "Array of query strings generated using the Query class provided by the SDK",
              args: { name: "queries" },
              isRepeatable: true,
            },
            {
              name: "--search",
              description: "Search term to filter your list results",
              args: { name: "search" },
            },
            {
              name: "--total",
              description:
                "When set to false, the total count returned will be 0 and will not be calculated",
            },
            ...listOptions,
          ],
        },
        {
          name: "create-deployment",
          description: "Create a new site code deployment",
          icon,
          options: [
            {
              name: "--site-id",
              description: "Site ID",
              args: { name: "site-id" },
              isRequired: true,
            },
            {
              name: "--code",
              description: "Gzip file with your code package",
              args: { name: "code" },
              isRequired: true,
            },
            {
              name: "--install-command",
              description: "Install Commands",
              args: { name: "install-command" },
            },
            {
              name: "--build-command",
              description: "Build Commands",
              args: { name: "build-command" },
            },
            {
              name: "--output-directory",
              description: "Output Directory",
              args: { name: "output-directory" },
            },
            {
              name: "--activate",
              description:
                "Automatically activate the deployment when it is finished building",
            },
          ],
        },
        {
          name: "create-duplicate-deployment",
          description: "Create a new build for an existing site deployment",
          icon,
          options: [
            {
              name: "--site-id",
              description: "Site ID",
              args: { name: "site-id" },
              isRequired: true,
            },
            {
              name: "--deployment-id",
              description: "Deployment ID",
              args: { name: "deployment-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "create-template-deployment",
          description: "Create a deployment based on a template",
          icon,
          options: [
            {
              name: "--site-id",
              description: "Site ID",
              args: { name: "site-id" },
              isRequired: true,
            },
            {
              name: "--repository",
              description: "Repository name of the template",
              args: { name: "repository" },
              isRequired: true,
            },
            {
              name: "--owner",
              description: "The name of the owner of the template",
              args: { name: "owner" },
              isRequired: true,
            },
            {
              name: "--root-directory",
              description: "Path to site code in the template repo",
              args: { name: "root-directory" },
              isRequired: true,
            },
            {
              name: "--type",
              description: "Type for the reference provided",
              args: { name: "type", suggestions: ["commit", "branch", "tag"] },
              isRequired: true,
            },
            {
              name: "--reference",
              description:
                "Reference value, can be a commit hash, branch name, or release tag",
              args: { name: "reference" },
              isRequired: true,
            },
            {
              name: "--activate",
              description:
                "Automatically activate the deployment when it is finished building",
            },
          ],
        },
        {
          name: "create-vcs-deployment",
          description: "Create a deployment when a site is connected to VCS",
          icon,
          options: [
            {
              name: "--site-id",
              description: "Site ID",
              args: { name: "site-id" },
              isRequired: true,
            },
            {
              name: "--type",
              description: "Type of reference passed",
              args: { name: "type", suggestions: ["branch", "commit"] },
              isRequired: true,
            },
            {
              name: "--reference",
              description: "VCS reference to create deployment from",
              args: { name: "reference" },
              isRequired: true,
            },
            {
              name: "--activate",
              description:
                "Automatically activate the deployment when it is finished building",
            },
          ],
        },
        {
          name: "get-deployment",
          description: "Get a site deployment by its unique ID",
          icon,
          options: [
            {
              name: "--site-id",
              description: "Site ID",
              args: { name: "site-id" },
              isRequired: true,
            },
            {
              name: "--deployment-id",
              description: "Deployment ID",
              args: { name: "deployment-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "delete-deployment",
          description: "Delete a site deployment by its unique ID",
          icon,
          options: [
            {
              name: "--site-id",
              description: "Site ID",
              args: { name: "site-id" },
              isRequired: true,
            },
            {
              name: "--deployment-id",
              description: "Deployment ID",
              args: { name: "deployment-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "get-deployment-download",
          description: "Get a site deployment content by its unique ID",
          icon,
          options: [
            {
              name: "--site-id",
              description: "Site ID",
              args: { name: "site-id" },
              isRequired: true,
            },
            {
              name: "--deployment-id",
              description: "Deployment ID",
              args: { name: "deployment-id" },
              isRequired: true,
            },
            {
              name: "--type",
              description: "Deployment file to download",
              args: { name: "type" },
            },
            {
              name: "--token",
              description:
                "Presigned source-download token for accessing this deployment without a session (jobs-service)",
              args: { name: "token" },
            },
            {
              name: "--destination",
              description: "Path to save the file to",
              args: { name: "destination" },
              isRequired: true,
            },
          ],
        },
        {
          name: "update-deployment-status",
          description: "Cancel an ongoing site deployment build",
          icon,
          options: [
            {
              name: "--site-id",
              description: "Site ID",
              args: { name: "site-id" },
              isRequired: true,
            },
            {
              name: "--deployment-id",
              description: "Deployment ID",
              args: { name: "deployment-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "list-logs",
          description: "Get a list of all site logs",
          icon,
          options: [
            {
              name: "--site-id",
              description: "Site ID",
              args: { name: "site-id" },
              isRequired: true,
            },
            {
              name: "--queries",
              description:
                "Array of query strings generated using the Query class provided by the SDK",
              args: { name: "queries" },
              isRepeatable: true,
            },
            {
              name: "--total",
              description:
                "When set to false, the total count returned will be 0 and will not be calculated",
            },
            ...listOptions,
          ],
        },
        {
          name: "get-log",
          description: "Get a site request log by its unique ID",
          icon,
          options: [
            {
              name: "--site-id",
              description: "Site ID",
              args: { name: "site-id" },
              isRequired: true,
            },
            {
              name: "--log-id",
              description: "Log ID",
              args: { name: "log-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "delete-log",
          description: "Delete a site log by its unique ID",
          icon,
          options: [
            {
              name: "--site-id",
              description: "Site ID",
              args: { name: "site-id" },
              isRequired: true,
            },
            {
              name: "--log-id",
              description: "Log ID",
              args: { name: "log-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "list-variables",
          description: "Get a list of all variables of a specific site",
          icon,
          options: [
            {
              name: "--site-id",
              description: "Site unique ID",
              args: { name: "site-id" },
              isRequired: true,
            },
            {
              name: "--queries",
              description:
                "Array of query strings generated using the Query class provided by the SDK",
              args: { name: "queries" },
              isRepeatable: true,
            },
            {
              name: "--total",
              description:
                "When set to false, the total count returned will be 0 and will not be calculated",
            },
            ...listOptions,
          ],
        },
        {
          name: "create-variable",
          description: "Create a new site variable",
          icon,
          options: [
            {
              name: "--site-id",
              description: "Site unique ID",
              args: { name: "site-id" },
              isRequired: true,
            },
            {
              name: "--variable-id",
              description: "Variable ID",
              args: { name: "variable-id" },
              isRequired: true,
            },
            {
              name: "--key",
              description: "Variable key",
              args: { name: "key" },
              isRequired: true,
            },
            {
              name: "--value",
              description: "Variable value",
              args: { name: "value" },
              isRequired: true,
            },
            {
              name: "--secret",
              description:
                "Secret variables can be updated or deleted, but only sites can read them during build and runtime",
            },
            {
              name: "--description",
              description: "Optional description for the variable",
              args: { name: "description" },
            },
          ],
        },
        {
          name: "get-variable",
          description: "Get a variable by its unique ID",
          icon,
          options: [
            {
              name: "--site-id",
              description: "Site unique ID",
              args: { name: "site-id" },
              isRequired: true,
            },
            {
              name: "--variable-id",
              description: "Variable unique ID",
              args: { name: "variable-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "update-variable",
          description: "Update variable by its unique ID",
          icon,
          options: [
            {
              name: "--site-id",
              description: "Site unique ID",
              args: { name: "site-id" },
              isRequired: true,
            },
            {
              name: "--variable-id",
              description: "Variable unique ID",
              args: { name: "variable-id" },
              isRequired: true,
            },
            {
              name: "--key",
              description: "Variable key",
              args: { name: "key" },
            },
            {
              name: "--value",
              description: "Variable value",
              args: { name: "value" },
            },
            {
              name: "--secret",
              description:
                "Secret variables can be updated or deleted, but only sites can read them during build and runtime",
            },
            {
              name: "--description",
              description: "Optional description for the variable",
              args: { name: "description" },
            },
          ],
        },
        {
          name: "delete-variable",
          description: "Delete a variable by its unique ID",
          icon,
          options: [
            {
              name: "--site-id",
              description: "Site unique ID",
              args: { name: "site-id" },
              isRequired: true,
            },
            {
              name: "--variable-id",
              description: "Variable unique ID",
              args: { name: "variable-id" },
              isRequired: true,
            },
          ],
        },
      ],
    },
    {
      name: "storage",
      description: "Files and buckets",
      icon,
      subcommands: [
        {
          name: "list-buckets",
          description: "Get a list of all the storage buckets",
          icon,
          options: [
            {
              name: "--queries",
              description:
                "Array of query strings generated using the Query class provided by the SDK",
              args: { name: "queries" },
              isRepeatable: true,
            },
            {
              name: "--search",
              description: "Search term to filter your list results",
              args: { name: "search" },
            },
            {
              name: "--total",
              description:
                "When set to false, the total count returned will be 0 and will not be calculated",
            },
            ...listOptions,
          ],
        },
        {
          name: "create-bucket",
          description: "Create a new storage bucket",
          icon,
          options: [
            {
              name: "--bucket-id",
              description: "Unique Id",
              args: { name: "bucket-id" },
              isRequired: true,
            },
            {
              name: "--name",
              description: "Bucket name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--permissions",
              description: "An array of permission strings",
              args: { name: "permissions" },
              isRepeatable: true,
            },
            {
              name: "--file-security",
              description:
                "Enables configuring permissions for individual file",
            },
            {
              name: "--enabled",
              description:
                "Is bucket enabled? When set to 'disabled', users cannot access the files in this bucket but Server SDKs with and API key can still access the bucket",
            },
            {
              name: "--maximum-file-size",
              description: "Maximum file size allowed in bytes",
              args: { name: "maximum-file-size" },
            },
            {
              name: "--allowed-file-extensions",
              description: "Allowed file extensions",
              args: { name: "allowed-file-extensions" },
              isRepeatable: true,
            },
            {
              name: "--compression",
              description: "Compression algorithm chosen for compression",
              args: {
                name: "compression",
                suggestions: ["none", "gzip", "zstd"],
              },
            },
            {
              name: "--encryption",
              description:
                "Is encryption enabled? Files of any size are encrypted",
            },
            {
              name: "--antivirus",
              description:
                "Is virus scanning enabled? For file size above 20MB AntiVirus scanning is skipped even if it's enabled",
            },
            {
              name: "--transformations",
              description: "Are image transformations enabled?",
            },
            {
              name: "--description",
              description: "Optional description for the bucket",
              args: { name: "description" },
            },
            {
              name: "--strip-metadata",
              description:
                "Remove metadata such as location, device and capture time from uploaded images",
            },
          ],
        },
        {
          name: "get-bucket",
          description: "Get a storage bucket by its unique ID",
          icon,
          options: [
            {
              name: "--bucket-id",
              description: "Bucket unique ID",
              args: { name: "bucket-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "update-bucket",
          description: "Update a storage bucket by its unique ID",
          icon,
          options: [
            {
              name: "--bucket-id",
              description: "Bucket unique ID",
              args: { name: "bucket-id" },
              isRequired: true,
            },
            {
              name: "--name",
              description: "Bucket name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--permissions",
              description: "An array of permission strings",
              args: { name: "permissions" },
              isRepeatable: true,
            },
            {
              name: "--file-security",
              description:
                "Enables configuring permissions for individual file",
            },
            {
              name: "--enabled",
              description:
                "Is bucket enabled? When set to 'disabled', users cannot access the files in this bucket but Server SDKs with and API key can still access the bucket",
            },
            {
              name: "--maximum-file-size",
              description: "Maximum file size allowed in bytes",
              args: { name: "maximum-file-size" },
            },
            {
              name: "--allowed-file-extensions",
              description: "Allowed file extensions",
              args: { name: "allowed-file-extensions" },
              isRepeatable: true,
            },
            {
              name: "--compression",
              description: "Compression algorithm chosen for compression",
              args: {
                name: "compression",
                suggestions: ["none", "gzip", "zstd"],
              },
            },
            {
              name: "--encryption",
              description:
                "Is encryption enabled? Files of any size are encrypted",
            },
            {
              name: "--antivirus",
              description:
                "Is virus scanning enabled? For file size above 20MB AntiVirus scanning is skipped even if it's enabled",
            },
            {
              name: "--transformations",
              description: "Are image transformations enabled?",
            },
            {
              name: "--description",
              description: "Optional description for the bucket",
              args: { name: "description" },
            },
            {
              name: "--strip-metadata",
              description:
                "Remove metadata such as location, device and capture time from uploaded images",
            },
          ],
        },
        {
          name: "delete-bucket",
          description: "Delete a storage bucket by its unique ID",
          icon,
          options: [
            {
              name: "--bucket-id",
              description: "Bucket unique ID",
              args: { name: "bucket-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "list-files",
          description: "Get a list of all the user files",
          icon,
          options: [
            {
              name: "--bucket-id",
              description: "Storage bucket unique ID",
              args: { name: "bucket-id" },
              isRequired: true,
            },
            {
              name: "--queries",
              description:
                "Array of query strings generated using the Query class provided by the SDK",
              args: { name: "queries" },
              isRepeatable: true,
            },
            {
              name: "--search",
              description: "Search term to filter your list results",
              args: { name: "search" },
            },
            {
              name: "--total",
              description:
                "When set to false, the total count returned will be 0 and will not be calculated",
            },
            ...listOptions,
          ],
        },
        {
          name: "create-file",
          description: "Create a new file",
          icon,
          options: [
            {
              name: "--bucket-id",
              description: "Storage bucket unique ID",
              args: { name: "bucket-id" },
              isRequired: true,
            },
            {
              name: "--file-id",
              description: "File ID",
              args: { name: "file-id" },
              isRequired: true,
            },
            {
              name: "--file",
              description: "Binary file",
              args: { name: "file" },
              isRequired: true,
            },
            {
              name: "--permissions",
              description: "An array of permission strings",
              args: { name: "permissions" },
              isRepeatable: true,
            },
            {
              name: "--folder",
              description:
                'Virtual folder to place the file in, for example "photos/2026"',
              args: { name: "folder" },
            },
          ],
        },
        {
          name: "get-file",
          description: "Get a file by its unique ID",
          icon,
          options: [
            {
              name: "--bucket-id",
              description: "Storage bucket unique ID",
              args: { name: "bucket-id" },
              isRequired: true,
            },
            {
              name: "--file-id",
              description: "File ID",
              args: { name: "file-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "update-file",
          description: "Update a file by its unique ID",
          icon,
          options: [
            {
              name: "--bucket-id",
              description: "Bucket unique ID",
              args: { name: "bucket-id" },
              isRequired: true,
            },
            {
              name: "--file-id",
              description: "File ID",
              args: { name: "file-id" },
              isRequired: true,
            },
            {
              name: "--name",
              description: "File name",
              args: { name: "name" },
            },
            {
              name: "--permissions",
              description: "An array of permission strings",
              args: { name: "permissions" },
              isRepeatable: true,
            },
          ],
        },
        {
          name: "delete-file",
          description: "Delete a file by its unique ID",
          icon,
          options: [
            {
              name: "--bucket-id",
              description: "Storage bucket unique ID",
              args: { name: "bucket-id" },
              isRequired: true,
            },
            {
              name: "--file-id",
              description: "File ID",
              args: { name: "file-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "get-file-download",
          description: "Get a file content by its unique ID",
          icon,
          options: [
            {
              name: "--bucket-id",
              description: "Storage bucket ID",
              args: { name: "bucket-id" },
              isRequired: true,
            },
            {
              name: "--file-id",
              description: "File ID",
              args: { name: "file-id" },
              isRequired: true,
            },
            {
              name: "--token",
              description: "File token for accessing this file",
              args: { name: "token" },
            },
            {
              name: "--destination",
              description: "Path to save the file to",
              args: { name: "destination" },
              isRequired: true,
            },
          ],
        },
        {
          name: "get-file-preview",
          description: "Get a file preview image",
          icon,
          options: [
            {
              name: "--bucket-id",
              description: "Storage bucket unique ID",
              args: { name: "bucket-id" },
              isRequired: true,
            },
            {
              name: "--file-id",
              description: "File ID",
              args: { name: "file-id" },
              isRequired: true,
            },
            {
              name: "--width",
              description:
                "Resize preview image width, Pass an integer between 0 to 4000",
              args: { name: "width" },
            },
            {
              name: "--height",
              description:
                "Resize preview image height, Pass an integer between 0 to 4000",
              args: { name: "height" },
            },
            {
              name: "--gravity",
              description: "Image crop gravity",
              args: {
                name: "gravity",
                suggestions: [
                  "auto",
                  "center",
                  "top-left",
                  "top",
                  "top-right",
                  "left",
                  "right",
                  "bottom-left",
                  "bottom",
                  "bottom-right",
                ],
              },
            },
            {
              name: "--quality",
              description: "Preview image quality",
              args: { name: "quality" },
            },
            {
              name: "--border-width",
              description: "Preview image border in pixels",
              args: { name: "border-width" },
            },
            {
              name: "--border-color",
              description: "Preview image border color",
              args: { name: "border-color" },
            },
            {
              name: "--border-radius",
              description: "Preview image border radius in pixels",
              args: { name: "border-radius" },
            },
            {
              name: "--opacity",
              description: "Preview image opacity",
              args: { name: "opacity" },
            },
            {
              name: "--rotation",
              description: "Preview image rotation in degrees",
              args: { name: "rotation" },
            },
            {
              name: "--background",
              description: "Preview image background color",
              args: { name: "background" },
            },
            {
              name: "--output",
              description:
                "Output format type (jpeg, jpg, png, gif, webp, heic and avif)",
              args: {
                name: "output",
                suggestions: [
                  "jpeg",
                  "jpg",
                  "png",
                  "gif",
                  "webp",
                  "heic",
                  "avif",
                  "auto",
                ],
              },
            },
            {
              name: "--token",
              description: "File token for accessing this file",
              args: { name: "token" },
            },
            {
              name: "--destination",
              description: "Path to save the file to",
              args: { name: "destination" },
              isRequired: true,
            },
          ],
        },
        {
          name: "get-file-view",
          description: "Get a file content by its unique ID",
          icon,
          options: [
            {
              name: "--bucket-id",
              description: "Storage bucket unique ID",
              args: { name: "bucket-id" },
              isRequired: true,
            },
            {
              name: "--file-id",
              description: "File ID",
              args: { name: "file-id" },
              isRequired: true,
            },
            {
              name: "--token",
              description: "File token for accessing this file",
              args: { name: "token" },
            },
            {
              name: "--destination",
              description: "Path to save the file to",
              args: { name: "destination" },
              isRequired: true,
            },
          ],
        },
      ],
    },
    {
      name: ["tablesdb", "tables-db"],
      description: "Structured tables of rows and columns",
      icon,
      subcommands: [
        {
          name: "list",
          description:
            "Get a list of all databases from the current Appwrite project",
          icon,
          options: [
            {
              name: "--queries",
              description:
                "Array of query strings generated using the Query class provided by the SDK",
              args: { name: "queries" },
              isRepeatable: true,
            },
            {
              name: "--search",
              description: "Search term to filter your list results",
              args: { name: "search" },
            },
            {
              name: "--total",
              description:
                "When set to false, the total count returned will be 0 and will not be calculated",
            },
            ...listOptions,
          ],
        },
        {
          name: "create",
          description: "Create a new Database",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Unique Id",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--name",
              description: "Database name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--enabled",
              description:
                "Is the database enabled? When set to 'disabled', users cannot access the database but Server SDKs with an API key can still read and write to the database",
            },
            {
              name: "--description",
              description: "Optional description for the database",
              args: { name: "description" },
            },
            {
              name: "--specification",
              description: "Database specification",
              args: { name: "specification" },
            },
            {
              name: "--replicas",
              description:
                "Number of high availability replicas (0-5) for the dedicated database backing this database",
              args: { name: "replicas" },
            },
            {
              name: "--sync-mode",
              description:
                "Replication sync mode for the dedicated database backing this database",
              args: {
                name: "sync-mode",
                suggestions: ["async", "sync", "quorum"],
              },
            },
          ],
        },
        {
          name: "list-specifications",
          description:
            "List the dedicated database specifications available on the current plan",
          icon,
        },
        {
          name: "list-transactions",
          description: "List transactions across all databases",
          icon,
          options: [
            {
              name: "--queries",
              description:
                "Array of query strings generated using the Query class provided by the SDK",
              args: { name: "queries" },
              isRepeatable: true,
            },
            {
              name: "--total",
              description:
                "When set to false, the total count returned will be 0 and will not be calculated",
            },
            ...listOptions,
          ],
        },
        {
          name: "create-transaction",
          description: "Create a new transaction",
          icon,
          options: [
            {
              name: "--ttl",
              description: "Seconds before the transaction expires",
              args: { name: "ttl" },
            },
          ],
        },
        {
          name: "get-transaction",
          description: "Get a transaction by its unique ID",
          icon,
          options: [
            {
              name: "--transaction-id",
              description: "Transaction ID",
              args: { name: "transaction-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "update-transaction",
          description:
            "Update a transaction, to either commit or roll back its operations",
          icon,
          options: [
            {
              name: "--transaction-id",
              description: "Transaction ID",
              args: { name: "transaction-id" },
              isRequired: true,
            },
            { name: "--commit", description: "Commit transaction?" },
            { name: "--rollback", description: "Rollback transaction?" },
          ],
        },
        {
          name: "delete-transaction",
          description: "Delete a transaction by its unique ID",
          icon,
          options: [
            {
              name: "--transaction-id",
              description: "Transaction ID",
              args: { name: "transaction-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "create-operations",
          description: "Create multiple operations in a single transaction",
          icon,
          options: [
            {
              name: "--transaction-id",
              description: "Transaction ID",
              args: { name: "transaction-id" },
              isRequired: true,
            },
            {
              name: "--operations",
              description: "Array of staged operations",
              args: { name: "operations" },
              isRepeatable: true,
            },
          ],
        },
        {
          name: "get",
          description: "Get a database by its unique ID",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "update",
          description: "Update a database by its unique ID",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--name",
              description: "Database name",
              args: { name: "name" },
            },
            {
              name: "--enabled",
              description:
                "Is database enabled? When set to 'disabled', users cannot access the database but Server SDKs with an API key can still read and write to the database",
            },
            {
              name: "--description",
              description: "Optional description for the database",
              args: { name: "description" },
            },
            {
              name: "--specification",
              description: "Database specification",
              args: { name: "specification" },
            },
            {
              name: "--replicas",
              description:
                "Number of high availability replicas (0-5) for the dedicated database backing this database",
              args: { name: "replicas" },
            },
            {
              name: "--sync-mode",
              description:
                "Replication sync mode for the dedicated database backing this database",
              args: {
                name: "sync-mode",
                suggestions: ["async", "sync", "quorum"],
              },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a database by its unique ID",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "create-failover",
          description:
            "Trigger a manual failover for a dedicated database with high availability enabled",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--target-replica-id",
              description: "Target replica ID to promote",
              args: { name: "target-replica-id" },
            },
          ],
        },
        {
          name: "list-migrations",
          description: "List the dedicated migrations for a TablesDB database",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "create-migration",
          description:
            "Start migrating a serverless TablesDB database onto a dedicated MySQL compute",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--specification",
              description:
                "Dedicated compute specification to provision as the migration target (e.g. s-2vcpu-4gb)",
              args: { name: "specification" },
              isRequired: true,
            },
            {
              name: "--auto-cutover",
              description:
                "Whether to cut over automatically once the copy is verified",
            },
          ],
        },
        {
          name: "get-migration",
          description:
            "Get a single dedicated migration for a TablesDB database by its ID",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--migration-id",
              description: "Migration ID",
              args: { name: "migration-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "delete-migration",
          description: "Abort an in-flight TablesDB dedicated migration",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--migration-id",
              description: "Migration ID",
              args: { name: "migration-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "create-cutover",
          description:
            "Cut a verified TablesDB migration over to its dedicated compute",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--migration-id",
              description: "Migration ID",
              args: { name: "migration-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "list-operations",
          description:
            "List the lifecycle operations recorded for a dedicated database, newest first",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--status",
              description: "Filter by operation status",
              args: { name: "status" },
            },
            {
              name: "--limit",
              description: "Maximum number of operations to return",
              args: { name: "limit" },
            },
            {
              name: "--offset",
              description: "Number of operations to skip",
              args: { name: "offset" },
            },
          ],
        },
        {
          name: "get-replicas",
          description: "Get high availability status for a dedicated database",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "get-status",
          description:
            "Get real-time health and status information for a dedicated database",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "list-tables",
          description:
            "Get a list of all tables that belong to the provided databaseId",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--queries",
              description:
                "Array of query strings generated using the Query class provided by the SDK",
              args: { name: "queries" },
              isRepeatable: true,
            },
            {
              name: "--search",
              description: "Search term to filter your list results",
              args: { name: "search" },
            },
            {
              name: "--total",
              description:
                "When set to false, the total count returned will be 0 and will not be calculated",
            },
            ...listOptions,
          ],
        },
        {
          name: "create-table",
          description: "Create a new Table",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--table-id",
              description: "Unique Id",
              args: { name: "table-id" },
              isRequired: true,
            },
            {
              name: "--name",
              description: "Table name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--permissions",
              description: "An array of permissions strings",
              args: { name: "permissions" },
              isRepeatable: true,
            },
            {
              name: "--row-security",
              description:
                "Enables configuring permissions for individual rows",
            },
            {
              name: "--enabled",
              description:
                "Is table enabled? When set to 'disabled', users cannot access the table but Server SDKs with and API key can still read and write to the table",
            },
            {
              name: "--columns",
              description: "Array of column definitions to create",
              args: { name: "columns" },
              isRepeatable: true,
            },
            {
              name: "--indexes",
              description: "Array of index definitions to create",
              args: { name: "indexes" },
              isRepeatable: true,
            },
            {
              name: "--description",
              description: "Optional description for the table",
              args: { name: "description" },
            },
          ],
        },
        {
          name: "get-table",
          description: "Get a table by its unique ID",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--table-id",
              description: "Table ID",
              args: { name: "table-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "update-table",
          description: "Update a table by its unique ID",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--table-id",
              description: "Table ID",
              args: { name: "table-id" },
              isRequired: true,
            },
            {
              name: "--name",
              description: "Table name",
              args: { name: "name" },
            },
            {
              name: "--permissions",
              description: "An array of permission strings",
              args: { name: "permissions" },
              isRepeatable: true,
            },
            {
              name: "--row-security",
              description:
                "Enables configuring permissions for individual rows",
            },
            {
              name: "--enabled",
              description:
                "Is table enabled? When set to 'disabled', users cannot access the table but Server SDKs with and API key can still read and write to the table",
            },
            {
              name: "--purge",
              description:
                "When true, purge all cached list responses for this table as part of the update",
            },
            {
              name: "--description",
              description: "Optional description for the table",
              args: { name: "description" },
            },
          ],
        },
        {
          name: "delete-table",
          description: "Delete a table by its unique ID",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--table-id",
              description: "Table ID",
              args: { name: "table-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "list-columns",
          description: "List columns in the table",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--table-id",
              description: "Table ID",
              args: { name: "table-id" },
              isRequired: true,
            },
            {
              name: "--queries",
              description:
                "Array of query strings generated using the Query class provided by the SDK",
              args: { name: "queries" },
              isRepeatable: true,
            },
            {
              name: "--total",
              description:
                "When set to false, the total count returned will be 0 and will not be calculated",
            },
            ...listOptions,
          ],
        },
        {
          name: "create-big-int-column",
          description: "Create a bigint column",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--table-id",
              description: "Table ID",
              args: { name: "table-id" },
              isRequired: true,
            },
            {
              name: "--key",
              description: "Column Key",
              args: { name: "key" },
              isRequired: true,
            },
            {
              name: "--required",
              description: "Is column required?",
              isRequired: true,
            },
            {
              name: "--min",
              description: "Minimum value",
              args: { name: "min" },
            },
            {
              name: "--max",
              description: "Maximum value",
              args: { name: "max" },
            },
            {
              name: "--xdefault",
              description: "Default value",
              args: { name: "xdefault" },
            },
            { name: "--array", description: "Is column an array?" },
            {
              name: "--description",
              description: "Optional description for the column",
              args: { name: "description" },
            },
          ],
        },
        {
          name: "update-big-int-column",
          description: "Update a bigint column",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--table-id",
              description: "Table ID",
              args: { name: "table-id" },
              isRequired: true,
            },
            {
              name: "--key",
              description: "Column Key",
              args: { name: "key" },
              isRequired: true,
            },
            {
              name: "--required",
              description: "Is column required?",
              isRequired: true,
            },
            {
              name: "--xdefault",
              description: "Default value",
              args: { name: "xdefault" },
              isRequired: true,
            },
            {
              name: "--min",
              description: "Minimum value",
              args: { name: "min" },
            },
            {
              name: "--max",
              description: "Maximum value",
              args: { name: "max" },
            },
            {
              name: "--new-key",
              description: "New Column Key",
              args: { name: "new-key" },
            },
            {
              name: "--description",
              description: "Optional description for the column",
              args: { name: "description" },
            },
          ],
        },
        {
          name: "create-boolean-column",
          description: "Create a boolean column",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--table-id",
              description: "Table ID",
              args: { name: "table-id" },
              isRequired: true,
            },
            {
              name: "--key",
              description: "Column Key",
              args: { name: "key" },
              isRequired: true,
            },
            {
              name: "--required",
              description: "Is column required?",
              isRequired: true,
            },
            {
              name: "--xdefault",
              description: "Default value for column when not provided",
            },
            { name: "--array", description: "Is column an array?" },
            {
              name: "--description",
              description: "Optional description for the column",
              args: { name: "description" },
            },
          ],
        },
        {
          name: "update-boolean-column",
          description: "Update a boolean column",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--table-id",
              description: "Table ID",
              args: { name: "table-id" },
              isRequired: true,
            },
            {
              name: "--key",
              description: "Column Key",
              args: { name: "key" },
              isRequired: true,
            },
            {
              name: "--required",
              description: "Is column required?",
              isRequired: true,
            },
            {
              name: "--xdefault",
              description: "Default value for column when not provided",
              isRequired: true,
            },
            {
              name: "--new-key",
              description: "New Column Key",
              args: { name: "new-key" },
            },
            {
              name: "--description",
              description: "Optional description for the column",
              args: { name: "description" },
            },
          ],
        },
        {
          name: "create-datetime-column",
          description:
            "Create a date time column according to the ISO 8601 standard",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--table-id",
              description: "Table ID",
              args: { name: "table-id" },
              isRequired: true,
            },
            {
              name: "--key",
              description: "Column Key",
              args: { name: "key" },
              isRequired: true,
            },
            {
              name: "--required",
              description: "Is column required?",
              isRequired: true,
            },
            {
              name: "--xdefault",
              description:
                "Default value for the column in ISO 8601 (https://www.iso.org/iso-8601-date-and-time-format.html) format",
              args: { name: "xdefault" },
            },
            { name: "--array", description: "Is column an array?" },
            {
              name: "--description",
              description: "Optional description for the column",
              args: { name: "description" },
            },
          ],
        },
        {
          name: "update-datetime-column",
          description: "Update a date time column",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--table-id",
              description: "Table ID",
              args: { name: "table-id" },
              isRequired: true,
            },
            {
              name: "--key",
              description: "Column Key",
              args: { name: "key" },
              isRequired: true,
            },
            {
              name: "--required",
              description: "Is column required?",
              isRequired: true,
            },
            {
              name: "--xdefault",
              description: "Default value for column when not provided",
              args: { name: "xdefault" },
              isRequired: true,
            },
            {
              name: "--new-key",
              description: "New Column Key",
              args: { name: "new-key" },
            },
            {
              name: "--description",
              description: "Optional description for the column",
              args: { name: "description" },
            },
          ],
        },
        {
          name: "create-email-column",
          description: "Create an email column",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--table-id",
              description: "Table ID",
              args: { name: "table-id" },
              isRequired: true,
            },
            {
              name: "--key",
              description: "Column Key",
              args: { name: "key" },
              isRequired: true,
            },
            {
              name: "--required",
              description: "Is column required?",
              isRequired: true,
            },
            {
              name: "--xdefault",
              description: "Default value for column when not provided",
              args: { name: "xdefault" },
            },
            { name: "--array", description: "Is column an array?" },
            {
              name: "--description",
              description: "Optional description for the column",
              args: { name: "description" },
            },
          ],
        },
        {
          name: "update-email-column",
          description: "Update an email column",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--table-id",
              description: "Table ID",
              args: { name: "table-id" },
              isRequired: true,
            },
            {
              name: "--key",
              description: "Column Key",
              args: { name: "key" },
              isRequired: true,
            },
            {
              name: "--required",
              description: "Is column required?",
              isRequired: true,
            },
            {
              name: "--xdefault",
              description: "Default value for column when not provided",
              args: { name: "xdefault" },
              isRequired: true,
            },
            {
              name: "--new-key",
              description: "New Column Key",
              args: { name: "new-key" },
            },
            {
              name: "--description",
              description: "Optional description for the column",
              args: { name: "description" },
            },
          ],
        },
        {
          name: "create-enum-column",
          description: "Create an enumeration column",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--table-id",
              description: "Table ID",
              args: { name: "table-id" },
              isRequired: true,
            },
            {
              name: "--key",
              description: "Column Key",
              args: { name: "key" },
              isRequired: true,
            },
            {
              name: "--elements",
              description: "Array of enum values",
              args: { name: "elements" },
              isRepeatable: true,
              isRequired: true,
            },
            {
              name: "--required",
              description: "Is column required?",
              isRequired: true,
            },
            {
              name: "--xdefault",
              description: "Default value for column when not provided",
              args: { name: "xdefault" },
            },
            { name: "--array", description: "Is column an array?" },
            {
              name: "--description",
              description: "Optional description for the column",
              args: { name: "description" },
            },
          ],
        },
        {
          name: "update-enum-column",
          description: "Update an enum column",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--table-id",
              description: "Table ID",
              args: { name: "table-id" },
              isRequired: true,
            },
            {
              name: "--key",
              description: "Column Key",
              args: { name: "key" },
              isRequired: true,
            },
            {
              name: "--elements",
              description: "Updated list of enum values",
              args: { name: "elements" },
              isRepeatable: true,
              isRequired: true,
            },
            {
              name: "--required",
              description: "Is column required?",
              isRequired: true,
            },
            {
              name: "--xdefault",
              description: "Default value for column when not provided",
              args: { name: "xdefault" },
              isRequired: true,
            },
            {
              name: "--new-key",
              description: "New Column Key",
              args: { name: "new-key" },
            },
            {
              name: "--description",
              description: "Optional description for the column",
              args: { name: "description" },
            },
          ],
        },
        {
          name: "create-float-column",
          description: "Create a float column",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--table-id",
              description: "Table ID",
              args: { name: "table-id" },
              isRequired: true,
            },
            {
              name: "--key",
              description: "Column Key",
              args: { name: "key" },
              isRequired: true,
            },
            {
              name: "--required",
              description: "Is column required?",
              isRequired: true,
            },
            {
              name: "--min",
              description: "Minimum value",
              args: { name: "min" },
            },
            {
              name: "--max",
              description: "Maximum value",
              args: { name: "max" },
            },
            {
              name: "--xdefault",
              description: "Default value",
              args: { name: "xdefault" },
            },
            { name: "--array", description: "Is column an array?" },
            {
              name: "--description",
              description: "Optional description for the column",
              args: { name: "description" },
            },
          ],
        },
        {
          name: "update-float-column",
          description: "Update a float column",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--table-id",
              description: "Table ID",
              args: { name: "table-id" },
              isRequired: true,
            },
            {
              name: "--key",
              description: "Column Key",
              args: { name: "key" },
              isRequired: true,
            },
            {
              name: "--required",
              description: "Is column required?",
              isRequired: true,
            },
            {
              name: "--xdefault",
              description: "Default value",
              args: { name: "xdefault" },
              isRequired: true,
            },
            {
              name: "--min",
              description: "Minimum value",
              args: { name: "min" },
            },
            {
              name: "--max",
              description: "Maximum value",
              args: { name: "max" },
            },
            {
              name: "--new-key",
              description: "New Column Key",
              args: { name: "new-key" },
            },
            {
              name: "--description",
              description: "Optional description for the column",
              args: { name: "description" },
            },
          ],
        },
        {
          name: "create-integer-column",
          description: "Create an integer column",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--table-id",
              description: "Table ID",
              args: { name: "table-id" },
              isRequired: true,
            },
            {
              name: "--key",
              description: "Column Key",
              args: { name: "key" },
              isRequired: true,
            },
            {
              name: "--required",
              description: "Is column required?",
              isRequired: true,
            },
            {
              name: "--min",
              description: "Minimum value",
              args: { name: "min" },
            },
            {
              name: "--max",
              description: "Maximum value",
              args: { name: "max" },
            },
            {
              name: "--xdefault",
              description: "Default value",
              args: { name: "xdefault" },
            },
            { name: "--array", description: "Is column an array?" },
            {
              name: "--description",
              description: "Optional description for the column",
              args: { name: "description" },
            },
          ],
        },
        {
          name: "update-integer-column",
          description: "Update an integer column",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--table-id",
              description: "Table ID",
              args: { name: "table-id" },
              isRequired: true,
            },
            {
              name: "--key",
              description: "Column Key",
              args: { name: "key" },
              isRequired: true,
            },
            {
              name: "--required",
              description: "Is column required?",
              isRequired: true,
            },
            {
              name: "--xdefault",
              description: "Default value",
              args: { name: "xdefault" },
              isRequired: true,
            },
            {
              name: "--min",
              description: "Minimum value",
              args: { name: "min" },
            },
            {
              name: "--max",
              description: "Maximum value",
              args: { name: "max" },
            },
            {
              name: "--new-key",
              description: "New Column Key",
              args: { name: "new-key" },
            },
            {
              name: "--description",
              description: "Optional description for the column",
              args: { name: "description" },
            },
          ],
        },
        {
          name: "create-ip-column",
          description: "Create IP address column",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--table-id",
              description: "Table ID",
              args: { name: "table-id" },
              isRequired: true,
            },
            {
              name: "--key",
              description: "Column Key",
              args: { name: "key" },
              isRequired: true,
            },
            {
              name: "--required",
              description: "Is column required?",
              isRequired: true,
            },
            {
              name: "--xdefault",
              description: "Default value",
              args: { name: "xdefault" },
            },
            { name: "--array", description: "Is column an array?" },
            {
              name: "--description",
              description: "Optional description for the column",
              args: { name: "description" },
            },
          ],
        },
        {
          name: "update-ip-column",
          description: "Update an ip column",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--table-id",
              description: "Table ID",
              args: { name: "table-id" },
              isRequired: true,
            },
            {
              name: "--key",
              description: "Column Key",
              args: { name: "key" },
              isRequired: true,
            },
            {
              name: "--required",
              description: "Is column required?",
              isRequired: true,
            },
            {
              name: "--xdefault",
              description: "Default value",
              args: { name: "xdefault" },
              isRequired: true,
            },
            {
              name: "--new-key",
              description: "New Column Key",
              args: { name: "new-key" },
            },
            {
              name: "--description",
              description: "Optional description for the column",
              args: { name: "description" },
            },
          ],
        },
        {
          name: "create-line-column",
          description: "Create a geometric line column",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--table-id",
              description: "Table ID",
              args: { name: "table-id" },
              isRequired: true,
            },
            {
              name: "--key",
              description: "Column Key",
              args: { name: "key" },
              isRequired: true,
            },
            {
              name: "--required",
              description: "Is column required?",
              isRequired: true,
            },
            {
              name: "--xdefault",
              description:
                "Default value for column when not provided, two-dimensional array of coordinate pairs, [[longitude, latitude], [longitude, latitude], …], listing the vertices of the line in order",
              args: { name: "xdefault" },
              isRepeatable: true,
            },
            {
              name: "--description",
              description: "Optional description for the column",
              args: { name: "description" },
            },
          ],
        },
        {
          name: "update-line-column",
          description: "Update a line column",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--table-id",
              description: "Table ID",
              args: { name: "table-id" },
              isRequired: true,
            },
            {
              name: "--key",
              description: "Column Key",
              args: { name: "key" },
              isRequired: true,
            },
            {
              name: "--required",
              description: "Is column required?",
              isRequired: true,
            },
            {
              name: "--xdefault",
              description:
                "Default value for column when not provided, two-dimensional array of coordinate pairs, [[longitude, latitude], [longitude, latitude], …], listing the vertices of the line in order",
              args: { name: "xdefault" },
              isRepeatable: true,
            },
            {
              name: "--new-key",
              description: "New Column Key",
              args: { name: "new-key" },
            },
            {
              name: "--description",
              description: "Optional description for the column",
              args: { name: "description" },
            },
          ],
        },
        {
          name: "create-longtext-column",
          description: "Create a longtext column",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--table-id",
              description: "Table ID",
              args: { name: "table-id" },
              isRequired: true,
            },
            {
              name: "--key",
              description: "Column Key",
              args: { name: "key" },
              isRequired: true,
            },
            {
              name: "--required",
              description: "Is column required?",
              isRequired: true,
            },
            {
              name: "--xdefault",
              description: "Default value for column when not provided",
              args: { name: "xdefault" },
            },
            { name: "--array", description: "Is column an array?" },
            {
              name: "--encrypt",
              description: "Toggle encryption for the column",
            },
            {
              name: "--description",
              description: "Optional description for the column",
              args: { name: "description" },
            },
          ],
        },
        {
          name: "update-longtext-column",
          description: "Update a longtext column",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--table-id",
              description: "Table ID",
              args: { name: "table-id" },
              isRequired: true,
            },
            {
              name: "--key",
              description: "Column Key",
              args: { name: "key" },
              isRequired: true,
            },
            {
              name: "--required",
              description: "Is column required?",
              isRequired: true,
            },
            {
              name: "--xdefault",
              description: "Default value for column when not provided",
              args: { name: "xdefault" },
              isRequired: true,
            },
            {
              name: "--new-key",
              description: "New Column Key",
              args: { name: "new-key" },
            },
            {
              name: "--description",
              description: "Optional description for the column",
              args: { name: "description" },
            },
          ],
        },
        {
          name: "create-mediumtext-column",
          description: "Create a mediumtext column",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--table-id",
              description: "Table ID",
              args: { name: "table-id" },
              isRequired: true,
            },
            {
              name: "--key",
              description: "Column Key",
              args: { name: "key" },
              isRequired: true,
            },
            {
              name: "--required",
              description: "Is column required?",
              isRequired: true,
            },
            {
              name: "--xdefault",
              description: "Default value for column when not provided",
              args: { name: "xdefault" },
            },
            { name: "--array", description: "Is column an array?" },
            {
              name: "--encrypt",
              description: "Toggle encryption for the column",
            },
            {
              name: "--description",
              description: "Optional description for the column",
              args: { name: "description" },
            },
          ],
        },
        {
          name: "update-mediumtext-column",
          description: "Update a mediumtext column",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--table-id",
              description: "Table ID",
              args: { name: "table-id" },
              isRequired: true,
            },
            {
              name: "--key",
              description: "Column Key",
              args: { name: "key" },
              isRequired: true,
            },
            {
              name: "--required",
              description: "Is column required?",
              isRequired: true,
            },
            {
              name: "--xdefault",
              description: "Default value for column when not provided",
              args: { name: "xdefault" },
              isRequired: true,
            },
            {
              name: "--new-key",
              description: "New Column Key",
              args: { name: "new-key" },
            },
            {
              name: "--description",
              description: "Optional description for the column",
              args: { name: "description" },
            },
          ],
        },
        {
          name: "create-point-column",
          description: "Create a geometric point column",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--table-id",
              description: "Table ID",
              args: { name: "table-id" },
              isRequired: true,
            },
            {
              name: "--key",
              description: "Column Key",
              args: { name: "key" },
              isRequired: true,
            },
            {
              name: "--required",
              description: "Is column required?",
              isRequired: true,
            },
            {
              name: "--xdefault",
              description:
                "Default value for column when not provided, array of two numbers [longitude, latitude], representing a single coordinate",
              args: { name: "xdefault" },
              isRepeatable: true,
            },
            {
              name: "--description",
              description: "Optional description for the column",
              args: { name: "description" },
            },
          ],
        },
        {
          name: "update-point-column",
          description: "Update a point column",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--table-id",
              description: "Table ID",
              args: { name: "table-id" },
              isRequired: true,
            },
            {
              name: "--key",
              description: "Column Key",
              args: { name: "key" },
              isRequired: true,
            },
            {
              name: "--required",
              description: "Is column required?",
              isRequired: true,
            },
            {
              name: "--xdefault",
              description:
                "Default value for column when not provided, array of two numbers [longitude, latitude], representing a single coordinate",
              args: { name: "xdefault" },
              isRepeatable: true,
            },
            {
              name: "--new-key",
              description: "New Column Key",
              args: { name: "new-key" },
            },
            {
              name: "--description",
              description: "Optional description for the column",
              args: { name: "description" },
            },
          ],
        },
        {
          name: "create-polygon-column",
          description: "Create a geometric polygon column",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--table-id",
              description: "Table ID",
              args: { name: "table-id" },
              isRequired: true,
            },
            {
              name: "--key",
              description: "Column Key",
              args: { name: "key" },
              isRequired: true,
            },
            {
              name: "--required",
              description: "Is column required?",
              isRequired: true,
            },
            {
              name: "--xdefault",
              description:
                "Default value for column when not provided, three-dimensional array where the outer array holds one or more linear rings, [[[longitude, latitude], …], …], the first ring is the exterior boundary, any additional rings are interior holes, and each ring must start and end with the same coordinate pair",
              args: { name: "xdefault" },
              isRepeatable: true,
            },
            {
              name: "--description",
              description: "Optional description for the column",
              args: { name: "description" },
            },
          ],
        },
        {
          name: "update-polygon-column",
          description: "Update a polygon column",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--table-id",
              description: "Table ID",
              args: { name: "table-id" },
              isRequired: true,
            },
            {
              name: "--key",
              description: "Column Key",
              args: { name: "key" },
              isRequired: true,
            },
            {
              name: "--required",
              description: "Is column required?",
              isRequired: true,
            },
            {
              name: "--xdefault",
              description:
                "Default value for column when not provided, three-dimensional array where the outer array holds one or more linear rings, [[[longitude, latitude], …], …], the first ring is the exterior boundary, any additional rings are interior holes, and each ring must start and end with the same coordinate pair",
              args: { name: "xdefault" },
              isRepeatable: true,
            },
            {
              name: "--new-key",
              description: "New Column Key",
              args: { name: "new-key" },
            },
            {
              name: "--description",
              description: "Optional description for the column",
              args: { name: "description" },
            },
          ],
        },
        {
          name: "create-relationship-column",
          description: "Create relationship column",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--table-id",
              description: "Table ID",
              args: { name: "table-id" },
              isRequired: true,
            },
            {
              name: "--related-table-id",
              description: "Related Table ID",
              args: { name: "related-table-id" },
              isRequired: true,
            },
            {
              name: "--type",
              description: "Relationship type",
              args: {
                name: "type",
                suggestions: [
                  "oneToOne",
                  "oneToMany",
                  "manyToOne",
                  "manyToMany",
                ],
              },
              isRequired: true,
            },
            { name: "--two-way", description: "Is Two Way?" },
            { name: "--key", description: "Column Key", args: { name: "key" } },
            {
              name: "--two-way-key",
              description: "Two Way Column Key",
              args: { name: "two-way-key" },
            },
            {
              name: "--on-delete",
              description: "Delete constraint",
              args: {
                name: "on-delete",
                suggestions: ["cascade", "restrict", "setNull"],
              },
            },
            {
              name: "--description",
              description: "Optional description for the column",
              args: { name: "description" },
            },
          ],
        },
        {
          name: "update-relationship-column",
          description: "Update relationship column",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--table-id",
              description: "Table ID",
              args: { name: "table-id" },
              isRequired: true,
            },
            {
              name: "--key",
              description: "Column Key",
              args: { name: "key" },
              isRequired: true,
            },
            {
              name: "--on-delete",
              description: "Delete constraint",
              args: {
                name: "on-delete",
                suggestions: ["cascade", "restrict", "setNull"],
              },
            },
            {
              name: "--new-key",
              description: "New Column Key",
              args: { name: "new-key" },
            },
            {
              name: "--description",
              description: "Optional description for the column",
              args: { name: "description" },
            },
          ],
        },
        {
          name: "create-string-column",
          description: "Create a string column",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--table-id",
              description: "Table ID",
              args: { name: "table-id" },
              isRequired: true,
            },
            {
              name: "--key",
              description: "Column Key",
              args: { name: "key" },
              isRequired: true,
            },
            {
              name: "--size",
              description:
                "Column size for text columns, in number of characters",
              args: { name: "size" },
              isRequired: true,
            },
            {
              name: "--required",
              description: "Is column required?",
              isRequired: true,
            },
            {
              name: "--xdefault",
              description: "Default value for column when not provided",
              args: { name: "xdefault" },
            },
            { name: "--array", description: "Is column an array?" },
            {
              name: "--encrypt",
              description: "Toggle encryption for the column",
            },
            {
              name: "--description",
              description: "Optional description for the column",
              args: { name: "description" },
            },
          ],
        },
        {
          name: "update-string-column",
          description: "Update a string column",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--table-id",
              description: "Table ID",
              args: { name: "table-id" },
              isRequired: true,
            },
            {
              name: "--key",
              description: "Column Key",
              args: { name: "key" },
              isRequired: true,
            },
            {
              name: "--required",
              description: "Is column required?",
              isRequired: true,
            },
            {
              name: "--xdefault",
              description: "Default value for column when not provided",
              args: { name: "xdefault" },
              isRequired: true,
            },
            {
              name: "--size",
              description: "Maximum size of the string column",
              args: { name: "size" },
            },
            {
              name: "--new-key",
              description: "New Column Key",
              args: { name: "new-key" },
            },
            {
              name: "--description",
              description: "Optional description for the column",
              args: { name: "description" },
            },
          ],
        },
        {
          name: "create-text-column",
          description: "Create a text column",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--table-id",
              description: "Table ID",
              args: { name: "table-id" },
              isRequired: true,
            },
            {
              name: "--key",
              description: "Column Key",
              args: { name: "key" },
              isRequired: true,
            },
            {
              name: "--required",
              description: "Is column required?",
              isRequired: true,
            },
            {
              name: "--xdefault",
              description: "Default value for column when not provided",
              args: { name: "xdefault" },
            },
            { name: "--array", description: "Is column an array?" },
            {
              name: "--encrypt",
              description: "Toggle encryption for the column",
            },
            {
              name: "--description",
              description: "Optional description for the column",
              args: { name: "description" },
            },
          ],
        },
        {
          name: "update-text-column",
          description: "Update a text column",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--table-id",
              description: "Table ID",
              args: { name: "table-id" },
              isRequired: true,
            },
            {
              name: "--key",
              description: "Column Key",
              args: { name: "key" },
              isRequired: true,
            },
            {
              name: "--required",
              description: "Is column required?",
              isRequired: true,
            },
            {
              name: "--xdefault",
              description: "Default value for column when not provided",
              args: { name: "xdefault" },
              isRequired: true,
            },
            {
              name: "--new-key",
              description: "New Column Key",
              args: { name: "new-key" },
            },
            {
              name: "--description",
              description: "Optional description for the column",
              args: { name: "description" },
            },
          ],
        },
        {
          name: "create-url-column",
          description: "Create a URL column",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--table-id",
              description: "Table ID",
              args: { name: "table-id" },
              isRequired: true,
            },
            {
              name: "--key",
              description: "Column Key",
              args: { name: "key" },
              isRequired: true,
            },
            {
              name: "--required",
              description: "Is column required?",
              isRequired: true,
            },
            {
              name: "--xdefault",
              description: "Default value for column when not provided",
              args: { name: "xdefault" },
            },
            { name: "--array", description: "Is column an array?" },
            {
              name: "--description",
              description: "Optional description for the column",
              args: { name: "description" },
            },
          ],
        },
        {
          name: "update-url-column",
          description: "Update an url column",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--table-id",
              description: "Table ID",
              args: { name: "table-id" },
              isRequired: true,
            },
            {
              name: "--key",
              description: "Column Key",
              args: { name: "key" },
              isRequired: true,
            },
            {
              name: "--required",
              description: "Is column required?",
              isRequired: true,
            },
            {
              name: "--xdefault",
              description: "Default value for column when not provided",
              args: { name: "xdefault" },
              isRequired: true,
            },
            {
              name: "--new-key",
              description: "New Column Key",
              args: { name: "new-key" },
            },
            {
              name: "--description",
              description: "Optional description for the column",
              args: { name: "description" },
            },
          ],
        },
        {
          name: "create-varchar-column",
          description: "Create a varchar column",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--table-id",
              description: "Table ID",
              args: { name: "table-id" },
              isRequired: true,
            },
            {
              name: "--key",
              description: "Column Key",
              args: { name: "key" },
              isRequired: true,
            },
            {
              name: "--size",
              description:
                "Column size for varchar columns, in number of characters",
              args: { name: "size" },
              isRequired: true,
            },
            {
              name: "--required",
              description: "Is column required?",
              isRequired: true,
            },
            {
              name: "--xdefault",
              description: "Default value for column when not provided",
              args: { name: "xdefault" },
            },
            { name: "--array", description: "Is column an array?" },
            {
              name: "--encrypt",
              description: "Toggle encryption for the column",
            },
            {
              name: "--description",
              description: "Optional description for the column",
              args: { name: "description" },
            },
          ],
        },
        {
          name: "update-varchar-column",
          description: "Update a varchar column",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--table-id",
              description: "Table ID",
              args: { name: "table-id" },
              isRequired: true,
            },
            {
              name: "--key",
              description: "Column Key",
              args: { name: "key" },
              isRequired: true,
            },
            {
              name: "--required",
              description: "Is column required?",
              isRequired: true,
            },
            {
              name: "--xdefault",
              description: "Default value for column when not provided",
              args: { name: "xdefault" },
              isRequired: true,
            },
            {
              name: "--size",
              description: "Maximum size of the varchar column",
              args: { name: "size" },
            },
            {
              name: "--new-key",
              description: "New Column Key",
              args: { name: "new-key" },
            },
            {
              name: "--description",
              description: "Optional description for the column",
              args: { name: "description" },
            },
          ],
        },
        {
          name: "get-column",
          description: "Get column by ID",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--table-id",
              description: "Table ID",
              args: { name: "table-id" },
              isRequired: true,
            },
            {
              name: "--key",
              description: "Column Key",
              args: { name: "key" },
              isRequired: true,
            },
          ],
        },
        {
          name: "delete-column",
          description: "Deletes a column",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--table-id",
              description: "Table ID",
              args: { name: "table-id" },
              isRequired: true,
            },
            {
              name: "--key",
              description: "Column Key",
              args: { name: "key" },
              isRequired: true,
            },
          ],
        },
        {
          name: "list-indexes",
          description: "List indexes on the table",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--table-id",
              description: "Table ID",
              args: { name: "table-id" },
              isRequired: true,
            },
            {
              name: "--queries",
              description:
                "Array of query strings generated using the Query class provided by the SDK",
              args: { name: "queries" },
              isRepeatable: true,
            },
            {
              name: "--total",
              description:
                "When set to false, the total count returned will be 0 and will not be calculated",
            },
            ...listOptions,
          ],
        },
        {
          name: "create-index",
          description: "Creates an index on the columns listed",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--table-id",
              description: "Table ID",
              args: { name: "table-id" },
              isRequired: true,
            },
            {
              name: "--key",
              description: "Index Key",
              args: { name: "key" },
              isRequired: true,
            },
            {
              name: "--type",
              description: "Index type",
              args: { name: "type" },
              isRequired: true,
            },
            {
              name: "--columns",
              description: "Array of columns to index",
              args: { name: "columns" },
              isRepeatable: true,
              isRequired: true,
            },
            {
              name: "--orders",
              description: "Array of index orders",
              args: { name: "orders" },
              isRepeatable: true,
            },
            {
              name: "--lengths",
              description: "Length of index",
              args: { name: "lengths" },
              isRepeatable: true,
            },
            {
              name: "--description",
              description: "Optional description for the index",
              args: { name: "description" },
            },
          ],
        },
        {
          name: "get-index",
          description: "Get index by ID",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--table-id",
              description: "Table ID",
              args: { name: "table-id" },
              isRequired: true,
            },
            {
              name: "--key",
              description: "Index Key",
              args: { name: "key" },
              isRequired: true,
            },
          ],
        },
        {
          name: "delete-index",
          description: "Delete an index",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--table-id",
              description: "Table ID",
              args: { name: "table-id" },
              isRequired: true,
            },
            {
              name: "--key",
              description: "Index Key",
              args: { name: "key" },
              isRequired: true,
            },
          ],
        },
        {
          name: "list-rows",
          description: "Get a list of all the user's rows in a given table",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--table-id",
              description: "Table ID",
              args: { name: "table-id" },
              isRequired: true,
            },
            {
              name: "--queries",
              description:
                "Array of query strings generated using the Query class provided by the SDK",
              args: { name: "queries" },
              isRepeatable: true,
            },
            {
              name: "--transaction-id",
              description:
                "Transaction ID to read uncommitted changes within the transaction",
              args: { name: "transaction-id" },
            },
            {
              name: "--total",
              description:
                "When set to false, the total count returned will be 0 and will not be calculated",
            },
            {
              name: "--ttl",
              description: "TTL (seconds) for caching list responses",
              args: { name: "ttl" },
            },
            ...listOptions,
            {
              name: "--select",
              description: "Attribute to include in the response",
              args: { name: "select" },
              isRepeatable: true,
            },
          ],
        },
        {
          name: "create-row",
          description: "Create a new Row",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--table-id",
              description: "Table ID",
              args: { name: "table-id" },
              isRequired: true,
            },
            {
              name: "--row-id",
              description: "Row ID",
              args: { name: "row-id" },
              isRequired: true,
            },
            {
              name: "--data",
              description: "Row data as JSON object",
              args: { name: "data" },
              isRequired: true,
            },
            {
              name: "--permissions",
              description: "An array of permissions strings",
              args: { name: "permissions" },
              isRepeatable: true,
            },
            {
              name: "--transaction-id",
              description: "Transaction ID for staging the operation",
              args: { name: "transaction-id" },
            },
          ],
        },
        {
          name: "create-rows",
          description: "Create new Rows",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--table-id",
              description: "Table ID",
              args: { name: "table-id" },
              isRequired: true,
            },
            {
              name: "--rows",
              description: "Array of rows data as JSON objects",
              args: { name: "rows" },
              isRepeatable: true,
              isRequired: true,
            },
            {
              name: "--transaction-id",
              description: "Transaction ID for staging the operation",
              args: { name: "transaction-id" },
            },
          ],
        },
        {
          name: "upsert-rows",
          description: "Create or update Rows",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--table-id",
              description: "Table ID",
              args: { name: "table-id" },
              isRequired: true,
            },
            {
              name: "--rows",
              description: "Array of row data as JSON objects",
              args: { name: "rows" },
              isRepeatable: true,
              isRequired: true,
            },
            {
              name: "--transaction-id",
              description: "Transaction ID for staging the operation",
              args: { name: "transaction-id" },
            },
          ],
        },
        {
          name: "update-rows",
          description:
            "Update all rows that match your queries, if no queries are submitted then all rows are updated",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--table-id",
              description: "Table ID",
              args: { name: "table-id" },
              isRequired: true,
            },
            {
              name: "--data",
              description: "Row data as JSON object",
              args: { name: "data" },
            },
            {
              name: "--queries",
              description:
                "Array of query strings generated using the Query class provided by the SDK",
              args: { name: "queries" },
              isRepeatable: true,
            },
            {
              name: "--transaction-id",
              description: "Transaction ID for staging the operation",
              args: { name: "transaction-id" },
            },
            ...listOptions,
          ],
        },
        {
          name: "delete-rows",
          description:
            "Bulk delete rows using queries, if no queries are passed then all rows are deleted",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--table-id",
              description: "Table ID",
              args: { name: "table-id" },
              isRequired: true,
            },
            {
              name: "--queries",
              description:
                "Array of query strings generated using the Query class provided by the SDK",
              args: { name: "queries" },
              isRepeatable: true,
            },
            {
              name: "--transaction-id",
              description: "Transaction ID for staging the operation",
              args: { name: "transaction-id" },
            },
            ...listOptions,
          ],
        },
        {
          name: "create-query",
          description:
            "Get a list of all the user's rows in a given table using a POST request",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--table-id",
              description: "Table ID",
              args: { name: "table-id" },
              isRequired: true,
            },
            {
              name: "--queries",
              description:
                "Array of query strings generated using the Query class provided by the SDK",
              args: { name: "queries" },
              isRepeatable: true,
            },
            {
              name: "--transaction-id",
              description:
                "Transaction ID to read uncommitted changes within the transaction",
              args: { name: "transaction-id" },
            },
            {
              name: "--total",
              description:
                "When set to false, the total count returned will be 0 and will not be calculated",
            },
            {
              name: "--ttl",
              description: "TTL (seconds) for caching list responses",
              args: { name: "ttl" },
            },
            ...listOptions,
            {
              name: "--select",
              description: "Attribute to include in the response",
              args: { name: "select" },
              isRepeatable: true,
            },
          ],
        },
        {
          name: "get-row",
          description: "Get a row by its unique ID",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--table-id",
              description: "Table ID",
              args: { name: "table-id" },
              isRequired: true,
            },
            {
              name: "--row-id",
              description: "Row ID",
              args: { name: "row-id" },
              isRequired: true,
            },
            {
              name: "--queries",
              description:
                "Array of query strings generated using the Query class provided by the SDK",
              args: { name: "queries" },
              isRepeatable: true,
            },
            {
              name: "--transaction-id",
              description:
                "Transaction ID to read uncommitted changes within the transaction",
              args: { name: "transaction-id" },
            },
            {
              name: "--select",
              description: "Attribute to include in the response",
              args: { name: "select" },
              isRepeatable: true,
            },
          ],
        },
        {
          name: "upsert-row",
          description: "Create or update a Row",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--table-id",
              description: "Table ID",
              args: { name: "table-id" },
              isRequired: true,
            },
            {
              name: "--row-id",
              description: "Row ID",
              args: { name: "row-id" },
              isRequired: true,
            },
            {
              name: "--data",
              description: "Row data as JSON object",
              args: { name: "data" },
            },
            {
              name: "--permissions",
              description: "An array of permissions strings",
              args: { name: "permissions" },
              isRepeatable: true,
            },
            {
              name: "--transaction-id",
              description: "Transaction ID for staging the operation",
              args: { name: "transaction-id" },
            },
          ],
        },
        {
          name: "update-row",
          description: "Update a row by its unique ID",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--table-id",
              description: "Table ID",
              args: { name: "table-id" },
              isRequired: true,
            },
            {
              name: "--row-id",
              description: "Row ID",
              args: { name: "row-id" },
              isRequired: true,
            },
            {
              name: "--data",
              description: "Row data as JSON object",
              args: { name: "data" },
            },
            {
              name: "--permissions",
              description: "An array of permissions strings",
              args: { name: "permissions" },
              isRepeatable: true,
            },
            {
              name: "--transaction-id",
              description: "Transaction ID for staging the operation",
              args: { name: "transaction-id" },
            },
          ],
        },
        {
          name: "delete-row",
          description: "Delete a row by its unique ID",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--table-id",
              description: "Table ID",
              args: { name: "table-id" },
              isRequired: true,
            },
            {
              name: "--row-id",
              description: "Row ID",
              args: { name: "row-id" },
              isRequired: true,
            },
            {
              name: "--transaction-id",
              description: "Transaction ID for staging the operation",
              args: { name: "transaction-id" },
            },
          ],
        },
        {
          name: "decrement-row-column",
          description: "Decrement a specific column of a row by a given value",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--table-id",
              description: "Table ID",
              args: { name: "table-id" },
              isRequired: true,
            },
            {
              name: "--row-id",
              description: "Row ID",
              args: { name: "row-id" },
              isRequired: true,
            },
            {
              name: "--column",
              description: "Column key",
              args: { name: "column" },
              isRequired: true,
            },
            {
              name: "--value",
              description: "Value to increment the column by",
              args: { name: "value" },
            },
            {
              name: "--min",
              description: "Minimum value for the column",
              args: { name: "min" },
            },
            {
              name: "--transaction-id",
              description: "Transaction ID for staging the operation",
              args: { name: "transaction-id" },
            },
          ],
        },
        {
          name: "increment-row-column",
          description: "Increment a specific column of a row by a given value",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--table-id",
              description: "Table ID",
              args: { name: "table-id" },
              isRequired: true,
            },
            {
              name: "--row-id",
              description: "Row ID",
              args: { name: "row-id" },
              isRequired: true,
            },
            {
              name: "--column",
              description: "Column key",
              args: { name: "column" },
              isRequired: true,
            },
            {
              name: "--value",
              description: "Value to increment the column by",
              args: { name: "value" },
            },
            {
              name: "--max",
              description: "Maximum value for the column",
              args: { name: "max" },
            },
            {
              name: "--transaction-id",
              description: "Transaction ID for staging the operation",
              args: { name: "transaction-id" },
            },
          ],
        },
      ],
    },
    {
      name: "teams",
      description: "Group users to share resource access",
      icon,
      subcommands: [
        {
          name: "list",
          description:
            "Get a list of all the teams in which the current user is a member",
          icon,
          options: [
            {
              name: "--queries",
              description:
                "Array of query strings generated using the Query class provided by the SDK",
              args: { name: "queries" },
              isRepeatable: true,
            },
            {
              name: "--search",
              description: "Search term to filter your list results",
              args: { name: "search" },
            },
            {
              name: "--total",
              description:
                "When set to false, the total count returned will be 0 and will not be calculated",
            },
            ...listOptions,
          ],
        },
        {
          name: "create",
          description: "Create a new team",
          icon,
          options: [
            {
              name: "--team-id",
              description: "Team ID",
              args: { name: "team-id" },
              isRequired: true,
            },
            {
              name: "--name",
              description: "Team name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--roles",
              description: "Array of strings",
              args: { name: "roles" },
              isRepeatable: true,
            },
          ],
        },
        {
          name: "get",
          description: "Get a team by its ID",
          icon,
          options: [
            {
              name: "--team-id",
              description: "Team ID",
              args: { name: "team-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "update-name",
          description: "Update the team's name by its unique ID",
          icon,
          options: [
            {
              name: "--team-id",
              description: "Team ID",
              args: { name: "team-id" },
              isRequired: true,
            },
            {
              name: "--name",
              description: "New team name",
              args: { name: "name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a team using its ID",
          icon,
          options: [
            {
              name: "--team-id",
              description: "Team ID",
              args: { name: "team-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "list-installations",
          description: "List app installations on a team",
          icon,
          options: [
            {
              name: "--team-id",
              description: "Team ID",
              args: { name: "team-id" },
              isRequired: true,
            },
            {
              name: "--queries",
              description:
                "Array of query strings generated using the Query class provided by the SDK",
              args: { name: "queries" },
              isRepeatable: true,
            },
            {
              name: "--total",
              description:
                "When set to false, the total count returned will be 0 and will not be calculated",
            },
            ...listOptions,
          ],
        },
        {
          name: "create-installation",
          description: "Install an app on a team",
          icon,
          options: [
            {
              name: "--team-id",
              description: "Team ID",
              args: { name: "team-id" },
              isRequired: true,
            },
            {
              name: "--app-id",
              description: "Application unique ID",
              args: { name: "app-id" },
              isRequired: true,
            },
            {
              name: "--authorization-details",
              description:
                "Authorization details granted to the installation as a JSON array of objects, each with a `type` and app-defined fields",
              args: { name: "authorization-details" },
            },
          ],
        },
        {
          name: "get-installation",
          description: "Get an app installation on a team by its unique ID",
          icon,
          options: [
            {
              name: "--team-id",
              description: "Team ID",
              args: { name: "team-id" },
              isRequired: true,
            },
            {
              name: "--installation-id",
              description: "Installation unique ID",
              args: { name: "installation-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "update-installation",
          description: "Update an app installation on a team",
          icon,
          options: [
            {
              name: "--team-id",
              description: "Team ID",
              args: { name: "team-id" },
              isRequired: true,
            },
            {
              name: "--installation-id",
              description: "Installation unique ID",
              args: { name: "installation-id" },
              isRequired: true,
            },
            {
              name: "--authorization-details",
              description:
                "Authorization details granted to the installation as a JSON array of objects, each with a `type` and app-defined fields",
              args: { name: "authorization-details" },
            },
          ],
        },
        {
          name: "delete-installation",
          description: "Uninstall an app from a team by its installation ID",
          icon,
          options: [
            {
              name: "--team-id",
              description: "Team ID",
              args: { name: "team-id" },
              isRequired: true,
            },
            {
              name: "--installation-id",
              description: "Installation unique ID",
              args: { name: "installation-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "list-memberships",
          description:
            "Use this endpoint to list a team's members using the team's ID",
          icon,
          options: [
            {
              name: "--team-id",
              description: "Team ID",
              args: { name: "team-id" },
              isRequired: true,
            },
            {
              name: "--queries",
              description:
                "Array of query strings generated using the Query class provided by the SDK",
              args: { name: "queries" },
              isRepeatable: true,
            },
            {
              name: "--search",
              description: "Search term to filter your list results",
              args: { name: "search" },
            },
            {
              name: "--total",
              description:
                "When set to false, the total count returned will be 0 and will not be calculated",
            },
            ...listOptions,
          ],
        },
        {
          name: "create-membership",
          description: "Invite a new member to join your team",
          icon,
          options: [
            {
              name: "--team-id",
              description: "Team ID",
              args: { name: "team-id" },
              isRequired: true,
            },
            {
              name: "--roles",
              description: "Array of strings",
              args: { name: "roles" },
              isRepeatable: true,
              isRequired: true,
            },
            {
              name: "--email",
              description: "Email of the new team member",
              args: { name: "email" },
            },
            {
              name: "--user-id",
              description: "ID of the user to be added to a team",
              args: { name: "user-id" },
            },
            {
              name: "--phone",
              description: "Phone number",
              args: { name: "phone" },
            },
            {
              name: "--url",
              description:
                "URL to redirect the user back to your app from the invitation email",
              args: { name: "url" },
            },
            {
              name: "--name",
              description: "Name of the new team member",
              args: { name: "name" },
            },
            {
              name: "--membership-id",
              description: "Membership ID",
              args: { name: "membership-id" },
            },
          ],
        },
        {
          name: "get-membership",
          description: "Get a team member by the membership unique id",
          icon,
          options: [
            {
              name: "--team-id",
              description: "Team ID",
              args: { name: "team-id" },
              isRequired: true,
            },
            {
              name: "--membership-id",
              description: "Membership ID",
              args: { name: "membership-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "update-membership",
          description: "Modify the roles of a team member",
          icon,
          options: [
            {
              name: "--team-id",
              description: "Team ID",
              args: { name: "team-id" },
              isRequired: true,
            },
            {
              name: "--membership-id",
              description: "Membership ID",
              args: { name: "membership-id" },
              isRequired: true,
            },
            {
              name: "--roles",
              description: "An array of strings",
              args: { name: "roles" },
              isRepeatable: true,
              isRequired: true,
            },
          ],
        },
        {
          name: "delete-membership",
          description:
            "This endpoint allows a user to leave a team or for a team owner to delete the membership of any other team member",
          icon,
          options: [
            {
              name: "--team-id",
              description: "Team ID",
              args: { name: "team-id" },
              isRequired: true,
            },
            {
              name: "--membership-id",
              description: "Membership ID",
              args: { name: "membership-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "update-membership-status",
          description:
            "Use this endpoint to allow a user to accept an invitation to join a team after being redirected back to your app from the invitation email received by the user",
          icon,
          options: [
            {
              name: "--team-id",
              description: "Team ID",
              args: { name: "team-id" },
              isRequired: true,
            },
            {
              name: "--membership-id",
              description: "Membership ID",
              args: { name: "membership-id" },
              isRequired: true,
            },
            {
              name: "--user-id",
              description: "User ID",
              args: { name: "user-id" },
              isRequired: true,
            },
            {
              name: "--secret",
              description: "Secret key",
              args: { name: "secret" },
              isRequired: true,
            },
          ],
        },
        {
          name: "get-photo",
          description:
            "Returns the photo of a team: the uploaded photo (see teams.updatePhoto), else the initials of the team name, else a built-in static placeholder",
          icon,
          options: [
            {
              name: "--team-id",
              description: "Team ID",
              args: { name: "team-id" },
              isRequired: true,
            },
            {
              name: "--width",
              description: "Output image width in pixels",
              args: { name: "width" },
            },
            {
              name: "--height",
              description: "Output image height in pixels",
              args: { name: "height" },
            },
            {
              name: "--quality",
              description: "Output image quality between 0 and 100",
              args: { name: "quality" },
            },
            {
              name: "--output",
              description: "Output image format",
              args: { name: "output" },
            },
            {
              name: "--destination",
              description: "Path to save the file to",
              args: { name: "destination" },
              isRequired: true,
            },
          ],
        },
        {
          name: "update-photo",
          description: "Update the photo of a team",
          icon,
          options: [
            {
              name: "--team-id",
              description: "Team ID",
              args: { name: "team-id" },
              isRequired: true,
            },
            {
              name: "--file",
              description: "Binary image file of at most 5MB",
              args: { name: "file" },
              isRequired: true,
            },
          ],
        },
        {
          name: "delete-photo",
          description:
            "Delete the photo of a team and store the built-in static placeholder in its place",
          icon,
          options: [
            {
              name: "--team-id",
              description: "Team ID",
              args: { name: "team-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "get-prefs",
          description: "Get the team's shared preferences by its unique ID",
          icon,
          options: [
            {
              name: "--team-id",
              description: "Team ID",
              args: { name: "team-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "update-prefs",
          description: "Update the team's preferences by its unique ID",
          icon,
          options: [
            {
              name: "--team-id",
              description: "Team ID",
              args: { name: "team-id" },
              isRequired: true,
            },
            {
              name: "--prefs",
              description: "Prefs key-value JSON object",
              args: { name: "prefs" },
              isRequired: true,
            },
          ],
        },
      ],
    },
    {
      name: "tokens",
      description: "Resource tokens for secure file access",
      icon,
      subcommands: [
        {
          name: "list",
          description:
            "List all the tokens created for a specific file or bucket",
          icon,
          options: [
            {
              name: "--bucket-id",
              description: "Storage bucket unique ID",
              args: { name: "bucket-id" },
              isRequired: true,
            },
            {
              name: "--file-id",
              description: "File unique ID",
              args: { name: "file-id" },
              isRequired: true,
            },
            {
              name: "--queries",
              description:
                "Array of query strings generated using the Query class provided by the SDK",
              args: { name: "queries" },
              isRepeatable: true,
            },
            {
              name: "--total",
              description:
                "When set to false, the total count returned will be 0 and will not be calculated",
            },
            ...listOptions,
          ],
        },
        {
          name: "create-file-token",
          description: "Create a new token",
          icon,
          options: [
            {
              name: "--bucket-id",
              description: "Storage bucket unique ID",
              args: { name: "bucket-id" },
              isRequired: true,
            },
            {
              name: "--file-id",
              description: "File unique ID",
              args: { name: "file-id" },
              isRequired: true,
            },
            {
              name: "--expire",
              description: "Token expiry date",
              args: { name: "expire" },
            },
          ],
        },
        {
          name: "get",
          description: "Get a token by its unique ID",
          icon,
          options: [
            {
              name: "--token-id",
              description: "Token ID",
              args: { name: "token-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "update",
          description: "Update a token by its unique ID",
          icon,
          options: [
            {
              name: "--token-id",
              description: "Token unique ID",
              args: { name: "token-id" },
              isRequired: true,
            },
            {
              name: "--expire",
              description: "File token expiry date",
              args: { name: "expire" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a token by its unique ID",
          icon,
          options: [
            {
              name: "--token-id",
              description: "Token ID",
              args: { name: "token-id" },
              isRequired: true,
            },
          ],
        },
      ],
    },
    {
      name: "users",
      description: "Manage project users",
      icon,
      subcommands: [
        {
          name: "list",
          description: "Get a list of all the project's users",
          icon,
          options: [
            {
              name: "--queries",
              description:
                "Array of query strings generated using the Query class provided by the SDK",
              args: { name: "queries" },
              isRepeatable: true,
            },
            {
              name: "--search",
              description: "Search term to filter your list results",
              args: { name: "search" },
            },
            {
              name: "--total",
              description:
                "When set to false, the total count returned will be 0 and will not be calculated",
            },
            ...listOptions,
          ],
        },
        {
          name: "create",
          description: "Create a new user",
          icon,
          options: [
            {
              name: "--user-id",
              description: "User ID",
              args: { name: "user-id" },
              isRequired: true,
            },
            {
              name: "--email",
              description: "User email",
              args: { name: "email" },
            },
            {
              name: "--phone",
              description: "Phone number",
              args: { name: "phone" },
            },
            {
              name: "--password",
              description: "Plain text user password",
              args: { name: "password" },
            },
            {
              name: "--name",
              description: "User name",
              args: { name: "name" },
            },
          ],
        },
        {
          name: "create-argon-2-user",
          description: "Create a new user",
          icon,
          options: [
            {
              name: "--user-id",
              description: "User ID",
              args: { name: "user-id" },
              isRequired: true,
            },
            {
              name: "--email",
              description: "User email",
              args: { name: "email" },
              isRequired: true,
            },
            {
              name: "--password",
              description: "User password hashed using Argon2",
              args: { name: "password" },
              isRequired: true,
            },
            {
              name: "--name",
              description: "User name",
              args: { name: "name" },
            },
          ],
        },
        {
          name: "create-bcrypt-user",
          description: "Create a new user",
          icon,
          options: [
            {
              name: "--user-id",
              description: "User ID",
              args: { name: "user-id" },
              isRequired: true,
            },
            {
              name: "--email",
              description: "User email",
              args: { name: "email" },
              isRequired: true,
            },
            {
              name: "--password",
              description: "User password hashed using Bcrypt",
              args: { name: "password" },
              isRequired: true,
            },
            {
              name: "--name",
              description: "User name",
              args: { name: "name" },
            },
          ],
        },
        {
          name: "list-identities",
          description: "Get identities for all users",
          icon,
          options: [
            {
              name: "--queries",
              description:
                "Array of query strings generated using the Query class provided by the SDK",
              args: { name: "queries" },
              isRepeatable: true,
            },
            {
              name: "--search",
              description: "Search term to filter your list results",
              args: { name: "search" },
            },
            {
              name: "--total",
              description:
                "When set to false, the total count returned will be 0 and will not be calculated",
            },
            ...listOptions,
          ],
        },
        {
          name: "delete-identity",
          description: "Delete an identity by its unique ID",
          icon,
          options: [
            {
              name: "--identity-id",
              description: "Identity ID",
              args: { name: "identity-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "create-md-5-user",
          description: "Create a new user",
          icon,
          options: [
            {
              name: "--user-id",
              description: "User ID",
              args: { name: "user-id" },
              isRequired: true,
            },
            {
              name: "--email",
              description: "User email",
              args: { name: "email" },
              isRequired: true,
            },
            {
              name: "--password",
              description: "User password hashed using MD5",
              args: { name: "password" },
              isRequired: true,
            },
            {
              name: "--name",
              description: "User name",
              args: { name: "name" },
            },
          ],
        },
        {
          name: "create-ph-pass-user",
          description: "Create a new user",
          icon,
          options: [
            {
              name: "--user-id",
              description: "User ID",
              args: { name: "user-id" },
              isRequired: true,
            },
            {
              name: "--email",
              description: "User email",
              args: { name: "email" },
              isRequired: true,
            },
            {
              name: "--password",
              description: "User password hashed using PHPass",
              args: { name: "password" },
              isRequired: true,
            },
            {
              name: "--name",
              description: "User name",
              args: { name: "name" },
            },
          ],
        },
        {
          name: "create-scrypt-user",
          description: "Create a new user",
          icon,
          options: [
            {
              name: "--user-id",
              description: "User ID",
              args: { name: "user-id" },
              isRequired: true,
            },
            {
              name: "--email",
              description: "User email",
              args: { name: "email" },
              isRequired: true,
            },
            {
              name: "--password",
              description: "User password hashed using Scrypt",
              args: { name: "password" },
              isRequired: true,
            },
            {
              name: "--password-salt",
              description: "Optional salt used to hash password",
              args: { name: "password-salt" },
              isRequired: true,
            },
            {
              name: "--password-cpu",
              description: "Optional CPU cost used to hash password",
              args: { name: "password-cpu" },
              isRequired: true,
            },
            {
              name: "--password-memory",
              description: "Optional memory cost used to hash password",
              args: { name: "password-memory" },
              isRequired: true,
            },
            {
              name: "--password-parallel",
              description:
                "Optional parallelization cost used to hash password",
              args: { name: "password-parallel" },
              isRequired: true,
            },
            {
              name: "--password-length",
              description: "Optional hash length used to hash password",
              args: { name: "password-length" },
              isRequired: true,
            },
            {
              name: "--name",
              description: "User name",
              args: { name: "name" },
            },
          ],
        },
        {
          name: "create-scrypt-modified-user",
          description: "Create a new user",
          icon,
          options: [
            {
              name: "--user-id",
              description: "User ID",
              args: { name: "user-id" },
              isRequired: true,
            },
            {
              name: "--email",
              description: "User email",
              args: { name: "email" },
              isRequired: true,
            },
            {
              name: "--password",
              description: "User password hashed using Scrypt Modified",
              args: { name: "password" },
              isRequired: true,
            },
            {
              name: "--password-salt",
              description: "Salt used to hash password",
              args: { name: "password-salt" },
              isRequired: true,
            },
            {
              name: "--password-salt-separator",
              description: "Salt separator used to hash password",
              args: { name: "password-salt-separator" },
              isRequired: true,
            },
            {
              name: "--password-signer-key",
              description: "Signer key used to hash password",
              args: { name: "password-signer-key" },
              isRequired: true,
            },
            {
              name: "--name",
              description: "User name",
              args: { name: "name" },
            },
          ],
        },
        {
          name: "create-sha-user",
          description: "Create a new user",
          icon,
          options: [
            {
              name: "--user-id",
              description: "User ID",
              args: { name: "user-id" },
              isRequired: true,
            },
            {
              name: "--email",
              description: "User email",
              args: { name: "email" },
              isRequired: true,
            },
            {
              name: "--password",
              description: "User password hashed using SHA",
              args: { name: "password" },
              isRequired: true,
            },
            {
              name: "--password-version",
              description: "Optional SHA version used to hash password",
              args: {
                name: "password-version",
                suggestions: [
                  "sha1",
                  "sha224",
                  "sha256",
                  "sha384",
                  "sha512/224",
                  "sha512/256",
                  "sha512",
                  "sha3-224",
                  "sha3-256",
                  "sha3-384",
                  "sha3-512",
                ],
              },
            },
            {
              name: "--name",
              description: "User name",
              args: { name: "name" },
            },
          ],
        },
        {
          name: "get",
          description: "Get a user by its unique ID",
          icon,
          options: [
            {
              name: "--user-id",
              description: "User ID",
              args: { name: "user-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "delete",
          description:
            "Delete a user by its unique ID, thereby releasing it's ID",
          icon,
          options: [
            {
              name: "--user-id",
              description: "User ID",
              args: { name: "user-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "update-email",
          description: "Update the user email by its unique ID",
          icon,
          options: [
            {
              name: "--user-id",
              description: "User ID",
              args: { name: "user-id" },
              isRequired: true,
            },
            {
              name: "--email",
              description: "User email",
              args: { name: "email" },
              isRequired: true,
            },
          ],
        },
        {
          name: "update-impersonator",
          description:
            "Enable or disable whether a user can impersonate other users",
          icon,
          options: [
            {
              name: "--user-id",
              description: "User ID",
              args: { name: "user-id" },
              isRequired: true,
            },
            {
              name: "--impersonator",
              description: "Whether the user can impersonate other users",
              isRequired: true,
            },
          ],
        },
        {
          name: "create-jwt",
          description:
            "Use this endpoint to create a JSON Web Token for user by its unique ID",
          icon,
          options: [
            {
              name: "--user-id",
              description: "User ID",
              args: { name: "user-id" },
              isRequired: true,
            },
            {
              name: "--session-id",
              description: "Session ID",
              args: { name: "session-id" },
            },
            {
              name: "--duration",
              description: "Time in seconds before JWT expires",
              args: { name: "duration" },
            },
          ],
        },
        {
          name: "update-labels",
          description: "Update the user labels by its unique ID",
          icon,
          options: [
            {
              name: "--user-id",
              description: "User ID",
              args: { name: "user-id" },
              isRequired: true,
            },
            {
              name: "--labels",
              description: "Array of user labels",
              args: { name: "labels" },
              isRepeatable: true,
              isRequired: true,
            },
          ],
        },
        {
          name: "list-memberships",
          description: "Get the user membership list by its unique ID",
          icon,
          options: [
            {
              name: "--user-id",
              description: "User ID",
              args: { name: "user-id" },
              isRequired: true,
            },
            {
              name: "--queries",
              description:
                "Array of query strings generated using the Query class provided by the SDK",
              args: { name: "queries" },
              isRepeatable: true,
            },
            {
              name: "--search",
              description: "Search term to filter your list results",
              args: { name: "search" },
            },
            {
              name: "--total",
              description:
                "When set to false, the total count returned will be 0 and will not be calculated",
            },
            ...listOptions,
          ],
        },
        {
          name: "update-mfa",
          description: "Enable or disable MFA on a user account",
          icon,
          options: [
            {
              name: "--user-id",
              description: "User ID",
              args: { name: "user-id" },
              isRequired: true,
            },
            {
              name: "--mfa",
              description: "Enable or disable MFA",
              isRequired: true,
            },
          ],
        },
        {
          name: "delete-mfa-authenticator",
          description: "Delete an authenticator app",
          icon,
          options: [
            {
              name: "--user-id",
              description: "User ID",
              args: { name: "user-id" },
              isRequired: true,
            },
            {
              name: "--type",
              description: "Type of authenticator",
              args: { name: "type" },
              isRequired: true,
            },
          ],
        },
        {
          name: "get-mfa-challenge",
          description:
            "Get a custom MFA challenge for a user, including the code to be delivered through your own channel",
          icon,
          options: [
            {
              name: "--user-id",
              description: "User ID",
              args: { name: "user-id" },
              isRequired: true,
            },
            {
              name: "--challenge-id",
              description: "ID of the challenge",
              args: { name: "challenge-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "list-mfa-factors",
          description:
            "List the factors available on the account to be used as a MFA challange",
          icon,
          options: [
            {
              name: "--user-id",
              description: "User ID",
              args: { name: "user-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "get-mfa-recovery-codes",
          description:
            "Get recovery codes that can be used as backup for MFA flow by User ID",
          icon,
          options: [
            {
              name: "--user-id",
              description: "User ID",
              args: { name: "user-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "update-mfa-recovery-codes",
          description:
            "Regenerate recovery codes that can be used as backup for MFA flow by User ID",
          icon,
          options: [
            {
              name: "--user-id",
              description: "User ID",
              args: { name: "user-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "create-mfa-recovery-codes",
          description:
            "Generate recovery codes used as backup for MFA flow for User ID",
          icon,
          options: [
            {
              name: "--user-id",
              description: "User ID",
              args: { name: "user-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "update-name",
          description: "Update the user name by its unique ID",
          icon,
          options: [
            {
              name: "--user-id",
              description: "User ID",
              args: { name: "user-id" },
              isRequired: true,
            },
            {
              name: "--name",
              description: "User name",
              args: { name: "name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "list-passkeys",
          description: "Get the list of verified passkeys registered by a user",
          icon,
          options: [
            {
              name: "--user-id",
              description: "User ID",
              args: { name: "user-id" },
              isRequired: true,
            },
            {
              name: "--queries",
              description:
                "Array of query strings generated using the Query class provided by the SDK",
              args: { name: "queries" },
              isRepeatable: true,
            },
            {
              name: "--total",
              description:
                "When set to false, the total count returned will be 0 and will not be calculated",
            },
            ...listOptions,
          ],
        },
        {
          name: "get-passkey",
          description: "Get a verified passkey of a user by its unique ID",
          icon,
          options: [
            {
              name: "--user-id",
              description: "User ID",
              args: { name: "user-id" },
              isRequired: true,
            },
            {
              name: "--passkey-id",
              description: "Passkey ID",
              args: { name: "passkey-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "update-passkey",
          description: "Rename a passkey of a user",
          icon,
          options: [
            {
              name: "--user-id",
              description: "User ID",
              args: { name: "user-id" },
              isRequired: true,
            },
            {
              name: "--passkey-id",
              description: "Passkey ID",
              args: { name: "passkey-id" },
              isRequired: true,
            },
            {
              name: "--name",
              description: "Passkey name",
              args: { name: "name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "delete-passkey",
          description:
            "Delete a passkey from a user, for example when a device is lost",
          icon,
          options: [
            {
              name: "--user-id",
              description: "User ID",
              args: { name: "user-id" },
              isRequired: true,
            },
            {
              name: "--passkey-id",
              description: "Passkey ID",
              args: { name: "passkey-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "update-password",
          description: "Update the user password by its unique ID",
          icon,
          options: [
            {
              name: "--user-id",
              description: "User ID",
              args: { name: "user-id" },
              isRequired: true,
            },
            {
              name: "--password",
              description: "New user password",
              args: { name: "password" },
              isRequired: true,
            },
          ],
        },
        {
          name: "update-phone",
          description: "Update the user phone by its unique ID",
          icon,
          options: [
            {
              name: "--user-id",
              description: "User ID",
              args: { name: "user-id" },
              isRequired: true,
            },
            {
              name: "--number",
              description: "User phone number",
              args: { name: "number" },
              isRequired: true,
            },
          ],
        },
        {
          name: "get-prefs",
          description: "Get the user preferences by its unique ID",
          icon,
          options: [
            {
              name: "--user-id",
              description: "User ID",
              args: { name: "user-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "update-prefs",
          description: "Update the user preferences by its unique ID",
          icon,
          options: [
            {
              name: "--user-id",
              description: "User ID",
              args: { name: "user-id" },
              isRequired: true,
            },
            {
              name: "--prefs",
              description: "Prefs key-value JSON object",
              args: { name: "prefs" },
              isRequired: true,
            },
          ],
        },
        {
          name: "list-sessions",
          description: "Get the user sessions list by its unique ID",
          icon,
          options: [
            {
              name: "--user-id",
              description: "User ID",
              args: { name: "user-id" },
              isRequired: true,
            },
            {
              name: "--total",
              description:
                "When set to false, the total count returned will be 0 and will not be calculated",
            },
          ],
        },
        {
          name: "create-session",
          description: "Creates a session for a user",
          icon,
          options: [
            {
              name: "--user-id",
              description: "User ID",
              args: { name: "user-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "delete-sessions",
          description:
            "Delete all user's sessions by using the user's unique ID",
          icon,
          options: [
            {
              name: "--user-id",
              description: "User ID",
              args: { name: "user-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "delete-session",
          description: "Delete a user sessions by its unique ID",
          icon,
          options: [
            {
              name: "--user-id",
              description: "User ID",
              args: { name: "user-id" },
              isRequired: true,
            },
            {
              name: "--session-id",
              description: "Session ID",
              args: { name: "session-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "update-status",
          description: "Update the user status by its unique ID",
          icon,
          options: [
            {
              name: "--user-id",
              description: "User ID",
              args: { name: "user-id" },
              isRequired: true,
            },
            { name: "--status", description: "User Status", isRequired: true },
          ],
        },
        {
          name: "list-targets",
          description:
            "List the messaging targets that are associated with a user",
          icon,
          options: [
            {
              name: "--user-id",
              description: "User ID",
              args: { name: "user-id" },
              isRequired: true,
            },
            {
              name: "--queries",
              description:
                "Array of query strings generated using the Query class provided by the SDK",
              args: { name: "queries" },
              isRepeatable: true,
            },
            {
              name: "--total",
              description:
                "When set to false, the total count returned will be 0 and will not be calculated",
            },
            ...listOptions,
          ],
        },
        {
          name: "create-target",
          description: "Create a messaging target",
          icon,
          options: [
            {
              name: "--user-id",
              description: "User ID",
              args: { name: "user-id" },
              isRequired: true,
            },
            {
              name: "--target-id",
              description: "Target ID",
              args: { name: "target-id" },
              isRequired: true,
            },
            {
              name: "--provider-type",
              description: "The target provider type",
              args: {
                name: "provider-type",
                suggestions: ["email", "sms", "push"],
              },
              isRequired: true,
            },
            {
              name: "--identifier",
              description: "The target identifier (token, email, phone etc.)",
              args: { name: "identifier" },
              isRequired: true,
            },
            {
              name: "--provider-id",
              description: "Provider ID",
              args: { name: "provider-id" },
            },
            {
              name: "--name",
              description: "Target name",
              args: { name: "name" },
            },
          ],
        },
        {
          name: "get-target",
          description: "Get a user's push notification target by ID",
          icon,
          options: [
            {
              name: "--user-id",
              description: "User ID",
              args: { name: "user-id" },
              isRequired: true,
            },
            {
              name: "--target-id",
              description: "Target ID",
              args: { name: "target-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "update-target",
          description: "Update a messaging target",
          icon,
          options: [
            {
              name: "--user-id",
              description: "User ID",
              args: { name: "user-id" },
              isRequired: true,
            },
            {
              name: "--target-id",
              description: "Target ID",
              args: { name: "target-id" },
              isRequired: true,
            },
            {
              name: "--identifier",
              description: "The target identifier (token, email, phone etc.)",
              args: { name: "identifier" },
            },
            {
              name: "--provider-id",
              description: "Provider ID",
              args: { name: "provider-id" },
            },
            {
              name: "--name",
              description: "Target name",
              args: { name: "name" },
            },
          ],
        },
        {
          name: "delete-target",
          description: "Delete a messaging target",
          icon,
          options: [
            {
              name: "--user-id",
              description: "User ID",
              args: { name: "user-id" },
              isRequired: true,
            },
            {
              name: "--target-id",
              description: "Target ID",
              args: { name: "target-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "create-token",
          description:
            "Returns a token with a secret key for creating a session",
          icon,
          options: [
            {
              name: "--user-id",
              description: "User ID",
              args: { name: "user-id" },
              isRequired: true,
            },
            {
              name: "--length",
              description: "Token length in characters",
              args: { name: "length" },
            },
            {
              name: "--expire",
              description: "Token expiration period in seconds",
              args: { name: "expire" },
            },
          ],
        },
        {
          name: "update-email-verification",
          description:
            "Update the user email verification status by its unique ID",
          icon,
          options: [
            {
              name: "--user-id",
              description: "User ID",
              args: { name: "user-id" },
              isRequired: true,
            },
            {
              name: "--email-verification",
              description: "User email verification status",
              isRequired: true,
            },
          ],
        },
        {
          name: "update-phone-verification",
          description:
            "Update the user phone verification status by its unique ID",
          icon,
          options: [
            {
              name: "--user-id",
              description: "User ID",
              args: { name: "user-id" },
              isRequired: true,
            },
            {
              name: "--phone-verification",
              description: "User phone verification status",
              isRequired: true,
            },
          ],
        },
      ],
    },
    {
      name: "vectorsdb",
      description: "Vector databases, collections and documents",
      icon,
      subcommands: [
        {
          name: "list",
          description:
            "Get a list of all databases from the current Appwrite project",
          icon,
          options: [
            {
              name: "--queries",
              description:
                "Array of query strings generated using the Query class provided by the SDK",
              args: { name: "queries" },
              isRepeatable: true,
            },
            {
              name: "--total",
              description:
                "When set to false, the total count returned will be 0 and will not be calculated",
            },
            ...listOptions,
          ],
        },
        {
          name: "create",
          description: "Create a new Database",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Unique Id",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--name",
              description: "Database name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--enabled",
              description:
                "Is the database enabled? When set to 'disabled', users cannot access the database but Server SDKs with an API key can still read and write to the database",
            },
            {
              name: "--description",
              description: "Optional description for the database",
              args: { name: "description" },
            },
            {
              name: "--specification",
              description: "Database specification",
              args: { name: "specification" },
            },
            {
              name: "--replicas",
              description:
                "Number of high availability replicas (0-5) for the dedicated database backing this database",
              args: { name: "replicas" },
            },
            {
              name: "--sync-mode",
              description:
                "Replication sync mode for the dedicated database backing this database",
              args: {
                name: "sync-mode",
                suggestions: ["async", "sync", "quorum"],
              },
            },
          ],
        },
        {
          name: "list-specifications",
          description:
            "List the dedicated database specifications available on the current plan",
          icon,
        },
        {
          name: "list-transactions",
          description: "List transactions across all databases",
          icon,
          options: [
            {
              name: "--queries",
              description:
                "Array of query strings generated using the Query class provided by the SDK",
              args: { name: "queries" },
              isRepeatable: true,
            },
            {
              name: "--total",
              description:
                "When set to false, the total count returned will be 0 and will not be calculated",
            },
            ...listOptions,
          ],
        },
        {
          name: "create-transaction",
          description: "Create a new transaction",
          icon,
          options: [
            {
              name: "--ttl",
              description: "Seconds before the transaction expires",
              args: { name: "ttl" },
            },
          ],
        },
        {
          name: "get-transaction",
          description: "Get a transaction by its unique ID",
          icon,
          options: [
            {
              name: "--transaction-id",
              description: "Transaction ID",
              args: { name: "transaction-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "update-transaction",
          description:
            "Update a transaction, to either commit or roll back its operations",
          icon,
          options: [
            {
              name: "--transaction-id",
              description: "Transaction ID",
              args: { name: "transaction-id" },
              isRequired: true,
            },
            { name: "--commit", description: "Commit transaction?" },
            { name: "--rollback", description: "Rollback transaction?" },
          ],
        },
        {
          name: "delete-transaction",
          description: "Delete a transaction by its unique ID",
          icon,
          options: [
            {
              name: "--transaction-id",
              description: "Transaction ID",
              args: { name: "transaction-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "create-operations",
          description: "Create multiple operations in a single transaction",
          icon,
          options: [
            {
              name: "--transaction-id",
              description: "Transaction ID",
              args: { name: "transaction-id" },
              isRequired: true,
            },
            {
              name: "--operations",
              description: "Array of staged operations",
              args: { name: "operations" },
              isRepeatable: true,
            },
          ],
        },
        {
          name: "get",
          description: "Get a database by its unique ID",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "update",
          description: "Update a database by its unique ID",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--name",
              description: "Database name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--enabled",
              description:
                "Is database enabled? When set to 'disabled', users cannot access the database but Server SDKs with an API key can still read and write to the database",
            },
            {
              name: "--description",
              description: "Optional description for the database",
              args: { name: "description" },
            },
            {
              name: "--specification",
              description: "Database specification",
              args: { name: "specification" },
            },
            {
              name: "--replicas",
              description:
                "Number of high availability replicas (0-5) for the dedicated database backing this database",
              args: { name: "replicas" },
            },
            {
              name: "--sync-mode",
              description:
                "Replication sync mode for the dedicated database backing this database",
              args: {
                name: "sync-mode",
                suggestions: ["async", "sync", "quorum"],
              },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a database by its unique ID",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "list-collections",
          description:
            "Get a list of all collections that belong to the provided databaseId",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--queries",
              description:
                "Array of query strings generated using the Query class provided by the SDK",
              args: { name: "queries" },
              isRepeatable: true,
            },
            {
              name: "--search",
              description: "Search term to filter your list results",
              args: { name: "search" },
            },
            {
              name: "--total",
              description:
                "When set to false, the total count returned will be 0 and will not be calculated",
            },
            ...listOptions,
          ],
        },
        {
          name: "create-collection",
          description: "Create a new Collection",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--collection-id",
              description: "Unique Id",
              args: { name: "collection-id" },
              isRequired: true,
            },
            {
              name: "--name",
              description: "Collection name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--dimension",
              description: "Embedding dimension",
              args: { name: "dimension" },
              isRequired: true,
            },
            {
              name: "--permissions",
              description: "An array of permissions strings",
              args: { name: "permissions" },
              isRepeatable: true,
            },
            {
              name: "--document-security",
              description:
                "Enables configuring permissions for individual documents",
            },
            {
              name: "--enabled",
              description:
                "Is collection enabled? When set to 'disabled', users cannot access the collection but Server SDKs with and API key can still read and write to the collection",
            },
            {
              name: "--description",
              description: "Optional description for the collection",
              args: { name: "description" },
            },
          ],
        },
        {
          name: "get-collection",
          description: "Get a collection by its unique ID",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--collection-id",
              description: "Collection ID",
              args: { name: "collection-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "update-collection",
          description: "Update a collection by its unique ID",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--collection-id",
              description: "Collection ID",
              args: { name: "collection-id" },
              isRequired: true,
            },
            {
              name: "--name",
              description: "Collection name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--dimension",
              description: "Embedding dimensions",
              args: { name: "dimension" },
            },
            {
              name: "--permissions",
              description: "An array of permission strings",
              args: { name: "permissions" },
              isRepeatable: true,
            },
            {
              name: "--document-security",
              description:
                "Enables configuring permissions for individual documents",
            },
            {
              name: "--enabled",
              description:
                "Is collection enabled? When set to 'disabled', users cannot access the collection but Server SDKs with and API key can still read and write to the collection",
            },
            {
              name: "--description",
              description: "Optional description for the collection",
              args: { name: "description" },
            },
          ],
        },
        {
          name: "delete-collection",
          description: "Delete a collection by its unique ID",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--collection-id",
              description: "Collection ID",
              args: { name: "collection-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "list-documents",
          description:
            "Get a list of all the user's documents in a given collection",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--collection-id",
              description: "Collection ID",
              args: { name: "collection-id" },
              isRequired: true,
            },
            {
              name: "--queries",
              description:
                "Array of query strings generated using the Query class provided by the SDK",
              args: { name: "queries" },
              isRepeatable: true,
            },
            {
              name: "--transaction-id",
              description:
                "Transaction ID to read uncommitted changes within the transaction",
              args: { name: "transaction-id" },
            },
            {
              name: "--total",
              description:
                "When set to false, the total count returned will be 0 and will not be calculated",
            },
            {
              name: "--ttl",
              description:
                "TTL (seconds) for cached responses when caching is enabled for select queries",
              args: { name: "ttl" },
            },
            ...listOptions,
            {
              name: "--select",
              description: "Attribute to include in the response",
              args: { name: "select" },
              isRepeatable: true,
            },
          ],
        },
        {
          name: "create-document",
          description: "Create a new Document",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--collection-id",
              description: "Collection ID",
              args: { name: "collection-id" },
              isRequired: true,
            },
            {
              name: "--document-id",
              description: "Document ID",
              args: { name: "document-id" },
              isRequired: true,
            },
            {
              name: "--data",
              description: "Document data as JSON object",
              args: { name: "data" },
              isRequired: true,
            },
            {
              name: "--permissions",
              description: "An array of permissions strings",
              args: { name: "permissions" },
              isRepeatable: true,
            },
            {
              name: "--transaction-id",
              description: "Transaction ID for staging the operation",
              args: { name: "transaction-id" },
            },
          ],
        },
        {
          name: "create-documents",
          description: "Create new Documents",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--collection-id",
              description: "Collection ID",
              args: { name: "collection-id" },
              isRequired: true,
            },
            {
              name: "--documents",
              description: "Array of documents data as JSON objects",
              args: { name: "documents" },
              isRepeatable: true,
              isRequired: true,
            },
            {
              name: "--transaction-id",
              description: "Transaction ID for staging the operation",
              args: { name: "transaction-id" },
            },
          ],
        },
        {
          name: "upsert-documents",
          description: "Create or update Documents",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--collection-id",
              description: "Collection ID",
              args: { name: "collection-id" },
              isRequired: true,
            },
            {
              name: "--documents",
              description: "Array of document data as JSON objects",
              args: { name: "documents" },
              isRepeatable: true,
              isRequired: true,
            },
            {
              name: "--transaction-id",
              description: "Transaction ID for staging the operation",
              args: { name: "transaction-id" },
            },
          ],
        },
        {
          name: "update-documents",
          description:
            "Update all documents that match your queries, if no queries are submitted then all documents are updated",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--collection-id",
              description: "Collection ID",
              args: { name: "collection-id" },
              isRequired: true,
            },
            {
              name: "--data",
              description: "Document data as JSON object",
              args: { name: "data" },
            },
            {
              name: "--queries",
              description:
                "Array of query strings generated using the Query class provided by the SDK",
              args: { name: "queries" },
              isRepeatable: true,
            },
            {
              name: "--transaction-id",
              description: "Transaction ID for staging the operation",
              args: { name: "transaction-id" },
            },
            ...listOptions,
          ],
        },
        {
          name: "delete-documents",
          description:
            "Bulk delete documents using queries, if no queries are passed then all documents are deleted",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--collection-id",
              description: "Collection ID",
              args: { name: "collection-id" },
              isRequired: true,
            },
            {
              name: "--queries",
              description:
                "Array of query strings generated using the Query class provided by the SDK",
              args: { name: "queries" },
              isRepeatable: true,
            },
            {
              name: "--transaction-id",
              description: "Transaction ID for staging the operation",
              args: { name: "transaction-id" },
            },
            ...listOptions,
          ],
        },
        {
          name: "create-query",
          description:
            "Get a list of all the user's documents in a given collection using a POST request",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--collection-id",
              description: "Collection ID",
              args: { name: "collection-id" },
              isRequired: true,
            },
            {
              name: "--queries",
              description:
                "Array of query strings generated using the Query class provided by the SDK",
              args: { name: "queries" },
              isRepeatable: true,
            },
            {
              name: "--transaction-id",
              description:
                "Transaction ID to read uncommitted changes within the transaction",
              args: { name: "transaction-id" },
            },
            {
              name: "--total",
              description:
                "When set to false, the total count returned will be 0 and will not be calculated",
            },
            {
              name: "--ttl",
              description:
                "TTL (seconds) for cached responses when caching is enabled for select queries",
              args: { name: "ttl" },
            },
            ...listOptions,
            {
              name: "--select",
              description: "Attribute to include in the response",
              args: { name: "select" },
              isRepeatable: true,
            },
          ],
        },
        {
          name: "get-document",
          description: "Get a document by its unique ID",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--collection-id",
              description: "Collection ID",
              args: { name: "collection-id" },
              isRequired: true,
            },
            {
              name: "--document-id",
              description: "Document ID",
              args: { name: "document-id" },
              isRequired: true,
            },
            {
              name: "--queries",
              description:
                "Array of query strings generated using the Query class provided by the SDK",
              args: { name: "queries" },
              isRepeatable: true,
            },
            {
              name: "--transaction-id",
              description:
                "Transaction ID to read uncommitted changes within the transaction",
              args: { name: "transaction-id" },
            },
            {
              name: "--select",
              description: "Attribute to include in the response",
              args: { name: "select" },
              isRepeatable: true,
            },
          ],
        },
        {
          name: "upsert-document",
          description: "Create or update a Document",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--collection-id",
              description: "Collection ID",
              args: { name: "collection-id" },
              isRequired: true,
            },
            {
              name: "--document-id",
              description: "Document ID",
              args: { name: "document-id" },
              isRequired: true,
            },
            {
              name: "--data",
              description: "Document data as JSON object",
              args: { name: "data" },
            },
            {
              name: "--permissions",
              description: "An array of permissions strings",
              args: { name: "permissions" },
              isRepeatable: true,
            },
            {
              name: "--transaction-id",
              description: "Transaction ID for staging the operation",
              args: { name: "transaction-id" },
            },
          ],
        },
        {
          name: "update-document",
          description: "Update a document by its unique ID",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--collection-id",
              description: "Collection ID",
              args: { name: "collection-id" },
              isRequired: true,
            },
            {
              name: "--document-id",
              description: "Document ID",
              args: { name: "document-id" },
              isRequired: true,
            },
            {
              name: "--data",
              description: "Document data as JSON object",
              args: { name: "data" },
            },
            {
              name: "--permissions",
              description: "An array of permissions strings",
              args: { name: "permissions" },
              isRepeatable: true,
            },
            {
              name: "--transaction-id",
              description: "Transaction ID for staging the operation",
              args: { name: "transaction-id" },
            },
          ],
        },
        {
          name: "delete-document",
          description: "Delete a document by its unique ID",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--collection-id",
              description: "Collection ID",
              args: { name: "collection-id" },
              isRequired: true,
            },
            {
              name: "--document-id",
              description: "Document ID",
              args: { name: "document-id" },
              isRequired: true,
            },
            {
              name: "--transaction-id",
              description: "Transaction ID for staging the operation",
              args: { name: "transaction-id" },
            },
          ],
        },
        {
          name: "list-indexes",
          description: "List indexes in the collection",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--collection-id",
              description: "Collection ID",
              args: { name: "collection-id" },
              isRequired: true,
            },
            {
              name: "--queries",
              description:
                "Array of query strings generated using the Query class provided by the SDK",
              args: { name: "queries" },
              isRepeatable: true,
            },
            {
              name: "--total",
              description:
                "When set to false, the total count returned will be 0 and will not be calculated",
            },
            ...listOptions,
          ],
        },
        {
          name: "create-index",
          description: "Creates an index on the attributes listed",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--collection-id",
              description: "Collection ID",
              args: { name: "collection-id" },
              isRequired: true,
            },
            {
              name: "--key",
              description: "Index Key",
              args: { name: "key" },
              isRequired: true,
            },
            {
              name: "--type",
              description: "Index type",
              args: { name: "type" },
              isRequired: true,
            },
            {
              name: "--attributes",
              description: "Array of attributes to index",
              args: { name: "attributes" },
              isRepeatable: true,
              isRequired: true,
            },
            {
              name: "--orders",
              description: "Array of index orders",
              args: { name: "orders" },
              isRepeatable: true,
            },
            {
              name: "--lengths",
              description: "Length of index",
              args: { name: "lengths" },
              isRepeatable: true,
            },
            {
              name: "--description",
              description: "Optional description for the index",
              args: { name: "description" },
            },
          ],
        },
        {
          name: "get-index",
          description: "Get index by ID",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--collection-id",
              description: "Collection ID",
              args: { name: "collection-id" },
              isRequired: true,
            },
            {
              name: "--key",
              description: "Index Key",
              args: { name: "key" },
              isRequired: true,
            },
          ],
        },
        {
          name: "delete-index",
          description: "Delete an index",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--collection-id",
              description: "Collection ID",
              args: { name: "collection-id" },
              isRequired: true,
            },
            {
              name: "--key",
              description: "Index Key",
              args: { name: "key" },
              isRequired: true,
            },
          ],
        },
        {
          name: "create-failover",
          description:
            "Trigger a manual failover for a dedicated database with high availability enabled",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--target-replica-id",
              description: "Target replica ID to promote",
              args: { name: "target-replica-id" },
            },
          ],
        },
        {
          name: "list-operations",
          description:
            "List the lifecycle operations recorded for a dedicated database, newest first",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
            {
              name: "--status",
              description: "Filter by operation status",
              args: { name: "status" },
            },
            {
              name: "--limit",
              description: "Maximum number of operations to return",
              args: { name: "limit" },
            },
            {
              name: "--offset",
              description: "Number of operations to skip",
              args: { name: "offset" },
            },
          ],
        },
        {
          name: "get-replicas",
          description: "Get high availability status for a dedicated database",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "get-status",
          description:
            "Get real-time health and status information for a dedicated database",
          icon,
          options: [
            {
              name: "--database-id",
              description: "Database ID",
              args: { name: "database-id" },
              isRequired: true,
            },
          ],
        },
      ],
    },
    {
      name: "waf",
      description: "Web application firewall rules",
      icon,
      subcommands: [
        {
          name: "list-rules",
          description: "List WAF rules for the current project",
          icon,
          options: [
            {
              name: "--queries",
              description:
                "Array of query strings generated using the Query class provided by the SDK",
              args: { name: "queries" },
              isRepeatable: true,
            },
            {
              name: "--search",
              description: "Search term to filter your list results",
              args: { name: "search" },
            },
            {
              name: "--total",
              description:
                "When set to false, the total count returned will be 0 and will not be calculated",
            },
            ...listOptions,
          ],
        },
        {
          name: "create-bypass-rule",
          description: "Create a bypass WAF rule",
          icon,
          options: [
            {
              name: "--rule-id",
              description: "Rule ID",
              args: { name: "rule-id" },
              isRequired: true,
            },
            {
              name: "--resource-type",
              description: "Resource type the rule applies to",
              args: { name: "resource-type" },
              isRequired: true,
            },
            {
              name: "--name",
              description: "Rule name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--resource-id",
              description: "Resource identifier",
              args: { name: "resource-id" },
            },
            {
              name: "--description",
              description: "Optional description for the rule",
              args: { name: "description" },
            },
            {
              name: "--priority",
              description: "Evaluation priority",
              args: { name: "priority" },
            },
            {
              name: "--enabled",
              description:
                "Set to false to create the rule in a disabled state",
            },
            {
              name: "--conditions",
              description:
                "Array of condition strings generated using the WAF Condition builder",
              args: { name: "conditions" },
              isRepeatable: true,
            },
            {
              name: "--schedule",
              description:
                "When the rule is active: mode, days, interval, anchor, startTime and endTime (HH:MM), and an optional IANA timezone (UTC by default)",
              args: { name: "schedule" },
            },
          ],
        },
        {
          name: "update-bypass-rule",
          description: "Update a bypass WAF rule",
          icon,
          options: [
            {
              name: "--rule-id",
              description: "Rule ID",
              args: { name: "rule-id" },
              isRequired: true,
            },
            {
              name: "--resource-type",
              description: "Resource type the rule applies to",
              args: { name: "resource-type" },
            },
            {
              name: "--resource-id",
              description: "Resource identifier",
              args: { name: "resource-id" },
            },
            {
              name: "--name",
              description: "Rule name",
              args: { name: "name" },
            },
            {
              name: "--description",
              description: "Optional description for the rule",
              args: { name: "description" },
            },
            {
              name: "--priority",
              description: "Evaluation priority",
              args: { name: "priority" },
            },
            {
              name: "--enabled",
              description: "Set to false to disable the rule",
            },
            {
              name: "--conditions",
              description:
                "Array of condition strings generated using the WAF Condition builder",
              args: { name: "conditions" },
              isRepeatable: true,
            },
            {
              name: "--schedule",
              description:
                "When the rule is active: mode, days, interval, anchor, startTime and endTime (HH:MM), and an optional IANA timezone (UTC by default)",
              args: { name: "schedule" },
            },
          ],
        },
        {
          name: "create-challenge-rule",
          description: "Create a challenge WAF rule",
          icon,
          options: [
            {
              name: "--rule-id",
              description: "Rule ID",
              args: { name: "rule-id" },
              isRequired: true,
            },
            {
              name: "--resource-type",
              description: "Resource type the rule applies to",
              args: { name: "resource-type" },
              isRequired: true,
            },
            {
              name: "--name",
              description: "Rule name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--resource-id",
              description: "Resource identifier",
              args: { name: "resource-id" },
            },
            {
              name: "--description",
              description: "Optional description for the rule",
              args: { name: "description" },
            },
            {
              name: "--challenge-type",
              description: "Challenge type enforced by the rule",
              args: { name: "challenge-type" },
            },
            {
              name: "--priority",
              description: "Evaluation priority",
              args: { name: "priority" },
            },
            {
              name: "--enabled",
              description:
                "Set to false to create the rule in a disabled state",
            },
            {
              name: "--conditions",
              description:
                "Array of condition strings generated using the WAF Condition builder",
              args: { name: "conditions" },
              isRepeatable: true,
            },
            {
              name: "--difficulty",
              description:
                "Challenge difficulty from 1 (easiest) to 5 (hardest)",
              args: { name: "difficulty" },
            },
            {
              name: "--ttl",
              description:
                "How long, in seconds, a visitor stays cleared after passing the challenge before being challenged again",
              args: { name: "ttl" },
            },
            {
              name: "--schedule",
              description:
                "When the rule is active: mode, days, interval, anchor, startTime and endTime (HH:MM), and an optional IANA timezone (UTC by default)",
              args: { name: "schedule" },
            },
          ],
        },
        {
          name: "update-challenge-rule",
          description: "Update a challenge WAF rule",
          icon,
          options: [
            {
              name: "--rule-id",
              description: "Rule ID",
              args: { name: "rule-id" },
              isRequired: true,
            },
            {
              name: "--resource-type",
              description: "Resource type the rule applies to",
              args: { name: "resource-type" },
            },
            {
              name: "--resource-id",
              description: "Resource identifier",
              args: { name: "resource-id" },
            },
            {
              name: "--name",
              description: "Rule name",
              args: { name: "name" },
            },
            {
              name: "--description",
              description: "Optional description for the rule",
              args: { name: "description" },
            },
            {
              name: "--challenge-type",
              description: "Challenge type enforced by the rule",
              args: { name: "challenge-type" },
            },
            {
              name: "--priority",
              description: "Evaluation priority",
              args: { name: "priority" },
            },
            {
              name: "--enabled",
              description: "Set to false to disable the rule",
            },
            {
              name: "--conditions",
              description:
                "Array of condition strings generated using the WAF Condition builder",
              args: { name: "conditions" },
              isRepeatable: true,
            },
            {
              name: "--difficulty",
              description:
                "Challenge difficulty from 1 (easiest) to 5 (hardest)",
              args: { name: "difficulty" },
            },
            {
              name: "--ttl",
              description:
                "How long, in seconds, a visitor stays cleared after passing the challenge before being challenged again",
              args: { name: "ttl" },
            },
            {
              name: "--schedule",
              description:
                "When the rule is active: mode, days, interval, anchor, startTime and endTime (HH:MM), and an optional IANA timezone (UTC by default)",
              args: { name: "schedule" },
            },
          ],
        },
        {
          name: "create-deny-rule",
          description: "Create a deny WAF rule",
          icon,
          options: [
            {
              name: "--rule-id",
              description: "Rule ID",
              args: { name: "rule-id" },
              isRequired: true,
            },
            {
              name: "--resource-type",
              description: "Resource type the rule applies to",
              args: { name: "resource-type" },
              isRequired: true,
            },
            {
              name: "--name",
              description: "Rule name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--resource-id",
              description: "Resource identifier",
              args: { name: "resource-id" },
            },
            {
              name: "--description",
              description: "Optional description for the rule",
              args: { name: "description" },
            },
            {
              name: "--priority",
              description: "Evaluation priority",
              args: { name: "priority" },
            },
            {
              name: "--enabled",
              description:
                "Set to false to create the rule in a disabled state",
            },
            {
              name: "--conditions",
              description:
                "Array of condition strings generated using the WAF Condition builder",
              args: { name: "conditions" },
              isRepeatable: true,
            },
            {
              name: "--schedule",
              description:
                "When the rule is active: mode, days, interval, anchor, startTime and endTime (HH:MM), and an optional IANA timezone (UTC by default)",
              args: { name: "schedule" },
            },
          ],
        },
        {
          name: "update-deny-rule",
          description: "Update a deny WAF rule",
          icon,
          options: [
            {
              name: "--rule-id",
              description: "Rule ID",
              args: { name: "rule-id" },
              isRequired: true,
            },
            {
              name: "--resource-type",
              description: "Resource type the rule applies to",
              args: { name: "resource-type" },
            },
            {
              name: "--resource-id",
              description: "Resource identifier",
              args: { name: "resource-id" },
            },
            {
              name: "--name",
              description: "Rule name",
              args: { name: "name" },
            },
            {
              name: "--description",
              description: "Optional description for the rule",
              args: { name: "description" },
            },
            {
              name: "--priority",
              description: "Evaluation priority",
              args: { name: "priority" },
            },
            {
              name: "--enabled",
              description: "Set to false to disable the rule",
            },
            {
              name: "--conditions",
              description:
                "Array of condition strings generated using the WAF Condition builder",
              args: { name: "conditions" },
              isRepeatable: true,
            },
            {
              name: "--schedule",
              description:
                "When the rule is active: mode, days, interval, anchor, startTime and endTime (HH:MM), and an optional IANA timezone (UTC by default)",
              args: { name: "schedule" },
            },
          ],
        },
        {
          name: "create-rate-limit-rule",
          description: "Create a rate limit WAF rule",
          icon,
          options: [
            {
              name: "--rule-id",
              description: "Rule ID",
              args: { name: "rule-id" },
              isRequired: true,
            },
            {
              name: "--resource-type",
              description: "Resource type the rule applies to",
              args: { name: "resource-type" },
              isRequired: true,
            },
            {
              name: "--name",
              description: "Rule name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--limit",
              description:
                "Maximum number of matching requests allowed in the configured interval",
              args: { name: "limit" },
              isRequired: true,
            },
            {
              name: "--interval",
              description: "Interval in seconds used for rate limiting",
              args: { name: "interval" },
              isRequired: true,
            },
            {
              name: "--resource-id",
              description: "Resource identifier",
              args: { name: "resource-id" },
            },
            {
              name: "--description",
              description: "Optional description for the rule",
              args: { name: "description" },
            },
            {
              name: "--key",
              description: "Rate limit key",
              args: { name: "key" },
            },
            {
              name: "--strategy",
              description: "Rate limit strategy",
              args: { name: "strategy" },
            },
            {
              name: "--max-bucket-size",
              description:
                "Maximum number of tokens the bucket can hold for the `tokenBucket` strategy, controlling how large a burst is allowed",
              args: { name: "max-bucket-size" },
            },
            {
              name: "--priority",
              description: "Evaluation priority",
              args: { name: "priority" },
            },
            {
              name: "--enabled",
              description:
                "Set to false to create the rule in a disabled state",
            },
            {
              name: "--conditions",
              description:
                "Array of condition strings generated using the WAF Condition builder",
              args: { name: "conditions" },
              isRepeatable: true,
            },
            {
              name: "--schedule",
              description:
                "When the rule is active: mode, days, interval, anchor, startTime and endTime (HH:MM), and an optional IANA timezone (UTC by default)",
              args: { name: "schedule" },
            },
          ],
        },
        {
          name: "update-rate-limit-rule",
          description: "Update a rate limit WAF rule",
          icon,
          options: [
            {
              name: "--rule-id",
              description: "Rule ID",
              args: { name: "rule-id" },
              isRequired: true,
            },
            {
              name: "--resource-type",
              description: "Resource type the rule applies to",
              args: { name: "resource-type" },
            },
            {
              name: "--resource-id",
              description: "Resource identifier",
              args: { name: "resource-id" },
            },
            {
              name: "--name",
              description: "Rule name",
              args: { name: "name" },
            },
            {
              name: "--description",
              description: "Optional description for the rule",
              args: { name: "description" },
            },
            {
              name: "--limit",
              description:
                "Maximum number of matching requests allowed in the configured interval",
              args: { name: "limit" },
            },
            {
              name: "--interval",
              description: "Interval in seconds used for rate limiting",
              args: { name: "interval" },
            },
            {
              name: "--key",
              description: "Rate limit key",
              args: { name: "key" },
            },
            {
              name: "--max-bucket-size",
              description:
                "Maximum number of tokens the bucket can hold for the `tokenBucket` strategy, controlling how large a burst is allowed",
              args: { name: "max-bucket-size" },
            },
            {
              name: "--priority",
              description: "Evaluation priority",
              args: { name: "priority" },
            },
            {
              name: "--enabled",
              description: "Set to false to disable the rule",
            },
            {
              name: "--conditions",
              description:
                "Array of condition strings generated using the WAF Condition builder",
              args: { name: "conditions" },
              isRepeatable: true,
            },
            {
              name: "--schedule",
              description:
                "When the rule is active: mode, days, interval, anchor, startTime and endTime (HH:MM), and an optional IANA timezone (UTC by default)",
              args: { name: "schedule" },
            },
          ],
        },
        {
          name: "create-redirect-rule",
          description: "Create a redirect WAF rule",
          icon,
          options: [
            {
              name: "--rule-id",
              description: "Rule ID",
              args: { name: "rule-id" },
              isRequired: true,
            },
            {
              name: "--resource-type",
              description: "Resource type the rule applies to",
              args: { name: "resource-type" },
              isRequired: true,
            },
            {
              name: "--name",
              description: "Rule name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--location",
              description: "Location used for redirect responses",
              args: { name: "location" },
              isRequired: true,
            },
            {
              name: "--status-code",
              description: "Integer status code used for redirect responses",
              args: { name: "status-code" },
              isRequired: true,
            },
            {
              name: "--resource-id",
              description: "Resource identifier",
              args: { name: "resource-id" },
            },
            {
              name: "--description",
              description: "Optional description for the rule",
              args: { name: "description" },
            },
            {
              name: "--priority",
              description: "Evaluation priority",
              args: { name: "priority" },
            },
            {
              name: "--enabled",
              description:
                "Set to false to create the rule in a disabled state",
            },
            {
              name: "--conditions",
              description:
                "Array of condition strings generated using the WAF Condition builder",
              args: { name: "conditions" },
              isRepeatable: true,
            },
            {
              name: "--schedule",
              description:
                "When the rule is active: mode, days, interval, anchor, startTime and endTime (HH:MM), and an optional IANA timezone (UTC by default)",
              args: { name: "schedule" },
            },
          ],
        },
        {
          name: "update-redirect-rule",
          description: "Update a redirect WAF rule",
          icon,
          options: [
            {
              name: "--rule-id",
              description: "Rule ID",
              args: { name: "rule-id" },
              isRequired: true,
            },
            {
              name: "--resource-type",
              description: "Resource type the rule applies to",
              args: { name: "resource-type" },
            },
            {
              name: "--resource-id",
              description: "Resource identifier",
              args: { name: "resource-id" },
            },
            {
              name: "--name",
              description: "Rule name",
              args: { name: "name" },
            },
            {
              name: "--description",
              description: "Optional description for the rule",
              args: { name: "description" },
            },
            {
              name: "--location",
              description: "Location used for redirect responses",
              args: { name: "location" },
            },
            {
              name: "--status-code",
              description: "Integer status code used for redirect responses",
              args: { name: "status-code" },
            },
            {
              name: "--priority",
              description: "Evaluation priority",
              args: { name: "priority" },
            },
            {
              name: "--enabled",
              description: "Set to false to disable the rule",
            },
            {
              name: "--conditions",
              description:
                "Array of condition strings generated using the WAF Condition builder",
              args: { name: "conditions" },
              isRepeatable: true,
            },
            {
              name: "--schedule",
              description:
                "When the rule is active: mode, days, interval, anchor, startTime and endTime (HH:MM), and an optional IANA timezone (UTC by default)",
              args: { name: "schedule" },
            },
          ],
        },
        {
          name: "get-rule",
          description: "Get a WAF rule by its ID",
          icon,
          options: [
            {
              name: "--rule-id",
              description: "Rule ID",
              args: { name: "rule-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "delete-rule",
          description: "Delete a WAF rule",
          icon,
          options: [
            {
              name: "--rule-id",
              description: "Rule ID",
              args: { name: "rule-id" },
              isRequired: true,
            },
          ],
        },
      ],
    },
    {
      name: "webhooks",
      description: "Project webhooks",
      icon,
      subcommands: [
        {
          name: "list",
          description: "Get a list of all webhooks belonging to the project",
          icon,
          options: [
            {
              name: "--queries",
              description:
                "Array of query strings generated using the Query class provided by the SDK",
              args: { name: "queries" },
              isRepeatable: true,
            },
            {
              name: "--total",
              description:
                "When set to false, the total count returned will be 0 and will not be calculated",
            },
            ...listOptions,
          ],
        },
        {
          name: "create",
          description: "Create a new webhook",
          icon,
          options: [
            {
              name: "--webhook-id",
              description: "Webhook ID",
              args: { name: "webhook-id" },
              isRequired: true,
            },
            {
              name: "--url",
              description: "Webhook URL",
              args: { name: "url" },
              isRequired: true,
            },
            {
              name: "--name",
              description: "Webhook name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--events",
              description: "Events list",
              args: { name: "events" },
              isRepeatable: true,
              isRequired: true,
            },
            { name: "--enabled", description: "Enable or disable a webhook" },
            {
              name: "--tls",
              description:
                "Certificate verification, false for disabled or true for enabled",
            },
            {
              name: "--auth-username",
              description: "Webhook HTTP user",
              args: { name: "auth-username" },
            },
            {
              name: "--auth-password",
              description: "Webhook HTTP password",
              args: { name: "auth-password" },
            },
            {
              name: "--secret",
              description: "Webhook secret key",
              args: { name: "secret" },
            },
            {
              name: "--description",
              description: "Optional description for the webhook",
              args: { name: "description" },
            },
          ],
        },
        {
          name: "get",
          description: "Get a webhook by its unique ID",
          icon,
          options: [
            {
              name: "--webhook-id",
              description: "Webhook ID",
              args: { name: "webhook-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "update",
          description: "Update a webhook by its unique ID",
          icon,
          options: [
            {
              name: "--webhook-id",
              description: "Webhook ID",
              args: { name: "webhook-id" },
              isRequired: true,
            },
            {
              name: "--name",
              description: "Webhook name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--url",
              description: "Webhook URL",
              args: { name: "url" },
              isRequired: true,
            },
            {
              name: "--events",
              description: "Events list",
              args: { name: "events" },
              isRepeatable: true,
              isRequired: true,
            },
            { name: "--enabled", description: "Enable or disable a webhook" },
            {
              name: "--tls",
              description:
                "Certificate verification, false for disabled or true for enabled",
            },
            {
              name: "--auth-username",
              description: "Webhook HTTP user",
              args: { name: "auth-username" },
            },
            {
              name: "--auth-password",
              description: "Webhook HTTP password",
              args: { name: "auth-password" },
            },
            {
              name: "--description",
              description: "Optional description for the webhook",
              args: { name: "description" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a webhook by its unique ID",
          icon,
          options: [
            {
              name: "--webhook-id",
              description: "Webhook ID",
              args: { name: "webhook-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "update-secret",
          description: "Update the webhook signing key",
          icon,
          options: [
            {
              name: "--webhook-id",
              description: "Webhook ID",
              args: { name: "webhook-id" },
              isRequired: true,
            },
            {
              name: "--secret",
              description: "Webhook secret key",
              args: { name: "secret" },
            },
          ],
        },
      ],
    },
  ],
  icon,
  options: [
    {
      name: ["-j", "--json"],
      description: "Output filtered JSON (empty values omitted)",
      isPersistent: true,
    },
    {
      name: ["-R", "--raw"],
      description: "Output the full raw JSON response",
      isPersistent: true,
    },
    {
      name: "--show-secrets",
      description: "Reveal secrets and tokens in output (redacted by default)",
      isPersistent: true,
    },
    {
      name: ["-V", "--verbose"],
      description: "Show full error stack traces",
      isPersistent: true,
    },
    {
      name: ["-f", "--force"],
      description: "Skip confirmation prompts",
      isPersistent: true,
    },
    {
      name: "--report",
      description: "Print a prefilled bug report link on error",
      isPersistent: true,
    },
    {
      name: "--config-file",
      description:
        "Project config file path to use instead of the nearest appwrite.config.json",
      args: { name: "path", template: "filepaths" },
      isPersistent: true,
    },
    {
      name: "--reason",
      description:
        "Record why you are running this command, as text, on its audit logs",
      args: { name: "text" },
      isPersistent: true,
    },
    { name: ["-v", "--version"], description: "Output the CLI version" },
    {
      name: ["-h", "--help"],
      description: "Display help for a command",
      priority: 49,
      isPersistent: true,
    },
  ],
};

export default completionSpec;
