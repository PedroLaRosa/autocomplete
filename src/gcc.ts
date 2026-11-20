// GCC v16.2.0 (git tag releases/gcc-16.2.0 of gcc-mirror/gcc, same as the Homebrew gcc formula; DATESTAMP 20260807, i.e. released 2026-08-07; checked 2026-11-20). Source: that tag, read statically (the gcc binary was not run):
// gcc/common.opt, gcc/c-family/c.opt, gcc/params.opt, gcc/analyzer/analyzer.opt, gcc/lto/lang.opt, gcc/config/linux.opt, gcc/config/gnu-user.opt and gcc/config/i386/i386.opt for option names, argument kinds, enum values and --help text;
// gcc/doc/invoke.texi (plus cppopts.texi, cppdiropts.texi) for driver options, descriptions of options without --help text and the -march/-mtune CPU names.
// Scope: language-independent and C/Objective-C options plus the x86 back end's -m options. Other back ends and Fortran/D/Ada/Go-only options are left out; C++-only options live in src/g++.ts, which builds on gccBase.
// Left out on purpose: options GCC ignores or has removed, undocumented internal options, per-pass -fdump-rtl-*/-fdump-tree-* options (only the -all forms are listed), -fenable-*/-fdisable-*, deprecated -std aliases (c2x, c++2b, ...).
// Earlier versions of this spec were a copy of clang's option list; it has been regenerated from GCC's own option files.

const stdGccSuggestions: Fig.Suggestion[] = [
  { name: ["c90", "c89", "iso9899:1990"], description: "ISO C 1990" },
  { name: "iso9899:199409", description: "ISO C 1990 with amendment 1" },
  { name: ["c99", "iso9899:1999"], description: "ISO C 1999" },
  { name: ["c11", "iso9899:2011"], description: "ISO C 2011" },
  {
    name: ["c17", "c18", "iso9899:2017", "iso9899:2018"],
    description: "ISO C 2017",
  },
  { name: ["c23", "iso9899:2024"], description: "ISO C 2023" },
  { name: "c2y", description: "Next ISO C revision (experimental)" },
  { name: ["gnu90", "gnu89"], description: "GNU dialect of ISO C 1990" },
  { name: "gnu99", description: "GNU dialect of ISO C 1999" },
  { name: "gnu11", description: "GNU dialect of ISO C 2011" },
  { name: ["gnu17", "gnu18"], description: "GNU dialect of ISO C 2017" },
  { name: "gnu23", description: "GNU dialect of ISO C 2023 (C default)" },
  {
    name: "gnu2y",
    description: "GNU dialect of the next ISO C revision (experimental)",
  },
  { name: ["c++98", "c++03"], description: "ISO C++ 1998 with amendments" },
  {
    name: ["gnu++98", "gnu++03"],
    description: "GNU dialect of ISO C++ 1998",
  },
  { name: "c++11", description: "ISO C++ 2011 with amendments" },
  { name: "gnu++11", description: "GNU dialect of ISO C++ 2011" },
  { name: "c++14", description: "ISO C++ 2014 with amendments" },
  { name: "gnu++14", description: "GNU dialect of ISO C++ 2014" },
  { name: "c++17", description: "ISO C++ 2017 with amendments" },
  { name: "gnu++17", description: "GNU dialect of ISO C++ 2017" },
  { name: "c++20", description: "ISO C++ 2020 with amendments" },
  {
    name: "gnu++20",
    description: "GNU dialect of ISO C++ 2020 (C++ default)",
  },
  { name: "c++23", description: "ISO C++ 2023 (experimental)" },
  {
    name: "gnu++23",
    description: "GNU dialect of ISO C++ 2023 (experimental)",
  },
  { name: ["c++26", "c++2c"], description: "ISO C++ 2026 (experimental)" },
  {
    name: ["gnu++26", "gnu++2c"],
    description: "GNU dialect of ISO C++ 2026 (experimental)",
  },
];

export const stdOption: Fig.Option = {
  name: "-std",
  description: "Language standard to compile for",
  args: {
    name: "value",
    suggestions: stdGccSuggestions,
  },
  requiresSeparator: true,
};

const x86CpuTypes: string[] = [
  "native",
  "x86-64",
  "x86-64-v2",
  "x86-64-v3",
  "x86-64-v4",
  "i386",
  "i486",
  "i586",
  "pentium",
  "lakemont",
  "pentium-mmx",
  "pentiumpro",
  "i686",
  "pentium2",
  "pentium3",
  "pentium3m",
  "pentium-m",
  "pentium4",
  "pentium4m",
  "prescott",
  "nocona",
  "core2",
  "nehalem",
  "corei7",
  "westmere",
  "sandybridge",
  "corei7-avx",
  "ivybridge",
  "core-avx-i",
  "haswell",
  "core-avx2",
  "broadwell",
  "skylake",
  "skylake-avx512",
  "cascadelake",
  "cannonlake",
  "cooperlake",
  "icelake-client",
  "icelake-server",
  "tigerlake",
  "rocketlake",
  "alderlake",
  "raptorlake",
  "meteorlake",
  "gracemont",
  "arrowlake",
  "arrowlake-s",
  "lunarlake",
  "pantherlake",
  "wildcatlake",
  "novalake",
  "sapphirerapids",
  "emeraldrapids",
  "graniterapids",
  "graniterapids-d",
  "diamondrapids",
  "bonnell",
  "atom",
  "silvermont",
  "slm",
  "goldmont",
  "goldmont-plus",
  "tremont",
  "sierraforest",
  "grandridge",
  "clearwaterforest",
  "k6",
  "k6-2",
  "k6-3",
  "athlon",
  "athlon-tbird",
  "athlon-4",
  "athlon-xp",
  "athlon-mp",
  "k8",
  "opteron",
  "athlon64",
  "athlon-fx",
  "k8-sse3",
  "opteron-sse3",
  "athlon64-sse3",
  "amdfam10",
  "barcelona",
  "bdver1",
  "bdver2",
  "bdver3",
  "bdver4",
  "znver1",
  "znver2",
  "znver3",
  "znver4",
  "znver5",
  "znver6",
  "btver1",
  "btver2",
  "winchip-c6",
  "winchip2",
  "c3",
  "c3-2",
  "c7",
  "samuel-2",
  "nehemiah",
  "esther",
  "eden-x2",
  "eden-x4",
  "nano",
  "nano-1000",
  "nano-2000",
  "nano-3000",
  "nano-x2",
  "nano-x4",
  "lujiazui",
  "yongfeng",
  "shijidadao",
  "geode",
  "c86-4g-m4",
  "c86-4g-m6",
  "c86-4g-m7",
  "c86-4g-m8",
];

const x86TuneTypes: string[] = [
  "generic",
  "intel",
  "native",
  "x86-64",
  "i386",
  "i486",
  "i586",
  "pentium",
  "lakemont",
  "pentium-mmx",
  "pentiumpro",
  "i686",
  "pentium2",
  "pentium3",
  "pentium3m",
  "pentium-m",
  "pentium4",
  "pentium4m",
  "prescott",
  "nocona",
  "core2",
  "nehalem",
  "corei7",
  "westmere",
  "sandybridge",
  "corei7-avx",
  "ivybridge",
  "core-avx-i",
  "haswell",
  "core-avx2",
  "broadwell",
  "skylake",
  "skylake-avx512",
  "cascadelake",
  "cannonlake",
  "cooperlake",
  "icelake-client",
  "icelake-server",
  "tigerlake",
  "rocketlake",
  "alderlake",
  "raptorlake",
  "meteorlake",
  "gracemont",
  "arrowlake",
  "arrowlake-s",
  "lunarlake",
  "pantherlake",
  "wildcatlake",
  "novalake",
  "sapphirerapids",
  "emeraldrapids",
  "graniterapids",
  "graniterapids-d",
  "diamondrapids",
  "bonnell",
  "atom",
  "silvermont",
  "slm",
  "goldmont",
  "goldmont-plus",
  "tremont",
  "sierraforest",
  "grandridge",
  "clearwaterforest",
  "k6",
  "k6-2",
  "k6-3",
  "athlon",
  "athlon-tbird",
  "athlon-4",
  "athlon-xp",
  "athlon-mp",
  "k8",
  "opteron",
  "athlon64",
  "athlon-fx",
  "k8-sse3",
  "opteron-sse3",
  "athlon64-sse3",
  "amdfam10",
  "barcelona",
  "bdver1",
  "bdver2",
  "bdver3",
  "bdver4",
  "znver1",
  "znver2",
  "znver3",
  "znver4",
  "znver5",
  "znver6",
  "btver1",
  "btver2",
  "winchip-c6",
  "winchip2",
  "c3",
  "c3-2",
  "c7",
  "samuel-2",
  "nehemiah",
  "esther",
  "eden-x2",
  "eden-x4",
  "nano",
  "nano-1000",
  "nano-2000",
  "nano-3000",
  "nano-x2",
  "nano-x4",
  "lujiazui",
  "yongfeng",
  "shijidadao",
  "geode",
  "c86-4g-m4",
  "c86-4g-m6",
  "c86-4g-m7",
  "c86-4g-m8",
];

