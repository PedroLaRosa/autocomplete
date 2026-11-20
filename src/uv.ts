// uv v0.13.9 (PyPI and GitHub tag astral-sh/uv 0.13.9, released 2026-11-17, checked 2026-11-19). Source: static read of the clap definitions in crates/uv-cli/src/lib.rs at tag 0.13.9
// (plus crates/uv-cache/src/cli.rs and the ValueEnum types in uv-configuration, uv-audit, uv-fs, uv-python-types and uv-torch); the uv binary was not run.
// Not covered: hidden pip-compat flags without help text, `uv build-backend`, `uv tool uvx`, `uv pip debug`; hidden flags/commands that have help text are kept with `hidden: true`.

// ////////////////////////////////////////////////////////////////// Generators //////////////////////////////////////////////////////////////////

const dependenciesGenerator: Fig.Generator = {
  script: {
    command: "bash",
    args: [
      "-c",
      'awk \'/dependencies = \\[/ {f=1; next} /\\]/ {f=0} f && /"/ {line = $0; gsub(/^[ \\t]*"/, "", line); sub(/>=.*$/, "", line); gsub(/",?$/, "", line); print line}\' pyproject.toml',
    ],
  },
  postProcess: (out) => {
    return out.split("\n").map((line) => {
      return {
        name: line,
        description: "Dependency",
        icon: "📦",
        priority: 80,
      };
    });
  },
};

const commandGenerator: Fig.Generator = {
  script: {
    command: "bash",
    args: ["-c", `uv run | grep -E '^- ' | sed 's/^- //'`],
  },
  postProcess: (out) => {
    return out.split("\n").map((line) => {
      return {
        name: line,
        description: "Command",
        icon: "fig://icon?type=command",
        priority: 80,
      };
    });
  },
};

// ////////////////////////////////////////////////////////////////// Enum values //////////////////////////////////////////////////////////////////

const targetTripleValues = [
  "windows",
  "linux",
  "macos",
  "x86_64-pc-windows-msvc",
  "aarch64-pc-windows-msvc",
  "i686-pc-windows-msvc",
  "x86_64-unknown-linux-gnu",
  "aarch64-apple-darwin",
  "x86_64-apple-darwin",
  "aarch64-unknown-linux-gnu",
  "aarch64-unknown-linux-musl",
  "x86_64-unknown-linux-musl",
  "riscv64-unknown-linux",
  "x86_64-manylinux2014",
  "x86_64-manylinux_2_17",
  "x86_64-manylinux_2_28",
  "x86_64-manylinux_2_31",
  "x86_64-manylinux_2_32",
  "x86_64-manylinux_2_33",
  "x86_64-manylinux_2_34",
  "x86_64-manylinux_2_35",
  "x86_64-manylinux_2_36",
  "x86_64-manylinux_2_37",
  "x86_64-manylinux_2_38",
  "x86_64-manylinux_2_39",
  "x86_64-manylinux_2_40",
  "aarch64-manylinux2014",
  "aarch64-manylinux_2_17",
  "aarch64-manylinux_2_28",
  "aarch64-manylinux_2_31",
  "aarch64-manylinux_2_32",
  "aarch64-manylinux_2_33",
  "aarch64-manylinux_2_34",
  "aarch64-manylinux_2_35",
  "aarch64-manylinux_2_36",
  "aarch64-manylinux_2_37",
  "aarch64-manylinux_2_38",
  "aarch64-manylinux_2_39",
  "aarch64-manylinux_2_40",
  "aarch64-linux-android",
  "x86_64-linux-android",
  "wasm32-pyodide2024",
  "wasm32-pyodide2025",
  "arm64-apple-ios",
  "arm64-apple-ios-simulator",
  "x86_64-apple-ios-simulator",
];

const keyringProviderTypeValues = ["disabled", "subprocess"];

const textJsonValues = ["text", "json"];

const linkModeValues = ["clone", "copy", "hardlink", "symlink"];

const torchModeValues = [
  "auto",
  "cpu",
  "cu132",
  "cu130",
  "cu129",
  "cu128",
  "cu126",
  "cu125",
  "cu124",
  "cu123",
  "cu122",
  "cu121",
  "cu120",
  "cu118",
  "cu117",
  "cu116",
  "cu115",
  "cu114",
  "cu113",
  "cu112",
  "cu111",
  "cu110",
  "cu102",
  "cu101",
  "cu100",
  "cu92",
  "cu91",
  "cu90",
  "cu80",
  "rocm7.2",
  "rocm7.1",
  "rocm7.0",
  "rocm6.4",
  "rocm6.3",
  "rocm6.2.4",
  "rocm6.2",
  "rocm6.1",
  "rocm6.0",
  "rocm5.7",
  "rocm5.6",
  "rocm5.5",
  "rocm5.4.2",
  "rocm5.4",
  "rocm5.3",
  "rocm5.2",
  "rocm5.1.1",
  "rocm4.2",
  "rocm4.1",
  "rocm4.0.1",
  "xpu",
];

const projectBuildBackendValues = [
  "uv",
  "hatch",
  "flit",
  "pdm",
  "poetry",
  "setuptools",
  "maturin",
  "scikit",
];

// ////////////////////////////////////////////////////////////////// Options //////////////////////////////////////////////////////////////////

const cacheOptions: Fig.Option[] = [
  {
    name: ["-n", "--no-cache", "--no-cache-dir"],
    description:
      "Avoid reading from or writing to the cache, instead using a temporary directory for the duration of the operation",
    isPersistent: true,
  },
  {
    name: "--cache-dir",
    description: "Path to the cache directory",
    args: { name: "CACHE_DIR", template: "folders" },
    isPersistent: true,
  },
];

const globalOptions: Fig.Option[] = [
  {
    name: "--python-preference",
    description: "Whether to prefer uv-managed or system Python installations",
    args: {
      name: "PYTHON_PREFERENCE",
      suggestions: ["only-managed", "managed", "system", "only-system"],
    },
    isPersistent: true,
    hidden: true,
  },
  {
    name: "--managed-python",
    description: "Require use of uv-managed Python versions",
    isPersistent: true,
  },
  {
    name: "--no-managed-python",
    description: "Disable use of uv-managed Python versions",
    isPersistent: true,
  },
  {
    name: "--allow-python-downloads",
    description: "Allow automatically downloading Python when required",
    isPersistent: true,
    hidden: true,
  },
  {
    name: "--no-python-downloads",
    description: "Disable automatic downloads of Python",
    isPersistent: true,
  },
  {
    name: "--python-fetch",
    description: "Deprecated option for configuring automatic Python downloads",
    args: {
      name: "PYTHON_FETCH",
      suggestions: ["automatic", "manual", "never"],
    },
    isPersistent: true,
    deprecated: true,
    hidden: true,
  },
  {
    name: ["-q", "--quiet"],
    description: "Use quiet output",
    isRepeatable: true,
    isPersistent: true,
  },
  {
    name: ["-v", "--verbose"],
    description: "Use verbose output",
    isRepeatable: true,
    isPersistent: true,
  },
  {
    name: "--no-color",
    description: "Disable colors",
    isPersistent: true,
    hidden: true,
  },
  {
    name: "--color",
    description: "Control the use of color in output",
    args: { name: "COLOR_CHOICE", suggestions: ["auto", "always", "never"] },
    isPersistent: true,
  },
  {
    name: "--native-tls",
    description:
      "(Deprecated: use `--system-certs` instead.) Whether to load TLS certificates from the platform's native certificate store",
    isPersistent: true,
    deprecated: true,
    hidden: true,
  },
  {
    name: "--system-certs",
    description:
      "Whether to load TLS certificates from the platform's native certificate store",
    isPersistent: true,
  },
  {
    name: "--offline",
    description: "Disable network access",
    isPersistent: true,
  },
  {
    name: ["--allow-insecure-host", "--trusted-host"],
    description: "Allow insecure connections to a host",
    args: { name: "ALLOW_INSECURE_HOST" },
    isRepeatable: true,
    isPersistent: true,
  },
  {
    name: "--preview",
    description: "Whether to enable all experimental preview features",
    isPersistent: true,
    hidden: true,
  },
  {
    name: ["--preview-features", "--preview-feature"],
    description: "Enable experimental preview features",
    args: { name: "PREVIEW_FEATURES" },
    isRepeatable: true,
    isPersistent: true,
    hidden: true,
  },
  {
    name: "--isolated",
    description: "Avoid discovering a `pyproject.toml` or `uv.toml` file",
    isPersistent: true,
    hidden: true,
  },
  {
    name: "--show-settings",
    description: "Show the resolved settings for the current command",
    isPersistent: true,
    hidden: true,
  },
  {
    name: "--no-progress",
    description: "Hide all progress outputs",
    isPersistent: true,
  },
  {
    name: "--no-installer-metadata",
    description:
      "Skip writing `uv` installer metadata files (e.g., `INSTALLER`, `REQUESTED`, and `direct_url.json`) to site-packages `.dist-info` directories",
    isPersistent: true,
    hidden: true,
  },
  {
    name: "--directory",
    description: "Change to the given directory prior to running the command",
    args: { name: "DIRECTORY", template: "folders" },
    isPersistent: true,
  },
  {
    name: "--project",
    description: "Discover a project in the given directory",
    args: { name: "PROJECT", template: "folders" },
    isPersistent: true,
  },
];

const topLevelOptions: Fig.Option[] = [
  {
    name: "--config-file",
    description: "The path to a `uv.toml` file to use for configuration",
    args: { name: "CONFIG_FILE", template: "filepaths" },
    isPersistent: true,
  },
  {
    name: "--no-config",
    description:
      "Avoid discovering configuration files (`pyproject.toml`, `uv.toml`)",
    isPersistent: true,
  },
  {
    name: ["-h", "--help"],
    description: "Display the concise help for this command",
    isPersistent: true,
  },
  { name: ["-V", "--version"], description: "Display the uv version" },
  ...cacheOptions,
  ...globalOptions,
];

const projectDependencyGroupsOptions: Fig.Option[] = [
  {
    name: "--dev",
    description: "Include the development dependency group",
    hidden: true,
  },
  { name: "--no-dev", description: "Disable the development dependency group" },
  {
    name: "--only-dev",
    description: "Only include the development dependency group",
  },
  {
    name: "--group",
    description: "Include dependencies from the specified dependency group",
    args: { name: "GROUP" },
    isRepeatable: true,
  },
  {
    name: "--no-group",
    description: "Disable the specified dependency group",
    args: { name: "NO_GROUP" },
    isRepeatable: true,
  },
  {
    name: "--no-default-groups",
    description: "Ignore the default dependency groups",
  },
  {
    name: "--only-group",
    description:
      "Only include dependencies from the specified dependency group",
    args: { name: "ONLY_GROUP" },
    isRepeatable: true,
  },
  {
    name: "--all-groups",
    description: "Include dependencies from all dependency groups",
  },
];

const indexOptions: Fig.Option[] = [
  {
    name: "--index",
    description:
      "The indexes to use when resolving dependencies, in addition to the default index",
    args: { name: "INDEX" },
    isRepeatable: true,
  },
  {
    name: "--default-index",
    description:
      "The default package index (by default: <https://pypi.org/simple>)",
    args: { name: "DEFAULT_INDEX" },
  },
  {
    name: ["-i", "--index-url"],
    description:
      "(Deprecated: use `--default-index` instead) The URL of the Python package index (by default: <https://pypi.org/simple>)",
    args: { name: "INDEX_URL" },
    deprecated: true,
  },
  {
    name: "--extra-index-url",
    description:
      "(Deprecated: use `--index` instead) Extra URLs of package indexes to use, in addition to `--index-url`",
    args: { name: "EXTRA_INDEX_URL" },
    isRepeatable: true,
    deprecated: true,
  },
  {
    name: ["-f", "--find-links"],
    description:
      "Locations to search for candidate distributions, in addition to those found in the registry indexes",
    args: { name: "FIND_LINKS" },
    isRepeatable: true,
  },
  {
    name: "--no-index",
    description:
      "Ignore the registry index (e.g., PyPI), instead relying on direct URL dependencies and those provided via `--find-links`",
  },
];

const reinstallOptions: Fig.Option[] = [
  {
    name: ["--reinstall", "--force-reinstall"],
    description:
      "Reinstall all packages, regardless of whether they're already installed. Implies `--refresh`",
  },
  {
    name: "--reinstall-package",
    description:
      "Reinstall a specific package, regardless of whether it's already installed. Implies `--refresh-package`",
    args: { name: "REINSTALL_PACKAGE" },
    isRepeatable: true,
  },
];

const registryClientOptions: Fig.Option[] = [
  {
    name: "--index-strategy",
    description:
      "The strategy to use when resolving against multiple index URLs",
    args: {
      name: "INDEX_STRATEGY",
      suggestions: ["first-index", "unsafe-first-match", "unsafe-best-match"],
    },
  },
  {
    name: "--keyring-provider",
    description: "Attempt to use `keyring` for authentication for index URLs",
    args: { name: "KEYRING_PROVIDER", suggestions: keyringProviderTypeValues },
  },
];

