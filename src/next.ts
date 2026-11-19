// Next.js v16.4.6 (npm `next` latest, 2026-11-19). Source: `next <command> --help` walked recursively from the installed npm package (commander definitions in dist/bin/next)
const icon = "https://nextjs.org/static/favicon/favicon-16x16.png";

const portOption: Fig.Option = {
  name: ["-p", "--port"],
  description:
    "Specify a port number on which to start the application (default: 3000, env: PORT)",
  args: {
    name: "port",
  },
};

const hostnameOption: Fig.Option = {
  name: ["-H", "--hostname"],
  description:
    "Specify a hostname on which to start the application (default: 0.0.0.0)",
  args: {
    name: "hostname",
  },
};

const inspectOption: Fig.Option = {
  name: "--inspect",
  description:
    "Allows inspecting server-side code. See https://nextjs.org/docs/app/guides/debugging#server-side-code",
  args: {
    name: "[host:]port",
    isOptional: true,
  },
};

const bundlerOptions = (
  turbopackDescription: string,
  webpackDescription: string
): Fig.Option[] => [
  {
    name: ["--turbo", "--turbopack"],
    description: turbopackDescription,
    exclusiveOn: ["--webpack"],
  },
  {
    name: "--webpack",
    description: webpackDescription,
    exclusiveOn: ["--turbo", "--turbopack"],
  },
];

const nextConfigStripTypesOption: Fig.Option = {
  name: "--experimental-next-config-strip-types",
  description:
    "Use Node.js native TypeScript resolution for next.config.(ts|mts)",
};

const cpuProfOption = (when: "build" | "dev/start"): Fig.Option => ({
  name: "--experimental-cpu-prof",
  description:
    when === "build"
      ? "Enable CPU profiling. Profile is saved to .next-profiles/ on exit"
      : "Enable CPU profiling. Profiles are saved to .next-profiles/ on exit",
});

const uploadTraceOption: Fig.Option = {
  name: "--experimental-upload-trace",
  description:
    "Reports a subset of the debugging trace to a remote HTTP URL. Includes sensitive data",
  args: {
    name: "traceUrl",
  },
};

const internalTraceOption: Fig.Option = {
  name: "--internal-trace",
  description:
    'Enable Turbopack tracing. "all" (default) enables turbo-tasks level tracing, "overview" enables overview tracing',
  args: {
    name: "level",
    isOptional: true,
    suggestions: ["all", "overview"],
  },
};

const noManglingOption: Fig.Option = {
  name: "--no-mangling",
  description: "Disables mangling",
};

const profileOption: Fig.Option = {
  name: "--profile",
  description: "Enables production profiling for React",
};

const jsonOption = (description: string): Fig.Option => ({
  name: "--json",
  description,
});

const dirArgument: Fig.Arg = {
  name: "directory",
  description:
    "Directory of the Next.js application (default: the current directory)",
  template: "folders",
  isOptional: true,
};

