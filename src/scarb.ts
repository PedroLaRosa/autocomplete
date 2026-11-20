// Scarb v2.21.0 (GitHub tag software-mansion/scarb v2.21.0 = latest stable, 2026-11-20). Source: read statically from the
// tagged source (scarb/src/bin/scarb/args.rs, utils/scarb-ui/src/args/*, utils/scarb-extensions-cli/src/* for the bundled
// extensions, plus cairo-vm 3.2.0 LayoutName and stwo-cairo cairo-air ProofFormat); the binary was not run.

const packageGenerator: Fig.Generator = {
  script: ["scarb", "metadata", "--format-version", "1", "--no-deps"],
  postProcess: (out) => {
    try {
      const metadata: { packages?: { name: string }[] } = JSON.parse(out);
      return (metadata.packages ?? []).map(({ name }) => ({
        name,
        description: "Workspace package",
      }));
    } catch {
      return [];
    }
  },
};

const packageSpecArg: Fig.Arg = {
  name: "SPEC",
  generators: packageGenerator,
};

// Package selection (`-p`, `-w`, `--exclude`) shared by most commands
const packagesFilterOptions: Fig.Option[] = [
  {
    name: ["-p", "--package"],
    description:
      "Packages to run this command on, can be a concrete package name (`foobar`) or a prefix glob (`foo*`)",
    isRepeatable: true,
    exclusiveOn: ["-w", "--workspace", "--exclude"],
    args: { ...packageSpecArg, default: "*" },
  },
  {
    name: ["-w", "--workspace"],
    description: "Run for all packages in the workspace",
    exclusiveOn: ["-p", "--package"],
  },
  {
    name: "--exclude",
    description: "Exclude packages from the command",
    isRepeatable: true,
    dependsOn: ["--workspace"],
    exclusiveOn: ["-p", "--package"],
    args: packageSpecArg,
  },
];

const featuresOptions: Fig.Option[] = [
  {
    name: ["-F", "--features"],
    description: "Comma separated list of features to activate",
    isRepeatable: true,
    args: { name: "FEATURES" },
  },
  {
    name: "--all-features",
    description: "Activate all available features",
    exclusiveOn: ["--no-default-features"],
  },
  {
    name: "--no-default-features",
    description: "Do not activate the `default` feature",
    exclusiveOn: ["--all-features"],
  },
];

const ignoreCairoVersionOption: Fig.Option = {
  name: "--ignore-cairo-version",
  description: "Do not error on `cairo-version` mismatch",
};

const jsonOption: Fig.Option = {
  name: "--json",
  description: "Print machine-readable output in NDJSON format",
};

const versionOption: Fig.Option = {
  name: ["-V", "--version"],
  description: "Print version",
};

const emitOption: Fig.Option = {
  name: ["-e", "--emit"],
  description: "Emit the expanded file to stdout",
  args: { name: "EMIT", suggestions: ["stdout"] },
};

// Options of `scarb init` / `scarb new`
const initOptions: Fig.Option[] = [
  {
    name: "--name",
    description:
      "Set the resulting package name, defaults to the directory name",
    args: { name: "NAME" },
  },
  {
    name: "--no-vcs",
    description: "Do not initialize a new Git repository",
  },
  {
    name: "--test-runner",
    description:
      "Test runner to use. Starts interactive session if not specified",
    args: {
      name: "TEST_RUNNER",
      suggestions: [
        {
          name: "starknet-foundry",
          description: "Use the Starknet Foundry test runner",
        },
        { name: "none", description: "No test runner" },
      ],
    },
  },
];

// Options of `scarb build` / `scarb check`
const buildOptions: Fig.Option[] = [
  ...packagesFilterOptions,
  {
    name: ["-t", "--test"],
    description: "Build tests",
    exclusiveOn: ["--target-kinds"],
  },
  {
    name: "--target-names",
    description: "Comma separated list of target names to compile",
    isRepeatable: true,
    exclusiveOn: ["--target-kinds"],
    args: { name: "TARGET_NAMES" },
  },
  {
    name: "--target-kinds",
    description: "Comma separated list of target kinds to compile",
    isRepeatable: true,
    exclusiveOn: ["--target-names", "-t", "--test"],
    args: { name: "TARGET_KINDS" },
  },
  ...featuresOptions,
  ignoreCairoVersionOption,
];

