// googler v4.3.2 (GitHub tag v4.3.2 = main HEAD, 2021-11-13; upstream is unmaintained, checked 2026-11-19). Source: read
// statically (not executed) the argparse definitions in the `googler` script, its man page and shipped completions at v4.3.2.
const completionSpec: Fig.Spec = {
  name: "googler",
  description: "Google from the command-line",
  options: [
    {
      name: ["-h", "--help"],
      description: "Show this help message and exit",
    },
    {
      name: ["-s", "--start"],
      description: "Start at the Nth result",
      args: {
        name: "N",
        default: "0",
      },
    },
    {
      name: ["-n", "--count"],
      description: "Show N results",
      args: {
        name: "N",
        default: "10",
      },
    },
    {
      name: ["-N", "--news"],
      description: "Show results from news section",
    },
    {
      name: ["-V", "--videos"],
      description: "Show results from videos section",
    },
    {
      name: ["-c", "--tld"],
      description:
        "Country-specific search with top-level domain .TLD, e.g., 'in' for India",
      args: {
        name: "TLD",
      },
    },
    {
      name: ["-l", "--lang"],
      description: "Display in language LANG",
      args: {
        name: "LANG",
      },
    },
    {
      name: ["-g", "--geoloc"],
      description:
        "Country-specific geolocation search with country code CC, e.g. 'in' for India",
      args: {
        name: "CC",
        description: "Country codes are the same as top-level domains",
      },
    },
    {
      name: ["-x", "--exact"],
      description: "Disable automatic spelling correction",
    },
    {
      name: "--colorize",
      description:
        "Whether to colorize output; 'auto' enables color when stdout is a tty device, without an argument it is 'always'",
      args: {
        name: "mode",
        default: "auto",
        isOptional: true,
        suggestions: ["auto", "always", "never"],
      },
    },
    {
      name: ["-C", "--nocolor"],
      description: "Equivalent to --colorize=never",
    },
    {
      name: "--colors",
      description:
        "Set output colors as a six-letter string (see the man page for details; default from $GOOGLER_COLORS or GKlgxy)",
      args: {
        name: "COLORS",
        default: "GKlgxy",
      },
    },
    {
      name: ["-j", "--first", "--lucky"],
      description: "Open the first result in web browser and exit",
    },
    {
      name: ["-t", "--time"],
      description:
        "Time limit search [h5 (5 hrs), d5 (5 days), w5 (5 weeks), m5 (5 months), y5 (5 years)]",
      args: {
        name: "dN",
      },
    },
    {
      name: "--from",
      description:
        "Starting date/month/year of date range. Can be used in conjunction with --to and overrides -t, --time",
      args: {
        name: "date",
        description:
          "American date format with slashes, e.g., 2/24/2020, 2/2020, 2020",
      },
    },
    {
      name: "--to",
      description: "Ending date/month/year of date range; see --from",
      args: {
        name: "date",
        description:
          "American date format with slashes, e.g., 2/24/2020, 2/2020, 2020",
      },
    },
    {
      name: ["-w", "--site"],
      description: "Search a site using Google",
      isRepeatable: true,
      args: {
        name: "SITE",
      },
    },
    {
      name: ["-e", "--exclude"],
      description: "Exclude site from results",
      isRepeatable: true,
      args: {
        name: "SITE",
      },
    },
    {
      name: "--unfilter",
      description: "Do not omit similar results",
    },
    {
      name: ["-p", "--proxy"],
      description: "Tunnel traffic through an HTTP proxy",
      args: {
        name: "PROXY",
        description: "In the form of [http://][user:password@]proxyhost[:port]",
      },
    },
    {
      name: "--noua",
      description: "Deprecated, has no effect",
      deprecated: true,
      hidden: true,
    },
    {
      name: "--notweak",
      description: "Disable TCP optimizations and forced TLS 1.2",
    },
    {
      name: "--json",
      description: "Output in JSON format; implies --noprompt",
    },
    {
      name: "--url-handler",
      description: "Custom script or cli utility to open results",
      args: {
        name: "UTIL",
      },
    },
    {
      name: "--show-browser-logs",
      description: "Do not suppress browser output (stdout and stderr)",
    },
    {
      name: ["--np", "--noprompt"],
      description: "Search and exit, do not prompt",
    },
    {
      name: ["-4", "--ipv4"],
      description:
        "Only connect over IPv4 (by default, IPv4 is preferred but IPv6 is used as a fallback)",
    },
    {
      name: ["-6", "--ipv6"],
      description: "Only connect over IPv6",
    },
    {
      name: ["-u", "--upgrade"],
      description: "Perform in-place self-upgrade",
    },
    {
      name: "--include-git",
      description: "When used with --upgrade, get latest git master",
    },
    {
      name: ["-v", "--version"],
      description: "Show program's version number and exit",
    },
    {
      name: ["-d", "--debug"],
      description: "Enable debugging",
    },
    {
      name: ["-D", "--debugger"],
      description: "Interact with the DOM in an IPython/pdb shell",
      hidden: true,
    },
    {
      name: "--parse",
      description: "Parse a dumped HTML file",
      hidden: true,
      args: {
        name: "file",
        template: "filepaths",
      },
    },
    {
      name: "--complete",
      description: "Print query completions for a prefix",
      hidden: true,
      args: {
        name: "prefix",
      },
    },
  ],
  args: {
    name: "KEYWORD",
    description: "Search keywords",
    isVariadic: true,
    isOptional: true,
  },
};

export default completionSpec;
