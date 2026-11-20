// bunx v1.4.5 (bun npm package + oven-sh/bun tag bun-v1.4.5, 2026-11-20). Source: read statically, not run: src/runtime/cli/bunx_command.rs (flag parser),
// tag_print_help(BunxCommand) in src/runtime/cli/mod.rs, docs/pm/bunx.mdx, docs/snippets/cli/bunx.mdx. Fixed the unterminated backtick in the node_modules/.bin generator.
import { npxSuggestions } from "./npx";
import { npmSearchGenerator } from "./npm";

const bunx: Fig.Spec = {
  name: "bunx",
  description: "Execute an npm package executable (CLI), installing if needed",
  args: {
    name: "command",
    isCommand: true,
    generators: {
      script: [
        "bash",
        "-c",
        "until [[ -d node_modules/ ]] || [[ $PWD = '/' ]]; do cd ..; done; ls -1 node_modules/.bin/",
      ],
      postProcess: function (out) {
        const cli = [...npxSuggestions].reduce(
          (acc, { name }) => [...acc, name],
          []
        );
        return out
          .split("\n")
          .filter((name) => !cli.includes(name))
          .map((name) => ({
            name,
            icon: "fig://icon?type=command",
            loadSpec: name,
          }));
      },
    },
    description: "The command to run",
    suggestions: [...npxSuggestions],
  },
  options: [
    {
      name: ["--bun", "-b"],
      description: "Force the command to run with Bun instead of Node.js",
    },
    {
      name: ["--package", "-p"],
      description:
        "Specify package to install when binary name differs from package name",
      args: {
        name: "package",
        generators: npmSearchGenerator,
        debounce: true,
      },
    },
    {
      name: ["--no-install", "--no", "-n", "--offline"],
      description: "Skip installation if package is not already installed",
    },
    {
      name: "--cwd",
      description: "Set the working directory",
      args: {
        name: "path",
        template: "folders",
      },
    },
    {
      name: "--env-file",
      description: "Load environment variables from the specified file(s)",
      isRepeatable: true,
      args: {
        name: "file",
        template: "filepaths",
      },
    },
    {
      name: "--minimum-release-age",
      description:
        "Only install packages published at least N seconds ago (security feature)",
      args: {
        name: "seconds",
      },
    },
    {
      name: ["--registry", "--reg"],
      description: "Install from a specific registry",
      args: {
        name: "url",
      },
    },
    {
      name: "--ca",
      description:
        "Trust a Certificate Authority signing certificate during installation",
      isRepeatable: true,
      args: {
        name: "cert",
      },
    },
    {
      name: "--cafile",
      description:
        "Trust a Certificate Authority signing certificate from a file during installation",
      args: {
        name: "path",
        template: "filepaths",
      },
    },
    {
      name: "--trust",
      description:
        "Run the lifecycle scripts of the package and of all of its dependencies during installation",
    },
    {
      name: "--ignore-scripts",
      description: "Run no lifecycle scripts during installation",
    },
    {
      name: "--verbose",
      description: "Enable verbose output during installation",
    },
    {
      name: "--silent",
      description: "Suppress output during installation",
    },
    {
      name: ["--version", "-v"],
      description: "Print the Bun version",
    },
    {
      name: "--revision",
      description: "Print the Bun version with its git revision",
    },
    {
      name: ["--help", "-h"],
      description: "Print the help menu",
    },
  ],
};

export default bunx;
