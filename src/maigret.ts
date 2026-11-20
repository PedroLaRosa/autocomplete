// Maigret v0.6.6 (PyPI / soxoj/maigret tag v0.6.6, 2026-11-19). Source: argparse definitions in maigret/maigret.py, SUPPORTED_IDS in maigret/checking.py, SUPPORTED_JSON_REPORT_FORMATS in maigret/report.py and defaults in maigret/resources/settings.json at tag v0.6.6, read statically; the CLI was not run.

const idTypes = [
  "username",
  "yandex_public_id",
  "gaia_id",
  "vk_id",
  "ok_id",
  "wikimapia_uid",
  "steam_id",
  "uidme_uguid",
  "yelp_userid",
  "orcid",
  "qq_id",
  "bilibili_id",
];

const completionSpec: Fig.Spec = {
  name: "maigret",
  description:
    "Maigret is an easy-to-use and powerful OSINT tool for collecting a dossier on a person by username only",
  args: {
    name: "user",
    description: "The username for which you want to search sites",
    isVariadic: true,
    isOptional: true,
  },
  options: [
    {
      name: ["--help", "-h"],
      description: "Show help message and exit",
    },
    {
      name: "--version",
      description: "Display version information and dependencies",
    },
    {
      name: "--input-file",
      args: {
        name: "Path",
        description:
          "One identifier per line, '-' for stdin; a line can carry its own id type, e.g. vk_id:12345",
        template: "filepaths",
      },
      description: "Read identifiers from a file, one per line",
    },
    {
      name: "--timeout",
      args: {
        name: "Timeout",
        description: "Timeout in seconds",
        default: "30",
      },
      description:
        "Time in seconds to wait for response to requests. A longer timeout will be more likely to get results from slow sites. On the other hand, this may cause a long delay to gather all results",
      icon: "⚙️",
    },
    {
      name: "--retries",
      args: {
        name: "Retries",
        description: "Number of attempts",
        default: "0",
      },
      description: "Attempts to restart temporarily failed requests",
      icon: "⚙️",
    },
    {
      name: ["-n", "--max-connections"],
      args: {
        name: "Connections",
        description: "Number connections",
        default: "100",
      },
      description: "Allowed number of concurrent connections",
      icon: "⚙️",
    },
    {
      name: "--dns-resolver",
      args: {
        name: "Resolver",
        suggestions: [
          {
            name: "async",
            description: "Async resolver from aiohttp (aiodns/c-ares), fastest",
          },
          {
            name: "threaded",
            description: "OS getaddrinfo via a threadpool, respects system DNS",
          },
        ],
        default: "async",
      },
      description:
        "DNS resolver to use. Switch to 'threaded' if every site reports 'Could not contact DNS servers'",
      icon: "⚙️",
    },
    {
      name: "--no-recursion",
      description:
        "Disable recursive search by additional data extracted from pages",
      icon: "⚙️",
    },
    {
      name: "--no-extracting",
      description:
        "Disable parsing pages for additional data and other usernames",
      icon: "⚙️",
    },
    {
      name: "--enrich",
      description:
        "Fetch secondary API/JSON endpoints derived from profile URLs and merge extracted fields into results (adds extra HTTP requests per claimed site)",
      icon: "⚙️",
    },
    {
      name: "--id-type",
      args: {
        name: "Type",
        description: "Type of identifier",
        suggestions: idTypes,
        default: "username",
      },
      description: "Specify identifier(s) type (default: username)",
      icon: "⚙️",
    },
    {
      name: "--permute",
      description:
        "Permute at least 2 usernames to generate more possible usernames",
    },
    {
      name: "--db",
      args: {
        name: "DB path",
        description: "DB path",
        template: ["filepaths"],
      },
      description:
        "Load Maigret database from a JSON file or HTTP web resource",
      icon: "🗄",
    },
    {
      name: "--no-autoupdate",
      description: "Disable automatic database updates on startup",
      icon: "🗄",
    },
    {
      name: "--force-update",
      description: "Force check for database updates and download if available",
      icon: "🗄",
    },
    {
      name: "--cookies-jar-file",
      args: {
        name: "Cookie file",
        description: "Cookie file",
        template: ["filepaths"],
      },
      description: "File with cookies",
      icon: "🍪",
    },
    {
      name: "--ignore-ids",
      args: {
        name: "Ignored ids",
        description: "Ignored ids",
      },
      isRepeatable: true,
      description: "Do not make search by the specified username or other ids",
    },
    {
      name: ["-fo", "--folderoutput"],
      args: {
        name: "Reports path",
        description: "Reports path",
        template: "folders",
      },
      description:
        "If using multiple usernames, the output of the results will be saved to this folder",
    },
    {
      name: ["-p", "--proxy"],
      args: {
        name: "Proxy URL",
        description: "Proxy URL",
      },
      description:
        "Make requests over a proxy. e.g. socks5://127.0.0.1:1080 (socks5:// and socks5h:// are equivalent, both resolve at the proxy)",
    },
    {
      name: "--tor-proxy",
      args: {
        name: "Tor Proxy URL",
        description: "Tor Proxy URL",
        default: "socks5://127.0.0.1:9050",
      },
      description: "Specify URL of your Tor gateway",
    },
    {
      name: "--i2p-proxy",
      args: {
        name: "I2P URL",
        description: "I2P URL",
        default: "http://127.0.0.1:4444",
      },
      description: "Specify URL of your I2P gateway",
    },
    {
      name: "--with-domains",
      description:
        "Enable (experimental) feature of checking domains on usernames",
    },
    {
      name: "--cloudflare-bypass",
      description:
        "Enable Cloudflare webgate bypass for sites with protection cf_js_challenge / cf_firewall / webgate (requires a local CloudflareBypassForScraping instance configured in settings.json)",
    },

    // Site filtering
    {
      name: ["-a", "--all-sites"],
      description: "Use all sites for scan",
      icon: "🌍",
    },
    {
      name: "--top-sites",
      args: {
        name: "N",
        description: "Number of sites",
        default: "500",
      },
      description: "Count of sites for scan ranked by Alexa Top",
    },
    {
      name: "--tags",
      args: {
        name: "Tags",
        description: "Comma-separated list of tags",
      },
      description: "Specify tags of sites (see `--stats`)",
    },
    {
      name: "--exclude-tags",
      args: {
        name: "Tags",
        description: "Comma-separated list of tags",
      },
      description: "Specify tags to exclude from search (blacklist)",
    },
    {
      name: "--keywords",
      args: {
        name: "Keyword",
        isVariadic: true,
      },
      description:
        "Specify keywords to search for in HTML content. Sites containing both username AND any keyword get special highlighting",
    },
    {
      name: "--site",
      args: {
        name: "Site name",
        // TODO: autocomplete from https://github.com/soxoj/maigret/blob/main/sites.md
      },
      isRepeatable: true,
      description:
        "Limit analysis to just the specified sites (multiple option)",
    },
    {
      name: "--use-disabled-sites",
      description:
        "Use disabled sites to search (may cause many false positives)",
    },

    // Operating modes
    {
      name: "--parse",
      args: {
        name: "Parse URL",
      },
      description:
        "Parse page by URL and extract username and IDs to use for search",
    },
    {
      name: "--submit",
      args: {
        name: "Site URL",
      },
      description: "URL of existing profile in new site to submit",
    },
    {
      name: "--self-check",
      description:
        "Do self check for sites and database. Use --auto-disable to disable failing sites",
    },
    {
      name: "--auto-disable",
      description:
        "With --self-check: automatically disable sites that fail checks",
      dependsOn: ["--self-check"],
    },
    {
      name: "--diagnose",
      description:
        "With --self-check: print detailed diagnosis for each failing site",
      dependsOn: ["--self-check"],
    },
    {
      name: "--stats",
      description:
        "Show database statistics (most frequent sites engines and tags)",
    },
    {
      name: "--web",
      args: {
        name: "Port",
        description: "Port of the web interface",
        isOptional: true,
        default: "5000",
      },
      description: "Launch the web interface on the specified port",
    },

    // Output options
    {
      name: "--print-not-found",
      description: "Print sites where the username was not found",
    },
    {
      name: "--print-errors",
      description:
        "Print errors messages: connection, captcha, site country ban, etc",
    },
    {
      name: ["-v", "--verbose"],
      description: "Display extra information and metrics",
    },
    {
      name: ["--info", "-vv"],
      description: "Display extra/service information and metrics",
    },
    {
      name: ["--debug", "-vvv", "-d"],
      description:
        "Display extra/service/debug information and metrics, save responses in debug.log",
    },
    {
      name: "--no-color",
      description: "Don't color terminal output",
    },
    {
      name: "--no-progressbar",
      description: "Don't show progressbar",
    },

    // Report formats
    {
      name: ["-T", "--txt"],
      description: "Create a TXT report (one report per username)",
    },
    {
      name: ["-C", "--csv"],
      description: "Create a CSV report (one report per username)",
    },
    {
      name: ["-H", "--html"],
      description:
        "Create an HTML report file (general report on all usernames)",
    },
    {
      name: ["-X", "--xmind"],
      description:
        "Generate a legacy XML XMind mindmap with a manifest for modern readers (one report per username)",
    },
    {
      name: ["-P", "--pdf"],
      description: "Generate a PDF report (general report on all usernames)",
    },
    {
      name: ["-M", "--md"],
      description:
        "Generate a Markdown report (general report on all usernames)",
    },
    {
      name: ["-G", "--graph"],
      description: "Generate a graph report (general report on all usernames)",
    },
    {
      name: "--neo4j",
      description:
        "Generate a Neo4j Cypher report (general report on all usernames)",
    },
    {
      name: ["-J", "--json"],
      args: {
        name: "Type",
        suggestions: ["simple", "ndjson"],
      },
      description:
        "Generate a JSON report of specific type: simple, ndjson (one report per username)",
    },
    {
      name: "--ai",
      description:
        "Generate an AI-powered analysis of the search results using OpenAI API (requires OPENAI_API_KEY env var or openai_api_key in settings)",
    },
    {
      name: "--ai-model",
      args: {
        name: "Model",
        description: "OpenAI model name",
        default: "gpt-5.4",
      },
      description: "OpenAI model to use for AI analysis",
    },
    {
      name: "--reports-sorting",
      args: {
        name: "Type",
        suggestions: ["default", "data"],
      },
      description:
        "Method of results sorting in reports (default: in order of getting the result)",
    },
  ],
};

export default completionSpec;
