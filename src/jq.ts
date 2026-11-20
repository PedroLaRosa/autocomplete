// jq v1.8.2 (latest release tag jq-1.8.2 / Homebrew, 2026-11-19). Source: jq-1.8.2 release tarball (src/main.c usage() and option parser, docs/content/manual/manual.yml "Invoking jq")

const sharedOptions: Fig.Option[] = [
  {
    name: ["--version", "-V"],
    description: "Output the jq version and exit with zero",
  },
  {
    name: "--build-configuration",
    description:
      "Output the build configuration of jq and exit with zero (format is unspecified and may change)",
  },
  {
    name: ["--help", "-h"],
    description: "Output the jq help and exit with zero",
  },
  {
    name: "--seq",
    description:
      "Use the application/json-seq MIME type scheme for separating JSON texts in jq's input and output",
  },
  {
    name: "--stream",
    description:
      "Parse the input in streaming fashion, outputting arrays of path and leaf values",
  },
  {
    name: "--stream-errors",
    description:
      "Like --stream, but invalid JSON inputs yield array values where the first element is the error and the second is a path",
  },
  {
    name: ["--slurp", "-s"],
    description:
      "Instead of running the filter for each JSON object in the input, read the entire input stream into a large array and run the filter just once",
  },
  {
    name: ["--raw-input", "-R"],
    description:
      "Don't parse the input as JSON. Instead, each line of text is passed to the filter as a string",
  },
  {
    name: ["--null-input", "-n"],
    description:
      "Don't read any input at all! Instead, the filter is run once using null as the input",
  },
  {
    name: ["--compact-output", "-c"],
    description:
      "By default, jq pretty-prints JSON output. Using this option will result in more compact output by instead putting each JSON object on a single line",
  },
  {
    name: "--tab",
    description: "Use a tab for each indentation level instead of two spaces",
  },
  {
    name: "--indent",
    description: "Use the given number of spaces for indentation",
    args: {
      name: "n",
      description: "Number of spaces (no more than 7)",
      suggestions: ["0", "1", "2", "3", "4", "5", "6", "7"],
    },
  },
  {
    name: ["--color-output", "-C"],
    description:
      "By default, jq outputs colored JSON if writing to a terminal. You can force it to produce color even if writing to a pipe or a file using -C",
  },
  {
    name: ["--monochrome-output", "-M"],
    description: "Disable color",
  },
  {
    name: ["--ascii-output", "-a"],
    description:
      "Output non-ASCII Unicode codepoints as escape sequences, producing pure ASCII output",
  },
  {
    name: "--unbuffered",
    description: "Flush the output after each JSON object is printed",
  },
  {
    name: ["--sort-keys", "-S"],
    description:
      "Output the fields of each object with the keys in sorted order",
  },
  {
    name: ["--raw-output", "-r"],
    description:
      "If the filter's result is a string then it will be written directly to standard output rather than being formatted as a JSON string with quotes",
  },
  {
    name: "--raw-output0",
    description:
      "Like -r but jq will print NUL instead of newline after each output",
  },
  {
    name: ["--join-output", "-j"],
    description: "Like -r but jq won't print a newline after each output",
  },
  {
    name: ["-f", "--from-file"],
    description:
      "Read the filter from a file rather than from a command line, like awk's -f option",
    args: {
      name: "filename",
      template: "filepaths",
    },
  },
  {
    name: ["-L", "--library-path"],
    description:
      "Prepend directory to the search list for modules (disables the builtin search list)",
    isRepeatable: true,
    args: {
      name: "directory",
      template: "folders",
    },
  },
  {
    name: ["-e", "--exit-status"],
    description:
      "Sets the exit status of jq to 0 if the last output value was neither false nor null, 1 if the last output value was either false or null, or 4 if no valid result was ever produced",
  },
  {
    name: ["-b", "--binary"],
    description:
      "Open input and output streams in binary mode (only has an effect on Windows)",
  },
  {
    name: "--arg",
    description:
      "This option passes a value to the jq program as a predefined variable",
    isRepeatable: true,
    args: [
      {
        name: "name",
      },
      {
        name: "value",
      },
    ],
  },
  {
    name: "--argjson",
    description:
      "This option passes a JSON-encoded value to the jq program as a predefined variable",
    isRepeatable: true,
    args: [
      {
        name: "name",
      },
      {
        name: "JSON-text",
      },
    ],
  },
  {
    name: "--slurpfile",
    description:
      "This option reads all the JSON texts in the named file and binds an array of the parsed JSON values to the given global variable",
    isRepeatable: true,
    args: [
      {
        name: "variable name",
      },
      {
        name: "filename",
        template: "filepaths",
      },
    ],
  },
  {
    name: "--rawfile",
    description:
      "This option reads in the named file and binds its contents to the given global variable",
    isRepeatable: true,
    args: [
      {
        name: "variable name",
      },
      {
        name: "filename",
        template: "filepaths",
      },
    ],
  },
  {
    name: "--args",
    description:
      "Remaining arguments are positional string arguments. These are available to the jq program as $ARGS.positional[]",
  },
  {
    name: "--jsonargs",
    description:
      "Remaining arguments are positional JSON text arguments. These are available to the jq program as $ARGS.positional[]",
  },
  {
    name: "--run-tests",
    description:
      "Runs the tests in the given file or standard input. This must be the last option given and does not honor all preceding options",
    args: {
      name: "filename",
      isOptional: true,
      template: "filepaths",
    },
  },
  {
    name: "--debug-dump-disasm",
    description: "Dump the disassembly of the compiled program (debugging aid)",
    hidden: true,
  },
  {
    name: "--debug-trace",
    description:
      "Trace the execution of the program (debugging aid, --debug-trace=all traces more)",
    hidden: true,
  },
];

const completionSpec: Fig.Spec = {
  name: "jq",
  description: "Command-line JSON processor",
  options: sharedOptions,
  args: [
    {
      name: "filter",
      description: "Must be enclosed in single quotes",
    },
    {
      name: "files",
      template: "filepaths",
      isOptional: true,
      isVariadic: true,
    },
  ],
};

export default completionSpec;
