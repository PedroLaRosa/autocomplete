// Mamba v2.10.0 (GitHub release mamba-org/mamba, 2026-10-23). Source: the CLI11
// parser in micromamba/src/*.cpp at tag 2.10.0 (mamba is built from the same
// sources minus `self-update`), option descriptions from
// libmamba/src/api/configuration.cpp

// Interface for the json output of `mamba list --json`
interface Package {
  name: string;
  platform: string;
  version: string;
}

// Interface for a package in `mamba search --json` results
interface SearchItem {
  name: string;
  subdir: string;
  version: string;
}

const getMambaEnvs: Fig.Generator = {
  // `env list --json` only gives paths, the table also has names
  script: ["mamba", "env", "list"],
  scriptTimeout: 10000,
  cache: {
    strategy: "stale-while-revalidate",
  },
  postProcess: function (out) {
    const lines = out.split("\n");
    const availableEnvs: Fig.Suggestion[] = [];
    // Skip first 2 lines as they are the table header and its rule
    for (let i = 2; i < lines.length; i++) {
      const parts = lines[i].split(" ").filter((p) => p != "");
      if (parts.length < 2) continue;
      const isActive = parts[1] == "*";
      availableEnvs.push({
        name: parts[0],
        description: parts[parts.length - 1],
        priority: isActive ? 100 : 50,
        icon: isActive ? "✅" : "🐍",
      });
    }
    return availableEnvs;
  },
};

const getInstalledPackages: Fig.Generator = {
  script: ["mamba", "list", "--json"],
  scriptTimeout: 10000,
  cache: {
    strategy: "stale-while-revalidate",
  },
  postProcess: function (out) {
    try {
      const parsed: Package[] = JSON.parse(out);
      return parsed.map((pkg) => ({
        name: pkg.name,
        description: `${pkg.version} - ${pkg.platform}`,
        icon: "fig://icon?type=package",
      }));
    } catch (e) {
      return [];
    }
  },
};

// Searches the channels for package names starting with the typed token
const mambaSearchGenerator: Fig.Generator = {
  script: (context) => {
    const searchTerm = context[context.length - 1];
    return ["mamba", "search", `${searchTerm}*`, "--json"];
  },
  scriptTimeout: 10000,
  postProcess(out) {
    try {
      const pkgs: SearchItem[] = JSON.parse(out).result.pkgs;
      // One suggestion per name; the result lists every build
      const byName = new Map(pkgs.map((pkg) => [pkg.name, pkg]));
      return [...byName.values()].map((pkg) => ({
        name: pkg.name,
        icon: "fig://icon?type=package",
        description: `${pkg.version} - ${pkg.subdir}`,
      }));
    } catch (e) {
      return [];
    }
  },
};

// CLI11 `--x,!--no-x` pairs: a flag and its negation
const toggle = (
  on: string | string[],
  off: string | string[],
  description: string
): Fig.Option[] => [
  { name: on, description },
  { name: off, description: `Negate ${typeof on === "string" ? on : on[0]}` },
];

const shells = [
  "bash",
  "posix",
  "powershell",
  "cmd.exe",
  "xonsh",
  "zsh",
  "fish",
  "tcsh",
  "dash",
  "nu",
];

const shellOption: Fig.Option = {
  name: ["-s", "--shell"],
  description: "A shell type",
  args: { name: "shell", suggestions: shells },
};

