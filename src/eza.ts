// eza v0.23.5 (latest release tag; matches crates.io and the Homebrew formula, 2026-11-20).
// Source: read statically (no binary run) from a shallow clone of eza-community/eza at v0.23.5:
// src/options/parser.rs (clap definition) and its expected --help output (tests/ptests), plus man/eza.1.md.
// The clap parser is authoritative where it differs from the man page and shipped completions: it only
// accepts always|auto|never for the WHEN options ("automatic" is rejected) and only defines the --colour
// alias for --color (no --colour-scale / --colour-scale-mode).

const longView = ["-l", "--long"];

// Options taking an optional WHEN value (clap: num_args(0..=1), default_missing_value "auto")
const whenArg = (thing: string): Fig.Arg => ({
  name: "when",
  isOptional: true,
  default: "auto",
  suggestions: [
    {
      name: "auto",
      description: `Use ${thing} only when the standard output is connected to a real terminal`,
    },
    { name: "always", description: `Always use ${thing}` },
    { name: "never", description: `Never use ${thing}` },
  ],
});

// Options taking an optional MODE value, which must be attached with "=" (clap: require_equals)
const codeModeArg: Fig.Arg = {
  name: "mode",
  isOptional: true,
  default: "both",
  suggestions: [
    { name: "lines", description: "Count of code lines" },
    { name: "percent", description: "Share of the code in the whole tree" },
    { name: "both", description: "Lines and percentage" },
  ],
};

// -t conflicts with the single timestamp field flags (and vice versa)
const timeFieldFlags = [
  "-t",
  "--time",
  "-m",
  "--modified",
  "-u",
  "--accessed",
  "--changed",
  "-U",
  "--created",
];
const exclusiveTimeFlags = (own: string[]) =>
  timeFieldFlags.filter((flag) => !own.includes(flag));

const treatDirsAsFilesConflicts = ["-R", "--recurse", "-T", "--tree"];

