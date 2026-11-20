// chmod (macOS 15.5 BSD, man page dated 2017-01-07, synced 2026-11-19). Source: `man chmod`
const aceArg: Fig.Arg = {
  name: "ACE",
  description:
    "ACL entry: '[user:|group:]name allow|deny perm[,perm...]', e.g. 'admin allow write'",
};

const indexArg: Fig.Arg = {
  name: "index",
  description: "Position of the ACL entry, as listed by 'ls -le'",
};

const completionSpec: Fig.Spec = {
  name: "chmod",
  description: "Change file modes or Access Control Lists",
  args: [
    {
      name: "mode",
      suggestions: [
        // Some of the most common chmod's (non-exhaustive)
        {
          name: "u+x",
          type: "arg",
          description: "Give execute permission for the user",
          icon: "🔐",
        },
        {
          name: "a+rx",
          type: "arg",
          description: "Adds read and execute permissions for all classes",
          icon: "🔐",
        },
        {
          name: "744",
          type: "arg",
          description:
            "Sets read, write, and execute permissions for user, and sets read permission for Group and Others",
          icon: "🔐",
        },
        {
          name: "664",
          type: "arg",
          description:
            "Sets read and write permissions for user and Group, and provides read to Others",
          icon: "🔐",
        },
        {
          name: "777",
          type: "arg",
          description: "⚠️ allows all actions for all users",
          icon: "🔐",
        },
        // ponytail: `=a#` is a mode operand Fig can't parse as an option, so it lives here
        {
          name: "=a#",
          type: "arg",
          description:
            "Rewrite the ACL entry at the given index; follow with the index and the new ACE",
          icon: "🔐",
        },
      ],
    },
    {
      // Modifying
      template: "filepaths",
      isVariadic: true,
    },
  ],

  options: [
    {
      name: "-f",
      description:
        "Do not display a diagnostic message if chmod could not modify the mode for file, nor modify the exit status to reflect such failures",
    },
    {
      name: "-H",
      description:
        "If the -R option is specified, symbolic links on the command line are followed and hence unaffected by the command.  (Symbolic links encountered during tree traversal are not followed.)",
      exclusiveOn: ["-L", "-P"],
      dependsOn: ["-R"],
    },
    {
      name: "-h",
      description:
        "If the file is a symbolic link, change the mode of the link itself rather than the file that the link points to",
    },
    {
      name: "-L",
      description:
        "If the -R option is specified, all symbolic links are followed",
      exclusiveOn: ["-H", "-P"],
      dependsOn: ["-R"],
    },
    {
      name: "-P",
      description:
        "If the -R option is specified, no symbolic links are followed. This is the default",
      exclusiveOn: ["-H", "-L"],
      dependsOn: ["-R"],
    },
    {
      name: "-R",
      description:
        "Change the modes of the file hierarchies rooted in the files, instead of just the files themselves. Beware of unintentionally matching the ``..'' hard link to the parent directory when using wildcards like ``.*''",
    },
    {
      name: "-v",
      description:
        "Cause chmod to be verbose, showing filenames as the mode is modified. If the -v flag is specified more than once, the old and new modes of the file will also be printed, in both octal and symbolic notation",
      isRepeatable: true,
    },
    {
      name: "+a",
      description:
        "Insert an ACL entry at its canonical location, merging with an existing entry for the same identity",
      args: aceArg,
    },
    {
      name: "+ai",
      description: "Insert an inherited ACL entry",
      args: aceArg,
    },
    {
      name: "+a#",
      description:
        "Insert an ACL entry at the given index (allows non-canonical ordering)",
      args: [indexArg, aceArg],
    },
    {
      name: "+ai#",
      description: "Insert an inherited ACL entry at the given index",
      args: [indexArg, aceArg],
    },
    {
      name: "-a",
      description:
        "Delete matching ACL entries, or only the listed rights if a subset is given",
      args: aceArg,
    },
    {
      name: "-a#",
      description: "Delete the ACL entry at the given index",
      args: indexArg,
    },
    {
      name: "-E",
      description:
        "Read ACL entries from stdin, one per line, and replace the existing ACL",
    },
    {
      name: "-C",
      description:
        "Return false if any of the named files have ACLs in non-canonical order",
    },
    {
      name: "-i",
      description:
        "Remove the 'inherited' bit from all entries in the named files' ACLs",
    },
    {
      name: "-I",
      description: "Remove all inherited entries from the named files' ACLs",
    },
    {
      name: "-N",
      description: "Remove the ACL from the named files",
    },
  ],
};

export default completionSpec;