const generalOptions: Fig.Option[] = [
  {
    name: "--rc-file",
    description: "Paths to the configuration files to use",
    args: { name: "file", template: "filepaths", isVariadic: true },
  },
  { name: "--no-rc", description: "Disable the use of configuration files" },
  {
    name: "--no-env",
    description: "Disable the use of environment variables",
  },
  {
    name: ["-v", "--verbose"],
    description: "Set verbosity (higher verbosity with multiple -v, e.g. -vvv)",
    isRepeatable: true,
  },
  {
    name: "--log-level",
    description: "Set the log level",
    args: {
      name: "level",
      suggestions: [
        "critical",
        "error",
        "warning",
        "info",
        "debug",
        "trace",
        "off",
      ],
    },
  },
  {
    name: ["-q", "--quiet"],
    description:
      "Set quiet mode (print less output). Implicitly bypasses prompts as if `--yes` was used",
  },
  {
    name: ["-y", "--yes"],
    description: "Automatically answer yes on prompted questions",
  },
  {
    name: "--json",
    description:
      "Report all output as json. Implicitly bypasses prompts as if `--yes` was used",
  },
  { name: "--offline", description: "Force use cached repodata" },
  { name: "--dry-run", description: "Only display what would have been done" },
  {
    name: "--download-only",
    description:
      "Only download and extract packages, do not link them into environment",
  },
  {
    name: "--use-uv",
    description: "Use uv for installing pip dependencies",
  },
  { name: "--debug", description: "Debug mode", hidden: true },
  { name: "--print-context-only", description: "Debug context", hidden: true },
  { name: "--print-config-only", description: "Debug config", hidden: true },
];

const prefixOptions: Fig.Option[] = [
  {
    name: ["-r", "--root-prefix"],
    description: "Path to the root prefix",
    args: { name: "path", template: "folders" },
  },
  {
    name: ["-p", "--prefix"],
    description: "Path to the target prefix",
    args: { name: "path", template: "folders" },
  },
  {
    name: "--relocate-prefix",
    description: "Path to the relocation prefix",
    args: { name: "path", template: "folders" },
  },
  {
    name: ["-n", "--name"],
    description: "Name of the target prefix",
    args: { name: "name", generators: getMambaEnvs },
  },
];

const commonOptions = [...generalOptions, ...prefixOptions];

const networkOptions: Fig.Option[] = [
  {
    name: "--ssl-verify",
    description: "Verify SSL certificates for HTTPS requests",
    args: { name: "'<false>' or path" },
  },
  { name: "--ssl-no-revoke", description: "SSL certificate revocation checks" },
  {
    name: "--cacert-path",
    description: "Path (file or directory) SSL certificate(s)",
    args: { name: "path", template: ["filepaths", "folders"] },
  },
  {
    name: "--repodata-ttl",
    description: "Repodata time-to-live",
    args: { name: "seconds" },
  },
  {
    name: "--retry-clean-cache",
    description: "If solve fails, try to fetch updated repodata",
  },
];

const channelOptions: Fig.Option[] = [
  {
    name: ["-c", "--channel"],
    description: "Define the list of channels",
    args: { name: "channel" },
    isRepeatable: true,
  },
  { name: "--override-channels", description: "Override channels" },
  {
    name: "--channel-priority",
    description: "Define the channel priority",
    args: { name: "priority", suggestions: ["disabled", "flexible", "strict"] },
  },
  {
    name: "--channel-alias",
    description: "The prepended url location to associate with channel names",
    args: { name: "url" },
  },
  {
    name: "--strict-channel-priority",
    description: "Enable strict channel priority",
    exclusiveOn: ["--no-channel-priority"],
  },
  {
    name: "--no-channel-priority",
    description: "Disable channel priority",
    exclusiveOn: ["--strict-channel-priority"],
  },
];

const linkOptions = toggle(
  "--skip-run-link-scripts",
  "--run-link-scripts",
  "Skip pre/post-un/link scripts"
);

const platformOption: Fig.Option = {
  name: "--platform",
  description: "The platform description",
  args: { name: "platform" },
};

const fileOption: Fig.Option = {
  name: ["-f", "--file"],
  description:
    "File providing package specifications (yaml, explicit or plain, or json)",
  args: { name: "file", template: "filepaths" },
  isRepeatable: true,
};

