// df (macOS 15.5 BSD, `man df` dated 2023-02-22, 2026-11-19). Source: apple-oss-distributions file_cmds-457.120.3 df.1 + df.c getopt string, matches the Xcode 16.4 man page; not run on macOS
const completionSpec: Fig.Spec = {
  name: "df",
  description: "Display free disk space",
  args: {
    name: "file or filesystem",
    isOptional: true,
    isVariadic: true,
  },
  options: [
    {
      name: "--libxo",
      description:
        "Generate output via libxo in a selection of different human and machine readable formats",
      args: {
        name: "options",
        suggestions: ["json", "xml", "text", "html"],
      },
    },
    {
      name: "-a",
      description:
        "Show all mount points, including those mounted with the MNT_IGNORE flag",
    },
    {
      name: ["-b", "-P"],
      description: "Use 512-byte blocks (default)",
      exclusiveOn: ["-g", "-k", "-m"],
    },
    {
      name: "-c",
      description: "Display a grand total",
    },
    {
      name: "-g",
      description: "Use 1073741824-byte (1-Gibibyte) blocks",
      exclusiveOn: ["-b", "-P", "-m", "-k"],
    },
    {
      name: "-m",
      description: "Use 1048576-byte (1-Mebibyte) blocks",
      exclusiveOn: ["-b", "-P", "-g", "-k"],
    },
    {
      name: "-k",
      description: "Use 1024-byte (1-Kibibyte) blocks",
      exclusiveOn: ["-b", "-P", "-g", "-m"],
    },
    {
      name: ["-H", "--si"],
      description: '"Human-readable" output, uses base 10 unit suffixes',
      exclusiveOn: ["-h"],
    },
    {
      name: "-h",
      description: '"Human-readable" output, uses base 2 unit suffixes',
      exclusiveOn: ["-H", "--si"],
    },
    {
      name: "-I",
      description: "Suppress the inode counts (see -i)",
    },
    {
      name: "-i",
      description:
        "Include the number of free and used inodes (default, use -I to suppress)",
    },
    {
      name: "-l",
      description: "Only display information about locally-mounted filesystems",
    },
    {
      name: "-n",
      description: "Print out the previously obtained statistics",
    },
    {
      name: "-T",
      description:
        "Only print out statistics for filesystems of the specified types (comma separated, prefix the list with no to exclude them)",
      args: {
        name: "type",
      },
    },
    {
      name: "-t",
      description:
        "No-op without an argument (macOS already prints the total allocated-space figures)",
    },
    {
      name: "-Y",
      description: "Include the filesystem type",
    },
    {
      name: "-,",
      description:
        "Print sizes grouped and separated by thousands using the non-monetary separator of the locale",
    },
  ],
};

export default completionSpec;
