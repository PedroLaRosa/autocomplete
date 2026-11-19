// VTEX IO CLI (vtex) v4.4.3 (npm latest, 2026-11-19). Source: oclif.manifest.json and command sources read statically from the npm tarballs
// of vtex@4.4.3 and of its bundled plugins (@vtex/cli-plugin-abtest 0.1.1, autoupdate 0.0.2, deploy 0.3.1, deps 0.1.1, edition 0.1.1, plugins 1.13.2,
// whoami 0.2.2, workspace 1.2.0), plus @oclif/command and @oclif/plugin-help for `help`/`--version`; nothing was executed.
// Since v3.0.0 (2021-01) add, config, debug dotnet, infra, lighthouse, logs, redirects, settings, submit, support, test and url are no longer bundled;
// they are optional plugins (`vtex plugins install <name>`) and are kept here, checked against their latest npm releases (add 0.1.2, config 0.1.2,
// debug 0.0.1, infra 1.0.0, lighthouse 1.0.0, logs 0.1.1, redirects 1.0.2, settings 0.1.2, submit 1.1.6, support 0.1.3, test 1.0.4, url 0.1.2).
// Removed upstream in v3 and therefore not in this spec: `vtex local account|welcome|workspace`, `vtex workspace create|info`.
// Not verified: the list of plugins `vtex plugins install` accepts (it is a remote feature flag); only the packages above are suggested.

const helpOption: Fig.Option = {
  name: ["--help", "-h"],
  description: "Shows this help message",
  priority: 1,
};

const verboseOption: Fig.Option = {
  name: ["--verbose", "-v"],
  description: "Shows debug level logs",
  priority: 1,
};

const traceOption: Fig.Option = {
  name: "--trace",
  description: "Ensures all requests to VTEX IO are traced",
  priority: 1,
};

// Flags accepted by every command of the CLI (`vtex plugins ...` only takes --help and --verbose)
const commonOptions: Fig.Option[] = [helpOption, verboseOption, traceOption];
const pluginsCommonOptions: Fig.Option[] = [helpOption, verboseOption];

const yesOption: Fig.Option = {
  name: ["--yes", "-y"],
  description: "Answers yes to all prompts",
};

const forceOption = (description: string): Fig.Option => ({
  name: ["--force", "-f"],
  isDangerous: true,
  description,
});

const appIdDescription = (action: string): string =>
  `Name and version of the app ({vendor}.{appname}@{x.x.x}) to ${action}`;

const optionalAppsArg = (action: string): Fig.Arg => ({
  name: "APPID",
  description: appIdDescription(action),
  isOptional: true,
  isVariadic: true,
});

const csvPathArg = (description: string): Fig.Arg => ({
  name: "CSVPATH",
  description,
  template: "filepaths",
});

const promoteSubcommand: Fig.Subcommand = {
  name: "promote",
  description:
    "Promotes the current workspace to master. Only works for production workspaces",
  options: [
    ...commonOptions,
    {
      name: "--conflict",
      description:
        "Defines how to handle data conflict between workspaces. 'master' discards the workspace's conflicting data, 'mine' overrides the master with the workspace, 'abort' aborts the promotion",
      args: {
        name: "STRATEGY",
        default: "master",
        suggestions: ["master", "mine", "abort"],
      },
    },
  ],
};

const useSubcommand: Fig.Subcommand = {
  name: "use",
  description:
    "Creates and switches to a new workspace or simply switches to an existing one",
  args: {
    name: "WORKSPACE",
    description: "Name of the workspace to use",
  },
  options: [
    ...commonOptions,
    {
      name: ["--production", "-p"],
      description: "Creates and/or switches to a production workspace",
    },
    {
      name: ["--reset", "-r"],
      description: "Resets the workspace before switching to it",
    },
  ],
};

