// tee (macOS 15 BSD, `man tee` dated 2020-06-23, 2026-11-19). Source: apple-oss-distributions/shell_cmds tags shell_cmds-319.0.1 (macOS 15-era) and shell_cmds-329 (latest published), tee/tee.1 and tee/tee.c getopt "ai" (identical in both); not a live run on macOS
const completionSpec: Fig.Spec = {
  name: "tee",
  description: "Duplicate standard input",
  options: [
    {
      name: "-a",
      description:
        "Append the output to the files rather than overwriting them",
    },
    {
      name: "-i",
      description: "Ignore the SIGINT signal",
    },
  ],
  args: {
    name: "file",
    description: "Pathname of an output file",
    isVariadic: true,
    isOptional: true,
    template: "filepaths",
  },
};
export default completionSpec;
