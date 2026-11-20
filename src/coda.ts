// coda v1.18.4 (@codahq/packs-sdk on npm, 2026-11-19; the CLI is also installed as `packs` and `superhuman`). Source: ran `coda --help`
// and `coda <command> --help` for every command and agent subcommand from the published package, and read the yargs
// definitions in dist/cli/index.js plus dist/cli/set_option.js (valid setOption keys/values). Upstream repo is now superhuman/plugins-sdk.
import { filepaths } from "@tabsmith/autocomplete-generators";

const formulaNames: Fig.Generator = {
  script: [
    "bash",
    "-c",
    `grep -A5 --include=\*.ts --exclude-dir=node_modules -r 'addFormula\\|addSyncTable\\|makeFormula\\|makeSyncTable' . | grep -A3 -i formula | grep name: | grep -oE "['\\"]\\w*['\\"]"`,
  ],
  postProcess: (output) => {
    if (output.trim().length === 0) {
      return [];
    }
    return output.split("\n").map((formulaName) => {
      return {
        name: formulaName.replace(/['"]/g, "").trim(),
        description: `Execute ${formulaName}`,
      };
    });
  },
};

const pathToPackArg: Fig.Arg = {
  name: "path/to/pack.ts",
  description: "The path to the pack.ts file. E.g. src/pack.ts",
  generators: filepaths({ extensions: ["ts"] }),
};

const urlOrPackIdArg: Fig.Arg = {
  name: "urlOrPackId",
  description:
    "The URL or ID of the Pack. E.g. https://coda.io/p/123456 or 123456",
};

const timerStrategies = ["none", "error", "fake"];

const apiTokenOptions: Fig.Option[] = [
  {
    name: ["-t", "--apiToken"],
    description:
      "API token to use for the operation. Use the `register` command to define a default token",
    args: {
      name: "token",
    },
  },
];

const apiEndpointOption: Fig.Option = {
  name: ["--apiEndpoint", "--codaApiEndpoint"],
  description:
    "API endpoint to use for the operation (default: https://coda.io). Required for single-tenant instances. Can also be set persistently via `coda setOption <manifestFile> apiEndpoint <url>`",
  args: {
    name: "url",
  },
};

const yesOption: Fig.Option = {
  name: ["-y", "--yes"],
  description:
    "Skip confirmation prompts. Required in non-interactive environments",
};

const timerStrategyOption: Fig.Option = {
  name: "--timerStrategy",
  description: "How timers are handled (default: none)",
  args: {
    name: "strategy",
    suggestions: timerStrategies,
  },
};

// Options shared by the commands that talk to the Coda server
const serverOptions: Fig.Option[] = [...apiTokenOptions, apiEndpointOption];

const completionSpec: Fig.Spec = {
  name: "coda",
  description:
    "Coda Local development CLI tool. It comes bundled with the Pack SDK and makes it easy to build and manage Packs from the CLI",
  subcommands: [
    {
      name: "init",
      description: "Scaffold a Pack in the current directory",
      options: [
        yesOption,
        {
          name: "--agent",
          description:
            "Scaffold an agent pack (sdk.newAgent()) instead of a formula pack. No git or network template install needed",
        },
        {
          name: "--name",
          description:
            "Agent name used in the scaffolded pack.ts (with --agent). Defaults to the directory name",
          args: {
            name: "name",
          },
        },
      ],
    },
    {
      name: "execute",
      description: "Execute a formula",
      args: [
        pathToPackArg,
        {
          name: "formula",
          description: "Formula name to execute",
          generators: formulaNames,
        },
        {
          name: "params",
          description: "Arguments to pass to the formula",
          isVariadic: true,
          isOptional: true,
        },
      ],
      options: [
        {
          name: "--fetch",
          description:
            'Actually fetch http requests instead of using mocks. Run "coda auth" first to set up credentials (default: true)',
        },
        {
          name: "--no-fetch",
          description: "Use mocks instead of fetching http requests",
        },
        {
          name: "--vm",
          description:
            "Execute the requested command in a virtual machine that mimics the environment the platform uses to execute Packs. This defaults to true if the isolated-vm package is installed, and to false if not",
        },
        {
          name: "--no-vm",
          description: "Do not execute the command in a virtual machine",
        },
        {
          name: "--dynamicUrl",
          description:
            "For a dynamic sync table with a variable source location, specify the URL to test here",
          args: {
            name: "url",
            description: "The URL to sync from",
          },
        },
        timerStrategyOption,
        {
          name: "--maxRows",
          description:
            "For a sync table, the maximum number of rows to sync (default: 1000)",
          args: {
            name: "rows",
          },
        },
        {
          name: "--allowMultipleNetworkDomains",
          description:
            "Allow executing Packs that use multiple network domains. You must get approval from Superhuman before you can upload these Packs",
        },
      ],
    },
    {
      name: "auth",
      description: "Set up authentication for a Pack",
      args: pathToPackArg,
      options: [
        {
          name: ["--oauthServerPort", "--oauth_server_port"],
          description:
            "Port to use for the local server that handles OAuth setup (default: 3000)",
          args: {
            name: "port",
          },
        },
        {
          name: ["--extraOAuthScopes", "--extra_oauth_scopes"],
          description:
            "Scopes to request beyond those listed in the manifest, for specific formulas that need extra permissions. Example: --extra_oauth_scopes='first second third'",
          args: {
            name: "scopes",
          },
        },
      ],
    },
    {
      name: "extensions",
      description: "Installs developer extensions for working with Packs",
      args: {
        name: "tools",
        description: "Which tools to install extensions for",
        isVariadic: true,
        suggestions: [
          {
            name: "vscode",
            description: "Install VS Code snippets for Packs",
          },
        ],
      },
    },
    {
      name: "clone",
      description: "Clone an existing Pack that was created using Pack Studio",
      args: urlOrPackIdArg,
      options: [...serverOptions, yesOption],
    },
    {
      name: ["register", "login"],
      description: "Register API token to publish a Pack",
      args: {
        name: "apiToken",
        description: "The API token to register",
        isOptional: true,
      },
      options: [
        apiEndpointOption,
        {
          name: "--open",
          description: "Open the API token creation page in a browser",
        },
        yesOption,
      ],
    },
    {
      name: "whoami",
      description:
        "Looks up information about the API token that is registered in this environment",
      args: {
        name: "apiToken",
        description: "The API token to look up",
        isOptional: true,
      },
      options: [apiEndpointOption],
    },
    {
      name: "agent",
      description: "Build and run agents",
      subcommands: [
        {
          name: "chat",
          description:
            "Run your installed agent from the terminal and print its reply",
          args: [
            pathToPackArg,
            {
              name: "prompt",
              description: "The message to send to the agent",
            },
          ],
          options: [
            {
              name: "--agentInstanceId",
              description:
                "Installed agent instance to run. Defaults to this pack's install for the caller",
              args: {
                name: "id",
              },
            },
            {
              name: "--tenantId",
              description:
                "Brain tenant id for the agent install. Defaults to the trigger response",
              args: {
                name: "id",
              },
            },
            {
              name: "--chatId",
              description:
                "Continue this chat instead of the last one. Its agent runs unless --agentInstanceId is set",
              exclusiveOn: ["--new"],
              args: {
                name: "id",
              },
            },
            {
              name: "--new",
              description:
                "Start a new chat instead of continuing the last one",
              exclusiveOn: ["--chatId"],
            },
            {
              name: "--timeout",
              description:
                "Seconds to wait for a reply before giving up (default: 120)",
              args: {
                name: "seconds",
              },
            },
            ...serverOptions,
          ],
        },
        {
          name: "install",
          description: "Install an uploaded agent version to your account",
          args: pathToPackArg,
          options: [
            {
              name: "--version",
              description:
                "Agent version to install. Defaults to the latest upload",
              args: {
                name: "version",
              },
            },
            {
              name: "--reinstall",
              description:
                "Rebind even if already installed. Needed after changing tools or triggers",
            },
            yesOption,
            ...serverOptions,
          ],
        },
        {
          name: "logs",
          description: "Show recent logs for an installed agent instance",
          args: pathToPackArg,
          options: [
            {
              name: "--tenant",
              description:
                "Tenant id owning the agent instance. Defaults to the caller's tenant for this pack",
              args: {
                name: "id",
              },
            },
            {
              name: "--instance",
              description:
                "Agent instance id. Defaults to this pack's install for the caller",
              args: {
                name: "id",
              },
            },
            {
              name: "--session",
              description:
                "Show only this agent session. Defaults to the latest session (tail follows new sessions)",
              args: {
                name: "id",
              },
            },
            {
              name: "--limit",
              description: "Maximum log records per fetch (default: 20)",
              args: {
                name: "limit",
              },
            },
            {
              name: "--tail",
              description:
                "Keep polling for new logs for up to 5 minutes, then stop (re-run to continue, Ctrl-C exits)",
            },
            ...serverOptions,
          ],
        },
      ],
    },
    {
      name: "build",
      description:
        "Build your Pack locally (not required; for debugging purposes only)",
      args: pathToPackArg,
      options: [
        {
          name: ["-o", "--outputDir"],
          description: "Directory to write the bundle to",
          args: {
            name: "dir",
            template: "folders",
          },
        },
        {
          name: "--minify",
          description: "Minify the bundle (default: true)",
        },
        {
          name: "--no-minify",
          description: "Do not minify the bundle",
        },
        timerStrategyOption,
        {
          name: "--intermediateOutputDirectory",
          description: "Directory for intermediate build output",
          args: {
            name: "dir",
            template: "folders",
          },
        },
      ],
    },
    {
      name: "upload",
      description: "Build and upload your Pack version to the server",
      args: pathToPackArg,
      options: [
        {
          name: ["-n", "--notes"],
          description: "Notes about the contents of this Pack version",
          args: {
            name: "notes",
          },
        },
        {
          name: ["-o", "--intermediateOutputDirectory"],
          description:
            "Directory for intermediate build output (default: ./_upload_build)",
          args: {
            name: "dir",
            template: "folders",
          },
        },
        timerStrategyOption,
        ...serverOptions,
        {
          name: "--allowOlderSdkVersion",
          description:
            "Not recommended. Allows uploading a Pack build that uses an older version of the SDK than the prior Pack build",
        },
      ],
    },
    {
      name: "create",
      description: "Register a new Pack with the server",
      args: pathToPackArg,
      options: [
        {
          name: ["-n", "--name"],
          description: "The name of the Pack. Can be set later in the UI",
          args: {
            name: "name",
            description: "The desired Pack name",
          },
        },
        {
          name: ["-d", "--description"],
          description: "A description of the Pack. Can be set later in the UI",
          args: {
            name: "description",
            description: "The Pack description",
          },
        },
        {
          name: ["-w", "--workspace"],
          description:
            "The workspace ID, or workspace URL that you want your Pack to be created under",
          args: {
            name: "workspace",
          },
        },
        ...serverOptions,
      ],
    },
    {
      name: "link",
      description: "Link to a pre-existing Pack ID on the server",
      args: [
        {
          name: "manifestDir",
          description: "The directory that contains the Pack manifest",
          template: "folders",
        },
        urlOrPackIdArg,
      ],
      options: [...serverOptions, yesOption],
    },
    {
      name: "validate",
      description: "Validate your Pack definition",
      args: pathToPackArg,
      options: [
        {
          name: "--checkDeprecationWarnings",
          description:
            "Also check for warnings about deprecated properties and features that will become errors in a future SDK version (default: true)",
        },
        {
          name: "--no-checkDeprecationWarnings",
          description: "Skip the check for deprecation warnings",
        },
        {
          name: "--checkConnectors",
          description:
            "For agent packs, check granted connector pack IDs against the server (needs a token) (default: true)",
        },
        {
          name: "--no-checkConnectors",
          description: "Skip checking connector pack IDs against the server",
        },
        ...serverOptions,
      ],
    },
    {
      name: "release",
      description:
        "Set the Pack version that is installable for users. You may specify a specific version, or omit a version to use the version currently in the manifest file. The version must always be higher than that of any previous release",
      args: [
        pathToPackArg,
        {
          name: "version",
          description:
            "The release version. Must always be greater than that of any of your previous releases",
          isOptional: true,
        },
      ],
      options: [
        {
          name: ["-n", "--notes"],
          description: "Notes about the contents of this Pack release",
          isRequired: true,
          args: {
            name: "notes",
          },
        },
        {
          name: ["-g", "--gitTag"],
          description:
            "Create a git tag for this release (default: false). Can also be enabled by default via `coda setOption <manifestFile> gitTag true`",
        },
        ...serverOptions,
        yesOption,
        {
          name: ["--useLatest", "--use-latest"],
          description:
            "Release the latest uploaded version when the manifest has no version",
        },
      ],
    },
    {
      name: "setOption",
      description:
        "Set a persistent build option for the Pack (stored in .coda-pack.json). This will be used for all builds of the Pack",
      args: [
        pathToPackArg,
        {
          name: "option",
          description: "The option to set",
          suggestions: [
            {
              name: "timerStrategy",
              description: "How timers are handled: none, error or fake",
            },
            {
              name: "gitTag",
              description: "Create git tags on releases: true or false",
            },
            {
              name: "apiEndpoint",
              description: "Pin a single-tenant API endpoint URL",
            },
          ],
        },
        {
          name: "value",
          description:
            "Value to set for the option: none, error or fake for timerStrategy; true or false for gitTag; a URL for apiEndpoint",
          suggestions: [...timerStrategies, "true", "false"],
        },
      ],
    },
  ],
  options: [
    {
      name: "--version",
      description: "Show version number",
      priority: 1,
      isPersistent: true,
    },
    {
      name: "--help",
      description: "Show help",
      priority: 2,
      isPersistent: true,
    },
  ],
};
export default completionSpec;
