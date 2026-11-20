// Tailscale v1.104.7 (latest stable git tag tailscale/tailscale v1.104.7, matches the Homebrew formula, 2026-11-20).
// Source: static read of cmd/tailscale/cli/*.go (ffcli command and flag definitions) at tag v1.104.7;
// the binary was not built or run. Platform-specific flags (Linux, FreeBSD, Windows, macOS) are all included.
// Intentionally omitted: the hidden/unstable "debug" tree, "update"'s gokrazy-only flags, deprecated aliases
// (--authkey, --posture-checking, "lock tskey-wrap") and "exit-node connect|disconnect" (only with TS_DEBUG_USE_WIP_CODE).

const hostsGenerator = ({
  append,
}: { append?: string } = {}): Fig.Generator => ({
  script: ["tailscale", "status", "--json"],
  postProcess: (output: string) =>
    Object.values(JSON.parse(output)["Peer"] ?? {}).map((peer) => ({
      name: `${peer["DNSName"].split(".")[0]}${append ?? ""}`,
      displayName: peer["HostName"],
      description: peer["OS"],
    })),
});

const exitNodesGenerator: Fig.Generator = {
  script: ["tailscale", "status", "--json"],
  postProcess: (output: string) =>
    Object.values(JSON.parse(output)["Peer"] ?? {})
      .filter((peer) => peer["ExitNodeOption"])
      .map((peer) => ({
        name: peer["DNSName"].replace(/\.$/, ""),
        displayName: peer["HostName"],
        description: peer["OS"],
      })),
};

const profilesGenerator: Fig.Generator = {
  script: ["tailscale", "switch", "--list", "--json"],
  postProcess: (output: string) =>
    JSON.parse(output).map((profile) => ({
      name: profile["id"],
      description: `${profile["tailnet"]} (${profile["account"]})`,
    })),
};

const certDomainsGenerator: Fig.Generator = {
  script: ["tailscale", "status", "--json"],
  postProcess: (output: string) =>
    (JSON.parse(output)["CertDomains"] ?? []).map((domain: string) => ({
      name: domain,
    })),
};

const jsonOption: Fig.Option = {
  name: "--json",
  description: "Output in JSON format",
};

const acceptRiskOption: Fig.Option = {
  name: "--accept-risk",
  description: "Accept risk and skip confirmation for the given risk types",
  args: {
    name: "risks",
    suggestions: ["lose-ssh", "mac-app-connector", "all"],
  },
};

const reasonOption = (action: string): Fig.Option => ({
  name: "--reason",
  description: `Reason for the ${action}, if required by a policy`,
  args: {
    name: "reason",
  },
});

const trackOption = (description: string): Fig.Option => ({
  name: "--track",
  description,
  args: {
    name: "track",
    suggestions: ["stable", "release-candidate", "unstable"],
  },
});

const exitNodeOption: Fig.Option = {
  name: "--exit-node",
  description:
    "Tailscale exit node (IP, base name, or auto:any) for internet traffic, or empty string to not use an exit node",
  args: {
    name: "exitnode",
    generators: exitNodesGenerator,
    suggestions: [
      {
        name: "auto:any",
        description: "Automatically pick a suitable exit node",
      },
    ],
  },
};

// Preferences accepted by "up", "login" and "set"
const prefsOptions: Fig.Option[] = [
  {
    name: "--accept-dns",
    description: "Accept DNS configuration from the admin panel",
  },
  {
    name: "--accept-routes",
    description: "Accept routes advertised by other Tailscale nodes",
  },
  {
    name: "--advertise-connector",
    description: "Advertise this node as an app connector",
  },
  {
    name: "--advertise-exit-node",
    description:
      "Offer to be an exit node for internet traffic for the tailnet",
  },
  {
    name: "--advertise-routes",
    description:
      'Routes to advertise to other nodes (comma-separated, e.g. "10.0.0.0/8,192.168.0.0/24") or empty string to not advertise routes',
    args: {
      name: "routes",
    },
  },
  exitNodeOption,
  {
    name: "--exit-node-allow-lan-access",
    description:
      "Allow direct access to the local network when routing traffic via an exit node",
  },
  {
    name: "--hostname",
    description: "Hostname to use instead of the one provided by the OS",
    args: {
      name: "hostname",
    },
  },
  {
    name: "--netfilter-mode",
    description: "Netfilter mode (Linux only)",
    args: {
      name: "mode",
      suggestions: [
        { name: "on", description: "Full netfilter management" },
        { name: "nodivert", description: "Do not divert the built-in chains" },
        { name: "off", description: "Do not manage netfilter rules" },
      ],
    },
  },
  {
    name: "--operator",
    description: "Unix username to allow to operate on tailscaled without sudo",
    args: {
      name: "username",
      suggestions: ["$USER"],
    },
  },
  {
    name: "--report-posture",
    description: "Allow management plane to gather device posture information",
  },
  {
    name: "--shields-up",
    description: "Don't allow incoming connections",
  },
  {
    name: "--snat-subnet-routes",
    description:
      "Source NAT traffic to local routes advertised with --advertise-routes (Linux and FreeBSD only)",
  },
  {
    name: "--ssh",
    description:
      "Run an SSH server, permitting access per tailnet admin's declared policy",
  },
  {
    name: "--stateful-filtering",
    description:
      "Apply stateful filtering to forwarded packets such as subnet routers and exit nodes (Linux only)",
  },
  {
    name: "--unattended",
    description:
      'Run in "Unattended Mode" where Tailscale keeps running even after the current GUI user logs out (Windows only)',
  },
];

