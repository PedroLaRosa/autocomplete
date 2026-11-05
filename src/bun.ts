import {
  keyValueList,
  filepaths,
  valueList,
} from "@tabsmith/autocomplete-generators";
import {
  npmScriptsGenerator,
  npmSearchGenerator,
  dependenciesGenerator,
} from "./npm";
import { npxSuggestions } from "./npx";
import { createCLIsGenerator } from "./yarn";

const icon =
  "data:image/svg+xml;base64,PHN2ZyBpZD0iQnVuIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4MCA3MCI+PHRpdGxlPkJ1biBMb2dvPC90aXRsZT48cGF0aCBpZD0iU2hhZG93IiBkPSJNNzEuMDksMjAuNzRjLS4xNi0uMTctLjMzLS4zNC0uNS0uNXMtLjMzLS4zNC0uNS0uNS0uMzMtLjM0LS41LS41LS4zMy0uMzQtLjUtLjUtLjMzLS4zNC0uNS0uNS0uMzMtLjM0LS41LS41LS4zMy0uMzQtLjUtLjVBMjYuNDYsMjYuNDYsMCwwLDEsNzUuNSwzNS43YzAsMTYuNTctMTYuODIsMzAuMDUtMzcuNSwzMC4wNS0xMS41OCwwLTIxLjk0LTQuMjMtMjguODMtMTAuODZsLjUuNS41LjUuNS41LjUuNS41LjUuNS41LjUuNUMxOS41NSw2NS4zLDMwLjE0LDY5Ljc1LDQyLDY5Ljc1YzIwLjY4LDAsMzcuNS0xMy40OCwzNy41LTMwQzc5LjUsMzIuNjksNzYuNDYsMjYsNzEuMDksMjAuNzRaIi8+PGcgaWQ9IkJvZHkiPjxwYXRoIGlkPSJCYWNrZ3JvdW5kIiBkPSJNNzMsMzUuN2MwLDE1LjIxLTE1LjY3LDI3LjU0LTM1LDI3LjU0UzMsNTAuOTEsMywzNS43QzMsMjYuMjcsOSwxNy45NCwxOC4yMiwxM1MzMy4xOCwzLDM4LDNzOC45NCw0LjEzLDE5Ljc4LDEwQzY3LDE3Ljk0LDczLDI2LjI3LDczLDM1LjdaIiBzdHlsZT0iZmlsbDojZmJmMGRmIi8+PHBhdGggaWQ9IkJvdHRvbV9TaGFkb3ciIGRhdGEtbmFtZT0iQm90dG9tIFNoYWRvdyIgZD0iTTczLDM1LjdhMjEuNjcsMjEuNjcsMCwwLDAtLjgtNS43OGMtMi43MywzMy4zLTQzLjM1LDM0LjktNTkuMzIsMjQuOTRBNDAsNDAsMCwwLDAsMzgsNjMuMjRDNTcuMyw2My4yNCw3Myw1MC44OSw3MywzNS43WiIgc3R5bGU9ImZpbGw6I2Y2ZGVjZSIvPjxwYXRoIGlkPSJMaWdodF9TaGluZSIgZGF0YS1uYW1lPSJMaWdodCBTaGluZSIgZD0iTTI0LjUzLDExLjE3QzI5LDguNDksMzQuOTQsMy40Niw0MC43OCwzLjQ1QTkuMjksOS4yOSwwLDAsMCwzOCwzYy0yLjQyLDAtNSwxLjI1LTguMjUsMy4xMy0xLjEzLjY2LTIuMywxLjM5LTMuNTQsMi4xNS0yLjMzLDEuNDQtNSwzLjA3LTgsNC43QzguNjksMTguMTMsMywyNi42MiwzLDM1LjdjMCwuNCwwLC44LDAsMS4xOUM5LjA2LDE1LjQ4LDIwLjA3LDEzLjg1LDI0LjUzLDExLjE3WiIgc3R5bGU9ImZpbGw6I2ZmZmVmYyIvPjxwYXRoIGlkPSJUb3AiIGQ9Ik0zNS4xMiw1LjUzQTE2LjQxLDE2LjQxLDAsMCwxLDI5LjQ5LDE4Yy0uMjguMjUtLjA2LjczLjMuNTksMy4zNy0xLjMxLDcuOTItNS4yMyw2LTEzLjE0QzM1LjcxLDUsMzUuMTIsNS4xMiwzNS4xMiw1LjUzWm0yLjI3LDBBMTYuMjQsMTYuMjQsMCwwLDEsMzksMTljLS4xMi4zNS4zMS42NS41NS4zNkM0MS43NCwxNi41Niw0My42NSwxMSwzNy45Myw1LDM3LjY0LDQuNzQsMzcuMTksNS4xNCwzNy4zOSw1LjQ5Wm0yLjc2LS4xN0ExNi40MiwxNi40MiwwLDAsMSw0NywxNy4xMmEuMzMuMzMsMCwwLDAsLjY1LjExYy45Mi0zLjQ5LjQtOS40NC03LjE3LTEyLjUzQzQwLjA4LDQuNTQsMzkuODIsNS4wOCw0MC4xNSw1LjMyWk0yMS42OSwxNS43NmExNi45NCwxNi45NCwwLDAsMCwxMC40Ny05Yy4xOC0uMzYuNzUtLjIyLjY2LjE4LTEuNzMsOC03LjUyLDkuNjctMTEuMTIsOS40NUMyMS4zMiwxNi40LDIxLjMzLDE1Ljg3LDIxLjY5LDE1Ljc2WiIgc3R5bGU9ImZpbGw6I2NjYmVhNztmaWxsLXJ1bGU6ZXZlbm9kZCIvPjxwYXRoIGlkPSJPdXRsaW5lIiBkPSJNMzgsNjUuNzVDMTcuMzIsNjUuNzUuNSw1Mi4yNy41LDM1LjdjMC0xMCw2LjE4LTE5LjMzLDE2LjUzLTI0LjkyLDMtMS42LDUuNTctMy4yMSw3Ljg2LTQuNjIsMS4yNi0uNzgsMi40NS0xLjUxLDMuNi0yLjE5QzMyLDEuODksMzUsLjUsMzgsLjVzNS42MiwxLjIsOC45LDMuMTRjMSwuNTcsMiwxLjE5LDMuMDcsMS44NywyLjQ5LDEuNTQsNS4zLDMuMjgsOSw1LjI3QzY5LjMyLDE2LjM3LDc1LjUsMjUuNjksNzUuNSwzNS43LDc1LjUsNTIuMjcsNTguNjgsNjUuNzUsMzgsNjUuNzVaTTM4LDNjLTIuNDIsMC01LDEuMjUtOC4yNSwzLjEzLTEuMTMuNjYtMi4zLDEuMzktMy41NCwyLjE1LTIuMzMsMS40NC01LDMuMDctOCw0LjdDOC42OSwxOC4xMywzLDI2LjYyLDMsMzUuNywzLDUwLjg5LDE4LjcsNjMuMjUsMzgsNjMuMjVTNzMsNTAuODksNzMsMzUuN0M3MywyNi42Miw2Ny4zMSwxOC4xMyw1Ny43OCwxMyw1NCwxMSw1MS4wNSw5LjEyLDQ4LjY2LDcuNjRjLTEuMDktLjY3LTIuMDktMS4yOS0zLTEuODRDNDIuNjMsNCw0MC40MiwzLDM4LDNaIi8+PC9nPjxnIGlkPSJNb3V0aCI+PGcgaWQ9IkJhY2tncm91bmQtMiIgZGF0YS1uYW1lPSJCYWNrZ3JvdW5kIj48cGF0aCBkPSJNNDUuMDUsNDNhOC45Myw4LjkzLDAsMCwxLTIuOTIsNC43MSw2LjgxLDYuODEsMCwwLDEtNCwxLjg4QTYuODQsNi44NCwwLDAsMSwzNCw0Ny43MSw4LjkzLDguOTMsMCwwLDEsMzEuMTIsNDNhLjcyLjcyLDAsMCwxLC44LS44MUg0NC4yNkEuNzIuNzIsMCwwLDEsNDUuMDUsNDNaIiBzdHlsZT0iZmlsbDojYjcxNDIyIi8+PC9nPjxnIGlkPSJUb25ndWUiPjxwYXRoIGlkPSJCYWNrZ3JvdW5kLTMiIGRhdGEtbmFtZT0iQmFja2dyb3VuZCIgZD0iTTM0LDQ3Ljc5YTYuOTEsNi45MSwwLDAsMCw0LjEyLDEuOSw2LjkxLDYuOTEsMCwwLDAsNC4xMS0xLjksMTAuNjMsMTAuNjMsMCwwLDAsMS0xLjA3LDYuODMsNi44MywwLDAsMC00LjktMi4zMSw2LjE1LDYuMTUsMCwwLDAtNSwyLjc4QzMzLjU2LDQ3LjQsMzMuNzYsNDcuNiwzNCw0Ny43OVoiIHN0eWxlPSJmaWxsOiNmZjYxNjQiLz48cGF0aCBpZD0iT3V0bGluZS0yIiBkYXRhLW5hbWU9Ik91dGxpbmUiIGQ9Ik0zNC4xNiw0N2E1LjM2LDUuMzYsMCwwLDEsNC4xOS0yLjA4LDYsNiwwLDAsMSw0LDEuNjljLjIzLS4yNS40NS0uNTEuNjYtLjc3YTcsNywwLDAsMC00LjcxLTEuOTMsNi4zNiw2LjM2LDAsMCwwLTQuODksMi4zNkE5LjUzLDkuNTMsMCwwLDAsMzQuMTYsNDdaIi8+PC9nPjxwYXRoIGlkPSJPdXRsaW5lLTMiIGRhdGEtbmFtZT0iT3V0bGluZSIgZD0iTTM4LjA5LDUwLjE5YTcuNDIsNy40MiwwLDAsMS00LjQ1LTIsOS41Miw5LjUyLDAsMCwxLTMuMTEtNS4wNSwxLjIsMS4yLDAsMCwxLC4yNi0xLDEuNDEsMS40MSwwLDAsMSwxLjEzLS41MUg0NC4yNmExLjQ0LDEuNDQsMCwwLDEsMS4xMy41MSwxLjE5LDEuMTksMCwwLDEsLjI1LDFoMGE5LjUyLDkuNTIsMCwwLDEtMy4xMSw1LjA1QTcuNDIsNy40MiwwLDAsMSwzOC4wOSw1MC4xOVptLTYuMTctNy40Yy0uMTYsMC0uMi4wNy0uMjEuMDlhOC4yOSw4LjI5LDAsMCwwLDIuNzMsNC4zN0E2LjIzLDYuMjMsMCwwLDAsMzguMDksNDlhNi4yOCw2LjI4LDAsMCwwLDMuNjUtMS43Myw4LjMsOC4zLDAsMCwwLDIuNzItNC4zNy4yMS4yMSwwLDAsMC0uMi0uMDlaIi8+PC9nPjxnIGlkPSJGYWNlIj48ZWxsaXBzZSBpZD0iUmlnaHRfQmx1c2giIGRhdGEtbmFtZT0iUmlnaHQgQmx1c2giIGN4PSI1My4yMiIgY3k9IjQwLjE4IiByeD0iNS44NSIgcnk9IjMuNDQiIHN0eWxlPSJmaWxsOiNmZWJiZDAiLz48ZWxsaXBzZSBpZD0iTGVmdF9CbHVjaCIgZGF0YS1uYW1lPSJMZWZ0IEJsdWNoIiBjeD0iMjIuOTUiIGN5PSI0MC4xOCIgcng9IjUuODUiIHJ5PSIzLjQ0IiBzdHlsZT0iZmlsbDojZmViYmQwIi8+PHBhdGggaWQ9IkV5ZXMiIGQ9Ik0yNS43LDM4LjhhNS41MSw1LjUxLDAsMSwwLTUuNS01LjUxQTUuNTEsNS41MSwwLDAsMCwyNS43LDM4LjhabTI0Ljc3LDBBNS41MSw1LjUxLDAsMSwwLDQ1LDMzLjI5LDUuNSw1LjUsMCwwLDAsNTAuNDcsMzguOFoiIHN0eWxlPSJmaWxsLXJ1bGU6ZXZlbm9kZCIvPjxwYXRoIGlkPSJJcmlzIiBkPSJNMjQsMzMuNjRhMi4wNywyLjA3LDAsMSwwLTIuMDYtMi4wN0EyLjA3LDIuMDcsMCwwLDAsMjQsMzMuNjRabTI0Ljc3LDBhMi4wNywyLjA3LDAsMSwwLTIuMDYtMi4wN0EyLjA3LDIuMDcsMCwwLDAsNDguNzUsMzMuNjRaIiBzdHlsZT0iZmlsbDojZmZmO2ZpbGwtcnVsZTpldmVub2RkIi8+PC9nPjwvc3ZnPg==";

