// k6 v2.4.0 (grafana/k6 tag v2.4.0, latest stable via git tags + Homebrew formula, 2026-11-20).
// Source: Go cobra/pflag definitions in internal/cmd/*.go at tag v2.4.0 and the v2.0.0 release
// notes (removed pause/resume/scale/status/login, --no-summary; convert no longer exists in the source). Read statically,
// the binary was not run.
// Not verifiable: the extension subcommands behind `k6 x` (docs, explore) are provisioned on demand, so their flags are not listed.

const scriptArg: Fig.Arg = {
  name: "file",
  description: 'Script or archive file, or "-" to read it from stdin',
  template: "filepaths",
};

const jsonOption = (what: string): Fig.Option => ({
  name: "--json",
  description: `Output ${what} in JSON format`,
});

// Shared by run, archive, cloud run and cloud upload (optionFlagSet in options.go)
const testOptions: Fig.Option[] = [
  {
    name: "--once",
    description: "Run the test with 1 VU and 1 iteration",
  },
  {
    name: "--scenario",
    description: "Run scenarios by name (comma-separated)",
    isRepeatable: true,
    args: { name: "scenario" },
  },
  {
    name: ["--vus", "-u"],
    description: "Number of virtual users",
    args: { name: "vus", default: "1" },
  },
  {
    name: ["--duration", "-d"],
    description: "Test duration limit",
    args: { name: "duration" },
  },
  {
    name: ["--iterations", "-i"],
    description: "Script total iteration limit (among all VUs)",
    args: { name: "iterations" },
  },
  {
    name: ["--stage", "-s"],
    description: "Add a stage, as [duration]:[target]",
    isRepeatable: true,
    args: { name: "stage" },
  },
  {
    name: "--execution-segment",
    description:
      "Limit execution to the specified segment, e.g. 10%, 1/3, 0.2:2/3",
    args: { name: "segment" },
  },
  {
    name: "--execution-segment-sequence",
    description: "The execution segment sequence",
    args: { name: "sequence" },
  },
  {
    name: ["--paused", "-p"],
    description: "Start the test in a paused state",
  },
  {
    name: "--no-setup",
    description: "Don't run setup()",
  },
  {
    name: "--no-teardown",
    description: "Don't run teardown()",
  },
  {
    name: "--max-redirects",
    description: "Follow at most n redirects",
    args: { name: "n", default: "10" },
  },
  {
    name: "--batch",
    description: "Max parallel batch requests",
    args: { name: "n", default: "20" },
  },
  {
    name: "--batch-per-host",
    description: "Max parallel batch requests per host",
    args: { name: "n", default: "6" },
  },
  {
    name: "--rps",
    description: "Limit requests per second",
    args: { name: "rps" },
  },
  {
    name: "--user-agent",
    description: "User agent for HTTP requests",
    args: { name: "user-agent" },
  },
  {
    name: "--http-debug",
    description:
      "Log all HTTP requests and responses. Excludes body by default, use --http-debug=full to include it",
    requiresSeparator: true,
    args: {
      name: "mode",
      isOptional: true,
      suggestions: [{ name: "full", description: "Include request bodies" }],
    },
  },
  {
    name: "--http-debug-redact",
    description: "Mask credential headers in the --http-debug output",
  },
  {
    name: "--insecure-skip-tls-verify",
    description: "Skip verification of TLS certificates",
  },
  {
    name: "--no-connection-reuse",
    description: "Disable keep-alive connections",
  },
  {
    name: "--no-vu-connection-reuse",
    description: "Don't reuse connections between iterations",
  },
  {
    name: "--min-iteration-duration",
    description:
      "Minimum amount of time k6 will take executing a single iteration",
    args: { name: "duration" },
  },
  {
    name: ["--throw", "-w"],
    description: "Throw warnings (like failed HTTP requests) as errors",
  },
  {
    name: "--blacklist-ip",
    description: "Blacklist an IP range from being called",
    isRepeatable: true,
    args: { name: "ip range" },
  },
  {
    name: "--block-hostnames",
    description:
      "Block a case-insensitive hostname pattern, with optional leading wildcard, from being called",
    isRepeatable: true,
    args: { name: "pattern" },
  },
  {
    name: "--summary-trend-stats",
    description:
      "Define stats for trend metrics (response times), one or more as 'avg,p(95),...' (default 'avg, min, med, max, p(90), p(95)')",
    isRepeatable: true,
    args: { name: "stats" },
  },
  {
    name: "--summary-time-unit",
    description: "Define the time unit used to display the trend stats",
    args: { name: "unit", suggestions: ["s", "ms", "us"] },
  },
  {
    name: "--system-tags",
    description:
      "Only include these system tags in metrics (default includes proto, subproto, status, method, url, name, group, check, error, error_code, tls_version, scenario, service, expected_response)",
    isRepeatable: true,
    args: { name: "tags" },
  },
  {
    name: "--tag",
    description: "Add a tag to be applied to all samples, as [name]=[value]",
    isRepeatable: true,
    args: { name: "name=value" },
  },
  {
    name: "--console-output",
    description: "Redirect the console logging to the provided output file",
    args: { name: "file", template: "filepaths" },
  },
  {
    name: "--discard-response-bodies",
    description: "Read but don't process or save HTTP response bodies",
  },
  {
    name: "--local-ips",
    description:
      "Client IP ranges and/or CIDRs from which each VU will be making requests, e.g. '192.168.220.1,192.168.0.10-192.168.0.25', 'fd:1::0/120'",
    args: { name: "ips" },
  },
  {
    name: "--dns",
    description:
      "DNS resolver configuration with ttl, select ('first', 'random', 'roundRobin') and policy ('preferIPv4', 'preferIPv6', 'onlyIPv4', 'onlyIPv6', 'any') values",
    args: { name: "config" },
  },
];

