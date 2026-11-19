// Playwright v1.65.1 (latest `playwright` / `@playwright/test` on npm, 2026-11-19).
// Source: the commander definitions read statically from the published npm tarballs, checked against the registry
// integrity hashes: playwright/lib/program.js (test, show-report, merge-reports, clear-cache, init-agents, init-skills)
// and playwright-core/lib/coreBundle.js (open, codegen, install, install-deps, uninstall, cr/ff/wk, screenshot, pdf,
// show-trace, trace, cli and mcp). The binary was not run.
// Omitted on purpose: hidden internal commands (run-driver, run-server, launch-server, mark-docker-image, test-server,
// run-test-mcp-server), the hidden mcp options (--remote-header, --vision) and the sub-commands of `playwright cli`
// (the separate playwright-cli tool). Not covered: the Python, Java and .NET flavours of the CLI.
const testsGenerator: Fig.Generator = {
  custom: async (tokens, executeShellCommand) => {
    // TODO: load the list of test files specified in testDir on playwright.config file
    return [] as Fig.Suggestion[];
  },
};

const browserSuggestions: Fig.Suggestion[] = [
  {
    name: "chromium",
    displayName: "Chromium",
  },
  {
    name: "chromium-headless-shell",
    displayName: "Chromium Headless Shell",
  },
  {
    name: "chrome-for-testing",
    displayName: "Chrome for Testing",
    description: "Alias for chromium",
  },
  {
    name: "chrome",
    displayName: "Chrome",
  },
  {
    name: "chrome-beta",
    displayName: "Chrome Beta",
  },
  {
    name: "msedge",
    displayName: "Microsoft Edge",
  },
  {
    name: "msedge-beta",
    displayName: "Microsoft Edge Beta",
  },
  {
    name: "msedge-dev",
    displayName: "Microsoft Edge Dev",
  },
  {
    name: "firefox",
    displayName: "Firefox",
  },
  {
    name: "webkit",
    displayName: "WebKit",
  },
  {
    name: "webkit-wsl",
    displayName: "WebKit (WSL)",
    description: "WebKit running in WSL, Windows only",
  },
  {
    name: "ffmpeg",
    displayName: "FFmpeg",
  },
  {
    name: "android",
    displayName: "Android",
  },
];

const reporterSuggestions = [
  "list",
  "line",
  "dot",
  "failures",
  "json",
  "junit",
  "null",
  "github",
  "html",
  "blob",
  "perfetto",
  "coverage",
];

const traceModes = [
  "on",
  "off",
  "on-first-retry",
  "on-all-retries",
  "retain-on-failure",
  "retain-on-first-failure",
  "retain-on-failure-and-retries",
];

const helpOption: Fig.Option = {
  name: ["--help", "-h"],
  description: "Display help for command",
  priority: 1,
};

const configOption: Fig.Option = {
  name: ["-c", "--config"],
  description:
    'Configuration file, or a test directory with optional "playwright.config.{m,c}?{js,ts}"',
  args: {
    name: "file",
    template: ["filepaths", "folders"],
  },
};

const loopOption = (loops: string[], defaultLoop?: string): Fig.Option => ({
  name: "--loop",
  description: "Agentic loop provider",
  args: {
    name: "loop",
    suggestions: loops,
    default: defaultLoop,
  },
});

const waitOptions = (action: string): Fig.Option[] => [
  {
    name: "--wait-for-selector",
    description: `Wait for selector before ${action}`,
    args: { name: "selector" },
  },
  {
    name: "--wait-for-timeout",
    description: `Wait for timeout in milliseconds before ${action}`,
    args: { name: "timeout" },
  },
];

