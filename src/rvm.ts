// RVM v1.29.12 (latest stable tag rvm/rvm 1.29.12, 2021-01; upstream has had no release since, 2026-11-19). Source: read statically from a shallow clone of tag 1.29.12 (help/index.txt, help/*.md, man/man1/rvm.1, scripts/cli flag parser, config/known); not run.
// Replaced the old per-command "interpreter" subcommands with real command arguments, added the commands listed in `rvm help`, dropped the unsupported --all flag.

const installedRubies: Fig.Generator = {
  script: ["rvm", "list", "strings"],
  postProcess: (output) =>
    output
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean)
      .map((name) => ({
        name,
        description: "Installed ruby",
        icon: "💎",
      })),
};

const knownRubies: Fig.Generator = {
  script: ["rvm", "list", "known_strings"],
  postProcess: (output) =>
    output
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean)
      .map((name) => ({
        name,
        description: "Known ruby",
        icon: "💎",
      })),
};

const interpreters = [
  { name: "ruby", description: "MRI/YARV Ruby (the standard Ruby)" },
  { name: "jruby", description: "JRuby" },
  { name: "truffleruby", description: "TruffleRuby" },
  { name: "rbx", description: "Rubinius" },
  { name: "ree", description: "Ruby Enterprise Edition" },
  { name: "mruby", description: "Minimalistic ruby implementation (mruby)" },
  { name: "maglev", description: "MagLev" },
  { name: "macruby", description: "MacRuby" },
  { name: "opal", description: "Opal" },
  { name: "topaz", description: "Topaz" },
  { name: "ironruby", description: "IronRuby" },
  { name: "system", description: "Use the system ruby (eg. pre-RVM state)" },
  {
    name: "default",
    description: "Use RVM set default ruby and system if it hasn't been set",
  },
];

const rubyString = (
  name = "ruby-string",
  description = "Ruby version, interpreter or alias"
): Fig.Arg => ({
  name,
  description,
  suggestions: interpreters,
  generators: installedRubies,
});

const rubyStrings: Fig.Arg = {
  ...rubyString("ruby-string", "One or more rubies to act on"),
  isVariadic: true,
};

const knownRubyString: Fig.Arg = {
  name: "ruby-string",
  description: "Ruby version or interpreter to install",
  suggestions: interpreters,
  generators: knownRubies,
};

const verifyDownloads: Fig.Option = {
  name: "--verify-downloads",
  description: "Set the download verification level",
  args: {
    name: "level",
    suggestions: [
      { name: "0", description: "Only verified allowed" },
      { name: "1", description: "Allow missing checksum" },
      { name: "2", description: "Allow failed checksum" },
    ],
  },
};

const forceOption: Fig.Option = {
  name: "--force",
  description: "Force the action and answer yes to all questions",
};

const defaultOption: Fig.Option = {
  name: "--default",
  description:
    "When used with ruby selection, sets a default ruby for new shells",
};

const levelOption: Fig.Option = {
  name: ["-l", "--level"],
  description: "MRI ruby patch level",
  args: { name: "level" },
};

const autolibsModes: Fig.Suggestion[] = [
  { name: "disable", description: "Do not do anything" },
  { name: "read-only", description: "Use available libs, ignore missing" },
  { name: "read-fail", description: "Use libs, fail if some are missing" },
  { name: "packages", description: "Use libs, install missing libs" },
  {
    name: "enable",
    description:
      "Install missing package manager (only OSX, on Linux it's like packages)",
  },
  { name: "homebrew", description: "Use Homebrew as the package manager" },
  { name: "macports", description: "Use MacPorts as the package manager" },
  { name: "fink", description: "Use Fink as the package manager" },
  { name: "smf", description: "Use SM Framework as the package manager" },
  { name: "rvm_pkg", description: "Use the old rvm pkg" },
];

const autolibsOption: Fig.Option = {
  name: "--autolibs",
  description: "Set the autolibs mode",
  requiresSeparator: true,
  args: { name: "mode", suggestions: autolibsModes },
};

