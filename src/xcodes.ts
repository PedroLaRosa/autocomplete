// xcodes v2.2.0 (GitHub release, 2026-11-11). Source: Sources/xcodes/App.swift
// at tag 2.2.0 and XcodesOrg/XcodesKit enums (DataSource, ArchitectureFilter)

// Version lines start with a digit; skips the "Showing Xcodes for this Mac" footer
const processXcodeList = (out: string, tokens: string[]) =>
  out
    .split("\n")
    .filter((line) => /^\d/.test(line))
    .reverse()
    .map((line) => ({
      name: line.slice(0, line.indexOf(" (")),
      icon: line.includes("Selected")
        ? "⭐️"
        : line.includes("Installed")
          ? "🔨"
          : tokens.includes("select") || tokens.includes("uninstall")
            ? "🔨"
            : "⬇️",
      description: line.slice(line.indexOf("(")).replace(/[\(\)]/g, ""),
    }));

const allXcodes: Fig.Generator = {
  script: ["xcodes", "list"],
  postProcess: processXcodeList,
};

const installedXcodes: Fig.Generator = {
  script: ["xcodes", "installed"],
  postProcess: processXcodeList,
};

const colorOptions: Fig.Option[] = [
  { name: "--color", description: "Color the output" },
  { name: "--no-color", description: "Do not color the output" },
];

const directory = (
  description = "The directory where your Xcodes are installed. Defaults to /Applications"
): Fig.Option => ({
  name: "--directory",
  description,
  args: { name: "directory", template: "folders" },
});

const dataSource: Fig.Option = {
  name: "--data-source",
  description:
    "The data source for available Xcode versions (default: xcodeReleases)",
  args: { name: "data-source", suggestions: ["xcodeReleases", "apple"] },
};

const architecture = (verb: string): Fig.Option => ({
  name: "--architecture",
  description: `${verb} matching the specified architecture`,
  isRepeatable: true,
  args: {
    name: "architecture",
    suggestions: ["arm64", "x86_64", "appleSilicon", "universal"],
  },
});

const aria2Options = (what: string): Fig.Option[] => [
  {
    name: "--aria2",
    description: "The path to an aria2 executable. Searches $PATH by default",
    args: { name: "aria2", template: "filepaths" },
  },
  {
    name: "--no-aria2",
    description: `Don't use aria2 to download ${what}, even if it's available`,
  },
];

const latestOptions = (verb: string): Fig.Option[] => [
  {
    name: "--latest",
    description: `Update and then ${verb} the latest release version available`,
  },
  {
    name: "--latest-prerelease",
    description: `Update and then ${verb} the latest prerelease version available, including GM seeds and GMs`,
  },
];

const fastlaneOptions: Fig.Option[] = [
  {
    name: "--use-fastlane-auth",
    description: "Use fastlane spaceship session",
  },
  {
    name: "--fastlane-user",
    description: "The fastlane spaceship user",
    args: { name: "fastlane-user" },
  },
];

const runtimeSubcommand = (verb: "download" | "install"): Fig.Subcommand => ({
  name: verb,
  description:
    verb === "install"
      ? "Download and install a specific simulator runtime"
      : "Download a specific simulator runtime",
  icon: "⬇️",
  args: { name: "version", description: `The runtime to ${verb}` },
  options: [
    ...aria2Options("the runtime"),
    directory(
      "The directory to download the runtime archive to. Defaults to ~/Downloads"
    ),
    architecture(
      verb === "install" ? "Install the runtime" : "Download the runtime"
    ),
    ...(verb === "install"
      ? [
          {
            name: "--keep-archive",
            description:
              "Do not delete the runtime archive after the installation is finished",
          },
        ]
      : []),
    ...colorOptions,
  ],
});

