// g++ v16.2.0 (latest stable tag releases/gcc-16.2.0 of gcc-mirror/gcc via git ls-remote, 2026-11-20). Source: gcc/c-family/c.opt, gcc/common.opt
// and the "Options Controlling C++ Dialect" / -std sections of gcc/doc/invoke.texi at that tag, read statically; the g++ binary was not run.
// Options shared with gcc come from the gccBase spec (src/gcc.ts); this file adds the C++-only options and a C++-only -std. Options that GCC
// still accepts but ignores or has removed (WarnRemoved/Ignore entries in c.opt) and the deprecated -std aliases (c++0x, c++1y, c++1z, c++2a,
// c++2b) are left out, as are the -fdump-lang-* dumps. Defaults to -std=gnu++20 for C++ code.
import { gccBase } from "./gcc";

const stdSuggestions: Fig.Suggestion[] = [
  {
    name: ["c++98", "c++03"],
    description:
      "ISO C++ 1998 with the 2003 corrigendum and some defect reports (same as -ansi)",
  },
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
    description: "GNU dialect of ISO C++ 2020 (default)",
  },
  {
    name: "c++23",
    description: "ISO C++ 2023, published in 2024 (experimental)",
  },
  {
    name: "gnu++23",
    description: "GNU dialect of ISO C++ 2023 (experimental)",
  },
  {
    name: ["c++26", "c++2c"],
    description:
      "Next ISO C++ revision, planned for 2026 (highly experimental)",
  },
  {
    name: ["gnu++26", "gnu++2c"],
    description:
      "GNU dialect of the next ISO C++ revision (highly experimental)",
  },
];

