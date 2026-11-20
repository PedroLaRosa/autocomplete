// tsh (Teleport client) v18.11.10 (latest stable git tag of gravitational/teleport, 2026-11-20).
// Source: static read of the kingpin command/flag definitions in tool/tsh/common/*.go at tag v18.11.10, plus the enum values they use in lib/defaults, lib/client, lib/client/mcp/config and api/types (binary not executed).
// Hidden/internal commands and flags are omitted (daemon, bench, latency, show, svid, piv, fido2, touchid, webauthnwin, connect-updater, device debug commands, VNet service plumbing).
// The v19 line only has pre-release tags, so v18 is the current stable line.

const textFormats = ["text", "json", "yaml"];

const sshHostGenerator: Fig.Generator = {
  script: ["tsh", "ls", "--format=json"],
  postProcess: (out) => {
    return JSON.parse(out).map((elm) => {
      return {
        name: elm.spec.hostname,
        description: `Access expires: ${elm.metadata.expires}`,
      };
    });
  },
};

const formatOption = (
  suggestions: string[] = textFormats,
  description = `Format output (${suggestions.join(", ")})`
): Fig.Option => ({
  name: ["-f", "--format"],
  description,
  args: { name: "format", suggestions },
});

const clusterOption: Fig.Option = {
  name: ["-c", "--cluster"],
  description: "Specify the Teleport cluster to connect",
  args: { name: "cluster" },
};

const searchOption: Fig.Option = {
  name: "--search",
  description:
    'Comma-separated search keywords or phrases enclosed in quotations (e.g. --search=foo,bar,"some phrase")',
  args: { name: "keywords" },
};

const queryOption: Fig.Option = {
  name: "--query",
  description:
    "Query by predicate language enclosed in single quotes. Supports ==, !=, &&, and ||",
  args: { name: "predicate" },
};

const labelsOption: Fig.Option = {
  name: "--labels",
  description: "Comma-separated labels to filter by (key1=value1,key2=value2)",
  args: { name: "labels" },
};

const labelsArg: Fig.Arg = {
  name: "labels",
  description: "Comma-separated labels to filter by (key1=value1,key2=value2)",
  isOptional: true,
};

const quietOption = (description = "Quiet mode"): Fig.Option => ({
  name: ["-q", "--quiet"],
  description,
});

const verboseOption = (description: string): Fig.Option => ({
  name: ["-v", "--verbose"],
  description,
});

const listAllOption = (what: string): Fig.Option => ({
  name: ["-R", "--all"],
  description: `List ${what} from all clusters and proxies`,
});

const browserOption: Fig.Option = {
  name: "--browser",
  description: "Set to 'none' to suppress browser opening on login",
  args: { name: "browser" },
};

const noResumeOption: Fig.Option = {
  name: "--no-resume",
  description: "Disable SSH connection resumption",
};

const noReloginOption: Fig.Option = {
  name: "--no-relogin",
  description:
    "Do not permit performing an authentication attempt on a failed command",
};

const requestReasonOption: Fig.Option = {
  name: "--request-reason",
  description: "Reason for requesting access",
  args: { name: "reason" },
};

const disableAccessRequestOption: Fig.Option = {
  name: "--disable-access-request",
  description: "Disable automatic resource access requests",
};

const dbUserOption = (description: string): Fig.Option => ({
  name: ["-u", "--db-user"],
  description,
  args: { name: "user" },
});

const dbNameOption = (description: string): Fig.Option => ({
  name: ["-n", "--db-name"],
  description,
  args: { name: "name" },
});

const dbRolesOption: Fig.Option = {
  name: ["-r", "--db-roles"],
  description:
    "Comma-separated database roles to use for auto-provisioned user",
  args: { name: "roles" },
};

const kubeNamespaceOption = (short: boolean): Fig.Option => ({
  name: short ? ["-n", "--namespace"] : "--namespace",
  description: "Configure the default Kubernetes namespace",
  args: { name: "namespace" },
});

const impersonationOptions: Fig.Option[] = [
  {
    name: "--as",
    description: "Configure custom Kubernetes user impersonation",
    args: { name: "user" },
  },
  {
    name: "--as-groups",
    description: "Configure custom Kubernetes group impersonation",
    isRepeatable: true,
    args: { name: "group" },
  },
];

const envVarFormats = ["unix", "command-prompt", "powershell", "text"];

const proxyEnvFormatDescription =
  "Format to print the commands for setting environment variables. Default is unix (powershell on Windows)";

const sessionIdArg = (description: string): Fig.Arg => ({
  name: "session-id",
  description,
});

// Options of the OpenSSH-style `tsh ssh` command
const sshOptions: Fig.Option[] = [
  {
    name: ["-p", "--port"],
    description: "SSH port on a remote host",
    args: { name: "port" },
  },
  {
    name: ["-A", "--forward-agent"],
    description: "Forward agent to target node",
  },
  {
    name: ["-L", "--forward"],
    description: "Forward localhost connections to remote server",
    isRepeatable: true,
    args: { name: "local-port:host:remote-port" },
  },
  {
    name: ["-D", "--dynamic-forward"],
    description: "Forward localhost connections to remote server using SOCKS5",
    isRepeatable: true,
    args: { name: "[bind-address:]port" },
  },
  {
    name: ["-R", "--remote-forward"],
    description: "Forward remote connections to localhost",
    isRepeatable: true,
    args: { name: "remote-port:host:local-port" },
  },
  {
    name: "--local",
    description: "Execute command on localhost after connecting to SSH node",
  },
  { name: ["-t", "--tty"], description: "Allocate TTY" },
  clusterOption,
  {
    name: ["-o", "--option"],
    description: "OpenSSH options in the format used in the configuration file",
    isRepeatable: true,
    args: { name: "option" },
  },
  {
    name: ["-N", "--no-remote-exec"],
    description: "Don't execute remote command, useful for port forwarding",
  },
  {
    name: ["-X", "--x11-untrusted"],
    description: "Requests untrusted (secure) X11 forwarding for this session",
  },
  {
    name: ["-Y", "--x11-trusted"],
    description:
      "Requests trusted (insecure) X11 forwarding for this session. This can make your local machine vulnerable to attacks, use with caution",
  },
  {
    name: "--x11-untrusted-timeout",
    description:
      "Sets a timeout for untrusted X11 forwarding, after which the client will reject any forwarding requests from the server",
    args: { name: "duration", default: "10m" },
  },
  {
    name: "--invite",
    description:
      "Comma-separated list of people to mark as invited for the session",
    isRepeatable: true,
    args: { name: "users" },
  },
  {
    name: "--reason",
    description: "The purpose of the session",
    args: { name: "reason" },
  },
  {
    name: "--participant-req",
    description:
      "Displays a verbose list of required participants in a moderated session",
  },
  requestReasonOption,
  {
    name: "--request-mode",
    description: "Type of automatic access request to make",
    args: { name: "mode", suggestions: ["off", "resource", "role"] },
  },
  {
    name: "--disable-access-request",
    description:
      "Disable automatic resource access requests. Use --request-mode=off instead",
    deprecated: true,
  },
  {
    name: "--log-dir",
    description:
      "Directory to log separated command output, when executing on multiple nodes. If set, output from each node will also be labeled in the terminal",
    args: { name: "dir", template: "folders" },
  },
  noResumeOption,
  noReloginOption,
  {
    name: ["-f", "--fork-after-authentication"],
    description: "Run in background after authentication is complete",
  },
  {
    name: "-T",
    description: "Disable pseudo-terminal allocation (OpenSSH compatibility)",
    hidden: true,
  },
  {
    name: "-V",
    description: "Display the version number and exit (OpenSSH compatibility)",
    hidden: true,
  },
];

