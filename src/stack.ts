// Stack v3.11.1 (newest stable on GitHub tags, Hackage and Homebrew, 2026-11-20). Source: src/Stack/CLI.hs
// and src/Stack/Options/*.hs at tag v3.11.1, plus docs/commands/*.md; re-verified
// every command, flag, alias and enum against that source on 2026-11-20

// --NAME and --no-NAME, as optparse-applicative's boolFlags generates them
const bool = (name: string, what: string): Fig.Option[] => [
  { name: `--${name}`, description: `Enable ${what}` },
  {
    name: `--no-${name}`,
    description: `Disable ${what}`,
    exclusiveOn: [`--${name}`],
  },
];

const flagOption: Fig.Option = {
  name: "--flag",
  description:
    "Set (or unset) the Cabal flag for the package (or use '*' for all packages)",
  isRepeatable: true,
  args: { name: "PACKAGE:[-]FLAG" },
};

const ghcOptionsOption: Fig.Option = {
  name: "--ghc-options",
  description:
    "Additional options passed to GHC (can be specified multiple times)",
  isRepeatable: true,
  args: { name: "OPTIONS" },
};

const packageOption: Fig.Option = {
  name: "--package",
  description: "Add package(s) (can be specified multiple times)",
  isRepeatable: true,
  args: { name: "PACKAGE(S)" },
};

const targetsArg: Fig.Arg = {
  name: "TARGET",
  description:
    "If none specified, use all project packages. See https://docs.haskellstack.org/en/stable/commands/build_command/#target-syntax",
  isOptional: true,
  isVariadic: true,
};

const pvpBoundsOption: Fig.Option = {
  name: "--pvp-bounds",
  description: "How PVP version bounds should be added to Cabal file",
  args: {
    name: "PVP-BOUNDS",
    suggestions: ["none", "lower", "upper", "both"],
  },
};

const tarballOptions: Fig.Option[] = [
  pvpBoundsOption,
  {
    name: "--ignore-check",
    description: "Do not check packages for common mistakes",
  },
  ...bool("test-tarball", "building of the resulting generated files"),
  {
    name: "--tar-dir",
    description: "If specified, copy all the generated files to this directory",
    args: { name: "DIR", template: "folders" },
  },
];

// Build flags shown only by build-type commands (and partly by ghci)
const traceProfileOptions: Fig.Option[] = [
  {
    name: "--trace",
    description:
      "Enable profiling in libraries, executables, etc. for all expressions and generate a backtrace on exception",
  },
  {
    name: "--profile",
    description:
      "Enable profiling in libraries, executables, etc. for all expressions and generate a profiling report in tests or benchmarks",
  },
  {
    name: "--no-strip",
    description:
      "Disable DWARF debugging symbol stripping in libraries, executables, etc. for all expressions",
  },
  ...bool("test", "testing the package(s) in this directory/configuration"),
  ...bool(
    "bench",
    "benchmarking the package(s) in this directory/configuration"
  ),
];

// ponytail: Cabal-recognised programs from BuildParser.hs; each takes --PROG-option
const cabalProgs = [
  "alex",
  "ar",
  "c2hs",
  "cpphs",
  "doctest",
  "gcc",
  "greencard",
  "happy",
  "hsc2hs",
  "hscolour",
  "ld",
  "pkg-config",
  "strip",
  "tar",
];

