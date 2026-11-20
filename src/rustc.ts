// rustc v1.100.0 (rustc --version of the preinstalled toolchain, 1.100.0 2026-11-09 = newest rust-lang/rust release tag, 2026-11-20).
// Source: `rustc --help`, `rustc --help -v`, `rustc -C help`, `rustc -W help` and `rustc --print ...` run locally (stable channel), plus the
// 1.100.0 rustc book (command-line-arguments, print-options, codegen-options) and compiler/rustc_session/src/config.rs read statically.
// Unstable (nightly-only) options are limited to a few documented ones (-Z, --jobs*, unstable --print/--emit values); `-Z` values are not enumerated.
const targetListGenerator: Fig.Generator = {
  script: ["rustc", "--print", "target-list"],
  postProcess: (output) =>
    output
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean)
      .map((name) => ({ name })),
};

// Parses the "Lint checks provided by rustc" table of `rustc -W help`
const lintGenerator: Fig.Generator = {
  script: ["rustc", "-W", "help"],
  postProcess: (output) =>
    output.split("\n").flatMap((line) => {
      const match = line.match(
        /^\s+([a-z0-9][a-z0-9-]*)\s+(?:allow|warn|deny|forbid)\s+(.+)$/
      );
      return match ? [{ name: match[1], description: match[2] }] : [];
    }),
};

const lintGroups: Fig.Suggestion[] = [
  { name: "help", description: "Print lint options and default settings" },
  { name: "warnings", description: "All lints that are set to issue warnings" },
  { name: "unused", description: "Group of lints about unused code" },
  {
    name: "future-incompatible",
    description: "Group of lints about code that may stop compiling",
  },
  {
    name: "nonstandard-style",
    description: "Group of lints about non-standard naming",
  },
  {
    name: "rust-2018-idioms",
    description: "Group of lints about 2018 edition idioms",
  },
  {
    name: "rust-2018-compatibility",
    description: "Group of lints for migrating to the 2018 edition",
  },
  {
    name: "rust-2021-compatibility",
    description: "Group of lints for migrating to the 2021 edition",
  },
  {
    name: "rust-2024-compatibility",
    description: "Group of lints for migrating to the 2024 edition",
  },
  { name: "let-underscore", description: "Group of let-underscore lints" },
  { name: "keyword-idents", description: "Group of keyword-idents lints" },
  { name: "deprecated-safe", description: "Group of deprecated-safe lints" },
  {
    name: "refining-impl-trait",
    description: "Group of refining-impl-trait lints",
  },
  {
    name: "unknown-or-malformed-diagnostic-attributes",
    description: "Group of diagnostic attribute lints",
  },
];

const lintArg = (description: string): Fig.Arg => ({
  name: "lint",
  description,
  suggestions: lintGroups,
  generators: lintGenerator,
});

type CodegenOption = {
  name: string;
  description: string;
  // Options that take a boolean or an optional value are suggested without a trailing "="
  optionalValue?: boolean;
  values?: (string | [value: string, description: string])[];
};

