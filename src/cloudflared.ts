// cloudflared 2026.11.1 (newest git tag of cloudflare/cloudflared, same as the Homebrew formula, 2026-11-20).
// Source: urfave/cli definitions in cmd/cloudflared and cfapi at tag 2026.11.1, walked statically with a go/ast
// extractor (binary not installed). Hidden legacy flags (ssh server, quic tuning, ...) are left out on purpose.
import { filepaths } from "@tabsmith/autocomplete-generators";

// ponytail: upstream appends this note to every legacy origin flag
const legacyNote =
  "This flag only takes effect if you define your origin with --url and if you do not use ingress rules. The recommended way is to rely on ingress rules and define this property under `originRequest` as per https://developers.cloudflare.com/cloudflare-one/connections/connect-apps/configuration/configuration-file/ingress";

const logLevelArg: Fig.Arg = {
  name: "value",
  description: "Logging level",
  suggestions: ["debug", "info", "warn", "error", "fatal"],
};

const outputFormatOption: Fig.Option = {
  name: ["--output", "-o"],
  description:
    "Render output using given FORMAT. Valid options are 'json' or 'yaml'",
  args: {
    name: "FORMAT",
    description: "Format",
    suggestions: ["json", "yaml"],
  },
};

const logOutputOption: Fig.Option = {
  name: "--output",
  description:
    'Output format for the logs (default, json) (default: "default") [$TUNNEL_MANAGEMENT_OUTPUT, $TUNNEL_LOG_OUTPUT]',
  args: { name: "value", suggestions: ["default", "json"] },
};

const credentialsFileOption: Fig.Option = {
  name: ["--credentials-file", "--cred-file"],
  description:
    "Filepath at which to read/write the tunnel credentials [$TUNNEL_CRED_FILE]",
  args: {
    name: "value",
    description: "Filepath",
    template: "filepaths",
  },
};

const originCertOption: Fig.Option = {
  name: "--origincert",
  description:
    "Path to the certificate generated for your origin when you run cloudflared login. [$TUNNEL_ORIGIN_CERT]",
  args: {
    name: "value",
    description: "Certificate path",
    template: "filepaths",
  },
};

const tunnelLogLevelOption: Fig.Option = {
  name: "--loglevel",
  description:
    'Application logging level {debug, info, warn, error, fatal} (default: "info") [$TUNNEL_LOGLEVEL]',
  args: logLevelArg,
};

const overwriteDnsOption: Fig.Option = {
  name: ["--overwrite-dns", "-f"],
  description:
    "Overwrites existing DNS records with this hostname (default: false) [$TUNNEL_FORCE_PROVISIONING_DNS]",
};

const postQuantumOption: Fig.Option = {
  name: ["--post-quantum", "--pq"],
  description:
    "When given creates an experimental post-quantum secure tunnel [$TUNNEL_POST_QUANTUM]",
};

const protocolOption: Fig.Option = {
  name: ["--protocol", "-p"],
  description:
    'Protocol implementation to connect with Cloudflare\'s edge network (default: "auto") [$TUNNEL_TRANSPORT_PROTOCOL]',
  args: {
    name: "value",
    suggestions: [
      {
        name: "auto",
        description: "Starts with QUIC and falls back to HTTP/2 (recommended)",
      },
      { name: "quic", description: "Relies on UDP egress to Cloudflare edge" },
      { name: "http2", description: "Relies on TCP egress to Cloudflare edge" },
    ],
  },
};

const vnetOption: Fig.Option = {
  name: ["--vnet", "--vn"],
  description:
    "The ID or name of the virtual network to which the route is associated to",
  args: {
    name: "value",
    description: "Id or name",
  },
};

const showRecentlyDisconnectedOption: Fig.Option = {
  name: ["--show-recently-disconnected", "--rd"],
  description:
    "Include connections that have recently disconnected in the list (default: false)",
};

const makeDefaultVnetOption: Fig.Option = {
  name: ["--default", "-d"],
  description:
    "The virtual network becomes the default one for the account. This means that all operations that omit a virtual network will now implicitly be using this virtual network (i.e., the default one) such as new IP routes that are created. When this flag is not set, the virtual network will not become the default one in the account. (default: false)",
};

// Visible on both `cloudflared` and `cloudflared tunnel`
const edgeOptions: Fig.Option[] = [
  credentialsFileOption,
  {
    name: "--region",
    description:
      "Cloudflare Edge region to connect to. Omit or set to empty to connect to the global region. [$TUNNEL_REGION]",
    args: { name: "value", description: "Region", suggestions: ["us"] },
  },
  {
    name: "--edge-ip-version",
    description:
      'Cloudflare Edge IP address version to connect with. {4, 6, auto} (default: "auto") [$TUNNEL_EDGE_IP_VERSION]',
    args: { name: "value", suggestions: ["4", "6", "auto"] },
  },
  {
    name: "--edge-bind-address",
    description:
      "Bind to IP address for outgoing connections to Cloudflare Edge. [$TUNNEL_EDGE_BIND_ADDRESS]",
    args: { name: "value", description: "IP address" },
  },
  {
    name: "--label",
    description:
      "Use this option to give a meaningful label to a specific connector. Defaults to the hostname of the machine the tunnel is running on",
    args: { name: "value", description: "Label" },
  },
  postQuantumOption,
  {
    name: "--management-diagnostics",
    description:
      "Enables the in-depth diagnostic routes to be made available over the management service (/debug/pprof, /metrics, etc.) (default: true) [$TUNNEL_MANAGEMENT_DIAGNOSTICS]",
  },
  overwriteDnsOption,
];

