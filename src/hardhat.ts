// Hardhat v3.22.0 (npm "latest" dist-tag, 2026-11-19). Source: the hardhat@3.22.0 npm tarball, read statically (not
// executed): task and global option definitions in src/internal/builtin-plugins/*/index.ts and
// src/internal/builtin-global-options.ts, argument parsing in src/internal/cli/parser.ts, templates/.
// Only tasks of the core package are covered. Tasks added by plugins (ignition, verify, keystore, test nodejs,
// test mocha, ...) are not. The Hardhat 2 only tasks (accounts, check, help) and global options (--emoji,
// --max-memory, --verbose) were removed. The Hardhat 2 line (dist-tag hh2, 2.29.2) is no longer described.

const buildOptions: Fig.Option[] = [
  {
    name: "--force",
    description: "Force compilation even if no files have changed",
  },
  {
    name: "--quiet",
    description: "Make the compilation process less verbose",
  },
  {
    name: "--default-build-profile",
    description: "The default build profile to use (default: default)",
    args: { name: "profile" },
  },
  {
    name: "--no-tests",
    description: "Skip solidity tests compilation",
  },
  {
    name: "--no-contracts",
    description: "Skip solidity contracts compilation",
  },
];

const buildArgs: Fig.Arg = {
  name: "files",
  description: "An optional list of files to compile",
  isVariadic: true,
  isOptional: true,
  template: "filepaths",
};

const noCompile = (description: string): Fig.Option => ({
  name: "--no-compile",
  description,
});

const chainType = (description: string): Fig.Option => ({
  name: "--chain-type",
  description,
  args: { name: "chain type", suggestions: ["l1", "op", "generic"] },
});

const testOptions = (solidityOnly: boolean): Fig.Option[] => {
  const note = solidityOnly ? "" : " (Solidity tests only)";
  return [
    chainType(
      solidityOnly
        ? "The chain type to use"
        : "The chain type to use by the solidity test runner"
    ),
    {
      name: "--grep",
      description: "Only run tests matching the given string or regexp",
      args: { name: "pattern" },
    },
    {
      name: "--grep-exclude",
      description: "Skip tests matching the given string or regexp",
      args: { name: "pattern" },
    },
    noCompile(
      solidityOnly
        ? "Don't compile the project before running the tests"
        : "Do not compile the project before running the tests"
    ),
    {
      name: "--test-profile",
      description: `The Solidity test profile to use${note}`,
      args: { name: "profile" },
    },
    {
      name: "--snapshot",
      description: `Update snapshots${note}`,
    },
    {
      name: "--snapshot-check",
      description: `Check the snapshots match the stored values${note}`,
    },
    {
      name: "--tolerance",
      description: `Allowed drift percentage for --snapshot-check${note}`,
      args: { name: "percentage" },
    },
  ];
};