// Flags shared by "up" and "login"
const loginOptions: Fig.Option[] = [
  {
    name: "--advertise-tags",
    description:
      'Comma-separated ACL tags to request (e.g. "tag:eng,tag:montreal,tag:ssh"); the "tag:" prefix is optional and added automatically when omitted',
    args: {
      name: "tags",
    },
  },
  {
    name: "--audience",
    description:
      "Audience used when requesting an ID token from an identity provider for auth keys via workload identity federation",
    args: {
      name: "audience",
    },
  },
  {
    name: "--auth-key",
    description:
      'Node authorization key; if it begins with "file:", then it\'s a path to a file containing the authkey',
    args: {
      name: "authkey",
    },
  },
  {
    name: "--client-id",
    description:
      "Client ID used to generate authkeys via workload identity federation",
    args: {
      name: "client-id",
    },
  },
  {
    name: "--client-secret",
    description:
      'Client Secret used to generate authkeys via OAuth; if it begins with "file:", then it\'s a path to a file containing the secret',
    args: {
      name: "client-secret",
    },
  },
  {
    name: "--host-routes",
    description:
      "Install host routes to other Tailscale nodes (must be true as of Tailscale 1.67+)",
    hidden: true,
  },
  {
    name: "--id-token",
    description:
      'ID token from the identity provider to exchange with the control server for workload identity federation; if it begins with "file:", then it\'s a path to a file containing the token',
    args: {
      name: "id-token",
    },
  },
  {
    name: "--login-server",
    description: "Base URL of control server",
    args: {
      name: "url",
      default: "https://controlplane.tailscale.com",
    },
  },
  {
    name: "--qr",
    description: "Show QR code for login URLs",
  },
  {
    name: "--qr-format",
    description: "QR code formatting",
    args: {
      name: "format",
      default: "auto",
      suggestions: ["auto", "ascii", "large", "small"],
    },
  },
  {
    name: "--timeout",
    description:
      "Maximum amount of time to wait for tailscaled to enter a Running state; default (0s) blocks forever",
    args: {
      name: "duration",
      default: "0s",
    },
  },
  ...prefsOptions,
];

const nicknameOption = (description: string): Fig.Option => ({
  name: "--nickname",
  description,
  args: {
    name: "nickname",
  },
});

const serveOptions = (isServe: boolean): Fig.Option[] => [
  {
    name: "--bg",
    description:
      "Run the command as a background process (defaults to true when --service is set)",
  },
  {
    name: "--https",
    description: "Expose an HTTPS server at the specified port (default mode)",
    args: { name: "port" },
  },
  ...(isServe
    ? [
        {
          name: "--http",
          description: "Expose an HTTP server at the specified port",
          args: { name: "port" },
        } satisfies Fig.Option,
        {
          name: "--accept-app-caps",
          description:
            "App capabilities to forward to the server (specify multiple capabilities with a comma-separated list)",
          args: { name: "capabilities" },
        } satisfies Fig.Option,
        {
          name: "--service",
          description:
            "Serve for a service with distinct virtual IP instead on node itself",
          args: { name: "service", description: "Service name (svc:name)" },
        } satisfies Fig.Option,
      ]
    : []),
  {
    name: "--proxy-protocol",
    description: "PROXY protocol version for TCP forwarding",
    args: { name: "version", suggestions: ["1", "2"] },
  },
  {
    name: "--set-path",
    description:
      "Appends the specified path to the base URL for accessing the underlying service",
    args: { name: "path" },
  },
  {
    name: "--tcp",
    description:
      "Expose a TCP forwarder to forward raw TCP packets at the specified port",
    args: { name: "port" },
  },
  {
    name: "--tls-terminated-tcp",
    description:
      "Expose a TCP forwarder to forward TLS-terminated TCP packets at the specified port",
    args: { name: "port" },
  },
  ...(isServe
    ? [
        {
          name: "--tun",
          description:
            "Forward all traffic to the local machine, only supported for services",
        } satisfies Fig.Option,
      ]
    : []),
  {
    name: "--yes",
    description: "Update without interactive prompts",
  },
];

