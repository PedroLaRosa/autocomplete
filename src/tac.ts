// tac (GNU coreutils v9.12, tag v9.12 released 2026-09-14, 2026-11-19). Source: coreutils/coreutils src/tac.c at v9.12 (getopt_long "brs:" + longopts, usage() text); not run (local binary is 9.4); option set unchanged since the existing spec. Changes: FILE is optional and variadic (no FILE or - reads standard input), removed optionsMustPrecedeArguments because GNU getopt_long permutes arguments so options may follow files. GNU-only tool: not shipped with macOS (available as gtac via Homebrew coreutils).
const completionSpec: Fig.Spec = {
  name: "tac",
  description: "Concatenate and print files in reverse",
  options: [
    {
      name: "--help",
      description: "Display this help and exit",
    },
    {
      name: ["--before", "-b"],
      description: "Attach the separator before instead of after",
    },
    {
      name: ["--regex", "-r"],
      description: "Interpret the separator as a regular expression",
    },
    {
      name: ["--separator", "-s"],
      description: "Use STRING as the separator instead of newline",
      args: {
        name: "STRING",
      },
    },
    {
      name: "--version",
      description: "Output version information and exit",
    },
  ],
  args: {
    name: "FILE",
    description:
      "File(s) to write in reverse, last line first (standard input if none or -)",
    template: "filepaths",
    isOptional: true,
    isVariadic: true,
  },
};
export default completionSpec;
