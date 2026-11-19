// Pry v0.16.1 (GitHub release pry/pry, 2026-11-19). Source: lib/pry/cli.rb at tag v0.16.1
const completionSpec: Fig.Spec = {
  name: "pry",

  description: "Interactive Ruby",
  options: [
    {
      name: ["-e", "--exec"],
      description:
        "A line of code to execute in context before the session starts",
      args: { name: "code" },
      isRepeatable: true,
    },
    { name: "--no-pager", description: "Disable pager for long output" },
    { name: "--no-history", description: "Disable history loading" },
    {
      name: "--no-color",
      description: "Disable syntax highlighting for session",
    },
    {
      name: "--no-multiline",
      description: "Disable multiline input (on by default with Reline)",
    },
    { name: "-f", description: "Suppress loading of pryrc" },
    {
      name: ["-s", "--select-plugin"],
      description: "Only load specified plugin (and no others); has no effect",
      args: { name: "plugin" },
      deprecated: true,
    },
    {
      name: ["-d", "--disable-plugin"],
      description: "Disable a specific plugin; has no effect",
      args: { name: "plugin" },
      deprecated: true,
    },
    {
      name: "--no-plugins",
      description: "Suppress loading of plugins; has no effect",
      deprecated: true,
    },
    {
      name: "--plugins",
      description: "List installed plugins; use `gem list pry-` instead",
      deprecated: true,
    },
    { name: "--simple-prompt", description: "Enable simple prompt mode" },
    { name: "--noprompt", description: "No prompt mode" },
    {
      name: ["-r", "--require"],
      description: "`require` a Ruby script at startup",
      args: { name: "script" },
      isRepeatable: true,
    },
    {
      name: "-I",
      description: "Add a path to the $LOAD_PATH",
      args: { name: "path", template: "folders" },
      isRepeatable: true,
    },
    { name: "--gem", description: "Shorthand for -I./lib -rgemname" },
    { name: ["-v", "--version"], description: "Display the Pry version" },
    {
      name: ["-c", "--context"],
      description:
        "Start the session in the specified context. Equivalent to `context.pry` in a session",
      args: { name: "context" },
    },
    { name: ["-h", "--help"], description: "Display this help message" },
  ],
  args: {
    name: "file",
    description: "Ruby file to load through the REPL, then exit",
    isOptional: true,
    template: "filepaths",
  },
};
export default completionSpec;
