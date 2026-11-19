const completionSpec: Fig.Spec = {
  name: "completions",
  description:
    "Commands for generating and registering completions for supported shells",
  args: {
    name: "shell",
    description: "The shell for which to generate or register completions",
    isOptional: true,
    suggestions: ["bash", "pwsh", "fish", "zsh", "nushell"],
  },
  subcommands: [
    {
      name: "script",
      description: "Generate the completion script for a supported shell",
      args: {
        name: "shell",
        description: "The shell for which to generate or register completions",
        isOptional: true,
        suggestions: ["bash", "pwsh", "fish", "zsh", "nushell"],
      },
    },
  ],
};

export default completionSpec;