// Shared by run, archive, inspect, deps, cloud run and cloud upload (runtimeOptionFlagSet in runtime_options.go)
const runtimeOptions: Fig.Option[] = [
  {
    name: "--include-system-env-vars",
    description: "Pass the real system environment variables to the runtime",
  },
  {
    name: "--compatibility-mode",
    description: "JavaScript compiler compatibility mode",
    args: {
      name: "mode",
      default: "extended",
      suggestions: [
        {
          name: "extended",
          description: "Base mode plus 'global' as an alias for 'globalThis'",
        },
        {
          name: "base",
          description: "Pure Sobek, the Go JS VM supporting ES6+",
        },
      ],
    },
  },
  {
    name: ["--type", "-t"],
    description: 'Override test type, "js" or "archive"',
    args: { name: "type", suggestions: ["js", "archive"] },
  },
  {
    name: ["--env", "-e"],
    description: "Add/override environment variable with VAR=value",
    isRepeatable: true,
    args: { name: "VAR=value" },
  },
  {
    name: "--no-thresholds",
    description: "Don't run thresholds",
  },
  {
    name: "--summary-mode",
    description: "Determine the end-of-test summary mode",
    args: {
      name: "mode",
      default: "compact",
      suggestions: ["compact", "full", "disabled"],
    },
  },
  {
    name: "--summary-export",
    description: "Output the end-of-test summary report to JSON file",
    args: { name: "file", template: "filepaths" },
  },
  {
    name: "--new-machine-readable-summary",
    description:
      "Enable the new machine-readable summary, used for summary exports and as handleSummary() argument",
  },
  {
    name: "--traces-output",
    description:
      "Set the output for k6 traces, possible values are none,otel[=host:port]",
    args: { name: "output", default: "none", suggestions: ["none", "otel"] },
  },
];

const featuresOption: Fig.Option = {
  name: "--features",
  description: "Enable feature flags (comma-separated)",
  isRepeatable: true,
  args: {
    name: "feature",
    suggestions: [
      {
        name: "native-histograms",
        description: "Use native histograms for trend metrics",
      },
      {
        name: "merge-run-tags",
        description: "Merge run tags across config layers instead of replacing",
      },
      {
        name: "freeze-env",
        description:
          "Freeze __ENV object to prevent modifications from JS code",
      },
      {
        name: "async-metric-context",
        description: "Propagate metric context through asynchronous operations",
      },
      {
        name: "native-tracing",
        description:
          "Trace the test run, scenarios, VUs and iterations as spans",
      },
    ],
  },
};

const noUsageReportDescription =
  "don't send anonymous usage stats (https://grafana.com/docs/k6/latest/set-up/usage-collection/)";

