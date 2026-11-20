// TypeScript v7.0.2 (npm typescript@latest, published 2026-07-08, checked 2026-11-20). Source: option tables and help generator of the native
// compiler, read statically from microsoft/typescript-go tag typescript/v7.0.2 (internal/tsoptions/decls*.go, enummaps.go, commandlineparser.go,
// internal/execute/tsc/help.go, diagnostics messages used as help text) and cross-checked with the lib files shipped in the npm package.
// The native binary was not run (no live `tsc --all` dump). Notes: --build/-b is a subcommand because tsc requires it as the first argument and
// then accepts only the common, build and watch options. Options dropped in 7.0 (importsNotUsedAsValues, keyofStringsOnly, noImplicitUseStrict,
// noStrictGenericChecks, suppressExcessPropertyErrors, suppressImplicitAnyIndexErrors) are removed; baseUrl, outFile and downlevelIteration
// still parse but are reported as removed, so they are deprecated. tsconfig-only options accept just null (or false) on the command line and are
// hidden. List options take one comma-separated argument. Watch options are parsed but no consumer was found in the 7.0.2 source. Left out:
// ignoreDeprecations (parsed, no effect), watchInterval (undocumented) and the editor entry points --lsp and --api.

import { filepaths } from "@tabsmith/autocomplete-generators";

// Values accepted by --lib (internal/tsoptions/enummaps.go, LibMap)
const libs = [
  "es5",
  "es6",
  "es2015",
  "es7",
  "es2016",
  "es2017",
  "es2018",
  "es2019",
  "es2020",
  "es2021",
  "es2022",
  "es2023",
  "es2024",
  "es2025",
  "esnext",
  "dom",
  "dom.iterable",
  "dom.asynciterable",
  "webworker",
  "webworker.importscripts",
  "webworker.iterable",
  "webworker.asynciterable",
  "scripthost",
  "es2015.core",
  "es2015.collection",
  "es2015.generator",
  "es2015.iterable",
  "es2015.promise",
  "es2015.proxy",
  "es2015.reflect",
  "es2015.symbol",
  "es2015.symbol.wellknown",
  "es2016.array.include",
  "es2016.intl",
  "es2017.arraybuffer",
  "es2017.date",
  "es2017.object",
  "es2017.sharedmemory",
  "es2017.string",
  "es2017.intl",
  "es2017.typedarrays",
  "es2018.asyncgenerator",
  "es2018.asynciterable",
  "es2018.intl",
  "es2018.promise",
  "es2018.regexp",
  "es2019.array",
  "es2019.object",
  "es2019.string",
  "es2019.symbol",
  "es2019.intl",
  "es2020.bigint",
  "es2020.date",
  "es2020.promise",
  "es2020.sharedmemory",
  "es2020.string",
  "es2020.symbol.wellknown",
  "es2020.intl",
  "es2020.number",
  "es2021.promise",
  "es2021.string",
  "es2021.weakref",
  "es2021.intl",
  "es2022.array",
  "es2022.error",
  "es2022.intl",
  "es2022.object",
  "es2022.string",
  "es2022.regexp",
  "es2023.array",
  "es2023.collection",
  "es2023.intl",
  "es2024.arraybuffer",
  "es2024.collection",
  "es2024.object",
  "es2024.promise",
  "es2024.regexp",
  "es2024.sharedmemory",
  "es2024.string",
  "es2025.collection",
  "es2025.float16",
  "es2025.intl",
  "es2025.iterator",
  "es2025.promise",
  "es2025.regexp",
  "esnext.asynciterable",
  "esnext.symbol",
  "esnext.bigint",
  "esnext.weakref",
  "esnext.object",
  "esnext.regexp",
  "esnext.string",
  "esnext.float16",
  "esnext.iterator",
  "esnext.promise",
  "esnext.array",
  "esnext.collection",
  "esnext.date",
  "esnext.decorators",
  "esnext.disposable",
  "esnext.error",
  "esnext.intl",
  "esnext.sharedmemory",
  "esnext.temporal",
  "esnext.typedarrays",
  "decorators",
  "decorators.legacy",
];

// es5 is still parsed but reported as removed in TypeScript 7; es6 is an alias of es2015
const targets = [
  "es2015",
  "es2016",
  "es2017",
  "es2018",
  "es2019",
  "es2020",
  "es2021",
  "es2022",
  "es2023",
  "es2024",
  "es2025",
  "esnext",
];

