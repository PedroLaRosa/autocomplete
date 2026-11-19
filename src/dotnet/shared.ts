import { filepaths } from "@tabsmith/autocomplete-generators";

// Shared helpers for the dotnet specs (not a spec itself).

type NuGetSearchResult = {
  id: string;
  title: string;
  description: string;
};

export const projectFileGenerator = filepaths({
  extensions: ["csproj", "fsproj", "vbproj"],
});

export const solutionFileGenerator = filepaths({
  extensions: ["sln", "slnx"],
});

export const projectOrSolutionGenerator = filepaths({
  extensions: ["csproj", "fsproj", "vbproj", "sln", "slnx", "slnf"],
});

// File-based programs (`dotnet run app.cs`) are accepted wherever a project is.
export const projectSolutionOrFileGenerator = filepaths({
  extensions: ["csproj", "fsproj", "vbproj", "sln", "slnx", "slnf", "cs"],
});

export const projectOrFileGenerator = filepaths({
  extensions: ["csproj", "fsproj", "vbproj", "cs"],
});

export const configFileGenerator = filepaths({ equals: "nuget.config" });

export const nupkgGenerator = filepaths({ extensions: ["nupkg"] });

/** NuGet search generator for `packageType` (Dependency, DotnetTool, Template). */
export const nugetSearchGenerator = (packageType: string): Fig.Generator => ({
  script(context) {
    const searchTerm = context[context.length - 1];
    return [
      "curl",
      "-s",
      "-H",
      "Accept: application/json",
      `https://azuresearch-usnc.nuget.org/query?packageType=${packageType}&q=${searchTerm}`,
    ];
  },
  postProcess(out) {
    const searchResults: NuGetSearchResult[] = JSON.parse(out).data;

    return searchResults.map<Fig.Suggestion>((value) => {
      return {
        name: value.title,
        insertValue: value.id,
        description: value.description,
      };
    });
  },
});

/** Lists the versions of the package typed after one of `commands`. */
export const nugetVersionGenerator = (commands: string[]): Fig.Generator => ({
  script(context) {
    const command = context.filter((ctx) => !ctx.startsWith("-"));
    const idx = command.findIndex((ctx) => commands.includes(ctx));
    const searchTerm = command[idx + 1].toLowerCase();

    return [
      "curl",
      "-s",
      "-H",
      "Accept: application/json",
      `https://api.nuget.org/v3-flatcontainer/${searchTerm}/index.json`,
    ];
  },
  postProcess(out) {
    const versions: string[] = JSON.parse(out).versions;

    return versions.reverse().map<Fig.Suggestion>((value) => {
      return {
        name: value,
      };
    });
  },
});

export const verbosityLevels = [
  "quiet",
  "minimal",
  "normal",
  "detailed",
  "diagnostic",
];

export const verbosityOption = (
  description = "Set the MSBuild verbosity level. Allowed values are q[uiet], m[inimal], n[ormal], d[etailed], and diag[nostic]"
): Fig.Option => ({
  name: ["-v", "--verbosity"],
  description,
  args: {
    name: "level",
    suggestions: verbosityLevels,
  },
});

export const interactiveOption: Fig.Option = {
  name: "--interactive",
  description:
    "Allows the command to stop and wait for user input or action (for example to complete authentication)",
};

export const noRestoreOption: Fig.Option = {
  name: "--no-restore",
  description: "Do not restore the project before building",
};

export const noLogoOption: Fig.Option = {
  name: ["--no-logo", "--nologo"],
  description: "Do not display the startup banner or the copyright message",
};

export const configurationOption = (description: string): Fig.Option => ({
  name: ["-c", "--configuration"],
  description,
  args: {
    name: "configuration",
    suggestions: ["Debug", "Release"],
  },
});

export const frameworkOption = (description: string): Fig.Option => ({
  name: ["-f", "--framework"],
  description,
  args: {
    name: "framework",
  },
});

export const outputOption = (description: string): Fig.Option => ({
  name: ["-o", "--output"],
  description,
  args: {
    name: "output-dir",
    template: "folders",
  },
});

