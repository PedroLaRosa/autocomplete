// Forc v0.72.1 (crates.io / FuelLabs/sway tag v0.72.1, 2026-11-19). Source: clap definitions read statically from
// FuelLabs/sway v0.72.1 (forc/src/cli, forc-plugins/{forc-debug,forc-doc,forc-fmt,forc-lsp,forc-migrate,forc-publish,forc-tx}, sway-features, sway-ir)
// and FuelLabs/forc tags forc-client-0.71.6 (deploy/run/submit/call), forc-crypto-0.71.1, forc-node-0.71.3 and forc-wallet-0.16.4.
// Binaries were not run; `forc <plugin>` entries describe the official plugin binaries and are only usable when installed (see `forc plugins`).
// Note: upstream spells the dependency manifest flag of `forc add`/`forc remove` `--manisfest-path`; that is kept as is.

const infoOptions: Fig.Option[] = [
  {
    name: ["-h", "--help"],
    description: "Print help",
    isPersistent: true,
  },
];

const versionOption: Fig.Option = {
  name: ["-V", "--version"],
  description: "Print version",
};

// Flags declared `global = true` on the `forc` binary: valid on every built-in subcommand
const globalOptions: Fig.Option[] = [
  {
    name: ["-v", "--verbose"],
    description: "Use verbose output",
    isRepeatable: true,
  },
  {
    name: ["-s", "--silent"],
    description: "Silence all output",
  },
  {
    name: ["-L", "--log-level"],
    description: "Set the log level",
    args: {
      name: "LOG_LEVEL",
      suggestions: ["off", "error", "warn", "info", "debug", "trace"],
    },
  },
];

const withVersion = (subcommand: Fig.Subcommand): Fig.Subcommand => ({
  ...subcommand,
  options: [...(subcommand.options ?? []), versionOption],
});

const withGlobalOptions = (subcommand: Fig.Subcommand): Fig.Subcommand => ({
  ...subcommand,
  options: [...(subcommand.options ?? []), ...globalOptions],
});

const ipfsNodeOption: Fig.Option = {
  name: "--ipfs-node",
  description:
    "The IPFS node to use for fetching IPFS sources (FUEL, PUBLIC, LOCAL or a gateway URL)",
  args: {
    name: "IPFS_NODE",
    suggestions: [
      { name: "FUEL", description: "Fuel registry IPFS gateway" },
      { name: "PUBLIC", description: "Public IPFS gateway" },
      { name: "LOCAL", description: "Local IPFS node" },
    ],
  },
};

const pathOption = (description: string): Fig.Option => ({
  name: ["-p", "--path"],
  description,
  args: { name: "PATH", template: "folders" },
});

const projectPathOption = pathOption(
  "Path to the project, defaults to the current directory"
);

const offlineOption: Fig.Option = {
  name: "--offline",
  description:
    "Offline mode, prevents Forc from using the network when managing dependencies",
};

const lockedOption: Fig.Option = {
  name: "--locked",
  description: "Require that the Forc.lock file is up-to-date",
};

const terseOption: Fig.Option = {
  name: ["-t", "--terse"],
  description: "Terse mode, limited warning and error output",
};

const experimentalFeatures: string[] = [
  "new_encoding",
  "references",
  "new_hashing",
  "str_array_no_padding",
  "dynamic_storage",
];

const experimentalOptions: Fig.Option[] = [
  {
    name: "--experimental",
    description:
      "Comma separated list of all experimental features that will be enabled",
    isRepeatable: true,
    args: { name: "EXPERIMENTAL", suggestions: experimentalFeatures },
  },
  {
    name: "--no-experimental",
    description:
      "Comma separated list of all experimental features that will be disabled",
    isRepeatable: true,
    args: { name: "NO_EXPERIMENTAL", suggestions: experimentalFeatures },
  },
];

const buildTargetValues: (string | Fig.Suggestion)[] = ["fuel", "evm"];

const dumpImplsOption: Fig.Option = {
  name: "--dump-impls",
  description: "Dump all trait implementations for the given type name",
  args: { name: "TYPE" },
};

const asmValues: (string | Fig.Suggestion)[] = [
  {
    name: "virtual",
    description: "Initial ASM with virtual registers and abstract control flow",
  },
  {
    name: "allocated",
    description:
      "ASM with registers allocated, but still with abstract control flow",
  },
  { name: "abstract", description: "Both virtual and allocated ASM" },
  {
    name: "final",
    description: "Final ASM that gets serialized to the target VM bytecode",
  },
  { name: "all", description: "Virtual, allocated and final ASM" },
];

const irValues: (string | Fig.Suggestion)[] = [
  {
    name: "initial",
    description: "Initial IR prior to any optimization passes",
  },
  {
    name: "final",
    description: "Final IR after applying all optimization passes",
  },
  {
    name: "all",
    description: "Initial, final and all the optimization passes",
  },
  {
    name: "modified",
    description:
      "Print a requested optimization pass only if it has modified the IR",
  },
  { name: "print-md", description: "Also print the IR metadata" },
  "arg-demotion",
  "arg-mut-tagger",
  "ccp",
  "const-demotion",
  "const-folding",
  "cse",
  "dce",
  "fn-dedup-debug",
  "fn-dedup-release",
  "inline",
  "globals-dce",
  "lower-init-aggr",
  "mem2reg",
  "memcpyopt",
  "memcpyprop-reverse",
  "misc-demotion",
  "ret-demotion",
  "simplify-cfg",
  "sroa",
];

// Package-related options shared by build, contract-id, predicate-root, deploy and run
const pkgOptions: Fig.Option[] = [
  projectPathOption,
  offlineOption,
  terseOption,
  {
    name: "--output-directory",
    description: "The directory in which Forc output artifacts are placed",
    args: { name: "OUTPUT_DIRECTORY", template: "folders" },
  },
  lockedOption,
  ipfsNodeOption,
];

const minifyOptions: Fig.Option[] = [
  { name: "--json-abi", description: "Minify JSON ABI files" },
  {
    name: "--json-storage-slots",
    description: "Minify JSON storage slot files",
  },
];