// amd, system and umd are still parsed but reported as removed in TypeScript 7; es6 is an alias of es2015
const modules = [
  "commonjs",
  "es2015",
  "es2020",
  "es2022",
  "esnext",
  "node16",
  "node18",
  "node20",
  "nodenext",
  "preserve",
];

// classic, node and node10 are still parsed but reported as removed in TypeScript 7
const moduleResolutions = ["node16", "nodenext", "bundler"];

const jsxModes = [
  "preserve",
  "react-native",
  "react-jsx",
  "react-jsxdev",
  "react",
];

const watchFileKinds = [
  "fixedPollingInterval",
  "priorityPollingInterval",
  "dynamicPriorityPolling",
  "fixedChunkSizePolling",
  "useFsEvents",
  "useFsEventsOnParentDirectory",
];

const watchDirectoryKinds = [
  "useFsEvents",
  "fixedPollingInterval",
  "dynamicPriorityPolling",
  "fixedChunkSizePolling",
];

const fallbackPollingKinds = [
  "fixedInterval",
  "priorityInterval",
  "dynamicPriority",
  "fixedChunkSize",
];

// Languages with a shipped translation of the diagnostics (internal/diagnostics/loc); any IETF BCP 47 tag is accepted
const locales = [
  "en",
  "cs-CZ",
  "de-DE",
  "es-ES",
  "fr-FR",
  "it-IT",
  "ja-JP",
  "ko-KR",
  "pl-PL",
  "pt-BR",
  "ru-RU",
  "tr-TR",
  "zh-CN",
  "zh-TW",
];

// Watch options: parsed in both compile and --build mode
const watchOptions: Fig.Option[] = [
  {
    name: "--excludeDirectories",
    description: "Remove a list of directories from the watch process",
    args: { name: "directories", template: "folders" },
  },
  {
    name: "--excludeFiles",
    description: "Remove a list of files from the watch mode's processing",
    args: { name: "files", template: "filepaths" },
  },
  {
    name: "--fallbackPolling",
    description:
      "Specify what approach the watcher should use if the system runs out of native file watchers",
    args: {
      name: "approach",
      default: "priorityInterval",
      suggestions: fallbackPollingKinds,
    },
  },
  {
    name: "--synchronousWatchDirectory",
    description:
      "Synchronously call callbacks and update the state of directory watchers on platforms that don't support recursive watching natively",
  },
  {
    name: "--watchDirectory",
    description:
      "Specify how directories are watched on systems that lack recursive file-watching functionality",
    args: {
      name: "approach",
      default: "useFsEvents",
      suggestions: watchDirectoryKinds,
    },
  },
  {
    name: "--watchFile",
    description: "Specify how the TypeScript watch mode works",
    args: {
      name: "approach",
      default: "useFsEvents",
      suggestions: watchFileKinds,
    },
  },
];

