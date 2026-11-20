// pyenv v2.8.15 (git tag v2.8.15 of pyenv/pyenv, matches Homebrew formula, 2026-11-19). Source: libexec/ and plugins/*/bin|libexec scripts (Summary/Usage blocks and --complete outputs), COMMANDS.md.
// Read from a shallow clone, the pyenv scripts were not executed. python-build and pyenv-virtualenv/pyenv-doctor/pyenv-update plugins are not covered.
const installedVersions: Fig.Generator = {
  script: ["pyenv", "versions"],
  postProcess: function (out) {
    return out
      .trim()
      .split("\n")
      .filter((l) => l.trim() !== "")
      .map((l) => {
        const line = l.trim();
        const sel = line.startsWith("*");
        const name = (sel ? line.slice(1).trim() : line).split(/\s+/)[0];
        return { name, icon: sel ? "🌟" : "🐍" };
      });
  },
};

const availableVersions: Fig.Generator = {
  script: ["pyenv", "install", "-l"],
  postProcess: function (out) {
    return out
      .trim()
      .split("\n")
      .slice(1)
      .map((name) => ({ name: name.trim(), icon: "🐍" }));
  },
};

const commandList: Fig.Generator = {
  script: ["pyenv", "commands"],
  postProcess: function (out) {
    return out
      .trim()
      .split("\n")
      .filter((name) => name !== "" && !name.startsWith("-"))
      .map((name) => ({ name }));
  },
};

const versionsArg: Fig.Arg = {
  name: "version",
  description: "Python version",
  isVariadic: true,
  generators: installedVersions,
};

