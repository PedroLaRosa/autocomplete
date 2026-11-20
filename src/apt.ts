// apt v3.3.8 (Debian unstable upload 2026-11-16 per tracker.debian.org and the Homebrew apt formula, 2026-11-20).
// Source: apt 3.3.7 source tarball from the Ubuntu archive (the 3.3.8 source is not reachable from here and the
// 3.3.8 release is reported as performance and docs only): cmdline/apt.cc command table and per-command help,
// apt-private/private-cmndline.cc option tables, doc/apt.8.xml and doc/apt-get.8.xml.
// Only a user-facing subset of the shared apt-get common options is listed per command; config-only ones are left out.

import { filepaths } from "@tabsmith/autocomplete-generators";

const packages: Fig.Generator = {
  // only trigger when the token length transitions to or from 0
  trigger: (current, previous) =>
    current.length === 0 || (previous.length === 0 && current.length > 0),

  // have to use `custom` to skip running the script when length is 0
  custom: async (tokens, executeShellCommand) => {
    const finalToken = tokens[tokens.length - 1];
    if (finalToken.length === 0) {
      return [];
    }
    const { stdout } = await executeShellCommand({
      command: "apt",
      // eslint-disable-next-line @tabsmith/fig-linter/no-useless-arrays
      args: ["list"],
    });

    // Only lines matching the first character, delete characters after '/'
    return stdout
      .trim()
      .split("\n")
      .filter((name) => name.startsWith(finalToken))
      .map((name) => name.replace(/\/.*/, ""))
      .map((name) => ({
        name,
        description: "Package",
        icon: "📦",
        // make the suggestions... actually show up
        // see https://github.com/withfig/autocomplete/pull/1429#discussion_r950688126
        priority: 50,
      }));
  },
};

const installedPackages: Fig.Generator = {
  script: ["apt", "list", "--installed"],
  postProcess: function (a) {
    return a
      .trim()
      .split("\n")
      .map((b) => {
        return {
          name: b.substring(0, b.indexOf("/")),
          description: "Package",
          icon: "📦",
        };
      });
  },
};

const upgradablePackages: Fig.Generator = {
  script: ["apt", "list", "--upgradable"],
  postProcess: function (a) {
    return a
      .trim()
      .split("\n")
      .map((b) => {
        return {
          name: b.substring(0, b.indexOf("/")),
          description: "Package",
          icon: "📦",
        };
      });
  },
};

const yesNoOptions: Fig.Option[] = [
  {
    name: ["-y", "--yes", "--assume-yes"],
    description: "Assume yes to all prompts",
    exclusiveOn: ["--assume-no"],
  },
  {
    name: "--assume-no",
    description: "Assume no to all prompts",
    exclusiveOn: ["-y"],
  },
];

const installationOptions: Fig.Option[] = [
  {
    name: ["-d", "--download-only"],
    description:
      "For any operation that would download packages, download them, but do nothing else",
  },
  {
    name: "--no-download",
    description:
      "Do not download packages, attempt to use already downloaded packages",
  },
];

const simulate: Fig.Option[] = [
  {
    name: [
      "-s",
      "--simulate",
      "--just-print",
      "--dry-run",
      "--recon",
      "--no-act",
    ],
    description:
      "Simulate running this command and show its output, without actually changing anything",
  },
];

const snapshot: Fig.Option = {
  name: ["-S", "--snapshot"],
  description: "Snapshot to use, e.g. 20220102T030405Z",
  args: { name: "snapshot" },
};

const releaseOptions: Fig.Option[] = [
  {
    name: ["-t", "--target-release", "--default-release"],
    description: "Set the target release",
    args: { name: "release" },
  },
  snapshot,
];

const solverOption: Fig.Option = {
  name: "--solver",
  description: "Set the dependency solver",
  args: { name: "solver", suggestions: ["3.0", "internal"] },
};

const fixBroken: Fig.Option = {
  name: ["-f", "--fix-broken"],
  description: "Attempt to fix broken dependencies",
};

