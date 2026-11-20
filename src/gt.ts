// Graphite CLI (gt) v1.8.6 (npm @withgraphite/graphite-cli, dist-tags latest/stable, 2026-11-20).
// Source: graphite.com command reference + llms-full.txt (read via Context7), cross-checked statically against the
// help/flag strings embedded in the v1.8.6 linux-x64 release binary. The binary was NOT executed (sandbox refuses to
// run downloaded binaries), so `gt --help --all` was not walked live and short aliases that only exist in the
// compiled code (e.g. `i` for info, `f` for fold) are carried over from the previous spec / docs.
// Deprecated pre-1.0 command groups (gt branch|stack|downstack|upstack|commit|repo|user) are intentionally omitted.
// The `gt submit --get-template/--fill-template` flags come only from the binary (feature-flagged), so they are hidden.

const messageOption = (description: string): Fig.Option => ({
  name: ["--message", "-m"],
  description,
  isRepeatable: true,
  args: {
    name: "message",
    description: "Commit message",
  },
});

const patchOption: Fig.Option = {
  name: ["--patch", "-p"],
  description: "Pick hunks to stage before committing",
};

const updateOption = (description: string): Fig.Option => ({
  name: ["--update", "-u"],
  description,
});

const verboseOption: Fig.Option = {
  name: ["--verbose", "-v"],
  description:
    "Show unified diff between the HEAD commit and what would be committed at the bottom of the commit message template. If specified twice, show in addition the unified diff between what would be committed and the worktree files, i.e. the unstaged changes to tracked files",
  isRepeatable: true,
};

const closeOption: Fig.Option = {
  name: ["--close", "-c"],
  description: "Close associated pull requests on GitHub",
};

const branchOption = (description: string): Fig.Option => ({
  name: "--branch",
  description,
  args: {
    name: "branch",
    description: "Name of branch",
  },
});

