// limactl v2.3.0 (GitHub tag lima-vm/lima v2.3.0, same as Homebrew core lima 2.3.0, 2026-11-20).
// Source: static read of the cobra command definitions in cmd/limactl/*.go and cmd/limactl/editflags/editflags.go
// (plus pkg/networks and pkg/driver for enums, cmd/limactl-mcp and cmd/limactl-menu for the bundled plugins) at tag v2.3.0.
// The binary was not run: executing downloaded or cloned code is not allowed in this sandbox, so nothing was checked against live --help output.
// Hidden and internal commands (hostagent, guest-install, usernet, debug, generate-doc, generate-jsonschema) are marked hidden.
// Plugin commands (mcp, menu) only exist when their limactl-* binaries are installed next to limactl.
import { filepaths } from "@tabsmith/autocomplete-generators";

const PRIORITY_TOP_THRESHOLD = 76;

const nonEmptyLines = (output: string): string[] =>
  output
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line !== "");

const instanceNameGenerator = (
  suggestOptions?: Partial<Fig.Suggestion>
): Fig.Generator => ({
  script: ["limactl", "list", "--quiet"],
  postProcess: (output) =>
    nonEmptyLines(output).map((instanceName) => ({
      name: instanceName,
      description: "Instance name",
      priority: PRIORITY_TOP_THRESHOLD,
      ...suggestOptions,
    })),
});

// "limactl create --list-templates" prints one template name per line (internal "_" templates are left out).
const templateNameGenerator: Fig.Generator = {
  script: ["limactl", "create", "--list-templates"],
  postProcess: (output) =>
    nonEmptyLines(output).map((templateName) => ({
      name: `template:${templateName}`,
      description: "Template",
    })),
};

// "limactl disk list --json" and "limactl network list --json" print one JSON object per line.
const jsonNameGenerator = (
  script: string[],
  description: string
): Fig.Generator => ({
  script,
  postProcess: (output) =>
    nonEmptyLines(output).flatMap((line): Fig.Suggestion[] => {
      try {
        const { name } = JSON.parse(line) as { name?: string };
        return name ? [{ name, description }] : [];
      } catch {
        return [];
      }
    }),
});

const diskNameGenerator = jsonNameGenerator(
  ["limactl", "disk", "list", "--json"],
  "Disk name"
);

const networkNameGenerator = jsonNameGenerator(
  ["limactl", "network", "list", "--json"],
  "Network name"
);

const yamlFilepathsGenerator = filepaths({
  extensions: ["yaml", "yml"],
  editFileSuggestions: { priority: PRIORITY_TOP_THRESHOLD },
});

// Boolean flags that default to true have to be disabled with "--flag=false".
const boolArg: Fig.Arg = {
  name: "bool",
  isOptional: true,
  suggestions: ["true", "false"],
};

const instanceArg = (suggestOptions?: Partial<Fig.Suggestion>): Fig.Arg => ({
  name: "INSTANCE",
  generators: instanceNameGenerator(suggestOptions),
});

const instancesArg = (suggestOptions?: Partial<Fig.Suggestion>): Fig.Arg => ({
  ...instanceArg(suggestOptions),
  isVariadic: true,
});

const diskArgs: Fig.Arg = {
  name: "DISK",
  generators: diskNameGenerator,
};

const sizeArg: Fig.Arg = {
  name: "SIZE",
  suggestions: ["10GiB", "30GiB", "50GiB", "100GiB"],
};

const idArg: Fig.Arg = { name: "ID" };

const driverSuggestions: Fig.Suggestion[] = [
  { name: "qemu", description: "QEMU" },
  { name: "vz", description: "Virtualization.framework (macOS)" },
  { name: "krunkit", description: "Krunkit (macOS on Apple silicon)" },
  { name: "wsl2", description: "WSL2 (Windows)" },
  { name: "hcs", description: "Host Compute System (Windows, experimental)" },
];

