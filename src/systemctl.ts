// systemctl (systemd) v262.2 (latest upstream release tag, 2026-11-20). Source: systemd v262.2 sources read statically
// (not run; local systemd is 255.4 with no running manager): src/systemctl/systemctl.c option and verb tables, man/systemctl.xml,
// shell-completion/bash/systemctl.in, plus src/shared/output-mode.c, src/basic/unit-def.c and src/basic/time-util.c for enum values.
// Generator JSON keys (list-units: unit/load/active/sub/description; list-unit-files: unit_file/state/preset) match the v262.2 tables.
// Upstream renamed --kill-who to --kill-whom; --marked is deprecated in favour of the enqueue-marked verb.
import { filepaths } from "@tabsmith/autocomplete-generators";

type Unit = {
  unit: string;
  load: "loaded" | "not-found" | "bad-setting" | "error" | "masked";
  active:
    | "active"
    | "reloading"
    | "inactive"
    | "failed"
    | "activating"
    | "deactivating";
  sub: string;
  description: string;
};

const unitGenerator: Fig.Generator = {
  custom: async (tokens, executeShellCommand) => {
    const user = tokens.includes("--user");
    const { stdout } = await executeShellCommand({
      command: "systemctl",
      args: [
        "list-units",
        "-o",
        "json",
        "--all",
        "--full",
        ...(user ? ["--user"] : []),
      ],
    });
    const units: Unit[] = JSON.parse(stdout);

    const suggustions = units.map((unit) => {
      let activeEmoji: string;
      if (unit.active === "active") {
        activeEmoji = "✅";
      } else if (unit.active === "reloading") {
        activeEmoji = "🔄";
      } else if (unit.active === "inactive") {
        activeEmoji = "🛑";
      } else if (unit.active === "failed") {
        activeEmoji = "❌";
      } else if (unit.active === "activating") {
        activeEmoji = "⏳";
      } else if (unit.active === "deactivating") {
        activeEmoji = "⏳";
      } else {
        activeEmoji = "❓";
      }

      const activeString =
        unit.active.charAt(0).toUpperCase() + unit.active.slice(1);

      return {
        name: unit.unit,
        description: `${activeString} - ${unit.description}`,
        icon: activeEmoji,
      };
    });
    suggustions.sort((a, b) =>
      a.name.localeCompare(b.name, undefined, { usage: "sort" })
    );
    return suggustions;
  },
};

type UnitFile = {
  unit_file: string;
  state?: string;
  preset?: "enabled" | "disabled";
};

const unitFileGenerator: Fig.Generator = {
  custom: async (tokens, executeShellCommand) => {
    const user = tokens.includes("--user");
    const { stdout } = await executeShellCommand({
      command: "systemctl",
      args: [
        "list-unit-files",
        "-o",
        "json",
        "--all",
        "--full",
        ...(user ? ["--user"] : []),
      ],
    });
    const units: UnitFile[] = JSON.parse(stdout);
    const suggustions = units.map((unit) => {
      let loadedEmoji: string;
      if (unit.state === "enabled") {
        loadedEmoji = "✅";
      } else if (unit.state === "disabled") {
        loadedEmoji = "🛑";
      } else {
        loadedEmoji = "❓";
      }

      const loadedString =
        unit.state?.charAt(0).toUpperCase() + unit.state?.slice(1);

      return {
        name: unit.unit_file,
        description: loadedString,
        icon: loadedEmoji,
      };
    });
    suggustions.sort((a, b) =>
      a.name.localeCompare(b.name, undefined, { usage: "sort" })
    );
    return suggustions;
  },
};

const logLevels = [
  "debug",
  "info",
  "notice",
  "warning",
  "err",
  "crit",
  "alert",
  "emerg",
];

const logTargets = ["console", "journal", "journal-or-kmsg", "kmsg", "null"];

const unitTypes = [
  "service",
  "socket",
  "target",
  "device",
  "mount",
  "automount",
  "swap",
  "timer",
  "path",
  "slice",
  "scope",
];

const unitStates = [
  // Load states
  "stub",
  "loaded",
  "not-found",
  "bad-setting",
  "error",
  "merged",
  "masked",
  // Active states
  "active",
  "reloading",
  "inactive",
  "failed",
  "activating",
  "deactivating",
  "maintenance",
  "refreshing",
];