// Options accepted both in compile mode and after --build
const commonOptions: Fig.Option[] = [
  {
    name: "--assumeChangesOnlyAffectDirectDependencies",
    description:
      "Have recompiles in projects that use 'incremental' and 'watch' mode assume that changes within a file will only affect files directly depending on it",
  },
  {
    name: "--checkers",
    description: "Set the number of checkers per project",
    args: { name: "number", default: "4" },
  },
  {
    name: "--declarationMap",
    description: "Create sourcemaps for d.ts files",
  },
  {
    name: "--deduplicatePackages",
    description: "Deduplicate packages with the same name and version",
  },
  {
    name: "--diagnostics",
    description: "Output compiler performance information after building",
  },
  {
    name: "--emitDeclarationOnly",
    description: "Only output d.ts files and not JavaScript files",
  },
  {
    name: "--explainFiles",
    description:
      "Print files read during the compilation including why it was included",
  },
  {
    name: "--extendedDiagnostics",
    description:
      "Output more detailed compiler performance information after building",
  },
  {
    name: "--generateCpuProfile",
    description: "Emit a v8 CPU profile of the compiler run for debugging",
    args: {
      name: "file",
      template: "filepaths",
      default: "profile.cpuprofile",
    },
  },
  {
    name: "--generateTrace",
    description: "Generates an event trace and a list of types",
    args: { name: "directory", template: "folders" },
  },
  {
    name: ["--help", "-h", "-?"],
    description: "Print this message",
  },
  {
    name: ["--incremental", "-i"],
    description:
      "Save .tsbuildinfo files to allow for incremental compilation of projects",
  },
  {
    name: "--inlineSourceMap",
    description: "Include sourcemap files inside the emitted JavaScript",
  },
  {
    name: "--listEmittedFiles",
    description: "Print the names of emitted files after a compilation",
  },
  {
    name: "--listFiles",
    description: "Print all of the files read during the compilation",
  },
  {
    name: "--locale",
    description:
      "Set the language of the messaging from TypeScript. This does not affect emit",
    args: { name: "locale", suggestions: locales },
  },
  {
    name: "--noCheck",
    description:
      "Disable full type checking (only critical parse and emit errors will be reported)",
  },
  {
    name: "--noEmit",
    description: "Disable emitting files from a compilation",
  },
  {
    name: "--pprofDir",
    description: "Generate pprof CPU/memory profiles to the given directory",
    args: { name: "directory", template: "folders" },
  },
  {
    name: "--preserveWatchOutput",
    description: "Disable wiping the console in watch mode",
  },
  {
    name: "--pretty",
    description:
      "Enable color and formatting in TypeScript's output to make compiler errors easier to read",
  },
  {
    name: ["--quiet", "-q"],
    description: "Do not print diagnostics",
  },
  {
    name: "--singleThreaded",
    description: "Run in single threaded mode",
  },
  {
    name: "--sourceMap",
    description: "Create source map files for emitted JavaScript files",
  },
  {
    name: "--traceResolution",
    description: "Log paths used during the 'moduleResolution' process",
  },
  {
    name: ["--watch", "-w"],
    description: "Watch input files",
  },
];

const declarationOption = {
  description:
    "Generate .d.ts files from TypeScript and JavaScript files in your project",
};

