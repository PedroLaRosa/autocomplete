// paste (macOS BSD, paste.1 dated 2004-06-25, apple-oss-distributions/text_cmds-199, 2026-11-19). Source: paste.1 + paste.c from Apple's OSS mirror (not run on macOS)
const completionSpec: Fig.Spec = {
  name: "paste",
  description: "Merge corresponding or subsequent lines of files",
  options: [
    {
      name: "-d",
      description:
        "Use the characters in list, used circularly, to replace the newline characters instead of the default tab (\\n, \\t, \\\\ and \\0 (empty string) are special)",
      args: {
        name: "list",
        suggestions: ["\\t\\n", "\\t", "\\n", "\\\\", "\\0"],
        default: "\\t",
      },
    },
    {
      name: "-s",
      description:
        "Concatenate all of the lines of each separate input file in command line order, replacing the newline of every line except the last with a tab (or the -d characters)",
    },
  ],
  args: {
    name: "file",
    description: "File to merge, - reads standard input",
    isVariadic: true,
    template: "filepaths",
  },
};
export default completionSpec;