const completionSpec: Fig.Spec = {
  name: "pyenv",
  description: "Simple Python version management",
  options: [
    {
      name: ["-h", "--help"],
      description: "Display help",
    },
    {
      name: ["-v", "--version"],
      description: "Display the version of pyenv",
    },
  ],
  subcommands: [
    {
      name: "binary",
      description:
        "Package an installed Python version as a relocatable binary (experimental)",
      subcommands: [
        {
          name: "generate-installer",
          description:
            "Generate a python-build definition for a saved binary archive",
          options: [
            {
              name: "--archive-url",
              description:
                "The URL for the resulting installation script to download the package from",
              args: { name: "url" },
            },
            {
              name: "-o",
              description:
                "Write the definition to this file (default: stdout)",
              args: { name: "output", template: "filepaths" },
            },
          ],
          args: {
            name: "metadata-file",
            description: "A .meta file written by `pyenv binary save`",
            template: "filepaths",
          },
        },
        {
          name: "install",
          description: "Install a published binary package",
          args: { name: "version" },
        },
        {
          name: "package",
          description:
            "Create an installable binary package from a Python version",
          options: [
            {
              name: ["-v", "--verbose"],
              description: "Show build progress from `pyenv install`",
            },
            {
              name: "--archive-base-url",
              description:
                "Where the archive will be hosted; the definition downloads it from <url>/<entry>.tar.xz",
              args: { name: "url" },
            },
          ],
          args: {
            name: "version[:entry]",
            description:
              "A version `pyenv install` can build, optionally followed by the name to build and install the binary under",
          },
        },
        {
          name: "package-name",
          description:
            "Generate a binary package name for the current platform",
          args: { name: "version" },
        },
        {
          name: "relocate",
          description:
            "Rewrite an unpacked Python's library paths so it runs from its prefix",
          args: [
            {
              name: "prefix",
              template: "folders",
            },
            {
              name: "build-prefix",
              isOptional: true,
              template: "folders",
            },
          ],
        },
        {
          name: "save",
          description:
            "Save an installed Python version as a relocatable archive",
          options: [
            {
              name: "--name",
              description:
                "Use this as the archive and metadata base name instead of <version>-<platform>",
              args: { name: "name" },
            },
            {
              name: "--source-version",
              description: "Record the version used to build a renamed install",
              args: { name: "version" },
            },
          ],
          args: [
            {
              name: "version",
              description: "An installed version",
              generators: installedVersions,
            },
            {
              name: "output-dir",
              description: "Where to write the archive and metadata",
              isOptional: true,
              template: "folders",
            },
          ],
        },
      ],
    },
    {
      name: "commands",
      description: "List all available pyenv commands",
      options: [
        {
          name: "--sh",
          description: "List only the commands that need shell integration",
        },
        {
          name: "--no-sh",
          description: "Exclude the commands that need shell integration",
        },
      ],
    },
    {
      name: "completions",
      description: "List available completions for a given pyenv command",
      args: [
        {
          name: "command",
          generators: commandList,
        },
        {
          name: "arg",
          isOptional: true,
          isVariadic: true,
        },
      ],
    },
    {
      name: "exec",
      description: "Run an executable with the selected Python version",
      options: [
        {
          name: ["-N", "--environment"],
          description:
            "Set PYTHONHOME and LD_LIBRARY_PATH (DYLD_LIBRARY_PATH on macOS) for the running command",
        },
      ],
      args: {
        name: "command",
        isCommand: true,
      },
    },
    {
      name: "global",
      description: "Set or show the global Python version(s)",
      args: {
        name: "version",
        description: "Python version (or `system`)",
        isOptional: true,
        isVariadic: true,
        generators: installedVersions,
      },
    },
    {
      name: "help",
      description: "Display help for a command",
      options: [
        {
          name: "--usage",
          description: "Print only the usage line",
        },
      ],
      args: {
        name: "command",
        isOptional: true,
        generators: commandList,
      },
    },
    {
      name: "hooks",
      description: "List hook scripts for a given pyenv command",
      args: {
        name: "command",
        suggestions: [
          "exec",
          "install",
          "rehash",
          "uninstall",
          "version-name",
          "version-origin",
          "which",
        ],
      },
    },
    {
      name: "init",
      description: "Configure the shell environment for pyenv",
      options: [
        {
          name: "-",
          description:
            "Initialize shims directory, print PYENV_SHELL variable, completions path and shell function",
        },
        {
          name: "--path",
          description: "Print shims path",
        },
        {
          name: "--install",
          description: "Configure detected shell startup files",
        },
        {
          name: "--no-push-path",
          description:
            "Do not push shim to the start of PATH if they're already there",
        },
        {
          name: "--no-rehash",
          description: "Add no rehash command to output",
        },
        {
          name: "--detect-shell",
          description:
            "Print shell startup files detected for the current shell",
        },
      ],
      args: {
        name: "shell",
        isOptional: true,
        suggestions: ["bash", "fish", "ksh", "pwsh", "zsh"],
      },
    },
    {
      name: "install",
      description: "Install a Python version using python-build",
      options: [
        {
          name: ["-l", "--list"],
          description: "List all available versions",
        },
        {
          name: "--bare",
          description: "With --list, print only the version names",
        },
        {
          name: ["-f", "--force"],
          description:
            "Install even if the version appears to be installed already",
        },
        {
          name: ["-s", "--skip-existing"],
          description:
            "Skip the installation if the version appears to be installed already",
        },
        {
          name: ["-k", "--keep"],
          description:
            "Keep source tree in $PYENV_BUILD_ROOT after installation (defaults to $PYENV_ROOT/sources)",
        },
        {
          name: ["-p", "--patch"],
          description: "Apply a patch from stdin before building",
        },
        {
          name: ["-v", "--verbose"],
          description: "Verbose mode: print compilation status to stdout",
        },
        {
          name: "--version",
          description: "Show version of python-build",
        },
        {
          name: ["-g", "--debug"],
          description: "Build a debug version",
        },
      ],
      args: {
        name: "version[:alias]",
        description:
          "Python version or definition file, optionally installed under a custom name via `:<alias>`",
        isOptional: true,
        isVariadic: true,
        generators: availableVersions,
      },
    },
    {
      name: "install-prerequisites",
      description: "Install Python build prerequisites on Debian-based systems",
      options: [
        {
          name: ["-a", "--all"],
          description:
            "Also install optional dependencies (for rarely used modules)",
        },
      ],
    },
    {
      name: "latest",
      description:
        "Print the latest installed or known version with the given prefix",
      options: [
        {
          name: ["-k", "--known"],
          description: "Select from all known versions instead of installed",
        },
        {
          name: ["-b", "--bypass"],
          description:
            "On a resolution failure, do not print an error message but rather print the argument unchanged",
          hidden: true,
        },
        {
          name: ["-f", "--force"],
          description:
            "Same as --bypass but also do not return a failure exit code",
          hidden: true,
        },
      ],
      args: {
        name: "prefix",
        description: "Version prefix, e.g. 3 or 3.12",
      },
    },
    {
      name: "link",
      description: "Link a Python environment as a pyenv version",
      subcommands: [
        {
          name: "version",
          description: "Link a Python environment as a pyenv version",
          options: [
            {
              name: "--dry",
              description: "Only print what would be done",
            },
            {
              name: "--quiet",
              description: "Do not print anything",
            },
          ],
          args: [
            {
              name: "path",
              description:
                "Path to a Python installation or virtual environment",
              template: "folders",
            },
            {
              name: "name",
              description:
                "Version name to use (guessed from pyvenv.cfg or the directory name if omitted)",
              isOptional: true,
            },
          ],
        },
      ],
    },
    {
      name: "local",
      description:
        "Set or show the local application-specific Python version(s)",
      options: [
        {
          name: ["-f", "--force"],
          description: "Do not verify that the versions being set exist",
        },
        {
          name: "--unset",
          description: "Unset the local version",
        },
      ],
      args: {
        name: "version",
        description: "Python version (or `system`)",
        isOptional: true,
        isVariadic: true,
        generators: installedVersions,
      },
    },
    {
      name: "prefix",
      description: "Display prefixes for Python versions",
      args: {
        name: "version",
        isOptional: true,
        isVariadic: true,
        generators: installedVersions,
      },
    },
    {
      name: "rehash",
      description: "Rehash pyenv shims (run this after installing executables)",
    },
    {
      name: "root",
      description:
        "Display the root directory where versions and shims are kept",
    },
    {
      name: "shell",
      description: "Set or show the shell-specific Python version",
      options: [
        {
          name: "--unset",
          description: "Unset the shell-specific version",
        },
      ],
      args: {
        name: "version",
        description: "Python version, `system`, or `-` for the previous one",
        isOptional: true,
        isVariadic: true,
        generators: installedVersions,
        suggestions: [
          {
            name: "-",
            description: "Restore the previously set version",
          },
        ],
      },
    },
    {
      name: "shims",
      description: "List existing pyenv shims",
      options: [
        {
          name: "--short",
          description: "Print only the shim names",
        },
      ],
    },
    {
      name: "uninstall",
      description: "Uninstall Python versions",
      options: [
        {
          name: ["-f", "--force"],
          description:
            "Attempt to remove the specified version without prompting for confirmation (no error if it does not exist)",
        },
      ],
      args: {
        name: "version",
        isVariadic: true,
        generators: installedVersions,
      },
    },
    {
      name: "version",
      description: "Show the current Python version(s) and its origin",
      options: [
        {
          name: "--bare",
          description: "Show just the version name (alias of `version-name`)",
        },
      ],
    },
    {
      name: "version-file",
      description: "Detect the file that sets the current pyenv version",
      args: {
        name: "dir",
        isOptional: true,
        template: "folders",
      },
    },
    {
      name: "version-file-read",
      description: "Read the Python version(s) from a version file",
      hidden: true,
      args: {
        name: "file",
        template: "filepaths",
      },
    },
    {
      name: "version-file-write",
      description: "Write Python version(s) to a version file",
      hidden: true,
      options: [
        {
          name: ["-f", "--force"],
          description: "Do not verify that the versions exist",
        },
      ],
      args: [
        {
          name: "file",
          template: "filepaths",
        },
        {
          name: "version",
          isVariadic: true,
          generators: installedVersions,
        },
      ],
    },
    {
      name: "version-name",
      description: "Show the current Python version",
      options: [
        {
          name: ["-f", "--force"],
          description:
            "If a version does not exist, print it as is rather than produce an error",
          hidden: true,
        },
      ],
    },
    {
      name: "version-origin",
      description: "Explain how the current Python version is set",
    },
    {
      name: "versions",
      description: "List all Python versions available to pyenv",
      options: [
        {
          name: "--bare",
          description: "List just the names, omit `system`",
        },
        {
          name: "--skip-aliases",
          description:
            "Skip symlinks to other versions and to virtual environments",
        },
        {
          name: "--skip-envs",
          description: "Skip virtual environments (under <version>/envs)",
        },
        {
          name: "--executables",
          description:
            "Internal: list all executable names in pyenv-managed versions and environments, for `pyenv rehash`",
          hidden: true,
        },
      ],
    },
    {
      name: "whence",
      description: "List all Python versions that contain the given executable",
      options: [
        {
          name: "--path",
          description: "Print the paths of the executables instead of versions",
        },
      ],
      args: {
        name: "command",
      },
    },
    {
      name: "which",
      description: "Display the full path to an executable",
      options: [
        {
          name: "--nosystem",
          description:
            "Do not search for the command in the system environment",
        },
        {
          name: "--skip-advice",
          description:
            "Skip printing an error message on a failed search (internal)",
          hidden: true,
        },
      ],
      args: {
        name: "command",
      },
    },
  ],
};

export default completionSpec;
