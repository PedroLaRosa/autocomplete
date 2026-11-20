// conda v26.10.0 (latest stable GitHub tag, released 2026-11-06; verified 2026-11-20).
// Source: argparse parsers read statically from conda/conda@26.10.0
// (conda/cli/*.py, conda/cli/helpers.py, conda/plugins), `tos` from
// anaconda/conda-anaconda-tos@0.3.0, and the plugins that conda 26.10.0's
// recipe bundles: conda-libmamba-solver@26.10.1 (`repoquery`),
// conda-self@0.3.0 (`self`, `base-protection` check), conda-pypi@0.13.1
// (`pypi`, `external-packages` check), conda-lockfiles@0.2.2 (lockfile
// formats), conda-rattler-solver and conda-pycosat-solver (solver names).
// conda-build/conda-index plugin commands (build, ...) are kept as stubs; the
// `convert` flags were checked against conda-build@26.9.1.

const getInstalledPackages: Fig.Generator = {
  script: ["conda", "list"],
  postProcess: function (out) {
    const lines = out.split("\n");
    const installedPackages = [];
    for (let i = 3; i < lines.length; i++) {
      const line = lines[i].trim();
      if (line) {
        const packageName = line.split(/\s+/)[0];
        installedPackages.push({
          name: packageName,
          icon: "🐍",
        });
      }
    }
    return installedPackages;
  },
};

// const getAllCondaPackages: Fig.Generator = {
//   //script: ["conda", "search", "-q"],
//   script: function (context) {
//     if (context[context.length - 1] === "") return "";
//     const searchTerm = context[context.length - 1];
//     return "conda search '*{searchTerm}*'";
//   },
//   postProcess: function (out) {
//     const lines = out.split("\n");
//     const allPackages = [];
//     allPackages.push({name: lines[0]});
//     // for (let i = 1; i < lines.length; i++) {
//     //   allPackages.push({
//     //     name: lines[i],
//     //     icon: "🐍",
//     //   });
//     // }
//     return allPackages;
//   },
// };

const getCondaEnvironments: Fig.Generator = {
  script: ["conda", "env", "list"],
  scriptTimeout: 10000,
  cache: {
    ttl: 10000,
    strategy: "stale-while-revalidate",
  },
  postProcess: function (out) {
    const lines = out.split("\n");
    const installedPackages: Fig.Suggestion[] = [];
    for (let i = 2; i < lines.length; i++) {
      var env_name = lines[i].split(" ")[0];
      installedPackages.push({
        name: env_name,
        icon: "🐍",
      });
    }
    return installedPackages;
  },
};

const getCondaConfigs: Fig.Generator = {
  script: ["conda", "config", "--show"],
  postProcess: function (out) {
    const lines = out.split("\n");
    const configs: Fig.Suggestion[] = [];
    for (let i = 2; i < lines.length; i++) {
      var config_name = lines[i].split(":")[0];
      if (config_name.includes("-") == false) {
        configs.push({
          name: config_name,
          icon: "🐍",
        });
      }
    }
    return configs;
  },
};

const configKey: Fig.Arg = { name: "key", generators: getCondaConfigs };

const subdirs = [
  "emscripten-wasm32",
  "wasi-wasm32",
  "freebsd-64",
  "linux-32",
  "linux-64",
  "linux-aarch64",
  "linux-armv6l",
  "linux-armv7l",
  "linux-ppc64",
  "linux-ppc64le",
  "linux-riscv64",
  "linux-s390x",
  "osx-64",
  "osx-arm64",
  "win-32",
  "win-64",
  "win-arm64",
  "zos-z",
];

// ponytail: formats of conda's built-in plugins plus the conda-lockfiles plugin
// that conda 26.10 bundles; other plugins can register more (`conda export
// --help` lists what is installed).
const lockfileFormats = [
  "conda-lock-v1",
  "conda-lock",
  "rattler-lock-v6",
  "pixi",
  "pixi-lock-v6",
];
const inputFormats = [
  "cep-24",
  "environment-yaml",
  "env.yml",
  "environment.yml",
  "explicit",
  "requirements.txt",
  "requirements",
  "reqs",
  ...lockfileFormats,
];
const exportFormats = [
  "environment-yaml",
  "yaml",
  "yml",
  "env.yml",
  "environment-json",
  "json",
  "explicit",
  "requirements",
  "reqs",
  "txt",
  ...lockfileFormats,
];

const name_options: Fig.Option[] = [
  {
    name: ["-n", "--name"],
    description: "Name of environment",
    args: {
      name: "Environment",
      generators: getCondaEnvironments,
    },
  },
  {
    name: ["-p", "--prefix"],
    description: "Full path to environment location (i.e. prefix)",
    args: {
      name: "path",
      template: "folders",
    },
  },
];

const verboseOption: Fig.Option = {
  name: ["-v", "--verbose"],
  description:
    "Can be used multiple times. Once for detailed output, twice for INFO logging, thrice for DEBUG logging, four times for TRACE logging",
  isRepeatable: true,
};

const jsonOption: Fig.Option = {
  name: "--json",
  description:
    "Report all output as json. Suitable for using conda programmatically",
};

const json_options: Fig.Option[] = [
  jsonOption,
  {
    name: "--console",
    description: "Select the backend to use for normal output rendering",
    args: { name: "backend", suggestions: ["classic", "json"] },
  },
  verboseOption,
  { name: ["-q", "--quiet"], description: "Do not display progress bar" },
];

const output_options: Fig.Option[] = [
  ...json_options,
  {
    name: ["-d", "--dry-run"],
    description: "Only display what would have been done",
  },
  {
    name: ["-y", "--yes"],
    description:
      "Sets any confirmation values to 'yes' automatically. Users will not be asked to confirm any adding, deleting, backups, etc",
  },
];

