// Electron v45.4.1 (npm "latest" dist-tag and git tag v45.4.1, 2026-11-19).
// Source: default_app/main.ts (CLI parsing and usage text) and docs/api/command-line-switches.md at tag v45.4.1,
// read statically from raw.githubusercontent.com; the electron binary was not downloaded or run.
// Chromium switches that are not listed in the Electron docs are deliberately not included.

// Electron/Chromium switches only accept their value as --switch=value
const switchWithValue = (
  name: string,
  description: string,
  args: Fig.Arg,
  extra: Partial<Fig.Option> = {}
): Fig.Option => ({
  name,
  description,
  requiresSeparator: true,
  args,
  ...extra,
});

const hostRulesExamples: Fig.Suggestion[] = [
  { name: "MAP * 127.0.0.1", description: "Map all hostnames to 127.0.0.1" },
  {
    name: "MAP * baz, EXCLUDE www.google.com",
    description: "Remap everything to baz except www.google.com",
  },
];

const completionSpec: Fig.Spec = {
  name: "electron",
  description:
    "Build cross platform desktop apps with JavaScript, HTML and CSS",
  args: {
    name: "path",
    description:
      "A path to an Electron app: an index.js file, a folder with a package.json or index.js, an .html/.htm file or an http(s)/file URL",
    template: ["filepaths", "folders"],
  },
  options: [
    {
      name: ["-i", "--interactive"],
      description: "Open a REPL to the main process",
    },
    {
      name: ["-r", "--require"],
      description: "Module to preload (option can be repeated)",
      isRepeatable: true,
      args: {
        name: "module",
        template: "filepaths",
      },
    },
    {
      name: ["-v", "--version"],
      description: "Print the version",
    },
    {
      name: ["-a", "--abi"],
      description: "Print the Node ABI version",
    },
    {
      name: "--no-help",
      description:
        "Do not print the usage message when started without an app (same as ELECTRON_NO_HELP)",
    },
    switchWithValue("--app", "Path of the Electron app to run", {
      name: "path",
      template: ["filepaths", "folders"],
    }),

    // Electron CLI flags
    switchWithValue(
      "--auth-server-whitelist",
      "Comma-separated list of servers for which integrated authentication is enabled",
      { name: "url" }
    ),
    switchWithValue(
      "--auth-negotiate-delegate-whitelist",
      "Comma-separated list of servers for which delegation of user credentials is required",
      { name: "url" }
    ),
    {
      name: "--disable-ntlm-v2",
      description: "Disable NTLM v2 for POSIX platforms, no effect elsewhere",
    },
    {
      name: "--disable-http-cache",
      description: "Disable the disk cache for HTTP requests",
    },
    {
      name: "--disable-http2",
      description: "Disable HTTP/2 and SPDY/3.1 protocols",
    },
    {
      name: "--disable-geolocation",
      description:
        "Disable the Geolocation API, permission requests are denied (macOS only)",
    },
    {
      name: "--disable-renderer-backgrounding",
      description:
        "Prevent Chromium from lowering the priority of invisible pages' renderer processes",
    },
    switchWithValue(
      "--disk-cache-size",
      "Force the maximum disk space used by the disk cache, in bytes",
      { name: "size" }
    ),
    switchWithValue(
      "--enable-logging",
      "Print Chromium's logging to stderr (or to a log file with =file)",
      { name: "file", isOptional: true, template: "filepaths" }
    ),
    switchWithValue(
      "--force-fieldtrials",
      "Field trials to be forcefully enabled or disabled",
      { name: "trials" }
    ),
    switchWithValue(
      "--host-rules",
      "Comma-separated list of rules that control how hostnames are mapped (use --host-resolver-rules instead)",
      { name: "rules", suggestions: hostRulesExamples },
      { deprecated: true }
    ),
    switchWithValue(
      "--host-resolver-rules",
      "Comma-separated list of rules that control how hostnames are mapped by the host resolver",
      { name: "rules", suggestions: hostRulesExamples }
    ),
    {
      name: "--ignore-certificate-errors",
      description: "Ignore certificate related errors",
    },
    switchWithValue(
      "--ignore-connections-limit",
      "Ignore the connections limit for this comma-separated list of domains",
      { name: "domains" }
    ),
    switchWithValue(
      "--js-flags",
      "Flags passed to the V8 engine (use --js-flags=--help to list them)",
      { name: "flags" }
    ),
    switchWithValue("--lang", "Set a custom locale", { name: "locale" }),
    switchWithValue(
      "--log-file",
      "Write logs to this path when --enable-logging is specified (the parent directory must exist)",
      { name: "path", template: "filepaths" }
    ),
    switchWithValue(
      "--log-net-log",
      "Enable net log events to be saved and write them to this path",
      { name: "path", template: "filepaths" }
    ),
    switchWithValue(
      "--log-level",
      "Set the verbosity of logging when used together with --enable-logging",
      {
        name: "level",
        suggestions: [
          { name: "0", description: "Info" },
          { name: "1", description: "Warning" },
          { name: "2", description: "Error" },
          { name: "3", description: "Fatal" },
        ],
      }
    ),
    {
      name: "--no-proxy-server",
      description:
        "Do not use a proxy server and always make direct connections",
    },
    {
      name: "--no-sandbox",
      description:
        "Disable the Chromium sandbox, forcing renderer and helper processes to run unsandboxed (testing only)",
    },
    {
      name: "--no-stdio-init",
      description: "Disable stdio initialization during Node initialization",
    },
    switchWithValue(
      "--proxy-bypass-list",
      "Bypass the proxy server for this semicolon-separated list of hosts (requires --proxy-server)",
      { name: "hosts" }
    ),
    switchWithValue(
      "--proxy-pac-url",
      "Use the PAC script at the specified URL",
      { name: "url" }
    ),
    switchWithValue(
      "--proxy-server",
      "Use a specified proxy server, overriding the system setting",
      { name: "address:port" }
    ),
    switchWithValue(
      "--remote-debugging-port",
      "Enable remote debugging over HTTP on the specified port",
      { name: "port" }
    ),
    switchWithValue(
      "--v",
      "Default maximal active V-logging level (only works with --enable-logging)",
      { name: "log_level" }
    ),
    switchWithValue(
      "--vmodule",
      "Per-module maximal V-logging levels overriding --v (only works with --enable-logging)",
      { name: "pattern" }
    ),
    {
      name: "--force_high_performance_gpu",
      description:
        "Force using the discrete GPU when multiple GPUs are available",
    },
    {
      name: "--force_low_power_gpu",
      description:
        "Force using the integrated GPU when multiple GPUs are available",
    },
    switchWithValue(
      "--xdg-portal-required-version",
      "Minimum required XDG portal version to use the portal backend for file dialogs on Linux (default: 3)",
      { name: "version" }
    ),

    // Node.js flags supported by Electron
    switchWithValue(
      "--inspect",
      "Activate the inspector on host:port (default: 127.0.0.1:9229)",
      { name: "[host:]port", isOptional: true }
    ),
    switchWithValue(
      "--inspect-brk",
      "Activate the inspector on host:port and break at start of the user script (default: 127.0.0.1:9229)",
      { name: "[host:]port", isOptional: true }
    ),
    switchWithValue(
      "--inspect-brk-node",
      "Activate the inspector on host:port and break at start of the first internal script (default: 127.0.0.1:9229)",
      { name: "[host:]port", isOptional: true }
    ),
    switchWithValue(
      "--inspect-port",
      "Set the host:port to be used when the inspector is activated (default host: 127.0.0.1)",
      { name: "[host:]port" }
    ),
    switchWithValue(
      "--inspect-publish-uid",
      "Specify ways of exposing the inspector web socket URL",
      {
        name: "mode",
        suggestions: [
          {
            name: "stderr,http",
            description: "Both stderr and HTTP (default)",
          },
          { name: "stderr" },
          { name: "http" },
        ],
      }
    ),
    {
      name: "--experimental-network-inspection",
      description:
        "Enable DevTools network inspector events for requests made by the Node.js http and https modules",
    },
    {
      name: "--experimental-inspector-network-resource",
      description:
        "Enable resolving source maps over the network when using the Node.js inspector",
    },
    {
      name: "--no-deprecation",
      description: "Silence deprecation warnings",
    },
    {
      name: "--throw-deprecation",
      description: "Throw errors for deprecations",
    },
    {
      name: "--trace-deprecation",
      description: "Print stack traces for deprecations",
    },
    {
      name: "--trace-warnings",
      description: "Print stack traces for process warnings",
    },
    switchWithValue(
      "--dns-result-order",
      "Set the default value of the verbatim parameter in Node.js dns.lookup()",
      {
        name: "order",
        suggestions: [
          { name: "ipv4first", description: "Set verbatim to false" },
          { name: "verbatim", description: "Set verbatim to true (default)" },
        ],
      }
    ),
    switchWithValue(
      "--diagnostic-dir",
      "Directory to which Node.js diagnostic output files are written (default: current directory)",
      { name: "directory", template: "folders" }
    ),
    {
      name: "--no-experimental-global-navigator",
      description: "Disable the Navigator API on the global scope from Node.js",
    },
    {
      name: "--experimental-transform-types",
      description:
        "Enable transformation of TypeScript-only syntax into JavaScript code",
    },
  ],
};

export default completionSpec;