const versionSelectionOptions: Fig.Option[] = [
  {
    name: "--resolution",
    description:
      "The strategy to use when selecting between the different compatible versions for a given package requirement",
    args: {
      name: "RESOLUTION",
      suggestions: ["highest", "lowest", "lowest-direct"],
    },
  },
  {
    name: "--prerelease",
    description: "The strategy to use when considering pre-release versions",
    args: {
      name: "PRERELEASE",
      suggestions: [
        "disallow",
        "allow",
        "if-necessary",
        "explicit",
        "if-necessary-or-explicit",
      ],
    },
  },
  {
    name: "--prerelease-package",
    description:
      "The strategy to use when considering pre-release versions for a specific package",
    args: { name: "PRERELEASE_PACKAGE" },
    isRepeatable: true,
  },
  {
    name: "--fork-strategy",
    description:
      "The strategy to use when selecting multiple versions of a given package across Python versions and platforms",
    args: { name: "FORK_STRATEGY", suggestions: ["fewest", "requires-python"] },
  },
];

const buildIsolationOptions: Fig.Option[] = [
  {
    name: "--no-build-isolation",
    description: "Disable isolation when building source distributions",
  },
];

const packageBuildIsolationOptions: Fig.Option[] = [
  {
    name: "--no-build-isolation-package",
    description:
      "Disable isolation when building source distributions for a specific package",
    args: { name: "NO_BUILD_ISOLATION_PACKAGE" },
    isRepeatable: true,
  },
  ...buildIsolationOptions,
];

const excludeNewerOptions: Fig.Option[] = [
  {
    name: "--exclude-newer",
    description:
      "Limit candidate packages to those that were uploaded prior to the given date",
    args: { name: "EXCLUDE_NEWER" },
  },
];

const packageExcludeNewerOptions: Fig.Option[] = [
  {
    name: "--exclude-newer-package",
    description:
      "Limit candidate packages for specific packages to those that were uploaded prior to the given date",
    args: { name: "EXCLUDE_NEWER_PACKAGE" },
    isRepeatable: true,
  },
  ...excludeNewerOptions,
];

const compileBytecodeOptions: Fig.Option[] = [
  {
    name: ["--compile-bytecode", "--compile"],
    description: "Compile Python files to bytecode after installation",
  },
];

const sourcesOptions: Fig.Option[] = [
  {
    name: "--no-sources",
    description:
      "Ignore the `tool.uv.sources` table when resolving dependencies. Used to lock against the standards-compliant, publishable package metadata, as opposed to using any workspace, Git, URL, or local path sources",
  },
  {
    name: "--no-sources-package",
    description:
      "Don't use sources from the `tool.uv.sources` table for the specified packages",
    args: { name: "NO_SOURCES_PACKAGE" },
    isRepeatable: true,
  },
];

const resolverInstallerOptions: Fig.Option[] = [
  {
    name: ["-U", "--upgrade"],
    description:
      "Allow package upgrades, ignoring pinned versions in any existing output file. Implies `--refresh`",
  },
  {
    name: ["-P", "--upgrade-package"],
    description:
      "Allow upgrades for a specific package, ignoring pinned versions in any existing output file. Implies `--refresh-package`",
    args: { name: "UPGRADE_PACKAGE" },
    isRepeatable: true,
  },
  {
    name: "--upgrade-group",
    description:
      "Allow upgrades for all packages in a dependency group, ignoring pinned versions in any existing output file",
    args: { name: "UPGRADE_GROUP" },
    isRepeatable: true,
  },
  {
    name: ["-C", "--config-setting", "--config-settings"],
    description:
      "Settings to pass to the PEP 517 build backend, specified as `KEY=VALUE` pairs",
    args: { name: "CONFIG_SETTING" },
    isRepeatable: true,
  },
  {
    name: "--config-settings-package",
    description:
      "Settings to pass to the PEP 517 build backend for a specific package, specified as `PACKAGE:KEY=VALUE` pairs",
    args: { name: "CONFIG_SETTINGS_PACKAGE" },
    isRepeatable: true,
  },
  {
    name: "--link-mode",
    description:
      "The method to use when installing packages from the global cache",
    args: { name: "LINK_MODE", suggestions: linkModeValues },
  },
  ...indexOptions,
  ...reinstallOptions,
  ...registryClientOptions,
  ...versionSelectionOptions,
  ...packageBuildIsolationOptions,
  ...packageExcludeNewerOptions,
  ...compileBytecodeOptions,
  ...sourcesOptions,
];

const buildOptions: Fig.Option[] = [
  { name: "--no-build", description: "Don't build source distributions" },
  {
    name: "--no-build-package",
    description: "Don't build source distributions for a specific package",
    args: { name: "NO_BUILD_PACKAGE" },
    isRepeatable: true,
  },
  { name: "--no-binary", description: "Don't install pre-built wheels" },
  {
    name: "--no-binary-package",
    description: "Don't install pre-built wheels for a specific package",
    args: { name: "NO_BINARY_PACKAGE" },
    isRepeatable: true,
  },
  {
    name: "--require-build-hashes",
    description: "Require hashes for all build dependencies",
  },
  {
    name: "--no-require-build-hashes",
    description: "Do not require hashes for every build dependency",
  },
];

const refreshOptions: Fig.Option[] = [
  { name: "--refresh", description: "Refresh all cached data" },
  {
    name: "--refresh-package",
    description: "Refresh cached data for a specific package",
    args: { name: "REFRESH_PACKAGE" },
    isRepeatable: true,
  },
];

const runOptions: Fig.Option[] = [
  {
    name: "--extra",
    description: "Include optional dependencies from the specified extra name",
    args: { name: "EXTRA" },
    isRepeatable: true,
  },
  { name: "--all-extras", description: "Include all optional dependencies" },
  {
    name: "--no-extra",
    description:
      "Exclude the specified optional dependencies, if `--all-extras` is supplied",
    args: { name: "NO_EXTRA" },
    isRepeatable: true,
  },
  { name: ["-m", "--module"], description: "Run a Python module" },
  {
    name: "--editable",
    description:
      "Install any non-editable dependencies, including the project and any workspace members, as editable",
    hidden: true,
  },
  {
    name: "--no-editable",
    description:
      "Install any editable dependencies, including the project and any workspace members, as non-editable",
  },
  {
    name: "--no-editable-package",
    description: "Install the specified editable packages as non-editable",
    args: { name: "NO_EDITABLE_PACKAGE" },
    isRepeatable: true,
  },
  {
    name: ["--inexact", "--no-exact"],
    description: "Do not remove extraneous packages present in the environment",
    hidden: true,
  },
  {
    name: "--exact",
    description: "Perform an exact sync, removing extraneous packages",
  },
  {
    name: "--env-file",
    description: "Load environment variables from a `.env` file",
    args: { name: "ENV_FILE", template: "filepaths" },
    isRepeatable: true,
  },
  {
    name: "--no-env-file",
    description: "Avoid reading environment variables from a `.env` file",
  },
  {
    name: ["-w", "--with"],
    description: "Run with the given packages installed",
    args: { name: "WITH" },
    isRepeatable: true,
  },
  {
    name: "--with-editable",
    description: "Run with the given packages installed in editable mode",
    args: { name: "WITH_EDITABLE", template: "folders" },
    isRepeatable: true,
  },
  {
    name: "--with-requirements",
    description: "Run with the packages listed in the given files",
    args: { name: "WITH_REQUIREMENTS", template: "filepaths" },
    isRepeatable: true,
  },
  {
    name: "--isolated",
    description: "Run the command in an isolated virtual environment",
  },
  {
    name: "--active",
    description:
      "Prefer the active virtual environment over the project's virtual environment",
  },
  {
    name: "--no-active",
    description:
      "Prefer project's virtual environment over an active environment",
    hidden: true,
  },
  { name: "--no-sync", description: "Avoid syncing the virtual environment" },
  {
    name: "--locked",
    description: "Assert that the `uv.lock` will remain unchanged",
  },
  {
    name: "--no-locked",
    description: "Disable locked mode, overriding `UV_LOCKED`",
    hidden: true,
  },
  { name: "--frozen", description: "Run without updating the `uv.lock` file" },
  {
    name: "--no-frozen",
    description: "Disable frozen mode, overriding `UV_FROZEN`",
    hidden: true,
  },
  {
    name: ["-s", "--script"],
    description: "Run the given path as a Python script",
  },
  {
    name: "--gui-script",
    description: "Run the given path as a Python GUI script",
  },
  {
    name: "--all-packages",
    description: "Run the command with all workspace members installed",
  },
  {
    name: "--package",
    description: "Run the command in a specific package in the workspace",
    args: { name: "PACKAGE" },
  },
  {
    name: ["--no-project", "--no_workspace"],
    description: "Avoid discovering the project or workspace",
  },
  {
    name: ["-p", "--python"],
    description: "The Python interpreter to use for the run environment",
    args: { name: "PYTHON" },
  },
  {
    name: "--show-resolution",
    description:
      "Whether to show resolver and installer output from any environment modifications",
    hidden: true,
  },
  {
    name: "--max-recursion-depth",
    description:
      "Number of times that `uv run` will allow recursive invocations",
    args: { name: "MAX_RECURSION_DEPTH" },
    hidden: true,
  },
  {
    name: "--python-platform",
    description: "The platform for which requirements should be installed",
    args: { name: "PYTHON_PLATFORM", suggestions: targetTripleValues },
  },
  ...projectDependencyGroupsOptions,
  ...resolverInstallerOptions,
  ...buildOptions,
  ...refreshOptions,
];

const initOptions: Fig.Option[] = [
  {
    name: "--name",
    description: "The name of the project",
    args: { name: "NAME" },
  },
  { name: "--bare", description: "Only create a `pyproject.toml`" },
  {
    name: "--virtual",
    description: "Create a virtual project, rather than a package",
    hidden: true,
  },
  {
    name: "--package",
    description: "Set up the project to be built as a Python package",
  },
  {
    name: "--no-package",
    description: "Do not set up the project to be built as a Python package",
  },
  {
    name: ["--app", "--application"],
    description: "Create a project for an application",
  },
  {
    name: ["--lib", "--library"],
    description: "Create a project for a library",
  },
  { name: "--script", description: "Create a script" },
  {
    name: "--description",
    description: "Set the project description",
    args: { name: "DESCRIPTION" },
  },
  {
    name: "--no-description",
    description: "Disable the description for the project",
  },
  {
    name: "--vcs",
    description: "Initialize a version control system for the project",
    args: { name: "VCS", suggestions: ["git", "none"] },
  },
  {
    name: "--build-backend",
    description: "Initialize a build-backend of choice for the project",
    args: { name: "BUILD_BACKEND", suggestions: projectBuildBackendValues },
  },
  {
    name: "--backend",
    description: "Invalid option name for build backend",
    hidden: true,
  },
  { name: "--no-readme", description: "Do not create a `README.md` file" },
  {
    name: "--author-from",
    description: "Fill in the `authors` field in the `pyproject.toml`",
    args: { name: "AUTHOR_FROM", suggestions: ["auto", "git", "none"] },
  },
  {
    name: "--no-pin-python",
    description: "Do not create a `.python-version` file for the project",
  },
  {
    name: "--pin-python",
    description: "Create a `.python-version` file for the project",
    hidden: true,
  },
  {
    name: ["--no-workspace", "--no-project"],
    description:
      "Avoid discovering a workspace and create a standalone project",
  },
  {
    name: ["-p", "--python"],
    description:
      "The Python interpreter to use to determine the minimum supported Python version",
    args: { name: "PYTHON" },
  },
];

