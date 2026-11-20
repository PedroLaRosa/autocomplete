// grep 2.6.0-FreeBSD (macOS BSD grep; apple-oss-distributions/text_cmds tag text_cmds-199 and text_cmds-190.0.1 (macOS 15 era), 2026-11-20).
// Source: text_cmds/grep/grep.1 (man page dated 2021-11-10, identical in both tags) and text_cmds/grep/grep.c (Apple getopt_long table and optstr), read statically, not run on macOS.
// GNU grep 3.11 `--help` was used to keep the GNU-only flags that the spec already listed (-P, -T); no new GNU-only flags were added.
const completionSpec: Fig.Spec = {
  name: "grep",
  description:
    "Matches patterns in input text. Supports simple patterns and regular expressions",
  args: [
    {
      name: "search pattern",
      suggestCurrentToken: true,
    },
    {
      name: "file",
      template: "filepaths",
      isVariadic: true,
      isOptional: true,
    },
  ],
  options: [
    {
      name: "--help",
      description: "Print a brief usage message and exit",
    },
    {
      name: ["-E", "--extended-regexp"],
      description:
        "Interpret the pattern as an extended regular expression (behave as egrep)",
    },
    {
      name: ["-F", "--fixed-strings"],
      description:
        "Interpret the pattern as a set of fixed strings, separated by newlines, any of which is to be matched (behave as fgrep)",
    },
    {
      name: ["-G", "--basic-regexp"],
      description:
        "Interpret the pattern as a basic regular expression. This is the default",
    },
    {
      name: ["-P", "--perl-regexp"],
      description:
        "Interpret the pattern as a Perl regular expression (GNU grep only, not available in macOS grep)",
    },
    {
      name: ["-e", "--regexp"],
      description:
        "Use the given pattern for the search. An input line is selected if it matches any of the specified patterns. Useful to specify multiple patterns, or a pattern beginning with a hyphen (-)",
      isRepeatable: true,
      args: {
        name: "pattern",
      },
    },
    {
      name: ["-f", "--file"],
      description:
        "Read one or more newline separated patterns from a file. Empty pattern lines match every input line. An empty file matches nothing",
      isRepeatable: true,
      args: {
        name: "FILE",
        template: "filepaths",
      },
    },
    {
      name: ["-i", "--ignore-case", "-y"],
      description:
        "Perform case insensitive matching. By default, grep is case sensitive (-y is an obsolete synonym)",
    },
    {
      name: ["-v", "--invert-match"],
      description:
        "Select lines that do not match any of the specified patterns",
    },
    {
      name: ["-w", "--word-regexp"],
      description:
        "Select only lines containing matches that form whole words. Has no effect if -x is also specified",
    },
    {
      name: ["-x", "--line-regexp"],
      description:
        "Select only those matches that exactly match the whole line",
    },
    {
      name: ["-z", "--null-data"],
      description:
        "Treat input and output data as sequences of lines terminated by a zero byte instead of a newline",
    },
    {
      name: ["-c", "--count"],
      description:
        "Suppress normal output; instead print a count of selected lines for each input file",
    },
    {
      name: ["--color", "--colour"],
      description:
        "Mark up the matching text with color escape sequences. The color is read from the GREP_COLOR (BSD) or GREP_COLORS (GNU) environment variable",
      requiresSeparator: true,
      args: {
        name: "WHEN",
        isOptional: true,
        default: "auto",
        suggestions: ["never", "always", "auto"],
      },
    },
    {
      name: ["-L", "--files-without-match"],
      exclusiveOn: ["-l", "--files-with-matches"],
      description:
        "Suppress normal output; instead print the name of each input file that has no selected lines",
    },
    {
      name: ["-l", "--files-with-matches"],
      exclusiveOn: ["-L", "--files-without-match"],
      description:
        "Suppress normal output; instead print the name of each input file that has selected lines. The search of a file stops at the first match",
    },
    {
      name: ["-m", "--max-count"],
      description: "Stop reading a file after NUM matching lines",
      args: {
        name: "NUM",
      },
    },
    {
      name: ["-o", "--only-matching"],
      description:
        "Print only the matching parts of a line, with each such part on a separate output line",
    },
    {
      name: ["-q", "--quiet", "--silent"],
      description:
        "Quiet mode: suppress normal output. The search stops at the first match",
    },
    {
      name: ["-s", "--no-messages"],
      description:
        "Silent mode: suppress error messages about nonexistent or unreadable files",
    },
    {
      name: ["-b", "--byte-offset"],
      description:
        "Print the byte offset of each matched pattern in front of the respective output line",
    },
    {
      name: ["-H", "--with-filename"],
      description:
        "Always print the file name for each match. This is the default when there is more than one file to search",
    },
    {
      name: ["-h", "--no-filename"],
      description:
        "Never print the file name with output lines. This is the default when there is only one file (or only standard input) to search",
    },
    {
      name: "--label",
      description:
        "Label to use in place of (standard input) as the file name where a file name would normally be printed, for -H, -L and -l",
      args: {
        name: "LABEL",
      },
    },
    {
      name: ["-n", "--line-number"],
      description:
        "Prefix each output line with its 1-based line number within its input file",
    },
    {
      name: ["-T", "--initial-tab"],
      description:
        "Make sure that the first character of actual line content lies on a tab stop (GNU grep only, not available in macOS grep)",
    },
    {
      name: ["-u", "--unix-byte-offsets"],
      description:
        "Has no effect and is provided only for compatibility with GNU grep (obsolete there as well)",
    },
    {
      name: "--null",
      description: "Print a zero byte after the file name",
    },
    {
      name: ["-A", "--after-context"],
      description: "Print NUM lines of trailing context after each match",
      args: {
        name: "NUM",
      },
    },
    {
      name: ["-B", "--before-context"],
      description:
        "Print NUM lines of leading context before each match. See also the -A and -C options",
      args: {
        name: "NUM",
      },
    },
    {
      name: ["-C", "--context"],
      description:
        "Print NUM lines of leading and trailing context surrounding each match",
      args: {
        name: "NUM",
      },
    },
    {
      name: ["-a", "--text"],
      description:
        "Treat all files as ASCII text. Normally grep prints 'Binary file ... matches' if a file contains binary characters. This option forces grep to output the matching lines",
    },
    {
      name: "--binary-files",
      description: "Controls searching and printing of binary files",
      args: {
        name: "value",
        default: "binary",
        suggestions: [
          {
            name: "binary",
            description: "Search binary files but do not print them",
          },
          {
            name: "without-match",
            description: "Do not search binary files",
          },
          {
            name: "text",
            description: "Treat all files as text",
          },
        ],
      },
    },
    {
      name: ["-D", "--devices"],
      description: "Specify the demanded action for devices, FIFOs and sockets",
      args: {
        name: "action",
        default: "read",
        suggestions: [
          {
            name: "read",
            description: "Read as if they were normal files",
          },
          {
            name: "skip",
            description: "Devices will be silently skipped",
          },
        ],
      },
    },
    {
      name: ["-d", "--directories"],
      description: "Specify the demanded action for directories",
      args: {
        name: "action",
        default: "read",
        suggestions: [
          {
            name: "read",
            description:
              "Directories are read in the same manner as normal files",
          },
          {
            name: "skip",
            description: "Silently ignore the directories",
          },
          {
            name: "recurse",
            description: "Read directories recursively (same as -R and -r)",
          },
        ],
      },
    },
    {
      name: "--exclude",
      description:
        "Exclude files whose name matches the given pattern from the search. Patterns are matched to the full path specified, not only to the filename component. In macOS grep, --exclude and --include are processed in the order given and the last matching rule wins",
      isRepeatable: true,
      args: {
        name: "GLOB",
      },
    },
    {
      name: "--exclude-dir",
      description:
        "If recursing, exclude directories matching the given pattern from the search. In macOS grep, --exclude-dir and --include-dir are processed in the order given and the last matching rule wins",
      isRepeatable: true,
      args: {
        name: "dir",
        template: "folders",
      },
    },
    {
      name: "-I",
      description:
        "Ignore binary files. This option is equivalent to --binary-files=without-match",
    },
    {
      name: "--include",
      description:
        "Search only files whose name matches the given pattern. Patterns are matched to the full path specified, not only to the filename component. In macOS grep, --include and --exclude are processed in the order given and the last matching rule wins",
      isRepeatable: true,
      args: {
        name: "GLOB",
      },
    },
    {
      name: "--include-dir",
      description:
        "If recursing, search only directories matching the given pattern (macOS grep only). --include-dir and --exclude-dir are processed in the order given and the last matching rule wins",
      isRepeatable: true,
      args: {
        name: "dir",
        template: "folders",
      },
    },
    {
      name: ["-R", "-r", "--recursive"],
      description: "Recursively search subdirectories listed",
    },
    {
      name: "-O",
      description:
        "If recursing, follow symbolic links only if they were explicitly listed on the command line. The default is not to follow symbolic links (macOS grep only)",
    },
    {
      name: "-p",
      description:
        "If recursing, do not follow any symbolic links. This is the default (macOS grep only)",
    },
    {
      name: "-S",
      description:
        "If recursing, follow all symbolic links. The default is not to follow symbolic links (macOS grep only)",
    },
    {
      name: "--line-buffered",
      description:
        "Force output to be line buffered. By default, output is line buffered when standard output is a terminal and block buffered otherwise",
    },
    {
      name: "--mmap",
      description:
        "Use mmap(2) instead of read(2) to read input, which can be faster but can cause undefined behavior (macOS grep only)",
    },
    {
      name: ["-U", "--binary"],
      description: "Search binary files, but do not attempt to print them",
    },
    {
      name: ["-J", "--bz2decompress"],
      description:
        "Decompress the bzip2(1) compressed file before looking for the text (macOS grep only)",
    },
    {
      name: ["-M", "--lzma"],
      description:
        "Decompress the LZMA compressed file before looking for the text (macOS grep only)",
    },
    {
      name: ["-X", "--xz"],
      description:
        "Decompress the xz(1) compressed file before looking for the text (macOS grep only)",
    },
    {
      name: ["-Z", "--decompress"],
      description:
        "Behave as zgrep: decompress gzip or compress(1) compressed files before looking for the text (macOS grep only, GNU grep uses -Z for --null)",
    },
    {
      name: ["-V", "--version"],
      description: "Print version information and exit",
    },
  ],
  additionalSuggestions: [
    {
      name: "-RIn",
      description:
        "Search for a pattern [R]ecursively in the current directory, showing matching line [n]umbers, [I]gnoring non-text files",
      insertValue: "-RI{cursor}",
    },
    {
      name: "-Hn",
      description:
        "Print file name with the corresponding line number (n) for each match",
      insertValue: "-H{cursor}",
    },
  ],
};

export default completionSpec;
