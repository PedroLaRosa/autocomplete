// webpack-cli v7.3.1 + webpack v5.113.0 + webpack-dev-server v6.1.0 (npm latest, 2026-11-20). Source (read statically, nothing run): webpack-cli
// OPTIONS.md (`webpack --help=verbose`), SERVE-OPTIONS-v6.md and packages/webpack-cli/src/webpack-cli.ts for commands, aliases and CLI-only flags
// (incl. `serve --dev-server-per-compiler`). Core flags and descriptions regenerated from webpack 5.113.0 schemas/WebpackOptions.json (and webpack-dev-server
// 6.1.0 lib/options.json for `serve`) with a re-implementation of lib/config/cli.js getArguments + webpack-cli makeOption, which reproduces the 5.112.2
// OPTIONS.md flag set and descriptions exactly.
const WebpackConfigFileArgument: Fig.SingleOrArray<Fig.Arg> = [
  {
    name: "config-path",
    description: "Path to the webpack configuration file",
    isOptional: true,
    template: "filepaths",
    suggestions: [
      {
        name: "webpack.config",
      },
      {
        name: ".webpack/webpack.config",
      },
      {
        name: ".webpack/webpackfile",
      },
    ],
  },
];

const outputOption: Fig.Option = {
  name: ["--output", "-o"],
  description: "To get the output in a specified format",
  args: { name: "format", suggestions: ["json", "markdown"] },
};

const completionSpec: Fig.Spec = {
  name: "webpack",
  description: "The build tool for modern web applications",
  subcommands: [
    {
      name: ["build", "bundle", "b"],
      description: "Run webpack (default command, can be omitted)",
    },
    {
      name: "complete",
      description: "Generate shell completion scripts",
      args: {
        name: "shell",
        isOptional: true,
        suggestions: ["zsh", "bash", "fish", "powershell"],
      },
    },
    {
      name: ["configtest", "t"],
      description: "Validate a webpack configuration",
      args: WebpackConfigFileArgument,
    },
    {
      name: ["help", "h"],
      description: "Display help for commands and options",
    },
    {
      name: ["info", "i"],
      description: "Outputs information about your system",
      options: [
        outputOption,
        {
          name: ["--additional-package", "-a"],
          description: "Adds additional packages to the output",
          args: { name: "package", isVariadic: true },
        },
      ],
    },
    {
      name: ["serve", "server", "s"],
      description:
        "Run the webpack dev server and watch for source file changes while serving",
      options: [
        {
          name: "--dev-server-per-compiler",
          description:
            "Serve each compiler only by the dev server from its own configuration in multi-compiler mode, instead of serving all compilers by every dev server",
        },
        {
          name: "--allowed-hosts",
          description:
            "Allows to enumerate the hosts from which access to the dev server are allowed (useful when you are proxying dev server, by default is 'auto')",
          args: {
            name: "value",
            isVariadic: true,
            suggestions: ["auto", "all"],
          },
        },
        {
          name: "--allowed-hosts-reset",
          description:
            "Clear all items provided in 'allowedHosts' configuration. Allows to enumerate the hosts from which access to the dev server are allowed (useful when you are proxying dev server, by default is 'auto')",
        },
        {
          name: "--bonjour",
          description:
            "Allows to broadcasts dev server via ZeroConf networking on start",
        },
        {
          name: "--no-bonjour",
          description:
            "Disallows to broadcasts dev server via ZeroConf networking on start",
        },
        {
          name: "--no-client",
          description: "Disables client script",
        },
        {
          name: "--client-logging",
          description: "Allows to set log level in the browser",
          args: {
            name: "value",
            suggestions: ["none", "error", "warn", "info", "log", "verbose"],
          },
        },
        {
          name: "--client-overlay",
          description:
            "Enables a full-screen overlay in the browser when there are compiler errors or warnings",
        },
        {
          name: "--no-client-overlay",
          description:
            "Disables the full-screen overlay in the browser when there are compiler errors or warnings",
        },
        {
          name: "--client-overlay-errors",
          description:
            "Enables a full-screen overlay in the browser when there are compiler errors",
        },
        {
          name: "--no-client-overlay-errors",
          description:
            "Disables the full-screen overlay in the browser when there are compiler errors",
        },
        {
          name: "--client-overlay-warnings",
          description:
            "Enables a full-screen overlay in the browser when there are compiler warnings",
        },
        {
          name: "--no-client-overlay-warnings",
          description:
            "Disables the full-screen overlay in the browser when there are compiler warnings",
        },
        {
          name: "--client-overlay-runtime-errors",
          description:
            "Enables a full-screen overlay in the browser when there are uncaught runtime errors",
        },
        {
          name: "--no-client-overlay-runtime-errors",
          description:
            "Disables the full-screen overlay in the browser when there are uncaught runtime errors",
        },
        {
          name: "--client-overlay-trusted-types-policy-name",
          description:
            "The name of a Trusted Types policy for the overlay. Defaults to 'webpack-dev-server#overlay'",
          args: {
            name: "value",
          },
        },
        {
          name: "--client-progress",
          description:
            "Displays compilation progress in the browser. Options include 'linear' and 'circular' for visual indicators",
          args: {
            name: "value",
            isOptional: true,
            suggestions: ["linear", "circular"],
          },
        },
        {
          name: "--no-client-progress",
          description: "Does not display compilation progress in the browser",
        },
        {
          name: "--client-reconnect",
          description:
            "Tells dev-server the number of times it should try to reconnect the client",
          args: {
            name: "value",
            isOptional: true,
          },
        },
        {
          name: "--no-client-reconnect",
          description: "Tells dev-server to not to try to reconnect the client",
        },
        {
          name: "--client-web-socket-transport",
          description:
            "Allows to set custom web socket transport to communicate with dev server",
          args: {
            name: "value",
            suggestions: ["ws", "sse"],
          },
        },
        {
          name: "--client-web-socket-url",
          description:
            "Allows to specify URL to web socket server (useful when you're proxying dev server and client script does not always know where to connect to)",
          args: {
            name: "value",
          },
        },
        {
          name: "--client-web-socket-url-hostname",
          description:
            "Tells clients connected to devServer to use the provided hostname",
          args: {
            name: "value",
          },
        },
        {
          name: "--client-web-socket-url-pathname",
          description:
            "Tells clients connected to devServer to use the provided path to connect",
          args: {
            name: "value",
          },
        },
        {
          name: "--client-web-socket-url-password",
          description:
            "Tells clients connected to devServer to use the provided password to authenticate",
          args: {
            name: "value",
          },
        },
        {
          name: "--client-web-socket-url-port",
          description:
            "Tells clients connected to devServer to use the provided port",
          args: {
            name: "value",
          },
        },
        {
          name: "--client-web-socket-url-protocol",
          description:
            "Tells clients connected to devServer to use the provided protocol",
          args: {
            name: "value",
            suggestions: ["auto"],
          },
        },
        {
          name: "--client-web-socket-url-username",
          description:
            "Tells clients connected to devServer to use the provided username to authenticate",
          args: {
            name: "value",
          },
        },
        {
          name: "--compress",
          description: "Enables gzip compression for everything served",
        },
        {
          name: "--no-compress",
          description: "Disables gzip compression for everything served",
        },
        {
          name: "--history-api-fallback",
          description:
            "Allows to proxy requests through a specified index page (by default 'index.html'), useful for Single Page Applications that utilise the HTML5 History API",
        },
        {
          name: "--no-history-api-fallback",
          description:
            "Disallows to proxy requests through a specified index page",
        },
        {
          name: "--host",
          description: "Allows to specify a hostname to use",
          args: {
            name: "value",
            suggestions: ["local-ip", "local-ipv4", "local-ipv6"],
          },
        },
        {
          name: "--hot",
          description: "Enables Hot Module Replacement",
          args: {
            name: "value",
            isOptional: true,
            suggestions: ["only"],
          },
        },
        {
          name: "--no-hot",
          description: "Disables Hot Module Replacement",
        },
        {
          name: "--ipc",
          description: "Listen to a unix socket",
          args: {
            name: "value",
            isOptional: true,
          },
        },
        {
          name: "--live-reload",
          description:
            "Enables reload/refresh the page(s) when file changes are detected (enabled by default)",
        },
        {
          name: "--no-live-reload",
          description:
            "Disables reload/refresh the page(s) when file changes are detected (enabled by default)",
        },
        {
          name: "--open",
          description:
            "Allows to configure dev server to open the browser(s) and page(s) after server had been started (set it to true to open your default browser)",
          args: {
            name: "value",
            isOptional: true,
            isVariadic: true,
          },
        },
        {
          name: "--no-open",
          description: "Does not open the default browser",
        },
        {
          name: "--open-target",
          description: "Opens specified page in browser",
          args: {
            name: "value",
            isVariadic: true,
          },
        },
        {
          name: "--open-app-name",
          description: "Open specified browser",
          args: {
            name: "value",
            isVariadic: true,
          },
        },
        {
          name: "--open-reset",
          description:
            "Clear all items provided in 'open' configuration. Allows to configure dev server to open the browser(s) and page(s) after server had been started (set it to true to open your default browser)",
        },
        {
          name: "--open-target-reset",
          description:
            "Clear all items provided in 'open.target' configuration. Opens specified page in browser",
        },
        {
          name: "--open-app-name-reset",
          description:
            "Clear all items provided in 'open.app.name' configuration. Open specified browser",
        },
        {
          name: "--port",
          description: "Allows to specify a port to use",
          args: {
            name: "value",
            suggestions: ["auto"],
          },
        },
        {
          name: "--server-type",
          description: "Allows to set server and options (by default 'http')",
          args: {
            name: "value",
            suggestions: ["http", "https", "http2"],
          },
        },
        {
          name: "--server-options-passphrase",
          description: "Passphrase for a pfx file",
          args: {
            name: "value",
          },
        },
        {
          name: "--server-options-request-cert",
          description: "Request for an SSL certificate",
        },
        {
          name: "--no-server-options-request-cert",
          description: "Does not request for an SSL certificate",
        },
        {
          name: "--server-options-ca",
          description:
            "Path to an SSL CA certificate or content of an SSL CA certificate",
          args: {
            name: "value",
            isVariadic: true,
            template: ["filepaths"],
          },
        },
        {
          name: "--server-options-ca-reset",
          description:
            "Clear all items provided in 'server.options.ca' configuration. Path to an SSL CA certificate or content of an SSL CA certificate",
        },
        {
          name: "--server-options-cert",
          description:
            "Path to an SSL certificate or content of an SSL certificate",
          args: {
            name: "value",
            isVariadic: true,
            template: ["filepaths"],
          },
        },
        {
          name: "--server-options-cert-reset",
          description:
            "Clear all items provided in 'server.options.cert' configuration. Path to an SSL certificate or content of an SSL certificate",
        },
        {
          name: "--server-options-crl",
          description:
            "Path to PEM formatted CRLs (Certificate Revocation Lists) or content of PEM formatted CRLs (Certificate Revocation Lists)",
          args: {
            name: "value",
            isVariadic: true,
            template: ["filepaths"],
          },
        },
        {
          name: "--server-options-crl-reset",
          description:
            "Clear all items provided in 'server.options.crl' configuration. Path to PEM formatted CRLs (Certificate Revocation Lists) or content of PEM formatted CRLs (Certificate Revocation Lists)",
        },
        {
          name: "--server-options-key",
          description: "Path to an SSL key or content of an SSL key",
          args: {
            name: "value",
            isVariadic: true,
            template: ["filepaths"],
          },
        },
        {
          name: "--server-options-key-reset",
          description:
            "Clear all items provided in 'server.options.key' configuration. Path to an SSL key or content of an SSL key",
        },
        {
          name: "--server-options-pfx",
          description: "Path to an SSL pfx file or content of an SSL pfx file",
          args: {
            name: "value",
            isVariadic: true,
            template: ["filepaths"],
          },
        },
        {
          name: "--server-options-pfx-reset",
          description:
            "Clear all items provided in 'server.options.pfx' configuration. Path to an SSL pfx file or content of an SSL pfx file",
        },
        {
          name: "--static",
          description:
            "Allows to configure options for serving static files from directory (by default 'public' directory)",
          args: {
            name: "value",
            isOptional: true,
            isVariadic: true,
          },
        },
        {
          name: "--no-static",
          description:
            "Disallows to configure options for serving static files from directory",
        },
        {
          name: "--static-directory",
          description: "Directory for static contents",
          args: {
            name: "value",
            isVariadic: true,
            template: ["folders"],
          },
        },
        {
          name: "--static-public-path",
          description:
            "The static files will be available in the browser under this public path",
          args: {
            name: "value",
            isVariadic: true,
          },
        },
        {
          name: "--static-serve-index",
          description:
            "Tells dev server to use serveIndex middleware when enabled",
        },
        {
          name: "--no-static-serve-index",
          description: "Does not tell dev server to use serveIndex middleware",
        },
        {
          name: "--static-watch",
          description: "Watches for files in static content directory",
        },
        {
          name: "--no-static-watch",
          description: "Does not watch for files in static content directory",
        },
        {
          name: "--static-reset",
          description:
            "Clear all items provided in 'static' configuration. Allows to configure options for serving static files from directory (by default 'public' directory)",
        },
        {
          name: "--static-public-path-reset",
          description:
            "Clear all items provided in 'static.publicPath' configuration. The static files will be available in the browser under this public path",
        },
        {
          name: "--watch-files",
          description:
            "Allows to configure list of globs/directories/files to watch for file changes",
          args: {
            name: "value",
            isVariadic: true,
            template: ["filepaths", "folders"],
          },
        },
        {
          name: "--watch-files-reset",
          description:
            "Clear all items provided in 'watchFiles' configuration. Allows to configure list of globs/directories/files to watch for file changes",
        },
        {
          name: "--no-web-socket-server",
          description: "Disallows to set web socket server and options",
        },
        {
          name: "--web-socket-server-type",
          description:
            "Allows to set web socket server and options (by default 'ws')",
          args: {
            name: "value",
            suggestions: ["ws"],
          },
        },
      ],
    },
    {
      name: ["version", "v"],
      description:
        "Output the version number of 'webpack', 'webpack-cli' and 'webpack-dev-server' and other packages",
      options: [outputOption],
    },
    {
      name: ["watch", "w"],
      description: "Run webpack and watch for files changes",
    },
  ],
  options: [
    {
      name: ["--config", "-c"],
      description:
        'Provide path to one or more webpack configuration files to process, e.g. "./webpack.config.js"',
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--config-name",
      description:
        "Name(s) of particular configuration(s) to use if configuration file exports an array of multiple configurations",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: ["--merge", "-m"],
      description: "Merge two or more configurations using 'webpack-merge'",
    },
    {
      name: "--env",
      description:
        'Environment variables passed to the configuration when it is a function, e.g. "myvar" or "myvar=myval"',
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--config-node-env",
      description:
        "Sets process.env.NODE_ENV to the specified value for access within the configuration",
      args: {
        name: "value",
      },
    },
    {
      name: "--analyze",
      description:
        "It invokes webpack-bundle-analyzer plugin to get bundle information",
    },
    {
      name: "--progress",
      description: "Print compilation progress during build",
      args: {
        name: "value",
        isOptional: true,
        suggestions: ["profile"],
      },
    },
    {
      name: ["--json", "-j"],
      description: "Prints result as JSON or store it in a file",
      args: {
        name: "value",
        isOptional: true,
      },
    },
    {
      name: "--fail-on-warnings",
      description:
        "Stop webpack-cli process with non-zero exit code on warnings from webpack",
    },
    {
      name: "--disable-interpret",
      description: "Disable interpret for loading the config file",
    },
    {
      name: "--no-amd",
      description: "Negative 'amd' option",
    },
    {
      name: "--bail",
      description:
        "Report the first error as a hard error instead of tolerating it",
    },
    {
      name: "--no-bail",
      description: "Negative 'bail' option",
    },
    {
      name: "--cache",
      description: "Enable in memory caching. Disable caching",
    },
    {
      name: "--no-cache",
      description: "Negative 'cache' option",
    },
    {
      name: "--cache-cache-unaffected",
      description:
        "Additionally cache computation of modules that are unchanged and reference only unchanged modules",
    },
    {
      name: "--no-cache-cache-unaffected",
      description: "Negative 'cache-cache-unaffected' option",
    },
    {
      name: "--cache-max-generations",
      description:
        "Number of generations unused cache entries stay in memory cache at minimum (1 = may be removed after unused for a single compilation, ..., Infinity: kept forever)",
      args: {
        name: "value",
      },
    },
    {
      name: "--cache-type",
      description: "In memory caching. Filesystem caching",
      args: {
        name: "value",
      },
    },
    {
      name: "--cache-allow-collecting-memory",
      description:
        "Allows to collect unused memory allocated during deserialization. This requires copying data into smaller buffers and has a performance cost",
    },
    {
      name: "--no-cache-allow-collecting-memory",
      description: "Negative 'cache-allow-collecting-memory' option",
    },
    {
      name: "--cache-cache-directory",
      description:
        "Base directory for the cache (defaults to node_modules/.cache/webpack)",
      args: {
        name: "value",

        template: ["folders"],
      },
    },
    {
      name: "--cache-cache-location",
      description:
        "Locations for the cache (defaults to cacheDirectory / name)",
      args: {
        name: "value",
      },
    },
    {
      name: "--cache-compression",
      description: "Compression type used for the cache files",
      args: {
        name: "value",
      },
    },
    {
      name: "--no-cache-compression",
      description: "Negative 'cache-compression' option",
    },
    {
      name: "--cache-hash-algorithm",
      description:
        "Algorithm used for generation the hash (see node.js crypto package)",
      args: {
        name: "value",
      },
    },
    {
      name: "--cache-idle-timeout",
      description:
        "Time in ms after which idle period the cache storing should happen",
      args: {
        name: "value",
      },
    },
    {
      name: "--cache-idle-timeout-after-large-changes",
      description:
        "Time in ms after which idle period the cache storing should happen when larger changes has been detected (cumulative build time > 2 x avg cache store time)",
      args: {
        name: "value",
      },
    },
    {
      name: "--cache-idle-timeout-for-initial-store",
      description:
        "Time in ms after which idle period the initial cache storing should happen",
      args: {
        name: "value",
      },
    },
    {
      name: "--cache-immutable-paths",
      description:
        "A RegExp matching an immutable directory (usually a package manager cache directory, including the tailing slash) A path to an immutable directory (usually a package manager cache directory)",
      args: {
        name: "value",

        isVariadic: true,
        template: ["folders"],
      },
    },
    {
      name: "--cache-immutable-paths-reset",
      description:
        "Clear all items provided in 'cache.immutablePaths' configuration. List of paths that are managed by a package manager and contain a version or hash in its path so all files are immutable",
    },
    {
      name: "--cache-managed-paths",
      description:
        "A RegExp matching a managed directory (usually a node_modules directory, including the tailing slash) A path to a managed directory (usually a node_modules directory)",
      args: {
        name: "value",

        isVariadic: true,
        template: ["folders"],
      },
    },
    {
      name: "--cache-managed-paths-reset",
      description:
        "Clear all items provided in 'cache.managedPaths' configuration. List of paths that are managed by a package manager and can be trusted to not be modified otherwise",
    },
    {
      name: "--cache-max-age",
      description:
        "Time for which unused cache entries stay in the filesystem cache at minimum (in milliseconds)",
      args: {
        name: "value",
      },
    },
    {
      name: "--cache-max-memory-generations",
      description:
        "Number of generations unused cache entries stay in memory cache at minimum (0 = no memory cache used, 1 = may be removed after unused for a single compilation, ..., Infinity: kept forever). Cache entries will be deserialized from disk when removed from memory cache",
      args: {
        name: "value",
      },
    },
    {
      name: "--cache-memory-cache-unaffected",
      description:
        "Additionally cache computation of modules that are unchanged and reference only unchanged modules in memory",
    },
    {
      name: "--no-cache-memory-cache-unaffected",
      description: "Negative 'cache-memory-cache-unaffected' option",
    },
    {
      name: "--cache-name",
      description:
        "Name for the cache. Different names will lead to different coexisting caches",
      args: {
        name: "value",
      },
    },
    {
      name: "--cache-profile",
      description:
        "Track and log detailed timing information for individual cache items",
    },
    {
      name: "--no-cache-profile",
      description: "Negative 'cache-profile' option",
    },
    {
      name: "--cache-readonly",
      description: "Enable/disable readonly mode",
    },
    {
      name: "--no-cache-readonly",
      description: "Negative 'cache-readonly' option",
    },
    {
      name: "--cache-store",
      description:
        "When to store data to the filesystem. (pack: Store data when compiler is idle in a single file)",
      args: {
        name: "value",
      },
    },
    {
      name: "--cache-version",
      description:
        "Version of the cache data. Different versions won't allow to reuse the cache and override existing content. Update the version when config changed in a way which doesn't allow to reuse cache. This will invalidate the cache",
      args: {
        name: "value",
      },
    },
    {
      name: "--context",
      description:
        "The base directory (absolute path!) for resolving the `entry` option. If `output.pathinfo` is set, the included pathinfo is shortened to this directory",
      args: {
        name: "value",

        template: ["folders"],
      },
    },
    {
      name: "--dependencies",
      description: "References to another configuration to depend on",
      args: {
        name: "value",

        isVariadic: true,
      },
    },
    {
      name: "--dependencies-reset",
      description:
        "Clear all items provided in 'dependencies' configuration. References to other configurations to depend on",
    },
    {
      name: "--no-dev-server",
      description: "Negative 'dev-server' option",
    },
    {
      name: "--devtool-type",
      description: "Which asset type should receive this devtool value",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--devtool-use",
      description:
        "A developer tool to enhance debugging (false | eval | [inline-|hidden-|eval-][nosources-][cheap-[module-]]source-map)",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--no-devtool-use",
      description: "Negative 'devtool-use' option",
    },
    {
      name: "--devtool-reset",
      description:
        "Clear all items provided in 'devtool' configuration. A developer tool to enhance debugging (false | eval | [inline-|hidden-|eval-][nosources-][cheap-[module-]]source-map)",
    },
    {
      name: ["--devtool", "-d"],
      description:
        "A developer tool to enhance debugging (false | eval | [inline-|hidden-|eval-][nosources-][cheap-[module-]]source-map)",
      args: {
        name: "value",
      },
    },
    {
      name: "--no-devtool",
      description: "Negative 'devtool' option",
    },
    {
      name: "--dotenv",
      description: "Enable Dotenv plugin with default options",
    },
    {
      name: "--no-dotenv",
      description: "Negative 'dotenv' option",
    },
    {
      name: "--dotenv-dir",
      description:
        "The directory from which .env files are loaded. Can be an absolute path, false will disable the .env file loading",
      args: {
        name: "value",
      },
    },
    {
      name: "--no-dotenv-dir",
      description: "Negative 'dotenv-dir' option",
    },
    {
      name: "--dotenv-prefix",
      description:
        "A prefix that environment variables must start with to be exposed",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--dotenv-prefix-reset",
      description:
        "Clear all items provided in 'dotenv.prefix' configuration. Only expose environment variables that start with these prefixes. Defaults to 'WEBPACK_'",
    },
    {
      name: "--dotenv-template",
      description: "A template pattern for .env file names",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--dotenv-template-reset",
      description:
        "Clear all items provided in 'dotenv.template' configuration. Template patterns for .env file names. Use [mode] as placeholder for the webpack mode. Defaults to ['.env', '.env.local', '.env.[mode]', '.env.[mode].local']",
    },
    {
      name: "--entry",
      description:
        "A module that is loaded upon startup. Only the last one is exported",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--entry-reset",
      description:
        "Clear all items provided in 'entry' configuration. All modules are loaded upon startup. The last one is exported",
    },
    {
      name: "--experiments-async-web-assembly",
      description:
        "Enable the built-in async WebAssembly support only when no loader is registered for WebAssembly files. Enable/disable the built-in async WebAssembly support",
      args: {
        name: "value",
        isOptional: true,
      },
    },
    {
      name: "--no-experiments-async-web-assembly",
      description: "Negative 'experiments-async-web-assembly' option",
    },
    {
      name: "--experiments-back-compat",
      description:
        "Enable backward-compat layer with deprecation warnings for many webpack 4 APIs",
    },
    {
      name: "--no-experiments-back-compat",
      description: "Negative 'experiments-back-compat' option",
    },
    {
      name: "--experiments-build-http-allowed-uris",
      description:
        "Allowed URI pattern. Allowed URI (resp. the beginning of it)",
      args: {
        name: "value",

        isVariadic: true,
      },
    },
    {
      name: "--experiments-build-http-allowed-uris-reset",
      description:
        "Clear all items provided in 'experiments.buildHttp.allowedUris' configuration. List of allowed URIs (resp. the beginning of them)",
    },
    {
      name: "--experiments-build-http-cache-location",
      description:
        "Location where resource content is stored for lockfile entries. It's also possible to disable storing by passing false",
      args: {
        name: "value",
      },
    },
    {
      name: "--no-experiments-build-http-cache-location",
      description: "Negative 'experiments-build-http-cache-location' option",
    },
    {
      name: "--experiments-build-http-frozen",
      description:
        "When set, anything that would lead to a modification of the lockfile or any resource content, will result in an error",
    },
    {
      name: "--no-experiments-build-http-frozen",
      description: "Negative 'experiments-build-http-frozen' option",
    },
    {
      name: "--experiments-build-http-lockfile-location",
      description: "Location of the lockfile",
      args: {
        name: "value",
      },
    },
    {
      name: "--experiments-build-http-proxy",
      description:
        "Proxy configuration, which can be used to specify a proxy server to use for HTTP requests",
      args: {
        name: "value",
      },
    },
    {
      name: "--experiments-build-http-upgrade",
      description:
        "When set, resources of existing lockfile entries will be fetched and entries will be upgraded when resource content has changed",
    },
    {
      name: "--no-experiments-build-http-upgrade",
      description: "Negative 'experiments-build-http-upgrade' option",
    },
    {
      name: "--experiments-cache-unaffected",
      description:
        "Enable additional in memory caching of modules that are unchanged and reference only unchanged modules",
    },
    {
      name: "--no-experiments-cache-unaffected",
      description: "Negative 'experiments-cache-unaffected' option",
    },
    {
      name: "--experiments-css",
      description:
        "Enable the built-in CSS support only when no loader is registered for CSS files. Enable/disable the built-in CSS support",
      args: {
        name: "value",
        isOptional: true,
      },
    },
    {
      name: "--no-experiments-css",
      description: "Negative 'experiments-css' option",
    },
    {
      name: "--experiments-defer-import",
      description:
        "Enable experimental tc39 proposal https://github.com/tc39/proposal-defer-import-eval. This allows to defer execution of a module until it's first use",
    },
    {
      name: "--no-experiments-defer-import",
      description: "Negative 'experiments-defer-import' option",
    },
    {
      name: "--experiments-future-defaults",
      description: "Apply defaults of next major version",
    },
    {
      name: "--no-experiments-future-defaults",
      description: "Negative 'experiments-future-defaults' option",
    },
    {
      name: "--experiments-html",
      description:
        "Enable the built-in HTML support only when no loader is registered for HTML files. Enable/disable the built-in HTML support",
      args: {
        name: "value",
        isOptional: true,
      },
    },
    {
      name: "--no-experiments-html",
      description: "Negative 'experiments-html' option",
    },
    {
      name: "--experiments-lazy-compilation",
      description:
        "Compile entrypoints and import()s only when they are accessed",
    },
    {
      name: "--no-experiments-lazy-compilation",
      description: "Negative 'experiments-lazy-compilation' option",
    },
    {
      name: "--experiments-lazy-compilation-backend-client",
      description: "A custom client",
      args: {
        name: "value",
      },
    },
    {
      name: "--experiments-lazy-compilation-backend-listen",
      description: "A port",
      args: {
        name: "value",
      },
    },
    {
      name: "--experiments-lazy-compilation-backend-listen-host",
      description: "A host",
      args: {
        name: "value",
      },
    },
    {
      name: "--experiments-lazy-compilation-backend-listen-port",
      description: "A port",
      args: {
        name: "value",
      },
    },
    {
      name: "--experiments-lazy-compilation-backend-protocol",
      description:
        "Specifies the protocol the client should use to connect to the server",
      args: {
        name: "value",
      },
    },
    {
      name: "--experiments-lazy-compilation-entries",
      description: "Enable/disable lazy compilation for entries",
    },
    {
      name: "--no-experiments-lazy-compilation-entries",
      description: "Negative 'experiments-lazy-compilation-entries' option",
    },
    {
      name: "--experiments-lazy-compilation-imports",
      description: "Enable/disable lazy compilation for import() modules",
    },
    {
      name: "--no-experiments-lazy-compilation-imports",
      description: "Negative 'experiments-lazy-compilation-imports' option",
    },
    {
      name: "--experiments-lazy-compilation-test",
      description:
        "Specify which entrypoints or import()ed modules should be lazily compiled. This is matched with the imported module and not the entrypoint name",
      args: {
        name: "value",
      },
    },
    {
      name: "--experiments-lazy-compilation-test-glob",
      description:
        "A glob pattern matched against a path, using `/` as path separator on every OS; a `!` prefix excludes what it matches",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--experiments-lazy-compilation-test-glob-reset",
      description:
        "Clear all items provided in 'experiments.lazyCompilation.test.glob' configuration. A list of glob patterns",
    },
    {
      name: "--experiments-source-import",
      description:
        "Enable experimental tc39 proposal https://github.com/tc39/proposal-source-phase-imports. This allows importing modules at source phase",
    },
    {
      name: "--no-experiments-source-import",
      description: "Negative 'experiments-source-import' option",
    },
    {
      name: "--experiments-sync-web-assembly",
      description:
        "Support WebAssembly as synchronous EcmaScript Module (outdated)",
    },
    {
      name: "--no-experiments-sync-web-assembly",
      description: "Negative 'experiments-sync-web-assembly' option",
    },
    {
      name: "--experiments-typescript",
      description:
        "Enable the built-in TypeScript support only when no loader is registered for TypeScript files. Enable/disable the built-in TypeScript support",
      args: {
        name: "value",
        isOptional: true,
      },
    },
    {
      name: "--no-experiments-typescript",
      description: "Negative 'experiments-typescript' option",
    },
    {
      name: ["--extends", "-e"],
      description:
        "Path to the configuration to be extended (only works when using webpack-cli)",
      args: {
        name: "value",
        isVariadic: true,
        template: ["filepaths"],
      },
    },
    {
      name: "--extends-reset",
      description:
        "Clear all items provided in 'extends' configuration. Extend configuration from another configuration (only works when using webpack-cli)",
    },
    {
      name: "--externals",
      description:
        "Every matched dependency becomes external. An exact matched dependency becomes external. The same string is used as external dependency",
      args: {
        name: "value",

        isVariadic: true,
      },
    },
    {
      name: "--externals-reset",
      description:
        "Clear all items provided in 'externals' configuration. Specify dependencies that shouldn't be resolved by webpack, but should become dependencies of the resulting bundle. The kind of the dependency depends on `output.libraryTarget`",
    },
    {
      name: "--externals-presets-bun",
      description:
        "Treat bun built-in modules like 'bun', 'bun:sqlite' or 'bun:ffi' and node.js built-in modules as external and load them via import when used (for the Bun runtime)",
    },
    {
      name: "--no-externals-presets-bun",
      description: "Negative 'externals-presets-bun' option",
    },
    {
      name: "--externals-presets-deno",
      description:
        "Treat node.js built-in modules like fs, path or vm as external and load them via the required 'node:' specifier when used (for the Deno runtime)",
    },
    {
      name: "--no-externals-presets-deno",
      description: "Negative 'externals-presets-deno' option",
    },
    {
      name: "--externals-presets-electron",
      description:
        "Treat common electron built-in modules in main and preload context like 'electron', 'ipc' or 'shell' as external and load them via require() when used",
    },
    {
      name: "--no-externals-presets-electron",
      description: "Negative 'externals-presets-electron' option",
    },
    {
      name: "--externals-presets-electron-main",
      description:
        "Treat electron built-in modules in the main context like 'app', 'ipc-main' or 'shell' as external and load them via require() when used",
    },
    {
      name: "--no-externals-presets-electron-main",
      description: "Negative 'externals-presets-electron-main' option",
    },
    {
      name: "--externals-presets-electron-preload",
      description:
        "Treat electron built-in modules in the preload context like 'web-frame', 'ipc-renderer' or 'shell' as external and load them via require() when used",
    },
    {
      name: "--no-externals-presets-electron-preload",
      description: "Negative 'externals-presets-electron-preload' option",
    },
    {
      name: "--externals-presets-electron-renderer",
      description:
        "Treat electron built-in modules in the renderer context like 'web-frame', 'ipc-renderer' or 'shell' as external and load them via require() when used",
    },
    {
      name: "--no-externals-presets-electron-renderer",
      description: "Negative 'externals-presets-electron-renderer' option",
    },
    {
      name: "--externals-presets-node",
      description:
        "Treat node.js built-in modules like fs, path or vm as external and load them via require() when used",
    },
    {
      name: "--no-externals-presets-node",
      description: "Negative 'externals-presets-node' option",
    },
    {
      name: "--externals-presets-node-modules",
      description: "Enable or disable externalizing installed packages",
    },
    {
      name: "--no-externals-presets-node-modules",
      description: "Negative 'externals-presets-node-modules' option",
    },
    {
      name: "--externals-presets-node-modules-allowlist",
      description:
        "Requests matching the RegExp stay bundled. An exact request that should stay bundled",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--externals-presets-node-modules-allowlist-reset",
      description:
        "Clear all items provided in 'externalsPresets.nodeModules.allowlist' configuration. Keep these requests bundled instead of externalizing them",
    },
    {
      name: "--externals-presets-nwjs",
      description:
        "Treat NW.js legacy nw.gui module as external and load it via require() when used",
    },
    {
      name: "--no-externals-presets-nwjs",
      description: "Negative 'externals-presets-nwjs' option",
    },
    {
      name: "--externals-presets-web",
      description:
        "Treat references to 'http(s)://...' and 'std:...' as external and load them via import when used (Note that this changes execution order as externals are executed before any other code in the chunk)",
    },
    {
      name: "--no-externals-presets-web",
      description: "Negative 'externals-presets-web' option",
    },
    {
      name: "--externals-presets-web-async",
      description:
        "Treat references to 'http(s)://...' and 'std:...' as external and load them via async import() when used (Note that this external type is an async module, which has various effects on the execution)",
    },
    {
      name: "--no-externals-presets-web-async",
      description: "Negative 'externals-presets-web-async' option",
    },
    {
      name: "--externals-type",
      description:
        "Specifies the default type of externals ('amd*', 'umd*', 'system' and 'jsonp' depend on output.libraryTarget set to the same value)",
      args: {
        name: "value",
      },
    },
    {
      name: "--ignore-warnings",
      description: "A RegExp to select the warning message",
      args: {
        name: "value",

        isVariadic: true,
      },
    },
    {
      name: "--ignore-warnings-file",
      description:
        "A RegExp or a glob to select the origin file for the warning. A glob matching the origin file for the warning at any depth",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--ignore-warnings-message",
      description: "A RegExp to select the warning message",
      args: {
        name: "value",

        isVariadic: true,
      },
    },
    {
      name: "--ignore-warnings-module",
      description: "A RegExp to select the origin module for the warning",
      args: {
        name: "value",

        isVariadic: true,
      },
    },
    {
      name: "--ignore-warnings-reset",
      description:
        "Clear all items provided in 'ignoreWarnings' configuration. Ignore specific warnings",
    },
    {
      name: "--infrastructure-logging-append-only",
      description:
        "Only appends lines to the output. Avoids updating existing output e. g. for status messages. This option is only used when no custom console is provided",
    },
    {
      name: "--no-infrastructure-logging-append-only",
      description: "Negative 'infrastructure-logging-append-only' option",
    },
    {
      name: "--infrastructure-logging-colors",
      description:
        "Enables/Disables colorful output. This option is only used when no custom console is provided",
    },
    {
      name: "--no-infrastructure-logging-colors",
      description: "Negative 'infrastructure-logging-colors' option",
    },
    {
      name: "--infrastructure-logging-debug",
      description:
        "Enable/Disable debug logging for all loggers. Enable debug logging for specific loggers",
      args: {
        name: "value",
        isOptional: true,
        isVariadic: true,
      },
    },
    {
      name: "--no-infrastructure-logging-debug",
      description: "Negative 'infrastructure-logging-debug' option",
    },
    {
      name: "--infrastructure-logging-debug-reset",
      description:
        "Clear all items provided in 'infrastructureLogging.debug' configuration. Enable debug logging for specific loggers",
    },
    {
      name: "--infrastructure-logging-level",
      description: "Log level",
      args: {
        name: "value",
      },
    },
    {
      name: "--infrastructure-logging-progress",
      description:
        'Show build progress. `"auto"` shows it only for interactive terminals. This option is only used when no custom console is provided',
      args: {
        name: "value",
        isOptional: true,
      },
    },
    {
      name: "--no-infrastructure-logging-progress",
      description: "Negative 'infrastructure-logging-progress' option",
    },
    {
      name: "--mode",
      description: "Enable production optimizations or development hints",
      args: {
        name: "value",
        suggestions: ["development", "production", "none"],
      },
    },
    {
      name: "--module-expr-context-critical",
      description:
        "Enable warnings for full dynamic dependencies. Deprecated: This option has moved to 'module.parser.javascript.exprContextCritical'",
      deprecated: true,
    },
    {
      name: "--no-module-expr-context-critical",
      description: "Negative 'module-expr-context-critical' option",
    },
    {
      name: "--module-expr-context-recursive",
      description:
        "Enable recursive directory lookup for full dynamic dependencies. Deprecated: This option has moved to 'module.parser.javascript.exprContextRecursive'",
      deprecated: true,
    },
    {
      name: "--no-module-expr-context-recursive",
      description: "Negative 'module-expr-context-recursive' option",
    },
    {
      name: "--module-expr-context-reg-exp",
      description:
        "Sets the default regular expression for full dynamic dependencies. Deprecated: This option has moved to 'module.parser.javascript.exprContextRegExp'",
      args: {
        name: "value",
        isOptional: true,
      },
      deprecated: true,
    },
    {
      name: "--no-module-expr-context-reg-exp",
      description: "Negative 'module-expr-context-reg-exp' option",
    },
    {
      name: "--module-expr-context-request",
      description:
        "Set the default request for full dynamic dependencies. Deprecated: This option has moved to 'module.parser.javascript.exprContextRequest'",
      args: {
        name: "value",
      },
      deprecated: true,
    },
    {
      name: "--module-generator-asset-binary",
      description:
        "Whether or not this asset module should be considered binary. This can be set to 'false' to treat this asset module as text",
    },
    {
      name: "--no-module-generator-asset-binary",
      description: "Negative 'module-generator-asset-binary' option",
    },
    {
      name: "--module-generator-asset-data-url-encoding",
      description: "Asset encoding (defaults to base64)",
      args: {
        name: "value",
      },
    },
    {
      name: "--no-module-generator-asset-data-url-encoding",
      description: "Negative 'module-generator-asset-data-url-encoding' option",
    },
    {
      name: "--module-generator-asset-data-url-mimetype",
      description: "Asset mimetype (getting from file extension by default)",
      args: {
        name: "value",
      },
    },
    {
      name: "--module-generator-asset-emit",
      description:
        "Emit an output asset from this asset module. This can be set to 'false' to omit emitting e. g. for SSR",
    },
    {
      name: "--no-module-generator-asset-emit",
      description: "Negative 'module-generator-asset-emit' option",
    },
    {
      name: "--module-generator-asset-filename",
      description:
        "The filename of asset modules as relative path inside the 'output.path' directory",
      args: {
        name: "value",
        template: ["filepaths"],
      },
    },
    {
      name: "--module-generator-asset-output-path",
      description:
        "Emit the asset in the specified folder relative to 'output.path'. This should only be needed when custom 'publicPath' is specified to match the folder structure there",
      args: {
        name: "value",

        template: ["folders"],
      },
    },
    {
      name: "--module-generator-asset-public-path",
      description:
        "The 'publicPath' specifies the public URL address of the output files when referenced in a browser",
      args: {
        name: "value",
      },
    },
    {
      name: "--module-generator-asset-inline-binary",
      description:
        "Whether or not this asset module should be considered binary. This can be set to 'false' to treat this asset module as text",
    },
    {
      name: "--no-module-generator-asset-inline-binary",
      description: "Negative 'module-generator-asset-inline-binary' option",
    },
    {
      name: "--module-generator-asset-inline-data-url-encoding",
      description: "Asset encoding (defaults to base64)",
      args: {
        name: "value",
      },
    },
    {
      name: "--no-module-generator-asset-inline-data-url-encoding",
      description:
        "Negative 'module-generator-asset-inline-data-url-encoding' option",
    },
    {
      name: "--module-generator-asset-inline-data-url-mimetype",
      description: "Asset mimetype (getting from file extension by default)",
      args: {
        name: "value",
      },
    },
    {
      name: "--module-generator-asset-resource-binary",
      description:
        "Whether or not this asset module should be considered binary. This can be set to 'false' to treat this asset module as text",
    },
    {
      name: "--no-module-generator-asset-resource-binary",
      description: "Negative 'module-generator-asset-resource-binary' option",
    },
    {
      name: "--module-generator-asset-resource-emit",
      description:
        "Emit an output asset from this asset module. This can be set to 'false' to omit emitting e. g. for SSR",
    },
    {
      name: "--no-module-generator-asset-resource-emit",
      description: "Negative 'module-generator-asset-resource-emit' option",
    },
    {
      name: "--module-generator-asset-resource-filename",
      description:
        "The filename of asset modules as relative path inside the 'output.path' directory",
      args: {
        name: "value",
        template: ["filepaths"],
      },
    },
    {
      name: "--module-generator-asset-resource-output-path",
      description:
        "Emit the asset in the specified folder relative to 'output.path'. This should only be needed when custom 'publicPath' is specified to match the folder structure there",
      args: {
        name: "value",

        template: ["folders"],
      },
    },
    {
      name: "--module-generator-asset-resource-public-path",
      description:
        "The 'publicPath' specifies the public URL address of the output files when referenced in a browser",
      args: {
        name: "value",
      },
    },
    {
      name: "--module-generator-css-es-module",
      description:
        "Configure the generated JS modules that use the ES modules syntax",
    },
    {
      name: "--no-module-generator-css-es-module",
      description: "Negative 'module-generator-css-es-module' option",
    },
    {
      name: "--module-generator-css-exports-only",
      description:
        "Avoid generating and loading a stylesheet and only embed exports from css into output javascript files",
    },
    {
      name: "--no-module-generator-css-exports-only",
      description: "Negative 'module-generator-css-exports-only' option",
    },
    {
      name: "--module-generator-css-auto-es-module",
      description:
        "Configure the generated JS modules that use the ES modules syntax",
    },
    {
      name: "--no-module-generator-css-auto-es-module",
      description: "Negative 'module-generator-css-auto-es-module' option",
    },
    {
      name: "--module-generator-css-auto-export-type",
      description: "Configure how CSS content is exported as default",
      args: {
        name: "value",
      },
    },
    {
      name: "--module-generator-css-auto-exports-convention",
      description: "Specifies the convention of exported names",
      args: {
        name: "value",
      },
    },
    {
      name: "--module-generator-css-auto-exports-only",
      description:
        "Avoid generating and loading a stylesheet and only embed exports from css into output javascript files",
    },
    {
      name: "--no-module-generator-css-auto-exports-only",
      description: "Negative 'module-generator-css-auto-exports-only' option",
    },
    {
      name: "--module-generator-css-auto-local-ident-hash-digest",
      description: "Digest types used for the hash",
      args: {
        name: "value",
      },
    },
    {
      name: "--module-generator-css-auto-local-ident-hash-digest-length",
      description: "Number of chars which are used for the hash",
      args: {
        name: "value",
      },
    },
    {
      name: "--module-generator-css-auto-local-ident-hash-function",
      description:
        "Algorithm used for generation the hash (see node.js crypto package)",
      args: {
        name: "value",
      },
    },
    {
      name: "--module-generator-css-auto-local-ident-hash-salt",
      description: "Any string which is added to the hash to salt it",
      args: {
        name: "value",
      },
    },
    {
      name: "--module-generator-css-auto-local-ident-name",
      description: "Configure the generated local ident name",
      args: {
        name: "value",
      },
    },
    {
      name: "--module-generator-css-global-es-module",
      description:
        "Configure the generated JS modules that use the ES modules syntax",
    },
    {
      name: "--no-module-generator-css-global-es-module",
      description: "Negative 'module-generator-css-global-es-module' option",
    },
    {
      name: "--module-generator-css-global-export-type",
      description: "Configure how CSS content is exported as default",
      args: {
        name: "value",
      },
    },
    {
      name: "--module-generator-css-global-exports-convention",
      description: "Specifies the convention of exported names",
      args: {
        name: "value",
      },
    },
    {
      name: "--module-generator-css-global-exports-only",
      description:
        "Avoid generating and loading a stylesheet and only embed exports from css into output javascript files",
    },
    {
      name: "--no-module-generator-css-global-exports-only",
      description: "Negative 'module-generator-css-global-exports-only' option",
    },
    {
      name: "--module-generator-css-global-local-ident-hash-digest",
      description: "Digest types used for the hash",
      args: {
        name: "value",
      },
    },
    {
      name: "--module-generator-css-global-local-ident-hash-digest-length",
      description: "Number of chars which are used for the hash",
      args: {
        name: "value",
      },
    },
    {
      name: "--module-generator-css-global-local-ident-hash-function",
      description:
        "Algorithm used for generation the hash (see node.js crypto package)",
      args: {
        name: "value",
      },
    },
    {
      name: "--module-generator-css-global-local-ident-hash-salt",
      description: "Any string which is added to the hash to salt it",
      args: {
        name: "value",
      },
    },
    {
      name: "--module-generator-css-global-local-ident-name",
      description: "Configure the generated local ident name",
      args: {
        name: "value",
      },
    },
    {
      name: "--module-generator-css-module-es-module",
      description:
        "Configure the generated JS modules that use the ES modules syntax",
    },
    {
      name: "--no-module-generator-css-module-es-module",
      description: "Negative 'module-generator-css-module-es-module' option",
    },
    {
      name: "--module-generator-css-module-export-type",
      description: "Configure how CSS content is exported as default",
      args: {
        name: "value",
      },
    },
    {
      name: "--module-generator-css-module-exports-convention",
      description: "Specifies the convention of exported names",
      args: {
        name: "value",
      },
    },
    {
      name: "--module-generator-css-module-exports-only",
      description:
        "Avoid generating and loading a stylesheet and only embed exports from css into output javascript files",
    },
    {
      name: "--no-module-generator-css-module-exports-only",
      description: "Negative 'module-generator-css-module-exports-only' option",
    },
    {
      name: "--module-generator-css-module-local-ident-hash-digest",
      description: "Digest types used for the hash",
      args: {
        name: "value",
      },
    },
    {
      name: "--module-generator-css-module-local-ident-hash-digest-length",
      description: "Number of chars which are used for the hash",
      args: {
        name: "value",
      },
    },
    {
      name: "--module-generator-css-module-local-ident-hash-function",
      description:
        "Algorithm used for generation the hash (see node.js crypto package)",
      args: {
        name: "value",
      },
    },
    {
      name: "--module-generator-css-module-local-ident-hash-salt",
      description: "Any string which is added to the hash to salt it",
      args: {
        name: "value",
      },
    },
    {
      name: "--module-generator-css-module-local-ident-name",
      description: "Configure the generated local ident name",
      args: {
        name: "value",
      },
    },
    {
      name: "--module-generator-html-extract",
      description:
        'Emit the parsed and URL-rewritten HTML as a standalone `.html` output file alongside the module\'s JavaScript export. `true` always emits the file; `false` never does; `"inline"` exposes the processed HTML for inline write-back (e.g. `<iframe srcdoc>`) without emitting a standalone file. When unset, extraction defaults to `true` for HTML modules used as compilation entries (HTML entry points) and `false` for HTML modules imported from JavaScript. Filenames follow `output.htmlFilename` / `output.htmlChunkFilename`',
      args: {
        name: "value",
        isOptional: true,
      },
    },
    {
      name: "--no-module-generator-html-extract",
      description: "Negative 'module-generator-html-extract' option",
    },
    {
      name: "--module-generator-json-json-parse",
      description:
        "Use `JSON.parse` when the JSON string is longer than 20 characters",
    },
    {
      name: "--no-module-generator-json-json-parse",
      description: "Negative 'module-generator-json-json-parse' option",
    },
    {
      name: "--module-no-parse",
      description:
        "A regular expression, when matched the module is not parsed. An absolute path, when the module starts with this path it is not parsed. A glob, when it matches the module's resource path at any depth the module is not parsed",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-no-parse-reset",
      description:
        "Clear all items provided in 'module.noParse' configuration. Don't parse files matching. It's matched against the full resolved request",
    },
    {
      name: "--module-parser-asset-data-url-condition-max-size",
      description:
        "Maximum size of asset that should be inline as modules. Default: 8kb",
      args: {
        name: "value",
      },
    },
    {
      name: "--module-parser-css-as",
      description:
        "Configure how the CSS source is parsed: as a full stylesheet (default) or as a block's contents (e.g. the content of an HTML `style` attribute)",
      args: {
        name: "value",
      },
    },
    {
      name: "--module-parser-css-custom-media",
      description:
        "Enable/disable resolution of `@custom-media` at-rules (file-local build-time substitution)",
    },
    {
      name: "--no-module-parser-css-custom-media",
      description: "Negative 'module-parser-css-custom-media' option",
    },
    {
      name: "--module-parser-css-custom-selectors",
      description:
        "Enable/disable resolution of `@custom-selector` at-rules (file-local build-time expansion to `:is(...)`)",
    },
    {
      name: "--no-module-parser-css-custom-selectors",
      description: "Negative 'module-parser-css-custom-selectors' option",
    },
    {
      name: "--module-parser-css-export-type",
      description: "Configure how CSS content is exported as default",
      args: {
        name: "value",
      },
    },
    {
      name: "--module-parser-css-font-preload",
      description:
        'Auto-emit `<link rel="preload" as="font">` for the primary `src` URL of each `@font-face` reachable from an HTML entry\'s initial CSS. Only the first URL per `@font-face` is preloaded (preloading every format would double-download). Off by default; `parser.css.urlHints` rules and per-URL magic comments still override the seeded defaults. Set `output.crossOriginLoading` so the preload matches the font\'s CORS fetch',
    },
    {
      name: "--no-module-parser-css-font-preload",
      description: "Negative 'module-parser-css-font-preload' option",
    },
    {
      name: "--module-parser-css-import",
      description: "Enable/disable `@import` at-rules handling",
    },
    {
      name: "--no-module-parser-css-import",
      description: "Negative 'module-parser-css-import' option",
    },
    {
      name: "--module-parser-css-named-exports",
      description: "Use ES modules named export for css exports",
    },
    {
      name: "--no-module-parser-css-named-exports",
      description: "Negative 'module-parser-css-named-exports' option",
    },
    {
      name: "--module-parser-css-parse-errors",
      description:
        "Report each CSS parse error (CSS Syntax Level 3 §4, §5) the stylesheet holds: a build error where end of input cuts a token or rule short, a build warning for one the parser reads past. Off by default",
    },
    {
      name: "--no-module-parser-css-parse-errors",
      description: "Negative 'module-parser-css-parse-errors' option",
    },
    {
      name: "--module-parser-css-url",
      description:
        "Enable/disable `url()`/`image-set()`/`src()`/`image()` functions handling",
    },
    {
      name: "--no-module-parser-css-url",
      description: "Negative 'module-parser-css-url' option",
    },
    {
      name: "--module-parser-css-url-hints-as",
      description: "Default `as` attribute (script / style / font / image / …)",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-parser-css-url-hints-exclude",
      description:
        "One default-hint rule for URL-referenced assets emitted by this parser (JS `new URL(...)`, CSS `url(...)`, HTML `<img src>` / `<link href>` / `<script src>`). `test` / `include` / `exclude` match against the asset's request; omit all three to apply to every asset. Matching rules set the same fields a `webpackPrefetch` / `webpackPreload` / `webpackAs` / `webpackType` / `webpackMedia` / `webpackFetchPriority` magic comment would; explicit magic comments on the same URL still win",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-parser-css-url-hints-exclude-glob",
      description:
        "A glob pattern matched against a path, using `/` as path separator on every OS; a `!` prefix excludes what it matches",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-parser-css-url-hints-exclude-not",
      description: "Logical NOT",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-parser-css-url-hints-exclude-not-glob",
      description:
        "A glob pattern matched against a path, using `/` as path separator on every OS; a `!` prefix excludes what it matches",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-parser-css-url-hints-fetch-priority",
      description: "Default fetchpriority for prefetch / preload links",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--no-module-parser-css-url-hints-fetch-priority",
      description:
        "Negative 'module-parser-css-url-hints-fetch-priority' option",
    },
    {
      name: "--module-parser-css-url-hints-include",
      description:
        "One default-hint rule for URL-referenced assets emitted by this parser (JS `new URL(...)`, CSS `url(...)`, HTML `<img src>` / `<link href>` / `<script src>`). `test` / `include` / `exclude` match against the asset's request; omit all three to apply to every asset. Matching rules set the same fields a `webpackPrefetch` / `webpackPreload` / `webpackAs` / `webpackType` / `webpackMedia` / `webpackFetchPriority` magic comment would; explicit magic comments on the same URL still win",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-parser-css-url-hints-include-glob",
      description:
        "A glob pattern matched against a path, using `/` as path separator on every OS; a `!` prefix excludes what it matches",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-parser-css-url-hints-include-not",
      description: "Logical NOT",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-parser-css-url-hints-include-not-glob",
      description:
        "A glob pattern matched against a path, using `/` as path separator on every OS; a `!` prefix excludes what it matches",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-parser-css-url-hints-media",
      description: 'Default `media` attribute (e.g. `"(min-width: 800px)"`)',
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-parser-css-url-hints-prefetch",
      description:
        'When true, emit `<link rel="prefetch">` for matching assets without an explicit hint comment',
    },
    {
      name: "--no-module-parser-css-url-hints-prefetch",
      description: "Negative 'module-parser-css-url-hints-prefetch' option",
    },
    {
      name: "--module-parser-css-url-hints-preload",
      description:
        'When true, emit `<link rel="preload">` for matching assets without an explicit hint comment',
    },
    {
      name: "--no-module-parser-css-url-hints-preload",
      description: "Negative 'module-parser-css-url-hints-preload' option",
    },
    {
      name: "--module-parser-css-url-hints-test",
      description:
        "One default-hint rule for URL-referenced assets emitted by this parser (JS `new URL(...)`, CSS `url(...)`, HTML `<img src>` / `<link href>` / `<script src>`). `test` / `include` / `exclude` match against the asset's request; omit all three to apply to every asset. Matching rules set the same fields a `webpackPrefetch` / `webpackPreload` / `webpackAs` / `webpackType` / `webpackMedia` / `webpackFetchPriority` magic comment would; explicit magic comments on the same URL still win",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-parser-css-url-hints-test-glob",
      description:
        "A glob pattern matched against a path, using `/` as path separator on every OS; a `!` prefix excludes what it matches",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-parser-css-url-hints-test-not",
      description: "Logical NOT",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-parser-css-url-hints-test-not-glob",
      description:
        "A glob pattern matched against a path, using `/` as path separator on every OS; a `!` prefix excludes what it matches",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-parser-css-url-hints-type",
      description: "Default `type` attribute (MIME)",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-parser-css-url-hints-reset",
      description:
        "Clear all items provided in 'module.parser.css.urlHints' configuration. URL-referenced-asset default hint rules for this parser (JavaScript `new URL(...)`, CSS `url(...)`, HTML `<img src>` / `<link href>` / `<script src>`)",
    },
    {
      name: "--module-parser-css-auto-animation",
      description: "Enable/disable renaming of `@keyframes`",
    },
    {
      name: "--no-module-parser-css-auto-animation",
      description: "Negative 'module-parser-css-auto-animation' option",
    },
    {
      name: "--module-parser-css-auto-as",
      description:
        "Configure how the CSS source is parsed: as a full stylesheet (default) or as a block's contents (e.g. the content of an HTML `style` attribute)",
      args: {
        name: "value",
      },
    },
    {
      name: "--module-parser-css-auto-container",
      description: "Enable/disable renaming of `@container` names",
    },
    {
      name: "--no-module-parser-css-auto-container",
      description: "Negative 'module-parser-css-auto-container' option",
    },
    {
      name: "--module-parser-css-auto-custom-idents",
      description: "Enable/disable renaming of custom identifiers",
    },
    {
      name: "--no-module-parser-css-auto-custom-idents",
      description: "Negative 'module-parser-css-auto-custom-idents' option",
    },
    {
      name: "--module-parser-css-auto-custom-media",
      description:
        "Enable/disable resolution of `@custom-media` at-rules (file-local build-time substitution)",
    },
    {
      name: "--no-module-parser-css-auto-custom-media",
      description: "Negative 'module-parser-css-auto-custom-media' option",
    },
    {
      name: "--module-parser-css-auto-custom-selectors",
      description:
        "Enable/disable resolution of `@custom-selector` at-rules (file-local build-time expansion to `:is(...)`)",
    },
    {
      name: "--no-module-parser-css-auto-custom-selectors",
      description: "Negative 'module-parser-css-auto-custom-selectors' option",
    },
    {
      name: "--module-parser-css-auto-dashed-idents",
      description:
        "Enable/disable renaming of dashed identifiers, e. g. custom properties",
    },
    {
      name: "--no-module-parser-css-auto-dashed-idents",
      description: "Negative 'module-parser-css-auto-dashed-idents' option",
    },
    {
      name: "--module-parser-css-auto-export-type",
      description: "Configure how CSS content is exported as default",
      args: {
        name: "value",
      },
    },
    {
      name: "--module-parser-css-auto-font-preload",
      description:
        'Auto-emit `<link rel="preload" as="font">` for the primary `src` URL of each `@font-face` reachable from an HTML entry\'s initial CSS. Only the first URL per `@font-face` is preloaded (preloading every format would double-download). Off by default; `parser.css.urlHints` rules and per-URL magic comments still override the seeded defaults. Set `output.crossOriginLoading` so the preload matches the font\'s CORS fetch',
    },
    {
      name: "--no-module-parser-css-auto-font-preload",
      description: "Negative 'module-parser-css-auto-font-preload' option",
    },
    {
      name: "--module-parser-css-auto-function",
      description: "Enable/disable renaming of `@function` names",
    },
    {
      name: "--no-module-parser-css-auto-function",
      description: "Negative 'module-parser-css-auto-function' option",
    },
    {
      name: "--module-parser-css-auto-grid",
      description: "Enable/disable renaming of grid identifiers",
    },
    {
      name: "--no-module-parser-css-auto-grid",
      description: "Negative 'module-parser-css-auto-grid' option",
    },
    {
      name: "--module-parser-css-auto-import",
      description: "Enable/disable `@import` at-rules handling",
    },
    {
      name: "--no-module-parser-css-auto-import",
      description: "Negative 'module-parser-css-auto-import' option",
    },
    {
      name: "--module-parser-css-auto-named-exports",
      description: "Use ES modules named export for css exports",
    },
    {
      name: "--no-module-parser-css-auto-named-exports",
      description: "Negative 'module-parser-css-auto-named-exports' option",
    },
    {
      name: "--module-parser-css-auto-parse-errors",
      description:
        "Report each CSS parse error (CSS Syntax Level 3 §4, §5) the stylesheet holds: a build error where end of input cuts a token or rule short, a build warning for one the parser reads past. Off by default",
    },
    {
      name: "--no-module-parser-css-auto-parse-errors",
      description: "Negative 'module-parser-css-auto-parse-errors' option",
    },
    {
      name: "--module-parser-css-auto-pure",
      description:
        "Enable strict pure mode: every selector must contain at least one local class or id selector",
    },
    {
      name: "--no-module-parser-css-auto-pure",
      description: "Negative 'module-parser-css-auto-pure' option",
    },
    {
      name: "--module-parser-css-auto-url",
      description:
        "Enable/disable `url()`/`image-set()`/`src()`/`image()` functions handling",
    },
    {
      name: "--no-module-parser-css-auto-url",
      description: "Negative 'module-parser-css-auto-url' option",
    },
    {
      name: "--module-parser-css-auto-url-hints-as",
      description: "Default `as` attribute (script / style / font / image / …)",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-parser-css-auto-url-hints-exclude",
      description:
        "One default-hint rule for URL-referenced assets emitted by this parser (JS `new URL(...)`, CSS `url(...)`, HTML `<img src>` / `<link href>` / `<script src>`). `test` / `include` / `exclude` match against the asset's request; omit all three to apply to every asset. Matching rules set the same fields a `webpackPrefetch` / `webpackPreload` / `webpackAs` / `webpackType` / `webpackMedia` / `webpackFetchPriority` magic comment would; explicit magic comments on the same URL still win",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-parser-css-auto-url-hints-exclude-glob",
      description:
        "A glob pattern matched against a path, using `/` as path separator on every OS; a `!` prefix excludes what it matches",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-parser-css-auto-url-hints-exclude-not",
      description: "Logical NOT",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-parser-css-auto-url-hints-exclude-not-glob",
      description:
        "A glob pattern matched against a path, using `/` as path separator on every OS; a `!` prefix excludes what it matches",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-parser-css-auto-url-hints-fetch-priority",
      description: "Default fetchpriority for prefetch / preload links",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--no-module-parser-css-auto-url-hints-fetch-priority",
      description:
        "Negative 'module-parser-css-auto-url-hints-fetch-priority' option",
    },
    {
      name: "--module-parser-css-auto-url-hints-include",
      description:
        "One default-hint rule for URL-referenced assets emitted by this parser (JS `new URL(...)`, CSS `url(...)`, HTML `<img src>` / `<link href>` / `<script src>`). `test` / `include` / `exclude` match against the asset's request; omit all three to apply to every asset. Matching rules set the same fields a `webpackPrefetch` / `webpackPreload` / `webpackAs` / `webpackType` / `webpackMedia` / `webpackFetchPriority` magic comment would; explicit magic comments on the same URL still win",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-parser-css-auto-url-hints-include-glob",
      description:
        "A glob pattern matched against a path, using `/` as path separator on every OS; a `!` prefix excludes what it matches",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-parser-css-auto-url-hints-include-not",
      description: "Logical NOT",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-parser-css-auto-url-hints-include-not-glob",
      description:
        "A glob pattern matched against a path, using `/` as path separator on every OS; a `!` prefix excludes what it matches",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-parser-css-auto-url-hints-media",
      description: 'Default `media` attribute (e.g. `"(min-width: 800px)"`)',
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-parser-css-auto-url-hints-prefetch",
      description:
        'When true, emit `<link rel="prefetch">` for matching assets without an explicit hint comment',
    },
    {
      name: "--no-module-parser-css-auto-url-hints-prefetch",
      description:
        "Negative 'module-parser-css-auto-url-hints-prefetch' option",
    },
    {
      name: "--module-parser-css-auto-url-hints-preload",
      description:
        'When true, emit `<link rel="preload">` for matching assets without an explicit hint comment',
    },
    {
      name: "--no-module-parser-css-auto-url-hints-preload",
      description: "Negative 'module-parser-css-auto-url-hints-preload' option",
    },
    {
      name: "--module-parser-css-auto-url-hints-test",
      description:
        "One default-hint rule for URL-referenced assets emitted by this parser (JS `new URL(...)`, CSS `url(...)`, HTML `<img src>` / `<link href>` / `<script src>`). `test` / `include` / `exclude` match against the asset's request; omit all three to apply to every asset. Matching rules set the same fields a `webpackPrefetch` / `webpackPreload` / `webpackAs` / `webpackType` / `webpackMedia` / `webpackFetchPriority` magic comment would; explicit magic comments on the same URL still win",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-parser-css-auto-url-hints-test-glob",
      description:
        "A glob pattern matched against a path, using `/` as path separator on every OS; a `!` prefix excludes what it matches",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-parser-css-auto-url-hints-test-not",
      description: "Logical NOT",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-parser-css-auto-url-hints-test-not-glob",
      description:
        "A glob pattern matched against a path, using `/` as path separator on every OS; a `!` prefix excludes what it matches",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-parser-css-auto-url-hints-type",
      description: "Default `type` attribute (MIME)",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-parser-css-auto-url-hints-reset",
      description:
        "Clear all items provided in 'module.parser.css/auto.urlHints' configuration. URL-referenced-asset default hint rules for this parser (JavaScript `new URL(...)`, CSS `url(...)`, HTML `<img src>` / `<link href>` / `<script src>`)",
    },
    {
      name: "--module-parser-css-global-animation",
      description: "Enable/disable renaming of `@keyframes`",
    },
    {
      name: "--no-module-parser-css-global-animation",
      description: "Negative 'module-parser-css-global-animation' option",
    },
    {
      name: "--module-parser-css-global-as",
      description:
        "Configure how the CSS source is parsed: as a full stylesheet (default) or as a block's contents (e.g. the content of an HTML `style` attribute)",
      args: {
        name: "value",
      },
    },
    {
      name: "--module-parser-css-global-container",
      description: "Enable/disable renaming of `@container` names",
    },
    {
      name: "--no-module-parser-css-global-container",
      description: "Negative 'module-parser-css-global-container' option",
    },
    {
      name: "--module-parser-css-global-custom-idents",
      description: "Enable/disable renaming of custom identifiers",
    },
    {
      name: "--no-module-parser-css-global-custom-idents",
      description: "Negative 'module-parser-css-global-custom-idents' option",
    },
    {
      name: "--module-parser-css-global-custom-media",
      description:
        "Enable/disable resolution of `@custom-media` at-rules (file-local build-time substitution)",
    },
    {
      name: "--no-module-parser-css-global-custom-media",
      description: "Negative 'module-parser-css-global-custom-media' option",
    },
    {
      name: "--module-parser-css-global-custom-selectors",
      description:
        "Enable/disable resolution of `@custom-selector` at-rules (file-local build-time expansion to `:is(...)`)",
    },
    {
      name: "--no-module-parser-css-global-custom-selectors",
      description:
        "Negative 'module-parser-css-global-custom-selectors' option",
    },
    {
      name: "--module-parser-css-global-dashed-idents",
      description:
        "Enable/disable renaming of dashed identifiers, e. g. custom properties",
    },
    {
      name: "--no-module-parser-css-global-dashed-idents",
      description: "Negative 'module-parser-css-global-dashed-idents' option",
    },
    {
      name: "--module-parser-css-global-export-type",
      description: "Configure how CSS content is exported as default",
      args: {
        name: "value",
      },
    },
    {
      name: "--module-parser-css-global-font-preload",
      description:
        'Auto-emit `<link rel="preload" as="font">` for the primary `src` URL of each `@font-face` reachable from an HTML entry\'s initial CSS. Only the first URL per `@font-face` is preloaded (preloading every format would double-download). Off by default; `parser.css.urlHints` rules and per-URL magic comments still override the seeded defaults. Set `output.crossOriginLoading` so the preload matches the font\'s CORS fetch',
    },
    {
      name: "--no-module-parser-css-global-font-preload",
      description: "Negative 'module-parser-css-global-font-preload' option",
    },
    {
      name: "--module-parser-css-global-function",
      description: "Enable/disable renaming of `@function` names",
    },
    {
      name: "--no-module-parser-css-global-function",
      description: "Negative 'module-parser-css-global-function' option",
    },
    {
      name: "--module-parser-css-global-grid",
      description: "Enable/disable renaming of grid identifiers",
    },
    {
      name: "--no-module-parser-css-global-grid",
      description: "Negative 'module-parser-css-global-grid' option",
    },
    {
      name: "--module-parser-css-global-import",
      description: "Enable/disable `@import` at-rules handling",
    },
    {
      name: "--no-module-parser-css-global-import",
      description: "Negative 'module-parser-css-global-import' option",
    },
    {
      name: "--module-parser-css-global-named-exports",
      description: "Use ES modules named export for css exports",
    },
    {
      name: "--no-module-parser-css-global-named-exports",
      description: "Negative 'module-parser-css-global-named-exports' option",
    },
    {
      name: "--module-parser-css-global-parse-errors",
      description:
        "Report each CSS parse error (CSS Syntax Level 3 §4, §5) the stylesheet holds: a build error where end of input cuts a token or rule short, a build warning for one the parser reads past. Off by default",
    },
    {
      name: "--no-module-parser-css-global-parse-errors",
      description: "Negative 'module-parser-css-global-parse-errors' option",
    },
    {
      name: "--module-parser-css-global-url",
      description:
        "Enable/disable `url()`/`image-set()`/`src()`/`image()` functions handling",
    },
    {
      name: "--no-module-parser-css-global-url",
      description: "Negative 'module-parser-css-global-url' option",
    },
    {
      name: "--module-parser-css-global-url-hints-as",
      description: "Default `as` attribute (script / style / font / image / …)",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-parser-css-global-url-hints-exclude",
      description:
        "One default-hint rule for URL-referenced assets emitted by this parser (JS `new URL(...)`, CSS `url(...)`, HTML `<img src>` / `<link href>` / `<script src>`). `test` / `include` / `exclude` match against the asset's request; omit all three to apply to every asset. Matching rules set the same fields a `webpackPrefetch` / `webpackPreload` / `webpackAs` / `webpackType` / `webpackMedia` / `webpackFetchPriority` magic comment would; explicit magic comments on the same URL still win",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-parser-css-global-url-hints-exclude-glob",
      description:
        "A glob pattern matched against a path, using `/` as path separator on every OS; a `!` prefix excludes what it matches",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-parser-css-global-url-hints-exclude-not",
      description: "Logical NOT",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-parser-css-global-url-hints-exclude-not-glob",
      description:
        "A glob pattern matched against a path, using `/` as path separator on every OS; a `!` prefix excludes what it matches",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-parser-css-global-url-hints-fetch-priority",
      description: "Default fetchpriority for prefetch / preload links",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--no-module-parser-css-global-url-hints-fetch-priority",
      description:
        "Negative 'module-parser-css-global-url-hints-fetch-priority' option",
    },
    {
      name: "--module-parser-css-global-url-hints-include",
      description:
        "One default-hint rule for URL-referenced assets emitted by this parser (JS `new URL(...)`, CSS `url(...)`, HTML `<img src>` / `<link href>` / `<script src>`). `test` / `include` / `exclude` match against the asset's request; omit all three to apply to every asset. Matching rules set the same fields a `webpackPrefetch` / `webpackPreload` / `webpackAs` / `webpackType` / `webpackMedia` / `webpackFetchPriority` magic comment would; explicit magic comments on the same URL still win",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-parser-css-global-url-hints-include-glob",
      description:
        "A glob pattern matched against a path, using `/` as path separator on every OS; a `!` prefix excludes what it matches",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-parser-css-global-url-hints-include-not",
      description: "Logical NOT",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-parser-css-global-url-hints-include-not-glob",
      description:
        "A glob pattern matched against a path, using `/` as path separator on every OS; a `!` prefix excludes what it matches",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-parser-css-global-url-hints-media",
      description: 'Default `media` attribute (e.g. `"(min-width: 800px)"`)',
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-parser-css-global-url-hints-prefetch",
      description:
        'When true, emit `<link rel="prefetch">` for matching assets without an explicit hint comment',
    },
    {
      name: "--no-module-parser-css-global-url-hints-prefetch",
      description:
        "Negative 'module-parser-css-global-url-hints-prefetch' option",
    },
    {
      name: "--module-parser-css-global-url-hints-preload",
      description:
        'When true, emit `<link rel="preload">` for matching assets without an explicit hint comment',
    },
    {
      name: "--no-module-parser-css-global-url-hints-preload",
      description:
        "Negative 'module-parser-css-global-url-hints-preload' option",
    },
    {
      name: "--module-parser-css-global-url-hints-test",
      description:
        "One default-hint rule for URL-referenced assets emitted by this parser (JS `new URL(...)`, CSS `url(...)`, HTML `<img src>` / `<link href>` / `<script src>`). `test` / `include` / `exclude` match against the asset's request; omit all three to apply to every asset. Matching rules set the same fields a `webpackPrefetch` / `webpackPreload` / `webpackAs` / `webpackType` / `webpackMedia` / `webpackFetchPriority` magic comment would; explicit magic comments on the same URL still win",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-parser-css-global-url-hints-test-glob",
      description:
        "A glob pattern matched against a path, using `/` as path separator on every OS; a `!` prefix excludes what it matches",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-parser-css-global-url-hints-test-not",
      description: "Logical NOT",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-parser-css-global-url-hints-test-not-glob",
      description:
        "A glob pattern matched against a path, using `/` as path separator on every OS; a `!` prefix excludes what it matches",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-parser-css-global-url-hints-type",
      description: "Default `type` attribute (MIME)",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-parser-css-global-url-hints-reset",
      description:
        "Clear all items provided in 'module.parser.css/global.urlHints' configuration. URL-referenced-asset default hint rules for this parser (JavaScript `new URL(...)`, CSS `url(...)`, HTML `<img src>` / `<link href>` / `<script src>`)",
    },
    {
      name: "--module-parser-css-module-animation",
      description: "Enable/disable renaming of `@keyframes`",
    },
    {
      name: "--no-module-parser-css-module-animation",
      description: "Negative 'module-parser-css-module-animation' option",
    },
    {
      name: "--module-parser-css-module-as",
      description:
        "Configure how the CSS source is parsed: as a full stylesheet (default) or as a block's contents (e.g. the content of an HTML `style` attribute)",
      args: {
        name: "value",
      },
    },
    {
      name: "--module-parser-css-module-container",
      description: "Enable/disable renaming of `@container` names",
    },
    {
      name: "--no-module-parser-css-module-container",
      description: "Negative 'module-parser-css-module-container' option",
    },
    {
      name: "--module-parser-css-module-custom-idents",
      description: "Enable/disable renaming of custom identifiers",
    },
    {
      name: "--no-module-parser-css-module-custom-idents",
      description: "Negative 'module-parser-css-module-custom-idents' option",
    },
    {
      name: "--module-parser-css-module-custom-media",
      description:
        "Enable/disable resolution of `@custom-media` at-rules (file-local build-time substitution)",
    },
    {
      name: "--no-module-parser-css-module-custom-media",
      description: "Negative 'module-parser-css-module-custom-media' option",
    },
    {
      name: "--module-parser-css-module-custom-selectors",
      description:
        "Enable/disable resolution of `@custom-selector` at-rules (file-local build-time expansion to `:is(...)`)",
    },
    {
      name: "--no-module-parser-css-module-custom-selectors",
      description:
        "Negative 'module-parser-css-module-custom-selectors' option",
    },
    {
      name: "--module-parser-css-module-dashed-idents",
      description:
        "Enable/disable renaming of dashed identifiers, e. g. custom properties",
    },
    {
      name: "--no-module-parser-css-module-dashed-idents",
      description: "Negative 'module-parser-css-module-dashed-idents' option",
    },
    {
      name: "--module-parser-css-module-export-type",
      description: "Configure how CSS content is exported as default",
      args: {
        name: "value",
      },
    },
    {
      name: "--module-parser-css-module-font-preload",
      description:
        'Auto-emit `<link rel="preload" as="font">` for the primary `src` URL of each `@font-face` reachable from an HTML entry\'s initial CSS. Only the first URL per `@font-face` is preloaded (preloading every format would double-download). Off by default; `parser.css.urlHints` rules and per-URL magic comments still override the seeded defaults. Set `output.crossOriginLoading` so the preload matches the font\'s CORS fetch',
    },
    {
      name: "--no-module-parser-css-module-font-preload",
      description: "Negative 'module-parser-css-module-font-preload' option",
    },
    {
      name: "--module-parser-css-module-function",
      description: "Enable/disable renaming of `@function` names",
    },
    {
      name: "--no-module-parser-css-module-function",
      description: "Negative 'module-parser-css-module-function' option",
    },
    {
      name: "--module-parser-css-module-grid",
      description: "Enable/disable renaming of grid identifiers",
    },
    {
      name: "--no-module-parser-css-module-grid",
      description: "Negative 'module-parser-css-module-grid' option",
    },
    {
      name: "--module-parser-css-module-import",
      description: "Enable/disable `@import` at-rules handling",
    },
    {
      name: "--no-module-parser-css-module-import",
      description: "Negative 'module-parser-css-module-import' option",
    },
    {
      name: "--module-parser-css-module-named-exports",
      description: "Use ES modules named export for css exports",
    },
    {
      name: "--no-module-parser-css-module-named-exports",
      description: "Negative 'module-parser-css-module-named-exports' option",
    },
    {
      name: "--module-parser-css-module-parse-errors",
      description:
        "Report each CSS parse error (CSS Syntax Level 3 §4, §5) the stylesheet holds: a build error where end of input cuts a token or rule short, a build warning for one the parser reads past. Off by default",
    },
    {
      name: "--no-module-parser-css-module-parse-errors",
      description: "Negative 'module-parser-css-module-parse-errors' option",
    },
    {
      name: "--module-parser-css-module-pure",
      description:
        "Enable strict pure mode: every selector must contain at least one local class or id selector",
    },
    {
      name: "--no-module-parser-css-module-pure",
      description: "Negative 'module-parser-css-module-pure' option",
    },
    {
      name: "--module-parser-css-module-url",
      description:
        "Enable/disable `url()`/`image-set()`/`src()`/`image()` functions handling",
    },
    {
      name: "--no-module-parser-css-module-url",
      description: "Negative 'module-parser-css-module-url' option",
    },
    {
      name: "--module-parser-css-module-url-hints-as",
      description: "Default `as` attribute (script / style / font / image / …)",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-parser-css-module-url-hints-exclude",
      description:
        "One default-hint rule for URL-referenced assets emitted by this parser (JS `new URL(...)`, CSS `url(...)`, HTML `<img src>` / `<link href>` / `<script src>`). `test` / `include` / `exclude` match against the asset's request; omit all three to apply to every asset. Matching rules set the same fields a `webpackPrefetch` / `webpackPreload` / `webpackAs` / `webpackType` / `webpackMedia` / `webpackFetchPriority` magic comment would; explicit magic comments on the same URL still win",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-parser-css-module-url-hints-exclude-glob",
      description:
        "A glob pattern matched against a path, using `/` as path separator on every OS; a `!` prefix excludes what it matches",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-parser-css-module-url-hints-exclude-not",
      description: "Logical NOT",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-parser-css-module-url-hints-exclude-not-glob",
      description:
        "A glob pattern matched against a path, using `/` as path separator on every OS; a `!` prefix excludes what it matches",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-parser-css-module-url-hints-fetch-priority",
      description: "Default fetchpriority for prefetch / preload links",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--no-module-parser-css-module-url-hints-fetch-priority",
      description:
        "Negative 'module-parser-css-module-url-hints-fetch-priority' option",
    },
    {
      name: "--module-parser-css-module-url-hints-include",
      description:
        "One default-hint rule for URL-referenced assets emitted by this parser (JS `new URL(...)`, CSS `url(...)`, HTML `<img src>` / `<link href>` / `<script src>`). `test` / `include` / `exclude` match against the asset's request; omit all three to apply to every asset. Matching rules set the same fields a `webpackPrefetch` / `webpackPreload` / `webpackAs` / `webpackType` / `webpackMedia` / `webpackFetchPriority` magic comment would; explicit magic comments on the same URL still win",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-parser-css-module-url-hints-include-glob",
      description:
        "A glob pattern matched against a path, using `/` as path separator on every OS; a `!` prefix excludes what it matches",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-parser-css-module-url-hints-include-not",
      description: "Logical NOT",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-parser-css-module-url-hints-include-not-glob",
      description:
        "A glob pattern matched against a path, using `/` as path separator on every OS; a `!` prefix excludes what it matches",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-parser-css-module-url-hints-media",
      description: 'Default `media` attribute (e.g. `"(min-width: 800px)"`)',
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-parser-css-module-url-hints-prefetch",
      description:
        'When true, emit `<link rel="prefetch">` for matching assets without an explicit hint comment',
    },
    {
      name: "--no-module-parser-css-module-url-hints-prefetch",
      description:
        "Negative 'module-parser-css-module-url-hints-prefetch' option",
    },
    {
      name: "--module-parser-css-module-url-hints-preload",
      description:
        'When true, emit `<link rel="preload">` for matching assets without an explicit hint comment',
    },
    {
      name: "--no-module-parser-css-module-url-hints-preload",
      description:
        "Negative 'module-parser-css-module-url-hints-preload' option",
    },
    {
      name: "--module-parser-css-module-url-hints-test",
      description:
        "One default-hint rule for URL-referenced assets emitted by this parser (JS `new URL(...)`, CSS `url(...)`, HTML `<img src>` / `<link href>` / `<script src>`). `test` / `include` / `exclude` match against the asset's request; omit all three to apply to every asset. Matching rules set the same fields a `webpackPrefetch` / `webpackPreload` / `webpackAs` / `webpackType` / `webpackMedia` / `webpackFetchPriority` magic comment would; explicit magic comments on the same URL still win",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-parser-css-module-url-hints-test-glob",
      description:
        "A glob pattern matched against a path, using `/` as path separator on every OS; a `!` prefix excludes what it matches",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-parser-css-module-url-hints-test-not",
      description: "Logical NOT",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-parser-css-module-url-hints-test-not-glob",
      description:
        "A glob pattern matched against a path, using `/` as path separator on every OS; a `!` prefix excludes what it matches",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-parser-css-module-url-hints-type",
      description: "Default `type` attribute (MIME)",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-parser-css-module-url-hints-reset",
      description:
        "Clear all items provided in 'module.parser.css/module.urlHints' configuration. URL-referenced-asset default hint rules for this parser (JavaScript `new URL(...)`, CSS `url(...)`, HTML `<img src>` / `<link href>` / `<script src>`)",
    },
    {
      name: "--module-parser-html-as",
      description:
        'Configure how the HTML source is parsed: `"document"` (the default) parses a full page; any other value is the tag name of the context element to parse the source as that element\'s inner HTML (a fragment) — e.g. `"template"` for a neutral fragment, or `"tbody"` so context-sensitive tags like a bare `<tr>`/`<td>` are kept instead of dropped',
      args: {
        name: "value",
      },
    },
    {
      name: "--module-parser-html-chunk-name",
      description:
        "Name the chunk an extracted `<script>`/`<link>` tag becomes, in place of the page and the tag's position. A string may carry `[page]` (the page's path, escaped for a name), `[name]` (the tag's own basename, empty for an inline body), `[index]` (the tag's position in the page) and `[type]`; a function is called with the same values and returns the name. A `<!-- webpackChunkName: \"...\" -->` comment before a tag wins over it, and either way the name is also the stem the chunk's file is emitted under",
      args: {
        name: "value",
      },
    },
    {
      name: "--module-parser-html-parse-errors",
      description:
        "Report each HTML parse error the page holds, by its WHATWG or html5lib name: a build error where end of input cuts a tag, comment or doctype short, a build warning for one the parser reads past. Off by default",
    },
    {
      name: "--no-module-parser-html-parse-errors",
      description: "Negative 'module-parser-html-parse-errors' option",
    },
    {
      name: "--module-parser-html-sources",
      description:
        'A source entry: either the string `"..."` to inline the built-in default sources, or an object describing a `tag`/`attribute` pair to extract and how to bundle it. Configure extraction of URL-like attribute values (e.g. `<img src>`, `<link href>`, `<script src>`) as webpack dependencies. `true` (default) uses the built-in source list; `false` disables extraction entirely so attributes are left untouched and `<script src>` / `<link rel="modulepreload">` / `<link rel="stylesheet">` no longer become compilation entries; an array lets you customize which `tag`/`attribute` pairs are treated as URLs and how they are bundled. Use the string `"..."` inside the array to inline the defaults. Inline `<script>` and `<style>` bodies are always processed; one whose `lang` names another language is a `data:` module typed as that language\'s files (`<style lang="scss">` as `text/x-scss`, `<script lang="ts">` as `text/typescript`), and any other valid media-type name as `text/x-<lang>`, so a `mimetype` rule runs its loader. A `<style module>` body is a CSS module, and the page\'s `class` and `id` values, the ids its `for`, `form`, `list`, `headers`, `itemref`, `popovertarget`, `commandfor`, `interestfor` and `aria-*` reference attributes name, its same-page `href="#id"` links, SVG `url(#id)` references and SMIL `id.event` timings are rewritten with the names it and any linked stylesheet that is a CSS module declare (see `cssModules`); `<style module="card">` or `<link rel="stylesheet" module="card">` names a module, read as `card.btn`; a page with neither is left as it is. Use `webpackIgnore` comments or `IgnorePlugin` to skip individual URLs',
      args: {
        name: "value",
        isOptional: true,
        isVariadic: true,
      },
    },
    {
      name: "--no-module-parser-html-sources",
      description: "Negative 'module-parser-html-sources' option",
    },
    {
      name: "--module-parser-html-sources-attribute",
      description: "Attribute name whose value is treated as a URL",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-parser-html-sources-tag",
      description: "Tag name to match. Omit to match any tag",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-parser-html-sources-type",
      description:
        'How the attribute value should be parsed and bundled, or `false` to disable a built-in source for this `tag`/`attribute` (use together with `"..."` to drop a default, e.g. stop treating `<img src>` as a URL). `src` extracts a single URL as a plain asset; `srcset` parses a `srcset`-style list of candidate URLs as plain assets; `css-url` extracts `url(...)` references from a CSS value (like an SVG presentation attribute such as `fill`) as plain assets; `script` and `script-module` emit a classic / ES-module chunk entry like `<script src>` and `<script type="module" src>`; `stylesheet` emits a CSS chunk entry like `<link rel="stylesheet">`; `html` treats the URL as a link to another HTML file that is bundled as its own emitted page (its assets extracted) and rewrites the attribute to the page\'s output filename (like Parcel\'s `<a href="page.html">`); `stylesheet-style` treats the attribute value as a full stylesheet (like a `<style>` body) and `stylesheet-style-attribute` as a CSS block\'s contents (a declaration list, like a `style` attribute) — both bundle it through the CSS pipeline and replace the attribute\'s content with the processed CSS at render time; `srcdoc` treats the attribute value as an entity-encoded HTML document (like `<iframe srcdoc>`), bundling it through the HTML pipeline and replacing the attribute\'s content with the processed HTML at render time',
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--no-module-parser-html-sources-type",
      description: "Negative 'module-parser-html-sources-type' option",
    },
    {
      name: "--module-parser-html-sources-reset",
      description:
        "Clear all items provided in 'module.parser.html.sources' configuration. Sources to extract as webpack dependencies. Use `\"...\"` to inline the default source list",
    },
    {
      name: "--module-parser-html-url-hints-as",
      description: "Default `as` attribute (script / style / font / image / …)",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-parser-html-url-hints-exclude",
      description:
        "One default-hint rule for URL-referenced assets emitted by this parser (JS `new URL(...)`, CSS `url(...)`, HTML `<img src>` / `<link href>` / `<script src>`). `test` / `include` / `exclude` match against the asset's request; omit all three to apply to every asset. Matching rules set the same fields a `webpackPrefetch` / `webpackPreload` / `webpackAs` / `webpackType` / `webpackMedia` / `webpackFetchPriority` magic comment would; explicit magic comments on the same URL still win",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-parser-html-url-hints-exclude-glob",
      description:
        "A glob pattern matched against a path, using `/` as path separator on every OS; a `!` prefix excludes what it matches",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-parser-html-url-hints-exclude-not",
      description: "Logical NOT",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-parser-html-url-hints-exclude-not-glob",
      description:
        "A glob pattern matched against a path, using `/` as path separator on every OS; a `!` prefix excludes what it matches",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-parser-html-url-hints-fetch-priority",
      description: "Default fetchpriority for prefetch / preload links",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--no-module-parser-html-url-hints-fetch-priority",
      description:
        "Negative 'module-parser-html-url-hints-fetch-priority' option",
    },
    {
      name: "--module-parser-html-url-hints-include",
      description:
        "One default-hint rule for URL-referenced assets emitted by this parser (JS `new URL(...)`, CSS `url(...)`, HTML `<img src>` / `<link href>` / `<script src>`). `test` / `include` / `exclude` match against the asset's request; omit all three to apply to every asset. Matching rules set the same fields a `webpackPrefetch` / `webpackPreload` / `webpackAs` / `webpackType` / `webpackMedia` / `webpackFetchPriority` magic comment would; explicit magic comments on the same URL still win",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-parser-html-url-hints-include-glob",
      description:
        "A glob pattern matched against a path, using `/` as path separator on every OS; a `!` prefix excludes what it matches",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-parser-html-url-hints-include-not",
      description: "Logical NOT",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-parser-html-url-hints-include-not-glob",
      description:
        "A glob pattern matched against a path, using `/` as path separator on every OS; a `!` prefix excludes what it matches",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-parser-html-url-hints-media",
      description: 'Default `media` attribute (e.g. `"(min-width: 800px)"`)',
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-parser-html-url-hints-prefetch",
      description:
        'When true, emit `<link rel="prefetch">` for matching assets without an explicit hint comment',
    },
    {
      name: "--no-module-parser-html-url-hints-prefetch",
      description: "Negative 'module-parser-html-url-hints-prefetch' option",
    },
    {
      name: "--module-parser-html-url-hints-preload",
      description:
        'When true, emit `<link rel="preload">` for matching assets without an explicit hint comment',
    },
    {
      name: "--no-module-parser-html-url-hints-preload",
      description: "Negative 'module-parser-html-url-hints-preload' option",
    },
    {
      name: "--module-parser-html-url-hints-test",
      description:
        "One default-hint rule for URL-referenced assets emitted by this parser (JS `new URL(...)`, CSS `url(...)`, HTML `<img src>` / `<link href>` / `<script src>`). `test` / `include` / `exclude` match against the asset's request; omit all three to apply to every asset. Matching rules set the same fields a `webpackPrefetch` / `webpackPreload` / `webpackAs` / `webpackType` / `webpackMedia` / `webpackFetchPriority` magic comment would; explicit magic comments on the same URL still win",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-parser-html-url-hints-test-glob",
      description:
        "A glob pattern matched against a path, using `/` as path separator on every OS; a `!` prefix excludes what it matches",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-parser-html-url-hints-test-not",
      description: "Logical NOT",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-parser-html-url-hints-test-not-glob",
      description:
        "A glob pattern matched against a path, using `/` as path separator on every OS; a `!` prefix excludes what it matches",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-parser-html-url-hints-type",
      description: "Default `type` attribute (MIME)",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-parser-html-url-hints-reset",
      description:
        "Clear all items provided in 'module.parser.html.urlHints' configuration. URL-referenced-asset default hint rules for this parser (JavaScript `new URL(...)`, CSS `url(...)`, HTML `<img src>` / `<link href>` / `<script src>`)",
    },
    {
      name: "--no-module-parser-javascript-amd",
      description: "Negative 'module-parser-javascript-amd' option",
    },
    {
      name: "--module-parser-javascript-anonymous-default-export-name",
      description:
        'Set .name to "default" for anonymous default export functions and classes per ES spec. Disable to reduce output size when .name is not needed',
    },
    {
      name: "--no-module-parser-javascript-anonymous-default-export-name",
      description:
        "Negative 'module-parser-javascript-anonymous-default-export-name' option",
    },
    {
      name: "--module-parser-javascript-browserify",
      description: "Enable/disable special handling for browserify bundles",
    },
    {
      name: "--no-module-parser-javascript-browserify",
      description: "Negative 'module-parser-javascript-browserify' option",
    },
    {
      name: "--module-parser-javascript-commonjs",
      description: "Enable/disable parsing of CommonJs syntax",
    },
    {
      name: "--no-module-parser-javascript-commonjs",
      description: "Negative 'module-parser-javascript-commonjs' option",
    },
    {
      name: "--module-parser-javascript-commonjs-magic-comments",
      description:
        "Enable/disable parsing of magic comments in CommonJs syntax",
    },
    {
      name: "--no-module-parser-javascript-commonjs-magic-comments",
      description:
        "Negative 'module-parser-javascript-commonjs-magic-comments' option",
    },
    {
      name: "--module-parser-javascript-create-require",
      description:
        'Enable/disable parsing "import { createRequire } from "module"" and evaluating createRequire()',
      args: {
        name: "value",
        isOptional: true,
      },
    },
    {
      name: "--no-module-parser-javascript-create-require",
      description: "Negative 'module-parser-javascript-create-require' option",
    },
    {
      name: "--module-parser-javascript-defer-import",
      description:
        "Enable experimental tc39 proposal https://github.com/tc39/proposal-defer-import-eval. This allows to defer execution of a module until it's first use",
    },
    {
      name: "--no-module-parser-javascript-defer-import",
      description: "Negative 'module-parser-javascript-defer-import' option",
    },
    {
      name: "--module-parser-javascript-dynamic-import-css-preload",
      description:
        'Auto-emit `<link rel="preload" as="style">` for the CSS of every dynamically imported (`import()`) chunk, so the stylesheet fetches in parallel with the chunk\'s JavaScript instead of after it parses. Unlike `dynamicImportPreload`, the JavaScript itself is not preloaded. `true` uses the default order; a number sets the preload order',
      args: {
        name: "value",
        isOptional: true,
      },
    },
    {
      name: "--no-module-parser-javascript-dynamic-import-css-preload",
      description:
        "Negative 'module-parser-javascript-dynamic-import-css-preload' option",
    },
    {
      name: "--module-parser-javascript-dynamic-import-fetch-priority",
      description: "Specifies global fetchPriority for dynamic import",
      args: {
        name: "value",
      },
    },
    {
      name: "--no-module-parser-javascript-dynamic-import-fetch-priority",
      description:
        "Negative 'module-parser-javascript-dynamic-import-fetch-priority' option",
    },
    {
      name: "--module-parser-javascript-dynamic-import-mode",
      description: "Specifies global mode for dynamic import",
      args: {
        name: "value",
      },
    },
    {
      name: "--module-parser-javascript-dynamic-import-prefetch",
      description: "Specifies global prefetch for dynamic import",
      args: {
        name: "value",
        isOptional: true,
      },
    },
    {
      name: "--no-module-parser-javascript-dynamic-import-prefetch",
      description:
        "Negative 'module-parser-javascript-dynamic-import-prefetch' option",
    },
    {
      name: "--module-parser-javascript-dynamic-import-preload",
      description: "Specifies global preload for dynamic import",
      args: {
        name: "value",
        isOptional: true,
      },
    },
    {
      name: "--no-module-parser-javascript-dynamic-import-preload",
      description:
        "Negative 'module-parser-javascript-dynamic-import-preload' option",
    },
    {
      name: "--module-parser-javascript-dynamic-url",
      description:
        "Enable/disable parsing of dynamic URL. Enable/disable parsing of new URL() syntax",
      args: {
        name: "value",
        isOptional: true,
      },
    },
    {
      name: "--no-module-parser-javascript-dynamic-url",
      description: "Negative 'module-parser-javascript-dynamic-url' option",
    },
    {
      name: "--module-parser-javascript-esm",
      description: "Enable/disable parsing of EcmaScript Modules syntax",
    },
    {
      name: "--no-module-parser-javascript-esm",
      description: "Negative 'module-parser-javascript-esm' option",
    },
    {
      name: "--module-parser-javascript-exports-presence",
      description:
        'Specifies the behavior of invalid export names in "import ... from ..." and "export ... from ..."',
      args: {
        name: "value",
      },
    },
    {
      name: "--no-module-parser-javascript-exports-presence",
      description:
        "Negative 'module-parser-javascript-exports-presence' option",
    },
    {
      name: "--module-parser-javascript-expr-context-critical",
      description: "Enable warnings for full dynamic dependencies",
    },
    {
      name: "--no-module-parser-javascript-expr-context-critical",
      description:
        "Negative 'module-parser-javascript-expr-context-critical' option",
    },
    {
      name: "--module-parser-javascript-expr-context-recursive",
      description:
        "Enable recursive directory lookup for full dynamic dependencies",
    },
    {
      name: "--no-module-parser-javascript-expr-context-recursive",
      description:
        "Negative 'module-parser-javascript-expr-context-recursive' option",
    },
    {
      name: "--module-parser-javascript-expr-context-reg-exp",
      description:
        "Sets the default regular expression for full dynamic dependencies",
      args: {
        name: "value",
        isOptional: true,
      },
    },
    {
      name: "--no-module-parser-javascript-expr-context-reg-exp",
      description:
        "Negative 'module-parser-javascript-expr-context-reg-exp' option",
    },
    {
      name: "--module-parser-javascript-expr-context-request",
      description: "Set the default request for full dynamic dependencies",
      args: {
        name: "value",
      },
    },
    {
      name: "--module-parser-javascript-harmony",
      description:
        'Deprecated in favor of "esm". Enable/disable parsing of EcmaScript Modules syntax',
      deprecated: true,
    },
    {
      name: "--no-module-parser-javascript-harmony",
      description: "Negative 'module-parser-javascript-harmony' option",
    },
    {
      name: "--module-parser-javascript-import",
      description: "Enable/disable parsing of import() syntax",
    },
    {
      name: "--no-module-parser-javascript-import",
      description: "Negative 'module-parser-javascript-import' option",
    },
    {
      name: "--module-parser-javascript-import-exports-presence",
      description:
        'Specifies the behavior of invalid export names in "import ... from ..."',
      args: {
        name: "value",
      },
    },
    {
      name: "--no-module-parser-javascript-import-exports-presence",
      description:
        "Negative 'module-parser-javascript-import-exports-presence' option",
    },
    {
      name: "--module-parser-javascript-import-meta",
      description:
        "Enable/disable evaluating import.meta. Set to 'preserve-unknown' or an object to preserve unknown properties for runtime evaluation",
      args: {
        name: "value",
        isOptional: true,
      },
    },
    {
      name: "--no-module-parser-javascript-import-meta",
      description: "Negative 'module-parser-javascript-import-meta' option",
    },
    {
      name: "--module-parser-javascript-import-meta-dirname",
      description: "Enable/disable evaluating import.meta.dirname",
    },
    {
      name: "--no-module-parser-javascript-import-meta-dirname",
      description:
        "Negative 'module-parser-javascript-import-meta-dirname' option",
    },
    {
      name: "--module-parser-javascript-import-meta-env",
      description: "Enable/disable evaluating import.meta.env",
    },
    {
      name: "--no-module-parser-javascript-import-meta-env",
      description: "Negative 'module-parser-javascript-import-meta-env' option",
    },
    {
      name: "--module-parser-javascript-import-meta-filename",
      description: "Enable/disable evaluating import.meta.filename",
    },
    {
      name: "--no-module-parser-javascript-import-meta-filename",
      description:
        "Negative 'module-parser-javascript-import-meta-filename' option",
    },
    {
      name: "--module-parser-javascript-import-meta-main",
      description: "Enable/disable evaluating import.meta.main",
    },
    {
      name: "--no-module-parser-javascript-import-meta-main",
      description:
        "Negative 'module-parser-javascript-import-meta-main' option",
    },
    {
      name: "--module-parser-javascript-import-meta-resolve",
      description: "Enable/disable evaluating import.meta.resolve",
    },
    {
      name: "--no-module-parser-javascript-import-meta-resolve",
      description:
        "Negative 'module-parser-javascript-import-meta-resolve' option",
    },
    {
      name: "--module-parser-javascript-import-meta-url",
      description: "Enable/disable evaluating import.meta.url",
    },
    {
      name: "--no-module-parser-javascript-import-meta-url",
      description: "Negative 'module-parser-javascript-import-meta-url' option",
    },
    {
      name: "--module-parser-javascript-import-meta-webpack",
      description: "Enable/disable evaluating import.meta.webpack",
    },
    {
      name: "--no-module-parser-javascript-import-meta-webpack",
      description:
        "Negative 'module-parser-javascript-import-meta-webpack' option",
    },
    {
      name: "--module-parser-javascript-import-meta-webpack-context",
      description: "Enable/disable evaluating import.meta.webpackContext",
    },
    {
      name: "--no-module-parser-javascript-import-meta-webpack-context",
      description:
        "Negative 'module-parser-javascript-import-meta-webpack-context' option",
    },
    {
      name: "--module-parser-javascript-import-meta-webpack-hot",
      description: "Enable/disable evaluating import.meta.webpackHot",
    },
    {
      name: "--no-module-parser-javascript-import-meta-webpack-hot",
      description:
        "Negative 'module-parser-javascript-import-meta-webpack-hot' option",
    },
    {
      name: "--module-parser-javascript-import-meta-context",
      description:
        'Deprecated in favor of "importMeta" object option with a "webpackContext" field. Enable/disable evaluating import.meta.webpackContext',
      deprecated: true,
    },
    {
      name: "--no-module-parser-javascript-import-meta-context",
      description:
        "Negative 'module-parser-javascript-import-meta-context' option",
    },
    {
      name: "--no-module-parser-javascript-node",
      description: "Negative 'module-parser-javascript-node' option",
    },
    {
      name: "--module-parser-javascript-node-dirname",
      description: "Include a polyfill for the '__dirname' variable",
      args: {
        name: "value",
        isOptional: true,
      },
    },
    {
      name: "--no-module-parser-javascript-node-dirname",
      description: "Negative 'module-parser-javascript-node-dirname' option",
    },
    {
      name: "--module-parser-javascript-node-filename",
      description: "Include a polyfill for the '__filename' variable",
      args: {
        name: "value",
        isOptional: true,
        suggestions: ["warn-mock", "mock", "node-module", "eval-only"],
      },
    },
    {
      name: "--no-module-parser-javascript-node-filename",
      description: "Negative 'module-parser-javascript-node-filename' option",
    },
    {
      name: "--module-parser-javascript-node-global",
      description: "Include a polyfill for the 'global' variable",
      args: {
        name: "value",
        isOptional: true,
      },
    },
    {
      name: "--no-module-parser-javascript-node-global",
      description: "Negative 'module-parser-javascript-node-global' option",
    },
    {
      name: "--module-parser-javascript-override-strict",
      description:
        "Override the module to strict or non-strict. This may affect the behavior of the module (some behaviors differ between strict and non-strict), so please configure this option carefully",
      args: {
        name: "value",
      },
    },
    {
      name: "--module-parser-javascript-pure-functions",
      description:
        "A top-level function name in the module to treat as side-effect-free when called",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-parser-javascript-pure-functions-reset",
      description:
        "Clear all items provided in 'module.parser.javascript.pureFunctions' configuration. Mark the listed top-level function names for pure-function-based tree shaking",
    },
    {
      name: "--module-parser-javascript-reexport-exports-presence",
      description:
        'Specifies the behavior of invalid export names in "export ... from ...". This might be useful to disable during the migration from "export ... from ..." to "export type ... from ..." when reexporting types in TypeScript',
      args: {
        name: "value",
      },
    },
    {
      name: "--no-module-parser-javascript-reexport-exports-presence",
      description:
        "Negative 'module-parser-javascript-reexport-exports-presence' option",
    },
    {
      name: "--module-parser-javascript-require-context",
      description: "Enable/disable parsing of require.context syntax",
    },
    {
      name: "--no-module-parser-javascript-require-context",
      description: "Negative 'module-parser-javascript-require-context' option",
    },
    {
      name: "--module-parser-javascript-require-ensure",
      description: "Enable/disable parsing of require.ensure syntax",
    },
    {
      name: "--no-module-parser-javascript-require-ensure",
      description: "Negative 'module-parser-javascript-require-ensure' option",
    },
    {
      name: "--module-parser-javascript-require-include",
      description: "Enable/disable parsing of require.include syntax",
    },
    {
      name: "--no-module-parser-javascript-require-include",
      description: "Negative 'module-parser-javascript-require-include' option",
    },
    {
      name: "--module-parser-javascript-require-js",
      description:
        "Enable/disable parsing of require.js special syntax like require.config, requirejs.config, require.version and requirejs.onError",
    },
    {
      name: "--no-module-parser-javascript-require-js",
      description: "Negative 'module-parser-javascript-require-js' option",
    },
    {
      name: "--module-parser-javascript-source-import",
      description:
        "Enable experimental tc39 proposal https://github.com/tc39/proposal-source-phase-imports. This allows importing modules at source phase",
    },
    {
      name: "--no-module-parser-javascript-source-import",
      description: "Negative 'module-parser-javascript-source-import' option",
    },
    {
      name: "--module-parser-javascript-spec-namespace-object",
      description:
        "Hand out a spec-compliant Module Namespace Exotic Object for 'import * as ns' and 'import()' of this module instead of the plain exports object. Requires 'Proxy' in the target environment, keeps every exported name, and costs runtime code, so enable it per module. Set it on the imported module, not on the importer",
    },
    {
      name: "--no-module-parser-javascript-spec-namespace-object",
      description:
        "Negative 'module-parser-javascript-spec-namespace-object' option",
    },
    {
      name: "--module-parser-javascript-strict-export-presence",
      description:
        'Deprecated in favor of "exportsPresence". Emit errors instead of warnings when imported names don\'t exist in imported module',
      deprecated: true,
    },
    {
      name: "--no-module-parser-javascript-strict-export-presence",
      description:
        "Negative 'module-parser-javascript-strict-export-presence' option",
    },
    {
      name: "--module-parser-javascript-strict-mode-violations",
      description:
        "Specifies the behavior of constructs that break at runtime in strict mode (e.g. 'with', 'arguments.callee', assigning to read-only globals) when modules are emitted as ES module output",
      args: {
        name: "value",
      },
    },
    {
      name: "--no-module-parser-javascript-strict-mode-violations",
      description:
        "Negative 'module-parser-javascript-strict-mode-violations' option",
    },
    {
      name: "--module-parser-javascript-strict-this-context-on-imports",
      description:
        "Handle the this context correctly according to the spec for namespace objects",
    },
    {
      name: "--no-module-parser-javascript-strict-this-context-on-imports",
      description:
        "Negative 'module-parser-javascript-strict-this-context-on-imports' option",
    },
    {
      name: "--module-parser-javascript-system",
      description:
        "Enable/disable parsing of System.js special syntax like System.import, System.get, System.set and System.register",
    },
    {
      name: "--no-module-parser-javascript-system",
      description: "Negative 'module-parser-javascript-system' option",
    },
    {
      name: "--module-parser-javascript-top-level-this",
      description:
        'Set what top-level "this" refers to in a non-ES module: "exports" (the exports object, as in Node.js) or "global" (the global object, as in a classic script)',
      args: {
        name: "value",
      },
    },
    {
      name: "--module-parser-javascript-typescript",
      description: "Enable typescript support",
    },
    {
      name: "--no-module-parser-javascript-typescript",
      description: "Negative 'module-parser-javascript-typescript' option",
    },
    {
      name: "--module-parser-javascript-unknown-context-critical",
      description:
        "Enable warnings when using the require function in a not statically analyse-able way",
    },
    {
      name: "--no-module-parser-javascript-unknown-context-critical",
      description:
        "Negative 'module-parser-javascript-unknown-context-critical' option",
    },
    {
      name: "--module-parser-javascript-unknown-context-recursive",
      description:
        "Enable recursive directory lookup when using the require function in a not statically analyse-able way",
    },
    {
      name: "--no-module-parser-javascript-unknown-context-recursive",
      description:
        "Negative 'module-parser-javascript-unknown-context-recursive' option",
    },
    {
      name: "--module-parser-javascript-unknown-context-reg-exp",
      description:
        "Sets the regular expression when using the require function in a not statically analyse-able way",
      args: {
        name: "value",
        isOptional: true,
      },
    },
    {
      name: "--no-module-parser-javascript-unknown-context-reg-exp",
      description:
        "Negative 'module-parser-javascript-unknown-context-reg-exp' option",
    },
    {
      name: "--module-parser-javascript-unknown-context-request",
      description:
        "Sets the request when using the require function in a not statically analyse-able way",
      args: {
        name: "value",
      },
    },
    {
      name: "--module-parser-javascript-url",
      description: "Enable/disable parsing of new URL() syntax",
      args: {
        name: "value",
        isOptional: true,
      },
    },
    {
      name: "--no-module-parser-javascript-url",
      description: "Negative 'module-parser-javascript-url' option",
    },
    {
      name: "--module-parser-javascript-url-hints-as",
      description: "Default `as` attribute (script / style / font / image / …)",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-parser-javascript-url-hints-exclude",
      description:
        "One default-hint rule for URL-referenced assets emitted by this parser (JS `new URL(...)`, CSS `url(...)`, HTML `<img src>` / `<link href>` / `<script src>`). `test` / `include` / `exclude` match against the asset's request; omit all three to apply to every asset. Matching rules set the same fields a `webpackPrefetch` / `webpackPreload` / `webpackAs` / `webpackType` / `webpackMedia` / `webpackFetchPriority` magic comment would; explicit magic comments on the same URL still win",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-parser-javascript-url-hints-exclude-glob",
      description:
        "A glob pattern matched against a path, using `/` as path separator on every OS; a `!` prefix excludes what it matches",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-parser-javascript-url-hints-exclude-not",
      description: "Logical NOT",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-parser-javascript-url-hints-exclude-not-glob",
      description:
        "A glob pattern matched against a path, using `/` as path separator on every OS; a `!` prefix excludes what it matches",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-parser-javascript-url-hints-fetch-priority",
      description: "Default fetchpriority for prefetch / preload links",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--no-module-parser-javascript-url-hints-fetch-priority",
      description:
        "Negative 'module-parser-javascript-url-hints-fetch-priority' option",
    },
    {
      name: "--module-parser-javascript-url-hints-include",
      description:
        "One default-hint rule for URL-referenced assets emitted by this parser (JS `new URL(...)`, CSS `url(...)`, HTML `<img src>` / `<link href>` / `<script src>`). `test` / `include` / `exclude` match against the asset's request; omit all three to apply to every asset. Matching rules set the same fields a `webpackPrefetch` / `webpackPreload` / `webpackAs` / `webpackType` / `webpackMedia` / `webpackFetchPriority` magic comment would; explicit magic comments on the same URL still win",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-parser-javascript-url-hints-include-glob",
      description:
        "A glob pattern matched against a path, using `/` as path separator on every OS; a `!` prefix excludes what it matches",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-parser-javascript-url-hints-include-not",
      description: "Logical NOT",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-parser-javascript-url-hints-include-not-glob",
      description:
        "A glob pattern matched against a path, using `/` as path separator on every OS; a `!` prefix excludes what it matches",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-parser-javascript-url-hints-media",
      description: 'Default `media` attribute (e.g. `"(min-width: 800px)"`)',
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-parser-javascript-url-hints-prefetch",
      description:
        'When true, emit `<link rel="prefetch">` for matching assets without an explicit hint comment',
    },
    {
      name: "--no-module-parser-javascript-url-hints-prefetch",
      description:
        "Negative 'module-parser-javascript-url-hints-prefetch' option",
    },
    {
      name: "--module-parser-javascript-url-hints-preload",
      description:
        'When true, emit `<link rel="preload">` for matching assets without an explicit hint comment',
    },
    {
      name: "--no-module-parser-javascript-url-hints-preload",
      description:
        "Negative 'module-parser-javascript-url-hints-preload' option",
    },
    {
      name: "--module-parser-javascript-url-hints-test",
      description:
        "One default-hint rule for URL-referenced assets emitted by this parser (JS `new URL(...)`, CSS `url(...)`, HTML `<img src>` / `<link href>` / `<script src>`). `test` / `include` / `exclude` match against the asset's request; omit all three to apply to every asset. Matching rules set the same fields a `webpackPrefetch` / `webpackPreload` / `webpackAs` / `webpackType` / `webpackMedia` / `webpackFetchPriority` magic comment would; explicit magic comments on the same URL still win",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-parser-javascript-url-hints-test-glob",
      description:
        "A glob pattern matched against a path, using `/` as path separator on every OS; a `!` prefix excludes what it matches",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-parser-javascript-url-hints-test-not",
      description: "Logical NOT",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-parser-javascript-url-hints-test-not-glob",
      description:
        "A glob pattern matched against a path, using `/` as path separator on every OS; a `!` prefix excludes what it matches",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-parser-javascript-url-hints-type",
      description: "Default `type` attribute (MIME)",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-parser-javascript-url-hints-reset",
      description:
        "Clear all items provided in 'module.parser.javascript.urlHints' configuration. URL-referenced-asset default hint rules for this parser (JavaScript `new URL(...)`, CSS `url(...)`, HTML `<img src>` / `<link href>` / `<script src>`)",
    },
    {
      name: "--module-parser-javascript-worker",
      description:
        "Specify a syntax that should be parsed as WebWorker reference. 'Abc' handles 'new Abc()', 'Abc from xyz' handles 'import { Abc } from \"xyz\"; new Abc()', 'abc()' handles 'abc()', and combinations are also possible. Disable or configure parsing of WebWorker syntax like new Worker() or navigator.serviceWorker.register()",
      args: {
        name: "value",
        isOptional: true,
        isVariadic: true,
      },
    },
    {
      name: "--no-module-parser-javascript-worker",
      description: "Negative 'module-parser-javascript-worker' option",
    },
    {
      name: "--module-parser-javascript-worker-reset",
      description:
        "Clear all items provided in 'module.parser.javascript.worker' configuration. Disable or configure parsing of WebWorker syntax like new Worker() or navigator.serviceWorker.register()",
    },
    {
      name: "--module-parser-javascript-worklet",
      description:
        "Specify a syntax that should be parsed as Worklet reference. '*context.audioWorklet.addModule()' handles 'context.audioWorklet.addModule()', 'abc()' handles 'abc()', and combinations are also possible. Disable or configure parsing of Worklet syntax like context.audioWorklet.addModule() or CSS.paintWorklet.addModule()",
      args: {
        name: "value",
        isOptional: true,
        isVariadic: true,
      },
    },
    {
      name: "--no-module-parser-javascript-worklet",
      description: "Negative 'module-parser-javascript-worklet' option",
    },
    {
      name: "--module-parser-javascript-worklet-reset",
      description:
        "Clear all items provided in 'module.parser.javascript.worklet' configuration. Disable or configure parsing of Worklet syntax like context.audioWorklet.addModule() or CSS.paintWorklet.addModule()",
    },
    {
      name: "--module-parser-javascript-wrapped-context-critical",
      description: "Enable warnings for partial dynamic dependencies",
    },
    {
      name: "--no-module-parser-javascript-wrapped-context-critical",
      description:
        "Negative 'module-parser-javascript-wrapped-context-critical' option",
    },
    {
      name: "--module-parser-javascript-wrapped-context-recursive",
      description:
        "Enable recursive directory lookup for partial dynamic dependencies",
    },
    {
      name: "--no-module-parser-javascript-wrapped-context-recursive",
      description:
        "Negative 'module-parser-javascript-wrapped-context-recursive' option",
    },
    {
      name: "--module-parser-javascript-wrapped-context-reg-exp",
      description:
        "Set the inner regular expression for partial dynamic dependencies",
      args: {
        name: "value",
      },
    },
    {
      name: "--no-module-parser-javascript-auto-amd",
      description: "Negative 'module-parser-javascript-auto-amd' option",
    },
    {
      name: "--module-parser-javascript-auto-anonymous-default-export-name",
      description:
        'Set .name to "default" for anonymous default export functions and classes per ES spec. Disable to reduce output size when .name is not needed',
    },
    {
      name: "--no-module-parser-javascript-auto-anonymous-default-export-name",
      description:
        "Negative 'module-parser-javascript-auto-anonymous-default-export-name' option",
    },
    {
      name: "--module-parser-javascript-auto-browserify",
      description: "Enable/disable special handling for browserify bundles",
    },
    {
      name: "--no-module-parser-javascript-auto-browserify",
      description: "Negative 'module-parser-javascript-auto-browserify' option",
    },
    {
      name: "--module-parser-javascript-auto-commonjs",
      description: "Enable/disable parsing of CommonJs syntax",
    },
    {
      name: "--no-module-parser-javascript-auto-commonjs",
      description: "Negative 'module-parser-javascript-auto-commonjs' option",
    },
    {
      name: "--module-parser-javascript-auto-commonjs-magic-comments",
      description:
        "Enable/disable parsing of magic comments in CommonJs syntax",
    },
    {
      name: "--no-module-parser-javascript-auto-commonjs-magic-comments",
      description:
        "Negative 'module-parser-javascript-auto-commonjs-magic-comments' option",
    },
    {
      name: "--module-parser-javascript-auto-create-require",
      description:
        'Enable/disable parsing "import { createRequire } from "module"" and evaluating createRequire()',
      args: {
        name: "value",
        isOptional: true,
      },
    },
    {
      name: "--no-module-parser-javascript-auto-create-require",
      description:
        "Negative 'module-parser-javascript-auto-create-require' option",
    },
    {
      name: "--module-parser-javascript-auto-defer-import",
      description:
        "Enable experimental tc39 proposal https://github.com/tc39/proposal-defer-import-eval. This allows to defer execution of a module until it's first use",
    },
    {
      name: "--no-module-parser-javascript-auto-defer-import",
      description:
        "Negative 'module-parser-javascript-auto-defer-import' option",
    },
    {
      name: "--module-parser-javascript-auto-dynamic-import-css-preload",
      description:
        'Auto-emit `<link rel="preload" as="style">` for the CSS of every dynamically imported (`import()`) chunk, so the stylesheet fetches in parallel with the chunk\'s JavaScript instead of after it parses. Unlike `dynamicImportPreload`, the JavaScript itself is not preloaded. `true` uses the default order; a number sets the preload order',
      args: {
        name: "value",
        isOptional: true,
      },
    },
    {
      name: "--no-module-parser-javascript-auto-dynamic-import-css-preload",
      description:
        "Negative 'module-parser-javascript-auto-dynamic-import-css-preload' option",
    },
    {
      name: "--module-parser-javascript-auto-dynamic-import-fetch-priority",
      description: "Specifies global fetchPriority for dynamic import",
      args: {
        name: "value",
      },
    },
    {
      name: "--no-module-parser-javascript-auto-dynamic-import-fetch-priority",
      description:
        "Negative 'module-parser-javascript-auto-dynamic-import-fetch-priority' option",
    },
    {
      name: "--module-parser-javascript-auto-dynamic-import-mode",
      description: "Specifies global mode for dynamic import",
      args: {
        name: "value",
      },
    },
    {
      name: "--module-parser-javascript-auto-dynamic-import-prefetch",
      description: "Specifies global prefetch for dynamic import",
      args: {
        name: "value",
        isOptional: true,
      },
    },
    {
      name: "--no-module-parser-javascript-auto-dynamic-import-prefetch",
      description:
        "Negative 'module-parser-javascript-auto-dynamic-import-prefetch' option",
    },
    {
      name: "--module-parser-javascript-auto-dynamic-import-preload",
      description: "Specifies global preload for dynamic import",
      args: {
        name: "value",
        isOptional: true,
      },
    },
    {
      name: "--no-module-parser-javascript-auto-dynamic-import-preload",
      description:
        "Negative 'module-parser-javascript-auto-dynamic-import-preload' option",
    },
    {
      name: "--module-parser-javascript-auto-dynamic-url",
      description: "Enable/disable parsing of dynamic URL",
    },
    {
      name: "--no-module-parser-javascript-auto-dynamic-url",
      description:
        "Negative 'module-parser-javascript-auto-dynamic-url' option",
    },
    {
      name: "--module-parser-javascript-auto-esm",
      description: "Enable/disable parsing of EcmaScript Modules syntax",
    },
    {
      name: "--no-module-parser-javascript-auto-esm",
      description: "Negative 'module-parser-javascript-auto-esm' option",
    },
    {
      name: "--module-parser-javascript-auto-exports-presence",
      description:
        'Specifies the behavior of invalid export names in "import ... from ..." and "export ... from ..."',
      args: {
        name: "value",
      },
    },
    {
      name: "--no-module-parser-javascript-auto-exports-presence",
      description:
        "Negative 'module-parser-javascript-auto-exports-presence' option",
    },
    {
      name: "--module-parser-javascript-auto-expr-context-critical",
      description: "Enable warnings for full dynamic dependencies",
    },
    {
      name: "--no-module-parser-javascript-auto-expr-context-critical",
      description:
        "Negative 'module-parser-javascript-auto-expr-context-critical' option",
    },
    {
      name: "--module-parser-javascript-auto-expr-context-recursive",
      description:
        "Enable recursive directory lookup for full dynamic dependencies",
    },
    {
      name: "--no-module-parser-javascript-auto-expr-context-recursive",
      description:
        "Negative 'module-parser-javascript-auto-expr-context-recursive' option",
    },
    {
      name: "--module-parser-javascript-auto-expr-context-reg-exp",
      description:
        "Sets the default regular expression for full dynamic dependencies",
      args: {
        name: "value",
        isOptional: true,
      },
    },
    {
      name: "--no-module-parser-javascript-auto-expr-context-reg-exp",
      description:
        "Negative 'module-parser-javascript-auto-expr-context-reg-exp' option",
    },
    {
      name: "--module-parser-javascript-auto-expr-context-request",
      description: "Set the default request for full dynamic dependencies",
      args: {
        name: "value",
      },
    },
    {
      name: "--module-parser-javascript-auto-harmony",
      description:
        'Deprecated in favor of "esm". Enable/disable parsing of EcmaScript Modules syntax',
      deprecated: true,
    },
    {
      name: "--no-module-parser-javascript-auto-harmony",
      description: "Negative 'module-parser-javascript-auto-harmony' option",
    },
    {
      name: "--module-parser-javascript-auto-import",
      description: "Enable/disable parsing of import() syntax",
    },
    {
      name: "--no-module-parser-javascript-auto-import",
      description: "Negative 'module-parser-javascript-auto-import' option",
    },
    {
      name: "--module-parser-javascript-auto-import-exports-presence",
      description:
        'Specifies the behavior of invalid export names in "import ... from ..."',
      args: {
        name: "value",
      },
    },
    {
      name: "--no-module-parser-javascript-auto-import-exports-presence",
      description:
        "Negative 'module-parser-javascript-auto-import-exports-presence' option",
    },
    {
      name: "--module-parser-javascript-auto-import-meta",
      description:
        "Enable/disable evaluating import.meta. Set to 'preserve-unknown' or an object to preserve unknown properties for runtime evaluation",
      args: {
        name: "value",
        isOptional: true,
      },
    },
    {
      name: "--no-module-parser-javascript-auto-import-meta",
      description:
        "Negative 'module-parser-javascript-auto-import-meta' option",
    },
    {
      name: "--module-parser-javascript-auto-import-meta-dirname",
      description: "Enable/disable evaluating import.meta.dirname",
    },
    {
      name: "--no-module-parser-javascript-auto-import-meta-dirname",
      description:
        "Negative 'module-parser-javascript-auto-import-meta-dirname' option",
    },
    {
      name: "--module-parser-javascript-auto-import-meta-env",
      description: "Enable/disable evaluating import.meta.env",
    },
    {
      name: "--no-module-parser-javascript-auto-import-meta-env",
      description:
        "Negative 'module-parser-javascript-auto-import-meta-env' option",
    },
    {
      name: "--module-parser-javascript-auto-import-meta-filename",
      description: "Enable/disable evaluating import.meta.filename",
    },
    {
      name: "--no-module-parser-javascript-auto-import-meta-filename",
      description:
        "Negative 'module-parser-javascript-auto-import-meta-filename' option",
    },
    {
      name: "--module-parser-javascript-auto-import-meta-main",
      description: "Enable/disable evaluating import.meta.main",
    },
    {
      name: "--no-module-parser-javascript-auto-import-meta-main",
      description:
        "Negative 'module-parser-javascript-auto-import-meta-main' option",
    },
    {
      name: "--module-parser-javascript-auto-import-meta-resolve",
      description: "Enable/disable evaluating import.meta.resolve",
    },
    {
      name: "--no-module-parser-javascript-auto-import-meta-resolve",
      description:
        "Negative 'module-parser-javascript-auto-import-meta-resolve' option",
    },
    {
      name: "--module-parser-javascript-auto-import-meta-url",
      description: "Enable/disable evaluating import.meta.url",
    },
    {
      name: "--no-module-parser-javascript-auto-import-meta-url",
      description:
        "Negative 'module-parser-javascript-auto-import-meta-url' option",
    },
    {
      name: "--module-parser-javascript-auto-import-meta-webpack",
      description: "Enable/disable evaluating import.meta.webpack",
    },
    {
      name: "--no-module-parser-javascript-auto-import-meta-webpack",
      description:
        "Negative 'module-parser-javascript-auto-import-meta-webpack' option",
    },
    {
      name: "--module-parser-javascript-auto-import-meta-webpack-context",
      description: "Enable/disable evaluating import.meta.webpackContext",
    },
    {
      name: "--no-module-parser-javascript-auto-import-meta-webpack-context",
      description:
        "Negative 'module-parser-javascript-auto-import-meta-webpack-context' option",
    },
    {
      name: "--module-parser-javascript-auto-import-meta-webpack-hot",
      description: "Enable/disable evaluating import.meta.webpackHot",
    },
    {
      name: "--no-module-parser-javascript-auto-import-meta-webpack-hot",
      description:
        "Negative 'module-parser-javascript-auto-import-meta-webpack-hot' option",
    },
    {
      name: "--module-parser-javascript-auto-import-meta-context",
      description:
        'Deprecated in favor of "importMeta" object option with a "webpackContext" field. Enable/disable evaluating import.meta.webpackContext',
      deprecated: true,
    },
    {
      name: "--no-module-parser-javascript-auto-import-meta-context",
      description:
        "Negative 'module-parser-javascript-auto-import-meta-context' option",
    },
    {
      name: "--no-module-parser-javascript-auto-node",
      description: "Negative 'module-parser-javascript-auto-node' option",
    },
    {
      name: "--module-parser-javascript-auto-node-dirname",
      description: "Include a polyfill for the '__dirname' variable",
      args: {
        name: "value",
        isOptional: true,
      },
    },
    {
      name: "--no-module-parser-javascript-auto-node-dirname",
      description:
        "Negative 'module-parser-javascript-auto-node-dirname' option",
    },
    {
      name: "--module-parser-javascript-auto-node-filename",
      description: "Include a polyfill for the '__filename' variable",
      args: {
        name: "value",
        isOptional: true,
        suggestions: ["warn-mock", "mock", "node-module", "eval-only"],
      },
    },
    {
      name: "--no-module-parser-javascript-auto-node-filename",
      description:
        "Negative 'module-parser-javascript-auto-node-filename' option",
    },
    {
      name: "--module-parser-javascript-auto-node-global",
      description: "Include a polyfill for the 'global' variable",
      args: {
        name: "value",
        isOptional: true,
      },
    },
    {
      name: "--no-module-parser-javascript-auto-node-global",
      description:
        "Negative 'module-parser-javascript-auto-node-global' option",
    },
    {
      name: "--module-parser-javascript-auto-override-strict",
      description:
        "Override the module to strict or non-strict. This may affect the behavior of the module (some behaviors differ between strict and non-strict), so please configure this option carefully",
      args: {
        name: "value",
      },
    },
    {
      name: "--module-parser-javascript-auto-pure-functions",
      description:
        "A top-level function name in the module to treat as side-effect-free when called",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-parser-javascript-auto-pure-functions-reset",
      description:
        "Clear all items provided in 'module.parser.javascript/auto.pureFunctions' configuration. Mark the listed top-level function names for pure-function-based tree shaking",
    },
    {
      name: "--module-parser-javascript-auto-reexport-exports-presence",
      description:
        'Specifies the behavior of invalid export names in "export ... from ...". This might be useful to disable during the migration from "export ... from ..." to "export type ... from ..." when reexporting types in TypeScript',
      args: {
        name: "value",
      },
    },
    {
      name: "--no-module-parser-javascript-auto-reexport-exports-presence",
      description:
        "Negative 'module-parser-javascript-auto-reexport-exports-presence' option",
    },
    {
      name: "--module-parser-javascript-auto-require-context",
      description: "Enable/disable parsing of require.context syntax",
    },
    {
      name: "--no-module-parser-javascript-auto-require-context",
      description:
        "Negative 'module-parser-javascript-auto-require-context' option",
    },
    {
      name: "--module-parser-javascript-auto-require-ensure",
      description: "Enable/disable parsing of require.ensure syntax",
    },
    {
      name: "--no-module-parser-javascript-auto-require-ensure",
      description:
        "Negative 'module-parser-javascript-auto-require-ensure' option",
    },
    {
      name: "--module-parser-javascript-auto-require-include",
      description: "Enable/disable parsing of require.include syntax",
    },
    {
      name: "--no-module-parser-javascript-auto-require-include",
      description:
        "Negative 'module-parser-javascript-auto-require-include' option",
    },
    {
      name: "--module-parser-javascript-auto-require-js",
      description:
        "Enable/disable parsing of require.js special syntax like require.config, requirejs.config, require.version and requirejs.onError",
    },
    {
      name: "--no-module-parser-javascript-auto-require-js",
      description: "Negative 'module-parser-javascript-auto-require-js' option",
    },
    {
      name: "--module-parser-javascript-auto-source-import",
      description:
        "Enable experimental tc39 proposal https://github.com/tc39/proposal-source-phase-imports. This allows importing modules at source phase",
    },
    {
      name: "--no-module-parser-javascript-auto-source-import",
      description:
        "Negative 'module-parser-javascript-auto-source-import' option",
    },
    {
      name: "--module-parser-javascript-auto-spec-namespace-object",
      description:
        "Hand out a spec-compliant Module Namespace Exotic Object for 'import * as ns' and 'import()' of this module instead of the plain exports object. Requires 'Proxy' in the target environment, keeps every exported name, and costs runtime code, so enable it per module. Set it on the imported module, not on the importer",
    },
    {
      name: "--no-module-parser-javascript-auto-spec-namespace-object",
      description:
        "Negative 'module-parser-javascript-auto-spec-namespace-object' option",
    },
    {
      name: "--module-parser-javascript-auto-strict-export-presence",
      description:
        'Deprecated in favor of "exportsPresence". Emit errors instead of warnings when imported names don\'t exist in imported module',
      deprecated: true,
    },
    {
      name: "--no-module-parser-javascript-auto-strict-export-presence",
      description:
        "Negative 'module-parser-javascript-auto-strict-export-presence' option",
    },
    {
      name: "--module-parser-javascript-auto-strict-mode-violations",
      description:
        "Specifies the behavior of constructs that break at runtime in strict mode (e.g. 'with', 'arguments.callee', assigning to read-only globals) when modules are emitted as ES module output",
      args: {
        name: "value",
      },
    },
    {
      name: "--no-module-parser-javascript-auto-strict-mode-violations",
      description:
        "Negative 'module-parser-javascript-auto-strict-mode-violations' option",
    },
    {
      name: "--module-parser-javascript-auto-strict-this-context-on-imports",
      description:
        "Handle the this context correctly according to the spec for namespace objects",
    },
    {
      name: "--no-module-parser-javascript-auto-strict-this-context-on-imports",
      description:
        "Negative 'module-parser-javascript-auto-strict-this-context-on-imports' option",
    },
    {
      name: "--module-parser-javascript-auto-system",
      description:
        "Enable/disable parsing of System.js special syntax like System.import, System.get, System.set and System.register",
    },
    {
      name: "--no-module-parser-javascript-auto-system",
      description: "Negative 'module-parser-javascript-auto-system' option",
    },
    {
      name: "--module-parser-javascript-auto-top-level-this",
      description:
        'Set what top-level "this" refers to in a non-ES module: "exports" (the exports object, as in Node.js) or "global" (the global object, as in a classic script)',
      args: {
        name: "value",
      },
    },
    {
      name: "--module-parser-javascript-auto-typescript",
      description: "Enable typescript support",
    },
    {
      name: "--no-module-parser-javascript-auto-typescript",
      description: "Negative 'module-parser-javascript-auto-typescript' option",
    },
    {
      name: "--module-parser-javascript-auto-unknown-context-critical",
      description:
        "Enable warnings when using the require function in a not statically analyse-able way",
    },
    {
      name: "--no-module-parser-javascript-auto-unknown-context-critical",
      description:
        "Negative 'module-parser-javascript-auto-unknown-context-critical' option",
    },
    {
      name: "--module-parser-javascript-auto-unknown-context-recursive",
      description:
        "Enable recursive directory lookup when using the require function in a not statically analyse-able way",
    },
    {
      name: "--no-module-parser-javascript-auto-unknown-context-recursive",
      description:
        "Negative 'module-parser-javascript-auto-unknown-context-recursive' option",
    },
    {
      name: "--module-parser-javascript-auto-unknown-context-reg-exp",
      description:
        "Sets the regular expression when using the require function in a not statically analyse-able way",
      args: {
        name: "value",
        isOptional: true,
      },
    },
    {
      name: "--no-module-parser-javascript-auto-unknown-context-reg-exp",
      description:
        "Negative 'module-parser-javascript-auto-unknown-context-reg-exp' option",
    },
    {
      name: "--module-parser-javascript-auto-unknown-context-request",
      description:
        "Sets the request when using the require function in a not statically analyse-able way",
      args: {
        name: "value",
      },
    },
    {
      name: "--module-parser-javascript-auto-url",
      description: "Enable/disable parsing of new URL() syntax",
      args: {
        name: "value",
        isOptional: true,
      },
    },
    {
      name: "--no-module-parser-javascript-auto-url",
      description: "Negative 'module-parser-javascript-auto-url' option",
    },
    {
      name: "--module-parser-javascript-auto-url-hints-as",
      description: "Default `as` attribute (script / style / font / image / …)",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-parser-javascript-auto-url-hints-exclude",
      description:
        "One default-hint rule for URL-referenced assets emitted by this parser (JS `new URL(...)`, CSS `url(...)`, HTML `<img src>` / `<link href>` / `<script src>`). `test` / `include` / `exclude` match against the asset's request; omit all three to apply to every asset. Matching rules set the same fields a `webpackPrefetch` / `webpackPreload` / `webpackAs` / `webpackType` / `webpackMedia` / `webpackFetchPriority` magic comment would; explicit magic comments on the same URL still win",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-parser-javascript-auto-url-hints-exclude-glob",
      description:
        "A glob pattern matched against a path, using `/` as path separator on every OS; a `!` prefix excludes what it matches",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-parser-javascript-auto-url-hints-exclude-not",
      description: "Logical NOT",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-parser-javascript-auto-url-hints-exclude-not-glob",
      description:
        "A glob pattern matched against a path, using `/` as path separator on every OS; a `!` prefix excludes what it matches",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-parser-javascript-auto-url-hints-fetch-priority",
      description: "Default fetchpriority for prefetch / preload links",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--no-module-parser-javascript-auto-url-hints-fetch-priority",
      description:
        "Negative 'module-parser-javascript-auto-url-hints-fetch-priority' option",
    },
    {
      name: "--module-parser-javascript-auto-url-hints-include",
      description:
        "One default-hint rule for URL-referenced assets emitted by this parser (JS `new URL(...)`, CSS `url(...)`, HTML `<img src>` / `<link href>` / `<script src>`). `test` / `include` / `exclude` match against the asset's request; omit all three to apply to every asset. Matching rules set the same fields a `webpackPrefetch` / `webpackPreload` / `webpackAs` / `webpackType` / `webpackMedia` / `webpackFetchPriority` magic comment would; explicit magic comments on the same URL still win",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-parser-javascript-auto-url-hints-include-glob",
      description:
        "A glob pattern matched against a path, using `/` as path separator on every OS; a `!` prefix excludes what it matches",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-parser-javascript-auto-url-hints-include-not",
      description: "Logical NOT",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-parser-javascript-auto-url-hints-include-not-glob",
      description:
        "A glob pattern matched against a path, using `/` as path separator on every OS; a `!` prefix excludes what it matches",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-parser-javascript-auto-url-hints-media",
      description: 'Default `media` attribute (e.g. `"(min-width: 800px)"`)',
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-parser-javascript-auto-url-hints-prefetch",
      description:
        'When true, emit `<link rel="prefetch">` for matching assets without an explicit hint comment',
    },
    {
      name: "--no-module-parser-javascript-auto-url-hints-prefetch",
      description:
        "Negative 'module-parser-javascript-auto-url-hints-prefetch' option",
    },
    {
      name: "--module-parser-javascript-auto-url-hints-preload",
      description:
        'When true, emit `<link rel="preload">` for matching assets without an explicit hint comment',
    },
    {
      name: "--no-module-parser-javascript-auto-url-hints-preload",
      description:
        "Negative 'module-parser-javascript-auto-url-hints-preload' option",
    },
    {
      name: "--module-parser-javascript-auto-url-hints-test",
      description:
        "One default-hint rule for URL-referenced assets emitted by this parser (JS `new URL(...)`, CSS `url(...)`, HTML `<img src>` / `<link href>` / `<script src>`). `test` / `include` / `exclude` match against the asset's request; omit all three to apply to every asset. Matching rules set the same fields a `webpackPrefetch` / `webpackPreload` / `webpackAs` / `webpackType` / `webpackMedia` / `webpackFetchPriority` magic comment would; explicit magic comments on the same URL still win",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-parser-javascript-auto-url-hints-test-glob",
      description:
        "A glob pattern matched against a path, using `/` as path separator on every OS; a `!` prefix excludes what it matches",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-parser-javascript-auto-url-hints-test-not",
      description: "Logical NOT",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-parser-javascript-auto-url-hints-test-not-glob",
      description:
        "A glob pattern matched against a path, using `/` as path separator on every OS; a `!` prefix excludes what it matches",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-parser-javascript-auto-url-hints-type",
      description: "Default `type` attribute (MIME)",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-parser-javascript-auto-url-hints-reset",
      description:
        "Clear all items provided in 'module.parser.javascript/auto.urlHints' configuration. URL-referenced-asset default hint rules for this parser (JavaScript `new URL(...)`, CSS `url(...)`, HTML `<img src>` / `<link href>` / `<script src>`)",
    },
    {
      name: "--module-parser-javascript-auto-worker",
      description:
        "Specify a syntax that should be parsed as WebWorker reference. 'Abc' handles 'new Abc()', 'Abc from xyz' handles 'import { Abc } from \"xyz\"; new Abc()', 'abc()' handles 'abc()', and combinations are also possible. Disable or configure parsing of WebWorker syntax like new Worker() or navigator.serviceWorker.register()",
      args: {
        name: "value",
        isOptional: true,
        isVariadic: true,
      },
    },
    {
      name: "--no-module-parser-javascript-auto-worker",
      description: "Negative 'module-parser-javascript-auto-worker' option",
    },
    {
      name: "--module-parser-javascript-auto-worker-reset",
      description:
        "Clear all items provided in 'module.parser.javascript/auto.worker' configuration. Disable or configure parsing of WebWorker syntax like new Worker() or navigator.serviceWorker.register()",
    },
    {
      name: "--module-parser-javascript-auto-worklet",
      description:
        "Specify a syntax that should be parsed as Worklet reference. '*context.audioWorklet.addModule()' handles 'context.audioWorklet.addModule()', 'abc()' handles 'abc()', and combinations are also possible. Disable or configure parsing of Worklet syntax like context.audioWorklet.addModule() or CSS.paintWorklet.addModule()",
      args: {
        name: "value",
        isOptional: true,
        isVariadic: true,
      },
    },
    {
      name: "--no-module-parser-javascript-auto-worklet",
      description: "Negative 'module-parser-javascript-auto-worklet' option",
    },
    {
      name: "--module-parser-javascript-auto-worklet-reset",
      description:
        "Clear all items provided in 'module.parser.javascript/auto.worklet' configuration. Disable or configure parsing of Worklet syntax like context.audioWorklet.addModule() or CSS.paintWorklet.addModule()",
    },
    {
      name: "--module-parser-javascript-auto-wrapped-context-critical",
      description: "Enable warnings for partial dynamic dependencies",
    },
    {
      name: "--no-module-parser-javascript-auto-wrapped-context-critical",
      description:
        "Negative 'module-parser-javascript-auto-wrapped-context-critical' option",
    },
    {
      name: "--module-parser-javascript-auto-wrapped-context-recursive",
      description:
        "Enable recursive directory lookup for partial dynamic dependencies",
    },
    {
      name: "--no-module-parser-javascript-auto-wrapped-context-recursive",
      description:
        "Negative 'module-parser-javascript-auto-wrapped-context-recursive' option",
    },
    {
      name: "--module-parser-javascript-auto-wrapped-context-reg-exp",
      description:
        "Set the inner regular expression for partial dynamic dependencies",
      args: {
        name: "value",
      },
    },
    {
      name: "--no-module-parser-javascript-dynamic-amd",
      description: "Negative 'module-parser-javascript-dynamic-amd' option",
    },
    {
      name: "--module-parser-javascript-dynamic-anonymous-default-export-name",
      description:
        'Set .name to "default" for anonymous default export functions and classes per ES spec. Disable to reduce output size when .name is not needed',
    },
    {
      name: "--no-module-parser-javascript-dynamic-anonymous-default-export-name",
      description:
        "Negative 'module-parser-javascript-dynamic-anonymous-default-export-name' option",
    },
    {
      name: "--module-parser-javascript-dynamic-browserify",
      description: "Enable/disable special handling for browserify bundles",
    },
    {
      name: "--no-module-parser-javascript-dynamic-browserify",
      description:
        "Negative 'module-parser-javascript-dynamic-browserify' option",
    },
    {
      name: "--module-parser-javascript-dynamic-commonjs",
      description: "Enable/disable parsing of CommonJs syntax",
    },
    {
      name: "--no-module-parser-javascript-dynamic-commonjs",
      description:
        "Negative 'module-parser-javascript-dynamic-commonjs' option",
    },
    {
      name: "--module-parser-javascript-dynamic-commonjs-magic-comments",
      description:
        "Enable/disable parsing of magic comments in CommonJs syntax",
    },
    {
      name: "--no-module-parser-javascript-dynamic-commonjs-magic-comments",
      description:
        "Negative 'module-parser-javascript-dynamic-commonjs-magic-comments' option",
    },
    {
      name: "--module-parser-javascript-dynamic-create-require",
      description:
        'Enable/disable parsing "import { createRequire } from "module"" and evaluating createRequire()',
      args: {
        name: "value",
        isOptional: true,
      },
    },
    {
      name: "--no-module-parser-javascript-dynamic-create-require",
      description:
        "Negative 'module-parser-javascript-dynamic-create-require' option",
    },
    {
      name: "--module-parser-javascript-dynamic-defer-import",
      description:
        "Enable experimental tc39 proposal https://github.com/tc39/proposal-defer-import-eval. This allows to defer execution of a module until it's first use",
    },
    {
      name: "--no-module-parser-javascript-dynamic-defer-import",
      description:
        "Negative 'module-parser-javascript-dynamic-defer-import' option",
    },
    {
      name: "--module-parser-javascript-dynamic-dynamic-import-css-preload",
      description:
        'Auto-emit `<link rel="preload" as="style">` for the CSS of every dynamically imported (`import()`) chunk, so the stylesheet fetches in parallel with the chunk\'s JavaScript instead of after it parses. Unlike `dynamicImportPreload`, the JavaScript itself is not preloaded. `true` uses the default order; a number sets the preload order',
      args: {
        name: "value",
        isOptional: true,
      },
    },
    {
      name: "--no-module-parser-javascript-dynamic-dynamic-import-css-preload",
      description:
        "Negative 'module-parser-javascript-dynamic-dynamic-import-css-preload' option",
    },
    {
      name: "--module-parser-javascript-dynamic-dynamic-import-fetch-priority",
      description: "Specifies global fetchPriority for dynamic import",
      args: {
        name: "value",
      },
    },
    {
      name: "--no-module-parser-javascript-dynamic-dynamic-import-fetch-priority",
      description:
        "Negative 'module-parser-javascript-dynamic-dynamic-import-fetch-priority' option",
    },
    {
      name: "--module-parser-javascript-dynamic-dynamic-import-mode",
      description: "Specifies global mode for dynamic import",
      args: {
        name: "value",
      },
    },
    {
      name: "--module-parser-javascript-dynamic-dynamic-import-prefetch",
      description: "Specifies global prefetch for dynamic import",
      args: {
        name: "value",
        isOptional: true,
      },
    },
    {
      name: "--no-module-parser-javascript-dynamic-dynamic-import-prefetch",
      description:
        "Negative 'module-parser-javascript-dynamic-dynamic-import-prefetch' option",
    },
    {
      name: "--module-parser-javascript-dynamic-dynamic-import-preload",
      description: "Specifies global preload for dynamic import",
      args: {
        name: "value",
        isOptional: true,
      },
    },
    {
      name: "--no-module-parser-javascript-dynamic-dynamic-import-preload",
      description:
        "Negative 'module-parser-javascript-dynamic-dynamic-import-preload' option",
    },
    {
      name: "--module-parser-javascript-dynamic-dynamic-url",
      description: "Enable/disable parsing of dynamic URL",
    },
    {
      name: "--no-module-parser-javascript-dynamic-dynamic-url",
      description:
        "Negative 'module-parser-javascript-dynamic-dynamic-url' option",
    },
    {
      name: "--module-parser-javascript-dynamic-esm",
      description: "Enable/disable parsing of EcmaScript Modules syntax",
    },
    {
      name: "--no-module-parser-javascript-dynamic-esm",
      description: "Negative 'module-parser-javascript-dynamic-esm' option",
    },
    {
      name: "--module-parser-javascript-dynamic-exports-presence",
      description:
        'Specifies the behavior of invalid export names in "import ... from ..." and "export ... from ..."',
      args: {
        name: "value",
      },
    },
    {
      name: "--no-module-parser-javascript-dynamic-exports-presence",
      description:
        "Negative 'module-parser-javascript-dynamic-exports-presence' option",
    },
    {
      name: "--module-parser-javascript-dynamic-expr-context-critical",
      description: "Enable warnings for full dynamic dependencies",
    },
    {
      name: "--no-module-parser-javascript-dynamic-expr-context-critical",
      description:
        "Negative 'module-parser-javascript-dynamic-expr-context-critical' option",
    },
    {
      name: "--module-parser-javascript-dynamic-expr-context-recursive",
      description:
        "Enable recursive directory lookup for full dynamic dependencies",
    },
    {
      name: "--no-module-parser-javascript-dynamic-expr-context-recursive",
      description:
        "Negative 'module-parser-javascript-dynamic-expr-context-recursive' option",
    },
    {
      name: "--module-parser-javascript-dynamic-expr-context-reg-exp",
      description:
        "Sets the default regular expression for full dynamic dependencies",
      args: {
        name: "value",
        isOptional: true,
      },
    },
    {
      name: "--no-module-parser-javascript-dynamic-expr-context-reg-exp",
      description:
        "Negative 'module-parser-javascript-dynamic-expr-context-reg-exp' option",
    },
    {
      name: "--module-parser-javascript-dynamic-expr-context-request",
      description: "Set the default request for full dynamic dependencies",
      args: {
        name: "value",
      },
    },
    {
      name: "--module-parser-javascript-dynamic-harmony",
      description:
        'Deprecated in favor of "esm". Enable/disable parsing of EcmaScript Modules syntax',
      deprecated: true,
    },
    {
      name: "--no-module-parser-javascript-dynamic-harmony",
      description: "Negative 'module-parser-javascript-dynamic-harmony' option",
    },
    {
      name: "--module-parser-javascript-dynamic-import",
      description: "Enable/disable parsing of import() syntax",
    },
    {
      name: "--no-module-parser-javascript-dynamic-import",
      description: "Negative 'module-parser-javascript-dynamic-import' option",
    },
    {
      name: "--module-parser-javascript-dynamic-import-exports-presence",
      description:
        'Specifies the behavior of invalid export names in "import ... from ..."',
      args: {
        name: "value",
      },
    },
    {
      name: "--no-module-parser-javascript-dynamic-import-exports-presence",
      description:
        "Negative 'module-parser-javascript-dynamic-import-exports-presence' option",
    },
    {
      name: "--module-parser-javascript-dynamic-import-meta",
      description:
        "Enable/disable evaluating import.meta. Set to 'preserve-unknown' or an object to preserve unknown properties for runtime evaluation",
      args: {
        name: "value",
        isOptional: true,
      },
    },
    {
      name: "--no-module-parser-javascript-dynamic-import-meta",
      description:
        "Negative 'module-parser-javascript-dynamic-import-meta' option",
    },
    {
      name: "--module-parser-javascript-dynamic-import-meta-dirname",
      description: "Enable/disable evaluating import.meta.dirname",
    },
    {
      name: "--no-module-parser-javascript-dynamic-import-meta-dirname",
      description:
        "Negative 'module-parser-javascript-dynamic-import-meta-dirname' option",
    },
    {
      name: "--module-parser-javascript-dynamic-import-meta-env",
      description: "Enable/disable evaluating import.meta.env",
    },
    {
      name: "--no-module-parser-javascript-dynamic-import-meta-env",
      description:
        "Negative 'module-parser-javascript-dynamic-import-meta-env' option",
    },
    {
      name: "--module-parser-javascript-dynamic-import-meta-filename",
      description: "Enable/disable evaluating import.meta.filename",
    },
    {
      name: "--no-module-parser-javascript-dynamic-import-meta-filename",
      description:
        "Negative 'module-parser-javascript-dynamic-import-meta-filename' option",
    },
    {
      name: "--module-parser-javascript-dynamic-import-meta-main",
      description: "Enable/disable evaluating import.meta.main",
    },
    {
      name: "--no-module-parser-javascript-dynamic-import-meta-main",
      description:
        "Negative 'module-parser-javascript-dynamic-import-meta-main' option",
    },
    {
      name: "--module-parser-javascript-dynamic-import-meta-resolve",
      description: "Enable/disable evaluating import.meta.resolve",
    },
    {
      name: "--no-module-parser-javascript-dynamic-import-meta-resolve",
      description:
        "Negative 'module-parser-javascript-dynamic-import-meta-resolve' option",
    },
    {
      name: "--module-parser-javascript-dynamic-import-meta-url",
      description: "Enable/disable evaluating import.meta.url",
    },
    {
      name: "--no-module-parser-javascript-dynamic-import-meta-url",
      description:
        "Negative 'module-parser-javascript-dynamic-import-meta-url' option",
    },
    {
      name: "--module-parser-javascript-dynamic-import-meta-webpack",
      description: "Enable/disable evaluating import.meta.webpack",
    },
    {
      name: "--no-module-parser-javascript-dynamic-import-meta-webpack",
      description:
        "Negative 'module-parser-javascript-dynamic-import-meta-webpack' option",
    },
    {
      name: "--module-parser-javascript-dynamic-import-meta-webpack-context",
      description: "Enable/disable evaluating import.meta.webpackContext",
    },
    {
      name: "--no-module-parser-javascript-dynamic-import-meta-webpack-context",
      description:
        "Negative 'module-parser-javascript-dynamic-import-meta-webpack-context' option",
    },
    {
      name: "--module-parser-javascript-dynamic-import-meta-webpack-hot",
      description: "Enable/disable evaluating import.meta.webpackHot",
    },
    {
      name: "--no-module-parser-javascript-dynamic-import-meta-webpack-hot",
      description:
        "Negative 'module-parser-javascript-dynamic-import-meta-webpack-hot' option",
    },
    {
      name: "--module-parser-javascript-dynamic-import-meta-context",
      description:
        'Deprecated in favor of "importMeta" object option with a "webpackContext" field. Enable/disable evaluating import.meta.webpackContext',
      deprecated: true,
    },
    {
      name: "--no-module-parser-javascript-dynamic-import-meta-context",
      description:
        "Negative 'module-parser-javascript-dynamic-import-meta-context' option",
    },
    {
      name: "--no-module-parser-javascript-dynamic-node",
      description: "Negative 'module-parser-javascript-dynamic-node' option",
    },
    {
      name: "--module-parser-javascript-dynamic-node-dirname",
      description: "Include a polyfill for the '__dirname' variable",
      args: {
        name: "value",
        isOptional: true,
      },
    },
    {
      name: "--no-module-parser-javascript-dynamic-node-dirname",
      description:
        "Negative 'module-parser-javascript-dynamic-node-dirname' option",
    },
    {
      name: "--module-parser-javascript-dynamic-node-filename",
      description: "Include a polyfill for the '__filename' variable",
      args: {
        name: "value",
        isOptional: true,
        suggestions: ["warn-mock", "mock", "node-module", "eval-only"],
      },
    },
    {
      name: "--no-module-parser-javascript-dynamic-node-filename",
      description:
        "Negative 'module-parser-javascript-dynamic-node-filename' option",
    },
    {
      name: "--module-parser-javascript-dynamic-node-global",
      description: "Include a polyfill for the 'global' variable",
      args: {
        name: "value",
        isOptional: true,
      },
    },
    {
      name: "--no-module-parser-javascript-dynamic-node-global",
      description:
        "Negative 'module-parser-javascript-dynamic-node-global' option",
    },
    {
      name: "--module-parser-javascript-dynamic-override-strict",
      description:
        "Override the module to strict or non-strict. This may affect the behavior of the module (some behaviors differ between strict and non-strict), so please configure this option carefully",
      args: {
        name: "value",
      },
    },
    {
      name: "--module-parser-javascript-dynamic-pure-functions",
      description:
        "A top-level function name in the module to treat as side-effect-free when called",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-parser-javascript-dynamic-pure-functions-reset",
      description:
        "Clear all items provided in 'module.parser.javascript/dynamic.pureFunctions' configuration. Mark the listed top-level function names for pure-function-based tree shaking",
    },
    {
      name: "--module-parser-javascript-dynamic-reexport-exports-presence",
      description:
        'Specifies the behavior of invalid export names in "export ... from ...". This might be useful to disable during the migration from "export ... from ..." to "export type ... from ..." when reexporting types in TypeScript',
      args: {
        name: "value",
      },
    },
    {
      name: "--no-module-parser-javascript-dynamic-reexport-exports-presence",
      description:
        "Negative 'module-parser-javascript-dynamic-reexport-exports-presence' option",
    },
    {
      name: "--module-parser-javascript-dynamic-require-context",
      description: "Enable/disable parsing of require.context syntax",
    },
    {
      name: "--no-module-parser-javascript-dynamic-require-context",
      description:
        "Negative 'module-parser-javascript-dynamic-require-context' option",
    },
    {
      name: "--module-parser-javascript-dynamic-require-ensure",
      description: "Enable/disable parsing of require.ensure syntax",
    },
    {
      name: "--no-module-parser-javascript-dynamic-require-ensure",
      description:
        "Negative 'module-parser-javascript-dynamic-require-ensure' option",
    },
    {
      name: "--module-parser-javascript-dynamic-require-include",
      description: "Enable/disable parsing of require.include syntax",
    },
    {
      name: "--no-module-parser-javascript-dynamic-require-include",
      description:
        "Negative 'module-parser-javascript-dynamic-require-include' option",
    },
    {
      name: "--module-parser-javascript-dynamic-require-js",
      description:
        "Enable/disable parsing of require.js special syntax like require.config, requirejs.config, require.version and requirejs.onError",
    },
    {
      name: "--no-module-parser-javascript-dynamic-require-js",
      description:
        "Negative 'module-parser-javascript-dynamic-require-js' option",
    },
    {
      name: "--module-parser-javascript-dynamic-source-import",
      description:
        "Enable experimental tc39 proposal https://github.com/tc39/proposal-source-phase-imports. This allows importing modules at source phase",
    },
    {
      name: "--no-module-parser-javascript-dynamic-source-import",
      description:
        "Negative 'module-parser-javascript-dynamic-source-import' option",
    },
    {
      name: "--module-parser-javascript-dynamic-spec-namespace-object",
      description:
        "Hand out a spec-compliant Module Namespace Exotic Object for 'import * as ns' and 'import()' of this module instead of the plain exports object. Requires 'Proxy' in the target environment, keeps every exported name, and costs runtime code, so enable it per module. Set it on the imported module, not on the importer",
    },
    {
      name: "--no-module-parser-javascript-dynamic-spec-namespace-object",
      description:
        "Negative 'module-parser-javascript-dynamic-spec-namespace-object' option",
    },
    {
      name: "--module-parser-javascript-dynamic-strict-export-presence",
      description:
        'Deprecated in favor of "exportsPresence". Emit errors instead of warnings when imported names don\'t exist in imported module',
      deprecated: true,
    },
    {
      name: "--no-module-parser-javascript-dynamic-strict-export-presence",
      description:
        "Negative 'module-parser-javascript-dynamic-strict-export-presence' option",
    },
    {
      name: "--module-parser-javascript-dynamic-strict-mode-violations",
      description:
        "Specifies the behavior of constructs that break at runtime in strict mode (e.g. 'with', 'arguments.callee', assigning to read-only globals) when modules are emitted as ES module output",
      args: {
        name: "value",
      },
    },
    {
      name: "--no-module-parser-javascript-dynamic-strict-mode-violations",
      description:
        "Negative 'module-parser-javascript-dynamic-strict-mode-violations' option",
    },
    {
      name: "--module-parser-javascript-dynamic-strict-this-context-on-imports",
      description:
        "Handle the this context correctly according to the spec for namespace objects",
    },
    {
      name: "--no-module-parser-javascript-dynamic-strict-this-context-on-imports",
      description:
        "Negative 'module-parser-javascript-dynamic-strict-this-context-on-imports' option",
    },
    {
      name: "--module-parser-javascript-dynamic-system",
      description:
        "Enable/disable parsing of System.js special syntax like System.import, System.get, System.set and System.register",
    },
    {
      name: "--no-module-parser-javascript-dynamic-system",
      description: "Negative 'module-parser-javascript-dynamic-system' option",
    },
    {
      name: "--module-parser-javascript-dynamic-top-level-this",
      description:
        'Set what top-level "this" refers to in a non-ES module: "exports" (the exports object, as in Node.js) or "global" (the global object, as in a classic script)',
      args: {
        name: "value",
      },
    },
    {
      name: "--module-parser-javascript-dynamic-typescript",
      description: "Enable typescript support",
    },
    {
      name: "--no-module-parser-javascript-dynamic-typescript",
      description:
        "Negative 'module-parser-javascript-dynamic-typescript' option",
    },
    {
      name: "--module-parser-javascript-dynamic-unknown-context-critical",
      description:
        "Enable warnings when using the require function in a not statically analyse-able way",
    },
    {
      name: "--no-module-parser-javascript-dynamic-unknown-context-critical",
      description:
        "Negative 'module-parser-javascript-dynamic-unknown-context-critical' option",
    },
    {
      name: "--module-parser-javascript-dynamic-unknown-context-recursive",
      description:
        "Enable recursive directory lookup when using the require function in a not statically analyse-able way",
    },
    {
      name: "--no-module-parser-javascript-dynamic-unknown-context-recursive",
      description:
        "Negative 'module-parser-javascript-dynamic-unknown-context-recursive' option",
    },
    {
      name: "--module-parser-javascript-dynamic-unknown-context-reg-exp",
      description:
        "Sets the regular expression when using the require function in a not statically analyse-able way",
      args: {
        name: "value",
        isOptional: true,
      },
    },
    {
      name: "--no-module-parser-javascript-dynamic-unknown-context-reg-exp",
      description:
        "Negative 'module-parser-javascript-dynamic-unknown-context-reg-exp' option",
    },
    {
      name: "--module-parser-javascript-dynamic-unknown-context-request",
      description:
        "Sets the request when using the require function in a not statically analyse-able way",
      args: {
        name: "value",
      },
    },
    {
      name: "--module-parser-javascript-dynamic-url-hints-as",
      description: "Default `as` attribute (script / style / font / image / …)",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-parser-javascript-dynamic-url-hints-exclude",
      description:
        "One default-hint rule for URL-referenced assets emitted by this parser (JS `new URL(...)`, CSS `url(...)`, HTML `<img src>` / `<link href>` / `<script src>`). `test` / `include` / `exclude` match against the asset's request; omit all three to apply to every asset. Matching rules set the same fields a `webpackPrefetch` / `webpackPreload` / `webpackAs` / `webpackType` / `webpackMedia` / `webpackFetchPriority` magic comment would; explicit magic comments on the same URL still win",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-parser-javascript-dynamic-url-hints-exclude-glob",
      description:
        "A glob pattern matched against a path, using `/` as path separator on every OS; a `!` prefix excludes what it matches",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-parser-javascript-dynamic-url-hints-exclude-not",
      description: "Logical NOT",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-parser-javascript-dynamic-url-hints-exclude-not-glob",
      description:
        "A glob pattern matched against a path, using `/` as path separator on every OS; a `!` prefix excludes what it matches",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-parser-javascript-dynamic-url-hints-fetch-priority",
      description: "Default fetchpriority for prefetch / preload links",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--no-module-parser-javascript-dynamic-url-hints-fetch-priority",
      description:
        "Negative 'module-parser-javascript-dynamic-url-hints-fetch-priority' option",
    },
    {
      name: "--module-parser-javascript-dynamic-url-hints-include",
      description:
        "One default-hint rule for URL-referenced assets emitted by this parser (JS `new URL(...)`, CSS `url(...)`, HTML `<img src>` / `<link href>` / `<script src>`). `test` / `include` / `exclude` match against the asset's request; omit all three to apply to every asset. Matching rules set the same fields a `webpackPrefetch` / `webpackPreload` / `webpackAs` / `webpackType` / `webpackMedia` / `webpackFetchPriority` magic comment would; explicit magic comments on the same URL still win",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-parser-javascript-dynamic-url-hints-include-glob",
      description:
        "A glob pattern matched against a path, using `/` as path separator on every OS; a `!` prefix excludes what it matches",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-parser-javascript-dynamic-url-hints-include-not",
      description: "Logical NOT",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-parser-javascript-dynamic-url-hints-include-not-glob",
      description:
        "A glob pattern matched against a path, using `/` as path separator on every OS; a `!` prefix excludes what it matches",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-parser-javascript-dynamic-url-hints-media",
      description: 'Default `media` attribute (e.g. `"(min-width: 800px)"`)',
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-parser-javascript-dynamic-url-hints-prefetch",
      description:
        'When true, emit `<link rel="prefetch">` for matching assets without an explicit hint comment',
    },
    {
      name: "--no-module-parser-javascript-dynamic-url-hints-prefetch",
      description:
        "Negative 'module-parser-javascript-dynamic-url-hints-prefetch' option",
    },
    {
      name: "--module-parser-javascript-dynamic-url-hints-preload",
      description:
        'When true, emit `<link rel="preload">` for matching assets without an explicit hint comment',
    },
    {
      name: "--no-module-parser-javascript-dynamic-url-hints-preload",
      description:
        "Negative 'module-parser-javascript-dynamic-url-hints-preload' option",
    },
    {
      name: "--module-parser-javascript-dynamic-url-hints-test",
      description:
        "One default-hint rule for URL-referenced assets emitted by this parser (JS `new URL(...)`, CSS `url(...)`, HTML `<img src>` / `<link href>` / `<script src>`). `test` / `include` / `exclude` match against the asset's request; omit all three to apply to every asset. Matching rules set the same fields a `webpackPrefetch` / `webpackPreload` / `webpackAs` / `webpackType` / `webpackMedia` / `webpackFetchPriority` magic comment would; explicit magic comments on the same URL still win",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-parser-javascript-dynamic-url-hints-test-glob",
      description:
        "A glob pattern matched against a path, using `/` as path separator on every OS; a `!` prefix excludes what it matches",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-parser-javascript-dynamic-url-hints-test-not",
      description: "Logical NOT",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-parser-javascript-dynamic-url-hints-test-not-glob",
      description:
        "A glob pattern matched against a path, using `/` as path separator on every OS; a `!` prefix excludes what it matches",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-parser-javascript-dynamic-url-hints-type",
      description: "Default `type` attribute (MIME)",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-parser-javascript-dynamic-url-hints-reset",
      description:
        "Clear all items provided in 'module.parser.javascript/dynamic.urlHints' configuration. URL-referenced-asset default hint rules for this parser (JavaScript `new URL(...)`, CSS `url(...)`, HTML `<img src>` / `<link href>` / `<script src>`)",
    },
    {
      name: "--module-parser-javascript-dynamic-worker",
      description:
        "Specify a syntax that should be parsed as WebWorker reference. 'Abc' handles 'new Abc()', 'Abc from xyz' handles 'import { Abc } from \"xyz\"; new Abc()', 'abc()' handles 'abc()', and combinations are also possible. Disable or configure parsing of WebWorker syntax like new Worker() or navigator.serviceWorker.register()",
      args: {
        name: "value",
        isOptional: true,
        isVariadic: true,
      },
    },
    {
      name: "--no-module-parser-javascript-dynamic-worker",
      description: "Negative 'module-parser-javascript-dynamic-worker' option",
    },
    {
      name: "--module-parser-javascript-dynamic-worker-reset",
      description:
        "Clear all items provided in 'module.parser.javascript/dynamic.worker' configuration. Disable or configure parsing of WebWorker syntax like new Worker() or navigator.serviceWorker.register()",
    },
    {
      name: "--module-parser-javascript-dynamic-worklet",
      description:
        "Specify a syntax that should be parsed as Worklet reference. '*context.audioWorklet.addModule()' handles 'context.audioWorklet.addModule()', 'abc()' handles 'abc()', and combinations are also possible. Disable or configure parsing of Worklet syntax like context.audioWorklet.addModule() or CSS.paintWorklet.addModule()",
      args: {
        name: "value",
        isOptional: true,
        isVariadic: true,
      },
    },
    {
      name: "--no-module-parser-javascript-dynamic-worklet",
      description: "Negative 'module-parser-javascript-dynamic-worklet' option",
    },
    {
      name: "--module-parser-javascript-dynamic-worklet-reset",
      description:
        "Clear all items provided in 'module.parser.javascript/dynamic.worklet' configuration. Disable or configure parsing of Worklet syntax like context.audioWorklet.addModule() or CSS.paintWorklet.addModule()",
    },
    {
      name: "--module-parser-javascript-dynamic-wrapped-context-critical",
      description: "Enable warnings for partial dynamic dependencies",
    },
    {
      name: "--no-module-parser-javascript-dynamic-wrapped-context-critical",
      description:
        "Negative 'module-parser-javascript-dynamic-wrapped-context-critical' option",
    },
    {
      name: "--module-parser-javascript-dynamic-wrapped-context-recursive",
      description:
        "Enable recursive directory lookup for partial dynamic dependencies",
    },
    {
      name: "--no-module-parser-javascript-dynamic-wrapped-context-recursive",
      description:
        "Negative 'module-parser-javascript-dynamic-wrapped-context-recursive' option",
    },
    {
      name: "--module-parser-javascript-dynamic-wrapped-context-reg-exp",
      description:
        "Set the inner regular expression for partial dynamic dependencies",
      args: {
        name: "value",
      },
    },
    {
      name: "--no-module-parser-javascript-esm-amd",
      description: "Negative 'module-parser-javascript-esm-amd' option",
    },
    {
      name: "--module-parser-javascript-esm-anonymous-default-export-name",
      description:
        'Set .name to "default" for anonymous default export functions and classes per ES spec. Disable to reduce output size when .name is not needed',
    },
    {
      name: "--no-module-parser-javascript-esm-anonymous-default-export-name",
      description:
        "Negative 'module-parser-javascript-esm-anonymous-default-export-name' option",
    },
    {
      name: "--module-parser-javascript-esm-browserify",
      description: "Enable/disable special handling for browserify bundles",
    },
    {
      name: "--no-module-parser-javascript-esm-browserify",
      description: "Negative 'module-parser-javascript-esm-browserify' option",
    },
    {
      name: "--module-parser-javascript-esm-commonjs",
      description: "Enable/disable parsing of CommonJs syntax",
    },
    {
      name: "--no-module-parser-javascript-esm-commonjs",
      description: "Negative 'module-parser-javascript-esm-commonjs' option",
    },
    {
      name: "--module-parser-javascript-esm-commonjs-magic-comments",
      description:
        "Enable/disable parsing of magic comments in CommonJs syntax",
    },
    {
      name: "--no-module-parser-javascript-esm-commonjs-magic-comments",
      description:
        "Negative 'module-parser-javascript-esm-commonjs-magic-comments' option",
    },
    {
      name: "--module-parser-javascript-esm-create-require",
      description:
        'Enable/disable parsing "import { createRequire } from "module"" and evaluating createRequire()',
      args: {
        name: "value",
        isOptional: true,
      },
    },
    {
      name: "--no-module-parser-javascript-esm-create-require",
      description:
        "Negative 'module-parser-javascript-esm-create-require' option",
    },
    {
      name: "--module-parser-javascript-esm-defer-import",
      description:
        "Enable experimental tc39 proposal https://github.com/tc39/proposal-defer-import-eval. This allows to defer execution of a module until it's first use",
    },
    {
      name: "--no-module-parser-javascript-esm-defer-import",
      description:
        "Negative 'module-parser-javascript-esm-defer-import' option",
    },
    {
      name: "--module-parser-javascript-esm-dynamic-import-css-preload",
      description:
        'Auto-emit `<link rel="preload" as="style">` for the CSS of every dynamically imported (`import()`) chunk, so the stylesheet fetches in parallel with the chunk\'s JavaScript instead of after it parses. Unlike `dynamicImportPreload`, the JavaScript itself is not preloaded. `true` uses the default order; a number sets the preload order',
      args: {
        name: "value",
        isOptional: true,
      },
    },
    {
      name: "--no-module-parser-javascript-esm-dynamic-import-css-preload",
      description:
        "Negative 'module-parser-javascript-esm-dynamic-import-css-preload' option",
    },
    {
      name: "--module-parser-javascript-esm-dynamic-import-fetch-priority",
      description: "Specifies global fetchPriority for dynamic import",
      args: {
        name: "value",
      },
    },
    {
      name: "--no-module-parser-javascript-esm-dynamic-import-fetch-priority",
      description:
        "Negative 'module-parser-javascript-esm-dynamic-import-fetch-priority' option",
    },
    {
      name: "--module-parser-javascript-esm-dynamic-import-mode",
      description: "Specifies global mode for dynamic import",
      args: {
        name: "value",
      },
    },
    {
      name: "--module-parser-javascript-esm-dynamic-import-prefetch",
      description: "Specifies global prefetch for dynamic import",
      args: {
        name: "value",
        isOptional: true,
      },
    },
    {
      name: "--no-module-parser-javascript-esm-dynamic-import-prefetch",
      description:
        "Negative 'module-parser-javascript-esm-dynamic-import-prefetch' option",
    },
    {
      name: "--module-parser-javascript-esm-dynamic-import-preload",
      description: "Specifies global preload for dynamic import",
      args: {
        name: "value",
        isOptional: true,
      },
    },
    {
      name: "--no-module-parser-javascript-esm-dynamic-import-preload",
      description:
        "Negative 'module-parser-javascript-esm-dynamic-import-preload' option",
    },
    {
      name: "--module-parser-javascript-esm-dynamic-url",
      description: "Enable/disable parsing of dynamic URL",
    },
    {
      name: "--no-module-parser-javascript-esm-dynamic-url",
      description: "Negative 'module-parser-javascript-esm-dynamic-url' option",
    },
    {
      name: "--module-parser-javascript-esm-esm",
      description: "Enable/disable parsing of EcmaScript Modules syntax",
    },
    {
      name: "--no-module-parser-javascript-esm-esm",
      description: "Negative 'module-parser-javascript-esm-esm' option",
    },
    {
      name: "--module-parser-javascript-esm-exports-presence",
      description:
        'Specifies the behavior of invalid export names in "import ... from ..." and "export ... from ..."',
      args: {
        name: "value",
      },
    },
    {
      name: "--no-module-parser-javascript-esm-exports-presence",
      description:
        "Negative 'module-parser-javascript-esm-exports-presence' option",
    },
    {
      name: "--module-parser-javascript-esm-expr-context-critical",
      description: "Enable warnings for full dynamic dependencies",
    },
    {
      name: "--no-module-parser-javascript-esm-expr-context-critical",
      description:
        "Negative 'module-parser-javascript-esm-expr-context-critical' option",
    },
    {
      name: "--module-parser-javascript-esm-expr-context-recursive",
      description:
        "Enable recursive directory lookup for full dynamic dependencies",
    },
    {
      name: "--no-module-parser-javascript-esm-expr-context-recursive",
      description:
        "Negative 'module-parser-javascript-esm-expr-context-recursive' option",
    },
    {
      name: "--module-parser-javascript-esm-expr-context-reg-exp",
      description:
        "Sets the default regular expression for full dynamic dependencies",
      args: {
        name: "value",
        isOptional: true,
      },
    },
    {
      name: "--no-module-parser-javascript-esm-expr-context-reg-exp",
      description:
        "Negative 'module-parser-javascript-esm-expr-context-reg-exp' option",
    },
    {
      name: "--module-parser-javascript-esm-expr-context-request",
      description: "Set the default request for full dynamic dependencies",
      args: {
        name: "value",
      },
    },
    {
      name: "--module-parser-javascript-esm-harmony",
      description:
        'Deprecated in favor of "esm". Enable/disable parsing of EcmaScript Modules syntax',
      deprecated: true,
    },
    {
      name: "--no-module-parser-javascript-esm-harmony",
      description: "Negative 'module-parser-javascript-esm-harmony' option",
    },
    {
      name: "--module-parser-javascript-esm-import",
      description: "Enable/disable parsing of import() syntax",
    },
    {
      name: "--no-module-parser-javascript-esm-import",
      description: "Negative 'module-parser-javascript-esm-import' option",
    },
    {
      name: "--module-parser-javascript-esm-import-exports-presence",
      description:
        'Specifies the behavior of invalid export names in "import ... from ..."',
      args: {
        name: "value",
      },
    },
    {
      name: "--no-module-parser-javascript-esm-import-exports-presence",
      description:
        "Negative 'module-parser-javascript-esm-import-exports-presence' option",
    },
    {
      name: "--module-parser-javascript-esm-import-meta",
      description:
        "Enable/disable evaluating import.meta. Set to 'preserve-unknown' or an object to preserve unknown properties for runtime evaluation",
      args: {
        name: "value",
        isOptional: true,
      },
    },
    {
      name: "--no-module-parser-javascript-esm-import-meta",
      description: "Negative 'module-parser-javascript-esm-import-meta' option",
    },
    {
      name: "--module-parser-javascript-esm-import-meta-dirname",
      description: "Enable/disable evaluating import.meta.dirname",
    },
    {
      name: "--no-module-parser-javascript-esm-import-meta-dirname",
      description:
        "Negative 'module-parser-javascript-esm-import-meta-dirname' option",
    },
    {
      name: "--module-parser-javascript-esm-import-meta-env",
      description: "Enable/disable evaluating import.meta.env",
    },
    {
      name: "--no-module-parser-javascript-esm-import-meta-env",
      description:
        "Negative 'module-parser-javascript-esm-import-meta-env' option",
    },
    {
      name: "--module-parser-javascript-esm-import-meta-filename",
      description: "Enable/disable evaluating import.meta.filename",
    },
    {
      name: "--no-module-parser-javascript-esm-import-meta-filename",
      description:
        "Negative 'module-parser-javascript-esm-import-meta-filename' option",
    },
    {
      name: "--module-parser-javascript-esm-import-meta-main",
      description: "Enable/disable evaluating import.meta.main",
    },
    {
      name: "--no-module-parser-javascript-esm-import-meta-main",
      description:
        "Negative 'module-parser-javascript-esm-import-meta-main' option",
    },
    {
      name: "--module-parser-javascript-esm-import-meta-resolve",
      description: "Enable/disable evaluating import.meta.resolve",
    },
    {
      name: "--no-module-parser-javascript-esm-import-meta-resolve",
      description:
        "Negative 'module-parser-javascript-esm-import-meta-resolve' option",
    },
    {
      name: "--module-parser-javascript-esm-import-meta-url",
      description: "Enable/disable evaluating import.meta.url",
    },
    {
      name: "--no-module-parser-javascript-esm-import-meta-url",
      description:
        "Negative 'module-parser-javascript-esm-import-meta-url' option",
    },
    {
      name: "--module-parser-javascript-esm-import-meta-webpack",
      description: "Enable/disable evaluating import.meta.webpack",
    },
    {
      name: "--no-module-parser-javascript-esm-import-meta-webpack",
      description:
        "Negative 'module-parser-javascript-esm-import-meta-webpack' option",
    },
    {
      name: "--module-parser-javascript-esm-import-meta-webpack-context",
      description: "Enable/disable evaluating import.meta.webpackContext",
    },
    {
      name: "--no-module-parser-javascript-esm-import-meta-webpack-context",
      description:
        "Negative 'module-parser-javascript-esm-import-meta-webpack-context' option",
    },
    {
      name: "--module-parser-javascript-esm-import-meta-webpack-hot",
      description: "Enable/disable evaluating import.meta.webpackHot",
    },
    {
      name: "--no-module-parser-javascript-esm-import-meta-webpack-hot",
      description:
        "Negative 'module-parser-javascript-esm-import-meta-webpack-hot' option",
    },
    {
      name: "--module-parser-javascript-esm-import-meta-context",
      description:
        'Deprecated in favor of "importMeta" object option with a "webpackContext" field. Enable/disable evaluating import.meta.webpackContext',
      deprecated: true,
    },
    {
      name: "--no-module-parser-javascript-esm-import-meta-context",
      description:
        "Negative 'module-parser-javascript-esm-import-meta-context' option",
    },
    {
      name: "--no-module-parser-javascript-esm-node",
      description: "Negative 'module-parser-javascript-esm-node' option",
    },
    {
      name: "--module-parser-javascript-esm-node-dirname",
      description: "Include a polyfill for the '__dirname' variable",
      args: {
        name: "value",
        isOptional: true,
      },
    },
    {
      name: "--no-module-parser-javascript-esm-node-dirname",
      description:
        "Negative 'module-parser-javascript-esm-node-dirname' option",
    },
    {
      name: "--module-parser-javascript-esm-node-filename",
      description: "Include a polyfill for the '__filename' variable",
      args: {
        name: "value",
        isOptional: true,
        suggestions: ["warn-mock", "mock", "node-module", "eval-only"],
      },
    },
    {
      name: "--no-module-parser-javascript-esm-node-filename",
      description:
        "Negative 'module-parser-javascript-esm-node-filename' option",
    },
    {
      name: "--module-parser-javascript-esm-node-global",
      description: "Include a polyfill for the 'global' variable",
      args: {
        name: "value",
        isOptional: true,
      },
    },
    {
      name: "--no-module-parser-javascript-esm-node-global",
      description: "Negative 'module-parser-javascript-esm-node-global' option",
    },
    {
      name: "--module-parser-javascript-esm-override-strict",
      description:
        "Override the module to strict or non-strict. This may affect the behavior of the module (some behaviors differ between strict and non-strict), so please configure this option carefully",
      args: {
        name: "value",
      },
    },
    {
      name: "--module-parser-javascript-esm-pure-functions",
      description:
        "A top-level function name in the module to treat as side-effect-free when called",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-parser-javascript-esm-pure-functions-reset",
      description:
        "Clear all items provided in 'module.parser.javascript/esm.pureFunctions' configuration. Mark the listed top-level function names for pure-function-based tree shaking",
    },
    {
      name: "--module-parser-javascript-esm-reexport-exports-presence",
      description:
        'Specifies the behavior of invalid export names in "export ... from ...". This might be useful to disable during the migration from "export ... from ..." to "export type ... from ..." when reexporting types in TypeScript',
      args: {
        name: "value",
      },
    },
    {
      name: "--no-module-parser-javascript-esm-reexport-exports-presence",
      description:
        "Negative 'module-parser-javascript-esm-reexport-exports-presence' option",
    },
    {
      name: "--module-parser-javascript-esm-require-context",
      description: "Enable/disable parsing of require.context syntax",
    },
    {
      name: "--no-module-parser-javascript-esm-require-context",
      description:
        "Negative 'module-parser-javascript-esm-require-context' option",
    },
    {
      name: "--module-parser-javascript-esm-require-ensure",
      description: "Enable/disable parsing of require.ensure syntax",
    },
    {
      name: "--no-module-parser-javascript-esm-require-ensure",
      description:
        "Negative 'module-parser-javascript-esm-require-ensure' option",
    },
    {
      name: "--module-parser-javascript-esm-require-include",
      description: "Enable/disable parsing of require.include syntax",
    },
    {
      name: "--no-module-parser-javascript-esm-require-include",
      description:
        "Negative 'module-parser-javascript-esm-require-include' option",
    },
    {
      name: "--module-parser-javascript-esm-require-js",
      description:
        "Enable/disable parsing of require.js special syntax like require.config, requirejs.config, require.version and requirejs.onError",
    },
    {
      name: "--no-module-parser-javascript-esm-require-js",
      description: "Negative 'module-parser-javascript-esm-require-js' option",
    },
    {
      name: "--module-parser-javascript-esm-source-import",
      description:
        "Enable experimental tc39 proposal https://github.com/tc39/proposal-source-phase-imports. This allows importing modules at source phase",
    },
    {
      name: "--no-module-parser-javascript-esm-source-import",
      description:
        "Negative 'module-parser-javascript-esm-source-import' option",
    },
    {
      name: "--module-parser-javascript-esm-spec-namespace-object",
      description:
        "Hand out a spec-compliant Module Namespace Exotic Object for 'import * as ns' and 'import()' of this module instead of the plain exports object. Requires 'Proxy' in the target environment, keeps every exported name, and costs runtime code, so enable it per module. Set it on the imported module, not on the importer",
    },
    {
      name: "--no-module-parser-javascript-esm-spec-namespace-object",
      description:
        "Negative 'module-parser-javascript-esm-spec-namespace-object' option",
    },
    {
      name: "--module-parser-javascript-esm-strict-export-presence",
      description:
        'Deprecated in favor of "exportsPresence". Emit errors instead of warnings when imported names don\'t exist in imported module',
      deprecated: true,
    },
    {
      name: "--no-module-parser-javascript-esm-strict-export-presence",
      description:
        "Negative 'module-parser-javascript-esm-strict-export-presence' option",
    },
    {
      name: "--module-parser-javascript-esm-strict-mode-violations",
      description:
        "Specifies the behavior of constructs that break at runtime in strict mode (e.g. 'with', 'arguments.callee', assigning to read-only globals) when modules are emitted as ES module output",
      args: {
        name: "value",
      },
    },
    {
      name: "--no-module-parser-javascript-esm-strict-mode-violations",
      description:
        "Negative 'module-parser-javascript-esm-strict-mode-violations' option",
    },
    {
      name: "--module-parser-javascript-esm-strict-this-context-on-imports",
      description:
        "Handle the this context correctly according to the spec for namespace objects",
    },
    {
      name: "--no-module-parser-javascript-esm-strict-this-context-on-imports",
      description:
        "Negative 'module-parser-javascript-esm-strict-this-context-on-imports' option",
    },
    {
      name: "--module-parser-javascript-esm-system",
      description:
        "Enable/disable parsing of System.js special syntax like System.import, System.get, System.set and System.register",
    },
    {
      name: "--no-module-parser-javascript-esm-system",
      description: "Negative 'module-parser-javascript-esm-system' option",
    },
    {
      name: "--module-parser-javascript-esm-top-level-this",
      description:
        'Set what top-level "this" refers to in a non-ES module: "exports" (the exports object, as in Node.js) or "global" (the global object, as in a classic script)',
      args: {
        name: "value",
      },
    },
    {
      name: "--module-parser-javascript-esm-typescript",
      description: "Enable typescript support",
    },
    {
      name: "--no-module-parser-javascript-esm-typescript",
      description: "Negative 'module-parser-javascript-esm-typescript' option",
    },
    {
      name: "--module-parser-javascript-esm-unknown-context-critical",
      description:
        "Enable warnings when using the require function in a not statically analyse-able way",
    },
    {
      name: "--no-module-parser-javascript-esm-unknown-context-critical",
      description:
        "Negative 'module-parser-javascript-esm-unknown-context-critical' option",
    },
    {
      name: "--module-parser-javascript-esm-unknown-context-recursive",
      description:
        "Enable recursive directory lookup when using the require function in a not statically analyse-able way",
    },
    {
      name: "--no-module-parser-javascript-esm-unknown-context-recursive",
      description:
        "Negative 'module-parser-javascript-esm-unknown-context-recursive' option",
    },
    {
      name: "--module-parser-javascript-esm-unknown-context-reg-exp",
      description:
        "Sets the regular expression when using the require function in a not statically analyse-able way",
      args: {
        name: "value",
        isOptional: true,
      },
    },
    {
      name: "--no-module-parser-javascript-esm-unknown-context-reg-exp",
      description:
        "Negative 'module-parser-javascript-esm-unknown-context-reg-exp' option",
    },
    {
      name: "--module-parser-javascript-esm-unknown-context-request",
      description:
        "Sets the request when using the require function in a not statically analyse-able way",
      args: {
        name: "value",
      },
    },
    {
      name: "--module-parser-javascript-esm-url",
      description: "Enable/disable parsing of new URL() syntax",
      args: {
        name: "value",
        isOptional: true,
      },
    },
    {
      name: "--no-module-parser-javascript-esm-url",
      description: "Negative 'module-parser-javascript-esm-url' option",
    },
    {
      name: "--module-parser-javascript-esm-url-hints-as",
      description: "Default `as` attribute (script / style / font / image / …)",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-parser-javascript-esm-url-hints-exclude",
      description:
        "One default-hint rule for URL-referenced assets emitted by this parser (JS `new URL(...)`, CSS `url(...)`, HTML `<img src>` / `<link href>` / `<script src>`). `test` / `include` / `exclude` match against the asset's request; omit all three to apply to every asset. Matching rules set the same fields a `webpackPrefetch` / `webpackPreload` / `webpackAs` / `webpackType` / `webpackMedia` / `webpackFetchPriority` magic comment would; explicit magic comments on the same URL still win",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-parser-javascript-esm-url-hints-exclude-glob",
      description:
        "A glob pattern matched against a path, using `/` as path separator on every OS; a `!` prefix excludes what it matches",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-parser-javascript-esm-url-hints-exclude-not",
      description: "Logical NOT",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-parser-javascript-esm-url-hints-exclude-not-glob",
      description:
        "A glob pattern matched against a path, using `/` as path separator on every OS; a `!` prefix excludes what it matches",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-parser-javascript-esm-url-hints-fetch-priority",
      description: "Default fetchpriority for prefetch / preload links",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--no-module-parser-javascript-esm-url-hints-fetch-priority",
      description:
        "Negative 'module-parser-javascript-esm-url-hints-fetch-priority' option",
    },
    {
      name: "--module-parser-javascript-esm-url-hints-include",
      description:
        "One default-hint rule for URL-referenced assets emitted by this parser (JS `new URL(...)`, CSS `url(...)`, HTML `<img src>` / `<link href>` / `<script src>`). `test` / `include` / `exclude` match against the asset's request; omit all three to apply to every asset. Matching rules set the same fields a `webpackPrefetch` / `webpackPreload` / `webpackAs` / `webpackType` / `webpackMedia` / `webpackFetchPriority` magic comment would; explicit magic comments on the same URL still win",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-parser-javascript-esm-url-hints-include-glob",
      description:
        "A glob pattern matched against a path, using `/` as path separator on every OS; a `!` prefix excludes what it matches",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-parser-javascript-esm-url-hints-include-not",
      description: "Logical NOT",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-parser-javascript-esm-url-hints-include-not-glob",
      description:
        "A glob pattern matched against a path, using `/` as path separator on every OS; a `!` prefix excludes what it matches",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-parser-javascript-esm-url-hints-media",
      description: 'Default `media` attribute (e.g. `"(min-width: 800px)"`)',
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-parser-javascript-esm-url-hints-prefetch",
      description:
        'When true, emit `<link rel="prefetch">` for matching assets without an explicit hint comment',
    },
    {
      name: "--no-module-parser-javascript-esm-url-hints-prefetch",
      description:
        "Negative 'module-parser-javascript-esm-url-hints-prefetch' option",
    },
    {
      name: "--module-parser-javascript-esm-url-hints-preload",
      description:
        'When true, emit `<link rel="preload">` for matching assets without an explicit hint comment',
    },
    {
      name: "--no-module-parser-javascript-esm-url-hints-preload",
      description:
        "Negative 'module-parser-javascript-esm-url-hints-preload' option",
    },
    {
      name: "--module-parser-javascript-esm-url-hints-test",
      description:
        "One default-hint rule for URL-referenced assets emitted by this parser (JS `new URL(...)`, CSS `url(...)`, HTML `<img src>` / `<link href>` / `<script src>`). `test` / `include` / `exclude` match against the asset's request; omit all three to apply to every asset. Matching rules set the same fields a `webpackPrefetch` / `webpackPreload` / `webpackAs` / `webpackType` / `webpackMedia` / `webpackFetchPriority` magic comment would; explicit magic comments on the same URL still win",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-parser-javascript-esm-url-hints-test-glob",
      description:
        "A glob pattern matched against a path, using `/` as path separator on every OS; a `!` prefix excludes what it matches",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-parser-javascript-esm-url-hints-test-not",
      description: "Logical NOT",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-parser-javascript-esm-url-hints-test-not-glob",
      description:
        "A glob pattern matched against a path, using `/` as path separator on every OS; a `!` prefix excludes what it matches",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-parser-javascript-esm-url-hints-type",
      description: "Default `type` attribute (MIME)",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-parser-javascript-esm-url-hints-reset",
      description:
        "Clear all items provided in 'module.parser.javascript/esm.urlHints' configuration. URL-referenced-asset default hint rules for this parser (JavaScript `new URL(...)`, CSS `url(...)`, HTML `<img src>` / `<link href>` / `<script src>`)",
    },
    {
      name: "--module-parser-javascript-esm-worker",
      description:
        "Specify a syntax that should be parsed as WebWorker reference. 'Abc' handles 'new Abc()', 'Abc from xyz' handles 'import { Abc } from \"xyz\"; new Abc()', 'abc()' handles 'abc()', and combinations are also possible. Disable or configure parsing of WebWorker syntax like new Worker() or navigator.serviceWorker.register()",
      args: {
        name: "value",
        isOptional: true,
        isVariadic: true,
      },
    },
    {
      name: "--no-module-parser-javascript-esm-worker",
      description: "Negative 'module-parser-javascript-esm-worker' option",
    },
    {
      name: "--module-parser-javascript-esm-worker-reset",
      description:
        "Clear all items provided in 'module.parser.javascript/esm.worker' configuration. Disable or configure parsing of WebWorker syntax like new Worker() or navigator.serviceWorker.register()",
    },
    {
      name: "--module-parser-javascript-esm-worklet",
      description:
        "Specify a syntax that should be parsed as Worklet reference. '*context.audioWorklet.addModule()' handles 'context.audioWorklet.addModule()', 'abc()' handles 'abc()', and combinations are also possible. Disable or configure parsing of Worklet syntax like context.audioWorklet.addModule() or CSS.paintWorklet.addModule()",
      args: {
        name: "value",
        isOptional: true,
        isVariadic: true,
      },
    },
    {
      name: "--no-module-parser-javascript-esm-worklet",
      description: "Negative 'module-parser-javascript-esm-worklet' option",
    },
    {
      name: "--module-parser-javascript-esm-worklet-reset",
      description:
        "Clear all items provided in 'module.parser.javascript/esm.worklet' configuration. Disable or configure parsing of Worklet syntax like context.audioWorklet.addModule() or CSS.paintWorklet.addModule()",
    },
    {
      name: "--module-parser-javascript-esm-wrapped-context-critical",
      description: "Enable warnings for partial dynamic dependencies",
    },
    {
      name: "--no-module-parser-javascript-esm-wrapped-context-critical",
      description:
        "Negative 'module-parser-javascript-esm-wrapped-context-critical' option",
    },
    {
      name: "--module-parser-javascript-esm-wrapped-context-recursive",
      description:
        "Enable recursive directory lookup for partial dynamic dependencies",
    },
    {
      name: "--no-module-parser-javascript-esm-wrapped-context-recursive",
      description:
        "Negative 'module-parser-javascript-esm-wrapped-context-recursive' option",
    },
    {
      name: "--module-parser-javascript-esm-wrapped-context-reg-exp",
      description:
        "Set the inner regular expression for partial dynamic dependencies",
      args: {
        name: "value",
      },
    },
    {
      name: "--module-parser-json-exports-depth",
      description: "The depth of json dependency flagged as `exportInfo`",
      args: {
        name: "value",
      },
    },
    {
      name: "--module-parser-json-named-exports",
      description: "Allow named exports for json of object type",
    },
    {
      name: "--no-module-parser-json-named-exports",
      description: "Negative 'module-parser-json-named-exports' option",
    },
    {
      name: "--module-rules-compiler",
      description: "Match the child compiler name",
      args: {
        name: "value",

        isVariadic: true,
      },
    },
    {
      name: "--module-rules-compiler-glob",
      description:
        "A glob pattern matched against a path, using `/` as path separator on every OS; a `!` prefix excludes what it matches",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-rules-compiler-not",
      description: "Logical NOT",
      args: {
        name: "value",

        isVariadic: true,
      },
    },
    {
      name: "--module-rules-compiler-not-glob",
      description:
        "A glob pattern matched against a path, using `/` as path separator on every OS; a `!` prefix excludes what it matches",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-rules-dependency",
      description: "Match dependency type",
      args: {
        name: "value",

        isVariadic: true,
      },
    },
    {
      name: "--module-rules-dependency-glob",
      description:
        "A glob pattern matched against a path, using `/` as path separator on every OS; a `!` prefix excludes what it matches",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-rules-dependency-not",
      description: "Logical NOT",
      args: {
        name: "value",

        isVariadic: true,
      },
    },
    {
      name: "--module-rules-dependency-not-glob",
      description:
        "A glob pattern matched against a path, using `/` as path separator on every OS; a `!` prefix excludes what it matches",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-rules-description-relative-path",
      description:
        "Match the path of the module relative to the directory of the description file (usually package.json), i.e. './lib/button.js'. Always uses forward slashes",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-rules-description-relative-path-glob",
      description:
        "A glob pattern matched against a path, using `/` as path separator on every OS; a `!` prefix excludes what it matches",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-rules-description-relative-path-not",
      description: "Logical NOT",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-rules-description-relative-path-not-glob",
      description:
        "A glob pattern matched against a path, using `/` as path separator on every OS; a `!` prefix excludes what it matches",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-rules-enforce",
      description: "Enforce this rule as pre or post step",
      args: {
        name: "value",

        isVariadic: true,
      },
    },
    {
      name: "--module-rules-exclude",
      description: "Shortcut for resource.exclude",
      args: {
        name: "value",

        isVariadic: true,
      },
    },
    {
      name: "--module-rules-exclude-glob",
      description:
        "A glob pattern matched against a path, using `/` as path separator on every OS; a `!` prefix excludes what it matches",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-rules-exclude-not",
      description: "Logical NOT",
      args: {
        name: "value",

        isVariadic: true,
      },
    },
    {
      name: "--module-rules-exclude-not-glob",
      description:
        "A glob pattern matched against a path, using `/` as path separator on every OS; a `!` prefix excludes what it matches",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-rules-extract-source-map",
      description: "Enable/Disable extracting source map",
    },
    {
      name: "--no-module-rules-extract-source-map",
      description: "Negative 'module-rules-extract-source-map' option",
    },
    {
      name: "--module-rules-glob",
      description:
        "A glob pattern matched against a path, using `/` as path separator on every OS; a `!` prefix excludes what it matches",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-rules-include",
      description: "Shortcut for resource.include",
      args: {
        name: "value",

        isVariadic: true,
      },
    },
    {
      name: "--module-rules-include-glob",
      description:
        "A glob pattern matched against a path, using `/` as path separator on every OS; a `!` prefix excludes what it matches",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-rules-include-not",
      description: "Logical NOT",
      args: {
        name: "value",

        isVariadic: true,
      },
    },
    {
      name: "--module-rules-include-not-glob",
      description:
        "A glob pattern matched against a path, using `/` as path separator on every OS; a `!` prefix excludes what it matches",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-rules-issuer",
      description:
        "Match the issuer of the module (The module pointing to this module)",
      args: {
        name: "value",

        isVariadic: true,
      },
    },
    {
      name: "--module-rules-issuer-glob",
      description:
        "A glob pattern matched against a path, using `/` as path separator on every OS; a `!` prefix excludes what it matches",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-rules-issuer-not",
      description: "Logical NOT",
      args: {
        name: "value",

        isVariadic: true,
      },
    },
    {
      name: "--module-rules-issuer-not-glob",
      description:
        "A glob pattern matched against a path, using `/` as path separator on every OS; a `!` prefix excludes what it matches",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-rules-issuer-layer",
      description:
        "Match layer of the issuer of this module (The module pointing to this module)",
      args: {
        name: "value",

        isVariadic: true,
      },
    },
    {
      name: "--module-rules-issuer-layer-glob",
      description:
        "A glob pattern matched against a path, using `/` as path separator on every OS; a `!` prefix excludes what it matches",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-rules-issuer-layer-not",
      description: "Logical NOT",
      args: {
        name: "value",

        isVariadic: true,
      },
    },
    {
      name: "--module-rules-issuer-layer-not-glob",
      description:
        "A glob pattern matched against a path, using `/` as path separator on every OS; a `!` prefix excludes what it matches",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-rules-layer",
      description:
        "Specifies the layer in which the module should be placed in",
      args: {
        name: "value",

        isVariadic: true,
      },
    },
    {
      name: "--module-rules-loader",
      description: "A loader request",
      args: {
        name: "value",

        isVariadic: true,
      },
    },
    {
      name: "--module-rules-mimetype",
      description: "Match module mimetype when load from Data URI",
      args: {
        name: "value",

        isVariadic: true,
      },
    },
    {
      name: "--module-rules-mimetype-glob",
      description:
        "A glob pattern matched against a path, using `/` as path separator on every OS; a `!` prefix excludes what it matches",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-rules-mimetype-not",
      description: "Logical NOT",
      args: {
        name: "value",

        isVariadic: true,
      },
    },
    {
      name: "--module-rules-mimetype-not-glob",
      description:
        "A glob pattern matched against a path, using `/` as path separator on every OS; a `!` prefix excludes what it matches",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-rules-phase",
      description: "Match the import phase of the dependency",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-rules-phase-glob",
      description:
        "A glob pattern matched against a path, using `/` as path separator on every OS; a `!` prefix excludes what it matches",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-rules-phase-not",
      description: "Logical NOT",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-rules-phase-not-glob",
      description:
        "A glob pattern matched against a path, using `/` as path separator on every OS; a `!` prefix excludes what it matches",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-rules-real-resource",
      description: "Match the real resource path of the module",
      args: {
        name: "value",

        isVariadic: true,
      },
    },
    {
      name: "--module-rules-real-resource-glob",
      description:
        "A glob pattern matched against a path, using `/` as path separator on every OS; a `!` prefix excludes what it matches",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-rules-real-resource-not",
      description: "Logical NOT",
      args: {
        name: "value",

        isVariadic: true,
      },
    },
    {
      name: "--module-rules-real-resource-not-glob",
      description:
        "A glob pattern matched against a path, using `/` as path separator on every OS; a `!` prefix excludes what it matches",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-rules-resource",
      description: "Match the resource path of the module",
      args: {
        name: "value",

        isVariadic: true,
      },
    },
    {
      name: "--module-rules-resource-glob",
      description:
        "A glob pattern matched against a path, using `/` as path separator on every OS; a `!` prefix excludes what it matches",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-rules-resource-not",
      description: "Logical NOT",
      args: {
        name: "value",

        isVariadic: true,
      },
    },
    {
      name: "--module-rules-resource-not-glob",
      description:
        "A glob pattern matched against a path, using `/` as path separator on every OS; a `!` prefix excludes what it matches",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-rules-resource-fragment",
      description: "Match the resource fragment of the module",
      args: {
        name: "value",

        isVariadic: true,
      },
    },
    {
      name: "--module-rules-resource-fragment-glob",
      description:
        "A glob pattern matched against a path, using `/` as path separator on every OS; a `!` prefix excludes what it matches",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-rules-resource-fragment-not",
      description: "Logical NOT",
      args: {
        name: "value",

        isVariadic: true,
      },
    },
    {
      name: "--module-rules-resource-fragment-not-glob",
      description:
        "A glob pattern matched against a path, using `/` as path separator on every OS; a `!` prefix excludes what it matches",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-rules-resource-query",
      description: "Match the resource query of the module",
      args: {
        name: "value",

        isVariadic: true,
      },
    },
    {
      name: "--module-rules-resource-query-glob",
      description:
        "A glob pattern matched against a path, using `/` as path separator on every OS; a `!` prefix excludes what it matches",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-rules-resource-query-not",
      description: "Logical NOT",
      args: {
        name: "value",

        isVariadic: true,
      },
    },
    {
      name: "--module-rules-resource-query-not-glob",
      description:
        "A glob pattern matched against a path, using `/` as path separator on every OS; a `!` prefix excludes what it matches",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-rules-scheme",
      description: "Match module scheme",
      args: {
        name: "value",

        isVariadic: true,
      },
    },
    {
      name: "--module-rules-scheme-glob",
      description:
        "A glob pattern matched against a path, using `/` as path separator on every OS; a `!` prefix excludes what it matches",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-rules-scheme-not",
      description: "Logical NOT",
      args: {
        name: "value",

        isVariadic: true,
      },
    },
    {
      name: "--module-rules-scheme-not-glob",
      description:
        "A glob pattern matched against a path, using `/` as path separator on every OS; a `!` prefix excludes what it matches",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-rules-side-effects",
      description: "Flags a module as with or without side effects",
    },
    {
      name: "--no-module-rules-side-effects",
      description: "Negative 'module-rules-side-effects' option",
    },
    {
      name: "--module-rules-test",
      description: "Shortcut for resource.test",
      args: {
        name: "value",

        isVariadic: true,
      },
    },
    {
      name: "--module-rules-test-glob",
      description:
        "A glob pattern matched against a path, using `/` as path separator on every OS; a `!` prefix excludes what it matches",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-rules-test-not",
      description: "Logical NOT",
      args: {
        name: "value",

        isVariadic: true,
      },
    },
    {
      name: "--module-rules-test-not-glob",
      description:
        "A glob pattern matched against a path, using `/` as path separator on every OS; a `!` prefix excludes what it matches",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-rules-type",
      description: "Module type to use for the module",
      args: {
        name: "value",

        isVariadic: true,
      },
    },
    {
      name: "--module-rules-use-ident",
      description: "Unique loader options identifier",
      args: {
        name: "value",

        isVariadic: true,
      },
    },
    {
      name: "--module-rules-use-loader",
      description: "A loader request",
      args: {
        name: "value",

        isVariadic: true,
      },
    },
    {
      name: "--module-rules-use-options",
      description: "Options passed to a loader",
      args: {
        name: "value",

        isVariadic: true,
      },
    },
    {
      name: "--module-rules-use-source-test",
      description:
        "Run the loader's normal function only when its current input matches this condition, the same kind of condition 'test' takes. Input that is not valid UTF-8 text always runs it",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-rules-use-source-test-glob",
      description:
        "A glob pattern matched against a path, using `/` as path separator on every OS; a `!` prefix excludes what it matches",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-rules-use-source-test-not",
      description: "Logical NOT",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-rules-use-source-test-not-glob",
      description:
        "A glob pattern matched against a path, using `/` as path separator on every OS; a `!` prefix excludes what it matches",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--module-rules-use",
      description: "A loader request",
      args: {
        name: "value",

        isVariadic: true,
      },
    },
    {
      name: "--module-rules-reset",
      description:
        "Clear all items provided in 'module.rules' configuration. A list of rules",
    },
    {
      name: "--module-strict-export-presence",
      description:
        "Emit errors instead of warnings when imported names don't exist in imported module. Deprecated: This option has moved to 'module.parser.javascript.strictExportPresence'",
      deprecated: true,
    },
    {
      name: "--no-module-strict-export-presence",
      description: "Negative 'module-strict-export-presence' option",
    },
    {
      name: "--module-strict-this-context-on-imports",
      description:
        "Handle the this context correctly according to the spec for namespace objects. Deprecated: This option has moved to 'module.parser.javascript.strictThisContextOnImports'",
      deprecated: true,
    },
    {
      name: "--no-module-strict-this-context-on-imports",
      description: "Negative 'module-strict-this-context-on-imports' option",
    },
    {
      name: "--module-unknown-context-critical",
      description:
        "Enable warnings when using the require function in a not statically analyse-able way. Deprecated: This option has moved to 'module.parser.javascript.unknownContextCritical'",
      deprecated: true,
    },
    {
      name: "--no-module-unknown-context-critical",
      description: "Negative 'module-unknown-context-critical' option",
    },
    {
      name: "--module-unknown-context-recursive",
      description:
        "Enable recursive directory lookup when using the require function in a not statically analyse-able way. Deprecated: This option has moved to 'module.parser.javascript.unknownContextRecursive'",
      deprecated: true,
    },
    {
      name: "--no-module-unknown-context-recursive",
      description: "Negative 'module-unknown-context-recursive' option",
    },
    {
      name: "--module-unknown-context-reg-exp",
      description:
        "Sets the regular expression when using the require function in a not statically analyse-able way. Deprecated: This option has moved to 'module.parser.javascript.unknownContextRegExp'",
      args: {
        name: "value",
        isOptional: true,
      },
      deprecated: true,
    },
    {
      name: "--no-module-unknown-context-reg-exp",
      description: "Negative 'module-unknown-context-reg-exp' option",
    },
    {
      name: "--module-unknown-context-request",
      description:
        "Sets the request when using the require function in a not statically analyse-able way. Deprecated: This option has moved to 'module.parser.javascript.unknownContextRequest'",
      args: {
        name: "value",
      },
      deprecated: true,
    },
    {
      name: "--module-unsafe-cache",
      description: "Cache the resolving of module requests",
    },
    {
      name: "--no-module-unsafe-cache",
      description: "Negative 'module-unsafe-cache' option",
    },
    {
      name: "--module-wrapped-context-critical",
      description:
        "Enable warnings for partial dynamic dependencies. Deprecated: This option has moved to 'module.parser.javascript.wrappedContextCritical'",
      deprecated: true,
    },
    {
      name: "--no-module-wrapped-context-critical",
      description: "Negative 'module-wrapped-context-critical' option",
    },
    {
      name: "--module-wrapped-context-recursive",
      description:
        "Enable recursive directory lookup for partial dynamic dependencies. Deprecated: This option has moved to 'module.parser.javascript.wrappedContextRecursive'",
      deprecated: true,
    },
    {
      name: "--no-module-wrapped-context-recursive",
      description: "Negative 'module-wrapped-context-recursive' option",
    },
    {
      name: "--module-wrapped-context-reg-exp",
      description:
        "Set the inner regular expression for partial dynamic dependencies. Deprecated: This option has moved to 'module.parser.javascript.wrappedContextRegExp'",
      args: {
        name: "value",
      },
      deprecated: true,
    },
    {
      name: "--name",
      description:
        "Name of the configuration. Used when loading multiple configurations",
      args: {
        name: "value",
      },
    },
    {
      name: "--no-node",
      description: "Negative 'node' option",
    },
    {
      name: "--node-dirname",
      description: "Include a polyfill for the '__dirname' variable",
      args: {
        name: "value",
        isOptional: true,
      },
    },
    {
      name: "--no-node-dirname",
      description: "Negative 'node-dirname' option",
    },
    {
      name: "--node-filename",
      description: "Include a polyfill for the '__filename' variable",
      args: {
        name: "value",
        isOptional: true,
        suggestions: ["warn-mock", "mock", "node-module", "eval-only"],
      },
    },
    {
      name: "--no-node-filename",
      description: "Negative 'node-filename' option",
    },
    {
      name: "--node-global",
      description: "Include a polyfill for the 'global' variable",
      args: {
        name: "value",
        isOptional: true,
      },
    },
    {
      name: "--no-node-global",
      description: "Negative 'node-global' option",
    },
    {
      name: "--optimization-avoid-entry-iife",
      description: "Avoid wrapping the entry module in an IIFE",
    },
    {
      name: "--no-optimization-avoid-entry-iife",
      description: "Negative 'optimization-avoid-entry-iife' option",
    },
    {
      name: "--optimization-check-wasm-types",
      description:
        "Check for incompatible wasm types when importing/exporting from/to ESM",
    },
    {
      name: "--no-optimization-check-wasm-types",
      description: "Negative 'optimization-check-wasm-types' option",
    },
    {
      name: "--optimization-chunk-ids",
      description:
        "Define the algorithm to choose chunk ids (named: readable ids for better debugging, deterministic: numeric hash ids for better long term caching, size: numeric ids focused on minimal initial download size, total-size: numeric ids focused on minimal total download size, false: no algorithm used, as custom one can be provided via plugin)",
      args: {
        name: "value",
      },
    },
    {
      name: "--no-optimization-chunk-ids",
      description: "Negative 'optimization-chunk-ids' option",
    },
    {
      name: "--optimization-concatenate-modules",
      description:
        "Concatenate modules when possible to generate less modules, more efficient code and enable more optimizations by the minimizer. An options object implies 'true'",
    },
    {
      name: "--no-optimization-concatenate-modules",
      description: "Negative 'optimization-concatenate-modules' option",
    },
    {
      name: "--optimization-concatenate-modules-commonjs",
      description:
        "Also concatenate CommonJS modules with statically analyzable exports. Defaults to 'true'",
    },
    {
      name: "--no-optimization-concatenate-modules-commonjs",
      description:
        "Negative 'optimization-concatenate-modules-commonjs' option",
    },
    {
      name: "--optimization-emit-on-errors",
      description:
        "Emit assets even when errors occur. Critical errors are emitted into the generated code and will cause errors at runtime",
    },
    {
      name: "--no-optimization-emit-on-errors",
      description: "Negative 'optimization-emit-on-errors' option",
    },
    {
      name: "--optimization-flag-included-chunks",
      description:
        "Also flag chunks as loaded which contain a subset of the modules",
    },
    {
      name: "--no-optimization-flag-included-chunks",
      description: "Negative 'optimization-flag-included-chunks' option",
    },
    {
      name: "--optimization-inline-exports",
      description:
        "Inline ESM exports that bind to small primitive constants (≤6-byte null/undefined/boolean/number/string). Inlining makes the import dependency inactive so DCE can drop the export and possibly the module",
    },
    {
      name: "--no-optimization-inline-exports",
      description: "Negative 'optimization-inline-exports' option",
    },
    {
      name: "--optimization-inner-graph",
      description:
        "Creates a module-internal dependency graph for top level symbols, exports and imports, to improve unused exports detection",
    },
    {
      name: "--no-optimization-inner-graph",
      description: "Negative 'optimization-inner-graph' option",
    },
    {
      name: "--optimization-mangle-exports",
      description:
        'Rename exports when possible to generate shorter code (depends on optimization.usedExports and optimization.providedExports, true/"deterministic": generate short deterministic names optimized for caching, "size": generate the shortest possible names)',
      args: {
        name: "value",
        isOptional: true,
      },
    },
    {
      name: "--no-optimization-mangle-exports",
      description: "Negative 'optimization-mangle-exports' option",
    },
    {
      name: "--optimization-mangle-wasm-imports",
      description: "Reduce size of WASM by changing imports to shorter strings",
    },
    {
      name: "--no-optimization-mangle-wasm-imports",
      description: "Negative 'optimization-mangle-wasm-imports' option",
    },
    {
      name: "--optimization-merge-duplicate-chunks",
      description: "Merge chunks which contain the same modules",
    },
    {
      name: "--no-optimization-merge-duplicate-chunks",
      description: "Negative 'optimization-merge-duplicate-chunks' option",
    },
    {
      name: "--optimization-minimize",
      description:
        "Enable minimizing the output. Uses optimization.minimizer. An options object implies 'true' and sets optimization.minimizeOptions",
    },
    {
      name: "--no-optimization-minimize",
      description: "Negative 'optimization-minimize' option",
    },
    {
      name: "--no-optimization-minimize-css",
      description: "Negative 'optimization-minimize-css' option",
    },
    {
      name: "--optimization-minimize-css-charset",
      description:
        'How the minimizer states a `.css` asset\'s encoding. `"auto"` (the default) opens it with `@charset "UTF-8"` only when its output holds a non-ASCII character, so it is read as UTF-8 wherever the server\'s `Content-Type` names no other charset, which `@charset` cannot override. `false` writes no `@charset` at all, and writes an escaped character past U+FFFF (an icon font\'s `content: "\\F0A86"`) as the character itself, as `"auto"` does once that `@charset` is written. Set `false` only where the asset is read as UTF-8 anyway: a stylesheet with no `@charset` is read in the encoding the server\'s `Content-Type` names, else in the encoding of the page linking it, so it holds wherever the server names UTF-8 or the page is UTF-8 — and anywhere else every such character reads as other characters',
      args: {
        name: "value",
      },
    },
    {
      name: "--no-optimization-minimize-css-charset",
      description: "Negative 'optimization-minimize-css-charset' option",
    },
    {
      name: "--optimization-minimize-css-color-fallbacks",
      description:
        "Write a color the `browserslist` target cannot read as an extra declaration before the one naming it, in a spelling it does read: `color: oklch(59.686% 0.15619 49.7694)` is written as `color: #c65d06` and then the `oklch()` itself, so an engine reading neither the Lab family nor `hwb()` is left with a color rather than with nothing. The fallback is that color clipped into the sRGB gamut and rounded, which the declaration standing after it corrects wherever it is read. Nothing is written where the author already set the property earlier in the same block, where the color holds a substitution or a relative reference this cannot fold, or where the fallback would still name a function the target cannot read. On by default, and only in effect for a `browserslist` target — any other target names no browsers to answer for",
    },
    {
      name: "--no-optimization-minimize-css-color-fallbacks",
      description:
        "Negative 'optimization-minimize-css-color-fallbacks' option",
    },
    {
      name: "--optimization-minimize-css-comments",
      description:
        'Which comments survive. `"some"`, the default, keeps a `/*!` banner and a comment annotated `@license` or `@preserve`; `true` (or `"all"`) keeps every comment and `false` keeps none; a string is read as a regular expression source, and it, a `RegExp` or a `(comment) => boolean` predicate is asked about each comment\'s own text and keeps the ones it accepts — standing in for the default rule rather than beside it, as terser\'s `format.comments` does, so a pattern that names nothing else drops the ones `"some"` would have kept. A `/*#` source-map pragma is a link rather than a comment, so `"some"` and `"all"` keep it; `false`, a pattern or a predicate decides it like any other. A predicate is handed to the minimizer\'s worker pool as source, so it must not close over anything',
      args: {
        name: "value",
        isOptional: true,
      },
    },
    {
      name: "--no-optimization-minimize-css-comments",
      description: "Negative 'optimization-minimize-css-comments' option",
    },
    {
      name: "--optimization-minimize-css-convert-approximate-colors",
      description:
        "Write a polar or Lab color as the nearest hex even where that hex only approximates it. `shortenColors` converts one only where webpack can prove an engine's own conversion lands on the same bytes, and keeps the function in the two places it cannot: a channel sitting too near a `.5` boundary for two implementations to round it alike (it is why esbuild and lightningcss emit different bytes for `hwb(194 0% 0%)`), and a color outside the sRGB gamut, which hex can only clip to a different color. Off by default, for those two reasons, and the two are not the same trade: on the boundary this writes the byte esbuild, lightningcss and cssnano write anyway, while outside the gamut it goes further than any of them — lightningcss keeps the function there and writes a fallback before it, which is what `colorFallbacks` does. A space engines read through transfers of their own (`a98-rgb`, `prophoto-rgb`) is left alone either way, the hex there naming a color no engine paints rather than a near one. This is about replacing the function: a fallback stands before it rather than in its place, so it already clips and rounds this way",
    },
    {
      name: "--no-optimization-minimize-css-convert-approximate-colors",
      description:
        "Negative 'optimization-minimize-css-convert-approximate-colors' option",
    },
    {
      name: "--optimization-minimize-css-convert-length-units",
      description:
        "Rewrite a length into a shorter unit it is exactly equal in (`16px` -> `1pc`). Off by default: the authored unit is lost, and once the asset is compressed the rewrite rarely earns anything",
    },
    {
      name: "--no-optimization-minimize-css-convert-length-units",
      description:
        "Negative 'optimization-minimize-css-convert-length-units' option",
    },
    {
      name: "--optimization-minimize-css-custom-media",
      description:
        "Resolve the `@custom-media` at-rule: write the query a name stands for wherever a condition asks for it, and drop the rule that named it. `@custom-media --wide (width>400px)` with `@media (--wide)` becomes `@media (width>400px)`. Off by default: `module.parser.css.customMedia` already resolves it in every stylesheet webpack parses, so this is for a `.css` asset that reached the minimizer without being parsed — one emitted by `asset/resource` or copied in. Every rule is read first, so a name resolves wherever its rule stands, the last rule stating it holds, and one name may be read through another; names that read each other in a cycle stand for nothing and are left as written",
    },
    {
      name: "--no-optimization-minimize-css-custom-media",
      description: "Negative 'optimization-minimize-css-custom-media' option",
    },
    {
      name: "--optimization-minimize-css-custom-selectors",
      description:
        "Resolve the `@custom-selector` at-rule: write the selector list a name stands for as `:is(…)` wherever a selector asks for it, and drop the rule that named it. `@custom-selector :--heading h1, h2` with `:--heading` becomes `:is(h1, h2)`. Off by default, for the reason `customMedia` is: `module.parser.css.customSelectors` already resolves it in every stylesheet webpack parses. Rules are read as `customMedia` reads them, and a name is written out only where the target reads `:is()`",
    },
    {
      name: "--no-optimization-minimize-css-custom-selectors",
      description:
        "Negative 'optimization-minimize-css-custom-selectors' option",
    },
    {
      name: "--optimization-minimize-css-drop-overridden-declarations",
      description:
        "Drop a declaration a later one in the same block overrides even where no target is selected, assuming the engines shipping today: wherever Chromium, Gecko and WebKit each read the later value. Off by default. With a `browserslist` target this is already done wherever every browser it names is known to read the later value, so the option only widens the case where no target is selected and there are no engines to name — which is what csso and cssnano do unconditionally. What it gives up is the fallback pair: `color:#c65d06;color:lab(50% 100 -100)` loses the hex, so an engine that cannot read `lab()` is left with nothing. A selection naming a browser the compat tables do not cover is still answered for the whole of it rather than by this option, since naming a browser states a target the option does not override",
    },
    {
      name: "--no-optimization-minimize-css-drop-overridden-declarations",
      description:
        "Negative 'optimization-minimize-css-drop-overridden-declarations' option",
    },
    {
      name: "--optimization-minimize-css-extract-comments",
      description:
        "Which comments a minimized asset gives up to its `[file].LICENSE.txt`",
      args: {
        name: "value",
        isOptional: true,
      },
    },
    {
      name: "--no-optimization-minimize-css-extract-comments",
      description:
        "Negative 'optimization-minimize-css-extract-comments' option",
    },
    {
      name: "--optimization-minimize-css-fold-case",
      description:
        "Write a name that matches ASCII case-insensitively in lowercase: an at-rule name, a property name, a pseudo-class or pseudo-element name, a function name, a unit, and a keyword standing in a value whose grammar takes keywords alone. `@MEDIA`, `COLOR`, `:NTH-CHILD`, `URL(`, `1PX` and `currentColor` become `@media`, `color`, `:nth-child`, `url(`, `1px` and `currentcolor`. On by default, and exact: CSS matches every one of these ASCII case-insensitively, so the fold names the same thing. What it never touches is a name the author chose — a custom property, a custom ident such as an animation or grid-area name, an id, a class, a type selector, an attribute's value, or anything inside a substituted value. `@charset` is left as written, being read as bytes rather than matched, and `!important` is always written in lowercase because the printer writes the keyword rather than copying it",
    },
    {
      name: "--no-optimization-minimize-css-fold-case",
      description: "Negative 'optimization-minimize-css-fold-case' option",
    },
    {
      name: "--optimization-minimize-css-lower-unsupported",
      description:
        "Write a spelling the `browserslist` target cannot read as one it can — the same value said another way, rather than left for an engine that will drop it: a 4-/8-digit hex as `rgba()`, a double-position gradient stop as the two stops it names, `inset` / `overflow` / `place-*` as the longhands they set, `text-decoration` as its own longhands where a slot is newer than the shorthand, `system-ui` as the stack of platform font names it stands for, a `:lang()` or `:not()` holding a list as the `:is()` that means it, a media feature range as the `min-`/`max-` pair, and `light-dark()` as the custom-property pair a color scheme switches. On by default, and only in effect for a `browserslist` target — any other target names no browsers to answer for. Off leaves every such spelling as written, which is how a stylesheet one of these rewrites gets wrong is minified; it never makes the minifier write a spelling the target cannot read",
    },
    {
      name: "--no-optimization-minimize-css-lower-unsupported",
      description:
        "Negative 'optimization-minimize-css-lower-unsupported' option",
    },
    {
      name: "--optimization-minimize-css-merge-distant-rules",
      description:
        "Give a rule the selectors of a later one printing the same block, and an at-rule the block of a later one stating the same condition, past the rules standing between them. Off by default because it reorders the cascade, so it holds only where nothing between the two declares a property the block being moved does for an element its selectors can match (a rule whose selectors all name other element types, `h3` between two rules for `h1` and `h2`, never can) — a condition between counts for what its own rules declare, while `@layer` and anything else whose declarations cannot be read stands in the way whatever it says. A block repeated at a distance already compresses on its own, so a selector join is taken only where the copy of the block it drops is worth more than twice the selector it writes instead; an at-rule join writes no selector and drops the repeated prelude outright. A named `@layer` is not joined this way — its place in the cascade is where its name is first written, not what its prelude states. `mergeRules` is the safe half of this, joining only what nothing stands between",
    },
    {
      name: "--no-optimization-minimize-css-merge-distant-rules",
      description:
        "Negative 'optimization-minimize-css-merge-distant-rules' option",
    },
    {
      name: "--optimization-minimize-css-merge-longhands",
      description:
        "Write a family of longhands as the one shorthand that sets them — four sides or corners, the two a pair shorthand sets, or the slots of an order-free one — even where unrelated declarations stand between them. On by default",
    },
    {
      name: "--no-optimization-minimize-css-merge-longhands",
      description:
        "Negative 'optimization-minimize-css-merge-longhands' option",
    },
    {
      name: "--optimization-minimize-css-merge-rules",
      description:
        "Join rules nothing stands between: adjacent rules that print the same block become one selector list, at-rules that share a prelude become one rule, and a named `@layer` block a later sibling opens again is folded into the first. On by default",
    },
    {
      name: "--no-optimization-minimize-css-merge-rules",
      description: "Negative 'optimization-minimize-css-merge-rules' option",
    },
    {
      name: "--optimization-minimize-css-normalize-quotes",
      description:
        "Normalize quoting: a string takes whichever quote needs fewer escapes, a `url()` and an attribute selector's value drop theirs where the content is still one token, and a font family whose name is a run of identifiers is written unquoted. On by default",
    },
    {
      name: "--no-optimization-minimize-css-normalize-quotes",
      description:
        "Negative 'optimization-minimize-css-normalize-quotes' option",
    },
    {
      name: "--optimization-minimize-css-reduce-functions",
      description:
        "Compute a call into the shorter call naming the same value: `calc()` and every math function over constants, a transform naming one axis or an identity, a gradient's default direction and its implied stops, an easing function that has a keyword, and a filter function given the amount an omitted argument already means. On by default",
    },
    {
      name: "--no-optimization-minimize-css-reduce-functions",
      description:
        "Negative 'optimization-minimize-css-reduce-functions' option",
    },
    {
      name: "--optimization-minimize-css-remove-dead-rules",
      description:
        "Drop a rule or declaration nothing can read: a rule whose block ends up empty, a declaration a later one in the same block overrides, a rule an identical later sibling makes dead, and the `@charset` naming an encoding the output is not written in. On by default. Joining rules that are not dead is `mergeRules`",
    },
    {
      name: "--no-optimization-minimize-css-remove-dead-rules",
      description:
        "Negative 'optimization-minimize-css-remove-dead-rules' option",
    },
    {
      name: "--optimization-minimize-css-reorder-declarations",
      description:
        "Print a style rule's declarations in one order by property family, the properties no family names first where they were written, so blocks setting the same things read alike and compress smaller. Only declarations whose order nothing can see move: two spellings of one property, a shorthand and what it sets, two shorthands sharing a longhand, and a flow-relative side and a physical one keep theirs, and a block holding a property no dataset names or a nested rule is printed as written. On by default",
    },
    {
      name: "--no-optimization-minimize-css-reorder-declarations",
      description:
        "Negative 'optimization-minimize-css-reorder-declarations' option",
    },
    {
      name: "--optimization-minimize-css-rewrite-custom-properties",
      description:
        "Shorten the values of custom properties (`--x: #ffffff` -> `#fff`, `--y: 0.5rem` -> `.5rem`), which are otherwise written back exactly as authored. Off by default: `getComputedStyle().getPropertyValue()` hands this text back, so a rewritten value is a different CSSOM — the one place a declaration's authored text survives. What it may rewrite is exactly what any other value's tokens may be, a color in a substitution's fallback included — that fallback being the property's value rather than the function's own argument",
    },
    {
      name: "--no-optimization-minimize-css-rewrite-custom-properties",
      description:
        "Negative 'optimization-minimize-css-rewrite-custom-properties' option",
    },
    {
      name: "--optimization-minimize-css-rewrite-dir-selector",
      description:
        'Write a `:dir()` the `browserslist` target cannot read as the `[dir]` attribute selector it approximates: `a:dir(rtl)` becomes `a[dir=rtl]`. Off until asked for, because the two are not the same question — `:dir()` reads the directionality an element resolves to, which it may inherit from an ancestor, while `[dir=rtl]` reads the attribute on the element itself, so an element inside a `dir="rtl"` ancestor matches the first and not the second. Only in effect for a `browserslist` target that reads no `:dir()`; any other target names no browsers to answer for',
    },
    {
      name: "--no-optimization-minimize-css-rewrite-dir-selector",
      description:
        "Negative 'optimization-minimize-css-rewrite-dir-selector' option",
    },
    {
      name: "--optimization-minimize-css-rewrite-escapes",
      description:
        "Write an escaped identifier the shortest way that names the same thing, wherever it stands — a selector, a property, at-rule or function name, or a value: `grid-area:\\66oot` becomes `grid-area:foot`, `#\\41 x` becomes `#Ax`, `col\\6f r:red` becomes `color:red` and `c\\61 lc(` becomes `calc(`. On by default, and exact: the escape and what replaces it are the same identifier. Off leaves every escape as the author wrote it, which is what a consumer comparing the text rather than reading the identifier needs",
    },
    {
      name: "--no-optimization-minimize-css-rewrite-escapes",
      description:
        "Negative 'optimization-minimize-css-rewrite-escapes' option",
    },
    {
      name: "--optimization-minimize-css-shorten-colors",
      description:
        "Write each color in the shortest spelling of the same value: `#ffffff` -> `#fff`, `rgb(1 2 3)` -> `#010203`, a named color where the property takes no identifier of the author's own, and every polar and Lab function the target agrees with hex on. On by default",
    },
    {
      name: "--no-optimization-minimize-css-shorten-colors",
      description: "Negative 'optimization-minimize-css-shorten-colors' option",
    },
    {
      name: "--optimization-minimize-css-shorten-media-queries",
      description:
        "Shorten a rule's condition prelude: a media feature in its range spelling where the target reads one (`(min-width:100px)` -> `(width>=100px)`), an `and` of two one-sided ranges collapsed into the interval it describes, the `all` a query states before an `and` (which matches what the condition alone matches), and an operand a condition already states — in `@supports` and `@container` as well as `@media`. On by default",
    },
    {
      name: "--no-optimization-minimize-css-shorten-media-queries",
      description:
        "Negative 'optimization-minimize-css-shorten-media-queries' option",
    },
    {
      name: "--optimization-minimize-css-shorten-numbers",
      description:
        "Write each number in its shortest equal spelling — dropping a leading zero, a trailing fraction and a `+`, rounding to the six significant digits a stylesheet can observe, dropping the unit a zero does not need, and writing an alpha and a ratio the one way its grammar spells them. On by default",
    },
    {
      name: "--no-optimization-minimize-css-shorten-numbers",
      description:
        "Negative 'optimization-minimize-css-shorten-numbers' option",
    },
    {
      name: "--optimization-minimize-css-shorten-selectors",
      description:
        "Rewrite a selector into an equal one: a selector list deduplicated and ordered, a CSS2 pseudo-element's second colon dropped, the universal a compound already implies dropped, an `An+B` written the shortest way its microsyntax allows, and a `from` / `100%` keyframe selector written as the shorter of the pair. On by default",
    },
    {
      name: "--no-optimization-minimize-css-shorten-selectors",
      description:
        "Negative 'optimization-minimize-css-shorten-selectors' option",
    },
    {
      name: "--optimization-minimize-css-shorten-values",
      description:
        "Write a value the shortest way its property's own grammar allows: a `{1,4}` box or corner notation collapsed, a slot holding its own initial dropped, and `flex` / `font-weight` / `display` / `transition` / `<position>` / `<repeat-style>` written the short way. On by default. Merging separate longhand declarations is `mergeLonghands`",
    },
    {
      name: "--no-optimization-minimize-css-shorten-values",
      description: "Negative 'optimization-minimize-css-shorten-values' option",
    },
    {
      name: "--optimization-minimize-css-unused-symbols",
      description:
        "A class, id, `@keyframes` or custom property name nothing uses",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--optimization-minimize-css-unused-symbols-reset",
      description:
        "Clear all items provided in 'optimization.minimize.css.unusedSymbols' configuration. Names a whole-project analysis found nothing uses, which the minimizer then takes out: a bare name is matched against every class and id a selector names and against every `@keyframes` name, and a `--`-prefixed one against every custom property a declaration sets. A selector list keeps the selectors that do not name one, and a rule left with none goes; a name inside a functional pseudo (`:not(.gone)`, `:is(.gone, .kept)`) is not one the rule needs, so it is left alone. Nothing is derived here — the list is the caller's, and a name on it that something does use takes working CSS out",
    },
    {
      name: "--optimization-minimize-css-vendor-prefixes",
      description:
        "Maintain vendor prefixes for the `browserslist` target: add the `-webkit-` / `-moz-` / `-ms-` spelling of a property, at-rule or pseudo-selector that a selected browser still needs, and drop one none of them does. On by default, and only in effect for a `browserslist` target — any other target names no browsers to prefix for. A browserslist name no compat dataset covers (`op_mini`, `and_uc`, `and_qq`, `baidu`, `kaios`, `bb`) is skipped, and a selection of nothing but those prefixes for no one",
    },
    {
      name: "--no-optimization-minimize-css-vendor-prefixes",
      description:
        "Negative 'optimization-minimize-css-vendor-prefixes' option",
    },
    {
      name: "--no-optimization-minimize-html",
      description: "Negative 'optimization-minimize-html' option",
    },
    {
      name: "--optimization-minimize-html-collapse-boolean-attributes",
      description:
        'Write a boolean attribute as the bare name its presence already means. The DOM reads `checked` from the attribute being there and never from its value, so `checked="checked"` and `checked=""` are the same element — but `getAttribute` hands back what was written. `true`, the default, rewrites only the spelling the spec itself canonicalizes, the attribute\'s own name; `"all"` rewrites any value, including the `checked="false"` that already means checked',
      args: {
        name: "value",
        isOptional: true,
      },
    },
    {
      name: "--no-optimization-minimize-html-collapse-boolean-attributes",
      description:
        "Negative 'optimization-minimize-html-collapse-boolean-attributes' option",
    },
    {
      name: "--optimization-minimize-html-collapse-whitespace",
      description:
        'Collapse each run of whitespace in text to a single space. Left alone inside `pre`, `textarea` and `listing`, where whitespace renders verbatim. `true` (or `"conservative"`) never removes whitespace entirely — dropping it would join two inline elements that render apart. `"smart"` also drops the whitespace that sits against a block element\'s edge, where no line box reaches it. `"all"` drops the whitespace at every text node\'s edges, which does change how adjacent inline elements render',
      args: {
        name: "value",
        isOptional: true,
      },
    },
    {
      name: "--no-optimization-minimize-html-collapse-whitespace",
      description:
        "Negative 'optimization-minimize-html-collapse-whitespace' option",
    },
    {
      name: "--optimization-minimize-html-comments",
      description:
        'Which comments survive. `"some"`, the default, keeps nothing: every comment an HTML parser reads is inert; `true` (or `"all"`) keeps every comment and `false` keeps none; a string is read as a regular expression source, and it, a `RegExp` or a `(comment) => boolean` predicate is asked about each comment\'s own text and keeps the ones it accepts — standing in for the default rule rather than beside it, as terser\'s `format.comments` does, so a pattern that names nothing else drops the ones `"some"` would have kept. A downlevel conditional comment, a server-side include and a `<?…?>` template directive are code rather than comments and stay whatever this says. A predicate is handed to the minimizer\'s worker pool as source, so it must not close over anything',
      args: {
        name: "value",
        isOptional: true,
      },
    },
    {
      name: "--no-optimization-minimize-html-comments",
      description: "Negative 'optimization-minimize-html-comments' option",
    },
    {
      name: "--optimization-minimize-html-extract-comments",
      description:
        "Which comments a minimized asset gives up to its `[file].LICENSE.txt`",
      args: {
        name: "value",
        isOptional: true,
      },
    },
    {
      name: "--no-optimization-minimize-html-extract-comments",
      description:
        "Negative 'optimization-minimize-html-extract-comments' option",
    },
    {
      name: "--optimization-minimize-html-merge-scripts",
      description:
        'Print a run of adjacent `<script>` elements as one, joined by a newline and a `;`. Only bare ones fold — any attribute at all, a `src`, `type`, `nonce`, `async` or `id` among them, says the two are not interchangeable with one — and only where the print writes the bodies itself, so a `<script>` that `output.html.inline` fills in after the print is left alone. A body is left alone too wherever appending it would change what it means: one still inside a string, template or block comment would swallow the next, and a directive prologue, a hashbang or a leading `-->` mean what they do only at a start the appended body no longer has. Off by default: it removes elements, so `document.scripts`, a `script:nth-child()` selector and `querySelectorAll("script").length` all read a different document; a later body\'s `var` and `function` declarations become visible to the bodies before it; and a body that throws takes the rest of its run with it rather than only itself, while one that does not parse takes the whole run, its own code included',
    },
    {
      name: "--no-optimization-minimize-html-merge-scripts",
      description: "Negative 'optimization-minimize-html-merge-scripts' option",
    },
    {
      name: "--optimization-minimize-html-merge-styles",
      description:
        'Print a run of adjacent `<style>` elements as one sheet. Off by default: it removes elements, so `document.styleSheets`, a `style:nth-child()` selector and `querySelectorAll("style").length` all read a different document. A sheet the CSS minifier does not accept is never folded — appending to one that may be unterminated would make the next sheet part of its last rule — and neither is one led by `@import` / `@charset` / `@namespace`, which apply only at the top of a sheet',
    },
    {
      name: "--no-optimization-minimize-html-merge-styles",
      description: "Negative 'optimization-minimize-html-merge-styles' option",
    },
    {
      name: "--optimization-minimize-html-minify-conditional-comments",
      description:
        "Minify the markup inside a downlevel-hidden conditional comment (`<!--[if IE]> … <![endif]-->`). Off by default. The body is minified on its own with every tag it spells kept, and one whose print would still add, drop or move a tag — a wrapper another comment closes, a row of the table it sits in — is left as written, as it is read where the comment sits rather than as a document. Only browsers older than IE10 read these at all",
    },
    {
      name: "--no-optimization-minimize-html-minify-conditional-comments",
      description:
        "Negative 'optimization-minimize-html-minify-conditional-comments' option",
    },
    {
      name: "--optimization-minimize-html-normalize-attribute-quotes",
      description:
        "Write an attribute value with whichever delimiters cost least — bare where the grammar allows it, else under the quote that needs fewer character references. On by default: the DOM reads the same value either way",
    },
    {
      name: "--no-optimization-minimize-html-normalize-attribute-quotes",
      description:
        "Negative 'optimization-minimize-html-normalize-attribute-quotes' option",
    },
    {
      name: "--optimization-minimize-html-normalize-enumerated-attributes",
      description:
        'Fold an enumerated attribute\'s value to the keyword it names (`type="TEXT"` -> `type=text`), which the DOM matches ASCII case-insensitively. A value the spec does not enumerate is left as written. On by default',
    },
    {
      name: "--no-optimization-minimize-html-normalize-enumerated-attributes",
      description:
        "Negative 'optimization-minimize-html-normalize-enumerated-attributes' option",
    },
    {
      name: "--optimization-minimize-html-normalize-list-attributes",
      description:
        "Normalize a list-shaped attribute value: a space-separated token list (`class`, `rel`, `part`, …), a comma-separated one (`accept`, `sizes`, …), a `srcset` and the viewport `<meta content>`. On by default. A list is read as the set the DOM reflects, so a repeat folds away, only where every token of it is a word: one holding a delimiter another language wrote a statement in is text, and keeps every token it names. Reordering a token list is `sortTokenLists`, which is separate and off by default",
    },
    {
      name: "--no-optimization-minimize-html-normalize-list-attributes",
      description:
        "Negative 'optimization-minimize-html-normalize-list-attributes' option",
    },
    {
      name: "--optimization-minimize-html-normalize-numeric-attributes",
      description:
        "Write an integer attribute (`tabindex`, `colspan`, `width`, …) the one way its own rules read it — leading whitespace, a `+` and leading zeros all go. On by default",
    },
    {
      name: "--no-optimization-minimize-html-normalize-numeric-attributes",
      description:
        "Negative 'optimization-minimize-html-normalize-numeric-attributes' option",
    },
    {
      name: "--optimization-minimize-html-normalize-url-attributes",
      description:
        "Drop the ASCII whitespace around a URL value (`href`, `src`, `action`, `poster`, …), which resolving the URL skips over, so the request goes to the same place either way. On by default: `getAttribute` hands back the attribute as written, so a script comparing those bytes is the one this is turned off for",
    },
    {
      name: "--no-optimization-minimize-html-normalize-url-attributes",
      description:
        "Negative 'optimization-minimize-html-normalize-url-attributes' option",
    },
    {
      name: "--optimization-minimize-html-remove-empty-attributes",
      description:
        'Drop an attribute whose empty or all-whitespace value leaves it in the state its absence gives: the globals `class`, `id`, `style`, `dir`, `accesskey`, `itemprop`, `itemref`, `itemtype` and `part`, and every attribute reflecting a token list on the elements the spec defines it for — `rel` on `<a>`, `<area>`, `<form>` and `<link>`, `ping` on `<a>` and `<area>`, `headers` on `<td>` and `<th>`, `blocking` on `<link>`, `<script>` and `<style>`, `sizes` on `<link>`, `for` on `<output>` — where an empty list is no tokens. Anywhere else that spelling is an author attribute whose meaning is a script\'s, so `<x-foo rel="">` and `<label for="">` keep it. Off by default: an attribute selector matches on presence, so `[class]` stops matching. Never dropped: `title` and `lang`, whose empty value means what absence does not; `sandbox`, whose empty list is the most restrictive state an `<iframe>` has; and an event handler, whose empty body still compiles to a function where absence reads null',
    },
    {
      name: "--no-optimization-minimize-html-remove-empty-attributes",
      description:
        "Negative 'optimization-minimize-html-remove-empty-attributes' option",
    },
    {
      name: "--optimization-minimize-html-remove-empty-elements",
      description:
        "Drop an element that has no children and no attributes, where its bare form renders nothing and nothing reads it: a generic container such as `div`, `span` or `section`, an inline phrase element, an empty `title`, `script` or `style`, or an attribute-less `meta`, `link` or `base`. Every other element is kept, including widgets, list items, elements with margins and custom elements. Off by default: CSS can give an empty element a size or a `::before`, and the minifier cannot see the stylesheet. Emptiness is read off the output rather than the source, so a run of nested empties goes together and an element left empty only by a dropped comment or by whitespace `collapseWhitespace` deletes goes with them",
    },
    {
      name: "--no-optimization-minimize-html-remove-empty-elements",
      description:
        "Negative 'optimization-minimize-html-remove-empty-elements' option",
    },
    {
      name: "--optimization-minimize-html-remove-implied-tags",
      description:
        'How much of the `<html>` / `<head>` / `<body>` shell §13.1.2.4 lets the parser imply may be left out. Every other optional tag goes unconditionally — nothing can observe that — but these six are what a consumer reading the page with a regexp rather than a parser looks for. `"smart"`, the default, leaves out the one such a reader never matches: the `<html>` start tag, which is omittable only when it carries no attribute at all, so the `<html lang=en>` anyone greps for keeps its tag anyway. `</html>` stays with it, since a truncation check reads a page as complete by finding one. `true` (or `"all"`) leaves out all six, which is where a crawler matching on `<body>` stops finding one; `false` leaves out none. A tag also stays wherever the spec keeps it: an attribute to carry, a comment minifying does not drop, whitespace opening the element, or a `meta` / `noscript` / `link` / `script` / `style` / `template` element opening the body',
      args: {
        name: "value",
        isOptional: true,
      },
    },
    {
      name: "--no-optimization-minimize-html-remove-implied-tags",
      description:
        "Negative 'optimization-minimize-html-remove-implied-tags' option",
    },
    {
      name: "--optimization-minimize-html-remove-optional-tags",
      description:
        "Leave out a tag §13.1.2.4 lets the parser imply, other than the `<html>` / `<head>` / `<body>` shell, which `removeImpliedTags` decides on its own. On by default: nothing can observe the difference, the tree parses the same either way. A tag still stays wherever the spec keeps it — a comment or whitespace behind it, or a following element the insertion mode does not close it through",
    },
    {
      name: "--no-optimization-minimize-html-remove-optional-tags",
      description:
        "Negative 'optimization-minimize-html-remove-optional-tags' option",
    },
    {
      name: "--optimization-minimize-html-remove-redundant-attributes",
      description:
        'Drop an attribute whose value is the one the element already defaults to. Off by default: an attribute a page no longer carries is one `getAttribute` and every attribute selector read differently, whichever tier dropped it. `true` (or `"smart"`) drops only markers on elements that render nothing — `<script type=text/javascript>`, `<script language=javascript>`, `<script charset=utf-8>` on a page that declares UTF-8, `<style type=text/css>`, `<link type=text/css>`, `<link media=all>` — so no rule that styles the page stops applying, which is what `@swc/html` does by default. `"all"` also drops spec defaults such as `<input type=text>` and `<form method=get>`, which reaches further still: an attribute selector matches the content attribute, not the reflected default, so `input[type=text]` stops matching',
      args: {
        name: "value",
        isOptional: true,
      },
    },
    {
      name: "--no-optimization-minimize-html-remove-redundant-attributes",
      description:
        "Negative 'optimization-minimize-html-remove-redundant-attributes' option",
    },
    {
      name: "--optimization-minimize-html-sort-attributes",
      description:
        "Print an element's attributes in a fixed order: the document's commonest attribute names first, ties by name. Nothing in HTML reads attribute order, so this only makes the same markup compress better across pages — the run of attributes two elements share becomes the same run of bytes. Off by default: a script reading `element.attributes` back, or a snapshot of the emitted HTML, sees the new order",
    },
    {
      name: "--no-optimization-minimize-html-sort-attributes",
      description:
        "Negative 'optimization-minimize-html-sort-attributes' option",
    },
    {
      name: "--optimization-minimize-html-sort-token-lists",
      description:
        "Print every space-separated token list the DOM reads as a set — `class`, `rel`, `part`, `sandbox`, `blocking`, `itemprop` / `itemref` / `itemtype`, `<output for>` and `<link sizes>` — in token order. Nothing matching those reads order, so this only makes the same markup compress better across pages. Off by default: a script reading `className` or `rel` back sees the new order. Asked for on its own: a list this reorders is rewritten whether or not `normalizeListAttributes` is on, since another order is another spelling. The lists the DOM does not read as a set are left alone whatever this says — `ping` is the order its requests go out in and `accesskey` the order its keys are tried",
    },
    {
      name: "--no-optimization-minimize-html-sort-token-lists",
      description:
        "Negative 'optimization-minimize-html-sort-token-lists' option",
    },
    {
      name: "--no-optimization-minimize-javascript",
      description: "Negative 'optimization-minimize-javascript' option",
    },
    {
      name: "--optimization-minimize-json",
      description:
        "Minimize JSON assets by re-serializing them without whitespace (defaults to `true` with `experiments.futureDefaults`, otherwise `false`)",
    },
    {
      name: "--no-optimization-minimize-json",
      description: "Negative 'optimization-minimize-json' option",
    },
    {
      name: "--no-optimization-minimize-xml",
      description: "Negative 'optimization-minimize-xml' option",
    },
    {
      name: "--optimization-minimize-xml-angle-precision",
      description:
        "With `convertTransforms`, round the angle each SVG transform turns by to this many decimal places, a whole number from 0 to 15, as svgo's `degPrecision` does, and recompose what remains within `precision`. Off by default because the drawing turns by what the rounding drops",
      args: {
        name: "value",
      },
    },
    {
      name: "--optimization-minimize-xml-apply-transforms",
      description:
        "Bake each SVG path's `transform` into its path data, rounded to `precision` decimals (3 when unset), scaling a stroke the transform scales. Off by default because rounding moves points; skip paths with IDs, styles, markers, clip paths, masks, filters or `url()` paints, arcs under a skew, and documents with stylesheets, scripts or animations",
    },
    {
      name: "--no-optimization-minimize-xml-apply-transforms",
      description:
        "Negative 'optimization-minimize-xml-apply-transforms' option",
    },
    {
      name: "--optimization-minimize-xml-cleanup-ids",
      description:
        "Remove SVG IDs nothing in the document references and rename the rest to the shortest names, rewriting `href`, `url()` and ID-list references. Off by default because a reference from outside the document, such as a sprite's `file.svg#icon` or a page's `getElementById`, stops resolving; skip stylesheets, scripts, animations, duplicate IDs, `xml:id` and DTDs",
    },
    {
      name: "--no-optimization-minimize-xml-cleanup-ids",
      description: "Negative 'optimization-minimize-xml-cleanup-ids' option",
    },
    {
      name: "--optimization-minimize-xml-cleanup-structure",
      description:
        "Collapse SVG groups, hoist identical context-free inherited attributes or move them to sole graphics children, inline validated presentation declarations and remove empty text, unnamed definitions and exact redundant attributes. Off by default because consumers can observe structure and attribute presence; preserve IDs and skip stylesheets, scripts, animations and DTDs",
    },
    {
      name: "--no-optimization-minimize-xml-cleanup-structure",
      description:
        "Negative 'optimization-minimize-xml-cleanup-structure' option",
    },
    {
      name: "--optimization-minimize-xml-collapse-attribute-whitespace",
      description:
        "Trim every SVG attribute value and collapse each run of whitespace in it to one space, as svgo's `cleanupAttrs` does, `xmlns` included. Off by default because a value whose spaces mean something, such as a `data-` attribute or a namespace name, changes",
    },
    {
      name: "--no-optimization-minimize-xml-collapse-attribute-whitespace",
      description:
        "Negative 'optimization-minimize-xml-collapse-attribute-whitespace' option",
    },
    {
      name: "--optimization-minimize-xml-collapse-whitespace",
      description:
        "Remove whitespace-only text in known SVG containers, under `xml:space` too since that lays out text alone, preserving text content and foreign content, and kept where a stylesheet reads `:empty` or is unread. On by default, since that text renders nothing; `false` keeps it for scripts, and for the stylesheets of a page that inlines the SVG, which read whitespace nodes",
    },
    {
      name: "--no-optimization-minimize-xml-collapse-whitespace",
      description:
        "Negative 'optimization-minimize-xml-collapse-whitespace' option",
    },
    {
      name: "--optimization-minimize-xml-comments",
      description:
        'Which comments survive. `"some"`, the default, keeps an XML legal notice: a comment opening with `!` or annotated `@license` or `@preserve`; `true` (or `"all"`) keeps every comment and `false` keeps none; a string is read as a regular expression source, and it, a `RegExp` or a `(comment) => boolean` predicate is asked about each comment\'s own text and keeps the ones it accepts, standing in for the default rule rather than beside it. A `<?…?>` processing instruction is no comment and stays whatever this says. A predicate is handed to the minimizer\'s worker pool as source, so it must not close over anything',
      args: {
        name: "value",
        isOptional: true,
      },
    },
    {
      name: "--no-optimization-minimize-xml-comments",
      description: "Negative 'optimization-minimize-xml-comments' option",
    },
    {
      name: "--optimization-minimize-xml-convert-curves-to-arcs",
      description:
        "With `shortenPathData`, write SVG path cubic curves that stay within `precision` decimals (3 when unset) of one circle as arcs of it, joining neighbors on the same circle, other cubics as quadratics within that error, and nearly flat circular arcs as lines. `\"loose\"` fits as svgo's `makeArcs` does instead: at a curve's quarter points, against its unrounded ends, writing the rounded radius unchecked, so arcs can stray past the precision. Off by default because the arc is a true circle, not the curve; skip documents with markers, stylesheets, scripts or animations",
      args: {
        name: "value",
        isOptional: true,
      },
    },
    {
      name: "--no-optimization-minimize-xml-convert-curves-to-arcs",
      description:
        "Negative 'optimization-minimize-xml-convert-curves-to-arcs' option",
    },
    {
      name: "--optimization-minimize-xml-convert-shapes",
      description:
        "Convert leaf SVG lines, polylines and polygons to shorter paths with identical coordinates and vertices, and equal-radius ellipses to circles. Off by default because consumers can observe element types; skip documents with stylesheets, scripts, animations or DTDs",
    },
    {
      name: "--no-optimization-minimize-xml-convert-shapes",
      description: "Negative 'optimization-minimize-xml-convert-shapes' option",
    },
    {
      name: "--optimization-minimize-xml-convert-transforms",
      description:
        "With `shortenNumbers`, recompose each SVG transform list as the shortest list whose matrix matches it within `precision` decimals (3 when unset), such as a `matrix()` becoming `rotate(-45 261.757 -252.243)`. Off by default because the result is rounded, not exact",
    },
    {
      name: "--no-optimization-minimize-xml-convert-transforms",
      description:
        "Negative 'optimization-minimize-xml-convert-transforms' option",
    },
    {
      name: "--optimization-minimize-xml-inline-style-pseudo-classes",
      description: "A pseudo-class, with or without its colon",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--optimization-minimize-xml-inline-style-pseudo-classes-reset",
      description:
        "Clear all items provided in 'optimization.minimize.xml.inlineStylePseudoClasses' configuration. With `inlineStyles`, inline rules whose selectors use these pseudo-classes, such as `:hover`, as if they always held, as svgo's `usePseudos` does. Off by default because a style meant for a state then always applies",
    },
    {
      name: "--optimization-minimize-xml-inline-styles",
      description:
        "Move the rules of SVG stylesheets into the style attributes of the elements they match, in cascade order before each element's own, then drop the stylesheets and the classes they named, where every selector uses types, classes, IDs, attributes, tree-structural pseudo-classes or `:not()` and the result is no larger. Off by default because scripts and external CSS can observe classes and stylesheets",
    },
    {
      name: "--no-optimization-minimize-xml-inline-styles",
      description: "Negative 'optimization-minimize-xml-inline-styles' option",
    },
    {
      name: "--optimization-minimize-xml-merge-disjoint-paths",
      description:
        "Merge adjacent SVG paths of any shape with the same attributes whose bounds, stroke included, do not overlap, outside IDs, styles, markers, dashes, clips, masks, filters and `url()` paint. Off by default because anti-aliasing can blend a pixel both paths reach differently once merged",
    },
    {
      name: "--no-optimization-minimize-xml-merge-disjoint-paths",
      description:
        "Negative 'optimization-minimize-xml-merge-disjoint-paths' option",
    },
    {
      name: "--optimization-minimize-xml-merge-paths",
      description:
        "Merge adjacent disjoint axis-aligned SVG lines with explicit opaque crisp-edge strokes, no fill, dashes or markers. Skip compositing, transformed or ID-bearing ancestors; identical paint remains eligible during color cleanup. Off by default because consumers can observe element boundaries; skip stylesheets, scripts, animations and DTDs",
    },
    {
      name: "--no-optimization-minimize-xml-merge-paths",
      description: "Negative 'optimization-minimize-xml-merge-paths' option",
    },
    {
      name: "--optimization-minimize-xml-precision",
      description:
        "Round SVG geometry, path data, transforms and presentation numbers to this many decimal places, a whole number from 0 to 15, wherever `shortenNumbers` and `shortenPathData` shorten them. Path points round where they land, so error never accumulates, and curves and arcs that draw straight lines become lines. Off by default because rounding moves geometry; svgo rounds to 3",
      args: {
        name: "value",
      },
    },
    {
      name: "--optimization-minimize-xml-remove-attributes",
      description:
        "An `element:attribute:value` pattern of attributes to remove",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--optimization-minimize-xml-remove-attributes-reset",
      description:
        "Clear all items provided in 'optimization.minimize.xml.removeAttributes' configuration. Remove attributes matching `element:attribute:value` patterns, each part a case-insensitive regular expression matched whole, `*` matching anything; a missing element or value part matches any. Off by default because only the author knows which attributes the image can lose",
    },
    {
      name: "--optimization-minimize-xml-remove-deprecated-attributes",
      description:
        "Write an SVG element's `xml:lang` as `lang` in place of a `lang` it overrides; `\"unsafe\"` drops `xml:lang` instead, as svgo's `removeUnsafe` does, losing the language it names. Off by default because SVG 1.1 readers know only `xml:lang`",
      args: {
        name: "value",
        isOptional: true,
      },
    },
    {
      name: "--no-optimization-minimize-xml-remove-deprecated-attributes",
      description:
        "Negative 'optimization-minimize-xml-remove-deprecated-attributes' option",
    },
    {
      name: "--optimization-minimize-xml-remove-descriptions",
      description:
        "Remove SVG `desc` elements. Off by default because they describe the image for assistive technology",
    },
    {
      name: "--no-optimization-minimize-xml-remove-descriptions",
      description:
        "Negative 'optimization-minimize-xml-remove-descriptions' option",
    },
    {
      name: "--optimization-minimize-xml-remove-dimensions",
      description:
        "Remove the root SVG element's `width` and `height`, moving plain ones into a missing `viewBox`, so the image scales to whatever box it is placed in. Off by default because the image loses its intrinsic size",
    },
    {
      name: "--no-optimization-minimize-xml-remove-dimensions",
      description:
        "Negative 'optimization-minimize-xml-remove-dimensions' option",
    },
    {
      name: "--optimization-minimize-xml-remove-doctype",
      description:
        "Remove a DOCTYPE without an internal subset where no entity reference needs one. Off by default because a validating consumer reads the DTD it names",
    },
    {
      name: "--no-optimization-minimize-xml-remove-doctype",
      description: "Negative 'optimization-minimize-xml-remove-doctype' option",
    },
    {
      name: "--optimization-minimize-xml-remove-editor-data",
      description:
        "Remove elements and attributes in known editor namespaces within SVG, preserving namespace declarations and unrelated XML data. Off by default because editor data may be needed to edit the image",
    },
    {
      name: "--no-optimization-minimize-xml-remove-editor-data",
      description:
        "Negative 'optimization-minimize-xml-remove-editor-data' option",
    },
    {
      name: "--optimization-minimize-xml-remove-elements-class",
      description: "A class whose elements are removed",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--optimization-minimize-xml-remove-elements-class-reset",
      description:
        "Clear all items provided in 'optimization.minimize.xml.removeElements.class' configuration. Classes whose elements are removed",
    },
    {
      name: "--optimization-minimize-xml-remove-elements-id",
      description: "An ID whose element is removed",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--optimization-minimize-xml-remove-elements-id-reset",
      description:
        "Clear all items provided in 'optimization.minimize.xml.removeElements.id' configuration. IDs whose elements are removed",
    },
    {
      name: "--optimization-minimize-xml-remove-empty-attributes",
      description:
        "Remove empty `class`, `id` and `style` attributes on SVG elements unless the DTD declares them, and other unprefixed empty SVG attributes that read as absent, keeping links, languages, conditional tests, ARIA, data and event attributes. Off by default because selectors and scripts can observe attribute presence",
    },
    {
      name: "--no-optimization-minimize-xml-remove-empty-attributes",
      description:
        "Negative 'optimization-minimize-xml-remove-empty-attributes' option",
    },
    {
      name: "--optimization-minimize-xml-remove-empty-elements",
      description:
        "Remove empty SVG `g` and `defs` containers having only namespace declarations, preserving other attributes and DTD defaults. Off by default because selectors and scripts can observe document structure",
    },
    {
      name: "--no-optimization-minimize-xml-remove-empty-elements",
      description:
        "Negative 'optimization-minimize-xml-remove-empty-elements' option",
    },
    {
      name: "--optimization-minimize-xml-remove-hidden-elements",
      description:
        'Remove ID-free SVG content that renders nothing: `display="none"`, zero opacity outside clip paths, zero-size rectangles, circles, ellipses and images, paths and point lists that draw nothing, shapes that paint neither fill nor stroke, uses of what draws nothing, `tref` elements without a reference, and subtrees under `visibility="hidden"` that never set it back. Off by default because such content can still be read, and zero opacity still receives pointer events; skip what a style, a `switch` or (for opacity and sizes) an ancestor\'s filter, mask or clip path can observe, and documents with stylesheets, scripts, animations or DTDs',
    },
    {
      name: "--no-optimization-minimize-xml-remove-hidden-elements",
      description:
        "Negative 'optimization-minimize-xml-remove-hidden-elements' option",
    },
    {
      name: "--optimization-minimize-xml-remove-metadata",
      description:
        "Remove SVG `metadata` elements and their contents, preserving `title`, `desc` and the document element. Off by default because metadata can carry licensing and application data",
    },
    {
      name: "--no-optimization-minimize-xml-remove-metadata",
      description:
        "Negative 'optimization-minimize-xml-remove-metadata' option",
    },
    {
      name: "--optimization-minimize-xml-remove-off-canvas-paths",
      description:
        "Remove unnamed SVG paths whose bounds, stroke included, lie wholly outside the root `viewBox`, outside transforms, filters, markers and styles. Off by default because a viewport of another aspect ratio letterboxes the `viewBox` and shows what lies past it",
    },
    {
      name: "--no-optimization-minimize-xml-remove-off-canvas-paths",
      description:
        "Negative 'optimization-minimize-xml-remove-off-canvas-paths' option",
    },
    {
      name: "--optimization-minimize-xml-remove-raster-images",
      description:
        "Remove SVG `image` elements referencing JPEG, PNG or GIF images. Off by default because those images disappear from the drawing",
    },
    {
      name: "--no-optimization-minimize-xml-remove-raster-images",
      description:
        "Negative 'optimization-minimize-xml-remove-raster-images' option",
    },
    {
      name: "--optimization-minimize-xml-remove-scripts",
      description:
        "Remove `script` elements, event handler and `srcdoc` attributes, `javascript:` and `vbscript:` URLs and links to HTML or SVG `data:` documents, for SVG that must not run code. Off by default because the image loses its behavior",
    },
    {
      name: "--no-optimization-minimize-xml-remove-scripts",
      description: "Negative 'optimization-minimize-xml-remove-scripts' option",
    },
    {
      name: "--optimization-minimize-xml-remove-titles",
      description:
        "Remove SVG `title` elements. Off by default because they name the image for assistive technology and tooltips",
    },
    {
      name: "--no-optimization-minimize-xml-remove-titles",
      description: "Negative 'optimization-minimize-xml-remove-titles' option",
    },
    {
      name: "--optimization-minimize-xml-remove-unknown-attributes",
      description:
        'Remove unprefixed attributes that no SVG, ARIA or animation specification defines from the SVG elements, keeping `data-`, `aria-`, `role` and event handler attributes; `"unsafe"` drops `role` too, as svgo does by default, though assistive technology reads it. Off by default because scripts and CSS outside the document can read them; skip documents with stylesheets or scripts',
      args: {
        name: "value",
        isOptional: true,
      },
    },
    {
      name: "--no-optimization-minimize-xml-remove-unknown-attributes",
      description:
        "Negative 'optimization-minimize-xml-remove-unknown-attributes' option",
    },
    {
      name: "--optimization-minimize-xml-remove-unknown-elements",
      description:
        "Remove SVG-namespace elements that no SVG specification defines, with their content, which renders nothing; a `switch` child stays. Off by default because scripts and CSS selectors outside the document can still find them",
    },
    {
      name: "--no-optimization-minimize-xml-remove-unknown-elements",
      description:
        "Negative 'optimization-minimize-xml-remove-unknown-elements' option",
    },
    {
      name: "--optimization-minimize-xml-remove-unused-namespaces",
      description:
        "Remove unused prefixed namespace declarations within SVG, preserving default namespaces and prefixes referenced in names or content. On by default, since no name uses them; `false` keeps them for scripts that read namespace declarations",
    },
    {
      name: "--no-optimization-minimize-xml-remove-unused-namespaces",
      description:
        "Negative 'optimization-minimize-xml-remove-unused-namespaces' option",
    },
    {
      name: "--optimization-minimize-xml-remove-view-box",
      description:
        "Remove the root SVG element's `viewBox` where it restates its plain `width` and `height`. Off by default because the image then no longer scales when CSS gives it another size",
    },
    {
      name: "--no-optimization-minimize-xml-remove-view-box",
      description:
        "Negative 'optimization-minimize-xml-remove-view-box' option",
    },
    {
      name: "--optimization-minimize-xml-remove-xlink",
      description:
        'Spell `xlink:href` as the SVG 2 `href` where an element has no `href`, a link\'s `xlink:show` as `target` and an `xlink:title` as a `title` child, and drop `xlink:type="simple"`, so the XLink namespace declaration can go. Off by default because browsers before SVG 2 read only `xlink:href`',
    },
    {
      name: "--no-optimization-minimize-xml-remove-xlink",
      description: "Negative 'optimization-minimize-xml-remove-xlink' option",
    },
    {
      name: "--optimization-minimize-xml-reuse-paths",
      description:
        "Reuse unidentified duplicate leaf SVG paths without transforms through existing IDs and SVG 2 href references, preserving IDs and target element types. Require explicit context-free fill and stroke; compare identical authored paint before color cleanup. Off by default because consumers can observe element types; skip stylesheets, scripts, animations, duplicate IDs and DTDs",
    },
    {
      name: "--no-optimization-minimize-xml-reuse-paths",
      description: "Negative 'optimization-minimize-xml-reuse-paths' option",
    },
    {
      name: "--optimization-minimize-xml-shorten-colors",
      description:
        "Shorten opaque SVG presentation colors using the CSS minifier, preserving paint servers, contextual colors and DTD-declared values. On by default, as `minimize.html` normalizes attribute spellings; `false` keeps the source spelling where a selector or script reads it",
    },
    {
      name: "--no-optimization-minimize-xml-shorten-colors",
      description: "Negative 'optimization-minimize-xml-shorten-colors' option",
    },
    {
      name: "--optimization-minimize-xml-shorten-numbers",
      description:
        "Shorten SVG geometry and transform decimals and separators without rounding, changing units or rewriting exponent notation. Preserve DTD-declared values. On by default, as `minimize.html` normalizes attribute spellings; `false` keeps the source spelling where a selector or script reads it",
    },
    {
      name: "--no-optimization-minimize-xml-shorten-numbers",
      description:
        "Negative 'optimization-minimize-xml-shorten-numbers' option",
    },
    {
      name: "--optimization-minimize-xml-shorten-path-data",
      description:
        "Compact SVG path numbers, repeated commands and separators without rounding, preserving arc flags and DTD-declared values; drop segments that draw nothing, such as a line back to the start before `z`, where no marker, stylesheet, script, animation or ID can observe them. On by default, as `minimize.html` normalizes attribute spellings; `false` keeps the source spelling where a selector or script reads it",
    },
    {
      name: "--no-optimization-minimize-xml-shorten-path-data",
      description:
        "Negative 'optimization-minimize-xml-shorten-path-data' option",
    },
    {
      name: "--optimization-minimize-xml-sort-attributes",
      description:
        "Print attributes with the document's commonest names first, breaking ties by case-sensitive name. Off by default: consumers observing attribute order see the new order",
    },
    {
      name: "--no-optimization-minimize-xml-sort-attributes",
      description:
        "Negative 'optimization-minimize-xml-sort-attributes' option",
    },
    {
      name: "--optimization-minimize-xml-sort-definitions",
      description:
        "Sort adjacent SVG resource definitions within defs by type and ID, preserving IDs and references. Off by default because consumers can observe order; skip stylesheets, scripts, animations, duplicate IDs and DTDs",
    },
    {
      name: "--no-optimization-minimize-xml-sort-definitions",
      description:
        "Negative 'optimization-minimize-xml-sort-definitions' option",
    },
    {
      name: "--optimization-minimize-xml-sort-symbols",
      description:
        "Sort adjacent SVG symbol definitions by ID, preserving IDs and references. Off by default because consumers can observe definition order; skip documents with stylesheets, scripts, animations, duplicate IDs or DTDs",
    },
    {
      name: "--no-optimization-minimize-xml-sort-symbols",
      description: "Negative 'optimization-minimize-xml-sort-symbols' option",
    },
    {
      name: "--no-optimization-minimize-options-css",
      description: "Negative 'optimization-minimize-options-css' option",
    },
    {
      name: "--optimization-minimize-options-css-charset",
      description:
        'How the minimizer states a `.css` asset\'s encoding. `"auto"` (the default) opens it with `@charset "UTF-8"` only when its output holds a non-ASCII character, so it is read as UTF-8 wherever the server\'s `Content-Type` names no other charset, which `@charset` cannot override. `false` writes no `@charset` at all, and writes an escaped character past U+FFFF (an icon font\'s `content: "\\F0A86"`) as the character itself, as `"auto"` does once that `@charset` is written. Set `false` only where the asset is read as UTF-8 anyway: a stylesheet with no `@charset` is read in the encoding the server\'s `Content-Type` names, else in the encoding of the page linking it, so it holds wherever the server names UTF-8 or the page is UTF-8 — and anywhere else every such character reads as other characters',
      args: {
        name: "value",
      },
    },
    {
      name: "--no-optimization-minimize-options-css-charset",
      description:
        "Negative 'optimization-minimize-options-css-charset' option",
    },
    {
      name: "--optimization-minimize-options-css-color-fallbacks",
      description:
        "Write a color the `browserslist` target cannot read as an extra declaration before the one naming it, in a spelling it does read: `color: oklch(59.686% 0.15619 49.7694)` is written as `color: #c65d06` and then the `oklch()` itself, so an engine reading neither the Lab family nor `hwb()` is left with a color rather than with nothing. The fallback is that color clipped into the sRGB gamut and rounded, which the declaration standing after it corrects wherever it is read. Nothing is written where the author already set the property earlier in the same block, where the color holds a substitution or a relative reference this cannot fold, or where the fallback would still name a function the target cannot read. On by default, and only in effect for a `browserslist` target — any other target names no browsers to answer for",
    },
    {
      name: "--no-optimization-minimize-options-css-color-fallbacks",
      description:
        "Negative 'optimization-minimize-options-css-color-fallbacks' option",
    },
    {
      name: "--optimization-minimize-options-css-comments",
      description:
        'Which comments survive. `"some"`, the default, keeps a `/*!` banner and a comment annotated `@license` or `@preserve`; `true` (or `"all"`) keeps every comment and `false` keeps none; a string is read as a regular expression source, and it, a `RegExp` or a `(comment) => boolean` predicate is asked about each comment\'s own text and keeps the ones it accepts — standing in for the default rule rather than beside it, as terser\'s `format.comments` does, so a pattern that names nothing else drops the ones `"some"` would have kept. A `/*#` source-map pragma is a link rather than a comment, so `"some"` and `"all"` keep it; `false`, a pattern or a predicate decides it like any other. A predicate is handed to the minimizer\'s worker pool as source, so it must not close over anything',
      args: {
        name: "value",
        isOptional: true,
      },
    },
    {
      name: "--no-optimization-minimize-options-css-comments",
      description:
        "Negative 'optimization-minimize-options-css-comments' option",
    },
    {
      name: "--optimization-minimize-options-css-convert-approximate-colors",
      description:
        "Write a polar or Lab color as the nearest hex even where that hex only approximates it. `shortenColors` converts one only where webpack can prove an engine's own conversion lands on the same bytes, and keeps the function in the two places it cannot: a channel sitting too near a `.5` boundary for two implementations to round it alike (it is why esbuild and lightningcss emit different bytes for `hwb(194 0% 0%)`), and a color outside the sRGB gamut, which hex can only clip to a different color. Off by default, for those two reasons, and the two are not the same trade: on the boundary this writes the byte esbuild, lightningcss and cssnano write anyway, while outside the gamut it goes further than any of them — lightningcss keeps the function there and writes a fallback before it, which is what `colorFallbacks` does. A space engines read through transfers of their own (`a98-rgb`, `prophoto-rgb`) is left alone either way, the hex there naming a color no engine paints rather than a near one. This is about replacing the function: a fallback stands before it rather than in its place, so it already clips and rounds this way",
    },
    {
      name: "--no-optimization-minimize-options-css-convert-approximate-colors",
      description:
        "Negative 'optimization-minimize-options-css-convert-approximate-colors' option",
    },
    {
      name: "--optimization-minimize-options-css-convert-length-units",
      description:
        "Rewrite a length into a shorter unit it is exactly equal in (`16px` -> `1pc`). Off by default: the authored unit is lost, and once the asset is compressed the rewrite rarely earns anything",
    },
    {
      name: "--no-optimization-minimize-options-css-convert-length-units",
      description:
        "Negative 'optimization-minimize-options-css-convert-length-units' option",
    },
    {
      name: "--optimization-minimize-options-css-custom-media",
      description:
        "Resolve the `@custom-media` at-rule: write the query a name stands for wherever a condition asks for it, and drop the rule that named it. `@custom-media --wide (width>400px)` with `@media (--wide)` becomes `@media (width>400px)`. Off by default: `module.parser.css.customMedia` already resolves it in every stylesheet webpack parses, so this is for a `.css` asset that reached the minimizer without being parsed — one emitted by `asset/resource` or copied in. Every rule is read first, so a name resolves wherever its rule stands, the last rule stating it holds, and one name may be read through another; names that read each other in a cycle stand for nothing and are left as written",
    },
    {
      name: "--no-optimization-minimize-options-css-custom-media",
      description:
        "Negative 'optimization-minimize-options-css-custom-media' option",
    },
    {
      name: "--optimization-minimize-options-css-custom-selectors",
      description:
        "Resolve the `@custom-selector` at-rule: write the selector list a name stands for as `:is(…)` wherever a selector asks for it, and drop the rule that named it. `@custom-selector :--heading h1, h2` with `:--heading` becomes `:is(h1, h2)`. Off by default, for the reason `customMedia` is: `module.parser.css.customSelectors` already resolves it in every stylesheet webpack parses. Rules are read as `customMedia` reads them, and a name is written out only where the target reads `:is()`",
    },
    {
      name: "--no-optimization-minimize-options-css-custom-selectors",
      description:
        "Negative 'optimization-minimize-options-css-custom-selectors' option",
    },
    {
      name: "--optimization-minimize-options-css-drop-overridden-declarations",
      description:
        "Drop a declaration a later one in the same block overrides even where no target is selected, assuming the engines shipping today: wherever Chromium, Gecko and WebKit each read the later value. Off by default. With a `browserslist` target this is already done wherever every browser it names is known to read the later value, so the option only widens the case where no target is selected and there are no engines to name — which is what csso and cssnano do unconditionally. What it gives up is the fallback pair: `color:#c65d06;color:lab(50% 100 -100)` loses the hex, so an engine that cannot read `lab()` is left with nothing. A selection naming a browser the compat tables do not cover is still answered for the whole of it rather than by this option, since naming a browser states a target the option does not override",
    },
    {
      name: "--no-optimization-minimize-options-css-drop-overridden-declarations",
      description:
        "Negative 'optimization-minimize-options-css-drop-overridden-declarations' option",
    },
    {
      name: "--optimization-minimize-options-css-extract-comments",
      description:
        "Which comments a minimized asset gives up to its `[file].LICENSE.txt`",
      args: {
        name: "value",
        isOptional: true,
      },
    },
    {
      name: "--no-optimization-minimize-options-css-extract-comments",
      description:
        "Negative 'optimization-minimize-options-css-extract-comments' option",
    },
    {
      name: "--optimization-minimize-options-css-fold-case",
      description:
        "Write a name that matches ASCII case-insensitively in lowercase: an at-rule name, a property name, a pseudo-class or pseudo-element name, a function name, a unit, and a keyword standing in a value whose grammar takes keywords alone. `@MEDIA`, `COLOR`, `:NTH-CHILD`, `URL(`, `1PX` and `currentColor` become `@media`, `color`, `:nth-child`, `url(`, `1px` and `currentcolor`. On by default, and exact: CSS matches every one of these ASCII case-insensitively, so the fold names the same thing. What it never touches is a name the author chose — a custom property, a custom ident such as an animation or grid-area name, an id, a class, a type selector, an attribute's value, or anything inside a substituted value. `@charset` is left as written, being read as bytes rather than matched, and `!important` is always written in lowercase because the printer writes the keyword rather than copying it",
    },
    {
      name: "--no-optimization-minimize-options-css-fold-case",
      description:
        "Negative 'optimization-minimize-options-css-fold-case' option",
    },
    {
      name: "--optimization-minimize-options-css-lower-unsupported",
      description:
        "Write a spelling the `browserslist` target cannot read as one it can — the same value said another way, rather than left for an engine that will drop it: a 4-/8-digit hex as `rgba()`, a double-position gradient stop as the two stops it names, `inset` / `overflow` / `place-*` as the longhands they set, `text-decoration` as its own longhands where a slot is newer than the shorthand, `system-ui` as the stack of platform font names it stands for, a `:lang()` or `:not()` holding a list as the `:is()` that means it, a media feature range as the `min-`/`max-` pair, and `light-dark()` as the custom-property pair a color scheme switches. On by default, and only in effect for a `browserslist` target — any other target names no browsers to answer for. Off leaves every such spelling as written, which is how a stylesheet one of these rewrites gets wrong is minified; it never makes the minifier write a spelling the target cannot read",
    },
    {
      name: "--no-optimization-minimize-options-css-lower-unsupported",
      description:
        "Negative 'optimization-minimize-options-css-lower-unsupported' option",
    },
    {
      name: "--optimization-minimize-options-css-merge-distant-rules",
      description:
        "Give a rule the selectors of a later one printing the same block, and an at-rule the block of a later one stating the same condition, past the rules standing between them. Off by default because it reorders the cascade, so it holds only where nothing between the two declares a property the block being moved does for an element its selectors can match (a rule whose selectors all name other element types, `h3` between two rules for `h1` and `h2`, never can) — a condition between counts for what its own rules declare, while `@layer` and anything else whose declarations cannot be read stands in the way whatever it says. A block repeated at a distance already compresses on its own, so a selector join is taken only where the copy of the block it drops is worth more than twice the selector it writes instead; an at-rule join writes no selector and drops the repeated prelude outright. A named `@layer` is not joined this way — its place in the cascade is where its name is first written, not what its prelude states. `mergeRules` is the safe half of this, joining only what nothing stands between",
    },
    {
      name: "--no-optimization-minimize-options-css-merge-distant-rules",
      description:
        "Negative 'optimization-minimize-options-css-merge-distant-rules' option",
    },
    {
      name: "--optimization-minimize-options-css-merge-longhands",
      description:
        "Write a family of longhands as the one shorthand that sets them — four sides or corners, the two a pair shorthand sets, or the slots of an order-free one — even where unrelated declarations stand between them. On by default",
    },
    {
      name: "--no-optimization-minimize-options-css-merge-longhands",
      description:
        "Negative 'optimization-minimize-options-css-merge-longhands' option",
    },
    {
      name: "--optimization-minimize-options-css-merge-rules",
      description:
        "Join rules nothing stands between: adjacent rules that print the same block become one selector list, at-rules that share a prelude become one rule, and a named `@layer` block a later sibling opens again is folded into the first. On by default",
    },
    {
      name: "--no-optimization-minimize-options-css-merge-rules",
      description:
        "Negative 'optimization-minimize-options-css-merge-rules' option",
    },
    {
      name: "--optimization-minimize-options-css-normalize-quotes",
      description:
        "Normalize quoting: a string takes whichever quote needs fewer escapes, a `url()` and an attribute selector's value drop theirs where the content is still one token, and a font family whose name is a run of identifiers is written unquoted. On by default",
    },
    {
      name: "--no-optimization-minimize-options-css-normalize-quotes",
      description:
        "Negative 'optimization-minimize-options-css-normalize-quotes' option",
    },
    {
      name: "--optimization-minimize-options-css-reduce-functions",
      description:
        "Compute a call into the shorter call naming the same value: `calc()` and every math function over constants, a transform naming one axis or an identity, a gradient's default direction and its implied stops, an easing function that has a keyword, and a filter function given the amount an omitted argument already means. On by default",
    },
    {
      name: "--no-optimization-minimize-options-css-reduce-functions",
      description:
        "Negative 'optimization-minimize-options-css-reduce-functions' option",
    },
    {
      name: "--optimization-minimize-options-css-remove-dead-rules",
      description:
        "Drop a rule or declaration nothing can read: a rule whose block ends up empty, a declaration a later one in the same block overrides, a rule an identical later sibling makes dead, and the `@charset` naming an encoding the output is not written in. On by default. Joining rules that are not dead is `mergeRules`",
    },
    {
      name: "--no-optimization-minimize-options-css-remove-dead-rules",
      description:
        "Negative 'optimization-minimize-options-css-remove-dead-rules' option",
    },
    {
      name: "--optimization-minimize-options-css-reorder-declarations",
      description:
        "Print a style rule's declarations in one order by property family, the properties no family names first where they were written, so blocks setting the same things read alike and compress smaller. Only declarations whose order nothing can see move: two spellings of one property, a shorthand and what it sets, two shorthands sharing a longhand, and a flow-relative side and a physical one keep theirs, and a block holding a property no dataset names or a nested rule is printed as written. On by default",
    },
    {
      name: "--no-optimization-minimize-options-css-reorder-declarations",
      description:
        "Negative 'optimization-minimize-options-css-reorder-declarations' option",
    },
    {
      name: "--optimization-minimize-options-css-rewrite-custom-properties",
      description:
        "Shorten the values of custom properties (`--x: #ffffff` -> `#fff`, `--y: 0.5rem` -> `.5rem`), which are otherwise written back exactly as authored. Off by default: `getComputedStyle().getPropertyValue()` hands this text back, so a rewritten value is a different CSSOM — the one place a declaration's authored text survives. What it may rewrite is exactly what any other value's tokens may be, a color in a substitution's fallback included — that fallback being the property's value rather than the function's own argument",
    },
    {
      name: "--no-optimization-minimize-options-css-rewrite-custom-properties",
      description:
        "Negative 'optimization-minimize-options-css-rewrite-custom-properties' option",
    },
    {
      name: "--optimization-minimize-options-css-rewrite-dir-selector",
      description:
        'Write a `:dir()` the `browserslist` target cannot read as the `[dir]` attribute selector it approximates: `a:dir(rtl)` becomes `a[dir=rtl]`. Off until asked for, because the two are not the same question — `:dir()` reads the directionality an element resolves to, which it may inherit from an ancestor, while `[dir=rtl]` reads the attribute on the element itself, so an element inside a `dir="rtl"` ancestor matches the first and not the second. Only in effect for a `browserslist` target that reads no `:dir()`; any other target names no browsers to answer for',
    },
    {
      name: "--no-optimization-minimize-options-css-rewrite-dir-selector",
      description:
        "Negative 'optimization-minimize-options-css-rewrite-dir-selector' option",
    },
    {
      name: "--optimization-minimize-options-css-rewrite-escapes",
      description:
        "Write an escaped identifier the shortest way that names the same thing, wherever it stands — a selector, a property, at-rule or function name, or a value: `grid-area:\\66oot` becomes `grid-area:foot`, `#\\41 x` becomes `#Ax`, `col\\6f r:red` becomes `color:red` and `c\\61 lc(` becomes `calc(`. On by default, and exact: the escape and what replaces it are the same identifier. Off leaves every escape as the author wrote it, which is what a consumer comparing the text rather than reading the identifier needs",
    },
    {
      name: "--no-optimization-minimize-options-css-rewrite-escapes",
      description:
        "Negative 'optimization-minimize-options-css-rewrite-escapes' option",
    },
    {
      name: "--optimization-minimize-options-css-shorten-colors",
      description:
        "Write each color in the shortest spelling of the same value: `#ffffff` -> `#fff`, `rgb(1 2 3)` -> `#010203`, a named color where the property takes no identifier of the author's own, and every polar and Lab function the target agrees with hex on. On by default",
    },
    {
      name: "--no-optimization-minimize-options-css-shorten-colors",
      description:
        "Negative 'optimization-minimize-options-css-shorten-colors' option",
    },
    {
      name: "--optimization-minimize-options-css-shorten-media-queries",
      description:
        "Shorten a rule's condition prelude: a media feature in its range spelling where the target reads one (`(min-width:100px)` -> `(width>=100px)`), an `and` of two one-sided ranges collapsed into the interval it describes, the `all` a query states before an `and` (which matches what the condition alone matches), and an operand a condition already states — in `@supports` and `@container` as well as `@media`. On by default",
    },
    {
      name: "--no-optimization-minimize-options-css-shorten-media-queries",
      description:
        "Negative 'optimization-minimize-options-css-shorten-media-queries' option",
    },
    {
      name: "--optimization-minimize-options-css-shorten-numbers",
      description:
        "Write each number in its shortest equal spelling — dropping a leading zero, a trailing fraction and a `+`, rounding to the six significant digits a stylesheet can observe, dropping the unit a zero does not need, and writing an alpha and a ratio the one way its grammar spells them. On by default",
    },
    {
      name: "--no-optimization-minimize-options-css-shorten-numbers",
      description:
        "Negative 'optimization-minimize-options-css-shorten-numbers' option",
    },
    {
      name: "--optimization-minimize-options-css-shorten-selectors",
      description:
        "Rewrite a selector into an equal one: a selector list deduplicated and ordered, a CSS2 pseudo-element's second colon dropped, the universal a compound already implies dropped, an `An+B` written the shortest way its microsyntax allows, and a `from` / `100%` keyframe selector written as the shorter of the pair. On by default",
    },
    {
      name: "--no-optimization-minimize-options-css-shorten-selectors",
      description:
        "Negative 'optimization-minimize-options-css-shorten-selectors' option",
    },
    {
      name: "--optimization-minimize-options-css-shorten-values",
      description:
        "Write a value the shortest way its property's own grammar allows: a `{1,4}` box or corner notation collapsed, a slot holding its own initial dropped, and `flex` / `font-weight` / `display` / `transition` / `<position>` / `<repeat-style>` written the short way. On by default. Merging separate longhand declarations is `mergeLonghands`",
    },
    {
      name: "--no-optimization-minimize-options-css-shorten-values",
      description:
        "Negative 'optimization-minimize-options-css-shorten-values' option",
    },
    {
      name: "--optimization-minimize-options-css-unused-symbols",
      description:
        "A class, id, `@keyframes` or custom property name nothing uses",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--optimization-minimize-options-css-unused-symbols-reset",
      description:
        "Clear all items provided in 'optimization.minimizeOptions.css.unusedSymbols' configuration. Names a whole-project analysis found nothing uses, which the minimizer then takes out: a bare name is matched against every class and id a selector names and against every `@keyframes` name, and a `--`-prefixed one against every custom property a declaration sets. A selector list keeps the selectors that do not name one, and a rule left with none goes; a name inside a functional pseudo (`:not(.gone)`, `:is(.gone, .kept)`) is not one the rule needs, so it is left alone. Nothing is derived here — the list is the caller's, and a name on it that something does use takes working CSS out",
    },
    {
      name: "--optimization-minimize-options-css-vendor-prefixes",
      description:
        "Maintain vendor prefixes for the `browserslist` target: add the `-webkit-` / `-moz-` / `-ms-` spelling of a property, at-rule or pseudo-selector that a selected browser still needs, and drop one none of them does. On by default, and only in effect for a `browserslist` target — any other target names no browsers to prefix for. A browserslist name no compat dataset covers (`op_mini`, `and_uc`, `and_qq`, `baidu`, `kaios`, `bb`) is skipped, and a selection of nothing but those prefixes for no one",
    },
    {
      name: "--no-optimization-minimize-options-css-vendor-prefixes",
      description:
        "Negative 'optimization-minimize-options-css-vendor-prefixes' option",
    },
    {
      name: "--no-optimization-minimize-options-html",
      description: "Negative 'optimization-minimize-options-html' option",
    },
    {
      name: "--optimization-minimize-options-html-collapse-boolean-attributes",
      description:
        'Write a boolean attribute as the bare name its presence already means. The DOM reads `checked` from the attribute being there and never from its value, so `checked="checked"` and `checked=""` are the same element — but `getAttribute` hands back what was written. `true`, the default, rewrites only the spelling the spec itself canonicalizes, the attribute\'s own name; `"all"` rewrites any value, including the `checked="false"` that already means checked',
      args: {
        name: "value",
        isOptional: true,
      },
    },
    {
      name: "--no-optimization-minimize-options-html-collapse-boolean-attributes",
      description:
        "Negative 'optimization-minimize-options-html-collapse-boolean-attributes' option",
    },
    {
      name: "--optimization-minimize-options-html-collapse-whitespace",
      description:
        'Collapse each run of whitespace in text to a single space. Left alone inside `pre`, `textarea` and `listing`, where whitespace renders verbatim. `true` (or `"conservative"`) never removes whitespace entirely — dropping it would join two inline elements that render apart. `"smart"` also drops the whitespace that sits against a block element\'s edge, where no line box reaches it. `"all"` drops the whitespace at every text node\'s edges, which does change how adjacent inline elements render',
      args: {
        name: "value",
        isOptional: true,
      },
    },
    {
      name: "--no-optimization-minimize-options-html-collapse-whitespace",
      description:
        "Negative 'optimization-minimize-options-html-collapse-whitespace' option",
    },
    {
      name: "--optimization-minimize-options-html-comments",
      description:
        'Which comments survive. `"some"`, the default, keeps nothing: every comment an HTML parser reads is inert; `true` (or `"all"`) keeps every comment and `false` keeps none; a string is read as a regular expression source, and it, a `RegExp` or a `(comment) => boolean` predicate is asked about each comment\'s own text and keeps the ones it accepts — standing in for the default rule rather than beside it, as terser\'s `format.comments` does, so a pattern that names nothing else drops the ones `"some"` would have kept. A downlevel conditional comment, a server-side include and a `<?…?>` template directive are code rather than comments and stay whatever this says. A predicate is handed to the minimizer\'s worker pool as source, so it must not close over anything',
      args: {
        name: "value",
        isOptional: true,
      },
    },
    {
      name: "--no-optimization-minimize-options-html-comments",
      description:
        "Negative 'optimization-minimize-options-html-comments' option",
    },
    {
      name: "--optimization-minimize-options-html-extract-comments",
      description:
        "Which comments a minimized asset gives up to its `[file].LICENSE.txt`",
      args: {
        name: "value",
        isOptional: true,
      },
    },
    {
      name: "--no-optimization-minimize-options-html-extract-comments",
      description:
        "Negative 'optimization-minimize-options-html-extract-comments' option",
    },
    {
      name: "--optimization-minimize-options-html-merge-scripts",
      description:
        'Print a run of adjacent `<script>` elements as one, joined by a newline and a `;`. Only bare ones fold — any attribute at all, a `src`, `type`, `nonce`, `async` or `id` among them, says the two are not interchangeable with one — and only where the print writes the bodies itself, so a `<script>` that `output.html.inline` fills in after the print is left alone. A body is left alone too wherever appending it would change what it means: one still inside a string, template or block comment would swallow the next, and a directive prologue, a hashbang or a leading `-->` mean what they do only at a start the appended body no longer has. Off by default: it removes elements, so `document.scripts`, a `script:nth-child()` selector and `querySelectorAll("script").length` all read a different document; a later body\'s `var` and `function` declarations become visible to the bodies before it; and a body that throws takes the rest of its run with it rather than only itself, while one that does not parse takes the whole run, its own code included',
    },
    {
      name: "--no-optimization-minimize-options-html-merge-scripts",
      description:
        "Negative 'optimization-minimize-options-html-merge-scripts' option",
    },
    {
      name: "--optimization-minimize-options-html-merge-styles",
      description:
        'Print a run of adjacent `<style>` elements as one sheet. Off by default: it removes elements, so `document.styleSheets`, a `style:nth-child()` selector and `querySelectorAll("style").length` all read a different document. A sheet the CSS minifier does not accept is never folded — appending to one that may be unterminated would make the next sheet part of its last rule — and neither is one led by `@import` / `@charset` / `@namespace`, which apply only at the top of a sheet',
    },
    {
      name: "--no-optimization-minimize-options-html-merge-styles",
      description:
        "Negative 'optimization-minimize-options-html-merge-styles' option",
    },
    {
      name: "--optimization-minimize-options-html-minify-conditional-comments",
      description:
        "Minify the markup inside a downlevel-hidden conditional comment (`<!--[if IE]> … <![endif]-->`). Off by default. The body is minified on its own with every tag it spells kept, and one whose print would still add, drop or move a tag — a wrapper another comment closes, a row of the table it sits in — is left as written, as it is read where the comment sits rather than as a document. Only browsers older than IE10 read these at all",
    },
    {
      name: "--no-optimization-minimize-options-html-minify-conditional-comments",
      description:
        "Negative 'optimization-minimize-options-html-minify-conditional-comments' option",
    },
    {
      name: "--optimization-minimize-options-html-normalize-attribute-quotes",
      description:
        "Write an attribute value with whichever delimiters cost least — bare where the grammar allows it, else under the quote that needs fewer character references. On by default: the DOM reads the same value either way",
    },
    {
      name: "--no-optimization-minimize-options-html-normalize-attribute-quotes",
      description:
        "Negative 'optimization-minimize-options-html-normalize-attribute-quotes' option",
    },
    {
      name: "--optimization-minimize-options-html-normalize-enumerated-attributes",
      description:
        'Fold an enumerated attribute\'s value to the keyword it names (`type="TEXT"` -> `type=text`), which the DOM matches ASCII case-insensitively. A value the spec does not enumerate is left as written. On by default',
    },
    {
      name: "--no-optimization-minimize-options-html-normalize-enumerated-attributes",
      description:
        "Negative 'optimization-minimize-options-html-normalize-enumerated-attributes' option",
    },
    {
      name: "--optimization-minimize-options-html-normalize-list-attributes",
      description:
        "Normalize a list-shaped attribute value: a space-separated token list (`class`, `rel`, `part`, …), a comma-separated one (`accept`, `sizes`, …), a `srcset` and the viewport `<meta content>`. On by default. A list is read as the set the DOM reflects, so a repeat folds away, only where every token of it is a word: one holding a delimiter another language wrote a statement in is text, and keeps every token it names. Reordering a token list is `sortTokenLists`, which is separate and off by default",
    },
    {
      name: "--no-optimization-minimize-options-html-normalize-list-attributes",
      description:
        "Negative 'optimization-minimize-options-html-normalize-list-attributes' option",
    },
    {
      name: "--optimization-minimize-options-html-normalize-numeric-attributes",
      description:
        "Write an integer attribute (`tabindex`, `colspan`, `width`, …) the one way its own rules read it — leading whitespace, a `+` and leading zeros all go. On by default",
    },
    {
      name: "--no-optimization-minimize-options-html-normalize-numeric-attributes",
      description:
        "Negative 'optimization-minimize-options-html-normalize-numeric-attributes' option",
    },
    {
      name: "--optimization-minimize-options-html-normalize-url-attributes",
      description:
        "Drop the ASCII whitespace around a URL value (`href`, `src`, `action`, `poster`, …), which resolving the URL skips over, so the request goes to the same place either way. On by default: `getAttribute` hands back the attribute as written, so a script comparing those bytes is the one this is turned off for",
    },
    {
      name: "--no-optimization-minimize-options-html-normalize-url-attributes",
      description:
        "Negative 'optimization-minimize-options-html-normalize-url-attributes' option",
    },
    {
      name: "--optimization-minimize-options-html-remove-empty-attributes",
      description:
        'Drop an attribute whose empty or all-whitespace value leaves it in the state its absence gives: the globals `class`, `id`, `style`, `dir`, `accesskey`, `itemprop`, `itemref`, `itemtype` and `part`, and every attribute reflecting a token list on the elements the spec defines it for — `rel` on `<a>`, `<area>`, `<form>` and `<link>`, `ping` on `<a>` and `<area>`, `headers` on `<td>` and `<th>`, `blocking` on `<link>`, `<script>` and `<style>`, `sizes` on `<link>`, `for` on `<output>` — where an empty list is no tokens. Anywhere else that spelling is an author attribute whose meaning is a script\'s, so `<x-foo rel="">` and `<label for="">` keep it. Off by default: an attribute selector matches on presence, so `[class]` stops matching. Never dropped: `title` and `lang`, whose empty value means what absence does not; `sandbox`, whose empty list is the most restrictive state an `<iframe>` has; and an event handler, whose empty body still compiles to a function where absence reads null',
    },
    {
      name: "--no-optimization-minimize-options-html-remove-empty-attributes",
      description:
        "Negative 'optimization-minimize-options-html-remove-empty-attributes' option",
    },
    {
      name: "--optimization-minimize-options-html-remove-empty-elements",
      description:
        "Drop an element that has no children and no attributes, where its bare form renders nothing and nothing reads it: a generic container such as `div`, `span` or `section`, an inline phrase element, an empty `title`, `script` or `style`, or an attribute-less `meta`, `link` or `base`. Every other element is kept, including widgets, list items, elements with margins and custom elements. Off by default: CSS can give an empty element a size or a `::before`, and the minifier cannot see the stylesheet. Emptiness is read off the output rather than the source, so a run of nested empties goes together and an element left empty only by a dropped comment or by whitespace `collapseWhitespace` deletes goes with them",
    },
    {
      name: "--no-optimization-minimize-options-html-remove-empty-elements",
      description:
        "Negative 'optimization-minimize-options-html-remove-empty-elements' option",
    },
    {
      name: "--optimization-minimize-options-html-remove-implied-tags",
      description:
        'How much of the `<html>` / `<head>` / `<body>` shell §13.1.2.4 lets the parser imply may be left out. Every other optional tag goes unconditionally — nothing can observe that — but these six are what a consumer reading the page with a regexp rather than a parser looks for. `"smart"`, the default, leaves out the one such a reader never matches: the `<html>` start tag, which is omittable only when it carries no attribute at all, so the `<html lang=en>` anyone greps for keeps its tag anyway. `</html>` stays with it, since a truncation check reads a page as complete by finding one. `true` (or `"all"`) leaves out all six, which is where a crawler matching on `<body>` stops finding one; `false` leaves out none. A tag also stays wherever the spec keeps it: an attribute to carry, a comment minifying does not drop, whitespace opening the element, or a `meta` / `noscript` / `link` / `script` / `style` / `template` element opening the body',
      args: {
        name: "value",
        isOptional: true,
      },
    },
    {
      name: "--no-optimization-minimize-options-html-remove-implied-tags",
      description:
        "Negative 'optimization-minimize-options-html-remove-implied-tags' option",
    },
    {
      name: "--optimization-minimize-options-html-remove-optional-tags",
      description:
        "Leave out a tag §13.1.2.4 lets the parser imply, other than the `<html>` / `<head>` / `<body>` shell, which `removeImpliedTags` decides on its own. On by default: nothing can observe the difference, the tree parses the same either way. A tag still stays wherever the spec keeps it — a comment or whitespace behind it, or a following element the insertion mode does not close it through",
    },
    {
      name: "--no-optimization-minimize-options-html-remove-optional-tags",
      description:
        "Negative 'optimization-minimize-options-html-remove-optional-tags' option",
    },
    {
      name: "--optimization-minimize-options-html-remove-redundant-attributes",
      description:
        'Drop an attribute whose value is the one the element already defaults to. Off by default: an attribute a page no longer carries is one `getAttribute` and every attribute selector read differently, whichever tier dropped it. `true` (or `"smart"`) drops only markers on elements that render nothing — `<script type=text/javascript>`, `<script language=javascript>`, `<script charset=utf-8>` on a page that declares UTF-8, `<style type=text/css>`, `<link type=text/css>`, `<link media=all>` — so no rule that styles the page stops applying, which is what `@swc/html` does by default. `"all"` also drops spec defaults such as `<input type=text>` and `<form method=get>`, which reaches further still: an attribute selector matches the content attribute, not the reflected default, so `input[type=text]` stops matching',
      args: {
        name: "value",
        isOptional: true,
      },
    },
    {
      name: "--no-optimization-minimize-options-html-remove-redundant-attributes",
      description:
        "Negative 'optimization-minimize-options-html-remove-redundant-attributes' option",
    },
    {
      name: "--optimization-minimize-options-html-sort-attributes",
      description:
        "Print an element's attributes in a fixed order: the document's commonest attribute names first, ties by name. Nothing in HTML reads attribute order, so this only makes the same markup compress better across pages — the run of attributes two elements share becomes the same run of bytes. Off by default: a script reading `element.attributes` back, or a snapshot of the emitted HTML, sees the new order",
    },
    {
      name: "--no-optimization-minimize-options-html-sort-attributes",
      description:
        "Negative 'optimization-minimize-options-html-sort-attributes' option",
    },
    {
      name: "--optimization-minimize-options-html-sort-token-lists",
      description:
        "Print every space-separated token list the DOM reads as a set — `class`, `rel`, `part`, `sandbox`, `blocking`, `itemprop` / `itemref` / `itemtype`, `<output for>` and `<link sizes>` — in token order. Nothing matching those reads order, so this only makes the same markup compress better across pages. Off by default: a script reading `className` or `rel` back sees the new order. Asked for on its own: a list this reorders is rewritten whether or not `normalizeListAttributes` is on, since another order is another spelling. The lists the DOM does not read as a set are left alone whatever this says — `ping` is the order its requests go out in and `accesskey` the order its keys are tried",
    },
    {
      name: "--no-optimization-minimize-options-html-sort-token-lists",
      description:
        "Negative 'optimization-minimize-options-html-sort-token-lists' option",
    },
    {
      name: "--no-optimization-minimize-options-javascript",
      description: "Negative 'optimization-minimize-options-javascript' option",
    },
    {
      name: "--optimization-minimize-options-json",
      description:
        "Minimize JSON assets by re-serializing them without whitespace (defaults to `true` with `experiments.futureDefaults`, otherwise `false`)",
    },
    {
      name: "--no-optimization-minimize-options-json",
      description: "Negative 'optimization-minimize-options-json' option",
    },
    {
      name: "--no-optimization-minimize-options-xml",
      description: "Negative 'optimization-minimize-options-xml' option",
    },
    {
      name: "--optimization-minimize-options-xml-angle-precision",
      description:
        "With `convertTransforms`, round the angle each SVG transform turns by to this many decimal places, a whole number from 0 to 15, as svgo's `degPrecision` does, and recompose what remains within `precision`. Off by default because the drawing turns by what the rounding drops",
      args: {
        name: "value",
      },
    },
    {
      name: "--optimization-minimize-options-xml-apply-transforms",
      description:
        "Bake each SVG path's `transform` into its path data, rounded to `precision` decimals (3 when unset), scaling a stroke the transform scales. Off by default because rounding moves points; skip paths with IDs, styles, markers, clip paths, masks, filters or `url()` paints, arcs under a skew, and documents with stylesheets, scripts or animations",
    },
    {
      name: "--no-optimization-minimize-options-xml-apply-transforms",
      description:
        "Negative 'optimization-minimize-options-xml-apply-transforms' option",
    },
    {
      name: "--optimization-minimize-options-xml-cleanup-ids",
      description:
        "Remove SVG IDs nothing in the document references and rename the rest to the shortest names, rewriting `href`, `url()` and ID-list references. Off by default because a reference from outside the document, such as a sprite's `file.svg#icon` or a page's `getElementById`, stops resolving; skip stylesheets, scripts, animations, duplicate IDs, `xml:id` and DTDs",
    },
    {
      name: "--no-optimization-minimize-options-xml-cleanup-ids",
      description:
        "Negative 'optimization-minimize-options-xml-cleanup-ids' option",
    },
    {
      name: "--optimization-minimize-options-xml-cleanup-structure",
      description:
        "Collapse SVG groups, hoist identical context-free inherited attributes or move them to sole graphics children, inline validated presentation declarations and remove empty text, unnamed definitions and exact redundant attributes. Off by default because consumers can observe structure and attribute presence; preserve IDs and skip stylesheets, scripts, animations and DTDs",
    },
    {
      name: "--no-optimization-minimize-options-xml-cleanup-structure",
      description:
        "Negative 'optimization-minimize-options-xml-cleanup-structure' option",
    },
    {
      name: "--optimization-minimize-options-xml-collapse-attribute-whitespace",
      description:
        "Trim every SVG attribute value and collapse each run of whitespace in it to one space, as svgo's `cleanupAttrs` does, `xmlns` included. Off by default because a value whose spaces mean something, such as a `data-` attribute or a namespace name, changes",
    },
    {
      name: "--no-optimization-minimize-options-xml-collapse-attribute-whitespace",
      description:
        "Negative 'optimization-minimize-options-xml-collapse-attribute-whitespace' option",
    },
    {
      name: "--optimization-minimize-options-xml-collapse-whitespace",
      description:
        "Remove whitespace-only text in known SVG containers, under `xml:space` too since that lays out text alone, preserving text content and foreign content, and kept where a stylesheet reads `:empty` or is unread. On by default, since that text renders nothing; `false` keeps it for scripts, and for the stylesheets of a page that inlines the SVG, which read whitespace nodes",
    },
    {
      name: "--no-optimization-minimize-options-xml-collapse-whitespace",
      description:
        "Negative 'optimization-minimize-options-xml-collapse-whitespace' option",
    },
    {
      name: "--optimization-minimize-options-xml-comments",
      description:
        'Which comments survive. `"some"`, the default, keeps an XML legal notice: a comment opening with `!` or annotated `@license` or `@preserve`; `true` (or `"all"`) keeps every comment and `false` keeps none; a string is read as a regular expression source, and it, a `RegExp` or a `(comment) => boolean` predicate is asked about each comment\'s own text and keeps the ones it accepts, standing in for the default rule rather than beside it. A `<?…?>` processing instruction is no comment and stays whatever this says. A predicate is handed to the minimizer\'s worker pool as source, so it must not close over anything',
      args: {
        name: "value",
        isOptional: true,
      },
    },
    {
      name: "--no-optimization-minimize-options-xml-comments",
      description:
        "Negative 'optimization-minimize-options-xml-comments' option",
    },
    {
      name: "--optimization-minimize-options-xml-convert-curves-to-arcs",
      description:
        "With `shortenPathData`, write SVG path cubic curves that stay within `precision` decimals (3 when unset) of one circle as arcs of it, joining neighbors on the same circle, other cubics as quadratics within that error, and nearly flat circular arcs as lines. `\"loose\"` fits as svgo's `makeArcs` does instead: at a curve's quarter points, against its unrounded ends, writing the rounded radius unchecked, so arcs can stray past the precision. Off by default because the arc is a true circle, not the curve; skip documents with markers, stylesheets, scripts or animations",
      args: {
        name: "value",
        isOptional: true,
      },
    },
    {
      name: "--no-optimization-minimize-options-xml-convert-curves-to-arcs",
      description:
        "Negative 'optimization-minimize-options-xml-convert-curves-to-arcs' option",
    },
    {
      name: "--optimization-minimize-options-xml-convert-shapes",
      description:
        "Convert leaf SVG lines, polylines and polygons to shorter paths with identical coordinates and vertices, and equal-radius ellipses to circles. Off by default because consumers can observe element types; skip documents with stylesheets, scripts, animations or DTDs",
    },
    {
      name: "--no-optimization-minimize-options-xml-convert-shapes",
      description:
        "Negative 'optimization-minimize-options-xml-convert-shapes' option",
    },
    {
      name: "--optimization-minimize-options-xml-convert-transforms",
      description:
        "With `shortenNumbers`, recompose each SVG transform list as the shortest list whose matrix matches it within `precision` decimals (3 when unset), such as a `matrix()` becoming `rotate(-45 261.757 -252.243)`. Off by default because the result is rounded, not exact",
    },
    {
      name: "--no-optimization-minimize-options-xml-convert-transforms",
      description:
        "Negative 'optimization-minimize-options-xml-convert-transforms' option",
    },
    {
      name: "--optimization-minimize-options-xml-inline-style-pseudo-classes",
      description: "A pseudo-class, with or without its colon",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--optimization-minimize-options-xml-inline-style-pseudo-classes-reset",
      description:
        "Clear all items provided in 'optimization.minimizeOptions.xml.inlineStylePseudoClasses' configuration. With `inlineStyles`, inline rules whose selectors use these pseudo-classes, such as `:hover`, as if they always held, as svgo's `usePseudos` does. Off by default because a style meant for a state then always applies",
    },
    {
      name: "--optimization-minimize-options-xml-inline-styles",
      description:
        "Move the rules of SVG stylesheets into the style attributes of the elements they match, in cascade order before each element's own, then drop the stylesheets and the classes they named, where every selector uses types, classes, IDs, attributes, tree-structural pseudo-classes or `:not()` and the result is no larger. Off by default because scripts and external CSS can observe classes and stylesheets",
    },
    {
      name: "--no-optimization-minimize-options-xml-inline-styles",
      description:
        "Negative 'optimization-minimize-options-xml-inline-styles' option",
    },
    {
      name: "--optimization-minimize-options-xml-merge-disjoint-paths",
      description:
        "Merge adjacent SVG paths of any shape with the same attributes whose bounds, stroke included, do not overlap, outside IDs, styles, markers, dashes, clips, masks, filters and `url()` paint. Off by default because anti-aliasing can blend a pixel both paths reach differently once merged",
    },
    {
      name: "--no-optimization-minimize-options-xml-merge-disjoint-paths",
      description:
        "Negative 'optimization-minimize-options-xml-merge-disjoint-paths' option",
    },
    {
      name: "--optimization-minimize-options-xml-merge-paths",
      description:
        "Merge adjacent disjoint axis-aligned SVG lines with explicit opaque crisp-edge strokes, no fill, dashes or markers. Skip compositing, transformed or ID-bearing ancestors; identical paint remains eligible during color cleanup. Off by default because consumers can observe element boundaries; skip stylesheets, scripts, animations and DTDs",
    },
    {
      name: "--no-optimization-minimize-options-xml-merge-paths",
      description:
        "Negative 'optimization-minimize-options-xml-merge-paths' option",
    },
    {
      name: "--optimization-minimize-options-xml-precision",
      description:
        "Round SVG geometry, path data, transforms and presentation numbers to this many decimal places, a whole number from 0 to 15, wherever `shortenNumbers` and `shortenPathData` shorten them. Path points round where they land, so error never accumulates, and curves and arcs that draw straight lines become lines. Off by default because rounding moves geometry; svgo rounds to 3",
      args: {
        name: "value",
      },
    },
    {
      name: "--optimization-minimize-options-xml-remove-attributes",
      description:
        "An `element:attribute:value` pattern of attributes to remove",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--optimization-minimize-options-xml-remove-attributes-reset",
      description:
        "Clear all items provided in 'optimization.minimizeOptions.xml.removeAttributes' configuration. Remove attributes matching `element:attribute:value` patterns, each part a case-insensitive regular expression matched whole, `*` matching anything; a missing element or value part matches any. Off by default because only the author knows which attributes the image can lose",
    },
    {
      name: "--optimization-minimize-options-xml-remove-deprecated-attributes",
      description:
        "Write an SVG element's `xml:lang` as `lang` in place of a `lang` it overrides; `\"unsafe\"` drops `xml:lang` instead, as svgo's `removeUnsafe` does, losing the language it names. Off by default because SVG 1.1 readers know only `xml:lang`",
      args: {
        name: "value",
        isOptional: true,
      },
    },
    {
      name: "--no-optimization-minimize-options-xml-remove-deprecated-attributes",
      description:
        "Negative 'optimization-minimize-options-xml-remove-deprecated-attributes' option",
    },
    {
      name: "--optimization-minimize-options-xml-remove-descriptions",
      description:
        "Remove SVG `desc` elements. Off by default because they describe the image for assistive technology",
    },
    {
      name: "--no-optimization-minimize-options-xml-remove-descriptions",
      description:
        "Negative 'optimization-minimize-options-xml-remove-descriptions' option",
    },
    {
      name: "--optimization-minimize-options-xml-remove-dimensions",
      description:
        "Remove the root SVG element's `width` and `height`, moving plain ones into a missing `viewBox`, so the image scales to whatever box it is placed in. Off by default because the image loses its intrinsic size",
    },
    {
      name: "--no-optimization-minimize-options-xml-remove-dimensions",
      description:
        "Negative 'optimization-minimize-options-xml-remove-dimensions' option",
    },
    {
      name: "--optimization-minimize-options-xml-remove-doctype",
      description:
        "Remove a DOCTYPE without an internal subset where no entity reference needs one. Off by default because a validating consumer reads the DTD it names",
    },
    {
      name: "--no-optimization-minimize-options-xml-remove-doctype",
      description:
        "Negative 'optimization-minimize-options-xml-remove-doctype' option",
    },
    {
      name: "--optimization-minimize-options-xml-remove-editor-data",
      description:
        "Remove elements and attributes in known editor namespaces within SVG, preserving namespace declarations and unrelated XML data. Off by default because editor data may be needed to edit the image",
    },
    {
      name: "--no-optimization-minimize-options-xml-remove-editor-data",
      description:
        "Negative 'optimization-minimize-options-xml-remove-editor-data' option",
    },
    {
      name: "--optimization-minimize-options-xml-remove-elements-class",
      description: "A class whose elements are removed",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--optimization-minimize-options-xml-remove-elements-class-reset",
      description:
        "Clear all items provided in 'optimization.minimizeOptions.xml.removeElements.class' configuration. Classes whose elements are removed",
    },
    {
      name: "--optimization-minimize-options-xml-remove-elements-id",
      description: "An ID whose element is removed",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--optimization-minimize-options-xml-remove-elements-id-reset",
      description:
        "Clear all items provided in 'optimization.minimizeOptions.xml.removeElements.id' configuration. IDs whose elements are removed",
    },
    {
      name: "--optimization-minimize-options-xml-remove-empty-attributes",
      description:
        "Remove empty `class`, `id` and `style` attributes on SVG elements unless the DTD declares them, and other unprefixed empty SVG attributes that read as absent, keeping links, languages, conditional tests, ARIA, data and event attributes. Off by default because selectors and scripts can observe attribute presence",
    },
    {
      name: "--no-optimization-minimize-options-xml-remove-empty-attributes",
      description:
        "Negative 'optimization-minimize-options-xml-remove-empty-attributes' option",
    },
    {
      name: "--optimization-minimize-options-xml-remove-empty-elements",
      description:
        "Remove empty SVG `g` and `defs` containers having only namespace declarations, preserving other attributes and DTD defaults. Off by default because selectors and scripts can observe document structure",
    },
    {
      name: "--no-optimization-minimize-options-xml-remove-empty-elements",
      description:
        "Negative 'optimization-minimize-options-xml-remove-empty-elements' option",
    },
    {
      name: "--optimization-minimize-options-xml-remove-hidden-elements",
      description:
        'Remove ID-free SVG content that renders nothing: `display="none"`, zero opacity outside clip paths, zero-size rectangles, circles, ellipses and images, paths and point lists that draw nothing, shapes that paint neither fill nor stroke, uses of what draws nothing, `tref` elements without a reference, and subtrees under `visibility="hidden"` that never set it back. Off by default because such content can still be read, and zero opacity still receives pointer events; skip what a style, a `switch` or (for opacity and sizes) an ancestor\'s filter, mask or clip path can observe, and documents with stylesheets, scripts, animations or DTDs',
    },
    {
      name: "--no-optimization-minimize-options-xml-remove-hidden-elements",
      description:
        "Negative 'optimization-minimize-options-xml-remove-hidden-elements' option",
    },
    {
      name: "--optimization-minimize-options-xml-remove-metadata",
      description:
        "Remove SVG `metadata` elements and their contents, preserving `title`, `desc` and the document element. Off by default because metadata can carry licensing and application data",
    },
    {
      name: "--no-optimization-minimize-options-xml-remove-metadata",
      description:
        "Negative 'optimization-minimize-options-xml-remove-metadata' option",
    },
    {
      name: "--optimization-minimize-options-xml-remove-off-canvas-paths",
      description:
        "Remove unnamed SVG paths whose bounds, stroke included, lie wholly outside the root `viewBox`, outside transforms, filters, markers and styles. Off by default because a viewport of another aspect ratio letterboxes the `viewBox` and shows what lies past it",
    },
    {
      name: "--no-optimization-minimize-options-xml-remove-off-canvas-paths",
      description:
        "Negative 'optimization-minimize-options-xml-remove-off-canvas-paths' option",
    },
    {
      name: "--optimization-minimize-options-xml-remove-raster-images",
      description:
        "Remove SVG `image` elements referencing JPEG, PNG or GIF images. Off by default because those images disappear from the drawing",
    },
    {
      name: "--no-optimization-minimize-options-xml-remove-raster-images",
      description:
        "Negative 'optimization-minimize-options-xml-remove-raster-images' option",
    },
    {
      name: "--optimization-minimize-options-xml-remove-scripts",
      description:
        "Remove `script` elements, event handler and `srcdoc` attributes, `javascript:` and `vbscript:` URLs and links to HTML or SVG `data:` documents, for SVG that must not run code. Off by default because the image loses its behavior",
    },
    {
      name: "--no-optimization-minimize-options-xml-remove-scripts",
      description:
        "Negative 'optimization-minimize-options-xml-remove-scripts' option",
    },
    {
      name: "--optimization-minimize-options-xml-remove-titles",
      description:
        "Remove SVG `title` elements. Off by default because they name the image for assistive technology and tooltips",
    },
    {
      name: "--no-optimization-minimize-options-xml-remove-titles",
      description:
        "Negative 'optimization-minimize-options-xml-remove-titles' option",
    },
    {
      name: "--optimization-minimize-options-xml-remove-unknown-attributes",
      description:
        'Remove unprefixed attributes that no SVG, ARIA or animation specification defines from the SVG elements, keeping `data-`, `aria-`, `role` and event handler attributes; `"unsafe"` drops `role` too, as svgo does by default, though assistive technology reads it. Off by default because scripts and CSS outside the document can read them; skip documents with stylesheets or scripts',
      args: {
        name: "value",
        isOptional: true,
      },
    },
    {
      name: "--no-optimization-minimize-options-xml-remove-unknown-attributes",
      description:
        "Negative 'optimization-minimize-options-xml-remove-unknown-attributes' option",
    },
    {
      name: "--optimization-minimize-options-xml-remove-unknown-elements",
      description:
        "Remove SVG-namespace elements that no SVG specification defines, with their content, which renders nothing; a `switch` child stays. Off by default because scripts and CSS selectors outside the document can still find them",
    },
    {
      name: "--no-optimization-minimize-options-xml-remove-unknown-elements",
      description:
        "Negative 'optimization-minimize-options-xml-remove-unknown-elements' option",
    },
    {
      name: "--optimization-minimize-options-xml-remove-unused-namespaces",
      description:
        "Remove unused prefixed namespace declarations within SVG, preserving default namespaces and prefixes referenced in names or content. On by default, since no name uses them; `false` keeps them for scripts that read namespace declarations",
    },
    {
      name: "--no-optimization-minimize-options-xml-remove-unused-namespaces",
      description:
        "Negative 'optimization-minimize-options-xml-remove-unused-namespaces' option",
    },
    {
      name: "--optimization-minimize-options-xml-remove-view-box",
      description:
        "Remove the root SVG element's `viewBox` where it restates its plain `width` and `height`. Off by default because the image then no longer scales when CSS gives it another size",
    },
    {
      name: "--no-optimization-minimize-options-xml-remove-view-box",
      description:
        "Negative 'optimization-minimize-options-xml-remove-view-box' option",
    },
    {
      name: "--optimization-minimize-options-xml-remove-xlink",
      description:
        'Spell `xlink:href` as the SVG 2 `href` where an element has no `href`, a link\'s `xlink:show` as `target` and an `xlink:title` as a `title` child, and drop `xlink:type="simple"`, so the XLink namespace declaration can go. Off by default because browsers before SVG 2 read only `xlink:href`',
    },
    {
      name: "--no-optimization-minimize-options-xml-remove-xlink",
      description:
        "Negative 'optimization-minimize-options-xml-remove-xlink' option",
    },
    {
      name: "--optimization-minimize-options-xml-reuse-paths",
      description:
        "Reuse unidentified duplicate leaf SVG paths without transforms through existing IDs and SVG 2 href references, preserving IDs and target element types. Require explicit context-free fill and stroke; compare identical authored paint before color cleanup. Off by default because consumers can observe element types; skip stylesheets, scripts, animations, duplicate IDs and DTDs",
    },
    {
      name: "--no-optimization-minimize-options-xml-reuse-paths",
      description:
        "Negative 'optimization-minimize-options-xml-reuse-paths' option",
    },
    {
      name: "--optimization-minimize-options-xml-shorten-colors",
      description:
        "Shorten opaque SVG presentation colors using the CSS minifier, preserving paint servers, contextual colors and DTD-declared values. On by default, as `minimize.html` normalizes attribute spellings; `false` keeps the source spelling where a selector or script reads it",
    },
    {
      name: "--no-optimization-minimize-options-xml-shorten-colors",
      description:
        "Negative 'optimization-minimize-options-xml-shorten-colors' option",
    },
    {
      name: "--optimization-minimize-options-xml-shorten-numbers",
      description:
        "Shorten SVG geometry and transform decimals and separators without rounding, changing units or rewriting exponent notation. Preserve DTD-declared values. On by default, as `minimize.html` normalizes attribute spellings; `false` keeps the source spelling where a selector or script reads it",
    },
    {
      name: "--no-optimization-minimize-options-xml-shorten-numbers",
      description:
        "Negative 'optimization-minimize-options-xml-shorten-numbers' option",
    },
    {
      name: "--optimization-minimize-options-xml-shorten-path-data",
      description:
        "Compact SVG path numbers, repeated commands and separators without rounding, preserving arc flags and DTD-declared values; drop segments that draw nothing, such as a line back to the start before `z`, where no marker, stylesheet, script, animation or ID can observe them. On by default, as `minimize.html` normalizes attribute spellings; `false` keeps the source spelling where a selector or script reads it",
    },
    {
      name: "--no-optimization-minimize-options-xml-shorten-path-data",
      description:
        "Negative 'optimization-minimize-options-xml-shorten-path-data' option",
    },
    {
      name: "--optimization-minimize-options-xml-sort-attributes",
      description:
        "Print attributes with the document's commonest names first, breaking ties by case-sensitive name. Off by default: consumers observing attribute order see the new order",
    },
    {
      name: "--no-optimization-minimize-options-xml-sort-attributes",
      description:
        "Negative 'optimization-minimize-options-xml-sort-attributes' option",
    },
    {
      name: "--optimization-minimize-options-xml-sort-definitions",
      description:
        "Sort adjacent SVG resource definitions within defs by type and ID, preserving IDs and references. Off by default because consumers can observe order; skip stylesheets, scripts, animations, duplicate IDs and DTDs",
    },
    {
      name: "--no-optimization-minimize-options-xml-sort-definitions",
      description:
        "Negative 'optimization-minimize-options-xml-sort-definitions' option",
    },
    {
      name: "--optimization-minimize-options-xml-sort-symbols",
      description:
        "Sort adjacent SVG symbol definitions by ID, preserving IDs and references. Off by default because consumers can observe definition order; skip documents with stylesheets, scripts, animations, duplicate IDs or DTDs",
    },
    {
      name: "--no-optimization-minimize-options-xml-sort-symbols",
      description:
        "Negative 'optimization-minimize-options-xml-sort-symbols' option",
    },
    {
      name: "--optimization-module-ids",
      description:
        "Define the algorithm to choose module ids (natural: numeric ids in order of usage, named: readable ids for better debugging, hashed: (deprecated) short hashes as ids for better long term caching, deterministic: numeric hash ids for better long term caching, size: numeric ids focused on minimal initial download size, false: no algorithm used, as custom one can be provided via plugin)",
      args: {
        name: "value",
      },
    },
    {
      name: "--no-optimization-module-ids",
      description: "Negative 'optimization-module-ids' option",
    },
    {
      name: "--optimization-node-env",
      description: "Set process.env.NODE_ENV to a specific value",
      args: {
        name: "value",
      },
    },
    {
      name: "--no-optimization-node-env",
      description: "Negative 'optimization-node-env' option",
    },
    {
      name: "--optimization-portable-records",
      description:
        "Generate records with relative paths to be able to move the context folder",
    },
    {
      name: "--no-optimization-portable-records",
      description: "Negative 'optimization-portable-records' option",
    },
    {
      name: "--optimization-provided-exports",
      description:
        "Figure out which exports are provided by modules to generate more efficient code",
    },
    {
      name: "--no-optimization-provided-exports",
      description: "Negative 'optimization-provided-exports' option",
    },
    {
      name: "--optimization-real-content-hash",
      description:
        "Use real [contenthash] based on final content of the assets",
    },
    {
      name: "--no-optimization-real-content-hash",
      description: "Negative 'optimization-real-content-hash' option",
    },
    {
      name: "--optimization-remove-available-modules",
      description:
        "Removes modules from chunks when these modules are already included in all parents",
    },
    {
      name: "--no-optimization-remove-available-modules",
      description: "Negative 'optimization-remove-available-modules' option",
    },
    {
      name: "--optimization-remove-empty-chunks",
      description: "Remove chunks which are empty",
    },
    {
      name: "--no-optimization-remove-empty-chunks",
      description: "Negative 'optimization-remove-empty-chunks' option",
    },
    {
      name: "--optimization-runtime-chunk",
      description:
        "Create an additional chunk which contains only the webpack runtime and chunk hash maps",
      args: {
        name: "value",
        isOptional: true,
      },
    },
    {
      name: "--no-optimization-runtime-chunk",
      description: "Negative 'optimization-runtime-chunk' option",
    },
    {
      name: "--optimization-runtime-chunk-name",
      description: "The name or name factory for the runtime chunks",
      args: {
        name: "value",
      },
    },
    {
      name: "--optimization-side-effects",
      description:
        "Skip over modules which contain no side effects when exports are not used (false: disabled, 'flag': only use manually placed side effects flag, true: also analyse source code for side effects)",
      args: {
        name: "value",
        isOptional: true,
      },
    },
    {
      name: "--no-optimization-side-effects",
      description: "Negative 'optimization-side-effects' option",
    },
    {
      name: "--no-optimization-split-chunks",
      description: "Negative 'optimization-split-chunks' option",
    },
    {
      name: "--optimization-split-chunks-automatic-name-delimiter",
      description: "Sets the name delimiter for created chunks",
      args: {
        name: "value",
      },
    },
    {
      name: "--optimization-split-chunks-chunks",
      description:
        'Select chunks for determining shared modules (defaults to "async", "initial" and "all" requires adding these chunks to the HTML)',
      args: {
        name: "value",
      },
    },
    {
      name: "--optimization-split-chunks-dedup-depth",
      description:
        "Rounds of intersections of the chunk sets to look through for modules shared by chunks no single chunk set holds together (0 looks through the chunk sets alone; every round costs more computation)",
      args: {
        name: "value",
      },
    },
    {
      name: "--optimization-split-chunks-default-size-types",
      description: "Size type, like 'javascript', 'webassembly'",
      args: {
        name: "value",

        isVariadic: true,
      },
    },
    {
      name: "--optimization-split-chunks-default-size-types-reset",
      description:
        "Clear all items provided in 'optimization.splitChunks.defaultSizeTypes' configuration. Sets the size types which are used when a number is used for sizes",
    },
    {
      name: "--optimization-split-chunks-enforce-size-threshold",
      description: "Size of the javascript part of the chunk",
      args: {
        name: "value",
      },
    },
    {
      name: "--optimization-split-chunks-fallback-cache-group-automatic-name-delimiter",
      description: "Sets the name delimiter for created chunks",
      args: {
        name: "value",
      },
    },
    {
      name: "--optimization-split-chunks-fallback-cache-group-chunks",
      description:
        'Select chunks for determining shared modules (defaults to "async", "initial" and "all" requires adding these chunks to the HTML)',
      args: {
        name: "value",
      },
    },
    {
      name: "--optimization-split-chunks-fallback-cache-group-max-async-size",
      description: "Size of the javascript part of the chunk",
      args: {
        name: "value",
      },
    },
    {
      name: "--optimization-split-chunks-fallback-cache-group-max-initial-size",
      description: "Size of the javascript part of the chunk",
      args: {
        name: "value",
      },
    },
    {
      name: "--optimization-split-chunks-fallback-cache-group-max-size",
      description: "Size of the javascript part of the chunk",
      args: {
        name: "value",
      },
    },
    {
      name: "--optimization-split-chunks-fallback-cache-group-min-size",
      description: "Size of the javascript part of the chunk",
      args: {
        name: "value",
      },
    },
    {
      name: "--optimization-split-chunks-fallback-cache-group-min-size-reduction",
      description: "Size of the javascript part of the chunk",
      args: {
        name: "value",
      },
    },
    {
      name: "--optimization-split-chunks-filename",
      description: "Sets the template for the filename for created chunks",
      args: {
        name: "value",

        template: ["filepaths"],
      },
    },
    {
      name: "--optimization-split-chunks-hide-path-info",
      description:
        "Prevents exposing path info when creating names for parts splitted by maxSize",
    },
    {
      name: "--no-optimization-split-chunks-hide-path-info",
      description: "Negative 'optimization-split-chunks-hide-path-info' option",
    },
    {
      name: "--optimization-split-chunks-max-async-requests",
      description:
        "Maximum number of requests which are accepted for on-demand loading",
      args: {
        name: "value",
      },
    },
    {
      name: "--optimization-split-chunks-max-async-size",
      description: "Size of the javascript part of the chunk",
      args: {
        name: "value",
      },
    },
    {
      name: "--optimization-split-chunks-max-initial-requests",
      description:
        "Maximum number of initial chunks which are accepted for an entry point",
      args: {
        name: "value",
      },
    },
    {
      name: "--optimization-split-chunks-max-initial-size",
      description: "Size of the javascript part of the chunk",
      args: {
        name: "value",
      },
    },
    {
      name: "--optimization-split-chunks-max-size",
      description: "Size of the javascript part of the chunk",
      args: {
        name: "value",
      },
    },
    {
      name: "--optimization-split-chunks-min-chunks",
      description:
        "Minimum number of times a module has to be duplicated until it's considered for splitting",
      args: {
        name: "value",
      },
    },
    {
      name: "--optimization-split-chunks-min-remaining-size",
      description: "Size of the javascript part of the chunk",
      args: {
        name: "value",
      },
    },
    {
      name: "--optimization-split-chunks-min-size",
      description: "Size of the javascript part of the chunk",
      args: {
        name: "value",
      },
    },
    {
      name: "--optimization-split-chunks-min-size-reduction",
      description: "Size of the javascript part of the chunk",
      args: {
        name: "value",
      },
    },
    {
      name: "--optimization-split-chunks-name",
      description:
        "Give chunks created a name (chunks with equal name are merged)",
      args: {
        name: "value",
      },
    },
    {
      name: "--no-optimization-split-chunks-name",
      description: "Negative 'optimization-split-chunks-name' option",
    },
    {
      name: "--optimization-split-chunks-used-exports",
      description:
        "Compare used exports when checking common modules. Modules will only be put in the same chunk when exports are equal",
    },
    {
      name: "--no-optimization-split-chunks-used-exports",
      description: "Negative 'optimization-split-chunks-used-exports' option",
    },
    {
      name: "--optimization-used-exports",
      description:
        'Figure out which exports are used by modules to mangle export names, omit unused exports and generate more efficient code (true: analyse used exports for each runtime, "global": analyse exports globally for all runtimes combined)',
      args: {
        name: "value",
        isOptional: true,
      },
    },
    {
      name: "--no-optimization-used-exports",
      description: "Negative 'optimization-used-exports' option",
    },
    {
      name: "--output-allow-outside",
      description:
        "Absolute path of a directory outside of 'output.path' where files may be written, copied and cleaned. Where files may be written, copied and cleaned outside of 'output.path'. 'true' allows anywhere, 'false' nowhere, and a list allows only inside those directories. When unset, assets plugins emit there are still written (refused with 'experiments.futureDefaults'), while 'output.copy' and 'output.clean' stay inside 'output.path'",
      args: {
        name: "value",
        isOptional: true,
        isVariadic: true,
        template: ["folders"],
      },
    },
    {
      name: "--no-output-allow-outside",
      description: "Negative 'output-allow-outside' option",
    },
    {
      name: "--output-allow-outside-reset",
      description:
        "Clear all items provided in 'output.allowOutside' configuration. Where files may be written, copied and cleaned outside of 'output.path'. 'true' allows anywhere, 'false' nowhere, and a list allows only inside those directories. When unset, assets plugins emit there are still written (refused with 'experiments.futureDefaults'), while 'output.copy' and 'output.clean' stay inside 'output.path'",
    },
    {
      name: "--output-asset-module-filename",
      description:
        "The filename of asset modules as relative path inside the 'output.path' directory",
      args: {
        name: "value",

        template: ["filepaths", "folders"],
      },
    },
    {
      name: "--output-async-chunks",
      description:
        "Enable/disable creating async chunks that are loaded on demand",
    },
    {
      name: "--no-output-async-chunks",
      description: "Negative 'output-async-chunks' option",
    },
    {
      name: "--output-charset",
      description: "Add charset attribute for script tag",
    },
    {
      name: "--no-output-charset",
      description: "Negative 'output-charset' option",
    },
    {
      name: "--output-chunk-filename",
      description:
        "Specifies the filename template of output files on disk. You must **not** specify an absolute path here, but the path may contain folders separated by '/'! The specified path is joined with the value of the 'output.path' option to determine the location on disk",
      args: {
        name: "value",

        template: ["filepaths"],
      },
    },
    {
      name: "--output-chunk-format",
      description:
        "The format of chunks (formats included by default are 'array-push' (web/WebWorker), 'commonjs' (node.js), 'module' (ESM), but others might be added by plugins)",
      args: {
        name: "value",
      },
    },
    {
      name: "--no-output-chunk-format",
      description: "Negative 'output-chunk-format' option",
    },
    {
      name: "--output-chunk-load-timeout",
      description: "Number of milliseconds before chunk request expires",
      args: {
        name: "value",
      },
    },
    {
      name: "--output-chunk-loading",
      description:
        "The method of loading chunks (methods included by default are 'jsonp' (web), 'import' (ESM), 'importScripts' (WebWorker), 'require' (sync node.js), 'async-node' (async node.js), but others might be added by plugins)",
      args: {
        name: "value",
      },
    },
    {
      name: "--no-output-chunk-loading",
      description: "Negative 'output-chunk-loading' option",
    },
    {
      name: "--output-chunk-loading-global",
      description: "The global variable used by webpack for loading of chunks",
      args: {
        name: "value",
      },
    },
    {
      name: "--output-clean",
      description: "Clean the output directory before emit",
    },
    {
      name: "--no-output-clean",
      description: "Negative 'output-clean' option",
    },
    {
      name: "--output-clean-dry",
      description:
        "Log the assets that should be removed instead of deleting them",
    },
    {
      name: "--no-output-clean-dry",
      description: "Negative 'output-clean-dry' option",
    },
    {
      name: "--output-clean-keep",
      description: "Keep these assets",
      args: {
        name: "value",
      },
    },
    {
      name: "--output-clean-keep-glob",
      description:
        "A glob pattern matched against a path, using `/` as path separator on every OS; a `!` prefix excludes what it matches",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--output-clean-keep-glob-reset",
      description:
        "Clear all items provided in 'output.clean.keep.glob' configuration. A list of glob patterns",
    },
    {
      name: "--output-compare-before-emit",
      description:
        "Check if to be emitted file already exists and have the same content before writing to output filesystem",
    },
    {
      name: "--no-output-compare-before-emit",
      description: "Negative 'output-compare-before-emit' option",
    },
    {
      name: "--output-copy",
      description:
        "Glob or path from where the files are copied. A glob separates with '/', matches dot files, and takes '*', '**', '?', '[]' and '{}'",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--output-copy-context",
      description:
        "Directory 'from' is resolved from and the copied paths are relative to. Defaults to the compiler context, and to what 'from' names when it is not a glob",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--output-copy-filename",
      description:
        "Filename template of a copied file inside 'to'. Defaults to '[path][base]', which keeps the name and the directory structure below 'from'",
      args: {
        name: "value",
        isVariadic: true,
        template: ["filepaths"],
      },
    },
    {
      name: "--output-copy-from",
      description:
        "Glob or path from where the files are copied. A glob separates with '/', matches dot files, and takes '*', '**', '?', '[]' and '{}'",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--output-copy-glob-options-case-sensitive",
      description:
        "Whether the glob matches the case of a file name. Defaults to 'true'",
    },
    {
      name: "--no-output-copy-glob-options-case-sensitive",
      description: "Negative 'output-copy-glob-options-case-sensitive' option",
    },
    {
      name: "--output-copy-glob-options-deep",
      description:
        "How many directory levels below the base of the glob are read, where '1' reads only the base itself. Defaults to no limit",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--output-copy-glob-options-dot",
      description:
        "Whether the glob reaches a file or a directory whose name starts with a dot without naming it. Defaults to 'true'",
    },
    {
      name: "--no-output-copy-glob-options-dot",
      description: "Negative 'output-copy-glob-options-dot' option",
    },
    {
      name: "--output-copy-glob-options-follow-symlinks",
      description:
        "Whether a symbolic link is resolved and copied as what it points at. Defaults to 'true'; 'false' copies the link itself, pointing where it already points",
    },
    {
      name: "--no-output-copy-glob-options-follow-symlinks",
      description: "Negative 'output-copy-glob-options-follow-symlinks' option",
    },
    {
      name: "--output-copy-preserve-permissions",
      description:
        "Whether a copied file keeps the permissions of the file it was copied from. Defaults to 'false', which gives it the ones a new file gets. Has no effect on Windows",
    },
    {
      name: "--no-output-copy-preserve-permissions",
      description: "Negative 'output-copy-preserve-permissions' option",
    },
    {
      name: "--output-copy-preserve-timestamps",
      description:
        "Whether a copied file keeps the access and modification times of the file it was copied from. Defaults to 'false', which stamps it with the time it was written",
    },
    {
      name: "--no-output-copy-preserve-timestamps",
      description: "Negative 'output-copy-preserve-timestamps' option",
    },
    {
      name: "--output-copy-to",
      description:
        "Directory the files are copied to, relative to 'output.path', which is where they land by default",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--output-copy-transform-cache",
      description: "Whether the result of the transform is cached",
    },
    {
      name: "--no-output-copy-transform-cache",
      description: "Negative 'output-copy-transform-cache' option",
    },
    {
      name: "--output-copy-reset",
      description:
        "Clear all items provided in 'output.copy' configuration. Copy files and directories to the output directory",
    },
    {
      name: "--output-cross-origin-loading",
      description: "This option enables cross-origin loading of chunks",
      args: {
        name: "value",
      },
    },
    {
      name: "--no-output-cross-origin-loading",
      description: "Negative 'output-cross-origin-loading' option",
    },
    {
      name: "--output-css-chunk-filename",
      description:
        "Specifies the filename template of output files on disk. You must **not** specify an absolute path here, but the path may contain folders separated by '/'! The specified path is joined with the value of the 'output.path' option to determine the location on disk",
      args: {
        name: "value",

        template: ["filepaths"],
      },
    },
    {
      name: "--output-css-filename",
      description:
        "Specifies the filename template of output files on disk. You must **not** specify an absolute path here, but the path may contain folders separated by '/'! The specified path is joined with the value of the 'output.path' option to determine the location on disk",
      args: {
        name: "value",

        template: ["filepaths"],
      },
    },
    {
      name: "--output-devtool-fallback-module-filename-template",
      description:
        "Similar to `output.devtoolModuleFilenameTemplate`, but used in the case of duplicate module identifiers",
      args: {
        name: "value",
      },
    },
    {
      name: "--output-devtool-module-filename-template",
      description:
        "Filename template string of function for the sources array in a generated SourceMap",
      args: {
        name: "value",

        template: ["filepaths"],
      },
    },
    {
      name: "--output-devtool-namespace",
      description:
        "Module namespace to use when interpolating filename template string for the sources array in a generated SourceMap. Defaults to `output.library` if not set. It's useful for avoiding runtime collisions in sourcemaps from multiple webpack projects built as libraries",
      args: {
        name: "value",
      },
    },
    {
      name: "--output-enabled-chunk-loading-types",
      description:
        "The method of loading chunks (methods included by default are 'jsonp' (web), 'import' (ESM), 'importScripts' (WebWorker), 'require' (sync node.js), 'async-node' (async node.js), but others might be added by plugins)",
      args: {
        name: "value",

        isVariadic: true,
      },
    },
    {
      name: "--output-enabled-chunk-loading-types-reset",
      description:
        "Clear all items provided in 'output.enabledChunkLoadingTypes' configuration. List of chunk loading types enabled for use by entry points",
    },
    {
      name: "--output-enabled-library-types",
      description:
        "Type of library (types included by default are 'var', 'module', 'assign', 'assign-properties', 'this', 'window', 'self', 'global', 'commonjs', 'commonjs2', 'commonjs-module', 'commonjs-static', 'amd', 'amd-require', 'umd', 'umd2', 'jsonp', 'system', but others might be added by plugins)",
      args: {
        name: "value",

        isVariadic: true,
      },
    },
    {
      name: "--output-enabled-library-types-reset",
      description:
        "Clear all items provided in 'output.enabledLibraryTypes' configuration. List of library types enabled for use by entry points",
    },
    {
      name: "--output-enabled-wasm-loading-types",
      description:
        "The method of loading WebAssembly Modules (methods included by default are 'fetch' (web/WebWorker), 'async-node' (node.js), but others might be added by plugins)",
      args: {
        name: "value",

        isVariadic: true,
      },
    },
    {
      name: "--output-enabled-wasm-loading-types-reset",
      description:
        "Clear all items provided in 'output.enabledWasmLoadingTypes' configuration. List of wasm loading types enabled for use by entry points",
    },
    {
      name: "--output-environment-arrow-function",
      description: "The environment supports arrow functions ('() => { ... }')",
    },
    {
      name: "--no-output-environment-arrow-function",
      description: "Negative 'output-environment-arrow-function' option",
    },
    {
      name: "--output-environment-async-function",
      description:
        "The environment supports async function and await ('async function () { await ... }')",
    },
    {
      name: "--no-output-environment-async-function",
      description: "Negative 'output-environment-async-function' option",
    },
    {
      name: "--output-environment-big-int-literal",
      description: "The environment supports BigInt as literal (123n)",
    },
    {
      name: "--no-output-environment-big-int-literal",
      description: "Negative 'output-environment-big-int-literal' option",
    },
    {
      name: "--output-environment-const",
      description:
        "The environment supports const and let for variable declarations",
    },
    {
      name: "--no-output-environment-const",
      description: "Negative 'output-environment-const' option",
    },
    {
      name: "--output-environment-defer-import",
      description:
        "The environment supports deferred module evaluation ('import defer * as ns from \"...\"', 'import.defer(\"...\")')",
    },
    {
      name: "--no-output-environment-defer-import",
      description: "Negative 'output-environment-defer-import' option",
    },
    {
      name: "--output-environment-destructuring",
      description: "The environment supports destructuring ('{ a, b } = obj')",
    },
    {
      name: "--no-output-environment-destructuring",
      description: "Negative 'output-environment-destructuring' option",
    },
    {
      name: "--output-environment-document",
      description: "The environment supports 'document'",
    },
    {
      name: "--no-output-environment-document",
      description: "Negative 'output-environment-document' option",
    },
    {
      name: "--output-environment-dynamic-import",
      description:
        "The environment supports an async import() function to import EcmaScript modules",
    },
    {
      name: "--no-output-environment-dynamic-import",
      description: "Negative 'output-environment-dynamic-import' option",
    },
    {
      name: "--output-environment-dynamic-import-in-worker",
      description:
        "The environment supports an async import() is available when creating a worker",
    },
    {
      name: "--no-output-environment-dynamic-import-in-worker",
      description:
        "Negative 'output-environment-dynamic-import-in-worker' option",
    },
    {
      name: "--output-environment-for-of",
      description:
        "The environment supports 'for of' iteration ('for (const x of array) { ... }')",
    },
    {
      name: "--no-output-environment-for-of",
      description: "Negative 'output-environment-for-of' option",
    },
    {
      name: "--output-environment-generator",
      description:
        "The environment supports generator functions and yield ('function* () { yield ... }')",
    },
    {
      name: "--no-output-environment-generator",
      description: "Negative 'output-environment-generator' option",
    },
    {
      name: "--output-environment-global-this",
      description: "The environment supports 'globalThis'",
    },
    {
      name: "--no-output-environment-global-this",
      description: "Negative 'output-environment-global-this' option",
    },
    {
      name: "--output-environment-has-own",
      description: "The environment supports 'Object.hasOwn'",
    },
    {
      name: "--no-output-environment-has-own",
      description: "Negative 'output-environment-has-own' option",
    },
    {
      name: "--output-environment-import-meta-dirname-and-filename",
      description:
        "The environment supports `import.meta.dirname` and `import.meta.filename`",
    },
    {
      name: "--no-output-environment-import-meta-dirname-and-filename",
      description:
        "Negative 'output-environment-import-meta-dirname-and-filename' option",
    },
    {
      name: "--output-environment-let",
      description: "The environment supports let for variable declarations",
    },
    {
      name: "--no-output-environment-let",
      description: "Negative 'output-environment-let' option",
    },
    {
      name: "--output-environment-logical-assignment",
      description:
        "The environment supports logical assignment operators ('a ||= b', 'a &&= b', 'a ??= b')",
    },
    {
      name: "--no-output-environment-logical-assignment",
      description: "Negative 'output-environment-logical-assignment' option",
    },
    {
      name: "--output-environment-method-shorthand",
      description:
        "The environment supports object method shorthand ('{ module() {} }')",
    },
    {
      name: "--no-output-environment-method-shorthand",
      description: "Negative 'output-environment-method-shorthand' option",
    },
    {
      name: "--output-environment-module",
      description:
        "The environment supports EcmaScript Module syntax to import EcmaScript modules (import ... from '...')",
    },
    {
      name: "--no-output-environment-module",
      description: "Negative 'output-environment-module' option",
    },
    {
      name: "--output-environment-module-preload",
      description:
        'The environment supports `<link rel="modulepreload">` to preload EcmaScript modules',
    },
    {
      name: "--no-output-environment-module-preload",
      description: "Negative 'output-environment-module-preload' option",
    },
    {
      name: "--output-environment-node-builtin-module-getter",
      description:
        "The environment supports `process.getBuiltinModule()` to synchronously load Node.js core modules",
    },
    {
      name: "--no-output-environment-node-builtin-module-getter",
      description:
        "Negative 'output-environment-node-builtin-module-getter' option",
    },
    {
      name: "--output-environment-node-prefix-for-core-modules",
      description:
        "The environment supports `node:` prefix for Node.js core modules",
    },
    {
      name: "--no-output-environment-node-prefix-for-core-modules",
      description:
        "Negative 'output-environment-node-prefix-for-core-modules' option",
    },
    {
      name: "--output-environment-optional-chaining",
      description:
        "The environment supports optional chaining ('obj?.a' or 'obj?.()')",
    },
    {
      name: "--no-output-environment-optional-chaining",
      description: "Negative 'output-environment-optional-chaining' option",
    },
    {
      name: "--output-environment-source-import",
      description:
        "The environment supports source phase imports ('import source m from \"...\"', 'import.source(\"...\")')",
    },
    {
      name: "--no-output-environment-source-import",
      description: "Negative 'output-environment-source-import' option",
    },
    {
      name: "--output-environment-spread",
      description:
        "The environment supports spread and rest in array/object literals and calls ('{ ...obj }', 'fn(...args)')",
    },
    {
      name: "--no-output-environment-spread",
      description: "Negative 'output-environment-spread' option",
    },
    {
      name: "--output-environment-symbol",
      description:
        "The environment supports 'Symbol' (and well-known symbols like 'Symbol.toStringTag')",
    },
    {
      name: "--no-output-environment-symbol",
      description: "Negative 'output-environment-symbol' option",
    },
    {
      name: "--output-environment-template-literal",
      description: "The environment supports template literals",
    },
    {
      name: "--no-output-environment-template-literal",
      description: "Negative 'output-environment-template-literal' option",
    },
    {
      name: "--output-environment-top-level-await",
      description:
        "The environment supports top-level await ('await x' at the top level of a module)",
    },
    {
      name: "--no-output-environment-top-level-await",
      description: "Negative 'output-environment-top-level-await' option",
    },
    {
      name: "--output-filename",
      description:
        "Specifies the filename template of output files on disk. You must **not** specify an absolute path here, but the path may contain folders separated by '/'! The specified path is joined with the value of the 'output.path' option to determine the location on disk",
      args: {
        name: "value",

        template: ["filepaths"],
      },
    },
    {
      name: "--output-global-object",
      description:
        "An expression which is used to address the global object/scope in runtime code",
      args: {
        name: "value",
      },
    },
    {
      name: "--output-hash-digest",
      description: "Digest types used for the hash",
      args: {
        name: "value",
      },
    },
    {
      name: "--output-hash-digest-length",
      description: "Number of chars which are used for the hash",
      args: {
        name: "value",
      },
    },
    {
      name: "--output-hash-function",
      description:
        "Algorithm used for generation the hash (see node.js crypto package)",
      args: {
        name: "value",
      },
    },
    {
      name: "--output-hash-salt",
      description: "Any string which is added to the hash to salt it",
      args: {
        name: "value",
      },
    },
    {
      name: "--output-hot-update-chunk-filename",
      description:
        "The filename of the Hot Update Chunks. They are inside the output.path directory",
      args: {
        name: "value",

        template: ["filepaths", "folders"],
      },
    },
    {
      name: "--output-hot-update-global",
      description:
        "The global variable used by webpack for loading of hot update chunks",
      args: {
        name: "value",
      },
    },
    {
      name: "--output-hot-update-main-filename",
      description:
        "The filename of the Hot Update Main File. It is inside the 'output.path' directory",
      args: {
        name: "value",

        template: ["filepaths", "folders"],
      },
    },
    {
      name: "--output-html",
      description:
        "Generate an HTML file for each non-HTML entrypoint with its JS and CSS output chunks injected. Can be overridden per entry via the entry descriptor `html` option",
    },
    {
      name: "--no-output-html",
      description: "Negative 'output-html' option",
    },
    {
      name: "--output-html-base",
      description:
        "Inject a `<base>` element into the page `<head>`. A string sets `href`; an object sets both `href` and optionally `target`. Skipped if the HTML already contains a `<base>` element",
      args: {
        name: "value",
      },
    },
    {
      name: "--output-html-base-href",
      description: "Value for the `href` attribute of the `<base>` element",
      args: {
        name: "value",
      },
    },
    {
      name: "--output-html-base-target",
      description:
        'Value for the `target` attribute of the `<base>` element (e.g. `"_blank"`)',
      args: {
        name: "value",
      },
    },
    {
      name: "--output-html-csp",
      description:
        "Inject a `<meta http-equiv=\"Content-Security-Policy\">` into every webpack-emitted HTML page. `false` (default) does nothing; `true` uses a strict baseline (`script-src 'self'`, `style-src 'self'`, `object-src 'none'`, `base-uri 'self'`) and appends a `sha256` hash of every inline `<script>`/`<style>` to `script-src`/`style-src`. An object customizes it. Skipped when the page already declares a CSP",
    },
    {
      name: "--no-output-html-csp",
      description: "Negative 'output-html-csp' option",
    },
    {
      name: "--output-html-csp-hash-function",
      description:
        "Hash algorithm used for inline `<script>`/`<style>` sources",
      args: {
        name: "value",
      },
    },
    {
      name: "--output-html-csp-nonce",
      description:
        "Placeholder nonce added to injected `<script>`/`<style>` tags and as a `'nonce-…'` source; rewrite it per request server-side",
      args: {
        name: "value",
      },
    },
    {
      name: "--output-html-favicon",
      description:
        "Favicon(s) for webpack-generated HTML (authored pages are left untouched). `false` (default) injects nothing; `true` injects the webpack logo; a string is a path to an icon; an object maps each `<link rel>` to an icon — a path string, an object with the icon `href` plus extra link attributes (`sizes`, `media`, `color`, `type`, `crossorigin`), or an array of these for multiple icons under the same `rel` (e.g. several `sizes`, or light/dark `media` variants); a function receives the page name and returns one of these. Every icon is emitted as a hashed asset",
      args: {
        name: "value",
        isOptional: true,
      },
    },
    {
      name: "--no-output-html-favicon",
      description: "Negative 'output-html-favicon' option",
    },
    {
      name: "--output-html-inject",
      description:
        'Where to place injected chunk `<script>`/`<link>` tags. `"body"` (default; `"head"` with `output.module`) keeps them next to the entry tag — end of `<body>` on generated pages; `"head"` moves them into `<head>`; `false` suppresses sibling-chunk injection (entry tags and resource hints remain)',
      args: {
        name: "value",
      },
    },
    {
      name: "--no-output-html-inject",
      description: "Negative 'output-html-inject' option",
    },
    {
      name: "--output-html-inline",
      description:
        'A regular expression matched against the chunk name; matching chunks are inlined. Inline the content of matching chunks directly into the HTML instead of emitting a separate `<script>`/`<link>` tag. `true` inlines every chunk; `"script"` inlines only JavaScript, `"style"` only CSS; an array of `RegExp` patterns matches against the chunk name and the filename template it is emitted under. A chunk another entry loads its runtime from by url stays a separate file',
      args: {
        name: "value",
        isOptional: true,
        isVariadic: true,
      },
    },
    {
      name: "--no-output-html-inline",
      description: "Negative 'output-html-inline' option",
    },
    {
      name: "--output-html-inline-reset",
      description:
        'Clear all items provided in \'output.html.inline\' configuration. Inline the content of matching chunks directly into the HTML instead of emitting a separate `<script>`/`<link>` tag. `true` inlines every chunk; `"script"` inlines only JavaScript, `"style"` only CSS; an array of `RegExp` patterns matches against the chunk name and the filename template it is emitted under. A chunk another entry loads its runtime from by url stays a separate file',
    },
    {
      name: "--output-html-integrity",
      description:
        "A hash algorithm name passed to Node.js `crypto.createHash` (e.g. 'sha256', 'sha384', 'sha512'). Add Subresource Integrity (SRI) `integrity` attributes to injected `<script>`/`<link>` tags. `true` uses `['sha384']`; an array sets the hash algorithms; a function receives each referenced asset and returns the algorithms to use or `false` to skip it",
      args: {
        name: "value",
        isOptional: true,
        isVariadic: true,
      },
    },
    {
      name: "--no-output-html-integrity",
      description: "Negative 'output-html-integrity' option",
    },
    {
      name: "--output-html-integrity-reset",
      description:
        "Clear all items provided in 'output.html.integrity' configuration. Add Subresource Integrity (SRI) `integrity` attributes to injected `<script>`/`<link>` tags. `true` uses `['sha384']`; an array sets the hash algorithms; a function receives each referenced asset and returns the algorithms to use or `false` to skip it",
    },
    {
      name: "--output-html-manifest",
      description:
        'Web app manifest for webpack-generated HTML (authored pages are left untouched). `false` (default) injects nothing. A string is a path to an existing `.webmanifest` file to link. An object is the manifest contents — serialized, emitted as a hashed `.webmanifest` and linked with `<link rel="manifest">`; its `icons`/`screenshots` `src` paths resolve like any request and are emitted as hashed assets. A function receives the page name and returns one of these',
      args: {
        name: "value",
      },
    },
    {
      name: "--no-output-html-manifest",
      description: "Negative 'output-html-manifest' option",
    },
    {
      name: "--output-html-script-loading",
      description:
        "How injected `<script>` tags load. `auto` (default) emits a module script for ES module output and `defer` otherwise; `defer` forces a deferred script; `blocking` emits a plain blocking script",
      args: {
        name: "value",
      },
    },
    {
      name: "--output-html-title",
      description:
        "Sets the `<title>` of the generated HTML page. Skipped if the HTML already contains a `<title>` element",
      args: {
        name: "value",
      },
    },
    {
      name: "--output-html-chunk-filename",
      description:
        "Specifies the filename template of output files on disk. You must **not** specify an absolute path here, but the path may contain folders separated by '/'! The specified path is joined with the value of the 'output.path' option to determine the location on disk",
      args: {
        name: "value",
        template: ["filepaths"],
      },
    },
    {
      name: "--output-html-filename",
      description:
        "Specifies the filename template of output files on disk. You must **not** specify an absolute path here, but the path may contain folders separated by '/'! The specified path is joined with the value of the 'output.path' option to determine the location on disk",
      args: {
        name: "value",
        template: ["filepaths"],
      },
    },
    {
      name: "--output-ignore-browser-warnings",
      description: "Ignore warnings in the browser",
    },
    {
      name: "--no-output-ignore-browser-warnings",
      description: "Negative 'output-ignore-browser-warnings' option",
    },
    {
      name: "--output-iife",
      description:
        "Wrap javascript code into IIFE's to avoid leaking into global scope",
    },
    {
      name: "--no-output-iife",
      description: "Negative 'output-iife' option",
    },
    {
      name: "--output-import-function-name",
      description:
        "The name of the native import() function (can be exchanged for a polyfill)",
      args: {
        name: "value",
      },
    },
    {
      name: "--output-import-meta-name",
      description:
        "The name of the native import.meta object (can be exchanged for a polyfill)",
      args: {
        name: "value",
      },
    },
    {
      name: "--output-library",
      description: "A part of the library name",
      args: {
        name: "value",

        isVariadic: true,
      },
    },
    {
      name: "--output-library-reset",
      description:
        "Clear all items provided in 'output.library' configuration. The name of the library (some types allow unnamed libraries too)",
    },
    {
      name: "--output-library-amd",
      description: "Name of the exposed AMD library in the UMD",
      args: {
        name: "value",
      },
    },
    {
      name: "--output-library-commonjs",
      description: "Name of the exposed commonjs export in the UMD",
      args: {
        name: "value",
      },
    },
    {
      name: "--output-library-root",
      description:
        "Part of the name of the property exposed globally by a UMD library",
      args: {
        name: "value",

        isVariadic: true,
      },
    },
    {
      name: "--output-library-root-reset",
      description:
        "Clear all items provided in 'output.library.root' configuration. Name of the property exposed globally by a UMD library",
    },
    {
      name: "--output-library-amd-container",
      description:
        "Add a container for define/require functions in the AMD module",
      args: {
        name: "value",
      },
    },
    {
      name: "--output-library-auxiliary-comment",
      description: "Append the same comment above each import style",
      args: {
        name: "value",
      },
    },
    {
      name: "--output-library-auxiliary-comment-amd",
      description: "Set comment for `amd` section in UMD",
      args: {
        name: "value",
      },
    },
    {
      name: "--output-library-auxiliary-comment-commonjs",
      description: "Set comment for `commonjs` (exports) section in UMD",
      args: {
        name: "value",
      },
    },
    {
      name: "--output-library-auxiliary-comment-commonjs2",
      description:
        "Set comment for `commonjs2` (module.exports) section in UMD",
      args: {
        name: "value",
      },
    },
    {
      name: "--output-library-auxiliary-comment-root",
      description: "Set comment for `root` (global variable) section in UMD",
      args: {
        name: "value",
      },
    },
    {
      name: "--output-library-entry-exports",
      description:
        "Which modules of an entry the library exposes the exports of: only the last one, or all of them, where a name more than one module binds differently is left out, as 'export *' does",
      args: {
        name: "value",
      },
    },
    {
      name: "--output-library-export",
      description: "Part of the export that should be exposed as library",
      args: {
        name: "value",

        isVariadic: true,
      },
    },
    {
      name: "--output-library-export-reset",
      description:
        "Clear all items provided in 'output.library.export' configuration. Specify which export should be exposed as library",
    },
    {
      name: "--output-library-name",
      description: "A part of the library name",
      args: {
        name: "value",

        isVariadic: true,
      },
    },
    {
      name: "--output-library-name-reset",
      description:
        "Clear all items provided in 'output.library.name' configuration. The name of the library (some types allow unnamed libraries too)",
    },
    {
      name: "--output-library-name-amd",
      description: "Name of the exposed AMD library in the UMD",
      args: {
        name: "value",
      },
    },
    {
      name: "--output-library-name-commonjs",
      description: "Name of the exposed commonjs export in the UMD",
      args: {
        name: "value",
      },
    },
    {
      name: "--output-library-name-root",
      description:
        "Part of the name of the property exposed globally by a UMD library",
      args: {
        name: "value",

        isVariadic: true,
      },
    },
    {
      name: "--output-library-name-root-reset",
      description:
        "Clear all items provided in 'output.library.name.root' configuration. Name of the property exposed globally by a UMD library",
    },
    {
      name: "--output-library-type",
      description:
        "Type of library (types included by default are 'var', 'module', 'assign', 'assign-properties', 'this', 'window', 'self', 'global', 'commonjs', 'commonjs2', 'commonjs-module', 'commonjs-static', 'amd', 'amd-require', 'umd', 'umd2', 'jsonp', 'system', but others might be added by plugins)",
      args: {
        name: "value",
      },
    },
    {
      name: "--output-library-umd-amd-container",
      description:
        "Add a branch to the UMD wrapper for an AMD-style loader exposing `define` on a container object, given as a dot-separated path, after the `define.amd` branch",
      args: {
        name: "value",
      },
    },
    {
      name: "--output-library-umd-named-define",
      description:
        "If `output.libraryTarget` is set to umd and `output.library` is set, setting this to true will name the AMD module",
    },
    {
      name: "--no-output-library-umd-named-define",
      description: "Negative 'output-library-umd-named-define' option",
    },
    {
      name: "--output-module",
      description: "Output javascript files as module source type",
    },
    {
      name: "--no-output-module",
      description: "Negative 'output-module' option",
    },
    {
      name: ["--output-path", "-o"],
      description: "The output directory as **absolute path** (required)",
      args: {
        name: "value",
      },
    },
    {
      name: "--output-pathinfo",
      description: "Include comments with information about the modules",
      args: {
        name: "value",
        isOptional: true,
      },
    },
    {
      name: "--no-output-pathinfo",
      description: "Negative 'output-pathinfo' option",
    },
    {
      name: "--output-public-path",
      description:
        "The 'publicPath' specifies the public URL address of the output files when referenced in a browser",
      args: {
        name: "value",
      },
    },
    {
      name: "--output-resource-hints-as",
      description:
        "The `as` attribute (`script`, `style`, `font`, …); defaults to `script` for chunk/entry references",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--output-resource-hints-chunk",
      description:
        "Name of a chunk to hint; its emitted URL is resolved automatically",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--output-resource-hints-crossorigin",
      description: "The CORS mode; `true` maps to `anonymous`",
      args: {
        name: "value",
        isOptional: true,
        isVariadic: true,
      },
    },
    {
      name: "--no-output-resource-hints-crossorigin",
      description: "Negative 'output-resource-hints-crossorigin' option",
    },
    {
      name: "--output-resource-hints-entry",
      description:
        "Name of an entrypoint to hint; expands to one hint per initial chunk",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--output-resource-hints-fetch-priority",
      description:
        "The `fetchpriority` attribute. Emitted on `preload` / `modulepreload` and on `prefetch` (the spec now permits it there)",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--output-resource-hints-href",
      description:
        "A literal URL used verbatim (external resource, `preconnect` origin, or an already-hashed asset)",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--output-resource-hints-integrity",
      description:
        "Subresource Integrity for a chunk/entry reference. Follows `output.html.integrity` by default; set `false` to opt this hint out",
    },
    {
      name: "--no-output-resource-hints-integrity",
      description: "Negative 'output-resource-hints-integrity' option",
    },
    {
      name: "--output-resource-hints-media",
      description: "The `media` attribute",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--output-resource-hints-rel",
      description: "The `rel` of the resource hint",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--output-resource-hints-type",
      description: "The `type` attribute (MIME type)",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--output-resource-hints-reset",
      description:
        'Clear all items provided in \'output.resourceHints\' configuration. Initial dependency-graph chunk hints. `true` auto-emits `<link rel="modulepreload">` (ESM output) or `<link rel="preload" as="script">` (classic) for each of the entry\'s initial dependency chunks; `"prefetch"` uses `<link rel="prefetch">`; `"preload"` is an alias of `true`; `false` disables chunk hints (URL-asset hints from magic comments / `urlHints` still fire); `"none"` is a hard off switch (no `<link>` anywhere, empty stats / manifest); an array of `HtmlResourceHint` descriptors replaces the auto set; a function receives the auto `defaultHints` plus context (`entryName`, `entrypoint`, `hostType: "html" | "js"`, `compilation`) and returns the final list (replaces the removed `resolveDependencies` hook)',
    },
    {
      name: "--output-resource-hints",
      description:
        'Initial dependency-graph chunk hints. `true` auto-emits `<link rel="modulepreload">` (ESM output) or `<link rel="preload" as="script">` (classic) for each of the entry\'s initial dependency chunks; `"prefetch"` uses `<link rel="prefetch">`; `"preload"` is an alias of `true`; `false` disables chunk hints (URL-asset hints from magic comments / `urlHints` still fire); `"none"` is a hard off switch (no `<link>` anywhere, empty stats / manifest); an array of `HtmlResourceHint` descriptors replaces the auto set; a function receives the auto `defaultHints` plus context (`entryName`, `entrypoint`, `hostType: "html" | "js"`, `compilation`) and returns the final list (replaces the removed `resolveDependencies` hook)',
      args: {
        name: "value",
        isOptional: true,
      },
    },
    {
      name: "--no-output-resource-hints",
      description: "Negative 'output-resource-hints' option",
    },
    {
      name: "--output-resource-hints-dedupe",
      description:
        'Skip the runtime-injected `<link rel="prefetch">` for a chunk that is already preloaded or prefetched in the document (avoids a duplicate request in some browsers such as Chrome)',
    },
    {
      name: "--no-output-resource-hints-dedupe",
      description: "Negative 'output-resource-hints-dedupe' option",
    },
    {
      name: "--output-resource-hints-initial-as",
      description:
        "The `as` attribute (`script`, `style`, `font`, …); defaults to `script` for chunk/entry references",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--output-resource-hints-initial-chunk",
      description:
        "Name of a chunk to hint; its emitted URL is resolved automatically",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--output-resource-hints-initial-crossorigin",
      description: "The CORS mode; `true` maps to `anonymous`",
      args: {
        name: "value",
        isOptional: true,
        isVariadic: true,
      },
    },
    {
      name: "--no-output-resource-hints-initial-crossorigin",
      description:
        "Negative 'output-resource-hints-initial-crossorigin' option",
    },
    {
      name: "--output-resource-hints-initial-entry",
      description:
        "Name of an entrypoint to hint; expands to one hint per initial chunk",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--output-resource-hints-initial-fetch-priority",
      description:
        "The `fetchpriority` attribute. Emitted on `preload` / `modulepreload` and on `prefetch` (the spec now permits it there)",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--output-resource-hints-initial-href",
      description:
        "A literal URL used verbatim (external resource, `preconnect` origin, or an already-hashed asset)",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--output-resource-hints-initial-integrity",
      description:
        "Subresource Integrity for a chunk/entry reference. Follows `output.html.integrity` by default; set `false` to opt this hint out",
    },
    {
      name: "--no-output-resource-hints-initial-integrity",
      description: "Negative 'output-resource-hints-initial-integrity' option",
    },
    {
      name: "--output-resource-hints-initial-media",
      description: "The `media` attribute",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--output-resource-hints-initial-rel",
      description: "The `rel` of the resource hint",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--output-resource-hints-initial-type",
      description: "The `type` attribute (MIME type)",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--output-resource-hints-initial-reset",
      description:
        'Clear all items provided in \'output.resourceHints.initial\' configuration. Initial dependency-graph chunk hints. `true` auto-emits `<link rel="modulepreload">` (ESM output) or `<link rel="preload" as="script">` (classic) for each of the entry\'s initial dependency chunks; `"prefetch"` uses `<link rel="prefetch">`; `"preload"` is an alias of `true`; `false` disables chunk hints (URL-asset hints from magic comments / `urlHints` still fire); `"none"` is a hard off switch (no `<link>` anywhere, empty stats / manifest); an array of `HtmlResourceHint` descriptors replaces the auto set; a function receives the auto `defaultHints` plus context (`entryName`, `entrypoint`, `hostType: "html" | "js"`, `compilation`) and returns the final list (replaces the removed `resolveDependencies` hook)',
    },
    {
      name: "--output-resource-hints-initial",
      description:
        'Initial dependency-graph chunk hints. `true` auto-emits `<link rel="modulepreload">` (ESM output) or `<link rel="preload" as="script">` (classic) for each of the entry\'s initial dependency chunks; `"prefetch"` uses `<link rel="prefetch">`; `"preload"` is an alias of `true`; `false` disables chunk hints (URL-asset hints from magic comments / `urlHints` still fire); `"none"` is a hard off switch (no `<link>` anywhere, empty stats / manifest); an array of `HtmlResourceHint` descriptors replaces the auto set; a function receives the auto `defaultHints` plus context (`entryName`, `entrypoint`, `hostType: "html" | "js"`, `compilation`) and returns the final list (replaces the removed `resolveDependencies` hook)',
      args: {
        name: "value",
        isOptional: true,
      },
    },
    {
      name: "--no-output-resource-hints-initial",
      description: "Negative 'output-resource-hints-initial' option",
    },
    {
      name: "--output-resource-hints-manifest",
      description:
        "Emit a JSON manifest of the resolved resource hints for each entrypoint (the same descriptors as `stats.entrypoints[].resourceHints`) as an output asset at this path. Lets an SSR server inject the `<link>` tags itself without walking the chunk graph — webpack's analogue of Vite's `build.ssrManifest`. Empty when `initial` is `\"none\"`",
      args: {
        name: "value",
      },
    },
    {
      name: "--output-resource-hints-module-preload-polyfill",
      description:
        'Inject a tiny inline `<script>` polyfill for `<link rel="modulepreload">` into extracted HTML pages. Defaults from the target\'s modulepreload support (`output.environment.modulePreload`) — `true` when the environment lacks native support, `false` when it has it. Set `false` to never inject (the `<link>` tags are still emitted but do nothing on browsers without support — useful under a strict CSP that forbids inline scripts)',
    },
    {
      name: "--no-output-resource-hints-module-preload-polyfill",
      description:
        "Negative 'output-resource-hints-module-preload-polyfill' option",
    },
    {
      name: "--output-resource-hints-preconnect",
      description:
        'Auto-emit `<link rel="preconnect">` for the origin of a cross-origin `output.publicPath` (the origin bundles and assets are served from) into extracted HTML entries and the resource-hint stats / manifest. Mirrors `output.crossOriginLoading`. No-op when `publicPath` is relative or `"auto"`',
    },
    {
      name: "--no-output-resource-hints-preconnect",
      description: "Negative 'output-resource-hints-preconnect' option",
    },
    {
      name: "--output-resource-hints-url-hints-as",
      description: "Default `as` attribute (script / style / font / image / …)",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--output-resource-hints-url-hints-exclude",
      description:
        "One default-hint rule for URL-referenced assets emitted by this parser (JS `new URL(...)`, CSS `url(...)`, HTML `<img src>` / `<link href>` / `<script src>`). `test` / `include` / `exclude` match against the asset's request; omit all three to apply to every asset. Matching rules set the same fields a `webpackPrefetch` / `webpackPreload` / `webpackAs` / `webpackType` / `webpackMedia` / `webpackFetchPriority` magic comment would; explicit magic comments on the same URL still win",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--output-resource-hints-url-hints-exclude-glob",
      description:
        "A glob pattern matched against a path, using `/` as path separator on every OS; a `!` prefix excludes what it matches",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--output-resource-hints-url-hints-exclude-not",
      description: "Logical NOT",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--output-resource-hints-url-hints-exclude-not-glob",
      description:
        "A glob pattern matched against a path, using `/` as path separator on every OS; a `!` prefix excludes what it matches",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--output-resource-hints-url-hints-fetch-priority",
      description: "Default fetchpriority for prefetch / preload links",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--no-output-resource-hints-url-hints-fetch-priority",
      description:
        "Negative 'output-resource-hints-url-hints-fetch-priority' option",
    },
    {
      name: "--output-resource-hints-url-hints-include",
      description:
        "One default-hint rule for URL-referenced assets emitted by this parser (JS `new URL(...)`, CSS `url(...)`, HTML `<img src>` / `<link href>` / `<script src>`). `test` / `include` / `exclude` match against the asset's request; omit all three to apply to every asset. Matching rules set the same fields a `webpackPrefetch` / `webpackPreload` / `webpackAs` / `webpackType` / `webpackMedia` / `webpackFetchPriority` magic comment would; explicit magic comments on the same URL still win",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--output-resource-hints-url-hints-include-glob",
      description:
        "A glob pattern matched against a path, using `/` as path separator on every OS; a `!` prefix excludes what it matches",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--output-resource-hints-url-hints-include-not",
      description: "Logical NOT",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--output-resource-hints-url-hints-include-not-glob",
      description:
        "A glob pattern matched against a path, using `/` as path separator on every OS; a `!` prefix excludes what it matches",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--output-resource-hints-url-hints-media",
      description: 'Default `media` attribute (e.g. `"(min-width: 800px)"`)',
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--output-resource-hints-url-hints-prefetch",
      description:
        'When true, emit `<link rel="prefetch">` for matching assets without an explicit hint comment',
    },
    {
      name: "--no-output-resource-hints-url-hints-prefetch",
      description: "Negative 'output-resource-hints-url-hints-prefetch' option",
    },
    {
      name: "--output-resource-hints-url-hints-preload",
      description:
        'When true, emit `<link rel="preload">` for matching assets without an explicit hint comment',
    },
    {
      name: "--no-output-resource-hints-url-hints-preload",
      description: "Negative 'output-resource-hints-url-hints-preload' option",
    },
    {
      name: "--output-resource-hints-url-hints-test",
      description:
        "One default-hint rule for URL-referenced assets emitted by this parser (JS `new URL(...)`, CSS `url(...)`, HTML `<img src>` / `<link href>` / `<script src>`). `test` / `include` / `exclude` match against the asset's request; omit all three to apply to every asset. Matching rules set the same fields a `webpackPrefetch` / `webpackPreload` / `webpackAs` / `webpackType` / `webpackMedia` / `webpackFetchPriority` magic comment would; explicit magic comments on the same URL still win",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--output-resource-hints-url-hints-test-glob",
      description:
        "A glob pattern matched against a path, using `/` as path separator on every OS; a `!` prefix excludes what it matches",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--output-resource-hints-url-hints-test-not",
      description: "Logical NOT",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--output-resource-hints-url-hints-test-not-glob",
      description:
        "A glob pattern matched against a path, using `/` as path separator on every OS; a `!` prefix excludes what it matches",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--output-resource-hints-url-hints-type",
      description: "Default `type` attribute (MIME)",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--output-resource-hints-url-hints-reset",
      description:
        "Clear all items provided in 'output.resourceHints.urlHints' configuration. Project-wide URL-referenced-asset hint rules, applied as the base `urlHints` of every parser (JavaScript `new URL(...)`, CSS `url(...)`, HTML `<img src>` / `<link href>`). Parser-scoped `module.parser.<type>.urlHints` rules and per-URL magic comments still override these",
    },
    {
      name: "--output-script-type",
      description:
        'This option enables loading async chunks via a custom script type, such as script type="module"',
      args: {
        name: "value",
      },
    },
    {
      name: "--no-output-script-type",
      description: "Negative 'output-script-type' option",
    },
    {
      name: "--output-source-map-filename",
      description:
        "The filename of the SourceMaps for the JavaScript files. They are inside the 'output.path' directory",
      args: {
        name: "value",

        template: ["filepaths", "folders"],
      },
    },
    {
      name: "--output-source-prefix",
      description:
        "Prefixes every line of the source in the bundle with this string",
      args: {
        name: "value",
      },
    },
    {
      name: "--output-strict-module-error-handling",
      description:
        "Handles error in module loading correctly at a performance cost. This will handle module error compatible with the EcmaScript Modules spec",
    },
    {
      name: "--no-output-strict-module-error-handling",
      description: "Negative 'output-strict-module-error-handling' option",
    },
    {
      name: "--output-strict-module-exception-handling",
      description:
        "Handles exceptions in module loading correctly at a performance cost (Deprecated). This will handle module error compatible with the Node.js CommonJS way",
      deprecated: true,
    },
    {
      name: "--no-output-strict-module-exception-handling",
      description: "Negative 'output-strict-module-exception-handling' option",
    },
    {
      name: "--output-strict-module-resolution",
      description:
        "Emit a runtime check that throws a 'MODULE_NOT_FOUND' error when a required module id is missing from the bundle",
    },
    {
      name: "--no-output-strict-module-resolution",
      description: "Negative 'output-strict-module-resolution' option",
    },
    {
      name: "--output-trusted-types",
      description:
        "Use a Trusted Types policy to create urls for chunks. 'output.uniqueName' is used a default policy name. Passing a string sets a custom policy name. The name of the Trusted Types policy created by webpack to serve bundle chunks",
      args: {
        name: "value",
        isOptional: true,
      },
    },
    {
      name: "--output-trusted-types-on-policy-creation-failure",
      description:
        "If the call to `trustedTypes.createPolicy(...)` fails -- e.g., due to the policy name missing from the CSP `trusted-types` list, or it being a duplicate name, etc. -- controls whether to continue with loading in the hope that `require-trusted-types-for 'script'` isn't enforced yet, versus fail immediately. Default behavior is 'stop'",
      args: {
        name: "value",
      },
    },
    {
      name: "--output-trusted-types-policy-name",
      description:
        "The name of the Trusted Types policy created by webpack to serve bundle chunks",
      args: {
        name: "value",
      },
    },
    {
      name: "--output-unique-name",
      description:
        "A unique name of the webpack build to avoid multiple webpack runtimes to conflict when using globals",
      args: {
        name: "value",
      },
    },
    {
      name: "--output-wasm-loading",
      description:
        "The method of loading WebAssembly Modules (methods included by default are 'fetch' (web/WebWorker), 'async-node' (node.js), but others might be added by plugins)",
      args: {
        name: "value",
      },
    },
    {
      name: "--no-output-wasm-loading",
      description: "Negative 'output-wasm-loading' option",
    },
    {
      name: "--output-wasm-streaming-fallback",
      description:
        "Fall back to non-streaming WebAssembly instantiation when streaming compilation fails because the server does not serve `.wasm` files with the `application/wasm` MIME type",
    },
    {
      name: "--no-output-wasm-streaming-fallback",
      description: "Negative 'output-wasm-streaming-fallback' option",
    },
    {
      name: "--output-webassembly-module-filename",
      description:
        "The filename of WebAssembly modules as relative path inside the 'output.path' directory",
      args: {
        name: "value",

        template: ["filepaths", "folders"],
      },
    },
    {
      name: "--output-worker-chunk-filename",
      description:
        "Specifies the filename template of output files on disk. You must **not** specify an absolute path here, but the path may contain folders separated by '/'! The specified path is joined with the value of the 'output.path' option to determine the location on disk",
      args: {
        name: "value",
        template: ["filepaths"],
      },
    },
    {
      name: "--output-worker-chunk-loading",
      description:
        "The method of loading chunks (methods included by default are 'jsonp' (web), 'import' (ESM), 'importScripts' (WebWorker), 'require' (sync node.js), 'async-node' (async node.js), but others might be added by plugins)",
      args: {
        name: "value",
      },
    },
    {
      name: "--no-output-worker-chunk-loading",
      description: "Negative 'output-worker-chunk-loading' option",
    },
    {
      name: "--output-worker-public-path",
      description:
        "Worker public path. Much like the public path, this sets the location where the worker script file is intended to be found. If not set, webpack will use the publicPath. Don't set this option unless your worker scripts are located at a different path from your other script files",
      args: {
        name: "value",
      },
    },
    {
      name: "--output-worker-wasm-loading",
      description:
        "The method of loading WebAssembly Modules (methods included by default are 'fetch' (web/WebWorker), 'async-node' (node.js), but others might be added by plugins)",
      args: {
        name: "value",
      },
    },
    {
      name: "--no-output-worker-wasm-loading",
      description: "Negative 'output-worker-wasm-loading' option",
    },
    {
      name: "--parallelism",
      description:
        "The number of parallel processed modules in the compilation",
      args: {
        name: "value",
      },
    },
    {
      name: "--no-performance",
      description: "Negative 'performance' option",
    },
    {
      name: "--performance-all",
      description:
        "Fallback value for the performance checks that are not set individually (has precedence over local webpack defaults). Does not apply to 'hints', 'maxAssetSize' or 'maxEntrypointSize'",
    },
    {
      name: "--no-performance-all",
      description: "Negative 'performance-all' option",
    },
    {
      name: "--performance-analyzable-bailouts",
      description:
        "Report references in ESM output that keep webpack's runtime form, naming what stops each from being written as a literal 'import()' or 'new URL()' another bundler can follow (requires 'hints' to be enabled)",
    },
    {
      name: "--no-performance-analyzable-bailouts",
      description: "Negative 'performance-analyzable-bailouts' option",
    },
    {
      name: "--performance-async-chunk-waterfalls",
      description:
        "Report chains of 'import()' calls where each chunk can only be requested once the one before it has arrived, so the levels cost round trips in series (requires 'hints' to be enabled)",
    },
    {
      name: "--no-performance-async-chunk-waterfalls",
      description: "Negative 'performance-async-chunk-waterfalls' option",
    },
    {
      name: "--performance-broad-contexts",
      description:
        "Report 'require.context' calls with no filter, which bundle every file under a directory (requires 'hints' to be enabled)",
    },
    {
      name: "--no-performance-broad-contexts",
      description: "Negative 'performance-broad-contexts' option",
    },
    {
      name: "--performance-cache-effectiveness",
      description:
        "Report how much of the module graph the cache reused, and the modules that can never be reused (requires 'hints' to be enabled)",
    },
    {
      name: "--no-performance-cache-effectiveness",
      description: "Negative 'performance-cache-effectiveness' option",
    },
    {
      name: "--performance-circular-dependencies",
      description:
        "Report groups of modules that import each other synchronously (requires 'hints' to be enabled)",
    },
    {
      name: "--no-performance-circular-dependencies",
      description: "Negative 'performance-circular-dependencies' option",
    },
    {
      name: "--performance-conflicting-resource-hints",
      description:
        "Report chunks asked for as both prefetch and preload from the same place, where the two directives contradict each other",
    },
    {
      name: "--no-performance-conflicting-resource-hints",
      description: "Negative 'performance-conflicting-resource-hints' option",
    },
    {
      name: "--performance-duplicate-modules",
      description:
        "Report modules emitted into more than one chunk, and the bytes the extra copies cost (requires 'hints' to be enabled)",
    },
    {
      name: "--no-performance-duplicate-modules",
      description: "Negative 'performance-duplicate-modules' option",
    },
    {
      name: "--performance-duplicate-packages",
      description:
        "Report packages which are included more than once, in different versions or as multiple copies of the same version (requires 'hints' to be enabled)",
    },
    {
      name: "--no-performance-duplicate-packages",
      description: "Negative 'performance-duplicate-packages' option",
    },
    {
      name: "--performance-dynamic-exports",
      description:
        "Report modules whose exports cannot be read statically, which stops anything importing them from being tree-shaken (requires 'hints' to be enabled)",
    },
    {
      name: "--no-performance-dynamic-exports",
      description: "Negative 'performance-dynamic-exports' option",
    },
    {
      name: "--performance-eval-usage",
      description:
        "Report modules that call 'eval' directly, which stops minification, scope hoisting and tree shaking (requires 'hints' to be enabled)",
    },
    {
      name: "--no-performance-eval-usage",
      description: "Negative 'performance-eval-usage' option",
    },
    {
      name: "--performance-hints",
      description:
        "Sets the format of the hints: warnings, errors, stats-only or nothing at all",
      args: {
        name: "value",
      },
    },
    {
      name: "--no-performance-hints",
      description: "Negative 'performance-hints' option",
    },
    {
      name: "--performance-hotspots",
      description:
        "Report the loaders, plugins and hooks that hold the main thread, timing each one's own code rather than what it waited for (requires 'hints' to be enabled)",
    },
    {
      name: "--no-performance-hotspots",
      description: "Negative 'performance-hotspots' option",
    },
    {
      name: "--performance-inlined-assets",
      description:
        "Report assets inlined as data urls that are large enough for the base64 cost and the lost caching to outweigh the request they save (requires 'hints' to be enabled)",
    },
    {
      name: "--no-performance-inlined-assets",
      description: "Negative 'performance-inlined-assets' option",
    },
    {
      name: "--performance-large-modules",
      description:
        "Report a single module that makes up most of the chunk it is in (requires 'hints' to be enabled)",
    },
    {
      name: "--no-performance-large-modules",
      description: "Negative 'performance-large-modules' option",
    },
    {
      name: "--performance-legacy-javascript",
      description:
        "Report polyfill packages that emulate language features the target already supports natively (requires 'hints' to be enabled)",
    },
    {
      name: "--no-performance-legacy-javascript",
      description: "Negative 'performance-legacy-javascript' option",
    },
    {
      name: "--performance-max-asset-size",
      description:
        "File size limit (in bytes) when exceeded, that webpack will provide performance hints",
      args: {
        name: "value",
      },
    },
    {
      name: "--performance-max-entrypoint-size",
      description: "Total size of an entry point (in bytes)",
      args: {
        name: "value",
      },
    },
    {
      name: "--performance-missing-side-effects",
      description:
        "Report packages that keep unused code in the bundle because their package.json does not declare 'sideEffects' (requires 'hints' to be enabled)",
    },
    {
      name: "--no-performance-missing-side-effects",
      description: "Negative 'performance-missing-side-effects' option",
    },
    {
      name: "--performance-mixed-exports",
      description:
        "Report an entry that exports a default beside named exports for a CommonJS library, where a consumer receives the namespace object (requires 'hints' to be enabled)",
    },
    {
      name: "--no-performance-mixed-exports",
      description: "Negative 'performance-mixed-exports' option",
    },
    {
      name: "--performance-os-dependent-rules",
      description:
        "Report conditions in 'module.rules' that hardcode a path separator, so they only match on one operating system",
    },
    {
      name: "--no-performance-os-dependent-rules",
      description: "Negative 'performance-os-dependent-rules' option",
    },
    {
      name: "--performance-pure-annotations",
      description:
        "Report '/*#__PURE__*/' annotations that sit somewhere the parser does not read them (requires 'hints' to be enabled)",
    },
    {
      name: "--no-performance-pure-annotations",
      description: "Negative 'performance-pure-annotations' option",
    },
    {
      name: "--performance-redundant-dynamic-imports",
      description:
        "Report 'import()' calls whose module is already loaded where the call runs, so they defer nothing (requires 'hints' to be enabled)",
    },
    {
      name: "--no-performance-redundant-dynamic-imports",
      description: "Negative 'performance-redundant-dynamic-imports' option",
    },
    {
      name: "--performance-scope-hoisting-bailouts",
      description:
        "Report modules that could not be merged into their importer's scope, and why (requires 'hints' to be enabled)",
    },
    {
      name: "--no-performance-scope-hoisting-bailouts",
      description: "Negative 'performance-scope-hoisting-bailouts' option",
    },
    {
      name: "--performance-source-maps",
      description:
        "Report source maps that cost more than they give: a production 'devtool' that writes the map into the JavaScript, and modules a loader transformed without returning a map, which leaves positions pointing at the loader's output (requires 'hints' to be enabled)",
    },
    {
      name: "--no-performance-source-maps",
      description: "Negative 'performance-source-maps' option",
    },
    {
      name: "--performance-split-chunks-capped",
      description:
        "Report splits 'optimization.splitChunks' refused because 'maxInitialRequests' or 'maxAsyncRequests' was already reached (requires 'hints' to be enabled)",
    },
    {
      name: "--no-performance-split-chunks-capped",
      description: "Negative 'performance-split-chunks-capped' option",
    },
    {
      name: "--performance-tiny-chunks",
      description:
        "Report chunks loaded on demand that carry less than 'optimization.splitChunks.minSize' (requires 'hints' to be enabled)",
    },
    {
      name: "--no-performance-tiny-chunks",
      description: "Negative 'performance-tiny-chunks' option",
    },
    {
      name: "--performance-top-level-this",
      description:
        "Report modules that read 'this' at the top level of an ES module, where it is 'undefined' rather than the module object or the global one (requires 'hints' to be enabled)",
    },
    {
      name: "--no-performance-top-level-this",
      description: "Negative 'performance-top-level-this' option",
    },
    {
      name: "--performance-unsplit-vendors",
      description:
        "Report initial chunks that mix 'node_modules' code with application code, so every application change re-downloads the dependencies too (requires 'hints' to be enabled)",
    },
    {
      name: "--no-performance-unsplit-vendors",
      description: "Negative 'performance-unsplit-vendors' option",
    },
    {
      name: "--performance-unused-assets",
      description:
        "Report asset files emitted for an import whose binding nothing reads, so the bytes ship for nothing (requires 'hints' to be enabled)",
    },
    {
      name: "--no-performance-unused-assets",
      description: "Negative 'performance-unused-assets' option",
    },
    {
      name: "--performance-unused-config",
      description:
        "Report configuration that no build used: 'resolve.alias' entries nothing matched, 'DefinePlugin' keys nothing referenced, 'externals' nothing imported, 'module.rules' that never matched, and Module Federation 'shared' keys or 'remotes' nothing imported",
    },
    {
      name: "--no-performance-unused-config",
      description: "Negative 'performance-unused-config' option",
    },
    {
      name: "--performance-unused-modules",
      description:
        "Report modules bundled although nothing uses what they export, naming the re-export or the side-effect statement that kept each one (requires 'hints' to be enabled)",
    },
    {
      name: "--no-performance-unused-modules",
      description: "Negative 'performance-unused-modules' option",
    },
    {
      name: "--profile",
      description: "Capture timing information for each module",
    },
    {
      name: "--no-profile",
      description: "Negative 'profile' option",
    },
    {
      name: "--records-input-path",
      description: "Store compiler state to a json file",
      args: {
        name: "value",
      },
    },
    {
      name: "--no-records-input-path",
      description: "Negative 'records-input-path' option",
    },
    {
      name: "--records-output-path",
      description: "Load compiler state from a json file",
      args: {
        name: "value",
      },
    },
    {
      name: "--no-records-output-path",
      description: "Negative 'records-output-path' option",
    },
    {
      name: "--records-path",
      description:
        "Store/Load compiler state from/to a json file. This will result in persistent ids of modules and chunks. An absolute path is expected. `recordsPath` is used for `recordsInputPath` and `recordsOutputPath` if they left undefined",
      args: {
        name: "value",
      },
    },
    {
      name: "--no-records-path",
      description: "Negative 'records-path' option",
    },
    {
      name: "--resolve-alias-alias",
      description: "Ignore request (replace with empty module). New request",
      args: {
        name: "value",

        isVariadic: true,
      },
    },
    {
      name: "--no-resolve-alias-alias",
      description: "Negative 'resolve-alias-alias' option",
    },
    {
      name: "--resolve-alias-name",
      description: "Request to be redirected",
      args: {
        name: "value",

        isVariadic: true,
      },
    },
    {
      name: "--resolve-alias-only-module",
      description: "Redirect only exact matching request",
    },
    {
      name: "--no-resolve-alias-only-module",
      description: "Negative 'resolve-alias-only-module' option",
    },
    {
      name: "--resolve-alias-reset",
      description:
        "Clear all items provided in 'resolve.alias' configuration. Redirect module requests",
    },
    {
      name: "--resolve-alias-fields",
      description:
        "Field in the description file (usually package.json) which are used to redirect requests inside the module",
      args: {
        name: "value",

        isVariadic: true,
      },
    },
    {
      name: "--resolve-alias-fields-reset",
      description:
        "Clear all items provided in 'resolve.aliasFields' configuration. Fields in the description file (usually package.json) which are used to redirect requests inside the module",
    },
    {
      name: "--resolve-cache",
      description:
        "Enable caching of successfully resolved requests (cache entries are revalidated)",
    },
    {
      name: "--no-resolve-cache",
      description: "Negative 'resolve-cache' option",
    },
    {
      name: "--resolve-cache-with-context",
      description:
        "Include the context information in the cache identifier when caching",
    },
    {
      name: "--no-resolve-cache-with-context",
      description: "Negative 'resolve-cache-with-context' option",
    },
    {
      name: "--resolve-condition-names",
      description: "Condition names for exports field entry point",
      args: {
        name: "value",

        isVariadic: true,
      },
    },
    {
      name: "--resolve-condition-names-reset",
      description:
        "Clear all items provided in 'resolve.conditionNames' configuration. Condition names for exports field entry point",
    },
    {
      name: "--resolve-description-files",
      description:
        "Filename used to find a description file (like a package.json)",
      args: {
        name: "value",

        isVariadic: true,
        template: ["filepaths"],
      },
    },
    {
      name: "--resolve-description-files-reset",
      description:
        "Clear all items provided in 'resolve.descriptionFiles' configuration. Filenames used to find a description file (like a package.json)",
    },
    {
      name: "--resolve-enforce-extension",
      description:
        "Enforce the resolver to use one of the extensions from the extensions option (User must specify requests without extension)",
    },
    {
      name: "--no-resolve-enforce-extension",
      description: "Negative 'resolve-enforce-extension' option",
    },
    {
      name: "--resolve-exports-fields",
      description:
        "Field name from the description file (usually package.json) which is used to provide entry points of a package",
      args: {
        name: "value",

        isVariadic: true,
      },
    },
    {
      name: "--resolve-exports-fields-reset",
      description:
        "Clear all items provided in 'resolve.exportsFields' configuration. Field names from the description file (usually package.json) which are used to provide entry points of a package",
    },
    {
      name: "--resolve-extensions",
      description:
        "Extension added to the request when trying to find the file",
      args: {
        name: "value",

        isVariadic: true,
      },
    },
    {
      name: "--resolve-extensions-reset",
      description:
        "Clear all items provided in 'resolve.extensions' configuration. Extensions added to the request when trying to find the file",
    },
    {
      name: "--resolve-fallback-alias",
      description: "Ignore request (replace with empty module). New request",
      args: {
        name: "value",

        isVariadic: true,
      },
    },
    {
      name: "--no-resolve-fallback-alias",
      description: "Negative 'resolve-fallback-alias' option",
    },
    {
      name: "--resolve-fallback-name",
      description: "Request to be redirected",
      args: {
        name: "value",

        isVariadic: true,
      },
    },
    {
      name: "--resolve-fallback-only-module",
      description: "Redirect only exact matching request",
    },
    {
      name: "--no-resolve-fallback-only-module",
      description: "Negative 'resolve-fallback-only-module' option",
    },
    {
      name: "--resolve-fallback-reset",
      description:
        "Clear all items provided in 'resolve.fallback' configuration. Redirect module requests",
    },
    {
      name: "--resolve-fully-specified",
      description:
        "Treats the request specified by the user as fully specified, meaning no extensions are added and the mainFiles in directories are not resolved (This doesn't affect requests from mainFields, aliasFields or aliases)",
    },
    {
      name: "--no-resolve-fully-specified",
      description: "Negative 'resolve-fully-specified' option",
    },
    {
      name: "--resolve-imports-fields",
      description:
        "Field name from the description file (usually package.json) which is used to provide internal request of a package (requests starting with # are considered as internal)",
      args: {
        name: "value",

        isVariadic: true,
      },
    },
    {
      name: "--resolve-imports-fields-reset",
      description:
        "Clear all items provided in 'resolve.importsFields' configuration. Field names from the description file (usually package.json) which are used to provide internal request of a package (requests starting with # are considered as internal)",
    },
    {
      name: "--resolve-main-fields",
      description:
        "Field name from the description file (package.json) which are used to find the default entry point",
      args: {
        name: "value",

        isVariadic: true,
      },
    },
    {
      name: "--resolve-main-fields-reset",
      description:
        "Clear all items provided in 'resolve.mainFields' configuration. Field names from the description file (package.json) which are used to find the default entry point",
    },
    {
      name: "--resolve-main-files",
      description:
        "Filename used to find the default entry point if there is no description file or main field",
      args: {
        name: "value",

        isVariadic: true,
        template: ["filepaths"],
      },
    },
    {
      name: "--resolve-main-files-reset",
      description:
        "Clear all items provided in 'resolve.mainFiles' configuration. Filenames used to find the default entry point if there is no description file or main field",
    },
    {
      name: "--resolve-modules",
      description: "Folder name or directory path where to find modules",
      args: {
        name: "value",

        isVariadic: true,
        template: ["folders"],
      },
    },
    {
      name: "--resolve-modules-reset",
      description:
        "Clear all items provided in 'resolve.modules' configuration. Folder names or directory paths where to find modules",
    },
    {
      name: "--resolve-prefer-absolute",
      description:
        "Prefer to resolve server-relative URLs (starting with '/') as absolute paths before falling back to resolve in 'resolve.roots'",
    },
    {
      name: "--no-resolve-prefer-absolute",
      description: "Negative 'resolve-prefer-absolute' option",
    },
    {
      name: "--resolve-prefer-relative",
      description:
        "Prefer to resolve module requests as relative request and fallback to resolving as module",
    },
    {
      name: "--no-resolve-prefer-relative",
      description: "Negative 'resolve-prefer-relative' option",
    },
    {
      name: "--resolve-restrictions",
      description:
        "Resolve restriction. Resolve result must fulfill this restriction. A glob the resolve result must match at any depth",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--resolve-restrictions-reset",
      description:
        "Clear all items provided in 'resolve.restrictions' configuration. A list of resolve restrictions. Resolve results must fulfill all of these restrictions to resolve successfully. Other resolve paths are taken when restrictions are not met",
    },
    {
      name: "--resolve-roots",
      description:
        "Directory in which requests that are server-relative URLs (starting with '/') are resolved",
      args: {
        name: "value",

        isVariadic: true,
        template: ["folders"],
      },
    },
    {
      name: "--resolve-roots-reset",
      description:
        "Clear all items provided in 'resolve.roots' configuration. A list of directories in which requests that are server-relative URLs (starting with '/') are resolved",
    },
    {
      name: "--resolve-symlinks",
      description: "Enable resolving symlinks to the original location",
    },
    {
      name: "--no-resolve-symlinks",
      description: "Negative 'resolve-symlinks' option",
    },
    {
      name: "--resolve-tsconfig",
      description:
        "TypeScript config for paths mapping. Can be `false` (disabled), `true` (use default `tsconfig.json`), a string path to `tsconfig.json`, or an object with `configFile` and `references` options",
      args: {
        name: "value",
        isOptional: true,
      },
    },
    {
      name: "--no-resolve-tsconfig",
      description: "Negative 'resolve-tsconfig' option",
    },
    {
      name: "--resolve-tsconfig-config-file",
      description: "A path to the tsconfig file",
      args: {
        name: "value",
        template: ["filepaths"],
      },
    },
    {
      name: "--resolve-tsconfig-references",
      description:
        "References to other tsconfig files. 'auto' inherits from TypeScript config, or an array of relative/absolute paths",
      args: {
        name: "value",
      },
    },
    {
      name: "--resolve-unsafe-cache",
      description:
        "Enable caching of successfully resolved requests (cache entries are not revalidated)",
    },
    {
      name: "--no-resolve-unsafe-cache",
      description: "Negative 'resolve-unsafe-cache' option",
    },
    {
      name: "--resolve-use-sync-file-system-calls",
      description: "Use synchronous filesystem calls for the resolver",
    },
    {
      name: "--no-resolve-use-sync-file-system-calls",
      description: "Negative 'resolve-use-sync-file-system-calls' option",
    },
    {
      name: "--resolve-loader-alias-alias",
      description: "Ignore request (replace with empty module). New request",
      args: {
        name: "value",

        isVariadic: true,
      },
    },
    {
      name: "--no-resolve-loader-alias-alias",
      description: "Negative 'resolve-loader-alias-alias' option",
    },
    {
      name: "--resolve-loader-alias-name",
      description: "Request to be redirected",
      args: {
        name: "value",

        isVariadic: true,
      },
    },
    {
      name: "--resolve-loader-alias-only-module",
      description: "Redirect only exact matching request",
    },
    {
      name: "--no-resolve-loader-alias-only-module",
      description: "Negative 'resolve-loader-alias-only-module' option",
    },
    {
      name: "--resolve-loader-alias-reset",
      description:
        "Clear all items provided in 'resolveLoader.alias' configuration. Redirect module requests",
    },
    {
      name: "--resolve-loader-alias-fields",
      description:
        "Field in the description file (usually package.json) which are used to redirect requests inside the module",
      args: {
        name: "value",

        isVariadic: true,
      },
    },
    {
      name: "--resolve-loader-alias-fields-reset",
      description:
        "Clear all items provided in 'resolveLoader.aliasFields' configuration. Fields in the description file (usually package.json) which are used to redirect requests inside the module",
    },
    {
      name: "--resolve-loader-cache",
      description:
        "Enable caching of successfully resolved requests (cache entries are revalidated)",
    },
    {
      name: "--no-resolve-loader-cache",
      description: "Negative 'resolve-loader-cache' option",
    },
    {
      name: "--resolve-loader-cache-with-context",
      description:
        "Include the context information in the cache identifier when caching",
    },
    {
      name: "--no-resolve-loader-cache-with-context",
      description: "Negative 'resolve-loader-cache-with-context' option",
    },
    {
      name: "--resolve-loader-condition-names",
      description: "Condition names for exports field entry point",
      args: {
        name: "value",

        isVariadic: true,
      },
    },
    {
      name: "--resolve-loader-condition-names-reset",
      description:
        "Clear all items provided in 'resolveLoader.conditionNames' configuration. Condition names for exports field entry point",
    },
    {
      name: "--resolve-loader-description-files",
      description:
        "Filename used to find a description file (like a package.json)",
      args: {
        name: "value",

        isVariadic: true,
        template: ["filepaths"],
      },
    },
    {
      name: "--resolve-loader-description-files-reset",
      description:
        "Clear all items provided in 'resolveLoader.descriptionFiles' configuration. Filenames used to find a description file (like a package.json)",
    },
    {
      name: "--resolve-loader-enforce-extension",
      description:
        "Enforce the resolver to use one of the extensions from the extensions option (User must specify requests without extension)",
    },
    {
      name: "--no-resolve-loader-enforce-extension",
      description: "Negative 'resolve-loader-enforce-extension' option",
    },
    {
      name: "--resolve-loader-exports-fields",
      description:
        "Field name from the description file (usually package.json) which is used to provide entry points of a package",
      args: {
        name: "value",

        isVariadic: true,
      },
    },
    {
      name: "--resolve-loader-exports-fields-reset",
      description:
        "Clear all items provided in 'resolveLoader.exportsFields' configuration. Field names from the description file (usually package.json) which are used to provide entry points of a package",
    },
    {
      name: "--resolve-loader-extensions",
      description:
        "Extension added to the request when trying to find the file",
      args: {
        name: "value",

        isVariadic: true,
      },
    },
    {
      name: "--resolve-loader-extensions-reset",
      description:
        "Clear all items provided in 'resolveLoader.extensions' configuration. Extensions added to the request when trying to find the file",
    },
    {
      name: "--resolve-loader-fallback-alias",
      description: "Ignore request (replace with empty module). New request",
      args: {
        name: "value",

        isVariadic: true,
      },
    },
    {
      name: "--no-resolve-loader-fallback-alias",
      description: "Negative 'resolve-loader-fallback-alias' option",
    },
    {
      name: "--resolve-loader-fallback-name",
      description: "Request to be redirected",
      args: {
        name: "value",

        isVariadic: true,
      },
    },
    {
      name: "--resolve-loader-fallback-only-module",
      description: "Redirect only exact matching request",
    },
    {
      name: "--no-resolve-loader-fallback-only-module",
      description: "Negative 'resolve-loader-fallback-only-module' option",
    },
    {
      name: "--resolve-loader-fallback-reset",
      description:
        "Clear all items provided in 'resolveLoader.fallback' configuration. Redirect module requests",
    },
    {
      name: "--resolve-loader-fully-specified",
      description:
        "Treats the request specified by the user as fully specified, meaning no extensions are added and the mainFiles in directories are not resolved (This doesn't affect requests from mainFields, aliasFields or aliases)",
    },
    {
      name: "--no-resolve-loader-fully-specified",
      description: "Negative 'resolve-loader-fully-specified' option",
    },
    {
      name: "--resolve-loader-imports-fields",
      description:
        "Field name from the description file (usually package.json) which is used to provide internal request of a package (requests starting with # are considered as internal)",
      args: {
        name: "value",

        isVariadic: true,
      },
    },
    {
      name: "--resolve-loader-imports-fields-reset",
      description:
        "Clear all items provided in 'resolveLoader.importsFields' configuration. Field names from the description file (usually package.json) which are used to provide internal request of a package (requests starting with # are considered as internal)",
    },
    {
      name: "--resolve-loader-main-fields",
      description:
        "Field name from the description file (package.json) which are used to find the default entry point",
      args: {
        name: "value",

        isVariadic: true,
      },
    },
    {
      name: "--resolve-loader-main-fields-reset",
      description:
        "Clear all items provided in 'resolveLoader.mainFields' configuration. Field names from the description file (package.json) which are used to find the default entry point",
    },
    {
      name: "--resolve-loader-main-files",
      description:
        "Filename used to find the default entry point if there is no description file or main field",
      args: {
        name: "value",

        isVariadic: true,
        template: ["filepaths"],
      },
    },
    {
      name: "--resolve-loader-main-files-reset",
      description:
        "Clear all items provided in 'resolveLoader.mainFiles' configuration. Filenames used to find the default entry point if there is no description file or main field",
    },
    {
      name: "--resolve-loader-modules",
      description: "Folder name or directory path where to find modules",
      args: {
        name: "value",

        isVariadic: true,
        template: ["folders"],
      },
    },
    {
      name: "--resolve-loader-modules-reset",
      description:
        "Clear all items provided in 'resolveLoader.modules' configuration. Folder names or directory paths where to find modules",
    },
    {
      name: "--resolve-loader-prefer-absolute",
      description:
        "Prefer to resolve server-relative URLs (starting with '/') as absolute paths before falling back to resolve in 'resolve.roots'",
    },
    {
      name: "--no-resolve-loader-prefer-absolute",
      description: "Negative 'resolve-loader-prefer-absolute' option",
    },
    {
      name: "--resolve-loader-prefer-relative",
      description:
        "Prefer to resolve module requests as relative request and fallback to resolving as module",
    },
    {
      name: "--no-resolve-loader-prefer-relative",
      description: "Negative 'resolve-loader-prefer-relative' option",
    },
    {
      name: "--resolve-loader-restrictions",
      description:
        "Resolve restriction. Resolve result must fulfill this restriction. A glob the resolve result must match at any depth",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--resolve-loader-restrictions-reset",
      description:
        "Clear all items provided in 'resolveLoader.restrictions' configuration. A list of resolve restrictions. Resolve results must fulfill all of these restrictions to resolve successfully. Other resolve paths are taken when restrictions are not met",
    },
    {
      name: "--resolve-loader-roots",
      description:
        "Directory in which requests that are server-relative URLs (starting with '/') are resolved",
      args: {
        name: "value",

        isVariadic: true,
        template: ["folders"],
      },
    },
    {
      name: "--resolve-loader-roots-reset",
      description:
        "Clear all items provided in 'resolveLoader.roots' configuration. A list of directories in which requests that are server-relative URLs (starting with '/') are resolved",
    },
    {
      name: "--resolve-loader-symlinks",
      description: "Enable resolving symlinks to the original location",
    },
    {
      name: "--no-resolve-loader-symlinks",
      description: "Negative 'resolve-loader-symlinks' option",
    },
    {
      name: "--resolve-loader-tsconfig",
      description:
        "TypeScript config for paths mapping. Can be `false` (disabled), `true` (use default `tsconfig.json`), a string path to `tsconfig.json`, or an object with `configFile` and `references` options",
      args: {
        name: "value",
        isOptional: true,
      },
    },
    {
      name: "--no-resolve-loader-tsconfig",
      description: "Negative 'resolve-loader-tsconfig' option",
    },
    {
      name: "--resolve-loader-tsconfig-config-file",
      description: "A path to the tsconfig file",
      args: {
        name: "value",
        template: ["filepaths"],
      },
    },
    {
      name: "--resolve-loader-tsconfig-references",
      description:
        "References to other tsconfig files. 'auto' inherits from TypeScript config, or an array of relative/absolute paths",
      args: {
        name: "value",
      },
    },
    {
      name: "--resolve-loader-unsafe-cache",
      description:
        "Enable caching of successfully resolved requests (cache entries are not revalidated)",
    },
    {
      name: "--no-resolve-loader-unsafe-cache",
      description: "Negative 'resolve-loader-unsafe-cache' option",
    },
    {
      name: "--resolve-loader-use-sync-file-system-calls",
      description: "Use synchronous filesystem calls for the resolver",
    },
    {
      name: "--no-resolve-loader-use-sync-file-system-calls",
      description:
        "Negative 'resolve-loader-use-sync-file-system-calls' option",
    },
    {
      name: "--snapshot-build-dependencies-hash",
      description:
        "Use hashes of the content of the files/directories to determine invalidation",
    },
    {
      name: "--no-snapshot-build-dependencies-hash",
      description: "Negative 'snapshot-build-dependencies-hash' option",
    },
    {
      name: "--snapshot-build-dependencies-timestamp",
      description:
        "Use timestamps of the files/directories to determine invalidation",
    },
    {
      name: "--no-snapshot-build-dependencies-timestamp",
      description: "Negative 'snapshot-build-dependencies-timestamp' option",
    },
    {
      name: "--snapshot-context-module-hash",
      description:
        "Use hashes of the content of the files/directories to determine invalidation",
    },
    {
      name: "--no-snapshot-context-module-hash",
      description: "Negative 'snapshot-context-module-hash' option",
    },
    {
      name: "--snapshot-context-module-timestamp",
      description:
        "Use timestamps of the files/directories to determine invalidation",
    },
    {
      name: "--no-snapshot-context-module-timestamp",
      description: "Negative 'snapshot-context-module-timestamp' option",
    },
    {
      name: "--snapshot-immutable-paths",
      description:
        "A RegExp matching an immutable directory (usually a package manager cache directory, including the tailing slash) A path to an immutable directory (usually a package manager cache directory). A glob matching an immutable directory at any depth, or relative to the context when it starts with `./` or `../`; a path under several matches takes the outermost",
      args: {
        name: "value",
        isVariadic: true,
        template: ["folders"],
      },
    },
    {
      name: "--snapshot-immutable-paths-reset",
      description:
        "Clear all items provided in 'snapshot.immutablePaths' configuration. List of paths that are managed by a package manager and contain a version or hash in its path so all files are immutable",
    },
    {
      name: "--snapshot-managed-paths",
      description:
        "A RegExp matching a managed directory (usually a node_modules directory, including the tailing slash) A path to a managed directory (usually a node_modules directory). A glob matching a managed directory at any depth (e.g. `node_modules`), or relative to the context when it starts with `./` or `../`; a path under several matches takes the outermost",
      args: {
        name: "value",
        isVariadic: true,
        template: ["folders"],
      },
    },
    {
      name: "--snapshot-managed-paths-reset",
      description:
        "Clear all items provided in 'snapshot.managedPaths' configuration. List of paths that are managed by a package manager and can be trusted to not be modified otherwise",
    },
    {
      name: "--snapshot-module-hash",
      description:
        "Use hashes of the content of the files/directories to determine invalidation",
    },
    {
      name: "--no-snapshot-module-hash",
      description: "Negative 'snapshot-module-hash' option",
    },
    {
      name: "--snapshot-module-timestamp",
      description:
        "Use timestamps of the files/directories to determine invalidation",
    },
    {
      name: "--no-snapshot-module-timestamp",
      description: "Negative 'snapshot-module-timestamp' option",
    },
    {
      name: "--snapshot-resolve-hash",
      description:
        "Use hashes of the content of the files/directories to determine invalidation",
    },
    {
      name: "--no-snapshot-resolve-hash",
      description: "Negative 'snapshot-resolve-hash' option",
    },
    {
      name: "--snapshot-resolve-timestamp",
      description:
        "Use timestamps of the files/directories to determine invalidation",
    },
    {
      name: "--no-snapshot-resolve-timestamp",
      description: "Negative 'snapshot-resolve-timestamp' option",
    },
    {
      name: "--snapshot-resolve-build-dependencies-hash",
      description:
        "Use hashes of the content of the files/directories to determine invalidation",
    },
    {
      name: "--no-snapshot-resolve-build-dependencies-hash",
      description: "Negative 'snapshot-resolve-build-dependencies-hash' option",
    },
    {
      name: "--snapshot-resolve-build-dependencies-timestamp",
      description:
        "Use timestamps of the files/directories to determine invalidation",
    },
    {
      name: "--no-snapshot-resolve-build-dependencies-timestamp",
      description:
        "Negative 'snapshot-resolve-build-dependencies-timestamp' option",
    },
    {
      name: "--snapshot-unmanaged-paths",
      description:
        "A RegExp matching an unmanaged directory. A path to an unmanaged directory. A glob matching an unmanaged directory at any depth, or relative to the context when it starts with `./` or `../`; a path under several matches takes the outermost",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--snapshot-unmanaged-paths-reset",
      description:
        "Clear all items provided in 'snapshot.unmanagedPaths' configuration. List of paths that are not managed by a package manager and the contents are subject to change",
    },
    {
      name: "--stats",
      description: "Stats options object or preset name",
      args: {
        name: "value",
        isOptional: true,
      },
    },
    {
      name: "--no-stats",
      description: "Negative 'stats' option",
    },
    {
      name: "--stats-all",
      description:
        "Fallback value for stats options when an option is not defined (has precedence over local webpack defaults)",
    },
    {
      name: "--no-stats-all",
      description: "Negative 'stats-all' option",
    },
    {
      name: "--stats-assets",
      description: "Add assets information",
    },
    {
      name: "--no-stats-assets",
      description: "Negative 'stats-assets' option",
    },
    {
      name: "--stats-assets-sort",
      description: "Sort the assets by that field",
      args: {
        name: "value",
      },
    },
    {
      name: "--no-stats-assets-sort",
      description: "Negative 'stats-assets-sort' option",
    },
    {
      name: "--stats-assets-space",
      description:
        "Space to display assets (groups will be collapsed to fit this space)",
      args: {
        name: "value",
      },
    },
    {
      name: "--stats-built-at",
      description: "Add built at time information",
    },
    {
      name: "--no-stats-built-at",
      description: "Negative 'stats-built-at' option",
    },
    {
      name: "--stats-cached",
      description:
        "Add information about cached (not built) modules (deprecated: use 'cachedModules' instead)",
      deprecated: true,
    },
    {
      name: "--no-stats-cached",
      description: "Negative 'stats-cached' option",
    },
    {
      name: "--stats-cached-assets",
      description:
        "Show cached assets (setting this to `false` only shows emitted files)",
    },
    {
      name: "--no-stats-cached-assets",
      description: "Negative 'stats-cached-assets' option",
    },
    {
      name: "--stats-cached-modules",
      description: "Add information about cached (not built) modules",
    },
    {
      name: "--no-stats-cached-modules",
      description: "Negative 'stats-cached-modules' option",
    },
    {
      name: "--stats-children",
      description: "Stats options object or preset name",
      args: {
        name: "value",
        isOptional: true,
        isVariadic: true,
      },
    },
    {
      name: "--no-stats-children",
      description: "Negative 'stats-children' option",
    },
    {
      name: "--stats-children-all",
      description:
        "Fallback value for stats options when an option is not defined (has precedence over local webpack defaults)",
    },
    {
      name: "--no-stats-children-all",
      description: "Negative 'stats-children-all' option",
    },
    {
      name: "--stats-children-assets",
      description: "Add assets information",
    },
    {
      name: "--no-stats-children-assets",
      description: "Negative 'stats-children-assets' option",
    },
    {
      name: "--stats-children-assets-sort",
      description: "Sort the assets by that field",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--no-stats-children-assets-sort",
      description: "Negative 'stats-children-assets-sort' option",
    },
    {
      name: "--stats-children-assets-space",
      description:
        "Space to display assets (groups will be collapsed to fit this space)",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--stats-children-built-at",
      description: "Add built at time information",
    },
    {
      name: "--no-stats-children-built-at",
      description: "Negative 'stats-children-built-at' option",
    },
    {
      name: "--stats-children-cached",
      description:
        "Add information about cached (not built) modules (deprecated: use 'cachedModules' instead)",
      deprecated: true,
    },
    {
      name: "--no-stats-children-cached",
      description: "Negative 'stats-children-cached' option",
    },
    {
      name: "--stats-children-cached-assets",
      description:
        "Show cached assets (setting this to `false` only shows emitted files)",
    },
    {
      name: "--no-stats-children-cached-assets",
      description: "Negative 'stats-children-cached-assets' option",
    },
    {
      name: "--stats-children-cached-modules",
      description: "Add information about cached (not built) modules",
    },
    {
      name: "--no-stats-children-cached-modules",
      description: "Negative 'stats-children-cached-modules' option",
    },
    {
      name: "--stats-children-chunk-group-auxiliary",
      description: "Display auxiliary assets in chunk groups",
    },
    {
      name: "--no-stats-children-chunk-group-auxiliary",
      description: "Negative 'stats-children-chunk-group-auxiliary' option",
    },
    {
      name: "--stats-children-chunk-group-children",
      description: "Display children of chunk groups",
    },
    {
      name: "--no-stats-children-chunk-group-children",
      description: "Negative 'stats-children-chunk-group-children' option",
    },
    {
      name: "--stats-children-chunk-group-max-assets",
      description: "Limit of assets displayed in chunk groups",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--stats-children-chunk-group-resource-hints",
      description:
        "Include the resolved `<link>` resource-hint descriptors for each entrypoint (`entrypoints[name].resourceHints`). Combines `output.resourceHints.chunks` (initial-graph modulepreload/preload/prefetch) with `output.resourceHints.assets` (URL-referenced fonts / images / …). Lets SSR frameworks inject the hints server-side without walking the chunk graph themselves; the analogue of Vite's `build.ssrManifest`",
    },
    {
      name: "--no-stats-children-chunk-group-resource-hints",
      description:
        "Negative 'stats-children-chunk-group-resource-hints' option",
    },
    {
      name: "--stats-children-chunk-groups",
      description: "Display all chunk groups with the corresponding bundles",
    },
    {
      name: "--no-stats-children-chunk-groups",
      description: "Negative 'stats-children-chunk-groups' option",
    },
    {
      name: "--stats-children-chunk-modules",
      description: "Add built modules information to chunk information",
    },
    {
      name: "--no-stats-children-chunk-modules",
      description: "Negative 'stats-children-chunk-modules' option",
    },
    {
      name: "--stats-children-chunk-modules-space",
      description:
        "Space to display chunk modules (groups will be collapsed to fit this space, value is in number of modules/group)",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--stats-children-chunk-origins",
      description: "Add the origins of chunks and chunk merging info",
    },
    {
      name: "--no-stats-children-chunk-origins",
      description: "Negative 'stats-children-chunk-origins' option",
    },
    {
      name: "--stats-children-chunk-relations",
      description:
        "Add information about parent, children and sibling chunks to chunk information",
    },
    {
      name: "--no-stats-children-chunk-relations",
      description: "Negative 'stats-children-chunk-relations' option",
    },
    {
      name: "--stats-children-chunks",
      description: "Add chunk information",
    },
    {
      name: "--no-stats-children-chunks",
      description: "Negative 'stats-children-chunks' option",
    },
    {
      name: "--stats-children-chunks-sort",
      description: "Sort the chunks by that field",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--no-stats-children-chunks-sort",
      description: "Negative 'stats-children-chunks-sort' option",
    },
    {
      name: "--stats-children-colors",
      description: "Enables/Disables colorful output",
    },
    {
      name: "--no-stats-children-colors",
      description: "Negative 'stats-children-colors' option",
    },
    {
      name: "--stats-children-colors-bold",
      description: "Custom color for bold text",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--stats-children-colors-cyan",
      description: "Custom color for cyan text",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--stats-children-colors-green",
      description: "Custom color for green text",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--stats-children-colors-magenta",
      description: "Custom color for magenta text",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--stats-children-colors-red",
      description: "Custom color for red text",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--stats-children-colors-yellow",
      description: "Custom color for yellow text",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--stats-children-context",
      description: "Context directory for request shortening",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--stats-children-dependent-modules",
      description:
        "Show chunk modules that are dependencies of other modules of the chunk",
    },
    {
      name: "--no-stats-children-dependent-modules",
      description: "Negative 'stats-children-dependent-modules' option",
    },
    {
      name: "--stats-children-depth",
      description: "Add module depth in module graph",
    },
    {
      name: "--no-stats-children-depth",
      description: "Negative 'stats-children-depth' option",
    },
    {
      name: "--stats-children-entrypoints",
      description: "Display the entry points with the corresponding bundles",
      args: {
        name: "value",
        isOptional: true,
        isVariadic: true,
      },
    },
    {
      name: "--no-stats-children-entrypoints",
      description: "Negative 'stats-children-entrypoints' option",
    },
    {
      name: "--stats-children-env",
      description: "Add --env information",
    },
    {
      name: "--no-stats-children-env",
      description: "Negative 'stats-children-env' option",
    },
    {
      name: "--stats-children-error-cause",
      description: "Add cause to errors",
      args: {
        name: "value",
        isOptional: true,
        isVariadic: true,
      },
    },
    {
      name: "--no-stats-children-error-cause",
      description: "Negative 'stats-children-error-cause' option",
    },
    {
      name: "--stats-children-error-details",
      description: "Add details to errors (like resolving log)",
      args: {
        name: "value",
        isOptional: true,
        isVariadic: true,
      },
    },
    {
      name: "--no-stats-children-error-details",
      description: "Negative 'stats-children-error-details' option",
    },
    {
      name: "--stats-children-error-errors",
      description: "Add nested errors to errors (like in AggregateError)",
      args: {
        name: "value",
        isOptional: true,
        isVariadic: true,
      },
    },
    {
      name: "--no-stats-children-error-errors",
      description: "Negative 'stats-children-error-errors' option",
    },
    {
      name: "--stats-children-error-stack",
      description: "Add internal stack trace to errors",
    },
    {
      name: "--no-stats-children-error-stack",
      description: "Negative 'stats-children-error-stack' option",
    },
    {
      name: "--stats-children-errors",
      description: "Add errors",
    },
    {
      name: "--no-stats-children-errors",
      description: "Negative 'stats-children-errors' option",
    },
    {
      name: "--stats-children-errors-count",
      description: "Add errors count",
    },
    {
      name: "--no-stats-children-errors-count",
      description: "Negative 'stats-children-errors-count' option",
    },
    {
      name: "--stats-children-errors-space",
      description: "Space to display errors (value is in number of lines)",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--stats-children-exclude-assets",
      description:
        "Suppress assets that match the specified filters. Filters can be Strings, RegExps or Functions",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--stats-children-exclude-modules",
      description:
        "Suppress modules that match the specified filters. Filters can be Strings, RegExps, Booleans or Functions",
      args: {
        name: "value",
        isOptional: true,
        isVariadic: true,
      },
    },
    {
      name: "--no-stats-children-exclude-modules",
      description: "Negative 'stats-children-exclude-modules' option",
    },
    {
      name: "--stats-children-group-assets-by-chunk",
      description: "Group assets by how their are related to chunks",
    },
    {
      name: "--no-stats-children-group-assets-by-chunk",
      description: "Negative 'stats-children-group-assets-by-chunk' option",
    },
    {
      name: "--stats-children-group-assets-by-emit-status",
      description:
        "Group assets by their status (emitted, compared for emit or cached)",
    },
    {
      name: "--no-stats-children-group-assets-by-emit-status",
      description:
        "Negative 'stats-children-group-assets-by-emit-status' option",
    },
    {
      name: "--stats-children-group-assets-by-extension",
      description: "Group assets by their extension",
    },
    {
      name: "--no-stats-children-group-assets-by-extension",
      description: "Negative 'stats-children-group-assets-by-extension' option",
    },
    {
      name: "--stats-children-group-assets-by-info",
      description:
        "Group assets by their asset info (immutable, development, hotModuleReplacement, etc)",
    },
    {
      name: "--no-stats-children-group-assets-by-info",
      description: "Negative 'stats-children-group-assets-by-info' option",
    },
    {
      name: "--stats-children-group-assets-by-path",
      description: "Group assets by their path",
    },
    {
      name: "--no-stats-children-group-assets-by-path",
      description: "Negative 'stats-children-group-assets-by-path' option",
    },
    {
      name: "--stats-children-group-modules-by-attributes",
      description:
        "Group modules by their attributes (errors, warnings, assets, optional, orphan, or dependent)",
    },
    {
      name: "--no-stats-children-group-modules-by-attributes",
      description:
        "Negative 'stats-children-group-modules-by-attributes' option",
    },
    {
      name: "--stats-children-group-modules-by-cache-status",
      description:
        "Group modules by their status (cached or built and cacheable)",
    },
    {
      name: "--no-stats-children-group-modules-by-cache-status",
      description:
        "Negative 'stats-children-group-modules-by-cache-status' option",
    },
    {
      name: "--stats-children-group-modules-by-extension",
      description: "Group modules by their extension",
    },
    {
      name: "--no-stats-children-group-modules-by-extension",
      description:
        "Negative 'stats-children-group-modules-by-extension' option",
    },
    {
      name: "--stats-children-group-modules-by-layer",
      description: "Group modules by their layer",
    },
    {
      name: "--no-stats-children-group-modules-by-layer",
      description: "Negative 'stats-children-group-modules-by-layer' option",
    },
    {
      name: "--stats-children-group-modules-by-path",
      description: "Group modules by their path",
    },
    {
      name: "--no-stats-children-group-modules-by-path",
      description: "Negative 'stats-children-group-modules-by-path' option",
    },
    {
      name: "--stats-children-group-modules-by-type",
      description: "Group modules by their type",
    },
    {
      name: "--no-stats-children-group-modules-by-type",
      description: "Negative 'stats-children-group-modules-by-type' option",
    },
    {
      name: "--stats-children-group-reasons-by-origin",
      description: "Group reasons by their origin module",
    },
    {
      name: "--no-stats-children-group-reasons-by-origin",
      description: "Negative 'stats-children-group-reasons-by-origin' option",
    },
    {
      name: "--stats-children-hash",
      description: "Add the hash of the compilation",
    },
    {
      name: "--no-stats-children-hash",
      description: "Negative 'stats-children-hash' option",
    },
    {
      name: "--stats-children-hints",
      description:
        "Add performance hints reported with 'performance.hints: \"stats\"'",
    },
    {
      name: "--no-stats-children-hints",
      description: "Negative 'stats-children-hints' option",
    },
    {
      name: "--stats-children-hints-count",
      description: "Add the number of performance hints",
    },
    {
      name: "--no-stats-children-hints-count",
      description: "Negative 'stats-children-hints-count' option",
    },
    {
      name: "--stats-children-ids",
      description: "Add ids",
    },
    {
      name: "--no-stats-children-ids",
      description: "Negative 'stats-children-ids' option",
    },
    {
      name: "--stats-children-logging",
      description:
        "Specify log level of logging output. Enable/disable logging output (`true`: shows normal logging output, loglevel: log)",
      args: {
        name: "value",
        isOptional: true,
        isVariadic: true,
      },
    },
    {
      name: "--no-stats-children-logging",
      description: "Negative 'stats-children-logging' option",
    },
    {
      name: "--stats-children-logging-debug",
      description:
        "Enable/Disable debug logging for all loggers. Include debug logging of specified loggers (i. e. for plugins or loaders). Filters can be Strings, RegExps or Functions",
      args: {
        name: "value",
        isOptional: true,
        isVariadic: true,
      },
    },
    {
      name: "--no-stats-children-logging-debug",
      description: "Negative 'stats-children-logging-debug' option",
    },
    {
      name: "--stats-children-logging-trace",
      description: "Add stack traces to logging output",
    },
    {
      name: "--no-stats-children-logging-trace",
      description: "Negative 'stats-children-logging-trace' option",
    },
    {
      name: "--stats-children-module-assets",
      description: "Add information about assets inside modules",
    },
    {
      name: "--no-stats-children-module-assets",
      description: "Negative 'stats-children-module-assets' option",
    },
    {
      name: "--stats-children-module-trace",
      description: "Add dependencies and origin of warnings/errors",
    },
    {
      name: "--no-stats-children-module-trace",
      description: "Negative 'stats-children-module-trace' option",
    },
    {
      name: "--stats-children-modules",
      description: "Add built modules information",
    },
    {
      name: "--no-stats-children-modules",
      description: "Negative 'stats-children-modules' option",
    },
    {
      name: "--stats-children-modules-sort",
      description: "Sort the modules by that field",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--no-stats-children-modules-sort",
      description: "Negative 'stats-children-modules-sort' option",
    },
    {
      name: "--stats-children-modules-space",
      description:
        "Space to display modules (groups will be collapsed to fit this space, value is in number of modules/groups)",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--stats-children-nested-modules",
      description:
        "Add information about modules nested in other modules (like with module concatenation)",
    },
    {
      name: "--no-stats-children-nested-modules",
      description: "Negative 'stats-children-nested-modules' option",
    },
    {
      name: "--stats-children-nested-modules-space",
      description:
        "Space to display modules nested within other modules (groups will be collapsed to fit this space, value is in number of modules/group)",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--stats-children-optimization-bailout",
      description: "Show reasons why optimization bailed out for modules",
    },
    {
      name: "--no-stats-children-optimization-bailout",
      description: "Negative 'stats-children-optimization-bailout' option",
    },
    {
      name: "--stats-children-orphan-modules",
      description: "Add information about orphan modules",
    },
    {
      name: "--no-stats-children-orphan-modules",
      description: "Negative 'stats-children-orphan-modules' option",
    },
    {
      name: "--stats-children-output-path",
      description: "Add output path information",
    },
    {
      name: "--no-stats-children-output-path",
      description: "Negative 'stats-children-output-path' option",
    },
    {
      name: "--stats-children-performance",
      description: "Add performance hint flags",
    },
    {
      name: "--no-stats-children-performance",
      description: "Negative 'stats-children-performance' option",
    },
    {
      name: "--stats-children-preset",
      description: "Preset for the default values",
      args: {
        name: "value",
        isOptional: true,
        isVariadic: true,
      },
    },
    {
      name: "--no-stats-children-preset",
      description: "Negative 'stats-children-preset' option",
    },
    {
      name: "--stats-children-provided-exports",
      description: "Show exports provided by modules",
    },
    {
      name: "--no-stats-children-provided-exports",
      description: "Negative 'stats-children-provided-exports' option",
    },
    {
      name: "--stats-children-public-path",
      description: "Add public path information",
    },
    {
      name: "--no-stats-children-public-path",
      description: "Negative 'stats-children-public-path' option",
    },
    {
      name: "--stats-children-reasons",
      description: "Add information about the reasons why modules are included",
    },
    {
      name: "--no-stats-children-reasons",
      description: "Negative 'stats-children-reasons' option",
    },
    {
      name: "--stats-children-reasons-space",
      description:
        "Space to display reasons (groups will be collapsed to fit this space)",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--stats-children-related-assets",
      description:
        "Add information about assets that are related to other assets (like SourceMaps for assets)",
    },
    {
      name: "--no-stats-children-related-assets",
      description: "Negative 'stats-children-related-assets' option",
    },
    {
      name: "--stats-children-runtime",
      description:
        "Add information about runtime modules (deprecated: use 'runtimeModules' instead)",
      deprecated: true,
    },
    {
      name: "--no-stats-children-runtime",
      description: "Negative 'stats-children-runtime' option",
    },
    {
      name: "--stats-children-runtime-modules",
      description: "Add information about runtime modules",
    },
    {
      name: "--no-stats-children-runtime-modules",
      description: "Negative 'stats-children-runtime-modules' option",
    },
    {
      name: "--stats-children-source",
      description: "Add the source code of modules",
    },
    {
      name: "--no-stats-children-source",
      description: "Negative 'stats-children-source' option",
    },
    {
      name: "--stats-children-timings",
      description: "Add timing information",
    },
    {
      name: "--no-stats-children-timings",
      description: "Negative 'stats-children-timings' option",
    },
    {
      name: "--stats-children-used-exports",
      description: "Show exports used by modules",
    },
    {
      name: "--no-stats-children-used-exports",
      description: "Negative 'stats-children-used-exports' option",
    },
    {
      name: "--stats-children-version",
      description: "Add webpack version information",
    },
    {
      name: "--no-stats-children-version",
      description: "Negative 'stats-children-version' option",
    },
    {
      name: "--stats-children-warnings",
      description: "Add warnings",
    },
    {
      name: "--no-stats-children-warnings",
      description: "Negative 'stats-children-warnings' option",
    },
    {
      name: "--stats-children-warnings-count",
      description: "Add warnings count",
    },
    {
      name: "--no-stats-children-warnings-count",
      description: "Negative 'stats-children-warnings-count' option",
    },
    {
      name: "--stats-children-warnings-filter",
      description:
        "Suppress listing warnings that match the specified filters (they will still be counted). Filters can be Strings, RegExps or Functions",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--stats-children-warnings-space",
      description: "Space to display warnings (value is in number of lines)",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--stats-children-reset",
      description:
        "Clear all items provided in 'stats.children' configuration. Add children information",
    },
    {
      name: "--stats-children-exclude-assets-reset",
      description:
        "Clear all items provided in 'stats.children.excludeAssets' configuration. Suppress assets that match the specified filters. Filters can be Strings, RegExps or Functions",
    },
    {
      name: "--stats-children-exclude-modules-reset",
      description:
        "Clear all items provided in 'stats.children.excludeModules' configuration. Suppress modules that match the specified filters. Filters can be Strings, RegExps, Booleans or Functions",
    },
    {
      name: "--stats-children-logging-debug-reset",
      description:
        "Clear all items provided in 'stats.children.loggingDebug' configuration. Include debug logging of specified loggers (i. e. for plugins or loaders). Filters can be Strings, RegExps or Functions",
    },
    {
      name: "--stats-children-warnings-filter-reset",
      description:
        "Clear all items provided in 'stats.children.warningsFilter' configuration. Suppress listing warnings that match the specified filters (they will still be counted). Filters can be Strings, RegExps or Functions",
    },
    {
      name: "--stats-chunk-group-auxiliary",
      description: "Display auxiliary assets in chunk groups",
    },
    {
      name: "--no-stats-chunk-group-auxiliary",
      description: "Negative 'stats-chunk-group-auxiliary' option",
    },
    {
      name: "--stats-chunk-group-children",
      description: "Display children of chunk groups",
    },
    {
      name: "--no-stats-chunk-group-children",
      description: "Negative 'stats-chunk-group-children' option",
    },
    {
      name: "--stats-chunk-group-max-assets",
      description: "Limit of assets displayed in chunk groups",
      args: {
        name: "value",
      },
    },
    {
      name: "--stats-chunk-group-resource-hints",
      description:
        "Include the resolved `<link>` resource-hint descriptors for each entrypoint (`entrypoints[name].resourceHints`). Combines `output.resourceHints.chunks` (initial-graph modulepreload/preload/prefetch) with `output.resourceHints.assets` (URL-referenced fonts / images / …). Lets SSR frameworks inject the hints server-side without walking the chunk graph themselves; the analogue of Vite's `build.ssrManifest`",
    },
    {
      name: "--no-stats-chunk-group-resource-hints",
      description: "Negative 'stats-chunk-group-resource-hints' option",
    },
    {
      name: "--stats-chunk-groups",
      description: "Display all chunk groups with the corresponding bundles",
    },
    {
      name: "--no-stats-chunk-groups",
      description: "Negative 'stats-chunk-groups' option",
    },
    {
      name: "--stats-chunk-modules",
      description: "Add built modules information to chunk information",
    },
    {
      name: "--no-stats-chunk-modules",
      description: "Negative 'stats-chunk-modules' option",
    },
    {
      name: "--stats-chunk-modules-space",
      description:
        "Space to display chunk modules (groups will be collapsed to fit this space, value is in number of modules/group)",
      args: {
        name: "value",
      },
    },
    {
      name: "--stats-chunk-origins",
      description: "Add the origins of chunks and chunk merging info",
    },
    {
      name: "--no-stats-chunk-origins",
      description: "Negative 'stats-chunk-origins' option",
    },
    {
      name: "--stats-chunk-relations",
      description:
        "Add information about parent, children and sibling chunks to chunk information",
    },
    {
      name: "--no-stats-chunk-relations",
      description: "Negative 'stats-chunk-relations' option",
    },
    {
      name: "--stats-chunks",
      description: "Add chunk information",
    },
    {
      name: "--no-stats-chunks",
      description: "Negative 'stats-chunks' option",
    },
    {
      name: "--stats-chunks-sort",
      description: "Sort the chunks by that field",
      args: {
        name: "value",
      },
    },
    {
      name: "--no-stats-chunks-sort",
      description: "Negative 'stats-chunks-sort' option",
    },
    {
      name: "--stats-colors",
      description: "Enables/Disables colorful output",
    },
    {
      name: "--no-stats-colors",
      description: "Negative 'stats-colors' option",
    },
    {
      name: "--stats-colors-bold",
      description: "Custom color for bold text",
      args: {
        name: "value",
      },
    },
    {
      name: "--stats-colors-cyan",
      description: "Custom color for cyan text",
      args: {
        name: "value",
      },
    },
    {
      name: "--stats-colors-green",
      description: "Custom color for green text",
      args: {
        name: "value",
      },
    },
    {
      name: "--stats-colors-magenta",
      description: "Custom color for magenta text",
      args: {
        name: "value",
      },
    },
    {
      name: "--stats-colors-red",
      description: "Custom color for red text",
      args: {
        name: "value",
      },
    },
    {
      name: "--stats-colors-yellow",
      description: "Custom color for yellow text",
      args: {
        name: "value",
      },
    },
    {
      name: "--stats-context",
      description: "Context directory for request shortening",
      args: {
        name: "value",

        template: ["folders"],
      },
    },
    {
      name: "--stats-dependent-modules",
      description:
        "Show chunk modules that are dependencies of other modules of the chunk",
    },
    {
      name: "--no-stats-dependent-modules",
      description: "Negative 'stats-dependent-modules' option",
    },
    {
      name: "--stats-depth",
      description: "Add module depth in module graph",
    },
    {
      name: "--no-stats-depth",
      description: "Negative 'stats-depth' option",
    },
    {
      name: "--stats-entrypoints",
      description: "Display the entry points with the corresponding bundles",
      args: {
        name: "value",
        isOptional: true,
      },
    },
    {
      name: "--no-stats-entrypoints",
      description: "Negative 'stats-entrypoints' option",
    },
    {
      name: "--stats-env",
      description: "Add --env information",
    },
    {
      name: "--no-stats-env",
      description: "Negative 'stats-env' option",
    },
    {
      name: "--stats-error-cause",
      description: "Add cause to errors",
      args: {
        name: "value",
        isOptional: true,
      },
    },
    {
      name: "--no-stats-error-cause",
      description: "Negative 'stats-error-cause' option",
    },
    {
      name: "--stats-error-details",
      description: "Add details to errors (like resolving log)",
      args: {
        name: "value",
        isOptional: true,
      },
    },
    {
      name: "--no-stats-error-details",
      description: "Negative 'stats-error-details' option",
    },
    {
      name: "--stats-error-errors",
      description: "Add nested errors to errors (like in AggregateError)",
      args: {
        name: "value",
        isOptional: true,
      },
    },
    {
      name: "--no-stats-error-errors",
      description: "Negative 'stats-error-errors' option",
    },
    {
      name: "--stats-error-stack",
      description: "Add internal stack trace to errors",
    },
    {
      name: "--no-stats-error-stack",
      description: "Negative 'stats-error-stack' option",
    },
    {
      name: "--stats-errors",
      description: "Add errors",
    },
    {
      name: "--no-stats-errors",
      description: "Negative 'stats-errors' option",
    },
    {
      name: "--stats-errors-count",
      description: "Add errors count",
    },
    {
      name: "--no-stats-errors-count",
      description: "Negative 'stats-errors-count' option",
    },
    {
      name: "--stats-errors-space",
      description: "Space to display errors (value is in number of lines)",
      args: {
        name: "value",
      },
    },
    {
      name: "--stats-exclude-assets",
      description:
        "Suppress assets that match the specified filters. Filters can be Strings, RegExps or Functions",
      args: {
        name: "value",

        isVariadic: true,
      },
    },
    {
      name: "--stats-exclude-assets-reset",
      description:
        "Clear all items provided in 'stats.excludeAssets' configuration. Suppress assets that match the specified filters. Filters can be Strings, RegExps or Functions",
    },
    {
      name: "--stats-exclude-modules",
      description:
        "Suppress modules that match the specified filters. Filters can be Strings, RegExps, Booleans or Functions",
      args: {
        name: "value",
        isOptional: true,
        isVariadic: true,
      },
    },
    {
      name: "--no-stats-exclude-modules",
      description: "Negative 'stats-exclude-modules' option",
    },
    {
      name: "--stats-exclude-modules-reset",
      description:
        "Clear all items provided in 'stats.excludeModules' configuration. Suppress modules that match the specified filters. Filters can be Strings, RegExps, Booleans or Functions",
    },
    {
      name: "--stats-group-assets-by-chunk",
      description: "Group assets by how their are related to chunks",
    },
    {
      name: "--no-stats-group-assets-by-chunk",
      description: "Negative 'stats-group-assets-by-chunk' option",
    },
    {
      name: "--stats-group-assets-by-emit-status",
      description:
        "Group assets by their status (emitted, compared for emit or cached)",
    },
    {
      name: "--no-stats-group-assets-by-emit-status",
      description: "Negative 'stats-group-assets-by-emit-status' option",
    },
    {
      name: "--stats-group-assets-by-extension",
      description: "Group assets by their extension",
    },
    {
      name: "--no-stats-group-assets-by-extension",
      description: "Negative 'stats-group-assets-by-extension' option",
    },
    {
      name: "--stats-group-assets-by-info",
      description:
        "Group assets by their asset info (immutable, development, hotModuleReplacement, etc)",
    },
    {
      name: "--no-stats-group-assets-by-info",
      description: "Negative 'stats-group-assets-by-info' option",
    },
    {
      name: "--stats-group-assets-by-path",
      description: "Group assets by their path",
    },
    {
      name: "--no-stats-group-assets-by-path",
      description: "Negative 'stats-group-assets-by-path' option",
    },
    {
      name: "--stats-group-modules-by-attributes",
      description:
        "Group modules by their attributes (errors, warnings, assets, optional, orphan, or dependent)",
    },
    {
      name: "--no-stats-group-modules-by-attributes",
      description: "Negative 'stats-group-modules-by-attributes' option",
    },
    {
      name: "--stats-group-modules-by-cache-status",
      description:
        "Group modules by their status (cached or built and cacheable)",
    },
    {
      name: "--no-stats-group-modules-by-cache-status",
      description: "Negative 'stats-group-modules-by-cache-status' option",
    },
    {
      name: "--stats-group-modules-by-extension",
      description: "Group modules by their extension",
    },
    {
      name: "--no-stats-group-modules-by-extension",
      description: "Negative 'stats-group-modules-by-extension' option",
    },
    {
      name: "--stats-group-modules-by-layer",
      description: "Group modules by their layer",
    },
    {
      name: "--no-stats-group-modules-by-layer",
      description: "Negative 'stats-group-modules-by-layer' option",
    },
    {
      name: "--stats-group-modules-by-path",
      description: "Group modules by their path",
    },
    {
      name: "--no-stats-group-modules-by-path",
      description: "Negative 'stats-group-modules-by-path' option",
    },
    {
      name: "--stats-group-modules-by-type",
      description: "Group modules by their type",
    },
    {
      name: "--no-stats-group-modules-by-type",
      description: "Negative 'stats-group-modules-by-type' option",
    },
    {
      name: "--stats-group-reasons-by-origin",
      description: "Group reasons by their origin module",
    },
    {
      name: "--no-stats-group-reasons-by-origin",
      description: "Negative 'stats-group-reasons-by-origin' option",
    },
    {
      name: "--stats-hash",
      description: "Add the hash of the compilation",
    },
    {
      name: "--no-stats-hash",
      description: "Negative 'stats-hash' option",
    },
    {
      name: "--stats-hints",
      description:
        "Add performance hints reported with 'performance.hints: \"stats\"'",
    },
    {
      name: "--no-stats-hints",
      description: "Negative 'stats-hints' option",
    },
    {
      name: "--stats-hints-count",
      description: "Add the number of performance hints",
    },
    {
      name: "--no-stats-hints-count",
      description: "Negative 'stats-hints-count' option",
    },
    {
      name: "--stats-ids",
      description: "Add ids",
    },
    {
      name: "--no-stats-ids",
      description: "Negative 'stats-ids' option",
    },
    {
      name: "--stats-logging",
      description:
        "Specify log level of logging output. Enable/disable logging output (`true`: shows normal logging output, loglevel: log)",
      args: {
        name: "value",
        isOptional: true,
      },
    },
    {
      name: "--no-stats-logging",
      description: "Negative 'stats-logging' option",
    },
    {
      name: "--stats-logging-debug",
      description:
        "Enable/Disable debug logging for all loggers. Include debug logging of specified loggers (i. e. for plugins or loaders). Filters can be Strings, RegExps or Functions",
      args: {
        name: "value",
        isOptional: true,
        isVariadic: true,
      },
    },
    {
      name: "--no-stats-logging-debug",
      description: "Negative 'stats-logging-debug' option",
    },
    {
      name: "--stats-logging-debug-reset",
      description:
        "Clear all items provided in 'stats.loggingDebug' configuration. Include debug logging of specified loggers (i. e. for plugins or loaders). Filters can be Strings, RegExps or Functions",
    },
    {
      name: "--stats-logging-trace",
      description: "Add stack traces to logging output",
    },
    {
      name: "--no-stats-logging-trace",
      description: "Negative 'stats-logging-trace' option",
    },
    {
      name: "--stats-module-assets",
      description: "Add information about assets inside modules",
    },
    {
      name: "--no-stats-module-assets",
      description: "Negative 'stats-module-assets' option",
    },
    {
      name: "--stats-module-trace",
      description: "Add dependencies and origin of warnings/errors",
    },
    {
      name: "--no-stats-module-trace",
      description: "Negative 'stats-module-trace' option",
    },
    {
      name: "--stats-modules",
      description: "Add built modules information",
    },
    {
      name: "--no-stats-modules",
      description: "Negative 'stats-modules' option",
    },
    {
      name: "--stats-modules-sort",
      description: "Sort the modules by that field",
      args: {
        name: "value",
      },
    },
    {
      name: "--no-stats-modules-sort",
      description: "Negative 'stats-modules-sort' option",
    },
    {
      name: "--stats-modules-space",
      description:
        "Space to display modules (groups will be collapsed to fit this space, value is in number of modules/groups)",
      args: {
        name: "value",
      },
    },
    {
      name: "--stats-nested-modules",
      description:
        "Add information about modules nested in other modules (like with module concatenation)",
    },
    {
      name: "--no-stats-nested-modules",
      description: "Negative 'stats-nested-modules' option",
    },
    {
      name: "--stats-nested-modules-space",
      description:
        "Space to display modules nested within other modules (groups will be collapsed to fit this space, value is in number of modules/group)",
      args: {
        name: "value",
      },
    },
    {
      name: "--stats-optimization-bailout",
      description: "Show reasons why optimization bailed out for modules",
    },
    {
      name: "--no-stats-optimization-bailout",
      description: "Negative 'stats-optimization-bailout' option",
    },
    {
      name: "--stats-orphan-modules",
      description: "Add information about orphan modules",
    },
    {
      name: "--no-stats-orphan-modules",
      description: "Negative 'stats-orphan-modules' option",
    },
    {
      name: "--stats-output-path",
      description: "Add output path information",
    },
    {
      name: "--no-stats-output-path",
      description: "Negative 'stats-output-path' option",
    },
    {
      name: "--stats-performance",
      description: "Add performance hint flags",
    },
    {
      name: "--no-stats-performance",
      description: "Negative 'stats-performance' option",
    },
    {
      name: "--stats-preset",
      description: "Preset for the default values",
      args: {
        name: "value",
        isOptional: true,
      },
    },
    {
      name: "--no-stats-preset",
      description: "Negative 'stats-preset' option",
    },
    {
      name: "--stats-provided-exports",
      description: "Show exports provided by modules",
    },
    {
      name: "--no-stats-provided-exports",
      description: "Negative 'stats-provided-exports' option",
    },
    {
      name: "--stats-public-path",
      description: "Add public path information",
    },
    {
      name: "--no-stats-public-path",
      description: "Negative 'stats-public-path' option",
    },
    {
      name: "--stats-reasons",
      description: "Add information about the reasons why modules are included",
    },
    {
      name: "--no-stats-reasons",
      description: "Negative 'stats-reasons' option",
    },
    {
      name: "--stats-reasons-space",
      description:
        "Space to display reasons (groups will be collapsed to fit this space)",
      args: {
        name: "value",
      },
    },
    {
      name: "--stats-related-assets",
      description:
        "Add information about assets that are related to other assets (like SourceMaps for assets)",
    },
    {
      name: "--no-stats-related-assets",
      description: "Negative 'stats-related-assets' option",
    },
    {
      name: "--stats-runtime",
      description:
        "Add information about runtime modules (deprecated: use 'runtimeModules' instead)",
      deprecated: true,
    },
    {
      name: "--no-stats-runtime",
      description: "Negative 'stats-runtime' option",
    },
    {
      name: "--stats-runtime-modules",
      description: "Add information about runtime modules",
    },
    {
      name: "--no-stats-runtime-modules",
      description: "Negative 'stats-runtime-modules' option",
    },
    {
      name: "--stats-source",
      description: "Add the source code of modules",
    },
    {
      name: "--no-stats-source",
      description: "Negative 'stats-source' option",
    },
    {
      name: "--stats-timings",
      description: "Add timing information",
    },
    {
      name: "--no-stats-timings",
      description: "Negative 'stats-timings' option",
    },
    {
      name: "--stats-used-exports",
      description: "Show exports used by modules",
    },
    {
      name: "--no-stats-used-exports",
      description: "Negative 'stats-used-exports' option",
    },
    {
      name: "--stats-version",
      description: "Add webpack version information",
    },
    {
      name: "--no-stats-version",
      description: "Negative 'stats-version' option",
    },
    {
      name: "--stats-warnings",
      description: "Add warnings",
    },
    {
      name: "--no-stats-warnings",
      description: "Negative 'stats-warnings' option",
    },
    {
      name: "--stats-warnings-count",
      description: "Add warnings count",
    },
    {
      name: "--no-stats-warnings-count",
      description: "Negative 'stats-warnings-count' option",
    },
    {
      name: "--stats-warnings-filter",
      description:
        "Suppress listing warnings that match the specified filters (they will still be counted). Filters can be Strings, RegExps or Functions",
      args: {
        name: "value",

        isVariadic: true,
      },
    },
    {
      name: "--stats-warnings-filter-reset",
      description:
        "Clear all items provided in 'stats.warningsFilter' configuration. Suppress listing warnings that match the specified filters (they will still be counted). Filters can be Strings, RegExps or Functions",
    },
    {
      name: "--stats-warnings-space",
      description: "Space to display warnings (value is in number of lines)",
      args: {
        name: "value",
      },
    },
    {
      name: ["--target", "-t"],
      description:
        "Specific environment, runtime, or syntax. Environment to build for. An array of environments to build for all of them when possible",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--no-target",
      description: "Negative 'target' option",
    },
    {
      name: "--target-reset",
      description:
        "Clear all items provided in 'target' configuration. Environment to build for. An array of environments to build for all of them when possible",
    },
    {
      name: "--validate",
      description:
        "Enable validation of webpack configuration. Defaults to true in development mode. In production mode, defaults to true unless futureDefaults is enabled, then defaults to false",
    },
    {
      name: "--no-validate",
      description: "Negative 'validate' option",
    },
    {
      name: ["--watch", "-w"],
      description: "Enter watch mode, which rebuilds on file change",
    },
    {
      name: "--no-watch",
      description: "Negative 'watch' option",
    },
    {
      name: "--watch-options-aggregate-timeout",
      description:
        "Delay the rebuilt after the first change. Value is a time in ms",
      args: {
        name: "value",
      },
    },
    {
      name: "--watch-options-follow-symlinks",
      description:
        "Resolve symlinks and watch symlink and real file. This is usually not needed as webpack already resolves symlinks ('resolve.symlinks')",
    },
    {
      name: "--no-watch-options-follow-symlinks",
      description: "Negative 'watch-options-follow-symlinks' option",
    },
    {
      name: "--watch-options-ignored",
      description:
        "A glob pattern for files that should be ignored from watching. Ignore some files from watching (glob pattern or regexp)",
      args: {
        name: "value",

        isVariadic: true,
      },
    },
    {
      name: "--watch-options-ignored-reset",
      description:
        "Clear all items provided in 'watchOptions.ignored' configuration. Ignore some files from watching (glob pattern or regexp)",
    },
    {
      name: "--watch-options-poll",
      description:
        "`number`: use polling with specified interval. `true`: use polling",
      args: {
        name: "value",
        isOptional: true,
      },
    },
    {
      name: "--no-watch-options-poll",
      description: "Negative 'watch-options-poll' option",
    },
    {
      name: "--watch-options-stdin",
      description: "Stop watching when stdin stream has ended",
    },
    {
      name: "--no-watch-options-stdin",
      description: "Negative 'watch-options-stdin' option",
    },
    {
      name: "--color",
      description: "Enable colors on console",
      isPersistent: true,
    },
    {
      name: "--no-color",
      description: "Disable colors on console",
      isPersistent: true,
    },
    {
      name: ["--version", "-v"],
      description:
        "Output the version number of 'webpack', 'webpack-cli' and 'webpack-dev-server' and other packages",
      isPersistent: true,
    },
    {
      name: ["--help", "-h"],
      description: "Display help for commands and options",
      args: {
        name: "verbose",
        isOptional: true,
        suggestions: ["verbose"],
      },
      isPersistent: true,
    },
  ],
  // Only uncomment if webpack takes an argument
  // args: {}
};
export default completionSpec;
