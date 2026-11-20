import {
  disableBuildServersOption,
  frameworkOption,
  noLogoOption,
  projectFileGenerator,
  useCurrentRuntimeOption,
  verbosityOption,
} from "./shared";

const completionSpec: Fig.Spec = {
  name: "store",
  description:
    "Stores the specified assemblies for the .NET Platform. By default, these will be optimized for the target runtime and framework",
  options: [
    {
      name: ["-m", "--manifest"],
      description:
        "The XML file that contains the list of packages to be stored",
      isRepeatable: true,
      args: {
        name: "project-manifest",
        generators: projectFileGenerator,
      },
    },
    {
      name: "--framework-version",
      description:
        "The Microsoft.NETCore.App package version that will be used to run the assemblies",
      args: {
        name: "framework-version",
      },
    },
    {
      name: ["-o", "--output"],
      description: "The output directory to store the given assemblies in",
      args: {
        name: "output-dir",
        template: "folders",
      },
    },
    {
      name: ["-w", "--working-dir"],
      description: "The working directory used by the command to execute",
      args: {
        name: "working-dir",
        template: "folders",
      },
    },
    {
      name: "--skip-optimization",
      description: "Skip the optimization phase",
    },
    {
      name: "--skip-symbols",
      description:
        "Skip creating symbol files which can be used for profiling the optimized assemblies",
    },
    frameworkOption(
      "The target framework to store packages for. The target framework has to be specified in the project file"
    ),
    {
      name: ["-r", "--runtime"],
      description: "The target runtime to store packages for",
      args: {
        name: "runtime-identifier",
      },
    },
    verbosityOption(),
    useCurrentRuntimeOption("Use current runtime as the target runtime"),
    disableBuildServersOption,
    noLogoOption,
  ],
};

export default completionSpec;