export const artifactsPathOption: Fig.Option = {
  name: "--artifacts-path",
  description:
    "The artifacts path. All output from the project, including build, publish, and pack output, will go in subfolders under the specified path",
  args: {
    name: "artifacts-dir",
    template: "folders",
  },
};

export const disableBuildServersOption: Fig.Option = {
  name: "--disable-build-servers",
  description: "Force the command to ignore any persistent build servers",
};

export const versionSuffixOption: Fig.Option = {
  name: "--version-suffix",
  description:
    "Set the value of the $(VersionSuffix) property to use when building the project",
  args: {
    name: "version-suffix",
  },
};

export const noDependenciesOption = (description: string): Fig.Option => ({
  name: "--no-dependencies",
  description,
});

/** `-r|--runtime`, `-a|--arch` and `--os` (the latter two are RID shorthands). */
export const targetPlatformOptions = (
  runtimeDescription: string,
  isRuntimeRepeatable = false
): Fig.Option[] => [
  {
    name: ["-r", "--runtime"],
    description: runtimeDescription,
    isRepeatable: isRuntimeRepeatable,
    args: {
      name: "runtime-identifier",
    },
  },
  {
    name: ["-a", "--arch"],
    description:
      "The target architecture. A shorthand for the runtime identifier (RID); cannot be combined with -r|--runtime",
    args: {
      name: "arch",
      suggestions: ["x86", "x64", "arm", "arm64"],
    },
  },
  {
    name: "--os",
    description:
      "The target operating system. A shorthand for the runtime identifier (RID); cannot be combined with -r|--runtime",
    args: {
      name: "os",
    },
  },
];

export const useCurrentRuntimeOption = (description: string): Fig.Option => ({
  name: ["--use-current-runtime", "--ucr"],
  description,
});

export const selfContainedOptions: Fig.Option[] = [
  {
    name: ["--self-contained", "--sc"],
    description:
      "Publish the .NET runtime with your application so the runtime doesn't need to be installed on the target machine. The default is false; however, when targeting .NET 7 or lower, the default is true if a runtime identifier is specified",
    args: {
      name: "self-contained",
      isOptional: true,
      suggestions: ["true", "false"],
    },
  },
  {
    name: "--no-self-contained",
    description:
      "Publish your application as a framework dependent application. A compatible .NET runtime must be installed on the target machine to run your application",
  },
];

export const msbuildTargetOption = (
  description = "Build these targets in this project. Use a semicolon or a comma to separate multiple targets, or specify each target separately"
): Fig.Option => ({
  name: ["-t", "--target"],
  description,
  isRepeatable: true,
  args: {
    name: "target",
  },
});

/** MSBuild pass-through options that the dotnet CLI forwards to MSBuild. */
export const msbuildOptions = (targetDescription?: string): Fig.Option[] => [
  {
    name: ["-p", "--property"],
    description: "Set or override MSBuild properties (NAME=VALUE)",
    isRepeatable: true,
    args: {
      name: "name=value",
    },
  },
  msbuildTargetOption(targetDescription),
  {
    name: ["-bl", "--binaryLogger"],
    description: "Serialize all build events to a compressed binary file",
    args: {
      name: "file",
      isOptional: true,
      template: "filepaths",
    },
  },
  {
    name: "--getProperty",
    description: "Print the values of the given MSBuild properties",
    hidden: true,
    isRepeatable: true,
    args: { name: "property" },
  },
  {
    name: "--getItem",
    description: "Print the given MSBuild items",
    hidden: true,
    isRepeatable: true,
    args: { name: "item" },
  },
  {
    name: "--getTargetResult",
    description: "Print the output of the given MSBuild targets",
    hidden: true,
    isRepeatable: true,
    args: { name: "target" },
  },
  {
    name: "--getResultOutputFile",
    description: "Redirect the output of the --get* options to a file",
    hidden: true,
    isRepeatable: true,
    args: { name: "file", template: "filepaths" },
  },
];

/**
 * Options of the implicit restore that build, publish, pack, run and others
 * run. `dotnet restore` documents all of them; elsewhere only --source and
 * --force are documented, the rest is hidden in the CLI help.
 */
