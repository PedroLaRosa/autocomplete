// wasm-bindgen CLI v0.2.130 (crates.io wasm-bindgen-cli latest, Homebrew formula 0.2.130, 2026-11-19). Source: clap definitions in src/wasm_bindgen.rs of the wasm-bindgen-cli-0.2.130 crate and wasm-bindgen-cli-support-0.2.130 (read, binary not run).
// Changes: version flag is -V (clap), --target gained experimental-nodejs-module and module, added --keep-lld-exports, --split-debug-info, --debug-info-url, --split-linked-modules, --js-string-builtins, --ts-typed-array-buffers, --experimental-reset-state-function and --force-enable-abort-handler; --typescript, --weak-refs and --reference-types are hidden deprecated no-ops.

import { filepaths } from "@tabsmith/autocomplete-generators";

const completionSpec: Fig.Spec = {
  name: "wasm-bindgen",
  description: "Generate bindings between WebAssembly and JavaScript",
  options: [
    {
      name: ["--help", "-h"],
      description: "Show help for wasm-bindgen",
    },
    {
      name: ["--version", "-V"],
      description: "Show version for wasm-bindgen",
    },
    {
      name: "--out-dir",
      description: "Output directory",
      args: {
        name: "directory",
        description:
          "Target directory to emit JS bindings, TS definitions, .wasm binaries, etc",
        template: ["folders"],
      },
    },
    {
      name: "--out-name",
      description:
        "Set a custom output filename (Without extension. Defaults to crate name)",
      args: {
        name: "filename",
        description: "Output filename",
        suggestCurrentToken: true,
        template: ["filepaths"],
      },
    },
    {
      name: "--target",
      description: "What type of output to generate",
      args: {
        name: "target",
        suggestions: [
          {
            name: "web",
            description: "Directly loadable in a web browser",
          },
          {
            name: "bundler",
            description:
              "Suitable for loading in bundlers like Webpack (default)",
          },
          {
            name: "nodejs",
            description: "Loadable via require as a Node.js module",
          },
          {
            name: "no-modules",
            description: "Like web, but older and doesn't use ES modules",
          },
          {
            name: "deno",
            description: "Loadable using imports from Deno modules",
          },
          {
            name: "experimental-nodejs-module",
            description: "Node.js output as an ES module (experimental)",
          },
          {
            name: "module",
            description: "ES module output using Wasm source phase imports",
          },
        ],
      },
    },
    {
      name: "--no-modules-global",
      description: "Name of the global variable to initialize",
      args: {
        name: "name",
      },
    },
    {
      name: "--browser",
      description: "Hint that JS should only be compatible with a browser",
    },
    {
      name: "--typescript",
      description: "Deprecated, TypeScript definitions are on by default",
      deprecated: true,
    },
    {
      name: "--no-typescript",
      description: "Don't emit a *.d.ts file",
    },
    {
      name: "--omit-imports",
      description: "Don't emit imports in generated JavaScript",
    },
    {
      name: "--debug",
      description: "Include otherwise-extraneous debug checks in output",
    },
    {
      name: "--no-demangle",
      description: "Don't demangle Rust symbol names",
    },
    {
      name: "--keep-lld-exports",
      description: "Keep exports synthesized by LLD",
    },
    {
      name: "--keep-debug",
      description: "Keep debug sections in Wasm files",
    },
    {
      name: "--split-debug-info",
      description:
        "Write DWARF debug info to a separate `*_bg.debug.wasm` file (implies `--keep-debug`)",
    },
    {
      name: "--debug-info-url",
      description:
        "URL of the split debug info file, recorded in the main Wasm file (defaults to the file name of the debug info file)",
      dependsOn: ["--split-debug-info"],
      args: {
        name: "url",
      },
    },
    {
      name: "--remove-name-section",
      description: "Remove the debugging `name` section of the file",
    },
    {
      name: "--remove-producers-section",
      description: "Remove the telemetry `producers` section",
    },
    {
      name: "--omit-default-module-path",
      description:
        "Don't add WebAssembly fallback imports in generated JavaScript",
    },
    {
      name: "--encode-into",
      description: "Whether or not to use TextEncoder#encodeInto",
      args: {
        name: "option",
        suggestions: [
          {
            name: "test",
          },
          {
            name: "always",
            description: "Always use TextEncoder#encodeInto()",
          },
          {
            name: "never",
            description: "Never use TextEncoder#encodeInto()",
          },
        ],
      },
    },
    {
      name: "--nodejs",
      description: "Deprecated, use `--target nodejs`",
      deprecated: {
        insertValue: "--target nodejs",
      },
    },
    {
      name: "--web",
      description: "Deprecated, use `--target web`",
      deprecated: {
        insertValue: "--target web",
      },
    },
    {
      name: "--no-modules",
      description: "Deprecated, use `--target no-modules`",
      deprecated: {
        insertValue: "--target no-modules",
      },
    },
    {
      name: "--weak-refs",
      description: "Deprecated, runtime-detected",
      deprecated: true,
    },
    {
      name: "--reference-types",
      description: "Deprecated, automatically inferred from the Wasm features",
      deprecated: true,
    },
    {
      name: "--split-linked-modules",
      description:
        "Split linked modules out into their own files (recommended if possible, a bundler needs to be set up accordingly)",
    },
    {
      name: "--js-string-builtins",
      description:
        "Import `static_string` constants as JS String Builtins string constants from `wasm:js/string-constants`",
    },
    {
      name: "--ts-typed-array-buffers",
      description:
        "Emit `Uint8Array<ArrayBuffer>`-style generic typed array return types in generated TypeScript (requires TypeScript 5.7 or later)",
    },
    {
      name: "--experimental-reset-state-function",
      description:
        "Generate __wbg_reset_state function for Wasm reinitialization (experimental)",
    },
    {
      name: "--force-enable-abort-handler",
      description:
        "Enable abort handler even if building with panic=abort (does nothing when panic=unwind)",
    },
  ],
  args: {
    name: "input",
    description: "Input Wasm file",
    generators: filepaths({
      extensions: ["wasm"],
    }),
  },
};

export default completionSpec;
