import {
  artifactsPathOption,
  configurationOption,
  disableBuildServersOption,
  frameworkOption,
  interactiveOption,
  msbuildOptions,
  noLogoOption,
  outputOption,
  projectSolutionOrFileGenerator,
  verbosityOption,
} from "./shared";

const completionSpec: Fig.Spec = {
  name: "clean",
  // The dotnet CLI does not bundle single-dash flags (-lp, -bl, -lang, ...).
  parserDirectives: { flagsArePosixNoncompliant: true },
  description: ".NET Clean Command",
  args: {
    name: "project | solution | file",
    description:
      "The project or solution or C# (file-based program) file to operate on. If a file is not specified, the command will search the current directory for a project or solution",
    isOptional: true,
    isVariadic: true,
    generators: projectSolutionOrFileGenerator,
  },
  options: [
    frameworkOption(
      "The target framework to clean for. The target framework must also be specified in the project file"
    ),
    {
      name: ["-r", "--runtime"],
      description: "The target runtime to clean for",
      args: {
        name: "runtime-identifier",
      },
    },
    configurationOption(
      "The configuration to clean for. The default for most projects is 'Debug'"
    ),
    interactiveOption,
    verbosityOption(),
    outputOption("The directory containing the build artifacts to clean"),
    artifactsPathOption,
    noLogoOption,
    disableBuildServersOption,
    ...msbuildOptions(),
  ],
  subcommands: [
    {
      name: "file-based-apps",
      description: "Removes artifacts created for file-based apps",
      hidden: true,
      options: [
        {
          name: "--dry-run",
          description:
            "Determines changes without actually modifying the file system",
        },
        {
          name: "--days",
          description:
            "How many days an artifact folder needs to be unused in order to be removed",
          args: {
            name: "days",
          },
        },
      ],
    },
  ],
};

export default completionSpec;
