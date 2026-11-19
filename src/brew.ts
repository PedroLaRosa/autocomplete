// Homebrew v7.0.15 (latest stable git tag of Homebrew/brew, 2026-11-19). Source: static read of the tagged source tree, nothing was executed:
// completions/zsh/_brew (generated from the CLI parser: commands, flags, conflicts, descriptions), Library/Homebrew/{cmd,dev-cmd,bundle,services,analytics,completions,developer}/**/*.rb
// (short flags, aliases, flag arguments, named_args) and docs/Manpage.md. Hidden, disabled and deprecated flags and the typo aliases instal/uninstal are left out;
// the commands upstream lists only when HOMEBREW_DEVELOPER is set are marked hidden. The removed `brew cask` subcommand and flags dropped upstream were deleted.

const servicesGenerator = (action: string): Fig.Generator => ({
  script: ["bash", "-c", "brew services list | sed -e 's/ .*//' | tail -n +2"],
  postProcess: function (out) {
    return out
      .split("\n")
      .filter((line) => line && !line.includes("unbound"))
      .map((line) => ({
        name: line,
        icon: "fig://icon?type=package",
        description: `${action} ${line}`,
      }));
  },
});

const repositoriesGenerator = (): Fig.Generator => ({
  script: ["brew", "tap"],
  postProcess: (out) => {
    return out
      .split("\n")
      .filter((line) => line)
      .map((line) => ({ name: line, description: "Tap" }));
  },
});

const formulaeGenerator: Fig.Generator = {
  script: ["brew", "list", "-1"],
  postProcess: function (out) {
    return out
      .split("\n")
      .filter((line) => line && !line.includes("="))
      .map((formula) => ({
        name: formula,
        icon: "🍺",
        description: "Installed formula",
      }));
  },
};

const installedFormulaeGenerator: Fig.Generator = {
  script: ["brew", "list", "--formula", "-1"],
  postProcess: function (out) {
    return out
      .split("\n")
      .filter((line) => line)
      .map((formula) => ({
        name: formula,
        icon: "🍺",
        description: "Installed formula",
      }));
  },
};

const installedCasksGenerator: Fig.Generator = {
  script: ["brew", "list", "--cask", "-1"],
  postProcess: function (out) {
    return out
      .split("\n")
      .filter((line) => line)
      .map((cask) => ({
        name: cask,
        icon: "🍺",
        description: "Installed cask",
      }));
  },
};

const outdatedformulaeGenerator: Fig.Generator = {
  script: ["brew", "outdated", "-q"],
  postProcess: function (out) {
    return out
      .split("\n")
      .filter((line) => line)
      .map((formula) => ({
        name: formula,
        icon: "🍺",
        description: "Outdated formula or cask",
      }));
  },
};

const generateAllFormulae: Fig.Generator = {
  script: ["brew", "formulae"],
  postProcess: function (out) {
    return out
      .split("\n")
      .filter((line) => line)
      .map((formula) => ({
        name: formula,
        icon: "🍺",
        description: "Formula",
        priority: 51,
      }));
  },
};

const generateAllCasks: Fig.Generator = {
  script: ["brew", "casks"],
  postProcess: function (out) {
    return out
      .split("\n")
      .filter((line) => line)
      .map((cask) => ({
        name: cask,
        icon: "🍺",
        description: "Cask",
        priority: 52,
      }));
  },
};

const generateAliases: Fig.Generator = {
  script: [
    "bash",
    "-c",
    'for d in "$HOME/.config/brew-aliases" "$HOME/.brew-aliases"; do if [ -d "$d" ]; then ls -1 "$d"; break; fi; done | grep -v "[.~]"',
  ],
  postProcess: function (out) {
    return out
      .split("\n")
      .filter((line) => line && line.trim() !== "")
      .map((line) => ({
        name: line,
        icon: "fig://icon?type=command",
        description: `Execute alias ${line}`,
      }));
  },
};

const commandsGenerator: Fig.Generator = {
  script: ["brew", "commands", "--quiet"],
  postProcess: function (out) {
    return out
      .split("\n")
      .filter((line) => line)
      .map((command) => ({
        name: command,
        icon: "fig://icon?type=command",
        description: "Homebrew command",
      }));
  },
};

const diagnosticChecksGenerator: Fig.Generator = {
  script: ["brew", "doctor", "--list-checks"],
  postProcess: function (out) {
    return out
      .split("\n")
      .filter((line) => line)
      .map((check) => ({
        name: check,
        description: "Diagnostic check",
      }));
  },
};

const infoCategoryGenerator: Fig.Generator = {
  custom: async (tokens) => {
    // Without a formula argument every category is valid, with one only the formula categories are
    const args = tokens.slice(2, -1);
    let hasNamedArg = false;
    for (let i = 0; i < args.length; i++) {
      if (args[i] === "--days" || args[i] === "--category") {
        i++; // skip the option's value
      } else if (!args[i].startsWith("-")) {
        hasNamedArg = true;
      }
    }
    const categories = ["install", "install-on-request", "build-error"];
    if (!hasNamedArg) {
      categories.push("cask-install", "os-version");
    }
    return categories.map((name) => ({ name }));
  },
};

const debugOption: Fig.Option = {
  name: ["-d", "--debug"],
  description: "Display any debugging information",
};
const quietOption: Fig.Option = {
  name: ["-q", "--quiet"],
  description: "Make some output more quiet",
};
const verboseOption: Fig.Option = {
  name: ["-v", "--verbose"],
  description: "Make some output more verbose",
};
const helpOption: Fig.Option = {
  name: ["-h", "--help"],
  description: "Show this message",
};

const commonOptions: Fig.Option[] = [
  debugOption,
  quietOption,
  verboseOption,
  helpOption,
];

const brewDebugOption: Fig.Option = {
  name: ["-d", "--debug"],
  description:
    "If brewing fails, open an interactive debugging session with access to IRB or a shell inside the temporary build directory",
};

const postInstallVerboseOption: Fig.Option = {
  name: ["-v", "--verbose"],
  description: "Print the verification and post-install steps",
};

const displayTimesOption: Fig.Option = {
  name: "--display-times",
  description:
    "Print install times for each package at the end of the run. Enabled by default if $HOMEBREW_DISPLAY_INSTALL_TIMES is set",
};

const keepTmpOption: Fig.Option = {
  name: "--keep-tmp",
  description: "Retain the temporary files created during installation",
  exclusiveOn: ["--cask"],
};

const debugSymbolsOption: Fig.Option = {
  name: "--debug-symbols",
  description:
    "Generate debug symbols on build. Source will be retained in a cache directory",
  exclusiveOn: ["--cask"],
  dependsOn: ["--build-from-source"],
};

const interactiveOption: Fig.Option = {
  name: ["-i", "--interactive"],
  description:
    "Download and patch formula, then open a shell. This allows the user to run ./configure --help and otherwise determine how to turn the software package into a Homebrew package. If formula has a fetch block, first open a shell with network access after it runs",
  exclusiveOn: ["--cask"],
};

const binariesOption: Fig.Option = {
  name: "--binaries",
  description:
    "Disable/enable linking of helper executables (default: enabled)",
  exclusiveOn: ["--formula"],
};

const noBinariesOption: Fig.Option = {
  name: "--no-binaries",
  description:
    "Disable/enable linking of helper executables (default: enabled)",
};

const requireShaOption: Fig.Option = {
  name: "--require-sha",
  description: "Require all casks to have a checksum",
  exclusiveOn: ["--formula"],
};

const skipCaskDepsOption: Fig.Option = {
  name: "--skip-cask-deps",
  description: "Skip installing cask dependencies",
  exclusiveOn: ["--formula"],
};

const appdirOption: Fig.Option = {
  name: "--appdir",
  description: "Target location for Applications (default: /Applications)",
  args: {
    name: "location",
    template: "folders",
  },
  exclusiveOn: ["--formula"],
};

const appimagedirOption: Fig.Option = {
  name: "--appimagedir",
  description: "Target location for AppImages (default: ~/Applications)",
  args: {
    name: "location",
    template: "folders",
  },
  exclusiveOn: ["--formula"],
};

const keyboardLayoutdirOption: Fig.Option = {
  name: "--keyboard-layoutdir",
  description:
    "Target location for Keyboard Layouts (default: /Library/Keyboard Layouts)",
  args: {
    name: "location",
    template: "folders",
  },
  exclusiveOn: ["--formula"],
};

const colorpickerdirOption: Fig.Option = {
  name: "--colorpickerdir",
  description:
    "Target location for Color Pickers (default: ~/Library/ColorPickers)",
  args: {
    name: "location",
    template: "folders",
  },
  exclusiveOn: ["--formula"],
};

const prefpanedirOption: Fig.Option = {
  name: "--prefpanedir",
  description:
    "Target location for Preference Panes (default: ~/Library/PreferencePanes)",
  args: {
    name: "location",
    template: "folders",
  },
  exclusiveOn: ["--formula"],
};

const qlplugindirOption: Fig.Option = {
  name: "--qlplugindir",
  description:
    "Target location for Quick Look Plugins (default: ~/Library/QuickLook)",
  args: {
    name: "location",
    template: "folders",
  },
  exclusiveOn: ["--formula"],
};

const mdimporterdirOption: Fig.Option = {
  name: "--mdimporterdir",
  description:
    "Target location for Spotlight Plugins (default: ~/Library/Spotlight)",
  args: {
    name: "location",
    template: "folders",
  },
  exclusiveOn: ["--formula"],
};

const dictionarydirOption: Fig.Option = {
  name: "--dictionarydir",
  description:
    "Target location for Dictionaries (default: ~/Library/Dictionaries)",
  args: {
    name: "location",
    template: "folders",
  },
  exclusiveOn: ["--formula"],
};

const fontdirOption: Fig.Option = {
  name: "--fontdir",
  description: "Target location for Fonts (default: ~/Library/Fonts)",
  args: {
    name: "location",
    template: "folders",
  },
  exclusiveOn: ["--formula"],
};

const servicedirOption: Fig.Option = {
  name: "--servicedir",
  description: "Target location for Services (default: ~/Library/Services)",
  args: {
    name: "location",
    template: "folders",
  },
  exclusiveOn: ["--formula"],
};

const inputMethoddirOption: Fig.Option = {
  name: "--input-methoddir",
  description:
    "Target location for Input Methods (default: ~/Library/Input Methods)",
  args: {
    name: "location",
    template: "folders",
  },
  exclusiveOn: ["--formula"],
};

const internetPlugindirOption: Fig.Option = {
  name: "--internet-plugindir",
  description:
    "Target location for Internet Plugins (default: ~/Library/Internet Plug-Ins)",
  args: {
    name: "location",
    template: "folders",
  },
  exclusiveOn: ["--formula"],
};

const audioUnitPlugindirOption: Fig.Option = {
  name: "--audio-unit-plugindir",
  description:
    "Target location for Audio Unit Plugins (default: ~/Library/Audio/Plug-Ins/Components)",
  args: {
    name: "location",
    template: "folders",
  },
  exclusiveOn: ["--formula"],
};

const vstPlugindirOption: Fig.Option = {
  name: "--vst-plugindir",
  description:
    "Target location for VST Plugins (default: ~/Library/Audio/Plug-Ins/VST)",
  args: {
    name: "location",
    template: "folders",
  },
  exclusiveOn: ["--formula"],
};

const vst3PlugindirOption: Fig.Option = {
  name: "--vst3-plugindir",
  description:
    "Target location for VST3 Plugins (default: ~/Library/Audio/Plug-Ins/VST3)",
  args: {
    name: "location",
    template: "folders",
  },
  exclusiveOn: ["--formula"],
};

const screenSaverdirOption: Fig.Option = {
  name: "--screen-saverdir",
  description:
    "Target location for Screen Savers (default: ~/Library/Screen Savers)",
  args: {
    name: "location",
    template: "folders",
  },
  exclusiveOn: ["--formula"],
};

const languageOption: Fig.Option = {
  name: "--language",
  description:
    "Comma-separated list of language codes to prefer for cask installation. The first matching language is used, otherwise it reverts to the cask's default language. The default value is the language of your system",
  args: {
    name: "language",
  },
  exclusiveOn: ["--formula"],
};

const formulaOrCaskVariadicArg: Fig.Arg = {
  name: "formula|cask",
  description: "Formula or cask",
  isVariadic: true,
  generators: [generateAllFormulae, generateAllCasks],
};

const caskOption: Fig.Option = {
  name: ["--cask", "--casks"],
  description: "Treat all named arguments as casks",
  exclusiveOn: ["--formula"],
};

const installedFormulaOrCaskVariadicArg: Fig.Arg = {
  name: "formula|cask",
  description: "Installed formula or cask",
  isVariadic: true,
  generators: [installedFormulaeGenerator, installedCasksGenerator],
};

const formulaOption: Fig.Option = {
  name: ["--formula", "--formulae"],
  description: "Treat all named arguments as formulae",
  exclusiveOn: ["--cask"],
};

const formulaOrCaskOptionalVariadicArg: Fig.Arg = {
  name: "formula|cask",
  description: "Formula or cask",
  isOptional: true,
  isVariadic: true,
  generators: [generateAllFormulae, generateAllCasks],
};

const formulaVariadicArg: Fig.Arg = {
  name: "formula",
  isVariadic: true,
  generators: generateAllFormulae,
};

const commandVariadicArg: Fig.Arg = {
  name: "command",
  isVariadic: true,
  generators: commandsGenerator,
};

const formulaArg: Fig.Arg = {
  name: "formula",
  generators: generateAllFormulae,
};

const formulaOptionalVariadicArg: Fig.Arg = {
  name: "formula",
  isOptional: true,
  isVariadic: true,
  generators: generateAllFormulae,
};

const tapOptionalVariadicArg: Fig.Arg = {
  name: "tap",
  isOptional: true,
  isVariadic: true,
  generators: repositoriesGenerator(),
};

const rootUrlOption: Fig.Option = {
  name: "--root-url",
  description:
    "Use the specified URL as the root of the bottle's URL instead of Homebrew's default",
  args: {
    name: "url",
  },
};

const rootUrlUsingOption: Fig.Option = {
  name: "--root-url-using",
  description:
    "Use the specified download strategy class for downloading the bottle's URL instead of Homebrew's default",
  args: {
    name: "root-url-using",
  },
};

const noForkOption: Fig.Option = {
  name: "--no-fork",
  description: "Don't try to fork the repository",
};

const dryRunOption: Fig.Option = {
  name: ["-n", "--dry-run"],
  description: "Print what would be done rather than doing it",
};

const dryRunOption2: Fig.Option = {
  name: ["-n", "--dry-run"],
  description: "Print what would be done rather than doing it",
  exclusiveOn: ["--write-only"],
};

const writeOnlyOption: Fig.Option = {
  name: "--write-only",
  description:
    "Make the expected file modifications without taking any Git actions",
  exclusiveOn: ["--dry-run"],
};

const installDependenciesOption: Fig.Option = {
  name: "--install-dependencies",
  description: "Install missing dependencies required to update resources",
};

const tapOption: Fig.Option = {
  name: "--tap",
  description: "Target tap repository (default: homebrew/core)",
  args: {
    name: "tap",
    generators: repositoriesGenerator(),
  },
};

