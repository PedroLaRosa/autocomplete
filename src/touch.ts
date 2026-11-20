// touch (macOS 15 BSD, `man touch` dated 2018-06-01, 2026-11-19). Source: apple-oss-distributions/file_cmds tags file_cmds-457.140.3 (macOS 15-era) and file_cmds-479 (latest published), touch/touch.1 and touch/touch.c getopt "A:acd:fhmr:t:" (identical in both); not a live run on macOS
const completionSpec: Fig.Spec = {
  name: "touch",
  description: "Change file access and modification times",
  args: {
    name: "file",
    isVariadic: true,
    template: "filepaths",
    suggestCurrentToken: true,
  },
  options: [
    {
      name: "-A",
      description:
        "Adjust the access and modification time stamps for the file by the specified value (implies -c)",
      args: {
        name: "time",
        description: "[-][[hh]mm]SS",
      },
    },
    { name: "-a", description: "Change the access time of the file" },
    {
      name: "-c",
      description: "Do not create the file if it does not exist",
    },
    {
      name: "-d",
      description:
        "Change the access and modification times to the specified date time instead of the current time of day",
      args: {
        name: "date_time",
        description: "YYYY-MM-DDThh:mm:SS[.frac][tz]",
      },
    },
    {
      name: "-f",
      description:
        "Ignored, accepted for compatibility (no longer documented in the man page)",
      deprecated: true,
    },
    {
      name: "-h",
      description:
        "If the file is a symbolic link, change the times of the link itself rather than the file that the link points to (implies -c)",
    },
    {
      name: "-m",
      description: "Change the modification time of the file",
    },
    {
      name: "-r",
      description:
        "Use the access and modifications times from the specified file instead of the current time of day",
      args: {
        name: "file",
        template: "filepaths",
      },
    },
    {
      name: "-t",
      description:
        "Change the access and modification times to the specified time instead of the current time of day",
      args: {
        name: "timestamp",
        description: "[[CC]YY]MMDDhhmm[.SS]",
      },
    },
  ],
};

export default completionSpec;
