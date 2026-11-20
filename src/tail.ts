// tail (macOS 15.5 BSD, `man tail` dated 2023-11-28, 2026-11-19). Source: `man tail`
const follow = ["-F", "-f", "-r"];
const location = ["-b", "--blocks", "-c", "--bytes", "-n", "--lines"];

const completionSpec: Fig.Spec = {
  name: "tail",
  description: "Display the last part of a file",
  args: {
    name: "file",
    isVariadic: true,
    isOptional: true,
    template: "filepaths",
  },
  options: [
    {
      name: "-f",
      description: "Wait for additional data to be appended",
      exclusiveOn: follow,
    },
    {
      name: "-F",
      description:
        "Like -f, but also reopen the file if it is renamed or rotated",
      exclusiveOn: follow,
    },
    {
      name: "-r",
      description: "Display in reverse order, by line",
      exclusiveOn: follow,
    },
    {
      name: ["-b", "--blocks"],
      description:
        "Start at this many 512-byte blocks (+N from the beginning, -N or N from the end)",
      args: { name: "number" },
      exclusiveOn: location,
    },
    {
      name: ["-c", "--bytes"],
      description:
        "Start at this many bytes (+N from the beginning, -N or N from the end)",
      args: { name: "number" },
      exclusiveOn: location,
    },
    {
      name: ["-n", "--lines"],
      description:
        "Start at this many lines (+N from the beginning, -N or N from the end; default 10)",
      args: { name: "number" },
      exclusiveOn: location,
    },
    {
      name: ["-q", "--quiet", "--silent"],
      description: "Suppress headers when examining multiple files",
    },
    {
      name: ["-v", "--verbose"],
      description: "Prepend each file with a header",
    },
  ],
};

export default completionSpec;
