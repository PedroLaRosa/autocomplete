// pipx v1.18.19 (PyPI latest, 2026-11-19). Source: pipx-1.18.19 sdist from PyPI read statically (argparse definitions in
// src/pipx/main.py, commands/environment.py, constants.py, docs/man/pipx.1.rst); pipx itself was not run.
const packagesGenerator: Fig.Generator = {
  script: ["pipx", "list", "--short"],
  postProcess: (out) =>
    out
      .split("\n")
      .filter(Boolean)
      .map((line) => ({
        name: line.split(" ")[0],
        description: "Installed package",
      })),
};

const environmentVariables = [
  "PIPX_HOME",
  "PIPX_GLOBAL_HOME",
  "PIPX_BIN_DIR",
  "PIPX_GLOBAL_BIN_DIR",
  "PIPX_MAN_DIR",
  "PIPX_COMPLETION_DIR",
  "PIPX_GLOBAL_MAN_DIR",
  "PIPX_GLOBAL_COMPLETION_DIR",
  "PIPX_SHARED_LIBS",
  "PIPX_DEFAULT_PYTHON",
  "PIPX_DEFAULT_BACKEND",
  "PIPX_COOLDOWN",
  "PIPX_FETCH_MISSING_PYTHON",
  "PIPX_FETCH_PYTHON",
  "PIPX_DISABLE_SHARED_LIBS_AUTO_UPGRADE",
  "PIPX_USE_EMOJI",
  "PIPX_MAX_LOGS",
  "PIPX_LOCAL_VENVS",
  "PIPX_LOG_DIR",
  "PIPX_TRASH_DIR",
  "PIPX_VENV_CACHEDIR",
  "PIPX_STANDALONE_PYTHON_CACHEDIR",
  "PIPX_RESOLVED_BACKEND",
  "PIPX_BACKEND_SOURCE",
  "PIPX_UV_BINARY",
  "UV_CACHE_DIR",
];

// Accepted by every command that does not only group subcommands
const sharedOptions: Fig.Option[] = [
  {
    name: ["-q", "--quiet"],
    description:
      "Give less output. May be used multiple times corresponding to the ERROR and CRITICAL logging levels. The count maxes out at 2",
    isRepeatable: 2,
  },
  {
    name: ["-v", "--verbose"],
    description:
      "Give more output. May be used multiple times corresponding to the INFO, DEBUG and NOTSET logging levels. The count maxes out at 3",
    isRepeatable: 3,
  },
  {
    name: "--skip-maintenance",
    description:
      "Do not upgrade shared libraries; use bundled pip when creating them",
  },
  {
    name: "--global",
    description: "Perform action globally for all users",
  },
];

const outputOption: Fig.Option = {
  name: "--output",
  description: "Select the output format",
  args: {
    name: "format",
    default: "human",
    suggestions: [
      { name: "human", description: "Text for people" },
      { name: "json", description: "A JSON document for scripts" },
    ],
  },
};

const backendOption: Fig.Option = {
  name: "--backend",
  description:
    "Backend used for creating venvs and managing packages. Defaults to PIPX_DEFAULT_BACKEND when set, else uv when uv is available, else pip. Commands on an existing venv keep its recorded backend",
  args: {
    name: "backend",
    suggestions: ["pip", "uv"],
  },
};

const pythonOptions: Fig.Option[] = [
  {
    name: "--python",
    description:
      "Python to install with. Possible values can be the executable name (python3.11), the version of an available system Python or to pass to py launcher (3.11), or the full path to the executable. Requires Python 3.11 or above",
    args: {
      name: "python",
      template: "filepaths",
    },
  },
  {
    name: "--fetch-python",
    description:
      "When to fetch a standalone Python build from python-build-standalone. Defaults to PIPX_FETCH_PYTHON, or never",
    exclusiveOn: ["--fetch-missing-python"],
    args: {
      name: "when",
      suggestions: [
        {
          name: "always",
          description:
            "Use a standalone build even when a system Python matches",
        },
        {
          name: "missing",
          description:
            "Download only when the requested version is not found locally",
        },
        { name: "never", description: "Never download" },
      ],
    },
  },
  {
    name: "--fetch-missing-python",
    description: "Alias for --fetch-python=missing",
    exclusiveOn: ["--fetch-python"],
    deprecated: {
      description: "Use --fetch-python=missing instead",
    },
  },
];