// Options shared by open, codegen, cr, ff, wk, screenshot and pdf
const openOptions: Fig.Option[] = [
  {
    name: ["-b", "--browser"],
    description:
      "Browser to use, one of cr, chromium, ff, firefox, wk, webkit (default: chromium)",
    args: {
      name: "browserType",
      suggestions: ["cr", "chromium", "ff", "firefox", "wk", "webkit"],
    },
  },
  {
    name: "--block-service-workers",
    description: "Block service workers",
  },
  {
    name: "--channel",
    description:
      'Chromium distribution channel, "chrome", "chrome-beta", "msedge-dev", etc',
    args: { name: "channel" },
  },
  {
    name: "--color-scheme",
    description: 'Emulate preferred color scheme, "light" or "dark"',
    args: { name: "scheme", suggestions: ["light", "dark"] },
  },
  {
    name: "--device",
    description: 'Emulate device, for example "iPhone 11"',
    args: { name: "deviceName" },
  },
  {
    name: "--geolocation",
    description:
      'Specify geolocation coordinates, for example "37.819722,-122.478611"',
    args: { name: "coordinates" },
  },
  {
    name: "--http-credentials",
    description:
      'Specify HTTP authentication credentials as "username:password", for example --http-credentials="admin:secret"',
    args: { name: "credentials" },
  },
  {
    name: "--ignore-https-errors",
    description: "Ignore https errors",
  },
  {
    name: "--load-storage",
    description:
      "Load context storage state from the file, previously saved with --save-storage",
    args: { name: "filename", template: "filepaths" },
  },
  {
    name: "--lang",
    description: 'Specify language / locale, for example "en-GB"',
    args: { name: "language" },
  },
  {
    name: "--proxy-server",
    description:
      'Specify proxy server, for example "http://myproxy:3128", "http://user:password@myproxy:3128" or "socks5://myproxy:8080"',
    args: { name: "proxy" },
  },
  {
    name: "--proxy-bypass",
    description:
      'Comma-separated domains to bypass proxy, for example ".com,chromium.org,.domain.com"',
    args: { name: "bypass" },
  },
  {
    name: "--save-har",
    description: "Save HAR file with all network activity at the end",
    args: { name: "filename", template: "filepaths" },
  },
  {
    name: "--save-har-glob",
    description:
      "Filter entries in the HAR by matching url against this glob pattern",
    args: { name: "glob pattern" },
  },
  {
    name: "--save-storage",
    description:
      "Save context storage state at the end, for later use with --load-storage",
    args: { name: "filename", template: "filepaths" },
  },
  {
    name: "--timezone",
    description: 'Time zone to emulate, for example "Europe/Rome"',
    args: { name: "time zone" },
  },
  {
    name: "--timeout",
    description:
      "Timeout for Playwright actions in milliseconds, no timeout by default",
    args: { name: "timeout" },
  },
  {
    name: "--user-agent",
    description: "Specify user agent string",
    args: { name: "ua string" },
  },
  {
    name: "--user-data-dir",
    description:
      "Use the specified user data directory instead of a new context",
    args: { name: "directory", template: "folders" },
  },
  {
    name: "--viewport-size",
    description:
      'Specify browser viewport size in pixels, for example "1280, 720"',
    args: { name: "size" },
  },
];

const openArgs: Fig.Arg = {
  name: "url",
  description: "Page to open",
  isOptional: true,
};

const openCommand = (name: string, description: string): Fig.Subcommand => ({
  name,
  description,
  args: openArgs,
  options: [...openOptions, helpOption],
});

const reporterOption: Fig.Option = {
  name: "--reporter",
  description:
    'Reporter to use, comma-separated, can be a built-in reporter (default: "list", or "dot" on CI)',
  args: { name: "reporter", suggestions: reporterSuggestions },
};