const printOptions: Fig.Option[] = [
  {
    name: "--ast",
    description: "Print the generated Sway AST (Abstract Syntax Tree)",
  },
  {
    name: "--dca-graph",
    description:
      "Print the computed Sway DCA (Dead Code Analysis) graph to the given path, or to stdout if empty",
    args: { name: "DCA_GRAPH", template: "filepaths" },
  },
  {
    name: "--dca-graph-url-format",
    description:
      "URL format to be used in the generated DCA graph .dot file, with the variables {path}, {line} and {col}",
    args: { name: "DCA_GRAPH_URL_FORMAT" },
  },
  {
    name: "--asm",
    description: "Print the generated ASM (assembler)",
    args: { name: "ASM", isVariadic: true, suggestions: asmValues },
  },
  { name: "--bytecode", description: "Print the bytecode" },
  {
    name: "--ir",
    description: "Print the generated Sway IR (Intermediate Representation)",
    args: { name: "IR", isVariadic: true, suggestions: irValues },
  },
  {
    name: "--time-phases",
    description: "Output the time elapsed over each part of the compilation",
  },
  { name: "--profile", description: "Profile the compilation process" },
  {
    name: "--reverse-order",
    description: "Output build errors and warnings in reverse order",
  },
  {
    name: "--metrics-outfile",
    description: "Output compilation metrics into the specified file",
    args: { name: "METRICS_OUTFILE", template: "filepaths" },
  },
];

const buildOutputOptions: Fig.Option[] = [
  {
    name: ["-o", "--output-bin"],
    description:
      "Create a binary file at the provided path representing the final bytecode",
    args: { name: "BIN_FILE", template: "filepaths" },
  },
  {
    name: ["-g", "--output-debug"],
    description:
      "Create a file at the provided path containing debug information (JSON for a .json path, otherwise an .elf file with DWARF)",
    args: { name: "DEBUG_FILE", template: "filepaths" },
  },
  {
    name: "--output-hexfile",
    description:
      "Generate a JSON file containing the hex-encoded script binary",
    args: { name: "HEX_FILE", template: "filepaths" },
  },
];

const buildProfileOptions: Fig.Option[] = [
  {
    name: "--build-profile",
    description: "The name of the build profile to use",
    exclusiveOn: ["--release"],
    args: { name: "BUILD_PROFILE", default: "debug" },
  },
  {
    name: "--release",
    description: "Use the release build profile",
    exclusiveOn: ["--build-profile"],
  },
  { name: "--error-on-warnings", description: "Treat warnings as errors" },
];

// Options shared by every command that builds a package: build and test
const buildOptions: Fig.Option[] = [
  ...pkgOptions,
  ...printOptions,
  ...minifyOptions,
  ...buildOutputOptions,
  ...buildProfileOptions,
  {
    name: ["--build-target", "--target"],
    description: "Build target to use for code generation",
    args: {
      name: "BUILD_TARGET",
      default: "fuel",
      suggestions: buildTargetValues,
    },
  },
  dumpImplsOption,
];

const sourceOptions: Fig.Option[] = [
  {
    name: "--path",
    description: "Local path to the package",
    exclusiveOn: ["--git", "--ipfs"],
    args: { name: "PATH", template: "folders" },
  },
  {
    name: "--git",
    description: "Git URI for the package",
    exclusiveOn: ["--path", "--ipfs"],
    args: { name: "URI" },
  },
  {
    name: "--branch",
    description: "The branch to use",
    dependsOn: ["--git"],
    exclusiveOn: ["--tag", "--rev"],
    args: { name: "BRANCH" },
  },
  {
    name: "--tag",
    description: "The tag to use",
    dependsOn: ["--git"],
    exclusiveOn: ["--branch", "--rev"],
    args: { name: "TAG" },
  },
  {
    name: "--rev",
    description: "The specific revision to use",
    dependsOn: ["--git"],
    exclusiveOn: ["--branch", "--tag"],
    args: { name: "REV" },
  },
  {
    name: "--ipfs",
    description: "IPFS CID for the package",
    exclusiveOn: ["--path", "--git"],
    args: { name: "CID" },
  },
];

// Options shared by `forc add` and `forc remove`
const depModifierOptions: Fig.Option[] = [
  {
    name: "--dry-run",
    description: "Print the changes that would be made without making them",
  },
  {
    name: "--manisfest-path",
    description: "Path to the manifest file",
    args: { name: "PATH", template: "filepaths" },
  },
  {
    name: ["-p", "--package"],
    description: "Package to perform the action on",
    args: { name: "SPEC" },
  },
  {
    name: "--contract-dep",
    description: "Treat the dependency as a contract dependency",
  },
  {
    name: "--salt",
    description: "Salt value for contract deployment",
    args: { name: "SALT" },
  },
  offlineOption,
  ipfsNodeOption,
];

const saltOption: Fig.Option = {
  name: "--salt",
  description:
    "Added salt used to derive the contract ID (default: 0x00...00, 32 zero bytes)",
  args: { name: "SALT" },
};

const projectKindOptions = (workspaceDescription: string): Fig.Option[] => [
  {
    name: "--contract",
    description:
      "Create a contract program (default when no program type is given)",
  },
  { name: "--script", description: "Create a script program" },
  { name: "--predicate", description: "Create a predicate program" },
  { name: "--library", description: "Create a library program" },
  { name: "--workspace", description: workspaceDescription },
  {
    name: "--name",
    description: "Set the package name, defaults to the directory name",
    args: { name: "NAME" },
  },
];

const gasOptions: Fig.Option[] = [
  {
    name: "--gas-price",
    description: "Gas price for the transaction",
    args: { name: "GAS_PRICE" },
  },
  {
    name: "--script-gas-limit",
    description: "Gas limit for the transaction",
    args: { name: "SCRIPT_GAS_LIMIT" },
  },
  {
    name: "--max-fee",
    description: "Max fee for the transaction",
    args: { name: "MAX_FEE" },
  },
  {
    name: "--tip",
    description: "The tip for the transaction",
    args: { name: "TIP" },
  },
];

const maturityOption: Fig.Option = {
  name: "--maturity",
  description: "Block height until which the transaction cannot be included",
  args: { name: "MATURITY", default: "0" },
};

const nodeTargetOptionNames = [
  "--node-url",
  "--target",
  "--mainnet",
  "--testnet",
  "--devnet",
];

const exclusiveNodeTarget = (name: string): string[] =>
  nodeTargetOptionNames.filter((option) => option !== name);

