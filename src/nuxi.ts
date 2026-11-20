// Nuxt CLI (nuxi) v4.0.3 (npm "latest" of nuxi and @nuxt/cli, published 2026-11-03; used by nuxt 4.6.4, 2026-11-20).
// Source: command and argument definitions in the published @nuxt/cli 4.0.3 npm
// package (dist/*.mjs, plus its built-in `complete` data for --target and --port),
// read statically; the binary was not run.

// Template names accepted by `nuxt add-template`
const TEMPLATES_SUGGESTIONS = [
  "api",
  "app",
  "app-config",
  "component",
  "composable",
  "error",
  "layer",
  "layout",
  "middleware",
  "module",
  "page",
  "plugin",
  "server-middleware",
  "server-plugin",
  "server-route",
  "server-util",
];

const HTTP_METHODS = [
  "connect",
  "delete",
  "get",
  "head",
  "options",
  "post",
  "put",
  "trace",
  "patch",
];

const PACKAGE_MANAGERS = [
  "npm",
  "pnpm",
  "yarn",
  "bun",
  "deno",
  "aube",
  "nub",
  "upm",
];

const UPGRADE_CHANNELS = [
  "stable",
  "nightly",
  "v3",
  "v4",
  "v4-nightly",
  "v3-nightly",
];

const TYPE_CHECKERS = ["vue-tsc", "golar"];

// Deploy targets (Nitro presets) offered by the CLI's own completion
const NITRO_PRESETS = [
  "alwaysdata",
  "aws-amplify",
  "aws-lambda",
  "azure-functions",
  "azure-swa",
  "bun",
  "cleavr",
  "cli",
  "cloudflare-dev",
  "cloudflare-durable",
  "cloudflare-module",
  "cloudflare-module-legacy",
  "cloudflare-pages",
  "cloudflare-pages-static",
  "cloudflare-worker",
  "deno-deploy",
  "deno-server",
  "deno-server-legacy",
  "digital-ocean",
  "edgio",
  "firebase",
  "firebase-app-hosting",
  "flight-control",
  "genezio",
  "github-pages",
  "gitlab-pages",
  "heroku",
  "iis-handler",
  "iis-node",
  "koyeb",
  "netlify",
  "netlify-builder",
  "netlify-edge",
  "netlify-legacy",
  "netlify-static",
  "node-cluster",
  "node-listener",
  "node-server",
  "platform-sh",
  "render-com",
  "service-worker",
  "static",
  "stormkit",
  "vercel",
  "vercel-edge",
  "vercel-static",
  "winterjs",
  "zeabur",
  "zeabur-static",
  "zerops",
  "zerops-static",
];

// Root directory argument shared by most commands
const defaultRootDirArg: Fig.Arg = {
  name: "rootDir",
  description: "The root directory of your Nuxt project (default: .)",
  template: "folders",
  isOptional: true,
};

const logLevelOption: Fig.Option = {
  name: "--logLevel",
  description: "Specify build-time log level",
  args: {
    name: "level",
    suggestions: ["silent", "info", "verbose"],
  },
};

const dotenvOption: Fig.Option = {
  name: "--dotenv",
  description:
    "Path to .env file to load, relative to the root directory. Can be repeated, with later files taking precedence",
  isRepeatable: true,
  args: {
    name: "path",
    template: "filepaths",
  },
};

const envNameOption: Fig.Option = {
  name: "--envName",
  description:
    "The environment to use when resolving configuration overrides (default is production when building, and development when running the dev server)",
  args: {
    name: "environment",
  },
};

const extendsOption: Fig.Option = {
  name: ["--extends", "-e"],
  description: "Extend from a Nuxt layer",
  isRepeatable: true,
  args: {
    name: "layer-name",
  },
};

const profileOption: Fig.Option = {
  name: "--profile",
  description:
    "Profile performance, writing a V8 CPU profile and a JSON report on exit. Use --profile=verbose for a full console report",
  requiresSeparator: true,
  args: {
    name: "verbose",
    isOptional: true,
    suggestions: ["verbose"],
  },
};

const targetOptions: Fig.Option[] = [
  {
    name: "--target",
    description:
      "Deploy target for the configured server builder (e.g. node-server, vercel, netlify)",
    args: {
      name: "target",
      suggestions: NITRO_PRESETS,
    },
  },
  {
    name: "--preset",
    description: "Alias for --target",
    hidden: true,
    args: {
      name: "target",
      suggestions: NITRO_PRESETS,
    },
  },
];

