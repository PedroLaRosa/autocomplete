// Poetry v2.5.1 (PyPI poetry 2.5.1 / git tag 2.5.1, 2026-11-20). Source: command definitions read statically from
// src/poetry/console/{application,commands/**}.py and docs/cli.md at tag 2.5.1, global options and built-in
// help/list/completions from cleo 2.1.0 sdist; plugin commands (export, shell) read from the poetry-plugin-export 1.10.1
// and poetry-plugin-shell 1.0.1 sdists. Nothing was executed (no run of the CLI).
const help: Fig.Option = {
  name: ["-h", "--help"],
  description: "Display help information",
  isPersistent: true,
};

const quiet: Fig.Option = {
  name: ["-q", "--quiet"],
  description: "Do not output any message",
  isPersistent: true,
};

const verbose: Fig.Option = {
  name: ["-v", "--verbose"],
  description: "Increase the verbosity of messages",
  isPersistent: true,
};

const vverbose: Fig.Option = {
  name: "-vv",
  description: "More verbose output",
  isPersistent: true,
};

const vvverbose: Fig.Option = {
  name: "-vvv",
  description: "Debug output",
  isPersistent: true,
};

const version: Fig.Option = {
  name: ["-V", "--version"],
  description: "Display this application version",
  isPersistent: true,
};

const ansi: Fig.Option = {
  name: "--ansi",
  description: "Force ANSI output",
  isPersistent: true,
};

const noAnsi: Fig.Option = {
  name: "--no-ansi",
  description: "Disable ANSI output",
  isPersistent: true,
};

const noInteraction: Fig.Option = {
  name: ["-n", "--no-interaction"],
  description: "Do not ask any interactive question",
  isPersistent: true,
};

const noPlugins: Fig.Option = {
  name: "--no-plugins",
  description: "Disables plugins",
  isPersistent: true,
};

const noCache: Fig.Option = {
  name: "--no-cache",
  description:
    "Disables the use of Poetry's caches for the duration of the command (does not delete them)",
  isPersistent: true,
};

const directory: Fig.Option = {
  name: ["-C", "--directory"],
  description: "The working directory for the Poetry command",
  isPersistent: true,
  args: {
    name: "directory",
    template: "folders",
  },
};

const project: Fig.Option = {
  name: ["-P", "--project"],
  description: "Specify another path as the project root",
  isPersistent: true,
  args: {
    name: "project",
    template: "folders",
  },
};

const globalOptions: Fig.Option[] = [
  help,
  quiet,
  verbose,
  vverbose,
  vvverbose,
  version,
  ansi,
  noAnsi,
  noInteraction,
  noPlugins,
  noCache,
  directory,
  project,
];

const dryRun: Fig.Option = {
  name: "--dry-run",
  description:
    "Output the operations but do not execute anything (implicitly enables --verbose)",
};

const lockOnly: Fig.Option = {
  name: "--lock",
  description: "Do not perform operations (only update the lockfile)",
};

const allowPrereleases: Fig.Option = {
  name: "--allow-prereleases",
  description: "Accept prereleases",
};

const editable: Fig.Option = {
  name: ["-e", "--editable"],
  description: "Add vcs/path dependencies as editable",
};

const source: Fig.Option = {
  name: "--source",
  description: "Name of the source to use to install the package",
  args: { name: "source" },
};

const extrasOption = (description: string): Fig.Option => ({
  name: ["-E", "--extras"],
  description,
  isRepeatable: true,
  args: { name: "extras" },
});

const groupListOption = (name: string, description: string): Fig.Option => ({
  name,
  description,
  isRepeatable: true,
  args: { name: "groups", description: "Comma-separated dependency groups" },
});

const groupOptions: Fig.Option[] = [
  groupListOption("--without", "The dependency groups to ignore"),
  groupListOption("--with", "The optional dependency groups to include"),
  groupListOption("--only", "The only dependency groups to include"),
];

const implementations = ["cpython", "pypy"];

const freeThreaded = (description: string): Fig.Option => ({
  name: ["-t", "--free-threaded"],
  description,
});

const implementation = (description: string): Fig.Option => ({
  name: ["-i", "--implementation"],
  description,
  args: { name: "implementation", suggestions: implementations },
});

