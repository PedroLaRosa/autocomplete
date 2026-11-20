// ripgrep v15.2.0 (`rg --version` and GitHub latest release, 2026-11-19). Source: `rg --help`
// and crates/core/flags/defs.rs at tag 15.2.0 (short names, aliases, negations)
const sortbyArg: Fig.Arg = {
  name: "Sortby",
  default: "none",
  suggestions: [
    {
      name: "none",
      description: "Do not sort results. Fastest. Can be multi-threaded",
    },
    {
      name: "path",
      description: "Sort by file path, Always single-threaded",
    },
    {
      name: "modified",
      description:
        "Sort by the last modified time on a file. Always single-threaded",
    },
    {
      name: "accessed",
      description:
        "Sort by the last accessed time on a file. Always single-threaded",
    },
    {
      name: "created",
      description:
        "Sort by the creation time on a file. Always single-threaded",
    },
  ],
};

const sizeArg: Fig.Arg = {
  name: "NUM+SUFFIX?",
  description: "Size in bytes, or with a K, M or G suffix",
};

// "This flag can be disabled with ..." pairs from `rg --help`: [negation, flag]
const negations: [string, string][] = [
  ["--no-auto-hybrid-regex", "--auto-hybrid-regex"],
  ["--no-binary", "--binary"],
  ["--no-block-buffered", "--block-buffered"],
  ["--no-byte-offset", "--byte-offset"],
  ["--no-column", "--column"],
  ["--no-crlf", "--crlf"],
  ["--no-encoding", "--encoding"],
  ["--no-fixed-strings", "--fixed-strings"],
  ["--no-follow", "--follow"],
  ["--no-glob-case-insensitive", "--glob-case-insensitive"],
  ["--no-hidden", "--hidden"],
  ["--no-ignore-file-case-insensitive", "--ignore-file-case-insensitive"],
  ["--no-include-zero", "--include-zero"],
  ["--no-invert-match", "--invert-match"],
  ["--no-json", "--json"],
  ["--no-line-buffered", "--line-buffered"],
  ["--no-max-columns-preview", "--max-columns-preview"],
  ["--no-mmap", "--mmap"],
  ["--no-multiline", "--multiline"],
  ["--no-multiline-dotall", "--multiline-dotall"],
  ["--no-one-file-system", "--one-file-system"],
  ["--no-pcre2", "--pcre2"],
  ["--no-pre", "--pre"],
  ["--no-search-zip", "--search-zip"],
  ["--no-sort-files", "--sort-files"],
  ["--no-stats", "--stats"],
  ["--no-text", "--text"],
  ["--no-trim", "--trim"],
  ["--ignore", "--no-ignore"],
  ["--ignore-dot", "--no-ignore-dot"],
  ["--ignore-exclude", "--no-ignore-exclude"],
  ["--ignore-files", "--no-ignore-files"],
  ["--ignore-global", "--no-ignore-global"],
  ["--ignore-messages", "--no-ignore-messages"],
  ["--ignore-parent", "--no-ignore-parent"],
  ["--ignore-vcs", "--no-ignore-vcs"],
  ["--messages", "--no-messages"],
  ["--pcre2-unicode", "--no-pcre2-unicode"],
  ["--require-git", "--no-require-git"],
  ["--unicode", "--no-unicode"],
];

