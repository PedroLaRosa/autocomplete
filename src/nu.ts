// @antfu/ni (nu) v30.6.0 (GitHub tag, 2026-09-16; npm latest, checked 2026-11-19). Source: shallow clone of
// antfu-collective/ni at v30.6.0 read statically (not run): src/parse.ts (parseNup), src/runner.ts, README,
// plus package.json `bin` of older tags. `nu` was renamed to `nup` in ni v25.0.0 (to avoid clashing with
// nushell); this spec describes `nup` and still applies if you alias `nu` to `nup`. There is no src/nup.ts
// spec in this repo.
const completionSpec: Fig.Spec = {
  name: "nu",
  description: "Use the right package manager - upgrade",
  options: [
    {
      name: "-i",
      description:
        "Interactively choose the packages to upgrade (not available for npm)",
    },
    {
      name: "-g",
      description:
        "Operates in 'global' mode, using the global package manager (`globalAgent`)",
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
    description: "Packages to upgrade, passed to the package manager",
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
