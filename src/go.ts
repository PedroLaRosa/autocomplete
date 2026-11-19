// Go v1.26.2 (installed `go version`, brew, 2026-11-19). Source: `go help`,
// `go help <command>` for every command and mod/work subcommand, `go help
// testflag`, flag sets in $GOROOT/src/cmd/go/internal

const buildModeSuggestions: Fig.Suggestion[] = [
  {
    name: "archive",
    description: "Build the listed non-main packages into .a files",
  },
  {
    name: "c-archive",
    description:
      "Build the listed main package, plus all packages it imports, into a C archive file",
  },
  {
    name: "c-shared",
    description:
      "Build the listed main package, plus all packages it imports, into a C shared library",
  },
  {
    name: "default",
    description:
      "Listed main packages are built into executables and listed non-main packages are built into .a files",
  },
  {
    name: "shared",
    description:
      "Combine all the listed non-main packages into a single shared library that will be used when building with the -linkshared option",
  },
  {
    name: "exe",
    description:
      "Build the listed main packages and everything they import into executables",
  },
  {
    name: "pie",
    description:
      "Build the listed main packages and everything they import into position independent executables (PIE)",
  },
  {
    name: "plugin",
    description:
      "Build the listed main packages, plus all packages that they import, into a Go plugin",
  },
];

const chdirOption: Fig.Option = {
  name: "-C",
  description:
    "Change to dir before running the command; must be the first flag",
  args: {
    name: "dir",
    template: "folders",
  },
};

const coverModeSuggestions: Fig.Suggestion[] = [
  { name: "set", description: "Bool: does this statement run?" },
  {
    name: "count",
    description: "Int: how many times does this statement run?",
  },
  {
    name: "atomic",
    description: "Int: count, but correct in multithreaded tests",
  },
];

const resolutionAndExecutionOptions: Fig.Option[] = [
  chdirOption,
  {
    name: "-n",
    description: "Print the commands but do not run them",
  },
  {
    name: "-v",
    description: "Print the names of packages as they are compiled",
  },
  {
    name: "-x",
    description: "Print the commands",
  },
  {
    name: "-tags",
    description:
      "A comma-separated list of additional build tags to consider satisfied during the build",
    args: {
      name: "tags",
    },
  },
  {
    name: "-toolexec",
    insertValue: "-toolexec '{cursor}'",
    description:
      "A program to use to invoke toolchain programs like vet and asm",
    args: {
      name: "cmd",
    },
  },
];

