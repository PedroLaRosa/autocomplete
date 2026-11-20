// Truffle v5.11.5 (npm latest, published 2023-09-13; no later release or tag, 2026-11-20).
// Source: command meta files in the @truffle/core 5.11.5 npm tarball
// (lib/commands/*/meta.js, lib/commands/commands.js, lib/global-command-options.js),
// read statically (not run). Dynamic `truffle preserve` recipe flags come from
// the @truffle/preserve-to-{ipfs,filecoin,buckets} plugin manifests.
const truffleCommands: Fig.Suggestion[] = [
  { name: "build" },
  { name: "call" },
  { name: "compile" },
  { name: "config" },
  { name: "console" },
  { name: "create" },
  { name: "dashboard" },
  { name: "db" },
  { name: "debug" },
  { name: "deploy" },
  { name: "develop" },
  { name: "exec" },
  { name: "help" },
  { name: "init" },
  { name: "migrate" },
  { name: "networks" },
  { name: "obtain" },
  { name: "opcode" },
  { name: "preserve" },
  { name: "run" },
  { name: "test" },
  { name: "unbox" },
  { name: "version" },
  { name: "watch" },
];

// Global options that individual commands opt into (lib/global-command-options.js)
const networkOption: Fig.Option = {
  name: "--network",
  description:
    "Specify the network to use. Network name must exist in the configuration",
  args: {
    name: "name",
  },
};

const configOption: Fig.Option = {
  name: "--config",
  description:
    "Specify configuration file to be used. The default is truffle-config.js",
  args: {
    name: "file",
    template: "filepaths",
  },
};

const fromOption: Fig.Option = {
  name: "--from",
  description:
    "Specify the default account from which to make calls or send transactions",
  args: {
    name: "account",
  },
};

const quietOption: Fig.Option = {
  name: "--quiet",
  description: "Suppress excess logging output",
};

const urlOption = (description: string): Fig.Option => ({
  name: "--url",
  description,
  args: {
    name: "provider_url",
  },
});

const verboseRpcOption: Fig.Option = {
  name: "--verbose-rpc",
  description: "Log communication between Truffle and the Ethereum client",
};

const compileAllOption: Fig.Option = {
  name: "--compile-all",
  description:
    "Compile all contracts instead of intelligently choosing which contracts need to be compiled",
};

const requireOptions: Fig.Option[] = [
  {
    name: ["--require", "-r"],
    description: "Preload console environment from required JavaScript file",
    args: {
      name: "file",
      description:
        "The default export must be an object with named keys that will be used to populate the console environment",
      template: "filepaths",
    },
  },
  {
    name: "--require-none",
    description:
      "Do not load any user-defined JavaScript into the console environment. This option takes precedence over --require, -r, and values provided for console.require in your project's truffle-config.js",
  },
];

const migrateOptions: Fig.Option[] = [
  {
    name: "--reset",
    description:
      "Run all migrations from the beginning, instead of running from the last completed migration",
  },
  {
    name: ["--f", "-f"],
    description:
      "Run contracts from a specific migration. The number refers to the prefix of the migration file",
    args: {
      name: "number",
    },
  },
  {
    name: "--to",
    description:
      "Run contracts to a specific migration. The number refers to the prefix of the migration file",
    args: {
      name: "number",
    },
  },
  compileAllOption,
  {
    name: "--compile-none",
    description: "Do not compile any contracts before migrating",
  },
  verboseRpcOption,
  {
    name: "--interactive",
    description:
      "Prompt to confirm that the user wants to proceed after the dry run",
  },
  {
    name: "--dry-run",
    description: "Only perform a test or 'dry run' migration",
  },
  {
    name: "--skip-dry-run",
    description: "Do not run a test or 'dry run' migration",
  },
  {
    name: "--describe-json",
    description: "Adds extra verbosity to the status of an ongoing migration",
  },
  {
    name: "--save",
    description: "Specify whether the migration will save on chain",
    hidden: true,
  },
  networkOption,
  configOption,
  quietOption,
];

