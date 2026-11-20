// whereis (macOS BSD, man page dated 2002-08-22, 2026-11-19). Source: apple-oss-distributions/shell_cmds tag shell_cmds-329 whereis/whereis.1 + whereis/whereis.c (Apple getopt "BMabfmqu"); man page and source only, not run on macOS. Changes: added -a and -q, descriptions refreshed, directory options take a list ended by -f, program operand is required and repeatable. -s and -S were already in the spec; they are not on macOS (compiled out in whereis.c) but exist in Linux util-linux whereis and FreeBSD, so they are kept and marked as such.
const dirListArg = (description: string): Fig.Arg => ({
  name: "directory",
  description,
  template: "folders",
  isVariadic: true,
});

const completionSpec: Fig.Spec = {
  name: "whereis",
  description: "Locate the binary, source, and manual page files for a command",
  options: [
    {
      name: "-a",
      description:
        "Report all matches instead of only the first of each requested type",
    },
    {
      name: "-b",
      description: "Search for binaries",
    },
    {
      name: "-m",
      description: "Search for manual pages",
    },
    {
      name: "-q",
      description:
        "Quiet: suppress the output of the utility name in front of the normal output line",
    },
    {
      name: "-s",
      description: "Search for sources (not on macOS)",
    },
    {
      name: "-u",
      description:
        "Search for 'unusual' entries, those without at least one entry of each requested type",
    },
    {
      name: "-B",
      description: "Specify directories to search for binaries (requires -f)",
      args: dirListArg("Directories to search for binaries"),
      dependsOn: ["-f"],
    },
    {
      name: "-M",
      description:
        "Specify directories to search for manual pages (requires -f)",
      args: dirListArg("Directories to search for manual pages"),
      dependsOn: ["-f"],
    },
    {
      name: "-S",
      description:
        "Specify directories to search for sources (requires -f; not on macOS)",
      args: dirListArg("Directories to search for sources"),
      dependsOn: ["-f"],
    },
    {
      name: "-f",
      description:
        "Delimit the list of directories after -B, -M or -S and begin the program list",
    },
  ],
  args: {
    name: "program",
    description: "The program to search for",
    isVariadic: true,
  },
};
export default completionSpec;
