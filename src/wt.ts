// Worktrunk v0.83.0 (GitHub release "latest", 2026-11-21). Source: `wt -h` on
// every subcommand of the v0.83.0 release binary, shortcuts from `wt switch --help`

const branchIcon = "fig://icon?type=git";

const localBranches: Fig.Generator = {
  script: ["git", "for-each-ref", "--format=%(refname:short)", "refs/heads"],
  postProcess: (out) =>
    out
      .split("\n")
      .filter(Boolean)
      .map((name) => ({ name, description: "Branch", icon: branchIcon })),
};

const worktreeBranches: Fig.Generator = {
  script: ["git", "worktree", "list", "--porcelain"],
  postProcess: (out) =>
    out
      .split("\n")
      .filter((line) => line.startsWith("branch refs/heads/"))
      .map((line) => ({
        name: line.slice("branch refs/heads/".length),
        description: "Worktree",
        icon: branchIcon,
      })),
};

const shortcuts: Fig.Suggestion[] = [
  { name: "^", description: "Default branch" },
  { name: "@", description: "Current branch/worktree" },
  { name: "-", description: "Previous worktree" },
  { name: "pr:", description: "GitHub PR's branch (pr:{N})" },
  { name: "mr:", description: "GitLab MR's branch (mr:{N})" },
];

const branchArg = (
  name: string,
  description: string,
  extra: Partial<Fig.Arg> = {}
): Fig.Arg => ({
  name,
  description,
  isOptional: true,
  generators: localBranches,
  ...extra,
});

const worktreeArg = (description: string): Fig.Arg => ({
  name: "branches",
  description,
  isOptional: true,
  isVariadic: true,
  generators: worktreeBranches,
  suggestions: shortcuts.slice(0, 3),
});

const format = (values: string[], dflt: string): Fig.Option => ({
  name: "--format",
  description: `Output format (default: ${dflt})`,
  args: { name: "format", suggestions: values },
});
const textJson = format(["text", "json"], "text");

const noHooks: Fig.Option = { name: "--no-hooks", description: "Skip hooks" };
const dryRun = (description: string): Fig.Option => ({
  name: "--dry-run",
  description,
});
const foreground: Fig.Option = {
  name: "--foreground",
  description: "Run in foreground (block until complete)",
};
const stage: Fig.Option = {
  name: "--stage",
  description: "What to stage before committing (default: all)",
  args: { name: "stage", suggestions: ["all", "tracked", "none"] },
};
const branchOpt = (description: string, short = false): Fig.Option => ({
  name: short ? ["-b", "--branch"] : "--branch",
  description,
  args: branchArg("branch", "Branch"),
});
const targetBranch: Fig.Option = branchOpt(
  "Target branch (defaults to current)"
);

const hookTypes = [
  "pre-switch",
  "post-switch",
  "pre-start",
  "post-start",
  "pre-commit",
  "post-commit",
  "pre-merge",
  "post-merge",
  "pre-remove",
  "post-remove",
];

const shells = ["bash", "fish", "nu", "zsh", "powershell"];
const cmdOpt: Fig.Option = {
  name: "--cmd",
  description: "Command name for shell integration (defaults to binary name)",
  args: { name: "cmd" },
};

const plugin = (
  name: string,
  description: string,
  what: string,
  extra: Fig.Subcommand[] = []
): Fig.Subcommand => ({
  name,
  description,
  subcommands: [
    { name: "install", description: `Install the ${what}` },
    { name: "uninstall", description: `Remove the ${what}` },
    ...extra,
  ],
});

