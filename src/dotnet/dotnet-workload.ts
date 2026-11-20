import {
  configFileGenerator,
  nugetRestoreOptions,
  projectOrSolutionGenerator,
  verbosityOption,
} from "./shared";

const workloadIdArgument: Fig.Arg = {
  name: "WORKLOAD_ID",
  description: "The NuGet package ID of the workload to install",
  isVariadic: true,
};

const configFileOption: Fig.Option = {
  name: "--configfile",
  description: "The NuGet configuration file to use",
  args: {
    name: "file",
    generators: configFileGenerator,
  },
};

const sourceOption: Fig.Option = {
  name: ["-s", "--source"],
  description:
    "The NuGet package source to use during the restore. To specify multiple sources, repeat the option",
  isRepeatable: true,
  args: {
    name: "source",
  },
};

const sdkVersionOption: Fig.Option = {
  name: "--sdk-version",
  description: "The version of the SDK",
  hidden: true,
  args: {
    name: "version",
  },
};

const skipSignCheckOption: Fig.Option = {
  name: "--skip-sign-check",
  description:
    "Skip signature verification of workload packages and installers",
  hidden: true,
};

const skipManifestUpdateOption: Fig.Option = {
  name: "--skip-manifest-update",
  description: "Skip updating the workload manifests",
};

const includePreviewsOption: Fig.Option = {
  name: "--include-previews",
  description: "Allow prerelease workload manifests",
};

const tempDirOption: Fig.Option = {
  name: "--temp-dir",
  description:
    "Specify a temporary directory for this command to download and extract NuGet packages (must be secure)",
  args: {
    name: "temp-dir",
    template: "folders",
  },
};

// Options shared by `workload install`, `update` and `restore`.
const installingWorkloadOptions: Fig.Option[] = [
  tempDirOption,
  verbosityOption(),
  sdkVersionOption,
  configFileOption,
  sourceOption,
  {
    name: "--print-download-link-only",
    description: "Only print the list of links to download without downloading",
    hidden: true,
  },
  {
    name: "--from-cache",
    description: "Complete the operation from cache (offline)",
    hidden: true,
    args: {
      name: "directory",
      template: "folders",
    },
  },
  {
    name: "--download-to-cache",
    description:
      "Download packages needed to install a workload to a folder that can be used for offline installation",
    hidden: true,
    args: {
      name: "directory",
      template: "folders",
    },
  },
  includePreviewsOption,
  {
    name: "--from-rollback-file",
    description: "Update workloads based on specified rollback definition file",
    hidden: true,
    args: {
      name: "file",
      template: "filepaths",
    },
  },
  skipSignCheckOption,
  {
    name: "--version",
    description:
      "A workload version to display or one or more workloads and their versions joined by the '@' character",
    args: {
      name: "version",
      isVariadic: true,
    },
  },
  ...nugetRestoreOptions(),
];

const completionSpec: Fig.Spec = {
  name: "workload",
  description: "Install or work with workloads that extend the .NET experience",
  options: [
    {
      name: "--info",
      description: "Display information about installed workloads",
    },
    {
      name: "--version",
      description: "Display the currently installed workload version",
    },
  ],
  subcommands: [
    {
      name: "install",
      description: "Install one or more workloads",
      args: workloadIdArgument,
      options: [...installingWorkloadOptions, skipManifestUpdateOption],
    },
    {
      name: "update",
      description: "Update all installed workloads",
      options: [
        ...installingWorkloadOptions,
        {
          name: "--from-previous-sdk",
          description:
            "Include workloads installed with earlier SDK versions in update",
        },
        {
          name: "--advertising-manifests-only",
          description: "Only update advertising manifests",
        },
        {
          name: "--from-history",
          description:
            "Update workloads to a previous version specified by the argument. Use the 'dotnet workload history' to see available workload history records",
          args: {
            name: "history-id",
          },
        },
        {
          name: "--manifests-only",
          description:
            "Update to the workload versions specified in the history without changing which workloads are installed. Currently installed workloads will be updated to match the specified history version",
          hidden: true,
        },
      ],
    },
    {
      name: "list",
      description: "List workloads available",
    },
    {
      name: "search",
      description: "Search for available workloads",
      args: {
        name: "SEARCH_STRING",
        description:
          "The text to search for in the IDs and descriptions of available workloads",
        isOptional: true,
      },
      subcommands: [
        {
          name: "version",
          description:
            "Output the workload versions: the latest released workload versions of this feature band when no argument is given, the manifest versions of a workload version, or the workload versions that match the given workloads and versions joined by '@'",
          args: {
            name: "WORKLOAD_VERSION",
            description:
              "Output workload manifest versions associated with the provided workload version",
            isOptional: true,
            isVariadic: true,
          },
          options: [
            {
              name: "--format",
              description:
                "Changes the format of outputted workload versions. Can take 'json' or 'list'",
              args: {
                name: "format",
                suggestions: ["json", "list"],
              },
            },
            {
              name: "--take",
              description: "The number of workload versions to output",
              args: {
                name: "take",
              },
            },
            includePreviewsOption,
          ],
        },
      ],
    },
    {
      name: "uninstall",
      description: "Uninstall one or more workloads",
      args: workloadIdArgument,
      options: [skipSignCheckOption, verbosityOption(), sdkVersionOption],
    },
    {
      name: "repair",
      description: "Repair workload installations",
      options: [
        sdkVersionOption,
        configFileOption,
        sourceOption,
        verbosityOption(),
        ...nugetRestoreOptions(),
        skipSignCheckOption,
      ],
    },
    {
      name: "restore",
      description: "Restore workloads required for a project",
      args: {
        name: "PROJECT | SOLUTION",
        description:
          "The project or solution file to operate on. If a file is not specified, the command will search the current directory for one",
        isOptional: true,
        isVariadic: true,
        generators: projectOrSolutionGenerator,
      },
      options: [...installingWorkloadOptions, skipManifestUpdateOption],
    },
    {
      name: "clean",
      description:
        "Removes workload components that may have been left behind from previous updates and uninstallations",
      options: [
        {
          name: "--all",
          description:
            "Causes clean to remove and uninstall all workload components from all SDK versions",
        },
      ],
    },
    {
      name: "config",
      description:
        "Modify or display workload configuration values. To display a value, specify the corresponding command-line option without providing a value. For example: 'dotnet workload config --update-mode'",
      options: [
        {
          name: "--update-mode",
          description:
            "Controls whether updates should look for workload sets or the latest version of each individual manifest",
          args: {
            name: "update-mode",
            isOptional: true,
            suggestions: ["workload-set", "manifests"],
          },
        },
      ],
    },
    {
      name: "history",
      description: "Shows a history of workload installation actions",
    },
    {
      name: "elevate",
      description:
        "Start the elevated server process to facilitate MSI based installations",
      hidden: true,
    },
  ],
};

export default completionSpec;