const addOptions: Fig.Option[] = [
  {
    name: ["-r", "--requirements", "--requirement"],
    description: "Add the packages listed in the given files",
    args: { name: "REQUIREMENTS", template: "filepaths" },
    isRepeatable: true,
  },
  {
    name: ["-c", "--constraints", "--constraint"],
    description: "Constrain versions using the given requirements files",
    args: { name: "CONSTRAINTS", template: "filepaths" },
    isRepeatable: true,
  },
  {
    name: ["-m", "--marker"],
    description: "Apply this marker to all added packages",
    args: { name: "MARKER" },
  },
  {
    name: "--dev",
    description: "Add the requirements to the development dependency group",
  },
  {
    name: "--optional",
    description:
      "Add the requirements to the package's optional dependencies for the specified extra",
    args: { name: "OPTIONAL" },
  },
  {
    name: "--group",
    description: "Add the requirements to the specified dependency group",
    args: { name: "GROUP" },
  },
  { name: "--editable", description: "Add the requirements as editable" },
  {
    name: "--no-editable",
    description: "Don't add the requirements as editable",
    hidden: true,
  },
  {
    name: "--no-editable-package",
    description: "Don't add the specified requirements as editable",
    args: { name: "NO_EDITABLE_PACKAGE" },
    isRepeatable: true,
    hidden: true,
  },
  {
    name: ["--raw", "--raw-sources"],
    description: "Add a dependency as provided",
  },
  {
    name: "--bounds",
    description:
      "The kind of version specifier to use when adding dependencies",
    args: { name: "BOUNDS", suggestions: ["lower", "major", "minor", "exact"] },
  },
  {
    name: "--rev",
    description: "Commit to use when adding a dependency from Git",
    args: { name: "REV" },
  },
  {
    name: "--tag",
    description: "Tag to use when adding a dependency from Git",
    args: { name: "TAG" },
  },
  {
    name: "--branch",
    description: "Branch to use when adding a dependency from Git",
    args: { name: "BRANCH" },
  },
  {
    name: "--lfs",
    description: "Whether to use Git LFS when adding a dependency from Git",
  },
  {
    name: "--extra",
    description: "Extras to enable for the dependency",
    args: { name: "EXTRA" },
    isRepeatable: true,
  },
  { name: "--no-sync", description: "Avoid syncing the virtual environment" },
  {
    name: "--locked",
    description: "Assert that the `uv.lock` will remain unchanged",
  },
  {
    name: "--no-locked",
    description: "Disable locked mode, overriding `UV_LOCKED`",
    hidden: true,
  },
  {
    name: "--frozen",
    description: "Add dependencies without re-locking the project",
  },
  {
    name: "--no-frozen",
    description: "Disable frozen mode, overriding `UV_FROZEN`",
    hidden: true,
  },
  {
    name: "--active",
    description:
      "Prefer the active virtual environment over the project's virtual environment",
  },
  {
    name: "--no-active",
    description:
      "Prefer project's virtual environment over an active environment",
    hidden: true,
  },
  {
    name: "--package",
    description: "Add the dependency to a specific package in the workspace",
    args: { name: "PACKAGE" },
  },
  {
    name: "--script",
    description:
      "Add the dependency to the specified Python script, rather than to a project",
    args: { name: "SCRIPT", template: "filepaths" },
  },
  {
    name: ["-p", "--python"],
    description: "The Python interpreter to use for resolving and syncing",
    args: { name: "PYTHON" },
  },
  {
    name: "--workspace",
    description: "Add the dependency as a workspace member",
  },
  {
    name: "--no-workspace",
    description: "Don't add the dependency as a workspace member",
  },
  {
    name: "--no-install-project",
    description: "Do not install the current project",
  },
  {
    name: "--only-install-project",
    description: "Only install the current project",
    hidden: true,
  },
  {
    name: "--no-install-workspace",
    description:
      "Do not install any workspace members, including the current project",
  },
  {
    name: "--only-install-workspace",
    description:
      "Only install workspace members, including the current project",
    hidden: true,
  },
  {
    name: "--no-install-local",
    description: "Do not install local path dependencies",
  },
  {
    name: "--only-install-local",
    description: "Only install local path dependencies",
    hidden: true,
  },
  {
    name: "--no-install-package",
    description: "Do not install the given package(s)",
    args: { name: "NO_INSTALL_PACKAGE" },
    isRepeatable: true,
  },
  {
    name: "--only-install-package",
    description: "Only install the given package(s)",
    args: { name: "ONLY_INSTALL_PACKAGE" },
    isRepeatable: true,
    hidden: true,
  },
  ...resolverInstallerOptions,
  ...buildOptions,
  ...refreshOptions,
];

const removeOptions: Fig.Option[] = [
  {
    name: "--dev",
    description: "Remove the packages from the development dependency group",
  },
  {
    name: "--optional",
    description:
      "Remove the packages from the project's optional dependencies for the specified extra",
    args: { name: "OPTIONAL" },
  },
  {
    name: "--group",
    description: "Remove the packages from the specified dependency group",
    args: { name: "GROUP" },
  },
  {
    name: "--no-sync",
    description:
      "Avoid syncing the virtual environment after re-locking the project",
  },
  {
    name: "--active",
    description:
      "Prefer the active virtual environment over the project's virtual environment",
  },
  {
    name: "--no-active",
    description:
      "Prefer project's virtual environment over an active environment",
    hidden: true,
  },
  {
    name: "--locked",
    description: "Assert that the `uv.lock` will remain unchanged",
  },
  {
    name: "--no-locked",
    description: "Disable locked mode, overriding `UV_LOCKED`",
    hidden: true,
  },
  {
    name: "--frozen",
    description: "Remove dependencies without re-locking the project",
  },
  {
    name: "--no-frozen",
    description: "Disable frozen mode, overriding `UV_FROZEN`",
    hidden: true,
  },
  {
    name: "--package",
    description:
      "Remove the dependencies from a specific package in the workspace",
    args: { name: "PACKAGE" },
  },
  {
    name: "--script",
    description:
      "Remove the dependency from the specified Python script, rather than from a project",
    args: { name: "SCRIPT", template: "filepaths" },
  },
  {
    name: ["-p", "--python"],
    description: "The Python interpreter to use for resolving and syncing",
    args: { name: "PYTHON" },
  },
  ...resolverInstallerOptions,
  ...buildOptions,
  ...refreshOptions,
];

const versionOptions: Fig.Option[] = [
  {
    name: "--bump",
    description: "Update the project version using the given semantics",
    args: {
      name: "BUMP[=VALUE]",
      suggestions: [
        "major",
        "minor",
        "patch",
        "stable",
        "alpha",
        "beta",
        "rc",
        "post",
        "dev",
      ],
    },
    isRepeatable: true,
  },
  {
    name: "--dry-run",
    description: "Don't write a new version to the `pyproject.toml`",
  },
  { name: "--short", description: "Only show the version" },
  {
    name: "--output-format",
    description: "The format of the output",
    args: {
      name: "OUTPUT_FORMAT",
      suggestions: textJsonValues,
      default: "text",
    },
  },
  {
    name: "--no-sync",
    description:
      "Avoid syncing the virtual environment after re-locking the project",
  },
  {
    name: "--active",
    description:
      "Prefer the active virtual environment over the project's virtual environment",
  },
  {
    name: "--no-active",
    description:
      "Prefer project's virtual environment over an active environment",
    hidden: true,
  },
  {
    name: "--locked",
    description: "Assert that the `uv.lock` will remain unchanged",
  },
  {
    name: "--no-locked",
    description: "Disable locked mode, overriding `UV_LOCKED`",
    hidden: true,
  },
  {
    name: "--frozen",
    description: "Update the version without re-locking the project",
  },
  {
    name: "--no-frozen",
    description: "Disable frozen mode, overriding `UV_FROZEN`",
    hidden: true,
  },
  {
    name: "--package",
    description: "Update the version of a specific package in the workspace",
    args: { name: "PACKAGE" },
  },
  {
    name: ["-p", "--python"],
    description: "The Python interpreter to use for resolving and syncing",
    args: { name: "PYTHON" },
  },
  ...resolverInstallerOptions,
  ...buildOptions,
  ...refreshOptions,
];

const syncOptions: Fig.Option[] = [
  {
    name: "--extra",
    description: "Include optional dependencies from the specified extra name",
    args: { name: "EXTRA" },
    isRepeatable: true,
  },
  {
    name: "--output-format",
    description: "Select the output format",
    args: { name: "OUTPUT_FORMAT", suggestions: textJsonValues },
  },
  { name: "--all-extras", description: "Include all optional dependencies" },
  {
    name: "--no-extra",
    description:
      "Exclude the specified optional dependencies, if `--all-extras` is supplied",
    args: { name: "NO_EXTRA" },
    isRepeatable: true,
  },
  {
    name: "--editable",
    description:
      "Install any non-editable dependencies, including the project and any workspace members, as editable",
    hidden: true,
  },
  {
    name: "--no-editable",
    description:
      "Install any editable dependencies, including the project and any workspace members, as non-editable",
  },
  {
    name: "--no-editable-package",
    description: "Install the specified editable packages as non-editable",
    args: { name: "NO_EDITABLE_PACKAGE" },
    isRepeatable: true,
  },
  {
    name: ["--inexact", "--no-exact"],
    description: "Do not remove extraneous packages present in the environment",
  },
  {
    name: "--exact",
    description: "Perform an exact sync, removing extraneous packages",
    hidden: true,
  },
  {
    name: "--active",
    description: "Sync dependencies to the active virtual environment",
  },
  {
    name: "--no-active",
    description:
      "Prefer project's virtual environment over an active environment",
    hidden: true,
  },
  {
    name: "--no-install-project",
    description: "Do not install the current project",
  },
  {
    name: "--only-install-project",
    description: "Only install the current project",
    hidden: true,
  },
  {
    name: "--no-install-workspace",
    description:
      "Do not install any workspace members, including the root project",
  },
  {
    name: "--only-install-workspace",
    description: "Only install workspace members, including the root project",
    hidden: true,
  },
  {
    name: "--no-install-local",
    description: "Do not install local path dependencies",
  },
  {
    name: "--only-install-local",
    description: "Only install local path dependencies",
    hidden: true,
  },
  {
    name: "--no-install-package",
    description: "Do not install the given package(s)",
    args: { name: "NO_INSTALL_PACKAGE" },
    isRepeatable: true,
  },
  {
    name: "--only-install-package",
    description: "Only install the given package(s)",
    args: { name: "ONLY_INSTALL_PACKAGE" },
    isRepeatable: true,
    hidden: true,
  },
  {
    name: "--locked",
    description: "Assert that the `uv.lock` will remain unchanged",
  },
  {
    name: "--no-locked",
    description: "Disable locked mode, overriding `UV_LOCKED`",
    hidden: true,
  },
  { name: "--frozen", description: "Sync without updating the `uv.lock` file" },
  {
    name: "--no-frozen",
    description: "Disable frozen mode, overriding `UV_FROZEN`",
    hidden: true,
  },
  {
    name: "--dry-run",
    description:
      "Perform a dry run, without writing the lockfile or modifying the project environment",
  },
  { name: "--all-packages", description: "Sync all packages in the workspace" },
  {
    name: "--package",
    description: "Sync for specific packages in the workspace",
    args: { name: "PACKAGE" },
    isRepeatable: true,
  },
  {
    name: "--script",
    description:
      "Sync the environment for a Python script, rather than the current project",
    args: { name: "SCRIPT", template: "filepaths" },
  },
  {
    name: ["-p", "--python"],
    description: "The Python interpreter to use for the project environment",
    args: { name: "PYTHON" },
  },
  {
    name: "--python-platform",
    description: "The platform for which requirements should be installed",
    args: { name: "PYTHON_PLATFORM", suggestions: targetTripleValues },
  },
  {
    name: "--check",
    description:
      "Check if the Python environment is synchronized with the project",
  },
  ...projectDependencyGroupsOptions,
  ...resolverInstallerOptions,
  ...buildOptions,
  ...refreshOptions,
];

const resolverOptions: Fig.Option[] = [
  {
    name: ["-U", "--upgrade"],
    description:
      "Allow package upgrades, ignoring pinned versions in any existing output file. Implies `--refresh`",
  },
  {
    name: ["-P", "--upgrade-package"],
    description:
      "Allow upgrades for a specific package, ignoring pinned versions in any existing output file. Implies `--refresh-package`",
    args: { name: "UPGRADE_PACKAGE" },
    isRepeatable: true,
  },
  {
    name: "--upgrade-group",
    description:
      "Allow upgrades for all packages in a dependency group, ignoring pinned versions in any existing output file",
    args: { name: "UPGRADE_GROUP" },
    isRepeatable: true,
  },
  {
    name: ["-C", "--config-setting", "--config-settings"],
    description:
      "Settings to pass to the PEP 517 build backend, specified as `KEY=VALUE` pairs",
    args: { name: "CONFIG_SETTING" },
    isRepeatable: true,
  },
  {
    name: "--config-settings-package",
    description:
      "Settings to pass to the PEP 517 build backend for a specific package, specified as `PACKAGE:KEY=VALUE` pairs",
    args: { name: "CONFIG_SETTINGS_PACKAGE" },
    isRepeatable: true,
  },
  {
    name: "--link-mode",
    description:
      "The method to use when installing packages from the global cache",
    args: { name: "LINK_MODE", suggestions: linkModeValues },
  },
  ...indexOptions,
  ...registryClientOptions,
  ...versionSelectionOptions,
  ...packageBuildIsolationOptions,
  ...packageExcludeNewerOptions,
  ...sourcesOptions,
];

const lockOptions: Fig.Option[] = [
  { name: "--check", description: "Check if the lockfile is up-to-date" },
  {
    name: "--locked",
    description: "Check if the lockfile is up-to-date",
    hidden: true,
  },
  {
    name: "--no-locked",
    description: "Disable locked mode, overriding `UV_LOCKED`",
    hidden: true,
  },
  {
    name: "--check-exists",
    description:
      "Assert that a `uv.lock` exists without checking if it is up-to-date",
  },
  {
    name: "--frozen",
    description: "Equivalent to `--check-exists`",
    hidden: true,
  },
  {
    name: "--no-frozen",
    description: "Disable frozen mode, overriding `UV_FROZEN`",
    hidden: true,
  },
  {
    name: "--dry-run",
    description: "Perform a dry run, without writing the lockfile",
  },
  {
    name: "--script",
    description:
      "Lock the specified Python script, rather than the current project",
    args: { name: "SCRIPT", template: "filepaths" },
  },
  {
    name: ["-p", "--python"],
    description: "The Python interpreter to use during resolution",
    args: { name: "PYTHON" },
  },
  ...resolverOptions,
  ...buildOptions,
  ...refreshOptions,
];

const upgradeOptions: Fig.Option[] = [
  {
    name: "--exclude",
    description: "Exclude the named package from upgrades",
    args: { name: "EXCLUDE" },
    isRepeatable: true,
  },
  {
    name: "--require-build-hashes",
    description: "Require hashes for all build dependencies",
  },
  {
    name: "--no-require-build-hashes",
    description: "Do not require hashes for every build dependency",
  },
  ...indexOptions,
  ...registryClientOptions,
];

