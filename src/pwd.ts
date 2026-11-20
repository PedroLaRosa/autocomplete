// pwd (macOS 15 BSD, Apple OSS shell_cmds pwd.1 dated 2020-10-24, unchanged in shell_cmds-319.0.1 through 329, 2026-11-19).
// Source: pwd.1 + pwd.c (getopt "LP") from apple-oss-distributions/shell_cmds; man page / OSS mirror only, not run on macOS.
const completionSpec: Fig.Spec = {
  name: "pwd",
  description: "Return working directory name",
  options: [
    {
      name: "-L",
      description:
        "Display the logical current working directory (the default)",
      exclusiveOn: ["-P"],
    },
    {
      name: "-P",
      description:
        "Display the physical current working directory (all symbolic links resolved)",
      exclusiveOn: ["-L"],
    },
  ],
};

export default completionSpec;
