// dig (macOS 15.5 DiG 9.10.6, apple-oss-distributions/bind9 bind9-65, dig.1 dated 2018-05-25, 2026-11-19). Source: bin/dig/dig.1 man page and
// dig.c (dash options, `dig -h` help text, +query option keywords). Not run on macOS.
// Not included: +sigchase, +topdown and +trusted-key (deprecated, only exist when dig is built with DIG_SIGCHASE).
// The per-record-type `+short` options were replaced by persistent top-level options; the bogus "TTL" record type was removed.

type QueryFlag = {
  names: string[];
  description: string;
  deprecated?: boolean;
};

// Query options of the form +[no]keyword
const queryFlags: QueryFlag[] = [
  { names: ["aaonly", "aaflag"], description: "Set the AA flag in the query" },
  {
    names: ["additional"],
    description: "Display the additional section of a reply",
  },
  {
    names: ["adflag"],
    description: "Set the AD (authentic data) bit in the query",
  },
  { names: ["all"], description: "Set or clear all display flags" },
  { names: ["answer"], description: "Display the answer section of a reply" },
  {
    names: ["authority"],
    description: "Display the authority section of a reply",
  },
  {
    names: ["besteffort"],
    description:
      "Attempt to display the contents of messages which are malformed",
  },
  {
    names: ["cdflag"],
    description: "Set the CD (checking disabled) bit in the query",
  },
  {
    names: ["class", "cl"],
    description: "Display the CLASS when printing the record",
  },
  {
    names: ["cmd"],
    description:
      "Print the initial comment identifying the version of dig and the query options that have been applied",
  },
  { names: ["comments"], description: "Display comment lines in the output" },
  {
    names: ["crypto"],
    description: "Display cryptographic fields in DNSSEC records",
  },
  {
    names: ["defname"],
    description: "Deprecated synonym for +search",
    deprecated: true,
  },
  {
    names: ["dnssec"],
    description:
      "Request DNSSEC records by setting the DNSSEC OK bit (DO) in the OPT record",
  },
  {
    names: ["ednsnegotiation"],
    description: "Enable EDNS version negotiation",
  },
  { names: ["expire"], description: "Send an EDNS Expire option" },
  {
    names: ["fail"],
    description: "Do not try the next server if a SERVFAIL is received",
  },
  {
    names: ["identify"],
    description:
      "Show the IP address and port number that supplied the answer when +short is enabled",
  },
  {
    names: ["idnout"],
    description: "Convert punycode on output (requires IDN support)",
  },
  {
    names: ["ignore"],
    description:
      "Ignore truncation in UDP responses instead of retrying with TCP",
  },
  {
    names: ["keepopen"],
    description:
      "Keep the TCP socket open between queries and reuse it rather than creating a new one for each lookup",
  },
  {
    names: ["multiline"],
    description:
      "Print records like the SOA records in a verbose multi-line format with human-readable comments",
  },
  {
    names: ["nsid"],
    description: "Include an EDNS name server ID request when sending a query",
  },
  {
    names: ["nssearch"],
    description:
      "Find the authoritative name servers for the zone and display the SOA record that each one has",
  },
  {
    names: ["onesoa"],
    description: "Print only one (starting) SOA record when performing an AXFR",
  },
  { names: ["qr"], description: "Print the query as it is sent" },
  {
    names: ["question"],
    description:
      "Print the question section of a query when an answer is returned",
  },
  {
    names: ["recurse", "rdflag"],
    description: "Set the RD (recursion desired) bit in the query",
  },
  {
    names: ["rrcomments"],
    description: "Display per-record comments in the output",
  },
  {
    names: ["search"],
    description:
      "Use the search list defined by the searchlist or domain directive in resolv.conf",
  },
  { names: ["short"], description: "Provide a terse answer" },
  {
    names: ["showsearch"],
    description: "Perform a search showing intermediate results",
  },
  { names: ["stats"], description: "Display query statistics" },
  {
    names: ["tcp", "vc"],
    description: "Use TCP when querying name servers",
  },
  {
    names: ["trace"],
    description:
      "Trace the delegation path from the root name servers for the name being looked up",
  },
  {
    names: ["ttlid"],
    description: "Display the TTL when printing the record",
  },
];

type QueryValueOption = {
  name: string;
  arg: string;
  description: string;
  // The value may be left out (+keyword[=value])
  optionalValue?: boolean;
  // A +nokeyword form exists
  negatable?: boolean;
  deprecated?: boolean;
};

// Query options of the form +keyword=value
const queryValueOptions: QueryValueOption[] = [
  {
    name: "bufsize",
    arg: "B",
    description:
      "Set the UDP message buffer size advertised using EDNS0 to B bytes",
  },
  {
    name: "cookie",
    arg: "####",
    description: "Send a COOKIE EDNS option, containing an optional value",
    optionalValue: true,
    negatable: true,
  },
  {
    name: "domain",
    arg: "somename",
    description:
      "Set the search list to contain the single domain somename and enable search list processing",
  },
  {
    name: "edns",
    arg: "#",
    description: "Specify the EDNS version to query with (0 to 255)",
    optionalValue: true,
    negatable: true,
  },
  {
    name: "ednsflags",
    arg: "#",
    description: "Set the must-be-zero EDNS flags bits (Z bits) to the value",
    optionalValue: true,
    negatable: true,
  },
  {
    name: "ednsopt",
    arg: "code[:value]",
    description:
      "Specify an EDNS option with code point code and optionally a payload of value as a hexadecimal string",
    optionalValue: true,
    negatable: true,
  },
  {
    name: "ndots",
    arg: "D",
    description:
      "Set the number of dots that have to appear in name for it to be considered absolute",
  },
  {
    name: "opcode",
    arg: "value",
    description: "Set the DNS message opcode to the specified value",
    negatable: true,
  },
  {
    name: "retry",
    arg: "T",
    description:
      "Set the number of times to retry UDP queries to the server (default 2)",
  },
  {
    name: "sit",
    arg: "####",
    description: "Deprecated synonym for +cookie",
    optionalValue: true,
    negatable: true,
    deprecated: true,
  },
  {
    name: "split",
    arg: "W",
    description:
      "Split long hex- or base64-formatted fields in resource records into chunks of W characters",
    negatable: true,
  },
  {
    name: "subnet",
    arg: "addr[/prefix-length]",
    description:
      "Send an EDNS Client Subnet option with the specified IP address or network prefix",
    negatable: true,
  },
  {
    name: "time",
    arg: "T",
    description: "Set the timeout for a query to T seconds (default 5)",
  },
  {
    name: "tries",
    arg: "T",
    description:
      "Set the number of times to try UDP queries to the server (default 3)",
  },
];

