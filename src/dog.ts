// dog v0.1.0 (GitHub tag ogham/dog v0.1.0 = latest release, checked 2026-11-19). Source: src/options.rs, src/usage.txt,
// man/dog.1.md and completions/dog.zsh at v0.1.0, cross-checked with master (0.2.0-pre); not run. The command line is
// identical on master, which only adds the EUI48, EUI64, OPENPGPKEY and URI record types (unreleased, so not listed).
// Upstream has had no commits since 2021-10. The old record-type "subcommands" (including dig-style "+noall +answer"
// words, which dog does not understand) are replaced by suggestions on the variadic arguments.

const recordTypes: Fig.Suggestion[] = [
  { name: "A", description: "IPv4 addresses" },
  { name: "AAAA", description: "IPv6 addresses" },
  { name: "CAA", description: "Permitted certificate authorities" },
  { name: "CNAME", description: "Canonical domain aliases" },
  {
    name: "HINFO",
    description:
      "System information and, sometimes, forbidden request explanations",
  },
  { name: "LOC", description: "Location information" },
  { name: "MX", description: "E-mail server addresses" },
  { name: "NAPTR", description: "DDDS rules" },
  { name: "NS", description: "Domain name servers" },
  {
    name: "PTR",
    description: "Pointers to canonical names, usually for reverse lookups",
  },
  { name: "SOA", description: "Administrative information about zones" },
  { name: "SRV", description: "IP addresses with port numbers" },
  { name: "SSHFP", description: "SSH key fingerprints" },
  {
    name: "TLSA",
    description: "TLS certificates, public keys, and hashes",
  },
  { name: "TXT", description: "Arbitrary textual information" },
  {
    name: "ANY",
    description: "All record types (the response is not interpreted)",
  },
];

const networkClasses: Fig.Suggestion[] = [
  { name: "IN", description: "Internet class (default)" },
  { name: "CH", description: "Chaosnet class" },
  { name: "HS", description: "Hesiod class" },
];

const args: Fig.SingleOrArray<Fig.Arg> = {
  name: "arguments",
  description:
    "Host names, record types, network classes, or @nameservers (dog works out which is which)",
  isVariadic: true,
  suggestions: [...recordTypes, ...networkClasses],
};

const options: Fig.Option[] = [
  {
    name: ["-q", "--query"],
    description: "Host name or domain name to query",
    isRepeatable: true,
    args: { name: "HOST" },
  },
  {
    name: ["-t", "--type"],
    description: "Type of the DNS record being queried (A, MX, NS...)",
    isRepeatable: true,
    args: { name: "TYPE", suggestions: recordTypes },
  },
  {
    name: ["-n", "--nameserver"],
    description: "Address of the nameserver to send packets to",
    isRepeatable: true,
    args: { name: "ADDR" },
  },
  {
    name: "--class",
    description: "Network class of the DNS record being queried (IN, CH, HS)",
    isRepeatable: true,
    args: { name: "CLASS", suggestions: networkClasses },
  },
  {
    name: "--edns",
    description: "Whether to OPT in to EDNS (disable, hide, show)",
    args: { name: "SETTING", suggestions: ["disable", "hide", "show"] },
  },
  {
    name: "--txid",
    description: "Set the transaction ID to a specific value",
    args: { name: "NUMBER" },
  },
  {
    name: "-Z",
    description: "Set uncommon protocol-level tweaks",
    isRepeatable: true,
    args: {
      name: "TWEAKS",
      suggestions: [
        { name: "aa", description: "Set the AA (Authoritative Answers) bit" },
        { name: "ad", description: "Set the AD (Authentic Data) bit" },
        { name: "cd", description: "Set the CD (Checking Disabled) bit" },
        {
          name: "bufsize",
          description:
            "Set the UDP payload size field in the OPT field (bufsize=NUM)",
          insertValue: "bufsize={cursor}",
        },
      ],
    },
  },
  {
    name: ["-U", "--udp"],
    description: "Use the DNS protocol over UDP",
  },
  {
    name: ["-T", "--tcp"],
    description: "Use the DNS protocol over TCP",
  },
  {
    name: ["-S", "--tls"],
    description: "Use the DNS-over-TLS protocol",
  },
  {
    name: ["-H", "--https"],
    description: "Use the DNS-over-HTTPS protocol",
  },
  {
    name: ["-1", "--short"],
    description: "Short mode: display nothing but the first result",
  },
  {
    name: ["-J", "--json"],
    description: "Display the output as JSON",
  },
  {
    name: ["--color", "--colour"],
    description: "When to colourise the output",
    args: {
      name: "WHEN",
      suggestions: ["always", "automatic", "never"],
    },
  },
  {
    name: "--seconds",
    description: "Do not format durations, display them as seconds",
  },
  {
    name: "--time",
    description: "Print how long the response took to arrive",
  },
  {
    name: ["-v", "--version"],
    description: "Print version information",
  },
  {
    name: ["-?", "--help"],
    description: "Print list of command-line options",
  },
];

const completionSpec: Fig.Spec = {
  name: "dog",
  description: "A command-line DNS client",
  args,
  options,
};

export default completionSpec;