// Options shared by `poetry install` and `poetry sync`
const installOptions: Fig.Option[] = [
  ...groupOptions,
  {
    name: "--no-root",
    description: "Do not install the root package (the current project)",
    exclusiveOn: ["--only-root"],
  },
  {
    name: "--no-directory",
    description:
      "Do not install any directory path dependencies; useful to install dependencies without source code, e.g. for caching of Docker layers",
  },
  dryRun,
  extrasOption("Extra sets of dependencies to install"),
  {
    name: "--all-extras",
    description: "Install all extra dependencies",
    exclusiveOn: ["-E", "--extras"],
  },
  {
    name: "--all-groups",
    description: "Install dependencies from all groups",
    exclusiveOn: ["--without", "--with", "--only", "--only-root"],
  },
  {
    name: "--only-root",
    description: "Exclude all dependencies",
    exclusiveOn: ["--without", "--with", "--only", "--all-groups", "--no-root"],
  },
  {
    name: "--compile",
    description: "Compile Python source files to bytecode",
  },
];

const syncDeprecated: Fig.Option = {
  name: "--sync",
  description:
    "Synchronize the environment with the locked packages and the specified groups (deprecated, use poetry sync)",
  deprecated: true,
};

const showFormat: Fig.Option = {
  name: ["-f", "--format"],
  description:
    "Specify the output format (json cannot be combined with --tree)",
  args: { name: "format", suggestions: ["json", "text"], default: "text" },
};

const showTree: Fig.Option = {
  name: "--tree",
  description: "List the dependencies as a tree",
};

const showLatest: Fig.Option = {
  name: ["-l", "--latest"],
  description: "Show the latest version",
};

const showOutdated: Fig.Option = {
  name: ["-o", "--outdated"],
  description:
    "Show the latest version but only for packages that are outdated",
};

const configKeys = [
  "cache-dir",
  "data-dir",
  "installer.builtin-uninstall",
  "installer.max-workers",
  "installer.no-binary",
  "installer.only-binary",
  "installer.parallel",
  "installer.re-resolve",
  "keyring.enabled",
  "python.installation-dir",
  "requests.max-retries",
  "solver.lazy-wheel",
  "solver.min-release-age",
  "solver.min-release-age-exclude",
  "solver.min-release-age-exclude-source",
  "system-git-client",
  "virtualenvs.create",
  "virtualenvs.in-project",
  "virtualenvs.options.always-copy",
  "virtualenvs.options.no-pip",
  "virtualenvs.options.system-site-packages",
  "virtualenvs.path",
  "virtualenvs.prompt",
  "virtualenvs.use-poetry-python",
];

const cacheGenerator: Fig.Generator = {
  script: ["poetry", "cache", "list"],
  postProcess: (output) =>
    output
      .split("\n")
      .map((name) => name.trim())
      .filter(Boolean)
      .map((name) => ({ name, description: "Poetry cache" })),
};

