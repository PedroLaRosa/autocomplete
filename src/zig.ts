// Zig v0.17.1 (latest release: PyPI `ziglang` 0.17.1 wheel, which repackages the official ziglang.org binaries; Homebrew formula also at 0.17.1; 2026-11-19).
// Source (static reading only, nothing was executed): the usage text embedded in the 0.17.1 `zig` binary (`strings`) for the compiler
// commands, `ast-check` and `fmt`; lib/compiler/{Maker.zig,Maker/ScannedConfig.zig} from the wheel for `build`, `fetch`, `init`,
// `libc`, `cache-cat`; lib/compiler/{objcopy,objdump,reduce,std-docs}.zig and resinator/cli.zig for the tools of the same name and `rc`;
// llvmorg-22.1.8 (the LLVM that 0.17.1 reports) llvm-ar.cpp and the llvm-lib/llvm-dlltool option tables for `ar`, `ranlib`, `lib`, `dlltool`.
// Not verified by a live run. `zig build` help also lists --verbose-cimport and --verbose-llvm-cpu-features, but Maker.zig no longer parses
// them, so they are left out. `zig cc`/`zig c++` options still come from ./clang. ziglang.org and codeberg.org (upstream) are unreachable
// from the sandbox and the GitHub mirror stops at 0.15.2.

import { clangBase } from "./clang";

/**
 * Creates a pair of mutually exclusive `-fname` / `-fno-name` style flags.
 * `onExtra` is merged into the positive flag only.
 */
const flagPair = (
  on: string,
  off: string,
  onDescription: string,
  offDescription: string,
  onExtra: Partial<Fig.Option> = {}
): Fig.Option[] => [
  {
    name: on,
    description: onDescription,
    exclusiveOn: [off],
    ...onExtra,
  },
  {
    name: off,
    description: offDescription,
    exclusiveOn: [on],
  },
];

/** `-femit-<kind>[=path]` / `-fno-emit-<kind>` */
const emitOptions = (
  kind: string,
  onDescription: string,
  offDescription: string
): Fig.Option[] =>
  flagPair(
    `-femit-${kind}`,
    `-fno-emit-${kind}`,
    onDescription,
    offDescription,
    {
      requiresSeparator: "=",
      args: { name: "path", template: "filepaths", isOptional: true },
    }
  );

/** An option that is only accepted as `--name=value` (or `-name=value`) */
const equalsOption = (
  name: string,
  description: string,
  args: Fig.Arg,
  extra: Partial<Fig.Option> = {}
): Fig.Option => ({
  name,
  description,
  requiresSeparator: "=",
  args,
  ...extra,
});

const colorOption: Fig.Option = {
  name: "--color",
  description: "Enable or disable colored error messages",
  args: {
    name: "mode",
    suggestions: ["auto", "off", "on"],
  },
};
const cacheDirOption: Fig.Option = {
  name: "--cache-dir",
  description: "Override the local cache directory",
  args: {
    name: "path",
    template: "folders",
  },
  priority: 20,
};
const globalCacheDirOption: Fig.Option = {
  name: "--global-cache-dir",
  description: "Override the global cache directory",
  args: {
    name: "path",
    template: "folders",
  },
  priority: 20,
};
const zigLibDirOption: Fig.Option = {
  name: "--zig-lib-dir",
  description: "Override path to Zig installation lib directory",
  args: {
    name: "path",
    template: "folders",
  },
  priority: 20,
};
const buildRootOption: Fig.Option = {
  name: "--build-root",
  description: "Override path to project source files",
  args: {
    name: "path",
    template: "folders",
  },
  priority: 20,
};
const libcOption: Fig.Option = {
  name: "--libc",
  description: "Provide a file which specifies libc paths",
  args: {
    name: "file",
    template: "filepaths",
  },
};
const sysrootOption: Fig.Option = {
  name: "--sysroot",
  description: "Set the system root directory (usually /)",
  args: {
    name: "path",
    template: "folders",
  },
};
const errorLimitOption: Fig.Option = {
  name: "--error-limit",
  description: "Set the maximum amount of distinct error values",
  args: {
    name: "num",
  },
};
const referenceTraceOptions: Fig.Option[] = flagPair(
  "-freference-trace",
  "-fno-reference-trace",
  "Show num lines of reference trace per compile error",
  "Disable reference trace",
  {
    requiresSeparator: "=",
    args: { name: "num", isOptional: true },
  }
);
const allowSoScriptsOptions: Fig.Option[] = flagPair(
  "-fallow-so-scripts",
  "-fno-allow-so-scripts",
  "Allows .so files to be GNU ld scripts",
  "(default) .so files must be ELF files"
);
const incrementalOptions: Fig.Option[] = flagPair(
  "-fincremental",
  "-fno-incremental",
  "Enable incremental compilation",
  "Disable incremental compilation"
);
const buildIdOption: Fig.Option = {
  name: "--build-id",
  description: "At a minor link-time expense, embeds a build ID in binaries",
  requiresSeparator: "=",
  args: {
    name: "style",
    isOptional: true,
    suggestions: [
      { name: "fast", description: "8-byte non-cryptographic hash" },
      {
        name: ["sha1", "tree"],
        description: "20-byte cryptographic hash (ELF, WASM)",
      },
      { name: "md5", description: "16-byte cryptographic hash (ELF)" },
      { name: "uuid", description: "16-byte random UUID (ELF, WASM)" },
      {
        name: "0x",
        description: "Constant ID as a hex string, maximum 32 bytes",
      },
      { name: "none", description: "(default) No build ID" },
    ],
  },
};
const debugLogOption: Fig.Option = {
  name: "--debug-log",
  description: "Enable printing debug/info log messages for scope",
  args: {
    name: "scope",
  },
  isRepeatable: true,
};
const helpOption: Fig.Option = {
  name: ["-h", "--help"],
  description: "Print help and exit",
};
const jobsOption: Fig.Option = {
  name: "-j",
  description: "Limit concurrent jobs (default is to use all CPU cores)",
  insertValue: "-j{cursor}",
};
const cachePoisonOption: Fig.Option = {
  name: "--cache-poison",
  description: "Override configuration caching behavior",
  requiresSeparator: "=",
  args: {
    name: "mode",
    isOptional: true,
    suggestions: [
      {
        name: "pure",
        description: "(default) Avoid false positive cache hits",
      },
      { name: "poisoned", description: "Don't cache the configuration" },
      {
        name: "disallowed",
        description: "Panics when cache would be poisoned",
      },
      { name: "ignored", description: "A little poison never hurt anybody" },
    ],
  },
};

const generalOptions: Fig.Option[] = [
  helpOption,
  colorOption,
  jobsOption,
  ...incrementalOptions,
  ...emitOptions(
    "bin",
    "(default) Output machine code",
    "Do not output machine code"
  ),
  ...emitOptions(
    "asm",
    "Output .s (assembly code)",
    "(default) Do not output .s (assembly code)"
  ),
  ...emitOptions(
    "llvm-ir",
    "Produce a .ll file with optimized LLVM IR (requires LLVM extensions)",
    "(default) Do not produce a .ll file with optimized LLVM IR"
  ),
  ...emitOptions(
    "llvm-bc",
    "Produce an optimized LLVM module as a .bc file (requires LLVM extensions)",
    "(default) Do not produce an optimized LLVM module as a .bc file"
  ),
  ...emitOptions(
    "h",
    "Generate a C header file (.h)",
    "(default) Do not generate a C header file (.h)"
  ),
  ...emitOptions(
    "docs",
    "Create a docs/ dir with html documentation",
    "(default) Do not produce docs/ dir with html documentation"
  ),
  ...emitOptions(
    "implib",
    "(default) Produce an import .lib when building a Windows DLL",
    "Do not produce an import .lib when building a Windows DLL"
  ),
  {
    name: "--show-builtin",
    description: 'Output the source of @import("builtin") then exit',
  },
  cacheDirOption,
  globalCacheDirOption,
  zigLibDirOption,
  buildRootOption,
];

