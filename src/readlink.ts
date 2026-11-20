// readlink (macOS 15 BSD, stat.1 dated 2017-06-22 in Apple OSS file_cmds-457.140.3 and file_cmds-479, 2026-11-19).
// Source: stat.1 + stat.c (readlink mode: getopt "fn") from apple-oss-distributions/file_cmds; man page / OSS mirror only, not run on macOS.
// The old spec described stat's -f format option; in readlink mode -f takes no argument and canonicalizes the path.
const completionSpec: Fig.Spec = {
  name: "readlink",
  description: "Display the target of a symbolic link",
  options: [
    {
      name: "-f",
      description:
        "Canonicalize the output by following every symlink in every component of the path; the file does not need to be a symbolic link",
    },
    {
      name: "-n",
      description:
        "Do not force a newline to appear at the end of each piece of output",
    },
  ],
  args: {
    name: "file",
    description: "File(s) to readlink",
    isVariadic: true,
    template: "filepaths",
  },
};
export default completionSpec;
