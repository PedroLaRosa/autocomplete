// Trunk CLI v1.25.0 (version pinned in trunk-io/plugins .trunk/trunk.yaml at 581fae83, 2026-11-19). Source: trunk-io/docs command reference, upgrades, tools, git-hooks, plugins and caching pages (HEAD 73e52a39, 2026-05-20).
// The closed-source binary (trunk.io) could not be downloaded or run here. Options of commands that the docs do not list (init flags, check download/enable arguments,
// cache clean --dry-run) are kept from the previous spec, and the argument shape of --color and --cache is inferred from the --monitor=<bool> usage in the docs.
const boolValue: Fig.Arg = {
  name: "value",
  isOptional: true,
  suggestions: ["true", "false"],
};

const checkAndFormatSharedOptions: Fig.Option[] = [
  {
    name: ["-a", "--all"],
    description: "Run on all files instead of only changed files",
  },
  {
    name: ["-y", "--fix"],
    description: "Automatically apply all fixes without prompting",
  },
  {
    name: ["-n", "--no-fix"],
    description: "Don't automatically apply fixes",
  },
  {
    name: "--include-existing-autofixes",
    description: "Include existing issues that can be autofixed",
  },
  {
    name: "--force",
    description: "Run on all files, even if ignored",
  },
  {
    name: "--diff",
    description: "Diff printing mode",
    args: {
      name: "mode",
      suggestions: ["none", "compact", "full"],
    },
  },
  {
    name: "--filter",
    description:
      "Comma-separated list of linters and/or issue codes to include; use a leading '-' to exclude a linter or code",
    args: {
      name: "linter or code",
      isVariadic: true,
    },
  },
  {
    name: "--exclude",
    description: "Shorthand for an inverse --filter",
    args: {
      name: "linter or code",
      isVariadic: true,
    },
  },
  {
    name: "--scope",
    description: "Scope of checks to run",
    args: {
      name: "scope",
      suggestions: ["all", "security"],
    },
  },
  {
    name: "--ignore",
    description: "Glob pattern to exclude files from linting",
    args: {
      name: "glob",
    },
  },
  {
    name: ["-j", "--jobs"],
    description:
      "Number of concurrent jobs (does not affect background linting)",
    args: {
      name: "number",
    },
  },
  {
    name: "--sample",
    description:
      "Run each linter on N files (implies --no-fix and --all if no paths are given)",
    args: [
      {
        name: "N",
      },
      {
        name: "paths",
        isOptional: true,
        isVariadic: true,
        template: "filepaths",
      },
    ],
  },
  {
    name: "--upstream",
    description:
      "Upstream branch used to compute changed files (autodetected by default)",
    args: {
      name: "branch",
    },
  },
  {
    name: "--index",
    description: "Run linter on git-indexed files",
  },
  {
    name: "--index-file",
    description: "Run linter on git-indexed files based on specified index",
    args: {
      name: "file",
      template: "filepaths",
    },
  },
  {
    name: "--commit-ref",
    description: "Commit ref to lint (instead of current working tree)",
    args: {
      name: "ref",
    },
  },
  {
    name: "--commit-ref-from-pre-push",
    description:
      "Commit ref to lint from the stdin of a pre-push git hook (instead of the current working tree)",
  },
  {
    name: "--show-existing",
    description: "Show existing issues otherwise hidden by hold-the-line",
  },
  {
    name: "--print-failures",
    description: "Print any failures that occur",
  },
  {
    name: "--debug",
    description: "Show debug output",
  },
  {
    name: "--cache",
    description: "Disable to skip cache for all check actions",
    args: boolValue,
  },
  {
    name: "--ignore-git-state",
    description:
      "Run linters even if a merge, rebase, or revert is in progress",
  },
];

const checkOnlyOptions: Fig.Option[] = [
  {
    name: "--root",
    description: "Explicitly set the root of the repository to run against",
    args: {
      name: "directory",
      template: "folders",
    },
  },
  {
    name: "--trigger",
    description:
      "Run trunk check from inside a git hook; controls whether the check returns early and its interactivity",
    args: {
      name: "trigger",
      default: "manual",
      suggestions: ["manual", "git-push", "git-commit"],
    },
  },
  {
    name: "--output-file",
    description: "Write json results to specified file",
    args: {
      name: "file",
      template: "filepaths",
    },
  },
];

