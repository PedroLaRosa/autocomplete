// V 0.5.2 (Homebrew formula vlang / GitHub tag 0.5.2 of vlang/v, 2026-11-19). Source: static read of the
// shallow clone at tag 0.5.2: vlib/v/help/**/*.txt (the `v help <topic>` pages), vlib/v/pref/pref.v (the real
// build-flag parser), cmd/v/v.v (command dispatch) and cmd/tools/{vcreate,vpm,vsymlink}. The binary was not run.
// Where the help text and the parser disagree the parser wins (e.g. the `native` and `go` backends and
// `-target-os` are documented but no longer accepted). Only the commands listed by `v help` / `v help other`
// are covered; the remaining internal tools (bump, gret, ls, reduce, repeat, retry, ...) are not.
const FILE_OR_FOLDER: Fig.Arg = {
  name: "file",
  description: "The input file",
  template: "filepaths",
};

const PATHS: Fig.Arg = {
  name: "path",
  description: "Source files or directories",
  template: "filepaths",
  isVariadic: true,
};

const PROGRAM_ARGS: Fig.Arg = {
  name: "arguments",
  description: "Arguments passed to the compiled program",
  isVariadic: true,
  isOptional: true,
};

const PACKAGES: Fig.Arg = {
  name: "package",
  description: "Name of a VPM package or a repository URL",
  isVariadic: true,
  isOptional: true,
};

const POSIX_NONCOMPLIANT = { flagsArePosixNoncompliant: true };

const backends = [
  "c",
  "js",
  "js_node",
  "js_browser",
  "js_freestanding",
  "wasm",
];

const operatingSystems = [
  "linux",
  "windows",
  "macos",
  "freebsd",
  "openbsd",
  "netbsd",
  "dragonfly",
  "solaris",
  "serenity",
  "haiku",
  "qnx",
  "plan9",
  "vinix",
  "ios",
  "android",
  "termux",
  "wasm32",
  "wasm32_wasi",
  "wasm32_emscripten",
  "browser",
  "wasi",
  "cross",
];

const architectures = [
  "amd64",
  "arm64",
  "arm32",
  "rv64",
  "rv32",
  "i386",
  "s390x",
  "loongarch64",
  "ppc64le",
  "ppc64",
  "ppc",
  "sparc64",
];

const gcModes = [
  "boehm",
  "boehm_full",
  "boehm_incr",
  "boehm_full_opt",
  "boehm_incr_opt",
  "boehm_leak",
  "vgc",
  "none",
];

const vpmServerOptions: Fig.Option[] = [
  {
    name: ["-server-url", "--server-url"],
    description: "Use this VPM server for network operations",
    isRepeatable: true,
    args: { name: "url" },
  },
];

const vpmVerbose: Fig.Option = {
  name: ["-v", "--verbose"],
  description: "Print more details about the performed operation",
};

const vpmHelp: Fig.Option = {
  name: ["-h", "--help"],
  description: "Print the help menu",
};

const scaffoldingOptions: Fig.Option[] = [
  {
    name: "--bin",
    description: "Use the template for an executable application [default]",
  },
  {
    name: "--lib",
    description: "Use the template for a library project",
  },
  {
    name: "--web",
    description: "Use the template for a veb project",
  },
  {
    name: ["-h", "--help"],
    description: "Print help information",
  },
];

