// RubyGems v4.1.0 (rubygems-update gem on rubygems.org, released 2026-11-16, 2026-11-19). Source: read statically, not executed:
// lib/rubygems/command_manager.rb, commands/*_command.rb, the shared option modules (local_remote_options, version_option, install_update_options,
// cooldown_option, security_option, query_utils, gemcutter_utilities), command.rb (common options) and CHANGELOG.md from the rubygems-update-4.1.0 gem;
// generate_index options from the rubygems-generate_index 1.2.0 plugin gem (the command lives there now).
// mirror and server are stubs for the rubygems-mirror / rubygems-server plugin gems and take no options in core.
// Removed in 4.0: gem query, gem build -C. A short option defined by two groups is resolved by optparse in favour of the later one (-p is proxy, -h is help).

const gems: Fig.Generator = {
  trigger: () => true,
  custom: async (tokens, executeShellCommand) => {
    const searchTerm = tokens[tokens.length - 1];
    const { stdout } = await executeShellCommand({
      command: "gem",
      args: [
        "search",
        "--both",
        "--no-versions",
        "--no-details",
        "--quiet",
        "--norc",
        searchTerm,
      ],
    });
    return stdout
      .trim()
      .split("\n")
      .filter((line) => line && !line.startsWith("*"))
      .map((name) => ({ name }));
  },
};

const gemNameArg = (
  description: string,
  overrides: Partial<Fig.Arg> = {}
): Fig.Arg => ({
  name: "GEMNAME",
  description,
  generators: gems,
  debounce: true,
  ...overrides,
});

interface ToggleConfig {
  name: string;
  short?: string;
  negatedShort?: string;
  description: string;
  negatedDescription: string;
  deprecated?: boolean;
}

// Builds the pair of flags that RubyGems declares as "--[no-]name"
const toggle = ({
  name,
  short,
  negatedShort,
  description,
  negatedDescription,
  deprecated,
}: ToggleConfig): Fig.Option[] => {
  const extra = deprecated ? { deprecated: true } : {};
  return [
    {
      name: short ? [short, `--${name}`] : `--${name}`,
      description,
      exclusiveOn: [`--no-${name}`],
      ...extra,
    },
    {
      name: negatedShort ? [negatedShort, `--no-${name}`] : `--no-${name}`,
      description: negatedDescription,
      exclusiveOn: [`--${name}`],
      ...extra,
    },
  ];
};

const versionOption = (task: string): Fig.Option => ({
  name: ["-v", "--version"],
  description: `Specify version of gem to ${task}`,
  args: {
    name: "VERSION",
    description: "The version requirement of the gem",
  },
});

const platformOption = (task: string): Fig.Option => ({
  name: "--platform",
  description: `Specify the platform of gem to ${task}`,
  isRepeatable: true,
  args: {
    name: "PLATFORM",
    description: "The platform of gem",
  },
});

const rubyAbiOption = (task: string): Fig.Option => ({
  name: "--ruby-abi",
  description: `Specify the Ruby ABI of gem to ${task}`,
  args: {
    name: "RUBY_ABI",
    description: "The Ruby ABI in X.Y format, e.g. 3.4",
  },
});

const prereleaseOptions = (
  description = "Allow prerelease versions of a gem",
  negatedDescription = "Do not allow prerelease versions of a gem"
): Fig.Option[] =>
  toggle({ name: "prerelease", description, negatedDescription });

const cooldownOption: Fig.Option = {
  name: "--cooldown",
  description:
    "Do not use gem versions published within the last DAYS days (0 disables the cooldown, overriding the gemrc and Bundler settings)",
  args: {
    name: "DAYS",
    description: "The number of days",
  },
};

const hostOption = (description: string): Fig.Option => ({
  name: "--host",
  description: `${description} (e.g. https://rubygems.org)`,
  args: {
    name: "HOST",
    description: "The host",
  },
});

const keyOption: Fig.Option = {
  name: ["-k", "--key"],
  description: "Use the given API key from the credentials file",
  args: {
    name: "KEYNAME",
    description: "The API key",
  },
};

const otpOption: Fig.Option = {
  name: "--otp",
  description:
    "Digit code for multifactor authentication You can also use the environment variable GEM_HOST_OTP_CODE",
  args: {
    name: "CODE",
    description: "The GEM host otp code",
  },
};

const httpProxyOptions: Fig.Option[] = [
  {
    name: ["-p", "--http-proxy"],
    description: "Use HTTP proxy for remote operations",
    exclusiveOn: ["--no-http-proxy"],
    args: {
      name: "URL",
      description: "The URL",
      isOptional: true,
    },
  },
  {
    name: "--no-http-proxy",
    description: "Do not use HTTP proxy for remote operations",
    exclusiveOn: ["--http-proxy"],
  },
];