const pipVenvOptions = (systemSitePackagesNote?: string): Fig.Option[] => [
  {
    name: "--system-site-packages",
    description: `Give the virtual environment access to the system site-packages dir${
      systemSitePackagesNote ? ` (${systemSitePackagesNote})` : ""
    }`,
  },
  {
    name: ["--index-url", "-i"],
    description: "Base URL of Python Package Index",
    args: {
      name: "index url",
    },
  },
  {
    name: ["--editable", "-e"],
    description: "Install a project in editable mode",
  },
  {
    name: "--pip-args",
    description:
      "Arbitrary pip arguments to pass directly to pip install/upgrade commands. Under the uv backend, pipx run translates a subset (--index-url/-i, --extra-index-url, --find-links/-f, --trusted-host, --no-binary, --only-binary, --pre, --upgrade/-U, --no-cache-dir) and rejects other flags; other commands pass them to uv pip install unchanged",
    args: {
      name: "pip args",
    },
  },
  {
    name: "--cooldown",
    description:
      "Ignore index artifacts uploaded fewer than DAYS days ago. Defaults to PIPX_COOLDOWN; pass 0 to opt out",
    args: {
      name: "days",
    },
  },
];

const forceOption = (description: string): Fig.Option => ({
  name: ["--force", "-f"],
  description,
});

const forceDescription =
  "Modify existing virtual environment and files in PIPX_BIN_DIR and PIPX_MAN_DIR";

const dependencyAppOptions: Fig.Option[] = [
  {
    name: "--include-deps",
    description: "Include apps and manual pages from all dependencies",
    exclusiveOn: ["--include-resources-from"],
  },
  {
    name: "--include-resources-from",
    description:
      "Include apps and manual pages from this dependency. Repeat for multiple dependencies",
    isRepeatable: true,
    exclusiveOn: ["--include-deps"],
    args: {
      name: "package",
    },
  },
];

const skipOption: Fig.Option = {
  name: "--skip",
  description: "Skip these packages",
  args: {
    name: "packages to skip",
    isVariadic: true,
  },
};

const includeInjectedOption = (description: string): Fig.Option => ({
  name: "--include-injected",
  description,
});

const environmentArg: Fig.Arg = {
  name: "environment",
  description: "Name of the existing pipx-managed environment",
  generators: packagesGenerator,
};

const optionalPackagesArg = (description: string): Fig.Arg => ({
  name: "packages",
  description,
  isVariadic: true,
  isOptional: true,
  generators: packagesGenerator,
});

