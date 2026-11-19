// Starkli v0.4.2 (latest GitHub tag of xJonathanLEI/starkli, 2026-11-19). Source: clap derive
// definitions read statically at tag v0.4.2 (src/main.rs, src/subcommands/**, src/provider.rs,
// src/signer.rs, src/fee.rs, src/casm.rs, src/verbosity.rs) plus the mdBook docs. The binary
// was not run (downloaded/cloned code is not executed in this environment).

const networkNames = ["mainnet", "sepolia", "sepolia-integration"];

const blockIdDescription = "Block number, hash, or tag (latest/pending)";
const keystorePasswordDescription =
  "Supply password from command line option instead of prompt";
const pathDescription =
  "An HD wallet derivation path with EIP-2645 standard, such as \"m/2645'/starknet'/starkli'/0'/0'/0\"";

const helpOption: Fig.Option = {
  name: ["-h", "--help"],
  description: "Print help",
  isPersistent: true,
};

// ProviderArgs (src/provider.rs)
const providerOptions: Fig.Option[] = [
  {
    name: "--rpc",
    description: "Starknet JSON-RPC endpoint",
    args: {
      name: "RPC",
    },
  },
  {
    name: "--network",
    description: "Starknet network",
    args: {
      name: "NETWORK",
      suggestions: networkNames,
    },
  },
];

// VerbosityArgs (src/verbosity.rs)
const verbosityOptions: Fig.Option[] = [
  {
    name: "--log-traffic",
    description: "Log raw request/response traffic of providers",
  },
];

// SignerArgs (src/signer.rs)
const signerOptions: Fig.Option[] = [
  {
    name: "--keystore",
    description: "Path to keystore JSON file",
    args: {
      name: "KEYSTORE",
      template: "filepaths",
    },
  },
  {
    name: "--keystore-password",
    description:
      "Supply keystore password from command line option instead of prompt",
    args: {
      name: "KEYSTORE_PASSWORD",
    },
  },
  {
    name: "--private-key",
    description: "Private key in hex in plain text",
    args: {
      name: "PRIVATE_KEY",
    },
  },
  {
    name: "--ledger-path",
    description:
      "For using Ledger hardware wallets, an HD wallet derivation path with EIP-2645 standard, such as \"m/2645'/starknet'/starkli'/0'/0'/0\"",
    args: {
      name: "LEDGER_PATH",
    },
  },
];

// AccountArgs (src/account.rs)
const accountOptions: Fig.Option[] = [
  {
    name: "--account",
    description: "Path to account config JSON file",
    args: {
      name: "ACCOUNT",
      template: "filepaths",
    },
  },
  ...signerOptions,
];

// FeeArgs (src/fee.rs). The --fee-token, --eth and --strk options are hidden
// upstream and only produce errors, so they are not listed.
const feeAmountOption = (
  name: string,
  description: string,
  argName: string
): Fig.Option => ({
  name,
  description,
  args: {
    name: argName,
  },
});

const feeOptions: Fig.Option[] = [
  feeAmountOption("--l1-gas", "Maximum L1 gas amount", "L1_GAS"),
  feeAmountOption(
    "--l1-gas-price",
    "Maximum L1 gas price in STRK (18 decimals)",
    "L1_GAS_PRICE"
  ),
  feeAmountOption(
    "--l1-gas-price-raw",
    "Maximum L1 gas price in Fri",
    "L1_GAS_PRICE_RAW"
  ),
  feeAmountOption("--l2-gas", "Maximum L2 gas amount", "L2_GAS"),
  feeAmountOption(
    "--l2-gas-price",
    "Maximum L2 gas price in STRK (18 decimals)",
    "L2_GAS_PRICE"
  ),
  feeAmountOption(
    "--l2-gas-price-raw",
    "Maximum L2 gas price in Fri",
    "L2_GAS_PRICE_RAW"
  ),
  feeAmountOption("--l1-data-gas", "Maximum L1 data gas amount", "L1_DATA_GAS"),
  feeAmountOption(
    "--l1-data-gas-price",
    "Maximum L1 data gas price in STRK (18 decimals)",
    "L1_DATA_GAS_PRICE"
  ),
  feeAmountOption(
    "--l1-data-gas-price-raw",
    "Maximum L1 data gas price in Fri",
    "L1_DATA_GAS_PRICE_RAW"
  ),
  {
    name: "--estimate-only",
    description: "Only estimate transaction fee without sending transaction",
  },
];

