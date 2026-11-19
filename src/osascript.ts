// osascript macOS man page (osascript(1) dated April 24, 2014; text taken from the Xcode 27.3 beta 2 export, 2026-11-19).
// Source: osascript.1 HTML in the keith/xcode-man-pages mirror, read statically (no live run on macOS, no OSS source exists)
import { filepaths } from "@tabsmith/autocomplete-generators";

const completionSpec: Fig.Spec = {
  name: "osascript",
  description: "Execute OSA scripts (AppleScript, JavaScript, etc.)",
  options: [
    {
      name: "-e",
      description: "Enter one line of a script",
      isRepeatable: true,
      args: {
        name: "statement",
      },
    },
    {
      name: "-i",
      description: "Interactive mode",
    },
    {
      name: "-l",
      description: "Override the language for any plain text files",
      args: {
        name: "language",
        suggestions: ["AppleScript", "JavaScript"],
      },
    },
    {
      name: "-s",
      description: "Modify the output style",
      isRepeatable: true,
      args: {
        name: "flags",
        isVariadic: true,
        suggestions: [
          {
            name: "h",
            description: "Print values in human-readable form (default)",
          },
          {
            name: "s",
            description: "Print values in recompilable source form",
          },
          {
            name: "e",
            description: "Print script errors to stderr (default)",
          },
          {
            name: "o",
            description: "Print script errors to stdout",
          },
        ],
      },
    },
  ],
  args: [
    {
      name: "script",
      isScript: true,
      isOptional: true,
      generators: filepaths({
        extensions: ["scpt", "scptd"],
        editFileSuggestions: { priority: 76 },
      }),
    },
    {
      name: "argument",
      description:
        "Argument passed as a string to the run handler of the script",
      isOptional: true,
      isVariadic: true,
    },
  ],
};

export default completionSpec;
