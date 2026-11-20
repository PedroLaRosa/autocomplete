// Homey CLI v4.6.3 (npm "latest", 2026-11-17). Source: bin/cmds/**/*.mjs and
// lib/api/*.mjs in athombv/node-homey (bin/ unchanged through v4.6.4), manager
// list from homey-api 3.21.3 assets/specifications/HomeyAPIV3{Local,Cloud}.json

const homeysGenerator = (key: "id" | "name"): Fig.Generator => ({
  script: {
    command: "homey",
    args: ["list", "--json"],
    env: { HOMEY_SKIP_STARTUP_NOTIFIERS: "1" },
  },
  postProcess: (out) => {
    try {
      return JSON.parse(out).map((homey: { id: string; name: string }) => ({
        name: homey[key],
        description: key === "id" ? homey.name : homey.id,
        icon: "🏠",
      }));
    } catch {
      return [];
    }
  },
});

const jsonOption: Fig.Option = {
  name: "--json",
  description: "Output raw JSON",
};

const jqOption: Fig.Option = {
  name: "--jq",
  description: "Filter JSON output using a jq expression",
  args: { name: "expression" },
};

const homeyIdOption: Fig.Option = {
  name: "--homey-id",
  description: "Target a cached Homey by id instead of the selected Homey",
  args: { name: "id", generators: homeysGenerator("id") },
};

// Options every API request command takes (applyHomeyApiExecutionOptions)
const apiExecutionOptions: Fig.Option[] = [
  jsonOption,
  {
    name: "--timeout",
    description: "Request timeout in milliseconds",
    args: { name: "ms", default: "30000" },
  },
  {
    name: "--token",
    description: "Use token mode (requires --address or --homey-id)",
    args: { name: "token" },
  },
  {
    name: "--address",
    description: "Homey base URL for token mode, e.g. http://192.168.1.100",
    args: { name: "url" },
  },
  homeyIdOption,
];

const operationOption = (generators?: Fig.Generator): Fig.Option => ({
  name: "--operation",
  description: "Filter by operation id or kebab-case CLI name",
  args: { name: "operation", generators },
});

// ponytail: upstream's HOMEY_MANAGER_WHITELIST (lib/api/ApiCommandDefinition.mjs);
// every entry exists in homey-api 3.21.3. Re-check it when homey-api bumps.
const API_MANAGERS = [
  "alarms",
  "api",
  "apps",
  "arp",
  "backup",
  "ble",
  "clock",
  "cloud",
  "coprocessor",
  "cron",
  "dashboards",
  "database",
  "devices",
  "devkit",
  "discovery",
  "drivers",
  "energy",
  "energydongle",
  "experiments",
  "flow",
  "flowtoken",
  "geolocation",
  "googleAssistant",
  "i18n",
  "icons",
  "images",
  "insights",
  "ledring",
  "logic",
  "matter",
  "mobile",
  "moods",
  "notifications",
  "presence",
  "rf",
  "safety",
  "satellites",
  "security",
  "sessions",
  "system",
  "thread",
  "updates",
  "users",
  "vdevice",
  "videos",
  "weather",
  "webserver",
  "zigbee",
  "zones",
  "zwave",
];

const managerExtensions: Record<string, Fig.Subcommand[]> = {
  devices: [
    {
      name: "open-device",
      description: "Open a device in the Homey web app",
      options: [
        homeyIdOption,
        {
          name: ["-i", "--id"],
          description: "Device id to open in the Homey web app",
          isRequired: true,
          args: { name: "id" },
        },
      ],
    },
  ],
};