const buildOptions: Fig.Option[] = [
  { name: "--dry-run", description: "Don't build anything, just prepare to" },
  {
    name: "--pedantic",
    description: "Pass the -Wall and -Werror flags to GHC",
  },
  { name: "--fast", description: "Pass a -O0 flag to GHC" },
  ghcOptionsOption,
  ...cabalProgs.map((prog): Fig.Option => ({
    name: `--${prog}-option`,
    description: `Pass an argument to ${prog} (can be specified multiple times)`,
    isRepeatable: true,
    args: { name: "ARG" },
  })),
  flagOption,
  ...bool(
    "allow-newer",
    "ignoring of lower and upper version bounds in Cabal files"
  ),
  ...[
    ["--dependencies-only", "A synonym for --only-dependencies"],
    [
      "--only-snapshot",
      "Only build packages for the snapshot database, not the local database",
    ],
    [
      "--only-dependencies",
      "Only build packages that are dependencies of targets on the command line",
    ],
    [
      "--only-locals",
      "Only build packages in the local database. Fail if the build plan includes the snapshot database",
    ],
  ].map(([name, description], _, all): Fig.Option => ({
    name,
    description,
    exclusiveOn: all.map(([n]) => n).filter((n) => n !== name),
  })),
  {
    name: "--file-watch",
    description: "Watch for changes in local files and automatically rebuild",
    exclusiveOn: ["--file-watch-poll"],
  },
  {
    name: "--file-watch-poll",
    description:
      "Like --file-watch, but polling the filesystem instead of using events",
    exclusiveOn: ["--file-watch"],
  },
  {
    name: "--watch-all",
    description: "Watch all local files not taking targets into account",
  },
  {
    name: "--exec",
    description: "Command and argument(s) to run after a successful build",
    isRepeatable: true,
    args: { name: "COMMAND [ARGUMENT(S)]" },
  },
  {
    name: "--only-configure",
    description:
      "Only perform the configure step, not any builds. May break when used on multiple packages at once!",
  },
  ...bool(
    "semaphore",
    "the use of a system semaphore to perform compilation in parallel when possible"
  ),
  ...traceProfileOptions,
  ...bool(
    "library-profiling",
    "library profiling for TARGETs and all its dependencies"
  ),
  ...bool(
    "executable-profiling",
    "executable profiling for TARGETs and all its dependencies"
  ),
  ...bool(
    "library-stripping",
    "library stripping for TARGETs and all its dependencies"
  ),
  ...bool(
    "executable-stripping",
    "executable stripping for TARGETs and all its dependencies"
  ),
  ...bool(
    "haddock",
    "generating Haddock documentation for the package(s) in this directory/configuration"
  ),
  {
    name: "--haddock-arguments",
    description: "Arguments passed to the Haddock program",
    args: { name: "HADDOCK_ARGS" },
  },
  ...bool("open", "opening the local Haddock documentation in the browser"),
  ...bool("haddock-deps", "building Haddock documentation for dependencies"),
  ...bool(
    "haddock-executables",
    "also building Haddock documentation for all executables"
  ),
  ...bool(
    "haddock-tests",
    "also building Haddock documentation for all test suites"
  ),
  ...bool(
    "haddock-benchmarks",
    "also building Haddock documentation for all benchmarks"
  ),
  ...bool(
    "haddock-internal",
    "building Haddock documentation for internal modules"
  ),
  ...bool(
    "haddock-hyperlink-source",
    "building hyperlinked source for Haddock documentation"
  ),
  ...bool(
    "haddock-for-hackage",
    "building with flags to generate Haddock documentation suitable for upload to Hackage"
  ),
  ...bool("copy-bins", "copying binaries to local-bin (see 'stack path')"),
  ...bool(
    "copy-compiler-tool",
    "copying binaries of targets to compiler-tools-bin (see 'stack path')"
  ),
  ...bool("prefetch", "fetching packages necessary for the build immediately"),
  ...bool("keep-going", "continue running after a step fails"),
  ...bool("keep-tmp-files", "keep intermediate files and build directories"),
  ...bool(
    "force-dirty",
    "forcing the treatment of all project packages and local extra-deps as having dirty files"
  ),
  ...bool("rerun-tests", "running already successful test suites"),
  {
    name: ["--test-arguments", "--ta"],
    description: "Arguments passed to the test suites",
    isRepeatable: true,
    args: { name: "TEST_ARGS" },
  },
  { name: "--coverage", description: "Generate a code coverage report" },
  ...bool("run-tests", "running of targeted test suites"),
  {
    name: "--test-suite-timeout",
    description: "For each test suite, maximum run time before it fails",
    args: { name: "SECONDS" },
  },
  {
    name: "--test-suite-timeout-grace",
    description:
      "Grace period after timeout before termination of a timed-out test suite is forced",
    args: { name: "SECONDS" },
  },
  ...bool("tests-allow-stdin", "allow standard input in test suites"),
  {
    name: ["--benchmark-arguments", "--ba"],
    description: "Arguments passed to the benchmarks",
    args: { name: "BENCH_ARGS" },
  },
  ...bool("run-benchmarks", "running of targeted benchmarks"),
  ...bool("reconfigure", "performing the configure step, even if unnecessary"),
  {
    name: "--cabal-verbosity",
    description:
      "Cabal verbosity (accepts Cabal's numerical and extended syntax)",
    args: { name: "VERBOSITY" },
  },
  ...bool("cabal-verbose", "asking Cabal to be verbose in its output"),
  ...bool(
    "split-objs",
    "split-objs, to reduce output size (at the cost of build time)"
  ),
  {
    name: "--skip",
    description: "Skip given component (can be specified multiple times)",
    isRepeatable: true,
    args: { name: "COMPONENT" },
  },
  ...bool(
    "interleaved-output",
    "printing concurrent GHC output to the console with a prefix for the package name"
  ),
  {
    name: "--progress-bar",
    description: "Progress bar format (default: capped)",
    args: {
      name: "FORMAT",
      suggestions: ["none", "count-only", "capped", "full"],
    },
  },
  {
    name: "--ddump-dir",
    description: "Specify output directory for ddump-files",
    args: { name: "DIR", template: "folders" },
  },
];

const buildCommand = (name: string, description: string): Fig.Subcommand => ({
  name,
  description,
  args: targetsArg,
  options: buildOptions,
});

const execOptions: Fig.Option[] = [
  ...bool(
    "ghc-package-path",
    "setting the GHC_PACKAGE_PATH variable for the subprocess"
  ),
  ...bool(
    "stack-exe",
    "setting the STACK_EXE environment variable to the path for the stack executable"
  ),
  packageOption,
  {
    name: "--rts-options",
    description:
      "Explicit RTS options to pass to application (can be specified multiple times)",
    isRepeatable: true,
    args: { name: "RTSFLAG" },
  },
  {
    name: "--cwd",
    description: "Sets the working directory before executing",
    args: { name: "DIR", template: "folders" },
  },
];

const execArgs: Fig.Arg = {
  name: "ARGUMENT(S)",
  isOptional: true,
  isVariadic: true,
};

