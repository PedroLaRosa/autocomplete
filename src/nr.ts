// @antfu/ni (nr) v30.6.0 (GitHub tag, 2026-09-16; npm latest, checked 2026-11-19). Source: shallow clone of
// antfu-collective/ni at v30.6.0 read statically (not run): src/commands/nr.ts, src/parse.ts, src/runner.ts,
// src/completion.ts, README. nr flags are only recognised in the documented positions (e.g. `-C`, `-p`, `-`
// first, `-v`/`-h`/`--agent` alone); anything else is passed through to the detected package manager.
import { npmScriptsGenerator } from "./npm";

const completionSpec: Fig.Spec = {
  name: "nr",
  description: "Use the right package manager - run",
  options: [
    {
      name: "-p",
      description:
        "Interactively select the workspace package and script to run (monorepo)",
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
      name: "--if-present",
      description: "Do nothing if the script is not defined",
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
      name: "--completion-bash",
      description: "Print the bash completion script",
    },
    {
      name: "--completion-zsh",
      description: "Print the zsh completion script",
    },
    {
      name: "--completion-fish",
      description: "Print the fish completion script",
    },
    {
      name: ["-h", "--help"],
      description: "Output usage information",
    },
  ],
  args: [
    {
      name: "script",
      description: "The script to run",
      filterStrategy: "fuzzy",
      generators: npmScriptsGenerator,
      isOptional: true,
    },
    {
      name: "args",
      description: "Arguments passed to the script",
      isVariadic: true,
      isOptional: true,
    },
  ],
  additionalSuggestions: [
    {
      name: "-",
      // Run the suggestion directory on insert
      insertValue: "-\n",
      description: "Run the last command",
      type: "shortcut",
    },
    {
      name: "?",
      description: "Dry run: print the resolved command instead of running it",
      type: "shortcut",
    },
  ],
};
export default completionSpec;