// configureCloudflaredFlags upstream: options of `tunnel` relevant to `run`
const cloudflaredOptions: Fig.Option[] = [
  {
    name: "--config",
    description:
      "Specifies a config file in YAML format (default: first config.yml/config.yaml found in ~/.cloudflared, ~/.cloudflare-warp, ~/cloudflare-warp, /etc/cloudflared, /usr/local/etc/cloudflared)",
    args: {
      name: "value",
      description: "Config file",
      generators: filepaths({ extensions: ["yml", "yaml"] }),
    },
  },
  originCertOption,
  {
    name: "--autoupdate-freq",
    description: "Autoupdate frequency. Default is 24h0m0s. (default: 24h0m0s)",
    args: { name: "value", description: "Frequency" },
  },
  {
    name: "--no-autoupdate",
    description:
      "Disable periodic check for updates, restarting the server with the new version. (default: false) [$NO_AUTOUPDATE]",
  },
  {
    name: "--no-prechecks",
    description:
      "Skip connectivity pre-checks at startup. (default: false) [$TUNNEL_NO_PRECHECKS]",
  },
  {
    name: "--metrics",
    description:
      "Listen address for metrics reporting. If no address is passed cloudflared will try to bind to localhost:20241-20245, then a random port [$TUNNEL_METRICS]",
    args: { name: "value", description: "Address" },
  },
  {
    name: "--pidfile",
    description:
      "Write the application's PID to this file after first successful connection. [$TUNNEL_PIDFILE]",
    args: { name: "value", description: "PID file", template: "filepaths" },
  },
];

const loggingOptions: Fig.Option[] = [
  tunnelLogLevelOption,
  {
    name: ["--transport-loglevel", "--proto-loglevel"],
    description: "DEPRECATED. No longer has any effect",
    args: logLevelArg,
    deprecated: true,
  },
  {
    name: "--logfile",
    description:
      "Save application log to this file for reporting issues. [$TUNNEL_LOGFILE]",
    args: { name: "value", description: "File", template: "filepaths" },
  },
  {
    name: "--log-directory",
    description:
      "Save application log to this directory for reporting issues. [$TUNNEL_LOGDIRECTORY]",
    args: { name: "value", description: "Folder", template: "folders" },
  },
  {
    name: "--trace-output",
    description:
      "Name of trace output file, generated when cloudflared stops. [$TUNNEL_TRACE_OUTPUT]",
    args: { name: "value", description: "Name" },
  },
  logOutputOption,
];

// ConfigureProxyDNSFlags upstream: the proxy-dns feature was removed in 2026.2.0, the flags are only accepted so that
// existing scripts do not break. They are visible in upstream help with an empty usage
const proxyDnsNote =
  "Removed proxy-dns feature, only accepted for compatibility";
const proxyDnsOptions: Fig.Option[] = [
  { name: "--proxy-dns", description: proxyDnsNote, deprecated: true },
  {
    name: "--proxy-dns-port",
    description: proxyDnsNote,
    deprecated: true,
    args: { name: "value", description: "Port" },
  },
  {
    name: "--proxy-dns-address",
    description: proxyDnsNote,
    deprecated: true,
    args: { name: "value", description: "Address" },
  },
  {
    name: "--proxy-dns-upstream",
    description: proxyDnsNote,
    deprecated: true,
    isRepeatable: true,
    args: { name: "value", description: "Upstream" },
  },
  {
    name: "--proxy-dns-max-upstream-conns",
    description: proxyDnsNote,
    deprecated: true,
    args: { name: "value", description: "Max connections" },
  },
  {
    name: "--proxy-dns-bootstrap",
    description: proxyDnsNote,
    deprecated: true,
    isRepeatable: true,
    args: { name: "value", description: "Bootstrap" },
  },
];

