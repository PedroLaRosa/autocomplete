// Bundler v4.1.0 (RubyGems.org gem bundler, released 2026-11-16, checked 2026-11-20). Source: bundler-4.1.0.gem
// downloaded and unpacked, then read statically (lib/bundler/cli.rb and cli/{config,doctor,plugin}.rb Thor
// definitions, lib/bundler/man/*.ronn man pages); the gem was not executed.
// Options flagged "(removed)" in the Thor banners (--deployment, --frozen, --path, --without, ...) are no
// longer accepted by Bundler 4 and were dropped; `bundle viz` was moved to the bundler-graph plugin.
// In `bundle add` the man page documents `-r` for --require, but Thor resolves `-r` to the global --retry
// first, so only --require is listed.

const gemfileGemsGenerator: Fig.Generator = {
  script: ["bundle", "list", "--name-only"],
  postProcess: (out) => {
    return out
      .split("\n")
      .filter((gem) => gem.trim() !== "")
      .map((gem) => {
        return {
          name: gem,
          icon: "📦",
          description: "Gem",
        };
      });
  },
};

const optionalGemsArg: Fig.Arg = {
  name: "gem",
  generators: gemfileGemsGenerator,
  isOptional: true,
  isVariadic: true,
};

const configKeys = [
  "api_request_size",
  "auto_install",
  "bin",
  "cache_all",
  "cache_all_platforms",
  "cache_path",
  "clean",
  "console",
  "cooldown",
  "credential_store",
  "default_cli_command",
  "deployment",
  "disable_checksum_validation",
  "disable_exec_load",
  "disable_local_branch_check",
  "disable_local_revision_check",
  "disable_shared_gems",
  "disable_version_check",
  "force_ruby_platform",
  "frozen",
  "gem.bundle",
  "gem.changelog",
  "gem.ci",
  "gem.coc",
  "gem.github_username",
  "gem.linter",
  "gem.mit",
  "gem.push_key",
  "gem.test",
  "gemfile",
  "global_gem_cache",
  "ignore_funding_requests",
  "ignore_messages",
  "init_gems_rb",
  "jobs",
  "keep_outdated_cache",
  "lockfile",
  "lockfile_checksums",
  "no_build_extension",
  "no_install",
  "no_install_plugin",
  "no_prune",
  "only",
  "path",
  "path.system",
  "plugins",
  "prefer_patch",
  "prune",
  "redirect",
  "retry",
  "shebang",
  "silence_deprecations",
  "silence_root_warning",
  "simulate_version",
  "ssl_ca_cert",
  "ssl_client_cert",
  "ssl_verify_mode",
  "system_bindir",
  "timeout",
  "update_requires_all_flag",
  "user_agent",
  "verbose",
  "version",
  "with",
  "without",
];

const cooldownOption: Fig.Option = {
  name: "--cooldown",
  description:
    "Only consider gem versions published at least N days ago (0 disables)",
  args: { name: "days" },
};

const gemfileOption: Fig.Option = {
  name: "--gemfile",
  description: "Use the specified gemfile instead of Gemfile",
  args: { name: "gemfile", template: "filepaths" },
};

const quietOption: Fig.Option = {
  name: "--quiet",
  description: "Only output warnings and errors",
};

const fullIndexOption: Fig.Option = {
  name: "--full-index",
  description: "Fall back to using the single-file index of all gems",
};

const forceRedownloadOption: Fig.Option = {
  name: ["--force", "--redownload"],
  description: "Force reinstalling every gem, even if already installed",
};

const jobsOption: Fig.Option = {
  name: ["--jobs", "-j"],
  description:
    "Specify the number of jobs to run in parallel (default is the number of processors)",
  args: { name: "jobs" },
};

const localOption: Fig.Option = {
  name: "--local",
  description:
    "Do not attempt to fetch gems remotely and use the gem cache instead",
};

const bundlerOption: Fig.Option = {
  name: "--bundler",
  description: "Update the locked version of bundler",
  args: { name: "version", isOptional: true },
};

const patchLevelOptions = (ifUpdating = false): Fig.Option[] => {
  const prefer = ifUpdating ? "If updating, prefer" : "Prefer";
  const names = ["--patch", "--minor", "--major"];
  return [
    {
      name: "--patch",
      description: `${prefer} updating only to next patch version`,
      exclusiveOn: names.filter((n) => n !== "--patch"),
    },
    {
      name: "--minor",
      description: `${prefer} updating only to next minor version`,
      exclusiveOn: names.filter((n) => n !== "--minor"),
    },
    {
      name: "--major",
      description: `${prefer} updating to latest major version (default)`,
      exclusiveOn: names.filter((n) => n !== "--major"),
    },
  ];
};