const buildOptions: Fig.Option[] = [
  {
    name: "-v2",
    description: "Delegate direct compilation to the V2 frontend",
  },
  {
    name: ["-b", "-backend"],
    description: "Specify the backend used for building the executable",
    args: { name: "backend", suggestions: backends },
  },
  {
    name: ["-d", "-define"],
    description: "Define the provided flag, optionally with a value",
    isRepeatable: true,
    args: { name: "flag[=value]" },
  },
  {
    name: ["-g", "-debug"],
    description: "Compile the executable in debug mode",
  },
  {
    name: ["-o", "-output"],
    description:
      "Force V to output the executable in a specific location (a trailing path separator means a directory)",
    args: { name: "output", template: "filepaths" },
  },
  {
    name: ["-obf", "-obfuscate"],
    description: "Turn on obfuscation for the code being built",
  },
  {
    name: "-path",
    description:
      "Order of the paths V looks up when searching for imported dependencies, separated by pipes",
    args: { name: "path" },
  },
  {
    name: "-exclude",
    description:
      "Exclude the .v files whose full paths match the pattern from compilation",
    args: { name: "pattern" },
  },
  {
    name: "-file-list",
    description: "Comma-separated list of files or directories to compile",
    args: { name: "paths" },
  },
  {
    name: "-prod",
    description: "Compile the executable in production mode",
  },
  {
    name: "-no-prod-options",
    description:
      "Do not pass the default optimisation options to the C compiler when used with -prod",
  },
  {
    name: "-no-bounds-checking",
    description: "Do no runtime checking of array access operations",
  },
  {
    name: "-force-bounds-checking",
    description:
      "Always check array access at runtime, even in @[direct_array_access] functions",
  },
  {
    name: ["-disable-explicit-mutability", "--disable-explicit-mutability"],
    description:
      "Allow ordinary variables and mutable call arguments to omit explicit `mut`",
  },
  {
    name: ["-prof", "-profile"],
    description:
      "Compile with all functions profiled and write the results to a file",
    args: {
      name: "file",
      template: "filepaths",
      suggestions: [
        { name: "-", hidden: true, description: "Write to stdout" },
      ],
    },
  },
  {
    name: "-profile-fns",
    description: "Profile only these functions (and the ones they call)",
    args: { name: "functions" },
  },
  {
    name: "-profile-no-inline",
    description: "Skip [inline] functions when profiling",
  },
  {
    name: "-message-limit",
    description:
      "Maximum number of warnings, errors and notices to accumulate (defaults to 200)",
    args: { name: "limit" },
  },
  {
    name: "-no-parallel",
    description: "Do not run the compiler in parallel",
  },
  {
    name: "-skip-running",
    description: "Skip the automatic running of a _test.v or .vsh file",
  },
  {
    name: "-skip-unused",
    description:
      "Skip generating code for functions that are provably not used",
  },
  {
    name: "-no-skip-unused",
    description: "Generate code for all functions, even unused ones",
  },
  {
    name: "-stats",
    description: "Enable more detailed statistics reporting for test files",
  },
  {
    name: "-translated",
    description:
      "Enable features that are discouraged in regular V code but required for translated V code",
  },
  {
    name: "-q",
    description: "Be quieter and hide the otherwise helpful messages",
  },
  {
    name: "-v",
    description:
      "Enable verbosity in the V compiler (shows the version if it is the only argument)",
  },
  {
    name: "-print-v-files",
    description: "Print the list of all parsed .v files, then stop",
  },
  {
    name: "-color",
    description: "Force the use of ANSI colors for errors and warnings",
  },
  {
    name: "-nocolor",
    description: "Disable ANSI colors for errors and warnings",
  },
  {
    name: "-check",
    description:
      "Scan, parse and check the files without compiling the program",
  },
  {
    name: "-check-syntax",
    description: "Only scan and parse the files, then stop",
  },
  {
    name: "-show-timings",
    description: "Print a summary about how long each compiler stage took",
  },
  { name: "-n", description: "Hide all notices" },
  { name: "-N", description: "Treat all notices as errors" },
  { name: "-w", description: "Hide all warnings" },
  {
    name: "-W",
    description: "Treat all warnings as errors, even in development builds",
  },
  {
    name: "-Wfatal-errors",
    description: "Unconditionally exit with code 1 after the first error",
  },
  {
    name: "-Wimpure-v",
    description: "Warn about using C. or JS. symbols in plain .v files",
  },
  {
    name: "-check-return",
    description: "Note all calls that ignore the return value of the function",
  },
  {
    name: "-check-overflow",
    description: "Panic when integer arithmetic overflows at runtime",
  },
  {
    name: "-use-os-system-to-run",
    description:
      "Run the produced executable with os.system() instead of os.new_process",
  },
  // C backend
  {
    name: "-cc",
    description: "Change the C compiler V invokes",
    args: {
      name: "compiler",
      suggestions: ["gcc", "clang", "tcc", "msvc", "mingw-w64"],
    },
  },
  {
    name: "-cflags",
    description: "Pass the provided flag as is to the C compiler",
    isRepeatable: true,
    args: { name: "flag" },
  },
  {
    name: "-ldflags",
    description:
      "Pass the provided flag to the C compiler after every other C option",
    isRepeatable: true,
    args: { name: "flag" },
  },
  {
    name: "-cstrict",
    description: "Turn on additional C warnings",
  },
  {
    name: "-cmain",
    description: "Name of the generated C entry point function",
    args: { name: "MainFunctionName" },
  },
  {
    name: "-subsystem",
    description: "Select the generated main function on Windows",
    args: { name: "subsystem", suggestions: ["auto", "console", "windows"] },
  },
  {
    name: ["-icon", "--icon", "-seticon", "--seticon"],
    description:
      "Embed an .ico or .png file as the icon of the Windows executable",
    args: { name: "path", template: "filepaths" },
  },
  {
    name: "-showcc",
    description: "Print the C command that is used to build the program",
  },
  {
    name: "-generate-c-project",
    description:
      "Generate a C project folder with the C source and build scripts",
    args: { name: "directory", template: "folders" },
  },
  {
    name: "-freestanding",
    description: "Build the executable without dependency on libc",
  },
  {
    name: "-bare-builtin-dir",
    description:
      "Directory with the builtin implementation to use with -freestanding",
    args: { name: "directory", template: "folders" },
  },
  {
    name: "-cross",
    description: "Output cross-platform C code",
  },
  {
    name: "-os",
    description: "Change the target OS that V tries to compile for",
    args: { name: "os", suggestions: operatingSystems },
  },
  {
    name: "-arch",
    description: "Change the target architecture that V tries to compile for",
    args: { name: "arch", suggestions: architectures },
  },
  {
    name: "-m32",
    description: "Generate 32-bit machine code",
  },
  {
    name: "-m64",
    description: "Generate 64-bit machine code",
  },
  {
    name: "-macosx-version-min",
    description: "Pass -mmacosx-version-min to the C compiler (macOS only)",
    args: { name: "version" },
  },
  {
    name: "-sanitize",
    description: "Pass flags related to sanitization to the C compiler",
  },
  {
    name: "-shared",
    description: "Compile a shared object instead of an executable",
  },
  {
    name: "-is_o",
    description: "Compile an .o object file instead of an executable",
  },
  {
    name: "-autofree",
    description: "Free memory used in functions automatically",
  },
  {
    name: "-manualfree",
    description: "Do not free memory used in functions automatically",
  },
  {
    name: "-gc",
    description: "Select the garbage collector mode",
    args: { name: "mode", suggestions: gcModes },
  },
  {
    name: "-printfn",
    description: "Print the content of the generated C function with this name",
    isRepeatable: true,
    args: { name: "fn_name" },
  },
  {
    name: "-compress",
    description: "Compress the compiled executable with UPX",
  },
  {
    name: "-live",
    description: "Build the executable with live capabilities",
  },
  {
    name: "-no-preludes",
    description: "Do not generate a prelude in the generated .c files",
  },
  {
    name: "-custom-prelude",
    description: "Replace the V-generated prelude with a custom one",
    args: { name: "path", template: "filepaths" },
  },
  {
    name: ["-cg", "-cdebug"],
    description: "Like -g, but do not use V source line numbers",
  },
  {
    name: "-keepc",
    description: "Do not remove the temporary .tmp.c and .tmp.c.rsp files",
  },
  {
    name: "-show-c-output",
    description: "Print the output that the C compiler produced",
  },
  {
    name: "-bug-report-url",
    description:
      "Override where automatic C compiler bug reports are submitted",
    args: { name: "url" },
  },
  {
    name: "-dump-c-flags",
    description: "Write all C flags into a file, one flag per line",
    args: {
      name: "file",
      template: "filepaths",
      suggestions: [
        { name: "-", hidden: true, description: "Write to stdout" },
      ],
    },
  },
  {
    name: "-dump-modules",
    description: "Write all module names used by the program into a file",
    args: {
      name: "file",
      template: "filepaths",
      suggestions: [
        { name: "-", hidden: true, description: "Write to stdout" },
      ],
    },
  },
  {
    name: "-dump-files",
    description: "Write all V file paths used by the program into a file",
    args: {
      name: "file",
      template: "filepaths",
      suggestions: [
        { name: "-", hidden: true, description: "Write to stdout" },
      ],
    },
  },
  {
    name: "-dump-defines",
    description: "Write all system and user defines V knows about into a file",
    args: {
      name: "file",
      template: "filepaths",
      suggestions: [
        { name: "-", hidden: true, description: "Write to stdout" },
      ],
    },
  },
  {
    name: "-no-closures",
    description: "Produce a compile time error if V generates a closure",
  },
  {
    name: "-no-rsp",
    description:
      "Pass the C compiler options on the command line, without .rsp files",
  },
  {
    name: "-no-std",
    description: "Do not pass -std=c99 to the C compiler",
  },
  {
    name: "-assert",
    description: "Select what happens after an assertion failure",
    args: {
      name: "mode",
      suggestions: [
        { name: "aborts", description: "Call abort()" },
        { name: "backtraces", description: "Call print_backtrace()" },
        { name: "continues", description: "Print the failure and continue" },
      ],
    },
  },
  {
    name: "-thread-stack-size",
    description: "Set the thread stack size in bytes (use multiples of 4096)",
    args: { name: "bytes" },
  },
  {
    name: "-fast-math",
    description: "Pass -ffast-math (or /fp:fast for msvc) to the C compiler",
  },
  {
    name: "-div-by-zero-is-zero",
    description: "Treat `x / 0` as being equal to `0`",
  },
  // JS backend
  {
    name: "-es5",
    description: "Compile V to ES5 compatible code (JS backend)",
  },
  {
    name: "-sourcemap",
    description: "Create a source map for debugging (JS backend)",
  },
  {
    name: "-sourcemap-inline",
    description:
      "Embed the source map into the JavaScript source file (JS backend)",
  },
  {
    name: "-sourcemap-src-included",
    description:
      "Include the original V sources in the source map (JS backend)",
  },
  // WebAssembly backend
  {
    name: "-wasm-validate",
    description: "Run wasm-validate on the compiled module (wasm backend)",
  },
  {
    name: "-wasm-stack-top",
    description: "Override the default stack_top value (wasm backend)",
    args: { name: "value" },
  },
];

