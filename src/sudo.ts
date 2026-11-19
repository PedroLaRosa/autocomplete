// sudo v1.9.17p2 (upstream sudo-project/sudo v1.9.17p2 = Apple sudo-114.100.11 shipped in macOS 26, 2026-11-19). Source: src/parse_args.c option table + help() and docs/sudo.mdoc.in from apple-oss-distributions/sudo tag sudo-114.100.11; not run on macOS.
// Linux-only SELinux (-r/-t), BSD auth (-a) and login class (-c) options are not built into macOS sudo and are omitted.
const completionSpec: Fig.Spec = {
  name: "sudo",
  description: "Execute a command as the superuser or another user",
  options: [
    {
      name: ["-A", "--askpass"],
      description: "Use a helper program for password prompting",
    },
    {
      name: ["-B", "--bell"],
      description: "Ring bell when prompting",
    },
    {
      name: ["-b", "--background"],
      description: "Run command in the background",
    },
    {
      name: ["-C", "--close-from"],
      description: "Close all file descriptors greater than or equal to num",
      args: {
        name: "num",
      },
    },
    {
      name: ["-D", "--chdir"],
      description: "Change the working directory before running command",
      args: {
        name: "directory",
        template: "folders",
      },
    },
    {
      name: "-E",
      description: "Preserve user environment when running command",
    },
    {
      name: "--preserve-env",
      description:
        "Preserve user environment when running command, or only the specified variables",
      requiresSeparator: true,
      args: {
        name: "list",
        description: "Comma-separated list of environment variables",
        isOptional: true,
      },
    },
    {
      name: ["-e", "--edit"],
      description: "Edit files instead of running a command",
    },
    {
      name: ["-g", "--group"],
      description: "Run command as the specified group name or ID",
      args: {
        name: "group",
        description: "Group name or ID",
      },
    },
    {
      name: ["-H", "--set-home"],
      description: "Set HOME variable to target user's home directory",
    },
    {
      name: ["-h", "--help"],
      description: "Display help message and exit",
    },
    {
      name: "--host",
      description: "Run command on host (if supported by plugin)",
      requiresSeparator: true,
      args: {
        name: "host",
      },
    },
    {
      name: ["-i", "--login"],
      description:
        "Run login shell as the target user; a command may also be specified",
      exclusiveOn: ["-s", "--shell"],
    },
    {
      name: ["-K", "--remove-timestamp"],
      description: "Remove timestamp file completely",
    },
    {
      name: ["-k", "--reset-timestamp"],
      description: "Invalidate timestamp file",
    },
    {
      name: ["-l", "--list"],
      description:
        "List user's privileges or check a specific command; use twice for longer format",
      isRepeatable: true,
    },
    {
      name: ["-N", "--no-update"],
      description: "Do not update the user's timestamp",
    },
    {
      name: ["-n", "--non-interactive"],
      description: "Non-interactive mode, no prompts are used",
    },
    {
      name: ["-P", "--preserve-groups"],
      description: "Preserve group vector instead of setting to target's",
    },
    {
      name: ["-p", "--prompt"],
      description: "Use the specified password prompt",
      args: {
        name: "prompt",
      },
    },
    {
      name: ["-R", "--chroot"],
      description: "Change the root directory before running command",
      args: {
        name: "directory",
        template: "folders",
      },
    },
    {
      name: ["-S", "--stdin"],
      description: "Read password from standard input",
    },
    {
      name: ["-s", "--shell"],
      description:
        "Run shell as the target user; a command may also be specified",
      exclusiveOn: ["-i", "--login"],
    },
    {
      name: ["-T", "--command-timeout"],
      description: "Terminate command after the specified time limit",
      args: {
        name: "timeout",
      },
    },
    {
      name: ["-U", "--other-user"],
      description: "In list mode, display privileges for user",
      args: {
        name: "user",
        description: "User name or ID",
      },
    },
    {
      name: ["-u", "--user"],
      description: "Run command (or edit file) as specified user name or ID",
      args: {
        name: "user",
        description: "User name or ID",
      },
    },
    {
      name: ["-V", "--version"],
      description: "Display version information and exit",
    },
    {
      name: ["-v", "--validate"],
      description: "Update user's timestamp without running a command",
    },
    {
      name: "--",
      description: "Stop processing command line arguments",
    },
  ],
  args: {
    name: "command",
    description: "Command to run with elevated permissions",
    isCommand: true,
    isOptional: true,
  },
};

export default completionSpec;
