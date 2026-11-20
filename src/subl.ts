// Sublime Text build 4215 (Homebrew cask stable, 2026-11-19). Source: official CLI docs
// (sublimetext.com/docs/command_line.html, `subl --help` output of build 4131 on Linux, read via Context7).
// Not run: download.sublimetext.com and sublimetext.com are blocked here, so the 4215 binary's help was not checked.
// -s/--stay is absent from the 4131 help (it was documented for Sublime Text 3) and is marked deprecated; unverified whether 4215 still accepts it.
import { filepaths } from "@tabsmith/autocomplete-generators";

const generateProjects: Fig.Generator = filepaths({
  equals: [".sublime-project", ".sublime-workspace"],

  editFileSuggestions: { priority: 76 },
});

const completionSpec: Fig.Spec = {
  name: "subl",
  description: "Sublime Text",
  args: {
    name: "files|directories",
    description:
      "Files (optionally suffixed with :line or :line:column) or directories to open",
    isVariadic: true,
    isOptional: true,
    template: ["folders", "filepaths"],
  },
  options: [
    {
      name: "--project",
      description: "Load the given project",
      args: {
        name: "project",
        generators: generateProjects,
      },
    },
    {
      name: "--command",
      description: "Run the given command",
      args: {
        name: "command",
      },
    },
    {
      name: ["-n", "--new-window"],
      description: "Open a new window",
      exclusiveOn: ["-a"],
    },
    {
      name: ["-a", "--add"],
      description: "Add folders to the current window",
      exclusiveOn: ["-n"],
    },
    {
      name: "--launch-or-new-window",
      description: "Only open a new window if the application is open",
    },
    {
      name: ["-w", "--wait"],
      description: "Wait for the files to be closed before returning",
    },
    {
      name: ["-b", "--background"],
      description: "Don't activate the application",
    },
    {
      name: ["-s", "--stay"],
      description:
        "Keep the application activated after closing the file (not in the Sublime Text 4 help output)",
      deprecated: true,
    },
    {
      name: "--safe-mode",
      description: "Launch using a sandboxed (clean) environment",
    },
    {
      name: ["-h", "--help"],
      description: "Show help and exit",
    },
    {
      name: ["-v", "--version"],
      description: "Show version and exit",
    },
  ],
};

export default completionSpec;