const exportOptions: Fig.Option[] = [
  {
    name: "--format",
    description: "The format to which `uv.lock` should be exported",
    args: {
      name: "FORMAT",
      suggestions: ["requirements.txt", "pylock.toml", "cyclonedx1.5"],
    },
  },
  { name: "--all-packages", description: "Export the entire workspace" },
  {
    name: "--package",
    description:
      "Export the dependencies for specific packages in the workspace",
    args: { name: "PACKAGE" },
    isRepeatable: true,
  },
  {
    name: "--prune",
    description: "Prune the given package from the dependency tree",
    args: { name: "PACKAGE" },
    isRepeatable: true,
  },
  {
    name: "--extra",
    description: "Include optional dependencies from the specified extra name",
    args: { name: "EXTRA" },
    isRepeatable: true,
  },
  { name: "--all-extras", description: "Include all optional dependencies" },
  {
    name: "--no-extra",
    description:
      "Exclude the specified optional dependencies, if `--all-extras` is supplied",
    args: { name: "NO_EXTRA" },
    isRepeatable: true,
  },
  {
    name: "--no-annotate",
    description:
      "Exclude comment annotations indicating the source of each package",
  },
  {
    name: "--no-header",
    description:
      "Exclude the comment header at the top of the generated output file",
  },
  {
    name: "--emit-index-url",
    description:
      "Include `--index-url` and `--extra-index-url` entries in the generated output file",
  },
  {
    name: "--emit-find-links",
    description: "Include `--find-links` entries in the generated output file",
  },
  {
    name: "--editable",
    description:
      "Export any non-editable dependencies, including the project and any workspace members, as editable",
    hidden: true,
  },
  {
    name: "--no-editable",
    description:
      "Export any editable dependencies, including the project and any workspace members, as non-editable",
  },
  {
    name: "--no-editable-package",
    description: "Export the specified editable packages as non-editable",
    args: { name: "NO_EDITABLE_PACKAGE" },
    isRepeatable: true,
  },
  {
    name: "--hashes",
    description: "Include hashes for all dependencies",
    hidden: true,
  },
  { name: "--no-hashes", description: "Omit hashes in the generated output" },
  {
    name: ["-o", "--output-file"],
    description: "Write the exported requirements to the given file",
    args: { name: "OUTPUT_FILE", template: "filepaths" },
  },
  {
    name: "--batch",
    description:
      "Export multiple selections from a TOML manifest containing `[[export]]` entries",
    args: { name: "BATCH", template: "filepaths" },
    hidden: true,
  },
  {
    name: ["--no-emit-project", "--no-install-project"],
    description: "Do not emit the current project",
  },
  {
    name: ["--only-emit-project", "--only-install-project"],
    description: "Only emit the current project",
    hidden: true,
  },
  {
    name: ["--no-emit-workspace", "--no-install-workspace"],
    description:
      "Do not emit any workspace members, including the root project",
  },
  {
    name: ["--only-emit-workspace", "--only-install-workspace"],
    description: "Only emit workspace members, including the root project",
    hidden: true,
  },
  {
    name: ["--no-emit-local", "--no-install-local"],
    description:
      "Do not include local path dependencies in the exported requirements",
  },
  {
    name: ["--only-emit-local", "--only-install-local"],
    description:
      "Only include local path dependencies in the exported requirements",
    hidden: true,
  },
  {
    name: ["--no-emit-package", "--no-install-package"],
    description: "Do not emit the given package(s)",
    args: { name: "NO_EMIT_PACKAGE" },
    isRepeatable: true,
  },
  {
    name: ["--only-emit-package", "--only-install-package"],
    description: "Only emit the given package(s)",
    args: { name: "ONLY_EMIT_PACKAGE" },
    isRepeatable: true,
    hidden: true,
  },
  {
    name: "--locked",
    description: "Assert that the `uv.lock` will remain unchanged",
  },
  {
    name: "--no-locked",
    description: "Disable locked mode, overriding `UV_LOCKED`",
    hidden: true,
  },
  {
    name: "--frozen",
    description: "Do not update the `uv.lock` before exporting",
  },
  {
    name: "--no-frozen",
    description: "Disable frozen mode, overriding `UV_FROZEN`",
    hidden: true,
  },
  {
    name: "--script",
    description:
      "Export the dependencies for the specified PEP 723 Python script, rather than the current project",
    args: { name: "SCRIPT", template: "filepaths" },
  },
  {
    name: ["-p", "--python"],
    description: "The Python interpreter to use during resolution",
    args: { name: "PYTHON" },
  },
  ...projectDependencyGroupsOptions,
  ...resolverOptions,
  ...buildOptions,
  ...refreshOptions,
];

const displayTreeOptions: Fig.Option[] = [
  {
    name: ["-d", "--depth"],
    description: "Maximum display depth of the dependency tree",
    args: { name: "DEPTH" },
  },
  {
    name: "--prune",
    description:
      "Prune the given package from the display of the dependency tree",
    args: { name: "PRUNE" },
    isRepeatable: true,
  },
  {
    name: "--package",
    description: "Display only the specified packages",
    args: { name: "PACKAGE" },
    isRepeatable: true,
  },
  {
    name: "--no-dedupe",
    description:
      "Do not de-duplicate repeated dependencies. Usually, when a package has already displayed its dependencies, further occurrences will not re-display its dependencies, and will include a (*) to indicate it has already been shown. This flag will cause those duplicates to be repeated",
  },
  {
    name: ["--invert", "--reverse"],
    description:
      "Show the reverse dependencies for the given package. This flag will invert the tree and display the packages that depend on the given package",
  },
  {
    name: "--outdated",
    description:
      "Show the latest available version of each package in the tree",
  },
  {
    name: "--show-sizes",
    description: "Show compressed wheel sizes for packages in the tree",
  },
];

const treeOptions: Fig.Option[] = [
  {
    name: "--universal",
    description: "Show a platform-independent dependency tree",
  },
  {
    name: "--format",
    description: "The format in which to display the dependency graph",
    args: { name: "FORMAT", suggestions: textJsonValues },
  },
  {
    name: "--locked",
    description: "Assert that the `uv.lock` will remain unchanged",
  },
  {
    name: "--no-locked",
    description: "Disable locked mode, overriding `UV_LOCKED`",
    hidden: true,
  },
  {
    name: "--frozen",
    description: "Display the requirements without locking the project",
  },
  {
    name: "--no-frozen",
    description: "Disable frozen mode, overriding `UV_FROZEN`",
    hidden: true,
  },
  {
    name: "--script",
    description:
      "Show the dependency tree the specified PEP 723 Python script, rather than the current project",
    args: { name: "SCRIPT", template: "filepaths" },
  },
  {
    name: "--python-version",
    description: "The Python version to use when filtering the tree",
    args: { name: "PYTHON_VERSION" },
  },
  {
    name: "--python-platform",
    description: "The platform to use when filtering the tree",
    args: { name: "PYTHON_PLATFORM", suggestions: targetTripleValues },
  },
  {
    name: ["-p", "--python"],
    description: "The Python interpreter to use for locking and filtering",
    args: { name: "PYTHON" },
  },
  ...displayTreeOptions,
  ...projectDependencyGroupsOptions,
  ...buildOptions,
  ...resolverOptions,
];

const formatOptions: Fig.Option[] = [
  {
    name: "--check",
    description: "Check if files are formatted without applying changes",
  },
  {
    name: "--diff",
    description: "Show a diff of formatting changes without applying them",
  },
  {
    name: "--version",
    description: "The version of Ruff to use for formatting",
    args: { name: "VERSION" },
  },
  {
    name: "--exclude-newer",
    description:
      "Limit candidate Ruff versions to those released prior to the given date",
    args: { name: "EXCLUDE_NEWER" },
  },
  {
    name: "--no-project",
    description: "Avoid discovering a project or workspace",
  },
  {
    name: "--show-version",
    description: "Display the version of Ruff that will be used for formatting",
    hidden: true,
  },
];

const checkOptions: Fig.Option[] = [
  {
    name: "--fix",
    description: "Apply safe fixes to resolve type-checking errors",
  },
  {
    name: "--all-packages",
    description: "Check all packages in the workspace",
  },
  {
    name: "--package",
    description: "Check specific packages in the workspace",
    args: { name: "PACKAGE" },
    isRepeatable: true,
  },
  {
    name: "--script",
    description:
      "Run checks for the specified PEP 723 Python script, rather than the current project",
    args: { name: "SCRIPT", template: "filepaths" },
  },
  {
    name: "--extra",
    description: "Include optional dependencies from the specified extra name",
    args: { name: "EXTRA" },
    isRepeatable: true,
  },
  { name: "--all-extras", description: "Include all optional dependencies" },
  {
    name: "--no-extra",
    description:
      "Exclude the specified optional dependencies, if `--all-extras` is supplied",
    args: { name: "NO_EXTRA" },
    isRepeatable: true,
  },
  {
    name: "--locked",
    description: "Assert that the `uv.lock` will remain unchanged",
  },
  {
    name: "--no-locked",
    description: "Disable locked mode, overriding `UV_LOCKED`",
    hidden: true,
  },
  { name: "--frozen", description: "Sync without updating the `uv.lock` file" },
  {
    name: "--no-frozen",
    description: "Disable frozen mode, overriding `UV_FROZEN`",
    hidden: true,
  },
  { name: "--no-sync", description: "Avoid syncing the virtual environment" },
  {
    name: "--no-install-project",
    description: "Do not install the current project",
  },
  {
    name: "--isolated",
    description: "Run checks without mutating project state",
  },
  {
    name: ["-p", "--python"],
    description: "The Python interpreter to use for the project environment",
    args: { name: "PYTHON" },
  },
  {
    name: "--ty-version",
    description: "The version of ty to use for type checking",
    args: { name: "TY_VERSION" },
  },
  {
    name: "--show-version",
    description:
      "Display the version of ty that will be used for type checking",
    hidden: true,
  },
  {
    name: "--show-command",
    description: "Display the ty command that will be used for type checking",
    hidden: true,
  },
  {
    name: "--no-project",
    description: "Avoid discovering a project or workspace",
  },
  ...projectDependencyGroupsOptions,
  ...resolverInstallerOptions,
  ...buildOptions,
  ...refreshOptions,
];

const auditCommonOptions: Fig.Option[] = [
  {
    name: "--output-format",
    description: "Select the output format",
    args: { name: "OUTPUT_FORMAT", suggestions: ["text", "json", "sarif"] },
  },
  {
    name: "--ignore",
    description: "Ignore a vulnerability by ID",
    args: { name: "IGNORE" },
    isRepeatable: true,
  },
  {
    name: "--ignore-until-fixed",
    description:
      "Ignore a vulnerability by ID, but only while no fix is available",
    args: { name: "IGNORE_UNTIL_FIXED" },
    isRepeatable: true,
  },
  {
    name: "--service-format",
    description: "The service format to use for vulnerability lookups",
    args: { name: "SERVICE_FORMAT", suggestions: ["osv"], default: "osv" },
  },
  {
    name: "--service-url",
    description: "The URL to vulnerability service API endpoint",
    args: { name: "SERVICE_URL" },
  },
];

const auditOptions: Fig.Option[] = [
  {
    name: "--no-extra",
    description: "Don't audit the specified optional dependencies",
    args: { name: "NO_EXTRA" },
    isRepeatable: true,
  },
  {
    name: "--no-dev",
    description: "Don't audit the development dependency group",
  },
  {
    name: "--no-group",
    description: "Don't audit the specified dependency group",
    args: { name: "NO_GROUP" },
    isRepeatable: true,
  },
  {
    name: "--no-default-groups",
    description: "Don't audit dependency groups unless explicitly requested",
  },
  {
    name: "--only-group",
    description: "Only audit dependencies from the specified dependency group",
    args: { name: "ONLY_GROUP" },
    isRepeatable: true,
  },
  {
    name: "--only-dev",
    description: "Only audit the development dependency group",
  },
  {
    name: "--locked",
    description: "Assert that the `uv.lock` will remain unchanged",
  },
  {
    name: "--no-locked",
    description: "Disable locked mode, overriding `UV_LOCKED`",
    hidden: true,
  },
  {
    name: "--frozen",
    description: "Audit the requirements without locking the project",
  },
  {
    name: "--no-frozen",
    description: "Disable frozen mode, overriding `UV_FROZEN`",
    hidden: true,
  },
  {
    name: "--script",
    description:
      "Audit the specified PEP 723 Python script, rather than the current project",
    args: { name: "SCRIPT", template: "filepaths" },
  },
  {
    name: "--python-version",
    description: "The Python version to use when auditing",
    args: { name: "PYTHON_VERSION" },
  },
  {
    name: "--python-platform",
    description: "The platform to use when auditing",
    args: { name: "PYTHON_PLATFORM", suggestions: targetTripleValues },
  },
  ...auditCommonOptions,
  ...buildOptions,
  ...resolverOptions,
];

const venvOptions: Fig.Option[] = [
  {
    name: ["-p", "--python"],
    description: "The Python interpreter to use for the virtual environment",
    args: { name: "PYTHON" },
  },
  {
    name: "--system",
    description:
      "Ignore virtual environments when searching for the Python interpreter",
    hidden: true,
  },
  {
    name: "--no-system",
    description:
      "This flag is included for compatibility only, it has no effect",
    hidden: true,
  },
  {
    name: ["--no-project", "--no-workspace"],
    description: "Avoid discovering a project or workspace",
  },
  {
    name: "--seed",
    description:
      "Install seed packages (one or more of: `pip`, `setuptools`, and `wheel`) into the virtual environment",
  },
  {
    name: ["-c", "--clear"],
    description: "Remove any existing files or directories at the target path",
  },
  {
    name: "--force",
    description:
      "Allow `--clear` to remove a non-virtual environment directory",
  },
  {
    name: "--no-clear",
    description:
      "Fail without prompting if any existing files or directories are present at the target path",
    hidden: true,
  },
  {
    name: "--allow-existing",
    description:
      "Preserve any existing files or directories at the target path",
  },
  {
    name: "--prompt",
    description:
      "Provide an alternative prompt prefix for the virtual environment",
    args: { name: "PROMPT" },
  },
  {
    name: "--system-site-packages",
    description:
      "Give the virtual environment access to the system site packages directory",
  },
  {
    name: "--relocatable",
    description: "Make the virtual environment relocatable",
  },
  {
    name: "--no-relocatable",
    description: "Don't make the virtual environment relocatable",
    hidden: true,
  },
  {
    name: "--link-mode",
    description:
      "The method to use when installing packages from the global cache",
    args: { name: "LINK_MODE", suggestions: linkModeValues },
  },
  ...indexOptions,
  ...registryClientOptions,
  ...packageExcludeNewerOptions,
  ...refreshOptions,
];

