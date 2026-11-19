import {
  packageListSubcommand,
  projectOrSolutionGenerator,
  referenceListSubcommand,
} from "./shared";

// Legacy form of `dotnet package list` and `dotnet reference list`.
const completionSpec: Fig.Spec = {
  name: "list",
  description:
    "List references or packages of a .NET project (legacy form of 'dotnet package list' and 'dotnet reference list')",
  args: {
    name: "PROJECT | SOLUTION",
    description:
      "The project or solution file to operate on. If a file is not specified, the command will search the current directory for one",
    isOptional: true,
    generators: projectOrSolutionGenerator,
  },
  subcommands: [
    packageListSubcommand("package"),
    referenceListSubcommand("reference"),
  ],
};

export default completionSpec;
