// cot v7.1.2 (bundled with CotEditor 7.1.3, the latest stable release per Homebrew cask and git tags, 2026-11-19).
// Source: static read of the argparse definitions in CotEditor/Resources/cot at tag 7.1.3 (the script's __version__
// is 7.1.2); macOS-only, not run here. The old coteditor/cot repo is unmaintained since CotEditor 5.0.2.
// Author: Yavko
const completionSpec: Fig.Spec = {
  name: "cot",
  icon: "https://coteditor.com/favicon@2x.png",
  description: "Command-line utility for CotEditor",
  args: {
    name: "file",
    isOptional: true,
    isVariadic: true,
    template: "filepaths",
  },
  options: [
    {
      description: "Show help message and exit",
      name: ["-h", "--help"],
    },
    {
      description: "Show program's version number and exit",
      name: ["-v", "--version"],
    },
    {
      description: "Wait for opened file to be closed",
      name: ["-w", "--wait"],
    },
    {
      description: "Do not bring the application to the foreground",
      name: ["-g", "--background"],
    },
    {
      description: "Open the document as read-only",
      name: ["-r", "--readonly"],
    },
    {
      description: "Create a new blank document",
      name: ["-n", "--new"],
    },
    {
      description: "Set specific syntax to opened document",
      name: ["-s", "--syntax"],
      args: {
        name: "syntax",
      },
    },
    {
      description: "Jump to specific line in opened document",
      name: ["-l", "--line"],
      args: {
        name: "line",
      },
    },
    {
      description: "Jump to specific column in opened document",
      name: ["-c", "--column"],
      args: {
        name: "column",
      },
    },
    {
      description: "Open FILE and jump to LINE and COLUMN",
      name: "--goto",
      exclusiveOn: ["-l", "--line", "-c", "--column"],
      args: {
        name: "file[:line[:column]]",
        template: "filepaths",
      },
    },
  ],
};
export default completionSpec;