const awsAppOptions: Fig.Option[] = [
  {
    name: "--all",
    description:
      "Proxy all authorized AWS apps. AWS role for each must be unambiguous",
  },
  labelsOption,
  queryOption,
  {
    name: "--app",
    description:
      "Name of the AWS application to use. Can be specified multiple times",
    isRepeatable: true,
    args: { name: "app" },
  },
];

const mcpClientConfigOptions: Fig.Option[] = [
  {
    name: "--client-config",
    description:
      "Update the specified client config, assuming its format. Use claude for the default Claude Desktop config, cursor for the global Cursor MCP servers config, or a JSON file path",
    args: {
      name: "client",
      suggestions: ["claude", "cursor"],
      template: "filepaths",
    },
  },
  {
    name: "--json-format",
    description:
      "Format the JSON file. auto saves in compact if the file is already compact, otherwise pretty",
    args: {
      name: "format",
      default: "auto",
      suggestions: ["pretty", "compact", "auto", "none"],
    },
  },
  {
    name: "--format",
    description:
      "Configuration format. If not provided it assumes the format from the configuration file, or claude when there is none",
    args: { name: "format", suggestions: ["claude", "vscode", "cursor"] },
  },
];

const mcpHeaderOption: Fig.Option = {
  name: ["-H", "--header"],
  description: "Extra custom headers used for streamable HTTP MCP servers",
  isRepeatable: true,
  args: { name: "header" },
};

const mcpAutoReconnectOptions: Fig.Option[] = [
  {
    name: "--auto-reconnect",
    description:
      "Automatically start a new remote MCP session when the previous remote session is interrupted by network issues or tsh session expirations. Recommended for stateless MCP sessions. Defaults to true",
  },
  {
    name: "--no-auto-reconnect",
    description:
      "Do not automatically start a new remote MCP session when the previous one is interrupted",
  },
];

const phaseBuildOptions: Fig.Option[] = [
  {
    name: "--no-console",
    description:
      "Return after provisioning instead of opening an interactive shell or streaming command logs",
  },
  {
    name: "--commands-file",
    description:
      "Path to a YAML file in the raw command format. Omit for an interactive build",
    args: { name: "file", template: "filepaths" },
  },
  {
    name: "--copy",
    description:
      "Copy files outside /home using absolute-destination:local-source. Repeat for more paths",
    isRepeatable: true,
    args: { name: "destination:source" },
  },
  {
    name: "--region",
    description: "Region in which to build the Phase",
    args: { name: "region" },
  },
  formatOption(),
];

// Global flags, valid before or after any subcommand
const globalOptions: Fig.Option[] = [
  {
    name: ["-l", "--login"],
    description: "Remote host login",
    args: { name: "login" },
  },
  {
    name: "--proxy",
    description: "Teleport proxy address",
    args: {
      name: "Teleport proxy address",
      generators: {
        script: ["tsh", "clusters", "--format=json"],
        postProcess: (out) => JSON.parse(out).map((elm) => elm.cluster_name),
      },
    },
  },
  {
    name: "--relay",
    description:
      'Teleport relay address, "none" to explicitly disable the use of a relay, or "default" to use the cluster-provided address even if a different address was specified at login time',
    args: { name: "relay", suggestions: ["none", "default"] },
  },
  {
    name: "--user",
    description: "Teleport user, defaults to current local user",
    args: {
      name: "user",
      generators: {
        script: ["tsh", "status", "--format", "json"],
        postProcess: (out) => [JSON.parse(out).active.username],
      },
    },
  },
  {
    name: "--ttl",
    description: "Minutes to live for a session",
    args: { name: "minutes" },
  },
  {
    name: ["-i", "--identity"],
    description: "Identity file",
    args: { name: "file", template: "filepaths" },
  },
  {
    name: "--cert-format",
    description: "SSH certificate format",
    args: { name: "format" },
  },
  {
    name: "--insecure",
    description:
      "Do not verify server's certificate and host name. Use only in test environments",
  },
  {
    name: "--auth",
    description: "Specify the name of authentication connector to use",
    args: { name: "connector" },
  },
  {
    name: "--skip-version-check",
    description: "Skip version checking between server and client",
  },
  { name: ["-d", "--debug"], description: "Verbose logging to stdout" },
  {
    name: "--os-log",
    description:
      "Verbose logging to the unified logging system. This flag implies --debug. Only shown on macOS",
  },
  {
    name: ["-k", "--add-keys-to-agent"],
    description: "Controls how keys are handled",
    args: {
      name: "mode",
      default: "auto",
      suggestions: ["auto", "no", "yes", "only"],
    },
  },
  {
    name: "--enable-escape-sequences",
    description:
      "Enable support for SSH escape sequences. Type '~?' during an SSH session to list supported sequences. Default is enabled",
  },
  {
    name: "--no-enable-escape-sequences",
    description: "Disable support for SSH escape sequences",
  },
  {
    name: "--bind-addr",
    description:
      "Override host:port used when opening a browser for cluster logins",
    args: { name: "host:port" },
  },
  {
    name: "--callback",
    description:
      "Override the base URL (host:port) of the link shown when opening a browser for cluster logins. Must be used with --bind-addr",
    args: { name: "host:port" },
  },
  {
    name: "--mfa-mode",
    description: "Preferred mode for MFA and Passwordless assertions",
    args: {
      name: "mode",
      default: "auto",
      suggestions: [
        "auto",
        "cross-platform",
        "platform",
        "otp",
        "sso",
        "browser",
      ],
    },
  },
  {
    name: "--headless",
    description: "Use headless login. Shorthand for --auth=headless",
  },
  {
    name: "--mlock",
    description:
      "Determines whether process memory will be locked and whether failure to do so will be accepted",
    args: {
      name: "mode",
      default: "auto",
      suggestions: ["off", "auto", "best_effort", "strict"],
    },
  },
  {
    name: ["-h", "--help"],
    description: "Show help",
  },
  {
    name: "--piv-slot",
    description:
      'Specify a PIV slot key to use for Hardware Key support instead of the default. Ex: "9d"',
    args: { name: "slot" },
  },
  {
    name: ["-J", "--jumphost"],
    description: "SSH jumphost",
    args: { name: "jumphost" },
  },
];

