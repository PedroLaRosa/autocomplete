// Visual Studio Code v1.147.0 (microsoft/vscode tag 1.147.0 = current stable, cross-checked with the Homebrew cask, 2026-11-20).
// Source: read statically (nothing executed): src/vs/platform/environment/node/argv.ts (editor options and `chat`),
// cli/src/commands/args.rs (Rust CLI: tunnel, serve-web, agent, and standalone-CLI ext/status/version/update),
// src/vs/code/node/cli.ts (subcommand dispatch) and resources/completions/{bash,zsh}/_code (--folder-uri only).
// Not verified against a live binary. --locale suggestions and --category values are kept from the VS Code docs, not re-checked.
// Hidden internal/Chromium flags are omitted. `ext`, `status`, `version` and `update` exist only in the standalone CLI.

const logLevels = [
  "critical",
  "error",
  "warn",
  "info",
  "debug",
  "trace",
  "off",
];

const profileOption: Fig.Option = {
  name: "--profile",
  description:
    "Opens the provided folder or workspace with the given profile and associates the profile with the workspace. If the profile does not exist, a new empty one is created",
  args: {
    name: "profileName",
  },
};

const commonOptions: Fig.Option[] = [
  {
    name: "-",
    description: "Read from stdin (e.g. 'ps aux | grep code | code -')",
  },
  {
    name: ["-d", "--diff"],
    description: "Compare two files with each other",
    args: [
      {
        name: "file",
        template: "filepaths",
      },
      {
        name: "file",
        template: "filepaths",
      },
    ],
  },
  {
    name: ["-m", "--merge"],
    description:
      "Perform a three-way merge by providing paths for two modified versions of a file, the common origin of both modified versions and the output file to save merge results",
    args: [
      {
        name: "path1",
        template: "filepaths",
      },
      {
        name: "path2",
        template: "filepaths",
      },
      {
        name: "base",
        template: "filepaths",
      },
      {
        name: "result",
        template: "filepaths",
      },
    ],
  },
  {
    name: ["-a", "--add"],
    description: "Add folder(s) to the last active window",
    args: {
      name: "folder",
      template: "folders",
      isVariadic: true,
    },
  },
  {
    name: "--remove",
    description: "Remove folder(s) from the last active window",
    args: {
      name: "folder",
      template: "folders",
      isVariadic: true,
    },
  },
  {
    name: ["-g", "--goto"],
    description:
      "Open a file at the path on the specified line and character position",
    args: {
      name: "file:line[:character]",
      // TODO: Support :line[:character] completion?
      template: "filepaths",
    },
  },
  {
    name: "--folder-uri",
    description: "Open a window with given folder URI(s)",
    isRepeatable: true,
    args: {
      name: "uri",
    },
  },
  {
    name: ["-n", "--new-window"],
    description: "Force to open a new window",
  },
  {
    name: ["-r", "--reuse-window"],
    description: "Force to open a file or folder in an already opened window",
  },
  {
    name: "--agents",
    description:
      "Opens the agents window. If a folder is provided, opens a new session with that folder selected",
  },
  {
    name: ["-w", "--wait"],
    description: "Wait for the files to be closed before returning",
  },
  {
    name: "--locale",
    description: "The locale to use (e.g. en-US or zh-TW)",
    args: {
      name: "locale",
      suggestions: [
        // Supported locales: https://code.visualstudio.com/docs/getstarted/locales#_available-locales
        { name: "en", icon: "🇺🇸", description: "English (US)" },
        { name: "zh-CN", icon: "🇨🇳", description: "Simplified Chinese" },
        { name: "zh-TW", icon: "🇹🇼", description: "Traditional Chinese" },
        { name: "fr", icon: "🇫🇷", description: "French" },
        { name: "de", icon: "🇩🇪", description: "German" },
        { name: "it", icon: "🇮🇹", description: "Italian" },
        { name: "es", icon: "🇪🇸", description: "Spanish" },
        { name: "ja", icon: "🇯🇵", description: "Japanese" },
        { name: "ko", icon: "🇰🇷", description: "Korean" },
        { name: "ru", icon: "🇷🇺", description: "Russian" },
        { name: "bg", icon: "🇧🇬", description: "Bulgarian" },
        { name: "hu", icon: "🇭🇺", description: "Hungarian" },
        { name: "pt-br", icon: "🇧🇷", description: "Portuguese (Brazil)" },
        { name: "tr", icon: "🇹🇷", description: "Turkish" },
      ],
    },
  },
  {
    name: "--user-data-dir",
    description:
      "Specifies the directory that user data is kept in. Can be used to open multiple distinct instances of Code",
    args: {
      name: "dir",
      template: "folders",
    },
  },
  profileOption,
  {
    name: "--use-version",
    description:
      "Sets the editor version to use for this command (standalone CLI). Can be 'stable', 'insiders', a version number, or an absolute path to an existing install",
    args: {
      name: "stable | insiders | x.y.z | path",
    },
  },
  {
    name: ["-h", "--help"],
    description: "Print usage",
  },
];

