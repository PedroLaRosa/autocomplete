// truncate (macOS 15 BSD, `man truncate` dated 2021-08-19, 2026-11-19). Source: apple-oss-distributions/file_cmds tags file_cmds-457.140.3 (macOS 15-era) and file_cmds-479 (latest published), truncate/truncate.1 and truncate/truncate.c getopt "cr:s:" under __APPLE__ (identical in both); not a live run on macOS
// The GNU long options, -o, --help and --version were already in this spec and still exist in GNU coreutils (checked against `truncate --help` of coreutils 9.4); they are not accepted by the macOS truncate
const completionSpec: Fig.Spec = {
  name: "truncate",
  description: "Shrink or extend the size of a file to the specified size",
  options: [
    {
      name: ["--no-create", "-c"],
      description: "Do not create files if they do not exist",
    },
    {
      name: ["--io-blocks", "-o"],
      description:
        "Treat SIZE as number of IO blocks instead of bytes (GNU only)",
    },
    {
      name: ["--reference", "-r"],
      description: "Base size on RFILE",
      args: {
        name: "RFILE",
        template: "filepaths",
      },
    },
    {
      name: ["--size", "-s"],
      description:
        "Set or adjust the file size by SIZE bytes, optionally prefixed with + (extend by), - (reduce by), % (round up to a multiple of) or / (round down to a multiple of)",
      args: {
        name: "SIZE",
        description:
          "An integer with an optional unit; units are K,M,G,T (powers of 1024, either case) on macOS and additionally P,E,Z,Y,R,Q or KB,MB,... (powers of 1000) with GNU. GNU also accepts the < (at most) and > (at least) prefixes",
      },
    },
    {
      name: "--help",
      description: "Show help for truncate (GNU only)",
    },
    {
      name: "--version",
      description: "Output version information and exit (GNU only)",
    },
  ],
  args: {
    name: "FILE",
    isVariadic: true,
    template: "filepaths",
  },
};
export default completionSpec;