const completionSpec: Fig.Spec = {
  name: "pipx",
  description: "Install and Run Python Applications in Isolated Environments",
  subcommands: [
    {
      name: "install",
      description: "Install a package",
      options: [
        ...sharedOptions,
        ...dependencyAppOptions,
        forceOption(
          `${forceDescription}; --python does not change an existing environment's Python, use pipx reinstall --python for that`
        ),
        {
          name: ["--upgrade", "-U"],
          description:
            "Upgrade or downgrade an existing package when its version does not satisfy the supplied spec, removing exposed apps, manual pages, and shell completions the new version no longer ships",
        },
        {
          name: "--upgrade-strategy",
          description:
            "How dependency upgrades are handled when --upgrade changes an existing package",
          args: {
            name: "strategy",
            suggestions: ["only-if-needed", "eager"],
          },
        },
        {
          name: "--suffix",
          description:
            "Optional suffix for virtual environment and executable names. It goes at the end of each app name (pip3.14 becomes pip3.14_a), before the file extension on Windows",
          args: {
            name: "suffix",
          },
        },
        ...pythonOptions,
        {
          name: "--preinstall",
          description:
            "Optional package to be installed into the Virtual Environment before installing the main package. Use this flag multiple times if you want to preinstall multiple packages",
          isRepeatable: true,
          args: {
            name: "package",
          },
        },
        {
          name: "--app",
          description:
            "Require this application entry point after installation. Repeat to require multiple entry points",
          isRepeatable: true,
          args: {
            name: "app",
          },
        },
        {
          name: "--lock",
          description:
            "Install the environment from an explicit pylock.toml file",
          args: {
            name: "file",
            template: "filepaths",
          },
        },
        ...pipVenvOptions(),
        backendOption,
        outputOption,
      ],
      args: {
        name: "package_spec",
        description:
          "Package name(s), PEP 723 script(s), or installation spec(s)",
        isVariadic: true,
        template: "filepaths",
      },
    },
    {
      name: "install-all",
      description: "Install all packages",
      options: [
        ...sharedOptions,
        forceOption(forceDescription),
        ...pythonOptions,
        ...pipVenvOptions(),
        backendOption,
      ],
      args: {
        name: "spec_metadata_file",
        description:
          "Spec metadata file generated from pipx list --output json",
        template: "filepaths",
      },
    },
    {
      name: "uninject",
      description:
        "Uninstall injected packages from an existing Virtual Environment",
      options: [
        ...sharedOptions,
        {
          name: "--leave-deps",
          description:
            "Only uninstall the main injected package but leave its dependencies installed",
        },
        outputOption,
      ],
      args: [
        {
          ...environmentArg,
          description:
            "Name of the existing pipx-managed environment to uninject from",
        },
        {
          name: "dependencies",
          description: "The package names to uninject from the environment",
          isVariadic: true,
        },
      ],
    },
    {
      name: "inject",
      description: "Install packages into an existing Virtual Environment",
      options: [
        ...sharedOptions,
        {
          name: ["-r", "--requirement"],
          description:
            "File containing the packages to inject into the Virtual Environment, one package name or pip package spec per line. May be specified multiple times",
          isRepeatable: true,
          args: {
            name: "file",
            template: "filepaths",
          },
        },
        {
          name: "--include-apps",
          description:
            "Add apps from the injected packages onto your PATH and expose their manual pages",
        },
        ...dependencyAppOptions,
        ...pipVenvOptions("ignored for an existing environment"),
        forceOption(forceDescription),
        {
          name: "--with-suffix",
          description:
            "Add the suffix (if given) of the Virtual Environment to the packages to inject",
        },
        backendOption,
        outputOption,
      ],
      args: [
        {
          ...environmentArg,
          description:
            "Name of the existing pipx-managed environment to inject into",
        },
        {
          name: "dependencies",
          description:
            "The packages to inject into the environment, either package name or pip package spec",
          isVariadic: true,
          isOptional: true,
        },
      ],
    },
    {
      name: "expose",
      description: "Relink hidden or missing resources of an environment",
      options: [...sharedOptions, outputOption],
      args: {
        ...environmentArg,
        description: "Environment to expose",
      },
    },
    {
      name: "unexpose",
      description: "Hide resources without removing an environment",
      options: [...sharedOptions, outputOption],
      args: {
        ...environmentArg,
        description: "Environment to hide",
      },
    },
    {
      name: "pin",
      description:
        "Pin the specified package to prevent it from being upgraded",
      options: [
        ...sharedOptions,
        {
          name: "--injected-only",
          description:
            "Pin injected packages in venv only, so that they will not be upgraded during upgrade operations. Do not pass it if you wish to pin both main package and injected packages",
        },
        {
          ...skipOption,
          description: "Skip these packages. Implies --injected-only",
        },
        outputOption,
      ],
      args: {
        ...environmentArg,
        description: "Environment to pin",
      },
    },
    {
      name: "unpin",
      description: "Unpin the specified package",
      options: [...sharedOptions, outputOption],
      args: {
        ...environmentArg,
        description: "Environment to unpin",
      },
    },
    {
      name: "upgrade",
      description: "Upgrade a package",
      options: [
        ...sharedOptions,
        includeInjectedOption(
          "Also upgrade packages injected into the main app's environment"
        ),
        forceOption(forceDescription),
        ...pipVenvOptions("only used with --install"),
        {
          name: "--install",
          description: "Install package spec if missing",
        },
        ...pythonOptions,
        backendOption,
        outputOption,
      ],
      args: {
        name: "packages",
        description: "Names of the packages to upgrade",
        isVariadic: true,
        generators: packagesGenerator,
      },
    },
    {
      name: "upgrade-all",
      description: "Upgrade all packages",
      options: [
        ...sharedOptions,
        includeInjectedOption(
          "Also upgrade packages injected into the main app's environment"
        ),
        skipOption,
        forceOption(forceDescription),
        ...pipVenvOptions("ignored for an existing environment"),
        backendOption,
        outputOption,
      ],
    },
    {
      name: "upgrade-shared",
      description: "Upgrade shared libraries",
      options: [
        ...sharedOptions,
        {
          name: "--pip-args",
          description:
            "Arbitrary pip arguments to pass directly to pip install/upgrade commands",
          args: {
            name: "pip args",
          },
        },
        outputOption,
      ],
    },
    {
      name: "uninstall",
      description: "Uninstall a package",
      options: [...sharedOptions, outputOption],
      args: environmentArg,
    },
    {
      name: "uninstall-all",
      description: "Uninstall all packages",
      options: [...sharedOptions, outputOption],
    },
    {
      name: "reset",
      description: "Return pipx to a fresh install",
      options: [
        ...sharedOptions,
        {
          name: ["--yes", "-y"],
          description: "Reset without asking for confirmation",
        },
        {
          name: "--dry-run",
          description: "Report what a reset would remove and stop",
        },
        outputOption,
      ],
    },
    {
      name: "reinstall",
      description: "Reinstall a package",
      options: [
        ...sharedOptions,
        ...pythonOptions,
        backendOption,
        outputOption,
      ],
      args: environmentArg,
    },
    {
      name: "reinstall-all",
      description: "Reinstall all packages",
      options: [
        ...sharedOptions,
        ...pythonOptions,
        skipOption,
        backendOption,
        outputOption,
      ],
    },
    {
      name: "health",
      description: "Check installed package environments",
      options: [...sharedOptions, outputOption],
      args: optionalPackagesArg("Installed packages to check"),
    },
    {
      name: "repair",
      description: "Repair broken package environments",
      options: [
        ...sharedOptions,
        ...pythonOptions,
        backendOption,
        outputOption,
      ],
      args: optionalPackagesArg("Installed packages to repair"),
    },
    {
      name: "list",
      description: "List installed packages",
      options: [
        ...sharedOptions,
        includeInjectedOption(
          "Show packages injected into the main app's environment"
        ),
        {
          name: "--outdated",
          description: "List packages with an available upgrade",
        },
        {
          name: "--short",
          description: "List packages only",
          exclusiveOn: ["--pinned"],
        },
        {
          name: "--pinned",
          description:
            "List pinned packages only. Pass --include-injected at the same time to list injected packages that were pinned",
          exclusiveOn: ["--short"],
        },
        { ...outputOption, exclusiveOn: ["--json"] },
        {
          name: "--json",
          description:
            "Print the installed-package snapshot as JSON, the format install-all consumes",
          exclusiveOn: ["--output"],
        },
      ],
      args: optionalPackagesArg("Installed packages to list"),
    },
    {
      name: "interpreter",
      description: "Interact with interpreters managed by pipx",
      subcommands: [
        {
          name: "list",
          description: "List available interpreters",
          options: [...sharedOptions, outputOption],
        },
        {
          name: "prune",
          description: "Prune unused interpreters",
          options: [...sharedOptions, outputOption],
        },
        {
          name: "upgrade",
          description:
            "Upgrade installed interpreters to the latest available micro/patch version",
          options: [...sharedOptions, outputOption],
        },
      ],
    },
    {
      name: "cache",
      description: "Manage cached run environments",
      subcommands: [
        {
          name: "dir",
          description: "Show the cache directory",
          options: [...sharedOptions, outputOption],
        },
        {
          name: "purge",
          description: "Remove cached run environments",
          options: [...sharedOptions, outputOption],
        },
      ],
    },
    {
      name: "manifest",
      description: "Manage tools declared in an explicit manifest",
      subcommands: [
        {
          name: "lock",
          description: "Resolve a tool manifest with nab",
          options: [...sharedOptions, outputOption],
          args: {
            name: "manifest",
            description: "Path to the tool manifest",
            template: "filepaths",
          },
        },
        {
          name: "sync",
          description: "Apply a tool manifest",
          options: [
            ...sharedOptions,
            {
              name: "--prune",
              description: "Uninstall environments absent from the manifest",
            },
            backendOption,
            outputOption,
          ],
          args: {
            name: "manifest",
            description: "Path to the tool manifest",
            template: "filepaths",
          },
        },
      ],
    },
    {
      name: "run",
      description:
        "Download the latest version of a package to a temporary virtual environment, then run an app from it",
      parserDirectives: {
        optionsMustPrecedeArguments: true,
      },
      options: [
        ...sharedOptions,
        {
          name: "--no-cache",
          description: "Do not reuse cached virtual environment if it exists",
          exclusiveOn: ["--refresh"],
        },
        {
          name: "--refresh",
          description: "Rebuild and cache the virtual environment",
          exclusiveOn: ["--no-cache"],
        },
        {
          name: "--no-path-check",
          description: "Do not check whether the app is already on PATH",
        },
        {
          name: "--python-args",
          description:
            "Arguments to pass to the Python interpreter that runs the application",
          args: {
            name: "args",
          },
        },
        {
          name: "--path",
          description: "Interpret app name as a local path",
        },
        {
          name: "--pypackages",
          description:
            "Require app to be run from local __pypackages__ directory",
        },
        {
          name: "--with",
          description: "Extra dependencies to add to the temporary environment",
          isRepeatable: true,
          args: {
            name: "package",
          },
        },
        {
          name: "--spec",
          description:
            "The package name or specific installation source to install the app from, for example mypackage==2.0.0 or git+https://github.com/user/repo.git@branch",
          args: {
            name: "spec",
          },
        },
        ...pythonOptions,
        ...pipVenvOptions("not supported under the uv backend"),
        backendOption,
      ],
      args: {
        name: "app",
        description: "App/package name and any arguments to be passed to it",
        isVariadic: true,
      },
    },
    {
      name: "exec",
      description: "Run an application from an existing pipx environment",
      options: sharedOptions,
      args: [
        {
          ...environmentArg,
          description: "Name of the existing pipx environment",
        },
        {
          name: "app",
          description: "Application to run",
        },
        {
          name: "app args",
          description: "Arguments to pass to the application",
          isVariadic: true,
          isOptional: true,
        },
      ],
    },
    {
      name: "runpip",
      description:
        "Run pip, or uv pip under the uv backend, in an existing pipx-managed Virtual Environment",
      options: sharedOptions,
      args: [
        {
          ...environmentArg,
          description:
            "Name of the existing pipx-managed Virtual Environment to run pip in",
        },
        {
          name: "pipargs",
          description: "Arguments to forward to pip command",
          isVariadic: true,
          isOptional: true,
        },
      ],
    },
    {
      name: "ensurepath",
      description:
        "Ensure directories necessary for pipx operation are in your PATH environment variable",
      options: [
        ...sharedOptions,
        {
          name: "--prepend",
          description:
            "Prepend directories to your PATH instead of appending. Use it to put pipx apps ahead of system apps",
        },
        forceOption(
          "Add text to your shell's config file even if it looks like your PATH already contains paths to pipx and pipx-install apps. With --global, also replace a system PATH configuration file that holds content pipx did not write"
        ),
        {
          name: "--all-shells",
          description:
            "Add directories to PATH in all shells instead of just the current one",
        },
        {
          name: "--dry-run",
          description:
            "Report what would be added to PATH without modifying PATH or any shell configuration file",
        },
      ],
    },
    {
      name: "environment",
      description:
        "Print a list of environment variables and paths used by pipx",
      options: [
        ...sharedOptions,
        {
          name: ["--value", "-V"],
          description:
            "Print the value listed under Derived values, or else the raw value (empty when unset)",
          args: {
            name: "variable",
            suggestions: environmentVariables,
          },
        },
      ],
    },
    {
      name: "completions",
      description: "Print instructions on enabling shell completions for pipx",
      options: sharedOptions,
    },
    {
      name: "help",
      description: "Show help for pipx or a command",
      options: sharedOptions,
    },
  ],
  options: [
    {
      name: ["--help", "-h"],
      description: "Show this help message and exit",
    },
    {
      name: "--version",
      description: "Print version and exit",
    },
  ],
};

export default completionSpec;