const lighthouseSubcommands: Fig.Subcommand[] = [
  {
    name: "audit",
    description: "Runs a Lighthouse audit over the specified URL",
    args: {
      name: "URL",
      description: "URL to audit",
    },
    options: [
      ...commonOptions,
      {
        name: ["--json", "-j"],
        description: "Returns the report as a json on stdout",
      },
    ],
  },
  {
    name: "show",
    description: "Shows a previous audit report, filtering by app and/or URL",
    options: [
      ...commonOptions,
      {
        name: ["--app", "-a"],
        description: "Filters by app name",
        args: { name: "APP" },
      },
      {
        name: ["--url", "-u"],
        description: "Filters by URL",
        args: { name: "URL" },
      },
    ],
  },
];

const completion: Fig.Spec = {
  name: "vtex",
  description:
    "VTEX IO's CLI - perform any action necessary to your development process, such as linking local files to the VTEX platform, managing workspaces, and releasing new app versions",
  subcommands: [
    {
      name: "add",
      description: "Adds the specified app(s) to the manifest's dependencies",
      args: {
        name: "APPID",
        description:
          "Name and version ({vendor}.{appname}@{x.x.x}) of the dependency to include in the manifest.json file",
        isVariadic: true,
      },
      options: commonOptions,
    },
    {
      name: "autoupdate",
      description: "Updates the VTEX IO's CLI",
      args: {
        name: "CHANNEL",
        description: "Release channel to update to (defaults to stable)",
        isOptional: true,
      },
      options: [{ name: "--help", description: "Shows this help message" }],
    },
    {
      name: "browse",
      description:
        "Opens the URL relative to your current workspace and account in a new browser window",
      args: {
        name: "PATH",
        description:
          "Relative path from https://{workspace}--{account}.myvtex.com/",
        isOptional: true,
      },
      options: [
        ...commonOptions,
        {
          name: ["--qr", "-q"],
          description: "Prints a QR Code on the terminal",
        },
      ],
    },
    {
      name: "config",
      description: "Prints, sets, or resets a configuration value",
      subcommands: [
        {
          name: "get",
          description: "Prints the value of the requested configuration key",
          args: {
            name: "CONFIGNAME",
            description: "Configuration to retrieve the value from",
            suggestions: ["env", "cluster"],
          },
          options: commonOptions,
        },
        {
          name: "reset",
          description:
            "Resets the specified configuration to its default value",
          args: {
            name: "CONFIGNAME",
            description: "Name of the configuration to reset",
            suggestions: ["env", "cluster"],
          },
          options: commonOptions,
        },
        {
          name: "set",
          description: "Sets the value of a configuration key",
          args: [
            {
              name: "CONFIGNAME",
              description: "Name of the configuration",
              suggestions: ["env", "cluster"],
            },
            {
              name: "VALUE",
              description: "New value of the specified configuration",
            },
          ],
          options: commonOptions,
        },
      ],
    },
    {
      name: "debug",
      description: "Debug commands",
      subcommands: [
        {
          name: "dotnet",
          description: "Debug .NET applications (IDEs only)",
          args: {
            name: "DEBUGINST",
            description: "Name of the .NET application to debug",
          },
          options: commonOptions,
        },
      ],
    },
    {
      name: "deploy",
      description:
        "Publishes an app as a stable version. Only works for apps previously published as a release candidate version [see vtex publish --help]",
      args: {
        name: "APPID",
        description:
          "Name and version of the app ({vendor}.{appname}@{x.x.x}) you want to deploy",
        isOptional: true,
      },
      options: [
        ...commonOptions,
        yesOption,
        forceOption(
          "Ignores the testing period of 7 minutes after publishing an app (use with caution)"
        ),
      ],
    },
    {
      name: "deprecate",
      description:
        "Deprecates the specified app, uninstalling and downgrading it to the latest stable version in every VTEX account",
      args: optionalAppsArg("deprecate"),
      options: [...commonOptions, yesOption],
    },
    {
      name: "deps",
      description: "Lists, compares, or updates dependencies",
      subcommands: [
        {
          name: "diff",
          description:
            "Displays the differences between the dependencies of two distinct workspaces. If a single parameter is passed, the specified workspace's dependencies are compared with the master's. If no parameter is passed, the diff is made between the current workspace and master",
          args: [
            {
              name: "WORKSPACE1",
              description: "First workspace for comparison",
              isOptional: true,
            },
            {
              name: "WORKSPACE2",
              description: "Second workspace for comparison",
              isOptional: true,
              default: "master",
            },
          ],
          options: commonOptions,
        },
        {
          name: ["list", "ls"],
          description:
            "Displays the complete dependency tree of the current workspace",
          options: [
            ...commonOptions,
            {
              name: ["--keys", "-k"],
              description: "Shows only key dependencies",
            },
            {
              name: ["--npm", "-n"],
              description: "Includes dependencies from the npm registry",
            },
          ],
        },
        {
          name: "update",
          description:
            "Updates a dependency of the current workspace. If not specified which dependency, it updates all of them",
          args: optionalAppsArg("update"),
          options: commonOptions,
        },
      ],
    },
    {
      name: "edition",
      description: "Prints or updates the Edition App of the current account",
      subcommands: [
        {
          name: "get",
          description:
            "Displays the Edition App version installed on the current account",
          options: commonOptions,
        },
        {
          name: "set",
          description: "Sets the Edition App version for the current account",
          args: {
            name: "EDITION",
            description: "Name and version of the Edition App to install",
          },
          options: commonOptions,
        },
      ],
    },
    {
      name: "help",
      description: "Displays help for VTEX CLI commands",
      args: {
        name: "COMMAND",
        description: "Command to show help about",
        isOptional: true,
      },
      options: [
        {
          name: "--all",
          description: "Displays all commands available in the CLI",
        },
      ],
    },
    {
      name: "infra",
      description: "Installs, updates, or lists infra services",
      subcommands: [
        {
          name: "install",
          description: "Installs an infra service",
          args: {
            name: "SERVICEID",
            description:
              "Name and version of the service ({vendor}.{servicename}@{x.x.x}) to install",
          },
          options: commonOptions,
        },
        {
          name: ["list", "ls"],
          description: "Lists installed infra services",
          args: {
            name: "NAME",
            description: "Service name",
            isOptional: true,
          },
          options: [
            ...commonOptions,
            {
              name: ["--available", "-a"],
              description: "Lists services that are available to install",
            },
            {
              name: ["--filter", "-f"],
              description: "Lists services that contain the specified word",
              args: { name: "FILTER" },
            },
          ],
        },
        {
          name: "update",
          description: "Updates all installed infra services",
          options: commonOptions,
        },
      ],
    },
    {
      name: "init",
      description:
        "Copies starting files and folders from VTEX boilerplates into your local directories",
      args: {
        name: "PROJECTNAME",
        description: "Name of the folder to create the project in",
        isOptional: true,
      },
      options: commonOptions,
    },
    {
      name: "install",
      description:
        "Installs an app on the current workspace. If not specified which one, it defaults to the app in the current directory",
      args: optionalAppsArg("install"),
      options: [
        ...commonOptions,
        forceOption(
          "Installs the specified app without checking for route conflicts"
        ),
      ],
    },
    {
      name: ["lighthouse", "lh"],
      description: "Runs or displays a Lighthouse audit",
      subcommands: lighthouseSubcommands,
    },
    {
      name: "link",
      description:
        "Syncs the app in the current directory with the development workspace in use",
      options: [
        ...commonOptions,
        {
          name: ["--account", "-a"],
          description:
            "Starts a development session in the specified account. Must be paired with the '--workspace' flag",
          args: { name: "ACCOUNT" },
        },
        {
          name: ["--clean", "-c"],
          description: "Cleans builder cache",
        },
        {
          name: ["--setup", "-s"],
          description:
            "Sets up typing definitions before linking the app [see vtex setup --help]",
        },
        {
          name: ["--unsafe", "-u"],
          description: "Allows linking the app despite Typescript errors",
        },
        {
          name: ["--workspace", "-w"],
          description:
            "Starts a development session in the specified workspace. Can be paired with the '--account' flag to switch from the current account and workspace",
          args: { name: "WORKSPACE" },
        },
        {
          name: "--no-watch",
          description: "Doesn't watch for file changes after the initial link",
        },
      ],
    },
    {
      name: ["list", "ls"],
      description:
        "Lists the apps installed on the current workspace and account",
      options: commonOptions,
    },
    {
      name: "local",
      description: "Local commands",
      subcommands: [
        {
          name: "token",
          description:
            "Prints the user's auth token and copies it to the clipboard",
          options: commonOptions,
        },
      ],
    },
    {
      name: "login",
      description: "Logs in to a VTEX account",
      args: {
        name: "ACCOUNT",
        description: "Account name to log in",
        isOptional: true,
      },
      options: [
        ...commonOptions,
        {
          name: ["--workspace", "-w"],
          description: "Logs in the specified workspace",
          args: { name: "WORKSPACE" },
        },
      ],
    },
    {
      name: "logout",
      description: "Logs out of the current VTEX account",
      options: commonOptions,
    },
    {
      name: "logs",
      description: "Shows logs of an app. (Only apps in production.)",
      args: {
        name: "APP",
        description: "Name of the app to show logs",
        isOptional: true,
      },
      options: [
        ...commonOptions,
        {
          name: ["--all", "-a"],
          description:
            "Shows logs of every app installed on the current account",
        },
        {
          name: ["--past", "-p"],
          description: "Shows previous logs of the specified app",
        },
      ],
    },
    {
      name: "plugins",
      description: "Manages the CLI plugins",
      subcommands: [
        {
          name: ["install", "add"],
          description: "Installs a plugin into the CLI",
          args: {
            name: "PLUGIN",
            description:
              "Plugin to install: a name (e.g. lighthouse), an npm package (@vtex/cli-plugin-name) or a git repository URL",
            isVariadic: true,
            suggestions: [
              "add",
              "config",
              "debug",
              "infra",
              "lighthouse",
              "logs",
              "redirects",
              "settings",
              "submit",
              "support",
              "test",
              "url",
            ],
          },
          options: [
            ...pluginsCommonOptions,
            {
              name: ["--force", "-f"],
              description:
                "Refetches all packages, even the ones that were previously installed",
            },
          ],
        },
        {
          name: "link",
          description: "Links a plugin into the CLI for development",
          args: {
            name: "PATH",
            description: "Plugin path",
            template: "folders",
          },
          options: pluginsCommonOptions,
        },
        {
          name: "list",
          description: "Lists all plugins installed on your machine",
          options: [
            {
              name: "--core",
              description: "Shows core plugins",
            },
          ],
        },
        {
          name: "source",
          description: "Lists all plugins supported by VTEX",
          options: pluginsCommonOptions,
        },
        {
          name: ["uninstall", "unlink", "remove"],
          description: "Removes a plugin from the CLI",
          args: {
            name: "PLUGIN",
            description: "Plugin to uninstall",
            isOptional: true,
            isVariadic: true,
          },
          options: pluginsCommonOptions,
        },
        {
          name: "update",
          description: "Updates all plugins installed on your machine",
          options: pluginsCommonOptions,
        },
      ],
    },
    promoteSubcommand,
    {
      name: "publish",
      description:
        "Publishes the app in the current directory as a release candidate version",
      options: [
        ...commonOptions,
        forceOption("Publishes the app independently of SemVer rules"),
        {
          name: ["--tag", "-t"],
          description: "Adds the specified tag to the release",
          args: { name: "TAG" },
        },
        {
          name: ["--workspace", "-w"],
          description: "Uses the specified workspace in the app registry",
          args: { name: "WORKSPACE" },
        },
        yesOption,
      ],
    },
    {
      name: "redirects",
      description:
        "Imports, exports, or removes redirects from the current account and workspace",
      subcommands: [
        {
          name: "delete",
          description:
            "Deletes redirects from the current account and workspace",
          args: csvPathArg("CSV file containing the URL paths to delete"),
          options: commonOptions,
        },
        {
          name: "export",
          description:
            "Exports all redirects defined in the current account and workspace to a CSV file",
          args: csvPathArg("Name of the CSV file"),
          options: [
            ...commonOptions,
            {
              name: ["--concurrency", "-c"],
              description: "Maximum number of concurrent requests",
              args: { name: "CONCURRENCY", default: "5" },
            },
            {
              name: ["--batchSize", "-b"],
              description: "Batch size for writing to file",
              args: { name: "BATCHSIZE", default: "100" },
            },
            {
              name: ["--maxRetries", "-r"],
              description: "Maximum number of retries for failed requests",
              args: { name: "MAXRETRIES", default: "5" },
            },
          ],
        },
        {
          name: "import",
          description:
            "Imports redirects from a CSV file to the current account and workspace",
          args: csvPathArg("Name of the CSV file"),
          options: [
            ...commonOptions,
            {
              name: ["--reset", "-r"],
              description: "Removes all redirects previously defined",
            },
          ],
        },
      ],
    },
    {
      name: "release",
      description:
        "(Only for git users.) Bumps the app version, commits, and pushes to remote the app in the current directory",
      args: [
        {
          name: "RELEASETYPE",
          description: "Release type",
          isOptional: true,
          default: "patch",
          suggestions: ["pre", "major", "minor", "patch", "prerelease"],
        },
        {
          name: "TAGNAME",
          description: "Tag name",
          isOptional: true,
          default: "beta",
          suggestions: ["stable", "beta", "hkignore"],
        },
      ],
      options: commonOptions,
    },
    {
      name: "settings",
      description: "Prints, enables, or disables an app setting",
      subcommands: [
        {
          name: "get",
          description: "Prints the settings of an app",
          args: [
            {
              name: "APPNAME",
              description: "Name of the app to check the available settings",
            },
            {
              name: "FIELD",
              description: "Name of the setting",
              isOptional: true,
            },
          ],
          options: commonOptions,
        },
        {
          name: "set",
          description: "Sets value to the specified setting of an app",
          args: [
            {
              name: "APPNAME",
              description: "Name of the app",
            },
            {
              name: "FIELD",
              description: "Name of the setting",
            },
            {
              name: "VALUE",
              description: "Value of the setting",
            },
          ],
          options: commonOptions,
        },
        {
          name: "unset",
          description: "Disables the specified setting of an app",
          args: [
            {
              name: "APPNAME",
              description: "Name of the app",
            },
            {
              name: "FIELD",
              description: "Name of the setting",
            },
          ],
          options: commonOptions,
        },
      ],
    },
    {
      name: "setup",
      description:
        "Sets up typings and tools for the current development environment",
      options: [
        ...commonOptions,
        {
          name: ["--ignore-linked", "-i"],
          description:
            "Sets up types from published apps while ignoring types from linked apps",
        },
        {
          name: "--all",
          description: "Sets up all available typings, configs, and tools",
        },
        {
          name: "--tooling",
          description: "Sets up Prettier, Husky, and ESLint",
        },
        {
          name: "--tsconfig",
          description: "Sets up React and Node TSconfig, if applicable",
        },
        {
          name: "--typings",
          description: "Sets up GraphQL and React typings",
        },
      ],
    },
    {
      name: "submit",
      description:
        "Submits the current app, or an specified one, to validation from VTEX App Store team",
      args: {
        name: "APPID",
        description: appIdDescription("submit"),
        isOptional: true,
      },
      options: commonOptions,
    },
    {
      name: "support",
      description: "Logs in as support to another VTEX account",
      args: {
        name: "ACCOUNT",
        description: "Name of the account to give support",
      },
      options: commonOptions,
    },
    {
      name: "switch",
      description: "Switches to another VTEX account",
      args: {
        name: "ACCOUNT",
        description: "Account name to log in",
      },
      options: [
        ...commonOptions,
        {
          name: ["--workspace", "-w"],
          description: "Moves to the specified workspace",
          args: { name: "WORKSPACE" },
        },
      ],
    },
    {
      name: "test",
      description: "Runs unit or end-to-end tests of the app",
      subcommands: [
        {
          name: "e2e",
          description:
            "Runs E2E integration tests for the app in the current directory",
          options: [
            ...commonOptions,
            {
              name: ["--report", "-r"],
              description:
                "Displays the results and state of the specified test ID",
              args: { name: "TESTID" },
            },
            {
              name: ["--token", "-t"],
              description:
                "(Not recommended.) Sends your personal authorization token to your testing session, making it available during the tests. It can be dangerous since it exposes your token via the 'authToken' environment variable",
            },
            {
              name: ["--workspace", "-w"],
              description: "Runs tests for the apps installed on the workspace",
            },
          ],
        },
        {
          name: "unit",
          description: "Runs unit tests for the app in the current directory",
          options: [
            ...commonOptions,
            {
              name: ["--unsafe", "-u"],
              description: "Allows tests with Typescript errors",
            },
          ],
        },
      ],
    },
    {
      name: "undeprecate",
      description:
        "Reestablishes a deprecated version of an app as a stable version",
      args: optionalAppsArg("undeprecate"),
      options: [...commonOptions, yesOption],
    },
    {
      name: "uninstall",
      description:
        "Uninstalls an app from the current workspace. If not specified which app to uninstall, it defaults to the app in the current directory",
      args: {
        name: "APPNAME",
        description: "Name of the app to uninstall",
        isOptional: true,
        isVariadic: true,
      },
      options: [...commonOptions, yesOption],
    },
    {
      name: "unlink",
      description:
        "Unlinks an app from the current workspace. If not specified which app to unlink, it defaults to the app in the current directory",
      args: {
        name: "APPID",
        description: "Name of the app to unlink",
        isOptional: true,
        isVariadic: true,
      },
      options: [
        ...commonOptions,
        {
          name: ["--all", "-a"],
          description: "Unlinks all apps",
        },
      ],
    },
    {
      name: "update",
      description:
        "Updates all installed apps to the latest (minor or patch) version. Does not upgrade to another major version",
      options: commonOptions,
    },
    useSubcommand,
    {
      name: "url",
      description:
        "Prints the base URL for the current account, workspace and environment",
      options: commonOptions,
    },
    {
      name: "whoami",
      description:
        "Prints the current account, workspace, environment, and login details",
      options: commonOptions,
    },
    {
      name: "workspace",
      description: "Manages workspaces",
      subcommands: [
        {
          name: "abtest",
          description:
            "Creates, finishes, or displays the status of an A/B test",
          subcommands: [
            {
              name: "finish",
              description:
                "Stops all A/B tests from running on the current account",
              options: commonOptions,
            },
            {
              name: "start",
              description: "Starts a new A/B test on the current workspace",
              options: commonOptions,
            },
            {
              name: "status",
              description: "Displays the results of the active A/B tests",
              options: commonOptions,
            },
          ],
        },
        {
          name: "delete",
          description:
            "Deletes one or many workspaces from the current account",
          args: {
            name: "WORKSPACE",
            description: "Name of the workspace to delete",
            isVariadic: true,
          },
          options: [
            ...commonOptions,
            forceOption(
              "Deletes the specified workspace even if it is currently in use"
            ),
            yesOption,
          ],
        },
        {
          name: ["list", "ls"],
          description: "Lists all workspaces of the current account",
          options: commonOptions,
        },
        promoteSubcommand,
        {
          name: "reset",
          description:
            "Cleans all configurations of a workspace and recreates it with the configurations from master. If not specified which workspace, it defaults to the current one",
          args: {
            name: "WORKSPACENAME",
            description: "Name of the workspace to reset",
            isOptional: true,
          },
          options: [
            ...commonOptions,
            {
              name: ["--production", "-p"],
              description: "Recreates the workspace as a production one",
            },
            yesOption,
          ],
        },
        {
          name: "status",
          description: "Displays information about the specified workspace",
          args: {
            name: "WORKSPACENAME",
            description: "Name of the workspace",
            isOptional: true,
          },
          options: commonOptions,
        },
        useSubcommand,
      ],
    },
  ],
  options: [
    {
      name: "--help",
      description: "Shows help for the CLI or a command",
    },
    {
      name: ["--version", "-v"],
      description: "Shows the CLI version",
    },
  ],
};

export default completion;
