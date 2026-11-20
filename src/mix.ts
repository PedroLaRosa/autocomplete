// Elixir v1.20.5 (GitHub release "Latest" and Homebrew formula, 2026-11-20).
// Source: Mix.CLI and every task module in lib/mix/lib/mix/tasks of
// elixir-lang/elixir at v1.20.5 (moduledoc option lists cross-checked against
// the OptionParser switches; static read, not run). Not included: internal tasks
// (compile.all, compile.protocols, deps.partition, deps.precompile,
// will_recompile, archive.check, iex) and undocumented switches such as --timeout.
// Tasks from dependencies, aliases and archives come from the `mix help` generator.
import { filepaths } from "@tabsmith/autocomplete-generators";

const constants = {
  elixir_logo_url:
    "data:image/jpeg;base64,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",
};

const preferredScriptFilepaths = filepaths({
  extensions: ["exs"],
  editFileSuggestions: { priority: 76 },
});

const flag = (name: string | string[], description: string): Fig.Option => ({
  name,
  description,
});

const force = flag(
  "--force",
  "Forces compilation regardless of modification times"
);
const noArchivesCheck = flag("--no-archives-check", "Does not check archives");
const noCompile = flag(
  "--no-compile",
  "Does not compile even if files require compilation"
);
const noDepsCheck = flag("--no-deps-check", "Does not check dependencies");
const noElixirVersionCheck = flag(
  "--no-elixir-version-check",
  "Does not check the Elixir version from mix.exs"
);
const noHalt = flag(
  "--no-halt",
  "Does not halt the system after running the command"
);
const noMixExs = flag(
  "--no-mix-exs",
  "Allows the command to run even if there is no mix.exs"
);
const noStart = flag(
  "--no-start",
  "Does not start applications after compilation"
);
const preloadModules = flag(
  "--preload-modules",
  "Preloads all modules defined in applications"
);
const listeners = flag(
  "--listeners",
  "Starts Mix listeners (default unless --no-listeners or --no-deps-check)"
);
const noListeners = flag("--no-listeners", "Does not start Mix listeners");
const noOptionalDeps = flag(
  "--no-optional-deps",
  "Does not compile or load optional deps"
);
const forceInstall = flag(
  "--force",
  "Forces the operation without a shell prompt (intended for automation)"
);

const evalOption: Fig.Option = {
  name: ["-e", "--eval"],
  description: "Evaluates the given code",
  isRepeatable: true,
  args: {
    name: "code",
    description: "String containing code to execute",
    isScript: true,
  },
};
const requireOption: Fig.Option = {
  name: ["-r", "--require"],
  description: "Requires the given pattern/file before running the command",
  isRepeatable: true,
  args: {
    name: "file|pattern",
    description: "The file|pattern to require",
    generators: preferredScriptFilepaths,
  },
};
const parallelOption = flag(
  ["-p", "--parallel"],
  "Makes all requires parallel"
);

const envArg: Fig.Arg = {
  name: "env",
  description: "Mix environment",
  suggestions: ["dev", "test", "prod"],
};
const depsArg: Fig.Arg = {
  name: "dep",
  description: "Name of a dependency",
  isVariadic: true,
  isOptional: true,
};
const formatArg = (values: string[]): Fig.Arg => ({
  name: "format",
  suggestions: values,
});
const outputOption = (what: string): Fig.Option => ({
  name: "--output",
  description: `Overrides the location of the file created by the ${what} (use - for standard output)`,
  args: { name: "path", template: "filepaths" },
});
const onlyOption: Fig.Option = {
  name: "--only",
  description: "Only fetches dependencies for the given environment",
  args: envArg,
};
const targetOption: Fig.Option = {
  name: "--target",
  description: "Only fetches dependencies for the given target",
  args: { name: "target" },
};

// Options shared by the `mix profile.*` tasks (they run code like `mix run`)
const profileCommonOptions: Fig.Option[] = [
  evalOption,
  requireOption,
  parallelOption,
  noCompile,
  noDepsCheck,
  noArchivesCheck,
  noStart,
  noElixirVersionCheck,
];
const profileMatching: Fig.Option = {
  name: "--matching",
  description:
    "Only profiles calls matching the given Module.function/arity pattern",
  args: { name: "pattern" },
};
const profileFile: Fig.Arg = {
  name: "file",
  description: "File to profile (use --eval for an expression)",
  isOptional: true,
  generators: preferredScriptFilepaths,
};

