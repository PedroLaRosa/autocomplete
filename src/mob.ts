// mob v5.4.2 (latest git tag of remotemobprogramming/mob, 2026-11-19). Source: `mob help` text (help/help.go), argument parsing (configuration/configuration.go) and command dispatch (mob.go) at v5.4.2; binary not run.
const branchOption: Fig.Option = {
  name: ["--branch", "-b"],
  description: "Set wip branch to 'mob/<base-branch>/<branch-postfix>'",
  args: {
    name: "branch-postfix",
  },
};

const roomOption: Fig.Option = {
  name: "--room",
  description: "Set room name for timer.mob.sh once",
  args: {
    name: "room-name",
  },
};

const completionSpec: Fig.Spec = {
  name: "mob",
  description: "Fast git handover for remote collaboration with mob.sh",
  subcommands: [
    {
      name: ["start", "s"],
      description: "Start session from base branch in wip branch",
      options: [
        {
          name: ["--include-uncommitted-changes", "-i"],
          description: "Move uncommitted changes to wip branch",
        },
        {
          name: ["--discard-uncommitted-changes", "-d"],
          description: "Discard uncommitted changes",
        },
        branchOption,
        {
          name: ["--create", "-c"],
          description: "Create the remote branch",
        },
        {
          name: ["--join", "-j"],
          description: "Join existing wip branch",
        },
        roomOption,
      ],
      args: {
        name: "minutes",
        description: "Start a <minutes> timer",
        isOptional: true,
      },
    },
    {
      name: ["next", "n"],
      description: "Handover changes in wip branch to next person",
      options: [
        {
          name: ["--stay", "-s"],
          description: "Stay on wip branch (default)",
        },
        {
          name: ["--return-to-base-branch", "-r"],
          description: "Return to base branch",
        },
        {
          name: ["--message", "-m"],
          description: "Override commit message",
          args: {
            name: "commit-message",
          },
        },
      ],
    },
    {
      name: ["done", "d"],
      description: "Squash all changes in wip branch to index in base branch",
      options: [
        {
          name: "--no-squash",
          description:
            "Squash no commits from wip branch, only merge wip branch",
        },
        {
          name: "--squash",
          description: "Squash all commits from wip branch",
        },
        {
          name: "--squash-wip",
          description:
            "Squash wip commits from wip branch, maintaining manual commits",
        },
      ],
    },
    {
      name: "reset",
      description: "Remove local and remote wip branch",
      options: [
        branchOption,
        {
          name: "--delete-remote-wip-branch",
          description:
            "Actually delete the local and remote wip branch for everyone (without it reset only prints a warning)",
          isDangerous: true,
        },
      ],
    },
    {
      name: "clean",
      description: "Removes all orphan wip branches",
    },
    {
      name: ["timer", "t"],
      description: "Start a <minutes> timer",
      options: [roomOption],
      subcommands: [
        {
          name: ["open", "o"],
          description: "Opens the timer website",
          options: [roomOption],
        },
      ],
      args: {
        name: "minutes",
      },
    },
    {
      name: "break",
      description: "Start a <minutes> break timer",
      args: {
        name: "minutes",
      },
    },
    {
      name: ["goal", "g"],
      description:
        "Gives you the current goal of your timer.mob.sh room, or sets it",
      options: [
        {
          name: "--delete",
          description: "Deletes the goal of your timer.mob.sh room",
        },
      ],
      args: {
        name: "your-goal",
        description: "Sets the goal of your timer.mob.sh room",
        isOptional: true,
      },
    },
    {
      name: "status",
      description: "Show status of the current session",
    },
    {
      name: "fetch",
      description: "Fetch remote state",
    },
    {
      name: ["branch", "b"],
      description: "Show remote wip branches",
    },
    {
      name: "config",
      description: "Show all configuration options",
    },
    {
      name: "version",
      description: "Show tool version",
    },
    {
      name: "help",
      description: "Show help",
    },
    {
      name: "moo",
      description: "Moo!",
    },
  ],
  options: [
    {
      name: "--debug",
      description: "Enable verbose logging",
      isPersistent: true,
    },
    {
      name: ["--help", "-h"],
      description: "Show help",
    },
    {
      name: ["--version", "-v"],
      description: "Show tool version",
    },
  ],
};
export default completionSpec;
