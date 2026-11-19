import { projectFileGenerator, solutionFileGenerator } from "./shared";

const completionSpec: Fig.Spec = {
  name: ["solution", "sln"],
  description: ".NET modify solution file command",
  args: {
    name: "sln_file",
    description:
      "The solution file to operate on. If not specified, the command will search the current directory for one",
    isOptional: true,
    generators: solutionFileGenerator,
  },
  subcommands: [
    {
      name: "add",
      description: "Add one or more projects to a solution file",
      args: {
        name: "project_path",
        description: "The paths to the projects to add to the solution",
        isOptional: true,
        isVariadic: true,
        generators: projectFileGenerator,
      },
      options: [
        {
          name: "--in-root",
          description:
            "Place project in root of the solution, rather than creating a solution folder",
        },
        {
          name: ["-s", "--solution-folder"],
          description:
            "The destination solution folder path to add the projects to",
          args: {
            name: "solution_folder",
          },
        },
        {
          name: "--include-references",
          description:
            "Recursively add projects' ReferencedProjects to solution. The default is true",
          args: {
            name: "include-references",
            isOptional: true,
            suggestions: ["true", "false"],
          },
        },
      ],
    },
    {
      name: "list",
      description: "List all projects in a solution file",
      options: [
        {
          name: "--solution-folders",
          description: "Display solution folder paths",
        },
      ],
    },
    {
      name: "remove",
      description: "Remove one or more projects from a solution file",
      args: {
        name: "project_path",
        description: "The project paths or names to remove from the solution",
        isOptional: true,
        isVariadic: true,
        generators: projectFileGenerator,
      },
    },
    {
      name: "migrate",
      description: "Generate a .slnx file from a .sln file",
    },
  ],
};

export default completionSpec;