// Options of the Elixir compiler, also accepted by `mix compile`
const elixirCompilerOptions: Fig.Option[] = [
  flag(
    "--all-warnings",
    "Prints all warnings, including previous compilations (default is true except on errors)"
  ),
  flag("--no-all-warnings", "Does not print all warnings"),
  flag("--docs", "Attaches documentation to compiled modules"),
  flag("--no-docs", "Does not attach documentation to compiled modules"),
  flag(
    "--debug-info",
    "Attaches debug info to compiled modules (forces a full recompilation)"
  ),
  flag(
    "--no-debug-info",
    "Does not attach debug info to compiled modules (forces a full recompilation)"
  ),
  flag(
    "--ignore-module-conflict",
    "Does not emit warnings if a module was previously defined"
  ),
  {
    name: "--long-compilation-threshold",
    description: "Sets the long compilation threshold in seconds",
    args: { name: "seconds" },
  },
  {
    name: "--long-verification-threshold",
    description: "Sets the long verification threshold in seconds",
    args: { name: "seconds" },
  },
  flag("--no-check-cwd", "Does not check the current working directory"),
  flag("--no-protocol-consolidation", "Skips protocol consolidation"),
  flag(
    "--no-verification",
    "Disables code verification such as unused functions, deprecations and type checking"
  ),
  {
    name: "--profile",
    description: "Outputs timing information of compilation steps",
    args: { name: "mode", suggestions: ["time"] },
  },
  {
    name: "--purge-consolidation-path-if-stale",
    description:
      "Deletes and purges modules in the given protocol consolidation path if compilation is required",
    args: { name: "path", template: "folders" },
  },
  flag(
    "--purge-compiler-modules",
    "Automatically purges compilation modules after compilation"
  ),
  {
    name: "--tracer",
    description:
      "Adds a compiler tracer in addition to any specified in mix.exs",
    isRepeatable: true,
    args: { name: "module" },
  },
  flag("--verbose", "Prints each file being compiled"),
  flag(
    "--warnings-as-errors",
    "Exits with non-zero status if compilation has one or more warnings"
  ),
];

const compileOptions: Fig.Option[] = [
  ...elixirCompilerOptions,
  {
    name: "--erl-config",
    description:
      "Path to an Erlang term file that will be loaded as Mix config",
    args: { name: "file", template: "filepaths" },
  },
  flag(
    "--force",
    "Forces compilation (use --force-COMPILER to force a specific compiler)"
  ),
  flag("--list", "Lists all enabled compilers"),
  listeners,
  flag(
    "--no-app-loading",
    "Does not load the .app resource file after compilation"
  ),
  noArchivesCheck,
  noCompile,
  noDepsCheck,
  noElixirVersionCheck,
  noListeners,
  flag(
    "--no-optional-deps",
    "Does not compile or load optional deps (forces a full recompilation)"
  ),
  flag("--no-prune-code-paths", "Does not prune code paths before compilation"),
  flag(
    "--no-validate-compile-env",
    "Does not validate the application compile environment"
  ),
  flag(
    "--return-errors",
    "Returns error status and diagnostics instead of exiting on error"
  ),
];

// Options shared by the smaller compilers (compile.erlang, compile.leex, compile.yecc)
const simpleCompilerOptions: Fig.Option[] = [
  flag(
    "--all-warnings",
    "Prints all warnings, including previous compilations (default is true except on errors)"
  ),
  flag("--no-all-warnings", "Does not print all warnings"),
  force,
  flag("--verbose", "Prints verbose output"),
];

const loadpathsOptions: Fig.Option[] = [
  noArchivesCheck,
  noDepsCheck,
  noElixirVersionCheck,
  noListeners,
  noOptionalDeps,
];

const installOptions: Fig.Option[] = [
  forceInstall,
  {
    name: "--sha512",
    description:
      "Checks that the file matches the given SHA-512 checksum (only for installations via a local path)",
    args: { name: "checksum" },
  },
  flag(
    "--submodules",
    "Fetches repository submodules before building from Git or GitHub"
  ),
  {
    name: "--sparse",
    description:
      "Checks out a single directory inside the Git repository and uses it as the root directory",
    args: { name: "dir" },
  },
  {
    name: "--app",
    description:
      "Specifies a custom app name to be used for building from Git, GitHub or Hex",
    args: { name: "app" },
  },
  {
    name: "--organization",
    description: "Hex organization for private packages",
    args: { name: "organization" },
  },
  {
    name: "--repo",
    description: "Self-hosted Hex repository (defaults to hexpm)",
    args: { name: "repo" },
  },
];