export const implicitRestoreOptions = (
  isRestoreCommand = false
): Fig.Option[] => [
  {
    name: isRestoreCommand ? ["-s", "--source"] : "--source",
    description: "The NuGet package source to use for the restore",
    isRepeatable: true,
    args: {
      name: "source",
    },
  },
  {
    name: "--packages",
    description: "The directory to restore packages to",
    hidden: !isRestoreCommand,
    args: {
      name: "packages-dir",
      template: "folders",
    },
  },
  {
    name: "--disable-parallel",
    description: "Prevent restoring multiple projects in parallel",
    hidden: !isRestoreCommand,
  },
  {
    name: "--configfile",
    description: "The NuGet configuration file to use",
    hidden: !isRestoreCommand,
    args: {
      name: "file",
      generators: configFileGenerator,
    },
  },
  {
    name: "--no-http-cache",
    description: "Disable HTTP caching for packages",
    hidden: !isRestoreCommand,
  },
  {
    name: "--ignore-failed-sources",
    description: "Treat package source failures as warnings",
    hidden: !isRestoreCommand,
  },
  {
    name: "--no-cache",
    description: "Do not cache packages and HTTP requests",
    hidden: true,
  },
  {
    name: isRestoreCommand ? ["-f", "--force"] : "--force",
    description:
      "Force all dependencies to be resolved even if the last restore was successful. This is equivalent to deleting project.assets.json",
  },
];

/** The NuGet restore options shared by `dotnet tool` and `dotnet workload`. */
export const nugetRestoreOptions = (hidden = false): Fig.Option[] => [
  {
    name: "--disable-parallel",
    description: "Prevent restoring multiple projects in parallel",
    hidden,
  },
  {
    name: "--ignore-failed-sources",
    description: "Treat package source failures as warnings",
    hidden,
  },
  {
    name: "--no-cache",
    description: "Do not cache packages and HTTP requests",
    hidden: true,
  },
  {
    name: "--no-http-cache",
    description: "Do not cache packages and HTTP requests",
    hidden,
  },
  { ...interactiveOption, hidden },
];

// ---------------------------------------------------------------------------
// Package and reference subcommands. They exist twice: as `dotnet package
// add|list|remove` / `dotnet reference add|list|remove` and as the legacy
// `dotnet add|list|remove package|reference` forms.
// ---------------------------------------------------------------------------

const projectOption: Fig.Option = {
  name: "--project",
  description:
    "The project file to operate on. If a file is not specified, the command will search the current directory for one",
  args: {
    name: "project",
    generators: projectFileGenerator,
  },
};

const fileOption: Fig.Option = {
  name: "--file",
  description: "The file-based app to operate on",
  args: {
    name: "file",
    template: "filepaths",
  },
};

export const packageAddSubcommand = (
  name: string,
  // Tokens that directly precede the package id on the command line.
  precedingTokens: string[]
): Fig.Subcommand => ({
  name,
  description: "Add a NuGet package reference to the project",
  args: {
    name: "packageId",
    description:
      "Package reference in the form of a package identifier like 'Newtonsoft.Json' or package identifier and version separated by '@' like 'Newtonsoft.Json@13.0.3'",
    debounce: true,
    generators: nugetSearchGenerator("Dependency"),
  },
  options: [
    {
      name: ["-v", "--version"],
      description: "The version of the package to add",
      args: {
        name: "version",
        debounce: true,
        generators: nugetVersionGenerator(precedingTokens),
      },
    },
    {
      name: ["-f", "--framework"],
      description: "Add the reference only when targeting a specific framework",
      args: {
        name: "framework",
      },
    },
    {
      name: ["-n", "--no-restore"],
      description:
        "Add the reference without performing restore preview and compatibility check",
    },
    {
      name: ["-s", "--source"],
      description: "The NuGet package source to use during the restore",
      args: {
        name: "source",
      },
    },
    {
      name: "--package-directory",
      description: "The directory to restore packages to",
      args: {
        name: "package-dir",
        template: "folders",
      },
    },
    interactiveOption,
    {
      name: "--prerelease",
      description: "Allows prerelease packages to be installed",
    },
    projectOption,
    fileOption,
  ],
});

