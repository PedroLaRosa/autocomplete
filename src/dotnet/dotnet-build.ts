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
  name: "build",
  // The dotnet CLI does not bundle single-dash flags (-lp, -bl, -lang, ...).
  parserDirectives: { flagsArePosixNoncompliant: true },
  description: ".NET Builder",
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
    frameworkOption(
      "The target framework to build for. The target framework must also be specified in the project file"
    ),
    configurationOption(
      "The configuration to use for building the project. The default for most projects is 'Debug'"
    ),
    versionSuffixOption,
    noRestoreOption,
    interactiveOption,
    verbosityOption(),
    outputOption("The output directory to place built artifacts in"),
    artifactsPathOption,
    {
      name: "--no-incremental",
      description: "Do not use incremental building",
    },
    noDependenciesOption(
      "Do not build project-to-project references and only build the specified project"
    ),
    noLogoOption,
    ...selfContainedOptions,
    ...targetPlatformOptions("The target runtime to build for"),
    disableBuildServersOption,
    ...msbuildOptions(),
  ],
};

export default completionSpec;