const installArgs: Fig.Arg = {
  name: "source",
  description:
    "Local path or URL, git URL or github user/project (optionally followed by branch, tag or ref NAME), or hex PACKAGE [VERSION]",
  isOptional: true,
  isVariadic: true,
  template: "filepaths",
  suggestions: ["git", "github", "hex"],
};

const xrefSharedOptions: Fig.Option[] = [
  {
    name: "--fail-above",
    description:
      "Generates a failure if the relevant metric is above the given threshold",
    args: { name: "threshold" },
  },
  flag(
    "--include-siblings",
    "Includes dependencies that have :in_umbrella set to true (applies to trace)"
  ),
  noCompile,
  noDepsCheck,
  noArchivesCheck,
  noElixirVersionCheck,
];

const xrefLabelOption = (
  description: string,
  values: string[]
): Fig.Option => ({
  name: "--label",
  description,
  args: { name: "label", suggestions: values },
});

// Built-in Mix tasks (those listed by `mix help`), from the task modules of Elixir
const builtinTasks: Fig.Subcommand[] = [
  {
    name: "app.config",
    description: "Configures all registered apps",
    options: [
      force,
      preloadModules,
      noArchivesCheck,
      flag(
        "--no-app-loading",
        "Does not load the .app resource file after compilation"
      ),
      noCompile,
      noDepsCheck,
      noElixirVersionCheck,
      flag(
        "--no-validate-compile-env",
        "Does not validate the application compile environment"
      ),
    ],
  },
  {
    name: "app.start",
    description: "Starts all registered apps",
    options: [
      force,
      flag("--temporary", "Starts the application as temporary"),
      flag("--permanent", "Starts the application as permanent"),
      preloadModules,
      noArchivesCheck,
      noCompile,
      noDepsCheck,
      noElixirVersionCheck,
      flag(
        "--no-start",
        "Does not actually start applications, only compiles and loads code"
      ),
    ],
  },
  {
    name: "app.tree",
    description: "Prints the application tree",
    args: {
      name: "app",
      description:
        "Application to print the tree of (defaults to the current one)",
      isOptional: true,
    },
    options: [
      {
        name: "--exclude",
        description:
          "Excludes applications from the tree (kernel, stdlib and compiler are always excluded)",
        isRepeatable: true,
        args: { name: "app" },
      },
      {
        name: "--format",
        description: "Output format",
        args: formatArg(["pretty", "plain", "dot"]),
      },
      outputOption("dot format"),
    ],
  },
  {
    name: "archive",
    description: "Lists installed archives",
  },
  {
    name: "archive.build",
    description: "Archives this project into a .ez file",
    options: [
      {
        name: ["-o", "--output"],
        description: "Specifies the output file name",
        args: { name: "file", template: "filepaths" },
      },
      {
        name: ["-i", "--input"],
        description: "Specifies the input directory to archive",
        args: { name: "dir", template: "folders" },
      },
      flag("--no-compile", "Skips compilation"),
      flag(
        "--include-dot-files",
        "Adds dot files from the priv directory to the archive"
      ),
      force,
      noArchivesCheck,
      noDepsCheck,
      noElixirVersionCheck,
    ],
  },
  {
    name: "archive.install",
    description: "Installs an archive locally",
    args: installArgs,
    options: installOptions,
  },
  {
    name: "archive.uninstall",
    description: "Uninstalls archives",
    args: { name: "archive", description: "Name of the archive" },
    options: [forceInstall],
  },
  {
    name: "clean",
    description: "Deletes generated application files",
    options: [
      flag(
        "--deps",
        "Cleans dependencies as well as the current project's files"
      ),
      {
        name: "--only",
        description: "Only cleans the given environment",
        args: envArg,
      },
    ],
  },
  {
    name: "cmd",
    description: "Executes the given command",
    options: [
      {
        name: "--cd",
        description: "The directory to run the command in",
        args: { name: "dir", template: "folders" },
      },
      flag("--shell", "Performs shell expansion of the arguments"),
      {
        name: "--app",
        description:
          "Runs the command in the given umbrella app (use mix do --app instead)",
        deprecated: true,
        isRepeatable: true,
        args: { name: "app" },
      },
    ],
    args: { name: "command", isCommand: true },
  },
  {
    name: "compile",
    description: "Compiles source files",
    options: compileOptions,
  },
  {
    name: "deps",
    description: "Lists dependencies and their status",
    args: depsArg,
    options: [
      flag(
        "--all",
        "Lists all dependencies, regardless of specified environment"
      ),
    ],
  },
  {
    name: "deps.clean",
    description: "Deletes the given dependencies' files",
    args: depsArg,
    options: [
      flag("--unlock", "Also unlocks the deleted dependencies"),
      flag("--build", "Deletes only compiled files (keeps source files)"),
      flag("--all", "Deletes all dependencies"),
      flag(
        "--unused",
        "Deletes only unused dependencies (no longer mentioned in mix.exs)"
      ),
      {
        name: "--only",
        description: "Cleans all dependencies for the chosen environment",
        args: envArg,
      },
    ],
  },
  {
    name: "deps.compile",
    description: "Compiles dependencies",
    args: depsArg,
    options: [
      force,
      flag(
        "--include-children",
        "Also compiles the dependencies of the given dependencies"
      ),
      flag(
        "--skip-umbrella-children",
        "Skips umbrella applications from compiling"
      ),
      flag(
        "--skip-local-deps",
        "Skips non-remote dependencies, such as path deps, from compiling"
      ),
    ],
  },
  {
    name: "deps.get",
    description: "Fetches unavailable and out of date dependencies",
    options: [
      flag(
        "--check-locked",
        "Raises if there are pending changes to the lockfile"
      ),
      flag(
        "--no-archives-check",
        "Does not check archives before fetching deps"
      ),
      onlyOption,
      targetOption,
    ],
  },
  {
    name: "deps.tree",
    description: "Prints the dependency tree",
    args: {
      name: "app",
      description:
        "Application to print the tree of (defaults to the current one)",
      isOptional: true,
    },
    options: [
      {
        name: "--only",
        description: "The environment to show dependencies for",
        args: envArg,
      },
      {
        name: "--target",
        description: "The target to show dependencies for",
        args: { name: "target" },
      },
      {
        name: "--exclude",
        description: "Excludes dependencies from the tree",
        isRepeatable: true,
        args: { name: "dep" },
      },
      flag("--umbrella-only", "Only includes the umbrella applications"),
      {
        name: "--format",
        description: "Output format",
        args: formatArg(["pretty", "plain", "dot"]),
      },
      outputOption("dot format"),
    ],
  },
  {
    name: "deps.unlock",
    description: "Unlocks the given dependencies",
    args: depsArg,
    options: [
      flag("--all", "Unlocks all dependencies"),
      {
        name: "--filter",
        description: "Unlocks only dependencies matching the given name",
        args: { name: "name" },
      },
      flag(
        "--unused",
        "Unlocks only unused dependencies (no longer mentioned in mix.exs)"
      ),
      flag(
        "--check-unused",
        "Checks that the mix.lock file has no unused dependencies"
      ),
    ],
  },
  {
    name: "deps.update",
    description: "Updates the given dependencies",
    args: depsArg,
    options: [
      flag("--all", "Updates all dependencies"),
      onlyOption,
      targetOption,
      flag(
        "--no-archives-check",
        "Does not check archives before fetching deps"
      ),
    ],
  },
  {
    name: "do",
    description: "Executes the tasks separated by plus",
    options: [
      {
        name: "--app",
        description:
          "Limits recursive tasks to the given apps (must come before any of the tasks)",
        isRepeatable: true,
        args: { name: "app" },
      },
    ],
    args: {
      name: "tasks",
      description: "Tasks separated by + (for example compile + test)",
      isVariadic: true,
    },
  },
  {
    name: "escript",
    description: "Lists installed escripts",
  },
  {
    name: "escript.build",
    description: "Builds an escript for the project",
    options: compileOptions,
  },
  {
    name: "escript.install",
    description: "Installs an escript locally",
    args: installArgs,
    options: installOptions,
  },
  {
    name: "escript.uninstall",
    description: "Uninstalls escripts",
    args: { name: "escript", description: "Name of the escript" },
    options: [forceInstall],
  },
  {
    name: "eval",
    description: "Evaluates the given code",
    args: { name: "code", description: "Code to evaluate", isScript: true },
    options: [
      noArchivesCheck,
      noCompile,
      noDepsCheck,
      noElixirVersionCheck,
      noMixExs,
    ],
  },
  {
    name: "format",
    description: "Formats the given files/patterns",
    args: {
      name: "files",
      description:
        "Files, directories or globs to format (- reads from standard input)",
      isOptional: true,
      isVariadic: true,
      template: "filepaths",
      suggestions: ["-"],
    },
    options: [
      flag(
        "--force",
        "Forces formatting to happen on all files, instead of relying on the cache"
      ),
      flag(
        "--check-formatted",
        "Checks that the files are already formatted (does not write to disk)"
      ),
      flag(
        "--no-exit",
        "Does not fail on format errors (only valid with --check-formatted)"
      ),
      flag("--dry-run", "Does not save files after formatting"),
      flag(
        "--no-compile",
        "Does not compile, even if compilation is required to load formatter plugins"
      ),
      flag("--verbose", "Prints the names of files that were formatted"),
      {
        name: "--dot-formatter",
        description:
          "Path to the file with formatter configuration (defaults to .formatter.exs)",
        args: { name: "file", template: "filepaths" },
      },
      {
        name: "--stdin-filename",
        description:
          "Path to the file being formatted on standard input (defaults to stdin.exs)",
        args: { name: "file", template: "filepaths" },
      },
      flag(
        "--migrate",
        "Enables the migrate option, which automatically fixes some deprecation warnings but changes the AST"
      ),
      {
        name: "--check-equivalent",
        description: "Has no effect",
        deprecated: true,
      },
    ],
  },
  {
    name: "loadconfig",
    description: "Loads and persists the given configuration",
    args: {
      name: "file",
      description: "Configuration file to load",
      isOptional: true,
      template: "filepaths",
    },
  },
  {
    name: "local",
    description: "Lists tasks installed locally via archives",
  },
  {
    name: "local.hex",
    description: "Installs Hex locally",
    args: { name: "version", description: "Hex version", isOptional: true },
    options: [
      forceInstall,
      flag(
        "--if-missing",
        "Performs installation only if Hex is not installed yet"
      ),
    ],
  },
  {
    name: "local.rebar",
    description: "Installs Rebar locally",
    args: [
      {
        name: "rebar3",
        description: "Install rebar3 from a local path",
        isOptional: true,
        suggestions: ["rebar3"],
      },
      {
        name: "path",
        description: "Path to rebar3",
        isOptional: true,
        template: "filepaths",
      },
    ],
    options: [
      forceInstall,
      {
        name: "--sha512",
        description:
          "Checks that the Rebar script matches the given SHA-512 checksum",
        args: { name: "checksum" },
      },
      flag("--if-missing", "Performs installation only if not installed yet"),
    ],
  },
  {
    name: "profile.cprof",
    description: "Profiles the given file or expression with cprof",
    args: profileFile,
    options: [
      profileMatching,
      {
        name: "--limit",
        description:
          "Filters out any results with a call count less than the limit",
        args: { name: "count" },
      },
      {
        name: "--module",
        description:
          "Filters out any results not pertaining to the given module",
        args: { name: "module" },
      },
      ...profileCommonOptions,
      noHalt,
    ],
  },
  {
    name: "profile.eprof",
    description: "Profiles the given file or expression with eprof",
    args: profileFile,
    options: [
      profileMatching,
      {
        name: "--calls",
        description:
          "Filters out any results with a call count lower than this",
        args: { name: "count" },
      },
      {
        name: "--time",
        description:
          "Filters out any results that took lower than specified (in µs)",
        args: { name: "microseconds" },
      },
      {
        name: "--sort",
        description: "Sorts the results by time or calls",
        args: { name: "key", default: "time", suggestions: ["time", "calls"] },
      },
      flag("--no-warmup", "Skips the warmup step before profiling"),
      ...profileCommonOptions,
      noHalt,
    ],
  },
  {
    name: "profile.fprof",
    description: "Profiles the given file or expression with fprof",
    args: profileFile,
    options: [
      flag(
        "--callers",
        "Prints detailed information about immediate callers and called functions"
      ),
      flag("--details", "Includes profile data for each profiled process"),
      {
        name: "--sort",
        description: "Sorts the output by the given key",
        args: { name: "key", default: "acc", suggestions: ["acc", "own"] },
      },
      flag(
        "--trace-to-file",
        "Uses a file to trace (can improve performance and memory usage for larger workloads)"
      ),
      ...profileCommonOptions,
      flag("--no-warmup", "Does not execute code once before profiling"),
    ],
  },
  {
    name: "profile.tprof",
    description: "Profiles the given file or expression with tprof",
    args: profileFile,
    options: [
      profileMatching,
      {
        name: "--type",
        description: "The type of profiling",
        args: {
          name: "type",
          default: "time",
          suggestions: ["calls", "time", "memory"],
        },
      },
      {
        name: "--calls",
        description:
          "Filters out any results with a call count lower than this",
        args: { name: "count" },
      },
      {
        name: "--time",
        description:
          "Filters out any results that took lower than specified in µs (the type needs to be time)",
        args: { name: "microseconds" },
      },
      {
        name: "--memory",
        description:
          "Filters out any results that used less memory than specified in words (the type needs to be memory)",
        args: { name: "words" },
      },
      {
        name: "--sort",
        description:
          "Sorts the results by calls, per_call or the value of the type",
        args: {
          name: "key",
          suggestions: ["calls", "per_call", "time", "memory"],
        },
      },
      {
        name: "--report",
        description:
          "Returns the per-process breakdown (process) or the total for all processes (total)",
        args: {
          name: "report",
          default: "process",
          suggestions: ["process", "total"],
        },
      },
      flag("--no-warmup", "Skips the warmup step before profiling"),
      flag("--no-set-on-spawn", "Does not profile spawned processes"),
      ...profileCommonOptions,
      noHalt,
    ],
  },
  {
    name: "release",
    description: "Assembles a self-contained release",
    args: {
      name: "name",
      description:
        "Name of the release (defaults to the project's only release)",
      isOptional: true,
    },
    options: [
      flag(["-f", "--force"], "Forces recompilation"),
      noArchivesCheck,
      noDepsCheck,
      noElixirVersionCheck,
      flag("--no-compile", "Does not compile before assembling the release"),
      flag(
        "--overwrite",
        "Overwrites existing files instead of prompting the user for action"
      ),
      {
        name: "--path",
        description: "The path of the release",
        args: { name: "path", template: "folders" },
      },
      flag("--quiet", "Does not write progress to the standard output"),
      {
        name: "--version",
        description: "The version of the release",
        args: { name: "version" },
      },
    ],
  },
  {
    name: "release.init",
    description: "Generates sample files for releases",
  },
  {
    name: "source",
    description: "Prints source location for modules and functions",
    args: {
      name: "module",
      description: "MODULE or MODULE.FUN",
    },
    options: [
      flag(
        ["-o", "--open"],
        "Opens the source file in your editor instead of printing the location"
      ),
    ],
  },
  {
    name: "test",
    description: "Runs a project's tests",
    args: {
      name: "files",
      description: "Test files or directories, optionally followed by :LINE",
      isOptional: true,
      isVariadic: true,
      template: "filepaths",
    },
    options: [
      flag(
        "--all-warnings",
        "Prints all warnings, including previous compilations (default is true except on errors)"
      ),
      flag("--no-all-warnings", "Does not print all warnings"),
      flag(
        ["-b", "--breakpoints"],
        "Sets a breakpoint at the beginning of every test (automatically sets --trace)"
      ),
      flag("--color", "Enables color in ExUnit formatting results"),
      flag("--no-color", "Disables color in the output"),
      flag("--cover", "Runs the coverage tool"),
      flag(
        "--dry-run",
        "Prints which tests would be run based on current options, without running any tests"
      ),
      {
        name: "--exclude",
        description: "Excludes tests that match the filter",
        isRepeatable: true,
        args: { name: "filter" },
      },
      {
        name: "--exit-status",
        description: "Alternate exit status to use when the test suite fails",
        args: { name: "status", default: "2" },
      },
      {
        name: "--export-coverage",
        description:
          "The name of the file to export coverage results to (requires --cover)",
        args: { name: "name" },
      },
      flag("--failed", "Runs only tests that failed the last time they ran"),
      force,
      {
        name: "--formatter",
        description: "Sets the formatter module that will print the results",
        isRepeatable: true,
        args: { name: "module" },
      },
      {
        name: "--include",
        description: "Includes tests that match the filter",
        isRepeatable: true,
        args: { name: "filter" },
      },
      flag(
        "--listen-on-stdin",
        "Runs tests, and then listens on stdin to re-run tests once a newline is received"
      ),
      {
        name: "--max-cases",
        description: "Sets the maximum number of tests running asynchronously",
        args: { name: "count" },
      },
      {
        name: "--max-failures",
        description:
          "Stops evaluating tests when this number of test failures is reached",
        args: { name: "count" },
      },
      {
        name: "--max-requires",
        description:
          "Sets the maximum number of test files to compile in parallel",
        args: { name: "count" },
      },
      {
        name: ["-n", "--name-pattern"],
        description:
          "Only runs tests with names that match the given regular expression",
        args: { name: "regex" },
      },
      noArchivesCheck,
      noCompile,
      noDepsCheck,
      noElixirVersionCheck,
      noStart,
      {
        name: "--only",
        description: "Runs only tests that match the filter",
        isRepeatable: true,
        args: { name: "filter" },
      },
      {
        name: "--partitions",
        description:
          "Sets the amount of partitions to split tests in (requires MIX_TEST_PARTITION when greater than one)",
        args: { name: "count" },
      },
      preloadModules,
      {
        name: "--profile-require",
        description:
          "Profiles the time spent to require test files (the test suite does not run)",
        args: { name: "mode", suggestions: ["time"] },
      },
      flag(
        "--raise",
        "Immediately raises if the test suite fails, instead of continuing the execution of other Mix tasks"
      ),
      {
        name: "--repeat-until-failure",
        description:
          "Sets the number of repetitions for running the suite until it fails",
        args: { name: "count" },
      },
      {
        name: "--seed",
        description:
          "Seeds the random number generator used to randomize the order of tests (0 disables randomization)",
        args: { name: "seed" },
      },
      {
        name: "--slowest",
        description: "Prints timing information for the N slowest tests",
        args: { name: "count" },
      },
      {
        name: "--slowest-modules",
        description: "Prints timing information for the N slowest modules",
        args: { name: "count" },
      },
      flag(
        "--stale",
        "Runs only tests which reference modules that changed since the last run with --stale"
      ),
      {
        name: "--timeout",
        description: "Sets the timeout for the tests in milliseconds",
        args: { name: "milliseconds" },
      },
      flag(
        "--trace",
        "Runs tests with detailed reporting (automatically sets --max-cases to 1)"
      ),
      flag(
        "--warnings-as-errors",
        "Treats compilation warnings from loading the test suite as errors"
      ),
    ],
  },
  {
    name: "test.coverage",
    description: "Build report from exported test coverage",
  },
  {
    name: "xref",
    description: "Prints cross reference information",
    subcommands: [
      {
        name: "callers",
        description: "Prints the files that call the given module",
        args: { name: "module" },
        options: xrefSharedOptions,
      },
      {
        name: "trace",
        description:
          "Compiles the given file listing all dependencies within the same app",
        args: { name: "file", template: "filepaths" },
        options: [
          ...xrefSharedOptions,
          xrefLabelOption("Only shows traces of the given type", [
            "compile",
            "runtime",
            "export",
          ]),
        ],
      },
      {
        name: "graph",
        description: "Emits a file dependency graph",
        options: [
          ...xrefSharedOptions,
          {
            name: "--exclude",
            description: "Path to exclude",
            isRepeatable: true,
            args: { name: "path", template: "filepaths" },
          },
          xrefLabelOption("Only shows relationships with the given label", [
            "compile-connected",
            "compile",
            "export",
            "runtime",
          ]),
          {
            name: "--group",
            description:
              "Comma-separated paths to consider as a group, so dependencies between them are ignored",
            isRepeatable: true,
            args: { name: "paths" },
          },
          flag(
            "--only-direct",
            "Keeps only files with the direct relationship given by --label"
          ),
          flag("--only-nodes", "Only shows the node names (no edges)"),
          {
            name: "--source",
            description:
              "Displays all files that the given source file references (directly or indirectly)",
            isRepeatable: true,
            args: { name: "file", template: "filepaths" },
          },
          {
            name: "--sink",
            description:
              "Displays all files that reference the given file (directly or indirectly)",
            isRepeatable: true,
            args: { name: "file", template: "filepaths" },
          },
          {
            name: "--min-cycle-size",
            description: "Minimum cycle size on formats like stats and cycles",
            args: { name: "size" },
          },
          {
            name: "--min-cycle-label",
            description:
              "Minimum number of dependencies with the given --label on a cycle",
            args: { name: "count" },
          },
          {
            name: "--format",
            description: "Output format",
            args: formatArg([
              "pretty",
              "plain",
              "stats",
              "cycles",
              "dot",
              "json",
            ]),
          },
          outputOption("dot and json formats"),
        ],
      },
    ],
  },
  // Not listed by `mix help`, but documented compilers and load steps
  {
    name: "compile.app",
    description: "Compiles the application resource (.app) file",
    hidden: true,
    options: [
      force,
      {
        name: "--compile-path",
        description:
          "Where to find .beam files and write the resulting .app file",
        args: { name: "path", template: "folders" },
      },
    ],
  },
  {
    name: "compile.elixir",
    description: "Compiles Elixir source files",
    hidden: true,
    options: [force, ...elixirCompilerOptions],
  },
  {
    name: "compile.erlang",
    description: "Compiles Erlang source files",
    hidden: true,
    options: simpleCompilerOptions,
  },
  {
    name: "compile.leex",
    description: "Compiles Leex source files",
    hidden: true,
    options: simpleCompilerOptions,
  },
  {
    name: "compile.yecc",
    description: "Compiles Yecc source files",
    hidden: true,
    options: simpleCompilerOptions,
  },
  {
    name: "deps.loadpaths",
    description: "Checks, compiles and loads all dependencies",
    hidden: true,
    options: loadpathsOptions,
  },
  {
    name: "loadpaths",
    description: "Verifies and loads code paths",
    hidden: true,
    options: [listeners, ...loadpathsOptions],
  },
];

