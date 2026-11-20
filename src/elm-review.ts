// elm-review v2.13.5 (npm "latest", 2025-12-30). Source: lib/flags.js and
// lib/help.js at tag v2.13.5 of https://github.com/jfmengels/node-elm-review

const reportType: Fig.Suggestion[] = [
  {
    name: "json",
    description: "Prints a single JSON object",
  },
  {
    name: "ndjson",
    description: "Print one JSON object per error each on a new line",
  },
];

const help = (command: string): Fig.Option => ({
  name: ["--help", "-h"],
  description: `Show help for ${command}`,
});

const compiler: Fig.Option = {
  name: "--compiler",
  description: "Specify the path to the elm compiler",
  args: {
    name: "path-to-elm",
    template: "filepaths",
  },
};

const elmjson: Fig.Option = {
  name: "--elmjson",
  description: "Specify the path to the elm.json file of the project",
  args: {
    name: "path-to-elm.json",
    template: "filepaths",
  },
};

const config: Fig.Option = {
  name: "--config",
  description: "Use the review configuration in the specified directory",
  args: {
    name: "path-to-review-directory",
    template: "folders",
  },
};

const githubAuth: Fig.Option = {
  name: "--github-auth",
  description:
    "GitHub API token, used along with --template to avoid GitHub rate limiting",
  requiresSeparator: true,
  args: {
    name: "github-api-token",
  },
};

const templateArg: Fig.Arg = {
  name: "author/repo[/path-to-the-config-folder][#branch-or-commit]",
};

const ruleType: Fig.Option = {
  name: "--rule-type",
  description:
    "Whether the starting rule should be a module rule or a project rule",
  args: {
    name: "module|project",
    suggestions: ["module", "project"],
  },
};

