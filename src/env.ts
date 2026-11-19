// env (macOS 15.5 BSD env, man env(1), 2026-11-19). Source: man env
const enviromentVariables: Fig.Generator = {
  custom: async (_tokens, _executeCommand, generatorContext) => {
    return Object.keys(generatorContext.environmentVariables).map((envVar) => ({
      name: envVar,
      description: "Environment variable",
      icon: "🌎",
    }));
  },
};

const completionSpec: Fig.Spec = {
  name: "env",
  description: "Set environment and execute command, or print environment",
  options: [
    {
      name: "-0",
      description: "End each output line with NUL, not newline",
    },
    {
      name: ["-i", "-"],
      description: "Start with an empty environment",
    },
    {
      name: "-v",
      description: "Print verbose logs; repeat for more detail",
      isRepeatable: true,
    },
    {
      name: "-u",
      description: "Remove variable from the environment",
      isRepeatable: true,
      args: {
        name: "name",
        generators: enviromentVariables,
      },
    },
    {
      name: "-C",
      description:
        "Change to the given working directory before running the utility",
      args: {
        name: "altwd",
        template: "folders",
      },
    },
    {
      name: "-P",
      description:
        "Search the given directories for the utility, rather than the PATH",
      args: {
        name: "altpath",
        template: "folders",
      },
    },
    {
      name: "-S",
      description: "Split the given string into separate arguments",
      args: {
        name: "string",
      },
    },
  ],
  // Only uncomment if env takes an argument
  args: [
    {
      name: "name=value ...",
      description: "Set environment variables",
      isOptional: true,
    },
    {
      name: "utility",
      description: "Utility to run",
      isOptional: true,
      isCommand: true,
    },
  ],
};
export default completionSpec;
