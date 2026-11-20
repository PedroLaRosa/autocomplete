// which (macOS BSD, man page dated 2020-09-24, 2026-11-19). Source: apple-oss-distributions/shell_cmds tag shell_cmds-329 which/which.1 + which/which.c (getopt "as"); man page and source only, not run on macOS. Spec already matched upstream; only descriptions and the operand name were refreshed.
const programGenerator: Fig.Generator = {
  script: [
    "bash",
    "-c",
    `for i in $(echo $PATH | tr ":" "\n"); do find $i -maxdepth 1 -perm -111 -type f; done`,
  ],
  postProcess: (out) =>
    out
      .split("\n")
      .map((path) => path.split("/")[path.split("/").length - 1])
      .map((pr) => ({ name: pr, description: "Executable file", type: "arg" })),
};

const completionSpec: Fig.Spec = {
  name: "which",
  description: "Locate a program file in the user's PATH",
  args: {
    name: "program",
    isVariadic: true,
    generators: programGenerator,
    filterStrategy: "fuzzy",
    suggestCurrentToken: true,
  },
  options: [
    {
      name: "-s",
      description:
        "No output, just return 0 if all of the executables are found, or 1 if some were not found",
    },
    {
      name: "-a",
      description:
        "List all instances of executables found (instead of just the first one of each)",
    },
  ],
};

export default completionSpec;