const globalCompileOptions: Fig.Option[] = [
  {
    name: "--name",
    description: "Compilation unit name (not a file path)",
    args: {
      name: "name",
    },
  },
  {
    name: "-M",
    description:
      "Create a module based on the current per-module settings. The first module is the main module",
    insertValue: "-M{cursor}",
    isRepeatable: true,
  },
  libcOption,
  {
    name: "-x",
    description: "Treat subsequent input files as having type <language>",
    args: {
      name: "language",
    },
  },
  errorLimitOption,
  ...flagPair(
    "-fllvm",
    "-fno-llvm",
    "Force using LLVM as the codegen backend",
    "Prevent using LLVM as the codegen backend"
  ),
  ...flagPair(
    "-flibllvm",
    "-fno-libllvm",
    "Force using the LLVM API in the codegen backend",
    "Prevent using the LLVM API in the codegen backend"
  ),
  ...flagPair(
    "-fclang",
    "-fno-clang",
    "Force using Clang as the C/C++ compilation backend",
    "Prevent using Clang as the C/C++ compilation backend"
  ),
  ...flagPair(
    "-fPIE",
    "-fno-PIE",
    "Force-enable Position Independent Executable",
    "Force-disable Position Independent Executable"
  ),
  ...flagPair(
    "-flto",
    "-fno-lto",
    "Force-enable Link Time Optimization (requires LLVM extensions)",
    "Force-disable Link Time Optimization"
  ),
  ...flagPair(
    "-fdll-export-fns",
    "-fno-dll-export-fns",
    "Mark exported functions as DLL exports (Windows)",
    "Force-disable marking exported functions as DLL exports"
  ),
  ...referenceTraceOptions,
  ...flagPair(
    "-ffunction-sections",
    "-fno-function-sections",
    "Places each function in a separate section",
    "All functions go into same section"
  ),
  ...flagPair(
    "-fdata-sections",
    "-fno-data-sections",
    "Places each data in a separate section",
    "All data go into same section"
  ),
  equalsOption(
    "-fpatchable-function-entry",
    "Add num NOPs of padding in function prologues",
    { name: "num" }
  ),
  equalsOption("-mexec-model", "(WASI) Execution model", { name: "value" }),
  {
    name: "-municode",
    description: "(Windows) Use wmain/wWinMain as entry point",
  },
  {
    name: "--time-report",
    description: "Send timing diagnostics to '--listen' clients",
  },
];

const perModuleCompileOptions: Fig.Option[] = [
  {
    name: "--dep",
    description: "Add an entry to the next module's import table",
    args: {
      name: "[import=]name",
    },
    isRepeatable: true,
  },
  {
    name: "-target",
    description: "<arch><sub>-<os>-<abi> see the targets command",
    args: {
      name: "name",
    },
  },
  {
    name: "-O",
    description: "Choose what to optimize for",
    args: {
      name: "mode",
      suggestions: [
        {
          name: "debug",
          description:
            "(default) Prioritize bug detection, accurate debug info, compilation speed",
        },
        {
          name: "fast",
          description: "Prioritize runtime performance. Safety checks off",
        },
        {
          name: "safe",
          description:
            "Enable both safety checks and machine code optimizations",
        },
        {
          name: "small",
          description: "Prioritize small binary size. Safety checks off",
        },
      ],
    },
  },
  equalsOption("-ofmt", "Override target object format", {
    name: "fmt",
    suggestions: [
      { name: "elf", description: "Executable and Linking Format" },
      { name: "c", description: "C source code" },
      { name: "wasm", description: "WebAssembly" },
      { name: "coff", description: "Common Object File Format (Windows)" },
      { name: "macho", description: "Mach-O relocatables (macOS)" },
      {
        name: "spirv",
        description:
          "Standard, Portable Intermediate Representation V (SPIR-V)",
      },
      { name: "plan9", description: "Plan 9 from Bell Labs object format" },
    ],
  }),
  {
    name: "-mcpu",
    description: "Specify target CPU and feature set",
    args: {
      name: "cpu",
    },
  },
  equalsOption("-mcmodel", "Limit range of code and data virtual addresses", {
    name: "model",
    suggestions: [
      "default",
      "extreme",
      "kernel",
      "large",
      "medany",
      "medium",
      "medlow",
      "medmid",
      "normal",
      "small",
      "tiny",
    ],
  }),
  ...flagPair(
    "-mred-zone",
    "-mno-red-zone",
    'Force-enable the "red-zone"',
    'Force-disable the "red-zone"'
  ),
  ...flagPair(
    "-fomit-frame-pointer",
    "-fno-omit-frame-pointer",
    "Omit the stack frame pointer",
    "Store the stack frame pointer"
  ),
  ...flagPair(
    "-fPIC",
    "-fno-PIC",
    "Force-enable Position Independent Code",
    "Force-disable Position Independent Code"
  ),
  ...flagPair(
    "-fstack-check",
    "-fno-stack-check",
    "Enable stack probing in unsafe builds",
    "Disable stack probing in safe builds"
  ),
  ...flagPair(
    "-fstack-protector",
    "-fno-stack-protector",
    "Enable stack protection in unsafe builds",
    "Disable stack protection in safe builds"
  ),
  ...flagPair(
    "-fvalgrind",
    "-fno-valgrind",
    "Include valgrind client requests in release builds",
    "Omit valgrind client requests in debug builds"
  ),
  ...flagPair(
    "-fsanitize-c",
    "-fno-sanitize-c",
    "Enable C undefined behavior detection in unsafe builds",
    "Disable C undefined behavior detection in safe builds",
    {
      requiresSeparator: "=",
      args: {
        name: "mode",
        isOptional: true,
        suggestions: [
          {
            name: "trap",
            description: "Insert trap instructions on undefined behavior",
          },
          {
            name: "full",
            description: "(Default) Insert runtime calls on undefined behavior",
          },
        ],
      },
    }
  ),
  ...flagPair(
    "-fsanitize-thread",
    "-fno-sanitize-thread",
    "Enable Thread Sanitizer",
    "Disable Thread Sanitizer"
  ),
  ...flagPair(
    "-ffuzz",
    "-fno-fuzz",
    "Enable fuzz testing instrumentation",
    "Disable fuzz testing instrumentation"
  ),
  ...flagPair(
    "-fbuiltin",
    "-fno-builtin",
    "Enable implicit builtin knowledge of functions",
    "Disable implicit builtin knowledge of functions"
  ),
  {
    name: "-funwind-tables",
    description: "Always produce unwind table entries for all functions",
    exclusiveOn: ["-fasync-unwind-tables", "-fno-unwind-tables"],
  },
  {
    name: "-fasync-unwind-tables",
    description:
      "Always produce asynchronous unwind table entries for all functions",
    exclusiveOn: ["-funwind-tables", "-fno-unwind-tables"],
  },
  {
    name: "-fno-unwind-tables",
    description: "Never produce unwind table entries",
    exclusiveOn: ["-funwind-tables", "-fasync-unwind-tables"],
  },
  ...flagPair(
    "-ferror-tracing",
    "-fno-error-tracing",
    "Enable error tracing in release builds",
    "Disable error tracing in debug builds"
  ),
  ...flagPair(
    "-fsingle-threaded",
    "-fno-single-threaded",
    "Code assumes there is only one thread",
    "Code may not assume there is only one thread"
  ),
  ...flagPair(
    "-fstrip",
    "-fno-strip",
    "Omit debug symbols",
    "Keep debug symbols"
  ),
  {
    name: "-idirafter",
    description: "Add directory to AFTER include search path",
    args: {
      name: "dir",
      template: "folders",
    },
    isRepeatable: true,
  },
  {
    name: "-isystem",
    description: "Add directory to SYSTEM include search path",
    args: {
      name: "dir",
      template: "folders",
    },
    isRepeatable: true,
  },
  {
    name: "-I",
    description: "Add directory to include search path",
    insertValue: "-I{cursor}",
    isRepeatable: true,
  },
  equalsOption(
    "--embed-dir",
    "Add directory to embed search path",
    { name: "dir", template: "folders" },
    { isRepeatable: true }
  ),
  {
    name: "-D",
    description: "Define C [macro] to [value] (1 if [value] omitted)",
    insertValue: "-D{cursor}",
    isRepeatable: true,
  },
  {
    name: "-cflags",
    description: "Set extra flags for the next positional C source files",
    insertValue: "-cflags {cursor} --",
    isRepeatable: true,
  },
  {
    name: "-rcflags",
    description: "Set extra flags for the next positional .rc source files",
    insertValue: "-rcflags {cursor} --",
    isRepeatable: true,
  },
  equalsOption(
    "-rcincludes",
    "Set the type of includes to use when compiling .rc source files",
    {
      name: "type",
      suggestions: [
        {
          name: "any",
          description: "(default) Use msvc if available, fall back to gnu",
        },
        {
          name: "msvc",
          description: "Use msvc include paths (must be present on the system)",
        },
        {
          name: "gnu",
          description: "Use mingw include paths (distributed with Zig)",
        },
        {
          name: "none",
          description: "Do not use any autodetected include paths",
        },
      ],
    }
  ),
];

