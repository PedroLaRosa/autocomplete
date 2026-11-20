// Zed v1.29.2 (GitHub release, 2026-11-18). Source: clap `Args` in crates/cli/src/main.rs and crates/cli/src/completions.rs at v1.29.2
const completionSpec: Fig.Spec = {
  name: "zed",
  description: "A lightning-fast, collaborative code editor written in Rust",
  options: [
    {
      name: ["-h", "--help"],
      description: "Print help",
    },
    {
      name: ["-v", "--version"],
      description: "Print Zed's version and the app path",
    },
    {
      name: ["-w", "--wait"],
      description:
        "Wait for all of the given paths to be opened/closed before exiting",
    },
    {
      name: ["-a", "--add"],
      description: "Add files to the currently open workspace",
    },
    {
      name: ["-n", "--new"],
      description: "Create a new workspace",
    },
    {
      name: ["-r", "--reuse"],
      description: "Reuse an existing window, replacing its workspace",
      hidden: true,
    },
    {
      name: ["-e", "--existing"],
      description: "Open in existing Zed window",
    },
    {
      name: "--classic",
      description:
        "Use the classic open behavior: new window for directories, reuse for files",
      hidden: true,
    },
    {
      name: "--user-data-dir",
      description:
        "Set a custom directory for all user data (database, extensions, logs)",
      args: {
        name: "DIR",
        template: "folders",
      },
    },
    {
      name: "--foreground",
      description: "Run zed in the foreground (useful for debugging)",
    },
    {
      name: "--zed",
      description: "Custom path to Zed.app or the zed binary",
      args: {
        name: "ZED",
        template: "filepaths",
      },
    },
    {
      name: "--dev-server-token",
      description: "Run zed in dev-server mode",
      args: {
        name: "DEV_SERVER_TOKEN",
      },
    },
    {
      name: "--wsl",
      description:
        "The username and WSL distribution to use when opening paths (Windows only)",
      hidden: true,
      args: {
        name: "USER@DISTRO",
      },
    },
    {
      name: "--system-specs",
      description:
        "Not supported in Zed CLI; prints the command to run on the Zed binary",
    },
    {
      name: "--dev-container",
      description: "Open the project in a dev container",
    },
    {
      name: "--diff",
      description:
        "Pairs of file paths to diff; directories are compared recursively",
      isRepeatable: true,
      args: [
        { name: "OLD_PATH", template: "filepaths" },
        { name: "NEW_PATH", template: "filepaths" },
      ],
    },
    {
      name: "--completions",
      description: "Generate shell completions for Zed",
      args: {
        name: "SHELL",
        suggestions: ["bash", "elvish", "fish", "nushell", "powershell", "zsh"],
      },
    },
    {
      name: "--uninstall",
      description: "Uninstall Zed from user system (Linux and macOS)",
    },
    {
      name: "--askpass",
      description: "Act like netcat for SSH/Git password authentication",
      hidden: true,
      args: {
        name: "ASKPASS",
      },
    },
  ],
  args: {
    name: "path",
    description:
      "Paths to open; use path:line:column to jump to a position, or - to read stdin",
    isOptional: true,
    isVariadic: true,
    template: "filepaths",
  },
};
export default completionSpec;
