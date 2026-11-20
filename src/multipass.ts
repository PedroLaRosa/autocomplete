// Multipass v1.17.2 (latest stable tag of canonical/multipass, matches the Homebrew cask, 2026-11-20).
// Source: src/client/cli/client.cpp, src/client/cli/cmd/*.cpp (all 33 commands), argparser.cpp,
// constants.h and docs/reference/{command-line-interface,settings} at tag v1.17.2 (static read, not run)
const sharedOpts: Record<string, Fig.Option> = {
  help: {
    name: ["-h", "--help"],
    description: "Displays help on commandline options",
    isPersistent: true,
  },
  version: {
    name: ["-V", "--version"],
    description: "Show version details",
    hidden: true,
  },
  verbose: {
    name: ["-v", "--verbose"],
    description:
      "Increase logging verbosity. Repeat the 'v' in the short " +
      "option for more detail. Maximum verbosity is obtained " +
      "with 4 (or more) v's, i.e. -vvvv",
    isPersistent: true,
    isRepeatable: 4,
  },
  format: {
    name: "--format",
    description:
      "Output list in the requested format. " +
      "Valid formats are: table (default), json, csv and yaml",
    args: {
      name: "format",
      suggestions: ["table", "json", "csv", "yaml"],
      default: "table",
    },
  },
  timeout: {
    name: "--timeout",
    description:
      "Maximum time, in seconds, to wait for the command to " +
      "complete. Note that some background operations may " +
      "continue beyond that. By default, instance startup and " +
      "initialization is limited to 5 minutes each",
    args: {
      name: "timeout",
      default: "300",
    },
  },
};

const multipassGenerators: Record<string, Fig.Generator> = {
  allAvailableImages: {
    script: ["multipass", "find", "--format=json"],
    postProcess: (out) => {
      const images = JSON.parse(out).images;
      return Object.keys(images).map((key) => {
        return {
          name: key,
          description: images[key].os + " " + images[key].release,
        };
      });
    },
  },
  allAvailableInstances: {
    script: ["multipass", "list", "--format=json"],
    postProcess: (out) => {
      return JSON.parse(out).list.map((instance) => {
        if (instance.state !== "Deleted") {
          return {
            name: instance.name,
            description: instance.release,
          };
        }
      });
    },
  },
  allRunningInstances: {
    script: ["multipass", "list", "--format=json"],
    postProcess: (out) => {
      return JSON.parse(out).list.map((instance) => {
        if (instance.state === "Running") {
          return {
            name: instance.name,
            description: instance.release,
          };
        }
      });
    },
  },
  allStoppedInstances: {
    script: ["multipass", "list", "--format=json"],
    postProcess: (out) => {
      return JSON.parse(out).list.map((instance) => {
        if (instance.state === "Stopped") {
          return {
            name: instance.name,
            description: instance.release,
          };
        }
      });
    },
  },
  allDeletedInstances: {
    script: ["multipass", "list", "--format=json"],
    postProcess: (out) => {
      return JSON.parse(out).list.map((instance) => {
        if (instance.state === "Deleted") {
          return {
            name: instance.name,
            description: instance.release,
          };
        }
      });
    },
  },
  allSnapshots: {
    script: ["multipass", "list", "--snapshots", "--format=json"],
    postProcess: (out) => {
      const info = JSON.parse(out).info;
      return Object.keys(info).flatMap((instance) =>
        Object.keys(info[instance]).map((snapshot) => ({
          name: `${instance}.${snapshot}`,
          description: info[instance][snapshot].comment || "Snapshot",
        }))
      );
    },
  },
  allZones: {
    script: ["multipass", "zones", "--format=json"],
    postProcess: (out) => {
      const zones = JSON.parse(out);
      return Object.keys(zones).map((zone) => ({
        name: zone,
        description: zones[zone].available ? "Available" : "Unavailable",
      }));
    },
  },
};

const settingKeys = [
  "client.apps.windows-terminal.profiles",
  "client.primary-name",
  "local.bridged-network",
  "local.driver",
  "local.image.mirror",
  "local.passphrase",
  "local.privileged-mounts",
];