const ghciCommand = (name: string, description: string): Fig.Subcommand => ({
  name,
  description,
  args: { ...targetsArg, name: "TARGET/FILE", template: "filepaths" },
  options: [
    { name: "--pedantic", description: "Turn on -Wall and -Werror" },
    {
      name: "--ghci-options",
      description:
        "Additional options passed to GHCi (can be specified multiple times)",
      isRepeatable: true,
      args: { name: "OPTIONS" },
    },
    {
      ...ghcOptionsOption,
      description:
        "Additional options passed to both GHC and GHCi (can be specified multiple times)",
    },
    flagOption,
    {
      name: "--with-ghc",
      description: "Use this GHC to run GHCi",
      args: { name: "GHC", template: "filepaths" },
    },
    ...bool("load", "load modules on start-up"),
    packageOption,
    {
      name: "--main-is",
      description:
        "Specify which target should contain the main module to load",
      args: { name: "TARGET" },
    },
    {
      name: "--load-local-deps",
      description: "Load all local dependencies of your targets",
    },
    ...bool("package-hiding", "package hiding"),
    {
      name: "--only-main",
      description:
        "Only load and import the main module. If no main module, no modules will be loaded",
    },
    ...traceProfileOptions,
  ],
});

const dotOptions: Fig.Option[] = [
  ...bool("external", "inclusion of external dependencies"),
  ...bool("include-base", "inclusion of dependencies on base"),
  {
    name: "--depth",
    description: "Limit the depth of dependency resolution (default: no limit)",
    args: { name: "DEPTH" },
  },
  {
    name: "--prune",
    description: "Prune specified package(s), as a comma-separated list",
    args: { name: "PACKAGES" },
  },
  {
    name: "--reach",
    description:
      "Prune packages that cannot reach any of the specified package(s), as a comma-separated list",
    args: { name: "PACKAGES" },
  },
  flagOption,
  { name: "--test", description: "Consider dependencies of test components" },
  {
    name: "--bench",
    description: "Consider dependencies of benchmark components",
  },
  {
    name: "--global-hints",
    description:
      "Do not require an installed GHC; instead, use a hints file for global packages",
  },
];

const lsDependenciesFormatOptions: Fig.Option[] = [
  ...bool("license", "printing of dependency licenses instead of versions"),
  {
    name: "--separator",
    description:
      "Separator between package name and what follows (default: ' ')",
    args: { name: "SEP" },
  },
];

const lsDependenciesTextOptions: Fig.Option[] = [
  ...lsDependenciesFormatOptions,
  {
    name: "--filter",
    description:
      "Item to be filtered out of the results: $locals or a package name",
    isRepeatable: true,
    args: { name: "ITEM", suggestions: ["$locals"] },
  },
  ...dotOptions,
];

const boolArg: Fig.Arg = { name: "true|false", suggestions: ["true", "false"] };

const globalScope: Fig.Option = {
  name: "--global",
  description:
    "Modify the user-specific global configuration file ('config.yaml') instead of the project-level one ('stack.yaml')",
};

const snapshotArg: Fig.Arg = {
  name: "SNAPSHOT",
  description: 'E.g. "nightly" or "lts-24.43"',
  suggestions: ["nightly", "lts"],
};

const pathKeys: [string, string][] = [
  ["stack-root", "Global Stack root directory"],
  ["global-config", "User-specific global configuration file"],
  ["programs", "Install location for GHC and other core tools"],
  ["local-bin", "Directory where Stack installs executables"],
  [
    "project-root",
    "Project root (derived from the project-level configuration file)",
  ],
  [
    "config-location",
    "Project-level configuration file (stack.yaml, by default)",
  ],
  ["bin-path", "PATH environment variable"],
  ["compiler-exe", "Compiler binary (e.g. ghc)"],
  ["compiler-bin", "Directory containing the compiler binary (e.g. ghc)"],
  [
    "compiler-tools-bin",
    "The compiler tools directory for the specified compiler version",
  ],
  ["extra-include-dirs", "Extra include directories"],
  ["extra-library-dirs", "Extra library directories"],
  ["snapshot-pkg-db", "Snapshot package database"],
  ["local-pkg-db", "Local project package database"],
  ["global-pkg-db", "Global package database"],
  ["ghc-package-path", "GHC_PACKAGE_PATH environment variable"],
  ["snapshot-install-root", "Snapshot installation root"],
  ["local-install-root", "Local project installation root"],
  ["snapshot-doc-root", "Snapshot documentation root"],
  ["local-doc-root", "Local project documentation root"],
  ["local-hoogle-root", "Local project documentation root"],
  ["dist-dir", "Dist work directory, relative to package directory"],
  ["local-hpc-root", "Where HPC reports and tix files are stored"],
];

