// Dart SDK v3.14.1 (latest stable per storage.googleapis.com dart-archive
// channels/stable and dart-lang/sdk tag 3.14.1, released 2026-11-17; verified
// 2026-11-20). Source: arg parsers read statically at that tag (not run):
// pkg/dartdev (all commands, global flags), pkg/dds (devtools), dart2js usage
// text (pkg/compiler), pub and dart_style at the revisions pinned in DEPS,
// perf_witness and tools/experimental_features.yaml. Hidden server commands
// (development-service, language-server, tooling-daemon) only list --help
// because their flags come from other packages.

const dartEntryPoint: Fig.Arg = {
  name: "dart-entry-point",
  description: "The Dart file containing the main function",
  template: "filepaths",
};

const portOrBindAddress: Fig.Arg = {
  name: "port-or-address",
  description: "[<port>[/<bind-address>]]",
  isOptional: true,
};

const negatable = (flag: string, description: string): Fig.Option[] => [
  { name: `--${flag}`, description, exclusiveOn: [`--no-${flag}`] },
  {
    name: `--no-${flag}`,
    description: `Turn off --${flag}`,
    exclusiveOn: [`--${flag}`],
  },
];

const offline = negatable(
  "offline",
  "Use cached packages instead of accessing the network"
);

const precompile = negatable(
  "precompile",
  "Precompile executables in immediate dependencies"
);

const example = negatable(
  "example",
  "Also run in `example/` (if it exists). Defaults to on"
);

const enableAsserts = negatable("enable-asserts", "Enable assert statements");

const dryRun: Fig.Option = {
  name: ["-n", "--dry-run"],
  description: "Report what dependencies would change but don't change any",
};

const directory: Fig.Option = {
  name: ["-C", "--directory"],
  description: "Run this in the directory <dir>",
  args: { name: "dir", template: "folders" },
};

const define: Fig.Option = {
  name: ["-D", "--define"],
  description:
    "Define an environment declaration. To specify multiple declarations, use multiple options or use commas to separate key-value pairs",
  isRepeatable: true,
  args: { name: "key=value" },
};

const packages: Fig.Option = {
  name: ["-p", "--packages"],
  description:
    "Get package locations from the specified file instead of .dart_tool/package_config.json",
  args: { name: "path", template: "filepaths" },
};

const depfile: Fig.Option = {
  name: "--depfile",
  description:
    "Path to an output file in Ninja depfile format containing a list of compilation dependencies",
  args: { name: "path", template: "filepaths" },
};

const output: Fig.Option = {
  name: ["-o", "--output"],
  description: "Write the output to <file name>",
  args: { name: "file-name", template: "filepaths" },
};

const recordedUses: Fig.Option = {
  name: "--recorded-uses",
  description:
    "Write the recorded uses to <file name> (needs --enable-experiment=record-use)",
  args: { name: "path", template: "filepaths" },
};

const verbosity: Fig.Option = {
  name: "--verbosity",
  description: "Sets the verbosity level of the compilation",
  args: {
    name: "verbosity-level",
    default: "all",
    suggestions: [
      { name: "all", description: "Show all messages" },
      { name: "error", description: "Show only error messages" },
      {
        name: "info",
        description: "Show error, warning, and info messages",
      },
      {
        name: "warning",
        description: "Show only error and warning messages",
      },
    ],
  },
};

const enableExperiment: Fig.Option = {
  name: "--enable-experiment",
  description:
    "Enable one or more experimental features (see dart.dev/go/experiments)",
  isRepeatable: true,
  args: {
    name: "experiment",
    // ponytail: non-expired entries of tools/experimental_features.yaml at 3.14.1
    suggestions: [
      { name: "anonymous-methods", description: "Anonymous methods" },
      {
        name: "augmentations",
        description: "Augmentations - enhancing declarations from outside",
      },
      {
        name: "const-functions",
        description:
          "Allow more of the Dart language to be executed in const expressions",
      },
      { name: "data-assets", description: "Enable data assets in hooks" },
      {
        name: "enhanced-parts",
        description: "Generalize parts to be nested and have exports/imports",
      },
      {
        name: "inference-update-4",
        description: "A bundle of updates to type inference",
      },
      { name: "macros", description: "Static meta-programming" },
      {
        name: "primary-constructors",
        description: "Less verbose constructors (no-op - enabled by default)",
      },
      {
        name: "promotion-chain-intersection-join",
        description: "Enhanced promotion chain join algorithm",
      },
      {
        name: "receiver-type-inference",
        description:
          "Type inference of generic receivers in non-empty contexts",
      },
      {
        name: "record-use",
        description:
          "Output arguments used by static functions (no-op - enabled by default)",
      },
      {
        name: "single-combinators",
        description:
          "Allow at most one `show` or `hide` combinator per import or export directive",
      },
      {
        name: "static-extensions",
        description: "Extensions with static capabilities",
      },
      { name: "this-promotion", description: "Type promotion for `this`" },
      { name: "unquoted-imports", description: "Shorter import syntax" },
      { name: "variance", description: "Sound variance" },
    ],
  },
};

const targetOs: Fig.Option = {
  name: "--target-os",
  description: "Compile to a specific target operating system",
  args: {
    name: "os",
    suggestions: ["android", "fuchsia", "ios", "linux", "macos", "windows"],
  },
};

const targetArch: Fig.Option = {
  name: "--target-arch",
  description: "Compile to a specific target architecture",
  args: {
    name: "arch",
    suggestions: [
      "arm",
      "arm64",
      "arm64e",
      "ia32",
      "riscv32",
      "riscv64",
      "x64",
    ],
  },
};

const targetSanitizer: Fig.Option = {
  name: "--target-sanitizer",
  description:
    "Compile to a specific target sanitizer (asan, msan and tsan only on Linux)",
  args: {
    name: "sanitizer",
    default: "none",
    suggestions: ["none", "asan", "msan", "tsan"],
  },
};

// Single-file executables cannot be symbolized by the sanitizers
const exeTargetSanitizer: Fig.Option = {
  ...targetSanitizer,
  description:
    "Compile to a specific target sanitizer (sanitizers are not offered with single-file executables)",
  args: { name: "sanitizer", default: "none", suggestions: ["none"] },
};