// Flags registered by editflags.RegisterEdit: shared by edit, restart, clone, rename, create and start
const editOptions: Fig.Option[] = [
  {
    name: "--set",
    description:
      "Modify the template in place, using yq syntax (see 'limactl help yq-restrictions')",
    isRepeatable: true,
    args: { name: "yq expression" },
  },
  {
    name: "--param",
    description: "Set a template parameter",
    isRepeatable: true,
    args: { name: "NAME=VALUE" },
  },
  {
    name: "--cpus",
    description: "Number of CPUs",
    args: { name: "int", suggestions: ["1", "2", "4", "8"] },
  },
  {
    name: "--dns",
    description: "Specify custom DNS (disables the host resolver)",
    isRepeatable: true,
    args: { name: "ip" },
  },
  {
    name: "--memory",
    description: "Memory in GiB",
    args: { name: "GiB", suggestions: ["1", "2", "4", "8", "16"] },
  },
  {
    name: "--mount",
    description:
      "Directories to mount, suffix ':w' for writable (do not specify directories that overlap with the existing mounts)",
    isRepeatable: true,
    args: { name: "DIR[:w]", template: "folders" },
  },
  {
    name: "--mount-only",
    description: "Similar to --mount, but overrides the existing mounts",
    isRepeatable: true,
    args: { name: "DIR[:w]", template: "folders" },
  },
  {
    name: "--mount-none",
    description: "Remove all mounts",
  },
  {
    name: "--mount-type",
    description: "Mount type",
    args: {
      name: "type",
      suggestions: ["reverse-sshfs", "9p", "virtiofs"],
    },
  },
  {
    name: "--mount-writable",
    description: "Make all mounts writable",
  },
  {
    name: "--mount-inotify",
    description: "Enable inotify for mounts (experimental)",
  },
  {
    name: "--network",
    description:
      'Additional networks, e.g., "vzNAT" or "lima:shared" to assign vmnet IP',
    isRepeatable: true,
    args: {
      name: "network",
      suggestions: [
        "lima:shared",
        "lima:bridged",
        "lima:host",
        "lima:user-v2",
        "vzNAT",
      ],
    },
  },
  {
    name: "--nested-virt",
    description: "Enable nested virtualization",
  },
  {
    name: "--rosetta",
    description: "Enable Rosetta (for vz instances)",
  },
  {
    name: "--block-device",
    description:
      "Host block devices to attach (macOS VZ), e.g. /dev/disk4; requires a protected helper and 'limactl sudoers --block-device' setup",
    isRepeatable: true,
    args: { name: "device", template: "filepaths" },
  },
  {
    name: "--ssh-port",
    description: "SSH port (0 for random)",
    args: { name: "uint16", suggestions: ["60022"] },
  },
  {
    name: "--video",
    description:
      "Enable video output (has negative performance impact for QEMU)",
  },
  {
    name: "--disk",
    description: "Disk size in GiB",
    args: {
      name: "GiB",
      suggestions: ["10", "30", "50", "100", "200"],
    },
  },
  {
    name: "--vm-type",
    description: "Virtual machine type",
    args: { name: "driver", suggestions: driverSuggestions },
  },
  {
    name: "--shell",
    description: "User login shell in the guest (e.g. /bin/bash, /bin/zsh)",
    args: {
      name: "shell",
      suggestions: [
        "/bin/bash",
        "/bin/zsh",
        "cmd.exe",
        "powershell.exe",
        "pwsh.exe",
      ],
    },
  },
];

