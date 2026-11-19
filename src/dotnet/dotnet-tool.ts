import {
  configFileGenerator,
  nugetRestoreOptions,
  nugetSearchGenerator,
  nugetVersionGenerator,
  verbosityOption,
} from "./shared";

const packageGenerator = nugetSearchGenerator("DotnetTool");

const versionSearchGenerator = nugetVersionGenerator([
  "install",
  "update",
  "execute",
  "exec",
]);

const toolListGenerator: Fig.Generator = {
  trigger: () => true,
  script(context) {
    const globalFlags = ["-g", "--global"];

    if (context.some((ctx) => globalFlags.includes(ctx))) {
      return ["dotnet", "tool", "list", "--global"];
    }

    return ["dotnet", "tool", "list"];
  },
  postProcess(out) {
    const lines = out.split("\n").slice(2);

    return lines.map<Fig.Suggestion>((line) => {
      const argRegex = /(([a-zA-Z \.\[\]#,/][^ ]{1,})+)/g;
      const [pkg, version, commands] = line
        .match(argRegex)
        .map((match) => match.trim());

      return {
        insertValue: pkg,
        name: pkg,
        description: commands,
      };
    });
  },
};

const globalOption = (description: string): Fig.Option => ({
  name: ["-g", "--global"],
  description,
  exclusiveOn: ["--local", "--tool-path"],
});

const localOption = (description: string): Fig.Option => ({
  name: "--local",
  description,
  exclusiveOn: ["--global", "--tool-path"],
});

const toolPathOption = (description: string): Fig.Option => ({
  name: "--tool-path",
  description,
  exclusiveOn: ["--global", "--local"],
  args: {
    name: "path",
    template: "folders",
  },
});

const toolManifestOption: Fig.Option = {
  name: "--tool-manifest",
  description: "Path to the manifest file",
  args: {
    name: "path",
    isOptional: true,
    template: "filepaths",
  },
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
  name: "--source",
  description:
    "Replace all NuGet package sources to use during installation with these",
  isRepeatable: true,
  args: {
    name: "source",
  },
};

const addSourceOption: Fig.Option = {
  name: "--add-source",
  description:
    "Add an additional NuGet package source to use during installation",
  isRepeatable: true,
  args: {
    name: "addsource",
  },
};

const prereleaseOption: Fig.Option = {
  name: "--prerelease",
  description: "Include pre-release packages",
};

const allowRollForwardOption: Fig.Option = {
  name: "--allow-roll-forward",
  description:
    "Allow a .NET tool to roll forward to newer versions of the .NET runtime if the runtime it targets isn't installed",
};

const versionOption: Fig.Option = {
  name: "--version",
  description: "The version of the tool package to install",
  args: {
    name: "version",
    debounce: true,
    generators: versionSearchGenerator,
  },
};

// Shared by `dotnet tool install` and `dotnet tool update`.
const toolUpdateInstallOptions: Fig.Option[] = [
  globalOption("Install the tool for the current user"),
  localOption("Install the tool and add to the local tool manifest (default)"),
  toolPathOption(
    "The directory where the tool will be installed. The directory will be created if it does not exist"
  ),
  versionOption,
  configFileOption,
  toolManifestOption,
  addSourceOption,
  sourceOption,
  {
    name: "--framework",
    description: "The target framework to install the tool for",
    args: {
      name: "framework",
    },
  },
  prereleaseOption,
  ...nugetRestoreOptions(),
  verbosityOption(
    "Set the MSBuild verbosity level. Allowed values are q[uiet], m[inimal], n[ormal], d[etailed], and diag[nostic]"
  ),
  {
    name: "--allow-downgrade",
    description: "Allow package downgrade when installing a .NET tool package",
  },
];

const completionSpec: Fig.Spec = {
  name: "tool",
  description: "Install or work with tools that extend the .NET experience",
  subcommands: [
    {
      name: "install",
      description:
        "Install global or local tool. Local tools are added to manifest and restored",
      args: {
        name: "packageId",
        description:
          "Package reference in the form of a package identifier like 'dotnetsay' or package identifier and version separated by '@' like 'dotnetsay@2.1.7'",
        debounce: true,
        generators: packageGenerator,
      },
      options: [
        ...toolUpdateInstallOptions,
        {
          name: ["-a", "--arch"],
          description: "The target architecture",
          args: {
            name: "arch",
            suggestions: ["x86", "x64", "arm", "arm64"],
          },
        },
        {
          name: "--create-manifest-if-needed",
          description:
            "Create a tool manifest if one isn't found during tool installation. For information on how manifests are located, see https://aka.ms/dotnet/tools/create-manifest-if-needed",
        },
        allowRollForwardOption,
      ],
    },
    {
      name: "uninstall",
      description: "Uninstall a global tool or local tool",
      args: {
        name: "packageId",
        description: "Package reference",
        generators: toolListGenerator,
      },
      options: [
        globalOption(
          "Uninstall the tool from the current user's tools directory"
        ),
        localOption(
          "Uninstall the tool and remove it from the local tool manifest"
        ),
        toolPathOption("The directory containing the tool to uninstall"),
        toolManifestOption,
      ],
    },
    {
      name: "update",
      description: "Update a global or local tool",
      args: {
        name: "packageId",
        description:
          "Package reference in the form of a package identifier like 'dotnetsay' or package identifier and version separated by '@' like 'dotnetsay@2.1.7'",
        isOptional: true,
        generators: toolListGenerator,
      },
      options: [
        ...toolUpdateInstallOptions,
        {
          name: "--all",
          description: "Update all tools",
        },
      ],
    },
    {
      name: "list",
      description: "List tools installed globally or locally",
      args: {
        name: "packageId",
        description: "The NuGet Package Id of the tool to list",
        isOptional: true,
        generators: toolListGenerator,
      },
      options: [
        globalOption("List tools installed for the current user"),
        localOption("List the tools installed in the local tool manifest"),
        toolPathOption("The directory containing the tools to list"),
        {
          name: "--format",
          description: "The output format for the list of tools",
          args: {
            name: "format",
            suggestions: ["table", "json"],
          },
        },
      ],
    },
    {
      name: "run",
      description:
        "Run a local tool. Note that this command cannot be used to run a global tool",
      args: [
        {
          name: "commandName",
          description: "The command name of the tool to run",
          generators: toolListGenerator,
        },
        {
          name: "toolArguments",
          description: "Arguments forwarded to the tool",
          isOptional: true,
          isVariadic: true,
        },
      ],
      options: [allowRollForwardOption],
    },
    {
      name: "search",
      description: "Search dotnet tools in nuget.org",
      args: {
        name: "searchTerm",
        description:
          "Search term from package id or package description. Require at least one character",
      },
      options: [
        {
          name: "--detail",
          description: "Show detail result of the query",
        },
        {
          name: "--skip",
          description: "The number of results to skip, for pagination",
          args: {
            name: "skip",
          },
        },
        {
          name: "--take",
          description: "The number of results to return, for pagination",
          args: {
            name: "take",
          },
        },
        prereleaseOption,
      ],
    },
    {
      name: "restore",
      description: "Restore tools defined in the local tool manifest",
      options: [
        configFileOption,
        addSourceOption,
        {
          ...toolManifestOption,
          description: "Path to the manifest file",
        },
        verbosityOption(
          "Set the MSBuild verbosity level. Allowed values are q[uiet], m[inimal], n[ormal], d[etailed], and diag[nostic]"
        ),
        ...nugetRestoreOptions(),
      ],
    },
    {
      name: ["execute", "exec"],
      description:
        "Executes a tool from source without permanently installing it",
      args: [
        {
          name: "packageId",
          description:
            "Package reference in the form of a package identifier like 'dotnetsay' or package identifier and version separated by '@' like 'dotnetsay@2.1.7'",
          debounce: true,
          generators: packageGenerator,
        },
        {
          name: "commandArguments",
          description: "Arguments forwarded to the tool",
          isOptional: true,
          isVariadic: true,
        },
      ],
      options: [
        {
          ...versionOption,
          description: "The version of the tool package to run",
        },
        {
          name: ["-y", "--yes"],
          description: "Accept all confirmation prompts using 'yes'",
        },
        allowRollForwardOption,
        prereleaseOption,
        configFileOption,
        sourceOption,
        addSourceOption,
        verbosityOption(
          "Set the MSBuild verbosity level. Allowed values are q[uiet], m[inimal], n[ormal], d[etailed], and diag[nostic]"
        ),
        ...nugetRestoreOptions(),
      ],
    },
  ],
};

export default completionSpec;
