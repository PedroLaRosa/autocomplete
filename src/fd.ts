// fd v10.5.2 (GitHub tag sharkdp/fd v10.5.2, cross-checked with the Homebrew formula fd 10.5.2; 2026-11-19).
// Source: static read of the clap definitions in src/cli.rs at tag v10.5.2 plus the shipped zsh completion contrib/completion/_fd (first part read for cross-checking), not a live run of the binary.
// Descriptions are the short --help texts. Hidden override flags (--no-hidden, --ignore, ...) are marked hidden.
// Omitted on purpose: the internal --max-buffer-time and --gen-completions flags.
// --owner is only available on unix builds.

const completionSpec: Fig.Spec = {
  name: "fd",
  description:
    "A program to find entries in your filesystem with regex and glob based matching",
  options: [
    {
      name: ["-H", "--hidden"],
      description: "Search hidden files and directories",
    },
    {
      name: "--no-hidden",
      description: "Overrides --hidden",
      hidden: true,
    },
    {
      name: ["-I", "--no-ignore"],
      description: "Do not respect .(git|fd)ignore files",
    },
    {
      name: "--ignore",
      description: "Overrides --no-ignore",
      hidden: true,
    },
    {
      name: "--no-ignore-vcs",
      description: "Do not respect .gitignore files",
    },
    {
      name: "--ignore-vcs",
      description: "Overrides --no-ignore-vcs",
      hidden: true,
    },
    {
      name: "--no-require-git",
      description: "Do not require a git repository to respect gitignores",
    },
    {
      name: "--require-git",
      description: "Overrides --no-require-git",
      hidden: true,
    },
    {
      name: "--no-ignore-parent",
      description: "Do not respect .(git|fd)ignore files in parent directories",
    },
    {
      name: "--ignore-parent",
      description: "Overrides --no-ignore-parent",
      hidden: true,
    },
    {
      name: "--no-global-ignore-file",
      description: "Do not respect the global ignore file",
      hidden: true,
    },
    {
      name: ["-u", "--unrestricted"],
      description: "Unrestricted search, alias for '--no-ignore --hidden'",
    },
    {
      name: ["-s", "--case-sensitive"],
      description: "Case-sensitive search (default: smart case)",
    },
    {
      name: ["-i", "--ignore-case"],
      description: "Case-insensitive search (default: smart case)",
    },
    {
      name: ["-g", "--glob"],
      description: "Glob-based search (default: regular expression)",
      exclusiveOn: ["-F", "--fixed-strings", "--literal"],
    },
    {
      name: "--regex",
      description: "Regular-expression based search (default)",
    },
    {
      name: ["-F", "--fixed-strings", "--literal"],
      description: "Treat pattern as literal string instead of regex",
      exclusiveOn: ["-g", "--glob", "--exact"],
    },
    {
      name: "--exact",
      description: "Match the entire filename exactly (literal, non-substring)",
      exclusiveOn: ["-g", "--glob", "-F", "--fixed-strings", "--literal"],
    },
    {
      name: "--and",
      description: "Additional search patterns that need to be matched",
      isRepeatable: true,
      args: {
        name: "pattern",
      },
    },
    {
      name: ["-a", "--absolute-path"],
      description: "Show absolute instead of relative paths",
      exclusiveOn: ["-l", "--list-details"],
    },
    {
      name: "--relative-path",
      description: "Overrides --absolute-path",
      hidden: true,
    },
    {
      name: ["-l", "--list-details"],
      description: "Use a long listing format with file metadata",
      exclusiveOn: [
        "-a",
        "--absolute-path",
        "-0",
        "--print0",
        "-x",
        "--exec",
        "-X",
        "--exec-batch",
        "--format",
        "--max-results",
        "-1",
        "-q",
        "--quiet",
        "--has-results",
      ],
    },
    {
      name: ["-L", "--follow", "--dereference"],
      description: "Follow symbolic links",
    },
    {
      name: "--no-follow",
      description: "Overrides --follow",
      hidden: true,
    },
    {
      name: ["-p", "--full-path"],
      description: "Search full abs. path (default: filename only)",
    },
    {
      name: ["-0", "--print0"],
      description: "Separate search results by the null character",
      exclusiveOn: ["-l", "--list-details"],
    },
    {
      name: ["-d", "--max-depth", "--maxdepth"],
      description: "Set maximum search depth (default: none)",
      exclusiveOn: ["--exact-depth"],
      args: {
        name: "depth",
      },
    },
    {
      name: ["--min-depth", "--mindepth"],
      description: "Only show search results starting at the given depth",
      exclusiveOn: ["--exact-depth"],
      args: {
        name: "depth",
      },
    },
    {
      name: "--exact-depth",
      description: "Only show search results at the exact given depth",
      exclusiveOn: [
        "-d",
        "--max-depth",
        "--maxdepth",
        "--min-depth",
        "--mindepth",
      ],
      args: {
        name: "depth",
      },
    },
    {
      name: ["-E", "--exclude"],
      isRepeatable: true,
      description: "Exclude entries that match the given glob pattern",
      args: {
        name: "glob",
      },
    },
    {
      name: "--prune",
      description:
        "Do not traverse into directories that match the search criteria",
      exclusiveOn: ["-S", "--size", "--exact-depth"],
    },
    {
      name: ["-t", "--type"],
      description: "Filter by type",
      isRepeatable: true,
      args: {
        name: "filetype",
        suggestions: [
          { name: ["f", "file"], description: "Regular files" },
          { name: ["d", "dir", "directory"], description: "Directories" },
          { name: ["l", "symlink"], description: "Symbolic links" },
          { name: ["x", "executable"], description: "Executable files" },
          { name: ["e", "empty"], description: "Empty files or directories" },
          { name: ["s", "socket"], description: "Sockets" },
          { name: ["p", "pipe"], description: "Named pipes (FIFOs)" },
          { name: ["b", "block-device"], description: "Block devices" },
          { name: ["c", "char-device"], description: "Character devices" },
        ],
      },
    },
    {
      name: ["-e", "--extension"],
      isRepeatable: true,
      description: "Filter by extension",
      args: {
        name: "ext",
      },
    },
    {
      name: ["-S", "--size"],
      isRepeatable: true,
      description: "Limit results based on the size of files",
      args: {
        name: "size",
        description:
          "Format <+-><NUM><UNIT>, with unit b, k, m, g, t, ki, mi, gi or ti",
      },
    },
    {
      name: [
        "--changed-within",
        "--change-newer-than",
        "--newer",
        "--changed-after",
      ],
      description: "Filter by file modification time (newer than)",
      args: {
        name: "date|dur",
        description:
          "A date (YYYY-MM-DD HH:MM:SS or @timestamp) or a duration (10h, 1d, 35min)",
      },
    },
    {
      name: ["--changed-before", "--change-older-than", "--older"],
      description: "Filter by file modification time (older than)",
      args: {
        name: "date|dur",
        description:
          "A date (YYYY-MM-DD HH:MM:SS or @timestamp) or a duration (10h, 1d, 35min)",
      },
    },
    {
      name: ["-o", "--owner"],
      description: "Filter by owning user and/or group",
      args: {
        name: "user:group",
        description:
          "Format [(user|uid)][:(group|gid)], prefix with ! to exclude",
      },
    },
    {
      name: "--format",
      description: "Print results according to template",
      exclusiveOn: ["-l", "--list-details"],
      args: {
        name: "fmt",
        description:
          "Template with the placeholders {}, {/}, {//}, {.} and {/.}",
      },
    },
    {
      name: ["-x", "--exec"],
      description: "Execute a command for each search result",
      isRepeatable: true,
      exclusiveOn: ["-X", "--exec-batch", "-l", "--list-details"],
      args: {
        name: "cmd",
        isCommand: true,
      },
    },
    {
      name: ["-X", "--exec-batch"],
      description: "Execute a command with all search results at once",
      isRepeatable: true,
      exclusiveOn: ["-x", "--exec", "-l", "--list-details"],
      args: {
        name: "cmd",
        isCommand: true,
      },
    },
    {
      name: "--batch-size",
      description: "Max number of arguments to run as a batch size with -X",
      dependsOn: ["-X", "--exec-batch"],
      args: {
        name: "size",
      },
    },
    {
      name: "--ignore-file",
      description: "Add a custom ignore-file in '.gitignore' format",
      isRepeatable: true,
      args: {
        name: "path",
        template: "filepaths",
      },
    },
    {
      name: ["-c", "--color"],
      description: "When to use colors",
      args: {
        name: "when",
        default: "auto",
        suggestions: [
          {
            name: "auto",
            description:
              "Show colors if the output goes to an interactive console",
          },
          { name: "always", description: "Always use colorized output" },
          { name: "never", description: "Do not use colorized output" },
        ],
      },
    },
    {
      name: ["--hyperlink", "--hyper"],
      description:
        "Add hyperlinks to output paths (default: never, auto if no value is given)",
      requiresSeparator: true,
      args: {
        name: "when",
        isOptional: true,
        suggestions: [
          {
            name: "auto",
            description: "Use hyperlinks only if color is enabled",
          },
          {
            name: "always",
            description: "Always use hyperlinks when printing file paths",
          },
          { name: "never", description: "Never use hyperlinks" },
        ],
      },
    },
    {
      name: "--ignore-contain",
      description: "Ignore directories containing the named entry",
      isRepeatable: true,
      args: {
        name: "name",
      },
    },
    {
      name: ["-j", "--threads"],
      description:
        "Set number of threads to use for searching & executing (default: number of available CPU cores, up to 64)",
      args: {
        name: "num",
      },
    },
    {
      name: "--max-results",
      description: "Limit the number of search results",
      exclusiveOn: ["-q", "--quiet", "--has-results"],
      args: {
        name: "count",
      },
    },
    {
      name: "-1",
      description: "Limit search to a single result",
    },
    {
      name: ["-q", "--quiet", "--has-results"],
      description: "Print nothing, exit code 0 if match found, 1 otherwise",
      exclusiveOn: ["--max-results"],
    },
    {
      name: "--show-errors",
      description: "Show filesystem errors",
    },
    {
      name: ["-C", "--base-directory"],
      description: "Change current working directory",
      args: {
        name: "path",
        template: "folders",
      },
    },
    {
      name: "--path-separator",
      description: "Set path separator when printing file paths",
      args: {
        name: "separator",
      },
    },
    {
      name: "--search-path",
      description:
        "Provides paths to search as an alternative to the positional <path> argument",
      isRepeatable: true,
      args: {
        name: "search-path",
        template: "folders",
      },
    },
    {
      name: "--strip-cwd-prefix",
      description:
        "Strip the './' prefix of relative paths when -x, -X or -0 are given (default: auto)",
      requiresSeparator: true,
      args: {
        name: "when",
        isOptional: true,
        suggestions: [
          { name: "auto", description: "Use the default behavior" },
          {
            name: "always",
            description: "Always strip the ./ at the beginning of paths",
          },
          { name: "never", description: "Never strip the ./" },
        ],
      },
    },
    {
      name: ["--one-file-system", "--mount", "--xdev"],
      description: "Do not descend into a different file system",
    },
    {
      name: ["-h", "--help"],
      description: "Print help (see more with '--help')",
    },
    {
      name: ["-V", "--version"],
      description: "Print version",
    },
  ],
  args: [
    {
      name: "pattern",
      description:
        "The search pattern - a regular expression unless '--glob' is used (optional)",
      isOptional: true,
    },
    {
      name: "path",
      description: "The root directories for the filesystem search (optional)",
      template: ["folders"],
      isOptional: true,
      isVariadic: true,
    },
  ],
};

export default completionSpec;
