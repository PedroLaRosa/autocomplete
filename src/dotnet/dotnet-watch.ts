import { projectOrFileGenerator } from "./shared";

const completionSpec: Fig.Spec = {
  name: "watch",
  // The dotnet CLI does not bundle single-dash flags (-lp, -bl, -lang, ...).
  parserDirectives: { flagsArePosixNoncompliant: true },
  description:
    "Restarts or hot reloads the specified application, or runs a specified dotnet command, when changes in source code are detected",
  subcommands: [
    {
      name: "run",
      description: "Run the application and watch for changes (the default)",
      loadSpec: "dotnet/dotnet-run",
    },
    {
      name: "build",
      description: "Build the project when changes are detected",
      loadSpec: "dotnet/dotnet-build",
    },
    {
      name: "test",
      description: "Run the tests when changes are detected",
      loadSpec: "dotnet/dotnet-test",
    },
  ],
  options: [
    {
      name: ["-q", "--quiet"],
      description: "Suppresses all output except warnings and errors",
    },
    {
      name: "--verbose",
      description: "Show verbose output",
    },
    {
      name: "--list",
      description: "Lists all discovered files without starting the watcher",
    },
    {
      name: "--no-hot-reload",
      description: "Suppress hot reload for supported apps",
    },
    {
      name: "--non-interactive",
      description:
        "Runs dotnet-watch in non-interactive mode. This option is only supported when running with Hot Reload enabled. Use this option to prevent console input from being captured",
    },
    {
      name: "--project",
      description:
        "Specifies the path of the project file to run (folder only or including the project file name). If not specified, it defaults to the current directory",
      args: {
        name: "project",
        generators: projectOrFileGenerator,
        template: "folders",
      },
    },
    {
      name: ["-lp", "--launch-profile"],
      description:
        "The name of the launch profile (if any) to use when launching the application",
      hidden: true,
      args: {
        name: "launch-profile",
      },
    },
    {
      name: "--no-launch-profile",
      description:
        "Do not attempt to use launchSettings.json or [app].run.json to configure the application",
      hidden: true,
    },
    {
      name: "--",
      description:
        "Delimits dotnet watch options from the arguments that are passed to the child dotnet process",
    },
  ],
};

export default completionSpec;
