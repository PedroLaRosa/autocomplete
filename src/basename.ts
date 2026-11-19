// basename (macOS 15 BSD, `man basename` dated 2020-05-26, 2026-11-19). Source: apple-oss-distributions/shell_cmds tag shell_cmds-326 (2025-04-30 drop; basename/basename.1 and basename.c getopt "as:"); not a live run on macOS. Spec already matched upstream
const completionSpec: Fig.Spec = {
  name: "basename",
  description: "Return filename portion of pathname",
  options: [
    {
      name: "-a",
      description: "Treat every argument as a string",
    },
    {
      name: "-s",
      description: "Suffix to remove from string",
      args: {
        name: "suffix",
      },
    },
  ],
  args: {
    name: "string",
    description: "String to operate on (typically filenames)",
    isVariadic: true,
    template: "filepaths",
  },
};
export default completionSpec;
