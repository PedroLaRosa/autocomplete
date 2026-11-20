// tree v2.3.2 (upstream Old-Man-Programmer/tree tag 2.3.2, 2026-03-16, also Homebrew stable; verified 2026-11-20).
// Source: usage()/option parser in tree.c and doc/tree.1 at tag 2.3.2, read statically (not run);
// --acl and --selinux exist on Linux builds only
const completionSpec: Fig.Spec = {
  name: "tree",
  description: "Display directories as trees (with optional color/HTML output)",
  args: {
    template: "folders",
  },
  options: [
    {
      name: "-a",
      description: "All files are listed",
    },
    {
      name: "-d",
      description: "List directories only",
    },
    {
      name: "-l",
      description: "Follow symbolic links like directories",
    },
    {
      name: "-f",
      description: "Print the full path prefix for each file",
    },
    {
      name: "-x",
      description: "Stay on current filesystem only",
    },
    {
      name: "-L",
      description: "Descend only level directories deep",
      args: {
        name: "level",
      },
    },
    {
      name: "-R",
      description: "Rerun tree when max dir level reached",
    },
    {
      name: "-P",
      description: "List only those files that match the pattern given",
      isRepeatable: true,
      args: {
        name: "pattern",
      },
    },
    {
      name: "-I",
      description: "Do not list files that match the given pattern",
      isRepeatable: true,
      args: {
        name: "pattern",
      },
    },
    {
      name: "--gitignore",
      description: "Filter by using .gitignore files",
    },
    {
      name: "--gitfile",
      description: "Explicitly read a gitignore file",
      args: {
        name: "file",
        template: "filepaths",
      },
    },
    {
      name: "--ignore-case",
      description: "Ignore case when pattern matching",
    },
    {
      name: "--matchdirs",
      description: "Include directory names in -P pattern matching",
    },
    {
      name: "--metafirst",
      description: "Print meta-data at the beginning of each line",
    },
    {
      name: "--prune",
      description: "Prune empty directories from the output",
    },
    {
      name: "--info",
      description: "Print information about files found in .info files",
    },
    {
      name: "--infofile",
      description: "Explicitly read info file",
      args: {
        name: "file",
        template: "filepaths",
      },
    },
    {
      name: "--noreport",
      description: "Turn off file/directory count at end of tree listing",
    },
    {
      name: "--charset",
      description:
        "Use charset X for terminal/HTML and indentation line output",
      args: {
        name: "charset",
      },
    },
    {
      name: "--filelimit",
      description: "Do not descend dirs with more than # files in them",
      args: {
        name: "number",
        description: "Number of files",
      },
    },
    {
      name: "--condense",
      description: "Condense directory singletons to a single line of output",
    },
    {
      name: "--timefmt",
      description: "Print and format time according to the format <f>",
      args: {
        name: "format",
        description: "Format in strftime syntax",
      },
    },
    {
      name: "-o",
      description: "Output to file instead of stdout",
      args: {
        name: "filename",
      },
    },
    {
      name: "-q",
      description: "Print non-printable characters as '?'",
    },
    {
      name: "-N",
      description: "Print non-printable characters as is",
    },
    {
      name: "-Q",
      description: "Quote filenames with double quotes",
    },
    {
      name: "-p",
      description: "Print the protections for each file",
    },
    {
      name: "-u",
      description: "Displays file owner or UID number",
    },
    {
      name: "-g",
      description: "Displays file group owner or GID number",
    },
    {
      name: "-s",
      description: "Print the size in bytes of each file",
    },
    {
      name: "-h",
      description: "Print the size in a more human readable way",
    },
    {
      name: "--si",
      description: "Like -h but use SI units (powers of 1000) instead",
    },
    {
      name: "--du",
      description:
        "For each directory report its size as the accumulation of sizes of all its files and sub-directories (and their files, and so on). The total amount of used space is also given in the final report (like the 'du -c' command.) This option requires tree to read the entire directory tree before emitting it, see BUGS AND NOTES below. Implies -s",
    },
    {
      name: "-D",
      description:
        "Print the date of the last modification time or if -c is used, the last status change time for the file listed",
    },
    {
      name: "-F",
      description: "Appends '/', '=', '*', '@', '|' or '>' as per ls -F",
    },
    {
      name: "--inodes",
      description: "Print inode number of each file",
    },
    {
      name: "--device",
      description: "Print device ID number to which each file belongs",
    },
    {
      name: "--acl",
      description:
        "Print permissions with a + if an ACL is present (Linux only, implies -p)",
    },
    {
      name: "--selinux",
      description: "Print the SELinux security label if present (Linux only)",
    },
    {
      name: "-v",
      description: "Sort files alphanumerically by version",
    },
    {
      name: "-t",
      description: "Sort files by last modification time",
    },
    {
      name: "-c",
      description: "Sort files by last status change time",
    },
    {
      name: "-U",
      description: "Leave files unsorted",
    },
    {
      name: "-r",
      description: "Reverse the order of the sort",
    },
    {
      name: "--dirsfirst",
      description: "List directories before files (-U disables)",
    },
    {
      name: "--filesfirst",
      description: "List files before directories (-U disables)",
    },
    {
      name: "--sort",
      description: "Select sort",
      args: {
        name: "type",
        suggestions: ["name", "version", "size", "mtime", "ctime", "none"],
      },
    },
    {
      name: "-i",
      description: "Don't print indentation lines",
    },
    {
      name: "-A",
      description: "Print ANSI lines graphic indentation lines",
    },
    {
      name: "-S",
      description: "Print with CP437 (console) graphics indentation lines",
    },
    {
      name: "-n",
      description: "Turn colorization off always (-C overrides)",
    },
    {
      name: "-C",
      description: "Turn colorization on always",
    },
    {
      name: "--compress",
      description: "Compress indentation lines",
      args: {
        name: "level",
        suggestions: ["1", "2", "3", "-1", "-2", "-3"],
      },
    },
    {
      name: "-X",
      description: "Prints out an XML representation of the tree",
    },
    {
      name: "-J",
      description: "Prints out an JSON representation of the tree",
    },
    {
      name: "-H",
      description: "Prints out HTML format with baseHREF as top directory",
      args: {
        name: "baseHREF",
      },
    },
    {
      name: "-T",
      description: "Replace the default HTML title and H1 header with string",
      args: {
        name: "title",
      },
    },
    {
      name: "--nolinks",
      description: "Turn off hyperlinks in HTML output",
    },
    {
      name: "--hintro",
      description: "Use file as the HTML intro",
      args: {
        name: "file",
        template: "filepaths",
      },
    },
    {
      name: "--houtro",
      description: "Use file as the HTML outro",
      args: {
        name: "file",
        template: "filepaths",
      },
    },
    {
      name: "--hyperlink",
      description: "Turn on OSC 8 terminal hyperlinks",
    },
    {
      name: "--scheme",
      description: "Set OSC 8 hyperlink scheme, default file://",
      args: {
        name: "scheme",
      },
    },
    {
      name: "--authority",
      description: "Set OSC 8 hyperlink authority/hostname",
      args: {
        name: "host",
      },
    },
    {
      name: "--fromfile",
      description: "Reads paths from files (. = stdin)",
    },
    {
      name: "--fromtabfile",
      description: "Reads trees from tab indented files (. = stdin)",
    },
    {
      name: "--fflinks",
      description: "Process link information when using --fromfile",
    },
    {
      name: "--opt-toggle",
      description: "Enable option toggling",
    },
    {
      name: "--version",
      description: "Print version and exit",
    },
    {
      name: "--help",
      description: "Print usage and this help message and exit",
    },
    {
      name: "--",
      description: "Options processing terminator",
    },
  ],
};
export default completionSpec;