const extensionManagementOptions: Fig.Option[] = [
  {
    name: "--extensions-dir",
    description: "Set the root path for extensions",
    args: {
      name: "dir",
      template: "folders",
    },
  },
  {
    name: "--list-extensions",
    description: "List the installed extensions",
  },
  {
    name: "--show-versions",
    description:
      "Show versions of installed extensions, when using --list-extensions",
  },
  {
    name: "--category",
    description:
      "Filters installed extensions by provided category, when using --list-extensions",
    args: {
      name: "category",
      suggestions: [
        "azure",
        "data science",
        "debuggers",
        "extension packs",
        "education",
        "formatters",
        "keymaps",
        "language packs",
        "linters",
        "machine learning",
        "notebooks",
        "programming languages",
        "scm providers",
        "snippets",
        "testing",
        "themes",
        "visualization",
        "other",
      ],
    },
  },
  {
    name: "--install-extension",
    description:
      "Installs or updates an extension. The argument is either an extension id or a path to a VSIX. The identifier of an extension is '${publisher}.${name}'. Use '--force' argument to update to latest version. To install a specific version provide '@${version}'. For example: 'vscode.csharp@1.2.3'",
    isRepeatable: true,
    args: {
      // TODO: Create extension ID generator
      name: "ext-id | path",
      template: "filepaths",
    },
  },
  {
    name: "--pre-release",
    description:
      "Installs the pre-release version of the extension, when using --install-extension",
  },
  {
    name: "--force",
    description:
      "Update to the latest version of the extension if it's already installed, when using --install-extension",
  },
  {
    name: "--uninstall-extension",
    description: "Uninstalls an extension",
    isRepeatable: true,
    args: {
      // TODO: Create extension ID generator
      name: "ext-id",
    },
  },
  {
    name: "--update-extensions",
    description: "Update the installed extensions",
  },
  {
    name: "--enable-proposed-api",
    description:
      "Enables proposed API features for extensions. Can receive one or more extension IDs to enable individually",
    isRepeatable: true,
    args: {
      name: "ext-id",
      isOptional: true,
    },
  },
  {
    name: "--add-mcp",
    description:
      'Adds a Model Context Protocol server definition to the user profile. Accepts JSON input in the form \'{"name":"server-name","command":...}\'',
    isRepeatable: true,
    args: {
      name: "json",
    },
  },
];