const completionSpec: Fig.Spec = {
  name: "brew",
  description: "Homebrew package manager for macOS and Linux",
  args: {
    name: "alias",
    description: "Custom user defined brew alias",
    isOptional: true,
    generators: generateAliases,
  },
  subcommands: [
    {
      name: "install",
      description: "Install a formula or cask",
      args: formulaOrCaskVariadicArg,
      options: [
        brewDebugOption,
        quietOption,
        postInstallVerboseOption,
        helpOption,
        displayTimesOption,
        {
          name: ["-f", "--force"],
          description:
            "Install formulae without checking for previously installed keg-only or non-migrated versions. When installing casks, overwrite existing files (binaries and symlinks are excluded, unless originally from the same cask)",
          exclusiveOn: ["--adopt"],
        },
        {
          name: ["-n", "--dry-run"],
          description:
            "Show what would be installed, but do not actually install anything",
        },
        {
          name: "--as-dependency",
          description:
            "Install formula or cask as a dependency without marking it as installed on request. Previously requested packages retain their status",
        },
        {
          name: ["-y", "--no-ask", "--yes"],
          description:
            "Do not ask for confirmation before downloading and installing. Ask mode is the default. Enabled by default if $HOMEBREW_NO_ASK is set",
        },
        {
          name: ["--formula", "--formulae"],
          description: "Treat all named arguments as formulae",
          exclusiveOn: [
            "--cask",
            "--binaries",
            "--require-sha",
            "--adopt",
            "--skip-cask-deps",
            "--zap",
            "--appdir",
            "--appimagedir",
            "--keyboard-layoutdir",
            "--colorpickerdir",
            "--prefpanedir",
            "--qlplugindir",
            "--mdimporterdir",
            "--dictionarydir",
            "--fontdir",
            "--servicedir",
            "--input-methoddir",
            "--internet-plugindir",
            "--audio-unit-plugindir",
            "--vst-plugindir",
            "--vst3-plugindir",
            "--screen-saverdir",
            "--language",
          ],
        },
        {
          name: "--ignore-dependencies",
          description:
            "An unsupported Homebrew development option to skip installing any dependencies of any kind. If the dependencies are not already present, the formula will have issues. If you're not developing Homebrew, consider adjusting your PATH rather than using this option",
          exclusiveOn: ["--cask", "--only-dependencies"],
        },
        {
          name: "--only-dependencies",
          description:
            "Install the dependencies with specified options but do not install the formula itself",
          exclusiveOn: ["--cask", "--ignore-dependencies"],
        },
        {
          name: "--cc",
          description:
            "Attempt to compile using the specified compiler, which should be the name of the compiler's executable, e.g. gcc-9 for GCC 9. In order to use LLVM's clang, specify llvm_clang. To use the Apple-provided clang, specify clang. This option will only accept compilers that are provided by Homebrew or bundled with macOS. Please do not file issues if you encounter errors while using this option",
          args: {
            name: "compiler",
            suggestions: ["clang", "llvm_clang", "gcc-9"],
          },
          exclusiveOn: ["--cask"],
        },
        {
          name: ["-s", "--build-from-source"],
          description:
            "Compile formula from source even if a bottle is provided. Dependencies will still be installed from bottles if they are available",
          exclusiveOn: ["--cask", "--build-bottle", "--force-bottle"],
        },
        {
          name: "--force-bottle",
          description:
            "Install from a bottle if it exists for the current or newest version of macOS, even if it would not normally be used for installation",
          exclusiveOn: ["--cask", "--build-from-source", "--build-bottle"],
        },
        {
          name: "--include-test",
          description:
            "Install testing dependencies required to run brew test formula",
          exclusiveOn: ["--cask"],
        },
        {
          name: "--HEAD",
          description:
            "If formula defines it, install the HEAD version, aka. main, trunk, unstable, master",
          exclusiveOn: ["--cask"],
        },
        {
          name: "--fetch-HEAD",
          description:
            "Fetch the upstream repository to detect if the HEAD installation of the formula is outdated. Otherwise, the repository's HEAD will only be checked for updates when a new stable or development version has been released",
          exclusiveOn: ["--cask"],
        },
        keepTmpOption,
        debugSymbolsOption,
        {
          name: "--build-bottle",
          description:
            "Prepare the formula for eventual bottling during installation, skipping any post-install steps",
          exclusiveOn: ["--cask", "--build-from-source", "--force-bottle"],
        },
        {
          name: "--skip-post-install",
          description: "Install but skip any post-install steps",
          exclusiveOn: ["--cask"],
        },
        {
          name: "--skip-link",
          description: "Install but skip linking the keg into the prefix",
          exclusiveOn: ["--cask"],
        },
        {
          name: "--bottle-arch",
          description:
            "Optimise bottles for the specified architecture rather than the oldest architecture supported by the version of macOS the bottles are built on",
          args: {
            name: "bottle-arch",
          },
          exclusiveOn: ["--cask"],
          dependsOn: ["--build-bottle"],
        },
        interactiveOption,
        {
          name: ["-g", "--git"],
          description:
            "Create a Git repository, useful for creating patches to the software",
          exclusiveOn: ["--cask"],
        },
        {
          name: "--overwrite",
          description:
            "Delete files that already exist in the prefix while linking",
          exclusiveOn: ["--cask"],
        },
        {
          name: ["--cask", "--casks"],
          description: "Treat all named arguments as casks",
          exclusiveOn: [
            "--formula",
            "--ignore-dependencies",
            "--only-dependencies",
            "--cc",
            "--build-from-source",
            "--force-bottle",
            "--include-test",
            "--HEAD",
            "--fetch-HEAD",
            "--keep-tmp",
            "--debug-symbols",
            "--build-bottle",
            "--skip-post-install",
            "--skip-link",
            "--bottle-arch",
            "--interactive",
            "--git",
            "--overwrite",
          ],
        },
        binariesOption,
        noBinariesOption,
        requireShaOption,
        {
          name: "--adopt",
          description:
            "Adopt existing artifacts in the destination that are identical to those being installed. Cannot be combined with --force",
          exclusiveOn: ["--formula", "--force"],
        },
        skipCaskDepsOption,
        {
          name: "--zap",
          description:
            "For use with brew reinstall --cask. Remove all files associated with a cask. May remove files which are shared between applications",
          exclusiveOn: ["--formula"],
        },
        appdirOption,
        appimagedirOption,
        keyboardLayoutdirOption,
        colorpickerdirOption,
        prefpanedirOption,
        qlplugindirOption,
        mdimporterdirOption,
        dictionarydirOption,
        fontdirOption,
        servicedirOption,
        inputMethoddirOption,
        internetPlugindirOption,
        audioUnitPlugindirOption,
        vstPlugindirOption,
        vst3PlugindirOption,
        screenSaverdirOption,
        languageOption,
      ],
    },
    {
      name: ["uninstall", "rm", "remove"],
      description: "Uninstall a formula or cask",
      args: installedFormulaOrCaskVariadicArg,
      options: [
        ...commonOptions,
        {
          name: ["-f", "--force"],
          description:
            "Delete all installed versions of formula. Uninstall even if cask is not installed, overwrite existing files and ignore errors when removing files",
        },
        {
          name: ["-n", "--dry-run"],
          description:
            "Show what would be uninstalled and autoremoved, but do not actually remove anything",
        },
        {
          name: "--zap",
          description:
            "Remove all files associated with a cask. May remove files which are shared between applications",
          exclusiveOn: ["--formula"],
        },
        {
          name: "--ignore-dependencies",
          description:
            "Don't fail uninstall, even if formula is a dependency of any installed formulae",
        },
        {
          name: ["--formula", "--formulae"],
          description: "Treat all named arguments as formulae",
          exclusiveOn: ["--cask", "--zap"],
        },
        caskOption,
      ],
    },
    {
      name: "upgrade",
      description:
        "Upgrade outdated, unpinned packages using the same options they were originally installed with, plus any appended brew formula options",
      args: {
        name: "formula|cask",
        description: "Outdated formula or cask",
        isOptional: true,
        isVariadic: true,
        generators: outdatedformulaeGenerator,
      },
      options: [
        brewDebugOption,
        quietOption,
        postInstallVerboseOption,
        helpOption,
        displayTimesOption,
        {
          name: ["-f", "--force"],
          description:
            "Install formulae without checking for previously installed keg-only or non-migrated versions. When installing casks, overwrite existing files (binaries and symlinks are excluded, unless originally from the same cask)",
        },
        {
          name: ["-n", "--dry-run"],
          description:
            "Show what would be upgraded, but do not actually upgrade anything",
        },
        {
          name: ["--minimum-version", "--min-version"],
          description:
            "Only upgrade a named formula or cask with an installed version below the given minimum version",
          args: {
            name: "version",
          },
        },
        {
          name: "--vulnerable",
          description:
            "Only select outdated formulae with open vulnerabilities from OSV.dev. Stop if any candidate cannot be reliably scanned. Implies --formula; dependencies and dependants may also be upgraded. The available version is not guaranteed to fix every finding",
          exclusiveOn: ["--cask"],
        },
        {
          name: "--severity",
          description:
            "Only select findings at or above low, medium, high or critical",
          args: {
            name: "severity",
            suggestions: ["low", "medium", "high", "critical"],
          },
          dependsOn: ["--vulnerable"],
        },
        {
          name: ["-y", "--no-ask", "--yes"],
          description:
            "Do not ask for confirmation before downloading and upgrading. Ask mode is the default. Enabled by default if $HOMEBREW_NO_ASK is set",
        },
        {
          name: ["--formula", "--formulae"],
          description:
            "Treat all named arguments as formulae. If no named arguments are specified, upgrade only outdated formulae",
          exclusiveOn: [
            "--cask",
            "--skip-cask-deps",
            "--no-quit",
            "--greedy",
            "--greedy-latest",
            "--greedy-auto-updates",
            "--binaries",
            "--require-sha",
            "--appdir",
            "--appimagedir",
            "--keyboard-layoutdir",
            "--colorpickerdir",
            "--prefpanedir",
            "--qlplugindir",
            "--mdimporterdir",
            "--dictionarydir",
            "--fontdir",
            "--servicedir",
            "--input-methoddir",
            "--internet-plugindir",
            "--audio-unit-plugindir",
            "--vst-plugindir",
            "--vst3-plugindir",
            "--screen-saverdir",
            "--language",
          ],
        },
        {
          name: ["-s", "--build-from-source"],
          description:
            "Compile formula from source even if a bottle is available",
          exclusiveOn: ["--cask", "--force-bottle"],
        },
        interactiveOption,
        {
          name: "--force-bottle",
          description:
            "Install from a bottle if it exists for the current or newest version of macOS, even if it would not normally be used for installation",
          exclusiveOn: ["--cask", "--build-from-source"],
        },
        {
          name: "--fetch-HEAD",
          description:
            "Fetch the upstream repository to detect if the HEAD installation of the formula is outdated. Otherwise, the repository's HEAD will only be checked for updates when a new stable or development version has been released",
          exclusiveOn: ["--cask"],
        },
        keepTmpOption,
        debugSymbolsOption,
        {
          name: "--overwrite",
          description:
            "Delete files that already exist in the prefix while linking",
          exclusiveOn: ["--cask"],
        },
        {
          name: ["--cask", "--casks"],
          description:
            "Treat all named arguments as casks. If no named arguments are specified, upgrade only outdated casks",
          exclusiveOn: [
            "--formula",
            "--build-from-source",
            "--interactive",
            "--force-bottle",
            "--fetch-HEAD",
            "--keep-tmp",
            "--debug-symbols",
            "--overwrite",
            "--vulnerable",
          ],
        },
        skipCaskDepsOption,
        {
          name: "--no-quit",
          description:
            "Prevent running cask applications from being quit during upgrade. Enabled by default if $HOMEBREW_NO_UPGRADE_QUIT_CASKS is set",
          exclusiveOn: ["--formula"],
        },
        {
          name: ["-g", "--greedy"],
          description:
            "Also include casks with version :latest and auto_updates true casks that would otherwise be skipped. Enabled by default if $HOMEBREW_UPGRADE_GREEDY is set",
          exclusiveOn: ["--formula"],
        },
        {
          name: "--greedy-latest",
          description: "Also include casks with version :latest",
          exclusiveOn: ["--formula"],
        },
        {
          name: "--greedy-auto-updates",
          description:
            "Also include auto_updates true casks that would otherwise be skipped",
          exclusiveOn: ["--formula"],
        },
        binariesOption,
        noBinariesOption,
        requireShaOption,
        appdirOption,
        appimagedirOption,
        keyboardLayoutdirOption,
        colorpickerdirOption,
        prefpanedirOption,
        qlplugindirOption,
        mdimporterdirOption,
        dictionarydirOption,
        fontdirOption,
        servicedirOption,
        inputMethoddirOption,
        internetPlugindirOption,
        audioUnitPlugindirOption,
        vstPlugindirOption,
        vst3PlugindirOption,
        screenSaverdirOption,
        languageOption,
      ],
    },
    {
      name: ["update", "up"],
      description:
        "Fetch the newest version of Homebrew and all formulae from GitHub using git(1) and perform any necessary migrations",
      options: [
        {
          name: ["-d", "--debug"],
          description:
            "Display a trace of all shell commands as they are executed",
        },
        quietOption,
        {
          name: ["-v", "--verbose"],
          description:
            "Print the directories checked and git operations performed",
        },
        helpOption,
        {
          name: "--auto-update",
          description:
            "Run on auto-updates (e.g. before brew install). Skips some slower steps",
        },
        {
          name: ["-f", "--force"],
          description:
            "Always do a slower, full update check (even if unnecessary)",
        },
      ],
    },
    {
      name: ["list", "ls"],
      description: "List all installed formulae and casks",
      args: {
        name: "formula|cask",
        description: "Installed formula or cask",
        isOptional: true,
        isVariadic: true,
        generators: [installedFormulaeGenerator, installedCasksGenerator],
      },
      options: [
        ...commonOptions,
        {
          name: ["--formula", "--formulae"],
          description:
            "List only formulae, or treat all named arguments as formulae",
          exclusiveOn: ["--cask"],
        },
        {
          name: ["--cask", "--casks"],
          description: "List only casks, or treat all named arguments as casks",
          exclusiveOn: [
            "--formula",
            "--multiple",
            "--installed-on-request",
            "--no-installed-on-request",
            "--poured-from-bottle",
            "--built-from-source",
          ],
        },
        {
          name: "--full-name",
          description:
            "Print formulae with fully-qualified names. Unless --full-name, --versions or --pinned are passed, other options (i.e. -1, -l, -r and -t) are passed to ls(1) which produces the actual output",
          exclusiveOn: [
            "--versions",
            "--multiple",
            "--pinned",
            "-l",
            "-r",
            "-t",
          ],
        },
        {
          name: "--versions",
          description:
            "Show the version number for installed formulae, or only the specified formulae if formula are provided",
          exclusiveOn: [
            "--installed-on-request",
            "--no-installed-on-request",
            "--poured-from-bottle",
            "--built-from-source",
            "-1",
            "-l",
            "-r",
            "-t",
            "--full-name",
          ],
        },
        {
          name: "--json",
          description:
            "Output installed formulae and casks with versions, linked and opt-linked formula versions and pinned versions as JSON using the fast Bash command path. Requires --versions, no named arguments and jq",
        },
        {
          name: "--multiple",
          description:
            "Only show formulae with multiple versions installed. Implies --versions",
          exclusiveOn: [
            "--cask",
            "--pinned",
            "--installed-on-request",
            "--no-installed-on-request",
            "--poured-from-bottle",
            "--built-from-source",
            "-1",
            "-l",
            "-r",
            "-t",
            "--full-name",
          ],
        },
        {
          name: "--pinned",
          description:
            "List only pinned packages, or only the specified (pinned) packages if formula or cask are provided. See also pin, unpin",
          exclusiveOn: [
            "--multiple",
            "--installed-on-request",
            "--no-installed-on-request",
            "--poured-from-bottle",
            "--built-from-source",
            "-1",
            "-l",
            "-r",
            "-t",
            "--full-name",
          ],
        },
        {
          name: "--installed-on-request",
          description: "List the formulae installed on request",
          exclusiveOn: ["--cask", "--versions", "--multiple", "--pinned", "-l"],
        },
        {
          name: "--no-installed-on-request",
          description:
            "List the formulae not installed on request (i.e. installed as dependencies)",
          exclusiveOn: ["--cask", "--versions", "--multiple", "--pinned", "-l"],
        },
        {
          name: "--poured-from-bottle",
          description: "List the formulae installed from a bottle",
          exclusiveOn: ["--cask", "--versions", "--multiple", "--pinned", "-l"],
        },
        {
          name: "--built-from-source",
          description: "List the formulae compiled from source",
          exclusiveOn: ["--cask", "--versions", "--multiple", "--pinned", "-l"],
        },
        {
          name: "-1",
          description:
            "Force output to be one entry per line. This is the default when output is not to a terminal",
          exclusiveOn: ["--versions", "--multiple", "--pinned"],
        },
        {
          name: "-l",
          description:
            "List formulae and/or casks in long format. Has no effect when a formula or cask name is passed as an argument",
          exclusiveOn: [
            "--installed-on-request",
            "--no-installed-on-request",
            "--poured-from-bottle",
            "--built-from-source",
            "--versions",
            "--multiple",
            "--pinned",
            "--full-name",
          ],
        },
        {
          name: "-r",
          description:
            "Reverse the order of formula and/or cask sorting to list the oldest entries first. Has no effect when a formula or cask name is passed as an argument",
          exclusiveOn: ["--versions", "--multiple", "--pinned", "--full-name"],
        },
        {
          name: "-t",
          description:
            "Sort formulae and/or casks by time modified, listing most recently modified first. Has no effect when a formula or cask name is passed as an argument",
          exclusiveOn: ["--versions", "--multiple", "--pinned", "--full-name"],
        },
      ],
    },
    {
      name: ["search", "-S"],
      description:
        "Perform a substring search of cask tokens and formula names for text",
      args: {
        name: "text",
        description: "Text or /regex/ to search for",
        isVariadic: true,
      },
      options: [
        ...commonOptions,
        {
          name: ["--formula", "--formulae"],
          description: "Search for formulae",
        },
        {
          name: ["--cask", "--casks"],
          description: "Search for casks",
        },
        {
          name: "--desc",
          description:
            "Search for formulae with a description matching text and casks with a name or description matching text",
          exclusiveOn: ["--pull-request"],
        },
        {
          name: "--pull-request",
          description: "Search for GitHub pull requests containing text",
          exclusiveOn: ["--desc"],
        },
        {
          name: "--open",
          description: "Search for only open GitHub pull requests",
          exclusiveOn: ["--closed"],
          dependsOn: ["--pull-request"],
        },
        {
          name: "--closed",
          description: "Search for only closed GitHub pull requests",
          exclusiveOn: ["--open"],
          dependsOn: ["--pull-request"],
        },
        {
          name: "--alpine",
          description: "Search for text in the given database",
          exclusiveOn: [
            "--repology",
            "--macports",
            "--fink",
            "--opensuse",
            "--fedora",
            "--archlinux",
            "--debian",
            "--ubuntu",
          ],
        },
        {
          name: "--archlinux",
          description: "Search for text in the given database",
          exclusiveOn: [
            "--alpine",
            "--repology",
            "--macports",
            "--fink",
            "--opensuse",
            "--fedora",
            "--debian",
            "--ubuntu",
          ],
        },
        {
          name: "--debian",
          description: "Search for text in the given database",
          exclusiveOn: [
            "--alpine",
            "--repology",
            "--macports",
            "--fink",
            "--opensuse",
            "--fedora",
            "--archlinux",
            "--ubuntu",
          ],
        },
        {
          name: "--fedora",
          description: "Search for text in the given database",
          exclusiveOn: [
            "--alpine",
            "--repology",
            "--macports",
            "--fink",
            "--opensuse",
            "--archlinux",
            "--debian",
            "--ubuntu",
          ],
        },
        {
          name: "--fink",
          description: "Search for text in the given database",
          exclusiveOn: [
            "--alpine",
            "--repology",
            "--macports",
            "--opensuse",
            "--fedora",
            "--archlinux",
            "--debian",
            "--ubuntu",
          ],
        },
        {
          name: "--macports",
          description: "Search for text in the given database",
          exclusiveOn: [
            "--alpine",
            "--repology",
            "--fink",
            "--opensuse",
            "--fedora",
            "--archlinux",
            "--debian",
            "--ubuntu",
          ],
        },
        {
          name: "--opensuse",
          description: "Search for text in the given database",
          exclusiveOn: [
            "--alpine",
            "--repology",
            "--macports",
            "--fink",
            "--fedora",
            "--archlinux",
            "--debian",
            "--ubuntu",
          ],
        },
        {
          name: "--repology",
          description: "Search for text in the given database",
          exclusiveOn: [
            "--alpine",
            "--macports",
            "--fink",
            "--opensuse",
            "--fedora",
            "--archlinux",
            "--debian",
            "--ubuntu",
          ],
        },
        {
          name: "--ubuntu",
          description: "Search for text in the given database",
          exclusiveOn: [
            "--alpine",
            "--repology",
            "--macports",
            "--fink",
            "--opensuse",
            "--fedora",
            "--archlinux",
            "--debian",
          ],
        },
      ],
    },
    {
      name: ["info", "abv"],
      description: "Display brief statistics for your Homebrew installation",
      args: formulaOrCaskOptionalVariadicArg,
      options: [
        debugOption,
        quietOption,
        {
          name: ["-v", "--verbose"],
          description:
            "Show more verbose data for formula, or full information with --installed",
        },
        helpOption,
        {
          name: "--analytics",
          description:
            "List global Homebrew analytics data or, if specified, installation and build error data for formula (provided neither $HOMEBREW_NO_ANALYTICS nor $HOMEBREW_NO_GITHUB_API are set)",
        },
        {
          name: "--days",
          description:
            "How many days of analytics data to retrieve. The value for days must be 30, 90 or 365. The default is 30",
          args: {
            name: "days",
            suggestions: ["30", "90", "365"],
          },
          dependsOn: ["--analytics"],
        },
        {
          name: "--category",
          description:
            "Which type of analytics data to retrieve. The value for category must be install, install-on-request or build-error; cask-install or os-version may be specified if formula is not. The default is install",
          args: {
            name: "category",
            generators: infoCategoryGenerator,
          },
          dependsOn: ["--analytics"],
        },
        {
          name: "--github",
          description:
            "Open the GitHub source page for formula and cask in a browser. To view the history locally: brew log -p formula or cask",
        },
        {
          name: "--json",
          description:
            "Print a JSON representation. Currently the default value for version is v1. v1 is valid for formula only. v2 is valid for both formula and cask. See the docs for examples of using the JSON output: https://docs.brew.sh/Querying-Brew",
          args: {
            name: "version",
            isOptional: true,
            suggestions: ["v1", "v2"],
          },
          requiresSeparator: true,
        },
        {
          name: "--installed",
          description:
            "Output a human-readable inventory of installed formulae and casks. If --json is passed, print JSON for installed formulae and, with --json=v2, installed casks",
        },
        {
          name: "--variations",
          description:
            "Include the variations hash in each formula's JSON output",
          dependsOn: ["--json"],
        },
        formulaOption,
        caskOption,
        {
          name: "--sizes",
          description: "Show the size of installed formulae and casks",
        },
      ],
    },
    {
      name: "outdated",
      description:
        "List installed casks and formulae that have an updated version available",
      args: formulaOrCaskOptionalVariadicArg,
      options: [
        debugOption,
        {
          name: ["-q", "--quiet"],
          description:
            "List only the names of outdated kegs (takes precedence over --verbose)",
          exclusiveOn: ["--verbose", "--json"],
        },
        {
          name: ["-v", "--verbose"],
          description: "Include detailed version information",
          exclusiveOn: ["--quiet", "--json"],
        },
        helpOption,
        {
          name: ["--formula", "--formulae"],
          description: "List only outdated formulae",
          exclusiveOn: ["--cask"],
        },
        {
          name: ["--cask", "--casks"],
          description: "List only outdated casks",
          exclusiveOn: ["--formula", "--vulnerable"],
        },
        {
          name: "--json",
          description:
            "Print outdated formulae and casks in JSON format. The default and only supported version is v2",
          args: {
            name: "version",
            isOptional: true,
            suggestions: ["v2"],
          },
          requiresSeparator: true,
          exclusiveOn: ["--quiet", "--verbose"],
        },
        {
          name: ["--minimum-version", "--min-version"],
          description:
            "Only list a named formula or cask with an installed version below the given minimum version",
          args: {
            name: "version",
          },
        },
        {
          name: "--vulnerable",
          description:
            "Only list outdated formulae with open vulnerabilities from OSV.dev. Stop if any candidate cannot be reliably scanned. Implies --formula",
          exclusiveOn: ["--cask"],
        },
        {
          name: "--severity",
          description:
            "Only select findings at or above low, medium, high or critical",
          args: {
            name: "severity",
            suggestions: ["low", "medium", "high", "critical"],
          },
          dependsOn: ["--vulnerable"],
        },
        {
          name: "--fetch-HEAD",
          description:
            "Fetch the upstream repository to detect if the HEAD installation of the formula is outdated. Otherwise, the repository's HEAD will only be checked for updates when a new stable or development version has been released",
        },
        {
          name: ["-g", "--greedy"],
          description:
            "Also include outdated casks with version :latest and auto_updates true casks that would otherwise be skipped. Enabled by default if $HOMEBREW_UPGRADE_GREEDY is set",
        },
        {
          name: "--greedy-latest",
          description:
            "Also include outdated casks including those with version :latest",
        },
        {
          name: "--greedy-auto-updates",
          description:
            "Also include outdated auto_updates true casks that would otherwise be skipped",
        },
      ],
    },
    {
      name: "services",
      description:
        "Manage background services with macOS' launchctl(1) daemon manager or Linux's systemctl(1) service manager",
      options: [
        ...commonOptions,
        {
          name: "--sudo-service-user",
          description:
            "When run as root on macOS, run the service(s) as this user",
          args: {
            name: "user",
          },
          isPersistent: true,
        },
      ],
      subcommands: [
        {
          name: ["list", "ls"],
          description:
            "List information about all managed services for the current user (or root)",
          options: [
            ...commonOptions,
            {
              name: "--json",
              description: "Output as JSON",
            },
          ],
        },
        {
          name: ["start", "launch", "load", "s", "l"],
          description:
            "Start the service formula immediately and register it to launch at login (or boot)",
          args: {
            name: "formula",
            isOptional: true,
            isVariadic: true,
            generators: servicesGenerator("Start"),
          },
          options: [
            ...commonOptions,
            {
              name: "--file",
              description:
                "Use the service file from this location to start the service",
              args: {
                name: "file",
                template: "filepaths",
              },
              exclusiveOn: ["--all"],
            },
            {
              name: "--all",
              description:
                "Start all services and register them to launch at login (or boot)",
              exclusiveOn: ["--file"],
            },
          ],
        },
        {
          name: ["stop", "unload", "terminate", "term", "t", "u"],
          description:
            "Stop the service formula immediately and unregister it from launching at login (or boot), unless --keep is specified",
          args: {
            name: "formula",
            isOptional: true,
            isVariadic: true,
            generators: servicesGenerator("Stop"),
          },
          options: [
            ...commonOptions,
            {
              name: "--max-wait",
              description:
                "Wait at most this many seconds for stop to finish stopping a service. Defaults to 60. Set this to zero (0) seconds to wait indefinitely",
              args: {
                name: "seconds",
              },
              exclusiveOn: ["--no-wait"],
            },
            {
              name: "--no-wait",
              description: "Don't wait for stop to finish stopping the service",
              exclusiveOn: ["--max-wait"],
            },
            {
              name: "--keep",
              description:
                "When stopped, don't unregister the service from launching at login (or boot)",
            },
            {
              name: "--all",
              description:
                "Stop all services and unregister them from launching at login (or boot), unless --keep is specified",
            },
          ],
        },
        {
          name: ["restart", "relaunch", "reload", "r"],
          description:
            "Stop (if necessary) and start the service formula immediately and register it to launch at login (or boot)",
          args: {
            name: "formula",
            isOptional: true,
            isVariadic: true,
            generators: servicesGenerator("Restart"),
          },
          options: [
            ...commonOptions,
            {
              name: "--file",
              description:
                "Use the service file from this location to start the service",
              args: {
                name: "file",
                template: "filepaths",
              },
              exclusiveOn: ["--all"],
            },
            {
              name: "--all",
              description: "Restart all services",
              exclusiveOn: ["--file"],
            },
          ],
        },
        {
          name: "run",
          description:
            "Run the service formula without registering to launch at login (or boot)",
          args: {
            name: "formula",
            isOptional: true,
            isVariadic: true,
            generators: servicesGenerator("Run"),
          },
          options: [
            ...commonOptions,
            {
              name: "--file",
              description:
                "Use the service file from this location to run the service",
              args: {
                name: "file",
                template: "filepaths",
              },
              exclusiveOn: ["--all"],
            },
            {
              name: "--all",
              description:
                "Run all services without registering them to launch at login (or boot)",
              exclusiveOn: ["--file"],
            },
          ],
        },
        {
          name: ["info", "i"],
          description:
            "List all managed services for the current user (or root)",
          args: {
            name: "formula",
            isOptional: true,
            isVariadic: true,
            generators: servicesGenerator("Show info for"),
          },
          options: [
            ...commonOptions,
            {
              name: "--all",
              description: "List all managed services",
            },
            {
              name: "--json",
              description: "Output as JSON",
            },
          ],
        },
        {
          name: ["kill", "k"],
          description:
            "Stop the service formula immediately but keep it registered to launch at login (or boot)",
          args: {
            name: "formula",
            isOptional: true,
            isVariadic: true,
            generators: servicesGenerator("Kill"),
          },
          options: [
            ...commonOptions,
            {
              name: "--all",
              description:
                "Stop all services immediately but keep them registered to launch at login (or boot)",
            },
          ],
        },
        {
          name: ["cleanup", "clean", "cl", "rm"],
          description: "Remove all unused services",
          options: [...commonOptions],
        },
      ],
    },
    {
      name: "cleanup",
      description:
        "Remove stale lock files and outdated downloads for all formulae and casks, and remove old versions of installed formulae",
      args: formulaOrCaskOptionalVariadicArg,
      options: [
        ...commonOptions,
        {
          name: "--prune",
          description:
            "Remove all cache files older than specified days. If you want to remove everything, use --prune=all",
          args: {
            name: "days",
            suggestions: ["all"],
          },
        },
        {
          name: ["-n", "--dry-run"],
          description:
            "Show what would be removed, but do not actually remove anything",
        },
        {
          name: ["-s", "--scrub"],
          description:
            'Scrub the cache, including downloads for even the latest versions. Note that downloads for any installed formulae or casks will still not be deleted. If you want to delete those too: rm -rf "$(brew --cache)"',
        },
        {
          name: "--prune-prefix",
          description:
            "Only prune the symlinks and directories from the prefix and remove no other files",
        },
      ],
    },
    {
      name: ["doctor", "dr"],
      description: "Check your system for potential problems",
      args: {
        name: "diagnostic_check",
        isOptional: true,
        isVariadic: true,
        generators: diagnosticChecksGenerator,
      },
      options: [
        ...commonOptions,
        {
          name: "--list-checks",
          description:
            "List all audit methods, which can be run individually if provided as arguments",
        },
        {
          name: ["-D", "--audit-debug"],
          description: "Enable debugging and profiling of audit methods",
        },
      ],
    },
    {
      name: "tap",
      description:
        "Tap a repository containing formulae, casks, or external commands",
      args: [
        {
          name: "user/repo",
          isOptional: true,
          generators: repositoriesGenerator(),
        },
        {
          name: "URL",
          isOptional: true,
        },
      ],
      options: [
        ...commonOptions,
        {
          name: "--custom-remote",
          description:
            "Install or change a tap with a custom remote. Useful for mirrors",
        },
        {
          name: "--repair",
          description:
            "Add missing symlinks to tap manpages and shell completions. Correct git remote refs for any taps where upstream HEAD branch has been renamed",
        },
        {
          name: ["-f", "--force"],
          description: "Force install core taps even under API mode",
        },
      ],
    },
    {
      name: "untap",
      description: "Remove a tapped formula repository",
      args: {
        name: "tap",
        isVariadic: true,
        generators: repositoriesGenerator(),
      },
      options: [
        ...commonOptions,
        {
          name: ["-f", "--force"],
          description:
            "Uninstall all formulae and casks from this tap with --force before untapping",
        },
      ],
    },
    {
      name: "pin",
      description:
        "Pin the specified package, preventing it from being upgraded when issuing the brew upgrade formula or cask command",
      args: installedFormulaOrCaskVariadicArg,
      options: [...commonOptions, formulaOption, caskOption],
    },
    {
      name: "unpin",
      description:
        "Unpin the specified package, allowing it to be upgraded by brew upgrade formula or cask",
      args: installedFormulaOrCaskVariadicArg,
      options: [...commonOptions, formulaOption, caskOption],
    },
    {
      name: ["link", "ln"],
      description:
        "Symlink all of formula's installed files or cask's binaries, manpages and shell completions into Homebrew's prefix",
      args: installedFormulaOrCaskVariadicArg,
      options: [
        ...commonOptions,
        {
          name: "--overwrite",
          description:
            "Delete files that already exist in the prefix while linking",
        },
        {
          name: ["-n", "--dry-run"],
          description:
            "List files which would be linked or deleted by brew link --overwrite without actually linking or deleting any files",
        },
        {
          name: ["-f", "--force"],
          description:
            "Allow keg-only formulae to be linked. When linking casks, overwrite existing symlinks originally from the same cask",
        },
        {
          name: "--HEAD",
          description:
            "Link the HEAD version of the formula if it is installed",
          exclusiveOn: ["--cask"],
        },
        formulaOption,
        {
          name: ["--cask", "--casks"],
          description: "Treat all named arguments as casks",
          exclusiveOn: ["--formula", "--HEAD"],
        },
      ],
    },
    {
      name: "unlink",
      description: "Remove symlinks for formula or cask from Homebrew's prefix",
      args: installedFormulaOrCaskVariadicArg,
      options: [
        ...commonOptions,
        {
          name: ["-n", "--dry-run"],
          description:
            "List files which would be unlinked without actually unlinking or deleting any files",
        },
        formulaOption,
        caskOption,
      ],
    },
    {
      name: "bundle",
      description:
        "Bundler for non-Ruby dependencies from Homebrew formulae, Homebrew casks, Mac App Store dependencies, VSCode (and forks/variants) extensions, Go packages, Cargo packages, uv tools, Flatpak packages, WinGet packages, Krew plugins and npm packages",
      options: [
        ...commonOptions,
        {
          name: "--file",
          description:
            "Read from or write to the Brewfile from this location. Use --file=- to pipe to stdin/stdout",
          args: {
            name: "file",
            template: "filepaths",
          },
          isPersistent: true,
          exclusiveOn: ["--global"],
        },
        {
          name: ["-g", "--global"],
          description:
            "Read from or write to the Brewfile from $HOMEBREW_BUNDLE_FILE_GLOBAL (if set), ${XDG_CONFIG_HOME}/homebrew/Brewfile (if $XDG_CONFIG_HOME is set), ~/.homebrew/Brewfile or ~/.Brewfile otherwise",
          isPersistent: true,
          exclusiveOn: ["--file"],
        },
      ],
      subcommands: [
        {
          name: ["install", "upgrade"],
          description:
            "Install and upgrade (by default) all dependencies from the Brewfile (upgrade is shorthand for install --upgrade)",
          options: [
            debugOption,
            quietOption,
            {
              name: ["-v", "--verbose"],
              description: "Print output from commands as they are run",
            },
            helpOption,
            {
              name: "--no-upgrade",
              description:
                "Do not run brew upgrade on outdated dependencies. Note they may still be upgraded by brew install if needed. Enabled by default if $HOMEBREW_BUNDLE_NO_UPGRADE is set",
            },
            {
              name: "--upgrade",
              description:
                "Run brew upgrade on outdated dependencies, even if $HOMEBREW_BUNDLE_NO_UPGRADE is set",
            },
            {
              name: ["--upgrade-formulae", "--upgrade-formula"],
              description:
                "Run brew upgrade on any of these comma-separated formulae, even if $HOMEBREW_BUNDLE_NO_UPGRADE is set",
              args: {
                name: "formulae",
              },
            },
            {
              name: ["-f", "--force"],
              description: "Run with --force/--overwrite",
            },
            {
              name: "--force-cleanup",
              description:
                "Perform cleanup after installing dependencies without asking",
            },
            {
              name: "--zap",
              description:
                "Use zap instead of uninstall when cleaning up casks after installing dependencies",
            },
          ],
        },
        {
          name: "add",
          description: "Add entries to your Brewfile",
          args: {
            name: "name",
            isVariadic: true,
          },
          options: [
            ...commonOptions,
            {
              name: "--install",
              description: "Run install before adding entries",
            },
            {
              name: ["--formula", "--formulae", "--brews"],
              description: "Add Homebrew formula entries",
            },
            {
              name: ["--cask", "--casks"],
              description: "Add Homebrew cask entries",
            },
            {
              name: ["--tap", "--taps"],
              description: "Add Homebrew tap entries",
            },
            {
              name: "--no-describe",
              description:
                "Do not add description comments above each line. Description comments are the default. Enabled by default if $HOMEBREW_BUNDLE_NO_DESCRIBE is set",
            },
            {
              name: "--cargo",
              description: "Add entries for Cargo packages",
            },
            {
              name: "--flatpak",
              description: "Add entries for Flatpak packages. Note: Linux only",
            },
            {
              name: "--go",
              description: "Add entries for Go packages",
            },
            {
              name: "--krew",
              description: "Add entries for Krew plugins",
            },
            {
              name: "--npm",
              description: "Add entries for npm packages",
            },
            {
              name: "--uv",
              description: "Add entries for uv tools",
            },
            {
              name: "--vscode",
              description:
                "Add entries for VSCode (and forks/variants) extensions",
            },
          ],
        },
        {
          name: "remove",
          description: "Remove entries that match name from your Brewfile",
          args: {
            name: "name",
            isVariadic: true,
          },
          options: [
            ...commonOptions,
            {
              name: "--install",
              description: "Run install before removing entries",
            },
            {
              name: ["--formula", "--formulae", "--brews"],
              description:
                "Remove Homebrew formula entries, including matches against formula aliases and old names",
            },
            {
              name: ["--cask", "--casks"],
              description: "Remove Homebrew cask entries",
            },
            {
              name: ["--tap", "--taps"],
              description: "Remove Homebrew tap entries",
            },
            {
              name: "--cargo",
              description: "Remove entries for Cargo packages",
            },
            {
              name: "--flatpak",
              description:
                "Remove entries for Flatpak packages. Note: Linux only",
            },
            {
              name: "--go",
              description: "Remove entries for Go packages",
            },
            {
              name: "--krew",
              description: "Remove entries for Krew plugins",
            },
            {
              name: "--mas",
              description: "Remove entries for Mac App Store dependencies",
            },
            {
              name: "--npm",
              description: "Remove entries for npm packages",
            },
            {
              name: "--uv",
              description: "Remove entries for uv tools",
            },
            {
              name: "--vscode",
              description:
                "Remove entries for VSCode (and forks/variants) extensions",
            },
            {
              name: "--winget",
              description: "Remove entries for WinGet packages. Note: WSL only",
            },
          ],
        },
        {
          name: "list",
          description: "List all dependencies present in the Brewfile",
          options: [
            ...commonOptions,
            {
              name: "--install",
              description: "Run install before listing dependencies",
            },
            {
              name: "--all",
              description: "List all dependencies",
            },
            {
              name: ["--formula", "--formulae", "--brews"],
              description: "List Homebrew formula dependencies",
            },
            {
              name: ["--cask", "--casks"],
              description: "List Homebrew cask dependencies",
            },
            {
              name: ["--tap", "--taps"],
              description: "List Homebrew tap dependencies",
            },
            {
              name: "--cargo",
              description: "List Cargo packages",
            },
            {
              name: "--flatpak",
              description: "List Flatpak packages. Note: Linux only",
            },
            {
              name: "--go",
              description: "List Go packages",
            },
            {
              name: "--krew",
              description: "List Krew plugins",
            },
            {
              name: "--mas",
              description: "List Mac App Store dependencies",
            },
            {
              name: "--npm",
              description: "List npm packages",
            },
            {
              name: "--uv",
              description: "List uv tools",
            },
            {
              name: "--vscode",
              description: "List VSCode (and forks/variants) extensions",
            },
            {
              name: "--winget",
              description: "List WinGet packages. Note: WSL only",
            },
          ],
        },
        {
          name: "check",
          description:
            "Check if all dependencies present in the Brewfile are installed",
          options: [
            debugOption,
            quietOption,
            {
              name: ["-v", "--verbose"],
              description: "List all missing dependencies",
            },
            helpOption,
            {
              name: "--no-upgrade",
              description:
                "Do not check for outdated dependencies. Note they may still be upgraded by brew install if needed. Enabled by default if $HOMEBREW_BUNDLE_NO_UPGRADE is set",
            },
            {
              name: "--install",
              description: "Run install before checking dependencies",
            },
          ],
        },
        {
          name: "cleanup",
          description: "Uninstall all dependencies not present in the Brewfile",
          options: [
            ...commonOptions,
            {
              name: "--install",
              description: "Run install before cleaning up dependencies",
            },
            {
              name: ["-f", "--force"],
              description:
                "Actually perform cleanup operations and reset Homebrew's global trust store to the Brewfile values",
            },
            {
              name: "--all",
              description: "Clean up all supported dependencies",
            },
            {
              name: ["--formula", "--formulae", "--brews"],
              description: "Clean up Homebrew formula dependencies",
              exclusiveOn: ["--no-formula", "--no-cleanup-brew"],
            },
            {
              name: ["--no-formula", "--no-formulae", "--no-brews"],
              description:
                "Clean up without Homebrew formula dependencies. Enabled by default if $HOMEBREW_BUNDLE_CLEANUP_NO_BREW is set",
              exclusiveOn: ["--formula"],
            },
            {
              name: "--no-cleanup-brew",
              description:
                "Clean up without Homebrew formula dependencies. Enabled by default if $HOMEBREW_BUNDLE_CLEANUP_NO_BREW is set",
              exclusiveOn: ["--formula"],
            },
            {
              name: ["--cask", "--casks"],
              description: "Clean up Homebrew cask dependencies",
              exclusiveOn: ["--no-cask", "--no-cleanup-cask"],
            },
            {
              name: ["--no-cask", "--no-casks"],
              description:
                "Clean up without Homebrew cask dependencies. Enabled by default if $HOMEBREW_BUNDLE_CLEANUP_NO_CASK is set",
              exclusiveOn: ["--cask"],
            },
            {
              name: "--no-cleanup-cask",
              description:
                "Clean up without Homebrew cask dependencies. Enabled by default if $HOMEBREW_BUNDLE_CLEANUP_NO_CASK is set",
              exclusiveOn: ["--cask"],
            },
            {
              name: ["--tap", "--taps"],
              description: "Clean up Homebrew tap dependencies",
              exclusiveOn: ["--no-tap", "--no-cleanup-tap"],
            },
            {
              name: ["--no-tap", "--no-taps"],
              description:
                "Clean up without Homebrew tap dependencies. Enabled by default if $HOMEBREW_BUNDLE_CLEANUP_NO_TAP is set",
              exclusiveOn: ["--tap"],
            },
            {
              name: "--no-cleanup-tap",
              description:
                "Clean up without Homebrew tap dependencies. Enabled by default if $HOMEBREW_BUNDLE_CLEANUP_NO_TAP is set",
              exclusiveOn: ["--tap"],
            },
            {
              name: "--zap",
              description:
                "Clean up casks using the zap command instead of uninstall",
            },
            {
              name: "--cargo",
              description: "Clean up Cargo packages",
              exclusiveOn: ["--no-cargo", "--no-cleanup-cargo"],
            },
            {
              name: "--flatpak",
              description: "Clean up Flatpak packages. Note: Linux only",
              exclusiveOn: ["--no-flatpak", "--no-cleanup-flatpak"],
            },
            {
              name: "--go",
              description: "Clean up Go packages",
              exclusiveOn: ["--no-go", "--no-cleanup-go"],
            },
            {
              name: "--krew",
              description: "Clean up Krew plugins",
              exclusiveOn: ["--no-krew", "--no-cleanup-krew"],
            },
            {
              name: "--mas",
              description: "Clean up Mac App Store dependencies",
              exclusiveOn: ["--no-mas", "--no-cleanup-mas"],
            },
            {
              name: "--no-cargo",
              description:
                "Cleanup without Cargo packages. Enabled by default if $HOMEBREW_BUNDLE_CLEANUP_NO_CARGO is set",
              exclusiveOn: ["--cargo"],
            },
            {
              name: "--no-cleanup-cargo",
              description:
                "Cleanup without Cargo packages. Enabled by default if $HOMEBREW_BUNDLE_CLEANUP_NO_CARGO is set",
              exclusiveOn: ["--cargo"],
            },
            {
              name: "--no-cleanup-flatpak",
              description:
                "Cleanup without Flatpak packages. Enabled by default if $HOMEBREW_BUNDLE_CLEANUP_NO_FLATPAK is set",
              exclusiveOn: ["--flatpak"],
            },
            {
              name: "--no-cleanup-go",
              description:
                "Cleanup without Go packages. Enabled by default if $HOMEBREW_BUNDLE_CLEANUP_NO_GO is set",
              exclusiveOn: ["--go"],
            },
            {
              name: "--no-cleanup-krew",
              description:
                "Cleanup without Krew plugins. Enabled by default if $HOMEBREW_BUNDLE_CLEANUP_NO_KREW is set",
              exclusiveOn: ["--krew"],
            },
            {
              name: "--no-cleanup-mas",
              description:
                "Cleanup without Mac App Store dependencies. Enabled by default if $HOMEBREW_BUNDLE_CLEANUP_NO_MAS is set",
              exclusiveOn: ["--mas"],
            },
            {
              name: "--no-cleanup-npm",
              description:
                "Cleanup without npm packages. Enabled by default if $HOMEBREW_BUNDLE_CLEANUP_NO_NPM is set",
              exclusiveOn: ["--npm"],
            },
            {
              name: "--no-cleanup-uv",
              description:
                "Cleanup without uv tools. Enabled by default if $HOMEBREW_BUNDLE_CLEANUP_NO_UV is set",
              exclusiveOn: ["--uv"],
            },
            {
              name: "--no-cleanup-vscode",
              description:
                "Cleanup without VSCode (and forks/variants) extensions. Enabled by default if $HOMEBREW_BUNDLE_CLEANUP_NO_VSCODE is set",
              exclusiveOn: ["--vscode"],
            },
            {
              name: "--no-cleanup-winget",
              description:
                "Cleanup without WinGet packages. Enabled by default if $HOMEBREW_BUNDLE_CLEANUP_NO_WINGET is set",
              exclusiveOn: ["--winget"],
            },
            {
              name: "--no-flatpak",
              description:
                "Cleanup without Flatpak packages. Enabled by default if $HOMEBREW_BUNDLE_CLEANUP_NO_FLATPAK is set",
              exclusiveOn: ["--flatpak"],
            },
            {
              name: "--no-go",
              description:
                "Cleanup without Go packages. Enabled by default if $HOMEBREW_BUNDLE_CLEANUP_NO_GO is set",
              exclusiveOn: ["--go"],
            },
            {
              name: "--no-krew",
              description:
                "Cleanup without Krew plugins. Enabled by default if $HOMEBREW_BUNDLE_CLEANUP_NO_KREW is set",
              exclusiveOn: ["--krew"],
            },
            {
              name: "--no-mas",
              description:
                "Cleanup without Mac App Store dependencies. Enabled by default if $HOMEBREW_BUNDLE_CLEANUP_NO_MAS is set",
              exclusiveOn: ["--mas"],
            },
            {
              name: "--no-npm",
              description:
                "Cleanup without npm packages. Enabled by default if $HOMEBREW_BUNDLE_CLEANUP_NO_NPM is set",
              exclusiveOn: ["--npm"],
            },
            {
              name: "--no-uv",
              description:
                "Cleanup without uv tools. Enabled by default if $HOMEBREW_BUNDLE_CLEANUP_NO_UV is set",
              exclusiveOn: ["--uv"],
            },
            {
              name: "--no-vscode",
              description:
                "Cleanup without VSCode (and forks/variants) extensions. Enabled by default if $HOMEBREW_BUNDLE_CLEANUP_NO_VSCODE is set",
              exclusiveOn: ["--vscode"],
            },
            {
              name: "--no-winget",
              description:
                "Cleanup without WinGet packages. Enabled by default if $HOMEBREW_BUNDLE_CLEANUP_NO_WINGET is set",
              exclusiveOn: ["--winget"],
            },
            {
              name: "--npm",
              description: "Clean up npm packages",
              exclusiveOn: ["--no-npm", "--no-cleanup-npm"],
            },
            {
              name: "--uv",
              description: "Clean up uv tools",
              exclusiveOn: ["--no-uv", "--no-cleanup-uv"],
            },
            {
              name: "--vscode",
              description: "Clean up VSCode (and forks/variants) extensions",
              exclusiveOn: ["--no-vscode", "--no-cleanup-vscode"],
            },
            {
              name: "--winget",
              description: "Clean up WinGet packages. Note: WSL only",
              exclusiveOn: ["--no-winget", "--no-cleanup-winget"],
            },
          ],
        },
        {
          name: "dump",
          description:
            "Write all installed casks/formulae/images/taps into a Brewfile in the current directory or to a custom file specified with the --file option",
          options: [
            ...commonOptions,
            {
              name: "--install",
              description: "Run install before dumping dependencies",
            },
            {
              name: ["-f", "--force"],
              description: "Overwrite an existing Brewfile",
            },
            {
              name: ["--formula", "--formulae", "--brews"],
              description: "Dump Homebrew formula dependencies",
              exclusiveOn: ["--no-formula", "--no-dump-brew"],
            },
            {
              name: ["--no-formula", "--no-formulae", "--no-brews"],
              description:
                "Dump without Homebrew formula dependencies. Enabled by default if $HOMEBREW_BUNDLE_DUMP_NO_BREW is set",
              exclusiveOn: ["--formula"],
            },
            {
              name: "--no-dump-brew",
              description:
                "Dump without Homebrew formula dependencies. Enabled by default if $HOMEBREW_BUNDLE_DUMP_NO_BREW is set",
              exclusiveOn: ["--formula"],
            },
            {
              name: ["--cask", "--casks"],
              description: "Dump Homebrew cask dependencies",
              exclusiveOn: ["--no-cask", "--no-dump-cask"],
            },
            {
              name: ["--no-cask", "--no-casks"],
              description:
                "Dump without Homebrew cask dependencies. Enabled by default if $HOMEBREW_BUNDLE_DUMP_NO_CASK is set",
              exclusiveOn: ["--cask"],
            },
            {
              name: "--no-dump-cask",
              description:
                "Dump without Homebrew cask dependencies. Enabled by default if $HOMEBREW_BUNDLE_DUMP_NO_CASK is set",
              exclusiveOn: ["--cask"],
            },
            {
              name: ["--tap", "--taps"],
              description: "Dump Homebrew tap dependencies",
              exclusiveOn: ["--no-tap", "--no-dump-tap"],
            },
            {
              name: ["--no-tap", "--no-taps"],
              description:
                "Dump without Homebrew tap dependencies. Enabled by default if $HOMEBREW_BUNDLE_DUMP_NO_TAP is set",
              exclusiveOn: ["--tap"],
            },
            {
              name: "--no-dump-tap",
              description:
                "Dump without Homebrew tap dependencies. Enabled by default if $HOMEBREW_BUNDLE_DUMP_NO_TAP is set",
              exclusiveOn: ["--tap"],
            },
            {
              name: "--no-describe",
              description:
                "Do not add description comments above each line. Description comments are the default. Enabled by default if $HOMEBREW_BUNDLE_NO_DESCRIBE is set",
            },
            {
              name: "--no-restart",
              description: "Do not add restart_service to formula lines",
            },
            {
              name: "--cargo",
              description: "Dump Cargo packages",
              exclusiveOn: ["--no-cargo", "--no-dump-cargo"],
            },
            {
              name: "--flatpak",
              description: "Dump Flatpak packages. Note: Linux only",
              exclusiveOn: ["--no-flatpak", "--no-dump-flatpak"],
            },
            {
              name: "--go",
              description: "Dump Go packages",
              exclusiveOn: ["--no-go", "--no-dump-go"],
            },
            {
              name: "--krew",
              description: "Dump Krew plugins",
              exclusiveOn: ["--no-krew", "--no-dump-krew"],
            },
            {
              name: "--mas",
              description: "Dump Mac App Store dependencies",
              exclusiveOn: ["--no-mas", "--no-dump-mas"],
            },
            {
              name: "--no-cargo",
              description:
                "Dump without Cargo packages. Enabled by default if $HOMEBREW_BUNDLE_DUMP_NO_CARGO is set",
              exclusiveOn: ["--cargo"],
            },
            {
              name: "--no-dump-cargo",
              description:
                "Dump without Cargo packages. Enabled by default if $HOMEBREW_BUNDLE_DUMP_NO_CARGO is set",
              exclusiveOn: ["--cargo"],
            },
            {
              name: "--no-dump-flatpak",
              description:
                "Dump without Flatpak packages. Enabled by default if $HOMEBREW_BUNDLE_DUMP_NO_FLATPAK is set",
              exclusiveOn: ["--flatpak"],
            },
            {
              name: "--no-dump-go",
              description:
                "Dump without Go packages. Enabled by default if $HOMEBREW_BUNDLE_DUMP_NO_GO is set",
              exclusiveOn: ["--go"],
            },
            {
              name: "--no-dump-krew",
              description:
                "Dump without Krew plugins. Enabled by default if $HOMEBREW_BUNDLE_DUMP_NO_KREW is set",
              exclusiveOn: ["--krew"],
            },
            {
              name: "--no-dump-mas",
              description:
                "Dump without Mac App Store dependencies. Enabled by default if $HOMEBREW_BUNDLE_DUMP_NO_MAS is set",
              exclusiveOn: ["--mas"],
            },
            {
              name: "--no-dump-npm",
              description:
                "Dump without npm packages. Enabled by default if $HOMEBREW_BUNDLE_DUMP_NO_NPM is set",
              exclusiveOn: ["--npm"],
            },
            {
              name: "--no-dump-uv",
              description:
                "Dump without uv tools. Enabled by default if $HOMEBREW_BUNDLE_DUMP_NO_UV is set",
              exclusiveOn: ["--uv"],
            },
            {
              name: "--no-dump-vscode",
              description:
                "Dump without VSCode (and forks/variants) extensions. Enabled by default if $HOMEBREW_BUNDLE_DUMP_NO_VSCODE is set",
              exclusiveOn: ["--vscode"],
            },
            {
              name: "--no-dump-winget",
              description:
                "Dump without WinGet packages. Enabled by default if $HOMEBREW_BUNDLE_DUMP_NO_WINGET is set",
              exclusiveOn: ["--winget"],
            },
            {
              name: "--no-flatpak",
              description:
                "Dump without Flatpak packages. Enabled by default if $HOMEBREW_BUNDLE_DUMP_NO_FLATPAK is set",
              exclusiveOn: ["--flatpak"],
            },
            {
              name: "--no-go",
              description:
                "Dump without Go packages. Enabled by default if $HOMEBREW_BUNDLE_DUMP_NO_GO is set",
              exclusiveOn: ["--go"],
            },
            {
              name: "--no-krew",
              description:
                "Dump without Krew plugins. Enabled by default if $HOMEBREW_BUNDLE_DUMP_NO_KREW is set",
              exclusiveOn: ["--krew"],
            },
            {
              name: "--no-mas",
              description:
                "Dump without Mac App Store dependencies. Enabled by default if $HOMEBREW_BUNDLE_DUMP_NO_MAS is set",
              exclusiveOn: ["--mas"],
            },
            {
              name: "--no-npm",
              description:
                "Dump without npm packages. Enabled by default if $HOMEBREW_BUNDLE_DUMP_NO_NPM is set",
              exclusiveOn: ["--npm"],
            },
            {
              name: "--no-uv",
              description:
                "Dump without uv tools. Enabled by default if $HOMEBREW_BUNDLE_DUMP_NO_UV is set",
              exclusiveOn: ["--uv"],
            },
            {
              name: "--no-vscode",
              description:
                "Dump without VSCode (and forks/variants) extensions. Enabled by default if $HOMEBREW_BUNDLE_DUMP_NO_VSCODE is set",
              exclusiveOn: ["--vscode"],
            },
            {
              name: "--no-winget",
              description:
                "Dump without WinGet packages. Enabled by default if $HOMEBREW_BUNDLE_DUMP_NO_WINGET is set",
              exclusiveOn: ["--winget"],
            },
            {
              name: "--npm",
              description: "Dump npm packages",
              exclusiveOn: ["--no-npm", "--no-dump-npm"],
            },
            {
              name: "--uv",
              description: "Dump uv tools",
              exclusiveOn: ["--no-uv", "--no-dump-uv"],
            },
            {
              name: "--vscode",
              description: "Dump VSCode (and forks/variants) extensions",
              exclusiveOn: ["--no-vscode", "--no-dump-vscode"],
            },
            {
              name: "--winget",
              description: "Dump WinGet packages. Note: WSL only",
              exclusiveOn: ["--no-winget", "--no-dump-winget"],
            },
          ],
        },
        {
          name: "edit",
          description: "Edit the Brewfile in your editor",
          options: [
            ...commonOptions,
            {
              name: "--install",
              description: "Run install before editing the Brewfile",
            },
          ],
        },
        {
          name: "env",
          description:
            "Print the environment variables that would be set in a brew bundle exec environment",
          options: [
            ...commonOptions,
            {
              name: "--install",
              description: "Run install before printing the environment",
            },
            {
              name: "--check",
              description:
                "Check that all dependencies in the Brewfile are installed before printing the environment. Enabled by default if $HOMEBREW_BUNDLE_CHECK is set",
            },
            {
              name: "--no-secrets",
              description:
                "Attempt to remove secrets from the environment before printing it",
            },
          ],
        },
        {
          name: "exec",
          description:
            "Run an external command in an isolated build environment based on the Brewfile dependencies",
          args: {
            name: "command",
            isCommand: true,
          },
          options: [
            ...commonOptions,
            {
              name: "--install",
              description: "Run install before executing the command",
            },
            {
              name: "--services",
              description:
                "Temporarily start services while executing the command. Enabled by default if $HOMEBREW_BUNDLE_SERVICES is set",
            },
            {
              name: "--check",
              description:
                "Check that all dependencies in the Brewfile are installed before executing the command. Enabled by default if $HOMEBREW_BUNDLE_CHECK is set",
            },
            {
              name: "--no-secrets",
              description:
                "Attempt to remove secrets from the environment before executing the command",
            },
            {
              name: "--sandbox",
              description:
                "Run command in Homebrew's sandbox, allowing writes to path and Homebrew's temporary and cache directories",
              args: {
                name: "path",
                template: "filepaths",
              },
            },
            {
              name: "--deny-network",
              description: "Deny network access from inside the sandbox",
              dependsOn: ["--sandbox"],
            },
          ],
        },
        {
          name: "sh",
          description: "Run your shell in a brew bundle exec environment",
          options: [
            ...commonOptions,
            {
              name: "--install",
              description: "Run install before starting the shell",
            },
            {
              name: "--services",
              description:
                "Temporarily start services while running the shell. Enabled by default if $HOMEBREW_BUNDLE_SERVICES is set",
            },
            {
              name: "--check",
              description:
                "Check that all dependencies in the Brewfile are installed before starting the shell. Enabled by default if $HOMEBREW_BUNDLE_CHECK is set",
            },
            {
              name: "--no-secrets",
              description:
                "Attempt to remove secrets from the environment before starting the shell",
            },
          ],
        },
      ],
    },
    {
      name: "autoremove",
      description:
        "Uninstall formulae that were only installed as a dependency of another formula and are now no longer needed",
      options: [
        ...commonOptions,
        {
          name: ["-n", "--dry-run"],
          description:
            "List what would be uninstalled, but do not actually uninstall anything",
        },
      ],
    },
    {
      name: "deps",
      description: "Show dependencies for formula",
      args: formulaOrCaskOptionalVariadicArg,
      options: [
        ...commonOptions,
        {
          name: ["-n", "--topological"],
          description: "Sort dependencies in topological order",
        },
        {
          name: ["-1", "--direct", "--declared", "--1"],
          description:
            "Show only the direct dependencies declared in the formula",
        },
        {
          name: "--union",
          description:
            "Show the union of dependencies for multiple formula, instead of the intersection",
        },
        {
          name: "--full-name",
          description: "List dependencies by their full name",
        },
        {
          name: "--include-implicit",
          description:
            "Include implicit dependencies used to download and unpack source files",
        },
        {
          name: "--include-build",
          description: "Include :build dependencies for formula",
        },
        {
          name: "--include-optional",
          description: "Include :optional dependencies for formula",
        },
        {
          name: "--include-test",
          description:
            "Include :test dependencies for formula (non-recursive unless --graph or --tree)",
        },
        {
          name: "--skip-recommended",
          description: "Skip :recommended dependencies for formula",
        },
        {
          name: "--include-requirements",
          description:
            "Include requirements in addition to dependencies for formula",
        },
        {
          name: "--tree",
          description:
            "Show dependencies as a tree. When given multiple formula arguments, show individual trees for each formula",
          exclusiveOn: ["--graph"],
        },
        {
          name: "--prune",
          description: "Prune parts of tree already seen",
          dependsOn: ["--tree"],
        },
        {
          name: "--graph",
          description: "Show dependencies as a directed graph",
          exclusiveOn: ["--tree"],
        },
        {
          name: "--dot",
          description: "Show text-based graph description in DOT format",
          dependsOn: ["--graph"],
        },
        {
          name: "--annotate",
          description:
            "Mark any build, test, implicit, optional, or recommended dependencies as such in the output",
        },
        {
          name: "--installed",
          description:
            "List dependencies for formulae that are currently installed. If formula is specified, list only its dependencies that are currently installed",
          exclusiveOn: ["--missing"],
        },
        {
          name: "--brewfile",
          description:
            "Use formulae and casks listed in a Brewfile as inputs. Defaults to ./Brewfile; use --brewfile=path to specify another",
          args: {
            name: "file",
            isOptional: true,
            template: "filepaths",
          },
          requiresSeparator: true,
        },
        {
          name: "--missing",
          description: "Show only missing dependencies",
          exclusiveOn: ["--installed"],
        },
        {
          name: "--for-each",
          description:
            "Switch into the mode used when evaluating all formulae and casks, but only list dependencies for each provided formula, one formula per line",
        },
        {
          name: "--HEAD",
          description:
            "Show dependencies for HEAD version instead of stable version",
        },
        {
          name: "--os",
          description: "Show dependencies for the given operating system",
          args: {
            name: "os",
            suggestions: ["all"],
          },
        },
        {
          name: "--arch",
          description: "Show dependencies for the given CPU architecture",
          args: {
            name: "arch",
            suggestions: ["all", "arm", "intel"],
          },
        },
        formulaOption,
        caskOption,
      ],
    },
    {
      name: "uses",
      description:
        "Show formulae and casks that specify formula as a dependency; that is, show dependents of formula",
      args: formulaVariadicArg,
      options: [
        ...commonOptions,
        {
          name: "--recursive",
          description: "Resolve more than one level of dependencies",
        },
        {
          name: "--installed",
          description:
            "Only list formulae and casks that are currently installed",
          exclusiveOn: ["--missing"],
        },
        {
          name: "--missing",
          description:
            "Only list formulae and casks that are not currently installed",
          exclusiveOn: ["--installed"],
        },
        {
          name: "--include-implicit",
          description:
            "Include formulae that have formula as an implicit dependency for downloading and unpacking source files",
        },
        {
          name: "--include-build",
          description:
            "Include formulae that specify formula as a :build dependency",
        },
        {
          name: "--include-test",
          description:
            "Include formulae that specify formula as a :test dependency",
        },
        {
          name: "--include-optional",
          description:
            "Include formulae that specify formula as an :optional dependency",
        },
        {
          name: "--skip-recommended",
          description:
            "Skip all formulae that specify formula as a :recommended dependency",
        },
        {
          name: ["--formula", "--formulae"],
          description: "Include only formulae",
          exclusiveOn: ["--cask"],
        },
        {
          name: ["--cask", "--casks"],
          description: "Include only casks",
          exclusiveOn: ["--formula"],
        },
      ],
    },
    {
      name: "leaves",
      description:
        "List installed formulae that are not dependencies of another installed formula or cask",
      options: [
        ...commonOptions,
        {
          name: ["-r", "--installed-on-request"],
          description: "Only list leaves that were manually installed",
          exclusiveOn: ["--installed-as-dependency"],
        },
        {
          name: ["-p", "--installed-as-dependency"],
          description: "Only list leaves that were installed as dependencies",
          exclusiveOn: ["--installed-on-request"],
        },
      ],
    },
    {
      name: "fetch",
      description:
        "Download a bottle (if available) or source packages for formulae and binaries for casks",
      args: formulaOrCaskVariadicArg,
      options: [
        debugOption,
        quietOption,
        {
          name: ["-v", "--verbose"],
          description:
            "Do a verbose VCS checkout, if the URL represents a VCS. This is useful for seeing if an existing VCS cache has been updated",
        },
        helpOption,
        {
          name: "--os",
          description:
            "Download for the given operating system. (Pass all to download for all operating systems.)",
          args: {
            name: "os",
            suggestions: ["all"],
          },
          exclusiveOn: ["--bottle-tag", "--all-platforms"],
        },
        {
          name: "--arch",
          description:
            "Download for the given CPU architecture. (Pass all to download for all architectures.)",
          args: {
            name: "arch",
            suggestions: ["all", "arm", "intel"],
          },
          exclusiveOn: ["--bottle-tag", "--all-platforms"],
        },
        {
          name: "--all-platforms",
          description:
            "Download for every supported operating system and architecture, plus each language for casks, fetching each distinct URL once",
          exclusiveOn: ["--os", "--arch", "--bottle-tag"],
        },
        {
          name: "--bottle-tag",
          description: "Download a bottle for given tag",
          args: {
            name: "tag",
          },
          exclusiveOn: [
            "--build-from-source",
            "--build-bottle",
            "--force-bottle",
            "--cask",
            "--os",
            "--arch",
            "--all-platforms",
          ],
        },
        {
          name: "--HEAD",
          description: "Fetch HEAD version instead of stable version",
          exclusiveOn: ["--cask"],
        },
        {
          name: ["-f", "--force"],
          description: "Remove a previously cached version and re-fetch",
        },
        {
          name: "--retry",
          description:
            "Retry if downloading fails or re-download if the checksum of a previously cached version no longer matches. Tries at most 5 times with exponential backoff",
        },
        {
          name: "--deps",
          description: "Also download dependencies for any listed formula",
          exclusiveOn: ["--cask"],
        },
        {
          name: "--test",
          description:
            "Also download test resources and their patches for each formula",
          exclusiveOn: ["--cask"],
        },
        {
          name: ["-s", "--build-from-source"],
          description: "Download source packages rather than a bottle",
          exclusiveOn: ["--build-bottle", "--force-bottle", "--bottle-tag"],
        },
        {
          name: "--build-bottle",
          description:
            "Download source packages (for eventual bottling) rather than a bottle",
          exclusiveOn: [
            "--build-from-source",
            "--force-bottle",
            "--bottle-tag",
            "--cask",
          ],
        },
        {
          name: "--force-bottle",
          description:
            "Download a bottle if it exists for the current or newest version of macOS, even if it would not be used during installation",
          exclusiveOn: [
            "--build-from-source",
            "--build-bottle",
            "--bottle-tag",
            "--cask",
          ],
        },
        formulaOption,
        {
          name: ["--cask", "--casks"],
          description: "Treat all named arguments as casks",
          exclusiveOn: [
            "--HEAD",
            "--deps",
            "--test",
            "--build-from-source",
            "--build-bottle",
            "--force-bottle",
            "--bottle-tag",
            "--formula",
          ],
        },
      ],
    },
    {
      name: "reinstall",
      description:
        "Uninstall and then reinstall a formula or cask using the same options it was originally installed with, plus any appended options specific to a formula",
      args: formulaOrCaskVariadicArg,
      options: [
        brewDebugOption,
        quietOption,
        postInstallVerboseOption,
        helpOption,
        displayTimesOption,
        {
          name: ["-f", "--force"],
          description:
            "Install without checking for previously installed keg-only or non-migrated versions",
          exclusiveOn: ["--adopt"],
        },
        {
          name: ["-y", "--no-ask", "--yes"],
          description:
            "Do not ask for confirmation before downloading and reinstalling. Ask mode is the default. Enabled by default if $HOMEBREW_NO_ASK is set",
        },
        {
          name: ["--formula", "--formulae"],
          description: "Treat all named arguments as formulae",
          exclusiveOn: [
            "--cask",
            "--binaries",
            "--require-sha",
            "--adopt",
            "--skip-cask-deps",
            "--zap",
            "--appdir",
            "--appimagedir",
            "--keyboard-layoutdir",
            "--colorpickerdir",
            "--prefpanedir",
            "--qlplugindir",
            "--mdimporterdir",
            "--dictionarydir",
            "--fontdir",
            "--servicedir",
            "--input-methoddir",
            "--internet-plugindir",
            "--audio-unit-plugindir",
            "--vst-plugindir",
            "--vst3-plugindir",
            "--screen-saverdir",
            "--language",
          ],
        },
        {
          name: ["-s", "--build-from-source"],
          description:
            "Compile formula from source even if a bottle is available",
          exclusiveOn: ["--cask", "--force-bottle"],
        },
        interactiveOption,
        {
          name: "--force-bottle",
          description:
            "Install from a bottle if it exists for the current or newest version of macOS, even if it would not normally be used for installation",
          exclusiveOn: ["--cask", "--build-from-source"],
        },
        keepTmpOption,
        debugSymbolsOption,
        {
          name: ["-g", "--git"],
          description:
            "Create a Git repository, useful for creating patches to the software",
          exclusiveOn: ["--cask"],
        },
        {
          name: ["--cask", "--casks"],
          description: "Treat all named arguments as casks",
          exclusiveOn: [
            "--formula",
            "--build-from-source",
            "--interactive",
            "--force-bottle",
            "--keep-tmp",
            "--debug-symbols",
            "--git",
          ],
        },
        binariesOption,
        noBinariesOption,
        requireShaOption,
        {
          name: "--adopt",
          description:
            "Adopt existing artifacts in the destination that are identical to those being installed. Cannot be combined with --force",
          exclusiveOn: ["--formula", "--force"],
        },
        skipCaskDepsOption,
        {
          name: "--zap",
          description:
            "For use with brew reinstall --cask. Remove all files associated with a cask. May remove files which are shared between applications",
          exclusiveOn: ["--formula"],
        },
        appdirOption,
        appimagedirOption,
        keyboardLayoutdirOption,
        colorpickerdirOption,
        prefpanedirOption,
        qlplugindirOption,
        mdimporterdirOption,
        dictionarydirOption,
        fontdirOption,
        servicedirOption,
        inputMethoddirOption,
        internetPlugindirOption,
        audioUnitPlugindirOption,
        vstPlugindirOption,
        vst3PlugindirOption,
        screenSaverdirOption,
        languageOption,
      ],
    },
    {
      name: ["config", "--config"],
      description:
        "Show Homebrew and system configuration info useful for debugging",
      options: [...commonOptions],
    },
    {
      name: ["home", "homepage"],
      description:
        "Open a formula or cask's homepage in a browser, or open Homebrew's own homepage if no argument is provided",
      args: formulaOrCaskOptionalVariadicArg,
      options: [...commonOptions, formulaOption, caskOption],
    },
    {
      name: "desc",
      description: "Display formula's name and one-line description",
      args: {
        name: "formula|cask|text",
        description: "Formula, cask, text or /regex/",
        isVariadic: true,
        generators: [generateAllFormulae, generateAllCasks],
      },
      options: [
        {
          name: "--debug",
          description: "Display any debugging information",
        },
        quietOption,
        verboseOption,
        helpOption,
        {
          name: ["-s", "--search"],
          description:
            "Search both names and descriptions for text. If text is flanked by slashes, it is interpreted as a regular expression",
          exclusiveOn: ["--name", "--description"],
        },
        {
          name: ["-n", "--name"],
          description:
            "Search just names for text. If text is flanked by slashes, it is interpreted as a regular expression",
          exclusiveOn: ["--search", "--description"],
        },
        {
          name: ["-d", "--description"],
          description:
            "Search just descriptions for text. If text is flanked by slashes, it is interpreted as a regular expression",
          exclusiveOn: ["--search", "--name"],
        },
        {
          name: ["--formula", "--formulae"],
          description: "Treat all named arguments as formulae",
        },
        {
          name: ["--cask", "--casks"],
          description: "Treat all named arguments as casks",
        },
      ],
    },
    {
      name: "analytics",
      description:
        "Control Homebrew's anonymous aggregate user behaviour analytics",
      options: [...commonOptions],
      subcommands: [
        {
          name: "state",
          description: "Display the current state of Homebrew's analytics",
          options: [...commonOptions],
        },
        {
          name: "on",
          description: "Turn Homebrew's analytics on",
          options: [...commonOptions],
        },
        {
          name: "off",
          description: "Turn Homebrew's analytics off",
          options: [...commonOptions],
        },
      ],
    },
    {
      name: "completions",
      description:
        "Control whether Homebrew automatically links external tap shell completion files",
      options: [...commonOptions],
      subcommands: [
        {
          name: "state",
          description: "Display the current state of Homebrew's completions",
          options: [...commonOptions],
        },
        {
          name: "link",
          description: "Link Homebrew's completions",
          options: [...commonOptions],
        },
        {
          name: "unlink",
          description: "Unlink Homebrew's completions",
          options: [...commonOptions],
        },
      ],
    },
    {
      name: "developer",
      description: "Control Homebrew's developer mode",
      options: [...commonOptions],
      subcommands: [
        {
          name: "state",
          description: "Display the current state of Homebrew's developer mode",
          options: [...commonOptions],
        },
        {
          name: "on",
          description: "Turn Homebrew's developer mode on",
          options: [...commonOptions],
        },
        {
          name: "off",
          description: "Turn Homebrew's developer mode off",
          options: [...commonOptions],
        },
      ],
    },
    {
      name: "alias",
      description: "Show an alias's command",
      args: {
        name: "alias",
        isOptional: true,
        generators: generateAliases,
      },
      options: [
        ...commonOptions,
        {
          name: "--edit",
          description:
            "Edit aliases in a text editor. Either one or all aliases may be opened at once. If the given alias doesn't exist it'll be pre-populated with a template",
        },
      ],
    },
    {
      name: "unalias",
      description: "Remove aliases",
      args: {
        name: "alias",
        isVariadic: true,
        generators: generateAliases,
      },
      options: [...commonOptions],
    },
    {
      name: "as-brew-user",
      description:
        "Run a Homebrew command as the owner of HOMEBREW_PREFIX on macOS or Linux",
      args: [
        {
          name: "command",
          generators: commandsGenerator,
        },
        {
          name: "args",
          isOptional: true,
          isVariadic: true,
        },
      ],
      options: [...commonOptions],
    },
    {
      name: "as-console-user",
      description:
        "Run a Homebrew command as the user logged in to the macOS desktop",
      args: [
        {
          name: "command",
          generators: commandsGenerator,
        },
        {
          name: "args",
          isOptional: true,
          isVariadic: true,
        },
      ],
      options: [...commonOptions],
    },
    {
      name: "casks",
      description: "List all locally installable casks including short names",
      options: [...commonOptions],
    },
    {
      name: "command",
      description:
        "Display the path to the file being used when invoking brew cmd",
      args: commandVariadicArg,
      options: [...commonOptions],
    },
    {
      name: "command-not-found-init",
      description:
        "Print instructions for setting up the command-not-found hook for your shell",
      options: [...commonOptions],
    },
    {
      name: "commands",
      description: "Show lists of built-in and external commands",
      options: [
        debugOption,
        {
          name: ["-q", "--quiet"],
          description:
            "List only the names of commands without category headers",
        },
        verboseOption,
        helpOption,
        {
          name: "--include-aliases",
          description: "Include aliases of internal commands",
          dependsOn: ["--quiet"],
        },
      ],
    },
    {
      name: "docs",
      description:
        "Open Homebrew's online documentation at https://docs.brew.sh in a browser",
      options: [...commonOptions],
    },
    {
      name: ["exec", "x"],
      description:
        "Run command in an environment populated by Homebrew formulae",
      args: {
        name: "command",
        isCommand: true,
      },
      options: [
        ...commonOptions,
        {
          name: "--formulae",
          description:
            "Comma-separated formulae to install and add to PATH before running command",
          args: {
            name: "formulae",
          },
        },
        {
          name: "--sandbox",
          description:
            "Run command in Homebrew's sandbox, allowing writes to path and Homebrew's temporary and cache directories",
          args: {
            name: "path",
            template: "filepaths",
          },
        },
        {
          name: "--deny-network",
          description: "Deny network access from inside the sandbox",
          dependsOn: ["--sandbox"],
        },
      ],
    },
    {
      name: "formulae",
      description:
        "List all locally installable formulae including short names",
      options: [...commonOptions],
    },
    {
      name: "gist-logs",
      description: "Upload logs for a failed build of formula to a new Gist",
      args: formulaArg,
      options: [
        ...commonOptions,
        {
          name: ["-n", "--new-issue"],
          description:
            "Automatically create a new issue in the appropriate GitHub repository after creating the Gist",
        },
        {
          name: ["-p", "--private"],
          description:
            "The Gist will be marked private and will not appear in listings but will be accessible with its link",
        },
      ],
    },
    {
      name: "help",
      description: "Outputs the usage instructions for brew command",
      args: {
        name: "command",
        isOptional: true,
        isVariadic: true,
        generators: commandsGenerator,
      },
      options: [...commonOptions],
    },
    {
      name: "log",
      description:
        "Show the git log for formula or cask, or show the log for the Homebrew repository if no formula or cask is provided",
      args: {
        name: "formula|cask",
        description: "Formula or cask",
        isOptional: true,
        generators: [generateAllFormulae, generateAllCasks],
      },
      options: [
        ...commonOptions,
        {
          name: ["-p", "-u", "--patch"],
          description: "Also print patch from commit",
        },
        {
          name: "--stat",
          description: "Also print diffstat from commit",
        },
        {
          name: "--oneline",
          description: "Print only one line per commit",
        },
        {
          name: "-1",
          description: "Print only one commit",
          exclusiveOn: ["--max-count"],
        },
        {
          name: ["-n", "--max-count"],
          description: "Print only a specified number of commits",
          args: {
            name: "max-count",
          },
          exclusiveOn: ["-1"],
        },
        formulaOption,
        caskOption,
      ],
    },
    {
      name: "mcp-server",
      description: "Starts the Homebrew MCP (Model Context Protocol) server",
      options: [
        {
          name: ["-d", "--debug"],
          description: "Enable debug logging to stderr",
        },
        quietOption,
        verboseOption,
        helpOption,
      ],
    },
    {
      name: "migrate",
      description:
        "Migrate renamed packages to new names, where formula are old names of packages",
      args: installedFormulaOrCaskVariadicArg,
      options: [
        ...commonOptions,
        {
          name: ["-f", "--force"],
          description:
            "Treat installed formula and provided formula as if they are from the same taps and migrate them anyway",
        },
        {
          name: ["-n", "--dry-run"],
          description:
            "Show what would be migrated, but do not actually migrate anything",
        },
        {
          name: ["--formula", "--formulae"],
          description: "Only migrate formulae",
          exclusiveOn: ["--cask"],
        },
        {
          name: ["--cask", "--casks"],
          description: "Only migrate casks",
          exclusiveOn: ["--formula"],
        },
      ],
    },
    {
      name: "missing",
      description:
        "Check the given formula kegs and cask installations for missing dependencies",
      args: formulaOrCaskOptionalVariadicArg,
      options: [
        ...commonOptions,
        {
          name: "--hide",
          description:
            "Act as if none of the specified hidden are installed. hidden should be a comma-separated list of formulae or casks",
          args: {
            name: "hide",
          },
        },
      ],
    },
    {
      name: "nodenv-sync",
      description:
        "Create symlinks for Homebrew's installed NodeJS versions in ~/.nodenv/versions",
      options: [...commonOptions],
    },
    {
      name: "options",
      description: "Show install options specific to formula",
      args: formulaOptionalVariadicArg,
      options: [
        ...commonOptions,
        {
          name: "--compact",
          description: "Show all options on a single line separated by spaces",
        },
        {
          name: "--installed",
          description: "Show options for formulae that are currently installed",
        },
      ],
    },
    {
      name: ["postinstall", "post_install"],
      description: "Rerun the post-install steps for formula",
      args: {
        name: "formula",
        description: "Installed formula",
        isVariadic: true,
        generators: installedFormulaeGenerator,
      },
      options: [...commonOptions],
    },
    {
      name: "pyenv-sync",
      description:
        "Create symlinks for Homebrew's installed Python versions in ~/.pyenv/versions",
      options: [...commonOptions],
    },
    {
      name: "rbenv-sync",
      description:
        "Create symlinks for Homebrew's installed Ruby versions in ~/.rbenv/versions",
      options: [...commonOptions],
    },
    {
      name: "readall",
      description:
        "Import all items from the specified tap, or from all installed taps if none is provided",
      args: tapOptionalVariadicArg,
      options: [
        ...commonOptions,
        {
          name: "--os",
          description:
            "Read using the given operating system. (Pass all to simulate all operating systems.)",
          args: {
            name: "os",
            suggestions: ["all"],
          },
        },
        {
          name: "--arch",
          description:
            "Read using the given CPU architecture. (Pass all to simulate all architectures.)",
          args: {
            name: "arch",
            suggestions: ["all", "arm", "intel"],
          },
        },
        {
          name: "--aliases",
          description: "Verify any alias symlinks in each tap",
        },
        {
          name: "--syntax",
          description:
            "Syntax-check all of Homebrew's Ruby files (if no tap is passed)",
        },
        {
          name: "--no-simulate",
          description:
            "Don't simulate other system configurations when checking formulae and casks",
        },
      ],
    },
    {
      name: "sandbox-exec",
      description:
        "Run command in Homebrew's sandbox, allowing writes to writable-path and Homebrew's temporary and cache directories",
      args: [
        {
          name: "writable-path",
          template: "folders",
        },
        {
          name: "command",
          isCommand: true,
        },
      ],
      options: [
        ...commonOptions,
        {
          name: "--deny-network",
          description: "Deny network access from inside the sandbox",
        },
      ],
    },
    {
      name: "setup-ruby",
      description: "Installs and configures Homebrew's Ruby",
      args: {
        name: "command",
        isOptional: true,
        isVariadic: true,
      },
      options: [...commonOptions],
    },
    {
      name: "shellenv",
      description:
        "Print export statements to add Homebrew to your PATH, MANPATH and INFOPATH",
      args: {
        name: "shell",
        isOptional: true,
        suggestions: ["bash", "csh", "fish", "pwsh", "sh", "tcsh", "zsh"],
      },
      options: [...commonOptions],
    },
    {
      name: "source",
      description:
        "Open a formula's source repository in a browser, or open Homebrew's own repository if no argument is provided",
      args: formulaOptionalVariadicArg,
      options: [...commonOptions],
    },
    {
      name: "tab",
      description: "Edit tab information for installed formulae or casks",
      args: installedFormulaOrCaskVariadicArg,
      options: [
        ...commonOptions,
        {
          name: "--installed-on-request",
          description:
            "Mark installed_formula or installed_cask as installed on request",
          exclusiveOn: ["--no-installed-on-request"],
        },
        {
          name: "--no-installed-on-request",
          description:
            "Mark installed_formula or installed_cask as not installed on request",
          exclusiveOn: ["--installed-on-request"],
        },
        {
          name: ["--formula", "--formulae"],
          description: "Only mark formulae",
          exclusiveOn: ["--cask"],
        },
        {
          name: ["--cask", "--casks"],
          description: "Only mark casks",
          exclusiveOn: ["--formula"],
        },
      ],
    },
    {
      name: "tap-info",
      description: "Show detailed information about one or more taps",
      args: tapOptionalVariadicArg,
      options: [
        ...commonOptions,
        {
          name: "--installed",
          description: "Show information on each installed tap",
        },
        {
          name: "--json",
          description:
            "Print a JSON representation of tap. Currently the default and only accepted value for version is v1. See the docs for examples of using the JSON output: https://docs.brew.sh/Querying-Brew",
          args: {
            name: "version",
            isOptional: true,
            suggestions: ["v1"],
          },
          requiresSeparator: true,
        },
      ],
    },
    {
      name: "trust",
      description:
        "Trust non-official tap formulae, casks or commands so Homebrew may load them",
      args: {
        name: "target",
        isOptional: true,
        isVariadic: true,
      },
      options: [
        ...commonOptions,
        {
          name: ["--tap", "--taps"],
          description: "Trust the named tap",
          exclusiveOn: ["--formula", "--cask", "--command"],
        },
        {
          name: ["--formula", "--formulae"],
          description: "Trust the named formula",
          exclusiveOn: ["--tap", "--cask", "--command"],
        },
        {
          name: ["--cask", "--casks"],
          description: "Trust the named cask",
          exclusiveOn: ["--tap", "--formula", "--command"],
        },
        {
          name: ["--command", "--commands"],
          description: "Trust the named external command",
          exclusiveOn: ["--tap", "--formula", "--cask"],
        },
        {
          name: "--json",
          description:
            "Print trusted entries as JSON. A version number is required. The only accepted value for version is v1",
          args: {
            name: "version",
            suggestions: ["v1"],
          },
        },
      ],
    },
    {
      name: "untrust",
      description: "Stop trusting non-official tap formulae, casks or commands",
      args: {
        name: "target",
        isOptional: true,
        isVariadic: true,
      },
      options: [
        ...commonOptions,
        {
          name: "--tap",
          description: "Untrust the named tap",
          exclusiveOn: ["--formula", "--cask", "--command"],
        },
        {
          name: ["--formula", "--formulae"],
          description: "Untrust the named formula",
          exclusiveOn: ["--tap", "--cask", "--command"],
        },
        {
          name: ["--cask", "--casks"],
          description: "Untrust the named cask",
          exclusiveOn: ["--tap", "--formula", "--command"],
        },
        {
          name: ["--command", "--commands"],
          description: "Untrust the named external command",
          exclusiveOn: ["--tap", "--formula", "--cask"],
        },
      ],
    },
    {
      name: "update-if-needed",
      description: "Runs brew update --auto-update only if needed",
      options: [...commonOptions],
    },
    {
      name: "update-reset",
      description:
        "Fetch and reset Homebrew and all tap repositories (or any specified repository) using git(1) to their latest origin/HEAD",
      args: {
        name: "repository",
        isOptional: true,
        isVariadic: true,
        template: "folders",
      },
      options: [...commonOptions],
    },
    {
      name: "version-install",
      description:
        "Extract a specific version of formula into a personal tap and install it",
      args: [
        {
          name: "formula[@version]",
          generators: generateAllFormulae,
        },
        {
          name: "version",
          isOptional: true,
        },
      ],
      options: [...commonOptions],
    },
    {
      name: "vulns",
      description:
        "Check formula for known security vulnerabilities using the OSV.dev database",
      args: formulaOptionalVariadicArg,
      options: [
        {
          name: "--debug",
          description: "Display any debugging information",
        },
        quietOption,
        verboseOption,
        helpOption,
        {
          name: ["-d", "--deps"],
          description: "Also check the dependencies of named formulae",
        },
        {
          name: "--no-ignore-patches",
          description:
            "Report vulnerabilities even when a formula patch resolves them",
        },
        {
          name: "--brewfile",
          description:
            "Check formulae listed in a Brewfile. Defaults to ./Brewfile; use --brewfile=path to specify another",
          args: {
            name: "file",
            isOptional: true,
            template: "filepaths",
          },
          requiresSeparator: true,
        },
        {
          name: "--fix-available",
          description:
            "Only report vulnerabilities that have a released version fix available. Shortcut for --fix-type=released",
          exclusiveOn: ["--no-fix-available", "--fix-type"],
        },
        {
          name: "--no-fix-available",
          description:
            "Only report vulnerabilities that do not have a released version fix available (includes unreleased commit SHA patches). Shortcut for --fix-type=unreleased",
          exclusiveOn: ["--fix-available", "--fix-type"],
        },
        {
          name: "--fix-type",
          description:
            "Filter findings by fix type: released (official version release), patch (unreleased commit SHA), any (either), none (neither), unreleased (no released version fix)",
          args: {
            name: "type",
            suggestions: ["released", "patch", "any", "none", "unreleased"],
          },
          exclusiveOn: ["--fix-available", "--no-fix-available"],
        },
        {
          name: "--list-skipped",
          description:
            "List packages skipped due to missing or unsupported source URL",
        },
        {
          name: ["-s", "--severity"],
          description:
            "Only report findings at or above: low, medium, high, critical",
          args: {
            name: "severity",
            suggestions: ["low", "medium", "high", "critical"],
          },
        },
        {
          name: ["-m", "--max-summary"],
          description:
            "Truncate summaries to n characters (default 60, 0 for no limit)",
          args: {
            name: "max-summary",
          },
        },
        {
          name: ["-j", "--json"],
          description:
            "Output findings and scan coverage as JSON. A complete scan does not guarantee the absence of vulnerabilities",
        },
      ],
    },
    {
      name: "which-formula",
      description: "Show which formula(e) provides the given command",
      args: {
        name: "command",
        isVariadic: true,
      },
      options: [
        ...commonOptions,
        {
          name: "--explain",
          description:
            "Output explanation of how to get command by installing one of the providing formulae",
        },
      ],
    },
    {
      name: "audit",
      description: "Check formula or cask for Homebrew coding style violations",
      args: formulaOrCaskOptionalVariadicArg,
      options: [
        ...commonOptions,
        {
          name: "--os",
          description:
            "Audit the given operating system. (Pass all to audit all operating systems.)",
          args: {
            name: "os",
            suggestions: ["all"],
          },
        },
        {
          name: "--arch",
          description:
            "Audit the given CPU architecture. (Pass all to audit all architectures.)",
          args: {
            name: "arch",
            suggestions: ["all", "arm", "intel"],
          },
        },
        {
          name: "--strict",
          description: "Run additional, stricter style checks",
          exclusiveOn: ["--only-cops", "--except-cops"],
        },
        {
          name: "--git",
          description:
            "Run additional, slower style checks that navigate the Git repository",
        },
        {
          name: "--online",
          description:
            "Run additional, slower style checks that require a network connection",
        },
        {
          name: "--installed",
          description:
            "Only check formulae and casks that are currently installed",
          exclusiveOn: ["--changed", "--tap"],
        },
        {
          name: "--new",
          description:
            "Run various additional style checks to determine if a new formula or cask is eligible for Homebrew. This should be used when creating new formulae or casks and implies --strict and --online",
        },
        {
          name: "--changed",
          description: "Check files that were changed from the main branch",
          exclusiveOn: ["--installed", "--tap"],
        },
        {
          name: "--tap",
          description:
            "Check formulae and casks within the given tap, specified as user/repo",
          args: {
            name: "tap",
            generators: repositoriesGenerator(),
          },
          exclusiveOn: ["--installed", "--changed"],
        },
        {
          name: "--fix",
          description:
            "Fix style violations automatically using RuboCop's auto-correct feature. When passed with --online for casks, also correct the depends_on macos: stanza and the case of artifact stanzas",
        },
        {
          name: "--display-filename",
          description:
            "Prefix every line of output with the file or formula name being audited, to make output easy to grep",
        },
        {
          name: "--skip-style",
          description:
            "Skip running non-RuboCop style checks. Useful if you plan on running brew style separately. Enabled by default unless a formula is specified by name",
        },
        {
          name: ["-D", "--audit-debug"],
          description: "Enable debugging and profiling of audit methods",
        },
        {
          name: "--only",
          description:
            "Specify a comma-separated method list to only run the methods named audit_method",
          args: {
            name: "only",
          },
          exclusiveOn: ["--except", "--only-cops", "--except-cops"],
        },
        {
          name: "--except",
          description:
            "Specify a comma-separated method list to skip running the methods named audit_method",
          args: {
            name: "except",
          },
          exclusiveOn: ["--only"],
        },
        {
          name: "--only-cops",
          description:
            "Specify a comma-separated cops list to check for violations of only the listed RuboCop cops",
          args: {
            name: "only-cops",
          },
          exclusiveOn: ["--except-cops", "--strict", "--only"],
        },
        {
          name: "--except-cops",
          description:
            "Specify a comma-separated cops list to skip checking for violations of the listed RuboCop cops",
          args: {
            name: "except-cops",
          },
          exclusiveOn: ["--only-cops", "--strict", "--only"],
        },
        formulaOption,
        caskOption,
      ],
    },
    {
      name: "benchmark",
      description:
        "Benchmark this brew with hyperfine, installing hyperfine first if it is missing",
      args: formulaVariadicArg,
      options: [
        ...commonOptions,
        {
          name: "--exec",
          description:
            "Run hyperfine with the arguments given after -- instead of Homebrew's own workloads, e.g. brew benchmark --exec -- 'brew --version'",
          exclusiveOn: ["--runs"],
        },
        {
          name: "--runs",
          description: "Number of repetitions of each workload. Defaults to 3",
          args: {
            name: "runs",
          },
          exclusiveOn: ["--exec"],
        },
      ],
    },
    {
      name: "bottle",
      description:
        "Generate a bottle (binary package) from a formula that was installed with --build-bottle",
      args: {
        name: "formula|file",
        isVariadic: true,
        template: "filepaths",
        generators: installedFormulaeGenerator,
      },
      options: [
        ...commonOptions,
        {
          name: "--skip-relocation",
          description:
            "Do not check if the bottle can be marked as relocatable",
        },
        {
          name: "--force-core-tap",
          description:
            "Build a bottle even if formula is not in homebrew/core or any installed taps",
        },
        {
          name: "--no-rebuild",
          description:
            "If the formula specifies a rebuild version, remove it from the generated DSL",
          exclusiveOn: ["--keep-old"],
        },
        {
          name: "--keep-old",
          description:
            "If the formula specifies a rebuild version, attempt to preserve its value in the generated DSL",
          exclusiveOn: ["--no-rebuild"],
        },
        {
          name: "--json",
          description:
            "Write bottle information to a JSON file, which can be used as the value for --merge",
        },
        {
          name: "--merge",
          description:
            "Generate an updated bottle block for a formula and optionally merge it into the formula file. Instead of a formula name, requires the path to a JSON file generated with brew bottle --json formula",
        },
        {
          name: "--write",
          description:
            "Write changes to the formula file. A new commit will be generated unless --no-commit is passed",
          dependsOn: ["--merge"],
        },
        {
          name: "--no-commit",
          description:
            "When passed with --write, a new commit will not generated after writing changes to the formula file",
          dependsOn: ["--write"],
        },
        {
          name: "--only-json-tab",
          description:
            "When passed with --json, the tab will be written to the JSON file but not the bottle",
          dependsOn: ["--json"],
        },
        {
          name: "--no-all-checks",
          description:
            "Don't try to create an all bottle or stop a no-change upload",
          dependsOn: ["--merge"],
        },
        rootUrlOption,
        rootUrlUsingOption,
      ],
    },
    {
      name: "bump",
      description:
        "Displays out-of-date packages and the latest version available",
      args: formulaOrCaskOptionalVariadicArg,
      options: [
        ...commonOptions,
        {
          name: "--full-name",
          description: "Print formulae/casks with fully-qualified names",
        },
        {
          name: "--no-pull-requests",
          description: "Do not retrieve pull requests from GitHub",
          exclusiveOn: ["--open-pr"],
        },
        {
          name: "--no-autobump",
          description:
            "Ignore formulae/casks in autobump list (official repositories only)",
          exclusiveOn: ["--tap"],
        },
        {
          name: ["--formula", "--formulae"],
          description: "Check only formulae",
          exclusiveOn: ["--cask"],
        },
        {
          name: ["--cask", "--casks"],
          description: "Check only casks",
          exclusiveOn: ["--formula"],
        },
        {
          name: "--repology",
          description: "Use Repology to check for outdated packages",
        },
        {
          name: "--tap",
          description:
            "Check formulae and casks within the given tap, specified as user/repo",
          args: {
            name: "tap",
            generators: repositoriesGenerator(),
          },
          exclusiveOn: ["--installed", "--no-autobump"],
        },
        {
          name: "--installed",
          description: "Check formulae and casks that are currently installed",
          exclusiveOn: ["--tap"],
        },
        noForkOption,
        {
          name: "--open-pr",
          description:
            "Open a pull request for the new version if none have been opened yet",
          exclusiveOn: ["--no-pull-requests"],
        },
        {
          name: "--start-with",
          description:
            "Letter or word that the list of package results should alphabetically follow",
          args: {
            name: "start-with",
          },
        },
        {
          name: "--bump-synced",
          description:
            "Bump additional formulae marked as synced with the given formulae",
        },
      ],
    },
    {
      name: "bump-cask-pr",
      description: "Create a pull request to update cask with a new version",
      args: {
        name: "cask",
        generators: generateAllCasks,
      },
      options: [
        ...commonOptions,
        dryRunOption,
        {
          name: "--write-only",
          description:
            "Make the expected file modifications without taking any Git actions",
        },
        {
          name: "--commit",
          description:
            "When passed with --write-only, generate a new commit after writing changes to the cask file",
          dependsOn: ["--write-only"],
        },
        {
          name: "--no-audit",
          description: "Don't run brew audit before opening the PR",
        },
        {
          name: "--no-style",
          description: "Don't run brew style --fix before opening the PR",
        },
        {
          name: "--no-browse",
          description:
            "Print the pull request URL instead of opening in a browser",
        },
        noForkOption,
        {
          name: "--version",
          description: "Specify the new version for the cask",
          args: {
            name: "version",
          },
          exclusiveOn: [
            "--version-arm",
            "--version-intel",
            "--version-linux-arm",
            "--version-linux-intel",
          ],
        },
        {
          name: "--version-arm",
          description: "Specify the new cask version for macOS on ARM",
          args: {
            name: "version-arm",
          },
          exclusiveOn: ["--version"],
        },
        {
          name: "--version-intel",
          description: "Specify the new cask version for macOS on Intel",
          args: {
            name: "version-intel",
          },
          exclusiveOn: ["--version"],
        },
        {
          name: "--version-linux-arm",
          description: "Specify the new cask version for Linux on ARM",
          args: {
            name: "version-linux-arm",
          },
          exclusiveOn: ["--version"],
        },
        {
          name: "--version-linux-intel",
          description: "Specify the new cask version for Linux on Intel",
          args: {
            name: "version-linux-intel",
          },
          exclusiveOn: ["--version"],
        },
        {
          name: "--message",
          description: "Prepend message to the default pull request message",
          args: {
            name: "message",
          },
        },
        {
          name: "--url",
          description: "Specify the URL for the new download",
          args: {
            name: "url",
          },
        },
        {
          name: "--sha256",
          description: "Specify the SHA-256 checksum of the new download",
          args: {
            name: "sha256",
          },
        },
        {
          name: "--fork-org",
          description: "Use the specified GitHub organisation for forking",
          args: {
            name: "fork-org",
          },
        },
      ],
    },
    {
      name: "bump-compatibility-version",
      description:
        "Create a commit to increment the compatibility_version of formula",
      args: formulaVariadicArg,
      options: [
        ...commonOptions,
        dryRunOption2,
        writeOnlyOption,
        {
          name: "--message",
          description: "Append message to the default commit message",
          args: {
            name: "message",
          },
        },
      ],
    },
    {
      name: "bump-formula-pr",
      description:
        "Create a pull request to update formula with a new URL or a new tag",
      args: {
        name: "formula",
        isOptional: true,
        generators: generateAllFormulae,
      },
      options: [
        ...commonOptions,
        dryRunOption2,
        writeOnlyOption,
        {
          name: "--commit",
          description:
            "When passed with --write-only, generate a new commit after writing changes to the formula file",
          dependsOn: ["--write-only"],
        },
        {
          name: "--no-audit",
          description: "Don't run brew audit before opening the PR",
          exclusiveOn: ["--strict", "--online"],
        },
        {
          name: "--strict",
          description: "Run brew audit --strict before opening the PR",
          exclusiveOn: ["--no-audit"],
        },
        {
          name: "--online",
          description: "Run brew audit --online before opening the PR",
          exclusiveOn: ["--no-audit"],
        },
        {
          name: "--no-browse",
          description:
            "Print the pull request URL instead of opening in a browser",
        },
        noForkOption,
        {
          name: "--mirror",
          description:
            "Use the specified URL as a mirror URL. If URL is a comma-separated list of URLs, multiple mirrors will be added",
          args: {
            name: "mirror",
          },
        },
        {
          name: "--fork-org",
          description: "Use the specified GitHub organisation for forking",
          args: {
            name: "fork-org",
          },
        },
        {
          name: "--version",
          description:
            "Use the specified version to override the value parsed from the URL or tag. Note that --version=0 can be used to delete an existing version override from a formula if it has become redundant",
          args: {
            name: "version",
          },
        },
        {
          name: "--message",
          description: "Prepend message to the default pull request message",
          args: {
            name: "message",
          },
        },
        {
          name: "--url",
          description:
            "Specify the URL for the new download. If a URL is specified, the SHA-256 checksum of the new download should also be specified",
          args: {
            name: "url",
          },
          exclusiveOn: ["--tag"],
        },
        {
          name: "--sha256",
          description: "Specify the SHA-256 checksum of the new download",
          args: {
            name: "sha256",
          },
          dependsOn: ["--url"],
        },
        {
          name: "--tag",
          description: "Specify the new git commit tag for the formula",
          args: {
            name: "tag",
          },
          exclusiveOn: ["--url"],
        },
        {
          name: "--revision",
          description:
            "Specify the new commit revision corresponding to the specified git tag or specified version",
          args: {
            name: "revision",
          },
        },
        {
          name: ["-f", "--force"],
          description: "Remove all mirrors if --mirror was not specified",
        },
        installDependenciesOption,
        {
          name: "--python-package-name",
          description:
            "Use the specified package-name when finding Python resources for formula. If no package name is specified, it will be inferred from the formula's stable URL",
          args: {
            name: "python-package-name",
          },
        },
        {
          name: "--python-extra-packages",
          description:
            "Include these additional Python packages when finding resources",
          args: {
            name: "python-extra-packages",
          },
        },
        {
          name: "--python-exclude-packages",
          description: "Exclude these Python packages when finding resources",
          args: {
            name: "python-exclude-packages",
          },
        },
      ],
    },
    {
      name: "bump-revision",
      description: "Create a commit to increment the revision of formula",
      args: formulaVariadicArg,
      options: [
        ...commonOptions,
        dryRunOption2,
        {
          name: "--remove-bottle-block",
          description:
            "Remove the bottle block in addition to bumping the revision",
        },
        writeOnlyOption,
        {
          name: "--message",
          description: "Append message to the default commit message",
          args: {
            name: "message",
          },
        },
      ],
    },
    {
      name: "bump-unversioned-casks",
      description:
        "Check all casks with unversioned URLs in a given tap for updates",
      args: {
        name: "cask|tap",
        isVariadic: true,
        generators: [generateAllCasks, repositoriesGenerator()],
      },
      options: [
        ...commonOptions,
        {
          name: ["-n", "--dry-run"],
          description:
            "Do everything except caching state and opening pull requests",
        },
        {
          name: "--limit",
          description: "Maximum runtime in minutes",
          args: {
            name: "limit",
          },
        },
        {
          name: "--state-file",
          description: "File for caching state",
          args: {
            name: "file",
            template: "filepaths",
          },
        },
      ],
    },
    {
      name: "cat",
      description: "Display the source of a formula or cask",
      args: formulaOrCaskVariadicArg,
      options: [...commonOptions, formulaOption, caskOption],
    },
    {
      name: "contributions",
      description: "Summarise contributions to Homebrew repositories",
      options: [
        ...commonOptions,
        {
          name: "--user",
          description:
            "Specify a comma-separated list of GitHub usernames or email addresses to find contributions from. Omitting this flag searches Homebrew maintainers and requires access to the Homebrew/maintainers team. With --maintainer-report-csv, only matching period-end Maintainers are included",
          args: {
            name: "user",
          },
          exclusiveOn: ["--team"],
        },
        {
          name: "--repositories",
          description:
            "Specify a comma-separated list of repositories to search. All repositories must be under the same user or organisation. Omitting this flag, or specifying --repositories=primary, searches only the main repositories: Homebrew/brew, Homebrew/homebrew-core, Homebrew/homebrew-cask",
          args: {
            name: "repositories",
          },
          exclusiveOn: ["--organisation", "--maintainer-report-csv"],
        },
        {
          name: ["--organisation", "--organization", "--org"],
          description:
            "Specify the organisation to populate sources repositories from. Omitting this flag searches the Homebrew primary repositories",
          args: {
            name: "organisation",
          },
          exclusiveOn: ["--repositories", "--team", "--maintainer-report-csv"],
        },
        {
          name: "--team",
          description:
            "Specify the team to populate users from. The first part of the team name will be used as the organisation",
          args: {
            name: "team",
          },
          exclusiveOn: ["--organisation", "--user", "--maintainer-report-csv"],
        },
        {
          name: "--quarter",
          description:
            "Homebrew contributions quarter to search (1-4). Omitting this flag searches the past year. If --from or --to are set, they take precedence",
          args: {
            name: "quarter",
          },
          exclusiveOn: ["--maintainer-report-csv"],
        },
        {
          name: "--from",
          description:
            "Date (ISO 8601 format) to start searching contributions. Omitting this flag searches the past year",
          args: {
            name: "from",
          },
        },
        {
          name: "--to",
          description: "Date (ISO 8601 format) to stop searching contributions",
          args: {
            name: "to",
          },
        },
        {
          name: "--csv",
          description:
            "Print a CSV of contributions across repositories over the time period",
        },
        {
          name: "--maintainer-report-csv",
          description:
            "Print a CSV of Maintainer and Lead Maintainer activity criteria using fetched Git histories, verified GitHub approvals and issue closures for the Homebrew governance quarter, for example --maintainer-report-csv=2026-2. Alternatively, omit the value and set --from and --to for any reporting period. Also write it in the current directory as brew-contributions-FROM-to-TO.csv, or brew-contributions-FROM-to-TO-USER.csv when filtered with --user, beside a matching .md summary of activity in the latest completed and current quarters with each Maintainer's numerical gap. Only Maintainers listed at the end of that period are included. Activity checks use the latest completed governance quarter; role recommendations use up to four full quarters of reports. Counts are capped at 500 per repository and contribution type. Merge and approval checks stop once the activity thresholds are met. Historical reports using older criteria must be regenerated. Completed-period GitHub searches are cached in Homebrew's cache and removed by normal cache pruning. YEAR-1 is December of the previous year through February, YEAR-2 is March through May, YEAR-3 is June through August and YEAR-4 is September through November",
          args: {
            name: "maintainer-report-csv",
            isOptional: true,
          },
          requiresSeparator: true,
          exclusiveOn: [
            "--repositories",
            "--organisation",
            "--team",
            "--quarter",
          ],
        },
        {
          name: "--maintainer-exempt",
          description:
            "GitHub usernames exempt from Maintainer inactivity removal, such as Security Team members. Lead Maintainer activity requirements still apply",
          args: {
            name: "maintainer-exempt",
          },
        },
      ],
    },
    {
      name: "create",
      description:
        "Generate a formula or, with --cask, a cask for the downloadable file at URL and open it in the editor",
      args: {
        name: "URL",
      },
      options: [
        ...commonOptions,
        {
          name: "--autotools",
          description: "Create a basic template for an Autotools-style build",
          exclusiveOn: [
            "--cabal",
            "--cmake",
            "--crystal",
            "--go",
            "--meson",
            "--node",
            "--perl",
            "--python",
            "--ruby",
            "--rust",
            "--zig",
            "--cask",
          ],
        },
        {
          name: "--cabal",
          description: "Create a basic template for a Cabal build",
          exclusiveOn: [
            "--autotools",
            "--cmake",
            "--crystal",
            "--go",
            "--meson",
            "--node",
            "--perl",
            "--python",
            "--ruby",
            "--rust",
            "--zig",
            "--cask",
          ],
        },
        {
          name: "--cask",
          description: "Create a basic template for a cask",
          exclusiveOn: [
            "--autotools",
            "--cabal",
            "--cmake",
            "--crystal",
            "--go",
            "--meson",
            "--node",
            "--perl",
            "--python",
            "--ruby",
            "--rust",
            "--zig",
            "--HEAD",
            "--set-license",
          ],
        },
        {
          name: "--cmake",
          description: "Create a basic template for a CMake-style build",
          exclusiveOn: [
            "--autotools",
            "--cabal",
            "--crystal",
            "--go",
            "--meson",
            "--node",
            "--perl",
            "--python",
            "--ruby",
            "--rust",
            "--zig",
            "--cask",
          ],
        },
        {
          name: "--crystal",
          description: "Create a basic template for a Crystal build",
          exclusiveOn: [
            "--autotools",
            "--cabal",
            "--cmake",
            "--go",
            "--meson",
            "--node",
            "--perl",
            "--python",
            "--ruby",
            "--rust",
            "--zig",
            "--cask",
          ],
        },
        {
          name: "--go",
          description: "Create a basic template for a Go build",
          exclusiveOn: [
            "--autotools",
            "--cabal",
            "--cmake",
            "--crystal",
            "--meson",
            "--node",
            "--perl",
            "--python",
            "--ruby",
            "--rust",
            "--zig",
            "--cask",
          ],
        },
        {
          name: "--meson",
          description: "Create a basic template for a Meson-style build",
          exclusiveOn: [
            "--autotools",
            "--cabal",
            "--cmake",
            "--crystal",
            "--go",
            "--node",
            "--perl",
            "--python",
            "--ruby",
            "--rust",
            "--zig",
            "--cask",
          ],
        },
        {
          name: "--node",
          description: "Create a basic template for a Node build",
          exclusiveOn: [
            "--autotools",
            "--cabal",
            "--cmake",
            "--crystal",
            "--go",
            "--meson",
            "--perl",
            "--python",
            "--ruby",
            "--rust",
            "--zig",
            "--cask",
          ],
        },
        {
          name: "--perl",
          description: "Create a basic template for a Perl build",
          exclusiveOn: [
            "--autotools",
            "--cabal",
            "--cmake",
            "--crystal",
            "--go",
            "--meson",
            "--node",
            "--python",
            "--ruby",
            "--rust",
            "--zig",
            "--cask",
          ],
        },
        {
          name: "--python",
          description: "Create a basic template for a Python build",
          exclusiveOn: [
            "--autotools",
            "--cabal",
            "--cmake",
            "--crystal",
            "--go",
            "--meson",
            "--node",
            "--perl",
            "--ruby",
            "--rust",
            "--zig",
            "--cask",
          ],
        },
        {
          name: "--ruby",
          description: "Create a basic template for a Ruby build",
          exclusiveOn: [
            "--autotools",
            "--cabal",
            "--cmake",
            "--crystal",
            "--go",
            "--meson",
            "--node",
            "--perl",
            "--python",
            "--rust",
            "--zig",
            "--cask",
          ],
        },
        {
          name: "--rust",
          description: "Create a basic template for a Rust build",
          exclusiveOn: [
            "--autotools",
            "--cabal",
            "--cmake",
            "--crystal",
            "--go",
            "--meson",
            "--node",
            "--perl",
            "--python",
            "--ruby",
            "--zig",
            "--cask",
          ],
        },
        {
          name: "--zig",
          description: "Create a basic template for a Zig build",
          exclusiveOn: [
            "--autotools",
            "--cabal",
            "--cmake",
            "--crystal",
            "--go",
            "--meson",
            "--node",
            "--perl",
            "--python",
            "--ruby",
            "--rust",
            "--cask",
          ],
        },
        {
          name: "--no-fetch",
          description:
            "Homebrew will not download URL to the cache and will thus not add its SHA-256 to the formula for you, nor will it check the GitHub API for GitHub projects (to fill out its description and homepage)",
        },
        {
          name: "--HEAD",
          description:
            "Indicate that URL points to the package's repository rather than a file",
          exclusiveOn: ["--cask"],
        },
        {
          name: "--set-name",
          description: "Explicitly set the name of the new formula or cask",
          args: {
            name: "set-name",
          },
        },
        {
          name: "--set-version",
          description: "Explicitly set the version of the new formula or cask",
          args: {
            name: "set-version",
          },
        },
        {
          name: "--set-license",
          description: "Explicitly set the license of the new formula",
          args: {
            name: "set-license",
          },
          exclusiveOn: ["--cask"],
        },
        {
          name: "--tap",
          description:
            "Generate the new formula within the given tap, specified as user/repo",
          args: {
            name: "tap",
            generators: repositoriesGenerator(),
          },
        },
        {
          name: ["-f", "--force"],
          description:
            "Ignore errors for disallowed formula names and names that shadow aliases",
        },
      ],
    },
    {
      name: "debugger",
      description: "Run the specified Homebrew command in debug mode",
      args: commandVariadicArg,
      options: [
        ...commonOptions,
        {
          name: ["-O", "--open"],
          description: "Start remote debugging over a Unix socket",
        },
      ],
    },
    {
      name: "edit",
      description:
        "Open a formula, cask or tap in the editor set by $EDITOR or $HOMEBREW_EDITOR, or open the Homebrew repository for editing if no argument is provided",
      args: {
        name: "formula|cask|tap",
        isOptional: true,
        isVariadic: true,
        generators: [
          generateAllFormulae,
          generateAllCasks,
          repositoriesGenerator(),
        ],
      },
      options: [
        ...commonOptions,
        formulaOption,
        caskOption,
        {
          name: "--print-path",
          description:
            "Print the file path to be edited, without opening an editor",
        },
      ],
    },
    {
      name: "extract",
      description:
        "Look through repository history to find the most recent version of formula and create a copy in tap",
      args: [
        {
          name: "formula",
          generators: generateAllFormulae,
        },
        {
          name: "tap",
          generators: repositoriesGenerator(),
        },
      ],
      options: [
        ...commonOptions,
        {
          name: "--git-revision",
          description:
            "Search for the specified version of formula starting at revision instead of HEAD",
          args: {
            name: "git-revision",
          },
        },
        {
          name: "--version",
          description:
            "Extract the specified version of formula instead of the most recent",
          args: {
            name: "version",
          },
        },
        {
          name: ["-f", "--force"],
          description: "Overwrite the destination formula if it already exists",
        },
      ],
    },
    {
      name: "find-appcast",
      description:
        "Find the appcast of the app bundle at app_path, for use in a cask livecheck block",
      args: {
        name: "app_path",
        template: "filepaths",
      },
      options: [...commonOptions],
    },
    {
      name: "formula",
      description: "Display the path where formula is located",
      args: formulaVariadicArg,
      options: [...commonOptions],
    },
    {
      name: "generate-cask-token",
      description:
        "Generate a cask token, filename and header line for an application, following the token conventions described in the Cask Cookbook",
      args: {
        name: "app_or_name",
        description: "Application bundle path or name",
      },
      options: [...commonOptions],
    },
    {
      name: "generate-man-completions",
      description: "Generate Homebrew's manpages and shell completions",
      options: [
        ...commonOptions,
        {
          name: "--no-exit-code",
          description: "Exit with code 0 even if no changes were made",
        },
      ],
    },
    {
      name: "generate-zap",
      description:
        "Generate a zap stanza for a cask by scanning the system for associated files and directories",
      args: {
        name: "cask_or_name",
        description: "Cask or application name",
      },
      options: [
        ...commonOptions,
        {
          name: "--name",
          description:
            "Treat the argument as a raw application name instead of a cask token. Also matches the app's bundle identifier if it is installed in /Applications",
        },
      ],
    },
    {
      name: "install-bundler-gems",
      description: "Install Homebrew's Bundler gems",
      options: [
        ...commonOptions,
        {
          name: "--groups",
          description:
            "Installs the specified comma-separated list of gem groups (default: last used). Replaces any previously installed groups",
          args: {
            name: "groups",
          },
          exclusiveOn: ["--add-groups"],
        },
        {
          name: "--add-groups",
          description:
            "Installs the specified comma-separated list of gem groups, in addition to those already installed",
          args: {
            name: "add-groups",
          },
          exclusiveOn: ["--groups"],
        },
      ],
    },
    {
      name: "irb",
      description: "Enter the interactive Homebrew Ruby shell",
      options: [
        ...commonOptions,
        {
          name: "--examples",
          description: "Show several examples",
        },
      ],
    },
    {
      name: "lgtm",
      description:
        "Run brew typecheck, brew style --changed and the relevant brew tests, brew audit and brew test checks in one go",
      options: [
        ...commonOptions,
        {
          name: "--online",
          description:
            "Run additional, slower checks that require a network connection",
        },
      ],
    },
    {
      name: "linkage",
      description: "Check the library links from the given formula kegs",
      args: {
        name: "formula",
        description: "Installed formula",
        isOptional: true,
        isVariadic: true,
        generators: installedFormulaeGenerator,
      },
      options: [
        ...commonOptions,
        {
          name: "--test",
          description:
            "Show only missing libraries and exit with a non-zero status if any missing libraries are found",
        },
        {
          name: "--strict",
          description:
            "Exit with a non-zero status if any undeclared dependencies with linkage are found",
          dependsOn: ["--test"],
        },
        {
          name: "--reverse",
          description:
            "For every library that a keg references, print its dylib path followed by the binaries that link to it",
        },
        {
          name: "--cached",
          description:
            "Print the cached linkage values stored in $HOMEBREW_CACHE, set by a previous brew linkage run",
        },
      ],
    },
    {
      name: ["livecheck", "lc"],
      description:
        "Check for newer versions of formulae and/or casks from upstream",
      args: formulaOrCaskOptionalVariadicArg,
      options: [
        debugOption,
        {
          name: ["-q", "--quiet"],
          description:
            "Suppress warnings, don't print a progress bar for JSON output",
        },
        verboseOption,
        helpOption,
        {
          name: "--full-name",
          description: "Print formulae and casks with fully-qualified names",
        },
        {
          name: "--tap",
          description:
            "Check formulae and casks within the given tap, specified as user/repo",
          args: {
            name: "tap",
            generators: repositoriesGenerator(),
          },
          exclusiveOn: ["--installed"],
        },
        {
          name: "--installed",
          description: "Check formulae and casks that are currently installed",
          exclusiveOn: ["--tap"],
        },
        {
          name: "--newer-only",
          description:
            "Show the latest version only if it's newer than the current formula or cask version",
        },
        {
          name: "--json",
          description: "Output information in JSON format",
          exclusiveOn: ["--debug"],
        },
        {
          name: ["-r", "--resources"],
          description: "Also check resources for formulae",
        },
        {
          name: ["--formula", "--formulae"],
          description: "Only check formulae",
          exclusiveOn: ["--cask", "--extract-plist"],
        },
        {
          name: ["--cask", "--casks"],
          description: "Only check casks",
          exclusiveOn: ["--formula"],
        },
        {
          name: "--extract-plist",
          description:
            "Enable checking multiple casks with ExtractPlist strategy",
          exclusiveOn: ["--formula"],
        },
        {
          name: "--autobump",
          description:
            "Include packages that are autobumped by BrewTestBot. By default these are skipped",
        },
      ],
    },
    {
      name: "prof",
      description: "Run Homebrew with a Ruby profiler",
      args: commandVariadicArg,
      options: [
        ...commonOptions,
        {
          name: "--stackprof",
          description: "Use stackprof instead of ruby-prof (the default)",
          exclusiveOn: ["--timings"],
        },
        {
          name: "--vernier",
          description: "Use vernier instead of ruby-prof (the default)",
          exclusiveOn: ["--timings"],
        },
        {
          name: "--timings",
          description:
            "Record machine-readable timings for Homebrew command phases",
          exclusiveOn: ["--stackprof", "--vernier"],
        },
      ],
    },
    {
      name: "rubocop",
      description: "Installs, configures and runs Homebrew's rubocop",
      options: [...commonOptions],
    },
    {
      name: "ruby",
      description: "Run a Ruby instance with Homebrew's libraries loaded",
      args: {
        name: "file",
        isOptional: true,
        template: "filepaths",
      },
      options: [
        ...commonOptions,
        {
          name: "-r",
          description: "Load a library using require",
          args: {
            name: "library",
          },
        },
        {
          name: "-e",
          description: "Execute the given text string as a script",
          args: {
            name: "script",
          },
        },
      ],
    },
    {
      name: "rubydoc",
      description: "Generate Homebrew's RubyDoc documentation",
      options: [
        ...commonOptions,
        {
          name: "--only-public",
          description: "Only generate public API documentation",
        },
        {
          name: "--open",
          description: "Open generated documentation in a browser",
        },
      ],
    },
    {
      name: "sh",
      description:
        "Enter an interactive shell for Homebrew's build environment",
      args: {
        name: "file",
        isOptional: true,
        template: "filepaths",
      },
      options: [
        ...commonOptions,
        {
          name: ["-r", "--ruby"],
          description: "Set up Homebrew's Ruby environment",
          exclusiveOn: ["--env"],
        },
        {
          name: "--env",
          description:
            "Use the standard $PATH instead of superenv's when std is passed",
          args: {
            name: "env",
            suggestions: ["std"],
          },
          exclusiveOn: ["--ruby"],
        },
        {
          name: ["-c", "--cmd"],
          description: "Execute commands in a non-interactive shell",
          args: {
            name: "commands",
          },
        },
      ],
    },
    {
      name: "style",
      description:
        "Check formulae or files for conformance to Homebrew style guidelines",
      args: {
        name: "file|tap|formula|cask",
        isOptional: true,
        isVariadic: true,
        template: "filepaths",
        generators: [
          repositoriesGenerator(),
          generateAllFormulae,
          generateAllCasks,
        ],
      },
      options: [
        ...commonOptions,
        {
          name: "--fix",
          description:
            "Fix style violations automatically using RuboCop's auto-correct feature",
        },
        {
          name: "--todo",
          description:
            "Add rubocop:todo comments for RuboCop violations that remain after auto-correction. Requires --fix",
          dependsOn: ["--fix"],
        },
        {
          name: "--reset-cache",
          description: "Reset the RuboCop cache",
        },
        {
          name: "--changed",
          description: "Check files that were changed from the main branch",
        },
        formulaOption,
        caskOption,
        {
          name: "--only-cops",
          description:
            "Specify a comma-separated cops list to check for violations of only the listed RuboCop cops",
          args: {
            name: "only-cops",
          },
          exclusiveOn: ["--except-cops"],
        },
        {
          name: "--except-cops",
          description:
            "Specify a comma-separated cops list to skip checking for violations of the listed RuboCop cops",
          args: {
            name: "except-cops",
          },
          exclusiveOn: ["--only-cops"],
        },
      ],
    },
    {
      name: "tap-new",
      description: "Generate the template files for a new tap",
      args: {
        name: "tap",
        generators: repositoriesGenerator(),
      },
      options: [
        ...commonOptions,
        {
          name: "--no-git",
          description: "Don't initialise a Git repository for the tap",
        },
        {
          name: "--branch",
          description:
            "Initialise a Git repository and set up GitHub Actions workflows with the specified branch name (default: main)",
          args: {
            name: "branch",
          },
        },
        {
          name: "--github-packages",
          description: "Upload bottles to GitHub Packages",
        },
      ],
    },
    {
      name: "test",
      description: "Run the test method provided by an installed formula",
      args: {
        name: "formula",
        description: "Installed formula",
        isVariadic: true,
        generators: installedFormulaeGenerator,
      },
      options: [
        ...commonOptions,
        {
          name: ["-f", "--force"],
          description: "Test formulae even if they are unlinked",
        },
        {
          name: "--HEAD",
          description: "Test the HEAD version of a formula",
        },
        {
          name: "--keep-tmp",
          description: "Retain the temporary files created for the test",
        },
        {
          name: "--retry",
          description: "Retry if a testing fails",
        },
      ],
    },
    {
      name: "test-bot",
      description:
        "Tests the full lifecycle of a Homebrew change to a tap (Git repository)",
      args: {
        name: "formula",
        isOptional: true,
        generators: generateAllFormulae,
      },
      options: [
        debugOption,
        quietOption,
        {
          name: ["-v", "--verbose"],
          description:
            "Print test step output in real time. Has the side effect of passing output as raw bytes instead of re-encoding in UTF-8",
        },
        helpOption,
        {
          name: "--dry-run",
          description: "Print what would be done rather than doing it",
        },
        {
          name: "--cleanup",
          description:
            "Clean all state from the Homebrew directory. Use with care!",
        },
        {
          name: "--skip-setup",
          description: "Don't check if the local system is set up correctly",
          exclusiveOn: [
            "--only-cleanup-before",
            "--only-setup",
            "--only-tap-syntax",
            "--only-formulae",
            "--only-formulae-detect",
            "--only-formulae-dependents",
            "--only-cleanup-after",
          ],
        },
        {
          name: "--build-from-source",
          description: "Build from source rather than building bottles",
        },
        {
          name: "--build-dependents-from-source",
          description:
            "Build a limited set of dependents from source in addition to testing bottles. Up to 10 per formula per shard, prioritising popular dependents in a sharded group",
        },
        {
          name: "--junit",
          description: "Generate a JUnit XML test results file",
        },
        {
          name: "--keep-old",
          description:
            "Run brew bottle --keep-old to build new bottles for a single platform",
        },
        {
          name: "--skip-relocation",
          description:
            "Run brew bottle --skip-relocation to build new bottles that don't require relocation",
        },
        {
          name: "--only-json-tab",
          description:
            "Run brew bottle --only-json-tab to build new bottles that do not contain a tab",
        },
        {
          name: "--local",
          description:
            "Ask Homebrew to write verbose logs under ./logs/ and set $HOME to ./home/",
        },
        {
          name: "--tap",
          description:
            "Use the Git repository of the given tap. Defaults to the core tap for syntax checking",
          args: {
            name: "tap",
            generators: repositoriesGenerator(),
          },
        },
        {
          name: "--fail-fast",
          description: "Immediately exit on a failing step",
        },
        {
          name: "--test-default-formula",
          description:
            "Use a default testing formula when not building a tap and no other formulae are specified",
        },
        rootUrlOption,
        {
          name: "--git-name",
          description: "Set the Git author/committer names to the given name",
          args: {
            name: "git-name",
          },
        },
        {
          name: "--git-email",
          description: "Set the Git author/committer email to the given email",
          args: {
            name: "git-email",
          },
        },
        {
          name: "--publish",
          description: "Publish the uploaded bottles",
        },
        {
          name: "--skip-online-checks",
          description:
            "Don't pass --online to brew audit and skip brew livecheck",
        },
        {
          name: "--skip-new",
          description: "Don't pass --new to brew audit for new formulae",
        },
        {
          name: "--skip-new-strict",
          description: "Don't pass --strict to brew audit for new formulae",
          dependsOn: ["--skip-new"],
        },
        {
          name: "--skip-dependents",
          description: "Don't test any dependents",
          exclusiveOn: ["--only-formulae-dependents"],
        },
        {
          name: "--skip-livecheck",
          description: "Don't test livecheck",
        },
        {
          name: "--skip-checksum-only-audit",
          description: "Don't audit checksum-only changes",
        },
        {
          name: "--skip-stable-version-audit",
          description: "Don't audit the stable version",
        },
        {
          name: "--skip-revision-audit",
          description: "Don't audit the revision",
        },
        {
          name: "--only-cleanup-before",
          description:
            "Only run the pre-cleanup step. Needs --cleanup, except in GitHub Actions",
          exclusiveOn: [
            "--only-setup",
            "--only-tap-syntax",
            "--only-formulae",
            "--only-formulae-detect",
            "--only-formulae-dependents",
            "--only-cleanup-after",
            "--skip-setup",
          ],
        },
        {
          name: "--only-setup",
          description: "Only run the local system setup check step",
          exclusiveOn: [
            "--only-cleanup-before",
            "--only-tap-syntax",
            "--only-formulae",
            "--only-formulae-detect",
            "--only-formulae-dependents",
            "--only-cleanup-after",
            "--skip-setup",
          ],
        },
        {
          name: "--only-tap-syntax",
          description: "Only run the tap syntax check step",
          exclusiveOn: [
            "--only-cleanup-before",
            "--only-setup",
            "--only-formulae",
            "--only-formulae-detect",
            "--only-formulae-dependents",
            "--only-cleanup-after",
            "--skip-setup",
          ],
        },
        {
          name: "--stable",
          description: "Only run the tap syntax checks needed on stable brew",
          dependsOn: ["--only-tap-syntax"],
        },
        {
          name: "--only-formulae",
          description: "Only run the formulae steps",
          exclusiveOn: [
            "--only-cleanup-before",
            "--only-setup",
            "--only-tap-syntax",
            "--only-formulae-detect",
            "--only-formulae-dependents",
            "--only-cleanup-after",
            "--skip-setup",
          ],
        },
        {
          name: "--only-formulae-detect",
          description: "Only run the formulae detection steps",
          exclusiveOn: [
            "--testing-formulae",
            "--added-formulae",
            "--deleted-formulae",
            "--only-cleanup-before",
            "--only-setup",
            "--only-tap-syntax",
            "--only-formulae",
            "--only-formulae-dependents",
            "--only-cleanup-after",
            "--skip-setup",
          ],
        },
        {
          name: "--only-formulae-dependents",
          description: "Only run the formulae dependents steps",
          exclusiveOn: [
            "--skip-dependents",
            "--only-cleanup-before",
            "--only-setup",
            "--only-tap-syntax",
            "--only-formulae",
            "--only-formulae-detect",
            "--only-cleanup-after",
            "--skip-setup",
          ],
        },
        {
          name: "--only-bottles-fetch",
          description:
            "Only run the bottles fetch steps. This optional post-upload test checks that all the bottles were uploaded correctly. It is not run unless requested and only needs to be run on a single machine. The bottle commit to be tested must be on the tested branch",
        },
        {
          name: "--only-cleanup-after",
          description:
            "Only run the post-cleanup step. Needs --cleanup, except in GitHub Actions",
          exclusiveOn: [
            "--only-cleanup-before",
            "--only-setup",
            "--only-tap-syntax",
            "--only-formulae",
            "--only-formulae-detect",
            "--only-formulae-dependents",
            "--skip-setup",
          ],
        },
        {
          name: "--testing-formulae",
          description:
            "Use these testing formulae rather than running the formulae detection steps",
          args: {
            name: "testing-formulae",
          },
          exclusiveOn: ["--only-formulae-detect"],
        },
        {
          name: "--added-formulae",
          description:
            "Use these added formulae rather than running the formulae detection steps",
          args: {
            name: "added-formulae",
          },
          exclusiveOn: ["--only-formulae-detect"],
        },
        {
          name: "--deleted-formulae",
          description:
            "Use these deleted formulae rather than running the formulae detection steps",
          args: {
            name: "deleted-formulae",
          },
          exclusiveOn: ["--only-formulae-detect"],
        },
        {
          name: "--skipped-or-failed-formulae",
          description:
            "Use these skipped or failed formulae from formulae steps for a formulae dependents step",
          args: {
            name: "skipped-or-failed-formulae",
          },
        },
        {
          name: "--tested-formulae",
          description:
            "Use these tested formulae from formulae steps for a formulae dependents step",
          args: {
            name: "tested-formulae",
          },
        },
      ],
    },
    {
      name: "tests",
      description: "Run Homebrew's unit and integration tests",
      options: [
        {
          name: "--debug",
          description:
            "Enable debugging using ruby/debug, or surface the standard odebug output",
        },
        quietOption,
        verboseOption,
        helpOption,
        {
          name: "--coverage",
          description: "Generate code coverage reports",
        },
        {
          name: "--generic",
          description: "Run only OS-agnostic tests",
        },
        {
          name: "--online",
          description:
            "Include tests that use the GitHub API and tests that use any of the taps for official external commands",
        },
        {
          name: "--changed",
          description:
            "Only runs tests on files that were changed from the main branch",
          exclusiveOn: ["--only", "--shard"],
        },
        {
          name: "--fail-fast",
          description: "Exit early on the first failing test",
        },
        {
          name: "--load-only",
          description:
            "Load each test file independently without running its examples",
        },
        {
          name: "--no-parallel",
          description: "Run tests serially",
        },
        {
          name: "--stackprof",
          description: "Use stackprof to profile tests",
          exclusiveOn: ["--vernier", "--ruby-prof"],
        },
        {
          name: "--vernier",
          description: "Use vernier to profile tests",
          exclusiveOn: ["--stackprof", "--ruby-prof"],
        },
        {
          name: "--ruby-prof",
          description: "Use ruby-prof to profile tests",
          exclusiveOn: ["--stackprof", "--vernier"],
        },
        {
          name: "--only",
          description:
            "Run only test_script_spec.rb. Appending :line_number will start at a specific line",
          args: {
            name: "only",
          },
          exclusiveOn: ["--changed", "--shard"],
        },
        {
          name: "--shard",
          description: "Run only index of total test shards",
          args: {
            name: "shard",
          },
          exclusiveOn: ["--changed", "--only"],
        },
        {
          name: "--profile",
          description:
            "Output the n slowest tests. When run without --no-parallel this will output the slowest tests for each parallel test process",
          args: {
            name: "profile",
          },
        },
        {
          name: "--seed",
          description:
            "Randomise tests with the specified value instead of a random seed",
          args: {
            name: "seed",
          },
        },
      ],
    },
    {
      name: ["typecheck", "tc"],
      description: "Check for typechecking errors using Sorbet",
      args: tapOptionalVariadicArg,
      options: [
        debugOption,
        {
          name: ["-q", "--quiet"],
          description: "Silence all non-critical errors",
        },
        verboseOption,
        helpOption,
        {
          name: "--fix",
          description: "Automatically fix type errors",
          exclusiveOn: ["--lsp"],
        },
        {
          name: "--update",
          description: "Update RBI files",
          exclusiveOn: ["--lsp"],
        },
        {
          name: "--update-all",
          description: "Update all RBI files rather than just updated gems",
          exclusiveOn: ["--lsp"],
        },
        {
          name: "--suggest-typed",
          description: "Try upgrading typed sigils",
          dependsOn: ["--update"],
        },
        {
          name: "--lsp",
          description: "Start the Sorbet LSP server",
          exclusiveOn: ["--update", "--update-all", "--fix"],
        },
        {
          name: "--dir",
          description: "Typecheck all files in a specific directory",
          args: {
            name: "directory",
            template: "folders",
          },
          exclusiveOn: ["--file"],
        },
        {
          name: "--file",
          description: "Typecheck a single file",
          args: {
            name: "file",
            template: "filepaths",
          },
          exclusiveOn: ["--dir"],
        },
        {
          name: "--ignore",
          description:
            "Ignores input files that contain the given string in their paths (relative to the input path passed to Sorbet)",
          args: {
            name: "ignore",
          },
        },
      ],
    },
    {
      name: "unbottled",
      description: "Show the unbottled dependents of formulae",
      args: formulaOptionalVariadicArg,
      options: [
        ...commonOptions,
        {
          name: "--tag",
          description:
            "Use the specified bottle tag (e.g. big_sur) instead of the current OS",
          args: {
            name: "tag",
          },
        },
        {
          name: "--dependents",
          description:
            "Skip getting analytics data and sort by number of dependents instead",
          exclusiveOn: ["--total", "--lost"],
        },
        {
          name: "--total",
          description: "Print the number of unbottled and total formulae",
          exclusiveOn: ["--dependents", "--lost"],
        },
        {
          name: "--lost",
          description:
            "Print the homebrew/core commits where bottles were lost in the last week",
          exclusiveOn: ["--dependents", "--total"],
        },
      ],
    },
    {
      name: "unpack",
      description:
        "Unpack the files for the formula or cask into subdirectories of the current working directory",
      args: formulaOrCaskVariadicArg,
      options: [
        ...commonOptions,
        {
          name: "--destdir",
          description:
            "Create subdirectories in the directory named by path instead",
          args: {
            name: "path",
            template: "folders",
          },
        },
        {
          name: "--patch",
          description:
            "Patches for formula will be applied to the unpacked source",
          exclusiveOn: ["--git", "--cask"],
        },
        {
          name: ["-g", "--git"],
          description:
            "Initialise a Git repository in the unpacked source. This is useful for creating patches for the software",
          exclusiveOn: ["--patch", "--cask"],
        },
        {
          name: ["-f", "--force"],
          description:
            "Overwrite the destination directory if it already exists",
        },
        formulaOption,
        {
          name: ["--cask", "--casks"],
          description: "Treat all named arguments as casks",
          exclusiveOn: ["--formula", "--patch", "--git"],
        },
      ],
    },
    {
      name: "update-perl-resources",
      description: "Update versions for CPAN resource blocks in formula",
      args: formulaVariadicArg,
      options: [
        ...commonOptions,
        {
          name: ["-p", "--print-only"],
          description:
            "Print the updated resource blocks instead of changing formula",
        },
        {
          name: "--ignore-errors",
          description:
            "Continue processing even if some resources can't be resolved",
        },
      ],
    },
    {
      name: "update-python-resources",
      description: "Update versions for PyPI resource blocks in formula",
      args: formulaVariadicArg,
      options: [
        ...commonOptions,
        {
          name: ["-p", "--print-only"],
          description:
            "Print the updated resource blocks instead of changing formula",
        },
        {
          name: "--ignore-errors",
          description:
            "Record all discovered resources, even those that can't be resolved successfully. This option is ignored for homebrew/core formulae",
        },
        {
          name: "--ignore-non-pypi-packages",
          description: "Don't fail if formula is not a PyPI package",
        },
        {
          name: "--ignore-main-package-cooldown",
          description:
            "Bypass the release cooldown for formula's own package when resolving resources. Its dependencies still respect the cooldown. This option is ignored for official taps",
        },
        installDependenciesOption,
        {
          name: "--version",
          description:
            "Use the specified version when finding resources for formula. If no version is specified, the current version for formula will be used",
          args: {
            name: "version",
          },
        },
        {
          name: "--package-name",
          description:
            "Use the specified package-name when finding resources for formula. If no package name is specified, it will be inferred from the formula's stable URL",
          args: {
            name: "package-name",
          },
        },
        {
          name: "--extra-packages",
          description:
            "Include these additional packages when finding resources",
          args: {
            name: "extra-packages",
          },
        },
        {
          name: "--exclude-packages",
          description: "Exclude these packages when finding resources",
          args: {
            name: "exclude-packages",
          },
        },
      ],
    },
    {
      name: "update-test",
      description: "Run a test of brew update with a new repository clone",
      options: [
        ...commonOptions,
        {
          name: "--to-tag",
          description:
            "Set $HOMEBREW_UPDATE_TO_TAG to test updating between tags",
        },
        {
          name: "--keep-tmp",
          description:
            "Retain the temporary directory containing the new repository clone",
        },
        {
          name: "--commit",
          description: "Use the specified commit as the start commit",
          args: {
            name: "commit",
          },
        },
        {
          name: "--before",
          description:
            "Use the commit at the specified date as the start commit",
          args: {
            name: "before",
          },
        },
      ],
    },
    {
      name: "vendor-gems",
      description: "Install and commit Homebrew's vendored gems",
      options: [
        ...commonOptions,
        {
          name: "--update",
          description:
            "Update the specified list of vendored gems to the latest version",
          args: {
            name: "update",
          },
        },
        {
          name: "--no-commit",
          description: "Do not generate a new commit upon completion",
        },
      ],
    },
    {
      name: "verify",
      description:
        "Verify the build provenance of bottles using GitHub's attestation tools",
      args: formulaVariadicArg,
      options: [
        ...commonOptions,
        {
          name: "--os",
          description:
            "Download for the given operating system. (Pass all to download for all operating systems.)",
          args: {
            name: "os",
            suggestions: ["all"],
          },
          exclusiveOn: ["--bottle-tag"],
        },
        {
          name: "--arch",
          description:
            "Download for the given CPU architecture. (Pass all to download for all architectures.)",
          args: {
            name: "arch",
            suggestions: ["all", "arm", "intel"],
          },
          exclusiveOn: ["--bottle-tag"],
        },
        {
          name: "--bottle-tag",
          description: "Download a bottle for given tag",
          args: {
            name: "tag",
          },
          exclusiveOn: ["--os", "--arch"],
        },
        {
          name: "--deps",
          description: "Also download dependencies for any listed formula",
        },
        {
          name: ["-f", "--force"],
          description: "Remove a previously cached version and re-fetch",
        },
        {
          name: ["-j", "--json"],
          description: "Return JSON for the attestation data for each bottle",
        },
      ],
    },
    {
      name: "which-update",
      description: "Database update for brew which-formula",
      args: {
        name: "database",
      },
      options: [
        ...commonOptions,
        {
          name: "--bottle-json-dir",
          description:
            "Use generated bottle JSON files in the given directory to update formula entries",
          args: {
            name: "directory",
            template: "folders",
          },
        },
        {
          name: "--removed-formulae-file",
          description:
            "Remove database entries for formulae listed in the given file",
          args: {
            name: "file",
            template: "filepaths",
          },
        },
        {
          name: "--pull-request",
          description:
            "Update entries for formula changes in the given pull request number",
          args: {
            name: "pull-request",
          },
        },
        {
          name: "--repository",
          description:
            "GitHub repository for --pull-request (default: $GITHUB_REPOSITORY)",
          args: {
            name: "repository",
          },
          dependsOn: ["--pull-request"],
        },
        {
          name: "--summary-file",
          description: "Output a summary of the changes to a file",
          args: {
            name: "file",
            template: "filepaths",
          },
        },
      ],
    },
    {
      name: "advisory-match",
      description:
        "Match formula against OSV.dev (GIT, language-registry and distro ecosystems) and CPANSA to produce candidate BREW-* advisory records for https://github.com/Homebrew/advisory-database",
      hidden: true,
      args: formulaOptionalVariadicArg,
      options: [
        ...commonOptions,
        {
          name: "--all",
          description: "Match every formula in homebrew/core",
          exclusiveOn: ["--formula-list", "--index", "--json"],
        },
        {
          name: "--index",
          description: "Emit the formula-identity index as JSON and exit",
          exclusiveOn: ["--reconcile-history", "--all", "--json", "--output"],
        },
        {
          name: "--json",
          description: "Output candidate records as a JSON array",
          exclusiveOn: ["--reconcile-history", "--all", "--index"],
        },
        {
          name: "--output",
          description:
            "Write each record to directory as BREW-formula-id.json, preserving existing published/ranges fields",
          args: {
            name: "directory",
            template: "folders",
          },
          exclusiveOn: ["--index"],
        },
        {
          name: "--repology",
          description:
            "Load the formula to distro-package index from file instead of the published data/repology.json",
          args: {
            name: "file",
            template: "filepaths",
          },
        },
        {
          name: "--overrides",
          description:
            "Load reviewed formula and advisory matching overrides from file",
          args: {
            name: "file",
            template: "filepaths",
          },
        },
        {
          name: "--rejected-candidates",
          description:
            "Skip new comparable candidates whose record IDs are listed in file, before history",
          args: {
            name: "file",
            template: "filepaths",
          },
          dependsOn: ["--output"],
        },
        {
          name: "--no-history",
          description:
            "Skip FormulaVersions walks for new ranges; use zero/current pkg_version as unverified boundaries",
          exclusiveOn: ["--reconcile-history", "--new-history"],
        },
        {
          name: "--new-history",
          description:
            "Skip FormulaVersions for existing terminal ranges unless their matching provenance changes",
          exclusiveOn: ["--reconcile-history", "--no-history"],
          dependsOn: ["--output"],
        },
        {
          name: "--reconcile-history",
          description:
            "Reconcile existing matched terminal ranges against complete history; requires --overrides",
          exclusiveOn: ["--new-history", "--no-history", "--json", "--index"],
          dependsOn: ["--output"],
        },
        {
          name: "--formula-list",
          description:
            "Match only the core formula names in a newline-separated file with --new-history or --reconcile-history, using bulk queries",
          args: {
            name: "file",
            template: "filepaths",
          },
          exclusiveOn: ["--all"],
        },
      ],
    },
    {
      name: "bump-python-resources-pr",
      description:
        "Update vulnerable PyPI resources in formula, bump its revision, and create a pull request",
      hidden: true,
      args: formulaArg,
      options: [
        ...commonOptions,
        {
          name: ["-n", "--dry-run"],
          description:
            "Print what would be done rather than creating a pull request",
        },
        noForkOption,
        installDependenciesOption,
        {
          name: "--packages",
          description:
            "Names of vulnerable Python packages that must be updated",
          args: {
            name: "packages",
          },
        },
        {
          name: "--branch",
          description: "Branch name to use for the pull request",
          args: {
            name: "branch",
          },
        },
        {
          name: "--message",
          description: "Message to prepend to the pull request body",
          args: {
            name: "message",
          },
        },
        {
          name: "--output",
          description:
            "Write the JSON result to this file instead of standard output. Use this when parsing the result, as progress is also printed to standard output",
          args: {
            name: "file",
            template: "filepaths",
          },
        },
      ],
    },
    {
      name: "cask-ci",
      description: "Run Homebrew Cask's internal CI helpers",
      hidden: true,
      args: [
        {
          name: "operation",
          suggestions: ["info", "install", "snapshot", "zap-check", "check"],
        },
        {
          name: "cask",
          isOptional: true,
          generators: generateAllCasks,
        },
      ],
      options: [...commonOptions],
    },
    {
      name: "determine-test-runners",
      description:
        "Determines the runners used to test formulae or their dependents",
      hidden: true,
      args: [
        {
          name: "testing-formulae",
          isOptional: true,
        },
        {
          name: "deleted-formulae",
          isOptional: true,
        },
      ],
      options: [
        ...commonOptions,
        {
          name: "--all-supported",
          description:
            "Instead of selecting runners based on the chosen formula, return all supported runners",
          exclusiveOn: ["--dependents"],
        },
        {
          name: "--dependents",
          description: "Determine runners for testing dependents",
          exclusiveOn: ["--all-supported"],
        },
      ],
    },
    {
      name: "dispatch-build-bottle",
      description: "Build bottles for these formulae with GitHub Actions",
      hidden: true,
      args: formulaVariadicArg,
      options: [
        ...commonOptions,
        tapOption,
        {
          name: "--timeout",
          description: "Build timeout (in minutes, default: 60)",
          args: {
            name: "timeout",
          },
        },
        {
          name: "--issue",
          description:
            "If specified, post a comment to this issue number if the job fails",
          args: {
            name: "issue",
          },
        },
        {
          name: "--macos",
          description:
            "MacOS version (or comma-separated list of versions) the bottle should be built for",
          args: {
            name: "macos",
          },
        },
        {
          name: "--workflow",
          description:
            "Dispatch specified workflow (default: dispatch-build-bottle.yml)",
          args: {
            name: "workflow",
          },
        },
        {
          name: "--upload",
          description: "Upload built bottles",
        },
        {
          name: "--linux",
          description:
            "Dispatch bottle for Linux x86_64 (using GitHub runners)",
          exclusiveOn: ["--linux-self-hosted"],
        },
        {
          name: "--linux-arm64",
          description: "Dispatch bottle for Linux arm64 (using GitHub runners)",
        },
        {
          name: "--linux-self-hosted",
          description:
            "Dispatch bottle for Linux x86_64 (using self-hosted runner)",
          exclusiveOn: ["--linux"],
        },
      ],
    },
    {
      name: "formula-analytics",
      description: "Query Homebrew's analytics",
      hidden: true,
      options: [
        ...commonOptions,
        {
          name: "--days-ago",
          description:
            "Query from the specified days ago until the present. The default is 30 days",
          args: {
            name: "days-ago",
          },
        },
        {
          name: "--install",
          description:
            "Output the number of specifically requested installations or installation as dependencies of formulae. This is the default",
          exclusiveOn: [
            "--cask-install",
            "--install-on-request",
            "--build-error",
            "--os-version",
            "--homebrew-devcmdrun-developer",
            "--homebrew-env-config",
            "--homebrew-os-arch-ci",
            "--homebrew-prefixes",
            "--homebrew-versions",
            "--brew-command-run",
            "--brew-command-run-options",
            "--brew-test-bot-test",
          ],
        },
        {
          name: "--install-on-request",
          description:
            "Output the number of specifically requested installations of formulae",
          exclusiveOn: [
            "--install",
            "--cask-install",
            "--build-error",
            "--os-version",
            "--homebrew-devcmdrun-developer",
            "--homebrew-env-config",
            "--homebrew-os-arch-ci",
            "--homebrew-prefixes",
            "--homebrew-versions",
            "--brew-command-run",
            "--brew-command-run-options",
            "--brew-test-bot-test",
          ],
        },
        {
          name: "--cask-install",
          description: "Output the number of installations of casks",
          exclusiveOn: [
            "--install",
            "--install-on-request",
            "--build-error",
            "--os-version",
            "--homebrew-devcmdrun-developer",
            "--homebrew-env-config",
            "--homebrew-os-arch-ci",
            "--homebrew-prefixes",
            "--homebrew-versions",
            "--brew-command-run",
            "--brew-command-run-options",
            "--brew-test-bot-test",
          ],
        },
        {
          name: "--build-error",
          description: "Output the number of build errors for formulae",
          exclusiveOn: [
            "--install",
            "--cask-install",
            "--install-on-request",
            "--os-version",
            "--homebrew-devcmdrun-developer",
            "--homebrew-env-config",
            "--homebrew-os-arch-ci",
            "--homebrew-prefixes",
            "--homebrew-versions",
            "--brew-command-run",
            "--brew-command-run-options",
            "--brew-test-bot-test",
          ],
        },
        {
          name: "--os-version",
          description: "Output the number of events by OS name and version",
          exclusiveOn: [
            "--install",
            "--cask-install",
            "--install-on-request",
            "--build-error",
            "--homebrew-devcmdrun-developer",
            "--homebrew-env-config",
            "--homebrew-os-arch-ci",
            "--homebrew-prefixes",
            "--homebrew-versions",
            "--brew-command-run",
            "--brew-command-run-options",
            "--brew-test-bot-test",
          ],
        },
        {
          name: "--homebrew-devcmdrun-developer",
          description:
            "Output the number of devcmdrun/HOMEBREW_DEVELOPER events",
          exclusiveOn: [
            "--install",
            "--cask-install",
            "--install-on-request",
            "--build-error",
            "--os-version",
            "--homebrew-env-config",
            "--homebrew-os-arch-ci",
            "--homebrew-prefixes",
            "--homebrew-versions",
            "--brew-command-run",
            "--brew-command-run-options",
            "--brew-test-bot-test",
          ],
        },
        {
          name: "--homebrew-env-config",
          description:
            "Output rates of non-default Homebrew environment configuration variables",
          exclusiveOn: [
            "--install",
            "--cask-install",
            "--install-on-request",
            "--build-error",
            "--os-version",
            "--homebrew-devcmdrun-developer",
            "--homebrew-os-arch-ci",
            "--homebrew-prefixes",
            "--homebrew-versions",
            "--brew-command-run",
            "--brew-command-run-options",
            "--brew-test-bot-test",
          ],
        },
        {
          name: "--homebrew-os-arch-ci",
          description: "Output the number of OS/Architecture/CI events",
          exclusiveOn: [
            "--install",
            "--cask-install",
            "--install-on-request",
            "--build-error",
            "--os-version",
            "--homebrew-devcmdrun-developer",
            "--homebrew-env-config",
            "--homebrew-prefixes",
            "--homebrew-versions",
            "--brew-command-run",
            "--brew-command-run-options",
            "--brew-test-bot-test",
          ],
        },
        {
          name: "--homebrew-prefixes",
          description: "Output Homebrew prefixes",
          exclusiveOn: [
            "--install",
            "--cask-install",
            "--install-on-request",
            "--build-error",
            "--os-version",
            "--homebrew-devcmdrun-developer",
            "--homebrew-env-config",
            "--homebrew-os-arch-ci",
            "--homebrew-versions",
            "--brew-command-run",
            "--brew-command-run-options",
            "--brew-test-bot-test",
          ],
        },
        {
          name: "--homebrew-versions",
          description: "Output Homebrew versions",
          exclusiveOn: [
            "--install",
            "--cask-install",
            "--install-on-request",
            "--build-error",
            "--os-version",
            "--homebrew-devcmdrun-developer",
            "--homebrew-env-config",
            "--homebrew-os-arch-ci",
            "--homebrew-prefixes",
            "--brew-command-run",
            "--brew-command-run-options",
            "--brew-test-bot-test",
          ],
        },
        {
          name: "--brew-command-run",
          description: "Output brew commands run",
          exclusiveOn: [
            "--install",
            "--cask-install",
            "--install-on-request",
            "--build-error",
            "--os-version",
            "--homebrew-devcmdrun-developer",
            "--homebrew-env-config",
            "--homebrew-os-arch-ci",
            "--homebrew-prefixes",
            "--homebrew-versions",
            "--brew-command-run-options",
            "--brew-test-bot-test",
          ],
        },
        {
          name: "--brew-command-run-options",
          description: "Output brew commands run with options",
          exclusiveOn: [
            "--install",
            "--cask-install",
            "--install-on-request",
            "--build-error",
            "--os-version",
            "--homebrew-devcmdrun-developer",
            "--homebrew-env-config",
            "--homebrew-os-arch-ci",
            "--homebrew-prefixes",
            "--homebrew-versions",
            "--brew-command-run",
            "--brew-test-bot-test",
          ],
        },
        {
          name: "--brew-test-bot-test",
          description: "Output brew test-bot steps run",
          exclusiveOn: [
            "--install",
            "--cask-install",
            "--install-on-request",
            "--build-error",
            "--os-version",
            "--homebrew-devcmdrun-developer",
            "--homebrew-env-config",
            "--homebrew-os-arch-ci",
            "--homebrew-prefixes",
            "--homebrew-versions",
            "--brew-command-run",
            "--brew-command-run-options",
          ],
        },
        {
          name: "--json",
          description:
            "Output JSON. This is required: plain text support has been removed",
          exclusiveOn: ["--all-core-formulae-json", "--setup"],
        },
        {
          name: "--all-core-formulae-json",
          description:
            "Output a different JSON format containing the JSON data for all Homebrew/homebrew-core formulae",
          exclusiveOn: ["--json", "--setup"],
        },
        {
          name: "--setup",
          description:
            "Install the necessary Python dependencies and exit without running a query",
          exclusiveOn: ["--json", "--all-core-formulae-json"],
        },
      ],
    },
    {
      name: "formula-python-resources",
      description: "Print JSON describing the PyPI resources used by formula",
      hidden: true,
      args: formulaOptionalVariadicArg,
      options: [
        ...commonOptions,
        {
          name: "--all",
          description: "Include all available formulae",
        },
        {
          name: "--tap",
          description:
            "Only include formulae from the named tap. Requires --all",
          args: {
            name: "tap",
            generators: repositoriesGenerator(),
          },
        },
      ],
    },
    {
      name: "generate-advisories-api",
      description:
        "Generate advisory API data for https://formulae.brew.sh from a checkout of https://github.com/Homebrew/advisory-database",
      hidden: true,
      args: {
        name: "directory",
        template: "folders",
      },
      options: [...commonOptions],
    },
    {
      name: "generate-analytics-api",
      description:
        "Generates analytics API data files for https://formulae.brew.sh",
      hidden: true,
      options: [
        ...commonOptions,
        {
          name: "--influx",
          description:
            "Generate only InfluxDB analytics, without local Git histories or GitHub queries",
          exclusiveOn: [
            "--repositories",
            "--formula-history",
            "--releases",
            "--github-packages",
          ],
        },
        {
          name: "--repositories",
          description:
            "Generate only repository and catalogue analytics from local Git history and GitHub",
          exclusiveOn: [
            "--influx",
            "--formula-history",
            "--releases",
            "--github-packages",
          ],
        },
        {
          name: "--formula-history",
          description:
            "Generate only formula version history, resuming its persistent Git checkpoint",
          exclusiveOn: [
            "--influx",
            "--repositories",
            "--releases",
            "--github-packages",
          ],
        },
        {
          name: "--releases",
          description:
            "Generate only brew release analytics from local Git history and tags",
          exclusiveOn: [
            "--influx",
            "--repositories",
            "--formula-history",
            "--github-packages",
          ],
        },
        {
          name: "--legacy-homebrew",
          description:
            "Include the legacy Homebrew repository at this path in repository analytics",
          args: {
            name: "directory",
            template: "folders",
          },
        },
        {
          name: "--homebrew-site",
          description:
            "Read brew.sh release announcements and security disclosures from this Git checkout",
          args: {
            name: "directory",
            template: "folders",
          },
        },
        {
          name: "--history",
          description: "Reuse completed-year aggregates from this JSON file",
          args: {
            name: "file",
            template: "filepaths",
          },
        },
        {
          name: "--github-packages",
          description:
            "Generate only package downloads, using existing 30-day install analytics",
          exclusiveOn: [
            "--influx",
            "--repositories",
            "--formula-history",
            "--releases",
          ],
        },
        {
          name: "--github-packages-limit",
          description:
            "Fetch downloads for the top number of formulae by install analytics (1-1000; default: 1000)",
          args: {
            name: "github-packages-limit",
          },
        },
      ],
    },
    {
      name: "generate-bottle-ci-matrix",
      description:
        "Generate a GitHub Actions runner matrix for a dispatched bottle build",
      hidden: true,
      args: formulaArg,
      options: [
        ...commonOptions,
        {
          name: "--runners",
          description: "Build runner names as a comma-separated list",
          args: {
            name: "runners",
          },
        },
      ],
    },
    {
      name: "generate-cask-api",
      description:
        "Generate homebrew/cask API data files for https://formulae.brew.sh",
      hidden: true,
      options: [
        ...commonOptions,
        {
          name: ["-n", "--dry-run"],
          description: "Generate API data without writing it to files",
        },
      ],
    },
    {
      name: "generate-cask-ci-matrix",
      description:
        "Generate a GitHub Actions matrix for a given pull request URL or list of cask names",
      hidden: true,
      args: {
        name: "cask|url",
        isOptional: true,
        isVariadic: true,
        generators: generateAllCasks,
      },
      options: [
        ...commonOptions,
        {
          name: "--url",
          description: "Treat named argument as a pull request URL",
          exclusiveOn: ["--cask"],
        },
        {
          name: ["--cask", "--casks"],
          description: "Treat all named arguments as cask tokens",
          exclusiveOn: ["--url"],
        },
        {
          name: "--skip-install",
          description: "Skip installing casks",
          exclusiveOn: ["--syntax-only"],
        },
        {
          name: "--new",
          description: "Run new cask checks",
          exclusiveOn: ["--syntax-only"],
        },
        {
          name: "--syntax-only",
          description: "Only run syntax checks",
          exclusiveOn: ["--skip-install", "--new"],
        },
      ],
    },
    {
      name: "generate-cask-feeds",
      description:
        "Generate recent cask additions and updates for https://formulae.brew.sh feeds",
      hidden: true,
      options: [
        ...commonOptions,
        {
          name: "--output",
          description:
            "Write JSON to this path instead of _data/cask_feeds.json",
          args: {
            name: "file",
            template: "filepaths",
          },
        },
      ],
    },
    {
      name: "generate-formula-api",
      description:
        "Generate homebrew/core API data files for https://formulae.brew.sh",
      hidden: true,
      options: [
        ...commonOptions,
        {
          name: ["-n", "--dry-run"],
          description: "Generate API data without writing it to files",
        },
      ],
    },
    {
      name: "generate-formula-feeds",
      description:
        "Generate recent formula additions and updates for https://formulae.brew.sh feeds",
      hidden: true,
      options: [
        ...commonOptions,
        {
          name: "--output",
          description:
            "Write JSON to this path instead of _data/formula_feeds.json",
          args: {
            name: "file",
            template: "filepaths",
          },
        },
      ],
    },
    {
      name: "generate-internal-api",
      description:
        "Generate internal API data files for https://formulae.brew.sh",
      hidden: true,
      options: [
        ...commonOptions,
        {
          name: ["-n", "--dry-run"],
          description: "Generate internal API data without writing it to files",
        },
      ],
    },
    {
      name: "generate-vulns-advisories",
      description:
        "Generate OSV-schema advisory records for the Homebrew ecosystem from homebrew/core formula patch resolves annotations, for https://github.com/Homebrew/advisory-database",
      hidden: true,
      args: {
        name: "directory",
        template: "folders",
      },
      options: [
        ...commonOptions,
        {
          name: ["-n", "--dry-run"],
          description:
            "List the records that would be generated without writing files or querying OSV.dev",
        },
      ],
    },
    {
      name: "pr-automerge",
      description:
        "Find pull requests that can be automatically merged using brew pr-publish",
      hidden: true,
      options: [
        ...commonOptions,
        tapOption,
        {
          name: "--workflow",
          description: "Workflow file to use with brew pr-publish",
          args: {
            name: "workflow",
          },
        },
        {
          name: "--with-label",
          description: "Pull requests must have this label",
          args: {
            name: "with-label",
          },
        },
        {
          name: "--without-labels",
          description:
            "Pull requests must not have these labels (default: do not merge, new formula, automerge-skip, pre-release, CI-published-bottle-commits)",
          args: {
            name: "without-labels",
          },
        },
        {
          name: "--without-approval",
          description: "Pull requests do not require approval to be merged",
        },
        {
          name: "--publish",
          description: "Run brew pr-publish on matching pull requests",
        },
        {
          name: "--autosquash",
          description:
            "Instruct brew pr-publish to automatically reformat and reword commits in the pull request to the preferred format",
        },
        {
          name: "--ignore-failures",
          description: "Include pull requests that have failing status checks",
        },
      ],
    },
    {
      name: "pr-publish",
      description: "Publish bottles for a pull request with GitHub Actions",
      hidden: true,
      args: {
        name: "pull_request",
        description: "Pull request URL or number",
        isVariadic: true,
      },
      options: [
        ...commonOptions,
        {
          name: "--autosquash",
          description:
            "If supported on the target tap, automatically reformat and reword commits to our preferred format",
        },
        {
          name: "--branch",
          description: "Branch to use the workflow from (default: main)",
          args: {
            name: "branch",
          },
        },
        {
          name: "--message",
          description:
            "Message to include when autosquashing revision bumps, deletions and rebuilds",
          args: {
            name: "message",
          },
          dependsOn: ["--autosquash"],
        },
        tapOption,
        {
          name: "--workflow",
          description:
            "Target workflow filename (default: publish-commit-bottles.yml)",
          args: {
            name: "workflow",
          },
        },
      ],
    },
    {
      name: "pr-pull",
      description:
        "Download and publish bottles and apply the bottle commit from a pull request with artifacts generated by GitHub Actions",
      hidden: true,
      args: {
        name: "pull_request",
        description: "Pull request URL or number",
        isVariadic: true,
      },
      options: [
        ...commonOptions,
        {
          name: "--no-upload",
          description: "Download the bottles but don't upload them",
        },
        {
          name: "--no-commit",
          description: "Do not generate a new commit before uploading",
        },
        {
          name: "--no-cherry-pick",
          description:
            "Do not cherry-pick commits from the pull request branch",
        },
        dryRunOption,
        {
          name: "--clean",
          description: "Do not amend the commits from pull requests",
          exclusiveOn: ["--autosquash"],
        },
        {
          name: "--keep-old",
          description:
            "If the formula specifies a rebuild version, attempt to preserve its value in the generated DSL",
        },
        {
          name: "--autosquash",
          description:
            "Automatically reformat and reword commits in the pull request to our preferred format",
          exclusiveOn: ["--clean"],
        },
        {
          name: "--branch-okay",
          description:
            "Do not warn if pulling to a branch besides the repository default (useful for testing)",
        },
        {
          name: "--resolve",
          description:
            "When a patch fails to apply, leave in progress and allow user to resolve, instead of aborting",
        },
        {
          name: "--warn-on-upload-failure",
          description:
            "Warn instead of raising an error if the bottle upload fails. Useful for repairing bottle uploads that previously failed",
        },
        {
          name: "--retain-bottle-dir",
          description:
            "Does not clean up the tmp directory for the bottle so it can be used later",
        },
        {
          name: "--message",
          description:
            "Message to include when autosquashing revision bumps, deletions and rebuilds",
          args: {
            name: "message",
          },
          dependsOn: ["--autosquash"],
        },
        {
          name: ["--artifact-pattern", "--artifact"],
          description:
            "Download artifacts with the specified pattern (default: bottles{,_*})",
          args: {
            name: "artifact-pattern",
          },
        },
        tapOption,
        {
          name: "--head-sha",
          description: "Expected pull request head commit SHA",
          args: {
            name: "head-sha",
          },
        },
        rootUrlOption,
        rootUrlUsingOption,
        {
          name: "--workflows",
          description:
            "Retrieve artifacts from the specified workflow (default: tests.yml). Can be a comma-separated list to include multiple workflows",
          args: {
            name: "workflows",
          },
        },
        {
          name: "--ignore-missing-artifacts",
          description:
            "Comma-separated list of workflows which can be ignored if they have not been run",
          args: {
            name: "ignore-missing-artifacts",
          },
        },
      ],
    },
    {
      name: "pr-upload",
      description: "Apply the bottle commit and publish bottles to a host",
      hidden: true,
      options: [
        ...commonOptions,
        {
          name: "--keep-old",
          description:
            "If the formula specifies a rebuild version, attempt to preserve its value in the generated DSL. When using GitHub Packages, this also appends the manifest to the existing list",
        },
        dryRunOption,
        {
          name: "--no-commit",
          description: "Do not generate a new commit before uploading",
          exclusiveOn: ["--upload-only"],
        },
        {
          name: "--warn-on-upload-failure",
          description:
            "Warn instead of raising an error if the bottle upload fails. Useful for repairing bottle uploads that previously failed",
        },
        {
          name: "--upload-only",
          description: "Skip running brew bottle before uploading",
          exclusiveOn: ["--no-commit"],
        },
        rootUrlOption,
        rootUrlUsingOption,
      ],
    },
    {
      name: "release",
      description:
        "Create a new draft Homebrew/brew release with the appropriate version number and release notes",
      hidden: true,
      options: [
        ...commonOptions,
        {
          name: "--major",
          description: "Create a major release",
          exclusiveOn: ["--minor"],
        },
        {
          name: "--minor",
          description: "Create a minor release",
          exclusiveOn: ["--major"],
        },
        {
          name: "--force",
          description:
            "Actually create the release and trigger the workflow. Without this, just show what would be done",
        },
      ],
    },
    {
      name: "update-license-data",
      description: "Update SPDX license data in the Homebrew repository",
      hidden: true,
      options: [...commonOptions],
    },
    {
      name: "update-maintainers",
      description: "Update the list of maintainers in the Homebrew/brew README",
      hidden: true,
      options: [...commonOptions],
    },
    {
      name: "update-portable-ruby",
      description:
        "Update the vendored portable-ruby from the current portable-ruby formula: write the version files and bottle checksums, run brew vendor-install ruby, then sync utils/ruby.sh, vendored gems and RBI files to the bundler shipped by the new ruby",
      hidden: true,
      options: [
        ...commonOptions,
        {
          name: "--print-target-version",
          description:
            "Print the target portable Ruby package version without updating it",
        },
      ],
    },
    {
      name: "update-report",
      description: "The Ruby implementation of brew update",
      hidden: true,
      options: [
        ...commonOptions,
        {
          name: ["--auto-update", "--preinstall"],
          description: "Run in 'auto-update' mode (faster, less output)",
        },
        {
          name: ["-f", "--force"],
          description:
            "Treat installed and updated formulae as if they are from the same taps and migrate them anyway",
        },
      ],
    },
    {
      name: "update-sponsors",
      description: "Update the list of sponsors in the Homebrew/brew README",
      hidden: true,
      options: [...commonOptions],
    },
    {
      name: "vendor-install",
      description: "Install Homebrew's portable Ruby",
      hidden: true,
      args: {
        name: "target",
        isOptional: true,
      },
      options: [...commonOptions],
    },
    {
      name: "--cache",
      description: "Display Homebrew's download cache",
      args: formulaOrCaskOptionalVariadicArg,
      options: [
        ...commonOptions,
        {
          name: "--os",
          description:
            "Show cache file for the given operating system. (Pass all to show cache files for all operating systems.)",
          args: {
            name: "os",
            suggestions: ["all"],
          },
          exclusiveOn: ["--bottle-tag"],
        },
        {
          name: "--arch",
          description:
            "Show cache file for the given CPU architecture. (Pass all to show cache files for all architectures.)",
          args: {
            name: "arch",
            suggestions: ["all", "arm", "intel"],
          },
          exclusiveOn: ["--bottle-tag"],
        },
        {
          name: ["-s", "--build-from-source"],
          description: "Show the cache file used when building from source",
          exclusiveOn: ["--force-bottle", "--bottle-tag", "--HEAD", "--cask"],
        },
        {
          name: "--force-bottle",
          description: "Show the cache file used when pouring a bottle",
          exclusiveOn: [
            "--build-from-source",
            "--bottle-tag",
            "--HEAD",
            "--cask",
          ],
        },
        {
          name: "--bottle-tag",
          description:
            "Show the cache file used when pouring a bottle for the given tag",
          args: {
            name: "tag",
          },
          exclusiveOn: [
            "--build-from-source",
            "--force-bottle",
            "--HEAD",
            "--cask",
            "--os",
            "--arch",
          ],
        },
        {
          name: "--HEAD",
          description: "Show the cache file used when building from HEAD",
          exclusiveOn: [
            "--build-from-source",
            "--force-bottle",
            "--bottle-tag",
            "--cask",
          ],
        },
        {
          name: ["--formula", "--formulae"],
          description: "Only show cache files for formulae",
          exclusiveOn: ["--cask"],
        },
        {
          name: ["--cask", "--casks"],
          description: "Only show cache files for casks",
          exclusiveOn: [
            "--build-from-source",
            "--force-bottle",
            "--bottle-tag",
            "--HEAD",
            "--formula",
          ],
        },
      ],
    },
    {
      name: "--caskroom",
      description: "Display Homebrew's Caskroom path",
      args: {
        name: "cask",
        isOptional: true,
        isVariadic: true,
        generators: generateAllCasks,
      },
      options: [...commonOptions],
    },
    {
      name: "--cellar",
      description: "Display Homebrew's Cellar path",
      args: formulaOptionalVariadicArg,
      options: [...commonOptions],
    },
    {
      name: ["--env", "environment"],
      description: "Summarise Homebrew's build environment as a plain list",
      args: formulaOptionalVariadicArg,
      options: [
        ...commonOptions,
        {
          name: "--shell",
          description:
            "Generate a list of environment variables for the specified shell, or --shell=auto to detect the current shell",
          args: {
            name: "shell",
            suggestions: [
              "auto",
              "bash",
              "csh",
              "fish",
              "pwsh",
              "sh",
              "tcsh",
              "zsh",
            ],
          },
        },
        {
          name: "--plain",
          description: "Generate plain output even when piped",
        },
      ],
    },
    {
      name: "--prefix",
      description: "Display Homebrew's install path",
      args: formulaOptionalVariadicArg,
      options: [
        ...commonOptions,
        {
          name: "--unbrewed",
          description:
            "List files in Homebrew's prefix not installed by Homebrew",
          exclusiveOn: ["--installed"],
        },
        {
          name: "--installed",
          description:
            "Outputs nothing and returns a failing status code if formula is not installed",
          exclusiveOn: ["--unbrewed"],
        },
      ],
    },
    {
      name: ["--repository", "--repo"],
      description: "Display where Homebrew's Git repository is located",
      args: tapOptionalVariadicArg,
      options: [...commonOptions],
    },
    {
      name: "--taps",
      description: "Display the path to Homebrew's Taps directory",
      options: [...commonOptions],
    },
    {
      name: ["--version", "-v"],
      description:
        "Print the version numbers of Homebrew, Homebrew/homebrew-core and Homebrew/homebrew-cask (if tapped) to standard output",
      options: [...commonOptions],
    },
  ],
};

export default completionSpec;