// CasmArgs (src/casm.rs). At most one of the compiler path, CASM file and
// CASM hash options may be used.
const casmOptions: Fig.Option[] = [
  {
    name: "--compiler-version",
    description:
      "Statically-linked Sierra compiler version. Deprecated and ignored: the right version is inferred from the bytecode",
    deprecated: true,
    args: {
      name: "COMPILER_VERSION",
    },
  },
  {
    name: "--compiler-path",
    description: "Path to the starknet-sierra-compile binary",
    exclusiveOn: ["--casm-file", "--casm-hash"],
    args: {
      name: "COMPILER_PATH",
      template: "filepaths",
    },
  },
  {
    name: "--casm-file",
    description: "Path to already-compiled CASM file",
    exclusiveOn: ["--compiler-path", "--casm-hash"],
    args: {
      name: "CASM_FILE",
      template: "filepaths",
    },
  },
  {
    name: "--casm-hash",
    description: "Override Sierra compilation and use CASM hash directly",
    exclusiveOn: ["--compiler-path", "--casm-file"],
    args: {
      name: "CASM_HASH",
    },
  },
];

// Options shared by the commands that send transactions
const simulateOption: Fig.Option = {
  name: "--simulate",
  description: "Simulate the transaction only",
};

const nonceOption: Fig.Option = {
  name: "--nonce",
  description: "Provide transaction nonce manually",
  args: {
    name: "NONCE",
  },
};

const watchOption: Fig.Option = {
  name: ["-w", "--watch"],
  description: "Wait for the transaction to confirm",
};

const pollIntervalOption: Fig.Option = {
  name: "--poll-interval",
  description: "Transaction result poll interval in milliseconds",
  args: {
    name: "POLL_INTERVAL",
    default: "5000",
  },
};

const forceOption: Fig.Option = {
  name: "--force",
  description: "Overwrite the file if it already exists",
};

const keystorePasswordOption: Fig.Option = {
  name: "--password",
  description: keystorePasswordDescription,
  args: {
    name: "PASSWORD",
  },
};

const blockIdArg: Fig.Arg = {
  name: "BLOCK_ID",
  description: blockIdDescription,
  isOptional: true,
  default: "latest",
};

const addressArg: Fig.Arg = {
  name: "ADDRESS",
  description: "Contract address",
};

const hashArg = (description: string): Fig.Arg => ({
  name: "HASH",
  description,
});

const blockOption = (): Fig.Option => ({
  name: "--block",
  description: blockIdDescription,
  args: {
    name: "BLOCK",
    default: "pending",
  },
});

const parseOption: Fig.Option = {
  name: "--parse",
  description:
    "Attempt to recover a flattened Sierra class or a compressed legacy class",
};

// Query commands that only take the provider options plus one positional argument
const queryCommand = (
  name: string | string[],
  description: string,
  args?: Fig.Arg | Fig.Arg[],
  options: Fig.Option[] = []
): Fig.Subcommand => ({
  name,
  description,
  ...(args ? { args } : {}),
  options: [...providerOptions, ...options, ...verbosityOptions],
});

const accountInitSubcommand = (options: Fig.Option[] = []): Fig.Subcommand => ({
  name: "init",
  description: "Create a new account configuration without actually deploying",
  args: {
    name: "OUTPUT",
    description: "Path to save the account config file",
    template: "filepaths",
  },
  options: [
    ...signerOptions,
    {
      name: ["-f", "--force"],
      description: "Overwrite the account config file if it already exists",
    },
    ...options,
  ],
});

const ledgerSubcommands: Fig.Subcommand[] = [
  {
    name: "get-public-key",
    description: "Retrieve public key from a Ledger device",
    args: {
      name: "PATH",
      description: pathDescription,
    },
    options: [
      {
        name: "--no-display",
        description:
          "Do not display the public key on Ledger's screen for confirmation",
      },
    ],
  },
  {
    name: "sign-hash",
    description: "Blind sign a raw hash with a Ledger device",
    args: {
      name: "HASH",
      description: "The raw hash to be signed",
    },
    options: [
      {
        name: "--path",
        description: pathDescription,
        args: {
          name: "PATH",
        },
      },
    ],
  },
  {
    name: "app-version",
    description: "Retrieve the Starknet app version on a Ledger device",
  },
];

