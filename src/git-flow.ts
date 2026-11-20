// git-flow (AVH Edition) v1.12.3 (latest 1.x tag of petervanderdoes/gitflow-avh via git ls-remote, 2026-11-19).
// Source: the shFlags OPTIONS_SPEC / DEFINE_* blocks of git-flow, git-flow-init, -feature, -bugfix, -release, -hotfix,
// -support, -config, -log and -version read statically from a shallow clone of tag 1.12.3; cross-checked against
// nvie/gitflow 0.4.1 (Homebrew "git-flow", last release 2012), which only has the init/feature/release/hotfix/support
// core without delete, rename, bugfix, config, log and most finish flags. Scripts were not run.
// Not covered: gittower/git-flow-next (v2.1.0), a separate Go rewrite with a different command set.
const branchTypes = ["feature", "bugfix", "release", "hotfix", "support"];

const postProcessBranches: Fig.Generator["postProcess"] = (out, tokens) => {
  return out
    .split("\n")
    .map((elm) => {
      let name = elm.trim();
      if (name.startsWith("*") || name.startsWith("+")) {
        name = name.slice(2);
      }

      const prefixTypeBranch = tokens[0];
      if (!name.startsWith(prefixTypeBranch)) {
        return {};
      }

      return {
        name: name.replace(prefixTypeBranch, ""),
        description: `${prefixTypeBranch.replace("/", "")} branch`,
        icon: "fig://icon?type=git",
      };
    })
    .filter((x) => x.name);
};

async function getGitFlowPrefix(
  type: string,
  executeShellCommand: Fig.ExecuteCommandFunction
): Promise<string> {
  const { stdout } = await executeShellCommand({
    command: "git",
    args: ["config", "--get", `gitflow.prefix.${type}`],
  });
  return stdout;
}

export const gitFlowGenerators: Record<string, Fig.Generator> = {
  typeBranches: {
    custom: async (tokens, executeShellCommand) => {
      // The branch type is the first "feature", "bugfix", ... word typed, which
      // is not always tokens[1] (e.g. when loaded from `git flow`)
      const type = tokens.find((token) => branchTypes.includes(token));
      if (!type) {
        return [];
      }
      const prefix = await getGitFlowPrefix(type, executeShellCommand);
      const { stdout } = await executeShellCommand({
        command: "git",
        args: [
          "--no-optional-locks",
          "branch",
          "-a",
          "--no-color",
          "--sort=-committerdate",
        ],
      });
      return postProcessBranches(stdout, [prefix]);
    },
  },
  remotes: {
    script: ["git", "remote"],
    postProcess: (out) =>
      out
        .split("\n")
        .filter(Boolean)
        .map((name) => ({
          name,
          description: "Remote",
          icon: "fig://icon?type=git",
        })),
  },
};

const verboseOption: Fig.Option = {
  name: ["-v", "--verbose"],
  description: "Verbose (more) output",
};

const fetchOption = (when: string): Fig.Option => ({
  name: ["-F", "--fetch"],
  description: `Fetch from origin before performing ${when}`,
});

const keepOptions: Fig.Option[] = [
  {
    name: ["-k", "--keep"],
    description: "Keep branch after performing finish",
  },
  {
    name: "--keepremote",
    description: "Keep the remote branch",
  },
  {
    name: "--keeplocal",
    description: "Keep the local branch",
  },
  {
    name: ["-D", "--force_delete"],
    description: "Force delete branch after finish",
  },
];

const squashOptions: Fig.Option[] = [
  {
    name: ["-S", "--squash"],
    description: "Squash branch during merge",
  },
  {
    name: "--squash-info",
    description: "Add branch info during squash",
  },
];

const pushOption: Fig.Option = {
  name: ["-p", "--push"],
  description: "Push to origin after performing finish",
};

const noTagOption = (what: string): Fig.Option => ({
  name: ["-n", "--notag"],
  description: `Don't tag this ${what}`,
});