const serveTarget: Fig.Arg[] = [
  {
    name: "target",
    description:
      "File, directory, text, port, URL (e.g. localhost:3000, http://localhost:3000/foo) or unix:/path/to/socket",
    isOptional: true,
    template: ["filepaths"],
  },
  {
    name: "off",
    description: "Turn the given serve configuration off",
    isOptional: true,
    suggestions: ["off"],
  },
];

const serveStatusSubcommands = (name: string): Fig.Subcommand[] => [
  {
    name: "status",
    description: `View current ${name} configuration`,
    options: [{ name: "--json", description: "Output JSON" }],
  },
  {
    name: "reset",
    description: `Reset current ${name} config`,
  },
];

const serviceArg: Fig.Arg = {
  name: "service",
  description: "Service name (e.g. svc:my-service)",
};

const serviceConfigOptions = (verb: string): Fig.Option[] => [
  {
    name: "--all",
    description: `${verb} all services`,
  },
  {
    name: "--service",
    description: `${verb} a particular service`,
    args: { name: "service" },
  },
];

const spec: Fig.Spec = {
  name: "tailscale",
  description: "The easiest, most secure way to use WireGuard",
  subcommands: [
    {
      name: "up",
      description: "Connect to Tailscale, logging in if needed",
      options: [
        ...loginOptions,
        jsonOption,
        {
          name: "--force-reauth",
          description: "Force reauthentication",
        },
        {
          name: "--reset",
          description: "Reset unspecified settings to their default values",
        },
        acceptRiskOption,
      ],
    },
    {
      name: "down",
      description: "Disconnect from Tailscale",
      options: [reasonOption("disconnect"), acceptRiskOption],
    },
    {
      name: "set",
      description: "Change specified preferences",
      options: [
        ...prefsOptions,
        {
          name: "--auto-update",
          description: "Automatically update to the latest available version",
        },
        nicknameOption("Nickname for the current account"),
        {
          name: "--relay-server-port",
          description:
            "UDP port number (0 will pick a random unused port) for the relay server to bind to, on all interfaces, or empty string to disable relay server functionality",
          args: { name: "port" },
        },
        {
          name: "--relay-server-static-endpoints",
          description:
            'Static IP:port endpoints to advertise as candidates for relay connections (comma-separated, e.g. "[2001:db8::1]:40000,192.0.2.1:40000") or empty string to not advertise any static endpoints',
          args: { name: "endpoints" },
        },
        {
          name: "--remote-config",
          description:
            "Delegate full remote control of this node's prefs and LocalAPI to the tailnet admin",
          hidden: true,
        },
        {
          name: "--sync",
          description:
            "Actively sync configuration from the control plane (set to false only for network failure testing)",
          hidden: true,
        },
        {
          name: "--update-check",
          description: "Notify about available Tailscale updates",
        },
        {
          name: "--webclient",
          description:
            "Expose the web interface for managing this node over Tailscale at port 5252",
        },
        acceptRiskOption,
      ],
    },
    {
      name: "get",
      description: "Show current preference values",
      options: [
        jsonOption,
        {
          name: "--set-flags",
          description: 'Output as "tailscale set" flag arguments',
        },
      ],
      args: {
        name: "setting-name",
        description: 'A setting name accepted by "tailscale set", or "all"',
        isOptional: true,
        suggestions: [
          "all",
          "accept-dns",
          "accept-routes",
          "advertise-connector",
          "advertise-exit-node",
          "advertise-routes",
          "auto-update",
          "exit-node",
          "exit-node-allow-lan-access",
          "hostname",
          "netfilter-mode",
          "nickname",
          "operator",
          "relay-server-port",
          "relay-server-static-endpoints",
          "report-posture",
          "shields-up",
          "snat-subnet-routes",
          "ssh",
          "stateful-filtering",
          "unattended",
          "update-check",
          "webclient",
        ],
      },
    },
    {
      name: "login",
      description: "Log in to a Tailscale account",
      options: [...loginOptions, nicknameOption("Short name for the account")],
    },
    {
      name: "logout",
      description: "Disconnect from Tailscale and expire current node key",
      options: [reasonOption("logout")],
    },
    {
      name: "switch",
      description: "Switch to a different Tailscale account",
      subcommands: [
        {
          name: "remove",
          description: "Remove a Tailscale account",
          args: {
            name: "id",
            generators: profilesGenerator,
          },
        },
      ],
      options: [
        {
          name: "--list",
          description: "List available accounts",
        },
        {
          name: "--json",
          description: "List available accounts in JSON format",
        },
      ],
      args: {
        name: "id",
        description: "Account ID, tailnet, account name or display name",
        isOptional: true,
        generators: profilesGenerator,
      },
    },
    {
      name: "configure",
      description: "Configure the host to enable more Tailscale features",
      subcommands: [
        {
          name: "kubeconfig",
          description:
            "[ALPHA] Connect to a Kubernetes cluster using a Tailscale Auth Proxy",
          options: [
            {
              name: "--http",
              description:
                "Use HTTP instead of HTTPS to connect to the auth proxy; ignored if you include a scheme in the hostname argument",
            },
          ],
          args: {
            name: "hostname-or-fqdn",
            generators: hostsGenerator(),
          },
        },
        {
          name: "synology",
          description: "Configure Synology to enable outbound connections",
        },
        {
          name: "synology-cert",
          description:
            "Configure Synology with a TLS certificate for your tailnet",
          options: [
            {
              name: "--domain",
              description:
                "Tailnet domain to create or refresh certificates for; ignored if only one domain exists",
              args: { name: "domain", generators: certDomainsGenerator },
            },
          ],
        },
        {
          name: "systray",
          description: "[ALPHA] Manage the systray client for Linux",
          options: [
            {
              name: "--enable-startup",
              description:
                "Install startup script for the given init system (Linux only)",
              args: {
                name: "init-system",
                suggestions: ["systemd", "freedesktop"],
              },
            },
          ],
        },
        {
          name: "jetkvm",
          description: "Configure JetKVM to run tailscaled at boot",
        },
        {
          name: "sysext",
          description:
            "Manage the system extension for macOS (Standalone variant)",
          subcommands: [
            {
              name: "activate",
              description: "Register the Tailscale system extension with macOS",
            },
            {
              name: "deactivate",
              description: "Deactivate the Tailscale system extension on macOS",
            },
            {
              name: "status",
              description:
                "Print the enablement status of the Tailscale system extension",
            },
          ],
        },
        {
          name: "mac-vpn",
          description:
            "Manage the VPN configuration on macOS (App Store and Standalone variants)",
          subcommands: [
            {
              name: "install",
              description:
                "Write the Tailscale VPN configuration to the macOS settings",
            },
            {
              name: "uninstall",
              description:
                "Delete the Tailscale VPN configuration from the macOS settings",
            },
          ],
        },
        {
          name: "flash-appliance",
          description:
            "Download a signed Tailscale appliance image and write it to a local disk [experimental]",
          hidden: true,
          options: [
            {
              name: "--add-ssh-authorized-keys",
              description:
                "Path to an authorized_keys file to include on the appliance for breakglass SSH access",
              args: { name: "file", template: "filepaths" },
            },
            {
              name: "--disk",
              description: "Target block device (e.g. /dev/sdb or /dev/disk4)",
              args: { name: "device" },
            },
            {
              name: "--gaf",
              description:
                "Use a local GAF file instead of downloading (skips signature verification)",
              args: { name: "file", template: "filepaths" },
            },
            {
              name: "--track",
              description:
                "Which track to download from; defaults to the current track",
              args: { name: "track" },
            },
            {
              name: "--variant",
              description: "Appliance variant; empty prompts interactively",
              args: {
                name: "variant",
                suggestions: ["pi-arm64", "vm-amd64", "vm-arm64"],
              },
            },
            {
              name: "--yes",
              description: "Skip the destructive-write confirmation prompt",
            },
          ],
        },
        {
          name: "pve-appliance",
          description:
            "Create a Proxmox VE VM running the Tailscale appliance image [experimental]",
          hidden: true,
          options: [
            {
              name: "--add-ssh-authorized-keys",
              description:
                "Path to an authorized_keys file to include on the appliance for breakglass SSH access",
              args: { name: "file", template: "filepaths" },
            },
            {
              name: "--bridge",
              description: "Network bridge to attach virtio net0 to",
              args: { name: "bridge", default: "vmbr0" },
            },
            {
              name: "--cores",
              description: "Number of vCPU cores",
              args: { name: "cores", default: "2" },
            },
            {
              name: "--disk-size",
              description:
                "Raw image size (accepts K/M/G suffixes, e.g. 4G, 8192M)",
              args: { name: "size", default: "4G" },
            },
            {
              name: "--gaf",
              description:
                "Use a local GAF file instead of downloading (skips signature verification)",
              args: { name: "file", template: "filepaths" },
            },
            {
              name: "--memory",
              description: "Memory in MiB",
              args: { name: "mebibytes", default: "1024" },
            },
            {
              name: "--name",
              description: "VM name; defaults to tsapp-<vmid>",
              args: { name: "name" },
            },
            {
              name: "--start",
              description: "Start the VM after import",
            },
            {
              name: "--storage",
              description:
                "PVE storage to import the disk into (e.g. local-lvm, ssd2); required",
              args: { name: "storage" },
            },
            {
              name: "--track",
              description:
                "Which track to download from; defaults to the current track",
              args: { name: "track" },
            },
            {
              name: "--variant",
              description: "Appliance variant",
              args: {
                name: "variant",
                default: "vm-amd64",
                suggestions: ["vm-amd64", "vm-arm64"],
              },
            },
            {
              name: "--vmid",
              description:
                "Target VM ID; 0 asks Proxmox for the next available ID",
              args: { name: "vmid", default: "0" },
            },
            {
              name: "--yes",
              description: "Skip the confirmation prompt",
            },
          ],
        },
      ],
    },
    {
      name: "syspolicy",
      description: "Diagnose the MDM and system policy configuration",
      subcommands: [
        {
          name: "list",
          description: "Print effective policy settings",
          options: [jsonOption],
        },
        {
          name: "reload",
          description:
            "Force a reload of policy settings, even if no changes are detected, and prints the result",
          options: [jsonOption],
        },
      ],
    },
    {
      name: "netcheck",
      description: "Print an analysis of local network conditions",
      options: [
        {
          name: "--bind-address",
          description:
            "Send and receive connectivity probes using this locally bound IP address; default: OS-assigned",
          args: {
            name: "address",
          },
        },
        {
          name: "--bind-port",
          description:
            "Send and receive connectivity probes using this UDP port; default: OS-assigned",
          args: {
            name: "port",
          },
        },
        {
          name: "--every",
          description:
            "If non-zero, do an incremental report with the given frequency",
          args: {
            name: "duration",
          },
        },
        {
          name: "--format",
          description: "Output format",
          args: {
            name: "format",
            suggestions: [
              {
                name: "json",
              },
              {
                name: "json-line",
              },
              {
                name: "human-readable",
                insertValue: "'' ",
              },
            ],
          },
        },
        {
          name: "--verbose",
          description: "Verbose logs",
        },
      ],
    },
    {
      name: "routecheck",
      description: "Print a reachability report for routes with multiple paths",
      hidden: true,
      options: [
        {
          name: "--format",
          description: "Output format; empty for human-readable",
          args: {
            name: "format",
            suggestions: ["json", "json-line"],
          },
        },
        jsonOption,
        {
          name: "--probe",
          description: "Probe now to generate a new reachability report",
        },
      ],
    },
    {
      name: "ip",
      description: "Show Tailscale IP addresses",
      args: {
        name: "peer",
        description: "Peer or service hostname or IP address",
        isOptional: true,
        generators: hostsGenerator(),
      },
      options: [
        {
          name: "--1",
          description: "Only print one IP address",
        },
        {
          name: "--4",
          description: "Only print IPv4 address",
        },
        {
          name: "--6",
          description: "Only print IPv6 address",
        },
        {
          name: "--assert",
          description:
            "Assert that one of the node's IP(s) matches this IP address",
          args: {
            name: "ip",
          },
        },
      ],
    },
    {
      name: "dns",
      description: "Diagnose the internal DNS forwarder",
      subcommands: [
        {
          name: "status",
          description: "Print the current DNS status and configuration",
          options: [
            {
              name: "--all",
              description: "Output advanced debugging information",
            },
            jsonOption,
          ],
        },
        {
          name: "query",
          description: "Perform a DNS query",
          options: [jsonOption],
          args: [
            {
              name: "name",
            },
            {
              name: "type",
              description: "Record type (defaults to A)",
              isOptional: true,
              suggestions: [
                "A",
                "AAAA",
                "CNAME",
                "MX",
                "NS",
                "PTR",
                "SRV",
                "TXT",
              ],
            },
          ],
        },
      ],
    },
    {
      name: "status",
      description: "Show state of tailscaled and its connections",
      options: [
        {
          name: "--active",
          description:
            "Filter output to only peers with active sessions (not applicable to web mode)",
        },
        {
          name: "--browser",
          description: "Open a browser in web mode",
        },
        {
          name: "--header",
          description: "Show column headers in table format",
        },
        {
          name: "--json",
          description: "Output in JSON format (format subject to change)",
        },
        {
          name: "--listen",
          description: "Listen address for web mode; use port 0 for automatic",
          args: {
            name: "address",
            default: "127.0.0.1:8384",
          },
        },
        {
          name: "--peers",
          description: "Show status of peers",
        },
        {
          name: "--self",
          description: "Show status of local machine",
        },
        {
          name: "--web",
          description: "Run webserver with HTML showing status",
        },
      ],
    },
    {
      name: "metrics",
      description: "Show Tailscale metrics",
      subcommands: [
        {
          name: "print",
          description: "Print current metric values in Prometheus text format",
        },
        {
          name: "write",
          description: "Write metric values to a file",
          args: {
            name: "path",
            template: "filepaths",
          },
        },
      ],
    },
    {
      name: "ping",
      description: "Ping a host at the Tailscale layer, see how it routed",
      args: {
        name: "hostname-or-ip",
        generators: hostsGenerator(),
      },
      options: [
        {
          name: "--c",
          description: "Max number of pings to send, 0 for infinity",
          args: {
            name: "count",
            default: "10",
          },
        },
        {
          name: "--icmp",
          description:
            "Do an ICMP-level ping (through WireGuard, but not the local host OS stack)",
        },
        {
          name: "--peerapi",
          description: "Try hitting the peer's peerapi HTTP server",
        },
        {
          name: "--size",
          description:
            "Size of the ping message (disco pings only), 0 for minimum size",
          args: {
            name: "size",
            default: "0",
          },
        },
        {
          name: "--timeout",
          description: "Timeout before giving up on a ping",
          args: {
            name: "duration",
            default: "5s",
          },
        },
        {
          name: "--tsmp",
          description:
            "Do a TSMP-level ping (through WireGuard, but not either host OS stack)",
        },
        {
          name: "--until-direct",
          description: "Stop once a direct path is established",
        },
        {
          name: "--verbose",
          description: "Verbose output",
        },
      ],
    },
    {
      name: "nc",
      description: "Connect to a port on a host, connected to stdin/stdout",
      args: [
        {
          name: "hostname-or-ip",
          generators: hostsGenerator(),
        },
        {
          name: "port",
        },
      ],
    },
    {
      name: "ssh",
      description: "SSH to a Tailscale machine",
      args: [
        {
          name: "[user@]<host>",
          generators: hostsGenerator(),
        },
        {
          name: "args",
          description: "Arguments passed to the system ssh command",
          isOptional: true,
          isVariadic: true,
        },
      ],
    },
    {
      name: "funnel",
      description: "Serve content and local servers on the internet",
      options: serveOptions(false),
      subcommands: serveStatusSubcommands("funnel"),
      args: serveTarget,
    },
    {
      name: "serve",
      description: "Serve content and local servers on your tailnet",
      options: serveOptions(true),
      subcommands: [
        ...serveStatusSubcommands("serve"),
        {
          name: "drain",
          description: "Drain a service from the current node",
          args: serviceArg,
        },
        {
          name: "clear",
          description: "Remove all config for a service",
          args: serviceArg,
        },
        {
          name: "advertise",
          description: "Advertise this node as a service proxy to the tailnet",
          args: serviceArg,
        },
        {
          name: "get-config",
          description: "Get service configuration to save to a file",
          options: serviceConfigOptions("Read config from"),
          args: {
            name: "file",
            template: "filepaths",
          },
        },
        {
          name: "set-config",
          description: "Define service configuration from a file",
          options: serviceConfigOptions("Apply config to"),
          args: {
            name: "file",
            template: "filepaths",
          },
        },
      ],
      args: serveTarget,
    },
    {
      name: "service",
      description: "Interact with Tailscale Services",
      subcommands: [
        {
          name: "list",
          description: "List the Tailscale Services your node can access",
          options: [jsonOption],
        },
      ],
    },
    {
      name: "version",
      description: "Print Tailscale version",
      options: [
        {
          name: "--daemon",
          description: "Also print local node's daemon version",
        },
        jsonOption,
        trackOption(
          "Which track to check for updates; empty means same as current"
        ),
        {
          name: "--upstream",
          description:
            "Fetch and print the latest upstream release version from pkgs.tailscale.com",
        },
      ],
    },
    {
      name: "web",
      description: "Run a web server for controlling Tailscale",
      options: [
        {
          name: "--cgi",
          description: "Run as CGI script",
        },
        {
          name: "--listen",
          description: "Listen address; use port 0 for automatic",
          args: {
            name: "address",
            default: "localhost:8088",
          },
        },
        {
          name: "--origin",
          description:
            "Origin at which the web UI is served (if behind a reverse proxy or used with cgi)",
          args: {
            name: "origin",
          },
        },
        {
          name: "--prefix",
          description:
            "URL prefix added to requests (for cgi or reverse proxies)",
          args: {
            name: "prefix",
          },
        },
        {
          name: "--readonly",
          description: "Run web UI in read-only mode",
        },
      ],
    },
    {
      name: "file",
      description: "Send or receive files",
      subcommands: [
        {
          name: "cp",
          description: "Copy file(s) to a host",
          options: [
            {
              name: "--name",
              description:
                'Alternate filename to use, especially useful when <file> is "-" (stdin)',
              args: {
                name: "name",
              },
            },
            {
              name: "--targets",
              description: "List possible file cp targets",
            },
            {
              name: "--update-interval",
              description:
                "How often to repaint the progress line; zero or negative disables progress display entirely",
              args: {
                name: "duration",
                default: "250ms",
              },
            },
            {
              name: "--verbose",
              description: "Verbose output",
            },
          ],
          args: [
            {
              name: "file",
              template: "filepaths",
            },
            {
              name: "file or host",
              isVariadic: true,
              generators: [
                hostsGenerator({ append: ":" }),
                {
                  template: "filepaths",
                },
              ],
            },
          ],
        },
        {
          name: "get",
          description: "Move files out of the Tailscale file inbox",
          options: [
            {
              name: "--conflict",
              description:
                "Behavior when a conflicting (same-named) file already exists in the target directory",
              args: {
                name: "behavior",
                default: "skip",
                suggestions: [
                  {
                    name: "skip",
                    description:
                      "Skip conflicting files: leave them in the taildrop inbox and print an error",
                  },
                  {
                    name: "overwrite",
                    description: "Overwrite existing file",
                  },
                  {
                    name: "rename",
                    description: "Write to a new number-suffixed filename",
                  },
                ],
              },
            },
            {
              name: "--loop",
              description: "Run get in a loop, receiving files as they come in",
            },
            {
              name: "--verbose",
              description: "Verbose output",
            },
            {
              name: "--wait",
              description: "Wait for a file to arrive if inbox is empty",
            },
          ],
          args: {
            name: "target-directory",
            template: "folders",
          },
        },
      ],
    },
    {
      name: "drive",
      description: "Share a directory with your tailnet",
      subcommands: [
        {
          name: "share",
          description: "[ALPHA] Create or modify a share",
          args: [
            {
              name: "name",
            },
            {
              name: "path",
              template: "folders",
            },
          ],
        },
        {
          name: "rename",
          description: "[ALPHA] Rename a share",
          args: [
            {
              name: "oldname",
            },
            {
              name: "newname",
            },
          ],
        },
        {
          name: "unshare",
          description: "[ALPHA] Remove a share",
          args: {
            name: "name",
          },
        },
        {
          name: "list",
          description: "[ALPHA] List current shares",
        },
      ],
    },
    {
      name: "bugreport",
      description: "Print a shareable identifier to help diagnose issues",
      args: {
        name: "note",
        isOptional: true,
      },
      options: [
        {
          name: "--diagnose",
          description: "Run additional in-depth checks",
        },
        {
          name: "--record",
          description: "Pause and then write another bugreport",
        },
      ],
    },
    {
      name: "cert",
      description: "Get TLS certs",
      args: {
        name: "domain",
        generators: certDomainsGenerator,
      },
      options: [
        {
          name: "--cert-file",
          description:
            'Output cert file or "-" for stdout; defaults to DOMAIN.crt if --cert-file and --key-file are both unset',
          args: {
            name: "file",
            template: "filepaths",
            suggestions: [
              {
                name: "-",
                description: "Stdout",
              },
            ],
          },
        },
        {
          name: "--key-file",
          description:
            'Output key file or "-" for stdout; defaults to DOMAIN.key if --cert-file and --key-file are both unset',
          args: {
            name: "file",
            template: "filepaths",
            suggestions: [
              {
                name: "-",
                description: "Stdout",
              },
            ],
          },
        },
        {
          name: "--min-validity",
          description:
            "Ensure the certificate is valid for at least this duration; the maximum allowed depends on the CA",
          args: {
            name: "duration",
          },
        },
        {
          name: "--serve-demo",
          description:
            "Serve on port :443 using the cert as a demo, instead of writing out the files to disk",
        },
      ],
    },
    {
      name: "lock",
      description: "Manage tailnet lock",
      subcommands: [
        {
          name: "init",
          description: "Initialize tailnet lock",
          options: [
            {
              name: "--confirm",
              description: "Do not prompt for confirmation",
            },
            {
              name: "--gen-disablement-for-support",
              description:
                "Generate and transmit a disablement secret for Tailscale support",
            },
            {
              name: "--gen-disablements",
              description: "Number of disablement secrets to generate",
              args: {
                name: "count",
                default: "1",
              },
            },
          ],
          args: {
            name: "trusted-key",
            isVariadic: true,
          },
        },
        {
          name: "status",
          description: "Output the state of tailnet lock",
          options: [jsonOption],
        },
        {
          name: "add",
          description: "Add one or more trusted signing keys to tailnet lock",
          args: {
            name: "public-key",
            isVariadic: true,
          },
        },
        {
          name: "remove",
          description:
            "Remove one or more trusted signing keys from tailnet lock",
          options: [
            {
              name: "--re-sign",
              description:
                "Resign signatures which would be invalidated by removal of trusted signing keys (default true)",
            },
          ],
          args: {
            name: "public-key",
            isVariadic: true,
          },
        },
        {
          name: "sign",
          description: "Sign a node or pre-approved auth key",
          args: [
            {
              name: "node-key or auth-key",
              description:
                'Key to sign; a "file:" prefix reads the key from the given path',
            },
            {
              name: "rotation-key",
              isOptional: true,
            },
          ],
        },
        {
          name: "disable",
          description:
            "Consume a disablement secret to shut down tailnet lock for the tailnet",
          args: {
            name: "disablement-secret",
          },
        },
        {
          name: "local-disable",
          description: "Disable tailnet lock for this node only",
        },
        {
          name: "disablement-kdf",
          description:
            "Compute a disablement value from a disablement secret (advanced users only)",
          args: {
            name: "hex-encoded-disablement-secret",
          },
        },
        {
          name: "log",
          description: "List changes applied to tailnet lock",
          options: [
            jsonOption,
            {
              name: "--limit",
              description: "Max number of updates to list",
              args: {
                name: "count",
                default: "50",
              },
            },
          ],
        },
        {
          name: "revoke-keys",
          description: "Revoke compromised tailnet-lock keys",
          options: [
            {
              name: "--cosign",
              description:
                "Continue generating the recovery using the tailnet lock key on this device and the provided recovery blob",
            },
            {
              name: "--finish",
              description:
                "Finish the recovery process by transmitting the revocation",
            },
            {
              name: "--fork-from",
              description:
                "Parent AUM hash to rewrite from (advanced users only)",
              args: {
                name: "hash",
              },
            },
          ],
          args: {
            name: "tailnet-lock-key or recovery-blob",
            isVariadic: true,
          },
        },
      ],
    },
    {
      name: "licenses",
      description: "Get open source license information",
    },
    {
      name: "exit-node",
      description: "Show machines on your tailnet configured as exit nodes",
      subcommands: [
        {
          name: "list",
          description: "Show exit nodes",
          options: [
            {
              name: "--filter",
              description: "Filter exit nodes by country",
              args: {
                name: "country",
              },
            },
          ],
        },
        {
          name: "suggest",
          description: "Suggest the best available exit node",
          options: [
            {
              name: "--force-probe",
              description: "Perform a routecheck probe before suggesting",
              hidden: true,
            },
          ],
        },
      ],
    },
    {
      name: "update",
      description: "Update Tailscale to the latest/different version",
      options: [
        {
          name: "--dry-run",
          description:
            "Print what update would do without doing it, or prompts",
        },
        trackOption(
          "Which track to check for updates; empty means same as current"
        ),
        {
          name: "--version",
          description: "Explicit version to update/downgrade to",
          args: {
            name: "version",
          },
        },
        {
          name: "--yes",
          description: "Update without interactive prompts",
        },
      ],
    },
    {
      name: "whois",
      description:
        "Show the machine and user associated with a Tailscale IP (v4 or v6)",
      options: [
        jsonOption,
        {
          name: "--proto",
          description: "Protocol; empty means both",
          args: {
            name: "protocol",
            suggestions: ["tcp", "udp"],
          },
        },
      ],
      args: {
        name: "ip[:port]",
      },
    },
    {
      name: "whoami",
      description: "Show the machine and user identity of the current machine",
      options: [jsonOption],
    },
    {
      name: "id-token",
      description: "Fetch an OIDC id-token for the Tailscale machine",
      hidden: true,
      args: {
        name: "aud",
      },
    },
    {
      name: "systray",
      description: "Run a systray application to manage Tailscale",
      options: [
        {
          name: "--theme",
          description: "Color theme for Tailscale icon",
          args: {
            name: "theme",
            default: "dark",
            suggestions: ["dark", "dark:nobg", "light", "light:nobg"],
          },
        },
      ],
    },
    {
      name: "appc-routes",
      description: "Print the current app connector routes",
      options: [
        {
          name: "--all",
          description:
            "Print learned domains and routes and extra policy configured routes",
        },
        {
          name: "--map",
          description: "Print the map of learned domains: [routes]",
        },
        {
          name: "--n",
          description: "Print the total number of routes this node advertises",
        },
      ],
    },
    {
      name: "wait",
      description: "Wait for Tailscale interface/IPs to be ready for binding",
      options: [
        {
          name: "--timeout",
          description:
            "How long to wait before giving up (0 means wait indefinitely)",
          args: {
            name: "duration",
            default: "0s",
          },
        },
      ],
    },
    {
      name: "configure-host",
      description:
        "Configure Synology to enable outbound connections (alias of configure synology)",
      hidden: true,
    },
    {
      name: "help",
      description: "Print help message",
    },
  ],
  options: [
    {
      name: "--socket",
      description: "Path to tailscaled's unix socket",
      args: {
        name: "socket",
        default: "/var/run/tailscaled.socket",
      },
    },
    {
      name: "--help",
      description: "Show help message",
      isPersistent: true,
    },
  ],
};

export default spec;