const installOptions: Fig.Option[] = [
  ...commonOptions,
  ...networkOptions,
  ...channelOptions,
  ...linkOptions,
  fileOption,
  ...toggle("--no-pin", "--pin", "Ignore pinned packages"),
  ...toggle("--no-py-pin", "--py-pin", "Do not automatically pin Python"),
  ...toggle("--pyc", "--no-pyc", "Compile PYC files"),
  ...toggle(
    "--allow-uninstall",
    "--no-allow-uninstall",
    "Allow uninstall when installing or updating packages (default)"
  ),
  ...toggle(
    "--allow-downgrade",
    "--no-allow-downgrade",
    "Allow downgrade when installing packages"
  ),
  {
    name: "--exclude-newer",
    description:
      "Exclude packages published more recently than the given duration or date",
    args: { name: "duration or date" },
  },
  {
    name: "--exclude-newer-package",
    description: "Per-package overrides for the exclude_newer policy",
    args: { name: "overrides" },
  },
  ...toggle(
    "--allow-softlinks",
    "--no-allow-softlinks",
    "Allow to use soft-links when hard-links are not possible"
  ),
  ...toggle(
    "--always-softlink",
    "--no-always-softlink",
    "Use soft-link instead of hard-link"
  ),
  ...toggle(
    ["--always-copy", "--copy"],
    "--no-always-copy",
    "Use copy instead of hard-link"
  ),
  {
    name: "--lock-timeout",
    description: "Lockfile timeout",
    args: { name: "seconds" },
  },
  ...toggle(
    "--shortcuts",
    "--no-shortcuts",
    "Install start-menu shortcuts on Windows"
  ),
  {
    name: "--safety-checks",
    description: "Safety checks policy",
    args: { name: "policy", suggestions: ["enabled", "warn", "disabled"] },
  },
  ...toggle(
    "--extra-safety-checks",
    "--no-extra-safety-checks",
    "Run extra verifications on packages"
  ),
  ...toggle(
    "--mamba-repodata-parsing",
    "--no-mamba-repodata-parsing",
    "Parse repodata.json with simdjson instead of libsolv (default)"
  ),
  platformOption,
  {
    name: "--no-deps",
    description:
      "Do not install dependencies. This WILL lead to broken environments and inconsistent behavior. Use at your own risk",
    isDangerous: true,
  },
  { name: "--only-deps", description: "Only install dependencies" },
  {
    name: "--category",
    description: "Categories of package to install from environment lockfile",
    args: { name: "category", isVariadic: true },
  },
];

const pruneDepsOptions = toggle(
  "--prune-deps",
  "--no-prune-deps",
  "Prune dependencies (default)"
);

const searchSpecs: Fig.Arg = {
  name: "specs",
  description: "Specs to search",
  isVariadic: true,
  debounce: true,
  generators: mambaSearchGenerator,
};

const repoqueryOptions: Fig.Option[] = [
  ...commonOptions,
  ...networkOptions,
  ...channelOptions,
  { name: ["-t", "--tree"], description: "Show result as a tree" },
  {
    name: "--recursive",
    description:
      "Show dependencies recursively, i.e. transitive dependencies (only for `depends`)",
  },
  { name: "--pretty", description: "Pretty print result (only for search)" },
  platformOption,
];

const searchCommand = (name: string, description: string): Fig.Subcommand => ({
  name,
  description,
  args: searchSpecs,
  options: [
    ...repoqueryOptions,
    {
      name: "--local",
      description: "Use installed prefix instead of remote repositories",
    },
  ],
});

const remoteQueryCommand = (
  name: string,
  description: string
): Fig.Subcommand => ({
  name,
  description,
  args: { name: "specs", isVariadic: true, generators: getInstalledPackages },
  options: [
    ...repoqueryOptions,
    { name: "--remote", description: "Use remote repositories" },
  ],
});

// Shell-local prefix options: `-p` and `-n` exclude the positional env
const shellPrefixOptions: Fig.Option[] = [
  {
    name: ["-p", "--prefix"],
    description: "Path to the target prefix",
    args: { name: "path", template: "folders" },
    exclusiveOn: ["-n", "--name"],
  },
  {
    name: ["-n", "--name"],
    description: "Name of the target prefix",
    args: { name: "name", generators: getMambaEnvs },
    exclusiveOn: ["-p", "--prefix"],
  },
];

const prefixOrName: Fig.Arg = {
  name: "prefix_or_name",
  description: "The prefix to activate, either by name or by path",
  isOptional: true,
  generators: getMambaEnvs,
};

