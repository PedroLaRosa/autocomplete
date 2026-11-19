// Helix (hx) 25.07.1 (latest release tag in helix-editor/helix, cross-checked with Homebrew, 2026-11-19).
// Source: static read of the 25.07.1 tag (helix-term/src/args.rs, the --help text in main.rs,
// health.rs, contrib/completion/hx.zsh); the binary was not run.
const completionSpec: Fig.Spec = {
  name: "hx",
  description: "A post-modern text editor",
  parserDirectives: {
    // Technically the flags _are_ posix compliant, but `-g` cannot be used
    // as -gfetch or -gbuild, so this has to be enabled.
    flagsArePosixNoncompliant: true,
  },
  args: {
    name: "files",
    description: "Files to open, position can be given as file[:row[:col]]",
    template: ["filepaths", "folders"],
    isVariadic: true,
  },
  options: [
    {
      name: ["-h", "--help"],
      description: "Show help",
    },
    {
      name: "--tutor",
      description: "Open the tutorial",
    },
    {
      name: "--health",
      description: "Check for errors in editor setup",
      args: {
        name: "category",
        description:
          "A language or one of clipboard, languages or all (default: all)",
        isOptional: true,
        suggestions: [
          { name: "all", description: "Run all health checks" },
          { name: "clipboard", description: "Check the clipboard provider" },
          { name: "languages", description: "Check all configured languages" },
        ],
      },
    },
    {
      name: "-v",
      description: "Increases logging verbosity (up to 3 times)",
      isRepeatable: true,
    },
    {
      name: ["-g", "--grammar"],
      description:
        "Fetch or build the tree-sitter grammars listed in languages.toml",
      args: {
        name: "action",
        suggestions: [
          { name: "fetch", icon: "fig://icon?type=command" },
          { name: "build", icon: "fig://icon?type=command" },
        ],
      },
    },
    {
      name: ["-c", "--config"],
      description: "Specify a file to use for configuration",
      args: {
        name: "file",
        template: "filepaths",
      },
    },
    {
      name: "--log",
      description: "Specify a file to use for logging",
      args: {
        name: "file",
        template: "filepaths",
      },
    },
    {
      name: "--vsplit",
      description: "Split all given files vertically into different windows",
      exclusiveOn: ["--hsplit"],
    },
    {
      name: "--hsplit",
      description: "Split all given files horizontally into different windows",
      exclusiveOn: ["--vsplit"],
    },
    {
      name: ["-w", "--working-dir"],
      description: "Specify an initial working directory",
      args: {
        name: "path",
        template: "folders",
      },
    },
    {
      name: ["-V", "--version"],
      description: "Print version information",
    },
  ],
};

export default completionSpec;