const troubleshootingOptions: Fig.Option[] = [
  {
    name: ["-v", "--version"],
    description: "Print version",
  },
  {
    name: "--verbose",
    description: "Print verbose output (implies --wait)",
    isPersistent: true,
  },
  {
    name: "--log",
    description:
      "Log level to use. Default is 'info'. Allowed values are 'critical', 'error', 'warn', 'info', 'debug', 'trace', 'off'. You can also configure the log level of an extension by passing extension id and log level in the following format: '${publisher}.${name}:${logLevel}'. For example: 'vscode.csharp:trace'. Can receive one or more such entries",
    isPersistent: true,
    isRepeatable: true,
    args: {
      name: "level",
      default: "info",
      suggestions: logLevels,
    },
  },
  {
    name: ["-s", "--status"],
    description: "Print process usage and diagnostics information",
  },
  {
    name: "--prof-startup",
    description: "Run CPU profiler during startup",
  },
  {
    name: "--disable-extensions",
    description:
      "Disable all installed extensions. This option is not persisted and is effective only when the command opens a new window",
  },
  {
    name: "--disable-extension",
    description:
      "Disable the provided extension. This option is not persisted and is effective only when the command opens a new window",
    isRepeatable: true,
    args: {
      // TODO: Create extension ID generator
      name: "ext-id",
    },
  },
  {
    name: "--sync",
    description: "Turn sync on or off",
    args: {
      name: "sync",
      description: "Whether to enable sync",
      suggestions: ["on", "off"],
    },
  },
  {
    name: "--inspect-extensions",
    description:
      "Allow debugging and profiling of extensions. Check the developer tools for the connection URI",
    args: {
      name: "port",
    },
  },
  {
    name: "--inspect-brk-extensions",
    description:
      "Allow debugging and profiling of extensions with the extension host being paused after start. Check the developer tools for the connection URI",
    args: {
      name: "port",
    },
  },
  {
    name: "--disable-lcd-text",
    description: "Disable LCD font rendering",
  },
  {
    name: "--disable-gpu",
    description: "Disable GPU hardware acceleration",
  },
  {
    name: "--disable-chromium-sandbox",
    description:
      "Use this option only when there is requirement to launch the application as sudo user on Linux or when running as an elevated user in an applocker environment on Windows",
  },
  {
    name: "--locate-shell-integration-path",
    description: "Print the path to a terminal shell integration script",
    args: {
      name: "shell",
      suggestions: ["bash", "pwsh", "zsh", "fish"],
    },
  },
  {
    name: "--telemetry",
    description: "Shows all telemetry events which VS code collects",
  },
  {
    name: "--transient",
    description:
      "Run with temporary data and extension directories, as if launched for the first time",
  },
];

// Old option ids that the parser still accepts and maps to the current ones
const deprecatedOptions: Fig.Option[] = [
  {
    name: "--sessions",
    description: "Use --agents instead",
    deprecated: true,
  },
  {
    name: "--extensionHomePath",
    description: "Use --extensions-dir instead",
    deprecated: true,
    args: {
      name: "dir",
      template: "folders",
    },
  },
  {
    name: "--disableExtensions",
    description: "Use --disable-extensions instead",
    deprecated: true,
  },
  {
    name: "--debugPluginHost",
    description: "Use --inspect-extensions instead",
    deprecated: true,
    args: {
      name: "port",
    },
  },
  {
    name: "--debugBrkPluginHost",
    description: "Use --inspect-brk-extensions instead",
    deprecated: true,
    args: {
      name: "port",
    },
  },
];

// Options of the Rust CLI (tunnel, serve-web, agent, ...) that apply to every subcommand beneath them
const cliGlobalOptions: Fig.Option[] = [
  {
    name: "--cli-data-dir",
    description: "Directory where CLI metadata should be stored",
    isPersistent: true,
    args: {
      name: "dir",
      template: "folders",
    },
  },
  {
    name: "--disable-telemetry",
    description:
      "Disable telemetry for the current command, even if it was previously accepted as part of the license prompt or specified in '--telemetry-level'",
    isPersistent: true,
    hidden: true,
  },
  {
    name: "--telemetry-level",
    description: "Sets the initial telemetry level",
    isPersistent: true,
    hidden: true,
    args: {
      name: "level",
      suggestions: ["off", "crash", "error", "all"],
    },
  },
];

const acceptLicenseOption: Fig.Option = {
  name: "--accept-server-license-terms",
  description:
    "If set, the user accepts the server license terms and the server will be started without a user prompt",
};

const connectionTokenOptions: Fig.Option[] = [
  {
    name: "--connection-token",
    description: "A secret that must be included with all requests",
    args: {
      name: "token",
    },
  },
  {
    name: "--connection-token-file",
    description:
      "A file containing a secret that must be included with all requests",
    args: {
      name: "file",
      template: "filepaths",
    },
  },
  {
    name: "--without-connection-token",
    description:
      "Run without a connection token. Only use this if the connection is secured by other means",
  },
];

const serverDataDirOption: Fig.Option = {
  name: "--server-data-dir",
  description: "Specifies the directory that server data is kept in",
  args: {
    name: "dir",
    template: "folders",
  },
};

// Pre-existing tunnel details, hidden in the upstream help
const existingTunnelOptions: Fig.Option[] = [
  {
    name: "--tunnel-name",
    description:
      "Name you'd like to assign preexisting tunnel to use to connect the tunnel. Old option, use --name instead",
    hidden: true,
    args: {
      name: "name",
    },
  },
  {
    name: "--host-token",
    description: "Token to authenticate and use preexisting tunnel",
    hidden: true,
    args: {
      name: "token",
    },
  },
  {
    name: "--tunnel-id",
    description: "ID of preexisting tunnel to use to connect the tunnel",
    hidden: true,
    args: {
      name: "id",
    },
  },
  {
    name: "--cluster",
    description: "Cluster of preexisting tunnel to use to connect the tunnel",
    hidden: true,
    args: {
      name: "cluster",
    },
  },
];