/** Suggest common ports for the various --inspect options */
const inspectArgs: Fig.SingleOrArray<Fig.Arg> = {
  name: "[host:]port",
  isOptional: true,
  suggestions: [
    {
      name: "3000",
      icon: "fig://icon?type=box",
      description: "Serve on port 3000",
    },
    {
      name: "8080",
      icon: "fig://icon?type=box",
      description: "Serve on port 8080",
    },
  ],
  description: "Activate inspector on particular port and/or hostname",
};

const loaders = [
  "js",
  "jsx",
  "ts",
  "tsx",
  "json",
  "toml",
  "text",
  "file",
  "wasm",
  "napi",
];
/** Format from https://github.com/oven-sh/bun/blob/dcbcf9803a19be989c0f48d22a50a43731fcfacd/src/cli.zig */
const sharedPublicParams: Fig.Option[] = [
  {
    name: ["-h", "--help"],
    description: "Display this help and exit",
  },
  {
    name: ["-b", "--bun"],
    description:
      "Force a script or package to use Bun's runtime instead of Node.js (via symlinking node)",
  },
  {
    name: "--cwd",
    args: {
      name: "path",
      description:
        "Absolute path to resolve files & entry points from. This just changes the process' cwd",
    },
  },
  {
    name: ["-c", "--config"],
    args: {
      name: "path",
      template: "filepaths",
      description: "Config file to load Bun from (e.g. -c bunfig.toml)",
      isOptional: true,
    },
    description: "Load config (bunfig.toml)",
  },
  {
    name: "--extension-order",
    args: {
      name: "order",
      isVariadic: true,
      description: "Defaults to: .tsx,.ts,.jsx,.js,.json",
    },
  },
  {
    name: "--jsx-factory",
    args: {
      name: "name",
      suggestions: ["React.createElement", "h", "preact.h"],
    },
    description: `Changes the function called when compiling JSX elements using the classic JSX runtime`,
  },
  {
    name: "--jsx-fragment",
    priority: 49,
    args: { name: "string", isOptional: true },
    insertValue: "--jsx-fragment='{cursor}'",
    description: "Changes the function called when compiling JSX fragments",
  },
  {
    name: "--jsx-import-source",
    args: { name: "module", suggestions: ["react"] },
    description: `Declares the module specifier to be used for importing the jsx and jsxs factory functions. Default: "react"`,
  },
  {
    name: "--jsx-runtime",
    args: { name: "name", suggestions: ["automatic", "classic"] },
    description: `"automatic" (default) or "classic"`,
  },
  {
    name: ["-r", "--preload"],
    args: {
      name: "args",
      isVariadic: true,
      description: "Import a module before other modules are loaded",
    },
  },
  {
    name: "--main-fields",
    args: {
      name: "args",
      isVariadic: true,
      description:
        "Main fields to lookup in package.json. Defaults to --target dependent",
    },
  },
  {
    name: "--no-summary",
    description: "Don't print a summary (when generating .bun)",
  },
  {
    name: ["-v", "--version"],
    description: "Print version and exit",
  },
  {
    name: "--revision",
    description: "Print version with revision and exit",
  },
  {
    name: "--tsconfig-override",
    args: {
      name: "overrides",
      description: "Load tsconfig from path instead of cwd/tsconfig.json",
    },
  },
  {
    name: ["-d", "--define"],
    args: {
      name: "k=v",
      isVariadic: true,
      description:
        "Substitute key=value while parsing, e.g. --define process.env.NODE_ENV=development",
    },
  },
  {
    name: ["-e", "--external"],
    args: {
      name: "args",
      isVariadic: true,
      description:
        "Exclude module from transpilation (can use * wildcards). ex: -e react",
    },
  },
  {
    name: ["-l", "--loader"],
    args: {
      name: "args",
      isVariadic: true,
      description:
        "Parse files with .ext:loader, e.g. --loader .js:jsx. Valid loaders: js, jsx, ts, tsx, json, toml, text, file, wasm, napi",
      generators: keyValueList({
        keys: loaders.map((loader) => "." + loader),
        values: loaders,
      }),
    },
  },
  {
    name: "--origin",
    deprecated: true,
    args: {
      name: "args",
      description: 'Rewrite import URLs to start with --origin. Default: ""',
    },
  },
  {
    name: ["-p", "--port"],
    args: {
      name: "args",
      description: 'Port to serve Bun\'s dev server on. Default: "3000"',
    },
  },
  {
    name: "--smol",
    description: "Use less memory, but run garbage collection more often",
  },
  {
    name: "--minify",
    description: "Minify (experimental)",
    priority: 50,
  },
  {
    name: "--minify-syntax",
    description: "Minify syntax and inline data (experimental)",
  },
  {
    name: "--minify-whitespace",
    description: "Minify whitespace (experimental)",
  },
  {
    name: "--minify-identifiers",
    description: "Minify identifiers",
  },
  {
    name: "--no-macros",
    description:
      "Disable macros from being executed in the bundler, transpiler and runtime",
  },
  {
    name: "--target",
    description: "Target environment",
    priority: 50,
    args: {
      generators: valueList({
        values: ["node", "browser", "bun"],
      }),
    },
  },
  {
    name: "--inspect",
    description: "Activate Bun's debugger for a file",
    requiresSeparator: true,
    args: inspectArgs,
  },
  {
    name: "--inspect-wait",
    description:
      "Activate Bun's Debugger, wait for a connection before executing",
    requiresSeparator: true,
    args: inspectArgs,
  },
  {
    name: "--inspect-brk",
    description:
      "Activate Bun's Debugger, set breakpoint on first line of code and wait",
    requiresSeparator: true,
    args: inspectArgs,
  },
  {
    name: "--if-present",
    description: "Exit without an error if the entrypoint does not exist",
  },
  {
    name: "--conditions",
    description: "Pass custom conditions to resolve",
    args: {
      name: "conditions",
    },
  },
];

