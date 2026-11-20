// fnm v1.39.0 (GitHub release Schniz/fnm tag v1.39.0, 2026-11-20). Source: static read of src/cli.rs, src/config.rs, src/commands/*.rs, src/arch.rs, src/shell/shell.rs and docs/commands.md (clap definitions) at tag v1.39.0; the binary was not run
// Unreleased changes on the main branch (for example the x64-glibc217 --arch value) are deliberately not included. Hidden/deprecated flags (--multi, --using-file) are omitted
interface NodejsVersion {
  major: number;
  minor: number;
  patch: number;
  original: string;
  ltsName: string;
}

// Generators
const versionGenerator: Fig.Generator = {
  script: ["fnm", "list"],
  postProcess: function (out) {
    return out
      .split("\n")
      .filter(Boolean)
      .reverse()
      .map((line) => ({
        name: line.slice(2).split(" ")[0],
        displayName: line.slice(2),
        description: `Node.js ${line.slice(2)}`,
      }));
  },
};

// `fnm list` prints "* <version> <alias>, <alias>" for every installed version
const aliasGenerator: Fig.Generator = {
  script: ["fnm", "list"],
  postProcess: function (out) {
    const aliases = new Set<string>();
    for (const line of out.split("\n")) {
      const [, ...rest] = line.slice(2).split(" ");
      for (const alias of rest.join(" ").split(",")) {
        if (alias.trim()) aliases.add(alias.trim());
      }
    }
    return [...aliases].map((name) => ({
      name,
      description: "Alias",
    }));
  },
};

const NODE_VERSION_REGEX =
  /v(?<major>\d+)\.(?<minor>\d+)\.(?<patch>\d+)(?: \((?<ltsName>\w+)\))?/iu;
const parseNodejsVersion = (raw: string): NodejsVersion => {
  const { major, minor, patch, ltsName } =
    NODE_VERSION_REGEX.exec(raw)?.groups ?? {};
  return {
    major: Number(major),
    minor: Number(minor),
    patch: Number(patch),
    original: raw,
    ltsName,
  };
};
const uniqBy = <T = unknown>(arr: T[], callback: (a: T, b: T) => boolean) =>
  arr.reduce((acc, v) => {
    if (!acc.some((x) => callback(v, x))) acc.push(v);
    return acc;
  }, []);

/**
 * This generator will output the following Node.js' versions:
 * - Every version of the latest LTS;
 * - Latest release of all named LTS;
 * - Latest release of the beta right before the last LTS, or the
 *   beta right after it if it exists;
 * - Every other version, sorted;
 */
const remoteVersionGenerator: Fig.Generator = {
  script: ["fnm", "list-remote"],
  postProcess: function (out) {
    const parsed = out
      .split("\n")
      .reverse()
      .filter(Boolean)
      .map(parseNodejsVersion);

    // The last even major release, that's to say the last LTS.
    const lastLtsMajor = parsed.find(
      (version) => version.major % 2 === 0
    ).major;
    const latests = new Map<number, NodejsVersion>();

    const nodeVersion = parsed
      .map((version) => {
        const latestRelease = latests.get(version.major);
        if (!latestRelease || latestRelease.minor < version.minor)
          latests.set(version.major, version);
        return version;
      })
      .filter((version) => {
        // If latest LTS, show every version.
        if (version.major === lastLtsMajor) return true;

        const isLatestRelease =
          version.original === latests.get(version.major).original;
        // If any other LTS, show only its latest release.
        if (version.major % 2 === 0) return isLatestRelease;
        // Otherwise (beta), show only if it is right before or after
        // the latest LTS, and show only its latest release
        return (
          (version.major === lastLtsMajor - 1 ||
            version.major === lastLtsMajor + 1) &&
          isLatestRelease
        );
      });

    // Uniquify the list, and put them in a Suggestion object.
    return uniqBy(
      [...nodeVersion, ...parsed],
      (a, b) => a.original === b.original
    ).map((version) =>
      version.ltsName &&
      latests.get(version.major).original === version.original
        ? {
            name: `lts/${version.ltsName}`,
            displayName: version.original,
            description: `Node.js ${version.original}`,
          }
        : {
            name: version.original.split(" ").shift(),
            description: `Node.js ${version.original}`,
          }
    );
  },
  cache: {
    ttl: 60 * 60 * 24, // 1 day
  },
};