// configureProxyFlags upstream: shared by `tunnel` and `tunnel run`
const proxyOptions: Fig.Option[] = [
  {
    name: "--url",
    description:
      'Connect to the local webserver at URL. (default: "http://localhost:8080") [$TUNNEL_URL]',
    args: { name: "URL", description: "Url" },
  },
  {
    name: "--hello-world",
    description:
      "Run Hello World Server (default: false) [$TUNNEL_HELLO_WORLD]",
  },
  {
    name: "--socks5",
    description: `Specify if this tunnel is running as a SOCK5 Server ${legacyNote} (default: false) [$TUNNEL_SOCKS]`,
    dependsOn: ["--url"],
  },
  {
    name: "--disable-path-normalization",
    description:
      "Disable URL path normalization before matching ingress rules. Use this setting at your own risk. An unnormalized request path could bypass Cloudflare Access rules and reach a protected origin (default: true) [$TUNNEL_DISABLE_PATH_NORMALIZATION]",
  },
  {
    name: "--proxy-connect-timeout",
    description: `HTTP proxy timeout for establishing a new connection ${legacyNote} (default: 30s)`,
    args: { name: "value", description: "Duration" },
    dependsOn: ["--url"],
  },
  {
    name: "--proxy-tls-timeout",
    description: `HTTP proxy timeout for completing a TLS handshake ${legacyNote} (default: 10s)`,
    args: { name: "value", description: "Duration" },
    dependsOn: ["--url"],
  },
  {
    name: "--proxy-tcp-keepalive",
    description: `HTTP proxy TCP keepalive duration ${legacyNote} (default: 30s)`,
    args: { name: "value", description: "Duration" },
    dependsOn: ["--url"],
  },
  {
    name: "--proxy-no-happy-eyeballs",
    description: `HTTP proxy should disable "happy eyeballs" for IPv4/v6 fallback ${legacyNote} (default: false)`,
    dependsOn: ["--url"],
  },
  {
    name: "--proxy-keepalive-connections",
    description: `HTTP proxy maximum keepalive connection pool size ${legacyNote} (default: 100)`,
    args: { name: "value", description: "Pool size" },
    dependsOn: ["--url"],
  },
  {
    name: "--proxy-keepalive-timeout",
    description: `HTTP proxy timeout for closing an idle connection ${legacyNote} (default: 1m30s)`,
    args: { name: "value", description: "Duration" },
    dependsOn: ["--url"],
  },
  {
    name: "--proxy-connection-timeout",
    description: "DEPRECATED. No longer has any effect. (default: 1m30s)",
    args: { name: "value" },
    deprecated: true,
  },
  {
    name: "--proxy-expect-continue-timeout",
    description: "DEPRECATED. No longer has any effect. (default: 1m30s)",
    args: { name: "value" },
    deprecated: true,
  },
  {
    name: "--http-host-header",
    description: `Sets the HTTP Host header for the local webserver. ${legacyNote} [$TUNNEL_HTTP_HOST_HEADER]`,
    args: { name: "value", description: "Host header" },
    dependsOn: ["--url"],
  },
  {
    name: "--origin-server-name",
    description: `Hostname on the origin server certificate. ${legacyNote} [$TUNNEL_ORIGIN_SERVER_NAME]`,
    args: { name: "value", description: "Hostname" },
    dependsOn: ["--url"],
  },
  {
    name: "--unix-socket",
    description:
      "Path to unix socket to use instead of --url [$TUNNEL_UNIX_SOCKET]",
    args: {
      name: "value",
      description: "Unix socket path",
      template: "filepaths",
    },
  },
  {
    name: "--origin-ca-pool",
    description: `Path to the CA for the certificate of your origin. This option should be used only if your certificate is not signed by Cloudflare. ${legacyNote} [$TUNNEL_ORIGIN_CA_POOL]`,
    args: { name: "value", description: "CA path", template: "filepaths" },
    dependsOn: ["--url"],
  },
  {
    name: "--no-tls-verify",
    description: `Disables TLS verification of the certificate presented by your origin. Will allow any certificate from the origin to be accepted. Note: The connection from your machine to Cloudflare's Edge is still encrypted. ${legacyNote} (default: false) [$NO_TLS_VERIFY]`,
    dependsOn: ["--url"],
  },
  {
    name: "--no-chunked-encoding",
    description: `Disables chunked transfer encoding; useful if you are running a WSGI server. ${legacyNote} (default: false) [$TUNNEL_NO_CHUNKED_ENCODING]`,
    dependsOn: ["--url"],
  },
  {
    name: "--http2-origin",
    description:
      "Enables HTTP/2 origin servers. (default: false) [$TUNNEL_ORIGIN_ENABLE_HTTP2]",
  },
  {
    name: "--bastion",
    description: "Runs as jump host (default: false) [$TUNNEL_BASTION]",
  },
  {
    name: "--proxy-address",
    description:
      'Listen address for the proxy. (default: "127.0.0.1") [$TUNNEL_PROXY_ADDRESS]',
    args: { name: "value", description: "Address" },
  },
  {
    name: "--proxy-port",
    description: "Listen port for the proxy. (default: 0) [$TUNNEL_PROXY_PORT]",
    args: { name: "value", description: "Port" },
  },
];

const tcp_rdp_ssh_smb_options: Fig.Option[] = [
  {
    name: ["--hostname", "--tunnel-host", "-T"],
    description:
      "Specify the hostname of your application. [$TUNNEL_SERVICE_HOSTNAME]",
    args: {
      name: "value",
      description: "Hostname",
    },
  },
  {
    name: "--destination",
    description:
      "Specify the destination address of your SSH server. [$TUNNEL_SERVICE_DESTINATION]",
    args: {
      name: "value",
      description: "Address of SSH server",
    },
  },
  {
    name: ["--url", "--listener", "-L"],
    description:
      "Specify the host:port to forward data to Cloudflare edge. [$TUNNEL_SERVICE_URL]",
    args: {
      name: "value",
      description: "Host:port to forward data to Cloudflare edge",
    },
  },
  {
    name: ["--header", "-H"],
    description: "Specify additional headers you wish to send",
    args: { name: "value", description: "Header" },
    isRepeatable: true,
  },
  {
    name: ["--service-token-id", "--id"],
    description:
      "Specify an Access service token ID you wish to use. [$TUNNEL_SERVICE_TOKEN_ID]",
    args: {
      name: "value",
      description: "Access service token ID",
    },
  },
  {
    name: ["--service-token-secret", "--secret"],
    description:
      "Specify an Access service token secret you wish to use. [$TUNNEL_SERVICE_TOKEN_SECRET]",
    args: {
      name: "value",
      description: "Access service token secret",
    },
  },
  {
    name: "--logfile",
    description: "Save application log to this file for reporting issues",
    args: { name: "value", description: "File", template: "filepaths" },
  },
  {
    name: "--log-directory",
    description: "Save application log to this directory for reporting issues",
    args: { name: "value", description: "Directory", template: "folders" },
  },
  {
    name: ["--log-level", "--loglevel"],
    description: "Application logging level {debug, info, warn, error, fatal}",
    args: logLevelArg,
  },
];

