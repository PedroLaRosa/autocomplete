// macOS cp (BSD, man page dated 2024-03-28, macOS 15.5, synced 2026-11-19). Source: `man cp`
const completionSpec: Fig.Spec = {
  name: "cp",
  description: "Copy files and directories",
  args: [
    {
      name: "source",
      template: ["filepaths", "folders"],
      isVariadic: true,
    },
    {
      name: "target",
      template: ["filepaths", "folders"],
    },
  ],
  options: [
    {
      name: "-H",
      description:
        "If the -R option is specified, symbolic links on the command line are followed",
      exclusiveOn: ["-L", "-P"],
      dependsOn: ["-R"],
    },
    {
      name: "-L",
      description:
        "If the -R option is specified, all symbolic links are followed",
      exclusiveOn: ["-H", "-P"],
      dependsOn: ["-R"],
    },
    {
      name: "-P",
      description:
        "No symbolic links are followed. This is the default if the -R option is specified",
      exclusiveOn: ["-H", "-L"],
    },
    {
      name: "-R",
      description:
        "If source designates a directory, cp copies the directory and the entire subtree connected at that point. If source ends in a /, the contents of the directory are copied rather than the directory itself",
    },
    {
      name: "-r",
      description:
        "Historic recursive copy whose behavior is implementation-dependent; use -R instead",
      deprecated: true,
    },
    {
      name: "-a",
      description:
        "Archive mode, same as -RpP. Preserves structure and attributes of files but not directory structure",
    },
    {
      name: "-c",
      description:
        "Copy files using clonefile(2), falling back to copyfile(2) if the target filesystem does not support it",
    },
    {
      name: "-f",
      description:
        "For each existing destination pathname, remove it and create a new file, without prompting for confirmation",
      exclusiveOn: ["-i", "-n"],
    },
    {
      name: "-i",
      description:
        "Cause cp to write a prompt to the standard error output before copying a file that would overwrite an existing file",
      exclusiveOn: ["-f", "-n"],
    },
    {
      name: "-l",
      description:
        "Create hard links to regular files in a hierarchy instead of copying",
    },
    {
      name: "-N",
      description: "When used with -p, suppress copying file flags",
    },
    {
      name: "-n",
      description: "Do not overwrite an existing file",
      exclusiveOn: ["-f", "-i"],
    },
    {
      name: "-p",
      description:
        "Preserve modification time, access time, file flags, file mode, user ID, group ID, ACLs and extended attributes",
    },
    {
      name: "-S",
      description: "Do not attempt to preserve holes in sparse files",
    },
    {
      name: "-s",
      description:
        "Create symbolic links to regular files in a hierarchy instead of copying",
    },
    {
      name: "-v",
      description: "Cause cp to be verbose, showing files as they are copied",
    },
    {
      name: "-X",
      description: "Do not copy Extended Attributes (EAs) or resource forks",
    },
    {
      name: "-x",
      description: "File system mount points are not traversed",
    },
  ],
};

export default completionSpec;
