// IPATool v2.8.1 (latest GitHub release tag, checked via git ls-remote and the Homebrew formula, 2026-11-19).
// Source: static read of the cobra command definitions in cmd/*.go at tag v2.8.1 (shallow clone) and the
// README `ipatool --help` output; the binary was not executed (needs an Apple account/App Store).
type SearchResult = {
  level: string;
  count: number;
  apps: App[];
  time: string;
};

type App = {
  id: number;
  bundleID: string;
  name: string;
  version: string;
  price: number;
};

const bundleIdentifierGenerator: Fig.Generator = {
  script: (context) => {
    const identifier = context[context.length - 1];
    if (!identifier) return undefined;

    return [
      "ipatool",
      "search",
      identifier,
      "--limit",
      "10",
      "--format",
      "json",
    ];
  },
  postProcess: (output) => {
    if (!output) return [];

    try {
      const { apps } = JSON.parse(output) as SearchResult;
      return apps.map((app) => ({
        name: app.bundleID,
        description: `${app.name} - ${app.version}`,
      }));
    } catch (error) {
      return [];
    }
  },
};

const platformSuggestions = [
  "iphone",
  "ipad",
  "appletv",
  "watchos",
  "visionos",
  "macos",
];

const bundleIdentifierOption: Fig.Option = {
  name: ["-b", "--bundle-identifier"],
  description: "Bundle identifier of the app (overrides the app ID when found)",
  args: {
    name: "identifier",
    generators: bundleIdentifierGenerator,
    filterStrategy: "fuzzy",
    debounce: true,
  },
};

const appIdOption: Fig.Option = {
  name: ["-i", "--app-id"],
  description: "ID of the target app",
  args: {
    name: "id",
  },
};

const externalVersionIdOption = (description: string): Fig.Option => ({
  name: "--external-version-id",
  description,
  args: {
    name: "id",
  },
});

const platformOption = (
  description: string,
  suggestions: string[] = platformSuggestions
): Fig.Option => ({
  name: "--platform",
  description,
  args: {
    name: "platform",
    suggestions,
  },
});

const completionSpec: Fig.Spec = {
  name: "ipatool",
  displayName: "IPATool",
  description:
    "IPATool is a command line tool that allows you to search for iOS apps on the App Store and download a copy of the app package, known as an ipa file",
  subcommands: [
    {
      name: "auth",
      description: "Authenticate with the App Store",
      subcommands: [
        {
          name: "info",
          description: "Show current account info",
        },
        {
          name: "login",
          description: "Login to the App Store",
          options: [
            {
              name: "--auth-code",
              description: "2FA code for the Apple ID",
              args: {
                name: "2FA code",
              },
            },
            {
              name: ["-e", "--email"],
              description: "Apple ID email address or phone number",
              args: {
                name: "email",
              },
            },
            {
              name: ["-p", "--password"],
              description: "Password for the Apple ID",
              args: {
                name: "password",
              },
            },
          ],
        },
        {
          name: "revoke",
          description: "Revoke your App Store credentials",
        },
      ],
    },
    {
      name: "completion",
      description: "Generate shell completion script",
      subcommands: [
        {
          name: "bash",
          description: "Generate the autocompletion script for bash",
        },

        {
          name: "fish",
          description: "Generate the autocompletion script for fish",
        },
        {
          name: "powershell",
          description: "Generate the autocompletion script for powershell",
        },
        {
          name: "zsh",
          description: "Generate the autocompletion script for zsh",
        },
      ],
    },
    {
      name: "download",
      description:
        "Download iOS, iPadOS, tvOS, watchOS, visionOS, and macOS app packages from the App Store",
      options: [
        appIdOption,
        bundleIdentifierOption,
        {
          name: ["-o", "--output"],
          description: "The destination path of the downloaded app package",
          args: {
            name: "output path",
            template: "folders",
          },
        },
        externalVersionIdOption(
          "External version identifier of the target app (defaults to latest version when not specified)"
        ),
        platformOption("Platform to download for"),
        {
          name: "--purchase",
          description: "Obtain a license for the app if needed",
        },
      ],
    },
    {
      name: "get-version-metadata",
      description: "Retrieves the metadata for a specific version of an app",
      options: [
        appIdOption,
        bundleIdentifierOption,
        {
          ...externalVersionIdOption(
            "External version identifier of the target app"
          ),
          isRequired: true,
        },
        platformOption("Platform to retrieve metadata for"),
      ],
    },
    {
      name: "help",
      description: "Display help for command",
      args: { name: "command", isOptional: true, template: "help" },
    },
    {
      name: "list-purchases",
      description: "List apps owned by the authenticated App Store account",
      options: [
        {
          name: ["-l", "--max-results"],
          description: "Maximum number of apps to return per page (max 100)",
          args: {
            name: "max results",
            default: "10",
          },
        },
        {
          name: ["-p", "--page"],
          description: "Page of owned apps to return",
          args: {
            name: "page",
            default: "1",
          },
        },
        platformOption(
          "Filter by platform",
          platformSuggestions.filter((platform) => platform !== "watchos")
        ),
      ],
    },
    {
      name: "list-versions",
      description: "List the available versions of an App Store app",
      options: [
        appIdOption,
        bundleIdentifierOption,
        platformOption("Platform to list versions for"),
      ],
    },
    {
      name: "mcp",
      description: "Serve App Store tools over MCP using stdio",
    },
    {
      name: "purchase",
      description: "Obtain a license for the app from the App Store",
      options: [
        appIdOption,
        bundleIdentifierOption,
        platformOption("Platform to purchase for"),
      ],
    },
    {
      name: "search",
      description:
        "Search for iOS, iPadOS, tvOS, watchOS, visionOS, and macOS apps available on the App Store",
      args: {
        name: "term",
      },
      options: [
        {
          name: ["-l", "--limit"],
          description:
            "Maximum amount of search results to retrieve; visionOS supports up to 12",
          args: {
            name: "limit",
            default: "5",
          },
        },
        platformOption("Platform to search"),
      ],
    },
  ],
  options: [
    {
      name: ["-h", "--help"],
      description: "Show help for ipatool",
      isPersistent: true,
    },
    {
      name: "--non-interactive",
      description: "Run in non-interactive session",
      isPersistent: true,
    },
    {
      name: "--verbose",
      description: "Enables verbose logs",
      isPersistent: true,
    },
    {
      name: "--keychain-passphrase",
      description: "Passphrase for unlocking keychain",
      isPersistent: true,
      args: {
        name: "passphrase",
      },
    },
    {
      name: "--format",
      description: "Sets output format for command",
      isPersistent: true,
      args: {
        name: "format",
        suggestions: ["text", "json"],
        default: "text",
      },
    },
    {
      name: ["-v", "--version"],
      description: "Show version for ipatool",
    },
  ],
};
export default completionSpec;
