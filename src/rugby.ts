// Rugby v2.10.3 (latest git tag of swiftyfinch/Rugby, 2026-11-20). Source: tag 2.10.3 (2025-04-16) Swift ArgumentParser sources
// (Sources/Rugby/Commands/**, Core/CommandParsing) and Docs/commands-help, read statically; macOS-only tool, not built or run here.
// `main` has no CLI changes since 2.10.3. Output modes follow the parser (fold, multiline, raw, silence); upstream help says "silent" but the parser rejects it.
// Print plans list if there is .rugby/plans.yml file
const planList: Fig.Generator = {
  script: ["rugby", "plan", "list"],
  postProcess: (output) => {
    if (output === "") {
      return [];
    }
    return output.split("\n").map((plan) => {
      return {
        name: plan,
        description: `Run plan \"${plan}\"`,
        icon: "✈️",
        priority: 77,
      };
    });
  },
};

// Shared options (CommonOptions, BuildOptions, TargetsOptions upstream)
const helpOption: Fig.Option = {
  description: "Show help information",
  name: ["--help", "-h"],
};

const commonOptions: Fig.Option[] = [
  {
    args: {
      default: "fold",
      name: "output",
      suggestions: ["fold", "multiline", "raw", "silence"],
    },
    description: "Output mode: fold, multiline, raw or silence",
    name: ["--output", "-o"],
  },
  {
    description: "Increase verbosity level",
    isRepeatable: true,
    name: ["--verbose", "-v"],
  },
  {
    description: "Decrease verbosity level",
    isRepeatable: true,
    name: ["--quiet", "-q"],
  },
  helpOption,
];

const targetsOptions: Fig.Option[] = [
  {
    args: {
      isVariadic: true,
      name: "targets",
    },
    description: "Target names to select. Empty means all targets",
    isRepeatable: true,
    name: ["--targets", "-t"],
  },
  {
    args: {
      isVariadic: true,
      name: "targets-as-regex",
    },
    description: "Regular expression patterns to select targets",
    isRepeatable: true,
    name: ["--targets-as-regex", "-g"],
  },
  {
    args: {
      isVariadic: true,
      name: "except",
    },
    description: "Target names to exclude",
    isRepeatable: true,
    name: ["--except", "-e"],
  },
  {
    args: {
      isVariadic: true,
      name: "except-as-regex",
    },
    description: "Regular expression patterns to exclude targets",
    isRepeatable: true,
    name: ["--except-as-regex", "-x"],
  },
  {
    description: "Run command in mode where only selected targets are printed",
    name: "--try",
  },
];

const stripOption: Fig.Option = {
  description: "Build without debug symbols",
  name: "--strip",
};

const buildOptions: Fig.Option[] = [
  {
    args: {
      default: "sim",
      name: "sdk",
      suggestions: ["sim", "ios"],
    },
    description: "Build SDK: sim or ios",
    name: ["--sdk", "-s"],
  },
  {
    args: {
      default: "auto",
      name: "arch",
      suggestions: ["auto", "x86_64", "arm64"],
    },
    description: "Build architecture: auto, x86_64 or arm64",
    name: ["--arch", "-a"],
  },
  {
    args: {
      default: "Debug",
      name: "config",
    },
    description: "Build configuration",
    name: ["--config", "-c"],
  },
  stripOption,
  ...targetsOptions,
];

const ignoreCacheOption: Fig.Option = {
  description: "Ignore shared cache",
  name: "--ignore-cache",
};

const deleteSourcesOption: Fig.Option = {
  description: "Delete target groups from project",
  name: "--delete-sources",
};

const rollbackOption: Fig.Option = {
  description: "Restore projects state before the last Rugby usage",
  name: ["--rollback", "-r"],
};

const resultBundlePathOption: Fig.Option = {
  args: {
    name: "path",
    template: "filepaths",
  },
  description: "Path to xcresult bundle",
  name: "--result-bundle-path",
};

const maxConnectionsOption: Fig.Option = {
  args: {
    default: "10",
    name: "max-connections",
  },
  description: "The maximum number of simultaneous connections",
  name: "--max-connections",
};

const archiveTypeOption: Fig.Option = {
  args: {
    default: "zip",
    name: "archive-type",
    suggestions: ["zip", "7z"],
  },
  description: "Binary archive file type to use: zip or 7z",
  name: "--archive-type",
};

