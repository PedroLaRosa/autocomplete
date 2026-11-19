import { filepaths } from "@tabsmith/autocomplete-generators";
import { interactiveOption } from "./shared";

const completionSpec: Fig.Spec = {
  name: "project",
  description: "Work with project files and file-based programs",
  subcommands: [
    {
      name: "convert",
      description: "Convert a file-based program to a project-based program",
      args: {
        name: "file",
        description: "Path to the file-based program",
        generators: filepaths({ extensions: ["cs"] }),
      },
      options: [
        {
          name: ["-o", "--output"],
          description: "Location to place the generated output",
          args: {
            name: "output",
            template: "folders",
          },
        },
        {
          name: "--force",
          description:
            "Force conversion even if there are malformed directives",
        },
        interactiveOption,
        {
          name: "--dry-run",
          description:
            "Determines changes without actually modifying the file system",
        },
      ],
    },
  ],
};

export default completionSpec;