const builtinTaskNames = new Set([
  "new",
  "run",
  "help",
  ...builtinTasks.map((task) => String(task.name)),
]);

// Mix spec
const completionSpec: Fig.Spec = {
  name: "mix",
  description: "Build tool for Elixir",
  icon: constants.elixir_logo_url,
  subcommands: [
    {
      name: "new",
      description: "Creates a new Elixir project at the given path",
      args: {
        name: "path",
      },
      options: [
        {
          name: "--app",
          description: "Name the OTP application for the project",
          args: {
            name: "app",
          },
        },
        {
          name: "--module",
          description: "Name the modules in the generated code skeleton",
          args: {
            name: "module",
          },
        },
        {
          name: "--sup",
          description:
            "Generate an OTP application skeleton including a supervision tree. Normally an app is generated without a supervisor and without the app callback",
        },
        {
          name: "--umbrella",
          description: "Generate an umbrella project",
        },
      ],
    },
    {
      name: "run",
      description: "Runs the current application",
      args: {
        name: "file",
        generators: preferredScriptFilepaths,
        isOptional: true,
      },
      options: [
        {
          name: ["-c", "--config"],
          description: "Loads the given configuration file",
          deprecated: {
            description: "Import configurations from config files",
          },
          isRepeatable: true,
          args: {
            name: "file",
            template: "filepaths",
          },
        },
        evalOption,
        {
          name: ["-r", "--require"],
          description: "Executes the given pattern/file",
          isRepeatable: true,
          args: {
            name: "file|pattern",
            description: "The file|pattern to execute",
            generators: preferredScriptFilepaths,
          },
        },
        {
          name: "--parallel-require",
          description:
            "Executes the given pattern/file in parallel (use --parallel and --require instead)",
          deprecated: true,
          isRepeatable: true,
          args: {
            name: "file|pattern",
            description: "The file|pattern to execute",
            generators: preferredScriptFilepaths,
          },
        },
        parallelOption,
        listeners,
        noListeners,
        preloadModules,
        noCompile,
        noDepsCheck,
        noArchivesCheck,
        noHalt,
        noMixExs,
        noStart,
        noElixirVersionCheck,
      ],
    },
    {
      name: "help",
      description:
        "Prints help for tasks, aliases, modules and applications (lists all tasks if none is given)",
      args: {
        name: "task",
        isOptional: true,
        description:
          "Task, alias, MODULE, MODULE.FUN, app:APP, c:MODULE.NAME or t:MODULE.NAME",
        generators: {
          cache: { ttl: 10000 },
          script: ["mix", "help"],
          postProcess: parseTasks,
        },
      },
      options: [
        {
          name: "--search",
          description:
            "Prints all tasks and aliases that contain 'pattern' in the name",
          args: {
            name: "pattern",
          },
        },
        {
          name: "--names",
          description: "Prints all task names and aliases",
        },
        {
          name: "--aliases",
          description: "Prints all aliases",
        },
      ],
    },
    ...builtinTasks,
  ],
  args: {
    name: "task",
    description: "Invokes the task (mix run) in a project",
    isOptional: true,
    generators: {
      cache: { ttl: 10000 },
      script: ["mix", "help"],
      // Built-in tasks are subcommands, so only suggest the other ones
      // (aliases, tasks from dependencies and installed archives)
      postProcess: (out) =>
        parseTasks(out).filter((task) => !builtinTaskNames.has(task.name)),
    },
  },

  options: [
    {
      name: ["-h", "--help"],
      description: "Shows usage information",
    },
    {
      name: ["-v", "--version"],
      description: "Shows versioning information",
    },
  ],
};

// Parses the output of `mix help`, which lists one `mix TASK # description` per line
function parseTasks(out: string) {
  return out.split("\n").flatMap((line) => {
    const match = line.match(/^mix ([^\s#]+)\s+# (.*)$/);
    return match ? [{ name: match[1], description: match[2].trim() }] : [];
  });
}

export default completionSpec;
