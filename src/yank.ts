// yank v1.4.0 (GitHub tag mptre/yank, released 2026-07-16, 2026-11-19). Source: yank.1 man page, yank.c (getopt string "1ilvxd:g:") and CHANGELOG.md read statically at tag v1.4.0 (binary not run).
const completionSpec: Fig.Spec = {
  name: "yank",
  description: "Yank terminal output to clipboard",
  options: [
    {
      name: "-1",
      description:
        "If only one field is recognized, select it without displaying the selection interface",
    },
    {
      name: "-i",
      description: "Ignore case differences between pattern and the input",
    },
    { name: "-l", description: "Use the default delimiters except for space" },
    { name: "-x", description: "Use alternate screen" },
    { name: "-v", description: "Print the version" },
    {
      name: "-d",
      description:
        "All input characters not present in delim will be recognized as fields",
      args: {
        name: "delim",
        description: "Custom delimiters",
      },
    },
    {
      name: "-g",
      description:
        "Use pattern to recognize fields, expressed as a POSIX extended regular expression",
      args: {
        name: "pattern",
        description: "Pattern to recognize fields",
      },
    },
    {
      name: "--",
      description: "Use a command as the yank command",
      args: {
        name: "command",
        description: "Command to use as the yank command",
        isVariadic: true,
      },
    },
  ],
};
export default completionSpec;