// note: we are keeping --port and --origin as it can be reused for bun build and elsewhere
const notBunDevFlags: Fig.Option[] = [
  {
    name: "--hot",
    description:
      "Enable auto reload in the Bun runtime, test runner, or bundler",
    priority: 50,
  },
  {
    name: "--watch",
    description: "Automatically restart the process on file change",
    priority: 50,
  },
  {
    name: "--no-clear-screen",
    description:
      "Disable clearing the terminal screen on reload when --hot or --watch is enabled",
  },
  {
    name: "--env-file",
    description: "Load environment variables from the specified file(s)",
    isRepeatable: true,
    args: {
      name: "path",
      template: "filepaths",
    },
  },
  {
    name: "--no-install",
    description: "Disable auto install in the Bun runtime",
  },
  {
    name: "-i",
    description:
      "Automatically install dependencies and use global cache in Bun's runtime, equivalent to --install=fallback",
  },
  {
    name: "--install",
    args: {
      name: "arg",
      description: `Install dependencies automatically when no node_modules are present, default: "auto". "force" to ignore node_modules, fallback to install any missing`,
      suggestions: ["auto", "force", "fallback", "disable"],
    },
  },
  {
    name: "--prefer-offline",
    description:
      "Skip staleness checks for packages in the Bun runtime and resolve from disk",
  },
  {
    name: "--prefer-latest",
    description:
      "Use the latest matching versions of packages in the Bun runtime, always checking npm",
  },
  {
    name: "--silent",
    description: "Don't repeat the command for bun run",
  },
];