const loginOptions: Fig.Option[] = [
  {
    name: "--access-token",
    description: "An access token to store for authentication",
    args: {
      name: "token",
    },
  },
  {
    name: "--refresh-token",
    description: "A refresh token to store for authentication",
    args: {
      name: "token",
    },
  },
  {
    name: "--provider",
    description:
      "The auth provider to use. If not provided, a prompt will be shown",
    args: {
      name: "provider",
      suggestions: ["microsoft", "github"],
    },
  },
];

const tunnelSubcommands: Fig.Subcommand[] = [
  {
    name: "prune",
    description: "Delete all servers which are currently not running",
  },
  {
    name: "kill",
    description: "Stops any running tunnel on the system",
  },
  {
    name: "restart",
    description: "Restarts any running tunnel on the system",
  },
  {
    name: "status",
    description:
      "Gets whether there is a tunnel running on the current machine",
  },
  {
    name: "rename",
    description:
      "Rename the name of this machine associated with port forwarding service",
    args: {
      name: "name",
      description: "The name you'd like to rename your machine to",
    },
  },
  {
    name: "unregister",
    description:
      "Remove this machine's association with the port forwarding service",
  },
  {
    name: "user",
    description: "Manage the account used for the port forwarding service",
    subcommands: [
      {
        name: "login",
        description: "Log in to port forwarding service",
        options: loginOptions,
      },
      {
        name: "logout",
        description: "Log out of port forwarding service",
      },
      {
        name: "show",
        description:
          "Show the account that's logged into port forwarding service",
      },
    ],
  },
  {
    name: "service",
    description:
      "(Preview) Manages the tunnel when installed as a system service",
    subcommands: [
      {
        name: "install",
        description:
          "Installs or re-installs the tunnel service on the machine",
        options: [
          acceptLicenseOption,
          {
            name: "--name",
            description: "Sets the machine name for port forwarding service",
            args: {
              name: "name",
            },
          },
        ],
      },
      {
        name: "uninstall",
        description: "Uninstalls and stops the tunnel service",
      },
      {
        name: "log",
        description: "Shows logs for the running service",
      },
      {
        name: "internal-run",
        description: "Internal command for running the service",
        hidden: true,
      },
    ],
  },
  {
    name: "forward-internal",
    description: "(Preview) Forwards local port using the dev tunnel",
    hidden: true,
    args: {
      name: "ports",
      description: "One or more ports to forward",
      isVariadic: true,
    },
    options: loginOptions,
  },
];

const tunnelSubcommand: Fig.Subcommand = {
  name: "tunnel",
  description:
    "Make the current machine accessible from vscode.dev or other machines through a secure tunnel",
  subcommands: tunnelSubcommands,
  options: [
    ...cliGlobalOptions,
    {
      name: "--install-extension",
      description:
        "Requests that extensions be preloaded and installed on connecting servers",
      isRepeatable: true,
      args: {
        name: "ext-id",
      },
    },
    serverDataDirOption,
    {
      name: "--extensions-dir",
      description: "Set the root path for extensions",
      args: {
        name: "dir",
        template: "folders",
      },
    },
    {
      name: "--reconnection-grace-time",
      description:
        "Reconnection grace time in seconds. Defaults to 10800 (3 hours)",
      args: {
        name: "seconds",
      },
    },
    {
      name: "--random-name",
      description: "Randomly name machine for port forwarding service",
    },
    {
      name: "--no-sleep",
      description:
        "Prevents the machine going to sleep while this command runs",
    },
    {
      name: "--name",
      description: "Sets the machine name for port forwarding service",
      args: {
        name: "name",
      },
    },
    acceptLicenseOption,
    ...existingTunnelOptions,
  ],
};

