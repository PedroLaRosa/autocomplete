// gron v0.7.1 (latest tag, 2026-11-19). Source: tomnomnom/gron at tag v0.7.1 (main.go usage text and flag
// definitions, completions/gron.fish), read statically; the binary was not run. master (May 2025) adds
// -x/--proxy and --noproxy but they are unreleased, so they are not included.
const completionSpec: Fig.Spec = {
  name: "gron",
  description:
    "Gron is a tool to make it easier to understand big blobs of JSON",
  args: {
    name: "file or URL",
    description: "JSON file or URL to read, or - for stdin",
    isOptional: true,
    template: "filepaths",
  },
  options: [
    {
      name: ["--help", "-h"],
      description: "Show help for gron",
    },
    {
      name: ["-u", "--ungron"],
      description: "Reverse the operation (turn assignments back into JSON)",
    },
    {
      name: ["-v", "--values"],
      description: "Print just the values of provided assignments",
    },
    {
      name: ["-c", "--colorize"],
      description: "Colorize output (default on tty)",
    },
    {
      name: ["-m", "--monochrome"],
      description: "Monochrome (don't colorize output)",
    },
    {
      name: ["-s", "--stream"],
      description: "Treat each line of input as a separate JSON object",
    },
    {
      name: ["-k", "--insecure"],
      description: "Disable certificate validation",
    },
    {
      name: ["-j", "--json"],
      description: "Represent gron data as JSON stream",
    },
    {
      name: "--no-sort",
      description: "Don't sort output (faster)",
    },
    {
      name: "--version",
      description: "Print version information",
    },
  ],
};

export default completionSpec;