const rootPrefixCommand = (
  name: string,
  description: string
): Fig.Subcommand => ({
  name,
  description,
  args: {
    name: "root_prefix",
    description: "Path to the root prefix",
    isOptional: true,
    template: "folders",
  },
  options: [
    ...generalOptions,
    shellOption,
    {
      name: ["-r", "--root-prefix"],
      description: "Path to the root prefix",
      args: { name: "path", template: "folders" },
    },
  ],
});

const configPathOptions: Fig.Option[] = [
  {
    name: "--system",
    description: "Set configuration on system's rc file",
    exclusiveOn: ["--env", "--file"],
  },
  {
    name: "--env",
    description: "Set configuration on env's rc file",
    exclusiveOn: ["--system", "--file"],
  },
  {
    name: "--file",
    description: "Set configuration on specified file",
    args: { name: "file", template: "filepaths" },
    exclusiveOn: ["--system", "--env"],
  },
];

const configDescribeOptions: Fig.Option[] = [
  {
    name: ["-l", "--long-descriptions"],
    description: "Display configs long descriptions",
  },
  { name: ["-g", "--groups"], description: "Display configs groups" },
];

const configKeys: Fig.Arg = {
  name: "configs",
  description: "Configuration keys",
  isOptional: true,
  isVariadic: true,
};

const compressionOptions: Fig.Option[] = [
  {
    name: ["-c", "--compression-level"],
    description:
      "Compression level from 0-9 (tar.bz2, default is 9), and 1-22 (conda, default is 15)",
    args: { name: "level" },
  },
  {
    name: "--compression-threads",
    description:
      "Compression threads (only relevant for .conda packages, default is 1)",
    args: { name: "threads" },
  },
];

