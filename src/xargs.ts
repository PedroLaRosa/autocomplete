// xargs (macOS 15.5 BSD xargs, shell_cmds-326 from the Apple OSS mirror, man page dated 2020-09-21, 2026-11-19).
// Source: xargs.1 and xargs.c read from github.com/apple-oss-distributions/shell_cmds (not run on macOS; no option
// changes in shell_cmds-329). GNU-only options (e.g. -a, -d, --process-slot-var) are not included.
const completionSpec: Fig.Spec = {
  name: "xargs",
  description:
    "Execute a command with whitespace-delimited strings (from stdin) as arguments",
  options: [
    {
      name: ["-0", "--null"],
      description: "Use NUL (0x00) as a separator, instead of whitespace",
    },
    {
      name: "-E",
      description: "Use this string as a logical EOF marker",
      args: {
        name: "eof-str",
        description: "The string to use that marks EOF",
      },
    },
    {
      name: "-I",
      description:
        "Replace occurrences of this string with the input, running the program once per input line (implies -x)",
      args: {
        name: "replacement-str",
        description: "The string to replace",
      },
    },
    {
      name: "-J",
      description:
        "Replace an argument exactly equal to this string with the input",
      args: {
        name: "replacement-str",
        description: "The string to replace",
      },
    },
    {
      name: "-L",
      description:
        "Run the program each time this many lines of input are read",
      args: {
        name: "number",
      },
      exclusiveOn: ["-n"],
    },
    {
      name: ["-n", "--max-args"],
      description:
        "The maximum number of arguments that can be taken from stdin on each run (default: 5000)",
      args: {
        name: "number",
      },
      exclusiveOn: ["-L"],
    },
    {
      name: "-o",
      description:
        "Reopen stdin as /dev/tty (useful for running interactive applications)",
    },
    {
      name: ["-P", "--max-procs"],
      description:
        "Run up to this many commands in parallel (as many as possible if 0)",
      args: {
        name: "max-procs",
      },
    },
    {
      name: ["-p", "--interactive"],
      description: "Prompt to run each command",
    },
    {
      name: ["-r", "--no-run-if-empty"],
      description:
        "Accepted for GNU xargs compatibility and does nothing (BSD xargs never runs the utility on empty input)",
    },
    {
      name: "-R",
      description:
        "Specify the maximum number of arguments that -I will replace in (default: 5, negative means unbounded)",
      dependsOn: ["-I"],
      args: {
        name: "number",
      },
    },
    {
      name: "-S",
      description:
        "Specify the maximum size in bytes that -I can use for replacements (default: 255)",
      dependsOn: ["-I"],
      args: {
        name: "replacement-size",
      },
    },
    {
      name: ["-s", "--max-chars"],
      description:
        "Maximum number of bytes for the command line provided to the program (default: ARG_MAX - 4096)",
      args: {
        name: "max-args-size",
      },
    },
    {
      name: ["-t", "--verbose"],
      description: "Echo the command to stderr before it's executed",
    },
    {
      name: ["-x", "--exit"],
      description:
        "Terminate immediately if a command line with the -n number of arguments will not fit in the maximum line length",
      dependsOn: ["-n"],
    },
  ],
  args: {
    name: "utility",
    description: "Run this program for each line of stdin (default: echo)",
    isCommand: true,
    isOptional: true,
  },
};

export default completionSpec;
