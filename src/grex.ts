// grex v1.4.6 (crates.io / GitHub tag v1.4.6, 2025-11-14; checked 2026-11-19). Source: read statically (not executed) the clap
// definitions in src/main.rs of pemistahl/grex at v1.4.6 plus RELEASE_NOTES.md.
const quantitySuggestions: Fig.Suggestion[] = Array.from(
  { length: 10 },
  (_, i) => ({ name: `${i + 1}`, icon: "🔢" })
);

const completionSpec: Fig.Spec = {
  name: "grex",
  description:
    "Command-line tool for generating regular expressions from user-provided test cases",
  options: [
    {
      name: ["-f", "--file"],
      description: "Reads test cases on separate lines from a file",
      args: {
        name: "FILE",
        description: "Use a hyphen - to read the filename from standard input",
        template: "filepaths",
      },
    },
    {
      name: ["-d", "--digits"],
      description: "Converts any Unicode decimal digit to \\d",
    },
    {
      name: ["-D", "--non-digits"],
      description:
        "Converts any character which is not a Unicode decimal digit to \\D",
    },
    {
      name: ["-s", "--spaces"],
      description: "Converts any Unicode whitespace character to \\s",
    },
    {
      name: ["-S", "--non-spaces"],
      description:
        "Converts any character which is not a Unicode whitespace character to \\S",
    },
    {
      name: ["-w", "--words"],
      description: "Converts any Unicode word character to \\w",
    },
    {
      name: ["-W", "--non-words"],
      description:
        "Converts any character which is not a Unicode word character to \\W",
    },
    {
      name: ["-e", "--escape"],
      description:
        "Replaces all non-ASCII characters with unicode escape sequences",
    },
    {
      name: "--with-surrogates",
      description:
        "Converts astral code points to surrogate pairs if --escape is set",
    },
    {
      name: ["-r", "--repetitions"],
      description:
        "Detects repeated non-overlapping substrings and converts them to {min,max} quantifier notation",
    },
    {
      name: "--min-repetitions",
      description:
        "Specifies the minimum quantity of substring repetitions to be converted if --repetitions is set",
      args: {
        name: "QUANTITY",
        default: "1",
        suggestions: quantitySuggestions,
      },
    },
    {
      name: "--min-substring-length",
      description:
        "Specifies the minimum length a repeated substring must have in order to be converted if --repetitions is set",
      args: {
        name: "LENGTH",
        default: "1",
        suggestions: quantitySuggestions,
      },
    },
    {
      name: "--no-start-anchor",
      description:
        "Removes the caret anchor ^ from the resulting regular expression",
    },
    {
      name: "--no-end-anchor",
      description:
        "Removes the dollar sign anchor $ from the resulting regular expression",
    },
    {
      name: "--no-anchors",
      description:
        "Removes the caret and dollar sign anchors from the resulting regular expression",
    },
    {
      name: ["-x", "--verbose"],
      description:
        "Produces a nicer-looking regular expression in verbose mode",
    },
    {
      name: ["-c", "--colorize"],
      description:
        "Provides syntax highlighting for the resulting regular expression",
    },
    {
      name: ["-i", "--ignore-case"],
      description:
        "Performs case-insensitive matching, letters match both upper and lower case",
    },
    {
      name: ["-g", "--capture-groups"],
      description: "Replaces non-capturing groups with capturing ones",
    },
    {
      name: ["-h", "--help"],
      description: "Prints help information",
    },
    {
      name: ["-v", "--version"],
      description: "Prints version information",
    },
  ],
  args: {
    name: "INPUT",
    description:
      "One or more test cases separated by blank space (use - to read them from standard input)",
    isVariadic: true,
    isOptional: true,
  },
};

export default completionSpec;