// Args
const version: Fig.Arg = {
  name: "version",
  description:
    "A version string. Can be a partial semver or a LTS version name by the format lts/NAME",
  isOptional: true,
};

const command: Fig.Arg = {
  name: "command",
  description: "The command to run",
  isCommand: true,
  isVariadic: true,
};

// Options
const lts: Fig.Option = {
  name: "--lts",
  description: "Install latest LTS",
  exclusiveOn: ["--latest"],
};

const latest: Fig.Option = {
  name: "--latest",
  description: "Install latest version",
  exclusiveOn: ["--lts"],
};

const progress: Fig.Option = {
  name: "--progress",
  description: "Show an interactive progress bar for the download status",
  args: {
    name: "progress",
    default: "auto",
    suggestions: ["auto", "never", "always"],
  },
};

const use: Fig.Option = {
  name: "--use",
  description: "Use the installed version immediately after installation",
};

const installIfMissing: Fig.Option = {
  name: "--install-if-missing",
  description: "Install the version if it isn't installed yet",
};

const silentIfUnchanged: Fig.Option = {
  name: "--silent-if-unchanged",
  description:
    "Don't output a message identifying the version being used if it will not change due to execution of this command",
};

const shell: Fig.Option = {
  name: "--shell",
  description: "The shell syntax to use. Infers when missing",
  args: {
    name: "shell",
    suggestions: ["bash", "zsh", "fish", "powershell"],
  },
};

const help: Fig.Option = {
  name: ["--help", "-h"],
  description: "Print help",
  isPersistent: true,
};

const fnmVersion: Fig.Option = {
  name: ["--version", "-V"],
  description: "Print version",
};

// These options are global: they are available in every single sub-command
const nodeDistMirror: Fig.Option = {
  name: "--node-dist-mirror",
  description: "Mirror of https://nodejs.org/dist",
  isPersistent: true,
  args: {
    name: "nodeDistMirror",
    default: "https://nodejs.org/dist",
  },
};

const fnmDir: Fig.Option = {
  name: "--fnm-dir",
  description: "The root directory of fnm installations",
  isPersistent: true,
  args: {
    name: "dir",
    template: "folders",
  },
};

const logLevel: Fig.Option = {
  name: "--log-level",
  description: "The log level of fnm commands",
  isPersistent: true,
  args: {
    name: "logLevel",
    default: "info",
    suggestions: ["quiet", "error", "info"],
  },
};

const arch: Fig.Option = {
  name: "--arch",
  description:
    "Override the architecture of the installed Node binary. Defaults to arch of fnm binary",
  isPersistent: true,
  args: {
    name: "arch",
    suggestions: [
      "x86",
      "x64",
      "x64-musl",
      "arm64",
      "armv7l",
      "ppc64le",
      "ppc64",
      "s390x",
    ],
  },
};

const versionFileStrategy: Fig.Option = {
  name: "--version-file-strategy",
  description:
    "A strategy for how to resolve the Node version. Used whenever 'fnm use' or 'fnm install' is called without a version, or when --use-on-cd is configured on evaluation",
  isPersistent: true,
  args: {
    name: "strategy",
    default: "local",
    suggestions: [
      {
        name: "local",
        description:
          "Use the local version of Node defined within the current directory",
      },
      {
        name: "recursive",
        description:
          "Use the version of Node defined within the current directory and all parent directories",
      },
    ],
  },
};

const corepackEnabled: Fig.Option = {
  name: "--corepack-enabled",
  description:
    "Enable corepack support for each new installation. This will make fnm call 'corepack enable' on every Node.js installation",
  isPersistent: true,
};