const completionSpec: Fig.Spec = {
  name: "truffle",
  description:
    "A world class development environment, testing framework and asset pipeline for blockchains using the Ethereum Virtual Machine (EVM), aiming to make life as a developer easier",
  subcommands: [
    {
      name: "build",
      description: "Execute build pipeline (if configuration present)",
    },
    {
      name: "call",
      description: "Call read-only contract function with arguments",
      args: [
        {
          name: "contract",
          description:
            "The address (contract-address) or name (contract-name) of the contract to be called",
        },
        {
          name: "function",
          description:
            "The name of the function to be called (function-name) or its full ABI signature, not selector (function-signature)",
        },
        {
          name: "args",
          description: "List of arguments to be passed to the function",
          isOptional: true,
          isVariadic: true,
        },
      ],
      options: [
        {
          name: ["--fetch-external", "-x"],
          description:
            "Allows Truffle to fetch verified source for the contract being called; useful only when the contract is supplied by address",
        },
        urlOption(
          "Connects to a specified provider given via URL, ignoring networks in config"
        ),
        {
          ...networkOption,
          description:
            "The network to connect to, as specified in the Truffle config",
        },
        {
          name: ["--block-number", "-b"],
          description: "Specifies the block for the function to be called in",
          args: {
            name: "block_number",
            default: "latest",
          },
        },
        fromOption,
        configOption,
      ],
    },
    {
      name: "compile",
      description: "Compile contract source files",
      args: {
        name: "source",
        description: "Source files to compile",
        template: "filepaths",
        isOptional: true,
        isVariadic: true,
      },
      options: [
        {
          name: "--list",
          description:
            "List all recent stable releases from solc-bin. If filter is specified then it will display only that type of release or docker tags",
          args: {
            name: "filter",
            description:
              "The filter parameter must be one of the following: prereleases, releases, latestRelease or docker",
            isOptional: true,
            suggestions: [
              {
                name: "prereleases",
              },
              {
                name: "releases",
              },
              {
                name: "latestRelease",
              },
              {
                name: "docker",
              },
            ],
          },
        },
        {
          name: "--all",
          description:
            "Compile all contracts instead of only the contracts changed since last compile",
        },
        {
          name: "--compiler",
          description:
            "Specify a single compiler to use (e.g. --compiler=solc). Specify none to skip compilation",
          args: {
            name: "compiler-name",
          },
        },
        {
          name: "--save-intermediate",
          description:
            "Save the raw compiler results into the output file, overwriting any existing content",
          hidden: true,
          args: {
            name: "output-file",
            template: "filepaths",
          },
        },
        configOption,
        quietOption,
      ],
    },
    {
      name: "config",
      description: "Set user-level configuration options",
      subcommands: [
        {
          name: "get",
          description: "Get a Truffle configuration option value",
          args: {
            name: "key",
          },
        },
        {
          name: "set",
          description: "Set a Truffle configuration option value",
          args: [
            {
              name: "key",
            },
            {
              name: "value-for-set",
            },
          ],
        },
        {
          name: "list",
          description: "List all Truffle config values",
        },
      ],
      options: [
        {
          name: "--enable-analytics",
          description: "Enable Truffle to send usage data to Google Analytics",
          exclusiveOn: ["--disable-analytics"],
        },
        {
          name: "--disable-analytics",
          description:
            "Disable Truffle's ability to send usage data to Google Analytics",
          exclusiveOn: ["--enable-analytics"],
        },
      ],
    },
    {
      name: "console",
      description:
        "Run a console with contract abstractions and commands available",
      options: [
        {
          ...urlOption(
            "Creates a provider using the given URL and connects to the network. This can be used outside of a Truffle project"
          ),
          exclusiveOn: ["--network"],
        },
        {
          ...networkOption,
          description:
            "The network to connect to, as specified in the Truffle config",
          exclusiveOn: ["--url"],
        },
        verboseRpcOption,
        ...requireOptions,
        configOption,
      ],
    },
    {
      name: "create",
      description: "Helper to create new contracts, migrations and tests",
      args: [
        {
          name: "artifact_type",
          description:
            "Create a new artifact where artifact_type is one of the following: contract, migration, test or all. The new artifact is created along with one (or all) of the following files: `contracts/ArtifactName.sol`, `migrations/####_artifact_name.js` or `tests/artifact_name.js`",
          suggestions: [
            {
              name: "contract",
            },
            {
              name: "migration",
            },
            {
              name: "test",
            },
            {
              name: "all",
            },
          ],
        },
        {
          name: "ArtifactName",
          description: "Name of new artifact",
        },
      ],
    },
    {
      name: "dashboard",
      description:
        "Start Truffle Dashboard to sign development transactions using browser wallet",
      options: [
        {
          name: "--port",
          description:
            "Start the dashboard and RPC endpoint on a specific port",
          args: {
            name: "number",
          },
        },
        {
          name: "--host",
          description:
            "Start the dashboard and RPC endpoint on a specific host",
          args: {
            name: "string",
          },
        },
        {
          name: "--no-auto-open",
          description: "Disable opening dashboard in default browser on start",
        },
        {
          name: "--verbose",
          description:
            "Log debug information from the Dashboard server and message bus",
        },
      ],
    },
    {
      name: "db",
      description: "Database interface commands",
      subcommands: [
        {
          name: "serve",
          description: "Start Truffle's GraphQL UI playground",
        },
        {
          name: "query",
          description: "Query @truffle/db",
          args: {
            name: "query",
            description: "GraphQL query to run",
          },
        },
      ],
    },
    {
      name: "debug",
      description: "Interactively debug any transaction on the blockchain",
      args: {
        name: "transaction_hash",
        isOptional: true,
        description:
          "Transaction ID to use for debugging. Mandatory if --fetch-external is passed",
      },
      options: [
        {
          ...networkOption,
          description:
            "The network to connect to, as specified in the Truffle config",
          exclusiveOn: ["--url"],
        },
        {
          ...urlOption(
            "Connects to a specified provider given via URL, ignoring networks in config. This option allows using the debugger outside of a Truffle project"
          ),
          exclusiveOn: ["--network"],
        },
        {
          name: ["--fetch-external", "-x"],
          description:
            "Allows debugging of external contracts with verified sources. When used, a transaction hash is required",
        },
        {
          name: "--no-ens",
          description:
            "Disables ENS reverse resolution when decoding addresses",
          exclusiveOn: ["--registry"],
        },
        {
          name: "--registry",
          description:
            "Allows setting a custom registry for performing reverse ENS resolution, or setting such a registry at all on lesser-known networks",
          args: {
            name: "registry_address",
          },
          exclusiveOn: ["--no-ens"],
        },
        {
          name: "--compile-tests",
          description:
            "Allows debugging of Solidity test contracts from the test directory. Implies --compile-all",
          exclusiveOn: ["--compile-all", "--compile-none"],
        },
        {
          name: "--compile-all",
          description:
            "Forces the debugger to recompile all contracts even if it detects that it can use the artifacts",
          exclusiveOn: ["--compile-tests", "--compile-none"],
        },
        {
          name: "--compile-none",
          description:
            "Forces the debugger to use artifacts even if it detects a problem. Dangerous; may cause errors",
          exclusiveOn: ["--compile-tests", "--compile-all"],
        },
        configOption,
      ],
    },
    {
      name: "deploy",
      description: "Alias for migrate. See migrate for details",
      options: migrateOptions,
    },
    {
      name: "develop",
      description: "Open a console with a local development blockchain",
      options: [
        {
          name: "--log",
          description:
            "Start/Connect to a Truffle develop session and log all RPC activity. You will need to open a different Truffle develop or console session to interact via the repl",
        },
        ...requireOptions,
        configOption,
      ],
    },
    {
      name: "exec",
      description: "Execute a JS module within this Truffle environment",
      args: {
        name: "script.js",
        description:
          "JavaScript file to be executed. Can include path information if the script does not exist in the current directory",
        template: "filepaths",
      },
      options: [
        {
          name: "--compile",
          description: "Compile contracts before executing the script",
        },
        networkOption,
        configOption,
      ],
    },
    {
      name: "help",
      description:
        "List all commands or provide information about a specific command",
      args: [
        {
          name: "command",
          description: "Display usage information about the specified command",
          isOptional: true,
          suggestions: truffleCommands,
        },
        {
          name: "subCommand",
          description:
            "Display usage information about the specified subcommand (only db has subcommands)",
          isOptional: true,
          suggestions: [{ name: "serve" }, { name: "query" }],
        },
      ],
    },
    {
      name: "init",
      description: "Initialize new and empty Ethereum project",
      options: [
        {
          name: "--force",
          description:
            "Initialize project in the current directory regardless of its state. Be careful, this will potentially overwrite files that exist in the directory",
          isDangerous: true,
        },
      ],
    },
    {
      name: "install",
      description:
        "Removed upstream: the ethpm integration was disabled and the command only prints a notice",
      deprecated: true,
    },
    {
      name: "migrate",
      description: "Run migrations to deploy contracts",
      options: migrateOptions,
    },
    {
      name: "networks",
      description: "Show addresses for deployed contracts on each network",
      options: [
        {
          name: "--clean",
          description:
            "Remove all network artifacts that aren't associated with a named network",
        },
      ],
    },
    {
      name: "obtain",
      description: "Fetch and cache a specified compiler",
      options: [
        {
          name: "--solc",
          description:
            "Download and cache a version of the solc compiler. (required)",
          isRequired: true,
          args: {
            name: "version",
          },
        },
        quietOption,
      ],
    },
    {
      name: "opcode",
      description: "Print the compiled opcodes for a given contract",
      args: {
        name: "contract_name",
        description:
          "Name of the contract to print opcodes for. Must be a contract name, not a file name",
      },
    },
    {
      name: "preserve",
      description:
        "Save data to decentralized storage platforms like IPFS and Filecoin",
      args: {
        name: "target-path",
        template: "filepaths",
        isVariadic: true,
      },
      options: [
        {
          name: "--environment",
          description:
            "Environment name, as defined in truffle-config `environments` object",
          args: {
            name: "name",
            default: "development",
          },
        },
        {
          name: "--ipfs",
          description:
            "Preserve to IPFS (needs the @truffle/preserve-to-ipfs plugin)",
        },
        {
          name: "--filecoin",
          description:
            "Preserve to Filecoin (needs the @truffle/preserve-to-filecoin plugin)",
        },
        {
          name: "--buckets",
          description:
            "Preserve to Textile Buckets (needs the @truffle/preserve-to-buckets plugin)",
        },
      ],
    },
    {
      name: "publish",
      description:
        "Removed upstream: the ethpm integration was disabled and the command only prints a notice",
      deprecated: true,
    },
    {
      name: "run",
      description: "Run a third-party command",
      args: {
        name: "command",
        description: "Name of the third-party command to run",
        isOptional: true,
      },
    },
    {
      name: "test",
      description: "Run JavaScript and Solidity tests",
      args: {
        name: "test_file",
        description:
          "Name of the test file to be run. Can include path information if the file does not exist in the current directory",
        template: "filepaths",
        isOptional: true,
        isVariadic: true,
      },
      options: [
        compileAllOption,
        {
          name: "--compile-none",
          description: "Do not compile any contracts before running the tests",
        },
        {
          name: "--compile-all-debug",
          description:
            "Compile all contracts and do so in debug mode for extra revert info. May cause errors on large contracts",
        },
        {
          name: "--migrate-none",
          description: "Do not migrate any contracts before running the tests",
        },
        verboseRpcOption,
        {
          name: "--show-events",
          description: "Log all contract events",
        },
        {
          name: "--debug",
          description:
            "Provides global debug() function for in-test debugging. JS tests only; implies --compile-all",
        },
        {
          name: "--debug-global",
          description:
            'Specify global identifier for debug function. Default: "debug"',
          args: {
            name: "identifier",
            default: "debug",
          },
        },
        {
          name: "--runner-output-only",
          description: "Suppress all output except for test runner output",
        },
        {
          name: ["--bail", "-b"],
          description: "Bail after first test failure",
        },
        {
          name: ["--stacktrace", "-t"],
          description:
            "Allows for mixed JS/Solidity stacktraces when a Truffle Contract transaction or deployment reverts. Does not apply to calls or gas estimates. Implies --compile-all. Experimental",
        },
        {
          name: "--stacktrace-extra",
          description: "Shortcut for --stacktrace --compile-all-debug",
        },
        {
          name: ["--grep", "-g"],
          description:
            "Use mocha's grep option while running tests. This option only runs tests that match the supplied regex/string",
          args: {
            name: "regex",
          },
        },
        {
          name: ["--reporter", "-r"],
          description:
            "Specify the type of mocha reporter to use during testing",
          args: {
            name: "name",
            default: "spec",
          },
        },
        networkOption,
        configOption,
      ],
    },
    {
      name: "unbox",
      description: "Download a Truffle Box, a pre-built Truffle project",
      args: [
        {
          name: "box_name",
          description:
            "Name of the truffle box. If no box_name is specified, a default truffle box will be downloaded",
          isOptional: true,
        },
        {
          name: "destination",
          description:
            "Path to the directory in which you would like to unbox the project files. If destination is not provided, this defaults to the current directory",
          isOptional: true,
          template: "folders",
        },
      ],
      options: [
        {
          name: "--force",
          description:
            "Unbox project in the current directory regardless of its state. Be careful, this will potentially overwrite files that exist in the directory",
          isDangerous: true,
        },
        quietOption,
      ],
    },
    {
      name: "version",
      description: "Show version number and exit",
    },
    {
      name: "watch",
      description:
        "Watch filesystem for changes and rebuild the project automatically",
    },
  ],
  options: [
    {
      name: "--help",
      description: "Show help for Truffle or for the given command",
      isPersistent: true,
    },
    {
      name: ["--version", "-v"],
      description: "Show version number and exit",
    },
  ],
};
export default completionSpec;
