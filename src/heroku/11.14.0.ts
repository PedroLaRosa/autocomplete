// Heroku CLI v11.14.0 (npm heroku latest, Homebrew formula agrees, 2026-11-20). Source: oclif.manifest.json of heroku@11.14.0
// plus the manifests of its bundled @oclif plugins (commands, help, plugins, search, update, version, which); every visible
// command, flag, alias, enum and argument was cross-checked. Hidden commands (autocomplete:*, console, dashboard,
// git:credentials, rake, spaces:hosts) and hidden flags are left out; hidden aliases (create, open, restart, scale, ...) are extra names.
import { getAppGenerator } from "./shared";

const promptOption: Fig.Option = {
  name: "--prompt",
  description: "Interactively prompt for command arguments and flags",
};

const completionSpec: Fig.Spec = {
  name: "heroku",
  subcommands: [
    {
      name: ["auth:2fa", "2fa", "twofactor"],
      description: "Check 2fa status",
      options: [promptOption],
    },
    {
      name: ["auth:2fa:disable", "twofactor:disable", "2fa:disable"],
      description: "Disables 2fa on account",
      options: [promptOption],
    },
    {
      name: ["auth:login", "login"],
      description: "Login with your Heroku credentials",
      options: [
        {
          name: "--browser",
          description:
            'Browser to open SSO with (example: "firefox", "safari")',
          args: {},
        },
        {
          name: ["-i", "--interactive"],
          description: "Login with username/password",
        },
        {
          name: ["-e", "--expires-in"],
          description: "Duration of token in seconds (default 30 days)",
          args: {},
        },
        promptOption,
      ],
    },
    {
      name: ["auth:logout", "logout"],
      description: "Clears local login credentials and invalidates API session",
    },
    {
      name: "auth:token",
      description:
        "Outputs current CLI authentication token.\nBy default, the CLI auth token is only valid for 1 year. To generate a long-lived token, use heroku authorizations:create",
      options: [{ name: ["-h", "--help"], description: "Show CLI help" }],
    },
    {
      name: ["auth:whoami", "whoami"],
      description: "Display the current logged in user",
    },
    {
      name: "authorizations",
      description: "List OAuth authorizations",
      options: [
        { name: ["-j", "--json"], description: "Output in json format" },
        {
          name: ["-t", "--team"],
          description: "Team to list OAuth authorizations for",
          args: {},
        },
        promptOption,
      ],
    },
    {
      name: "authorizations:create",
      description: "Create a new OAuth authorization",
      options: [
        {
          name: ["-d", "--description"],
          description: "Set a custom authorization",
          args: {},
        },
        { name: ["-S", "--short"], description: "Only output token" },
        { name: ["-j", "--json"], description: "Output in json format" },
        {
          name: ["-s", "--scope"],
          description: "Set custom OAuth scopes",
          args: {},
        },
        {
          name: ["-e", "--expires-in"],
          description: "Set expiration in seconds (default no expiration)",
          args: {},
        },
        {
          name: ["-t", "--team"],
          description: "Team to create OAuth authorization on",
          args: {},
        },
        promptOption,
      ],
    },
    {
      name: "authorizations:info",
      description: "Show an existing OAuth authorization",
      options: [
        { name: ["-j", "--json"], description: "Output in json format" },
        promptOption,
      ],
      args: { name: "id" },
    },
    {
      name: ["authorizations:revoke", "authorizations:destroy"],
      description: "Revoke OAuth authorization",
      options: [promptOption],
      args: { name: "id" },
    },
    {
      name: "authorizations:rotate",
      description: "Updates an OAuth authorization token",
      options: [promptOption],
      args: { name: "id" },
    },
    {
      name: "authorizations:update",
      description: "Updates an OAuth authorization",
      options: [
        {
          name: ["-d", "--description"],
          description: "Set a custom authorization description",
          args: {},
        },
        {
          name: "--client-id",
          description: "Identifier of OAuth client to set",
          args: {},
        },
        {
          name: "--client-secret",
          description: "Secret of OAuth client to set",
          args: {},
        },
        promptOption,
      ],
      args: { name: "id" },
    },
    {
      name: "autocomplete",
      description: "Display autocomplete installation instructions",
      options: [
        {
          name: ["-r", "--refresh-cache"],
          description: "Refresh cache only (ignores displaying instructions)",
        },
        promptOption,
      ],
      args: { name: "shell", description: "Shell type", isOptional: true },
    },
    {
      name: "buildpacks",
      description: "List the buildpacks on an app",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        { name: ["-j", "--json"], description: "Output in json format" },
        promptOption,
      ],
    },
    {
      name: "buildpacks:add",
      description:
        "Add new app buildpack, inserting into list of buildpacks if necessary",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        {
          name: ["-i", "--index"],
          description: "The 1-based index of the URL in the list of URLs",
          args: {},
        },
        { name: ["-j", "--json"], description: "Output in json format" },
        promptOption,
      ],
      args: {
        name: "buildpack",
        description: "Namespace/name of the buildpack",
      },
    },
    {
      name: "buildpacks:clear",
      description: "Clear all buildpacks set on the app",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        { name: ["-j", "--json"], description: "Output in json format" },
        promptOption,
      ],
    },
    {
      name: "buildpacks:info",
      description: "Fetch info about a buildpack",
      options: [
        { name: ["-j", "--json"], description: "Output in json format" },
        promptOption,
      ],
      args: {
        name: "buildpack",
        description: "Namespace/name of the buildpack",
      },
    },
    {
      name: "buildpacks:remove",
      description: "Remove a buildpack set on the app",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        {
          name: ["-i", "--index"],
          description:
            "The 1-based index of the URL to remove from the list of URLs",
          args: {},
        },
        { name: ["-j", "--json"], description: "Output in json format" },
        promptOption,
      ],
      args: {
        name: "buildpack",
        description: "Namespace/name of the buildpack",
        isOptional: true,
      },
    },
    {
      name: "buildpacks:search",
      description: "Search for buildpacks",
      options: [
        {
          name: "--namespace",
          description:
            "Buildpack namespaces to filter on using a comma separated list",
          args: {},
        },
        {
          name: "--name",
          description:
            "Buildpack names to filter on using a comma separated list",
          args: {},
        },
        {
          name: "--description",
          description: "Buildpack description to filter on",
          args: {},
        },
        promptOption,
      ],
      args: {
        name: "term",
        description:
          "Search term that searches across name, namespace, and description",
        isOptional: true,
      },
    },
    {
      name: "buildpacks:set",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        {
          name: ["-i", "--index"],
          description: "The 1-based index of the URL in the list of URLs",
          args: {},
        },
        { name: ["-j", "--json"], description: "Output in json format" },
        promptOption,
      ],
      args: {
        name: "buildpack",
        description: "Namespace/name of the buildpack",
      },
    },
    {
      name: "buildpacks:versions",
      description: "List versions of a buildpack",
      options: [promptOption],
      args: {
        name: "buildpack",
        description: "Namespace/name of the buildpack",
      },
    },
    {
      name: "ci",
      description: "Display the most recent CI runs for the given pipeline",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
        },
        {
          name: "--watch",
          description: "Keep running and watch for new and update tests",
        },
        {
          name: ["-p", "--pipeline"],
          description: "Name of pipeline",
          args: {},
        },
        { name: "--json", description: "Output in json format" },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
    },
    {
      name: "ci:info",
      description: "Show the status of a specific test run",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
        },
        {
          name: "--node",
          description: "The node number to show its setup and output",
          args: {},
        },
        {
          name: ["-p", "--pipeline"],
          description: "Name of pipeline",
          args: {},
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
      args: { name: "test-run" },
    },
    {
      name: "ci:last",
      description:
        "Looks for the most recent run and returns the output of that run",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
        },
        {
          name: "--node",
          description: "The node number to show its setup and output",
          args: {},
        },
        {
          name: ["-p", "--pipeline"],
          description: "Name of pipeline",
          args: {},
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
    },
    {
      name: "ci:rerun",
      description: "Rerun tests against current directory",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
        },
        {
          name: ["-p", "--pipeline"],
          description: "Name of pipeline",
          args: {},
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
      args: { name: "number", isOptional: true },
    },
    {
      name: "ci:run",
      description: "Run tests against current directory",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
        },
        {
          name: ["-p", "--pipeline"],
          description: "Name of pipeline",
          args: {},
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
    },
    {
      name: "clients",
      description: "List your OAuth clients",
      options: [
        { name: ["-j", "--json"], description: "Output in json format" },
        promptOption,
      ],
    },
    {
      name: "clients:create",
      description: "Create a new OAuth client",
      options: [
        { name: ["-j", "--json"], description: "Output in json format" },
        { name: ["-s", "--shell"], description: "Output in shell format" },
        promptOption,
      ],
      args: [{ name: "name" }, { name: "redirect_uri" }],
    },
    {
      name: "clients:destroy",
      description: "Delete client by ID",
      options: [promptOption],
      args: { name: "id" },
    },
    {
      name: "clients:info",
      description: "Show details of an oauth client",
      options: [
        { name: ["-j", "--json"], description: "Output in json format" },
        { name: ["-s", "--shell"], description: "Output in shell format" },
        promptOption,
      ],
      args: { name: "id" },
    },
    {
      name: "clients:rotate",
      description: "Rotate OAuth client secret",
      options: [
        { name: ["-j", "--json"], description: "Output in json format" },
        { name: ["-s", "--shell"], description: "Output in shell format" },
        promptOption,
      ],
      args: { name: "id" },
    },
    {
      name: "clients:update",
      description: "Update OAuth client",
      options: [
        {
          name: ["-n", "--name"],
          description: "Change the client name",
          args: {},
        },
        {
          name: "--url",
          description: "Change the client redirect URL",
          args: {},
        },
        promptOption,
      ],
      args: { name: "id" },
    },
    {
      name: "config",
      description: "Display the config vars for an app",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        {
          name: ["-s", "--shell"],
          description: "Output config vars in shell format",
        },
        {
          name: ["-j", "--json"],
          description: "Output config vars in json format",
        },
        promptOption,
      ],
    },
    {
      name: "config:edit",
      description:
        "Interactively edit config vars\nThis command opens the app config in a text editor set by $VISUAL or $EDITOR.\nAny variables added/removed/changed will be updated on the app after saving and closing the file",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
      args: { name: "key", description: "Edit a single key", isOptional: true },
    },
    {
      name: "config:get",
      description: "Display a single config value for an app",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        {
          name: ["-s", "--shell"],
          description: "Output config vars in shell format",
        },
        { name: ["-j", "--json"], description: "Output in json format" },
        promptOption,
      ],
      args: { name: "KEY", isVariadic: true },
    },
    {
      name: ["config:unset", "config:remove"],
      description: "Unset one or more config vars",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
    },
    {
      name: "domains",
      description: "List domains for an app",
      options: [
        { name: ["-h", "--help"], description: "Show CLI help" },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        { name: ["-j", "--json"], description: "Output in json format" },
        {
          name: "--columns",
          description: "Only show provided columns (comma-separated)",
          args: {},
        },
        { name: "--sort", description: "Sort by property", args: {} },
        {
          name: "--filter",
          description:
            "Filter property by partial string matching, ex: name=foo",
          args: {},
        },
        { name: ["-c", "--csv"], description: "Output in csv format" },
        { name: ["-x", "--extended"], description: "Show extra columns" },
        {
          name: "--no-wrap",
          description: "Disable wrapped table cells for easier copy/paste",
        },
        promptOption,
      ],
    },
    {
      name: "domains:add",
      description: "Add a domain to an app",
      options: [
        { name: ["-h", "--help"], description: "Show CLI help" },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-c", "--cert"],
          description:
            "The name of the SSL cert you want to use for this domain",
          args: {},
        },
        { name: ["-j", "--json"], description: "Output in json format" },
        { name: "--wait" },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
      args: { name: "hostname" },
    },
    {
      name: "domains:clear",
      description: "Remove all domains from an app",
      options: [
        { name: ["-h", "--help"], description: "Show CLI help" },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
    },
    {
      name: "domains:info",
      description: "Show detailed information for a domain on an app",
      options: [
        { name: ["-h", "--help"], description: "Show CLI help" },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
      args: { name: "hostname" },
    },
    {
      name: "domains:remove",
      description: "Remove a domain from an app",
      options: [
        { name: ["-h", "--help"], description: "Show CLI help" },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
      args: { name: "hostname" },
    },
    {
      name: "domains:update",
      description:
        "Update a domain to use a different SSL certificate on an app",
      options: [
        { name: ["-h", "--help"], description: "Show CLI help" },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        {
          name: "--cert",
          description:
            "The name or id of the certificate you want to use for this domain",
          args: {},
          isRequired: true,
        },
        promptOption,
      ],
      args: { name: "hostname" },
    },
    {
      name: "domains:wait",
      description: "Wait for domain to be active for an app",
      options: [
        { name: ["-h", "--help"], description: "Show CLI help" },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
      args: { name: "hostname", isOptional: true },
    },
    {
      name: "git:clone",
      description:
        "Clones a heroku app to your local machine at DIRECTORY (defaults to app name)",
      options: [
        {
          name: ["-a", "--app"],
          description: "The Heroku app to use",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: 'The git remote to create, default "heroku"',
          args: {},
        },
        promptOption,
      ],
      args: {
        name: "DIRECTORY",
        description: "Where to clone the app",
        isOptional: true,
      },
    },
    {
      name: "git:remote",
      description:
        "Adds a git remote to an app repo\nextra arguments will be passed to git remote add\n",
      options: [
        {
          name: ["-a", "--app"],
          description: "The Heroku app to use",
          args: { name: "app", generators: getAppGenerator },
        },
        {
          name: ["-r", "--remote"],
          description: "The git remote to create",
          args: {},
        },
        promptOption,
      ],
    },
    {
      name: "labs:disable",
      description: "Disables an experimental feature",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
      args: { name: "feature" },
    },
    {
      name: ["local", "local:start"],
      description:
        "Run heroku app locally\nStart the application specified by a Procfile (defaults to ./Procfile)",
      options: [
        {
          name: ["-f", "--procfile"],
          description: "Use a different Procfile",
          args: {},
        },
        {
          name: ["-e", "--env"],
          description: "Location of env file (defaults to .env)",
          args: {},
        },
        {
          name: ["-p", "--port"],
          description: "Port to listen on",
          args: { default: "5001" },
        },
        {
          name: "--start-cmd",
          description: "Command to run as web when no Procfile is present",
          args: {},
        },
      ],
      args: { name: "processname", isOptional: true },
    },
    {
      name: "local:run",
      description: "Run a one-off command",
      options: [
        {
          name: ["-e", "--env"],
          args: {},
          description: "Location of env file (defaults to .env)",
        },
        {
          name: ["-p", "--port"],
          args: { default: "5001" },
          description: "Port to listen on",
        },
      ],
    },
    { name: "local:version", description: "Display node-foreman version" },
    {
      name: "logs",
      description:
        "Display recent log output\ndisable colors with --no-color, HEROKU_LOGS_COLOR=0, or HEROKU_COLOR=0",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        {
          name: ["-n", "--num"],
          description:
            "Number of lines to display (ignored for Fir generation apps)",
          args: {},
        },
        {
          name: ["-d", "--dyno-name", "--dyno"],
          description:
            'Only show output from this dyno (such as "web-123-456" or "worker.2")',
          args: {},
        },
        {
          name: ["-s", "--source"],
          description:
            'Only show output from this source (such as "app" or "heroku")',
          args: {},
        },
        {
          name: ["-t", "--tail"],
          description:
            "Continually stream logs (always enabled for Fir-generation apps)",
        },
        {
          name: "--force-colors",
          description: "Force use of colors (even on non-tty output)",
          deprecated: true,
        },
        {
          name: ["-p", "--process-type"],
          description:
            'Only show output from this process type (such as "web" or "worker")',
          args: {},
        },
        promptOption,
      ],
    },
    {
      name: "pipelines",
      description: "List pipelines you have access to",
      options: [
        { name: "--json", description: "Output in json format" },
        promptOption,
      ],
    },
    {
      name: "pipelines:add",
      description:
        "Add this app to a pipeline\nThe app and pipeline names must be specified.\nThe stage of the app will be guessed based on its name if not specified",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        {
          name: ["-s", "--stage"],
          description: "Stage of first app in pipeline",
          args: {},
        },
        promptOption,
      ],
      args: { name: "pipeline", description: "Name of pipeline" },
    },
    {
      name: "pipelines:connect",
      description: "Connect a github repo to an existing pipeline",
      options: [
        {
          name: ["-r", "--repo"],
          description: "The GitHub repository to connect to",
          args: {},
          isRequired: true,
        },
        promptOption,
      ],
      args: { name: "name", description: "Name of pipeline" },
    },
    {
      name: "pipelines:create",
      description:
        "Create a new pipeline\n  An existing app must be specified as the first app in the pipeline.\n  The pipeline name will be inferred from the app name if not specified.\n  The stage of the app will be guessed based on its name if not specified.\n  The pipeline owner will be the user creating the pipeline if not specified with -t for teams or -o for orgs",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        {
          name: ["-s", "--stage"],
          description: "Stage of first app in pipeline",
          args: {},
        },
        {
          name: ["-t", "--team"],
          description: "The team which will own the apps",
          args: {},
        },
        promptOption,
      ],
      args: {
        name: "name",
        description: "Name of pipeline (defaults to basename of the app)",
        isOptional: true,
      },
    },
    {
      name: "pipelines:destroy",
      description: "Destroy a pipeline",
      options: [promptOption],
      args: { name: "pipeline", description: "Name of pipeline" },
    },
    {
      name: "pipelines:diff",
      description:
        "Compares the latest release of this app to its downstream app(s)",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
    },
    {
      name: "pipelines:info",
      description: "Show list of apps in a pipeline",
      options: [
        { name: "--json", description: "Output in json format" },
        promptOption,
      ],
      args: {
        name: "pipeline",
        description: "Pipeline to show list of apps for",
      },
    },
    {
      name: "pipelines:open",
      description: "Open a pipeline in dashboard",
      options: [promptOption],
      args: { name: "pipeline", description: "Name of pipeline" },
    },
    {
      name: "pipelines:promote",
      description:
        "Promote the latest release of this app to its downstream app(s)",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        {
          name: ["-t", "--to"],
          description: "Comma separated list of apps to promote to",
          args: {},
        },
        promptOption,
      ],
    },
    {
      name: "pipelines:remove",
      description: "Remove this app from its pipeline",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
    },
    {
      name: "pipelines:rename",
      description: "Rename a pipeline",
      options: [promptOption],
      args: [
        { name: "pipeline", description: "Name of pipeline to rename" },
        { name: "name", description: "New name of pipeline" },
      ],
    },
    {
      name: "pipelines:setup",
      description:
        "Bootstrap a new pipeline with common settings and create a production and staging app (requires a fully formed app.json in the repo)",
      options: [
        {
          name: ["-t", "--team"],
          description:
            "The team to assign pipeline ownership to (defaults to current user)",
          args: {},
        },
        {
          name: ["-y", "--yes"],
          description: "Accept all default settings without prompting",
        },
        promptOption,
      ],
      args: [
        { name: "name", description: "Name of pipeline", isOptional: true },
        {
          name: "repo",
          description: "A GitHub repository to connect the pipeline to",
          isOptional: true,
        },
      ],
    },
    {
      name: "pipelines:transfer",
      description: "Transfer ownership of a pipeline",
      options: [
        {
          name: ["-p", "--pipeline"],
          description: "Name of pipeline",
          args: {},
          isRequired: true,
        },
        { name: ["-c", "--confirm"], args: {} },
        promptOption,
      ],
      args: {
        name: "owner",
        description: "The owner to transfer the pipeline to",
      },
    },
    {
      name: "pipelines:update",
      description: "Update the app's stage in a pipeline",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        {
          name: ["-s", "--stage"],
          description: "New stage of app",
          args: {},
          isRequired: true,
        },
        promptOption,
      ],
    },
    {
      name: "ps:autoscale:disable",
      description: "Disable web dyno autoscaling",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
    },
    {
      name: "ps:autoscale:enable",
      description: "Enable web dyno autoscaling",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        {
          name: "--min",
          description: "Minimum number of dynos",
          args: {},
          isRequired: true,
        },
        {
          name: "--max",
          description: "Maximum number of dynos",
          args: {},
          isRequired: true,
        },
        { name: "--p95", description: "Desired p95 response time", args: {} },
        {
          name: "--notifications",
          description:
            "Receive email notifications when the max dyno limit is reached",
        },
        promptOption,
      ],
    },
    {
      name: "ps:wait",
      description:
        "Wait for all dynos to be running latest version after a release",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        {
          name: ["-t", "--type"],
          description: "Wait for one specific dyno type",
          args: {},
        },
        {
          name: ["-w", "--wait-interval"],
          description:
            "How frequently to poll in seconds (to avoid hitting Heroku API rate limits)",
          args: { default: "10" },
        },
        {
          name: ["-R", "--with-run"],
          description: "Whether to wait for one-off run dynos",
        },
        promptOption,
      ],
    },
    {
      name: "regions",
      description: "List available regions for deployment",
      options: [
        { name: "--json", description: "Output in json format" },
        { name: "--private", description: "Show regions for private spaces" },
        { name: "--common", description: "Show regions for common runtime" },
        promptOption,
      ],
    },
    {
      name: "reviewapps:disable",
      description:
        "Disable review apps and/or settings on an existing pipeline",
      options: [
        {
          name: ["-a", "--app"],
          description: "Parent app used by review apps",
          args: { name: "app", generators: getAppGenerator },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        {
          name: ["-p", "--pipeline"],
          description: "Name of pipeline",
          args: {},
          isRequired: true,
        },
        { name: "--no-autodeploy", description: "Disable autodeployments" },
        {
          name: "--no-autodestroy",
          description: "Disable automatically destroying review apps",
        },
        { name: "--no-wait-for-ci", description: "Disable wait for CI" },
        promptOption,
      ],
    },
    {
      name: "reviewapps:enable",
      description: "Enable review apps and/or settings on an existing pipeline",
      options: [
        {
          name: ["-a", "--app"],
          description: "Parent app used by review apps",
          args: { name: "app", generators: getAppGenerator },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        {
          name: ["-p", "--pipeline"],
          description: "Name of pipeline",
          args: {},
          isRequired: true,
        },
        { name: "--autodeploy", description: "Autodeploy the review app" },
        { name: "--autodestroy", description: "Autodestroy the review app" },
        {
          name: "--wait-for-ci",
          description: "Wait for CI to pass before deploying",
        },
        promptOption,
      ],
    },
    {
      name: "reviewapps:create",
      description: "Create a review app from a pipeline's connected repository",
      options: [
        {
          name: ["-b", "--branch"],
          description: "Branch to create the review app from",
          args: {},
          isRequired: true,
        },
        {
          name: ["-p", "--pipeline"],
          description: "Name of pipeline",
          args: {},
          isRequired: true,
        },
        {
          name: "--wait",
          description:
            "Watch review app creation status and exit when complete",
        },
        {
          name: "--wait-interval",
          description: "How frequently to poll in seconds (use with --wait)",
          args: {},
        },
        promptOption,
      ],
    },
    {
      name: "reviewapps:wait",
      description: "Wait for a review app to finish creating",
      options: [
        {
          name: "--wait-interval",
          description: "How frequently to poll in seconds",
          args: {},
        },
        promptOption,
      ],
      args: {
        name: "app",
        description: "Unique identifier or name of the app",
      },
    },
    {
      name: "run",
      description:
        "Run a one-off process inside a heroku dyno\nShows a notification if the dyno takes more than 20 seconds to start",
      options: [
        {
          name: ["-a", "--app"],
          description: "Parent app used by review apps",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        { name: ["-s", "--size"], description: "Dyno size", args: {} },
        { name: "--type", description: "Process type", args: {} },
        {
          name: ["-x", "--exit-code"],
          description: "Passthrough the exit code of the remote command",
        },
        {
          name: ["-e", "--env"],
          description:
            "Environment variables to set (use ';' to split multiple vars)",
          args: {},
        },
        {
          name: "--no-tty",
          description: "Force the command to not run in a tty",
        },
        {
          name: "--no-notify",
          description:
            "Disables notification when dyno is up (alternatively use HEROKU_NOTIFICATIONS=0)",
        },
        {
          name: "--no-launcher",
          description: "Don't prepend 'launcher' before a command",
        },
        promptOption,
      ],
    },
    {
      name: "run:detached",
      description: "Run a detached dyno, where output is sent to your logs",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        {
          name: ["-e", "--env"],
          description:
            "Environment variables to set (use ';' to split multiple vars)",
          args: {},
        },
        { name: ["-s", "--size"], description: "Dyno size", args: {} },
        { name: ["-t", "--tail"], description: "Continually stream logs" },
        { name: "--type", description: "Process type", args: {} },
        {
          name: "--no-launcher",
          description: "Don't prepend 'launcher' before a command",
        },
        promptOption,
      ],
    },
    {
      name: "run:inside",
      description:
        "Run a command inside an existing dyno (for Fir-generation apps only)",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-x", "--exit-code"],
          description: "Passthrough the exit code of the remote command",
        },
        {
          name: "--no-launcher",
          description: "Don't prepend 'launcher' before a command",
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
      args: [
        {
          name: "dyno_name",
          description: "Name of the dyno to run command inside",
        },
        {
          name: "command",
          description:
            "Command to run (Heroku automatically prepends 'launcher' to the command)",
          isVariadic: true,
        },
      ],
    },
    {
      name: "sessions",
      description: "List your OAuth sessions",
      options: [
        { name: ["-j", "--json"], description: "Output in json format" },
        promptOption,
      ],
    },
    {
      name: "sessions:destroy",
      description: "Delete (logout) OAuth session by ID",
      options: [promptOption],
      args: { name: "id" },
    },
    {
      name: "status",
      description: "Display current status of the Heroku platform",
      options: [{ name: "--json", description: "Output in json format" }],
    },
    {
      name: "webhooks",
      description: "List webhooks on an app",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
    },
    {
      name: "webhooks:add",
      description: "Add a webhook to an app",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        {
          name: ["-i", "--include"],
          description: "Comma delimited event types your server will receive",
          args: {},
          isRequired: true,
        },
        {
          name: ["-l", "--level"],
          description:
            "Notify does not retry, sync will retry until successful or timeout",
          args: {},
          isRequired: true,
        },
        {
          name: ["-s", "--secret"],
          description:
            "Value to sign delivery with in Heroku-Webhook-Hmac-SHA256 header",
          args: {},
        },
        {
          name: ["-t", "--authorization"],
          description: "Authorization header to send with webhooks",
          args: {},
        },
        {
          name: ["-u", "--url"],
          description: "URL for receiver",
          args: {},
          isRequired: true,
        },
        promptOption,
      ],
    },
    {
      name: "webhooks:deliveries",
      description: "List webhook deliveries on an app",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        {
          name: ["-s", "--status"],
          description: "Filter deliveries by status",
          args: {},
        },
        promptOption,
      ],
    },
    {
      name: "webhooks:deliveries:info",
      description: "Info for a webhook event on an app",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
      args: { name: "id" },
    },
    {
      name: "webhooks:events",
      description: "List webhook events on an app",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
    },
    {
      name: "webhooks:events:info",
      description: "Info for a webhook event on an app",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
      args: { name: "id" },
    },
    {
      name: "webhooks:info",
      description: "Info for a webhook on an app",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
      args: { name: "id" },
    },
    {
      name: "webhooks:remove",
      description: "Removes a webhook from an app",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
      args: { name: "id", description: "Id of webhook to remove" },
    },
    {
      name: "webhooks:update",
      description: "Updates a webhook in an app",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        {
          name: ["-i", "--include"],
          description: "Comma delimited event types your server will receive",
          args: {},
          isRequired: true,
        },
        {
          name: ["-l", "--level"],
          description:
            "Notify does not retry, sync will retry until successful or timeout",
          args: {},
          isRequired: true,
        },
        {
          name: ["-s", "--secret"],
          description:
            "Value to sign delivery with in Heroku-Webhook-Hmac-SHA256 header",
          args: {},
        },
        {
          name: ["-t", "--authorization"],
          description: "Authorization header to send with webhooks",
          args: {},
        },
        {
          name: ["-u", "--url"],
          description: "URL for receiver",
          args: {},
          isRequired: true,
        },
        promptOption,
      ],
      args: { name: "id" },
    },
    {
      name: "ci:config",
      description:
        "Display CI config vars\nExample:\n\n    $ heroku ci:config --app murmuring-headland-14719 --json",
      options: [
        {
          name: ["-s", "--shell"],
          description: "Output config vars in shell format",
        },
        { name: "--json", description: "Output config vars in json format" },
        {
          name: ["-p", "--pipeline"],
          description: "Name of pipeline",
          args: {},
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
    },
    {
      name: "ci:config:get",
      description:
        "Get a CI config var\nExamples:\n\n    $ heroku ci:config:get RAILS_ENV\n    test\n",
      options: [
        {
          name: ["-s", "--shell"],
          description: "Output config var in shell format",
        },
        {
          name: ["-p", "--pipeline"],
          description: "Name of pipeline",
          args: {},
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
      args: { name: "key" },
    },
    {
      name: "ci:config:set",
      description:
        "Set CI config vars\nExamples:\n\n    $ heroku ci:config:set RAILS_ENV=test\n    Setting test config vars... done\n\n    RAILS_ENV: test\n",
      options: [
        {
          name: ["-p", "--pipeline"],
          description: "Name of pipeline",
          args: {},
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
    },
    {
      name: "ci:config:unset",
      description:
        "Unset CI config vars\nExamples:\n\n    $ heroku ci:config:uset RAILS_ENV\n    Unsetting RAILS_ENV... done\n",
      options: [
        {
          name: ["-p", "--pipeline"],
          description: "Name of pipeline",
          args: {},
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
    },
    {
      name: "ci:debug",
      description:
        "Opens an interactive test debugging session with the contents of the current directory\nExample:\n\n    $ heroku ci:debug\n    Preparing source... done\n    Creating test run... done\n    Running setup and attaching to test dyno...\n\n~ $\n",
      options: [
        {
          name: "--no-setup",
          description: "Start test dyno without running test-setup",
        },
        {
          name: ["-p", "--pipeline"],
          description: "Name of pipeline",
          args: {},
        },
        {
          name: "--no-cache",
          description: "Start test run with an empty cache",
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
        },
        promptOption,
      ],
    },
    {
      name: "ci:migrate-manifest",
      description:
        "App-ci.json is deprecated. Run this command to migrate to app.json with an environments key.\nExample:\n\n    $ heroku ci:migrate-manifest\n    Writing app.json file... done\n    Deleting app-ci.json file... done\n    Please check the contents of your app.json before committing to your repo\n    You're all set! 🎉",
    },
    {
      name: "ci:open",
      description:
        "Open the Dashboard version of Heroku CI\nopens a browser to view the Dashboard version of Heroku CI\n\n    Example:\n\n    $ heroku ci:open --app murmuring-headland-14719",
      options: [
        {
          name: ["-p", "--pipeline"],
          description: "Name of pipeline",
          args: {},
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
    },
    {
      name: "addons",
      description:
        "Lists your add-ons and attachments\nThe default filter applied depends on whether you are in a Heroku app\ndirectory. If so, the --app flag is implied. If not, the default of --all\nis implied. Explicitly providing either flag overrides the default\nbehavior",
      options: [
        {
          name: ["-A", "--all"],
          description: "Show add-ons and attachments for all accessible apps",
        },
        { name: "--json", description: "Return add-ons in json format" },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        {
          name: "--no-wrap",
          description: "Disable wrapped table cells for easier copy/paste",
        },
        promptOption,
      ],
    },
    {
      name: "addons:attach",
      description: "Attach an existing add-on resource to an app\n",
      options: [
        { name: "--as", description: "Name for add-on attachment", args: {} },
        {
          name: "--credential",
          description: "Credential name for scoped access to Heroku Postgres",
          args: {},
        },
        {
          name: "--confirm",
          description: "Overwrite existing add-on attachment with same name",
          args: {},
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
      args: { name: "addon_name" },
    },
    {
      name: ["addons:create", "addons:add"],
      description: "Create a new add-on resource\n",
      options: [
        {
          name: "--name",
          description: "Name for the add-on resource",
          args: {},
        },
        {
          name: "--as",
          description: "Name for the initial add-on attachment",
          args: {},
        },
        {
          name: "--confirm",
          description:
            "Overwrite existing config vars or existing add-on attachments",
          args: {},
        },
        {
          name: "--wait",
          description: "Watch add-on creation status and exit when complete",
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
      args: { name: "service:plan" },
    },
    {
      name: ["addons:destroy", "addons:remove"],
      description: "Permanently destroy an add-on resource\n",
      options: [
        {
          name: ["-f", "--force"],
          description: "Allow destruction even if connected to other apps",
        },
        { name: ["-c", "--confirm"], args: {} },
        {
          name: "--wait",
          description: "Watch add-on destruction status and exit when complete",
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
      args: {
        name: "addonName",
        description: "Unique identifier or globally unique name of the add-on",
        isVariadic: true,
      },
    },
    {
      name: "addons:detach",
      description: "Detach an existing add-on resource from an app\n",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
      args: { name: "attachment_name" },
    },
    {
      name: "addons:docs",
      description:
        "Open an add-on's Dev Center documentation in your browser\n",
      options: [
        { name: "--show-url", description: "Show URL, do not open browser" },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
      args: { name: "addon" },
    },
    {
      name: "addons:downgrade",
      description:
        "Change add-on plan\nSee available plans with `heroku addons:plans SERVICE`.\n\nNote that `heroku addons:upgrade` and `heroku addons:downgrade` are the same.\nEither one can be used to change an add-on plan up or down.\n\nhttps://devcenter.heroku.com/articles/managing-add-ons",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
      args: [{ name: "addon" }, { name: "plan", isOptional: true }],
    },
    {
      name: "addons:info",
      description: "Show detailed add-on resource and attachment information\n",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
      args: { name: "addon" },
    },
    {
      name: "addons:open",
      description: "Open an add-on's dashboard in your browser\n",
      options: [
        { name: "--show-url", description: "Show URL, do not open browser" },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
      args: { name: "addon" },
    },
    {
      name: "addons:plans",
      description: "List all available plans for an add-on service",
      options: [
        { name: "--json", description: "Output in json format" },
        promptOption,
      ],
      args: { name: "service" },
    },
    {
      name: "addons:rename",
      description: "Rename an add-on\n",
      options: [promptOption],
      args: [
        {
          name: "addon_name",
          description:
            "Unique identifier or globally unique name of the add-on",
        },
        {
          name: "new_name",
          description: "New globally unique name of the add-on",
        },
      ],
    },
    {
      name: "addons:services",
      description: "List all available add-on services\n",
      options: [
        { name: "--json", description: "Output in json format" },
        promptOption,
      ],
    },
    {
      name: "addons:upgrade",
      description:
        "Change add-on plan\nSee available plans with `heroku addons:plans SERVICE`.\n\nNote that `heroku addons:upgrade` and `heroku addons:downgrade` are the same.\nEither one can be used to change an add-on plan up or down.\n\nhttps://devcenter.heroku.com/articles/managing-add-ons",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
      args: [{ name: "addon" }, { name: "plan", isOptional: true }],
    },
    {
      name: "addons:wait",
      description: "Show provisioning status of the add-ons on the app\n",
      options: [
        {
          name: "--wait-interval",
          description: "How frequently to poll in seconds",
          args: {},
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
      args: { name: "addon", isOptional: true },
    },
    {
      name: "certs",
      description: "List SSL certificates for an app\n",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
    },
    {
      name: "certs:add",
      description:
        "Add an SSL certificate to an app\nNote: certificates with PEM encoding are also valid",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
      args: [{ name: "CRT" }, { name: "KEY" }],
    },
    {
      name: "certs:auto",
      description: "Show ACM status for an app\n",
      options: [
        {
          name: "--wait",
          description: "Watch ACM status and display the status when complete",
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
    },
    {
      name: "certs:auto:disable",
      description: "Disable ACM for an app\n",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
    },
    {
      name: "certs:auto:enable",
      description: "Enable ACM status for an app\n",
      options: [
        {
          name: "--wait",
          description: "Watch ACM status and exit when complete",
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
    },
    {
      name: "certs:auto:refresh",
      description: "Refresh ACM for an app\n",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
    },
    {
      name: "certs:generate",
      description:
        "Generate a key and a CSR or self-signed certificate\nGenerate a key and certificate signing request (or self-signed certificate)\nfor an app. Prompts for information to put in the certificate unless --now\nis used, or at least one of the --subject, --owner, --country, --area, or\n--city options is specified",
      options: [
        {
          name: "--selfsigned",
          description: "Generate a self-signed certificate instead of a CSR",
        },
        {
          name: "--keysize",
          description: "RSA key size in bits (default: 2048)",
          args: {},
        },
        {
          name: "--owner",
          description: "Name of organization certificate belongs to",
          args: {},
        },
        {
          name: "--country",
          description: "Country of owner, as a two-letter ISO country code",
          args: {},
        },
        {
          name: "--area",
          description: "Sub-country area (state, province, etc.) of owner",
          args: {},
        },
        { name: "--city", description: "City of owner", args: {} },
        {
          name: "--subject",
          description: "Specify entire certificate subject",
          args: {},
        },
        {
          name: "--now",
          description: "Do not prompt for any owner information",
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
      args: { name: "domain" },
    },
    {
      name: "certs:info",
      description: "Show certificate information for an SSL certificate\n",
      options: [
        { name: "--name", description: "Name to check info on", args: {} },
        {
          name: "--endpoint",
          description: "Endpoint to check info on",
          args: {},
        },
        { name: "--show-domains", description: "Show associated domains" },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
    },
    {
      name: "certs:remove",
      description: "Remove an SSL certificate from an app\n",
      options: [
        { name: "--name", description: "Name to remove", args: {} },
        { name: "--endpoint", description: "Endpoint to remove", args: {} },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
    },
    {
      name: "certs:update",
      description:
        "Update an SSL certificate on an app\nNote: certificates with PEM encoding are also valid",
      options: [
        { name: "--name", description: "Name to update", args: {} },
        { name: "--endpoint", description: "Endpoint to update", args: {} },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
      args: [{ name: "CRT" }, { name: "KEY" }],
    },
    {
      name: "container:login",
      description:
        "Log in to Heroku Container Registry\nUsage:\n        heroku container:login",
      options: [{ name: ["-v", "--verbose"] }, promptOption],
    },
    {
      name: "container:logout",
      description: "Log out from Heroku Container Registry\n",
      options: [{ name: ["-v", "--verbose"] }, promptOption],
    },
    {
      name: "container:pull",
      description:
        "Pulls an image from an app's process type\n\n    Usage:\n    heroku container:pull web        # Pulls the web image from the app\n    heroku container:pull web worker # Pulls both the web and worker images from the app\n    heroku container:pull web:latest # Pulls the latest tag from the web image",
      options: [
        { name: ["-v", "--verbose"] },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
    },
    {
      name: "container:push",
      description:
        "Builds, then pushes Docker images to deploy your Heroku app\n",
      options: [
        { name: ["-v", "--verbose"] },
        {
          name: ["-R", "--recursive"],
          description:
            "Pushes Dockerfile.<process> found in current and subdirectories",
        },
        { name: "--arg", description: "Set build-time variables", args: {} },
        {
          name: "--context-path",
          description:
            "Path to use as build context (defaults to Dockerfile dir)",
          args: {},
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        {
          name: "--no-cache",
          description: "Don't use cache when building the image",
        },
        promptOption,
      ],
    },
    {
      name: "container:release",
      description:
        "Releases previously pushed Docker images to your Heroku app\n\n    Usage:\n    heroku container:release web                       # Releases the previously pushed web process type\n    heroku container:release web worker                # Releases the previously pushed web and worker process types",
      options: [
        { name: ["-v", "--verbose"] },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
    },
    {
      name: "container:rm",
      description:
        "Remove the process type from your app\n\n    Usage:\n    heroku container:rm web        # Destroys the web container\n    heroku container:rm web worker # Destroys the web and worker containers",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
    },
    {
      name: "container:run",
      description:
        "Builds, then runs the docker image locally\n\n    Usage:\n    heroku container:run web bash # Runs bash on the local web docker container\n    heroku container:run worker   # Runs the container CMD on the local worker container",
      options: [
        {
          name: ["-p", "--port"],
          description: "Port the app will run on",
          args: {},
        },
        { name: ["-v", "--verbose"] },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
    },
    {
      name: "pg",
      description: "Show database information\n",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
      args: { name: "database", isOptional: true },
    },
    {
      name: "pg:backups",
      description: "List database backups\n",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
    },
    {
      name: "pg:backups:cancel",
      description: "Cancel an in-progress backup or restore (default newest)\n",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
      args: { name: "backup_id", isOptional: true },
    },
    {
      name: "pg:backups:capture",
      description: "Capture a new backup\n",
      options: [
        { name: "--wait-interval", args: {} },
        { name: ["-v", "--verbose"] },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
      args: { name: "database", isOptional: true },
    },
    {
      name: "pg:backups:delete",
      description: "Delete a backup\n",
      options: [
        { name: ["-c", "--confirm"], args: {}, hidden: true },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
      args: { name: "backup_id" },
    },
    {
      name: "pg:backups:download",
      description: "Downloads database backup\n",
      options: [
        {
          name: ["-o", "--output"],
          description: "Location to download to. Defaults to latest.dump",
          args: {},
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
      args: { name: "backup_id", isOptional: true },
    },
    {
      name: "pg:backups:info",
      description: "Get information about a specific backup\n",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
      args: { name: "backup_id", isOptional: true },
    },
    {
      name: "pg:backups:restore",
      description:
        "Restore a backup (default latest) to a database\ndefaults to saving the latest database to DATABASE_URL",
      options: [
        { name: "--wait-interval", args: {} },
        {
          name: ["-e", "--extensions"],
          description:
            "Comma-separated list of extensions to pre-install in the default",
          args: {},
        },
        { name: ["-v", "--verbose"] },
        { name: ["-c", "--confirm"], args: {} },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
      args: [
        { name: "backup", isOptional: true },
        { name: "database", isOptional: true },
      ],
    },
    {
      name: "pg:backups:schedule",
      description: "Schedule daily backups for given database\n",
      options: [
        {
          name: "--at",
          description:
            "At a specific (24h) hour in the given timezone. Defaults to UTC. --at '[HOUR]:00 [TIMEZONE]'",
          args: {},
          isRequired: true,
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
      args: { name: "database", isOptional: true },
    },
    {
      name: "pg:backups:schedules",
      description: "List backup schedule\n",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
    },
    {
      name: "pg:backups:unschedule",
      description: "Stop daily backups\n",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
      args: { name: "database", isOptional: true },
    },
    {
      name: "pg:backups:url",
      description: "Get secret but publicly accessible URL of a backup\n",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
      args: { name: "backup_id", isOptional: true },
    },
    {
      name: "pg:bloat",
      description:
        "Show table and index bloat in your database ordered by most wasteful\n",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
      args: { name: "database", isOptional: true },
    },
    {
      name: "pg:blocking",
      description:
        "Display queries holding locks other queries are waiting to be released\n",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
      args: { name: "database", isOptional: true },
    },
    {
      name: "pg:connection-pooling:attach",
      description:
        "Add an attachment to a database using connection pooling\nExample:\n\n  heroku pg:connection-pooling:attach postgresql-something-12345\n",
      options: [
        { name: "--as", description: "Name for add-on attachment", args: {} },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
      args: { name: "database", isOptional: true },
    },
    {
      name: "pg:copy",
      description:
        "Copy all data from source db to target\nat least one of the databases must be a Heroku PostgreSQL DB",
      options: [
        { name: "--wait-interval", args: {} },
        { name: "--verbose" },
        { name: "--confirm", args: {} },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
      args: [{ name: "source" }, { name: "target" }],
    },
    {
      name: "pg:credentials",
      description: "Show information on credentials in the database\n",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        {
          name: "--no-wrap",
          description: "Disable wrapped table cells for easier copy/paste",
        },
        promptOption,
      ],
      args: { name: "database", isOptional: true },
    },
    {
      name: "pg:credentials:create",
      description:
        "Create credential within database\nExample:\n\n    heroku pg:credentials:create postgresql-something-12345 --name new-cred-name\n",
      options: [
        {
          name: ["-n", "--name"],
          description: "Name of the new credential within the database",
          args: {},
          isRequired: true,
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
      args: { name: "database", isOptional: true },
    },
    {
      name: "pg:credentials:destroy",
      description:
        "Destroy credential within database\nExample:\n\n    heroku pg:credentials:destroy postgresql-transparent-56874 --name cred-name -a woodstock-production\n",
      options: [
        {
          name: ["-n", "--name"],
          description: "Unique identifier for the credential",
          args: {},
          isRequired: true,
        },
        {
          name: ["-c", "--confirm"],
          args: {},
          description: "Set to app name to bypass confirm prompt",
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
      args: { name: "database", isOptional: true },
    },
    {
      name: "pg:credentials:repair-default",
      description:
        "Repair the permissions of the default credential within database\nExample:\n\n    heroku pg:credentials:repair-default postgresql-something-12345\n",
      options: [
        {
          name: ["-c", "--confirm"],
          args: {},
          description: "Set to app name to bypass confirm prompt",
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
      args: { name: "database", isOptional: true },
    },
    {
      name: "pg:credentials:rotate",
      description: "Rotate the database credentials\n",
      options: [
        {
          name: ["-n", "--name"],
          description:
            "Which credential to rotate (default credentials if not specified and --all is not used)",
          args: {},
        },
        { name: "--all", description: "Rotate all credentials" },
        {
          name: ["-c", "--confirm"],
          args: {},
          description: "Set to app name to bypass confirm prompt",
        },
        {
          name: "--force",
          description: "Forces rotating the targeted credentials",
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
      args: { name: "database", isOptional: true },
    },
    {
      name: "pg:credentials:url",
      description: "Show information on a database credential\n",
      options: [
        {
          name: ["-n", "--name"],
          description:
            "Which credential to show (default credentials if not specified)",
          args: {},
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
      args: { name: "database", isOptional: true },
    },
    {
      name: "pg:diagnose",
      description:
        "Run or view diagnostics report\n\ndefaults to DATABASE_URL database if no DATABASE is specified\nif REPORT_ID is specified instead, a previous report is displayed\n",
      options: [
        { name: "--json", description: "Format output as JSON" },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
      args: { name: "DATABASE|REPORT_ID", isOptional: true },
    },
    {
      name: "pg:info",
      description: "Show database information\n",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
      args: { name: "database", isOptional: true },
    },
    {
      name: "pg:kill",
      description: "Kill a query\n",
      options: [
        { name: ["-f", "--force"] },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
      args: [{ name: "pid" }, { name: "database", isOptional: true }],
    },
    {
      name: "pg:killall",
      description: "Terminates all connections for all credentials\n",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
      args: { name: "database", isOptional: true },
    },
    {
      name: "pg:links",
      description: "Lists all databases and information on link\n",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
      args: { name: "database", isOptional: true },
    },
    {
      name: "pg:links:create",
      description:
        "Create a link between data stores\nExample:\n\n    heroku pg:links:create HEROKU_REDIS_RED HEROKU_POSTGRESQL_CERULEAN",
      options: [
        { name: "--as", description: "Name of link to create", args: {} },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
      args: [{ name: "remote" }, { name: "database" }],
    },
    {
      name: "pg:links:destroy",
      description:
        "Destroys a link between data stores\nExample:\n\n    heroku pg:links:destroy HEROKU_POSTGRESQL_CERULEAN redis-symmetrical-100",
      options: [
        { name: ["-c", "--confirm"], args: {} },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
      args: [{ name: "database" }, { name: "link" }],
    },
    {
      name: "pg:locks",
      description: "Display queries with active locks\n",
      options: [
        {
          name: ["-t", "--truncate"],
          description: "Truncates queries to 40 characters",
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
      args: { name: "database", isOptional: true },
    },
    {
      name: "pg:outliers",
      description:
        "Show 10 queries that have longest execution time in aggregate\n",
      options: [
        {
          name: "--reset",
          description: "Resets statistics gathered by pg_stat_statements",
        },
        {
          name: ["-t", "--truncate"],
          description: "Truncate queries to 40 characters",
        },
        {
          name: ["-n", "--num"],
          description: "The number of queries to display (default: 10)",
          args: {},
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
      args: { name: "database", isOptional: true },
    },
    {
      name: "pg:promote",
      description: "Sets DATABASE as your DATABASE_URL\n",
      options: [
        { name: ["-f", "--force"] },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        {
          name: "--as",
          description: "Name for the database attachment",
          args: {},
        },
        promptOption,
      ],
      args: { name: "database" },
    },
    {
      name: "pg:ps",
      description: "View active queries with execution time\n",
      options: [
        { name: ["-v", "--verbose"] },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
      args: { name: "database", isOptional: true },
    },
    {
      name: "pg:psql",
      description: "Open a psql shell to the database\n",
      options: [
        {
          name: ["-c", "--command"],
          description: "SQL command to run",
          args: {},
        },
        { name: ["-f", "--file"], description: "SQL file to run", args: {} },
        { name: "--credential", description: "Credential to use", args: {} },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
      args: { name: "database", isOptional: true },
    },
    {
      name: "pg:pull",
      description:
        "Pull Heroku database into local or remote database\nPull from SOURCE into TARGET.\n\nTARGET must be one of:\n  * a database name (i.e. on a local PostgreSQL server)  => TARGET must not exist and will be created\n  * a fully qualified URL to a local PostgreSQL server   => TARGET must not exist and will be created\n  * a fully qualified URL to a remote PostgreSQL server  => TARGET must exist and be empty\n\nTo delete a local database run `dropdb TARGET`\nTo create an empty remote database, run `createdb` with connection command-line options (run `createdb --help` for details).\n\nExamples:\n\n    # pull Heroku DB named postgresql-swimmingly-100 into local DB mylocaldb that must not exist\n    $ heroku pg:pull postgresql-swimmingly-100 mylocaldb --app sushi\n\n    # pull Heroku DB named postgresql-swimmingly-100 into empty remote DB at postgres://myhost/mydb\n    $ heroku pg:pull postgresql-swimmingly-100 postgres://myhost/mydb --app sushi\n",
      options: [
        {
          name: "--exclude-table-data",
          description:
            "Tables for which data should be excluded (use ';' to split multiple names)",
          args: {},
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
      args: [{ name: "source" }, { name: "target" }],
    },
    {
      name: "pg:push",
      description:
        "Push local or remote into Heroku database\nPush from SOURCE into TARGET. TARGET must be empty.\n\nTo empty a Heroku database for push run `heroku pg:reset`\n\nSOURCE must be either the name of a database existing on your localhost or the\nfully qualified URL of a remote database.\n\nExamples:\n\n    # push mylocaldb into a Heroku DB named postgresql-swimmingly-100\n    $ heroku pg:push mylocaldb postgresql-swimmingly-100\n\n    # push remote DB at postgres://myhost/mydb into a Heroku DB named postgresql-swimmingly-100\n    $ heroku pg:push postgres://myhost/mydb postgresql-swimmingly-100\n",
      options: [
        {
          name: "--exclude-table-data",
          description:
            "Tables for which data should be excluded (use ';' to split multiple names)",
          args: {},
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
      args: [{ name: "source" }, { name: "target" }],
    },
    {
      name: "pg:reset",
      description: "Delete all data in DATABASE\n",
      options: [
        {
          name: ["-e", "--extensions"],
          description:
            "Comma-separated list of extensions to pre-install in the public schema",
          args: {},
        },
        { name: ["-c", "--confirm"], args: {} },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
      args: { name: "database", isOptional: true },
    },
    {
      name: "pg:settings",
      description: "Show your current database settings\n",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
      args: { name: "database", isOptional: true },
    },
    {
      name: "pg:settings:auto-explain",
      description:
        "Automatically log execution plans of queries without running EXPLAIN by hand.\nThe auto_explain module is loaded at session-time so existing connections will not be logged.\nRestart your Heroku app and/or restart existing connections for logging to start taking place",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
      args: [
        { name: "database", isOptional: true },
        { name: "value", isOptional: true },
      ],
    },
    {
      name: "pg:settings:auto-explain:log-analyze",
      description:
        "Shows actual run times on the execution plan.\nThis is equivalent to calling EXPLAIN ANALYZE.\n\nWARNING: EXPLAIN ANALYZE will be run on ALL queries, not just logged queries. This can cause significant performance impacts to your database and should be used with caution.\n",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
      args: [
        { name: "database", isOptional: true },
        { name: "value", isOptional: true },
      ],
    },
    {
      name: "pg:settings:auto-explain:log-buffers",
      description:
        "Includes buffer usage statistics when execution plans are logged.\nThis is equivalent to calling EXPLAIN BUFFERS and can only be used in conjunction with pg:settings:auto-explain:log-analyze turned on",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
      args: [
        { name: "database", isOptional: true },
        { name: "value", isOptional: true },
      ],
    },
    {
      name: "pg:settings:auto-explain:log-min-duration",
      description:
        "Sets the minimum execution time in milliseconds for a statement's plan to be logged.\nSetting this value to 0 will log all queries. Setting this value to -1 will disable logging entirely.\n\nWARNING: Setting a low value may have performance impacts on your database as well as generate a large volume of logs",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
      args: [
        { name: "database", isOptional: true },
        { name: "value", isOptional: true },
      ],
    },
    {
      name: "pg:settings:auto-explain:log-nested-statements",
      description:
        "Nested statements are included in the execution plan's log.\n",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
      args: [
        { name: "database", isOptional: true },
        { name: "value", isOptional: true },
      ],
    },
    {
      name: "pg:settings:auto-explain:log-triggers",
      description:
        "Includes trigger execution statistics in execution plan logs.\nThis parameter can only be used in conjunction with pg:settings:auto-explain:log-analyze turned on",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
      args: [
        { name: "database", isOptional: true },
        { name: "value", isOptional: true },
      ],
    },
    {
      name: "pg:settings:auto-explain:log-verbose",
      description:
        "Include verbose details in execution plans.\nThis is equivalent to calling EXPLAIN VERBOSE",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
      args: [
        { name: "database", isOptional: true },
        { name: "value", isOptional: true },
      ],
    },
    {
      name: "pg:settings:auto-explain:log-format",
      description: "Selects the EXPLAIN output format to be used",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
      args: [
        {
          name: "database",
          description:
            "Config var containing the connection string, unique name, ID, or alias of the database. To access another app's database, prepend the app name to the config var or alias with `APP_NAME::` . If omitted, we use DATABASE_URL",
          isOptional: true,
        },
        {
          name: "value",
          description: "Format of the log output",
          isOptional: true,
          suggestions: ["text", "json", "yaml", "xml"],
        },
      ],
    },
    {
      name: "pg:settings:log-lock-waits",
      description:
        "Controls whether a log message is produced when a session waits longer than the deadlock_timeout to acquire a lock. deadlock_timeout is set to 1 second\nDelays due to lock contention occur when multiple transactions are trying to access the same resource at the same time.\nApplications and their query patterns should try to avoid changes to many different tables within the same transaction",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
      args: [
        { name: "database", isOptional: true },
        { name: "value", isOptional: true },
      ],
    },
    {
      name: "pg:settings:log-min-duration-statement",
      description:
        "The duration of each completed statement will be logged if the statement completes after the time specified by VALUE.\nVALUE needs to specified as a whole number, in milliseconds.\nSetting log_min_duration_statement to zero prints all statement durations and -1 will disable logging statement durations",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
      args: [
        { name: "database", isOptional: true },
        { name: "value", isOptional: true },
      ],
    },
    {
      name: "pg:settings:log-statement",
      description:
        "Log_statement controls which SQL statements are logged.\nValid values for VALUE:\nnone - No statements are logged\nddl  - All data definition statements, such as CREATE, ALTER and DROP will be logged\nmod  - Includes all statements from ddl as well as data-modifying statements such as INSERT, UPDATE, DELETE, TRUNCATE, COPY\nall  - All statements are logged",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
      args: [
        { name: "database", isOptional: true },
        {
          name: "value",
          isOptional: true,
          suggestions: ["none", "ddl", "mod", "all"],
        },
      ],
    },
    {
      name: "pg:settings:track-functions",
      description:
        "Track_functions controls tracking of function call counts and time used. Default is none.\nValid values for VALUE:\nnone - No functions are tracked\npl   - Only procedural language functions are tracked\nall  - All functions, including SQL and C language functions, are tracked. Simple SQL-language that are inlined are not tracked",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
      args: [
        { name: "database", isOptional: true },
        { name: "value", isOptional: true, suggestions: ["none", "pl", "all"] },
      ],
    },
    {
      name: [
        "pg:settings:data-connector-details-logs",
        "pg:settings:explain-data-connector-details",
      ],
      description:
        'Displays stats on replication slots on your database, the default value is "off"',
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
      args: [
        {
          name: "database",
          description:
            "Config var containing the connection string, unique name, ID, or alias of the database. To access another app's database, prepend the app name to the config var or alias with `APP_NAME::` . If omitted, we use DATABASE_URL",
          isOptional: true,
        },
        {
          name: "value",
          description:
            "Boolean indicating if data replication slot details get logged",
          isOptional: true,
        },
      ],
    },
    {
      name: "pg:settings:log-connections",
      description:
        "Controls whether a log message is produced when a login attempt is made. Default is true",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
      args: [
        {
          name: "database",
          description:
            "Config var containing the connection string, unique name, ID, or alias of the database. To access another app's database, prepend the app name to the config var or alias with `APP_NAME::` . If omitted, we use DATABASE_URL",
          isOptional: true,
        },
        {
          name: "value",
          description:
            "Boolean indicating if database login attempts get logged",
          isOptional: true,
        },
      ],
    },
    {
      name: "pg:settings:log-min-error-statement",
      description:
        "Log-min-error-statement controls the logging of SQL statements that cause an error at a specified severity level",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
      args: [
        {
          name: "database",
          description:
            "Config var containing the connection string, unique name, ID, or alias of the database. To access another app's database, prepend the app name to the config var or alias with `APP_NAME::` . If omitted, we use DATABASE_URL",
          isOptional: true,
        },
        {
          name: "value",
          isOptional: true,
          suggestions: ["error", "log", "fatal", "panic"],
        },
      ],
    },
    {
      name: "pg:unfollow",
      description:
        "Stop a replica from following and make it a writeable database\n",
      options: [
        { name: ["-c", "--confirm"], args: {} },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
      args: { name: "database" },
    },
    {
      name: "pg:vacuum-stats",
      description:
        "Show dead rows and whether an automatic vacuum is expected to be triggered\n",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
      args: { name: "database", isOptional: true },
    },
    {
      name: "pg:wait",
      description: "Blocks until database is available\n",
      options: [
        {
          name: "--wait-interval",
          description:
            "How frequently to poll in seconds (to avoid rate limiting)",
          args: {},
        },
        { name: "--no-notify", description: "Do not show OS notification" },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
      args: { name: "database", isOptional: true },
    },
    {
      name: ["pg:cache-hit", "pg:cache_hit"],
      description: "Show index and table hit rate",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
      args: {
        name: "database",
        description:
          "Config var containing the connection string, unique name, ID, or alias of the database. To access another app's database, prepend the app name to the config var or alias with `APP_NAME::` . If omitted, we use DATABASE_URL",
        isOptional: true,
      },
    },
    {
      name: "pg:calls",
      description: "Show 10 queries that have highest frequency of execution",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        {
          name: ["-t", "--truncate"],
          description: "Truncate queries to 40 characters",
        },
        promptOption,
      ],
      args: {
        name: "database",
        description:
          "Config var containing the connection string, unique name, ID, or alias of the database. To access another app's database, prepend the app name to the config var or alias with `APP_NAME::` . If omitted, we use DATABASE_URL",
        isOptional: true,
      },
    },
    {
      name: "pg:extensions",
      description: "List available and installed extensions",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
      args: {
        name: "database",
        description:
          "Config var containing the connection string, unique name, ID, or alias of the database. To access another app's database, prepend the app name to the config var or alias with `APP_NAME::` . If omitted, we use DATABASE_URL",
        isOptional: true,
      },
    },
    {
      name: "pg:fdwsql",
      description: "Generate fdw install sql for database",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
      args: [
        { name: "prefix", description: "Prefix for foreign data wrapper" },
        {
          name: "database",
          description:
            "Config var containing the connection string, unique name, ID, or alias of the database. To access another app's database, prepend the app name to the config var or alias with `APP_NAME::` . If omitted, we use DATABASE_URL",
          isOptional: true,
        },
      ],
    },
    {
      name: ["pg:index-size", "pg:index_size"],
      description: "Show the size of indexes, descending by size",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
      args: {
        name: "database",
        description:
          "Config var containing the connection string, unique name, ID, or alias of the database. To access another app's database, prepend the app name to the config var or alias with `APP_NAME::` . If omitted, we use DATABASE_URL",
        isOptional: true,
      },
    },
    {
      name: ["pg:index-usage", "pg:index_usage"],
      description:
        "Calculates your index hit rate (effective databases are at 99% and up)",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
      args: {
        name: "database",
        description:
          "Config var containing the connection string, unique name, ID, or alias of the database. To access another app's database, prepend the app name to the config var or alias with `APP_NAME::` . If omitted, we use DATABASE_URL",
        isOptional: true,
      },
    },
    {
      name: ["pg:long-running-queries", "pg:long_running_queries"],
      description:
        "Show all queries longer than five minutes by descending duration",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
      args: {
        name: "database",
        description:
          "Config var containing the connection string, unique name, ID, or alias of the database. To access another app's database, prepend the app name to the config var or alias with `APP_NAME::` . If omitted, we use DATABASE_URL",
        isOptional: true,
      },
    },
    {
      name: "pg:mandelbrot",
      description: "Show the mandelbrot set",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
      args: {
        name: "database",
        description:
          "Config var containing the connection string, unique name, ID, or alias of the database. To access another app's database, prepend the app name to the config var or alias with `APP_NAME::` . If omitted, we use DATABASE_URL",
        isOptional: true,
      },
    },
    {
      name: ["pg:records-rank", "pg:records_rank"],
      description:
        "Show all tables and the number of rows in each ordered by number of rows descending",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
      args: {
        name: "database",
        description:
          "Config var containing the connection string, unique name, ID, or alias of the database. To access another app's database, prepend the app name to the config var or alias with `APP_NAME::` . If omitted, we use DATABASE_URL",
        isOptional: true,
      },
    },
    {
      name: ["pg:seq-scans", "pg:seq_scans"],
      description:
        "Show the count of sequential scans by table descending by order",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
      args: {
        name: "database",
        description:
          "Config var containing the connection string, unique name, ID, or alias of the database. To access another app's database, prepend the app name to the config var or alias with `APP_NAME::` . If omitted, we use DATABASE_URL",
        isOptional: true,
      },
    },
    {
      name: ["pg:stats-reset", "pg:stats_reset"],
      description: "Calls the Postgres functions pg_stat_reset()",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
      args: {
        name: "database",
        description:
          "Config var containing the connection string, unique name, ID, or alias of the database. To access another app's database, prepend the app name to the config var or alias with `APP_NAME::` . If omitted, we use DATABASE_URL",
        isOptional: true,
      },
    },
    {
      name: ["pg:table-indexes-size", "pg:table_indexes_size"],
      description:
        "Show the total size of all the indexes on each table, descending by size",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
      args: {
        name: "database",
        description:
          "Config var containing the connection string, unique name, ID, or alias of the database. To access another app's database, prepend the app name to the config var or alias with `APP_NAME::` . If omitted, we use DATABASE_URL",
        isOptional: true,
      },
    },
    {
      name: ["pg:table-size", "pg:table_size"],
      description:
        "Show the size of the tables (excluding indexes), descending by size",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
      args: {
        name: "database",
        description:
          "Config var containing the connection string, unique name, ID, or alias of the database. To access another app's database, prepend the app name to the config var or alias with `APP_NAME::` . If omitted, we use DATABASE_URL",
        isOptional: true,
      },
    },
    {
      name: ["pg:total-index-size", "pg:total_index_size"],
      description: "Show the total size of all indexes in MB",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
      args: {
        name: "database",
        description:
          "Config var containing the connection string, unique name, ID, or alias of the database. To access another app's database, prepend the app name to the config var or alias with `APP_NAME::` . If omitted, we use DATABASE_URL",
        isOptional: true,
      },
    },
    {
      name: ["pg:total-table-size", "pg:total_table_size"],
      description:
        "Show the size of the tables (including indexes), descending by size",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
      args: {
        name: "database",
        description:
          "Config var containing the connection string, unique name, ID, or alias of the database. To access another app's database, prepend the app name to the config var or alias with `APP_NAME::` . If omitted, we use DATABASE_URL",
        isOptional: true,
      },
    },
    {
      name: ["pg:unused-indexes", "pg:unused_indexes"],
      description: "Show unused and almost unused indexes",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
      args: {
        name: "database",
        description:
          "Config var containing the connection string, unique name, ID, or alias of the database. To access another app's database, prepend the app name to the config var or alias with `APP_NAME::` . If omitted, we use DATABASE_URL",
        isOptional: true,
      },
    },
    {
      name: ["pg:user-connections", "pg:user_connections"],
      description: "Returns the number of connections per credential",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
      args: {
        name: "database",
        description:
          "Config var containing the connection string, unique name, ID, or alias of the database. To access another app's database, prepend the app name to the config var or alias with `APP_NAME::` . If omitted, we use DATABASE_URL",
        isOptional: true,
      },
    },
    {
      name: "pg:upgrade:cancel",
      description:
        "Cancels a scheduled upgrade. You can't cancel a version upgrade that's in progress",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        { name: ["-c", "--confirm"], args: {} },
        promptOption,
      ],
      args: {
        name: "database",
        description:
          "Config var containing the connection string, unique name, ID, or alias of the database. To access another app's database, prepend the app name to the config var or alias with `APP_NAME::` . If omitted, we use DATABASE_URL",
        isOptional: true,
      },
    },
    {
      name: "pg:upgrade:dryrun",
      description:
        "Simulates a Postgres version upgrade on a Standard-tier and higher leader database by creating and upgrading a follower database. Heroku sends the results of the test upgrade via email",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        { name: ["-c", "--confirm"], args: {} },
        {
          name: ["-v", "--version"],
          description: "Postgres version to upgrade to",
          args: {},
        },
        promptOption,
      ],
      args: {
        name: "database",
        description:
          "Config var containing the connection string, unique name, ID, or alias of the database. To access another app's database, prepend the app name to the config var or alias with `APP_NAME::` . If omitted, we use DATABASE_URL",
        isOptional: true,
      },
    },
    {
      name: "pg:upgrade:prepare",
      description:
        "Prepares the upgrade for Standard-tier and higher leader databases and schedules it for the next available maintenance window. To start a version upgrade on Essential-tier and follower databases, use heroku pg:upgrade:run instead",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        { name: ["-c", "--confirm"], args: {} },
        {
          name: ["-v", "--version"],
          description: "Postgres version to upgrade to",
          args: {},
        },
        promptOption,
      ],
      args: {
        name: "database",
        description:
          "Config var containing the connection string, unique name, ID, or alias of the database. To access another app's database, prepend the app name to the config var or alias with `APP_NAME::` . If omitted, we use DATABASE_URL",
        isOptional: true,
      },
    },
    {
      name: "pg:upgrade:run",
      description: "Starts a Postgres version upgrade",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        { name: ["-c", "--confirm"], args: {} },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        {
          name: ["-v", "--version"],
          description: "Postgres version to upgrade to",
          args: {},
        },
        promptOption,
      ],
      args: {
        name: "database",
        description:
          "Config var containing the connection string, unique name, ID, or alias of the database. To access another app's database, prepend the app name to the config var or alias with `APP_NAME::` . If omitted, we use DATABASE_URL",
        isOptional: true,
      },
    },
    {
      name: "pg:upgrade:wait",
      description:
        "Provides the status of an upgrade and blocks it until the operation is complete",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        { name: "--no-notify", description: "Do not show OS notification" },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        {
          name: "--wait-interval",
          description:
            "How frequently to poll in seconds (to avoid rate limiting)",
          args: {},
        },
        promptOption,
      ],
      args: {
        name: "database",
        description:
          "Config var containing the connection string, unique name, ID, or alias of the database. To access another app's database, prepend the app name to the config var or alias with `APP_NAME::`",
        isOptional: true,
      },
    },
    {
      name: "psql",
      description: "Open a psql shell to the database\n",
      options: [
        {
          name: ["-c", "--command"],
          description: "SQL command to run",
          args: {},
        },
        { name: ["-f", "--file"], description: "SQL file to run", args: {} },
        { name: "--credential", description: "Credential to use", args: {} },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
      args: { name: "database", isOptional: true },
    },
    {
      name: "redis",
      description: "Gets information about redis\n",
      options: [
        { name: ["-j", "--json"], description: "Output in json format" },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
      args: { name: "database", isOptional: true },
    },
    {
      name: "redis:cli",
      description: "Opens a redis prompt\n",
      options: [
        { name: ["-c", "--confirm"], args: {} },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
      args: { name: "database", isOptional: true },
    },
    {
      name: "redis:credentials",
      description: "Display credentials information\n",
      options: [
        { name: "--reset", description: "Reset credentials" },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
      args: { name: "database", isOptional: true },
    },
    {
      name: "redis:info",
      description: "Gets information about redis\n",
      options: [
        { name: ["-j", "--json"], description: "Output in json format" },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
      args: { name: "database", isOptional: true },
    },
    {
      name: "redis:keyspace-notifications",
      description:
        'Set the keyspace notifications configuration\nSet the configuration to enable keyspace notification events:\n    K     Keyspace events, published with __keyspace@<db>__ prefix.\n    E     Keyevent events, published with __keyevent@<db>__ prefix.\n    g     Generic commands (non-type specific) like DEL, EXPIRE, RENAME, ...\n    $     String commands\n    l     List commands\n    s     Set commands\n    h     Hash commands\n    z     Sorted set commands\n    t     Stream commands\n    x     Expired events (events generated every time a key expires)\n    e     Evicted events (events generated when a key is evicted for maxmemory)\n    m     Key miss events (events generated when a key that doesn\'t exist is accessed)\n    A     Alias for "g$lshztxe", so that the "AKE" string means all the events except "m".\n\n    pass an empty string (\'\') to disable keyspace notifications\n',
      options: [
        {
          name: ["-c", "--config"],
          description: "Set keyspace notifications configuration",
          args: {},
          isRequired: true,
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
      args: { name: "database", isOptional: true },
    },
    {
      name: "redis:maxmemory",
      description:
        "Set the key eviction policy when instances reach their storage limit",
      options: [
        {
          name: ["-p", "--policy"],
          description: "Set policy name",
          args: {},
          isRequired: true,
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
      args: { name: "database", isOptional: true },
    },
    {
      name: "redis:promote",
      description: "Sets DATABASE as your REDIS_URL\n",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        {
          name: "--as",
          description: "Name for the Key-Value Store attachment",
          args: {},
        },
        promptOption,
      ],
      args: { name: "database", isOptional: true },
    },
    {
      name: "redis:stats-reset",
      description:
        "Reset all stats covered by RESETSTAT (https://redis.io/commands/config-resetstat)\n",
      options: [
        { name: ["-c", "--confirm"], args: {} },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
      args: { name: "database", isOptional: true },
    },
    {
      name: "redis:timeout",
      description:
        "Set the number of seconds to wait before killing idle connections\nSets the number of seconds to wait before killing idle connections. A value of zero means that connections will not be closed",
      options: [
        {
          name: ["-s", "--seconds"],
          description: "Set timeout value",
          args: {},
          isRequired: true,
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
      args: { name: "database", isOptional: true },
    },
    {
      name: "redis:upgrade",
      description: "Perform in-place version upgrade\n",
      options: [
        { name: ["-c", "--confirm"], args: {} },
        { name: ["-v", "--version"], args: {}, isRequired: true },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
      args: { name: "database", isOptional: true },
    },
    {
      name: "redis:wait",
      description: "Wait for Redis instance to be available\n",
      options: [
        {
          name: "--wait-interval",
          description: "How frequently to poll in seconds",
          args: {},
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
      args: { name: "database", isOptional: true },
    },
    {
      name: "spaces",
      description: "List available spaces\n",
      options: [
        { name: "--json", description: "Output in json format" },
        { name: ["-t", "--team"], description: "Team to use", args: {} },
        promptOption,
      ],
    },
    {
      name: "spaces:create",
      description:
        "Create a new space\nExample:\n\n    $ heroku spaces:create --space my-space --team my-team --region oregon\n    Creating space my-space in team my-team... done\n    === my-space\n    ID:         e7b99e37-69b3-4475-ad47-a5cc5d75fd9f\n    Team:       my-team\n    Region:     oregon\n    CIDR:       10.0.0.0/16\n    Data CIDR:  172.23.0.0/20\n    State:      allocating\n    Created at: 2016-01-06T03:23:13Z\n\n",
      options: [
        {
          name: ["-s", "--space"],
          description: "Name of space to create",
          args: {},
        },
        { name: "--region", description: "Region name", args: {} },
        {
          name: "--cidr",
          description: "RFC-1918 CIDR the space will use",
          args: {},
        },
        {
          name: "--data-cidr",
          description:
            "RFC-1918 CIDR used by Heroku Data resources for the space",
          args: {},
        },
        {
          name: ["-t", "--team"],
          description: "Team to use",
          args: {},
          isRequired: true,
        },
        {
          name: "--generation",
          description: "Generation for space",
          args: { suggestions: ["cedar", "fir"] },
        },
        promptOption,
      ],
    },
    {
      name: "spaces:destroy",
      description:
        "Destroy a space\nExample:\n\n    $ heroku spaces:destroy --space my-space\n    Destroying my-space... done\n",
      options: [
        { name: ["-s", "--space"], description: "Space to destroy", args: {} },
        {
          name: "--confirm",
          description: "Set to space name to bypass confirm prompt",
          args: {},
        },
        promptOption,
      ],
    },
    {
      name: "spaces:info",
      description: "Show info about a space\n",
      options: [
        {
          name: ["-s", "--space"],
          description: "Space to get info of",
          args: {},
        },
        { name: "--json", description: "Output in json format" },
        promptOption,
      ],
    },
    {
      name: "spaces:peerings",
      description: "List peering connections for a space\n",
      options: [
        {
          name: ["-s", "--space"],
          description: "Space to get peer list from",
          args: {},
        },
        { name: "--json", description: "Output in json format" },
        promptOption,
      ],
    },
    {
      name: "spaces:peerings:accept",
      description:
        "Accepts a pending peering request for a private space\nExample:\n\n    $ heroku spaces:peerings:accept pcx-4bd27022 --space example-space\n    Accepting and configuring peering connection pcx-4bd27022\n",
      options: [
        {
          name: ["-p", "--pcxid"],
          description: "PCX ID of a pending peering",
          args: {},
        },
        {
          name: ["-s", "--space"],
          description: "Space to get peering info from",
          args: {},
        },
        promptOption,
      ],
    },
    {
      name: "spaces:peerings:destroy",
      description:
        "Destroys an active peering connection in a private space\nExample:\n\n    $ heroku spaces:peerings:destroy pcx-4bd27022 --confirm pcx-4bd27022 --space example-space\n    Tearing down peering connection pcx-4bd27022\n",
      options: [
        {
          name: ["-p", "--pcxid"],
          description: "PCX ID of a pending peering",
          args: {},
        },
        {
          name: ["-s", "--space"],
          description: "Space to get peering info from",
          args: {},
          isRequired: true,
        },
        {
          name: "--confirm",
          description: "Set to PCX ID to bypass confirm prompt",
          args: {},
        },
        promptOption,
      ],
    },
    {
      name: ["spaces:peerings:info", "spaces:peering:info"],
      description:
        "Display the information necessary to initiate a peering connection",
      options: [
        { name: "--json", description: "Output in json format" },
        {
          name: ["-s", "--space"],
          description: "Space to get peering info from",
          args: {},
        },
        promptOption,
      ],
    },
    {
      name: "spaces:ps",
      description: "List dynos for a space\n",
      options: [
        {
          name: ["-s", "--space"],
          description: "Space to get dynos of",
          args: {},
        },
        { name: "--json", description: "Output in json format" },
        promptOption,
      ],
    },
    {
      name: "spaces:rename",
      description:
        "Renames a space\nExample:\n\n    $ heroku spaces:rename --from old-space-name --to new-space-name\n    Renaming space old-space-name to new-space-name... done\n",
      options: [
        {
          name: "--from",
          description: "Current name of space",
          args: {},
          isRequired: true,
        },
        {
          name: "--to",
          description: "Desired name of space",
          args: {},
          isRequired: true,
        },
        promptOption,
      ],
    },
    {
      name: "spaces:topology",
      description: "Show space topology\n",
      options: [
        {
          name: ["-s", "--space"],
          description: "Space to get topology of",
          args: {},
        },
        { name: "--json", description: "Output in json format" },
        promptOption,
      ],
    },
    {
      name: "spaces:transfer",
      description:
        "Transfer a space to another team\nExample:\n\n    $ heroku spaces:transfer --space=space-name --team=team-name\n    Transferring space-name to team-name... done\n",
      options: [
        {
          name: ["-s", "--space"],
          description: "Name of space",
          args: {},
          isRequired: true,
        },
        {
          name: ["-t", "--team"],
          description: "Desired owner of space",
          args: {},
          isRequired: true,
        },
        promptOption,
      ],
    },
    {
      name: "spaces:vpn:config",
      description:
        "Display the configuration information for VPN\nExample:\n\n    $ heroku spaces:vpn:config --space my-space vpn-connection-name\n    === vpn-connection-name VPN Tunnels\n    VPN Tunnel  Customer Gateway  VPN Gateway     Pre-shared Key  Routable Subnets  IKE Version\n    ──────────  ────────────────  ──────────────  ──────────────  ────────────────  ───────────\n    Tunnel 1    104.196.121.200   35.171.237.136  abcdef12345     10.0.0.0/16       1\n    Tunnel 2    104.196.121.200   52.44.7.216     fedcba54321     10.0.0.0/16       1\n\nYou will use the information provided by this command to establish a Private Space VPN Connection.\n\n- You must configure your VPN Gateway to use both Tunnels provided by Heroku\n- The VPN Gateway values are the IP addresses of the Private Space Tunnels\n- The Customer Gateway value is the Public IP of your VPN Gateway\n- The VPN Gateway must use the IKE Version shown and the Pre-shared Keys as the authentication method\n",
      options: [
        {
          name: ["-s", "--space"],
          description: "Space the VPN connection belongs to",
          args: {},
          isRequired: true,
        },
        { name: "--json", description: "Output in json format" },
        promptOption,
      ],
      args: {
        name: "name",
        description: "Name or id of the VPN connection to retrieve config from",
      },
    },
    {
      name: "spaces:vpn:connect",
      description:
        "Create VPN\nPrivate Spaces can be connected to another private network via an IPSec VPN connection allowing dynos to connect to hosts on your private networks and vice versa.\nThe connection is established over the public Internet but all traffic is encrypted using IPSec",
      options: [
        {
          name: ["-i", "--ip"],
          description: "Public IP of customer gateway",
          args: {},
          isRequired: true,
        },
        {
          name: ["-c", "--cidrs"],
          description: "A list of routable CIDRs separated by commas",
          args: {},
          isRequired: true,
        },
        {
          name: ["-s", "--space"],
          description: "Space name",
          args: {},
          isRequired: true,
        },
        promptOption,
      ],
      args: {
        name: "name",
        description: "Name or id of the VPN connection to create",
      },
    },
    {
      name: "spaces:vpn:connections",
      description:
        "List the VPN Connections for a space\nExample:\n\n  $ heroku spaces:vpn:connections --space my-space\n  === my-space VPN Connections\n  Name    Status  Tunnels\n  ──────  ──────  ───────\n  office  active  UP/UP\n",
      options: [
        {
          name: ["-s", "--space"],
          description: "Space to get VPN connections from",
          args: {},
          isRequired: true,
        },
        { name: "--json", description: "Output in json format" },
        promptOption,
      ],
    },
    {
      name: "spaces:vpn:destroy",
      description:
        "Destroys VPN in a private space\nExample:\n\n    $ heroku spaces:vpn:destroy --space example-space vpn-connection-name --confirm vpn-connection-name\n    Tearing down VPN Connection vpn-connection-name in space example-space\n",
      options: [
        {
          name: ["-s", "--space"],
          description: "Space name",
          args: {},
          isRequired: true,
        },
        {
          name: "--confirm",
          description: "Set to VPN connection name to bypass confirm prompt",
          args: {},
          hidden: true,
        },
        promptOption,
      ],
      args: {
        name: "name",
        description: "Name or id of the VPN connection to destroy",
      },
    },
    {
      name: "spaces:vpn:info",
      description:
        "Display the information for VPN\nExample:\n\n    $ heroku spaces:vpn:info --space my-space vpn-connection-name\n    === vpn-connection-name VPN Tunnel Info\n    Name:           vpn-connection-name\n    ID:             123456789012\n    Public IP:      35.161.69.30\n    Routable CIDRs: 172.16.0.0/16\n    Status:         failed\n    Status Message: supplied CIDR block already in use\n    === my-space Tunnel Info\n    VPN Tunnel  IP Address     Status  Status Last Changed   Details\n    ──────────  ─────────────  ──────  ────────────────────  ──────────────\n    Tunnel 1    52.44.146.197  UP      2016-10-25T22:09:05Z  status message\n    Tunnel 2    52.44.146.197  UP      2016-10-25T22:09:05Z  status message",
      options: [
        {
          name: ["-s", "--space"],
          description: "Space the vpn connection belongs to",
          args: {},
          isRequired: true,
        },
        { name: "--json", description: "Output in json format" },
        promptOption,
      ],
      args: {
        name: "name",
        description: "Name or id of the VPN connection to get info from",
      },
    },
    {
      name: "spaces:vpn:update",
      description:
        "Update VPN\nPrivate Spaces can be connected to another private network via an IPSec VPN connection allowing dynos to connect to hosts on your private networks and vice versa.\nThe connection is established over the public Internet but all traffic is encrypted using IPSec",
      options: [
        {
          name: ["-c", "--cidrs"],
          description: "A list of routable CIDRs separated by commas",
          args: {},
          isRequired: true,
        },
        {
          name: ["-s", "--space"],
          description: "Space name",
          args: {},
          isRequired: true,
        },
        promptOption,
      ],
      args: {
        name: "name",
        description: "Name or id of the VPN connection to update",
      },
    },
    {
      name: "spaces:vpn:wait",
      description: "Wait for VPN Connection to be created\n",
      options: [
        {
          name: ["-s", "--space"],
          description: "Space the vpn connection belongs to",
          args: {},
          isRequired: true,
        },
        { name: "--json", description: "Output in json format" },
        {
          name: ["-i", "--interval"],
          description: "Seconds to wait between poll intervals",
          args: {},
        },
        {
          name: ["-t", "--timeout"],
          description: "Maximum number of seconds to wait",
          args: {},
        },
        promptOption,
      ],
      args: {
        name: "name",
        description:
          "Name or id of the VPN connection you are waiting on for allocation",
      },
    },
    {
      name: "spaces:wait",
      description: "Wait for a space to be created\n",
      options: [
        {
          name: ["-s", "--space"],
          description: "Space to get info of",
          args: {},
        },
        { name: "--json", description: "Output in json format" },
        {
          name: ["-i", "--interval"],
          description: "Seconds to wait between poll intervals",
          args: {},
        },
        {
          name: ["-t", "--timeout"],
          description: "Maximum number of seconds to wait",
          args: {},
        },
        promptOption,
      ],
    },
    {
      name: ["spaces:drains:get", "drains:get"],
      description: "Display the log drain for a space",
      options: [
        { name: "--json", description: "Output in json format" },
        {
          name: ["-s", "--space"],
          description: "Space for which to get log drain",
          args: {},
          isRequired: true,
        },
        promptOption,
      ],
    },
    {
      name: ["spaces:drains:set", "drains:set"],
      description: "Replaces the log drain for a space",
      options: [
        {
          name: ["-s", "--space"],
          description: "Space for which to set log drain",
          args: {},
          isRequired: true,
        },
        promptOption,
      ],
      args: { name: "url", description: "URL to replace the log drain with" },
    },
    {
      name: ["spaces:trusted-ips:add", "trusted-ips:add"],
      description: "Add one range to the list of trusted IP ranges",
      options: [
        {
          name: "--confirm",
          description: "Set to space name to bypass confirm prompt",
          args: {},
        },
        {
          name: ["-s", "--space"],
          description: "Space to add rule to",
          args: {},
          isRequired: true,
        },
        promptOption,
      ],
      args: { name: "source", description: "IP address in CIDR notation" },
    },
    {
      name: ["spaces:trusted-ips", "trusted-ips"],
      description: "List trusted IP ranges for a space",
      options: [
        { name: "--json", description: "Output in json format" },
        {
          name: ["-s", "--space"],
          description: "Space to get inbound rules from",
          args: {},
        },
        promptOption,
      ],
    },
    {
      name: ["spaces:trusted-ips:remove", "trusted-ips:remove"],
      description: "Remove a range from the list of trusted IP ranges",
      options: [
        {
          name: "--confirm",
          description: "Set to space name to bypass confirm prompt",
          args: {},
        },
        {
          name: ["-s", "--space"],
          description: "Space to remove rule from",
          args: {},
          isRequired: true,
        },
        promptOption,
      ],
      args: { name: "source", description: "IP address in CIDR notation" },
    },
    {
      name: "access",
      description: "List who has access to an app\n",
      options: [
        { name: "--json", description: "Output in json format" },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
    },
    {
      name: "access:add",
      description: "Add new users to your app\n",
      options: [
        {
          name: ["-p", "--permissions"],
          description: "List of permissions comma separated",
          args: {},
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
      args: { name: "email" },
    },
    {
      name: "access:remove",
      description: "Remove users from a team app\n",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
      args: { name: "email" },
    },
    {
      name: "access:update",
      description: "Update existing collaborators on an team app\n",
      options: [
        {
          name: ["-p", "--permissions"],
          description:
            "Comma-delimited list of permissions to update (deploy,manage,operate)",
          args: {},
          isRequired: true,
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
      args: { name: "email" },
    },
    {
      name: "apps:join",
      description: "Add yourself to a team app\n",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
    },
    {
      name: "apps:leave",
      description: "Remove yourself from a team app\n",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
    },
    {
      name: "apps:lock",
      description: "Prevent team members from joining an app\n",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
    },
    {
      name: "apps:transfer",
      description: "Transfer applications to another user or team\n",
      options: [
        { name: ["-l", "--locked"], description: "Lock the app upon transfer" },
        { name: "--bulk", description: "Transfer applications in bulk" },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
      args: {
        name: "recipient",
        description: "User or team to transfer applications to",
      },
    },
    {
      name: "apps:unlock",
      description: "Unlock an app so any team member can join\n",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
    },
    {
      name: "join",
      description: "Add yourself to a team app\n",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
    },
    {
      name: "leave",
      description: "Remove yourself from a team app\n",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
    },
    {
      name: "lock",
      description: "Prevent team members from joining an app\n",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
    },
    {
      name: "members",
      description: "List members of a team\n",
      options: [
        { name: ["-r", "--role"], description: "Filter by role", args: {} },
        {
          name: "--pending",
          description: "Filter by pending team invitations",
        },
        { name: "--json", description: "Output in json format" },
        {
          name: ["-t", "--team"],
          description: "Team to use",
          args: {},
          isRequired: true,
        },
        promptOption,
      ],
    },
    {
      name: "members:add",
      description: "Adds a user to a team\n",
      options: [
        {
          name: ["-r", "--role"],
          description: "Member role (admin, collaborator, member, owner)",
          args: {},
          isRequired: true,
        },
        {
          name: ["-t", "--team"],
          description: "Team to use",
          args: {},
          isRequired: true,
        },
        promptOption,
      ],
      args: { name: "email" },
    },
    {
      name: "members:remove",
      description: "Removes a user from a team\n",
      options: [
        {
          name: ["-t", "--team"],
          description: "Team to use",
          args: {},
          isRequired: true,
        },
        promptOption,
      ],
      args: { name: "email" },
    },
    {
      name: "members:set",
      description: "Sets a members role in a team\n",
      options: [
        {
          name: ["-r", "--role"],
          description: "Member role (admin, collaborator, member, owner)",
          args: {},
          isRequired: true,
        },
        {
          name: ["-t", "--team"],
          description: "Team to use",
          args: {},
          isRequired: true,
        },
        promptOption,
      ],
      args: { name: "email" },
    },
    {
      name: "orgs",
      description: "List the teams that you are a member of\n",
      options: [
        { name: "--json", description: "Output in json format" },
        { name: "--enterprise", description: "Filter by enterprise teams" },
        promptOption,
      ],
    },
    {
      name: "orgs:open",
      description: "Open the team interface in a browser window\n",
      options: [
        {
          name: ["-t", "--team"],
          description: "Team to use",
          args: {},
          isRequired: true,
        },
        promptOption,
      ],
    },
    {
      name: "teams",
      description:
        "List the teams that you are a member of\n\nUse heroku members:* to manage team members.\n",
      options: [
        { name: "--json", description: "Output in json format" },
        promptOption,
      ],
    },
    {
      name: "unlock",
      description: "Unlock an app so any team member can join\n",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
    },
    {
      name: ["apps", "list", "apps:list"],
      description: "List your apps\n",
      options: [
        { name: ["-A", "--all"], description: "Include apps in all teams" },
        { name: ["-j", "--json"], description: "Output in json format" },
        { name: ["-s", "--space"], description: "Filter by space", args: {} },
        {
          name: ["-p", "--personal"],
          description:
            "List apps in personal account when a default team is set",
        },
        { name: ["-t", "--team"], description: "Team to use", args: {} },
        promptOption,
      ],
    },
    {
      name: ["apps:create", "create"],
      description: "Creates a new app\n",
      options: [
        {
          name: "--addons",
          description: "Comma-delimited list of addons to install",
          args: {},
        },
        {
          name: ["-b", "--buildpack"],
          description: "Buildpack url to use for this app",
          args: {},
        },
        {
          name: ["-n", "--no-remote"],
          description: "Do not create a git remote",
        },
        {
          name: ["-r", "--remote"],
          description: 'The git remote to create, default "heroku"',
          args: {},
        },
        {
          name: ["-s", "--stack"],
          description: "The stack to create the app on",
          args: {},
        },
        {
          name: "--space",
          description: "The private space to create the app in",
          args: {},
        },
        {
          name: "--region",
          description: "Specify region for the app to run in",
          args: {},
        },
        { name: "--json", description: "Output in json format" },
        { name: ["-t", "--team"], description: "Team to use", args: {} },
        promptOption,
      ],
      args: {
        name: "app",
        description: "Name of app to create",
        isOptional: true,
      },
    },
    {
      name: ["apps:destroy", "destroy", "apps:delete"],
      description:
        "Permanently destroy an app\nThis will also destroy all add-ons on the app",
      options: [
        { name: ["-c", "--confirm"], args: {} },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
    },
    {
      name: "apps:errors",
      description: "View app errors\n",
      options: [
        { name: "--json", description: "Output in json format" },
        {
          name: "--hours",
          description: "Number of hours to look back (default 24)",
          args: {},
        },
        { name: "--router", description: "Show only router errors" },
        { name: "--dyno", description: "Show only dyno errors" },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
    },
    {
      name: "apps:favorites",
      description: "List favorited apps\n",
      options: [
        { name: ["-j", "--json"], description: "Output in json format" },
        promptOption,
      ],
    },
    {
      name: "apps:favorites:add",
      description: "Favorites an app\n",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
    },
    {
      name: "apps:favorites:remove",
      description: "Unfavorites an app\n",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
    },
    {
      name: ["apps:info", "info"],
      description:
        "Show detailed app information\n$ heroku apps:info\n=== example\nGit URL:   https://git.heroku.com/example.git\nRepo Size: 5M\n...\n\n$ heroku apps:info --shell\ngit_url=https://git.heroku.com/example.git\nrepo_size=5000000\n",
      options: [
        {
          name: ["-s", "--shell"],
          description: "Output more shell friendly key/value pairs",
        },
        { name: ["-j", "--json"], description: "Output in json format" },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
    },
    {
      name: ["apps:open", "open"],
      description: "Open the app in a web browser\n",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
      args: { name: "path", isOptional: true },
    },
    {
      name: ["apps:rename", "rename"],
      description:
        "Rename an app\nThis will locally update the git remote if it is set to the old app",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
      args: { name: "newname" },
    },
    {
      name: ["apps:stacks", "stack"],
      description: "Show the list of available stacks\n",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
    },
    {
      name: ["apps:stacks:set", "stack:set"],
      description: "Set the stack of an app\n",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
      args: { name: "stack" },
    },
    {
      name: "apps:diff",
      description: "Diffs two apps",
      options: [promptOption],
      args: [
        { name: "app1", description: "First app to compare" },
        { name: "app2", description: "Second app to compare" },
      ],
    },
    {
      name: ["config:set", "config:add"],
      description: "Set one or more config vars\n",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
    },
    {
      name: "drains",
      description: "Display the log drains of an app\n",
      options: [
        { name: "--json", description: "Output in json format" },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
    },
    {
      name: "drains:add",
      description: "Adds a log drain to an app\n",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
      args: { name: "url" },
    },
    {
      name: "drains:remove",
      description: "Removes a log drain from an app\n",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
      args: { name: "url" },
    },
    {
      name: "dyno:kill",
      description: "Stop an app dyno or process type",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        {
          name: ["-d", "--dyno-name"],
          description: "Name of the dyno to stop",
          args: {},
        },
        {
          name: ["-p", "--process-type"],
          description: "Name of the process type to stop",
          args: {},
          exclusiveOn: ["--dyno-name"],
        },
        promptOption,
      ],
      args: { name: "dyno", isOptional: true },
    },
    {
      name: "dyno:resize",
      description:
        "Manage dyno sizes\n\nCalled with no arguments shows the current dyno size.\n\nCalled with one argument sets the size.\nWhere SIZE is one of eco|basic|standard-1x|standard-2x|performance\n\nCalled with 1..n TYPE=SIZE arguments sets the quantity per type.\n",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
    },
    {
      name: "dyno:restart",
      description: "Restart an app dyno or process type",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        {
          name: ["-d", "--dyno-name"],
          description: "Name of the dyno to restart",
          args: {},
        },
        {
          name: ["-p", "--process-type"],
          description: "Name of the process type to restart",
          args: {},
          exclusiveOn: ["--dyno-name"],
        },
        promptOption,
      ],
      args: { name: "dyno", isOptional: true },
    },
    {
      name: "dyno:scale",
      description:
        "Scale dyno quantity up or down\nAppending a size (eg. web=2:Standard-2X) allows simultaneous scaling and resizing.\n\nOmitting any arguments will display the app's current dyno formation, in a\nformat suitable for passing back into ps:scale",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
    },
    {
      name: "dyno:stop",
      description: "Stop an app dyno or process type",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        {
          name: ["-d", "--dyno-name"],
          description: "Name of the dyno to stop",
          args: {},
        },
        {
          name: ["-p", "--process-type"],
          description: "Name of the process type to stop",
          args: {},
          exclusiveOn: ["--dyno-name"],
        },
        promptOption,
      ],
      args: { name: "dyno", isOptional: true },
    },
    {
      name: "features",
      description: "List available app features\n",
      options: [
        { name: "--json", description: "Output in json format" },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
    },
    {
      name: "features:disable",
      description: "Disables an app feature\n",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
      args: { name: "feature" },
    },
    {
      name: "features:enable",
      description: "Enables an app feature\n",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
      args: { name: "feature" },
    },
    {
      name: "features:info",
      description: "Display information about a feature\n",
      options: [
        { name: "--json", description: "Output in json format" },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
      args: { name: "feature" },
    },
    {
      name: "keys",
      description: "Display your SSH keys\n",
      options: [
        { name: ["-l", "--long"], description: "Display full SSH keys" },
        { name: "--json", description: "Output in json format" },
        promptOption,
      ],
    },
    {
      name: "keys:add",
      description:
        "Add an SSH key for a user\nif no KEY is specified, will try to find ~/.ssh/id_rsa.pub",
      options: [
        {
          name: ["-y", "--yes"],
          description: "Automatically answer yes for all prompts",
        },
        promptOption,
      ],
      args: { name: "key", isOptional: true },
    },
    {
      name: "keys:clear",
      description: "Remove all SSH keys for current user\n",
    },
    {
      name: "keys:remove",
      description: "Remove an SSH key from the user\n",
      options: [promptOption],
      args: { name: "key" },
    },
    {
      name: "labs",
      description: "List experimental features\n",
      options: [
        { name: "--json", description: "Display as json" },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
    },
    {
      name: "labs:enable",
      description: "Enables an experimental feature\n",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
      args: { name: "feature" },
    },
    {
      name: "labs:info",
      description: "Show feature info\n",
      options: [
        { name: "--json", description: "Display as json" },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
      args: { name: "feature" },
    },
    {
      name: "maintenance",
      description: "Display the current maintenance status of app\n",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
    },
    {
      name: "maintenance:off",
      description: "Take the app out of maintenance mode\n",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
    },
    {
      name: "maintenance:on",
      description: "Put the app into maintenance mode\n",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
    },
    {
      name: "notifications",
      description: "Display notifications\n",
      options: [
        {
          name: "--all",
          description:
            "View all notifications (not just the ones for the current app)",
        },
        { name: "--json", description: "Output in json format" },
        { name: "--read", description: "Show notifications already read" },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
    },
    {
      name: "ps",
      description: "List dynos for an app\n",
      options: [
        { name: "--json", description: "Display as json" },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
    },
    {
      name: "ps:kill",
      description: "Stop an app dyno or process type",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        {
          name: ["-d", "--dyno-name"],
          description: "Name of the dyno to stop",
          args: {},
        },
        {
          name: ["-p", "--process-type"],
          description: "Name of the process type to stop",
          args: {},
          exclusiveOn: ["--dyno-name"],
        },
        promptOption,
      ],
      args: { name: "dyno", isOptional: true },
    },
    {
      name: "ps:resize",
      description:
        "Manage dyno sizes\n\nCalled with no arguments shows the current dyno size.\n\nCalled with one argument sets the size.\nWhere SIZE is one of eco|basic|standard-1x|standard-2x|performance\n\nCalled with 1..n TYPE=SIZE arguments sets the quantity per type.\n",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
    },
    {
      name: ["ps:restart", "restart"],
      description: "Restart an app dyno or process type",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        {
          name: ["-d", "--dyno-name"],
          description: "Name of the dyno to restart",
          args: {},
        },
        {
          name: ["-p", "--process-type"],
          description: "Name of the process type to restart",
          args: {},
          exclusiveOn: ["--dyno-name"],
        },
        promptOption,
      ],
      args: { name: "dyno", isOptional: true },
    },
    {
      name: ["ps:scale", "scale"],
      description:
        "Scale dyno quantity up or down\nAppending a size (eg. web=2:Standard-2X) allows simultaneous scaling and resizing.\n\nOmitting any arguments will display the app's current dyno formation, in a\nformat suitable for passing back into ps:scale",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
    },
    {
      name: ["ps:stop", "stop", "kill"],
      description: "Stop an app dyno or process type",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        {
          name: ["-d", "--dyno-name"],
          description: "Name of the dyno to stop",
          args: {},
        },
        {
          name: ["-p", "--process-type"],
          description: "Name of the process type to stop",
          args: {},
          exclusiveOn: ["--dyno-name"],
        },
        promptOption,
      ],
      args: { name: "dyno", isOptional: true },
    },
    {
      name: ["ps:type", "resize", "dyno:type"],
      description:
        "Manage dyno sizes\n\nCalled with no arguments shows the current dyno size.\n\nCalled with one argument sets the size.\nWhere SIZE is one of eco|basic|standard-1x|standard-2x|performance\n\nCalled with 1..n TYPE=SIZE arguments sets the quantity per type.\n",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
    },
    {
      name: "releases",
      description: "Display the releases for an app\n",
      options: [
        {
          name: ["-n", "--num"],
          description: "Number of releases to show",
          args: {},
        },
        { name: "--json", description: "Output releases in json format" },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
    },
    {
      name: "releases:info",
      description: "View detailed information for a release\n",
      options: [
        { name: "--json", description: "Output in json format" },
        { name: ["-s", "--shell"], description: "Output in shell format" },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
      args: { name: "release", isOptional: true },
    },
    {
      name: "releases:output",
      description: "View the release command output\n",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
      args: { name: "release", isOptional: true },
    },
    {
      name: ["releases:rollback", "rollback"],
      description: "Roll back to a previous release",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
      args: { name: "release", isOptional: true },
    },
    {
      name: "releases:retry",
      description: "Retry the latest release-phase command",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        promptOption,
      ],
    },
    {
      name: "ps:copy",
      description:
        "Copy a file from a dyno to the local filesystem\nExample:\n\n    $ heroku ps:copy FILENAME --app murmuring-headland-14719",
      options: [
        {
          name: ["-d", "--dyno"],
          description: "Specify the dyno to connect to",
          args: {},
        },
        {
          name: ["-o", "--output"],
          description: "The name of the output file",
          args: {},
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
      args: { name: "file" },
    },
    {
      name: "ps:exec",
      description:
        "Create an SSH session to a dyno\nExample:\n\n    $ heroku ps:exec 'node -i' --app murmuring-headland-14719",
      options: [
        {
          name: ["-d", "--dyno"],
          description: "Specify the dyno to connect to",
          args: {},
        },
        { name: "--ssh", description: "Use native ssh" },
        {
          name: "--status",
          description: "Lists the status of the SSH server in the dyno",
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
    },
    {
      name: "ps:forward",
      description:
        'Forward traffic on a local port to a dyno\nProvide a port or comma-separated list of ports to forward.\n\n    For example, "4000,9000:9001" will forward port 4000 to port 4000 and\n    port 9000 to port 9001.\n\n    Example:\n\n    $ heroku ps:forward 8080 --app murmuring-headland-14719',
      options: [
        {
          name: ["-d", "--dyno"],
          description: "Specify the dyno to connect to",
          args: {},
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
      args: { name: "port" },
    },
    {
      name: "ps:socks",
      description:
        "Launch a SOCKS proxy into a dyno\nExample:\n\n    $ heroku ps:socks --app murmuring-headland-14719\n    Establishing credentials... done\n    SOCKSv5 proxy server started on port 1080\n    Use CTRL+C to stop the proxy",
      options: [
        {
          name: ["-d", "--dyno"],
          description: "Specify the dyno to connect to",
          args: {},
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
    },
    {
      name: "repl",
      description:
        "Enter an interactive REPL session to run Heroku CLI commands",
    },
    {
      name: "accounts:add",
      description: "Add the current Heroku account to your accounts cache",
      options: [promptOption],
      args: { name: "name", description: "Alias for Heroku account to add" },
    },
    {
      name: "accounts:current",
      description: "Display the current Heroku account",
    },
    { name: "accounts", description: "List the Heroku accounts in your cache" },
    {
      name: "accounts:remove",
      description: "Remove a Heroku account from your cache",
      options: [promptOption],
      args: { name: "name", description: "Name of Heroku account to remove" },
    },
    {
      name: "accounts:set",
      description: "Set the current Heroku account from your accounts cache",
      options: [promptOption],
      args: { name: "name", description: "Name or username of account to set" },
    },
    {
      name: "mcp:start",
      description: "Starts the Heroku platform MCP server in stdio mode",
    },
    {
      name: "telemetry:add",
      description:
        "Add and configure a new telemetry drain. Defaults to collecting all telemetry unless otherwise specified",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to add a drain to",
          args: { name: "app", generators: getAppGenerator },
        },
        {
          name: "--headers",
          description: "Custom headers to configure the drain in json format",
          args: {},
        },
        {
          name: "--signals",
          description:
            'Comma-delimited list of signals to collect (traces, metrics, logs). Use "all" to collect all signals',
          args: {},
        },
        {
          name: ["-s", "--space"],
          description: "Space to add a drain to",
          args: {},
        },
        {
          name: "--transport",
          description: "Transport protocol for the drain",
          args: {},
        },
        promptOption,
      ],
      args: { name: "endpoint", description: "Drain url" },
    },
    {
      name: "telemetry",
      description: "List telemetry drains",
      options: [
        {
          name: ["-a", "--app"],
          description: "Filter by app name",
          args: { name: "app", generators: getAppGenerator },
        },
        {
          name: ["-s", "--space"],
          description: "Filter by space name",
          args: {},
        },
        promptOption,
      ],
    },
    {
      name: "telemetry:info",
      description: "Show a telemetry drain's info",
      options: [promptOption],
      args: {
        name: "telemetry_drain_id",
        description: "ID of the drain to show info for",
      },
    },
    {
      name: "telemetry:remove",
      description: "Remove a telemetry drain",
      options: [
        {
          name: ["-a", "--app"],
          description: "Name of the app to remove all drains from",
          args: { name: "app", generators: getAppGenerator },
        },
        {
          name: ["-s", "--space"],
          description: "Name of the space to remove all drains from",
          args: {},
        },
        promptOption,
      ],
      args: {
        name: "telemetry_drain_id",
        description: "ID of the drain to remove",
        isOptional: true,
      },
    },
    {
      name: "telemetry:update",
      description:
        "Updates a telemetry drain with provided attributes (attributes not provided remain unchanged)",
      options: [
        { name: "--endpoint", description: "Drain url", args: {} },
        {
          name: "--headers",
          description: "Custom headers to configure the drain in json format",
          args: {},
        },
        {
          name: "--signals",
          description:
            'Comma-delimited list of signals to collect (traces, metrics, logs). Use "all" to collect all signals',
          args: {},
        },
        {
          name: "--transport",
          description: "Transport protocol for the drain",
          args: { suggestions: ["http", "grpc"] },
        },
        promptOption,
      ],
      args: {
        name: "telemetry_drain_id",
        description: "ID of the drain to update",
      },
    },
    {
      name: "usage:addons",
      description:
        "List usage for metered add-ons attached to an app or apps within a team",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to list metered add-ons usage for",
          args: { name: "app", generators: getAppGenerator },
        },
        {
          name: ["-t", "--team"],
          description: "Team to list metered add-ons usage for",
          args: {},
        },
        promptOption,
      ],
    },
    {
      name: "data:maintenances:history",
      description: "Show details of the most recent maintenances for an addon",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
        },
        {
          name: "--columns",
          description: "Only show provided columns (comma-separated)",
          args: {},
        },
        { name: ["-c", "--csv"], description: "Output in csv format" },
        {
          name: "--filter",
          description:
            "Filter property by partial string matching, ex: name=foo",
          args: {},
        },
        {
          name: ["-j", "--json"],
          description: "Show result formatted in json",
        },
        {
          name: ["-n", "--num"],
          description: "Number of maintenances to show (maximum is 20)",
          args: {},
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        { name: "--sort", description: "Sort by property", args: {} },
        promptOption,
      ],
      args: { name: "addon", description: "Data addon" },
    },
    {
      name: "data:maintenances",
      description: "List maintenances for an app's data addons",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to list addon maintenances for",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: "--columns",
          description: "Only show provided columns (comma-separated)",
          args: {},
        },
        { name: ["-c", "--csv"], description: "Output in csv format" },
        { name: ["-x", "--extended"], description: "Show extra columns" },
        {
          name: "--filter",
          description:
            "Filter property by partial string matching, ex: name=foo",
          args: {},
        },
        { name: ["-j", "--json"], description: "Output result in json" },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        { name: "--sort", description: "Sort by property", args: {} },
        promptOption,
      ],
    },
    {
      name: "data:maintenances:info",
      description:
        "Display details of the most recent maintenance for an addon",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to list addon maintenances for",
          args: { name: "app", generators: getAppGenerator },
        },
        { name: ["-j", "--json"], description: "Output result in json" },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
      args: {
        name: "addon",
        description: "Data addon to show maintenance for",
      },
    },
    {
      name: "data:maintenances:run",
      description: "Triggers a scheduled maintenance for a data add-on",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run addon maintenance for",
          args: { name: "app", generators: getAppGenerator },
        },
        {
          name: ["-c", "--confirm"],
          description:
            "Confirms running maintenance without entering application maintenance mode if the app name matches",
          args: {},
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        {
          name: ["-w", "--wait"],
          description: "Wait for maintenance to complete before exiting",
        },
        promptOption,
      ],
      args: { name: "addon", description: "Data addon to run maintenance on" },
    },
    {
      name: "data:maintenances:schedule",
      description: "Schedule or re-schedule maintenance for an add-on",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        {
          name: "--week",
          description: "Desired week to run maintenance in",
          args: {},
          exclusiveOn: ["--weeks"],
        },
        {
          name: "--weeks",
          description: "The number of weeks to delay maintenance for",
          args: {},
          exclusiveOn: ["--week"],
        },
        promptOption,
      ],
      args: {
        name: "addon",
        description: "Addon to schedule or re-schedule maintenance for",
      },
    },
    {
      name: "data:maintenances:wait",
      description: "Blocks until the maintenance process has completed",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
      args: { name: "addon", description: "Data addon" },
    },
    {
      name: "data:maintenances:window",
      description: "Describe the maintenance window on an add-on",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to show addon maintenance window for",
          args: { name: "app", generators: getAppGenerator },
        },
        { name: ["-j", "--json"], description: "Output result in json" },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
      args: { name: "addon", description: "Addon to show window for" },
    },
    {
      name: "data:maintenances:window:update",
      description: "Update maintenance window on an add-on",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to update addon maintenance window for",
          args: { name: "app", generators: getAppGenerator },
        },
        { name: ["-j", "--json"], description: "Output result in json" },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
      args: [
        { name: "addon", description: "Addon to change window for" },
        {
          name: "day_of_week",
          description: "UTC maintenance window day of the week",
        },
        {
          name: "time_of_day",
          description: "UTC maintenance window time of day",
        },
      ],
    },
    {
      name: "data:pg:create",
      description: "Create a Postgres Advanced database",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: "--as",
          description: "Name for the initial database attachment",
          args: {},
        },
        {
          name: ["-c", "--confirm"],
          description: "Pass in the app name to skip confirmation prompts",
          args: {},
        },
        {
          name: "--followers",
          description:
            "Provision a follower instance pool with the specified number of instances",
          args: {},
          dependsOn: ["--level"],
        },
        {
          name: ["--high-availability", "--no-high-availability"],
          description:
            "Enable or disable high availability on the leader pool by provisioning a warm standby instance",
          dependsOn: ["--level"],
        },
        { name: "--level", description: "Set compute scale", args: {} },
        { name: "--name", description: "Name for the database", args: {} },
        {
          name: "--network",
          description: "Set network for the database",
          args: { suggestions: ["private", "shield"] },
        },
        {
          name: "--provision-option",
          description:
            "Additional options for provisioning in KEY:VALUE or KEY format, and VALUE defaults to \"true\" (example: 'foo:bar' or 'foo')",
          args: {},
          isRepeatable: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        {
          name: "--version",
          description: "Postgres version for the database",
          args: {},
        },
        {
          name: "--wait",
          description: "Watch database creation status and exit when complete",
          dependsOn: ["--level"],
        },
      ],
    },
    {
      name: "data:pg:destroy",
      description: "Destroy a Postgres Advanced database",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
        },
        {
          name: ["-c", "--confirm"],
          description: "Pass in the app name to skip confirmation prompts",
          args: {},
        },
        {
          name: ["-f", "--force"],
          description: "Destroy even if connected to other apps",
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
      args: {
        name: "database",
        description:
          "Database name, attachment name, or related config var on an app",
      },
    },
    {
      name: "data:pg:docs",
      description: "Open documentation for Heroku Postgres in your web browser",
      options: [
        {
          name: "--browser",
          description:
            'Browser to open docs with (example: "firefox", "safari")',
          args: {},
        },
        promptOption,
      ],
    },
    {
      name: "data:pg:fork",
      description: "Fork or rollback a Postgres Advanced database",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: "--as",
          description: "Name for the initial database attachment",
          args: {},
        },
        {
          name: ["-c", "--confirm"],
          description: "Pass in the app name to skip confirmation prompts",
          args: {},
        },
        { name: "--level", description: "Set compute scale", args: {} },
        {
          name: ["-n", "--name"],
          description: "Name for the database",
          args: {},
        },
        {
          name: "--provision-option",
          description:
            "Additional options for provisioning in KEY:VALUE or KEY format, and VALUE defaults to \"true\" (example: 'foo:bar' or 'foo')",
          args: {},
          isRepeatable: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        {
          name: "--rollback-by",
          description:
            "Time interval to rollback (example: '3 days', '2 hours', '3 days 7 hours 22 minutes')",
          args: {},
        },
        {
          name: "--rollback-to",
          description:
            "Explicit timestamp for rollback database with the format '2025-11-17T15:20:00'",
          args: {},
          exclusiveOn: ["--rollback-by"],
        },
        {
          name: "--wait",
          description:
            "Watch database fork creation status and exit when complete",
        },
        promptOption,
      ],
      args: {
        name: "database",
        description:
          "Database name, database attachment name, or related config var on an app",
      },
    },
    {
      name: "data:pg:get-ca",
      description: "Download the RDS CA bundle for a Heroku region",
      options: [
        {
          name: "--region",
          description: "Heroku region or global for the AWS global CA bundle",
          args: {},
          isRequired: true,
        },
        promptOption,
      ],
    },
    {
      name: "data:pg:info",
      description: "Get details on a Postgres Advanced database",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
      args: {
        name: "database",
        description:
          "Database name, database attachment name, or related config var on an app",
      },
    },
    {
      name: "data:pg:levels",
      description:
        "Show available levels for Heroku Postgres Advanced databases",
    },
    {
      name: "data:pg:migrate",
      description:
        "Migrate an existing classic Postgres database to an Advanced database",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: "--no-wrap",
          description: "Disable wrapped table cells for easier copy/paste",
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
    },
    {
      name: "data:pg:psql",
      description: "Open a psql shell to the database",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-c", "--command"],
          description: "SQL command to run",
          args: {},
        },
        { name: ["-f", "--file"], description: "SQL file to run", args: {} },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
      args: {
        name: "database",
        description:
          "Database name, database attachment name, or related config var on an app",
      },
    },
    {
      name: "data:pg:settings",
      description: "Get or update the settings of a Postgres Advanced database",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        {
          name: "--set",
          description:
            "Postgres setting to change in SETTING_NAME:VALUE format (example: 'track_functions:pl' or 'log_lock_waits:1')",
          args: {},
          isRepeatable: true,
        },
        promptOption,
      ],
      args: {
        name: "database",
        description:
          "Database name, database attachment name, or related config var on an app",
      },
    },
    {
      name: "data:pg:update",
      description:
        "Update a Postgres Advanced database through interactive prompts",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
      ],
      args: {
        name: "database",
        description:
          "Database name, database attachment name, or related config var on an app",
        isOptional: true,
      },
    },
    {
      name: "data:pg:wait",
      description: "Show status of an operation until it's complete",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        { name: "--no-notify", description: "Do not show OS notification" },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        {
          name: "--wait-interval",
          description:
            "How frequently to poll in seconds (to avoid rate limiting)",
          args: {},
        },
        promptOption,
      ],
      args: {
        name: "database",
        description:
          "Database name, database attachment name, or related config var on an app",
      },
    },
    {
      name: "data:pg:attachments:create",
      description: "Attach an existing Postgres Advanced database to an app",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: "--as",
          description: "Name for Postgres database attachment",
          args: {},
        },
        {
          name: ["-c", "--confirm"],
          description: "Pass in the app name to skip confirmation prompts",
          args: {},
        },
        {
          name: "--credential",
          description: "Credential to use for database",
          args: {},
        },
        { name: "--pool", description: "Instance pool to attach", args: {} },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
      ],
      args: {
        name: "database",
        description:
          "Database name, database attachment name, or related config var on an app",
      },
    },
    {
      name: "data:pg:attachments:destroy",
      description: "Detach an existing database attachment from an app",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-c", "--confirm"],
          description: "Pass in the app name to skip confirmation prompts",
          args: {},
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
      args: {
        name: "attachment_name",
        description: "Unique identifier of the database attachment",
      },
    },
    {
      name: "data:pg:attachments",
      description: "List attachments on a Postgres Advanced database",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
      args: {
        name: "database",
        description:
          "Database name, database attachment name, or related config var on an app",
      },
    },
    {
      name: "data:pg:credentials:create",
      description: "Create credentials for a Postgres database",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-n", "--name"],
          description: "Name for the credential",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
      args: {
        name: "database",
        description:
          "Database name, database attachment name, or related config var on an app",
      },
    },
    {
      name: "data:pg:credentials:destroy",
      description: "Destroy credentials on a Postgres database",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-c", "--confirm"],
          description: "Pass in the app name to skip confirmation prompts",
          args: {},
        },
        {
          name: ["-n", "--name"],
          description: "Name of credential",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
      args: {
        name: "database",
        description:
          "Database name, database attachment name, or related config var on an app",
      },
    },
    {
      name: "data:pg:credentials",
      description: "List credentials on a Postgres Advanced database",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: "--no-wrap",
          description: "Disable wrapped table cells for easier copy/paste",
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
      args: {
        name: "database",
        description:
          "Database name, database attachment name, or related config var on an app",
      },
    },
    {
      name: "data:pg:credentials:rotate",
      description: "Rotate credentials on a Postgres database",
      options: [
        {
          name: "--all",
          description: "Rotate all credentials",
          exclusiveOn: ["--name"],
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-c", "--confirm"],
          description: "Pass in the app name to skip confirmation prompts",
          args: {},
        },
        {
          name: "--force",
          description: "Force rotate the targeted credentials",
        },
        {
          name: ["-n", "--name"],
          description:
            "[default: owner or default credential, if not specified and --all isn't used] credential to rotate",
          args: {},
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
      args: {
        name: "database",
        description:
          "Database name, database attachment name, or related config var on an app",
      },
    },
    {
      name: "data:pg:credentials:url",
      description: "Show information on a Postgres database credential",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-n", "--name"],
          description:
            "[default: owner or default credential, if not specified] credential to show",
          args: {},
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
      args: {
        name: "database",
        description:
          "Database name, database attachment name, or related config var on an app",
      },
    },
    {
      name: "data:pg:quotas",
      description: "Display quotas set on a Postgres Advanced database",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        {
          name: "--type",
          description: "Type of quota",
          args: { suggestions: ["storage"] },
        },
        promptOption,
      ],
      args: {
        name: "database",
        description:
          "Database name, database attachment name, or related config var on an app",
      },
    },
    {
      name: "data:pg:quotas:update",
      description: "Update quota settings on a Postgres Advanced database",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: "--critical",
          description:
            'Set critical threshold in GB, set to "none" to remove threshold',
          args: {},
        },
        {
          name: "--enforcement-action",
          description:
            "Set enforcement action for when database surpasses the critical threshold",
          args: { suggestions: ["notify", "restrict", "none"] },
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        {
          name: "--type",
          description: "Type of quota to update",
          args: { suggestions: ["storage"] },
          isRequired: true,
        },
        {
          name: "--warning",
          description:
            'Set warning threshold in GB, set to "none" to remove threshold',
          args: {},
        },
        promptOption,
      ],
      args: {
        name: "database",
        description:
          "Database name, database attachment name, or related config var on an app",
      },
    },
    {
      name: "data:pg:upgrade:run",
      description:
        "Upgrade the Postgres version on a Postgres Advanced database",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-c", "--confirm"],
          description: "Pass in the app name to skip confirmation prompts",
          args: {},
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        {
          name: ["-v", "--version"],
          description: "Postgres version to upgrade to",
          args: {},
        },
        promptOption,
      ],
      args: {
        name: "database",
        description:
          "Database name, database attachment name, or related config var on an app",
      },
    },
    {
      name: "data:pg:upgrade:wait",
      description: "Shows status of an upgrade until it's complete",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        { name: "--no-notify", description: "Do not show OS notification" },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        {
          name: "--wait-interval",
          description:
            "How frequently to poll in seconds (to avoid rate limiting)",
          args: {},
        },
      ],
      args: {
        name: "database",
        description:
          "Database name, database attachment name, or related config var on an app",
      },
    },
    {
      name: [
        "data:pg:logical-replication:publications:create",
        "data:pg:lr:publications:create",
      ],
      description:
        "Create a logical replication publication on a Postgres Advanced database",
      options: [
        {
          name: "--all-schemas",
          description: "Include all current customer schemas",
          exclusiveOn: ["--schema", "--table"],
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: "--name",
          description: "Name for publication",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        {
          name: "--schema",
          description:
            "Schema to include, including new tables created in the schema",
          args: {},
          isRepeatable: true,
        },
        {
          name: "--table",
          description: "Fully qualified table to include",
          args: {},
          isRepeatable: true,
        },
        promptOption,
      ],
      args: {
        name: "database",
        description:
          "Database name, database attachment name, or related config var on an app",
      },
    },
    {
      name: [
        "data:pg:logical-replication:publications:destroy",
        "data:pg:lr:publications:destroy",
      ],
      description:
        "Destroy a logical replication publication on a Postgres Advanced database",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-c", "--confirm"],
          description: "Pass in the app name to skip confirmation prompts",
          args: {},
        },
        {
          name: "--name",
          description: "Name of publication",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
      args: {
        name: "database",
        description:
          "Database name, database attachment name, or related config var on an app",
      },
    },
    {
      name: [
        "data:pg:logical-replication:publications",
        "data:pg:lr:publications",
      ],
      description:
        "List logical replication publications on a Postgres Advanced database",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: "--no-wrap",
          description: "Disable wrapped table cells for easier copy/paste",
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
      args: {
        name: "database",
        description:
          "Database name, database attachment name, or related config var on an app",
      },
    },
    {
      name: [
        "data:pg:logical-replication:publications:info",
        "data:pg:lr:publications:info",
      ],
      description:
        "Show details of a logical replication publication on a Postgres Advanced database",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: "--name",
          description: "Name of publication",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
      args: {
        name: "database",
        description:
          "Database name, database attachment name, or related config var on an app",
      },
    },
    {
      name: [
        "data:pg:logical-replication:publications:update",
        "data:pg:lr:publications:update",
      ],
      description:
        "Replace the target of a logical replication publication on a Postgres Advanced database",
      options: [
        {
          name: "--all-schemas",
          description: "Include all current customer schemas",
          exclusiveOn: ["--schema", "--table"],
        },
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: "--name",
          description: "Name of publication",
          args: {},
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        {
          name: "--schema",
          description:
            "Schema to include, including new tables created in the schema",
          args: {},
          isRepeatable: true,
        },
        {
          name: "--table",
          description: "Fully qualified table to include",
          args: {},
          isRepeatable: true,
        },
        promptOption,
      ],
      args: {
        name: "database",
        description:
          "Database name, database attachment name, or related config var on an app",
      },
    },
    {
      name: [
        "data:pg:logical-replication:publishing:enable",
        "data:pg:lr:publishing:enable",
      ],
      description:
        "Enable logical replication publishing for a Postgres Advanced database",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
      args: {
        name: "database",
        description:
          "Database name, database attachment name, or related config var on an app",
      },
    },
    {
      name: [
        "data:pg:logical-replication:subscribing:enable",
        "data:pg:lr:subscribing:enable",
      ],
      description:
        "Enable logical replication subscribing for a Postgres Advanced database",
      options: [
        {
          name: ["-a", "--app"],
          description: "App to run command against",
          args: { name: "app", generators: getAppGenerator },
          isRequired: true,
        },
        {
          name: ["-r", "--remote"],
          description: "Git remote of app to use",
          args: {},
        },
        promptOption,
      ],
      args: {
        name: "database",
        description:
          "Database name, database attachment name, or related config var on an app",
      },
    },
    {
      name: "commands",
      description: "List all heroku commands",
      options: [
        { name: "--json", description: "Format output as json" },
        { name: ["-h", "--help"], description: "Show CLI help" },
        { name: "--hidden", description: "Show hidden commands" },
        { name: "--tree", description: "Show tree of commands" },
        {
          name: ["-c", "--columns"],
          description: "Only show provided columns (comma-separated)",
          args: { suggestions: ["id", "plugin", "summary", "type"] },
        },
        {
          name: "--sort",
          description: "Property to sort by",
          args: { suggestions: ["id", "plugin", "summary", "type"] },
        },
        { name: ["-x", "--extended"], description: "Show extra columns" },
        { name: "--no-truncate", description: "Do not truncate output" },
        { name: "--deprecated", description: "Show deprecated commands" },
      ],
    },
    {
      name: "update",
      description: "Update the heroku CLI",
      options: [
        { name: ["-a", "--available"], description: "See available versions" },
        {
          name: ["-v", "--version"],
          description: "Install a specific version",
          args: {},
        },
        {
          name: ["-i", "--interactive"],
          description:
            "Interactively select version to install. This is ignored if a channel is provided",
        },
        {
          name: "--force",
          description: "Force a re-download of the requested version",
        },
        {
          name: ["-b", "--verbose"],
          description: "Show more details about the available versions",
          dependsOn: ["--available"],
        },
      ],
      args: { name: "channel", isOptional: true },
    },
    {
      name: "plugins",
      description: "List installed plugins",
      options: [
        { name: "--core", description: "Show core plugins" },
        { name: "--json", description: "Format output as json" },
      ],
    },
    {
      name: "plugins:inspect",
      description: "Displays installation properties of a plugin",
      options: [
        { name: "--json", description: "Format output as json" },
        { name: ["-h", "--help"], description: "Show CLI help" },
        { name: ["-v", "--verbose"] },
      ],
      args: {
        name: "plugin",
        description: "Plugin to inspect",
        default: ".",
        isVariadic: true,
      },
    },
    {
      name: ["plugins:install", "plugins:add"],
      description: "Installs a plugin into heroku",
      options: [
        { name: ["-h", "--help"], description: "Show CLI help" },
        { name: ["-v", "--verbose"], description: "Show verbose npm output" },
        {
          name: ["-f", "--force"],
          description:
            "Force npm to fetch remote resources even if a local copy exists on disk",
        },
        { name: "--json", description: "Format output as json" },
        {
          name: ["-s", "--silent"],
          description: "Silences npm output",
          exclusiveOn: ["--verbose"],
        },
      ],
      args: {
        name: "plugin",
        description: "Plugin to install",
        isVariadic: true,
      },
    },
    {
      name: "plugins:link",
      description:
        "Links a plugin into the CLI for development.\nInstallation of a linked plugin will override a user-installed or core plugin.\n\ne.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello' command will override the user-installed or core plugin implementation. This is useful for development work.\n",
      options: [
        { name: ["-h", "--help"], description: "Show CLI help" },
        { name: ["-v", "--verbose"] },
        {
          name: ["--install", "--no-install"],
          description: "Install dependencies after linking the plugin",
        },
      ],
      args: { name: "path", description: "Path to plugin", default: "." },
    },
    {
      name: ["plugins:uninstall", "plugins:unlink", "plugins:remove"],
      description: "Removes a plugin from the CLI",
      options: [
        { name: ["-h", "--help"], description: "Show CLI help" },
        { name: ["-v", "--verbose"] },
      ],
      args: {
        name: "plugin",
        description: "Plugin to uninstall",
        isOptional: true,
        isVariadic: true,
      },
    },
    {
      name: "plugins:update",
      description: "Update installed plugins",
      options: [
        { name: ["-h", "--help"], description: "Show CLI help" },
        { name: ["-v", "--verbose"] },
      ],
    },
    {
      name: "plugins:reset",
      description: "Remove all user-installed and linked plugins",
      options: [
        {
          name: "--hard",
          description:
            "Delete node_modules and package manager related files in addition to uninstalling plugins",
        },
        {
          name: "--reinstall",
          description: "Reinstall all plugins after uninstalling",
        },
      ],
    },
    {
      name: "version",
      options: [
        { name: "--json", description: "Format output as json" },
        {
          name: "--verbose",
          description: "Show additional information about the CLI",
        },
      ],
    },
    {
      name: "version:info",
      description: "Display changelog information for a specific CLI version",
      args: {
        name: "version",
        description: "Version number to look up (e.g., 11.0.0, 10.17.0)",
        isOptional: true,
      },
    },
    {
      name: "which",
      description: "Show which plugin a command is in",
      options: [{ name: "--json", description: "Format output as json" }],
    },
    {
      name: "help",
      description: "Display help for heroku",
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
        isVariadic: true,
      },
    },
    { name: "search", description: "Search for a command" },
  ],
};

const versions: Fig.VersionDiffMap = {};

export { versions };
export default completionSpec;
