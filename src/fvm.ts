// fvm v4.3.2 (gh release leoafarias/fvm, 2026-11-19). Source: lib/src/runner.dart
// and lib/src/commands/*.dart at tag 4.3.2

const semverRegex =
  /((([0-9]+)\.([0-9]+)\.([0-9]+)(?:-([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?)(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?)/gm;

const globalOptions: Fig.Option[] = [
  {
    name: ["-h", "--help"],
    description: "Print this usage information",
  },
];

const channels: Fig.Suggestion[] = [
  {
    name: "stable",
    description: "Latest stable release of Flutter",
    priority: 100,
  },
  {
    name: "beta",
    description: "Latest beta release of Flutter",
    priority: 99,
  },
  {
    name: "main",
    description: "Flutter main branch",
    priority: 98,
  },
  {
    name: "master",
    description: "Flutter master branch",
    priority: 97,
  },
  {
    name: "dev",
    description: "Latest dev release of Flutter",
    priority: 96,
  },
];

const releasesGenerator: Fig.Generator = {
  script: ["fvm", "releases", "--channel", "all"],
  postProcess: function (out): Fig.Suggestion[] {
    const matches = out.match(semverRegex);
    const matchesSet = [...new Set(matches)];
    return matchesSet.map((match) => ({ name: match })).reverse();
  },
};

const installedGenerator: Fig.Generator = {
  script: ["fvm", "api", "list", "--compress", "--skip-size-calculation"],
  postProcess: function (out): Fig.Suggestion[] {
    try {
      const { versions } = JSON.parse(out) as {
        versions: { name: string }[];
      };
      return versions.map(({ name }) => ({ name }));
    } catch {
      return [];
    }
  },
};

const versionArg = (description: string): Fig.Arg => ({
  name: "version",
  description,
  suggestions: channels,
  generators: [installedGenerator, releasesGenerator],
});

const installedVersionArg = (description: string): Fig.Arg => ({
  name: "version",
  description,
  generators: installedGenerator,
});

const compressOption: Fig.Option = {
  name: ["-c", "--compress"],
  description: "Outputs compact JSON without formatting or whitespace",
};

const forceOption = (description: string): Fig.Option => ({
  name: ["-f", "--force"],
  description,
});

const skipPubGetOption: Fig.Option = {
  name: "--skip-pub-get",
  description: "Skips running 'flutter pub get' after switching SDK versions",
};

const completionSpec: Fig.Spec = {
  name: "fvm",
  description:
    "Flutter Version Management: A cli to manage Flutter SDK versions",
  options: [
    ...globalOptions,
    {
      name: "--verbose",
      description: "Print verbose output",
    },
    {
      name: ["-v", "--version"],
      description: "Print the current version",
    },
  ],
  subcommands: [
    {
      name: "api",
      description:
        "Provides JSON API access to FVM data for integrations and tooling",
      options: [...globalOptions],
      subcommands: [
        {
          name: "cleanup",
          description:
            "Returns cached patch upgrades, unused SDK names, and removable SDKs as JSON",
          options: [...globalOptions, compressOption],
        },
        {
          name: "context",
          description:
            "Returns FVM environment and configuration information as JSON",
          options: [...globalOptions, compressOption],
        },
        {
          name: "list",
          description: "Returns installed Flutter SDK versions as JSON",
          options: [
            ...globalOptions,
            compressOption,
            {
              name: ["-s", "--skip-size-calculation"],
              description:
                "Skips calculating cache sizes for faster response (useful for large caches)",
            },
          ],
        },
        {
          name: "project",
          description:
            "Returns Flutter project configuration and settings as JSON",
          options: [
            ...globalOptions,
            compressOption,
            {
              name: ["-p", "--path"],
              description:
                "Path to Flutter project (defaults to current directory)",
              args: { name: "path", template: "folders" },
            },
          ],
        },
        {
          name: "releases",
          description: "Returns available Flutter SDK releases as JSON",
          options: [
            ...globalOptions,
            compressOption,
            {
              name: "--limit",
              description: "Limits the number of releases returned",
              args: { name: "number" },
            },
            {
              name: "--filter-channel",
              description: "Filters releases by channel",
              args: { name: "channel", suggestions: ["stable", "beta", "dev"] },
            },
          ],
        },
      ],
    },
    {
      name: "cleanup",
      description:
        "Shows cache cleanup and same-line patch upgrade recommendations",
      options: [
        ...globalOptions,
        {
          name: "--remove-unused",
          description:
            "Removes unused SDKs, except cached patches recommended as upgrade targets",
        },
        {
          name: ["-y", "--yes"],
          description: "Skips confirmation when removing unused SDKs",
        },
      ],
    },
    {
      name: "config",
      description: "Configure global FVM settings and preferences",
      options: [
        ...globalOptions,
        {
          name: "--cache-path",
          description: "Path where fvm will cache versions",
          args: { name: "path", template: "folders" },
        },
        {
          name: ["--use-git-cache", "--no-use-git-cache"],
          description:
            "Enable/Disable git cache globally, which is used for faster version installs",
        },
        {
          name: "--git-cache-path",
          description: "Path where local Git reference cache is stored",
          args: { name: "path", template: "folders" },
        },
        {
          name: "--flutter-url",
          description: "Flutter repository Git URL to clone from",
          args: { name: "url" },
        },
        {
          name: ["--update-check", "--no-update-check"],
          description: "Enables or disables automatic update checking for FVM",
        },
      ],
    },
    {
      name: "dart",
      description:
        "Runs Dart commands using the project's configured Flutter SDK",
      loadSpec: "dart",
    },
    {
      name: "destroy",
      description:
        "Completely removes the FVM cache and all cached Flutter SDK versions",
      options: [
        ...globalOptions,
        forceOption("Bypass confirmation prompt (use with caution)"),
      ],
    },
    {
      name: "doctor",
      description:
        "Shows detailed information about the FVM environment and project configuration",
      options: [...globalOptions],
    },
    {
      name: "exec",
      description:
        "Executes commands with the project's configured Flutter SDK in the environment",
      args: { name: "command", isCommand: true },
    },
    {
      name: "flavor",
      description:
        "Executes Flutter commands using the SDK version configured for a specific project flavor",
      args: [
        { name: "flavor", description: "The project flavor to use" },
        { name: "flutter command", loadSpec: "flutter", isOptional: true },
      ],
    },
    {
      name: "flutter",
      description:
        "Runs Flutter commands using the project's configured SDK version",
      loadSpec: "flutter",
    },
    {
      name: "fork",
      description: "Manage Flutter fork aliases",
      options: [...globalOptions],
      subcommands: [
        {
          name: "add",
          description: "Adds a new Flutter fork alias for custom repositories",
          options: [...globalOptions],
          args: [
            {
              name: "alias",
              description: "Letters, numbers, dots, hyphens and underscores",
            },
            { name: "url", description: "Git URL of the Flutter fork" },
          ],
        },
        {
          name: "list",
          description: "Lists all configured Flutter fork aliases",
          options: [...globalOptions],
        },
        {
          name: "remove",
          description: "Removes a configured Flutter fork alias",
          options: [...globalOptions],
          args: { name: "alias" },
        },
      ],
    },
    {
      name: "global",
      description: "Sets a Flutter SDK version as the global default",
      args: {
        ...versionArg("Flutter SDK version to set as global"),
        isOptional: true,
      },
      options: [
        ...globalOptions,
        {
          name: ["-u", "--unlink"],
          description: "Removes the global Flutter SDK version setting",
        },
        forceOption("Bypasses Flutter SDK validation checks"),
      ],
    },
    {
      name: ["install", "i"],
      description:
        "Installs a Flutter SDK version and caches it for future use",
      args: {
        ...versionArg(
          "Flutter SDK version to install (defaults to the project's configured version)"
        ),
        generators: releasesGenerator,
        isOptional: true,
      },
      options: [
        ...globalOptions,
        {
          name: ["-s", "--setup"],
          description: "Downloads SDK dependencies after install (default)",
          exclusiveOn: ["--no-setup"],
        },
        {
          name: "--no-setup",
          description: "Skips downloading SDK dependencies after install",
          exclusiveOn: ["-s", "--setup"],
        },
        skipPubGetOption,
      ],
    },
    {
      name: "integration-test",
      description: "Runs complete integration tests",
      hidden: true,
      options: [
        ...globalOptions,
        {
          name: ["-c", "--cleanup-only"],
          description: "Only run cleanup operations",
        },
      ],
    },
    {
      name: ["list", "ls"],
      description: "Lists all Flutter SDK versions installed by FVM",
      options: [...globalOptions],
    },
    {
      name: "releases",
      description: "Lists all Flutter SDK releases available for installation",
      options: [
        ...globalOptions,
        {
          name: ["-c", "--channel"],
          description: "Filter releases by channel (default: stable)",
          args: {
            name: "channel",
            suggestions: ["stable", "beta", "dev", "all"],
          },
        },
      ],
    },
    {
      name: "remove",
      description: "Removes Flutter SDK versions from the cache",
      args: {
        ...installedVersionArg("The installed Flutter version to remove"),
        isOptional: true,
      },
      options: [
        ...globalOptions,
        {
          name: ["-a", "--all"],
          description: "Removes all cached Flutter SDK versions",
        },
      ],
    },
    {
      name: "spawn",
      description: "Executes Flutter commands using a specific SDK version",
      args: [
        installedVersionArg(
          "The Flutter version from which to spawn a command"
        ),
        { name: "flutter command", loadSpec: "flutter", isOptional: true },
      ],
    },
    {
      name: "use",
      description: "Sets the Flutter SDK version for the current project",
      args: {
        ...versionArg("The Flutter SDK version to use"),
        isOptional: true,
      },
      options: [
        ...globalOptions,
        forceOption("Bypasses Flutter project validation checks"),
        {
          name: ["-p", "--pin"],
          description:
            "Pins the latest release of a channel instead of using the channel directly",
        },
        {
          name: ["--flavor", "--env"],
          description:
            "Sets the Flutter SDK version for a specific project flavor",
          args: { name: "flavor" },
        },
        skipPubGetOption,
        {
          name: ["-s", "--skip-setup"],
          description:
            "Skips downloading SDK dependencies after switching versions",
        },
      ],
    },
  ],
};

export default completionSpec;