const completionSpec: Fig.Spec = {
  name: "tsc",
  description: "CLI tool for TypeScript compiler",
  subcommands: [
    {
      name: ["--build", "-b"],
      description:
        "Build one or more projects and their dependencies, if out of date",
      options: [
        ...commonOptions,
        { name: "--declaration", ...declarationOption },
        ...watchOptions,
        {
          name: "--builders",
          description: "Set the number of projects to build concurrently",
          args: { name: "number", default: "4" },
        },
        {
          name: "--clean",
          description: "Delete the outputs of all projects",
        },
        {
          name: ["--dry", "-d"],
          description:
            "Show what would be built (or deleted, if specified with '--clean')",
        },
        {
          name: ["--force", "-f"],
          description:
            "Build all projects, including those that appear to be up to date",
        },
        {
          name: "--stopBuildOnErrors",
          description:
            "Skip building downstream projects on error in upstream project",
        },
        {
          name: ["--verbose", "-v"],
          description: "Enable verbose logging",
        },
      ],
      args: {
        name: "project",
        template: ["filepaths", "folders"],
        isVariadic: true,
        isOptional: true,
      },
    },
  ],
  options: [
    ...commonOptions,
    ...watchOptions,
    { name: ["--declaration", "-d"], ...declarationOption },
    {
      name: "--all",
      description: "Show all compiler options",
    },
    {
      name: "--allowArbitraryExtensions",
      description:
        "Enable importing files with any extension, provided a declaration file is present",
    },
    {
      name: "--allowImportingTsExtensions",
      description:
        "Allow imports to include TypeScript file extensions. Requires '--moduleResolution bundler' and either '--noEmit' or '--emitDeclarationOnly' to be set",
    },
    {
      name: "--allowJs",
      description:
        "Allow JavaScript files to be a part of your program. Use the 'checkJs' option to get errors from these files",
    },
    {
      name: "--allowSyntheticDefaultImports",
      description:
        "Allow 'import x from y' when a module doesn't have a default export",
    },
    {
      name: "--allowUmdGlobalAccess",
      description: "Allow accessing UMD globals from modules",
    },
    {
      name: "--allowUnreachableCode",
      description: "Disable error reporting for unreachable code",
    },
    {
      name: "--allowUnusedLabels",
      description: "Disable error reporting for unused labels",
    },
    {
      name: "--alwaysStrict",
      description: "Ensure 'use strict' is always emitted",
    },
    {
      name: "--baseUrl",
      description:
        "Specify the base directory to resolve non-relative module names (removed in TypeScript 7, use paths instead)",
      deprecated: true,
      args: { name: "directory", template: "folders" },
    },
    {
      name: "--checkJs",
      description: "Enable error reporting in type-checked JavaScript files",
    },
    {
      name: "--composite",
      description:
        "Enable constraints that allow a TypeScript project to be used with project references (only settable in tsconfig.json)",
      hidden: true,
      args: { name: "value", suggestions: ["false", "null"] },
    },
    {
      name: "--customConditions",
      description:
        "Conditions to set in addition to the resolver-specific defaults when resolving imports",
      args: { name: "conditions" },
    },
    {
      name: "--declarationDir",
      description:
        "Specify the output directory for generated declaration files",
      args: { name: "directory", template: "folders" },
    },
    {
      name: "--disableReferencedProjectLoad",
      description:
        "Reduce the number of projects loaded automatically by TypeScript (only settable in tsconfig.json)",
      hidden: true,
      args: { name: "value", suggestions: ["false", "null"] },
    },
    {
      name: "--disableSizeLimit",
      description:
        "Remove the 20mb cap on total source code size for JavaScript files in the TypeScript language server",
    },
    {
      name: "--disableSolutionSearching",
      description:
        "Opt a project out of multi-project reference checking when editing (only settable in tsconfig.json)",
      hidden: true,
      args: { name: "value", suggestions: ["false", "null"] },
    },
    {
      name: "--disableSourceOfProjectReferenceRedirect",
      description:
        "Disable preferring source files instead of declaration files when referencing composite projects (only settable in tsconfig.json)",
      hidden: true,
      args: { name: "value", suggestions: ["false", "null"] },
    },
    {
      name: "--downlevelIteration",
      description:
        "Emit more compliant, but verbose and less performant JavaScript for iteration (removed in TypeScript 7)",
      deprecated: true,
    },
    {
      name: "--emitBOM",
      description:
        "Emit a UTF-8 Byte Order Mark (BOM) in the beginning of output files",
    },
    {
      name: "--emitDecoratorMetadata",
      description:
        "Emit design-type metadata for decorated declarations in source files",
    },
    {
      name: "--erasableSyntaxOnly",
      description:
        "Do not allow runtime constructs that are not part of ECMAScript",
    },
    {
      name: "--esModuleInterop",
      description:
        "Emit additional JavaScript to ease support for importing CommonJS modules. This enables 'allowSyntheticDefaultImports' for type compatibility",
    },
    {
      name: "--exactOptionalPropertyTypes",
      description:
        "Interpret optional property types as written, rather than adding 'undefined'",
    },
    {
      name: "--experimentalDecorators",
      description:
        "Enable experimental support for legacy experimental decorators",
    },
    {
      name: "--forceConsistentCasingInFileNames",
      description: "Ensure that casing is correct in imports",
    },
    {
      name: "--ignoreConfig",
      description:
        "Ignore the tsconfig found and build with commandline options and files",
    },
    {
      name: "--importHelpers",
      description:
        "Allow importing helper functions from tslib once per project, instead of including them per-file",
    },
    {
      name: "--init",
      description:
        "Initializes a TypeScript project and creates a tsconfig.json file",
    },
    {
      name: "--inlineSources",
      description:
        "Include source code in the sourcemaps inside the emitted JavaScript",
    },
    {
      name: "--isolatedDeclarations",
      description:
        "Require sufficient annotation on exports so other tools can trivially generate declaration files",
    },
    {
      name: "--isolatedModules",
      description:
        "Ensure that each file can be safely transpiled without relying on other imports",
    },
    {
      name: "--jsx",
      description: "Specify what JSX code is generated",
      args: { name: "type", suggestions: jsxModes },
    },
    {
      name: "--jsxFactory",
      description:
        "Specify the JSX factory function used when targeting React JSX emit, e.g. 'React.createElement' or 'h'",
      args: { name: "factory", default: "React.createElement" },
    },
    {
      name: "--jsxFragmentFactory",
      description:
        "Specify the JSX Fragment reference used for fragments when targeting React JSX emit e.g. 'React.Fragment' or 'Fragment'",
      args: { name: "fragment", default: "React.Fragment" },
    },
    {
      name: "--jsxImportSource",
      description:
        "Specify module specifier used to import the JSX factory functions when using 'jsx: react-jsx*'",
      args: { name: "module", default: "react" },
    },
    {
      name: "--lib",
      description:
        "Specify a set of bundled library declaration files that describe the target runtime environment",
      args: { name: "libs", suggestions: libs },
    },
    {
      name: "--libReplacement",
      description: "Enable lib replacement",
    },
    {
      name: "--listFilesOnly",
      description:
        "Print names of files that are part of the compilation and then stop processing",
    },
    {
      name: "--mapRoot",
      description:
        "Specify the location where debugger should locate map files instead of generated locations",
      args: { name: "path", template: "folders" },
    },
    {
      name: "--maxNodeModuleJsDepth",
      description:
        "Specify the maximum folder depth used for checking JavaScript files from 'node_modules'. Only applicable with 'allowJs'",
      dependsOn: ["--allowJs"],
      args: { name: "number", default: "0" },
    },
    {
      name: ["--module", "-m"],
      description: "Specify what module code is generated",
      args: { name: "module", suggestions: modules },
    },
    {
      name: "--moduleDetection",
      description:
        "Control what method is used to detect module-format JS files",
      args: {
        name: "mode",
        default: "auto",
        suggestions: ["auto", "legacy", "force"],
      },
    },
    {
      name: "--moduleResolution",
      description:
        "Specify how TypeScript looks up a file from a given module specifier",
      args: { name: "resolution", suggestions: moduleResolutions },
    },
    {
      name: "--moduleSuffixes",
      description:
        "List of file name suffixes to search when resolving a module",
      args: { name: "suffixes" },
    },
    {
      name: "--newLine",
      description: "Set the newline character for emitting files",
      args: { name: "character", default: "lf", suggestions: ["crlf", "lf"] },
    },
    {
      name: "--noEmitHelpers",
      description:
        "Disable generating custom helper functions like '__extends' in compiled output",
    },
    {
      name: "--noEmitOnError",
      description:
        "Disable emitting files if any type checking errors are reported",
    },
    {
      name: "--noErrorTruncation",
      description: "Disable truncating types in error messages",
    },
    {
      name: "--noFallthroughCasesInSwitch",
      description:
        "Enable error reporting for fallthrough cases in switch statements",
    },
    {
      name: "--noImplicitAny",
      description:
        "Enable error reporting for expressions and declarations with an implied 'any' type",
    },
    {
      name: "--noImplicitOverride",
      description:
        "Ensure overriding members in derived classes are marked with an override modifier",
    },
    {
      name: "--noImplicitReturns",
      description:
        "Enable error reporting for codepaths that do not explicitly return in a function",
    },
    {
      name: "--noImplicitThis",
      description: "Enable error reporting when 'this' is given the type 'any'",
    },
    {
      name: "--noLib",
      description:
        "Disable including any library files, including the default lib.d.ts",
    },
    {
      name: "--noPropertyAccessFromIndexSignature",
      description:
        "Enforces using indexed accessors for keys declared using an indexed type",
    },
    {
      name: "--noResolve",
      description:
        "Disallow 'import's, 'require's or '<reference>'s from expanding the number of files TypeScript should add to a project",
    },
    {
      name: "--noUncheckedIndexedAccess",
      description: "Add 'undefined' to a type when accessed using an index",
    },
    {
      name: "--noUncheckedSideEffectImports",
      description: "Check side effect imports",
    },
    {
      name: "--noUnusedLocals",
      description: "Enable error reporting when local variables aren't read",
    },
    {
      name: "--noUnusedParameters",
      description: "Raise an error when a function parameter isn't read",
    },
    {
      name: "--outDir",
      description: "Specify an output folder for all emitted files",
      args: { name: "directory", template: "folders" },
    },
    {
      name: "--outFile",
      description:
        "Specify a file that bundles all outputs into one JavaScript file. If 'declaration' is true, also designates a file that bundles all .d.ts output (removed in TypeScript 7)",
      deprecated: true,
      args: { name: "file", template: "filepaths" },
    },
    {
      name: "--paths",
      description:
        "Specify a set of entries that re-map imports to additional lookup locations (only settable in tsconfig.json)",
      hidden: true,
      args: { name: "value", suggestions: ["null"] },
    },
    {
      name: "--plugins",
      description:
        "Specify a list of language service plugins to include (only settable in tsconfig.json)",
      hidden: true,
      args: { name: "value", suggestions: ["null"] },
    },
    {
      name: "--preserveConstEnums",
      description:
        "Disable erasing 'const enum' declarations in generated code",
    },
    {
      name: "--preserveSymlinks",
      description:
        "Disable resolving symlinks to their realpath. This correlates to the same flag in node",
    },
    {
      name: ["--project", "-p"],
      description:
        "Compile the project given the path to its configuration file, or to a folder with a 'tsconfig.json'",
      args: { name: "path", template: ["filepaths", "folders"] },
    },
    {
      name: "--reactNamespace",
      description:
        "Specify the object invoked for 'createElement'. This only applies when targeting 'react' JSX emit",
      args: { name: "object", default: "React" },
    },
    {
      name: "--removeComments",
      description: "Disable emitting comments",
    },
    {
      name: "--resolveJsonModule",
      description: "Enable importing .json files",
    },
    {
      name: "--resolvePackageJsonExports",
      description:
        "Use the package.json 'exports' field when resolving package imports",
    },
    {
      name: "--resolvePackageJsonImports",
      description:
        "Use the package.json 'imports' field when resolving imports",
    },
    {
      name: "--rewriteRelativeImportExtensions",
      description:
        "Rewrite '.ts', '.tsx', '.mts', and '.cts' file extensions in relative import paths to their JavaScript equivalent in output files",
    },
    {
      name: "--rootDir",
      description: "Specify the root folder within your source files",
      args: { name: "directory", template: "folders" },
    },
    {
      name: "--rootDirs",
      description:
        "Allow multiple folders to be treated as one when resolving modules (only settable in tsconfig.json)",
      hidden: true,
      args: { name: "value", suggestions: ["null"] },
    },
    {
      name: "--showConfig",
      description: "Print the final configuration instead of building",
    },
    {
      name: "--skipDefaultLibCheck",
      description:
        "Skip type checking .d.ts files that are included with TypeScript",
    },
    {
      name: "--skipLibCheck",
      description: "Skip type checking all .d.ts files",
    },
    {
      name: "--sourceRoot",
      description:
        "Specify the root path for debuggers to find the reference source code",
      args: { name: "path", template: ["filepaths", "folders"] },
    },
    {
      name: "--stableTypeOrdering",
      description:
        "Ensure types are ordered stably and deterministically across compilations",
    },
    {
      name: "--strict",
      description: "Enable all strict type-checking options",
    },
    {
      name: "--strictBindCallApply",
      description:
        "Check that the arguments for 'bind', 'call', and 'apply' methods match the original function",
    },
    {
      name: "--strictBuiltinIteratorReturn",
      description:
        "Built-in iterators are instantiated with a 'TReturn' type of 'undefined' instead of 'any'",
    },
    {
      name: "--strictFunctionTypes",
      description:
        "When assigning functions, check to ensure parameters and the return values are subtype-compatible",
    },
    {
      name: "--strictNullChecks",
      description:
        "When type checking, take into account 'null' and 'undefined'",
    },
    {
      name: "--strictPropertyInitialization",
      description:
        "Check for class properties that are declared but not set in the constructor",
    },
    {
      name: "--stripInternal",
      description:
        "Disable emitting declarations that have '@internal' in their JSDoc comments",
    },
    {
      name: ["--target", "-t"],
      description:
        "Set the JavaScript language version for emitted JavaScript and include compatible library declarations",
      args: { name: "target", default: "es2025", suggestions: targets },
    },
    {
      name: "--tsBuildInfoFile",
      description:
        "Specify the path to .tsbuildinfo incremental compilation file",
      args: { name: "file", template: "filepaths", default: ".tsbuildinfo" },
    },
    {
      name: "--typeRoots",
      description:
        "Specify multiple folders that act like './node_modules/@types'",
      args: { name: "folders", template: "folders" },
    },
    {
      name: "--types",
      description:
        "Specify type package names to be included without being referenced in a source file",
      args: { name: "package names" },
    },
    {
      name: "--useDefineForClassFields",
      description: "Emit ECMAScript-standard-compliant class fields",
    },
    {
      name: "--useUnknownInCatchVariables",
      description:
        "Default catch clause variables as 'unknown' instead of 'any'",
    },
    {
      name: "--verbatimModuleSyntax",
      description:
        "Do not transform or elide any imports or exports not marked as type-only, ensuring they are written in the output file's format based on the 'module' setting",
    },
    {
      name: ["--version", "-v"],
      description: "Print the compiler's version",
    },
  ],
  args: {
    name: "tsc script",
    isScript: true,
    generators: filepaths({
      extensions: ["ts", "tsx", "mts", "cts"],
      editFileSuggestions: { priority: 76 },
      editFolderSuggestions: { priority: 70 },
    }),
  },
};

export default completionSpec;