const cppFlags: [name: string, description: string][] = [
  [
    "-Wabi-tag",
    "Warn if a subobject has an abi_tag attribute that the complete object type does not have",
  ],
  [
    "-Wc++11-compat",
    "Warn about C++ constructs whose meaning differs between ISO C++ 1998 and ISO C++ 2011",
  ],
  [
    "-Wc++14-compat",
    "Warn about C++ constructs whose meaning differs between ISO C++ 2011 and ISO C++ 2014",
  ],
  [
    "-Wc++17-compat",
    "Warn about C++ constructs whose meaning differs between ISO C++ 2014 and ISO C++ 2017",
  ],
  [
    "-Wc++20-compat",
    "Warn about C++ constructs whose meaning differs between ISO C++ 2017 and ISO C++ 2020",
  ],
  [
    "-Wc++26-compat",
    "Warn about C++ constructs whose meaning differs between ISO C++ 2023 and ISO C++ 2026",
  ],
  [
    "-Wclass-memaccess",
    "Warn for unsafe raw memory writes to objects of class types",
  ],
  [
    "-Wcomma-subscript",
    "Warn about uses of a comma operator within a subscripting expression",
  ],
  ["-Wconditionally-supported", "Warn for conditionally-supported constructs"],
  [
    "-Wctad-maybe-unsupported",
    "Warn when performing class template argument deduction on a type with no deduction guides",
  ],
  [
    "-Wctor-dtor-privacy",
    "Warn when all constructors and destructors are private",
  ],
  [
    "-Wdangling-reference",
    "Warn when a reference is bound to a temporary whose lifetime has ended",
  ],
  [
    "-Wdelete-non-virtual-dtor",
    "Warn about deleting polymorphic objects with non-virtual destructors",
  ],
  [
    "-Wdeprecated-copy",
    "Warn that the implicit copy constructor or assignment operator is deprecated if the class has a user-provided copy constructor or assignment operator",
  ],
  [
    "-Wdeprecated-copy-dtor",
    "Like -Wdeprecated-copy, and also warn if the class has a user-provided destructor",
  ],
  [
    "-Wdeprecated-literal-operator",
    "Warn about deprecated space between the empty string literal and the suffix in a user-defined literal operator",
  ],
  [
    "-Wdeprecated-variadic-comma-omission",
    "Warn about deprecated omission of comma before ... in varargs function declaration",
  ],
  ["-Weffc++", "Warn about violations of Effective C++ style rules"],
  ["-Wextra-semi", "Warn about semicolon after in-class function definition"],
  [
    "-Winvalid-constexpr",
    "Warn when a function never produces a constant expression",
  ],
  [
    "-Winvalid-imported-macros",
    "Warn about macros that have conflicting header units definitions",
  ],
  [
    "-Wmismatched-new-delete",
    "Warn for mismatches between calls to operator new or delete and the corresponding call to the allocation or deallocation function",
  ],
  [
    "-Wmismatched-tags",
    "Warn when a class is redeclared or referenced using a mismatched class-key",
  ],
  ["-Wmultiple-inheritance", "Warn on direct multiple inheritance"],
  ["-Wnamespaces", "Warn on namespace definition"],
  [
    "-Wno-abbreviated-auto-in-template-arg",
    "Do not diagnose a placeholder type in a template argument in a function parameter type",
  ],
  [
    "-Wno-c++11-extensions",
    "Do not warn about C++11 constructs in code compiled with an older standard",
  ],
  [
    "-Wno-c++14-extensions",
    "Do not warn about C++14 constructs in code compiled with an older standard",
  ],
  [
    "-Wno-c++17-extensions",
    "Do not warn about C++17 constructs in code compiled with an older standard",
  ],
  [
    "-Wno-c++20-extensions",
    "Do not warn about C++20 constructs in code compiled with an older standard",
  ],
  [
    "-Wno-c++23-extensions",
    "Do not warn about C++23 constructs in code compiled with an older standard",
  ],
  [
    "-Wno-c++26-extensions",
    "Do not warn about C++26 constructs in code compiled with an older standard",
  ],
  [
    "-Wno-cast-user-defined",
    "Do not warn about a cast to reference type that does not use a related user-defined conversion function",
  ],
  [
    "-Wno-changes-meaning",
    "Do not complain about a name being declared as a class member after a previous use of the same name",
  ],
  [
    "-Wno-class-conversion",
    "Do not warn when a conversion function will never be called due to the type it converts to",
  ],
  [
    "-Wno-conversion-null",
    "Do not warn for converting NULL from/to a non-pointer type",
  ],
  [
    "-Wno-defaulted-function-deleted",
    "Do not warn when an explicitly defaulted function is deleted",
  ],
  [
    "-Wno-delete-incomplete",
    "Do not warn when deleting a pointer to incomplete type",
  ],
  [
    "-Wno-deprecated-enum-enum-conversion",
    "Do not warn about deprecated arithmetic conversions on operands of enumeration types",
  ],
  [
    "-Wno-deprecated-enum-float-conversion",
    "Do not warn about deprecated arithmetic conversions on operands where one is of enumeration type and the other is of a floating-point type",
  ],
  [
    "-Wno-elaborated-enum-base",
    "Do not warn if an additional enum-base is used in an elaborated-type-specifier",
  ],
  [
    "-Wno-exceptions",
    "Do not warn when an exception handler is shadowed by another handler",
  ],
  [
    "-Wno-expose-global-module-tu-local",
    "Do not warn when a module exposes a TU-local entity from the global module fragment",
  ],
  [
    "-Wno-external-tu-local",
    "Do not warn about naming a TU-local entity declared in another translation unit",
  ],
  [
    "-Wno-global-module",
    "Do not warn about the global module fragment not containing only preprocessing directives",
  ],
  [
    "-Wno-inaccessible-base",
    "Do not warn when a base is inaccessible in derived due to ambiguity",
  ],
  [
    "-Wno-inherited-variadic-ctor",
    "Do not warn about C++11 inheriting constructors when the base has a variadic constructor",
  ],
  [
    "-Wno-init-list-lifetime",
    "Do not warn about uses of std::initializer_list that can result in dangling pointers",
  ],
  [
    "-Wno-interference-size",
    "Do not warn about nonsensical values of --param destructive-interference-size or constructive-interference-size",
  ],
  [
    "-Wno-invalid-offsetof",
    "Do not warn about invalid uses of the offsetof macro",
  ],
  [
    "-Wno-literal-suffix",
    "Do not warn when a string or character literal is followed by a ud-suffix which does not begin with an underscore",
  ],
  [
    "-Wno-missing-requires",
    "Do not warn about likely missing requires keyword",
  ],
  [
    "-Wno-missing-template-keyword",
    "Do not warn when the template keyword is missing after a member access token in a dependent member access expression if that member is a template",
  ],
  [
    "-Wno-narrowing",
    "Do not warn about narrowing conversions within { } that are ill-formed in C++11",
  ],
  [
    "-Wno-non-c-typedef-for-linkage",
    "Do not warn for non-C compatible unnamed classes with a typedef name for linkage purposes",
  ],
  [
    "-Wno-non-template-friend",
    "Do not warn when non-templatized friend functions are declared within a template",
  ],
  [
    "-Wno-pessimizing-move",
    "Do not warn about calling std::move on a local object in a return statement preventing copy elision",
  ],
  [
    "-Wno-pmf-conversions",
    "Do not warn when converting the type of pointers to member functions",
  ],
  ["-Wno-redundant-move", "Do not warn about redundant calls to std::move"],
  [
    "-Wno-subobject-linkage",
    "Do not warn if a class type has a base or a field whose type uses the anonymous namespace or depends on a type with no linkage",
  ],
  ["-Wno-template-body", "Do not diagnose errors when parsing a template"],
  [
    "-Wno-template-id-cdtor",
    "Do not warn about simple-template-id in a constructor or destructor",
  ],
  [
    "-Wno-terminate",
    "Do not warn if a throw expression will always result in a call to terminate()",
  ],
  [
    "-Wno-vexing-parse",
    "Do not warn about the most vexing parse syntactic ambiguity",
  ],
  [
    "-Wno-virtual-move-assign",
    "Do not warn if a virtual base has a non-trivial move assignment operator",
  ],
  [
    "-Wnoexcept",
    "Warn when a noexcept expression evaluates to false even though the expression cannot actually throw",
  ],
  [
    "-Wnoexcept-type",
    "Warn if C++17 noexcept function type will change the mangled name of a symbol",
  ],
  ["-Wnon-virtual-dtor", "Warn about non-virtual destructors"],
  [
    "-Wnrvo",
    "Warn if the named return value optimization is not performed although it is allowed",
  ],
  ["-Wold-style-cast", "Warn if a C-style cast is used in a program"],
  [
    "-Wrange-loop-construct",
    "Warn when a range-based for-loop is creating unnecessary copies",
  ],
  [
    "-Wredundant-tags",
    "Warn when a class or enumerated type is referenced using a redundant class-key",
  ],
  ["-Wregister", "Warn about uses of register storage specifier"],
  ["-Wreorder", "Warn when the compiler reorders code"],
  ["-Wself-move", "Warn when a value is moved to itself with std::move"],
  ["-Wsign-promo", "Warn when overload promotes from unsigned to signed"],
  ["-Wsized-deallocation", "Warn about missing sized deallocation functions"],
  ["-Wstrict-null-sentinel", "Warn about uncasted NULL used as sentinel"],
  [
    "-Wsuggest-final-methods",
    "Warn about virtual methods where code quality would be improved if they were declared final",
  ],
  [
    "-Wsuggest-final-types",
    "Warn about polymorphic types where code quality would be improved if they were declared final",
  ],
  [
    "-Wsuggest-override",
    "Warn about overriding virtual functions that are not marked with the override keyword",
  ],
  [
    "-Wtemplate-names-tu-local",
    "Warn about templates naming TU-local entities in a module",
  ],
  ["-Wtemplates", "Warn on primary template declaration"],
  ["-Wvirtual-inheritance", "Warn on direct virtual inheritance"],
  ["-Wvolatile", "Warn about deprecated uses of volatile qualifier"],
  [
    "--compile-std-module",
    "Build the compiled module interfaces for <bits/stdc++.h>, std and std.compat before compiling the source files",
  ],
  [
    "-fchar8_t",
    "Enable the char8_t fundamental type and use it as the type for UTF-8 string and character literals (default for C++20 and later)",
  ],
  [
    "-fcheck-new",
    "Check that the pointer returned by operator new is non-null before modifying the storage",
  ],
  [
    "-fconcepts",
    "Enable support for C++ concepts (default for C++20 and later)",
  ],
  [
    "-fconstexpr-fp-except",
    "Allow IEC 60559 floating-point exceptions in constant expressions",
  ],
  [
    "-fcontract-checks-outlined",
    "Build contract checks as outlined functions instead of expanding them inline",
  ],
  [
    "-fcontract-disable-optimized-checks",
    "Disable optimization of outlined contract check functions",
  ],
  ["-fcontracts", "Enable support for C++26 contracts"],
  [
    "-fcontracts-conservative-ipa",
    "Prevent inter-procedural analysis from acting on visible inline function bodies when contract conditions may differ between translation units",
  ],
  [
    "-fcoroutines",
    "Enable support for C++ coroutines (default for C++20 and later)",
  ],
  [
    "-fdeclone-ctor-dtor",
    "Factor complex constructors and destructors to favor space over speed",
  ],
  [
    "-fdiagnostics-all-candidates",
    "Note all candidates during overload resolution failure",
  ],
  [
    "-fext-numeric-literals",
    "Accept imaginary, fixed-point or machine-defined number suffixes as GNU extensions",
  ],
  [
    "-fextern-tls-init",
    "Support dynamic initialization of thread-local variables in a different translation unit",
  ],
  [
    "-ffold-simple-inlines",
    "Fold calls to std::move, std::forward, std::addressof, std::to_underlying and std::as_const",
  ],
  [
    "-fimplicit-constexpr",
    "Make inline functions implicitly constexpr when they satisfy the requirements",
  ],
  [
    "-flang-info-include-translate-not",
    "Note #include directives that are not translated to import declarations",
  ],
  [
    "-fmodule-implicit-inline",
    "Make member functions defined within their class implicitly inline in module code",
  ],
  [
    "-fmodule-only",
    "Only emit the compiled module interface, not an object file",
  ],
  [
    "-fnew-inheriting-ctors",
    "Use the C++17 inheriting constructor semantics (ABI version 11 and later)",
  ],
  [
    "-fnew-ttp-matching",
    "Implement the resolution of core issue 150 for matching template template arguments",
  ],
  ["-fno-access-control", "Turn off all access checking"],
  [
    "-fno-assume-sane-operators-new-delete",
    "Do not assume that the replaceable global operators new and delete leave global state untouched",
  ],
  [
    "-fno-char8_t",
    "Disable the char8_t fundamental type, which C++20 and later enable by default",
  ],
  [
    "-fno-elide-constructors",
    "Do not omit temporaries used only to initialize another object of the same type",
  ],
  [
    "-fno-enforce-eh-specs",
    "Do not generate code to check for violations of exception specifications at run time",
  ],
  [
    "-fno-ext-numeric-literals",
    "Treat imaginary, fixed-point and machine-defined number suffixes as C++11 user-defined literal suffixes",
  ],
  [
    "-fno-extern-tls-init",
    "Assume uses of thread-local variables in other translation units never need dynamic initialization",
  ],
  [
    "-fno-fold-simple-inlines",
    "Do not fold calls to simple standard library inline functions",
  ],
  ["-fno-gnu-keywords", "Do not recognize typeof as a keyword"],
  [
    "-fno-immediate-escalation",
    "Do not promote functions to consteval where P2564 requires it",
  ],
  [
    "-fno-implement-inlines",
    "Do not emit out-of-line copies of inline functions controlled by #pragma implementation",
  ],
  [
    "-fno-implicit-inline-templates",
    "Do not emit code for implicit instantiations of inline templates",
  ],
  [
    "-fno-implicit-templates",
    "Never emit code for non-inline templates that are instantiated implicitly",
  ],
  [
    "-fno-module-lazy",
    "Disable lazy module importing and module mapper creation",
  ],
  ["-fno-modules", "Disable C++20 modules support (default)"],
  [
    "-fno-nonansi-builtins",
    "Disable built-in declarations of functions that are not mandated by ANSI/ISO C",
  ],
  [
    "-fno-pretty-templates",
    "Do not pretty-print template specializations as the template signature followed by the arguments",
  ],
  [
    "-fno-threadsafe-statics",
    "Do not generate thread-safe code for initializing local statics",
  ],
  [
    "-fno-use-cxa-get-exception-ptr",
    "Do not use the __cxa_get_exception_ptr runtime routine",
  ],
  [
    "-fno-weak",
    "Do not use weak symbol support even if the linker provides it (for testing only)",
  ],
  [
    "-fnothrow-opt",
    "Treat a throw() exception specification as noexcept to reduce code size",
  ],
  [
    "-frange-for-ext-temps",
    "Extend the lifetime of range-based for loop temporaries to the end of the loop",
  ],
  ["-freflection", "Enable experimental C++26 reflection"],
  [
    "-fstats",
    "Display front-end statistics at the end of compilation (mainly useful to G++ developers)",
  ],
  [
    "-fuse-cxa-atexit",
    "Register destructors of static objects with __cxa_atexit instead of atexit",
  ],
];

