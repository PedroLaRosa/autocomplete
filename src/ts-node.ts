// ts-node v10.9.2 (npm "latest", published 2023-12-08; 11.0.0-beta.1 is only a pre-release; verified 2026-11-20).
// Source: the `arg` parser and --help text in src/bin.ts and website/docs/options.md at tag v10.9.2.
// Every flag is accepted in both --camelCase and --hyphen-case, so both spellings are listed.
import { dependenciesGenerator } from "./npm";
import { filepaths } from "@tabsmith/autocomplete-generators";

const completionSpec: Fig.Spec = {
  name: "ts-node",
  description: "Run the TypeScript interpreter for Node.JS",
  options: [
    {
      name: ["--help", "-h"],
      description: "Show help for ts-node",
    },
    {
      name: ["-v", "--version"],
      description:
        "Print version information of the ts-node module; -vvv prints additional information",
      isRepeatable: 3,
    },
    {
      name: ["-e", "--eval"],
      insertValue: "-e '{cursor}'",
      description: "Evaluate script",
      args: {
        name: "script",
      },
    },
    {
      name: ["-p", "--print"],
      description: "Evaluate script and print result",
    },
    {
      name: "--esm",
      description: "Bootstrap with the ESM loader, enabling full ESM support",
    },
    {
      name: "--swc",
      description: "Use the faster swc transpiler",
    },
    {
      name: ["-s", "--script-mode", "--scriptMode"],
      description:
        "Resolve Typescript config relative to the script's directory",
    },
    {
      name: ["-r", "--require"],
      isRepeatable: true,
      description: "Require module before executing",
      args: {
        name: "module",
        generators: dependenciesGenerator,
        filterStrategy: "fuzzy",
      },
    },
    {
      name: ["-i", "--interactive"],
      description: "Always open interactive REPL",
    },
    {
      name: ["--show-config", "--showConfig"],
      description: "Print resolved Typescript config to the terminal",
    },
    {
      name: ["--cwd-mode", "--cwdMode"],
      description:
        "Resolve Typescript config based on the current working directory",
    },
    {
      name: ["-T", "--transpile-only", "--transpileOnly"],
      description: "Use the Typescript transpile module mode",
    },
    {
      name: ["--type-check", "--typeCheck"],
      description: "Type check even when --transpile-only would skip it",
    },
    {
      name: ["-H", "--compiler-host", "--compilerHost"],
      description: "Use the Typescript compiler host API",
    },
    {
      name: ["-I", "--ignore"],
      isRepeatable: true,
      description: "Ignore patterns from Typescript compilation",
      args: {
        name: "pattern",
      },
    },
    {
      name: ["-P", "--project"],
      description: "Specify TypeScript project location",
      args: {
        name: "project",
        generators: {
          template: "filepaths",
          filterTemplateSuggestions: function (paths) {
            return paths
              .filter((file) => {
                return file.name.match(/.*\.json$/g) || file.name.endsWith("/");
              })
              .map((file) => {
                const isJsFile = file.name.match(/.*\.json?$/g);
                const isTsConfig = file.name.match(/tsconfig.json$/g);

                return {
                  ...file,
                  priority: isTsConfig ? 100 : isJsFile && 76,
                };
              });
          },
        },
      },
    },
    {
      name: ["-C", "--compiler"],
      description: "Use a custom compiler",
      args: {
        name: "compiler",
      },
    },
    {
      name: "--transpiler",
      description: "Use a custom transpiler",
      args: {
        name: "transpiler",
      },
    },
    {
      name: ["-D", "--ignore-diagnostics", "--ignoreDiagnostics"],
      isRepeatable: true,
      description: "Specify Typescript diagnostic code to ignore",
      args: {
        name: "code",
      },
    },
    {
      name: ["-O", "--compiler-options", "--compilerOptions"],
      insertValue: "-O '{cursor}'",
      description: "JSON object that will be merged with the compiler options",
      args: {
        name: "options",
      },
    },
    {
      name: ["--cwd", "--dir"],
      description: "Behave as if invoked within this working directory",
      args: {
        name: "cwd",
        generators: {
          template: "folders",
        },
      },
    },
    {
      name: "--files",
      description:
        "Load files, include and exclude from Typescript config on startup",
    },
    {
      name: "--pretty",
      description: "Use the pretty formatter for diagnostic errors",
    },
    {
      name: ["--skip-project", "--skipProject"],
      description: "Skip reading Typescript config",
    },
    {
      name: "--emit",
      description: "Emit output files into .ts-node directory",
    },
    {
      name: "--scope",
      description: "Scope compilation to scope directory specified",
    },
    {
      name: ["--scope-dir", "--scopeDir"],
      description: "Directory for scope parameter",
      args: {
        name: "directory",
        generators: {
          template: "folders",
        },
      },
    },
    {
      name: ["--skip-ignore", "--skipIgnore"],
      description: "Skip --ignore checks",
    },
    {
      name: ["--prefer-ts-exts", "--preferTsExts"],
      description:
        "Prefer Typescript files over JavaScript files when importing files",
    },
    {
      name: ["--log-error", "--logError"],
      description:
        "Pipe Typescript errors to stderr instead of throwing exceptions",
    },
    {
      name: ["--no-experimental-repl-await", "--noExperimentalReplAwait"],
      description: "Disable the top-level await function in REPL",
    },
    {
      name: [
        "--experimental-specifier-resolution",
        "--experimentalSpecifierResolution",
      ],
      description: "Equivalent to node's --experimental-specifier-resolution",
      args: {
        name: "mode",
        suggestions: ["node", "explicit"],
      },
    },
  ],
  args: {
    name: "script",
    isScript: true,
    generators: filepaths({
      matches: /.*\.tsx?$/g,
      editFileSuggestions: { priority: 76 },
    }),
  },
};
export default completionSpec;