const completionSpec: Fig.Spec = {
  name: "poetry",
  description:
    "Poetry is a tool for dependency management and packaging in Python",
  subcommands: [
    {
      name: "about",
      description: "Shows information about Poetry",
    },
    {
      name: "add",
      description: "Adds a new dependency to pyproject.toml and installs it",
      options: [
        {
          name: ["-G", "--group"],
          description: "The group to add the dependency to",
          args: { name: "group", default: "main" },
        },
        {
          name: ["-D", "--dev"],
          description: "Add as a development dependency (shortcut for -G dev)",
        },
        editable,
        extrasOption("Extras to activate for the dependency"),
        {
          name: "--optional",
          description: "Add as an optional dependency to an extra",
          args: { name: "extra" },
        },
        {
          name: "--python",
          description:
            "Python version for which the dependency must be installed",
          args: { name: "python" },
        },
        {
          name: "--platform",
          description: "Platforms for which the dependency must be installed",
          args: { name: "platform" },
        },
        {
          name: "--markers",
          description:
            "Environment markers which describe when the dependency should be installed",
          args: { name: "markers" },
        },
        source,
        allowPrereleases,
        dryRun,
        lockOnly,
      ],
      args: {
        name: "name",
        description: "The packages to add",
        isVariadic: true,
      },
    },
    {
      name: "build",
      description: "Builds a package, as a tarball and a wheel by default",
      options: [
        {
          name: ["-f", "--format"],
          description: "Limit the format to either sdist or wheel",
          args: { name: "format", suggestions: ["sdist", "wheel"] },
        },
        {
          name: "--clean",
          description: "Clean output directory before building",
        },
        {
          name: ["-l", "--local-version"],
          description:
            "Add or replace a local version label to the build (deprecated, use --config-settings local-version=<version>)",
          deprecated: true,
          args: { name: "local version" },
        },
        {
          name: ["-o", "--output"],
          description: "Set output directory for build artifacts",
          args: { name: "output", template: "folders", default: "dist" },
        },
        {
          name: ["-c", "--config-settings"],
          description:
            "Provide config settings that should be passed to the build backend",
          isRepeatable: true,
          args: { name: "key=value" },
        },
      ],
    },
    {
      name: "cache",
      description: "Interact with Poetry's cache",
      subcommands: [
        {
          name: "clear",
          description: "Clear Poetry's caches",
          options: [
            { name: "--all", description: "Clear all entries in the cache" },
          ],
          args: {
            name: "cache",
            description:
              "The name of the cache to clear (or cache:package:version)",
            isOptional: true,
            generators: cacheGenerator,
          },
        },
        {
          name: "list",
          description: "List Poetry's caches",
        },
      ],
    },
    {
      name: "check",
      description:
        "Validates the content of the pyproject.toml file and its consistency with the poetry.lock file",
      options: [
        {
          name: "--lock",
          description:
            "Checks that poetry.lock exists for the current version of pyproject.toml",
        },
        {
          name: "--strict",
          description: "Fail if check reports warnings",
        },
      ],
    },
    {
      name: "completions",
      description: "Generate completion scripts for your shell",
      options: [
        {
          name: "--alias",
          description: "Alias for the current command",
          isRepeatable: true,
          args: { name: "alias" },
        },
      ],
      args: {
        name: "shell",
        description: "The shell to generate the scripts for",
        isOptional: true,
        suggestions: ["bash", "zsh", "fish"],
      },
    },
    {
      name: "config",
      description: "Manages configuration settings",
      options: [
        { name: "--list", description: "List configuration settings" },
        { name: "--unset", description: "Unset configuration setting" },
        {
          name: "--local",
          description: "Set/Get from the project's local configuration",
        },
        {
          name: "--migrate",
          description: "Migrate outdated configuration settings",
        },
      ],
      args: [
        {
          name: "key",
          description: "Setting key",
          isOptional: true,
          suggestions: configKeys,
        },
        {
          name: "value",
          description: "Setting value",
          isOptional: true,
          isVariadic: true,
        },
      ],
    },
    {
      name: "debug",
      description:
        "The debug command regroups sub commands to interact with debug session",
      subcommands: [
        {
          name: "info",
          description: "Shows debug information",
        },
        {
          name: "resolve",
          description: "Debugs dependency resolution",
          options: [
            extrasOption("Extras to activate for the dependency"),
            {
              name: "--python",
              description: "Python version(s) to use for resolution",
              args: { name: "python" },
            },
            { name: "--tree", description: "Display the dependency tree" },
            {
              name: "--install",
              description:
                "Show what would be installed for the current system",
            },
          ],
          args: {
            name: "package",
            description: "The packages to resolve",
            isOptional: true,
            isVariadic: true,
          },
        },
        {
          name: "tags",
          description:
            "Shows compatible tags for your project's current active environment",
        },
      ],
    },
    {
      name: "env",
      description:
        "The env command regroups sub commands to interact with the virtualenvs associated with a specific project",
      subcommands: [
        {
          name: "activate",
          description: "Print the command to activate a virtual environment",
        },
        {
          name: "info",
          description: "Displays information about the current environment",
          options: [
            {
              name: ["-p", "--path"],
              description: "Only display the environment's path",
            },
            {
              name: ["-e", "--executable"],
              description:
                "Only display the environment's python executable path",
            },
          ],
        },
        {
          name: "list",
          description:
            "Lists all virtualenvs associated with the current project",
          options: [
            {
              name: "--full-path",
              description: "Output the full paths of the virtualenvs",
            },
          ],
        },
        {
          name: "remove",
          description:
            "Remove virtual environments associated with the project",
          options: [
            {
              name: "--all",
              description:
                "Remove all managed virtual environments associated with the project",
            },
          ],
          args: {
            name: "python",
            description:
              "The python executables associated with, or names of the virtual environments which are to be removed",
            isOptional: true,
            isVariadic: true,
          },
        },
        {
          name: "use",
          description:
            "Activates or creates a new virtualenv for the current project",
          args: {
            name: "python",
            description:
              "The python executable to use (a version number or a path to the python binary)",
          },
        },
      ],
    },
    {
      // Provided by poetry-plugin-export (not installed by default since Poetry 2.0)
      name: "export",
      description:
        "Exports the lock file to alternative formats (requires poetry-plugin-export)",
      options: [
        {
          name: ["-f", "--format"],
          description: "Format to export to",
          args: {
            name: "format",
            suggestions: ["constraints.txt", "requirements.txt", "pylock.toml"],
            default: "requirements.txt",
          },
        },
        {
          name: ["-o", "--output"],
          description: "The name of the output file",
          args: { name: "output", template: "filepaths" },
        },
        {
          name: "--without-hashes",
          description: "Exclude hashes from the exported file",
        },
        {
          name: "--without-urls",
          description: "Exclude source repository urls from the exported file",
        },
        {
          name: "--dev",
          description: "Include development dependencies (deprecated)",
          deprecated: true,
        },
        {
          name: "--all-groups",
          description: "Include all dependency groups",
        },
        groupListOption(
          "--with",
          "The optional and non-optional dependency groups to include (by default only the main dependencies are included)"
        ),
        groupListOption("--only", "The only dependency groups to include"),
        {
          ...groupListOption(
            "--without",
            "The dependency groups to ignore (deprecated)"
          ),
          deprecated: true,
        },
        extrasOption("Extra sets of dependencies to include"),
        {
          name: "--all-extras",
          description: "Include all sets of extra dependencies",
        },
        {
          name: "--with-credentials",
          description: "Include credentials for extra indices",
        },
      ],
    },
    {
      name: "help",
      description: "Displays help for a command",
      args: {
        name: "command",
        description: "The command name",
        isOptional: true,
      },
    },
    {
      name: "init",
      description:
        "Creates a basic pyproject.toml file in the current directory",
      options: [
        {
          name: "--name",
          description: "Name of the package",
          args: { name: "name" },
        },
        {
          name: "--description",
          description: "Description of the package",
          args: { name: "description" },
        },
        {
          name: "--author",
          description: "Author name of the package",
          args: { name: "author" },
        },
        {
          name: "--python",
          description: "Compatible Python versions",
          args: { name: "python" },
        },
        {
          name: "--dependency",
          description:
            "Package to require, with an optional version constraint, e.g. requests:^2.10.0 or requests=2.11.1",
          isRepeatable: true,
          args: { name: "dependency" },
        },
        {
          name: "--dev-dependency",
          description:
            "Package to require for development, with an optional version constraint, e.g. requests:^2.10.0 or requests=2.11.1",
          isRepeatable: true,
          args: { name: "dependency" },
        },
        {
          name: ["-l", "--license"],
          description: "License of the package",
          args: { name: "license" },
        },
      ],
    },
    {
      name: "install",
      description: "Installs the project dependencies",
      options: [syncDeprecated, ...installOptions],
    },
    {
      name: "list",
      description: "Lists commands",
      args: {
        name: "namespace",
        description: "The namespace name",
        isOptional: true,
        suggestions: ["cache", "debug", "env", "python", "self", "source"],
      },
    },
    {
      name: "lock",
      description: "Locks the project dependencies",
      options: [
        {
          name: "--regenerate",
          description:
            "Ignore existing lock file and overwrite it with a new lock file created from scratch",
        },
      ],
    },
    {
      name: "new",
      description: "Creates a new Python project at <path>",
      options: [
        {
          name: ["-i", "--interactive"],
          description:
            "Allow interactive specification of project configuration",
        },
        {
          name: "--name",
          description: "Set the resulting package name",
          args: { name: "name" },
        },
        {
          name: "--src",
          description:
            "Use the src layout for the project (deprecated, this is the default now)",
          deprecated: true,
        },
        { name: "--flat", description: "Use the flat layout for the project" },
        {
          name: "--readme",
          description: "Specify the readme file format",
          args: { name: "readme", suggestions: ["md", "rst"], default: "md" },
        },
        {
          name: "--description",
          description: "Description of the package",
          args: { name: "description" },
        },
        {
          name: "--author",
          description: "Author name of the package",
          args: { name: "author" },
        },
        {
          name: "--python",
          description: "Compatible Python versions",
          args: { name: "python" },
        },
        {
          name: "--dependency",
          description:
            "Package to require, with an optional version constraint, e.g. requests:^2.10.0 or requests=2.11.1",
          isRepeatable: true,
          args: { name: "dependency" },
        },
        {
          name: "--dev-dependency",
          description:
            "Package to require for development, with an optional version constraint, e.g. requests:^2.10.0 or requests=2.11.1",
          isRepeatable: true,
          args: { name: "dependency" },
        },
        {
          name: ["-l", "--license"],
          description: "License of the package",
          args: { name: "license" },
        },
      ],
      args: {
        name: "path",
        description: "The path to create the project at",
        template: "folders",
      },
    },
    {
      name: "publish",
      description: "Publishes a package to a remote repository",
      options: [
        {
          name: ["-r", "--repository"],
          description: "The repository to publish the package to",
          args: { name: "repository" },
        },
        {
          name: ["-u", "--username"],
          description: "The username to access the repository",
          args: { name: "username" },
        },
        {
          name: ["-p", "--password"],
          description: "The password to access the repository",
          args: { name: "password" },
        },
        {
          name: "--cert",
          description: "Certificate authority to access the repository",
          args: { name: "cert", template: "filepaths" },
        },
        {
          name: "--client-cert",
          description: "Client certificate to access the repository",
          args: { name: "client cert", template: "filepaths" },
        },
        {
          name: "--dist-dir",
          description: "Dist directory where built artifacts are stored",
          args: { name: "dist dir", template: "folders", default: "dist" },
        },
        { name: "--build", description: "Build the package before publishing" },
        {
          name: "--dry-run",
          description: "Perform all actions except upload the package",
        },
        {
          name: "--skip-existing",
          description:
            "Ignore errors from files already existing in the repository",
        },
      ],
    },
    {
      name: "python",
      description: "Manage Python versions (experimental)",
      subcommands: [
        {
          name: "install",
          description:
            "Install the specified Python version from the Python Standalone Builds project (experimental)",
          options: [
            {
              name: ["-c", "--clean"],
              description: "Clean up installation if check fails",
            },
            freeThreaded("Use free-threaded version if available"),
            implementation("Python implementation to use"),
            {
              name: ["-r", "--reinstall"],
              description: "Reinstall if installation already exists",
            },
          ],
          args: {
            name: "python",
            description: "The python version to install",
          },
        },
        {
          name: "list",
          description:
            "Shows Python versions available for this environment (experimental)",
          options: [
            {
              name: ["-a", "--all"],
              description:
                "List all versions, including those available for download",
            },
            freeThreaded("List only free-threaded Python versions"),
            implementation("Python implementation to search for"),
            {
              name: ["-m", "--managed"],
              description: "List only Poetry managed Python versions",
            },
          ],
          args: {
            name: "version",
            description: "Python version to search for",
            isOptional: true,
          },
        },
        {
          name: "remove",
          description:
            "Remove the specified Python version if managed by Poetry (experimental)",
          options: [
            freeThreaded("Remove free-threaded version"),
            implementation("Python implementation to remove"),
          ],
          args: {
            name: "python",
            description: "The python version to remove",
            isVariadic: true,
          },
        },
      ],
    },
    {
      name: "remove",
      description: "Removes a package from the project dependencies",
      options: [
        {
          name: ["-G", "--group"],
          description: "The group to remove the dependency from",
          args: { name: "group" },
        },
        {
          name: ["-D", "--dev"],
          description:
            "Remove a package from the development dependencies (shortcut for -G dev)",
        },
        dryRun,
        lockOnly,
      ],
      args: {
        name: "packages",
        description: "The packages to remove",
        isVariadic: true,
      },
    },
    {
      name: "run",
      description: "Runs a command in the appropriate environment",
      args: {
        name: "command",
        description: "The command and arguments/options to run",
        isCommand: true,
      },
    },
    {
      name: "search",
      description: "Searches for packages on remote repositories",
      args: {
        name: "tokens",
        description: "The tokens to search for",
        isVariadic: true,
      },
    },
    {
      name: "self",
      description:
        "The self namespace regroups sub commands to manage the Poetry installation itself",
      subcommands: [
        {
          name: "add",
          description:
            "Add additional packages to Poetry's runtime environment",
          options: [
            editable,
            extrasOption("Extras to activate for the dependency"),
            source,
            allowPrereleases,
            dryRun,
          ],
          args: {
            name: "name",
            description: "The packages to add",
            isVariadic: true,
          },
        },
        {
          name: "install",
          description:
            "Install locked packages (incl. addons) required by this Poetry installation",
          options: [
            {
              ...syncDeprecated,
              description:
                "Synchronize the environment with the locked packages and the specified groups (deprecated, use poetry self sync)",
            },
            dryRun,
          ],
        },
        {
          name: "lock",
          description: "Lock the Poetry installation's system requirements",
          options: [
            {
              name: "--regenerate",
              description:
                "Ignore existing lock file and overwrite it with a new lock file created from scratch",
            },
          ],
        },
        {
          name: "remove",
          description:
            "Remove additional packages from Poetry's runtime environment",
          options: [dryRun],
          args: {
            name: "packages",
            description: "The packages to remove",
            isVariadic: true,
          },
        },
        {
          name: "show",
          description: "Show packages from Poetry's runtime environment",
          subcommands: [
            {
              name: "plugins",
              description:
                "Shows information about the currently installed plugins",
            },
          ],
          options: [
            {
              name: "--addons",
              description: "List only add-on packages installed",
            },
            showTree,
            showLatest,
            showOutdated,
            showFormat,
          ],
          args: {
            name: "package",
            description: "The package to inspect",
            isOptional: true,
          },
        },
        {
          name: "sync",
          description:
            "Sync Poetry's own environment according to the locked packages (incl. addons) required by this Poetry installation",
          options: [dryRun],
        },
        {
          name: "update",
          description: "Updates Poetry to the latest version",
          options: [
            {
              name: "--preview",
              description: "Allow the installation of pre-release versions",
            },
            dryRun,
          ],
          args: {
            name: "version",
            description: "The version to update to",
            isOptional: true,
            default: "latest",
          },
        },
      ],
    },
    {
      // Provided by poetry-plugin-shell (not installed by default since Poetry 2.0)
      name: "shell",
      description:
        "Spawns a shell within the virtual environment (requires poetry-plugin-shell)",
    },
    {
      name: "show",
      description: "Shows information about packages",
      options: [
        ...groupOptions,
        {
          name: ["-t", "--tree"],
          description: "List the dependencies as a tree",
        },
        {
          name: "--why",
          description:
            "When showing the full list, or a --tree for a single package, display whether they are a direct dependency or required by other packages",
        },
        showLatest,
        showOutdated,
        {
          name: ["-a", "--all"],
          description:
            "Show all packages (even those not compatible with current system)",
        },
        {
          name: ["-T", "--top-level"],
          description: "Show only top-level dependencies",
        },
        {
          name: "--no-truncate",
          description: "Do not truncate the output based on the terminal width",
        },
        showFormat,
      ],
      args: {
        name: "package",
        description: "The package to inspect",
        isOptional: true,
      },
    },
    {
      name: "source",
      description:
        "The source namespace regroups sub commands to manage repository sources for a Poetry project",
      subcommands: [
        {
          name: "add",
          description: "Add source configuration for project",
          options: [
            {
              name: ["-p", "--priority"],
              description:
                "Set the priority of this source (defaults to primary, will switch to supplemental in a later release)",
              args: {
                name: "priority",
                suggestions: ["primary", "supplemental", "explicit"],
              },
            },
          ],
          args: [
            { name: "name", description: "Source repository name" },
            {
              name: "url",
              description:
                "Source repository URL. Required, except for PyPI, for which it is not allowed",
              isOptional: true,
            },
          ],
        },
        {
          name: "remove",
          description: "Remove source configured for the project",
          args: { name: "name", description: "Source repository name" },
        },
        {
          name: "show",
          description:
            "Show information about sources configured for the project",
          args: {
            name: "source",
            description:
              "Source(s) to show information for. Defaults to showing all sources",
            isOptional: true,
            isVariadic: true,
          },
        },
      ],
    },
    {
      name: "sync",
      description: "Update the project's environment according to the lockfile",
      options: installOptions,
    },
    {
      name: "update",
      description:
        "Update the dependencies as according to the pyproject.toml file",
      options: [
        ...groupOptions,
        {
          name: "--sync",
          description:
            "Synchronize the environment with the locked packages and the specified groups",
        },
        dryRun,
        lockOnly,
      ],
      args: {
        name: "packages",
        description: "The packages to update",
        isOptional: true,
        isVariadic: true,
      },
    },
    {
      name: "version",
      description:
        "Shows the version of the project or bumps it when a valid bump rule is provided",
      options: [
        {
          name: ["-s", "--short"],
          description: "Output the version number only",
        },
        { name: "--dry-run", description: "Do not update pyproject.toml file" },
        {
          name: "--next-phase",
          description: "Increment the phase of the current version",
        },
      ],
      args: {
        name: "version",
        description: "The version number or the rule to update the version",
        isOptional: true,
        suggestions: [
          "patch",
          "minor",
          "major",
          "prepatch",
          "preminor",
          "premajor",
          "prerelease",
        ],
      },
    },
  ],
  options: globalOptions,
};

export default completionSpec;