const paramSuggestions: Fig.Suggestion[] = [
  {
    name: "align-loop-iterations",
    insertValue: "align-loop-iterations=",
    description:
      "Loops iterating at least selected number of iterations get loop alignment",
  },
  {
    name: "align-threshold",
    insertValue: "align-threshold=",
    description:
      "Select fraction of the maximal frequency of executions of basic block in function given basic block get alignment",
  },
  {
    name: "analyzer-bb-explosion-factor",
    insertValue: "analyzer-bb-explosion-factor=",
    description:
      "The maximum number of 'after supernode' exploded nodes within the analyzer per supernode, before terminating analysis",
  },
  {
    name: "analyzer-max-constraints",
    insertValue: "analyzer-max-constraints=",
    description: "The maximum number of constraints per state",
  },
  {
    name: "analyzer-max-enodes-for-full-dump",
    insertValue: "analyzer-max-enodes-for-full-dump=",
    description:
      "The maximum depth of exploded nodes that should appear in a dot dump before switching to a less verbose format",
  },
  {
    name: "analyzer-max-enodes-per-program-point",
    insertValue: "analyzer-max-enodes-per-program-point=",
    description:
      "The maximum number of exploded nodes per program point within the analyzer, before terminating analysis of that point",
  },
  {
    name: "analyzer-max-infeasible-edges",
    insertValue: "analyzer-max-infeasible-edges=",
    description:
      "The maximum number of infeasible edges to reject before declaring a diagnostic as infeasible",
  },
  {
    name: "analyzer-max-recursion-depth",
    insertValue: "analyzer-max-recursion-depth=",
    description:
      "The maximum number of times a callsite can appear in a call stack within the analyzer, before terminating analysis of a call that would recurse deeper",
  },
  {
    name: "analyzer-max-svalue-depth",
    insertValue: "analyzer-max-svalue-depth=",
    description:
      "The maximum depth of a symbolic value, before approximating the value as unknown",
  },
  {
    name: "analyzer-min-snodes-for-call-summary",
    insertValue: "analyzer-min-snodes-for-call-summary=",
    description:
      "The minimum number of supernodes within a function for the analyzer to consider summarizing its effects at call sites",
  },
  {
    name: "analyzer-text-art-ideal-canvas-width",
    insertValue: "analyzer-text-art-ideal-canvas-width=",
    description:
      "The ideal width in characters of text art diagrams generated by the analyzer",
  },
  {
    name: "analyzer-text-art-string-ellipsis-head-len",
    insertValue: "analyzer-text-art-string-ellipsis-head-len=",
    description:
      "The number of literal bytes to show at the head of a string literal in text art when ellipsizing it",
  },
  {
    name: "analyzer-text-art-string-ellipsis-tail-len",
    insertValue: "analyzer-text-art-string-ellipsis-tail-len=",
    description:
      "The number of literal bytes to show at the tail of a string literal in text art when ellipsizing it",
  },
  {
    name: "analyzer-text-art-string-ellipsis-threshold",
    insertValue: "analyzer-text-art-string-ellipsis-threshold=",
    description:
      "The number of bytes at which to ellipsize string literals in analyzer text art diagrams",
  },
  {
    name: "asan-globals",
    insertValue: "asan-globals=",
    description: "Enable asan globals protection",
  },
  {
    name: "asan-instrument-allocas",
    insertValue: "asan-instrument-allocas=",
    description: "Enable asan allocas/VLAs protection",
  },
  {
    name: "asan-instrument-reads",
    insertValue: "asan-instrument-reads=",
    description: "Enable asan load operations protection",
  },
  {
    name: "asan-instrument-writes",
    insertValue: "asan-instrument-writes=",
    description: "Enable asan store operations protection",
  },
  {
    name: "asan-instrumentation-with-call-threshold",
    insertValue: "asan-instrumentation-with-call-threshold=",
    description:
      "Use callbacks instead of inline code if number of accesses in function becomes greater or equal to this number",
  },
  {
    name: "asan-kernel-mem-intrinsic-prefix",
    insertValue: "asan-kernel-mem-intrinsic-prefix=",
    description:
      "Prefix calls to memcpy, memset and memmove with __asan_ or __hwasan_ for -fsanitize=kernel-address or -fsanitize=kernel-hwaddress",
  },
  {
    name: "asan-memintrin",
    insertValue: "asan-memintrin=",
    description: "Enable asan builtin functions protection",
  },
  {
    name: "asan-stack",
    insertValue: "asan-stack=",
    description: "Enable asan stack protection",
  },
  {
    name: "asan-use-after-return",
    insertValue: "asan-use-after-return=",
    description: "Enable asan detection of use-after-return bugs",
  },
  {
    name: "auto-profile-bbs",
    insertValue: "auto-profile-bbs=",
    description: "Build basic block profile using auto profile",
  },
  {
    name: "auto-profile-reorder-only",
    insertValue: "auto-profile-reorder-only=",
    description: "Enable only function reordering with auto-profile",
  },
  {
    name: "avg-loop-niter",
    insertValue: "avg-loop-niter=",
    description: "Average number of iterations of a loop",
  },
  {
    name: "avoid-fma-max-bits",
    insertValue: "avoid-fma-max-bits=",
    description: "Maximum number of bits for which we avoid creating FMAs",
  },
  {
    name: "builtin-expect-probability",
    insertValue: "builtin-expect-probability=",
    description:
      "Set the estimated probability in percentage for builtin expect. The default value is 90% probability",
  },
  {
    name: "builtin-string-cmp-inline-length",
    insertValue: "builtin-string-cmp-inline-length=",
    description:
      "The maximum length of a constant string for a builtin string comparison call eligible for inlining. The default value is 3",
  },
  {
    name: "case-values-threshold",
    insertValue: "case-values-threshold=",
    description:
      "The smallest number of different values for which it is best to use a jump-table instead of a tree of conditional branches. If 0, use the default for the machine",
  },
  {
    name: "comdat-sharing-probability",
    insertValue: "comdat-sharing-probability=",
    description:
      "Probability that COMDAT function is shared with a different compilation unit",
  },
  {
    name: "constructive-interference-size",
    insertValue: "constructive-interference-size=",
    description:
      "The maximum recommended size of contiguous memory occupied by two objects accessed with temporal locality by concurrent threads. Typically the L1 cache line size, but can be smaller to accommodate a variety of target processors with different cache line sizes",
  },
  {
    name: "cxx-max-namespaces-for-diagnostic-help",
    insertValue: "cxx-max-namespaces-for-diagnostic-help=",
    description:
      "Maximum number of namespaces to search for alternatives when name lookup fails",
  },
  {
    name: "cycle-accurate-model",
    insertValue: "cycle-accurate-model=",
    description:
      "Whether the scheduling description is mostly a cycle-accurate model of the target processor and is likely to spill aggressively to fill any pipeline bubbles",
  },
  {
    name: "destructive-interference-size",
    insertValue: "destructive-interference-size=",
    description:
      "The minimum recommended offset between two concurrently-accessed objects to avoid additional performance degradation due to contention introduced by the implementation. Typically the L1 cache line size, but can be larger to accommodate a variety of target processors with different cache line sizes. C++17 code might use this value in structure layout, but is strongly discouraged from doing so in public ABIs",
  },
  {
    name: "dse-max-alias-queries-per-store",
    insertValue: "dse-max-alias-queries-per-store=",
    description: "Maximum number of queries into the alias oracle per store",
  },
  {
    name: "dse-max-object-size",
    insertValue: "dse-max-object-size=",
    description:
      "Maximum size (in bytes) of objects tracked bytewise by dead store elimination",
  },
  {
    name: "early-inlining-insns",
    insertValue: "early-inlining-insns=",
    description:
      "Maximal estimated growth of function body caused by early inlining of single call",
  },
  {
    name: "file-cache-files",
    insertValue: "file-cache-files=",
    description: "Maximum number of files in the file cache",
  },
  {
    name: "file-cache-lines",
    insertValue: "file-cache-lines=",
    description:
      "Maximum number of lines to index into file cache. When 0 this is automatically sized",
  },
  {
    name: "fsm-scale-path-stmts",
    insertValue: "fsm-scale-path-stmts=",
    description:
      "Scale factor to apply to the number of statements in a threading path crossing a loop back edge when comparing to max-jump-thread-duplication-stmts",
  },
  {
    name: "fully-pipelined-fma",
    insertValue: "fully-pipelined-fma=",
    description:
      "Whether the target fully pipelines FMA instructions. If non-zero, reassociation considers the benefit of parallelizing FMA's multiplication part and addition part, assuming FMUL and FMA use the same units that can also do FADD",
  },
  {
    name: "gcse-after-reload-critical-fraction",
    insertValue: "gcse-after-reload-critical-fraction=",
    description:
      "The threshold ratio of critical edges execution count that permit performing redundancy elimination after reload",
  },
  {
    name: "gcse-after-reload-partial-fraction",
    insertValue: "gcse-after-reload-partial-fraction=",
    description:
      "The threshold ratio for performing partial redundancy elimination after reload",
  },
  {
    name: "gcse-cost-distance-ratio",
    insertValue: "gcse-cost-distance-ratio=",
    description:
      "Scaling factor in calculation of maximum distance an expression can be moved by GCSE optimizations",
  },
  {
    name: "gcse-unrestricted-cost",
    insertValue: "gcse-unrestricted-cost=",
    description:
      "Cost at which GCSE optimizations does not constrain the distance an expression can travel",
  },
  {
    name: "ggc-min-expand",
    insertValue: "ggc-min-expand=",
    description:
      "Minimum heap expansion to trigger garbage collection, as a percentage of the total size of the heap",
  },
  {
    name: "ggc-min-heapsize",
    insertValue: "ggc-min-heapsize=",
    description:
      "Minimum heap size before we start collecting garbage, in kilobytes",
  },
  {
    name: "gimple-fe-computed-hot-bb-threshold",
    insertValue: "gimple-fe-computed-hot-bb-threshold=",
    description:
      "The number of executions of a basic block which is considered hot. The parameter is used only in GIMPLE FE",
  },
  {
    name: "graphite-allow-codegen-errors",
    insertValue: "graphite-allow-codegen-errors=",
    description: "Whether codegen errors should be ICEs when -fchecking",
  },
  {
    name: "graphite-max-arrays-per-scop",
    insertValue: "graphite-max-arrays-per-scop=",
    description: "Maximum number of arrays per SCoP",
  },
  {
    name: "graphite-max-nb-scop-params",
    insertValue: "graphite-max-nb-scop-params=",
    description: "Maximum number of parameters in a SCoP",
  },
  {
    name: "hardcfr-max-blocks",
    insertValue: "hardcfr-max-blocks=",
    description:
      "Maximum number of blocks for -fharden-control-flow-redundancy",
  },
  {
    name: "hardcfr-max-inline-blocks",
    insertValue: "hardcfr-max-inline-blocks=",
    description:
      "Maximum number of blocks for in-line -fharden-control-flow-redundancy",
  },
  {
    name: "hash-table-verification-limit",
    insertValue: "hash-table-verification-limit=",
    description:
      "The number of elements for which hash table verification is done for each searched element",
  },
  {
    name: "hot-bb-count-fraction",
    insertValue: "hot-bb-count-fraction=",
    description:
      "The denominator n of fraction 1/n of the maximal execution count of a basic block in the entire program that a basic block needs to at least have in order to be considered hot (used in non-LTO mode)",
  },
  {
    name: "hot-bb-count-ws-permille",
    insertValue: "hot-bb-count-ws-permille=",
    description:
      "The number of most executed permilles of the profiled execution of the entire program to which the execution count of a basic block must be part of in order to be considered hot (used in LTO mode)",
  },
  {
    name: "hot-bb-frequency-fraction",
    insertValue: "hot-bb-frequency-fraction=",
    description:
      "The denominator n of fraction 1/n of the execution frequency of the entry block of a function that a basic block of this function needs to at least have in order to be considered hot",
  },
  {
    name: "hwasan-instrument-allocas",
    insertValue: "hwasan-instrument-allocas=",
    description: "Enable hwasan instrumentation of allocas/VLAs",
  },
  {
    name: "hwasan-instrument-mem-intrinsics",
    insertValue: "hwasan-instrument-mem-intrinsics=",
    description: "Enable hwasan instrumentation of builtin functions",
  },
  {
    name: "hwasan-instrument-reads",
    insertValue: "hwasan-instrument-reads=",
    description: "Enable hwasan instrumentation of load operations",
  },
  {
    name: "hwasan-instrument-stack",
    insertValue: "hwasan-instrument-stack=",
    description:
      "Enable hwasan instrumentation of statically-sized stack-allocated variables",
  },
  {
    name: "hwasan-instrument-writes",
    insertValue: "hwasan-instrument-writes=",
    description: "Enable hwasan instrumentation of store operations",
  },
  {
    name: "hwasan-random-frame-tag",
    insertValue: "hwasan-random-frame-tag=",
    description:
      "Use random base tag for each frame, as opposed to base always zero",
  },
  {
    name: "inline-heuristics-hint-percent",
    insertValue: "inline-heuristics-hint-percent=",
    description:
      "The scale (as a percentage) applied to inline-insns-single and auto limits when heuristics hints that inlining is very profitable",
  },
  {
    name: "inline-min-speedup",
    insertValue: "inline-min-speedup=",
    description:
      "The minimal estimated speedup allowing inliner to ignore inline-insns-single and inline-insns-auto",
  },
  {
    name: "inline-unit-growth",
    insertValue: "inline-unit-growth=",
    description:
      "How much can given compilation unit grow because of the inlining (as a percentage)",
  },
  {
    name: "integer-share-limit",
    insertValue: "integer-share-limit=",
    description: "The upper bound for sharing integer constants",
  },
  {
    name: "ipa-cp-eval-threshold",
    insertValue: "ipa-cp-eval-threshold=",
    description:
      "Threshold ipa-cp opportunity evaluation that is still considered beneficial to clone",
  },
  {
    name: "ipa-cp-large-unit-insns",
    insertValue: "ipa-cp-large-unit-insns=",
    description:
      "The size of translation unit that IPA-CP pass considers large",
  },
  {
    name: "ipa-cp-loop-hint-bonus",
    insertValue: "ipa-cp-loop-hint-bonus=",
    description:
      "Compile-time bonus IPA-CP assigns to candidates which make loop bounds or strides known",
  },
  {
    name: "ipa-cp-max-recursive-depth",
    insertValue: "ipa-cp-max-recursive-depth=",
    description:
      "Maximum depth of recursive cloning for self-recursive function",
  },
  {
    name: "ipa-cp-min-recursive-probability",
    insertValue: "ipa-cp-min-recursive-probability=",
    description:
      "Recursive cloning only when the probability of call being executed exceeds the parameter",
  },
  {
    name: "ipa-cp-recursion-penalty",
    insertValue: "ipa-cp-recursion-penalty=",
    description:
      "Percentage penalty recursive functions receive when they are evaluated for cloning",
  },
  {
    name: "ipa-cp-recursive-freq-factor",
    insertValue: "ipa-cp-recursive-freq-factor=",
    description:
      "When propagating IPA-CP effect estimates, multiply frequencies of recursive edges that bring back an unchanged value by this factor",
  },
  {
    name: "ipa-cp-single-call-penalty",
    insertValue: "ipa-cp-single-call-penalty=",
    description:
      "Percentage penalty functions containing a single call to another function receive when they are evaluated for cloning",
  },
  {
    name: "ipa-cp-sweeps",
    insertValue: "ipa-cp-sweeps=",
    description:
      "The number of times the interprocedural constant propagation traverses all functions to make cloning decisions",
  },
  {
    name: "ipa-cp-unit-growth",
    insertValue: "ipa-cp-unit-growth=",
    description:
      "How much can given compilation unit grow because of the interprocedural constant propagation (as a percentage)",
  },
  {
    name: "ipa-cp-value-list-size",
    insertValue: "ipa-cp-value-list-size=",
    description:
      "Maximum size of a list of values associated with each parameter for interprocedural constant propagation",
  },
  {
    name: "ipa-jump-function-lookups",
    insertValue: "ipa-jump-function-lookups=",
    description:
      "Maximum number of statements visited during jump function offset discovery",
  },
  {
    name: "ipa-max-aa-steps",
    insertValue: "ipa-max-aa-steps=",
    description:
      "Maximum number of statements that are visited by IPA formal parameter analysis based on alias analysis in any given function",
  },
  {
    name: "ipa-max-agg-items",
    insertValue: "ipa-max-agg-items=",
    description:
      "Maximum number of aggregate content items for a parameter in jump functions and lattices",
  },
  {
    name: "ipa-max-loop-predicates",
    insertValue: "ipa-max-loop-predicates=",
    description:
      "Maximum number of different predicates used to track properties of loops in IPA analysis",
  },
  {
    name: "ipa-max-param-expr-ops",
    insertValue: "ipa-max-param-expr-ops=",
    description:
      "Maximum number of operations in a parameter expression that can be handled by IPA analysis",
  },
  {
    name: "ipa-max-switch-predicate-bounds",
    insertValue: "ipa-max-switch-predicate-bounds=",
    description:
      "Maximal number of boundary endpoints of case ranges of switch statement used during IPA function summary generation",
  },
  {
    name: "ipa-sra-deref-prob-threshold",
    insertValue: "ipa-sra-deref-prob-threshold=",
    description:
      "Minimum probability (as a percentage) of dereferencing of a function pointer parameter for it to be considered for replacement with simple values",
  },
  {
    name: "ipa-sra-max-replacements",
    insertValue: "ipa-sra-max-replacements=",
    description:
      "Maximum pieces that IPA-SRA tracks per formal parameter, as a consequence, also the maximum number of replacements of a formal parameter",
  },
  {
    name: "ipa-sra-ptr-growth-factor",
    insertValue: "ipa-sra-ptr-growth-factor=",
    description:
      "Maximum allowed growth of total size of new parameters that ipa-sra replaces a pointer to an aggregate with",
  },
  {
    name: "ipa-sra-ptrwrap-growth-factor",
    insertValue: "ipa-sra-ptrwrap-growth-factor=",
    description:
      "Additional maximum allowed growth of total size of new parameters that ipa-sra replaces a pointer to an aggregate with, if it points to a local variable that the caller only writes to and passes it as an argument to functions",
  },
  {
    name: "ira-consider-dup-in-all-alts",
    insertValue: "ira-consider-dup-in-all-alts=",
    description:
      "Control IRA to consider matching constraint (duplicated operand number) heavily in all available alternatives for preferred register class. If it is set as zero, it means IRA only respects the matching constraint when it's in the only available alternative with an appropriate register class. Otherwise, it means IRA checks all available alternatives for preferred register class even if it has found some choice with an appropriate register class and respect the found qualified matching constraint",
  },
  {
    name: "ira-loop-reserved-regs",
    insertValue: "ira-loop-reserved-regs=",
    description:
      "The number of registers in each class kept unused by loop invariant motion",
  },
  {
    name: "ira-max-conflict-table-size",
    insertValue: "ira-max-conflict-table-size=",
    description: "Maximum size of conflict table in MB",
  },
  {
    name: "ira-max-loops-num",
    insertValue: "ira-max-loops-num=",
    description: "Maximum number of loops for regional RA",
  },
  {
    name: "ira-simple-lra-insn-threshold",
    insertValue: "ira-simple-lra-insn-threshold=",
    description:
      "Approximate function insn number in 1K units triggering simple local RA",
  },
  {
    name: "iv-always-prune-cand-set-bound",
    insertValue: "iv-always-prune-cand-set-bound=",
    description:
      "If number of candidates in the set is smaller, we always try to remove unused induction variables during its optimization",
  },
  {
    name: "iv-consider-all-candidates-bound",
    insertValue: "iv-consider-all-candidates-bound=",
    description:
      "Bound on number of candidates below that all candidates are considered in induction variable optimizations",
  },
  {
    name: "iv-max-considered-uses",
    insertValue: "iv-max-considered-uses=",
    description:
      "Bound on number of induction variable uses in loop optimized in IV optimizations",
  },
  {
    name: "ix86-vect-compare-costs",
    insertValue: "ix86-vect-compare-costs=",
    description:
      "Whether x86 vectorizer cost modeling compares costs of different vector sizes",
  },
  {
    name: "ix86-vect-unroll-limit",
    insertValue: "ix86-vect-unroll-limit=",
    description: "Limit how much the autovectorizer may unroll a loop",
  },
  {
    name: "jump-table-max-growth-ratio-for-size",
    insertValue: "jump-table-max-growth-ratio-for-size=",
    description:
      "The maximum code size growth ratio when expanding into a jump table (as a percentage). The parameter is used when optimizing for size",
  },
  {
    name: "jump-table-max-growth-ratio-for-speed",
    insertValue: "jump-table-max-growth-ratio-for-speed=",
    description:
      "The maximum code size growth ratio when expanding into a jump table (as a percentage). The parameter is used when optimizing for speed",
  },
  {
    name: "l1-cache-line-size",
    insertValue: "l1-cache-line-size=",
    description: "The size of L1 cache line",
  },
  {
    name: "l1-cache-size",
    insertValue: "l1-cache-size=",
    description: "The size of L1 cache",
  },
  {
    name: "l2-cache-size",
    insertValue: "l2-cache-size=",
    description: "The size of L2 cache",
  },
  {
    name: "large-function-growth",
    insertValue: "large-function-growth=",
    description:
      "Maximal growth due to inlining of large function (as a percentage)",
  },
  {
    name: "large-function-insns",
    insertValue: "large-function-insns=",
    description: "The size of function body to be considered large",
  },
  {
    name: "large-stack-frame",
    insertValue: "large-stack-frame=",
    description: "The size of stack frame to be considered large",
  },
  {
    name: "large-stack-frame-growth",
    insertValue: "large-stack-frame-growth=",
    description: "Maximal stack frame growth due to inlining (as a percentage)",
  },
  {
    name: "large-unit-insns",
    insertValue: "large-unit-insns=",
    description: "The size of translation unit to be considered large",
  },
  {
    name: "lim-expensive",
    insertValue: "lim-expensive=",
    description:
      "The minimum cost of an expensive expression in the loop invariant motion",
  },
  {
    name: "logical-op-non-short-circuit",
    insertValue: "logical-op-non-short-circuit=",
    description: "True if a non-short-circuit operation is optimal",
  },
  {
    name: "loop-block-tile-size",
    insertValue: "loop-block-tile-size=",
    description: "Size of tiles for loop blocking",
  },
  {
    name: "loop-interchange-max-num-stmts",
    insertValue: "loop-interchange-max-num-stmts=",
    description:
      "The maximum number of stmts in loop nest for loop interchange",
  },
  {
    name: "loop-interchange-stride-ratio",
    insertValue: "loop-interchange-stride-ratio=",
    description:
      "The minimum stride ratio for loop interchange to be profitable",
  },
  {
    name: "loop-invariant-max-bbs-in-loop",
    insertValue: "loop-invariant-max-bbs-in-loop=",
    description: "Max basic blocks number in loop for loop invariant motion",
  },
  {
    name: "loop-max-datarefs-for-datadeps",
    insertValue: "loop-max-datarefs-for-datadeps=",
    description:
      "Maximum number of datarefs in loop for building loop data dependencies",
  },
  {
    name: "loop-versioning-max-inner-insns",
    insertValue: "loop-versioning-max-inner-insns=",
    description:
      "The maximum number of instructions in an inner loop that is being considered for versioning",
  },
  {
    name: "loop-versioning-max-outer-insns",
    insertValue: "loop-versioning-max-outer-insns=",
    description:
      "The maximum number of instructions in an outer loop that is being considered for versioning, on top of the instructions in inner loops",
  },
  {
    name: "lra-inheritance-ebb-probability-cutoff",
    insertValue: "lra-inheritance-ebb-probability-cutoff=",
    description:
      "Minimal fall-through edge probability as a percentage, used to add BB to inheritance EBB in LRA",
  },
  {
    name: "lra-max-considered-reload-pseudos",
    insertValue: "lra-max-considered-reload-pseudos=",
    description:
      "The max number of reload pseudos which are considered during spilling a non-reload pseudo",
  },
  {
    name: "lra-max-pseudos-points-log2-considered-for-preferences",
    insertValue: "lra-max-pseudos-points-log2-considered-for-preferences=",
    description:
      "The maximum log2(number of reload pseudos * number of program points) threshold when preferences for other reload pseudos are still considered. Taking these preferences into account helps to improve register allocation. However, for very large functions, a large value can result in significant compilation time and memory consumption. The default value is 30",
  },
  {
    name: "lto-max-locality-partition",
    insertValue: "lto-max-locality-partition=",
    description:
      "Maximal size of a locality partition for LTO (in estimated instructions). Value of 0 results in default value being used",
  },
  {
    name: "lto-max-partition",
    insertValue: "lto-max-partition=",
    description:
      "Maximal size of a partition for LTO (in estimated instructions)",
  },
  {
    name: "lto-max-streaming-parallelism",
    insertValue: "lto-max-streaming-parallelism=",
    description: "Maximal number of LTO partitions streamed in parallel",
  },
  {
    name: "lto-min-partition",
    insertValue: "lto-min-partition=",
    description:
      "Minimal size of a partition for LTO (in estimated instructions)",
  },
  {
    name: "lto-partition-locality-frequency-cutoff",
    insertValue: "lto-partition-locality-frequency-cutoff=",
    description:
      "The denominator n of fraction 1/n of the execution frequency of callee to be cloned for a particular caller. Special value of 0 dictates to always clone without a cut-off",
  },
  {
    name: "lto-partition-locality-heuristics",
    insertValue: "lto-partition-locality-heuristics=",
    description:
      "Choose static heuristics for locality layout. Option cpp_template groups by C++ template instantiation type",
  },
  {
    name: "lto-partition-locality-size-cutoff",
    insertValue: "lto-partition-locality-size-cutoff=",
    description:
      "Size cut-off for callee including inlined calls to be cloned for a particular caller",
  },
  {
    name: "lto-partitions",
    insertValue: "lto-partitions=",
    description: "Number of partitions the program should be split to",
  },
  {
    name: "max-average-unrolled-insns",
    insertValue: "max-average-unrolled-insns=",
    description:
      "The maximum number of instructions to consider to unroll in a loop on average",
  },
  {
    name: "max-combine-insns",
    insertValue: "max-combine-insns=",
    description: "The maximum number of insns combine tries to combine",
  },
  {
    name: "max-combine-search-insns",
    insertValue: "max-combine-search-insns=",
    description:
      "The maximum number of instructions that combine searches in order to find the next use of a particular register",
  },
  {
    name: "max-completely-peel-loop-nest-depth",
    insertValue: "max-completely-peel-loop-nest-depth=",
    description: "The maximum depth of a loop nest we completely peel",
  },
  {
    name: "max-completely-peel-times",
    insertValue: "max-completely-peel-times=",
    description:
      "The maximum number of peelings of a single loop that is peeled completely",
  },
  {
    name: "max-completely-peeled-insns",
    insertValue: "max-completely-peeled-insns=",
    description: "The maximum number of insns of a completely peeled loop",
  },
  {
    name: "max-crossjump-edges",
    insertValue: "max-crossjump-edges=",
    description:
      "The maximum number of incoming edges to consider for crossjumping",
  },
  {
    name: "max-cse-insns",
    insertValue: "max-cse-insns=",
    description: "The maximum instructions CSE process before flushing",
  },
  {
    name: "max-cse-path-length",
    insertValue: "max-cse-path-length=",
    description: "The maximum length of path considered in cse",
  },
  {
    name: "max-cselib-memory-locations",
    insertValue: "max-cselib-memory-locations=",
    description: "The maximum memory locations recorded by cselib",
  },
  {
    name: "max-debug-marker-count",
    insertValue: "max-debug-marker-count=",
    description: "Maximum count of debug markers to expand or inline",
  },
  {
    name: "max-delay-slot-insn-search",
    insertValue: "max-delay-slot-insn-search=",
    description:
      "The maximum number of instructions to consider to fill a delay slot",
  },
  {
    name: "max-delay-slot-live-search",
    insertValue: "max-delay-slot-live-search=",
    description:
      "The maximum number of instructions to consider to find accurate live register information",
  },
  {
    name: "max-devirt-targets",
    insertValue: "max-devirt-targets=",
    description: "Maximum number of targets to devirtualize",
  },
  {
    name: "max-dse-active-local-stores",
    insertValue: "max-dse-active-local-stores=",
    description:
      "Maximum number of active local stores in RTL dead store elimination",
  },
  {
    name: "max-early-inliner-iterations",
    insertValue: "max-early-inliner-iterations=",
    description:
      "The maximum number of nested indirect inlining performed by early inliner",
  },
  {
    name: "max-fields-for-field-sensitive",
    insertValue: "max-fields-for-field-sensitive=",
    description:
      "Maximum number of fields in a structure before pointer analysis treats the structure as a single variable",
  },
  {
    name: "max-find-base-term-values",
    insertValue: "max-find-base-term-values=",
    description:
      "Maximum number of VALUEs handled during a single find_base_term call",
  },
  {
    name: "max-fsm-thread-path-insns",
    insertValue: "max-fsm-thread-path-insns=",
    description:
      "Maximum number of instructions to copy when duplicating blocks on a finite state automaton jump thread path",
  },
  {
    name: "max-gcse-insertion-ratio",
    insertValue: "max-gcse-insertion-ratio=",
    description:
      "The maximum ratio of insertions to deletions of expressions in GCSE",
  },
  {
    name: "max-gcse-memory",
    insertValue: "max-gcse-memory=",
    description:
      "The maximum amount of memory to be allocated by GCSE, in kilobytes",
  },
  {
    name: "max-goto-duplication-insns",
    insertValue: "max-goto-duplication-insns=",
    description:
      "The maximum number of insns to duplicate when unfactoring computed gotos",
  },
  {
    name: "max-grow-copy-bb-insns",
    insertValue: "max-grow-copy-bb-insns=",
    description: "The maximum expansion factor when copying basic blocks",
  },
  {
    name: "max-hoist-depth",
    insertValue: "max-hoist-depth=",
    description:
      "Maximum depth of search in the dominator tree for expressions to hoist",
  },
  {
    name: "max-inline-functions-called-once-insns",
    insertValue: "max-inline-functions-called-once-insns=",
    description:
      "Maximum combined size of caller and callee which is inlined if callee is called once",
  },
  {
    name: "max-inline-functions-called-once-loop-depth",
    insertValue: "max-inline-functions-called-once-loop-depth=",
    description:
      "Maximum loop depth of a call which is considered for inlining functions called once",
  },
  {
    name: "max-inline-insns-auto",
    insertValue: "max-inline-insns-auto=",
    description:
      "The maximum number of instructions when automatically inlining",
  },
  {
    name: "max-inline-insns-recursive",
    insertValue: "max-inline-insns-recursive=",
    description:
      "The maximum number of instructions inline function can grow to via recursive inlining",
  },
  {
    name: "max-inline-insns-recursive-auto",
    insertValue: "max-inline-insns-recursive-auto=",
    description:
      "The maximum number of instructions non-inline function can grow to via recursive inlining",
  },
  {
    name: "max-inline-insns-single",
    insertValue: "max-inline-insns-single=",
    description:
      "The maximum number of instructions in a single function eligible for inlining",
  },
  {
    name: "max-inline-insns-size",
    insertValue: "max-inline-insns-size=",
    description: "The maximum number of instructions when inlining for size",
  },
  {
    name: "max-inline-insns-small",
    insertValue: "max-inline-insns-small=",
    description:
      "The maximum number of instructions when automatically inlining small functions",
  },
  {
    name: "max-inline-recursive-depth",
    insertValue: "max-inline-recursive-depth=",
    description: "The maximum depth of recursive inlining for inline functions",
  },
  {
    name: "max-inline-recursive-depth-auto",
    insertValue: "max-inline-recursive-depth-auto=",
    description:
      "The maximum depth of recursive inlining for non-inline functions",
  },
  {
    name: "max-isl-operations",
    insertValue: "max-isl-operations=",
    description: "Maximum number of isl operations, 0 means unlimited",
  },
  {
    name: "max-iterations-computation-cost",
    insertValue: "max-iterations-computation-cost=",
    description:
      "Bound on the cost of an expression to compute the number of iterations",
  },
  {
    name: "max-iterations-to-track",
    insertValue: "max-iterations-to-track=",
    description:
      "Bound on the number of iterations the brute force # of iterations analysis algorithm evaluates",
  },
  {
    name: "max-jump-thread-duplication-stmts",
    insertValue: "max-jump-thread-duplication-stmts=",
    description:
      "Maximum number of statements allowed in a block that needs to be duplicated when threading jumps",
  },
  {
    name: "max-jump-thread-paths",
    insertValue: "max-jump-thread-paths=",
    description: "Search space limit for the backwards jump threader",
  },
  {
    name: "max-last-value-rtl",
    insertValue: "max-last-value-rtl=",
    description:
      "The maximum number of RTL nodes that can be recorded as combiner's last value",
  },
  {
    name: "max-loop-header-insns",
    insertValue: "max-loop-header-insns=",
    description:
      "The maximum number of insns in loop header duplicated by the copy loop headers pass",
  },
  {
    name: "max-modulo-backtrack-attempts",
    insertValue: "max-modulo-backtrack-attempts=",
    description:
      "The maximum number of backtrack attempts the scheduler should make when modulo scheduling a loop",
  },
  {
    name: "max-partial-antic-length",
    insertValue: "max-partial-antic-length=",
    description:
      "Maximum length of partial antic set when performing tree pre optimization",
  },
  {
    name: "max-peel-branches",
    insertValue: "max-peel-branches=",
    description:
      "The maximum number of branches on the path through the peeled sequence",
  },
  {
    name: "max-peel-times",
    insertValue: "max-peel-times=",
    description: "The maximum number of peelings of a single loop",
  },
  {
    name: "max-peeled-insns",
    insertValue: "max-peeled-insns=",
    description: "The maximum number of insns of a peeled loop",
  },
  {
    name: "max-pending-list-length",
    insertValue: "max-pending-list-length=",
    description: "The maximum length of scheduling's pending operations list",
  },
  {
    name: "max-pipeline-region-blocks",
    insertValue: "max-pipeline-region-blocks=",
    description:
      "The maximum number of blocks in a region to be considered for interblock scheduling",
  },
  {
    name: "max-pipeline-region-insns",
    insertValue: "max-pipeline-region-insns=",
    description:
      "The maximum number of insns in a region to be considered for interblock scheduling",
  },
  {
    name: "max-pow-sqrt-depth",
    insertValue: "max-pow-sqrt-depth=",
    description:
      "Maximum depth of sqrt chains to use when synthesizing exponentiation by a real constant",
  },
  {
    name: "max-predicted-iterations",
    insertValue: "max-predicted-iterations=",
    description: "The maximum number of loop iterations we predict statically",
  },
  {
    name: "max-reload-search-insns",
    insertValue: "max-reload-search-insns=",
    description:
      "The maximum number of instructions to search backward when looking for equivalent reload",
  },
  {
    name: "max-rtl-if-conversion-insns",
    insertValue: "max-rtl-if-conversion-insns=",
    description:
      "Maximum number of insns in a basic block to consider for RTL if-conversion",
  },
  {
    name: "max-rtl-if-conversion-predictable-cost",
    insertValue: "max-rtl-if-conversion-predictable-cost=",
    description:
      "Maximum permissible cost for the sequence that would be generated by the RTL if-conversion pass for a branch that is considered predictable",
  },
  {
    name: "max-rtl-if-conversion-unpredictable-cost",
    insertValue: "max-rtl-if-conversion-unpredictable-cost=",
    description:
      "Maximum permissible cost for the sequence that would be generated by the RTL if-conversion pass for a branch that is considered unpredictable",
  },
  {
    name: "max-sched-extend-regions-iters",
    insertValue: "max-sched-extend-regions-iters=",
    description:
      "The maximum number of iterations through CFG to extend regions",
  },
  {
    name: "max-sched-insn-conflict-delay",
    insertValue: "max-sched-insn-conflict-delay=",
    description:
      "The maximum conflict delay for an insn to be considered for speculative motion",
  },
  {
    name: "max-sched-ready-insns",
    insertValue: "max-sched-ready-insns=",
    description:
      "The maximum number of instructions ready to be issued to be considered by the scheduler during the first scheduling pass",
  },
  {
    name: "max-sched-region-blocks",
    insertValue: "max-sched-region-blocks=",
    description:
      "The maximum number of blocks in a region to be considered for interblock scheduling",
  },
  {
    name: "max-sched-region-insns",
    insertValue: "max-sched-region-insns=",
    description:
      "The maximum number of insns in a region to be considered for interblock scheduling",
  },
  {
    name: "max-slsr-cand-scan",
    insertValue: "max-slsr-cand-scan=",
    description:
      "Maximum length of candidate scans for straight-line strength reduction",
  },
  {
    name: "max-speculative-devirt-maydefs",
    insertValue: "max-speculative-devirt-maydefs=",
    description:
      "Maximum number of may-defs visited when devirtualizing speculatively",
  },
  {
    name: "max-ssa-name-query-depth",
    insertValue: "max-ssa-name-query-depth=",
    description:
      "Maximum recursion depth allowed when querying a property of an SSA name",
  },
  {
    name: "max-store-chains-to-track",
    insertValue: "max-store-chains-to-track=",
    description:
      "Maximum number of store chains to track at the same time in the store merging pass",
  },
  {
    name: "max-stores-to-merge",
    insertValue: "max-stores-to-merge=",
    description:
      "Maximum number of constant stores to merge in the store merging pass",
  },
  {
    name: "max-stores-to-sink",
    insertValue: "max-stores-to-sink=",
    description: "Maximum number of conditional store pairs that can be sunk",
  },
  {
    name: "max-stores-to-track",
    insertValue: "max-stores-to-track=",
    description:
      "Maximum number of store chains to track at the same time in the store merging pass",
  },
  {
    name: "max-tail-merge-comparisons",
    insertValue: "max-tail-merge-comparisons=",
    description: "Maximum amount of similar bbs to compare a bb with",
  },
  {
    name: "max-tail-merge-iterations",
    insertValue: "max-tail-merge-iterations=",
    description: "Maximum amount of iterations of the pass over a function",
  },
  {
    name: "max-tracked-strlens",
    insertValue: "max-tracked-strlens=",
    description:
      "Maximum number of strings for which strlen optimization pass tracks string lengths",
  },
  {
    name: "max-tree-if-conversion-phi-args",
    insertValue: "max-tree-if-conversion-phi-args=",
    description:
      "Maximum number of arguments in a PHI supported by TREE if-conversion unless the loop is marked with simd pragma",
  },
  {
    name: "max-unroll-times",
    insertValue: "max-unroll-times=",
    description: "The maximum number of unrollings of a single loop",
  },
  {
    name: "max-unrolled-insns",
    insertValue: "max-unrolled-insns=",
    description:
      "The maximum number of instructions to consider to unroll in a loop",
  },
  {
    name: "max-unswitch-depth",
    insertValue: "max-unswitch-depth=",
    description: "The maximum depth of a loop nest to be unswitched",
  },
  {
    name: "max-unswitch-insns",
    insertValue: "max-unswitch-insns=",
    description: "The maximum number of insns of an unswitched loop",
  },
  {
    name: "max-variable-expansions-in-unroller",
    insertValue: "max-variable-expansions-in-unroller=",
    description:
      "If -fvariable-expansion-in-unroller is used, the maximum number of times that an individual variable is expanded during loop unrolling",
  },
  {
    name: "max-vartrack-expr-depth",
    insertValue: "max-vartrack-expr-depth=",
    description:
      "Maximum recursion depth for expanding var tracking expressions",
  },
  {
    name: "max-vartrack-reverse-op-size",
    insertValue: "max-vartrack-reverse-op-size=",
    description:
      "Maximum size of loc list for which reverse ops should be added",
  },
  {
    name: "max-vartrack-size",
    insertValue: "max-vartrack-size=",
    description: "Maximum size of var tracking hash tables",
  },
  {
    name: "memtag-instrument-allocas",
    insertValue: "memtag-instrument-allocas=",
    description:
      "When sanitizing using MTE instructions, add checks for all stack allocas",
  },
  {
    name: "memtag-instrument-mem-intrinsics",
    insertValue: "memtag-instrument-mem-intrinsics=",
    description:
      "When sanitizing using MTE instructions, include builtin functions",
  },
  {
    name: "min-crossjump-insns",
    insertValue: "min-crossjump-insns=",
    description:
      "The minimum number of matching instructions to consider for crossjumping",
  },
  {
    name: "min-inline-recursive-probability",
    insertValue: "min-inline-recursive-probability=",
    description:
      "Inline recursively only when the probability of call being executed exceeds the parameter",
  },
  {
    name: "min-insn-to-prefetch-ratio",
    insertValue: "min-insn-to-prefetch-ratio=",
    description:
      "Minimum ratio of insns to prefetches to enable prefetching for a loop with an unknown trip count",
  },
  {
    name: "min-loop-cond-split-prob",
    insertValue: "min-loop-cond-split-prob=",
    description:
      "The minimum threshold for probability of semi-invariant condition statement to trigger loop split",
  },
  {
    name: "min-nondebug-insn-uid",
    insertValue: "min-nondebug-insn-uid=",
    description: "The minimum UID to be used for a nondebug insn",
  },
  {
    name: "min-pagesize",
    insertValue: "min-pagesize=",
    description: "Minimum page size for warning purposes",
  },
  {
    name: "min-size-for-stack-sharing",
    insertValue: "min-size-for-stack-sharing=",
    description:
      "The minimum size of variables taking part in stack slot sharing when not optimizing",
  },
  {
    name: "min-spec-prob",
    insertValue: "min-spec-prob=",
    description:
      "The minimum probability of reaching a source block for interblock speculative scheduling",
  },
  {
    name: "min-vect-loop-bound",
    insertValue: "min-vect-loop-bound=",
    description:
      "If -ftree-vectorize is used, the minimal loop bound of a loop to be considered for vectorization",
  },
  {
    name: "modref-max-accesses",
    insertValue: "modref-max-accesses=",
    description: "Maximum number of accesses stored in each modref reference",
  },
  {
    name: "modref-max-adjustments",
    insertValue: "modref-max-adjustments=",
    description:
      "Maximum number of times a given range is adjusted during the dataflow",
  },
  {
    name: "modref-max-bases",
    insertValue: "modref-max-bases=",
    description: "Maximum number of bases stored in each modref tree",
  },
  {
    name: "modref-max-depth",
    insertValue: "modref-max-depth=",
    description: "Maximum depth of DFS walk used by modref escape analysis",
  },
  {
    name: "modref-max-escape-points",
    insertValue: "modref-max-escape-points=",
    description:
      "Maximum number of escape points tracked by modref per SSA-name",
  },
  {
    name: "modref-max-refs",
    insertValue: "modref-max-refs=",
    description: "Maximum number of references stored in each modref base",
  },
  {
    name: "modref-max-tests",
    insertValue: "modref-max-tests=",
    description: "Maximum number of tests performed by modref query",
  },
  {
    name: "openacc-kernels",
    insertValue: "openacc-kernels=",
    description: "Specify mode of OpenACC 'kernels' constructs handling",
  },
  {
    name: "openacc-privatization",
    insertValue: "openacc-privatization=",
    description: "Specify mode of OpenACC privatization diagnostics",
  },
  {
    name: "parloops-chunk-size",
    insertValue: "parloops-chunk-size=",
    description:
      "Chunk size of omp schedule for loops parallelized by parloops",
  },
  {
    name: "parloops-min-per-thread",
    insertValue: "parloops-min-per-thread=",
    description:
      "Minimum number of iterations per thread of an innermost parallelized loop",
  },
  {
    name: "parloops-schedule",
    insertValue: "parloops-schedule=",
    description:
      "Schedule type of omp schedule for loops parallelized by parloops",
  },
  {
    name: "partial-inlining-entry-probability",
    insertValue: "partial-inlining-entry-probability=",
    description:
      "Maximum probability of the entry BB of split region (as a percentage relative to entry BB of the function) to make partial inlining happen",
  },
  {
    name: "phiopt-factor-max-stmts-live",
    insertValue: "phiopt-factor-max-stmts-live=",
    description:
      "Maximum number of statements allowed between a defining statement and the end of the basic block before extending the live range is considered profitable",
  },
  {
    name: "predictable-branch-outcome",
    insertValue: "predictable-branch-outcome=",
    description: "Maximal estimated outcome of branch considered predictable",
  },
  {
    name: "prefetch-dynamic-strides",
    insertValue: "prefetch-dynamic-strides=",
    description:
      "Whether software prefetch hints should be issued for non-constant strides",
  },
  {
    name: "prefetch-latency",
    insertValue: "prefetch-latency=",
    description: "The number of insns executed before prefetch is completed",
  },
  {
    name: "prefetch-min-insn-to-mem-ratio",
    insertValue: "prefetch-min-insn-to-mem-ratio=",
    description:
      "Minimum ratio of insns to mem ops to enable prefetching in a loop",
  },
  {
    name: "prefetch-minimum-stride",
    insertValue: "prefetch-minimum-stride=",
    description:
      "The minimum constant stride beyond which we should use prefetch hints for",
  },
  {
    name: "profile-func-internal-id",
    insertValue: "profile-func-internal-id=",
    description: "Use internal function id in profile lookup",
  },
  {
    name: "ranger-debug",
    insertValue: "ranger-debug=",
    description:
      "--param=ranger-debug=[none|trace|gori|cache|tracegori|all] Specifies the output mode for debugging ranger",
  },
  {
    name: "ranger-logical-depth",
    insertValue: "ranger-logical-depth=",
    description:
      "Maximum depth of logical expression evaluation ranger looks through when evaluating outgoing edge ranges",
  },
  {
    name: "ranger-recompute-depth",
    insertValue: "ranger-recompute-depth=",
    description:
      "Maximum depth of instruction chains to consider for recomputation in the outgoing range calculator",
  },
  {
    name: "relation-block-limit",
    insertValue: "relation-block-limit=",
    description:
      "Maximum number of relations the oracle registers in a basic block",
  },
  {
    name: "rpo-vn-max-loop-depth",
    insertValue: "rpo-vn-max-loop-depth=",
    description:
      "Maximum depth of a loop nest to fully value-number optimistically",
  },
  {
    name: "sccvn-max-alias-queries-per-access",
    insertValue: "sccvn-max-alias-queries-per-access=",
    description:
      "Maximum number of disambiguations to perform per memory access",
  },
  {
    name: "scev-max-expr-complexity",
    insertValue: "scev-max-expr-complexity=",
    description:
      "Bound on the complexity of the expressions in the scalar evolutions analyzer",
  },
  {
    name: "scev-max-expr-size",
    insertValue: "scev-max-expr-size=",
    description:
      "Bound on size of expressions used in the scalar evolutions analyzer",
  },
  {
    name: "sched-autopref-queue-depth",
    insertValue: "sched-autopref-queue-depth=",
    description:
      "Hardware autoprefetcher scheduler model control flag. Number of lookahead cycles the model looks into, at '0' only enable instruction sorting heuristic. Disabled by default",
  },
  {
    name: "sched-mem-true-dep-cost",
    insertValue: "sched-mem-true-dep-cost=",
    description: "Minimal distance between possibly conflicting store and load",
  },
  {
    name: "sched-pressure-algorithm",
    insertValue: "sched-pressure-algorithm=",
    description: "Which -fsched-pressure algorithm to apply",
  },
  {
    name: "sched-spec-prob-cutoff",
    insertValue: "sched-spec-prob-cutoff=",
    description:
      "The minimal probability of speculation success (as a percentage), so that speculative insns are scheduled",
  },
  {
    name: "sched-state-edge-prob-cutoff",
    insertValue: "sched-state-edge-prob-cutoff=",
    description:
      "The minimum probability an edge must have for the scheduler to save its state across it",
  },
  {
    name: "selsched-insns-to-rename",
    insertValue: "selsched-insns-to-rename=",
    description:
      "Maximum number of instructions in the ready list that are considered eligible for renaming",
  },
  {
    name: "selsched-max-lookahead",
    insertValue: "selsched-max-lookahead=",
    description:
      "The maximum size of the lookahead window of selective scheduling",
  },
  {
    name: "selsched-max-sched-times",
    insertValue: "selsched-max-sched-times=",
    description: "Maximum number of times that an insn could be scheduled",
  },
  {
    name: "simultaneous-prefetches",
    insertValue: "simultaneous-prefetches=",
    description: "The number of prefetches that can run at the same time",
  },
  {
    name: "sink-frequency-threshold",
    insertValue: "sink-frequency-threshold=",
    description:
      "Target block's relative execution frequency (as a percentage) required to sink a statement",
  },
  {
    name: "sms-dfa-history",
    insertValue: "sms-dfa-history=",
    description:
      "The number of cycles the swing modulo scheduler considers when checking conflicts using DFA",
  },
  {
    name: "sms-loop-average-count-threshold",
    insertValue: "sms-loop-average-count-threshold=",
    description:
      "A threshold on the average loop count considered by the swing modulo scheduler",
  },
  {
    name: "sms-max-ii-factor",
    insertValue: "sms-max-ii-factor=",
    description:
      "A factor for tuning the upper bound that swing modulo scheduler uses for scheduling a loop",
  },
  {
    name: "sms-min-sc",
    insertValue: "sms-min-sc=",
    description:
      "The minimum value of stage count that swing modulo scheduler generates",
  },
  {
    name: "sra-max-propagations",
    insertValue: "sra-max-propagations=",
    description:
      "Maximum number of artificial accesses to enable forward propagation that Scalar Replacement of Aggregates keeps for one local variable",
  },
  {
    name: "sra-max-scalarization-size-Osize",
    insertValue: "sra-max-scalarization-size-Osize=",
    description:
      "Maximum size, in storage units, of an aggregate which should be considered for scalarization when compiling for size",
  },
  {
    name: "sra-max-scalarization-size-Ospeed",
    insertValue: "sra-max-scalarization-size-Ospeed=",
    description:
      "Maximum size, in storage units, of an aggregate which should be considered for scalarization when compiling for speed",
  },
  {
    name: "ssa-name-def-chain-limit",
    insertValue: "ssa-name-def-chain-limit=",
    description:
      "The maximum number of SSA_NAME assignments to follow in determining a value",
  },
  {
    name: "ssp-buffer-size",
    insertValue: "ssp-buffer-size=",
    description:
      "The lower bound for a buffer to be considered for stack smashing protection",
  },
  {
    name: "stack-clash-protection-guard-size",
    insertValue: "stack-clash-protection-guard-size=",
    description: "Size of the stack guard expressed as a power of two in bytes",
  },
  {
    name: "stack-clash-protection-probe-interval",
    insertValue: "stack-clash-protection-probe-interval=",
    description:
      "Interval in which to probe the stack expressed as a power of two in bytes",
  },
  {
    name: "store-forwarding-max-distance",
    insertValue: "store-forwarding-max-distance=",
    description:
      "Maximum number of instruction distance that a small store forwarded to a larger load may stall. Value '0' disables the cost checks for the avoid-store-forwarding pass",
  },
  {
    name: "store-merging-allow-unaligned",
    insertValue: "store-merging-allow-unaligned=",
    description:
      "Allow the store merging pass to introduce unaligned stores if it is legal to do so",
  },
  {
    name: "store-merging-max-size",
    insertValue: "store-merging-max-size=",
    description: "Maximum size of a single store merging region in bytes",
  },
  {
    name: "switch-conversion-max-branch-ratio",
    insertValue: "switch-conversion-max-branch-ratio=",
    description:
      "The maximum ratio between array size and switch branches for a switch conversion to take place",
  },
  {
    name: "threader-debug",
    insertValue: "threader-debug=",
    description:
      "--param=threader-debug=[none|all] Enables verbose dumping of the threader solver",
  },
  {
    name: "tm-max-aggregate-size",
    insertValue: "tm-max-aggregate-size=",
    description:
      "Size in bytes after which thread-local aggregates should be instrumented with the logging functions instead of save/restore pairs",
  },
  {
    name: "tracer-dynamic-coverage",
    insertValue: "tracer-dynamic-coverage=",
    description:
      "The percentage of function, weighted by execution frequency, that must be covered by trace formation. Used when profile feedback is not available",
  },
  {
    name: "tracer-dynamic-coverage-feedback",
    insertValue: "tracer-dynamic-coverage-feedback=",
    description:
      "The percentage of function, weighted by execution frequency, that must be covered by trace formation. Used when profile feedback is available",
  },
  {
    name: "tracer-max-code-growth",
    insertValue: "tracer-max-code-growth=",
    description:
      "Maximal code growth caused by tail duplication (as a percentage)",
  },
  {
    name: "tracer-min-branch-probability",
    insertValue: "tracer-min-branch-probability=",
    description:
      "Stop forward growth if the probability of best edge is less than this threshold (as a percentage). Used when profile feedback is not available",
  },
  {
    name: "tracer-min-branch-probability-feedback",
    insertValue: "tracer-min-branch-probability-feedback=",
    description:
      "Stop forward growth if the probability of best edge is less than this threshold (as a percentage). Used when profile feedback is available",
  },
  {
    name: "tracer-min-branch-ratio",
    insertValue: "tracer-min-branch-ratio=",
    description:
      "Stop reverse growth if the reverse probability of best edge is less than this threshold (as a percentage)",
  },
  {
    name: "transitive-relations-work-bound",
    insertValue: "transitive-relations-work-bound=",
    description:
      "Work bound when discovering transitive relations from existing relations",
  },
  {
    name: "tree-reassoc-width",
    insertValue: "tree-reassoc-width=",
    description:
      "Set the maximum number of instructions executed in parallel in reassociated tree. If 0, use the target-dependent heuristic",
  },
  {
    name: "tsan-distinguish-volatile",
    insertValue: "tsan-distinguish-volatile=",
    description: "Emit special instrumentation for accesses to volatiles",
  },
  {
    name: "tsan-instrument-func-entry-exit",
    insertValue: "tsan-instrument-func-entry-exit=",
    description:
      "Emit instrumentation calls to __tsan_func_entry and __tsan_func_exit",
  },
  {
    name: "uninit-control-dep-attempts",
    insertValue: "uninit-control-dep-attempts=",
    description:
      "Maximum number of nested calls to search for control dependencies during uninitialized variable analysis",
  },
  {
    name: "uninit-max-chain-len",
    insertValue: "uninit-max-chain-len=",
    description:
      "Maximum number of predicates anded for each predicate ored in the normalized predicate chain",
  },
  {
    name: "uninit-max-num-chains",
    insertValue: "uninit-max-num-chains=",
    description:
      "Maximum number of predicates ored in the normalized predicate chain",
  },
  {
    name: "uninit-max-prune-work",
    insertValue: "uninit-max-prune-work=",
    description:
      "Maximum amount of work done to prune paths where the variable is always initialized",
  },
  {
    name: "uninlined-function-insns",
    insertValue: "uninlined-function-insns=",
    description:
      "Instruction accounted for function prologue, epilogue and other overhead",
  },
  {
    name: "uninlined-function-time",
    insertValue: "uninlined-function-time=",
    description:
      "Time accounted for function prologue, epilogue and other overhead",
  },
  {
    name: "uninlined-thunk-insns",
    insertValue: "uninlined-thunk-insns=",
    description: "Instruction accounted for function thunk overhead",
  },
  {
    name: "uninlined-thunk-time",
    insertValue: "uninlined-thunk-time=",
    description: "Time accounted for function thunk overhead",
  },
  {
    name: "unlikely-bb-count-fraction",
    insertValue: "unlikely-bb-count-fraction=",
    description:
      "The denominator n of fraction 1/n of the number of profiled runs of the entire program below which the execution count of a basic block must be in order for the basic block to be considered unlikely",
  },
  {
    name: "unroll-jam-max-unroll",
    insertValue: "unroll-jam-max-unroll=",
    description: "Maximum unroll factor for the unroll-and-jam transformation",
  },
  {
    name: "unroll-jam-min-percent",
    insertValue: "unroll-jam-min-percent=",
    description:
      "Minimum percentage of memrefs that must go away for unroll-and-jam to be considered profitable",
  },
  {
    name: "use-after-scope-direct-emission-threshold",
    insertValue: "use-after-scope-direct-emission-threshold=",
    description:
      "Use direct poisoning/unpoisoning instructions for variables smaller or equal to this number",
  },
  {
    name: "use-canonical-types",
    insertValue: "use-canonical-types=",
    description: "Whether to use canonical types",
  },
  {
    name: "vect-epilogues-nomask",
    insertValue: "vect-epilogues-nomask=",
    description: "Enable loop epilogue vectorization using smaller vector size",
  },
  {
    name: "vect-induction-float",
    insertValue: "vect-induction-float=",
    description: "Enable loop vectorization of floating point inductions",
  },
  {
    name: "vect-inner-loop-cost-factor",
    insertValue: "vect-inner-loop-cost-factor=",
    description:
      "The maximum factor which the loop vectorizer applies to the cost of statements in an inner loop relative to the loop being vectorized",
  },
  {
    name: "vect-max-layout-candidates",
    insertValue: "vect-max-layout-candidates=",
    description:
      "Maximum number of possible vector layouts (such as permutations) to consider when optimizing to-be-vectorized code",
  },
  {
    name: "vect-max-peeling-for-alignment",
    insertValue: "vect-max-peeling-for-alignment=",
    description:
      "Maximum number of loop peels to enhance alignment of data references in a loop",
  },
  {
    name: "vect-max-version-for-alias-checks",
    insertValue: "vect-max-version-for-alias-checks=",
    description:
      "Bound on number of runtime checks inserted by the vectorizer's loop versioning for alias check",
  },
  {
    name: "vect-max-version-for-alignment-checks",
    insertValue: "vect-max-version-for-alignment-checks=",
    description:
      "Bound on number of runtime checks inserted by the vectorizer's loop versioning for alignment check",
  },
  {
    name: "vect-partial-vector-usage",
    insertValue: "vect-partial-vector-usage=",
    description:
      "Controls how loop vectorizer uses partial vectors. 0 means never, 1 means only for loops whose need to iterate can be removed, 2 means for all loops. The default value is 2",
  },
  {
    name: "vect_allow_possibly_not_worthwhile_vectorizations",
    insertValue: "vect_allow_possibly_not_worthwhile_vectorizations=",
    description:
      "Enable vectorization of loops that may not be profitable according to the cost model but still perform costing between vector modes",
  },
  {
    name: "vrp-block-limit",
    insertValue: "vrp-block-limit=",
    description:
      "Maximum number of basic blocks before VRP switches to a fast model with less memory requirements",
  },
  {
    name: "vrp-cstload-limit",
    insertValue: "vrp-cstload-limit=",
    description:
      "Maximum number of steps when inferring a value range from a load from a constant aggregate",
  },
  {
    name: "vrp-sparse-threshold",
    insertValue: "vrp-sparse-threshold=",
    description:
      "Maximum number of basic blocks before VRP uses a sparse bitmap cache",
  },
  {
    name: "vrp-switch-limit",
    insertValue: "vrp-switch-limit=",
    description:
      "Maximum number of outgoing edges in a switch before VRP does not process it",
  },
  {
    name: "vrp-vector-threshold",
    insertValue: "vrp-vector-threshold=",
    description:
      "Maximum number of basic blocks for VRP to use a basic cache vector",
  },
  {
    name: "x86-stlf-window-ninsns",
    insertValue: "x86-stlf-window-ninsns=",
    description:
      "Instructions number above which STFL stall penalty can be compensated",
  },
  {
    name: "x86-stv-max-visits",
    insertValue: "x86-stv-max-visits=",
    description:
      "The maximum number of use and def visits when discovering a STV chain before the discovery is aborted",
  },
];

