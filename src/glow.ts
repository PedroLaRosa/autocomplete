// glow v3.0.0 (GitHub release tag, 2026-11-19). Source: charmbracelet/glow main.go,
// config_cmd.go, man_cmd.go and glamour v2.0.1 styles at tag v3.0.0 (read statically, binary not run).
// The `stash` subcommand and `--local` flag are gone since v2.0.0.
import { filepaths } from "@tabsmith/autocomplete-generators";

const shellCompletion = (shell: string): Fig.Subcommand => ({
  name: shell,
  description: `Generate the autocompletion script for ${shell}`,
  options: [
    {
      name: "--no-descriptions",
      description: "Disable completion descriptions",
    },
  ],
});

const completionSpec: Fig.Spec = {
  name: "glow",
  description: "Render markdown on the CLI, with pizzazz!",
  args: {
    name: "source|dir",
    isOptional: true,
    generators: filepaths({
      extensions: ["md"],
      editFileSuggestions: { priority: 52 },
      editFolderSuggestions: { priority: 51 },
    }),
  },
  options: [
    {
      name: ["-a", "--all"],
      description: "Show system files and directories (TUI-mode only)",
    },
    {
      name: "--config",
      args: { name: "path", template: "filepaths" },
      description: "Config file",
      isPersistent: true,
    },
    {
      name: ["-h", "--help"],
      description: "Help for glow",
      isPersistent: true,
    },
    {
      name: ["-l", "--line-numbers"],
      description: "Show line numbers (TUI-mode only)",
    },
    {
      name: ["-m", "--mouse"],
      description: "Enable mouse wheel (TUI-mode only)",
      hidden: true,
    },
    {
      name: ["-n", "--preserve-new-lines"],
      description: "Preserve newlines in the output",
    },
    {
      name: ["-p", "--pager"],
      description: "Display with pager",
      exclusiveOn: ["-t", "--tui"],
    },
    {
      name: ["-s", "--style"],
      description: "Style name or JSON path (default 'auto')",
      args: {
        name: "name",
        suggestions: [
          "auto",
          "ascii",
          "dark",
          "dracula",
          "light",
          "notty",
          "pink",
          "tokyo-night",
        ],
        template: "filepaths",
      },
    },
    {
      name: ["-t", "--tui"],
      description: "Display with tui",
      exclusiveOn: ["-p", "--pager"],
    },
    {
      name: ["-v", "--version"],
      description: "Version for glow",
    },
    {
      name: ["-w", "--width"],
      args: { name: "column" },
      description: "Word-wrap at width (set to 0 to disable)",
    },
  ],
  subcommands: [
    {
      name: "completion",
      description: "Generate the autocompletion script for the specified shell",
      subcommands: ["bash", "fish", "powershell", "zsh"].map(shellCompletion),
    },
    {
      name: "config",
      description: "Edit the glow config file",
    },
    {
      name: "help",
      description: "Help about any command",
      args: {
        name: "command",
        template: "help",
        isOptional: true,
      },
    },
    {
      name: "man",
      description: "Generates manpages",
      hidden: true,
    },
  ],
};

export default completionSpec;
