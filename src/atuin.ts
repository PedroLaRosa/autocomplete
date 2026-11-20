// Atuin v18.25.0 (GitHub release atuinsh/atuin, tag v18.25.0 of 2026-11-20,
// also the latest on crates.io and Homebrew, 2026-11-20). Source: clap derives
// in crates/atuin/src/command, crates/atuin-ai and crates/atuin-pty-proxy at
// tag v18.25.0 (read statically and diffed against v18.24.8, the binary was not
// run), help text from crates/atuin/i18n/en-US/atuin.ftl.
// Default features (client, sync, daemon, ai, pty-proxy, octavo) plus
// self-update (`atuin update`, official installer builds only).
// Commands that upstream hides and that only print "now part of `atuin setup`"
// (`hook install`, `mcp install`, `config enable|disable`, `threads enable`)
// are left out; so are hidden flags (`setup --hub|--backfill|--upload-threads`).

// Agent harnesses known to `atuin threads --harness`
const harnesses: Fig.Suggestion[] = [
  { name: "amp" },
  { name: ["claude-code", "claude"] },
  { name: "codex" },
  { name: "copilot" },
  { name: ["grok", "grok-build"] },
  { name: ["hermes", "hermes-agent"] },
  { name: ["kiro", "kiro-cli"] },
  { name: "opencode" },
  { name: "pi" },
  { name: "omp" },
];

// Agents `atuin resume --in` can write a session for (every harness but amp)
const continueTargets = harnesses.filter((harness) => harness.name !== "amp");

// Agents `atuin hook` and `atuin setup --agents` take, with copilot's aliases
const agents: Fig.Suggestion[] = harnesses.map((harness) =>
  harness.name === "copilot"
    ? { name: ["copilot", "github-copilot", "copilot-cli"] }
    : harness
);

// `--<flag>` and `--no-<flag>`, as `atuin setup` has them
const setupToggle = (flag: string, on: string, off: string): Fig.Option[] => [
  { name: `--${flag}`, description: on },
  { name: `--no-${flag}`, description: off },
];

const filterModes = [
  "global",
  "host",
  "session",
  "directory",
  "workspace",
  "session-preload",
];

const formatOption = (variables: string): Fig.Option => ({
  name: ["--format", "-f"],
  description: `Available variables: ${variables}`,
  args: { name: "FORMAT" },
});

const timezoneOption: Fig.Option = {
  name: ["--timezone", "--tz"],
  description:
    "Display the command time in another timezone other than the configured default",
  args: { name: "TIMEZONE" },
};

const humanOption: Fig.Option = {
  name: "--human",
  description: "Use human-readable formatting for time",
};

const cmdOnlyOption: Fig.Option = {
  name: "--cmd-only",
  description: "Show only the text of the command",
};

const print0Option: Fig.Option = {
  name: "--print0",
  description: "Terminate the output with a null, for better multiline support",
};

const dryRunOption: Fig.Option = {
  name: ["--dry-run", "-n"],
  description:
    "List matching history lines without performing the actual deletion",
};

const usernameOption: Fig.Option = {
  name: ["--username", "-u"],
  args: { name: "USERNAME" },
};

const passwordOption: Fig.Option = {
  name: ["--password", "-p"],
  description:
    "Your password, or `-` to read it from stdin. Falls back to `ATUIN_PASSWORD`, then a prompt",
  args: { name: "PASSWORD" },
};

const totpOption: Fig.Option = {
  name: ["--totp-code", "-t"],
  description: "The two-factor authentication code for your account, if any",
  args: { name: "TOTP_CODE" },
};

const loginOptions: Fig.Option[] = [
  usernameOption,
  passwordOption,
  {
    name: ["--key", "-k"],
    description:
      "The encryption key for your account. Falls back to `ATUIN_ENCRYPTION_KEY`, then a prompt",
    args: { name: "KEY" },
  },
  totpOption,
];

const registerOptions: Fig.Option[] = [
  usernameOption,
  passwordOption,
  {
    name: ["--email", "-e"],
    args: { name: "EMAIL" },
  },
];

const namespaceOption: Fig.Option = {
  name: ["--namespace", "-n"],
  description: "Namespace for the key-value pair",
  args: { name: "NAMESPACE", default: "default" },
};

const styleOption: Fig.Option = {
  name: "--style",
  description: "How output is rendered",
  args: {
    name: "STYLE",
    default: "auto",
    suggestions: [
      {
        name: "auto",
        description: "Pretty when writing to a terminal, plain otherwise",
      },
      { name: "plain" },
      { name: "pretty" },
      { name: "json", description: "A single JSON document" },
      { name: "ndjson", description: "Newline-delimited JSON: one per line" },
    ],
  },
};

