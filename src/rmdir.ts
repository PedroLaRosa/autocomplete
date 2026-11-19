// rmdir (macOS 15 BSD, rmdir.1 dated 2013-03-15 in Apple OSS file_cmds-457.140.3 and file_cmds-479, 2026-11-19).
// Source: rmdir.1 + rmdir.c (getopt "pv") from apple-oss-distributions/file_cmds; man page / OSS mirror only, not run on macOS.
const completionSpec: Fig.Spec = {
  name: "rmdir",
  description: "Remove directories",
  args: {
    isVariadic: true,
    template: "folders",
  },

  options: [
    {
      name: "-p",
      description:
        "Treat each directory as a pathname and remove all its components, if they are empty, starting with the last one",
      isDangerous: true,
    },
    {
      name: "-v",
      description: "Be verbose, listing each directory as it is removed",
    },
  ],
};

export default completionSpec;
