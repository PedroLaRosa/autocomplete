// Visual Studio Code Insiders v1.148.0-insider (Homebrew cask visual-studio-code@insiders and microsoft/vscode main package.json, 2026-11-20).
// Source: reuses the stable `code` spec (v1.147.0); main-branch src/vs/platform/environment/node/argv.ts and
// cli/src/commands/args.rs were diffed against tag 1.147.0 and are identical, so there are no insiders-only options. Read statically, not run.
import code from "./code";

const completionSpec: Fig.Spec = {
  ...code,
  name: "code-insiders",
};

export default completionSpec;