// ponytail: user-facing subset of apt-get's common options; config-only ones left out
const commonOptions: Fig.Option[] = [
  ...releaseOptions,
  {
    name: ["-m", "--fix-missing", "--ignore-missing"],
    description: "Ignore packages that cannot be retrieved",
  },
  { name: ["-u", "--show-upgraded"], description: "Show upgraded packages" },
  { name: "--ignore-hold", description: "Ignore held packages" },
  {
    name: "--only-upgrade",
    description: "Only upgrade packages that are already installed",
  },
  {
    name: "--no-upgrade",
    description:
      "Don't upgrade packages named on the command line that are already installed",
  },
  {
    name: "--no-remove",
    description: "Abort if any packages would have to be removed",
  },
  {
    name: "--mark-auto",
    description: "Mark newly installed packages as automatically installed",
  },
  {
    name: "--allow-change-held-packages",
    description: "Allow changing held packages",
  },
  {
    name: "--allow-remove-essential",
    description: "Allow removing essential packages",
  },
  { name: "--allow-downgrades", description: "Allow downgrading packages" },
  {
    name: "--allow-unauthenticated",
    description: "Allow unauthenticated packages",
  },
  {
    name: "--no-install-recommends",
    description: "Don't install recommended packages",
  },
  { name: "--install-suggests", description: "Install suggested packages" },
  { name: "--print-uris", description: "Print URIs instead of downloading" },
  { name: "--trivial-only", description: "Only perform trivial operations" },
  {
    name: "--fix-policy",
    description: "Fix broken policy dependencies",
  },
  {
    name: "--force-yes",
    description: "Force yes; use the --allow-* options instead",
    deprecated: true,
  },
];

const packageManagementOptions: Fig.Option[] = [
  ...installationOptions,
  ...yesNoOptions,
  ...simulate,
  ...commonOptions,
  fixBroken,
  solverOption,
  {
    name: ["-U", "--update"],
    description: "Update package lists before running the command",
  },
  { name: "--purge", description: "Use purge instead of remove" },
  {
    name: ["--autoremove", "--auto-remove"],
    description:
      "Also remove automatically installed packages no longer needed",
  },
  {
    name: "--reinstall",
    description: "Reinstall the package if it is already installed",
  },
  {
    name: ["-V", "--verbose-versions"],
    description: "Show verbose version information",
  },
  { name: "--show-progress", description: "Show progress information" },
  { name: "--list-columns", description: "Show package lists in columns" },
  { name: "--strict-pinning", description: "Apply strict pinning" },
  {
    name: "--planner",
    description: "Set the dependency planner",
    args: { name: "planner" },
  },
  {
    name: "--comment",
    description: "Add a comment to the history entry",
    args: { name: "comment" },
  },
];

const depResolutionOptions: Fig.Option[] = [
  ...installationOptions,
  ...yesNoOptions,
  ...simulate,
  ...commonOptions,
  fixBroken,
  solverOption,
  {
    name: ["-a", "--host-architecture"],
    description: "The architecture to build for",
    args: { name: "architecture" },
  },
  {
    name: ["-P", "--build-profiles"],
    description: "Set build profiles",
    args: { name: "profiles" },
  },
  { name: "--purge", description: "Use purge instead of remove" },
  { name: "--strict-pinning", description: "Apply strict pinning" },
];

const onlySource: Fig.Option = {
  name: "--only-source",
  description: "Only query source package names",
};

const dependencyOptions: Fig.Option[] = [
  {
    name: ["-i", "--important"],
    description: "Print only important dependencies",
  },
  { name: "--installed", description: "Print only installed dependencies" },
  { name: "--recurse", description: "Print dependencies recursively" },
  { name: "--implicit", description: "Print implicit dependencies" },
  ...[
    "pre-depends",
    "depends",
    "recommends",
    "suggests",
    "replaces",
    "breaks",
    "conflicts",
    "enhances",
  ].map((type) => ({
    name: `--no-${type}`,
    description: `Omit ${type} relations`,
  })),
];

const transactionArg: Fig.Arg = {
  name: "transaction-id",
  description: "Transaction ID, as shown by history-list",
};