const globalOptions: Fig.Option[] = [
  {
    name: ["-h", "--help"],
    description: "Print this usage information",
  },
];

const compileOptions: Fig.Option[] = [
  ...globalOptions,
  output,
  verbosity,
  define,
  packages,
  depfile,
  enableExperiment,
];

const nativeCompileOptions = (sanitizer: Fig.Option): Fig.Option[] => [
  ...compileOptions,
  {
    name: "--enable-asserts",
    description: "Enable assert statements",
  },
  {
    name: ["-S", "--save-debugging-info"],
    description:
      "Remove debugging information from the output and save it separately to the specified file",
    args: {
      name: "path",
      template: "filepaths",
    },
  },
  recordedUses,
  targetOs,
  targetArch,
  sanitizer,
];

const residentCompilerInfoFile: Fig.Option = {
  name: "--resident-compiler-info-file",
  description:
    "The path to an info file that the Dart CLI will use to communicate with a resident frontend compiler",
  args: { name: "path", template: "filepaths" },
};

const pubPackage: Fig.Arg = {
  name: "package",
  description: "Package name, optionally with @<descriptor>",
};

const completionSpec: Fig.Spec = {
  name: "dart",
  description: "A command-line utility for Dart development",
  options: [
    ...globalOptions,
    {
      name: ["-v", "--verbose"],
      description: "Show additional command output",
    },
    {
      name: "--version",
      description: "Print the Dart SDK version",
    },
    {
      name: "--enable-analytics",
      description: "Enable analytics",
    },
    {
      name: "--disable-analytics",
      description: "Disable analytics",
    },
    {
      name: "--suppress-analytics",
      description:
        "Disallow analytics for this `dart *` run without changing the analytics configuration",
    },
    {
      name: "--diagnostics",
      description: "Show tool diagnostic output",
      hidden: true,
    },
  ],
  subcommands: [
    {
      name: "analyze",
      description: "Analyze Dart code in a directory",
      options: [
        ...globalOptions,
        {
          name: "--fatal-infos",
          description: "Treat info level issues as fatal",
        },
        ...negatable(
          "fatal-warnings",
          "Treat warning level issues as fatal (defaults to on)"
        ),
        {
          name: "--format",
          description: "Specifies the format to display errors",
          args: {
            name: "value",
            suggestions: [
              {
                name: "default",
                description: "The default, user consumable output format",
              },
              {
                name: "json",
                description: "A machine readable output in a JSON format",
              },
              {
                name: "machine",
                description:
                  "SEVERITY|TYPE|ERROR_CODE|FILE_PATH|LINE|COLUMN|LENGTH|ERROR_MESSAGE",
              },
            ],
          },
        },
        {
          name: "--cache",
          description: "Override the location of the analysis cache",
          args: { name: "path", template: "folders" },
        },
        {
          name: "--memory",
          description:
            "Attempt to print memory usage before exiting. Will only print if format is json",
        },
        {
          name: "--packages",
          description: "The path to the package resolution configuration file",
          args: { name: "path", template: "filepaths" },
        },
        {
          name: "--sdk-path",
          description: "The path to the Dart SDK",
          args: { name: "path", template: "folders" },
        },
        enableExperiment,
      ],
      args: {
        name: "directory",
        description: "Dart project directory to analyze",
        template: "folders",
        isOptional: true,
      },
    },
    {
      name: "build",
      description: "Build a Dart application including code assets",
      options: [...globalOptions],
      subcommands: [
        {
          name: "cli",
          description:
            "Build a Dart application with a command line interface (CLI)",
          options: [
            ...globalOptions,
            {
              name: ["-o", "--output"],
              description: "Write the output to <output>/bundle/",
              args: { name: "path", template: "folders" },
            },
            {
              name: ["-t", "--target"],
              description:
                "The main entry-point file of the command-line application",
              args: dartEntryPoint,
            },
            packages,
            {
              name: "--enable-asserts",
              description: "Enable assert statements",
            },
            verbosity,
            depfile,
            targetSanitizer,
            targetOs,
            targetArch,
            {
              name: "--root-package",
              description: "The package for which hooks are run",
              args: { name: "name" },
            },
            enableExperiment,
          ],
        },
      ],
    },
    {
      name: "compile",
      description: "Compile Dart to various formats",
      options: [...globalOptions],
      subcommands: [
        {
          name: "aot-snapshot",
          description: "Compile Dart to an AOT snapshot",
          args: dartEntryPoint,
          options: nativeCompileOptions(targetSanitizer),
        },
        {
          name: "exe",
          description: "Compile Dart to a self-contained executable",
          args: dartEntryPoint,
          options: nativeCompileOptions(exeTargetSanitizer),
        },
        {
          name: "jit-snapshot",
          description: "Compile Dart to a JIT snapshot",
          args: [
            dartEntryPoint,
            {
              name: "training-arguments",
              isOptional: true,
              isVariadic: true,
            },
          ],
          options: [
            ...compileOptions,
            {
              name: "--enable-asserts",
              description: "Enable assert statements",
            },
          ],
        },
        {
          name: "js",
          description: "Compile Dart to JavaScript",
          args: dartEntryPoint,
          options: [
            ...globalOptions,
            output,
            ...["0", "1", "2", "3", "4"].map((level) => ({
              name: `-O${level}`,
              description: `Set the compiler optimization level to ${level} (defaults to -O1)`,
            })),
            {
              name: ["-m", "--minify"],
              description: "Generate minified output",
            },
            {
              name: "--enable-asserts",
              description: "Enable assert statements",
            },
            {
              name: ["-v", "--verbose"],
              description: "Display verbose information",
            },
            define,
            {
              name: "--packages",
              description:
                "Path to the package resolution configuration file, which supplies a mapping of package names to paths",
              args: { name: "path", template: "filepaths" },
            },
            {
              name: "--version",
              description: "Display version information",
            },
            {
              name: "--suppress-warnings",
              description: "Do not display any warnings",
            },
            {
              name: "--fatal-warnings",
              description: "Treat warnings as compilation errors",
            },
            {
              name: "--suppress-hints",
              description: "Do not display any hints",
            },
            {
              name: "--enable-diagnostic-colors",
              description: "Add colors to diagnostic messages",
            },
            {
              name: "--terse",
              description:
                "Emit diagnostics without suggestions for how to get rid of the diagnosed problems",
            },
            {
              name: "--show-package-warnings",
              description: "Show warnings and hints generated from packages",
            },
            {
              name: "--csp",
              description:
                "Disable dynamic generation of code in the generated output (necessary to satisfy CSP restrictions)",
            },
            {
              name: "--no-source-maps",
              description: "Do not generate a source map file",
            },
            ...negatable(
              "omit-late-names",
              "Do not include names of late variables in error messages"
            ),
            ...negatable(
              "native-null-assertions",
              "Add assertions to web library APIs to ensure that non-nullable APIs do not return null (defaults to on unless -O3 or higher is passed)"
            ),
            {
              name: "--no-deprecated-js-interop",
              description:
                "Disallow the deprecated JS interop libraries (dart:html, dart:js, dart:js_util, dart:svg and others)",
            },
            {
              name: "--omit-implicit-checks",
              description:
                "Omit implicit runtime checks, such as parameter checks and implicit downcasts",
            },
            {
              name: "--trust-primitives",
              description:
                "Assume that operations on numbers, strings, and lists have valid inputs",
            },
            {
              name: "--lax-runtime-type-to-string",
              description:
                "Omit reified class type arguments when these are only needed for toString on runtimeType",
            },
            {
              name: "--throw-on-error",
              description:
                "Throw an exception if a compile-time error is detected",
            },
            {
              name: "--libraries-spec",
              description:
                "A .json file containing the SDK libraries specification",
              requiresSeparator: true,
              args: { name: "file", template: "filepaths" },
            },
            {
              name: "--disable-native-live-type-analysis",
              description:
                "Disable the optimization that removes unused native types from dart:html and related libraries",
            },
            {
              name: "--server-mode",
              description:
                "Compile with server support, using a library specification that disables dart:html but supports dart:js in conditional imports",
            },
            {
              name: "--categories",
              description:
                "Deprecated, use --server-mode instead of --categories=Server",
              deprecated: true,
              requiresSeparator: true,
              args: { name: "categories" },
            },
            {
              name: "--deferred-map",
              description:
                "Generate a json file with a mapping from each deferred import to the part.js files that will be loaded",
              requiresSeparator: true,
              args: { name: "file", template: "filepaths" },
            },
            {
              name: "--dump-info",
              description:
                "Generate information about the generated code, readable with package:dart2js_info",
              requiresSeparator: true,
              args: {
                name: "format",
                isOptional: true,
                suggestions: ["json", "binary"],
              },
            },
            {
              name: "--generate-code-with-compile-time-errors",
              description:
                "Generate output even if the program contains compile-time errors",
            },
            {
              name: "--no-frequency-based-minification",
              description:
                "Disable the new frequency based minifying namer and use the old namer instead (experimental)",
            },
            // dart2js only accepts the --enable-experiment=<name> form
            { ...enableExperiment, requiresSeparator: true },
          ],
        },
        {
          name: "js-dev",
          description: "Compile Dart to JavaScript using ddc",
          hidden: true,
          args: dartEntryPoint,
        },
        {
          name: "kernel",
          description: "Compile Dart to a kernel snapshot",
          args: dartEntryPoint,
          options: [
            ...compileOptions,
            ...negatable(
              "link-platform",
              "Include the platform kernel in the resulting kernel file (defaults to on)"
            ),
            ...negatable(
              "embed-sources",
              "Embed source files in the generated kernel component (defaults to on)"
            ),
          ],
        },
        {
          name: "wasm",
          description: "Compile Dart to a WebAssembly/WasmGC module",
          args: dartEntryPoint,
          options: [
            ...globalOptions,
            output,
            {
              name: ["-v", "--verbose"],
              description: "Print debug output during compilation",
            },
            {
              name: "--enable-asserts",
              description: "Enable assert statements",
            },
            ...negatable("source-maps", "Generate a source map file"),
            define,
            depfile,
            ...negatable(
              "minify",
              "Minify names that are needed at runtime (such as class names)"
            ),
            ...negatable(
              "strip-wasm",
              "Strip the resulting wasm file of static symbol names (defaults to on)"
            ),
            {
              name: ["-O", "--optimization-level"],
              description: "Controls optimizations (defaults to 1)",
              args: {
                name: "level",
                suggestions: ["0", "1", "2", "3", "4"],
              },
            },
            {
              name: ["-E", "--extra-compiler-option"],
              description: "An extra option to pass to the dart2wasm compiler",
              isRepeatable: true,
              args: { name: "option" },
            },
            {
              name: "--standalone",
              description:
                "Compile to a WebAssembly module without JavaScript interop",
            },
            {
              name: "--shared-memory",
              description:
                "Import a shared memory buffer. The max number of pages must be passed",
              args: { name: "page-count" },
            },
            {
              name: "--phases",
              description: "Which phases of the dart2wasm compiler to run",
              args: {
                name: "phases",
                suggestions: ["cfe", "tfa", "codegen", "opt"],
              },
            },
            ...negatable(
              "enable-deferred-loading",
              "Emit multiple modules based on the program's deferred import graph"
            ),
            {
              name: "--print-wasm",
              description: "Print human-readable wasm debug output",
            },
            {
              name: "--print-kernel",
              description: "Print human-readable Dart kernel debug output",
            },
            packages,
            recordedUses,
            enableExperiment,
          ],
        },
      ],
    },
    {
      name: "create",
      description: "Create a new Dart project",
      args: {
        name: "directory",
        template: "folders",
      },
      options: [
        ...globalOptions,
        {
          name: ["-t", "--template"],
          description: "The project template to use",
          args: {
            name: "template-type",
            default: "console",
            suggestions: [
              {
                name: "cli",
                description:
                  "A command-line application with basic argument parsing",
              },
              {
                name: "console",
                description: "A command-line application",
              },
              {
                name: "package",
                description: "A package containing shared Dart libraries",
              },
              {
                name: "server-shelf",
                description: "A server app using package:shelf",
              },
              {
                name: "web",
                description: "A web app that uses only core Dart libraries",
              },
              {
                name: "console-simple",
                description: "A simple command-line application (deprecated)",
                hidden: true,
              },
            ],
          },
        },
        ...negatable(
          "pub",
          "Run 'pub get' after the project has been created (defaults to on)"
        ),
        {
          name: "--force",
          description:
            "Force project generation, even if the target directory already exists",
        },
        {
          name: "--list-templates",
          description: "List the available templates in JSON format",
        },
      ],
    },
    {
      name: "devtools",
      description:
        "Open DevTools (optionally connecting to an existing application)",
      args: { name: "service-protocol-uri", isOptional: true },
      options: [
        ...globalOptions,
        {
          name: "--version",
          description: "Prints the DevTools version",
        },
        {
          name: ["-v", "--verbose"],
          description: "Output more informational messages",
        },
        {
          name: "--host",
          description: "Hostname to serve DevTools on (defaults to localhost)",
          args: { name: "host" },
        },
        {
          name: "--port",
          description:
            "Port to serve DevTools on; specify 0 to automatically use any available port",
          args: { name: "port", default: "9100" },
        },
        {
          name: "--dtd-uri",
          description:
            "A URI pointing to a Dart Tooling Daemon that DevTools should interface with",
          args: { name: "uri" },
        },
        {
          name: "--dtd-exposed-uri",
          description:
            "An optional URI for the Dart Tooling Daemon exposed to the front-end",
          args: { name: "uri" },
        },
        ...negatable(
          "launch-browser",
          "Launches DevTools in a browser immediately at start"
        ),
        {
          name: "--machine",
          description: "Sets output format to JSON for consumption in tools",
        },
        {
          name: "--disable-service-origin-check",
          description:
            "Disables Host and Origin header validation for DevTools server connections",
        },
        {
          name: "--record-memory-profile",
          description:
            "Start devtools headlessly and write memory profiling samples to the indicated file",
          args: {
            name: "file",
            default: "memory_samples.json",
            template: "filepaths",
          },
        },
        {
          name: "--app-size-base",
          description:
            "Path to the base app size file used for app size debugging",
          args: { name: "file", template: "filepaths" },
        },
        {
          name: "--app-size-test",
          description:
            "Path to the test app size file used for app size debugging (only with --app-size-base)",
          args: { name: "file", template: "filepaths" },
        },
        {
          name: "--try-ports",
          description:
            "The number of ascending ports to try binding to before failing with an error",
          args: { name: "count", default: "10" },
        },
        {
          name: "--dds-host",
          description:
            "The address the Dart Development Service (DDS) should attempt to bind to if a DDS instance isn't active and a VM service URI is provided",
          args: { name: "bind-address", default: "127.0.0.1" },
        },
        {
          name: "--dds-port",
          description:
            "The port the Dart Development Service (DDS) should attempt to bind to if a DDS instance isn't active and a VM service URI is provided",
          args: { name: "port", default: "0" },
        },
        {
          name: "--enable-notifications",
          description:
            "Requests notification permissions immediately when a client connects back to the server",
        },
        ...negatable(
          "allow-embedding",
          "Allow embedding DevTools inside an iframe (defaults to on)"
        ),
        ...negatable(
          "disable-cors",
          "Disable CORS so that the DevTools server can communicate with a front end served on a different origin"
        ),
        {
          name: "--headless",
          description:
            "Cause the server to spawn Chrome in headless mode for use in automated testing",
        },
        {
          name: "--print-dtd",
          description:
            "Print the address of the Dart Tooling Daemon, if one is hosted by the DevTools server",
        },
      ],
    },
    {
      name: "doc",
      description: "Generate API documentation for Dart projects",
      args: {
        name: "directory",
        template: "folders",
        isOptional: true,
      },
      options: [
        ...globalOptions,
        {
          name: ["-o", "--output", "--output-dir"],
          description: "Configure the output directory (defaults to doc/api)",
          args: { name: "directory", template: "folders" },
        },
        {
          name: "--validate-links",
          description:
            "Display warnings for broken links. Incompatible with --dry-run",
        },
        {
          name: "--dry-run",
          description: "Try to generate the docs without saving them",
        },
      ],
    },
    {
      name: "fix",
      description: "Apply automated fixes to Dart source code",
      args: {
        name: "target",
        template: ["filepaths", "folders"],
        isOptional: true,
      },
      options: [
        ...globalOptions,
        {
          name: ["-n", "--dry-run"],
          description: "Preview the proposed changes but make no changes",
        },
        {
          name: "--apply",
          description: "Apply the proposed changes",
        },
        {
          name: "--code",
          description: "Apply fixes for one (or more) diagnostic codes",
          isRepeatable: true,
          args: { name: "code1,code2,..." },
        },
        {
          name: "--compare-to-golden",
          description:
            "Compare the result of applying fixes to a golden file for testing",
        },
        enableExperiment,
      ],
    },
    {
      name: "format",
      description: "Idiomatically format Dart source code",
      options: [
        ...globalOptions,
        {
          name: ["-v", "--verbose"],
          description: "Show all options and flags with --help",
        },
        {
          name: ["-o", "--output"],
          description: "Set where to write formatted output",
          args: {
            name: "mode",
            default: "write",
            suggestions: [
              {
                name: "write",
                description: "Overwrite formatted files on disk",
              },
              {
                name: "show",
                description: "Print code to terminal",
              },
              {
                name: "json",
                description: "Print code and selection as JSON",
              },
              {
                name: "none",
                description: "Discard output",
              },
            ],
          },
        },
        {
          name: "--show",
          description: "Set which filenames to print",
          args: {
            name: "show",
            default: "changed",
            suggestions: [
              {
                name: "all",
                description: "All visited files and directories",
              },
              {
                name: "changed",
                description:
                  "Only the names of files whose formatting is changed",
              },
              {
                name: "none",
                description: "No file names or directories",
              },
            ],
          },
        },
        {
          name: "--summary",
          description: "Show the specified summary after formatting",
          args: {
            name: "summary",
            default: "line",
            suggestions: [
              {
                name: "line",
                description: "Single-line summary",
              },
              {
                name: "profile",
                description: "How long it took to format each file",
              },
              {
                name: "none",
                description: "No summary",
              },
            ],
          },
        },
        {
          name: "--language-version",
          description:
            'Language version of formatted code. Use "latest" to parse as the latest supported version',
          args: { name: "version", suggestions: ["latest"] },
        },
        {
          name: "--set-exit-if-changed",
          description: "Return exit code 1 if there are any formatting changes",
        },
        {
          name: "--page-width",
          description: "Try to keep lines no longer than this (defaults to 80)",
          args: {
            name: "width",
            suggestions: ["80", "120"],
          },
        },
        {
          name: ["-l", "--line-length"],
          description: "Wrap lines longer than this (use --page-width)",
          deprecated: { description: "Use --page-width" },
          hidden: true,
          args: { name: "line-length" },
        },
        {
          name: "--trailing-commas",
          description: "How trailing commas in input affect formatting",
          args: {
            name: "mode",
            default: "automate",
            suggestions: [
              {
                name: "automate",
                description:
                  "Add and remove trailing commas based on whether the construct splits",
              },
              {
                name: "preserve",
                description:
                  "A trailing comma forces the surrounding construct to split",
              },
            ],
          },
        },
        {
          name: ["-i", "--indent"],
          description: "Add this many spaces of leading indentation",
          args: { name: "number-of-spaces" },
        },
        {
          name: "--follow-links",
          description:
            "Follow links to files and directories. If unset, links will be ignored",
        },
        {
          name: "--version",
          description: "Show dart_style version",
        },
        enableExperiment,
        {
          name: "--selection",
          description:
            "Track selection (given as 'start:length') through formatting",
          args: { name: "start:length" },
        },
        {
          name: "--stdin-name",
          description:
            "The path that code read from stdin is treated as coming from",
          args: { name: "path" },
        },
      ],
      args: {
        name: "files-or-directory",
        description: "The files or directories to format",
        template: ["filepaths", "folders"],
        isVariadic: true,
      },
    },
    {
      name: "help",
      description: "Display help information for dart",
      args: {
        name: "command",
        description: "The command to show help for",
        isOptional: true,
        suggestions: [
          "analyze",
          "build",
          "compile",
          "create",
          "devtools",
          "doc",
          "fix",
          "format",
          "info",
          "install",
          "installed",
          "migrate",
          "pub",
          "run",
          "test",
          "uninstall",
        ],
      },
      options: globalOptions,
    },
    {
      name: "info",
      description: "Show diagnostic information about the installed tooling",
      options: [...globalOptions],
      subcommands: [
        {
          name: "dump",
          description:
            "Show diagnostic information about the installed tooling",
          options: [
            ...globalOptions,
            ...negatable(
              "remove-file-paths",
              "Remove file paths in displayed information (defaults to on)"
            ),
          ],
        },
        {
          name: "record-performance",
          description:
            "Record performance data of running Dart tooling processes",
          options: [
            ...globalOptions,
            {
              name: ["-o", "--output-dir"],
              description: "Directory to write the recording to",
              args: { name: "dir", template: "folders" },
            },
            {
              name: "--tag",
              description: "Tag to filter processes by",
              args: { name: "tag" },
            },
            {
              name: "--record-new-processes",
              description: "Record processes that start after the recorder",
            },
            {
              name: "--record-only-new-processes",
              description:
                "Record only processes that start after the recorder",
            },
            {
              name: "--enable-async-spans",
              description: "Enable async spans",
            },
            ...negatable("enable-profiler", "Enable profiler (defaults to on)"),
            {
              name: "--streams",
              description: "Streams to record (defaults to gc,dart)",
              isRepeatable: true,
              args: { name: "stream" },
            },
          ],
        },
      ],
    },
    {
      name: "install",
      description: "Install or upgrade a Dart CLI tool for global use",
      args: {
        name: "package",
        description:
          "<package>[@<descriptor>], e.g. pkg@^3.0.0 or 'pkg@{path: /path/to/pkg}'",
      },
      options: [
        ...globalOptions,
        {
          name: "--overwrite",
          description:
            "Overwrite executables from other packages with the same name",
        },
        {
          name: "--git-path",
          description: "Path of git package in repository",
          hidden: true,
          args: { name: "path" },
        },
        {
          name: "--git-ref",
          description: "Git branch or commit to be retrieved",
          hidden: true,
          args: { name: "ref" },
        },
        {
          name: ["-u", "--hosted-url"],
          description: "A custom pub server URL for the package",
          hidden: true,
          args: { name: "url" },
        },
      ],
    },
    {
      name: "installed",
      description: "List globally installed Dart CLI tools",
      options: [
        ...globalOptions,
        {
          name: ["-a", "--all"],
          description:
            "Also list packages which are currently not active (no executables on PATH)",
        },
      ],
    },
    {
      name: "migrate",
      description: "Migrate Dart packages to newer SDK versions",
      args: {
        name: "target",
        template: ["filepaths", "folders"],
        isOptional: true,
        isVariadic: true,
      },
      options: [
        ...globalOptions,
        {
          name: "--target-sdk",
          description:
            'The target Dart SDK version to migrate to (e.g., "3.13.0")',
          args: { name: "version" },
        },
        {
          name: ["-n", "--dry-run"],
          description: "Preview the proposed changes but make no changes",
        },
        {
          name: "--apply",
          description: "Apply the proposed changes",
        },
        {
          name: "--step",
          description: "The migration steps to run (defaults to prepare,bump)",
          isRepeatable: true,
          args: {
            name: "step",
            suggestions: [
              {
                name: "prepare",
                description:
                  "Apply fixes that make code ready for the new SDK version",
              },
              {
                name: "bump",
                description: "Raise the SDK constraint in 'pubspec.yaml'",
              },
              {
                name: "cleanup",
                description:
                  "Apply optional fixes that adopt features of the new SDK version",
              },
              {
                name: "all",
                description: "Run every step, including cleanup",
              },
            ],
          },
        },
      ],
    },
    {
      name: "pub",
      description: "Work with packages",
      options: [
        ...globalOptions,
        {
          name: "--trace",
          description: "Print debugging information when an error occurs",
          hidden: true,
        },
        {
          name: ["-v", "--verbose"],
          description: "Print detailed logging",
        },
        ...negatable(
          "color",
          "Use colors in terminal output (defaults to color when connected to a terminal)"
        ),
        {
          name: ["-C", "--directory"],
          description: "Run the subcommand in the directory <dir>",
          isPersistent: true,
          args: { name: "dir", template: "folders" },
        },
      ],
      subcommands: [
        {
          name: "add",
          description: "Add dependencies to pubspec.yaml",
          options: [
            ...globalOptions,
            ...offline,
            dryRun,
            directory,
            ...example,
            {
              name: ["-d", "--dev"],
              description:
                "Adds package to the development dependencies instead (use dev:<package>)",
              hidden: true,
            },
            ...[
              ["--git-url", "Git URL of the package"],
              ["--git-ref", "Git branch or commit to be retrieved"],
              ["--git-path", "Path of git package in repository"],
              [
                "--git-tag-pattern",
                "The tag-pattern to search for versions in repository",
              ],
              ["--hosted-url", "URL of package host server"],
              ["--path", "Add package from local path"],
              ["--sdk", "Add package from SDK source"],
            ].map(([name, description]) => ({
              name,
              description,
              hidden: true,
              args: { name: name.slice(2) },
            })),
            ...precompile.map((option) => ({ ...option, hidden: true })),
          ],
          args: {
            name: "package",
            description: "[<section>:]<package>[@<descriptor>]",
            isVariadic: true,
          },
        },
        {
          name: "bump",
          description: "Increases the version number of the current package",
          options: [...globalOptions],
          subcommands: [
            [
              "major",
              "Increment the major version number (eg. 3.1.2 -> 4.0.0)",
            ],
            [
              "minor",
              "Increment the minor version number (eg. 3.1.2 -> 3.2.0)",
            ],
            [
              "patch",
              "Increment the patch version number (eg. 3.1.2 -> 3.1.3)",
            ],
            [
              "breaking",
              "Increment to the next breaking version (eg. 0.1.2 -> 0.2.0)",
            ],
          ].map(([name, description]) => ({
            name,
            description,
            options: [
              ...globalOptions,
              {
                name: ["-n", "--dry-run"],
                description:
                  "Report what would change, but don't change anything",
              },
            ],
          })),
        },
        {
          name: "cache",
          description: "Work with the system cache",
          options: [...globalOptions],
          subcommands: [
            {
              name: "add",
              description: "Install a package",
              options: [
                ...globalOptions,
                {
                  name: "--all",
                  description: "Install all matching versions",
                },
                {
                  name: ["-v", "--version"],
                  description: "Version constraint",
                  args: { name: "constraint" },
                },
              ],
              args: { name: "package" },
            },
            {
              name: "clean",
              description: "Clears the global PUB_CACHE",
              options: [
                ...globalOptions,
                {
                  name: ["-f", "--force"],
                  description: "Don't ask for confirmation",
                },
              ],
            },
            {
              name: "gc",
              description: "Prunes unused packages from the system cache",
              options: [
                ...globalOptions,
                {
                  name: ["-f", "--force"],
                  description: "Prune cache without confirmation",
                },
                {
                  name: "--collect-recent",
                  description: "Also delete recent files",
                },
                {
                  name: "--dry-run",
                  description: "Print list of files that would be deleted",
                },
              ],
            },
            {
              name: "list",
              description: "List packages in the system cache",
              hidden: true,
              options: globalOptions,
            },
            {
              name: "preload",
              description: "Install packages from a .tar.gz archive",
              hidden: true,
              options: globalOptions,
              args: {
                name: "archive",
                template: "filepaths",
                isVariadic: true,
              },
            },
            {
              name: "repair",
              description: "Reinstall cached packages",
              options: [
                ...globalOptions,
                {
                  name: "--all",
                  description:
                    "Repair all cached packages instead of only packages in the current pubspec.lock",
                },
              ],
            },
          ],
        },
        {
          name: "check-resolution-up-to-date",
          description:
            "Do a fast timestamp-based check to see resolution is up-to-date",
          hidden: true,
          options: globalOptions,
        },
        {
          name: ["deps", "dependencies", "tab"],
          description: "Print package dependencies",
          options: [
            ...globalOptions,
            {
              name: ["-s", "--style"],
              description: "How output should be displayed",
              args: {
                name: "style",
                default: "tree",
                suggestions: ["compact", "tree", "list"],
              },
            },
            ...negatable("dev", "Include dev dependencies (defaults to on)"),
            {
              name: "--executables",
              description: "List all available executables",
            },
            {
              name: "--json",
              description: "Output dependency information in a json format",
            },
            directory,
          ],
        },
        {
          name: "downgrade",
          description:
            "Downgrade the current package's dependencies to oldest versions",
          options: [
            ...globalOptions,
            ...offline,
            dryRun,
            ...example,
            directory,
            {
              name: "--tighten",
              description:
                "Updates lower bounds in pubspec.yaml to match the resolved version",
            },
          ],
          args: { name: "dependencies", isOptional: true, isVariadic: true },
        },
        {
          name: ["get", "install"],
          description: "Get the current package's dependencies",
          options: [
            ...globalOptions,
            ...offline,
            dryRun,
            {
              name: "--enforce-lockfile",
              description:
                "Enforce pubspec.lock. Fail `pub get` if the current `pubspec.lock` does not exactly specify a valid resolution",
            },
            ...example,
            directory,
            ...precompile.map((option) => ({ ...option, hidden: true })),
          ],
        },
        {
          name: "global",
          description: "Work with global packages",
          options: globalOptions,
          subcommands: [
            {
              name: "activate",
              description: "Make a package's executables globally available",
              args: [
                { name: "package" },
                { name: "version-constraint", isOptional: true },
              ],
              options: [
                ...globalOptions,
                {
                  name: ["-s", "--source"],
                  description: "The source used to find the package",
                  args: {
                    name: "source",
                    default: "hosted",
                    suggestions: ["git", "hosted", "path"],
                  },
                },
                {
                  name: "--git-path",
                  description: "Path of git package in repository",
                  args: { name: "path" },
                },
                {
                  name: "--git-ref",
                  description: "Git branch or commit to be retrieved",
                  args: { name: "ref" },
                },
                {
                  name: "--no-executables",
                  description: "Do not put executables on PATH",
                },
                {
                  name: ["-x", "--executable"],
                  description: "Executable(s) to place on PATH",
                  isRepeatable: true,
                  args: { name: "executable" },
                },
                {
                  name: "--overwrite",
                  description:
                    "Overwrite executables from other packages with the same name",
                },
                {
                  name: ["-u", "--hosted-url"],
                  description:
                    "A custom pub server URL for the package. Only applies when using the `hosted` source",
                  args: { name: "url" },
                },
              ],
            },
            {
              name: "deactivate",
              description: "Remove a previously activated package",
              args: { name: "package" },
              options: globalOptions,
            },
            {
              name: "list",
              description: "List globally activated packages",
              options: globalOptions,
            },
            {
              name: "run",
              description:
                "Run an executable from a globally activated package",
              args: [
                { name: "package:executable" },
                { name: "args", isOptional: true, isVariadic: true },
              ],
              options: [
                ...globalOptions,
                ...enableAsserts,
                {
                  name: "--enable-experiment",
                  description:
                    "Runs the executable in a VM with the given experiments enabled. (Will disable snapshotting, resulting in slower startup)",
                  isRepeatable: true,
                  args: enableExperiment.args,
                },
              ],
            },
          ],
        },
        {
          name: "login",
          description: "Log into pub.dev",
          options: globalOptions,
        },
        {
          name: "logout",
          description: "Log out of pub.dev",
          options: globalOptions,
        },
        {
          name: "outdated",
          description:
            "Analyze your dependencies to find which ones can be upgraded",
          options: [
            ...globalOptions,
            ...negatable(
              "dependency-overrides",
              "Show resolutions with `dependency_overrides` (defaults to on)"
            ),
            ...negatable(
              "dev-dependencies",
              "Take dev dependencies into account (defaults to on)"
            ),
            {
              name: "--json",
              description: "Output the results using a json format",
            },
            ...negatable(
              "prereleases",
              "Include prereleases in latest version"
            ),
            ...negatable(
              "show-all",
              "Include dependencies that are already fulfilling --mode"
            ),
            ...negatable(
              "transitive",
              "Show transitive dependencies (defaults to on)"
            ),
            directory,
          ],
        },
        {
          name: ["publish", "lish", "lush"],
          description: "Publish the current package to pub.dev",
          options: [
            ...globalOptions,
            {
              name: ["-n", "--dry-run"],
              description: "Validate but do not publish the package",
            },
            {
              name: ["-f", "--force"],
              description:
                "Publish without confirmation if there are no errors",
            },
            {
              name: "--skip-validation",
              description:
                "Publish without validation and resolution (this will ignore errors)",
            },
            {
              name: "--ignore-warnings",
              description: "Do not treat warnings as fatal",
            },
            directory,
          ],
        },
        {
          name: "remove",
          description: "Removes dependencies from pubspec.yaml",
          args: { name: "package", isVariadic: true },
          options: [
            ...globalOptions,
            ...offline,
            dryRun,
            ...example,
            directory,
            ...precompile.map((option) => ({ ...option, hidden: true })),
          ],
        },
        {
          name: "run",
          description: "Run an executable from a package",
          hidden: true,
          deprecated: { description: "Use `dart run`" },
          args: [
            { name: "executable" },
            { name: "args", isOptional: true, isVariadic: true },
          ],
          options: [...globalOptions, ...enableAsserts, directory],
        },
        {
          name: "token",
          description:
            "Manage authentication tokens for hosted pub repositories",
          options: globalOptions,
          subcommands: [
            {
              name: "add",
              description:
                "Add an authentication token for a package repository",
              args: { name: "hosted-url" },
              options: [
                ...globalOptions,
                {
                  name: "--env-var",
                  description:
                    "Read the secret token from this environment variable when making requests",
                  args: { name: "name" },
                },
              ],
            },
            {
              name: "list",
              description: "List servers for which a token exists",
              options: globalOptions,
            },
            {
              name: "remove",
              description:
                "Remove secret token for package repository at <hosted-url>",
              args: { name: "hosted-url", isOptional: true },
              options: [
                ...globalOptions,
                {
                  name: "--all",
                  description: "Remove all secret tokens",
                },
              ],
            },
          ],
        },
        {
          name: "unpack",
          description: "Downloads a package and unpacks it in place",
          args: pubPackage,
          options: [
            ...globalOptions,
            {
              name: ["-f", "--force"],
              description:
                "Overwrite the target directory if it already exists",
            },
            {
              name: ["-o", "--output"],
              description:
                "Download and extract the package in the specified directory",
              args: { name: "dir", template: "folders", default: "." },
            },
            ...negatable(
              "resolve",
              "Run pub get in the downloaded folder (defaults to on)"
            ),
          ],
        },
        {
          name: ["upgrade", "update"],
          description:
            "Upgrade the current package's dependencies to latest versions",
          args: {
            name: "dependencies",
            description: "<package>[@<constraint>|@latest|@resolvable]",
            isOptional: true,
            isVariadic: true,
          },
          options: [
            ...globalOptions,
            ...offline,
            dryRun,
            {
              name: "--tighten",
              description:
                "Updates lower bounds in pubspec.yaml to match the resolved version",
            },
            {
              name: "--unlock-transitive",
              description:
                "Also upgrades the transitive dependencies of the listed dependencies",
            },
            {
              name: "--major-versions",
              description:
                "Upgrades packages to their latest resolvable versions, and updates pubspec.yaml",
            },
            ...example,
            directory,
            ...precompile.map((option) => ({ ...option, hidden: true })),
          ],
        },
        {
          name: "uploader",
          description: "Manage uploaders for a package on pub.dev",
          hidden: true,
          options: [
            ...globalOptions,
            {
              name: "--package",
              description:
                "The package whose uploaders will be modified (defaults to the current package)",
              args: { name: "package" },
            },
            directory,
          ],
        },
        {
          name: "workspace",
          description: "Work with the pub workspace",
          options: globalOptions,
          subcommands: [
            {
              name: "list",
              description:
                "List all packages in the workspace, and their directory",
              options: [
                ...globalOptions,
                {
                  name: "--json",
                  description: "Output information in a json format",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "run",
      description:
        "Run a Dart program from a file or a local or remote package",
      args: [
        {
          name: "dart-file|package",
          description:
            "<dart-file>, <local-package>[:<executable>] or <remote-package>[:<executable>]@<descriptor>",
          template: "filepaths",
        },
        { name: "args", isOptional: true, isVariadic: true },
      ],
      options: [
        ...globalOptions,
        {
          name: ["-e", "--eval"],
          description: "Evaluate a Dart code snippet",
          args: { name: "code" },
        },
        {
          name: ["-P", "--package-constraint"],
          description:
            'Specific constraints for resolution of a single package (e.g. "http", "path:^1.8.0")',
          isRepeatable: true,
          args: { name: "package-spec" },
        },
        {
          name: "--offline",
          description: "Run offline without querying network services",
        },
        {
          name: ["-r", "--resident"],
          description:
            "Enable faster startup times by using a resident frontend compiler for compilation",
        },
        ...negatable(
          "quiet",
          "Disable messages about the resident compiler starting up / shutting down"
        ),
        residentCompilerInfoFile,
        {
          name: "--observe",
          description:
            "The observe flag is a convenience flag used to run a program with a set of common options useful for debugging",
          requiresSeparator: true,
          args: portOrBindAddress,
        },
        ...enableAsserts,
        {
          name: "--enable-vm-service",
          description:
            "Enables the VM service and listens on the specified port for connections (default port number is 8181, default bind address is localhost)",
          requiresSeparator: true,
          args: portOrBindAddress,
        },
        ...negatable(
          "serve-devtools",
          "Serves an instance of the Dart DevTools debugger and profiler via the VM service (defaults to on)"
        ),
        ...negatable(
          "pause-isolates-on-exit",
          "Pause isolates on exit when running with --enable-vm-service"
        ),
        ...negatable(
          "pause-isolates-on-unhandled-exceptions",
          "Pause isolates when an unhandled exception is encountered when running with --enable-vm-service"
        ),
        ...negatable(
          "warn-on-pause-with-no-debugger",
          "Print a warning when an isolate pauses with no attached debugger when running with --enable-vm-service"
        ),
        {
          name: "--timeline-streams",
          description: "Enables recording for specific timeline streams",
          args: {
            name: "streams",
            suggestions: [
              "all",
              "API",
              "Compiler",
              "CompilerVerbose",
              "Dart",
              "Debugger",
              "Embedder",
              "GC",
              "Isolate",
              "Microtask",
              "VM",
            ],
          },
        },
        ...negatable(
          "pause-isolates-on-start",
          "Pause isolates on start when running with --enable-vm-service"
        ),
        {
          name: "--timeline-recorder",
          description:
            "Selects the timeline recorder to use (defaults to ring)",
          args: {
            name: "recorder",
            suggestions: [
              "none",
              "ring",
              "endless",
              "startup",
              "systrace",
              "file",
              "callback",
              "perfettofile",
            ],
          },
        },
        {
          name: "--profile-microtasks",
          description: "Record information about each microtask",
        },
        {
          name: "--profile-startup",
          description:
            "Make the profiler discard new samples once the profiler sample buffer is full",
        },
        verbosity,
        define,
        {
          name: "--disable-service-auth-codes",
          description:
            "Disables the requirement for an authentication code to communicate with the VM service. Authentication codes help protect against CSRF attacks, so it is not recommended to disable them unless behind a firewall on a secure device",
        },
        {
          name: "--enable-service-port-fallback",
          description:
            "When the VM service is told to bind to a particular port, fallback to 0 if it fails to bind instead of failing to start",
        },
        {
          name: "--namespace",
          description:
            "The path to a directory that dart:io calls will treat as the root of the filesystem",
          args: {
            name: "path",
            template: "folders",
          },
        },
        {
          name: "--root-certs-file",
          description:
            "The path to a file containing the trusted root certificates to use for secure socket connections",
          args: {
            name: "path",
            template: "filepaths",
          },
        },
        {
          name: "--root-certs-cache",
          description:
            "The path to a cache directory containing the trusted root certificates to use for secure socket connections",
          args: {
            name: "path",
            template: "folders",
          },
        },
        {
          name: "--trace-loading",
          description: "Enables tracing of library and script loading",
        },
        {
          name: "--packages",
          description: "The path to the package resolution configuration file",
          args: { name: "path", template: "filepaths" },
        },
        {
          name: "--write-service-info",
          description:
            "Outputs information necessary to connect to the VM service to specified file in JSON format",
          args: { name: "file", template: "filepaths" },
        },
        ...negatable(
          "dds",
          "Use the Dart Development Service (DDS) for enhanced debugging functionality (defaults to on)"
        ),
        ...negatable(
          "serve-observatory",
          "Enable hosting Observatory through the VM Service (defaults to on)"
        ),
        ...negatable(
          "print-dtd",
          "Prints connection details for the Dart Tooling Daemon (DTD)"
        ),
        enableExperiment,
      ],
    },
    {
      name: "test",
      description: "Run tests for a project",
      options: [...globalOptions],
    },
    {
      name: "uninstall",
      description: "Remove a globally installed Dart CLI tool",
      args: { name: "package" },
      options: globalOptions,
    },
    {
      name: "compilation-server",
      description: "Control resident frontend compilers",
      hidden: true,
      options: globalOptions,
      subcommands: [
        {
          name: "start",
          description: "Start a resident frontend compiler",
          options: [...globalOptions, residentCompilerInfoFile],
        },
        {
          name: "shutdown",
          description: "Shut down a resident frontend compiler",
          options: [...globalOptions, residentCompilerInfoFile],
        },
      ],
    },
    {
      name: ["debug-adapter", "debug_adapter"],
      description:
        "Start a debug adapter that conforms to the Debug Adapter Protocol",
      hidden: true,
      options: [
        ...globalOptions,
        ...negatable(
          "ipv6",
          "Whether to bind DAP/VM Service/DDS to IPv6 addresses"
        ),
        ...negatable(
          "test",
          'Whether to use the "dart test" debug adapter to run tests'
        ),
      ],
    },
    {
      name: "development-service",
      description: "Start Dart's development service",
      hidden: true,
      options: globalOptions,
    },
    {
      name: "language-server",
      description: "Start Dart's analysis server",
      hidden: true,
      options: globalOptions,
    },
    {
      name: "mcp-server",
      description:
        "A stdio based Model Context Protocol (MCP) server to aid in Dart and Flutter development",
      hidden: true,
      options: globalOptions,
    },
    {
      name: "tooling-daemon",
      description: "Start Dart's tooling daemon",
      hidden: true,
      options: globalOptions,
    },
  ],
};

export default completionSpec;