const testOptions: Fig.Option[] = [
  {
    name: "--add-reporter",
    description:
      "Reporter to add on top of the configured reporters, comma-separated, can be a built-in reporter or a path to a reporter module",
    args: { name: "reporter", suggestions: reporterSuggestions },
  },
  {
    name: "--browser",
    description:
      'Browser to use for tests, one of "all", "chromium", "firefox" or "webkit" (default: "chromium")',
    deprecated: true,
    args: {
      name: "browser",
      suggestions: ["all", "chromium", "firefox", "webkit"],
    },
  },
  configOption,
  {
    name: "--debug",
    description:
      'Run tests with Playwright Inspector. Shortcut for "PWDEBUG=1" environment variable and "--timeout=0 --max-failures=1 --headed --workers=1" options',
    args: {
      name: "mode",
      isOptional: true,
      suggestions: ["inspector", "cli"],
    },
  },
  {
    name: "--fail-on-flaky-tests",
    description: "Fail if any test is flagged as flaky (default: false)",
  },
  {
    name: "--forbid-only",
    description: "Fail if test.only is called (default: false)",
  },
  {
    name: "--fully-parallel",
    description: "Run all tests in parallel (default: false)",
  },
  {
    name: "--global-timeout",
    description:
      "Maximum time this test suite can run in milliseconds (default: unlimited)",
    args: { name: "timeout" },
  },
  {
    name: ["-g", "--grep"],
    description:
      'Only run tests matching this regular expression (default: ".*")',
    args: { name: "grep" },
  },
  {
    name: ["-G", "--grep-invert"],
    description: "Only run tests that do not match this regular expression",
    args: { name: "grep" },
  },
  {
    name: "--headed",
    description: "Run tests in headed browsers (default: headless)",
  },
  {
    name: "--ignore-snapshots",
    description: "Ignore screenshot and snapshot expectations",
  },
  {
    name: "--last-failed",
    description: "Only re-run the failures",
  },
  {
    name: "--last-failed-file",
    description:
      "Override the default path for the last-run JSON file used with --last-failed (default: <outputDir>/.last-run.json). Same as PLAYWRIGHT_LAST_RUN_OUTPUT_FILE environment variable",
    args: { name: "file", template: "filepaths" },
  },
  {
    name: "--list",
    description: "Collect all the tests and report them, but do not run",
  },
  {
    name: "--max-failures",
    description: "Stop after the first N failures",
    args: { name: "N" },
  },
  {
    name: "--no-deps",
    description: "Do not run project dependencies",
  },
  {
    name: "--only-changed",
    description:
      "Only run test files that have been changed between 'HEAD' and 'ref'. Defaults to running all uncommitted changes. Only supports Git",
    args: { name: "ref", isOptional: true },
  },
  {
    name: "--output",
    description: 'Folder for output artifacts (default: "test-results")',
    args: { name: "dir", template: "folders" },
  },
  {
    name: "--pass-with-no-tests",
    description: "Makes test run succeed even if no tests were found",
  },
  {
    name: "--project",
    description:
      "Only run tests from the specified list of projects, supports '*' wildcard (default: run all projects)",
    args: { name: "project-name", isVariadic: true },
  },
  {
    name: "--quiet",
    description: "Suppress stdio",
  },
  {
    name: "--repeat-each",
    description: "Run each test N times (default: 1)",
    args: { name: "N" },
  },
  reporterOption,
  {
    name: "--retries",
    description:
      "Maximum retry count for flaky tests, zero for no retries (default: no retries)",
    args: { name: "retries" },
  },
  {
    name: "--run-agents",
    description: "Run agents to generate the code for page.perform",
    args: { name: "mode", suggestions: ["missing", "all", "none"] },
  },
  {
    name: "--shard",
    description:
      'Shard tests and execute only the selected shard, specify in the form "current/all", 1-based, for example "3/5"',
    args: { name: "shard" },
  },
  {
    name: "--shuffle",
    description:
      "Schedule test files, and tests in parallel mode, in a random order; pass a seed to reproduce a previous order",
    args: { name: "seed", isOptional: true },
  },
  {
    name: "--test-list",
    description:
      "Path to a file containing a list of tests to run. See https://playwright.dev/docs/test-cli for more details",
    args: { name: "file", template: "filepaths" },
  },
  {
    name: "--test-list-invert",
    description:
      "Path to a file containing a list of tests to skip. See https://playwright.dev/docs/test-cli for more details",
    args: { name: "file", template: "filepaths" },
  },
  {
    name: "--timeout",
    description:
      "Specify test timeout threshold in milliseconds, zero for unlimited (default: 30000)",
    args: { name: "timeout" },
  },
  {
    name: "--trace",
    description: "Force tracing mode",
    args: { name: "mode", suggestions: traceModes },
  },
  {
    name: "--tsconfig",
    description:
      "Path to a single tsconfig applicable to all imported files (default: look up tsconfig for each imported file separately)",
    args: { name: "path", template: "filepaths" },
  },
  {
    name: "--ui",
    description: "Run tests in interactive UI mode",
  },
  {
    name: "--ui-host",
    description:
      "Host to serve UI on; specifying this option opens UI in a browser tab",
    args: { name: "host" },
  },
  {
    name: "--ui-port",
    description:
      "Port to serve UI on, 0 for any free port; specifying this option opens UI in a browser tab",
    args: { name: "port" },
  },
  {
    name: ["-u", "--update-snapshots"],
    description:
      'Update snapshots with actual results. Running tests without the flag defaults to "default"',
    args: {
      name: "mode",
      isOptional: true,
      suggestions: ["all", "changed", "missing", "none", "default"],
    },
  },
  {
    name: "--update-source-method",
    description: 'Chooses the way source is updated (default: "patch")',
    args: {
      name: "method",
      suggestions: ["overwrite", "3way", "patch"],
    },
  },
  {
    name: ["-j", "--workers"],
    description:
      "Number of concurrent workers or percentage of logical CPU cores, use 1 to run in a single worker (default: 50%)",
    args: { name: "workers" },
  },
  {
    name: "-x",
    description: "Stop after the first failure",
  },
];