const buildOnlyParams: Fig.Option[] = [
  {
    name: "--production",
    description: "Set NODE_ENV=production and enable minification",
    priority: 50,
  },
  {
    name: "--compile",
    description:
      "Generate a standalone Bun executable containing your bundled code",
    priority: 50,
  },
  {
    name: "--compile-exec-argv",
    description: "Prepend arguments to the standalone executable's execArgv",
    args: {
      name: "args",
    },
  },
  {
    name: "--bytecode",
    description: "Use a bytecode cache when compiling",
  },
  {
    name: "--format",
    description:
      'Specifies the module format to build to. Defaults to "esm", or "cjs" with --bytecode',
    args: {
      name: "args",
      suggestions: ["esm", "cjs", "iife"],
    },
  },
  {
    name: "--packages",
    description: "Add dependencies to bundle or keep them external",
    args: {
      name: "mode",
      suggestions: ["external", "bundle"],
    },
  },
  {
    name: "--env",
    description:
      "Inline environment variables into the bundle as process.env.${name}. Use a glob like 'FOO_PUBLIC_*' to inline a prefix. Default: 'disable'",
    args: {
      name: "mode",
      suggestions: ["disable"],
    },
  },
  {
    name: "--metafile",
    description: "Write a JSON file with metadata about the build",
    args: {
      name: "path",
    },
  },
  {
    name: "--banner",
    description:
      'Add a banner to the bundled output such as "use client" for React Server Components',
    args: {
      name: "string",
    },
  },
  {
    name: "--footer",
    description:
      "Add a footer to the bundled output such as // built with bun!",
    args: {
      name: "string",
    },
  },
  {
    name: "--keep-names",
    description: "Preserve original function and class names when minifying",
  },
  {
    name: "--css-chunking",
    description:
      "Chunk CSS files together to reduce duplicated CSS loaded in a browser",
  },
  {
    name: "--app",
    description: "Build a web app for production using Bun Bake (experimental)",
  },
  {
    name: "--windows-hide-console",
    description:
      "When using --compile targeting Windows, prevent a console window from opening",
  },
  {
    name: "--windows-icon",
    description:
      "When using --compile targeting Windows, set an executable icon",
    args: {
      name: "path",
      template: "filepaths",
    },
  },
  {
    name: "--outdir",
    description: 'Default to "dist" if multiple files',
    priority: 50,
    args: {
      name: "path",
    },
  },
  {
    name: "--outfile",
    description: "Write to a file",
    priority: 50,
    args: {
      name: "path",
    },
  },
  {
    name: "--root",
    description: "Root directory used for multiple entry points",
    args: {
      name: "path",
    },
  },
  {
    name: "--splitting",
    description: "Enable code splitting",
    priority: 50,
  },
  {
    name: "--public-path",
    description: "A prefix to be appended to any import paths in bundled code",
    args: {
      name: "args",
    },
  },
  {
    name: "--sourcemap",
    description:
      "Build with sourcemaps - 'linked', 'inline', 'external', or 'none'",
    requiresSeparator: "-",
    priority: 50,
    args: {
      name: "args",
      isOptional: true,
      suggestions: ["linked", "inline", "external", "none"],
    },
  },
  {
    name: "--entry-naming",
    description:
      'Customize entry point filenames. Defaults to "[dir]/[name].[ext]"',
    args: {
      name: "args",
    },
  },
  {
    name: "--chunk-naming",
    description: 'Customize chunk filenames. Defaults to "[name]-[hash].[ext]"',
    args: {
      name: "args",
    },
  },
  {
    name: "--asset-naming",
    description: 'Customize asset filenames. Defaults to "[name]-[hash].[ext]"',
    args: {
      name: "args",
    },
  },
  {
    name: "--server-components",
    description: "Enable React Server Components (experimental)",
  },
  {
    name: "--no-bundle",
    description: "Transpile file only, do not bundle",
  },
];

