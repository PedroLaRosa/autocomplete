// copyfile (Oh-My-Zsh plugin, ohmyzsh/ohmyzsh master c0140703, 2026-11-19). Source: plugins/copyfile/copyfile.plugin.zsh and README.md.
// Verified: still `copyfile <file>` with a single regular-file argument and no options; the plugin is a zsh function, so it has no version number.
const completionSpec: Fig.Spec = {
  name: "copyfile",
  description:
    "Oh-My-Zsh plugin that copies the contents of a file to the clipboard",
  args: {
    name: "file",
    template: "filepaths",
  },
};

export default completionSpec;