const globalLinkOptions: Fig.Option[] = [
  {
    name: ["-T", "--script"],
    description: "Use a custom linker script",
    args: {
      name: "script",
      template: "filepaths",
    },
  },
  {
    name: "--version-script",
    description: "Provide a version .map file",
    args: {
      name: "path",
      template: "filepaths",
    },
  },
  ...flagPair(
    "--undefined-version",
    "--no-undefined-version",
    "Allow version scripts to refer to undefined symbols",
    "(default) Disallow version scripts from referring to undefined symbols"
  ),
  ...flagPair(
    "--enable-new-dtags",
    "--disable-new-dtags",
    "Use the new behavior for dynamic tags (RUNPATH)",
    "Use the old behavior for dynamic tags (RPATH)"
  ),
  {
    name: "--dynamic-linker",
    description: "Set the dynamic interpreter path (usually ld.so)",
    exclusiveOn: ["--no-dynamic-linker"],
    args: {
      name: "path",
      template: "filepaths",
    },
  },
  {
    name: "--no-dynamic-linker",
    description: "Do not set any dynamic interpreter path",
    exclusiveOn: ["--dynamic-linker"],
  },
  sysrootOption,
  {
    name: "--version",
    description: "Dynamic library semver",
    args: {
      name: "ver",
    },
  },
  ...flagPair(
    "-fentry",
    "-fno-entry",
    "Enable entry point with default symbol name, or override the symbol name with -fentry=name",
    "Do not output any entry point",
    {
      requiresSeparator: "=",
      args: { name: "name", isOptional: true },
    }
  ),
  {
    name: "--force_undefined",
    description: "Specify the symbol must be defined for the link to succeed",
    args: {
      name: "name",
    },
    isRepeatable: true,
  },
  ...flagPair(
    "-fsoname",
    "-fno-soname",
    "Override the default SONAME value",
    "Disable emitting a SONAME",
    {
      requiresSeparator: "=",
      args: { name: "name", isOptional: true },
    }
  ),
  ...flagPair(
    "-flld",
    "-fno-lld",
    "Force using LLD as the linker",
    "Prevent using LLD as the linker"
  ),
  ...flagPair(
    "-fcompiler-rt",
    "-fno-compiler-rt",
    "Always include compiler-rt symbols in output",
    "Prevent including compiler-rt symbols in output"
  ),
  ...flagPair(
    "-fubsan-rt",
    "-fno-ubsan-rt",
    "Always include ubsan-rt symbols in the output",
    "Prevent including ubsan-rt symbols in the output"
  ),
  {
    name: "-rdynamic",
    description: "Add all symbols to the dynamic symbol table",
  },
  ...flagPair(
    "-feach-lib-rpath",
    "-fno-each-lib-rpath",
    "Ensure adding rpath for each used dynamic library",
    "Prevent adding rpath for each used dynamic library"
  ),
  ...flagPair(
    "-fallow-shlib-undefined",
    "-fno-allow-shlib-undefined",
    "Allows undefined symbols in shared libraries",
    "Disallows undefined symbols in shared libraries"
  ),
  ...allowSoScriptsOptions,
  buildIdOption,
  ...flagPair(
    "--eh-frame-hdr",
    "--no-eh-frame-hdr",
    "Enable C++ exception handling by passing --eh-frame-hdr to linker",
    "Disable C++ exception handling by passing --no-eh-frame-hdr to linker"
  ),
  {
    name: "--emit-relocs",
    description: "Enable output of relocation sections for post build tools",
  },
  {
    name: "-z",
    description: "Set linker extension flags",
    isRepeatable: true,
    args: {
      name: "arg",
      suggestions: [
        {
          name: "nodelete",
          description:
            "Indicate that the object cannot be deleted from a process",
        },
        {
          name: "notext",
          description: "Permit read-only relocations in read-only segments",
        },
        {
          name: "defs",
          description: "Force a fatal error if any undefined symbols remain",
        },
        { name: "undefs", description: "Reverse of -z defs" },
        {
          name: "origin",
          description:
            "Indicate that the object must have its origin processed",
        },
        {
          name: "nocopyreloc",
          description: "Disable the creation of copy relocations",
        },
        {
          name: "now",
          description:
            "(default) Force all relocations to be processed on load",
        },
        {
          name: "lazy",
          description: "Don't force all relocations to be processed on load",
        },
        {
          name: "relro",
          description:
            "(default) Force all relocations to be read-only after processing",
        },
        {
          name: "norelro",
          description:
            "Don't force all relocations to be read-only after processing",
        },
        {
          name: "common-page-size",
          insertValue: "common-page-size=",
          description: "Set the common page size for ELF binaries, as bytes",
        },
        {
          name: "max-page-size",
          insertValue: "max-page-size=",
          description: "Set the max page size for ELF binaries, as bytes",
        },
      ],
    },
  },
  {
    name: "-dynamic",
    description: "Force output to be dynamically linked",
    exclusiveOn: ["-static"],
  },
  {
    name: "-static",
    description: "Force output to be statically linked",
    exclusiveOn: ["-dynamic"],
  },
  {
    name: "-Bsymbolic",
    description: "Bind global references locally",
  },
  equalsOption(
    "--compress-debug-sections",
    "Debug section compression settings",
    {
      name: "e",
      suggestions: [
        { name: "none", description: "No compression" },
        { name: "zlib", description: "Compression with deflate/inflate" },
        { name: "zstd", description: "Compression with zstandard" },
      ],
    }
  ),
  ...flagPair(
    "--gc-sections",
    "--no-gc-sections",
    "Force removal of functions and data that are unreachable by the entry point or exported symbols",
    "Don't force removal of unreachable functions and data"
  ),
  equalsOption(
    "--sort-section",
    "Sort wildcard section patterns by 'name' or 'alignment'",
    {
      name: "value",
      suggestions: ["name", "alignment"],
    }
  ),
  {
    name: "--subsystem",
    description: "(Windows) /SUBSYSTEM:<subsystem> to the linker",
    args: {
      name: "subsystem",
    },
  },
  {
    name: "--stack",
    description: "Override default stack size",
    args: {
      name: "size",
    },
  },
  {
    name: "--image-base",
    description: "Set base address for executable image",
    args: {
      name: "addr",
    },
  },
  equalsOption("-install_name", "(Darwin) add dylib's install name", {
    name: "value",
  }),
  {
    name: "--entitlements",
    description:
      "(Darwin) add path to entitlements file for embedding in code signature",
    args: {
      name: "path",
      template: "filepaths",
    },
  },
  {
    name: "-pagezero_size",
    description:
      "(Darwin) size of the __PAGEZERO segment in hexadecimal notation",
    args: {
      name: "value",
    },
  },
  {
    name: "-headerpad",
    description:
      "(Darwin) set minimum space for future expansion of the load commands in hexadecimal notation",
    args: {
      name: "value",
    },
  },
  {
    name: "-headerpad_max_install_names",
    description: "(Darwin) set enough space as if all paths were MAXPATHLEN",
  },
  {
    name: "-dead_strip",
    description:
      "(Darwin) remove functions and data that are unreachable by the entry point or exported symbols",
  },
  {
    name: "-dead_strip_dylibs",
    description:
      "(Darwin) remove dylibs that are unreachable by the entry point or exported symbols",
  },
  {
    name: "-ObjC",
    description:
      "(Darwin) force load all members of static archives that implement an Objective-C class or category",
  },
  {
    name: "--import-memory",
    description: "(WebAssembly) import memory from the environment",
  },
  {
    name: "--export-memory",
    description:
      "(WebAssembly) export memory to the host (Default unless --import-memory used)",
  },
  {
    name: "--import-symbols",
    description:
      "(WebAssembly) import missing symbols from the host environment",
  },
  {
    name: "--import-table",
    description:
      "(WebAssembly) import function table from the host environment",
  },
  {
    name: "--export-table",
    description: "(WebAssembly) export function table to the host environment",
  },
  {
    name: "--growable-table",
    description:
      "(WebAssembly) remove maximum size from function table, allowing table to grow",
  },
  equalsOption(
    "--initial-memory",
    "(WebAssembly) initial size of the linear memory",
    { name: "bytes" }
  ),
  equalsOption(
    "--max-memory",
    "(WebAssembly) maximum size of the linear memory",
    { name: "bytes" }
  ),
  {
    name: "--shared-memory",
    description: "(WebAssembly) use shared linear memory",
  },
  equalsOption(
    "--global-base",
    "(WebAssembly) where to start to place global data",
    { name: "addr" }
  ),
];