// Flags registered by editflags.RegisterCreate on top of the edit flags (only valid for new instances)
const createOptions: Fig.Option[] = [
  {
    name: "--name",
    description: "Override the instance name",
    args: { name: "string" },
  },
  {
    name: "--list-templates",
    description: "List available templates and exit",
  },
  {
    name: "--list-drivers",
    description: "List available drivers and exit",
  },
  ...editOptions,
  {
    name: "--arch",
    description: "Machine architecture",
    args: {
      name: "arch",
      suggestions: [
        "x86_64",
        "aarch64",
        "riscv64",
        "armv7l",
        "s390x",
        "ppc64le",
      ],
    },
  },
  {
    name: "--image-variant",
    description: "Image variant",
    args: { name: "string" },
  },
  {
    name: "--arch-variant",
    description: 'Architecture variant (e.g. "v3" for x86-64-v3)',
    args: { name: "string" },
  },
  {
    name: "--containerd",
    description: "Containerd mode",
    args: {
      name: "mode",
      suggestions: ["user", "system", "user+system", "none"],
    },
  },
  {
    name: "--plain",
    description:
      "Plain mode, disables mounts, port forwarding, containerd, etc",
  },
  {
    name: "--port-forward",
    description:
      "Port forwards (host:guest), e.g., '8080:80' or '9090:9090,static=true' for static port-forwards",
    isRepeatable: true,
    args: {
      name: "HOST:GUEST",
      suggestions: ["8080:80", "3000:3000", "8080:80,static=true"],
    },
  },
  {
    name: "--audio-device",
    description:
      "Audio device backend, e.g. 'pa', 'coreaudio', 'none' (experimental)",
    args: { name: "string" },
  },
  {
    name: "--audio-interface",
    description: "Audio virtual hardware interface (experimental)",
    args: { name: "interface", suggestions: ["hda", "virtio"] },
  },
  {
    name: "--audio-microphone",
    description:
      "Attach an audio input stream as well as playback, vz only (experimental)",
  },
];

