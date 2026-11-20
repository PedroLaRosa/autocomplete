// Zapier Platform CLI v19.3.0 (npm zapier-platform-cli latest, 2026-11-20). Source: read statically, nothing was executed.
// Walked packages/cli/src/oclif/{oCommands.js,commands/**} and the generated docs/cli.md at git tag
// zapier-platform-cli@19.3.0, plus the shipped oclif plugins (plugin-help 6.2.32, plugin-autocomplete 3.2.34, plugin-version 2.2.32).
// Since v19.0.0 the binary is `zapier-platform` (the old `zapier` bin was removed); this file keeps its name so it still loads for `zapier`.
// Not verified: the enum values of `register --audience/--role/--category` (fetched from the Zapier API at runtime).
const formatFlag: Fig.Option = {
  name: ["-f", "--format"],
  description:
    'Change the way structured data is presented. If "json" or "raw", you can pipe the output of the command into other tools, such as jq',
  args: {
    name: "format",
    suggestions: ["plain", "json", "raw", "row", "table"],
    default: "table",
  },
};
const debugFlag: Fig.Option = {
  name: ["-d", "--debug"],
  description: "Show extra debugging output",
};
// For commands whose own flags already claim `-d`, oclif resolves the short flag to the command's flag first
const debugLongFlag: Fig.Option = {
  name: "--debug",
  description: "Show extra debugging output",
};
const forceFlag = (description: string): Fig.Option => ({
  name: ["-f", "--force"],
  description,
});
const yesFlag: Fig.Option = {
  name: ["-y", "--yes"],
  description:
    'Automatically answer "yes" to any prompts. Useful if you want to avoid interactive prompts to run this command in CI',
};
const disableDependencyDetectionFlag: Fig.Option = {
  name: "--disable-dependency-detection",
  description:
    'Disable "smart" file inclusion. By default, Zapier only includes files that are required by your entry point (`index.js` by default). If you (or your dependencies) require files dynamically (such as with `require(someVar)`), then you may see "Cannot find module" errors. Disabling this may make your `build.zip` too large. If that\'s the case, try using the `includeInBuild` option in your `.zapierapprc`. See the docs about `includeInBuild` for more info',
};
const skipDepInstallFlag: Fig.Option = {
  name: ["--skip-dep-install", "--skip-npm-install"],
  description:
    "Skip installing a fresh copy of dependencies for shorter build time. Helpful for using yarn, pnpm, or local copies of dependencies",
};
const versionArg = (description: string): Fig.Arg => ({
  name: "version",
  description,
});

