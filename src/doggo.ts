// doggo v1.4.2 (Go module proxy / GitHub tag v1.4.2, 2026-11-19). Source: static read of cmd/doggo/{cli,help,completions}.go at tag v1.4.2
// (pflag definitions, --help template and the shipped bash/zsh/fish completions); the binary was not run.
const boolValues: Fig.Arg = {
  name: "bool",
  description: "Pass false to disable",
  suggestions: ["true", "false"],
  isOptional: true,
};

const completionSpec: Fig.Spec = {
  name: "doggo",
  description: "DNS Client for Humans",
  subcommands: [
    {
      name: "completions",
      description: "Generate the shell completion script for the given shell",
      args: {
        name: "shell",
        suggestions: ["bash", "zsh", "fish"],
      },
    },
  ],
  options: [
    {
      name: "--version",
      description: "Output version",
    },
    {
      name: ["--help", "-h"],
      description: "Output help",
    },
    {
      name: "--config",
      description:
        "Load defaults from a TOML config file (default: $XDG_CONFIG_HOME/doggo/config.toml or ~/.doggo.toml)",
      args: {
        name: "path",
        template: "filepaths",
      },
    },
    {
      name: ["-q", "--query"],
      description: "Hostname to query the DNS records for (e.g., example.com)",
      isRepeatable: true,
      args: {
        name: "hostname",
      },
    },
    {
      name: ["-t", "--type"],
      description:
        "DNS record type by name, number, or TYPE<number> (e.g., A, MX, HTTPS, 65, TYPE65)",
      isRepeatable: true,
      args: {
        name: "type",
        suggestions: [
          "A",
          "AAAA",
          "CAA",
          "CNAME",
          "HINFO",
          "HTTPS",
          "MX",
          "NS",
          "PTR",
          "SOA",
          "SRV",
          "SVCB",
          "TXT",
        ],
      },
    },
    {
      name: ["-n", "--nameserver"],
      description:
        "Address of a specific nameserver to send queries to (e.g., 9.9.9.9, 8.8.8.8, tls://1.1.1.1)",
      isRepeatable: true,
      args: {
        name: "address",
      },
    },
    {
      name: ["-c", "--class"],
      description: "Network class of the DNS record (IN, CH, HS, etc.)",
      isRepeatable: true,
      args: {
        name: "class",
        suggestions: ["IN", "CH", "HS"],
      },
    },
    {
      name: ["-x", "--reverse"],
      description:
        "Performs a reverse DNS lookup for an IPv4 or IPv6 address (sets the query type and class to PTR and IN)",
    },
    {
      name: "--any",
      description:
        "Query all supported DNS record types (A, AAAA, CNAME, MX, NS, PTR, SOA, SRV, TXT, CAA)",
    },
    {
      name: ["-A", "--authoritative"],
      description:
        "Find the domain's zone via SOA and query its delegated authoritative nameservers",
    },
    {
      name: "--trace",
      description:
        "Trace the delegation path from the root servers to the authoritative answer",
    },
    {
      name: "--strategy",
      description:
        "Strategy to query nameservers (internal uses RFC 1918/ULA private IPs only)",
      args: {
        name: "strategy",
        suggestions: ["all", "random", "first", "internal"],
      },
    },
    {
      name: "--ndots",
      description:
        "Specify ndots parameter (defaults to the value in /etc/resolv.conf for the system nameserver, 1 otherwise)",
      args: {
        name: "ndots",
      },
    },
    {
      name: "--search",
      description:
        "Use the search list defined in resolv.conf (default: true, disable with --search=false)",
      requiresSeparator: true,
      args: boolValues,
    },
    {
      name: ["-T", "--timeout"],
      description:
        "Timeout for the resolver to return a response (e.g., 5s, 400ms, 1m)",
      args: {
        name: "duration",
      },
    },
    {
      name: ["-4", "--ipv4"],
      description: "Use IPv4 only",
    },
    {
      name: ["-6", "--ipv6"],
      description: "Use IPv6 only",
    },
    {
      name: "--http3",
      description: "Use HTTP/3 for DNS-over-HTTPS nameservers",
    },
    {
      name: "--tls-hostname",
      description: "Provide a hostname for TLS certificate verification",
      args: {
        name: "hostname",
      },
    },
    {
      name: "--skip-hostname-verification",
      description: "Skip TLS hostname verification for encrypted resolvers",
    },
    {
      name: ["-b", "--source"],
      description:
        "Bind queries to a local source IP address, like dig -b (not supported for DNSCrypt)",
      args: {
        name: "ip",
      },
    },
    {
      name: "--aa",
      description: "Set Authoritative Answer flag",
    },
    {
      name: "--ad",
      description: "Set Authenticated Data flag",
    },
    {
      name: "--cd",
      description: "Set Checking Disabled flag",
    },
    {
      name: "--rd",
      description:
        "Set Recursion Desired flag (default: true, disable with --rd=false)",
      requiresSeparator: true,
      args: boolValues,
    },
    {
      name: "--z",
      description: "Set Z flag (reserved for future use)",
    },
    {
      name: "--do",
      description: "Set DNSSEC OK flag",
    },
    {
      name: "--nsid",
      description: "Request Name Server Identifier (NSID)",
    },
    {
      name: "--cookie",
      description: "Request DNS Cookie",
    },
    {
      name: "--padding",
      description: "Request EDNS padding for privacy",
    },
    {
      name: "--ede",
      description: "Enable EDNS to receive Extended DNS Errors",
    },
    {
      name: "--ecs",
      description: "EDNS Client Subnet (e.g., 192.0.2.0/24 or 2001:db8::/32)",
      args: {
        name: "subnet",
      },
    },
    {
      name: "--bufsize",
      description:
        "EDNS UDP buffer size in bytes (512-65535), enables EDNS (default: 1232)",
      args: {
        name: "bytes",
      },
    },
    {
      name: ["-J", "--json"],
      description: "Format the output as JSON",
    },
    {
      name: "--short",
      description: "Short output format (shows only the response section)",
    },
    {
      name: "--color",
      description:
        "Enable/disable colored output (default: true, disable with --color=false)",
      requiresSeparator: true,
      args: boolValues,
    },
    {
      name: "--debug",
      description: "Enable debug logging",
    },
    {
      name: "--time",
      description: "Show query response time",
    },
    {
      name: "--gp-from",
      description:
        "Query using the Globalping API from a comma-separated list of locations",
      args: {
        name: "locations",
      },
    },
    {
      name: "--gp-limit",
      description: "Limit the number of probes to use from Globalping",
      args: {
        name: "limit",
      },
    },
  ],
  args: {
    name: "query",
    description:
      "Hostnames, record types (A, MX, ...), classes (IN, CH, HS) and @nameservers in any order (e.g., example.com MX @9.9.9.9)",
    isVariadic: true,
  },
};
export default completionSpec;