const update: Fig.Subcommand = {
  name: "update",
  description: "Update the agent if a new version exists",
  options: [
    {
      name: "--beta",
      description:
        "Specify if you wish to update to the latest beta version (default: false)",
    },
    {
      name: "--version",
      description: "Specify a version you wish to upgrade or downgrade to",
      args: {
        name: "value",
      },
    },
  ],
  args: {
    name: "arguments",
    isVariadic: true,
    isOptional: true,
  },
};

const version: Fig.Subcommand = {
  name: "version",
  description: "Print the version",
  options: [
    {
      name: ["--short", "-s"],
      description: "Print just the version number (default: false)",
    },
  ],
};

const proxyDns: Fig.Subcommand = {
  name: "proxy-dns",
  description:
    "DNS over HTTPS proxy, removed in 2026.2.0 (now only prints an error); use a DNS over HTTPS client instead",
  deprecated: true,
};

const service: Fig.Subcommand = {
  name: "service",
  description: "Manages the cloudflared launch agent",
  subcommands: [
    {
      name: "install",
      description: "Install cloudflared as an user launch agent",
      options: [
        {
          name: "--no-update-service",
          description:
            "Linux only: disable auto-update of the cloudflared linux service, which restarts the server to upgrade for new versions (default: false)",
        },
      ],
      args: {
        name: "TOKEN",
        description: "Tunnel token to write to the service configuration",
        isOptional: true,
      },
    },
    {
      name: "uninstall",
      description: "Uninstall the cloudflared launch agent",
    },
    {
      name: ["help", "h"],
      description: "Shows a list of commands or help for one command",
    },
  ],
};

const help: Fig.Subcommand = {
  name: "help",
  description: "Shows a list of commands or help for one command",
};

const access: Fig.Subcommand = {
  name: ["access", "forward"],
  description:
    "Cloudflare Access protects internal resources by securing, authenticating and monitoring access per-user and by application. With Cloudflare Access, only authenticated users with the required permissions are able to reach sensitive resources. The commands provided here allow you to interact with Access protected applications from the command line",
  options: [
    {
      name: "--fedramp",
      description:
        "Force the FedRAMP token transfer relay for Access authentication. Not usually needed: cloudflared selects it automatically when the application's verified auth domain is a FedRAMP domain (default: false)",
    },
  ],
  subcommands: [
    {
      name: "login",
      description:
        "The login subcommand initiates an authentication flow with your identity provider. The subcommand will launch a browser. For headless systems, a url is provided. Once authenticated with your identity provider, the login command will generate a JSON Web Token (JWT) scoped to your identity, the application you intend to reach, and valid for a session duration set by your administrator. cloudflared stores the token in local storage",
      displayName: "login <url of access application>",
      options: [
        {
          name: ["--quiet", "-q"],
          description: "Do not print the jwt to the command line",
        },
        {
          name: "--no-verbose",
          description: "Print only the jwt to stdout",
        },
        {
          name: "--auto-close",
          description: "Automatically close the auth interstitial after action",
        },
        {
          name: "--app",
          description: "Url of access application",
          args: { name: "value" },
        },
      ],
      args: {
        name: "url",
        isOptional: true,
      },
    },
    {
      name: "curl",
      description:
        "The curl subcommand wraps curl and automatically injects the JWT into a cf-access-token header when using curl to reach an application behind Access",
      options: [
        {
          name: ["--allow-request", "-ar"],
          description:
            "Allow the curl request to continue even if the jwt is not present",
        },
      ],
      args: [
        {
          name: "url",
        },
        { name: "curl args", isVariadic: true, isOptional: true },
      ],
    },
    {
      name: "token",
      description:
        "The token subcommand produces a JWT which can be used to authenticate requests",
      displayName: "token -app=<url of access application>",
      options: [
        {
          name: "--app",
          requiresSeparator: true,
          args: {
            name: "value",
            description: "Url of access application",
          },
        },
      ],
      args: {
        name: "url",
        isOptional: true,
      },
    },
    {
      name: "tcp",
      description:
        "The tcp subcommand sends data over a proxy to the Cloudflare edge",
      options: tcp_rdp_ssh_smb_options,
    },
    {
      name: "rdp",
      description:
        "The rdp subcommand sends data over a proxy to the Cloudflare edge",
      options: tcp_rdp_ssh_smb_options,
    },
    {
      name: "ssh",
      description:
        "The ssh subcommand sends data over a proxy to the Cloudflare edge",
      options: tcp_rdp_ssh_smb_options,
    },
    {
      name: "smb",
      description:
        "The smb subcommand sends data over a proxy to the Cloudflare edge",
      options: tcp_rdp_ssh_smb_options,
    },
    {
      name: "ssh-config",
      description: "Prints an example configuration ~/.ssh/config",
      options: [
        {
          name: "--hostname",
          description: "Specify the hostname of your application",
          args: {
            name: "value",
            description: "Hostname",
          },
          isRequired: true,
        },
        {
          name: "--short-lived-cert",
          description:
            "Specify if you wish to generate short lived certs. (default: false)",
        },
      ],
    },
    {
      name: "ssh-gen",
      description: "Generates a short lived certificate for given hostname",
      options: [
        {
          name: "--hostname",
          description: "Specify the hostname of your application",
          args: {
            name: "value",
            description: "Hostname",
          },
          isRequired: true,
        },
      ],
    },
    {
      name: ["help", "h"],
      description: "Shows a list of commands or help for one command",
    },
  ],
};