const nodeTargetOptions: Fig.Option[] = [
  {
    name: "--node-url",
    description:
      "The URL of the Fuel node, defaults to the manifest network table, then http://127.0.0.1:4000",
    exclusiveOn: exclusiveNodeTarget("--node-url"),
    args: { name: "NODE_URL" },
  },
  {
    name: "--target",
    description: "Preset configuration for using a specific target",
    exclusiveOn: exclusiveNodeTarget("--target"),
    args: {
      name: "TARGET",
      suggestions: [
        { name: "local", description: "Local node" },
        { name: "devnet", description: "Devnet" },
        { name: "Ignition", description: "Mainnet" },
        {
          name: "Fuel Sepolia Testnet",
          insertValue: "'Fuel Sepolia Testnet'",
          description: "Testnet",
        },
      ],
    },
  },
  {
    name: "--mainnet",
    description: "Use preset configuration for mainnet",
    exclusiveOn: exclusiveNodeTarget("--mainnet"),
  },
  {
    name: "--testnet",
    description: "Use preset configuration for testnet",
    exclusiveOn: exclusiveNodeTarget("--testnet"),
  },
  {
    name: "--devnet",
    description: "Use preset configuration for devnet",
    exclusiveOn: exclusiveNodeTarget("--devnet"),
  },
];

const defaultSignerOptions: Fig.Option[] = [
  {
    name: "--default-signer",
    description:
      "Sign the transaction with the default signer that is pre-funded by fuel-core, useful for a local node",
  },
  {
    name: "--unsigned",
    description: "Deprecated in favor of --default-signer",
    deprecated: true,
  },
];

const signingKeyArg: Fig.Arg = {
  name: "SIGNING_KEY",
  description: "Set the key to be used for signing",
  isOptional: true,
};

const helpArgs: Fig.Arg = {
  name: "COMMAND",
  isOptional: true,
  isVariadic: true,
};

// Built-in `forc` subcommands
const builtinSubcommands: Fig.Subcommand[] = [
  {
    name: "add",
    description: "Add dependencies to a Forc.toml manifest file",
    options: [...depModifierOptions, ...sourceOptions],
    args: {
      name: "DEP_SPEC",
      description: "Dependencies to add, in the format name[@version]",
      isVariadic: true,
    },
  },
  {
    name: "addr2line",
    description:
      "Show location and context of an opcode address in its source file",
    options: [
      {
        name: ["-S", "--search-dir"],
        description: "Where to search for the project root",
        args: { name: "SEARCH_DIR", default: ".", template: "folders" },
      },
      {
        name: ["-g", "--sourcemap-path"],
        description: "Source file mapping in JSON format",
        isRequired: true,
        args: { name: "SOURCEMAP_PATH", template: "filepaths" },
      },
      {
        name: ["-c", "--context"],
        description: "How many lines of context to show",
        args: { name: "CONTEXT", default: "2" },
      },
      {
        name: ["-i", "--opcode-index"],
        description: "Opcode index",
        isRequired: true,
        args: { name: "OPCODE_INDEX" },
      },
    ],
  },
  {
    name: ["build", "b"],
    description: "Compile the current or target project",
    options: [
      ...buildOptions,
      {
        name: "--tests",
        description: "Also build all tests within the project",
      },
      ...experimentalOptions,
    ],
  },
  {
    name: "check",
    description:
      "Check the current or target project and all of its dependencies for errors",
    options: [
      projectPathOption,
      offlineOption,
      lockedOption,
      terseOption,
      {
        name: "--disable-tests",
        description: "Disable checking unit tests",
      },
      ipfsNodeOption,
      dumpImplsOption,
      ...experimentalOptions,
    ],
    args: {
      name: "BUILD_TARGET",
      description: "Build target to use for code generation",
      isOptional: true,
      default: "fuel",
      suggestions: buildTargetValues,
    },
  },
  {
    name: "clean",
    description:
      "Remove the default forc compiler output artifact directory, i.e. <project-name>/out",
    options: [projectPathOption],
  },
  {
    name: "completions",
    description: "Generate tab-completion scripts for your shell",
    options: [
      {
        name: ["-T", "--target"],
        description: "Specify shell to enable tab-completion for",
        isRequired: true,
        args: {
          name: "TARGET",
          suggestions: [
            { name: "bash", description: "Bourne Again Shell (bash)" },
            { name: "elvish", description: "Elvish shell" },
            { name: "fish", description: "Friendly Interactive Shell (fish)" },
            { name: "power-shell", description: "PowerShell" },
            { name: "zsh", description: "Z Shell (zsh)" },
            { name: "fig", description: "Fig" },
          ],
        },
      },
    ],
  },
  {
    name: "new",
    description: "Create a new Forc project at the given path",
    options: projectKindOptions("Create an empty workspace"),
    args: {
      name: "PATH",
      description: "The path at which the project directory will be created",
      template: "folders",
    },
  },
  {
    name: "init",
    description: "Create a new Forc project in an existing directory",
    options: [
      {
        name: "--path",
        description:
          "The directory in which the Forc project will be initialized",
        args: { name: "PATH", template: "folders" },
      },
      ...projectKindOptions("Create an empty workspace"),
    ],
  },
  {
    name: "parse-bytecode",
    description: "Parse bytecode file into a debug format",
    args: { name: "FILE_PATH", template: "filepaths" },
  },
  {
    name: ["test", "t"],
    description: "Run the Sway unit tests for the current project",
    options: [
      ...buildOptions,
      {
        name: "--pretty",
        description: "Pretty-print the logs emitted from tests",
      },
      {
        name: ["-l", "--logs"],
        description: "Print decoded Log and LogData receipts for tests",
      },
      { name: "--raw-logs", description: "Print the raw logs for tests" },
      {
        name: "--reverts",
        description: "Print the revert information for tests",
      },
      {
        name: "--dbgs",
        description: "Print the output of debug ecals for tests",
      },
      {
        name: "--filter-exact",
        description:
          "Only execute the test exactly matching the given filter string",
      },
      {
        name: "--test-threads",
        description:
          "Number of threads to utilize when running the tests, defaults to the number of available threads",
        args: { name: "TEST_THREADS" },
      },
      ...experimentalOptions,
      {
        name: "--gas-costs",
        description:
          "Source of the gas costs values used to calculate gas costs of test executions",
        args: {
          name: "GAS_COSTS",
          template: "filepaths",
          suggestions: [
            {
              name: "built-in",
              description:
                "Gas costs of Fuel mainnet at the time of the release",
            },
            {
              name: "mainnet",
              description: "Fetch the current gas costs from mainnet",
            },
            {
              name: "testnet",
              description: "Fetch the current gas costs from testnet",
            },
          ],
        },
      },
      {
        name: "--no-gas-limit",
        description: "Remove gas limit for test executions",
      },
    ],
    args: {
      name: "FILTER",
      description: "Only execute tests containing the given string",
      isOptional: true,
    },
  },
  {
    name: "remove",
    description: "Remove dependencies from a Forc.toml manifest file",
    options: depModifierOptions,
    args: {
      name: "DEP_SPEC",
      description: "Dependencies to remove, in the format name[@version]",
      isVariadic: true,
    },
  },
  {
    name: "update",
    description: "Update dependencies in the Forc dependencies directory",
    options: [
      projectPathOption,
      {
        name: "-d",
        description:
          "Dependency to be updated, if not set all dependencies will be updated",
        args: { name: "TARGET_DEPENDENCY" },
      },
      {
        name: ["-c", "--check"],
        description:
          "Check if the dependencies have newer versions without updating them",
      },
      ipfsNodeOption,
    ],
  },
  {
    name: "plugins",
    description: "List all forc plugins",
    options: [
      {
        name: ["-p", "--paths"],
        description: "Print the absolute path to each discovered plugin",
      },
      {
        name: ["-d", "--describe"],
        description:
          "Print the long description associated with each listed plugin",
      },
    ],
  },
  {
    name: "template",
    description: "Create a new Forc project from a git template",
    options: [
      {
        name: ["-u", "--url"],
        description: "The template url, should be a git repo",
        args: { name: "URL", default: "https://github.com/fuellabs/sway" },
      },
      {
        name: ["-t", "--template-name"],
        description:
          "The name of the template to fetch from the given git repo",
        args: { name: "TEMPLATE_NAME" },
      },
    ],
    args: {
      name: "PROJECT_NAME",
      description: "The name of the project that will be created",
    },
  },
  {
    name: "contract-id",
    description:
      "Determine the contract ID of a contract, for workspaces outputs all contract IDs in the workspace",
    options: [
      ...pkgOptions,
      ...minifyOptions,
      ...printOptions,
      ...buildOutputOptions,
      ...buildProfileOptions,
      saltOption,
      ...experimentalOptions,
    ],
  },
  {
    name: "predicate-root",
    description:
      "Determine the predicate root of a predicate, for workspaces outputs all predicate roots in the workspace",
    options: [
      ...pkgOptions,
      ...minifyOptions,
      ...printOptions,
      ...buildOutputOptions,
      ...buildProfileOptions,
      ...experimentalOptions,
    ],
  },
];