const preOption = (ifUpdating = false): Fig.Option => ({
  name: "--pre",
  description: `${
    ifUpdating ? "If updating, always" : "Always"
  } choose the highest allowed version, regardless of prerelease status`,
});

const strictUpdateOption = (ifUpdating = false): Fig.Option => ({
  name: "--strict",
  description: `${
    ifUpdating ? "If updating, do" : "Do"
  } not allow any gem to be updated past latest --patch | --minor | --major`,
});

const conservativeOption = (ifUpdating = false): Fig.Option => ({
  name: "--conservative",
  description: `${
    ifUpdating ? "If updating, use" : "Use"
  } bundle install conservative update behavior and do not allow shared dependencies to be updated`,
});

const exactMatchOption: Fig.Option = {
  name: "--exact-match",
  description: "Only match gems whose names exactly match the given name",
};

const doctorDiagnoseOptions: Fig.Option[] = [
  quietOption,
  {
    name: "--gemfile",
    description: "The location of the Gemfile which Bundler should use",
    args: { name: "gemfile", template: "filepaths" },
  },
];

const doctorSslOptions: Fig.Option[] = [
  {
    name: "--host",
    description: "The host to diagnose (default rubygems.org)",
    args: { name: "host" },
  },
  {
    name: "--tls-version",
    description: "The SSL/TLS version to use when running the diagnostic",
    args: { name: "version", suggestions: ["1.1", "1.2"] },
  },
  {
    name: "--verify-mode",
    description: "The mode used for certificate verification",
    args: { name: "mode", suggestions: ["peer", "none"] },
  },
];