const completionSpec: Fig.Spec = {
  name: "multipass",
  description: "Create, control and connect to Ubuntu instances",
  subcommands: [
    {
      name: "alias",
      description: "Create an alias",
      options: [
        {
          name: ["-n", "--no-map-working-directory"],
          description:
            "Do not automatically map the host execution path to a mounted path",
        },
      ],
      args: [
        {
          name: "definition",
          description: "Alias definition in the form <instance>:<command>",
        },
        {
          isOptional: true,
          name: "name",
          description:
            "Name given to the alias being defined, defaults to <command>",
        },
      ],
    },
    {
      name: "aliases",
      description: "List available aliases",
      options: [sharedOpts.format],
    },
    {
      name: ["authenticate", "auth"],
      description: "Authenticate client",
      args: {
        name: "passphrase",
        description:
          "Passphrase to register with the Multipass service. If omitted, a prompt will be displayed for entering the passphrase",
        isOptional: true,
      },
    },
    {
      name: "clone",
      description: "Clone an instance",
      options: [
        {
          name: ["-n", "--name"],
          description:
            'An optional custom name for the cloned instance. Default: "<source_name>-cloneN"',
          args: { name: "destination-name" },
        },
      ],
      args: {
        name: "source_name",
        description: "The name of the source instance to be cloned",
        generators: multipassGenerators.allAvailableInstances,
      },
    },
    {
      name: "delete",
      description: "Delete instances and snapshots",
      options: [
        {
          name: "--all",
          description: "Delete all instances and snapshots",
        },
        {
          name: ["-p", "--purge"],
          description:
            "Permanently delete specified instances and snapshots immediately",
        },
      ],
      args: {
        isVariadic: true,
        name: "instance[.snapshot]",
        description: "Names of instances and snapshots to delete",
        generators: [
          multipassGenerators.allAvailableInstances,
          multipassGenerators.allSnapshots,
        ],
      },
    },
    {
      name: "disable-zones",
      description: "Make zones unavailable",
      options: [
        {
          name: "--all",
          description: "Disable all zones",
        },
        {
          name: "--force",
          description: "Do not ask for confirmation",
        },
      ],
      args: {
        isVariadic: true,
        isOptional: true,
        name: "zone",
        description: "Name of the zones to make unavailable",
        generators: multipassGenerators.allZones,
      },
    },
    {
      name: "enable-zones",
      description: "Make zones available",
      options: [
        {
          name: "--all",
          description: "Enable all zones",
        },
      ],
      args: {
        isVariadic: true,
        isOptional: true,
        name: "zone",
        description: "Name of the zones to make available",
        generators: multipassGenerators.allZones,
      },
    },
    {
      name: "exec",
      description: "Run a command on an instance",
      options: [
        {
          name: ["-d", "--working-directory"],
          description: "Change to <dir> before execution",
          exclusiveOn: ["-n", "--no-map-working-directory"],
          args: { name: "dir" },
        },
        {
          name: ["-n", "--no-map-working-directory"],
          description: "Do not map the host execution path to a mounted path",
          exclusiveOn: ["-d", "--working-directory"],
        },
      ],
      args: [
        {
          name: "name",
          description: "Name of the instance to run the command on",
          generators: multipassGenerators.allAvailableInstances,
        },
        {
          name: "command",
          description: "Command to execute on the instance",
        },
      ],
    },
    {
      name: "find",
      description: "Display available images to create instances from",
      options: [
        sharedOpts.format,
        {
          name: "--show-unsupported",
          description: "Show unsupported cloud images as well",
        },
        {
          name: "--force-update",
          description: "Force the image information to update from the network",
        },
      ],
      args: {
        isOptional: true,
        name: "string",
        description:
          "An optional value to search for in [<remote:>]<string> " +
          "format, where <remote> can be either 'release' or 'daily'. " +
          "If <remote> is omitted, it will search 'release' first, " +
          "and if no matches are found, it will then search 'daily'. " +
          "<string> can be a partial image hash or an Ubuntu release " +
          "version, codename or alias.",
      },
    },
    {
      name: "get",
      description: "Get a configuration setting",
      options: [
        {
          name: "--raw",
          description:
            "Output in raw format. For now, this affects only the " +
            'representation of empty values (i.e. "" instead of "<empty>")',
        },
        {
          name: "--keys",
          description:
            "List available settings keys, or just <arg> if provided and a valid key",
        },
      ],
      args: {
        name: "key",
        description: "Setting key, i.e. path to the intended setting",
        isOptional: true,
        suggestions: settingKeys,
      },
    },
    {
      name: "help",
      description: "Display help about a command",
      args: {
        name: "command",
        description: "Name of command to display help for",
        isOptional: true,
      },
    },
    {
      name: "info",
      description: "Display information about instances or snapshots",
      options: [
        sharedOpts.format,
        {
          name: "--snapshots",
          description:
            "Display detailed information about the snapshots of specified instances",
        },
        {
          name: "--no-runtime-information",
          description:
            "Retrieve from the daemon only the information obtained without running commands on the instance",
          hidden: true,
        },
      ],
      args: {
        isVariadic: true,
        isOptional: true,
        name: "instance[.snapshot]",
        description:
          "Names of instances or snapshots to display information about",
        generators: [
          multipassGenerators.allAvailableInstances,
          multipassGenerators.allSnapshots,
        ],
      },
    },
    {
      name: "launch",
      description: "Create and start a cloud instance",
      options: [
        sharedOpts.timeout,
        {
          name: ["-c", "--cpus"],
          description: "Number of CPUs to allocate. Minimum: 1, default: 1",
          args: {
            name: "cpus",
            default: "1",
          },
        },
        {
          name: ["-d", "--disk"],
          description:
            "Disk space to allocate. Positive integers, in bytes, or " +
            "decimals, with K, M, G suffix. " +
            "Minimum: 1G, default: 5G",
          args: {
            name: "disk",
            default: "5G",
          },
        },
        {
          name: ["-m", "--memory"],
          description:
            "Amount of memory to allocate. Positive integers, in " +
            "bytes, or decimals, with K, M, G suffix. " +
            "Minimum: 512M, default: 1G",
          args: {
            name: "memory",
            default: "1G",
          },
        },
        {
          name: ["-n", "--name"],
          description:
            "Name for the instance. If it is 'primary' (the " +
            "configured primary instance name), the user's home " +
            "directory is mounted inside the newly launched instance, " +
            "in 'Home'",
          args: {
            name: "name",
          },
        },
        {
          name: "--cloud-init",
          description:
            "Path or URL to a user-data cloud-init configuration, or '-' " +
            "for stdin",
          args: {
            name: "file | url",
            template: "filepaths",
          },
        },
        {
          name: "--network",
          description:
            "Add a network interface to the instance, where <spec> is " +
            'in the "key=value,key=value" format, with the keys name ' +
            "(required, see the networks command; 'bridged' uses " +
            "local.bridged-network), mode (auto|manual, default: auto) " +
            "and mac (default: random). A bare <name> means name=<name>",
          isRepeatable: true,
          args: {
            name: "spec",
          },
        },
        {
          name: "--bridged",
          description: "Adds one `--network bridged` network",
        },
        {
          name: "--zone",
          description: "The zone in which to launch the instance",
          args: {
            name: "zone",
            generators: multipassGenerators.allZones,
          },
        },
        {
          name: "--mount",
          description:
            "Mount a local directory inside the instance. If <target> is " +
            "omitted, the mount point will be under /home/ubuntu/<source-dir>",
          isRepeatable: true,
          args: {
            name: "source:target",
            template: "folders",
          },
        },
      ],
      args: {
        isOptional: true,
        name: "image",
        description:
          "Optional image to launch, as [<remote:>]<image> or an http://, " +
          "https:// or file:// URL. If omitted, the latest Ubuntu LTS " +
          "will be used",
        generators: multipassGenerators.allAvailableImages,
      },
    },
    {
      name: ["list", "ls"],
      description: "List all available instances or snapshots",
      options: [
        sharedOpts.format,
        {
          name: "--snapshots",
          description: "List all available snapshots",
        },
        {
          name: "--no-ipv4",
          description:
            "Do not query the instances for the IPv4's they are using",
          hidden: true,
        },
      ],
    },
    {
      name: "mount",
      description: "Mount a local directory in the instance",
      options: [
        {
          name: ["-g", "--gid-map"],
          description:
            "A mapping of group IDs for use in the mount. " +
            "File and folder ownership will be mapped from " +
            "<host> to <instance> inside the instance. Can " +
            "be used multiple times",
          isRepeatable: true,
          args: {
            name: "host:instance",
          },
        },
        {
          name: ["-u", "--uid-map"],
          description:
            "A mapping of user IDs for use in the mount. " +
            "File and folder ownership will be mapped from " +
            "<host> to <instance> inside the instance. Can " +
            "be used multiple times",
          isRepeatable: true,
          args: {
            name: "host:instance",
          },
        },
        {
          name: ["-t", "--type"],
          description:
            "Specify the type of mount to use. Classic mounts use technology " +
            "built into Multipass, native mounts use hypervisor and/or " +
            "platform specific mounts",
          args: {
            name: "type",
            suggestions: ["classic", "native"],
            default: "classic",
          },
        },
      ],
      args: [
        {
          name: "source",
          description: "Path to the local directory to mount",
          template: "folders",
        },
        {
          isVariadic: true,
          name: "target",
          description:
            "Target mount points, in <name>[:<path>] " +
            "format, where <name> is an instance name, and " +
            "optional <path> is the mount point. If " +
            "omitted, the mount point will be the same as " +
            "the source's absolute path",
        },
      ],
    },
    {
      name: "networks",
      description: "List available network interfaces",
      options: [sharedOpts.format],
    },
    {
      name: "prefer",
      description: "Switch the current alias context",
      args: {
        name: "name",
        description: "Name of the context to switch to",
      },
    },
    {
      name: "purge",
      description: "Purge all deleted instances permanently",
    },
    {
      name: "recover",
      description: "Recover deleted instances",
      options: [
        {
          name: "--all",
          description: "Recover all deleted instances",
        },
      ],
      args: {
        isVariadic: true,
        name: "name",
        description: "Names of instances to recover",
        generators: multipassGenerators.allDeletedInstances,
      },
    },
    {
      name: "restart",
      description: "Restart instances",
      options: [
        sharedOpts.timeout,
        {
          name: "--all",
          description: "Restart all instances",
        },
      ],
      args: {
        isVariadic: true,
        isOptional: true,
        name: "name",
        description:
          "Names of instances to restart. If omitted, and without " +
          "the --all option, 'primary' will be assumed",
        generators: multipassGenerators.allAvailableInstances,
      },
    },
    {
      name: "restore",
      description: "Restore an instance from a snapshot",
      options: [
        {
          name: ["-d", "--destructive"],
          description: "Discard the current state of the instance",
        },
      ],
      args: {
        name: "instance.snapshot",
        description:
          "The instance to restore and snapshot to use, in <instance>.<snapshot> format",
        generators: multipassGenerators.allSnapshots,
      },
    },
    {
      name: "set",
      description: "Set a configuration setting",
      args: {
        name: "key[=value]",
        description:
          "A key, or a key-value pair. The key specifies a path to the " +
          "setting to configure. The value is its intended value. If only " +
          "the key is given, the value will be prompted for",
        suggestions: settingKeys.map((key) => `${key}=`),
      },
    },
    {
      name: ["shell", "sh", "connect"],
      description: "Open a shell on an instance",
      options: [sharedOpts.timeout],
      args: {
        isOptional: true,
        name: "name",
        description:
          "Name of the instance to open a shell on. If omitted, " +
          "'primary' (the configured primary instance name) will be " +
          "assumed. If the instance is not running, an attempt is " +
          "made to start it (see `start` for more info)",
        generators: multipassGenerators.allAvailableInstances,
      },
    },
    {
      name: "snapshot",
      description: "Take a snapshot of an instance",
      options: [
        {
          name: ["-n", "--name"],
          description:
            'An optional name for the snapshot. Default: "snapshotN"',
          args: { name: "name" },
        },
        {
          name: ["--comment", "-c", "-m"],
          description:
            "An optional free comment to associate with the snapshot",
          args: { name: "comment" },
        },
      ],
      args: {
        name: "instance",
        description: "The instance to take a snapshot of",
        generators: multipassGenerators.allAvailableInstances,
      },
    },
    {
      name: "start",
      description: "Start instances",
      options: [
        sharedOpts.timeout,
        {
          name: "--all",
          description: "Start all instances",
        },
      ],
      args: {
        isVariadic: true,
        isOptional: true,
        name: "name",
        description:
          "Names of instances to start. If omitted, and without the " +
          "--all option, 'primary' (the configured primary instance " +
          "name) will be assumed. If 'primary' does not exist but is " +
          "included in a successful start command either implicitly " +
          "or explicitly), it is launched automatically (see" +
          "`launch` for more info).",
        generators: multipassGenerators.allStoppedInstances,
      },
    },
    {
      name: "stop",
      description: "Stop running instances",
      options: [
        {
          name: "--all",
          description: "Stop all instances",
        },
        {
          name: ["-t", "--time"],
          description:
            "Time from now, in minutes, to delay shutdown of the instance",
          exclusiveOn: ["-c", "--cancel", "--force"],
          args: {
            name: "time",
            default: "0",
          },
        },
        {
          name: ["-c", "--cancel"],
          description: "Cancel a pending delayed shutdown",
          exclusiveOn: ["-t", "--time", "--force"],
        },
        {
          name: "--force",
          description:
            "Force the instance to shut down immediately. Warning: this could " +
            "potentially corrupt a running instance, so use with caution",
          exclusiveOn: ["-t", "--time", "-c", "--cancel"],
        },
      ],
      args: {
        isVariadic: true,
        isOptional: true,
        name: "name",
        description:
          "Names of instances to stop. If omitted, and without the " +
          "--all option, 'primary' will be assumed.",
        generators: multipassGenerators.allRunningInstances,
      },
    },
    {
      name: "suspend",
      description: "Suspend running instances",
      options: [
        {
          name: "--all",
          description: "Suspend all instances",
        },
      ],
      args: {
        isVariadic: true,
        isOptional: true,
        name: "name",
        description:
          "Names of instances to suspend. If omitted, and without the " +
          "--all option, 'primary' will be assumed.",
        generators: multipassGenerators.allRunningInstances,
      },
    },
    {
      name: ["transfer", "copy-files"],
      description: "Transfer files between the host and instances",
      options: [
        {
          name: ["-r", "--recursive"],
          description: "Recursively copy entire directories",
        },
        {
          name: ["-p", "--parents"],
          description: "Make parent directories as needed",
        },
      ],
      args: [
        {
          isVariadic: true,
          name: "source",
          description:
            "One or more paths to transfer, prefixed with <name:> for paths " +
            "inside the instance, or '-' for stdin",
          template: "filepaths",
        },
        {
          name: "destination",
          description:
            "The destination path, prefixed with <name:> for paths inside " +
            "the instance, or '-' for stdout",
          template: "filepaths",
        },
      ],
    },
    {
      name: ["umount", "unmount"],
      description: "Unmount a directory from an instance",
      args: {
        isVariadic: true,
        name: "mount",
        description:
          "Mount points, in <name>[:<path>] format, where <name> are " +
          "instance names, and optional <path> are mount points. If " +
          "omitted, all mounts will be removed from the named instances.",
      },
    },
    {
      name: "unalias",
      description: "Remove aliases",
      options: [
        {
          name: "--all",
          description: "Remove all aliases from current context",
        },
      ],
      args: {
        isVariadic: true,
        isOptional: true,
        name: "name",
        description: "Names of aliases to remove",
      },
    },
    {
      name: "version",
      description: "Show version details",
      options: [sharedOpts.format],
    },
    {
      name: "wait-ready",
      description: "Wait for the Multipass daemon to be ready",
      options: [
        {
          name: "--timeout",
          description:
            "Maximum time, in seconds, to wait for the command to complete",
          args: { name: "timeout" },
        },
      ],
    },
    {
      name: "zones",
      description: "List all availability zones",
      options: [sharedOpts.format],
    },
  ],
  options: [sharedOpts.help, sharedOpts.version, sharedOpts.verbose],
};
export default completionSpec;
