// Laravel Valet v4.14.0 (latest laravel/valet tag and Packagist release, 2026-11-19). Source: cli/app.php and the `valet` wrapper script at tag v4.14.0, read statically (macOS-only tool, not run here).
// Default `list`, `help`, `completion` commands and the global options come from symfony/console v8.1.11 (Application.php, ListCommand, HelpCommand, DumpCompletionCommand); `--silent` needs symfony/console 7.2 or newer.
// `valet share` forwards every dash-prefixed argument to the selected share tool; only the ngrok agent v3 `ngrok http` flags (ngrok/ngrok-docs data/generated/cli.json) are listed, the deprecated OAuth/OIDC/header ones are left out, and Expose / cloudflared flags are not enumerated.

const phpVersions = [
  "php@8.5",
  "php@8.4",
  "php@8.3",
  "php@8.2",
  "php@8.1",
  "php@8.0",
  "php@7.4",
  "php@7.3",
  "php@7.2",
  "php@7.1",
];

const ngrokRegions = ["us", "us-cal-1", "eu", "au", "ap", "sa", "jp", "in"];

const globalOptions: Fig.Option[] = [
  {
    name: ["-h", "--help"],
    description:
      "Display help for the given command. When no command is given display help for the list command",
    isPersistent: true,
  },
  {
    name: "--silent",
    description: "Do not output any message",
    isPersistent: true,
  },
  {
    name: ["-q", "--quiet"],
    description: "Only errors are displayed. All other output is suppressed",
    isPersistent: true,
  },
  {
    name: ["-V", "--version"],
    description: "Display this application version",
    isPersistent: true,
  },
  {
    name: "--ansi",
    description: "Force ANSI output",
    isPersistent: true,
  },
  {
    name: "--no-ansi",
    description: "Disable ANSI output",
    isPersistent: true,
  },
  {
    name: ["-n", "--no-interaction"],
    description: "Do not ask any interactive question",
    isPersistent: true,
  },
  {
    name: ["-v", "-vv", "-vvv", "--verbose"],
    description:
      "Increase the verbosity of messages: 1 for normal output, 2 for more verbose output and 3 for debug",
    isPersistent: true,
  },
];

const formatOption: Fig.Option = {
  name: "--format",
  description: "The output format (txt, xml, json, or md)",
  args: {
    name: "format",
    suggestions: ["txt", "xml", "json", "md"],
    default: "txt",
  },
};

const secureOption = (description: string): Fig.Option => ({
  name: "--secure",
  description,
});

const expireInOption: Fig.Option = {
  name: "--expireIn",
  description:
    "The amount of days the self signed certificate is valid for. Default is set to 368",
  args: {
    name: "days",
    default: "368",
  },
};

const caOption = (description: string): Fig.Option => ({
  name: "--ca",
  description,
});

const phpVersionArg: Fig.Arg = {
  name: "phpVersion",
  description: "The PHP version you want to use; e.g. php@8.2",
  suggestions: phpVersions,
  isOptional: true,
};

const siteOption = (
  description: string,
  extra: Partial<Fig.Option> = {}
): Fig.Option => ({
  name: "--site",
  description,
  args: {
    name: "site",
  },
  ...extra,
});

const phpProxySiteOption: Fig.Option = siteOption(
  "Specify the site to use to get the PHP version (e.g. if the site isn't linked as its directory name)",
  // The `valet` wrapper script only recognises the `--site=<name>` spelling here
  { requiresEquals: true }
);

const serviceArg = (suggestions: string[]): Fig.Arg => ({
  name: "service",
  description: "Name of a single service; all core Valet services when omitted",
  suggestions,
  isOptional: true,
});

const deprecatedNgrokOption = (
  name: string,
  description: string,
  replacement: string,
  arg?: string | Fig.Arg
): Fig.Option => ({
  name: `--${name}`,
  description: `${description} (deprecated, ${replacement})`,
  deprecated: true,
  ...(arg === undefined
    ? {}
    : { args: typeof arg === "string" ? { name: arg } : arg }),
});

const ngrokOption = (
  name: string,
  description: string,
  arg?: string | Fig.Arg,
  extra: Partial<Fig.Option> = {}
): Fig.Option => ({
  name: `--${name}`,
  description,
  ...(arg === undefined
    ? {}
    : { args: typeof arg === "string" ? { name: arg } : arg }),
  ...extra,
});