const completionSpec: Fig.Spec = {
  name: "bundle",
  description: "Ruby Dependency Management",
  subcommands: [
    // Primary Commands
    {
      name: ["install", "i"],
      description: "Install the gems specified by the Gemfile or Gemfile.lock",
      options: [
        cooldownOption,
        forceRedownloadOption,
        fullIndexOption,
        gemfileOption,
        jobsOption,
        localOption,
        {
          name: "--lockfile",
          description: "Use the specified lockfile instead of the default",
          args: { name: "lockfile", template: "filepaths" },
        },
        {
          name: "--prefer-local",
          description:
            "Only attempt to fetch gems remotely if not present locally, even if newer versions are available remotely",
        },
        {
          name: "--no-cache",
          description: "Do not update the cache in vendor/cache",
        },
        { name: "--no-lock", description: "Do not create a lockfile" },
        quietOption,
        {
          name: "--standalone",
          description:
            "Make a bundle that can work without depending on Rubygems or Bundler at runtime",
          args: { name: "group", isOptional: true, isVariadic: true },
        },
        {
          name: "--target-rbconfig",
          description: "Path to rbconfig.rb for the deployment target platform",
          args: { name: "rbconfig", template: "filepaths" },
        },
        {
          name: "--trust-policy",
          description: "Apply the Rubygems security policy",
          args: {
            name: "policy",
            suggestions: [
              "HighSecurity",
              "MediumSecurity",
              "LowSecurity",
              "AlmostNoSecurity",
              "NoSecurity",
            ],
          },
        },
      ],
    },
    {
      name: "update",
      description: "Update dependencies to their latest versions",
      args: optionalGemsArg,
      options: [
        {
          name: "--all",
          description: "Update all gems specified in Gemfile",
        },
        {
          name: ["--group", "-g"],
          description: "Only update the gems in the specified group",
          args: { name: "group", isVariadic: true },
        },
        {
          name: "--source",
          description: "The name of a :git or :path source used in the Gemfile",
          args: { name: "source", isVariadic: true },
        },
        localOption,
        {
          name: "--ruby",
          description:
            "Update the locked version of Ruby to the current version of Ruby",
        },
        bundlerOption,
        cooldownOption,
        fullIndexOption,
        gemfileOption,
        jobsOption,
        quietOption,
        forceRedownloadOption,
        ...patchLevelOptions(),
        preOption(),
        strictUpdateOption(),
        conservativeOption(),
      ],
    },
    {
      name: ["cache", "package", "pack"],
      description:
        "Package the .gem files required by your application into the vendor/cache directory",
      options: [
        {
          name: "--all-platforms",
          description:
            "Include gems for all platforms present in the lockfile, not only the current one",
        },
        {
          name: "--cache-path",
          description:
            "Specify a different cache path than the default (vendor/cache)",
          args: { name: "path", template: "folders" },
        },
        cooldownOption,
        gemfileOption,
        {
          name: "--no-install",
          description: "Do not install the gems, only update the cache",
        },
        quietOption,
      ],
    },
    {
      name: ["exec", "e", "ex", "exe"],
      description: "Execute a command in the context of the bundle",
      options: [
        gemfileOption,
        {
          name: "--keep-file-descriptors",
          description:
            "Has no effect, all file descriptors are always passed to the new process",
          deprecated: true,
        },
      ],
      args: { name: "command", isCommand: true },
    },
    {
      name: "config",
      description: "Retrieve or set a configuration value",
      options: [
        {
          name: "--parseable",
          description: "Use minimal formatting for more parseable output",
          isPersistent: true,
        },
      ],
      subcommands: [
        {
          name: "list",
          description: "List out all configured settings",
        },
        {
          name: "get",
          description: "Return the value for the given key",
          args: { name: "name", suggestions: configKeys },
        },
        {
          name: "set",
          description: "Set the given value for the given key",
          options: [
            {
              name: "--global",
              description: "Only change the global config",
              exclusiveOn: ["--local"],
            },
            {
              name: "--local",
              description: "Only change the local config",
              exclusiveOn: ["--global"],
            },
          ],
          args: [{ name: "name", suggestions: configKeys }, { name: "value" }],
        },
        {
          name: "unset",
          description: "Unset the value for the given key",
          options: [
            {
              name: "--global",
              description: "Only change the global config",
              exclusiveOn: ["--local"],
            },
            {
              name: "--local",
              description: "Only change the local config",
              exclusiveOn: ["--global"],
            },
          ],
          args: { name: "name", suggestions: configKeys },
        },
      ],
    },
    {
      name: "help",
      description: "Display detailed help for each subcommand",
      args: {
        name: "command",
        isOptional: true,
        suggestions: [
          "add",
          "binstubs",
          "cache",
          "check",
          "clean",
          "config",
          "console",
          "doctor",
          "env",
          "exec",
          "fund",
          "gem",
          "gemfile",
          "info",
          "init",
          "install",
          "issue",
          "licenses",
          "list",
          "lock",
          "open",
          "outdated",
          "platform",
          "plugin",
          "pristine",
          "remove",
          "show",
          "update",
          "version",
        ],
      },
    },

    // Utility Commands
    {
      name: "add",
      description: "Add gem to the Gemfile and run bundle install",
      args: { name: "gem", isVariadic: true },
      options: [
        {
          name: ["--version", "-v"],
          description: "Specify version requirements (comma separated)",
          args: { name: "version" },
        },
        {
          name: ["--group", "-g"],
          description:
            "Specify the group(s) for the added gem (comma separated)",
          args: { name: "group" },
        },
        {
          name: ["--source", "-s"],
          description: "Specify the source",
          args: { name: "source" },
        },
        {
          name: "--require",
          description:
            "Add require path to gem, provide false or a path as a string",
          args: { name: "require" },
        },
        {
          name: "--path",
          description: "Specify the file system path for the added gem",
          args: { name: "path", template: "folders" },
        },
        {
          name: "--git",
          description: "Specify the git source for the added gem",
          args: { name: "url" },
          exclusiveOn: ["--github"],
        },
        {
          name: "--github",
          description: "Specify the GitHub source for the added gem",
          args: { name: "repository" },
          exclusiveOn: ["--git"],
        },
        {
          name: "--branch",
          description: "Specify the git branch for the added gem",
          args: { name: "branch" },
          exclusiveOn: ["--ref"],
        },
        {
          name: "--ref",
          description: "Specify the git ref for the added gem",
          args: { name: "ref" },
          exclusiveOn: ["--branch"],
        },
        {
          name: "--glob",
          description:
            "The location of a dependency's .gemspec, expanded within Ruby (single quotes recommended)",
          args: { name: "glob" },
        },
        quietOption,
        {
          name: "--skip-install",
          description: "Add the gem to the Gemfile but do not install it",
        },
        {
          name: "--optimistic",
          description: "Ignored (now default behavior)",
          deprecated: true,
        },
        {
          name: "--pessimistic",
          description: "Add pessimistic declaration of version",
          exclusiveOn: ["--strict"],
        },
        {
          name: "--strict",
          description: "Add strict declaration of version",
          exclusiveOn: ["--pessimistic"],
        },
        cooldownOption,
      ],
    },
    {
      name: "binstubs",
      description: "Install the binstubs of the listed gems",
      args: { ...optionalGemsArg, name: "gems" },
      options: [
        {
          name: "--force",
          description: "Overwrite existing binstubs if they exist",
        },
        {
          name: "--shebang",
          description:
            "Specify a different shebang executable name than the default (usually ruby)",
          args: { name: "shebang" },
        },
        {
          name: "--standalone",
          description:
            "Make binstubs that can work without depending on Rubygems or Bundler at runtime",
        },
        {
          name: "--all",
          description: "Install binstubs for all gems",
        },
        {
          name: "--all-platforms",
          description: "Install binstubs for all platforms",
        },
      ],
    },
    {
      name: ["check", "c"],
      description:
        "Determine whether the requirements for your application are installed and available to Bundler",
      options: [
        {
          name: "--dry-run",
          description: "Lock the Gemfile before running the command",
        },
        gemfileOption,
      ],
    },
    {
      name: "show",
      description: "Show the source location of a particular gem in the bundle",
      args: {
        name: "gem",
        generators: gemfileGemsGenerator,
        isOptional: true,
      },
      options: [
        {
          name: "--paths",
          description:
            "List the paths of all gems that are required by your Gemfile",
        },
        exactMatchOption,
      ],
    },
    {
      name: "info",
      description: "Show information for the given gem in your bundle",
      args: { name: "gem", generators: gemfileGemsGenerator },
      options: [
        { name: "--path", description: "Print full path to gem" },
        { name: "--version", description: "Print gem version" },
        exactMatchOption,
      ],
    },
    {
      name: ["list", "ls"],
      description: "List all the gems in the bundle",
      options: [
        {
          name: "--name-only",
          description: "Print only the name of each gem",
          exclusiveOn: ["--paths"],
        },
        {
          name: "--paths",
          description: "Print the path to each gem in the bundle",
          exclusiveOn: ["--name-only"],
        },
        {
          name: "--only-group",
          description: "Print gems from the given groups only",
          args: { name: "group", isVariadic: true },
          exclusiveOn: ["--without-group"],
        },
        {
          name: "--without-group",
          description: "Print all gems except those from the given groups",
          args: { name: "group", isVariadic: true },
          exclusiveOn: ["--only-group"],
        },
        {
          name: "--format",
          description: "Format of the output",
          args: { name: "format", suggestions: ["json"] },
        },
      ],
    },
    {
      name: "licenses",
      description: "Print the license of all gems in the bundle",
    },
    {
      name: "fund",
      description: "List information about gems seeking funding assistance",
      options: [
        {
          name: ["--group", "-g"],
          description: "Fetch funding information for a specific group",
          args: { name: "group", isVariadic: true },
        },
      ],
    },
    {
      name: "outdated",
      description: "Show all of the outdated gems in the current bundle",
      args: optionalGemsArg,
      options: [
        localOption,
        { name: "--pre", description: "Check for newer pre-release gems" },
        {
          name: "--source",
          description: "Check against a specific source",
          args: { name: "source", isVariadic: true },
        },
        {
          name: ["--filter-strict", "--strict"],
          description:
            "Only list newer versions allowed by your Gemfile requirements",
        },
        {
          name: ["--parseable", "--porcelain"],
          description: "Use minimal formatting for more parseable output",
        },
        {
          name: "--group",
          description: "List gems from a specific group",
          args: { name: "group" },
        },
        { name: "--groups", description: "List gems organized by groups" },
        {
          name: "--update-strict",
          description:
            "Strict conservative resolution, do not allow any gem to be updated past latest --patch | --minor | --major",
        },
        ...patchLevelOptions(),
        {
          name: "--filter-major",
          description: "Only list major newer versions",
        },
        {
          name: "--filter-minor",
          description: "Only list minor newer versions",
        },
        {
          name: "--filter-patch",
          description: "Only list patch newer versions",
        },
        {
          name: "--only-explicit",
          description:
            "Only list gems specified in your Gemfile, not their dependencies",
        },
        cooldownOption,
      ],
    },
    {
      name: "console",
      description: "Start an IRB session in the current bundle",
      deprecated: true,
      args: {
        name: "group",
        isOptional: true,
        description: "Group whose gems are loaded in addition to the default",
      },
    },
    {
      name: "open",
      description: "Open an installed gem in the editor",
      args: {
        name: "gem",
        generators: gemfileGemsGenerator,
      },
      options: [
        {
          name: "--path",
          description: "Open the given path relative to the gem source",
          args: { name: "path" },
        },
        exactMatchOption,
      ],
    },
    {
      name: "lock",
      description: "Generate a lockfile for your dependencies",
      options: [
        {
          name: "--update",
          description:
            "Ignore the existing lockfile, update all gems by default or only the given ones",
          args: {
            name: "gem",
            generators: gemfileGemsGenerator,
            isOptional: true,
            isVariadic: true,
          },
          isRepeatable: true,
        },
        bundlerOption,
        {
          name: "--local",
          description:
            "Do not attempt to fetch remote gemspecs and use the local gem cache only",
        },
        {
          name: "--print",
          description:
            "Print the lockfile to STDOUT instead of writing to the file system",
        },
        gemfileOption,
        {
          name: "--lockfile",
          description: "The path where the lockfile should be written to",
          args: { name: "path", template: "filepaths" },
        },
        fullIndexOption,
        {
          name: "--add-checksums",
          description: "Add checksums to the lockfile",
        },
        {
          name: "--add-platform",
          description:
            "Add a new platform to the lockfile, re-resolving for the addition of that platform",
          args: { name: "platform", isVariadic: true },
          isRepeatable: true,
        },
        {
          name: "--remove-platform",
          description: "Remove a platform from the lockfile",
          args: { name: "platform", isVariadic: true },
          isRepeatable: true,
        },
        {
          name: "--normalize-platforms",
          description: "Normalize lockfile platforms",
        },
        {
          name: "--add-ruby-abi",
          description:
            "Lock the content-addressed gems of the bundle for a Ruby ABI (X.Y)",
          args: { name: "abi", isVariadic: true },
          isRepeatable: true,
        },
        {
          name: "--remove-ruby-abi",
          description:
            "Drop the content-addressed gems for a Ruby ABI (X.Y) from the lockfile",
          args: { name: "abi", isVariadic: true },
          isRepeatable: true,
        },
        ...patchLevelOptions(true),
        preOption(true),
        strictUpdateOption(true),
        conservativeOption(true),
        cooldownOption,
      ],
    },
    {
      name: "init",
      description: "Generate a simple Gemfile, placed in the current directory",
      options: [
        {
          name: "--gemspec",
          description: "Use the specified .gemspec to create the Gemfile",
          args: { name: "gemspec", template: "filepaths" },
        },
        {
          name: "--gemfile",
          description:
            "Use the specified name for the gemfile instead of Gemfile",
          args: { name: "gemfile" },
        },
      ],
    },
    {
      name: "gem",
      description: "Create a simple gem, suitable for development with Bundler",
      args: { name: "name" },
      options: [
        {
          name: ["--exe", "-b", "--bin"],
          description: "Specify that Bundler should create a binary executable",
        },
        {
          name: "--no-exe",
          description: "Do not create a binary",
        },
        {
          name: "--coc",
          description:
            "Add a CODE_OF_CONDUCT.md file to the root of the generated project",
        },
        {
          name: "--no-coc",
          description: "Do not create a CODE_OF_CONDUCT.md",
        },
        {
          name: "--changelog",
          description:
            "Add a CHANGELOG.md file to the root of the generated project",
        },
        {
          name: "--no-changelog",
          description: "Do not create a CHANGELOG.md",
        },
        {
          name: "--ext",
          description:
            "Add boilerplate for extension code to the generated project",
          args: { name: "language", suggestions: ["c", "go", "rust"] },
        },
        {
          name: "--no-ext",
          description: "Do not add extension code",
        },
        {
          name: "--git",
          description: "Initialize a git repo inside your library",
        },
        {
          name: "--no-git",
          description: "Do not initialize a git repo",
        },
        {
          name: "--github-username",
          description: "Fill in GitHub username on README",
          args: { name: "username" },
        },
        {
          name: "--mit",
          description: "Add an MIT license",
        },
        {
          name: "--no-mit",
          description: "Do not create a LICENSE.txt",
        },
        {
          name: ["-t", "--test"],
          description: "Specify the test framework that Bundler should use",
          args: {
            name: "framework",
            isOptional: true,
            suggestions: ["rspec", "minitest", "test-unit"],
          },
        },
        {
          name: "--no-test",
          description: "Do not use a test framework",
        },
        {
          name: "--ci",
          description:
            "Specify the continuous integration service to generate a configuration for",
          args: {
            name: "service",
            isOptional: true,
            suggestions: ["github", "gitlab", "circle"],
          },
        },
        {
          name: "--no-ci",
          description: "Do not use a continuous integration service",
        },
        {
          name: "--linter",
          description:
            "Add a linter and code formatter to the project's development dependencies",
          args: {
            name: "linter",
            isOptional: true,
            suggestions: ["rubocop", "standard"],
          },
        },
        {
          name: "--no-linter",
          description: "Do not add a linter",
        },
        {
          name: "--bundle",
          description: "Automatically run bundle install after creation",
        },
        {
          name: "--no-bundle",
          description: "Do not run bundle install after creation",
        },
        {
          name: ["-e", "--edit"],
          description: "Open the resulting gemspec in EDITOR",
          args: { name: "editor", isOptional: true },
        },
      ],
    },
    {
      name: "platform",
      description: "Display platform compatibility information",
      options: [
        {
          name: "--ruby",
          description:
            "Display the ruby directive information so you don't have to parse it from the Gemfile",
        },
      ],
    },
    {
      name: "clean",
      description: "Clean up unused gems in your Bundler directory",
      options: [
        {
          name: "--dry-run",
          description: "Print the changes, but do not clean the unused gems",
        },
        {
          name: "--force",
          description:
            "Force a clean even if Bundler uses globally installed gems",
        },
      ],
    },
    {
      name: "pristine",
      description: "Restore installed gems to their pristine condition",
      args: optionalGemsArg,
    },
    {
      name: "doctor",
      description: "Display warnings about common problems",
      options: [
        ...doctorDiagnoseOptions,
        {
          name: "--ssl",
          description: "Diagnose common SSL problems",
        },
      ],
      subcommands: [
        {
          name: "diagnose",
          description: "Check the bundle for common problems (default)",
          options: [
            ...doctorDiagnoseOptions,
            {
              name: "--ssl",
              description: "Diagnose common SSL problems",
            },
          ],
        },
        {
          name: "ssl",
          description: "Diagnose SSL problems",
          options: doctorSslOptions,
        },
      ],
    },
    {
      name: "env",
      description:
        "Print information about the environment Bundler is running under",
    },
    {
      name: "issue",
      description: "Learn how to report an issue in Bundler",
    },
    {
      name: "remove",
      description: "Remove gems from the Gemfile",
      args: { name: "gem", isVariadic: true },
    },
    {
      name: "plugin",
      description: "Manage Bundler plugins",
      subcommands: [
        {
          name: "install",
          description: "Install the plugin from the source",
          args: { name: "plugin", isVariadic: true },
          options: [
            {
              name: "--source",
              description:
                "URL of the RubyGems source to fetch the plugin from",
              args: { name: "url" },
            },
            {
              name: "--version",
              description: "The version of the plugin to fetch",
              args: { name: "version" },
            },
            {
              name: "--git",
              description: "URL of the git repo to fetch from",
              args: { name: "url" },
            },
            {
              name: "--branch",
              description: "The git branch to checkout",
              args: { name: "branch" },
              exclusiveOn: ["--ref"],
            },
            {
              name: "--ref",
              description: "The git revision to check out",
              args: { name: "ref" },
              exclusiveOn: ["--branch"],
            },
            {
              name: "--path",
              description: "Path of a local gem to directly use",
              args: { name: "path", template: "folders" },
            },
          ],
        },
        {
          name: "uninstall",
          description: "Uninstall the plugins",
          args: { name: "plugin", isOptional: true, isVariadic: true },
          options: [
            {
              name: "--all",
              description: "Uninstall all the installed plugins",
            },
          ],
        },
        {
          name: "list",
          description: "List the installed plugins and available commands",
        },
      ],
    },
    {
      name: "version",
      description: "Print Bundler version information",
    },
  ],
  options: [
    {
      name: "--no-color",
      description: "Print all output without color",
      isPersistent: true,
    },
    {
      name: ["--retry", "-r"],
      description:
        "Specify the number of times you wish to attempt network commands",
      args: { name: "number" },
      isPersistent: true,
    },
    {
      name: ["--verbose", "-V"],
      description: "Print out additional logging information",
      isPersistent: true,
    },
    {
      name: ["--version", "-v"],
      description: "Print Bundler version information",
    },
  ],
};

export default completionSpec;