const mcpOptions: Fig.Option[] = [
  {
    name: "--allowed-hosts",
    description:
      "Comma-separated list of hosts this server is allowed to serve from. Defaults to localhost, loopback IPs and the host passed via --host; other hosts must be listed explicitly. Pass '*' to disable the host check",
    args: {
      name: "hosts",
      isVariadic: true,
    },
  },
  {
    name: "--allowed-origins",
    description:
      "Semicolon-separated list of TRUSTED origins to allow the browser to request. Default is to allow all. Important: *does not* serve as a security boundary and *does not* affect redirects",
    args: {
      name: "origins",
    },
  },
  {
    name: "--allow-unrestricted-file-access",
    description:
      "Allow access to files outside of the workspace roots. Also allows unrestricted access to file:// URLs. By default access to file system is restricted to workspace root directories (or cwd if no roots are configured) only, and navigation to file:// URLs is blocked",
  },
  {
    name: "--blocked-origins",
    description:
      "Semicolon-separated list of origins to block the browser from requesting. Blocklist is evaluated before allowlist. If used without the allowlist, requests not matching the blocklist are still allowed. Important: *does not* serve as a security boundary and *does not* affect redirects",
    args: {
      name: "origins",
    },
  },
  {
    name: "--block-service-workers",
    description: "Block service workers",
  },
  {
    name: "--browser",
    description:
      "Browser or chrome channel to use, possible values: chrome, firefox, webkit, msedge",
    args: {
      name: "browser",
      suggestions: ["chrome", "firefox", "webkit", "msedge"],
    },
  },
  {
    name: "--caps",
    description:
      "Comma-separated list of additional capabilities to enable, possible values: vision, pdf, devtools",
    args: {
      name: "caps",
      suggestions: ["vision", "pdf", "devtools"],
    },
  },
  {
    name: "--cdp-endpoint",
    description: "CDP endpoint to connect to",
    args: {
      name: "endpoint",
    },
  },
  {
    name: "--cdp-header",
    description:
      "CDP headers to send with the connect request, multiple can be specified",
    args: {
      name: "headers",
      isVariadic: true,
    },
  },
  {
    name: "--cdp-timeout",
    description:
      "Timeout in milliseconds for connecting to CDP endpoint, defaults to 30000ms",
    args: {
      name: "timeout",
    },
  },
  {
    name: "--codegen",
    description:
      'Language to use for code generation, possible values: "typescript", "python", "java", "csharp", "none" (default: "typescript")',
    args: {
      name: "lang",
      suggestions: ["typescript", "python", "java", "csharp", "none"],
    },
  },
  {
    name: "--config",
    description: "Path to the configuration file",
    args: {
      name: "path",
      template: "filepaths",
    },
  },
  {
    name: "--console-level",
    description:
      'Level of console messages to return: "error", "warning", "info", "debug". Each level includes the messages of more severe levels',
    args: {
      name: "level",
      suggestions: ["error", "warning", "info", "debug"],
    },
  },
  {
    name: "--device",
    description: 'Device to emulate, for example: "iPhone 15"',
    args: {
      name: "device",
    },
  },
  {
    name: "--mobile",
    description:
      "Emulate a generic mobile device (Pixel 10 for Chromium, iPhone 17 for WebKit). Mobile pages are usually lighter, which saves tokens. Cannot be combined with --device",
  },
  {
    name: "--executable-path",
    description: "Path to the browser executable",
    args: {
      name: "path",
      template: "filepaths",
    },
  },
  {
    name: "--extension",
    description:
      'Connect to a running browser instance (Edge/Chrome only). Requires the "Playwright Extension" to be installed',
  },
  {
    name: "--endpoint",
    description: "Bound browser endpoint to connect to",
    args: {
      name: "endpoint",
    },
  },
  {
    name: "--file-paths",
    description:
      'How file paths are rendered in tool results, "relative" to the workspace root or "absolute". Default is "relative"',
    args: {
      name: "mode",
      suggestions: ["relative", "absolute"],
    },
  },
  {
    name: "--grant-permissions",
    description:
      'List of permissions to grant to the browser context, for example "geolocation", "clipboard-read", "clipboard-write"',
    args: {
      name: "permissions",
      isVariadic: true,
    },
  },
  {
    name: "--headless",
    description: "Run browser in headless mode, headed by default",
  },
  {
    name: "--host",
    description:
      "Host to bind server to. Default is localhost. Use 0.0.0.0 to bind to all interfaces",
    args: {
      name: "host",
    },
  },
  {
    name: "--idle-timeout",
    description:
      "Close the browser after this many milliseconds without a completed tool call, the next tool call relaunches it. Defaults to one hour for headless browsers, never for headed ones, 0 disables",
    args: {
      name: "timeout",
    },
  },
  {
    name: "--ignore-https-errors",
    description: "Ignore https errors",
  },
  {
    name: "--ignore-roots",
    description:
      "Do not ask the client for its workspace roots, use the current working directory as the workspace root instead. Use this with clients that advertise roots, but can not answer the roots request",
  },
  {
    name: "--init-page",
    description:
      "Path to TypeScript file to evaluate on Playwright page object",
    args: {
      name: "path",
      isVariadic: true,
      template: "filepaths",
    },
  },
  {
    name: "--init-script",
    description:
      "Path to JavaScript file to add as an initialization script. The script will be evaluated in every page before any of the page's scripts. Can be specified multiple times",
    args: {
      name: "path",
      isVariadic: true,
      template: "filepaths",
    },
  },
  {
    name: "--isolated",
    description: "Keep the browser profile in memory, do not save it to disk",
  },
  {
    name: "--image-responses",
    description:
      'Whether to send image responses to the client. Can be "allow", "omit" or "only". With "only", a response that carries an image consists of the image parts alone, without the text part. Defaults to "allow"',
    args: {
      name: "mode",
      suggestions: ["allow", "omit", "only"],
    },
  },
  {
    name: "--no-sandbox",
    description:
      "Disable the sandbox for all process types that are normally sandboxed",
  },
  {
    name: "--background",
    description:
      "Do not activate controlled tabs or focus the browser window when using --extension",
  },
  {
    name: "--no-tab-group",
    description: "Do not group controlled tabs when using --extension",
  },
  {
    name: "--no-webmcp",
    description:
      "Do not collect or expose the tools that a page registers through the WebMCP API",
  },
  {
    name: "--output-dir",
    description:
      "Path to the directory for automatically named output files, for example a screenshot taken without an explicit file name. Files with an explicit name are resolved against the workspace root instead and are not affected by this option",
    args: {
      name: "path",
      template: "folders",
    },
  },
  {
    name: "--output-max-size",
    description: "Threshold for evicting old output files, in bytes",
    args: {
      name: "bytes",
    },
  },
  {
    name: "--port",
    description: "Port to listen on for SSE transport",
    args: {
      name: "port",
    },
  },
  {
    name: "--profile-dir-name",
    description:
      'Name of the profile directory in the user data dir to connect to with --extension, for example "Profile 1". Defaults to the last used profile that has the extension installed',
    args: {
      name: "name",
    },
  },
  {
    name: "--proxy-bypass",
    description:
      'Comma-separated domains to bypass proxy, for example ".com,chromium.org,.domain.com"',
    args: {
      name: "bypass",
    },
  },
  {
    name: "--proxy-server",
    description:
      'Specify proxy server, for example "http://myproxy:3128", "http://user:password@myproxy:3128" or "socks5://myproxy:8080"',
    args: {
      name: "proxy",
    },
  },
  {
    name: "--redact-url-params",
    description:
      'Comma-separated list of URL query and fragment parameter names, for example "access_token,code", whose values are replaced with <redacted> in the tool responses',
    args: {
      name: "names",
    },
  },
  {
    name: "--sandbox",
    description:
      "Enable the sandbox for all process types that are normally not sandboxed",
  },
  {
    name: "--save-session",
    description:
      "Whether to save the Playwright MCP session into the output directory",
  },
  {
    name: "--secrets",
    description: "Path to a file containing secrets in the dotenv format",
    args: {
      name: "path",
      template: "filepaths",
    },
  },
  {
    name: "--shared-browser-context",
    description:
      "Reuse the same browser context between all connected HTTP clients",
  },
  {
    name: "--snapshot-boxes",
    description:
      "Include each element's bounding box as [box=x,y,width,height] in snapshots. Coordinates are viewport-relative, in CSS pixels",
  },
  {
    name: "--snapshot-mode",
    description:
      'When taking snapshots for responses, specifies the mode to use. Can be "full" or "none". Default is "full"',
    args: {
      name: "mode",
      suggestions: ["full", "none"],
    },
  },
  {
    name: "--storage-state",
    description: "Path to the storage state file for isolated sessions",
    args: {
      name: "path",
      template: "filepaths",
    },
  },
  {
    name: "--test-id-attribute",
    description:
      'Specify the attribute to use for test ids, defaults to "data-testid"',
    args: {
      name: "attribute",
    },
  },
  {
    name: "--timeout-action",
    description: "Specify action timeout in milliseconds, defaults to 5000ms",
    args: {
      name: "timeout",
    },
  },
  {
    name: "--timeout-navigation",
    description:
      "Specify navigation timeout in milliseconds, defaults to 60000ms",
    args: {
      name: "timeout",
    },
  },
  {
    name: "--timeout-settle",
    description:
      "How long to wait after each action for triggered work to settle, in milliseconds, defaults to 500ms",
    args: {
      name: "timeout",
    },
  },
  {
    name: "--user-agent",
    description: "Specify user agent string",
    args: {
      name: "ua string",
    },
  },
  {
    name: "--user-data-dir",
    description:
      "Path to the user data directory. If not specified, a temporary directory will be created",
    args: {
      name: "path",
      template: "folders",
    },
  },
  {
    name: "--viewport-size",
    description:
      'Specify browser viewport size in pixels, for example "1280x720"',
    args: {
      name: "size",
    },
  },
];