const completionSpec: Fig.Spec = {
  name: ["zapier-platform", "zapier"],
  description:
    "The Zapier CLI is a developer-focused way to create and maintain Zapier integrations. See more at https://github.com/zapier/zapier-platform",
  options: [
    {
      name: ["-h", "--help"],
      description: "Show help for the CLI or a command",
      isPersistent: true,
    },
    {
      name: ["-v", "--version"],
      description: "Show the CLI version",
    },
  ],
  subcommands: [
    {
      name: "analytics",
      description:
        "Show the status of the analytics that are collected. Also used to change what is collected",
      options: [
        {
          name: ["-m", "--mode"],
          description:
            "Choose how much information to share. Anonymous mode drops the OS type and Zapier user id, but keeps command info. Identifying information is used only for debugging purposes",
          args: {
            name: "mode",
            suggestions: ["enabled", "anonymous", "disabled"],
          },
        },
        debugFlag,
      ],
    },
    {
      name: "autocomplete",
      description: "Display autocomplete installation instructions",
      options: [
        {
          name: ["-r", "--refresh-cache"],
          description: "Refresh cache (ignores displaying instructions)",
        },
      ],
      args: {
        name: "shell",
        description: "Shell type",
        isOptional: true,
        suggestions: ["zsh", "bash", "powershell"],
      },
    },
    {
      name: "build",
      description: "Build a pushable zip from the current directory",
      options: [
        disableDependencyDetectionFlag,
        skipDepInstallFlag,
        {
          name: "--skip-validation",
          description:
            "Skip local pre-push validation checks, and remote validation check of the CLI app's schema and AppVersion integrity",
          hidden: true,
        },
        debugFlag,
      ],
    },
    {
      name: "cache:clear",
      description: "Clear the cache data for a major version",
      options: [debugFlag],
      args: {
        name: "majorVersion",
        description:
          "The cache data will be deleted for this major version. If not provided, you must pick from a list of major versions for this integration",
        isOptional: true,
      },
    },
    {
      name: "canary:create",
      description:
        "Create a new canary deployment, diverting a specified percentage of traffic from one version to another for a specified duration",
      options: [
        {
          name: ["-p", "--percent"],
          description: "Percent of traffic to route to new version",
          isRequired: true,
          args: { name: "percent" },
        },
        {
          name: ["-d", "--duration"],
          description: "Duration of the canary in seconds (30 to 86400)",
          isRequired: true,
          args: { name: "seconds" },
        },
        {
          name: ["-u", "--user"],
          description:
            "Canary this user (email) across all accounts, unless `account-id` is specified",
          args: { name: "user" },
        },
        {
          name: ["-a", "--account-id"],
          description:
            "The account ID to target. If user is specified, only canary the user within this account. If user is not specified, then this argument is only permitted for Zapier staff",
          args: { name: "account-id" },
        },
        {
          name: ["-f", "--force-include-all"],
          description:
            "Overrides any default filters the canary system imposes. This argument is only permitted for Zapier staff",
        },
        debugLongFlag,
      ],
      args: [
        {
          name: "versionFrom",
          description: "Version to route traffic from",
        },
        {
          name: "versionTo",
          description: "Version to canary traffic to",
        },
      ],
    },
    {
      name: "canary:delete",
      description: "Delete an active canary deployment",
      args: [
        {
          name: "versionFrom",
          description: "Version to route traffic from",
        },
        {
          name: "versionTo",
          description: "Version canary traffic is routed to",
        },
      ],
    },
    {
      name: "canary:list",
      description: "List all active canary deployments",
      options: [formatFlag, debugFlag],
    },
    {
      name: "convert",
      description: "Convert a Visual Builder integration to a CLI integration",
      options: [
        {
          name: ["-i", "--integrationId"],
          description:
            'To get the integration/app ID, go to "https://developer.zapier.com", click on an integration, and copy the number directly after "/app/" in the URL',
          dependsOn: ["--version"],
          exclusiveOn: ["--json"],
          args: { name: "integrationId" },
        },
        {
          name: ["-v", "--version"],
          description:
            "Convert a specific version. Required when converting a Visual Builder integration",
          dependsOn: ["--integrationId"],
          args: {
            name: "version",
          },
        },
        {
          name: ["-j", "--json"],
          description:
            'The JSON definition to use, as alternative for reading from a Visual Builder integration. Must be a JSON-encoded object. The data can be passed from the command directly like \'{"key": "value"}\', read from a file like @file.json, or read from stdin like @-',
          exclusiveOn: ["--integrationId"],
          args: { name: "json" },
        },
        {
          name: ["-t", "--title"],
          description:
            "The integration title, which will be snake-cased for the package.json name",
          dependsOn: ["--json"],
          args: { name: "title" },
        },
        {
          name: ["-d", "--description"],
          description:
            "The integration description, which will be used for the package.json description",
          dependsOn: ["--json"],
          args: { name: "description" },
        },
        debugLongFlag,
      ],
      args: {
        name: "path",
        description:
          "Relative to your current path - IE: `.` for current directory",
        template: "folders",
      },
    },
    {
      name: ["delete:integration", "delete:app"],
      description: "Delete your integration (including all versions)",
      options: [debugFlag],
      isDangerous: true,
    },
    {
      name: "delete:version",
      description: "Delete a specific version of your integration",
      options: [debugFlag],
      args: versionArg(
        "Specify the version to delete. It must have no users or Zaps"
      ),
      isDangerous: true,
    },
    {
      name: "deprecate",
      description:
        "Mark a non-production version of your integration as deprecated, with removal by a certain date",
      options: [
        forceFlag("Skip confirmation prompt. Use with caution"),
        {
          name: ["-r", "--reason"],
          description: "Reason for deprecation",
          args: {
            name: "reason",
            suggestions: [
              "api endpoint deprecated",
              "security vulnerability",
              "critical bug",
              "legal requirement",
              "other",
            ],
          },
        },
        debugFlag,
      ],
      args: [
        versionArg("The version to deprecate"),
        {
          name: "date",
          description:
            "The date (YYYY-MM-DD) when Zapier will make the specified version unavailable",
        },
      ],
    },
    {
      name: "describe",
      description: "Describe the current integration",
      options: [formatFlag, debugFlag],
    },
    {
      name: "domain-filter:get",
      description: "Get the domains a version's authentication can be sent to",
      options: [formatFlag, debugFlag],
      args: versionArg("The version to get the domain filter for"),
      hidden: true,
    },
    {
      name: "domain-filter:set",
      description:
        "Set the domains a version's authentication can be sent to. Only for private integrations; published integrations get this from Zapier review",
      options: [
        {
          name: ["-a", "--append"],
          description:
            "Add the domains to the current filter instead of replacing it",
        },
        debugFlag,
      ],
      args: [
        versionArg(
          "The version to set the domain filter for. It is copied forward when a new version is pushed"
        ),
        {
          name: "domains...",
          description:
            "The domains this version's authentication can be sent to, space separated. For example: `api.example.com *.example.org`. Replaces the current filter unless you pass --append",
          isVariadic: true,
        },
      ],
      hidden: true,
    },
    {
      name: "domain-filter:unset",
      description:
        "Clear the domains a version's authentication can be sent to",
      options: [debugFlag],
      args: versionArg("The version to clear the domain filter for"),
      hidden: true,
    },
    {
      name: "env:get",
      description: "Get environment variables for a version",
      options: [formatFlag, debugFlag],
      args: versionArg("The version to get the environment for"),
    },
    {
      name: "env:set",
      description: "Set environment variables for a version",
      options: [
        forceFlag(
          "Force the update of environment variables regardless if the app version is production or not. Use with caution"
        ),
        debugFlag,
      ],
      args: [
        versionArg(
          "The version to set the environment for. Values are copied forward when a new version is created, but this command will only ever affect the specified version"
        ),
        {
          name: "key-value pairs...",
          description:
            "The key-value pairs to set. Keys are case-insensitive. Each pair should be space separated and pairs should be separated by an `=`. For example: `A=123 B=456`",
          isOptional: true,
          isVariadic: true,
        },
      ],
    },
    {
      name: "env:unset",
      description: "Unset environment variables for a version",
      options: [
        forceFlag(
          "Force the update of environment variables regardless if the app version is production or not. Use with caution"
        ),
        debugFlag,
      ],
      args: [
        versionArg("The version to set the environment for"),
        {
          name: "keys...",
          description: "The keys to unset. Keys are case-insensitive",
          isOptional: true,
          isVariadic: true,
        },
      ],
      isDangerous: true,
    },
    {
      name: "help",
      description: "Display help for zapier-platform",
      options: [
        {
          name: ["-n", "--nested-commands"],
          description: "Include all nested commands in the output",
        },
      ],
      args: {
        name: "command",
        description: "Command to show help for",
        isOptional: true,
      },
    },
    {
      name: "history",
      description: "Get the history of your integration",
      options: [formatFlag, debugFlag],
    },
    {
      name: "init",
      description:
        "Initialize a new Zapier integration with a project template",
      options: [
        {
          name: ["-t", "--template"],
          description: "The template to start your integration with",
          args: {
            name: "template",
            suggestions: [
              "basic-auth",
              "callback",
              "custom-auth",
              "digest-auth",
              "dynamic-dropdown",
              "files",
              "line-items",
              "minimal",
              "oauth1-trello",
              "oauth2",
              "openai",
              "search-or-create",
              "session-auth",
            ],
          },
        },
        {
          name: ["-m", "--module"],
          description:
            "Choose module type: CommonJS or ES Modules. Only enabled for Typescript and Minimal templates",
          args: {
            name: "module",
            suggestions: ["commonjs", "esm"],
          },
        },
        {
          name: ["-l", "--language"],
          description:
            "Choose the language to use for your new integration. Defaults to JavaScript",
          args: {
            name: "language",
            suggestions: ["javascript", "typescript"],
          },
        },
        debugFlag,
      ],
      args: {
        name: "path",
        description:
          "Where to create the new integration. If the directory doesn't exist, it will be created. If the directory isn't empty, we'll ask for confirmation",
        template: "folders",
      },
    },
    {
      name: "integrations",
      description: "List integrations you have admin access to",
      options: [formatFlag, debugFlag],
    },
    {
      name: "apps",
      description:
        "List integrations you have admin access to (deprecated, use integrations)",
      options: [formatFlag, debugFlag],
      deprecated: true,
    },
    {
      name: "invoke",
      description:
        "Invoke an authentication method, a trigger, or a create/search action locally or remotely",
      options: [
        {
          name: ["-i", "--inputData"],
          description:
            'The input data to pass to the action. Must be a JSON-encoded object. The data can be passed from the command directly like \'{"key": "value"}\', read from a file like @file.json, or read from stdin like @-',
          args: { name: "inputData" },
        },
        {
          name: "--isFillingDynamicDropdown",
          description:
            "Set bundle.meta.isFillingDynamicDropdown to true. Only makes sense for a polling trigger",
        },
        {
          name: "--isLoadingSample",
          description:
            "Set bundle.meta.isLoadingSample to true. When true in production, this run is initiated by the user in the Zap editor trying to pull a sample",
        },
        {
          name: "--isPopulatingDedupe",
          description:
            "Set bundle.meta.isPopulatingDedupe to true. Only makes sense for a polling trigger",
        },
        {
          name: "--limit",
          description:
            "Set bundle.meta.limit. Only makes sense for a trigger. -1 means no limit (default)",
          args: { name: "limit" },
        },
        {
          name: ["-p", "--page"],
          description:
            "Set bundle.meta.page. Only makes sense for a trigger. First page is 0",
          args: { name: "page" },
        },
        {
          name: "--non-interactive",
          description: "Do not show interactive prompts",
        },
        {
          name: ["-z", "--timezone"],
          description:
            "Set the default timezone for datetime field interpretation. If not set, defaults to America/Chicago, which matches Zapier production behavior",
          args: { name: "timezone" },
        },
        {
          name: "--redirect-uri",
          description:
            "Only used by `auth start` subcommand. The redirect URI that will be passed to the OAuth2 authorization URL. Defaults to http://localhost:9000",
          args: { name: "redirect-uri" },
        },
        {
          name: "--local-port",
          description:
            "Only used by `auth start` subcommand. The local port that will be used to start the local HTTP server to listen for the OAuth2 callback. Defaults to 9000",
          args: { name: "local-port" },
        },
        {
          name: ["-r", "--remote"],
          description:
            "Run your trigger/action remotely on Zapier production servers instead of locally. This requires deploying your integration first",
        },
        {
          name: ["-v", "--version"],
          description:
            "Only used when `--remote` is set. Specify a deployed version to invoke instead of the one currently set in your local package.json",
          args: { name: "version" },
        },
        {
          name: ["-a", "--authentication-id"],
          description:
            "EXPERIMENTAL: Use the production authentication data with the given authentication ID instead of the local .env file. Specify '-' to interactively select one from your available authentications",
          args: { name: "authentication-id" },
        },
        {
          name: "--paging-token",
          description:
            "Set bundle.meta.paging_token. Used for search pagination or bulk reads",
          args: { name: "paging-token" },
        },
        debugFlag,
      ],
      args: [
        {
          name: "actionType",
          description: "The action type you want to invoke",
          isOptional: true,
          suggestions: ["auth", "trigger", "search", "create"],
        },
        {
          name: "actionKey",
          description:
            'The trigger/action key you want to invoke. If ACTIONTYPE is "auth", this can be "label", "refresh", "render", "start", "template" or "test"',
          isOptional: true,
        },
        {
          name: "authData",
          description:
            'Only used by `auth render`. JSON-encoded object with auth field values (e.g. `\'{"access_token":"a_token"}\'`). Values here take precedence over the .env file',
          isOptional: true,
        },
      ],
    },
    {
      name: "jobs",
      description:
        "Lists ongoing migration or promotion jobs for the current integration",
      options: [formatFlag, debugFlag],
    },
    {
      name: "legacy",
      description:
        "Mark a non-production version of your integration as legacy",
      options: [
        forceFlag("Skip confirmation prompt. Use with caution"),
        debugFlag,
      ],
      args: versionArg("The version to mark as legacy"),
    },
    {
      name: "link",
      description: "Link the current directory with an existing integration",
      options: [debugFlag],
    },
    {
      name: "login",
      description: "Configure your `~/.zapierrc` with a deploy key",
      options: [
        {
          name: ["-s", "--sso"],
          description:
            "Use this flag if you log into Zapier a Single Sign-On (SSO) button and don't have a Zapier password",
        },
        debugFlag,
      ],
    },
    {
      name: "logout",
      description: "Deactivate your active deploy key and reset `~/.zapierrc`",
      options: [debugFlag],
    },
    {
      name: "logs",
      description: "Print recent logs",
      options: [
        {
          name: ["-v", "--version"],
          description: "Filter logs to the specified version",
          args: {
            name: "version",
          },
        },
        {
          name: ["-s", "--status"],
          description: "Filter logs to only see errors or successes",
          args: {
            name: "status",
            suggestions: ["any", "success", "error"],
            default: "any",
          },
        },
        {
          name: ["-t", "--type"],
          description: "See logs of the specified type",
          args: {
            name: "type",
            suggestions: ["console", "bundle", "http"],
            default: "console",
          },
        },
        {
          name: "--detailed",
          description: "See extra info, like request/response body and headers",
        },
        {
          name: ["-u", "--user"],
          description: "Only show logs for this user. Defaults to your account",
          args: {
            name: "user",
            default: "me",
          },
        },
        {
          name: "--limit",
          description:
            "Cap the number of logs returned. Max is 50 (also the default)",
          args: {
            name: "limit",
            default: "50",
          },
        },
        formatFlag,
        debugFlag,
      ],
    },
    {
      name: "migrate",
      description:
        "Migrate a percentage of users or a single user from one version of your integration to another",
      options: [
        {
          name: "--user",
          description:
            "Migrates a user's private Zaps under the user's individual account, excluding organization accounts",
          exclusiveOn: ["--account"],
          args: {
            name: "user",
          },
        },
        {
          name: "--account",
          description:
            "Migrates a user's private and shared Zaps under the user's individual and organization accounts. Use cautiously as it can break shared Zaps for other users in Team or Enterprise accounts",
          exclusiveOn: ["--user"],
          args: {
            name: "account",
          },
        },
        yesFlag,
        debugFlag,
      ],
      args: [
        {
          name: "fromVersion",
          description: "The version FROM which to migrate users",
        },
        {
          name: "toVersion",
          description: "The version TO which to migrate users",
        },
        {
          name: "percent",
          description:
            "Percentage (between 1 and 100) of users to migrate. Cannot be combined with --user or --account",
          isOptional: true,
        },
      ],
    },
    {
      name: "promote",
      description: "Promote a specific version to public access",
      options: [yesFlag, debugFlag],
      args: versionArg("The version you want to promote"),
    },
    {
      name: "pull",
      description:
        "Retrieve and update your local integration files with the promoted version (or latest version if not public)",
      options: [debugFlag],
    },
    {
      name: "push",
      description: "Build and upload the current integration",
      options: [
        disableDependencyDetectionFlag,
        skipDepInstallFlag,
        {
          name: "--skip-validation",
          description:
            "Skip local pre-push validation checks, and remote validation check of the CLI app's schema and AppVersion integrity",
          hidden: true,
        },
        {
          name: "--overwrite-partner-changes",
          description:
            "(Internal use only) Allows Zapier staff to push changes to integrations in certain situations",
          hidden: true,
        },
        {
          name: "--snapshot",
          description:
            "Pass in a label to create a snapshot version of this integration for development and testing purposes. The version will be created as 0.0.0-MY-LABEL",
          args: { name: "label" },
        },
        debugFlag,
      ],
    },
    {
      name: "register",
      description:
        "Register a new integration in your account, or update the existing one if a `.zapierapprc` file is found",
      options: [
        {
          name: ["-D", "--desc"],
          description:
            'A sentence describing your app in 140 characters or less, e.g. "Trello is a team collaboration tool to organize tasks and keep projects on track."',
          args: { name: "desc" },
        },
        {
          name: ["-u", "--url"],
          description:
            "The homepage URL of your app, e.g., https://example.com",
          args: { name: "url" },
        },
        {
          name: ["-a", "--audience"],
          description: "Are you building a public or private integration?",
          args: { name: "audience" },
        },
        {
          name: ["-r", "--role"],
          description:
            "What is your relationship with the app you're integrating with Zapier?",
          args: { name: "role" },
        },
        {
          name: ["-c", "--category"],
          description:
            "How would you categorize your app? Choose the most appropriate option for your app's core features",
          args: { name: "category" },
        },
        {
          name: ["-s", "--subscribe"],
          description:
            "Get tips and recommendations about this integration along with our monthly newsletter that details the performance of your integration and the latest Zapier news",
          exclusiveOn: ["--no-subscribe"],
        },
        {
          name: "--no-subscribe",
          description: "Do not subscribe to the integration newsletter",
          exclusiveOn: ["--subscribe"],
        },
        {
          name: ["-y", "--yes"],
          description:
            "Assume yes for all yes/no prompts. This flag will also update an existing integration (as opposed to registering a new one) if a .zapierapprc file is found",
        },
        debugFlag,
      ],
      args: {
        name: "title",
        description:
          "Your integration's public title. Asked interactively if not present",
        isOptional: true,
      },
    },
    {
      name: "scaffold",
      description:
        "Add a starting trigger, create, search, or resource to your integration",
      options: [
        {
          name: ["-d", "--dest"],
          description:
            "Specify the new file's directory. Use this flag when you want to create a different folder structure such as `src/triggers` instead of the default `triggers`. Defaults to `[triggers|searches|creates]/{noun}`",
          args: {
            name: "dest",
            template: "folders",
          },
        },
        {
          name: "--test-dest",
          description:
            "Specify the new test file's directory. Use this flag when you want to create a different folder structure such as `src/triggers` instead of the default `triggers`. Defaults to `test/[triggers|searches|creates]/{noun}`",
          args: {
            name: "test-dest",
            template: "folders",
          },
        },
        {
          name: ["-e", "--entry"],
          description:
            "Supply the path to your integration's entry point (`index.js` or `src/index.ts`). This will try to automatically detect the correct file if not provided",
          args: {
            name: "entry",
            template: "filepaths",
          },
        },
        forceFlag(
          "Should we overwrite an existing trigger/search/create file?"
        ),
        {
          name: "--no-help",
          description:
            "When scaffolding, should we skip adding helpful intro comments? Useful if this isn't your first rodeo",
        },
        debugLongFlag,
      ],
      args: [
        {
          name: "actionType",
          suggestions: ["trigger", "search", "create", "resource"],
        },
        {
          name: "noun",
        },
      ],
    },
    {
      name: ["team:add", "team:invite"],
      description: "Add a team member to your integration",
      options: [debugFlag],
      args: [
        {
          name: "email",
          description:
            "The user to be invited. If they don't have a Zapier account, they'll be prompted to create one",
        },
        {
          name: "role",
          description:
            "The level the invited team member should be at. Admins can edit everything and get email updates. Collaborators have read-access to the app and get email updates. Subscribers only get email updates",
          suggestions: ["admin", "collaborator", "subscriber"],
        },
        {
          name: "message",
          description:
            "A message sent in the email to your team member, if you need to provide context. Wrap the message in quotes to ensure spaces get saved",
          isOptional: true,
        },
      ],
      isDangerous: true,
    },
    {
      name: ["team:get", "team:list"],
      description: "Get team members involved with your integration",
      options: [formatFlag, debugFlag],
    },
    {
      name: ["team:remove", "team:delete"],
      description: "Remove a team member from all versions of your integration",
      options: [debugFlag],
      isDangerous: true,
    },
    {
      name: "test",
      description:
        'Test your integration via the "test" script in your "package.json"',
      options: [
        {
          name: "--skip-validate",
          description:
            "Forgo running `zapier-platform validate` before tests are run. This will speed up tests if you're modifying functionality of an existing integration rather than adding new actions",
        },
        {
          name: "--yarn",
          description:
            "Use `yarn` instead of `npm`. This happens automatically if there's a `yarn.lock` file, but you can manually force `yarn` if you run tests from a sub-directory",
        },
        {
          name: "--pnpm",
          description:
            "Use `pnpm` instead of `npm`. This happens automatically if there's a `pnpm-lock.yaml` file, but you can manually force `pnpm` if you run tests from a sub-directory",
        },
        debugFlag,
      ],
    },
    {
      name: "upload",
      description: "Upload the latest build of your integration to Zapier",
      options: [debugFlag],
    },
    {
      name: ["users:add", "users:invite"],
      description: "Add a user to some or all versions of your integration",
      options: [
        {
          ...forceFlag(
            "Skip confirmation. Useful for running programmatically"
          ),
          isDangerous: true,
        },
        debugFlag,
      ],
      args: [
        {
          name: "email",
          description:
            "The user to be invited. If they don't have a Zapier account, they'll be prompted to create one",
        },
        {
          name: "version",
          description:
            "A version string (like 1.2.3). Optional, used only if you want to invite a user to a specific version instead of all versions",
          isOptional: true,
        },
      ],
    },
    {
      name: ["users:get", "users:list"],
      description:
        "Get a list of users who have been invited to your integration",
      options: [formatFlag, debugFlag],
    },
    {
      name: "users:links",
      description:
        "Get a list of links that are used to invite users to your integration",
      options: [formatFlag, debugFlag],
    },
    {
      name: ["users:remove", "users:delete"],
      description: "Remove a user from all versions of your integration",
      options: [
        {
          ...forceFlag(
            "Skips confirmation. Useful for running programmatically"
          ),
          isDangerous: true,
        },
        debugFlag,
      ],
      args: {
        name: "email",
        description: "The user to be removed",
      },
      isDangerous: true,
    },
    {
      name: "validate",
      description: "Validate your integration",
      options: [
        {
          name: "--without-style",
          description: "Forgo pinging the Zapier server to run further checks",
          exclusiveOn: ["--fail-for-publishing"],
        },
        {
          name: "--skip-build",
          description:
            "Skip running the _zapier-build script before validation",
        },
        {
          name: "--fail-for-publishing",
          description:
            "Exit with a non-zero code when a check would block promoting or publishing this integration",
          exclusiveOn: ["--without-style"],
        },
        formatFlag,
        debugFlag,
      ],
    },
    {
      name: "version",
      description: "Show the CLI version",
      options: [
        {
          name: "--verbose",
          description:
            "Show additional information about the CLI, such as the architecture, node version, operating system and plugin versions",
        },
        {
          name: "--json",
          description: "Format output as json",
        },
      ],
    },
    {
      name: "versions",
      description:
        "List the versions of your integration available for use in Zapier automations",
      options: [
        {
          name: ["-a", "--all"],
          description: "List all versions, including deprecated versions",
        },
        formatFlag,
        debugFlag,
      ],
    },
  ],
};

export default completionSpec;
