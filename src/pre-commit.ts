// pre-commit v4.7.0 (GitHub release, 2026-10-13). Source: pre_commit/main.py,
// commands/hazmat.py and clientlib.py at tag v4.7.0
import YAML from "yaml";
import { gitGenerators } from "./git";

const hooksInConfig: Fig.Generator = {
  script: ["cat", ".pre-commit-config.yaml"],
  postProcess: (output) => {
    const suggestions: Fig.Suggestion[] = [];

    try {
      const repos = YAML.parse(output).repos;

      if (repos) {
        repos.forEach((repo) => {
          repo.hooks.forEach((hookId) => {
            suggestions.push({
              name: `${hookId.id}`,
            }) as Fig.Suggestion;
          });
        });
      }

      return suggestions;
    } catch (e) {
      console.log(e);
    }
  },
};

const help: Fig.Option = {
  name: ["-h", "--help"],
  description: "Show help message and exit",
};

const color: Fig.Option = {
  name: "--color",
  description: "Whether to use color in output. Defaults to `auto`",
  args: {
    name: "color",
    suggestions: ["auto", "always", "never"],
  },
};

const config: Fig.Option = {
  name: ["--config", "-c"],
  description: "Path to alternate config file",
  args: {
    name: "CONFIG",
    template: "filepaths",
  },
};

const baseOptions: Fig.Option[] = [help, color];
const globalOptions: Fig.Option[] = [...baseOptions, config];

const hookTypes = [
  "commit-msg",
  "post-checkout",
  "post-commit",
  "post-merge",
  "post-rewrite",
  "pre-commit",
  "pre-merge-commit",
  "pre-push",
  "pre-rebase",
  "prepare-commit-msg",
];

const hookType: Fig.Option = {
  name: ["-t", "--hook-type"],
  description: "Type of hook to install",
  isRepeatable: true,
  args: {
    name: "HOOK_TYPE",
    suggestions: hookTypes,
  },
};

const validateCommand = (name: string, file: string): Fig.Subcommand => ({
  name,
  description: `Validate ${file} files`,
  options: baseOptions,
  args: {
    name: "filenames",
    isOptional: true,
    isVariadic: true,
    template: "filepaths",
  },
});

const hazmatCmd: Fig.Arg = {
  name: "cmd",
  isCommand: true,
};

const commonRepoOptions: Fig.Option[] = [
  {
    name: ["--verbose", "-v"],
  },
  {
    name: ["--all-files", "-a"],
    description: "Run on all the files in the repo",
    exclusiveOn: ["--files"],
  },
  {
    name: "--files",
    description: "Specific filenames to run hooks on",
    exclusiveOn: ["--all-files", "-a"],
    args: {
      name: "FILES",
      isVariadic: true,
      template: ["filepaths", "folders"],
    },
  },
  {
    name: "--show-diff-on-failure",
    description: "When hooks fail, run `git diff` directly afterward",
  },
  {
    name: "--fail-fast",
    description: "Stop after the first failing hook",
  },
  {
    name: "--hook-stage",
    description: "The stage during which the hook is fired",
    args: {
      name: "HOOK_STAGE",
      suggestions: [...hookTypes, "manual"],
      default: "pre-commit",
    },
  },
  {
    name: "--remote-branch",
    description: "Remote branch ref used by `git push`",
    args: {
      name: "REMOTE_BRANCH",
      generators: gitGenerators.remoteLocalBranches,
    },
  },
  {
    name: "--local-branch",
    description: "Local branch ref used by `git push`",
    args: {
      name: "LOCAL_BRANCH",
      generators: gitGenerators.localBranches,
    },
  },
  {
    name: ["--from-ref", "--source", "-s"],
    description:
      "Represents the original ref in a `from_ref...to_ref` diff expression. For `pre-push` hooks, this represents the branch you are pushing to. For `post-checkout` hooks, this represents the branch that was previously checked out",
    args: {
      name: "FROM_REF",
      generators: gitGenerators.revs,
    },
  },
  {
    name: ["--to-ref", "--origin", "-o"],
    description:
      "Represents the destination ref in a `from_ref...to_ref` diff expression. For `pre-push` hooks, this represents the branch being pushed. For `post-checkout` hooks, this represents the branch that is now checked out",
    args: {
      name: "TO_REF",
      generators: gitGenerators.revs,
    },
  },
  {
    name: "--pre-rebase-upstream",
    description: "The upstream from which the series was forked",
    args: {
      name: "PRE_REBASE_UPSTREAM",
      generators: gitGenerators.revs,
    },
  },
  {
    name: "--pre-rebase-branch",
    description:
      "The branch being rebased, and is not set when rebasing the current branch",
    args: {
      name: "PRE_REBASE_BRANCH",
      generators: gitGenerators.localBranches,
    },
  },
  {
    name: "--commit-msg-filename",
    description: "Filename to check when running during `commit-msg`",
    args: {
      name: "COMMIT_MSG_FILENAME",
      template: "filepaths",
    },
  },
  {
    name: "--prepare-commit-message-source",
    description:
      "Source of the commit message (typically the second argument to .git/hooks/prepare-commit-msg)",
    args: {
      name: "PREPARE_COMMIT_MESSAGE_SOURCE",
    },
  },
  {
    name: "--commit-object-name",
    description:
      "Commit object name (typically the third argument to .git/hooks/prepare-commit-msg)",
    args: {
      name: "COMMIT_OBJECT_NAME",
    },
  },
  {
    name: "--remote-name",
    description: "Remote name used by `git push`",
    args: {
      name: "REMOTE_NAME",
      generators: gitGenerators.remotes,
    },
  },
  {
    name: "--remote-url",
    description: "Remote URL used by `git push`",
    args: {
      name: "REMOTE_URL",
    },
  },
  {
    name: "--checkout-type",
    description:
      "Indicates whether the checkout was a branch checkout (changing branches, flag=1) or a file checkout (retrieving a file from the index, flag=0)",
    args: {
      name: "CHECKOUT_TYPE",
    },
  },
  {
    name: "--is-squash-merge",
    description:
      "During a post-merge hook, indicates whether the merge was a squash merge",
    args: {
      name: "IS_SQUASH_MERGE",
    },
  },
  {
    name: "--rewrite-command",
    description:
      "During a post-rewrite hook, specifies the command that invoked the rewrite",
    args: {
      name: "REWRITE_COMMAND",
    },
  },
];

