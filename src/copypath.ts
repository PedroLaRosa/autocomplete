// copypath (Oh My Zsh plugin, no release versions; ohmyzsh/ohmyzsh master at c0140703, 2026-11-16, checked 2026-11-19).
// Source: plugins/copypath/copypath.plugin.zsh and README.md read statically; function not run. Unchanged upstream.
const completionSpec: Fig.Spec = {
  name: "copypath",
  description:
    "Oh-My-Zsh plugin that copies the path of given directory or file to the clipboard",
  args: {
    name: "path",
    description:
      "File or directory to copy the absolute path of (default: current directory)",
    isOptional: true,
    template: ["filepaths", "folders"],
  },
};

export default completionSpec;