// Operations come from the homey-api spec bundled with the CLI (~400 of them),
// so ask the CLI's own completion handler instead of baking them in.
// ponytail: per-operation parameter flags are not completed; add them if asked.
const apiManagerCommand = (managerId: string): Fig.Subcommand => {
  const words = managerId.replace(/([a-z0-9])([A-Z])/g, "$1 $2");
  const name = words.replace(/ /g, "-").toLowerCase();
  const title = words.charAt(0).toUpperCase() + words.slice(1);
  const extensions = managerExtensions[managerId] ?? [];
  // Already listed as subcommands, so drop them from the operation suggestions
  const staticNames = ["schema", ...extensions.map((command) => command.name)];
  const operationsGenerator: Fig.Generator = {
    script: ["homey", "--get-yargs-completions", "api", name, ""],
    postProcess: (out) =>
      out
        .split("\n")
        .filter((operation) => operation && !staticNames.includes(operation))
        .map((operation) => ({
          name: operation,
          icon: "fig://icon?type=command",
        })),
  };

  return {
    name,
    description: `${title} manager operations`,
    subcommands: [
      {
        name: "schema",
        description: `Inspect schema for ${title}`,
        options: [jsonOption, operationOption(operationsGenerator), jqOption],
      },
      ...extensions,
    ],
    args: { name: "operation", generators: operationsGenerator },
    options: [...apiExecutionOptions, jqOption],
  };
};

const cleanOption: Fig.Option = {
  name: ["-c", "--clean"],
  description:
    "Delete all userdata, paired devices etc. before running the app",
};

const skipBuildOption: Fig.Option = {
  name: ["-s", "--skip-build"],
  description: "Skip the automatic build step",
};

const dockerSocketPathOption: Fig.Option = {
  name: "--docker-socket-path",
  description: "Path to the Docker socket",
  args: { name: "path", template: "filepaths" },
};

const findLinksOption: Fig.Option = {
  name: "--find-links",
  description:
    "Additional location to search for candidate Python package distributions",
  args: { name: "location", template: ["folders", "filepaths"] },
};

const buildOptions: Fig.Option[] = [dockerSocketPathOption, findLinksOption];

const dependenciesArgs: Fig.Arg = {
  name: "dependencies",
  isVariadic: true,
};

