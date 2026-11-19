// uname (macOS 15 BSD, `man uname` dated 2020-11-13, 2026-11-19). Source: apple-oss-distributions/shell_cmds tags shell_cmds-319.0.1 (macOS 15-era) and shell_cmds-329 (latest published), uname/uname.1 and uname/uname.c getopt "amnoprsv" under __APPLE__ (identical in both); not a live run on macOS
const completionSpec: Fig.Spec = {
  name: "uname",
  description: "Print operating system name",
  options: [
    {
      name: "-a",
      description: "Print all available system information",
    },
    {
      name: "-m",
      description: "Print the machine hardware name",
    },
    {
      name: "-n",
      description: "Print the system hostname",
    },
    {
      name: "-o",
      description: "Print the operating system name (synonym for -s)",
    },
    {
      name: "-p",
      description: "Print the machine processor architecture name",
    },
    {
      name: "-r",
      description: "Print the operating system release",
    },
    {
      name: "-s",
      description: "Print the operating system name",
    },
    {
      name: "-v",
      description: "Print the operating system version",
    },
  ],
};

export default completionSpec;
