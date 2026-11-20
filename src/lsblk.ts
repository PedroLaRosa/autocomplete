// util-linux lsblk v2.42.4 (latest stable tag of github.com/util-linux/util-linux, 2026-11-19). Source: static read of
// misc-utils/lsblk.c (usage, longopts, column table), misc-utils/lsblk.8.adoc and bash-completion/lsblk at tag v2.42.4;
// the binary was not run (only an older lsblk 2.39.3 is installed locally). Linux-only tool, there is no macOS equivalent.
const column = ([name, description]: [string, string]): Fig.Suggestion => ({
  name,
  description,
});

// Output columns, from the column table of lsblk.c (also printed by `lsblk --list-columns`)
const columns = [
  ["ALIGNMENT", "Alignment offset"],
  ["DAX", "DAX-capable device"],
  ["DISC-ALN", "Discard alignment offset"],
  ["DISC-GRAN", "Discard granularity"],
  ["DISC-MAX", "Discard max bytes"],
  ["DISC-ZERO", "Discard zeroes data"],
  ["DISK-SEQ", "Disk sequence number"],
  ["FSAVAIL", "Filesystem size available for unprivileged users"],
  ["FSROOTS", "Mounted filesystem roots"],
  ["FSSIZE", "Filesystem size"],
  ["FSTYPE", "Filesystem type"],
  ["FSUSE%", "Filesystem use percentage"],
  ["FSUSED", "Filesystem size used"],
  ["FSVER", "Filesystem version"],
  ["GROUP", "Group name"],
  ["HCTL", "Host:Channel:Target:Lun for SCSI"],
  ["HOTPLUG", "Removable or hotplug device (usb, pcmcia, ...)"],
  ["ID", "Udev ID (based on ID-LINK)"],
  ["ID-LINK", "The shortest udev /dev/disk/by-id link name"],
  ["KNAME", "Internal kernel device name"],
  ["LABEL", "Filesystem label"],
  ["LOG-SEC", "Logical sector size"],
  ["MAJ", "Major device number"],
  ["MAJ:MIN", "Major:minor device number"],
  ["MIN", "Minor device number"],
  ["MIN-IO", "Minimum I/O size"],
  ["MODE", "Device node permissions"],
  ["MODEL", "Device identifier"],
  ["MOUNTPOINT", "Where the device is mounted"],
  ["MOUNTPOINTS", "All locations where device is mounted"],
  ["MQ", "Device queues"],
  ["NAME", "Device name"],
  ["OPT-IO", "Optimal I/O size"],
  ["OWNER", "User name"],
  ["PARTFLAGS", "Partition flags"],
  ["PARTLABEL", "Partition label"],
  ["PARTN", "Partition number as read from the partition table"],
  ["PARTTYPE", "Partition type code or UUID"],
  ["PARTTYPENAME", "Partition type name"],
  ["PARTUUID", "Partition UUID"],
  ["PATH", "Path to the device node"],
  ["PHY-SEC", "Physical sector size"],
  ["PKNAME", "Internal parent kernel device name"],
  ["PTTYPE", "Partition table type"],
  ["PTUUID", "Partition table identifier (usually UUID)"],
  ["RA", "Read-ahead of the device"],
  ["RAND", "Adds randomness"],
  ["REV", "Device revision"],
  ["RM", "Removable device"],
  ["RO", "Read-only device"],
  ["ROTA", "Rotational device"],
  ["RQ-SIZE", "Request queue size"],
  ["SCHED", "I/O scheduler name"],
  ["SERIAL", "Disk serial number"],
  ["SIZE", "Size of the device"],
  ["START", "Partition start offset (in 512-byte sectors)"],
  ["STATE", "State of the device"],
  ["SUBSYSTEMS", "De-duplicated chain of subsystems"],
  ["TRAN", "Device transport type"],
  ["TYPE", "Device type"],
  ["UUID", "Filesystem UUID"],
  ["VENDOR", "Device vendor"],
  ["WSAME", "Write same max bytes"],
  ["WWN", "Unique storage identifier"],
  ["ZONE-AMAX", "Maximum number of active zones"],
  ["ZONE-APP", "Zone append max bytes"],
  ["ZONE-NR", "Number of zones"],
  ["ZONE-OMAX", "Maximum number of open zones"],
  ["ZONE-SZ", "Zone size"],
  ["ZONE-WGRAN", "Zone write granularity"],
  ["ZONED", "Zone model"],
].map(column);

const columnArg: Fig.Arg = { name: "column", suggestions: columns };

// Mutually exclusive options (the `excl` table in lsblk.c)
const include = ["-I", "--include"];
const exclude = ["-e", "--exclude"];
const json = ["-J", "--json"];
const pairs = ["-P", "--pairs"];
const raw = ["-r", "--raw"];
const tree = ["-T", "--tree"];
const list = ["-l", "--list"];
const outputAll = ["-O", "--output-all"];
const columnPresets = [
  "-D",
  "--discard",
  "-S",
  "--scsi",
  "-f",
  "--fs",
  "-m",
  "--perms",
  "-o",
  "--output",
  "-t",
  "--topology",
];

