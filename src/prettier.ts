// Prettier v3.10.1 (npm latest dist-tag and git tags, 2026-11-20). Source: prettier@3.10.1 package contents (internal/legacy-cli.mjs CLI option table and usage generator, index.mjs core and language option definitions), `prettier --help` output of the repo's installed 3.9.10 (same option set), docs/cli.md at tag 3.10.1 and the 3.6.0 release notes for --experimental-cli. Not run: the 3.10.1 binary itself. Experimental-CLI-only flags (--no-cache, --config-path, --no-ignore) are not modelled
const completionSpec: Fig.Spec = {
  name: "prettier",
  description: "Run Prettier from the command line",
  icon: "https://prettier.io/icon.png",
  options: [
    {
      name: ["-c", "--check"],
      description:
        "Check if the given files are formatted, print a summary and paths to unformatted files",
      exclusiveOn: ["-l", "--list-different"],
    },
    {
      name: ["-l", "--list-different"],
      description:
        "Print the names of files that are different from Prettier's formatting",
      exclusiveOn: ["-c", "--check"],
    },
    {
      name: ["-w", "--write"],
      description: "Edit files in-place",
      exclusiveOn: ["--debug-check"],
      isDangerous: true,
    },
    {
      name: "--arrow-parens",
      description: "Include parentheses around a sole arrow function parameter",
      args: {
        name: "mode",
        default: "always",
        suggestions: ["always", "avoid"],
      },
    },
    {
      name: "--bracket-same-line",
      description:
        "Put > of opening tags on the last line instead of on a new line",
    },
    {
      name: "--no-bracket-spacing",
      description: "Do not print spaces between brackets",
    },
    {
      name: "--embedded-language-formatting",
      description:
        "Control how Prettier formats quoted code embedded in the file",
      args: {
        name: "mode",
        default: "auto",
        suggestions: ["auto", "off"],
      },
    },
    {
      name: "--end-of-line",
      description: "Which end of line characters to apply",
      args: {
        name: "choice",
        default: "lf",
        suggestions: ["lf", "crlf", "cr", "auto"],
      },
    },
    {
      name: "--experimental-operator-position",
      description:
        "Where to print operators when binary expressions wrap lines",
      args: {
        name: "position",
        default: "end",
        suggestions: ["start", "end"],
      },
    },
    {
      name: "--experimental-ternaries",
      description:
        "Use curious ternaries, with the question mark after the condition",
    },
    {
      name: "--no-experimental-ternaries",
      description:
        "Default behavior of ternaries; keep question marks on the same line as the consequent",
    },
    {
      name: "--html-whitespace-sensitivity",
      description: "How to handle whitespaces in HTML",
      args: {
        name: "choice",
        default: "css",
        suggestions: ["css", "strict", "ignore"],
      },
    },
    {
      name: "--jsx-bracket-same-line",
      description: "Put > on the last line instead of at a new line",
      deprecated: { description: "Use --bracket-same-line" },
    },
    {
      name: "--jsx-single-quote",
      description: "Use single quotes in JSX",
    },
    {
      name: "--object-wrap",
      description: "How to wrap object literals",
      args: {
        name: "mode",
        default: "preserve",
        suggestions: ["preserve", "collapse"],
      },
    },
    {
      name: "--parser",
      description: "Which parser to use",
      args: {
        name: "parser",
        suggestions: [
          "flow",
          "babel",
          "babel-flow",
          "babel-ts",
          "typescript",
          "acorn",
          "espree",
          "meriyah",
          "css",
          "less",
          "scss",
          "json",
          "json5",
          "jsonc",
          "json-stringify",
          "graphql",
          "markdown",
          "mdx",
          "vue",
          "yaml",
          "glimmer",
          "html",
          "angular",
          "lwc",
          "mjml",
        ],
      },
    },
    {
      name: "--print-width",
      description: "The line length where Prettier will try wrap",
      args: {
        name: "int",
        default: "80",
      },
    },
    {
      name: "--prose-wrap",
      description: "How to wrap prose",
      args: {
        default: "preserve",
        suggestions: ["always", "never", "preserve"],
      },
    },
    {
      name: "--quote-props",
      description: "Change when properties in objects are quoted",
      args: {
        name: "when",
        default: "as-needed",
        suggestions: ["as-needed", "consistent", "preserve"],
      },
    },
    {
      name: "--no-semi",
      description:
        "Do not print semicolons, except at the beginning of lines which may need them",
    },
    {
      name: "--single-attribute-per-line",
      description: "Enforce single attribute per line in HTML, Vue and JSX",
    },
    {
      name: "--single-quote",
      description: "Use single quotes instead of double quotes",
    },
    {
      name: "--tab-width",
      description: "Number of spaces per indentation level",
      args: {
        name: "int",
        default: "2",
      },
    },
    {
      name: "--trailing-comma",
      description: "Print trailing commas wherever possible when multi-line",
      args: {
        name: "type",
        default: "all",
        suggestions: ["all", "es5", "none"],
      },
    },
    {
      name: "--use-tabs",
      description: "Indent with tabs instead of spaces",
    },
    {
      name: "--vue-indent-script-and-style",
      description: "Indent script and style tags in Vue files",
    },
    {
      name: "--config",
      description:
        "Path to a Prettier configuration file (.prettierrc, package.json, prettier.config.js)",
      exclusiveOn: ["--no-config"],
      args: {
        name: "path",
        template: "filepaths",
      },
    },
    {
      name: "--no-config",
      description: "Do not look for a configuration file",
      exclusiveOn: ["--config"],
    },
    {
      name: "--config-precedence",
      description:
        "Define in which order config files and CLI options should be evaluated",
      args: {
        name: "precedence",
        default: "cli-override",
        suggestions: ["cli-override", "file-override", "prefer-file"],
      },
    },
    {
      name: "--no-editorconfig",
      description:
        "Don't take .editorconfig into account when parsing configuration",
    },
    {
      name: "--find-config-path",
      description:
        "Find and print the path to a configuration file for the given input file",
      args: {
        name: "file",
        template: "filepaths",
      },
    },
    {
      name: "--ignore-path",
      description: "Path to a file with patterns describing files to ignore",
      isRepeatable: true,
      args: {
        name: "path",
        template: "filepaths",
      },
    },
    {
      name: "--plugin",
      description: "Add a plugin",
      isRepeatable: true,
      args: {
        name: "path",
        template: "folders",
      },
    },
    {
      name: "--with-node-modules",
      description: "Process files inside 'node_modules' directory",
    },
    {
      name: "--cursor-offset",
      description:
        "Print (to stderr) where a cursor at the given position would move to after formatting",
      args: {
        name: "int",
        default: "-1",
      },
    },
    {
      name: "--range-end",
      description: "Format code ending at a given character offset (exclusive)",
      args: {
        name: "int",
        default: "Infinity",
      },
    },
    {
      name: "--range-start",
      description: "Format code starting at a given character offset",
      args: {
        name: "int",
        default: "0",
      },
    },
    {
      name: "--no-color",
      description: "Do not colorize error messages",
    },
    {
      name: "--file-info",
      description: "Extract the following info (as JSON) for a given file path",
      args: {
        name: "path",
        template: "filepaths",
      },
    },
    {
      name: ["-h", "--help"],
      description: "Show CLI usage, or details about the given flag",
      args: {
        name: "flag",
        isOptional: true,
      },
    },
    {
      name: ["-u", "--ignore-unknown"],
      description: "Ignore unknown files",
    },
    {
      name: "--insert-pragma",
      description: "Insert @format pragma into file's first docblock comment",
    },
    {
      name: "--log-level",
      description: "What level of logs to report",
      args: {
        name: "level",
        default: "log",
        suggestions: ["silent", "error", "warn", "log", "debug"],
      },
    },
    {
      name: "--require-pragma",
      description:
        "Require either '@prettier' or '@format' to be present in the file's first docblock comment in order for it to be formatted",
    },
    {
      name: "--check-ignore-pragma",
      description:
        "Check whether the file's first docblock comment contains '@noprettier' or '@noformat' to determine if it should be formatted",
    },
    {
      name: "--stdin-filepath",
      description: "Path to the file to pretend that stdin comes from",
      exclusiveOn: ["--cache"],
      args: {
        name: "path",
        template: "filepaths",
      },
    },
    {
      name: "--support-info",
      description: "Print support information as JSON",
    },
    {
      name: ["-v", "--version"],
      description: "Print Prettier version",
    },
    {
      name: "--debug-check",
      description:
        "This will cause Prettier to print an error message if it detects that code correctness might have changed",
      exclusiveOn: ["-w", "--write"],
    },
    {
      name: "--no-error-on-unmatched-pattern",
      description: "Prevent errors when pattern is unmatched",
    },
    {
      name: "--cache",
      description: "Only format changed files",
      exclusiveOn: ["--stdin-filepath"],
    },
    {
      name: "--experimental-cli",
      description:
        "Use the experimental high-performance CLI (also enabled by PRETTIER_EXPERIMENTAL_CLI)",
    },
    {
      name: "--cache-location",
      description: "Path to the cache file",
      args: {
        name: "path",
        template: "filepaths",
      },
    },
    {
      name: "--cache-strategy",
      description: "Strategy for the cache to use for detecting changed files",
      dependsOn: ["--cache"],
      args: {
        name: "strategy",
        suggestions: ["metadata", "content"],
      },
    },
  ],
  args: {
    name: "file, dir or glob",
    template: ["filepaths", "folders"],
    isOptional: true,
    isVariadic: true,
  },
};

export default completionSpec;
