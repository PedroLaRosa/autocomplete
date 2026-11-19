// autojump v22.5.3 (latest tag release-v22.5.3 of wting/autojump; master, last commit 2025-02-27, still reports VERSION 22.5.3; 2026-11-19).
// Source: argparse definitions in bin/autojump (parse_arguments) from a shallow clone; the binary was not run.
const completionSpec: Fig.Spec = {
  name: "autojump",
  description: "A faster way to navigate your filesystem",
  args: {
    name: "directory",
    description: "Directory to jump to (matched against the database)",
    isVariadic: true,
    isOptional: true,
  },
  options: [
    {
      name: ["-h", "--help"],
      description: "Show the help message and exit",
    },
    {
      name: ["-a", "--add"],
      description: "Add path",
      args: { name: "directory", template: ["folders"] },
    },
    {
      name: ["-i", "--increase"],
      description: "Increase current directory weight",
      args: { name: "weight", isOptional: true, default: "10" },
    },
    {
      name: ["-d", "--decrease"],
      description: "Decrease current directory weight",
      args: { name: "weight", isOptional: true, default: "15" },
    },
    {
      name: "--complete",
      description: "Used for tab completion",
    },
    {
      name: "--purge",
      description: "Remove non-existent paths from database",
    },
    {
      name: ["-s", "--stat"],
      description: "Show database entries and their key weights",
    },
    {
      name: ["-v", "--version"],
      description: "Show version information",
    },
  ],
};

export default completionSpec;
