import { filepaths } from "@tabsmith/autocomplete-generators";
import {
  artifactsPathOption,
  configurationOption,
  disableBuildServersOption,
  frameworkOption,
  interactiveOption,
  noLogoOption,
  noRestoreOption,
  targetPlatformOptions,
  verbosityOption,
} from "./shared";

// `dotnet test` runs either VSTest (default) or Microsoft.Testing.Platform
// (opted in through the "test" section of global.json). Options that exist
// in only one of the modes are noted in their description.
const completionSpec: Fig.Spec = {
  name: "test",
  description:
    ".NET Test Command. Runs VSTest by default; to use Microsoft.Testing.Platform, opt in through global.json",
  args: {
    name: "project | solution | directory | dll | exe",
    description:
      "The project, solution, directory, or test assembly to run tests for. If not specified, the current directory is used",
    isOptional: true,
    generators: filepaths({
      extensions: ["csproj", "fsproj", "vbproj", "sln", "slnx", "dll", "exe"],
    }),
  },
  options: [
    {
      name: ["-s", "--settings"],
      description: "The settings file to use when running tests (VSTest only)",
      args: {
        name: "settings-file",
        generators: filepaths({ extensions: ["runsettings"] }),
      },
    },
    {
      name: ["-t", "--list-tests"],
      description: "List the discovered tests instead of running the tests",
    },
    {
      name: ["-e", "--environment"],
      description:
        "Sets the value of an environment variable. Creates the variable if it does not exist, overrides if it does. In VSTest mode this forces the tests to be run in an isolated process. This argument can be specified multiple times to provide multiple variables",
      isRepeatable: true,
      args: {
        name: "name=value",
      },
    },
    {
      name: "--filter",
      description:
        "Run tests that match the given expression, e.g. --filter 'FullyQualifiedName~Namespace.Class' (VSTest only). See https://aka.ms/vstest-filtering for more information on filtering support",
      args: {
        name: "expression",
      },
    },
    {
      name: "--test-adapter-path",
      description:
        "The path to the custom adapters to use for the test run (VSTest only)",
      isRepeatable: true,
      args: {
        name: "adapter-path",
        template: "folders",
      },
    },
    {
      name: ["-l", "--logger"],
      description:
        "The logger to use for test results, e.g. --logger trx (VSTest only). See https://aka.ms/vstest-report for more information on logger arguments",
      isRepeatable: true,
      args: {
        name: "logger",
      },
    },
    {
      name: ["-o", "--output"],
      description:
        "The output directory to place built artifacts in (VSTest). With Microsoft.Testing.Platform, the verbosity of test output (Normal or Detailed)",
      args: {
        name: "output",
        template: "folders",
        suggestions: ["Normal", "Detailed"],
      },
    },
    artifactsPathOption,
    {
      name: ["-d", "--diag"],
      description: "Enable verbose logging to the specified file (VSTest only)",
      args: {
        name: "log-file",
        template: "filepaths",
      },
    },
    {
      name: "--no-build",
      description:
        "Do not build the project before testing. Implies --no-restore",
    },
    {
      name: "--results-directory",
      description:
        "The directory where the test results will be placed. The specified directory will be created if it does not exist",
      args: {
        name: "results-dir",
        template: "folders",
      },
    },
    {
      name: "--collect",
      description:
        "The friendly name of the data collector to use for the test run (VSTest only). More info here: https://aka.ms/vstest-collect",
      isRepeatable: true,
      args: {
        name: "data-collector-name",
      },
    },
    {
      name: "--blame",
      description:
        "Runs the tests in blame mode, which helps to isolate problematic tests that cause the test host to crash or hang (VSTest only)",
    },
    {
      name: "--blame-crash",
      description:
        "Runs the tests in blame mode and collects a crash dump when the test host exits unexpectedly (VSTest only). Implies --blame",
    },
    {
      name: "--blame-crash-dump-type",
      description:
        "The type of crash dump to be collected (VSTest only). Implies --blame-crash",
      args: {
        name: "dump-type",
        suggestions: ["full", "mini"],
      },
    },
    {
      name: "--blame-crash-collect-always",
      description:
        "Enables collecting crash dump on expected as well as unexpected testhost exit (VSTest only)",
    },
    {
      name: "--blame-hang",
      description:
        "Run the tests in blame mode and enables collecting hang dump when test exceeds the given timeout (VSTest only)",
    },
    {
      name: "--blame-hang-dump-type",
      description:
        "The type of hang dump to be collected (VSTest only). When 'none' is used the test host is terminated on timeout, but no dump is collected. Implies --blame-hang",
      args: {
        name: "dump-type",
        suggestions: ["full", "mini", "none"],
      },
    },
    {
      name: "--blame-hang-timeout",
      description:
        "Per-test timeout, after which hang dump is triggered and the testhost process is terminated (VSTest only). Default is 1h. For example: 1.5h, 90m, 5400s, 5400000ms",
      args: {
        name: "timespan",
      },
    },
    noLogoOption,
    configurationOption(
      "The configuration to use for running tests. The default for most projects is 'Debug'"
    ),
    frameworkOption(
      "The target framework to run tests for. The target framework must also be specified in the project file"
    ),
    noRestoreOption,
    interactiveOption,
    verbosityOption(),
    ...targetPlatformOptions("The target runtime to test for"),
    {
      name: ["-p", "--property"],
      description: "Set or override MSBuild properties (NAME=VALUE)",
      isRepeatable: true,
      args: {
        name: "name=value",
      },
    },
    disableBuildServersOption,
    {
      name: "--target",
      description:
        "Build these targets in this project. Use a semicolon or a comma to separate multiple targets, or specify each target separately",
      hidden: true,
      isRepeatable: true,
      args: {
        name: "target",
      },
    },
    {
      name: "--project",
      description:
        "Microsoft.Testing.Platform only. Defines the path of the project or solution file to test. Use path to the project file, or path to the directory containing the project file. If not specified, it defaults to the current directory",
      args: {
        name: "project-or-solution-path",
        template: ["folders", "filepaths"],
      },
    },
    {
      name: "--solution",
      description:
        "Microsoft.Testing.Platform only. Defines the path of the solution file to test. Use path to the solution file, or path to the directory containing the solution file. If not specified, it defaults to the current directory",
      args: {
        name: "solution-path",
        template: ["folders", "filepaths"],
      },
    },
    {
      name: "--test-modules",
      description:
        "Microsoft.Testing.Platform only. Run tests for the specified test modules",
      args: {
        name: "expression",
      },
    },
    {
      name: "--root-directory",
      description:
        "Microsoft.Testing.Platform only. The test modules have the specified root directory",
      args: {
        name: "root-path",
        template: "folders",
      },
    },
    {
      name: "--config-file",
      description:
        "Microsoft.Testing.Platform only. Specifies a testconfig.json file",
      args: {
        name: "config-file",
        template: "filepaths",
      },
    },
    {
      name: "--diagnostic-output-directory",
      description:
        "Microsoft.Testing.Platform only. Output directory of the diagnostic logging. If not specified the file will be generated inside the default 'TestResults' directory",
      args: {
        name: "diagnostic-dir",
        template: "folders",
      },
    },
    {
      name: "--max-parallel-test-modules",
      description:
        "Microsoft.Testing.Platform only. The max number of test modules that can run in parallel",
      args: {
        name: "number",
      },
    },
    {
      name: "--minimum-expected-tests",
      description:
        "Microsoft.Testing.Platform only. Specifies the minimum number of tests that are expected to run",
      args: {
        name: "number",
      },
    },
    {
      name: "--no-ansi",
      description: "Microsoft.Testing.Platform only. Disable ANSI output",
    },
    {
      name: "--no-progress",
      description:
        "Microsoft.Testing.Platform only. Disable progress reporting",
    },
    {
      name: "--no-launch-profile",
      description:
        "Microsoft.Testing.Platform only. Do not attempt to use launchSettings.json or [app].run.json to configure the application",
    },
    {
      name: "--no-launch-profile-arguments",
      description:
        "Microsoft.Testing.Platform only. Do not use arguments specified in launch profile to run the application",
    },
    {
      name: "--",
      description:
        "Delimits arguments to dotnet test from RunSettings arguments (VSTest) or arguments for the test application (Microsoft.Testing.Platform)",
      args: {
        name: "args",
        isVariadic: true,
        isOptional: true,
      },
    },
  ],
};

export default completionSpec;