const completionSpec: Fig.Spec = {
  name: "apt",
  description: "Package manager for Debian-based Linux distributions",
  subcommands: [
    {
      name: "update",
      description: "Update the package database",
      options: [
        ...yesNoOptions,
        {
          name: ["-e", "--error-on"],
          description: "Fail the update on any error, even a transient one",
          args: { name: "mode", suggestions: ["any"] },
        },
        {
          name: "--no-list-cleanup",
          description: "Don't remove obsolete list files",
        },
        {
          name: "--allow-insecure-repositories",
          description: "Allow updating from unsigned repositories",
        },
        {
          name: "--allow-weak-repositories",
          description: "Allow repositories signed with weak algorithms",
        },
        {
          name: "--allow-releaseinfo-change",
          description: "Allow changes to any Release file field",
        },
        ...[
          "origin",
          "label",
          "version",
          "codename",
          "suite",
          "defaultpin",
        ].map((field) => ({
          name: `--allow-releaseinfo-change-${field}`,
          description: `Allow changes to the ${field} Release field`,
        })),
      ],
    },
    {
      name: "upgrade",
      description: "Install all available upgrades",
      args: {
        name: "package",
        description: "Package(s) to upgrade",
        isVariadic: true,
        isOptional: true,
        generators: upgradablePackages,
      },
      options: [
        ...packageManagementOptions,
        {
          name: "--no-new-pkgs",
          description:
            "Don't install new packages to satisfy upgraded dependencies",
        },
      ],
    },
    {
      name: ["full-upgrade", "dist-upgrade"],
      description:
        "Install available upgrades, removing currently installed packages if needed to upgrade the system as a whole",
      args: {
        name: "package",
        description: "Package(s) to install before the upgrade",
        isVariadic: true,
        isOptional: true,
        generators: upgradablePackages,
      },
      options: packageManagementOptions,
    },
    {
      name: "install",
      description: "Install package(s)",
      args: {
        name: "package",
        description: "The package you want to install",
        isVariadic: true,
        generators: [packages, filepaths({ extensions: ["deb"] })],
      },
      options: packageManagementOptions,
    },
    {
      name: "reinstall",
      description: "Reinstall package(s)",
      args: {
        name: "package",
        description: "The package you want to reinstall",
        isVariadic: true,
        generators: installedPackages,
      },
      options: packageManagementOptions,
    },
    {
      name: "remove",
      description: "Remove package(s)",
      args: {
        name: "package",
        description: "The package you want to remove",
        isVariadic: true,
        generators: installedPackages,
      },
      options: packageManagementOptions,
    },
    {
      name: "purge",
      description: "Remove package(s) and their configuration files",
      args: {
        name: "package",
        description: "The package you want to purge",
        isVariadic: true,
        generators: installedPackages,
      },
      options: packageManagementOptions,
    },
    {
      name: ["autoremove", "auto-remove"],
      description: "Remove unused packages",
      options: packageManagementOptions,
    },
    {
      name: "autopurge",
      description: "Remove unused packages and their configuration files",
      options: packageManagementOptions,
    },
    {
      name: "list",
      description: "List packages",
      args: {
        name: "pattern",
        description: "Package name, glob or apt-pattern",
        isVariadic: true,
        isOptional: true,
      },
      options: [
        {
          name: ["-i", "--installed"],
          description: "List installed packages",
        },
        {
          name: ["-u", "--upgradable", "--upgradeable"],
          description: "List upgradable packages",
        },
        {
          name: "--manual-installed",
          description: "List manually installed packages",
        },
        {
          name: ["-a", "--all-versions"],
          description: "List all available versions",
        },
        {
          name: ["-v", "--verbose"],
          description: "Include the package summary",
        },
        ...releaseOptions,
      ],
    },
    {
      name: "search",
      description: "Search for packages",
      args: {
        name: "query",
        description: "The regex term(s) to search for",
        isVariadic: true,
      },
      options: [
        ...yesNoOptions,
        { name: ["-n", "--names-only"], description: "Only search names" },
        { name: ["-f", "--full"], description: "Show the full record" },
      ],
    },
    {
      name: ["show", "info"],
      description: "Show package details",
      args: {
        name: "package",
        description: "The package you want to show",
        isVariadic: true,
        generators: packages,
      },
      options: [
        { name: ["-a", "--all-versions"], description: "Show all versions" },
        { name: ["-f", "--full"], description: "Show the full record" },
        snapshot,
      ],
    },
    {
      name: "showsrc",
      description: "Show source package records",
      args: {
        name: "package",
        description: "The package you want to show source records for",
        isVariadic: true,
        generators: packages,
      },
      options: [onlySource],
    },
    {
      name: "depends",
      description: "Show the dependencies of package(s)",
      args: {
        name: "package",
        isVariadic: true,
        generators: packages,
      },
      options: dependencyOptions,
    },
    {
      name: "rdepends",
      description: "Show the reverse dependencies of package(s)",
      args: {
        name: "package",
        isVariadic: true,
        generators: packages,
      },
      options: dependencyOptions,
    },
    {
      name: "policy",
      description: "Show source priorities and package policy information",
      args: {
        name: "package",
        isVariadic: true,
        isOptional: true,
        generators: packages,
      },
    },
    {
      name: "why",
      description: "Explain why an installed package is installed",
      args: {
        name: "package",
        generators: installedPackages,
      },
    },
    {
      name: "why-not",
      description: "Explain why a package cannot be installed",
      args: {
        name: "package",
        generators: packages,
      },
    },
    {
      name: "satisfy",
      description: "Satisfy dependency strings, as used in Build-Depends",
      args: {
        name: "dependency",
        description:
          'Dependency string; prefix with "Conflicts: " to handle conflicts',
        isVariadic: true,
        generators: packages,
      },
      options: depResolutionOptions,
    },
    {
      name: "clean",
      description: "Remove downloaded package files",
      options: [...yesNoOptions, ...simulate],
    },
    {
      name: ["distclean", "dist-clean"],
      description:
        "Like clean, but also remove downloaded package lists, keeping release metadata",
      options: [...yesNoOptions, ...simulate],
    },
    {
      name: "edit-sources",
      description: "Edit the list of package sources",
      options: [...yesNoOptions],
    },
    {
      name: "modernize-sources",
      description: "Convert .list source files to the .sources format",
      options: [...yesNoOptions],
    },
    {
      name: "source",
      description: "Fetch package source files",
      args: {
        name: "package",
        description: "The package you want to get source files for",
        isVariadic: true,
        generators: packages,
      },
      options: [
        ...installationOptions,
        ...yesNoOptions,
        ...simulate,
        ...releaseOptions,
        onlySource,
        {
          name: ["-b", "--compile", "--build"],
          description:
            "Compile the package to a binary using dpkg-buildpackage",
        },
        {
          name: ["-a", "--host-architecture"],
          description: "The architecture to build for",
          args: { name: "architecture" },
        },
        {
          name: ["-P", "--build-profiles"],
          description: "Set build profiles",
          args: { name: "profiles" },
        },
        {
          name: ["--diff-only", "--debian-only"],
          description: "Download only the diff",
        },
        { name: "--tar-only", description: "Download only the tar" },
        { name: "--dsc-only", description: "Download only the dsc" },
      ],
    },
    {
      name: "build-dep",
      description:
        "Install/remove packages in an attempt to satisfy the build dependencies for a source package",
      args: {
        name: "package",
        description: "The package you want to build dependencies for",
        isVariadic: true,
        generators: packages,
      },
      options: [
        ...depResolutionOptions,
        onlySource,
        {
          name: "--arch-only",
          description: "Only process architecture-dependent build dependencies",
        },
        {
          name: "--indep-only",
          description:
            "Only process architecture-independent build dependencies",
        },
      ],
    },
    {
      name: "download",
      description: "Download package binary into the current directory",
      args: {
        name: "package",
        description: "The package you want to download",
        isVariadic: true,
        generators: packages,
      },
      options: [...installationOptions, ...yesNoOptions],
    },
    {
      name: ["autoclean", "auto-clean"],
      description:
        "Like clean, but only removes package files that can no longer be downloaded",
      options: [...installationOptions, ...yesNoOptions, ...simulate],
    },
    {
      name: "changelog",
      description: "Show the changelog for a package",
      args: {
        name: "package",
        description: "The package you want to show the changelog for",
        generators: packages,
        isVariadic: true,
      },
      options: [...installationOptions, ...yesNoOptions],
    },
    {
      name: "history-list",
      description: "List recorded package transactions",
    },
    {
      name: "history-info",
      description: "Show details of recorded package transactions",
      args: { ...transactionArg, isVariadic: true },
    },
    {
      name: "history-redo",
      description: "Reapply the changes from a recorded transaction",
      args: transactionArg,
      options: [...yesNoOptions],
    },
    {
      name: "history-undo",
      description: "Undo the changes from a recorded transaction",
      args: transactionArg,
      options: [...yesNoOptions],
    },
    {
      name: "history-rollback",
      description: "Roll back package state to a recorded transaction",
      args: transactionArg,
      options: [...yesNoOptions],
    },
    {
      name: "help",
      description: "Show help for a command",
      args: { name: "command", isOptional: true },
    },
    {
      name: "moo",
      description: "Have you mooed today?",
      hidden: true,
    },
  ],
  options: [
    {
      name: ["-h", "--help"],
      description: "Print help message and exit",
      isPersistent: true,
      priority: 40,
    },
    {
      name: ["-v", "--version"],
      description: "Print version information and exit",
      isPersistent: true,
      priority: 40,
    },
    {
      name: ["-q", "--quiet", "--silent"],
      description: "Output less information; repeat for even less",
      isPersistent: true,
      isRepeatable: 2,
    },
    {
      name: ["-c", "--config-file"],
      description: "Read a configuration file",
      isPersistent: true,
      args: { name: "file", template: "filepaths" },
    },
    {
      name: ["-o", "--option"],
      description: "Set a configuration option",
      isPersistent: true,
      isRepeatable: true,
      args: { name: "key=value" },
    },
    {
      name: "--with-source",
      description: "Use an additional, ephemeral source file",
      isPersistent: true,
      isRepeatable: true,
      args: { name: "file", template: "filepaths" },
    },
    {
      name: "--color",
      description: "Enable color output",
      isPersistent: true,
      exclusiveOn: ["--no-color"],
    },
    {
      name: "--no-color",
      description: "Disable color output",
      isPersistent: true,
      exclusiveOn: ["--color"],
    },
    {
      name: "--audit",
      description: "Show audit messages",
      isPersistent: true,
    },
    {
      name: "--cli-version",
      description: "Behave like the given apt CLI version",
      isPersistent: true,
      args: { name: "version" },
    },
  ],
};

export default completionSpec;
