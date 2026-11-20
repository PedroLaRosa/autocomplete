// mypy v2.4.1 (PyPI latest, 2026-11-20). Source: python/mypy tag v2.4.1 read statically: mypy/main.py (define_options),
// mypy/defaults.py, mypy/options.py, mypy/errorcodes.py and docs/source/command_line.rst. The sandbox refused to run
// mypy, so `mypy --help` itself was not executed. Hidden (help-suppressed) flags are listed only where the source
// comments say what they do.

// Error codes registered in mypy/errorcodes.py (`--enable-error-code` / `--disable-error-code`)
const errorCodes = [
  "abstract",
  "annotation-unchecked",
  "arg-type",
  "assert-type",
  "assignment",
  "attr-defined",
  "await-not-async",
  "call-arg",
  "call-overload",
  "comparison-overlap",
  "deprecated",
  "dict-item",
  "empty-body",
  "exhaustive-match",
  "exit-return",
  "explicit-any",
  "explicit-override",
  "func-returns-value",
  "has-type",
  "ignore-without-code",
  "import",
  "import-not-found",
  "import-untyped",
  "index",
  "list-item",
  "literal-required",
  "maybe-unrecognized-str-typeform",
  "metaclass",
  "method-assign",
  "misc",
  "mutable-override",
  "name-defined",
  "name-match",
  "narrowed-type-not-subtype",
  "no-any-return",
  "no-any-unimported",
  "no-overload-impl",
  "no-redef",
  "no-untyped-call",
  "no-untyped-def",
  "nonetype-type",
  "operator",
  "override",
  "overload-cannot-match",
  "overload-overlap",
  "possibly-undefined",
  "prop-decorator",
  "redundant-cast",
  "redundant-expr",
  "redundant-self",
  "return",
  "return-value",
  "safe-super",
  "str-bytes-safe",
  "str-format",
  "str-unpack",
  "syntax",
  "top-level-await",
  "truthy-bool",
  "truthy-function",
  "truthy-iterable",
  "type-abstract",
  "type-arg",
  "type-var",
  "typeddict-item",
  "typeddict-readonly-mutated",
  "typeddict-unknown-key",
  "unimported-reveal",
  "union-attr",
  "unreachable",
  "unused-awaitable",
  "unused-coroutine",
  "unused-ignore",
  "untyped-decorator",
  "used-before-def",
  "valid-newtype",
  "valid-type",
  "var-annotated",
];

// Most boolean flags also accept an inverse (`--no-x`, `--x`, `--allow-x` / `--disallow-x`, `--show-x` / `--hide-x`)
const toggle = (
  name: string,
  inverse: string,
  description: string
): Fig.Option[] => [
  { name, description },
  { name: inverse, description: `Inverse of ${name}` },
];

const moduleArg: Fig.Arg = { name: "MODULE" };

const report = (type: string, description: string): Fig.Option => ({
  name: `--${type}-report`,
  description,
  args: { name: "DIR", template: "folders" },
});