const completionSpec: Fig.Spec = {
  name: "elm-review",
  description:
    "Analyze Elm projects for patterns forbidden by your configuration",
  subcommands: [
    {
      name: "init",
      description: "Initialize Elm Review in this directory",
      options: [
        help("elm-review init"),
        {
          ...config,
          description:
            "Create the configuration files in the specified directory instead of in the review/ directory",
        },
        {
          name: "--template",
          description:
            "Copy the review configuration from a GitHub repository, at the root or in a folder",
          args: templateArg,
        },
        githubAuth,
        {
          ...compiler,
          description:
            "Specify the path to the elm compiler, used to write the elm-version of review/elm.json",
        },
      ],
    },
    {
      name: "suppress",
      description:
        "Generate suppression files for rules that report many errors",
      options: [
        help("elm-review suppress"),
        {
          name: "--check-after-tests",
          description: "Checks whether there are uncommitted suppression files",
        },
      ],
    },
    {
      name: "new-package",
      description:
        "Creates an new project aimed to contain rules and to be published later",
      options: [
        help("elm-review new-package"),
        {
          ...compiler,
          description:
            "Specify the path to the elm compiler, used to write the elm-version of review/elm.json",
        },
        ruleType,
        {
          name: "--prefill",
          description: "Prefill the answers to the setup questions",
          hidden: true,
          args: {
            name: "author name[,package name[,license]]",
          },
        },
      ],
    },
    {
      name: "new-rule",
      description:
        "Adds a new rule to your review configuration or review package",
      options: [help("elm-review new-rule"), ruleType],
      args: {
        name: "RULE-NAME",
        description:
          "Add a rule file in src/ and a corresponding test file in tests/. Should be formatted just like an Elm module name, such as NoDoingThis or No.Doing.This",
        isOptional: true,
      },
    },
    {
      name: "prepare-offline",
      description:
        "Prepares running elm-review in offline mode using --offline",
      options: [help("elm-review prepare-offline"), elmjson, config, compiler],
    },
  ],
  options: [
    help("elm-review"),
    {
      name: "--unsuppress",
      description:
        "Include suppressed errors in the error report for all rules",
    },
    {
      name: "--unsuppress-rules",
      description:
        "Include suppressed errors in the error report for the listed rules. Separate them by commas",
      isRepeatable: true,
      args: {
        name: "rule1,rule2,...",
      },
    },
    {
      name: "--rules",
      description:
        "Run with a subsection of the rules in the configuration. Specify them by their name, and separate them by commas",
      isRepeatable: true,
      args: {
        name: "rule1,rule2,...",
        description: "Run with a subsection of the rules in the configuration",
      },
    },
    {
      name: "--watch",
      description:
        "Re-run elm-review automatically when your project or configuration changes",
    },
    {
      name: "--watch-code",
      description: "Re-run elm-review automatically when your project changes",
    },
    {
      name: "--extract",
      description:
        'Enable extracting data from the project for the rules that have a data extractor. Requires running with --report=json. Learn more by reading the section about "Extracting information" at https://bit.ly/3UmNr0V',
    },
    elmjson,
    config,
    {
      name: "--template",
      description: "Use the review configuration from a GitHub repository",
      args: templateArg,
    },
    githubAuth,
    compiler,
    {
      name: ["--version", "-v"],
      description: "Print the version of the elm-review CLI",
    },
    {
      name: "--debug",
      description:
        "Add helpful information for debugging and run the compiler with --debug, allowing Debug functions in custom rules",
    },
    {
      name: "--benchmark-info",
      description:
        "Print out how much time it took for rules and phases of the process to run. This is meant for benchmarking purposes",
    },
    {
      name: "--no-color",
      description: "Disable colors in the output",
    },
    {
      name: "--report",
      description:
        "Error reports will be in JSON format. The formats are described at https://bit.ly/31F6jzz",
      requiresSeparator: true,
      args: {
        name: "json or ndjson",
        suggestions: reportType,
      },
    },
    {
      name: "--no-details",
      description:
        "Hide the details from error reports for a more compact view",
    },
    {
      name: "--offline",
      description:
        "Prevent making network calls. You might need to run elm-review prepare-offline beforehand",
    },
    {
      name: "--ignore-dirs",
      description:
        "Ignore the reports of all rules for the specified directories",
      isRepeatable: true,
      args: {
        name: "dir1,dir2,...",
        template: "folders",
      },
    },
    {
      name: "--ignore-files",
      description: "Ignore the reports of all rules for the specified files",
      isRepeatable: true,
      args: {
        name: "file1,file2,...",
        template: "filepaths",
      },
    },
    {
      name: "--fix",
      description:
        "Elm Review will present fixes for the errors that offer an automatic fix, which you can then accept or refuse one by one",
    },
    {
      name: "--fix-all",
      description:
        "Elm Review will present a single fix containing the application of all available automatic fixes, which you can then accept or refuse",
    },
    {
      name: "--fix-all-without-prompt",
      description:
        "Same as --fix-all but fixes are applied without a prompt. Commit all changes before running with this option",
    },
    {
      name: "--fix-limit",
      description: "Limit the number of fixes applied in a single batch to N",
      requiresSeparator: true,
      args: {
        name: "N",
        description: "The number of fixes to apply before prompting the user",
      },
    },
    {
      name: "--allow-remove-files",
      description: "Allow files to be removed by automatic fixes",
    },
    {
      name: "--explain-fix-failure",
      description: "Get more information about fixes that failed to apply",
    },
    {
      name: "--elm-format-path",
      description: "Specify the path to elm-format",
      args: {
        name: "path-to-elm-format",
        template: "filepaths",
      },
    },
    {
      name: "--force-build",
      description: "Rebuild the review application even if it is cached",
      hidden: true,
    },
    {
      name: "--ignore-problematic-dependencies",
      description: "Skip dependencies whose documentation fails to decode",
      hidden: true,
    },
    {
      name: "--namespace",
      description: "Namespace for the generated code folder in elm-stuff",
      hidden: true,
      args: {
        name: "namespace",
      },
    },
  ],
  args: {
    name: "files or directories to review",
    isVariadic: true,
    isOptional: true,
    template: ["filepaths", "folders"],
  },
};
export default completionSpec;