const channelOption: Fig.Option = {
  name: ["-c", "--channel"],
  description:
    "Additional channel to search for packages. These are URLs searched in the order they are given (including local directories using the 'file://' syntax or simply a path like '/home/conda/mychan' or '../mychan'). Then, the defaults or channels from .condarc are searched (unless --override-channels is given). You can use 'defaults' to get the default packages for conda. You can also use any name and the .condarc channel_alias value will be prepended. The default channel_alias is https://conda.anaconda.org/",
  isRepeatable: true,
  args: { name: "channel" },
};

const overrideChannelsOption: Fig.Option = {
  name: ["-O", "--override-channels"],
  description: "Do not search default or .condarc channels. Requires --channel",
};

const channel_options: Fig.Option[] = [
  channelOption,
  {
    name: "--use-local",
    description: "Use locally built packages. Identical to '-c local'",
  },
  overrideChannelsOption,
  {
    name: "--repodata-fn",
    description:
      "Specify file name of repodata on the remote server where your channels are configured or within local backups. Conda will try whatever you specify, but will ultimately fall back to repodata.json if your specs are not satisfiable with what you specify here. You may pass this flag more than once. Leftmost entries are tried first",
    isRepeatable: true,
    args: { name: "file name" },
  },
  {
    name: "--experimental",
    description:
      "Deprecated: jlap and lock are no longer supported and have no effect",
    deprecated: true,
    isRepeatable: true,
    args: { suggestions: ["jlap", "lock"] },
  },
  {
    name: "--no-lock",
    description:
      "Disable locking when reading, updating index (repodata.json) cache",
  },
  {
    name: "--repodata-use-zst",
    description: "Check for repodata.json.zst. Enabled by default",
    exclusiveOn: ["--no-repodata-use-zst"],
  },
  {
    name: "--no-repodata-use-zst",
    description: "Do not check for repodata.json.zst",
    exclusiveOn: ["--repodata-use-zst"],
  },
  {
    name: "--repodata-use-shards",
    description: "Use sharded repodata if available. Enabled by default",
    exclusiveOn: ["--no-repodata-use-shards"],
  },
  {
    name: "--no-repodata-use-shards",
    description: "Do not use sharded repodata",
    exclusiveOn: ["--repodata-use-shards"],
  },
];

const solver_mode_options: Fig.Option[] = [
  {
    name: "--strict-channel-priority",
    description:
      "Packages in lower priority channels are not considered if a package with the same name appears in a higher priority channel",
  },
  {
    name: "--no-channel-priority",
    description:
      "Package version takes precedence over channel priority. Overrides the value given by `conda config --show channel_priority`",
  },
  {
    name: "--no-deps",
    description:
      "Do not install, update, remove, or change dependencies. This WILL lead to broken environments and inconsistent behavior. Use at your own risk",
    isDangerous: true,
    exclusiveOn: ["--only-deps"],
  },
  {
    name: "--only-deps",
    description: "Only install dependencies",
    exclusiveOn: ["--no-deps"],
  },
  { name: "--no-pin", description: "Ignore pinned file" },
  {
    name: "--exclude-newer",
    description:
      "Exclude packages published more recently than the given duration (e.g. 7d, 3d12h, 1w) or date (e.g. 2026-04-01). Supply 0 for no delay",
    args: { name: "DURATION_OR_DATE" },
  },
];

const solverOption: Fig.Option = {
  name: "--solver",
  description: "Choose which solver backend to use",
  args: {
    name: "solver",
    suggestions: [
      { name: "rattler", description: "Default solver since conda 26.10" },
      "libmamba",
      "classic",
      "pycosat",
    ],
  },
};

const update_modifier_options: Fig.Option[] = [
  {
    name: ["--freeze-installed", "--no-update-deps"],
    description: "Do not update or change already-installed dependencies",
  },
  {
    name: "--update-deps",
    description: "Update dependencies that have available updates",
  },
  {
    name: ["-S", "--satisfied-skip-solve"],
    description:
      "Exit early and do not run the solver if the requested specs are satisfied. Also skips aggressive updates as configured by the 'aggressive_update_packages' config setting",
  },
  {
    name: ["--update-all", "--all"],
    description: "Update all installed packages in the environment",
  },
  {
    name: "--update-specs",
    description: "Update based on provided specifications",
  },
];

const networking_options: Fig.Option[] = [
  {
    name: ["-C", "--use-index-cache"],
    description:
      "Use cache of channel index files, even if it has expired. Saves bandwidth by not checking for a new repodata file",
  },
  {
    name: ["-k", "--insecure"],
    description:
      "Allow conda to perform 'insecure' SSL connections and transfers. Equivalent to setting 'ssl_verify' to 'false'",
  },
  {
    name: "--offline",
    description: "Offline mode. Don't connect to the Internet",
  },
];

const package_install_options: Fig.Option[] = [
  {
    name: "--copy",
    description:
      "Install all packages using copies instead of hard- or soft-linking",
  },
  { name: "--no-shortcuts", description: "Don't install start menu shortcuts" },
  {
    name: "--shortcuts-only",
    description:
      "Install shortcuts only for this package name. Can be used several times",
    isRepeatable: true,
    args: { name: "package" },
  },
  {
    name: "--clobber",
    description:
      "Allow clobbering (i.e. overwriting) of overlapping file paths within packages and suppress related warnings",
  },
];

const overrideFrozenOption: Fig.Option = {
  name: "--override-frozen",
  description:
    "DANGEROUS. Use at your own risk. Ignore protections if the environment is frozen",
  isDangerous: true,
};

const format_options: Fig.Option[] = [
  {
    name: "--format",
    description:
      "Override auto-detection of the input file's format. Aliases are interchangeable with canonical names",
    args: { name: "FORMAT", suggestions: inputFormats },
  },
  {
    name: ["--environment-specifier", "--env-spec"],
    description: "Deprecated: use --format instead",
    deprecated: true,
    args: { name: "FORMAT", suggestions: inputFormats },
  },
];

