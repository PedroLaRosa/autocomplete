// who (macOS BSD, man page dated 2020-08-30, 2026-11-19). Source: apple-oss-distributions/shell_cmds tag shell_cmds-329 who/who.1 + who/who.c (Apple getopt "abdHlmpqrstTu"); man page and source only, not run on macOS. Changes: descriptions refreshed from the man page; -d, -l, -p, -r and -t are accepted by who.c but not documented in who.1, so they are marked hidden.
const completionSpec: Fig.Spec = {
  name: "who",
  description: "Display who is logged in",
  parserDirectives: {
    optionsMustPrecedeArguments: true,
  },
  subcommands: [
    {
      name: "am",
      description: "Equivalent to -m (use as 'who am I')",
      additionalSuggestions: [
        {
          name: "am I",
          insertValue: "I{cursor}",
          icon: "fig://icon?type=command",
        },
      ],
      priority: 40,
    },
  ],
  options: [
    {
      name: "-a",
      description:
        "Equivalent to -bTu, but output is not restricted to the time and date of the last system reboot",
    },
    {
      name: "-b",
      description: "Write the time and date of the last system reboot",
    },
    {
      name: "-d",
      description: "Show dead processes (not documented in the man page)",
      hidden: true,
    },
    {
      name: "-H",
      description: "Write column headings above the output",
    },
    {
      name: "-l",
      description: "Show login processes (not documented in the man page)",
      hidden: true,
    },
    {
      name: "-m",
      description:
        "Show information about the terminal attached to standard input only",
    },
    {
      name: "-p",
      description:
        "Accepted for compatibility, no effect (not documented in the man page)",
      hidden: true,
    },
    {
      name: "-q",
      description:
        "'Quick mode': List the names and number of logged in users in columns, ignoring all other options",
      exclusiveOn: [
        "-a",
        "-b",
        "-d",
        "-H",
        "-l",
        "-m",
        "-p",
        "-r",
        "-s",
        "-T",
        "-t",
        "-u",
      ],
    },
    {
      name: "-r",
      description:
        "Print the current runlevel (not documented in the man page)",
      hidden: true,
    },
    {
      name: "-s",
      description:
        "Show the name, line and time fields only (this is the default)",
    },
    {
      name: "-T",
      description:
        "Indicate whether each user is accepting messages: '+' accepting, '-' not accepting, '?' error",
    },
    {
      name: "-t",
      description:
        "Accepted for compatibility, no effect (not documented in the man page)",
      hidden: true,
    },
    {
      name: "-u",
      description:
        "Show idle time for each user as hh:mm ('.' if under a minute, 'old' if over 24 hours)",
    },
  ],
  args: {
    name: "file",
    description:
      "By default, who gathers information from the file /var/run/utmpx; an alternative file may be specified, usually /var/log/utx.log",
    isOptional: true,
    template: "filepaths",
  },
};
export default completionSpec;
