// Preset v0.12.3 (npm "latest", 2026-02-17). Source: packages/cli/src/cli.ts at preset/preset@v0.12.3
const applyOptions: Fig.Option[] = [
  {
    name: ["--path", "-p"],
    description: "Path to a sub-directory in which to look for a preset",
    args: {
      name: "path",
      isOptional: true,
    },
  },
  {
    name: ["--tag", "-t"],
    description: "Branch or tag to use if the preset is a repository",
    args: {
      name: "tag",
      isOptional: true,
    },
  },
  {
    name: "--ssh",
    description:
      "Clone the repository over SSH (defaults to the repository URL's scheme)",
  },
];

const applyArguments: Fig.Arg[] = [
  {
    name: "resolvable",
    description: "Repository identifier or path to the preset",
    template: ["folders", "filepaths", "history"],
  },
  {
    name: "target-directory",
    description: "Directory in which to apply the preset",
    template: "folders",
    isOptional: true,
  },
];

const completionSpec: Fig.Spec = {
  name: "preset",
  description: "Elegant, ecosystem-agnostic scaffolding tool",
  subcommands: [
    {
      name: "apply",
      description: "Apply a preset",
      options: applyOptions,
      args: applyArguments,
    },
    {
      name: ["init", "initialize"],
      description: "Create a new preset",
      options: [
        {
          name: "--no-git",
          description: "Do not initialize a Git repository",
        },
        {
          name: "--no-install",
          description: "Do not install the preset dependency",
        },
      ],
      args: {
        name: "target-directory",
        description: "Directory in which to apply the preset",
        template: "folders",
        isOptional: true,
      },
    },
  ],
  options: [
    ...applyOptions,
    {
      name: ["--help", "-h"],
      description: "Show help for preset",
    },
    {
      name: ["--version", "-v"],
      description: "Show the version number",
    },
    {
      name: "--no-interaction",
      description: "Disable interactions; prompts use their default answers",
      isPersistent: true,
    },
    {
      name: "--time",
      description: "Display the duration of each action",
      isPersistent: true,
    },
    {
      name: "--debug",
      description: "Use the debug reporter",
      isPersistent: true,
    },
    {
      name: "--silent",
      description: "Do not use a reporter",
      isPersistent: true,
    },
  ],
  args: applyArguments, // `apply` is optional, so its arguments can be used directly
};

export default completionSpec;