const portOption: Fig.Option = {
  name: ["--port", "-p"],
  description:
    "Port to listen on (default: NUXT_PORT || NITRO_PORT || PORT || nuxtOptions.devServer.port)",
  args: {
    name: "port",
    suggestions: [
      { name: "3000", description: "Default development port" },
      { name: "3001", description: "Alternative port" },
      { name: "8080", description: "Common alternative port" },
    ],
  },
};

const hostOption: Fig.Option = {
  name: ["--host", "-h"],
  description:
    "Host to listen on (default: NUXT_HOST || NITRO_HOST || HOST || nuxtOptions.devServer?.host)",
  args: {
    name: "host",
    suggestions: [
      { name: "localhost", description: "Local development" },
      { name: "0.0.0.0", description: "Listen on all interfaces" },
      { name: "127.0.0.1", description: "Loopback address" },
    ],
  },
};

const strictPortOption: Fig.Option = {
  name: "--strictPort",
  description:
    "Exit if the requested port is unavailable instead of using another one",
};

const urlOption: Fig.Option = {
  name: "--url",
  description:
    "URL of the Nuxt server to talk to (default: the running dev server)",
  args: {
    name: "url",
  },
};

const jsonOption: Fig.Option = {
  name: "--json",
  description: "Print output as JSON",
};

const packageManagerOption: Fig.Option = {
  name: "--packageManager",
  description: "Package manager to install with",
  args: {
    name: "package manager",
    suggestions: PACKAGE_MANAGERS,
  },
};

const skipConfigOption: Fig.Option = {
  name: "--skipConfig",
  description: "Skip nuxt.config.ts update",
};

// Options shared by `nuxt preview` and its hidden alias `nuxt start`
const previewOptions: Fig.Option[] = [
  logLevelOption,
  envNameOption,
  extendsOption,
  {
    ...portOption,
    description: "Port to listen on (default: NUXT_PORT || NITRO_PORT || PORT)",
  },
  {
    ...hostOption,
    description: "Host to listen on (default: NUXT_HOST || NITRO_HOST || HOST)",
  },
  {
    name: "--takeover",
    description:
      "Stop a preview server already running on this project and take its place",
  },
  {
    name: "--no-takeover",
    description: "Never stop a preview server already running on this project",
  },
  strictPortOption,
  dotenvOption,
];

// `nuxt add-template` shorthands for --mode and --method
const templateShorthandOptions: Fig.Option[] = [
  ...["client", "server"].map((mode): Fig.Option => ({
    name: `--${mode}`,
    description: `Shorthand for --mode ${mode}`,
  })),
  ...HTTP_METHODS.map((method): Fig.Option => ({
    name: `--${method}`,
    description: `Shorthand for --method ${method}`,
  })),
];

// Main Nuxi options
const mainNuxiOptions: Fig.Option[] = [
  {
    name: "--help",
    description: "Show help",
    isPersistent: true,
  },
  {
    name: ["--version", "-v"],
    description: "Show the CLI version (only valid as the sole argument)",
  },
  {
    name: "--cwd",
    description: "Specify the root directory of your Nuxt project",
    isPersistent: true,
    args: {
      name: "directory",
      template: "folders",
    },
  },
];