const completionSpec: Fig.Spec = {
  name: "rg",
  description:
    "Recursively searches current directory for lines matching a pattern",
  options: [
    {
      name: ["-A", "--after-context"],
      description: "Shows NUM lines after each match",
      args: {
        name: "Num",
      },
    },
    {
      name: "--auto-hybrid-regex",
      description:
        "When this flag is used, ripgrep will dynamically choose between supported regex engines depending on the features used in a pattern",
      deprecated: { description: "Use --engine=auto" },
    },
    {
      name: ["-B", "--before-context"],
      description: "Shows NUM lines before each match",
      args: {
        name: "Num",
      },
    },
    {
      name: "--binary",
      description:
        "Enabling this flag will cause ripgrep to search binary files",
    },
    {
      name: "--block-buffered",
      description: "When enabled, ripgrep will use block buffering",
    },
    {
      name: ["-b", "--byte-offset"],
      description:
        "Prints the 0-based byte offset within the input file before each line of output",
    },
    {
      name: ["-s", "--case-sensitive"],
      description: "Search case sensitively",
    },
    {
      name: "--color",
      description: "Controls when to use colors",
      args: {
        name: "when",
        suggestions: [
          {
            name: "never",
            description: "Colors will never be used",
          },
          {
            name: "auto",
            description: "Ripgrep tries to be smart",
          },
          {
            name: "always",
            description:
              "Colors will always be used regardless of where output is sent",
          },
          {
            name: "ansi",
            description: "Colors will always be used, but emits ANSI escapes",
          },
        ],
      },
    },
    {
      name: "--colors",
      description: "Specifies color settings for use in the output",
      isRepeatable: true,
      args: {
        name: "Color Spec",
        description: "{type}:{attribute}:{value}, ex: `match:fg:magenta`",
      },
    },
    {
      name: "--column",
      description: "Shows column numbers for the first match on each line",
    },
    {
      name: ["-C", "--context"],
      description: "Shows NUM lines before and after each match",
      args: {
        name: "NUM",
      },
    },
    {
      name: "--context-separator",
      description:
        "The string used to separate non-contiguous context lines in the output",
      args: {
        name: "Separator",
      },
    },
    {
      name: "--no-context-separator",
      description: "Completely disable context separators",
    },
    {
      name: ["-c", "--count"],
      description:
        "Suppresses normal output and shows the number of lines that match the given patterns for each file searched",
    },
    {
      name: "--count-matches",
      description:
        "Suppresses normal output and shows the number of individual matches of the given patterns for each file searched",
    },
    {
      name: "--crlf",
      description:
        "Treats CRLF as a line terminator instead of just a line break",
    },
    {
      name: "--debug",
      description: "Shows debug messages",
    },
    {
      name: "--dfa-size-limit",
      description: "The upper size limit of the regex DFA",
      args: sizeArg,
    },
    {
      name: ["-E", "--encoding"],
      description:
        "Specifies the text encoding that ripgrep will use on all files searched",
      args: {
        name: "Encoding",
        default: "auto",
        suggestions: ["auto", "none"],
      },
    },
    {
      name: "--engine",
      description: "Specifies which regular expression engine to use",
      args: {
        name: "Engine",
        default: "default",
        suggestions: ["default", "pcre2", "auto"],
      },
    },
    {
      name: "--field-context-separator",
      description:
        "Set the separator between path, line number, column and the line itself for context lines",
      args: {
        name: "Separator",
        default: "-",
      },
    },
    {
      name: "--field-match-separator",
      description:
        "Set the separator between path, line number, column and the line itself for matching lines",
      args: {
        name: "Separator",
        default: ":",
      },
    },
    {
      name: ["-f", "--file"],
      description:
        "Searches for patterns from the given file, with one pattern per line",
      isRepeatable: true,
      args: {
        name: "Patternfile",
        template: "filepaths",
      },
    },
    {
      name: "--files",
      description:
        "Prints each file that would be searched without actually performing the search",
    },
    {
      name: ["-l", "--files-with-matches"],
      description: "Only prints the paths with at least one match",
    },
    {
      name: "--files-without-match",
      description: "Only prints the paths that contains zero matches",
    },
    {
      name: ["-F", "--fixed-strings"],
      description:
        "Treats the pattern as a literal string instead of a regular expression",
    },
    {
      name: ["-L", "--follow"],
      description: "Follows symbolic links while traversing directories",
    },
    {
      name: "--generate",
      description: "Generate special output, then quit without searching",
      args: {
        name: "Kind",
        suggestions: [
          {
            name: "man",
            description: "Generate a manual page in the roff format",
          },
          {
            name: "complete-bash",
            description: "Generate a bash completion script",
          },
          {
            name: "complete-zsh",
            description: "Generate a zsh completion script",
          },
          {
            name: "complete-fish",
            description: "Generate a fish completion script",
          },
          {
            name: "complete-powershell",
            description: "Generate a PowerShell completion script",
          },
        ],
      },
    },
    {
      name: ["-g", "--glob"],
      description:
        "Includes or excludes files and directories for searching that match the given glob",
      isRepeatable: true,
      args: {
        name: "GLOB",
      },
    },
    {
      name: "--glob-case-insensitive",
      description: "Processes glob patterns given with the -g/--glob flag",
      dependsOn: ["-g", "--glob"],
    },
    {
      name: "--heading",
      description:
        "Prints the file path above clusters of matches from each file instead of printing the file path as a prefix for each matched line",
    },
    {
      name: ["-h", "--help"],
      description: "Show condensed (-h) or verbose (--help) help",
    },
    {
      name: ["-.", "--hidden"],
      description: "Searches hidden files and directories",
    },
    {
      name: "--hostname-bin",
      description:
        "Executable whose output ripgrep uses as this system's hostname for hyperlinks",
      args: {
        name: "Command",
      },
    },
    {
      name: "--hyperlink-format",
      description: "Set the format of hyperlinks to use when printing results",
      args: {
        name: "Format",
        description: "An alias or a format string like file://{host}{path}",
        suggestions: [
          "default",
          "none",
          "cursor",
          "file",
          "grep+",
          "kitty",
          "macvim",
          "textmate",
          "vscode",
          "vscode-insiders",
          "vscodium",
        ],
      },
    },
    {
      name: "--iglob",
      description:
        "Includes or excludes files and directories for searching that match given the glob",
      isRepeatable: true,
      args: {
        name: "GLOB",
        template: ["filepaths", "folders"],
      },
    },
    {
      name: ["-i", "--ignore-case"],
      description: "Search all patterns case insensitively",
    },
    {
      name: "--ignore-file",
      description:
        "Specifies a path to one or more .gitignore format rules files",
      isRepeatable: true,
      args: {
        name: "Path",
        template: "filepaths",
      },
    },
    {
      name: "--ignore-file-case-insensitive",
      description: "Process ignores files case insensitively",
    },
    {
      name: "--include-zero",
      description:
        "Prints the number of matches for each file when used with --count or --count-matches",
    },
    {
      name: ["-v", "--invert-match"],
      description: "Inverts matching",
    },
    {
      name: "--json",
      description: "Enables printing results in a JSON Lines format",
    },
    {
      name: "--line-buffered",
      description: "Enables line buffering",
    },
    {
      name: ["-n", "--line-number"],
      description: "Shows the line numbers (1-based)",
    },
    {
      name: ["-x", "--line-regexp"],
      description: "Only shows matches surrounded by line boundaries",
    },
    {
      name: ["-M", "--max-columns"],
      description: "Don't print lines longer than this limit in bytes",
      args: {
        name: "NUM",
      },
    },
    {
      name: "--max-columns-preview",
      description:
        "Prints a preview for lines exceeding the -M/--max-columns limit instead of omitting them",
    },
    {
      name: ["-m", "--max-count"],
      description:
        "Limits the number of matching lines per file searched to NUM",
      args: {
        name: "NUM",
      },
    },
    {
      name: ["-d", "--max-depth", "--maxdepth"],
      description:
        "Limits the depth of directory traversal to NUM levels beyond the paths given",
      args: {
        name: "NUM",
      },
    },
    {
      name: "--max-filesize",
      description: "Ignores files larger than NUM in size",
      args: sizeArg,
    },
    {
      name: "--mmap",
      description: "Searches using memory maps when possible",
    },
    {
      name: ["-U", "--multiline"],
      description: "Enables matching across multiple lines",
    },
    {
      name: "--multiline-dotall",
      description: "Enables dot all in your regex pattern",
    },
    {
      name: "--no-config",
      description: "Never read configuration files",
    },
    {
      name: ["-I", "--no-filename"],
      description: "Never prints the file path with the matched lines",
    },
    {
      name: "--no-heading",
      description: "Don't group matches by each file",
    },
    {
      name: "--no-ignore",
      description: "Don't respect ignore files (.gitignore, .ignore, etc.)",
    },
    {
      name: "--no-ignore-dot",
      description: "Don't respect .ignore files",
    },
    {
      name: "--no-ignore-exclude",
      description:
        "Don't respect ignore files that are manually configured for the repository",
    },
    {
      name: "--no-ignore-files",
      description: "Ignores any --ignore-file flags",
    },
    {
      name: "--no-ignore-global",
      description: "Don't respect ignore files that come from `global` sources",
    },
    {
      name: "--no-ignore-messages",
      description:
        "Suppresses all error messages related to parsing ignore files",
    },
    {
      name: "--no-ignore-parent",
      description: "Don't respect ignore files in parent directories",
    },
    {
      name: "--no-ignore-vcs",
      description: "Don't respect version control ignore files",
    },
    {
      name: ["-N", "--no-line-number"],
      description: "Suppress line numbers",
    },
    {
      name: "--no-messages",
      description:
        "Suppresses all error messages related to opening and reading files",
    },
    {
      name: "--no-pcre2-unicode",
      description: "Disable Unicode mode for PCRE2",
      deprecated: { description: "Use --no-unicode" },
    },
    {
      name: "--no-require-git",
      description:
        "Respect source control ignore files even if no git repository is present",
    },
    {
      name: "--no-unicode",
      description: "Turn off unicode",
    },
    {
      name: ["-0", "--null"],
      description: "Whenever a file path is printed, follow it with a NUL byte",
    },
    {
      name: "--null-data",
      description:
        "Uses NUL as a line terminator instead of the default line break",
    },
    {
      name: "--one-file-system",
      description:
        "Will not cross file system boundaries relative to where the search started from",
    },
    {
      name: ["-o", "--only-matching"],
      description:
        "Prints only the matched (non-empty) parts of a matching line, with each such part on a separate output line",
    },
    {
      name: ["--passthru", "--passthrough"],
      description: "Prints both matching and non-matching lines",
    },
    {
      name: "--path-separator",
      description: "Sets the path separator to use when printing file paths",
      args: {
        name: "Separator",
      },
    },
    {
      name: ["-P", "--pcre2"],
      description:
        "Uses the PCRE2 regex engine instead of its default regex engine",
    },
    {
      name: "--pcre2-version",
      description: "Prints the version of PCRE2 in use",
    },
    {
      name: "--pre",
      description:
        "For each input File, search the standard output of the command",
      args: {
        name: "Command",
      },
    },
    {
      name: "--pre-glob",
      description:
        "Only files that match the given set of globs will be handed to the command specified by the `--pre flag`",
      isRepeatable: true,
      args: {
        name: "GLOB",
      },
    },
    {
      name: ["-p", "--pretty"],
      description:
        "Convenience alias for `--color always --heading --line-number`",
    },
    {
      name: ["-q", "--quiet"],
      description: "Do not print anything to stdout",
    },
    {
      name: "--regex-size-limit",
      description: "Sets the upper size limit of the compiled regex",
      args: sizeArg,
    },
    {
      name: ["-e", "--regexp"],
      description: "A pattern to search for",
      isRepeatable: true,
      args: {
        name: "Pattern",
      },
    },
    {
      name: ["-r", "--replace"],
      description:
        "Replace every match with the text given when printing results",
      args: {
        name: "Replacement Text",
      },
    },
    {
      name: ["-z", "--search-zip"],
      description: "Search in compressed files",
    },
    {
      name: ["-S", "--smart-case"],
      description:
        "Searches case insensitively if the pattern is all lowercase",
    },
    {
      name: "--sort",
      description: "Enables sorting results in ascending order",
      args: sortbyArg,
    },
    {
      name: "--sortr",
      description: "Enables sorting results in descending order",
      args: sortbyArg,
    },
    {
      name: "--sort-files",
      description: "Sort search results by file path in ascending order",
      deprecated: { description: "Use --sort=path" },
    },
    {
      name: "--stats",
      description: "Prints aggregate statistics about this ripgrep search",
    },
    {
      name: "--stop-on-nonmatch",
      description:
        "Stop reading a file at the first non-matching line after a matching line",
    },
    {
      name: ["-a", "--text"],
      description: "Searches binary files as if they were text",
    },
    {
      name: ["-j", "--threads"],
      description: "The approximate number of threads to use",
      args: {
        name: "NUM",
      },
    },
    {
      name: "--trace",
      description: "Shows trace messages, even more detailed than --debug",
    },
    {
      name: "--trim",
      description:
        "All ASCII whitespace at the beginning of each line printed will be trimmed",
    },
    {
      name: ["-t", "--type"],
      description: "Only searches files matching TYPE",
      isRepeatable: true,
      args: {
        name: "Type",
      },
    },
    {
      name: "--type-add",
      description: "Add a new glob for a particular file type",
      isRepeatable: true,
      args: {
        name: "Type Spec",
      },
    },
    {
      name: "--type-clear",
      description: "Clear the file type globs previously defined for type",
      isRepeatable: true,
      args: {
        name: "type",
      },
    },
    {
      name: "--type-list",
      description:
        "Shows all supported file types and their corresponding globs",
    },
    {
      name: ["-T", "--type-not"],
      description: "Do not search files matching type",
      isRepeatable: true,
      args: {
        name: "type",
      },
    },
    {
      name: ["-u", "--unrestricted"],
      description:
        "Reduce the level of smart searching, increase by adding `u`s, ex: -uuu",
      isRepeatable: 3,
    },
    {
      name: ["-V", "--version"],
      description: "Prints ripgrep's version",
    },
    {
      name: "--vimgrep",
      description:
        "Shows results with every match on its own line, including line numbers and column numbers",
    },
    {
      name: ["-H", "--with-filename"],
      description: "Displays the file path for matches",
    },
    {
      name: ["-w", "--word-regexp"],
      description: "Only shows the matches surrounded by word boundaries",
    },
    ...negations.map(([name, flag]) => ({
      name,
      description: `Disable ${flag}`,
      priority: 40,
    })),
  ],
  args: [
    {
      name: "Pattern",
      description: "A regular expression used for searching",
    },
    {
      name: "Path",
      description: "A file or directory to search",
      isOptional: true,
      isVariadic: true,
      template: ["filepaths", "folders"],
    },
  ],
};

export default completionSpec;