const completionSpec: Fig.Spec = {
  name: "wt",
  description: "Git worktree management for parallel AI agent workflows",
  subcommands: [
    {
      name: "switch",
      description: "Switch to a worktree; create if needed",
      args: branchArg(
        "branch",
        "Branch, worktree path, shortcut, or PR/MR URL (picker if omitted)",
        { suggestions: shortcuts }
      ),
      options: [
        { name: ["-c", "--create"], description: "Create a new branch" },
        {
          name: ["-b", "--base"],
          description: "Base branch (defaults to default branch)",
          args: branchArg("base", "Base branch", { suggestions: shortcuts }),
        },
        {
          name: "--path",
          description: "Worktree directory for a new worktree (experimental)",
          args: { name: "path", template: "folders" },
        },
        {
          name: ["-x", "--execute"],
          description: "Program to run after switch",
          args: { name: "execute", isCommand: true },
        },
        { name: "--clobber", description: "Remove stale paths at target" },
        {
          name: "--no-cd",
          description: "Skip directory change after switching",
        },
        {
          name: "--branches",
          description: "Picker: include branches without worktrees",
        },
        { name: "--remotes", description: "Picker: include remote branches" },
        { name: "--prs", description: "Picker: include open PRs/MRs" },
        noHooks,
        textJson,
      ],
    },
    {
      name: "list",
      description: "List worktrees and their status",
      subcommands: [
        {
          name: "statusline",
          description: "Single-line status for the current worktree",
          options: [format(["table", "json", "claude-code"], "table")],
        },
      ],
      options: [
        format(["table", "json"], "table"),
        {
          name: "--branches",
          description: "Include branches without worktrees",
        },
        { name: "--remotes", description: "Include remote branches" },
        { name: "--full", description: "Show CI status and LLM summaries" },
        {
          name: "--progressive",
          description: "Show fast info immediately, update with slow info",
        },
      ],
    },
    {
      name: "remove",
      description: "Remove worktree; delete branch if merged",
      args: worktreeArg("Branch name or worktree path (default: current)"),
      options: [
        {
          name: "--no-delete-branch",
          description: "Keep branch after removal",
          exclusiveOn: ["--delete-branch"],
        },
        {
          name: "--delete-branch",
          description:
            "Delete branch after removal (overrides [remove] delete-branch = false)",
          exclusiveOn: ["--no-delete-branch"],
        },
        {
          name: ["-D", "--force-delete"],
          description: "Delete unmerged branches",
          isDangerous: true,
        },
        foreground,
        {
          name: "--reap",
          description: "Kill processes started in the worktree (experimental)",
        },
        {
          name: ["-f", "--force"],
          description: "Force worktree removal",
          isDangerous: true,
        },
        noHooks,
        textJson,
      ],
    },
    {
      name: "merge",
      description: "Merge a branch into the target branch",
      args: branchArg("target", "Target branch"),
      options: [
        branchOpt("Branch to merge (defaults to the current branch)", true),
        { name: "--no-squash", description: "Skip commit squashing" },
        { name: "--no-commit", description: "Skip commit and squash" },
        {
          name: "--no-rebase",
          description:
            "Skip rebase; require the target to fast-forward to the resulting tip",
        },
        { name: "--no-remove", description: "Keep worktree after merge" },
        {
          name: "--no-ff",
          description: "Create a merge commit (no fast-forward)",
        },
        stage,
        noHooks,
        textJson,
      ],
    },
    {
      name: "step",
      description: "Run individual operations",
      subcommands: [
        {
          name: "commit",
          description: "Stage and commit with LLM-generated message",
          options: [
            branchOpt(
              "Branch to operate on (defaults to current worktree)",
              true
            ),
            stage,
            dryRun(
              "Preview prompt, command, and generated message without committing"
            ),
            noHooks,
            textJson,
          ],
        },
        {
          name: "squash",
          description: "Squash commits since branching",
          args: branchArg("target", "Target branch"),
          options: [
            stage,
            dryRun(
              "Preview prompt, command, and generated message without squashing"
            ),
            noHooks,
            textJson,
          ],
        },
        {
          name: "rebase",
          description: "Rebase onto target",
          args: branchArg("target", "Target branch, tag, or commit"),
          options: [textJson],
        },
        {
          name: "push",
          description: "Fast-forward target to current branch",
          args: branchArg("target", "Target branch"),
          options: [
            {
              name: "--no-ff",
              description: "Create a merge commit (no fast-forward)",
            },
            textJson,
          ],
        },
        {
          name: "diff",
          description: "Show all changes since branching",
          args: [
            branchArg("target", "Target branch"),
            {
              name: "extra_args",
              description: "Extra arguments forwarded to git diff (after --)",
              isOptional: true,
              isVariadic: true,
            },
          ],
          options: [
            branchOpt(
              "Branch to operate on (defaults to current worktree)",
              true
            ),
          ],
        },
        {
          name: "copy-ignored",
          description: "Copy gitignored files to another worktree",
          options: [
            {
              name: "--from",
              description: "Source worktree branch",
              args: { name: "from", generators: worktreeBranches },
            },
            {
              name: "--to",
              description: "Destination worktree branch",
              args: { name: "to", generators: worktreeBranches },
            },
            dryRun("Show what would be copied"),
            {
              name: "--force",
              description: "Overwrite existing files in destination",
            },
            {
              name: "--require-include",
              description: "Require .worktreeinclude to copy anything",
            },
            textJson,
          ],
        },
        {
          name: "eval",
          description: "Evaluate a template expression",
          args: { name: "template", description: "Template expression" },
          options: [textJson],
        },
        {
          name: "for-each",
          description: "Run command in each worktree",
          args: {
            name: "args",
            description: "Command template (after --)",
            isVariadic: true,
            isCommand: true,
          },
          options: [textJson],
        },
        {
          name: "promote",
          description: "Swap a branch into the main worktree (experimental)",
          args: branchArg("branch", "Branch to promote to main worktree"),
          options: [textJson],
        },
        {
          name: "prune",
          description:
            "Remove worktrees and branches merged into the default branch",
          options: [
            dryRun("Show what would be removed"),
            {
              name: "--min-age",
              description:
                "Skip worktrees and branches younger than this (default: 1d)",
              args: { name: "min_age", suggestions: ["1h", "1d", "7d"] },
            },
            foreground,
            textJson,
          ],
        },
        {
          name: "relocate",
          description: "Move worktrees to expected paths (experimental)",
          args: worktreeArg(
            "Worktrees to relocate (defaults to all mismatched)"
          ),
          options: [
            dryRun("Show what would be moved"),
            {
              name: "--commit",
              description: "Commit uncommitted changes before relocating",
            },
            {
              name: "--clobber",
              description: "Backup non-worktree paths at target locations",
            },
            textJson,
          ],
        },
        {
          name: "tether",
          description:
            "Run a command; kill its process tree when its worktree is removed (experimental)",
          args: {
            name: "command",
            description: "Command to run (after --, no shell)",
            isVariadic: true,
            isCommand: true,
          },
        },
      ],
    },
    {
      name: "hook",
      description: "Run configured hooks",
      subcommands: [
        {
          name: "show",
          description: "Show configured hooks",
          args: {
            name: "hook_type",
            description: "Hook type to show (default: all)",
            isOptional: true,
            suggestions: hookTypes,
          },
          options: [
            {
              name: "--expanded",
              description: "Show expanded commands with current variables",
            },
            textJson,
          ],
        },
        ...hookTypes.map((name): Fig.Subcommand => ({
          name,
          description: `Run ${name} hooks`,
          args: {
            name: "name",
            description: "Filter by command name(s)",
            isOptional: true,
            isVariadic: true,
          },
          options: [
            dryRun("Show what would run without executing"),
            foreground,
            {
              name: "--var",
              description: "Set template variable",
              deprecated: { description: "Use --KEY=VALUE" },
              isRepeatable: true,
              args: { name: "KEY=VALUE" },
            },
          ],
        })),
      ],
    },
    {
      name: "config",
      description: "Manage user & project configs",
      subcommands: [
        {
          name: "shell",
          description: "Shell integration setup",
          subcommands: [
            {
              name: "init",
              description: "Generate shell integration code",
              args: { name: "shell", suggestions: shells },
              options: [cmdOpt],
            },
            {
              name: "install",
              description: "Write shell integration to config files",
              args: {
                name: "shell",
                description: "Shell to install (default: all)",
                isOptional: true,
                suggestions: shells,
              },
              options: [dryRun("Show what would be changed"), cmdOpt],
            },
            {
              name: "uninstall",
              description: "Remove shell integration from config files",
              args: {
                name: "shell",
                description: "Shell to uninstall (default: all)",
                isOptional: true,
                suggestions: shells,
              },
              options: [dryRun("Show what would be changed")],
            },
            { name: "show-theme", description: "Show output theme samples" },
          ],
        },
        {
          name: "create",
          description: "Create configuration file",
          options: [
            {
              name: "--project",
              description:
                "Create project config (.config/wt.toml) instead of user config",
            },
          ],
        },
        {
          name: "show",
          description: "Show configuration files & locations",
          options: [
            {
              name: "--full",
              description:
                "Run diagnostic checks (CI tools, commit generation, version)",
            },
            textJson,
          ],
        },
        {
          name: "update",
          description: "Update deprecated config settings",
          options: [
            {
              name: "--output",
              description: "Output migrated config (- for stdout)",
              args: { name: "path", template: "filepaths" },
            },
          ],
        },
        {
          name: "approvals",
          description: "Manage command approvals",
          subcommands: [
            {
              name: "list",
              description: "List project commands and their approval status",
              options: [textJson],
            },
            {
              name: "add",
              description: "Store approvals in approvals.toml",
              options: [{ name: "--all", description: "Show all commands" }],
            },
            {
              name: "clear",
              description: "Clear approved commands from approvals.toml",
              options: [
                {
                  name: ["-g", "--global"],
                  description: "Clear global approvals",
                },
                { name: "--stale", description: "Clear only stale approvals" },
              ],
            },
          ],
        },
        {
          name: "alias",
          description: "Inspect and preview aliases",
          subcommands: [
            {
              name: "show",
              description:
                "Show an alias's template, or all aliases' templates",
              args: {
                name: "name",
                description: "Alias name (omit to show all)",
                isOptional: true,
              },
            },
            {
              name: "dry-run",
              description:
                "Preview an alias invocation with template expansion",
              args: [
                { name: "name", description: "Alias name" },
                {
                  name: "args",
                  description: "Arguments forwarded to the alias (after --)",
                  isOptional: true,
                  isVariadic: true,
                },
              ],
            },
          ],
        },
        {
          name: "plugins",
          description: "Plugin management",
          subcommands: [
            plugin("claude", "Claude Code plugin", "Worktrunk plugin", [
              {
                name: "install-statusline",
                description: "Configure the Claude Code statusline",
              },
            ]),
            plugin("codex", "Codex plugin", "Worktrunk plugins"),
            plugin("omp", "Oh-my-pi activity hook", "activity tracking hook"),
            plugin("opencode", "OpenCode plugin", "activity tracking plugin"),
            plugin(
              "pi",
              "Pi activity extension",
              "activity tracking extension"
            ),
          ],
        },
        {
          name: "state",
          description: "Manage internal data and cache",
          subcommands: [
            {
              name: "get",
              description: "Get all stored state",
              options: [format(["table", "json"], "table")],
            },
            { name: "clear", description: "Clear all stored state" },
            {
              name: "cache",
              description: "Regenerable caches",
              options: [textJson],
              subcommands: [
                {
                  name: "get",
                  description: "Show cache contents",
                  options: [textJson],
                },
                {
                  name: "clear",
                  description: "Drop all caches",
                  options: [textJson],
                },
              ],
            },
            {
              name: "default-branch",
              description: "Default branch detection and override",
              subcommands: [
                { name: "get", description: "Get the default branch" },
                {
                  name: "set",
                  description: "Set the default branch",
                  args: {
                    name: "branch",
                    description: "Branch name to set as default",
                    generators: localBranches,
                  },
                },
                {
                  name: "clear",
                  description: "Clear the default branch cache",
                },
              ],
            },
            {
              name: "logs",
              description: "Operation and debug logs",
              options: [textJson],
              subcommands: [
                {
                  name: "get",
                  description: "List all log file paths",
                  options: [textJson],
                },
                {
                  name: "profile",
                  description: "Performance profile from a trace",
                  args: {
                    name: "file",
                    description:
                      "Trace to read (defaults to .git/wt/logs/trace.jsonl; - for stdin)",
                    isOptional: true,
                    template: "filepaths",
                  },
                  options: [textJson],
                },
                {
                  name: "clear",
                  description: "Clear all log files",
                  options: [textJson],
                },
              ],
            },
            {
              name: "marker",
              description: "Branch markers",
              options: [textJson],
              subcommands: [
                {
                  name: "get",
                  description: "Get marker for a branch",
                  options: [targetBranch, textJson],
                },
                {
                  name: "set",
                  description: "Set marker for a branch",
                  args: {
                    name: "value",
                    description: "Marker text (shown in wt list output)",
                  },
                  options: [targetBranch, textJson],
                },
                {
                  name: "clear",
                  description: "Clear marker for a branch",
                  options: [
                    targetBranch,
                    { name: "--all", description: "Clear all markers" },
                    textJson,
                  ],
                },
              ],
            },
            {
              name: "vars",
              description: "Custom variables per branch",
              subcommands: [
                {
                  name: "get",
                  description: "Get a value",
                  args: { name: "key", description: "Key name" },
                  options: [targetBranch],
                },
                {
                  name: "list",
                  description: "List all keys",
                  options: [targetBranch, textJson],
                },
                {
                  name: "set",
                  description: "Set a value",
                  args: { name: "KEY=VALUE", description: "KEY=VALUE pair" },
                  options: [targetBranch],
                },
                {
                  name: "clear",
                  description: "Clear a key or all keys",
                  args: {
                    name: "key",
                    description: "Key to clear (required unless --all)",
                    isOptional: true,
                  },
                  options: [
                    targetBranch,
                    {
                      name: "--all",
                      description: "Clear all keys for the branch",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  options: [
    { name: ["-V", "--version"], description: "Print version" },
    {
      name: ["-h", "--help"],
      description: "Print help",
      isPersistent: true,
    },
    {
      name: "-C",
      description: "Working directory for this command",
      isPersistent: true,
      args: { name: "path", template: "folders" },
    },
    {
      name: "--config",
      description: "User config file path",
      isPersistent: true,
      args: { name: "path", template: "filepaths" },
    },
    {
      name: "--config-set",
      description: "Override config with inline TOML, e.g. list.full=true",
      isPersistent: true,
      isRepeatable: true,
      args: { name: "toml" },
    },
    {
      name: ["-v", "--verbose"],
      description: "Verbose output (-v: info logs; -vv: also debug logs)",
      isPersistent: true,
      isRepeatable: 2,
    },
    {
      name: ["-y", "--yes"],
      description: "Skip approval prompts",
      isPersistent: true,
    },
  ],
};

export default completionSpec;