const hashCheckingOptions: Fig.Option[] = [
  {
    name: "--require-hashes",
    description: "Require a matching hash for each requirement",
  },
  {
    name: "--no-verify-hashes",
    description: "Disable validation of hashes in the requirements file",
  },
];

const buildCommandOptions: Fig.Option[] = [
  {
    name: "--skip-dependency-check",
    description:
      "Skip checking if build dependencies are satisfied when building without isolation",
    hidden: true,
  },
  {
    name: "--package",
    description: "Build a specific package in the workspace",
    args: { name: "PACKAGE" },
  },
  {
    name: ["--all-packages", "--all"],
    description: "Builds all packages in the workspace",
  },
  {
    name: ["-o", "--out-dir"],
    description:
      "The output directory to which distributions should be written",
    args: { name: "OUT_DIR", template: "folders" },
  },
  {
    name: "--sdist",
    description:
      'Build a source distribution ("sdist") from the given directory',
  },
  {
    name: "--wheel",
    description:
      'Build a binary distribution ("wheel") from the given directory',
  },
  {
    name: "--list",
    description:
      "When using the uv build backend, list the files that would be included when building",
    hidden: true,
  },
  { name: "--no-build-logs", description: "Hide logs from the build backend" },
  {
    name: "--force-pep517",
    description:
      "Always build through PEP 517, don't use the fast path for the uv build backend",
  },
  {
    name: "--clear",
    description:
      "Clear the output directory before the build, removing stale artifacts",
  },
  {
    name: "--no-create-gitignore",
    description: "Do not create a `.gitignore` file in the output directory",
  },
  {
    name: ["-b", "--build-constraints", "--build-constraint"],
    description:
      "Constrain build dependencies using the given requirements files when building distributions",
    args: { name: "BUILD_CONSTRAINTS", template: "filepaths" },
    isRepeatable: true,
  },
  {
    name: ["-p", "--python"],
    description: "The Python interpreter to use for the build environment",
    args: { name: "PYTHON" },
  },
  ...hashCheckingOptions,
  ...resolverOptions,
  ...buildOptions,
  ...refreshOptions,
];

const publishOptions: Fig.Option[] = [
  {
    name: "--index",
    description:
      "The name of an index in the configuration to use for publishing",
    args: { name: "INDEX" },
  },
  {
    name: ["-u", "--username"],
    description: "The username for the upload",
    args: { name: "USERNAME" },
  },
  {
    name: ["-p", "--password"],
    description: "The password for the upload",
    args: { name: "PASSWORD" },
  },
  {
    name: ["-t", "--token"],
    description: "The token for the upload",
    args: { name: "TOKEN" },
  },
  {
    name: "--trusted-publishing",
    description: "Configure trusted publishing",
    args: {
      name: "TRUSTED_PUBLISHING",
      suggestions: ["automatic", "always", "never"],
    },
  },
  {
    name: "--keyring-provider",
    description:
      "Attempt to use `keyring` for authentication for remote requirements files",
    args: { name: "KEYRING_PROVIDER", suggestions: keyringProviderTypeValues },
  },
  {
    name: "--publish-url",
    description: "The URL of the upload endpoint (not the index URL)",
    args: { name: "PUBLISH_URL" },
  },
  {
    name: "--check-url",
    description:
      "Check an index URL for existing files to skip duplicate uploads",
    args: { name: "CHECK_URL" },
  },
  {
    name: "--dry-run",
    description: "Perform a dry run without uploading files",
  },
  {
    name: "--no-attestations",
    description: "Do not upload attestations for the published files",
  },
];

const toolRunOptions: Fig.Option[] = [
  {
    name: "--from",
    description: "Use the given package to provide the command",
    args: { name: "FROM" },
  },
  {
    name: ["-w", "--with"],
    description: "Run with the given packages installed",
    args: { name: "WITH" },
    isRepeatable: true,
  },
  {
    name: "--with-editable",
    description: "Run with the given packages installed in editable mode",
    args: { name: "WITH_EDITABLE", template: "folders" },
    isRepeatable: true,
  },
  {
    name: "--with-requirements",
    description: "Run with the packages listed in the given files",
    args: { name: "WITH_REQUIREMENTS", template: "filepaths" },
    isRepeatable: true,
  },
  {
    name: ["-c", "--constraints", "--constraint"],
    description: "Constrain versions using the given requirements files",
    args: { name: "CONSTRAINTS", template: "filepaths" },
    isRepeatable: true,
  },
  {
    name: ["-b", "--build-constraints", "--build-constraint"],
    description:
      "Constrain build dependencies using the given requirements files when building source distributions",
    args: { name: "BUILD_CONSTRAINTS", template: "filepaths" },
    isRepeatable: true,
  },
  {
    name: ["--overrides", "--override"],
    description: "Override versions using the given requirements files",
    args: { name: "OVERRIDES", template: "filepaths" },
    isRepeatable: true,
  },
  {
    name: "--isolated",
    description:
      "Run the tool in an isolated virtual environment, ignoring any already-installed tools",
  },
  {
    name: "--env-file",
    description: "Load environment variables from a `.env` file",
    args: { name: "ENV_FILE", template: "filepaths" },
    isRepeatable: true,
  },
  {
    name: "--no-env-file",
    description: "Avoid reading environment variables from a `.env` file",
  },
  {
    name: "--lfs",
    description: "Whether to use Git LFS when adding a dependency from Git",
  },
  {
    name: ["-p", "--python"],
    description: "The Python interpreter to use to build the run environment",
    args: { name: "PYTHON" },
  },
  {
    name: "--show-resolution",
    description:
      "Whether to show resolver and installer output from any environment modifications",
    hidden: true,
  },
  {
    name: "--python-platform",
    description: "The platform for which requirements should be installed",
    args: { name: "PYTHON_PLATFORM", suggestions: targetTripleValues },
  },
  {
    name: "--torch-backend",
    description:
      "The backend to use when fetching packages in the PyTorch ecosystem (e.g., `cpu`, `cu126`, or `auto`)",
    args: { name: "TORCH_BACKEND", suggestions: torchModeValues },
  },
  ...resolverInstallerOptions,
  ...buildOptions,
  ...refreshOptions,
];

const dependencyConstraintsOptions: Fig.Option[] = [
  {
    name: ["-c", "--constraints", "--constraint"],
    description: "Constrain versions using the given requirements files",
    args: { name: "CONSTRAINTS", template: "filepaths" },
    isRepeatable: true,
  },
  {
    name: ["--overrides", "--override"],
    description: "Override versions using the given requirements files",
    args: { name: "OVERRIDES", template: "filepaths" },
    isRepeatable: true,
  },
  {
    name: ["--excludes", "--exclude"],
    description:
      "Exclude packages from resolution using the given requirements files",
    args: { name: "EXCLUDES", template: "filepaths" },
    isRepeatable: true,
  },
  {
    name: ["-b", "--build-constraints", "--build-constraint"],
    description:
      "Constrain build dependencies using the given requirements files when building source distributions",
    args: { name: "BUILD_CONSTRAINTS", template: "filepaths" },
    isRepeatable: true,
  },
];

const toolInstallOptions: Fig.Option[] = [
  {
    name: "--from",
    description: "The package to install commands from",
    args: { name: "FROM" },
    hidden: true,
  },
  {
    name: ["-w", "--with"],
    description: "Include the following additional requirements",
    args: { name: "WITH" },
    isRepeatable: true,
  },
  {
    name: "--with-requirements",
    description: "Run with the packages listed in the given files",
    args: { name: "WITH_REQUIREMENTS", template: "filepaths" },
    isRepeatable: true,
  },
  {
    name: ["-e", "--editable"],
    description:
      "Install the target package in editable mode, such that changes in the package's source directory are reflected without reinstallation",
  },
  {
    name: "--with-editable",
    description: "Include the given packages in editable mode",
    args: { name: "WITH_EDITABLE", template: "folders" },
    isRepeatable: true,
  },
  {
    name: "--with-executables-from",
    description: "Install executables from the following packages",
    args: { name: "WITH_EXECUTABLES_FROM" },
    isRepeatable: true,
  },
  { name: "--force", description: "Force installation of the tool" },
  {
    name: "--lfs",
    description: "Whether to use Git LFS when adding a dependency from Git",
  },
  {
    name: ["-p", "--python"],
    description: "The Python interpreter to use to build the tool environment",
    args: { name: "PYTHON" },
  },
  {
    name: "--python-platform",
    description: "The platform for which requirements should be installed",
    args: { name: "PYTHON_PLATFORM", suggestions: targetTripleValues },
  },
  {
    name: "--torch-backend",
    description:
      "The backend to use when fetching packages in the PyTorch ecosystem (e.g., `cpu`, `cu126`, or `auto`)",
    args: { name: "TORCH_BACKEND", suggestions: torchModeValues },
  },
  ...dependencyConstraintsOptions,
  ...resolverInstallerOptions,
  ...buildOptions,
  ...refreshOptions,
];

const toolUpgradeOptions: Fig.Option[] = [
  { name: "--all", description: "Upgrade all tools" },
  {
    name: ["-p", "--python"],
    description:
      "Upgrade a tool, and specify it to use the given Python interpreter to build its environment. Use with `--all` to apply to all tools",
    args: { name: "PYTHON" },
  },
  {
    name: "--python-platform",
    description: "The platform for which requirements should be installed",
    args: { name: "PYTHON_PLATFORM", suggestions: targetTripleValues },
  },
  {
    name: ["-U", "--upgrade"],
    description:
      "Allow package upgrades, ignoring pinned versions in any existing output file. Implies `--refresh`",
    hidden: true,
  },
  {
    name: ["-P", "--upgrade-package"],
    description:
      "Allow upgrades for a specific package, ignoring pinned versions in any existing output file. Implies `--refresh-package`",
    args: { name: "UPGRADE_PACKAGE" },
    isRepeatable: true,
    hidden: true,
  },
  {
    name: "--upgrade-group",
    description:
      "Allow upgrades for all packages in a dependency group, ignoring pinned versions in any existing output file",
    args: { name: "UPGRADE_GROUP" },
    isRepeatable: true,
    hidden: true,
  },
  {
    name: ["-C", "--config-setting", "--config-settings"],
    description:
      "Settings to pass to the PEP 517 build backend, specified as `KEY=VALUE` pairs",
    args: { name: "CONFIG_SETTING" },
    isRepeatable: true,
  },
  {
    name: ["--config-setting-package", "--config-settings-package"],
    description:
      "Settings to pass to the PEP 517 build backend for a specific package, specified as `PACKAGE:KEY=VALUE` pairs",
    args: { name: "CONFIG_SETTING_PACKAGE" },
    isRepeatable: true,
  },
  {
    name: "--link-mode",
    description:
      "The method to use when installing packages from the global cache",
    args: { name: "LINK_MODE", suggestions: linkModeValues },
  },
  ...indexOptions,
  ...reinstallOptions,
  ...registryClientOptions,
  ...versionSelectionOptions,
  ...packageBuildIsolationOptions,
  ...packageExcludeNewerOptions,
  ...compileBytecodeOptions,
  ...sourcesOptions,
  ...buildOptions,
];

const toolListOptions: Fig.Option[] = [
  {
    name: "--show-paths",
    description:
      "Whether to display the path to each tool environment and installed executable",
  },
  {
    name: "--show-version-specifiers",
    description:
      "Whether to display the version specifier(s) used to install each tool",
  },
  {
    name: "--show-with",
    description:
      "Whether to display the additional requirements installed with each tool",
  },
  {
    name: "--show-extras",
    description:
      "Whether to display the extra requirements installed with each tool",
  },
  {
    name: "--show-python",
    description:
      "Whether to display the Python version associated with each tool",
  },
  { name: "--outdated", description: "List outdated tools" },
  ...packageExcludeNewerOptions,
];

const toolAuditOptions: Fig.Option[] = [
  { name: "--all", description: "Audit all installed tools" },
  ...auditCommonOptions,
];

const pythonListOptions: Fig.Option[] = [
  {
    name: "--all-versions",
    description: "List all Python versions, including old patch versions",
  },
  {
    name: "--all-platforms",
    description: "List Python downloads for all platforms",
  },
  {
    name: ["--all-arches", "--all_architectures"],
    description: "List Python downloads for all architectures",
  },
  {
    name: "--only-installed",
    description: "Only show installed Python versions",
  },
  {
    name: "--only-downloads",
    description: "Only show available Python downloads",
  },
  {
    name: "--show-urls",
    description: "Show the URLs of available Python downloads",
  },
  {
    name: "--output-format",
    description: "Select the output format",
    args: { name: "OUTPUT_FORMAT", suggestions: textJsonValues },
  },
  {
    name: "--python-downloads-json-url",
    description: "URL pointing to JSON of custom Python installations",
    args: { name: "PYTHON_DOWNLOADS_JSON_URL" },
  },
];

