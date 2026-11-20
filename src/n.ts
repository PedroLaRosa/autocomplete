// n v12.0.0 (tj/n tag v12.0.0, released 2026-11-18, npm and Homebrew agree, 2026-11-19). Source: bin/n of tj/n v12.0.0
// (display_help, argument parsing and dispatch read directly; script not run) plus CHANGELOG.md (v11.0.0 and v12.0.0).
import node from "./node";

const versionArg: Fig.Arg = {
  name: "version",
  suggestions: [
    {
      name: "latest",
      description: "Newest release excluding alphas",
    },
    {
      name: "latest-any",
      description: "Newest release including alphas",
    },
    {
      name: "current",
      description: "Newest release excluding alphas",
      deprecated: true,
    },
    {
      name: "lts",
      description: "Newest Long Term Support release",
    },
    {
      name: "auto",
      description:
        "Read version from file: .n-node-version, .node-version, .nvmrc, or package.json",
    },
    {
      name: "engine",
      description:
        "Read version from package.json (devEngines or engines field)",
    },
  ],
  generators: {
    script: ["n", "lsr", "--all"],
    postProcess: function (out) {
      const set = new Set<string>();
      const versions = out.split("\n").filter(Boolean);
      for (const version of versions) {
        set.add(version); // 16.1.2
        const split = version.split(".");
        set.add(split[0] + "." + split[1]); // 16.1
        set.add(split[0]); // 16
      }
      return Array.from(set).map((version) => {
        return {
          name: [version, `v${version}`],
          description: `Node.js ${version}`,
        };
      });
    },
  },
};
const optionalVersionArg: Fig.Arg = {
  ...versionArg,
  isOptional: true,
};
const variadicVersionArg: Fig.Arg = {
  ...versionArg,
  isVariadic: true,
};

const completionSpec: Fig.Spec = {
  name: "n",
  description: "Node version management",
  subcommands: [
    {
      name: ["i", "install"],
      description: "Install a Node.js version",
      args: versionArg,
    },
    {
      name: ["rm", "-"],
      description: "Remove a Node.js version",
      args: variadicVersionArg,
    },
    {
      name: "prune",
      description:
        "Remove all cached Node.js versions except the installed version",
    },
    {
      name: "doctor",
      description: "Display diagnostics to help resolve problems",
    },
    {
      name: "uninstall",
      description: "Remove the installed Node.js",
    },
    {
      name: "download",
      description: "Download a Node.js version into the cache",
      args: versionArg,
    },
    {
      name: ["ls", "list"],
      description: "Output downloaded versions",
    },
    {
      name: ["lsr", "ls-remote", "list-remote"],
      description: "Output matching versions available for download",
      args: optionalVersionArg,
      options: [
        {
          name: "--all",
          description: "Ls-remote displays all matches instead of last 20",
        },
      ],
    },
    {
      name: ["which", "bin"],
      description: "Output path for downloaded node version",
      args: versionArg,
    },
    {
      name: ["run", "use", "as"],
      description: "Execute downloaded Node.js version with args",
      args: [versionArg, ...[node.args].flat()],
      subcommands: node.subcommands,
      options: node.options,
    },
    {
      name: "exec",
      description:
        "Execute command with modified PATH, so downloaded node version and npm first",
      args: [
        versionArg,
        {
          name: "cmd",
          isCommand: true,
        },
        {
          name: "args",
          isVariadic: true,
        },
      ],
    },
  ],
  args: optionalVersionArg,
  options: [
    {
      name: ["-V", "--version"],
      description: "Output version of n",
    },
    {
      name: ["-h", "--help"],
      description: "Display help information",
    },
    {
      name: ["-p", "--preserve"],
      description: "Preserve npm and npx during install of Node.js",
    },
    {
      name: "--no-preserve",
      description: "Do not preserve npm and npx during install of Node.js",
    },
    {
      name: ["-q", "--quiet"],
      description:
        'Disable curl output. Disable log messages processing "auto" and "engine" labels',
    },
    {
      name: ["-d", "--download"],
      description: "Download if necessary. Used with run/exec/which",
    },
    {
      name: "--cleanup",
      description: "Remove cached version after install",
    },
    {
      name: "--offline",
      description:
        "Resolve target version against cached downloads instead of internet lookup",
    },
    {
      name: "--latest",
      description: "Output the latest Node.js version available",
    },
    {
      name: "--lts",
      description: "Output the latest LTS Node.js version available",
    },
    {
      name: "--stable",
      description: "Output the latest LTS Node.js version available",
      deprecated: true,
    },
    {
      name: ["-a", "--arch"],
      description: "Override system architecture",
      args: {
        name: "Architecture",
        suggestions: [
          { name: ["x64", "x86_64"] },
          { name: ["arm64", "aarch64", "armv8l"] },
          { name: ["x86", "i386", "i686"] },
          { name: ["armv6l", "armv7l"] },
        ],
      },
    },
    {
      name: "--insecure",
      description:
        "Turn off certificate checking for https requests (may be needed from behind a proxy server)",
      isDangerous: true,
    },
    {
      name: "--use-xz",
      description:
        "Override automatic detection of xz support and enable use of xz compressed node downloads",
      exclusiveOn: ["--no-use-xz"],
    },
    {
      name: "--no-use-xz",
      description:
        "Override automatic detection of xz support and disable use of xz compressed node downloads",
      exclusiveOn: ["--use-xz"],
    },
  ],
};

export default completionSpec;