const actionNameArg: Fig.Arg = {
  name: "action",
  description: "Name of the action",
};

const completionSpec: Fig.Spec = {
  name: "trunk",
  description:
    "An all-in-one tool for scalably checking, formatting, and monitoring code",
  subcommands: [
    {
      name: "init",
      description: "Set up trunk in this repo",
      options: [
        {
          name: "--lock",
          description: "Add sha256s to trunk.yaml for additional verification",
        },
        {
          name: "--check-sample",
          description: "Run `trunk check sample` without prompting",
          exclusiveOn: ["--nocheck-sample"],
        },
        {
          name: "--nocheck-sample",
          description: "Do not run `trunk check sample` post-init",
          exclusiveOn: ["--check-sample"],
        },
        {
          name: "--force",
          description: "Overwrite existing trunk.yaml",
        },
      ],
    },
    {
      name: "deinit",
      description: "Deinitialize Trunk in your repo",
      options: [
        {
          name: ["-y", "--yes"],
          description: "Proceed unconditionally",
        },
      ],
    },
    {
      name: "check",
      description: "Universal code checker",
      options: [...checkAndFormatSharedOptions, ...checkOnlyOptions],
      subcommands: [
        {
          name: "enable",
          description: "Enable linters",
          args: {
            name: "linters",
            description: "Linter(s) to enable, optionally as linter@version",
            isVariadic: true,
          },
        },
        {
          name: "disable",
          description: "Disable linters",
          args: {
            name: "linters",
            description: "Linter(s) to disable",
            isVariadic: true,
          },
        },
        {
          name: "list",
          description: "List linters",
        },
        {
          name: "download",
          description: "Download all files needed for trunk to work offline",
          args: {
            name: "tools",
            description:
              "Tool(s) to download (if omitted, downloads all configured tools)",
            isVariadic: true,
          },
        },
        {
          name: "upgrade",
          description:
            "Upgrade all linters to latest versions (superseded by `trunk upgrade check`)",
          deprecated: true,
          args: {
            name: "linters",
            description:
              "Linter(s) to upgrade (upgrades all if none specified)",
            isVariadic: true,
          },
        },
      ],
      args: {
        name: "paths",
        isVariadic: true,
        isOptional: true,
        template: "filepaths",
      },
    },
    {
      name: "fmt",
      description: "Universal code formatter",
      options: checkAndFormatSharedOptions,
      args: {
        name: "paths",
        isVariadic: true,
        isOptional: true,
        template: "filepaths",
      },
    },
    {
      name: "upgrade",
      description: "Upgrade Trunk and its linters to the latest releases",
      options: [
        {
          name: ["-y", "--yes-to-all"],
          description: "Answer yes to all upgrade prompts",
          exclusiveOn: ["-n", "--no-to-all"],
        },
        {
          name: ["-n", "--no-to-all"],
          description: "Answer no to all upgrade prompts",
          exclusiveOn: ["-y", "--yes-to-all"],
        },
        {
          name: "--apply-to",
          description: "Apply upgrades to a specified file",
          args: {
            name: "file",
            template: "filepaths",
          },
        },
        {
          name: "--filter",
          description: "Filter the upgraded linters",
          args: {
            name: "linters",
          },
        },
        {
          name: "--dry-run",
          description: "Detect available upgrades, but do not apply changes",
        },
      ],
      args: {
        name: "scopes",
        description: "Scopes to upgrade (upgrades all if none specified)",
        isVariadic: true,
        isOptional: true,
        suggestions: [
          {
            name: "cli",
            description: "Only upgrade the Trunk CLI to the latest version",
          },
          {
            name: "plugins",
            description: "Upgrade plugins to their latest public release",
          },
          {
            name: "check",
            description: "Upgrade enabled linters",
          },
          {
            name: "tools",
            description: "Upgrade enabled tools",
          },
          {
            name: "runtimes",
            description: "Upgrade enabled runtimes",
          },
        ],
      },
    },
    {
      name: "install",
      description: "Download and install enabled runtimes and linters",
    },
    {
      name: "tools",
      description: "Universal tool manager",
      subcommands: [
        {
          name: "list",
          description:
            "List all available tools in the repository and whether they are enabled",
        },
        {
          name: "install",
          description: "Install your enabled tools into .trunk/tools",
          args: {
            name: "tools",
            description: "Tool(s) to install",
            isVariadic: true,
            isOptional: true,
          },
        },
        {
          name: "enable",
          description: "Enable the provided tool, optionally at a version",
          args: {
            name: "tool",
            description: "Tool to enable, optionally as tool@version",
          },
        },
        {
          name: "disable",
          description: "Disable the provided tool",
          args: {
            name: "tool",
            description: "Tool to disable",
          },
        },
      ],
    },
    {
      name: "plugins",
      description: "Manage plugins",
      subcommands: [
        {
          name: "add",
          description: "Add a plugin by URI",
          options: [
            {
              name: "--id",
              description: "Identifier for the plugin",
              args: {
                name: "id",
              },
            },
          ],
          args: [
            {
              name: "uri",
              description: "URL or local path of the plugin repository",
            },
            {
              name: "ref",
              description: "Tag or SHA of a remote plugin",
              isOptional: true,
            },
          ],
        },
      ],
    },
    {
      name: "config",
      description: "Manage Trunk config files",
      subcommands: [
        {
          name: "share",
          description: "Remove Trunk config files from your local git ignores",
        },
        {
          name: "hide",
          description: "Add Trunk config files to your local git ignores",
        },
        {
          name: "print",
          description: "Print the resolved trunk config",
        },
      ],
    },
    {
      name: "print-config",
      description: "Print the resolved trunk config",
    },
    {
      name: "actions",
      description: "Workflow automation for your repo",
      subcommands: [
        {
          name: "list",
          description: "List all Trunk actions",
        },
        {
          name: "history",
          description: "View the history of Trunk actions",
          options: [
            {
              name: "--count",
              description: "Number of logs to show",
              args: {
                name: "count",
              },
            },
          ],
          args: { ...actionNameArg, isOptional: true },
        },
        {
          name: "enable",
          description: "Enable a specified Trunk action",
          args: actionNameArg,
        },
        {
          name: "disable",
          description: "Disable a specified Trunk action",
          args: actionNameArg,
        },
        {
          name: "run",
          description: "Run a specified Trunk action",
          options: [
            {
              name: "--nolog",
              description: "Don't create a log file for the action run",
            },
          ],
          args: [
            actionNameArg,
            {
              name: "args",
              description: "Arguments passed to the action",
              isVariadic: true,
              isOptional: true,
            },
          ],
        },
      ],
    },
    {
      name: "run",
      description: "Run a specified Trunk action (alias of `actions run`)",
      options: [
        {
          name: "--nolog",
          description: "Don't create a log file for the action run",
        },
      ],
      args: [
        actionNameArg,
        {
          name: "args",
          description: "Arguments passed to the action",
          isVariadic: true,
          isOptional: true,
        },
      ],
    },
    {
      name: "git-hooks",
      description: "Manage git hooks",
      subcommands: [
        {
          name: "sync",
          description: "Sync git hooks with what's defined in trunk.yaml",
        },
        {
          name: "callback",
          description:
            "Simulate a git hook event and run the enabled actions for it",
          args: [
            {
              name: "hook",
              description: "Git hook to simulate",
            },
            {
              name: "args",
              description: "Arguments passed to the hook (after --)",
              isVariadic: true,
              isOptional: true,
            },
          ],
        },
        {
          name: "install",
          description:
            "Install trunk git hooks (superseded by `trunk git-hooks sync`)",
          deprecated: true,
        },
      ],
    },
    {
      name: "shellhooks",
      description: "Manage Trunk shell hooks",
      subcommands: [
        {
          name: "install",
          description: "Install the Trunk hooks in your shell config file",
          args: {
            name: "shell_name",
            description: "Shell to install the hooks for (defaults to $SHELL)",
            isOptional: true,
            suggestions: ["bash", "zsh", "tcsh", "fish", "elvish"],
          },
        },
      ],
    },
    {
      name: "show-announcements",
      description: "Show announcements from commit messages",
      subcommands: [
        {
          name: "since",
          description: "Show announcements since a specified commit",
          options: [
            {
              name: "--commit",
              description: "Commit to show announcements since",
              args: {
                name: "commit",
              },
            },
          ],
        },
        {
          name: "post-merge",
          description: "Run on git pull/merge, usually run by a git hook",
        },
        {
          name: "pre-rebase",
          description: "Run on git pre-rebase, usually run by a git hook",
          args: {
            name: "branch-refs",
            isVariadic: true,
            isOptional: true,
          },
        },
        {
          name: "post-checkout",
          description: "Run on git checkout/switch, usually run by a git hook",
          args: {
            name: "branch-refs",
            isVariadic: true,
            isOptional: true,
          },
        },
      ],
    },
    {
      name: "generate-compile-commands",
      description: "Generate a local compilation database",
    },
    {
      name: "cache",
      description: "Cache management",
      subcommands: [
        {
          name: "clean",
          description: "Clean cached files used by Trunk",
          options: [
            {
              name: "--all",
              description: "Delete all files (including results cache)",
            },
            {
              name: ["-n", "--dry-run"],
              description:
                "Print all directories that would be cleaned out without running deletion",
            },
          ],
        },
        {
          name: "prune",
          description: "Prune unused cached files",
        },
      ],
    },
    {
      name: "daemon",
      description: "Daemon management",
      subcommands: [
        {
          name: "launch",
          description:
            "Start the trunk daemon in the foreground if it's not already running",
        },
        {
          name: "start",
          description:
            "Start the trunk daemon in the background if it's not already running",
        },
        {
          name: "shutdown",
          description: "Shutdown the trunk daemon if it is running",
        },
        {
          name: "status",
          description: "Report daemon status",
        },
      ],
    },
    {
      name: "login",
      description: "Login to trunk.io",
    },
    {
      name: "logout",
      description: "Logout from trunk.io",
    },
    {
      name: "whoami",
      description: "Print who you're logged in as",
    },
    {
      name: "version",
      description: "Output the version",
    },
  ],
  options: [
    {
      name: ["-h", "--help"],
      description: "Usage information",
      isPersistent: true,
    },
    {
      name: "--version",
      description: "The version",
      isPersistent: true,
    },
    {
      name: ["-m", "--monitor"],
      description:
        "Enable the trunk daemon to monitor file changes in your repo",
      isPersistent: true,
      args: {
        name: "value",
        suggestions: ["true", "false"],
      },
    },
    {
      name: "--ci",
      description: "Run in continuous integration mode",
      isPersistent: true,
    },
    {
      name: ["-o", "--output"],
      description: "Output format",
      isPersistent: true,
      args: {
        name: "format",
        suggestions: ["text", "json"],
      },
    },
    {
      name: "--no-progress",
      description: "Don't show progress updates",
      isPersistent: true,
      exclusiveOn: ["--ci-progress"],
    },
    {
      name: "--ci-progress",
      description:
        "Show updates every 30 seconds without clearing terminal screen (implicit with --ci)",
      isPersistent: true,
      exclusiveOn: ["--no-progress"],
    },
    {
      name: "--action_timeout",
      description:
        "How long actions (downloads, lint runs, etc.) have to time out, with units (s, ms, etc)",
      isPersistent: true,
      args: {
        name: "timeout",
      },
    },
    {
      name: "--color",
      description: "Enable/disable color output",
      isPersistent: true,
      args: boolValue,
    },
    {
      name: ["-v", "--verbose"],
      description: "Output details about what's happening under the hood",
      isPersistent: true,
    },
  ],
};
export default completionSpec;
