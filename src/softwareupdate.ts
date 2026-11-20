// softwareupdate (macOS built-in tool, no standalone version; man page bundled with Xcode 27.3 beta 2, 2026-11-19).
// Source: softwareupdate(8) from the keith/xcode-man-pages mirror (commit 6ddd0b2) plus the existing spec; NOT a live run on macOS.
// Added --os-only, --safari-only, --stdinpass, --user, --launch-installer, --schedule; --download now accepts labels and -a/-r;
// --full-installer-version moved under --fetch-full-installer. Options that are not in the man page (--dump-state,
// --evaluate-products, --history, --no-scan, --product-types, --products, --verbose) were kept from the previous spec, unverified.
const updatesGenerator: Fig.Generator = {
  script: ["softwareupdate", "--list"],
  postProcess: (out) => {
    return out
      .split("\n")
      .filter((line) => line.startsWith("* Label: "))
      .map((line) => {
        const name = line.substring(9);
        return {
          name: name,
          insertValue: `"${name}"`,
          description: "Available update",
        };
      });
  },
  scriptTimeout: 20000,
  cache: {
    strategy: "stale-while-revalidate",
    ttl: 1000 * 60 * 60 * 2,
  },
};

const updateLabelArg: Fig.Arg = {
  name: "label",
  isVariadic: true,
  isOptional: true,
  generators: updatesGenerator,
};

const updateSelectionOptions: Fig.Option[] = [
  {
    name: ["-a", "--all"],
    description:
      "All updates applicable to your system, including non-recommended ones",
    exclusiveOn: ["-r", "--recommended"],
  },
  {
    name: ["-r", "--recommended"],
    description: "Only updates recommended for your system",
    exclusiveOn: ["-a", "--all"],
  },
  {
    name: "--os-only",
    description: "Only macOS updates",
  },
  {
    name: "--safari-only",
    description: "Only Safari updates",
  },
];

const completionSpec: Fig.Spec = {
  name: "softwareupdate",
  description:
    "Software Update checks for new and updated versions of your software based on information about your computer and current software",
  subcommands: [
    /** Manage updates: */
    {
      name: ["-l", "--list"],
      description: "List all appropriate update labels",
    },
    {
      name: ["-d", "--download"],
      description:
        "Download the specified updates without installing them (install them later with --install or System Settings)",
      args: updateLabelArg,
      options: updateSelectionOptions,
    },
    {
      name: ["-i", "--install"],
      description: "Download and install the specified updates",
      args: updateLabelArg,
      options: [
        ...updateSelectionOptions,
        {
          name: ["-R", "--restart"],
          description:
            "Automatically restart if required to complete installation (use --force to always perform a forced reboot)",
        },
        {
          name: "--stdinpass",
          description:
            "Collect a password from stdin without interaction (Apple silicon only)",
        },
        {
          name: "--user",
          description:
            "An owner user to authorize installation (Apple silicon only)",
          args: { name: "user" },
        },
      ],
    },
    {
      name: "--list-full-installers",
      description: "List the available macOS Installers",
    },
    {
      name: "--fetch-full-installer",
      description: "Install the latest recommended macOS Installer",
      options: [
        {
          name: "--full-installer-version",
          description: "The version of macOS to install",
          args: { name: "version" },
        },
        {
          name: "--launch-installer",
          description:
            "Launch the installer automatically after it has been downloaded",
        },
      ],
    },
    {
      name: "--install-rosetta",
      description: "Install Rosetta (Apple silicon Macs only)",
    },
    {
      name: "--background",
      description: "Trigger a background check with a forced scan",
    },
    {
      name: "--schedule",
      description:
        "Return the per-machine automatic (background) check preference",
    },
    /** Other Tools: */
    {
      name: "--dump-state",
      description:
        "Log the internal state of the SU daemon to /var/log/install.log",
    },
    {
      name: "--evaluate-products",
      description:
        "Evaluate a list of product keys specified by the --products option",
    },
    {
      name: "--history",
      description:
        "Show the install history.  By default, only displays updates installed by softwareupdate",
      options: [
        {
          name: "--all",
          description:
            "Include all processes in history (including App installs)",
        },
      ],
    },
  ],
  options: [
    {
      name: "--no-scan",
      description:
        "Do not scan when listing or installing updates (use available updates previously scanned)",
      isPersistent: true,
    },
    {
      name: "--product-types",
      description:
        "Limit a scan to a particular product type only - ignoring all others",
      args: { name: "type" },
      isPersistent: true,
    },
    {
      name: "--products",
      description:
        "A comma-separated (no spaces) list of product keys to operate on",
      isPersistent: true,
    },
    {
      name: "--force",
      description:
        'Force an operation to complete. Use with --restart to always perform a forced reboot, or with --background to trigger a background scan regardless of "Automatically check" pref',
      isDangerous: true,
      isPersistent: true,
    },
    {
      name: "--agree-to-license",
      description:
        "Agree to the software license agreement without user interaction (e.g. with --install-rosetta)",
      isPersistent: true,
    },
    {
      name: "--verbose",
      description: "Enable verbose output",
      isPersistent: true,
    },
    {
      name: ["--help", "-h"],
      description: "Show help for softwareupdate",
    },
  ],
};
export default completionSpec;
