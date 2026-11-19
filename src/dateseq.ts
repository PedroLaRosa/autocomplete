// dateseq (dateutils) v0.4.12 (latest tag of hroptatyr/dateutils and Homebrew formula, 2026-11-19). Source: src/dseq.yuck
// (the option parser/--help definition) and test/dseq.*.ctst usage examples from the v0.4.12 sources; binary not run.
const completionSpec: Fig.Spec = {
  name: "dateseq",
  description:
    "Generate a sequence of date/times from FIRST to LAST, optionally in steps of INCREMENT (dateutils)",
  options: [
    {
      name: ["--help", "-h"],
      description: "Print help and exit",
    },
    {
      name: ["--version", "-V"],
      description: "Print version and exit",
    },
    {
      name: ["--quiet", "-q"],
      description:
        "Suppress message about date/time and duration parser errors and fix-ups. The default is to print a warning or the fixed up value and return error code 2",
    },
    {
      name: ["-f", "--format"],
      description:
        "Output format. This can either be a specifier string (similar to strftime()'s FMT) or the name of a calendar",
      args: {
        name: "string",
        suggestions: [
          { name: "ymd", description: "Calendar designator, %Y-%m-%d" },
          { name: "ymcw", description: "Calendar designator, %Y-%m-%c-%w" },
          { name: "ywd", description: "Calendar designator, %rY-W%V-%u" },
          { name: "bizda", description: "Calendar designator, %Y-%m-%db" },
          { name: "lilian", description: "Lilian day number" },
          { name: "ldn", description: "Lilian day number" },
          { name: "julian", description: "Julian day number" },
          { name: "jdn", description: "Julian day number" },
          { name: "matlab", description: "Matlab date number" },
          { name: "mdn", description: "Matlab date number" },
        ],
      },
    },
    {
      name: ["-i", "--input-format"],
      isRepeatable: true,
      description:
        "Input format, can be used multiple times. Each date/time will be passed to the input format parsers in the order they are given, if a date/time can be read successfully with a given input format specifier string, that value will be used",
      args: {
        name: "input format",
      },
    },
    {
      name: ["-b", "--base"],
      description:
        "For underspecified input use DT as a fallback to fill in missing fields. Also used for ambiguous format specifiers to position their range on the absolute time line. Must be a date/time in ISO8601 format. If omitted defaults to the current date/time",
      args: {
        name: "base",
      },
    },
    {
      name: ["-e", "--backslash-escapes"],
      description:
        "Enable interpretation of backslash escapes in the output and input format specifier strings",
    },
    {
      name: "--locale",
      description:
        "Format results according to LOCALE, this would only affect month and weekday names",
      args: {
        name: "locale",
      },
    },
    {
      name: "--from-locale",
      description:
        "Interpret dates on stdin or the command line as coming from the locale LOCALE, this would only affect month and weekday names as input formats have to be specified explicitly",
      args: {
        name: "locale",
      },
    },
    {
      name: ["-s", "--skip"],
      isRepeatable: true,
      description:
        "Skip weekdays specified by WEEKDAY. WEEKDAY can be a single weekday (Mon, Tue, etc.), and to skip several days the --skip option can be used multiple times. WEEKDAY can also be a comma-separated list of weekday names, or `ss' to skip weekends (sat+sun) altogether. WEEKDAY can also contain date ranges like `mo-we' for Monday to Wednesday",
      args: {
        name: "weekday",
      },
    },
    {
      name: "--alt-inc",
      description:
        "Alternative increment to use when a date is hit that is skipped as per --skip. This increment will be applied until a non-skipped date is reached. The special case `0' (default) deactivates alternative incrementing.  A useful value could be `1d' for increasing sequences and `-1d' for decreasing sequences, so if a skipped date is encountered the next non-skipped date after/before will be used",
      args: {
        name: "alternative increment",
      },
    },
    {
      name: "--compute-from-last",
      description:
        "Compute a start value from LAST using INCREMENT. This option has an effect only when INCREMENT is not a divisor of the duration between FIRST and LAST. In such case, an alternative FIRST will be computed by consecutively subtracting INCREMENT from LAST until FIRST is hit or crossed",
    },
  ],
  args: [
    {
      name: "FIRST",
      description: "First date/time of the sequence (inclusive)",
    },
    {
      name: "INCREMENT",
      description:
        "Step between date/times, defaults to 1d, must be negative if FIRST is newer than LAST",
      isOptional: true,
    },
    {
      name: "LAST",
      description:
        "Last date/time of the sequence (inclusive), defaults to now, today or the current time depending on FIRST",
      isOptional: true,
    },
  ],
};
export default completionSpec;
