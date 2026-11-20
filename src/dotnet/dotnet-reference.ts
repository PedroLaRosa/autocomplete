import {
  projectFileGenerator,
  referenceAddSubcommand,
  referenceListSubcommand,
  referenceRemoveSubcommand,
} from "./shared";

const completionSpec: Fig.Spec = {
  name: "reference",
  description: "Manage project-to-project references of a project",
  options: [
    {
      name: "--project",
      description:
        "The project file to operate on. If a file is not specified, the command will search the current directory for one",
      args: {
        name: "project",
        generators: projectFileGenerator,
      },
    },
  ],
  subcommands: [
    referenceAddSubcommand("add"),
    referenceListSubcommand("list"),
    referenceRemoveSubcommand("remove"),
  ],
};

export default completionSpec;