const bulkThresholdOption: Fig.Option = {
  name: ["-B", "--bulk-threshold"],
  description: "Threshold for switching to bulk synchronization (default 1000)",
  args: {
    name: "COUNT",
    description: "The threshold",
  },
};

const clearSourcesOption: Fig.Option = {
  name: "--clear-sources",
  description: "Clear the gem sources",
};

const sourceOption: Fig.Option = {
  name: ["-s", "--source"],
  description: "Append URL to list of remote gem sources",
  isRepeatable: true,
  args: {
    name: "URL",
    description: "The URL",
  },
};

const localRemoteOptions: Fig.Option[] = [
  {
    name: ["-l", "--local"],
    description: "Restrict operations to the LOCAL domain",
    exclusiveOn: ["--remote", "--both"],
  },
  {
    name: ["-r", "--remote"],
    description: "Restrict operations to the REMOTE domain",
    exclusiveOn: ["--local", "--both"],
  },
  {
    name: ["-b", "--both"],
    description: "Allow LOCAL and REMOTE operations",
    exclusiveOn: ["--remote", "--local"],
  },
  bulkThresholdOption,
  clearSourcesOption,
  sourceOption,
  ...httpProxyOptions,
  ...toggle({
    name: "update-sources",
    short: "-u",
    description: "Update local source cache",
    negatedDescription: "Do not update local source cache",
    deprecated: true,
  }),
];

// Options shared by list, search and info (Gem::QueryUtils)
const queryOptions = (command: string, withDetails = true): Fig.Option[] => [
  ...toggle({
    name: "installed",
    short: "-i",
    negatedShort: "-I",
    description: "Check for installed gem",
    negatedDescription: "Check for not installed gem",
  }),
  versionOption(`${command} for use with --installed`),
  ...(withDetails
    ? toggle({
        name: "details",
        short: "-d",
        description: "Display detailed information of gem(s)",
        negatedDescription: "Do not display detailed information of gem(s)",
      })
    : []),
  ...toggle({
    name: "versions",
    description: "Display gem versions",
    negatedDescription: "Display only gem names",
  }),
  {
    name: ["-a", "--all"],
    description: "Display all gem versions",
  },
  {
    name: ["-e", "--exact"],
    description: "Match the gem name exactly instead of as a REGEXP",
  },
  ...prereleaseOptions(
    "Display prerelease versions",
    "Do not display prerelease versions"
  ),
  ...localRemoteOptions,
];

const trustPolicies = [
  "NoSecurity",
  "AlmostNoSecurity",
  "LowSecurity",
  "MediumSecurity",
  "HighSecurity",
];

const trustPolicyOption: Fig.Option = {
  name: ["-P", "--trust-policy"],
  description: "Specify gem trust policy",
  args: {
    name: "POLICY",
    description: "The trust policy",
    suggestions: trustPolicies,
  },
};