const completionSpec: Fig.Spec = {
  name: "eza",
  description: "A modern replacement for ls",
  args: {
    name: "files",
    isVariadic: true,
    template: "filepaths",
    default: ".",
  },
  options: [
    // META OPTIONS
    {
      name: "--stdin",
      description:
        "Read file names from stdin, one per line or other separator specified in environment",
    },
    {
      name: ["-?", "--help"],
      description: "Show list of command-line options",
    },
    {
      name: ["-v", "--version"],
      description: "Show version of eza",
    },
    // LAYOUT OPTIONS
    {
      name: ["-1", "--oneline"],
      description: "Display one entry per line",
    },
    {
      name: ["-l", "--long"],
      description: "Display extended file metadata as a table",
    },
    {
      name: ["-G", "--grid"],
      description: "Display entries as a grid (default)",
    },
    {
      name: ["-x", "--across"],
      description: "Sort the grid across, rather than downward",
    },
    {
      name: ["-R", "--recurse"],
      description: "Recurse into directories",
    },
    {
      name: ["-T", "--tree"],
      description: "Recurse into directories as a tree",
    },
    {
      name: ["-L", "--level"],
      description: "Limit the depth of recursion",
      args: {
        name: "depth",
      },
    },
    {
      name: "--code",
      description:
        "Summarise lines of code by language, recursing the tree or git repo",
      requiresSeparator: "=",
      args: codeModeArg,
    },
    {
      name: "--follow-symlinks",
      description: "Drill down into symbolic links that point to directories",
    },
    {
      name: ["-w", "--width"],
      description: "Set screen width in columns",
      args: {
        name: "columns",
      },
    },
    // DISPLAY OPTIONS
    {
      name: ["-F", "--classify"],
      description: "Display type indicator by file names",
      args: whenArg("file kind indicators"),
    },
    {
      name: ["-X", "--dereference"],
      description: "Dereference symbolic links when displaying information",
    },
    {
      name: "--absolute",
      description: "Display entries with their absolute path",
      args: {
        name: "mode",
        isOptional: true,
        default: "on",
        suggestions: [
          { name: "on", description: "Show absolute paths for all entries" },
          {
            name: "follow",
            description:
              "Show absolute paths and resolve symbolic links to their targets",
          },
          { name: "off", description: "Show relative paths (default)" },
        ],
      },
    },
    {
      name: ["--color", "--colour"],
      description: "When to use terminal colours",
      args: whenArg("terminal colors"),
    },
    {
      name: "--color-scale",
      description:
        "Highlight levels of 'field' distinctly (comma-separated list)",
      requiresSeparator: "=",
      args: {
        name: "field",
        isOptional: true,
        default: "all",
        suggestions: ["all", "age", "size"],
      },
    },
    {
      name: "--color-scale-mode",
      description: "Use gradient or fixed colors in --color-scale",
      args: {
        name: "mode",
        suggestions: ["fixed", "gradient"],
        default: "gradient",
      },
    },
    {
      name: "--icons",
      description: "When to display icons",
      args: whenArg("icons"),
    },
    {
      name: "--hyperlink",
      description: "When to display entries as hyperlinks",
      args: whenArg("hyperlinks"),
    },
    {
      name: "--no-quotes",
      description: "Don't quote file names with spaces",
    },
    {
      name: "--short-nix",
      description: "Abbreviate Nix store hashes in file names and paths",
    },
    // FILTERING OPTIONS
    {
      name: ["-a", "--all"],
      description:
        "Show hidden and 'dot' files. Use this twice to also show the '.' and '..' directories",
      isRepeatable: 2,
    },
    {
      name: ["-A", "--almost-all"],
      description:
        "Equivalent to '--all'; included for compatibility with 'ls -A'",
    },
    {
      name: ["-d", "--treat-dirs-as-files"],
      description: "Treat directories as files; don't list their contents",
      exclusiveOn: treatDirsAsFilesConflicts,
    },
    {
      name: "--list-dirs",
      description: "Deprecated alias of --treat-dirs-as-files",
      deprecated: true,
      exclusiveOn: treatDirsAsFilesConflicts,
    },
    {
      name: ["-D", "--only-dirs"],
      description: "List only directories",
    },
    {
      name: ["-f", "--only-files"],
      description: "List only files",
    },
    {
      name: "--show-symlinks",
      description:
        "Explicitly show symbolic links (with --only-dirs and --only-files)",
      dependsOn: ["--only-dirs", "--only-files"],
    },
    {
      name: "--no-symlinks",
      description: "Do not show symbolic links",
    },
    {
      name: ["-I", "--ignore-glob"],
      description: "Glob patterns (pipe-separated) of files to ignore",
      args: {
        name: "globs",
      },
    },
    {
      name: "--git-ignore",
      description: "Ignore files mentioned in '.gitignore'",
    },
    // SORTING OPTIONS
    {
      name: "--group-directories-first",
      description: "List directories before other files",
    },
    {
      name: "--group-directories-last",
      description: "List directories after other files",
    },
    {
      name: ["-s", "--sort"],
      description: "Which field to sort by",
      args: {
        name: "field",
        default: "name",
        suggestions: [
          {
            name: ["name", "filename"],
            description: "Sort by name, mixing lowercase and UPPERCASE",
          },
          {
            name: ["Name", "Filename"],
            description: "Sort by name, UPPERCASE before lowercase",
          },
          {
            name: [".name", ".filename"],
            description:
              "Sort by name ignoring a leading dot, mixing lowercase and UPPERCASE",
          },
          {
            name: [".Name", ".Filename"],
            description:
              "Sort by name ignoring a leading dot, UPPERCASE before lowercase",
          },
          {
            name: ["ext", "extension"],
            description: "Sort by extension, mixing lowercase and UPPERCASE",
          },
          {
            name: ["Ext", "Extension"],
            description: "Sort by extension, UPPERCASE before lowercase",
          },
          { name: "size", description: "Sort by file size" },
          {
            name: ["date", "time", "mod", "modified", "new", "newest"],
            description: "Sort by modified time, oldest first",
          },
          {
            name: ["age", "old", "oldest"],
            description: "Sort by modified time, newest first",
          },
          { name: ["changed", "ch"], description: "Sort by changed time" },
          { name: ["accessed", "acc"], description: "Sort by accessed time" },
          { name: ["created", "cr"], description: "Sort by created time" },
          { name: "inode", description: "Sort by inode (Unix only)" },
          { name: "type", description: "Sort by file type" },
          { name: "none", description: "Do not sort files at all" },
        ],
      },
    },
    {
      name: ["-r", "--reverse"],
      description: "Reverse the sort order",
    },
    // LONG VIEW OPTIONS
    {
      name: ["-h", "--header"],
      description: "Add a header row to each column",
      dependsOn: longView,
    },
    {
      name: ["-i", "--inode"],
      description: "List each file's inode number",
      dependsOn: longView,
    },
    {
      name: "--loc",
      description: "Add lines-of-code and language columns",
      requiresSeparator: "=",
      args: codeModeArg,
      dependsOn: longView,
    },
    {
      name: ["-o", "--octal-permissions"],
      description: "List each file's permission in octal format",
      dependsOn: longView,
    },
    {
      name: ["-H", "--links"],
      description: "List each file's number of hard links",
      dependsOn: longView,
    },
    {
      name: ["-b", "--binary"],
      description: "List file sizes with binary prefixes",
      dependsOn: longView,
    },
    {
      name: ["-B", "--bytes"],
      description: "List file sizes in bytes, without any prefixes",
      dependsOn: longView,
    },
    {
      name: "--total-size",
      description:
        "Show the size of a directory as the size of all files and directories inside (Unix only)",
      dependsOn: longView,
    },
    {
      name: ["-S", "--blocksize"],
      description: "List each file's size of allocated file system blocks",
      dependsOn: longView,
    },
    {
      name: ["-g", "--group"],
      description: "List each file's group",
      dependsOn: longView,
    },
    {
      name: "--smart-group",
      description: "Only show group if it has a different name from owner",
      dependsOn: longView,
    },
    {
      name: ["-n", "--numeric"],
      description: "List numeric user and group IDs",
      dependsOn: longView,
    },
    {
      name: ["-t", "--time"],
      description: "Which timestamp field to list",
      args: {
        name: "field",
        suggestions: [
          { name: ["modified", "mod"] },
          { name: ["changed", "ch"] },
          { name: ["accessed", "acc"] },
          { name: ["created", "cr"] },
        ],
      },
      dependsOn: longView,
      exclusiveOn: exclusiveTimeFlags(["-t", "--time"]),
    },
    {
      name: ["-m", "--modified"],
      description:
        "Use the modified timestamp field (replaces default field, combinable)",
      dependsOn: longView,
      exclusiveOn: exclusiveTimeFlags(["-m", "--modified"]),
    },
    {
      name: ["-u", "--accessed"],
      description:
        "Use the accessed timestamp field (replaces default field, combinable)",
      dependsOn: longView,
      exclusiveOn: exclusiveTimeFlags(["-u", "--accessed"]),
    },
    {
      name: "--changed",
      description:
        "Use the changed timestamp field (replaces default field, combinable)",
      dependsOn: longView,
      exclusiveOn: exclusiveTimeFlags(["--changed"]),
    },
    {
      name: ["-U", "--created"],
      description:
        "Use the created timestamp field (replaces default field, combinable)",
      dependsOn: longView,
      exclusiveOn: exclusiveTimeFlags(["-U", "--created"]),
    },
    {
      name: "--time-style",
      description: "How to format timestamps",
      args: {
        name: "format",
        suggestions: [
          { name: "default", description: "Use the default time style" },
          { name: "iso", description: "Display brief ISO timestamps" },
          {
            name: "long-iso",
            description: "Display longer ISO timestamps, up to the minute",
          },
          {
            name: "full-iso",
            description: "Display full ISO timestamps, up to the nanosecond",
          },
          { name: "relative", description: "Display relative timestamps" },
          {
            name: "+%Y-%m-%d %H:%M",
            description: "Custom chrono format string, starting with a plus",
          },
        ],
      },
      dependsOn: longView,
    },
    {
      name: ["-O", "--flags"],
      description: "List file flags (Mac, BSD, and Windows only)",
      dependsOn: longView,
    },
    {
      name: ["-Z", "--context"],
      description: "List each file's security context",
      dependsOn: longView,
    },
    {
      name: "--git",
      description: "List each file's Git status, if tracked or ignored",
      dependsOn: longView,
    },
    {
      name: "--git-repos",
      description: "List root of git-tree status",
      dependsOn: longView,
    },
    {
      name: "--git-repos-no-status",
      description: "List each git-repos branch name (much faster)",
      dependsOn: longView,
    },
    {
      name: ["-M", "--mounts"],
      description: "Show mount details (Linux and macOS only)",
      dependsOn: longView,
    },
    {
      name: ["-@", "--extended"],
      description: "List each file's extended attributes and sizes",
      dependsOn: longView,
    },
    {
      name: "--no-permissions",
      description: "Suppress the permissions field",
      dependsOn: longView,
    },
    {
      name: "--no-filesize",
      description: "Suppress the filesize field",
      dependsOn: longView,
    },
    {
      name: "--no-user",
      description: "Suppress the user field",
      dependsOn: longView,
    },
    {
      name: "--no-time",
      description: "Suppress the time field",
      dependsOn: longView,
    },
    {
      name: "--no-git",
      description:
        "Suppress Git fields (overrides --git, --git-repos, --git-repos-no-status)",
      dependsOn: longView,
    },
  ],
};

export default completionSpec;
