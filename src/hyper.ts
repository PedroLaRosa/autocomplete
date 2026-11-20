// Hyper v3.4.1 (latest stable release of vercel/hyper, 2026-11-19; master is at 4.0.0-canary.5 with an identical CLI).
// Source: static read of the v3.4.1 tag (cli/index.ts, cli/api.ts, app/index.ts) and of the
// `args` 5.0.3 library it uses for the built-in help command and -h/--help; the app was not run.
// The project looks discontinued (Homebrew cask deprecated 2026-11-08 as discontinued) but the
// CLI is unchanged, so only a stale alias and the descriptions were fixed.
const completionSpec: Fig.Spec = {
  name: "hyper",
  description: "Hyper is an Electron-based terminal",
  args: {
    name: "directory",
    description: "Working directory to open Hyper in",
    template: "folders",
    isOptional: true,
  },
  subcommands: [
    {
      name: ["install", "i"],
      description: "Install a plugin",
      args: {
        name: "plugin",
        description: "Plugin name on npm",
      },
    },
    {
      name: ["docs", "d", "h", "home"],
      description: "Open the npm page of a plugin",
      args: {
        name: "plugin",
        description: "Plugin name on npm",
      },
    },
    {
      name: "help",
      description: "Display help",
    },
    {
      name: ["list", "ls"],
      description: "List installed plugins",
    },
    {
      name: ["list-remote", "lsr", "ls-remote"],
      description: "List plugins available on npm",
    },
    {
      name: ["search", "s"],
      description: "Search for plugins on npm",
      args: {
        isOptional: true,
        name: "query",
        description: "Your search query",
      },
    },
    {
      name: ["uninstall", "u", "rm", "remove"],
      description: "Uninstall a plugin",
      args: {
        name: "plugin",
        description: "Plugin to uninstall",
        generators: {
          script: ["hyper", "list"],
          postProcess: (out) =>
            out
              .split("\n")
              .map((p) => p.trim())
              // `hyper list` prints a message instead of names when nothing is installed
              .filter((p) => p && !p.startsWith("No plugins installed"))
              .map((p) => ({ name: p, description: "Plugin name" })),
        },
      },
    },
    {
      name: "version",
      description: "Show the version of hyper",
    },
  ],
  options: [
    {
      name: ["-h", "--help"],
      description: "Output usage information",
    },
    {
      name: ["-v", "--verbose"],
      description: "Verbose mode (disabled by default)",
    },
  ],
};

export default completionSpec;