const submitOptions: Fig.Option[] = [
  {
    name: "--ai",
    description:
      "Automatically AI-generate title and description for all PRs. Only works when creating new PRs. If --edit, use the generated metadata as starting points",
  },
  {
    name: "--always",
    description:
      "Always push updates, even if the branch has not changed. Can be helpful for fixing an inconsistent Graphite stack view on Web/GitHub resulting from downtime/a bug",
  },
  branchOption(
    "Which branch to run this command from. Defaults to the current branch"
  ),
  {
    name: "--cli",
    description: "Edit PR metadata via the CLI instead of on web",
  },
  {
    name: "--comment",
    description: "Add a comment on the PR with the given message",
    args: {
      name: "message",
      description: "Comment message",
    },
  },
  {
    name: ["--confirm", "-c"],
    description:
      "Reports the PRs that would be submitted and asks for confirmation before pushing branches and opening/updating PRs. If either of --no-interactive or --dry-run is passed, this flag is ignored",
  },
  {
    name: ["--draft", "-d"],
    description: "If set, all new PRs will be created in draft mode",
  },
  {
    name: "--dry-run",
    description:
      "Reports the PRs that would be submitted and terminates. No branches are restacked or pushed and no PRs are opened or updated",
  },
  {
    name: ["--edit", "-e"],
    description:
      "Input metadata for all PRs interactively. If neither --edit nor --no-edit is passed, only prompts for new PRs",
  },
  {
    name: "--edit-description",
    description:
      "Input the PR description interactively. Default only prompts for new PRs. Takes precedence over --no-edit",
  },
  {
    name: "--edit-title",
    description:
      "Input the PR title interactively. Default only prompts for new PRs. Takes precedence over --no-edit",
  },
  {
    name: "--fill-template",
    description:
      "Read PR metadata from a JSON template file (or stdin if path is '-') and submit using those values. Implies --no-interactive",
    hidden: true,
    args: {
      name: "path",
      description: "JSON template file, or '-' for stdin",
      template: "filepaths",
    },
  },
  {
    name: ["--force", "-f"],
    description:
      "Force push: overwrites the remote branch with your local branch. Otherwise defaults to --force-with-lease",
  },
  {
    name: "--get-template",
    description:
      "Write a JSON template of PR metadata to a temp file and print the path. Implies --no-interactive. Use with --fill-template to submit using edited metadata",
    hidden: true,
  },
  {
    name: "--get-template-path",
    description:
      "When using --get-template, write the template to this path instead of a file under the system temp directory",
    hidden: true,
    args: {
      name: "path",
      description: "Where to write the template",
      template: "filepaths",
    },
  },
  {
    name: "--ignore-out-of-sync-trunk",
    description:
      "Perform the submit operation even if the trunk branch is out of sync with its upstream branch. This can lead to incorrect metadata being used during the submit",
  },
  {
    name: ["--merge-when-ready", "-m"],
    description:
      "If set, marks all PRs being submitted as merge when ready, which will let them automatically merge as soon as all merge requirements are met",
  },
  {
    name: "--no-ai",
    description:
      "Don't use AI to generate any PR fields. Takes precedence over --ai",
  },
  {
    name: ["--no-edit", "-n"],
    description:
      "Don't edit any PR fields inline. Takes precedence over --edit",
  },
  {
    name: "--no-edit-description",
    description:
      "Don't prompt for the PR description. Takes precedence over --edit-description and --edit",
  },
  {
    name: "--no-edit-title",
    description:
      "Don't prompt for the PR title. Takes precedence over --edit-title and --edit",
  },
  {
    name: ["--publish", "-p"],
    description: "If set, publishes all PRs being submitted",
  },
  {
    name: "--rerequest-review",
    description: "Rerequest review from current reviewers",
  },
  {
    name: "--restack",
    description:
      "Restack branches before submitting. If there are conflicts, output the branch names that could not be restacked",
  },
  {
    name: ["--reviewers", "-r"],
    description:
      "If set without an argument, prompt to manually set reviewers. Alternatively, accepts a comma separated string of reviewers",
    args: {
      name: "reviewers",
      description: "Comma separated string of reviewers",
      isOptional: true,
    },
  },
  {
    name: ["--stack", "-s"],
    description:
      "Submit descendants of the current branch in addition to its ancestors. Pass --no-stack to submit narrowly and skip the prompt to include branches above the current one that already have open PRs",
  },
  {
    name: "--target-trunk",
    description:
      "Which trunk to open PRs against on remote. Defaults to the target trunk for the current local trunk (defined in `gt config`), or the current local trunk if no target trunk is configured",
    args: {
      name: "branch",
      description: "Name of the target trunk branch",
    },
  },
  {
    name: ["--team-reviewers", "-t"],
    description:
      'Comma separated list of team slugs. You can either pass "slug" to this flag or "org/slug" to the reviewers flag. Will enable the --reviewers prompt if set without arguments',
    args: {
      name: "team-reviewers",
      description: "Comma separated list of team slugs",
      isOptional: true,
    },
  },
  {
    name: ["--update-only", "-u"],
    description:
      "Only push branches and update PRs for branches that already have PRs open",
  },
  {
    name: ["--view", "-v"],
    description: "Open the PR in your browser after submitting",
  },
  {
    name: ["--web", "-w"],
    description:
      "Open a web browser to edit PR metadata, even if no new PRs are being created or if configured to edit PR metadata via the CLI",
  },
];