const completionSpec: Fig.Spec = {
  name: "mypy",
  description: "Mypy is a static type checker for Python",
  options: [
    // Optional arguments
    {
      name: ["-h", "--help"],
      description: "Show this help message and exit",
    },
    {
      name: ["-v", "--verbose"],
      description: "More verbose messages",
      isRepeatable: true,
    },
    {
      name: ["-V", "--version"],
      description: "Show program's version number and exit",
    },
    {
      name: ["-O", "--output"],
      description: "Set a custom output format",
      args: { name: "FORMAT", suggestions: ["json"] },
    },

    // Running code
    {
      name: ["-m", "--module"],
      description: "Type-check module; can repeat for more modules",
      isRepeatable: true,
      args: { name: "MODULE" },
    },
    {
      name: ["-p", "--package"],
      description: "Type-check package recursively; can be repeated",
      isRepeatable: true,
      args: { name: "PACKAGE" },
    },
    {
      name: ["-c", "--command"],
      description: "Type-check program passed in as string",
      isRepeatable: true,
      args: { name: "PROGRAM_TEXT" },
    },
    {
      name: "--exclude",
      description:
        "Regular expression to match file names, directory names or paths which mypy should ignore while recursively discovering files to check",
      isRepeatable: true,
      args: { name: "PATTERN" },
    },
    ...toggle(
      "--exclude-gitignore",
      "--no-exclude-gitignore",
      "Use .gitignore file(s) to exclude files from checking (in addition to any explicit --exclude if present)"
    ),
    ...toggle(
      "--explicit-package-bases",
      "--no-explicit-package-bases",
      "Use current directory and MYPYPATH to determine module names of files passed"
    ),
    ...toggle(
      "--fast-module-lookup",
      "--no-fast-module-lookup",
      "Enable the experimental fast path for resolving imports when many folders share a top-level namespace"
    ),

    // Config file
    {
      name: "--config-file",
      description:
        "Configuration file, must have a [mypy] section (defaults to mypy.ini, .mypy.ini, pyproject.toml, setup.cfg)",
      args: { name: "CONFIG_FILE", template: "filepaths" },
    },
    ...toggle(
      "--warn-unused-configs",
      "--no-warn-unused-configs",
      "Warn about unused '[mypy-<pattern>]' or '[[tool.mypy.overrides]]' config sections"
    ),

    // Import discovery
    ...toggle(
      "--no-namespace-packages",
      "--namespace-packages",
      "Disable support for namespace packages (PEP 420, __init__.py-less)"
    ),
    {
      name: "--ignore-missing-imports",
      description: "Silently ignore imports of missing modules",
    },
    {
      name: "--follow-untyped-imports",
      description: "Typecheck modules without stubs or py.typed marker",
    },
    {
      name: "--follow-imports",
      description: "How to treat imports",
      args: {
        name: "MODE",
        default: "normal",
        suggestions: [
          { name: "normal", description: "Follow and type check all modules" },
          "silent",
          "skip",
          "error",
        ],
      },
    },
    {
      name: "--python-executable",
      description:
        "Python executable used for finding PEP 561 compliant installed packages and stubs",
      args: { name: "EXECUTABLE", template: "filepaths" },
    },
    {
      name: "--no-site-packages",
      description: "Do not search for installed PEP 561 compliant packages",
    },
    {
      name: "--no-silence-site-packages",
      description:
        "Do not silence errors in PEP 561 compliant installed packages",
    },

    // Platform configuration
    {
      name: "--python-version",
      description: "Type check code assuming it will be running on Python x.y",
      args: {
        name: "x.y",
        suggestions: ["3.10", "3.11", "3.12", "3.13", "3.14", "3.15"],
      },
    },
    {
      name: "--platform",
      description:
        "Type check special-cased code for the given OS platform (defaults to sys.platform)",
      args: { name: "PLATFORM", suggestions: ["linux", "darwin", "win32"] },
    },
    {
      name: "--always-true",
      description:
        "Additional variable to be considered True (may be repeated)",
      isRepeatable: true,
      args: { name: "NAME" },
    },
    {
      name: "--always-false",
      description:
        "Additional variable to be considered False (may be repeated)",
      isRepeatable: true,
      args: { name: "NAME" },
    },

    // Disallow dynamic typing
    {
      name: "--disallow-any-expr",
      description: "Disallow all expressions that have type Any",
    },
    {
      name: "--disallow-any-decorated",
      description:
        "Disallow functions that have Any in their signature after decorator transformation",
    },
    {
      name: "--disallow-any-explicit",
      description: "Disallow explicit Any in type positions",
    },
    ...toggle(
      "--disallow-any-generics",
      "--allow-any-generics",
      "Disallow usage of generic types that do not specify explicit type parameters"
    ),
    ...toggle(
      "--disallow-any-unimported",
      "--allow-any-unimported",
      "Disallow Any types resulting from unfollowed imports"
    ),
    ...toggle(
      "--disallow-subclassing-any",
      "--allow-subclassing-any",
      "Disallow subclassing values of type 'Any' when defining classes"
    ),

    // Untyped definitions and calls
    ...toggle(
      "--disallow-untyped-calls",
      "--allow-untyped-calls",
      "Disallow calling functions without type annotations from functions with type annotations"
    ),
    {
      name: "--untyped-calls-exclude",
      description:
        "Disable --disallow-untyped-calls for functions/methods coming from specific package, module, or class",
      isRepeatable: true,
      args: moduleArg,
    },
    ...toggle(
      "--disallow-untyped-defs",
      "--allow-untyped-defs",
      "Disallow defining functions without type annotations or with incomplete type annotations"
    ),
    ...toggle(
      "--disallow-incomplete-defs",
      "--allow-incomplete-defs",
      "Disallow defining functions with incomplete type annotations (while still allowing entirely unannotated definitions)"
    ),
    ...toggle(
      "--check-untyped-defs",
      "--no-check-untyped-defs",
      "Type check the interior of functions without type annotations"
    ),
    ...toggle(
      "--disallow-untyped-decorators",
      "--allow-untyped-decorators",
      "Disallow decorating typed functions with untyped decorators"
    ),

    // None and Optional handling
    ...toggle(
      "--implicit-optional",
      "--no-implicit-optional",
      "Assume arguments with default values of None are Optional"
    ),
    ...toggle(
      "--no-strict-optional",
      "--strict-optional",
      "Disable strict Optional checks"
    ),

    // Configuring warnings
    ...toggle(
      "--warn-redundant-casts",
      "--no-warn-redundant-casts",
      "Warn about casting an expression to its inferred type"
    ),
    ...toggle(
      "--warn-unused-ignores",
      "--no-warn-unused-ignores",
      "Warn about unneeded '# type: ignore' comments"
    ),
    ...toggle(
      "--no-warn-no-return",
      "--warn-no-return",
      "Do not warn about functions that end without returning"
    ),
    ...toggle(
      "--warn-return-any",
      "--no-warn-return-any",
      "Warn about returning values of type Any from non-Any typed functions"
    ),
    ...toggle(
      "--warn-unreachable",
      "--no-warn-unreachable",
      "Warn about statements or expressions inferred to be unreachable"
    ),
    ...toggle(
      "--report-deprecated-as-note",
      "--no-report-deprecated-as-note",
      "Report importing or using deprecated features as notes instead of errors"
    ),
    {
      name: "--deprecated-calls-exclude",
      description:
        "Disable deprecated warnings for functions/methods coming from specific package, module, or class",
      isRepeatable: true,
      args: moduleArg,
    },

    // Miscellaneous strictness flags
    ...toggle(
      "--allow-untyped-globals",
      "--disallow-untyped-globals",
      "Suppress toplevel errors caused by missing annotations"
    ),
    ...toggle(
      "--allow-redefinition",
      "--disallow-redefinition",
      "Allow flexible variable redefinition with a new type"
    ),
    ...toggle(
      "--allow-redefinition-old",
      "--disallow-redefinition-old",
      "Allow restricted, unconditional variable redefinition with a new type"
    ),
    {
      name: "--allow-redefinition-new",
      description: "Deprecated alias for --allow-redefinition",
      deprecated: true,
    },
    {
      name: "--disallow-redefinition-new",
      description: "Inverse of --allow-redefinition-new",
      deprecated: true,
    },
    ...toggle(
      "--no-implicit-reexport",
      "--implicit-reexport",
      "Treat imports as private unless aliased"
    ),
    ...toggle(
      "--strict-equality",
      "--no-strict-equality",
      "Prohibit equality, identity, and container checks for non-overlapping types (except `None`)"
    ),
    ...toggle(
      "--strict-equality-for-none",
      "--no-strict-equality-for-none",
      "Extend --strict-equality for `None` checks"
    ),
    ...toggle(
      "--no-strict-bytes",
      "--strict-bytes",
      "Treat bytearray and memoryview as subtypes of bytes"
    ),
    ...toggle(
      "--extra-checks",
      "--no-extra-checks",
      "Enable additional checks that are technically correct but may be impractical in real code"
    ),
    {
      name: "--strict",
      description:
        "Strict mode; enables a defined subset of optional error-checking flags (see mypy --help for the list)",
    },
    {
      name: "--strict-concatenate",
      description: "Deprecated, use --extra-checks instead",
      deprecated: true,
    },
    {
      name: "--disable-error-code",
      description: "Disable a specific error code",
      isRepeatable: true,
      args: { name: "NAME", suggestions: errorCodes },
    },
    {
      name: "--enable-error-code",
      description: "Enable a specific error code",
      isRepeatable: true,
      args: { name: "NAME", suggestions: errorCodes },
    },
    ...toggle(
      "--no-local-partial-types",
      "--local-partial-types",
      "Disable local partial types to enable legacy type inference mode for containers"
    ),

    // Configuring error messages
    ...toggle(
      "--show-error-context",
      "--hide-error-context",
      'Precede errors with "note:" messages explaining context'
    ),
    ...toggle(
      "--show-column-numbers",
      "--hide-column-numbers",
      "Show column numbers in error messages"
    ),
    ...toggle(
      "--show-error-end",
      "--hide-error-end",
      "Show end line/end column numbers in error messages (implies --show-column-numbers)"
    ),
    ...toggle(
      "--hide-error-codes",
      "--show-error-codes",
      "Hide error codes in error messages"
    ),
    ...toggle(
      "--show-error-code-links",
      "--hide-error-code-links",
      "Show links to error code documentation"
    ),
    ...toggle(
      "--pretty",
      "--no-pretty",
      "Use visually nicer output in error messages: use soft word wrap, show source code snippets, and show error location markers"
    ),
    ...toggle(
      "--no-color-output",
      "--color-output",
      "Do not colorize error messages"
    ),
    ...toggle(
      "--no-error-summary",
      "--error-summary",
      "Do not show error stats summary"
    ),
    ...toggle(
      "--show-absolute-path",
      "--hide-absolute-path",
      "Show absolute paths to files"
    ),
    {
      name: "--soft-error-limit",
      description:
        "Limit after which mypy will (sometimes) disable reporting most additional errors (negative means no limit)",
      args: { name: "N", default: "-1" },
    },

    // Incremental mode
    {
      name: ["-i", "--incremental"],
      description: "Enable the module cache (default)",
      hidden: true,
    },
    {
      name: "--no-incremental",
      description: "Disable module cache (inverse: --incremental)",
    },
    {
      name: "--cache-dir",
      description:
        "Store module cache info in the given folder in incremental mode (defaults to '.mypy_cache')",
      args: { name: "DIR", template: "folders" },
    },
    {
      name: "--sqlite-cache",
      description: "Use a SQLite database to store the cache (default)",
    },
    {
      name: "--no-sqlite-cache",
      description:
        "Write cache data to individual files instead of a SQLite database",
    },
    {
      name: "--cache-fine-grained",
      description:
        "Include fine-grained dependency information in the cache for the mypy daemon",
    },
    ...toggle(
      "--no-fixed-format-cache",
      "--fixed-format-cache",
      "Do not use new fixed format cache"
    ),
    {
      name: "--skip-version-check",
      description: "Allow using cache written by older mypy version",
    },
    {
      name: "--skip-cache-mtime-checks",
      description: "Skip cache internal consistency checks based on mtime",
    },

    // Advanced options
    {
      name: "--pdb",
      description: "Invoke pdb on fatal error",
    },
    {
      name: ["--show-traceback", "--tb"],
      description: "Show traceback on fatal error",
    },
    {
      name: "--raise-exceptions",
      description: "Raise exception on fatal error",
    },
    {
      name: "--custom-typing-module",
      description: "Use a custom typing module",
      args: { name: "MODULE" },
    },
    {
      name: "--enable-incomplete-feature",
      description:
        "Enable support of incomplete/experimental features for early preview",
      isRepeatable: true,
      args: {
        name: "FEATURE",
        suggestions: [
          {
            name: "PreciseTupleTypes",
            description: "Infer more precise tuple types in various scenarios",
          },
          {
            name: "InlineTypedDict",
            description: "Support inline TypedDict type syntax",
          },
        ],
      },
    },
    {
      name: "--custom-typeshed-dir",
      description: "Use the custom typeshed in DIR",
      args: { name: "DIR", template: "folders" },
    },
    ...toggle(
      "--warn-incomplete-stub",
      "--no-warn-incomplete-stub",
      "Warn if missing type annotation in typeshed, only relevant with --disallow-untyped-defs or --disallow-incomplete-defs enabled"
    ),
    {
      name: "--shadow-file",
      description:
        "When encountering SOURCE_FILE, read and type check the contents of SHADOW_FILE instead",
      isRepeatable: true,
      args: [
        { name: "SOURCE_FILE", template: "filepaths" },
        { name: "SHADOW_FILE", template: "filepaths" },
      ],
    },
    {
      name: ["-n", "--num-workers"],
      description: "Number of separate mypy worker processes, or 'auto'",
      args: { name: "VALUE", default: "0", suggestions: ["auto"] },
    },
    ...toggle(
      "--no-native-parser",
      "--native-parser",
      "Do not use faster parser that parses directly to mypy AST"
    ),

    // Report generation
    report(
      "any-exprs",
      "Generate a text file report documenting how many expressions of type Any are present within your codebase"
    ),
    report(
      "cobertura-xml",
      "Generate a Cobertura XML type checking coverage report"
    ),
    report("html", "Generate an HTML type checking coverage report"),
    report(
      "linecount",
      "Generate a text file report documenting the functions and lines that are typed and untyped"
    ),
    report(
      "linecoverage",
      "Generate a JSON file that maps each source file's absolute filename to a list of line numbers that belong to typed functions"
    ),
    report(
      "lineprecision",
      "Generate a flat text file report with per-module statistics of how many lines are typechecked"
    ),
    report("txt", "Generate a text file type checking coverage report"),
    report("xml", "Generate an XML type checking coverage report"),
    report("xslt-html", "Generate an HTML type checking coverage report"),
    report("xslt-txt", "Generate a text file type checking coverage report"),

    // Miscellaneous
    {
      name: "--junit-xml",
      description:
        "Write a JUnit XML test result document with type checking results to the given file",
      args: { name: "JUNIT_XML_OUTPUT_FILE", template: "filepaths" },
    },
    {
      name: "--junit-format",
      description: "Format of the JUnit XML document (used with --junit-xml)",
      args: {
        name: "FORMAT",
        default: "global",
        suggestions: [
          { name: "global", description: "Single test with all errors" },
          {
            name: "per_file",
            description: "One test entry per file with failures",
          },
        ],
      },
    },
    {
      name: "--find-occurrences",
      description: "Print out all usages of a class member (experimental)",
      args: { name: "CLASS.MEMBER" },
    },
    {
      name: "--scripts-are-modules",
      description: "Script x becomes module x instead of __main__",
    },
    ...toggle(
      "--install-types",
      "--no-install-types",
      "Install detected missing library stub packages using pip"
    ),
    ...toggle(
      "--non-interactive",
      "--interactive",
      "Install stubs without asking for confirmation and hide errors, with --install-types"
    ),

    // Hidden flags (help suppressed in define_options; descriptions from the source comments)
    {
      name: "--bazel",
      description: "Change some behaviors for use with Bazel",
      hidden: true,
    },
    {
      name: "--package-root",
      description:
        "Treat directories below ROOT as packages even without __init__.py (may be repeated)",
      isRepeatable: true,
      hidden: true,
      args: { name: "ROOT", template: "folders" },
    },
    {
      name: "--cache-map",
      description:
        "Map source files to cache files, given as triples of source file, cache meta file and cache data file",
      hidden: true,
      args: { name: "FILE", isVariadic: true, template: "filepaths" },
    },
    {
      name: "--timing-stats",
      description:
        "Dump timing stats for each processed file into the given output file",
      hidden: true,
      args: { name: "FILE", template: "filepaths" },
    },
    {
      name: "--line-checking-stats",
      description:
        "Dump per line type checking timing stats for each processed file into the given output file",
      hidden: true,
      args: { name: "FILE", template: "filepaths" },
    },
    {
      name: "--debug-cache",
      description:
        "Disable cache-related compressions and optimizations and write pretty-printed JSON cache files",
      hidden: true,
    },
    {
      name: "--debug-serialize",
      description: "Run tree.serialize() even if cache generation is disabled",
      hidden: true,
    },
    {
      name: "--dump-deps",
      description: "Dump all fine-grained dependencies to stdout",
      hidden: true,
    },
    {
      name: "--dump-graph",
      description: "Dump the contents of the graph of SCCs and exit",
      hidden: true,
    },
    {
      name: "--semantic-analysis-only",
      description: "Run semantic analysis only",
      hidden: true,
    },
    {
      name: "--logical-deps",
      description:
        "Add logical dependencies for code statistics (experimental, implies --cache-fine-grained)",
      hidden: true,
    },
    {
      name: "--export-ref-info",
      description: "Export limited line-level dependency information",
      hidden: true,
    },
    {
      name: "--allow-empty-bodies",
      description: "Allow function bodies to be omitted",
      hidden: true,
    },
    {
      name: "--disallow-empty-bodies",
      description: "Inverse of --allow-empty-bodies",
      hidden: true,
    },
    {
      name: "-a",
      description: "Write an annotated HTML source file (mypyc)",
      hidden: true,
      args: { name: "FILE", template: "filepaths" },
    },
    {
      name: "--skip-c-gen",
      description:
        "Do not write any C files, keep existing ones and assume they exist (mypyc)",
      hidden: true,
    },
  ],
  args: {
    name: "files",
    description: "Python files or folders to type check",
    template: "filepaths",
    isVariadic: true,
    isOptional: true,
  },
};

export default completionSpec;
