// ganache-cli: Ganache v7.9.2 (npm `ganache`, last release; its `ganache-cli` bin is the same CLI, 2026-11-19).
// The old `ganache-cli` npm package (6.12.2) is deprecated in favour of `ganache`; its v6-only flags are removed here.
// Source: trufflesuite/ganache at tag v7.9.2 (last commit 2023-12-21), read statically, binary not run:
// packages/cli/src/{args,cli,flavors,helpers}.ts and the option definitions in packages/ethereum/options/src
// and packages/flavor/src/options. The v6 flag names that v7 still accepts are kept as deprecated aliases.

/**
 * Builds the option for a namespaced `--namespace.option` flag, plus one
 * deprecated option per legacy (ganache-cli v6) alias that v7 still accepts.
 */
const namespaced = (
  long: string,
  short: string | undefined,
  legacyAliases: string[],
  option: Omit<Fig.Option, "name">
): Fig.Option[] => {
  const flag = `--${long}`;
  return [
    { ...option, name: short ? [`-${short}`, flag] : flag },
    ...legacyAliases.map((alias): Fig.Option => ({
      name: `--${alias}`,
      description: `Deprecated alias of ${flag}`,
      args: option.args,
      isRepeatable: option.isRepeatable,
      deprecated: true,
    })),
  ];
};

const booleanArg = (defaultValue: "true" | "false"): Fig.Arg => ({
  name: "boolean",
  isOptional: true,
  suggestions: ["true", "false"],
  default: defaultValue,
});

const quantityArg = (name: string, defaultValue: string): Fig.Arg => ({
  name,
  default: defaultValue,
});

const HARDFORKS = [
  "constantinople",
  "byzantium",
  "petersburg",
  "istanbul",
  "muirGlacier",
  "berlin",
  "london",
  "arrowGlacier",
  "grayGlacier",
  "merge",
  "shanghai",
];

const FORK_NETWORKS = ["mainnet", "goerli", "görli", "sepolia"];

const forkTextOption = (name: string, description: string): Fig.Option => ({
  name: `--fork.${name}`,
  description,
  args: { name },
});

