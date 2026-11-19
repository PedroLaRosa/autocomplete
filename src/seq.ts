// seq (macOS 15 BSD, seq.1 dated 2020-06-20 in Apple OSS shell_cmds-319.0.1 through 329, 2026-11-19).
// Source: seq.1 + seq.c (getopt_long "+f:hs:t:w") from apple-oss-distributions/shell_cmds; man page / OSS mirror only, not run on macOS.
// seq.1 lists --fixed-width but seq.c only defines --equal-width (also the GNU name), so the long form is --equal-width.
// Usage: seq [-w] [-f format] [-s string] [-t string] [first [incr]] last. -t is BSD-only; GNU seq has no -t.
const completionSpec: Fig.Spec = {
  name: "seq",
  description: "Print sequences of numbers",
  args: [
    {
      name: "first",
      description:
        "Starting number in sequence (default 1). With a single argument, that argument is the last number",
    },
    {
      name: "incr",
      description:
        "Increment interval (default 1, or -1 if first is larger than last). With two arguments, this position is the last number",
      isOptional: true,
    },
    {
      name: "last",
      description: "Last number in sequence",
      isOptional: true,
    },
  ],
  options: [
    {
      name: ["-w", "--equal-width"],
      description:
        "Equalize the widths of all numbers by padding with zeros as necessary. Has no effect with -f",
    },
    {
      name: ["-s", "--separator"],
      description: "String separator between numbers. Default is newline",
      insertValue: `-s "{cursor}"`,
      args: {
        name: "string",
        description: "Separator",
      },
    },
    {
      name: ["-f", "--format"],
      description:
        "Use a printf(3) style format to print each number. Default is %g",
      insertValue: `-f %{cursor}`,
      args: {
        name: "format",
        description: "Print all numbers using format",
      },
    },
    {
      // TODO(platform): macos only option
      name: ["-t", "--terminator"],
      description: "Use string to terminate sequence of numbers",
      insertValue: `-t "{cursor}"`,
      args: {
        name: "string",
        description: "Terminator",
      },
    },
  ],
};
export default completionSpec;
