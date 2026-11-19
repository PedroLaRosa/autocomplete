// wd v0.10.1 (GitHub release mfaerevaag/wd, 2025-06-23; no newer release as of 2026-11-19). Source: wd.sh, wd.1 and _wd.sh at tag v0.10.1 (read statically, not run).
const warpPointsGenerator: Fig.Generator = {
  custom: async (_, executeCommand, context) => {
    const { stdout } = await executeCommand({
      command: "cat",
      // eslint-disable-next-line @tabsmith/fig-linter/no-useless-arrays
      args: [
        context.environmentVariables["WD_CONFIG"] ||
          `${context.environmentVariables["HOME"]}/.warprc`,
      ],
    });

    // each line of the config file is `<name>:<path>`
    const iter = stdout.matchAll(/^([^:\n]+):(.*)$/gm);

    const suggestions: Fig.Suggestion[] = [];

    for (const [, point, path] of iter) {
      suggestions.push({
        name: point,
        description: path || "Warp point",
        icon: "🔘",
        priority: 76,
      });
    }
    return suggestions;
  },
};

const completionSpec: Fig.Spec = {
  name: "wd",
  description: "Warp to directories without using cd",
  args: [
    {
      name: "point",
      description: "Warp point to the specified directory",
      generators: warpPointsGenerator,
      suggestions: [
        {
          name: "..",
          description: "Warp back to the previous directory",
        },
      ],
    },
    {
      name: "path",
      description: "Appended path",
      isOptional: true,
    },
  ],
  subcommands: [
    {
      name: "add",
      description: "Adds the current working directory to your warp points",
      args: {
        name: "point",
        description: "Name of the warp point to be created",
        isOptional: true,
      },
    },
    {
      name: "addcd",
      description:
        "Adds a path to your warp points, named after the directory or a custom name",
      args: [
        {
          name: "path",
          description: "Directory to add as a warp point",
          template: "folders",
        },
        {
          name: "point",
          description: "Name of the warp point to be created",
          isOptional: true,
        },
      ],
    },
    {
      name: "rm",
      description:
        "Removes the given warp points (the current directory's name by default)",
      args: {
        name: "point",
        description: "Name of the warp point to be removed",
        isOptional: true,
        isVariadic: true,
        generators: warpPointsGenerator,
      },
    },
    {
      name: "show",
      description:
        "Print path to given warp point, or the warp points of the current directory",
      args: {
        name: "point",
        description: "Name of the warp point",
        isOptional: true,
        generators: warpPointsGenerator,
      },
    },
    {
      name: "list",
      description: "Print all stored warp points",
    },
    {
      name: "ls",
      description: "Show files from given warp point (ls)",
      args: {
        name: "point",
        description: "Name of the warp point",
        generators: warpPointsGenerator,
      },
    },
    {
      name: "open",
      description:
        "Open the warp point in the default file explorer (open / xdg-open)",
      args: {
        name: "point",
        description: "Name of the warp point",
        generators: warpPointsGenerator,
      },
    },
    {
      name: "path",
      description: "Show the path to given warp point (pwd)",
      args: {
        name: "point",
        description: "Name of the warp point",
        generators: warpPointsGenerator,
      },
    },
    {
      name: "clean",
      description:
        "Remove points warping to nonexistent directories (will prompt unless --force is used)",
    },
    {
      name: "browse",
      description: "Fuzzy search through all your warp points (requires fzf)",
    },
    {
      name: "export",
      description: "Export warp points as static named directories",
    },
    {
      name: "help",
      description: "Show usage and commands of wd",
    },
  ],
  options: [
    {
      name: ["-v", "--version"],
      description: "Print version",
    },
    {
      name: ["-c", "--config"],
      description: "Specify config file (default ~/.warprc)",
      args: {
        name: "file",
        template: "filepaths",
      },
    },
    {
      name: ["-q", "--quiet"],
      description: "Suppress all output",
    },
    {
      name: ["-f", "--force"],
      description:
        "Allows overwriting without warning (for add, addcd & clean)",
    },
  ],
};
export default completionSpec;