// Options of `scarb package` / `scarb publish`
const packagingOptions: Fig.Option[] = [
  {
    name: "--allow-dirty",
    description:
      "Allow working directories with uncommitted VCS changes to be packaged",
  },
  {
    name: "--no-verify",
    description: "Do not verify the contents by building them",
  },
];

const indexOption: Fig.Option = {
  name: "--index",
  description: "Registry index URL to upload the package to",
  args: { name: "URL" },
};

const executionBuildOptions: Fig.Option[] = [
  {
    name: "--no-build",
    description: "Do not rebuild the package",
  },
  ...featuresOptions,
  {
    name: "--executable-name",
    description: "Choose build target to run by target name",
    exclusiveOn: ["--executable-function"],
    args: { name: "EXECUTABLE_NAME" },
  },
  {
    name: "--executable-function",
    description: "Choose build target to run by function path",
    exclusiveOn: ["--executable-name"],
    args: { name: "EXECUTABLE_FUNCTION" },
  },
];

const executionRunOptions: Fig.Option[] = [
  {
    name: "--arguments",
    description: "Serialized arguments to the executable function",
    isRepeatable: true,
    exclusiveOn: ["--arguments-file"],
    args: { name: "ARGUMENTS" },
  },
  {
    name: "--arguments-file",
    description: "Serialized arguments to the executable function from a file",
    exclusiveOn: ["--arguments"],
    args: { name: "ARGUMENTS_FILE", template: "filepaths" },
  },
  {
    name: "--output",
    description:
      "Desired execution output, either default Standard or CairoPie",
    args: {
      name: "OUTPUT",
      suggestions: [
        { name: "standard", description: "Output in standard format" },
        {
          name: "cairo-pie",
          description:
            "Output in Cairo PIE (Program Independent Execution) format",
        },
        { name: "none", description: "No output" },
      ],
    },
  },
  {
    name: "--target",
    description: "Execution target",
    args: {
      name: "TARGET",
      suggestions: [
        { name: "bootloader", description: "Bootloader target" },
        { name: "standalone", description: "Standalone target" },
      ],
    },
  },
  {
    name: "--print-program-output",
    description: "Whether to print the program outputs",
  },
  {
    name: "--print-resource-usage",
    description: "Whether to print detailed execution resources",
  },
  {
    name: "--save-profiler-trace-data",
    description: "Whether to save cairo-profiler trace data",
  },
  {
    name: "--layout",
    description: "Override layout configuration",
    args: {
      name: "LAYOUT",
      default: "stwo_no_ecop",
      suggestions: [
        "plain",
        "small",
        "dex",
        "recursive",
        "starknet",
        "starknet_with_keccak",
        "recursive_large_output",
        "recursive_with_poseidon",
        "all_solidity",
        "all_cairo",
        "dynamic",
        "all_cairo_stwo",
        "stwo_no_ecop",
        "perpetual",
        "dex_with_bitwise",
      ],
    },
  },
];

// Options of `scarb prove` that cannot be combined with `--execution-id`
const proveExecutionConflicts = [
  "--no-build",
  "--executable-name",
  "--executable-function",
  "--arguments",
  "--arguments-file",
  "--output",
  "--target",
  "--print-program-output",
  "--print-resource-usage",
];

