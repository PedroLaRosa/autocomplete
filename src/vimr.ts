// VimR v0.67.0 (build 20261010.130648; Homebrew cask vimr + GitHub tag v0.67.0-20261010.130648, 2026-11-19).
// Source: static read of the `vimr` command line tool (a Python argparse script, VimR/VimR/vimr) at that tag.
// VimR is a macOS app, so nothing was run.
const completionSpec: Fig.Spec = {
  name: "vimr",
  description: "VimR — Neovim GUI for macOS in Swift",
  args: {
    name: "file",
    template: ["filepaths", "folders"],
    isVariadic: true,
    isOptional: true,
  },
  options: [
    {
      name: ["-h", "--help"],
      description: "Show help",
    },
    {
      name: "--dry-run",
      description: "Just print the 'open' command",
    },
    {
      name: "--cwd",
      description: "Set the working directory",
      args: {
        name: "CWD",
      },
    },
    {
      name: "--line",
      description: "Go to line",
      args: {
        name: "LINE",
      },
    },
    {
      name: "--wait",
      description:
        "This command line tool will exit when the corresponding UI window is closed",
    },
    {
      name: "--remote",
      description:
        "Open a new VimR window connected to the already-running neovim at ADDRESS (Unix socket path or host:port). Cannot be combined with file arguments",
      args: {
        name: "ADDRESS",
      },
    },
    {
      name: "--nvim",
      description:
        "All arguments except --cur-env, --line, --dry-run and --wait will be passed over to the (new) nvim instance in a new UI window",
    },
    {
      name: "--cur-env",
      description:
        "Use the current environment variables when launching the background neovim process. All files will be opened in a new window",
      exclusiveOn: ["-n", "-s"],
    },
    {
      name: "-n",
      description: "Open files in tabs in a new window",
      exclusiveOn: ["--cur-env", "-s"],
    },
    {
      name: "-s",
      description: "Open files in separate windows",
      exclusiveOn: ["--cur-env", "-n"],
    },
  ],
};

export default completionSpec;
