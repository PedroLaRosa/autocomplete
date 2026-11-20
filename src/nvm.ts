// nvm v0.41.0 (latest tag v0.41.0, Homebrew nvm 0.41.0, 2026-11-20). Source: `nvm --help` text, option parsing and command dispatch in nvm.sh@v0.41.0, shipped bash_completion and README (static read, not run)
// Also covers commands and flags accepted by nvm.sh but absent from `nvm --help`: help, debug, clear-cache, command aliases (i, list, list-remote, copy-packages), install -j and --copy-packages-from, use --delete-prefix, -h and -v

// args
const version: Fig.Arg = {
  name: "version",
  description: "Node version",
  suggestions: [
    {
      name: "node",
      description: "The latest version of node",
    },
    {
      name: "iojs",
      description: "The latest version of io.js",
    },
    {
      name: "system",
      description: "System-installed version of node",
    },
  ],
};

const versionOrCurrent: Fig.Arg = {
  ...version,
  isOptional: true,
  suggestions: [
    ...(version.suggestions as Fig.Suggestion[]),
    { name: "current", description: "The currently active version" },
  ],
};

const command: Fig.Arg = {
  name: "command",
  isVariadic: true,
};

const args: Fig.Arg = {
  name: "args",
  isVariadic: true,
};

const name: Fig.Arg = {
  name: "name",
};

const ltsName: Fig.Arg = {
  name: "LTS name",
};

const colorCodes: Fig.Arg = {
  name: "color codes",
  description: 'Using format "yMeBg"',
};

// options
const noColors: Fig.Option = {
  name: "--no-colors",
  description: "Suppress colored output",
};

const noAlias: Fig.Option = {
  name: "--no-alias",
  description: "Suppress `nvm alias` output",
};

const silent: Fig.Option = {
  name: "--silent",
  description: "Silences stdout/stderr output",
};

const lts: Fig.Option = {
  name: "--lts",
  description:
    "Uses automatic LTS (long-term support) alias `lts/*`, if available",
};

const ltsWithName: Fig.Option = {
  name: "--lts",
  description: "Uses automatic alias for provided LTS line, if available",
  requiresSeparator: true,
  args: ltsName,
};

const only: Fig.Option = {
  name: "--only",
  description:
    "Only select from these version categories (comma-separated; default: $NVM_ONLY or lts,non-lts,iojs)",
  requiresSeparator: true,
  args: {
    name: "categories",
    suggestions: ["alpha", "lts", "non-lts", "iojs", "lts,non-lts,iojs"],
  },
};

const save: Fig.Option = {
  name: ["--save", "-w"],
  description: "Write the specified version to .nvmrc",
};

