// head (macOS BSD head from Apple OSS text_cmds-199, man page dated 2018-04-10, 2026-11-19). Source: apple-oss-distributions/text_cmds head/head.1 + head.c (getopt_long "+n:c:", --bytes/--lines). -q/-v/--silent/--quiet/--verbose/--help/--version kept from the existing spec: they are GNU coreutils 9.4 `head --help` only, not in macOS head. Not run on macOS.
const completionSpec: Fig.Spec = {
  name: "head",
  description: "Output the first part of files",
  args: {
    name: "file",
    isVariadic: true,
    isOptional: true,
    template: "filepaths",
  },
  options: [
    {
      name: ["-c", "--bytes"],
      description: "Print the first numBytes bytes of each file",
      args: { name: "numBytes" },
    },
    {
      name: ["-n", "--lines"],
      description: "Print the first numLines lines instead of the first 10",
      args: { name: "numLines" },
    },
    {
      name: ["-q", "--quiet", "--silent"],
      description: "Never print headers giving file names (GNU head only)",
    },
    {
      name: ["-v", "--verbose"],
      description: "Always print headers giving file names (GNU head only)",
    },
    { name: "--help", description: "Display this help and exit" },
    {
      name: "--version",
      description: "Output version information and exit",
    },
  ],
};

export default completionSpec;