// Also registered (hidden) as a top-level command upstream, for compatibility
const tunnelLogin: Fig.Subcommand = {
  name: "login",
  description: "Generate a configuration file with your login details",
  options: [
    {
      name: "--loginURL",
      description:
        "The URL used to login (default is https://dash.cloudflare.com/argotunnel)",
      args: { name: "value" },
    },
    {
      name: "--callbackURL",
      description:
        "The URL used for the callback (default is https://login.cloudflareaccess.org/)",
      args: { name: "value" },
    },
    {
      name: ["--fedramp", "-f"],
      description: "Login with FedRAMP High environment (default: false)",
    },
  ],
};

// Hidden stub upstream, exits with "command is no longer supported"
const dbConnect: Fig.Subcommand = {
  name: "db-connect",
  description: "Removed command, no longer supported by cloudflared",
  deprecated: true,
  hidden: true,
};

const tunnel: Fig.Subcommand = {
  name: "tunnel",
  description:
    "Use Cloudflare Tunnel to expose private services to the Internet or to Cloudflare connected private users",
  subcommands: [
    tunnelLogin,
    {
      name: "create",
      description:
        'Creates a tunnel, registers it with Cloudflare edge and generates credential file used to run this tunnel. Use "cloudflared tunnel route" subcommand to map a DNS name to this tunnel and "cloudflared tunnel run" to start the connection',
      options: [
        outputFormatOption,
        credentialsFileOption,
        {
          name: ["--secret", "-s"],
          description:
            "Base64 encoded secret to set for the tunnel. The decoded secret must be at least 32 bytes long. If not specified, a random 32-byte secret will be generated. [$TUNNEL_CREATE_SECRET]",
          args: {
            name: "value",
            description: "Base 64 encoded secret",
          },
        },
      ],
      args: {
        name: "NAME",
      },
    },
    {
      name: "route",
      description:
        "The route command defines how Cloudflare will proxy requests to this tunnel",
      subcommands: [
        {
          name: "dns",
          description:
            "Creates a DNS CNAME record hostname that points to the tunnel",
          options: [overwriteDnsOption],
          args: [
            {
              name: "tunnel",
              description: "Tunnel",
            },
            {
              name: "hostname",
              description: "Hostname",
            },
          ],
        },
        {
          name: "lb",
          description:
            "Creates Load Balancer with an origin pool that points to the tunnel",
          args: [
            {
              name: "tunnel",
              description: "Tunnel",
            },
            {
              name: "hostname",
              description: "Hostname",
            },
            {
              name: "LB-POOL",
              description: "Load balancer pool",
            },
          ],
        },
        {
          name: "ip",
          description:
            "Configure and query Cloudflare WARP routing to private IP networks made available through Cloudflare Tunnels",
          subcommands: [
            {
              name: "add",
              description:
                "Add a new network to the routing table reachable via a Tunnel",
              options: [vnetOption],
              args: [
                { name: "CIDR" },
                { name: "TUNNEL" },
                { name: "COMMENT", isOptional: true },
              ],
            },
            {
              name: ["show", "list"],
              description:
                "Shows your organization private routing table. You can use flags to filter the results",
              options: [
                {
                  name: "--filter-is-deleted",
                  description:
                    "If false (default), only show non-deleted routes. If true, only show deleted routes. (default: false)",
                },
                {
                  name: "--filter-tunnel-id",
                  description: "Show only routes with the given tunnel ID",
                  args: {
                    name: "value",
                    description: "Id",
                  },
                },
                {
                  name: ["--filter-network-is-subset-of", "--nsub"],
                  description:
                    "Show only routes whose network is a subset of the given network",
                  args: {
                    name: "value",
                    description: "Network",
                  },
                },
                {
                  name: ["--filter-network-is-superset-of", "--nsup"],
                  description:
                    "Show only routes whose network is a superset of the given network",
                  args: {
                    name: "value",
                    description: "Network",
                  },
                },
                {
                  name: "--filter-comment-is",
                  description: "Show only routes with this comment",
                  args: {
                    name: "value",
                    description: "Comment",
                  },
                },
                {
                  name: "--filter-vnet-id",
                  description:
                    "Show only routes that are attached to the given virtual network ID",
                  args: {
                    name: "value",
                    description: "Vnet id",
                  },
                },
                outputFormatOption,
              ],
            },
            {
              name: "delete",
              description:
                "Delete a row from your organization's private routing table",
              options: [vnetOption],
              args: {
                name: "Route ID or CIDR",
              },
            },
            {
              name: "get",
              description:
                "Check which row of the routing table matches a given IP",
              options: [vnetOption],
              args: {
                name: "IP",
              },
            },
          ],
        },
      ],
    },
    {
      name: "vnet",
      description:
        "Configure and query virtual networks to manage private IP routes with overlapping IPs",
      subcommands: [
        {
          name: "add",
          description:
            "Add a new virtual network to which IP routes can be attached",
          options: [makeDefaultVnetOption],
          args: [{ name: "NAME" }, { name: "comment", isOptional: true }],
        },
        {
          name: "list",
          description:
            "Lists the virtual networks based on the given filter flags",
          options: [
            {
              name: "--id",
              description: "List virtual networks with the given ID",
              args: {
                name: "ID",
                description: "Id",
              },
            },
            {
              name: "--name",
              description: "List virtual networks with the given NAME",
              args: {
                name: "NAME",
                description: "Name",
              },
            },
            {
              name: "--is-default",
              description:
                "If true, lists the virtual network that is the default one. If false, lists all non-default virtual networks for the account. If absent, all are included in the results regardless of their default status. (default: false)",
            },
            {
              name: "--show-deleted",
              description:
                "If false (default), only show non-deleted virtual networks. If true, only show deleted virtual networks. (default: false)",
            },
            outputFormatOption,
          ],
        },
        {
          name: "delete",
          description: "Delete a virtual network",
          options: [
            {
              name: ["--force", "-f"],
              description:
                "Force the deletion of the virtual network even if it is being relied upon by other resources. Those resources will either be deleted (e.g. IP Routes) or moved to the current default virtual network (default: false)",
            },
          ],
          args: { name: "VIRTUAL_NETWORK" },
        },
        {
          name: "update",
          description: "Update a virtual network",
          options: [
            {
              name: ["--name", "-n"],
              description: "The new name for the virtual network",
              args: {
                name: "value",
                description: "Name",
              },
            },
            {
              name: ["--comment", "-c"],
              description:
                "A new comment describing the purpose of the virtual network",
              args: {
                name: "value",
                description: "Comment",
              },
            },
            makeDefaultVnetOption,
          ],
          args: { name: "VIRTUAL_NETWORK" },
        },
      ],
    },
    {
      name: "run",
      description: "Proxy a local web server by running the given tunnel",
      options: [
        credentialsFileOption,
        {
          name: "--credentials-contents",
          description:
            "Contents of the tunnel credentials JSON file to use. When provided along with credentials-file, this will take precedence. [$TUNNEL_CRED_CONTENTS]",
          args: {
            name: "value",
            description: "Contents of the tunnel credentials JSON",
          },
        },
        postQuantumOption,
        protocolOption,
        {
          name: ["--features", "-F"],
          description:
            "Opt into various features that are still being developed or tested.  (accepts multiple inputs)",
          args: {
            name: "value",
            description: "Features",
          },
          isRepeatable: true,
        },
        {
          name: "--token",
          description:
            "The Tunnel token. When provided along with credentials, this will take precedence. Also takes precedence over token-file [$TUNNEL_TOKEN]",
          args: {
            name: "value",
            description: "Tunnel token",
          },
        },
        {
          name: "--token-file",
          description:
            "Filepath at which to read the tunnel token. When provided along with credentials, this will take precedence. [$TUNNEL_TOKEN_FILE]",
          args: {
            name: "value",
            description: "Token file",
            template: "filepaths",
          },
        },
        {
          name: "--icmpv4-src",
          description:
            "Source address to send/receive ICMPv4 messages. If not provided cloudflared will dial a local address to determine the source IP or fallback to 0.0.0.0. [$TUNNEL_ICMPV4_SRC]",
          args: { name: "value", description: "Address" },
        },
        {
          name: "--icmpv6-src",
          description:
            "Source address and the interface name to send/receive ICMPv6 messages. If not provided cloudflared will dial a local address to determine the source IP or fallback to ::. [$TUNNEL_ICMPV6_SRC]",
          args: { name: "value", description: "Address" },
        },
        {
          name: "--max-active-flows",
          description:
            "Overrides the remote configuration for max active private network flows (TCP/UDP) that this cloudflared instance supports [$TUNNEL_MAX_ACTIVE_FLOWS]",
          args: { name: "value", description: "Flows" },
        },
        {
          name: "--dns-resolver-addrs",
          description:
            "Overrides the dynamic DNS resolver resolution to use these address:port's instead. [$TUNNEL_DNS_RESOLVER_ADDRS]",
          args: { name: "value", description: "Address:port" },
          isRepeatable: true,
        },
        ...proxyOptions,
      ],
      args: {
        name: "TUNNEL",
        description: "Tunnel name or UUID",
        isOptional: true,
      },
    },
    {
      name: "list",
      description:
        "Cloudflared tunnel list will display all active tunnels, their created time and associated connections",
      options: [
        outputFormatOption,
        {
          name: ["--show-deleted", "-d"],
          description: "Include deleted tunnels in the list (default: false)",
        },
        {
          name: ["--name", "-n"],
          description: "List tunnels with the given NAME",
          args: {
            name: "NAME",
            description: "Name",
          },
        },
        {
          name: ["--name-prefix", "--np"],
          description: "List tunnels that start with the give NAME prefix",
          args: {
            name: "NAME",
            description: "Name prefix",
          },
        },
        {
          name: ["--exclude-name-prefix", "--enp"],
          description:
            "List tunnels whose NAME does not start with the given prefix",
          args: {
            name: "NAME",
            description: "Prefix",
          },
        },
        {
          name: ["--when", "-w"],
          description:
            "List tunnels that are active at the given TIME in RFC3339 format (default: current time)",
          args: {
            name: "TIME",
            description: "Time in RFC3339 format",
          },
        },
        {
          name: ["--id", "-i"],
          description: "List tunnel by ID",
          args: {
            name: "ID",
            description: "Id",
          },
        },
        showRecentlyDisconnectedOption,
        {
          name: "--sort-by",
          description:
            'Sorts the list of tunnels by the given field. Valid options are {name, id, createdAt, deletedAt, numConnections} (default: "name") [$TUNNEL_LIST_SORT_BY]',
          args: {
            name: "value",
            description: "Field",
            suggestions: [
              "name",
              "id",
              "createdAt",
              "deletedAt",
              "numConnections",
            ],
          },
        },
        {
          name: "--invert-sort",
          description:
            "Inverts the sort order of the tunnel list. (default: false) [$TUNNEL_LIST_INVERT_SORT]",
        },
      ],
    },
    {
      name: "ready",
      description:
        "Call /ready endpoint and return proper exit code (needs tunnel --metrics)",
    },
    {
      name: "info",
      description:
        "Cloudflared tunnel info displays details about the active connectors for a given tunnel (identified by name or uuid)",
      options: [
        outputFormatOption,
        showRecentlyDisconnectedOption,
        {
          name: "--sort-by",
          description:
            'Sorts the list of connections of a tunnel by the given field (default: "createdAt") [$TUNNEL_INFO_SORT_BY]',
          args: {
            name: "value",
            description: "Field",
            suggestions: ["id", "createdAt", "numConnections", "version"],
          },
        },
        {
          name: "--invert-sort",
          description:
            "Inverts the sort order of the tunnel info. (default: false) [$TUNNEL_INFO_INVERT_SORT]",
        },
      ],
      args: {
        name: "TUNNEL",
        description: "Tunnel",
      },
    },
    {
      name: "ingress",
      description:
        "Validate and test cloudflared tunnel's ingress configuration",
      subcommands: [
        {
          name: "validate",
          description:
            "Validates the configuration file, ensuring your ingress rules are OK",
          options: [
            {
              name: ["--json", "-j"],
              description:
                "Accepts a config in the form of json (as a command line argument) rather than read from a file [$TUNNEL_INGRESS_VALIDATE_JSON]",
              args: { name: "value", description: "JSON config" },
            },
          ],
        },
        {
          name: "rule",
          description: "Check which ingress rule matches a given request URL",
          args: { name: "URL" },
        },
      ],
    },
    {
      name: "delete",
      description:
        "Cloudflared tunnel delete will delete tunnels with the given tunnel UUIDs or names. A tunnel cannot be deleted if it has active connections. To delete the tunnel unconditionally, use -f flag",
      options: [
        credentialsFileOption,
        {
          name: ["--force", "-f"],
          description:
            "Deletes a tunnel even if tunnel is connected and it has dependencies associated to it. (eg. IP routes). It is not possible to delete tunnels that have connections or non-deleted dependencies, without this flag. (default: false) [$TUNNEL_RUN_FORCE_OVERWRITE]",
        },
      ],
      args: {
        name: "TUNNEL",
        description: "Tunnel",
        isVariadic: true,
      },
    },
    {
      name: "cleanup",
      description:
        "Delete connections for tunnels with the given UUIDs or names",
      options: [
        {
          name: ["--connector-id", "-c"],
          description:
            "Constraints the cleanup to stop the connections of a single Connector (by its ID). You can find the various Connectors (and their IDs) currently connected to your tunnel via 'cloudflared tunnel info <name>'. [$TUNNEL_CLEANUP_CONNECTOR]",
          args: { name: "value", description: "Connector ID" },
        },
      ],
      args: {
        name: "TUNNEL",
        description: "Tunnel",
        isVariadic: true,
      },
    },
    {
      name: "token",
      description:
        "Fetch the credentials token for an existing tunnel (by name or UUID) that allows to run it",
      options: [credentialsFileOption],
      args: {
        name: "TUNNEL",
        description: "Tunnel",
      },
    },
    {
      name: "diag",
      description:
        "Creates a diagnostic report from a local cloudflared instance",
      options: [
        {
          name: "--metrics",
          description:
            "The metrics server address i.e.: 127.0.0.1:12345. If your instance is running in a Docker/Kubernetes environment you need to setup port forwarding for your application",
          args: { name: "value", description: "Address" },
        },
        {
          name: "--diag-container-id",
          description: "Container ID or Name to collect logs from",
          args: { name: "value", description: "Container" },
        },
        {
          name: "--diag-pod-id",
          description: "Kubernetes POD to collect logs from",
          args: { name: "value", description: "Pod" },
        },
        {
          name: "--no-diag-logs",
          description: "Log collection will not be performed (default: false)",
        },
        {
          name: "--no-diag-metrics",
          description:
            "Metric collection will not be performed (default: false)",
        },
        {
          name: "--no-diag-system",
          description:
            "System information collection will not be performed (default: false)",
        },
        {
          name: "--no-diag-runtime",
          description:
            "Runtime information collection will not be performed (default: false)",
        },
        {
          name: "--no-diag-network",
          description:
            "Network diagnostics won't be performed (default: false)",
        },
      ],
    },
    proxyDns,
    dbConnect,
    {
      name: ["help", "h"],
      description: "Shows a list of commands or help for one command",
    },
  ],
  options: [
    ...cloudflaredOptions,
    ...proxyOptions,
    ...loggingOptions,
    ...proxyDnsOptions,
    ...edgeOptions,
    {
      name: "--hostname",
      description:
        "Set a hostname on a Cloudflare zone to route traffic through this tunnel. [$TUNNEL_HOSTNAME]",
      args: { name: "value", description: "Hostname" },
    },
    {
      name: "--lb-pool",
      description:
        "The name of a (new/existing) load balancing pool to add this origin to. [$TUNNEL_LB_POOL]",
      args: { name: "value", description: "Pool name" },
    },
    {
      name: "--metrics-update-freq",
      description:
        "Frequency to update tunnel metrics (default: 5s) [$TUNNEL_METRICS_UPDATE_FREQ]",
      args: { name: "value", description: "Frequency" },
    },
    {
      name: "--tag",
      description:
        "Custom tags used to identify this tunnel via added HTTP request headers to the origin, in format KEY=VALUE. Multiple tags may be specified [$TUNNEL_TAG]",
      args: {
        name: "KEY=VALUE",
        description: "Tag",
      },
      isRepeatable: true,
    },
    {
      name: "--retries",
      description:
        "Maximum number of retries for connection/protocol errors. (default: 5) [$TUNNEL_RETRIES]",
      args: { name: "value", description: "Max retries" },
    },
    {
      name: "--grace-period",
      description:
        "When cloudflared receives SIGINT/SIGTERM it will stop accepting new requests, wait for in-progress requests to terminate, then shutdown. Waiting for in-progress requests will timeout after this grace period, or when a second SIGTERM/SIGINT is received. (default: 30s) [$TUNNEL_GRACE_PERIOD]",
      args: { name: "value", description: "Duration" },
    },
    {
      name: "--compression-quality",
      description:
        "(beta) Use cross-stream compression instead HTTP compression. 0-off, 1-low, 2-medium, >=3-high. (default: 0) [$TUNNEL_COMPRESSION_LEVEL]",
      args: {
        name: "value",
        description: "Compression quality",
        suggestions: [
          { name: "0", description: "Off" },
          { name: "1", description: "Low" },
          { name: "2", description: "Medium" },
          { name: "3", description: "High" },
        ],
      },
    },
    {
      name: ["--name", "-n"],
      description:
        "Stable name to identify the tunnel. Using this flag will create, route and run a tunnel. For production usage, execute each command separately [$TUNNEL_NAME]",
      args: { name: "value", description: "Name" },
    },
    {
      name: "--allowed-mail",
      description:
        "Email addresses or wildcard domains allowed to access a protected Quick Tunnel. May be repeated or comma-separated",
      args: { name: "value", description: "Email or domain" },
      isRepeatable: true,
    },
    protocolOption,
    {
      name: "--ui",
      description:
        "(deprecated) Launch tunnel UI. Tunnel logs are scrollable via 'j', 'k', or arrow keys. (default: false)",
      deprecated: true,
    },
  ],
  args: {
    name: "command options",
    isOptional: true,
  },
};