// Stable `-C` options, from `rustc -C help` (removed options such as ar and soft-float are left out)
const codegenOptions: CodegenOption[] = [
  {
    name: "code-model",
    description: "Choose the code model to use",
    values: [
      ["tiny", "Tiny code model"],
      ["small", "Small code model (default for most targets)"],
      ["kernel", "Kernel code model"],
      ["medium", "Medium code model"],
      ["large", "Large code model"],
    ],
  },
  {
    name: "codegen-units",
    description: "Divide the crate into N units to optimize in parallel",
  },
  {
    name: "collapse-macro-debuginfo",
    description:
      "Collapse debuginfo for macros into the location of the macro call site",
    values: [
      ["yes", "Collapse code locations in debuginfo"],
      ["no", "Do not collapse code locations in debuginfo"],
      ["external", "Collapse only if the macro comes from a different crate"],
    ],
  },
  {
    name: "control-flow-guard",
    description: "Use Windows Control Flow Guard (default: no)",
    optionalValue: true,
    values: [
      ["yes", "Enable Control Flow Guard"],
      ["no", "Do not enable Control Flow Guard"],
      ["checks", "Enable Control Flow Guard with runtime checks"],
      ["nochecks", "Emit Control Flow Guard metadata without runtime checks"],
    ],
  },
  {
    name: "debug-assertions",
    description: "Explicitly enable the cfg(debug_assertions) directive",
    optionalValue: true,
  },
  {
    name: "debuginfo",
    description: "Debug info emission level (default: 0)",
    values: [
      ["0", "No debug info at all (default)"],
      ["none", "No debug info at all (default)"],
      ["line-directives-only", "Line info directives only"],
      [
        "line-tables-only",
        "Line tables only, the minimum for backtraces with file and line numbers",
      ],
      ["1", "Debug info without type or variable-level information"],
      ["limited", "Debug info without type or variable-level information"],
      ["2", "Full debug info"],
      ["full", "Full debug info"],
    ],
  },
  {
    name: "default-linker-libraries",
    description: "Allow the linker to link its default libraries (default: no)",
    optionalValue: true,
  },
  {
    name: "dlltool",
    description:
      "Import library generation tool (ignored except when targeting windows-gnu)",
  },
  {
    name: "dwarf-version",
    description: "Version of DWARF debug information to emit",
    values: ["2", "3", "4", "5"],
  },
  {
    name: "embed-bitcode",
    description: "Emit bitcode in rlibs (default: yes)",
    optionalValue: true,
  },
  {
    name: "extra-filename",
    description: "Extra data to put in each output filename",
  },
  {
    name: "force-frame-pointers",
    description: "Force the use of frame pointers",
    optionalValue: true,
  },
  {
    name: "force-unwind-tables",
    description: "Force the use of unwind tables",
    optionalValue: true,
  },
  { name: "help", description: "Print codegen options", optionalValue: true },
  {
    name: "incremental",
    description:
      "Enable incremental compilation, storing its data in the given directory",
  },
  {
    name: "instrument-coverage",
    description:
      "Instrument the generated code to support LLVM source-based code coverage reports",
    optionalValue: true,
  },
  {
    name: "jump-tables",
    description:
      "Allow jump table and lookup table generation from switch case lowering (default: yes)",
    optionalValue: true,
  },
  {
    name: "link-arg",
    description:
      "Append a single extra argument to the linker invocation (can be used several times)",
  },
  {
    name: "link-args",
    description:
      "Append extra arguments to the linker invocation (space separated)",
  },
  {
    name: "link-dead-code",
    description: "Try to generate and link dead code (default: no)",
    optionalValue: true,
  },
  {
    name: "link-self-contained",
    description:
      "Control whether to link Rust provided C objects and libraries or rely on a C toolchain or linker installed in the system",
    optionalValue: true,
    values: [
      ["yes", "Use only libraries and objects shipped with Rust"],
      ["no", "Rely on the system to provide non-Rust libraries and objects"],
      ["+linker", "Use the self-contained linker binaries"],
      ["-linker", "Do not use the self-contained linker binaries"],
    ],
  },
  { name: "linker", description: "System linker to link outputs with" },
  {
    name: "linker-features",
    description:
      "Comma-separated list of linker features to enable (+) or disable (-)",
    values: [
      ["+lld", "Try to use the lld linker"],
      ["-lld", "Do not use the lld linker"],
    ],
  },
  {
    name: "linker-flavor",
    description: "Linker flavor",
    values: [
      ["em", "Emscripten emcc"],
      ["gcc", "The cc executable, typically gcc or clang"],
      ["ld", "The ld executable"],
      ["msvc", "The link.exe executable from Microsoft Visual Studio MSVC"],
      ["wasm-ld", "The wasm-ld executable, LLVM lld for WebAssembly"],
      ["ld64.lld", "LLVM lld in Darwin flavor, for Apple's ld"],
      ["ld.lld", "LLVM lld in GNU flavor, for GNU binutils' ld"],
      ["lld-link", "LLVM lld in link flavor, for Microsoft's link.exe"],
    ],
  },
  {
    name: "linker-plugin-lto",
    description:
      "Generate build artifacts that are compatible with linker-based LTO",
    optionalValue: true,
  },
  {
    name: "llvm-args",
    description: "Arguments to pass to LLVM (space separated)",
  },
  {
    name: "lto",
    description: "Perform LLVM link-time optimizations",
    optionalValue: true,
    values: [
      ["fat", "Optimize across all crates in the dependency graph"],
      ["thin", "Thin LTO, faster than fat with similar performance gains"],
      ["off", "Disable LTO"],
    ],
  },
  {
    name: "metadata",
    description: "Metadata to mangle symbol names with",
  },
  {
    name: "no-prepopulate-passes",
    description: "Give an empty list of passes to the pass manager",
    optionalValue: true,
  },
  {
    name: "no-redzone",
    description: "Disable the use of the redzone",
    optionalValue: true,
  },
  {
    name: "no-vectorize-loops",
    description: "Disable loop vectorization optimization passes",
    optionalValue: true,
  },
  {
    name: "no-vectorize-slp",
    description: "Disable LLVM's SLP vectorization pass",
    optionalValue: true,
  },
  {
    name: "opt-level",
    description: "Optimization level (default: 0)",
    values: [
      ["0", "No optimizations"],
      ["1", "Basic optimizations"],
      ["2", "Some optimizations"],
      ["3", "All optimizations"],
      ["s", "Optimize for binary size"],
      ["z", "Optimize for binary size, but more aggressively"],
    ],
  },
  {
    name: "overflow-checks",
    description: "Use overflow checks for integer arithmetic",
    optionalValue: true,
  },
  {
    name: "panic",
    description: "Panic strategy to compile crate with",
    values: [
      ["abort", "Terminate the process upon panic"],
      ["unwind", "Unwind the stack upon panic"],
    ],
  },
  {
    name: "passes",
    description: "Extra LLVM passes to run (space separated)",
  },
  {
    name: "prefer-dynamic",
    description: "Prefer dynamic linking to static linking (default: no)",
    optionalValue: true,
  },
  {
    name: "profile-generate",
    description: "Compile the program with profiling instrumentation",
    optionalValue: true,
  },
  {
    name: "profile-sample-use",
    description:
      "Use the given .prof file for sample-based profile-guided optimization",
  },
  {
    name: "profile-use",
    description: "Use the given .profdata file for profile-guided optimization",
  },
  {
    name: "relocation-model",
    description: "Control generation of position-independent code (PIC)",
    values: [
      ["static", "Non-relocatable code, may use absolute addressing modes"],
      ["pic", "Fully relocatable position independent code"],
      ["pie", "Position independent executable"],
      [
        "dynamic-no-pic",
        "Relocatable external references, non-relocatable code",
      ],
      ["ropi", "Relocatable code and read-only data"],
      ["rwpi", "Relocatable read-write data"],
      ["ropi-rwpi", "Relocatable code, read-only data and read-write data"],
      ["default", "Relocation model default of the current target"],
    ],
  },
  {
    name: "relro-level",
    description: "Choose which RELRO level to use",
    values: [
      ["off", "Lazy binding, writable GOT"],
      ["partial", "Lazy binding, read-only non-PLT part of the GOT"],
      ["full", "Eager binding, read-only GOT"],
    ],
  },
  {
    name: "remark",
    description:
      "Output remarks for these optimization passes (space separated, or all)",
  },
  {
    name: "rpath",
    description: "Set rpath values in libs and executables (default: no)",
    optionalValue: true,
  },
  {
    name: "save-temps",
    description:
      "Save all temporary output files during compilation (default: no)",
    optionalValue: true,
  },
  {
    name: "split-debuginfo",
    description: "How to handle split-debuginfo, a platform-specific option",
    values: [
      ["off", "Keep debug information in the final artifact"],
      ["packed", "Pack all debug information into a separate file"],
      ["unpacked", "Keep debug information in separate per-object files"],
    ],
  },
  {
    name: "strip",
    description: "Tell the linker which information to strip (default: none)",
    values: [
      ["none", "Do not modify debuginfo and symbols"],
      ["debuginfo", "Strip debuginfo sections and symbols"],
      ["symbols", "Strip debuginfo and the rest of the symbol table"],
    ],
  },
  {
    name: "symbol-mangling-version",
    description: "Which mangling version to use for symbol names",
    values: [["v0", "The v0 mangling scheme"]],
  },
  {
    name: "target-cpu",
    description: "Select target processor (see rustc --print target-cpus)",
    values: [
      ["native", "Use the processor of the host machine"],
      ["generic", "LLVM target with minimal features but modern tuning"],
    ],
  },
  {
    name: "target-feature",
    description:
      "Enable (+) or disable (-) target-specific features (see rustc --print target-features)",
  },
  {
    name: "unsafe-allow-abi-mismatch",
    description:
      "Allow incompatible target modifiers in dependency crates (comma separated list)",
  },
];