const branchFlags: Fig.Option[] = ["1.8", "1.9", "2.0", "2.1"].map(
  (version) => ({
    name: [`--${version}`, `--${version.replace(".", "")}`],
    description: `Use the branch compatible with MRI ruby ${version} (rbx and jruby)`,
  })
);

const installOptions: Fig.Option[] = [
  verifyDownloads,
  {
    name: "--binary",
    description: "Force binary installation, do not try to compile ruby",
  },
  {
    name: "--disable-binary",
    description: "Do not try binary ruby, always compile",
  },
  {
    name: "--movable",
    description: "Build a ruby that can be moved to other locations",
  },
  {
    name: "--quiet-curl",
    description: "Make curl silent when fetching data",
  },
  {
    name: "--force",
    description:
      "Remove old installation with sources and force install (dirty installation using the same sources)",
  },
  {
    name: "--32",
    description: "Install 32-bit rubies",
  },
  {
    name: "--64",
    description: "Install 64-bit rubies (default)",
  },
  {
    name: "--universal",
    description: "Install both 32-bit and 64-bit rubies (OSX only)",
  },
  {
    name: ["--arch", "--archflags"],
    description: "Architectures to install",
    args: { name: "arch" },
  },
  {
    name: "--with-arch",
    description: "Architecture flag for configure (e.g. i686, x86_64)",
    requiresSeparator: true,
    args: { name: "arch" },
  },
  {
    name: "--reconfigure",
    description: "Force ./configure on install even if Makefile already exists",
  },
  {
    name: ["--patch", "--patches"],
    description:
      "Patches to apply before install (comma-separated, optionally suffixed with %prefix)",
    args: { name: "patches" },
  },
  {
    name: "--clang",
    description: "Use clang for compilation (sets CC=clang and CXX=clang++)",
  },
  {
    name: ["--disable-llvm", "--disable-jit"],
    description: "Disable LLVM",
  },
  {
    name: ["--enable-llvm", "--enable-jit"],
    description: "Enable LLVM",
  },
  {
    name: ["-C", "--configure"],
    description: "Custom configure options (comma-separated)",
    args: { name: "options" },
  },
  {
    name: ["-E", "--env"],
    description: "Environment flags for configure (comma-separated)",
    args: { name: "variables" },
  },
  {
    name: "-M",
    description: "Custom make options (comma-separated)",
    args: { name: "options" },
  },
  {
    name: "-j",
    description: "Number of parallel make jobs",
    args: { name: "jobs" },
  },
  ...branchFlags,
  {
    name: "--ree-options",
    description:
      "Options passed directly to the ree installer (comma-separated)",
    args: { name: "options" },
  },
  {
    name: "--docs",
    description: "Generate ri after installation (default)",
  },
  {
    name: "--no-docs",
    description: "Disable ri generation after installation",
  },
  {
    name: ["--rdoc", "--yard"],
    description: "Type of docs to generate (default: rdoc)",
  },
  {
    name: "--skip-gemsets",
    description: "Skip the installation of default gemsets",
  },
  {
    name: "--bin",
    description: "Path for binaries to be placed (default: ~/.rvm/bin)",
    args: { name: "path", template: "folders" },
  },
  levelOption,
  {
    name: ["--url", "--repository", "--repo"],
    description: "Git URL of the repository to install from",
    args: { name: "url" },
  },
  {
    name: "--branch",
    description: "Branch to install from",
    args: { name: "branch" },
  },
  {
    name: "--tag",
    description: "Tag to install from",
    args: { name: "tag" },
  },
  {
    name: "--sha",
    description: "SHA of the commit to install from",
    args: { name: "sha" },
  },
  {
    name: "--proxy",
    description: "Proxy options to pass to curl for downloading packages",
    args: { name: "proxy" },
  },
  {
    name: "--rubygems",
    description: "Rubygems version to install, or ignore to skip it",
    args: {
      name: "version",
      description: "Version (x.y.z, latest, latest-x.y) or ignore",
    },
  },
  autolibsOption,
];