const tagMessageOptions: Fig.Option[] = [
  {
    name: ["-s", "--sign"],
    description: "Sign the release tag cryptographically",
  },
  {
    name: ["-u", "--signingkey"],
    description: "Use the given GPG-key for the digital signature (implies -s)",
    args: { name: "key" },
  },
  {
    name: ["-m", "--message"],
    description: "Use the given tag message",
    args: { name: "message" },
    exclusiveOn: ["-f", "--messagefile"],
  },
  {
    name: ["-f", "--messagefile"],
    description: "Use the contents of the given file as a tag message",
    args: { name: "file", template: "filepaths" },
    exclusiveOn: ["-m", "--message"],
  },
];

const tagNameOption: Fig.Option = {
  name: ["-T", "--tagname"],
  description: "Use given tag name",
  args: { name: "tagname" },
};

const noBackmergeOption: Fig.Option = {
  name: ["-b", "--nobackmerge"],
  description: "Don't back-merge master, or tag if applicable, in develop",
};

const rebaseSubcommand = (type: string): Fig.Subcommand => ({
  name: "rebase",
  description: `Rebase a ${type} branch on its base branch`,
  options: [
    {
      name: ["-i", "--interactive"],
      description: "Do an interactive rebase",
    },
    {
      name: ["-p", "--preserve-merges"],
      description: "Preserve merges",
    },
  ],
  args: {
    name: "name",
    description: `The name or name prefix of the ${type} branch to rebase`,
    isOptional: true,
    generators: gitFlowGenerators.typeBranches,
  },
});

const deleteSubcommand = (type: string): Fig.Subcommand => ({
  name: "delete",
  description: `Delete a given ${type} branch`,
  options: [
    {
      name: ["-f", "--force"],
      description: "Force deletion",
    },
    {
      name: ["-r", "--remote"],
      description: "Delete remote branch",
    },
  ],
  args: {
    name: "name",
    description: `The name of the ${type} branch to delete`,
    generators: gitFlowGenerators.typeBranches,
  },
});

const trackSubcommand = (type: string): Fig.Subcommand => ({
  name: "track",
  description: `Start tracking a ${type} branch that is shared on origin`,
  args: {
    name: "name",
    description: `The name of the remote ${type} branch to track`,
  },
});

const publishSubcommand = (type: string): Fig.Subcommand => ({
  name: "publish",
  description: `Push a ${type} branch to the remote repository`,
  args: {
    name: "name",
    description: `The name of the ${type} branch to publish`,
    isOptional: type === "feature" || type === "bugfix",
    generators: gitFlowGenerators.typeBranches,
  },
});

const renameSubcommand = (type: string): Fig.Subcommand => ({
  name: "rename",
  description: `Rename a given ${type} branch`,
  args: {
    name: "new_name",
    description: `The new name of the ${type} branch`,
  },
});

const listSubcommand = (type: string): Fig.Subcommand => ({
  name: "list",
  description: `List all ${type} branches`,
  options: [verboseOption],
});