const tail: Fig.Subcommand = {
  name: "tail",
  description: "Stream logs from a remote cloudflared",
  subcommands: [
    {
      name: "token",
      description: "Get management access jwt for a tunnel",
      hidden: true,
      args: { name: "TUNNEL_ID" },
    },
  ],
  options: [
    {
      name: "--connector-id",
      description:
        "Access a specific cloudflared instance by connector id (for when a tunnel has multiple cloudflared's) [$TUNNEL_MANAGEMENT_CONNECTOR]",
      args: { name: "value", description: "Connector ID" },
    },
    {
      name: "--event",
      description:
        "Filter by specific Events (cloudflared, http, tcp, udp) otherwise, defaults to send all events [$TUNNEL_MANAGEMENT_FILTER_EVENTS]",
      args: {
        name: "value",
        suggestions: ["cloudflared", "http", "tcp", "udp"],
      },
      isRepeatable: true,
    },
    {
      name: "--level",
      description:
        'Filter by specific log levels (debug, info, warn, error). Filters by debug log level by default (default: "debug") [$TUNNEL_MANAGEMENT_FILTER_LEVEL]',
      args: {
        name: "value",
        suggestions: ["debug", "info", "warn", "error"],
      },
    },
    {
      name: "--sample",
      description:
        "Sample log events by percentage (0.0 .. 1.0). No sampling by default (default: 1) [$TUNNEL_MANAGEMENT_FILTER_SAMPLE]",
      args: { name: "value", description: "Ratio" },
    },
    {
      name: "--token",
      description:
        "Access token for a specific tunnel [$TUNNEL_MANAGEMENT_TOKEN]",
      args: { name: "value", description: "Token" },
    },
    tunnelLogLevelOption,
    originCertOption,
    logOutputOption,
  ],
  args: {
    name: "TUNNEL-ID",
    isOptional: true,
  },
};

const management: Fig.Subcommand = {
  name: "management",
  description: "Monitor cloudflared tunnels via management API",
  hidden: true,
  subcommands: [
    {
      name: "token",
      description: "Get management access jwt for a specific resource",
      options: [
        {
          name: "--resource",
          description: "Resource type for token permissions",
          args: {
            name: "value",
            suggestions: ["logs", "admin", "host_details"],
          },
          isRequired: true,
        },
        originCertOption,
        tunnelLogLevelOption,
        logOutputOption,
      ],
      args: { name: "TUNNEL_ID" },
    },
  ],
};

const completionSpec: Fig.Spec = {
  name: "cloudflared",
  description:
    "Cloudflared connects your machine or user identity to Cloudflare's global network",
  subcommands: [
    update,
    version,
    proxyDns,
    service,
    help,
    access,
    tunnel,
    { ...tunnelLogin, hidden: true },
    dbConnect,
    tail,
    management,
  ],
  options: [
    ...edgeOptions,
    logOutputOption,
    ...proxyDnsOptions,
    {
      name: ["--version", "-v", "-V"],
      description: "Print the version",
    },
    {
      name: ["--help", "-h"],
      description: "Show help for cloudflared",
      isPersistent: true,
    },
  ],
};
export default completionSpec;