const headersOption = (usage: string): Fig.Option => ({
  args: {
    name: "header",
  },
  description: `Extra HTTP header fields for ${usage} ("s3-key: my-secret-key")`,
  isRepeatable: true,
  name: "--headers",
});

const planPathOption: Fig.Option = {
  args: {
    default: ".rugby/plans.yml",
    name: "path",
    template: "filepaths",
  },
  description: "Path to plans yaml",
  name: ["--path", "-p"],
};

const planOptions: Fig.Option[] = [
  planPathOption,
  rollbackOption,
  ...commonOptions,
];

// `rugby build full`, which is also the default of `rugby build`
const buildFullOptions: Fig.Option[] = [
  ...buildOptions,
  ignoreCacheOption,
  resultBundlePathOption,
  ...commonOptions,
];

// `rugby _test run`, which is also the default of `rugby _test`
const testRunOptions: Fig.Option[] = [
  {
    args: {
      name: "simulator-name",
    },
    description: "A simulator name",
    isRequired: true,
    name: ["--simulator-name", "-n"],
  },
  {
    args: {
      name: "path",
      template: "filepaths",
    },
    description: "A path to testplan template",
    isRequired: true,
    name: ["--testplan-template-path", "-p"],
  },
  {
    description: "Select tests by impact",
    name: "--impact",
  },
  {
    description: "Mark test targets as passed if all tests are succeed",
    name: "--pass",
  },
  resultBundlePathOption,
  ...buildOptions,
  ...commonOptions,
];

// `rugby shortcuts cache`, whose options are also accepted by `rugby` itself
const cacheCommand: Fig.Subcommand = {
  description: "Run the build and use commands",
  name: "cache",
  icon: "🏈",
  options: [
    rollbackOption,
    {
      description: "Prebuild targets ignoring sources",
      name: "--prebuild",
    },
    ...buildOptions,
    resultBundlePathOption,
    ignoreCacheOption,
    deleteSourcesOption,
    {
      args: {
        name: "warmup",
      },
      description: "Warmup cache with this endpoint",
      name: "--warmup",
    },
    headersOption("warmup"),
    maxConnectionsOption,
    archiveTypeOption,
    ...commonOptions,
  ],
};