const vpmCommand = (
  name: string,
  description: string,
  extra: Partial<Fig.Subcommand> = {}
): Fig.Subcommand => ({ name, description, ...extra });

const completionSpec: Fig.Spec = {
  name: "v",
  description: "The V Programming Language",
  parserDirectives: POSIX_NONCOMPLIANT,
  subcommands: [
    {
      name: "run",
      description: "Compile and run the program",
      parserDirectives: {
        ...POSIX_NONCOMPLIANT,
        optionsMustPrecedeArguments: true,
      },
      args: [
        {
          ...FILE_OR_FOLDER,
          description: "The input file, directory or `-` for stdin",
        },
        PROGRAM_ARGS,
      ],
    },
    {
      name: "crun",
      description:
        "Compile if executable inexistent or not updated and run the program",
      parserDirectives: {
        ...POSIX_NONCOMPLIANT,
        optionsMustPrecedeArguments: true,
      },
      args: [
        {
          ...FILE_OR_FOLDER,
          description: "The input file, directory or `-` for stdin",
        },
        PROGRAM_ARGS,
      ],
    },
    {
      name: "build",
      description: "Compile the program without running it",
      args: FILE_OR_FOLDER,
    },
    {
      name: "watch",
      description: "Watch the file for changes and recompile",
      args: FILE_OR_FOLDER,
      options: [
        {
          name: ["-s", "--silent"],
          description: "Do not print the watch timestamp before each re-run",
        },
        {
          name: ["-c", "--clear"],
          description: "Clear the terminal before each re-run",
        },
        {
          name: ["-a", "--add"],
          description: "Add more files to be watched (separated by commas)",
          args: { name: "files" },
        },
        {
          name: ["-i", "--ignore"],
          description:
            "Ignore files having these extensions (separated by commas)",
          args: { name: "extensions" },
        },
        {
          name: ["-o", "--only-watch"],
          description:
            "Watch only files matching these glob patterns (separated by commas)",
          args: { name: "patterns" },
        },
        {
          name: "--before",
          description: "A command to execute before each re-run",
          args: { name: "command" },
        },
        {
          name: "--after",
          description: "A command to execute after each re-run",
          args: { name: "command" },
        },
      ],
      subcommands: [
        {
          name: "run",
          description: "Run the program after recompiling",
          args: FILE_OR_FOLDER,
        },
      ],
    },
    // Project Scaffolding Utilities
    {
      name: "new",
      description: "Setup the file structure for a V project (in a sub folder)",
      args: {
        name: "project_name",
        description: "Name of the new project",
        isOptional: true,
      },
      options: scaffoldingOptions,
    },
    {
      name: "init",
      description: "Setup the file structure for an already existing V project",
      options: scaffoldingOptions,
    },
    // Commonly used utilities
    {
      name: "test",
      description: "Run all test files in the provided directory",
      parserDirectives: POSIX_NONCOMPLIANT,
      args: { ...PATHS, description: "Test files or directories" },
      options: [
        {
          name: "-run-only",
          description:
            "Run only the test functions whose names match these glob patterns (separated by commas)",
          args: { name: "pattern" },
        },
        {
          name: "-test-runner",
          description: "Select the test result format or a custom runner file",
          args: {
            name: "runner",
            template: "filepaths",
            suggestions: [
              { name: "simple", description: "Fastest, no processing" },
              { name: "tap", description: "Test Anything Protocol" },
              { name: "normal", description: "Colorful human readable output" },
              { name: "teamcity", description: "Teamcity and JetBrains IDEs" },
            ],
          },
        },
      ],
    },
    {
      name: "fmt",
      description: "Format the V code provided",
      parserDirectives: POSIX_NONCOMPLIANT,
      args: { ...PATHS, isOptional: true },
      options: [
        {
          name: "-c",
          description:
            "Check if a file is already formatted and exit with code 2 if it is not",
        },
        {
          name: "-diff",
          description:
            "Display the differences between the formatted and the original sources",
        },
        {
          name: "-l",
          description: "List files whose formatting differs from vfmt",
        },
        {
          name: "-w",
          description: "Write the result to the source files instead of stdout",
        },
        {
          name: "-backup",
          description:
            "Copy the original file to file.v.bak before overwriting it with -w",
        },
        {
          name: "-debug",
          description:
            "Print the kinds of encountered AST statements and expressions on stderr",
        },
        {
          name: "-verify",
          description: "Make sure the provided files are already formatted",
        },
        {
          name: "-inprocess",
          description: "Do everything in the same process",
        },
        {
          name: "-new_int",
          description:
            "Cast the `int` type to `i32` in @[translated] modules and in definitions of `C.func`",
        },
      ],
    },
    {
      name: "vet",
      description: "Report suspicious code constructs",
      parserDirectives: POSIX_NONCOMPLIANT,
      args: { ...PATHS, isOptional: true },
      options: [
        {
          name: "-W",
          description: "Exit with code 1, even if vet only reported warnings",
        },
        {
          name: ["-w", "-hide-warnings"],
          description: "Do not print warnings to stderr",
        },
        {
          name: ["-v", "-verbose"],
          description: "Enable verbose logging",
        },
        {
          name: "-F",
          description:
            "Report empty and long function declarations (default: more than 300 lines)",
        },
        {
          name: "-I",
          description: "Report potential functions to be inlined",
        },
        {
          name: "-p",
          description:
            "Report private functions with missing documentation too",
        },
        {
          name: "-r",
          description: "Report repeated pieces of code",
        },
      ],
    },
    {
      name: "doc",
      description: "Generate documentation for a V module",
      parserDirectives: POSIX_NONCOMPLIANT,
      args: [
        {
          name: "module",
          description: "Module, directory or file to document",
          template: "filepaths",
          isOptional: true,
        },
        {
          name: "symbol",
          description: "Name of a symbol to document",
          isOptional: true,
        },
      ],
      options: [
        {
          name: "-all",
          description:
            "Include private and public functions, methods, structs, consts and enums",
        },
        {
          name: "-color",
          description: "Force the use of ANSI escape sequences",
        },
        {
          name: "-no-color",
          description: "Force plain text output, without ANSI colors",
        },
        {
          name: "-f",
          description: "Specify the output format",
          args: {
            name: "format",
            suggestions: [
              "none",
              "md",
              "markdown",
              "json",
              "text",
              "ansi",
              "html",
              "htm",
            ],
          },
        },
        {
          name: ["-h", "-help"],
          description: "Print the help text",
        },
        {
          name: "-m",
          description: "Generate docs for the modules listed in the folder",
        },
        {
          name: "-o",
          description:
            "The output file or folder path where to store the docs (`-o stdout` or `-o -` prints them)",
          args: { name: "path", template: "filepaths" },
        },
        {
          name: "-readme",
          description: "Include README.md in the docs if present",
        },
        {
          name: "-v",
          description: "Enable verbose logging",
        },
        {
          name: "-no-timestamp",
          description: "Omit the timestamp in the output file",
        },
        {
          name: "-check-examples",
          description:
            "Check that all example comments are compilable, without running them",
        },
        {
          name: "-unsafe-run-examples",
          description: "Find and run all `// Example: assert 1 + 1 == 2` lines",
        },
        {
          name: "-inline-assets",
          description:
            "Embed the CSS and JS assets into the page (HTML format)",
        },
        {
          name: "-theme-dir",
          description: "The directory for the doc theme template (HTML format)",
          args: { name: "directory", template: "folders" },
        },
        {
          name: "-html-only-contents",
          description:
            "Produce only the main content of the page (HTML format)",
        },
        {
          name: "-html-no-vhash",
          description: "Omit the version hash (HTML format)",
        },
        {
          name: "-html-no-assets",
          description: "Omit the CSS and JS asset tags (HTML format)",
        },
        {
          name: "-html-no-right",
          description: "Omit the right table of contents panel (HTML format)",
        },
        {
          name: "-html-no-toc-urls",
          description: "Omit the toc_links panel (HTML format)",
        },
        {
          name: "-html-no-footer",
          description: "Omit the footer panel (HTML format)",
        },
        {
          name: "-l",
          description:
            "Show the locations of the generated signatures (text and ansi formats)",
        },
        {
          name: "-comments",
          description: "Include comments in the output (text and ansi formats)",
        },
      ],
    },
    {
      name: "vlib-docs",
      description:
        "Generate and open the documentation of all the vlib modules",
    },
    {
      name: "repl",
      description: "Run the REPL",
    },
    {
      name: "where",
      description:
        "Find and print the location of current project declarations",
      parserDirectives: POSIX_NONCOMPLIANT,
      args: [
        {
          name: "symbol_type",
          description: "Type of the symbol to search for",
          suggestions: [
            "fn",
            "method",
            "struct",
            "interface",
            "enum",
            "const",
            "var",
            "regexp",
          ],
        },
        {
          name: "symbol_name",
          description: "Name of the symbol (Struct.method for methods)",
        },
      ],
      options: [
        {
          name: "-mod",
          description: "Search recursively only within the given module",
          args: { name: "mod_name" },
        },
        {
          name: "-dir",
          description: "Search non-recursively within the given folder",
          isRepeatable: true,
          args: { name: "dir_path", template: "folders" },
        },
        {
          name: "-vis",
          description: "Only search symbols with the given visibility",
          args: { name: "visibility", suggestions: ["all", "pub", "pri"] },
        },
        {
          name: "-mut",
          description: "Only search symbols with the given mutability",
          args: { name: "mutability", suggestions: ["any", "yes", "not"] },
        },
        {
          name: "-h",
          description: "Include the header",
        },
        {
          name: "-f",
          description: "Format the output (each match uses 3 lines)",
        },
        {
          name: "-v",
          description: "Both of the above (more verbose)",
        },
      ],
    },
    {
      name: "quest",
      description:
        "Do a small randomly selected task to help make V better, like triaging an issue",
    },
    {
      name: "missdoc",
      description:
        "Print all V functions in .v files under the path that have no documentation comments",
      args: { ...PATHS, name: "path" },
      options: [
        {
          name: ["-h", "--help"],
          description: "Show the help text",
        },
        {
          name: ["-t", "--tags"],
          description: "Also print function tags if any is found",
        },
        {
          name: ["-d", "--deprecated"],
          description: "Include deprecated functions in the output",
        },
        {
          name: ["-p", "--private"],
          description: "Include private functions in the output",
        },
        {
          name: "--js",
          description: "Include JavaScript functions in the output",
        },
        {
          name: ["-n", "--no-line-numbers"],
          description: "Exclude line numbers in the output",
        },
        {
          name: ["-e", "--exclude"],
          description: "Exclude paths matching the string",
          isRepeatable: true,
          args: { name: "string" },
        },
        {
          name: ["-r", "--relative-paths"],
          description: "Use relative paths in the output",
        },
        {
          name: "--verify",
          description:
            "Exit with code 1 if documentation is missing, 0 otherwise",
        },
        {
          name: "--diff",
          description:
            "Exit with code 1 and show the difference between two paths, 0 otherwise",
        },
        {
          name: "--version",
          description: "Output version information and exit",
        },
      ],
    },
    // Installation Management Utilities
    {
      name: "symlink",
      description: "Create a symbolic link for V",
      args: {
        name: "directory",
        description: "Directory where the symlink is created",
        template: "folders",
        isOptional: true,
      },
      options: [
        {
          name: "-githubci",
          description:
            "Add V to the PATH of a GitHub Actions job (deprecated, use `v symlink`)",
          deprecated: true,
        },
      ],
    },
    {
      name: "up",
      description: "Run the V self-updater",
      parserDirectives: POSIX_NONCOMPLIANT,
      options: [
        {
          name: "-v",
          description: "Print more details about the update",
        },
        {
          name: "-prod",
          description: "Compile the updated V with the -prod flag",
        },
      ],
    },
    {
      name: "self",
      description: "Run the V self-compiler",
      parserDirectives: POSIX_NONCOMPLIANT,
      options: [
        {
          name: "-prod",
          description: "Compile V for production (optimize compilation)",
        },
      ],
    },
    {
      name: "version",
      description: "Print the version text and exit",
    },
    // Package Management Utilities
    vpmCommand("install", "Install a module from VPM", {
      parserDirectives: POSIX_NONCOMPLIANT,
      args: PACKAGES,
      options: [
        {
          name: "--vpm",
          description: "Install from VPM [default]",
        },
        {
          name: "--git",
          description: "Install from a git repository URL",
        },
        {
          name: "--hg",
          description: "Install from a mercurial repository URL",
        },
        {
          name: "--once",
          description:
            "Only install the package if it was not previously installed",
        },
        {
          name: ["-m", "--mirror"],
          description:
            "Add a fallback VPM mirror for package metadata and download count requests",
          isRepeatable: true,
          args: { name: "url" },
        },
        vpmHelp,
        vpmVerbose,
        ...vpmServerOptions,
      ],
    }),
    vpmCommand("link", "Symlink the current project into VMODULES", {
      options: [vpmHelp],
    }),
    vpmCommand("remove", "Remove a module that was installed from VPM", {
      parserDirectives: POSIX_NONCOMPLIANT,
      args: PACKAGES,
      options: [vpmVerbose, ...vpmServerOptions],
    }),
    vpmCommand("search", "Search for a module from VPM", {
      parserDirectives: POSIX_NONCOMPLIANT,
      args: {
        name: "keyword",
        description: "Keyword to search for",
        isVariadic: true,
      },
      options: [vpmVerbose, ...vpmServerOptions],
    }),
    vpmCommand(
      "unlink",
      "Remove the symlink for the current project from VMODULES",
      { options: [vpmHelp] }
    ),
    vpmCommand("update", "Update an installed module from VPM", {
      parserDirectives: POSIX_NONCOMPLIANT,
      args: PACKAGES,
      options: [vpmVerbose, ...vpmServerOptions],
    }),
    vpmCommand("upgrade", "Upgrade all the outdated modules", {
      options: [vpmVerbose],
    }),
    vpmCommand("list", "List all installed modules"),
    vpmCommand("outdated", "List installed modules that need updates"),
    vpmCommand("show", "Display information about a module on VPM", {
      args: {
        name: "module",
        description: "Name of a VPM module",
        isVariadic: true,
        isOptional: true,
      },
    }),
    // Less frequently used commands (`v help other`)
    {
      name: "ast",
      description:
        "Generate a JSON representation of the AST for a given .v file",
      args: FILE_OR_FOLDER,
      options: [
        {
          name: ["-w", "--watch"],
          description:
            "Watch the .v file for changes and rewrite the .json file when one is detected",
        },
        {
          name: ["-p", "--print"],
          description: "Print the AST to stdout",
        },
        {
          name: ["-c", "--compile"],
          description:
            "Watch the .v file for changes and also generate a .c file",
        },
        {
          name: ["-t", "--terse"],
          description: "Terse output, only with the tree node names",
        },
        {
          name: ["-s", "--skip-defaults"],
          description: "Skip properties that have default values",
        },
        {
          name: "--hide",
          description: "Hide the specified fields (separated by commas)",
          args: { name: "fields" },
        },
        {
          name: ["-h", "--help"],
          description: "Display the help and exit",
        },
        {
          name: "--version",
          description: "Output version information and exit",
        },
      ],
    },
    {
      name: "bug",
      description:
        "Post an issue on the V issue tracker, including the failing program and diagnostic information",
      args: FILE_OR_FOLDER,
      options: [
        {
          name: "-v",
          description: "Enable verbosity while gathering information",
        },
        {
          name: "-y",
          description:
            "Force the submission of the issue, even if an error occurred",
        },
      ],
    },
    {
      name: "bug-report",
      description:
        "Run the local receiver for automatic C compiler bug reports",
    },
    {
      name: "bin2v",
      description:
        "Convert a binary file to a V source file that can be embedded in a module or program",
      args: { name: "file", template: "filepaths", isVariadic: true },
      options: [
        {
          name: ["-h", "--help"],
          description: "Show the help screen",
        },
        {
          name: ["-m", "--module"],
          description: "Name of the generated module",
          args: { name: "string" },
        },
        {
          name: ["-p", "--prefix"],
          description: "A prefix put before each resource name",
          args: { name: "string" },
        },
        {
          name: ["-w", "--write"],
          description: "Write directly to a file with the given name",
          args: { name: "string", template: "filepaths" },
        },
      ],
    },
    {
      name: "build-examples",
      description: "Test if all examples can be built",
    },
    {
      name: "build-tools",
      description: "Test if all tools can be built",
    },
    {
      name: "build-vbinaries",
      description: "Test if V can be built with different configurations",
    },
    {
      name: "check-md",
      parserDirectives: POSIX_NONCOMPLIANT,
      description:
        "Check that V examples in markdown files are formatted and can compile",
      args: { ...PATHS, name: "markdown_file" },
      options: [
        {
          name: "-silent",
          description: "Do not show a progress bar",
        },
        {
          name: ["-w", "-hide-warnings"],
          description: "Do not print warnings, only errors",
        },
      ],
    },
    {
      name: "doctor",
      description:
        "Display useful info about your system to help reporting bugs",
    },
    {
      name: "setup-freetype",
      description: "Setup thirdparty freetype on Windows",
    },
    {
      name: "share",
      description: "Send your code to the V Playground",
      args: FILE_OR_FOLDER,
    },
    {
      name: "translate",
      description: "Translate C code to V",
      args: FILE_OR_FOLDER,
    },
    {
      name: "tracev",
      description: "Produce a tracing version of the V compiler",
      args: FILE_OR_FOLDER,
    },
    {
      name: "test-all",
      description: "Run most of the checks that the CI does, locally",
    },
    {
      name: "test-fmt",
      description:
        "Test if all files in the current directory are formatted properly",
    },
    {
      name: "test-parser",
      description:
        "Test that the V parser works with the given files, as if they were typed one character at a time",
      args: { ...PATHS, name: "file" },
    },
    {
      name: "test-self",
      description:
        "Test if V is working properly by running all tests, including the compiler ones",
    },
    {
      name: "wipe-cache",
      description: "Remove the V cache folder",
    },
    // help command
    {
      name: "help",
      description: "Display help for V",
      args: {
        generators: {
          script: ["v", "help", "topics"],
          postProcess: (out) => {
            // Output: `Known help topics: ['ast', 'bin2v', ...]` (older V releases printed a plain comma list)
            const topics = out
              .replace("Known help topics:", "")
              .match(/[\w-]+/g);
            return (topics ?? [])
              .filter((topic) => topic != "other")
              .map((topic) => ({
                priority: 0,
                name: topic,
                description: `Display help for: "${topic}"`,
              }));
          },
        },
      },
      subcommands: [
        {
          name: "other",
          description: "Display help for less frequently used commands",
        },
        {
          name: "topics",
          description: "Display a list of all known help topics",
        },
      ],
    },
  ],
  options: [
    {
      name: ["-h", "-help", "--help"],
      description: "Show help for V",
    },
    {
      name: ["-V", "-version", "--version"],
      description: "Show V installed version",
    },
    ...buildOptions,
  ],
  args: {
    name: "file",
    description: "The file to compile",
    template: "filepaths",
  },
};
export default completionSpec;