const harnessOption = (description: string): Fig.Option => ({
  name: "--harness",
  description,
  args: { name: "HARNESS", suggestions: harnesses },
});

const resumeSpec: Omit<Fig.Subcommand, "name"> = {
  args: {
    name: "QUERY",
    description:
      "Search text, or a thread id (or unique id prefix) to resume without the picker",
    isVariadic: true,
    isOptional: true,
  },
  options: [
    {
      name: "--print",
      description: "Print the resume command instead of running it",
    },
    {
      name: "--in",
      description:
        "Continue the thread QUERY names in another agent, as a new session there",
      exclusiveOn: ["--fork", "--as-is", "--switch"],
      args: { name: "HARNESS", suggestions: continueTargets },
    },
    {
      name: "--fork",
      description:
        "Fork the thread QUERY names into a new session of the same agent and resume it",
      exclusiveOn: ["--in", "--as-is", "--switch"],
    },
    {
      name: "--as-is",
      description:
        "Resume this machine's copy of the thread as it is, without catching it up with sync",
      exclusiveOn: ["--fork", "--in", "--switch", "--branch"],
    },
    {
      name: "--switch",
      description:
        "Switch this machine's copy of the thread to another branch, in place, and resume it",
      exclusiveOn: ["--fork", "--in", "--as-is"],
    },
    {
      name: "--branch",
      description:
        "The branch to catch up to, switch to, fork from or continue: `this`, `@<host id>`, or the start of its head's id",
      exclusiveOn: ["--as-is"],
      args: { name: "BRANCH" },
    },
    {
      name: "--filter-mode",
      description: "The filter the picker opens in (default: global)",
      args: {
        name: "FILTER_MODE",
        suggestions: ["global", "host", "workspace", "directory", "branch"],
      },
    },
    {
      name: "--inline-height",
      description: "Height of the inline picker; 0 for fullscreen",
      args: { name: "INLINE_HEIGHT" },
    },
  ],
};

// Subcommands of `atuin threads`, which `atuin ai session` still takes
const threadsSubcommands: Fig.Subcommand[] = [
  {
    name: "list",
    description: "List captured threads, newest first",
    options: [styleOption],
  },
  {
    name: "show",
    description:
      "Show a thread and its messages. Accepts an id, a harness id or `latest`",
    args: { name: "ID|latest", suggestions: ["latest"] },
    options: [styleOption],
  },
  {
    name: "search",
    description:
      "Full-text search across captured threads, most relevant first",
    args: {
      name: "QUERY",
      description:
        "Words to look for in thread titles, message text, reasoning, and tool calls; all must appear. Quote words to find them together, in that order. Use `--` before a query that starts with `-`",
      isVariadic: true,
    },
    options: [
      harnessOption("Only search threads from this harness"),
      {
        name: "--limit",
        description: "Maximum threads to return; 0 for unbounded",
        args: { name: "N", default: "10" },
      },
      styleOption,
    ],
  },
  {
    name: "tail",
    description:
      "Follow threads and messages as they are recorded (until interrupted)",
    options: [styleOption],
  },
  {
    name: "import",
    description:
      "Import every thread the agents have on this machine, including those capture leaves alone",
    options: [
      harnessOption("Only import threads from this harness"),
      styleOption,
    ],
  },
  {
    name: "push",
    description:
      "Capture messages an agent hands over, one JSON object per line on stdin",
    options: [
      {
        ...harnessOption("The harness the thread is from"),
        isRequired: true,
      },
      {
        name: "--session",
        description: "The thread's id, as its harness names it",
        isRequired: true,
        args: { name: "SESSION" },
      },
    ],
  },
  {
    name: "resume",
    description: "Pick a captured thread and resume it",
    ...resumeSpec,
  },
];

