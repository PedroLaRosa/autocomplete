// Dust v1.2.7 (latest tag of bootandy/dust, matches Homebrew formula, 2026-11-19).
// Source: src/cli.rs (clap definition) and the generated completions/dust.fish at tag v1.2.7; binary not run.
const sizeFormatSuggestions: Fig.Suggestion[] = [
  { name: "si", description: "SI prefix (powers of 1000)" },
  { name: "b", description: "Byte (B)" },
  { name: "k", description: "Kibibyte (KiB)" },
  { name: "m", description: "Mebibyte (MiB)" },
  { name: "g", description: "Gibibyte (GiB)" },
  { name: "t", description: "Tebibyte (TiB)" },
  { name: "kb", description: "Kilobyte (kB)" },
  { name: "mb", description: "Megabyte (MB)" },
  { name: "gb", description: "Gigabyte (GB)" },
  { name: "tb", description: "Terabyte (TB)" },
];

const fileTimeSuggestions: Fig.Suggestion[] = [
  { name: "a", description: "Last accessed time" },
  { name: "c", description: "Last changed time" },
  { name: "m", description: "Last modified time" },
];

const timeFilterDescription =
  "+n matches files more than n days old, -n matches files less than n days old, n matches files exactly n days old (days are rounded down)";

const completionSpec: Fig.Spec = {
  name: "dust",
  description: "Like du but more intuitive",
  options: [
    {
      name: ["--help", "-h"],
      description: "Print help (see more with '--help')",
    },
    {
      name: ["--version", "-V"],
      description: "Print version",
    },
    {
      name: ["--depth", "-d"],
      description: "Depth to show",
      args: {
        name: "depth",
      },
    },
    {
      name: ["--threads", "-T"],
      description: "Number of threads to use",
      args: {
        name: "threads",
      },
    },
    {
      name: "--config",
      description: "Specify a config file to use",
      args: {
        name: "file",
        template: "filepaths",
      },
    },
    {
      name: ["--number-of-lines", "-n"],
      description:
        "Display the 'n' largest entries (default is terminal height)",
      args: {
        name: "number",
      },
    },
    {
      name: ["--full-paths", "-p"],
      description: "Subdirectories will not have their path shortened",
    },
    {
      name: ["--ignore-directory", "-X"],
      description: "Exclude any file or directory with this path",
      isRepeatable: true,
      args: {
        name: "path",
        template: ["filepaths", "folders"],
      },
    },
    {
      name: ["--ignore-all-in-file", "-I"],
      description:
        "Exclude any file or directory with a regex matching that listed in this file, the file entries will be added to the ignore regexs provided by --invert-filter",
      args: {
        name: "file",
        template: "filepaths",
      },
    },
    {
      name: ["--dereference-links", "-L"],
      description:
        "Dereference sym links - treat sym links as directories and go into them",
    },
    {
      name: ["--limit-filesystem", "-x"],
      description:
        "Only count the files and directories on the same filesystem as the supplied directory",
    },
    {
      name: ["--apparent-size", "-s"],
      description: "Use file length instead of blocks",
    },
    {
      name: ["--reverse", "-r"],
      description: "Print tree upside down (biggest highest)",
    },
    {
      name: ["--no-colors", "-c"],
      description:
        "No colors will be printed (useful for commands like: watch)",
    },
    {
      name: ["--force-colors", "-C"],
      description: "Force colors print",
    },
    {
      name: "--dim",
      description:
        "Dim the percent bars (grey) to reduce brightness on dark terminals",
    },
    {
      name: ["--no-percent-bars", "-b"],
      description: "No percent bars or percentages will be displayed",
    },
    {
      name: ["--bars-on-right", "-B"],
      description: "Percent bars moved to right side of screen",
    },
    {
      name: ["--min-size", "-z"],
      description: "Minimum size file to include in output",
      args: {
        name: "min_size",
      },
    },
    {
      name: ["--screen-reader", "-R"],
      description:
        "For screen readers. Removes bars. Adds new column: depth level (may want to use -p too for full path)",
    },
    {
      name: "--skip-total",
      description: "No total row will be displayed",
    },
    {
      name: ["--filecount", "-f"],
      description:
        "Directory 'size' is number of child files instead of disk size",
    },
    {
      name: ["--ignore-hidden", "-i"],
      description: "Do not display hidden files",
    },
    {
      name: ["--invert-filter", "-v"],
      description:
        'Exclude filepaths matching this regex. To ignore png files type: -v "\\.png$"',
      isRepeatable: true,
      args: {
        name: "regex",
      },
    },
    {
      name: ["--filter", "-e"],
      description:
        'Only include filepaths matching this regex. For png files type: -e "\\.png$"',
      isRepeatable: true,
      args: {
        name: "regex",
      },
    },
    {
      name: ["--file-types", "-t"],
      description: "Show only these file types",
    },
    {
      name: ["--terminal-width", "-w"],
      description:
        "Specify width of output overriding the auto detection of terminal width",
      args: {
        name: "width",
      },
    },
    {
      name: ["--no-progress", "-P"],
      description: "Disable the progress indication",
    },
    {
      name: "--print-errors",
      description: "Print path with errors",
    },
    {
      name: ["--only-dir", "-D"],
      description: "Only directories will be displayed",
    },
    {
      name: ["--only-file", "-F"],
      description: "Only files will be displayed (finds your largest files)",
    },
    {
      name: ["--output-format", "-o"],
      description:
        "Changes output display size. si will print sizes in powers of 1000. b k m g t kb mb gb tb will print the whole tree in that size",
      args: {
        name: "format",
        suggestions: sizeFormatSuggestions,
      },
    },
    {
      name: ["--stack-size", "-S"],
      description:
        "The walker no longer recurses so a custom stack size is unnecessary, the value is ignored",
      deprecated: true,
      args: {
        name: "stack_size",
      },
    },
    {
      name: ["--output-json", "-j"],
      description: "Output the directory tree as json to the current directory",
    },
    {
      name: ["--mtime", "-M"],
      description: `Filter by modification time: ${timeFilterDescription}`,
      args: {
        name: "days",
      },
    },
    {
      name: ["--atime", "-A"],
      description: `Filter by access time: ${timeFilterDescription}`,
      args: {
        name: "days",
      },
    },
    {
      name: ["--ctime", "-y"],
      description: `Filter by change time: ${timeFilterDescription}`,
      args: {
        name: "days",
      },
    },
    {
      name: "--files0-from",
      description: "Read NUL-terminated paths from FILE (use - for stdin)",
      args: {
        name: "file",
        template: "filepaths",
      },
    },
    {
      name: "--files-from",
      description: "Read newline-terminated paths from FILE (use - for stdin)",
      args: {
        name: "file",
        template: "filepaths",
      },
    },
    {
      name: "--collapse",
      description: "Keep these directories collapsed",
      isRepeatable: true,
      args: {
        name: "path",
        template: ["filepaths", "folders"],
      },
    },
    {
      name: ["--filetime", "-m"],
      description:
        "Directory 'size' is max filetime of child files instead of disk size, while a/c/m for last accessed/changed/modified time",
      args: {
        name: "time",
        suggestions: fileTimeSuggestions,
      },
    },
  ],
  args: {
    name: "path",
    description: "Input files or directories",
    isVariadic: true,
    template: ["filepaths", "folders"],
  },
};
export default completionSpec;