const numberOption = (
  name: string,
  description: string,
  argName = "n"
): Fig.Option => ({
  name,
  description,
  requiresSeparator: true,
  args: { name: argName },
});

// Warnings with an optional level, e.g. -Wcatch-value or -Wcatch-value=2
const levelWarning = (
  name: string,
  description: string,
  levels: number
): Fig.Option => ({
  name,
  description,
  requiresSeparator: true,
  args: {
    name: "n",
    isOptional: true,
    suggestions: Array.from({ length: levels + 1 }, (_, i) => String(i)),
  },
});

const cppOptions: Fig.Option[] = [
  {
    name: "-std",
    description: "Language standard to compile for",
    args: {
      name: "value",
      suggestions: stdSuggestions,
    },
    requiresSeparator: true,
  },
  {
    name: "-stdlib",
    description: "C++ standard library to use for the headers and runtime",
    requiresSeparator: true,
    args: {
      name: "library",
      suggestions: [
        { name: "libstdc++", description: "GNU C++ runtime (default)" },
        { name: "libc++", description: "LLVM C++ runtime" },
      ],
    },
  },
  {
    name: "-frtti",
    description: "Generate run time type descriptor information (default)",
  },
  numberOption(
    "-fabi-version",
    "Use version n of the C++ ABI (default 0, the version closest to the ABI specification)"
  ),
  numberOption(
    "-fabi-compat-version",
    "ABI version used for the compatibility aliases GCC creates for symbols whose mangling changed"
  ),
  {
    name: "-faligned-new",
    description: "Enable C++17 allocation of over-aligned types",
    requiresSeparator: true,
    args: {
      name: "alignment",
      description:
        "Alignment in bytes that the plain operator new already provides",
      isOptional: true,
    },
  },
  numberOption(
    "-fconcepts-diagnostics-depth",
    "Maximum error replay depth when diagnosing a constraint satisfaction failure (default 1)"
  ),
  numberOption(
    "-fconstexpr-cache-depth",
    "Maximum nested constexpr evaluation depth that is cached (default 8)"
  ),
  numberOption(
    "-fconstexpr-depth",
    "Maximum nested constexpr evaluation depth (default 512)"
  ),
  numberOption(
    "-fconstexpr-loop-limit",
    "Maximum number of iterations of a loop in a constexpr function (default 262144)"
  ),
  numberOption(
    "-fconstexpr-ops-limit",
    "Maximum number of operations in a single constexpr evaluation (default 33554432)"
  ),
  {
    name: "-fcontract-evaluation-semantic",
    description: "Semantic with which contracts are evaluated",
    requiresSeparator: true,
    args: {
      name: "semantic",
      suggestions: ["ignore", "observe", "enforce", "quick_enforce"],
    },
  },
  {
    name: "-fcontracts-client-check",
    description: "Select which contracts are checked at call sites",
    requiresSeparator: true,
    args: { name: "mode", suggestions: ["none", "pre", "all"] },
  },
  {
    name: "-fcontracts-definition-check",
    description: "Enable or disable contract checks on the definition side",
    requiresSeparator: true,
    args: { name: "mode", suggestions: ["on", "off"] },
  },
  {
    name: "-flang-info-include-translate",
    description:
      "Note #include directives translated to import declarations, or those of a specific header",
    requiresSeparator: true,
    args: { name: "header", isOptional: true },
  },
  {
    name: "-flang-info-module-cmi",
    description:
      "Note compiled module interface pathnames, or the one of a specific module or header unit",
    requiresSeparator: true,
    args: { name: "module", isOptional: true },
  },
  {
    name: "-fmodule-header",
    description: "Compile a header file to create an importable header unit",
    requiresSeparator: true,
    args: {
      name: "kind",
      isOptional: true,
      suggestions: [
        { name: "user", description: "Header found in the user include path" },
        {
          name: "system",
          description: "Header found in the system include path",
        },
      ],
    },
  },
  {
    name: "-fmodule-mapper",
    description: "Oracle to query for module name to file name mappings",
    requiresSeparator: true,
    args: { name: "mapper" },
  },
  {
    name: "-fstrong-eval-order",
    description:
      "Follow the C++17 evaluation order requirements (default for C++17 and later)",
    requiresSeparator: true,
    args: {
      name: "kind",
      isOptional: true,
      suggestions: [
        { name: "all", description: "All C++17 evaluation order rules" },
        {
          name: "some",
          description:
            "Only member access, array subscripting and shift expressions",
        },
        { name: "none", description: "Do not apply the C++17 rules" },
      ],
    },
  },
  numberOption(
    "-ftemplate-backtrace-limit",
    "Maximum number of template instantiation notes for a single warning or error (default 10)"
  ),
  numberOption(
    "-ftemplate-depth",
    "Maximum template instantiation depth (default 900)"
  ),
  {
    name: "-Waligned-new",
    description:
      "Warn about new-expressions of over-aligned types that use an allocation function without an alignment parameter",
    requiresSeparator: true,
    args: {
      name: "kind",
      isOptional: true,
      suggestions: [
        "none",
        { name: "global", description: "Only global allocation functions" },
        {
          name: "all",
          description: "Also class member allocation functions",
        },
      ],
    },
  },
  levelWarning(
    "-Wcatch-value",
    "Warn about catch handlers that do not catch via reference",
    3
  ),
  levelWarning(
    "-Woverloaded-virtual",
    "Warn when a function declaration hides virtual functions from a base class",
    2
  ),
  levelWarning(
    "-Wplacement-new",
    "Warn about placement new expressions with undefined behavior",
    2
  ),
  {
    name: "-Wno-placement-new",
    description:
      "Do not warn about placement new expressions with undefined behavior",
  },
  levelWarning(
    "-Wsfinae-incomplete",
    "Warn about an incomplete type affecting semantics in a non-error context",
    2
  ),
  ...cppFlags.map(([name, description]): Fig.Option => ({ name, description })),
];

const namesOf = (option: Fig.Option): string[] =>
  Array.isArray(option.name) ? option.name : [option.name];
const cppNames = new Set(cppOptions.flatMap(namesOf));

const completionSpec: Fig.Spec = {
  ...gccBase,
  name: "g++",
  description: "The default C++ compiler for most linux distributions",
  options: [
    // The options gccBase also lists with a clang-flavored description are replaced by the g++ ones
    ...(gccBase as Fig.Subcommand).options.filter(
      (option) => !namesOf(option).some((name) => cppNames.has(name))
    ),
    ...cppOptions,
  ],
};
export default completionSpec;