export const packageListSubcommand = (
  name: string,
  withProjectOption = false
): Fig.Subcommand => ({
  name,
  description: "List all package references of the project or solution",
  options: [
    verbosityOption(),
    {
      name: "--outdated",
      description:
        "Lists packages that have newer versions. Cannot be combined with '--deprecated' or '--vulnerable' options",
      exclusiveOn: ["--deprecated", "--vulnerable"],
    },
    {
      name: "--deprecated",
      description:
        "Lists packages that have been deprecated. Cannot be combined with '--vulnerable' or '--outdated' options",
      exclusiveOn: ["--outdated", "--vulnerable"],
    },
    {
      name: "--vulnerable",
      description:
        "Lists packages that have known vulnerabilities. Cannot be combined with '--deprecated' or '--outdated' options",
      exclusiveOn: ["--outdated", "--deprecated"],
    },
    {
      name: ["-f", "--framework"],
      description:
        "Chooses a framework to show its packages. Use the option multiple times for multiple frameworks",
      isRepeatable: true,
      args: {
        name: "framework",
      },
    },
    {
      name: "--include-transitive",
      description: "Lists transitive and top-level packages",
    },
    {
      name: "--include-prerelease",
      description:
        "Consider packages with prerelease versions when searching for newer packages. Requires the '--outdated' option",
    },
    {
      name: "--highest-patch",
      description:
        "Consider only the packages with a matching major and minor version numbers when searching for newer packages. Requires the '--outdated' option",
    },
    {
      name: "--highest-minor",
      description:
        "Consider only the packages with a matching major version number when searching for newer packages. Requires the '--outdated' option",
    },
    {
      name: ["--config", "--configfile"],
      description:
        "The path to the NuGet config file to use. Requires the '--outdated', '--deprecated' or '--vulnerable' option",
      args: {
        name: "config-file",
        generators: configFileGenerator,
      },
    },
    {
      name: ["-s", "--source"],
      description:
        "The NuGet sources to use when searching for newer packages. Requires the '--outdated', '--deprecated' or '--vulnerable' option",
      isRepeatable: true,
      args: {
        name: "source",
      },
    },
    interactiveOption,
    {
      name: "--format",
      description:
        "Specifies the output format type for the list packages command",
      args: {
        name: "format",
        suggestions: ["console", "json"],
      },
    },
    {
      name: "--output-version",
      description:
        "Specifies the version of machine-readable output. Requires the '--format json' option",
      args: {
        name: "output-version",
      },
    },
    {
      name: "--no-restore",
      description: "Do not restore before running the command",
    },
    ...(withProjectOption ? [projectOption] : []),
  ],
});

export const packageRemoveSubcommand = (
  name: string,
  withProjectOption = false
): Fig.Subcommand => ({
  name,
  description: "Remove a NuGet package reference from the project",
  args: {
    name: "PACKAGE_NAME",
    description: "The package reference to remove",
    isVariadic: true,
  },
  options: [
    interactiveOption,
    ...(withProjectOption ? [projectOption, fileOption] : []),
  ],
});

export const referenceAddSubcommand = (name: string): Fig.Subcommand => ({
  name,
  description: "Add a project-to-project reference to the project",
  args: {
    name: "PROJECT_PATH",
    description: "The paths to the projects to add as references",
    isVariadic: true,
    generators: projectFileGenerator,
  },
  options: [
    {
      name: ["-f", "--framework"],
      description: "Add the reference only when targeting a specific framework",
      args: {
        name: "framework",
      },
    },
    interactiveOption,
  ],
});

export const referenceListSubcommand = (name: string): Fig.Subcommand => ({
  name,
  description: "List all project-to-project references of the project",
});

export const referenceRemoveSubcommand = (name: string): Fig.Subcommand => ({
  name,
  description: "Remove a project-to-project reference from the project",
  args: {
    name: "PROJECT_PATH",
    description: "The paths to the referenced projects to remove",
    isVariadic: true,
    generators: projectFileGenerator,
  },
  options: [
    {
      name: ["-f", "--framework"],
      description:
        "Remove the reference only when targeting a specific framework",
      args: {
        name: "framework",
      },
    },
  ],
});

export default {};