// Flags of the share tool selected with `valet share-tool`; Valet forwards every
// dash-prefixed argument of `valet share` to it. These are the ngrok agent v3 flags.
const shareOptions: Fig.Option[] = [
  ngrokOption("authtoken", "Ngrok.com authtoken identifying a user", "token"),
  deprecatedNgrokOption(
    "basic-auth",
    "Enforce basic auth on tunnel endpoint, 'user:password'",
    "use traffic policy instead",
    "user:password"
  ),
  ngrokOption("binding", "Ingress binding for an agent endpoint", {
    name: "binding",
    suggestions: [
      { name: "public", description: "Publicly addressable endpoint" },
      {
        name: "internal",
        description: "Only addressable from other ngrok endpoints",
      },
      {
        name: "kubernetes",
        description: "Projected into clusters running the ngrok operator",
      },
    ],
  }),
  ngrokOption(
    "config",
    "Path to config files; they are merged if multiple",
    { name: "config file", template: "filepaths" },
    { isRepeatable: true }
  ),
  ngrokOption(
    "description",
    "User editable description about this endpoint",
    "description"
  ),
  deprecatedNgrokOption(
    "domain",
    "Host tunnel on a custom subdomain or hostname (requires DNS CNAME)",
    "use --url instead",
    "domain"
  ),
  deprecatedNgrokOption(
    "host-header",
    "Set Host header; if 'rewrite' use local address hostname",
    "use traffic policy instead",
    { name: "host header", suggestions: ["rewrite"] }
  ),
  deprecatedNgrokOption(
    "hostname",
    "Host tunnel on custom hostname (requires DNS CNAME)",
    "use --url instead",
    "hostname"
  ),
  ngrokOption("inspect", "Enable/disable http introspection (default true)"),
  ngrokOption("log", "Path to log file, 'stdout', 'stderr' or 'false'", {
    name: "path",
    template: "filepaths",
    suggestions: ["stdout", "stderr", "false"],
  }),
  ngrokOption("log-format", "Log record format: 'term', 'logfmt', 'json'", {
    name: "format",
    suggestions: ["term", "logfmt", "json"],
  }),
  ngrokOption(
    "log-level",
    "Logging level: 'debug', 'info', 'warn', 'error', 'crit'",
    {
      name: "level",
      suggestions: ["debug", "info", "warn", "error", "crit"],
    }
  ),
  ngrokOption("metadata", "Metadata about this endpoint", "metadata"),
  ngrokOption("name", "User supplied name for this endpoint", "name"),
  ngrokOption("pooling-enabled", "Whether this endpoint can be pooled"),
  deprecatedNgrokOption(
    "region",
    "Ngrok server region",
    "ngrok automatically chooses the region with lowest latency",
    { name: "region", suggestions: ngrokRegions }
  ),
  deprecatedNgrokOption(
    "subdomain",
    "Host tunnel on a custom subdomain",
    "use --url instead",
    "subdomain"
  ),
  ngrokOption(
    "traffic-policy-file",
    "Path to traffic policy configuration YAML or JSON file, e.g. './path/to/policy.yml'",
    { name: "file", template: "filepaths" }
  ),
  ngrokOption(
    "traffic-policy-url",
    "URL to traffic policy configuration YAML or JSON file, e.g. 'https://example.com/policy.yml'",
    "url"
  ),
  ngrokOption(
    "upstream-proxy-protocol",
    "Version of proxy proto to use with this tunnel, empty if not unused",
    { name: "version", suggestions: ["1", "2"] }
  ),
  ngrokOption(
    "upstream-tls-verify",
    "Enables TLS verification of server TLS certificates"
  ),
  ngrokOption(
    "upstream-tls-verify-cas",
    "Path to CA cert to use to verify server certs",
    { name: "file", template: "filepaths" }
  ),
  ngrokOption("url", "Host endpoint on a URL", "url"),
];