const completionSpec: Fig.Spec = {
  name: "gt",
  description: "Graphite CLI",
  subcommands: [
    {
      name: "abort",
      description:
        "Aborts the current Graphite command halted by a rebase conflict",
      options: [
        {
          name: ["--force", "-f"],
          description: "Do not prompt for confirmation; abort immediately",
        },
      ],
    },
    {
      name: "absorb",
      description:
        "Amend staged changes to the relevant commits in the current stack. Relevance is calculated by checking the changes in each commit downstack from the current commit, and finding the first commit that each staged hunk (consecutive lines of changes) can be applied to deterministically. If there is no clear commit to absorb a hunk into, it will not be absorbed. Prompts for confirmation before amending the commits, and restacks the branches upstack of the current branch",
      options: [
        {
          name: ["--all", "-a"],
          description:
            "Stage all unstaged changes before absorbing. Unlike create and modify, this will not include untracked files, as file creations would never be absorbed",
        },
        {
          name: ["--dry-run", "-d"],
          description:
            "Print which commits the hunks would be absorbed into, but do not actually absorb them",
        },
        {
          name: ["--force", "-f"],
          description:
            "Do not prompt for confirmation; apply the hunks to the commits immediately",
        },
        {
          name: ["--patch", "-p"],
          description: "Pick hunks to stage before absorbing",
        },
      ],
    },
    {
      name: "aliases",
      description: "Edit your command aliases",
      options: [
        {
          name: "--legacy",
          description:
            "Append legacy aliases to your configuration. See https://graphite.com/docs/legacy-alias-preset for more details",
        },
        {
          name: "--reset",
          description: "Reset your alias configuration",
        },
      ],
    },
    {
      name: "auth",
      description:
        "Add your auth token to enable Graphite CLI to create and update your PRs on GitHub",
      priority: 50,
      options: [
        {
          name: ["--token", "-t"],
          description:
            "Auth token. Get it from: https://app.graphite.com/activate",
          args: {
            name: "token",
            description: "Auth token",
          },
        },
      ],
    },
    {
      name: ["bottom", "b"],
      description: "Switch to the branch closest to trunk in the current stack",
    },
    {
      name: "changelog",
      description: "Show the Graphite CLI changelog",
      priority: 50,
    },
    {
      name: ["checkout", "co"],
      description:
        "Switch to a branch. If no branch is provided, opens an interactive selector",
      args: {
        name: "branch",
        description: "Name of branch to checkout",
        isOptional: true,
      },
      options: [
        {
          name: ["--all", "-a"],
          description:
            "Show branches across all configured trunks in interactive selection",
        },
        {
          name: ["--show-untracked", "-u"],
          description: "Include untracked branches in interactive selection",
        },
        {
          name: ["--stack", "-s"],
          description:
            "Only show ancestors and descendants of the current branch in interactive selection",
        },
        {
          name: ["--trunk", "-t"],
          description: "Checkout the current trunk",
        },
      ],
    },
    {
      name: "children",
      description: "Show the children of the current branch",
    },
    {
      name: "completion",
      description: "Set up bash or zsh tab completion",
    },
    {
      name: "config",
      description: "Configure the Graphite CLI",
    },
    {
      name: ["continue", "cont"],
      description:
        "Continues the most recent Graphite command halted by a rebase conflict",
      options: [
        {
          name: ["--all", "-a"],
          description: "Stage all changes before continuing",
        },
      ],
    },
    {
      name: ["create", "c"],
      description:
        "Create a new branch stacked on top of the current branch and commit staged changes. If no branch name is specified, generate a branch name from the commit message. If your working directory contains no changes, an empty branch will be created. If you have any unstaged changes, you will be asked whether you'd like to stage them",
      args: {
        name: "name",
        description: "The name of the new branch",
        isOptional: true,
      },
      options: [
        {
          name: "--ai",
          description:
            "Automatically AI-generate the branch name and the commit message (if unset)",
        },
        {
          name: ["--all", "-a"],
          description:
            "Stage all unstaged changes before creating the branch, including to untracked files",
        },
        {
          name: ["--insert", "-i"],
          description:
            "Insert this branch between the current branch and its child. If there are multiple children, prompts you to select which should be moved onto the new branch",
        },
        messageOption("Specify a commit message"),
        {
          name: "--no-ai",
          description:
            "Do not automatically AI-generate the branch name and the commit message. Takes precedence over --ai",
        },
        {
          name: ["--onto", "-o"],
          description:
            "Create the branch on top of the specified branch instead of the current branch. This is especially useful when the target branch is checked out in another worktree",
          args: {
            name: "branch",
            description: "Name of branch",
          },
        },
        patchOption,
        updateOption(
          "Stage all updates to tracked files before creating the branch"
        ),
        verboseOption,
      ],
    },
    {
      name: "dash",
      description: "Opens your Graphite dashboard",
    },
    {
      name: ["delete", "dl"],
      description:
        "Delete a branch and its Graphite metadata (local-only). Children will be restacked onto the parent branch. If the branch is not merged or closed, prompts for confirmation. This command does not perform any action on GitHub or the remote repository. If you delete a branch with an open pull request, you will need to manually close the pull request",
      args: {
        name: "name",
        description:
          "The name of the branch to delete. If no branch is provided, opens an interactive selector",
        isOptional: true,
      },
      options: [
        closeOption,
        {
          name: "--downstack",
          description: "Also delete any ancestors of the specified branch",
        },
        {
          name: ["--force", "-f"],
          description: "Delete the branch even if it is not merged or closed",
        },
        {
          name: "--upstack",
          description: "Also delete any children of the specified branch",
        },
      ],
    },
    {
      name: "demo",
      description:
        "Run interactive demos in any repo to learn how to use the Graphite CLI. This will teach you how to create pull requests & stacks with Graphite",
      args: {
        name: "demoName",
        description: "Demo to run",
        isOptional: true,
        suggestions: [
          {
            name: "pull-request",
            description: "Learn how to create a PR",
          },
          {
            name: "stack",
            description: "Learn how to create a stack of PRs",
          },
        ],
      },
    },
    {
      name: "docs",
      description: "Show the Graphite CLI docs",
    },
    {
      name: ["down", "d"],
      description: "Switch to the parent of the current branch",
      args: {
        name: "steps",
        description: "The number of levels to traverse downstack",
        isOptional: true,
        default: "1",
      },
      options: [
        {
          name: ["--steps", "-n"],
          description: "The number of levels to traverse downstack",
          args: {
            name: "steps",
            default: "1",
          },
        },
      ],
    },
    {
      name: "feedback",
      description: "Post feedback directly to the maintainers' Slack",
      args: {
        name: "message",
        description:
          "Positive or constructive feedback for the Graphite team! Jokes are chill too",
        isOptional: true,
      },
      options: [
        {
          name: ["--with-debug-context", "-d"],
          description:
            "Include logs from the past 24 hours in your feedback. This can help us understand what's going on in your repo",
        },
      ],
    },
    {
      name: "fish",
      description: "Set up 'fish' tab completion",
    },
    {
      name: ["fold", "f"],
      description:
        "Fold a branch's changes into its parent, update dependencies of descendants of the new combined branch, and restack. This command does not perform any action on GitHub or the remote repository. If the branch has an open pull request, you can use `--close` to close the pull request",
      options: [
        closeOption,
        {
          name: ["--keep", "-k"],
          description:
            "Keeps the name of the current branch instead of using the name of its parent",
        },
        {
          name: "--stack",
          description:
            "Fold the selected branch's entire stack into a single retained branch",
        },
      ],
    },
    {
      name: "freeze",
      description:
        "Freeze specified branch and branches downstack of it. Freezing a branch prevents local modifications to the branch including any restacks. You can still sync remote changes to the branch with `gt sync` or `gt get`. You can also build PRs on top of a frozen branch. This operation can be undone with `gt unfreeze`",
      args: {
        name: "branch",
        description: "Name of branch to freeze",
        isOptional: true,
      },
    },
    {
      name: "get",
      description:
        "For a given branch or PR number, sync branches from trunk to the given branch from remote, prompting the user to resolve any conflicts. If the branch passed to get already exists locally, any local branches upstack of the branch are also synced; to opt out of this behavior, use the --downstack flag. If no branch is provided, sync the current stack",
      args: {
        name: "branch",
        description: "Branch or PR number to get from remote",
        isOptional: true,
      },
      options: [
        {
          name: "--checkout",
          description:
            "Check out the target branch after syncing (true by default; skip with --no-checkout)",
        },
        {
          name: "--delete-all",
          description:
            "Delete all merged or closed branches during get without prompting. This only affects branch cleanup; to persist it for get and sync, enable the cleanup setting in `gt config`",
        },
        {
          name: ["--downstack", "-d"],
          description:
            "When syncing a branch that already exists locally, don't sync upstack branches",
        },
        {
          name: ["--force", "-f"],
          description:
            "Overwrite all fetched branches with remote source of truth",
        },
        {
          name: ["--remote-upstack", "-u"],
          description:
            "Include upstack PRs when fetching PR information from remote",
        },
        {
          name: "--restack",
          description:
            "Restack any branches in the stack that can be restacked without conflicts (true by default; skip with --no-restack)",
        },
        {
          name: ["--unfrozen", "-U"],
          description: "Checkout new branches as unfrozen (allow local edits)",
        },
      ],
    },
    {
      name: "guide",
      description: "Read extended guides on how to use the gt program",
      args: {
        name: "title",
        description: "Guide to read",
        isOptional: true,
        suggestions: ["workflow"],
      },
    },
    {
      name: ["info", "i"],
      description: "Display information about the current branch",
      args: {
        name: "branch",
        description:
          "The branch to show info for. Defaults to the current branch",
        isOptional: true,
      },
      options: [
        {
          name: ["--patch", "-p"],
          description: "Show the changes made by each commit",
        },
        {
          name: ["--diff", "-d"],
          description:
            "Show the diff between this branch and its parent. Takes precedence over patch",
        },
        {
          name: ["--body", "-b"],
          description: "Show the PR body, if it exists",
        },
        {
          name: ["--stat", "-s"],
          description:
            "Show a diffstat instead of a full diff. Modifies either --patch or --diff. If neither is passed, implies --diff",
        },
      ],
    },
    {
      name: "init",
      description:
        "Initialize Graphite in this repository by selecting a trunk branch. Can also be used to change the trunk branch of the repository",
      options: [
        {
          name: "--reset",
          description: "Untrack all branches",
        },
        {
          name: "--trunk",
          description:
            "The name of your trunk branch. If no name is passed, you will be prompted to select one interactively",
          args: {
            name: "trunk",
            description: "Name of the trunk branch",
            isOptional: true,
          },
        },
      ],
    },
    {
      name: ["log", "l"],
      description: "Commands that log your stacks",
      options: [
        {
          name: ["--all", "-a"],
          description: "Show branches across all configured trunks",
        },
        {
          name: "--classic",
          description:
            "Use the old short logging style, which runs out of screen real estate more quickly. Other options will not work in classic mode",
        },
        {
          name: ["--reverse", "-r"],
          description:
            "Print the log upside down. Handy when you have a lot of branches",
        },
        {
          name: ["--show-untracked", "-u"],
          description: "Include untracked branches in the log",
        },
        {
          name: ["--stack", "-s"],
          description:
            "Only show ancestors and descendants of the current branch",
        },
        {
          name: ["--steps", "-n"],
          description:
            "Only show this many levels upstack and downstack. Implies --stack",
          args: {
            name: "steps",
            description: "Number of levels",
          },
        },
      ],
      subcommands: [
        {
          name: "",
          description:
            "Log all branches tracked by Graphite, showing dependencies and info for each",
        },
        {
          name: "long",
          description: "Display a graph of the commit ancestry of all branches",
        },
        {
          name: "short",
          description:
            "Log all stacks tracked by Graphite, arranged to show dependencies",
        },
      ],
    },
    {
      name: ["merge", "mg"],
      description:
        "Merge the pull requests associated with all branches from trunk to the current branch via Graphite",
      options: [
        {
          name: ["--confirm", "-c"],
          description:
            "Asks for confirmation before merging branches. Prompts for confirmation if the local branches differ from remote, regardless of the value of this flag",
        },
        {
          name: "--dry-run",
          description:
            "Reports the PRs that would be merged and terminates. No branches are merged",
        },
      ],
    },
    {
      name: ["modify", "m"],
      description:
        "Modify the current branch by amending its commit or creating a new commit. Automatically restacks descendants. If you have any unstaged changes, you will be asked whether you'd like to stage them. `gt modify --into` will not modify a branch that is checked out in another worktree",
      options: [
        {
          name: ["--all", "-a"],
          description: "Stage all changes before committing",
        },
        {
          name: ["--commit", "-c"],
          description:
            "Create a new commit instead of amending the current commit. If this branch has no commits, this command always creates a new commit",
        },
        {
          name: ["--edit", "-e"],
          description:
            "If passed, open an editor to edit the commit message. When creating a new commit, this flag is ignored",
        },
        {
          name: "--interactive-rebase",
          description:
            "Ignore all other flags and start a git interactive rebase on the commits in this branch",
        },
        {
          name: "--into",
          description:
            "The branch to modify instead of the current branch. Must be downstack in the current stack",
          args: {
            name: "branch",
            description: "Name of branch",
          },
        },
        messageOption(
          "The message for the new or amended commit. If passed, no editor is opened"
        ),
        patchOption,
        {
          name: "--reset-author",
          description:
            "Set the author of the commit to the current user if amending",
        },
        updateOption("Stage all updates to tracked files before committing"),
        verboseOption,
      ],
    },
    {
      name: "move",
      description:
        "Rebase the current branch onto the target branch and restack all of its descendants. Use --only to move just the selected branch and leave its descendants behind. If no branch is passed in, opens an interactive selector",
      options: [
        {
          name: ["--all", "-a"],
          description:
            "Show branches across all configured trunks in interactive selection",
        },
        {
          name: "--only",
          description:
            "Only move this branch. Its descendants stay on the previous parent",
        },
        {
          name: ["--onto", "-o"],
          description: "Branch to move the current branch onto",
          args: {
            name: "branch",
            description: "Branch to move onto",
          },
        },
        {
          name: ["--source", "-s"],
          description: "Branch to move (defaults to current branch)",
          args: {
            name: "branch",
            description: "Branch to move",
          },
        },
      ],
    },
    {
      name: "parent",
      description: "Show the parent of the current branch",
    },
    {
      name: "pop",
      description:
        "Delete the current branch but retain the state of files in the working tree",
    },
    {
      name: "pr",
      description:
        "Opens the pull request page for a branch or PR number. If no branch is passed, the current branch's PR is opened",
      args: {
        name: "branch",
        description: "A branch name or PR number to open",
        isOptional: true,
      },
      options: [
        {
          name: "--stack",
          description: "Open the stack page",
        },
      ],
    },
    {
      name: ["rename", "rn"],
      description:
        "Rename a branch and update metadata referencing it. If no branch name is supplied, you will be prompted for a new branch name. Note that this removes any association to a pull request, as GitHub pull request branch names are immutable",
      args: {
        name: "name",
        description: "The new name for the current branch",
        isOptional: true,
      },
      options: [
        {
          name: ["--force", "-f"],
          description:
            "Allow renaming a branch that is already associated with an open GitHub pull request",
        },
      ],
    },
    {
      name: "reorder",
      description:
        "Reorder branches between trunk and the current branch, restacking all of their descendants. Opens an editor where you can reorder branches by moving around a line corresponding to each branch",
      options: [
        {
          name: "--stack",
          description:
            "Include every upstack branch through the tip that gt top would select",
        },
      ],
    },
    {
      name: ["restack", "r"],
      description:
        "Ensure each branch in the current stack has its parent in its Git commit history, rebasing if necessary. If conflicts are encountered, you will be prompted to resolve them via an interactive Git rebase. Branches checked out in other worktrees are skipped",
      options: [
        branchOption(
          "Which branch to run this command from. Defaults to the current branch"
        ),
        {
          name: ["--downstack", "-d"],
          description: "Only restack this branch and its ancestors",
        },
        {
          name: ["--only", "-o"],
          description: "Only restack this branch",
        },
        {
          name: ["--upstack", "-u"],
          description: "Only restack this branch and its descendants",
        },
      ],
    },
    {
      name: "revert",
      description:
        "Create a branch that reverts a commit on the trunk branch. Currently experimental",
      args: {
        name: "sha",
        description: "The commit to revert",
      },
      options: [
        {
          name: ["--edit", "-e"],
          description: "Edit the commit message",
        },
      ],
    },
    {
      name: ["split", "sp"],
      description:
        "Split the current branch into multiple branches. Has three forms: --by-commit, --by-hunk, and --by-file <pathspec>. All forms must be run interactively except for --by-file which can run non-interactively. Without options, prompts for a splitting strategy",
      options: [
        {
          name: ["--by-commit", "--commit", "-c"],
          description: "Split by commit - slice up the history of this branch",
        },
        {
          name: ["--by-file", "--file", "-f"],
          description:
            "Split by file - takes a pathspec and splits any matching files into a new parent branch. Repeat the flag for multiple patterns",
          isRepeatable: true,
          args: {
            name: "pathspec",
            description: "Pathspec of the files to split out",
          },
        },
        {
          name: ["--by-hunk", "--hunk", "-h"],
          description: "Split by hunk - split into new single-commit branches",
        },
      ],
    },
    {
      name: ["squash", "sq"],
      description:
        "Squash all commits in the current branch into a single commit and restack upstack branches",
      options: [
        {
          name: ["--message", "-m"],
          description: "The updated message for the commit",
          args: {
            name: "message",
            description: "Commit message",
          },
        },
        {
          name: "--edit",
          description: "Modify the existing commit message",
        },
        {
          name: ["--no-edit", "-n"],
          description:
            "Don't modify the existing commit message. Takes precedence over --edit",
        },
      ],
    },
    {
      name: ["submit", "s"],
      description:
        "Idempotently force push all branches in the current stack from trunk to the current branch to GitHub, creating or updating distinct pull requests for each. Validates that branches are properly restacked before submitting, and fails if there are conflicts. Blocks force pushes to branches that overwrite branches that have changed since last submit. Opens an interactive prompt that allows you to input pull request metadata. 'gt ss' is a default alias for 'gt submit --stack'",
      options: submitOptions,
    },
    {
      name: "sync",
      description:
        "Sync all branches with remote, prompting to delete any branches for PRs that have been merged or closed. Restacks all branches in your repository that can be restacked without conflicts. If trunk cannot be fast-forwarded to match remote, overwrites trunk with the remote version",
      options: [
        {
          name: ["--all", "-a"],
          description: "Sync branches across all configured trunks",
        },
        {
          name: ["--delete-all", "-d"],
          description:
            "Delete all merged or closed branches during sync without prompting. This only affects branch cleanup; to persist it, enable the sync cleanup setting in `gt config`",
        },
        {
          name: ["--force", "-f"],
          description:
            "Don't prompt for confirmation before overwriting or deleting a branch in any place where confirmation is requested",
        },
        {
          name: "--restack",
          description:
            "Restack any branches that can be restacked without conflicts (true by default; skip with --no-restack)",
        },
      ],
    },
    {
      name: ["top", "t"],
      description:
        "Switch to the tip branch of the current stack. Prompts if ambiguous",
    },
    {
      name: ["track", "tr"],
      description:
        "Start tracking the current (or provided) branch with Graphite by selecting its parent. Can recursively track a stack of branches by specifying each branch's parent interactively. This command can also be used to fix corrupted Graphite metadata",
      args: {
        name: "branch",
        description: "Branch to begin tracking. Defaults to the current branch",
        isOptional: true,
      },
      options: [
        {
          name: ["--force", "-f"],
          description:
            "Sets the parent to the most recent tracked ancestor of the branch being tracked to skip prompts. Takes precedence over --parent",
        },
        {
          name: ["--parent", "-p"],
          description:
            "The tracked branch's parent. Must be set to a tracked branch. If provided, only one branch can be tracked at a time",
          args: {
            name: "parent",
            description: "Name of parent branch",
          },
        },
      ],
    },
    {
      name: "trunk",
      description: "Switch to the trunk branch",
    },
    {
      name: "undo",
      description: "Undo the most recent Graphite mutations",
      options: [
        {
          name: ["--force", "-f"],
          description:
            "Do not prompt for confirmation; undo the most recent command immediately",
        },
      ],
    },
    {
      name: "unfreeze",
      description:
        "Unfreeze specified branch and branches upstack of it. Freezing a branch prevents local modifications to the branch including any restacks. Unfreezing will enable local modifications to the branch. See `gt freeze` for more information",
      args: {
        name: "branch",
        description: "Name of branch to unfreeze",
        isOptional: true,
      },
    },
    {
      name: "unlink",
      description: "Unlink the PR currently associated with the branch",
      args: {
        name: "branch",
        description: "The branch to unlink",
        isOptional: true,
      },
    },
    {
      name: ["untrack", "utr"],
      description:
        "Stop tracking a branch with Graphite. If the branch has children, they will also be untracked. Default to the current branch if none is passed in",
      args: {
        name: "branch",
        description: "Branch name",
        isOptional: true,
      },
      options: [
        {
          name: ["--force", "-f"],
          description:
            "Will not prompt for confirmation before untracking a branch with children",
        },
      ],
    },
    {
      name: ["up", "u"],
      description:
        "Switch to the child of the current branch. Prompts if ambiguous",
      args: {
        name: "steps",
        description: "The number of levels to traverse upstack",
        isOptional: true,
        default: "1",
      },
      options: [
        {
          name: ["--steps", "-n"],
          description: "The number of levels to traverse upstack",
          args: {
            name: "steps",
            default: "1",
          },
        },
        {
          name: "--to",
          description:
            "Target branch to navigate towards. When multiple children exist, selects the path leading to this branch",
          args: {
            name: "branch",
            description: "Name of branch",
          },
        },
      ],
    },
  ],
  options: [
    {
      name: "--version",
      description: "Show Graphite CLI version",
      priority: 0,
      isPersistent: true,
    },
    {
      name: ["--help", "-h"],
      description: "Show help for Graphite CLI",
      priority: 20,
      isPersistent: true,
    },
    {
      name: ["--allCommands", "--all-commands"],
      description:
        "Print the full list of command help (not printed with the global help; equivalent to `gt --help --all`)",
    },
    {
      name: "--interactive",
      description:
        "Enable interactive features like prompts, pagers, and editors. Enabled by default. Disable with --no-interactive",
      priority: 10,
      isPersistent: true,
    },
    {
      name: "--no-interactive",
      description: "Disable interactive features like prompts and editors",
      priority: 10,
      isPersistent: true,
    },
    {
      name: ["--quiet", "-q"],
      description: "Minimize output to the terminal. Implies --no-interactive",
      priority: 10,
      isPersistent: true,
    },
    {
      name: "--verify",
      description:
        "Enable git hooks. Enabled by default. Disable with --no-verify",
      priority: 10,
      isPersistent: true,
    },
    {
      name: "--no-verify",
      description: "Disable git hooks",
      priority: 10,
      isPersistent: true,
    },
    {
      name: "--debug",
      description: "Write debug output to the terminal",
      priority: 10,
      isPersistent: true,
    },
    {
      name: "--cwd",
      description: "Working directory in which to perform operations",
      priority: 10,
      isPersistent: true,
      args: {
        name: "directory",
        template: "folders",
      },
    },
  ],
};

export default completionSpec;