const completionSpec: Fig.Spec = {
  name: "nvm",
  description: "Node Version Manager",
  subcommands: [
    {
      name: ["install", "i"],
      description:
        "Download and install a <version>. Uses .nvmrc if version is omitted; otherwise errors",
      args: { ...version, isOptional: true },
      options: [
        {
          name: "-s",
          description: "Skip binary download, install from source only",
          exclusiveOn: ["-b"],
        },
        {
          name: "-b",
          description:
            "Skip source download, install from binary only (NVM_NO_SOURCE_FALLBACK=1 makes this the default)",
          exclusiveOn: ["-s"],
        },
        {
          name: "-j",
          description:
            "Number of parallel `make` jobs to use when building from source",
          args: {
            name: "jobs",
          },
        },
        {
          name: ["--reinstall-packages-from", "--copy-packages-from"],
          description:
            "When installing, reinstall packages installed in <version>",
          requiresSeparator: true,
          args: version,
        },
        {
          ...lts,
          description:
            "When installing, only select from LTS (long-term support) versions",
        },
        {
          ...ltsWithName,
          description:
            "When installing, only select from versions for a specific LTS line",
        },
        only,
        {
          name: "--skip-default-packages",
          description:
            "When installing, skip the default-packages file if it exists",
        },
        {
          name: "--latest-npm",
          description:
            "After installing, attempt to upgrade to the latest working npm on the given node version",
        },
        {
          name: "--no-progress",
          description: "Disable the progress bar on any downloads",
        },
        {
          name: "--offline",
          description: "Install from cache only, without downloading anything",
        },
        {
          name: "--alias",
          description:
            "After installing, set the alias specified to the version specified. (same as: nvm alias <name> <version>)",
          requiresSeparator: true,
          exclusiveOn: ["--default"],
          args: name,
        },
        {
          name: "--default",
          description:
            "After installing, set default alias to the version specified. (same as: nvm alias default <version>)",
          exclusiveOn: ["--alias"],
        },
        {
          ...save,
          description:
            "After installing, write the specified version to .nvmrc",
        },
      ],
    },
    {
      name: "uninstall",
      description: "Uninstall a version",
      args: version,
      options: [
        {
          ...lts,
          description:
            "Uninstall using automatic LTS (long-term support) alias `lts/*`, if available",
        },
        {
          ...ltsWithName,
          description:
            "Uninstall using automatic alias for provided LTS line, if available",
        },
        only,
      ],
    },
    {
      name: "use",
      description:
        "Modify PATH to use <version>. Uses .nvmrc if version is omitted; otherwise errors",
      args: versionOrCurrent,
      options: [
        silent,
        lts,
        ltsWithName,
        only,
        save,
        {
          name: "--delete-prefix",
          description:
            "Remove incompatible `prefix` and `globalconfig` settings from the npmrc files of the version being used",
        },
      ],
    },
    {
      name: "exec",
      description:
        "Run <command> on <version>. Uses .nvmrc if version is omitted; otherwise errors",
      args: [versionOrCurrent, command],
      options: [silent, lts, ltsWithName, only],
    },
    {
      name: "run",
      description:
        "Run `node` on <version> with <args> as arguments. Uses .nvmrc if version is omitted; otherwise errors",
      args: [versionOrCurrent, args],
      options: [silent, lts, ltsWithName, only],
    },
    {
      name: "current",
      description:
        "Display the active node version (resolved via $PATH; not affected by .nvmrc)",
    },
    {
      name: ["ls", "list"],
      description:
        "List installed versions, matching a given <version> if provided",
      args: version,
      options: [noColors, noAlias, only],
    },
    {
      name: ["ls-remote", "list-remote"],
      description:
        "List remote versions available for install, matching a given <version> if provided",
      args: version,
      options: [
        {
          ...lts,
          description:
            "When listing, only show LTS (long-term support) versions",
        },
        {
          ...ltsWithName,
          description:
            "When listing, only show versions for a specific LTS line",
        },
        only,
        noColors,
      ],
    },
    {
      name: "version",
      description: "Resolve the given description to a single local version",
      args: version,
      options: [only],
    },
    {
      name: "version-remote",
      description: "Resolve the given description to a single remote version",
      args: version,
      options: [
        {
          ...lts,
          description:
            "When listing, only show LTS (long-term support) versions",
        },
        {
          ...ltsWithName,
          description:
            "When listing, only show versions for a specific LTS line",
        },
        only,
      ],
    },
    {
      name: "deactivate",
      description: "Undo effects of `nvm` on current shell",
      options: [silent],
    },
    {
      name: "alias",
      description:
        "Show all aliases beginning with <pattern> or Set an alias named <name> pointing to <version>",
      args: [
        {
          name: "pattern or name",
          description: "Pattern or name",
        },
        {
          name: "version",
          isOptional: true,
        },
      ],
      options: [
        noColors,
        {
          ...lts,
          description:
            "Only resolve to installed LTS (long-term support) versions",
        },
        {
          ...ltsWithName,
          description:
            "Only resolve to installed versions of a specific LTS line",
        },
        {
          ...only,
          description:
            "Only resolve to installed versions in these categories (comma-separated)",
        },
      ],
    },
    {
      name: "unalias",
      description: "Deletes the alias named <name>",
      args: name,
    },
    {
      name: "install-latest-npm",
      description:
        "Attempt to upgrade to the latest working `npm` on the current node version",
    },
    {
      name: ["reinstall-packages", "copy-packages"],
      description:
        "Reinstall global `npm` packages contained in <version> to current version",
      args: version,
      options: [only],
    },
    {
      name: "unload",
      description: "Unload `nvm` from shell",
    },
    {
      name: "which",
      description:
        "Display path to installed node version. Uses .nvmrc if version is omitted; otherwise errors",
      args: { ...version, isOptional: true },
      subcommands: [
        {
          name: "current",
        },
      ],
      options: [
        {
          ...silent,
          description:
            "Silences stdout/stderr output when a version is omitted",
        },
        only,
      ],
    },
    {
      name: "cache",
      args: {
        suggestions: [
          {
            name: "dir",
            description: "Display path to the cache directory for nvm",
            type: "subcommand",
          },
          {
            name: "clear",
            description: "Empty cache directory for nvm",
            type: "subcommand",
          },
        ],
      },
    },
    {
      name: "debug",
      description:
        "Print environment and tool diagnostics for bug reports (shell, OS, curl, wget, git, node, npm)",
    },
    {
      name: "clear-cache",
      description: "Empty the nvm cache (use `nvm cache clear`)",
      deprecated: true,
    },
    {
      name: "help",
      description: "Show help page",
      options: [noColors],
    },
    {
      name: "set-colors",
      description:
        'Set five text colors using format "yMeBg". Available when supported',
      args: colorCodes,
    },
  ],
  options: [
    {
      name: ["--help", "-h"],
      description: "Show help page",
    },
    {
      name: ["--version", "-v"],
      description: "Print out the installed version of nvm",
    },
    noColors,
  ],
};

export default completionSpec;