const outputOption: Fig.Option = {
  name: ["-o", "--output"],
  description: "Output file path",
  args: { name: "path", template: "filepaths" },
};

const grepOption = (what: string): Fig.Option => ({
  name: "--grep",
  description: `Filter ${what}`,
  args: { name: "pattern" },
});

const traceCommand = (
  name: string,
  description: string,
  args?: Fig.SingleOrArray<Fig.Arg>,
  options: Fig.Option[] = []
): Fig.Subcommand => ({
  name,
  description,
  ...(args && { args }),
  options: [...options, helpOption],
});

const actionIdArg: Fig.Arg = { name: "action-id" };

const completionSpec: Fig.Spec = {
  name: "playwright",
  description: "Playwright CLI",
  subcommands: [
    {
      name: "test",
      description: "Run tests with Playwright Test",
      args: {
        name: "test-filter",
        description:
          "Regular expression matched against the absolute test file paths",
        isOptional: true,
        isVariadic: true,
        template: ["filepaths", "folders"],
      },
      options: [...testOptions, helpOption],
    },
    {
      name: "show-report",
      description: "Show HTML report",
      args: {
        name: "report",
        description:
          "Report directory or .zip archive, defaults to the last generated report",
        isOptional: true,
        template: ["filepaths", "folders"],
      },
      options: [
        {
          name: "--host",
          description: 'Host to serve report on (default: "localhost")',
          args: { name: "host" },
        },
        {
          name: "--port",
          description: "Port to serve report on (default: 9323)",
          args: { name: "port" },
        },
        helpOption,
      ],
    },
    {
      name: "merge-reports",
      description:
        "Merge multiple blob reports (for sharded tests) into a single report",
      args: {
        name: "dir",
        description: "Directory containing blob reports",
        isOptional: true,
        template: "folders",
      },
      options: [
        {
          name: ["-c", "--config"],
          description:
            "Configuration file. Can be used to specify additional configuration for the output report",
          args: { name: "file", template: "filepaths" },
        },
        reporterOption,
        helpOption,
      ],
    },
    {
      name: "clear-cache",
      description: "Clears build and test caches",
      options: [configOption, helpOption],
    },
    {
      name: "init-agents",
      description: "Initialize repository agents",
      options: [
        loopOption([
          "claude",
          "codex",
          "copilot",
          "opencode",
          "vscode",
          "vscode-legacy",
        ]),
        {
          name: ["-c", "--config"],
          description:
            "Configuration file to find a project to use for seed test",
          args: { name: "file", template: "filepaths" },
        },
        {
          name: "--project",
          description: "Project to use for seed test",
          args: { name: "project" },
        },
        {
          name: "--prompts",
          description: "Whether to include prompts in the agent initialization",
        },
        helpOption,
      ],
    },
    {
      name: "init-skills",
      description: "Install Playwright agent skills",
      options: [loopOption(["claude", "agents"], "claude"), helpOption],
    },
    {
      name: "install",
      description:
        "Ensure browsers necessary for this version of Playwright are installed",
      args: {
        name: "browser",
        description: "Browser to install, defaults to the default browsers",
        isOptional: true,
        isVariadic: true,
        suggestions: browserSuggestions,
      },
      options: [
        {
          name: "--with-deps",
          description: "Install system dependencies for browsers",
        },
        {
          name: "--dry-run",
          description: "Do not execute installation, only print information",
        },
        {
          name: "--list",
          description:
            "Prints list of browsers from all Playwright installations",
        },
        {
          name: "--force",
          description: "Force reinstall of already installed browsers",
        },
        {
          name: "--only-shell",
          description: "Only install headless shell when installing chromium",
        },
        {
          name: "--no-shell",
          description: "Do not install chromium headless shell",
        },
        {
          name: "--no-progress",
          description: "Do not show download progress bars",
        },
        {
          name: "--no-remove",
          description: "Do not remove unused browsers",
        },
        helpOption,
      ],
    },
    {
      name: "install-deps",
      description:
        "Install dependencies necessary to run browsers (will ask for sudo permissions)",
      args: {
        name: "browser",
        description: "Browser to install dependencies for",
        isOptional: true,
        isVariadic: true,
        suggestions: browserSuggestions,
      },
      options: [
        {
          name: "--dry-run",
          description:
            "Do not modify the system. On Linux, simulate the install via apt-get and exit with a non-zero code if any required packages are missing, on Windows, print the install command",
        },
        helpOption,
      ],
    },
    {
      name: "uninstall",
      description:
        "Removes browsers used by this installation of Playwright from the system (chromium, firefox, webkit, ffmpeg), not including branded channels",
      options: [
        {
          name: "--all",
          description:
            "Removes all browsers used by any Playwright installation from the system",
        },
        helpOption,
      ],
    },
    openCommand("open", "Open page in browser specified via -b, --browser"),
    {
      name: "codegen",
      description: "Open page and generate code for user actions",
      args: openArgs,
      options: [
        {
          name: ["-o", "--output"],
          description: "Saves the generated script to a file",
          args: { name: "file name", template: "filepaths" },
        },
        {
          name: "--target",
          description: "Language to generate (default: playwright-test)",
          args: {
            name: "language",
            suggestions: [
              "javascript",
              "playwright-test",
              "python",
              "python-async",
              "python-pytest",
              "csharp",
              "csharp-mstest",
              "csharp-nunit",
              "csharp-xunit",
              "java",
              "java-junit",
            ],
          },
        },
        {
          name: "--test-id-attribute",
          description:
            "Use the specified attribute to generate data test ID selectors",
          args: { name: "attributeName" },
        },
        ...openOptions,
        helpOption,
      ],
    },
    openCommand("cr", "Open page in Chromium"),
    openCommand("ff", "Open page in Firefox"),
    openCommand("wk", "Open page in WebKit"),
    {
      name: "screenshot",
      description: "Capture a page screenshot",
      args: [
        { name: "url", description: "Page to capture" },
        {
          name: "filename",
          description: "File to save the screenshot to",
          template: "filepaths",
        },
      ],
      options: [
        ...waitOptions("taking a screenshot"),
        {
          name: "--full-page",
          description:
            "Whether to take a full page screenshot (entire scrollable area)",
        },
        ...openOptions,
        helpOption,
      ],
    },
    {
      name: "pdf",
      description: "Save page as pdf",
      args: [
        { name: "url", description: "Page to save" },
        {
          name: "filename",
          description: "File to save the PDF to",
          template: "filepaths",
        },
      ],
      options: [
        {
          name: "--paper-format",
          description: "Paper format",
          args: {
            name: "format",
            suggestions: [
              "Letter",
              "Legal",
              "Tabloid",
              "Ledger",
              "A0",
              "A1",
              "A2",
              "A3",
              "A4",
              "A5",
              "A6",
            ],
          },
        },
        ...waitOptions("saving as pdf"),
        ...openOptions,
        helpOption,
      ],
    },
    {
      name: "show-trace",
      description: "Show trace viewer",
      args: {
        name: "trace",
        description: "Trace file or URL",
        isOptional: true,
        template: "filepaths",
      },
      options: [
        {
          name: ["-b", "--browser"],
          description:
            "Browser to use, one of cr, chromium, ff, firefox, wk, webkit (default: chromium)",
          args: {
            name: "browserType",
            suggestions: ["cr", "chromium", "ff", "firefox", "wk", "webkit"],
          },
        },
        {
          name: ["-h", "--host"],
          description:
            "Host to serve trace on; specifying this option opens trace in a browser tab",
          args: { name: "host" },
        },
        {
          name: ["-p", "--port"],
          description:
            "Port to serve trace on, 0 for any free port; specifying this option opens trace in a browser tab",
          args: { name: "port" },
        },
        {
          name: "--stdin",
          description: "Accept trace URLs over stdin to update the viewer",
        },
        {
          name: "--help",
          description: "Display help for command",
          priority: 1,
        },
      ],
    },
    {
      name: "trace",
      description: "Inspect trace files from the command line",
      subcommands: [
        traceCommand("open", "Extract trace file for inspection", {
          name: "trace",
          template: "filepaths",
        }),
        traceCommand("close", "Remove extracted trace data"),
        traceCommand("actions", "List actions in the trace", undefined, [
          grepOption("actions by title pattern"),
          { name: "--errors-only", description: "Only show failed actions" },
        ]),
        traceCommand(
          "action",
          "Show details of a specific action",
          actionIdArg
        ),
        traceCommand("requests", "Show network requests", undefined, [
          grepOption("by URL pattern"),
          {
            name: "--method",
            description: "Filter by HTTP method",
            args: { name: "method" },
          },
          {
            name: "--status",
            description: "Filter by status code",
            args: { name: "code" },
          },
          {
            name: "--failed",
            description: "Only show failed requests (status >= 400)",
          },
        ]),
        traceCommand("request", "Show details of a specific network request", {
          name: "request-id",
        }),
        traceCommand("console", "Show console messages", undefined, [
          grepOption("by message text pattern"),
          { name: "--errors-only", description: "Only show errors" },
          { name: "--warnings", description: "Show errors and warnings" },
          { name: "--browser", description: "Only browser console messages" },
          { name: "--stdio", description: "Only stdout/stderr" },
        ]),
        traceCommand("errors", "Show errors with stack traces"),
        traceCommand(
          "snapshot",
          "Run a playwright-cli command against a DOM snapshot",
          [
            actionIdArg,
            {
              name: "playwright-cli arguments",
              description: "Command to run against the snapshot",
              isOptional: true,
              isVariadic: true,
            },
          ],
          [
            {
              name: "--phase",
              description: "Snapshot phase",
              args: {
                name: "phase",
                suggestions: ["before", "action", "after"],
              },
            },
            {
              name: "--serve",
              description: "Serve snapshot on localhost and keep running",
            },
          ]
        ),
        traceCommand(
          "screenshot",
          "Save screencast screenshot for an action",
          actionIdArg,
          [outputOption]
        ),
        traceCommand("attachments", "List trace attachments"),
        traceCommand(
          "attachment",
          "Extract a trace attachment by its number",
          { name: "attachment-id" },
          [outputOption]
        ),
        traceCommand("install-skill", "Install SKILL.md for LLM integration"),
      ],
      options: [helpOption],
    },
    {
      name: "cli",
      description: "Run playwright-cli commands from terminal",
      args: {
        name: "arguments",
        description: "Arguments passed to the playwright-cli tool",
        isOptional: true,
        isVariadic: true,
      },
    },
    {
      name: "mcp",
      description: "Run the Playwright MCP server",
      options: [...mcpOptions, helpOption],
    },
  ],
  options: [
    {
      name: ["--version", "-V"],
      description: "Output the version number",
    },
    helpOption,
  ],
};
export default completionSpec;
