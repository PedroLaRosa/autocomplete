// Vale v3.28.1 (git tag + Homebrew formula, repo moved to vale-cli/vale, 2026-11-20). Source: cmd/vale/{flag,api,command,info,main}.go at v3.28.1, diffed against v3.27.0 (CLI surface unchanged)
const completionSpec: Fig.Spec = {
  name: "vale",
  description:
    "A syntax-aware linter for prose built with speed and extensibility in mind",
  subcommands: [
    {
      name: "ls-config",
      description: "Print the current configuration to stdout",
    },
    {
      name: "ls-metrics",
      description: "Print the metrics of the given files to stdout",
      args: {
        name: "path",
        description: "The files or directories you want to analyze",
        template: ["filepaths", "folders"],
        isVariadic: true,
      },
    },
    {
      name: "ls-dirs",
      description: "Print the default configuration directories to stdout",
    },
    {
      name: "ls-vars",
      description: "Print the supported environment variables to stdout",
    },
    {
      name: "sync",
      description: "Download and install external configuration sources",
    },
    {
      name: "test",
      description: "Run the test cases kept beside a configuration's rules",
      options: [
        {
          name: "--coverage",
          description: "Fail when a rule produced no alert in any case",
        },
      ],
      args: {
        name: "path",
        template: ["filepaths", "folders"],
        isOptional: true,
        isVariadic: true,
      },
    },
    {
      name: "fix",
      description: "Attempt to automatically fix the given alert",
      hidden: true,
      options: [
        {
          name: "--apply",
          description: "Write every unambiguous fix back to disk",
        },
      ],
      args: {
        name: "alert | path",
        description: "A JSON alert, or the files to fix with --apply",
        template: "filepaths",
        isVariadic: true,
      },
    },
    {
      name: "ls-path",
      description: "Print the configuration files in scope",
      hidden: true,
    },
    {
      name: "dc",
      description: "Alias for ls-config",
      hidden: true,
    },
    {
      name: "compile",
      description: "Print a rule's compiled pattern",
      hidden: true,
      args: { name: "rule", template: "filepaths" },
    },
    {
      name: "run",
      description: "Run a single rule against a file",
      hidden: true,
      args: [
        { name: "rule", template: "filepaths" },
        { name: "file", template: "filepaths" },
      ],
    },
    {
      name: "transform",
      description: "Print a file after its transform",
      hidden: true,
      args: { name: "file", template: "filepaths" },
    },
    {
      name: "tag",
      description: "Print a file's part-of-speech tags",
      hidden: true,
      args: [{ name: "file", template: "filepaths" }, { name: "language" }],
    },
    {
      name: "load",
      description: "Print a merged pair of configurations",
      hidden: true,
      args: [
        { name: "root", template: "filepaths" },
        { name: "config", template: "filepaths" },
      ],
    },
    {
      name: "install",
      description: "Install a style package from a URL",
      hidden: true,
      args: [{ name: "name" }, { name: "url" }],
    },
    {
      name: "help",
      description: "Print the help message, or a command's own help",
      args: {
        name: "command",
        isOptional: true,
        suggestions: [
          "ls-config",
          "ls-metrics",
          "ls-dirs",
          "ls-vars",
          "sync",
          "test",
        ],
      },
    },
    {
      name: "host-install",
      description: "Install the native messaging host",
      hidden: true,
    },
    {
      name: "host-uninstall",
      description: "Uninstall the native messaging host",
      hidden: true,
    },
  ],
  options: [
    {
      name: ["--help", "-h"],
      description: "Print this help message",
      isPersistent: true,
    },
    {
      name: ["--version", "-v"],
      description: "Print the current version",
    },
    {
      name: "--config",
      description: "A path to a .vale.ini file",
      displayName: "--config=<path>",
      requiresSeparator: true,
      args: {
        name: "path",
        template: "filepaths",
      },
    },
    {
      name: "--output",
      description: "The alert output style to use, or a template file",
      displayName: "--output=<style>",
      requiresSeparator: true,
      args: {
        name: "style",
        suggestions: ["CLI", "line", "JSON"],
        template: "filepaths",
      },
    },
    {
      name: "--minAlertLevel",
      description: "The minimum level to display",
      displayName: "--minAlertLevel=<level>",
      requiresSeparator: true,
      args: {
        name: "level",
        suggestions: ["suggestion", "warning", "error"],
      },
    },
    {
      name: "--glob",
      description: "A glob pattern",
      displayName: "--glob=<glob>",
      requiresSeparator: true,
      args: {
        name: "glob",
      },
    },
    {
      name: "--filter",
      description: "An expression to filter rules by",
      displayName: "--filter=<expr>",
      requiresSeparator: true,
      args: {
        name: "expr",
      },
    },
    {
      name: "--ext",
      description: "An extension to associate with stdin",
      displayName: "--ext=<ext>",
      requiresSeparator: true,
      args: {
        name: "ext",
        suggestions: [".md", ".rst", ".adoc", ".html", ".txt"],
      },
    },
    {
      name: "--path",
      description: "A file path to associate with stdin",
      displayName: "--path=<path>",
      requiresSeparator: true,
      args: {
        name: "path",
        template: "filepaths",
      },
    },
    {
      name: "--ignore-syntax",
      description: "Lint all files line-by-line",
    },
    {
      name: "--no-color",
      description: "Don't colorize CLI output",
    },
    {
      name: "--plain-progress",
      description: "Log each step instead of drawing a progress bar",
    },
    {
      name: "--no-exit",
      description: "Don't return a nonzero exit code on errors",
    },
    {
      name: "--no-wrap",
      description: "Don't wrap CLI output",
    },
    {
      name: "--no-global",
      description: "Don't load the global configuration",
    },
    {
      name: "--counts",
      description:
        "Include per-check alert counts, zeros included, in JSON output",
      hidden: true,
    },
    {
      name: "--sources",
      description: "A list of config files to load",
      requiresSeparator: true,
      hidden: true,
      args: { name: "sources" },
    },
    {
      name: "--mode-compat",
      description: "Prioritize local Vale configurations",
      hidden: true,
    },
    {
      name: "--mode-rev-compat",
      description: "Prioritize remote Vale configurations",
      hidden: true,
    },
    {
      name: "--built",
      description: "A post-processed file path",
      requiresSeparator: true,
      hidden: true,
      args: { name: "path", template: "filepaths" },
    },
    {
      name: "--sort",
      description: "Sort files by their name in output",
      hidden: true,
    },
    {
      name: "--normalize",
      description: "Replace each path separator with a slash ('/')",
      hidden: true,
    },
    {
      name: "--relative",
      description: "Return relative paths",
      hidden: true,
    },
  ],
  args: {
    name: "input",
    template: ["filepaths", "folders"],
    isOptional: true,
    isVariadic: true,
  },
};
export default completionSpec;