const completionSpec: Fig.Spec = {
  name: "atuin",
  description: "Magical shell history",
  subcommands: [
    {
      name: "search",
      description: "Interactive history search",
      args: {
        name: "QUERY",
        isVariadic: true,
        isOptional: true,
      },
      options: [
        {
          name: ["--cwd", "-c"],
          description: "Filter search result by directory",
          args: {
            name: "CWD",
            template: "folders",
          },
        },
        {
          name: "--exclude-cwd",
          description: "Exclude directory from results",
          args: {
            name: "EXCLUDE_CWD",
            template: "folders",
          },
        },
        {
          name: ["--exit", "-e"],
          description:
            "Filter by exit code; repeat to include any of the given codes",
          isRepeatable: true,
          args: {
            name: "EXIT",
          },
        },
        {
          name: "--exclude-exit",
          description:
            "Exclude results with this exit code; repeat to exclude multiple codes",
          isRepeatable: true,
          args: {
            name: "EXCLUDE_EXIT",
          },
        },
        {
          name: ["--before", "-b"],
          description: "Only include results added before this date",
          args: {
            name: "BEFORE",
          },
        },
        {
          name: "--after",
          description:
            "Only include results after this date; see `--before` for how it is interpreted",
          args: {
            name: "AFTER",
          },
        },
        {
          name: "--limit",
          description: "How many entries to return at most",
          args: {
            name: "LIMIT",
          },
        },
        {
          name: "--offset",
          description: "Offset from the start of the results",
          args: {
            name: "OFFSET",
          },
        },
        {
          name: ["--interactive", "-i"],
          description: "Open interactive search UI",
        },
        {
          name: "--filter-mode",
          description: "Allow overriding filter mode over config",
          args: {
            name: "FILTER_MODE",
            suggestions: filterModes,
          },
        },
        {
          name: "--search-mode",
          description: "Allow overriding search mode over config",
          args: {
            name: "SEARCH_MODE",
            suggestions: [
              { name: "prefix" },
              { name: ["fulltext", "full-text"] },
              { name: "fuzzy" },
              { name: "daemon-fuzzy" },
            ],
          },
        },
        {
          name: "--keymap-mode",
          description: "Notify the keymap at the shell's side",
          args: {
            name: "KEYMAP_MODE",
            default: "auto",
            suggestions: ["emacs", "vim-normal", "vim-insert", "auto"],
          },
        },
        humanOption,
        cmdOnlyOption,
        print0Option,
        {
          name: "--delete",
          description:
            "Delete anything matching this query. Will not print out the match",
        },
        {
          name: "--delete-it-all",
          description: "Delete EVERYTHING!",
        },
        {
          name: ["--reverse", "-r"],
          description: "Reverse the order of results, oldest first",
        },
        {
          ...timezoneOption,
          description:
            "Timezone to display command times in and to interpret `--before`/`--after` in",
          args: { name: "TIMEZONE", isOptional: true },
        },
        formatOption(
          "{command}, {directory}, {duration}, {user}, {host}, {time}, {exit} and {relativetime}"
        ),
        {
          name: "--inline-height",
          description:
            "Set the maximum number of lines Atuin's interface should take up",
          args: {
            name: "INLINE_HEIGHT",
          },
        },
        {
          name: "--author",
          description:
            "Filter by author. Supports $all-user (non-agents), $all-agent, or literal names",
          isRepeatable: true,
          args: {
            name: "AUTHOR",
            suggestions: ["$all-user", "$all-agent"],
          },
        },
        {
          name: "--include-duplicates",
          description:
            "Include duplicate commands in the output (non-interactive only)",
        },
        {
          name: "--shell",
          description: "Filter by the shell that was used to run the command",
          isRepeatable: true,
          args: {
            name: "SHELL",
          },
        },
      ],
    },
    {
      name: "output",
      description: "Work with captured command output",
      subcommands: [
        {
          name: "search",
          description: "Full-text search over captured command output",
          args: {
            name: "QUERY",
            description:
              "Words to search for; all must appear. Quote words to find them together, in that order. Use `--` before a query that starts with `-`",
            isVariadic: true,
          },
          options: [
            {
              name: "--limit",
              description: "Maximum number of matches to return",
              args: { name: "LIMIT", default: "5" },
            },
            {
              name: ["--context", "-C"],
              description:
                "Show only the matching lines, with this many lines of context on either side; without it, each match's whole output",
              args: { name: "CONTEXT" },
            },
            {
              ...styleOption,
              description: "How matches are rendered",
              args: {
                name: "STYLE",
                default: "auto",
                suggestions: [
                  "auto",
                  "plain",
                  "pretty",
                  {
                    name: "json",
                    description: "A single JSON array of match objects",
                  },
                  {
                    name: "ndjson",
                    description:
                      "Newline-delimited JSON: one match object per line",
                  },
                ],
              },
            },
          ],
        },
      ],
    },
    {
      name: "stats",
      description: "Calculate statistics for your history",
      args: {
        name: "PERIOD",
        description:
          "Compute statistics for the specified period, leave blank for statistics since the beginning",
        isVariadic: true,
        isOptional: true,
      },
      options: [
        {
          name: ["--count", "-c"],
          description: "How many top commands to list",
          args: {
            name: "COUNT",
            default: "10",
          },
        },
        {
          name: ["--ngram-size", "-n"],
          description: "The number of consecutive commands to consider",
          args: {
            name: "NGRAM_SIZE",
            default: "1",
          },
        },
        {
          name: "--filter-mode",
          description: "Filter commands by scope",
          args: {
            name: "FILTER_MODE",
            suggestions: filterModes,
          },
        },
      ],
    },
    {
      name: "sync",
      description: "Sync with the configured server",
      options: [
        {
          name: ["--force", "-f"],
          description: "Force re-download everything",
        },
      ],
    },
    {
      name: "login",
      description: "Login to the configured server",
      options: loginOptions,
    },
    {
      name: "logout",
      description: "Log out",
    },
    {
      name: "register",
      description: "Register with the configured server",
      options: registerOptions,
    },
    {
      name: "key",
      description: "Print the encryption key for transfer to another machine",
      options: [
        {
          name: "--base64",
          description: "Switch to base64 output of the key",
        },
      ],
    },
    {
      name: "status",
      description: "Display the sync status",
    },
    {
      name: "account",
      description: "Manage your sync account",
      subcommands: [
        {
          name: "login",
          description: "Login to the configured server",
          options: loginOptions,
        },
        {
          name: "register",
          description: "Register a new account",
          options: registerOptions,
        },
        {
          name: "logout",
          description: "Log out",
        },
        {
          name: "delete",
          description: "Delete your account, and all synced data",
          options: [
            { name: ["--password", "-p"], args: { name: "PASSWORD" } },
            totpOption,
          ],
        },
        {
          name: "change-password",
          description: "Change your password",
          options: [
            {
              name: ["--current-password", "-c"],
              args: { name: "CURRENT_PASSWORD" },
            },
            {
              name: ["--new-password", "-n"],
              args: { name: "NEW_PASSWORD" },
            },
            totpOption,
          ],
        },
        {
          name: "link",
          description: "Link your CLI sync account to your Hub account",
        },
      ],
    },
    {
      name: "history",
      description: "Manipulate shell history",
      subcommands: [
        {
          name: "start",
          description: "Begins a new command in the history",
          args: {
            name: "COMMAND",
            isVariadic: true,
            isOptional: true,
          },
          options: [
            {
              name: "--author",
              description:
                "Author of this command, eg `ellie`, `claude`, or `copilot`",
              args: { name: "AUTHOR" },
            },
            {
              name: "--author-kind",
              description: "Whether a human or an AI agent ran this command",
              args: {
                name: "AUTHOR_KIND",
                suggestions: [
                  { name: "user", description: "A human ran this command" },
                  {
                    name: "agent",
                    description: "An AI agent ran this command",
                  },
                ],
              },
            },
            {
              name: "--intent",
              description: "Optional intent/rationale for running this command",
              args: { name: "INTENT" },
            },
          ],
        },
        {
          name: "end",
          description:
            "Finishes a new command in the history (adds time, exit code)",
          args: {
            name: "ID",
          },
          options: [
            {
              name: ["--exit", "-e"],
              isRequired: true,
              args: {
                name: "EXIT",
              },
            },
            {
              name: ["--duration", "-d"],
              args: {
                name: "DURATION",
              },
            },
          ],
        },
        {
          name: "tail",
          description:
            "Stream history events from the daemon as they are received",
        },
        {
          name: "list",
          description: "List all items in history",
          options: [
            {
              name: ["--cwd", "-c"],
            },
            {
              name: ["--session", "-s"],
            },
            {
              name: "--human",
            },
            cmdOnlyOption,
            print0Option,
            {
              name: ["--reverse", "-r"],
              args: {
                name: "REVERSE",
                isOptional: true,
                default: "true",
                suggestions: ["true", "false"],
              },
            },
            timezoneOption,
            formatOption(
              "{command}, {directory}, {duration}, {user}, {host}, {author}, {intent}, {exit}, {time}, {session}, and {uuid}"
            ),
          ],
        },
        {
          name: "last",
          description: "Get the last command that was run",
          options: [
            {
              name: "--human",
            },
            cmdOnlyOption,
            timezoneOption,
            formatOption(
              "{command}, {directory}, {duration}, {user}, {host}, {author}, {intent}, {time}, {session}, {uuid} and {relativetime}"
            ),
          ],
        },
        {
          name: "init-store",
          description: "Initialize the history record store",
        },
        {
          name: "prune",
          description:
            "Delete history entries matching the configured exclusion filters",
          options: [dryRunOption],
        },
        {
          name: "dedup",
          description:
            "Delete duplicate history entries (that have the same command, cwd and hostname)",
          options: [
            dryRunOption,
            {
              name: ["--before", "-b"],
              description:
                "Only delete results added before this date, read in the configured timezone unless it carries an explicit offset",
              isRequired: true,
              args: { name: "BEFORE" },
            },
            {
              name: "--dupkeep",
              description: "How many recent duplicates to keep",
              isRequired: true,
              args: { name: "DUPKEEP" },
            },
          ],
        },
      ],
    },
    {
      name: "setup",
      description: "Setup Atuin features",
      options: [
        {
          name: "--yes",
          description:
            "Set up without asking, as the flags say: sync is off unless `--sync` says otherwise",
        },
        {
          name: "--only",
          description:
            "Change only what the flags say, without asking, and leave the rest as it is",
        },
        {
          name: "--no-import",
          description:
            "Don't import the shell history and threads already on this machine",
        },
        ...setupToggle(
          "shell-history",
          "Capture your shell history",
          "Don't capture your shell history"
        ),
        {
          name: "--shells",
          description:
            "The shells to hook into: zsh, bash, fish and powershell",
          isRepeatable: true,
          args: {
            name: "SHELL",
            suggestions: ["zsh", "bash", "fish", "powershell"],
          },
        },
        ...setupToggle(
          "output-capture",
          "Capture what your commands print",
          "Don't capture what your commands print"
        ),
        ...setupToggle(
          "threads",
          "Capture your conversations with your agents",
          "Don't capture your conversations with your agents"
        ),
        ...setupToggle(
          "agent-history",
          "Capture the commands your agents run",
          "Don't capture the commands your agents run"
        ),
        {
          name: "--agents",
          description: "The agents to hook into and connect",
          isRepeatable: true,
          args: { name: "AGENT", suggestions: agents },
        },
        ...setupToggle(
          "ctrl-r",
          "Search with ctrl-r",
          "Leave ctrl-r to your shell"
        ),
        ...setupToggle(
          "up-arrow",
          "Search with the up arrow",
          "Leave the up arrow to your shell"
        ),
        ...setupToggle(
          "mcp",
          "Let your agents search Atuin over MCP",
          "Don't let your agents search Atuin over MCP"
        ),
        ...setupToggle(
          "daemon",
          "Run the daemon, which thread and output capture need",
          "Stop the daemon, and keep it off"
        ),
        {
          name: "--sync",
          description:
            "Where to sync: `cloud`, `off`, or your own server's address",
          args: { name: "cloud|off|URL", suggestions: ["cloud", "off"] },
        },
      ],
    },
    {
      name: "init",
      description: "Print Atuin's shell init script",
      args: {
        name: "SHELL",
        suggestions: ["zsh", "bash", "fish", "nu", "xonsh", "powershell"],
      },
      options: [
        {
          name: "--disable-ctrl-r",
          description: "Disable the binding of CTRL-R to atuin",
        },
        {
          name: "--disable-up-arrow",
          description: "Disable the binding of the Up Arrow key to atuin",
        },
        {
          name: "--bind-ai-resume",
          description:
            "Bind CTRL-] to atuin threads resume (zsh, bash and fish; off by default: it replaces the shell's own binding)",
        },
      ],
    },
    {
      name: "import",
      description: "Import shell history from file",
      subcommands: [
        {
          name: "auto",
          description: "Import history for the current shell",
        },
        ...["zsh", "bash", "replxx", "resh", "fish", "nu", "powershell"].map(
          (shell) => ({
            name: shell,
            description: `Import history from the ${shell} history file`,
          })
        ),
        {
          name: "zsh-hist-db",
          description: "Import history from the zsh-histdb database",
        },
        {
          name: "nu-hist-db",
          description: "Import history from the nu history database",
        },
        {
          name: "xonsh",
          description: "Import history from xonsh json files",
        },
        {
          name: "xonsh-sqlite",
          description: "Import history from xonsh sqlite db",
        },
      ],
    },
    {
      name: "doctor",
      description: "Run the doctor to check for common issues",
    },
    {
      name: "update",
      description: "Update atuin to the latest version on your release channel",
      options: [
        {
          name: "--check",
          description:
            "Check whether an update is available without installing it",
          exclusiveOn: ["--version"],
        },
        {
          name: "--version",
          description:
            "Update (or roll back) to a specific version, e.g. 18.9.0 or 18.9.0-nightly.1",
          exclusiveOn: ["--check", "--prerelease"],
          args: { name: "VERSION" },
        },
        {
          name: "--prerelease",
          description:
            'Update to the latest prerelease, as if `update_channel = "nightly"` were set',
          exclusiveOn: ["--version"],
        },
      ],
    },
    {
      name: "kv",
      description: "Get or set small key-value pairs",
      subcommands: [
        {
          name: "set",
          description: "Set a key-value pair",
          args: {
            name: "VALUE",
            description: "Value to store (reads from stdin if not provided)",
            isOptional: true,
          },
          options: [
            {
              name: ["--key", "-k"],
              description: "Key to set",
              isRequired: true,
              args: {
                name: "KEY",
              },
            },
            namespaceOption,
          ],
        },
        {
          name: ["delete", "rm"],
          description: "Delete one or more key-value pairs",
          args: {
            name: "KEYS",
            description: "Keys to delete",
            isVariadic: true,
          },
          options: [namespaceOption],
        },
        {
          name: "get",
          description: "Retrieve a saved value",
          args: {
            name: "KEY",
            description: "Key to retrieve",
          },
          options: [namespaceOption],
        },
        {
          name: ["list", "ls"],
          description: "List all keys in a namespace, or in all namespaces",
          options: [
            {
              ...namespaceOption,
              description: "Namespace to list keys from",
            },
            {
              name: ["--all-namespaces", "-a"],
              description: "List all keys in all namespaces",
            },
          ],
        },
        {
          name: "rebuild",
          description: "Rebuild the KV store",
        },
      ],
    },
    {
      name: "store",
      description: "Manage the atuin data store",
      subcommands: [
        {
          name: "status",
          description: "Print the current status of the record store",
        },
        {
          name: "rebuild",
          description: "Rebuild a store (eg atuin store rebuild history)",
          args: { name: "TAG" },
        },
        {
          name: "rekey",
          description:
            "Re-encrypt the store with a new key (potential for data loss!)",
          args: {
            name: "KEY",
            description:
              "The new key to use for encryption. Omit for a randomly-generated key",
            isOptional: true,
          },
        },
        {
          name: "compact",
          description:
            "Rewrite every record in the compact on-disk encoding and reclaim space",
        },
        {
          name: "purge",
          description:
            "Delete all records in the store that cannot be decrypted with the current key",
        },
        {
          name: "verify",
          description:
            "Verify that all records in the store can be decrypted with the current key",
        },
        {
          name: "push",
          description:
            "Push all records to the remote sync server (one way sync)",
          options: [
            {
              name: ["--tag", "-t"],
              description:
                "The tag to push (eg, 'history'). Defaults to all tags",
              args: { name: "TAG" },
            },
            {
              name: "--host",
              description:
                "The host to push, in the form of a UUID host ID. Defaults to the current host",
              args: { name: "HOST" },
            },
            {
              name: "--force",
              description: "Force push records",
            },
            {
              name: "--page",
              description: "Page Size",
              args: { name: "PAGE", default: "100" },
            },
          ],
        },
        {
          name: "pull",
          description:
            "Pull records from the remote sync server (one way sync)",
          options: [
            {
              name: ["--tag", "-t"],
              description:
                "The tag to pull (eg, 'history'). Defaults to all tags",
              args: { name: "TAG" },
            },
            {
              name: "--force",
              description: "Force pull records",
            },
            {
              name: "--page",
              description: "Page Size",
              args: { name: "PAGE", default: "100" },
            },
          ],
        },
      ],
    },
    {
      name: "dotfiles",
      description: "List legacy synced dotfiles data",
      subcommands: [
        {
          name: "alias",
          description: "List legacy shell aliases synced with Atuin",
          subcommands: [
            {
              name: "list",
              description: "List all aliases",
              options: [
                {
                  name: "--sort-by",
                  description: "Sort results by field",
                  args: {
                    name: "SORT_BY",
                    default: "name",
                    suggestions: ["name", "value"],
                  },
                },
                {
                  name: ["--reverse", "-r"],
                  description: "Sort in reverse (descending) order",
                },
                {
                  name: ["--name", "-n"],
                  description: "Filter aliases by name (substring match)",
                  args: { name: "NAME" },
                },
                {
                  name: ["--value", "-v"],
                  description: "Filter aliases by value (substring match)",
                  args: { name: "VALUE" },
                },
              ],
            },
          ],
        },
        {
          name: "var",
          description:
            "List legacy shell and environment variables synced with Atuin",
          subcommands: [
            {
              name: "list",
              description: "List all variables",
              options: [
                {
                  name: "--sort-by",
                  description: "Sort results by field",
                  args: {
                    name: "SORT_BY",
                    default: "name",
                    suggestions: ["name", "value"],
                  },
                },
                {
                  name: ["--reverse", "-r"],
                  description: "Sort in reverse (descending) order",
                },
                {
                  name: ["--name", "-n"],
                  description: "Filter variables by name (substring match)",
                  args: { name: "NAME" },
                },
                {
                  name: ["--value", "-v"],
                  description: "Filter variables by value (substring match)",
                  args: { name: "VALUE" },
                },
                {
                  name: "--exports-only",
                  description: "Show only exported variables",
                  exclusiveOn: ["--shell-only"],
                },
                {
                  name: "--shell-only",
                  description: "Show only non-exported (shell) variables",
                  exclusiveOn: ["--exports-only"],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "scripts",
      description: "Manage your scripts with Atuin",
      subcommands: [
        {
          name: "new",
          args: { name: "NAME" },
          options: [
            {
              name: ["--description", "-d"],
              args: { name: "DESCRIPTION" },
            },
            {
              name: ["--tags", "-t"],
              isRepeatable: true,
              args: { name: "TAGS" },
            },
            {
              name: ["--shebang", "-s"],
              args: { name: "SHEBANG" },
            },
            {
              name: "--script",
              args: { name: "SCRIPT", template: "filepaths" },
            },
            {
              name: "--last",
              description: "Use the last command as the script content",
              args: { name: "LAST", isOptional: true },
            },
            {
              name: "--no-edit",
              description: "Skip opening editor when using --last",
            },
          ],
        },
        {
          name: "run",
          args: { name: "NAME" },
          options: [
            {
              name: ["--var", "-v"],
              description: "Specify template variables in the format KEY=VALUE",
              isRepeatable: true,
              args: { name: "VAR" },
            },
          ],
        },
        {
          name: ["list", "ls"],
        },
        {
          name: "get",
          args: { name: "NAME" },
          options: [
            {
              name: ["--script", "-s"],
              description: "Display only the executable script with shebang",
            },
          ],
        },
        {
          name: "edit",
          args: { name: "NAME" },
          options: [
            {
              name: ["--description", "-d"],
              args: { name: "DESCRIPTION" },
            },
            {
              name: ["--tags", "-t"],
              description: "Replace all existing tags with these new tags",
              isRepeatable: true,
              args: { name: "TAGS" },
            },
            {
              name: "--no-tags",
              description: "Remove all tags from the script",
            },
            {
              name: "--rename",
              description: "Rename the script",
              args: { name: "RENAME" },
            },
            {
              name: ["--shebang", "-s"],
              args: { name: "SHEBANG" },
            },
            {
              name: "--script",
              args: { name: "SCRIPT", template: "filepaths" },
            },
            {
              name: "--no-edit",
              description: "Skip opening editor",
            },
          ],
        },
        {
          name: ["delete", "rm"],
          args: { name: "NAME" },
          options: [
            {
              name: ["--force", "-f"],
            },
          ],
        },
      ],
    },
    {
      name: "hook",
      description: "Record the commands an AI agent runs, from its hooks",
      args: {
        name: "AGENT",
        description: "Which agent's hook format to parse",
        suggestions: agents,
      },
    },
    {
      name: "ai",
      description:
        "The old name of `atuin threads`; the AI assistant itself was removed",
      hidden: true,
      subcommands: [
        {
          name: "session",
          description: "The old name of `atuin threads`",
          subcommands: threadsSubcommands,
        },
        {
          name: "resume",
          description: "Pick a captured thread and resume it",
          ...resumeSpec,
        },
      ],
    },
    {
      name: "threads",
      description:
        "Search, read and resume your coding agents' captured threads",
      subcommands: threadsSubcommands,
    },
    {
      name: "resume",
      description:
        "Pick a captured coding-agent thread and resume it (short for `atuin threads resume`)",
      ...resumeSpec,
    },
    {
      name: "mcp",
      description:
        "Start an MCP server exposing history search to AI tools (stdio)",
    },
    {
      name: "wrapped",
      description: "Show a fun, year-in-review recap of your shell history",
      args: {
        name: "YEAR",
        description:
          "Year to recap (defaults to last year, or this year in December)",
        isOptional: true,
      },
    },
    {
      name: "trick-or-treat",
      description: "Dig a forgotten command, or a ghost, out of your history",
      hidden: true,
    },
    {
      name: "default-config",
      description: "Print the default atuin configuration (config.toml)",
    },
    {
      name: "config",
      description: "Get, set, or print values in your atuin config file",
      subcommands: [
        {
          name: "get",
          description:
            "Get a configuration value from your config.toml file or after defaults and overrides are applied",
          args: { name: "KEY", description: "The configuration key to get" },
          options: [
            {
              name: ["--resolved", "-r"],
              description:
                "Print the value after defaults and overrides are applied",
            },
            {
              name: ["--verbose", "-v"],
              description:
                "Print both the config file value and the resolved value",
            },
          ],
        },
        {
          name: "set",
          description: "Set a configuration value in your config.toml file",
          args: [
            { name: "KEY", description: "The configuration key to set" },
            { name: "VALUE", description: "The value to set" },
          ],
          options: [
            {
              name: ["--type", "-t"],
              description: "Store value as an explicit type",
              args: {
                name: "TYPE",
                default: "auto",
                suggestions: ["auto", "string", "boolean", "integer", "float"],
              },
            },
            {
              name: "--force",
              description: "Set the key even if Atuin does not recognize it",
            },
          ],
        },
        {
          name: "print",
          description:
            "Print all configuration values from your config.toml file in TOML format",
          args: {
            name: "KEY",
            description:
              "Print the value of a specific key and all its children",
            isOptional: true,
          },
        },
        {
          name: "check",
          description:
            "Check your configuration for settings that Atuin does not recognize",
        },
        {
          name: "types",
          description:
            "Print the Luau types of atuin.lua and .atuin.lua config files, for your editor",
        },
      ],
    },
    {
      name: "workspace",
      description: "Set up the .atuin.lua config file of a project",
      subcommands: [
        {
          name: "init",
          description:
            "Create a .atuin.lua workspace config file in the current directory",
          options: [
            {
              name: "--org",
              description:
                "An organization to share the threads with, by slug. Repeat it to name more than one",
              isRepeatable: true,
              args: { name: "SLUG" },
            },
          ],
        },
      ],
    },
    {
      name: "info",
      description: "Information about Atuin data locations and ENV vars",
    },
    {
      name: "daemon",
      description: "Manage the background daemon",
      options: [
        {
          name: "--show-logs",
          description:
            "Also write daemon logs to the console (useful for debugging)",
        },
      ],
      subcommands: [
        {
          name: "start",
          description: "Start the daemon server",
          options: [
            {
              name: "--show-logs",
              description:
                "Also write daemon logs to the console (useful for debugging)",
            },
            {
              name: "--force",
              description:
                "Force start: kill existing daemon process and reset the socket",
            },
          ],
        },
        {
          name: "status",
          description: "Show the daemon's current status",
        },
        {
          name: "stop",
          description: "Stop the daemon gracefully",
        },
        {
          name: "restart",
          description: "Restart the daemon (stop, then start in background)",
        },
      ],
    },
    {
      name: ["pty-proxy", "hex"],
      description: "PTY proxy for atuin",
      options: [
        {
          name: "--debug-markers",
          description:
            "Highlight `OSC 18188735` escape sequences used to mark the start and end of command output",
        },
        {
          name: "--shell",
          description:
            "Path to the shell binary to spawn (defaults to the login shell); repeat to pass arguments",
          isRepeatable: true,
          args: { name: "PATH", template: "filepaths" },
        },
      ],
      subcommands: [
        {
          name: "init",
          description:
            "Print shell code to initialize atuin pty-proxy on shell startup",
          args: {
            name: "SHELL",
            description: "Shell to generate init for. If omitted, auto-detect",
            isOptional: true,
            suggestions: ["zsh", "bash", "fish", "nu"],
          },
        },
      ],
    },
    {
      name: "uuid",
      description: "Generate a UUID",
      hidden: true,
    },
    {
      name: "contributors",
      description: "List the people who have contributed to Atuin",
    },
    {
      name: "gen-completions",
      description: "Generate shell completions",
      options: [
        {
          name: ["--shell", "-s"],
          description: "Set the shell for generating completions",
          isRequired: true,
          args: {
            name: "SHELL",
            suggestions: [
              "bash",
              "elvish",
              "fish",
              "nushell",
              "powershell",
              "zsh",
            ],
          },
        },
        {
          name: ["--out-dir", "-o"],
          description: "Set the output directory",
          args: {
            name: "OUT_DIR",
            template: "folders",
          },
        },
      ],
    },
  ],
  options: [
    {
      name: ["--help", "-h"],
      description: "Print help",
      isPersistent: true,
    },
    {
      name: ["--version", "-V"],
      description: "Print version",
    },
  ],
};
export default completionSpec;