// feature and bugfix branches share the same commands
const topicBranchSubcommand = (type: string): Fig.Subcommand => ({
  name: type,
  description: `List all ${type} branches`,
  options: [verboseOption],
  subcommands: [
    listSubcommand(type),
    {
      name: "start",
      description: `Create a new ${type} branch`,
      options: [fetchOption("local operation")],
      args: [
        {
          name: "name",
          description: `The name of the new ${type} branch`,
        },
        {
          name: "base",
          description: "The branch to base the new branch on (default develop)",
          isOptional: true,
        },
      ],
    },
    {
      name: "finish",
      description: `Merge a ${type} branch into develop`,
      options: [
        fetchOption("finish"),
        {
          name: ["-r", "--rebase"],
          description: "Rebase before merging",
        },
        {
          name: ["-p", "--preserve-merges"],
          description: "Preserve merges while rebasing",
        },
        {
          name: "--push",
          description: "Push to origin after performing finish",
        },
        ...keepOptions,
        ...squashOptions,
        {
          name: "--no-ff",
          description: "Never fast-forward during the merge",
        },
      ],
      args: {
        name: "name",
        description: `The name or name prefix of the ${type} branch to finish`,
        generators: gitFlowGenerators.typeBranches,
      },
    },
    publishSubcommand(type),
    trackSubcommand(type),
    {
      name: "diff",
      description: `Show all changes in a ${type} branch that are not in the base`,
      args: {
        name: "name",
        description: `The name or name prefix of the ${type} branch`,
        isOptional: true,
        generators: gitFlowGenerators.typeBranches,
      },
    },
    rebaseSubcommand(type),
    {
      name: ["checkout", "co"],
      description: `Switch to a ${type} branch`,
      args: {
        name: "name",
        description: `The name or name prefix of the ${type} branch`,
        isOptional: true,
        generators: gitFlowGenerators.typeBranches,
      },
    },
    {
      name: "pull",
      description: `Pull a ${type} branch from the remote repository`,
      options: [
        {
          name: ["-r", "--rebase"],
          description: "Pull with rebase",
        },
      ],
      args: [
        {
          name: "remote",
          description: `The name of the remote to pull the ${type} branch from`,
          generators: gitFlowGenerators.remotes,
        },
        {
          name: "name",
          description: `The name of the ${type} branch`,
          isOptional: true,
        },
      ],
    },
    deleteSubcommand(type),
    renameSubcommand(type),
  ],
});

const configLocationOptions: Fig.Option[] = [
  {
    name: "--local",
    description: "Use repository config file",
  },
  {
    name: "--global",
    description: "Use global config file",
  },
  {
    name: "--system",
    description: "Use system config file",
  },
  {
    name: "--file",
    description: "Use given config file",
    args: { name: "file", template: "filepaths" },
  },
];

const prefixOption = (
  name: string | string[],
  type: string,
  what = "branches"
): Fig.Option => ({
  name,
  description: `Prefix for ${type} ${what}`,
  args: { name: "prefix" },
});