const codegenSuggestions: Fig.Suggestion[] = codegenOptions.flatMap(
  ({ name, description, optionalValue, values }) => [
    optionalValue
      ? { name, description }
      : { name, description, insertValue: `${name}=` },
    ...(values ?? []).map((value) => {
      const [text, valueDescription] =
        typeof value === "string" ? [value, description] : value;
      return { name: `${name}=${text}`, description: valueDescription };
    }),
  ]
);

const completionSpec: Fig.Spec = {
  name: "rustc",
  description: "Compiler for the Rust programming language",
  args: {
    name: "input",
    description: "Rust source file to compile, or - to read from stdin",
    template: "filepaths",
  },
  options: [
    {
      name: ["-h", "--help"],
      description: "Display help message",
    },
    {
      name: "--cfg",
      description: "Configure the compilation environment",
      isRepeatable: true,
      args: {
        name: "spec",
        description: `NAME or NAME="VALUE", e.g. verbose or feature="serde"`,
      },
    },
    {
      name: "--check-cfg",
      description: "Provide list of expected cfgs for checking",
      isRepeatable: true,
      args: {
        name: "spec",
        description: `Example: cfg(verbose) or cfg(feature, values("serde"))`,
      },
    },
    {
      name: "-L",
      description: "Add a directory to the library search path",
      isRepeatable: true,
      args: {
        name: "[kind=]path",
        description: "Directory, optionally prefixed with the kind of search",
        template: "folders",
        suggestions: [
          {
            name: "dependency",
            insertValue: "dependency=",
            description:
              "Only search for transitive dependencies in this directory",
          },
          {
            name: "crate",
            insertValue: "crate=",
            description:
              "Only search for this crate's direct dependencies in this directory",
          },
          {
            name: "native",
            insertValue: "native=",
            description: "Only search for native libraries in this directory",
          },
          {
            name: "framework",
            insertValue: "framework=",
            description: "Only search for macOS frameworks in this directory",
          },
          {
            name: "all",
            insertValue: "all=",
            description:
              "Search for all library kinds in this directory, except frameworks (default)",
          },
        ],
      },
    },
    {
      name: "-l",
      description: "Link the generated crate to a native library",
      isRepeatable: true,
      args: {
        name: "[kind[:modifiers]=]name[:rename]",
        description:
          "Native library name, optionally with a kind and comma-separated +/- modifiers (bundle, verbatim, whole-archive, as-needed)",
        suggestions: [
          {
            name: "dylib",
            insertValue: "dylib=",
            description: "A native dynamic library (default)",
          },
          {
            name: "static",
            insertValue: "static=",
            description: "A native static library",
          },
          {
            name: "framework",
            insertValue: "framework=",
            description: "A macOS framework",
          },
        ],
      },
    },
    {
      name: "--crate-type",
      description: "Types of crates for the compiler to emit",
      isRepeatable: true,
      args: {
        name: "type",
        description: "Comma-separated list of crate types",
        suggestions: [
          { name: "bin", description: "A runnable executable program" },
          {
            name: "lib",
            description: "A library kind preferred by the compiler (rlib)",
          },
          { name: "rlib", description: "A Rust static library" },
          { name: "dylib", description: "A Rust dynamic library" },
          { name: "cdylib", description: "A native dynamic library" },
          { name: "staticlib", description: "A native static library" },
          {
            name: "proc-macro",
            description:
              "A format suitable for a procedural macro library that may be loaded by the compiler",
          },
        ],
      },
    },
    {
      name: "--crate-name",
      description: "Specify the name of the crate being built",
      args: {
        name: "name",
      },
    },
    {
      name: "--edition",
      description: "Specify which edition of the compiler to use",
      args: {
        name: "edition",
        suggestions: [
          { name: "2015", description: "Default edition" },
          { name: "2018", description: "Rust 2018 edition" },
          { name: "2021", description: "Rust 2021 edition" },
          { name: "2024", description: "Rust 2024 edition (latest stable)" },
          { name: "future", description: "Unstable future edition" },
        ],
      },
    },
    {
      name: "--emit",
      description: "Types of output for the compiler to emit",
      isRepeatable: true,
      args: {
        name: "type[=file]",
        description: "Comma-separated list of output types",
        suggestions: [
          {
            name: "asm",
            description: "Assembly code (CRATE_NAME.s)",
          },
          {
            name: "dep-info",
            description:
              "Makefile syntax listing all source files that were loaded (CRATE_NAME.d)",
          },
          {
            name: "link",
            description:
              "The crates specified by --crate-type (default, depends on the platform)",
          },
          {
            name: "llvm-bc",
            description:
              "Binary file containing the LLVM bitcode (CRATE_NAME.bc)",
          },
          {
            name: "llvm-ir",
            description: "File containing LLVM IR (CRATE_NAME.ll)",
          },
          {
            name: "metadata",
            description:
              "File containing metadata about the crate (libCRATE_NAME.rmeta)",
          },
          {
            name: "mir",
            description:
              "File containing rustc's mid-level intermediate representation (CRATE_NAME.mir)",
          },
          {
            name: "obj",
            description: "Native object file (CRATE_NAME.o)",
          },
          {
            name: "thin-link-bitcode",
            description:
              "Unstable: bitcode for the thin LTO summary (CRATE_NAME.indexing.o)",
          },
        ],
      },
    },
    {
      name: "--print",
      description: "Compiler information to print on stdout (or to a file)",
      isRepeatable: true,
      args: {
        name: "info[=file]",
        suggestions: [
          {
            name: "calling-conventions",
            description: "List of all calling conventions supported by rustc",
          },
          { name: "cfg", description: "List of cfg values" },
          { name: "code-models", description: "List of code models" },
          { name: "crate-name", description: "The name of the crate" },
          {
            name: "deployment-target",
            description: "The selected deployment target (Apple targets only)",
          },
          {
            name: "file-names",
            description: "The names of the files created by the link emit kind",
          },
          {
            name: "host-tuple",
            description: "The target tuple of the host compiler",
          },
          {
            name: "link-args",
            description: "The full linker invocation (does not disable --emit)",
          },
          {
            name: "native-static-libs",
            description:
              "Linker flags to use when linking a staticlib crate type",
          },
          {
            name: "relocation-models",
            description: "List of relocation models",
          },
          {
            name: "split-debuginfo",
            description: "List of available split-debuginfo values",
          },
          {
            name: "stack-protector-strategies",
            description: "List of available stack protector strategies",
          },
          { name: "sysroot", description: "Path to the sysroot" },
          {
            name: "target-cpus",
            description: "List of available CPU values for the current target",
          },
          {
            name: "target-features",
            description:
              "List of available target features for the current target",
          },
          { name: "target-libdir", description: "Path to the target libdir" },
          {
            name: "target-list",
            description:
              "List of known targets, selectable with the --target flag",
          },
          {
            name: "tls-models",
            description: "List of Thread Local Storage models supported",
          },
          {
            name: "all-target-specs-json",
            description: "Unstable: JSON specifications of all targets",
          },
          {
            name: "check-cfg",
            description: "Unstable: list of check-cfg values",
          },
          {
            name: "crate-root-lint-levels",
            description: "Unstable: lint levels of the crate's root module",
          },
          {
            name: "supported-crate-types",
            description:
              "Unstable: list of available crate types for the current target",
          },
          {
            name: "target-spec-json",
            description: "Unstable: JSON specification of the current target",
          },
          {
            name: "target-spec-json-schema",
            description: "Unstable: schema of the target JSON specification",
          },
          {
            name: "wasm-proc-macro-tuple",
            description:
              "Unstable: target tuple for WebAssembly proc-macro crates",
          },
        ],
      },
    },
    {
      name: "-g",
      description: "Equivalent to -C debuginfo=2",
    },
    {
      name: "-O",
      description: "Equivalent to -C opt-level=3",
    },
    {
      name: "-o",
      description: "Write output to the given file",
      args: {
        name: "filename",
        template: "filepaths",
      },
    },
    {
      name: "--out-dir",
      description:
        "Write output to a compiler-chosen filename in the directory",
      args: {
        name: "dir",
        template: "folders",
      },
    },
    {
      name: "--explain",
      description: "Provide a detailed explanation of an error message",
      args: {
        name: "error code",
        description: "Error code, e.g. E0308",
      },
    },
    {
      name: "--test",
      description: "Build a test harness",
    },
    {
      name: "--target",
      description: "Target tuple for which the code is compiled",
      args: {
        name: "target",
        generators: targetListGenerator,
      },
    },
    {
      name: ["-A", "--allow"],
      description: "Set lint allowed",
      isRepeatable: true,
      args: lintArg("Lint or lint group to allow"),
    },
    {
      name: ["-W", "--warn"],
      description: "Set lint warnings",
      isRepeatable: true,
      args: lintArg("Lint or lint group to warn about"),
    },
    {
      name: "--force-warn",
      description: "Set lint force-warn",
      isRepeatable: true,
      args: lintArg("Lint or lint group to force to warn"),
    },
    {
      name: ["-D", "--deny"],
      description: "Set lint denied",
      isRepeatable: true,
      args: lintArg("Lint or lint group to deny"),
    },
    {
      name: ["-F", "--forbid"],
      description: "Set lint forbidden",
      isRepeatable: true,
      args: lintArg("Lint or lint group to forbid"),
    },
    {
      name: "--cap-lints",
      description:
        "Set the most restrictive lint level, more restrictive lints are capped at this level",
      args: {
        name: "level",
        suggestions: ["allow", "warn", "deny", "forbid"],
      },
    },
    {
      name: ["-C", "--codegen"],
      description: "Set a codegen option",
      isRepeatable: true,
      args: {
        name: "option[=value]",
        description: "Codegen option, see rustc -C help",
        suggestions: codegenSuggestions,
      },
    },
    {
      name: "-Z",
      description: "Set unstable options (nightly only)",
      isRepeatable: true,
      args: {
        name: "option",
        description: "Unstable option to pass to rustc, see rustc -Z help",
      },
    },
    {
      name: ["-V", "--version"],
      description: "Print version info and exit",
    },
    {
      name: ["-v", "--verbose"],
      description: "Use verbose output",
    },
    {
      name: "--extern",
      description: "Specify where an external Rust library is located",
      isRepeatable: true,
      args: {
        name: "name[=path]",
        description:
          "Crate name, optionally followed by the path to its library",
      },
    },
    {
      name: "--sysroot",
      description: "Override the system root",
      isDangerous: true,
      args: {
        name: "path",
        template: "folders",
      },
    },
    {
      name: "--error-format",
      description: "How errors and other messages are produced",
      args: {
        name: "format",
        suggestions: [
          { name: "human", description: "Human-readable output (default)" },
          { name: "json", description: "Structured JSON output" },
          { name: "short", description: "Short, one-line messages" },
        ],
      },
    },
    {
      name: "--json",
      description:
        "Configure the JSON output of the compiler (requires --error-format=json)",
      isRepeatable: true,
      args: {
        name: "config",
        description: "Comma-separated list of JSON message options",
        suggestions: [
          {
            name: "diagnostic-short",
            description: "Use the short rendering in JSON diagnostics",
          },
          {
            name: "diagnostic-rendered-ansi",
            description: "Embed ANSI color codes in rendered diagnostics",
          },
          {
            name: "artifacts",
            description: "Emit a JSON message for each artifact emitted",
          },
          {
            name: "future-incompat",
            description:
              "Include a report of code that may fail to compile in the future",
          },
          {
            name: "timings",
            description:
              "Emit a JSON message when a compilation section begins or ends",
          },
        ],
      },
    },
    {
      name: "--color",
      description: "Configure coloring of output",
      args: {
        name: "color",
        suggestions: [
          {
            name: "auto",
            description: "Colorize if output goes to a tty (default)",
          },
          { name: "always", description: "Always colorize output" },
          { name: "never", description: "Never colorize output" },
        ],
      },
    },
    {
      name: "--diagnostic-width",
      description:
        "Inform rustc of the width of the output so that diagnostics can be truncated to fit",
      args: {
        name: "width",
      },
    },
    {
      name: "--remap-path-prefix",
      description:
        "Remap source names in all output (compiler messages and output files)",
      isRepeatable: true,
      args: {
        name: "from=to",
        description: "Path prefix to rewrite and its replacement",
      },
    },
    {
      name: "--remap-path-scope",
      description:
        "Define which scopes of paths should be remapped by --remap-path-prefix",
      args: {
        name: "scope",
        description: "Comma-separated list of scopes",
        suggestions: [
          "macro",
          "diagnostics",
          "debuginfo",
          "coverage",
          "object",
          "all",
        ],
      },
    },
    {
      name: ["-j", "--jobs"],
      description:
        "Limit on the number of used parallel jobs (nightly only, requires -Z unstable-options)",
      args: {
        name: "N",
        description: "Number from 0 to 255 (0 is the number of CPUs), or sync",
      },
    },
    {
      name: "--jobs-frontend",
      description:
        "Limit on the number of parallel jobs used by the frontend (nightly only, requires -Z unstable-options)",
      args: {
        name: "N",
      },
    },
    {
      name: "--jobs-backend",
      description:
        "Limit on the number of parallel jobs used by the backend (nightly only, requires -Z unstable-options)",
      args: {
        name: "N",
      },
    },
    {
      name: "--jobs-linker",
      description:
        "Limit on the number of parallel jobs used by the linker (nightly only, requires -Z unstable-options)",
      args: {
        name: "N",
      },
    },
  ],
};

export default completionSpec;
