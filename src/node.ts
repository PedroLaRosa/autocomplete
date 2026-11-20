// Node.js v26.13.1 (nodejs.org/dist/index.json: newest stable release, also the 26.x LTS "Lithium", 2026-11-20). Source: doc/api/cli.md, doc/node.1, doc/api/debugger.md and src/node_options.cc at tag v26.13.1, read statically (the v26 binary was not run); V8 flag descriptions from `node --v8-options` of the preinstalled v22.23.5.
// Not re-verified: the AdonisJS `node ace` subcommands in generateSpec are unchanged from the previous spec (AdonisJS is not part of Node.js).
// Omitted on purpose: undocumented/internal options (--expose-internals, --inspect-brk-node, --debug-arraybuffer-allocations, ...), legacy aliases (--experimental-config-file, --experimental-strip-types, ...), positive forms of options that default to on, and --security-revert (v26 has no revertible CVEs).
import { filepaths } from "@tabsmith/autocomplete-generators";

/** Lists the scripts of the package.json in the current directory for `--run` */
const packageScripts: Fig.Generator = {
  script: ["cat", "package.json"],
  postProcess: (out) => {
    try {
      const scripts: Record<string, unknown> = JSON.parse(out).scripts ?? {};
      return Object.entries(scripts).map(([name, command]) => ({
        name,
        description: String(command),
        icon: "📦",
      }));
    } catch {
      return [];
    }
  },
};

const scriptArg: Fig.Arg = {
  name: "node script",
  isScript: true,
  generators: filepaths({
    extensions: ["mjs", "js", "cjs", "mts", "ts", "cts"],
    editFileSuggestions: { priority: 76 },
  }),
};

const inspectSubcommand: Fig.Subcommand = {
  name: "inspect",
  description: "Start the command-line debugger (interactive or probe mode)",
  options: [
    {
      name: "--port",
      description: "Set the local inspector port",
      requiresSeparator: true,
      args: { name: "port" },
    },
    {
      name: "-p",
      description: "Attach the debugger to a running process",
      args: { name: "pid" },
    },
    {
      name: "--probe",
      description:
        "Set a source breakpoint and evaluate the following --expr when it is reached (probe mode, experimental)",
      args: { name: "file:line[:col]" },
      isRepeatable: true,
    },
    {
      name: "--expr",
      description: "Expression to evaluate at the preceding --probe location",
      args: { name: "expression" },
      isRepeatable: true,
      dependsOn: ["--probe"],
    },
    {
      name: "--cond",
      description: "Only record a probe hit when this expression is truthy",
      args: { name: "expression" },
      isRepeatable: true,
      dependsOn: ["--probe"],
    },
    {
      name: "--max-hit",
      description: "Limit the number of times a probe can be hit",
      args: { name: "n" },
      isRepeatable: true,
      dependsOn: ["--probe"],
    },
    {
      name: "--timeout",
      description:
        "Set the wall-clock deadline of the probe session in milliseconds",
      args: { name: "ms", default: "30000" },
    },
    {
      name: "--json",
      description: "Print a structured JSON report instead of the text report",
    },
    {
      name: "--preview",
      description:
        "Include property previews of object values in the JSON report",
    },
    {
      name: ["-h", "--help"],
      description: "Print the debugger usage",
    },
  ],
  args: scriptArg,
};