const pythonInstallCompileBytecodeOptions: Fig.Option[] = [
  {
    name: ["--compile-bytecode", "--compile"],
    description:
      "Compile Python's standard library to bytecode after installation",
  },
];

const pythonInstallOptions: Fig.Option[] = [
  {
    name: ["-i", "--install-dir"],
    description: "The directory to store the Python installation in",
    args: { name: "INSTALL_DIR", template: "folders" },
  },
  {
    name: "--bin",
    description: "Install a Python executable into the `bin` directory",
    hidden: true,
  },
  {
    name: "--no-bin",
    description: "Do not install a Python executable into the `bin` directory",
  },
  {
    name: "--registry",
    description: "Register the Python installation in the Windows registry",
    hidden: true,
  },
  {
    name: "--no-registry",
    description:
      "Do not register the Python installation in the Windows registry",
  },
  {
    name: "--mirror",
    description:
      "Set the URL to use as the source for downloading Python installations",
    args: { name: "MIRROR" },
  },
  {
    name: "--pypy-mirror",
    description:
      "Set the URL to use as the source for downloading PyPy installations",
    args: { name: "PYPY_MIRROR" },
  },
  {
    name: "--graalpy-mirror",
    description:
      "Set the URL to use as the source for downloading GraalPy installations",
    args: { name: "GRAALPY_MIRROR" },
  },
  {
    name: "--pyodide-mirror",
    description:
      "Set the URL to use as the source for downloading Pyodide installations",
    args: { name: "PYODIDE_MIRROR" },
  },
  {
    name: "--python-downloads-json-url",
    description: "URL pointing to JSON of custom Python installations",
    args: { name: "PYTHON_DOWNLOADS_JSON_URL" },
  },
  {
    name: ["-r", "--reinstall"],
    description:
      "Reinstall the requested Python version, if it's already installed",
  },
  {
    name: ["-f", "--force"],
    description: "Replace existing Python executables during installation",
  },
  {
    name: ["-U", "--upgrade"],
    description:
      "Upgrade existing Python installations to the latest patch version",
  },
  { name: "--default", description: "Use as the default Python version" },
  ...pythonInstallCompileBytecodeOptions,
];

const pythonUpgradeOptions: Fig.Option[] = [
  {
    name: ["-i", "--install-dir"],
    description: "The directory Python installations are stored in",
    args: { name: "INSTALL_DIR", template: "folders" },
  },
  {
    name: "--mirror",
    description:
      "Set the URL to use as the source for downloading Python installations",
    args: { name: "MIRROR" },
  },
  {
    name: "--pypy-mirror",
    description:
      "Set the URL to use as the source for downloading PyPy installations",
    args: { name: "PYPY_MIRROR" },
  },
  {
    name: "--graalpy-mirror",
    description:
      "Set the URL to use as the source for downloading GraalPy installations",
    args: { name: "GRAALPY_MIRROR" },
  },
  {
    name: "--pyodide-mirror",
    description:
      "Set the URL to use as the source for downloading Pyodide installations",
    args: { name: "PYODIDE_MIRROR" },
  },
  {
    name: ["-r", "--reinstall"],
    description: "Reinstall the latest Python patch, if it's already installed",
  },
  {
    name: "--python-downloads-json-url",
    description: "URL pointing to JSON of custom Python installations",
    args: { name: "PYTHON_DOWNLOADS_JSON_URL" },
  },
  ...pythonInstallCompileBytecodeOptions,
];

const pythonFindOptions: Fig.Option[] = [
  {
    name: ["--no-project", "--no_workspace"],
    description: "Avoid discovering a project or workspace",
  },
  { name: "--system", description: "Only find system Python interpreters" },
  {
    name: "--script",
    description:
      "Find the environment for a Python script, rather than the current project",
    args: { name: "SCRIPT", template: "filepaths" },
  },
  {
    name: "--show-version",
    description:
      "Show the Python version that would be used instead of the path to the interpreter",
  },
  {
    name: "--resolve-links",
    description: "Resolve symlinks in the output path",
  },
  {
    name: "--python-downloads-json-url",
    description: "URL pointing to JSON of custom Python installations",
    args: { name: "PYTHON_DOWNLOADS_JSON_URL" },
  },
];

const pythonPinOptions: Fig.Option[] = [
  {
    name: "--resolved",
    description:
      "Write the resolved Python interpreter path instead of the request",
  },
  {
    name: ["--no-project", "--no-workspace"],
    description:
      "Avoid validating the Python pin is compatible with the project or workspace",
  },
  { name: "--global", description: "Update the global Python version pin" },
  { name: "--rm", description: "Remove the Python version pin" },
  {
    name: "--python-downloads-json-url",
    description: "URL pointing to JSON of custom Python installations",
    args: { name: "PYTHON_DOWNLOADS_JSON_URL" },
  },
];

const pipCompileOptions: Fig.Option[] = [
  {
    name: "--require-build-hashes",
    description: "Require hashes for all build dependencies",
  },
  {
    name: "--extra",
    description:
      "Include optional dependencies from the specified extra name; may be provided more than once",
    args: { name: "EXTRA" },
    isRepeatable: true,
  },
  { name: "--all-extras", description: "Include all optional dependencies" },
  {
    name: "--group",
    description:
      "Install the specified dependency group from a `pyproject.toml`",
    args: { name: "GROUP" },
    isRepeatable: true,
  },
  {
    name: "--no-deps",
    description:
      "Ignore package dependencies, instead only add those packages explicitly listed on the command line to the resulting requirements file",
  },
  {
    name: ["-o", "--output-file"],
    description:
      "Write the compiled requirements to the given `requirements.txt` or `pylock.toml` file",
    args: { name: "OUTPUT_FILE", template: "filepaths" },
  },
  {
    name: "--format",
    description: "The format in which the resolution should be output",
    args: { name: "FORMAT", suggestions: ["requirements.txt", "pylock.toml"] },
  },
  {
    name: "--no-strip-extras",
    description: "Include extras in the output file",
  },
  {
    name: "--no-strip-markers",
    description: "Include environment markers in the output file",
  },
  {
    name: "--no-annotate",
    description:
      "Exclude comment annotations indicating the source of each package",
  },
  {
    name: "--no-header",
    description:
      "Exclude the comment header at the top of the generated output file",
  },
  {
    name: "--annotation-style",
    description:
      "The style of the annotation comments included in the output file, used to indicate the source of each package",
    args: { name: "ANNOTATION_STYLE", suggestions: ["line", "split"] },
  },
  {
    name: "--custom-compile-command",
    description:
      "The header comment to include at the top of the output file generated by `uv pip compile`",
    args: { name: "CUSTOM_COMPILE_COMMAND" },
  },
  {
    name: ["-p", "--python"],
    description: "The Python interpreter to use during resolution",
    args: { name: "PYTHON" },
  },
  {
    name: "--system",
    description: "Install packages into the system Python environment",
  },
  {
    name: "--generate-hashes",
    description: "Include distribution hashes in the output file",
  },
  { name: "--no-build", description: "Don't build source distributions" },
  {
    name: "--no-binary",
    description: "Don't install pre-built wheels",
    args: { name: "NO_BINARY" },
    isRepeatable: true,
  },
  {
    name: "--only-binary",
    description: "Only use pre-built wheels; don't build source distributions",
    args: { name: "ONLY_BINARY" },
    isRepeatable: true,
  },
  {
    name: "--python-version",
    description: "The Python version to use for resolution",
    args: { name: "PYTHON_VERSION" },
  },
  {
    name: "--python-platform",
    description: "The platform for which requirements should be resolved",
    args: { name: "PYTHON_PLATFORM", suggestions: targetTripleValues },
  },
  {
    name: "--universal",
    description:
      "Perform a universal resolution, attempting to generate a single `requirements.txt` output file that is compatible with all operating systems, architectures, and Python implementations",
  },
  {
    name: ["--no-emit-package", "--unsafe-package"],
    description:
      "Specify a package to omit from the output resolution. Its dependencies will still be included in the resolution. Equivalent to pip-compile's `--unsafe-package` option",
    args: { name: "NO_EMIT_PACKAGE" },
    isRepeatable: true,
  },
  {
    name: "--emit-index-url",
    description:
      "Include `--index-url` and `--extra-index-url` entries in the generated output file",
  },
  {
    name: "--emit-find-links",
    description: "Include `--find-links` entries in the generated output file",
  },
  {
    name: "--emit-build-options",
    description:
      "Include `--no-binary` and `--only-binary` entries in the generated output file",
  },
  {
    name: "--emit-marker-expression",
    description:
      "Whether to emit a marker string indicating when it is known that the resulting set of pinned dependencies is valid",
    hidden: true,
  },
  {
    name: "--emit-index-annotation",
    description:
      "Include comment annotations indicating the index used to resolve each package (e.g., `# from https://pypi.org/simple`)",
  },
  {
    name: "--torch-backend",
    description:
      "The backend to use when fetching packages in the PyTorch ecosystem (e.g., `cpu`, `cu126`, or `auto`)",
    args: { name: "TORCH_BACKEND", suggestions: torchModeValues },
  },
  ...dependencyConstraintsOptions,
  ...resolverOptions,
  ...refreshOptions,
];

const installerOptions: Fig.Option[] = [
  {
    name: ["-C", "--config-setting", "--config-settings"],
    description:
      "Settings to pass to the PEP 517 build backend, specified as `KEY=VALUE` pairs",
    args: { name: "CONFIG_SETTING" },
    isRepeatable: true,
  },
  {
    name: "--config-settings-package",
    description:
      "Settings to pass to the PEP 517 build backend for a specific package, specified as `PACKAGE:KEY=VALUE` pairs",
    args: { name: "CONFIG_SETTINGS_PACKAGE" },
    isRepeatable: true,
  },
  {
    name: "--link-mode",
    description:
      "The method to use when installing packages from the global cache",
    args: { name: "LINK_MODE", suggestions: linkModeValues },
  },
  ...indexOptions,
  ...reinstallOptions,
  ...registryClientOptions,
  ...buildIsolationOptions,
  ...packageExcludeNewerOptions,
  ...compileBytecodeOptions,
  ...sourcesOptions,
];

const pipSyncOptions: Fig.Option[] = [
  {
    name: ["-c", "--constraints", "--constraint"],
    description: "Constrain versions using the given requirements files",
    args: { name: "CONSTRAINTS", template: "filepaths" },
    isRepeatable: true,
  },
  {
    name: ["-b", "--build-constraints", "--build-constraint"],
    description:
      "Constrain build dependencies using the given requirements files when building source distributions",
    args: { name: "BUILD_CONSTRAINTS", template: "filepaths" },
    isRepeatable: true,
  },
  {
    name: "--extra",
    description:
      "Include optional dependencies from the specified extra name; may be provided more than once",
    args: { name: "EXTRA" },
    isRepeatable: true,
  },
  { name: "--all-extras", description: "Include all optional dependencies" },
  {
    name: "--group",
    description:
      "Install the specified dependency group from a `pylock.toml` or `pyproject.toml`",
    args: { name: "GROUP" },
    isRepeatable: true,
  },
  {
    name: "--require-build-hashes",
    description: "Require hashes for all build dependencies",
  },
  {
    name: ["-p", "--python"],
    description:
      "The Python interpreter into which packages should be installed",
    args: { name: "PYTHON" },
  },
  {
    name: "--system",
    description: "Install packages into the system Python environment",
  },
  {
    name: "--break-system-packages",
    description:
      "Allow uv to modify an `EXTERNALLY-MANAGED` Python installation",
  },
  {
    name: ["-t", "--target"],
    description:
      "Install packages into the specified directory, rather than into the virtual or system Python environment. The packages will be installed at the top-level of the directory",
    args: { name: "TARGET", template: "folders" },
  },
  {
    name: "--prefix",
    description:
      "Install packages into `lib`, `bin`, and other top-level folders under the specified directory, as if a virtual environment were present at that location",
    args: { name: "PREFIX", template: "folders" },
  },
  { name: "--no-build", description: "Don't build source distributions" },
  {
    name: "--no-binary",
    description: "Don't install pre-built wheels",
    args: { name: "NO_BINARY" },
    isRepeatable: true,
  },
  {
    name: "--only-binary",
    description: "Only use pre-built wheels; don't build source distributions",
    args: { name: "ONLY_BINARY" },
    isRepeatable: true,
  },
  {
    name: "--allow-empty-requirements",
    description:
      "Allow sync of empty requirements, which will clear the environment of all packages",
  },
  {
    name: "--python-version",
    description:
      "The minimum Python version that should be supported by the requirements (e.g., `3.7` or `3.7.9`)",
    args: { name: "PYTHON_VERSION" },
  },
  {
    name: "--python-platform",
    description: "The platform for which requirements should be installed",
    args: { name: "PYTHON_PLATFORM", suggestions: targetTripleValues },
  },
  {
    name: "--strict",
    description:
      "Validate the Python environment after completing the installation, to detect packages with missing dependencies or other issues",
  },
  {
    name: "--dry-run",
    description:
      "Perform a dry run, i.e., don't actually install anything but resolve the dependencies and print the resulting plan",
  },
  {
    name: "--check",
    description:
      "Check whether the environment matches the requirements without modifying it",
  },
  {
    name: "--output-format",
    description: "Select the output format",
    args: { name: "OUTPUT_FORMAT", suggestions: textJsonValues },
  },
  {
    name: "--torch-backend",
    description:
      "The backend to use when fetching packages in the PyTorch ecosystem (e.g., `cpu`, `cu126`, or `auto`)",
    args: { name: "TORCH_BACKEND", suggestions: torchModeValues },
  },
  ...installerOptions,
  ...refreshOptions,
  ...hashCheckingOptions,
];

