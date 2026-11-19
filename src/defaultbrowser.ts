// defaultbrowser v1.1 (kerma/defaultbrowser tag 1.1, Homebrew formula 1.1, 2026-11-19). Source: src/main.m and README of the tag; macOS-only tool, not run here.
// The tool has no options; with no argument it lists the HTTP handlers ("* name" marks the current one, "  name" the others), with one it sets that handler for http and https.
const getInstalledBrowsers: Fig.Generator = {
  script: ["defaultbrowser"],
  postProcess: function (out) {
    return (
      out
        .split("\n")
        /* We ignore the already set browser (marked with "*") and blank lines */
        .filter((line) => line.trim() !== "" && !line.startsWith("*"))
        .map((line) => ({ name: line.trim() }))
    );
  },
};

const completionSpec: Fig.Spec = {
  name: "defaultbrowser",
  description: "Change your default browser from the CLI",
  args: {
    name: "browser",
    description: "Browser to set as the default HTTP handler",
    isOptional: true,
    generators: getInstalledBrowsers,
  },
};

export default completionSpec;