const completionSpec: Fig.Spec = {
  name: "systemctl",
  description: "Control the systemd system and service manager",
  subcommands: [
    {
      name: "list-units",
      description: "List units currently in memory",
      args: {
        name: "PATTERN",
        generators: unitGenerator,
        isVariadic: true,
        isOptional: true,
      },
    },
    {
      name: "list-automounts",
      description: "List automount units currently in memory, ordered by path",
      args: {
        name: "PATTERN",
        isVariadic: true,
        isOptional: true,
      },
    },
    {
      name: "list-paths",
      description: "List path units currently in memory, ordered by path",
      args: {
        name: "PATTERN",
        isVariadic: true,
        isOptional: true,
      },
    },
    {
      name: "list-sockets",
      description: "List socket units currently in memory, ordered by address",
      args: {
        name: "PATTERN",
        isVariadic: true,
        isOptional: true,
      },
    },
    {
      name: "list-timers",
      description:
        "List timer units currently in memory, ordered by next elapse",
      args: {
        name: "PATTERN",
        isVariadic: true,
        isOptional: true,
      },
    },
    {
      name: "is-active",
      description: "Check whether units are active",
      args: {
        name: "PATTERN",
        generators: unitGenerator,
        isVariadic: true,
      },
    },
    {
      name: "is-failed",
      description:
        "Check whether units are failed or system is in degraded state",
      args: {
        name: "PATTERN",
        generators: unitGenerator,
        isVariadic: true,
        isOptional: true,
      },
    },
    {
      name: "status",
      description: "Show runtime status of one or more units",
      args: {
        name: "PATTERN or PID",
        generators: unitGenerator,
        isVariadic: true,
        isOptional: true,
      },
    },
    {
      name: "show",
      description: "Show properties of one or more units/jobs or the manager",
      args: {
        name: "PATTERN or JOB",
        generators: unitGenerator,
        isVariadic: true,
        isOptional: true,
      },
    },
    {
      name: "cat",
      description: "Show files and drop-ins of specified units",
      args: {
        name: "PATTERN",
        generators: unitGenerator,
        isVariadic: true,
      },
    },
    {
      name: "help",
      description: "Show manual for one or more units",
      args: {
        name: "PATTERN or PID",
        generators: unitGenerator,
        isVariadic: true,
      },
    },
    {
      name: "list-dependencies",
      description:
        "Recursively show units which are required or wanted by the units or by which those units are required or wanted",
      args: {
        name: "UNIT",
        generators: unitGenerator,
        isVariadic: true,
        isOptional: true,
      },
    },
    {
      name: "start",
      description: "Start (activate) one or more units",
      args: {
        name: "UNIT",
        generators: unitGenerator,
        isVariadic: true,
      },
    },
    {
      name: "stop",
      description: "Stop (deactivate) one or more units",
      args: {
        name: "UNIT",
        generators: unitGenerator,
        isVariadic: true,
      },
    },
    {
      name: "reload",
      description: "Reload one or more units",
      args: {
        name: "UNIT",
        generators: unitGenerator,
        isVariadic: true,
      },
    },
    {
      name: "restart",
      description: "Start or restart one or more units",
      args: {
        name: "UNIT",
        generators: unitGenerator,
        isVariadic: true,
      },
    },
    {
      name: "try-restart",
      description: "Restart one or more units if active",
      args: {
        name: "UNIT",
        generators: unitGenerator,
        isVariadic: true,
      },
    },
    {
      name: "enqueue-marked",
      description: "Enqueue jobs for all marked units",
    },
    {
      name: "reload-or-restart",
      description:
        "Reload one or more units if possible, otherwise start or restart",
      args: {
        name: "UNIT",
        generators: unitGenerator,
        isVariadic: true,
      },
    },
    {
      name: "try-reload-or-restart",
      description:
        "If active, reload one or more units, if supported, otherwise restart",
      args: {
        name: "UNIT",
        generators: unitGenerator,
        isVariadic: true,
      },
    },
    {
      name: "isolate",
      description: "Start one unit and stop all others",
      args: {
        name: "UNIT",
        generators: unitGenerator,
      },
    },
    {
      name: "kill",
      description: "Send signal to processes of a unit",
      args: {
        name: "UNIT",
        generators: unitGenerator,
        isVariadic: true,
      },
    },
    {
      name: "clean",
      description: "Clean runtime, cache, state, logs or configuration of unit",
      args: {
        name: "UNIT",
        generators: unitGenerator,
        isVariadic: true,
      },
    },
    {
      name: "freeze",
      description: "Freeze execution of unit processes",
      args: {
        name: "PATTERN",
        generators: unitGenerator,
        isVariadic: true,
      },
    },
    {
      name: "thaw",
      description: "Resume execution of a frozen unit",
      args: {
        name: "PATTERN",
        generators: unitGenerator,
        isVariadic: true,
      },
    },
    {
      name: "set-property",
      description: "Sets one or more properties of a unit",
      args: [
        {
          name: "UNIT",
          generators: unitGenerator,
        },
        {
          name: "PROPERTY=VALUE",
          isVariadic: true,
        },
      ],
    },
    {
      name: "bind",
      description: "Bind-mount a path from the host into a unit's namespace",
      args: [
        {
          name: "UNIT",
          generators: unitGenerator,
        },
        {
          name: "PATH",
          template: "filepaths",
        },
        {
          name: "PATH",
          template: "filepaths",
          isOptional: true,
        },
      ],
    },
    {
      name: "mount-image",
      description: "Mount an image from the host into a unit's namespace",
      args: [
        {
          name: "UNIT",
          generators: unitGenerator,
        },
        {
          name: "PATH",
          template: "filepaths",
        },
        {
          name: "PATH",
          template: "filepaths",
          isOptional: true,
        },
        {
          name: "OPTS",
          isOptional: true,
        },
      ],
    },
    {
      name: "service-log-level",
      description: "Get/set logging threshold for service",
      args: [
        {
          name: "SERVICE",
          generators: unitGenerator,
        },
        {
          name: "LEVEL",
          isOptional: true,
          suggestions: logLevels,
        },
      ],
    },
    {
      name: "service-log-target",
      description: "Get/set logging target for service",
      args: [
        {
          name: "SERVICE",
          generators: unitGenerator,
        },
        {
          name: "TARGET",
          isOptional: true,
          suggestions: logTargets,
        },
      ],
    },
    {
      name: "reset-failed",
      description: "Reset failed state for all, one, or more units",
      args: {
        name: "PATTERN",
        isVariadic: true,
        isOptional: true,
      },
    },
    {
      name: "whoami",
      description: "Return unit caller or specified PIDs are part of",
      args: {
        name: "PID",
        isVariadic: true,
        isOptional: true,
      },
    },
    {
      name: "list-unit-files",
      description: "List installed unit files",
      args: {
        name: "PATTERN",
        generators: unitFileGenerator,
        isVariadic: true,
        isOptional: true,
      },
    },
    {
      name: "enable",
      description: "Enable one or more unit files",
      args: {
        name: "UNIT|PATH",
        generators: [
          unitFileGenerator,
          filepaths({
            extensions: ["service"],
          }),
        ],
        isVariadic: true,
        isOptional: true,
      },
    },
    {
      name: "disable",
      description: "Disable one or more unit files",
      args: {
        name: "UNIT|PATH",
        generators: [
          unitGenerator,
          filepaths({
            extensions: ["service"],
          }),
        ],
        isVariadic: true,
      },
    },
    {
      name: "reenable",
      description: "Reenable one or more unit files",
      args: {
        name: "UNIT",
        generators: unitFileGenerator,
        isVariadic: true,
      },
    },
    {
      name: "preset",
      description:
        "Enable/disable one or more unit files based on preset configuration",
      args: {
        name: "UNIT",
        generators: unitFileGenerator,
        isVariadic: true,
      },
    },
    {
      name: "preset-all",
      description:
        "Enable/disable all unit files based on preset configuration",
    },
    {
      name: "is-enabled",
      description: "Check whether unit files are enabled",
      args: {
        name: "UNIT",
        generators: unitFileGenerator,
        isVariadic: true,
      },
    },
    {
      name: "mask",
      description: "Mask one or more units",
      args: {
        name: "UNIT",
        generators: unitFileGenerator,
        isVariadic: true,
      },
    },
    {
      name: "unmask",
      description: "Unmask one or more units",
      args: {
        name: "UNIT",
        generators: unitFileGenerator,
        isVariadic: true,
      },
    },
    {
      name: "link",
      description: "Link one or more units files into the search path",
      args: {
        name: "PATH",
        template: "filepaths",
        isVariadic: true,
      },
    },
    {
      name: "revert",
      description: "Revert one or more unit files to vendor version",
      args: {
        name: "UNIT",
        generators: unitFileGenerator,
        isVariadic: true,
      },
    },
    {
      name: "add-wants",
      description:
        "Add 'Wants' dependency for the target on specified one or more units",
      args: [
        {
          name: "TARGET",
        },
        {
          name: "UNIT",
          isVariadic: true,
        },
      ],
    },
    {
      name: "add-requires",
      description:
        "Add 'Requires' dependency for the target on specified one or more units",
      args: [
        {
          name: "TARGET",
        },
        {
          name: "UNIT",
          isVariadic: true,
        },
      ],
    },
    {
      name: "edit",
      description: "Edit one or more unit files",
      args: {
        name: "UNIT",
        generators: unitGenerator,
        isVariadic: true,
      },
    },
    {
      name: "get-default",
      description: "Get the name of the default target",
    },
    {
      name: "set-default",
      description: "Set the default target",
      args: {
        name: "TARGET",
      },
    },
    {
      name: "list-machines",
      description: "List local containers and host",
      args: {
        name: "PATTERN",
        isVariadic: true,
        isOptional: true,
      },
    },
    {
      name: "list-jobs",
      description: "List jobs",
      args: {
        name: "PATTERN",
        isVariadic: true,
        isOptional: true,
      },
    },
    {
      name: "cancel",
      description: "Cancel all, one, or more jobs",
      args: {
        name: "JOB",
        isVariadic: true,
        isOptional: true,
      },
    },
    {
      name: "show-environment",
      description: "Dump environment",
    },
    {
      name: "set-environment",
      description: "Set one or more environment variables",
      args: {
        name: "VARIABLE=VALUE",
        isVariadic: true,
      },
    },
    {
      name: "unset-environment",
      description: "Unset one or more environment variables",
      args: {
        name: "VARIABLE",
        isVariadic: true,
      },
    },
    {
      name: "import-environment",
      description: "Import all or some environment variables",
      args: {
        name: "VARIABLE",
        isVariadic: true,
        isOptional: true,
      },
    },
    {
      name: "daemon-reload",
      description: "Reload systemd manager configuration",
    },
    {
      name: "daemon-reexec",
      description: "Reexecute systemd manager",
    },
    {
      name: "log-level",
      description: "Get/set logging threshold for manager",
      args: {
        name: "LEVEL",
        isOptional: true,
        suggestions: logLevels,
      },
    },
    {
      name: "log-target",
      description: "Get/set logging target for manager",
      args: {
        name: "TARGET",
        isOptional: true,
        suggestions: logTargets,
      },
    },
    {
      name: "service-watchdogs",
      description: "Get/set service watchdog state",
      args: {
        name: "BOOL",
        isOptional: true,
        suggestions: ["true", "false"],
      },
    },
    {
      name: "is-system-running",
      description: "Check whether system is fully running",
    },
    {
      name: "default",
      description: "Enter system default mode",
      isDangerous: true,
    },
    {
      name: "rescue",
      description: "Enter system rescue mode",
      isDangerous: true,
    },
    {
      name: "emergency",
      description: "Enter system emergency mode",
      isDangerous: true,
    },
    {
      name: "halt",
      description: "Shut down and halt the system",
      isDangerous: true,
    },
    {
      name: "poweroff",
      description: "Shut down and power-off the system",
      isDangerous: true,
    },
    {
      name: "reboot",
      description: "Shut down and reboot the system",
      isDangerous: true,
    },
    {
      name: "kexec",
      description: "Shut down and reboot the system with kexec",
      isDangerous: true,
    },
    {
      name: "soft-reboot",
      description: "Shut down and reboot userspace",
      isDangerous: true,
    },
    {
      name: "exit",
      description: "Request user instance or container exit",
      args: {
        name: "EXIT_CODE",
        isOptional: true,
      },
      isDangerous: true,
    },
    {
      name: "switch-root",
      description: "Change to a different root file system",
      args: [
        {
          name: "ROOT",
          template: "folders",
          isOptional: true,
        },
        {
          name: "INIT",
          template: "filepaths",
          isOptional: true,
        },
      ],
      isDangerous: true,
    },
    {
      name: "sleep",
      description:
        "Put the system to sleep (through one of the operations below)",
      isDangerous: true,
    },
    {
      name: "suspend",
      description: "Suspend the system",
      isDangerous: true,
    },
    {
      name: "hibernate",
      description: "Hibernate the system",
      isDangerous: true,
    },
    {
      name: "hybrid-sleep",
      description: "Hibernate and suspend the system",
      isDangerous: true,
    },
    {
      name: "suspend-then-hibernate",
      description:
        "Suspend the system, wake after a period of time, and hibernate",
      isDangerous: true,
    },
    // Compatibility aliases, accepted but hidden from --help
    {
      name: "condstop",
      description: "Legacy alias of 'stop'",
      hidden: true,
      args: {
        name: "UNIT",
        generators: unitGenerator,
        isVariadic: true,
      },
    },
    {
      name: "condrestart",
      description: "Legacy alias of 'try-restart'",
      hidden: true,
      args: {
        name: "UNIT",
        generators: unitGenerator,
        isVariadic: true,
      },
    },
    {
      name: ["reload-or-try-restart", "condreload", "force-reload"],
      description: "Legacy alias of 'try-reload-or-restart'",
      hidden: true,
      args: {
        name: "UNIT",
        generators: unitGenerator,
        isVariadic: true,
      },
    },
    {
      name: "check",
      description: "Deprecated alias of 'is-active'",
      hidden: true,
      args: {
        name: "PATTERN",
        generators: unitGenerator,
        isVariadic: true,
      },
    },
    {
      name: "clear-jobs",
      description: "Legacy alias of 'cancel'",
      hidden: true,
    },
  ],
  options: [
    {
      name: ["-h", "--help"],
      description: "Show this help",
    },
    {
      name: "--version",
      description: "Show package version",
    },
    {
      name: "--system",
      description: "Connect to the system service manager",
    },
    {
      name: "--user",
      description: "Connect to the user service manager",
    },
    {
      name: ["-C", "--capsule"],
      description: "Connect to service manager of specified capsule",
      args: { name: "NAME" },
    },
    {
      name: ["-H", "--host"],
      description: "Operate on remote host",
      args: { name: "[USER@]HOST" },
    },
    {
      name: ["-M", "--machine"],
      description: "Operate on local container",
      args: { name: "CONTAINER" },
    },
    {
      name: ["-t", "--type"],
      description: "List units of a particular type",
      args: { name: "TYPE", suggestions: unitTypes },
    },
    {
      name: "--state",
      description: "List units with particular LOAD or SUB or ACTIVE state",
      exclusiveOn: ["--failed"],
      args: {
        name: "STATE",
        suggestions: unitStates,
      },
    },
    {
      name: "--failed",
      description: "Shortcut for --state=failed",
      exclusiveOn: ["--state"],
    },
    {
      name: ["-p", "--property"],
      description: "Show only properties by this name",
      exclusiveOn: ["-P"],
      isRepeatable: true,
      args: {
        name: "NAME",
      },
    },
    {
      name: "-P",
      description: "Equivalent to --value --property=NAME",
      exclusiveOn: ["-p", "--property", "--value"],
      isRepeatable: true,
      args: {
        name: "NAME",
      },
    },
    {
      name: ["-a", "--all"],
      description:
        "Show all properties/all units currently in memory, including dead/empty ones. To list all units installed on the system, use 'list-unit-files' instead",
    },
    {
      name: ["-l", "--full"],
      description: "Don't ellipsize unit names on output",
    },
    {
      name: ["-r", "--recursive"],
      description: "Show unit list of host and local containers",
    },
    {
      name: "--reverse",
      description: "Show reverse dependencies with 'list-dependencies'",
    },
    {
      name: "--before",
      description: "Show units ordered before with 'list-dependencies'",
    },
    {
      name: "--after",
      description: "Show units ordered after with 'list-dependencies'",
    },
    {
      name: "--with-dependencies",
      description:
        "Show unit dependencies with 'status', 'cat', 'list-units', and 'list-unit-files'",
    },
    {
      name: "--job-mode",
      description:
        "Specify how to deal with already queued jobs, when queueing a new job",
      args: {
        name: "MODE",
        suggestions: [
          "fail",
          "lenient",
          "replace",
          "replace-irreversibly",
          "isolate",
          "ignore-dependencies",
          "ignore-requirements",
          "flush",
          "triggering",
          "restart-dependencies",
        ],
      },
    },
    {
      name: ["-T", "--show-transaction"],
      description: "When enqueuing a unit job, show full transaction",
    },
    {
      name: "--show-types",
      description: "When showing sockets, explicitly show their type",
    },
    {
      name: "--value",
      description: "When showing properties, only print the value",
      exclusiveOn: ["-P"],
    },
    {
      name: "--check-inhibitors",
      description:
        "Whether to check inhibitors before shutting down, sleeping, or hibernating",
      exclusiveOn: ["-i"],
      args: {
        name: "MODE",
        suggestions: ["auto", "yes", "no"],
      },
    },
    {
      name: "-i",
      description: "Shortcut for --check-inhibitors=no",
      exclusiveOn: ["--check-inhibitors"],
    },
    {
      name: ["-s", "--signal"],
      description: "Which signal to send",
      args: {
        name: "SIGNAL",
      },
    },
    {
      name: "--kill-whom",
      description: "Whom to send signal to",
      args: {
        name: "WHOM",
        suggestions: ["main", "control", "cgroup", "all"],
      },
    },
    {
      name: "--kill-who",
      description: "Whom to send signal to (renamed to --kill-whom)",
      deprecated: true,
      args: {
        name: "WHOM",
        suggestions: ["main", "control", "cgroup", "all"],
      },
    },
    {
      name: "--kill-value",
      description: "Signal value to enqueue",
      args: {
        name: "INT",
      },
    },
    {
      name: "--kill-subgroup",
      description: "Send signal to sub-control group only",
      args: {
        name: "PATH",
      },
    },
    {
      name: "--what",
      description: "Which types of resources to remove",
      isRepeatable: true,
      args: {
        name: "RESOURCES",
        suggestions: [
          "runtime",
          "state",
          "cache",
          "logs",
          "configuration",
          "fdstore",
          "all",
        ],
      },
    },
    {
      name: "--now",
      description: "Start or stop unit after enabling or disabling it",
    },
    {
      name: "--dry-run",
      description:
        "Only print what would be done. Currently supported by verbs: halt, poweroff, reboot, kexec, soft-reboot, suspend, hibernate, suspend-then-hibernate, hybrid-sleep, default, rescue, emergency, and exit",
    },
    {
      name: ["-q", "--quiet"],
      description: "Suppress output",
    },
    {
      name: ["-v", "--verbose"],
      description: "Show unit logs while executing operation",
    },
    {
      name: "--no-warn",
      description: "Suppress several warnings shown by default",
    },
    {
      name: "--wait",
      description:
        "For (re)start, wait until service stopped again. For is-system-running, wait until startup is completed. For kill, wait until service stopped",
    },
    {
      name: "--no-block",
      description: "Do not wait until operation finished",
    },
    {
      name: "--no-wall",
      description: "Don't send wall message before halt/power-off/reboot",
    },
    {
      name: "--message",
      description: "Specify human-readable reason for system shutdown",
      isRepeatable: true,
      args: {
        name: "MESSAGE",
      },
    },
    {
      name: "--no-reload",
      description: "Don't reload daemon after en-/dis-abling unit files",
    },
    {
      name: "--legend",
      description: "Enable/disable the legend (column headers and hints)",
      args: {
        name: "BOOL",
        suggestions: ["true", "false"],
      },
    },
    {
      name: "--no-pager",
      description: "Do not start a pager",
    },
    {
      name: "--no-ask-password",
      description: "Do not prompt for password",
    },
    {
      name: "--global",
      description: "Edit/enable/disable/mask default user unit files globally",
    },
    {
      name: "--runtime",
      description:
        "Edit/enable/disable/mask unit files temporarily until next reboot",
    },
    {
      name: ["-f", "--force"],
      description:
        "When enabling unit files, override existing symlinks. When shutting down, execute action immediately",
      isRepeatable: true,
    },
    {
      name: "--preset-mode",
      description: "Apply only enable, only disable, or all presets",
      args: {
        name: "MODE",
        suggestions: ["full", "enable-only", "disable-only"],
      },
    },
    {
      name: "--root",
      description:
        "Edit/enable/disable/mask unit files in the specified root directory",
      exclusiveOn: ["--image"],
      args: {
        name: "PATH",
        template: "folders",
      },
    },
    {
      name: "--image",
      description:
        "Edit/enable/disable/mask unit files in the specified disk image",
      exclusiveOn: ["--root"],
      args: {
        name: "PATH",
        template: "filepaths",
      },
    },
    {
      name: "--image-policy",
      description: "Specify disk image dissection policy",
      args: {
        name: "POLICY",
      },
    },
    {
      name: ["-n", "--lines"],
      description: "Number of journal entries to show",
      args: {
        name: "INTEGER",
      },
    },
    {
      name: ["-o", "--output"],
      description: "Change journal output mode",
      args: {
        name: "MODE",
        suggestions: [
          "short",
          "short-full",
          "short-iso",
          "short-iso-precise",
          "short-precise",
          "short-monotonic",
          "short-delta",
          "short-unix",
          "verbose",
          "export",
          "json",
          "json-pretty",
          "json-sse",
          "json-seq",
          "cat",
          "with-unit",
        ],
      },
    },
    {
      name: "--firmware-setup",
      description: "Tell the firmware to show the setup menu on next boot",
    },
    {
      name: "--boot-loader-menu",
      description: "Boot into boot loader menu on next boot",
      args: {
        name: "TIME",
      },
    },
    {
      name: "--boot-loader-entry",
      description: "Boot into a specific boot loader entry on next boot",
      args: {
        name: "NAME",
      },
    },
    {
      name: "--reboot-argument",
      description: "Specify argument string to pass to reboot()",
      args: {
        name: "ARG",
      },
    },
    {
      name: "--kernel-cmdline",
      description:
        "Append to the kernel command line when loading the kernel from the booted boot loader entry",
      isRepeatable: true,
      args: {
        name: "CMDLINE",
      },
    },
    {
      name: "--kernel-cmdline-reuse",
      description:
        "Like --kernel-cmdline=, but reuse the current kernel command line",
    },
    {
      name: "--plain",
      description: "Print unit dependencies as a list instead of a tree",
    },
    {
      name: "--timestamp",
      description: "Change format of printed timestamps",
      args: {
        name: "FORMAT",
        suggestions: ["pretty", "unix", "us", "utc", "us+utc"],
      },
    },
    {
      name: "--read-only",
      description: "Create read-only bind mount",
    },
    {
      name: "--mkdir",
      description: "Create directory before mounting, if missing",
    },
    {
      name: "--marked",
      description:
        "Restart/reload previously marked units (deprecated, use 'enqueue-marked')",
      deprecated: true,
    },
    {
      name: "--drop-in",
      description: "Edit unit files using the specified drop-in file name",
      args: {
        name: "NAME",
      },
    },
    {
      name: "--when",
      description:
        "Schedule halt/power-off/reboot/kexec action after a certain timestamp",
      args: {
        name: "TIME",
        suggestions: ["show", "cancel", "auto"],
      },
    },
    {
      name: "--stdin",
      description: "Read new contents of edited file from stdin",
    },
    // Compatibility-only options, accepted but hidden from --help
    {
      name: "--fail",
      description: "Shorthand for --job-mode=fail",
      hidden: true,
    },
    {
      name: "--irreversible",
      description: "Shorthand for --job-mode=replace-irreversibly",
      hidden: true,
    },
    {
      name: "--ignore-dependencies",
      description: "Shorthand for --job-mode=ignore-dependencies",
      hidden: true,
    },
    {
      name: "--ignore-inhibitors",
      description: "Shortcut for --check-inhibitors=no",
      hidden: true,
    },
    {
      name: "--no-legend",
      description: "Shortcut for --legend=no",
      hidden: true,
    },
  ],
};
export default completionSpec;