const testOnlyParams: Fig.Option[] = [
  {
    name: "--timeout",
    description: "Set the per-test timeout in milliseconds, default is 5000",
    args: {
      name: "number",
    },
  },
  {
    name: ["-u", "--update-snapshots"],
    description: "Update snapshot files",
  },
  {
    name: "--retry",
    description:
      "Default retry count for all tests, overridden by per-test { retry: N }",
    args: {
      name: "number",
    },
  },
  {
    name: "--concurrent",
    description: "Treat all tests as `test.concurrent()` tests",
  },
  {
    name: "--max-concurrency",
    description:
      "Maximum number of concurrent tests to execute at once. Default is 20",
    args: {
      name: "number",
    },
  },
  {
    name: "--randomize",
    description: "Run tests in random order",
  },
  {
    name: "--seed",
    description: "Set the random seed for test randomization",
    args: {
      name: "number",
    },
  },
  {
    name: "--path-ignore-patterns",
    description: "Glob patterns for test file paths to ignore",
    isRepeatable: true,
    args: {
      name: "pattern",
    },
  },
  {
    name: "--rerun-each",
    description:
      "Re-run each test file <NUMBER> times, helps catch certain bugs",
    args: {
      name: "number",
    },
  },
  {
    name: "--only",
    description: 'Only run tests that are marked with "test.only()"',
  },
  {
    name: "--todo",
    description: 'Include tests that are marked with "test.todo()"',
  },
  {
    name: "--coverage",
    description: "Generate a coverage profile",
  },
  {
    name: "--coverage-reporter",
    description: "Report coverage in 'text' and/or 'lcov'. Defaults to 'text'",
    isRepeatable: true,
    args: {
      name: "reporter",
      suggestions: ["text", "lcov"],
    },
  },
  {
    name: "--coverage-dir",
    description: "Directory for coverage files. Defaults to 'coverage'",
    args: {
      name: "path",
      template: "folders",
    },
  },
  {
    name: "--reporter",
    description:
      "Test output reporter format. 'junit' requires --reporter-outfile. Default: console output",
    args: {
      name: "format",
      suggestions: ["junit", "dots"],
    },
  },
  {
    name: "--reporter-outfile",
    description: "Output file path for the reporter format",
    args: {
      name: "path",
    },
  },
  {
    name: "--dots",
    description: "Enable dots reporter. Shorthand for --reporter=dots",
  },
  {
    name: "--bail",
    description:
      "Exit the test suite after <NUMBER> failures. If you do not specify a number, it defaults to 1",
    args: {
      name: "number",
      isOptional: true,
    },
  },
  {
    name: ["-t", "--test-name-pattern"],
    description: "Run only tests with a name that matches the given regex",
    args: {
      name: "pattern",
    },
  },
];

const debugParams: Fig.Option[] = [
  {
    name: "--dump-environment-variables",
    description:
      "Dump environment variables from .env and process as JSON and quit. Useful for debugging",
    priority: 49,
  },
  {
    name: "--dump-limits",
    description: "Dump system limits. Useful for debugging",
    priority: 49,
  },
];

const publicParams = [...sharedPublicParams, ...notBunDevFlags];
const buildParams = [...publicParams, ...buildOnlyParams, ...debugParams];
const testParams = [...publicParams, ...testOnlyParams, ...debugParams];

const dependencyOptions: Fig.Option[] = [
  {
    name: ["-c", "--config"],
    args: {
      name: "path",
      template: "filepaths",
      isOptional: true,
    },
    description: "Load config (bunfig.toml)",
  },
  {
    name: ["-y", "--yarn"],
    description: "Write a yarn.lock file (yarn v1)",
  },
  {
    name: ["-p", "--production"],
    description: "Don't install devDependencies",
  },
  {
    name: "--no-save",
    description: "Don't save a lockfile",
  },
  {
    name: "--save",
    description: "Save to package.json",
  },
  {
    name: "--dry-run",
    description: "Don't install anything",
  },
  {
    name: "--frozen-lockfile",
    description: "Disallow changes to lockfile",
  },
  {
    name: ["-f", "--force"],
    description:
      "Always request the latest versions from the registry & reinstall all dependencies",
  },
  {
    name: "--cache-dir",
    args: { name: "path", template: "folders" },
    description: "Store & load cached data from a specific directory path",
  },
  {
    name: "--no-cache",
    description: "Ignore manifest cache entirely",
  },
  {
    name: "--silent",
    description: "Don't log anything",
  },
  {
    name: "--verbose",
    description: "Excessively verbose logging",
  },
  {
    name: ["-g", "--global"],
    description: "Install globally",
  },
  {
    name: "--cwd",
    args: { name: "path", template: "folders" },
    description: "Set a specific cwd",
  },
  {
    name: "--backend",
    args: {
      name: "syscall",
      suggestions: ["clonefile", "hardlink", "copyfile"],
    },
    description:
      "Platform-specific optimizations for installing dependencies. 'clonefile' (macOS default), 'hardlink' (Linux and Windows default), 'copyfile'",
  },
  {
    name: "--filter",
    isRepeatable: true,
    args: { name: "pattern" },
    description: "Install dependencies for the matching workspaces",
  },
  {
    name: "--linker",
    args: { name: "strategy", suggestions: ["isolated", "hoisted"] },
    description: "Linker strategy",
  },
  {
    name: "--omit",
    isRepeatable: true,
    args: { name: "type", suggestions: ["dev", "optional", "peer"] },
    description:
      "Exclude 'dev', 'optional', or 'peer' dependencies from install",
  },
  {
    name: "--lockfile-only",
    description: "Generate a lockfile without installing dependencies",
  },
  {
    name: "--registry",
    args: { name: "url" },
    description:
      "Use a specific registry by default, overriding .npmrc, bunfig.toml and environment variables",
  },
  {
    name: "--ca",
    args: { name: "cert" },
    description: "Provide a Certificate Authority signing certificate",
  },
  {
    name: "--cafile",
    args: { name: "path", template: "filepaths" },
    description: "The same as `--ca`, but is a file path to the certificate",
  },
  {
    name: "--concurrent-scripts",
    args: { name: "number" },
    description: "Maximum number of concurrent jobs for lifecycle scripts",
  },
  {
    name: "--network-concurrency",
    args: { name: "number" },
    description: "Maximum number of concurrent network requests (default 48)",
  },
  {
    name: "--minimum-release-age",
    args: { name: "seconds" },
    description: "Only install packages published at least N seconds ago",
  },
  {
    name: "--cpu",
    args: { name: "arch", suggestions: ["x64", "arm64", "*"] },
    description: "Override CPU architecture for optional dependencies",
  },
  {
    name: "--os",
    args: { name: "os", suggestions: ["linux", "darwin", "*"] },
    description: "Override operating system for optional dependencies",
  },
  {
    name: "--link-native-bins",
    deprecated: true,
    args: {
      name: "str",
      isVariadic: true,
    },
    description:
      "Link 'bin' from a matching platform-specific 'optionalDependencies' instead. Default: esbuild, turbo",
  },
  {
    name: "--help",
    description: "Print the help menu",
  },
  {
    name: "--no-progress",
    description: "Disable the progress bar",
  },
  {
    name: "--no-summary",
    description: "Don't print a summary",
  },
  {
    name: "--no-verify",
    description: "Skip verifying integrity of newly downloaded packages",
  },
  {
    name: "--ignore-scripts",
    description:
      "Skip lifecycle scripts in the project's package.json (dependency scripts are never run)",
  },
  {
    name: ["-d", "--dev", "-D", "--development"],
    description: "Install as devDependency",
    priority: 75,
    isRepeatable: false,
  },
  {
    name: "--exact",
    description: "Install exact version",
  },
  {
    name: "--optional",
    description: "Install as optionalDependency",
  },
];