const useOptions: Fig.Option[] = [
  defaultOption,
  {
    name: "--create",
    description: "Create the gemset if it does not already exist",
  },
  {
    name: "--rvmrc",
    description: "Create a project .rvmrc file",
  },
  {
    name: "--ruby-version",
    description: "Create a project .ruby-version file",
  },
  {
    name: "--versions-conf",
    description: "Create a project .versions.conf file",
  },
  {
    name: "--install",
    description: "Install the ruby if it is not installed",
  },
  {
    name: "--ignore-gemsets",
    description: "Ignore the gemset and set only the default gemset",
  },
  levelOption,
];

const removeOptions: Fig.Option[] = [
  {
    name: "--gems",
    description: "Also remove gems installed for the removed ruby version",
  },
];

const doOptions: Fig.Option[] = [
  {
    name: "--verbose",
    description: "Display one line details about ruby/gemset",
  },
  {
    name: "--summary",
    description:
      "Hide output and display summary of failures/success list only",
  },
  {
    name: "--yaml",
    description: "Hide output and display yaml summary only",
  },
  {
    name: "--json",
    description: "Hide output and display json summary only",
  },
];

const doCommand: Fig.Subcommand = {
  name: "do",
  description: "Execute a command against the selected rubies",
  options: [
    ...doOptions,
    {
      name: "-S",
      description: "Specify the script file to load and run",
      args: { name: "script", template: "filepaths" },
    },
  ],
  args: {
    name: "command",
    description: "Command to run",
    isCommand: true,
  },
};

const gemsetActions: Fig.Subcommand[] = [
  {
    name: "copy",
    description: "Copy the gems of a gemset to another gemset",
    args: [
      { name: "ruby-from[@gemset]", description: "Source ruby and gemset" },
      { name: "ruby-to[@gemset]", description: "Destination ruby and gemset" },
    ],
  },
  {
    name: "create",
    description: "Create gemsets",
    args: { name: "gemset", isVariadic: true },
  },
  {
    name: ["delete", "remove"],
    description: "Delete a gemset",
    args: { name: "gemset" },
  },
  { name: "dir", description: "Display the path to the current gemset" },
  { name: "empty", description: "Remove all gems from a gemset" },
  {
    name: "export",
    description: "Export the gems of the current gemset to a file",
    args: { name: "file", template: "filepaths" },
  },
  { name: "gemdir", description: "Display the path to the gem directory" },
  {
    name: "globalcache",
    description: "Manage the global gem cache for gemsets",
    args: {
      name: "action",
      suggestions: ["enable", "disable", "status"],
    },
  },
  {
    name: "import",
    description: "Import gems into the current gemset from a file",
    args: { name: "file", template: "filepaths" },
  },
  {
    name: "install",
    description: "Install a gem into every gemset",
    args: { name: "gem" },
  },
  { name: "list", description: "List the gemsets for the current ruby" },
  { name: "list_all", description: "List gemsets for all installed rubies" },
  { name: "name", description: "Show the name of the current gemset" },
  { name: "pristine", description: "Restore gems to pristine condition" },
  {
    name: ["rename", "move"],
    description: "Rename a gemset",
    args: [{ name: "old-name" }, { name: "new-name" }],
  },
  { name: "unpack", description: "Unpack the gems of the current gemset" },
  { name: "update", description: "Update the gems of the current gemset" },
  {
    name: "use",
    description: "Use the given gemset",
    args: { name: "gemset" },
  },
];