const completionSpec: Fig.Spec = {
  name: "limactl",
  description: "Lima: Linux virtual machines",
  subcommands: [
    {
      name: "completion",
      description: "Generate the autocompletion script for the specified shell",
      subcommands: ["bash", "fish", "powershell", "zsh"].map(
        (subcommandName) => ({
          name: subcommandName,
          description: `Generate the autocompletion script for ${subcommandName}`,
          options: [
            {
              name: "--no-descriptions",
              description: "Disable completion descriptions",
            },
          ],
        })
      ),
    },
    {
      name: "create",
      description: "Create an instance of Lima",
      args: {
        name: "FILE.yaml|URL",
        isOptional: true,
        generators: [templateNameGenerator, yamlFilepathsGenerator],
      },
      options: createOptions,
    },
    {
      name: "start",
      description: "Start an instance of Lima",
      args: {
        name: "NAME|FILE.yaml|URL",
        isOptional: true,
        generators: [
          instanceNameGenerator(),
          templateNameGenerator,
          yamlFilepathsGenerator,
        ],
      },
      options: [
        ...createOptions,
        {
          name: "--foreground",
          description:
            "Run the hostagent in the foreground (not available on Windows)",
        },
        {
          name: "--timeout",
          description:
            "Duration to wait for the instance to be running before timing out (default 10m0s)",
          args: { name: "duration", default: "10m0s" },
        },
        {
          name: "--progress",
          description:
            "Show provision script progress by tailing cloud-init logs",
        },
      ],
    },
    {
      name: "stop",
      description: "Stop an instance",
      isDangerous: true,
      args: {
        ...instancesArg({ isDangerous: true }),
        isOptional: true,
      },
      options: [
        {
          name: ["-f", "--force"],
          description: "Force stop the instance",
          isDangerous: true,
        },
      ],
    },
    {
      name: "restart",
      description: "Restart a running instance",
      args: {
        ...instanceArg(),
        isOptional: true,
      },
      options: [
        {
          name: ["-f", "--force"],
          description: "Force stop and restart the instance",
        },
        {
          name: "--progress",
          description:
            "Show provision script progress by tailing cloud-init logs",
        },
        ...editOptions,
      ],
    },
    {
      name: "shell",
      description: "Execute shell in Lima",
      args: [
        instanceArg({ isDangerous: true }),
        {
          name: "COMMAND",
          isVariadic: true,
          isOptional: true,
          isCommand: true,
        },
      ],
      options: [
        {
          name: "--instance",
          description: "Instance name (used by the lima wrapper script)",
          hidden: true,
          args: { name: "INSTANCE", generators: instanceNameGenerator() },
        },
        {
          name: "--shell",
          description: "Shell interpreter, e.g. /bin/bash",
          args: { name: "string" },
        },
        {
          name: "--workdir",
          description: "Working directory",
          args: { name: "string", template: "folders" },
        },
        {
          name: "--reconnect",
          description: "Reconnect to the SSH session",
        },
        {
          name: "--preserve-env",
          description: "Propagate environment variables to the shell",
        },
        {
          name: "--start",
          description: "Start the instance if it is not already running",
        },
        {
          name: "--sync",
          description:
            "Copy a host directory to the guest and vice-versa upon exit",
          args: { name: "DIR", template: "folders" },
        },
        {
          name: "--sync-exclude",
          description: "Exclude pattern for --sync",
          isRepeatable: true,
          args: { name: "pattern" },
        },
      ],
    },
    {
      name: ["copy", "cp"],
      description: "Copy files between host and guest",
      args: [
        {
          name: "SOURCE",
          isVariadic: true,
          generators: [
            instanceNameGenerator({ isDangerous: true }),
            { template: "filepaths" },
          ],
        },
        {
          name: "TARGET",
          generators: [instanceNameGenerator(), { template: "filepaths" }],
        },
      ],
      options: [
        {
          name: ["-r", "--recursive"],
          description: "Copy directories recursively",
        },
        {
          name: ["-v", "--verbose"],
          description: "Enable verbose output",
        },
        {
          name: "--backend",
          description: "Copy backend",
          args: {
            name: "backend",
            default: "auto",
            suggestions: [
              {
                name: "auto",
                description:
                  "Select the best available backend (rsync preferred, falls back to scp)",
              },
              {
                name: "rsync",
                description:
                  "Faster transfers with resume capability (requires rsync on both host and guest)",
              },
              {
                name: "scp",
                description: "Reliable transfers (always available)",
              },
            ],
          },
        },
      ],
    },
    {
      name: ["list", "ls"],
      description: "List instances of Lima",
      args: {
        ...instancesArg(),
        isOptional: true,
      },
      options: [
        {
          name: ["-f", "--format"],
          description: "Output format, or a go template wrapped in {{ }}",
          args: {
            name: "format",
            default: "table",
            suggestions: ["json", "yaml", "table"],
          },
        },
        {
          name: "--list-fields",
          description: "List fields available for format",
        },
        {
          name: "--json",
          description: "Same as --format=json",
        },
        {
          name: ["-q", "--quiet"],
          description: "Only show names",
        },
        {
          name: "--all-fields",
          description: "Show all fields",
        },
        {
          name: "--yq",
          description: "Apply yq expression to each instance",
          isRepeatable: true,
          args: { name: "yq expression" },
        },
        {
          name: ["-l", "--filter"],
          description:
            "Filter instances using yq expression (equivalent to --yq 'select(EXPR)')",
          isRepeatable: true,
          args: { name: "yq expression" },
        },
      ],
    },
    {
      name: ["delete", "remove", "rm"],
      description: "Delete an instance of Lima",
      args: instancesArg({ isDangerous: true }),
      options: [
        {
          name: ["-f", "--force"],
          description: "Forcibly kill the processes",
          isDangerous: true,
        },
      ],
    },
    {
      name: "validate",
      description: "Validate YAML templates",
      args: {
        name: "TEMPLATE",
        isVariadic: true,
        generators: [yamlFilepathsGenerator, templateNameGenerator],
      },
      options: [
        {
          name: "--fill",
          description: "Fill defaults",
        },
      ],
    },
    {
      name: "prune",
      description: "Prune garbage objects",
      isDangerous: true,
      options: [
        {
          name: "--keep-referred",
          description:
            "Keep objects that are referred by some instances or templates",
        },
      ],
    },
    {
      name: "info",
      description: "Show diagnostic information",
      options: [
        {
          name: "--yq",
          description: "Apply yq expression to output",
          args: { name: "yq expression", default: "." },
        },
      ],
    },
    {
      name: "show-ssh",
      description:
        "Show the SSH command line (deprecated, use 'ssh -F INSTANCE_DIR/ssh.config lima-INSTANCE' instead)",
      deprecated: true,
      args: instanceArg(),
      options: [
        {
          name: ["-f", "--format"],
          description: "Output format",
          args: {
            name: "format",
            default: "cmd",
            suggestions: [
              {
                name: "cmd",
                description: "Full ssh command line",
              },
              {
                name: "args",
                description:
                  'Similar to the cmd format but omits "ssh" and the destination address',
              },
              { name: "options", description: "Ssh option key value pairs" },
              { name: "config", description: "~/.ssh/config format" },
            ],
          },
        },
      ],
    },
    {
      name: "edit",
      description: "Edit an instance of Lima or a template",
      args: {
        name: "INSTANCE|FILE.yaml",
        isOptional: true,
        generators: [instanceNameGenerator(), yamlFilepathsGenerator],
      },
      options: [
        {
          name: "--start",
          description: "Start the instance after editing",
        },
        ...editOptions,
      ],
    },
    {
      name: "clone",
      description: "Clone an instance of Lima",
      args: [
        { name: "OLDINST", generators: instanceNameGenerator() },
        { name: "NEWINST" },
      ],
      options: [
        {
          name: "--start",
          description: "Start the instance after cloning",
        },
        ...editOptions,
      ],
    },
    {
      name: "rename",
      description: "Rename an instance of Lima",
      args: [
        { name: "OLDINST", generators: instanceNameGenerator() },
        { name: "NEWINST" },
      ],
      options: [
        {
          name: "--start",
          description: "Start the instance after renaming",
        },
        ...editOptions,
      ],
    },
    {
      name: "factory-reset",
      description: "Factory reset an instance of Lima",
      isDangerous: true,
      args: {
        ...instanceArg({ isDangerous: true }),
        isOptional: true,
      },
    },
    {
      name: "protect",
      description: "Protect an instance to prohibit accidental removal",
      args: instancesArg(),
    },
    {
      name: "unprotect",
      description: "Unprotect an instance",
      args: instancesArg(),
    },
    {
      name: "screenshot",
      description: "Capture a screenshot of the VM display",
      args: instanceArg(),
      options: [
        {
          name: ["-o", "--output"],
          description:
            "Output path; extension must be .png or .bmp (default: INSTANCE-screenshot.png)",
          args: { name: "path", template: "filepaths" },
        },
      ],
    },
    {
      name: "tunnel",
      description:
        "Create a SOCKS tunnel so that the host can join the guest network (experimental)",
      args: instanceArg(),
      options: [
        {
          name: "--type",
          description: 'Tunnel type, currently only "socks" is implemented',
          args: { name: "type", default: "socks", suggestions: ["socks"] },
        },
        {
          name: "--socks-port",
          description: "SOCKS port, defaults to a random port",
          args: { name: "int" },
        },
      ],
    },
    {
      name: "watch",
      description: "Watch events from instances",
      args: {
        ...instancesArg(),
        isOptional: true,
      },
      options: [
        {
          name: "--json",
          description: "Output events as newline-delimited JSON",
        },
        {
          name: "--history",
          description: "Include historical events from before watch started",
        },
        {
          name: "--verbose",
          description: "Show verbose output",
        },
      ],
    },
    {
      name: "disk",
      description: "Lima disk management",
      subcommands: [
        {
          name: "create",
          description: "Create a Lima disk",
          args: { name: "DISK" },
          options: [
            {
              name: "--size",
              description: "Configure the disk size",
              isRequired: true,
              args: sizeArg,
            },
            {
              name: "--format",
              description: "Specify the disk format",
              args: {
                name: "format",
                default: "qcow2",
                suggestions: ["qcow2", "raw"],
              },
            },
          ],
        },
        {
          name: ["list", "ls"],
          description: "List existing Lima disks",
          args: { ...diskArgs, isVariadic: true, isOptional: true },
          options: [
            {
              name: "--json",
              description: "JSONify output",
            },
          ],
        },
        {
          name: ["delete", "remove", "rm"],
          description: "Delete one or more Lima disks",
          args: { ...diskArgs, isVariadic: true },
          options: [
            {
              name: ["-f", "--force"],
              description: "Force delete",
              isDangerous: true,
            },
          ],
        },
        {
          name: "unlock",
          description: "Unlock one or more Lima disks",
          args: { ...diskArgs, isVariadic: true },
        },
        {
          name: "resize",
          description: "Resize existing Lima disk",
          args: diskArgs,
          options: [
            {
              name: "--size",
              description: "Disk size",
              isRequired: true,
              args: sizeArg,
            },
          ],
        },
        {
          name: "import",
          description: "Import an existing disk to Lima",
          args: [
            { name: "DISK", generators: diskNameGenerator },
            { name: "FILE", template: "filepaths" },
          ],
        },
      ],
    },
    {
      name: "network",
      description: "Lima network management",
      subcommands: [
        {
          name: ["list", "ls"],
          description: "List networks",
          args: {
            name: "NETWORK",
            isVariadic: true,
            isOptional: true,
            generators: networkNameGenerator,
          },
          options: [
            {
              name: "--json",
              description: "JSONify output",
            },
          ],
        },
        {
          name: "create",
          description: "Create a Lima network",
          args: { name: "NETWORK" },
          options: [
            {
              name: "--mode",
              description: "Network mode",
              args: {
                name: "mode",
                default: "user-v2",
                suggestions: ["user-v2", "host", "shared", "bridged"],
              },
            },
            {
              name: "--gateway",
              description: 'Gateway, e.g., "192.168.42.1/24"',
              args: { name: "string" },
            },
            {
              name: "--interface",
              description: "Interface for bridged mode",
              args: { name: "string" },
            },
          ],
        },
        {
          name: ["delete", "remove", "rm"],
          description: "Delete one or more Lima networks",
          args: {
            name: "NETWORK",
            isVariadic: true,
            generators: networkNameGenerator,
          },
          options: [
            {
              name: ["-f", "--force"],
              description: "Force delete (currently always required)",
              isDangerous: true,
            },
          ],
        },
      ],
    },
    {
      name: "snapshot",
      description: "Manage instance snapshots (experimental)",
      subcommands: [
        {
          name: ["create", "save"],
          description: "Create (save) a snapshot",
          args: instanceArg(),
          options: [
            {
              name: "--tag",
              description: "Name of the snapshot",
              args: { name: "string" },
            },
          ],
        },
        {
          name: ["delete", "del"],
          description: "Delete (del) a snapshot",
          args: instanceArg(),
          options: [
            {
              name: "--id",
              description: "ID of the snapshot",
              exclusiveOn: ["--tag"],
              args: idArg,
            },
            {
              name: "--tag",
              description: "Name of the snapshot",
              exclusiveOn: ["--id"],
              args: { name: "string" },
            },
          ],
        },
        {
          name: ["apply", "load"],
          description: "Apply (load) a snapshot",
          args: instanceArg(),
          options: [
            {
              name: "--id",
              description: "ID of the snapshot",
              exclusiveOn: ["--tag"],
              args: idArg,
            },
            {
              name: "--tag",
              description: "Name of the snapshot",
              exclusiveOn: ["--id"],
              args: { name: "string" },
            },
          ],
        },
        {
          name: ["list", "ls"],
          description: "List existing snapshots",
          args: instanceArg(),
          options: [
            {
              name: ["-q", "--quiet"],
              description: "Only show tags",
              exclusiveOn: ["--json"],
            },
            {
              name: "--json",
              description: "JSONify output",
              exclusiveOn: ["-q", "--quiet"],
            },
          ],
        },
      ],
    },
    {
      name: ["template", "tmpl"],
      description: "Lima template management (experimental)",
      subcommands: [
        {
          name: "copy",
          description:
            "Copy a template via locator to a local file or stdout (default)",
          args: [
            {
              name: "TEMPLATE",
              generators: [templateNameGenerator, yamlFilepathsGenerator],
            },
            { name: "DEST", isOptional: true, template: "filepaths" },
          ],
          options: [
            {
              name: "--embed",
              description: "Embed external dependencies into template",
            },
            {
              name: "--embed-all",
              description: "Embed all dependencies into template",
            },
            {
              name: "--fill",
              description: "Fill defaults",
            },
            {
              name: "--verbatim",
              description: "Don't make locators absolute",
            },
          ],
        },
        {
          name: "validate",
          description: "Validate YAML templates",
          args: {
            name: "TEMPLATE",
            isVariadic: true,
            generators: [yamlFilepathsGenerator, templateNameGenerator],
          },
          options: [
            {
              name: "--fill",
              description: "Fill defaults",
            },
          ],
        },
        {
          name: "yq",
          description: "Query template expressions",
          args: [
            {
              name: "TEMPLATE",
              generators: [templateNameGenerator, yamlFilepathsGenerator],
            },
            { name: "EXPR" },
          ],
        },
        {
          name: "url",
          description:
            "Transform custom template URLs to regular file or https URLs",
          args: { name: "CUSTOM_URL" },
        },
      ],
    },
    {
      name: "sudoers",
      description:
        "Generate the content of the /etc/sudoers.d/lima file for the host helpers that require privilege escalation (written to stdout, not to the file)",
      args: {
        name: "SUDOERSFILE-TO-CHECK",
        isOptional: true,
        template: "filepaths",
      },
      options: [
        {
          name: "--check",
          description:
            'Check that the sudoers file is up-to-date with "~/.lima/_config/networks.yaml"',
        },
        {
          name: "--block-device",
          description:
            "Include the macOS VZ host block-device helper for the current user and comma-separated devices",
          isRepeatable: true,
          args: { name: "device", template: "filepaths" },
        },
        {
          name: "--digest",
          description:
            "Pin Lima's privileged helpers to their sha256 digest (default true)",
          requiresSeparator: true,
          args: boolArg,
        },
      ],
    },
    {
      name: "autostart",
      description: "Manage automatic startup of Lima instances",
      subcommands: [
        {
          name: "enable",
          description: "Register an instance to start automatically",
          args: instanceArg(),
          options: [
            {
              name: "--condition",
              description:
                'When to start the instance: "login" (user session) or "boot" (system boot, macOS only)',
              args: {
                name: "condition",
                default: "login",
                suggestions: [
                  { name: "login", description: "User session" },
                  { name: "boot", description: "System boot (macOS only)" },
                ],
              },
            },
            {
              name: "--user",
              description:
                "Username to run the instance as when --condition=boot (macOS only, default: $USER)",
              args: { name: "string" },
            },
            {
              name: "--keep-alive",
              description:
                "Restart the instance automatically if the host agent exits unexpectedly (default true)",
              requiresSeparator: true,
              args: boolArg,
            },
          ],
        },
        {
          name: "disable",
          description: "Unregister an instance from automatic startup",
          args: instanceArg(),
        },
      ],
    },
    {
      name: "start-at-login",
      description:
        "Register/Unregister an autostart file for the instance (deprecated, use 'limactl autostart' instead)",
      deprecated: true,
      args: { ...instanceArg(), isOptional: true },
      options: [
        {
          name: "--enabled",
          description: "Automatically start the instance when the user logs in",
          requiresSeparator: true,
          args: boolArg,
        },
      ],
    },
    {
      name: "yq-restrictions",
      description: "Restrictions on yq expressions in Lima",
    },
    {
      name: "mcp",
      description: "Model Context Protocol plugin for Lima (experimental)",
      subcommands: [
        {
          name: "info",
          description: "Show information about the MCP server",
        },
        {
          name: "serve",
          description: "Serve MCP over stdio",
          args: { ...instanceArg(), isOptional: true },
        },
      ],
    },
    {
      name: "menu",
      description: "TUI menu for Lima instances (experimental)",
    },
    {
      name: "hostagent",
      description: "Run hostagent",
      hidden: true,
      args: instanceArg(),
      options: [
        {
          name: ["-p", "--pidfile"],
          description: "Write PID to file",
          args: { name: "string", template: "filepaths" },
        },
        {
          name: "--socket",
          description: "Path of hostagent socket",
          args: { name: "string", template: "filepaths" },
        },
        {
          name: "--run-gui",
          description: "Run GUI synchronously within hostagent",
        },
        {
          name: "--guestagent",
          description:
            "Local file path (not URL) of lima-guestagent.OS-ARCH[.gz]",
          args: { name: "string", template: "filepaths" },
        },
        {
          name: "--nerdctl-archive",
          description:
            "Local file path (not URL) of nerdctl-full-VERSION-GOOS-GOARCH.tar.gz",
          args: { name: "string", template: "filepaths" },
        },
        {
          name: "--progress",
          description:
            "Show provision script progress by monitoring cloud-init logs",
        },
      ],
    },
    {
      name: "guest-install",
      description: "Install guest components",
      hidden: true,
      args: { ...instanceArg(), isOptional: true },
    },
    {
      name: "usernet",
      description: "Run usernet",
      hidden: true,
      options: [
        {
          name: ["-p", "--pidfile"],
          description: "Write PID to file",
          args: { name: "string", template: "filepaths" },
        },
        {
          name: ["-e", "--endpoint"],
          description: "Exposes usernet API(s) on this endpoint",
          args: { name: "string" },
        },
        {
          name: "--listen-qemu",
          description: "Listen for QEMU connections",
          args: { name: "string" },
        },
        {
          name: "--listen",
          description:
            "Listen on a Unix socket and receive Bess-compatible FDs as SCM_RIGHTS messages",
          args: { name: "string" },
        },
        {
          name: "--subnet",
          description: "Sets subnet value for the usernet network",
          args: { name: "string", default: "192.168.5.0/24" },
        },
        {
          name: "--mtu",
          description: "MTU",
          args: { name: "int", default: "1500" },
        },
        {
          name: "--leases",
          description: "Pass default static leases for startup",
          args: { name: "IP=MAC,..." },
        },
      ],
    },
    {
      name: "debug",
      description: "Debug utilities",
      hidden: true,
      subcommands: [
        {
          name: "dns",
          description: "Debug built-in DNS",
          args: [{ name: "UDPPORT" }, { name: "TCPPORT", isOptional: true }],
          options: [
            {
              name: ["-6", "--ipv6"],
              description: "Lookup IPv6 addresses too",
            },
          ],
        },
      ],
    },
    {
      name: "generate-doc",
      description: "Generate cli-reference pages",
      hidden: true,
      args: { name: "DIR", template: "folders" },
      options: [
        {
          name: "--type",
          description: "Output type",
          args: { name: "type", default: "man", suggestions: ["man", "docsy"] },
        },
        {
          name: "--output",
          description: "Output directory",
          args: { name: "string", template: "folders" },
        },
        {
          name: "--prefix",
          description: "Install prefix",
          args: { name: "string", template: "folders" },
        },
      ],
    },
    {
      name: "generate-jsonschema",
      description: "Generate json-schema document",
      hidden: true,
      options: [
        {
          name: "--schemafile",
          description: "Output file",
          args: { name: "string", template: "filepaths" },
        },
      ],
    },
  ],
  options: [
    {
      name: ["-h", "--help"],
      description: "Help for limactl",
      isPersistent: true,
    },
    {
      name: "--debug",
      description: "Debug mode",
      isPersistent: true,
    },
    {
      name: "--log-level",
      description: "Set the logging level",
      isPersistent: true,
      args: {
        name: "level",
        suggestions: ["trace", "debug", "info", "warn", "error"],
      },
    },
    {
      name: "--log-format",
      description: "Set the logging format",
      isPersistent: true,
      args: {
        name: "format",
        default: "text",
        suggestions: ["text", "json"],
      },
    },
    {
      name: "--tty",
      description:
        "Enable TUI interactions such as opening an editor, defaults to true when stdout is a terminal (set to false for automation)",
      isPersistent: true,
      requiresSeparator: true,
      args: boolArg,
    },
    {
      name: ["-y", "--yes"],
      description: "Alias of --tty=false",
      isPersistent: true,
    },
    {
      name: ["-v", "--version"],
      description: "Version for limactl",
    },
  ],
};

const HELP_COMMAND_DESCRIPTION =
  "Help provides help for any command in the application";
completionSpec.subcommands.push({
  name: "help",
  description: HELP_COMMAND_DESCRIPTION,
  args: {
    name: "command",
    isOptional: true,
    suggestions: [
      ...completionSpec.subcommands
        .filter((subcommand) => !subcommand.hidden)
        .map((subcommand): Fig.Suggestion => ({
          name: subcommand.name,
          description: subcommand.description,
          type: "subcommand",
        })),
      {
        name: "help",
        description: HELP_COMMAND_DESCRIPTION,
        type: "subcommand",
      },
    ],
  },
});

export default completionSpec;