const completionSpec: Fig.Spec = {
  name: "mamba",
  description:
    "Mamba is a reimplementation of the conda package manager in C++",
  subcommands: [
    {
      name: "shell",
      description:
        "Generate shell init scripts, or launch a shell in an environment",
      args: prefixOrName,
      options: [...generalOptions, ...shellPrefixOptions],
      subcommands: [
        rootPrefixCommand("init", "Add initialization in script to rc files"),
        rootPrefixCommand("deinit", "Remove activation script from rc files"),
        {
          name: "reinit",
          description: "Restore activation script from rc files",
          options: generalOptions,
        },
        rootPrefixCommand("hook", "Mamba hook scripts"),
        {
          name: "activate",
          description: "Output activation code for the given shell",
          args: prefixOrName,
          options: [
            ...generalOptions,
            shellOption,
            ...shellPrefixOptions,
            {
              name: "--stack",
              description: "Stack the environment being activated",
            },
          ],
        },
        {
          name: "reactivate",
          description: "Output reactivation code for the given shell",
          options: [...generalOptions, shellOption],
        },
        {
          name: "deactivate",
          description: "Output deactivation code for the given shell",
          options: [...generalOptions, shellOption],
        },
        {
          name: "enable_long_path_support",
          description: "Enable long path support on Windows",
          options: generalOptions,
        },
      ],
    },
    {
      name: "create",
      description: "Create new environment",
      args: {
        name: "specs",
        description: "Specs to install into the environment",
        isOptional: true,
        isVariadic: true,
        debounce: true,
        generators: mambaSearchGenerator,
      },
      options: [
        ...installOptions,
        {
          name: "--clone",
          description: "Create new environment as clone of an existing one",
          args: { name: "env", generators: getMambaEnvs },
        },
      ],
    },
    {
      name: "install",
      description: "Install packages in active environment",
      args: {
        name: "specs",
        description: "Specs to install into the environment",
        isVariadic: true,
        debounce: true,
        generators: mambaSearchGenerator,
      },
      options: [
        ...installOptions,
        {
          name: "--freeze-installed",
          description: "Freeze already installed dependencies",
        },
        {
          name: "--force-reinstall",
          description: "Force reinstall of package",
        },
        {
          name: "--revision",
          description: "Revert to the specified revision",
          args: { name: "revision" },
        },
      ],
    },
    {
      name: "update",
      description: "Update packages in active environment",
      args: {
        name: "specs",
        description: "Specs to update in the environment",
        isVariadic: true,
        suggestions: [
          { name: "mamba", description: "Update mamba", icon: "⭐️" },
        ],
        generators: getInstalledPackages,
      },
      options: [
        ...installOptions,
        ...pruneDepsOptions,
        {
          name: ["-a", "--all"],
          description: "Update all packages in the environment",
        },
      ],
    },
    {
      name: "repoquery",
      description:
        "Find and analyze packages in active environment or channels",
      subcommands: [
        searchCommand("search", "Search for packages matching a given query"),
        remoteQueryCommand(
          "whoneeds",
          "List packages that needs the given query as a dependency"
        ),
        remoteQueryCommand("depends", "List dependencies of a given query"),
      ],
    },
    {
      name: ["remove", "uninstall"],
      description: "Remove packages from active environment",
      args: {
        name: "specs",
        description: "Specs to remove from the environment",
        isVariadic: true,
        generators: getInstalledPackages,
      },
      options: [
        ...commonOptions,
        ...linkOptions,
        {
          name: ["-a", "--all"],
          description: "Remove all packages in the environment",
        },
        {
          name: ["-f", "--force"],
          description:
            "Force removal of package (note: consistency of environment is not guaranteed!)",
          isDangerous: true,
        },
        ...pruneDepsOptions,
      ],
    },
    {
      name: "list",
      description: "List packages in active environment",
      args: {
        name: "regex",
        description: "List only packages matching a regular expression",
        isOptional: true,
      },
      options: [
        ...commonOptions,
        {
          name: ["-f", "--full-name"],
          description: "Only search for full names, i.e., ^<regex>$",
        },
        {
          name: "--no-pip",
          description: "Do not include pip-only installed packages",
        },
        {
          name: "--reverse",
          description: "List installed packages in reverse order",
        },
        {
          name: "--explicit",
          description:
            "List explicitly all installed packages with URL. Ignored if --revisions is also provided",
        },
        { name: "--md5", description: "Add MD5 hashsum when using --explicit" },
        {
          name: "--sha256",
          description: "Add SHA256 hashsum when using --explicit",
        },
        {
          name: ["-c", "--canonical"],
          description:
            "Output canonical names of packages only. Ignored if --revisions or --explicit is also provided",
        },
        {
          name: ["-e", "--export"],
          description:
            "Output explicit, machine-readable requirement strings instead of human-readable lists of packages. Ignored if --revisions, --explicit or --canonical is also provided",
        },
        { name: "--revisions", description: "List the revision history" },
      ],
    },
    {
      name: "package",
      description: "Extract a package or bundle files into an archive",
      options: generalOptions,
      subcommands: [
        {
          name: "extract",
          description: "Extract a package archive",
          args: [
            {
              name: "archive",
              description: "Archive to extract",
              template: "filepaths",
            },
            {
              name: "dest",
              description: "Destination folder",
              template: "folders",
            },
          ],
          options: generalOptions,
        },
        {
          name: "compress",
          description: "Compress a folder into a package",
          args: [
            {
              name: "folder",
              description: "Folder to compress",
              template: "folders",
            },
            {
              name: "dest",
              description: "Destination (e.g. myfile-3.1-0.tar.bz2 or .conda)",
            },
          ],
          options: [...generalOptions, ...compressionOptions],
        },
        {
          name: "transmute",
          description: "Convert a package between .tar.bz2 and .conda",
          args: {
            name: "infile",
            description: "Package to convert",
            template: "filepaths",
          },
          options: [...generalOptions, ...compressionOptions],
        },
      ],
    },
    {
      name: "clean",
      description: "Clean package cache",
      options: [
        ...generalOptions,
        {
          name: ["-a", "--all"],
          description:
            "Remove index cache, lock files, unused cache packages, and tarballs",
        },
        { name: ["-i", "--index-cache"], description: "Remove index cache" },
        {
          name: ["-p", "--packages"],
          description: "Remove unused packages from writable package caches",
        },
        {
          name: ["-t", "--tarballs"],
          description: "Remove cached package tarballs",
        },
        {
          name: ["-l", "--locks"],
          description: "Remove lock files from caches",
        },
        {
          name: "--trash",
          description: "Remove *.mamba_trash files from all environments",
        },
        {
          name: ["-f", "--force-pkgs-dirs"],
          description:
            "Remove *all* writable package caches. This option is not included with the --all flags",
          isDangerous: true,
        },
      ],
    },
    {
      name: "config",
      description: "Configuration of mamba",
      options: commonOptions,
      subcommands: [
        {
          name: "list",
          description: "List configuration values",
          args: configKeys,
          options: [
            ...commonOptions,
            ...configDescribeOptions,
            {
              name: ["-s", "--sources"],
              description: "Display all configs sources",
            },
            {
              name: ["-a", "--all"],
              description: "Display all rc configurable configs",
            },
            {
              name: ["-d", "--descriptions"],
              description: "Display configs descriptions",
            },
          ],
        },
        {
          name: "sources",
          description: "Show configuration sources",
          options: commonOptions,
        },
        {
          name: "describe",
          description: "Describe given configuration parameters",
          args: configKeys,
          options: configDescribeOptions,
        },
        {
          name: "prepend",
          description:
            "Add one configuration value to the beginning of a list key",
          args: [{ name: "key" }, { name: "value" }],
          options: configPathOptions,
        },
        {
          name: "append",
          description: "Add one configuration value to the end of a list key",
          args: [{ name: "key" }, { name: "value" }],
          options: configPathOptions,
        },
        {
          name: "remove-key",
          description: "Remove a configuration key and its values",
          args: { name: "key" },
          options: configPathOptions,
        },
        {
          name: "remove",
          description:
            "Remove a configuration value from a list key. This removes all instances of the value",
          args: [{ name: "key" }, { name: "value" }],
          options: configPathOptions,
        },
        {
          name: "set",
          description: "Set a configuration value",
          args: [{ name: "key" }, { name: "value" }],
          options: configPathOptions,
        },
        {
          name: "get",
          description: "Get a configuration value",
          args: { name: "key" },
          options: configPathOptions,
        },
      ],
    },
    {
      name: "info",
      description: "Information about mamba",
      options: [
        ...commonOptions,
        { name: "--licenses", description: "Print licenses" },
        { name: "--base", description: "Display base environment path" },
        { name: ["-e", "--envs"], description: "List known environments" },
      ],
    },
    {
      name: "constructor",
      description: "Commands to support using mamba in constructor",
      options: [
        {
          name: ["-p", "--prefix"],
          description: "Extract the conda pkgs in <prefix>/pkgs",
          args: { name: "path", template: "folders" },
        },
        {
          name: "--extract-conda-pkgs",
          description: "Extract the conda pkgs in <prefix>/pkgs",
        },
        {
          name: "--extract-tarball",
          description: "Extract given tarball into prefix",
        },
      ],
    },
    {
      name: "env",
      description: "Manage environments",
      options: commonOptions,
      subcommands: [
        {
          name: "list",
          description: "List known environments",
          options: commonOptions,
        },
        {
          name: "create",
          description:
            "Create new environment (pre-commit.com compatibility alias for 'mamba create')",
          args: {
            name: "specs",
            description: "Specs to install into the environment",
            isOptional: true,
            isVariadic: true,
            debounce: true,
            generators: mambaSearchGenerator,
          },
          options: installOptions,
        },
        {
          name: "export",
          description: "Export environment",
          options: [
            ...commonOptions,
            { name: ["-e", "--explicit"], description: "Use explicit format" },
            ...toggle("--no-md5", "--md5", "Disable md5"),
            ...toggle(
              ["--no-build", "--no-builds"],
              "--build",
              "Disable the build string in spec"
            ),
            {
              name: "--channel-subdir",
              description: "Enable channel/subdir in spec",
            },
            {
              name: "--from-history",
              description:
                "Build environment spec from explicit specs in history",
            },
          ],
        },
        {
          name: "remove",
          description: "Remove an environment",
          options: [...commonOptions, ...linkOptions],
        },
        {
          name: "update",
          description: "Update an environment",
          options: [
            ...commonOptions,
            ...linkOptions,
            platformOption,
            fileOption,
            {
              name: "--prune",
              description:
                "Remove installed packages not specified in the command and in environment file",
            },
          ],
        },
        {
          name: "config",
          description: "Configure environment",
          options: commonOptions,
          subcommands: [
            {
              name: "vars",
              description: "Manage environment variables",
              subcommands: [
                {
                  name: "list",
                  description: "List environment variables",
                  options: commonOptions,
                },
                {
                  name: "set",
                  description: "Set environment variable",
                  args: {
                    name: "vars",
                    description:
                      "Environment variables to set (format: KEY=VALUE)",
                    isVariadic: true,
                  },
                  options: commonOptions,
                },
                {
                  name: "unset",
                  description: "Unset environment variable",
                  args: {
                    name: "KEY",
                    description: "Environment variable names to unset",
                    isVariadic: true,
                  },
                  options: commonOptions,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "activate",
      description: "Activate an environment",
      args: {
        name: "prefix",
        description: "The prefix to activate",
        isOptional: true,
        generators: getMambaEnvs,
      },
      options: [
        {
          name: "--stack",
          description:
            "Activate the specified environment without first deactivating the current one",
        },
      ],
    },
    {
      name: "deactivate",
      description: "Deactivate the active environment",
    },
    {
      name: "run",
      description: "Run an executable in an environment",
      args: { name: "command", isCommand: true },
      options: [
        ...prefixOptions,
        {
          name: ["-a", "--attach"],
          description:
            'Attach to stdin, stdout and/or stderr. -a "" for disabling stream redirection',
          args: { name: "stream", suggestions: ["stdin", "stdout", "stderr"] },
        },
        {
          name: "--cwd",
          description:
            "Current working directory for command to run in. Defaults to cwd",
          args: { name: "dir", template: "folders" },
        },
        {
          name: ["-d", "--detach"],
          description: "Detach process from terminal",
        },
        { name: "--clean-env", description: "Start with a clean environment" },
        {
          name: ["-e", "--env"],
          description: "Add env vars with -e ENVVAR or -e ENVVAR=VALUE",
          args: { name: "envvar" },
          isRepeatable: true,
        },
        {
          name: "--label",
          description:
            "Specifies the name of the process. If not set, a unique name will be generated derived from the executable name if possible",
          args: { name: "name" },
        },
      ],
    },
    {
      name: "ps",
      description: "Show, inspect or kill running processes",
      subcommands: [
        { name: "list", description: "List running processes" },
        {
          name: "stop",
          description: "Stop a running process",
          args: {
            name: "pid_or_name",
            description: "Process ID or process name (label)",
          },
        },
      ],
    },
    {
      name: "auth",
      description: "Login or logout of a given host",
      subcommands: [
        {
          name: "login",
          description: "Store login information for a specific host",
          args: {
            name: "host",
            description:
              "Host for the account. The scheme (e.g. https://) is ignored but not the port (optional) nor the channel (optional)",
          },
          options: [
            {
              name: ["-p", "--password"],
              description: "Password for account",
              args: { name: "password" },
            },
            {
              name: ["-u", "--username"],
              description: "User name for the account",
              args: { name: "username" },
            },
            {
              name: ["-t", "--token"],
              description: "Token for the account",
              args: { name: "token" },
            },
            {
              name: ["-b", "--bearer"],
              description: "Bearer token for the account",
              args: { name: "bearer" },
            },
            {
              name: "--password-stdin",
              description: "Read password from stdin",
            },
            { name: "--token-stdin", description: "Read token from stdin" },
            {
              name: "--bearer-stdin",
              description: "Read bearer token from stdin",
            },
          ],
        },
        {
          name: "logout",
          description: "Erase login information for a specific host",
          args: {
            name: "host",
            description: "Host for the account",
            isOptional: true,
          },
          options: [{ name: "--all", description: "Log out from all hosts" }],
        },
      ],
    },
    searchCommand(
      "search",
      "Find packages in active environment or channels. This is equivalent to `repoquery search` command"
    ),
  ],
  options: [
    ...commonOptions,
    { name: ["-h", "--help"], description: "Show help for mamba and exit" },
    {
      name: "--version",
      description: "Show the mamba version number and exit",
    },
  ],
};
export default completionSpec;