const queryOptions: Fig.Option[] = [
  ...queryFlags.flatMap(({ names, description, deprecated }): Fig.Option[] => [
    {
      name: names.map((name) => `+${name}`),
      description,
      ...(deprecated ? { deprecated } : {}),
    },
    {
      name: names.map((name) => `+no${name}`),
      description: `Negate +${names[0]}`,
      ...(deprecated ? { deprecated } : {}),
    },
  ]),
  ...queryValueOptions.flatMap(
    ({
      name,
      arg,
      description,
      optionalValue,
      negatable,
      deprecated,
    }): Fig.Option[] => [
      {
        name: `+${name}`,
        description,
        requiresSeparator: "=",
        args: optionalValue ? { name: arg, isOptional: true } : { name: arg },
        ...(deprecated ? { deprecated } : {}),
      },
      ...(negatable
        ? [
            {
              name: `+no${name}`,
              description: `Negate +${name}`,
              ...(deprecated ? { deprecated } : {}),
            },
          ]
        : []),
    ]
  ),
];

const recordTypes = [
  "A",
  "AAAA",
  "ANY",
  "AXFR",
  "CAA",
  "CNAME",
  "DNSKEY",
  "DS",
  "HINFO",
  "MX",
  "NS",
  "PTR",
  "SOA",
  "SRV",
  "TXT",
];

const dashOptions: Fig.Option[] = [
  {
    name: "-4",
    description: "Use IPv4 only",
    exclusiveOn: ["-6"],
  },
  {
    name: "-6",
    description: "Use IPv6 only",
    exclusiveOn: ["-4"],
  },
  {
    name: "-b",
    description: "Set the source IP address of the query",
    args: { name: "address[#port]" },
  },
  {
    name: "-c",
    description: "Set the query class (default IN)",
    args: { name: "class", suggestions: ["IN", "CH", "HS"] },
  },
  {
    name: "-f",
    description: "Batch mode: read a list of lookup requests from the file",
    args: { name: "file", template: "filepaths" },
  },
  {
    name: "-h",
    description: "Print the list of options and exit",
  },
  {
    name: "-i",
    description:
      "Do reverse IPv6 lookups using the obsolete RFC1886 IP6.INT domain",
  },
  {
    name: "-k",
    description: "Sign queries using TSIG with a key read from the file",
    args: { name: "keyfile", template: "filepaths" },
  },
  {
    name: "-m",
    description: "Enable memory usage debugging",
  },
  {
    name: "-p",
    description:
      "Send the query to a non-standard port on the server instead of port 53",
    args: { name: "port" },
  },
  {
    name: "-q",
    description:
      "The domain name to query, useful to distinguish the name from other arguments",
    args: { name: "name" },
  },
  {
    name: "-t",
    description:
      "The resource record type to query (default A), AXFR for a zone transfer or ixfr=N for an incremental zone transfer",
    args: { name: "type", suggestions: recordTypes },
  },
  {
    name: "-u",
    description: "Display times in microseconds instead of milliseconds",
  },
  {
    name: "-v",
    description: "Print the version number and exit",
  },
  {
    name: "-x",
    description:
      "Simplified reverse lookup of an IPv4 or IPv6 address (queries PTR records)",
    args: { name: "addr" },
  },
  {
    name: "-y",
    description:
      "Sign queries using TSIG with the given base64 key (prefer -k, the secret is visible in the process list)",
    args: { name: "[hmac:]keyname:secret" },
  },
];

const completionSpec: Fig.Spec = {
  name: "dig",
  description: "Domain Information Groper",
  options: [...dashOptions, ...queryOptions].map((option) => ({
    ...option,
    isPersistent: true,
  })),
  args: {
    name: "arguments",
    description: "[@server] [name] [type] [class] in any order",
    isOptional: true,
    isVariadic: true,
  },
  subcommands: [
    {
      name: "A",
      description: "Query Domain A Record",
    },
    {
      name: "AAAA",
      description: "Query Domain AAAA Record",
    },
    {
      name: "MX",
      description: "Query Domain MX Record",
    },
    {
      name: "CNAME",
      description: "Query Domain CNAME Record",
    },
    {
      name: "TXT",
      description: "Query Domain TXT Record",
    },
    {
      name: "NS",
      description: "Query NS Record",
    },
    {
      name: "SOA",
      description: "Query SOA Record",
    },
    {
      name: "PTR",
      description: "Query PTR Record",
    },
    {
      name: "SRV",
      description: "Query SRV Record",
    },
    {
      name: "CAA",
      description: "Query CAA Record",
    },
    {
      name: "ANY +noall +answer",
      description: "Query ALL DNS Records",
    },
    {
      name: "+nocomments +noquestion +noauthority +noadditional +nostats",
      description: "Query only answer section",
    },
  ],
};

export default completionSpec;