const completionSpec: Fig.Spec = {
  name: "lsblk",
  description: "List block devices",
  options: [
    {
      name: ["--help", "-h"],
      description: "Display help",
    },
    {
      name: ["--version", "-V"],
      description: "Display version",
    },
    {
      name: ["--noempty", "-A"],
      description: "Don't print empty devices",
    },
    {
      name: ["--all", "-a"],
      description:
        "Disable all built-in filters and list all empty devices and RAM disk devices too",
    },
    {
      name: ["--bytes", "-b"],
      description:
        "Print the SIZE column in bytes instead of a human-readable format",
    },
    {
      name: ["--list-columns", "-H"],
      description: "List the columns that can be specified with --output",
    },
    {
      name: ["--discard", "-D"],
      description:
        "Print information about the discarding capabilities (TRIM, UNMAP) for each device",
      exclusiveOn: outputAll,
    },
    {
      name: ["--nodeps", "-d"],
      description: "Do not print holder devices or slaves",
    },
    {
      name: ["--dedup", "-E"],
      description:
        "Use column as a de-duplication key to de-duplicate output tree",
      args: columnArg,
    },
    {
      name: exclude,
      description:
        "Exclude the devices specified by the comma-separated list of major device numbers (default: RAM disks)",
      args: {
        name: "list",
      },
      exclusiveOn: include,
    },
    {
      name: ["--fs", "-f"],
      description: "Output info about filesystems",
      exclusiveOn: outputAll,
    },
    {
      name: "--hyperlink",
      description: "Print paths as terminal hyperlinks",
      requiresSeparator: true,
      args: {
        name: "when",
        isOptional: true,
        suggestions: ["always", "never", "auto"],
      },
    },
    {
      name: include,
      description:
        "Show only the devices specified by the comma-separated list of major device numbers",
      args: {
        name: "list",
      },
      exclusiveOn: exclude,
    },
    {
      name: ["--ascii", "-i"],
      description: "Use ASCII characters for tree formatting",
    },
    {
      name: json,
      description: "Use JSON output format",
      exclusiveOn: [...pairs, ...raw],
    },
    {
      name: list,
      description: "Produce output in the form of a list",
      exclusiveOn: [...pairs, ...tree, ...raw],
    },
    {
      name: ["--merge", "-M"],
      description:
        "Group parents of sub-trees to provide more readable output for RAIDs and Multi-path devices",
    },
    {
      name: ["--perms", "-m"],
      description: "Output info about device owner, group and mode",
      exclusiveOn: outputAll,
    },
    {
      name: ["--nvme", "-N"],
      description: "Output info about NVMe devices only",
    },
    {
      name: ["--virtio", "-v"],
      description: "Output info about virtio devices only",
    },
    {
      name: ["--noheadings", "-n"],
      description: "Do not print a header line",
    },
    {
      name: ["--output", "-o"],
      description:
        "Specify which output columns to print (a leading + extends the default list)",
      args: {
        name: "list",
        suggestions: columns,
      },
      exclusiveOn: outputAll,
    },
    {
      name: outputAll,
      description: "Output all available columns",
      exclusiveOn: columnPresets,
    },
    {
      name: pairs,
      description: 'Produce output in the form of key="value" pairs',
      exclusiveOn: [...json, ...tree, ...list, ...raw],
    },
    {
      name: ["--paths", "-p"],
      description: "Print full device paths",
    },
    {
      name: ["--filter", "-Q"],
      description:
        "Print only the devices that meet the conditions specified by the expression (experimental)",
      args: {
        name: "expression",
      },
    },
    {
      name: "--highlight",
      description: "Colorize lines matching the expression (experimental)",
      args: {
        name: "expression",
      },
    },
    {
      name: "--ct",
      description:
        "Define a custom counter, printed after the standard output (experimental)",
      isRepeatable: true,
      args: {
        name: "name[:column[:function]]",
        description:
          "Counter name, optional column and optional function (count, min, max, sum)",
      },
    },
    {
      name: "--ct-filter",
      description: "Define a restriction for the next counter (experimental)",
      isRepeatable: true,
      args: {
        name: "expression",
      },
    },
    {
      name: raw,
      description: "Produce output in raw format",
      exclusiveOn: [...json, ...pairs, ...tree, ...list],
    },
    {
      name: ["--scsi", "-S"],
      description: "Output info about SCSI devices only",
      exclusiveOn: outputAll,
    },
    {
      name: ["--inverse", "-s"],
      description: "Print dependencies in inverse order",
    },
    {
      name: tree,
      description: "Force tree-like output format",
      requiresSeparator: true,
      args: {
        ...columnArg,
        isOptional: true,
      },
      exclusiveOn: [...pairs, ...list, ...raw],
    },
    {
      name: ["--topology", "-t"],
      description: "Output info about block-device topology",
      exclusiveOn: outputAll,
    },
    {
      name: ["--width", "-w"],
      description: "Specify output width as a number of characters",
      args: {
        name: "number",
      },
    },
    {
      name: ["--sort", "-x"],
      description: "Sort output lines by column",
      args: columnArg,
    },
    {
      name: ["--shell", "-y"],
      description:
        "Modify column names to contain only characters allowed in shell variable names (MIN_IO, FSUSE_PCT)",
    },
    {
      name: ["--zoned", "-z"],
      description: "Print the zone model for each device",
    },
    {
      name: "--sysroot",
      description:
        "Gather data for a Linux instance other than the instance from which the lsblk command is issued",
      args: {
        name: "directory",
        template: "folders",
      },
    },
    {
      name: "--properties-by",
      description:
        "Comma-separated list of methods used to gather filesystem and partition table info (default: file,udev,blkid)",
      args: {
        name: "list",
        suggestions: [
          {
            name: "udev",
            description: "Read data from the udev database",
          },
          {
            name: "blkid",
            description: "Read data directly from the device using libblkid",
          },
          {
            name: "file",
            description: "Read data from files (only used with --sysroot)",
          },
          {
            name: "none",
            description: "Do not probe",
          },
        ],
      },
    },
  ],
  args: {
    name: "device",
    description: "Device to list",
    isOptional: true,
    isVariadic: true,
    template: "filepaths",
  },
};
export default completionSpec;
