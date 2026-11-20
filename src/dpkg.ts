// dpkg v1.23.12 (latest tag of github.com/guillemj/dpkg, released 2026-11-13, 2026-11-20). Source: static read of the
// sources at tag 1.23.12 (src/main/main.c command and option tables and --help text, src/common/force.c force table,
// src/main/enquiry.c assert features, man/dpkg.pod). Cross-checked against --force-help and --assert-help of the installed
// dpkg 1.22.6. The binary built from 1.23.12 was not run. dpkg has no subcommands: every command is an option
// (-i, -r, -l, ...); the dpkg-deb and dpkg-query commands exposed by the dpkg front-end are included.

const installedPackages: Fig.Generator = {
  script: ["dpkg-query", "-W", "-f=${binary:Package}\t${binary:Summary}\n"],
  postProcess: (output) =>
    output
      .split("\n")
      .filter(Boolean)
      .map((line) => {
        const [name, description] = line.split("\t");
        return { name, description, icon: "📦" };
      }),
};

const foreignArchitectures: Fig.Generator = {
  script: ["dpkg", "--print-foreign-architectures"],
  postProcess: (output) =>
    output
      .split("\n")
      .filter(Boolean)
      .map((name) => ({ name, description: "Foreign architecture" })),
};

const forceThings: { name: string; description: string }[] = [
  { name: "all", description: "Set all force options" },
  {
    name: "security-mac",
    description: "Use MAC based security if available (on by default)",
  },
  {
    name: "downgrade",
    description: "Replace a package with a lower version (on by default)",
  },
  {
    name: "configure-any",
    description: "Configure any package which may help this one",
  },
  {
    name: "hold",
    description: "Install or remove incidental packages even when on hold",
  },
  {
    name: "not-root",
    description: "Try to (de)install things even when not root",
  },
  {
    name: "bad-path",
    description: "PATH is missing important programs, problems likely",
  },
  {
    name: "bad-verify",
    description: "Install a package even if it fails authenticity check",
  },
  {
    name: "bad-version",
    description: "Process even packages with wrong versions",
  },
  {
    name: "statoverride-add",
    description: "Overwrite an existing stat override when adding it",
  },
  {
    name: "statoverride-remove",
    description: "Ignore a missing stat override when removing it",
  },
  {
    name: "overwrite",
    description: "Overwrite a file from one package with another",
  },
  {
    name: "overwrite-diverted",
    description: "Overwrite a diverted file with an undiverted version",
  },
  {
    name: "overwrite-dir",
    description: "Overwrite one package's directory with another's file",
  },
  {
    name: "unsafe-io",
    description: "Do not perform safe I/O operations when unpacking",
  },
  {
    name: "script-chrootless",
    description: "Do not chroot into maintainer script environment",
  },
  {
    name: "confnew",
    description: "Always use the new config files, do not prompt",
  },
  {
    name: "confold",
    description: "Always use the old config files, do not prompt",
  },
  {
    name: "confdef",
    description: "Use the default option for new config files if available",
  },
  { name: "confmiss", description: "Always install missing config files" },
  {
    name: "confask",
    description: "Offer to replace config files with no new versions",
  },
  {
    name: "architecture",
    description: "Process even packages with wrong or no architecture",
  },
  {
    name: "breaks",
    description: "Install even if it would break another package",
  },
  {
    name: "conflicts",
    description: "Allow installation of conflicting packages",
  },
  {
    name: "depends",
    description: "Turn all dependency problems into warnings",
  },
  {
    name: "depends-version",
    description: "Turn dependency version problems into warnings",
  },
  {
    name: "remove-reinstreq",
    description: "Remove packages which require installation",
  },
  { name: "remove-protected", description: "Remove a protected package" },
  { name: "remove-essential", description: "Remove an essential package" },
];

const forceOptions: Fig.Option[] = forceThings.flatMap(
  ({ name, description }): Fig.Option[] => [
    {
      name: `--force-${name}`,
      description: `Force: ${description[0].toLowerCase()}${description.slice(1)}`,
      isRepeatable: true,
    },
    {
      name: `--no-force-${name}`,
      description: `Refuse: ${description[0].toLowerCase()}${description.slice(1)}`,
      isRepeatable: true,
    },
    // --refuse-downgrade is the long form of -G, defined separately
    ...(name === "downgrade"
      ? []
      : [
          {
            name: `--refuse-${name}`,
            description: `Refuse (same as --no-force-${name})`,
            isRepeatable: true,
          },
        ]),
  ]
);