const completionSpec: Fig.Spec = {
  name: "homey",
  subcommands: [
    {
      name: "api",
      description: "Direct Homey API commands",
      subcommands: [
        {
          name: "diagnose",
          description: "Diagnose Homey discovery strategy connectivity",
          options: [jsonOption, jqOption, homeyIdOption],
        },
        {
          name: ["raw", "call", "request"],
          description: "Perform a raw Homey API request",
          options: [
            ...apiExecutionOptions,
            {
              name: ["-X", "--method"],
              description: "Request method",
              args: {
                name: "method",
                default: "GET",
                suggestions: ["GET", "POST", "PUT", "DELETE"],
              },
            },
            {
              name: "--path",
              description: "Absolute Homey API path, e.g. /api/manager/system/",
              isRequired: true,
              args: { name: "path" },
            },
            {
              name: ["-H", "--header"],
              description: 'Request header in "name:value" format',
              isRepeatable: true,
              args: { name: "header" },
            },
            {
              name: "--body",
              description: "Request body as JSON string or @file path",
              args: { name: "body" },
            },
            {
              name: "--no-request-json",
              description: "Send the request body as-is instead of as JSON",
            },
            jqOption,
            {
              name: "--include",
              description: "Include status line and response headers in output",
            },
            {
              name: "--verbose",
              description: "Print request diagnostics to stderr",
            },
          ],
        },
        {
          name: "schema",
          description: "Inspect available Homey API managers and operations",
          options: [
            jsonOption,
            {
              name: "--manager",
              description:
                "Filter by manager idCamelCase, manager id, or specification key",
              args: { name: "manager", suggestions: API_MANAGERS },
            },
            operationOption(),
            jqOption,
          ],
        },
        ...API_MANAGERS.map(apiManagerCommand),
      ],
    },
    {
      name: "app",
      description: "App related commands",
      subcommands: [
        {
          name: "add-github-workflows",
          description:
            "Add GitHub Workflows (validate, update version, publish)",
        },
        {
          name: "add-types",
          description: "Install the Apps SDK type declarations",
        },
        {
          name: "build",
          description: "Build a Homey App for publishing",
          options: buildOptions,
        },
        {
          name: "compose",
          description: "Migrate app to Homey compose",
        },
        {
          name: "create",
          description: "Create a new Homey App",
        },
        {
          name: "dependencies",
          description: "Dependency related commands (Python only)",
          subcommands: [
            {
              name: "add",
              description: "Add dependencies to a Homey app",
              args: {
                ...dependenciesArgs,
                description:
                  "Packages to add, optionally with specifiers such as version constraints",
              },
              options: [
                {
                  name: "--dev",
                  description: "Install dependencies only for development",
                },
              ],
            },
            {
              name: "install",
              description: "Install the dependencies of a Homey app",
            },
            {
              name: "list",
              description: "List the dependencies of a Homey app",
            },
            {
              name: "remove",
              description: "Remove dependencies from a Homey app",
              args: { ...dependenciesArgs, description: "Packages to remove" },
              options: [
                {
                  name: "--dev",
                  description: "Remove dependencies only for development",
                },
              ],
            },
          ],
          options: buildOptions.map((option) => ({
            ...option,
            isPersistent: true,
          })),
        },
        {
          name: "discovery",
          description: "Discovery related commands",
          subcommands: [
            {
              name: "create",
              description: "Create a new Discovery strategy",
            },
          ],
        },
        {
          name: "driver",
          description: "Driver related commands",
          subcommands: [
            {
              name: "capabilities",
              description: "Change the capabilities of a Driver",
            },
            {
              name: "create",
              description: "Create a new Driver",
            },
            {
              name: "firmware",
              description: "Add a device firmware update to a Driver",
              options: [
                {
                  name: "--driver",
                  description:
                    "Path to the driver to which the firmware update should be added",
                  isRequired: true,
                  args: { name: "path", template: "folders" },
                },
                {
                  name: "--firmware",
                  description: "Path to a firmware file",
                  isRequired: true,
                  isRepeatable: true,
                  args: {
                    name: "file",
                    template: "filepaths",
                    isVariadic: true,
                  },
                },
              ],
            },
            {
              name: "flow",
              description: "Create a new Flow for a Driver",
            },
          ],
        },
        {
          name: "flow",
          description: "Flow related commands",
          subcommands: [
            {
              name: "create",
              description: "Create a new Flow",
            },
          ],
        },
        {
          name: "install",
          description: "Install a Homey App",
          options: [cleanOption, skipBuildOption],
        },
        {
          name: "manage",
          description: "View your app in the Homey Developer Tools",
        },
        {
          name: "publish",
          description: "Publish a Homey App to the Homey Apps Store",
          options: buildOptions,
        },
        {
          name: "review",
          description:
            "Run an AI review of the app against the Homey App Store guidelines",
          options: [
            {
              name: "--type",
              description:
                'Submission type: "new" for first submission, "update" if the app is already live',
              args: {
                name: "type",
                default: "new",
                suggestions: ["new", "update"],
              },
            },
            {
              name: "--model",
              description: 'Model in "<provider>/<model>" form',
              args: { name: "model", default: "openai/gpt-5.4" },
            },
            {
              name: "--json",
              description:
                "Emit machine-readable JSON instead of pretty terminal output",
            },
            {
              name: ["-v", "--verbose"],
              description:
                "Print token counts, timings, the full list of files sent, and other diagnostics",
            },
          ],
        },
        {
          name: "run",
          description: "Run a Homey App in development mode",
          options: [
            cleanOption,
            {
              name: ["-r", "--remote"],
              description:
                "Upload the app to Homey Pro and run remotely, instead of a Docker container on this machine",
            },
            skipBuildOption,
            {
              name: ["-l", "--link-modules"],
              description:
                "Provide a comma-separated path to local Node.js modules to link. Only works when running the app inside Docker",
              args: {
                name: "modules",
              },
            },
            {
              name: ["-n", "--network"],
              description:
                "Docker network mode, as named by `docker network ls`. Only works when running the app inside Docker",
              args: { name: "network", default: "bridge" },
            },
            ...buildOptions,
            {
              name: "--docker-exposed-ports",
              description:
                "Publish container ports on the host, e.g. 6113/tcp 5683/udp. Only works when running the app inside Docker",
              args: { name: "port", isVariadic: true },
            },
          ],
        },
        {
          name: "translate",
          description: "Translate a Homey App with OpenAI",
          options: [
            {
              name: "--languages",
              description: "Comma-separated list of languages to translate to",
              args: { name: "languages" },
            },
            {
              name: "--api-key",
              description: "OpenAI API key (defaults to $OPENAI_API_KEY)",
              args: { name: "key" },
            },
            {
              name: "--model",
              description: "OpenAI model to use",
              args: { name: "model", default: "gpt-4o" },
            },
            {
              name: "--file",
              description:
                "Absolute path to a single file to translate, instead of the entire folder",
              args: { name: "file", template: "filepaths" },
            },
          ],
        },
        {
          name: "validate",
          description: "Validate a Homey App",
          options: [
            {
              name: ["-l", "--level"],
              description: "Validation level",
              args: {
                name: "value",
                default: "publish",
                suggestions: [
                  {
                    name: "debug",
                  },
                  {
                    name: "publish",
                  },
                  {
                    name: "verified",
                  },
                ],
              },
            },
            ...buildOptions,
          ],
        },
        {
          name: "version",
          description: "Update a Homey App's version",
          args: {
            name: "next",
            suggestions: [
              {
                name: "patch",
              },
              {
                name: "minor",
              },
              {
                name: "major",
              },
              {
                name: "semver",
                insertValue: "1.0.0",
              },
            ],
          },
          options: [
            {
              name: "--changelog",
              description:
                "What's new in this version. Use dot-notation for translation, e.g. --changelog.en",
              args: { name: "text" },
            },
            {
              name: "--commit",
              description: "Create a git commit and tag for the new version",
            },
          ],
        },
        {
          name: "view",
          description: "View your app in the Homey App Store",
        },
        {
          name: "widget",
          description: "Widget related commands",
          subcommands: [
            {
              name: "create",
              description: "Create a new Widget",
            },
          ],
        },
      ],
      options: [
        {
          name: ["-p", "--path"],
          description: "Path to a Homey App directory",
          isPersistent: true,
          args: {
            template: "folders",
          },
        },
      ],
    },
    {
      name: "completion",
      description: "Generate shell completion script",
    },
    {
      name: "docs",
      description: "Open Homey Developer Documentation",
      icon: "📖",
    },
    {
      name: "list",
      description: "List all Homeys",
      options: [jsonOption, jqOption],
    },
    {
      name: "login",
      description: "Log in with an Athom account",
    },
    {
      name: "logout",
      description: "Log out the current user",
    },
    {
      name: "select",
      description: "Select a Homey as active",
      subcommands: [
        {
          name: "current",
          description: "Show the currently selected Homey",
          options: [jsonOption, jqOption],
        },
      ],
      options: [
        {
          name: ["-i", "--id"],
          description: "ID of the Homey",
          args: {
            name: "id",
            generators: homeysGenerator("id"),
          },
        },
        {
          name: ["-n", "--name"],
          description: "Name of the Homey",
          args: {
            name: "name",
            generators: homeysGenerator("name"),
          },
        },
      ],
    },
    {
      name: "tools",
      description: "Open Homey Developer Tools",
      icon: "🔧",
    },
    {
      name: "unselect",
      description: "Unselect the active Homey",
    },
    {
      name: "whoami",
      description: "Show the current logged in user",
      options: [jsonOption, jqOption],
    },
  ],
  options: [
    {
      name: "--help",
      description: "Show help",
      isPersistent: true,
    },
    {
      name: ["-v", "--version"],
      description: "Show version number",
    },
    {
      name: "--discovery-strategies",
      description: "Comma-separated discovery strategies",
      isPersistent: true,
      args: {
        name: "strategies",
        suggestions: [
          "cloud",
          "local",
          "localSecure",
          "remoteForwarded",
          "mdns",
        ],
      },
    },
  ],
};

export default completionSpec;
