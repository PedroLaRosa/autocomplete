// mkdir (macOS BSD, Apple OSS file_cmds-457.140.3 and file_cmds-479 man page dated 2013-03-15, 2026-11-19). Source: apple-oss-distributions/file_cmds mkdir/mkdir.1 + mkdir.c (getopt "m:pv"); GNU coreutils 9.4 `mkdir --help` for the long options and -Z/--context kept from the previous spec (GNU-only, not in macOS mkdir). Man pages and source only, not run on macOS.
const completionSpec: Fig.Spec = {
  name: "mkdir",
  description: "Make directories",
  args: {
    name: "directory name",
    template: "folders",
    suggestCurrentToken: true,
    isVariadic: true,
  },
  options: [
    {
      name: ["-m", "--mode"],
      description:
        "Set the file permission bits of the final created directory to the specified mode (as in chmod)",
      args: { name: "mode" },
    },
    {
      name: ["-p", "--parents"],
      description:
        "Create intermediate directories as required; no error if a directory already exists",
    },
    {
      name: ["-v", "--verbose"],
      description: "Print a message for each created directory",
    },
    {
      name: "-Z",
      description:
        "Set the SELinux security context of each created directory to the default type (GNU only)",
    },
    {
      name: "--context",
      description:
        "Like -Z, or if a context is specified, set the SELinux or SMACK security context to it (GNU only)",
      requiresSeparator: true,
      args: { name: "context", isOptional: true },
    },
    { name: "--help", description: "Display this help and exit (GNU only)" },
    {
      name: "--version",
      description: "Output version information and exit (GNU only)",
    },
  ],
};

export default completionSpec;