// Hex-encoded inputs of `forc tx`
const txUtxoIdOption: Fig.Option = {
  name: "--utxo-id",
  description: "Hash of the unspent transaction",
  args: { name: "UTXO_ID" },
};

const txOutputIxOption: Fig.Option = {
  name: "--output-ix",
  description: "Index of transaction output",
  args: { name: "OUTPUT_IX" },
};

const txPtrOption: Fig.Option = {
  name: "--tx-ptr",
  description:
    "Points to the transaction whose output is being spent, includes block height and transaction index",
  args: { name: "TX_PTR" },
};

const txWitnessIxOption = (description: string): Fig.Option => ({
  name: "--witness-ix",
  description,
  args: { name: "WITNESS_IX" },
});

const txPredicateOptions: Fig.Option[] = [
  {
    name: "--predicate-gas-used",
    description: "Gas used by predicates",
    args: { name: "PREDICATE_GAS_USED", default: "0" },
  },
  {
    name: "--predicate",
    description: "The predicate bytecode",
    args: { name: "PREDICATE", template: "filepaths" },
  },
  {
    name: "--predicate-data",
    description:
      "The predicate input data (parameters), the file is loaded as raw bytes",
    args: { name: "PREDICATE_DATA", template: "filepaths" },
  },
];

const txAmountOption = (description: string): Fig.Option => ({
  name: "--amount",
  description,
  args: { name: "AMOUNT" },
});

const txAssetIdOption = (description: string): Fig.Option => ({
  name: "--asset-id",
  description,
  args: { name: "ASSET_ID" },
});

const txToOption = (description: string): Fig.Option => ({
  name: "--to",
  description,
  args: { name: "TO" },
});

const txBalanceRootOption = (description: string): Fig.Option => ({
  name: "--balance-root",
  description,
  args: { name: "BALANCE_ROOT" },
});

const txStateRootOption = (description: string): Fig.Option => ({
  name: "--state-root",
  description,
  args: { name: "STATE_ROOT" },
});

const txContractIdOption = (description: string): Fig.Option => ({
  name: "--contract-id",
  description,
  args: { name: "CONTRACT_ID" },
});

const txInputSubcommands: Fig.Subcommand[] = [
  {
    name: "coin",
    description: "Coin input",
    options: [
      txUtxoIdOption,
      txOutputIxOption,
      {
        name: "--owner",
        description: "Owning address or predicate root",
        args: { name: "OWNER" },
      },
      txAmountOption("Amount of coins"),
      txAssetIdOption("Asset ID of the coins"),
      txPtrOption,
      txWitnessIxOption("Index of witness that authorizes spending the coin"),
      {
        name: "--maturity",
        description:
          "The UTXO being spent must have been created at least this many blocks ago",
        args: { name: "MATURITY" },
      },
      ...txPredicateOptions,
    ],
  },
  {
    name: "contract",
    description: "Contract input",
    options: [
      txUtxoIdOption,
      txOutputIxOption,
      txBalanceRootOption(
        "Root of the amount of coins owned by the contract before transaction execution"
      ),
      txStateRootOption(
        "State root of the contract before transaction execution"
      ),
      txPtrOption,
      txContractIdOption("The ID of the contract"),
    ],
  },
  {
    name: "message",
    description: "Message input",
    options: [
      {
        name: "--sender",
        description: "The address of the message sender",
        args: { name: "SENDER" },
      },
      {
        name: "--recipient",
        description: "The address or predicate root of the message recipient",
        args: { name: "RECIPIENT" },
      },
      txAmountOption("Amount of base asset coins sent with the message"),
      {
        name: "--nonce",
        description: "The message nonce",
        args: { name: "NONCE" },
      },
      {
        name: "--msg-data",
        description: "The message data",
        args: { name: "MSG_DATA", template: "filepaths" },
      },
      txWitnessIxOption("Index of witness that authorizes the message"),
      ...txPredicateOptions,
    ],
  },
];