const serveWebSubcommand: Fig.Subcommand = {
  name: "serve-web",
  description: "Run a server that displays the editor UI in browsers",
  options: [
    ...cliGlobalOptions.filter((o) => o.name !== "--disable-telemetry"),
    {
      name: "--host",
      description: "Host to listen on, defaults to 'localhost'",
      args: {
        name: "host",
      },
    },
    {
      name: "--socket-path",
      description: "The path to a socket file for the server to listen to",
      args: {
        name: "path",
        template: "filepaths",
      },
    },
    {
      name: "--port",
      description:
        "Port to listen on. If 0 is passed a random free port is picked",
      args: {
        name: "port",
        default: "8000",
      },
    },
    ...connectionTokenOptions,
    acceptLicenseOption,
    {
      name: "--server-base-path",
      description:
        "Specifies the path under which the web UI and the code server is provided",
      args: {
        name: "path",
      },
    },
    serverDataDirOption,
    {
      name: "--default-folder",
      description:
        "The workspace folder to open when no input is specified in the browser URL",
      args: {
        name: "folder",
        template: "folders",
      },
    },
    {
      name: "--default-workspace",
      description:
        "The workspace to open when no input is specified in the browser URL",
      args: {
        name: "workspace",
        template: "filepaths",
      },
    },
    {
      name: "--disable-telemetry",
      description: "Disables telemetry",
    },
    {
      name: "--commit-id",
      description: "Use a specific commit SHA for the client",
      args: {
        name: "commit",
      },
    },
  ],
};

const agentHostOptions: Fig.Option[] = [
  {
    name: "--host",
    description:
      "Host the agent host should bind on. Defaults to 'localhost'. Pass 0.0.0.0 to expose the agent host on all interfaces (paired with a connection token unless --without-connection-token is set)",
    args: {
      name: "host",
    },
  },
  {
    name: "--port",
    description:
      "Port the agent host should bind on. If 0 (the default) the OS picks a free ephemeral port",
    args: {
      name: "port",
      default: "0",
    },
  },
  ...connectionTokenOptions,
  serverDataDirOption,
  {
    name: "--user-data-dir",
    description:
      "Overrides the resolved user data directory used to home the local agent-host endpoint registry",
    args: {
      name: "dir",
      template: "folders",
    },
  },
  {
    name: "--replace",
    description:
      "Stop any agent host already running on this machine and start a fresh one",
  },
  {
    name: "--new-instance",
    description:
      "Always start a brand new standalone supervisor, even if one is already registered and would normally be reused",
  },
  {
    name: "--foreground",
    description:
      "Run a newly started agent host supervisor in the foreground instead of detaching it, keeping its logs attached to this terminal",
  },
  {
    name: "--tunnel",
    description:
      "Alias for 'code tunnel': expose remote editor and agent host access",
  },
  {
    name: "--github-environment",
    description:
      "Register this agent host as a GitHub environment. Runs in the background unless --foreground is passed",
  },
  {
    name: "--github-environment-root",
    description:
      "Restrict access to a project directory. Repeat for multiple projects. Defaults to all local filesystems",
    isRepeatable: true,
    args: {
      name: "path",
      template: "folders",
    },
  },
  {
    name: "--name",
    description: "Sets the machine name for the tunnel or GitHub environment",
    args: {
      name: "name",
    },
  },
  {
    name: "--random-name",
    description: "Randomly name the machine for the tunnel",
  },
  {
    name: "--accept-server-license-terms",
    description:
      "Accept the server license terms when starting a tunnel or GitHub environment",
  },
  {
    name: "--idle-timeout",
    description:
      "Automatically terminate this supervisor once no client has been connected for this many seconds. Unset means unlimited",
    args: {
      name: "seconds",
    },
  },
  ...existingTunnelOptions,
];

const userDataDirOption: Fig.Option = {
  name: "--user-data-dir",
  description:
    "Directory containing the shared agent host registry used for automatic discovery",
  args: {
    name: "dir",
    template: "folders",
  },
};

// Discovery/connection target shared by `code agent ps|stop|logs`
const agentDiscoveryOptions: Fig.Option[] = [
  userDataDirOption,
  {
    name: "--address",
    description:
      "WebSocket address of a running agent host (e.g. ws://127.0.0.1:1234?tkn=secret). If omitted, the CLI discovers a locally running agent host automatically",
    args: {
      name: "address",
    },
  },
  {
    name: "--tunnel",
    description: "Connect via a named dev tunnel instead of the local address",
    args: {
      name: "tunnel",
    },
  },
];

const yesOption: Fig.Option = {
  name: "--yes",
  description:
    "Confirm changing OS trust without a CLI confirmation. Does not bypass OS authorization",
};