// Main nuxi subcommands
const mainNuxiSubcommands: Fig.Subcommand[] = [
  {
    name: "add",
    displayName: "Add",
    icon: "fig://template?color=2ecc71&badge=+",
    description: "Add Nuxt modules and layers",
    args: {
      name: "moduleName",
      description:
        "Specify one or more modules or layers to install by name, separated by spaces",
      isVariadic: true,
      isOptional: true,
    },
    options: [
      logLevelOption,
      {
        name: "--skipInstall",
        description: "Skip npm install",
      },
      skipConfigOption,
      {
        name: "--dev",
        description: "Install modules as dev dependencies",
      },
      packageManagerOption,
    ],
  },
  {
    name: "add-template",
    displayName: "Add template",
    icon: "fig://template?color=2ecc71&badge=+",
    description: "Create a new template file",
    args: [
      {
        name: "template",
        description: "Specify which template to generate",
        suggestions: TEMPLATES_SUGGESTIONS.map((template) => ({
          name: template,
          description: `Generate a Nuxt ${template}`,
          icon: "fig://template?color=0079ff&badge=+",
        })),
      },
      {
        name: "name",
        description: "Specify name of the generated file",
      },
    ],
    options: [
      logLevelOption,
      {
        name: "--force",
        description: "Overwrite the file if it already exists",
      },
      {
        name: "--mode",
        description: "Add a client or server suffix to a component or plugin",
        args: {
          name: "mode",
          suggestions: ["client", "server"],
        },
      },
      {
        name: "--method",
        description: "Add an HTTP method suffix to an API route",
        args: {
          name: "method",
          suggestions: [...HTTP_METHODS].sort(),
        },
      },
      {
        name: "--global",
        description: "Create global route middleware",
      },
      {
        name: "--api",
        description: "Create a server route in the API directory",
      },
      {
        name: "--pages",
        description: "Include NuxtPage and NuxtLayout in the app template",
      },
      ...templateShorthandOptions,
    ],
  },
  {
    name: "analyze",
    displayName: "Analyze",
    icon: "✨",
    description: "Build Nuxt and analyze production bundle (experimental)",
    args: defaultRootDirArg,
    options: [
      logLevelOption,
      dotenvOption,
      extendsOption,
      {
        name: "--name",
        description: "Name of the analysis (default: default)",
        args: {
          name: "name",
        },
      },
      {
        name: "--serve",
        description: "Serve the analysis results (default: on)",
      },
      {
        name: "--no-serve",
        description: "Skip serving the analysis results",
      },
      {
        name: "--prerender",
        description: "Prerender routes while analyzing",
      },
    ],
  },
  {
    name: "build",
    displayName: "Build",
    icon: "🏗",
    description: "Build Nuxt for production deployment",
    args: defaultRootDirArg,
    options: [
      logLevelOption,
      {
        name: "--prerender",
        description: "Build Nuxt and prerender static routes",
      },
      ...targetOptions,
      dotenvOption,
      envNameOption,
      extendsOption,
      profileOption,
    ],
  },
  {
    name: "cleanup",
    icon: "🧼",
    displayName: "Cleanup",
    description: "Clean up generated Nuxt files and caches",
    args: defaultRootDirArg,
  },
  {
    name: "complete",
    description: "Generate shell completion scripts",
    args: {
      name: "shell",
      description: "Shell type",
      isOptional: true,
      suggestions: ["zsh", "bash", "fish", "powershell", "fig"],
    },
  },
  {
    name: "curl",
    icon: "🌐",
    description: "Send an HTTP request to your running Nuxt dev server",
    args: [
      {
        name: "url",
        description:
          "Absolute URL, or a path resolved against the running dev server",
      },
      defaultRootDirArg,
    ],
    options: [
      {
        name: ["--method", "-X"],
        description:
          "HTTP method (default: GET, or POST when a body is provided)",
        args: {
          name: "method",
          suggestions: [
            "GET",
            "POST",
            "PUT",
            "PATCH",
            "DELETE",
            "HEAD",
            "OPTIONS",
          ],
        },
      },
      {
        name: ["--header", "-H"],
        description: "Request header in Name: Value form. Can be repeated",
        isRepeatable: true,
        args: {
          name: "header",
        },
      },
      {
        name: ["--data", "-d"],
        description:
          "Request body. Use @- to read stdin and @<file> to read a file",
        args: {
          name: "data",
        },
      },
      {
        name: ["--include", "-i"],
        description:
          "Include the response status line and headers in the output",
      },
      {
        name: ["--head", "-I"],
        description: "Send a HEAD request and show only the response headers",
      },
      {
        name: ["--verbose", "-v"],
        description: "Print request and response headers to stderr",
      },
      {
        name: "--pretty",
        description:
          "Reindent and syntax-highlight output (default: on for a terminal, off when piped)",
      },
      {
        name: "--no-pretty",
        description: "Do not reindent or syntax-highlight output",
      },
    ],
  },
  {
    name: "dev",
    displayName: "Dev",
    icon: "💻",
    description: "Run Nuxt development server",
    args: defaultRootDirArg,
    options: [
      logLevelOption,
      dotenvOption,
      envNameOption,
      extendsOption,
      {
        name: "--inspect",
        description:
          "Enable the Node.js inspector for server code (--inspect=[host:]port), and for the CLI process on the next port",
      },
      {
        name: "--inspect-brk",
        description:
          "Like --inspect, and wait for a debugger to attach to the CLI process before loading Nuxt (--inspect-brk=[host:]port)",
      },
      {
        name: "--tui",
        description:
          "Interactive terminal UI (pinned status panel, folded logs and single-key shortcuts) (default: on)",
      },
      {
        name: "--no-tui",
        description:
          "Disable the interactive terminal UI and stream logs instead",
      },
      {
        name: "--clear",
        description: "Clear console on restart",
      },
      {
        name: ["--fork", "-f"],
        description:
          "Serve the app from a forked child process (on by default wherever the runtime supports it)",
      },
      {
        name: "--no-fork",
        description: "Disable forked mode",
      },
      portOption,
      {
        name: "--takeover",
        description:
          "Stop a dev server already running on this project and take its place",
      },
      {
        name: "--no-takeover",
        description: "Never stop a dev server already running on this project",
      },
      strictPortOption,
      hostOption,
      {
        name: ["--open", "-o"],
        description: "Open the URL in the browser",
      },
      {
        name: "--open.url",
        description: "Path or URL to open instead of the dev server root",
        args: {
          name: "url|path",
        },
      },
      {
        name: "--clipboard",
        description: "Copy the URL to the clipboard",
      },
      {
        name: "--qr",
        description:
          "Print a QR code for the public URL (enabled by default when one is available)",
      },
      {
        name: "--tunnel",
        description: "Expose the server via a Cloudflare quick tunnel",
      },
      {
        name: "--public",
        description:
          "Listen on all network interfaces and allow any host to connect",
      },
      {
        name: "--publicURL",
        description: "Public URL to display (used for QR code and clipboard)",
        args: {
          name: "url",
        },
      },
      {
        name: "--https",
        description:
          "Enable HTTPS with a locally-trusted development certificate",
      },
      {
        name: "--https.cert",
        description: "Path to TLS certificate",
        args: {
          name: "path",
          template: "filepaths",
        },
      },
      {
        name: "--https.key",
        description: "Path to TLS key",
        args: {
          name: "path",
          template: "filepaths",
        },
      },
      {
        name: "--https.pfx",
        description: "Path to PKCS#12 (.p12/.pfx) keystore",
        args: {
          name: "path",
          template: "filepaths",
        },
      },
      {
        name: "--https.passphrase",
        description: "Passphrase for the TLS key or keystore",
        args: {
          name: "passphrase",
        },
      },
      {
        name: "--https.validityDays",
        description: "Validity in days for a generated self-signed certificate",
        args: {
          name: "days",
        },
      },
      {
        name: "--https.domains",
        description:
          "Domain for a generated certificate. Can be repeated, or given as a comma-separated list",
        isRepeatable: true,
        args: {
          name: "domain",
        },
      },
      profileOption,
      {
        name: "--sslCert",
        description: "Use --https.cert instead",
        deprecated: true,
        hidden: true,
        args: {
          name: "path",
          template: "filepaths",
        },
      },
      {
        name: "--sslKey",
        description: "Use --https.key instead",
        deprecated: true,
        hidden: true,
        args: {
          name: "path",
          template: "filepaths",
        },
      },
    ],
  },
  {
    name: "devtools",
    icon: "🧰",
    description: "Enable or disable devtools in a Nuxt project",
    args: [
      {
        name: "command",
        description: "Command to run",
        suggestions: ["enable", "disable"],
      },
      defaultRootDirArg,
    ],
  },
  {
    name: "docs",
    icon: "📚",
    description: "Search or open the Nuxt documentation",
    args: {
      name: "query",
      description: "Words to search the documentation for",
      isOptional: true,
    },
    options: [
      {
        name: "--open",
        description: "Open the best match in a browser (default: on)",
      },
      {
        name: "--no-open",
        description: "Print the matching pages without opening a browser",
      },
    ],
  },
  {
    name: "generate",
    displayName: "Generate",
    icon: "📦",
    description: "Build Nuxt and prerender all routes",
    args: defaultRootDirArg,
    options: [
      logLevelOption,
      ...targetOptions,
      dotenvOption,
      envNameOption,
      extendsOption,
      profileOption,
    ],
  },
  {
    name: "info",
    displayName: "Info",
    icon: "📝",
    description: "Get information about Nuxt project",
    args: defaultRootDirArg,
    options: [
      {
        name: "--json",
        description: "Print project info as JSON",
      },
    ],
  },
  {
    name: "init",
    description: "Moved to create-nuxt, run npm create nuxt@latest instead",
    deprecated: true,
    hidden: true,
  },
  {
    name: "module",
    icon: "🧩",
    description: "Manage Nuxt modules",
    subcommands: [
      {
        name: "add",
        description: "Add Nuxt modules",
        args: {
          name: "moduleName",
          description:
            "Specify one or more modules to install by name, separated by spaces",
          isVariadic: true,
          isOptional: true,
        },
        options: [
          logLevelOption,
          {
            name: "--skipInstall",
            description: "Skip npm install",
          },
          skipConfigOption,
          {
            name: "--dev",
            description: "Install modules as dev dependencies",
          },
          packageManagerOption,
        ],
      },
      {
        name: "remove",
        description: "Remove Nuxt modules",
        args: {
          name: "moduleName",
          description:
            "Specify one or more modules to remove by name, separated by spaces",
          isVariadic: true,
          isOptional: true,
        },
        options: [
          logLevelOption,
          {
            name: "--skipInstall",
            description: "Skip dependency uninstall",
          },
          skipConfigOption,
        ],
      },
      {
        name: "search",
        description: "Search in Nuxt modules",
        args: {
          name: "query",
          description: "Keywords to search for",
        },
        options: [
          {
            name: "--nuxtVersion",
            description:
              "Filter by Nuxt version and list compatible modules only (auto detected by default)",
            args: {
              name: "version",
              suggestions: ["3", "4"],
            },
          },
          jsonOption,
        ],
      },
    ],
  },
  {
    name: "prepare",
    icon: "📦",
    description: "Prepare Nuxt for development/build",
    args: defaultRootDirArg,
    options: [dotenvOption, logLevelOption, envNameOption, extendsOption],
  },
  {
    name: "preview",
    displayName: "Preview",
    icon: "🔗",
    description: "Launch Nitro server for local testing after nuxt build",
    args: defaultRootDirArg,
    options: previewOptions,
  },
  {
    name: "start",
    description: "Launch Nitro server for local testing after nuxt build",
    hidden: true,
    args: defaultRootDirArg,
    options: previewOptions,
  },
  {
    name: "task",
    icon: "⚙️",
    description: "List and run Nitro tasks on your dev server",
    subcommands: [
      {
        name: "list",
        description: "List the tasks a Nuxt server exposes",
        args: defaultRootDirArg,
        options: [urlOption, jsonOption],
      },
      {
        name: "run",
        description: "Run a task on a Nuxt server and print its result",
        args: [
          {
            name: "name",
            description: "Name of the task to run",
          },
          defaultRootDirArg,
        ],
        options: [
          urlOption,
          {
            name: "--payload",
            description:
              "Task payload, either as a JSON object or as --payload.key=value pairs",
            args: {
              name: "json",
            },
          },
        ],
      },
    ],
  },
  {
    name: "test",
    displayName: "Test",
    icon: "🧪",
    description: "Run tests",
    args: defaultRootDirArg,
    options: [
      {
        name: "--dev",
        description: "Run in dev mode",
      },
      {
        name: "--watch",
        description: "Watch mode",
      },
    ],
  },
  {
    name: "typecheck",
    icon: "✅",
    description: "Run type-checking throughout your app using vue-tsc or Golar",
    args: defaultRootDirArg,
    options: [
      logLevelOption,
      dotenvOption,
      extendsOption,
      {
        name: "--checker",
        description: "Type checker to use",
        args: {
          name: "checker",
          suggestions: TYPE_CHECKERS,
        },
      },
      {
        name: ["--build", "-b"],
        description:
          "Type-check in build mode, using TypeScript project references (detected automatically by default)",
      },
      {
        name: "--no-build",
        description: "Type-check without TypeScript project references",
      },
    ],
  },
  {
    name: "upgrade",
    displayName: "Upgrade",
    icon: "⭐️",
    description: "Upgrade Nuxt",
    args: defaultRootDirArg,
    options: [
      logLevelOption,
      {
        name: "--dedupe",
        description: "Dedupe dependencies after upgrading",
      },
      {
        name: ["--force", "-f"],
        description: "Force upgrade to recreate lockfile and node_modules",
      },
      {
        name: "--channel",
        description: "Specify a channel to install from (default: stable)",
        args: {
          name: "channel",
          suggestions: UPGRADE_CHANNELS,
        },
      },
    ],
  },
];

const completionSpec: Fig.Spec = {
  name: "nuxi",
  description: "Nuxt CLI",
  icon: "https://v3.nuxtjs.org/icon.png",
  subcommands: mainNuxiSubcommands,
  options: mainNuxiOptions,
};

export default completionSpec;