const completionSpec: Fig.Spec = {
  name: "starkli",
  description:
    "Starkli, a ⚡ blazing ⚡ fast ⚡ CLI tool for Starknet powered by 🦀 starknet-rs 🦀",
  subcommands: [
    // Local utilities
    {
      name: "selector",
      description: "Calculate selector from name",
      args: {
        name: "NAME",
        description: "Selector name",
      },
    },
    {
      name: "class-hash",
      description:
        "Calculate class hash from any contract artifacts (Sierra, casm, legacy)",
      args: {
        name: "FILE",
        description: "Path to contract artifact file",
        template: "filepaths",
      },
    },
    {
      name: "abi",
      description:
        "Extract contract ABI from a class artifact (Sierra or legacy)",
      args: {
        name: "FILE",
        description: "Path to contract artifact file",
        template: "filepaths",
      },
      options: [
        {
          name: "--flatten",
          description:
            "Present the ABI as a flattened string in a Pythoic style",
        },
        {
          name: "--pythonic",
          description:
            "When --flatten is used, serialize the ABI in the Pythoic style instead of compact",
        },
      ],
    },
    {
      name: "to-cairo-string",
      description:
        "Encode string into felt with the Cairo short string representation",
      args: {
        name: "TEXT",
        description: "Text to be encoded in felt",
      },
      options: [
        {
          name: "--dec",
          description: "Display the encoded value in decimal representation",
        },
      ],
    },
    {
      name: "parse-cairo-string",
      description:
        "Decode string from felt with the Cairo short string representation",
      args: {
        name: "FELT",
        description:
          "Encoded string value in felt, in decimal or hexadecimal representation",
      },
    },
    {
      name: "mont",
      description: "Print the montgomery representation of a field element",
      args: {
        name: "FELT",
        description:
          "Encoded string value in felt, in decimal or hexadecimal representation",
      },
      options: [
        {
          name: "--hex",
          description: "Emit array elements in hexadecimal format",
        },
      ],
    },

    // JSON-RPC query client
    queryCommand(
      "call",
      "Call contract functions without sending transactions",
      [
        {
          name: "CONTRACT_ADDRESS",
          description: "Contract address",
        },
        {
          name: "SELECTOR",
          description: "Name of the function being called",
        },
        {
          name: "CALLDATA",
          description: "Raw function call arguments",
          isOptional: true,
          isVariadic: true,
        },
      ],
      [blockOption()]
    ),
    queryCommand(
      ["transaction", "tx"],
      "Get Starknet transaction by hash",
      hashArg("Transaction hash")
    ),
    queryCommand(["block-number", "bn"], "Get latest block number"),
    queryCommand("block-hash", "Get latest block hash"),
    queryCommand("block", "Get Starknet block", blockIdArg, [
      {
        name: "--full",
        description: "Fetch full transactions instead of hashes only",
      },
      {
        name: "--receipts",
        description: "Fetch receipts alongside transactions",
      },
    ]),
    queryCommand(
      "block-time",
      "Get Starknet block timestamp only",
      blockIdArg,
      [
        {
          name: "--unix",
          description: "Show block time in Unix timestamp format",
          exclusiveOn: ["--rfc2822"],
        },
        {
          name: "--rfc2822",
          description: "Show block time in RFC 2822 format",
          exclusiveOn: ["--unix"],
        },
      ]
    ),
    queryCommand(
      "state-update",
      "Get state update from a certain block",
      blockIdArg
    ),
    queryCommand(
      "block-traces",
      "Get all traces from a certain block",
      blockIdArg
    ),
    queryCommand(
      ["status", "tx-status", "transaction-status"],
      "Get transaction status by hash",
      hashArg("Transaction hash")
    ),
    queryCommand(
      ["receipt", "tx-receipt", "transaction-receipt"],
      "Get transaction receipt by hash",
      hashArg("Transaction hash")
    ),
    queryCommand(
      "trace",
      "Get transaction trace by hash",
      hashArg("Transaction hash")
    ),
    queryCommand(
      "chain-id",
      "Get Starknet network ID",
      {
        name: "BLOCK_ID",
        description: `${blockIdDescription}. Accepted but unused`,
        isOptional: true,
        default: "latest",
      },
      [
        {
          name: "--no-decode",
          description: "Do not show the decoded text",
        },
        {
          name: "--dec",
          description:
            "Display the decimal instead of hexadecimal representation",
        },
      ]
    ),
    queryCommand(
      "balance",
      "Get native gas token (currently ETH) balance",
      {
        name: "ACCOUNT_ADDRESS",
        description: "Account address",
      },
      [
        {
          name: "--raw",
          description: "Display raw balance amount in integer",
          exclusiveOn: ["--hex"],
        },
        {
          name: "--hex",
          description: "Display balance amount in hexadecimal representation",
          exclusiveOn: ["--raw"],
        },
      ]
    ),
    queryCommand("nonce", "Get nonce for a certain contract", addressArg),
    queryCommand(
      "storage",
      "Get storage value for a slot at a contract",
      [
        addressArg,
        {
          name: "KEY",
          description: "Storage key",
        },
      ],
      [blockOption()]
    ),
    queryCommand(
      "class-hash-at",
      "Get contract class hash deployed at a certain address",
      addressArg
    ),
    queryCommand(
      "class-by-hash",
      "Get contract class by hash",
      hashArg("Class hash"),
      [parseOption]
    ),
    queryCommand(
      "class-at",
      "Get contract class deployed at a certain address",
      addressArg,
      [parseOption]
    ),
    queryCommand("syncing", "Get node syncing status"),
    queryCommand("spec-version", "Get node spec version"),

    // Signer management
    {
      name: "signer",
      description: "Signer management commands",
      subcommands: [
        {
          name: "keystore",
          description: "Keystore management commands",
          subcommands: [
            {
              name: "new",
              description: "Randomly generate a new keystore",
              args: {
                name: "FILE",
                description: "Path to save the JSON keystore",
                template: "filepaths",
              },
              options: [keystorePasswordOption, forceOption],
            },
            {
              name: "from-key",
              description:
                "Create a keystore file from an existing private key",
              args: {
                name: "FILE",
                description: "Path to save the JSON keystore",
                template: "filepaths",
              },
              options: [
                forceOption,
                {
                  name: "--private-key-stdin",
                  description:
                    "Take the private key from stdin instead of prompt",
                },
                keystorePasswordOption,
              ],
            },
            {
              name: "inspect",
              description: "Check the public key of an existing keystore file",
              args: {
                name: "FILE",
                description: "Path to the JSON keystore",
                template: "filepaths",
              },
              options: [
                keystorePasswordOption,
                {
                  name: "--raw",
                  description: "Print the public key only",
                },
              ],
            },
            {
              name: "inspect-private",
              description: "Check the private key of an existing keystore file",
              args: {
                name: "FILE",
                description: "Path to the JSON keystore",
                template: "filepaths",
              },
              options: [
                keystorePasswordOption,
                {
                  name: "--raw",
                  description: "Print the private key only",
                },
              ],
            },
          ],
        },
        {
          name: "ledger",
          description: "Ledger hardware wallet management commands",
          subcommands: ledgerSubcommands,
        },
        {
          name: "gen-keypair",
          description: "Randomly generate a new key pair",
        },
      ],
    },
    {
      name: "ledger",
      description: "Shortcut for `starkli signer ledger`",
      subcommands: ledgerSubcommands,
    },
    {
      name: ["eip2645", "erc2645"],
      description: "EIP-2645 helper commands",
      subcommands: [
        {
          name: "echo",
          description:
            "Print an EIP-2645 path in the universally accepted standard format",
          args: {
            name: "PATH",
            description: pathDescription,
          },
        },
      ],
    },

    // Account management
    {
      name: "account",
      description: "Account management commands",
      subcommands: [
        {
          name: "fetch",
          description:
            "Fetch account config from an already deployed account contract",
          args: addressArg,
          options: [
            ...providerOptions,
            forceOption,
            {
              name: "--output",
              description: "Path to save the account config file",
              args: {
                name: "OUTPUT",
                template: "filepaths",
              },
            },
            ...verbosityOptions,
          ],
        },
        {
          name: "deploy",
          description:
            "Deploy account contract with a DeployAccount transaction",
          args: {
            name: "FILE",
            description: "Path to the account config file",
            template: "filepaths",
          },
          options: [
            ...providerOptions,
            ...signerOptions,
            ...feeOptions,
            simulateOption,
            nonceOption,
            pollIntervalOption,
            ...verbosityOptions,
          ],
        },
        {
          name: "oz",
          description: "Create and manage OpenZeppelin account contracts",
          subcommands: [
            accountInitSubcommand([
              {
                name: ["-c", "--class-hash"],
                description: "Custom account class hash",
                args: {
                  name: "CLASS_HASH",
                },
              },
            ]),
          ],
        },
        {
          name: "argent",
          description: "Create and manage Argent X account contracts",
          subcommands: [accountInitSubcommand()],
        },
        {
          name: "braavos",
          description: "Create and manage Braavos account contracts",
          subcommands: [accountInitSubcommand()],
        },
      ],
    },

    // Sending out transactions
    {
      name: "invoke",
      description: "Send an invoke transaction from an account contract",
      args: {
        name: "CALLS",
        description:
          "One or more contract calls. See documentation for more details",
        isOptional: true,
        isVariadic: true,
      },
      options: [
        ...providerOptions,
        ...accountOptions,
        ...feeOptions,
        simulateOption,
        nonceOption,
        watchOption,
        pollIntervalOption,
        ...verbosityOptions,
      ],
    },
    {
      name: "declare",
      description: "Declare a contract class",
      args: {
        name: "FILE",
        description: "Path to contract artifact file",
        template: "filepaths",
      },
      options: [
        ...providerOptions,
        ...accountOptions,
        ...casmOptions,
        ...feeOptions,
        {
          name: "--no-abi",
          description: "Do not publish the ABI of the class",
        },
        simulateOption,
        nonceOption,
        watchOption,
        pollIntervalOption,
        ...verbosityOptions,
      ],
    },
    {
      name: "deploy",
      description: "Deploy contract via the Universal Deployer Contract",
      args: [
        {
          name: "CLASS_HASH",
          description: "Class hash",
        },
        {
          name: "CTOR_ARGS",
          description: "Raw constructor arguments",
          isOptional: true,
          isVariadic: true,
        },
      ],
      options: [
        ...providerOptions,
        ...accountOptions,
        {
          name: "--not-unique",
          description: "Do not derive contract address from deployer address",
        },
        ...feeOptions,
        simulateOption,
        {
          name: "--salt",
          description: "Use the given salt to compute contract deploy address",
          args: {
            name: "SALT",
          },
        },
        nonceOption,
        watchOption,
        pollIntervalOption,
        ...verbosityOptions,
      ],
    },

    // Misc
    {
      name: "completions",
      description: "Generate shell completions script",
      args: {
        name: "SHELL",
        description: "Shell name",
        suggestions: ["bash", "elvish", "fish", "powershell", "zsh"],
      },
    },

    // Experimental
    {
      name: "lab",
      description: "Experimental commands for fun and profit",
      subcommands: [
        {
          name: "mine-udc-salt",
          description:
            "Mine UDC contract deployment salt for specific address prefix and/or suffix",
          args: [
            {
              name: "CLASS_HASH",
              description: "Class hash",
            },
            {
              name: "CTOR_ARGS",
              description:
                "Raw constructor arguments (argument resolution not supported yet)",
              isOptional: true,
              isVariadic: true,
            },
          ],
          options: [
            {
              name: "--prefix",
              description:
                "Prefix bits in BINARY representation, ASSUMING 252-BIT ADDRESSES",
              isRequired: true,
              args: {
                name: "PREFIX",
              },
            },
            {
              name: "--suffix",
              description: "Suffix bits in BINARY representation",
              isRequired: true,
              args: {
                name: "SUFFIX",
              },
            },
            {
              name: "--not-unique",
              description:
                "Do not derive contract address from deployer address",
            },
            {
              name: "--deployer-address",
              description:
                "Deployer address. Needed if and only if not using --no-unique",
              args: {
                name: "DEPLOYER_ADDRESS",
              },
            },
            {
              name: "--jobs",
              description: "The number of parallel jobs to run",
              args: {
                name: "JOBS",
                default: "1",
              },
            },
          ],
        },
      ],
    },
  ],
  options: [
    {
      name: ["-V", "--version"],
      description: "Print version info and exit",
    },
    {
      name: ["-v", "--verbose"],
      description: "Use verbose output (currently only applied to version)",
    },
    helpOption,
  ],
};

export default completionSpec;