// Options shared by install and update (Gem::InstallUpdateOptions)
const installUpdateOptions: Fig.Option[] = [
  {
    name: ["-i", "--install-dir"],
    description: "Gem repository directory to get installed gems",
    args: {
      name: "DIR",
      template: "folders",
    },
  },
  {
    name: ["-n", "--bindir"],
    description:
      "Directory where executables will be placed when the gem is installed",
    args: {
      name: "DIR",
      template: "folders",
    },
  },
  {
    name: ["-j", "--build-jobs"],
    description:
      "Number of jobs to pass to make when installing gems with native extensions (defaults to the number of processors, ignored on mswin or if MAKEFLAGS is set)",
    args: {
      name: "VALUE",
      description: "The number of jobs",
    },
  },
  {
    name: "--document",
    description:
      "Generate documentation for installed gems (comma-separated types, defaults to ri)",
    args: {
      name: "TYPES",
      suggestions: ["rdoc", "ri"],
      isOptional: true,
    },
  },
  {
    name: "--build-root",
    description:
      "Temporary installation root. Useful for building packages. Do not use this when installing remote gems",
    args: {
      name: "DIR",
      template: "folders",
    },
  },
  {
    name: "--vendor",
    description:
      "Install gem into the vendor directory. Only for use by gem repackagers",
  },
  {
    name: ["-N", "--no-document"],
    description: "Disable documentation generation",
  },
  ...toggle({
    name: "env-shebang",
    short: "-E",
    description:
      "Rewrite the shebang line on installed scripts to use /usr/bin/env",
    negatedDescription:
      "Do not rewrite the shebang line on installed scripts to use /usr/bin/env",
  }),
  ...toggle({
    name: "force",
    short: "-f",
    description: "Force gem to install, bypassing dependency checks",
    negatedDescription: "Do not force gem to install",
  }),
  ...toggle({
    name: "wrappers",
    short: "-w",
    description:
      "Use bin wrappers for executables. Not available on dosish platforms",
    negatedDescription: "Do not use bin wrappers for executables",
  }),
  trustPolicyOption,
  {
    name: "--ignore-dependencies",
    description: "Do not install any required dependent gems",
  },
  ...toggle({
    name: "format-executable",
    description: "Make installed executable names match Ruby",
    negatedDescription: "Do not make installed executable names match Ruby",
  }),
  ...toggle({
    name: "user-install",
    description: "Install in user's home directory instead of GEM_HOME",
    negatedDescription: "Install in GEM_HOME instead of user's home directory",
  }),
  {
    name: "--development",
    description: "Install additional development dependencies",
  },
  {
    name: "--development-all",
    description:
      "Install development dependencies for all gems (including dev deps themselves)",
  },
  {
    name: "--conservative",
    description:
      "Don't attempt to upgrade gems already meeting version requirement",
  },
  ...toggle({
    name: "minimal-deps",
    description:
      "Don't upgrade any dependencies that already meet version requirements",
    negatedDescription: "Upgrade dependencies even if they meet requirements",
  }),
  ...toggle({
    name: "post-install-message",
    description: "Print post install message",
    negatedDescription: "Do not print post install message",
  }),
  {
    name: ["-g", "--file"],
    description:
      "Read from a gem dependencies API file and install the listed gems",
    args: {
      name: "FILE",
      template: "filepaths",
      isOptional: true,
    },
  },
  {
    name: "--without",
    description:
      "Omit the named groups (comma separated) when installing from a gem dependencies file",
    isRepeatable: true,
    args: {
      name: "GROUPS",
    },
  },
  {
    name: "--default",
    description:
      "Add the gem's full specification to specifications/default and extract only its bin",
    deprecated: true,
  },
  {
    name: "--explain",
    description:
      "Rather than install the gems, indicate which would be installed",
  },
  ...toggle({
    name: "lock",
    description: "Create a lock file (when used with -g/--file)",
    negatedDescription: "Do not create a lock file",
  }),
  ...toggle({
    name: "suggestions",
    description: "Suggest alternates when gems are not found",
    negatedDescription: "Do not suggest alternates when gems are not found",
  }),
  {
    name: "--target-rbconfig",
    description: "The rbconfig.rb for the deployment target platform",
    args: {
      name: "FILE",
      template: "filepaths",
      isOptional: true,
    },
  },
  ...toggle({
    name: "build-extension",
    description: "Build native extensions during installation (default)",
    negatedDescription: "Do not build native extensions during installation",
  }),
  ...toggle({
    name: "install-plugin",
    description: "Install plugins during installation (default)",
    negatedDescription: "Do not install plugins during installation",
  }),
  cooldownOption,
];

const authenticationOptions = (hostDescription: string): Fig.Option[] => [
  hostOption(hostDescription),
  keyOption,
  otpOption,
];

