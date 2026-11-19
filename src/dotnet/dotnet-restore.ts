import {
  artifactsPathOption,
  disableBuildServersOption,
  implicitRestoreOptions,
  interactiveOption,
  msbuildOptions,
  noDependenciesOption,
  noLogoOption,
  projectSolutionOrFileGenerator,
  targetPlatformOptions,
  useCurrentRuntimeOption,
  verbosityOption,
} from "./shared";

const completionSpec: Fig.Spec = {
  name: "restore",
  // The dotnet CLI does not bundle single-dash flags (-lp, -bl, -lang, ...).
  parserDirectives: { flagsArePosixNoncompliant: true },
  description: ".NET dependency restorer",
  args: {
    name: "project | solution | file",
    description:
      "The project or solution or C# (file-based program) file to operate on. If a file is not specified, the command will search the current directory for a project or solution",
    isOptional: true,
    isVariadic: true,
    generators: projectSolutionOrFileGenerator,
  },
  options: [
    disableBuildServersOption,
    ...implicitRestoreOptions(true),
    useCurrentRuntimeOption("Use current runtime as the target runtime"),
    noDependenciesOption(
      "Do not restore project-to-project references and only restore the specified project"
    ),
    verbosityOption(),
    interactiveOption,
    artifactsPathOption,
    {
      name: "--use-lock-file",
      description:
        "Enables project lock file to be generated and used with restore",
    },
    {
      name: "--locked-mode",
      description: "Don't allow updating project lock file",
    },
    {
      name: "--lock-file-path",
      description:
        "Output location where project lock file is written. By default, this is 'PROJECT_ROOT\\packages.lock.json'",
      args: {
        name: "lock-file-path",
        template: "filepaths",
      },
    },
    {
      name: "--force-evaluate",
      description:
        "Forces restore to reevaluate all dependencies even if a lock file already exists",
    },
    noLogoOption,
    ...targetPlatformOptions(
      "The target runtime to restore packages for",
      true
    ),
    ...msbuildOptions(
      "Restore these targets in this project. Use a semicolon or a comma to separate multiple targets, or specify each target separately"
    ),
  ],
};

export default completionSpec;