/** Generate the globally linked packages stored in $BUN_INSTALL directory */
const bunLinksGenerator: Fig.Generator = {
  script: [
    "command",
    "sh",
    "-c",
    "find $BUN_INSTALL/install/global/node_modules -type l -o -type d -maxdepth 2 | awk -F 'node_modules/' '{print $2}'",
  ],
  postProcess(out) {
    return out.split("\n").map((dep) => {
      return {
        name: dep,
        description: "Link to this package",
        icon: "📦",
      };
    });
  },
  cache: {
    strategy: "stale-while-revalidate",
    ttl: 60 * 60 * 24, // 24 hours
  },
};

const spec: Fig.Spec = {
  name: "bun",
  description:
    "A fast bundler, transpiler, JavaScript Runtime and package manager for web software",
  icon,
  args: [
    {
      name: "file",
      generators: [
        // js jsx mjs cjs ts tsx mts cts
        filepaths({ matches: /\.[mc]?[jt]sx?$/ }),
        npmScriptsGenerator,
      ],
    },
    {
      name: "args",
    },
  ],
  // These flags are used before the subcommand or file
  options: [
    ...publicParams.filter(
      (param) =>
        param.name.includes("--inspect") ||
        param.name.includes("--hot") ||
        param.name.includes("--watch") ||
        param.name.includes("--env-file")
    ),
    {
      name: ["-e", "--eval"],
      description: "Evaluate argument as a script",
      args: { name: "script" },
    },
    {
      name: ["-p", "--print"],
      description: "Evaluate argument as a script and print the result",
      args: { name: "script" },
    },
  ],
  subcommands: [
    {
      name: ["c", "create"],
      icon,
      description: "Start a new project from a template",
      args: [
        {
          name: "template",
          description: "Package from @bun-examples, GitHub repo, or local file",
          suggestions: [
            "react",
            "next",
            "hono",
            "discord-interactions",
            "blank",
            "bun-bakery",
            ...npxSuggestions
              .filter((bin) =>
                typeof bin.name === "string"
                  ? bin.name.startsWith("create-")
                  : bin.name.some((name) => name.startsWith("create-"))
              )
              .map((bin) => {
                let name = bin.name;
                if (typeof name !== "string") name = name[0];
                name = name.replace(/^create-/, "");

                return { ...bin, name, priority: 76 };
              }),
          ],
          generators: [
            { template: "folders" },
            {
              custom: async (_, executeCommand, context) => {
                const { stdout } = await executeCommand({
                  command: "ls",
                  args: [
                    "-1",
                    `${context.environmentVariables["HOME"]}/.bun-create`,
                  ],
                });
                return stdout.split("\n").map((name) => ({
                  name,
                }));
              },
            },
            { script: ["command", "ls", "-1", ".bun-create"], splitOn: "\n" },
            createCLIsGenerator,
          ],
          loadSpec: async (token) => ({
            name: "create-" + token,
            type: "global",
          }),
          isCommand: true,
        },
        {
          name: "name",
          template: "folders",
          suggestCurrentToken: true,
        },
      ],
      options: [
        { name: "--force", description: "Overwrite existing files" },
        { name: "--no-install", description: "Don't install node_modules" },
        { name: "--no-git", description: "Don't create a git repository" },
        { name: "--verbose", description: "Too many logs" },
        {
          name: "--no-package-json",
          description: "Disable package.json transforms",
        },
        {
          name: "--open",
          description: "On finish, start bun and open in browser",
        },
      ],
    },
    {
      name: "run",
      icon,
      description: "Run a package.json script or executable",
      args: {
        name: "script",
        filterStrategy: "fuzzy",
        generators: [
          filepaths({
            extensions: ["ts", "tsx", "js", "jsx", "mjs", "cjs"],
          }),
          npmScriptsGenerator,
        ],
      },
      options: [
        {
          name: ["-F", "--filter"],
          description:
            "Run a script in all workspace packages matching the pattern",
          isRepeatable: true,
          args: { name: "pattern" },
        },
        {
          name: "--workspaces",
          description:
            'Run a script in all workspace packages (from the "workspaces" field in package.json)',
        },
        {
          name: "--elide-lines",
          description:
            "Truncate each script's output to its last N lines when using --filter. Default 0 shows all lines",
          args: { name: "number" },
        },
        {
          name: "--parallel",
          description:
            "Run multiple scripts or workspace scripts concurrently with prefixed output",
        },
        {
          name: "--sequential",
          description:
            "Run multiple scripts or workspace scripts one after another with prefixed output",
        },
        {
          name: "--no-exit-on-error",
          description:
            "Continue running other scripts when one fails (with --parallel/--sequential)",
        },
        {
          name: "--shell",
          description: "Control the shell used for package.json scripts",
          args: { name: "shell", suggestions: ["bun", "system"] },
        },
      ],
    },
    {
      name: "exec",
      icon,
      description: "Run a shell script directly with Bun",
      args: {
        name: "script",
        description: "Shell script to run with Bun Shell",
      },
    },
    {
      name: ["i", "install"],
      icon: "📦",
      description: "Install dependencies for a package.json",
      options: dependencyOptions,
    },
    {
      name: ["a", "add"],
      icon: "📦",
      description: "Add a dependency to package.json",
      options: dependencyOptions,
      args: {
        name: "package",
        isVariadic: true,
        debounce: true,
        generators: npmSearchGenerator,
        filterStrategy: "fuzzy",
      },
    },
    {
      name: ["rm", "remove"],
      icon: "📦",
      description: "Remove a dependency from package.json",
      options: dependencyOptions,
      args: {
        name: "package",
        filterStrategy: "fuzzy",
        generators: dependenciesGenerator,
        isVariadic: true,
      },
    },
    {
      name: ["build", "bun"],
      icon,
      description: "Bundle files using Bun's native bundler",
      args: {
        name: "entrypoints",
        isVariadic: true,
        generators: filepaths({
          extensions: ["ts", "tsx", "js", "jsx", "mjs", "cjs"],
        }),
        description:
          "Entrypoint to bundle. If multiple entrypoints provided, must specify --outdir",
      },
      options: buildParams,
    },
    {
      name: ["up", "update"],
      icon,
      description: "Update outdated dependencies",
      options: [
        ...dependencyOptions,
        {
          name: ["-L", "--latest"],
          description: "Update packages to their latest versions",
        },
        {
          name: ["-i", "--interactive"],
          description:
            "Show an interactive list of outdated packages to select for update",
        },
      ],
      args: {
        name: "package",
        filterStrategy: "fuzzy",
        isOptional: true,
        generators: dependenciesGenerator,
        isVariadic: true,
      },
    },
    {
      name: "outdated",
      icon: "📦",
      description: "Display latest versions of outdated dependencies",
      args: {
        name: "filter",
        isOptional: true,
        isVariadic: true,
        generators: dependenciesGenerator,
      },
      options: [
        {
          name: ["-F", "--filter"],
          description:
            "Display outdated dependencies for each matching workspace",
          isRepeatable: true,
          args: { name: "pattern" },
        },
        {
          name: ["-r", "--recursive"],
          description: "Check outdated packages in all workspaces",
        },
      ],
    },
    {
      name: "audit",
      icon: "📦",
      description: "Check installed packages for vulnerabilities",
      options: [
        {
          name: "--json",
          description: "Output in JSON format",
        },
        {
          name: "--audit-level",
          description: "Only report vulnerabilities at this severity or higher",
          args: {
            name: "level",
            suggestions: ["low", "moderate", "high", "critical"],
          },
        },
        {
          name: ["-p", "-P", "--prod", "--production"],
          description:
            "Only audit packages reachable through dependencies, optionalDependencies, or peerDependencies",
        },
        {
          name: "--omit",
          description: "Skip packages only reachable through the given type",
          isRepeatable: true,
          args: { name: "type", suggestions: ["dev", "optional", "peer"] },
        },
        {
          name: "--ignore",
          description: "Ignore an advisory by GHSA ID or numeric ID",
          isRepeatable: true,
          args: { name: "id" },
        },
      ],
      subcommands: [
        {
          name: "fix",
          description:
            "Upgrade vulnerable packages to the lowest non-vulnerable version",
          options: [
            {
              name: "--latest",
              description:
                "Rewrite ranges in your own package.json and catalogs when they block a fix",
            },
            {
              name: "--dry-run",
              description: "Print the plan without installing",
            },
            {
              name: "--json",
              description: "Output the plan and result in JSON format",
            },
          ],
        },
      ],
    },
    {
      name: "why",
      icon: "📦",
      description: "Explain why a package is installed",
      args: {
        name: "package",
        filterStrategy: "fuzzy",
        generators: dependenciesGenerator,
      },
      options: [
        {
          name: "--top",
          description: "Show only the top-level dependencies",
        },
        {
          name: "--depth",
          description: "Maximum depth of the dependency tree to display",
          args: { name: "number" },
        },
      ],
    },
    {
      name: "info",
      icon: "📦",
      description: "Display package metadata from the registry",
      args: {
        name: "package",
        debounce: true,
        generators: npmSearchGenerator,
        filterStrategy: "fuzzy",
      },
      options: [
        {
          name: "--json",
          description: "Output in JSON format",
        },
      ],
    },
    {
      name: "publish",
      icon: "📦",
      description: "Publish a package to the npm registry",
      args: {
        name: "tarball",
        isOptional: true,
        generators: filepaths({ extensions: ["tgz"] }),
      },
      options: [
        {
          name: "--access",
          description: "Set access level for scoped packages",
          args: { name: "level", suggestions: ["public", "restricted"] },
        },
        {
          name: "--tag",
          description: 'Tag the release. Default is "latest"',
          args: { name: "tag" },
        },
        {
          name: "--otp",
          description: "Provide a one-time password for authentication",
          args: { name: "code" },
        },
        {
          name: "--auth-type",
          description:
            "Specify the type of one-time password authentication (default is 'web')",
          args: { name: "type", suggestions: ["web", "legacy"] },
        },
        {
          name: "--gzip-level",
          description: "Specify a custom compression level for gzip (0-9)",
          args: { name: "level" },
        },
        {
          name: "--dry-run",
          description: "Perform a dry run without publishing",
        },
      ],
    },
    {
      name: "patch",
      icon: "📦",
      description: "Prepare a package for patching",
      args: {
        name: "package",
        filterStrategy: "fuzzy",
        generators: dependenciesGenerator,
      },
      options: [
        {
          name: "--commit",
          description: "Install a package containing modifications in `dir`",
        },
        {
          name: "--patches-dir",
          description:
            "The directory to put the patch file in (only if --commit is used)",
          args: { name: "path", template: "folders" },
        },
      ],
    },
    {
      name: "patch-commit",
      icon: "📦",
      description: "Generate a patch file for a patched package (pnpm compat)",
      args: {
        name: "package",
        filterStrategy: "fuzzy",
        generators: dependenciesGenerator,
      },
      options: [
        {
          name: "--patches-dir",
          description: "The directory to put the patch file in",
          args: { name: "path", template: "folders" },
        },
      ],
    },
    {
      name: "prune",
      icon: "📦",
      description:
        "Remove packages from node_modules that are not defined in bun.lock",
      options: [
        {
          name: "--dry-run",
          description: "List what would be removed without deleting anything",
        },
        {
          name: "--production",
          description: "Also remove devDependencies",
        },
        {
          name: "--filter",
          description: "Prune only the matching workspaces",
          isRepeatable: true,
          args: { name: "pattern" },
        },
        {
          name: "--omit",
          description: "Also remove 'dev', 'optional', or 'peer' dependencies",
          isRepeatable: true,
          args: { name: "type", suggestions: ["dev", "optional", "peer"] },
        },
      ],
    },
    {
      name: "link",
      icon: "📦",
      description:
        "Run without an argument to register this package to the global package registry. Uses the name field from package.json",
      args: {
        name: "package",
        filterStrategy: "fuzzy",
        isOptional: true,
        generators: bunLinksGenerator,
        description: "Install a package from the global package registry",
      },
      options: [
        {
          name: "--save",
          description: "Save to package.json",
          dependsOn: ["package"],
        },
      ],
    },
    {
      name: "unlink",
      icon: "📦",
      description: "Unlink this package from the global package registry",
      // Unliking a package by name is not yet implemented. Use bunLinksGenerator once it is implemented.
    },
    {
      name: "upgrade",
      icon,
      description: "Get the latest version of bun",
      options: [
        {
          name: "--canary",
          description: "Install the latest canary release",
        },
      ],
    },
    {
      name: "test",
      icon,
      description: "Run unit tests with Bun",
      args: {
        name: "files",
        generators: {
          // Suggest test files -> https://bun.sh/docs/cli/test. (not in node_modules or .git)
          script: [
            "command",
            "sh",
            "-c",
            'find $(npm prefix) | grep -E ".*.(test|_test|spec|_spec).(ts|tsx|js|jsx)$" | grep -vE ".*/node_modules/.*" | sed "s|$(npm prefix)/||"',
          ],
          postProcess(out) {
            return out.split("\n").map((file) => {
              return {
                name: file.split("/").pop(),
                priority: 76,
                description: `run ${file}`,
                insertValue: file,
              };
            });
          },
          cache: {
            strategy: "stale-while-revalidate",
            ttl: 60 * 60 * 24, // 24 hours
          },
        },
        isVariadic: true,
        filterStrategy: "fuzzy",
        isOptional: true,
        description: "Test files to run",
      },
      options: testParams,
    },
    {
      name: "pm",
      icon,
      description: "Set of utilities for working with Bun's package manager",
      subcommands: [
        {
          name: "bin",
          description: "Print the path to bin folder",
        },
        {
          name: "cache",
          description: "Print the path to the cache folder",
          subcommands: [
            {
              name: "rm",
              description: "Clear the cache",
            },
          ],
        },
        {
          name: "hash",
          description: "Generate & print the hash of the current lockfile",
        },
        {
          name: "hash-print",
          description: "Print the hash stored in the current lockfile",
        },
        {
          name: "hash-string",
          description: "Print the string used to hash the lockfile",
        },
        {
          name: "ls",
          description:
            "List the dependency tree according to the current lockfile",
          options: [
            {
              name: ["-a", "--all"],
              description: "List the entire dependency tree",
            },
          ],
        },
        {
          name: "pack",
          description: "Create a tarball of the current workspace",
          options: [
            {
              name: "--dry-run",
              description: "Do everything except writing the tarball to disk",
            },
            {
              name: "--destination",
              description: "The directory the tarball will be saved in",
              args: { name: "dir", template: "folders" },
            },
            {
              name: "--filename",
              description: "The name of the tarball",
              args: { name: "name" },
            },
            {
              name: "--ignore-scripts",
              description: "Don't run pre/postpack and prepare scripts",
            },
            {
              name: "--gzip-level",
              description: "Set the gzip compression level (0-9, default 9)",
              args: { name: "level" },
            },
            {
              name: "--quiet",
              description: "Only output the tarball filename",
            },
          ],
        },
        {
          name: "whoami",
          description: "Print the current npm username",
        },
        {
          name: "view",
          description: "View package metadata from the registry (bun info)",
          args: {
            name: "package",
            debounce: true,
            generators: npmSearchGenerator,
            filterStrategy: "fuzzy",
          },
        },
        {
          name: "version",
          description:
            "Bump the version in package.json and create a git commit and tag",
          args: {
            name: "increment",
            isOptional: true,
            suggestions: [
              "patch",
              "minor",
              "major",
              "prepatch",
              "preminor",
              "premajor",
              "prerelease",
              "from-git",
            ],
          },
          options: [
            {
              name: "--no-git-tag-version",
              description: "Skip creating a git commit and tag",
            },
            {
              name: "--dry-run",
              description: "Print the new version without writing package.json",
            },
          ],
        },
        {
          name: "pkg",
          description: "Manage data in package.json",
          subcommands: [
            {
              name: "get",
              description: "Get properties from package.json",
              args: { name: "key", isOptional: true, isVariadic: true },
            },
            {
              name: "set",
              description: "Set properties in package.json",
              args: { name: "key=value", isVariadic: true },
              options: [
                {
                  name: "--json",
                  description: "Parse values as JSON",
                },
              ],
            },
            {
              name: "delete",
              description: "Delete properties from package.json",
              args: { name: "key", isVariadic: true },
            },
            {
              name: "fix",
              description: "Auto-correct common package.json errors",
            },
          ],
        },
        {
          name: "diff",
          description:
            "Compare package versions across registry specs, local folders, or tarballs",
          args: {
            name: "spec",
            isOptional: true,
            isVariadic: true,
            generators: dependenciesGenerator,
          },
        },
        {
          name: "licenses",
          description: "List every installed package grouped by license",
        },
        {
          name: "migrate",
          description:
            "Migrate another package manager's lockfile without installing anything",
        },
        {
          name: "untrusted",
          description: "Print current untrusted dependencies with scripts",
        },
        {
          name: "trust",
          description:
            "Run scripts for untrusted dependencies and add to `trustedDependencies`",
          args: { name: "names", isOptional: true, isVariadic: true },
          options: [
            {
              name: "--all",
              description: "Trust all untrusted dependencies",
            },
          ],
        },
        {
          name: "default-trusted",
          description: "Print the default trusted dependencies list",
        },
      ],
    },
    {
      name: "completions",
      icon,
      description: "Install shell completions",
    },
    {
      name: "discord",
      icon: "fig://icon?type=discord",
      description: "Open bun's Discord server",
    },
    {
      name: "help",
      description: "Print the help menu",
      icon,
    },
    {
      name: "x",
      icon,
      description:
        "Execute a package binary (CLI), installing if needed (bunx)",
      loadSpec: "bunx",
    },
    {
      name: "repl",
      icon,
      description: "Start a REPL (read eval print loop) session with Bun",
      options: [
        {
          name: ["-e", "--eval"],
          description: "Evaluate a script with REPL semantics and exit",
          args: { name: "script" },
        },
        {
          name: ["-p", "--print"],
          description:
            "Evaluate a script with REPL semantics and print the result",
          args: { name: "script" },
        },
      ],
    },
    {
      name: "init",
      icon,
      description: "Initialize a new bun project",
      options: [
        {
          name: ["-y", "--yes"],
          description: "Answer yes to all prompts",
        },
        {
          name: "--react",
          description: "Scaffold a React project",
          requiresSeparator: true,
          args: {
            name: "preset",
            isOptional: true,
            suggestions: ["tailwind", "shadcn"],
          },
        },
      ],
    },
  ],
};

export default spec;
