import {
  packageAddSubcommand,
  projectOrFileGenerator,
  referenceAddSubcommand,
} from "./shared";

// Legacy form of `dotnet package add` and `dotnet reference add`.
const completionSpec: Fig.Spec = {
  name: "add",
  description:
    "Add a package or reference to a .NET project (legacy form of 'dotnet package add' and 'dotnet reference add')",
  args: {
    name: "PROJECT | FILE",
    description:
      "The project file or C# file-based app to operate on. If a file is not specified, the command will search the current directory for a project file",
    isOptional: true,
    generators: projectOrFileGenerator,
  },
  subcommands: [
    packageAddSubcommand("package", ["package"]),
    referenceAddSubcommand("reference"),
  ],
};

export default completionSpec;
