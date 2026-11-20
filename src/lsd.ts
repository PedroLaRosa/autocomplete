// lsd v1.2.0 (latest release of lsd-rs/lsd, 2026-11-19). Source: clap definitions in src/app.rs and doc/lsd.md at tag v1.2.0 (binary not run).
const alwaysAutoNever = ["always", "auto", "never"];

const completionSpec: Fig.Spec = {
  name: "lsd",
  description: "An ls command with a lot of pretty colors and some other stuff",
  args: {
    name: "FILE",
    isVariadic: true,
    template: "filepaths",
    default: ".",
  },
  options: [
    {
      name: ["-1", "--oneline"],
      description: "Display one entry per line",
    },
    {
      name: ["-A", "--almost-all"],
      description: 'Do not list implied "." and ".."',
    },
    {
      name: ["-a", "--all"],
      description: "Do not ignore entries starting with a dot",
    },
    {
      name: ["-d", "--directory-only"],
      description:
        "Display directories themselves, and not their contents (recursively when used with --tree)",
      exclusiveOn: ["-R", "--recursive"],
    },
    {
      name: ["-F", "--classify"],
      description:
        "Append indicator (one of */=>@|) at the end of the file names",
    },
    {
      name: ["-g", "--git"],
      description:
        "Show git status on file and directory (only when used with --long)",
    },
    {
      name: ["-h", "--human-readable"],
      description:
        "For ls compatibility purposes ONLY, currently set by default",
    },
    {
      name: ["-i", "--inode"],
      description: "Display the index number of each file",
    },
    {
      name: ["-I", "--ignore-glob"],
      description:
        "Do not display files/directories with names matching the glob pattern(s). More than one can be specified by repeating the argument",
      isRepeatable: true,
      args: {
        name: "pattern",
      },
    },
    {
      name: ["-L", "--dereference"],
      description:
        "When showing file information for a symbolic link, show information for the file the link references rather than for the link itself",
    },
    {
      name: ["-l", "--long"],
      description: "Display extended file metadata as a table",
    },
    {
      name: ["-N", "--literal"],
      description: "Print entry names without quoting",
    },
    {
      name: ["-R", "--recursive"],
      description: "Recurse into directories",
      exclusiveOn: ["--tree", "-d", "--directory-only"],
    },
    {
      name: ["-r", "--reverse"],
      description: "Reverse the order of the sort",
    },
    {
      name: ["-S", "--sizesort"],
      description: "Sort by size",
    },
    {
      name: ["-t", "--timesort"],
      description: "Sort by time modified",
    },
    {
      name: ["-G", "--gitsort"],
      description: "Sort by git status",
    },
    {
      name: ["-U", "--no-sort"],
      description: "Do not sort. List entries in directory order",
    },
    {
      name: ["-v", "--versionsort"],
      description: "Natural sort of (version) numbers within text",
    },
    {
      name: ["-X", "--extensionsort"],
      description: "Sort by file extension",
    },
    {
      name: ["-Z", "--context"],
      description: "Print security context (label) of each file",
    },
    {
      name: "--classic",
      description: "Enable classic mode (display output similar to ls)",
    },
    {
      name: "--group-directories-first",
      description:
        "Groups the directories at the top before the files. Same as --group-dirs=first",
    },
    {
      name: "--header",
      description: "Display block headers",
    },
    {
      name: "--help",
      description: "Print help information",
    },
    {
      name: "--ignore-config",
      description: "Ignore the configuration file",
    },
    {
      name: "--no-symlink",
      description: "Do not display symlink target",
    },
    {
      name: "--system-protected",
      description:
        "Include files with the windows system protection flag set (Windows only). This is the same as --all on other platforms",
    },
    {
      name: "--total-size",
      description: "Display the total size of directories",
    },
    {
      name: "--tree",
      description: "Recurse into directories and present the result as a tree",
      exclusiveOn: ["-R", "--recursive"],
    },
    {
      name: ["-V", "--version"],
      description: "Print version information",
    },
    {
      name: "--blocks",
      description:
        "Specify the blocks that will be displayed and in what order (comma-separated)",
      args: {
        name: "blocks",
        suggestions: [
          "permission",
          "user",
          "group",
          "context",
          "size",
          "date",
          "name",
          "inode",
          "links",
          "git",
        ],
      },
    },
    {
      name: "--color",
      description: "When to use terminal colours",
      args: {
        name: "mode",
        suggestions: alwaysAutoNever,
        default: "auto",
      },
    },
    {
      name: "--config-file",
      description: "Provide a custom lsd configuration file",
      args: {
        name: "path",
        template: "filepaths",
      },
    },
    {
      name: "--date",
      description: "How to display date",
      args: {
        name: "date",
        suggestions: ["date", "locale", "relative", "+date-time-format"],
        default: "date",
      },
    },
    {
      name: "--depth",
      description:
        "Stop recursing into directories after reaching specified depth",
      args: {
        name: "num",
      },
    },
    {
      name: "--group-dirs",
      description: "Sort the directories then the files",
      args: {
        name: "mode",
        suggestions: ["none", "first", "last"],
      },
    },
    {
      name: "--hyperlink",
      description: "Attach hyperlink to filenames",
      args: {
        name: "mode",
        suggestions: alwaysAutoNever,
        default: "never",
      },
    },
    {
      name: "--icon",
      description: "When to print the icons",
      args: {
        name: "mode",
        suggestions: alwaysAutoNever,
        default: "auto",
      },
    },
    {
      name: "--icon-theme",
      description: "Whether to use fancy or unicode icons",
      args: {
        name: "theme",
        suggestions: ["fancy", "unicode"],
        default: "fancy",
      },
    },
    {
      name: "--permission",
      description:
        "How to display permissions (default: rwx on Linux, attributes on Windows)",
      args: {
        name: "mode",
        suggestions: ["rwx", "octal", "attributes", "disable"],
      },
    },
    {
      name: "--size",
      description: "How to display size",
      args: {
        name: "mode",
        suggestions: ["default", "short", "bytes"],
        default: "default",
      },
    },
    {
      name: "--sort",
      description: "Sort by TYPE instead of name",
      args: {
        name: "type",
        suggestions: ["size", "time", "version", "extension", "git", "none"],
      },
    },
    {
      name: "--truncate-owner-after",
      description:
        "Truncate the user and group names if they exceed a certain number of characters",
      args: {
        name: "num",
      },
    },
    {
      name: "--truncate-owner-marker",
      description:
        "Truncation marker appended to a truncated user or group name",
      args: {
        name: "str",
      },
    },
  ],
};

export default completionSpec;