const completionSpec: Fig.Spec = {
  name: "next",
  description: "Next.js CLI to develop, build and start your application",
  options: [
    {
      name: ["-h", "--help"],
      description: "Displays this message",
      isPersistent: true,
    },
    {
      name: ["-v", "--version"],
      description: "Outputs the Next.js version",
    },
  ],
  subcommands: [
    {
      name: "build",
      description:
        "Creates an optimized production build of your application. The output displays information about each route",
      icon,
      args: dirArgument,
      options: [
        {
          name: "--analyze",
          description: "Analyze bundle output. Only compatible with Turbopack",
        },
        {
          name: ["-d", "--debug"],
          description: "Enables a more verbose build output",
        },
        {
          name: "--debug-prerender",
          description:
            "Enables debug mode for prerendering. Not for production use!",
        },
        noManglingOption,
        profileOption,
        {
          name: "--experimental-app-only",
          description: "Builds only App Router routes",
        },
        ...bundlerOptions("Builds using Turbopack", "Builds using webpack"),
        {
          name: "--experimental-build-mode",
          description: "Uses an experimental build mode",
          args: {
            name: "mode",
            isOptional: true,
            default: "default",
            suggestions: ["compile", "generate", "generate-env"],
          },
        },
        {
          name: "--experimental-debug-memory-usage",
          description:
            "Enables memory profiling features to debug memory consumption",
        },
        uploadTraceOption,
        nextConfigStripTypesOption,
        {
          name: "--debug-build-paths",
          description:
            'Comma-separated glob patterns or explicit paths for selective builds. Use "!" prefix to exclude',
          args: {
            name: "patterns",
            description:
              'Examples: "app/*", "app/page.tsx", "app/**/page.tsx", "app/**,!app/[slug]/**"',
          },
        },
        cpuProfOption("build"),
        internalTraceOption,
      ],
    },
    {
      name: ["analyze", "experimental-analyze"],
      description:
        "Analyze production bundle output with an interactive web ui. Does not produce an application build. Only compatible with Turbopack",
      icon,
      args: dirArgument,
      options: [
        {
          name: ["-v", "--version"],
          description: "Outputs the Next.js version",
        },
        noManglingOption,
        profileOption,
        {
          name: "--experimental-app-only",
          description: "Analyzes only App Router routes",
        },
        {
          name: "--snapshot",
          description:
            "Save a named snapshot, replacing an existing capture with that name",
          args: {
            name: "name",
          },
        },
        {
          name: ["-o", "--output"],
          description:
            "Only write analysis files to disk. Does not start the server",
        },
        {
          name: "--port",
          description:
            "Specify a port number to serve the analyzer on (default: 4000, env: PORT)",
          args: {
            name: "port",
          },
        },
      ],
      subcommands: [
        {
          name: "export",
          description:
            "Stream a saved analyzer graph as JSON Lines without building or serving",
          args: {
            name: "directory",
            description:
              "The application directory containing the saved analysis (default: the current directory)",
            template: "folders",
            isOptional: true,
          },
          options: [
            {
              name: ["-v", "--version"],
              description: "Outputs the Next.js version",
            },
            {
              name: "--snapshot",
              description:
                "Select a saved snapshot by name (defaults to latest)",
              args: {
                name: "name",
              },
            },
            {
              name: "--route",
              description: "Filter graph records to a route",
              args: {
                name: "route",
              },
            },
            {
              name: "--dist-dir",
              description:
                "Read from an explicitly chosen build directory (defaults to .next)",
              args: {
                name: "directory",
                template: "folders",
              },
            },
          ],
        },
      ],
    },
    {
      name: "dev",
      description:
        "Starts Next.js in development mode with hot-code reloading, error reporting, and more",
      icon,
      args: dirArgument,
      options: [
        inspectOption,
        ...bundlerOptions(
          "Starts development mode using Turbopack",
          "Starts development mode using webpack"
        ),
        portOption,
        hostnameOption,
        {
          name: "--disable-source-maps",
          description: "Don't start the Dev server with `--enable-source-maps`",
        },
        {
          name: "--experimental-https",
          description:
            "Starts the server with HTTPS and generates a self-signed certificate",
        },
        {
          name: "--experimental-https-key",
          description: "Path to a HTTPS key file",
          args: {
            name: "path",
            template: "filepaths",
          },
        },
        {
          name: "--experimental-https-cert",
          description: "Path to a HTTPS certificate file",
          args: {
            name: "path",
            template: "filepaths",
          },
        },
        {
          name: "--experimental-https-ca",
          description: "Path to a HTTPS certificate authority file",
          args: {
            name: "path",
            template: "filepaths",
          },
        },
        {
          name: "--no-server-fast-refresh",
          description: "Disable server-side Fast Refresh",
        },
        uploadTraceOption,
        nextConfigStripTypesOption,
        cpuProfOption("dev/start"),
        internalTraceOption,
      ],
    },
    {
      name: "info",
      description:
        "Prints relevant details about the current system which can be used to report Next.js bugs",
      icon,
      options: [
        {
          name: "--verbose",
          description: "Collects additional information for debugging",
        },
      ],
    },
    {
      name: "start",
      description:
        "Starts Next.js in production mode. The application should be compiled with `next build` first",
      icon,
      args: dirArgument,
      options: [
        portOption,
        hostnameOption,
        inspectOption,
        {
          name: "--keepAliveTimeout",
          description:
            "Specify the maximum amount of milliseconds to wait before closing inactive connections",
          args: {
            name: "keepAliveTimeout",
          },
        },
        nextConfigStripTypesOption,
        cpuProfOption("dev/start"),
      ],
    },
    {
      name: "telemetry",
      description:
        "Allows you to enable or disable Next.js' completely anonymous telemetry collection",
      icon,
      options: [
        {
          name: "--enable",
          description: "Enables Next.js' telemetry collection",
          exclusiveOn: ["--disable"],
        },
        {
          name: "--disable",
          description: "Disables Next.js' telemetry collection",
          exclusiveOn: ["--enable"],
        },
      ],
      args: {
        name: "arg",
        description: "Turn Next.js' telemetry collection on or off",
        isOptional: true,
        suggestions: [
          {
            name: "enable",
            description: "Enable Next.js' telemetry collection",
          },
          {
            name: "disable",
            description: "Disable Next.js' telemetry collection",
          },
          {
            name: "status",
            description: "Show whether telemetry collection is enabled",
          },
        ],
      },
    },
    {
      name: "typegen",
      description:
        "Generate TypeScript definitions for routes, pages, and layouts without running a full build",
      icon,
      args: dirArgument,
      options: [
        {
          name: "--webpack",
          description: "Use webpack when validating next.config.js",
        },
      ],
    },
    {
      name: ["upgrade", "update", "up"],
      description:
        "Upgrade Next.js apps to desired versions with a single command",
      icon,
      args: dirArgument,
      options: [
        {
          name: "--revision",
          description:
            'Specify the target Next.js version using an NPM dist tag (e.g. "latest", "canary", "rc", "beta") or an exact version number (e.g. "15.0.0") (default: "latest")',
          args: {
            name: "revision",
            suggestions: ["latest", "canary", "rc", "beta"],
          },
          exclusiveOn: ["--agent"],
        },
        {
          name: "--verbose",
          description: "Verbose output",
        },
        {
          name: "--agent",
          description:
            "Upgrade with an agent to security, latest, or experimental-future. Defaults to security",
          args: {
            name: "type",
            isOptional: true,
            suggestions: ["security", "latest", "experimental-future"],
          },
          exclusiveOn: ["--revision"],
        },
      ],
    },
    {
      name: "experimental-test",
      description:
        "Execute `next/experimental/testmode` tests using a specified test runner. The test runner defaults to 'playwright' if the `experimental.defaultTestRunner` configuration option or the `--test-runner` option are not set",
      icon,
      args: [
        {
          name: "directory",
          description:
            "A Next.js project directory to execute the test runner on (default: the current directory)",
          template: "folders",
          isOptional: true,
        },
        {
          name: "test-runner-args",
          description:
            "Any additional arguments or options to pass down to the test runner `test` command",
          isOptional: true,
          isVariadic: true,
        },
      ],
      options: [
        {
          name: "--test-runner",
          description:
            "Any supported test runner. If no test runner is provided, the Next.js config option `experimental.defaultTestRunner`, or 'playwright' will be used",
          args: {
            name: "test-runner",
            isOptional: true,
            suggestions: ["playwright"],
          },
        },
      ],
    },
    {
      name: "experimental-request-insights",
      description:
        "Inspect experimental Request Insights from a running Next.js dev server",
      icon,
      args: {
        name: "directory",
        description:
          "A directory containing the Next.js application (default: the current directory)",
        template: "folders",
        isOptional: true,
      },
      options: [
        {
          name: "--url",
          description:
            "Override automatic discovery with the complete HTTP(S) URL of the running Next.js dev server",
          args: {
            name: "url",
          },
        },
        jsonOption("Print raw request insight JSON"),
        {
          name: "--limit",
          description: "Maximum number of recent request summaries to print",
          args: {
            name: "count",
          },
        },
      ],
    },
    {
      name: "internal",
      description:
        "Internal debugging commands. Use with caution. Not covered by semver",
      icon,
      hidden: true,
      subcommands: [
        {
          name: ["trace", "turbo-trace-server"],
          description: "Serve a Turbopack trace file",
          args: {
            name: "file",
            description: "Trace file to serve",
            template: "filepaths",
          },
          options: [
            {
              name: ["-p", "--port"],
              description: "Override the port",
              args: {
                name: "port",
              },
            },
            {
              name: "--mcp-port",
              description:
                "Port for the MCP (Model Context Protocol) server. Defaults to --port + 1",
              args: {
                name: "mcpPort",
              },
            },
          ],
        },
        {
          name: "query-trace",
          description:
            "Query a running turbopack trace server (started with `next internal trace --mcp-port <port>`)",
          options: [
            {
              name: "--port",
              description:
                "MCP port of the running trace server. Defaults to 5748",
              args: {
                name: "port",
              },
            },
            {
              name: "--parent",
              description:
                "Span ID to enumerate children of. Omit for root level",
              args: {
                name: "parent",
              },
            },
            {
              name: "--no-aggregated",
              description:
                "Disable aggregation of spans by name (aggregated by default)",
            },
            {
              name: "--sort",
              description: "Sort mode for the spans",
              args: {
                name: "mode",
                suggestions: [
                  {
                    name: "value",
                    description: "Corrected duration descending",
                  },
                  {
                    name: "name",
                    description: "Alphabetical",
                  },
                  {
                    name: "allocations",
                    description: "Total allocated bytes descending",
                  },
                  {
                    name: "persistent-allocations",
                    description: "Persistent allocations descending",
                  },
                ],
              },
            },
            {
              name: "--search",
              description:
                "Substring filter on span name/category. Searches the whole subtree below --parent",
              args: {
                name: "search",
              },
            },
            {
              name: "--max-depth",
              description:
                "Levels to descend for --search and --depth (default 32, also the cap)",
              args: {
                name: "depth",
              },
            },
            {
              name: "--depth",
              description:
                "Levels of descendants to nest inline under each span (default 1)",
              args: {
                name: "depth",
              },
            },
            jsonOption("Output as JSON instead of markdown"),
            {
              name: "--page",
              description: "Page number (1-based, default 1)",
              args: {
                name: "page",
              },
            },
            {
              name: "--page-size",
              description: "Spans per page (default 20, max 500)",
              args: {
                name: "size",
              },
            },
          ],
        },
        {
          name: "post-build",
          description:
            "Runs post-build optimization steps (e.g. Turbopack database compaction)",
          args: dirArgument,
        },
        {
          name: "upload-trace",
          description:
            "Upload CPU profiles from .next-profiles/ to Vercel Blob storage",
          args: dirArgument,
        },
        {
          name: "static-routes-info",
          description:
            "Analyze a built Next.js app and report per-route bundle sizes across server and client categories",
          args: dirArgument,
          options: [
            jsonOption("Output as JSON instead of markdown"),
            {
              name: "--limit",
              description:
                "Only show the first N routes after sorting (totals always reflect all routes)",
              args: {
                name: "n",
              },
            },
            {
              name: "--sort",
              description:
                "Sort routes by name (default, ascending), or one of the size keys (descending)",
              args: {
                name: "key",
                suggestions: [
                  "name",
                  "client",
                  "client-js",
                  "client-css",
                  "client-map",
                  "server",
                  "server-bundled-js",
                  "server-unbundled",
                  "server-map",
                  "total",
                ],
              },
            },
            {
              name: "--files",
              description:
                "Include the list of files (relative to the output directory) per category in the JSON output. Requires --json",
              dependsOn: ["--json"],
            },
          ],
        },
      ],
    },
  ],
};

export default completionSpec;