const pipInstallOptions: Fig.Option[] = [
  {
    name: ["-r", "--requirements", "--requirement"],
    description: "Install the packages listed in the given files",
    args: { name: "REQUIREMENTS", template: "filepaths" },
    isRepeatable: true,
  },
  {
    name: ["-e", "--editable"],
    description:
      "Install the editable package based on the provided local file path",
    args: { name: "EDITABLE" },
    isRepeatable: true,
  },
  {
    name: "--no-editable",
    description: "Install any editable dependencies as non-editable",
  },
  {
    name: "--no-editable-package",
    description: "Install the specified editable packages as non-editable",
    args: { name: "NO_EDITABLE_PACKAGE" },
    isRepeatable: true,
  },
  {
    name: "--extra",
    description:
      "Include optional dependencies from the specified extra name; may be provided more than once",
    args: { name: "EXTRA" },
    isRepeatable: true,
  },
  { name: "--all-extras", description: "Include all optional dependencies" },
  {
    name: "--group",
    description:
      "Install the specified dependency group from a `pylock.toml` or `pyproject.toml`",
    args: { name: "GROUP" },
    isRepeatable: true,
  },
  {
    name: "--no-deps",
    description:
      "Ignore package dependencies, instead only installing those packages explicitly listed on the command line or in the requirements files",
  },
  {
    name: "--require-build-hashes",
    description: "Require hashes for all build dependencies",
  },
  {
    name: ["-p", "--python"],
    description:
      "The Python interpreter into which packages should be installed",
    args: { name: "PYTHON" },
  },
  {
    name: "--system",
    description: "Install packages into the system Python environment",
  },
  {
    name: "--break-system-packages",
    description:
      "Allow uv to modify an `EXTERNALLY-MANAGED` Python installation",
  },
  {
    name: ["-t", "--target"],
    description:
      "Install packages into the specified directory, rather than into the virtual or system Python environment. The packages will be installed at the top-level of the directory",
    args: { name: "TARGET", template: "folders" },
  },
  {
    name: "--prefix",
    description:
      "Install packages into `lib`, `bin`, and other top-level folders under the specified directory, as if a virtual environment were present at that location",
    args: { name: "PREFIX", template: "folders" },
  },
  { name: "--no-build", description: "Don't build source distributions" },
  {
    name: "--no-binary",
    description: "Don't install pre-built wheels",
    args: { name: "NO_BINARY" },
    isRepeatable: true,
  },
  {
    name: "--only-binary",
    description: "Only use pre-built wheels; don't build source distributions",
    args: { name: "ONLY_BINARY" },
    isRepeatable: true,
  },
  {
    name: "--python-version",
    description:
      "The minimum Python version that should be supported by the requirements (e.g., `3.7` or `3.7.9`)",
    args: { name: "PYTHON_VERSION" },
  },
  {
    name: "--python-platform",
    description: "The platform for which requirements should be installed",
    args: { name: "PYTHON_PLATFORM", suggestions: targetTripleValues },
  },
  {
    name: ["--inexact", "--no-exact"],
    description: "Do not remove extraneous packages present in the environment",
    hidden: true,
  },
  {
    name: "--exact",
    description: "Perform an exact sync, removing extraneous packages",
  },
  {
    name: "--strict",
    description:
      "Validate the Python environment after completing the installation, to detect packages with missing dependencies or other issues",
  },
  {
    name: "--dry-run",
    description:
      "Perform a dry run, i.e., don't actually install anything but resolve the dependencies and print the resulting plan",
  },
  {
    name: "--check",
    description:
      "Check whether the environment satisfies the requirements without modifying it",
  },
  {
    name: "--output-format",
    description: "Select the output format",
    args: { name: "OUTPUT_FORMAT", suggestions: textJsonValues },
  },
  {
    name: "--torch-backend",
    description:
      "The backend to use when fetching packages in the PyTorch ecosystem (e.g., `cpu`, `cu126`, or `auto`)",
    args: { name: "TORCH_BACKEND", suggestions: torchModeValues },
  },
  ...dependencyConstraintsOptions,
  ...resolverInstallerOptions,
  ...refreshOptions,
  ...hashCheckingOptions,
];

const pipUninstallCompatOptions: Fig.Option[] = [
  {
    name: ["-y", "--yes"],
    description: "Don't ask for confirmation of uninstall deletions",
    hidden: true,
  },
];

const pipUninstallOptions: Fig.Option[] = [
  {
    name: ["-r", "--requirements", "--requirement"],
    description: "Uninstall the packages listed in the given files",
    args: { name: "REQUIREMENTS", template: "filepaths" },
    isRepeatable: true,
  },
  {
    name: ["-p", "--python"],
    description:
      "The Python interpreter from which packages should be uninstalled",
    args: { name: "PYTHON" },
  },
  {
    name: "--keyring-provider",
    description:
      "Attempt to use `keyring` for authentication for remote requirements files",
    args: { name: "KEYRING_PROVIDER", suggestions: keyringProviderTypeValues },
  },
  {
    name: "--system",
    description: "Use the system Python to uninstall packages",
  },
  {
    name: "--break-system-packages",
    description:
      "Allow uv to modify an `EXTERNALLY-MANAGED` Python installation",
  },
  {
    name: ["-t", "--target"],
    description: "Uninstall packages from the specified `--target` directory",
    args: { name: "TARGET", template: "folders" },
  },
  {
    name: "--prefix",
    description: "Uninstall packages from the specified `--prefix` directory",
    args: { name: "PREFIX", template: "folders" },
  },
  {
    name: "--dry-run",
    description:
      "Perform a dry run, i.e., don't actually uninstall anything but print the resulting plan",
  },
  ...pipUninstallCompatOptions,
];

const pipFreezeOptions: Fig.Option[] = [
  {
    name: "--exclude-editable",
    description: "Exclude any editable packages from output",
  },
  {
    name: "--exclude",
    description: "Exclude the specified package(s) from the output",
    args: { name: "EXCLUDE" },
    isRepeatable: true,
  },
  {
    name: "--strict",
    description:
      "Validate the Python environment, to detect packages with missing dependencies and other issues",
  },
  {
    name: ["-p", "--python"],
    description: "The Python interpreter for which packages should be listed",
    args: { name: "PYTHON" },
  },
  {
    name: "--path",
    description:
      "Restrict to the specified installation path for listing packages (can be used multiple times)",
    args: { name: "PATHS", template: "folders" },
    isRepeatable: true,
  },
  {
    name: "--system",
    description: "List packages in the system Python environment",
  },
  {
    name: ["-t", "--target"],
    description: "List packages from the specified `--target` directory",
    args: { name: "TARGET", template: "folders" },
  },
  {
    name: "--prefix",
    description: "List packages from the specified `--prefix` directory",
    args: { name: "PREFIX", template: "folders" },
  },
];

const fetchOptions: Fig.Option[] = [
  ...indexOptions,
  ...registryClientOptions,
  ...packageExcludeNewerOptions,
];

const pipListOptions: Fig.Option[] = [
  { name: ["-e", "--editable"], description: "Only include editable projects" },
  {
    name: "--exclude-editable",
    description: "Exclude any editable packages from output",
  },
  {
    name: "--exclude",
    description: "Exclude the specified package(s) from the output",
    args: { name: "EXCLUDE" },
    isRepeatable: true,
  },
  {
    name: "--format",
    description: "Select the output format",
    args: { name: "FORMAT", suggestions: ["columns", "freeze", "json"] },
  },
  { name: "--outdated", description: "List outdated packages" },
  {
    name: "--strict",
    description:
      "Validate the Python environment, to detect packages with missing dependencies and other issues",
  },
  {
    name: ["-p", "--python"],
    description: "The Python interpreter for which packages should be listed",
    args: { name: "PYTHON" },
  },
  {
    name: "--system",
    description: "List packages in the system Python environment",
  },
  {
    name: ["-t", "--target"],
    description: "List packages from the specified `--target` directory",
    args: { name: "TARGET", template: "folders" },
  },
  {
    name: "--prefix",
    description: "List packages from the specified `--prefix` directory",
    args: { name: "PREFIX", template: "folders" },
  },
  ...fetchOptions,
];

const pipShowOptions: Fig.Option[] = [
  {
    name: "--strict",
    description:
      "Validate the Python environment, to detect packages with missing dependencies and other issues",
  },
  {
    name: ["-f", "--files"],
    description: "Show the full list of installed files for each package",
  },
  {
    name: ["-p", "--python"],
    description: "The Python interpreter to find the package in",
    args: { name: "PYTHON" },
  },
  {
    name: "--system",
    description: "Show a package in the system Python environment",
  },
  {
    name: ["-t", "--target"],
    description: "Show a package from the specified `--target` directory",
    args: { name: "TARGET", template: "folders" },
  },
  {
    name: "--prefix",
    description: "Show a package from the specified `--prefix` directory",
    args: { name: "PREFIX", template: "folders" },
  },
];

const pipTreeOptions: Fig.Option[] = [
  {
    name: "--show-version-specifiers",
    description: "Show the version constraint(s) imposed on each package",
  },
  {
    name: "--strict",
    description:
      "Validate the Python environment, to detect packages with missing dependencies and other issues",
  },
  {
    name: ["-p", "--python"],
    description: "The Python interpreter for which packages should be listed",
    args: { name: "PYTHON" },
  },
  {
    name: "--system",
    description: "List packages in the system Python environment",
  },
  ...displayTreeOptions,
  ...fetchOptions,
];

const metadataOptions: Fig.Option[] = [
  {
    name: "--output-version",
    description: "Request a specific version of the metadata schema",
    args: { name: "VERSION", suggestions: ["preview"] },
  },
  {
    name: "--script",
    description:
      "View metadata for the specified PEP 723 Python script, rather than the current workspace",
    args: { name: "SCRIPT", template: "filepaths" },
  },
  { name: "--locked", description: "Check if the lockfile is up-to-date" },
  {
    name: "--no-locked",
    description: "Disable locked mode, overriding `UV_LOCKED`",
    hidden: true,
  },
  {
    name: "--frozen",
    description:
      "Assert that a `uv.lock` exists without checking if it is up-to-date",
  },
  {
    name: "--no-frozen",
    description: "Disable frozen mode, overriding `UV_FROZEN`",
    hidden: true,
  },
  {
    name: "--sync",
    description:
      "Sync the environment to include module ownership metadata in the output",
  },
  {
    name: "--exact",
    description: "Perform an exact sync, removing extraneous packages",
  },
  {
    name: "--active",
    description: "Sync dependencies to the active virtual environment",
  },
  {
    name: ["-p", "--python"],
    description: "The Python interpreter to use during resolution",
    args: { name: "PYTHON" },
  },
  ...resolverOptions,
  ...buildOptions,
  ...refreshOptions,
];

// ////////////////////////////////////////////////////////////////// Subcommands //////////////////////////////////////////////////////////////////

const authHelperSubcommands: Fig.Subcommand[] = [
  { name: "get", description: "Retrieve credentials for a URI" },
];

const selfSubcommands: Fig.Subcommand[] = [
  {
    name: "update",
    description: "Update uv",
    options: [
      {
        name: "--token",
        description:
          "A GitHub token for authentication. A token is not required but can be used to reduce the chance of encountering rate limits",
        args: { name: "TOKEN" },
      },
      { name: "--dry-run", description: "Run without performing the update" },
    ],
    args: {
      name: "TARGET_VERSION",
      description:
        "Update to the specified version. If not provided, uv will update to the latest version",
      isOptional: true,
    },
  },
  {
    name: "version",
    description: "Display uv's version",
    options: [
      { name: "--short", description: "Only print the version" },
      {
        name: "--output-format",
        description: "The format of the output",
        args: {
          name: "OUTPUT_FORMAT",
          suggestions: textJsonValues,
          default: "text",
        },
      },
    ],
  },
];

const cacheSubcommands: Fig.Subcommand[] = [
  {
    name: ["clean", "clear"],
    description:
      "Clear the cache, removing all entries or those linked to specific packages",
    options: [
      {
        name: "--force",
        description: "Force removal of the cache, ignoring in-use checks",
      },
    ],
    args: {
      name: "PACKAGE",
      description: "The packages to remove from the cache",
      isOptional: true,
      isVariadic: true,
    },
  },
  {
    name: "prune",
    description: "Prune dangling cache entries and cached environments",
    options: [
      {
        name: "--ci",
        description:
          "Optimize the cache for persistence in a continuous integration environment, like GitHub Actions",
      },
      {
        name: "--force",
        description: "Force removal of the cache, ignoring in-use checks",
      },
    ],
  },
  { name: "dir", description: "Show the cache directory" },
  {
    name: "size",
    description: "Show the cache size",
    options: [
      {
        name: "--output-format",
        description: "Select the output format",
        args: {
          name: "OUTPUT_FORMAT",
          suggestions: ["auto", "human", "machine"],
        },
      },
      {
        name: ["-H", "--human", "--human-readable"],
        description:
          "Display the cache size in human-readable format (e.g., `1.2GiB` instead of raw bytes)",
      },
    ],
  },
];