const completionSpec: Fig.Spec = {
  description:
    "Cache Cocoa 🌱 pods for faster rebuild and indexing Xcode project. https://github.com/swiftyfinch/Rugby",
  name: "rugby",
  generateSpec: async (tokens, executeShellCommand) => {
    const { stdout } = await executeShellCommand({
      command: "rugby",
      args: ["plan", "list"],
    });
    if (stdout === "") {
      return null;
    }
    // Handle `rugby umbrella` command
    return {
      name: "plan",
      subcommands: stdout.split("\n").map((plan) => {
        return {
          name: plan,
          description: `Run plan \"${plan}\"`,
          icon: "✈️",
          priority: 77,
          options: planOptions,
        };
      }),
    };
  },
  args: {
    description: "Name of plan to run",
    isOptional: true,
    name: "name",
  },
  options: [
    {
      description: "Show the version",
      name: "--version",
    },
    // Without a subcommand Rugby runs `shortcuts umbrella`, i.e. `plan` or `cache`
    planPathOption,
    ...(cacheCommand.options ?? []),
  ],
  subcommands: [
    {
      ...cacheCommand,
      priority: 76,
    },
    {
      description: "Set of base commands combinations",
      name: "shortcuts",
      icon: "📍",
      options: [helpOption],
      subcommands: [
        {
          args: {
            description: "Any arguments of plan or cache commands",
            isOptional: true,
            isVariadic: true,
            name: "arguments",
          },
          description:
            "Run the plan command if plans file exists or run the cache command",
          name: "umbrella",
          icon: "⛱️",
          options: [helpOption],
        },
        cacheCommand,
      ],
    },
    {
      description: "Build targets from Pods project",
      name: "build",
      icon: "🏗️",
      options: buildFullOptions,
      subcommands: [
        {
          description: "Build targets as is",
          name: "full",
          icon: "🏗️",
          options: buildFullOptions,
        },
        {
          description: "Prebuild targets ignoring sources",
          name: "pre",
          icon: "🏗️",
          options: [...buildOptions, ...commonOptions],
        },
      ],
    },
    {
      description: "Use already built binaries instead of sources",
      name: "use",
      icon: "🎯",
      options: [
        deleteSourcesOption,
        ...targetsOptions,
        stripOption,
        ...commonOptions,
      ],
    },
    {
      description: "Delete targets from the project",
      name: "delete",
      icon: "🗑️",
      options: [
        {
          args: {
            default: "Pods/Pods.xcodeproj",
            name: "path",
            template: "filepaths",
          },
          description: "Project location",
          name: ["--path", "-p"],
        },
        {
          description: "Keep dependencies of excepted targets",
          name: "--safe",
        },
        deleteSourcesOption,
        ...targetsOptions,
        ...commonOptions,
      ],
    },
    {
      args: {
        description:
          "Endpoint for your binaries storage (s3.eu-west-2.amazonaws.com)",
        isOptional: true,
        name: "endpoint",
      },
      description: "Download remote binaries for targets from Pods project",
      name: "warmup",
      icon: "🐳",
      options: [
        {
          description:
            "Run only in analyse mode without downloading. The endpoint is optional",
          name: "--analyse",
        },
        ...buildOptions,
        ...commonOptions,
        {
          args: {
            default: "60",
            name: "timeout",
          },
          description: "Timeout for requests in seconds",
          name: "--timeout",
        },
        maxConnectionsOption,
        headersOption("a request"),
        archiveTypeOption,
      ],
    },
    {
      description: "(Experimental) Analyse and run tests",
      name: "_test",
      icon: "🧪",
      options: testRunOptions,
      subcommands: [
        {
          description: "(Experimental) Run tests by impact or not",
          name: "run",
          icon: "🧪",
          options: testRunOptions,
        },
        {
          description: "(Experimental) Print affected test targets",
          name: "impact",
          icon: "🧪",
          options: [...buildOptions, ...commonOptions],
        },
        {
          description: "(Experimental) Mark test targets as passed",
          name: "pass",
          icon: "🧪",
          options: [
            {
              args: {
                name: "branch",
              },
              description:
                "Skip if the current branch is not up-to-date to target one",
              name: ["--up-to-date-branch", "-u"],
            },
            ...buildOptions,
            ...commonOptions,
          ],
        },
      ],
    },
    {
      description: "Restore projects state before the last Rugby usage",
      name: "rollback",
      icon: "♻️",
      options: commonOptions,
    },
    {
      args: {
        description: "Name of plan to run",
        isOptional: true,
        name: "name",
        generators: planList,
      },
      description: "Run sequence of Rugby commands",
      name: "plan",
      icon: "✈️",
      options: planOptions,
    },
    {
      description: "Delete different Rugby folders",
      name: "clear",
      icon: "🧼",
      options: [
        {
          args: {
            isVariadic: true,
            name: "modules",
          },
          description: "List of modules for deletion",
          isRepeatable: true,
          name: ["--modules", "-m"],
        },
        ...commonOptions,
      ],
      subcommands: [
        {
          description: "Delete .rugby/build folder",
          name: "build",
          icon: "🧼",
          options: commonOptions,
        },
        {
          description: "Delete .rugby/bin folder",
          name: "shared",
          icon: "🧼",
          options: commonOptions,
        },
        {
          description: "Delete .rugby/tests folder",
          name: "tests",
          icon: "🧼",
          options: commonOptions,
        },
      ],
    },
    {
      description: "Update Rugby version",
      name: "update",
      icon: "📦",
      options: [
        {
          args: {
            default: "latest",
            name: "version",
          },
          description: "Version, like 2.0.0",
          name: "--version",
        },
        {
          args: {
            name: "arch",
            suggestions: ["x86_64", "arm64"],
          },
          description: "Binary architecture: x86_64 or arm64",
          name: ["--arch", "-a"],
        },
        {
          description: "Allow install the latest pre-release version",
          name: "--beta",
        },
        {
          description: "Force an install even if Rugby is already installed",
          name: ["--force", "-f"],
        },
        ...commonOptions,
      ],
      subcommands: [
        {
          description: "List of available versions",
          name: "list",
          options: [
            {
              args: {
                default: "5",
                name: "count",
              },
              description: "Maximum versions count",
              name: "--count",
            },
            ...commonOptions,
          ],
        },
      ],
    },
    {
      description: "Heal your wounds after using Rugby (or not)",
      name: "doctor",
      icon: "🚑",
      options: [helpOption],
    },
    {
      args: {
        description: "Shell script command",
        name: "command",
      },
      description: "Run shell command from Rugby",
      name: "shell",
      icon: "🐚",
      options: commonOptions,
    },
    {
      description: "Print Rugby environment",
      name: "env",
      icon: "🌍",
      options: [helpOption],
    },
  ],
};
export default completionSpec;
