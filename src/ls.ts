// ls (macOS BSD, Apple OSS file_cmds-457.140.3 and file_cmds-479 man page dated 2020-08-31, 2026-11-19). Source: apple-oss-distributions/file_cmds ls/ls.1 + ls/ls.c (getopt "+@1ABCD:FGHILOPRSTUWXabcdefghiklmnopqrstuvwxy%," plus --color); man pages and source only, not run on macOS. Changes: added -D -I -X -y, --color argument is optional (default always) and accepts tty/if-tty, several descriptions refreshed. GNU-only -Z is not on macOS and is not listed.
const completionSpec: Fig.Spec = {
  name: "ls",
  description: "List directory contents",
  args: {
    isVariadic: true,
    template: ["filepaths", "folders"],
    filterStrategy: "fuzzy",
  },
  options: [
    {
      name: "-@",
      description:
        "Display extended attribute keys and sizes in long (-l) output",
    },
    {
      name: "-1",
      description:
        "Force output to be one entry per line. This is the default when output is not to a terminal",
    },
    {
      name: "-A",
      description:
        "Include directory entries whose names begin with a dot (.) except for . and ... Automatically set for the super-user unless -I is specified",
    },
    {
      name: "-a",
      description: "Include directory entries whose names begin with a dot (.)",
    },
    {
      name: "-B",
      description:
        "Force printing of non-printable characters (as defined by ctype(3) and current locale settings) in file names as \\xxx, where xxx is the numeric value of the character in octal",
    },
    {
      name: "-b",
      description: "As -B, but use C escape codes whenever possible",
    },
    {
      name: "-C",
      description:
        "Force multi-column output; this is the default when output is to a terminal",
    },
    {
      name: "-c",
      description:
        "Use time when file status was last changed for sorting (-t) or long printing (-l)",
    },
    {
      name: "-D",
      description:
        "When printing in the long (-l) format, use format (a strftime(3) string) to format the date and time output. Overrides -T",
      args: {
        name: "format",
      },
    },
    {
      name: "-d",
      description:
        "Directories are listed as plain files (not searched recursively)",
    },
    {
      name: "-e",
      description:
        "Print the Access Control List (ACL) associated with the file, if present, in long (-l) output",
    },
    {
      name: "-F",
      description:
        "Display a slash (/) immediately after each pathname that is a directory, an asterisk (*) after each that is executable, an at sign (@) after each symbolic link, an equals sign (=) after each socket, a percent sign (%) after each whiteout, and a vertical bar (|) after each that is a FIFO",
    },
    {
      name: "-f",
      description:
        "Output is not sorted. This option turns on the -a option and negates the effect of the -r, -S and -t options",
    },
    {
      name: "-G",
      description:
        "Enable colorized output. This option is equivalent to defining CLICOLOR or COLORTERM in the environment and setting --color=auto",
    },
    {
      name: "-g",
      description:
        "Display the group name instead of the owner name in long (-l) output (compatibility option; the man page documents it as having no effect)",
    },
    {
      name: "-H",
      description:
        "Symbolic links on the command line are followed. This option is assumed if none of the -F, -d, or -l options are specified",
    },
    {
      name: "-h",
      description:
        "When used with the -l option, use unit suffixes: Byte, Kilobyte, Megabyte, Gigabyte, Terabyte and Petabyte in order to reduce the number of digits to four or fewer using base 2 for sizes",
    },
    {
      name: "-I",
      description: "Prevent -A from being automatically set for the super-user",
    },
    {
      name: "-i",
      description:
        "For each file, print the file's file serial number (inode number)",
    },
    {
      name: "-k",
      description:
        "Same as setting the environment variable BLOCKSIZE to 1024, except that it also nullifies any -h options to its left",
    },
    {
      name: "-L",
      description:
        "Follow all symbolic links to final target and list the file or directory the link references rather than the link itself. This option cancels the -P option",
    },
    {
      name: "-l",
      description: "List files in the long format",
    },
    {
      name: "-m",
      description:
        "Stream output format; list files across the page, separated by commas",
    },
    {
      name: "-n",
      description:
        "Display user and group IDs numerically rather than converting to a user or group name in long (-l) output. This option turns on the -l option",
    },
    {
      name: "-O",
      description: "Include the file flags in long (-l) output",
    },
    { name: "-o", description: "List in long format, but omit the group id" },
    {
      name: "-P",
      description:
        "If argument is a symbolic link, list the link itself rather than the object the link references. This option cancels the -H and -L options",
    },
    {
      name: "-p",
      description:
        "Write a slash (/) after each filename if that file is a directory",
    },
    {
      name: "-q",
      description:
        "Force printing of non-graphic characters in file names as the character ?; this is the default when output is to a terminal",
    },
    { name: "-R", description: "Recursively list subdirectories encountered" },
    {
      name: "-r",
      description: "Reverse the order of the sort",
    },
    {
      name: "-S",
      description:
        "Sort by size (largest file first) before sorting the operands in lexicographical order",
    },
    {
      name: "-s",
      description:
        "Display the number of blocks used in the file system by each file",
    },
    {
      name: "-T",
      description:
        "When printing in the long (-l) format, display complete time information for the file, including month, day, hour, minute, second, and year",
    },
    {
      name: "-t",
      description:
        "Sort by descending time modified (most recently modified first). If two files have the same modification timestamp, sort their names in ascending lexicographical order",
    },
    {
      name: "-u",
      description:
        "Use time of last access, instead of last modification of the file for sorting (-t) or long printing (-l)",
    },
    {
      name: "-U",
      description: "Use time when file was created for sorting or printing",
    },
    {
      name: "-v",
      description:
        "Force unedited printing of non-graphic characters; this is the default when output is not to a terminal",
    },
    {
      name: "-W",
      description: "Display whiteouts when scanning directories",
    },
    {
      name: "-w",
      description:
        "Force raw printing of non-printable characters. This is the default when output is not to a terminal",
    },
    {
      name: "-X",
      description:
        "When listing recursively, do not descend into directories that have a different device number (would cross file system boundaries)",
    },
    {
      name: "-x",
      description:
        "The same as -C, except that the multi-column output is produced with entries sorted across, rather than down, the columns",
    },
    {
      name: "-y",
      description:
        "When the -t option is set, sort the alphabetical output in the same order as the time output (same as setting LS_SAMESORT)",
    },
    {
      name: "-%",
      description:
        "Distinguish dataless files and directories with a '%' character in long (-l) output, and don't materialize dataless directories when listing them",
    },
    {
      name: "-,",
      description:
        "Print file sizes grouped and separated by thousands using the non-monetary separator returned by localeconv(3), typically a comma or period",
      dependsOn: ["-l"],
    },
    {
      name: "--color",
      description:
        "Output colored escape sequences based on when (always if no argument is given)",
      requiresSeparator: true,
      args: {
        name: "when",
        isOptional: true,
        suggestions: [
          {
            name: ["always", "yes", "force"],
            description: "Will make ls always output color",
          },
          {
            name: ["auto", "tty", "if-tty"],
            description:
              "Will make ls output escape sequences based on termcap(5), but only if stdout is a tty and either the -G flag is specified or the COLORTERM environment variable is set and not empty",
          },
          {
            name: ["never", "no", "none"],
            description:
              "Will disable color regardless of environment variables",
          },
        ],
      },
    },
  ],
};

export default completionSpec;