const agentSubcommand: Fig.Subcommand = {
  name: "agent",
  description: "Start and interact with AI agent hosts",
  options: [...cliGlobalOptions, ...agentHostOptions],
  subcommands: [
    {
      name: "sandbox",
      description:
        "Manage sandbox certificate trust on this computer as the current OS user",
      subcommands: [
        {
          name: "ca",
          description:
            "Manage the credential-proxy CA in this user's COPILOT_HOME",
          options: [
            {
              name: "--accept-server-license-terms",
              description:
                "Accept the VS Code Server license terms without prompting",
              isPersistent: true,
            },
          ],
          subcommands: [
            {
              name: "create",
              description:
                "Create the CA if missing, without changing OS trust. Prints its public certificate path",
            },
            {
              name: "trust",
              description:
                "Trust this user's existing CA. OS authorization may still be required",
              options: [yesOption],
            },
            {
              name: "remove",
              description:
                "Remove OS trust for this user's CA, retaining the stored CA and private key",
              options: [
                {
                  ...yesOption,
                  description:
                    "Confirm removing OS trust without a CLI confirmation. Does not bypass OS authorization",
                },
              ],
            },
            {
              name: "status",
              description:
                "Check OS trust without changing the CA. Exit codes: 0 trusted, 3 missing, 4 unsupported, 5 rotation needed, 1 error",
            },
          ],
        },
      ],
    },
    {
      name: "host",
      description: "Start an agent host server, with optional remote access",
      options: agentHostOptions,
    },
    {
      name: "ps",
      description: "List active sessions on a running agent host",
      options: [
        ...agentDiscoveryOptions,
        {
          name: "--json",
          description:
            "Output results as JSON instead of a human-readable table",
        },
        {
          name: ["-a", "--all"],
          description: "Show all sessions, including idle and archived ones",
        },
      ],
    },
    {
      name: "stop",
      description: "Cancel the active turn of a session",
      args: {
        name: "session",
        description:
          "Session URI to cancel the active turn of (e.g. copilot:/<uuid>)",
      },
      options: agentDiscoveryOptions,
    },
    {
      name: "kill",
      description: "Forcefully kill the running agent host process tree",
      options: [
        userDataDirOption,
        {
          name: "--instance-id",
          description:
            "Instance ID of the standalone agent host to kill, as shown when multiple are running. Required to select non-interactively when more than one live standalone agent host is registered",
          args: {
            name: "id",
          },
        },
      ],
    },
    {
      name: "logs",
      description: "Stream live session events",
      args: {
        name: "session",
        description: "Session URI to stream events for (e.g. copilot:/<uuid>)",
      },
      options: agentDiscoveryOptions,
    },
    {
      name: "endpoints",
      description:
        "Print every live agent host endpoint as a single JSON document, including each endpoint's connection token",
      options: [
        {
          name: "--user-data-dir",
          description:
            "Overrides the resolved user data directory used to locate the shared agent host registry",
          args: {
            name: "dir",
            template: "folders",
          },
        },
      ],
    },
    {
      name: "relay",
      description:
        "Relay stdin/stdout to a single live agent host endpoint's raw socket/pipe or TCP connection",
      hidden: true,
      args: {
        name: "instance-id",
        description:
          "The instanceId of the live registry endpoint to relay to, as shown by 'code agent endpoints' or 'code agent ps'",
      },
      options: [
        {
          name: "--user-data-dir",
          description:
            "Overrides the resolved user data directory used to locate the shared agent host registry",
          args: {
            name: "dir",
            template: "folders",
          },
        },
      ],
    },
  ],
};

const chatSubcommand: Fig.Subcommand = {
  name: "chat",
  description:
    "Pass in a prompt to run in a chat session in the current working directory",
  args: {
    name: "prompt",
    description: "The prompt to use as chat",
    isOptional: true,
  },
  options: [
    {
      name: ["-m", "--mode"],
      description:
        "The mode to use for the chat session. Available options: 'ask', 'edit', 'agent', or the identifier of a custom mode. Defaults to 'agent'",
      args: {
        name: "mode",
        suggestions: ["ask", "edit", "agent"],
      },
    },
    {
      name: ["-a", "--add-file"],
      description: "Add files as context to the chat session",
      isRepeatable: true,
      args: {
        name: "path",
        template: "filepaths",
      },
    },
    {
      name: "--maximize",
      description: "Maximize the chat session view",
    },
    {
      name: ["-r", "--reuse-window"],
      description: "Force to use the last active window for the chat session",
    },
    {
      name: ["-n", "--new-window"],
      description: "Force to open an empty window for the chat session",
    },
    profileOption,
    {
      name: ["-h", "--help"],
      description: "Print usage",
    },
  ],
};