const txOutputSubcommands: Fig.Subcommand[] = [
  {
    name: "coin",
    description: "Coin output",
    options: [
      txToOption("Receiving address"),
      txAmountOption("Amount of coins"),
      txAssetIdOption("Asset ID of the coins"),
    ],
  },
  {
    name: "contract",
    description: "Contract output",
    options: [
      {
        name: "--input-ix",
        description: "Index of input contract",
        args: { name: "INPUT_IX" },
      },
      txBalanceRootOption(
        "Root of amount of coins owned by the contract after transaction execution"
      ),
      txStateRootOption(
        "State root of the contract after transaction execution"
      ),
    ],
  },
  {
    name: "change",
    description: "Change output",
    options: [
      txToOption("Receiving address or predicate root"),
      txAmountOption("Amount of coins to send"),
      txAssetIdOption("Asset ID of the coins"),
    ],
  },
  {
    name: "variable",
    description: "Variable output",
    options: [
      txToOption("Receiving address or predicate root"),
      txAmountOption("Amount of coins to send"),
      txAssetIdOption("Asset ID of the coins"),
    ],
  },
  {
    name: "contract-created",
    description: "Contract-created output",
    options: [
      txContractIdOption("The ID of the created contract"),
      txStateRootOption("Initial state root of the contract"),
    ],
  },
];

// Inputs and outputs follow all other arguments of `forc tx create|script`
const txInputOutputSubcommands: Fig.Subcommand[] = [
  {
    name: "input",
    description: "Add a transaction input",
    subcommands: txInputSubcommands,
  },
  {
    name: "output",
    description: "Add a transaction output",
    subcommands: txOutputSubcommands,
  },
];

const txWitnessOption: Fig.Option = {
  name: "--witness",
  description:
    "An arbitrary length string of hex-encoded bytes, e.g. 1F2E3D4C5B6A",
  isRepeatable: true,
  args: { name: "WITNESSES" },
};

const cryptoKeyTypeOption: Fig.Option = {
  name: ["-k", "--key-type"],
  description: "Key type to use",
  args: {
    name: "KEY_TYPE",
    default: "block-production",
    suggestions: ["block-production", "peering"],
  },
};

const cryptoHashArg: Fig.Arg = {
  name: "CONTENT_OR_FILEPATH",
  description:
    "A file path, a hex string, a string, or - to read stdin (stdin is also read when omitted)",
  isOptional: true,
  template: "filepaths",
};

const walletUnverifiedOption: Fig.Option = {
  name: "--unverified",
  description:
    "Show account addresses stored in the cache without re-deriving them",
};

const walletSignDataSubcommands: Fig.Subcommand[] = [
  {
    name: "tx-id",
    description: "Sign a transaction ID",
    args: { name: "TX_ID" },
  },
  {
    name: "file",
    description:
      "Read the file at the given path into bytes and sign the raw data",
    args: { name: "PATH", template: "filepaths" },
  },
  {
    name: "string",
    description: "Sign the given string as a slice of bytes",
    args: { name: "STRING" },
  },
  {
    name: "hex",
    description:
      "Parse the given hex-encoded byte string and sign the raw bytes",
    args: { name: "HEX_STRING" },
  },
];

const walletForceOptions: Fig.Option[] = [
  {
    name: ["-f", "--force"],
    description: "Force wallet creation, removing any existing wallet file",
  },
  {
    name: ["-c", "--cache-accounts"],
    description: "How many accounts to cache by default (default 1)",
    args: { name: "CACHE_ACCOUNTS" },
  },
];

const nodeConnectionOptions: Fig.Option[] = [
  { name: "--peer-id", description: "Peer ID", args: { name: "PEER_ID" } },
  {
    name: "--secret",
    description: "Peering secret key",
    args: { name: "SECRET" },
  },
  {
    name: "--relayer",
    description: "Ethereum RPC endpoint",
    args: { name: "RELAYER" },
  },
  {
    name: "--ip",
    description: "The IP address to bind the GraphQL service to",
    args: { name: "IP", default: "0.0.0.0" },
  },
  {
    name: "--port",
    description: "The port to bind the GraphQL service to",
    args: { name: "PORT", default: "4000" },
  },
  {
    name: "--peering-port",
    description: "The p2p network's TCP port",
    args: { name: "PEERING_PORT", default: "30333" },
  },
];