const perModuleLinkOptions: Fig.Option[] = [
  {
    name: ["-l", "--library"],
    description: "Link against system library (only if actually used)",
    args: {
      name: "lib",
    },
    isRepeatable: true,
  },
  {
    name: ["-needed-l", "--needed-library"],
    description: "Link against system library (even if unused)",
    args: {
      name: "lib",
    },
    isRepeatable: true,
  },
  {
    name: ["-weak-l", "-weak_library"],
    description:
      "Link against system library marking it and all referenced symbols as weak",
    args: {
      name: "lib",
    },
    isRepeatable: true,
  },
  {
    name: ["-L", "--library-directory"],
    description: "Add a directory to the library search path",
    args: {
      name: "dir",
      template: "folders",
    },
    isRepeatable: true,
  },
  {
    name: "-search_paths_first",
    description:
      "For each library search path, check for dynamic lib then static lib before proceeding to next path",
  },
  {
    name: "-search_paths_first_static",
    description:
      "For each library search path, check for static lib then dynamic lib before proceeding to next path",
  },
  {
    name: "-search_dylibs_first",
    description:
      "Search for dynamic libs in all library search paths, then static libs",
  },
  {
    name: "-search_static_first",
    description:
      "Search for static libs in all library search paths, then dynamic libs",
  },
  {
    name: "-search_dylibs_only",
    description: "Only search for dynamic libs",
  },
  {
    name: "-search_static_only",
    description: "Only search for static libs",
  },
  {
    name: "-rpath",
    description: "Add directory to the runtime library search path",
    args: {
      name: "path",
      template: "folders",
    },
    isRepeatable: true,
  },
  {
    name: "-framework",
    description: "(Darwin) link against framework",
    args: {
      name: "name",
    },
    isRepeatable: true,
  },
  {
    name: "-needed_framework",
    description: "(Darwin) link against framework (even if unused)",
    args: {
      name: "name",
    },
    isRepeatable: true,
  },
  {
    name: "-needed_library",
    description: "(Darwin) link against system library (even if unused)",
    args: {
      name: "lib",
    },
    isRepeatable: true,
  },
  {
    name: "-weak_framework",
    description:
      "(Darwin) link against framework and mark it and all referenced symbols as weak",
    args: {
      name: "name",
    },
    isRepeatable: true,
  },
  {
    name: "-F",
    description: "(Darwin) add search path for frameworks",
    insertValue: "-F{cursor}",
    isRepeatable: true,
  },
  equalsOption(
    "--export",
    "(WebAssembly) Force a symbol to be exported",
    { name: "value" },
    { isRepeatable: true }
  ),
];

const testOptions: Fig.Option[] = [
  {
    name: "--test-filter",
    description: "Skip tests that do not match any filter",
    args: {
      name: "text",
    },
    isRepeatable: true,
  },
  {
    name: "--test-cmd",
    description: "Specify test execution command one arg at a time",
    args: {
      name: "arg",
    },
    isRepeatable: true,
  },
  {
    name: "--test-cmd-bin",
    description: "Appends test binary path to test cmd args",
  },
  {
    name: "--test-no-exec",
    description: "Compiles test binary without running it",
  },
  {
    name: "--test-runner",
    description: "Specify a custom test runner",
    args: {
      name: "path",
      template: "filepaths",
    },
  },
  {
    name: "--test-execve",
    description:
      "Runs the test binary with execve if available instead of as a child process",
  },
];

const debugOptions: Fig.Option[] = [
  equalsOption(
    "-fopt-bisect-limit",
    "Only run [limit] first LLVM optimization passes",
    { name: "limit" }
  ),
  {
    name: "-fstack-report",
    description: "Print stack size diagnostics",
  },
  {
    name: "--verbose-link",
    description: "Display linker invocations",
  },
  {
    name: "--verbose-cc",
    description: "Display C compiler invocations",
  },
  {
    name: "--verbose-air",
    description: "Enable compiler debug output for Zig AIR",
  },
  {
    name: "--verbose-intern-pool",
    description: "Enable compiler debug output for InternPool",
  },
  {
    name: "--verbose-generic-instances",
    description: "Enable compiler debug output for generic instance generation",
  },
  {
    name: "--verbose-llvm-ir",
    description: "Enable compiler debug output for unoptimized LLVM IR",
    requiresSeparator: "=",
    args: { name: "path", template: "filepaths", isOptional: true },
  },
  equalsOption(
    "--verbose-llvm-bc",
    "Enable compiler debug output for unoptimized LLVM BC",
    { name: "path", template: "filepaths" }
  ),
  {
    name: "--verbose-cimport",
    description: "Enable compiler debug output for C imports",
  },
  {
    name: "--verbose-llvm-cpu-features",
    description: "Enable compiler debug output for LLVM CPU features",
  },
  debugLogOption,
  {
    name: "--debug-compile-errors",
    description: "Crash with helpful diagnostics at the first compile error",
  },
  {
    name: "--debug-link-snapshot",
    description:
      "Dump linker state and output file information for troubleshooting",
  },
  {
    name: "--debug-rt",
    description: "Build compiler runtime libraries with [mode] optimization",
    requiresSeparator: "=",
    args: {
      name: "mode",
      isOptional: true,
      suggestions: ["debug", "safe", "fast", "small"],
    },
  },
  {
    name: "--debug-incremental",
    description: "Enable incremental compilation debug features",
  },
];

/** Options shared by build-exe, build-lib, build-obj, test, test-obj, run and translate-c */
const compileOptions: Fig.Option[] = [
  ...generalOptions,
  ...globalCompileOptions,
  ...perModuleCompileOptions,
  ...globalLinkOptions,
  ...perModuleLinkOptions,
  ...testOptions,
  ...debugOptions,
];

const sourceFilesArg: Fig.Arg = {
  name: "files",
  template: "filepaths",
  isVariadic: true,
};

/** `zig build` options that enable/disable a system integration for running foreign binaries */
const integrationOptions = (
  name: string,
  onDescription: string,
  offDescription: string
): Fig.Option[] =>
  flagPair(`-f${name}`, `-fno-${name}`, onDescription, offDescription).map(
    (option) => ({ ...option, priority: 25 })
  );