const completionSpec: Fig.Spec = {
  name: "stack",
  description: "The Haskell Tool Stack",
  options: [
    { name: ["--help", "-h"], description: "Show help for stack" },
    { name: "--version", description: "Show version for stack" },
    {
      name: "--numeric-version",
      description: "Show only the numeric version for stack",
    },
    {
      name: "--hpack-numeric-version",
      description: "Show only hpack's version number",
    },
    { name: "--docker-help", description: "Show help for Docker options" },
    { name: "--nix-help", description: "Show help for Nix options" },
    {
      name: "--verbosity",
      description: "Set verbosity level",
      args: {
        name: "VERBOSITY",
        suggestions: ["silent", "error", "warn", "info", "debug"],
      },
    },
    {
      name: ["--verbose", "-v"],
      description: 'Enable verbose mode: verbosity level "debug"',
    },
    {
      name: "--silent",
      description: 'Enable silent mode: verbosity level "silent"',
    },
    ...bool("time-in-log", "inclusion of timings in logs"),
    ...bool("rsl-in-log", "inclusion of raw snapshot layer (rsl) in logs"),
    ...bool(
      "plan-in-log",
      "inclusion of information about build plan construction in logs"
    ),
    {
      name: "--stack-root",
      description:
        "Absolute path to the global Stack root directory. Overrides any STACK_ROOT environment variable",
      args: { name: "STACK-ROOT", template: "folders" },
    },
    {
      name: "--work-dir",
      description:
        "Relative path to Stack's work directory. Overrides any STACK_WORK environment variable (default: '.stack-work')",
      args: { name: "WORK-DIR", template: "folders" },
    },
    ...bool(
      "system-ghc",
      "using the system installed GHC (on the PATH) if it is available and its version matches"
    ),
    ...bool("install-ghc", "downloading and installing GHC if necessary"),
    ...bool(
      "install-msys",
      "downloading and installing MSYS2 if necessary (Windows only)"
    ),
    {
      name: "--arch",
      description: "System architecture, e.g. i386, x86_64, aarch64",
      args: { name: "ARCH", suggestions: ["i386", "x86_64", "aarch64"] },
    },
    {
      name: "--ghc-variant",
      description:
        "Specialized GHC variant, e.g. int-native or integersimple (incompatible with --system-ghc)",
      args: { name: "VARIANT" },
    },
    {
      name: "--ghc-build",
      description:
        "Specialized GHC build, e.g. 'gmp4' or 'standard' (usually auto-detected)",
      args: {
        name: "BUILD",
        suggestions: [
          "standard",
          "gmp4",
          "nopie",
          "tinfo6",
          "tinfo6-libc6-pre232",
          "tinfo6-nopie",
          "ncurses6",
          "int-native",
          "integersimple",
        ],
      },
    },
    {
      name: ["--jobs", "-j"],
      description: "Number of concurrent jobs to run",
      args: { name: "JOBS" },
    },
    {
      name: "--extra-include-dirs",
      description: "Extra directories to check for C header files",
      isRepeatable: true,
      args: { name: "DIR", template: "folders" },
    },
    {
      name: "--extra-lib-dirs",
      description: "Extra directories to check for libraries",
      isRepeatable: true,
      args: { name: "DIR", template: "folders" },
    },
    {
      name: "--custom-preprocessor-extensions",
      description: "Extensions used for custom preprocessors",
      isRepeatable: true,
      args: { name: "EXT" },
    },
    {
      name: "--with-gcc",
      description: "Use gcc found at PATH-TO-GCC",
      args: { name: "PATH-TO-GCC", template: "filepaths" },
    },
    {
      name: "--with-hpack",
      description: "Use HPACK executable (overrides bundled Hpack)",
      args: { name: "HPACK", template: "filepaths" },
    },
    ...bool(
      "hpack-force",
      "overwriting of Cabal files that were created by a more recent version of Hpack or have been modified manually"
    ),
    ...bool(
      "skip-ghc-check",
      "skipping the GHC version and architecture check"
    ),
    ...bool("skip-msys", "skipping the local MSYS installation (Windows only)"),
    {
      name: "--local-bin-path",
      description:
        "Override the target directory for 'stack build --copy-bins' and 'stack install'",
      args: { name: "DIR", template: "folders" },
    },
    {
      name: "--setup-info-yaml",
      description:
        "Alternate URL or path (relative or absolute) for Stack dependencies",
      isPersistent: true,
      isRepeatable: true,
      args: { name: "URL", template: "filepaths" },
    },
    ...bool(
      "modify-code-page",
      "setting the codepage to support UTF-8 (Windows only)"
    ),
    ...bool(
      "allow-different-user",
      "permission for users other than the owner of the Stack root directory to use a Stack installation (POSIX only)"
    ),
    ...bool(
      "dump-logs",
      "dump the build output logs for project packages to the console"
    ),
    {
      name: ["--color", "--colour"],
      description: "Specify when to use color in output",
      args: { name: "WHEN", suggestions: ["always", "never", "auto"] },
    },
    {
      name: "--snapshot-location-base",
      description: "The base location of LTS/Nightly snapshots",
      isPersistent: true,
      args: { name: "URL" },
    },
    ...bool(
      "script-no-run-compile",
      "the use of options `--no-run --compile` with `stack script`"
    ),
    ...bool(
      "docker",
      "using a Docker container. --docker implies 'system-ghc: true'"
    ),
    {
      name: "--docker-repo",
      description: "Docker repository name",
      args: { name: "NAME" },
    },
    {
      name: "--docker-image",
      description: "Exact Docker image ID (overrides docker-repo)",
      args: { name: "IMAGE" },
    },
    ...bool("docker-registry-login", "registry requires login"),
    {
      name: "--docker-registry-username",
      description: "Docker registry username",
      args: { name: "USERNAME" },
    },
    {
      name: "--docker-registry-password",
      description: "Docker registry password",
      args: { name: "PASSWORD" },
    },
    ...bool("docker-auto-pull", "automatic pulling latest version of image"),
    ...bool("docker-detach", "running a detached Docker container"),
    ...bool("docker-persist", "not deleting container after it exits"),
    {
      name: "--docker-container-name",
      description: "Docker container name",
      args: { name: "NAME" },
    },
    {
      name: "--docker-network",
      description: "Docker network",
      args: { name: "NETWORK" },
    },
    {
      name: "--docker-run-args",
      description: "Additional options to pass to 'docker run'",
      args: { name: "'ARG1 [ARG2 ...]'" },
    },
    {
      name: "--docker-mount",
      description:
        "Mount volumes from host in container (can be specified multiple times)",
      isRepeatable: true,
      args: { name: "(PATH | HOST-PATH:CONTAINER-PATH)", template: "folders" },
    },
    {
      name: "--docker-mount-mode",
      description: "Volume mount mode suffix",
      args: { name: "SUFFIX" },
    },
    {
      name: "--docker-env",
      description:
        "Set environment variable in container (can be specified multiple times)",
      isRepeatable: true,
      args: { name: "NAME=VALUE" },
    },
    {
      name: "--docker-stack-exe",
      description: "Location of stack executable used in container",
      args: {
        name: "download|host|image|PATH",
        suggestions: ["download", "host", "image"],
        template: "filepaths",
      },
    },
    ...bool("docker-set-user", "setting user in container to match host"),
    ...bool("nix", "use of a Nix-shell. Implies 'system-ghc: true'"),
    ...bool(
      "nix-pure",
      "use of a pure Nix-shell. Implies '--nix' and 'system-ghc: true'"
    ),
    {
      name: "--nix-packages",
      description:
        "List of packages that should be available in the nix-shell (space separated)",
      args: { name: "NAMES" },
    },
    {
      name: "--nix-shell-file",
      description:
        "Nix file to be used to launch a nix-shell (for regular Nix users)",
      args: { name: "FILE", template: "filepaths" },
    },
    {
      name: "--nix-shell-options",
      description: "Additional options passed to nix-shell",
      args: { name: "OPTIONS" },
    },
    {
      name: "--nix-path",
      description:
        "Additional options to override NIX_PATH parts (notably 'nixpkgs')",
      args: { name: "PATH_OPTIONS" },
    },
    ...bool(
      "nix-add-gc-roots",
      "addition of packages to the nix GC roots so nix-collect-garbage does not remove them"
    ),
    {
      name: ["--snapshot", "--resolver"],
      description: "Override snapshot in the project configuration file",
      args: snapshotArg,
    },
    {
      name: "--compiler",
      description: "Use the specified compiler",
      args: { name: "COMPILER" },
    },
    ...bool(
      "terminal",
      "overriding terminal detection in the case of running in a false terminal"
    ),
    {
      name: ["--stack-colors", "--stack-colours"],
      description:
        "Specify Stack's output styles; STYLES is a colon-delimited sequence of key=value. Use 'stack ls stack-colors --basic' to see the current sequence",
      args: { name: "STYLES" },
    },
    {
      name: "--terminal-width",
      description:
        "Specify the width of the terminal, used for pretty-print messages",
      args: { name: "INT" },
    },
    {
      name: ["--stack-yaml", "-w"],
      description:
        "Override project stack.yaml file (overrides any STACK_YAML environment variable)",
      args: { name: "STACK-YAML", template: "filepaths" },
    },
    {
      name: "--lock-file",
      description:
        "Specify how to interact with lock files (default: if snapshot is overridden: read-only; otherwise: read/write)",
      args: {
        name: "ARG",
        suggestions: ["error-on-write", "ignore", "read-only", "read-write"],
      },
    },
  ],
  subcommands: [
    buildCommand(
      "build",
      "Build the package(s) in this directory/configuration"
    ),
    buildCommand("install", "Shortcut for 'build --copy-bins'"),
    {
      name: "uninstall",
      description:
        "Show how to uninstall Stack or a Stack-supplied tool. This command does not itself uninstall Stack or a Stack-supplied tool",
    },
    buildCommand("test", "Shortcut for 'build --test'"),
    buildCommand("bench", "Shortcut for 'build --bench'"),
    buildCommand("haddock", "Shortcut for 'build --haddock'"),
    {
      name: "new",
      description:
        "Create a new project from a template. Run 'stack templates' to see available templates",
      args: [
        { name: "PACKAGE_NAME", description: "A valid package name" },
        {
          name: "TEMPLATE_NAME",
          description:
            "Name of a template: [[service:]username/]template, a local filename such as foo.hsfiles, or a full URL",
          isOptional: true,
        },
        {
          name: "DIR(S)",
          description:
            "Directories to include in the search for Cabal files, when initialising (default: current directory)",
          isOptional: true,
          isVariadic: true,
          template: "folders",
        },
      ],
      options: [
        {
          name: "--bare",
          description: "Do not create a subdirectory for the project",
        },
        ...bool("init", "the initialisation of the project for use with Stack"),
        {
          name: ["--param", "-p"],
          description: "Parameter for the template in the format key:value",
          isRepeatable: true,
          args: { name: "KEY:VALUE" },
        },
        {
          name: "--ignore-subdirs",
          description:
            "Do not search for Cabal files in subdirectories, when initialising",
        },
        {
          name: "--force",
          description:
            "Force an initialisation that overwrites any existing stack.yaml file",
        },
        {
          name: "--omit-packages",
          description:
            "Exclude conflicting or incompatible user packages, when initialising",
        },
      ],
    },
    {
      name: "templates",
      description:
        "Show how to find templates available for 'stack new'. Note: this downloads the help file",
    },
    {
      name: "init",
      description:
        "Create Stack project configuration from Cabal or Hpack package specifications",
      args: {
        name: "DIR(S)",
        description:
          "Directories to include in the search for Cabal files (default: current directory)",
        isOptional: true,
        isVariadic: true,
        template: "folders",
      },
      options: [
        {
          name: "--ignore-subdirs",
          description: "Do not search for Cabal files in subdirectories",
        },
        {
          name: "--force",
          description:
            "Force an initialisation that overwrites any existing stack.yaml file",
        },
        {
          name: "--omit-packages",
          description: "Exclude conflicting or incompatible user packages",
        },
      ],
    },
    {
      name: "setup",
      description: "Get the appropriate GHC for your project",
      args: {
        name: "GHC_VERSION",
        description:
          "Version of GHC to install, e.g. 9.10.3 (default: the version implied by the snapshot)",
        isOptional: true,
      },
      options: [
        ...bool(
          "reinstall",
          "reinstalling GHC, even if available (incompatible with --system-ghc)"
        ),
        {
          name: "--ghc-bindist",
          description:
            "Alternate GHC binary distribution (requires custom --ghc-variant)",
          args: { name: "URL" },
        },
        {
          name: "--ghcjs-boot-options",
          description: "Additional ghcjs-boot options",
          isRepeatable: true,
          args: { name: "GHCJS_BOOT" },
        },
        ...bool("ghcjs-boot-clean", "the --clean option for ghcjs-boot"),
      ],
    },
    {
      name: "path",
      description: "Print out handy path information",
      options: pathKeys.map(([key, description]) => ({
        name: `--${key}`,
        description,
      })),
    },
    {
      name: "ls",
      description:
        "List command. (Supports snapshots, global packages, dependencies, Stack's styles and installed tools.)",
      subcommands: [
        {
          name: "snapshots",
          description: "View snapshots (default: local)",
          subcommands: [
            { name: "remote", description: "View remote snapshots" },
            { name: "local", description: "View local snapshots" },
          ],
          options: [
            {
              name: ["--lts", "-l"],
              description: "Only show LTS Haskell snapshots",
            },
            {
              name: ["--nightly", "-n"],
              description: "Only show Nightly snapshots",
            },
          ],
        },
        {
          name: "globals",
          description: "View global packages",
          options: bool(
            "global-hints",
            "use of a hints file for global packages, rather than an installed GHC"
          ),
        },
        {
          name: "dependencies",
          description: "View the packages versions used for a project",
          args: targetsArg,
          subcommands: [
            {
              name: "text",
              description: "Print dependencies as text (default)",
              args: targetsArg,
              options: lsDependenciesTextOptions,
            },
            {
              name: "cabal",
              description: "Print dependencies as exact Cabal constraints",
              args: targetsArg,
              options: dotOptions,
            },
            {
              name: "tree",
              description: "Print dependencies as tree",
              args: targetsArg,
              options: [...lsDependenciesFormatOptions, ...dotOptions],
            },
            {
              name: "json",
              description: "Print dependencies as JSON",
              args: targetsArg,
              options: dotOptions,
            },
          ],
          options: lsDependenciesTextOptions,
        },
        {
          name: ["stack-colors", "stack-colours"],
          description: "View Stack's output styles",
          options: [
            ...bool("basic", "a basic report of the styles used"),
            ...bool("sgr", "the provision of the equivalent SGR instructions"),
            ...bool(
              "example",
              "the provision of an example of the applied style"
            ),
          ],
        },
        {
          name: "tools",
          description: "View Stack's installed tools",
          options: [
            {
              name: "--filter",
              description:
                "Filter by a tool name (eg 'ghc', 'ghc-git' or 'msys2')",
              args: { name: "TOOL_NAME" },
            },
          ],
        },
      ],
    },
    {
      name: "unpack",
      description:
        "Unpack one or more packages, or one or more package candidates, locally",
      args: {
        name: "TARGET",
        description:
          "A package (by name or identifier, optionally with '@rev:<number>' or '@sha256:<sha>') or package candidate",
        isVariadic: true,
      },
      options: [
        {
          name: "--candidate",
          description: "Each target is a package candidate",
        },
        {
          name: "--to",
          description: "A directory to unpack into",
          args: { name: "DIR", template: "folders" },
        },
      ],
    },
    { name: "update", description: "Update the package index" },
    {
      name: "upgrade",
      description:
        "Upgrade Stack, installing to Stack's local-bin directory and, if different and permitted, the directory of the current Stack executable",
      options: [
        {
          name: "--binary-only",
          description: "Do not use a source upgrade path",
          exclusiveOn: ["--source-only"],
        },
        {
          name: "--source-only",
          description: "Do not use a binary upgrade path",
          exclusiveOn: ["--binary-only"],
        },
        {
          name: "--binary-platform",
          description: "Platform type for archive to download",
          args: { name: "PLATFORM" },
        },
        {
          name: "--force-download",
          description:
            "Download the latest available Stack executable, even if not newer",
        },
        ...bool(
          "only-local-bin",
          "downloading only to Stack's local binary directory"
        ),
        {
          name: "--binary-version",
          description:
            "Download a specific Stack version, even if already installed",
          args: { name: "VERSION" },
        },
        {
          name: "--github-org",
          description: "GitHub organization name",
          args: { name: "USER" },
        },
        {
          name: "--github-repo",
          description: "GitHub repository name",
          args: { name: "REPO" },
        },
        {
          name: "--git",
          description:
            "Clone from Git instead of downloading from Hackage (more dangerous)",
        },
        {
          name: "--git-repo",
          description: "Clone from specified Git repository",
          args: {
            name: "URL",
            default: "https://github.com/commercialhaskell/stack",
          },
        },
        {
          name: "--git-branch",
          description: "Clone from specified Git branch",
          args: { name: "BRANCH", default: "master" },
        },
      ],
    },
    {
      name: "upload",
      description:
        "Upload one or more packages, or documentation for one or more packages, to Hackage",
      args: {
        name: "ITEM",
        description:
          "A relative path to a package directory or, for package upload only, an sdist tarball",
        isOptional: true,
        isVariadic: true,
        template: "filepaths",
      },
      options: [
        {
          name: ["--documentation", "-d"],
          description: "Upload documentation for packages (not packages)",
        },
        ...tarballOptions,
        {
          name: "--candidate",
          description: "Upload as, or for, a package candidate",
        },
        ...bool(
          "save-hackage-creds",
          "saving user's Hackage username and password in a local file"
        ),
      ],
    },
    {
      name: "sdist",
      description: "Create source distribution tarballs",
      args: {
        name: "DIR",
        description:
          "A relative path to a package directory. If none specified, use all project packages",
        isOptional: true,
        isVariadic: true,
        template: "folders",
      },
      options: tarballOptions,
    },
    {
      name: "dot",
      description:
        "Visualize your project's dependency graph using Graphviz dot",
      args: targetsArg,
      options: dotOptions,
    },
    {
      name: "ghc",
      description: "Run ghc",
      args: { ...execArgs, template: "filepaths" },
      options: execOptions,
    },
    {
      name: "hoogle",
      description:
        "Run hoogle, the Haskell API search engine. Use the '-- ARGUMENT(S)' syntax to pass Hoogle arguments",
      args: execArgs,
      options: [
        ...bool(
          "setup",
          "installing Hoogle, building Haddock documentation and generating a Hoogle database, if needed"
        ),
        { name: "--rebuild", description: "Rebuild the Hoogle database" },
        { name: "--server", description: "Start local Hoogle server" },
      ],
    },
    {
      name: "exec",
      description:
        "Execute a command. If the command is absent, the first of any arguments is taken as the command",
      args: [{ name: "COMMAND", isCommand: true }, execArgs],
      options: execOptions,
    },
    {
      name: "run",
      description:
        "Build and run an executable. Defaults to the first available executable if none is provided as the first argument",
      args: execArgs,
      options: execOptions,
    },
    ghciCommand("ghci", "Run ghci in the context of package(s)"),
    ghciCommand(
      "repl",
      "Run ghci in the context of package(s) (alias for 'ghci')"
    ),
    {
      name: ["runghc", "runhaskell"],
      description: "Run runghc",
      args: { ...execArgs, template: "filepaths" },
      options: execOptions,
    },
    {
      name: "script",
      description: "Run a Stack script",
      args: [
        { name: "FILE", template: "filepaths" },
        { ...execArgs, description: "Arguments to the program, after '--'" },
      ],
      options: [
        packageOption,
        {
          name: "--compile",
          description:
            "Compile the script without optimization and run the executable",
          exclusiveOn: ["--optimize"],
        },
        {
          name: "--optimize",
          description:
            "Compile the script with optimization and run the executable",
          exclusiveOn: ["--compile"],
        },
        ...bool(
          "use-root",
          "writing of all compilation outputs to a script-specific location in the scripts directory of the Stack root"
        ),
        ghcOptionsOption,
        {
          name: "--extra-dep",
          description:
            "An immutable extra dependency to be added to the snapshot (can be specified multiple times)",
          isRepeatable: true,
          args: { name: "EXTRA-DEP" },
        },
        { name: "--no-run", description: "Do not run, just compile" },
      ],
    },
    {
      name: "eval",
      description:
        "Evaluate some Haskell code inline. Shortcut for 'stack exec ghc -- -e CODE'",
      args: { name: "CODE" },
      options: execOptions,
    },
    {
      name: "clean",
      description: "Delete build artefacts for project packages",
      args: {
        name: "PACKAGE",
        description: "If none specified, clean all project packages",
        isOptional: true,
        isVariadic: true,
      },
      options: [
        ...bool("omit-this", "the omission of directories currently in use"),
        {
          name: "--full",
          description:
            "Delete the project's Stack work directories (.stack-work by default)",
        },
      ],
    },
    {
      name: "purge",
      description:
        "Delete the project Stack working directories (.stack-work by default). Shortcut for 'stack clean --full'",
    },
    {
      name: "query",
      description: "Query general build information (experimental)",
      args: { name: "SELECTOR", isOptional: true, isVariadic: true },
    },
    {
      name: "list",
      description:
        "List package versions included in the package index, or in a specified snapshot",
      args: { name: "PACKAGE", isOptional: true, isVariadic: true },
    },
    {
      name: "ide",
      description: "IDE-specific commands",
      subcommands: [
        {
          name: "packages",
          description: "List all available local loadable packages",
          options: [
            {
              name: "--stdout",
              description:
                "Send output to the standard output stream instead of the standard error stream",
            },
            {
              name: "--cabal-files",
              description:
                "Print paths to package Cabal files instead of package names",
            },
          ],
        },
        {
          name: "targets",
          description: "List all targets or pick component types to list",
          options: [
            { name: "--exes", description: "Include executables" },
            { name: "--tests", description: "Include test suites" },
            { name: "--benchmarks", description: "Include benchmarks" },
            {
              name: "--stdout",
              description:
                "Send output to the standard output stream instead of the standard error stream",
            },
          ],
        },
      ],
    },
    {
      name: "docker",
      description: "Subcommands specific to Docker use",
      subcommands: [
        {
          name: "pull",
          description: "Pull latest version of Docker image from registry",
        },
        {
          name: "reset",
          description: "Reset the Docker sandbox",
          options: [
            {
              name: "--keep-home",
              description: "Do not delete sandbox's home directory",
            },
          ],
        },
      ],
    },
    {
      name: "config",
      description:
        "Subcommands for accessing and modifying configuration values",
      subcommands: [
        {
          name: "set",
          description: "Set a key in a configuration file to value",
          subcommands: [
            {
              name: "snapshot",
              description: "Change the snapshot of the current project",
              args: snapshotArg,
            },
            {
              name: "resolver",
              description:
                "Change the snapshot of the current project, using the (deprecated) resolver key",
              args: snapshotArg,
            },
            {
              name: "system-ghc",
              description:
                "Configure whether or not Stack should use a system GHC installation",
              args: boolArg,
              options: [globalScope],
            },
            {
              name: "install-ghc",
              description:
                "Configure whether or not Stack should automatically install GHC when necessary",
              args: boolArg,
              options: [globalScope],
            },
            {
              name: "install-msys",
              description:
                "Configure whether or not Stack should automatically install MSYS2 when necessary",
              args: boolArg,
              options: [globalScope],
            },
            {
              name: "recommend-stack-upgrade",
              description:
                "Configure whether or not Stack should notify the user if it identifes a new version of Stack is available",
              args: boolArg,
              options: [
                {
                  name: "--project",
                  description:
                    "Modify the project-level configuration file ('stack.yaml') instead of the user-specific global one ('config.yaml')",
                },
              ],
            },
            {
              name: "package-index",
              description: "Configure Stack's package index",
              subcommands: [
                {
                  name: "download-prefix",
                  description:
                    "Configure download prefix for Stack's package index",
                  args: {
                    name: "URL",
                    description: "Location of package index",
                    isOptional: true,
                  },
                  options: [globalScope],
                },
              ],
            },
          ],
        },
        {
          name: "env",
          description: "Print environment variables for use in a shell",
          options: [
            ...bool("locals", "include information about local packages"),
            ...bool(
              "ghc-package-path",
              "set GHC_PACKAGE_PATH environment variable"
            ),
            ...bool("stack-exe", "set STACK_EXE environment variable"),
            ...bool(
              "locale-utf8",
              "set the GHC_CHARENC environment variable to UTF-8"
            ),
            ...bool("keep-ghc-rts", "keep any GHCRTS environment variable"),
          ],
        },
        {
          name: "build-files",
          description:
            "Generate (when applicable) a Cabal file from an Hpack package description and/or a lock file for the project",
        },
        {
          name: "compiler-tools",
          description:
            "Create (when applicable) the compiler tools directory for the specified compiler version (implies 'config build-files')",
        },
      ],
    },
    {
      name: "hpc",
      description: "Subcommands specific to Haskell Program Coverage",
      subcommands: [
        {
          name: "report",
          description:
            "Generate unified HPC coverage report from tix files and project targets",
          args: {
            name: "TARGET_OR_TIX",
            isOptional: true,
            isVariadic: true,
            template: "filepaths",
          },
          options: [
            {
              name: "--all",
              description:
                "Use results from all packages and components involved in previous --coverage run",
            },
            {
              name: "--destdir",
              description: "Output directory for HTML report",
              args: { name: "DIR", template: "folders" },
            },
            { name: "--open", description: "Open the report in the browser" },
          ],
        },
      ],
    },
  ],
};
export default completionSpec;
