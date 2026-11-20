// esbuild v0.28.2 (npm latest and git tag v0.28.2, 2026-11-20). Source: static read of the v0.28.2 Go source
// (cmd/esbuild/main.go help text, pkg/cli/cli_impl.go flag parser, pkg/cli/cli_js_table.go engines,
// internal/logger/msg_ids.go log identifiers, internal/compat/*_table.go feature names); binary not run.
// Not in --help but accepted by the parser (documented on esbuild.github.io): --alias, --conditions, --log-style.
import { keyValueList, valueList } from "@tabsmith/autocomplete-generators";

const icon =
  "data:image/png;base64,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";

const ignoreExtensions = new Set(["", "sample", "env"]);

const extensions: Fig.Generator["custom"] = async (_, executeShellCommand) => {
  const { stdout } = await executeShellCommand({
    command: "bash",
    args: [
      "-c",
      "find . -depth 3 -type f -name '*.*' -not -path '*/node_modules/*' | sed 's/.*\\.//' | sort -u",
    ],
  });
  const lines = stdout.trim().split("\n");
  return lines
    .filter((line) => !ignoreExtensions.has(line))
    .map((line) => ({ name: "." + line }));
};

const spec: Fig.Spec = {
  name: "esbuild",
  description: "An extremely fast JavaScript bundler",
  icon,
  parserDirectives: {
    optionArgSeparators: ["=", ":"],
  },
  args: {
    name: "entry points",
    isVariadic: true,
    template: "filepaths",
  },
  options: (
    [
      // Simple options:
      {
        name: "--bundle",
        description: "Bundle all dependencies into the output files",
        priority: 51,
      },
      {
        name: "--define",
        description:
          "Substitute K with V while parsing, eg. --define:DEBUG=true",
        requiresSeparator: ":",
        args: { name: "K=V" },
        priority: 51,
      },
      {
        name: "--external",
        description: "Exclude module M from the bundle (can use * wildcards)",
        requiresSeparator: ":",
        args: { name: "M" },
        priority: 51,
      },
      {
        name: "--format",
        description: "The output format",
        requiresSeparator: "=",
        args: { name: "format", suggestions: ["iife", "cjs", "esm"] },
        priority: 51,
      },
      {
        name: "--loader",
        description: "Use loader L to load file extension X",
        requiresSeparator: ":",
        args: {
          name: "X=L",
          generators: keyValueList({
            keys: extensions,
            values: [
              "js",
              "jsx",
              "ts",
              "tsx",
              "css",
              "global-css",
              "local-css",
              "json",
              "text",
              "base64",
              "file",
              "dataurl",
              "binary",
              "copy",
              "empty",
            ],
            cache: true,
          }),
        },
        priority: 51,
      },
      {
        name: "--minify",
        description: "Minify the output (sets all --minify-* flags)",
        priority: 51,
      },
      {
        name: "--outdir",
        description: "The output directory for multiple entrypoints",
        requiresSeparator: "=",
        args: { name: "path", template: "folders" },
        priority: 51,
      },
      {
        name: "--outfile",
        description: "The output file for one entrypoint",
        requiresSeparator: "=",
        args: { name: "path", template: "filepaths" },
        priority: 51,
      },
      {
        name: "--packages",
        description: 'Set to "external" to avoid bundling any package',
        requiresSeparator: "=",
        args: { name: "mode", suggestions: ["bundle", "external"] },
        priority: 51,
      },
      {
        name: "--platform",
        description: "The platform target",
        requiresSeparator: "=",
        args: { name: "name", suggestions: ["browser", "node", "neutral"] },
        priority: 51,
      },
      {
        name: "--serve",
        description: "Start a local HTTP server on this host:port for outputs",
        requiresSeparator: "=",
        args: { isOptional: true, name: "[address:]port" },
        priority: 51,
      },
      {
        name: "--splitting",
        description: "Enable code splitting",
        priority: 51,
      },
      {
        name: "--target",
        description:
          "Set the environment target, eg. es2017, chrome58, firefox57, safari11, edge16, node10",
        requiresSeparator: "=",
        args: {
          name: "target",
          generators: valueList({
            values: [
              "esnext",
              "es5",
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
              "chrome",
              "deno",
              "edge",
              "firefox",
              "hermes",
              "ie",
              "ios",
              "node",
              "opera",
              "rhino",
              "safari",
            ],
          }),
        },
        priority: 51,
      },
      {
        name: "--watch",
        description:
          "Rebuild on file system changes (stops when stdin is closed, use --watch=forever to ignore stdin)",
        priority: 51,
        requiresSeparator: "=",
        args: {
          name: "forever",
          suggestions: ["forever"],
          isOptional: true,
        },
      },
      // Advanced options:
      {
        name: "--abs-paths",
        description:
          "Emit absolute instead of relative paths in these situations",
        requiresSeparator: "=",
        args: {
          name: "situations",
          generators: valueList({ values: ["code", "log", "metafile"] }),
        },
      },
      {
        name: "--alias",
        description: "Substitute one package for another",
        requiresSeparator: ":",
        args: { name: "old=new" },
      },
      {
        name: "--allow-overwrite",
        description: "Allow output files to overwrite input files",
      },
      {
        name: "--analyze",
        description: "Print a report about the contents of the bundle",
        requiresSeparator: "=",
        args: { name: "verbose", isOptional: true, suggestions: ["verbose"] },
      },
      {
        name: "--asset-names",
        description: 'Path template to use for "file" loader files',
        requiresSeparator: "=",
        args: { name: "template", default: "[name]-[hash]" },
      },
      {
        name: "--banner",
        description: "Text to be prepended to each output file of type T",
        requiresSeparator: ":",
        args: {
          name: "T=text",
          generators: keyValueList({ keys: ["css", "js"] }),
        },
      },
      {
        name: "--certfile",
        description: 'Certificate for serving HTTPS (see also "--keyfile")',
        requiresSeparator: "=",
        args: { name: "path", template: "filepaths" },
      },
      {
        name: "--charset",
        description: "Do not escape UTF-8 code points",
        insertValue: "--charset=utf8",
        displayName: "--charset=utf8",
        requiresSeparator: "=",
        args: { name: "charset", suggestions: ["utf8", "ascii"] },
      },
      {
        name: "--chunk-names",
        description: "Path template to use for code splitting chunks",
        requiresSeparator: "=",
        args: { name: "template", default: "[name]-[hash]" },
      },
      {
        name: "--color",
        description: "Force use of color terminal escapes",
        requiresSeparator: "=",
        args: {
          name: "enabled",
          isOptional: true,
          suggestions: ["true", "false"],
        },
      },
      {
        name: "--conditions",
        description: "Additional package.json export conditions",
        requiresSeparator: "=",
        args: { name: "conditions" },
      },
      {
        name: "--cors-origin",
        description: "Allow cross-origin requests from this origin",
        requiresSeparator: "=",
        args: { name: "origin" },
      },
      {
        name: "--drop",
        description: "Remove certain constructs",
        requiresSeparator: ":",
        args: { suggestions: ["console", "debugger"] },
      },
      {
        name: "--drop-labels",
        description: "Remove labeled statements with these label names",
        requiresSeparator: "=",
        args: { name: "labels" },
      },
      {
        name: "--entry-names",
        description: "Path template to use for entry point output paths",
        requiresSeparator: "=",
        args: { name: "template", default: "[dir]/[name]" },
      },
      {
        name: "--footer",
        description: "Text to be appended to each output file of type T",
        requiresSeparator: ":",
        args: {
          name: "T=text",
          generators: keyValueList({ keys: ["css", "js"] }),
        },
      },
      {
        name: "--global-name",
        description: "The name of the global for the IIFE format",
        requiresSeparator: "=",
        args: { name: "name" },
      },
      {
        name: "--ignore-annotations",
        description:
          "Enable this to work with packages that have incorrect tree-shaking annotations",
      },
      {
        name: "--inject",
        description:
          "Import the file F into all input files and automatically replace matching globals with imports",
        requiresSeparator: ":",
        args: { name: "F", template: "filepaths" },
      },
      {
        name: "--jsx-factory",
        description: "What to use for JSX instead of React.createElement",
        requiresSeparator: "=",
        args: {
          name: "factory",
          suggestions: ["React.createElement", "h", "preact.h"],
        },
      },
      {
        name: "--jsx-fragment",
        description: "What to use for JSX instead of React.Fragment",
        requiresSeparator: "=",
        args: { name: "fragment", suggestions: ["React.Fragment", "Fragment"] },
      },
      {
        name: "--jsx",
        description: "Set the JSX transform mode",
        requiresSeparator: "=",
        args: {
          suggestions: [
            {
              name: "transform",
              description: "Transform JSX using the factory and fragment",
            },
            {
              name: "preserve",
              description: "Disable transforming JSX to JS",
            },
            {
              name: "automatic",
              description: "Use React's new automatic JSX transform",
            },
          ],
        },
      },
      {
        name: "--jsx-dev",
        description: "Use React's automatic runtime in development mode",
      },
      {
        name: "--jsx-import-source",
        description:
          "Override the package name for the automatic runtime (default: react)",
        requiresSeparator: "=",
        args: { name: "source", default: "react" },
      },
      {
        name: "--jsx-side-effects",
        description: "Do not remove unused JSX expressions",
      },
      {
        name: "--keep-names",
        description: 'Preserve "name" on functions and classes',
      },
      {
        name: "--keyfile",
        description: 'Key for serving HTTPS (see also "--certfile")',
        requiresSeparator: "=",
        args: { name: "path", template: "filepaths" },
      },
      {
        name: "--legal-comments",
        description: "Where to place legal comments",
        requiresSeparator: "=",
        args: {
          name: "location",
          suggestions: ["none", "inline", "eof", "linked", "external"],
        },
      },
      {
        name: "--line-limit",
        description: "Lines longer than this will be wrapped onto a new line",
        requiresSeparator: "=",
        args: { name: "count" },
      },
      {
        name: "--log-level",
        description: "Set the log level",
        requiresSeparator: "=",
        args: {
          name: "level",
          suggestions: [
            "verbose",
            "debug",
            "info",
            "warning",
            "error",
            "silent",
          ],
          default: "info",
        },
      },
      {
        name: "--log-limit",
        description: "Maximum message count or 0 to disable",
        requiresSeparator: "=",
        args: { name: "count", default: "6" },
      },
      {
        name: "--log-override",
        description: "Use log level Y for log messages with identifier X",
        requiresSeparator: ":",
        args: {
          name: "X=Y",
          generators: keyValueList({
            keys: [
              // JS
              "assert-to-with",
              "assert-type-json",
              "assign-to-constant",
              "assign-to-define",
              "assign-to-import",
              "bigint",
              "call-import-namespace",
              "class-name-will-throw",
              "commonjs-variable-in-esm",
              "confusing-typescript-cast",
              "delete-super-property",
              "direct-eval",
              "duplicate-case",
              "duplicate-class-member",
              "duplicate-object-key",
              "empty-import-meta",
              "equals-nan",
              "equals-negative-zero",
              "equals-new-object",
              "html-comment-in-js",
              "impossible-typeof",
              "indirect-require",
              "private-name-will-throw",
              "semicolon-after-return",
              "suspicious-boolean-not",
              "suspicious-define",
              "suspicious-logical-operator",
              "suspicious-nullish-coalescing",
              "this-is-undefined-in-esm",
              "unsupported-dynamic-import",
              "unsupported-jsx-comment",
              "unsupported-regexp",
              "unsupported-require-call",

              // CSS
              "css-syntax-error",
              "invalid-@charset",
              "invalid-@import",
              "invalid-@layer",
              "invalid-calc",
              "js-comment-in-css",
              "undefined-composes-from",
              "unsupported-@charset",
              "unsupported-@namespace",
              "unsupported-css-nesting",
              "unsupported-css-property",

              // Bundler
              "ambiguous-reexport",
              "different-path-case",
              "empty-glob",
              "ignored-bare-import",
              "ignored-dynamic-import",
              "import-is-undefined",
              "require-resolve-not-external",

              // Source maps
              "invalid-source-mappings",
              "missing-source-map",
              "unsupported-source-map-comment",

              // Groups
              "package.json",
              "tsconfig.json",
            ],
            values: ["verbose", "debug", "info", "warning", "error", "silent"],
          }),
        },
      },
      {
        name: "--log-style",
        description: "Set the log message style",
        requiresSeparator: "=",
        args: { name: "style", suggestions: ["default", "visualstudio"] },
      },
      {
        name: "--main-fields",
        description: "Override the main file order in package.json",
        requiresSeparator: "=",
        args: { name: "field order", default: "browser,module,main" },
      },
      {
        name: "--mangle-cache",
        description: "Save 'mangle props' decisions to a JSON file",
        requiresSeparator: "=",
        args: {
          name: "path",
          template: "filepaths",
          suggestCurrentToken: true,
        },
      },
      {
        name: "--mangle-props",
        description: "Rename all properties matching a regular expression",
        requiresSeparator: "=",
        args: { name: "regex" },
      },
      {
        name: "--mangle-quoted",
        description: "Enable renaming of quoted properties",
        requiresSeparator: "=",
        args: {
          name: "status",
          isOptional: true,
          suggestions: ["true", "false"],
        },
      },
      {
        name: "--metafile",
        description: "Write metadata about the build to a JSON file",
        requiresSeparator: "=",
        args: {
          name: "path",
          template: "filepaths",
          suggestCurrentToken: true,
        },
      },
      {
        name: "--minify-whitespace",
        description: "Remove whitespace in output files",
      },
      {
        name: "--minify-identifiers",
        description: "Shorten identifiers in output files",
      },
      {
        name: "--minify-syntax",
        description: "Use equivalent but shorter syntax in output files",
      },
      {
        name: "--out-extension",
        description: 'Use a custom output extension instead of ".js"',
        requiresSeparator: ":",
        args: {
          name: "ext=new",
          generators: keyValueList({ keys: [".js", ".css"] }),
        },
      },
      {
        name: "--outbase",
        description:
          "The base path used to determine entry point output paths (for multiple entry points)",
        requiresSeparator: "=",
        args: { name: "path", template: "folders" },
      },
      {
        name: "--preserve-symlinks",
        description: "Disable symlink resolution for module lookup",
      },
      {
        name: "--public-path",
        description: 'Set the base URL for the "file" loader',
        requiresSeparator: "=",
        args: { name: "path", template: "folders" },
      },
      {
        name: "--pure",
        description: "Mark the name N as a pure function for tree shaking",
        requiresSeparator: ":",
        args: { name: "N" },
      },
      {
        name: "--reserve-props",
        description: "Do not mangle these properties",
        requiresSeparator: "=",
        args: { name: "properties" },
      },
      {
        name: "--resolve-extensions",
        description: "A comma-separated list of implicit extensions",
        requiresSeparator: "=",
        args: {
          name: "extensions",
          generators: valueList({ values: extensions, cache: true }),
        },
      },
      {
        name: "--serve-fallback",
        description: "Serve this HTML page when the request doesn't match",
        requiresSeparator: "=",
        args: { name: "path", template: "filepaths" },
      },
      {
        name: "--servedir",
        description: "What to serve in addition to generated output files",
        requiresSeparator: "=",
        args: { name: "path", template: "folders" },
      },
      {
        name: "--source-root",
        description: 'Set the "sourceRoot" field in generated source maps',
        requiresSeparator: "=",
        args: { name: "URL" },
      },
      {
        name: "--sourcefile",
        description: "Set the source file for the source map (for stdin)",
        requiresSeparator: "=",
        args: { name: "name" },
      },
      {
        name: "--sourcemap",
        description: "Emit a source map",
        requiresSeparator: "=",
        args: {
          name: "options",
          isOptional: true,
          suggestions: [
            {
              name: "linked",
              description:
                "Emit a separate .map file and link to it with a comment",
            },
            {
              name: "external",
              description: "Emit a separate .map file with no link comment",
            },
            {
              name: "inline",
              description: "Emit the source map with an inline data URL",
            },
            {
              name: "both",
              description: "Emit both an inline and an external source map",
            },
          ],
        },
        priority: 51,
      },
      {
        name: "--sources-content",
        description: 'Omit "sourcesContent" in generated source maps',
        insertValue: "--sources-content=false",
        displayName: "--sources-content=false",
        requiresSeparator: "=",
        args: {
          name: "status",
          isOptional: true,
          suggestions: ["false", "true"],
        },
      },
      {
        name: "--supported",
        description: "Consider syntax F to be supported (true | false)",
        requiresSeparator: ":",
        args: {
          name: "F=status",
          generators: keyValueList({
            keys: [
              "arbitrary-module-namespace-names",
              "array-spread",
              "arrow",
              "async-await",
              "async-generator",
              "bigint",
              "class",
              "class-field",
              "class-private-accessor",
              "class-private-brand-check",
              "class-private-field",
              "class-private-method",
              "class-private-static-accessor",
              "class-private-static-field",
              "class-private-static-method",
              "class-static-blocks",
              "class-static-field",
              "const-and-let",
              "decorators",
              "default-argument",
              "destructuring",
              "dynamic-import",
              "exponent-operator",
              "export-star-as",
              "for-await",
              "for-of",
              "from-base64",
              "function-name-configurable",
              "function-or-class-property-access",
              "generator",
              "hashbang",
              "import-assertions",
              "import-attributes",
              "import-defer",
              "import-meta",
              "import-source",
              "inline-script",
              "logical-assignment",
              "nested-rest-binding",
              "new-target",
              "node-colon-prefix-import",
              "node-colon-prefix-require",
              "nullish-coalescing",
              "object-accessors",
              "object-extensions",
              "object-rest-spread",
              "optional-catch-binding",
              "optional-chain",
              "regexp-dot-all-flag",
              "regexp-lookbehind-assertions",
              "regexp-match-indices",
              "regexp-named-capture-groups",
              "regexp-set-notation",
              "regexp-sticky-and-unicode-flags",
              "regexp-unicode-property-escapes",
              "rest-argument",
              "template-literal",
              "top-level-await",
              "typeof-exotic-object-is-object",
              "unicode-escapes",
              "using",

              // CSS
              "color-functions",
              "gradient-double-position",
              "gradient-interpolation",
              "gradient-midpoints",
              "hex-rgba",
              "hwb",
              "inline-style",
              "inset-property",
              "is-pseudo-class",
              "media-range",
              "modern-rgb-hsl",
              "nesting",
              "rebecca-purple",
            ],
            values: ["true", "false"],
          }),
        },
      },
      {
        name: "--tree-shaking",
        description: "Force tree shaking on or off",
        requiresSeparator: "=",
        args: {
          name: "status",
          isOptional: true,
          suggestions: ["true", "false"],
        },
      },
      {
        name: "--tsconfig",
        description: "Use this tsconfig.json file instead of other ones",
        requiresSeparator: "=",
        args: { name: "path", template: "filepaths" },
      },
      {
        name: "--tsconfig-raw",
        description: "Override all tsconfig.json files with this string",
        requiresSeparator: "=",
        args: { name: "json" },
      },
      {
        name: "--version",
        description: "Print the current version and exit",
      },
      {
        name: "--watch-delay",
        description: "Wait before watch mode rebuilds (in milliseconds)",
        requiresSeparator: "=",
        args: { name: "milliseconds" },
      },
      {
        name: ["--help", "-h"],
        description: "Print help text and exit",
      },
    ] as Fig.Option[]
  ).map((option) => ({ ...option, icon })),
};

export default spec;
