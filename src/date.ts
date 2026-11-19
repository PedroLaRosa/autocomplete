// date (macOS 15.5 BSD, `man date` dated 2024-09-10, 2026-11-19). Source: apple-oss-distributions shell_cmds-326 date.1 + date.c getopt string, matches the Xcode 16.4 man page; not run on macOS
const completionSpec: Fig.Spec = {
  name: "date",
  description: "Display or set date and time",
  options: [
    {
      name: "-f",
      description:
        "Use input_fmt (parsed with strptime) as the format of new_date instead of the default [[[mm]dd]HH]MM[[cc]yy][.ss] format",
      args: {
        name: "input_fmt",
        description: "The format with which to parse the new date value",
      },
    },
    {
      name: "-I",
      description:
        "Use ISO 8601 output format with the given precision (default is date)",
      args: {
        name: "FMT",
        isOptional: true,
        suggestions: ["date", "hours", "minutes", "seconds", "ns"],
      },
    },
    {
      name: "-j",
      description:
        "Do not try to set the date (allows -f together with + to convert one date format to another)",
    },
    {
      name: "-n",
      description: "Obsolete flag, accepted and ignored for compatibility",
      deprecated: true,
    },
    {
      name: "-R",
      description: "Use RFC 2822 date and time output format",
    },
    {
      name: "-r",
      description:
        "Print the date and time represented by the specified number of seconds since the Epoch, or the last modification time of a file",
      args: {
        name: "seconds or filename",
        description:
          "Seconds since the Epoch (00:00:00 UTC, January 1, 1970; decimal, octal or hex) or a file name",
        template: "filepaths",
      },
    },
    {
      name: "-u",
      description:
        "Display or set the date in UTC (Coordinated Universal) time",
    },
    {
      name: "-v",
      description:
        "Adjust and print (but don't set) the second, minute, hour, month day, week day, month, or year according to val",
      isRepeatable: true,
      args: {
        name: "val",
        description: "[+|-]val[ymwdHMS]",
      },
    },
    {
      name: "-z",
      description:
        "Change to the specified timezone just before printing the time",
      args: {
        name: "output_zone",
      },
    },
  ],
  args: {
    name: "new_time OR output_fmt",
    description:
      "New_time: [[[mm]dd]HH]MM[[cc]yy][.ss] (or new_date when -f is used), output_fmt: '+' followed by user-defined format string",
    isOptional: true,
    isDangerous: true,
  },
};
export default completionSpec;
