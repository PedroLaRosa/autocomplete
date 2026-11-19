// exa v0.10.1 (latest upstream release tag, 2021-04; ogham/exa is archived, succeeded by eza; 2026-11-19).
// Source: cloned ogham/exa at v0.10.1 and read src/options/{flags,help,filter,view}.rs, man/exa.1.md and
// completions/completions.zsh. Not run (Rust build skipped); no flags were invented beyond those sources.
const completionSpec: Fig.Spec = {
  name: "exa",
  description: "A modern replacement for ls",
  args: {
    isVariadic: true,
    name: "files...",
    template: "filepaths",
  },
  options: [
    {
      description: "Show list of command-line options",
      name: ["-?", "--help"],
    },
    {
      description: "Show version of exa",
      name: ["-v", "--version"],
    },
    {
      description: "Display one entry per line",
      name: ["-1", "--oneline"],
    },
    {
      description: "Display extended file metadata as a table",
      name: ["-l", "--long"],
    },
    {
      description: "Display entries as a grid (default)",
      name: ["-G", "--grid"],
    },
    {
      description: "Sort the grid across, rather than downwards",
      name: ["-x", "--across"],
    },
    {
      description: "Recurse into directories",
      name: ["-R", "--recurse"],
    },
    {
      description: "Recurse into directories as a tree",
      name: ["-T", "--tree"],
    },
    {
      description: "Display type indicator by file names",
      name: ["-F", "--classify"],
    },
    {
      description: "When to use terminal colours (always, auto, never)",
      name: ["--colour", "--color"],
      args: {
        name: "when",
        suggestions: [
          {
            name: "always",
          },
          {
            name: "auto",
          },
          {
            name: "never",
          },
        ],
      },
    },
    {
      description: "Highlight levels of file sizes distinctly",
      name: ["--colour-scale", "--color-scale"],
    },
    {
      description:
        "Show hidden and 'dot' files (use twice to also show . and ..)",
      name: ["-a", "--all"],
      isRepeatable: 2,
    },
    {
      description: "List directories like regular files",
      name: ["-d", "--list-dirs"],
    },
    {
      description: "Limit the depth of recursion",
      name: ["-L", "--level"],
      args: {
        name: "DEPTH",
      },
    },
    {
      description: "Reverse the sort order",
      name: ["-r", "--reverse"],
    },
    {
      description:
        "Which field to sort by (date, time, old and new all refer to modified)",
      name: ["-s", "--sort"],
      args: {
        name: "sort field",
        suggestions: [
          {
            name: "name",
          },
          {
            name: "Name",
          },
          {
            name: "extension",
          },
          {
            name: "Extension",
          },
          {
            name: "size",
          },
          {
            name: "type",
          },
          {
            name: "modified",
          },
          {
            name: "changed",
          },
          {
            name: "accessed",
          },
          {
            name: "created",
          },
          {
            name: "inode",
          },
          {
            name: "none",
          },
          {
            name: "date",
            description: "Alias for modified",
          },
          {
            name: "time",
            description: "Alias for modified",
          },
          {
            name: "newest",
            description: "Alias for modified",
          },
          {
            name: "new",
            description: "Alias for modified",
          },
          {
            name: "age",
            description: "Reverse of modified (oldest first)",
          },
          {
            name: "oldest",
            description: "Reverse of modified (oldest first)",
          },
          {
            name: "old",
            description: "Reverse of modified (oldest first)",
          },
        ],
      },
    },
    {
      description: "List directories before other files",
      name: "--group-directories-first",
    },
    {
      description: "List only directories",
      name: ["-D", "--only-dirs"],
    },
    {
      description: "Glob patterns (pipe-separated) of files to ignore",
      name: ["-I", "--ignore-glob"],
      args: {
        name: "GLOB",
      },
    },
    {
      description: "Ignore files mentioned in '.gitignore'",
      name: "--git-ignore",
    },
    {
      description: "List file sizes with binary prefixes",
      name: ["-b", "--binary"],
    },
    {
      description: "List file sizes in bytes, without any prefixes",
      name: ["-B", "--bytes"],
    },
    {
      description: "List each file's group",
      name: ["-g", "--group"],
    },
    {
      description: "Add a header row to each column",
      name: ["-h", "--header"],
    },
    {
      description: "List each file's number of hard links",
      name: ["-H", "--links"],
    },
    {
      description: "List each file's inode number",
      name: ["-i", "--inode"],
    },
    {
      description: "Use the modified timestamp field",
      name: ["-m", "--modified"],
    },
    {
      description: "List numeric user and group IDs",
      name: ["-n", "--numeric"],
    },
    {
      description: "Show number of file system blocks",
      name: ["-S", "--blocks"],
    },
    {
      description:
        "Which timestamp field to list (modified, changed, accessed, created)",
      name: ["-t", "--time"],
      args: {
        name: "FIELD",
        suggestions: ["modified", "changed", "accessed", "created"],
      },
    },
    {
      description: "Use the accessed timestamp field",
      name: ["-u", "--accessed"],
    },
    {
      description: "Use the created timestamp field",
      name: ["-U", "--created"],
    },
    {
      description: "Use the changed timestamp field",
      name: "--changed",
    },
    {
      description:
        "How to format timestamps (default, iso, long-iso, full-iso)",
      name: "--time-style",
      args: {
        name: "style",
        suggestions: [
          {
            name: "default",
          },
          {
            name: "iso",
          },
          {
            name: "long-iso",
          },
          {
            name: "full-iso",
          },
        ],
      },
    },
    {
      description: "Suppress the permissions field",
      name: "--no-permissions",
    },
    {
      description: "List each file's permission in octal format",
      name: "--octal-permissions",
    },
    {
      description: "Suppress the filesize field",
      name: "--no-filesize",
    },
    {
      description: "Suppress the user field",
      name: "--no-user",
    },
    {
      description: "Suppress the time field",
      name: "--no-time",
    },
    {
      description: "List each file's Git status, if tracked or ignored",
      name: "--git",
    },
    {
      description: "List each file's extended attributes and sizes",
      name: ["-@", "--extended"],
    },
    {
      description: "Shows icons before each folder or file",
      name: "--icons",
      exclusiveOn: ["--no-icons"],
    },
    {
      description: "Does not display icons (always overrides --icons)",
      exclusiveOn: ["--icons"],
      name: "--no-icons",
    },
  ],
};

export default completionSpec;