// Official plugins, executed as `forc-<name>` binaries found on PATH
const pluginSubcommands: Fig.Subcommand[] = [
  {
    name: "call",
    description: "Perform Fuel RPC calls from the comfort of your command line",
    options: [
      {
        name: "--abi",
        description: "Path, URL or raw JSON string for the contract ABI",
        args: { name: "ABI", template: "filepaths" },
      },
      {
        name: "--contract-abi",
        description:
          "Additional contract IDs and their ABIs for better tracing, in the format contract_id:abi_path",
        isRepeatable: true,
        args: { name: "CONTRACT_ABIS" },
      },
      {
        name: "--label",
        description:
          "Label addresses in the trace output, in the format address:label",
        isRepeatable: true,
        args: { name: "LABEL" },
      },
      ...nodeTargetOptions,
      {
        name: "--signing-key",
        description: "Derive an account from a secret key to make the call",
        args: { name: "SIGNING_KEY" },
      },
      {
        name: "--wallet",
        description: "Use forc-wallet to make the call",
      },
      {
        name: ["--amount", "--value"],
        description: "Amount of native assets to forward with the call",
        args: { name: "AMOUNT", default: "0" },
      },
      {
        name: "--asset-id",
        description: "Asset ID to forward with the call",
        args: { name: "ASSET_ID" },
      },
      {
        name: "--gas-forwarded",
        description: "Amount of gas to forward with the call",
        args: { name: "GAS_FORWARDED" },
      },
      {
        name: "--mode",
        description: "Execution mode, determines if state changes are applied",
        args: {
          name: "MODE",
          default: "dry-run",
          suggestions: [
            {
              name: "dry-run",
              description:
                "No state changes, no gas fees, wallet is not used or validated",
            },
            {
              name: "simulate",
              description:
                "No state changes, estimates gas, wallet is used but not validated",
            },
            {
              name: "live",
              description:
                "State changes, gas fees apply, wallet is used and validated",
            },
          ],
        },
      },
      {
        name: "--list-functions",
        description: "List all available functions in the contract",
      },
      ...gasOptions,
      {
        name: ["--external-contracts", "--contracts"],
        description:
          "The external contract addresses to use for the call, comma separated",
        args: { name: "EXTERNAL_CONTRACTS" },
      },
      {
        name: ["-o", "--output"],
        description: "Output format for the call result",
        args: {
          name: "OUTPUT",
          default: "default",
          suggestions: [
            { name: "default", description: "Default formatted output" },
            { name: "raw", description: "Raw unformatted output" },
            {
              name: "json",
              description:
                "JSON output with full tracing information (logs, errors and result)",
            },
          ],
        },
      },
      {
        name: "--variable-output",
        description: "Contract call variable output count",
        args: { name: "VARIABLE_OUTPUT" },
      },
      {
        name: "-v",
        description:
          "Set verbosity level, -v prints decoded logs and -vv also receipts and script JSON",
        isRepeatable: 2,
      },
      {
        name: ["-d", "--debug"],
        description: "Start interactive debugger after transaction execution",
      },
    ],
    args: [
      { name: "ADDRESS", description: "The contract ID to call" },
      {
        name: "FUNCTION",
        description: "The function selector to call",
        isOptional: true,
      },
      {
        name: "FUNCTION_ARGS",
        description: "Arguments to pass to the function",
        isOptional: true,
        isVariadic: true,
      },
    ],
  },
  {
    name: "crypto",
    description: "Forc plugin for hashing arbitrary data",
    subcommands: [
      {
        name: "keccak256",
        description: "Hash the argument or file with Keccak256",
        args: cryptoHashArg,
      },
      {
        name: "sha256",
        description: "Hash the argument or file with SHA256",
        args: cryptoHashArg,
      },
      {
        name: "address",
        description: "Convert an address to another format",
        args: {
          name: "ADDRESS",
          description: "The address to convert",
        },
      },
      {
        name: "get-public-key",
        description: "Get the public key from a message and its signature",
        args: [
          { name: "SIGNATURE", description: "A signature in hex format" },
          {
            name: "MESSAGE",
            description: "The message that was signed",
            isOptional: true,
          },
        ],
      },
      {
        name: "new-key",
        description: "Create a new key for use with fuel-core",
        options: [cryptoKeyTypeOption],
      },
      {
        name: "parse-secret",
        description: "Parse a private key to view the associated public key",
        options: [cryptoKeyTypeOption],
        args: { name: "SECRET", description: "A private key in hex format" },
      },
      {
        name: "vanity",
        description: "Generate a vanity address",
        options: [
          {
            name: "--starts-with",
            description: "Desired hex string prefix for the address",
            exclusiveOn: ["--regex"],
            args: { name: "HEX_STRING" },
          },
          {
            name: "--ends-with",
            description: "Desired hex string suffix for the address",
            exclusiveOn: ["--regex"],
            args: { name: "HEX_STRING" },
          },
          {
            name: "--regex",
            description:
              "Desired regex pattern to match the entire address (case-insensitive)",
            exclusiveOn: ["--starts-with", "--ends-with"],
            args: { name: "PATTERN" },
          },
          {
            name: "--timeout",
            description: "Timeout in seconds for address generation",
            args: { name: "SECONDS" },
          },
          {
            name: "--mnemonic",
            description: "Return the mnemonic with the address",
          },
          {
            name: "--save-path",
            description: "Path to save the generated vanity address to",
            args: { name: "PATH", template: "filepaths" },
          },
        ],
      },
    ],
  },
  {
    name: "debug",
    description:
      "Forc plugin for the Sway DAP (Debug Adapter Protocol) implementation",
    options: [
      {
        name: ["-s", "--serve"],
        description: "Start the DAP server",
      },
    ],
    args: {
      name: "API_URL",
      description: "The URL of the Fuel Client GraphQL API",
      isOptional: true,
      default: "http://127.0.0.1:4000/graphql",
    },
  },
  {
    name: "deploy",
    description: "Deploy contracts to a Fuel node",
    options: [
      ...pkgOptions,
      ...minifyOptions,
      ...printOptions,
      {
        name: "--verify-ir",
        description: "Verify the IR after the given optimization passes",
        isRepeatable: true,
        args: { name: "VERIFY_IR", suggestions: irValues },
      },
      ...gasOptions,
      maturityOption,
      ...nodeTargetOptions,
      {
        name: "--salt",
        description:
          "256-bit hexadecimal salt to redeploy a contract, use CONTRACT_NAME:SALT per contract for workspaces",
        isRepeatable: true,
        exclusiveOn: ["--default-salt"],
        args: { name: "SALT" },
      },
      {
        name: "--default-salt",
        description:
          "Use the default salt (32 zero bytes) for reproducible deployments",
        exclusiveOn: ["--salt"],
      },
      ...buildOutputOptions,
      {
        name: "--build-profile",
        description: "The name of the build profile to use",
        args: { name: "BUILD_PROFILE", default: "release" },
      },
      ...defaultSignerOptions,
      {
        name: "--submit-only",
        description:
          "Submit the deployment transaction(s) without waiting for execution to complete",
      },
      {
        name: "--manual-signing",
        description: "Sign the deployment transaction manually",
      },
      {
        name: "--override-storage-slots",
        description:
          "Override storage slot initialization with the values of a JSON file",
        args: { name: "JSON_FILE_PATH", template: "filepaths" },
      },
      ...experimentalOptions,
      {
        name: "--aws-kms-signer",
        description:
          "AWS KMS signer ARN, used instead of forc-wallet when present",
        args: { name: "AWS_KMS_SIGNER" },
      },
    ],
    args: signingKeyArg,
  },
  {
    name: "doc",
    description: "Forc plugin for building a Sway package's documentation",
    options: [
      {
        name: ["-p", "--path", "--manifest-path"],
        description: "Path to the project, defaults to the current directory",
        args: { name: "PATH", template: "folders" },
      },
      {
        name: "--document-private-items",
        description: "Include non-public items in the documentation",
      },
      {
        name: "--open",
        description: "Open the docs in a browser after building them",
      },
      offlineOption,
      lockedOption,
      {
        name: "--no-deps",
        description: "Do not build documentation for dependencies",
      },
      ipfsNodeOption,
      {
        name: "--doc-path",
        description: "The path to the documentation output directory",
        args: { name: "DOC_PATH", template: "folders" },
      },
      ...experimentalOptions,
      {
        name: ["-s", "--silent"],
        description:
          "Silent mode, do not output any warnings or errors to the command line",
      },
    ],
  },
  {
    name: "fmt",
    description: "Forc plugin for running the Sway code formatter",
    options: [
      {
        name: ["-c", "--check"],
        description:
          "Run in check mode, exits with 1 and prints a diff if formatting is required",
      },
      projectPathOption,
      {
        name: ["-f", "--file"],
        description:
          "Format a single .sw file with the default settings, otherwise the current directory is formatted using Forc.toml configuration",
        args: { name: "FILE", template: "filepaths" },
      },
      ...experimentalOptions,
    ],
  },
  {
    name: "lsp",
    description:
      "Forc plugin for the Sway LSP (Language Server Protocol) implementation",
  },
  {
    name: "migrate",
    description:
      "Forc plugin for migrating Sway projects to the next breaking change version of Sway",
    subcommands: [
      {
        name: "show",
        description:
          "Show the upcoming breaking change features and their migration steps",
      },
      {
        name: "check",
        description: "Check the project for code that needs to be migrated",
        options: [
          projectPathOption,
          offlineOption,
          lockedOption,
          ipfsNodeOption,
          ...experimentalOptions,
          {
            name: ["-s", "--silent"],
            description:
              "Silent mode, do not output any warnings or errors to the command line",
          },
        ],
      },
      {
        name: "run",
        description: "Migrate the project",
        options: [
          projectPathOption,
          offlineOption,
          lockedOption,
          ipfsNodeOption,
          ...experimentalOptions,
          {
            name: ["-s", "--silent"],
            description:
              "Silent mode, do not output any warnings or errors to the command line",
          },
        ],
      },
    ],
  },
  {
    name: "node",
    description:
      "Wrapper around fuel-core with sensible defaults to bootstrap a node for local development or testnet",
    options: [
      {
        name: "--dry-run",
        description: "Print the fuel-core command without running it",
      },
    ],
    subcommands: [
      {
        name: "local",
        description: "Start a local node for development purposes",
        options: [
          {
            name: "--chain-config",
            description: "Path to the chain configuration snapshot",
            args: { name: "CHAIN_CONFIG", template: "filepaths" },
          },
          {
            name: "--port",
            description: "The port to bind the GraphQL service to",
            args: { name: "PORT", default: "4000" },
          },
          {
            name: "--db-path",
            description:
              "Path to the database, if provided the local node runs in persistent mode",
            args: { name: "DB_PATH", template: "folders" },
          },
          {
            name: "--db-type",
            description: "The database type",
            args: {
              name: "DB_TYPE",
              suggestions: ["in-memory", "rocks-db"],
            },
          },
          {
            name: "--account",
            description:
              "Fund an account, in the format account-id[:asset-id[:amount]], comma separated or repeated",
            isRepeatable: true,
            args: { name: "ACCOUNT" },
          },
          {
            name: "--debug",
            description:
              "Enable debug mode, allows GraphQL endpoints to arbitrarily advance blocks",
          },
          {
            name: "--historical-execution",
            description:
              "Allow execution of transactions based on past blocks, such as dry runs in the past",
          },
          {
            name: "--poa-instant",
            description: "Use instant block production mode",
          },
        ],
      },
      {
        name: "testnet",
        description: "Start a node that will connect to the latest testnet",
        options: [
          ...nodeConnectionOptions,
          {
            name: "--db-path",
            description: "Path to the database",
            args: { name: "DB_PATH", template: "folders" },
          },
          {
            name: "--bootstrap-node",
            description: "Address of the bootstrap node",
            args: {
              name: "BOOTSTRAP_NODE",
              default: "/dnsaddr/testnet.fuel.network.",
            },
          },
        ],
      },
      {
        name: "ignition",
        description: "Start a node that will connect to the ignition network",
        options: [
          ...nodeConnectionOptions,
          {
            name: "--db-path",
            description: "Path to the database",
            args: { name: "DB_PATH", template: "folders" },
          },
          {
            name: "--bootstrap-node",
            description: "Address of the bootstrap node",
            args: {
              name: "BOOTSTRAP_NODE",
              default: "/dnsaddr/mainnet.fuel.network.",
            },
          },
        ],
      },
    ],
  },
  {
    name: "publish",
    description: "Forc plugin for uploading packages to the registry",
    options: [
      {
        name: "--token",
        description: "Token to use when uploading",
        args: { name: "TOKEN" },
      },
      {
        name: "--registry-url",
        description: "The registry URL to use",
        args: { name: "REGISTRY_URL", default: "https://api.forc.pub" },
      },
    ],
  },
  {
    name: "run",
    description:
      "Run a script project, crafts a script transaction then sends it to a running node",
    options: [
      ...pkgOptions,
      ...minifyOptions,
      {
        name: "--verify-ir",
        description: "Verify the IR after the given optimization passes",
        isRepeatable: true,
        args: { name: "VERIFY_IR", suggestions: irValues },
      },
      ...printOptions,
      ...gasOptions,
      maturityOption,
      ...buildOutputOptions,
      ...buildProfileOptions,
      ...nodeTargetOptions,
      {
        name: ["-d", "--data"],
        description: "Hex string of data to input to the script",
        args: { name: "DATA" },
      },
      {
        name: "--dry-run",
        description: "Only craft the transaction and print it out",
      },
      {
        name: ["-r", "--pretty-print"],
        description: "Pretty-print the outputs from the node",
      },
      {
        name: "--contract",
        description:
          "32-byte contract ID that will be called during the transaction",
        isRepeatable: true,
        args: { name: "CONTRACT" },
      },
      {
        name: "--simulate",
        description:
          "Execute the transaction and return the final mutated transaction along with receipts, without affecting the chain state",
      },
      ...defaultSignerOptions,
      {
        name: "--args",
        description: "Arguments to pass into the main function",
        isRepeatable: true,
        args: { name: "ARGS" },
      },
      {
        name: "--debug",
        description: "Start interactive debugger after transaction execution",
      },
      ...experimentalOptions,
    ],
    args: signingKeyArg,
  },
  {
    name: "submit",
    description: "Submit a transaction to the specified Fuel node",
    options: [
      ...nodeTargetOptions,
      {
        name: "--await",
        description:
          "Whether to await confirmation that the transaction has been committed",
        args: {
          name: "AWAIT",
          default: "true",
          suggestions: ["true", "false"],
        },
      },
      {
        name: "--tx-status-json",
        description:
          "Output the resulting transaction status as JSON rather than the default output",
        args: {
          name: "TX_STATUS_JSON",
          default: "false",
          suggestions: ["true", "false"],
        },
      },
    ],
    args: {
      name: "TX_PATH",
      description:
        "Path to the transaction to submit, a .json file or a .bin file",
      template: "filepaths",
    },
  },
  {
    name: "tx",
    description: "Construct a transaction from the command line",
    options: [
      {
        name: ["-o", "--output-path"],
        description: "Write the transaction JSON to the given file",
        args: { name: "OUTPUT_PATH", template: "filepaths" },
      },
    ],
    subcommands: [
      {
        name: "create",
        description: "Construct a Create transaction for deploying a contract",
        options: [
          ...gasOptions,
          maturityOption,
          saltOption,
          {
            name: "--bytecode",
            description: "Path to the contract bytecode",
            args: { name: "BYTECODE", template: "filepaths" },
          },
          {
            name: "--bytecode-witness-index",
            description: "Witness index of the contract bytecode to create",
            args: { name: "BYTECODE_WITNESS_INDEX", default: "0" },
          },
          {
            name: "--storage-slots",
            description:
              "Path to a JSON file with a list of storage slots to initialize (key, value)",
            args: { name: "STORAGE_SLOTS", template: "filepaths" },
          },
          txWitnessOption,
        ],
        subcommands: txInputOutputSubcommands,
      },
      {
        name: "script",
        description: "Construct a Script transaction for running a script",
        options: [
          ...gasOptions,
          maturityOption,
          {
            name: "--bytecode",
            description: "Script to execute",
            args: { name: "BYTECODE", template: "filepaths" },
          },
          {
            name: "--data",
            description:
              "Script input data (parameters), the file is loaded as raw bytes",
            args: { name: "DATA", template: "filepaths" },
          },
          {
            name: "--receipts-root",
            description: "Merkle root of receipts",
            args: { name: "RECEIPTS_ROOT" },
          },
          txWitnessOption,
        ],
        subcommands: txInputOutputSubcommands,
      },
    ],
  },
  {
    name: "wallet",
    description:
      "Forc plugin for generating or importing wallets using BIP39 phrases",
    options: [
      {
        name: "--path",
        description:
          "The path to a wallet, a JSON keystore file (default: ~/.fuel/wallets/.wallet)",
        args: { name: "WALLET_PATH", template: "filepaths" },
      },
      {
        name: "--node-url",
        description: "The URL of the Fuel node to connect to",
        args: { name: "NODE_URL", default: "https://mainnet.fuel.network/" },
      },
    ],
    subcommands: [
      {
        name: "new",
        description: "Create a new wallet from a random mnemonic phrase",
        options: walletForceOptions,
      },
      {
        name: "list",
        description: "List all wallets in the default wallet directory",
        options: [
          walletUnverifiedOption,
          {
            name: ["-t", "--target-accounts"],
            description:
              "The minimum amount of derived accounts to display their balances from",
            args: { name: "TARGET_ACCOUNTS" },
          },
        ],
      },
      {
        name: "import",
        description: "Import a wallet from the provided mnemonic phrase",
        options: walletForceOptions,
      },
      {
        name: "export",
        description: "Export a wallet as a mnemonic phrase",
      },
      {
        name: "accounts",
        description: "List all accounts derived for the wallet so far",
        options: [walletUnverifiedOption],
      },
      {
        name: "account",
        description:
          "Derive a new account, sign with an existing account, or display an account's public or private key",
        options: [walletUnverifiedOption],
        args: {
          name: "INDEX",
          description: "The index of the account",
          isOptional: true,
        },
        subcommands: [
          {
            name: "new",
            description: "Derive and reveal a new account for the wallet",
          },
          {
            name: "sign",
            description: "Sign data with the specified account",
            subcommands: walletSignDataSubcommands,
          },
          {
            name: "private-key",
            description:
              "Temporarily display the private key of an account from its index",
          },
          {
            name: "public-key",
            description: "Reveal the public key for the specified account",
            options: [
              {
                name: "--as-hex",
                description: "Display the public key as hex / bytes",
              },
            ],
          },
          {
            name: "balance",
            description:
              "Print each asset balance associated with the specified account",
            options: [walletUnverifiedOption],
          },
          {
            name: "transfer",
            description: "Transfer assets from this account to another",
            options: [
              {
                name: "--to",
                description: "The address of the account to transfer assets to",
                args: { name: "TO" },
              },
              {
                name: "--amount",
                description: "Amount of assets to transfer",
                args: { name: "AMOUNT" },
              },
              {
                name: "--asset-id",
                description: "Asset ID of the asset to transfer",
                args: { name: "ASSET_ID" },
              },
              {
                name: "--gas-price",
                description: "Gas price for the transaction",
                args: { name: "GAS_PRICE" },
              },
              {
                name: "--gas-limit",
                description: "Gas limit for the transaction",
                args: { name: "GAS_LIMIT" },
              },
              {
                name: "--maturity",
                description:
                  "Block height until which the transaction cannot be included",
                args: { name: "MATURITY" },
              },
            ],
          },
        ],
      },
      {
        name: "sign",
        description:
          "Sign some data (a transaction ID, a file, a string or a hex string) using a wallet account or a private key",
        options: [
          {
            name: "--account",
            description: "Sign using the wallet account at the given index",
            args: { name: "ACCOUNT_INDEX" },
          },
          {
            name: "--private-key",
            description:
              "Sign using a private key collected through a discreet interactive prompt",
          },
          {
            name: "--private-key-non-interactive",
            description:
              "Sign by passing the private key directly, this can leave the key in your shell history",
            args: { name: "PRIVATE_KEY_NON_INTERACTIVE" },
          },
          {
            name: "--password-non-interactive",
            description:
              "Directly provide the wallet password when signing with an account, this can leave the password in your shell history",
            args: { name: "PASSWORD_NON_INTERACTIVE" },
          },
        ],
        subcommands: walletSignDataSubcommands,
      },
      {
        name: "balance",
        description:
          "Present the sum of all account balances under a single wallet balance",
        options: [
          walletUnverifiedOption,
          {
            name: "--accounts",
            description:
              "Show the balance for each individual non-empty account before showing the total",
          },
        ],
      },
    ],
  },
];

const completion: Fig.Spec = {
  name: "forc",
  description: "Fuel Orchestrator",
  subcommands: [
    ...builtinSubcommands.map((subcommand) =>
      withVersion(withGlobalOptions(subcommand))
    ),
    ...pluginSubcommands.map(withVersion),
    {
      name: "help",
      description: "Print this message or the help of the given subcommand(s)",
      args: helpArgs,
    },
  ],
  options: [...globalOptions, ...infoOptions, versionOption],
};

export default completion;