const resolveEngines: Fig.Option = {
  name: "--resolve-engines",
  description:
    "Resolve the engines.node field in package.json whenever a .node-version or .nvmrc file is not present. Enabled by default, use --resolve-engines=false to disable",
  isPersistent: true,
  args: {
    name: "resolveEngines",
    isOptional: true,
    suggestions: ["true", "false"],
  },
};

const completionSpec: Fig.Spec = {
  name: "fnm",
  description: "A fast and simple Node.js manager",
  options: [
    help,
    fnmVersion,
    nodeDistMirror,
    fnmDir,
    logLevel,
    arch,
    versionFileStrategy,
    corepackEnabled,
    resolveEngines,
  ],
  subcommands: [
    {
      name: ["install", "i"],
      description: "Install a new Node.js version",
      args: { ...version, generators: remoteVersionGenerator },
      options: [lts, latest, progress, use],
      priority: 61,
    },
    {
      name: ["uninstall", "uni"],
      description: "Uninstall a Node.js version",
      args: { ...version, generators: versionGenerator },
    },
    {
      name: "use",
      description: "Change Node.js version",
      args: { ...version, generators: versionGenerator },
      options: [installIfMissing, silentIfUnchanged],
      priority: 62,
    },
    {
      name: "exec",
      description: "Run a command within fnm context",
      args: command,
      options: [
        {
          name: "--using",
          description:
            "Either an explicit version, or a filename with the version written in it",
          args: {
            name: "version",
            generators: versionGenerator,
            template: "filepaths",
          },
        },
      ],
    },
    {
      name: "current",
      description: "Print the current Node.js version",
      priority: 60,
    },
    {
      name: ["list", "ls"],
      description: "List all locally installed Node.js versions",
    },
    {
      name: ["list-remote", "ls-remote"],
      description: "List all remote Node.js versions",
      options: [
        {
          name: "--filter",
          description:
            "Filter versions by a user-defined version or a semver range",
          args: { name: "filter" },
        },
        {
          name: "--lts",
          description:
            "Show only LTS versions (optionally filter by LTS codename)",
          args: {
            name: "codename",
            description: "LTS codename to filter by",
            isOptional: true,
          },
        },
        {
          name: "--sort",
          description: "Version sorting order",
          args: {
            name: "sort",
            default: "asc",
            suggestions: [
              {
                name: "desc",
                description:
                  "Sort versions in descending order (latest to earliest)",
              },
              {
                name: "asc",
                description:
                  "Sort versions in ascending order (earliest to latest)",
              },
            ],
          },
        },
        {
          name: "--latest",
          description: "Only show the latest matching version",
        },
      ],
    },
    {
      name: "alias",
      description: "Alias a version to a common name",
      args: [
        {
          name: "version",
          description: "The version to alias",
          generators: versionGenerator,
        },
        {
          name: "name",
          description: "Alias name",
        },
      ],
    },
    {
      name: "unalias",
      description: "Remove an alias definition",
      args: {
        name: "requested-alias",
        description: "Alias name",
        generators: aliasGenerator,
      },
    },
    {
      name: "completions",
      description: "Print shell completions to stdout",
      options: [shell],
    },
    {
      name: "default",
      description:
        "Set a version as the default version or get the current default version. This is a shorthand for 'fnm alias VERSION default'",
      args: { ...version, generators: versionGenerator },
    },
    {
      name: "env",
      description: "Print and set up required environment variables for fnm",
      options: [
        {
          name: "--use-on-cd",
          description:
            "Print the script to change Node versions every directory change",
        },
        { ...shell, exclusiveOn: ["--json"] },
        {
          name: "--json",
          description: "Print JSON instead of shell commands",
          exclusiveOn: ["--shell"],
        },
      ],
    },
    {
      name: "help",
      description: "Print this message or the help of the given subcommand(s)",
      args: {
        name: "command",
        isOptional: true,
        template: "help",
      },
    },
  ],
};

export default completionSpec;