const assertFeatures: { name: string; description: string }[] = [
  { name: "support-predepends", description: "The Pre-Depends field" },
  { name: "working-epoch", description: "Epochs in versions" },
  { name: "long-filenames", description: "Long filenames in .deb archives" },
  { name: "multi-conrep", description: "Multiple Conflicts and Replaces" },
  { name: "multi-arch", description: "Multi-arch fields and semantics" },
  {
    name: "versioned-provides",
    description: "Versioned relationships in the Provides field",
  },
  { name: "protected-field", description: "The Protected field" },
];

const assertOptions: Fig.Option[] = assertFeatures.map(
  ({ name, description }) => ({
    name: `--assert-${name}`,
    description: `Assert support for: ${description[0].toLowerCase()}${description.slice(1)}`,
  })
);

const validateThings = [
  { name: "pkgname", description: "Package name" },
  { name: "trigname", description: "Trigger name" },
  { name: "archname", description: "Architecture name" },
  { name: "version", description: "Version" },
];

const validateOptions: Fig.Option[] = validateThings.map(
  ({ name, description }) => ({
    name: `--validate-${name}`,
    description: `Validate a ${description[0].toLowerCase()}${description.slice(1)}'s syntax`,
    args: { name: "string" },
  })
);

const debugFlags: Fig.Suggestion[] = [
  { name: "help", description: "Show help on debugging" },
  { name: "1", description: "Generally helpful progress information" },
  { name: "2", description: "Invocation and status of maintainer scripts" },
  { name: "10", description: "Output for each file processed" },
  { name: "100", description: "Lots of output for each file processed" },
  { name: "20", description: "Output for each configuration file" },
  { name: "200", description: "Lots of output for each configuration file" },
  { name: "40", description: "Dependencies and conflicts" },
  { name: "400", description: "Lots of dependencies/conflicts output" },
  { name: "10000", description: "Trigger activation and processing" },
  { name: "20000", description: "Lots of output regarding triggers" },
  { name: "40000", description: "Silly amounts of output regarding triggers" },
  {
    name: "1000",
    description: "Lots of drivel about for example the dpkg/info directory",
  },
  { name: "2000", description: "Insane amounts of drivel" },
];

const versionOperators: Fig.Suggestion[] = [
  { name: "lt", description: "Less than (empty version is earliest)" },
  {
    name: "le",
    description: "Less than or equal, also <= (empty version is earliest)",
  },
  { name: "eq", description: "Equal, also = (empty version is earliest)" },
  { name: "ne", description: "Not equal (empty version is earliest)" },
  {
    name: "ge",
    description: "Greater than or equal, also >= (empty version is earliest)",
  },
  { name: "gt", description: "Greater than (empty version is earliest)" },
  { name: "lt-nl", description: "Less than (empty version is latest)" },
  {
    name: "le-nl",
    description: "Less than or equal (empty version is latest)",
  },
  {
    name: "ge-nl",
    description: "Greater than or equal (empty version is latest)",
  },
  { name: "gt-nl", description: "Greater than (empty version is latest)" },
  { name: "<<", description: "Strictly earlier (control file syntax)" },
  { name: ">>", description: "Strictly later (control file syntax)" },
  {
    name: "<",
    description: "Earlier or equal (obsolete, use <= or <<)",
  },
  { name: ">", description: "Later or equal (obsolete, use >= or >>)" },
];

const archiveFiles: Fig.Arg = {
  name: "package-file",
  description: "Debian package file (.deb), or a directory with --recursive",
  template: "filepaths",
  isVariadic: true,
};

const packagesOrPending: Fig.Arg = {
  name: "package",
  description: "Package name, or use --pending instead",
  generators: installedPackages,
  isVariadic: true,
  isOptional: true,
};