const buildOptions: Fig.Option[] = [
  // General Options
  {
    name: ["-h", "--help"],
    description: "Print this help to stdout and exit",
  },
  {
    name: ["-l", "--list-steps"],
    description: "Print available steps to stdout and exit",
  },
  {
    name: ["-p", "--prefix"],
    description: "Where to install files (default: zig-out)",
    args: {
      name: "path",
      template: "folders",
    },
  },
  {
    name: "--prefix-lib-dir",
    description: "Where to install libraries",
    args: {
      name: "path",
      template: "folders",
    },
  },
  {
    name: "--prefix-exe-dir",
    description: "Where to install executables",
    args: {
      name: "path",
      template: "folders",
    },
  },
  {
    name: "--prefix-include-dir",
    description: "Where to install C header files",
    args: {
      name: "path",
      template: "folders",
    },
  },
  {
    name: "--release",
    description:
      "Request release mode, optionally specifying a preferred optimization mode",
    requiresSeparator: "=",
    args: {
      name: "mode",
      isOptional: true,
      suggestions: ["fast", "safe", "small"],
    },
  },
  {
    name: "--verbose",
    description: "Print commands before executing them",
  },
  colorOption,
  {
    name: "--error-style",
    description: "Control how build errors are printed",
    args: {
      name: "style",
      suggestions: [
        {
          name: "verbose",
          description: "(Default) Report errors with full context",
        },
        {
          name: "minimal",
          description:
            "Report errors after summary, excluding context like command lines",
        },
        {
          name: "verbose_clear",
          description:
            "Like 'verbose', but clear the terminal at the start of each update",
        },
        {
          name: "minimal_clear",
          description:
            "Like 'minimal', but clear the terminal at the start of each update",
        },
      ],
    },
  },
  {
    name: "--multiline-errors",
    description: "Control how multi-line error messages are printed",
    args: {
      name: "style",
      suggestions: [
        {
          name: "indent",
          description:
            "(Default) Indent non-initial lines to align with initial line",
        },
        {
          name: "newline",
          description:
            "Include a leading newline so that the error message is on its own lines",
        },
        {
          name: "none",
          description: "Print as usual so the first line is misaligned",
        },
      ],
    },
  },
  {
    name: "--summary",
    description: "Control the printing of the build summary",
    args: {
      name: "mode",
      suggestions: [
        { name: "all", description: "Print the build summary in its entirety" },
        { name: "new", description: "Omit cached steps" },
        {
          name: "failures",
          description: "(Default if short-lived) Only print failed steps",
        },
        {
          name: "line",
          description:
            "(Default if long-lived) Only print the single-line summary",
        },
        { name: "none", description: "Do not print the build summary" },
      ],
    },
  },
  jobsOption,
  {
    name: "--maxrss",
    description: "Limit memory usage (default is to use available memory)",
    args: {
      name: "bytes",
    },
  },
  {
    name: "--skip-oom-steps",
    description: "Instead of failing, skip steps that would exceed --maxrss",
  },
  {
    name: "--test-timeout",
    description:
      "Limit execution time of unit tests, terminating if exceeded. The timeout must include a unit: ns, us, ms, s, m, h",
    args: {
      name: "timeout",
    },
  },
  {
    name: "--watch",
    description: "Continuously rebuild when source files are modified",
  },
  {
    name: "--debounce",
    description: "Delay before rebuilding after changed file detected",
    args: {
      name: "ms",
    },
  },
  {
    name: "--webui",
    description: "Enable the web interface on the given IP address",
    requiresSeparator: "=",
    args: { name: "ip", isOptional: true },
  },
  {
    name: "--fuzz",
    description:
      "Continuously search for unit test failures with an optional limit to the max number of iterations (accepts a K, M, or G suffix). Implies --webui when no limit is specified",
    requiresSeparator: "=",
    args: { name: "limit", isOptional: true },
  },
  {
    name: "--listen",
    description: "Enable the build server protocol on stdio",
    requiresSeparator: "=",
    args: {
      name: "-",
      description: "Standard input/output",
      suggestions: ["-"],
    },
  },
  {
    name: "--time-report",
    description:
      "Force full rebuild and provide detailed information on compilation time of Zig source code (implies --webui)",
  },
  ...incrementalOptions,

  // System Integration Options
  {
    name: "--search-prefix",
    description: "Add a path to look for binaries, libraries, headers",
    args: {
      name: "path",
      template: "folders",
    },
    isRepeatable: true,
  },
  sysrootOption,
  libcOption,
  {
    name: "--system",
    description: "Disable package fetching; enable all integrations",
    args: {
      name: "pkgdir",
      template: "folders",
    },
  },
  equalsOption(
    "-fsys",
    "Enable a system integration",
    { name: "name" },
    { isRepeatable: true }
  ),
  equalsOption(
    "-fno-sys",
    "Disable a system integration",
    { name: "name" },
    { isRepeatable: true }
  ),
  ...integrationOptions(
    "darling",
    "Integration with system-installed Darling to execute macOS programs on Linux hosts (default: no)",
    "Do not integrate with system-installed Darling"
  ),
  ...integrationOptions(
    "qemu",
    "Integration with system-installed QEMU to execute foreign-architecture programs on Linux hosts (default: no)",
    "Do not integrate with system-installed QEMU"
  ),
  {
    name: "--libc-runtimes",
    description:
      "Enhances QEMU integration by providing dynamic libc (e.g. glibc or musl) built for multiple foreign architectures, allowing execution of non-native programs that link with libc",
    args: {
      name: "path",
      template: "folders",
    },
    priority: 25,
  },
  {
    name: "--glibc-runtimes",
    description: "Old name of --libc-runtimes",
    deprecated: true,
    args: {
      name: "path",
      template: "folders",
    },
    priority: 25,
  },
  ...integrationOptions(
    "rosetta",
    "Rely on Rosetta to execute x86_64 programs on ARM64 macOS hosts (default: no)",
    "Do not rely on Rosetta"
  ),
  ...integrationOptions(
    "wasmtime",
    "Integration with system-installed wasmtime to execute WASI binaries (default: no)",
    "Do not integrate with system-installed wasmtime"
  ),
  ...integrationOptions(
    "wine",
    "Integration with system-installed Wine to execute Windows programs on Linux hosts (default: no)",
    "Do not integrate with system-installed Wine"
  ),

  // Package Management Options
  {
    name: "--fetch",
    description: "Fetch dependency tree (optionally choose laziness) and exit",
    requiresSeparator: "=",
    args: {
      name: "mode",
      isOptional: true,
      suggestions: [
        {
          name: "needed",
          description: "(Default) Lazy dependencies are fetched as needed",
        },
        { name: "all", description: "Lazy dependencies are always fetched" },
      ],
    },
  },
  {
    name: "--fork",
    description: "Override one or more projects from dependency tree",
    args: {
      name: "path",
      template: "folders",
    },
    isRepeatable: true,
  },

  // Project-Specific Options (defined by build.zig; these come from the standard option helpers)
  equalsOption("-Dtarget", "The CPU architecture, OS, and ABI to build for", {
    name: "target",
  }),
  equalsOption("-Dcpu", "Target CPU features to add or subtract", {
    name: "cpu",
  }),
  equalsOption("-Dofmt", "Target object format", { name: "fmt" }),
  equalsOption("-Ddynamic-linker", "Path to interpreter on the target system", {
    name: "path",
    template: "filepaths",
  }),
  equalsOption("-Doptimize", "Prioritize performance, safety, or binary size", {
    name: "mode",
    suggestions: ["debug", "safe", "fast", "small"],
  }),

  // Advanced Options
  ...referenceTraceOptions,
  ...allowSoScriptsOptions,
  errorLimitOption,
  {
    name: "--build-file",
    description: "Override path to build.zig",
    args: {
      name: "file",
      template: "filepaths",
    },
    priority: 20,
  },
  cacheDirOption,
  equalsOption(
    "--zig-lib",
    "Override path to Zig lib directory",
    { name: "path", template: "folders" },
    { priority: 20 }
  ),
  equalsOption(
    "--seed",
    "For shuffling dependency traversal order (default: random)",
    { name: "integer" }
  ),
  cachePoisonOption,
  {
    name: "--print-configuration",
    description: "Render configuration as .zon to stdout",
  },
  {
    name: "--print-configuration-path",
    description: "Print the path to the binary configuration file to stdout",
  },
  buildIdOption,
  debugLogOption,
  {
    name: "--debug-pkg-config",
    description: "Fail if unknown pkg-config flags encountered",
  },
  {
    name: "--verbose-link",
    description: "Enable compiler debug output for linking",
    priority: 20,
  },
  {
    name: "--verbose-air",
    description: "Enable compiler debug output for Zig AIR",
    priority: 20,
  },
  {
    name: "--verbose-llvm-ir",
    description: "Enable compiler debug output for LLVM IR",
    priority: 20,
  },
  {
    name: "--verbose-cc",
    description: "Enable compiler debug output for C compilation",
    priority: 20,
  },
];

