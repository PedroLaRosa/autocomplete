import {
  artifactsPathOption,
  configurationOption,
  disableBuildServersOption,
  frameworkOption,
  implicitRestoreOptions,
  interactiveOption,
  msbuildOptions,
  noDependenciesOption,
  noLogoOption,
  noRestoreOption,
  outputOption,
  projectSolutionOrFileGenerator,
  selfContainedOptions,
  targetPlatformOptions,
  useCurrentRuntimeOption,
  verbosityOption,
  versionSuffixOption,
} from "./shared";

const completionSpec: Fig.Spec = {
  name: "publish",
  // The dotnet CLI does not bundle single-dash flags (-lp, -bl, -lang, ...).
  parserDirectives: { flagsArePosixNoncompliant: true },
  description: "Publisher for the .NET Platform",
  args: {
    name: "project | solution | file",
    description:
      "The project or solution or C# (file-based program) file to operate on. If a file is not specified, the command will search the current directory for a project or solution",
    isOptional: true,
    isVariadic: true,
    generators: projectSolutionOrFileGenerator,
  },
  options: [
    ...implicitRestoreOptions(),
    useCurrentRuntimeOption("Use current runtime as the target runtime"),
    noDependenciesOption(
      "Do not restore project-to-project references and only restore the specified project"
    ),
    outputOption("The output directory to place the published artifacts in"),
    artifactsPathOption,
    {
      name: "--manifest",
      description:
        "The path to a target manifest file that contains the list of packages to be excluded from the publish step",
      isRepeatable: true,
      args: {
        name: "manifest",
        template: "filepaths",
      },
    },
    {
      name: "--no-build",
      description:
        "Do not build the project before publishing. Implies --no-restore",
    },
    ...selfContainedOptions,
    noLogoOption,
    frameworkOption(
      "The target framework to publish for. The target framework has to be specified in the project file"
    ),
    configurationOption(
      "The configuration to publish for. The default is 'Release' for NET 8.0 projects and above, but 'Debug' for older projects"
    ),
    versionSuffixOption,
    interactiveOption,
    noRestoreOption,
    verbosityOption(),
    ...targetPlatformOptions(
      "The target runtime to publish for. This is used when creating a self-contained deployment. The default is to publish a framework-dependent application"
    ),
    disableBuildServersOption,
    ...msbuildOptions(),
  ],
};

export default completionSpec;
