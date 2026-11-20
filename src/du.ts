// du (macOS 15.5 BSD, `man du` dated 2019-08-01, 2026-11-19). Source: apple-oss-distributions file_cmds-457.120.3 du.1 + du.c getopt string, matches the Xcode 16.4 man page; not run on macOS
const blockUnits = ["-g", "-h", "-k", "-m", "--si"];
// Options that select the block unit override each other
const otherUnits = (flag: string) => blockUnits.filter((f) => f !== flag);

const completionSpec: Fig.Spec = {
  name: "du",
  description: "Display disk usage statistics",
  options: [
    {
      name: "-A",
      description:
        "Display the apparent size instead of the disk usage (helpful on compressed volumes or sparse files)",
    },
    {
      name: "-a",
      description: "Display an entry for each file in a file hierarchy",
      exclusiveOn: ["-s", "-d"],
    },
    {
      name: "-B",
      description:
        "Calculate block counts in blocksize byte blocks (rounded up to a multiple of 512 unless -A is used)",
      args: {
        name: "blocksize",
      },
    },
    {
      name: "-c",
      description: "Display a grand total",
    },
    {
      name: "-H",
      description:
        "Symbolic links on the command line are followed, symbolic links in file hierarchies are not followed",
      exclusiveOn: ["-L", "-P"],
    },
    {
      name: "-h",
      description:
        '"Human-readable" output, uses unit suffixes (Byte, Kilobyte, Megabyte, Gigabyte, Terabyte and Petabyte) based on powers of 1024',
      exclusiveOn: otherUnits("-h"),
    },
    {
      name: "--si",
      description:
        '"Human-readable" output, uses unit suffixes (Byte, Kilobyte, Megabyte, Gigabyte, Terabyte and Petabyte) based on powers of 1000',
      exclusiveOn: otherUnits("--si"),
    },
    {
      name: "-g",
      description: "Display block counts in 1073741824-byte (1-GiB) blocks",
      exclusiveOn: otherUnits("-g"),
    },
    {
      name: "-k",
      description: "Display block counts in 1024-byte (1-KiB) blocks",
      exclusiveOn: otherUnits("-k"),
    },
    {
      name: "-m",
      description: "Display block counts in 1048576-byte (1-MiB) blocks",
      exclusiveOn: otherUnits("-m"),
    },
    {
      name: "-I",
      description: "Ignore files and directories matching the specified mask",
      isRepeatable: true,
      args: {
        name: "mask",
      },
    },
    {
      name: "-L",
      description:
        "Symbolic links on the command line and in file hierarchies are followed",
      exclusiveOn: ["-H", "-P"],
    },
    {
      name: "-l",
      description:
        "Count the size of files with multiple hard links multiple times (disable the hard link check)",
    },
    {
      name: "-n",
      description:
        'Ignore files and directories with the user "nodump" flag (UF_NODUMP) set',
    },
    {
      name: "-r",
      description:
        "Generate messages about directories that cannot be read, files that cannot be opened, and so on (the default, exists for conformance with XPG4)",
    },
    {
      name: "-P",
      description: "No symbolic links are followed (the default)",
      exclusiveOn: ["-H", "-L"],
    },
    {
      name: "-d",
      description:
        "Display an entry for all files and directories depth directories deep",
      exclusiveOn: ["-a", "-s"],
      args: {
        name: "depth",
        suggestions: ["0", "1", "2"],
      },
    },
    {
      name: "-s",
      description:
        "Display an entry for each specified file (equivalent to -d 0)",
      exclusiveOn: ["-a", "-d"],
    },
    {
      name: "-t",
      description:
        "Display only entries for which size exceeds threshold (if negative, only entries whose size is less than the absolute value)",
      args: {
        name: "threshold",
      },
    },
    {
      name: "-x",
      description: "File system mount points are not traversed",
    },
  ],
  args: {
    isOptional: true,
    name: "files",
    isVariadic: true,
    template: ["filepaths", "folders"],
  },
};
export default completionSpec;