const completionSpec: Fig.Spec = {
  name: "gem",
  description: "Ruby package manager",
  subcommands: [
    {
      name: "help",
      description: "Provide help on the 'gem' command",
      args: {
        name: "command",
        isOptional: true,
        template: "help",
        suggestions: [
          {
            name: "commands",
            description: "List all 'gem' commands",
          },
          {
            name: "options",
            description: "Show the usage and global options",
          },
          {
            name: "examples",
            description: "Show some examples of usage",
          },
          {
            name: "gem_dependencies",
            description: "Gem dependencies file guide",
          },
          {
            name: "platforms",
            description: "Gem platforms guide",
          },
        ],
      },
    },
    {
      name: ["install", "i"],
      description: "Install a gem into the local repository",
      args: gemNameArg("Name of gem to install", { isVariadic: true }),
      options: [
        platformOption("install"),
        versionOption("install"),
        ...prereleaseOptions(
          "Allow prerelease versions of a gem to be installed (only for listed gems)"
        ),
        ...localRemoteOptions,
        ...installUpdateOptions,
      ],
    },
    {
      name: "cert",
      description: "Manage RubyGems certificates and signing settings",
      options: [
        {
          name: ["-a", "--add"],
          description: "Add a trusted certificate",
          isRepeatable: true,
          args: {
            name: "CERT",
            description: "The trusted certificate",
            template: "filepaths",
          },
        },
        {
          name: ["-l", "--list"],
          description:
            "List trusted certificates where the subject contains FILTER",
          isRepeatable: true,
          args: {
            name: "FILTER",
            description: "The filter",
            isOptional: true,
          },
        },
        {
          name: ["-r", "--remove"],
          description:
            "Remove trusted certificates where the subject contains FILTER",
          isRepeatable: true,
          args: {
            name: "FILTER",
            description: "The filter",
          },
        },
        {
          name: ["-b", "--build"],
          description:
            "Build private key and self-signed certificate for EMAIL_ADDR",
          isRepeatable: true,
          args: {
            name: "EMAIL_ADDR",
            description: "The email address",
          },
        },
        {
          name: ["-C", "--certificate"],
          description: "Signing certificate for --sign",
          args: {
            name: "CERT",
            description: "The certificate",
            template: "filepaths",
          },
        },
        {
          name: ["-K", "--private-key"],
          description: "Key for --sign or --build",
          args: {
            name: "KEY",
            description: "The key",
            template: "filepaths",
          },
        },
        {
          name: ["-A", "--key-algorithm"],
          description: "Select key algorithm for --build (defaults to RSA)",
          args: {
            name: "ALGORITHM",
            description: "The algorithm",
            suggestions: [
              "RSA",
              "DSA",
              "EC",
              "ML-DSA-44",
              "ML-DSA-65",
              "ML-DSA-87",
            ],
          },
        },
        {
          name: ["-s", "--sign"],
          description:
            "Signs CERT with the key from -K and the certificate from -C",
          isRepeatable: true,
          args: {
            name: "CERT",
            description: "The certificate",
            template: "filepaths",
          },
        },
        {
          name: ["-d", "--days"],
          description: "Days before the certificate expires",
          args: {
            name: "NUMBER_OF_DAYS",
            description: "The number of days",
          },
        },
        {
          name: ["-R", "--re-sign"],
          description: "Re-signs the certificate from -C with the key from -K",
        },
      ],
    },
    {
      name: "check",
      description: "Check a gem repository for added or missing files",
      args: gemNameArg("Name of gem to check", {
        isOptional: true,
        isVariadic: true,
      }),
      options: [
        ...toggle({
          name: "alien",
          short: "-a",
          description:
            "Report 'unmanaged' or rogue files in the gem repository",
          negatedDescription:
            "Do not report 'unmanaged' or rogue files in the gem repository",
        }),
        ...toggle({
          name: "doctor",
          description: "Clean up uninstalled gems and broken specifications",
          negatedDescription:
            "Do not clean up uninstalled gems and broken specifications",
        }),
        ...toggle({
          name: "dry-run",
          description: "Do not remove files, only report what would be removed",
          negatedDescription: "Remove files",
        }),
        ...toggle({
          name: "gems",
          description: "Check installed gems for problems",
          negatedDescription: "Do not check installed gems for problems",
        }),
        versionOption("check"),
      ],
    },
    {
      name: "cleanup",
      description: "Clean up old versions of installed gems",
      args: gemNameArg("Name of gem to cleanup", {
        isOptional: true,
        isVariadic: true,
      }),
      options: [
        {
          name: ["-n", "-d", "--dry-run"],
          description: "Do not uninstall gems",
        },
        {
          name: "--dryrun",
          description: "Do not uninstall gems. Use --dry-run instead",
          deprecated: true,
        },
        ...toggle({
          name: "check-development",
          short: "-D",
          description:
            "Check development dependencies while uninstalling (default: true)",
          negatedDescription:
            "Do not check development dependencies while uninstalling",
        }),
        ...toggle({
          name: "user-install",
          description: "Cleanup in user's home directory instead of GEM_HOME",
          negatedDescription:
            "Cleanup in GEM_HOME instead of user's home directory",
        }),
      ],
    },
    {
      name: "contents",
      description: "Display the contents of the installed gems",
      args: gemNameArg("Name of gem to list contents for", {
        isVariadic: true,
      }),
      options: [
        versionOption("contents"),
        {
          name: "--all",
          description: "Contents for all gems",
        },
        {
          name: ["-s", "--spec-dir"],
          description:
            "Search for gems under specific paths (comma-separated list)",
          args: {
            name: "DIR",
            template: "folders",
          },
        },
        ...toggle({
          name: "lib-only",
          short: "-l",
          description: "Only return files in the gem's lib_dirs",
          negatedDescription: "Return all files, not only the gem's lib_dirs",
        }),
        ...toggle({
          name: "prefix",
          description: "Include installed path prefix (default)",
          negatedDescription: "Don't include installed path prefix",
        }),
        ...toggle({
          name: "show-install-dir",
          description: "Show only the gem install dir",
          negatedDescription: "Do not show only the gem install dir",
        }),
      ],
    },
    {
      name: "dependency",
      description: "Show the dependencies of an installed gem",
      args: {
        name: "REGEXP",
        description: "Show dependencies for gems whose names start with REGEXP",
        isOptional: true,
      },
      options: [
        versionOption("dependency"),
        platformOption("dependency"),
        ...prereleaseOptions(),
        ...toggle({
          name: "reverse-dependencies",
          short: "-R",
          description: "Include reverse dependencies in the output",
          negatedDescription:
            "Do not include reverse dependencies in the output",
        }),
        {
          name: "--pipe",
          description: "Pipe Format (name --version ver)",
        },
        ...localRemoteOptions,
      ],
    },
    {
      name: "environment",
      description: "Display information about the RubyGems environment",
      args: {
        suggestions: [
          {
            name: "home",
            description:
              "Display the path where gems are installed. Aliases: gemhome, gemdir, GEM_HOME",
          },
          {
            name: "path",
            description:
              "Display path used to search for gems. Aliases: gempath, GEM_PATH",
          },
          {
            name: "user_gemhome",
            description:
              "Display the path where gems are installed when --user-install is given. Aliases: user_gemdir",
          },
          {
            name: "version",
            description: "Display the gem format version",
          },
          {
            name: "remotesources",
            description: "Display the remote gem servers",
          },
          {
            name: "platform",
            description: "Display the supported gem platforms",
          },
          {
            name: "credentials",
            description: "Display the path where credentials are stored",
          },
        ],
        isOptional: true,
      },
    },
    {
      name: "exec",
      description: "Run a command from a gem",
      parserDirectives: {
        optionsMustPrecedeArguments: true,
      },
      args: [
        {
          name: "COMMAND",
          description: "The executable command to run",
        },
        {
          name: "args",
          description: "Arguments passed to the command",
          isOptional: true,
          isVariadic: true,
        },
      ],
      options: [
        sourceOption,
        versionOption("exec"),
        ...prereleaseOptions(
          "Allow prerelease versions of a gem to be installed",
          "Do not allow prerelease versions of a gem to be installed"
        ),
        {
          name: ["-g", "--gem"],
          description: "Run the executable from the given gem",
          args: {
            name: "GEM",
            description: "The gem providing the executable",
            generators: gems,
            debounce: true,
          },
        },
        {
          name: "--conservative",
          description:
            "Prefer the most recent installed version, rather than the latest version overall",
        },
      ],
    },
    {
      name: "fetch",
      description: "Download a gem and place it in the current directory",
      args: gemNameArg("Name of gem to download", { isVariadic: true }),
      options: [
        versionOption("fetch"),
        platformOption("fetch"),
        ...prereleaseOptions(),
        ...toggle({
          name: "suggestions",
          description: "Suggest alternates when gems are not found",
          negatedDescription:
            "Do not suggest alternates when gems are not found",
        }),
        bulkThresholdOption,
        sourceOption,
        clearSourcesOption,
        ...httpProxyOptions,
      ],
    },
    {
      name: "generate_index",
      description:
        "Generates the index files for a gem server directory (requires rubygems-generate_index)",
      options: [
        {
          name: ["-d", "--directory"],
          description: "Repository base dir containing gems subdir",
          args: {
            name: "DIRNAME",
            template: "folders",
            filterStrategy: "fuzzy",
          },
        },
        {
          name: "--modern",
          description: "Generate indexes for RubyGems (always true)",
          exclusiveOn: ["--no-modern"],
          deprecated: true,
        },
        {
          name: "--no-modern",
          description:
            "Do not generate indexes for RubyGems (ignored, modern indexes are always generated)",
          exclusiveOn: ["--modern"],
          deprecated: true,
        },
        ...toggle({
          name: "compact",
          description: "Generate compact index files",
          negatedDescription: "Do not generate compact index files",
        }),
        {
          name: "--update",
          description:
            "Update modern and compact indices with gems added since the last update",
        },
      ],
    },
    {
      name: "info",
      description: "Show information for the given gem",
      args: gemNameArg("Name of the gem to print information about"),
      options: queryOptions("info", false),
    },
    {
      name: "lock",
      description: "Generate a lockdown list of gems",
      args: {
        name: "GEMNAME-VERSION",
        description: "Name and the version of gem to lock, ex: rails-1.0.0",
        isVariadic: true,
      },
      options: toggle({
        name: "strict",
        short: "-s",
        description: "Fail if unable to satisfy a dependency",
        negatedDescription: "Do not fail if unable to satisfy a dependency",
      }),
    },
    {
      name: "mirror",
      description: "Mirror all gem files (requires rubygems-mirror)",
    },
    {
      name: "open",
      description: "Open gem sources in editor",
      args: gemNameArg("Name of the gem to open in editor"),
      options: [
        {
          name: ["-e", "--editor"],
          description:
            "Prepends COMMAND to gem path. Could be used to specify editor",
          args: {
            name: "COMMAND",
            description: "The prepends command to gem path",
          },
        },
        {
          name: ["-v", "--version"],
          description: "Opens specific gem version",
          args: {
            name: "VERSION",
            description: "The specify version of gem",
          },
        },
      ],
    },
    {
      name: "pristine",
      description:
        "Restores installed gems to pristine condition from files located in the gem cache",
      args: gemNameArg("Name of the gem to restore to pristine condition", {
        isOptional: true,
        isVariadic: true,
      }),
      options: [
        {
          name: "--all",
          description: "Restore all installed gems to pristine condition",
        },
        {
          name: "--skip",
          description: "Skip the named gem when used with --all",
          isRepeatable: true,
          args: gemNameArg("Name of the gem to skip", { name: "GEMNAME" }),
          dependsOn: ["--all"],
        },
        ...toggle({
          name: "extensions",
          description:
            "Restore gems with extensions in addition to regular gems",
          negatedDescription:
            "Do not restore gems with extensions in addition to regular gems",
        }),
        {
          name: "--only-missing-extensions",
          description: "Only restore gems with missing extensions",
        },
        {
          name: "--only-executables",
          description: "Only restore executables",
        },
        {
          name: "--only-plugins",
          description: "Only restore plugins",
        },
        ...toggle({
          name: "env-shebang",
          short: "-E",
          description: "Rewrite executables with a shebang of /usr/bin/env",
          negatedDescription:
            "Do not rewrite executables with a shebang of /usr/bin/env",
        }),
        {
          name: ["-i", "--install-dir"],
          description: "Gem repository to get gems restored",
          args: {
            name: "DIR",
            template: "folders",
            filterStrategy: "fuzzy",
          },
        },
        {
          name: ["-n", "--bindir"],
          description: "Directory where executables are located",
          args: {
            name: "DIR",
            template: "folders",
            filterStrategy: "fuzzy",
          },
        },
        versionOption("restore to pristine condition"),
      ],
    },
    {
      name: "rdoc",
      description: "Generates RDoc for pre-installed gems",
      args: gemNameArg("Gem to generate documentation for (unless --all)", {
        isOptional: true,
      }),
      options: [
        {
          name: "--all",
          description: "Generate RDoc/RI documentation for all installed gems",
        },
        ...toggle({
          name: "rdoc",
          description: "Generate RDoc HTML",
          negatedDescription: "Do not generate RDoc HTML",
        }),
        ...toggle({
          name: "ri",
          description: "Generate RI data",
          negatedDescription: "Do not generate RI data",
        }),
        ...toggle({
          name: "overwrite",
          description: "Overwrite installed documents",
          negatedDescription: "Do not overwrite installed documents",
        }),
        versionOption("rdoc"),
      ],
    },
    {
      name: "rebuild",
      description: "Attempt to reproduce a build of a gem",
      args: [
        {
          name: "GEM_NAME",
          description: "Gem name on gem server",
          generators: gems,
          debounce: true,
        },
        {
          name: "GEM_VERSION",
          description: "Gem version you are attempting to rebuild",
        },
      ],
      options: [
        {
          name: "--diff",
          description:
            "If the files don't match, compare them using diffoscope",
        },
        {
          name: "--force",
          description: "Skip validation of the spec",
        },
        {
          name: "--strict",
          description: "Consider warnings as errors when validating the spec",
        },
        {
          name: "--source",
          description: "Specify the source to download the gem from",
          args: {
            name: "GEM_SOURCE",
            description: "The gem source",
          },
        },
        {
          name: "--original",
          description:
            "Specify a local file to compare against (instead of downloading it)",
          args: {
            name: "GEM_FILE",
            description: "The gem file",
            template: "filepaths",
          },
        },
        {
          name: "--gemspec",
          description: "Specify the name of the gemspec file",
          args: {
            name: "GEMSPEC_FILE",
            description: "The gemspec file",
            template: "filepaths",
          },
        },
        {
          name: "-C",
          description:
            "Run as if gem build was started in PATH instead of the current working directory",
          args: {
            name: "PATH",
            description: "The path",
            template: "folders",
          },
        },
      ],
    },
    {
      name: "search",
      description: "Display remote gems whose name matches REGEXP",
      args: {
        name: "REGEXP",
        description: "Regexp to look for in gem name",
        isOptional: true,
      },
      options: queryOptions("search"),
    },
    {
      name: ["signin", "login"],
      description:
        "Sign in to any gemcutter-compatible host. It defaults to https://rubygems.org",
      options: [
        hostOption("Push to another gemcutter-compatible host"),
        otpOption,
      ],
    },
    {
      name: ["signout", "logout"],
      description: "Sign out from all the current sessions",
    },
    {
      name: "sources",
      description:
        "Manage the sources and cache file RubyGems uses to search for gems",
      options: [
        {
          name: ["-a", "--add"],
          description: "Add source",
          args: {
            name: "SOURCE_URI",
            description: "The source URI",
          },
        },
        {
          name: "--append",
          description: "Append source (can be used multiple times)",
          args: {
            name: "SOURCE_URI",
            description: "The source URI",
          },
        },
        {
          name: "--prepend",
          description: "Prepend source (can be used multiple times)",
          args: {
            name: "SOURCE_URI",
            description: "The source URI",
          },
        },
        {
          name: ["-l", "--list"],
          description: "List sources",
        },
        {
          name: ["-r", "--remove"],
          description: "Remove source",
          args: {
            name: "SOURCE_URI",
            description: "The source URI",
          },
        },
        {
          name: ["-c", "--clear-all"],
          description: "Remove all sources (clear the cache)",
        },
        {
          name: ["-u", "--update"],
          description: "Update source cache",
        },
        ...toggle({
          name: "force",
          short: "-f",
          description:
            "Do not show any confirmation prompts and behave as if 'yes' was always answered",
          negatedDescription: "Show confirmation prompts",
        }),
        ...httpProxyOptions,
      ],
    },
    {
      name: "specification",
      description: "Display gem specification (in yaml)",
      args: [
        {
          name: "GEM_OR_FILE",
          description: "Name of gem or a .gem file to show the gemspec for",
          generators: gems,
          debounce: true,
        },
        {
          name: "FIELD",
          description: "Name of gemspec field to show",
          isOptional: true,
        },
      ],
      options: [
        versionOption("examine"),
        platformOption("specification"),
        ...prereleaseOptions(),
        {
          name: "--all",
          description: "Output specifications for all versions of the gem",
        },
        {
          name: "--ruby",
          description: "Output ruby format",
        },
        {
          name: "--yaml",
          description: "Output YAML format",
        },
        {
          name: "--marshal",
          description: "Output Marshal format",
        },
        ...localRemoteOptions,
      ],
    },
    {
      name: "stale",
      description: "List gems along with access times",
    },
    {
      name: "unpack",
      description: "Unpack an installed gem to the current directory",
      args: gemNameArg("Name of gem to unpack"),
      options: [
        {
          name: "--target",
          description: "Target directory for unpacking",
          args: {
            name: "DIR",
            template: "folders",
            filterStrategy: "fuzzy",
          },
        },
        {
          name: "--spec",
          description: "Unpack the gem specification",
        },
        trustPolicyOption,
        versionOption("unpack"),
      ],
    },
    {
      name: "yank",
      description: "Remove a pushed gem from the index",
      args: gemNameArg("Name of gem", { name: "GEM" }),
      options: [
        versionOption("remove"),
        platformOption("remove"),
        rubyAbiOption("remove"),
        ...authenticationOptions("Yank from another gemcutter-compatible host"),
      ],
    },
    {
      name: "uninstall",
      description: "Uninstall gems from the local repository",
      args: gemNameArg("Name of gem to uninstall", { isVariadic: true }),
      options: [
        ...toggle({
          name: "all",
          short: "-a",
          description: "Uninstall all matching versions",
          negatedDescription: "Do not uninstall all matching versions",
        }),
        ...toggle({
          name: "ignore-dependencies",
          short: "-I",
          description: "Ignore dependency requirements while uninstalling",
          negatedDescription:
            "Do not ignore dependency requirements while uninstalling",
        }),
        ...toggle({
          name: "check-development",
          short: "-D",
          description:
            "Check development dependencies while uninstalling (default: false)",
          negatedDescription:
            "Do not check development dependencies while uninstalling",
        }),
        ...toggle({
          name: "executables",
          short: "-x",
          description: "Uninstall applicable executables without confirmation",
          negatedDescription: "Confirm before uninstalling executables",
        }),
        {
          name: ["-i", "--install-dir"],
          description: "Directory to uninstall gem from",
          args: {
            name: "DIR",
            template: "folders",
            filterStrategy: "fuzzy",
          },
        },
        {
          name: ["-n", "--bindir"],
          description: "Directory to remove executables from",
          args: {
            name: "DIR",
            template: "folders",
            filterStrategy: "fuzzy",
          },
        },
        ...toggle({
          name: "user-install",
          description:
            "Uninstall from user's home directory in addition to GEM_HOME",
          negatedDescription:
            "Do not uninstall from user's home directory in addition to GEM_HOME",
        }),
        ...toggle({
          name: "format-executable",
          description: "Assume executable names match Ruby's prefix and suffix",
          negatedDescription:
            "Do not assume executable names match Ruby's prefix and suffix",
        }),
        ...toggle({
          name: "force",
          description:
            "Uninstall all versions of the named gems ignoring dependencies",
          negatedDescription:
            "Do not uninstall all versions of the named gems ignoring dependencies",
        }),
        ...toggle({
          name: "abort-on-dependent",
          description:
            "Prevent uninstalling gems that are depended on by other gems",
          negatedDescription:
            "Allow uninstalling gems that are depended on by other gems",
        }),
        versionOption("uninstall"),
        platformOption("uninstall"),
        {
          name: "--vendor",
          description:
            "Uninstall gem from the vendor directory. Only for use by gem repackagers",
        },
      ],
    },
    {
      name: "list",
      description: "Display local gems whose name matches REGEXP",
      args: {
        name: "REGEXP",
        description: "Regexp to look for in gem name",
        isOptional: true,
        isVariadic: true,
      },
      options: queryOptions("list"),
    },
    {
      name: "build",
      description: "Build a gem from a gemspec",
      args: {
        name: "GEMSPEC_FILE",
        description: "Gemspec file name to build a gem for",
        template: "filepaths",
      },
      options: [
        platformOption("build"),
        {
          name: "--force",
          description: "Skip validation of the spec",
        },
        {
          name: "--strict",
          description: "Consider warnings as errors when validating the spec",
        },
        {
          name: ["-o", "--output"],
          description: "Output gem with the given filename",
          args: {
            name: "FILE",
            description: "The filename",
          },
        },
        rubyAbiOption("build"),
        {
          name: "--content-addressable",
          description: "Build a content-addressable gem",
        },
      ],
    },
    {
      name: "push",
      description: "Push a gem up to the gem server",
      args: {
        name: "GEM",
        description: "Built gem to push up",
        template: "filepaths",
      },
      options: [
        ...httpProxyOptions,
        keyOption,
        otpOption,
        hostOption("Push to another gemcutter-compatible host"),
        {
          name: "--platform",
          description:
            "Push a gem for a specific platform (e.g. x86_64-darwin-20)",
          args: {
            name: "PLATFORM",
            description: "The platform of gem",
          },
        },
        rubyAbiOption("push"),
        {
          name: "--attestation",
          description:
            "Push with sigstore attestations (FILE must be a JSON sigstore bundle)",
          isRepeatable: true,
          args: {
            name: "FILE",
            description: "The sigstore bundle",
            template: "filepaths",
          },
        },
      ],
    },
    {
      name: "server",
      description:
        "Starts up a web server that hosts the RDoc (requires rubygems-server)",
    },
    {
      name: "owner",
      description: "Manage gem owners of a gem on the push server",
      args: gemNameArg("Name of gem to manage owners for", { name: "GEM" }),
      options: [
        {
          name: ["-a", "--add"],
          description: "Add an owner by user identifier",
          isRepeatable: true,
          args: {
            name: "NEW_OWNER",
            description: "The new owner",
          },
        },
        {
          name: ["-r", "--remove"],
          description: "Remove an owner by user identifier",
          isRepeatable: true,
          args: {
            name: "OLD_OWNER",
            description: "The old owner",
          },
        },
        ...authenticationOptions("Use another gemcutter-compatible host"),
        ...httpProxyOptions,
      ],
    },
    {
      name: "which",
      description: "Find the location of a library file you can require",
      args: {
        name: "FILE",
        template: "filepaths",
        isVariadic: true,
      },
      options: [
        ...toggle({
          name: "all",
          short: "-a",
          description: "Show all matching files",
          negatedDescription: "Show only the first matching file",
        }),
        ...toggle({
          name: "gems-first",
          short: "-g",
          description: "Search gems before non-gems",
          negatedDescription: "Search non-gems before gems",
        }),
      ],
    },
    {
      name: "outdated",
      description: "Display all gems that need updates",
      options: [
        ...localRemoteOptions,
        platformOption("outdated"),
        cooldownOption,
      ],
    },
    {
      name: "update",
      description: "Update installed gems to the latest version",
      args: {
        name: "GEMNAME",
        description: "The gem(s) you want to update",
        isVariadic: true,
        isOptional: true,
      },
      options: [
        {
          name: "--system",
          description: "Update the RubyGems system software",
          args: {
            name: "VERSION",
            isOptional: true,
          },
        },
        ...localRemoteOptions,
        platformOption("update"),
        ...prereleaseOptions(
          "Allow prerelease versions of a gem as update targets",
          "Do not allow prerelease versions of a gem as update targets"
        ),
        ...installUpdateOptions,
      ],
    },
  ],
  options: [
    {
      name: "-C",
      description:
        "Run as if gem was started in PATH instead of the current working directory (must be the first argument)",
      args: {
        name: "PATH",
        description: "The path",
        template: "folders",
      },
    },
    {
      name: ["--help", "-h"],
      description: "Show help for gem",
      isPersistent: true,
    },
    {
      name: ["-V", "--verbose"],
      description: "Set the verbose level of output",
      exclusiveOn: ["--no-verbose"],
      isPersistent: true,
    },
    {
      name: "--no-verbose",
      description: "Do not set the verbose level of output",
      exclusiveOn: ["--verbose"],
      isPersistent: true,
    },
    {
      name: ["-q", "--quiet"],
      description: "Silence command progress meter",
      isPersistent: true,
    },
    {
      name: "--silent",
      description: "Silence RubyGems output",
      isPersistent: true,
    },
    {
      name: "--config-file",
      description: "Use this config file instead of default",
      args: {
        name: "FILE",
        description: "The config file",
        template: "filepaths",
      },
      isPersistent: true,
    },
    {
      name: "--backtrace",
      description: "Show stack backtrace on errors",
      isPersistent: true,
    },
    {
      name: "--debug",
      description: "Turn on Ruby debugging",
      isPersistent: true,
    },
    {
      name: "--norc",
      description: "Avoid loading any .gemrc file",
      isPersistent: true,
    },
    {
      name: ["-v", "--version"],
      description: "Show the gem version",
    },
  ],
};
export default completionSpec;
