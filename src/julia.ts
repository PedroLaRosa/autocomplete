// Julia v1.13.4 (latest stable: git tag v1.13.4 + Homebrew formula, checked 2026-11-20). Source: static read of JuliaLang/julia at v1.13.4:
// src/jloptions.c (usage text, opts_hidden, longopts + parser cases), doc/src/manual/command-line-interface.md, doc/man/julia.1,
// doc/src/manual/distributed-computing.md; binary not run. Added --trace-dispatch plus the undocumented hidden flags
// --worker, --bind-to, --rr-detach, --lisp.
import { filepaths } from "@tabsmith/autocomplete-generators";

const yesNo: Fig.Suggestion[] = [{ name: "yes" }, { name: "no" }];

const sizeArg: Fig.Arg = {
  name: "size",
  description: "Bytes, optionally with a unit: B, K, M, G or T",
};

const coverageArg: Fig.Arg = {
  isOptional: true,
  suggestions: [
    { name: "none" },
    { name: "user" },
    { name: "all" },
    {
      name: "@",
      insertValue: "@{cursor}",
      description:
        "Only track files under the given path (current dir if empty)",
    },
  ],
};

const completionSpec: Fig.Spec = {
  name: "julia",
  description: "The Julia Programming Language",
  options: [
    {
      name: ["-v", "--version"],
      description: "Display version information",
    },
    {
      name: ["-h", "--help"],
      description: "Print command-line options",
    },
    {
      name: "--help-hidden",
      description: "Print uncommon options not shown by `-h`",
    },
    // startup options
    {
      name: "--project",
      description: "Set given directory as the active project/environment",
      requiresSeparator: true,
      args: {
        name: "project folder",
        description: "Julia project/environment",
        isOptional: true,
        suggestions: [
          {
            name: "@.",
            priority: 75,
            description:
              "Search through parent directories until a Project.toml or JuliaProject.toml file is found",
          },
          {
            name: "@temp",
            priority: 75,
            description: "Create a temporary environment",
          },
          {
            name: "@script",
            priority: 75,
            description:
              "Search up from the programfile or a path relative to it",
          },
        ],
        generators: {
          template: "folders",
        },
      },
    },
    {
      name: ["-J", "--sysimage"],
      description: "Start up with the given system image file",
      args: {
        name: "system image",
        generators: filepaths({
          extensions: ["dylib", "so", "dll"],
          editFileSuggestions: { priority: 76 },
        }),
      },
    },
    {
      name: ["-H", "--home"],
      description: "Set location of `julia` executable",
      args: {
        template: "folders",
      },
    },
    {
      name: "--startup-file",
      description:
        "Load `JULIA_DEPOT_PATH/config/startup.jl` (default `~/.julia/config/startup.jl`)",
      args: {
        suggestions: yesNo,
      },
    },
    {
      name: "--handle-signals",
      description: "Enable or disable Julia's default signal handlers",
      args: {
        suggestions: yesNo,
      },
    },
    {
      name: "--sysimage-native-code",
      description: "Use native code from system image if available",
      args: {
        suggestions: yesNo,
      },
    },
    {
      name: "--compiled-modules",
      description: "Enable or disable incremental precompilation of modules",
      args: {
        suggestions: [
          ...yesNo,
          {
            name: "existing",
            description:
              "Use existing precompiled modules but create no new ones",
          },
          {
            name: "strict",
            description:
              "Like existing, but error if no precompile file is found",
          },
        ],
      },
    },
    {
      name: "--pkgimages",
      description:
        "Enable or disable usage of native code caching in the form of pkgimages",
      args: {
        suggestions: [
          ...yesNo,
          {
            name: "existing",
            description: "Use existing pkgimages but create no new ones",
          },
        ],
      },
    },
    // actions
    {
      name: ["-e", "--eval"],
      insertValue: "-e '{cursor}'",
      description: "Evaluate given expr",
      args: {
        name: "expr",
      },
    },
    {
      name: ["-E", "--print"],
      insertValue: "-E '{cursor}'",
      description: "Evaluate given expr and display the result",
      args: {
        name: "expr",
      },
    },
    {
      name: ["-m", "--module"],
      description:
        "Run entry point of `Package` (`@main` function) with `args`",
      args: [
        { name: "Package" },
        { name: "args", isOptional: true, isVariadic: true },
      ],
    },
    {
      name: ["-L", "--load"],
      description: "Load given file immediately on all processors",
      args: {
        name: "julia script",
        generators: filepaths({
          extensions: ["jl"],
          editFileSuggestions: { priority: 76 },
        }),
      },
    },
    // parallel options
    {
      name: ["-t", "--threads"],
      description:
        "Enable N[+M] threads; N in the `default` threadpool, M in the `interactive` threadpool",
      args: {
        name: "N[,M]",
        description: "Number of threads",
        suggestions: [{ name: "auto" }, { name: "auto,auto" }],
      },
    },
    {
      name: "--gcthreads",
      description:
        "Use N threads for the GC mark phase and M (0 or 1) for concurrent sweeping",
      args: { name: "N[,M]" },
    },
    {
      name: ["-p", "--procs"],
      description:
        'Integer value N launches N additional local worker processes "auto" launches as many workers as the number of local CPU threads',
      args: {
        description: "Number of additional local worker processes",
        suggestions: [{ name: "auto" }],
      },
    },
    {
      name: "--machine-file",
      description: "Run processes on hosts listed in given file",
      args: {
        template: "filepaths",
      },
    },
    // interactive options
    {
      name: ["-i", "--interactive"],
      description: "Interactive mode; REPL runs and isinteractive() is true",
    },
    {
      name: ["-q", "--quiet"],
      description: "Quiet startup: no banner, suppress REPL warnings",
    },
    {
      name: "--banner",
      description: "Enable or disable startup banner",
      args: {
        suggestions: [...yesNo, { name: "short" }, { name: "auto" }],
      },
    },
    {
      name: "--color",
      description: "Enable or disable color text",
      args: {
        suggestions: [...yesNo, { name: "auto" }],
      },
    },
    {
      name: "--history-file",
      description: "Load or save history",
      args: {
        suggestions: yesNo,
      },
    },
    // error and warning options
    {
      name: "--depwarn",
      description:
        'Enable or disable syntax and method deprecation warnings ("error" turns warnings into errors)',
      args: {
        suggestions: [...yesNo, { name: "error" }],
      },
    },
    {
      name: "--warn-overwrite",
      description: "Enable or disable method overwrite warnings",
      args: {
        suggestions: yesNo,
      },
    },
    {
      name: "--warn-scope",
      description: "Enable or disable warning for ambiguous top-level scope",
      args: {
        suggestions: yesNo,
      },
    },
    // code generation options
    {
      name: ["-C", "--cpu-target"],
      description:
        'Limit usage of CPU features up to <target>; set to "help" to see the available options',
      args: { name: "target", suggestions: [{ name: "help" }] },
    },
    {
      name: ["-O", "--optimize"],
      description:
        "Set the optimization level (default level is 2 if unspecified or 3 if used without a level)",
      args: {
        name: "level",
        description: "Level of optimization",
        isOptional: true,
        suggestions: ["0", "1", "2", "3"],
      },
    },
    {
      name: "--min-optlevel",
      description: "Set a lower bound on the optimization level",
      requiresSeparator: true,
      args: {
        name: "level",
        suggestions: ["0", "1", "2", "3"],
      },
    },
    {
      name: ["-g", "--debug-info"],
      description:
        "Set the level of debug info generation (level 2 if used without a level)",
      args: {
        name: "level",
        description: "Level of debug info generation",
        isOptional: true,
        suggestions: ["0", "1", "2"],
      },
    },
    {
      name: "--inline",
      description:
        "Control whether inlining is permitted, including overriding @inline declarations",
      args: {
        suggestions: yesNo,
      },
    },
    {
      name: "--check-bounds",
      description:
        "Emit bounds checks always, never, or respect @inbounds declarations",
      args: {
        suggestions: [...yesNo, { name: "auto" }],
      },
    },
    {
      name: "--polly",
      description:
        "Enable or disable the polyhedral optimizer Polly (overrides @polly declaration)",
      args: {
        suggestions: yesNo,
      },
    },
    {
      name: "--math-mode",
      description:
        "Always follow `ieee` floating point semantics or respect `@fastmath` declarations",
      args: {
        suggestions: [
          { name: "ieee" },
          { name: "user" },
          { name: "fast", description: "Same as user", deprecated: true },
        ],
      },
    },
    // instrumentation options
    {
      name: "--code-coverage",
      description:
        'Count executions of source lines (omitting setting is equivalent to "user"); also accepts an LCOV tracefile',
      requiresSeparator: true,
      args: coverageArg,
    },
    {
      name: "--track-allocation",
      description:
        'Count bytes allocated by each source line (omitting setting is equivalent to "user")',
      requiresSeparator: true,
      args: coverageArg,
    },
    {
      name: "--bug-report",
      description:
        "Launch a bug report session using BugReporting.jl; see --bug-report=help",
      args: { name: "KIND", suggestions: [{ name: "help" }] },
    },
    {
      name: "--heap-size-hint",
      description:
        "Force garbage collection if memory usage is higher than the given value (also accepts % of physical memory)",
      args: sizeArg,
    },
    // hidden options (--help-hidden): code generation
    {
      name: "--compile",
      description:
        "Enable or disable JIT compiler, or request exhaustive or minimal compilation",
      args: {
        suggestions: [...yesNo, { name: "all" }, { name: "min" }],
      },
    },
    // compiler output options
    {
      name: "--output-o",
      description: "Generate an object file (including system image data)",
      args: { name: "name", template: "filepaths" },
    },
    {
      name: "--output-ji",
      description: "Generate a system image data file (.ji)",
      args: { name: "name", template: "filepaths" },
    },
    {
      name: "--strip-metadata",
      description:
        "Remove docstrings and source location info from system image",
    },
    {
      name: "--strip-ir",
      description:
        "Remove IR (intermediate representation) of compiled functions",
    },
    {
      name: "--compress-sysimage",
      description:
        "Compress the sys/pkgimage heap at the expense of slightly increased load time",
      args: { suggestions: yesNo },
    },
    // compiler debugging and experimental
    {
      name: "--experimental",
      description: "Enable the use of experimental (alpha) features",
    },
    {
      name: "--output-unopt-bc",
      description: "Generate unoptimized LLVM bitcode (.bc)",
      args: { name: "name", template: "filepaths" },
    },
    {
      name: "--output-bc",
      description: "Generate LLVM bitcode (.bc)",
      args: { name: "name", template: "filepaths" },
    },
    {
      name: "--output-asm",
      description: "Generate an assembly file (.s)",
      args: { name: "name", template: "filepaths" },
    },
    {
      name: "--output-incremental",
      description: "Generate an incremental output file (rather than complete)",
      args: {
        suggestions: yesNo,
      },
    },
    {
      name: "--timeout-for-safepoint-straggler",
      description:
        "Dump the backtrace of a thread that fails to reach a safepoint within the given time",
      args: { name: "seconds" },
    },
    {
      name: "--trace-compile",
      description:
        "Print precompile statements for methods compiled during execution to stderr or a file",
      args: {
        name: "stderr|name",
        suggestions: [{ name: "stderr" }],
        template: "filepaths",
      },
    },
    {
      name: "--trace-compile-timing",
      description:
        "If --trace-compile is enabled show how long each took to compile in ms",
      dependsOn: ["--trace-compile"],
    },
    {
      name: "--trace-dispatch",
      description:
        "Print precompile statements for methods dispatched during execution or save to stderr or a path",
      args: {
        name: "stderr|name",
        suggestions: [{ name: "stderr" }],
        template: "filepaths",
      },
    },
    {
      name: "--task-metrics",
      description: "Enable collection of per-task timing data",
      args: { suggestions: yesNo },
    },
    {
      name: "--image-codegen",
      description: "Force generate code in imaging mode",
    },
    {
      name: "--permalloc-pkgimg",
      description: "Copy the data section of package images into memory",
      args: { suggestions: yesNo },
    },
    {
      name: "--trim",
      description:
        "Build a sysimage including only code provably reachable from methods marked by calling `entrypoint`",
      requiresSeparator: true,
      args: {
        isOptional: true,
        suggestions: [
          { name: "no" },
          { name: "safe" },
          { name: "unsafe" },
          { name: "unsafe-warn" },
        ],
      },
    },
    {
      name: "--trace-eval",
      description: "Show the expression being evaluated before eval",
      requiresSeparator: true,
      args: {
        isOptional: true,
        suggestions: [{ name: "loc" }, { name: "full" }, { name: "no" }],
      },
    },
    {
      name: "--hard-heap-limit",
      description: "Abort if the heap ever grows above the given size",
      args: sizeArg,
    },
    {
      name: "--heap-target-increment",
      description:
        "Set an upper bound on how much the heap target can increase between collections",
      args: sizeArg,
    },
    {
      name: "--gc-sweep-always-full",
      description: "Make the GC always do a full sweep of the heap",
    },
    // internal flags that are in longopts but not in the help output
    {
      name: "--worker",
      description:
        "Start as a Distributed worker, optionally with the cluster cookie (read from stdin if omitted)",
      hidden: true,
      requiresSeparator: true,
      args: { name: "cookie", isOptional: true },
    },
    {
      name: "--bind-to",
      description:
        "Address (and optional port) a Distributed worker listens on",
      hidden: true,
      args: { name: "bind_addr[:port]" },
    },
    {
      name: "--rr-detach",
      description: "Detach from the rr recorder if running under rr",
      hidden: true,
    },
    {
      name: "--lisp",
      description: "Start the femtolisp REPL (must be the first argument)",
      hidden: true,
    },
  ],
  args: {
    name: "julia script",
    isScript: true,
    isOptional: true,
    generators: filepaths({
      extensions: ["jl"],
      editFileSuggestions: { priority: 76 },
    }),
  },
};
export default completionSpec;
