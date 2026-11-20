// GNU Stow v2.4.1 (git tag v2.4.1 of aspiers/stow, same as Homebrew stable; 2026-11-19).
// Source: bin/stow.in (usage() and Getopt::Long definitions in parse_options), doc/stow.texi and NEWS, read statically (binary not run).
// chkstow (bundled utility) is not covered by this spec.

const regexArg = (name: string): Fig.Arg => ({
  name,
  description: "Perl regular expression",
});

const completionSpec: Fig.Spec = {
  name: "stow",
  description: "Manage farms of symbolic links",
  args: {
    name: "package",
    description: "Package directory name inside the stow directory",
    isVariadic: true,
    isOptional: true,
    template: ["folders"],
  },
  options: [
    {
      name: ["-d", "--dir"],
      description:
        "Set the stow directory to DIR (default is $STOW_DIR if set, else the current directory). This also makes the default target directory the parent of DIR",
      args: {
        name: "DIR",
        template: ["folders"],
      },
    },
    {
      name: ["-t", "--target"],
      description:
        "Set the target directory to DIR instead of the parent of the stow directory",
      args: {
        name: "DIR",
        template: ["folders"],
      },
    },
    {
      name: ["-S", "--stow"],
      description:
        "Stow the packages that follow this option into the target directory (the default action)",
    },
    {
      name: ["-D", "--delete"],
      description:
        "Unstow the packages that follow this option from the target directory",
    },
    {
      name: ["-R", "--restow"],
      description:
        "Restow the packages that follow this option (first unstow, then stow again)",
    },
    {
      name: "--ignore",
      description: "Ignore files ending in this Perl regex",
      isRepeatable: true,
      args: regexArg("REGEX"),
    },
    {
      name: "--defer",
      description:
        "Don't stow files beginning with this Perl regex if the file is already stowed to another package",
      isRepeatable: true,
      args: regexArg("REGEX"),
    },
    {
      name: "--override",
      description:
        "Force stowing files beginning with this Perl regex if the file is already stowed to another package",
      isRepeatable: true,
      args: regexArg("REGEX"),
    },
    {
      name: "--adopt",
      description:
        "Import existing plain files from the target into the stow package, then stow them. This alters the contents of your stow directory",
      isDangerous: true,
    },
    {
      name: "--dotfiles",
      description:
        "Replace a 'dot-' prefix in package file and folder names with a period when stowing",
    },
    {
      name: "--no-folding",
      description:
        "Disable folding of newly stowed directories when stowing, and refolding of newly foldable directories when unstowing",
    },
    {
      name: ["-p", "--compat"],
      description:
        "Use the legacy algorithm for unstowing (scan the whole target tree)",
    },
    {
      name: ["-n", "--no", "--simulate"],
      description:
        "Do not perform any operations that modify the filesystem; merely show what would happen",
    },
    {
      name: ["-v", "--verbose"],
      description:
        "Send verbose output to standard error. Each use increases the verbosity by one; --verbose=N sets the level to N",
      isRepeatable: true,
      args: {
        name: "level",
        description: "Verbosity level (0 to 5, default 0)",
        isOptional: true,
        suggestions: ["0", "1", "2", "3", "4", "5"],
      },
    },
    {
      name: ["-V", "--version"],
      description: "Show Stow version number, and exit",
    },
    {
      name: ["-h", "--help"],
      description: "Show Stow command syntax, and exit",
    },
  ],
};
export default completionSpec;