const globalOptions: Fig.Option[] = [
  ...resolutionAndExecutionOptions,
  {
    name: "-a",
    description: "Force rebuilding of packages that are already up-to-date",
  },
  {
    name: "-p",
    description:
      "The number of programs, such as build commands or test binaries, that can be run in parallel",
    args: {
      name: "programs",
    },
  },
  {
    name: "-race",
    description: `Enable data race detection.
Supported only on darwin/amd64, darwin/arm64, freebsd/amd64, linux/amd64,
linux/arm64 (only for 48-bit VMA), linux/ppc64le, linux/riscv64 and windows/amd64`,
  },
  {
    name: "-msan",
    description: `Enable interoperation with memory sanitizer.
Supported only on linux/amd64, linux/arm64, linux/loong64, freebsd/amd64
and only with Clang/LLVM as the host C compiler`,
  },
  {
    name: "-asan",
    description: `Enable interoperation with address sanitizer.
Supported only on linux/arm64, linux/amd64, linux/loong64`,
  },
  {
    name: "-cover",
    description: "Enable code coverage instrumentation",
  },
  {
    name: "-covermode",
    description: "Set the mode for coverage analysis; sets -cover",
    args: {
      name: "mode",
      suggestions: coverModeSuggestions,
    },
  },
  {
    name: "-coverpkg",
    description:
      "Apply coverage analysis to packages matching the comma-separated patterns; sets -cover",
    args: {
      name: "patterns",
    },
  },
  {
    name: "-work",
    description: `Print the name of the temporary work directory and
do not delete it when exiting`,
  },
  {
    name: "-asmflags",
    insertValue: "-asmflags='{cursor}'",
    description: "Arguments to pass on each go tool asm invocation",
    args: {
      name: "flag",
      isVariadic: true,
    },
  },
  {
    name: "-buildmode",
    description: "Build mode to use. See 'go help buildmode' for more",
    args: {
      name: "mode",
      suggestions: buildModeSuggestions,
    },
  },
  {
    name: "-buildvcs",
    description: "Whether to stamp binaries with version control information",
    requiresSeparator: true,
    args: {
      name: "mode",
      isOptional: true,
      suggestions: ["true", "false", "auto"],
    },
  },
  {
    name: "-compiler",
    description:
      "Name of compiler to use, as in runtime.Compiler (gccgo or gc)",
    args: {
      name: "name",
    },
  },
  {
    name: "-gccgoflags",
    insertValue: "-gccgoflags='{cursor}'",
    description: "Arguments to pass on each gccgo compiler/linker invocation",
    args: {
      name: "flag",
      isVariadic: true,
    },
  },
  {
    name: "-gcflags",
    insertValue: "-gcflags='{cursor}'",
    description: "Arguments to pass on each go tool compile invocation",
    args: {
      name: "flag",
      isVariadic: true,
    },
  },
  {
    name: "-installsuffix",
    description:
      "A suffix to use in the name of the package installation directory",
    args: {
      name: "suffix",
    },
  },
  {
    name: "-ldflags",
    insertValue: "-ldflags='{cursor}'",
    description: "Arguments to pass on each go tool link invocation",
    args: {
      name: "flag",
      isVariadic: true,
    },
  },
  {
    name: "-linkshared",
    description:
      "Build code that will be linked against shared libraries previously created with -buildmode=shared",
  },
  {
    name: "-mod",
    description: "Module download mode to use: readonly, vendor, or mod",
    args: {
      name: "mode",
      suggestions: [
        {
          name: "readonly",
        },
        {
          name: "vendor",
        },
        {
          name: "mod",
        },
      ],
    },
  },
  {
    name: "-modcacherw",
    description:
      "Leave newly-created directories in the module cache read-write",
  },
  {
    name: "-modfile",
    description:
      "In module aware mode, read (and possibly write) an alternate go.mod file instead of the one in the module root directory",
    args: {
      name: "file",
    },
  },
  {
    name: "-overlay",
    description:
      "Read a JSON config file that provides an overlay for build operations",
    args: {
      name: "file",
    },
  },
  {
    name: "-pgo",
    description: "Profile file for profile-guided optimization (PGO)",
    args: {
      name: "file",
      template: "filepaths",
      suggestions: [
        { name: "auto", description: "Use default.pgo in the main package" },
        { name: "off", description: "Turn off PGO" },
      ],
    },
  },
  {
    name: "-pkgdir",
    description:
      "Install and load all packages from dir instead of the usual locations",
    args: {
      name: "dir",
    },
  },
  {
    name: "-trimpath",
    description: "Remove all file system paths from the resulting executable",
  },
];

const packagesArg: Fig.Arg = {
  name: "packages",
  isVariadic: true,
  isOptional: true,
  template: ["filepaths"],
};

const jsonBuildOption: Fig.Option = {
  name: "-json",
  description: "Emit build output in JSON suitable for automated processing",
};

// `go mod edit` / `go work edit` flags of the form -name=arg, repeatable and applied in order
const modEditRepeatable = (
  flags: [name: string, arg: string, description: string][]
): Fig.Option[] =>
  flags.map(([name, arg, description]) => ({
    name: `-${name}`,
    requiresSeparator: true,
    isRepeatable: true,
    description,
    args: { name: arg },
  }));

const vendorOptions: Fig.Option[] = [
  {
    name: "-e",
    description:
      "Attempt to proceed despite errors encountered while loading packages",
  },
  {
    name: "-v",
    description:
      "Print the names of vendored modules and packages to standard error",
  },
  {
    name: "-o",
    description: "Create the vendor directory at the given path",
    args: {
      name: "outdir",
      template: "folders",
    },
  },
];

const profileFile = (name: string): Fig.Arg => ({
  name,
  template: "filepaths",
});