const completionSpec: Fig.Spec = {
  name: "valet",
  description:
    "Valet is a Laravel development environment for macOS minimalists",
  options: globalOptions,
  subcommands: [
    {
      name: "completion",
      description: "Dump the shell completion script",
      args: {
        name: "shell",
        description:
          "The shell type; the value of the $SHELL env var is used when omitted",
        suggestions: ["bash", "fish", "zsh"],
        isOptional: true,
      },
      options: [
        {
          name: "--debug",
          description: "Tail the completion debug log",
        },
      ],
    },
    {
      name: "composer",
      description:
        "Proxy Composer commands with isolated site's PHP executable",
      args: {
        name: "command",
        description:
          "Composer command to run with isolated site's PHP executable",
        isOptional: true,
        isVariadic: true,
      },
      options: [phpProxySiteOption],
    },
    {
      name: "diagnose",
      description: "Output diagnostics to aid in debugging Valet",
      options: [
        {
          name: ["-p", "--print"],
          description: "Print diagnostics output while running",
        },
        {
          name: "--plain",
          description: "Format clipboard output as plain text",
        },
      ],
    },
    {
      name: "directory-listing",
      description:
        "Determine directory-listing behavior. Default is off, which means a 404 will display",
      args: {
        name: "status",
        description:
          "On or off. (default=off) will show a 404 page; [on] will display a listing if project folder exists but requested URI not found",
        suggestions: ["on", "off"],
        isOptional: true,
      },
    },
    {
      name: "fetch-share-url",
      description: "Get the URL to the current share tunnel",
      args: {
        name: "domain",
        isOptional: true,
      },
    },
    {
      name: ["forget", "unpark"],
      description:
        "Remove the current working (or specified) directory from Valet's list of paths",
      args: {
        name: "path",
        template: "folders",
        isOptional: true,
      },
    },
    {
      name: "help",
      description: "Display help for a command",
      args: {
        name: "command",
        isOptional: true,
        generators: {
          script: ["valet", "list", "--raw"],
          postProcess: function (out) {
            return out
              .split("\n")
              .filter((command) => command.trim() !== "")
              .map((command) => {
                const name = command.split(" ")[0];
                return { name: name, description: "Command", priority: 76 };
              });
          },
        },
      },
      options: [
        formatOption,
        { name: "--raw", description: "To output raw command help" },
      ],
    },
    {
      name: "install",
      description: "Install the Valet services",
    },
    {
      name: "isolate",
      description:
        "Change the version of PHP used by Valet to serve the current working directory",
      args: {
        name: "phpVersion",
        description: "The PHP version you want to use; e.g php@8.1",
        suggestions: phpVersions,
        isOptional: true,
      },
      options: [
        siteOption(
          "Specify the site to isolate (e.g. if the site isn't linked as its directory name)"
        ),
      ],
    },
    {
      name: "isolated",
      description: "List all sites using isolated versions of PHP",
    },
    {
      name: "link",
      description: "Link the current working directory to Valet",
      args: {
        name: "name",
        isOptional: true,
      },
      options: [
        secureOption("Link the site with a trusted TLS certificate"),
        {
          name: "--isolate",
          description:
            "Isolate the site to the PHP version specified in the current working directory's .valetrc file",
        },
      ],
    },
    {
      name: "links",
      description: "Display all of the registered Valet links",
    },
    {
      name: "list",
      description: "List commands",
      args: {
        name: "namespace",
        description: "The namespace name",
        isOptional: true,
      },
      options: [
        { name: "--raw", description: "To output raw command list" },
        formatOption,
        {
          name: "--short",
          description: "To skip describing commands' arguments",
        },
      ],
    },
    {
      name: "log",
      description: "Tail log file",
      args: {
        name: "key",
        description:
          'The key of the log to tail; custom logs can be added with a "logs" object in the Valet config file',
        suggestions: ["nginx", "php-fpm"],
        isOptional: true,
      },
      options: [
        {
          name: ["-f", "--follow"],
          description: "Follow the log as it grows",
        },
        {
          name: ["-l", "--lines"],
          description: "Number of lines to show",
          args: {
            name: "lines",
          },
        },
      ],
    },
    {
      name: "loopback",
      description: "Get or set the loopback address used for Valet sites",
      args: {
        name: "loopback",
        description: "The loopback IP address to use",
        isOptional: true,
      },
    },
    {
      name: ["on-latest-version", "latest"],
      description: "Determine if this is the latest version of Valet",
    },
    {
      name: "open",
      description:
        "Open the site for the current (or specified) directory in your browser",
      args: {
        name: "domain",
        isOptional: true,
      },
    },
    {
      name: "park",
      description:
        "Register the current working (or specified) directory with Valet",
      args: {
        name: "path",
        template: "folders",
        isOptional: true,
      },
    },
    {
      name: "parked",
      description: "Display all the current sites within parked paths",
    },
    {
      name: "paths",
      description: "Get all of the paths registered with Valet",
    },
    {
      name: "php",
      description: "Proxy PHP commands with isolated site's PHP executable",
      args: {
        name: "command",
        description: "Command to run with isolated site's PHP executable",
        isOptional: true,
        isVariadic: true,
      },
      options: [phpProxySiteOption],
    },
    {
      name: "proxies",
      description: "Display all of the proxy sites",
    },
    {
      name: "proxy",
      description:
        "Create an Nginx proxy site for the specified host. Useful for docker, mailhog etc",
      args: [
        {
          name: "domain",
        },
        {
          name: "host",
        },
      ],
      options: [secureOption("Create a proxy with a trusted TLS certificate")],
    },
    {
      name: "renew",
      description: "Renews all domains with a trusted TLS certificate",
      options: [
        expireInOption,
        caOption(
          "Renew the Certificate Authority certificate before renewing the site certificates"
        ),
      ],
    },
    {
      name: "restart",
      description: "Restart the Valet services",
      args: serviceArg(["dnsmasq", "nginx", "php", ...phpVersions]),
    },
    {
      name: "secure",
      description: "Secure the given domain with a trusted TLS certificate",
      args: {
        name: "domain",
        isOptional: true,
      },
      options: [expireInOption],
    },
    {
      name: "secured",
      description: "Display all of the currently secured sites",
      options: [
        {
          name: "--expiring",
          description:
            "Limits the results to only sites expiring within the next 60 days",
        },
        {
          name: "--days",
          description:
            "To be used with --expiring. Limits the results to only sites expiring within the next X days. Default is set to 60",
          dependsOn: ["--expiring"],
          args: {
            name: "days",
            default: "60",
          },
        },
        caOption(
          "Include the Certificate Authority certificate in the list of site certificates"
        ),
      ],
    },
    {
      name: "set-ngrok-token",
      description: "Set the Ngrok auth token",
      args: {
        name: "token",
        isOptional: true,
      },
    },
    {
      name: "share",
      description: "Generate a publicly accessible URL for your project",
      options: shareOptions,
    },
    {
      name: "share-tool",
      description: "Get or set the name of the current share tool",
      args: {
        name: "tool",
        suggestions: ["cloudflared", "expose", "ngrok"],
        isOptional: true,
      },
    },
    {
      name: "start",
      description: "Start the Valet services",
      args: serviceArg(["dnsmasq", "nginx", "php"]),
    },
    {
      name: "status",
      description:
        "Output the status of Valet and its installed services and config",
    },
    {
      name: "stop",
      description:
        'Stop the core Valet services, or all services by specifying "all"',
      args: serviceArg(["all", "dnsmasq", "nginx", "php"]),
    },
    {
      name: ["tld", "domain"],
      description: "Get or set the TLD used for Valet sites",
      args: {
        name: "tld",
        suggestions: ["test", "local"],
        isOptional: true,
      },
    },
    {
      name: "trust",
      description:
        "Add sudoers files for Brew and Valet to make Valet commands run without passwords",
      options: [
        {
          name: "--off",
          description:
            "Remove the sudoers files so normal sudo password prompts are required",
        },
      ],
    },
    {
      name: "uninstall",
      description: "Uninstall the Valet services",
      options: [
        {
          name: "--force",
          description:
            "Do a forceful uninstall of Valet and related Homebrew pkgs",
        },
      ],
    },
    {
      name: "unisolate",
      description:
        "Stop customizing the version of PHP used by Valet to serve the current working directory",
      options: [
        siteOption(
          "Specify the site to un-isolate (e.g. if the site isn't linked as its directory name)"
        ),
      ],
    },
    {
      name: "unlink",
      description: "Remove the specified Valet link",
      args: {
        name: "name",
        isOptional: true,
      },
    },
    {
      name: "unproxy",
      description: "Delete an Nginx proxy config",
      args: {
        name: "domain",
      },
    },
    {
      name: "unsecure",
      description:
        "Stop serving the given domain over HTTPS and remove the trusted TLS certificate",
      args: {
        name: "domain",
        isOptional: true,
      },
      options: [
        {
          name: "--all",
          description: "Stop serving all Valet sites over HTTPS",
        },
      ],
    },
    {
      name: "use",
      description: "Change the version of PHP used by Valet",
      args: phpVersionArg,
      options: [
        {
          name: "--force",
          description:
            "Re-link and re-configure PHP even when Valet is already using that version",
        },
      ],
    },
    {
      name: "which",
      description:
        "Display which Valet driver serves the current working directory",
    },
    {
      name: "which-php",
      description: "Get the PHP executable path for a given site",
      args: {
        name: "site",
        description: "The site to get the PHP executable path for",
        isOptional: true,
      },
    },
  ],
};

export default completionSpec;
