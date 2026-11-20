// Rollup v4.68.7 (npm latest and GitHub tag v4.68.7, verified 2026-11-20).
// Source: cli/help.md, cli/cli.ts, src/utils/options/mergeOptions.ts and
// docs/command-line-interface at the v4.68.7 tag, plus the CLI rows (flags,
// presets, enums) of docs/configuration-options that help.md omits (--jsx.*,
// --treeshake presets, --experimental*, --virtualDirname,
// --preserveEntrySignatures). Read statically, not run.
import { filepaths } from "@tabsmith/autocomplete-generators";

const watchHooks: Fig.Option[] = [
  ["onBundleEnd", "BUNDLE_END"],
  ["onBundleStart", "BUNDLE_START"],
  ["onEnd", "END"],
  ["onError", "ERROR"],
  ["onStart", "START"],
].map(([hook, event]) => ({
  name: `--watch.${hook}`,
  description: `Shell command to run on "${event}" event`,
  args: { name: "cmd" },
}));

const completionSpec: Fig.Spec = {
  name: "rollup",
  description: "Next-generation ES module bundler",
  args: {
    name: "entry file",
    isOptional: true,
    template: "filepaths",
  },
  options: [
    {
      name: ["-c", "--config"],
      description:
        "Use this config file (if argument is used but value is unspecified, tries rollup.config.mjs, .cjs, then .js)",
      args: {
        name: "filename",
        isOptional: true,
        generators: filepaths({
          extensions: ["config.js", "config.mjs", "config.cjs", "config.ts"],
        }),
      },
    },
    {
      name: ["-d", "--dir"],
      args: {
        name: "dirname",
        description: "Directory for chunks (if absent, prints to stdout)",
        template: "folders",
      },
    },
    {
      name: ["-e", "--external"],
      args: {
        name: "ids",
        description: "Comma-separate list of module IDs to exclude",
      },
    },
    {
      name: ["-f", "--format"],
      args: {
        name: "format",
        description: "Type of output (amd, cjs, es, iife, umd, system)",
        suggestions: ["amd", "cjs", "es", "iife", "umd", "system"],
      },
    },
    {
      name: ["-g", "--globals"],
      args: {
        name: "pairs",
        description: "Comma-separate list of `moduleID:Global` pairs",
      },
    },
    {
      name: ["-h", "--help"],
      description: "Show help message",
    },
    {
      name: ["-i", "--input"],
      args: {
        name: "filename",
        description: "Input (alternative to <entry file>)",
        template: "filepaths",
      },
    },
    {
      name: ["-m", "--sourcemap"],
      description: "Generate sourcemap (`-m inline` for inline map)",
      args: {
        name: "mode",
        isOptional: true,
        suggestions: ["inline", "hidden"],
      },
    },
    {
      name: ["-n", "--name"],
      args: {
        name: "name",
        description: "Name for UMD export",
      },
    },
    {
      name: ["-o", "--file"],
      args: {
        name: "output",
        description: "Single output file (if absent, prints to stdout)",
      },
    },
    {
      name: ["-p", "--plugin"],
      isRepeatable: true,
      args: {
        name: "plugin",
        description: "Use the plugin specified (may be repeated)",
      },
    },
    {
      name: ["-v", "--version"],
      description: "Show version number",
    },
    {
      name: ["-w", "--watch"],
      description: "Watch files in bundle and rebuild on changes",
    },
    {
      name: "--amd.id",
      args: {
        name: "id",
        description: "ID for AMD module (default is anonymous)",
      },
    },
    {
      name: "--amd.autoId",
      description: "Generate the AMD ID based off the chunk name",
    },
    {
      name: "--amd.basePath",
      args: {
        name: "prefix",
        description: "Path to prepend to auto generated AMD ID",
      },
    },
    {
      name: "--amd.define",
      args: {
        name: "name",
        description: "Function to use in place of 'define'",
      },
    },
    {
      name: "--amd.forceJsExtensionForImports",
      description: "Use `.js` extension in AMD imports",
    },
    {
      name: "--assetFileNames",
      args: {
        name: "pattern",
        description: "Name pattern for emitted assets",
      },
    },
    {
      name: "--banner",
      args: {
        name: "text",
        description: "Code to insert at top of bundle (outside wrapper)",
      },
    },
    {
      name: "--bundleConfigAsCjs",
      description: "Transpile the config file to CommonJS",
    },
    {
      name: "--chunkFileNames",
      args: {
        name: "pattern",
        description: "Name pattern for emitted secondary chunks",
      },
    },
    {
      name: "--compact",
      description: "Minify wrapper code",
    },
    {
      name: "--configImportAttributesKey",
      description:
        "Keyword for import attributes in the config file (needs --configPlugin or --bundleConfigAsCjs)",
      args: {
        name: "keyword",
        suggestions: ["with", "assert"],
      },
    },
    {
      name: "--configPlugin",
      description: "Plugin to transpile or parse the config file",
      isRepeatable: true,
      args: {
        name: "plugin",
      },
    },
    {
      name: "--context",
      args: {
        name: "variable",
        description: "Specify top-level 'this' value",
      },
    },
    {
      name: "--no-dynamicImportInCjs",
      description: "Write external dynamic CommonJS imports as require",
    },
    {
      name: "--entryFileNames",
      args: {
        name: "pattern",
        description: "Name pattern for emitted entry chunks",
      },
    },
    {
      name: "--environment",
      isRepeatable: true,
      args: {
        name: "values",
        description: "Settings passed to config file",
      },
    },
    {
      name: "--no-esModule",
      description: "Do not add __esModule property",
    },
    {
      name: "--experimentalCacheExpiry",
      description:
        "Number of runs after which unused cached plugin assets are removed",
      args: {
        name: "numberOfRuns",
      },
    },
    {
      name: "--experimentalLogSideEffects",
      description: "Log the first side effect found in every file",
    },
    {
      name: "--experimentalMinChunkSize",
      description: "Minimal chunk size target in bytes for code-splitting",
      args: {
        name: "size",
      },
    },
    {
      name: "--exports",
      args: {
        name: "mode",
        description: "Specify export mode (auto, default, named, none)",
        suggestions: ["auto", "default", "named", "none"],
      },
    },
    {
      name: "--extend",
      description: "Extend global variable defined by --name",
    },
    {
      name: "--no-externalImportAttributes",
      description: 'Omit import attributes in "es" output',
    },
    {
      name: "--no-externalImportAssertions",
      description:
        'Omit import assertions in "es" output (use --no-externalImportAttributes instead)',
      deprecated: true,
    },
    {
      name: "--no-externalLiveBindings",
      description: "Do not generate code to support live bindings",
    },
    {
      name: "--failAfterWarnings",
      description: "Exit with an error if the build produced warnings",
    },
    {
      name: "--filterLogs",
      description: "Filter log messages",
      isRepeatable: true,
      args: {
        name: "filter",
      },
    },
    {
      name: "--footer",
      args: {
        name: "text",
        description: "Code to insert at end of bundle (outside wrapper)",
      },
    },
    {
      name: "--forceExit",
      description: "Force exit the process when done",
    },
    {
      name: "--no-freeze",
      description: "Do not freeze namespace objects",
    },
    {
      name: "--generatedCode",
      description: "Which code features to use",
      args: {
        name: "preset",
        suggestions: ["es5", "es2015"],
      },
    },
    {
      name: "--generatedCode.arrowFunctions",
      description: "Use arrow functions in generated code",
    },
    {
      name: "--generatedCode.constBindings",
      description: 'Use "const" in generated code',
    },
    {
      name: "--generatedCode.objectShorthand",
      description: "Use shorthand properties in generated code",
    },
    {
      name: "--no-generatedCode.reservedNamesAsProps",
      description: "Always quote reserved names as props",
    },
    {
      name: "--generatedCode.symbols",
      description: "Use symbols in generated code",
    },
    {
      name: "--hashCharacters",
      description: "Use the specified character set for file hashes",
      args: {
        name: "name",
        suggestions: ["base64", "base36", "hex"],
      },
    },
    {
      name: "--no-hoistTransitiveImports",
      description: "Do not hoist transitive imports into entry chunks",
    },
    {
      name: "--importAttributesKey",
      description: "Use the specified keyword for import attributes",
      args: {
        name: "name",
        suggestions: ["with", "assert"],
      },
    },
    {
      name: "--no-indent",
      description: "Don't indent result",
    },
    {
      name: "--inlineDynamicImports",
      description: "Create a single bundle when using dynamic imports",
    },
    {
      name: "--interop",
      description: "Interop mode for external imports",
      args: {
        name: "value",
        suggestions: ["compat", "auto", "esModule", "default", "defaultOnly"],
      },
    },
    {
      name: "--intro",
      args: {
        name: "text",
        description: "Code to insert at top of bundle (inside wrapper)",
      },
    },
    {
      name: "--jsx",
      description: "Handle JSX syntax with the given preset",
      args: {
        name: "preset",
        suggestions: ["preserve", "preserve-react", "react", "react-jsx"],
      },
    },
    {
      name: "--no-jsx",
      description: "Do not handle JSX syntax",
    },
    {
      name: "--jsx.factory",
      description: "Function used to create JSX elements",
      args: {
        name: "factory",
      },
    },
    {
      name: "--jsx.fragment",
      description: "Element function used to create JSX fragments",
      args: {
        name: "fragment",
      },
    },
    {
      name: "--jsx.importSource",
      description: "Where to import the JSX factory and fragment from",
      args: {
        name: "library",
      },
    },
    {
      name: "--jsx.jsxImportSource",
      description:
        'Where to import the jsx, jsxs and Fragment helpers from in "automatic" mode',
      args: {
        name: "library",
      },
    },
    {
      name: "--jsx.mode",
      description: "How JSX is processed",
      args: {
        name: "mode",
        suggestions: ["preserve", "classic", "automatic"],
      },
    },
    {
      name: "--jsx.preset",
      description: "JSX preset to use while overriding some options",
      args: {
        name: "value",
        suggestions: ["preserve", "preserve-react", "react", "react-jsx"],
      },
    },
    {
      name: "--logLevel",
      description: "Which kind of logs to display",
      args: {
        name: "level",
        suggestions: ["silent", "warn", "info", "debug"],
      },
    },
    {
      name: "--no-makeAbsoluteExternalsRelative",
      description: "Prevent normalization of external imports",
    },
    {
      name: "--maxParallelFileOps",
      description: "How many files to read in parallel",
      args: {
        name: "value",
      },
    },
    {
      name: "--minifyInternalExports",
      description: "Force or disable minification of internal exports",
    },
    {
      name: "--noConflict",
      description: "Generate a noConflict method for UMD globals",
    },
    {
      name: "--outro",
      args: {
        name: "text",
        description: "Code to insert at end of bundle (inside wrapper)",
      },
    },
    {
      name: "--perf",
      description: "Display performance timings",
    },
    {
      name: "--preserveEntrySignatures",
      description: "Control whether entry chunks keep the entry module exports",
      args: {
        name: "mode",
        suggestions: ["strict", "allow-extension"],
      },
    },
    {
      name: "--no-preserveEntrySignatures",
      description: "Avoid facade chunks for entry points",
    },
    {
      name: "--preserveModules",
      description: "Preserve module structure",
    },
    {
      name: "--preserveModulesRoot",
      description: "Put preserved modules under this path at root level",
      args: {
        name: "directory",
        template: "folders",
      },
    },
    {
      name: "--preserveSymlinks",
      description: "Do not follow symlinks when resolving files",
    },
    {
      name: "--no-reexportProtoFromExternal",
      description: "Ignore `__proto__` in star re-exports",
    },
    {
      name: "--no-sanitizeFileName",
      description: "Do not replace invalid characters in file names",
    },
    {
      name: "--shimMissingExports",
      description: "Create shim variables for missing exports",
    },
    {
      name: "--silent",
      description: "Don't print warnings",
    },
    {
      name: "--sourcemapBaseUrl",
      description: "Emit absolute sourcemap URLs with given base",
      args: {
        name: "url",
      },
    },
    {
      name: "--sourcemapDebugIds",
      description: "Emit unique debug ids in source and sourcemaps",
    },
    {
      name: "--sourcemapExcludeSources",
      description: "Do not include source code in source maps",
    },
    {
      name: "--sourcemapFile",
      description: "Specify bundle position for source maps",
      args: {
        name: "file",
      },
    },
    {
      name: "--sourcemapFileNames",
      description: "Name pattern for emitted sourcemaps",
      args: {
        name: "pattern",
      },
    },
    {
      name: "--stdin",
      description: "Specify file extension used for stdin input",
      requiresSeparator: true,
      args: {
        name: "ext",
      },
    },
    {
      name: "--no-stdin",
      description: 'Do not read "-" from stdin',
    },
    {
      name: "--no-strict",
      description: "Don't emit '\"use strict\"; in the generated modules",
    },
    {
      name: "--strictDeprecations",
      description: "Throw errors for deprecated features",
    },
    {
      name: "--no-systemNullSetters",
      description: "Do not replace empty SystemJS setters with 'null'",
    },
    {
      name: "--treeshake",
      description: "Tree-shake with the given preset",
      args: {
        name: "preset",
        suggestions: ["smallest", "safest", "recommended"],
      },
    },
    {
      name: "--no-treeshake",
      description: "Disable tree-shaking optimisations",
    },
    {
      name: "--no-treeshake.annotations",
      description: "Ignore pure call annotations",
    },
    {
      name: "--treeshake.correctVarValueBeforeDeclaration",
      description: "Deoptimize variables until declared",
    },
    {
      name: "--treeshake.manualPureFunctions",
      description: "Manually declare functions as pure",
      args: {
        name: "names",
      },
    },
    {
      name: "--treeshake.moduleSideEffects",
      description:
        "Module side effect handling (`no-external` only removes external imports)",
      args: {
        name: "value",
        isOptional: true,
        suggestions: ["no-external"],
      },
    },
    {
      name: "--no-treeshake.moduleSideEffects",
      description: "Assume modules have no side effects",
    },
    {
      name: "--no-treeshake.propertyReadSideEffects",
      description: "Ignore property access side effects",
    },
    {
      name: "--no-treeshake.tryCatchDeoptimization",
      description: "Do not turn off try-catch-tree-shaking",
    },
    {
      name: "--no-treeshake.unknownGlobalSideEffects",
      description: "Assume unknown globals do not throw",
    },
    {
      name: "--waitForBundleInput",
      description: "Wait for bundle input files",
    },
    {
      name: "--watch.allowInputInsideOutputPath",
      description:
        "Whether the input path is allowed to be a subpath of the output path",
    },
    {
      name: "--watch.buildDelay",
      description: "Throttle watch rebuilds",
      args: {
        name: "number",
      },
    },
    {
      name: "--no-watch.clearScreen",
      description: "Do not clear the screen when rebuilding",
    },
    {
      name: "--watch.skipWrite",
      description: "Do not write files to disk when watching",
    },
    {
      name: "--watch.exclude",
      description: "Exclude files from being watched",
      args: {
        name: "files",
      },
    },
    {
      name: "--watch.include",
      description: "Limit watching to specified files",
      args: {
        name: "files",
      },
    },
    ...watchHooks,
    {
      name: "--validate",
      description: "Validate output",
    },
    {
      name: "--virtualDirname",
      description: "Directory name for virtual files emitted by plugins",
      args: {
        name: "dirname",
      },
    },
  ],
};

export default completionSpec;