// `go help testflag`; -cover, -covermode and -coverpkg come from the build flags
const testFlags: Fig.Option[] = (
  [
    [
      "-artifacts",
      "Save test artifacts in the directory specified by -outputdir",
    ],
    [
      "-bench",
      "Run only those benchmarks matching a regular expression",
      { name: "regexp" },
    ],
    [
      "-benchtime",
      "Run enough iterations of each benchmark to take t (or Nx)",
      { name: "t" },
    ],
    [
      "-count",
      "Run each test, benchmark, and fuzz seed n times",
      { name: "n" },
    ],
    [
      "-cpu",
      "List of GOMAXPROCS values to run the tests with",
      { name: "1,2,4" },
    ],
    ["-failfast", "Do not start new tests after the first test failure"],
    ["-fullpath", "Show full file names in the error messages"],
    [
      "-fuzz",
      "Run the fuzz test matching the regular expression",
      { name: "regexp" },
    ],
    ["-fuzztime", "Run the fuzz target for duration t (or Nx)", { name: "t" }],
    [
      "-fuzzminimizetime",
      "Duration t (or Nx) of each fuzz minimization attempt",
      { name: "t" },
    ],
    [
      "-list",
      "List tests, benchmarks, fuzz tests, or examples matching the regular expression",
      { name: "regexp" },
    ],
    [
      "-outputdir",
      "Place profiling output and test artifacts in this directory",
      { name: "directory", template: "folders" },
    ],
    [
      "-parallel",
      "Maximum number of tests calling t.Parallel to run simultaneously",
      { name: "n" },
    ],
    [
      "-run",
      "Run only those tests, examples, and fuzz tests matching the regular expression",
      { name: "regexp" },
    ],
    ["-short", "Tell long-running tests to shorten their run time"],
    [
      "-shuffle",
      "Randomize the execution order of tests and benchmarks",
      { name: "off,on,N", suggestions: ["off", "on"] },
    ],
    [
      "-skip",
      "Skip tests, examples, fuzz tests, and benchmarks matching the regular expression",
      { name: "regexp" },
    ],
    [
      "-timeout",
      "Panic if a test binary runs longer than duration d (0 disables)",
      { name: "d" },
    ],
    ["-v", "Verbose output: log all tests as they are run"],
    [
      "-vet",
      "Comma-separated list of vet checks to run during go test, or off",
      { name: "list", suggestions: ["off"] },
    ],
    ["-benchmem", "Print memory allocation statistics for benchmarks"],
    [
      "-blockprofile",
      "Write a goroutine blocking profile to the file",
      profileFile("block.out"),
    ],
    [
      "-blockprofilerate",
      "Goroutine blocking profile rate passed to runtime.SetBlockProfileRate",
      { name: "n" },
    ],
    [
      "-coverprofile",
      "Write a coverage profile to the file after all tests have passed",
      profileFile("cover.out"),
    ],
    [
      "-cpuprofile",
      "Write a CPU profile to the file before exiting",
      profileFile("cpu.out"),
    ],
    [
      "-memprofile",
      "Write an allocation profile to the file after all tests have passed",
      profileFile("mem.out"),
    ],
    [
      "-memprofilerate",
      "Set runtime.MemProfileRate for allocation profiles",
      { name: "n" },
    ],
    [
      "-mutexprofile",
      "Write a mutex contention profile to the file",
      profileFile("mutex.out"),
    ],
    [
      "-mutexprofilefraction",
      "Sample 1 in n stack traces of goroutines holding a contended mutex",
      { name: "n" },
    ],
    [
      "-trace",
      "Write an execution trace to the file before exiting",
      profileFile("trace.out"),
    ],
  ] as [string, string, Fig.Arg?][]
).map(([name, description, args]) => ({
  name,
  description,
  ...(args && { args }),
}));

const diffOption: Fig.Option = {
  name: "-diff",
  description:
    "Instead of applying each fix, print the patch as a unified diff",
};