const completionSpec: Fig.Spec = {
  name: "rvm",
  description: "Ruby version manager",
  options: [
    {
      name: ["--help", "-h"],
      description: "Show help for rvm",
      isPersistent: true,
    },
    {
      name: ["--version", "-v"],
      description: "Show version of rvm",
    },
    {
      name: "--debug",
      description: "Toggle debug mode on for very verbose output",
      isPersistent: true,
    },
    {
      name: "--trace",
      description: "Toggle trace mode on to see everything rvm is doing",
      isPersistent: true,
    },
    {
      name: "--nice",
      description:
        "Process niceness (increase the value on slow computers, default 0)",
      isPersistent: true,
      args: { name: "niceness" },
    },
    defaultOption,
    forceOption,
    {
      name: "--summary",
      description: "Used with 'do' to print out a summary of the commands run",
    },
    {
      name: ["-C", "--configure"],
      description: "Custom configure options (comma-separated)",
      args: { name: "options" },
    },
  ],
  subcommands: [
    {
      name: "fetch",
      description: "Download binary or sources for the selected ruby version",
      options: [verifyDownloads],
      args: rubyString(),
    },
    {
      name: "install",
      description: "Install one or many ruby versions",
      options: installOptions,
      args: { ...knownRubyString, isVariadic: true },
    },
    {
      name: "list",
      description: "Show currently installed ruby interpreters",
      subcommands: [
        {
          name: "known",
          description: "List known rubies that can be installed",
        },
        {
          name: "remote",
          description: "List binary build rubies (no compilation needed)",
          args: {
            name: "interpreter",
            isOptional: true,
            suggestions: ["rbx", "jruby", "all"],
          },
        },
        { name: "gemsets", description: "List all rubies with their gemsets" },
        {
          name: "default",
          description: "Show the default ruby",
          args: {
            name: "string",
            description: "Use 'string' to show it in passable form",
            isOptional: true,
            suggestions: ["string"],
          },
        },
        {
          name: "rubies",
          description: "List installed rubies (default action)",
        },
        {
          name: "strings",
          description: "List installed rubies in machine passable form",
        },
        {
          name: "known_strings",
          description:
            "List known rubies that can be installed in machine passable form",
        },
        {
          name: "ruby_svn_tags",
          description: "List ruby tags available at svn.ruby-lang.org",
        },
      ],
    },
    {
      name: "mount",
      description: "Install ruby from external locations",
      options: [
        {
          name: "-n",
          description: "Name for the mounted ruby",
          args: { name: "name" },
        },
        {
          name: "-r",
          description: "Download a compiled ruby from a remote location",
        },
      ],
      args: {
        name: "path or url",
        description: "Path to a compiled ruby or URL of a ruby archive",
        template: "filepaths",
      },
    },
    {
      name: "automount",
      description: "Add a compiled ruby found on the PATH to RVM",
    },
    {
      name: "patchset",
      description: "Tools related to managing ruby patchsets",
      subcommands: [
        { name: "show", description: "Show a patchset" },
        { name: "lookup", description: "Lookup a patchset" },
      ],
    },
    {
      name: "pkg",
      description: "Install a dependency package",
      subcommands: [
        {
          name: ["install", "uninstall"],
          description: "Install or uninstall a package",
          args: {
            name: "package",
            suggestions: [
              "readline",
              "iconv",
              "curl",
              "openssl",
              "zlib",
              "autoconf",
              "ncurses",
              "pkgconfig",
              "gettext",
              "glib",
              "mono",
              "llvm",
              "libxml2",
              "libxslt",
              "libyaml",
              "epel",
            ],
          },
        },
        { name: "remove", description: "Remove all packages to start fresh" },
      ],
    },
    {
      name: "prepare",
      description: "Build your own binary ruby package",
      options: [
        {
          name: "--path",
          description: "Generate the package with paths reflecting the server",
        },
        {
          name: "-r",
          description: "Upload to the given scp server",
          args: { name: "server" },
        },
      ],
      args: { name: "ruby-version" },
    },
    {
      name: "reinstall",
      description: "Remove ruby, install it, make gems pristine",
      options: installOptions,
      args: rubyString(),
    },
    {
      name: ["remove", "delete"],
      description: "Remove one or many ruby versions, including their sources",
      options: [
        ...removeOptions,
        {
          name: "--archive",
          description: "Also remove archives",
        },
      ],
      args: {
        ...rubyStrings,
        suggestions: [
          ...interpreters,
          { name: "all", description: "Remove all rubies" },
          { name: "old", description: "Remove old rubies" },
        ],
      },
    },
    {
      name: "requirements",
      description: "Install dependencies for building ruby",
      args: rubyString(),
    },
    {
      name: "uninstall",
      description: "Uninstall one or many ruby versions, leaves their sources",
      options: removeOptions,
      args: rubyStrings,
    },
    {
      name: "upgrade",
      description:
        "Upgrade to another ruby version, migrating gems, wrappers and aliases",
      options: [forceOption],
      args: [
        rubyString("source ruby"),
        { ...rubyString("destination ruby"), isOptional: true },
      ],
    },
    {
      name: "current",
      description: "Print current ruby version and name of used gemsets",
    },
    doCommand,
    {
      name: "gemdir",
      description: "Display the path to the current gem directory ($GEM_HOME)",
    },
    {
      name: "use",
      description: "Setup current shell to use a specific ruby version",
      options: useOptions,
      args: rubyString(),
    },
    {
      name: "wrapper",
      description: "Show or regenerate wrappers for a ruby and gemset",
      subcommands: [
        {
          name: "show",
          description: "Show paths and generated wrappers",
          args: {
            name: "executable_name",
            description: "Executable such as ruby or rake",
            isOptional: true,
          },
        },
        { name: "regenerate", description: "Regenerate wrappers" },
      ],
      args: {
        name: "script",
        description: "Full path to an existing script requiring ruby",
        template: "filepaths",
        isOptional: true,
      },
    },
    {
      name: "gemset",
      description: "Manage gemsets",
      options: [forceOption],
      subcommands: gemsetActions,
    },
    {
      name: "migrate",
      description: "Migrate all gemsets from one ruby to another",
      options: [forceOption],
      args: [rubyString("from"), rubyString("to")],
    },
    {
      name: "alias",
      description: "Define aliases for `rvm use`",
      subcommands: [
        {
          name: "create",
          description: "Create an alias for a ruby",
          args: [{ name: "alias_name" }, rubyString("ruby")],
        },
        {
          name: "delete",
          description: "Delete an alias",
          args: { name: "alias_name" },
        },
        {
          name: "show",
          description: "Show the ruby an alias points to",
          args: { name: "alias_name" },
        },
        { name: "list", description: "List all aliases" },
      ],
    },
    {
      name: "autolibs",
      description: "Tweak settings for installing dependencies automatically",
      subcommands: [
        { name: "reset", description: "Reset RVM back to default mode" },
        {
          name: "status",
          description: "Display detailed information about your mode",
        },
        { name: "show", description: "Display your current mode" },
        { name: "help", description: "Display basic mode descriptions" },
      ],
      args: {
        name: "mode",
        suggestions: autolibsModes,
      },
    },
    {
      name: "group",
      description: "Manage groups in multiuser installations",
      subcommands: [
        { name: "help", description: "Show help for the group command" },
        {
          name: "add",
          description: "Add users to a group",
          args: [
            { name: "group_name" },
            { name: "user_name", isVariadic: true },
          ],
        },
        {
          name: "create",
          description: "Create a group",
          args: [
            { name: "group_name" },
            { name: "group_id", isOptional: true },
          ],
        },
      ],
    },
    {
      name: "rvmrc",
      description: "Manage .rvmrc trust and loading gemsets",
      subcommands: [
        {
          name: ["trust", "untrust", "trusted", "load", "reset"],
          description: "Change or check the trust of a .rvmrc, or load it",
          args: {
            name: "path",
            description: "Directory to check",
            isOptional: true,
            template: "folders",
          },
        },
        {
          name: "create",
          description: "Create a project rvmrc file",
          options: [
            { name: "--rvmrc", description: "Create a .rvmrc file" },
            {
              name: "--ruby-version",
              description: "Create a .ruby-version file",
            },
            {
              name: "--versions-conf",
              description: "Create a .versions.conf file",
            },
          ],
          args: { name: "ruby-version" },
        },
        {
          name: "warning",
          description: "Manage .rvmrc warnings",
          args: [
            {
              name: "action",
              suggestions: ["ignore", "reset", "list"],
            },
            {
              name: "path",
              isOptional: true,
              suggestions: ["all.rvmrcs", "allGemfiles"],
              template: "folders",
            },
          ],
        },
        {
          name: "to",
          description: "Migrate .rvmrc to another format",
          args: { name: "format", suggestions: ["ruby-version"] },
        },
      ],
    },
    {
      name: ["implode", "seppuku"],
      description: "Remove the rvm installation completely",
      options: [forceOption],
    },
    {
      name: "cleanup",
      description: "Remove stale source files and data associated with rvm",
      args: {
        name: "item",
        suggestions: [
          "all",
          "archives",
          "checksums",
          "repos",
          "sources",
          "logs",
          "gemsets",
          "links",
        ],
      },
    },
    {
      name: "cron",
      description: "Manage setup for using ruby in cron",
      subcommands: [
        { name: "setup", description: "Add ruby variables to cron" },
        { name: "remove", description: "Remove ruby variables from cron" },
        {
          name: "command",
          description: "Manage rvm on a single cron command level",
          args: [
            { name: "schedule", description: "Cron schedule" },
            { name: "command", isCommand: true },
          ],
        },
      ],
    },
    {
      name: "docs",
      description: "Tools to make installing ri and rdoc docs easier",
      subcommands: [
        {
          name: "generate",
          description: "Generate ri, rdoc and gems documentation",
        },
        { name: "generate-ri", description: "Generate ri documentation" },
        { name: "generate-rdoc", description: "Generate rdoc documentation" },
        {
          name: "generate-gems",
          description: "Generate gems documentation for the current gemset",
        },
        { name: "rdoc_data", description: "Install the rdoc-data gem" },
      ],
    },
    {
      name: "get",
      description: "Upgrade RVM to the latest head, stable or branched version",
      options: [
        {
          name: "--auto-dotfiles",
          description: "Automatically update shell profile files",
        },
        autolibsOption,
      ],
      subcommands: [
        {
          name: "stable",
          description: "Install the latest RVM stable release",
        },
        { name: "latest", description: "Install the latest RVM release" },
        {
          name: "latest-minor",
          description:
            "Install the latest minor RVM release for the currently installed version",
        },
        {
          name: ["head", "master"],
          description: "Install the latest RVM development version",
        },
        {
          name: "branch",
          description: "Install an RVM branch ([repo/]branch)",
          args: { name: "branch" },
        },
        { name: "help", description: "Show help for the get command" },
      ],
    },
    {
      name: "osx-ssl-certs",
      description: "Update the OpenSSL certificates installed by rvm on OS X",
      subcommands: [
        {
          name: ["status", "update"],
          description: "Show or update the certificates status",
          args: {
            name: "target",
            description: "Ruby, certificates path, openssl binary or all",
            isOptional: true,
          },
        },
        {
          name: "cron",
          description: "Manage the cron job for daily updates",
          args: {
            name: "action",
            isOptional: true,
            suggestions: ["status", "install", "uninstall"],
          },
        },
      ],
    },
    {
      name: "reload",
      description: "Reload RVM source itself",
    },
    {
      name: "reset",
      description: "Remove all default and system settings",
    },
    {
      name: "snapshot",
      description: "Backup or restore the rvm installation",
      subcommands: [
        {
          name: "load",
          description: "Restore a snapshot",
          args: { name: "filename", template: "filepaths" },
        },
        {
          name: "save",
          description: "Save a snapshot",
          args: { name: "filename", template: "filepaths" },
        },
      ],
    },
    {
      name: "config-get",
      description: "Display values for RbConfig::CONFIG variables",
      options: [
        {
          name: "--all",
          description: "Display all RbConfig::CONFIG variables",
        },
      ],
      args: { name: "variable-name", isOptional: true },
    },
    {
      name: "debug",
      description: "Show additional information helping to discover issues",
    },
    {
      name: "export",
      description: "Set a temporary environment variable in the current shell",
      args: { name: "variable=value" },
    },
    {
      name: "fix-permissions",
      description: "Repair broken permissions",
      args: {
        name: "target",
        description:
          "Fix for user, system, <user>, <user>:, <user>:<group> or :<group>",
        isOptional: true,
        suggestions: ["user", "system"],
      },
    },
    {
      name: "repair",
      description: "Repair parts of your environment",
      args: {
        name: "part",
        suggestions: ["symlinks", "environments", "archives", "all"],
      },
    },
    {
      name: "rubygems",
      description: "Switch the rubygems version for the current ruby",
      args: {
        name: "version",
        description:
          "Version (x.y.z, latest-x.y, latest, current, master, head) or remove",
        suggestions: ["latest", "current", "master", "head", "remove"],
      },
    },
    {
      name: "tools",
      description: "General information about the ruby environment",
      subcommands: [
        {
          name: "identifier",
          description:
            "Show the expanded ruby string for the current environment",
        },
        {
          name: "path-identifier",
          description: "Show the identifier for a directory",
          args: { name: "path", template: "folders" },
        },
        {
          name: "strings",
          description: "Expand example ruby strings",
          args: { name: "ruby-string" },
        },
        { name: "mirror", description: "Define alternate download URLs" },
        {
          name: "rvm-env",
          description: "Define shebang wrappers for selecting a ruby",
          args: { name: "command", isVariadic: true },
        },
      ],
    },
    {
      name: "unexport",
      description: "Undo changes made to the environment by `rvm export`",
      args: { name: "variable" },
    },
    {
      name: "user",
      description: "Manage RVM mixed mode in multiuser installs",
      options: [
        {
          name: "--skel",
          description: "Set the setting as default for new user accounts",
        },
      ],
      args: {
        name: "mode",
        suggestions: [
          { name: "all", description: "Use rubies and gemsets from user home" },
          { name: "gemsets", description: "Use only gemsets from user home" },
          { name: "none", description: "Restore multiuser defaults" },
        ],
      },
    },
    {
      name: "info",
      description: "Show the environment information for the current ruby",
      args: [
        {
          name: "ruby-string",
          description: "Comma-separated ruby strings",
          isOptional: true,
          generators: installedRubies,
        },
        {
          name: "section",
          description: "Comma-separated sections to show",
          isOptional: true,
          suggestions: [
            "system",
            "rvm",
            "ruby",
            "homes",
            "binaries",
            "environment",
            "debug",
          ],
        },
      ],
    },
    {
      name: "disk-usage",
      description: "Display disk space occupied by rvm",
      args: {
        name: "item",
        suggestions: [
          "all",
          "total",
          "archives",
          "docs",
          "repos",
          "sources",
          "logs",
          "pkg",
          "rubies",
          "gemsets",
          "wrappers",
          "tmp",
          "others",
        ],
      },
    },
    {
      name: "notes",
      description: "Display notes with operating system specifics",
    },
    {
      name: "version",
      description: "Display rvm version (equal to `rvm -v`)",
    },
    {
      name: "help",
      description: "Show help for a command",
      args: { name: "command", isOptional: true },
    },
    {
      name: ["all", "all-gemsets"],
      description: "Select the default (or all) gemsets of all rubies",
      options: doOptions,
      subcommands: [doCommand],
    },
    {
      name: "in",
      description: "Run a command with the ruby of a project path",
      options: doOptions,
      args: { name: "path", template: "folders" },
      subcommands: [doCommand],
    },
    ...interpreters,
  ],
};

export default completionSpec;
