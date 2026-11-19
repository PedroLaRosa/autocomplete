// tokei v15.0.0 (GitHub release XAMPPRocky/tokei, 2026-09-06). Source: clap
// definitions in src/cli.rs and output formats in src/input.rs at tag v15.0.0
const languageGenerator: Fig.Generator = {
  script: ["tokei", "--languages"],
  // `--languages` prints a table: "┃<name padded>   <extensions>┃", with
  // wrapped extension rows starting with a space
  postProcess: (out) =>
    out
      .replace(/\u001b\[[0-9;]*[A-Za-z]/g, "")
      .split("\n")
      .filter((line) => line.startsWith("┃") && line[1] !== " ")
      .map((line) =>
        line
          .slice(1)
          .split(/\s{3,}/)[0]
          .trim()
      )
      .filter((name) => name && name !== "Language")
      .map((name) => ({ name })),
};

const sortColumns = ["files", "lines", "blanks", "code", "comments"];

const completionSpec: Fig.Spec = {
  name: "tokei",
  description: "Count your code, quickly",
  args: {
    name: "input",
    description:
      "The path(s) to the file or directory to be counted (default current directory)",
    isVariadic: true,
    isOptional: true,
    template: "filepaths",
  },
  options: [
    {
      name: ["-f", "--files"],
      description: "Will print out statistics on individual files",
    },
    {
      name: ["-h", "--help"],
      description: "Print help",
    },
    {
      name: "--hidden",
      description: "Count hidden files",
    },
    {
      name: ["-l", "--languages"],
      description: "Prints out supported languages and their extensions",
    },
    {
      name: "--no-ignore",
      description:
        "Don't respect ignore files (.gitignore, .ignore, etc.). This implies --no-ignore-parent, --no-ignore-dot, and --no-ignore-vcs",
    },
    {
      name: "--no-ignore-dot",
      description:
        "Don't respect .ignore and .tokeignore files, including those in parent directories",
    },
    {
      name: "--no-ignore-parent",
      description:
        "Don't respect ignore files (.gitignore, .ignore, etc.) in parent directories",
    },
    {
      name: "--no-ignore-vcs",
      description:
        "Don't respect VCS ignore files (.gitignore, .hgignore, etc.) including those in parent directories",
    },
    {
      name: ["-C", "--compact"],
      description: "Do not print statistics about embedded languages",
    },
    {
      name: ["-V", "--version"],
      description: "Print version",
    },
    {
      name: ["-v", "--verbose"],
      description:
        "Set log output level: 1 shows unknown file extensions, 2 is reserved for future debugging, 3 enables file level trace",
      isRepeatable: 3,
    },
    {
      name: ["-c", "--columns"],
      description:
        "Sets a strict column width of the output, only available for terminal output",
      exclusiveOn: ["-o", "--output"],
      args: {
        name: "columns",
      },
    },
    {
      name: ["-e", "--exclude"],
      description: "Ignore all files & directories matching the pattern",
      isRepeatable: true,
      args: {
        name: "exclude",
        template: "filepaths",
      },
    },
    {
      name: ["-i", "--input"],
      description:
        'Gives statistics from a previous tokei run. Can be given a file path, or "stdin" to read from stdin',
      args: {
        name: "file_input",
        suggestions: ["stdin"],
        template: "filepaths",
      },
    },
    {
      name: ["-o", "--output"],
      description:
        "Outputs Tokei in a specific format. Compile with additional features for more format support",
      exclusiveOn: ["-c", "--columns", "-n", "--num-format"],
      args: {
        name: "output",
        suggestions: ["cbor", "json", "yaml"],
      },
    },
    {
      name: "--streaming",
      description:
        "Prints the (language, path, lines, blanks, code, comments) records as simple lines or as JSON for batch processing",
      args: {
        name: "streaming",
        suggestions: ["simple", "json"],
      },
    },
    {
      name: ["-s", "--sort"],
      description: "Sort languages based on column",
      exclusiveOn: ["-r", "--rsort"],
      args: {
        name: "sort",
        suggestions: sortColumns,
      },
    },
    {
      name: ["-r", "--rsort"],
      description: "Reverse sort languages based on column",
      exclusiveOn: ["-s", "--sort"],
      args: {
        name: "rsort",
        suggestions: sortColumns,
      },
    },
    {
      name: ["-t", "--types"],
      description:
        "Filters output by language type, separated by a comma. i.e. -t=Rust,Markdown",
      isRepeatable: true,
      args: {
        name: "types",
        generators: languageGenerator,
      },
    },
    {
      name: ["-n", "--num-format"],
      description:
        "Format of printed numbers, i.e., plain (1234, default), commas (1,234), dots (1.234), or underscores (1_234)",
      exclusiveOn: ["-o", "--output"],
      args: {
        name: "num-format",
        suggestions: ["commas", "dots", "plain", "underscores"],
      },
    },
  ],
};

export default completionSpec;