const completionSpec: Fig.Spec = {
  name: "xcodes",
  description: "Manage the Xcodes installed on your Mac",
  subcommands: [
    {
      name: "help",
      icon: "ℹ️",
      args: {
        name: "command",
        template: "help",
        isOptional: true,
      },
    },
    {
      name: "download",
      description: "Download a specific version of Xcode",
      icon: "⬇️",
      options: [
        ...latestOptions("download"),
        ...aria2Options("Xcode"),
        directory(
          "The directory to download Xcode to. Defaults to ~/Downloads"
        ),
        ...fastlaneOptions,
        dataSource,
        ...colorOptions,
      ],
      args: {
        name: "version",
        description: "The version to download",
        isOptional: true,
        generators: allXcodes,
      },
    },
    {
      name: "install",
      description: "Download and install a specific version of Xcode",
      icon: "⬇️",
      options: [
        {
          name: "--path",
          description: "Local path to an Xcode .xip or .aea archive",
          args: { name: "path", template: "filepaths" },
        },
        ...latestOptions("install"),
        ...aria2Options("Xcode"),
        {
          name: "--select",
          description: "Select the installed Xcode version after installation",
        },
        {
          name: "--update",
          description: "Whether to update the list before installing",
        },
        {
          name: ["-p", "--print-path"],
          description: "Print the path of the selected Xcode",
        },
        {
          name: "--experimental-unxip",
          description:
            "Use experimental unxip for .xip archives. May speed up unarchiving by up to 2-3x",
        },
        {
          name: "--no-superuser",
          description:
            "Don't ask for superuser (root) permission. Some optional steps of the installation will be skipped",
        },
        {
          name: "--empty-trash",
          description:
            "Permanently delete the Xcode archive after installation instead of moving it to the Trash",
        },
        directory(
          "The directory to install Xcode into. Defaults to /Applications"
        ),
        ...fastlaneOptions,
        dataSource,
        ...colorOptions,
      ],
      args: {
        name: "version",
        description: "The version to install",
        isOptional: true,
        generators: allXcodes,
      },
    },
    {
      name: "installed",
      description: "List the versions of Xcode that are installed",
      icon: "🔨",
      options: [directory(), ...colorOptions],
      args: {
        name: "version",
        description: "The installed version to print the path for",
        isOptional: true,
        generators: installedXcodes,
      },
    },
    {
      name: "list",
      description: "List all versions of Xcode that are available to install",
      icon: "🔍",
      options: [
        architecture("Only list Xcodes"),
        directory(),
        dataSource,
        ...colorOptions,
      ],
    },
    {
      name: "runtimes",
      description: "List all simulator runtimes that are available to install",
      icon: "📱",
      subcommands: [
        runtimeSubcommand("download"),
        runtimeSubcommand("install"),
      ],
      options: [
        {
          name: "--include-betas",
          description: "Include beta runtimes available to install",
        },
        architecture("Only list runtimes"),
        ...colorOptions,
      ],
    },
    {
      name: "select",
      description: "Change the selected Xcode",
      icon: "☑️",
      options: [
        {
          name: ["-p", "--print-path"],
          description: "Print the path of the selected Xcode",
        },
        directory(),
        ...colorOptions,
      ],
      args: {
        name: "version-or-path",
        description: "Version or path of Xcode to select",
        isOptional: true,
        generators: installedXcodes,
      },
    },
    {
      name: "uninstall",
      description: "Uninstall a version of Xcode",
      icon: "❌",
      isDangerous: true,
      args: {
        name: "version",
        isOptional: true,
        generators: installedXcodes,
        isDangerous: true,
      },
      options: [
        {
          name: "--empty-trash",
          description:
            "Completely delete Xcode, instead of keeping it in the user's Trash",
        },
        directory(),
        ...colorOptions,
      ],
    },
    {
      name: "update",
      description: "Update the list of available versions of Xcode",
      icon: "🔄",
      options: [directory(), dataSource, ...colorOptions],
    },
    {
      name: "version",
      description: "Print the version number of xcodes itself",
      options: colorOptions,
    },
    {
      name: "signout",
      description: "Clears the stored username and password",
      options: colorOptions,
    },
  ],
  options: [
    {
      name: ["--help", "-h"],
      description: "Show help information",
      isPersistent: true,
    },
  ],
};
export default completionSpec;