const completionSpec: Fig.Spec = {
  name: "pre-commit",
  description: "Pre-commit",
  args: {},
  options: [
    help,
    {
      name: ["-V", "--version"],
      description: "Show program's version number and exit",
    },
  ],
  subcommands: [
    {
      name: "autoupdate",
      description:
        "Auto-update pre-commit config to the latest repos' versions",
      options: [
        ...globalOptions,
        {
          name: "--bleeding-edge",
          description:
            "Update to the bleeding edge of `HEAD` instead of the latest tagged version (the default behavior)",
        },
        {
          name: "--freeze",
          description: "Store 'frozen' hashes in `rev` instead of tag names",
        },
        {
          name: "--repo",
          description:
            "Only update this repository -- may be specified multiple times",
          args: {
            name: "REPO",
          },
          isRepeatable: true,
        },
        {
          name: ["-j", "--jobs"],
          description: "Number of threads to use",
          args: {
            name: "JOBS",
            default: "1",
          },
        },
      ],
    },
    {
      name: "clean",
      description: "Clean out pre-commit files",
      options: baseOptions,
    },
    {
      name: "gc",
      description: "Clean unused cached repos",
      options: baseOptions,
    },
    {
      name: "hazmat",
      description: "Composable tools for rare use in hook `entry`",
      options: baseOptions,
      subcommands: [
        {
          name: "cd",
          description: "Cd to a subdir and run the command",
          args: [{ name: "subdir", template: "folders" }, hazmatCmd],
        },
        {
          name: "ignore-exit-code",
          description: "Run the command but ignore the exit code",
          args: hazmatCmd,
        },
        {
          name: "n1",
          description: "Run the command once per filename",
          args: hazmatCmd,
        },
      ],
    },
    {
      name: "init-templatedir",
      description:
        "Install hook script in a directory intended for use with `git config init.templateDir`",
      args: {
        name: "directory",
        description: "The directory in which to write the hook script",
        template: "folders",
      },
      options: [
        ...globalOptions,
        hookType,
        {
          name: "--no-allow-missing-config",
          description: "Assume cloned repos should have a `pre-commit` config",
        },
      ],
    },
    {
      name: "install",
      description: "Install the pre-commit script",
      options: [
        ...globalOptions,
        {
          name: ["-f", "--overwrite"],
          description: "Overwrite existing hooks / remove migration mode",
        },
        {
          name: "--install-hooks",
          description:
            "Whether to install hook environments for all environments in the config file",
        },
        hookType,
        {
          name: "--allow-missing-config",
          description:
            "Whether to allow a missing `pre-commit` configuration file or exit with a failure code",
        },
      ],
    },
    {
      name: "install-hooks",
      description:
        "Install hook environments for all environments in the config file",
      options: globalOptions,
    },
    {
      name: "migrate-config",
      description: "Migrate list configuration to new map configuration",
      options: globalOptions,
    },
    {
      name: "run",
      description: "Run hooks",
      options: [...globalOptions, ...commonRepoOptions],
      args: {
        name: "hook",
        description: "A single hook-id to run",
        isOptional: true,
        generators: hooksInConfig,
      },
    },
    {
      name: "sample-config",
      description: "Produce a sample .pre-commit-config.yaml file",
      options: baseOptions,
    },
    {
      name: "try-repo",
      description:
        "Try the hooks in a repository, useful for developing new hooks",
      args: [
        {
          name: "repo",
          description: "Repository to source hooks from",
        },
        {
          name: "hook",
          description: "A single hook-id to run",
          isOptional: true,
          generators: hooksInConfig,
        },
      ],
      options: [
        ...globalOptions,
        ...commonRepoOptions,
        {
          name: ["--ref", "--rev"],
          description:
            "Manually select a rev to run against, otherwise the `HEAD` revision will be used",
          args: {
            name: "REV",
          },
        },
      ],
    },
    {
      name: "uninstall",
      description: "Uninstall the pre-commit script",
      options: [...globalOptions, hookType],
    },
    validateCommand("validate-config", ".pre-commit-config.yaml"),
    validateCommand("validate-manifest", ".pre-commit-hooks.yaml"),
    {
      name: "help",
      description: "Show help for a specific command",
      options: [help],
      args: {
        name: "help_cmd",
        description: "Command to show help for",
        isOptional: true,
        template: "help",
      },
    },
    {
      name: "hook-impl",
      description: "Internal entry point used by installed git hooks",
      hidden: true,
      options: [
        ...globalOptions,
        {
          name: "--hook-type",
          isRequired: true,
          args: { name: "HOOK_TYPE", suggestions: hookTypes },
        },
        { name: "--hook-dir", args: { name: "HOOK_DIR", template: "folders" } },
        { name: "--skip-on-missing-config" },
      ],
    },
  ],
};

export default completionSpec;