const completionSpec: Fig.Spec = {
  name: "hardhat",
  description: "Ethereum development environment",
  subcommands: [
    {
      name: "build",
      description: "Build project",
      options: buildOptions,
      args: buildArgs,
    },
    {
      name: "clean",
      description: "Clear the cache and delete all artifacts",
      options: [{ name: "--global", description: "Clear the global cache" }],
    },
    {
      name: "compile",
      description: "Build project (alias for build)",
      options: buildOptions,
      args: buildArgs,
    },
    {
      name: "console",
      description: "Open a hardhat console",
      options: [
        {
          name: "--history",
          description: "Path to a history file (default: console-history.txt)",
          args: { name: "file", template: "filepaths" },
        },
        noCompile("Do not compile the project before starting the console"),
      ],
      args: {
        name: "commands",
        description: "Commands to run when the console starts",
        isVariadic: true,
        isOptional: true,
      },
    },
    {
      name: "flatten",
      description: "Flatten and print contracts and their dependencies",
      args: {
        name: "files",
        description: "An optional list of files to flatten",
        isVariadic: true,
        isOptional: true,
        template: "filepaths",
      },
    },
    {
      name: "node",
      description: "Start a JSON-RPC server on top of Hardhat Network",
      options: [
        {
          name: "--hostname",
          description:
            "The host to which to bind to for new connections (defaults to 127.0.0.1 running locally, and 0.0.0.0 in Docker)",
          args: { name: "host" },
        },
        {
          name: "--port",
          description:
            "The port on which to listen for new connections (default: 8545)",
          args: { name: "port" },
        },
        {
          name: "--chain-type",
          description:
            "The chain type to connect to, if not specified the default chain type is used",
          args: { name: "chain type", suggestions: ["l1", "op", "generic"] },
        },
        {
          name: "--chain-id",
          description:
            "The chain id to connect to, if not specified the default chain id is used",
          args: { name: "chain id" },
        },
        {
          name: "--fork",
          description: "The URL of the JSON-RPC server to fork from",
          args: { name: "url" },
        },
        {
          name: "--fork-block-number",
          description: "The block number to fork from",
          args: { name: "block number" },
        },
      ],
    },
    {
      name: "run",
      description: "Run a user-defined script after compiling the project",
      options: [
        noCompile("Do not compile the project before running the script"),
      ],
      args: {
        name: "script",
        description: "A js or ts file to be run within hardhat's environment",
        template: "filepaths",
      },
    },
    {
      name: "telemetry",
      description: "Display and modify telemetry settings",
      options: [
        { name: "--enable", description: "Enable telemetry" },
        { name: "--disable", description: "Disable telemetry" },
      ],
    },
    {
      name: "test",
      description: "Run all tests",
      options: testOptions(false),
      args: {
        name: "test files",
        description: "List of specific files to run tests on",
        isVariadic: true,
        isOptional: true,
        template: "filepaths",
      },
      subcommands: [
        {
          name: "solidity",
          description: "Run the Solidity tests",
          options: testOptions(true),
          args: {
            name: "test files",
            description: "An optional list of files to test",
            isVariadic: true,
            isOptional: true,
            template: "filepaths",
          },
        },
      ],
    },
  ],
  options: [
    {
      name: "--build-profile",
      description: "The build profile to use",
      isPersistent: true,
      args: { name: "profile", suggestions: ["default", "production"] },
    },
    {
      name: "--config",
      description: "A Hardhat config file",
      isPersistent: true,
      args: { name: "file", template: "filepaths" },
    },
    {
      name: "--coverage",
      description: "Enables code coverage",
      isPersistent: true,
    },
    {
      name: "--gas-stats",
      description:
        "Collects and displays gas usage statistics for all function calls during tests",
      isPersistent: true,
    },
    {
      name: "--gas-stats-json",
      description:
        "Write gas usage statistics to a JSON file at the specified path",
      isPersistent: true,
      args: { name: "file", template: "filepaths" },
    },
    {
      name: ["--help", "-h"],
      description:
        "Show this message, or a task's help if its name is provided",
      isPersistent: true,
    },
    {
      name: "--init",
      description:
        "Initializes a Hardhat project. Supports --template <name> and --templates",
      exclusiveOn: ["--config"],
    },
    {
      name: "--template",
      description: "The template to initialize the Hardhat project with",
      dependsOn: ["--init"],
      exclusiveOn: ["--templates"],
      args: {
        name: "name",
        suggestions: ["node-test-runner-viem", "mocha-ethers", "minimal"],
      },
    },
    {
      name: "--templates",
      description: "List the available project templates",
      dependsOn: ["--init"],
      exclusiveOn: ["--template"],
    },
    {
      name: "--network",
      description: "The network to connect to",
      isPersistent: true,
      args: { name: "network" },
    },
    {
      name: "--show-stack-traces",
      description: "Show stack traces (always enabled on CI servers)",
      isPersistent: true,
    },
    {
      name: "--verbosity",
      description: "Verbosity level of the output (default: 2)",
      isPersistent: true,
      args: { name: "level", suggestions: ["0", "1", "2", "3", "4", "5"] },
    },
    {
      name: "-v",
      description:
        "Increase the verbosity level, repeat as -vv or -vvv for more",
      isPersistent: true,
    },
    { name: "--version", description: "Show the version of hardhat" },
  ],
};

export default completionSpec;
