// find (macOS 15 BSD find, shell_cmds-326, man page dated 2023-12-22, 2026-11-19). Source: find/find.1 and find/option.c from the apple-oss-distributions/shell_cmds mirror (man page + source, not a live run on macOS).
// Primaries and operators are listed as options (single-dash, so flagsArePosixNoncompliant); GNU-only primaries that BSD find lacks (-printf, -fprint, -xtype, ...) are intentionally not listed.
const numberArg: Fig.Arg = { name: "n" };

const timeUnitsArg: Fig.Arg = {
  name: "n",
  description: "Number, optionally followed by units of smhdw",
};

const fileArg: Fig.Arg = { name: "file", template: "filepaths" };

const patternArg: Fig.Arg = { name: "pattern" };

// Primaries can be combined and repeated freely in an expression
const primary = (
  name: string | string[],
  description: string,
  args?: Fig.Arg | Fig.Arg[]
): Fig.Option => ({
  name,
  description,
  isRepeatable: true,
  ...(args ? { args } : {}),
});

const timeKinds: [string, string][] = [
  ["B", "inode creation"],
  ["a", "last access"],
  ["c", "last change of file status information"],
  ["m", "last modification"],
];

const minutePrimaries = timeKinds.map(([x, what]) =>
  primary(
    `-${x}min`,
    `True if the file ${what} time is more than (+n), less than (-n) or exactly n minutes ago`,
    numberArg
  )
);

const timePrimaries = timeKinds.map(([x, what]) =>
  primary(
    `-${x}time`,
    `True if the file ${what} time is n 24-hour periods ago, or exactly n units ago if units (smhdw) are given`,
    timeUnitsArg
  )
);

const newerFilePrimaries = [
  primary("-Bnewer", "Same as -newerBm", fileArg),
  primary("-anewer", "Same as -neweram", fileArg),
  primary("-cnewer", "Same as -newercm", fileArg),
  primary("-mnewer", "Same as -newer", fileArg),
];

const newerXYPrimaries = timeKinds.flatMap(([x, what]) =>
  [...timeKinds, ["t", ""]].map(([y, otherWhat]) =>
    primary(
      `-newer${x}${y}`,
      y === "t"
        ? `True if the file ${what} time is more recent than the given date (ISO8601 or RFC822)`
        : `True if the file ${what} time is more recent than the ${otherWhat} time of file`,
      y === "t" ? { name: "date" } : fileArg
    )
  )
);

const execArgs: Fig.Arg[] = [
  { name: "utility", isCommand: true },
  { name: "argument", isOptional: true, isVariadic: true },
];

