// util-linux mount v2.42.4 (latest stable tag of github.com/util-linux/util-linux, 2026-11-19). Source: static read of
// sys-utils/mount.c (usage, longopts, option handling) and sys-utils/mount.8.adoc at tag v2.42.4; the binary was not run.
// This spec describes the Linux (util-linux) mount; macOS/BSD mount has a different option set and is not covered.
// Filesystem-specific -o options are not enumerated.
const operations = ["-B", "--bind", "-M", "--move", "-R", "--rbind"];
const sources = ["-L", "--label", "-U", "--uuid", "--source"];

const completionSpec: Fig.Spec = {
  name: "mount",
  description: "Mount disks and manage subtrees",
  args: [
    {
      name: "Disk/loopfile",
      template: "filepaths",
      generators: [
        {
          script: ["cat", "/proc/partitions"], // this way we don't depend on lsblk
          postProcess: (out) => {
            return out
              .trim()
              .split("\n")
              .splice(2, out.length)
              .map((line) => "/dev/" + line.split(" ").pop())
              .filter((x) => x != "/dev/")
              .map((blk) => {
                return { name: blk, description: "Block device" };
              });
          },
        },
        {
          script: ["ls", "-1", "/dev/mapper"], // usually LUKS encrypted partitions are here
          postProcess: (out) => {
            return out
              .trim()
              .split("\n")
              .filter((x) => x.length != 0)
              .map((blk) => {
                return {
                  name: "/dev/mapper/" + blk,
                  description: "Mapped block device",
                };
              });
          },
        },
      ],
    },
    {
      name: "mountpoint",
      template: "folders",
      suggestions: ["/mnt", "/run/media/"],
    },
  ],
  options: [
    {
      name: ["-h", "--help"],
      description: "Display help",
    },
    {
      name: ["-V", "--version"],
      description: "Display version",
    },
    {
      name: ["-a", "--all"],
      description: "Mount all filesystems mentioned in fstab",
    },
    {
      name: ["-c", "--no-canonicalize"],
      description: "Don't canonicalize paths",
    },
    {
      name: "--beneath",
      description: "Attach the filesystem beneath the top mount",
    },
    {
      name: "--exclusive",
      description: "Allow only one filesystem instance",
    },
    {
      name: ["-f", "--fake"],
      description: "Dry run; skip the mount(2) syscall",
    },
    {
      name: ["-F", "--fork"],
      description: "Fork off for each device (use with -a)",
    },
    {
      name: ["-T", "--fstab"],
      description: "Alternative file to /etc/fstab",
      isRepeatable: true,
      args: {
        name: "path",
        template: "filepaths",
        default: "/etc/fstab",
      },
    },
    {
      name: ["-i", "--internal-only"],
      description: "Don't call the mount.<type> helpers",
    },
    {
      name: ["-l", "--show-labels"],
      description: "Show also filesystem labels",
    },
    {
      name: "--map-groups",
      description:
        "Add the specified GID map to an ID-mapped mount (inner:outer:count)",
      isRepeatable: true,
      args: {
        name: "inner:outer:count",
      },
    },
    {
      name: "--map-users",
      description:
        "Add the specified UID map to an ID-mapped mount, or use the user namespace given as /proc/<pid>/ns/user",
      isRepeatable: true,
      args: {
        name: "map",
        description: "Format inner:outer:count, or a user namespace file path",
      },
    },
    {
      name: ["-m", "--mkdir"],
      description:
        "Create the mountpoint if it does not exist (alias to -o X-mount.mkdir[=mode])",
      requiresSeparator: true,
      args: {
        name: "mode",
        description: "Mode of the created directory (default: 0755)",
        isOptional: true,
      },
    },
    {
      name: ["-n", "--no-mtab"],
      description: "Don't write to /etc/mtab",
    },
    {
      name: "--options-mode",
      description: "What to do with options loaded from fstab",
      args: {
        name: "mode",
        suggestions: [
          {
            name: "ignore",
            description: "Ignore options from fstab",
          },
          {
            name: "append",
            description:
              "Append options from fstab to the command line options",
          },
          {
            name: "prepend",
            description:
              "Prepend options from fstab to the command line options (default)",
          },
          {
            name: "replace",
            description:
              "Replace options from fstab by the command line options",
          },
        ],
      },
    },
    {
      name: "--options-source",
      description:
        "Comma-separated list of sources of default options (default: fstab,mtab)",
      args: {
        name: "source",
        suggestions: [
          {
            name: "fstab",
            description: "Use options from fstab",
          },
          {
            name: "mtab",
            description: "Use options from mtab",
          },
          {
            name: "disable",
            description:
              "Disable fstab and mtab and enable --options-source-force",
          },
        ],
      },
    },
    {
      name: "--options-source-force",
      description: "Force use of options from fstab/mtab",
    },
    {
      name: "--onlyonce",
      description: "Check if the filesystem is already mounted on the target",
    },
    {
      name: ["-o", "--options"],
      description: "Comma-separated list of mount options",
      args: {
        name: "list",
      },
    },
    {
      name: ["-O", "--test-opts"],
      description: "Limit the set of filesystems (use with -a)",
      args: {
        name: "list",
      },
    },
    {
      name: ["-r", "--ro", "--read-only"],
      description: "Mount the filesystem read-only (same as -o ro)",
    },
    {
      name: ["-t", "--types"],
      description: "Limit the set of filesystem types",
      args: {
        name: "list",
      },
    },
    {
      name: "--source",
      description: "Explicitly specify the source (path, label, uuid)",
      exclusiveOn: sources,
      args: {
        name: "source",
        template: "filepaths",
        suggestions: ["LABEL=", "UUID=", "PARTLABEL=", "PARTUUID=", "ID="],
      },
    },
    {
      name: "--target",
      description: "Explicitly specify the mountpoint",
      args: {
        name: "mountpoint",
        template: "folders",
      },
    },
    {
      name: "--target-prefix",
      description: "Specify the path used for all mountpoints",
      args: {
        name: "path",
        template: "folders",
      },
    },
    {
      name: ["-v", "--verbose"],
      description: "Say what is being done",
    },
    {
      name: ["-w", "--rw", "--read-write"],
      description: "Mount the filesystem read-write (default)",
    },
    {
      name: ["-N", "--namespace"],
      description: "Perform the mount in another namespace",
      args: {
        name: "ns",
        description: "PID of a process or a mount namespace file",
        template: "filepaths",
      },
    },
    {
      name: "-s",
      description: "Tolerate sloppy mount options rather than failing",
    },
    {
      name: ["-L", "--label"],
      description: "Mount the partition that has the specified label",
      exclusiveOn: sources,
      args: {
        name: "label",
      },
    },
    {
      name: ["-U", "--uuid"],
      description: "Mount the partition that has the specified UUID",
      exclusiveOn: sources,
      args: {
        name: "uuid",
      },
    },
    {
      name: ["-B", "--bind"],
      description: "Mount a subtree somewhere else (same as -o bind)",
      exclusiveOn: operations,
    },
    {
      name: ["-M", "--move"],
      description: "Move a subtree to some other place",
      exclusiveOn: operations,
    },
    {
      name: ["-R", "--rbind"],
      description: "Mount a subtree and all submounts somewhere else",
      exclusiveOn: operations,
    },
    {
      name: "--make-shared",
      description: "Mark a subtree as shared",
    },
    {
      name: "--make-slave",
      description: "Mark a subtree as slave",
    },
    {
      name: "--make-private",
      description: "Mark a subtree as private",
    },
    {
      name: "--make-unbindable",
      description: "Mark a subtree as unbindable",
    },
    {
      name: "--make-rshared",
      description: "Recursively mark a whole subtree as shared",
    },
    {
      name: "--make-rslave",
      description: "Recursively mark a whole subtree as slave",
    },
    {
      name: "--make-rprivate",
      description: "Recursively mark a whole subtree as private",
    },
    {
      name: "--make-runbindable",
      description: "Recursively mark a whole subtree as unbindable",
    },
  ],
};

export default completionSpec;
