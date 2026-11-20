import {
  artifactsPathOption,
  configurationOption,
  disableBuildServersOption,
  frameworkOption,
  interactiveOption,
  noRestoreOption,
  selfContainedOptions,
  targetPlatformOptions,
  verbosityOption,
} from "./shared";

type LaunchProfile = {
  commandName: string;
};

type LaunchProfiles = Record<string, LaunchProfile>;

const completionSpec: Fig.Spec = {
  name: "run",
  // The dotnet CLI does not bundle single-dash flags (-lp, -bl, -lang, ...).
  parserDirectives: { flagsArePosixNoncompliant: true },
  description: ".NET Run Command",
  options: [
    configurationOption(
      "The configuration to run for. The default for most projects is 'Debug'"
    ),
    frameworkOption(
      "The target framework to run for. The target framework must also be specified in the project file"
    ),
    {
      name: "--project",
      description:
        "Defines the path of the project file to run. Use path to the project file, or path to the directory containing the project file. If not specified, it defaults to the current directory",
      args: {
        name: "project-path",
        template: ["folders", "filepaths"],
      },
    },
    {
      name: "--file",
      description:
        "The path to the file-based app to run (can be also passed as the first argument if there is no project in the current directory)",
      args: {
        name: "file-path",
        template: "filepaths",
      },
    },
    {
      name: ["-p", "--property"],
      description: "Set or override MSBuild properties (NAME=VALUE)",
      hidden: true,
      isRepeatable: true,
      args: {
        name: "name=value",
      },
    },
    {
      name: ["-lp", "--launch-profile"],
      description:
        "The name of the launch profile (if any) to use when launching the application",
      args: {
        name: "launch-profile",
        suggestions: ["Development", "Staging", "Production"],
        generators: {
          script: ["cat", "Properties/launchSettings.json"],
          postProcess(out) {
            const profiles: LaunchProfiles = JSON.parse(out).profiles;

            return Object.keys(profiles).map<Fig.Suggestion>((key) => {
              return {
                name: key,
                priority: 100,
              };
            });
          },
        },
      },
    },
    {
      name: "--no-launch-profile",
      description:
        "Do not attempt to use launchSettings.json or [app].run.json to configure the application",
    },
    {
      name: "--no-launch-profile-arguments",
      description:
        "Do not use arguments specified in launch profile to run the application",
    },
    {
      name: "--device",
      description: "The device identifier to use for running the application",
      args: {
        name: "device",
      },
    },
    {
      name: "--list-devices",
      description: "List available devices for running the application",
    },
    {
      name: "--no-build",
      description:
        "Do not build the project before running. Implies --no-restore",
    },
    interactiveOption,
    noRestoreOption,
    {
      name: "--no-cache",
      description:
        "Skip up to date checks and always build the program before running",
    },
    ...selfContainedOptions,
    verbosityOption(),
    ...targetPlatformOptions("The target runtime to run for"),
    disableBuildServersOption,
    artifactsPathOption,
    {
      name: ["-e", "--environment"],
      description:
        "Sets the value of an environment variable. Creates the variable if it does not exist, overrides if it does. This argument can be specified multiple times to provide multiple variables",
      isRepeatable: true,
      args: {
        name: "name=value",
      },
    },
    {
      name: "--",
      description:
        "Delimits arguments to dotnet run from arguments for the application being run. All arguments after this delimiter are passed to the application run",
    },
  ],
  args: {
    name: "applicationArguments",
    description: "Arguments passed to the application that is being run",
    isOptional: true,
    isVariadic: true,
  },
};

export default completionSpec;