const completionSpec: Fig.Spec = {
  name: "k6",
  description:
    "Grafana k6 is an easy-to-use, open-source load and performance testing tool",
  subcommands: [
    {
      name: "new",
      description: "Create a test",
      options: [
        {
          name: ["--force", "-f"],
          description: "Overwrite existing files",
        },
        {
          name: "--template",
          description:
            "Template type or relative/absolute path to a custom template file",
          args: {
            name: "template",
            default: "minimal",
            suggestions: ["minimal", "protocol", "browser"],
            template: "filepaths",
          },
        },
        {
          name: "--project-id",
          description: "Specify the Grafana Cloud project ID for the test",
          args: { name: "project-id" },
        },
      ],
      args: {
        name: "file",
        description: "Name of the script to create (default script.js)",
        isOptional: true,
        template: "filepaths",
      },
    },
    {
      name: "run",
      description: "Run a test",
      options: [
        ...testOptions,
        ...runtimeOptions,
        {
          name: ["--out", "-o"],
          description: "URI for an external metrics database",
          isRepeatable: true,
          args: {
            name: "uri",
            suggestions: [
              { name: "json", description: "JSON file, as json=<file>" },
              { name: "csv", description: "CSV file, as csv=<file>" },
              { name: "cloud", description: "Grafana Cloud k6" },
              { name: "opentelemetry", description: "OpenTelemetry" },
              { name: "web-dashboard", description: "Web dashboard" },
              {
                name: "influxdb",
                description: "InfluxDB, as influxdb=<url>",
                deprecated: true,
              },
              {
                name: "experimental-prometheus-rw",
                description: "Prometheus remote write",
                deprecated: true,
              },
            ],
          },
        },
        {
          name: ["--linger", "-l"],
          description: "Keep the API server alive past test end",
        },
        {
          name: "--no-usage-report",
          description:
            "Don't send anonymous usage stats (https://grafana.com/docs/k6/latest/set-up/usage-collection/)",
        },
        featuresOption,
      ],
      args: scriptArg,
    },
    {
      name: "cloud",
      description: "Run and manage Grafana Cloud tests",
      subcommands: [
        {
          name: "run",
          description: "Run a test in Grafana Cloud",
          options: [
            {
              name: "--local-execution",
              description: "Execute the test locally instead of in the cloud",
            },
            {
              name: "--linger",
              description:
                "Only when using the local-execution mode, keep the API server alive past the test end",
              dependsOn: ["--local-execution"],
            },
            {
              name: "--no-usage-report",
              description: `Only when using the local-execution mode, ${noUsageReportDescription}`,
              dependsOn: ["--local-execution"],
            },
            {
              name: "--no-archive-upload",
              description:
                "Only when using the local-execution mode, don't upload the test archive to the cloud service",
              dependsOn: ["--local-execution"],
            },
            {
              name: "--no-cloud-secrets",
              description:
                "Only when using the local-execution mode, don't automatically configure the cloud secret source",
              dependsOn: ["--local-execution"],
            },
            {
              name: "--no-cloud-logs",
              description:
                "Only when using the local-execution mode, don't push logs to the cloud",
              dependsOn: ["--local-execution"],
            },
            featuresOption,
            ...testOptions,
            ...runtimeOptions,
            {
              name: "--exit-on-running",
              description: "Exit when the test reaches the running status",
            },
            {
              name: "--show-logs",
              description:
                "Enable showing of logs when a test is executed in the cloud",
            },
          ],
          args: scriptArg,
        },
        {
          name: "upload",
          description: "Upload a test to Grafana Cloud",
          options: [...testOptions, ...runtimeOptions],
          args: scriptArg,
        },
        {
          name: "login",
          description: "Authenticate with Grafana Cloud",
          options: [
            {
              name: ["--token", "-t"],
              description: "Specify the token to use",
              args: { name: "token" },
            },
            {
              name: ["--show", "-s"],
              description: "Display saved token, stack info and exit",
            },
            {
              name: ["--reset", "-r"],
              description: "Reset stored token and stack info",
            },
            {
              name: "--stack",
              description:
                "Specify the stack (URL or slug) where commands will run by default",
              args: { name: "stack" },
            },
          ],
        },
        {
          name: "project",
          description: "Work with Grafana Cloud k6 projects",
          subcommands: [
            {
              name: "list",
              description: "List Grafana Cloud k6 projects",
              options: [jsonOption("the project list")],
            },
          ],
        },
        {
          name: "load-zone",
          description: "Work with Grafana Cloud k6 load zones",
          subcommands: [
            {
              name: "list",
              description: "List Grafana Cloud k6 load zones",
              options: [jsonOption("the load zone list")],
            },
          ],
        },
        {
          name: "test",
          description: "Work with Grafana Cloud k6 tests",
          subcommands: [
            {
              name: "list",
              description: "List Grafana Cloud k6 tests",
              options: [
                {
                  name: "--project-id",
                  description:
                    "ID of the project to list tests for, defaults to the configured project",
                  args: { name: "project-id" },
                },
                jsonOption("the test list"),
              ],
            },
          ],
        },
      ],
    },
    {
      name: "archive",
      description: "Create an archive",
      options: [
        ...testOptions,
        ...runtimeOptions,
        {
          name: ["--archive-out", "-O"],
          description:
            "Archive output filename, use - to output the archive to stdout",
          args: { name: "file", default: "archive.tar", template: "filepaths" },
        },
        {
          name: "--exclude-env-vars",
          description:
            "Do not embed any environment variables (either from --env or the actual environment) in the archive metadata",
        },
      ],
      args: {
        name: "file",
        description: "Script file to archive",
        template: "filepaths",
      },
    },
    {
      name: "inspect",
      description: "Inspect a script or archive",
      options: [
        ...runtimeOptions,
        {
          name: "--execution-requirements",
          description:
            "Include calculations of execution requirements for the test",
        },
      ],
      args: {
        name: "file",
        description: "Script or archive to inspect",
        template: "filepaths",
      },
    },
    {
      name: "deps",
      description: "Resolve and list the dependencies of a test",
      options: [
        {
          name: "--json",
          description: "Output the dependencies information in JSON format",
        },
        ...runtimeOptions,
      ],
      args: scriptArg,
    },
    {
      name: "features",
      description: "List available feature flags",
      options: [jsonOption("the feature flags")],
    },
    {
      name: "x",
      description: "Extension subcommands",
      subcommands: [
        {
          name: "docs",
          description:
            "Look up the JavaScript API, examples, and best practices",
        },
        {
          name: "explore",
          description: "Discover available k6 extensions",
        },
      ],
    },
    {
      name: "stats",
      description: "Show test metrics",
      hidden: true,
    },
    {
      name: "version",
      description: "Show application version",
      hidden: true,
      options: [jsonOption("the version information")],
    },
    {
      name: "completion",
      description: "Generate the autocompletion script for the specified shell",
      subcommands: ["bash", "fish", "powershell", "zsh"].map(
        (shell): Fig.Subcommand => ({
          name: shell,
          description: `Generate the autocompletion script for ${shell}`,
          options: [
            {
              name: "--no-descriptions",
              description: "Disable completion descriptions",
            },
          ],
        })
      ),
    },
    {
      name: "help",
      description: "Help about any command",
      args: {
        name: "command",
        description: "Command to show help for",
        isOptional: true,
      },
    },
  ],
  options: [
    {
      name: ["--help", "-h"],
      description: "Show help",
      isPersistent: true,
    },
    {
      name: "--version",
      description: "Show version information",
    },
    {
      name: "--secret-source",
      description: "Set secret sources for k6, e.g. file[=./path.fileformat]",
      isPersistent: true,
      isRepeatable: true,
      args: { name: "source" },
    },
    {
      name: "--log-output",
      description: "Change the output for k6 logs",
      isPersistent: true,
      args: {
        name: "output",
        default: "stderr",
        suggestions: [
          "stderr",
          "stdout",
          "none",
          {
            name: "loki",
            description: "Push logs to Loki, as loki[=host:port]",
          },
          { name: "file", description: "Write logs to a file, as file=./path" },
        ],
      },
    },
    {
      name: "--log-format",
      description: "Log output format",
      isPersistent: true,
      args: { name: "format", suggestions: ["json", "raw"] },
    },
    {
      name: ["--config", "-c"],
      description: "JSON config file",
      isPersistent: true,
      args: { name: "file", template: "filepaths" },
    },
    {
      name: "--no-color",
      description: "Disable colored output",
      isPersistent: true,
    },
    {
      name: "--log-ns-timestamps",
      description: "Switch log timestamp precision from second to nanosecond",
      isPersistent: true,
    },
    {
      name: ["--verbose", "-v"],
      description: "Enable verbose logging",
      isPersistent: true,
    },
    {
      name: ["--quiet", "-q"],
      description: "Disable progress updates",
      isPersistent: true,
    },
    {
      name: ["--address", "-a"],
      description:
        "Address for the REST API server (e.g. localhost:6565), the server is disabled when not set",
      isPersistent: true,
      args: { name: "address" },
    },
    {
      name: "--profiling-enabled",
      description:
        "Enable profiling (pprof) endpoints, requires the REST API to be enabled (--address)",
      isPersistent: true,
    },
  ],
};

export default completionSpec;