const completionSpec: Fig.Spec = {
  name: "ganache-cli",
  description: "Fast Ethereum RPC client for testing and development",
  subcommands: [
    {
      name: "instances",
      description: "Manage instances of Ganache running in detached mode",
      subcommands: [
        {
          name: "list",
          description: "List instances running in detached mode",
        },
        {
          name: "stop",
          description: "Stop the instance specified by name",
          args: { name: "name" },
        },
      ],
    },
  ],
  options: [
    // Chain
    ...namespaced("chain.allowUnlimitedContractSize", undefined, [], {
      description:
        "Allows unlimited contract sizes. Setting this to true will cause ganache to behave differently than production environments",
    }),
    ...namespaced("chain.allowUnlimitedInitCodeSize", undefined, [], {
      description:
        "Allows unlimited initcode (transaction.data) sizes. Setting this to true will cause ganache to behave differently than production environments",
    }),
    ...namespaced("chain.asyncRequestProcessing", undefined, [], {
      description:
        "When set to false only one request will be processed at a time",
      args: booleanArg("true"),
    }),
    ...namespaced("chain.chainId", undefined, [], {
      description: "The currently configured chain id",
      args: quantityArg("chain id", "1337"),
    }),
    ...namespaced("chain.networkId", "i", ["networkId"], {
      description:
        "The id of the network returned by the RPC method net_version. Defaults to the system time at process start or the network id of the forked blockchain if configured",
      args: { name: "network id" },
    }),
    ...namespaced("chain.time", "t", ["time"], {
      description:
        "Date (ISO 8601 or timestamp) that the first block should start",
      args: { name: "date" },
    }),
    ...namespaced("chain.hardfork", "k", ["hardfork"], {
      description: "Set the hardfork rules for the EVM",
      args: {
        name: "hardfork",
        default: "shanghai",
        suggestions: HARDFORKS,
      },
    }),
    ...namespaced("chain.vmErrorsOnRPCResponse", undefined, [], {
      description:
        "Whether to report runtime errors from EVM code as RPC errors",
    }),

    // Database
    ...namespaced("database.dbPath", undefined, ["db", "db_path"], {
      description: "Specify a path to a directory to save the chain database",
      args: { name: "folder", template: "folders" },
    }),

    // Logging
    ...namespaced("logging.debug", undefined, [], {
      description: "Log EVM opcodes",
    }),
    ...namespaced("logging.quiet", "q", ["quiet"], {
      description:
        "Disable writing logs to logger.log (stdout by default), run without any logs",
    }),
    ...namespaced("logging.verbose", "v", ["verbose"], {
      description: "Log detailed RPC requests",
    }),
    ...namespaced("logging.file", undefined, [], {
      description: "The file to append logs to",
      args: { name: "file", template: "filepaths" },
    }),

    // Miner
    ...namespaced("miner.blockTime", "b", ["blockTime"], {
      description:
        'Sets the blockTime in seconds for automatic mining. A blockTime of 0 enables "instamine mode", where new executable transactions will be mined instantly',
      args: quantityArg("seconds", "0"),
    }),
    ...namespaced("miner.timestampIncrement", undefined, [], {
      description:
        'The amount of time, in seconds, to add to the timestamp of each new block header. By default the value is "clock", which uses your system clock time as the timestamp for each block',
      args: {
        name: "seconds",
        default: "clock",
        suggestions: ["clock"],
      },
    }),
    ...namespaced("miner.defaultGasPrice", "g", ["gasPrice"], {
      description:
        "Sets the default gas price in WEI for transactions if not otherwise specified",
      args: quantityArg("price", "0x77359400"),
    }),
    ...namespaced("miner.blockGasLimit", "l", ["gasLimit"], {
      description: "Sets the block gas limit in WEI",
      args: quantityArg("limit", "0x1c9c380"),
    }),
    ...namespaced("miner.defaultTransactionGasLimit", undefined, [], {
      description:
        'Sets the default transaction gas limit in WEI. Set to "estimate" to use an estimate (slows down transaction execution by 40%+)',
      args: {
        name: "limit",
        default: "0x15f90",
        suggestions: ["estimate"],
      },
    }),
    ...namespaced("miner.difficulty", undefined, [], {
      description:
        "Sets the block difficulty. Value is always 0 after the merge hardfork",
      args: quantityArg("difficulty", "0x1"),
    }),
    ...namespaced("miner.callGasLimit", undefined, [], {
      description:
        "Sets the transaction gas limit in WEI for eth_call and eth_estimateGas calls",
      args: quantityArg("limit", "0x2faf080"),
    }),
    ...namespaced("miner.instamine", undefined, ["instamine"], {
      description:
        'Set the instamine mode to either "eager" (a transaction is included in a block before its hash is returned) or "strict" (the hash is returned before the transaction is included in a block). Has no effect if blockTime is not 0',
      args: {
        name: "mode",
        default: "eager",
        suggestions: ["eager", "strict"],
      },
    }),
    ...namespaced("miner.coinbase", undefined, [], {
      description: "Sets the address where mining rewards will go",
      args: {
        name: "address",
        default: "0x0000000000000000000000000000000000000000",
      },
    }),
    ...namespaced("miner.extraData", undefined, [], {
      description: "Set the extraData block header field a miner can include",
      args: { name: "data", default: "0x" },
    }),
    ...namespaced("miner.priceBump", undefined, [], {
      description:
        "Minimum price bump percentage needed to replace a transaction that already exists in the transaction pool",
      args: quantityArg("percentage", "10"),
    }),

    // Wallet
    ...namespaced("wallet.accounts", undefined, ["account"], {
      description:
        "Account data in the form <private_key>,<initial_balance>, can be specified multiple times. Private keys must be 0x-prefixed 64 character hex strings, the balance is the initial balance in wei (integer or 0x-prefixed hex)",
      args: { name: "private_key,balance", isVariadic: true },
      isRepeatable: true,
      exclusiveOn: ["-a", "--wallet.totalAccounts"],
    }),
    ...namespaced("wallet.totalAccounts", "a", ["accounts"], {
      description: "Number of accounts to generate at startup",
      args: quantityArg("number", "10"),
      exclusiveOn: ["--wallet.accounts"],
    }),
    ...namespaced("wallet.deterministic", "d", ["deterministic"], {
      description: "Use pre-defined, deterministic seed",
      exclusiveOn: ["-m", "--wallet.mnemonic", "-s", "--wallet.seed"],
    }),
    ...namespaced("wallet.seed", "s", ["seed"], {
      description: "Seed to use to generate a mnemonic",
      args: { name: "seed" },
      exclusiveOn: ["-m", "--wallet.mnemonic", "-d", "--wallet.deterministic"],
    }),
    ...namespaced("wallet.mnemonic", "m", ["mnemonic"], {
      description:
        "Use a specific HD wallet mnemonic to generate initial addresses",
      args: { name: "mnemonic" },
      exclusiveOn: ["-s", "--wallet.seed", "-d", "--wallet.deterministic"],
    }),
    ...namespaced("wallet.unlockedAccounts", "u", ["unlock"], {
      description:
        "Array of addresses or address indexes specifying which accounts should be unlocked",
      args: { name: "address or account index", isVariadic: true },
      isRepeatable: true,
    }),
    ...namespaced("wallet.lock", "n", ["secure", "lock"], {
      description:
        "Lock available accounts by default (good for third party transaction signing)",
    }),
    ...namespaced("wallet.passphrase", undefined, ["passphrase"], {
      description: "Passphrase to use when locking accounts",
      args: { name: "passphrase" },
    }),
    ...namespaced(
      "wallet.accountKeysPath",
      undefined,
      ["account_keys_path", "acctKeys"],
      {
        description:
          "Specifies a file to save accounts and private keys to, for testing",
        args: { name: "file", template: "filepaths" },
      }
    ),
    ...namespaced("wallet.defaultBalance", "e", ["defaultBalanceEther"], {
      description: "The default account balance, specified in ether",
      args: quantityArg("ether", "1000"),
    }),
    ...namespaced("wallet.hdPath", undefined, [], {
      description:
        "The hierarchical deterministic path to use when generating accounts",
      args: { name: "path", default: "m,44',60',0',0" },
    }),

    // Fork
    ...namespaced("fork.url", "f", [], {
      description:
        'Fork from another currently running Ethereum client at a given block. Input should be the URL of the node, e.g. "http://localhost:1337". Specify the block to fork from with an @ sign: "http://localhost:1337@8675309". Basic Authentication credentials can be given in the URL or with --fork.username and --fork.password',
      args: { name: "url" },
      exclusiveOn: ["--fork.network"],
    }),
    {
      name: "--fork",
      description:
        "Shorthand for --fork.url (or --fork.network when given a network name). Without a value forks Mainnet at the latest block",
      args: {
        name: "url or network",
        isOptional: true,
        suggestions: FORK_NETWORKS,
      },
    },
    ...namespaced("fork.network", undefined, [], {
      description:
        "A network name to fork from; uses Infura's archive nodes. Use the shorthand --fork to fork from Mainnet at the latest block",
      args: { name: "network", suggestions: FORK_NETWORKS },
      exclusiveOn: ["-f", "--fork.url"],
    }),
    {
      name: "--fork.blockNumber",
      description: "Block number the provider should fork from",
      args: {
        name: "block number",
        default: "latest",
        suggestions: ["latest"],
      },
    },
    {
      name: "--fork.preLatestConfirmations",
      description:
        'When fork.blockNumber is set to "latest" (default), the number of blocks before the remote node\'s "latest" block to fork from',
      args: quantityArg("number", "5"),
    },
    forkTextOption(
      "username",
      "Username to use for Basic Authentication. Does not require setting fork.password"
    ),
    forkTextOption(
      "password",
      "Password to use for Basic Authentication. Does not require setting fork.username"
    ),
    forkTextOption(
      "jwt",
      "Encoded JSON Web Token (JWT) used for authenticating to some servers"
    ),
    forkTextOption(
      "userAgent",
      "The User-Agent header sent to the fork on each request"
    ),
    forkTextOption(
      "origin",
      "The Origin header sent to the fork on each request"
    ),
    {
      name: "--fork.headers",
      description:
        "Headers to supply on each request to the forked provider, in the form Name: value. Headers set here override headers set by other options, unless otherwise specified",
      args: { name: "header", isVariadic: true },
      isRepeatable: true,
    },
    {
      name: "--fork.requestsPerSecond",
      description:
        "Restrict the number of requests per second sent to the fork provider. 0 means no limit is applied",
      args: quantityArg("number", "0"),
    },
    {
      name: "--fork.disableCache",
      description: "Disables caching of all forking requests",
    },
    {
      name: "--fork.deleteCache",
      description: "Deletes the persistent cache before starting",
    },

    // Server
    ...namespaced("server.ws", undefined, [], {
      description: "Enable a websocket server",
      args: booleanArg("true"),
    }),
    ...namespaced("server.wsBinary", undefined, [], {
      description:
        "Whether or not websockets should respond with binary data (ArrayBuffers) or strings",
      args: {
        name: "mode",
        default: "auto",
        suggestions: ["true", "false", "auto"],
      },
    }),
    ...namespaced("server.rpcEndpoint", undefined, [], {
      description:
        "Defines the endpoint route the HTTP and WebSocket servers will listen on",
      args: { name: "endpoint", default: "/" },
    }),
    ...namespaced("server.chunkSize", undefined, [], {
      description:
        "Approximate size of each chunk of a chunked transfer-encoding HTTP response or fragmented WebSocket send",
      args: quantityArg("bytes", "1048576"),
    }),
    ...namespaced("server.host", "h", ["host"], {
      description:
        "Hostname to listen on. Defaults to 127.0.0.1 (0.0.0.0 when the DOCKER environment variable is true)",
      args: { name: "hostname", default: "127.0.0.1" },
    }),
    ...namespaced("server.port", "p", ["port"], {
      description: "Port to listen on",
      args: quantityArg("port number", "8545"),
    }),

    // General
    {
      name: "--flavor",
      description:
        "Load an installed npm package as a Ganache flavor, e.g. ganache --flavor @ganache/filecoin",
      args: { name: "flavor" },
    },
    {
      name: ["-D", "--detach"],
      description:
        "Run Ganache in detached (daemon) mode. See `ganache instances --help` for how to manage detached instances",
    },
    {
      name: ["-?", "--help"],
      description: "Show help",
    },
    {
      name: "--version",
      description: "Show version number",
    },
  ],
};

export default completionSpec;