const completionSpec: Fig.Subcommand = {
  name: "node",
  description: "Run the node interpreter",
  subcommands: [inspectSubcommand],
  args: scriptArg,
  options: [
    {
      name: "--abort-on-uncaught-exception",
      description:
        "Abort instead of exiting on an uncaught exception, generating a core file for post-mortem analysis",
    },
    {
      name: "--allow-addons",
      description: "Allow native addons when using the permission model",
    },
    {
      name: "--allow-child-process",
      description:
        "Allow spawning child processes when using the permission model",
    },
    {
      name: "--allow-ffi",
      description: "Allow the FFI APIs when using the permission model",
    },
    {
      name: "--allow-fs-read",
      description:
        "Allow reading the given file system paths when using the permission model",
      args: {
        name: "path",
        suggestions: ["*"],
        template: ["filepaths", "folders"],
      },
      isRepeatable: true,
    },
    {
      name: "--allow-fs-vfs",
      description:
        "Allow mounting a virtual file system when using the permission model",
    },
    {
      name: "--allow-fs-write",
      description:
        "Allow writing to the given file system paths when using the permission model",
      args: {
        name: "path",
        suggestions: ["*"],
        template: ["filepaths", "folders"],
      },
      isRepeatable: true,
    },
    {
      name: "--allow-inspector",
      description:
        "Allow connecting through the inspector protocol when using the permission model",
    },
    {
      name: "--allow-net",
      description: "Allow network access when using the permission model",
    },
    {
      name: "--allow-openssl-store",
      description:
        "Allow OpenSSL STORE loaders when using the permission model",
    },
    {
      name: "--allow-wasi",
      description:
        "Allow creating WASI instances when using the permission model",
    },
    {
      name: "--allow-worker",
      description:
        "Allow creating worker threads when using the permission model",
    },
    {
      name: "--bench",
      description: "Start the experimental command-line benchmark runner",
      dependsOn: ["--experimental-bench"],
      exclusiveOn: [
        "--test",
        "--watch",
        "--watch-path",
        "--check",
        "-c",
        "--eval",
        "-e",
        "--interactive",
        "-i",
      ],
    },
    {
      name: "--bench-isolation",
      description: "Set the benchmark file isolation mode (default: process)",
      args: { name: "mode", suggestions: ["process", "none"] },
      dependsOn: ["--experimental-bench"],
    },
    {
      name: "--bench-name-pattern",
      description:
        "Only run benchmarks whose full name matches this regular expression",
      args: { name: "pattern" },
      dependsOn: ["--experimental-bench"],
    },
    {
      name: "--bench-reporter-destination",
      description:
        "Set the destination of the corresponding benchmark reporter",
      args: {
        name: "destination",
        suggestions: ["stdout", "stderr"],
        template: "filepaths",
      },
      isRepeatable: true,
      dependsOn: ["--experimental-bench"],
    },
    {
      name: "--bench-reporter",
      description:
        "Report benchmark results using the given reporter (default: spec)",
      args: { name: "reporter", suggestions: ["spec", "json"] },
      isRepeatable: true,
      dependsOn: ["--experimental-bench"],
    },
    {
      name: "--bench-samples",
      description:
        "Override the maximum number of measured samples of every benchmark",
      args: { name: "count" },
      dependsOn: ["--experimental-bench"],
    },
    {
      name: "--bench-warmup",
      description:
        "Override the number of unreported warmup samples of every benchmark",
      args: { name: "count" },
      dependsOn: ["--experimental-bench"],
    },
    {
      name: "--build-sea",
      description:
        "Build a single executable application from a JSON configuration file",
      args: { name: "config", template: "filepaths" },
    },
    {
      name: "--build-snapshot",
      description: "Generate a startup snapshot blob when the process exits",
    },
    {
      name: "--build-snapshot-config",
      description:
        "Generate a startup snapshot blob using the given JSON configuration file",
      args: { name: "path", template: "filepaths" },
    },
    {
      name: ["-c", "--check"],
      description: "Syntax check the script without executing it",
    },
    {
      name: "--completion-bash",
      description: "Print a source-able bash completion script for Node.js",
    },
    {
      name: ["-C", "--conditions"],
      description: "Provide custom conditional exports resolution conditions",
      args: { name: "condition" },
      isRepeatable: true,
    },
    {
      name: "--config-file",
      description:
        "Read options from a JSON configuration file (default: node.config.json)",
      requiresSeparator: true,
      args: { name: "path", isOptional: true, template: "filepaths" },
    },
    {
      name: "--cpu-prof",
      description:
        "Start the V8 CPU profiler on start up and write the CPU profile to disk before exit",
    },
    {
      name: "--cpu-prof-dir",
      description:
        "Set the directory where the CPU profiles generated by --cpu-prof are placed",
      args: { name: "directory", template: "folders" },
    },
    {
      name: "--cpu-prof-interval",
      description:
        "Set the sampling interval in microseconds of the CPU profiles generated by --cpu-prof",
      args: { name: "microseconds", default: "1000" },
    },
    {
      name: "--cpu-prof-name",
      description:
        "Set the file name of the CPU profile generated by --cpu-prof",
      args: { name: "name" },
    },
    {
      name: "--diagnostic-dir",
      description:
        "Set the directory for all diagnostic output files (default: current working directory)",
      args: { name: "directory", template: "folders" },
    },
    {
      name: "--disable-proto",
      description: "Disable the Object.prototype.__proto__ property",
      args: { name: "mode", suggestions: ["delete", "throw"] },
    },
    {
      name: "--disable-sigusr1",
      description:
        "Disable starting a debugging session by sending SIGUSR1 to the process",
    },
    {
      name: "--disable-warning",
      description: "Silence specific process warnings by code or type",
      args: {
        name: "code-or-type",
        suggestions: ["DeprecationWarning", "ExperimentalWarning"],
      },
      isRepeatable: true,
    },
    {
      name: "--disable-wasm-trap-handler",
      description:
        "Disable trap-handler-based WebAssembly bound checks and use inline bound checks instead",
    },
    {
      name: "--disallow-code-generation-from-strings",
      description:
        "Make eval and new Function throw instead of generating code from strings",
    },
    {
      name: "--dns-result-order",
      description: "Set the default result order of dns.lookup()",
      args: {
        name: "order",
        suggestions: ["ipv4first", "ipv6first", "verbatim"],
      },
    },
    { name: "--enable-fips", description: "Enable FIPS crypto at startup" },
    {
      name: "--enable-fips-indicator-events",
      description:
        "Publish OpenSSL FIPS indicator results to the crypto.fips.indicator diagnostics channel",
    },
    {
      name: "--enable-source-maps",
      description: "Enable Source Map support for stack traces",
    },
    {
      name: "--entry-url",
      description:
        "Interpret the entry point as a URL instead of a path (experimental)",
    },
    {
      name: "--env-file-if-exists",
      description:
        "Load environment variables from a file, ignoring it if it does not exist",
      args: { name: "file", template: "filepaths" },
      isRepeatable: true,
    },
    {
      name: "--env-file",
      description: "Load environment variables from a file",
      args: { name: "file", template: "filepaths" },
      isRepeatable: true,
    },
    {
      name: ["-e", "--eval"],
      description: "Evaluate the argument as a script",
      insertValue: "-e '{cursor}'",
      args: { name: "script" },
    },
    {
      name: "--experimental-addon-modules",
      description:
        "Enable import support for .node addons (enabled by default)",
    },
    {
      name: "--experimental-bench",
      description:
        "Enable the experimental node:bench module and benchmark runner",
    },
    {
      name: "--experimental-dtls",
      description: "Enable experimental support for the DTLS protocol",
    },
    {
      name: "--experimental-eventsource",
      description:
        "Expose the experimental EventSource Web API on the global scope",
    },
    {
      name: "--experimental-import-meta-resolve",
      description:
        "Enable the parentURL argument of import.meta.resolve() (experimental)",
    },
    {
      name: "--experimental-import-text",
      description:
        "Enable experimental support for importing modules with type: 'text'",
    },
    {
      name: "--experimental-inspector-network-resource",
      description:
        "Enable experimental support for loading network resources through the inspector",
    },
    {
      name: ["--experimental-loader", "--loader"],
      description:
        "Specify a module with asynchronous module customization hooks (discouraged, use --import with register() instead)",
      args: { name: "module", template: "filepaths" },
      isRepeatable: true,
      deprecated: true,
    },
    {
      name: "--experimental-network-inspection",
      description:
        "Enable experimental support for network inspection with Chrome DevTools",
    },
    {
      name: "--experimental-package-map",
      description:
        "Enable experimental package map resolution using the given JSON file",
      args: { name: "path", template: "filepaths" },
    },
    {
      name: "--experimental-print-required-tla",
      description:
        "Print the locations of top-level await that prevent an ES module graph from being required",
    },
    {
      name: "--experimental-quic",
      description: "Enable experimental support for the QUIC protocol",
    },
    {
      name: "--experimental-sea-config",
      description:
        "Generate a blob to inject into the Node.js binary for a single executable application (experimental)",
      args: { name: "config", template: "filepaths" },
    },
    {
      name: "--experimental-shadow-realm",
      description: "Enable ShadowRealm support",
    },
    {
      name: "--experimental-storage-inspection",
      description: "Enable experimental support for storage inspection",
    },
    {
      name: "--experimental-stream-iter",
      description: "Enable the experimental node:stream/iter module",
    },
    {
      name: "--experimental-test-coverage",
      description: "Collect code coverage in the test runner",
    },
    {
      name: "--experimental-test-module-mocks",
      description:
        "Enable module mocking in the test runner (early development)",
    },
    {
      name: "--experimental-test-tag-filter",
      description:
        "Only run tests matching a boolean tag filter expression (early development)",
      args: { name: "expression" },
      isRepeatable: true,
    },
    {
      name: "--experimental-vfs",
      description: "Enable the experimental node:vfs module",
    },
    {
      name: "--experimental-vm-modules",
      description:
        "Enable experimental ES module support in the node:vm module",
    },
    {
      name: "--experimental-wasi-unstable-preview1",
      description:
        "Enable experimental WASI support (no longer required, WASI is enabled by default)",
      deprecated: true,
    },
    {
      name: "--experimental-web-worker",
      description: "Enable experimental support for the Web Worker API",
    },
    {
      name: "--experimental-worker-inspection",
      description:
        "Enable experimental support for worker inspection with Chrome DevTools",
    },
    {
      name: "--force-context-aware",
      description: "Disable loading native addons that are not context-aware",
    },
    {
      name: "--force-fips",
      description:
        "Enable FIPS crypto at startup and prevent it from being disabled from script code",
      requiresSeparator: true,
      args: {
        name: "mode",
        isOptional: true,
        suggestions: ["provider", "strict"],
      },
    },
    {
      name: "--force-node-api-uncaught-exceptions-policy",
      description:
        "Enforce the uncaughtException event on Node-API asynchronous callbacks",
    },
    {
      name: "--frozen-intrinsics",
      description:
        "Enable experimental frozen intrinsics like Array and Object",
    },
    {
      name: "--heap-prof",
      description:
        "Start the V8 heap profiler on start up and write the heap profile to disk before exit",
    },
    {
      name: "--heap-prof-dir",
      description:
        "Set the directory where the heap profiles generated by --heap-prof are placed",
      args: { name: "directory", template: "folders" },
    },
    {
      name: "--heap-prof-interval",
      description:
        "Set the average sampling interval in bytes of the heap profiles generated by --heap-prof",
      args: { name: "bytes", default: "524288" },
    },
    {
      name: "--heap-prof-name",
      description:
        "Set the file name of the heap profile generated by --heap-prof",
      args: { name: "name" },
    },
    {
      name: "--heapsnapshot-near-heap-limit",
      description:
        "Write V8 heap snapshots when heap usage approaches the heap limit, at most the given number of times",
      args: { name: "max_count" },
    },
    {
      name: "--heapsnapshot-signal",
      description:
        "Write a V8 heap snapshot when the process receives the given signal",
      args: { name: "signal" },
    },
    { name: ["-h", "--help"], description: "Print node command-line options" },
    {
      name: "--icu-data-dir",
      description: "Set the ICU data load path (overrides NODE_ICU_DATA)",
      args: { name: "dir", template: "folders" },
    },
    {
      name: "--import",
      description: "Preload an ES module at startup",
      args: { name: "module", template: "filepaths" },
      isRepeatable: true,
    },
    {
      name: "--input-type",
      description:
        "Interpret --eval or stdin input as CommonJS or as an ES module",
      args: {
        name: "type",
        suggestions: [
          "commonjs",
          "module",
          "commonjs-typescript",
          "module-typescript",
        ],
      },
    },
    {
      name: "--insecure-http-parser",
      description:
        "Use a lenient HTTP parser that accepts invalid HTTP headers",
    },
    {
      name: "--inspect-brk",
      description:
        "Activate the inspector on host:port and break at the start of the user script (default: 127.0.0.1:9229)",
      requiresSeparator: true,
      args: { name: "[host:]port", isOptional: true },
    },
    {
      name: "--inspect-port",
      description: "Set the host:port used when the inspector is activated",
      args: { name: "[host:]port" },
    },
    {
      name: "--inspect-publish-uid",
      description:
        "Set how the inspector WebSocket URL is exposed (default: stderr,http)",
      args: {
        name: "destinations",
        suggestions: ["stderr", "http", "stderr,http"],
      },
    },
    {
      name: "--inspect-wait",
      description:
        "Activate the inspector on host:port and wait for a debugger to attach (default: 127.0.0.1:9229)",
      requiresSeparator: true,
      args: { name: "[host:]port", isOptional: true },
    },
    {
      name: "--inspect",
      description:
        "Activate the inspector on host:port (default: 127.0.0.1:9229)",
      requiresSeparator: true,
      args: { name: "[host:]port", isOptional: true },
    },
    {
      name: ["-i", "--interactive"],
      description:
        "Always enter the REPL even if stdin does not appear to be a terminal",
    },
    {
      name: "--jitless",
      description:
        "Disable runtime allocation of executable memory (experimental)",
    },
    {
      name: "--localstorage-file",
      description: "Set the file used to persist localStorage data",
      args: { name: "file", template: "filepaths" },
    },
    {
      name: "--max-http-header-size",
      description:
        "Set the maximum size of HTTP headers in bytes (default: 16384)",
      args: { name: "size", default: "16384" },
    },
    {
      name: "--max-old-space-size-percentage",
      description:
        "Set the maximum size of V8's old memory section as a percentage of available system memory",
      args: { name: "percentage" },
    },
    {
      name: "--network-family-autoselection-attempt-timeout",
      description:
        "Set the default timeout in milliseconds of the network family autoselection attempts",
      args: { name: "milliseconds", default: "500" },
    },
    {
      name: "--no-addons",
      description:
        "Disable the node-addons exports condition and loading of native addons",
    },
    {
      name: "--no-async-context-frame",
      description:
        "Back AsyncLocalStorage with async_hooks instead of AsyncContextFrame",
    },
    { name: "--no-deprecation", description: "Silence deprecation warnings" },
    {
      name: "--no-experimental-detect-module",
      description: "Disable syntax detection to determine the module type",
    },
    {
      name: "--no-experimental-ffi",
      description: "Disable the experimental node:ffi module",
    },
    {
      name: "--no-experimental-global-navigator",
      description: "Disable exposing the Navigator API on the global scope",
    },
    {
      name: "--no-experimental-repl-await",
      description: "Disable top-level await in the REPL",
    },
    {
      name: "--no-experimental-require-module",
      description:
        "Disable loading synchronous ES module graphs in require() (legacy, use --no-require-module instead)",
      deprecated: true,
    },
    {
      name: "--no-experimental-sqlite",
      description: "Disable the experimental node:sqlite module",
    },
    {
      name: "--no-experimental-websocket",
      description: "Disable exposing WebSocket on the global scope",
    },
    {
      name: "--no-experimental-webstorage",
      description: "Disable Web Storage support",
    },
    {
      name: "--no-extra-info-on-fatal-exception",
      description:
        "Hide extra information on fatal exceptions that cause the process to exit",
    },
    {
      name: "--no-force-async-hooks-checks",
      description: "Disable runtime checks for async_hooks",
    },
    {
      name: "--no-global-search-paths",
      description:
        "Do not search for modules in global paths like $HOME/.node_modules and $NODE_PATH",
    },
    {
      name: "--no-network-family-autoselection",
      description:
        "Disable the network family autoselection algorithm unless connection options enable it",
    },
    {
      name: "--no-require-module",
      description: "Disable loading synchronous ES module graphs in require()",
    },
    {
      name: "--no-strip-types",
      description: "Disable type-stripping for TypeScript files",
    },
    {
      name: "--no-warnings",
      description: "Silence all process warnings, including deprecations",
    },
    {
      name: "--no-worker-snapshot",
      description:
        "Bootstrap worker threads from scratch instead of the built-in startup snapshot (experimental)",
    },
    {
      name: "--node-memory-debug",
      description:
        "Enable extra debug checks for memory leaks in Node.js internals",
    },
    {
      name: "--openssl-config",
      description:
        "Load an OpenSSL configuration file on startup (overrides OPENSSL_CONF)",
      args: { name: "file", template: "filepaths" },
    },
    {
      name: "--openssl-legacy-provider",
      description: "Enable the OpenSSL 3.0 legacy provider",
    },
    {
      name: "--openssl-shared-config",
      description:
        "Read the openssl_conf default configuration section from the OpenSSL configuration file",
    },
    {
      name: "--pending-deprecation",
      description: "Emit pending deprecation warnings",
    },
    {
      name: "--permission",
      description: "Enable the permission model for the current process",
    },
    {
      name: "--permission-audit",
      description:
        "Enable audit mode of the permission model, publishing violations to diagnostics channels instead of denying access",
    },
    {
      name: "--preserve-symlinks",
      description: "Preserve symbolic links when resolving and caching modules",
    },
    {
      name: "--preserve-symlinks-main",
      description:
        "Preserve symbolic links when resolving and caching the main module",
    },
    {
      name: ["-p", "--print"],
      description: "Evaluate the argument as a script and print the result",
      args: { name: "script" },
    },
    {
      name: "--process-timeout",
      description:
        "Exit with code 124 if the process is still running after the given duration (e.g. 500ms, 30s, 5m, 1h)",
      args: { name: "duration" },
    },
    { name: "--prof", description: "Generate V8 profiler output" },
    {
      name: "--prof-process",
      description: "Process V8 profiler output generated using --prof",
    },
    {
      name: "--redirect-warnings",
      description: "Write process warnings to the given file instead of stderr",
      args: { name: "file", template: "filepaths" },
    },
    {
      name: "--report-compact",
      description: "Write diagnostic reports as single-line JSON",
    },
    {
      name: ["--report-dir", "--report-directory"],
      description: "Set the directory where diagnostic reports are generated",
      args: { name: "directory", template: "folders" },
    },
    {
      name: "--report-exclude-env",
      description: "Exclude environment variables from diagnostic reports",
    },
    {
      name: "--report-exclude-network",
      description:
        "Exclude network interface diagnostics from diagnostic reports",
    },
    {
      name: "--report-filename",
      description: "Set the file name of the diagnostic report",
      args: {
        name: "filename",
        suggestions: ["stdout", "stderr"],
        template: "filepaths",
      },
    },
    {
      name: "--report-on-fatalerror",
      description: "Generate a diagnostic report on fatal (internal) errors",
    },
    {
      name: "--report-on-process-timeout",
      description:
        "Generate a diagnostic report when --process-timeout expires",
      dependsOn: ["--process-timeout"],
    },
    {
      name: "--report-on-signal",
      description:
        "Generate a diagnostic report when the process receives a signal",
    },
    {
      name: "--report-signal",
      description: "Set the signal that triggers a diagnostic report",
      args: { name: "signal", default: "SIGUSR2" },
    },
    {
      name: "--report-uncaught-exception",
      description:
        "Generate a diagnostic report when the process exits due to an uncaught exception",
    },
    {
      name: ["-r", "--require"],
      description: "Preload a module at startup",
      args: { name: "module", template: "filepaths" },
      isRepeatable: true,
    },
    {
      name: "--run",
      description:
        "Run a script from the scripts object of package.json, or list the available scripts",
      args: { name: "script", isOptional: true, generators: packageScripts },
    },
    {
      name: "--secure-heap-min",
      description:
        "Set the minimum allocation size from the OpenSSL secure heap (a power of two)",
      args: { name: "n" },
    },
    {
      name: "--secure-heap",
      description:
        "Initialize an OpenSSL secure heap of the given size in bytes",
      args: { name: "n" },
    },
    {
      name: "--snapshot-blob",
      description:
        "Set the path of the snapshot blob to write (with --build-snapshot) or to restore from",
      args: { name: "path", template: "filepaths" },
    },
    {
      name: "--test",
      description: "Start the Node.js command-line test runner",
      exclusiveOn: [
        "--watch-path",
        "--check",
        "-c",
        "--eval",
        "-e",
        "--interactive",
        "-i",
      ],
    },
    {
      name: "--test-concurrency",
      description: "Set the maximum number of test files executed concurrently",
      args: { name: "concurrency" },
    },
    {
      name: "--test-coverage-branches",
      description:
        "Require a minimum percentage of covered branches (experimental)",
      args: { name: "threshold" },
    },
    {
      name: "--test-coverage-exclude",
      description:
        "Exclude files matching a glob pattern from code coverage (experimental)",
      args: { name: "pattern" },
      isRepeatable: true,
    },
    {
      name: "--test-coverage-functions",
      description:
        "Require a minimum percentage of covered functions (experimental)",
      args: { name: "threshold" },
    },
    {
      name: "--test-coverage-include",
      description:
        "Include only files matching a glob pattern in code coverage (experimental)",
      args: { name: "pattern" },
      isRepeatable: true,
    },
    {
      name: "--test-coverage-include-all",
      description:
        "Report source files that were never loaded as having zero coverage (experimental)",
    },
    {
      name: "--test-coverage-lines",
      description:
        "Require a minimum percentage of covered lines (experimental)",
      args: { name: "threshold" },
    },
    {
      name: "--test-force-exit",
      description:
        "Exit the process once all tests have finished even if the event loop is still active",
    },
    {
      name: "--test-global-setup",
      description:
        "Evaluate a module before all tests to set up global state (early development)",
      args: { name: "module", template: "filepaths" },
    },
    {
      name: "--test-isolation",
      description: "Set the test isolation mode (default: process)",
      args: { name: "mode", suggestions: ["process", "none"] },
    },
    {
      name: "--test-name-pattern",
      description: "Only run tests whose name matches this regular expression",
      args: { name: "pattern" },
      isRepeatable: true,
    },
    {
      name: "--test-only",
      description: "Only run top level tests that have the only option set",
    },
    {
      name: "--test-random-seed",
      description: "Set the seed used to randomize the test execution order",
      args: { name: "seed" },
    },
    {
      name: "--test-randomize",
      description: "Randomize the test execution order",
    },
    {
      name: "--test-reporter",
      description: "Report test output using the given reporter",
      args: {
        name: "reporter",
        suggestions: ["spec", "dot", "tap", "junit", "lcov"],
      },
      isRepeatable: true,
    },
    {
      name: "--test-reporter-destination",
      description: "Set the destination of the corresponding test reporter",
      args: {
        name: "destination",
        suggestions: ["stdout", "stderr"],
        template: "filepaths",
      },
      isRepeatable: true,
    },
    {
      name: "--test-rerun-failures",
      description:
        "Persist test state to the given file to re-run only failed tests",
      args: { name: "path", template: "filepaths" },
    },
    {
      name: "--test-shard",
      description: "Run a shard of the test suite",
      args: { name: "index/total" },
    },
    {
      name: "--test-skip-pattern",
      description: "Skip tests whose name matches this regular expression",
      args: { name: "pattern" },
      isRepeatable: true,
    },
    {
      name: "--test-timeout",
      description: "Set the number of milliseconds after which a test fails",
      args: { name: "milliseconds" },
    },
    {
      name: "--test-update-snapshots",
      description: "Regenerate the snapshot files used by the test runner",
    },
    {
      name: "--throw-deprecation",
      description: "Throw errors for deprecations",
    },
    {
      name: "--title",
      description: "Set process.title on startup",
      args: { name: "title" },
    },
    {
      name: "--tls-cipher-list",
      description: "Specify an alternative default TLS cipher list",
      args: { name: "list" },
    },
    {
      name: "--tls-keylog",
      description: "Log TLS key material to a file in NSS SSLKEYLOGFILE format",
      args: { name: "file", template: "filepaths" },
    },
    {
      name: "--tls-max-v1.2",
      description:
        "Set the default maximum TLS version to TLSv1.2, disabling TLSv1.3",
    },
    {
      name: "--tls-max-v1.3",
      description: "Set the default maximum TLS version to TLSv1.3",
    },
    {
      name: "--tls-min-v1.0",
      description: "Set the default minimum TLS version to TLSv1.0",
    },
    {
      name: "--tls-min-v1.1",
      description: "Set the default minimum TLS version to TLSv1.1",
    },
    {
      name: "--tls-min-v1.2",
      description: "Set the default minimum TLS version to TLSv1.2",
    },
    {
      name: "--tls-min-v1.3",
      description:
        "Set the default minimum TLS version to TLSv1.3, disabling TLSv1.2",
    },
    {
      name: "--trace-deprecation",
      description: "Print stack traces for deprecations",
    },
    {
      name: "--trace-env",
      description: "Print accesses to environment variables to stderr",
    },
    {
      name: "--trace-env-js-stack",
      description:
        "Print accesses to environment variables with the JavaScript stack trace",
    },
    {
      name: "--trace-env-native-stack",
      description:
        "Print accesses to environment variables with the native stack trace",
    },
    {
      name: "--trace-event-categories",
      description:
        "Set the comma-separated trace event categories to record with --trace-events-enabled",
      args: { name: "categories" },
    },
    {
      name: "--trace-event-file-pattern",
      description:
        "Set the file path template of the trace event data (supports ${rotation} and ${pid})",
      args: { name: "pattern" },
    },
    {
      name: "--trace-events-enabled",
      description: "Enable the collection of trace event tracing information",
    },
    {
      name: "--trace-exit",
      description:
        "Print a stack trace whenever an environment is exited proactively",
    },
    {
      name: "--trace-promises",
      description:
        "Print stack traces on promise initialization and resolution",
    },
    {
      name: "--trace-require-module",
      description: "Print information about usage of require() on ES modules",
      args: { name: "mode", suggestions: ["all", "no-node-modules"] },
    },
    { name: "--trace-sigint", description: "Print a stack trace on SIGINT" },
    {
      name: "--trace-sync-io",
      description:
        "Print a stack trace whenever synchronous I/O is detected after the first turn of the event loop",
    },
    {
      name: "--trace-tls",
      description: "Print TLS packet trace information to stderr",
    },
    {
      name: "--trace-uncaught",
      description:
        "Print stack traces for the throw behind uncaught exceptions",
    },
    {
      name: "--trace-warnings",
      description:
        "Print stack traces for process warnings, including deprecations",
    },
    {
      name: "--track-heap-objects",
      description: "Track heap object allocations for heap snapshots",
    },
    {
      name: "--unhandled-rejections",
      description: "Set the behavior on unhandled rejections (default: throw)",
      args: {
        name: "mode",
        suggestions: [
          {
            name: "throw",
            description:
              "Emit unhandledRejection, or raise an uncaught exception if there is no handler",
          },
          {
            name: "strict",
            description:
              "Raise an uncaught exception, and emit unhandledRejection if it is handled",
          },
          {
            name: "warn",
            description:
              "Always trigger a warning, without the deprecation warning",
          },
          {
            name: "warn-with-error-code",
            description:
              "Emit unhandledRejection, or warn and set the exit code to 1 if there is no handler",
          },
          { name: "none", description: "Silence all warnings" },
        ],
      },
    },
    {
      name: "--use-bundled-ca",
      description:
        "Use the bundled Mozilla CA store supplied by this Node.js version",
    },
    {
      name: "--use-env-proxy",
      description:
        "Route requests through the proxy set in HTTP_PROXY, HTTPS_PROXY and NO_PROXY",
    },
    {
      name: "--use-largepages",
      description:
        "No-op, kept for compatibility (previously re-mapped static code to large memory pages)",
      args: { name: "mode", suggestions: ["off", "on", "silent"] },
      deprecated: true,
    },
    { name: "--use-openssl-ca", description: "Use OpenSSL's default CA store" },
    {
      name: "--use-system-ca",
      description: "Use the trusted CA certificates of the system store",
    },
    { name: "--v8-options", description: "Print V8 command-line options" },
    {
      name: "--v8-pool-size",
      description:
        "Set the size of V8's thread pool for background jobs (0 chooses automatically)",
      args: { name: "num" },
    },
    { name: ["-v", "--version"], description: "Print the Node.js version" },
    {
      name: "--vfs-load",
      description:
        "Mount a directory or archive as a virtual file system and run the entry point against it",
      args: { name: "source", template: ["filepaths", "folders"] },
      dependsOn: ["--experimental-vfs"],
    },
    {
      name: "--watch",
      description: "Run in watch mode, restarting when watched files change",
      exclusiveOn: ["--check", "-c", "--eval", "-e", "--interactive", "-i"],
    },
    {
      name: "--watch-kill-signal",
      description:
        "Set the signal sent to the process on watch mode restarts (default: SIGTERM)",
      args: {
        name: "signal",
        suggestions: [
          "SIGTERM",
          "SIGINT",
          "SIGHUP",
          "SIGQUIT",
          "SIGKILL",
          "SIGUSR1",
          "SIGUSR2",
        ],
      },
    },
    {
      name: "--watch-path",
      description:
        "Run in watch mode watching the given path instead of the imported modules",
      args: { name: "path", template: "filepaths" },
      isRepeatable: true,
      exclusiveOn: [
        "--check",
        "-c",
        "--eval",
        "-e",
        "--interactive",
        "-i",
        "--test",
      ],
    },
    {
      name: "--watch-preserve-output",
      description:
        "Disable clearing the console when watch mode restarts the process",
    },
    {
      name: "--zero-fill-buffers",
      description:
        "Automatically zero-fill all newly allocated Buffer instances",
    },
    {
      name: "--enable-etw-stack-walking",
      description: "Enable ETW stack walking on Windows",
    },
    {
      name: "--expose-gc",
      description: "Expose the gc() extension on the global scope",
    },
    {
      name: "--harmony-shadow-realm",
      description:
        "Enable the V8 ShadowRealm feature (in progress, experimental)",
    },
    {
      name: "--heap-snapshot-on-oom",
      description:
        "Write a heap snapshot to disk on last-resort garbage collections",
    },
    {
      name: "--interpreted-frames-native-stack",
      description:
        "Show interpreted frames on the native stack, which helps external profilers",
    },
    {
      name: "--max-heap-size",
      description: "Set the maximum heap size in megabytes",
      args: { name: "size" },
    },
    {
      name: "--max-old-space-size",
      description: "Set the maximum size of V8's old memory section in MiB",
      args: { name: "size" },
    },
    {
      name: "--max-semi-space-size",
      description:
        "Set the maximum semi-space size of V8's scavenge garbage collector in MiB",
      args: { name: "size" },
    },
    {
      name: "--perf-basic-prof",
      description: "Enable basic support for the Linux perf profiler",
    },
    {
      name: "--perf-basic-prof-only-functions",
      description: "Only report function code ranges to perf, without stubs",
    },
    {
      name: "--perf-prof",
      description:
        "Enable experimental annotate support for the Linux perf profiler",
    },
    {
      name: "--perf-prof-unwinding-info",
      description:
        "Enable unwinding info for the Linux perf profiler (experimental)",
    },
    {
      name: "--stack-trace-limit",
      description:
        "Set the maximum number of stack frames collected in an error's stack trace",
      args: { name: "limit", default: "10" },
    },
  ],
  generateSpec: async (tokens, executeShellCommand) => {
    if (
      (
        await executeShellCommand({
          command: "bash",
          args: ["-c", "isAdonisJsonPresentCommand"],
        })
      ).status === 0
    ) {
      return {
        name: "node",
        subcommands: [
          {
            name: "ace",
            description: "Run AdonisJS command-line",
            options: [
              {
                name: ["-h", "--help"],
                description: "Display AdonisJS Ace help",
              },
              {
                name: ["-v", "--version"],
                description: "Display AdonisJS version",
              },
            ],
            subcommands: [
              {
                name: "build",
                description:
                  "Compile project from Typescript to Javascript. Also compiles the frontend assets if using webpack encore",
                options: [
                  {
                    name: ["-prod", "--production"],
                    description: "Build for production",
                  },
                  {
                    name: "--assets",
                    description:
                      "Build frontend assets when webpack encore is installed",
                  },
                  {
                    name: "--no-assets",
                    description: "Disable building assets",
                  },
                  {
                    name: "--ignore-ts-errors",
                    description:
                      "Ignore typescript errors and complete the build process",
                  },
                  {
                    name: "--tsconfig",
                    description:
                      "Path to the TypeScript project configuration file",
                    args: {
                      name: "path",
                      description: "Path to tsconfig.json",
                    },
                  },
                  {
                    name: "--encore-args",
                    requiresSeparator: true,
                    insertValue: "--encore-args='{cursor}'",
                    description:
                      "CLI options to pass to the encore command line",
                  },
                  {
                    name: "--client",
                    args: {
                      name: "name",
                    },
                    description:
                      "Select the package manager to decide which lock file to copy to the build folder",
                  },
                ],
              },
              {
                name: ["configure", "invoke"],
                description: "Configure a given AdonisJS package",
                args: {
                  name: "name",
                  description: "Name of the package you want to configure",
                },
                subcommands: [
                  {
                    name: "@adonisjs/auth",
                    description: "Trigger auto configuring auth package",
                  },
                  {
                    name: "@adonisjs/shield",
                    description: "Trigger auto configuring shield package",
                  },
                  {
                    name: "@adonisjs/redis",
                    description: "Trigger auto configuring redis package",
                  },
                  {
                    name: "@adonisjs/mail",
                    description: "Trigger auto configuring mail package",
                  },
                ],
              },
              {
                name: "repl",
                description: "Start a new REPL session",
              },
              {
                name: "serve",
                description:
                  "Start the AdonisJS HTTP server, along with the file watcher. Also starts the webpack dev server when webpack encore is installed",
                options: [
                  {
                    name: "--assets",
                    description:
                      "Start webpack dev server when encore is installed",
                  },
                  {
                    name: "--no-assets",
                    description: "Disable webpack dev server",
                  },
                  {
                    name: ["-w", "--watch"],
                    description:
                      "Watch for file changes and re-start the HTTP server on change",
                  },
                  {
                    name: ["-p", "--poll"],
                    description:
                      "Detect file changes by polling files instead of listening to filesystem events",
                  },
                  {
                    name: "--node-args",
                    requiresSeparator: true,
                    insertValue: "--node-args='{cursor}'",
                    description: "CLI options to pass to the node command line",
                  },
                  {
                    name: "--encore-args",
                    requiresSeparator: true,
                    insertValue: "--encore-args='{cursor}'",
                    description:
                      "CLI options to pass to the encore command line",
                  },
                ],
              },
              {
                name: "db:seed",
                description: "Execute database seeder files",
                options: [
                  {
                    name: ["-c", "--connection"],
                    description:
                      "Define a custom database connection for the seeders",
                    args: {
                      name: "name",
                    },
                  },
                  {
                    name: ["-i", "--interactive"],
                    description: "Run seeders in interactive mode",
                  },
                  {
                    name: ["-f", "--files"],
                    args: {
                      name: "file",
                      isVariadic: true,
                      template: "filepaths",
                    },
                    description:
                      "Define a custom set of seeders files names to run",
                  },
                ],
              },
              {
                name: "dump:rcfile",
                description:
                  "Dump contents of .adonisrc.json file along with defaults",
              },
              {
                name: "generate:key",
                description: "Generate a new APP_KEY secret",
              },
              {
                name: "generate:manifest",
                description:
                  "Generate ace commands manifest file. Manifest file speeds up commands lookup",
              },
              {
                name: "list:routes",
                description: "List application routes",
              },
              {
                name: "make:command",
                description: "Make a new ace command",
              },
              {
                name: "make:controller",
                description: "Make a new HTTP controller",
                args: {
                  name: "name",
                  description: "Name of the controller class",
                },
                options: [
                  {
                    name: ["-r", "--resource"],
                    description:
                      "Add resourceful methods to the controller class",
                  },
                  {
                    name: ["-e", "--exact"],
                    description:
                      "Create the controller with the exact name as provided",
                  },
                ],
              },
              {
                name: "make:exception",
                description: "Make a new custom exception class",
              },
              {
                name: "make:listener",
                description: "Make a new event listener class",
              },
              {
                name: "make:mailer",
                description: "Make a new mailer class",
                args: {
                  name: "name",
                  description: "Mailer class name",
                },
              },
              {
                name: "make:middleware",
                description: "Make a new middleware",
                args: {
                  name: "name",
                  description: "Middleware class name",
                },
              },
              {
                name: "make:migration",
                description: "Make a new migration file",
                args: {
                  name: "name",
                  description: "Name of the migration file",
                },
                options: [
                  {
                    name: "--connection",
                    description:
                      "The connection flag is used to lookup the directory for the migration file",
                    args: {
                      name: "name",
                    },
                  },
                  {
                    name: "--folder",
                    description: "Pre-select a migration directory",
                    args: {
                      name: "name",
                      template: "filepaths",
                    },
                  },
                  {
                    name: "--create",
                    description:
                      "Define the table name for creating a new table",
                    args: {
                      name: "name",
                    },
                  },
                  {
                    name: "--table",
                    description:
                      "Define the table name for altering an existing table",
                    args: {
                      name: "name",
                    },
                  },
                ],
              },
              {
                name: "make:model",
                description: "Make a new Lucid model",
                args: {
                  name: "name",
                  description: "Name of the model class",
                },
                options: [
                  {
                    name: ["-m", "--migration"],
                    description: "Generate the migration for the model",
                  },
                  {
                    name: ["-c", "--controller"],
                    description: "Generate the controller for the model",
                  },
                ],
              },
              {
                name: "make:prldfile",
                description: "Make a new preload file",
                subcommands: [
                  {
                    name: "events",
                    description: "Make events preload file",
                  },
                ],
              },
              {
                name: "make:provider",
                description: "Make a new provider class",
              },
              {
                name: "make:seeder",
                description: "Make a new Seeder file",
                args: {
                  name: "name",
                  description: "Name of the seeder class",
                },
              },
              {
                name: "make:validator",
                description: "Make a new validator",
                args: {
                  name: "name",
                  description: "Name of the validator class",
                },
                options: [
                  {
                    name: ["-e", "--exact"],
                    description:
                      "Create the validator with the exact name as provided",
                  },
                ],
              },
              {
                name: "make:view",
                description: "Make a new view template",
                args: {
                  name: "name",
                  description: "Name of the view",
                },
                options: [
                  {
                    name: ["-e", "--exact"],
                    description:
                      "Create the template file with the exact name as provided",
                  },
                ],
              },
              {
                name: "migration:rollback",
                description: "Rollback migrations to a given batch number",
                options: [
                  {
                    name: ["-c", "--connection"],
                    description: "Define a custom database connection",
                    args: {
                      name: "name",
                    },
                  },
                  {
                    name: "--force",
                    description:
                      "Explicitly force to run migrations in production",
                    isDangerous: true,
                  },
                  {
                    name: "--dry-run",
                    description:
                      "Print SQL queries, instead of running the migrations",
                  },
                  {
                    name: "--batch",
                    args: {
                      name: "number",
                      description: "Use 0 to rollback to initial state",
                    },
                    description: "Define custom batch number for rollback",
                  },
                ],
              },
              {
                name: "migration:run",
                description: "Run pending migrations",
                options: [
                  {
                    name: ["-c", "--connection"],
                    description: "Define a custom database connection",
                    args: {
                      name: "name",
                    },
                  },
                  {
                    name: "--force",
                    description:
                      "Explicitly force to run migrations in production",
                    isDangerous: true,
                  },
                  {
                    name: "--dry-run",
                    description:
                      "Print SQL queries, instead of running the migrations",
                  },
                ],
              },
              {
                name: "migration:status",
                description: "Check migrations current status",
              },
            ],
          },
        ],
      };
    }
  },
};

export default completionSpec;
