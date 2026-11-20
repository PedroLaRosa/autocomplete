// pnpx v12.21.0 (pnpm npm package, latest dist-tag, 2026-11-20). pnpx is an alias of `pnpm dlx`. Source: read statically, not run: pnpm/pnpm tag v12.21.0
// pnpm/crates/cli/src/cli_args/dlx.rs (DlxArgs), cli_command.rs (global options), reporter.rs (enums), the npm package's bin/pnpx.mjs and CHANGELOG.md.
// The old npx-style options (--cache, --userconfig, --call, --shell, --always-spawn, --no-install, ...) are not options of `pnpm dlx` and were removed.
import { npxSuggestions } from "./npx";
import { npmSearchGenerator } from "./npm";

const archOption = (
  name: string,
  description: string,
  suggestions?: string[]
): Fig.Option => ({
  name,
  description,
  isRepeatable: true,
  args: {
    name: name.slice(2),
    ...(suggestions && { suggestions }),
  },
});

const completionSpec: Fig.Spec = {
  name: "pnpx",
  description: "Run a package in a temporary environment",
  args: {
    name: "command",
    isCommand: true,
    description: "The command to run, followed by its arguments",
    generators: npmSearchGenerator,
    debounce: true,
    suggestions: [...npxSuggestions],
  },
  options: [
    {
      name: "--package",
      description: "The package to install before running the command",
      isRepeatable: true,
      args: {
        name: "package",
        generators: npmSearchGenerator,
        debounce: true,
      },
    },
    {
      name: ["-c", "--shell-mode"],
      description:
        "Run the command inside of a shell. Uses /bin/sh on UNIX and cmd.exe on Windows",
    },
    {
      name: "--allow-build",
      description:
        "Package names allowed to run lifecycle (build) scripts during the dlx install",
      isRepeatable: true,
      args: { name: "package" },
    },
    archOption(
      "--cpu",
      "CPU architectures whose platform-tagged optional dependencies the dlx install should keep"
    ),
    archOption(
      "--os",
      "Operating systems whose platform-tagged optional dependencies the dlx install should keep"
    ),
    archOption(
      "--libc",
      "Libc families whose platform-tagged optional dependencies the dlx install should keep",
      ["glibc", "musl"]
    ),
    {
      name: ["-C", "--dir"],
      description:
        "Run as if pnpm was started in <path> instead of the current working directory",
      args: {
        name: "path",
        template: "folders",
      },
    },
    {
      name: "--env-file",
      description:
        "Load environment variables from a dotenv-style file before running",
      isRepeatable: true,
      args: {
        name: "path",
        template: "filepaths",
      },
    },
    {
      name: "--registry",
      description:
        "Base URL of the npm registry to resolve and fetch packages from",
      args: { name: "url" },
    },
    {
      name: "--store-dir",
      description: "Directory in which the package store is created",
      args: {
        name: "dir",
        template: "folders",
      },
    },
    {
      name: "--reporter",
      description: "Reporter output format",
      args: {
        name: "reporter",
        suggestions: ["default", "append-only", "ndjson", "silent"],
      },
    },
    {
      name: "--loglevel",
      description: "What level of logs to print",
      args: {
        name: "level",
        suggestions: ["silent", "error", "warn", "info", "debug"],
      },
    },
    {
      name: "--no-progress",
      description: "Disable dependency and download progress output",
    },
    {
      name: ["-y", "--yes"],
      description: "Automatically answer yes to prompts",
    },
    {
      name: ["-v", "--version"],
      description: "Print the pnpm version",
    },
    {
      name: ["-h", "--help"],
      description: "Print help",
    },
  ],
};

export default completionSpec;
