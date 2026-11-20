// Nmap v7.992 (GitHub tag nmap/nmap v7.992, 2026-10-07 release, 2026-11-19). Source: nmap.cc long_options/getopt table, docs/nmap.usage.txt and docs/refguide.xml at v7.992
const timeArg = (name: string): Fig.Arg => ({
  name,
  description:
    "Seconds, or append ms (milliseconds), s (seconds), m (minutes) or h (hours), e.g. 30m",
});

const timingTemplates = [
  "paranoid",
  "sneaky",
  "polite",
  "normal",
  "aggressive",
  "insane",
];

const outputOption = (flag: string, description: string): Fig.Option => ({
  name: flag,
  description,
  args: {
    name: "file",
    template: "filepaths",
  },
});

const hostGroupOption = (name: string, description: string): Fig.Option => ({
  name,
  description,
  args: {
    name: "numhosts",
    description: "Number of hosts",
  },
});

const completionSpec: Fig.Spec = {
  name: "nmap",
  description: "Network exploration tool and security / port scanner",
  parserDirectives: {
    flagsArePosixNoncompliant: true,
    optionsMustPrecedeArguments: false,
  },
  options: [
    // TARGET SPECIFICATION
    {
      name: "-iL",
      description: "Input from list of hosts/networks",
      args: {
        name: "inputfilename",
        template: "filepaths",
      },
    },
    {
      name: "-iR",
      description: "Choose random targets",
      args: {
        name: "num hosts",
        description: "Number of random hosts to scan, 0 for unlimited",
      },
    },
    {
      name: "--exclude",
      description: "Exclude hosts/networks",
      args: {
        name: "host1[,host2],...",
      },
    },
    {
      name: "--excludefile",
      description: "Exclude list from file",
      args: {
        name: "exclude_file",
        template: "filepaths",
      },
    },
    {
      name: "--randomize-hosts",
      description: "Randomize target host order",
    },
    // HOST DISCOVERY
    {
      name: "-sL",
      description: "List scan - simply list targets to scan",
    },
    {
      name: "-sn",
      description: "Ping scan - disable port scan",
    },
    {
      name: "-sP",
      description: "Ping scan (deprecated alias for -sn)",
      deprecated: true,
    },
    {
      name: "-Pn",
      description: "Treat all hosts as online, skip host discovery",
    },
    {
      name: "-PS",
      description: "TCP SYN discovery to given ports (attach the port list)",
      args: {
        name: "portlist",
        isOptional: true,
      },
    },
    {
      name: "-PA",
      description: "TCP ACK discovery to given ports (attach the port list)",
      args: {
        name: "portlist",
        isOptional: true,
      },
    },
    {
      name: "-PU",
      description: "UDP discovery to given ports (attach the port list)",
      args: {
        name: "portlist",
        isOptional: true,
      },
    },
    {
      name: "-PY",
      description: "SCTP INIT discovery to given ports (attach the port list)",
      args: {
        name: "portlist",
        isOptional: true,
      },
    },
    {
      name: "-PE",
      description: "ICMP echo request discovery probe",
    },
    {
      name: "-PP",
      description: "ICMP timestamp request discovery probe",
    },
    {
      name: "-PM",
      description: "ICMP netmask request discovery probe",
    },
    {
      name: "-PO",
      description: "IP protocol ping (attach the protocol list)",
      args: {
        name: "protocol list",
        isOptional: true,
      },
    },
    {
      name: "-n",
      description: "Never do DNS resolution",
    },
    {
      name: "-R",
      description: "Always resolve DNS",
    },
    {
      name: "--resolve-all",
      description: "Scan each resolved address of a hostname",
    },
    {
      name: "--unique",
      description: "Scan each address only once",
    },
    {
      name: "--dns-servers",
      description: "Specify custom DNS servers",
      args: {
        name: "serv1[,serv2],...",
      },
    },
    {
      name: "--system-dns",
      description: "Use the OS's DNS resolver",
    },
    {
      name: "--traceroute",
      description: "Trace hop path to each host",
    },
    {
      name: "--disable-arp-ping",
      description: "Disable ARP and Neighbor Discovery ping",
    },
    {
      name: "--discovery-ignore-rst",
      description: "Do not treat TCP RST replies as proof that a host is up",
    },
    // SCAN TECHNIQUES
    {
      name: "-sS",
      description: "TCP SYN scan",
    },
    {
      name: "-sT",
      description: "TCP connect scan",
    },
    {
      name: "-sA",
      description: "TCP ACK scan",
    },
    {
      name: "-sW",
      description: "TCP Window scan",
    },
    {
      name: "-sM",
      description: "TCP Maimon scan",
    },
    {
      name: "-sU",
      description: "UDP scan",
    },
    {
      name: "-sN",
      description: "TCP Null scan",
    },
    {
      name: "-sF",
      description: "TCP FIN scan",
    },
    {
      name: "-sX",
      description: "TCP Xmas scan",
    },
    {
      name: "-sY",
      description: "SCTP INIT scan",
    },
    {
      name: "-sZ",
      description: "SCTP COOKIE-ECHO scan",
    },
    {
      name: "-sO",
      description: "IP protocol scan",
    },
    {
      name: "-sI",
      description: "Idle scan",
      args: {
        name: "zombie host[:probeport]",
      },
    },
    {
      name: "-b",
      description: "FTP bounce scan",
      args: {
        name: "FTP relay host",
      },
    },
    {
      name: "--scanflags",
      description: "Customize TCP scan flags",
      args: {
        name: "flags",
        description:
          "Number 0-255 or a combination of URG, ACK, PSH, RST, SYN and FIN",
      },
    },
    // PORT SPECIFICATION AND SCAN ORDER
    {
      name: "-p",
      description: "Only scan specified ports",
      args: {
        name: "port ranges",
        description:
          "Ranges such as 22, 1-65535, - (all ports) or U:53,111,137,T:21-25,80,139,8080,S:9",
      },
    },
    {
      name: "--exclude-ports",
      description: "Exclude the specified ports from scanning",
      args: {
        name: "port ranges",
      },
    },
    {
      name: "-F",
      description: "Fast mode - scan fewer ports than the default scan",
    },
    {
      name: "-r",
      description: "Scan ports sequentially - do not randomize",
    },
    {
      name: "--top-ports",
      description: "Scan the most common ports",
      args: {
        name: "number",
        description: "An integer between 1 and 65535",
      },
    },
    {
      name: "--port-ratio",
      description: "Scan ports more common than the given ratio",
      args: {
        name: "ratio",
        description: "A decimal number between 0 and 1",
      },
    },
    // SERVICE/VERSION DETECTION
    {
      name: "-sV",
      description: "Probe open ports to determine service/version info",
    },
    {
      name: "--version-intensity",
      description: "Set from 0 (light) to 9 (try all probes)",
      args: {
        name: "level",
        suggestions: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
      },
    },
    {
      name: "--version-light",
      description: "Limit to most likely probes (intensity 2)",
    },
    {
      name: "--version-all",
      description: "Try every single probe (intensity 9)",
    },
    {
      name: "--version-trace",
      description: "Show detailed version scan activity (for debugging)",
    },
    {
      name: "--allports",
      description: "Do not exclude any ports from version detection",
    },
    // SCRIPT SCAN
    {
      name: "-sC",
      description: "Equivalent to --script=default",
    },
    {
      name: "--script",
      description:
        "Run NSE scripts: a comma separated list of directories, script files or script categories",
      args: {
        name: "Lua scripts",
        suggestions: [
          "auth",
          "broadcast",
          "brute",
          "default",
          "discovery",
          "dos",
          "exploit",
          "external",
          "fuzzer",
          "intrusive",
          "malware",
          "safe",
          "version",
          "vuln",
        ],
      },
    },
    {
      name: "--script-args",
      description: "Provide arguments to scripts",
      args: {
        name: "n1=v1,[n2=v2,...]",
      },
    },
    {
      name: "--script-args-file",
      description: "Provide NSE script args in a file",
      args: {
        name: "filename",
        template: "filepaths",
      },
    },
    {
      name: "--script-trace",
      description: "Show all data sent and received by scripts",
    },
    {
      name: "--script-updatedb",
      description: "Update the script database",
    },
    {
      name: "--script-help",
      description: "Show help about scripts",
      args: {
        name: "Lua scripts",
        description:
          "Comma-separated list of script files or script categories",
      },
    },
    {
      name: "--script-timeout",
      description: "Set a ceiling on script execution time",
      args: timeArg("time"),
    },
    // OS DETECTION
    {
      name: "-O",
      description: "Enable OS detection",
    },
    {
      name: "--osscan-limit",
      description: "Limit OS detection to promising targets",
    },
    {
      name: ["--osscan-guess", "--fuzzy"],
      description: "Guess OS more aggressively",
    },
    {
      name: "--max-os-tries",
      description: "Set the maximum number of OS detection tries per target",
      args: {
        name: "tries",
        description: "An integer between 1 and 50",
      },
    },
    // TIMING AND PERFORMANCE
    {
      name: "-T",
      description: "Set timing template (higher is faster)",
      args: {
        name: "timing template",
        suggestions: [
          { name: "0", description: "Paranoid" },
          { name: "1", description: "Sneaky" },
          { name: "2", description: "Polite" },
          { name: "3", description: "Normal (default)" },
          { name: "4", description: "Aggressive" },
          { name: "5", description: "Insane" },
          ...timingTemplates,
        ],
      },
    },
    hostGroupOption("--min-hostgroup", "Minimum parallel host scan group size"),
    hostGroupOption("--max-hostgroup", "Maximum parallel host scan group size"),
    {
      name: "--min-parallelism",
      description: "Minimum number of parallel probes",
      args: {
        name: "numprobes",
      },
    },
    {
      name: "--max-parallelism",
      description: "Maximum number of parallel probes",
      args: {
        name: "numprobes",
      },
    },
    {
      name: "--min-rtt-timeout",
      description: "Minimum probe round trip time",
      args: timeArg("time"),
    },
    {
      name: "--max-rtt-timeout",
      description: "Maximum probe round trip time",
      args: timeArg("time"),
    },
    {
      name: "--initial-rtt-timeout",
      description: "Initial probe round trip time",
      args: timeArg("time"),
    },
    {
      name: "--max-retries",
      description: "Cap the number of port scan probe retransmissions",
      args: {
        name: "tries",
      },
    },
    {
      name: "--host-timeout",
      description: "Give up on target after this long",
      args: timeArg("time"),
    },
    {
      name: "--scan-delay",
      description: "Adjust the delay between probes",
      args: timeArg("time"),
    },
    {
      name: "--max-scan-delay",
      description: "Set the maximum delay between probes",
      args: timeArg("time"),
    },
    {
      name: "--min-rate",
      description: "Send packets no slower than this many per second",
      args: {
        name: "number",
      },
    },
    {
      name: "--max-rate",
      description: "Send packets no faster than this many per second",
      args: {
        name: "number",
      },
    },
    {
      name: "--defeat-rst-ratelimit",
      description:
        "Ignore RST rate limiting by target hosts (faster, less accurate)",
    },
    {
      name: "--defeat-icmp-ratelimit",
      description:
        "Ignore ICMP rate limiting by target hosts (faster, less accurate)",
    },
    {
      name: "--nsock-engine",
      description: "Enforce use of a given nsock IO multiplexing engine",
      args: {
        name: "engine",
        suggestions: ["iocp", "epoll", "kqueue", "poll", "select"],
      },
    },
    // FIREWALL/IDS EVASION AND SPOOFING
    {
      name: "-f",
      description: "Fragment packets (repeat to use smaller fragments)",
      isRepeatable: true,
    },
    {
      name: "--mtu",
      description: "Fragment packets using the given MTU",
      args: {
        name: "val",
        description: "A multiple of 8",
      },
    },
    {
      name: "-D",
      description: "Cloak a scan with decoys",
      args: {
        name: "decoy1,decoy2[,ME],...",
      },
    },
    {
      name: "-S",
      description: "Spoof source address",
      args: {
        name: "IP_Address",
      },
    },
    {
      name: "-e",
      description: "Use specified interface",
      args: {
        name: "iface",
      },
    },
    {
      name: ["-g", "--source-port"],
      description: "Use given port number",
      args: {
        name: "portnum",
      },
    },
    {
      name: "--proxies",
      description: "Relay connections through HTTP/SOCKS4 proxies",
      args: {
        name: "url1,[url2],...",
      },
    },
    {
      name: "--data",
      description: "Append a custom payload to sent packets",
      args: {
        name: "hex string",
      },
    },
    {
      name: "--data-string",
      description: "Append a custom ASCII string to sent packets",
      args: {
        name: "string",
      },
    },
    {
      name: "--data-length",
      description: "Append random data to sent packets",
      args: {
        name: "num",
      },
    },
    {
      name: "--ip-options",
      description: "Send packets with specified IP options",
      args: {
        name: "options",
        description: "R|S [route]|L [route]|T|U ... or a hex string",
      },
    },
    {
      name: "--ttl",
      description: "Set IP time-to-live field",
      args: {
        name: "val",
        description: "A number between 0 and 255",
      },
    },
    {
      name: "--spoof-mac",
      description: "Spoof your MAC address",
      args: {
        name: "mac address/prefix/vendor name",
        suggestions: [
          {
            name: "0",
            description: "Use a random MAC address",
          },
        ],
      },
    },
    {
      name: "--badsum",
      description: "Send packets with a bogus TCP/UDP/SCTP checksum",
    },
    {
      name: "--adler32",
      description:
        "Use deprecated Adler32 instead of CRC32C for SCTP checksums",
    },
    // OUTPUT
    outputOption("-oN", "Output scan in normal format to the given file"),
    outputOption("-oX", "Output scan in XML format to the given file"),
    outputOption(
      "-oS",
      "Output scan in script kiddie format to the given file"
    ),
    outputOption("-oG", "Output scan in grepable format to the given file"),
    {
      name: "-oA",
      description: "Output in the three major formats at once",
      args: {
        name: "basename",
        template: "filepaths",
      },
    },
    {
      name: ["-v", "-vv"],
      description:
        "Increase verbosity level (use -vv or more for greater effect)",
      isRepeatable: true,
    },
    {
      name: ["-d", "-dd"],
      description:
        "Increase debugging level (use -dd or more for greater effect)",
      isRepeatable: true,
    },
    {
      name: "--reason",
      description: "Display the reason a port is in a particular state",
    },
    {
      name: "--open",
      description: "Only show open (or possibly open) ports",
    },
    {
      name: "--packet-trace",
      description: "Show all packets sent and received",
    },
    {
      name: "--iflist",
      description: "Print host interfaces and routes (for debugging)",
    },
    {
      name: "--append-output",
      description: "Append to rather than clobber specified output files",
    },
    {
      name: "--resume",
      description: "Resume an aborted scan",
      args: {
        name: "filename",
        template: "filepaths",
      },
    },
    {
      name: "--noninteractive",
      description: "Disable runtime interactions via keyboard",
    },
    {
      name: "--stats-every",
      description: "Print periodic timing stats",
      args: timeArg("time"),
    },
    {
      name: "--stylesheet",
      description: "XSL stylesheet to transform XML output to HTML",
      args: {
        name: "path/URL",
        template: "filepaths",
      },
    },
    {
      name: "--webxml",
      description: "Reference stylesheet from Nmap.Org for more portable XML",
    },
    {
      name: "--no-stylesheet",
      description: "Prevent associating of XSL stylesheet with XML output",
    },
    // MISC
    {
      name: "-6",
      description: "Enable IPv6 scanning",
    },
    {
      name: "-A",
      description:
        "Enable OS detection, version detection, script scanning, and traceroute",
    },
    {
      name: "--datadir",
      description: "Specify custom Nmap data file location",
      args: {
        name: "dirname",
        template: "folders",
      },
    },
    {
      name: "--servicedb",
      description: "Specify a custom services file",
      args: {
        name: "services file",
        template: "filepaths",
      },
    },
    {
      name: "--versiondb",
      description: "Specify a custom service probes file",
      args: {
        name: "service probes file",
        template: "filepaths",
      },
    },
    {
      name: "--send-eth",
      description: "Send using raw ethernet frames",
    },
    {
      name: "--send-ip",
      description: "Send using raw IP packets",
    },
    {
      name: "--privileged",
      description: "Assume that the user is fully privileged",
    },
    {
      name: "--unprivileged",
      description: "Assume the user lacks raw socket privileges",
    },
    {
      name: ["-V", "--version"],
      description: "Print version number",
    },
    {
      name: ["-h", "--help"],
      description: "Print the help summary page",
    },
  ],
  args: {
    name: "target",
    description:
      "Hostnames, IP addresses or networks such as scanme.nmap.org, microsoft.com/24, 192.168.0.1 or 10.0.0-255.1-254",
    isVariadic: true,
  },
};
export default completionSpec;