export const gccBase: Fig.Spec = {
  name: "gcc",
  description: "The default compiler for most linux distributions",
  options: [
    {
      name: "--param",
      description: "Set a compiler tuning parameter",
      args: { name: "name=value", suggestions: paramSuggestions },
    },
    {
      name: "-###",
      description:
        "Like -v, but do not execute the commands and quote the arguments",
    },
    {
      name: "--all-warnings",
      description: "Enable most warning messages",
    },
    {
      name: "--ansi",
      description: "A synonym for -std=c89 (for C) or -std=c++98 (for C++)",
    },
    {
      name: "-ansi",
      description: "A synonym for -std=c89 (for C) or -std=c++98 (for C++)",
    },
    {
      name: "--assemble",
      description:
        "Stop processing after generating assembly code; do not assemble",
    },
    {
      name: "--assert",
      description:
        "Assert the <answer> to <question>. Putting '-' before <question> disables the <answer> to <question>",
      args: { name: "question" },
    },
    {
      name: "-aux-info",
      description: "Emit declaration information into <file>",
      args: { name: "file", template: "filepaths" },
    },
    {
      name: "-A",
      description:
        "Assert an answer to a question (disables it when the question is prefixed with -)",
      isRepeatable: true,
      args: { name: "assertion" },
    },
    {
      name: "-B",
      description:
        "Add a prefix to the directories searched for executables, libraries, include files and data files",
      isRepeatable: true,
      args: { name: "prefix", template: "folders" },
    },
    {
      name: "-CC",
      description: "Do not discard comments in macro expansions",
    },
    {
      name: "--comments-in-macros",
      description: "Do not discard comments in macro expansions",
    },
    {
      name: "--comments",
      description: "Do not discard comments",
    },
    {
      name: "--compile-std-module",
      description:
        "Compile module units for <bits/stdc++.h>, std, and std.compat",
    },
    {
      name: "--compile",
      description: "Compile or assemble the source files, but do not link",
    },
    {
      name: "--coverage",
      description:
        "This option is used to compile and link code instrumented for coverage analysis",
    },
    {
      name: "-coverage",
      description:
        "This option is used to compile and link code instrumented for coverage analysis",
    },
    {
      name: "-C",
      description: "Do not discard comments",
    },
    {
      name: "-c",
      description: "Compile or assemble the source files, but do not link",
    },
    {
      name: "-dA",
      description:
        "Annotate the assembler output with miscellaneous debugging information",
    },
    {
      name: "-da",
      description: "Produce all the dumps listed above",
    },
    {
      name: "-dD",
      description:
        "Like -dM except that it outputs both the #define directives and the result of preprocessing",
    },
    {
      name: "--debug",
      description: "Generate debug information in default format",
    },
    {
      name: "--define-macro",
      description:
        "Define a <macro> with <val> as its value. If just <macro> is given, <val> is taken to be 1",
      args: { name: "macro" },
    },
    {
      name: "--dependencies",
      description: "Generate make dependencies",
    },
    {
      name: "-dH",
      description: "Produce a core dump whenever an error occurs",
    },
    {
      name: "-dI",
      description:
        "Output #include directives in addition to the result of preprocessing",
    },
    {
      name: "-dM",
      description:
        "Instead of the normal output, generate a list of #define directives for all the macros defined during the execution of the preprocessor, including predefined macros",
    },
    {
      name: "-dN",
      description:
        "Like -dD, but emit only the macro names, not their expansions",
    },
    {
      name: "-dP",
      description:
        "Dump the RTL in the assembler output as a comment before each instruction",
    },
    {
      name: "-dp",
      description:
        "Annotate the assembler output with a comment indicating which pattern and alternative is used",
    },
    {
      name: "--dumpbase-ext",
      description:
        "Drop a trailing .<ext> from the dump basename to name auxiliary output files",
      args: { name: "value" },
    },
    {
      name: "-dumpbase-ext",
      description:
        "Drop a trailing extension from the dump base name before forming auxiliary output file names",
      args: { name: "value" },
    },
    {
      name: "--dumpbase",
      description: "Set the file basename to be used for dumps",
      args: { name: "file", template: "filepaths" },
    },
    {
      name: "-dumpbase",
      description: "Set the base name for auxiliary and dump output files",
      args: { name: "file", template: "filepaths" },
    },
    {
      name: "--dumpdir",
      description: "Set the directory name to be used for dumps",
      args: { name: "dir", template: "folders" },
    },
    {
      name: "-dumpdir",
      description:
        "Use the given directory prefix when forming the names of auxiliary and dump output files",
      args: { name: "dir", template: "folders" },
    },
    {
      name: "-dumpfullversion",
      description: "Print the full compiler version and exit",
    },
    {
      name: "-dumpmachine",
      description:
        "Print the compiler's target machine (for example, i686-pc-linux-gnu) and exit",
    },
    {
      name: "-dumpspecs",
      description:
        "Print the compiler's built-in specs and exit. (This is used when GCC itself is being built.)",
    },
    {
      name: "-dumpversion",
      description:
        "Print the compiler version (for example, 3.0, 6.3.0 or 7) and exit",
    },
    {
      name: "--dump",
      description: "Enable dumps from specific passes of the compiler",
      args: {
        name: "letters",
        suggestions: ["M", "D", "N", "I", "U", "a", "A", "H", "p", "P", "x"],
      },
    },
    {
      name: "-dU",
      description:
        "Like -dD, but only output macros that are expanded or tested in directives, plus #undef directives",
    },
    {
      name: "-dx",
      description: "Just generate RTL for a function instead of compiling it",
    },
    {
      name: "-D",
      description:
        "Define a macro, with value 1 if no value is given (-DNAME or -DNAME=VALUE)",
      isRepeatable: true,
      args: { name: "macro" },
    },
    {
      name: "-d",
      description: "Enable dumps from specific passes of the compiler",
      args: { name: "letters" },
    },
    {
      name: "--embed-directory",
      description: "Add <dir> to the #embed path",
      args: { name: "dir", template: "folders" },
    },
    {
      name: "--embed-dir",
      description: "Add <dir> to the #embed path",
      requiresSeparator: true,
      args: { name: "dir", template: "folders" },
    },
    {
      name: "--entry",
      description: "Specify that the program entry point is entry",
      args: { name: "value" },
    },
    {
      name: "--extra-warnings",
      description: "Print extra (possibly unwanted) warnings",
    },
    {
      name: "-E",
      description:
        "Stop after the preprocessing stage; do not run the compiler proper",
    },
    {
      name: "-e",
      description: "Specify the program entry point",
      args: { name: "entry" },
    },
    {
      name: "-fabi-version",
      description: "The version of the C++ ABI in use",
      requiresSeparator: true,
      args: { name: "number" },
    },
    {
      name: "-fada-spec-parent",
      description: "Dump Ada specs as child units of given parent",
      requiresSeparator: true,
      args: { name: "unit" },
    },
    {
      name: [
        "-faggressive-loop-optimizations",
        "-fno-aggressive-loop-optimizations",
      ],
      description: "Aggressively optimize loops using language constraints",
    },
    {
      name: "-falign-functions",
      description: "Align the start of functions",
      requiresSeparator: true,
      args: { name: "value", isOptional: true },
    },
    {
      name: "-falign-jumps",
      description: "Align labels which are only reached by jumping",
      requiresSeparator: true,
      args: { name: "value", isOptional: true },
    },
    {
      name: "-falign-labels",
      description: "Align all labels",
      requiresSeparator: true,
      args: { name: "value", isOptional: true },
    },
    {
      name: "-falign-loops",
      description: "Align the start of loops",
      requiresSeparator: true,
      args: { name: "value", isOptional: true },
    },
    {
      name: ["-fallocation-dce", "-fno-allocation-dce"],
      description: "Tell DCE to remove unused C++ allocations",
    },
    {
      name: ["-fallow-store-data-races", "-fno-allow-store-data-races"],
      description: "Allow the compiler to introduce new data races on stores",
    },
    {
      name: ["-fanalyzer-assume-nothrow", "-fno-analyzer-assume-nothrow"],
      description: "Assume that no function calls can throw exceptions",
    },
    {
      name: ["-fanalyzer-call-summaries", "-fno-analyzer-call-summaries"],
      description:
        "Approximate the effect of function calls to simplify analysis",
    },
    {
      name: "-fanalyzer-checker",
      description: "Restrict the analyzer to run just the named checker",
      requiresSeparator: true,
      args: { name: "value" },
    },
    {
      name: ["-fanalyzer-debug-text-art", "-fno-analyzer-debug-text-art"],
      description: "Add extra annotations to diagrams",
    },
    {
      name: ["-fanalyzer-feasibility", "-fno-analyzer-feasibility"],
      description: "Verify that paths are feasible when emitting diagnostics",
    },
    {
      name: [
        "-fanalyzer-show-duplicate-count",
        "-fno-analyzer-show-duplicate-count",
      ],
      description: "Issue a note when diagnostics are deduplicated",
    },
    {
      name: [
        "-fanalyzer-show-events-in-system-headers",
        "-fno-analyzer-show-events-in-system-headers",
      ],
      description:
        "Show events within system headers in analyzer execution paths",
    },
    {
      name: [
        "-fanalyzer-simplify-supergraph",
        "-fno-analyzer-simplify-supergraph",
      ],
      description: "Simplify the supergraph before analyzing it",
    },
    {
      name: ["-fanalyzer-state-merge", "-fno-analyzer-state-merge"],
      description: "Merge similar-enough states during analysis",
    },
    {
      name: ["-fanalyzer-state-purge", "-fno-analyzer-state-purge"],
      description: "Purge unneeded state during analysis",
    },
    {
      name: [
        "-fanalyzer-suppress-followups",
        "-fno-analyzer-suppress-followups",
      ],
      description: "Stop exploring an execution path after certain diagnostics",
    },
    {
      name: ["-fanalyzer-transitivity", "-fno-analyzer-transitivity"],
      description: "Enable transitivity of constraints during analysis",
    },
    {
      name: ["-fanalyzer-undo-inlining", "-fno-analyzer-undo-inlining"],
      description:
        "Try to reconstruct function calls and returns after inlining",
    },
    {
      name: ["-fanalyzer-verbose-edges", "-fno-analyzer-verbose-edges"],
      description:
        "Emit more verbose descriptions of control flow in diagnostics",
    },
    {
      name: [
        "-fanalyzer-verbose-state-changes",
        "-fno-analyzer-verbose-state-changes",
      ],
      description:
        "Emit more verbose descriptions of state changes in diagnostics",
    },
    {
      name: "-fanalyzer-verbosity",
      description: "Control which events are displayed in diagnostic paths",
      requiresSeparator: true,
      args: { name: "number" },
    },
    {
      name: ["-fanalyzer", "-fno-analyzer"],
      description: "Enable static analysis pass",
    },
    {
      name: "-fasan-shadow-offset",
      description: "Use custom shadow memory offset",
      requiresSeparator: true,
      isRepeatable: true,
      args: { name: "number" },
    },
    {
      name: ["-fasm", "-fno-asm"],
      description: 'Recognize the "asm" keyword',
    },
    {
      name: ["-fassociative-math", "-fno-associative-math"],
      description:
        "Allow optimization for floating-point arithmetic which may change the result of the operation due to rounding",
    },
    {
      name: ["-fasynchronous-unwind-tables", "-fno-asynchronous-unwind-tables"],
      description:
        "Generate unwind tables that are exact at each instruction boundary",
    },
    {
      name: ["-fauto-inc-dec", "-fno-auto-inc-dec"],
      description: "Generate auto-inc/dec instructions",
    },
    {
      name: ["-fauto-profile-inlining", "-fno-auto-profile-inlining"],
      description: "Perform inlining using auto-profile",
    },
    {
      name: "-fauto-profile",
      description:
        "Use sample profile information for call graph node weights. The default profile file is fbdata.afdo in 'pwd'",
      requiresSeparator: true,
      args: { name: "value", isOptional: true },
    },
    {
      name: ["-favoid-store-forwarding", "-fno-avoid-store-forwarding"],
      description: "Try to avoid store forwarding",
    },
    {
      name: ["-fbit-tests", "-fno-bit-tests"],
      description: "Use bit tests for sufficiently large switch statements",
    },
    {
      name: ["-fbounds-check", "-fno-bounds-check"],
      description: "Generate code to check bounds before indexing arrays",
    },
    {
      name: ["-fbranch-count-reg", "-fno-branch-count-reg"],
      description: "Replace add, compare, branch with branch on count register",
    },
    {
      name: ["-fbranch-probabilities", "-fno-branch-probabilities"],
      description: "Use profiling information for branch probabilities",
    },
    {
      name: ["-fbuiltin", "-fno-builtin"],
      description: "Recognize built-in functions",
    },
    {
      name: "-fcall-saved-",
      description: "Mark <register> as being preserved across functions",
      isRepeatable: true,
      args: { name: "register" },
    },
    {
      name: "-fcall-used-",
      description: "Mark <register> as being corrupted by function calls",
      isRepeatable: true,
      args: { name: "register" },
    },
    {
      name: ["-fcaller-saves", "-fno-caller-saves"],
      description: "Save registers around function calls",
    },
    {
      name: "-fcallgraph-info",
      description: "Output callgraph information on a per-file basis",
      requiresSeparator: true,
      args: { name: "value", isOptional: true },
    },
    {
      name: ["-fcanon-prefix-map", "-fno-canon-prefix-map"],
      description:
        "For -f*-prefix-map= options compare canonicalized pathnames rather than just strings",
      isRepeatable: true,
    },
    {
      name: ["-fcanonical-system-headers", "-fno-canonical-system-headers"],
      description: "Where shorter, use canonicalized paths to systems headers",
    },
    {
      name: "-fcf-protection",
      description:
        "Instrument functions with checks to verify jump/call/return control-flow transfer instructions have valid targets",
      requiresSeparator: true,
      args: {
        name: "value",
        isOptional: true,
        suggestions: ["full", "branch", "return", "check", "none"],
      },
    },
    {
      name: ["-fcheck-new", "-fno-check-new"],
      description: "Check the return value of new in C++",
      isRepeatable: true,
    },
    {
      name: "-fchecking",
      description: "Perform internal consistency checkings",
      requiresSeparator: true,
      args: { name: "number", isOptional: true },
    },
    {
      name: ["-fcode-hoisting", "-fno-code-hoisting"],
      description: "Enable code hoisting",
    },
    {
      name: ["-fcombine-stack-adjustments", "-fno-combine-stack-adjustments"],
      description:
        "Looks for opportunities to reduce stack adjustments and stack references",
    },
    {
      name: ["-fcommon", "-fno-common"],
      description: "Put uninitialized globals in the common section",
    },
    {
      name: "-fcompare-debug-second",
      description: "Run only the second compilation of -fcompare-debug",
    },
    {
      name: "-fcompare-debug",
      description:
        "Compile twice, with and without extra debug-related options, and compare the results",
      requiresSeparator: true,
      args: { name: "opts", isOptional: true },
    },
    {
      name: ["-fcompare-elim", "-fno-compare-elim"],
      description:
        "Perform comparison elimination after register allocation has finished",
    },
    {
      name: ["-fcond-mismatch", "-fno-cond-mismatch"],
      description:
        "Allow the arguments of the '?' operator to have different types",
    },
    {
      name: ["-fcondition-coverage", "-fno-condition-coverage"],
      description: "Insert condition coverage profiling code",
    },
    {
      name: ["-fconserve-stack", "-fno-conserve-stack"],
      description:
        "Do not perform optimizations increasing noticeably stack usage",
    },
    {
      name: "-fconstant-string-class",
      description: "Use class <name> for constant strings",
      requiresSeparator: true,
      args: { name: "name" },
    },
    {
      name: ["-fcprop-registers", "-fno-cprop-registers"],
      description: "Perform a register copy-propagation optimization pass",
    },
    {
      name: ["-fcrossjumping", "-fno-crossjumping"],
      description: "Perform cross-jumping optimization",
    },
    {
      name: ["-fcse-follow-jumps", "-fno-cse-follow-jumps"],
      description: "When running CSE, follow jumps to their targets",
    },
    {
      name: ["-fcx-fortran-rules", "-fno-cx-fortran-rules"],
      description: "Complex multiplication and division follow Fortran rules",
    },
    {
      name: ["-fcx-limited-range", "-fno-cx-limited-range"],
      description: "Omit range reduction step when performing complex division",
    },
    {
      name: "-fcx-method",
      description:
        "Complex multiplication and division follow the stated method",
      requiresSeparator: true,
      args: {
        name: "value",
        suggestions: ["limited-range", "fortran", "stdc"],
      },
    },
    {
      name: ["-fdata-sections", "-fno-data-sections"],
      description: "Place data items into their own section",
    },
    {
      name: ["-fdbg-cnt-list", "-fno-dbg-cnt-list"],
      description:
        "List all available debugging counters with their limits and counts",
    },
    {
      name: "-fdbg-cnt",
      description: "Set the debug counter limit",
      requiresSeparator: true,
      isRepeatable: true,
      args: { name: "counter" },
    },
    {
      name: ["-fdce", "-fno-dce"],
      description: "Use the RTL dead code elimination pass",
    },
    {
      name: ["-fdebug-cpp", "-fno-debug-cpp"],
      description: "Emit debug annotations during preprocessing",
    },
    {
      name: "-fdebug-prefix-map",
      description: "Map one directory name to another in debug information",
      requiresSeparator: true,
      isRepeatable: true,
      args: { name: "old" },
    },
    {
      name: ["-fdebug-types-section", "-fno-debug-types-section"],
      description: "Output .debug_types section when using DWARF v4 debuginfo",
    },
    {
      name: ["-fdefer-pop", "-fno-defer-pop"],
      description: "Defer popping functions args from stack until later",
    },
    {
      name: ["-fdelayed-branch", "-fno-delayed-branch"],
      description: "Attempt to fill delay slots of branch instructions",
    },
    {
      name: ["-fdelete-dead-exceptions", "-fno-delete-dead-exceptions"],
      description: "Delete dead instructions that may throw exceptions",
    },
    {
      name: ["-fdelete-null-pointer-checks", "-fno-delete-null-pointer-checks"],
      description: "Delete useless null pointer checks",
    },
    {
      name: ["-fdep-fusion", "-fno-dep-fusion"],
      description:
        "Issue defining instructions back to back with their single uses, provided they are macro-fusible in the target microarchitecture",
    },
    {
      name: "-fdeps-file",
      description: "File for output dependency information",
      requiresSeparator: true,
      args: { name: "value", template: "filepaths" },
    },
    {
      name: "-fdeps-format",
      description:
        'Structured format for output dependency information. Supported ("p1689r5")',
      requiresSeparator: true,
      args: { name: "value" },
    },
    {
      name: "-fdeps-target",
      description: "Output file for the compile step",
      requiresSeparator: true,
      args: { name: "value" },
    },
    {
      name: ["-fdevirtualize-at-ltrans", "-fno-devirtualize-at-ltrans"],
      description:
        "Stream extra data to support more aggressive devirtualization in LTO local transformation mode",
    },
    {
      name: ["-fdevirtualize-speculatively", "-fno-devirtualize-speculatively"],
      description: "Perform speculative devirtualization",
    },
    {
      name: ["-fdevirtualize", "-fno-devirtualize"],
      description: "Try to convert virtual calls to direct ones",
    },
    {
      name: "-fdiagnostics-add-output",
      description: "Add output format",
      requiresSeparator: true,
      args: { name: "value" },
    },
    {
      name: "-fdiagnostics-color",
      description: "Colorize diagnostics",
      requiresSeparator: true,
      args: {
        name: "value",
        isOptional: true,
        suggestions: ["never", "always", "auto"],
      },
    },
    {
      name: "-fdiagnostics-column-origin",
      description:
        "Set the number of the first column. The default is 1-based as per GNU style, but some utilities may expect 0-based, for example",
      requiresSeparator: true,
      args: { name: "number" },
    },
    {
      name: "-fdiagnostics-column-unit",
      description:
        "Select whether column numbers are output as display columns (default) or raw bytes",
      requiresSeparator: true,
      args: { name: "value", suggestions: ["display", "byte"] },
    },
    {
      name: "-fdiagnostics-escape-format",
      description:
        "Select how to escape non-printable-ASCII bytes in the source for diagnostics that suggest it",
      requiresSeparator: true,
      args: { name: "value", suggestions: ["unicode", "bytes"] },
    },
    {
      name: "-fdiagnostics-format",
      description: "Select output format",
      requiresSeparator: true,
      args: {
        name: "value",
        suggestions: ["text", "sarif-stderr", "sarif-file"],
      },
    },
    {
      name: ["-fdiagnostics-generate-patch", "-fno-diagnostics-generate-patch"],
      description: "Print fix-it hints to stderr in unified diff format",
    },
    {
      name: [
        "-fdiagnostics-json-formatting",
        "-fno-diagnostics-json-formatting",
      ],
      description: "Enable formatting of JSON output",
    },
    {
      name: "-fdiagnostics-minimum-margin-width",
      description:
        "Set minimum width of left margin of source code when showing source",
      requiresSeparator: true,
      args: { name: "number" },
    },
    {
      name: [
        "-fdiagnostics-parseable-fixits",
        "-fno-diagnostics-parseable-fixits",
      ],
      description: "Print fix-it hints in machine-readable form",
    },
    {
      name: "-fdiagnostics-path-format",
      description:
        "Specify how to print any control-flow path associated with a diagnostic",
      requiresSeparator: true,
      args: {
        name: "value",
        suggestions: ["none", "separate-events", "inline-events"],
      },
    },
    {
      name: "-fdiagnostics-plain-output",
      description:
        "Turn off any diagnostics features that complicate the output, such as line numbers, color, and warning URLs",
    },
    {
      name: "-fdiagnostics-set-output",
      description: "Set output format",
      requiresSeparator: true,
      args: { name: "value" },
    },
    {
      name: ["-fdiagnostics-show-caret", "-fno-diagnostics-show-caret"],
      description: "Show the source line with a caret indicating the column",
    },
    {
      name: "-fdiagnostics-show-context",
      description: "Collect and print more context information for diagnostics",
      requiresSeparator: true,
      args: { name: "number", isOptional: true },
    },
    {
      name: ["-fdiagnostics-show-cwe", "-fno-diagnostics-show-cwe"],
      description:
        "Print CWE identifiers for diagnostic messages, where available",
    },
    {
      name: [
        "-fdiagnostics-show-event-links",
        "-fno-diagnostics-show-event-links",
      ],
      description: "Show lines linking related events in diagnostic paths",
    },
    {
      name: [
        "-fdiagnostics-show-highlight-colors",
        "-fno-diagnostics-show-highlight-colors",
      ],
      description:
        "Use color within diagnostic messages to highlight pertinent information",
    },
    {
      name: ["-fdiagnostics-show-labels", "-fno-diagnostics-show-labels"],
      description:
        "Show labels annotating ranges of source code when showing source",
    },
    {
      name: [
        "-fdiagnostics-show-line-numbers",
        "-fno-diagnostics-show-line-numbers",
      ],
      description: "Show line numbers in the left margin when showing source",
    },
    {
      name: "-fdiagnostics-show-location",
      description:
        "How often to emit source location at the beginning of line-wrapped diagnostics",
      requiresSeparator: true,
      args: { name: "value", suggestions: ["once", "every-line"] },
    },
    {
      name: [
        "-fdiagnostics-show-nesting-levels",
        "-fno-diagnostics-show-nesting-levels",
      ],
      description:
        "Show nesting levels as numbers when showing nested diagnostics",
    },
    {
      name: [
        "-fdiagnostics-show-nesting-locations",
        "-fno-diagnostics-show-nesting-locations",
      ],
      description: "Show location information when showing nested diagnostics",
    },
    {
      name: ["-fdiagnostics-show-nesting", "-fno-diagnostics-show-nesting"],
      description:
        "Use indentation to show nesting of diagnostics in text output",
    },
    {
      name: ["-fdiagnostics-show-option", "-fno-diagnostics-show-option"],
      description:
        "Amend appropriate diagnostic messages with the command line option that controls them",
    },
    {
      name: [
        "-fdiagnostics-show-path-depths",
        "-fno-diagnostics-show-path-depths",
      ],
      description: "Show stack depths of events in paths",
    },
    {
      name: ["-fdiagnostics-show-rules", "-fno-diagnostics-show-rules"],
      description: "Print any rules associated with diagnostic messages",
    },
    {
      name: "-fdiagnostics-text-art-charset",
      description: "Determine which characters to use in text arg diagrams",
      requiresSeparator: true,
      args: {
        name: "value",
        suggestions: ["none", "ascii", "unicode", "emoji"],
      },
    },
    {
      name: "-fdiagnostics-urls",
      description: "Embed URLs in diagnostics",
      requiresSeparator: true,
      args: { name: "value", suggestions: ["never", "always", "auto"] },
    },
    {
      name: ["-fdirectives-only", "-fno-directives-only"],
      description: "Preprocess directives only",
    },
    {
      name: ["-fdollars-in-identifiers", "-fno-dollars-in-identifiers"],
      description: "Permit '$' as an identifier character",
    },
    {
      name: ["-fdse", "-fno-dse"],
      description: "Use the RTL dead store elimination pass",
    },
    {
      name: "-fdump-ada-spec-slim",
      description: "Write all declarations as Ada code for the given file only",
    },
    {
      name: "-fdump-ada-spec",
      description: "Write all declarations as Ada code transitively",
    },
    {
      name: "-fdump-analyzer-callgraph",
      description:
        "Dump a representation of the call graph suitable for viewing with GraphViz to file.callgraph.dot",
    },
    {
      name: "-fdump-analyzer-exploded-graph",
      description: "Dump the analyzer exploded graph to a SRCFILE.eg.dot file",
    },
    {
      name: "-fdump-analyzer-exploded-nodes-2",
      description:
        "Dump a textual representation of the exploded graph to SRCFILE.eg.txt",
    },
    {
      name: "-fdump-analyzer-exploded-nodes-3",
      description:
        "Dump a textual representation of the exploded graph to SRCFILE.eg-ID.txt",
    },
    {
      name: "-fdump-analyzer-exploded-nodes",
      description:
        "Emit diagnostics showing the location of nodes in the exploded graph",
    },
    {
      name: "-fdump-analyzer-exploded-paths",
      description:
        "Dump a textual representation of each diagnostic's exploded path to SRCFILE.IDX.KIND.epath.txt",
    },
    {
      name: "-fdump-analyzer-feasibility",
      description:
        "Dump various analyzer internals to SRCFILE.*.fg.dot and SRCFILE.*.tg.dot",
    },
    {
      name: "-fdump-analyzer-infinite-loop",
      description:
        "Dump various analyzer internals to SRCFILE.*.infinite-loop.dot",
    },
    {
      name: "-fdump-analyzer-json",
      description:
        "Dump analyzer-specific data to a SRCFILE.analyzer.json.gz file",
    },
    {
      name: "-fdump-analyzer-state-purge",
      description:
        "Dump state-purging information to a SRCFILE.state-purge.dot file",
    },
    {
      name: "-fdump-analyzer-stderr",
      description: "Dump various analyzer internals to stderr",
    },
    {
      name: "-fdump-analyzer-supergraph",
      description:
        "Dump the analyzer supergraph to a SRCFILE.supergraph.dot file",
    },
    {
      name: "-fdump-analyzer-untracked",
      description:
        "Emit custom warnings with internal details intended for analyzer developers",
    },
    {
      name: "-fdump-analyzer",
      description: "Dump various analyzer internals to SRCFILE.analyzer.txt",
    },
    {
      name: "-fdump-debug",
      description:
        "Dump debugging information generated during the debug generation phase",
    },
    {
      name: "-fdump-earlydebug",
      description:
        "Dump debugging information generated during the early debug generation phase",
    },
    {
      name: "-fdump-final-insns",
      description: "Dump the final internal representation (RTL) to file",
      requiresSeparator: true,
      args: { name: "file", isOptional: true, template: "filepaths" },
    },
    {
      name: "-fdump-go-spec",
      description: "Write all declarations to file as Go code",
      requiresSeparator: true,
      args: { name: "file", template: "filepaths" },
    },
    {
      name: ["-fdump-internal-locations", "-fno-dump-internal-locations"],
      description:
        "Dump detailed information on GCC's internal representation of source code locations",
    },
    {
      name: "-fdump-ipa-clones",
      description:
        "Dump information about call graph node clones and removals during interprocedural optimization",
    },
    {
      name: ["-fdump-noaddr", "-fno-dump-noaddr"],
      description: "Suppress output of addresses in debugging dumps",
    },
    {
      name: ["-fdump-passes", "-fno-dump-passes"],
      description: "Dump optimization passes",
    },
    {
      name: "-fdump-rtl-all",
      description: "Produce all the dumps listed above",
    },
    {
      name: "-fdump-tree-all",
      description:
        "Control the dumping at various stages of processing the intermediate language tree to a file",
    },
    {
      name: ["-fdump-unnumbered-links", "-fno-dump-unnumbered-links"],
      description:
        "Suppress output of previous and next insn numbers in debugging dumps",
    },
    {
      name: ["-fdump-unnumbered", "-fno-dump-unnumbered"],
      description:
        "Suppress output of instruction numbers, line number notes and addresses in debugging dumps",
    },
    {
      name: ["-fdwarf2-cfi-asm", "-fno-dwarf2-cfi-asm"],
      description: "Enable CFI tables via GAS assembler directives",
    },
    {
      name: ["-fearly-inlining", "-fno-early-inlining"],
      description: "Perform early inlining",
    },
    {
      name: [
        "-feliminate-unused-debug-symbols",
        "-fno-eliminate-unused-debug-symbols",
      ],
      description: "Perform unused symbol elimination in debug info",
    },
    {
      name: [
        "-feliminate-unused-debug-types",
        "-fno-eliminate-unused-debug-types",
      ],
      description: "Perform unused type elimination in debug info",
    },
    {
      name: ["-femit-class-debug-always", "-fno-emit-class-debug-always"],
      description: "Do not suppress C++ class debug information",
    },
    {
      name: "-femit-struct-debug-baseonly",
      description: "Aggressive reduced debug info for structs",
    },
    {
      name: "-femit-struct-debug-detailed",
      description: "Detailed reduced debug info for structs",
      requiresSeparator: true,
      args: { name: "spec-list" },
    },
    {
      name: "-femit-struct-debug-reduced",
      description: "Conservative reduced debug info for structs",
    },
    {
      name: ["-fexceptions", "-fno-exceptions"],
      description: "Enable exception handling",
    },
    {
      name: "-fexcess-precision",
      description: "Specify handling of excess floating-point precision",
      requiresSeparator: true,
      args: { name: "value", suggestions: ["fast", "standard", "16"] },
    },
    {
      name: "-fexec-charset",
      description:
        "Convert all strings and character constants to character set <cset>",
      requiresSeparator: true,
      args: { name: "cset" },
    },
    {
      name: ["-fexpensive-optimizations", "-fno-expensive-optimizations"],
      description: "Perform a number of minor, expensive optimizations",
    },
    {
      name: ["-fext-dce", "-fno-ext-dce"],
      description:
        "Perform dead code elimination on zero and sign extensions with special dataflow analysis",
    },
    {
      name: ["-fextended-identifiers", "-fno-extended-identifiers"],
      description:
        "Permit universal character names (\\u and \\U) in identifiers",
    },
    {
      name: ["-ffast-math", "-fno-fast-math"],
      description:
        "Enable a set of unsafe floating-point optimizations (-fno-math-errno, -funsafe-math-optimizations, -ffinite-math-only and others)",
    },
    {
      name: ["-ffat-lto-objects", "-fno-fat-lto-objects"],
      description:
        "Output lto objects containing both the intermediate language and binary output",
    },
    {
      name: "-ffile-prefix-map",
      description: "Map one directory name to another in compilation result",
      requiresSeparator: true,
      isRepeatable: true,
      args: { name: "old" },
    },
    {
      name: ["-ffinite-loops", "-fno-finite-loops"],
      description:
        "Assume that loops with an exit will terminate and not loop indefinitely",
    },
    {
      name: ["-ffinite-math-only", "-fno-finite-math-only"],
      description: "Assume no NaNs or infinities are generated",
    },
    {
      name: "-ffixed-",
      description: "Mark <register> as being unavailable to the compiler",
      isRepeatable: true,
      args: { name: "register" },
    },
    {
      name: ["-ffloat-store", "-fno-float-store"],
      description:
        "Don't allocate floats and doubles in extended-precision registers",
    },
    {
      name: ["-ffold-mem-offsets", "-fno-fold-mem-offsets"],
      description:
        "Fold instructions calculating memory offsets to the memory access instruction if possible",
    },
    {
      name: ["-fforward-propagate", "-fno-forward-propagate"],
      description: "Perform a forward propagation pass on RTL",
    },
    {
      name: "-ffp-contract",
      description: "Perform floating-point expression contraction",
      requiresSeparator: true,
      args: { name: "value", suggestions: ["off", "on", "fast"] },
    },
    {
      name: ["-ffp-int-builtin-inexact", "-fno-fp-int-builtin-inexact"],
      description:
        'Allow built-in functions ceil, floor, round, trunc to raise "inexact" exceptions',
    },
    {
      name: ["-ffreestanding", "-fno-freestanding"],
      description: 'Do not assume that standard C libraries and "main" exist',
    },
    {
      name: ["-ffunction-cse", "-fno-function-cse"],
      description: "Allow function addresses to be held in registers",
    },
    {
      name: ["-ffunction-sections", "-fno-function-sections"],
      description: "Place each function into its own section",
    },
    {
      name: [
        "-ffuse-ops-with-volatile-access",
        "-fno-fuse-ops-with-volatile-access",
      ],
      description:
        "Allow limited optimization of operations with volatile memory access",
    },
    {
      name: ["-fgcse-after-reload", "-fno-gcse-after-reload"],
      description:
        "Perform global common subexpression elimination after register allocation has finished",
    },
    {
      name: ["-fgcse-las", "-fno-gcse-las"],
      description:
        "Perform redundant load after store elimination in global common subexpression elimination",
    },
    {
      name: ["-fgcse-lm", "-fno-gcse-lm"],
      description:
        "Perform enhanced load motion during global common subexpression elimination",
    },
    {
      name: ["-fgcse-sm", "-fno-gcse-sm"],
      description:
        "Perform store motion after global common subexpression elimination",
    },
    {
      name: ["-fgcse", "-fno-gcse"],
      description: "Perform global common subexpression elimination",
    },
    {
      name: ["-fgimple", "-fno-gimple"],
      description: "Enable parsing GIMPLE",
    },
    {
      name: "-fgnat-encodings",
      description:
        "Select the balance between GNAT encodings and standard DWARF emitted in the debug information",
      requiresSeparator: true,
      args: { name: "value", suggestions: ["all", "gdb", "minimal"] },
    },
    {
      name: "-fgnu-runtime",
      description: "Generate code for GNU runtime environment",
    },
    {
      name: ["-fgnu-tm", "-fno-gnu-tm"],
      description: "Enable support for GNU transactional memory",
    },
    {
      name: ["-fgnu-unique", "-fno-gnu-unique"],
      description: "Use STB_GNU_UNIQUE if supported by the assembler",
    },
    {
      name: ["-fgnu89-inline", "-fno-gnu89-inline"],
      description: "Use traditional GNU semantics for inline functions",
    },
    {
      name: ["-fgraphite-identity", "-fno-graphite-identity"],
      description: "Enable Graphite Identity transformation",
    },
    {
      name: ["-fgraphite", "-fno-graphite"],
      description: "Enable in and out of Graphite representation",
    },
    {
      name: ["-fguess-branch-probability", "-fno-guess-branch-probability"],
      description: "Enable guessing of branch probabilities",
    },
    {
      name: ["-fhardcfr-check-exceptions", "-fno-hardcfr-check-exceptions"],
      description:
        "Check CFR execution paths also when exiting a function through an exception",
    },
    {
      name: "-fhardcfr-check-noreturn-calls",
      description:
        "Check CFR execution paths also before calling noreturn functions",
      requiresSeparator: true,
      args: {
        name: "value",
        suggestions: ["never", "nothrow", "no-xthrow", "always"],
      },
    },
    {
      name: [
        "-fhardcfr-check-returning-calls",
        "-fno-hardcfr-check-returning-calls",
      ],
      description:
        "Check CFR execution paths also before calls followed by returns of their results",
    },
    {
      name: ["-fhardcfr-skip-leaf", "-fno-hardcfr-skip-leaf"],
      description: "Disable CFR in leaf functions",
    },
    {
      name: ["-fharden-compares", "-fno-harden-compares"],
      description:
        "Harden conditionals not used in branches, checking reversed conditions",
    },
    {
      name: [
        "-fharden-conditional-branches",
        "-fno-harden-conditional-branches",
      ],
      description:
        "Harden conditional branches by checking reversed conditions",
    },
    {
      name: [
        "-fharden-control-flow-redundancy",
        "-fno-harden-control-flow-redundancy",
      ],
      description:
        "Harden control flow by recording and checking execution paths",
    },
    {
      name: ["-fhardened", "-fno-hardened"],
      description: "Enable various security-relevant flags",
    },
    {
      name: "-fhelp",
      description: "Display this information",
      requiresSeparator: true,
      args: { name: "class", isOptional: true },
    },
    {
      name: ["-fhoist-adjacent-loads", "-fno-hoist-adjacent-loads"],
      description:
        "Enable hoisting adjacent loads to encourage generating conditional move instructions",
    },
    {
      name: ["-fhosted", "-fno-hosted"],
      description: "Assume normal C execution environment",
    },
    {
      name: ["-fident", "-fno-ident"],
      description: "Emit .ident assembler directives",
    },
    {
      name: ["-fif-conversion2", "-fno-if-conversion2"],
      description:
        "Perform conversion of conditional jumps to conditional execution",
    },
    {
      name: ["-fif-conversion", "-fno-if-conversion"],
      description:
        "Perform conversion of conditional jumps to branchless equivalents",
    },
    {
      name: ["-findirect-inlining", "-fno-indirect-inlining"],
      description: "Perform indirect inlining",
    },
    {
      name: ["-finhibit-size-directive", "-fno-inhibit-size-directive"],
      description: "Do not generate .size directives",
    },
    {
      name: ["-finline-atomics", "-fno-inline-atomics"],
      description:
        "Inline __atomic operations when a lock free instruction sequence is available",
    },
    {
      name: [
        "-finline-functions-called-once",
        "-fno-inline-functions-called-once",
      ],
      description: "Integrate functions only required by their single caller",
    },
    {
      name: ["-finline-functions", "-fno-inline-functions"],
      description:
        'Integrate functions not declared "inline" into their callers when profitable',
    },
    {
      name: "-finline-limit",
      description: "Limit the size of inlined functions to <number>",
      requiresSeparator: true,
      args: { name: "number" },
    },
    {
      name: ["-finline-small-functions", "-fno-inline-small-functions"],
      description:
        "Integrate functions into their callers when code size is known not to grow",
    },
    {
      name: "-finline-stringops",
      description:
        "Expand memory and string operations (for now, only memset) inline, even when the length is variable or big enough as to require looping",
      requiresSeparator: true,
      args: {
        name: "value",
        isOptional: true,
        suggestions: ["memcmp", "memcpy", "memmove", "memset"],
      },
    },
    {
      name: ["-finline", "-fno-inline"],
      description:
        'Enable inlining of function declared "inline", disabling disables all inlining',
    },
    {
      name: "-finput-charset",
      description: "Specify the default character set for source files",
      requiresSeparator: true,
      args: { name: "cset" },
    },
    {
      name: "-finstrument-functions-exclude-file-list",
      description: "Do not instrument functions listed in files",
      requiresSeparator: true,
      args: { name: "value" },
    },
    {
      name: "-finstrument-functions-exclude-function-list",
      description: "Do not instrument listed functions",
      requiresSeparator: true,
      args: { name: "value" },
    },
    {
      name: ["-finstrument-functions-once", "-fno-instrument-functions-once"],
      description:
        "Instrument function entry and exit with profiling calls invoked once",
    },
    {
      name: ["-finstrument-functions", "-fno-instrument-functions"],
      description: "Instrument function entry and exit with profiling calls",
    },
    {
      name: ["-fipa-bit-cp", "-fno-ipa-bit-cp"],
      description: "Perform interprocedural bitwise constant propagation",
    },
    {
      name: ["-fipa-cp-clone", "-fno-ipa-cp-clone"],
      description:
        "Perform cloning to make Interprocedural constant propagation stronger",
    },
    {
      name: ["-fipa-cp", "-fno-ipa-cp"],
      description: "Perform interprocedural constant propagation",
    },
    {
      name: ["-fipa-icf-functions", "-fno-ipa-icf-functions"],
      description: "Perform Identical Code Folding for functions",
    },
    {
      name: ["-fipa-icf-variables", "-fno-ipa-icf-variables"],
      description: "Perform Identical Code Folding for variables",
    },
    {
      name: ["-fipa-icf", "-fno-ipa-icf"],
      description:
        "Perform Identical Code Folding for functions and read-only variables",
    },
    {
      name: ["-fipa-modref", "-fno-ipa-modref"],
      description: "Perform interprocedural modref analysis",
    },
    {
      name: ["-fipa-profile", "-fno-ipa-profile"],
      description: "Perform interprocedural profile propagation",
    },
    {
      name: ["-fipa-pta", "-fno-ipa-pta"],
      description: "Perform interprocedural points-to analysis",
    },
    {
      name: ["-fipa-pure-const", "-fno-ipa-pure-const"],
      description: "Discover pure and const functions",
    },
    {
      name: ["-fipa-ra", "-fno-ipa-ra"],
      description: "Use caller save register across calls if possible",
    },
    {
      name: ["-fipa-reference-addressable", "-fno-ipa-reference-addressable"],
      description:
        "Discover read-only, write-only and non-addressable static variables",
    },
    {
      name: ["-fipa-reference", "-fno-ipa-reference"],
      description: "Discover read-only and non addressable static variables",
    },
    {
      name: ["-fipa-reorder-for-locality", "-fno-ipa-reorder-for-locality"],
      description:
        "Perform reordering and cloning of functions to maximize locality",
    },
    {
      name: ["-fipa-sra", "-fno-ipa-sra"],
      description: "Perform interprocedural reduction of aggregates",
    },
    {
      name: ["-fipa-stack-alignment", "-fno-ipa-stack-alignment"],
      description: "Reduce stack alignment on call sites if possible",
    },
    {
      name: ["-fipa-strict-aliasing", "-fno-ipa-strict-aliasing"],
      description:
        "Assume strict aliasing rules apply across (uninlined) function boundaries",
    },
    {
      name: ["-fipa-vrp", "-fno-ipa-vrp"],
      description: "Perform IPA Value Range Propagation",
    },
    {
      name: "-fira-algorithm",
      description: "Set the used IRA algorithm",
      requiresSeparator: true,
      args: { name: "value", suggestions: ["CB", "priority"] },
    },
    {
      name: ["-fira-hoist-pressure", "-fno-ira-hoist-pressure"],
      description:
        "Use IRA based register pressure calculation in RTL hoist optimizations",
    },
    {
      name: ["-fira-loop-pressure", "-fno-ira-loop-pressure"],
      description:
        "Use IRA based register pressure calculation in RTL loop optimizations",
    },
    {
      name: "-fira-region",
      description: "Set regions for IRA",
      requiresSeparator: true,
      args: { name: "value", suggestions: ["one", "all", "mixed"] },
    },
    {
      name: ["-fira-share-save-slots", "-fno-ira-share-save-slots"],
      description: "Share slots for saving different hard registers",
    },
    {
      name: ["-fira-share-spill-slots", "-fno-ira-share-spill-slots"],
      description: "Share stack slots for spilled pseudo-registers",
    },
    {
      name: "-fira-verbose",
      description: "Control IRA's level of diagnostic messages",
      requiresSeparator: true,
      args: { name: "number" },
    },
    {
      name: [
        "-fisolate-erroneous-paths-attribute",
        "-fno-isolate-erroneous-paths-attribute",
      ],
      description:
        "Isolate paths that pass a null value where a nonnull or returns_nonnull attribute forbids it",
    },
    {
      name: [
        "-fisolate-erroneous-paths-dereference",
        "-fno-isolate-erroneous-paths-dereference",
      ],
      description: "Isolate paths that dereference a null pointer",
    },
    {
      name: "-fivar-visibility",
      description: "Set the default symbol visibility",
      requiresSeparator: true,
      args: {
        name: "value",
        suggestions: ["private", "protected", "public", "package"],
      },
    },
    {
      name: ["-fivopts", "-fno-ivopts"],
      description: "Optimize induction variables on trees",
    },
    {
      name: ["-fjump-tables", "-fno-jump-tables"],
      description: "Use jump tables for sufficiently large switch statements",
    },
    {
      name: ["-fkeep-inline-dllexport", "-fno-keep-inline-dllexport"],
      description: "Don't emit dllexported inline functions unless needed",
    },
    {
      name: ["-fkeep-inline-functions", "-fno-keep-inline-functions"],
      description: "Generate code for functions even if they are fully inlined",
    },
    {
      name: ["-fkeep-static-consts", "-fno-keep-static-consts"],
      description: "Emit static const variables even if they are not used",
    },
    {
      name: ["-fkeep-static-functions", "-fno-keep-static-functions"],
      description:
        "Generate code for static functions even if they are never called",
    },
    {
      name: ["-flate-combine-instructions", "-fno-late-combine-instructions"],
      description:
        "Run two instruction combination passes late in the pass pipeline; one before register allocation and one after",
    },
    {
      name: ["-flax-vector-conversions", "-fno-lax-vector-conversions"],
      description:
        "Allow implicit conversions between vectors with differing numbers of subparts and/or differing element types",
    },
    {
      name: ["-fleading-underscore", "-fno-leading-underscore"],
      description: "Give external symbols a leading underscore",
    },
    {
      name: ["-flifetime-dse", "-fno-lifetime-dse"],
      description:
        "Tell DSE that the storage for a C++ object is dead when the constructor starts and when the destructor finishes",
    },
    {
      name: ["-flimit-function-alignment", "-fno-limit-function-alignment"],
      description:
        "If this option is enabled, the compiler tries to avoid unnecessarily overaligning functions",
    },
    {
      name: ["-flink-libatomic", "-fno-link-libatomic"],
      description: "Enable linking of libatomic",
    },
    {
      name: "-flinker-output",
      description:
        "Set linker output type (used internally during LTO optimization)",
      requiresSeparator: true,
      args: {
        name: "type",
        suggestions: ["exec", "dyn", "pie", "rel", "nolto-rel"],
      },
    },
    {
      name: "-flive-patching",
      description:
        "Control IPA optimizations to provide a safe compilation for live-patching",
      requiresSeparator: true,
      args: {
        name: "value",
        isOptional: true,
        suggestions: ["inline-only-static", "inline-clone"],
      },
    },
    {
      name: ["-flive-range-shrinkage", "-fno-live-range-shrinkage"],
      description: "Relief of register pressure through live range shrinkage",
    },
    {
      name: ["-flocal-ivars", "-fno-local-ivars"],
      description:
        "Allow access to instance variables as if they were local declarations within instance method implementations",
    },
    {
      name: ["-floop-block", "-fno-loop-block"],
      description: "Enable loop nest transforms. Same as -floop-nest-optimize",
    },
    {
      name: ["-floop-interchange", "-fno-loop-interchange"],
      description: "Enable loop interchange on trees",
    },
    {
      name: ["-floop-nest-optimize", "-fno-loop-nest-optimize"],
      description: "Enable the loop nest optimizer",
    },
    {
      name: ["-floop-parallelize-all", "-fno-loop-parallelize-all"],
      description: "Mark all loops as parallel",
    },
    {
      name: ["-floop-strip-mine", "-fno-loop-strip-mine"],
      description: "Enable loop nest transforms. Same as -floop-nest-optimize",
    },
    {
      name: ["-floop-unroll-and-jam", "-fno-loop-unroll-and-jam"],
      description: "Perform unroll-and-jam on loops",
    },
    {
      name: ["-flra-remat", "-fno-lra-remat"],
      description: "Do CFG-sensitive rematerialization in LRA",
    },
    {
      name: "-flto-compression-level",
      description: "Use zlib/zstd compression level <number> for IL",
      requiresSeparator: true,
      args: { name: "number" },
    },
    {
      name: "-flto-incremental-cache-size",
      description:
        "Number of cache entries in incremental LTO after which to prune old entries",
      requiresSeparator: true,
      args: { name: "number" },
    },
    {
      name: "-flto-incremental",
      description: "Enable incremental LTO, with its cache in given directory",
      requiresSeparator: true,
      args: { name: "value" },
    },
    {
      name: "-flto-partition",
      description:
        "Specify the algorithm to partition symbols and vars at linktime",
      requiresSeparator: true,
      args: {
        name: "value",
        suggestions: ["none", "one", "balanced", "1to1", "max", "cache"],
      },
    },
    {
      name: ["-flto-report-wpa", "-fno-lto-report-wpa"],
      description:
        "Report various link-time optimization statistics for WPA only",
    },
    {
      name: ["-flto-report", "-fno-lto-report"],
      description: "Report various link-time optimization statistics",
    },
    {
      name: [
        "-flto-toplevel-asm-heuristics",
        "-fno-lto-toplevel-asm-heuristics",
      ],
      description:
        "Enable heuristics to recognize symbol identifiers in toplevel (not extended) assembly and prevent their mangling/deletion",
    },
    {
      name: "-flto",
      description: "Enable link-time optimization",
      requiresSeparator: true,
      args: { name: "value", isOptional: true },
    },
    {
      name: "-fmacro-prefix-map",
      description:
        "Map one directory name to another in __FILE__, __BASE_FILE__, and __builtin_FILE",
      requiresSeparator: true,
      args: { name: "old" },
    },
    {
      name: "-fmalloc-dce",
      description:
        "Allow removal of malloc and free pairs when allocated block is unused",
      requiresSeparator: true,
      args: { name: "value", isOptional: true, suggestions: ["0", "1", "2"] },
    },
    {
      name: ["-fmath-errno", "-fno-math-errno"],
      description: "Set errno after built-in math functions",
    },
    {
      name: "-fmax-errors",
      description: "Maximum number of errors to report",
      requiresSeparator: true,
      args: { name: "number" },
    },
    {
      name: "-fmax-include-depth",
      description: "Set the maximum depth of the nested #include",
      requiresSeparator: true,
      args: { name: "number" },
    },
    {
      name: ["-fmem-report-wpa", "-fno-mem-report-wpa"],
      description: "Report on permanent memory allocation in WPA only",
    },
    {
      name: ["-fmem-report", "-fno-mem-report"],
      description: "Report on permanent memory allocation",
    },
    {
      name: ["-fmerge-all-constants", "-fno-merge-all-constants"],
      description:
        "Attempt to merge identical constants and constant variables",
    },
    {
      name: ["-fmerge-constants", "-fno-merge-constants"],
      description:
        "Attempt to merge identical constants across compilation units",
    },
    {
      name: ["-fmerge-debug-strings", "-fno-merge-debug-strings"],
      description:
        "Attempt to merge identical debug strings across compilation units",
    },
    {
      name: "-fmessage-length",
      description:
        "Limit diagnostics to <number> characters per line. 0 suppresses line-wrapping",
      requiresSeparator: true,
      args: { name: "number" },
    },
    {
      name: "-fmin-function-alignment",
      description: "Align the start of every function",
      requiresSeparator: true,
      args: { name: "number" },
    },
    {
      name: "-fmodule-header",
      description: "Enable C++ header module (experimental)",
    },
    {
      name: "-fmodule-only",
      description: "Only emit Compiled Module Interface",
    },
    {
      name: [
        "-fmodulo-sched-allow-regmoves",
        "-fno-modulo-sched-allow-regmoves",
      ],
      description:
        "Perform SMS based modulo scheduling with register moves allowed",
    },
    {
      name: ["-fmodulo-sched", "-fno-modulo-sched"],
      description:
        "Perform SMS based modulo scheduling before the first scheduling pass",
    },
    {
      name: ["-fmove-loop-invariants", "-fno-move-loop-invariants"],
      description: "Move loop invariant computations out of loops",
    },
    {
      name: ["-fmove-loop-stores", "-fno-move-loop-stores"],
      description: "Move stores out of loops",
    },
    {
      name: ["-fms-extensions", "-fno-ms-extensions"],
      description: "Don't warn about uses of Microsoft extensions",
    },
    {
      name: "-fmultiflags",
      description: "Building block for specs-based multilib-aware TFLAGS",
    },
    {
      name: "-fnext-runtime",
      description: "Generate code for NeXT (Apple macOS) runtime environment",
    },
    {
      name: ["-fnil-receivers", "-fno-nil-receivers"],
      description: "Assume that receivers of Objective-C messages may be nil",
    },
    {
      name: "-fno-align-functions",
      description: "Disable -falign-functions",
    },
    {
      name: "-fno-align-jumps",
      description: "Disable -falign-jumps",
    },
    {
      name: "-fno-align-labels",
      description: "Disable -falign-labels",
    },
    {
      name: "-fno-align-loops",
      description: "Disable -falign-loops",
    },
    {
      name: "-fno-auto-profile",
      description: "Disable -fauto-profile",
    },
    {
      name: "-fno-builtin-",
      description: "Do not recognize the named built-in function as a built-in",
      isRepeatable: true,
      args: { name: "function" },
    },
    {
      name: "-fno-checking",
      description: "Disable -fchecking",
    },
    {
      name: "-fno-compare-debug",
      description: "Disable -fcompare-debug",
    },
    {
      name: "-fno-diagnostics-color",
      description: "Disable -fdiagnostics-color",
    },
    {
      name: "-fno-diagnostics-show-context",
      description: "Disable -fdiagnostics-show-context",
    },
    {
      name: "-fno-lto",
      description: "Disable -flto",
    },
    {
      name: "-fno-malloc-dce",
      description: "Disable -fmalloc-dce",
    },
    {
      name: "-fno-openmp-target-simd-clone",
      description: "Disable -fopenmp-target-simd-clone",
    },
    {
      name: "-fno-pack-struct",
      description: "Disable -fpack-struct",
    },
    {
      name: "-fno-profile-generate",
      description: "Disable -fprofile-generate",
    },
    {
      name: "-fno-profile-use",
      description: "Disable -fprofile-use",
    },
    {
      name: "-fno-random-seed",
      description: "Disable -frandom-seed",
    },
    {
      name: "-fno-sanitize-recover",
      description:
        "Do not attempt to continue execution after diagnosing undefined behavior for the given sanitizers",
      requiresSeparator: true,
      isRepeatable: true,
      args: {
        name: "value",
        suggestions: [
          "all",
          "address",
          "kernel-address",
          "hwaddress",
          "kernel-hwaddress",
          "memtag-stack",
          "pointer-compare",
          "pointer-subtract",
          "shadow-call-stack",
          "thread",
          "leak",
          "undefined",
          "shift",
          "shift-exponent",
          "shift-base",
          "integer-divide-by-zero",
          "unreachable",
          "vla-bound",
          "null",
          "return",
          "signed-integer-overflow",
          "bounds",
          "bounds-strict",
          "alignment",
          "object-size",
          "float-divide-by-zero",
          "float-cast-overflow",
          "nonnull-attribute",
          "returns-nonnull-attribute",
          "bool",
          "enum",
          "vptr",
          "pointer-overflow",
          "builtin",
        ],
      },
    },
    {
      name: "-fno-sanitize-trap",
      description: "Disable -fsanitize-trap",
    },
    {
      name: "-fno-sanitize",
      description:
        "Disable previously enabled sanitizers (-fno-sanitize=all disables all of them)",
      requiresSeparator: true,
      isRepeatable: true,
      args: {
        name: "value",
        suggestions: [
          "all",
          "address",
          "kernel-address",
          "hwaddress",
          "kernel-hwaddress",
          "memtag-stack",
          "pointer-compare",
          "pointer-subtract",
          "shadow-call-stack",
          "thread",
          "leak",
          "undefined",
          "shift",
          "shift-exponent",
          "shift-base",
          "integer-divide-by-zero",
          "unreachable",
          "vla-bound",
          "null",
          "return",
          "signed-integer-overflow",
          "bounds",
          "bounds-strict",
          "alignment",
          "object-size",
          "float-divide-by-zero",
          "float-cast-overflow",
          "nonnull-attribute",
          "returns-nonnull-attribute",
          "bool",
          "enum",
          "vptr",
          "pointer-overflow",
          "builtin",
        ],
      },
    },
    {
      name: "-fno-sched-stalled-insns-dep",
      description: "Disable -fsched-stalled-insns-dep",
    },
    {
      name: "-fno-sched-stalled-insns",
      description: "Disable -fsched-stalled-insns",
    },
    {
      name: "-fno-stack-check",
      description: "Disable -fstack-check",
    },
    {
      name: "-fno-strict-flex-arrays",
      description: "Disable -fstrict-flex-arrays",
    },
    {
      name: "-fno-strong-eval-order",
      description: "Disable -fstrong-eval-order",
    },
    {
      name: "-fno-tree-parallelize-loops",
      description: "Disable -ftree-parallelize-loops",
    },
    {
      name: "-fno-vect-cost-model",
      description: "Disable -fvect-cost-model",
    },
    {
      name: "-fno-wpa",
      description: "Disable -fwpa",
    },
    {
      name: ["-fnon-call-exceptions", "-fno-non-call-exceptions"],
      description: "Support synchronous non-call exceptions",
    },
    {
      name: "-fobjc-abi-version",
      description:
        "Specify which ABI to use for Objective-C family code and meta-data generation",
      requiresSeparator: true,
      args: { name: "number" },
    },
    {
      name: ["-fobjc-direct-dispatch", "-fno-objc-direct-dispatch"],
      description: "Allow fast jumps to the message dispatcher",
    },
    {
      name: ["-fobjc-exceptions", "-fno-objc-exceptions"],
      description: "Enable Objective-C exception and synchronization syntax",
    },
    {
      name: ["-fobjc-gc", "-fno-objc-gc"],
      description:
        "Enable garbage collection (GC) in Objective-C/Objective-C++ programs",
    },
    {
      name: ["-fobjc-nilcheck", "-fno-objc-nilcheck"],
      description:
        "Enable inline checks for nil receivers with the NeXT runtime and ABI version 2",
    },
    {
      name: ["-fobjc-sjlj-exceptions", "-fno-objc-sjlj-exceptions"],
      description: "Enable Objective-C setjmp exception handling runtime",
    },
    {
      name: "-fobjc-std",
      description:
        "Conform to the Objective-C 1.0 language as implemented in GCC 4.0",
      requiresSeparator: true,
      args: { name: "value", suggestions: ["objc1"] },
    },
    {
      name: "-foffload-abi-host-opts",
      description: "Specify host ABI options",
      requiresSeparator: true,
      args: { name: "options" },
    },
    {
      name: "-foffload-abi",
      description: "Set the ABI to use in an offload compiler",
      requiresSeparator: true,
      args: { name: "value", suggestions: ["ilp32", "lp64"] },
    },
    {
      name: "-foffload-options",
      description: "Specify options for the offloading targets",
      requiresSeparator: true,
      args: { name: "targets" },
    },
    {
      name: "-foffload",
      description:
        "Specify for which OpenMP and OpenACC offload targets code should be generated",
      requiresSeparator: true,
      args: { name: "value", suggestions: ["disable", "default"] },
    },
    {
      name: ["-fomit-frame-pointer", "-fno-omit-frame-pointer"],
      description: "When possible do not generate stack frames",
    },
    {
      name: "-fopenacc-dim",
      description: "Specify default OpenACC compute dimensions",
      requiresSeparator: true,
      args: { name: "value" },
    },
    {
      name: ["-fopenacc", "-fno-openacc"],
      description: "Enable OpenACC",
    },
    {
      name: ["-fopenmp-simd", "-fno-openmp-simd"],
      description: "Enable OpenMP's SIMD directives",
    },
    {
      name: "-fopenmp-target-simd-clone",
      description:
        "Generate SIMD clones for functions with the OpenMP declare target directive",
      requiresSeparator: true,
      args: {
        name: "value",
        isOptional: true,
        suggestions: ["none", "host", "nohost", "any"],
      },
    },
    {
      name: ["-fopenmp", "-fno-openmp"],
      description: "Enable OpenMP (implies -frecursive in Fortran)",
    },
    {
      name: ["-fopt-info", "-fno-opt-info"],
      description: "Enable all optimization info dumps on stderr",
    },
    {
      name: ["-foptimize-crc", "-fno-optimize-crc"],
      description:
        "Detect loops calculating CRC and replace them with a faster implementation",
    },
    {
      name: ["-foptimize-sibling-calls", "-fno-optimize-sibling-calls"],
      description: "Optimize sibling and tail recursive calls",
    },
    {
      name: ["-foptimize-strlen", "-fno-optimize-strlen"],
      description: "Enable string length optimizations on trees",
    },
    {
      name: "--for-assembler",
      description: "Pass option as an option to the assembler",
      args: { name: "value" },
    },
    {
      name: "--for-linker",
      description: "Pass option as an option to the linker",
      args: { name: "value" },
    },
    {
      name: "--force-link",
      description:
        "Pretend the symbol symbol is undefined, to force linking of library modules to define it",
      args: { name: "value" },
    },
    {
      name: "-fpack-struct",
      description: "Pack structure members together without holes",
      requiresSeparator: true,
      args: { name: "number", isOptional: true },
    },
    {
      name: ["-fpartial-inlining", "-fno-partial-inlining"],
      description: "Perform partial inlining",
    },
    {
      name: "-fpatchable-function-entry",
      description: "Insert NOP instructions at each function entry",
      requiresSeparator: true,
      args: { name: "value" },
    },
    {
      name: "-fpath-coverage-limit",
      description: "Don't instrument functions path count exceeding <number>",
      requiresSeparator: true,
      args: { name: "number" },
    },
    {
      name: ["-fpath-coverage", "-fno-path-coverage"],
      description: "Insert path profiling code",
    },
    {
      name: ["-fpcc-struct-return", "-fno-pcc-struct-return"],
      description: "Return small aggregates in memory, not registers",
    },
    {
      name: ["-fpch-deps", "-fno-pch-deps"],
      description:
        "List the files from a precompiled header's dependencies in dependency output",
    },
    {
      name: ["-fpch-preprocess", "-fno-pch-preprocess"],
      description: "Look for and use PCH files even when preprocessing",
    },
    {
      name: ["-fpeel-loops", "-fno-peel-loops"],
      description: "Perform loop peeling",
    },
    {
      name: ["-fpeephole2", "-fno-peephole2"],
      description: "Enable an RTL peephole pass before sched2",
    },
    {
      name: ["-fpeephole", "-fno-peephole"],
      description: "Enable machine specific peephole optimizations",
    },
    {
      name: ["-fpermissive", "-fno-permissive"],
      description: "Downgrade conformance errors to warnings",
    },
    {
      name: "-fpermitted-flt-eval-methods",
      description: "Specify which values of FLT_EVAL_METHOD are permitted",
      requiresSeparator: true,
      args: { name: "value", suggestions: ["c11", "ts-18661-3"] },
    },
    {
      name: ["-fPIC", "-fno-PIC"],
      description:
        "Generate position-independent code if possible (large mode)",
    },
    {
      name: ["-fpic", "-fno-pic"],
      description:
        "Generate position-independent code if possible (small mode)",
    },
    {
      name: ["-fPIE", "-fno-PIE"],
      description:
        "Generate position-independent code for executables if possible (large mode)",
    },
    {
      name: ["-fpie", "-fno-pie"],
      description:
        "Generate position-independent code for executables if possible (small mode)",
    },
    {
      name: ["-fplan9-extensions", "-fno-plan9-extensions"],
      description: "Enable Plan 9 language extensions",
    },
    {
      name: ["-fplt", "-fno-plt"],
      description:
        "Use PLT for PIC calls (-fno-plt: load the address from GOT at call site)",
    },
    {
      name: "-fplugin-arg-",
      description:
        "Specify an argument key=value for the named plugin (-fplugin-arg-NAME-KEY=VALUE)",
      isRepeatable: true,
      args: { name: "name" },
    },
    {
      name: "-fplugin",
      description: "Specify a plugin to load",
      requiresSeparator: true,
      isRepeatable: true,
      args: { name: "name.so", template: "filepaths" },
    },
    {
      name: ["-fpost-ipa-mem-report", "-fno-post-ipa-mem-report"],
      description:
        "Report on memory allocation after interprocedural optimization",
    },
    {
      name: ["-fpre-ipa-mem-report", "-fno-pre-ipa-mem-report"],
      description:
        "Report on memory allocation before interprocedural optimization",
    },
    {
      name: ["-fpredictive-commoning", "-fno-predictive-commoning"],
      description: "Run predictive commoning optimization",
    },
    {
      name: ["-fprefetch-loop-arrays", "-fno-prefetch-loop-arrays"],
      description:
        "Generate prefetch instructions, if available, for arrays in loops",
    },
    {
      name: ["-fpreprocessed", "-fno-preprocessed"],
      description: "Treat the input file as already preprocessed",
    },
    {
      name: ["-fprintf-return-value", "-fno-printf-return-value"],
      description: "Treat known sprintf return values as constants",
    },
    {
      name: ["-fprofile-abs-path", "-fno-profile-abs-path"],
      description: "Generate absolute source path names for gcov",
    },
    {
      name: ["-fprofile-arcs", "-fno-profile-arcs"],
      description: "Insert arc-based program profiling code",
    },
    {
      name: ["-fprofile-correction", "-fno-profile-correction"],
      description: "Enable correction of flow inconsistent profile data input",
    },
    {
      name: "-fprofile-dir",
      description:
        "Set the top-level directory for storing the profile data. The default is 'pwd'",
      requiresSeparator: true,
      args: { name: "path", template: "folders" },
    },
    {
      name: "-fprofile-exclude-files",
      description:
        "Instrument only functions from files whose name does not match any of the regular expressions (separated by semi-colons)",
      requiresSeparator: true,
      args: { name: "value" },
    },
    {
      name: "-fprofile-filter-files",
      description:
        "Instrument only functions from files whose name matches any of the regular expressions (separated by semi-colons)",
      requiresSeparator: true,
      args: { name: "value" },
    },
    {
      name: "-fprofile-generate",
      description:
        "Enable common options for generating profile info for profile feedback directed optimizations",
      requiresSeparator: true,
      args: { name: "value", isOptional: true },
    },
    {
      name: "-fprofile-info-section",
      description:
        "Register the profile information in the .gcov_info section instead of using a constructor/destructor",
      requiresSeparator: true,
      args: { name: "value", isOptional: true },
    },
    {
      name: "-fprofile-note",
      description: "Select the name for storing the profile note file",
      requiresSeparator: true,
      args: { name: "value" },
    },
    {
      name: ["-fprofile-partial-training", "-fno-profile-partial-training"],
      description:
        "Do not assume that functions never executed during the train run are cold",
    },
    {
      name: "-fprofile-prefix-map",
      description: "Map one directory name to another in GCOV coverage result",
      requiresSeparator: true,
      isRepeatable: true,
      args: { name: "old" },
    },
    {
      name: "-fprofile-prefix-path",
      description:
        "Remove prefix from absolute path before mangling name for -fprofile-generate= and -fprofile-use=",
      requiresSeparator: true,
      args: { name: "value" },
    },
    {
      name: ["-fprofile-reorder-functions", "-fno-profile-reorder-functions"],
      description: "Enable function reordering that improves code placement",
    },
    {
      name: ["-fprofile-report", "-fno-profile-report"],
      description: "Report on consistency of profile",
    },
    {
      name: "-fprofile-reproducible",
      description:
        "Control level of reproducibility of profile gathered by -fprofile-generate",
      requiresSeparator: true,
      args: {
        name: "value",
        suggestions: ["serial", "parallel-runs", "multithreaded"],
      },
    },
    {
      name: "-fprofile-update",
      description: "Set the profile update method",
      requiresSeparator: true,
      args: {
        name: "value",
        suggestions: ["single", "atomic", "prefer-atomic"],
      },
    },
    {
      name: "-fprofile-use",
      description:
        "Enable common options for performing profile feedback directed optimizations",
      requiresSeparator: true,
      args: { name: "value", isOptional: true },
    },
    {
      name: ["-fprofile-values", "-fno-profile-values"],
      description: "Insert code to profile values of expressions",
    },
    {
      name: ["-fprofile", "-fno-profile"],
      description: "Enable basic program profiling code",
    },
    {
      name: "-frandom-seed",
      description:
        "Provide a seed used in place of random numbers when generating certain symbol names",
      requiresSeparator: true,
      isRepeatable: true,
      args: { name: "string", isOptional: true },
    },
    {
      name: ["-freciprocal-math", "-fno-reciprocal-math"],
      description:
        "Same as -fassociative-math for expressions which include division",
    },
    {
      name: ["-frecord-gcc-switches", "-fno-record-gcc-switches"],
      description: "Record gcc command line switches in the object file",
    },
    {
      name: ["-free", "-fno-ree"],
      description: "Turn on Redundant Extensions Elimination pass",
    },
    {
      name: ["-freg-struct-return", "-fno-reg-struct-return"],
      description: "Return small aggregates in registers",
    },
    {
      name: ["-frename-registers", "-fno-rename-registers"],
      description: "Perform a register renaming optimization pass",
    },
    {
      name: "-freorder-blocks-algorithm",
      description: "Set the used basic block reordering algorithm",
      requiresSeparator: true,
      args: { name: "value", suggestions: ["simple", "stc"] },
    },
    {
      name: [
        "-freorder-blocks-and-partition",
        "-fno-reorder-blocks-and-partition",
      ],
      description:
        "Reorder basic blocks and partition into hot and cold sections",
    },
    {
      name: ["-freorder-blocks", "-fno-reorder-blocks"],
      description: "Reorder basic blocks to improve code placement",
    },
    {
      name: ["-freorder-functions", "-fno-reorder-functions"],
      description: "Reorder functions to improve code placement",
    },
    {
      name: ["-freplace-objc-classes", "-fno-replace-objc-classes"],
      description:
        "Used in Fix-and-Continue mode to indicate that object files may be swapped in at runtime",
    },
    {
      name: ["-freport-bug", "-fno-report-bug"],
      description:
        "Collect and dump debug information into temporary file if ICE in C/C++ compiler occurred",
    },
    {
      name: ["-frerun-cse-after-loop", "-fno-rerun-cse-after-loop"],
      description:
        "Add a common subexpression elimination pass after loop optimizations",
    },
    {
      name: [
        "-freschedule-modulo-scheduled-loops",
        "-fno-reschedule-modulo-scheduled-loops",
      ],
      description:
        "Enable/Disable the traditional scheduling in loops that already passed modulo scheduling",
    },
    {
      name: ["-frounding-math", "-fno-rounding-math"],
      description:
        "Disable optimizations that assume default FP rounding behavior",
    },
    {
      name: [
        "-fsanitize-address-use-after-scope",
        "-fno-sanitize-address-use-after-scope",
      ],
      description:
        "Enable sanitization of local variables to detect use-after-scope bugs",
    },
    {
      name: "-fsanitize-coverage",
      description: "Select type of coverage sanitization",
      requiresSeparator: true,
      args: { name: "value", suggestions: ["trace-pc", "trace-cmp"] },
    },
    {
      name: "-fsanitize-recover",
      description:
        "After diagnosing undefined behavior attempt to continue execution",
      requiresSeparator: true,
      args: { name: "value", isOptional: true },
    },
    {
      name: "-fsanitize-sections",
      description: "Sanitize global variables in user-defined sections",
      requiresSeparator: true,
      isRepeatable: true,
      args: { name: "value" },
    },
    {
      name: "-fsanitize-trap",
      description:
        "Report undefined behavior with __builtin_trap instead of a libubsan call for the listed sanitizers",
      requiresSeparator: true,
      args: { name: "value", isOptional: true },
    },
    {
      name: [
        "-fsanitize-undefined-trap-on-error",
        "-fno-sanitize-undefined-trap-on-error",
      ],
      description: "This switch is deprecated; use -fsanitize-trap= instead",
      deprecated: true,
    },
    {
      name: "-fsanitize",
      description: "Select what to sanitize",
      requiresSeparator: true,
      isRepeatable: true,
      args: {
        name: "value",
        suggestions: [
          "address",
          "kernel-address",
          "hwaddress",
          "kernel-hwaddress",
          "memtag-stack",
          "pointer-compare",
          "pointer-subtract",
          "shadow-call-stack",
          "thread",
          "leak",
          "undefined",
          "shift",
          "shift-exponent",
          "shift-base",
          "integer-divide-by-zero",
          "unreachable",
          "vla-bound",
          "null",
          "return",
          "signed-integer-overflow",
          "bounds",
          "bounds-strict",
          "alignment",
          "object-size",
          "float-divide-by-zero",
          "float-cast-overflow",
          "nonnull-attribute",
          "returns-nonnull-attribute",
          "bool",
          "enum",
          "vptr",
          "pointer-overflow",
          "builtin",
        ],
      },
    },
    {
      name: ["-fsave-optimization-record", "-fno-save-optimization-record"],
      description:
        "Write a SRCFILE.opt-record.json file detailing what optimizations were performed",
    },
    {
      name: [
        "-fsched-critical-path-heuristic",
        "-fno-sched-critical-path-heuristic",
      ],
      description: "Enable the critical path heuristic in the scheduler",
    },
    {
      name: ["-fsched-dep-count-heuristic", "-fno-sched-dep-count-heuristic"],
      description: "Enable the dependent count heuristic in the scheduler",
    },
    {
      name: ["-fsched-group-heuristic", "-fno-sched-group-heuristic"],
      description: "Enable the group heuristic in the scheduler",
    },
    {
      name: ["-fsched-interblock", "-fno-sched-interblock"],
      description: "Enable scheduling across basic blocks",
    },
    {
      name: ["-fsched-last-insn-heuristic", "-fno-sched-last-insn-heuristic"],
      description: "Enable the last instruction heuristic in the scheduler",
    },
    {
      name: ["-fsched-pressure", "-fno-sched-pressure"],
      description: "Enable register pressure sensitive insn scheduling",
    },
    {
      name: ["-fsched-rank-heuristic", "-fno-sched-rank-heuristic"],
      description: "Enable the rank heuristic in the scheduler",
    },
    {
      name: ["-fsched-spec-insn-heuristic", "-fno-sched-spec-insn-heuristic"],
      description:
        "Enable the speculative instruction heuristic in the scheduler",
    },
    {
      name: ["-fsched-spec-load-dangerous", "-fno-sched-spec-load-dangerous"],
      description: "Allow speculative motion of more loads",
    },
    {
      name: ["-fsched-spec-load", "-fno-sched-spec-load"],
      description: "Allow speculative motion of some loads",
    },
    {
      name: ["-fsched-spec", "-fno-sched-spec"],
      description: "Allow speculative motion of non-loads",
    },
    {
      name: "-fsched-stalled-insns-dep",
      description:
        "Set dependence distance checking in premature scheduling of queued insns",
      requiresSeparator: true,
      args: { name: "number", isOptional: true },
    },
    {
      name: "-fsched-stalled-insns",
      description: "Allow premature scheduling of queued insns",
      requiresSeparator: true,
      args: { name: "number", isOptional: true },
    },
    {
      name: "-fsched-verbose",
      description: "Set the verbosity level of the scheduler",
      requiresSeparator: true,
      args: { name: "number" },
    },
    {
      name: ["-fsched2-use-superblocks", "-fno-sched2-use-superblocks"],
      description: "If scheduling post reload, do superblock scheduling",
    },
    {
      name: ["-fschedule-fusion", "-fno-schedule-fusion"],
      description:
        "Perform a target dependent instruction fusion optimization pass",
    },
    {
      name: ["-fschedule-insns2", "-fno-schedule-insns2"],
      description: "Reschedule instructions after register allocation",
    },
    {
      name: ["-fschedule-insns", "-fno-schedule-insns"],
      description: "Reschedule instructions before register allocation",
    },
    {
      name: ["-fsearch-include-path", "-fno-search-include-path"],
      description: "Look for the main source file on the include path",
    },
    {
      name: ["-fsection-anchors", "-fno-section-anchors"],
      description: "Access data in the same section from shared anchor points",
    },
    {
      name: [
        "-fsel-sched-pipelining-outer-loops",
        "-fno-sel-sched-pipelining-outer-loops",
      ],
      description:
        "Perform software pipelining of outer loops during selective scheduling",
    },
    {
      name: ["-fsel-sched-pipelining", "-fno-sel-sched-pipelining"],
      description:
        "Perform software pipelining of inner loops during selective scheduling",
    },
    {
      name: [
        "-fsel-sched-reschedule-pipelined",
        "-fno-sel-sched-reschedule-pipelined",
      ],
      description: "Reschedule pipelined regions without pipelining",
    },
    {
      name: ["-fselective-scheduling2", "-fno-selective-scheduling2"],
      description: "Run selective scheduling after reload",
    },
    {
      name: ["-fselective-scheduling", "-fno-selective-scheduling"],
      description: "Schedule instructions using selective scheduling algorithm",
    },
    {
      name: "-fself-test",
      description: "Run self-tests, using the given path to locate test files",
      requiresSeparator: true,
      args: { name: "value" },
    },
    {
      name: ["-fsemantic-interposition", "-fno-semantic-interposition"],
      description:
        "Allow interposing function (or variables) by ones with different semantics (or initializer) respectively by dynamic linker",
    },
    {
      name: ["-fshort-enums", "-fno-short-enums"],
      description:
        "Use the narrowest integer type possible for enumeration types",
    },
    {
      name: ["-fshort-wchar", "-fno-short-wchar"],
      description:
        'Force the underlying type for "wchar_t" to be "unsigned short"',
    },
    {
      name: ["-fshow-column", "-fno-show-column"],
      description:
        "Show column numbers in diagnostics, when available. Default on",
    },
    {
      name: ["-fshrink-wrap-separate", "-fno-shrink-wrap-separate"],
      description: "Shrink-wrap parts of the prologue and epilogue separately",
    },
    {
      name: ["-fshrink-wrap", "-fno-shrink-wrap"],
      description:
        "Emit function prologues only before parts of the function that need it, rather than at the top of the function",
    },
    {
      name: ["-fsignaling-nans", "-fno-signaling-nans"],
      description: "Disable optimizations observable by IEEE signaling NaNs",
    },
    {
      name: ["-fsigned-bitfields", "-fno-signed-bitfields"],
      description:
        'When "signed" or "unsigned" is not given make the bitfield signed',
    },
    {
      name: ["-fsigned-char", "-fno-signed-char"],
      description: 'Make "char" signed by default',
    },
    {
      name: ["-fsigned-zeros", "-fno-signed-zeros"],
      description:
        "Disable floating point optimizations that ignore the IEEE signedness of zero",
    },
    {
      name: "-fsimd-cost-model",
      description:
        "Specifies the vectorization cost model for code marked with a simd directive",
      requiresSeparator: true,
      args: {
        name: "value",
        suggestions: ["unlimited", "dynamic", "cheap", "very-cheap"],
      },
    },
    {
      name: ["-fsingle-precision-constant", "-fno-single-precision-constant"],
      description:
        "Convert floating point constants to single precision constants",
    },
    {
      name: [
        "-fspeculatively-call-stored-functions",
        "-fno-speculatively-call-stored-functions",
      ],
      description:
        "Turn indirect calls of pointers loaded from structures to speculative calls if there is one known candidate",
    },
    {
      name: ["-fsplit-ivs-in-unroller", "-fno-split-ivs-in-unroller"],
      description:
        "Split lifetimes of induction variables when loops are unrolled",
    },
    {
      name: ["-fsplit-loops", "-fno-split-loops"],
      description: "Perform loop splitting",
    },
    {
      name: ["-fsplit-paths", "-fno-split-paths"],
      description: "Split paths leading to loop backedges",
    },
    {
      name: ["-fsplit-stack", "-fno-split-stack"],
      description: "Generate discontiguous stack frames",
    },
    {
      name: ["-fsplit-wide-types-early", "-fno-split-wide-types-early"],
      description: "Split wide types into independent registers earlier",
    },
    {
      name: ["-fsplit-wide-types", "-fno-split-wide-types"],
      description: "Split wide types into independent registers",
    },
    {
      name: ["-fssa-backprop", "-fno-ssa-backprop"],
      description:
        "Enable backward propagation of use properties at the SSA level",
    },
    {
      name: ["-fssa-phiopt", "-fno-ssa-phiopt"],
      description: "Optimize conditional patterns using SSA PHI nodes",
    },
    {
      name: "-fsso-struct",
      description: "Set the default scalar storage order",
      requiresSeparator: true,
      args: {
        name: "value",
        suggestions: ["big-endian", "little-endian", "native"],
      },
    },
    {
      name: "-fstack-check",
      description:
        "Insert stack checking code into the program. Same as -fstack-check=specific",
      requiresSeparator: true,
      args: {
        name: "value",
        isOptional: true,
        suggestions: ["no", "generic", "specific"],
      },
    },
    {
      name: ["-fstack-clash-protection", "-fno-stack-clash-protection"],
      description:
        "Insert code to probe each page of stack space as it is allocated to protect from stack-clash style attacks",
    },
    {
      name: "-fstack-limit-register",
      description: "Trap if the stack goes past <register>",
      requiresSeparator: true,
      isRepeatable: true,
      args: { name: "register" },
    },
    {
      name: "-fstack-limit-symbol",
      description: "Trap if the stack goes past symbol <name>",
      requiresSeparator: true,
      isRepeatable: true,
      args: { name: "name" },
    },
    {
      name: ["-fstack-limit", "-fno-stack-limit"],
      description:
        "Generate code to ensure that the stack does not grow beyond a certain value, either the value of a register or the address of a symbol",
      isRepeatable: true,
    },
    {
      name: "-fstack-protector-all",
      description: "Use a stack protection method for every function",
    },
    {
      name: "-fstack-protector-explicit",
      description:
        "Use stack protection method only for functions with the stack_protect attribute",
    },
    {
      name: "-fstack-protector-strong",
      description: "Use a smart stack protection method for certain functions",
    },
    {
      name: ["-fstack-protector", "-fno-stack-protector"],
      description: "Use propolice as a stack protection method",
    },
    {
      name: "-fstack-reuse",
      description: "Set stack reuse level for local variables",
      requiresSeparator: true,
      args: { name: "value", suggestions: ["all", "named_vars", "none"] },
    },
    {
      name: "-fstack-usage",
      description: "Output stack usage information on a per-function basis",
    },
    {
      name: ["-fstdarg-opt", "-fno-stdarg-opt"],
      description:
        "Optimize amount of stdarg registers saved to stack at start of function",
    },
    {
      name: ["-fstore-merging", "-fno-store-merging"],
      description: "Merge adjacent stores",
    },
    {
      name: ["-fstrict-aliasing", "-fno-strict-aliasing"],
      description: "Assume strict aliasing rules apply",
    },
    {
      name: "-fstrict-flex-arrays",
      description:
        "Control when to treat the trailing array of a structure as a flexible array member",
      requiresSeparator: true,
      args: {
        name: "value",
        isOptional: true,
        suggestions: ["0", "1", "2", "3"],
      },
    },
    {
      name: ["-fstrict-overflow", "-fno-strict-overflow"],
      description:
        "Treat signed overflow as undefined. Negated as -fwrapv -fwrapv-pointer",
    },
    {
      name: ["-fstrict-volatile-bitfields", "-fno-strict-volatile-bitfields"],
      description: "Force bitfield accesses to match their type width",
    },
    {
      name: "-fstrong-eval-order",
      description:
        "Follow the C++17 evaluation order requirements for assignment expressions, shift, member function calls, etc",
      requiresSeparator: true,
      args: {
        name: "value",
        isOptional: true,
        suggestions: ["none", "some", "all"],
      },
    },
    {
      name: "-fstrub",
      description: "Control stack scrubbing (strub) mode",
      requiresSeparator: true,
      args: {
        name: "value",
        suggestions: [
          "disable",
          "strict",
          "relaxed",
          "all",
          "at-calls",
          "internal",
        ],
      },
    },
    {
      name: ["-fsync-libcalls", "-fno-sync-libcalls"],
      description:
        "Implement __atomic operations via libcalls to legacy __sync functions",
    },
    {
      name: ["-fsyntax-only", "-fno-syntax-only"],
      description: "Check for syntax errors, then stop",
    },
    {
      name: "-ftabstop",
      description: "Distance between tab stops for column reporting",
      requiresSeparator: true,
      args: { name: "number" },
    },
    {
      name: "-ftarget-help",
      description:
        "Display target specific command line options (including assembler and linker options)",
    },
    {
      name: ["-ftest-coverage", "-fno-test-coverage"],
      description: 'Create data files needed by "gcov"',
    },
    {
      name: ["-fthread-jumps", "-fno-thread-jumps"],
      description: "Perform jump threading optimizations",
    },
    {
      name: ["-ftime-report-details", "-fno-time-report-details"],
      description: "Record times taken by sub-phases separately",
    },
    {
      name: ["-ftime-report", "-fno-time-report"],
      description: "Report the time taken by each compiler pass",
    },
    {
      name: "-ftls-model",
      description: "Set the default thread-local storage code generation model",
      requiresSeparator: true,
      args: {
        name: "value",
        suggestions: [
          "global-dynamic",
          "local-dynamic",
          "initial-exec",
          "local-exec",
        ],
      },
    },
    {
      name: ["-ftoplevel-reorder", "-fno-toplevel-reorder"],
      description: "Reorder top level functions, variables, and asms",
    },
    {
      name: ["-ftracer", "-fno-tracer"],
      description: "Perform superblock formation via tail duplication",
    },
    {
      name: "-ftrack-macro-expansion",
      description: "Track locations of tokens across macro expansions",
      requiresSeparator: true,
      args: { name: "value", isOptional: true, suggestions: ["0", "1", "2"] },
    },
    {
      name: "-ftrampoline-impl",
      description:
        "Whether trampolines are generated in executable memory rather than executable stack",
      requiresSeparator: true,
      args: { name: "value", suggestions: ["stack", "heap"] },
    },
    {
      name: ["-ftrampolines", "-fno-trampolines"],
      description:
        "For targets that normally need trampolines for nested functions, always generate them instead of using descriptors",
    },
    {
      name: ["-ftrapping-math", "-fno-trapping-math"],
      description: "Assume floating-point operations can trap",
    },
    {
      name: ["-ftrapv", "-fno-trapv"],
      description:
        "Trap for signed overflow in addition, subtraction and multiplication",
    },
    {
      name: ["-ftree-bit-ccp", "-fno-tree-bit-ccp"],
      description: "Enable SSA-BIT-CCP optimization on trees",
    },
    {
      name: ["-ftree-builtin-call-dce", "-fno-tree-builtin-call-dce"],
      description: "Enable conditional dead code elimination for builtin calls",
    },
    {
      name: ["-ftree-ccp", "-fno-tree-ccp"],
      description: "Enable SSA-CCP optimization on trees",
    },
    {
      name: ["-ftree-ch", "-fno-tree-ch"],
      description: "Enable loop header copying on trees",
    },
    {
      name: ["-ftree-coalesce-vars", "-fno-tree-coalesce-vars"],
      description: "Enable SSA coalescing of user variables",
    },
    {
      name: ["-ftree-copy-prop", "-fno-tree-copy-prop"],
      description: "Enable copy propagation on trees",
    },
    {
      name: ["-ftree-cselim", "-fno-tree-cselim"],
      description: "Transform condition stores into unconditional ones",
    },
    {
      name: ["-ftree-dce", "-fno-tree-dce"],
      description: "Enable SSA dead code elimination optimization on trees",
    },
    {
      name: ["-ftree-dominator-opts", "-fno-tree-dominator-opts"],
      description: "Enable dominator optimizations",
    },
    {
      name: ["-ftree-dse", "-fno-tree-dse"],
      description: "Enable dead store elimination",
    },
    {
      name: ["-ftree-forwprop", "-fno-tree-forwprop"],
      description: "Enable forward propagation on trees",
    },
    {
      name: ["-ftree-fre", "-fno-tree-fre"],
      description: "Enable Full Redundancy Elimination (FRE) on trees",
    },
    {
      name: [
        "-ftree-loop-distribute-patterns",
        "-fno-tree-loop-distribute-patterns",
      ],
      description:
        "Enable loop distribution for patterns transformed into a library call",
    },
    {
      name: ["-ftree-loop-distribution", "-fno-tree-loop-distribution"],
      description: "Enable loop distribution on trees",
    },
    {
      name: ["-ftree-loop-if-convert", "-fno-tree-loop-if-convert"],
      description:
        "Convert conditional jumps in innermost loops to branchless equivalents",
    },
    {
      name: ["-ftree-loop-im", "-fno-tree-loop-im"],
      description: "Enable loop invariant motion on trees",
    },
    {
      name: ["-ftree-loop-ivcanon", "-fno-tree-loop-ivcanon"],
      description: "Create canonical induction variables in loops",
    },
    {
      name: ["-ftree-loop-linear", "-fno-tree-loop-linear"],
      description: "Enable loop nest transforms. Same as -floop-nest-optimize",
    },
    {
      name: ["-ftree-loop-optimize", "-fno-tree-loop-optimize"],
      description: "Enable loop optimizations on tree level",
    },
    {
      name: ["-ftree-loop-vectorize", "-fno-tree-loop-vectorize"],
      description: "Enable loop vectorization on trees",
    },
    {
      name: "-ftree-parallelize-loops",
      description: "Enable automatic parallelization of loops",
      requiresSeparator: true,
      args: { name: "number", isOptional: true },
    },
    {
      name: ["-ftree-partial-pre", "-fno-tree-partial-pre"],
      description:
        "In SSA-PRE optimization on trees, enable partial-partial redundancy elimination",
    },
    {
      name: ["-ftree-phiprop", "-fno-tree-phiprop"],
      description: "Enable hoisting loads from conditional pointers",
    },
    {
      name: ["-ftree-pre", "-fno-tree-pre"],
      description: "Enable SSA-PRE optimization on trees",
    },
    {
      name: ["-ftree-pta", "-fno-tree-pta"],
      description: "Perform function-local points-to analysis on trees",
    },
    {
      name: ["-ftree-reassoc", "-fno-tree-reassoc"],
      description: "Enable reassociation on tree level",
    },
    {
      name: ["-ftree-scev-cprop", "-fno-tree-scev-cprop"],
      description: "Enable copy propagation of scalar-evolution information",
    },
    {
      name: ["-ftree-sink", "-fno-tree-sink"],
      description: "Enable SSA code sinking on trees",
    },
    {
      name: ["-ftree-slp-vectorize", "-fno-tree-slp-vectorize"],
      description: "Enable basic block vectorization (SLP) on trees",
    },
    {
      name: ["-ftree-slsr", "-fno-tree-slsr"],
      description: "Perform straight-line strength reduction",
    },
    {
      name: ["-ftree-sra", "-fno-tree-sra"],
      description: "Perform scalar replacement of aggregates",
    },
    {
      name: ["-ftree-switch-conversion", "-fno-tree-switch-conversion"],
      description: "Perform conversions of switch initializations",
    },
    {
      name: ["-ftree-tail-merge", "-fno-tree-tail-merge"],
      description: "Enable tail merging on trees",
    },
    {
      name: ["-ftree-ter", "-fno-tree-ter"],
      description: "Replace temporary expressions in the SSA->normal pass",
    },
    {
      name: ["-ftree-vectorize", "-fno-tree-vectorize"],
      description: "Enable vectorization on trees",
    },
    {
      name: ["-ftree-vrp", "-fno-tree-vrp"],
      description: "Perform Value Range Propagation on trees",
    },
    {
      name: "-ftrivial-auto-var-init",
      description: "Add initializations to automatic variables",
      requiresSeparator: true,
      args: {
        name: "value",
        suggestions: ["uninitialized", "pattern", "zero"],
      },
    },
    {
      name: ["-funconstrained-commons", "-fno-unconstrained-commons"],
      description:
        "Assume common declarations may be overridden with ones with a larger trailing array",
    },
    {
      name: ["-funit-at-a-time", "-fno-unit-at-a-time"],
      description: "Compile whole compilation unit at a time",
    },
    {
      name: ["-funreachable-traps", "-fno-unreachable-traps"],
      description:
        "Trap on __builtin_unreachable instead of using it for optimization",
    },
    {
      name: ["-funroll-all-loops", "-fno-unroll-all-loops"],
      description: "Perform loop unrolling for all loops",
    },
    {
      name: ["-funroll-loops", "-fno-unroll-loops"],
      description: "Perform loop unrolling when iteration count is known",
    },
    {
      name: ["-funsafe-math-optimizations", "-fno-unsafe-math-optimizations"],
      description:
        "Allow math optimizations that may violate IEEE or ISO standards",
    },
    {
      name: ["-funsigned-bitfields", "-fno-unsigned-bitfields"],
      description:
        'When "signed" or "unsigned" is not given make the bitfield unsigned',
    },
    {
      name: ["-funsigned-char", "-fno-unsigned-char"],
      description: 'Make "char" unsigned by default',
    },
    {
      name: ["-funswitch-loops", "-fno-unswitch-loops"],
      description: "Perform loop unswitching",
    },
    {
      name: ["-funwind-tables", "-fno-unwind-tables"],
      description: "Just generate unwind tables for exception handling",
    },
    {
      name: "-fuse-ld",
      description: "Use the given linker instead of the default linker",
      requiresSeparator: true,
      args: {
        name: "linker",
        suggestions: ["bfd", "gold", "lld", "mold", "wild"],
      },
    },
    {
      name: ["-fuse-linker-plugin", "-fno-use-linker-plugin"],
      description:
        "Enables the use of a linker plugin during link-time optimization",
    },
    {
      name: [
        "-fvar-tracking-assignments-toggle",
        "-fno-var-tracking-assignments-toggle",
      ],
      description: "Toggle -fvar-tracking-assignments",
    },
    {
      name: ["-fvar-tracking-assignments", "-fno-var-tracking-assignments"],
      description: "Perform variable tracking by annotating assignments",
    },
    {
      name: ["-fvar-tracking-uninit", "-fno-var-tracking-uninit"],
      description:
        "Perform variable tracking and also tag variables that are uninitialized",
    },
    {
      name: ["-fvar-tracking", "-fno-var-tracking"],
      description: "Perform variable tracking",
    },
    {
      name: [
        "-fvariable-expansion-in-unroller",
        "-fno-variable-expansion-in-unroller",
      ],
      description: "Apply variable expansion when loops are unrolled",
    },
    {
      name: "-fvect-cost-model",
      description: "Specifies the cost model for vectorization",
      requiresSeparator: true,
      args: {
        name: "value",
        isOptional: true,
        suggestions: ["unlimited", "dynamic", "cheap", "very-cheap"],
      },
    },
    {
      name: ["-fverbose-asm", "-fno-verbose-asm"],
      description: "Add extra commentary to assembler output",
    },
    {
      name: ["-fversion-loops-for-strides", "-fno-version-loops-for-strides"],
      description:
        "Version loops based on whether indices have a stride of one",
    },
    {
      name: "-fvisibility",
      description: "Set the default symbol visibility",
      requiresSeparator: true,
      args: {
        name: "value",
        suggestions: ["default", "internal", "hidden", "protected"],
      },
    },
    {
      name: ["-fvpt", "-fno-vpt"],
      description: "Use expression value profiles in optimizations",
    },
    {
      name: "-fvtable-verify",
      description: "Validate vtable pointers before using them",
      requiresSeparator: true,
      args: { name: "value", suggestions: ["none", "std", "preinit"] },
    },
    {
      name: ["-fvtv-counts", "-fno-vtv-counts"],
      description: "Output vtable verification counters",
    },
    {
      name: ["-fvtv-debug", "-fno-vtv-debug"],
      description: "Output vtable verification pointer sets information",
    },
    {
      name: ["-fweb", "-fno-web"],
      description: "Construct webs and split unrelated uses of single variable",
    },
    {
      name: ["-fwhole-program", "-fno-whole-program"],
      description: "Perform whole program optimizations",
    },
    {
      name: "-fwide-exec-charset",
      description:
        "Convert all wide strings and character constants to character set <cset>",
      requiresSeparator: true,
      args: { name: "cset" },
    },
    {
      name: ["-fworking-directory", "-fno-working-directory"],
      description:
        "Generate a #line directive pointing at the current working directory",
    },
    {
      name: "-fwpa",
      description:
        "Run the link-time optimizer in whole program analysis (WPA) mode",
      requiresSeparator: true,
      args: { name: "value", isOptional: true },
    },
    {
      name: ["-fwrapv-pointer", "-fno-wrapv-pointer"],
      description: "Assume pointer overflow wraps around",
    },
    {
      name: ["-fwrapv", "-fno-wrapv"],
      description: "Assume signed arithmetic overflow wraps around",
    },
    {
      name: "-fzero-call-used-regs",
      description: "Clear call-used registers upon function return",
      requiresSeparator: true,
      args: { name: "value" },
    },
    {
      name: "-fzero-init-padding-bits",
      description: "Zero padding bits in initializers",
      requiresSeparator: true,
      args: { name: "value", suggestions: ["standard", "unions", "all"] },
    },
    {
      name: ["-fzero-initialized-in-bss", "-fno-zero-initialized-in-bss"],
      description: "Put zero initialized data in the bss section",
    },
    {
      name: ["-fzero-link", "-fno-zero-link"],
      description:
        "Generate lazy class lookup (via objc_getClass) for use in Zero-Link mode",
    },
    {
      name: "-F",
      description: "Add <dir> to the end of the main framework include path",
      args: { name: "dir", template: "folders" },
    },
    {
      name: "-g0",
      description: "Produce no debug information",
    },
    {
      name: "-g1",
      description: "Produce minimal debug information",
    },
    {
      name: "-g2",
      description: "Produce the default amount of debug information",
    },
    {
      name: "-g3",
      description: "Produce extra debug information, such as macro definitions",
    },
    {
      name: ["-gas-loc-support", "-gno-as-loc-support"],
      description: "Assume assembler support for (DWARF2+) .loc directives",
    },
    {
      name: ["-gas-locview-support", "-gno-as-locview-support"],
      description:
        "Assume assembler support for view in (DWARF2+) .loc directives",
    },
    {
      name: "-gbtf",
      description: "Generate BTF debug information at default level",
    },
    {
      name: ["-gcodeview", "-gno-codeview"],
      description: "Generate debug information in CodeView format",
    },
    {
      name: ["-gcolumn-info", "-gno-column-info"],
      description: "Record DW_AT_decl_column and DW_AT_call_column in DWARF",
    },
    {
      name: "-gctf",
      description: "Generate CTF debug information at default level",
    },
    {
      name: ["-gdescribe-dies", "-gno-describe-dies"],
      description:
        "Add description attributes to some DWARF DIEs that have no name attribute",
    },
    {
      name: "-gdwarf-2",
      description: "Produce debug information in DWARF version 2",
    },
    {
      name: "-gdwarf-3",
      description: "Produce debug information in DWARF version 3",
    },
    {
      name: "-gdwarf-4",
      description: "Produce debug information in DWARF version 4",
    },
    {
      name: "-gdwarf-5",
      description: "Produce debug information in DWARF version 5",
    },
    {
      name: "-gdwarf32",
      description:
        "Use 32-bit DWARF format when emitting DWARF debug information",
    },
    {
      name: "-gdwarf64",
      description:
        "Use 64-bit DWARF format when emitting DWARF debug information",
    },
    {
      name: "-gdwarf",
      description:
        "Generate debug information in default version of DWARF format",
    },
    {
      name: "-gen-decls",
      description: "Dump declarations to a .decl file",
    },
    {
      name: "-ggdb",
      description: "Generate debug information in default extended format",
    },
    {
      name: "-ggnu-pubnames",
      description:
        "Generate DWARF pubnames and pubtypes sections with GNU extensions",
    },
    {
      name: ["-ginline-points", "-gno-inline-points"],
      description:
        "Generate extended entry point information for inlined functions",
    },
    {
      name: [
        "-ginternal-reset-location-views",
        "-gno-internal-reset-location-views",
      ],
      description:
        "Compute locview reset points based on insn length estimates",
    },
    {
      name: "-gno-pubnames",
      description: "Don't generate DWARF pubnames and pubtypes sections",
    },
    {
      name: "-gno-variable-location-views",
      description: "Disable -gvariable-location-views",
    },
    {
      name: "-gno-z",
      description: "Disable -gz",
    },
    {
      name: ["-gprune-btf", "-gno-prune-btf"],
      description: "Generate pruned BTF when emitting BTF info",
    },
    {
      name: "-gpubnames",
      description: "Generate DWARF pubnames and pubtypes sections",
    },
    {
      name: ["-grecord-gcc-switches", "-gno-record-gcc-switches"],
      description: "Record gcc command line switches in DWARF DW_AT_producer",
    },
    {
      name: ["-gsplit-dwarf", "-gno-split-dwarf"],
      description: "Generate debug information in separate .dwo files",
    },
    {
      name: ["-gstatement-frontiers", "-gno-statement-frontiers"],
      description: "Emit progressive recommended breakpoint locations",
    },
    {
      name: ["-gstrict-dwarf", "-gno-strict-dwarf"],
      description: "Don't emit DWARF additions beyond selected version",
    },
    {
      name: "-gtoggle",
      description: "Toggle debug information generation",
    },
    {
      name: "-gvariable-location-views",
      description: "Augment variable location lists with progressive views",
      requiresSeparator: true,
      args: { name: "value", isOptional: true, suggestions: ["incompat5"] },
    },
    {
      name: "-gvms",
      description: "Generate debug information in VMS format",
    },
    {
      name: "-gz",
      description: "Generate compressed debug sections",
      requiresSeparator: true,
      args: {
        name: "format",
        isOptional: true,
        suggestions: ["none", "zlib", "zstd", "zlib-gnu"],
      },
    },
    {
      name: "-g",
      description: "Generate debug information in default format",
    },
    {
      name: "--help",
      description: "Display this information",
      requiresSeparator: true,
      args: { name: "class", isOptional: true },
    },
    {
      name: "-H",
      description: "Print the name of header files as they are used",
    },
    {
      name: "-idirafter",
      description: "Add <dir> to the end of the system include path",
      isRepeatable: true,
      args: { name: "dir", template: "folders" },
    },
    {
      name: "--imacros",
      description: "Accept definition of macros in <file>",
      args: { name: "file", template: "filepaths" },
    },
    {
      name: "-imacros",
      description: "Accept definition of macros in <file>",
      isRepeatable: true,
      args: { name: "file", template: "filepaths" },
    },
    {
      name: "-imultiarch",
      description: "Set <dir> to be the multiarch include subdirectory",
      args: { name: "dir", template: "folders" },
    },
    {
      name: "-imultilib",
      description: "Set <dir> to be the multilib include subdirectory",
      args: { name: "dir", template: "folders" },
    },
    {
      name: "--include-barrier",
      description: "Add <dir> to the end of the main include path",
    },
    {
      name: "--include-directory-after",
      description: "Add <dir> to the end of the system include path",
      args: { name: "dir", template: "folders" },
    },
    {
      name: "--include-directory",
      description: "Add <dir> to the end of the main include path",
      args: { name: "dir", template: "folders" },
    },
    {
      name: "--include-prefix",
      description: "Specify <path> as a prefix for next two options",
      args: { name: "path", template: "folders" },
    },
    {
      name: "--include-with-prefix-after",
      description: "Add <dir> to the end of the system include path",
      args: { name: "dir", template: "folders" },
    },
    {
      name: "--include-with-prefix-before",
      description: "Add <dir> to the end of the main include path",
      args: { name: "dir", template: "folders" },
    },
    {
      name: "--include-with-prefix",
      description: "Add <dir> to the end of the system include path",
      args: { name: "dir", template: "folders" },
    },
    {
      name: "--include",
      description: "Include the contents of <file> before other files",
      args: { name: "file", template: "filepaths" },
    },
    {
      name: "-include",
      description: "Include the contents of <file> before other files",
      isRepeatable: true,
      args: { name: "file", template: "filepaths" },
    },
    {
      name: "-iplugindir",
      description: "Set <dir> to be the default plugin directory",
      requiresSeparator: true,
      args: { name: "dir", template: "folders" },
    },
    {
      name: "-iprefix",
      description: "Specify <path> as a prefix for next two options",
      args: { name: "prefix", template: "folders" },
    },
    {
      name: "-iquote",
      description: "Add <dir> to the end of the quote include path",
      isRepeatable: true,
      args: { name: "dir", template: "folders" },
    },
    {
      name: "-isysroot",
      description: "Set <dir> to be the system root directory",
      args: { name: "dir", template: "folders" },
    },
    {
      name: "-isystem",
      description: "Add <dir> to the start of the system include path",
      isRepeatable: true,
      args: { name: "dir", template: "folders" },
    },
    {
      name: "-iwithprefixbefore",
      description: "Add <dir> to the end of the main include path",
      args: { name: "dir", template: "folders" },
    },
    {
      name: "-iwithprefix",
      description: "Add <dir> to the end of the system include path",
      args: { name: "dir", template: "folders" },
    },
    {
      name: "-I",
      description: "Add a directory to the end of the main include path",
      isRepeatable: true,
      args: { name: "dir", template: "folders" },
    },
    {
      name: "--language",
      description: "Specify the language of the following input files",
      args: { name: "value" },
    },
    {
      name: "--library-directory",
      description:
        "Add directory dir to the list of directories to be searched for -l",
      args: { name: "value" },
    },
    {
      name: "-lobjc",
      description:
        "You need this special case of the -l option in order to link an Objective-C or Objective-C++ program",
    },
    {
      name: "-L",
      description:
        "Add directory dir to the list of directories to be searched for -l",
      isRepeatable: true,
      args: { name: "dir", template: "folders" },
    },
    {
      name: "-l",
      description: "Search the named library when linking",
      isRepeatable: true,
      args: { name: "library" },
    },
    {
      name: "-m128bit-long-double",
      description: "Sizeof(long double) is 16",
    },
    {
      name: "-m16",
      description: "Generate 16bit i386 code",
    },
    {
      name: "-m32",
      description: "Generate 32bit i386 code",
    },
    {
      name: ["-m3dnowa", "-mno-3dnowa"],
      description: "Support Athlon 3Dnow! built-in functions",
    },
    {
      name: ["-m3dnow", "-mno-3dnow"],
      description: "Support 3DNow! built-in functions",
    },
    {
      name: "-m64",
      description: "Generate 64bit x86-64 code",
    },
    {
      name: ["-m80387", "-mno-80387"],
      description: "Use hardware fp",
    },
    {
      name: ["-m8bit-idiv", "-mno-8bit-idiv"],
      description:
        "Expand 32bit/64bit integer divide into 8bit unsigned integer divide with run-time check",
    },
    {
      name: "-m96bit-long-double",
      description: "Sizeof(long double) is 12",
    },
    {
      name: "-mabi",
      description: "Generate code that conforms to the given ABI",
      requiresSeparator: true,
      args: { name: "value", suggestions: ["sysv", "ms"] },
    },
    {
      name: ["-mabm", "-mno-abm"],
      description:
        "Support code generation of Advanced Bit Manipulation (ABM) instructions",
    },
    {
      name: ["-maccumulate-outgoing-args", "-mno-accumulate-outgoing-args"],
      description:
        "Reserve space for outgoing arguments in the function prologue",
    },
    {
      name: "-maddress-mode",
      description: "Use given address mode",
      requiresSeparator: true,
      args: { name: "value", suggestions: ["short", "long"] },
    },
    {
      name: ["-madx", "-mno-adx"],
      description: "Support flag-preserving add-carry instructions",
    },
    {
      name: ["-maes", "-mno-aes"],
      description: "Support AES built-in functions and code generation",
    },
    {
      name: "-malign-data",
      description: "Use the given data alignment",
      requiresSeparator: true,
      args: { name: "value", suggestions: ["compat", "abi", "cacheline"] },
    },
    {
      name: ["-malign-double", "-mno-align-double"],
      description: "Align some doubles on dword boundary",
    },
    {
      name: "-malign-functions",
      description: "Function starts are aligned to this power of 2",
      requiresSeparator: true,
      args: { name: "number" },
    },
    {
      name: "-malign-jumps",
      description: "Jump targets are aligned to this power of 2",
      requiresSeparator: true,
      args: { name: "number" },
    },
    {
      name: "-malign-loops",
      description: "Loop code aligned to this power of 2",
      requiresSeparator: true,
      args: { name: "number" },
    },
    {
      name: "-malign-stringops",
      description: "Align destination of the string operations",
    },
    {
      name: ["-mamx-avx512", "-mno-amx-avx512"],
      description:
        "Support MMX, SSE, SSE2, SSE3, SSSE3, SSE4.1, SSE4.2, AVX, AVX2, AVX10.1, AVX10.2 and AMX-AVX512 built-in functions and code generation",
    },
    {
      name: ["-mamx-bf16", "-mno-amx-bf16"],
      description: "Support AMX-BF16 built-in functions and code generation",
    },
    {
      name: ["-mamx-complex", "-mno-amx-complex"],
      description: "Support AMX-COMPLEX built-in functions and code generation",
    },
    {
      name: ["-mamx-fp16", "-mno-amx-fp16"],
      description: "Support AMX-FP16 built-in functions and code generation",
    },
    {
      name: ["-mamx-fp8", "-mno-amx-fp8"],
      description: "Support AMX-FP8 built-in functions and code generation",
    },
    {
      name: ["-mamx-int8", "-mno-amx-int8"],
      description: "Support AMX-INT8 built-in functions and code generation",
    },
    {
      name: ["-mamx-movrs", "-mno-amx-movrs"],
      description: "Support AMX-MOVRS built-in functions and code generation",
    },
    {
      name: ["-mamx-tf32", "-mno-amx-tf32"],
      description: "Support AMX-TF32 built-in functions and code generation",
    },
    {
      name: ["-mamx-tile", "-mno-amx-tile"],
      description: "Support AMX-TILE built-in functions and code generation",
    },
    {
      name: ["-mapx-inline-asm-use-gpr32", "-mno-apx-inline-asm-use-gpr32"],
      description: "Enable GPR32 in inline asm when APX_F enabled",
    },
    {
      name: ["-mapxf", "-mno-apxf"],
      description:
        "Support code generation for APX features, including EGPR, PUSH2POP2, NDD, PPX, NF, CCMP and ZU",
    },
    {
      name: "-march",
      description: "Generate code for given CPU",
      requiresSeparator: true,
      args: { name: "cpu-type", suggestions: x86CpuTypes },
    },
    {
      name: "-masm",
      description: "Use given assembler dialect",
      requiresSeparator: true,
      args: { name: "value", suggestions: ["intel", "att"] },
    },
    {
      name: ["-mavx10.1", "-mno-avx10.1"],
      description:
        "Support MMX, SSE, SSE2, SSE3, SSSE3, SSE4.1, SSE4.2, AVX, AVX2, and AVX10.1 built-in functions and code generation",
    },
    {
      name: ["-mavx10.2", "-mno-avx10.2"],
      description:
        "Support MMX, SSE, SSE2, SSE3, SSSE3, SSE4.1, SSE4.2, AVX, AVX2, AVX10.1 and AVX10.2 built-in functions and code generation",
    },
    {
      name: [
        "-mavx256-split-unaligned-load",
        "-mno-avx256-split-unaligned-load",
      ],
      description: "Split 32-byte AVX unaligned load",
    },
    {
      name: [
        "-mavx256-split-unaligned-store",
        "-mno-avx256-split-unaligned-store",
      ],
      description: "Split 32-byte AVX unaligned store",
    },
    {
      name: ["-mavx2", "-mno-avx2"],
      description:
        "Support MMX, SSE, SSE2, SSE3, SSSE3, SSE4.1, SSE4.2, AVX and AVX2 built-in functions and code generation",
    },
    {
      name: ["-mavx512bf16", "-mno-avx512bf16"],
      description:
        "Support MMX, SSE, SSE2, SSE3, SSSE3, SSE4.1, SSE4.2, AVX, AVX2, AVX512F and AVX512BF16 built-in functions and code generation",
    },
    {
      name: ["-mavx512bitalg", "-mno-avx512bitalg"],
      description:
        "Support MMX, SSE, SSE2, SSE3, SSSE3, SSE4.1, SSE4.2, AVX, AVX2, AVX512F and AVX512BITALG built-in functions and code generation",
    },
    {
      name: ["-mavx512bmm", "-mno-avx512bmm"],
      description: "Support AVX512BMM built-in functions and code generation",
    },
    {
      name: ["-mavx512bw", "-mno-avx512bw"],
      description:
        "Support MMX, SSE, SSE2, SSE3, SSSE3, SSE4.1, SSE4.2, AVX, AVX2, AVX512F and AVX512BW built-in functions and code generation",
    },
    {
      name: ["-mavx512cd", "-mno-avx512cd"],
      description:
        "Support MMX, SSE, SSE2, SSE3, SSSE3, SSE4.1, SSE4.2, AVX, AVX2, AVX512F and AVX512CD built-in functions and code generation",
    },
    {
      name: ["-mavx512dq", "-mno-avx512dq"],
      description:
        "Support MMX, SSE, SSE2, SSE3, SSSE3, SSE4.1, SSE4.2, AVX, AVX2, AVX512F and AVX512DQ built-in functions and code generation",
    },
    {
      name: ["-mavx512fp16", "-mno-avx512fp16"],
      description:
        "Support MMX, SSE, SSE2, SSE3, SSSE3, SSE4.1, SSE4.2, AVX, AVX2, AVX512F and AVX512-FP16 built-in functions and code generation",
    },
    {
      name: ["-mavx512f", "-mno-avx512f"],
      description:
        "Support MMX, SSE, SSE2, SSE3, SSSE3, SSE4.1, SSE4.2, AVX, AVX2 and AVX512F built-in functions and code generation",
    },
    {
      name: ["-mavx512ifma", "-mno-avx512ifma"],
      description:
        "Support MMX, SSE, SSE2, SSE3, SSSE3, SSE4.1, SSE4.2, AVX, AVX2, AVX512F and AVX512IFMA built-in functions and code generation",
    },
    {
      name: ["-mavx512vbmi2", "-mno-avx512vbmi2"],
      description:
        "Support MMX, SSE, SSE2, SSE3, SSSE3, SSE4.1, SSE4.2, AVX, AVX2, AVX512F and AVX512VBMI2 built-in functions and code generation",
    },
    {
      name: ["-mavx512vbmi", "-mno-avx512vbmi"],
      description:
        "Support MMX, SSE, SSE2, SSE3, SSSE3, SSE4.1, SSE4.2, AVX, AVX2, AVX512F and AVX512VBMI built-in functions and code generation",
    },
    {
      name: ["-mavx512vl", "-mno-avx512vl"],
      description:
        "Support MMX, SSE, SSE2, SSE3, SSSE3, SSE4.1, SSE4.2, AVX, AVX2, AVX512F and AVX512VL built-in functions and code generation",
    },
    {
      name: ["-mavx512vnni", "-mno-avx512vnni"],
      description: "Support AVX512VNNI built-in functions and code generation",
    },
    {
      name: ["-mavx512vp2intersect", "-mno-avx512vp2intersect"],
      description:
        "Support AVX512VP2INTERSECT built-in functions and code generation",
    },
    {
      name: ["-mavx512vpopcntdq", "-mno-avx512vpopcntdq"],
      description:
        "Support MMX, SSE, SSE2, SSE3, SSSE3, SSE4.1, SSE4.2, AVX, AVX2, AVX512F and AVX512VPOPCNTDQ built-in functions and code generation",
    },
    {
      name: ["-mavxifma", "-mno-avxifma"],
      description:
        "Support MMX, SSE, SSE2, SSE3, SSSE3, SSE4.1, SSE4.2, AVX, AVX2, and AVXIFMA built-in functions and code generation",
    },
    {
      name: ["-mavxneconvert", "-mno-avxneconvert"],
      description:
        "Support MMX, SSE, SSE2, SSE3, SSSE3, SSE4.1, SSE4.2, AVX, AVX2, and AVXNECONVERT build-in functions and code generation",
    },
    {
      name: ["-mavxvnniint16", "-mno-avxvnniint16"],
      description:
        "Support MMX, SSE, SSE2, SSE3, SSSE3, SSE4.1, SSE4.2, AVX, AVX2 and AVXVNNIINT16 built-in functions and code generation",
    },
    {
      name: ["-mavxvnniint8", "-mno-avxvnniint8"],
      description:
        "Support MMX, SSE, SSE2, SSE3, SSSE3, SSE4.1, SSE4.2, AVX, AVX2 and AVXVNNIINT8 built-in functions and code generation",
    },
    {
      name: ["-mavxvnni", "-mno-avxvnni"],
      description:
        "Support MMX, SSE, SSE2, SSE3, SSSE3, SSE4.1, SSE4.2, AVX, AVX2, and AVXVNNI built-in functions and code generation",
    },
    {
      name: ["-mavx", "-mno-avx"],
      description:
        "Support MMX, SSE, SSE2, SSE3, SSSE3, SSE4.1, SSE4.2 and AVX built-in functions and code generation",
    },
    {
      name: "-mbionic",
      description: "Use Bionic C library",
    },
    {
      name: ["-mbmi2", "-mno-bmi2"],
      description: "Support BMI2 built-in functions and code generation",
    },
    {
      name: ["-mbmi", "-mno-bmi"],
      description: "Support BMI built-in functions and code generation",
    },
    {
      name: "-mbranch-cost",
      description: "Branches are this expensive (arbitrary units)",
      requiresSeparator: true,
      args: { name: "value", suggestions: ["0", "1", "2", "3", "4", "5"] },
    },
    {
      name: ["-mcall-ms2sysv-xlogues", "-mno-call-ms2sysv-xlogues"],
      description:
        "Use libgcc stubs to save and restore registers clobbered by 64-bit Microsoft to System V ABI calls",
    },
    {
      name: ["-mcet-switch", "-mno-cet-switch"],
      description:
        "Turn on CET instrumentation for switch statements that use a jump table and an indirect jump",
    },
    {
      name: ["-mcldemote", "-mno-cldemote"],
      description: "Support CLDEMOTE built-in functions and code generation",
    },
    {
      name: ["-mcld", "-mno-cld"],
      description: "Generate cld instruction in the function prologue",
    },
    {
      name: ["-mclflushopt", "-mno-clflushopt"],
      description: "Support CLFLUSHOPT instructions",
    },
    {
      name: ["-mclwb", "-mno-clwb"],
      description: "Support CLWB instruction",
    },
    {
      name: ["-mclzero", "-mno-clzero"],
      description: "Support CLZERO built-in functions and code generation",
    },
    {
      name: "-mcmodel",
      description: "Use given x86-64 code model",
      requiresSeparator: true,
      args: {
        name: "value",
        suggestions: ["small", "medium", "large", "32", "kernel"],
      },
    },
    {
      name: ["-mcmpccxadd", "-mno-cmpccxadd"],
      description:
        "Support MMX, SSE, SSE2, SSE3, SSSE3, SSE4.1, SSE4.2, AVX, AVX2, and CMPCCXADD build-in functions and code generation",
    },
    {
      name: ["-mcrc32", "-mno-crc32"],
      description: "Support code generation of crc32 instruction",
    },
    {
      name: ["-mcx16", "-mno-cx16"],
      description: "Support code generation of cmpxchg16b instruction",
    },
    {
      name: ["-mdaz-ftz", "-mno-daz-ftz"],
      description: "Set the FTZ and DAZ Flags",
    },
    {
      name: ["-mdirect-extern-access", "-mno-direct-extern-access"],
      description: "Do not use GOT to access external symbols",
    },
    {
      name: "-mdispatch-scheduler",
      description:
        "Do dispatch scheduling if processor is bdver1, bdver2, bdver3, bdver4 or znver1 and Haifa scheduling is selected",
    },
    {
      name: "-mdump-tune-features",
      description:
        "This option instructs GCC to dump the names of the x86 performance tuning features and default settings",
    },
    {
      name: "-MD",
      description: "Generate make dependencies and compile",
    },
    {
      name: ["-menqcmd", "-mno-enqcmd"],
      description: "Support ENQCMD built-in functions and code generation",
    },
    {
      name: ["-mf16c", "-mno-f16c"],
      description: "Support F16C built-in functions and code generation",
    },
    {
      name: "-mfancy-math-387",
      description: "Generate sin, cos, sqrt for FPU",
    },
    {
      name: "-mfentry-name",
      description: "Set name of __fentry__ symbol called at function entry",
      requiresSeparator: true,
      args: { name: "value" },
    },
    {
      name: "-mfentry-section",
      description: "Set name of section to record mrecord-mcount calls",
      requiresSeparator: true,
      args: { name: "value" },
    },
    {
      name: ["-mfentry", "-mno-fentry"],
      description:
        "Emit profiling counter call at function entry before prologue",
    },
    {
      name: ["-mfma4", "-mno-fma4"],
      description: "Support FMA4 built-in functions and code generation",
    },
    {
      name: ["-mfma", "-mno-fma"],
      description:
        "Support MMX, SSE, SSE2, SSE3, SSSE3, SSE4.1, SSE4.2, AVX and FMA built-in functions and code generation",
    },
    {
      name: ["-mforce-drap", "-mno-force-drap"],
      description:
        "Always use Dynamic Realigned Argument Pointer (DRAP) to realign stack",
    },
    {
      name: ["-mforce-indirect-call", "-mno-force-indirect-call"],
      description: "Make all function calls indirect",
    },
    {
      name: ["-mfp-ret-in-387", "-mno-fp-ret-in-387"],
      description: "Return values of functions in FPU registers",
    },
    {
      name: "-mfpmath",
      description:
        "Generate floating point mathematics using given instruction set",
      requiresSeparator: true,
      args: {
        name: "value",
        suggestions: [
          "387",
          "sse",
          "387,sse",
          "387+sse",
          "sse,387",
          "sse+387",
          "both",
        ],
      },
    },
    {
      name: ["-mfsgsbase", "-mno-fsgsbase"],
      description: "Support FSGSBASE built-in functions and code generation",
    },
    {
      name: "-mfunction-return",
      description: "Convert function return to call and return thunk",
      requiresSeparator: true,
      args: {
        name: "value",
        suggestions: ["keep", "thunk", "thunk-inline", "thunk-extern"],
      },
    },
    {
      name: ["-mfxsr", "-mno-fxsr"],
      description: "Support FXSAVE and FXRSTOR instructions",
    },
    {
      name: "-MF",
      description: "Write dependency output to the given file",
      args: { name: "file", template: "filepaths" },
    },
    {
      name: ["-mgather", "-mno-gather"],
      description: "Enable vectorization for gather instruction",
    },
    {
      name: "-mgeneral-regs-only",
      description: "Generate code which uses only the general registers",
    },
    {
      name: ["-mgfni", "-mno-gfni"],
      description: "Support GFNI built-in functions and code generation",
    },
    {
      name: "-mglibc",
      description: "Use GNU C library",
    },
    {
      name: "-MG",
      description: "Treat missing header files as generated files",
    },
    {
      name: "-mhard-float",
      description: "Use hardware fp",
    },
    {
      name: "-mharden-sls",
      description:
        "Generate code to mitigate against straight line speculation",
      requiresSeparator: true,
      args: {
        name: "value",
        suggestions: ["none", "return", "indirect-jmp", "all"],
      },
    },
    {
      name: ["-mhle", "-mno-hle"],
      description: "Support Hardware Lock Elision prefixes",
    },
    {
      name: ["-mhreset", "-mno-hreset"],
      description: "Support HRESET built-in functions and code generation",
    },
    {
      name: ["-miamcu", "-mno-iamcu"],
      description: "Generate code that conforms to Intel MCU psABI",
    },
    {
      name: ["-mieee-fp", "-mno-ieee-fp"],
      description: "Use IEEE math for fp comparisons",
    },
    {
      name: "-mincoming-stack-boundary",
      description: "Assume incoming stack aligned to this power of 2",
      requiresSeparator: true,
      args: { name: "number" },
    },
    {
      name: ["-mindirect-branch-cs-prefix", "-mno-indirect-branch-cs-prefix"],
      description:
        "Add CS prefix to call and jmp to indirect thunk with branch target in r8-r15 registers",
    },
    {
      name: ["-mindirect-branch-register", "-mno-indirect-branch-register"],
      description: "Force indirect call and jump via register",
    },
    {
      name: "-mindirect-branch",
      description: "Convert indirect call and jump to call and return thunks",
      requiresSeparator: true,
      args: {
        name: "value",
        suggestions: ["keep", "thunk", "thunk-inline", "thunk-extern"],
      },
    },
    {
      name: ["-minline-all-stringops", "-mno-inline-all-stringops"],
      description: "Inline all known string operations",
    },
    {
      name: [
        "-minline-stringops-dynamically",
        "-mno-inline-stringops-dynamically",
      ],
      description:
        "Inline memset/memcpy string operations, but perform inline version only for small blocks",
    },
    {
      name: "-minstrument-return",
      description:
        "Instrument function exit in instrumented functions with __fentry__",
      requiresSeparator: true,
      args: { name: "value", suggestions: ["none", "call", "nop5"] },
    },
    {
      name: ["-mkl", "-mno-kl"],
      description: "Support KL built-in functions and code generation",
    },
    {
      name: "-mlam",
      description: "Instrument meta data position in user data pointers",
      requiresSeparator: true,
      args: { name: "value", suggestions: ["none", "u48", "u57"] },
    },
    {
      name: "-mlarge-data-threshold",
      description:
        "Data greater than given threshold will go into a large data section in x86-64 medium and large code models",
      requiresSeparator: true,
      args: { name: "number" },
    },
    {
      name: "-mlong-double-128",
      description: "Use 128-bit long double",
    },
    {
      name: "-mlong-double-64",
      description: "Use 64-bit long double",
    },
    {
      name: "-mlong-double-80",
      description: "Use 80-bit long double",
    },
    {
      name: ["-mlwp", "-mno-lwp"],
      description: "Support LWP built-in functions and code generation",
    },
    {
      name: ["-mlzcnt", "-mno-lzcnt"],
      description: "Support LZCNT built-in function and code generation",
    },
    {
      name: ["-mmanual-endbr", "-mno-manual-endbr"],
      description:
        "Insert ENDBR instruction at function entry only via cf_check attribute for CET instrumentation",
    },
    {
      name: "-MMD",
      description: "Like -MD but ignore system header files",
    },
    {
      name: "-mmemcpy-strategy",
      description:
        "Specify memcpy expansion strategy when expected size is known",
      requiresSeparator: true,
      args: { name: "value" },
    },
    {
      name: "-mmemset-strategy",
      description:
        "Specify memset expansion strategy when expected size is known",
      requiresSeparator: true,
      args: { name: "value" },
    },
    {
      name: ["-mmmx", "-mno-mmx"],
      description: "Support MMX built-in functions",
    },
    {
      name: ["-mmovbe", "-mno-movbe"],
      description: "Support code generation of movbe instruction",
    },
    {
      name: ["-mmovdir64b", "-mno-movdir64b"],
      description: "Support MOVDIR64B built-in functions and code generation",
    },
    {
      name: ["-mmovdiri", "-mno-movdiri"],
      description: "Support MOVDIRI built-in functions and code generation",
    },
    {
      name: "-mmove-max",
      description:
        "Maximum number of bits that can be moved from memory to memory efficiently",
      requiresSeparator: true,
      args: { name: "value", suggestions: ["none", "128", "256", "512"] },
    },
    {
      name: ["-mmovrs", "-mno-movrs"],
      description: "Support MOVRS built-in functions and code generation",
    },
    {
      name: ["-mms-bitfields", "-mno-ms-bitfields"],
      description: "Use native (MS) bitfield layout",
    },
    {
      name: "-mmusl",
      description: "Use musl C library",
    },
    {
      name: ["-mmwaitx", "-mno-mwaitx"],
      description:
        "Support MWAITX and MONITORX built-in functions and code generation",
    },
    {
      name: ["-mmwait", "-mno-mwait"],
      description:
        "Support MWAIT and MONITOR built-in functions and code generation",
    },
    {
      name: "-MM",
      description: "Like -M but ignore system header files",
    },
    {
      name: ["-mneeded", "-mno-needed"],
      description: "Emit GNU_PROPERTY_X86_ISA_1_NEEDED GNU property",
    },
    {
      name: "-mno-align-stringops",
      description: "Do not align the destination of inlined string operations",
    },
    {
      name: "-mno-default",
      description: "Clear all tune features",
    },
    {
      name: "-mno-fancy-math-387",
      description:
        "Some 387 emulators do not support the sin, cos and sqrt instructions for the 387",
    },
    {
      name: "-mno-push-args",
      description: "Use PUSH operations to store outgoing parameters",
    },
    {
      name: "-mno-recip",
      description: "Disable -mrecip",
    },
    {
      name: "-mno-red-zone",
      description: 'Do not use a so-called "red zone" for x86-64 code',
    },
    {
      name: ["-mnop-mcount", "-mno-nop-mcount"],
      description:
        "Generate mcount/__fentry__ calls as nops. To activate they need to be patched in",
    },
    {
      name: [
        "-mnoreturn-no-callee-saved-registers",
        "-mno-noreturn-no-callee-saved-registers",
      ],
      description:
        "Optimize noreturn functions by not saving callee-saved registers used in the function",
    },
    {
      name: ["-momit-leaf-frame-pointer", "-mno-omit-leaf-frame-pointer"],
      description: "Omit the frame pointer in leaf functions",
    },
    {
      name: ["-mpartial-vector-fp-math", "-mno-partial-vector-fp-math"],
      description:
        "Enable floating-point status flags setting SSE vector operations on partial vectors",
    },
    {
      name: "-mpc32",
      description: "Set 80387 floating-point precision to 32-bit",
    },
    {
      name: "-mpc64",
      description: "Set 80387 floating-point precision to 64-bit",
    },
    {
      name: "-mpc80",
      description: "Set 80387 floating-point precision to 80-bit",
    },
    {
      name: ["-mpclmul", "-mno-pclmul"],
      description: "Support PCLMUL built-in functions and code generation",
    },
    {
      name: ["-mpconfig", "-mno-pconfig"],
      description: "Support PCONFIG built-in functions and code generation",
    },
    {
      name: ["-mpku", "-mno-pku"],
      description: "Support PKU built-in functions and code generation",
    },
    {
      name: ["-mpopcnt", "-mno-popcnt"],
      description: "Support code generation of popcnt instruction",
    },
    {
      name: ["-mprefer-avx128", "-mno-prefer-avx128"],
      description:
        "Use 128-bit AVX instructions instead of 256-bit AVX instructions in the auto-vectorizer",
    },
    {
      name: "-mprefer-vector-width",
      description:
        "Use given register vector width instructions instead of maximum register width in the auto-vectorizer",
      requiresSeparator: true,
      args: { name: "value", suggestions: ["none", "128", "256", "512"] },
    },
    {
      name: "-mpreferred-stack-boundary",
      description: "Attempt to keep stack aligned to this power of 2",
      requiresSeparator: true,
      args: { name: "number" },
    },
    {
      name: ["-mprefetchi", "-mno-prefetchi"],
      description: "Support PREFETCHI built-in functions and code generation",
    },
    {
      name: ["-mprfchw", "-mno-prfchw"],
      description: "Support PREFETCHW instruction",
    },
    {
      name: ["-mptwrite", "-mno-ptwrite"],
      description: "Support PTWRITE built-in functions and code generation",
    },
    {
      name: "-mpush-args",
      description: "Use push instructions to save outgoing arguments",
    },
    {
      name: "-MP",
      description: "Generate phony targets for all headers",
    },
    {
      name: "-MQ",
      description: "Add a target that may require quoting",
      isRepeatable: true,
      args: { name: "target" },
    },
    {
      name: ["-mraoint", "-mno-raoint"],
      description: "Support RAOINT built-in functions and code generation",
    },
    {
      name: ["-mrdpid", "-mno-rdpid"],
      description: "Support RDPID built-in functions and code generation",
    },
    {
      name: ["-mrdrnd", "-mno-rdrnd"],
      description: "Support RDRND built-in functions and code generation",
    },
    {
      name: ["-mrdseed", "-mno-rdseed"],
      description: "Support RDSEED instruction",
    },
    {
      name: "-mrecip",
      description: "Generate reciprocals instead of divss and sqrtss",
      requiresSeparator: true,
      args: { name: "value", isOptional: true },
    },
    {
      name: ["-mrecord-mcount", "-mno-record-mcount"],
      description:
        "Generate __mcount_loc section with all mcount or __fentry__ calls",
    },
    {
      name: ["-mrecord-return", "-mno-record-return"],
      description:
        "Generate a __return_loc section pointing to all return instrumentation code",
    },
    {
      name: "-mred-zone",
      description: "Use red-zone in the x86-64 code",
    },
    {
      name: "-mregparm",
      description: "Number of registers used to pass integer arguments",
      requiresSeparator: true,
      args: { name: "number" },
    },
    {
      name: ["-mrelax-cmpxchg-loop", "-mno-relax-cmpxchg-loop"],
      description:
        "Relax cmpxchg loops for atomic_fetch_{or,xor,and,nand} by loading and comparing before cmpxchg",
    },
    {
      name: ["-mrtd", "-mno-rtd"],
      description: "Alternate calling convention",
    },
    {
      name: ["-mrtm", "-mno-rtm"],
      description: "Support RTM built-in functions and code generation",
    },
    {
      name: ["-msahf", "-mno-sahf"],
      description:
        "Support code generation of sahf instruction in 64bit x86-64 code",
    },
    {
      name: ["-mscatter", "-mno-scatter"],
      description: "Enable vectorization for scatter instruction",
    },
    {
      name: ["-mserialize", "-mno-serialize"],
      description: "Support SERIALIZE built-in functions and code generation",
    },
    {
      name: ["-msgx", "-mno-sgx"],
      description: "Support SGX built-in functions and code generation",
    },
    {
      name: ["-msha512", "-mno-sha512"],
      description:
        "Support MMX, SSE, SSE2, SSE3, SSSE3, SSE4.1, SSE4.2, AVX and SHA512 built-in functions and code generation",
    },
    {
      name: ["-msha", "-mno-sha"],
      description:
        "Support SHA1 and SHA256 built-in functions and code generation",
    },
    {
      name: ["-mshstk", "-mno-shstk"],
      description:
        "Enable shadow stack built-in functions from Control-flow Enforcement Technology (CET)",
    },
    {
      name: ["-mskip-rax-setup", "-mno-skip-rax-setup"],
      description:
        "Skip setting up RAX register when passing variable arguments",
    },
    {
      name: ["-msm3", "-mno-sm3"],
      description:
        "Support MMX, SSE, SSE2, SSE3, SSSE3, SSE4.1, SSE4.2, AVX and SM3 built-in functions and code generation",
    },
    {
      name: ["-msm4", "-mno-sm4"],
      description:
        "Support MMX, SSE, SSE2, SSE3, SSSE3, SSE4.1, SSE4.2, AVX and SM4 built-in functions and code generation",
    },
    {
      name: ["-msoft-float", "-mno-soft-float"],
      description: "Do not use hardware fp",
    },
    {
      name: ["-msse2avx", "-mno-sse2avx"],
      description: "Encode SSE instructions with VEX prefix",
    },
    {
      name: ["-msse2", "-mno-sse2"],
      description:
        "Support MMX, SSE and SSE2 built-in functions and code generation",
    },
    {
      name: ["-msse3", "-mno-sse3"],
      description:
        "Support MMX, SSE, SSE2 and SSE3 built-in functions and code generation",
    },
    {
      name: ["-msse4.1", "-mno-sse4.1"],
      description:
        "Support MMX, SSE, SSE2, SSE3, SSSE3 and SSE4.1 built-in functions and code generation",
    },
    {
      name: ["-msse4.2", "-mno-sse4.2"],
      description:
        "Support MMX, SSE, SSE2, SSE3, SSSE3, SSE4.1 and SSE4.2 built-in functions and code generation",
    },
    {
      name: ["-msse4a", "-mno-sse4a"],
      description:
        "Support MMX, SSE, SSE2, SSE3 and SSE4A built-in functions and code generation",
    },
    {
      name: ["-msse4", "-mno-sse4"],
      description:
        "Support MMX, SSE, SSE2, SSE3, SSSE3, SSE4.1 and SSE4.2 built-in functions and code generation",
    },
    {
      name: "-msseregparm",
      description: "Use SSE register passing conventions for SF and DF mode",
    },
    {
      name: ["-msse", "-mno-sse"],
      description: "Support MMX and SSE built-in functions and code generation",
    },
    {
      name: ["-mssse3", "-mno-ssse3"],
      description:
        "Support MMX, SSE, SSE2, SSE3 and SSSE3 built-in functions and code generation",
    },
    {
      name: ["-mstack-arg-probe", "-mno-stack-arg-probe"],
      description: "Enable stack probing",
    },
    {
      name: "-mstack-protector-guard-offset",
      description:
        "Use the given offset for addressing the stack-protector guard",
      requiresSeparator: true,
      args: { name: "number" },
    },
    {
      name: "-mstack-protector-guard-reg",
      description:
        "Use the given base register for addressing the stack-protector guard",
      requiresSeparator: true,
      args: { name: "value" },
    },
    {
      name: "-mstack-protector-guard-symbol",
      description:
        "Use the given symbol for addressing the stack-protector guard",
      requiresSeparator: true,
      args: { name: "number" },
    },
    {
      name: "-mstack-protector-guard",
      description: "Use given stack-protector guard",
      requiresSeparator: true,
      args: { name: "value", suggestions: ["tls", "global"] },
    },
    {
      name: ["-mstackrealign", "-mno-stackrealign"],
      description: "Realign stack in prologue",
    },
    {
      name: "-mstringop-strategy",
      description: "Chose strategy to generate stringop using",
      requiresSeparator: true,
      args: {
        name: "value",
        suggestions: [
          "rep_byte",
          "libcall",
          "rep_4byte",
          "rep_8byte",
          "byte_loop",
          "loop",
          "unrolled_loop",
          "vector_loop",
        ],
      },
    },
    {
      name: ["-mstv", "-mno-stv"],
      description:
        "Enable Scalar to Vector optimization pass transforming 64-bit integer computations into vector ones",
    },
    {
      name: ["-mtbm", "-mno-tbm"],
      description: "Support TBM built-in functions and code generation",
    },
    {
      name: "-mtls-dialect",
      description: "Use given thread-local storage dialect",
      requiresSeparator: true,
      args: { name: "value", suggestions: ["gnu", "gnu2"] },
    },
    {
      name: ["-mtls-direct-seg-refs", "-mno-tls-direct-seg-refs"],
      description: "Use direct references against %gs when accessing tls data",
    },
    {
      name: ["-mtsxldtrk", "-mno-tsxldtrk"],
      description: "Support TSXLDTRK built-in functions and code generation",
    },
    {
      name: "-mtune-ctrl",
      description: "Fine grain control of tune features",
      requiresSeparator: true,
      args: { name: "value" },
    },
    {
      name: "-mtune",
      description: "Schedule code for given CPU",
      requiresSeparator: true,
      args: { name: "cpu-type", suggestions: x86TuneTypes },
    },
    {
      name: "-MT",
      description: "Add a target that does not require quoting",
      isRepeatable: true,
      args: { name: "target" },
    },
    {
      name: "-muclibc",
      description: "Use uClibc C library",
    },
    {
      name: ["-muintr", "-mno-uintr"],
      description: "Support UINTR built-in functions and code generation",
    },
    {
      name: ["-munroll-only-small-loops", "-mno-unroll-only-small-loops"],
      description: "Enable conservative small loop unrolling",
    },
    {
      name: ["-musermsr", "-mno-usermsr"],
      description: "Support USER_MSR built-in functions and code generation",
    },
    {
      name: ["-mvaes", "-mno-vaes"],
      description: "Support VAES built-in functions and code generation",
    },
    {
      name: "-mveclibabi",
      description: "Vector library ABI to use",
      requiresSeparator: true,
      args: { name: "value", suggestions: ["svml", "acml", "aocl"] },
    },
    {
      name: ["-mvect8-ret-in-mem", "-mno-vect8-ret-in-mem"],
      description: "Return 8-byte vectors in memory",
    },
    {
      name: ["-mvpclmulqdq", "-mno-vpclmulqdq"],
      description: "Support VPCLMULQDQ built-in functions and code generation",
    },
    {
      name: ["-mvzeroupper", "-mno-vzeroupper"],
      description:
        "Generate vzeroupper instruction before a transfer of control flow out of the function",
    },
    {
      name: ["-mwaitpkg", "-mno-waitpkg"],
      description: "Support WAITPKG built-in functions and code generation",
    },
    {
      name: ["-mwbnoinvd", "-mno-wbnoinvd"],
      description: "Support WBNOINVD built-in functions and code generation",
    },
    {
      name: ["-mwidekl", "-mno-widekl"],
      description: "Support WIDEKL built-in functions and code generation",
    },
    {
      name: "-mx32",
      description: "Generate 32bit x86-64 code",
    },
    {
      name: ["-mxop", "-mno-xop"],
      description: "Support XOP built-in functions and code generation",
    },
    {
      name: ["-mxsavec", "-mno-xsavec"],
      description: "Support XSAVEC instructions",
    },
    {
      name: ["-mxsaveopt", "-mno-xsaveopt"],
      description: "Support XSAVEOPT instruction",
    },
    {
      name: ["-mxsaves", "-mno-xsaves"],
      description: "Support XSAVES and XRSTORS instructions",
    },
    {
      name: ["-mxsave", "-mno-xsave"],
      description: "Support XSAVE and XRSTOR instructions",
    },
    {
      name: "-M",
      description: "Generate make dependencies",
    },
    {
      name: "--no-canonical-prefixes",
      description:
        "Do not expand any symbolic links, resolve references to /../ or /./, or make the path absolute when generating a relative prefix",
    },
    {
      name: "-no-canonical-prefixes",
      description:
        "Do not expand any symbolic links, resolve references to /../ or /./, or make the path absolute when generating a relative prefix",
    },
    {
      name: "--no-integrated-cpp",
      description:
        "Perform preprocessing as a separate pass before compilation",
    },
    {
      name: "-no-integrated-cpp",
      description:
        "Perform preprocessing as a separate pass before compilation",
    },
    {
      name: "--no-line-commands",
      description: "Do not generate #line directives",
    },
    {
      name: "-no-pie",
      description:
        "Don't create a dynamically linked position independent executable",
    },
    {
      name: "--no-standard-includes",
      description:
        "Do not search standard system include directories (those specified with -isystem will still be used)",
    },
    {
      name: "--no-standard-libraries",
      description:
        "Do not use the standard system startup files or libraries when linking",
    },
    {
      name: "--no-sysroot-suffix",
      description:
        "Do not add the target-specific suffix to the root directory given with --sysroot",
    },
    {
      name: "--no-warnings",
      description: "Suppress warnings",
    },
    {
      name: "-nodefaultlibs",
      description: "Do not use the standard system libraries when linking",
    },
    {
      name: "-nolibc",
      description:
        "Do not use the C library or system libraries tightly coupled with it when linking",
    },
    {
      name: "-nostartfiles",
      description: "Do not use the standard system startup files when linking",
    },
    {
      name: "-nostdinc",
      description:
        "Do not search standard system include directories (those specified with -isystem will still be used)",
    },
    {
      name: "-nostdlib++",
      description: "Do not implicitly link with standard C++ libraries",
    },
    {
      name: "-nostdlib",
      description:
        "Do not use the standard system startup files or libraries when linking",
    },
    {
      name: "-N",
      description: "Passed to the linker",
    },
    {
      name: "-n",
      description: "Passed to the linker",
    },
    {
      name: "-O0",
      description:
        "Reduce compilation time and make debugging produce the expected results (default)",
    },
    {
      name: "-O1",
      description: "Optimize, taking somewhat more compilation time and memory",
    },
    {
      name: "-O2",
      description: "Optimize even more",
    },
    {
      name: "-O3",
      description: "Optimize yet more",
    },
    {
      name: "-Ofast",
      description: "Optimize for speed disregarding exact standards compliance",
    },
    {
      name: "-Og",
      description:
        "Optimize for debugging experience rather than speed or size",
    },
    {
      name: "--optimize",
      description: "Optimize (same as -O)",
    },
    {
      name: "-Os",
      description: "Optimize for space rather than speed",
    },
    {
      name: "--output",
      description: "Place output into <file>",
      args: { name: "file", template: "filepaths" },
    },
    {
      name: "-Oz",
      description: "Optimize for space aggressively rather than speed",
    },
    {
      name: "-O",
      description: "Optimize (same as -O1)",
    },
    {
      name: "-o",
      description: "Place the primary output in the given file",
      args: { name: "file", template: "filepaths" },
    },
    {
      name: "--pass-exit-codes",
      description:
        "Normally the gcc program exits with the code of 1 if any phase of the compiler returns a non-success return code",
    },
    {
      name: "-pass-exit-codes",
      description:
        "Normally the gcc program exits with the code of 1 if any phase of the compiler returns a non-success return code",
    },
    {
      name: "--pedantic-errors",
      description: "Like -pedantic but issue errors instead of warnings",
    },
    {
      name: "-pedantic-errors",
      description: "Like -pedantic but issue errors instead of warnings",
    },
    {
      name: "--pedantic",
      description:
        "Issue warnings needed for strict compliance to the standard",
    },
    {
      name: "-pedantic",
      description:
        "Issue warnings needed for strict compliance to the standard",
    },
    {
      name: "-pg",
      description: "Generate extra code to write profile information for gprof",
    },
    {
      name: "--pie",
      description:
        "Create a dynamically linked position independent executable",
    },
    {
      name: "-pie",
      description:
        "Create a dynamically linked position independent executable",
    },
    {
      name: "--pipe",
      description:
        "Use pipes rather than temporary files for communication between the various stages of compilation",
    },
    {
      name: "-pipe",
      description:
        "Use pipes rather than temporary files for communication between the various stages of compilation",
    },
    {
      name: "--prefix",
      description:
        "This option specifies where to find the executables, libraries, include files, and data files of the compiler itself",
      args: { name: "value" },
    },
    {
      name: "--preprocess",
      description:
        "Stop after the preprocessing stage; do not run the compiler proper",
    },
    {
      name: "--print-autofdo-gcov-version",
      description:
        "Print the current version of GCOV being used by the AutoFDO infrastructure",
    },
    {
      name: "-print-autofdo-gcov-version",
      description:
        "Print the current version of GCOV being used by the AutoFDO infrastructure",
    },
    {
      name: "--print-file-name",
      description:
        "Print the full absolute name of the library file library that would be used when linking and exit",
      args: { name: "value" },
    },
    {
      name: "-print-file-name",
      description:
        "Print the full absolute name of the library file library that would be used when linking and exit",
      requiresSeparator: true,
      args: { name: "value", isOptional: true },
    },
    {
      name: "--print-libgcc-file-name",
      description: "Same as -print-file-name=libgcc.a",
    },
    {
      name: "-print-libgcc-file-name",
      description: "Same as -print-file-name=libgcc.a",
    },
    {
      name: "--print-missing-file-dependencies",
      description: "Treat missing header files as generated files",
    },
    {
      name: "--print-multi-directory",
      description:
        "Print the directory name corresponding to the multilib selected by any other switches present in the command line",
    },
    {
      name: "-print-multi-directory",
      description:
        "Print the directory name corresponding to the multilib selected by any other switches present in the command line",
    },
    {
      name: "--print-multi-lib",
      description:
        "Print the mapping from multilib directory names to compiler switches that enable them",
    },
    {
      name: "-print-multi-lib",
      description:
        "Print the mapping from multilib directory names to compiler switches that enable them",
    },
    {
      name: "--print-multi-os-directory",
      description:
        "Print the path to OS libraries for the selected multilib, relative to some lib subdirectory",
    },
    {
      name: "-print-multi-os-directory",
      description:
        "Print the path to OS libraries for the selected multilib, relative to some lib subdirectory",
    },
    {
      name: "--print-multiarch",
      description:
        "Print the path to OS libraries for the selected multiarch, relative to some lib subdirectory",
    },
    {
      name: "-print-multiarch",
      description:
        "Print the path to OS libraries for the selected multiarch, relative to some lib subdirectory",
    },
    {
      name: "-print-objc-runtime-info",
      description: "Generate C header of platform-specific features",
    },
    {
      name: "--print-prog-name",
      description:
        "Like -print-file-name, but searches for a program such as cpp",
      args: { name: "value" },
    },
    {
      name: "-print-prog-name",
      description:
        "Like -print-file-name, but searches for a program such as cpp",
      requiresSeparator: true,
      args: { name: "value", isOptional: true },
    },
    {
      name: "--print-search-dirs",
      description:
        "Print the name of the configured installation directory and a list of program and library directories gcc searches and exit",
    },
    {
      name: "-print-search-dirs",
      description:
        "Print the name of the configured installation directory and a list of program and library directories gcc searches and exit",
    },
    {
      name: "--print-sysroot-headers-suffix",
      description:
        "Print the suffix added to the target sysroot when searching for headers, or give an error if the compiler is not configured with such a suffix and exit",
    },
    {
      name: "-print-sysroot-headers-suffix",
      description:
        "Print the suffix added to the target sysroot when searching for headers, or give an error if the compiler is not configured with such a suffix and exit",
    },
    {
      name: "--print-sysroot",
      description:
        "Print the target sysroot directory that is used during compilation",
    },
    {
      name: "-print-sysroot",
      description:
        "Print the target sysroot directory that is used during compilation",
    },
    {
      name: "--profile",
      description: "Enable function profiling",
    },
    {
      name: "-pthread",
      description:
        "Define additional macros required for using the POSIX threads library",
    },
    {
      name: "-P",
      description: "Do not generate #line directives",
    },
    {
      name: "-p",
      description: "Generate extra code to write profile information for prof",
    },
    {
      name: "-Qn",
      description:
        "Do not emit the compiler version string (same as -fno-ident)",
    },
    {
      name: "-quiet",
      description: "Do not display functions compiled or elapsed time",
    },
    {
      name: "-Qy",
      description: "Emit the compiler version string (same as -fident)",
    },
    {
      name: "-Q",
      description:
        "Print each function name as it is compiled, and statistics about each pass",
    },
    {
      name: "-rdynamic",
      description:
        "Pass the flag -export-dynamic to the ELF linker, on targets that support it",
    },
    {
      name: "-remap",
      description: "Remap file names when including files",
    },
    {
      name: "-r",
      description: "Produce a relocatable object as output",
    },
    {
      name: "--save-temps",
      description: "Store the usual temporary intermediate files permanently",
    },
    {
      name: "-save-temps",
      description: "Store the usual temporary intermediate files permanently",
      requiresSeparator: true,
      args: { name: "dir", isOptional: true, suggestions: ["cwd", "obj"] },
    },
    {
      name: "-shared-libgcc",
      description:
        "On systems that provide libgcc as a shared library, these options force the use of either the shared or static version, respectively",
    },
    {
      name: "--shared",
      description: "Create a shared library",
    },
    {
      name: "-shared",
      description: "Create a shared library",
    },
    {
      name: "--specs",
      description:
        "Process a specs file after the standard one, to override the driver defaults",
      args: { name: "value" },
    },
    {
      name: "-specs",
      description:
        "Process a specs file after the standard one, to override the driver defaults",
      args: { name: "value" },
    },
    {
      name: "-static-libasan",
      description:
        "When the -fsanitize=address option is used to link a program, the GCC driver automatically links against libasan",
    },
    {
      name: "-static-libgcc",
      description:
        "On systems that provide libgcc as a shared library, these options force the use of either the shared or static version, respectively",
    },
    {
      name: "-static-libhwasan",
      description:
        "When the -fsanitize=hwaddress option is used to link a program, the GCC driver automatically links against libhwasan",
    },
    {
      name: "-static-liblsan",
      description:
        "When the -fsanitize=leak option is used to link a program, the GCC driver automatically links against liblsan",
    },
    {
      name: "-static-libstdc++",
      description:
        "Link libstdc++ statically when linking C++ programs with the gcc/g++ driver",
    },
    {
      name: "-static-libtsan",
      description:
        "When the -fsanitize=thread option is used to link a program, the GCC driver automatically links against libtsan",
    },
    {
      name: "-static-libubsan",
      description:
        "When the -fsanitize=undefined option is used to link a program, the GCC driver automatically links against libubsan",
    },
    {
      name: "--static-pie",
      description: "Create a static position independent executable",
    },
    {
      name: "-static-pie",
      description: "Create a static position independent executable",
    },
    {
      name: "--static",
      description:
        "On systems that support dynamic linking, this overrides -pie and prevents linking with the shared libraries",
    },
    {
      name: "-static",
      description: "Prevent linking with the shared libraries (overrides -pie)",
    },
    {
      name: "-stdlib",
      description:
        "The standard library to be used for C++ headers and runtime",
      requiresSeparator: true,
      args: { name: "value", suggestions: ["libstdc++", "libc++"] },
    },
    {
      name: "--symbolic",
      description:
        "Bind references to global symbols when building a shared object",
    },
    {
      name: "-symbolic",
      description:
        "Bind references to global symbols when building a shared object",
    },
    {
      name: "--sysroot",
      description:
        "Use a directory as the logical root for headers and libraries",
      args: { name: "value" },
    },
    {
      name: "-S",
      description:
        "Stop processing after generating assembly code; do not assemble",
    },
    {
      name: "-s",
      description:
        "Remove all symbol table and relocation information from the executable",
    },
    {
      name: "--target-help",
      description:
        "Display target specific command line options (including assembler and linker options)",
    },
    {
      name: "-Tbss",
      description: "Passed to the linker",
      args: { name: "value" },
    },
    {
      name: "-Tdata",
      description: "Passed to the linker",
      args: { name: "value" },
    },
    {
      name: "-time",
      description:
        "Report the CPU time taken by each subprocess in the compilation sequence",
      requiresSeparator: true,
      args: { name: "value", isOptional: true },
    },
    {
      name: "--trace-includes",
      description: "Print the name of header files as they are used",
    },
    {
      name: "--traditional-cpp",
      description: "Enable traditional preprocessing",
    },
    {
      name: "-traditional-cpp",
      description: "Enable traditional preprocessing",
    },
    {
      name: "--traditional",
      description:
        "Try to imitate the behavior of pre-standard C preprocessors, as opposed to ISO C preprocessors",
    },
    {
      name: "-traditional",
      description:
        "Try to imitate the behavior of pre-standard C preprocessors, as opposed to ISO C preprocessors",
    },
    {
      name: "--trigraphs",
      description: "Support ISO C trigraphs",
    },
    {
      name: "-trigraphs",
      description: "Support ISO C trigraphs",
    },
    {
      name: "-Ttext",
      description: "Passed to the linker",
      args: { name: "value" },
    },
    {
      name: "-T",
      description: "Passed to the linker",
      args: { name: "script", template: "filepaths" },
    },
    {
      name: "-t",
      description: "Passed to the linker",
    },
    {
      name: "--undefine-macro",
      description: "Undefine <macro>",
      args: { name: "macro" },
    },
    {
      name: "-undef",
      description: "Do not predefine system-specific and GCC-specific macros",
    },
    {
      name: "--user-dependencies",
      description: "Like -M but ignore system header files",
    },
    {
      name: "-U",
      description: "Undefine a macro",
      isRepeatable: true,
      args: { name: "macro" },
    },
    {
      name: "-u",
      description:
        "Pretend the symbol is undefined, to force linking of library modules to define it",
      isRepeatable: true,
      args: { name: "symbol" },
    },
    {
      name: "--verbose",
      description: "Enable verbose output",
    },
    {
      name: "--version",
      description:
        "Display the version number and copyrights of the invoked GCC",
    },
    {
      name: "-version",
      description: "Display the compiler's version",
    },
    {
      name: "-v",
      description: "Enable verbose output",
    },
    {
      name: "-Wabi",
      description:
        "Warn about things that will change when compiling with an ABI-compliant compiler",
      requiresSeparator: true,
      args: { name: "number", isOptional: true },
    },
    {
      name: ["-Wabsolute-value", "-Wno-absolute-value"],
      description:
        "Warn on suspicious calls of standard functions computing absolute values",
    },
    {
      name: ["-Waddress-of-packed-member", "-Wno-address-of-packed-member"],
      description:
        "Warn when the address of packed member of struct or union is taken",
    },
    {
      name: ["-Waddress", "-Wno-address"],
      description: "Warn about suspicious uses of memory addresses",
    },
    {
      name: ["-Waggregate-return", "-Wno-aggregate-return"],
      description: "Warn about returning structures, unions or arrays",
    },
    {
      name: [
        "-Waggressive-loop-optimizations",
        "-Wno-aggressive-loop-optimizations",
      ],
      description:
        "Warn if a loop with constant number of iterations triggers undefined behavior",
    },
    {
      name: "-Walloc-size-larger-than",
      description:
        "Warn for calls to allocation functions that attempt to allocate objects larger than the specified number of bytes",
      requiresSeparator: true,
      args: { name: "bytes" },
    },
    {
      name: ["-Walloc-size", "-Wno-alloc-size"],
      description:
        "Warn when allocating insufficient storage for the target type of the assigned pointer",
    },
    {
      name: ["-Walloc-zero", "-Wno-alloc-zero"],
      description:
        "Warn for calls to allocation functions that specify zero bytes",
    },
    {
      name: "-Walloca-larger-than",
      description:
        "Warn on unbounded uses of alloca, and on bounded uses of alloca whose bound can be larger than <number> bytes",
      requiresSeparator: true,
      args: { name: "number" },
    },
    {
      name: ["-Walloca", "-Wno-alloca"],
      description: "Warn on any use of alloca",
    },
    {
      name: ["-Wall", "-Wno-all"],
      description: "Enable most warning messages",
    },
    {
      name: ["-Wanalyzer-allocation-size", "-Wno-analyzer-allocation-size"],
      description:
        "Warn about code paths in which a pointer to a buffer is assigned to an incompatible type",
    },
    {
      name: [
        "-Wanalyzer-deref-before-check",
        "-Wno-analyzer-deref-before-check",
      ],
      description:
        "Warn about code paths in which a pointer is checked for NULL after it has already been dereferenced",
    },
    {
      name: ["-Wanalyzer-double-fclose", "-Wno-analyzer-double-fclose"],
      description:
        "Warn about code paths in which a stdio FILE can be closed more than once",
    },
    {
      name: ["-Wanalyzer-double-free", "-Wno-analyzer-double-free"],
      description:
        "Warn about code paths in which a pointer can be freed more than once",
    },
    {
      name: [
        "-Wanalyzer-exposure-through-output-file",
        "-Wno-analyzer-exposure-through-output-file",
      ],
      description:
        "Warn about code paths in which sensitive data is written to a file",
    },
    {
      name: [
        "-Wanalyzer-exposure-through-uninit-copy",
        "-Wno-analyzer-exposure-through-uninit-copy",
      ],
      description:
        "Warn about code paths in which sensitive data is copied across a security boundary",
    },
    {
      name: [
        "-Wanalyzer-fd-access-mode-mismatch",
        "-Wno-analyzer-fd-access-mode-mismatch",
      ],
      description:
        "Warn about code paths in which read on a write-only file descriptor is attempted, or vice versa",
    },
    {
      name: ["-Wanalyzer-fd-double-close", "-Wno-analyzer-fd-double-close"],
      description:
        "Warn about code paths in which a file descriptor can be closed more than once",
    },
    {
      name: ["-Wanalyzer-fd-leak", "-Wno-analyzer-fd-leak"],
      description:
        "Warn about code paths in which a file descriptor is not closed",
    },
    {
      name: ["-Wanalyzer-fd-phase-mismatch", "-Wno-analyzer-fd-phase-mismatch"],
      description:
        "Warn about code paths in which an operation is attempted in the wrong phase of a file descriptor's lifetime",
    },
    {
      name: ["-Wanalyzer-fd-type-mismatch", "-Wno-analyzer-fd-type-mismatch"],
      description:
        "Warn about code paths in which an operation is attempted on the wrong type of file descriptor",
    },
    {
      name: [
        "-Wanalyzer-fd-use-after-close",
        "-Wno-analyzer-fd-use-after-close",
      ],
      description:
        "Warn about code paths in which a read or write is performed on a closed file descriptor",
    },
    {
      name: [
        "-Wanalyzer-fd-use-without-check",
        "-Wno-analyzer-fd-use-without-check",
      ],
      description:
        "Warn about code paths in which a file descriptor is used without being checked for validity",
    },
    {
      name: ["-Wanalyzer-file-leak", "-Wno-analyzer-file-leak"],
      description: "Warn about code paths in which a stdio FILE is not closed",
    },
    {
      name: ["-Wanalyzer-free-of-non-heap", "-Wno-analyzer-free-of-non-heap"],
      description: "Warn about code paths in which a non-heap pointer is freed",
    },
    {
      name: [
        "-Wanalyzer-imprecise-fp-arithmetic",
        "-Wno-analyzer-imprecise-fp-arithmetic",
      ],
      description:
        "Warn about code paths in which floating-point arithmetic is used in locations where precise computation is needed",
    },
    {
      name: ["-Wanalyzer-infinite-loop", "-Wno-analyzer-infinite-loop"],
      description:
        "Warn about code paths which appear to lead to an infinite loop",
    },
    {
      name: [
        "-Wanalyzer-infinite-recursion",
        "-Wno-analyzer-infinite-recursion",
      ],
      description:
        "Warn about code paths which appear to lead to infinite recursion",
    },
    {
      name: ["-Wanalyzer-jump-through-null", "-Wno-analyzer-jump-through-null"],
      description:
        "Warn about code paths in which a NULL function pointer is called",
    },
    {
      name: ["-Wanalyzer-malloc-leak", "-Wno-analyzer-malloc-leak"],
      description:
        "Warn about code paths in which a heap-allocated pointer leaks",
    },
    {
      name: [
        "-Wanalyzer-mismatching-deallocation",
        "-Wno-analyzer-mismatching-deallocation",
      ],
      description:
        "Warn about code paths in which the wrong deallocation function is called",
    },
    {
      name: ["-Wanalyzer-null-argument", "-Wno-analyzer-null-argument"],
      description:
        "Warn about code paths in which NULL is passed to a must-not-be-NULL function argument",
    },
    {
      name: ["-Wanalyzer-null-dereference", "-Wno-analyzer-null-dereference"],
      description:
        "Warn about code paths in which a NULL pointer is dereferenced",
    },
    {
      name: ["-Wanalyzer-out-of-bounds", "-Wno-analyzer-out-of-bounds"],
      description:
        "Warn about code paths in which a write or read to a buffer is out-of-bounds",
    },
    {
      name: [
        "-Wanalyzer-overlapping-buffers",
        "-Wno-analyzer-overlapping-buffers",
      ],
      description:
        "Warn about code paths in which undefined behavior would occur due to overlapping buffers",
    },
    {
      name: [
        "-Wanalyzer-possible-null-argument",
        "-Wno-analyzer-possible-null-argument",
      ],
      description:
        "Warn about code paths in which a possibly-NULL value is passed to a must-not-be-NULL function argument",
    },
    {
      name: [
        "-Wanalyzer-possible-null-dereference",
        "-Wno-analyzer-possible-null-dereference",
      ],
      description:
        "Warn about code paths in which a possibly-NULL pointer is dereferenced",
    },
    {
      name: [
        "-Wanalyzer-putenv-of-auto-var",
        "-Wno-analyzer-putenv-of-auto-var",
      ],
      description:
        "Warn about code paths in which an on-stack buffer is passed to putenv",
    },
    {
      name: [
        "-Wanalyzer-shift-count-negative",
        "-Wno-analyzer-shift-count-negative",
      ],
      description:
        "Warn about code paths in which a shift with negative count is attempted",
    },
    {
      name: [
        "-Wanalyzer-shift-count-overflow",
        "-Wno-analyzer-shift-count-overflow",
      ],
      description:
        "Warn about code paths in which a shift with count >= width of type is attempted",
    },
    {
      name: [
        "-Wanalyzer-stale-setjmp-buffer",
        "-Wno-analyzer-stale-setjmp-buffer",
      ],
      description:
        "Warn about code paths in which a longjmp rewinds to a jmp_buf saved in a stack frame that has returned",
    },
    {
      name: [
        "-Wanalyzer-symbol-too-complex",
        "-Wno-analyzer-symbol-too-complex",
      ],
      description:
        "Warn if expressions are too complicated for the analyzer to fully track",
    },
    {
      name: [
        "-Wanalyzer-tainted-allocation-size",
        "-Wno-analyzer-tainted-allocation-size",
      ],
      description:
        "Warn about code paths in which an unsanitized value is used as an allocation size",
    },
    {
      name: [
        "-Wanalyzer-tainted-array-index",
        "-Wno-analyzer-tainted-array-index",
      ],
      description:
        "Warn about code paths in which an unsanitized value is used as an array index",
    },
    {
      name: ["-Wanalyzer-tainted-assertion", "-Wno-analyzer-tainted-assertion"],
      description:
        "Warn about code paths in which an 'assert' is made involving an unsanitized value",
    },
    {
      name: ["-Wanalyzer-tainted-divisor", "-Wno-analyzer-tainted-divisor"],
      description:
        "Warn about code paths in which an unsanitized value is used as a divisor",
    },
    {
      name: ["-Wanalyzer-tainted-offset", "-Wno-analyzer-tainted-offset"],
      description:
        "Warn about code paths in which an unsanitized value is used as a pointer offset",
    },
    {
      name: ["-Wanalyzer-tainted-size", "-Wno-analyzer-tainted-size"],
      description:
        "Warn about code paths in which an unsanitized value is used as a size",
    },
    {
      name: [
        "-Wanalyzer-throw-of-unexpected-type",
        "-Wno-analyzer-throw-of-unexpected-type",
      ],
      description:
        "Warn about code paths in which an exception of unexpected type is thrown",
    },
    {
      name: ["-Wanalyzer-too-complex", "-Wno-analyzer-too-complex"],
      description:
        "Warn if the code is too complicated for the analyzer to fully explore",
    },
    {
      name: [
        "-Wanalyzer-undefined-behavior-ptrdiff",
        "-Wno-analyzer-undefined-behavior-ptrdiff",
      ],
      description:
        "Warn about code paths in which pointer subtraction involves undefined behavior",
    },
    {
      name: [
        "-Wanalyzer-undefined-behavior-strtok",
        "-Wno-analyzer-undefined-behavior-strtok",
      ],
      description:
        "Warn about code paths in which a call is made to strtok with undefined behavior",
    },
    {
      name: [
        "-Wanalyzer-unsafe-call-within-signal-handler",
        "-Wno-analyzer-unsafe-call-within-signal-handler",
      ],
      description:
        "Warn about code paths in which an async-signal-unsafe function is called from a signal handler",
    },
    {
      name: ["-Wanalyzer-use-after-free", "-Wno-analyzer-use-after-free"],
      description: "Warn about code paths in which a freed value is used",
    },
    {
      name: [
        "-Wanalyzer-use-of-pointer-in-stale-stack-frame",
        "-Wno-analyzer-use-of-pointer-in-stale-stack-frame",
      ],
      description:
        "Warn about code paths in which a pointer to a stale stack frame is used",
    },
    {
      name: [
        "-Wanalyzer-use-of-uninitialized-value",
        "-Wno-analyzer-use-of-uninitialized-value",
      ],
      description:
        "Warn about code paths in which an uninitialized value is used",
    },
    {
      name: [
        "-Wanalyzer-va-arg-type-mismatch",
        "-Wno-analyzer-va-arg-type-mismatch",
      ],
      description: "Warn about code paths in which va_arg uses the wrong type",
    },
    {
      name: ["-Wanalyzer-va-list-exhausted", "-Wno-analyzer-va-list-exhausted"],
      description:
        "Warn about code paths in which va_arg is used too many times on a va_list",
    },
    {
      name: ["-Wanalyzer-va-list-leak", "-Wno-analyzer-va-list-leak"],
      description:
        "Warn about code paths in which va_start or va_copy is used without a corresponding va_end",
    },
    {
      name: [
        "-Wanalyzer-va-list-use-after-va-end",
        "-Wno-analyzer-va-list-use-after-va-end",
      ],
      description:
        "Warn about code paths in which a va_list is used after va_end",
    },
    {
      name: ["-Wanalyzer-write-to-const", "-Wno-analyzer-write-to-const"],
      description:
        "Warn about code paths which attempt to write to a const object",
    },
    {
      name: [
        "-Wanalyzer-write-to-string-literal",
        "-Wno-analyzer-write-to-string-literal",
      ],
      description:
        "Warn about code paths which attempt to write to a string literal",
    },
    {
      name: ["-Warith-conversion", "-Wno-arith-conversion"],
      description:
        "Warn if conversion of the result of arithmetic might change the value even though converting the operands cannot",
    },
    {
      name: "-Warray-bounds",
      description: "Warn if an array is accessed out of bounds",
      requiresSeparator: true,
      args: { name: "value", isOptional: true, suggestions: ["0", "1", "2"] },
    },
    {
      name: ["-Warray-compare", "-Wno-array-compare"],
      description: "Warn about comparisons between two operands of array type",
    },
    {
      name: "-Warray-parameter",
      description:
        "Warn about mismatched declarations of array parameters and unsafe accesses to them",
      requiresSeparator: true,
      args: { name: "value", isOptional: true, suggestions: ["0", "1", "2"] },
    },
    {
      name: ["-Wassign-intercept", "-Wno-assign-intercept"],
      description:
        "Warn whenever an Objective-C assignment is being intercepted by the garbage collector",
    },
    {
      name: "-Wattribute-alias",
      description:
        "Warn about type safety and similar errors and mismatches in declarations with alias attributes",
      requiresSeparator: true,
      args: { name: "value", isOptional: true, suggestions: ["0", "1", "2"] },
    },
    {
      name: ["-Wattribute-warning", "-Wno-attribute-warning"],
      description: "Warn about uses of __attribute__((warning)) declarations",
    },
    {
      name: "-Wattributes",
      description: "Warn about inappropriate attribute usage",
      requiresSeparator: true,
      args: { name: "value", isOptional: true },
    },
    {
      name: ["-Wauto-profile", "-Wno-auto-profile"],
      description: "Warn about problems with auto-profile data",
    },
    {
      name: "-Wa",
      description: "Pass comma-separated options to the assembler",
      requiresSeparator: ",",
      isRepeatable: true,
      args: { name: "option", isOptional: true },
    },
    {
      name: ["-Wbad-function-cast", "-Wno-bad-function-cast"],
      description: "Warn about casting functions to incompatible types",
    },
    {
      name: "-Wbidi-chars",
      description: "Warn about UTF-8 bidirectional control characters",
      requiresSeparator: true,
      args: {
        name: "value",
        isOptional: true,
        suggestions: ["none", "unpaired", "any", "ucn"],
      },
    },
    {
      name: ["-Wbool-compare", "-Wno-bool-compare"],
      description:
        "Warn about boolean expression compared with an integer value different from true/false",
    },
    {
      name: ["-Wbool-operation", "-Wno-bool-operation"],
      description: "Warn about certain operations on boolean expressions",
    },
    {
      name: [
        "-Wbuiltin-declaration-mismatch",
        "-Wno-builtin-declaration-mismatch",
      ],
      description:
        "Warn when a built-in function is declared with the wrong signature",
    },
    {
      name: ["-Wbuiltin-macro-redefined", "-Wno-builtin-macro-redefined"],
      description:
        "Warn when a built-in preprocessor macro is undefined or redefined",
    },
    {
      name: ["-Wc++-compat", "-Wno-c++-compat"],
      description:
        "Warn about C constructs that are not in the common subset of C and C++",
    },
    {
      name: ["-Wc11-c23-compat", "-Wno-c11-c23-compat"],
      description:
        "Warn about features not present in ISO C11, but present in ISO C23",
    },
    {
      name: ["-Wc11-c2x-compat", "-Wno-c11-c2x-compat"],
      description: "Deprecated in favor of -Wc11-c23-compat",
      deprecated: true,
    },
    {
      name: ["-Wc23-c2y-compat", "-Wno-c23-c2y-compat"],
      description:
        "Warn about features not present in ISO C23, but present in ISO C2Y",
    },
    {
      name: ["-Wc90-c99-compat", "-Wno-c90-c99-compat"],
      description:
        "Warn about features not present in ISO C90, but present in ISO C99",
    },
    {
      name: ["-Wc99-c11-compat", "-Wno-c99-c11-compat"],
      description:
        "Warn about features not present in ISO C99, but present in ISO C11",
    },
    {
      name: ["-Wcalloc-transposed-args", "-Wno-calloc-transposed-args"],
      description:
        "Warn about suspicious calls to calloc-like functions where sizeof expression is the earlier size argument and not the latter",
    },
    {
      name: ["-Wcannot-profile", "-Wno-cannot-profile"],
      description:
        "Warn when profiling instrumentation was requested, but could not be applied to a certain function",
    },
    {
      name: "-Wcast-align",
      description: "Warn about pointer casts which increase alignment",
      requiresSeparator: true,
      args: { name: "value", isOptional: true, suggestions: ["strict"] },
    },
    {
      name: ["-Wcast-function-type", "-Wno-cast-function-type"],
      description: "Warn about casts between incompatible function types",
    },
    {
      name: ["-Wcast-qual", "-Wno-cast-qual"],
      description: "Warn about casts which discard qualifiers",
    },
    {
      name: ["-Wchar-subscripts", "-Wno-char-subscripts"],
      description: 'Warn about subscripts whose type is "char"',
    },
    {
      name: ["-Wclobbered", "-Wno-clobbered"],
      description:
        'Warn about variables that might be changed by "longjmp" or "vfork"',
    },
    {
      name: ["-Wcomments", "-Wno-comments"],
      description: "Synonym for -Wcomment",
    },
    {
      name: ["-Wcomment", "-Wno-comment"],
      description:
        "Warn about possibly nested block comments, and C++ comments spanning more than one physical line",
    },
    {
      name: [
        "-Wcompare-distinct-pointer-types",
        "-Wno-compare-distinct-pointer-types",
      ],
      description:
        "Warn if pointers of distinct types are compared without a cast",
    },
    {
      name: ["-Wcomplain-wrong-lang", "-Wno-complain-wrong-lang"],
      description:
        "Complain when a command-line option is valid, but not applicable to the current front end",
    },
    {
      name: ["-Wconversion", "-Wno-conversion"],
      description: "Warn for implicit type conversions that may change a value",
    },
    {
      name: [
        "-Wcoverage-invalid-line-number",
        "-Wno-coverage-invalid-line-number",
      ],
      description:
        "Warn in case a function ends earlier than it begins due to an invalid linenum macros",
    },
    {
      name: ["-Wcoverage-mismatch", "-Wno-coverage-mismatch"],
      description: "Warn in case profiles in -fprofile-use do not match",
    },
    {
      name: [
        "-Wcoverage-too-many-conditions",
        "-Wno-coverage-too-many-conditions",
      ],
      description:
        "Warn when a conditional has too many terms and condition coverage profiling gives up instrumenting the expression",
    },
    {
      name: ["-Wcoverage-too-many-paths", "-Wno-coverage-too-many-paths"],
      description:
        "Warn if a function exceeds the path coverage limit and instrumentation gives up",
    },
    {
      name: ["-Wcpp", "-Wno-cpp"],
      description: "Warn when a #warning directive is encountered",
    },
    {
      name: ["-Wdangling-else", "-Wno-dangling-else"],
      description: "Warn about dangling else",
    },
    {
      name: "-Wdangling-pointer",
      description:
        "Warn for uses of pointers to auto variables whose lifetime has ended",
      requiresSeparator: true,
      args: { name: "value", isOptional: true, suggestions: ["0", "1", "2"] },
    },
    {
      name: ["-Wdate-time", "-Wno-date-time"],
      description: "Warn about __TIME__, __DATE__ and __TIMESTAMP__ usage",
    },
    {
      name: [
        "-Wdeclaration-after-statement",
        "-Wno-declaration-after-statement",
      ],
      description: "Warn when a declaration is found after a statement",
    },
    {
      name: [
        "-Wdeclaration-missing-parameter-type",
        "-Wno-declaration-missing-parameter-type",
      ],
      description: "Warn for missing parameter types in function declarations",
    },
    {
      name: ["-Wdeprecated-declarations", "-Wno-deprecated-declarations"],
      description:
        "Warn about uses of __attribute__((deprecated)) declarations",
    },
    {
      name: ["-Wdeprecated-non-prototype", "-Wno-deprecated-non-prototype"],
      description:
        "Warn about calls with arguments to functions declared without parameters",
    },
    {
      name: ["-Wdeprecated-openmp", "-Wno-deprecated-openmp"],
      description: "Warn about deprecated OpenMP code",
    },
    {
      name: ["-Wdeprecated", "-Wno-deprecated"],
      description:
        "Warn if a deprecated compiler feature, class, method, or field is used",
    },
    {
      name: ["-Wdesignated-init", "-Wno-designated-init"],
      description:
        "Warn about positional initialization of structs requiring designated initializers",
    },
    {
      name: ["-Wdisabled-optimization", "-Wno-disabled-optimization"],
      description: "Warn when an optimization pass is disabled",
    },
    {
      name: ["-Wdiscarded-array-qualifiers", "-Wno-discarded-array-qualifiers"],
      description:
        "Warn if qualifiers on arrays which are pointer targets are discarded",
    },
    {
      name: ["-Wdiscarded-qualifiers", "-Wno-discarded-qualifiers"],
      description: "Warn if type qualifiers on pointers are discarded",
    },
    {
      name: ["-Wdiv-by-zero", "-Wno-div-by-zero"],
      description: "Warn about compile-time integer division by zero",
    },
    {
      name: ["-Wdouble-promotion", "-Wno-double-promotion"],
      description: 'Warn about implicit conversions from "float" to "double"',
    },
    {
      name: ["-Wduplicate-decl-specifier", "-Wno-duplicate-decl-specifier"],
      description:
        "Warn when a declaration has duplicate const, volatile, restrict or _Atomic specifier",
    },
    {
      name: ["-Wduplicated-branches", "-Wno-duplicated-branches"],
      description: "Warn about duplicated branches in if-else statements",
    },
    {
      name: ["-Wduplicated-cond", "-Wno-duplicated-cond"],
      description: "Warn about duplicated conditions in an if-else-if chain",
    },
    {
      name: ["-Wempty-body", "-Wno-empty-body"],
      description: "Warn about an empty body in an if or else statement",
    },
    {
      name: ["-Wendif-labels", "-Wno-endif-labels"],
      description: "Warn about stray tokens after #else and #endif",
    },
    {
      name: ["-Wenum-compare", "-Wno-enum-compare"],
      description: "Warn about comparison of different enum types",
    },
    {
      name: ["-Wenum-conversion", "-Wno-enum-conversion"],
      description: "Warn about implicit conversion of enum types",
    },
    {
      name: ["-Wenum-int-mismatch", "-Wno-enum-int-mismatch"],
      description: "Warn about enum/integer type mismatches",
    },
    {
      name: "-Werror-implicit-function-declaration",
      description:
        "This switch is deprecated; use -Werror=implicit-function-declaration instead",
      deprecated: true,
    },
    {
      name: "-Werror",
      description: "Turn all warnings into errors",
      requiresSeparator: true,
      isRepeatable: true,
      args: { name: "value", isOptional: true },
    },
    {
      name: ["-Wexpansion-to-defined", "-Wno-expansion-to-defined"],
      description: 'Warn if "defined" is used outside #if',
    },
    {
      name: ["-Wextra", "-Wno-extra"],
      description: "Print extra (possibly unwanted) warnings",
    },
    {
      name: ["-Wfatal-errors", "-Wno-fatal-errors"],
      description: "Exit on the first error occurred",
    },
    {
      name: [
        "-Wflex-array-member-not-at-end",
        "-Wno-flex-array-member-not-at-end",
      ],
      description:
        "Warn when a structure containing a C99 flexible array member as the last field is not at the end of another structure",
    },
    {
      name: ["-Wfloat-conversion", "-Wno-float-conversion"],
      description:
        "Warn for implicit type conversions that cause loss of floating point precision",
    },
    {
      name: ["-Wfloat-equal", "-Wno-float-equal"],
      description: "Warn if testing floating point numbers for equality",
    },
    {
      name: ["-Wformat-contains-nul", "-Wno-format-contains-nul"],
      description: "Warn about format strings that contain NUL bytes",
    },
    {
      name: ["-Wformat-diag", "-Wno-format-diag"],
      description:
        "Warn about GCC format strings with strings unsuitable for diagnostics",
    },
    {
      name: ["-Wformat-extra-args", "-Wno-format-extra-args"],
      description:
        "Warn if passing too many arguments to a function for its format string",
    },
    {
      name: ["-Wformat-nonliteral", "-Wno-format-nonliteral"],
      description: "Warn about format strings that are not literals",
    },
    {
      name: "-Wformat-overflow",
      description:
        "Warn about function calls with format strings that write past the end of the destination region. Same as -Wformat-overflow=1",
      requiresSeparator: true,
      args: { name: "value", isOptional: true, suggestions: ["0", "1", "2"] },
    },
    {
      name: ["-Wformat-security", "-Wno-format-security"],
      description:
        "Warn about possible security problems with format functions",
    },
    {
      name: ["-Wformat-signedness", "-Wno-format-signedness"],
      description: "Warn about sign differences with format functions",
    },
    {
      name: "-Wformat-truncation",
      description:
        "Warn about calls to snprintf and similar functions that truncate output. Same as -Wformat-truncation=1",
      requiresSeparator: true,
      args: { name: "value", isOptional: true, suggestions: ["0", "1", "2"] },
    },
    {
      name: ["-Wformat-y2k", "-Wno-format-y2k"],
      description: "Warn about strftime formats yielding 2-digit years",
    },
    {
      name: ["-Wformat-zero-length", "-Wno-format-zero-length"],
      description: "Warn about zero-length formats",
    },
    {
      name: "-Wformat",
      description:
        "Warn about printf/scanf/strftime/strfmon format string anomalies",
      requiresSeparator: true,
      args: { name: "value", isOptional: true, suggestions: ["0", "1", "2"] },
    },
    {
      name: ["-Wframe-address", "-Wno-frame-address"],
      description:
        "Warn when __builtin_frame_address or __builtin_return_address is used unsafely",
    },
    {
      name: "-Wframe-larger-than",
      description:
        "Warn if a function's stack frame requires in excess of <byte-size>",
      requiresSeparator: true,
      args: { name: "byte-size" },
    },
    {
      name: ["-Wfree-labels", "-Wno-free-labels"],
      description:
        "Warn about labels on declarations and at the end of compound statements",
    },
    {
      name: ["-Wfree-nonheap-object", "-Wno-free-nonheap-object"],
      description: "Warn when attempting to free a non-heap object",
    },
    {
      name: ["-Whardened", "-Wno-hardened"],
      description: "Warn when -fhardened did not enable an option from its set",
    },
    {
      name: ["-Wheader-guard", "-Wno-header-guard"],
      description:
        "Warn when #ifndef of a header guard is followed by #define of a different macro with the header guard macro not defined at the end of header",
    },
    {
      name: ["-Wif-not-aligned", "-Wno-if-not-aligned"],
      description: "Warn when the field in a struct is not aligned",
    },
    {
      name: ["-Wignored-attributes", "-Wno-ignored-attributes"],
      description: "Warn whenever attributes are ignored",
    },
    {
      name: ["-Wignored-qualifiers", "-Wno-ignored-qualifiers"],
      description: "Warn whenever type qualifiers are ignored",
    },
    {
      name: "-Wimplicit-fallthrough",
      description: "Warn when a switch case falls through",
      requiresSeparator: true,
      args: {
        name: "value",
        isOptional: true,
        suggestions: ["0", "1", "2", "3", "4", "5"],
      },
    },
    {
      name: [
        "-Wimplicit-function-declaration",
        "-Wno-implicit-function-declaration",
      ],
      description: "Warn about implicit function declarations",
    },
    {
      name: ["-Wimplicit-int", "-Wno-implicit-int"],
      description: "Warn when a declaration does not specify a type",
    },
    {
      name: ["-Wimplicit", "-Wno-implicit"],
      description: "Warn about implicit declarations",
    },
    {
      name: ["-Wincompatible-pointer-types", "-Wno-incompatible-pointer-types"],
      description:
        "Warn when there is a conversion between pointers that have incompatible types",
    },
    {
      name: ["-Winfinite-recursion", "-Wno-infinite-recursion"],
      description: "Warn for infinitely recursive calls",
    },
    {
      name: ["-Winit-self", "-Wno-init-self"],
      description: "Warn about variables which are initialized to themselves",
    },
    {
      name: ["-Winline", "-Wno-inline"],
      description: "Warn when an inlined function cannot be inlined",
    },
    {
      name: ["-Wint-conversion", "-Wno-int-conversion"],
      description:
        "Warn about incompatible integer to pointer and pointer to integer conversions",
    },
    {
      name: ["-Wint-in-bool-context", "-Wno-int-in-bool-context"],
      description: "Warn for suspicious integer expressions in boolean context",
    },
    {
      name: ["-Wint-to-pointer-cast", "-Wno-int-to-pointer-cast"],
      description:
        "Warn when there is a cast to a pointer from an integer of a different size",
    },
    {
      name: ["-Winvalid-memory-model", "-Wno-invalid-memory-model"],
      description:
        "Warn when an atomic memory model parameter is known to be outside the valid range",
    },
    {
      name: ["-Winvalid-pch", "-Wno-invalid-pch"],
      description: "Warn about PCH files that are found but not used",
    },
    {
      name: ["-Winvalid-utf8", "-Wno-invalid-utf8"],
      description: "Warn about invalid UTF-8 characters",
    },
    {
      name: ["-Wjump-misses-init", "-Wno-jump-misses-init"],
      description: "Warn when a jump misses a variable initialization",
    },
    {
      name: ["-Wkeyword-macro", "-Wno-keyword-macro"],
      description:
        "Warn about defining or undefining macros with identifiers equal to keywords (or for C++ conditional keywords or standard attribute names)",
    },
    {
      name: "-Wlarger-than",
      description: "Warn if an object's size exceeds <byte-size>",
      requiresSeparator: true,
      args: { name: "byte-size" },
    },
    {
      name: "-Wleading-whitespace",
      description:
        "Warn about leading whitespace style issues on lines except when in raw string literals",
      requiresSeparator: true,
      args: {
        name: "value",
        suggestions: ["none", "spaces", "tabs", "blanks"],
      },
    },
    {
      name: ["-Wlogical-not-parentheses", "-Wno-logical-not-parentheses"],
      description:
        "Warn when logical not is used on the left hand side operand of a comparison",
    },
    {
      name: ["-Wlogical-op", "-Wno-logical-op"],
      description:
        "Warn when a logical operator is suspiciously always evaluating to true or false",
    },
    {
      name: ["-Wlong-long", "-Wno-long-long"],
      description: 'Do not warn about using "long long" when -pedantic',
    },
    {
      name: ["-Wlto-type-mismatch", "-Wno-lto-type-mismatch"],
      description:
        "During link time optimization warn about mismatched types of global declarations",
    },
    {
      name: "-Wl",
      description: "Pass comma-separated options to the linker",
      requiresSeparator: ",",
      isRepeatable: true,
      args: { name: "option", isOptional: true },
    },
    {
      name: ["-Wmain", "-Wno-main"],
      description: 'Warn about suspicious declarations of "main"',
    },
    {
      name: ["-Wmaybe-musttail-local-addr", "-Wno-maybe-musttail-local-addr"],
      description:
        "Warn about pointer/reference to a local or temporary variable possibly escaping to a musttail call",
    },
    {
      name: ["-Wmaybe-uninitialized", "-Wno-maybe-uninitialized"],
      description: "Warn about maybe uninitialized automatic variables",
    },
    {
      name: ["-Wmemset-elt-size", "-Wno-memset-elt-size"],
      description:
        "Warn about suspicious calls to memset where the third argument contains the number of elements not multiplied by the element size",
    },
    {
      name: ["-Wmemset-transposed-args", "-Wno-memset-transposed-args"],
      description:
        "Warn about suspicious calls to memset where the third argument is constant literal zero and the second is not",
    },
    {
      name: ["-Wmisleading-indentation", "-Wno-misleading-indentation"],
      description:
        "Warn when the indentation of the code does not reflect the block structure",
    },
    {
      name: ["-Wmismatched-dealloc", "-Wno-mismatched-dealloc"],
      description:
        "Warn for deallocation calls with arguments returned from mismatched allocation functions",
    },
    {
      name: ["-Wmissing-attributes", "-Wno-missing-attributes"],
      description:
        "Warn about declarations of entities that may be missing attributes that related entities have been declared with",
    },
    {
      name: ["-Wmissing-braces", "-Wno-missing-braces"],
      description: "Warn about possibly missing braces around initializers",
    },
    {
      name: ["-Wmissing-declarations", "-Wno-missing-declarations"],
      description: "Warn about global functions without previous declarations",
    },
    {
      name: ["-Wmissing-field-initializers", "-Wno-missing-field-initializers"],
      description: "Warn about missing fields in struct initializers",
    },
    {
      name: ["-Wmissing-format-attribute", "-Wno-missing-format-attribute"],
      description:
        "Warn about functions which might be candidates for format attributes",
    },
    {
      name: ["-Wmissing-include-dirs", "-Wno-missing-include-dirs"],
      description:
        "Warn about user-specified include directories that do not exist",
    },
    {
      name: ["-Wmissing-noreturn", "-Wno-missing-noreturn"],
      description:
        "Warn about functions which might be candidates for __attribute__((noreturn))",
    },
    {
      name: ["-Wmissing-parameter-name", "-Wno-missing-parameter-name"],
      description: "Warn about function definitions omitting parameter names",
    },
    {
      name: ["-Wmissing-parameter-type", "-Wno-missing-parameter-type"],
      description:
        "Warn about function parameters declared without a type specifier in K&R-style functions",
    },
    {
      name: ["-Wmissing-profile", "-Wno-missing-profile"],
      description: "Warn in case profiles in -fprofile-use do not exist",
    },
    {
      name: ["-Wmissing-prototypes", "-Wno-missing-prototypes"],
      description: "Warn about global functions without prototypes",
    },
    {
      name: [
        "-Wmissing-variable-declarations",
        "-Wno-missing-variable-declarations",
      ],
      description: "Warn about global variables without previous declarations",
    },
    {
      name: ["-Wmultichar", "-Wno-multichar"],
      description: "Warn about use of multi-character character constants",
    },
    {
      name: [
        "-Wmultiple-parameter-fwd-decl-lists",
        "-Wno-multiple-parameter-fwd-decl-lists",
      ],
      description:
        "Warn for multiple lists of forward declarations of function parameters",
    },
    {
      name: ["-Wmultistatement-macros", "-Wno-multistatement-macros"],
      description:
        "Warn about unsafe macros expanding to multiple statements used as a body of a clause such as if, else, while, switch, or for",
    },
    {
      name: ["-Wmusttail-local-addr", "-Wno-musttail-local-addr"],
      description:
        "Warn about passing a pointer/reference to a local or temporary variable to a musttail call argument",
    },
    {
      name: ["-Wnarrowing", "-Wno-narrowing"],
      description:
        "Warn about narrowing conversions within { } that are ill-formed in C++11",
    },
    {
      name: ["-Wnested-externs", "-Wno-nested-externs"],
      description: 'Warn about "extern" declarations not at file scope',
    },
    {
      name: "-Wno-abi",
      description: "Disable -Wabi",
    },
    {
      name: "-Wno-alloc-size-larger-than",
      description:
        "Disable Walloc-size-larger-than= warning. Equivalent to Walloc-size-larger-than=<SIZE_MAX> or larger",
    },
    {
      name: "-Wno-alloca-larger-than",
      description:
        "Disable Walloca-larger-than= warning. Equivalent to Walloca-larger-than=<SIZE_MAX> or larger",
    },
    {
      name: "-Wno-array-bounds",
      description: "Disable -Warray-bounds",
    },
    {
      name: "-Wno-array-parameter",
      description: "Disable -Warray-parameter",
    },
    {
      name: "-Wno-attribute-alias",
      description: "Disable -Wattribute-alias",
    },
    {
      name: "-Wno-attributes",
      description: "Disable -Wattributes",
    },
    {
      name: "-Wno-bidi-chars",
      description: "Disable -Wbidi-chars",
    },
    {
      name: "-Wno-cast-align",
      description: "Disable -Wcast-align",
    },
    {
      name: "-Wno-dangling-pointer",
      description: "Disable -Wdangling-pointer",
    },
    {
      name: "-Wno-error",
      description: "Disable -Werror",
    },
    {
      name: "-Wno-format-overflow",
      description: "Disable -Wformat-overflow",
    },
    {
      name: "-Wno-format-truncation",
      description: "Disable -Wformat-truncation",
    },
    {
      name: "-Wno-format",
      description: "Disable -Wformat",
    },
    {
      name: "-Wno-frame-larger-than",
      description:
        "Disable -Wframe-larger-than= warning. Equivalent to -Wframe-larger-than=<SIZE_MAX> or larger",
    },
    {
      name: "-Wno-implicit-fallthrough",
      description: "Disable -Wimplicit-fallthrough",
    },
    {
      name: "-Wno-larger-than",
      description:
        "Disable -Wlarger-than= warning. Equivalent to -Wlarger-than=<SIZE_MAX> or larger",
    },
    {
      name: "-Wno-normalized",
      description: "Disable -Wnormalized",
    },
    {
      name: "-Wno-shadow",
      description: "Disable -Wshadow",
    },
    {
      name: "-Wno-shift-overflow",
      description: "Disable -Wshift-overflow",
    },
    {
      name: "-Wno-stack-usage",
      description:
        "Disable Wstack-usage= warning. Equivalent to Wstack-usage=<SIZE_MAX> or larger",
    },
    {
      name: "-Wno-strict-aliasing",
      description: "Disable -Wstrict-aliasing",
    },
    {
      name: "-Wno-strict-overflow",
      description: "Disable -Wstrict-overflow",
    },
    {
      name: "-Wno-stringop-overflow",
      description: "Disable -Wstringop-overflow",
    },
    {
      name: "-Wno-trailing-whitespace",
      description: "Disable -Wtrailing-whitespace",
    },
    {
      name: "-Wno-unused-but-set-parameter",
      description: "Disable -Wunused-but-set-parameter",
    },
    {
      name: "-Wno-unused-but-set-variable",
      description: "Disable -Wunused-but-set-variable",
    },
    {
      name: "-Wno-unused-const-variable",
      description: "Disable -Wunused-const-variable",
    },
    {
      name: "-Wno-use-after-free",
      description: "Disable -Wuse-after-free",
    },
    {
      name: "-Wno-vla-larger-than",
      description:
        "Disable Wvla-larger-than= warning. Equivalent to Wvla-larger-than=<SIZE_MAX> or larger",
    },
    {
      name: ["-Wnonnull-compare", "-Wno-nonnull-compare"],
      description:
        "Warn if comparing pointer parameter with nonnull attribute with NULL",
    },
    {
      name: ["-Wnonnull", "-Wno-nonnull"],
      description:
        "Warn about NULL being passed to argument slots marked as requiring non-NULL",
    },
    {
      name: "-Wnormalized",
      description: "Warn about non-normalized Unicode strings",
      requiresSeparator: true,
      args: {
        name: "value",
        isOptional: true,
        suggestions: ["none", "nfkc", "id", "nfc"],
      },
    },
    {
      name: ["-WNSObject-attribute", "-Wno-NSObject-attribute"],
      description: "Warn if the NSObject attribute is applied to a non-typedef",
    },
    {
      name: ["-Wnull-dereference", "-Wno-null-dereference"],
      description:
        "Warn if dereferencing a NULL pointer may lead to erroneous or undefined behavior",
    },
    {
      name: ["-Wobjc-root-class", "-Wno-objc-root-class"],
      description:
        "Warn if a class interface has no superclass. Root classes may use an attribute to suppress this warning",
    },
    {
      name: ["-Wodr", "-Wno-odr"],
      description:
        "Warn about some C++ One Definition Rule violations during link time optimization",
    },
    {
      name: ["-Wold-style-declaration", "-Wno-old-style-declaration"],
      description: "Warn for obsolescent usage in a declaration",
    },
    {
      name: ["-Wold-style-definition", "-Wno-old-style-definition"],
      description: "Warn if an old-style parameter definition is used",
    },
    {
      name: ["-Wopenacc-parallelism", "-Wno-openacc-parallelism"],
      description:
        "Warn about potentially suboptimal choices related to OpenACC parallelism",
    },
    {
      name: ["-Wopenmp-simd", "-Wno-openmp-simd"],
      description:
        "Warn if a simd directive is overridden by the vectorizer cost model",
    },
    {
      name: ["-Wopenmp", "-Wno-openmp"],
      description: "Warn about suspicious OpenMP code",
    },
    {
      name: ["-Woverflow", "-Wno-overflow"],
      description: "Warn about overflow in arithmetic expressions",
    },
    {
      name: ["-Woverlength-strings", "-Wno-overlength-strings"],
      description:
        "Warn if a string is longer than the maximum portable length specified by the standard",
    },
    {
      name: ["-Woverride-init-side-effects", "-Wno-override-init-side-effects"],
      description: "Warn about overriding initializers with side effects",
    },
    {
      name: ["-Woverride-init", "-Wno-override-init"],
      description: "Warn about overriding initializers without side effects",
    },
    {
      name: ["-Wpacked-bitfield-compat", "-Wno-packed-bitfield-compat"],
      description:
        "Warn about packed bit-fields whose offset changed in GCC 4.4",
    },
    {
      name: ["-Wpacked-not-aligned", "-Wno-packed-not-aligned"],
      description:
        "Warn when fields in a struct with the packed attribute are misaligned",
    },
    {
      name: ["-Wpacked", "-Wno-packed"],
      description:
        "Warn when the packed attribute has no effect on struct layout",
    },
    {
      name: ["-Wpadded", "-Wno-padded"],
      description: "Warn when padding is required to align structure members",
    },
    {
      name: ["-Wparentheses", "-Wno-parentheses"],
      description: "Warn about possibly missing parentheses",
    },
    {
      name: ["-Wpedantic", "-Wno-pedantic"],
      description:
        "Issue warnings needed for strict compliance to the standard",
    },
    {
      name: ["-Wpointer-arith", "-Wno-pointer-arith"],
      description: "Warn about function pointer arithmetic",
    },
    {
      name: ["-Wpointer-compare", "-Wno-pointer-compare"],
      description:
        "Warn when a pointer is compared with a zero character constant",
    },
    {
      name: ["-Wpointer-sign", "-Wno-pointer-sign"],
      description: "Warn when a pointer differs in signedness in an assignment",
    },
    {
      name: ["-Wpointer-to-int-cast", "-Wno-pointer-to-int-cast"],
      description:
        "Warn when a pointer is cast to an integer of a different size",
    },
    {
      name: ["-Wpragma-once-outside-header", "-Wno-pragma-once-outside-header"],
      description: "Warn about #pragma once outside of a header",
    },
    {
      name: ["-Wpragmas", "-Wno-pragmas"],
      description: "Warn about misuses of pragmas",
    },
    {
      name: ["-Wprio-ctor-dtor", "-Wno-prio-ctor-dtor"],
      description:
        "Warn if constructor or destructors with priorities from 0 to 100 are used",
    },
    {
      name: ["-Wproperty-assign-default", "-Wno-property-assign-default"],
      description:
        "Warn if a property for an Objective-C object has no assign semantics specified",
    },
    {
      name: ["-Wprotocol", "-Wno-protocol"],
      description: "Warn if inherited methods are unimplemented",
    },
    {
      name: ["-Wpsabi", "-Wno-psabi"],
      description: "Warn about code affected by incompatible psABI changes",
    },
    {
      name: "-Wp",
      description: "Pass comma-separated options to the preprocessor",
      requiresSeparator: ",",
      isRepeatable: true,
      args: { name: "option", isOptional: true },
    },
    {
      name: "-wrapper",
      description: "Invoke all subcommands under a wrapper program",
      args: { name: "wrapper" },
    },
    {
      name: ["-Wredundant-decls", "-Wno-redundant-decls"],
      description: "Warn about multiple declarations of the same object",
    },
    {
      name: ["-Wrestrict", "-Wno-restrict"],
      description:
        "Warn when an argument passed to a restrict-qualified parameter aliases with another argument",
    },
    {
      name: ["-Wreturn-local-addr", "-Wno-return-local-addr"],
      description:
        "Warn about returning a pointer/reference to a local or temporary variable",
    },
    {
      name: ["-Wreturn-mismatch", "-Wno-return-mismatch"],
      description:
        "Warn whenever void-returning functions return a non-void expressions, or a return expression is missing in a function not returning void",
    },
    {
      name: ["-Wreturn-type", "-Wno-return-type"],
      description:
        'Warn whenever a function\'s return type defaults to "int" (C), or about inconsistent return types (C++)',
    },
    {
      name: "--write-dependencies",
      description: "Generate make dependencies and compile",
    },
    {
      name: "--write-user-dependencies",
      description: "Like -MD but ignore system header files",
    },
    {
      name: ["-Wscalar-storage-order", "-Wno-scalar-storage-order"],
      description:
        "Warn on suspicious constructs involving reverse scalar storage order",
    },
    {
      name: ["-Wselector", "-Wno-selector"],
      description: "Warn if a selector has multiple methods",
    },
    {
      name: ["-Wsequence-point", "-Wno-sequence-point"],
      description: "Warn about possible violations of sequence point rules",
    },
    {
      name: ["-Wshadow-compatible-local", "-Wno-shadow-compatible-local"],
      description:
        "Warn when one local variable shadows another local variable or parameter of compatible type",
    },
    {
      name: ["-Wshadow-ivar", "-Wno-shadow-ivar"],
      description: "Warn if a local declaration hides an instance variable",
    },
    {
      name: ["-Wshadow-local", "-Wno-shadow-local"],
      description:
        "Warn when one local variable shadows another local variable or parameter",
    },
    {
      name: "-Wshadow",
      description:
        "Warn when one variable shadows another. Same as -Wshadow=global",
      requiresSeparator: true,
      args: {
        name: "value",
        isOptional: true,
        suggestions: ["global", "local", "compatible-local"],
      },
    },
    {
      name: ["-Wshift-count-negative", "-Wno-shift-count-negative"],
      description: "Warn if shift count is negative",
    },
    {
      name: ["-Wshift-count-overflow", "-Wno-shift-count-overflow"],
      description: "Warn if shift count >= width of type",
    },
    {
      name: ["-Wshift-negative-value", "-Wno-shift-negative-value"],
      description: "Warn if left shifting a negative value",
    },
    {
      name: "-Wshift-overflow",
      description: "Warn if left shift of a signed value overflows",
      requiresSeparator: true,
      args: { name: "value", isOptional: true, suggestions: ["0", "1", "2"] },
    },
    {
      name: ["-Wsign-compare", "-Wno-sign-compare"],
      description: "Warn about signed-unsigned comparisons",
    },
    {
      name: ["-Wsign-conversion", "-Wno-sign-conversion"],
      description:
        "Warn for implicit type conversions between signed and unsigned integers",
    },
    {
      name: ["-Wsizeof-array-argument", "-Wno-sizeof-array-argument"],
      description:
        "Warn when sizeof is applied on a parameter declared as an array",
    },
    {
      name: ["-Wsizeof-array-div", "-Wno-sizeof-array-div"],
      description:
        "Warn about divisions of two sizeof operators when the first one is applied to an array and the divisor does not equal the size of the array element",
    },
    {
      name: ["-Wsizeof-pointer-div", "-Wno-sizeof-pointer-div"],
      description:
        "Warn about suspicious divisions of two sizeof expressions that don't work correctly with pointers",
    },
    {
      name: ["-Wsizeof-pointer-memaccess", "-Wno-sizeof-pointer-memaccess"],
      description:
        "Warn about suspicious length parameters to certain string functions if the argument uses sizeof",
    },
    {
      name: ["-Wstack-protector", "-Wno-stack-protector"],
      description:
        "Warn when not issuing stack smashing protection for some reason",
    },
    {
      name: "-Wstack-usage",
      description: "Warn if stack usage might exceed <byte-size>",
      requiresSeparator: true,
      args: { name: "byte-size" },
    },
    {
      name: "-Wstrict-aliasing",
      description: "Warn about code which might break strict aliasing rules",
      requiresSeparator: true,
      args: {
        name: "value",
        isOptional: true,
        suggestions: ["0", "1", "2", "3"],
      },
    },
    {
      name: ["-Wstrict-flex-arrays", "-Wno-strict-flex-arrays"],
      description:
        "Warn about improper usages of flexible array members according to the level of -fstrict-flex-arrays",
    },
    {
      name: "-Wstrict-overflow",
      description:
        "Warn about optimizations that assume that signed overflow is undefined",
      requiresSeparator: true,
      args: {
        name: "value",
        isOptional: true,
        suggestions: ["0", "1", "2", "3", "4", "5"],
      },
    },
    {
      name: ["-Wstrict-prototypes", "-Wno-strict-prototypes"],
      description: "Warn about unprototyped function declarations",
    },
    {
      name: ["-Wstrict-selector-match", "-Wno-strict-selector-match"],
      description:
        "Warn if type signatures of candidate methods do not match exactly",
    },
    {
      name: ["-Wstring-compare", "-Wno-string-compare"],
      description:
        "Warn about calls to strcmp and strncmp used in equality expressions that are necessarily true or false due to the length of one and size of the other argument",
    },
    {
      name: "-Wstringop-overflow",
      description:
        "Warn about buffer overflow in string manipulation functions like memcpy and strcpy",
      requiresSeparator: true,
      args: {
        name: "value",
        isOptional: true,
        suggestions: ["0", "1", "2", "3", "4"],
      },
    },
    {
      name: ["-Wstringop-overread", "-Wno-stringop-overread"],
      description:
        "Warn about reading past the end of a source array in string manipulation functions like memchr and memcpy",
    },
    {
      name: ["-Wstringop-truncation", "-Wno-stringop-truncation"],
      description:
        "Warn about truncation in string manipulation functions like strncat and strncpy",
    },
    {
      name: "-Wsuggest-attribute",
      description:
        "Warn about functions that might be candidates for the given attribute",
      requiresSeparator: true,
      args: {
        name: "value",
        suggestions: [
          "cold",
          "const",
          "pure",
          "noreturn",
          "malloc",
          "returns_nonnull",
          "format",
        ],
      },
    },
    {
      name: ["-Wsuggest-final-methods", "-Wno-suggest-final-methods"],
      description:
        "Warn about C++ virtual methods where adding final keyword would improve code quality",
    },
    {
      name: ["-Wsuggest-final-types", "-Wno-suggest-final-types"],
      description:
        "Warn about C++ polymorphic types where adding final keyword would improve code quality",
    },
    {
      name: ["-Wswitch-bool", "-Wno-switch-bool"],
      description: "Warn about switches with boolean controlling expression",
    },
    {
      name: ["-Wswitch-default", "-Wno-switch-default"],
      description:
        'Warn about enumerated switches missing a "default:" statement',
    },
    {
      name: ["-Wswitch-enum", "-Wno-switch-enum"],
      description: "Warn about all enumerated switches missing a specific case",
    },
    {
      name: ["-Wswitch-outside-range", "-Wno-switch-outside-range"],
      description:
        "Warn about switch values that are outside of the switch's type range",
    },
    {
      name: ["-Wswitch-unreachable", "-Wno-switch-unreachable"],
      description:
        "Warn about statements between switch's controlling expression and the first case",
    },
    {
      name: ["-Wswitch", "-Wno-switch"],
      description:
        "Warn about enumerated switches, with no default, missing a case",
    },
    {
      name: ["-Wsync-nand", "-Wno-sync-nand"],
      description:
        "Warn when __sync_fetch_and_nand and __sync_nand_and_fetch built-in functions are used",
    },
    {
      name: ["-Wsystem-headers", "-Wno-system-headers"],
      description: "Do not suppress warnings from system headers",
    },
    {
      name: ["-Wtautological-compare", "-Wno-tautological-compare"],
      description: "Warn if a comparison always evaluates to true or false",
    },
    {
      name: ["-Wtraditional-conversion", "-Wno-traditional-conversion"],
      description:
        "Warn of prototypes causing type conversions different from what would happen in the absence of prototype",
    },
    {
      name: ["-Wtraditional", "-Wno-traditional"],
      description: "Warn about features not present in traditional C",
    },
    {
      name: "-Wtrailing-whitespace",
      description:
        "Warn about trailing whitespace on lines except in raw string literals",
      requiresSeparator: true,
      args: {
        name: "value",
        isOptional: true,
        suggestions: ["none", "blanks", "any"],
      },
    },
    {
      name: ["-Wtrampolines", "-Wno-trampolines"],
      description: "Warn whenever a trampoline is generated",
    },
    {
      name: ["-Wtrigraphs", "-Wno-trigraphs"],
      description:
        "Warn if trigraphs are encountered that might affect the meaning of the program",
    },
    {
      name: ["-Wtrivial-auto-var-init", "-Wno-trivial-auto-var-init"],
      description:
        "Warn about cases where -ftrivial-auto-var-init cannot initialize an auto variable",
    },
    {
      name: ["-Wtsan", "-Wno-tsan"],
      description: "Warn about unsupported features in ThreadSanitizer",
    },
    {
      name: ["-Wtype-limits", "-Wno-type-limits"],
      description:
        "Warn if a comparison is always true or always false due to the limited range of the data type",
    },
    {
      name: ["-Wundeclared-selector", "-Wno-undeclared-selector"],
      description: "Warn about @selectors without previously declared methods",
    },
    {
      name: ["-Wundef", "-Wno-undef"],
      description: "Warn if an undefined macro is used in an #if directive",
    },
    {
      name: ["-Wunicode", "-Wno-unicode"],
      description:
        "Warn about invalid forms of delimited or named escape sequences",
    },
    {
      name: ["-Wuninitialized", "-Wno-uninitialized"],
      description: "Warn about uninitialized automatic variables",
    },
    {
      name: ["-Wunknown-pragmas", "-Wno-unknown-pragmas"],
      description: "Warn about unrecognized pragmas",
    },
    {
      name: ["-Wunsuffixed-float-constants", "-Wno-unsuffixed-float-constants"],
      description: "Warn about unsuffixed float constants",
    },
    {
      name: [
        "-Wunterminated-string-initialization",
        "-Wno-unterminated-string-initialization",
      ],
      description:
        "Warn about character arrays initialized as unterminated character sequences with a string literal",
    },
    {
      name: "-Wunused-but-set-parameter",
      description:
        "Warn when a function parameter is only set, otherwise unused",
      requiresSeparator: true,
      args: {
        name: "value",
        isOptional: true,
        suggestions: ["0", "1", "2", "3"],
      },
    },
    {
      name: "-Wunused-but-set-variable",
      description: "Warn when a variable is only set, otherwise unused",
      requiresSeparator: true,
      args: {
        name: "value",
        isOptional: true,
        suggestions: ["0", "1", "2", "3"],
      },
    },
    {
      name: "-Wunused-const-variable",
      description: "Warn when a const variable is unused",
      requiresSeparator: true,
      args: { name: "value", isOptional: true, suggestions: ["0", "1", "2"] },
    },
    {
      name: ["-Wunused-function", "-Wno-unused-function"],
      description: "Warn when a function is unused",
    },
    {
      name: ["-Wunused-label", "-Wno-unused-label"],
      description: "Warn when a label is unused",
    },
    {
      name: ["-Wunused-local-typedefs", "-Wno-unused-local-typedefs"],
      description:
        "Warn when typedefs locally defined in a function are not used",
    },
    {
      name: ["-Wunused-macros", "-Wno-unused-macros"],
      description:
        "Warn about macros defined in the main file that are not used",
    },
    {
      name: ["-Wunused-parameter", "-Wno-unused-parameter"],
      description: "Warn when a function parameter is unused",
    },
    {
      name: ["-Wunused-result", "-Wno-unused-result"],
      description:
        "Warn if a caller of a function, marked with attribute warn_unused_result, does not use its return value",
    },
    {
      name: ["-Wunused-value", "-Wno-unused-value"],
      description: "Warn when an expression value is unused",
    },
    {
      name: ["-Wunused-variable", "-Wno-unused-variable"],
      description: "Warn when a variable is unused",
    },
    {
      name: ["-Wunused", "-Wno-unused"],
      description: "Enable all -Wunused- warnings",
    },
    {
      name: "-Wuse-after-free",
      description: "Warn for uses of pointers to deallocated storage",
      requiresSeparator: true,
      args: {
        name: "value",
        isOptional: true,
        suggestions: ["0", "1", "2", "3"],
      },
    },
    {
      name: ["-Wuseless-cast", "-Wno-useless-cast"],
      description: "Warn about useless casts",
    },
    {
      name: ["-Wvarargs", "-Wno-varargs"],
      description:
        "Warn about questionable usage of the macros used to retrieve variable arguments",
    },
    {
      name: ["-Wvariadic-macros", "-Wno-variadic-macros"],
      description: "Warn about using variadic macros",
    },
    {
      name: [
        "-Wvector-operation-performance",
        "-Wno-vector-operation-performance",
      ],
      description: "Warn when a vector operation is compiled outside the SIMD",
    },
    {
      name: "-Wvla-larger-than",
      description:
        "Warn on unbounded uses of variable-length arrays, and on bounded uses of variable-length arrays whose bound can be larger than <number> bytes",
      requiresSeparator: true,
      args: { name: "number" },
    },
    {
      name: ["-Wvla-parameter", "-Wno-vla-parameter"],
      description: "Warn about mismatched declarations of VLA parameters",
    },
    {
      name: ["-Wvla", "-Wno-vla"],
      description: "Warn if a variable length array is used",
    },
    {
      name: ["-Wvolatile-register-var", "-Wno-volatile-register-var"],
      description: "Warn when a register variable is declared volatile",
    },
    {
      name: ["-Wwrite-strings", "-Wno-write-strings"],
      description:
        "Warn about string literals converted to char * (C: give string constants type const char[])",
    },
    {
      name: ["-Wxor-used-as-pow", "-Wno-xor-used-as-pow"],
      description:
        "Warn about xor operators where it appears the user meant exponentiation",
    },
    {
      name: [
        "-Wzero-as-null-pointer-constant",
        "-Wno-zero-as-null-pointer-constant",
      ],
      description: "Warn when a literal '0' is used as null pointer",
    },
    {
      name: ["-Wzero-length-bounds", "-Wno-zero-length-bounds"],
      description: "Warn about accesses to interior zero-length array members",
    },
    {
      name: "-W",
      description: "This switch is deprecated; use -Wextra instead",
      deprecated: true,
    },
    {
      name: "-w",
      description: "Suppress warnings",
    },
    {
      name: "-Xassembler",
      description: "Pass option as an option to the assembler",
      isRepeatable: true,
      args: { name: "option" },
    },
    {
      name: "-Xlinker",
      description: "Pass option as an option to the linker",
      isRepeatable: true,
      args: { name: "option" },
    },
    {
      name: "-Xpreprocessor",
      description: "Pass option as an option to the preprocessor",
      isRepeatable: true,
      args: { name: "option" },
    },
    {
      name: "-x",
      description: "Specify the language of the following input files",
      args: {
        name: "language",
        suggestions: [
          "c",
          "c-header",
          "cpp-output",
          "c++",
          "c++-header",
          "c++-system-header",
          "c++-user-header",
          "c++-cpp-output",
          "objective-c",
          "objective-c-header",
          "objective-c-cpp-output",
          "objective-c++",
          "objective-c++-header",
          "objective-c++-cpp-output",
          "assembler",
          "assembler-with-cpp",
          "ada",
          "d",
          "f77",
          "f77-cpp-input",
          "f95",
          "f95-cpp-input",
          "go",
          "none",
        ],
      },
    },
    {
      name: "-Z",
      description: "Passed to the linker",
    },
    {
      name: "-z",
      description: "Passed to the linker",
      isRepeatable: true,
      args: { name: "keyword" },
    },
  ],
};

const completionSpec: Fig.Spec = {
  ...gccBase,
  options: [...gccBase.options, stdOption],
};
export default completionSpec;
