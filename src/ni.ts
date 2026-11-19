// @antfu/ni v30.6.0 (GitHub release, 2026-09-16). Source: `ni --help` (v30.1.0)
// and src/{runner,parse,commands/ni,catalog/handler}.ts plus README at v30.6.0
import { npmSearchGenerator } from "./npm";

const completionSpec: Fig.Spec = {
  name: "ni",
  description: "Use the right package manager - install",
  options: [
    {
      name: "-g",
      description:
        "Operates in 'global' mode, so that packages are installed into the prefix folder instead of the current working directory",
    },
    {
      name: "-D",
      description: "Package will appear in your `devDependencies`",
    },
    {
      name: "-P",
      description:
        "Install only production dependencies (`--omit=dev` / `--production`)",
    },
    {
      name: "--save-peer",
      description: "Save package to your `peerDependencies`",
    },
    {
      name: "-O",
      description: "Save package to your `optionalDependencies`",
    },
    {
      name: "--frozen",
      description: "Don't generate a lockfile and fail if an update is needed",
    },
    {
      name: ["-w", "--workspace"],
      description:
        "In catalog mode, write the catalog ref to the workspace root `package.json`",
    },
    {
      name: "-i",
      description:
        "Interactively search for a package and choose how to install it",
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
    generators: npmSearchGenerator,
    debounce: true,
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
