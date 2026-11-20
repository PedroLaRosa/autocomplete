// SDKMAN! v5.24.0, native v0.8.0 (GitHub releases sdkman/sdkman-cli and sdkman/sdkman-cli-native, 2026-10-24). Source: clap tree in sdkman-cli-native src/lib.rs, alias table in src/main/bash/sdkman-main.sh and contrib/completion/bash/sdk

// `sdk` is a shell function, not a binary, so generators read $SDKMAN_DIR directly
const sdkmanDir = '"${SDKMAN_DIR:-$HOME/.sdkman}"';

const allSdks: Fig.Generator = {
  script: ["bash", "-c", `cat ${sdkmanDir}/var/candidates`],
  splitOn: ",",
  cache: { strategy: "stale-while-revalidate" },
};

const installedSdks: Fig.Generator = {
  script: ["bash", "-c", `ls -1 ${sdkmanDir}/candidates`],
  splitOn: "\n",
};

// The SDK is always the token right before the version being typed
const installedVersions: Fig.Generator = {
  script: (tokens) => [
    "bash",
    "-c",
    `ls -1 ${sdkmanDir}/candidates/"$1" | grep -vx current`,
    "_",
    tokens[tokens.length - 2],
  ],
  splitOn: "\n",
};

// Same call the official bash completion makes
const availableVersions: Fig.Generator = {
  script: (tokens) => [
    "bash",
    "-c",
    `curl -s --max-time 5 "\${SDKMAN_CANDIDATES_API:-https://api.sdkman.io/2}/candidates/$1/$(cat ${sdkmanDir}/var/platform)/versions/all"`,
    "_",
    tokens[tokens.length - 2],
  ],
  splitOn: ",",
  cache: { ttl: 1000 * 60 * 60, cacheByDirectory: false },
};

const sdkArg = (
  description: string,
  generators: Fig.Generator,
  isOptional?: boolean
): Fig.Arg => ({
  name: "sdk",
  description,
  generators,
  ...(isOptional && { isOptional }),
});

const installedVersionArg = (description: string): Fig.Arg => ({
  name: "version",
  description,
  generators: installedVersions,
});

const commands: Fig.Subcommand[] = [
  {
    name: ["install", "i"],
    description: "Install a version of an SDK",
    args: [
      sdkArg("The SDK, such as java", allSdks),
      {
        name: "version",
        description: "The version to install",
        isOptional: true,
        generators: availableVersions,
      },
      {
        name: "path",
        description: "The directory of an SDK already on this machine",
        isOptional: true,
        template: "folders",
      },
    ],
  },
  {
    name: ["uninstall", "rm"],
    description: "Uninstall a version of an SDK",
    options: [
      {
        name: ["-f", "--force"],
        description: "Uninstall even if it is the default version",
      },
    ],
    args: [
      sdkArg("The SDK, such as java", installedSdks),
      installedVersionArg("The installed version to uninstall"),
    ],
  },
  {
    name: ["list", "ls", "l"],
    description: "List SDKs or the versions of an SDK",
    args: sdkArg("The SDK whose versions to list", allSdks, true),
  },
  {
    name: ["use", "u"],
    description: "Use a version of an SDK in this shell",
    args: [
      sdkArg("The SDK, such as java", installedSdks),
      installedVersionArg("The installed version to use"),
    ],
  },
  {
    name: ["default", "d"],
    description: "Set the default version of an SDK",
    args: [
      sdkArg("The SDK, such as java", installedSdks),
      installedVersionArg("The installed version to make the default"),
    ],
  },
  {
    name: ["current", "c"],
    description: "Show the default version of one or all SDKs",
    args: sdkArg("The SDK whose default version to show", installedSdks, true),
  },
  {
    name: ["home", "h"],
    description: "Print the directory of an installed version",
    args: [
      sdkArg("The SDK, such as java", installedSdks),
      installedVersionArg("The installed version"),
    ],
  },
  {
    name: ["env", "e"],
    description: "Use the versions in a project config",
    subcommands: [
      {
        name: "init",
        description: "Create a project config with the default version of java",
      },
      {
        name: "install",
        description: "Install the versions in the project config and use them",
      },
      { name: "clear", description: "Go back to the default versions" },
    ],
  },
  {
    name: ["upgrade", "ug"],
    description: "Upgrade SDKs to their recommended version",
    args: sdkArg("The SDK to upgrade", installedSdks, true),
  },
  {
    name: "update",
    description: "Update the list of SDKs and versions",
  },
  {
    name: "selfupdate",
    description: "Replace SDKMAN! with a newer version",
    subcommands: [
      {
        name: "force",
        description: "Reinstall even if there is no newer version",
      },
    ],
  },
  {
    name: "flush",
    description: "Flush temporary files and cached data",
    subcommands: [
      {
        name: "tmp",
        description: "Flush downloaded archives and leftover hook scripts",
      },
      { name: "metadata", description: "Flush cached metadata about SDKs" },
      { name: "version", description: "Flush the cached SDKMAN! versions" },
    ],
  },
  {
    name: "config",
    description: "Edit the SDKMAN! config",
  },
  {
    name: ["version", "v"],
    description: "Show the SDKMAN! version",
  },
];

const completionSpec: Fig.Spec = {
  name: "sdk",
  description: "The command line interface for SDKMAN!",
  options: [
    {
      name: ["-h", "--help"],
      description: "Print help",
      isPersistent: true,
    },
  ],
  subcommands: [
    ...commands,
    {
      name: "help",
      description: "Show help for a command",
      args: {
        name: "command",
        description: "The command to show help for",
        isOptional: true,
        suggestions: commands.map(({ name, description }) => ({
          name: typeof name === "string" ? name : name[0],
          description,
        })),
      },
    },
  ],
};
export default completionSpec;