const platformOption = (description: string): Fig.Option => ({
  name: ["--subdir", "--platform"],
  description: `${description}. Should be formatted like 'osx-64', 'linux-32', 'win-64', and so on. Defaults to the current (native) platform`,
  args: { name: "SUBDIR", suggestions: subdirs },
});

const noDefaultPackagesOption: Fig.Option = {
  name: "--no-default-packages",
  description: "Ignore create_default_packages in the .condarc file",
};

const devOption: Fig.Option = {
  name: "--dev",
  description:
    "Deprecated: set `PYTHONPATH` to the conda source root instead. Use `sys.executable -m conda` in wrapper scripts instead of CONDA_EXE",
  deprecated: true,
};

const showChannelUrlsOption: Fig.Option = {
  name: "--show-channel-urls",
  description:
    "Show channel urls. Overrides the value given by `conda config --show show_channel_urls`",
};

const create_install_update_options: Fig.Option[] = [
  ...name_options,
  ...channel_options,
  ...solver_mode_options,
  solverOption,
  ...package_install_options,
  ...networking_options,
  ...output_options,
  {
    name: "--download-only",
    description:
      "Solve an environment and ensure package caches are populated, but exit prior to unlinking and linking packages into the prefix",
  },
  showChannelUrlsOption,
  {
    name: ["-f", "--file"],
    description:
      "Read environment or package specs from a file. The format is detected from the filename or contents. Custom filenames require --format. May be repeated",
    isRepeatable: true,
    args: { name: "file", template: "filepaths" },
  },
  ...format_options,
];

const update_options: Fig.Option[] = [
  overrideFrozenOption,
  ...create_install_update_options,
  {
    name: "--force-reinstall",
    description:
      "Ensure that any user-requested package for the current operation is uninstalled and reinstalled, even if that package already exists in the environment",
  },
  ...update_modifier_options,
];

const remove_options: Fig.Option[] = [
  overrideFrozenOption,
  ...name_options,
  ...channel_options,
  { name: "--features", description: "Remove features (instead of packages)" },
  {
    name: ["--force-remove", "--force"],
    description:
      "Forces removal of a package without removing packages that depend on it. Using this option will usually leave your environment in a broken and inconsistent state",
    isDangerous: true,
  },
  {
    name: "--no-pin",
    description:
      "Ignore pinned package(s) that apply to the current operation. These pinned packages might come from a .condarc file or a file in <TARGET_ENVIRONMENT>/conda-meta/pinned",
  },
  solverOption,
  ...networking_options,
  ...output_options,
  {
    name: "--all",
    description: "Remove all packages, i.e., the entire environment",
  },
  {
    name: "--keep-env",
    description:
      "Used with `--all`, delete all packages but keep the environment",
    dependsOn: ["--all"],
  },
  devOption,
];

const packageSpecArg: Fig.Arg = {
  name: "package_spec",
  description: "Packages to install or update in the conda environment",
  isOptional: true,
  isVariadic: true,
};

const exportSpec: Omit<Fig.Subcommand, "name"> = {
  description: "Export a conda environment to a file",
  options: [
    {
      name: ["-c", "--channel"],
      description: "Additional channel to include in the export",
      isRepeatable: true,
      args: { name: "channel" },
    },
    {
      name: ["-O", "--override-channels"],
      description: "Do not include .condarc channels",
    },
    {
      name: ["--platform", "--subdir"],
      description:
        "Target platform(s)/subdir(s) for export. Repeat for multi-platform output where the format supports it",
      isRepeatable: true,
      args: { name: "SUBDIR", suggestions: subdirs },
    },
    {
      name: "--override-platforms",
      description: "Override the platforms specified in the condarc",
    },
    ...name_options,
    {
      name: ["-f", "--file"],
      description:
        "File name or path for the exported environment. Custom filenames require --format. Existing files are overwritten silently",
      args: { name: "file", template: "filepaths" },
    },
    {
      name: "--format",
      description:
        "Override the output format. When omitted, the format is detected from --file",
      args: { name: "FORMAT", suggestions: exportFormats },
    },
    {
      name: "--no-builds",
      description: "Remove build specification from dependencies",
    },
    {
      name: "--ignore-channels",
      description: "Do not include channel names with package names",
    },
    ...json_options,
    {
      name: "--from-history",
      description: "Build environment spec from explicit specs in history",
    },
  ],
};

const envVarsArg: Fig.Arg = {
  name: "vars",
  isOptional: true,
  isVariadic: true,
};

const tosChannelOptions: Fig.Option[] = [
  {
    name: ["-c", "--channel"],
    description: "Additional channels to search for Terms of Service",
    isRepeatable: true,
    args: { name: "channel" },
  },
  {
    name: "--override-channels",
    description:
      "Do not search default or .condarc channels. Requires --channel",
  },
];

const tosCacheOptions: Fig.Option[] = [
  {
    name: "--cache-timeout",
    description:
      "Cache timeout (in seconds) to check for Terms of Service updates",
    args: { name: "seconds" },
  },
  {
    name: "--ignore-cache",
    description:
      "Ignore the cache and always check for Terms of Service updates",
  },
];

const tosActionOptions: Fig.Option[] = [
  ...tosChannelOptions,
  ...name_options,
  { name: "--site", description: "System-wide storage location" },
  { name: "--system", description: "Conda installation storage location" },
  { name: "--user", description: "User storage location" },
  { name: "--env", description: "Conda environment storage location" },
  {
    name: "--tos-root",
    description: "Custom storage location",
    args: { name: "path", template: "folders" },
  },
  ...tosCacheOptions,
  jsonOption,
];

