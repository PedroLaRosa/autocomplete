// mkfifo (macOS BSD, Apple OSS file_cmds-457.140.3 and file_cmds-479 man page dated 1994-01-05, 2026-11-19). Source: apple-oss-distributions/file_cmds mkfifo/mkfifo.1 + mkfifo.c (getopt "m:"); man pages and source only, not run on macOS. Unchanged upstream: -m is the only option (GNU-only --mode/-Z/--context not added).
const completionSpec: Fig.Spec = {
  name: "mkfifo",
  description: "Make FIFOs (first-in, first-out)",
  options: [
    {
      name: "-m",
      description:
        "Set the file permission bits of the created fifos to the specified mode, ignoring the umask of the calling process; the mode is specified as in chmod(1)",
      args: {
        name: "mode",
        suggestions: ["0666", "0644", "0444"],
        default: "0666",
      },
    },
  ],
  args: {
    name: "fifo_name",
    description: "FIFO(s) to create",
    isVariadic: true,
  },
};
export default completionSpec;
