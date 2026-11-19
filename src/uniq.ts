// uniq (macOS 15 BSD, `man uniq` dated 2024-12-09, 2026-11-19). Source: apple-oss-distributions/text_cmds tag text_cmds-195 (macOS 15-era; uniq/uniq.1 and uniq/uniq.c getopt_long "+D::cdif:s:u"), unchanged in the latest published text_cmds-199; not a live run on macOS
// -z, -w, --help and --version were already in this spec and still exist in GNU coreutils (checked against `uniq --help` of coreutils 9.4); they are not accepted by the macOS uniq
const completionSpec: Fig.Spec = {
  name: "uniq",
  description: "Report or omit repeated line",
  options: [
    {
      name: ["-c", "--count"],
      description:
        "Precede each output line with the count of the number of times the line occurred in the input",
    },
    {
      name: ["-d", "--repeated"],
      description:
        "Output a single copy of each line that is repeated in the input (ignored if -D is also specified)",
    },
    {
      name: ["-D", "--all-repeated"],
      description:
        "Output all lines that are repeated, optionally separating groups of repeated lines",
      args: {
        name: "septype",
        description: "How to separate groups of repeated lines",
        default: "none",
        isOptional: true,
        suggestions: [
          { name: "none", description: "Do not separate groups of lines" },
          {
            name: "prepend",
            description: "Output an empty line before each group of lines",
          },
          {
            name: "separate",
            description: "Output an empty line after each group of lines",
          },
        ],
      },
      requiresSeparator: true,
    },
    {
      name: ["-f", "--skip-fields"],
      description:
        "Ignore the first num fields in each input line when doing comparisons",
      args: {
        name: "num",
      },
    },
    {
      name: ["-i", "--ignore-case"],
      description: "Case insensitive comparison of lines",
    },
    {
      name: ["-s", "--skip-chars"],
      description:
        "Ignore the first chars characters (after any skipped fields) in each input line when doing comparisons",
      args: {
        name: "chars",
      },
    },
    {
      name: ["-u", "--unique"],
      description: "Only output lines that are not repeated in the input",
    },
    {
      name: ["-z", "--zero-terminated"],
      description: "End lines with 0 byte, not newline (GNU only)",
    },
    {
      name: ["-w", "--check-chars"],
      description: "Compare no more than N characters in lines (GNU only)",
      args: {
        name: "number",
      },
    },
    {
      name: "--help",
      description: "Display this help and exit (GNU only)",
    },
    {
      name: "--version",
      description: "Output version information and exit (GNU only)",
    },
  ],
  args: [
    {
      name: "input",
      description: "Input file, or - for standard input",
      isOptional: true,
      template: "filepaths",
    },
    {
      name: "output",
      description: "Output file, standard output if absent",
      isOptional: true,
      template: "filepaths",
    },
  ],
};

export default completionSpec;
