// mknod (macOS BSD, mknod.8 dated 2016-09-12, apple-oss-distributions/file_cmds-479, 2026-11-19). Source: mknod.8 + mknod.c from Apple's OSS mirror (not run on macOS)
// macOS builds omit -l (list kernel drivers) and -u (user), and take numeric major numbers only
const completionSpec: Fig.Spec = {
  name: "mknod",
  description: "Make device special file",
  options: [
    {
      name: "-r",
      description: "Replace an existing file if its type is incorrect",
    },
    {
      name: "-R",
      description:
        "Replace an existing file if its type is incorrect and correct the mode, user and group",
    },
    {
      name: "-F",
      description:
        "Create device nodes for an operating system that packs device numbers in a different format",
      args: {
        name: "fmt",
        suggestions: [
          "native",
          "386bsd",
          "4bsd",
          "bsdos",
          "freebsd",
          "hpux",
          "isc",
          "linux",
          "netbsd",
          "osf1",
          "sco",
          "solaris",
          "sunos",
          "svr3",
          "svr4",
          "ultrix",
        ],
        default: "native",
      },
    },
    {
      name: "-g",
      description:
        "Group for the device node, as a group name or a numeric group ID (precede a numeric ID with # to avoid it being treated as a name)",
      args: {
        name: "gid",
      },
    },
    {
      name: "-m",
      description: "Mode for the device node, absolute or symbolic",
      args: {
        name: "mode",
      },
    },
  ],
  args: [
    {
      name: "name",
      description: "Device node to create",
      template: "filepaths",
    },
    {
      name: "type",
      description: "Type of node to create",
      suggestions: [
        {
          name: "b",
          description: "Block device",
        },
        {
          name: "c",
          description: "Character device",
        },
        {
          name: "p",
          description: "FIFO",
        },
      ],
    },
    {
      name: "major | number",
      description:
        "The major device number tells the kernel which device driver entry point to use; a single opaque device number can be given instead",
      isOptional: true,
    },
    {
      name: "minor | unit",
      description:
        "The minor device number tells the kernel which one of several similar devices the node corresponds to; with the bsdos format this is the unit number",
      isOptional: true,
    },
    {
      name: "subunit",
      description:
        "Selects a subset of a device, for example a partition on a disk (only supported by the bsdos format)",
      isOptional: true,
    },
  ],
};
export default completionSpec;