const completionSpec: Fig.Spec = {
  name: "git-flow",
  description:
    "A collection of Git extensions to provide high-level repository operations for Vincent Driessen's branching model",
  subcommands: [
    {
      name: "init",
      description:
        "Initialize a new git repo with support for the branching model",
      options: [
        {
          name: ["-d", "--defaults"],
          description: "Use default branch naming conventions",
        },
        {
          name: ["-f", "--force"],
          description:
            "Force setting of gitflow branches, even if already configured",
        },
        prefixOption(["-p", "--feature"], "feature"),
        prefixOption(["-b", "--bugfix"], "bugfix"),
        prefixOption(["-r", "--release"], "release"),
        prefixOption(["-x", "--hotfix"], "hotfix"),
        prefixOption(["-s", "--support"], "support"),
        prefixOption(["-t", "--tag"], "version", "tags"),
        ...configLocationOptions,
      ],
    },
    topicBranchSubcommand("feature"),
    topicBranchSubcommand("bugfix"),
    {
      name: "release",
      description: "List all release branches",
      options: [verboseOption],
      subcommands: [
        listSubcommand("release"),
        {
          name: "start",
          description: "Create a new release branch",
          options: [fetchOption("local operation")],
          args: [
            {
              name: "version",
              description: "The version of the new release branch",
            },
            {
              name: "base",
              description:
                "The branch to base the release branch on (default develop)",
              isOptional: true,
            },
          ],
        },
        {
          name: "finish",
          description:
            "Merge a release branch into master and develop and tag it",
          options: [
            fetchOption("finish"),
            ...tagMessageOptions,
            pushOption,
            {
              name: "--pushproduction",
              description: "Push the production branch",
            },
            {
              name: "--pushdevelop",
              description: "Push the develop branch",
            },
            {
              name: "--pushtag",
              description: "Push the tag",
            },
            ...keepOptions,
            noTagOption("release"),
            noBackmergeOption,
            ...squashOptions,
            {
              name: "--ff-master",
              description: "Fast forward master branch if possible",
            },
            tagNameOption,
            {
              name: "--nodevelopmerge",
              description: "Don't back-merge develop branch",
            },
          ],
          args: {
            name: "version",
            description: "The version of the release branch to finish",
            generators: gitFlowGenerators.typeBranches,
          },
        },
        {
          name: "branch",
          description:
            "Release a branch (defaults to develop) with the given version",
          options: [
            fetchOption("finish"),
            ...tagMessageOptions,
            pushOption,
            noTagOption("release"),
            ...squashOptions,
          ],
          args: [
            {
              name: "version",
              description: "The version of the release",
            },
            {
              name: "name",
              description: "The name of the branch to release",
              isOptional: true,
            },
          ],
        },
        publishSubcommand("release"),
        trackSubcommand("release"),
        rebaseSubcommand("release"),
        deleteSubcommand("release"),
      ],
    },
    {
      name: "hotfix",
      description: "List all hotfix branches",
      options: [verboseOption],
      subcommands: [
        listSubcommand("hotfix"),
        {
          name: "start",
          description: "Create a new hotfix branch",
          options: [fetchOption("local operation")],
          args: [
            {
              name: "version",
              description: "The version of the new hotfix branch",
            },
            {
              name: "base",
              description:
                "The branch to base the hotfix branch on (default master)",
              isOptional: true,
            },
          ],
        },
        {
          name: "finish",
          description:
            "Merge a hotfix branch into master and develop and tag it",
          options: [
            fetchOption("finish"),
            ...tagMessageOptions,
            pushOption,
            ...keepOptions,
            noTagOption("hotfix"),
            noBackmergeOption,
            ...squashOptions,
            tagNameOption,
          ],
          args: {
            name: "version",
            description: "The version of the hotfix branch to finish",
            generators: gitFlowGenerators.typeBranches,
          },
        },
        publishSubcommand("hotfix"),
        trackSubcommand("hotfix"),
        rebaseSubcommand("hotfix"),
        deleteSubcommand("hotfix"),
        renameSubcommand("hotfix"),
      ],
    },
    {
      name: "support",
      description: "List all support branches",
      options: [verboseOption],
      subcommands: [
        listSubcommand("support"),
        {
          name: "start",
          description: "Create a new support branch",
          options: [fetchOption("local operation")],
          args: [
            {
              name: "version",
              description: "The version of the new support branch",
            },
            {
              name: "base",
              description: "The branch to base the support branch on",
            },
          ],
        },
        rebaseSubcommand("support"),
      ],
    },
    {
      name: "version",
      description: "Show version information",
    },
    {
      name: "config",
      description: "Manage your git-flow configuration",
      options: configLocationOptions,
      subcommands: [
        {
          name: "list",
          description: "Show the git-flow configuration",
          options: configLocationOptions,
        },
        {
          name: "set",
          description:
            "Set the git-flow configuration option to the given value",
          options: configLocationOptions,
          args: [
            {
              name: "option",
              description: "The configuration option to set",
            },
            {
              name: "value",
              description: "The value of the configuration option",
            },
          ],
        },
        {
          name: "base",
          description: "Get or set the base branch of the given branch",
          options: [
            {
              name: "--get",
              description:
                "Get the base for the given branch (default behavior)",
            },
            {
              name: "--set",
              description: "Set the given base for the given branch",
            },
          ],
          args: [
            {
              name: "branch",
              description: "The branch to get or set the base of",
            },
            {
              name: "base",
              description: "The base branch to set",
              isOptional: true,
            },
          ],
        },
      ],
    },
    {
      name: "log",
      description: "Show the log of the current branch compared to develop",
    },
  ],
  options: [
    {
      name: ["-h", "--help"],
      description: "Show this help",
      isPersistent: true,
    },
    {
      name: "--showcommands",
      description: "Show git commands while executing them",
      isPersistent: true,
    },
  ],
};

export default completionSpec;
