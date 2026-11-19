// @antfu/ni (nrm) v30.6.0 (GitHub tag, 2026-09-16; npm latest, checked 2026-11-19). Source: shallow clone of
// antfu-collective/ni at v30.6.0 read statically (not run): src/commands/nun.ts, src/parse.ts, src/runner.ts,
// README, plus package.json `bin` of older tags. `nrm` only shipped in ni v0.10.x (removed in v0.11.0) and was
// superseded by `nun` (added in v0.14.0), which is what this spec now describes; it still applies if you alias
// `nrm` to `nun`. There is no src/nun.ts spec in this repo. `-D`/`-P`/`-O` are not interpreted by ni, they are
// passed through to npm/pnpm uninstall.
import { dependenciesGenerator } from "./npm";

const completionSpec: Fig.Spec = {
  name: "nrm",
  description: "Use the right package manager - uninstall",
  options: [
    {
      name: "-g",
      description:
        "Operates in 'global' mode, so that packages are removed from the prefix folder instead of the current working directory",
    },
    {
      name: "-m",
      description:
        "Interactively select the dependencies to remove (multi-select), even when packages are given",
    },
    {
      name: "-D",
      description:
        "Package will be removed from your `devDependencies` (npm, pnpm)",
    },
    {
      name: "-P",
      description:
        "Package will be removed from your `dependencies` (npm, pnpm)",
    },
    {
      name: "-O",
      description:
        "Package will be removed from your `optionalDependencies` (npm, pnpm)",
    },
    {
      name: "-C",
      description: "Change directory before running the command",
      args: {
        name: "directory",
        template: "folders",
      },
    },
    {
      name: ["-v", "--version"],
      description: "Show ni, node and detected agent versions",
    },
    {
      name: "--agent",
      description: "Print the detected agent name (for scripting)",
    },
    {
      name: ["-h", "--help"],
      description: "Output usage information",
    },
  ],
  args: {
    name: "package",
    filterStrategy: "fuzzy",
    generators: dependenciesGenerator,
    isVariadic: true,
    isOptional: true,
  },
  additionalSuggestions: [
    {
      name: "?",
      description: "Dry run: print the resolved command instead of running it",
      type: "shortcut",
    },
  ],
};
export default completionSpec;
