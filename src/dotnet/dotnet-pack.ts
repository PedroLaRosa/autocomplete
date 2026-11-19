import {
  artifactsPathOption,
  configurationOption,
  disableBuildServersOption,
  implicitRestoreOptions,
  interactiveOption,
  msbuildOptions,
  noDependenciesOption,
  noLogoOption,
  noRestoreOption,
  outputOption,
  projectSolutionOrFileGenerator,
  useCurrentRuntimeOption,
  verbosityOption,
  versionSuffixOption,
} from "./shared";

const completionSpec: Fig.Spec = {
  name: "pack",
  // The dotnet CLI does not bundle single-dash flags (-lp, -bl, -lang, ...).
  parserDirectives: { flagsArePosixNoncompliant: true },
  description: ".NET Core NuGet Package Packer",
  args: {
    name: "project | solution | file",
    description:
      "The project or solution or C# (file-based program) file to operate on. If a file is not specified, the command will search the current directory for a project or solution",
    isOptional: true,
    isVariadic: true,
    generators: projectSolutionOrFileGenerator,
  },
  options: [
    outputOption("The output directory to place built packages in"),
    artifactsPathOption,
    {
      name: "--no-build",
      description:
        "Do not build the project before packing. Implies --no-restore",
    },
    {
      name: "--include-symbols",
      description:
        "Include packages with symbols in addition to regular packages in output directory",
    },
    {
      name: "--include-source",
      description:
        "Include PDBs and source files. Source files go into the 'src' folder in the resulting nuget package",
    },
    {
      name: ["-s", "--serviceable"],
      description:
        "Set the serviceable flag in the package. See https://aka.ms/nupkgservicing for more information",
    },
    noLogoOption,
    interactiveOption,
    noRestoreOption,
    verbosityOption(),
    versionSuffixOption,
    {
      name: "--version",
      description: "The version of the package to create",
      args: {
        name: "version",
      },
    },
    configurationOption(
      "The configuration to use for building the package. The default is 'Release'"
    ),
    disableBuildServersOption,
    ...msbuildOptions(),
    ...implicitRestoreOptions(),
    useCurrentRuntimeOption("Use current runtime as the target runtime"),
    noDependenciesOption(
      "Do not restore project-to-project references and only restore the specified project"
    ),
    {
      name: ["-r", "--runtime"],
      description: "The target runtime to build for",
      args: {
        name: "runtime-identifier",
      },
    },
  ],
};

export default completionSpec;
