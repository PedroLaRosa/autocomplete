import {
  packageRemoveSubcommand,
  projectOrFileGenerator,
  referenceRemoveSubcommand,
} from "./shared";

// Legacy form of `dotnet package remove` and `dotnet reference remove`.
const completionSpec: Fig.Spec = {
  name: "remove",
  description:
    "Remove a package or reference from a .NET project (legacy form of 'dotnet package remove' and 'dotnet reference remove')",
  args: {
    name: "PROJECT | FILE",
    description:
      "The project file or C# file-based app to operate on. If a file is not specified, the command will search the current directory for a project file",
    isOptional: true,
    generators: projectOrFileGenerator,
  },
  subcommands: [
    packageRemoveSubcommand("package"),
    referenceRemoveSubcommand("reference"),
  ],
};

export default completionSpec;