const completionSpec: Fig.Spec = {
  name: "tsh",
  description: "Teleport command line client",
  subcommands: [
    {
      name: "version",
      description:
        "Print the tsh client and Proxy server versions for the current context",
      options: [
        formatOption(),
        {
          name: "--client",
          description: "Show the client version only (no server required)",
        },
      ],
    },
    {
      name: "ssh",
      description: "Run shell or execute a command on a remote SSH node",
      parserDirectives: { optionsMustPrecedeArguments: true },
      args: [
        {
          name: "[user@]host",
          description: "Remote hostname and the login to use",
          generators: sshHostGenerator,
        },
        {
          name: "command",
          description: "Command to execute on a remote host",
          isOptional: true,
          isVariadic: true,
        },
      ],
      options: sshOptions,
    },
    {
      name: "resolve",
      description: "Resolves an SSH host",
      args: { name: "host", description: "Remote hostname to resolve" },
      options: [quietOption(), formatOption()],
    },
    {
      name: "aws",
      description: "Access AWS API",
      parserDirectives: { optionsMustPrecedeArguments: true },
      args: {
        name: "command",
        description:
          "AWS command and subcommands arguments that are going to be forwarded to AWS CLI",
        isOptional: true,
        isVariadic: true,
      },
      options: [
        ...awsAppOptions,
        {
          name: "--profile",
          description:
            "Map an AWS app to a different AWS profile name when proxying multiple apps. Specify as <app>=<profile> and repeat for each desired mapping",
          isRepeatable: true,
          args: { name: "app=profile" },
        },
        {
          name: "--exec",
          description:
            "Execute different commands (e.g. terraform) under Teleport credentials",
          args: { name: "command" },
        },
        {
          name: "--aws-role",
          description:
            "(For AWS CLI access only) Amazon IAM role ARN or role name",
          args: { name: "role" },
        },
      ],
    },
    {
      name: "aws-profile",
      description:
        "Generate AWS config profiles by syncing with your integrated AWS IAM Identity Center account(s)",
      options: [
        {
          name: "--aws-sso-region",
          description:
            "AWS region for SSO. Auto-detected from cluster if not specified",
          args: { name: "region" },
        },
        {
          name: "--dry-run",
          description:
            "Print the configuration that will be applied without modifying the AWS config file",
        },
      ],
    },
    {
      name: "az",
      description: "Access Azure API",
      parserDirectives: { optionsMustPrecedeArguments: true },
      args: {
        name: "command",
        description:
          "Azure CLI (az) command and subcommands arguments that are going to be forwarded to it",
        isOptional: true,
        isVariadic: true,
      },
      options: [
        {
          name: "--app",
          description:
            "Name of the Azure application to use if logged into multiple",
          args: { name: "app" },
        },
        {
          name: "--azure-identity",
          description:
            "(For Azure CLI access only) Azure managed identity name",
          args: { name: "identity" },
        },
      ],
    },
    {
      name: ["gcloud", "gcp"],
      description: "Access GCP API with the gcloud command",
      parserDirectives: { optionsMustPrecedeArguments: true },
      args: {
        name: "command",
        description: "Arguments forwarded to the gcloud command",
        isOptional: true,
        isVariadic: true,
      },
      options: [
        {
          name: "--app",
          description:
            "Name of the GCP application to use if logged into multiple",
          args: { name: "app" },
        },
        {
          name: "--gcp-service-account",
          description: "(For GCP CLI access only) GCP service account name",
          args: { name: "account" },
        },
      ],
    },
    {
      name: "gsutil",
      description: "Access Google Cloud Storage with the gsutil command",
      parserDirectives: { optionsMustPrecedeArguments: true },
      args: {
        name: "command",
        description: "Arguments forwarded to the gsutil command",
        isOptional: true,
        isVariadic: true,
      },
      options: [
        {
          name: "--app",
          description:
            "Name of the GCP application to use if logged into multiple",
          args: { name: "app" },
        },
        {
          name: "--gcp-service-account",
          description: "(For GCP CLI access only) GCP service account name",
          args: { name: "account" },
        },
      ],
    },
    {
      name: ["apps", "app"],
      description: "View and control proxied applications",
      options: [{ ...clusterOption, isPersistent: true }],
      subcommands: [
        {
          name: "ls",
          description: "List available applications",
          args: labelsArg,
          options: [
            verboseOption("Show extra application fields"),
            searchOption,
            queryOption,
            formatOption(),
            listAllOption("apps"),
          ],
        },
        {
          name: "login",
          description: "Retrieve short-lived certificate for an app",
          args: {
            name: "app",
            description:
              'App name to retrieve credentials for, as shown in `tsh apps ls`. Scoped apps use their scope-qualified name ("/scope::name")',
          },
          options: [
            {
              name: "--aws-role",
              description:
                "(For AWS CLI access only) Amazon IAM role ARN or role name",
              args: { name: "role" },
            },
            {
              name: "--azure-identity",
              description:
                "(For Azure CLI access only) Azure managed identity name",
              args: { name: "identity" },
            },
            {
              name: "--gcp-service-account",
              description: "(For GCP CLI access only) GCP service account name",
              args: { name: "account" },
            },
            {
              name: "--target-port",
              description:
                "Port to which connections made using this cert should be routed to. Valid only for multi-port TCP apps",
              args: { name: "port" },
            },
            {
              name: ["-T", "--interactive"],
              description:
                "Prompt for AWS Roles interactively (--aws-role takes precedence)",
            },
            quietOption(),
          ],
        },
        {
          name: "logout",
          description: "Remove app certificate",
          args: {
            name: "app",
            description: "App to remove credentials for",
            isOptional: true,
          },
        },
        {
          name: "config",
          description: "Print app connection information",
          args: {
            name: "app",
            description:
              "App to print information for. Required when logged into multiple apps",
            isOptional: true,
          },
          options: [
            formatOption(
              ["uri", "ca", "cert", "key", "curl", "json", "yaml"],
              "Print format: uri for the app address, ca for the CA cert path, cert for the cert path, key for the key path, curl for an example curl command, json or yaml for everything"
            ),
          ],
        },
        {
          name: "logins",
          description: "List available logins for a Cloud console application",
          args: {
            name: "app",
            description:
              "App name to list logins for. Currently only AWS is supported",
          },
          options: [formatOption()],
        },
      ],
    },
    {
      name: ["recordings", "recording"],
      description: "View and control session recordings",
      subcommands: [
        {
          name: "ls",
          description: "List recorded sessions",
          options: [
            formatOption(),
            {
              name: "--from-utc",
              description:
                "Start of time range in which recordings are listed. Format YYYY-MM-DD. Defaults to 24 hours ago",
              args: { name: "date" },
            },
            {
              name: "--to-utc",
              description:
                "End of time range in which recordings are listed. Format YYYY-MM-DD. Defaults to current time",
              args: { name: "date" },
            },
            {
              name: "--limit",
              description: "Maximum number of recordings to show",
              args: { name: "count", default: "50" },
            },
            {
              name: "--last",
              description:
                'Duration into the past from which session recordings should be listed. Format "5h30m40s"',
              args: { name: "duration" },
            },
          ],
        },
        {
          name: "export",
          description: "Export recorded desktop sessions to video",
          args: sessionIdArg("ID of the session to export"),
          options: [
            {
              name: "--encoder",
              description: "The video encoder to use",
              args: {
                name: "encoder",
                default: "auto",
                suggestions: ["ffmpeg", "avi", "auto"],
              },
            },
            {
              name: "--out",
              description: "Override output file name",
              args: { name: "file", template: "filepaths" },
            },
            quietOption(),
          ],
        },
      ],
    },
    {
      name: "proxy",
      description:
        "Run local TLS proxy allowing connecting to Teleport in single-port mode",
      options: [
        {
          name: "--proxy-log-output",
          description:
            "Select where proxy status messages are printed. Defaults to stderr, but can be used to revert to legacy behavior of sending proxy output to stdout",
          isPersistent: true,
          args: {
            name: "output",
            default: "stderr",
            suggestions: ["stdout", "stderr", "none"],
          },
        },
      ],
      subcommands: [
        {
          name: "ssh",
          description:
            "Start local TLS proxy for ssh connections when using Teleport in single-port mode",
          args: {
            name: "[user@]host",
            description: "Remote hostname and the login to use",
            generators: sshHostGenerator,
          },
          options: [clusterOption, noResumeOption, noReloginOption],
        },
        {
          name: "db",
          description:
            "Start local TLS proxy for database connections when using Teleport in single-port mode",
          args: {
            name: "db",
            description: "The name of the database to start local proxy for",
            isOptional: true,
          },
          options: [
            {
              name: "--insecure-listen-anywhere",
              description:
                "Allows the local proxy to listen on any address without restrictions. WARNING: this will expose unsecured listener to anyone in the network. Only use when network access is otherwise restricted",
            },
            {
              name: "--listen",
              description:
                "Specifies the source address used by proxy db listener. Mutually exclusive with --port",
              args: { name: "address" },
            },
            {
              name: ["-p", "--port"],
              description:
                "Specifies the source port used by proxy db listener",
              args: { name: "port" },
            },
            {
              name: "--tunnel",
              description:
                "Open authenticated tunnel using database's client certificate so clients don't need to authenticate",
            },
            dbUserOption("Database user to log in as"),
            dbNameOption("Database name to log in to"),
            dbRolesOption,
            clusterOption,
            labelsOption,
            queryOption,
            requestReasonOption,
            disableAccessRequestOption,
          ],
        },
        {
          name: "app",
          description:
            "Start local TLS proxy for app connection when using Teleport in single-port mode",
          args: {
            name: "app",
            description: "The name of the application to start local proxy for",
          },
          options: [
            {
              name: ["-p", "--port"],
              description:
                'Specifies the listening port used by the proxy app listener. Accepts an optional target port of a multi-port TCP app after a colon, e.g. "1234:5678"',
              args: { name: "port[:target-port]" },
            },
            clusterOption,
            browserOption,
          ],
        },
        {
          name: "mcp",
          description: "Start local proxy for MCP access",
          args: {
            name: "app",
            description:
              "The name of the MCP application to start local proxy for",
          },
          options: [
            {
              name: ["-p", "--port"],
              description:
                "Specifies the listening port used by the proxy app listener",
              args: { name: "port" },
            },
            clusterOption,
            browserOption,
          ],
        },
        {
          name: "aws",
          description: "Start local proxy for AWS access",
          options: [
            ...awsAppOptions,
            {
              name: "--profile",
              description:
                "AWS profile name mapping in the form <app>=<profile>. Can be specified multiple times",
              isRepeatable: true,
              args: { name: "app=profile" },
            },
            {
              name: ["-p", "--port"],
              description:
                "Specifies the source port used by the proxy listener",
              args: { name: "port" },
            },
            formatOption(
              [...envVarFormats, "athena-odbc", "athena-jdbc"],
              `${proxyEnvFormatDescription}. Or specify a service format: athena-odbc, athena-jdbc`
            ),
          ],
        },
        {
          name: ["azure", "az"],
          description: "Start local proxy for Azure access",
          options: [
            {
              name: "--app",
              description:
                "Name of the Azure application to use if logged into multiple",
              args: { name: "app" },
            },
            {
              name: ["-p", "--port"],
              description:
                "Specifies the source port used by the proxy listener",
              args: { name: "port" },
            },
            formatOption(envVarFormats, proxyEnvFormatDescription),
          ],
        },
        {
          name: ["gcloud", "gcp"],
          description: "Start local proxy for GCP access",
          options: [
            {
              name: "--app",
              description:
                "Name of the GCP application to use if logged into multiple",
              args: { name: "app" },
            },
            {
              name: ["-p", "--port"],
              description:
                "Specifies the source port used by the proxy listener",
              args: { name: "port" },
            },
            formatOption(envVarFormats, proxyEnvFormatDescription),
          ],
        },
        {
          name: "kube",
          description: "Start local proxy for Kubernetes access",
          args: {
            name: "kube-cluster",
            description:
              "Name of the Kubernetes cluster to proxy. Check 'tsh kube ls' for a list of available clusters. If not specified, all clusters previously logged in through `tsh kube login` will be used",
            isOptional: true,
            isVariadic: true,
          },
          options: [
            clusterOption,
            ...impersonationOptions,
            kubeNamespaceOption(true),
            {
              name: ["-p", "--port"],
              description:
                "Specifies the source port used by the proxy listener",
              args: { name: "port" },
            },
            formatOption(envVarFormats, proxyEnvFormatDescription),
            labelsOption,
            queryOption,
            {
              name: "--all",
              description:
                "Proxy every Kubernetes cluster the user has access to. Mutually exclusive with --labels, --query, or kube cluster names",
            },
            {
              name: "--set-context-name",
              description: "Define a custom context name or template",
              args: { name: "name" },
            },
            {
              name: "--exec",
              description:
                "Run the proxy in the background and reexec into a new shell with $KUBECONFIG already pointed to our config file",
            },
            {
              name: "--exec-cmd",
              description:
                "Command to execute when --exec is enabled. If not specified, defaults to $SHELL or /bin/bash. Implicitly enables exec mode",
              args: { name: "command" },
            },
            {
              name: "--exec-arg",
              description:
                "Arguments to pass to the executed command (can be specified multiple times)",
              isRepeatable: true,
              args: { name: "arg" },
            },
          ],
        },
      ],
    },
    {
      name: "db",
      description: "View and control proxied databases",
      options: [{ ...clusterOption, isPersistent: true }],
      subcommands: [
        {
          name: "ls",
          description: "List all available databases",
          args: labelsArg,
          options: [
            verboseOption("Show extra database fields"),
            searchOption,
            queryOption,
            formatOption(),
            listAllOption("databases"),
          ],
        },
        {
          name: "login",
          description: "Retrieve credentials for a database",
          args: {
            name: "db",
            description:
              "Database to retrieve credentials for. Can be obtained from 'tsh db ls' output",
            isOptional: true,
          },
          options: [
            labelsOption,
            queryOption,
            dbUserOption("Database user to configure as default"),
            dbNameOption("Database name to configure as default"),
            dbRolesOption,
            requestReasonOption,
            disableAccessRequestOption,
          ],
        },
        {
          name: "logout",
          description: "Remove database credentials",
          args: {
            name: "db",
            description: "Database to remove credentials for",
            isOptional: true,
          },
          options: [labelsOption, queryOption],
        },
        {
          name: "env",
          description:
            "Print environment variables for the configured database",
          args: {
            name: "db",
            description: "Print environment for the specified database",
            isOptional: true,
          },
          options: [formatOption(), labelsOption, queryOption],
        },
        {
          name: "config",
          description:
            "Print database connection information. Useful when configuring GUI clients",
          args: {
            name: "db",
            description: "Print information for the specified database",
            isOptional: true,
          },
          options: [
            labelsOption,
            queryOption,
            formatOption(
              ["text", "cmd", "json", "yaml"],
              'Print format: "text" to print in table format (default), "cmd" to print connect command, "json" or "yaml" to print in JSON or YAML'
            ),
          ],
        },
        {
          name: "connect",
          description: "Connect to a database",
          args: {
            name: "db",
            description: "Database service name to connect to",
            isOptional: true,
          },
          options: [
            dbUserOption("Database user to log in as"),
            dbNameOption("Database name to log in to"),
            dbRolesOption,
            labelsOption,
            queryOption,
            requestReasonOption,
            disableAccessRequestOption,
          ],
        },
        {
          name: "exec",
          description: "Execute database commands on target database services",
          args: {
            name: "command",
            description: "Execute this command on target database services",
          },
          options: [
            dbUserOption("Database user to log in as"),
            dbNameOption("Database name to log in to"),
            dbRolesOption,
            searchOption,
            labelsOption,
            {
              name: "--parallel",
              description:
                "Run commands on target databases in parallel. Defaults to 1, and maximum allowed is 10",
              args: { name: "count", default: "1" },
            },
            {
              name: "--output-dir",
              description:
                'Directory to store command output per target database service. A summary is saved as "summary.json"',
              args: { name: "dir", template: "folders" },
            },
            {
              name: "--dbs",
              description:
                "Comma-separated list of target database services. Mutually exclusive with --search or --labels",
              args: { name: "databases" },
            },
            {
              name: "--no-confirm",
              description:
                "Do not confirm selected database services before executing command",
            },
          ],
        },
      ],
    },
    {
      name: "join",
      description: "Join the active SSH or Kubernetes session",
      args: sessionIdArg("ID of the session to join"),
      options: [
        clusterOption,
        {
          name: ["-m", "--mode"],
          description: "Mode of joining the session",
          args: {
            name: "mode",
            default: "observer",
            suggestions: ["observer", "moderator", "peer"],
          },
        },
      ],
    },
    {
      name: "play",
      description: "Replay the recorded session (SSH, Kubernetes, App, DB)",
      args: {
        name: "session-id",
        description: "ID or path to session file to play",
        template: "filepaths",
      },
      options: [
        clusterOption,
        {
          name: "--speed",
          description:
            "Playback speed, applicable when streaming SSH or Kubernetes sessions",
          args: {
            name: "speed",
            default: "1x",
            suggestions: ["0.5x", "1x", "2x", "4x", "8x"],
          },
        },
        {
          name: "--skip-idle-time",
          description:
            "Quickly skip over idle time, applicable when streaming SSH or Kubernetes sessions",
        },
        formatOption(["pty", "json", "yaml", "text"]),
      ],
    },
    {
      name: "scp",
      description: "Transfer files to a remote SSH node",
      args: {
        name: "from, to",
        description:
          "Source and destination to copy, one must be a local path and one must be a remote path",
        isVariadic: true,
        template: "filepaths",
      },
      options: [
        clusterOption,
        {
          name: ["-r", "--recursive"],
          description: "Recursive copy of subdirectories",
        },
        {
          name: ["-P", "--port"],
          description: "Port to connect to on the remote host",
          args: { name: "port" },
        },
        {
          name: ["-p", "--preserve"],
          description:
            "Preserves access and modification times from the original file",
        },
        quietOption(),
        noResumeOption,
        noReloginOption,
      ],
    },
    {
      name: "ls",
      description: "List remote SSH nodes",
      args: labelsArg,
      options: [
        clusterOption,
        verboseOption(
          "One-line output (for text format), including node UUIDs"
        ),
        formatOption(["text", "json", "yaml", "names"]),
        searchOption,
        queryOption,
        listAllOption("nodes"),
      ],
    },
    {
      name: "clusters",
      description: "List available Teleport clusters",
      options: [
        formatOption(),
        quietOption(),
        verboseOption("Verbose table output, shows full label output"),
      ],
    },
    {
      name: "sessions",
      description: "Operate on active sessions",
      subcommands: [
        {
          name: "ls",
          description: "List active sessions",
          options: [
            formatOption(),
            {
              name: "--kind",
              description: "Filter by session kind(s)",
              isRepeatable: true,
              args: {
                name: "kind",
                suggestions: ["ssh", "k8s", "kube", "db", "app", "desktop"],
              },
            },
          ],
        },
      ],
    },
    {
      name: "login",
      description: "Log in to a cluster and retrieve the session certificate",
      args: {
        name: "cluster",
        description: "Specify the Teleport cluster to connect",
        isOptional: true,
      },
      options: [
        {
          name: ["-o", "--out"],
          description: "Identity output",
          isRepeatable: true,
          args: { name: "file", template: "filepaths" },
        },
        formatOption(
          ["file", "openssh", "kubernetes"],
          "Identity format: file, openssh (for OpenSSH compatibility) or kubernetes (for kubeconfig)"
        ),
        {
          name: "--overwrite",
          description: "Whether to overwrite the existing identity file",
        },
        {
          name: "--force",
          description:
            "Force re-authentication even if the current session is still valid",
        },
        {
          name: "--request-roles",
          description: "Request one or more extra roles",
          args: { name: "roles" },
        },
        {
          name: "--request-reason",
          description: "Reason for requesting additional roles",
          args: { name: "reason" },
        },
        {
          name: "--request-reviewers",
          description: "Suggested reviewers for role request",
          args: { name: "reviewers" },
        },
        {
          name: "--request-nowait",
          description: "Finish without waiting for request resolution",
        },
        {
          name: "--request-id",
          description: "Login with the roles requested in the given request",
          args: { name: "request-id" },
        },
        {
          name: "--scope",
          description:
            'Scope pins credentials to a given scope. Use "" to explicitly remove scoping',
          args: { name: "scope" },
        },
        browserOption,
        {
          name: "--kube-cluster",
          description: "Name of the Kubernetes cluster to login to",
          args: { name: "kube-cluster" },
        },
        verboseOption("Show extra status information"),
      ],
    },
    {
      name: "logout",
      description: "Delete a cluster certificate",
    },
    {
      name: "status",
      description:
        "Display the list of proxy servers and retrieved certificates",
      options: [
        formatOption(),
        verboseOption("Show extra status information after successful login"),
        {
          name: "--client",
          description: "Show client information only (no server required)",
        },
      ],
    },
    {
      name: "env",
      description:
        "Print commands to set Teleport session environment variables",
      options: [
        formatOption(),
        {
          name: "--unset",
          description:
            "Print commands to clear Teleport session environment variables",
        },
      ],
    },
    {
      name: "delegation",
      description: "Manage delegation sessions",
      subcommands: [
        {
          name: "create-session",
          description:
            "Create a delegation session, allowing a bot or workload to temporarily act on your behalf",
          options: [
            {
              name: "--allow-node",
              description: "Allow access to an SSH node",
              isRepeatable: true,
              args: { name: "node" },
            },
            {
              name: "--allow-db",
              description: "Allow access to a database",
              isRepeatable: true,
              args: { name: "database" },
            },
            {
              name: "--allow-app",
              description: "Allow access to an application",
              isRepeatable: true,
              args: { name: "app" },
            },
            {
              name: "--allow-kube-cluster",
              description: "Allow access to a Kubernetes cluster",
              isRepeatable: true,
              args: { name: "kube-cluster" },
            },
            {
              name: "--allow-windows-desktop",
              description: "Allow access to a Windows desktop",
              isRepeatable: true,
              args: { name: "desktop" },
            },
            {
              name: "--allow-git-server",
              description: "Allow access to a Git server",
              isRepeatable: true,
              args: { name: "git-server" },
            },
            {
              name: "--allow-all",
              description:
                "Allow access to all resources, including destructive administrative actions. Mutually exclusive with the other --allow-* flags",
            },
            {
              name: "--bot",
              description:
                "Name of a bot allowed to use the delegation session. Repeat to allow multiple bots",
              isRepeatable: true,
              args: { name: "bot" },
            },
            {
              name: "--session-ttl",
              description:
                "How long the delegation session should remain valid",
              args: { name: "duration" },
            },
          ],
        },
      ],
    },
    {
      name: ["request", "requests"],
      description: "Manage access requests",
      subcommands: [
        {
          name: ["ls", "list"],
          description: "List access requests",
          options: [
            formatOption(),
            {
              name: "--reviewable",
              description: "Only show requests reviewable by current user",
            },
            {
              name: "--suggested",
              description:
                "Only show requests that suggest current user as reviewer",
            },
            {
              name: "--my-requests",
              description: "Only show requests created by current user",
            },
          ],
        },
        {
          name: ["show", "details"],
          description: "Show request details",
          args: { name: "request-id", description: "ID of the target request" },
          options: [formatOption()],
        },
        {
          name: ["create", "new"],
          description: "Create a new access request",
          options: [
            {
              name: "--roles",
              description: "Roles to be requested",
              args: { name: "roles" },
            },
            {
              name: "--reason",
              description: "Reason for requesting",
              args: { name: "reason" },
            },
            {
              name: "--reviewers",
              description: "Suggested reviewers",
              args: { name: "reviewers" },
            },
            {
              name: "--nowait",
              description: "Finish without waiting for request resolution",
            },
            {
              name: "--resource",
              description: "Resource ID to be requested",
              isRepeatable: true,
              args: { name: "resource-id" },
            },
            {
              name: "--request-ttl",
              description: "Expiration time for the access request",
              args: { name: "duration" },
            },
            {
              name: "--session-ttl",
              description: "Expiration time for the elevated certificate",
              args: { name: "duration" },
            },
            {
              name: "--max-duration",
              description: "How long the access should be granted for",
              args: { name: "duration" },
            },
            {
              name: "--assume-start-time",
              description:
                "Sets time roles can be assumed by requestor (RFC3339 e.g 2023-12-12T23:20:50.52Z)",
              args: { name: "time" },
            },
          ],
        },
        {
          name: "review",
          description: "Review an access request",
          args: { name: "request-id", description: "ID of target request" },
          options: [
            { name: "--approve", description: "Review proposes approval" },
            { name: "--deny", description: "Review proposes denial" },
            {
              name: "--reason",
              description: "Review reason message",
              args: { name: "reason" },
            },
            {
              name: "--assume-start-time",
              description:
                "Sets time roles can be assumed by requestor (RFC3339 e.g 2023-12-12T23:20:50.52Z)",
              args: { name: "time" },
            },
          ],
        },
        {
          name: "search",
          description: "Search for resources to request access to",
          options: [
            {
              name: "--kind",
              description:
                "Resource kind to search for. Mutually exclusive with --roles",
              args: {
                name: "kind",
                suggestions: [
                  "node",
                  "kube_cluster",
                  "kube_resource",
                  "db",
                  "app",
                  "windows_desktop",
                  "linux_desktop",
                  "user_group",
                  "saml_idp_service_provider",
                  "aws_ic_account",
                  "aws_ic_account_assignment",
                  "git_server",
                ],
              },
            },
            {
              name: "--roles",
              description:
                "List requestable roles instead of searching for resources. Mutually exclusive with --kind",
            },
            {
              name: "--kube-kind",
              description:
                "Kubernetes resource kind name (plural) to search for. Required with --kind=kube_resource Ex: pods, deployments, namespaces, etc",
              args: { name: "kind" },
            },
            {
              name: "--kube-api-group",
              description: "Kubernetes API group to search for resources",
              args: { name: "group" },
            },
            formatOption(),
            searchOption,
            queryOption,
            labelsOption,
            {
              name: "--kube-cluster",
              description: "Kubernetes Cluster to search for Pods",
              args: { name: "kube-cluster" },
            },
            {
              name: "--namespace",
              description: "Kubernetes Namespace to search for Pods",
              args: { name: "namespace", default: "default" },
            },
            {
              name: "--all-kube-namespaces",
              description: "Search Pods in every namespace",
            },
            verboseOption("Verbose table output, shows full label output"),
          ],
        },
        {
          name: "drop",
          description: "Drop one or more access requests from current identity",
          args: {
            name: "request-id",
            description: "IDs of requests to drop (default drops all requests)",
            isOptional: true,
            isVariadic: true,
          },
        },
      ],
    },
    {
      name: "headless",
      description: "Headless authentication commands",
      subcommands: [
        {
          name: "approve",
          description: "Approve a headless authentication request",
          args: {
            name: "request id",
            description: "Headless authentication request ID",
            isOptional: true,
          },
          options: [
            {
              name: "--skip-confirm",
              description: "Skip confirmation and prompt for MFA immediately",
            },
          ],
        },
      ],
    },
    {
      name: "kubectl",
      description: "Runs a kubectl command on a Kubernetes cluster",
      parserDirectives: { optionsMustPrecedeArguments: true },
      args: {
        name: "args",
        description: "Arguments forwarded to kubectl",
        isOptional: true,
        isVariadic: true,
      },
    },
    {
      name: "kube",
      description: "Manage available Kubernetes clusters",
      subcommands: [
        {
          name: "ls",
          description: "Get a list of Kubernetes clusters",
          args: labelsArg,
          options: [
            clusterOption,
            searchOption,
            queryOption,
            formatOption(),
            listAllOption("Kubernetes clusters"),
            verboseOption("Show an untruncated list of labels"),
            quietOption(),
          ],
        },
        {
          name: "login",
          description: "Login to a Kubernetes cluster",
          args: {
            name: "kube-cluster",
            description:
              "Name of the Kubernetes cluster to login to. Check 'tsh kube ls' for a list of available clusters",
            isOptional: true,
          },
          options: [
            clusterOption,
            labelsOption,
            queryOption,
            ...impersonationOptions,
            kubeNamespaceOption(true),
            {
              name: "--all",
              description:
                "Generate a kubeconfig with every cluster the user has access to. Mutually exclusive with --labels or --query",
            },
            {
              name: "--set-context-name",
              description:
                'Define a custom context name. To use it with --all include "{{.KubeName}}"',
              args: { name: "name" },
            },
            requestReasonOption,
            disableAccessRequestOption,
          ],
        },
        {
          name: "sessions",
          description:
            "Get a list of active Kubernetes sessions. Use tsh sessions ls --kind=kube instead",
          deprecated: true,
          options: [formatOption(), clusterOption],
        },
        {
          name: "exec",
          description: "Execute a command in a Kubernetes pod",
          args: [
            { name: "target", description: "Pod or deployment name" },
            {
              name: "command",
              description: "Command to execute in the container",
              isVariadic: true,
            },
          ],
          options: [
            {
              name: ["-c", "--container"],
              description:
                "Container name. If omitted, use the kubectl.kubernetes.io/default-container annotation for selecting the container to be attached or the first container in the pod will be chosen",
              args: { name: "container" },
            },
            kubeNamespaceOption(true),
            {
              name: ["-f", "--filename"],
              description: "To use to exec into the resource",
              args: { name: "file", template: "filepaths" },
            },
            quietOption("Only print output from the remote session"),
            {
              name: ["-s", "--stdin"],
              description: "Pass stdin to the container",
            },
            { name: ["-t", "--tty"], description: "Stdin is a TTY" },
            {
              name: "--reason",
              description: "The purpose of the session",
              args: { name: "reason" },
            },
            {
              name: "--invite",
              description:
                "Comma-separated list of people to mark as invited for the session",
              args: { name: "users" },
            },
            {
              name: "--participant-req",
              description:
                "Displays a verbose list of required participants in a moderated session",
            },
          ],
        },
        {
          name: "join",
          description: "Join an active Kubernetes session",
          args: {
            name: "session",
            description: "The ID of the target session",
          },
          options: [
            {
              name: ["-m", "--mode"],
              description: "Mode of joining the session",
              args: {
                name: "mode",
                default: "observer",
                suggestions: ["observer", "moderator", "peer"],
              },
            },
            clusterOption,
          ],
        },
      ],
    },
    {
      name: "mfa",
      description: "Manage multi-factor authentication (MFA) devices",
      subcommands: [
        {
          name: "ls",
          description: "Get a list of registered MFA devices",
          options: [
            verboseOption("Print more information about MFA devices"),
            formatOption(),
          ],
        },
        {
          name: "add",
          description: "Add a new MFA device",
          options: [
            {
              name: "--name",
              description: "Name of the new MFA device",
              args: { name: "name" },
            },
            {
              name: "--type",
              description: "Type of the new MFA device",
              args: {
                name: "type",
                suggestions: ["TOTP", "WEBAUTHN", "TOUCHID"],
              },
            },
            {
              name: "--allow-passwordless",
              description:
                "Allow passwordless logins. Only available when FIDO2 is supported by the client",
            },
          ],
        },
        {
          name: "rm",
          description: "Remove a MFA device",
          args: {
            name: "name",
            description: "Name or ID of the MFA device to remove",
          },
        },
      ],
    },
    {
      name: "scan",
      description:
        "Scan the local machine for Secrets and report findings to Teleport",
      subcommands: [
        {
          name: "keys",
          description:
            "Scan the local machine for SSH private keys and report findings to Teleport",
          options: [
            {
              name: "--dirs",
              description:
                "Directories to scan. Defaults to /home/ on Linux, /Users/ on macOS, and C:\\Users\\ on Windows",
              isRepeatable: true,
              args: { name: "dir", template: "folders" },
            },
            {
              name: "--skip-paths",
              description:
                "Paths to directories or files to skip. Supports for matching patterns",
              isRepeatable: true,
              args: { name: "path", template: ["filepaths", "folders"] },
            },
          ],
        },
      ],
    },
    {
      name: ["scopes", "scoped"],
      description: "View and manage Teleport scopes",
      subcommands: [
        {
          name: "ls",
          description: "List scopes at which user has assigned privileges",
          options: [
            verboseOption("Show table with details of per-scope privileges"),
          ],
        },
      ],
    },
    {
      name: "config",
      description: "Print OpenSSH configuration details",
      options: [
        {
          name: ["-p", "--port"],
          description: "SSH port on a remote host",
          args: { name: "port" },
        },
      ],
    },
    {
      name: "puttyconfig",
      description:
        "Add PuTTY saved session configuration for specified hostname to Windows registry. Only available on Windows",
      args: {
        name: "[user@]host",
        description: "Remote hostname and optional login to use",
      },
      options: [
        {
          name: ["-p", "--port"],
          description: "SSH port on a remote host",
          args: { name: "port" },
        },
        {
          name: "--leaf",
          description: "Add a configuration for connecting to a leaf cluster",
          args: { name: "cluster" },
        },
      ],
    },
    {
      name: "update",
      description:
        "Update client tools (tsh, tctl) to the latest version defined by the cluster configuration",
      options: [
        {
          name: "--clear",
          description:
            "Removes locally installed client tools updates from the Teleport home directory",
        },
      ],
    },
    {
      name: "device",
      description: "Manage this device. Requires Teleport Enterprise",
      subcommands: [
        {
          name: "enroll",
          description:
            "Enroll this device as a trusted device. Requires Teleport Enterprise",
          options: [
            {
              name: "--current-device",
              description:
                "Attempts to register and enroll the current device. Requires device admin privileges",
            },
            {
              name: "--token",
              description: "Device enrollment token",
              args: { name: "token" },
            },
          ],
        },
      ],
    },
    {
      name: "workload-identity",
      description: "Issue Workload Identity credentials",
      subcommands: [
        {
          name: "issue-x509",
          description:
            "Use Teleport Workload Identity to issue an X509 credential and write it to a local directory",
          options: [
            {
              name: "--name-selector",
              description: "The name of the workload identity to issue",
              args: { name: "name" },
            },
            {
              name: "--label-selector",
              description:
                "A label-based selector for which workload identities to issue. Multiple labels can be provided using ','",
              args: { name: "labels" },
            },
            {
              name: "--credential-ttl",
              description: "Sets the time to live for the credential",
              args: { name: "duration", default: "1h" },
            },
            {
              name: "--output",
              description: "Path to the directory to write the SVID into",
              args: { name: "dir", template: "folders" },
            },
          ],
        },
        {
          name: "issue-jwt",
          description:
            "Use Teleport Workload Identity to issue a JWT credential and write it to a local directory",
          options: [
            {
              name: "--name-selector",
              description: "The name of the workload identity to issue",
              args: { name: "name" },
            },
            {
              name: "--label-selector",
              description:
                "A label-based selector for which workload identities to issue. Multiple labels can be provided using ','",
              args: { name: "labels" },
            },
            {
              name: "--credential-ttl",
              description: "Sets the time to live for the credential",
              args: { name: "duration", default: "1h" },
            },
            {
              name: "--output",
              description: "Path to the directory to write the SVID into",
              args: { name: "dir", template: "folders" },
            },
            {
              name: "--audience",
              description:
                "The audience to include in the JWT. Can be specified multiple times",
              isRepeatable: true,
              args: { name: "audience" },
            },
          ],
        },
      ],
    },
    {
      name: "vnet",
      description:
        "Start Teleport VNet, a virtual network for TCP application access",
    },
    {
      name: "vnet-ssh-autoconfig",
      description:
        "Automatically include VNet's generated OpenSSH-compatible config file in ~/.ssh/config",
    },
    {
      name: "git",
      description: "Git server commands",
      subcommands: [
        {
          name: "login",
          description: "Opens a browser and retrieves your login from GitHub",
          options: [
            {
              name: "--github-org",
              description:
                "GitHub organization. Required when more than one GitHub organization is available",
              args: { name: "organization" },
            },
            { name: "--force", description: "Force a login" },
          ],
        },
        {
          name: "ls",
          description: "List Git servers",
          args: labelsArg,
          options: [formatOption(), searchOption, queryOption],
        },
        {
          name: "config",
          description:
            "Check Teleport config on the working Git directory. Or provide an action ('update' or 'reset') to configure the Git repo",
          args: {
            name: "action",
            description:
              "Optional action to perform. 'update' to configure the Git repo to proxy Git commands through Teleport. 'reset' to clear Teleport configuration from the Git repo",
            isOptional: true,
            suggestions: ["update", "reset"],
          },
        },
        {
          name: "clone",
          description: "Clone a Git repository",
          args: [
            {
              name: "repository",
              description: "Git URL of the repository to clone",
            },
            {
              name: "directory",
              description: "The name of a new directory to clone into",
              isOptional: true,
              template: "folders",
            },
          ],
        },
      ],
    },
    {
      name: "gh",
      description: "Run gh CLI commands through Teleport",
      parserDirectives: { optionsMustPrecedeArguments: true },
      args: {
        name: "args",
        description: "Arguments for the gh CLI, after '--'",
        isOptional: true,
        isVariadic: true,
      },
      options: [
        {
          name: "--github-org",
          description:
            "GitHub organization. Required when more than one GitHub organization is available",
          args: { name: "organization" },
        },
      ],
    },
    {
      name: ["beams", "beam"],
      description:
        "View, manage and run beams. Beams are ephemeral, sandbox VMs built for agentic workloads",
      subcommands: [
        {
          name: ["ls", "list"],
          description: "List beam instances",
          options: [
            {
              name: "--all",
              description:
                "List all beams. By default, filters to show only beams belonging to the current user",
            },
            formatOption(),
          ],
        },
        {
          name: "add",
          description: "Start a new beam, and optionally connect to it via SSH",
          options: [
            {
              name: "--no-console",
              description: "Do not connect to the beam via SSH after creation",
            },
            {
              name: "--region",
              description:
                "Region where the beam should live. If not specified, the closest region is selected",
              args: { name: "region" },
            },
            {
              name: "--roles",
              description:
                "Comma-separated list of roles that will be delegated to the beam",
              args: { name: "roles" },
            },
            {
              name: "--phase",
              description:
                "Phase name or name@sha256:digest snapshot to use for the beam",
              args: { name: "phase" },
            },
            formatOption(),
            {
              name: "--no-share-connected-accounts",
              description:
                "Do not share your connected accounts (such as GitHub) with the beam",
            },
          ],
        },
        {
          name: "rm",
          description: "Delete a beam",
          args: {
            name: "name",
            description: "ID (or UUID) of the beam to delete",
          },
        },
        {
          name: ["ssh", "console"],
          description: "Start an interactive shell in a beam, via SSH",
          args: {
            name: "name",
            description: "ID (or UUID) of the beam to connect to",
          },
        },
        {
          name: "exec",
          description: "Run a command in a beam, via SSH",
          args: [
            { name: "name", description: "ID (or UUID) of the beam to target" },
            {
              name: "command",
              description: "Command to execute in the instance",
              isVariadic: true,
            },
          ],
        },
        {
          name: "publish",
          description: "Publish an HTTP or TCP service running in a beam",
          args: {
            name: "name",
            description: "ID (or UUID) of the beam to target",
          },
          options: [
            {
              name: "--tcp",
              description: "Publish as a TCP app instead of an HTTP app",
            },
            formatOption(),
          ],
        },
        {
          name: "unpublish",
          description: "Unpublish a previously published service in a beam",
          args: {
            name: "name",
            description: "ID (or UUID) of the beam to target",
          },
        },
        {
          name: ["scp", "cp"],
          description: "Copy files between a beam and the local filesystem",
          args: [
            {
              name: "src",
              description:
                "Source path to copy, in the form BEAM_ID:PATH or LOCAL_PATH",
              template: "filepaths",
            },
            {
              name: "dest",
              description:
                "Destination path to copy, in the form BEAM_ID:PATH or LOCAL_PATH",
              template: "filepaths",
            },
          ],
          options: [
            {
              name: ["-r", "--recursive"],
              description: "Recursive copy of subdirectories",
            },
            quietOption(),
            formatOption(),
          ],
        },
        {
          name: "ide",
          description: "Open your IDE with a remote SSH session into a beam",
          args: {
            name: "beam",
            description: "Beam to open, specified by ID or UUID",
          },
          options: [
            {
              name: "--ide",
              description: "IDE to open. Prompts for a choice when omitted",
              args: { name: "ide", suggestions: ["vscode", "cursor", "zed"] },
            },
          ],
        },
      ],
    },
    {
      name: ["phase", "phases"],
      description: "Create and manage reusable Beam images",
      subcommands: [
        {
          name: "snapshot",
          description: "Save a snapshot to its existing Phase",
          args: {
            name: "name",
            description:
              "Existing Phase to save the snapshot to. Defaults to the local build Beam's Phase",
            isOptional: true,
          },
          options: [
            {
              name: "--from",
              description:
                "Snapshot source: this Phase's name or parent@sha256:digest. Omit to capture the local build Beam",
              args: { name: "source" },
            },
            {
              name: "--final",
              description:
                "Save the local snapshot and end this build. Changes after the snapshot are discarded",
            },
            {
              name: "--force",
              description:
                "Exclude changes outside /home and home paths reserved for rebuilds. Files in the running Beam are unchanged",
            },
            {
              name: "--format",
              description: "Output format (text, json, yaml)",
              args: { name: "format", suggestions: textFormats },
            },
          ],
        },
        {
          name: "add",
          description: "Create and build a Phase image",
          args: {
            name: "name",
            description: "Optional Phase name. If omitted, a name is generated",
            isOptional: true,
          },
          options: [
            {
              name: "--from",
              description: "Upstream Phase image to use as the base image",
              args: { name: "phase" },
            },
            {
              name: "--fork",
              description:
                "Capture the current build Beam's filesystem and start a new Phase from it",
            },
            {
              name: "--roles",
              description:
                "Comma-separated roles to delegate to Phase builds. Omit to inherit your delegation permissions",
              args: { name: "roles" },
            },
            {
              name: "--fork-from",
              description:
                "Fork a Phase name or parent@sha256:digest. Copy and rebuild Phases cannot be forked",
              args: { name: "source" },
            },
            ...phaseBuildOptions,
          ],
        },
        {
          name: "apply",
          description:
            "Create or update Phases from a multi-document YAML configuration",
          options: [
            {
              name: "--no-console",
              description:
                "Do not stream command logs while applying. All stages still finish before returning",
            },
            {
              name: ["-f", "--file"],
              description: "Path to a multi-document YAML Phase configuration",
              args: { name: "file", template: "filepaths" },
            },
            {
              name: "--region",
              description: "Region in which to build the Phases",
              args: { name: "region" },
            },
            {
              name: "--format",
              description: "Format output (text, json, yaml)",
              args: { name: "format", suggestions: textFormats },
            },
          ],
        },
        {
          name: "edit",
          description:
            "Edit an existing Phase in a build console or replace its build instructions",
          args: { name: "name", description: "Existing Phase to edit" },
          options: [
            {
              name: "--from",
              description:
                "Snapshot source: Phase name or parent@sha256:digest. Copy targets require --copy",
              args: { name: "source" },
            },
            ...phaseBuildOptions,
          ],
        },
        {
          name: ["ls", "list"],
          description: "List Phase images",
          options: [
            {
              name: "--all",
              description:
                "List all authorized Phases instead of only your own",
            },
            formatOption(),
          ],
        },
        {
          name: "ls-failed",
          description: "List failed Phase build snapshots",
          options: [
            {
              name: "--all",
              description:
                "List all authorized Phases instead of only your own",
            },
            formatOption(),
          ],
        },
        {
          name: "rm",
          description: "Delete a Phase image",
          args: { name: "name", description: "Name of the Phase to delete" },
        },
      ],
    },
    {
      name: "mcp",
      description: "View and control proxied MCP servers",
      subcommands: [
        {
          name: "ls",
          description: "List available MCP server applications",
          args: labelsArg,
          options: [
            verboseOption("Show extra MCP server fields"),
            searchOption,
            queryOption,
            formatOption(),
          ],
        },
        {
          name: "config",
          description: "Print client configuration details",
          args: {
            name: "name",
            description: "Name of the MCP server",
            isOptional: true,
          },
          options: [
            {
              name: ["-R", "--all"],
              description:
                "Select all MCP servers. Mutually exclusive with --labels or --query",
            },
            labelsOption,
            queryOption,
            ...mcpAutoReconnectOptions,
            ...mcpClientConfigOptions,
            mcpHeaderOption,
          ],
        },
        {
          name: "login",
          description: "Log in to an OAuth-protected MCP server",
          args: { name: "name", description: "Name of the MCP server" },
          options: [
            {
              name: "--client-id",
              description:
                "OAuth client ID for a pre-registered client. When set, dynamic client registration is skipped",
              args: { name: "client-id" },
            },
            {
              name: "--client-secret",
              description:
                "Prompt for the OAuth client secret of a pre-registered confidential client",
            },
            {
              name: "--callback-port",
              description:
                "Local OAuth callback port. Set this to the exact port registered with the OAuth provider",
              args: { name: "port" },
            },
            {
              name: "--redirect-uri",
              description:
                "Loopback OAuth redirect URI registered with the OAuth provider, such as http://localhost:3118/callback. Use it instead of --callback-port when the registered redirect URI does not use 127.0.0.1",
              args: { name: "uri" },
            },
            {
              name: "--oauth-scope",
              description:
                "OAuth scopes to request, separated by commas or spaces. This flag can be specified multiple times",
              isRepeatable: true,
              args: { name: "scope" },
            },
            browserOption,
          ],
        },
        {
          name: "logout",
          description: "Remove stored OAuth credentials for an MCP server",
          args: {
            name: "name",
            description:
              "Name of the MCP server. Removes credentials for all MCP servers when omitted",
            isOptional: true,
          },
        },
        {
          name: "db",
          description: "Database access for MCP servers",
          subcommands: [
            {
              name: "config",
              description: "Print client configuration details",
              args: {
                name: "name",
                description: "Database service name",
                isOptional: true,
              },
              options: [
                dbUserOption("Database user to log in as"),
                dbNameOption("Database name to log in to"),
                {
                  name: "--overwrite",
                  description:
                    "Overwrites command and environment variable from the config file",
                },
                ...mcpClientConfigOptions,
              ],
            },
          ],
        },
      ],
    },
    {
      name: "help",
      description: "Show help",
      args: {
        name: "command",
        description: "Command to show help for",
        isOptional: true,
        isVariadic: true,
      },
    },
  ],
  options: globalOptions.map((option): Fig.Option => ({
    ...option,
    isPersistent: true,
  })),
};
export default completionSpec;