const repoqueryOptions: Fig.Option[] = [
  {
    name: ["-p", "--platform"],
    description:
      "Platform/subdir to search packages for. Defaults to current platform",
    args: { name: "platform", suggestions: subdirs },
  },
  {
    name: "--no-installed",
    description: "Do not search currently installed packages",
  },
  { name: "--pretty", description: "Prettier output with more details" },
  {
    name: ["-a", "--all-channels"],
    description: "Look at all channels (for depends / whoneeds)",
  },
  { name: "--use-cache-only", description: "Search in pkgs_dirs too" },
  ...channel_options,
  ...networking_options,
  ...json_options,
];

const repoqueryTreeOptions: Fig.Option[] = [
  {
    name: ["-t", "--tree"],
    description: "Show dependencies in a tree-like format",
  },
  { name: "--recursive", description: "Show dependencies recursively" },
];

const repoquerySpecArg: Fig.Arg = {
  name: "specs",
  description: "The target package(s)",
};

const completionSpec: Fig.Spec = {
  name: "conda",
  description:
    "Conda is a tool for managing and deploying applications, environments and packages",
  subcommands: [
    {
      name: "activate",
      description: "Activate a conda environment",
      args: {
        name: "environment",
        isOptional: true,
        generators: getCondaEnvironments,
      },
      options: [
        {
          name: "--stack",
          description:
            "Stack the environment being activated on top of the previous active environment",
        },
        {
          name: "--no-stack",
          description:
            "Do not stack the environment. Overrides 'auto_stack' setting",
        },
      ],
    },
    {
      name: "deactivate",
      description: "Deactivate the current active conda environment",
    },
    {
      name: "clean",
      description: "Remove unused packages and caches",
      options: [
        {
          name: ["-a", "--all"],
          description:
            "Remove index cache, unused cache packages, tarballs, tempfiles, and logfiles",
        },
        {
          name: ["-i", "--index-cache"],
          description: "Remove index cache",
        },
        {
          name: ["-p", "--packages"],
          description:
            "Remove unused packages from writable package caches. WARNING: Environments not listed by `conda info --envs` are not checked for symlinks back to the package cache",
        },
        {
          name: ["-t", "--tarballs"],
          description: "Remove cached package tarballs",
        },
        {
          name: ["-f", "--force-pkgs-dirs"],
          description:
            "Remove *all* writable package caches. Not included with --all. WARNING: This will break environments with packages installed using symlinks back to the package cache",
          isDangerous: true,
        },
        {
          name: ["-c", "--tempfiles"],
          description:
            "Remove temporary files that could not be deleted earlier due to being in-use. Argument is path(s) to the environment(s) where the tempfiles should be found and removed",
          args: {
            name: "path",
            template: "folders",
            isOptional: true,
            isVariadic: true,
          },
        },
        {
          name: ["-l", "--logfiles"],
          description: "Remove log files",
        },
        ...output_options,
      ],
    },
    {
      name: "commands",
      description:
        "List all available conda subcommands (including those from plugins). Generally only used by tab-completion",
    },
    {
      name: "compare",
      description: "Compare packages between conda environments",
      args: {
        name: "file",
        description:
          "Path to the environment file that is to be compared against",
        template: "filepaths",
      },
      options: [...json_options, ...name_options],
    },
    {
      name: "config",
      description:
        "Modify configuration values in .condarc. This is modeled after the git config command. Writes to the user .condarc file by default",
      options: [
        ...json_options,
        {
          name: "--system",
          description: "Write to the system .condarc file",
        },
        {
          name: "--env",
          description:
            "Write to the active conda environment .condarc file. If no environment is active, write to the user config file",
        },
        {
          name: "--file",
          description: "Write to the given file",
          args: {
            name: "Target File",
            template: "filepaths",
          },
        },
        ...name_options,
        {
          name: "--show",
          description:
            "Display configuration values as calculated and compiled. If no arguments given, show information for all configuration values",
          args: {
            name: "Configuration values",
            isOptional: true,
            isVariadic: true,
            generators: getCondaConfigs,
          },
        },
        {
          name: "--show-sources",
          description: "Display all identified configuration sources",
        },
        {
          name: "--validate",
          description:
            "Validate all configuration sources. Iterates over all .condarc files and checks for parsing errors",
        },
        {
          name: "--describe",
          description:
            "Describe given configuration parameters. If no arguments given, show information for all configuration parameters",
          args: {
            name: "Configuration values",
            isOptional: true,
            isVariadic: true,
            generators: getCondaConfigs,
          },
        },
        {
          name: "--write-default",
          description:
            "Write the default configuration to a file. Equivalent to `conda config --describe > ~/.condarc`",
        },
        {
          name: "--get",
          description: "Get a configuration value",
          args: { ...configKey, isOptional: true, isVariadic: true },
        },
        {
          name: "--append",
          description: "Add one configuration value to the end of a list key",
          isRepeatable: true,
          args: [configKey, { name: "value" }],
        },
        {
          name: ["--prepend", "--add"],
          description:
            "Add one configuration value to the beginning of a list key",
          isRepeatable: true,
          args: [configKey, { name: "value" }],
        },
        {
          name: "--set",
          description: "Set a boolean or string key",
          isRepeatable: true,
          args: [configKey, { name: "value" }],
        },
        {
          name: "--remove",
          description:
            "Remove a configuration value from a list key. This removes all instances of the value",
          isRepeatable: true,
          args: [configKey, { name: "value" }],
        },
        {
          name: "--clear",
          description: "Clear all values from a list key",
          isRepeatable: true,
          args: configKey,
        },
        {
          name: "--remove-key",
          description: "Remove a configuration key (and all its values)",
          isRepeatable: true,
          args: configKey,
        },
        {
          name: "--stdin",
          description:
            "Apply configuration information given in yaml format piped through stdin",
        },
      ],
    },
    {
      name: "create",
      description:
        "Create a new conda environment from a list of specified packages",
      args: packageSpecArg,
      options: [
        {
          name: "--clone",
          description:
            "Create a new environment as a copy of an existing local environment",
          args: {
            name: "ENV",
            generators: getCondaEnvironments,
          },
        },
        ...create_install_update_options,
        noDefaultPackagesOption,
        platformOption(
          "Use packages built for this platform. The new environment will be configured to remember this choice"
        ),
        devOption,
      ],
    },
    {
      name: ["doctor", "check"],
      description: "Display a health report for your environment",
      args: {
        name: "NAME",
        description:
          "Health check names to run (default: all). Use --list to see available checks",
        isOptional: true,
        isVariadic: true,
        suggestions: [
          {
            name: "altered-files",
            description: "Detect packages with modified files",
          },
          {
            name: "base-protection",
            description:
              "Check whether the base environment is marked as frozen",
          },
          {
            name: "consistency",
            description: "Check for missing or inconsistent dependencies",
          },
          {
            name: "environment-txt",
            description: "Verify environment is registered in environments.txt",
          },
          {
            name: "external-packages",
            description: "List packages not installed by conda",
          },
          {
            name: "file-locking",
            description: "Check if file locking is supported",
          },
          {
            name: "missing-files",
            description: "Detect packages with missing files",
          },
          {
            name: "pinned",
            description: "Validate format of the pinned file",
          },
          {
            name: "requests-ca-bundle",
            description: "Check REQUESTS_CA_BUNDLE environment variable",
          },
        ],
      },
      options: [
        ...name_options,
        overrideFrozenOption,
        ...output_options,
        {
          name: "--list",
          description:
            "List all available health checks and their fix capabilities",
        },
        {
          name: ["--fix", "--heal"],
          description: "Fix issues found by health checks",
        },
      ],
    },
    {
      name: "env",
      description: "Create and manage conda environments",
      subcommands: [
        {
          name: "config",
          description: "Configure a conda environment",
          subcommands: [
            {
              name: "vars",
              description:
                "Interact with environment variables associated with Conda environments",
              subcommands: [
                {
                  name: "list",
                  description:
                    "List environment variables for a conda environment",
                  options: [...name_options, ...json_options],
                },
                {
                  name: "set",
                  description:
                    "Set environment variables for a conda environment",
                  args: {
                    ...envVarsArg,
                    description:
                      "Environment variables to set in the form <KEY>=<VALUE> separated by spaces",
                  },
                  options: name_options,
                },
                {
                  name: "unset",
                  description:
                    "Unset environment variables for a conda environment",
                  args: {
                    ...envVarsArg,
                    description:
                      "Environment variables to unset in the form <KEY> separated by spaces",
                  },
                  options: name_options,
                },
              ],
            },
          ],
        },
        {
          name: "create",
          description:
            "Create an environment based on an environment definition file",
          options: [
            {
              name: ["-f", "--file"],
              description:
                "Environment definition file (default: environment.yml). Custom filenames require --format",
              args: {
                name: "file",
                template: "filepaths",
                isOptional: true,
                isVariadic: true,
              },
            },
            ...name_options,
            ...networking_options,
            ...format_options,
            noDefaultPackagesOption,
            ...output_options,
            solverOption,
            platformOption(
              "Use packages built for this platform. The new environment will be configured to remember this choice"
            ),
          ],
        },
        { name: "export", ...exportSpec },
        {
          name: "list",
          description:
            "An alias for `conda info --envs`. Lists all conda environments",
          options: [
            ...json_options,
            {
              name: "--size",
              description:
                "Show conda-managed disk usage for each environment (excludes untracked files created after installation)",
            },
          ],
        },
        {
          name: "remove",
          description: "Remove an environment",
          options: [
            overrideFrozenOption,
            ...name_options,
            solverOption,
            ...output_options,
          ],
        },
        {
          name: "update",
          description:
            "Update the current environment based on environment file",
          options: [
            ...format_options,
            overrideFrozenOption,
            ...name_options,
            {
              name: ["-f", "--file"],
              description: "Environment definition (default: environment.yml)",
              args: { name: "file", template: "filepaths" },
            },
            {
              name: "--prune",
              description:
                "Remove installed packages not defined in environment.yml",
            },
            ...json_options,
            solverOption,
          ],
        },
      ],
    },
    { name: "export", ...exportSpec },
    {
      name: "info",
      description: "Display information about current conda install",
      options: [
        ...json_options,
        { name: ["-a", "--all"], description: "Show all information" },
        { name: "--base", description: "Display base environment path" },
        {
          name: ["-e", "--envs"],
          description:
            "List all known conda environments. Combine with `--json` to obtain more details",
        },
        {
          name: ["-s", "--system"],
          description: "List environment variables",
        },
        {
          name: "--size",
          description:
            "Show conda-managed disk usage for each environment (excludes untracked files created after installation)",
        },
        {
          name: "--unsafe-channels",
          description: "Display list of channels with tokens exposed",
        },
      ],
    },
    {
      name: "init",
      description: "Initialize conda for shell interaction",
      args: {
        name: "SHELLS",
        description:
          "One or more shells to be initialized. Defaults to 'bash' on unix and 'cmd.exe' & 'powershell' on Windows",
        isOptional: true,
        isVariadic: true,
        suggestions: [
          "bash",
          "cmd.exe",
          "fish",
          "tcsh",
          "xonsh",
          "zsh",
          "powershell",
        ],
      },
      options: [
        {
          name: "--all",
          description: "Initialize all currently available shells",
        },
        {
          name: "--condabin",
          description:
            "Add 'condabin/' directory to PATH only. Does not install the shell function",
        },
        {
          name: "--user",
          description: "Initialize conda for the current user (default)",
        },
        {
          name: "--no-user",
          description: "Don't initialize conda for the current user",
        },
        {
          name: "--system",
          description: "Initialize conda for all users on the system",
        },
        {
          name: "--reverse",
          description: "Undo effects of last conda init",
        },
        {
          name: "--anaconda-prompt",
          description:
            "Add an 'Anaconda Prompt' icon to your desktop (Windows only)",
        },
        ...json_options,
        {
          name: ["-d", "--dry-run"],
          description: "Only display what would have been done",
        },
      ],
    },
    {
      name: "install",
      description:
        "Install a list of packages into a specified conda environment",
      args: {
        ...packageSpecArg,
        //generators: getAllCondaPackages,
      },
      options: [
        {
          name: "--revision",
          description: "Revert to the specified REVISION",
          args: { name: "REVISION" },
        },
        ...update_options,
        devOption,
      ],
    },
    {
      name: "list",
      description: "List installed packages in a conda environment",
      args: {
        name: "regex",
        description: "List only packages matching this regular expression",
        isOptional: true,
      },
      options: [
        ...name_options,
        ...json_options,
        showChannelUrlsOption,
        {
          name: "--fields",
          description: "Comma-separated list of fields to print",
          args: {
            name: "fields",
            suggestions: [
              "arch",
              "build",
              "build_number",
              "channel",
              "channel_name",
              "constrains",
              "depends",
              "dist_str",
              "features",
              "fn",
              "license",
              "license_family",
              "md5",
              "name",
              "noarch",
              "package_type",
              "requested_spec",
              "requested_specs",
              "sha256",
              "size",
              "subdir",
              "timestamp",
              "track_features",
              "url",
              "version",
            ],
          },
        },
        {
          name: "--reverse",
          description: "List installed packages in reverse order",
        },
        {
          name: ["-c", "--canonical"],
          description: "Output canonical names of packages only",
        },
        {
          name: ["-f", "--full-name"],
          description:
            "Only search for full names, i.e., ^<regex>$. --full-name NAME is identical to regex '^NAME$'",
        },
        {
          name: "--explicit",
          description:
            "List explicitly all installed conda packages with URL (output may be used by conda create --file)",
        },
        {
          name: "--md5",
          description: "Add MD5 hashsum when using --explicit",
        },
        {
          name: "--sha256",
          description: "Add SHA256 hashsum when using --explicit",
        },
        {
          name: ["-e", "--export"],
          description:
            "Output explicit, machine-readable requirement strings instead of human-readable lists of packages. This output may be used by conda create --file",
        },
        {
          name: ["-r", "--revisions"],
          description: "List the revision history",
        },
        {
          name: "--size",
          description: "Show package and environment sizes",
        },
        {
          name: "--no-pip",
          description: "Do not include pip-only installed packages",
        },
        {
          name: "--auth",
          description:
            "In explicit mode, leave authentication details in package URLs. They are removed by default otherwise",
        },
      ],
    },
    {
      name: "notices",
      description: "Retrieve latest channel notifications",
      options: [...channel_options, ...json_options],
    },
    {
      name: "package",
      description: "Create low-level conda packages. (EXPERIMENTAL)",
      options: [
        ...name_options,
        {
          name: ["-w", "--which"],
          description:
            "Given some file's PATH, print which conda package the file came from",
          args: {
            name: "PATH",
            isVariadic: true,
            template: "filepaths",
          },
        },
        {
          name: ["-r", "--reset"],
          description: "Remove all untracked files and exit",
        },
        {
          name: ["-u", "--untracked"],
          description: "Display all untracked files and exit",
        },
        {
          name: "--pkg-name",
          description: "Designate package name of the package being created",
          args: { name: "name" },
        },
        {
          name: "--pkg-version",
          description: "Designate package version of the package being created",
          args: { name: "version" },
        },
        {
          name: "--pkg-build",
          description:
            "Designate package build number of the package being created",
          args: { name: "build" },
        },
      ],
    },
    {
      name: "plugins",
      description: "Manage conda plugins",
      subcommands: [
        {
          name: "info",
          description:
            "Show detailed information about an installed conda plugin",
          args: {
            name: "NAME",
            description:
              "Installed plugin distribution name or canonical plugin name",
          },
          options: json_options,
        },
        {
          name: "list",
          description: "List installed conda plugins",
          options: json_options,
        },
      ],
    },
    {
      name: "pypi",
      description: "Install Python distribution packages as conda packages",
      options: [...name_options, ...output_options],
      subcommands: [
        {
          name: "install",
          description: "Install Python distribution packages as conda packages",
          args: {
            name: "PACKAGE",
            description: "Python distribution packages to install",
            isOptional: true,
            isVariadic: true,
          },
          options: [
            {
              name: "--ignore-channels",
              description:
                "Do not search default or .condarc channels. Will search the configured package indexes",
            },
            {
              name: ["-i", "--index-url"],
              description:
                "Package index URL to use instead of PyPI. Can be used multiple times",
              isRepeatable: true,
              args: { name: "url" },
            },
            ...output_options,
            ...name_options,
            {
              name: ["-e", "--editable"],
              description:
                "Build and install PROJECT_PATH in editable mode using PEP 660. Can be used multiple times",
              isRepeatable: true,
              args: { name: "PROJECT_PATH", template: "folders" },
            },
          ],
        },
        {
          name: "convert",
          description:
            "Build and convert local Python sdists, wheels or projects to conda packages",
          args: {
            name: "PROJECT",
            description: "Convert named path as conda package",
            template: ["filepaths", "folders"],
          },
          options: [
            {
              name: "--output-folder",
              description:
                "Folder to write output package(s). Defaults to ./conda-pypi-output",
              args: { name: "folder", template: "folders" },
            },
            {
              name: ["-e", "--editable"],
              description:
                "Build an editable package linking PROJECT to the target conda environment when installed",
            },
            {
              name: ["-t", "--test-dir"],
              description:
                "Directory containing test files to inject into the conda package. Must be structured as a conda test directory for the tests to work",
              args: { name: "directory", template: "folders" },
            },
            {
              name: "--name-mapping",
              description:
                "Path to json file containing pypi to conda name mapping",
              args: { name: "file", template: "filepaths" },
            },
            {
              name: "--build-number",
              description:
                "Build number for the converted package. Defaults to the leading digits of the wheel filename build tag, or 0 if absent",
              args: { name: "number" },
            },
          ],
        },
        {
          name: "index",
          description:
            "Index a directory of `.whl` files to generate repodata.json",
          args: {
            name: "DIRECTORY",
            description: "Directory containing .whl files to index",
            template: "folders",
          },
          options: [
            {
              name: "--base-url",
              description:
                "Base URL for the channel (e.g. https://packages.example.com/). When omitted, each entry uses a file:// URI for each wheel file",
              args: { name: "url" },
            },
          ],
        },
      ],
    },
    {
      name: ["remove", "uninstall"],
      description:
        "Remove a list of packages from a specified conda environment",
      args: {
        name: "package_name",
        isOptional: true,
        isVariadic: true,
        generators: getInstalledPackages,
      },
      options: remove_options,
    },
    {
      name: "repoquery",
      description: "Advanced search for repodata",
      subcommands: [
        {
          name: "whoneeds",
          description: "Show packages that depend on this package",
          args: repoquerySpecArg,
          options: [...repoqueryOptions, ...repoqueryTreeOptions],
        },
        {
          name: "depends",
          description: "Show dependencies of this package",
          args: repoquerySpecArg,
          options: [...repoqueryOptions, ...repoqueryTreeOptions],
        },
        {
          name: "search",
          description: "Show all available package versions",
          args: { ...repoquerySpecArg, isVariadic: true },
          options: repoqueryOptions,
        },
      ],
    },
    {
      name: "rename",
      description: "Rename an existing environment",
      args: {
        name: "destination",
        description: "New name for the conda environment",
      },
      options: [...name_options, ...output_options],
    },
    {
      name: "run",
      description: "Run an executable in a conda environment",
      args: {
        name: "executable",
        isCommand: true,
      },
      options: [
        ...name_options,
        verboseOption,
        {
          ...devOption,
          description:
            "Deprecated: set `PYTHONPATH` to the conda source root instead. Sets `CONDA_EXE` to `python -m conda`",
        },
        {
          name: "--debug-wrapper-scripts",
          description:
            "When this is set, where implemented, the shell wrapper scripts will use the echo command to print debugging information to stderr",
        },
        {
          name: "--cwd",
          description:
            "Current working directory for command to run in. Defaults to the user's current working directory",
          args: { name: "dir", template: "folders" },
        },
        {
          name: ["-s", "--no-capture-output", "--live-stream"],
          description: "Don't capture stdout/stderr",
        },
      ],
    },
    {
      name: "search",
      description:
        "Search for packages and display associated information using the MatchSpec format",
      args: { name: "match_spec", isOptional: true },
      options: [
        {
          name: "--envs",
          description:
            "Search all of the current user's environments. If run as Administrator (on Windows) or UID 0 (on unix), search all known environments on the system",
        },
        {
          name: ["-i", "--info"],
          description: "Provide detailed information about each package",
        },
        platformOption("Specify which platform to search"),
        {
          name: "--skip-flexible-search",
          description: "Do not perform flexible search if initial search fails",
        },
        ...channel_options,
        ...networking_options,
        ...json_options,
      ],
    },
    {
      name: "self",
      description: "Manage conda and its plugins in the base environment",
      options: [
        {
          name: ["-V", "--version"],
          description: "Show the 'conda-self' version number and exit",
        },
      ],
      subcommands: [
        {
          name: "install",
          description: "Install conda plugins in the base environment",
          args: {
            name: "specs",
            description: "Conda plugins to install",
            isVariadic: true,
          },
          options: [
            ...output_options,
            {
              name: "--force-reinstall",
              description:
                "Reinstall each requested package even if it is already installed",
            },
          ],
        },
        {
          name: "remove",
          description: "Remove conda plugins from the base environment",
          args: {
            name: "specs",
            description: "Conda plugins to remove",
            isVariadic: true,
          },
          options: [
            ...output_options,
            {
              name: "--force",
              description:
                "Bypass conda-self's check for permanent packages and their dependencies. Conda still applies its own transaction checks. Confirmation is still required unless --yes is passed",
            },
          ],
        },
        {
          name: "reset",
          description: "Reset the base environment",
          options: [
            ...output_options,
            {
              name: "--snapshot",
              description:
                "Reset mode for the base environment. If not set, base-protection is used when its snapshot file exists, otherwise installer-updated when the installer snapshot file exists, otherwise current",
              args: {
                name: "mode",
                suggestions: [
                  {
                    name: "current",
                    description:
                      "Remove all conda packages except conda, conda-self, installed conda plugins, configured permanent packages and their dependencies",
                  },
                  {
                    name: "installer-exact",
                    description:
                      "Restore exactly the conda packages recorded by the installer. May downgrade updated packages",
                  },
                  {
                    name: "installer-updated",
                    description:
                      "Keep what current keeps plus installed packages named in the installer snapshot. Does not update or install missing packages",
                  },
                  {
                    name: "base-protection",
                    description:
                      "Restore exactly the conda packages recorded by `conda doctor -n base base-protection --fix` before protecting base",
                  },
                ],
              },
            },
          ],
        },
        {
          name: "update",
          description:
            "Update conda, one conda plugin, or all packages in the base environment",
          options: [
            ...output_options,
            {
              name: "--force-reinstall",
              description:
                "Uninstall and reinstall each requested package, even if it is already installed",
            },
            {
              name: "--plugin",
              description: "Name of a conda plugin to update",
              args: { name: "plugin" },
              exclusiveOn: ["--all"],
            },
            {
              name: "--all",
              description:
                "Update all installed packages in the base environment",
              exclusiveOn: ["--plugin"],
            },
          ],
        },
      ],
    },
    {
      name: "tos",
      description:
        "View, accept, reject, and otherwise interact with a channel's Terms of Service (conda-anaconda-tos plugin)",
      options: [
        {
          name: ["-V", "--version"],
          description: "Show the conda-anaconda-tos version number and exit",
        },
        ...tosChannelOptions,
        ...name_options,
        ...tosCacheOptions,
        jsonOption,
        verboseOption,
      ],
      subcommands: [
        {
          name: "accept",
          description:
            "Accept the Terms of Service for all active channels (default, .condarc, and/or those specified via --channel)",
          options: tosActionOptions,
        },
        {
          name: "reject",
          description:
            "Reject the Terms of Service for all active channels (default, .condarc, and/or those specified via --channel)",
          options: tosActionOptions,
        },
        {
          name: "view",
          description:
            "View the Terms of Service for all active channels (default, .condarc, and/or those specified via --channel)",
          options: tosActionOptions,
        },
        {
          name: "interactive",
          description:
            "Interactively accept/reject/view Terms of Service for all active channels",
          options: [...tosActionOptions, verboseOption],
        },
        {
          name: "info",
          description:
            "Display information about the plugin (e.g., search path and cache directory)",
          options: [jsonOption],
        },
        {
          name: "clean",
          description: "Clean the cache directories",
          options: [
            { name: "--cache", description: "Remove all cache files" },
            { name: "--tos", description: "Remove all acceptances/rejections" },
            { name: "--all", description: "Invoke both `--cache` and `--tos`" },
            jsonOption,
          ],
        },
      ],
    },
    {
      name: ["update", "upgrade"],
      description: "Update conda packages to the latest compatible version",
      args: {
        ...packageSpecArg,
        suggestions: [
          { name: "conda", description: "Update conda", icon: "⭐️" },
        ],
        generators: getInstalledPackages,
      },
      options: update_options,
    },
    {
      name: "build",
      description: "",
      args: {},
    },
    {
      name: "convert",
      description:
        "Various tools to convert conda packages. Takes a pure Python package build for one platform and converts it to work on one or more other platforms, or all",
      args: {
        name: "files",
        description: "Package files to convert",
        isVariadic: true,
        template: "filepaths",
      },
      options: [
        {
          name: ["-h", "--help"],
          description: "Show this help message and exit",
        },
        {
          name: ["-p", "--platform"],
          description: "Platform to convert the packages to",
          isRepeatable: true,
          args: {
            suggestions: [
              { name: "osx-64" },
              { name: "osx-arm64" },
              { name: "linux-32" },
              { name: "linux-64" },
              { name: "linux-ppc64" },
              { name: "linux-ppc64le" },
              { name: "linux-s390x" },
              { name: "linux-armv6l" },
              { name: "linux-armv7l" },
              { name: "linux-aarch64" },
              { name: "win-32" },
              { name: "win-64" },
              { name: "win-arm64" },
              { name: "all" },
            ],
          },
        },
        {
          name: ["--dependencies", "-d"],
          description:
            "Additional (besides python) dependencies of the converted package",
          args: {
            name: "Dependencies",
            isOptional: true,
            isVariadic: true,
          },
        },
        {
          name: "--show-imports",
          description: "Show Python imports for compiled parts of the package",
        },
        {
          name: ["-f", "--force"],
          description:
            "Force convert, even when a package has compiled C extensions",
        },
        {
          name: ["-o", "--output-dir"],
          description:
            "Directory to write the output files. The packages will be organized in platform/ subdirectories, e.g., win-32/package-1.0-py27_0.tar.bz2",
          args: {
            name: "Output Directory",
          },
        },
        {
          name: ["-v", "--verbose"],
          description: "Print verbose output",
        },
        {
          name: "--dry-run",
          description: "Only display what would have been done",
        },
        {
          name: ["-q", "--quiet"],
          description: "Don't print as much output",
        },
      ],
    },
    {
      name: "debug",
      description: "",
      args: {},
    },
    {
      name: "develop",
      description: "",
      args: {},
    },
    {
      name: "index",
      description: "",
      args: {},
    },
    {
      name: "inspect",
      description: "",
      args: {},
    },
    {
      name: "metapackage",
      description: "",
      args: {},
    },
    {
      name: "render",
      description: "",
      args: {},
    },
    {
      name: "server",
      description: "",
      args: {},
    },
    {
      name: "skeleton",
      description: "",
      args: {},
    },
    {
      name: "verify",
      description: "",
      args: {},
    },
  ],
  options: [
    {
      name: ["-h", "--help"],
      description: "Show this help message and exit",
    },
    {
      name: ["-V", "--version"],
      description: "Show the conda version number and exit",
    },
    verboseOption,
    {
      name: "--no-plugins",
      description: "Disable all plugins that are not built into conda",
    },
    {
      name: "--disable-plugins",
      description: "Disable the listed plugins. Can be used multiple times",
      isRepeatable: true,
      args: { name: "PLUGIN[,PLUGIN...]" },
    },
    {
      name: "--enable-plugins",
      description:
        "Keep the listed plugins enabled, overriding --no-plugins and CONDA_NO_PLUGINS",
      isRepeatable: true,
      args: { name: "PLUGIN[,PLUGIN...]" },
    },
  ],
};

export default completionSpec;