const completionSpec: Fig.Spec = {
  name: "dpkg",
  description: "Package manager for Debian",
  options: [
    // Commands
    {
      name: ["-i", "--install"],
      description: "Install the archives",
      args: archiveFiles,
    },
    {
      name: "--unpack",
      description: "Unpack the archives without configuring them",
      args: archiveFiles,
    },
    {
      name: "--configure",
      description: "Configure the packages",
      args: packagesOrPending,
    },
    {
      name: "--triggers-only",
      description: "Process triggers for the packages",
      args: packagesOrPending,
    },
    {
      name: ["-r", "--remove"],
      description: "Remove the packages, keeping their configuration files",
      args: packagesOrPending,
    },
    {
      name: ["-P", "--purge"],
      description: "Purge the packages, removing configuration files too",
      args: packagesOrPending,
    },
    {
      name: ["-V", "--verify"],
      description: "Verify the integrity of packages",
      args: {
        name: "package",
        generators: installedPackages,
        isVariadic: true,
        isOptional: true,
      },
    },
    {
      name: ["-C", "--audit"],
      description: "Check for broken packages",
      args: {
        name: "package",
        generators: installedPackages,
        isVariadic: true,
        isOptional: true,
      },
    },
    {
      name: ["-s", "--status"],
      description: "Show package status details",
      args: {
        name: "package",
        generators: installedPackages,
        isVariadic: true,
        isOptional: true,
      },
    },
    {
      name: ["-l", "--list"],
      description: "List packages concisely",
      args: {
        name: "pattern",
        description: "Package name pattern",
        isVariadic: true,
        isOptional: true,
      },
    },
    {
      name: ["-L", "--listfiles"],
      description: "List files owned by packages",
      args: {
        name: "package",
        generators: installedPackages,
        isVariadic: true,
      },
    },
    {
      name: ["-S", "--search"],
      description: "Find packages owning files",
      args: {
        name: "pattern",
        description: "Filename search pattern",
        template: "filepaths",
        isVariadic: true,
      },
    },
    {
      name: "--get-selections",
      description: "Get the list of package selections to stdout",
      args: {
        name: "pattern",
        description: "Package name pattern",
        isVariadic: true,
        isOptional: true,
      },
    },
    {
      name: "--set-selections",
      description: "Set package selections from stdin",
    },
    {
      name: "--clear-selections",
      description: "Deselect every non-essential package",
    },
    {
      name: ["-p", "--print-avail"],
      description: "Show available package version details",
      args: {
        name: "package",
        generators: installedPackages,
        isVariadic: true,
        isOptional: true,
      },
    },
    {
      name: ["-A", "--record-avail"],
      description: "Record the archives in the available file",
      args: archiveFiles,
    },
    {
      name: "--update-avail",
      description: "Replace available packages information",
      args: {
        name: "Packages-file",
        description: "Packages file, or - for stdin",
        template: "filepaths",
        isOptional: true,
      },
    },
    {
      name: "--merge-avail",
      description: "Merge available package information",
      args: {
        name: "Packages-file",
        description: "Packages file, or - for stdin",
        template: "filepaths",
        isOptional: true,
      },
    },
    {
      name: "--clear-avail",
      description: "Erase existing available package information",
    },
    {
      name: "--forget-old-unavail",
      description: "Obsolete no-op since dpkg 1.15.4",
      deprecated: true,
    },
    {
      name: "--yet-to-unpack",
      description:
        "Search for packages selected for installation but not installed (use dpkg-query --show instead)",
      deprecated: true,
    },
    {
      name: "--add-architecture",
      description: "Add an architecture to the list of architectures",
      args: { name: "architecture" },
    },
    {
      name: "--remove-architecture",
      description: "Remove an architecture from the list of architectures",
      args: { name: "architecture", generators: foreignArchitectures },
    },
    {
      name: "--print-architecture",
      description: "Print native dpkg architecture",
    },
    {
      name: "--print-foreign-architectures",
      description: "Print allowed foreign architectures",
    },
    ...validateOptions,
    {
      name: "--compare-versions",
      description: "Compare version numbers",
      args: [
        { name: "ver1", description: "First version" },
        {
          name: "op",
          description: "Comparison operator",
          suggestions: versionOperators,
        },
        { name: "ver2", description: "Second version" },
      ],
    },
    {
      name: "--predep-package",
      description: "Print pre-dependencies to unpack",
    },
    {
      name: "--assert-help",
      description: "Show help on assertions",
    },
    ...assertOptions,
    {
      name: "--force-help",
      description: "Show help on forcing",
    },
    {
      name: ["-?", "--help"],
      description: "Show the help message",
    },
    {
      name: "--version",
      description: "Show the version",
    },

    // dpkg-deb commands
    {
      name: ["-b", "--build"],
      description: "Build a deb package (dpkg-deb)",
      args: [
        { name: "directory", template: "folders" },
        {
          name: "archive",
          description: "Output archive file or directory",
          template: "filepaths",
          isOptional: true,
        },
      ],
    },
    {
      name: ["-c", "--contents"],
      description: "List the contents of a deb package (dpkg-deb)",
      args: { name: "archive", template: "filepaths" },
    },
    {
      name: ["-e", "--control"],
      description: "Extract control information from a package (dpkg-deb)",
      args: [
        { name: "archive", template: "filepaths" },
        { name: "directory", template: "folders", isOptional: true },
      ],
    },
    {
      name: ["-x", "--extract"],
      description: "Extract the files contained by a package (dpkg-deb)",
      args: [
        { name: "archive", template: "filepaths" },
        { name: "directory", template: "folders" },
      ],
    },
    {
      name: ["-X", "--vextract"],
      description:
        "Extract and display the filenames contained by a package (dpkg-deb)",
      args: [
        { name: "archive", template: "filepaths" },
        { name: "directory", template: "folders" },
      ],
    },
    {
      name: ["-f", "--field"],
      description: "Display control fields of a package (dpkg-deb)",
      args: [
        { name: "archive", template: "filepaths" },
        { name: "control-field", isVariadic: true, isOptional: true },
      ],
    },
    {
      name: "--ctrl-tarfile",
      description:
        "Output the control tar-file contained in a Debian package (dpkg-deb)",
      args: { name: "archive", template: "filepaths" },
    },
    {
      name: "--fsys-tarfile",
      description:
        "Output the filesystem tar-file contained by a Debian package (dpkg-deb)",
      args: { name: "archive", template: "filepaths" },
    },
    {
      name: ["-I", "--info"],
      description: "Show information about a package (dpkg-deb)",
      args: [
        { name: "archive", template: "filepaths" },
        { name: "control-file", isVariadic: true, isOptional: true },
      ],
    },

    // Options
    {
      name: ["-a", "--pending"],
      description:
        "Operate on all pending packages instead of naming them (configure, triggers-only, remove, purge)",
    },
    {
      name: ["-R", "--recursive"],
      description:
        "Handle all .deb files found in the given directories (install, unpack, record-avail)",
    },
    {
      name: ["-O", "--selected-only"],
      description: "Skip packages not selected for install or upgrade",
    },
    {
      name: ["-N", "--no-also-select"],
      description: "Ancient alias for --selected-only",
      deprecated: true,
    },
    {
      name: ["-E", "--skip-same-version"],
      description: "Skip packages with the same installed version and arch",
    },
    {
      name: ["-G", "--refuse-downgrade"],
      description: "Skip packages with an earlier version than installed",
    },
    {
      name: ["-B", "--auto-deconfigure"],
      description: "Install even if it would break some other package",
    },
    {
      name: "--triggers",
      description: "Force consequential trigger processing",
    },
    {
      name: "--no-triggers",
      description: "Skip consequential trigger processing",
    },
    {
      name: "--verify-format",
      description: "Set the output format of --verify",
      args: {
        name: "format",
        suggestions: [{ name: "rpm", description: "RPM style output" }],
      },
    },
    {
      name: "--robot",
      description: "Use machine-readable output on some commands",
    },
    {
      name: "--no-pager",
      description: "Disable the use of any pager",
    },
    {
      name: "--no-debsig",
      description: "Do not try to verify package signatures",
    },
    {
      name: "--ignore-depends",
      description: "Ignore dependencies involving the packages",
      args: {
        name: "package",
        description: "Comma-separated list of packages",
        generators: installedPackages,
      },
      isRepeatable: true,
    },
    ...forceOptions,
    {
      name: "--abort-after",
      description: "Abort after encountering this many errors",
      args: { name: "n" },
    },
    {
      name: ["--no-act", "--dry-run", "--simulate"],
      description: "Print what would be done, but perform no action",
    },
    {
      name: ["-D", "--debug"],
      description: "Enable debugging output (octal bit mask)",
      args: {
        name: "octal",
        description: "Octal flags to be OR-ed together, or help",
        suggestions: debugFlags,
      },
    },
    {
      name: "--path-exclude",
      description: "Do not install paths which match a shell pattern",
      args: { name: "pattern" },
      isRepeatable: true,
    },
    {
      name: "--path-include",
      description: "Re-include a pattern after a previous exclusion",
      args: { name: "pattern" },
      isRepeatable: true,
    },
    {
      name: "--pre-invoke",
      description: "Set a pre-invoke hook",
      args: { name: "command" },
      isRepeatable: true,
    },
    {
      name: "--post-invoke",
      description: "Set a post-invoke hook",
      args: { name: "command" },
      isRepeatable: true,
    },
    {
      name: "--status-fd",
      description: "Send status change updates to a file descriptor",
      args: { name: "n", description: "File descriptor number" },
      isRepeatable: true,
    },
    {
      name: "--status-logger",
      description: "Send status change updates to the command's stdin",
      args: { name: "command" },
      isRepeatable: true,
    },
    {
      name: "--log",
      description: "Log status changes and actions to a file",
      args: { name: "filename", template: "filepaths" },
    },
    {
      name: "--admindir",
      description: "Change the database directory",
      args: { name: "directory", template: "folders" },
    },
    {
      name: "--instdir",
      description: "Change the installation directory",
      args: { name: "directory", template: "folders" },
    },
    {
      name: "--root",
      description: "Change the root directory",
      args: { name: "directory", template: "folders" },
    },
  ],
};

export default completionSpec;