const llvmOptions: Fig.Option[] = [
  ...(clangBase as Fig.Subcommand).options,
  helpOption,
];

const completionSpec: Fig.Spec = {
  name: "zig",
  parserDirectives: {
    flagsArePosixNoncompliant: true,
  },
  description:
    "Zig is a general-purpose programming language and toolchain for " +
    "maintaining robust, optimal, and reusable software",
  subcommands: [
    {
      name: "build",
      description: "Build project from build.zig",
      subcommands: [
        {
          name: "install",
          description: "Copy build artifacts to prefix path",
        },
        {
          name: "uninstall",
          description: "Remove build artifacts from prefix path",
        },
        {
          name: "run",
          description: "Run the app",
        },
        {
          name: "test",
          description: "Run unit tests",
        },
      ],
      options: buildOptions,
    },
    {
      name: "fetch",
      description: "Copy a package into global cache and print its hash",
      args: {
        name: "url or path",
        description:
          "A git+http(s) server URL, a tarball (with or without compression), a git bundle or a local path",
        template: "filepaths",
      },
      options: [
        helpOption,
        {
          name: "--cache-dir",
          description: "Override path to local cache directory",
          args: {
            name: "path",
            template: "folders",
          },
        },
        {
          name: "--pkg-dir",
          description: "Override path to local package directory",
          args: {
            name: "path",
            template: "folders",
          },
        },
        {
          name: "--debug-hash",
          description: "Print verbose hash information to stdout",
        },
        debugLogOption,
        {
          name: "--save",
          description:
            "Add the fetched package to build.zig.zon, optionally as the given name",
          requiresSeparator: "=",
          exclusiveOn: ["--save-exact"],
          args: { name: "name", isOptional: true },
        },
        {
          name: "--save-exact",
          description:
            "Add the fetched package to build.zig.zon, storing the URL verbatim, optionally as the given name",
          requiresSeparator: "=",
          exclusiveOn: ["--save"],
          args: { name: "name", isOptional: true },
        },
      ],
    },
    {
      name: "init",
      description: "Initialize a Zig package in the current directory",
      options: [
        {
          name: ["-m", "--minimal"],
          description: "Use minimal init template",
        },
        helpOption,
      ],
    },
    {
      name: "build-exe",
      description: "Create executable from source or object files",
      options: compileOptions,
      args: sourceFilesArg,
    },
    {
      name: "build-lib",
      description: "Create library from source or object files",
      options: compileOptions,
      args: sourceFilesArg,
    },
    {
      name: "build-obj",
      description: "Create object from source or object files",
      options: compileOptions,
      args: sourceFilesArg,
    },
    {
      name: "test",
      description: "Perform unit testing",
      options: compileOptions,
      args: sourceFilesArg,
    },
    {
      name: "test-obj",
      description: "Create object for unit testing",
      options: compileOptions,
      args: sourceFilesArg,
    },
    {
      name: "run",
      description: "Create executable and run immediately",
      options: compileOptions,
      args: sourceFilesArg,
    },
    {
      name: "ast-check",
      description:
        "Look for simple compile errors in any set of files, without target information or type checking. If file is omitted, stdin is used",
      args: {
        name: "file",
        template: "filepaths",
        isOptional: true,
      },
      options: [
        helpOption,
        colorOption,
        {
          name: "--zon",
          description:
            "Treat the input file as ZON, regardless of file extension",
        },
        {
          name: "-t",
          description: "(debug option) Output ZIR in text form to stdout",
        },
      ],
    },
    {
      name: "fmt",
      description: "Reformat Zig source into canonical form",
      args: {
        name: "files",
        template: ["filepaths", "folders"],
        isVariadic: true,
      },
      options: [
        helpOption,
        colorOption,
        {
          name: "--stdin",
          description: "Format code from stdin; output to stdout",
        },
        {
          name: "--check",
          description:
            "List non-conforming files and exit with an error if the list is non-empty",
        },
        {
          name: "--ast-check",
          description: "Run zig ast-check on every file",
        },
        {
          name: "--exclude",
          description: "Exclude file or directory from formatting",
          args: {
            name: "file",
            template: ["filepaths", "folders"],
          },
          isRepeatable: true,
        },
        {
          name: "--zon",
          description:
            "Treat all input files as ZON, regardless of file extension",
        },
        {
          name: "--complexity",
          description:
            "Print a complexity report for each file as well as total",
        },
      ],
    },
    {
      name: "reduce",
      description: "Minimize a bug report",
      args: [
        {
          name: "checker",
          description:
            "Executable that exits with 0 if the input is interesting, 1 if unknown and anything else if not interesting",
          template: "filepaths",
        },
        {
          name: "root_source_file.zig",
          description: "Relative to --main-mod-path",
          template: "filepaths",
        },
      ],
      options: [
        helpOption,
        equalsOption("--seed", "Override the random seed. Defaults to 0", {
          name: "integer",
        }),
        {
          name: "--skip-smoke-test",
          description: "Skip interestingness check smoke test",
        },
        {
          name: "--mod",
          description:
            "Make a module available for dependency under the given name, as name:deps:src",
          args: {
            name: "name:deps:src",
          },
          isRepeatable: true,
        },
        {
          name: "--deps",
          description:
            "Set dependency names for the root package, as a comma-separated list of [import=]name",
          args: {
            name: "deps",
          },
        },
        {
          name: "--main-mod-path",
          description: "Set the directory of the root module",
          args: {
            name: "path",
            template: "folders",
          },
        },
      ],
    },
    {
      name: "translate-c",
      description: "Convert C code to Zig code",
      options: compileOptions,
      args: {
        name: "file",
        template: "filepaths",
      },
    },
    {
      name: "ar",
      description: "Combine object files into static archive (LLVM Archiver)",
      args: [
        {
          name: "operation",
          description: "Operation with optional modifiers, e.g. rcs",
          suggestions: [
            { name: "d", description: "Delete files from the archive" },
            { name: "m", description: "Move files in the archive" },
            {
              name: "p",
              description: "Print contents of files found in the archive",
            },
            { name: "q", description: "Quick append files to the archive" },
            {
              name: "r",
              description: "Replace or insert files into the archive",
            },
            { name: "s", description: "Act as ranlib" },
            { name: "t", description: "Display list of files in archive" },
            { name: "x", description: "Extract files from the archive" },
            { name: "rcs", description: "Create or update an indexed archive" },
          ],
        },
        {
          name: "archive",
          template: "filepaths",
        },
        {
          name: "files",
          template: "filepaths",
          isVariadic: true,
          isOptional: true,
        },
      ],
      options: [
        helpOption,
        equalsOption("--format", "Archive format to create", {
          name: "format",
          suggestions: [
            { name: "default", description: "Default" },
            { name: "gnu", description: "GNU" },
            { name: "darwin", description: "Darwin" },
            { name: "bsd", description: "BSD" },
            { name: "bigarchive", description: "Big archive (AIX OS)" },
            { name: "coff", description: "COFF" },
          ],
        }),
        equalsOption("--plugin", "Ignored for compatibility", {
          name: "string",
        }),
        {
          name: "--output",
          description: "The directory to extract archive members to",
          args: {
            name: "dir",
            template: "folders",
          },
        },
        {
          name: "--rsp-quoting",
          description: "Quoting style for response files",
          args: {
            name: "style",
            suggestions: ["posix", "windows"],
          },
        },
        {
          name: "--thin",
          description: "Create a thin archive",
        },
        {
          name: "--version",
          description: "Print the version and exit",
        },
        {
          name: "-X",
          description: "Object mode (only for AIX OS)",
          insertValue: "-X{cursor}",
        },
      ],
    },
    {
      name: "cc",
      description: "Use Zig as a drop-in C compiler",
      options: llvmOptions,
      args: {
        name: "file",
        isVariadic: true,
        template: "filepaths",
      },
    },
    {
      name: "c++",
      description: "Use Zig as a drop-in C++ compiler",
      options: llvmOptions,
      args: {
        name: "file",
        isVariadic: true,
        template: "filepaths",
      },
    },
    {
      name: "dlltool",
      description: "Use Zig as a drop-in dlltool.exe",
      args: {
        name: "file",
        template: "filepaths",
        isVariadic: true,
        isOptional: true,
      },
      options: [
        {
          name: ["-m", "--machine"],
          description: "Set target machine",
          args: {
            name: "value",
            suggestions: ["i386", "i386:x86-64", "arm", "arm64"],
          },
        },
        {
          name: ["-l", "--output-lib"],
          description: "Generate an import lib",
          args: {
            name: "value",
            template: "filepaths",
          },
        },
        {
          name: ["-D", "--dllname"],
          description: "Specify the input DLL Name",
          args: {
            name: "value",
          },
        },
        {
          name: ["-d", "--input-def"],
          description: "Input .def File",
          args: {
            name: "value",
            template: "filepaths",
          },
        },
        {
          name: ["-N", "--input-native-def"],
          description: "Input native .def File on ARM64EC",
          args: {
            name: "value",
            template: "filepaths",
          },
        },
        {
          name: ["-k", "--kill-at"],
          description: "Kill @n Symbol from export",
        },
        {
          name: "--no-leading-underscore",
          description: "Don't add leading underscores on symbols",
        },
        {
          name: ["-I", "--identify"],
          description: "Identify DLL name from import library",
          args: {
            name: "value",
            template: "filepaths",
          },
        },
        {
          name: "--identify-strict",
          description:
            "Error out if the --identify option detects more than one DLL",
        },
        {
          name: ["-S", "--as"],
          description: "Assembler (ignored)",
          args: {
            name: "value",
          },
        },
        {
          name: ["-f", "--as-flags"],
          description: "Assembler flags (ignored)",
          args: {
            name: "value",
          },
        },
        {
          name: ["-t", "--temp-prefix"],
          description: "Prefix for temporary files (ignored)",
          args: {
            name: "value",
          },
        },
      ],
    },
    {
      name: "lib",
      description: "Use Zig as a drop-in lib.exe",
      parserDirectives: {
        flagsArePosixNoncompliant: true,
        optionArgSeparators: ":",
      },
      args: {
        name: "file",
        template: "filepaths",
        isVariadic: true,
        isOptional: true,
      },
      options: [
        {
          name: ["/help", "/?"],
          description: "Print help and exit",
        },
        {
          name: "/ignore",
          description: "Specify warning codes to ignore",
          requiresSeparator: ":",
          args: { name: "codes" },
        },
        {
          name: "/libpath",
          description: "Object file search path",
          requiresSeparator: ":",
          args: { name: "dir", template: "folders" },
        },
        {
          name: "/list",
          description: "List contents of .lib file on stdout",
        },
        {
          name: "/out",
          description: "Path to file to write output",
          requiresSeparator: ":",
          args: { name: "path", template: "filepaths" },
        },
        {
          name: "/def",
          description: "Def file to use to generate import library",
          requiresSeparator: ":",
          args: { name: "file", template: "filepaths" },
        },
        {
          name: "/defArm64Native",
          description:
            "Def file to use to generate native ARM64 symbols in ARM64EC import library",
          requiresSeparator: ":",
          args: { name: "file", template: "filepaths" },
        },
        {
          name: "/llvmlibthin",
          description:
            "Make .lib point to .obj files instead of copying their contents",
        },
        {
          name: "/llvmlibindex",
          description:
            "Write an index to the output (default); use :no to not write one",
          requiresSeparator: ":",
          args: { name: "no", isOptional: true, suggestions: ["no"] },
        },
        {
          name: "/llvmlibempty",
          description: "When given no contents, produce an empty .lib file",
        },
        {
          name: "/machine",
          description: "Specify target platform",
          requiresSeparator: ":",
          args: { name: "platform" },
        },
        {
          name: "/WX",
          description:
            "Treat warnings as errors; use :no to not treat them as errors (default)",
          requiresSeparator: ":",
          args: { name: "no", isOptional: true, suggestions: ["no"] },
        },
      ],
    },
    {
      name: "objcopy",
      description: "Manipulate executables and relocatables",
      args: [
        {
          name: "input",
          template: "filepaths",
        },
        {
          name: "output",
          template: "filepaths",
        },
      ],
      options: [
        helpOption,
        {
          name: ["-O", "--output-target"],
          description: "Format of the output file",
          args: {
            name: "value",
            suggestions: [
              "binary",
              "c",
              "coff",
              "elf",
              "hex",
              "macho",
              "plan9",
              "raw",
              "spirv",
              "wasm",
            ],
          },
        },
        {
          name: ["-j", "--only-section"],
          description: "Remove all but the given section",
          args: {
            name: "section",
          },
        },
        {
          name: "--pad-to",
          description: "Pad the last section up to the given address",
          args: {
            name: "addr",
          },
        },
        {
          name: ["-g", "--strip-debug"],
          description: "Remove all debug sections from the output",
        },
        {
          name: ["-S", "--strip-all"],
          description:
            "Remove all debug sections and symbol table from the output",
        },
        {
          name: "--only-keep-debug",
          description:
            "Strip a file, removing contents of any sections that would not be stripped by --strip-debug and leaving the debugging sections intact",
        },
        {
          name: "--add-gnu-debuglink",
          description:
            "Creates a .gnu_debuglink section which contains a reference to the file and adds it to the output file",
          args: {
            name: "file",
            template: "filepaths",
          },
        },
        {
          name: "--extract-to",
          description:
            "Extract the removed sections into the file, and add a .gnu-debuglink section",
          args: {
            name: "file",
            template: "filepaths",
          },
        },
        {
          name: "--compress-debug-sections",
          description: "Compress DWARF debug sections with zlib",
        },
        {
          name: "--set-section-alignment",
          description:
            "Set alignment of section <name> to <align> bytes. Must be a power of two",
          args: {
            name: "name=align",
          },
        },
        {
          name: "--set-section-flags",
          description:
            "Set flags of section <name> to <flags> represented as a comma separated set of flags",
          args: {
            name: "name=flags",
          },
        },
        {
          name: "--add-section",
          description:
            "Add file content from <file> with a new section named <name>",
          args: {
            name: "name=file",
          },
        },
      ],
    },
    {
      name: "objdump",
      description: "Print information about executables and relocatables",
      args: {
        name: "file",
        template: "filepaths",
      },
      options: [
        helpOption,
        {
          name: "--all-headers",
          description:
            "Alias for --file-headers --linker-member=2 --member-headers --section-headers --relocs --symbols",
        },
        {
          name: "--exports",
          description:
            "Display exported symbols. In the case of COFF import libraries, displays the symbol list and import headers",
          requiresSeparator: "=",
          args: {
            name: "sort",
            isOptional: true,
            description: "Sort the import headers by symbol name",
            suggestions: ["sort"],
          },
        },
        {
          name: "--file-headers",
          description: "Display file-format specific headers",
        },
        {
          name: "--imports",
          description: "Display imported symbols",
        },
        {
          name: "--linker-member",
          description:
            "(Coff) Display contents of the specified archive linker member (default 2)",
          requiresSeparator: "=",
          args: {
            name: "member",
            isOptional: true,
            suggestions: ["1", "2", "longnames"],
          },
        },
        {
          name: "--member-headers",
          description: "Display archive member headers",
        },
        equalsOption(
          "--elements",
          "Select which formatting elements are displayed. Intended for snapshot testing",
          {
            name: "elements",
            description:
              "Comma-separated list, prefix an element with - to remove it",
            suggestions: [
              { name: "file-type", description: "File type summary" },
              {
                name: "header-name",
                description: "Name that precedes a header block",
              },
              {
                name: "member-path",
                description:
                  "Display full member paths. If removed, only basenames will be used",
              },
              {
                name: "newlines",
                description: "Newlines between output sections",
              },
              {
                name: "table-header",
                description: "Table headers with column names",
              },
              { name: "all", description: "(default) All of the above" },
            ],
          }
        ),
        equalsOption(
          "--only-member",
          "Only consider archive members names that contain the name",
          { name: "name" },
          { isRepeatable: true }
        ),
        equalsOption(
          "--only-section",
          "Only consider section names that contain the name",
          { name: "name" },
          { isRepeatable: true }
        ),
        equalsOption(
          "--only-symbol",
          "Only consider symbol names that contain the name",
          { name: "name" },
          { isRepeatable: true }
        ),
        equalsOption(
          "--redact",
          "Redact the specified field kind. Intended for snapshot testing",
          {
            name: "kind",
            suggestions: [
              { name: "rva", description: "Relative virtual addresses" },
              { name: "va", description: "Virtual addresses and file offsets" },
              { name: "ord", description: "Symbol ordinals / hints" },
              { name: "size", description: "Sizes and lengths" },
              { name: "all", description: "All of the above" },
            ],
          }
        ),
        {
          name: "--relocs",
          description: "Display relocations",
        },
        {
          name: ["-s", "--snapshot"],
          description: "Alias for --redact=all --elements=-all",
        },
        {
          name: "--section-headers",
          description: "Display section headers",
        },
        {
          name: "--strings",
          description: "Display string tables",
        },
        {
          name: "--symbols",
          description: "Display symbol tables",
        },
        {
          name: "--tls",
          description: "Display TLS information",
        },
      ],
    },
    {
      name: "ranlib",
      description: "Use Zig as a drop-in ranlib",
      args: {
        name: "archive",
        template: "filepaths",
        isVariadic: true,
      },
      options: [
        helpOption,
        {
          name: ["-V", "--version"],
          description: "Display the version of this program",
        },
        {
          name: "-D",
          description: "Use zero for timestamps and uids/gids (default)",
          exclusiveOn: ["-U"],
        },
        {
          name: "-U",
          description: "Use actual timestamps and uids/gids",
          exclusiveOn: ["-D"],
        },
        {
          name: "-X",
          description:
            "Specify which archive symbol tables should be generated if they do not already exist (AIX OS only)",
          insertValue: "-X{cursor}",
        },
      ],
    },
    {
      name: "rc",
      description: "Use Zig as a drop-in rc.exe",
      args: [
        {
          name: "input",
          template: "filepaths",
        },
        {
          name: "output",
          template: "filepaths",
          isOptional: true,
        },
      ],
      options: [
        {
          name: ["/?", "/h"],
          description: "Print help and exit",
        },
        {
          name: "/v",
          description: "Verbose (print progress messages)",
        },
        {
          name: "/d",
          description: "Define a symbol (during preprocessing)",
          args: { name: "name[=value]" },
          isRepeatable: true,
        },
        {
          name: "/u",
          description: "Undefine a symbol (during preprocessing)",
          args: { name: "name" },
          isRepeatable: true,
        },
        {
          name: "/fo",
          description: "Specify output file path",
          args: { name: "path", template: "filepaths" },
        },
        {
          name: "/l",
          description: "Set default language using hexadecimal id (ex: 409)",
          args: { name: "id" },
        },
        {
          name: "/ln",
          description: "Set default language using language name (ex: en-us)",
          args: { name: "name" },
        },
        {
          name: "/i",
          description: "Add an include path",
          args: { name: "path", template: "folders" },
          isRepeatable: true,
        },
        {
          name: "/x",
          description: "Ignore INCLUDE environment variable",
        },
        {
          name: "/c",
          description: "Set default code page (ex: 65001)",
          args: { name: "code page" },
        },
        {
          name: "/w",
          description: "Warn on invalid code page in .rc (instead of error)",
        },
        {
          name: "/y",
          description: "Suppress warnings for duplicate control IDs",
        },
        {
          name: "/n",
          description: "Null-terminate all strings in string tables",
        },
        {
          name: "/sl",
          description:
            "Specify string literal length limit in percentage (1-100) where 100 corresponds to a limit of 8192. The default limit is 4097",
          args: { name: "percentage" },
        },
        {
          name: "/p",
          description: "Only run the preprocessor and output a .rcpp file",
        },
        {
          name: "/:no-preprocess",
          description: "Do not run the preprocessor",
        },
        {
          name: "/:debug",
          description: "Output the preprocessed .rc file and the parsed AST",
        },
        {
          name: "/:auto-includes",
          description: "Set the automatic include path detection behavior",
          args: {
            name: "value",
            suggestions: [
              {
                name: "any",
                description:
                  "(default) Use MSVC if available, fall back to MinGW",
              },
              {
                name: "msvc",
                description:
                  "Use MSVC include paths (must be present on the system)",
              },
              { name: "gnu", description: "Use MinGW include paths" },
              {
                name: "none",
                description: "Do not use any autodetected include paths",
              },
            ],
          },
        },
        {
          name: "/:depfile",
          description:
            "Output a file containing a list of all the files that the .rc includes or otherwise depends on",
          args: { name: "path", template: "filepaths" },
        },
        {
          name: "/:depfile-fmt",
          description: "Output format of the depfile, if /:depfile is set",
          args: {
            name: "value",
            suggestions: [
              {
                name: "json",
                description: "(default) A top-level JSON array of paths",
              },
            ],
          },
        },
        {
          name: "/:input-format",
          description: "If not specified, the input format is inferred",
          args: {
            name: "value",
            suggestions: [
              {
                name: "rc",
                description: "(default if input format cannot be inferred)",
              },
              {
                name: "res",
                description: "Compiled .rc file, implies /:output-format coff",
              },
              {
                name: "rcpp",
                description: "Preprocessed .rc file, implies /:no-preprocess",
              },
            ],
          },
        },
        {
          name: "/:output-format",
          description: "If not specified, the output format is inferred",
          args: {
            name: "value",
            suggestions: [
              {
                name: "res",
                description: "(default if output format cannot be inferred)",
              },
              {
                name: "coff",
                description: "COFF object file (extension: .obj or .o)",
              },
              {
                name: "rcpp",
                description: "Preprocessed .rc file, implies /p",
              },
            ],
          },
        },
        {
          name: "/:target",
          description:
            "Set the target machine for COFF object files, as a PE/COFF machine constant name (X64, ARM64, etc) or a Zig/LLVM CPU name (x86_64, aarch64, etc). The default is X64",
          args: { name: "arch" },
        },
      ],
    },
    {
      name: "env",
      description: "Print lib path, std path, cache directory, and version",
    },
    {
      name: "help",
      description: "Print help and exit",
    },
    {
      name: "cache-cat",
      description: "Print a zig-cache manifest file as zon",
      args: {
        name: "paths",
        template: "filepaths",
        isVariadic: true,
      },
      options: [helpOption],
    },
    {
      name: "std",
      description: "View standard library documentation in a browser",
      options: [
        helpOption,
        {
          name: ["-p", "--port"],
          description:
            "Port to listen on. Default is 0, meaning an ephemeral port chosen by the system",
          args: {
            name: "port",
          },
        },
        {
          name: "--open-browser",
          description:
            "Force enabling opening a browser tab to the served website (by default, enabled unless a port is specified)",
          exclusiveOn: ["--no-open-browser"],
        },
        {
          name: "--no-open-browser",
          description:
            "Force disabling opening a browser tab to the served website",
          exclusiveOn: ["--open-browser"],
        },
      ],
    },
    {
      name: "libc",
      description:
        "Detect the native libc installation and print the resulting paths to stdout, or validate a libc paths file",
      args: {
        name: "paths_file",
        description: "Parse a libc installation text file and validate it",
        template: "filepaths",
        isOptional: true,
      },
      options: [
        helpOption,
        {
          name: "-target",
          description: "<arch><sub>-<os>-<abi> see the targets command",
          args: {
            name: "name",
          },
        },
        {
          name: "-includes",
          description: "Print the libc include directories for the target",
        },
      ],
    },
    {
      name: "targets",
      description: "List available compilation targets",
    },
    {
      name: "version",
      description: "Print version number and exit",
    },
    {
      name: "zen",
      description: "Print Zen of Zig and exit",
    },
  ],
  options: [helpOption],
  args: {
    name: "files",
    template: "filepaths",
    isOptional: true,
  },
};
export default completionSpec;