const completionSpec: Fig.Spec = {
  name: "find",
  description: "Walk a file hierarchy",
  parserDirectives: {
    flagsArePosixNoncompliant: true,
  },
  args: [
    {
      name: "path",
      isOptional: true,
      isVariadic: true,
      template: ["folders"],
    },
    {
      name: "expression",
      description: "Composition of primaries and operands",
      isOptional: true,
      isVariadic: true,
    },
  ],
  options: [
    {
      name: "-E",
      description:
        "Interpret regular expressions followed by -regex and -iregex primaries as extended",
    },
    {
      name: "-H",
      description:
        "Cause the file information and file type returned for each symbolic link specified on the command line to be those referenced by the link",
      exclusiveOn: ["-L", "-P"],
    },
    {
      name: "-L",
      description:
        "Cause the file information and file type returned for each symbolic link to be those of the file referenced by the link",
      exclusiveOn: ["-H", "-P"],
    },
    {
      name: "-P",
      description:
        "Cause the file information and file type returned for each symbolic link to be those for the link itself (default)",
      exclusiveOn: ["-H", "-L"],
    },
    {
      name: "-X",
      description: "Permit find to be safely used in conjunction with xargs",
    },
    {
      name: "-d",
      description:
        "Cause find to perform a depth-first traversal (also usable as the -d primary, same as -depth)",
    },
    {
      name: "-f",
      description: "Add path to the list of paths that will be recursed into",
      args: {
        name: "path",
        template: "folders",
      },
    },
    {
      name: "-s",
      description:
        "Cause find to traverse the file hierarchies in lexicographical order",
    },
    {
      name: "-x",
      description:
        "Prevent find from descending into directories that have a device number different than that of the file from which the descent began",
    },

    // Primaries
    ...minutePrimaries,
    ...timePrimaries,
    ...newerFilePrimaries,
    ...newerXYPrimaries,
    primary(
      "-newer",
      "True if the file has a more recent modification time than file",
      fileArg
    ),
    primary("-acl", "True if the file has an extended ACL"),
    primary(
      "-delete",
      "Delete found files and/or directories (implies depth-first traversal; always returns true)"
    ),
    primary(
      "-depth",
      "Visit directories in post-order, or with n true if the depth of the file relative to the starting point is n",
      { name: "n", isOptional: true }
    ),
    primary("-empty", "True if the current file or directory is empty"),
    primary(
      "-exec",
      "Run utility for each file (terminated by ;), or with as many pathnames as possible (terminated by {} +)",
      execArgs
    ),
    primary(
      "-execdir",
      "Like -exec, but run utility from the directory that holds the current file",
      execArgs
    ),
    primary(
      "-ok",
      "Like -exec, but ask for confirmation before each execution",
      execArgs
    ),
    primary(
      "-okdir",
      "Like -execdir, but ask for confirmation before each execution",
      execArgs
    ),
    primary("-false", "Always false"),
    primary("-true", "Always true"),
    primary(
      "-flags",
      "True if the file flags match, using symbolic names (see chflags(1)), optionally prefixed with - or +",
      { name: "flags" }
    ),
    {
      name: "-follow",
      description: "Same as the -L option",
      deprecated: true,
      isRepeatable: true,
    },
    primary(
      "-fstype",
      "True if the file is contained in a file system of type",
      {
        name: "type",
        suggestions: [
          { name: "local", description: "Any locally mounted file system" },
          { name: "rdonly", description: "Any read-only mounted file system" },
        ],
      }
    ),
    primary(["-group", "-gid"], "True if the file belongs to the group", {
      name: "gname",
    }),
    primary(["-user", "-uid"], "True if the file belongs to the user", {
      name: "uname",
    }),
    primary(
      "-ignore_readdir_race",
      "Ignore errors because a file or a directory is deleted after reading the name from a directory"
    ),
    primary(
      "-noignore_readdir_race",
      "Turn off the effect of -ignore_readdir_race (default)"
    ),
    primary(
      "-ilname",
      "Like -lname, but the match is case insensitive",
      patternArg
    ),
    primary(
      "-iname",
      "Like -name, but the match is case insensitive",
      patternArg
    ),
    primary("-inum", "True if the file has inode number n", numberArg),
    primary(
      ["-ipath", "-iwholename"],
      "Like -path, but the match is case insensitive",
      patternArg
    ),
    primary(
      "-iregex",
      "Like -regex, but the match is case insensitive",
      patternArg
    ),
    primary("-links", "True if the file has n links", numberArg),
    primary(
      "-lname",
      "Like -name, but the contents of the symbolic link are matched instead of the file name",
      patternArg
    ),
    primary(
      "-ls",
      "Write inode number, blocks, permissions, links, owner, group, size, mtime and pathname of the file (like ls -dgils)"
    ),
    primary(
      "-maxdepth",
      "Descend at most n directory levels below the command line arguments",
      numberArg
    ),
    primary(
      "-mindepth",
      "Do not apply any tests or actions at levels less than n",
      numberArg
    ),
    primary(
      "-mount",
      "Prevent descending into directories on other file systems (same as -x)"
    ),
    primary(
      "-name",
      "True if the last component of the pathname matches pattern",
      patternArg
    ),
    primary("-nogroup", "True if the file belongs to an unknown group"),
    primary("-nouser", "True if the file belongs to an unknown user"),
    primary("-noleaf", "Ignored, for GNU find compatibility"),
    primary(
      ["-path", "-wholename"],
      "True if the pathname being examined matches pattern",
      patternArg
    ),
    primary(
      "-perm",
      "True if the file mode matches (octal or symbolic), optionally prefixed with - (all bits set) or + (any bit set)",
      { name: "mode" }
    ),
    primary(
      "-print",
      "Print the pathname of the current file followed by a newline"
    ),
    primary(
      "-print0",
      "Print the pathname of the current file followed by a NUL"
    ),
    primary(
      "-prune",
      "Do not descend into the current file (no effect with -d)"
    ),
    primary("-quit", "Terminate immediately"),
    primary(
      "-regex",
      "True if the whole path of the file matches the regular expression",
      patternArg
    ),
    primary("-samefile", "True if the file is a hard link to name", {
      name: "name",
      template: "filepaths",
    }),
    primary(
      "-size",
      "True if the file size, in 512-byte blocks (or c, k, M, G, T, P units), is n",
      {
        name: "n",
        description: "Number, optionally followed by one of ckMGTP",
      }
    ),
    primary("-sparse", "True if the current file is sparse"),
    primary("-type", "True if the file is of the specified type", {
      name: "t",
      suggestions: [
        { name: "b", description: "Block special" },
        { name: "c", description: "Character special" },
        { name: "d", description: "Directory" },
        { name: "f", description: "Regular file" },
        { name: "l", description: "Symbolic link" },
        { name: "p", description: "FIFO" },
        { name: "s", description: "Socket" },
      ],
    }),
    primary("-xattr", "True if the file has any extended attributes"),
    primary(
      "-xattrname",
      "True if the file has an extended attribute with the specified name",
      { name: "name" }
    ),
    {
      name: "-xdev",
      description: "Same as the -x option",
      deprecated: true,
      isRepeatable: true,
    },

    // Operators
    primary("-not", "Logical NOT of the following expression"),
    primary(
      ["-and", "-a"],
      "Logical AND of two expressions (implied by juxtaposition)"
    ),
    primary(["-or", "-o"], "Logical OR of two expressions"),
  ],
};

export default completionSpec;