const completionSpec: Fig.Spec = {
  name: "go",
  description: "Go is a tool for managing Go source code",
  parserDirectives: {
    flagsArePosixNoncompliant: true,
  },
  subcommands: [
    {
      name: "bug",
      description: "Start a bug report",
    },
    {
      name: "build",
      description: "Compile packages and dependencies",
      options: [
        ...globalOptions,
        jsonBuildOption,
        {
          name: "-o",
          description:
            "Write the resulting executable or object to the named output file or directory",
          args: {
            template: ["filepaths", "folders"],
          },
        },
      ],
      args: packagesArg,
    },
    {
      name: "clean",
      description: "Remove object files and cached files",
      options: [
        ...globalOptions,
        {
          name: "-i",
          description: "Remove the corresponding installed archive or binary",
        },
        {
          name: "-r",
          description:
            "Apply recursively to all the dependencies of the packages named by the import paths",
        },
        {
          name: "-cache",
          description: "Remove the entire go build cache",
        },
        {
          name: "-testcache",
          description: "Expire all test results in the go build cache",
        },
        {
          name: "-modcache",
          description:
            "Remove the entire module download cache, including unpacked source code of versioned dependencies",
        },
        {
          name: "-fuzzcache",
          description:
            "Remove files stored in the Go build cache for fuzz testing",
        },
      ],
      args: packagesArg,
    },
    {
      name: "doc",
      description: "Show documentation for package or symbol",
      options: [
        {
          name: "-all",
          description: "Show all the documentation for the package",
        },
        {
          name: "-c",
          description: "Respect case when matching symbols",
        },
        {
          name: "-cmd",
          description:
            "Treat a command (package main) like a regular package. Otherwise package main's exported symbols are hidden when showing the package's top-level documentation",
        },
        {
          name: "-http",
          description: "Serve HTML docs over HTTP",
        },
        {
          name: "-short",
          description: "One-line representation for each symbol",
        },
        {
          name: "-src",
          description: "Show the full source code for the symbol",
        },
        {
          name: "-u",
          description:
            "Show documentation for unexported as well as exported symbols, methods, and fields",
        },
      ],
      args: {
        name: "package",
      },
    },
    {
      name: "env",
      description: "Print Go environment information",
      options: [
        {
          name: "-json",
          description:
            "Prints the environment in JSON format instead of as a shell script",
        },
        {
          name: "-changed",
          description:
            "Print only settings whose effective value differs from the default",
        },
        {
          name: "-u",
          description:
            "Unset the default setting for the named environment variables",
          args: {
            isVariadic: true,
          },
        },
        {
          name: "-w",
          description:
            "Change the default settings of the named environment variables to the given values",
          args: {
            isVariadic: true,
          },
        },
      ],
    },
    {
      name: "fix",
      description: "Apply fixes suggested by static checkers",
      options: [
        ...resolutionAndExecutionOptions,
        diffOption,
        {
          name: "-fixtool",
          requiresSeparator: true,
          description:
            "Select a different analysis tool with alternative or additional fixers",
          args: {
            name: "prog",
            template: "filepaths",
          },
        },
      ],
      args: packagesArg,
    },
    {
      name: "fmt",
      description: "Gofmt (reformat) package sources",
      options: [
        {
          name: "-n",
          description: "Print the commands that would be executed",
        },
        {
          name: "-x",
          description: "Print the commands as they are executed",
        },
        {
          name: "-mod",
          description: "Which module download mode to use",
          args: {
            name: "mode",
            suggestions: [
              {
                name: "readonly",
              },
              {
                name: "vendor",
              },
            ],
          },
        },
      ],
      args: packagesArg,
    },
    {
      name: "generate",
      description: "Generate Go files by processing source",
      options: [
        ...globalOptions,
        {
          name: "-run",
          insertValue: '-run "{cursor}"',
          description:
            "Specifies a regular expression to select directives whose full original source text matches the expression",
        },
        {
          name: "-skip",
          insertValue: '-skip "{cursor}"',
          description:
            "Specifies a regular expression to suppress directives whose full original source text matches the expression",
        },
      ],
    },
    {
      name: "get",
      description: "Add dependencies to current module and install them",
      options: [
        ...globalOptions,
        {
          name: "-t",
          description:
            "Modules needed to build tests of packages specified on the command line",
        },
        {
          name: "-u",
          description: "Update to newer minor or patch releases when available",
          requiresSeparator: true,
          args: {
            isOptional: true,
            suggestions: [
              {
                name: "patch",
                description: "Update to newer patch releases",
              },
            ],
          },
        },
        {
          name: "-tool",
          description:
            "Add a tool line to go.mod for each listed package (removes it with @none)",
        },
        {
          name: "-d",
          description: "No-op; get no longer builds or installs packages",
          deprecated: true,
        },
      ],
      args: {
        name: "url",
        isOptional: true,
      },
    },
    {
      name: "install",
      description: "Compile and install packages and dependencies",
      options: [...globalOptions, jsonBuildOption],
      args: {
        name: "packages",
        isVariadic: true,
      },
    },
    {
      name: "list",
      description: "List packages or modules",
      options: [
        ...globalOptions,
        {
          name: "-compiled",
          description: "Set CompiledGoFiles to the Go source files",
        },
        {
          name: "-deps",
          description:
            "Iterate over not just the named packages but also all their dependencies",
        },
        {
          name: "-f",
          insertValue: "-f '{cursor}'",
          description: "Specify an alternate format for the list",
          args: {
            name: "format",
          },
        },
        {
          name: "-e",
          description:
            "Processes the erroneous packages with the usual printing",
        },
        {
          name: "-export",
          description:
            "Set the Export field to the name of a file containing up-to-date export information for the given package",
        },
        {
          name: "-find",
          description:
            "Identify the named packages but not resolve their dependencies",
        },
        {
          name: "-test",
          description: "Report test binaries",
        },
        {
          name: "-m",
          description: "List modules instead of packages",
        },
        {
          name: "-u",
          description: "Add information about available upgrades",
        },
        {
          name: "-versions",
          description:
            "Set the Module's Versions field to a list of all known versions of that module",
        },
        {
          name: "-retracted",
          description: "Report information about retracted module versions",
        },
        {
          name: "-json",
          description:
            "Print package data in JSON, optionally only the given comma-separated fields",
          requiresSeparator: true,
          args: {
            name: "fields",
            isOptional: true,
          },
        },
        {
          name: "-reuse",
          requiresSeparator: true,
          description:
            "With -m, reuse the JSON output of a previous 'go list -m -json' to avoid redownloading",
          args: {
            name: "old.json",
            template: "filepaths",
          },
        },
      ],
      args: {
        isOptional: true,
      },
    },
    {
      name: "mod",
      description: "Module maintenance",
      subcommands: [
        {
          name: "download",
          description: "Download the named modules into the module cache",
          options: [
            {
              name: "-json",
              description:
                "Print a sequence of JSON objects to standard output, describing each downloaded module (or failure)",
            },
            {
              name: "-x",
              description:
                "Print the commands download executes to standard error",
            },
            {
              name: "-reuse",
              requiresSeparator: true,
              description:
                "Reuse the JSON output of a previous 'go mod download -json' to avoid redownloading",
              args: {
                name: "old.json",
                template: "filepaths",
              },
            },
          ],
          args: {
            name: "modules",
            isVariadic: true,
          },
        },
        {
          name: "edit",
          description: "Edit and format go.mod files",
          options: [
            ...resolutionAndExecutionOptions.filter((o) =>
              ["-C", "-n", "-x"].includes(o.name as string)
            ),
            {
              name: "-module",
              requiresSeparator: true,
              description: "Change the module's path",
              args: {
                name: "path",
              },
            },
            {
              name: "-go",
              requiresSeparator: true,
              description: "Set the expected Go language version",
              args: {
                name: "version",
              },
            },
            {
              name: "-toolchain",
              requiresSeparator: true,
              description: "Set the Go toolchain to use",
              args: {
                name: "version",
              },
            },
            ...modEditRepeatable([
              [
                "godebug",
                "key=value",
                "Add a godebug line, replacing any with the same key",
              ],
              [
                "dropgodebug",
                "key",
                "Drop any godebug lines with the given key",
              ],
              [
                "require",
                "path@version",
                "Add a requirement on the given module",
              ],
              ["droprequire", "path", "Drop a requirement on the given module"],
              [
                "exclude",
                "path@version",
                "Add an exclusion on the given module",
              ],
              [
                "dropexclude",
                "path@version",
                "Drop an exclusion on the given module",
              ],
              [
                "replace",
                "old[@v]=new[@v]",
                "Add a replacement of the given module path and version pair",
              ],
              [
                "dropreplace",
                "old[@v]",
                "Drop a replacement of the given module path and version pair",
              ],
              ["retract", "version", "Add a retraction for the given version"],
              [
                "dropretract",
                "version",
                "Drop a retraction for the given version",
              ],
              ["tool", "path", "Add a tool declaration for the given path"],
              [
                "droptool",
                "path",
                "Drop a tool declaration for the given path",
              ],
              [
                "ignore",
                "path",
                "Add an ignore declaration for the given path",
              ],
              [
                "dropignore",
                "path",
                "Drop an ignore declaration for the given path",
              ],
            ]),
            {
              name: "-fmt",
              description:
                "Format the go.mod file without making other changes",
            },
            {
              name: "-print",
              description:
                "Print the final go.mod in its text format instead of writing it back to disk",
            },
            {
              name: "-json",
              description:
                "Print the final go.mod in JSON format instead of writing it back to disk in text format",
            },
          ],
          args: {
            name: "go.mod",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "graph",
          description: "Print the module requirement graph",
          options: [
            {
              name: "-go",
              requiresSeparator: true,
              description:
                "Report the module graph as loaded by the given Go version",
              args: {
                name: "version",
              },
            },
            {
              name: "-x",
              description: "Print the commands graph executes",
            },
          ],
        },
        {
          name: "init",
          description:
            "Initialize and write a new go.mod file in the current directory",
          args: {
            name: "module path",
            isOptional: true,
          },
        },
        {
          name: "tidy",
          description:
            "Ensure that the go.mod file matches the source code in the module",
          options: [
            {
              name: "-e",
              description:
                "Attempt to proceed despite errors encountered while loading packages",
            },
            {
              name: "-v",
              description: "Print information about removed modules",
            },
            {
              name: "-x",
              description: "Print the commands download executes",
            },
            {
              name: "-diff",
              description:
                "Print the necessary changes as a unified diff instead of modifying go.mod or go.sum",
            },
            {
              name: "-go",
              requiresSeparator: true,
              description:
                "Update the 'go' directive in go.mod to this version",
              args: {
                name: "version",
              },
            },
            {
              name: "-compat",
              requiresSeparator: true,
              description:
                "Preserve checksums needed by this Go release to load the module graph",
              args: {
                name: "version",
              },
            },
          ],
        },
        {
          name: "vendor",
          description:
            "Construct a directory named vendor in the main module's root directory",
          options: vendorOptions,
        },
        {
          name: "verify",
          description:
            "Check that dependencies of the main module stored in the module cache have not been modified since they were downloaded",
        },
        {
          name: "why",
          description:
            "Show a shortest path in the import graph from the main module to each of the listed packages",
          options: [
            {
              name: "-m",
              description: "Treat its arguments as a list of modules",
            },
            {
              name: "-vendor",
              description:
                "Ignore imports in tests of packages outside the main module",
            },
          ],
          args: {
            name: "packages",
            isVariadic: true,
          },
        },
      ],
    },
    {
      name: "work",
      description: "Workspace maintenance",
      subcommands: [
        {
          name: "edit",
          description: "Edit go.work from tools or scripts",
          options: [
            {
              name: "-fmt",
              description:
                "The -fmt flag reformats the go.work file without making other changes. This reformatting is also implied by any other modifications that use or rewrite the go.mod file. The only time this flag is needed is if no other flags are specified, as in 'go work edit -fmt'",
            },
            {
              name: "-use",
              requiresSeparator: true,
              isRepeatable: true,
              description:
                "The -use=path and -dropuse=path flags add and drop a use directive from the go.work file's set of module directories",
              args: {
                name: "path",
              },
            },
            {
              name: "-dropuse",
              requiresSeparator: true,
              isRepeatable: true,
              description:
                "The -use=path and -dropuse=path flags add and drop a use directive from the go.work file's set of module directories",
              args: {
                name: "path",
              },
            },
            {
              name: "-replace",
              requiresSeparator: true,
              isRepeatable: true,
              description:
                "The -replace=old[@v]=new[@v] flag adds a replacement of the given module path and version pair. If the @v in old@v is omitted, a replacement without a version on the left side is added, which applies to all versions of the old module path. If the @v in new@v is omitted, the new path should be a local module root directory, not a module path. Note that -replace overrides any redundant replacements for old[@v], so omitting @v will drop existing replacements for specific versions",
              args: {
                name: "old[@v]=new[@v]",
              },
            },
            {
              name: "-dropreplace",
              requiresSeparator: true,
              isRepeatable: true,
              description:
                "The -dropreplace=old[@v] flag drops a replacement of the given module path and version pair. If the @v is omitted, a replacement without a version on the left side is dropped",
              args: {
                name: "old[@v]",
              },
            },
            {
              name: "-go",
              requiresSeparator: true,
              description: "Set the expected Go language version",
              args: {
                name: "version",
              },
            },
            {
              name: "-toolchain",
              requiresSeparator: true,
              description: "Set the Go toolchain to use",
              args: {
                name: "name",
              },
            },
            {
              name: "-godebug",
              requiresSeparator: true,
              description:
                "Add a godebug line, replacing any with the same key",
              args: {
                name: "key=value",
              },
            },
            {
              name: "-dropgodebug",
              requiresSeparator: true,
              description: "Drop any godebug lines with the given key",
              args: {
                name: "key",
              },
            },
            {
              name: "-print",
              description:
                "The -print flag prints the final go.work in its text format instead of writing it back to go.mod",
            },
            {
              name: "-json",
              description:
                "The -json flag prints the final go.work file in JSON format instead of writing it back to go.mod",
            },
          ],
        },
        {
          name: "init",
          description: "Initialize workspace file",
          args: {
            name: "moddirs",
            isVariadic: true,
          },
        },
        {
          name: "sync",
          description: "Sync workspace build list to modules",
        },
        {
          name: "use",
          description: "Add modules to workspace file",
          options: [
            {
              name: "-r",
              description:
                "The -r flag searches recursively for modules in the argument directories, and the use command operates as if each of the directories were specified as arguments: namely, use directives will be added for directories that exist, and removed for directories that do not exist",
            },
          ],
          args: {
            name: "moddirs",
            isVariadic: true,
          },
        },
        {
          name: "vendor",
          description: "Make vendored copy of dependencies",
          options: vendorOptions,
        },
      ],
    },
    {
      name: "run",
      description: "Compile and run Go program",
      options: [
        ...globalOptions,
        jsonBuildOption,
        {
          name: "-exec",
          description: "Invoke the binary using xprog",
          args: {},
        },
      ],
      args: {
        name: "package",
        isScript: true,
      },
    },
    {
      name: "telemetry",
      description: "Manage telemetry data and settings",
      args: {
        name: "mode",
        isOptional: true,
        suggestions: [
          {
            name: "off",
            description: "Neither collect nor upload local counter data",
          },
          {
            name: "local",
            description: "Collect counter data locally but do not upload it",
          },
          {
            name: "on",
            description: "Collect counter data and upload it periodically",
          },
        ],
      },
    },
    {
      name: "test",
      description: "Test packages",
      options: [
        // -v means verbose test output here, see testFlags
        ...globalOptions.filter((o) => o.name !== "-v"),
        {
          name: "-args",
          description:
            "Pass the remainder of the command line to the test binary",
          args: {
            isVariadic: true,
          },
        },
        {
          name: "-c",
          description: "Compile the test binary to pkg.test but do not run it",
        },
        {
          name: "-exec",
          description: "Invoke the binary using xprog",
          args: {},
        },
        {
          name: "-json",
          description:
            "Convert test output and build output to JSON suitable for automated processing",
        },
        {
          name: "-o",
          description: "Compile the test binary to the named file",
          args: {
            name: "file",
            template: "filepaths",
          },
        },
        ...testFlags,
      ],
      args: packagesArg,
    },
    {
      name: "tool",
      description: "Run specified go tool",
      options: [
        {
          name: "-n",
          description:
            "Print the command that would be executed but not execute it",
        },
        chdirOption,
        ...globalOptions.filter((o) =>
          ["-modfile", "-overlay", "-modcacherw"].includes(o.name as string)
        ),
      ],
      args: {
        name: "tool",
        generators: {
          script: ["go", "tool"],
          splitOn: "\n",
        },
      },
    },
    {
      name: "version",
      description: "Print Go version",
      options: [
        {
          name: "-m",
          description:
            "Print each executable's embedded module version information",
        },
        {
          name: "-v",
          description: "Report unrecognized files",
        },
        {
          name: "-json",
          description:
            "Like -m, but print the runtime/debug.BuildInfo in JSON format",
          dependsOn: ["-m"],
        },
      ],
      args: {
        name: "file",
        isOptional: true,
      },
    },
    {
      name: "vet",
      description: "Report likely mistakes in packages",
      options: [
        ...resolutionAndExecutionOptions,
        {
          name: "-vettool",
          requiresSeparator: true,
          description:
            "Select a different analysis tool with alternative or additional checks",
          args: {
            name: "tool",
          },
        },
        {
          name: "-c",
          description:
            "Display offending line with this many lines of context (default -1)",
          args: {
            name: "int",
          },
        },
        {
          name: "-json",
          description: "Emit JSON output",
        },
        {
          name: "-fix",
          description:
            "Instead of printing each diagnostic, apply its first fix (if any)",
        },
        diffOption,
      ],
      args: {
        name: "package",
        isOptional: true,
      },
    },
  ],
};

export default completionSpec;
