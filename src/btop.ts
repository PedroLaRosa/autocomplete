// btop v1.4.8 (latest git tag + Homebrew formula, 2026-11-19). Source: src/btop_cli.cpp (argument parser, `--help` text) and manpage.md of the v1.4.8 tag, read statically (not executed).
// Flags of older btop releases (--tty_on, --tty_off, +t, -lc, --utf-force) are rejected as unknown arguments by the v1.4.8 parser and were removed.
const completionSpec: Fig.Spec = {
  name: "btop",
  description: "Resource monitor (interactive process viewer)",
  options: [
    {
      name: ["-c", "--config"],
      description: "Path to a config file",
      args: { name: "file", template: "filepaths" },
    },
    {
      name: ["-d", "--debug"],
      description: "Start in debug mode with additional logs and metrics",
    },
    {
      name: ["-f", "--filter"],
      description: "Set an initial process filter",
      args: { name: "filter" },
    },
    {
      name: "--force-utf",
      description: "Override automatic UTF locale detection",
    },
    {
      name: ["-l", "--low-color"],
      description: "Disable true color, 256 colors only",
    },
    {
      name: ["-p", "--preset"],
      description: "Start with a preset (0-9)",
      args: {
        name: "id",
        suggestions: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
      },
    },
    {
      name: ["-t", "--tty"],
      description: "Force tty mode with ANSI graph symbols and 16 colors only",
      exclusiveOn: ["--no-tty"],
    },
    {
      name: "--no-tty",
      description: "Force disable tty mode",
      exclusiveOn: ["-t", "--tty"],
    },
    {
      name: "--themes-dir",
      description: "Path to a custom themes directory",
      args: { name: "dir", template: "folders" },
    },
    {
      name: ["-u", "--update"],
      description: "Set an initial update rate in milliseconds",
      args: { name: "ms" },
    },
    {
      name: "--default-config",
      description: "Print default config to standard output",
    },
    {
      name: ["-h", "--help"],
      description: "Show this help message and exit",
    },
    {
      name: ["-V", "-v"],
      description: "Show the version and exit",
    },
    {
      name: "--version",
      description:
        "Show the version with compiler and configure info, then exit",
    },
  ],
};
export default completionSpec;