const workspaceSubcommands: Fig.Subcommand[] = [
  {
    name: "metadata",
    description: "View metadata about the current workspace",
    options: [...metadataOptions],
  },
  {
    name: "dir",
    description: "Display the path of a workspace member",
    options: [
      {
        name: "--package",
        description: "Display the path to a specific package in the workspace",
        args: { name: "PACKAGE" },
      },
    ],
  },
  {
    name: "list",
    description: "List the members of a workspace",
    options: [
      { name: "--paths", description: "Show paths instead of names" },
      {
        name: "--scripts",
        description:
          "List all standalone scripts with inline metadata in the workspace",
      },
    ],
  },
];

const pipSubcommands: Fig.Subcommand[] = [
  {
    name: "compile",
    description:
      "Compile a `requirements.in` file to a `requirements.txt` or `pylock.toml` file",
    options: [...pipCompileOptions],
    args: {
      name: "SRC_FILE",
      description: "Include the packages listed in the given files",
      isOptional: true,
      isVariadic: true,
      template: "filepaths",
    },
  },
  {
    name: "sync",
    description:
      "Sync an environment with a `requirements.txt` or `pylock.toml` file",
    options: [...pipSyncOptions],
    args: {
      name: "SRC_FILE",
      description: "Include the packages listed in the given files",
      isVariadic: true,
      template: "filepaths",
    },
  },
  {
    name: "install",
    description: "Install packages into an environment",
    options: [...pipInstallOptions],
    args: {
      name: "PACKAGE",
      description: "Install all listed packages",
      isOptional: true,
      isVariadic: true,
    },
  },
  {
    name: "uninstall",
    description: "Uninstall packages from an environment",
    options: [...pipUninstallOptions],
    args: {
      name: "PACKAGE",
      description: "Uninstall all listed packages",
      isOptional: true,
      isVariadic: true,
    },
  },
  {
    name: "freeze",
    description:
      "List, in requirements format, packages installed in an environment",
    options: [...pipFreezeOptions],
  },
  {
    name: ["list", "ls"],
    description:
      "List, in tabular format, packages installed in an environment",
    options: [...pipListOptions],
  },
  {
    name: "show",
    description: "Show information about one or more installed packages",
    options: [...pipShowOptions],
    args: {
      name: "PACKAGE",
      description: "The package(s) to display",
      isOptional: true,
      isVariadic: true,
    },
  },
  {
    name: "tree",
    description: "Display the dependency tree for an environment",
    options: [...pipTreeOptions],
  },
  {
    name: "check",
    description: "Verify installed packages have compatible dependencies",
    options: [
      {
        name: ["-p", "--python"],
        description:
          "The Python interpreter for which packages should be checked",
        args: { name: "PYTHON" },
      },
      {
        name: "--system",
        description: "Check packages in the system Python environment",
      },
      {
        name: "--python-version",
        description:
          "The Python version against which packages should be checked",
        args: { name: "PYTHON_VERSION" },
      },
      {
        name: "--python-platform",
        description: "The platform for which packages should be checked",
        args: { name: "PYTHON_PLATFORM", suggestions: targetTripleValues },
      },
    ],
  },
];

const pythonSubcommands: Fig.Subcommand[] = [
  {
    name: ["list", "ls"],
    description: "List the available Python installations",
    options: [...pythonListOptions],
    args: {
      name: "REQUEST",
      description: "A Python request to filter by",
      isOptional: true,
    },
  },
  {
    name: "install",
    description: "Download and install Python versions",
    options: [...pythonInstallOptions],
    args: {
      name: "TARGETS",
      description: "The Python version(s) to install",
      isOptional: true,
      isVariadic: true,
    },
  },
  {
    name: "upgrade",
    description: "Upgrade installed Python versions",
    options: [...pythonUpgradeOptions],
    args: {
      name: "TARGETS",
      description: "The Python minor version(s) to upgrade",
      isOptional: true,
      isVariadic: true,
    },
  },
  {
    name: "find",
    description: "Search for a Python installation",
    options: [...pythonFindOptions],
    args: {
      name: "REQUEST",
      description: "The Python request",
      isOptional: true,
    },
  },
  {
    name: "pin",
    description: "Pin to a specific Python version",
    options: [...pythonPinOptions],
    args: {
      name: "REQUEST",
      description: "The Python version request",
      isOptional: true,
    },
  },
  {
    name: "dir",
    description: "Show the uv Python installation directory",
    options: [
      {
        name: "--bin",
        description:
          "Show the directory into which `uv python` will install Python executables",
      },
    ],
  },
  {
    name: "uninstall",
    description: "Uninstall Python versions",
    options: [
      {
        name: ["-i", "--install-dir"],
        description: "The directory where the Python was installed",
        args: { name: "INSTALL_DIR", template: "folders" },
      },
      { name: "--all", description: "Uninstall all managed Python versions" },
    ],
    args: {
      name: "TARGETS",
      description: "The Python version(s) to uninstall",
      isVariadic: true,
    },
  },
  {
    name: ["update-shell", "ensurepath"],
    description: "Ensure that the Python executable directory is on the `PATH`",
  },
];

const toolSubcommands: Fig.Subcommand[] = [
  {
    name: "run",
    description: "Run a command provided by a Python package",
    options: [...toolRunOptions],
    args: { name: "command", isOptional: true, isVariadic: true },
  },
  {
    name: "install",
    description: "Install commands provided by a Python package",
    options: [...toolInstallOptions],
    args: {
      name: "PACKAGE",
      description: "The package to install commands from",
    },
  },
  {
    name: ["upgrade", "update"],
    description: "Upgrade installed tools",
    options: [...toolUpgradeOptions],
    args: {
      name: "NAME",
      description:
        "The name of the tool to upgrade, along with an optional version specifier",
      isVariadic: true,
    },
  },
  {
    name: ["list", "ls"],
    description: "List installed tools",
    options: [...toolListOptions],
  },
  {
    name: "audit",
    description: "Audit installed tools and their dependencies",
    options: [...toolAuditOptions],
    args: {
      name: "NAME",
      description: "The names of the installed tools to audit",
      isVariadic: true,
    },
  },
  {
    name: "uninstall",
    description: "Uninstall a tool",
    options: [{ name: "--all", description: "Uninstall all tools" }],
    args: {
      name: "NAME",
      description: "The name of the tool to uninstall",
      isVariadic: true,
    },
  },
  {
    name: ["update-shell", "ensurepath"],
    description: "Ensure that the tool executable directory is on the `PATH`",
  },
  {
    name: "dir",
    description: "Show the path to the uv tools directory",
    options: [
      {
        name: "--bin",
        description:
          "Show the directory into which `uv tool` will install executables",
      },
    ],
  },
];

const authSubcommands: Fig.Subcommand[] = [
  {
    name: "login",
    description: "Login to a service",
    options: [
      {
        name: ["-u", "--username"],
        description: "The username to use for the service",
        args: { name: "USERNAME" },
      },
      {
        name: "--password",
        description: "The password to use for the service",
        args: { name: "PASSWORD" },
      },
      {
        name: ["-t", "--token"],
        description: "The token to use for the service",
        args: { name: "TOKEN" },
      },
    ],
    args: {
      name: "SERVICE",
      description: "The domain or URL of the service to log into",
    },
  },
  {
    name: "logout",
    description: "Logout of a service",
    options: [
      {
        name: ["-u", "--username"],
        description: "The username to logout",
        args: { name: "USERNAME" },
      },
    ],
    args: {
      name: "SERVICE",
      description: "The domain or URL of the service to logout from",
    },
  },
  {
    name: "token",
    description: "Show the authentication token for a service",
    options: [
      {
        name: ["-u", "--username"],
        description: "The username to lookup",
        args: { name: "USERNAME" },
      },
    ],
    args: {
      name: "SERVICE",
      description: "The domain or URL of the service to lookup",
    },
  },
  { name: "dir", description: "Show the path to the uv credentials directory" },
  {
    name: "helper",
    description: "Act as a credential helper for external tools",
    hidden: true,
    subcommands: authHelperSubcommands,
    options: [
      {
        name: "--protocol",
        description: "The credential helper protocol to use",
        args: { name: "PROTOCOL", suggestions: ["bazel"] },
        isRequired: true,
      },
    ],
  },
];

const subcommands: Fig.Subcommand[] = [
  {
    name: "auth",
    description: "Manage authentication",
    subcommands: authSubcommands,
  },
  {
    name: "run",
    description: "Run a command or script",
    options: [...runOptions],
    args: {
      name: "command",
      isOptional: true,
      isVariadic: true,
      generators: commandGenerator,
    },
  },
  {
    name: "init",
    description: "Create a new project",
    options: [...initOptions],
    args: {
      name: "PATH",
      description: "The path to use for the project/script",
      isOptional: true,
      template: "folders",
    },
  },
  {
    name: "add",
    description: "Add dependencies to the project",
    options: [...addOptions],
    args: {
      name: "PACKAGES",
      description:
        "The packages to add, as PEP 508 requirements (e.g., `ruff==0.5.0`)",
      isOptional: true,
      isVariadic: true,
    },
  },
  {
    name: "remove",
    description: "Remove dependencies from the project",
    options: [...removeOptions],
    args: {
      name: "PACKAGES",
      description: "The names of the dependencies to remove (e.g., `ruff`)",
      isVariadic: true,
      generators: dependenciesGenerator,
    },
  },
  {
    name: "version",
    description: "Read or update the project's version",
    options: [...versionOptions],
    args: {
      name: "VALUE",
      description: "Set the project version to this value",
      isOptional: true,
    },
  },
  {
    name: "sync",
    description: "Update the project's environment",
    options: [...syncOptions],
  },
  {
    name: "lock",
    description: "Update the project's lockfile",
    options: [...lockOptions],
  },
  {
    name: "upgrade",
    description: "Upgrade a dependency in the project",
    hidden: true,
    options: [...upgradeOptions],
    args: {
      name: "PACKAGES",
      description: "The packages to upgrade",
      isOptional: true,
      isVariadic: true,
    },
  },
  {
    name: "export",
    description: "Export the project's lockfile to an alternate format",
    options: [...exportOptions],
  },
  {
    name: "tree",
    description: "Display the project's dependency tree",
    options: [...treeOptions],
  },
  {
    name: "format",
    description: "Format Python code in the project",
    options: [...formatOptions],
    args: {
      name: "EXTRA_ARGS",
      description: "Additional arguments to pass to Ruff",
      isOptional: true,
      isVariadic: true,
    },
  },
  {
    name: "check",
    description: "Run checks on the project",
    options: [...checkOptions],
  },
  {
    name: "audit",
    description: "Audit the project's dependencies",
    options: [...auditOptions],
  },
  {
    name: "tool",
    description: "Run and install commands provided by Python packages",
    subcommands: toolSubcommands,
  },
  {
    name: "python",
    description: "Manage Python versions and installations",
    subcommands: pythonSubcommands,
  },
  {
    name: "pip",
    description: "Manage Python packages with a pip-compatible interface",
    subcommands: pipSubcommands,
    options: [
      {
        name: "--cert",
        description: "Path to a PEM-encoded CA certificate bundle",
        args: { name: "FILE", template: "filepaths" },
        isPersistent: true,
      },
    ],
  },
  {
    name: ["venv", "virtualenv", "v"],
    description: "Create a virtual environment",
    options: [...venvOptions],
    args: {
      name: "PATH",
      description: "The path to the virtual environment to create",
      isOptional: true,
      template: "folders",
    },
  },
  {
    name: "build",
    description: "Build Python packages into source distributions and wheels",
    options: [...buildCommandOptions],
    args: {
      name: "SRC",
      description:
        "The directory from which distributions should be built, or a source distribution archive to build into a wheel",
      isOptional: true,
      template: "folders",
    },
  },
  {
    name: "publish",
    description: "Upload distributions to an index",
    options: [...publishOptions],
    args: {
      name: "FILES",
      description: "Paths to the files to upload. Accepts glob expressions",
      isOptional: true,
      isVariadic: true,
      template: "filepaths",
      default: "dist/*",
    },
  },
  {
    name: "workspace",
    description: "Inspect uv workspaces",
    subcommands: workspaceSubcommands,
  },
  {
    name: "cache",
    description: "Manage uv's cache",
    subcommands: cacheSubcommands,
  },
  {
    name: "self",
    description: "Manage the uv executable",
    subcommands: selfSubcommands,
  },
  {
    name: "clean",
    description:
      "Clear the cache, removing all entries or those linked to specific packages",
    hidden: true,
    options: [
      {
        name: "--force",
        description: "Force removal of the cache, ignoring in-use checks",
      },
    ],
    args: {
      name: "PACKAGE",
      description: "The packages to remove from the cache",
      isOptional: true,
      isVariadic: true,
    },
  },
  {
    name: ["generate-shell-completion", "--generate-shell-completion"],
    description: "Generate shell completion",
    hidden: true,
    args: {
      name: "SHELL",
      description: "The shell to generate the completion script for",
    },
  },
  {
    name: "help",
    description: "Display documentation for a command",
    options: [
      { name: "--no-pager", description: "Disable pager when printing help" },
    ],
    args: { name: "COMMAND", isOptional: true, isVariadic: true },
  },
];

const completionSpec: Fig.Spec = {
  name: "uv",
  description: "An extremely fast Python package manager",
  subcommands,
  options: topLevelOptions,
};
export default completionSpec;