// Standalone CLI only (cli/src/commands/args.rs); the editor's own `code` script uses the --list-extensions style flags
const extSubcommand: Fig.Subcommand = {
  name: "ext",
  description: "Manage editor extensions (standalone CLI)",
  options: [
    ...cliGlobalOptions,
    {
      name: "--extensions-dir",
      description: "Set the root path for extensions",
      args: {
        name: "dir",
        template: "folders",
      },
    },
    {
      name: "--user-data-dir",
      description:
        "Specifies the directory that user data is kept in. Can be used to open multiple distinct instances of the editor",
      args: {
        name: "dir",
        template: "folders",
      },
    },
    {
      name: "--use-version",
      description:
        "Sets the editor version to use for this command. Can be 'stable', 'insiders', a version number, or an absolute path to an existing install",
      args: {
        name: "stable | insiders | x.y.z | path",
      },
    },
  ],
  subcommands: [
    {
      name: "list",
      description: "List installed extensions",
      options: [
        {
          name: "--category",
          description: "Filters installed extensions by provided category",
          args: {
            name: "category",
          },
        },
        {
          name: "--show-versions",
          description: "Show versions of installed extensions",
        },
      ],
    },
    {
      name: "install",
      description: "Install an extension",
      args: {
        name: "ext-id | id",
        description:
          "Either an extension id or a path to a VSIX. To install a specific version provide '@${version}'. For example: 'vscode.csharp@1.2.3'",
        template: "filepaths",
        isVariadic: true,
      },
      options: [
        {
          name: "--pre-release",
          description: "Installs the pre-release version of the extension",
        },
        {
          name: "--donot-include-pack-and-dependencies",
          description:
            "Don't include installing pack and dependencies of the extension",
        },
        {
          name: "--force",
          description:
            "Update to the latest version of the extension if it's already installed",
        },
      ],
    },
    {
      name: "uninstall",
      description: "Uninstall an extension",
      args: {
        name: "ext-id",
        description: "One or more extension identifiers to uninstall",
        isVariadic: true,
      },
    },
    {
      name: "update",
      description: "Update the installed extensions",
    },
  ],
};

const statusSubcommand: Fig.Subcommand = {
  name: "status",
  description:
    "Print process usage and diagnostics information (standalone CLI)",
  options: cliGlobalOptions,
};

const versionSubcommand: Fig.Subcommand = {
  name: "version",
  description:
    "Changes the version of the editor you're using (standalone CLI)",
  options: cliGlobalOptions,
  subcommands: [
    {
      name: "use",
      description: "Switches the version of the editor in use",
      args: {
        name: "stable | insiders | x.y.z | path",
        description:
          "The version of the editor you want to use. Can be 'stable', 'insiders', or an absolute path to an existing install",
        suggestions: ["stable", "insiders"],
        template: "folders",
      },
      options: [
        {
          name: "--install-dir",
          description: "The directory where the version can be found",
          args: {
            name: "path",
            template: "folders",
          },
        },
      ],
    },
    {
      name: "show",
      description: "Shows the currently configured editor version",
    },
  ],
};

const updateSubcommand: Fig.Subcommand = {
  name: "update",
  description: "Updates the CLI (standalone CLI)",
  options: [
    ...cliGlobalOptions,
    {
      name: "--check",
      description: "Only check for updates, without actually updating the CLI",
    },
  ],
};

const completionSpec: Fig.Spec = {
  name: "code",
  description: "Visual Studio Code",
  args: {
    template: ["filepaths", "folders"],
    isVariadic: true,
  },
  subcommands: [
    chatSubcommand,
    serveWebSubcommand,
    tunnelSubcommand,
    agentSubcommand,
    extSubcommand,
    statusSubcommand,
    versionSubcommand,
    updateSubcommand,
  ],
  options: [
    ...commonOptions,
    ...extensionManagementOptions,
    ...troubleshootingOptions,
    ...deprecatedOptions,
  ],
};

export default completionSpec;