const completionSpec: Fig.Spec = {
  name: "scarb",
  description:
    "Scarb, The build toolchain and package manager for Cairo and Starknet ecosystems",
  options: [
    {
      name: ["-h", "--help"],
      description: "Print help",
      isPersistent: true,
    },
    versionOption,
    {
      name: ["-v", "--verbose"],
      description: "Increase logging verbosity",
      isPersistent: true,
      isRepeatable: true,
      exclusiveOn: ["-q", "--quiet", "--no-warnings"],
    },
    {
      name: ["-q", "--quiet"],
      description: "Decrease logging verbosity",
      isPersistent: true,
      isRepeatable: true,
      exclusiveOn: ["-v", "--verbose", "--no-warnings"],
    },
    {
      name: "--no-warnings",
      description:
        "Decrease logging verbosity, hiding warnings but still showing errors",
      isPersistent: true,
      exclusiveOn: ["-v", "--verbose", "-q", "--quiet"],
    },
    {
      name: "--verbosity",
      description: "Set UI verbosity level by name",
      isPersistent: true,
      args: {
        name: "VERBOSITY",
        suggestions: [
          {
            name: "quiet",
            description: "Avoid printing anything to standard output",
          },
          {
            name: "no-warnings",
            description: "Avoid printing warnings to standard output",
          },
          { name: "normal", description: "Default verbosity level" },
          {
            name: "verbose",
            description: "Print extra information to standard output",
          },
        ],
      },
    },
    {
      name: "--manifest-path",
      description: "Path to Scarb.toml",
      args: { name: "MANIFEST_PATH", template: "filepaths" },
    },
    jsonOption,
    {
      name: "--offline",
      description: "Run without accessing the network",
    },
    {
      name: "--global-cache-dir",
      description: "Directory for all cache data stored by Scarb",
      args: { name: "DIRECTORY", template: "folders" },
    },
    {
      name: "--global-config-dir",
      description: "Directory for global Scarb configuration files",
      args: { name: "DIRECTORY", template: "folders" },
    },
    {
      name: "--target-dir",
      description: "Directory for all generated artifacts",
      args: { name: "DIRECTORY", template: "folders" },
    },
    {
      name: "--no-proc-macros",
      description: "Do not load any procedural macros",
    },
    {
      name: "--no-prebuilt-proc-macros",
      description: "Do not load any prebuilt procedural macros",
    },
    {
      name: ["-P", "--profile"],
      description: "Specify the profile to use by name",
      args: { name: "PROFILE", suggestions: ["dev", "release"] },
    },
    {
      name: "--release",
      description: "Use release profile",
      exclusiveOn: ["--dev"],
    },
    {
      name: "--dev",
      description: "Use dev profile",
      exclusiveOn: ["--release"],
    },
  ],
  subcommands: [
    {
      name: "add",
      description: "Add dependencies to a Scarb.toml manifest file",
      args: {
        name: "DEP_ID",
        description:
          "Reference to a package to add as a dependency, as `<name>` (latest version) or `<name>@<version-req>`",
        isVariadic: true,
        isOptional: true,
      },
      options: [
        {
          name: "--dry-run",
          description: "Do not actually write the manifest",
        },
        ...packagesFilterOptions,
        {
          name: "--path",
          description: "Filesystem path to local package to add",
          exclusiveOn: ["--git", "--branch", "--tag", "--rev"],
          args: { name: "PATH", template: "folders" },
        },
        {
          name: "--git",
          description: "Git repository location",
          exclusiveOn: ["--path"],
          args: { name: "URI" },
        },
        {
          name: "--branch",
          description: "Git branch to download the package from",
          dependsOn: ["--git"],
          exclusiveOn: ["--path", "--tag", "--rev"],
          args: { name: "BRANCH" },
        },
        {
          name: "--tag",
          description: "Git tag to download the package from",
          dependsOn: ["--git"],
          exclusiveOn: ["--path", "--branch", "--rev"],
          args: { name: "TAG" },
        },
        {
          name: "--rev",
          description: "Git reference to download the package from",
          dependsOn: ["--git"],
          exclusiveOn: ["--path", "--branch", "--tag"],
          args: { name: "REV" },
        },
        {
          name: "--dev",
          description: "Add as development dependency",
        },
      ],
    },
    {
      name: ["remove", "rm"],
      description: "Remove dependencies from a manifest file",
      args: {
        name: "DEP_ID",
        description: "Dependencies to be removed",
        isVariadic: true,
      },
      options: [
        {
          name: "--dry-run",
          description: "Do not actually write the manifest",
        },
        ...packagesFilterOptions,
        {
          name: "--dev",
          description: "Remove as development dependency",
        },
      ],
    },
    {
      name: "list",
      description:
        "Fetch and list available versions of a package from the registry",
      args: {
        name: "PACKAGE_NAME",
        description: "Package name",
      },
      options: [
        {
          name: "--index",
          description: "Registry index URL to query package versions from",
          args: { name: "URL" },
        },
        {
          name: "--all",
          description: "Show all available versions",
          exclusiveOn: ["--limit"],
        },
        {
          name: "--limit",
          description: "Limit the number of results",
          exclusiveOn: ["--all"],
          args: { name: "LIMIT", default: "10" },
        },
      ],
    },
    {
      name: "build",
      description: "Compile current project",
      options: buildOptions,
    },
    {
      name: "expand",
      description: "Expand macros",
      options: [
        ...packagesFilterOptions,
        ...featuresOptions,
        ignoreCairoVersionOption,
        {
          name: "--target-kind",
          description: "Specify the target to expand by target kind",
          args: { name: "TARGET_KIND" },
        },
        {
          name: "--target-name",
          description: "Specify the target to expand by target name",
          args: { name: "TARGET_NAME" },
        },
        {
          name: "--ugly",
          description: "Do not attempt formatting",
        },
        emitOption,
      ],
    },
    {
      name: "cache",
      description: "Manipulate packages cache",
      subcommands: [
        {
          name: "clean",
          description: "Remove all cached dependencies",
        },
        {
          name: "path",
          description: "Print the path of the cache directory",
        },
        {
          name: "help",
          description:
            "Print this message or the help of the given subcommand(s)",
        },
      ],
    },
    {
      name: "check",
      description:
        "Analyze the current package and report errors, but don't build Sierra files",
      options: buildOptions,
    },
    {
      name: "clean",
      description: "Remove generated artifacts",
    },
    {
      name: "completions",
      description: "Generate shell completions for Scarb",
      args: {
        name: "SHELL",
        description: "Target shell for completion generation",
        isOptional: true,
        suggestions: ["bash", "elvish", "fish", "powershell", "zsh"],
      },
    },
    {
      name: "commands",
      description: "List installed commands",
    },
    {
      name: "fetch",
      description: "Fetch dependencies of packages from the network",
    },
    {
      name: "fmt",
      description: "Format project files",
      args: {
        name: "PATH",
        description:
          "Path to a file or directory to format. If provided, only this file or directory will be formatted",
        isOptional: true,
        template: ["filepaths", "folders"],
      },
      options: [
        {
          name: ["-c", "--check"],
          description:
            "Only check if files are formatted, do not write the changes to disk",
          exclusiveOn: ["-e", "--emit"],
        },
        {
          ...emitOption,
          description: "Emit the formatted file to stdout",
          exclusiveOn: ["-c", "--check"],
        },
        {
          name: "--no-color",
          description: "Do not color output",
        },
        ...packagesFilterOptions,
      ],
    },
    {
      name: "init",
      description: "Create a new Scarb package in the existing directory",
      options: initOptions,
    },
    {
      name: "manifest-path",
      description:
        "Print a path to the current Scarb.toml file to standard output",
    },
    {
      name: "metadata",
      description:
        "Output the resolved dependencies of a package, the concrete versions used, including overrides, in machine-readable format",
      options: [
        {
          name: "--format-version",
          description: "Format version",
          isRequired: true,
          args: { name: "VERSION", suggestions: ["1"] },
        },
        {
          name: "--no-deps",
          description:
            "Output information only about the workspace members and don't fetch dependencies",
        },
        ...featuresOptions,
        ignoreCairoVersionOption,
      ],
    },
    {
      name: "new",
      description: "Create a new Scarb package at PATH",
      args: {
        name: "PATH",
        description: "Path to the new package directory",
        template: "folders",
      },
      options: initOptions,
    },
    {
      name: "tree",
      description: "Display a tree visualisation of a dependency graph",
      options: [
        ...packagesFilterOptions,
        {
          name: "--prune",
          description:
            "Prune the given package(s) from the display of the dependency tree",
          isRepeatable: true,
          args: { name: "PACKAGE_NAME" },
        },
        {
          name: "--depth",
          description: "Maximum display depth of the dependency tree",
          args: { name: "DEPTH" },
        },
        {
          name: "--no-dedupe",
          description: "Do not de-duplicate repeated dependencies",
        },
        {
          name: "--core",
          description: "Include the `core` package in the dependency tree",
        },
      ],
    },
    {
      name: "package",
      description: "Assemble the local package into a distributable tarball",
      options: [
        {
          name: ["-l", "--list"],
          description: "Print files included in a package without making one",
        },
        {
          name: "--no-metadata",
          description: "Ignore warnings about a lack of human-usable metadata",
        },
        ...packagingOptions,
        ...packagesFilterOptions,
        ...featuresOptions,
        ignoreCairoVersionOption,
      ],
    },
    {
      name: "proc-macro-server",
      description: "Start the proc macro server",
    },
    {
      name: "publish",
      description: "Upload a package to the registry",
      options: [
        indexOption,
        ...packagingOptions,
        ...packagesFilterOptions,
        ...featuresOptions,
        ignoreCairoVersionOption,
        {
          name: "--no-docs",
          description: "Do not generate and upload documentation",
        },
      ],
    },
    {
      name: "publish-docs",
      description: "Upload a package's documentation to the registry",
      options: [
        indexOption,
        {
          name: "--force",
          description:
            "Force publish docs if there is already uploaded docs for the same version",
        },
        {
          name: "--allow-dirty",
          description:
            "Allow working directories with uncommitted VCS changes to be packaged",
        },
        ...packagesFilterOptions,
      ],
    },
    {
      name: "lint",
      description:
        "Check a package to catch common mistakes and improve your Cairo code",
      args: {
        name: "PATH",
        description:
          "Path to a file or directory to lint. If provided, only this file or directory will be linted",
        isOptional: true,
        template: ["filepaths", "folders"],
      },
      options: [
        ...packagesFilterOptions,
        {
          name: "--target-names",
          description: "Comma separated list of target names to compile",
          isRepeatable: true,
          args: { name: "TARGET_NAMES" },
        },
        {
          name: ["-t", "--test"],
          description: "Lint the tests",
        },
        {
          name: ["-f", "--fix"],
          description: "Fix the lint when it can",
        },
        ignoreCairoVersionOption,
        ...featuresOptions,
        {
          name: ["-d", "--deny-warnings"],
          description: "Fail on any warning",
        },
      ],
    },
    {
      name: "run",
      description: "Run arbitrary package scripts",
      args: [
        {
          name: "SCRIPT",
          description:
            "The name of the script from the manifest file to execute",
          isOptional: true,
        },
        {
          name: "ARGS",
          description: "Arguments to pass to the executed script",
          isVariadic: true,
          isOptional: true,
        },
      ],
      options: [
        ...packagesFilterOptions,
        {
          name: "--workspace-root",
          description: "Run the script in workspace root only",
        },
      ],
    },
    {
      name: "test",
      description:
        "Execute all unit and integration tests of a local package, by default delegating to `scarb cairo-test`",
      args: {
        name: "ARGS",
        description:
          "Arguments for the test program, see `scarb test -- --help`",
        isVariadic: true,
        isOptional: true,
      },
      options: [
        ...packagesFilterOptions,
        ...featuresOptions,
        {
          name: ["-f", "--filter"],
          description:
            "Run only tests whose name contain FILTER (forwarded to `scarb cairo-test`)",
          args: { name: "FILTER" },
        },
        {
          name: "--include-ignored",
          description:
            "Run ignored and not ignored tests (forwarded to `scarb cairo-test`)",
        },
        {
          name: "--ignored",
          description:
            "Run only ignored tests (forwarded to `scarb cairo-test`)",
        },
      ],
    },
    {
      name: "update",
      description: "Update dependencies",
    },
    // Extensions bundled with the Scarb distribution
    {
      name: "cairo-language-server",
      description: "Start the Cairo Language Server",
    },
    {
      name: "cairo-test",
      description: "Execute all unit tests of a local package",
      deprecated: {
        description: "Deprecated, migrate to `snforge` for testing",
      },
      options: [
        versionOption,
        ...packagesFilterOptions,
        {
          name: ["-f", "--filter"],
          description: "Run only tests whose name contain FILTER",
          args: { name: "FILTER" },
        },
        {
          name: "--include-ignored",
          description: "Run ignored and not ignored tests",
        },
        {
          name: "--ignored",
          description: "Run only ignored tests",
        },
        {
          name: ["-t", "--test-kind"],
          description: "Choose test kind to run",
          args: {
            name: "TEST_KIND",
            suggestions: [
              { name: "unit", description: "Run only unit tests" },
              {
                name: "integration",
                description: "Run only integration tests",
              },
              { name: "all", description: "Run all tests" },
            ],
          },
        },
        {
          name: "--print-resource-usage",
          description: "Whether to print resource usage after each test",
        },
        jsonOption,
      ],
    },
    {
      name: "doc",
      description: "Generate documentation based on code comments",
      options: [
        versionOption,
        ...packagesFilterOptions,
        {
          name: "--output-format",
          description: "Specifies a format of generated files",
          args: {
            name: "OUTPUT_FORMAT",
            default: "markdown",
            suggestions: [
              {
                name: "markdown",
                description:
                  "Generate documentation in Markdown format, compatible with mdBook",
              },
              {
                name: "json",
                description:
                  "Save information collected from packages in JSON format instead of generating documentation",
              },
            ],
          },
        },
        {
          name: "--document-private-items",
          description: "Generate documentation also for private items",
        },
        {
          name: "--build",
          description: "Build generated documentation",
        },
        {
          name: "--no-run",
          description: "Do not run doc tests",
        },
        {
          name: "--show-run-output",
          description: "Print doc test output even for successful runs",
        },
        {
          name: "--open",
          description:
            "Open the generated documentation in a browser, implies `--build`",
        },
        ...featuresOptions,
        jsonOption,
        {
          name: "--remote-base-url",
          description:
            "Base URL of a remote repository, used for generating links to source code",
          args: { name: "REMOTE_BASE_URL" },
        },
        {
          name: "--disable-remote-linking",
          description:
            "Disable linking documentation items to the source code repository",
        },
      ],
    },
    {
      name: "execute",
      description:
        "Compile a Cairo project and run a function marked `#[executable]`",
      options: [
        versionOption,
        ...packagesFilterOptions,
        ...executionBuildOptions,
        ...executionRunOptions,
        jsonOption,
      ],
    },
    {
      name: "mdbook",
      description: "Build `mdBook` documentation",
      options: [
        versionOption,
        {
          name: "--input",
          description: "Path to book source directory",
          isRequired: true,
          args: { name: "INPUT", template: "folders" },
        },
        {
          name: "--output",
          description: "Path to book output directory",
          isRequired: true,
          args: { name: "OUTPUT", template: "folders" },
        },
        jsonOption,
      ],
    },
    {
      name: "prove",
      description: "Prove `scarb execute` output using Stwo prover",
      options: [
        versionOption,
        ...packagesFilterOptions,
        {
          name: "--execution-id",
          description:
            "ID of `scarb execute` standard output for given package, for which to generate proof",
          exclusiveOn: ["--execute", ...proveExecutionConflicts],
          args: { name: "EXECUTION_ID" },
        },
        {
          name: "--execute",
          description: "Execute the program before proving",
          exclusiveOn: ["--execution-id"],
        },
        ...[...executionBuildOptions, ...executionRunOptions].map(
          (option): Fig.Option =>
            typeof option.name === "string" &&
            proveExecutionConflicts.includes(option.name)
              ? {
                  ...option,
                  exclusiveOn: [
                    ...(option.exclusiveOn ?? []),
                    "--execution-id",
                  ],
                }
              : option
        ),
        jsonOption,
        {
          name: "--proof-format",
          description: "Format used to serialize the generated proof",
          args: {
            name: "PROOF_FORMAT",
            default: "json",
            suggestions: [
              { name: "json", description: "Standard JSON format" },
              {
                name: "cairo-serde",
                description:
                  "Array of field elements serialized as hex strings, compatible with `scarb execute`",
              },
              {
                name: "binary",
                description: "Binary format, additionally compressed",
              },
              {
                name: "extended-binary",
                description: "Extended binary format",
              },
            ],
          },
        },
      ],
    },
    {
      name: "verify",
      description: "Verify `scarb prove` output using Stwo verifier",
      options: [
        versionOption,
        ...packagesFilterOptions,
        {
          name: "--execution-id",
          description:
            "ID of `scarb execute` output for given package, for which proof was generated using `scarb prove`",
          exclusiveOn: ["--proof-file"],
          args: { name: "EXECUTION_ID" },
        },
        {
          name: "--proof-file",
          description: "Proof file path",
          exclusiveOn: ["--execution-id"],
          args: { name: "PROOF_FILE", template: "filepaths" },
        },
        jsonOption,
      ],
    },
    {
      name: "help",
      description: "Print this message or the help of the given subcommand(s)",
    },
  ],
};

export default completionSpec;
