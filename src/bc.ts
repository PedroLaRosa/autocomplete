// bc 6.7.6 (Gavin Howard's bc as shipped in macOS 15, Apple OSS tag bc-33 of 2025-04-30; its help text is identical in 7.0.3, 2026-11-19). Source: bc/gen/bc_help.txt, bc/src/data.c option table, bc/manuals/bc/A.1.md and bc.xcodeproj build flags (extra math and history enabled); not a live run on macOS
const completionSpec: Fig.Spec = {
  name: "bc",
  description: "An arbitrary precision calculator language",
  parserDirectives: {
    optionsMustPrecedeArguments: true,
  },
  options: [
    {
      name: ["--no-digit-clamp", "-C"],
      description:
        "Disable clamping of digits larger than or equal to the current ibase when parsing numbers",
    },
    {
      name: ["--digit-clamp", "-c"],
      description:
        "Enable clamping of digits larger than or equal to the current ibase when parsing numbers",
    },
    {
      name: ["--seed", "-E"],
      description: "Set the builtin variable seed to the given value (base 10)",
      args: {
        name: "seed",
      },
    },
    {
      name: ["--expression", "-e"],
      description: "Run expr and quit after all expressions and files are run",
      isRepeatable: true,
      args: {
        name: "expr",
      },
    },
    {
      name: ["--file", "-f"],
      description: "Run the bc code in file and exit",
      isRepeatable: true,
      args: {
        name: "file",
        template: "filepaths",
      },
    },
    {
      name: ["--global-stacks", "-g"],
      description:
        "Turn scale, ibase, obase and seed into stacks that are restored on returning from functions",
    },
    {
      name: ["--help", "-h"],
      description: "Print the usage message and exit",
    },
    {
      name: ["--ibase", "-I"],
      description:
        "Set the builtin variable ibase to the given value (base 10)",
      args: {
        name: "ibase",
      },
    },
    {
      name: ["--interactive", "-i"],
      description: "Force interactive mode",
    },
    {
      name: ["--no-line-length", "-L"],
      description: "Disable line length checking",
    },
    {
      name: ["--mathlib", "-l"],
      description:
        "Use predefined math routines (s, c, a, l, e and j functions)",
    },
    {
      name: ["--obase", "-O"],
      description:
        "Set the builtin variable obase to the given value (base 10)",
      args: {
        name: "obase",
      },
    },
    {
      name: ["--no-prompt", "-P"],
      description: "Disable the prompts in interactive mode",
    },
    {
      name: ["--no-read-prompt", "-R"],
      description: "Disable the read prompt in interactive mode",
    },
    {
      name: ["--redefine", "-r"],
      description:
        "Redefine a non-POSIX keyword so it can be used as a function, variable or array name",
      isRepeatable: true,
      args: {
        name: "keyword",
        suggestions: [
          "abs",
          "asciify",
          "continue",
          "divmod",
          "else",
          "halt",
          "irand",
          "last",
          "limits",
          "maxibase",
          "maxobase",
          "maxrand",
          "maxscale",
          "modexp",
          "print",
          "rand",
          "read",
          "seed",
          "stream",
        ],
      },
    },
    {
      name: ["--quiet", "-q"],
      description: "Do not print the version and copyright banner",
    },
    {
      name: ["--scale", "-S"],
      description:
        "Set the builtin variable scale to the given value (base 10)",
      args: {
        name: "scale",
      },
    },
    {
      name: ["--standard", "-s"],
      description: "Error if any non-POSIX extensions are used",
    },
    {
      name: ["--warn", "-w"],
      description: "Warn if any non-POSIX extensions are used",
    },
    {
      name: ["--version", "-v", "-V"],
      description: "Print the version information and copyright and exit",
    },
    {
      name: ["--leading-zeroes", "-z"],
      description:
        "Print a leading zero on numbers greater than -1 and less than 1",
    },
  ],
  args: {
    name: "file",
    isOptional: true,
    isVariadic: true,
    template: "filepaths",
  },
};
export default completionSpec;
