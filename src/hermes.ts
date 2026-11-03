// Generated from the argparse tree of NousResearch/hermes-agent v0.22.7 (b200f5bc)
// (hermes_cli/_parser.py, hermes_cli/subcommands/*, kanban/project/portal/send/lsp parsers, pm/cli.py).
const completionSpec: Fig.Spec = {
  name: "hermes",
  description: "Hermes Agent by Nous Research - the self-improving AI agent",
  subcommands: [
    {
      name: "chat",
      description: "Interactive chat with the agent",
      options: [
        {
          name: ["-q", "--query"],
          description: "Query to run",
          args: {
            name: "query",
          },
        },
        {
          name: "--query-file",
          description:
            "Read the single query from a file instead of the command line ('-' reads stdin)",
          args: {
            name: "path",
            template: "filepaths",
          },
        },
        {
          name: "--oneshot",
          description:
            "With -q/--query-file: answer the query and exit (legacy single-query behavior) instead of seeding an interactive session",
        },
        {
          name: "--image",
          description: "Optional local image path to attach to a single query",
          args: {
            name: "image",
            template: "filepaths",
          },
        },
        {
          name: ["-m", "--model"],
          description: "Model to use (e.g., anthropic/claude-sonnet-4)",
          args: {
            name: "model",
          },
        },
        {
          name: ["-t", "--toolsets"],
          description: "Comma-separated toolsets to enable",
          args: {
            name: "toolsets",
          },
        },
        {
          name: "--reasoning",
          description:
            "Reasoning effort for this session: none, minimal, low, medium, high, xhigh, max, or ultra",
          args: {
            name: "level",
            suggestions: [
              "none",
              "minimal",
              "low",
              "medium",
              "high",
              "xhigh",
              "max",
              "ultra",
            ],
          },
        },
        {
          name: ["-s", "--skills"],
          description:
            "Preload one or more skills for the session (repeat flag or comma-separate)",
          args: {
            name: "skills",
          },
          isRepeatable: true,
        },
        {
          name: "--provider",
          description: "Inference provider (default: auto)",
          args: {
            name: "provider",
          },
        },
        {
          name: "--base-url",
          description:
            "OpenAI-compatible endpoint for --provider custom (e.g. http://127.0.0.1:8000/v1)",
          args: {
            name: "url",
          },
        },
        {
          name: "--api-key",
          description: "API key for this launch only; not persisted",
          args: {
            name: "key",
          },
        },
        {
          name: ["-v", "--verbose"],
          description: "Verbose output",
        },
        {
          name: ["-Q", "--quiet"],
          description:
            "Quiet mode for programmatic use: suppress banner, spinner, and tool previews",
        },
        {
          name: "--format",
          description: "Output format for single-query mode (-q)",
          args: {
            name: "output_format",
            suggestions: ["text", "stream-json"],
          },
        },
        {
          name: ["-r", "--resume"],
          description:
            "Resume a previous session by ID (shown on exit), or 'latest' for the most recent session",
          args: {
            name: "session_id",
          },
        },
        {
          name: "--no-restore-cwd",
          description:
            "Don't cd into a resumed session's recorded working directory",
        },
        {
          name: "--in",
          description:
            "Change into DIR before starting or resuming (scopes '--resume latest' / -c lookups to DIR's workspace)",
          args: {
            name: "dir",
            template: "folders",
          },
        },
        {
          name: ["-c", "--continue"],
          description:
            "Resume a session by name, or the most recent if no name given",
          args: {
            name: "session_name",
            isOptional: true,
          },
        },
        {
          name: "--create-if-missing",
          description:
            "With -c/--continue <name>: if no session matches the name, create a new session with that title and proceed",
        },
        {
          name: ["-w", "--worktree"],
          description:
            "Run in an isolated git worktree (for parallel agents on the same repo)",
        },
        {
          name: "--accept-hooks",
          description:
            "Auto-approve any unseen shell hooks declared in config.yaml without a TTY prompt",
        },
        {
          name: "--checkpoints",
          description:
            "Enable filesystem checkpoints before destructive file operations (use /rollback to restore)",
        },
        {
          name: "--max-turns",
          description:
            "Maximum tool-calling iterations per conversation turn (default: 500, or agent.max_turns in config)",
          args: {
            name: "n",
          },
        },
        {
          name: "--run-budget",
          description:
            "Optional wall-clock budget in seconds for each conversation run",
          args: {
            name: "seconds",
          },
        },
        {
          name: "--yolo",
          description:
            "Bypass all dangerous command approval prompts (use at your own risk)",
        },
        {
          name: "--pass-session-id",
          description: "Include the session ID in the agent's system prompt",
        },
        {
          name: "--ignore-user-config",
          description:
            "Ignore ~/.hermes/config.yaml and fall back to built-in defaults (credentials in .env are still loaded)",
        },
        {
          name: "--ignore-rules",
          description:
            "Skip auto-injection of AGENTS.md, SOUL.md, .cursorrules, memory, and preloaded skills",
        },
        {
          name: "--safe-mode",
          description: "Troubleshooting mode: disable ALL customizations",
        },
        {
          name: "--source",
          description: "Session source tag for filtering (default: cli)",
          args: {
            name: "source",
          },
        },
        {
          name: "--tui",
          description: "Launch the modern TUI instead of the classic REPL",
        },
        {
          name: ["--native", "--tui-native"],
          description:
            "Use native terminal scrollback and disable mouse tracking",
        },
        {
          name: "--cli",
          description:
            "Force the classic prompt_toolkit REPL (overrides display.interface=tui)",
        },
        {
          name: "--dev",
          description:
            "With --tui: run TypeScript sources via tsx (skip dist build)",
        },
      ],
    },
    {
      name: "model",
      description: "Select default model and provider",
      options: [
        {
          name: "--refresh",
          description:
            "Wipe the model picker disk cache and re-fetch every provider's live /v1/models list",
        },
        {
          name: "--portal-url",
          description:
            "Portal base URL for Nous login (default: production portal)",
          args: {
            name: "portal_url",
          },
        },
        {
          name: "--inference-url",
          description:
            "Inference API base URL for Nous login (default: production inference API)",
          args: {
            name: "inference_url",
          },
        },
        {
          name: "--client-id",
          description:
            "OAuth client id to use for Nous login (default: hermes-cli)",
          args: {
            name: "client_id",
          },
        },
        {
          name: "--scope",
          description: "OAuth scope to request for Nous login",
          args: {
            name: "scope",
          },
        },
        {
          name: "--no-browser",
          description:
            "Do not attempt to open the browser automatically during Nous login",
        },
        {
          name: "--timeout",
          description:
            "HTTP request timeout in seconds for Nous login (default: 15)",
          args: {
            name: "timeout",
          },
        },
        {
          name: "--ca-bundle",
          description: "Path to CA bundle PEM file for Nous TLS verification",
          args: {
            name: "ca_bundle",
            template: "filepaths",
          },
        },
        {
          name: "--insecure",
          description: "Disable TLS verification for Nous login (testing only)",
        },
      ],
    },
    {
      name: "moa",
      description: "Configure Mixture of Agents provider/model slots",
      subcommands: [
        {
          name: ["list", "ls"],
          description: "Show current MoA model slots",
        },
        {
          name: ["configure", "config"],
          description: "Interactively pick MoA models",
          args: {
            name: "name",
            description: "Preset name to create or update",
            isOptional: true,
          },
        },
        {
          name: ["delete", "rm"],
          description: "Delete a MoA preset",
          args: {
            name: "name",
            description: "Preset name to delete",
          },
        },
      ],
    },
    {
      name: "fallback",
      description:
        "Manage fallback providers (tried when the primary model fails)",
      subcommands: [
        {
          name: ["list", "ls"],
          description:
            "Show the current fallback chain (default when no subcommand)",
        },
        {
          name: "add",
          description:
            "Pick a provider + model (same picker as `hermes model`) and append to the chain",
        },
        {
          name: ["remove", "rm"],
          description: "Pick an entry to delete from the chain",
        },
        {
          name: "clear",
          description: "Remove all fallback entries",
        },
      ],
    },
    {
      name: "worktree",
      description:
        "Audit and reclaim accumulated git worktrees and merged branches",
      subcommands: [
        {
          name: ["list", "ls", "audit"],
          description:
            "Classify every tree: age, size, verdict, reason (default action)",
          options: [
            {
              name: "--repo",
              description: "Repo root (default: current repo)",
              args: {
                name: "repo",
                template: "folders",
              },
            },
            {
              name: "--json",
              description:
                "Machine-readable audit output (trees, external trees, branches)",
            },
            {
              name: "--older-than",
              description: "Treat reapable trees younger than DAYS as keep",
              args: {
                name: "days",
              },
            },
          ],
        },
        {
          name: "prune",
          description:
            "Remove safe trees and delete fully-merged local branches",
          options: [
            {
              name: "--repo",
              description: "Repo root (default: current repo)",
              args: {
                name: "repo",
                template: "folders",
              },
            },
            {
              name: "--json",
              description:
                "Machine-readable result (actions taken/planned, preserved trees)",
            },
            {
              name: "--older-than",
              description:
                "Only reap trees idle for at least DAYS days (safety gates still apply)",
              args: {
                name: "days",
              },
            },
            {
              name: "--dry-run",
              description: "Show the plan without changing anything",
            },
            {
              name: "--trees-only",
              description: "Only remove worktrees; leave local branches alone",
            },
            {
              name: "--branches-only",
              description:
                "Only delete merged local branches; leave worktrees alone",
            },
          ],
        },
        {
          name: "restore",
          description:
            "Recreate an archived worktree (tracked, staged and untracked files)",
          options: [
            {
              name: "--path",
              description: "Restore here instead of the original path",
              args: {
                name: "path",
                template: "folders",
              },
            },
            {
              name: "--repo",
              description: "Repo root (default: current repo)",
              args: {
                name: "repo",
                template: "folders",
              },
            },
          ],
          args: {
            name: "name",
            description:
              "Archive name or tree name (see `hermes worktree list`)",
          },
        },
      ],
    },
    {
      name: "browser",
      description:
        "Real-profile browsing helpers (close a browser locking its profile)",
      subcommands: [
        {
          name: "close-profile",
          description:
            "Close the browser locking your real profile (asks nothing — run only with the user's explicit OK; loses unsaved tabs)",
          options: [
            {
              name: "--browser",
              description:
                "Override detected default browser (chrome/edge/brave/brave-origin/chromium)",
              args: {
                name: "browser",
              },
            },
          ],
        },
      ],
    },
    {
      name: "secrets",
      description: "Manage external secret sources (Bitwarden, 1Password)",
      subcommands: [
        {
          name: ["bitwarden", "bw"],
          description: "Bitwarden Secrets Manager integration",
          subcommands: [
            {
              name: "setup",
              description:
                "Interactive wizard: install bws, store access token, pick project",
              options: [
                {
                  name: "--project-id",
                  description: "Pre-select a project UUID instead of prompting",
                  args: {
                    name: "project_id",
                  },
                },
                {
                  name: "--access-token",
                  description:
                    "Provide the access token non-interactively (will be stored in .env)",
                  args: {
                    name: "access_token",
                  },
                },
                {
                  name: "--server-url",
                  description: "Bitwarden region / self-hosted endpoint",
                  args: {
                    name: "server_url",
                  },
                },
              ],
            },
            {
              name: "status",
              description: "Show config + binary + token validation status",
            },
            {
              name: "token",
              description:
                "Rotate the access token: validate a new one and store it in .env",
              options: [
                {
                  name: "--access-token",
                  description:
                    "Provide the new token non-interactively (default: masked prompt)",
                  args: {
                    name: "access_token",
                  },
                },
                {
                  name: "--no-verify",
                  description:
                    "Store without probing Bitwarden first (not recommended)",
                },
              ],
            },
            {
              name: "sync",
              description: "Fetch secrets now and report what changed",
              options: [
                {
                  name: "--apply",
                  description:
                    "Actually export the secrets into the current shell's env (default: dry-run)",
                },
              ],
            },
            {
              name: "disable",
              description: "Turn off the Bitwarden integration",
            },
            {
              name: "install",
              description: "Install the PM-pinned bws binary",
              options: [
                {
                  name: "--force",
                  description: "Verify and repair the managed copy",
                },
              ],
            },
          ],
        },
        {
          name: ["onepassword", "op", "1password"],
          description: "1Password (op:// references) integration",
          subcommands: [
            {
              name: "setup",
              description:
                "Verify the op CLI, set account / token env var, and enable",
              options: [
                {
                  name: "--account",
                  description:
                    "1Password account shorthand or sign-in address (op --account)",
                  args: {
                    name: "account",
                  },
                },
                {
                  name: "--token-env",
                  description:
                    "Env var holding a service-account token (default OP_SERVICE_ACCOUNT_TOKEN)",
                  args: {
                    name: "token_env",
                  },
                },
                {
                  name: "--token",
                  description:
                    "Service-account token to store in .env non-interactively",
                  args: {
                    name: "token",
                  },
                },
                {
                  name: "--binary-path",
                  description:
                    "Absolute path to the op binary (skips PATH lookup)",
                  args: {
                    name: "binary_path",
                    template: "filepaths",
                  },
                },
              ],
            },
            {
              name: "status",
              description: "Show config + op binary + references",
            },
            {
              name: "token",
              description:
                "Rotate the service-account token: validate and store it in .env",
              options: [
                {
                  name: "--token",
                  description:
                    "Provide the new token non-interactively (default: masked prompt)",
                  args: {
                    name: "token",
                  },
                },
                {
                  name: "--no-verify",
                  description:
                    "Store without probing 1Password first (not recommended)",
                },
              ],
            },
            {
              name: "set",
              description: "Map an env var to an op:// reference",
              args: [
                {
                  name: "env_var",
                  description: "Environment variable name, e.g. OPENAI_API_KEY",
                },
                {
                  name: "reference",
                  description:
                    "1Password reference, e.g. op://Private/OpenAI/api key",
                },
              ],
            },
            {
              name: "remove",
              description: "Remove an env-var → reference mapping",
              args: {
                name: "env_var",
                description: "Environment variable name to unmap",
              },
            },
            {
              name: "sync",
              description: "Resolve references now and report what changed",
              options: [
                {
                  name: "--apply",
                  description:
                    "Actually export resolved values into the current shell (default: dry-run)",
                },
              ],
            },
            {
              name: "disable",
              description: "Turn off the 1Password integration",
            },
          ],
        },
      ],
    },
    {
      name: "egress",
      description: "Manage the iron-proxy egress credential-injection firewall",
      subcommands: [
        {
          name: "install",
          description: "Install the PM-pinned iron-proxy binary",
          options: [
            {
              name: "--force",
              description: "Verify and repair the managed copy",
            },
          ],
        },
        {
          name: "setup",
          description:
            "Interactive wizard: install + CA + mint tokens + write config",
          options: [
            {
              name: "--tunnel-port",
              description: "Override the tunnel port (default 9090)",
              args: {
                name: "tunnel_port",
              },
            },
            {
              name: "--from-bitwarden",
              description:
                "Treat secrets as managed by Bitwarden — discover provider keys from secrets.bitwarden config instead of the current env",
            },
            {
              name: "--no-bitwarden",
              description:
                "Explicitly switch credential_source back to env on re-setup (only meaningful when the previous setup used --from-bitwarden)",
            },
            {
              name: "--rotate-tokens",
              description: "Mint fresh proxy tokens for every provider",
            },
            {
              name: "--restart",
              description:
                "If a daemon is already running, restart it automatically after writing the new config/tokens (non-interactive default on a tty is to ask)",
            },
            {
              name: "--no-restart",
              description:
                "Do not restart a running daemon after setup; you'll need to run `hermes egress restart` yourself for changes to take effect",
            },
          ],
        },
        {
          name: "start",
          description: "Start the managed iron-proxy",
        },
        {
          name: "stop",
          description: "Stop the managed iron-proxy",
        },
        {
          name: "restart",
          description:
            "Restart the managed iron-proxy (stop if running, then start)",
        },
        {
          name: "reload",
          description:
            "Hot-reload the running daemon's ruleset from proxy.yaml (management API — no restart, no dropped connections)",
        },
        {
          name: "status",
          description: "Show proxy state and mappings",
          options: [
            {
              name: "--show-tokens",
              description:
                "Print the proxy tokens (default: redacted prefix only)",
            },
          ],
        },
        {
          name: "disable",
          description: "Turn off the proxy integration",
        },
        {
          name: "config",
          description: "Print the generated proxy.yaml path",
        },
      ],
    },
    {
      name: "migrate",
      description:
        "Move over from another agent, or migrate retired models and deprecated settings",
      subcommands: [
        {
          name: "xai",
          description:
            "Migrate xAI models scheduled for retirement on May 15, 2026",
          options: [
            {
              name: "--apply",
              description:
                "Rewrite config.yaml in-place (default: dry-run, no writes)",
            },
            {
              name: "--no-backup",
              description:
                "Skip the timestamped backup of config.yaml when applying",
            },
          ],
        },
        {
          name: "relay",
          description:
            "Convert legacy HERMES_NEMO_RELAY_ATIF_*/ATOF_* exporter vars into relay-plugins.toml",
          options: [
            {
              name: "--all-profiles",
              description:
                "Migrate the default home and every named profile (what `hermes update` does)",
            },
            {
              name: "--no-validate",
              description:
                "Skip activating the generated file through Relay's validator before writing it",
            },
          ],
        },
        {
          name: "openclaw",
          description: "Import your OpenClaw setup into Hermes",
          options: [
            {
              name: "--source",
              description:
                "Where the agent's setup (or, for Grok Bot, its export file) is",
              args: {
                name: "source",
                template: "filepaths",
              },
            },
            {
              name: "--dry-run",
              description: "Preview only",
            },
            {
              name: "--overwrite",
              description: "Replace existing items on name conflicts",
            },
            {
              name: ["-y", "--yes"],
              description: "Skip the confirmation prompt",
            },
            {
              name: "--migrate-secrets",
              description:
                "Also import OpenClaw's allowlisted API keys and bot tokens",
            },
          ],
        },
        {
          name: "claude-code",
          description: "Import your Claude Code setup into Hermes",
          options: [
            {
              name: "--source",
              description:
                "Where the agent's setup (or, for Grok Bot, its export file) is",
              args: {
                name: "source",
                template: "filepaths",
              },
            },
            {
              name: "--dry-run",
              description: "Preview only",
            },
            {
              name: "--overwrite",
              description: "Replace existing items on name conflicts",
            },
            {
              name: ["-y", "--yes"],
              description: "Skip the confirmation prompt",
            },
          ],
        },
        {
          name: "codex",
          description: "Import your Codex CLI setup into Hermes",
          options: [
            {
              name: "--source",
              description:
                "Where the agent's setup (or, for Grok Bot, its export file) is",
              args: {
                name: "source",
                template: "filepaths",
              },
            },
            {
              name: "--dry-run",
              description: "Preview only",
            },
            {
              name: "--overwrite",
              description: "Replace existing items on name conflicts",
            },
            {
              name: ["-y", "--yes"],
              description: "Skip the confirmation prompt",
            },
          ],
        },
        {
          name: "cursor",
          description: "Import your Cursor setup into Hermes",
          options: [
            {
              name: "--source",
              description:
                "Where the agent's setup (or, for Grok Bot, its export file) is",
              args: {
                name: "source",
                template: "filepaths",
              },
            },
            {
              name: "--dry-run",
              description: "Preview only",
            },
            {
              name: "--overwrite",
              description: "Replace existing items on name conflicts",
            },
            {
              name: ["-y", "--yes"],
              description: "Skip the confirmation prompt",
            },
          ],
        },
        {
          name: "grok-bot",
          description: "Import your Grok Bot setup into Hermes",
          options: [
            {
              name: "--source",
              description:
                "Where the agent's setup (or, for Grok Bot, its export file) is",
              args: {
                name: "source",
                template: "filepaths",
              },
            },
            {
              name: "--dry-run",
              description: "Preview only",
            },
            {
              name: "--overwrite",
              description: "Replace existing items on name conflicts",
            },
            {
              name: ["-y", "--yes"],
              description: "Skip the confirmation prompt",
            },
            {
              name: "--activate-routines",
              description:
                "Create the imported cron jobs running instead of paused",
            },
            {
              name: "--bot",
              description: "Only this Bot or agent, by name (repeatable)",
              args: {
                name: "name",
              },
              isRepeatable: true,
            },
          ],
        },
        {
          name: "openbot",
          description: "Import your OpenBot setup into Hermes",
          options: [
            {
              name: "--source",
              description:
                "Where the agent's setup (or, for Grok Bot, its export file) is",
              args: {
                name: "source",
                template: "filepaths",
              },
            },
            {
              name: "--dry-run",
              description: "Preview only",
            },
            {
              name: "--overwrite",
              description: "Replace existing items on name conflicts",
            },
            {
              name: ["-y", "--yes"],
              description: "Skip the confirmation prompt",
            },
            {
              name: "--activate-routines",
              description:
                "Create the imported cron jobs running instead of paused",
            },
            {
              name: "--bot",
              description: "Only this Bot or agent, by name (repeatable)",
              args: {
                name: "name",
              },
              isRepeatable: true,
            },
          ],
        },
      ],
    },
    {
      name: "codex-runtime",
      description:
        "Manage the optional codex app-server runtime (migrate MCP config)",
      subcommands: [
        {
          name: "migrate",
          description:
            "Regenerate the hermes-managed block in codex's config.toml",
          options: [
            {
              name: "--dry-run",
              description:
                "Report what would be written without touching config.toml",
            },
            {
              name: "--json",
              description:
                "Print the migration report as JSON (for automation)",
            },
          ],
        },
      ],
    },
    {
      name: "gateway",
      description: "Messaging gateway management",
      subcommands: [
        {
          name: "run",
          description:
            "Run gateway in foreground (recommended for WSL and Docker)",
          options: [
            {
              name: ["-v", "--verbose"],
              description: "Increase stderr log verbosity (-v=INFO, -vv=DEBUG)",
              isRepeatable: true,
            },
            {
              name: ["-q", "--quiet"],
              description: "Suppress all stderr log output",
            },
            {
              name: "--replace",
              description:
                "Replace any existing gateway instance (useful for systemd)",
            },
            {
              name: "--force",
              description:
                "Start a foreground gateway even when a systemd/launchd/s6 service already supervises this profile",
            },
            {
              name: "--no-supervise",
              description:
                "Inside the s6-overlay Docker image, normally `gateway run` is automatically redirected to the supervised s6 service",
            },
            {
              name: "--external-supervisor",
              description:
                "Declare that an external process manager owns this foreground gateway",
            },
            {
              name: "--accept-hooks",
              description:
                "Auto-approve unseen shell hooks without a TTY prompt (equivalent to HERMES_ACCEPT_HOOKS=1 / hooks_auto_accept: true)",
            },
          ],
        },
        {
          name: "ensure",
          description:
            "Ensure a local runtime without installing or replacing a service",
          options: [
            {
              name: "--json",
              description: "Emit one credential-free JSON result (default)",
            },
            {
              name: "--timeout",
              description: "Total startup deadline in seconds (default: 60)",
              args: {
                name: "timeout",
              },
            },
          ],
        },
        {
          name: "start",
          description: "Start the installed systemd/launchd background service",
          options: [
            {
              name: "--system",
              description: "Target the Linux system-level gateway service",
            },
            {
              name: "--all",
              description:
                "Kill ALL stale gateway processes across all profiles before starting",
            },
            {
              name: "--force",
              description:
                "Start a separate gateway for this profile even when the default multiplexer already serves it",
            },
          ],
        },
        {
          name: "stop",
          description: "Stop gateway service",
          options: [
            {
              name: "--system",
              description: "Target the Linux system-level gateway service",
            },
            {
              name: "--all",
              description: "Stop ALL gateway processes across all profiles",
            },
            {
              name: ["-y", "--yes", "--interrupt"],
              description:
                "Stop without asking even while sessions are live (turns, cron jobs, background delegations): they are interrupted",
            },
          ],
        },
        {
          name: "restart",
          description: "Restart gateway service",
          options: [
            {
              name: "--system",
              description: "Target the Linux system-level gateway service",
            },
            {
              name: "--all",
              description:
                "Kill ALL gateway processes across all profiles before restarting",
            },
            {
              name: "--force",
              description:
                "Start a separate gateway for this profile even when the default multiplexer already serves it",
            },
            {
              name: ["-y", "--yes", "--interrupt"],
              description:
                "Restart without asking even while sessions are live (turns, cron jobs, background delegations): they are interrupted",
            },
            {
              name: "--detach",
              description:
                "Without an installed service, start the replacement in the background (as `gateway ensure` does) instead of in this terminal",
            },
          ],
        },
        {
          name: "status",
          description: "Show gateway status",
          options: [
            {
              name: "--deep",
              description: "Deep status check",
            },
            {
              name: ["-l", "--full"],
              description:
                "Show full, untruncated service/log output where supported",
            },
            {
              name: "--system",
              description: "Target the Linux system-level gateway service",
            },
          ],
        },
        {
          name: "install",
          description:
            "Install gateway as a systemd/launchd background service",
          options: [
            {
              name: "--force",
              description:
                "Force reinstall, and install even when the default multiplexer already serves this profile",
            },
            {
              name: "--system",
              description:
                "Install as a Linux system-level service (starts at boot)",
            },
            {
              name: "--run-as-user",
              description:
                "User account the Linux system service should run as",
              args: {
                name: "run_as_user",
              },
            },
            {
              name: "--start-now",
              description:
                "Start the gateway service immediately after installing",
            },
            {
              name: "--no-start-now",
              description: "Do not start the gateway service after installing",
            },
            {
              name: "--start-on-login",
              description:
                "Enable the service to start automatically on login/boot",
            },
            {
              name: "--no-start-on-login",
              description: "Do not enable the service to start on login/boot",
            },
            {
              name: "--if-missing",
              description:
                "Do nothing when a gateway service is already installed",
            },
            {
              name: "--force-unit-path",
              description:
                "Repoint a service definition that pins another HERMES_HOME at this one",
            },
          ],
        },
        {
          name: "uninstall",
          description: "Uninstall gateway service",
          options: [
            {
              name: "--system",
              description: "Target the Linux system-level gateway service",
            },
          ],
        },
        {
          name: "list",
          description: "List all profiles and their gateway status",
        },
        {
          name: "setup",
          description: "Configure messaging platforms",
        },
        {
          name: "migrate-legacy",
          description:
            "Remove legacy hermes.service units from pre-rename installs",
          options: [
            {
              name: "--dry-run",
              description: "List what would be removed without doing it",
            },
            {
              name: ["-y", "--yes"],
              description: "Skip the confirmation prompt",
            },
          ],
        },
        {
          name: "migrate",
          description:
            "Converge every per-profile gateway onto the ONE host gateway",
          options: [
            {
              name: "--multiplex",
              description: "Converge onto the one host gateway (default)",
            },
            {
              name: "--dry-run",
              description:
                "Print the plan and blockers without changing anything",
            },
            {
              name: ["-y", "--yes"],
              description: "Apply without confirmation",
            },
          ],
        },
        {
          name: "enroll",
          description:
            "Enroll this gateway with a relay connector (writes relay auth creds to .env)",
          options: [
            {
              name: "--token",
              description:
                "The single-use enrollment token from the connector (delivered with your gateway config)",
              args: {
                name: "token",
              },
            },
            {
              name: "--connector-url",
              description:
                "The connector base/relay URL, e.g. wss://connector.example.com/relay or https://connector.example.com",
              args: {
                name: "connector_url",
              },
            },
            {
              name: "--gateway-id",
              description:
                "A stable id for this gateway instance (kill-switch granularity)",
              args: {
                name: "gateway_id",
              },
            },
            {
              name: "--wake-url",
              description:
                "Phase 5 §5.2 wake URL: a reachable URL the connector pokes to wake this gateway when buffered work arrives while it's idle/suspended, so it reconnects and drains",
              args: {
                name: "wake_url",
              },
            },
          ],
        },
      ],
      options: [
        {
          name: "--accept-hooks",
          description:
            "Auto-approve unseen shell hooks without a TTY prompt (equivalent to HERMES_ACCEPT_HOOKS=1 / hooks_auto_accept: true)",
        },
      ],
    },
    {
      name: "proxy",
      description: "Local OpenAI-compatible proxy to OAuth providers",
      subcommands: [
        {
          name: "start",
          description: "Run the proxy in the foreground",
          options: [
            {
              name: "--provider",
              description: "Upstream provider: nous or xai (default: nous)",
              args: {
                name: "provider",
                suggestions: ["nous", "xai"],
              },
            },
            {
              name: "--host",
              description: "Bind address (default: 127.0.0.1)",
              args: {
                name: "host",
              },
            },
            {
              name: "--port",
              description: "Bind port (default: 8645)",
              args: {
                name: "port",
              },
            },
          ],
        },
        {
          name: "status",
          description: "Show which proxy upstreams are ready",
        },
        {
          name: "providers",
          description: "List available proxy upstream providers",
        },
      ],
    },
    {
      name: "lsp",
      description: "Language Server Protocol management",
      subcommands: [
        {
          name: "status",
          description: "Show LSP service status",
          options: [
            {
              name: "--json",
              description: "Emit machine-readable JSON",
            },
          ],
        },
        {
          name: "list",
          description: "List supported language servers",
          options: [
            {
              name: "--installed-only",
              description:
                "Only show servers whose binary is currently available",
            },
          ],
        },
        {
          name: "install",
          description: "Install a server binary",
          args: {
            name: "server",
            description: "Server id (e.g. pyright, gopls)",
          },
        },
        {
          name: "install-all",
          description: "Install every server with a known auto-install recipe",
          options: [
            {
              name: "--include-manual",
              description:
                "Even attempt servers marked manual-install (best effort)",
            },
          ],
        },
        {
          name: "restart",
          description: "Tear down running LSP clients (next edit re-spawns)",
        },
        {
          name: "which",
          description: "Print binary path for a server",
          args: {
            name: "server",
            description: "Server id",
          },
        },
      ],
    },
    {
      name: "setup",
      description: "Interactive setup wizard",
      options: [
        {
          name: "--non-interactive",
          description: "Non-interactive mode (use defaults/env vars)",
        },
        {
          name: "--reset",
          description: "Reset configuration to defaults",
        },
        {
          name: "--reconfigure",
          description:
            "(Default on existing installs.) Re-run the full wizard, showing current values as defaults",
        },
        {
          name: "--quick",
          description:
            "On existing installs: only prompt for items that are missing or unset, instead of running the full reconfigure wizard",
        },
        {
          name: "--portal",
          description:
            "One-shot Nous Portal setup: log in via OAuth, pick a Nous model, set Nous as the inference provider, and opt into the Tool Gateway",
        },
      ],
      args: {
        name: "section",
        description: "Run a specific setup section instead of the full wizard",
        isOptional: true,
        suggestions: [
          "model",
          "tts",
          "terminal",
          "gateway",
          "tools",
          "telemetry",
          "agent",
        ],
      },
    },
    {
      name: "whatsapp",
      description: "Set up WhatsApp integration",
    },
    {
      name: "whatsapp-cloud",
      description: "Set up WhatsApp Business Cloud API integration",
    },
    {
      name: "slack",
      description: "Slack integration helpers (manifest generation, etc.)",
      subcommands: [
        {
          name: "manifest",
          description:
            "Print or write a Slack app manifest with every gateway command registered as a native slash (/btw, /stop, /model, ...)",
          options: [
            {
              name: "--write",
              description: "Write manifest to a file instead of stdout",
              args: {
                name: "path",
                isOptional: true,
                template: "filepaths",
              },
            },
            {
              name: "--name",
              description: 'Bot display name (default: "Hermes")',
              args: {
                name: "name",
              },
            },
            {
              name: "--description",
              description: "Bot description shown in Slack's app directory",
              args: {
                name: "description",
              },
            },
            {
              name: "--long-description",
              description:
                "Set Slack's long app description (175-4,000 characters)",
              args: {
                name: "text",
              },
            },
            {
              name: "--long-description-file",
              description:
                "Read Slack's long app description from a UTF-8 text file (175-4,000 characters)",
              args: {
                name: "path",
                template: "filepaths",
              },
            },
            {
              name: "--slashes-only",
              description:
                "Emit only the features.slash_commands array (for merging into an existing manifest manually)",
            },
            {
              name: "--no-assistant",
              description:
                "Omit Slack AI Assistant mode (assistant_view, assistant:write scope, assistant_thread_* events)",
            },
            {
              name: "--agent-view",
              description:
                "Emit Slack's Agent messaging experience (agent_view, app_home_opened + message.im) instead of the legacy assistant_view experience",
            },
          ],
        },
      ],
    },
    {
      name: "send",
      description:
        "Send a message to a configured platform (scripts, cron jobs, CI)",
      options: [
        {
          name: ["-t", "--to"],
          description: "Delivery target",
          args: {
            name: "target",
          },
        },
        {
          name: ["-f", "--file"],
          description: "Read message body from PATH (text only)",
          args: {
            name: "path",
            template: "filepaths",
          },
        },
        {
          name: ["-s", "--subject"],
          description: "Prepend a subject/header line before the message body",
          args: {
            name: "line",
          },
        },
        {
          name: "--mention",
          description: "WhatsApp only: add a native participant mention",
          args: {
            name: "phone_or_jid",
          },
          isRepeatable: true,
        },
        {
          name: ["-l", "--list"],
          description: "List available targets",
        },
        {
          name: ["-q", "--quiet"],
          description: "Suppress stdout on success (exit code only)",
        },
        {
          name: "--json",
          description: "Emit raw JSON result instead of human-readable output",
        },
      ],
      args: {
        name: "message",
        description: "Message text",
        isOptional: true,
      },
    },
    {
      name: "logout",
      description: "Clear authentication for an inference provider",
      options: [
        {
          name: "--provider",
          description: "Provider to log out from (default: active provider)",
          args: {
            name: "provider",
            suggestions: ["nous", "openai-codex", "xai-oauth"],
          },
        },
      ],
    },
    {
      name: "auth",
      description: "Manage pooled provider credentials",
      subcommands: [
        {
          name: "add",
          description: "Add a pooled credential",
          options: [
            {
              name: "--type",
              description: "Credential type to add",
              args: {
                name: "auth_type",
                suggestions: ["oauth", "api-key", "api_key"],
              },
            },
            {
              name: "--label",
              description: "Optional display label",
              args: {
                name: "label",
              },
            },
            {
              name: "--priority",
              description:
                "Place the new credential at this priority (0 = tried first under fill_first); appends last when omitted",
              args: {
                name: "priority",
              },
            },
            {
              name: "--api-key",
              description: "API key value (otherwise prompted securely)",
              args: {
                name: "api_key",
              },
            },
            {
              name: "--portal-url",
              description: "Nous portal base URL",
              args: {
                name: "portal_url",
              },
            },
            {
              name: "--inference-url",
              description: "Nous inference base URL",
              args: {
                name: "inference_url",
              },
            },
            {
              name: "--client-id",
              description: "OAuth client id",
              args: {
                name: "client_id",
              },
            },
            {
              name: "--scope",
              description: "OAuth scope override",
              args: {
                name: "scope",
              },
            },
            {
              name: "--no-browser",
              description: "Do not auto-open a browser for OAuth login",
            },
            {
              name: "--browser",
              description:
                "Openai-codex only: sign in with the browser authorization-code flow on http://localhost:1455/auth/callback instead of the default device-code flow",
            },
            {
              name: "--timeout",
              description: "OAuth/network timeout in seconds",
              args: {
                name: "timeout",
              },
            },
            {
              name: "--insecure",
              description: "Disable TLS verification for OAuth login",
            },
            {
              name: "--ca-bundle",
              description: "Custom CA bundle for OAuth login",
              args: {
                name: "ca_bundle",
                template: "filepaths",
              },
            },
          ],
          args: {
            name: "provider",
            description:
              "Provider id (for example: anthropic, openai-codex, openrouter)",
          },
        },
        {
          name: "list",
          description: "List pooled credentials",
          args: {
            name: "provider",
            description: "Optional provider filter",
            isOptional: true,
          },
        },
        {
          name: "remove",
          description: "Remove a pooled credential by index, id, or label",
          args: [
            {
              name: "provider",
              description: "Provider id",
            },
            {
              name: "target",
              description: "Credential index, entry id, or exact label",
            },
          ],
        },
        {
          name: "reset",
          description:
            "Clear exhaustion status for a provider's credentials (all, or one target)",
          args: [
            {
              name: "provider",
              description: "Provider id",
            },
            {
              name: "target",
              description:
                "Optional credential index, entry id, or exact label; clears every credential when omitted",
              isOptional: true,
            },
          ],
        },
        {
          name: "priority",
          description:
            "Move a pooled credential to a priority (0 = tried first under fill_first)",
          args: [
            {
              name: "provider",
              description: "Provider id",
            },
            {
              name: "target",
              description: "Credential index, entry id, or exact label",
            },
            {
              name: "priority",
              description: "New priority; others are renumbered",
            },
          ],
        },
        {
          name: "refresh",
          description:
            "Refresh a pooled OAuth credential's tokens and clear its cooldown",
          args: [
            {
              name: "provider",
              description: "Provider id",
            },
            {
              name: "target",
              description:
                "Credential index, entry id, or exact label (required when the pool holds more than one)",
              isOptional: true,
            },
          ],
        },
        {
          name: "status",
          description: "Show auth status for a provider",
          args: {
            name: "provider",
            description: "Provider id",
          },
        },
        {
          name: "logout",
          description: "Log out a provider and clear stored auth state",
          args: {
            name: "provider",
            description: "Provider id",
          },
        },
        {
          name: "upgrade",
          description: "Sign in with a Nous account, keeping your connectors",
          options: [
            {
              name: "--no-browser",
              description: "Do not auto-open a browser for sign-in",
            },
            {
              name: "--timeout",
              description: "Network timeout in seconds",
              args: {
                name: "timeout",
              },
            },
          ],
        },
      ],
    },
    {
      name: "status",
      description: "Show status of all components",
      options: [
        {
          name: ["--full", "--all"],
          description:
            "Show every section (keys redacted) instead of the one-screen summary",
        },
        {
          name: "--deep",
          description: "Run deep checks (implies --full; may take longer)",
        },
      ],
    },
    {
      name: "pause",
      description:
        "Emergency stop: pause cron/kanban dispatch and new gateway turns",
      options: [
        {
          name: "--reason",
          description:
            "Optional reason stored in the sentinel and shown to users",
          args: {
            name: "reason",
          },
        },
      ],
    },
    {
      name: "resume",
      description: "Lift the emergency stop set by `hermes pause`",
    },
    {
      name: "cron",
      description: "Cron job management",
      subcommands: [
        {
          name: "list",
          description: "List scheduled jobs",
          options: [
            {
              name: "--all",
              description: "Include disabled and completed jobs",
            },
          ],
        },
        {
          name: ["create", "add"],
          description: "Create a scheduled job",
          options: [
            {
              name: "--name",
              description: "Optional human-friendly job name",
              args: {
                name: "name",
              },
            },
            {
              name: "--deliver",
              description:
                "Delivery target: origin, local, telegram, discord, signal, platform:chat_id, or bot-chat[:profile], or room:<room_id>[@profile]",
              args: {
                name: "deliver",
              },
            },
            {
              name: "--failure-deliver",
              description:
                "Override target for FAILURE notices only (same grammar as --deliver)",
              args: {
                name: "failure_deliver",
              },
            },
            {
              name: "--repeat",
              description: "Optional repeat count",
              args: {
                name: "repeat",
              },
            },
            {
              name: "--catch-up",
              description:
                "Runs missed while the machine was off: 'on' runs once on return, 'off' skips them (each is booked as a 'missed' row in `hermes cron runs`)",
              args: {
                name: "catch_up",
                suggestions: ["on", "off"],
              },
            },
            {
              name: "--skill",
              description: "Attach a skill",
              args: {
                name: "skills",
              },
              isRepeatable: true,
            },
            {
              name: "--script",
              description: "Path to a script under ~/.hermes/scripts/",
              args: {
                name: "script",
                template: "filepaths",
              },
            },
            {
              name: "--no-agent",
              description:
                "Skip the LLM entirely — run --script on schedule and deliver its stdout directly",
            },
            {
              name: "--monitor-script",
              description:
                "Monitor mode: path to a cheap source script under ~/.hermes/scripts/ that runs each tick BEFORE the agent",
              args: {
                name: "monitor_script",
                template: "filepaths",
              },
            },
            {
              name: "--monitor-url",
              description:
                "Monitor mode: http(s) URL fetched with a bounded GET each tick instead of a script",
              args: {
                name: "monitor_url",
              },
            },
            {
              name: "--workdir",
              description: "Absolute path for the job to run from",
              args: {
                name: "workdir",
                template: "folders",
              },
            },
            {
              name: "--model",
              description:
                "Pin this job to a specific inference model (user-owned; the agent's cronjob tool cannot set this)",
              args: {
                name: "model",
              },
            },
            {
              name: "--pin",
              description:
                "Lock the CURRENT main agent model (and its provider) onto this job so later `hermes model` changes never touch it",
            },
            {
              name: "--provider",
              description:
                "Inference provider paired with --model (e.g. 'openrouter', 'nous')",
              args: {
                name: "model_provider",
              },
            },
            {
              name: "--reasoning-effort",
              description:
                "Pin this job's reasoning (thinking) effort: none, minimal, low, medium, high, xhigh, max, or ultra",
              args: {
                name: "reasoning_effort",
                suggestions: [
                  "none",
                  "minimal",
                  "low",
                  "medium",
                  "high",
                  "xhigh",
                  "max",
                  "ultra",
                ],
              },
            },
            {
              name: "--interpreter",
              description:
                "Absolute or ~ path to a Python in your own venv for a .py --script / --monitor-script, so it can import packages Hermes does not ship. .sh/.bash still run under bash",
              args: {
                name: "interpreter",
                template: "filepaths",
              },
            },
            {
              name: "--timezone",
              description:
                "IANA zone for this job's schedule, so the cron expression is read as THAT zone's wall clock whatever the profile's timezone is",
              args: {
                name: "timezone",
              },
            },
            {
              name: "--grace-minutes",
              description:
                "Catch-up window override in minutes (0-1440) for a cron schedule",
              args: {
                name: "grace_minutes",
              },
            },
            {
              name: "--continuity",
              description:
                "Each run wakes up with the job's own previous output injected into its prompt, so it can dedupe against what was already reported and continue where the last run left off",
            },
            {
              name: "--paused",
              description:
                "Create disabled in one write; resume to schedule, or explicitly run now",
            },
            {
              name: "--paused-reason",
              description: "Auditable reason; requires --paused",
              args: {
                name: "paused_reason",
              },
            },
          ],
          args: [
            {
              name: "schedule",
              description: "Schedule like '30m', 'every 2h', or '0 9 * * *'",
            },
            {
              name: "prompt",
              description: "Optional self-contained prompt or task instruction",
              isOptional: true,
            },
          ],
        },
        {
          name: "edit",
          description: "Edit an existing scheduled job",
          options: [
            {
              name: "--schedule",
              description: "New schedule",
              args: {
                name: "schedule",
              },
            },
            {
              name: "--prompt",
              description: "New prompt/task instruction",
              args: {
                name: "prompt",
              },
            },
            {
              name: "--name",
              description: "New job name",
              args: {
                name: "name",
              },
            },
            {
              name: "--deliver",
              description: "New delivery target",
              args: {
                name: "deliver",
              },
            },
            {
              name: "--failure-deliver",
              description:
                "Override target for failure notices (same grammar as --deliver; 'local' suppresses; '' clears the override)",
              args: {
                name: "failure_deliver",
              },
            },
            {
              name: "--repeat",
              description: "New repeat count",
              args: {
                name: "repeat",
              },
            },
            {
              name: "--catch-up",
              description:
                "Runs missed while the machine was off: 'on' runs once on return, 'off' skips them (each is booked as a 'missed' row in `hermes cron runs`)",
              args: {
                name: "catch_up",
                suggestions: ["on", "off"],
              },
            },
            {
              name: "--skill",
              description: "Replace the job's skills with this set",
              args: {
                name: "skills",
              },
              isRepeatable: true,
            },
            {
              name: "--add-skill",
              description: "Append a skill without replacing the existing list",
              args: {
                name: "add_skills",
              },
              isRepeatable: true,
            },
            {
              name: "--remove-skill",
              description: "Remove a specific attached skill",
              args: {
                name: "remove_skills",
              },
              isRepeatable: true,
            },
            {
              name: "--clear-skills",
              description: "Remove all attached skills from the job",
            },
            {
              name: "--script",
              description: "Path to a script under ~/.hermes/scripts/",
              args: {
                name: "script",
                template: "filepaths",
              },
            },
            {
              name: "--no-agent",
              description:
                "Enable no-agent mode on this job (requires --script or an existing script on the job)",
            },
            {
              name: "--agent",
              description:
                "Disable no-agent mode on this job (reverts to LLM-driven execution)",
            },
            {
              name: "--continuity",
              description:
                "Turn on run-to-run continuity: each run sees the job's own previous output (dedupe, continue where it left off)",
            },
            {
              name: "--no-continuity",
              description:
                "Turn off run-to-run continuity (other context_from job refs are preserved)",
            },
            {
              name: "--monitor-script",
              description:
                "Set/replace the monitor source script (see `hermes cron create --monitor-script`)",
              args: {
                name: "monitor_script",
                template: "filepaths",
              },
            },
            {
              name: "--monitor-url",
              description: "Set/replace the monitor source URL",
              args: {
                name: "monitor_url",
              },
            },
            {
              name: "--workdir",
              description:
                "Absolute path for the job to run from (injects AGENTS.md etc. and sets terminal cwd)",
              args: {
                name: "workdir",
                template: "folders",
              },
            },
            {
              name: "--model",
              description:
                "Pin this job to a specific inference model (user-owned; the agent's cronjob tool cannot set this)",
              args: {
                name: "model",
              },
            },
            {
              name: "--pin",
              description:
                "Lock the CURRENT main agent model (and its provider) onto this job",
            },
            {
              name: "--unpin",
              description:
                "Release the job's model pin so it follows the main agent model again",
            },
            {
              name: "--provider",
              description: "Inference provider paired with --model",
              args: {
                name: "model_provider",
              },
            },
            {
              name: "--reasoning-effort",
              description:
                "Pin this job's reasoning (thinking) effort: none, minimal, low, medium, high, xhigh, max, or ultra",
              args: {
                name: "reasoning_effort",
                suggestions: [
                  "none",
                  "minimal",
                  "low",
                  "medium",
                  "high",
                  "xhigh",
                  "max",
                  "ultra",
                ],
              },
            },
            {
              name: "--interpreter",
              description:
                "Absolute or ~ path to a Python for a .py script / monitor script",
              args: {
                name: "interpreter",
                template: "filepaths",
              },
            },
            {
              name: "--timezone",
              description: "IANA zone for this job's schedule",
              args: {
                name: "timezone",
              },
            },
            {
              name: "--grace-minutes",
              description:
                "Catch-up window override in minutes (0-1440). 0 = never catch up",
              args: {
                name: "grace_minutes",
              },
            },
          ],
          args: {
            name: "job_id",
            description: "Job ID to edit",
          },
        },
        {
          name: "pause",
          description: "Pause a scheduled job",
          args: {
            name: "job_id",
            description: "Job ID to pause",
          },
        },
        {
          name: "resume",
          description: "Resume a paused job",
          options: [
            {
              name: "--at",
              description: "Re-arm at an ISO-8601 time",
              args: {
                name: "run_at",
              },
            },
            {
              name: "--run-now",
              description: "Re-arm to run now",
            },
          ],
          args: {
            name: "job_id",
            description: "Job ID to resume",
          },
        },
        {
          name: "run",
          description: "Run a job on the next scheduler tick",
          options: [
            {
              name: "--accept-hooks",
              description:
                "Auto-approve unseen shell hooks without a TTY prompt (equivalent to HERMES_ACCEPT_HOOKS=1 / hooks_auto_accept: true)",
            },
          ],
          args: {
            name: "job_id",
            description: "Job ID to trigger",
          },
        },
        {
          name: "cancel",
          description: "Stop a job's live run (its schedule is untouched)",
          options: [
            {
              name: "--reason",
              description: "Optional note recorded with the cancelled run",
              args: {
                name: "reason",
              },
            },
          ],
          args: {
            name: "job_id",
            description: "Job ID whose in-flight run to stop",
          },
        },
        {
          name: ["remove", "rm", "delete"],
          description: "Remove a scheduled job",
          args: {
            name: "job_id",
            description: "Job ID to remove",
          },
        },
        {
          name: "status",
          description: "Check if cron scheduler is running",
        },
        {
          name: ["runs", "history"],
          description: "Show durable execution attempts",
          options: [
            {
              name: "--limit",
              description: "Rows to show (1-500)",
              args: {
                name: "limit",
              },
            },
          ],
          args: {
            name: "job_id",
            description: "Optional job ID filter",
            isOptional: true,
          },
        },
        {
          name: "incidents",
          description: "List or acknowledge durable cron failure incidents",
          options: [
            {
              name: "--state",
              description: "Filter incidents by lifecycle state",
              args: {
                name: "state",
                suggestions: ["detected", "alerted", "resolved", "closed"],
              },
            },
          ],
          args: [
            {
              name: "incident_action",
              description: "Action (default: list)",
              isOptional: true,
              suggestions: ["list", "ack"],
            },
            {
              name: "incident_id",
              description: "Incident ID to acknowledge (ack)",
              isOptional: true,
            },
          ],
        },
        {
          name: "notepad",
          description:
            "Read/write a job's durable notepad (persistent KV across runs)",
          args: [
            {
              name: "job_id",
              description: "Job ID the notepad belongs to",
            },
            {
              name: "notepad_action",
              description: "Action (default: list)",
              isOptional: true,
              suggestions: ["get", "set", "delete", "list"],
            },
            {
              name: "key",
              description: "Notepad key (get/set/delete)",
              isOptional: true,
            },
            {
              name: "value",
              description: "Value to store (set)",
              isOptional: true,
            },
          ],
        },
        {
          name: "doctor",
          description: "Check scheduled jobs for common health issues",
        },
        {
          name: "tick",
          description: "Run due jobs once and exit",
          options: [
            {
              name: "--accept-hooks",
              description:
                "Auto-approve unseen shell hooks without a TTY prompt (equivalent to HERMES_ACCEPT_HOOKS=1 / hooks_auto_accept: true)",
            },
          ],
        },
      ],
      options: [
        {
          name: "--accept-hooks",
          description:
            "Auto-approve unseen shell hooks without a TTY prompt (equivalent to HERMES_ACCEPT_HOOKS=1 / hooks_auto_accept: true)",
        },
      ],
    },
    {
      name: "webhook",
      description: "Manage dynamic webhook subscriptions",
      subcommands: [
        {
          name: ["subscribe", "add"],
          description: "Create a webhook subscription",
          options: [
            {
              name: "--prompt",
              description: "Prompt template with {dot.notation} payload refs",
              args: {
                name: "prompt",
              },
            },
            {
              name: "--events",
              description: "Comma-separated event types to accept",
              args: {
                name: "events",
              },
            },
            {
              name: "--description",
              description: "What this subscription does",
              args: {
                name: "description",
              },
            },
            {
              name: "--skills",
              description: "Comma-separated skill names to load",
              args: {
                name: "skills",
              },
            },
            {
              name: "--deliver",
              description:
                "Delivery target: log, telegram, discord, slack, etc",
              args: {
                name: "deliver",
              },
            },
            {
              name: "--deliver-chat-id",
              description: "Target chat ID for cross-platform delivery",
              args: {
                name: "deliver_chat_id",
              },
            },
            {
              name: "--secret",
              description: "HMAC secret (auto-generated if omitted)",
              args: {
                name: "secret",
              },
            },
            {
              name: "--route-profile",
              description:
                "Bind the route to a multiplexed profile: only POSTs to /p/PROFILE/webhooks/<name> are accepted and the agent runs as that profile",
              args: {
                name: "profile",
              },
            },
            {
              name: "--deliver-only",
              description:
                "Skip the agent — deliver the rendered prompt directly as the message",
            },
            {
              name: "--mirror-to-session",
              description:
                "Also write each delivered message into the target chat's session, so replying to it in that chat has context",
            },
            {
              name: "--script",
              description: "Filter/transform script under ~/.hermes/scripts/",
              args: {
                name: "script",
                template: "filepaths",
              },
            },
            {
              name: "--cron-job",
              description:
                "Fire an existing cron job (by ID or name) when this route receives an event, instead of starting a fresh agent run",
              args: {
                name: "cron_job",
              },
            },
          ],
          args: {
            name: "name",
            description: "Route name (used in URL: /webhooks/<name>)",
          },
        },
        {
          name: ["list", "ls"],
          description: "List all dynamic subscriptions",
        },
        {
          name: ["remove", "rm"],
          description: "Remove a subscription",
          args: {
            name: "name",
            description: "Subscription name to remove",
          },
        },
        {
          name: "test",
          description: "Send a test POST to a webhook route",
          options: [
            {
              name: "--payload",
              description: "JSON payload to send (default: test payload)",
              args: {
                name: "payload",
              },
            },
          ],
          args: {
            name: "name",
            description: "Subscription name to test",
          },
        },
      ],
    },
    {
      name: "peer",
      description: "Bot-to-bot DMs across machines (peer Hermes gateways)",
      subcommands: [
        {
          name: ["add", "set"],
          description: "Register (or update) a peer gateway",
          options: [
            {
              name: "--url",
              description: "Peer gateway base URL, e.g. http://spark.lan:8377",
              args: {
                name: "url",
              },
              isRequired: true,
            },
            {
              name: "--key",
              description:
                "The peer's API_SERVER_KEY (stored in ~/.hermes/.env)",
              args: {
                name: "key",
              },
            },
            {
              name: "--note",
              description: "Optional description",
              args: {
                name: "note",
              },
            },
          ],
          args: {
            name: "name",
            description: "Peer name (lowercase slug, e.g. spark, homelab)",
          },
        },
        {
          name: ["list", "ls"],
          description: "List registered peers",
        },
        {
          name: ["remove", "rm"],
          description: "Remove a peer",
          args: {
            name: "name",
            description: "Peer name",
          },
        },
        {
          name: "dm",
          description: "Message an agent on a peer gateway and print its reply",
          options: [
            {
              name: "--json",
              description: "Emit a JSON result",
            },
          ],
          args: [
            {
              name: "target",
              description:
                "<peer> or <peer>/<agent> (named profile on a multiplexed peer)",
            },
            {
              name: "message",
              description: "Message text (or stdin)",
              isOptional: true,
            },
          ],
        },
        {
          name: "run",
          description:
            "Start a long peer turn asynchronously and return its run ID",
          options: [
            {
              name: "--idempotency-key",
              description: "Stable retry key (generated when omitted)",
              args: {
                name: "idempotency_key",
              },
            },
            {
              name: "--json",
              description: "Emit a JSON result",
            },
          ],
          args: [
            {
              name: "target",
              description:
                "<peer> or <peer>/<agent> (named profile on a multiplexed peer)",
            },
            {
              name: "message",
              description: "Message text (or stdin)",
              isOptional: true,
            },
          ],
        },
        {
          name: "status",
          description:
            "Read the status and final output of an asynchronous peer run",
          options: [
            {
              name: "--json",
              description: "Emit a JSON result",
            },
          ],
          args: [
            {
              name: "target",
              description:
                "<peer> or <peer>/<agent> (named profile on a multiplexed peer)",
            },
            {
              name: "run_id",
              description: "Run ID returned by 'hermes peer run'",
            },
          ],
        },
        {
          name: "stop",
          description:
            "Stop one asynchronous peer run without affecting another turn",
          options: [
            {
              name: "--json",
              description: "Emit a JSON result",
            },
          ],
          args: [
            {
              name: "target",
              description:
                "<peer> or <peer>/<agent> (named profile on a multiplexed peer)",
            },
            {
              name: "run_id",
              description: "Run ID returned by 'hermes peer run'",
            },
          ],
        },
      ],
    },
    {
      name: "portal",
      description:
        "Set up Nous Portal (login, model pick, Tool Gateway); see also `portal info`",
      subcommands: [
        {
          name: "login",
          description:
            "Log in to Nous Portal + set it up (default; one-shot onboarding)",
        },
        {
          name: "info",
          description: "Show Portal auth + Tool Gateway routing summary",
        },
        {
          name: "open",
          description:
            "Open the Portal subscription page in your default browser",
        },
        {
          name: "tools",
          description: "List Tool Gateway tools and which are routed via Nous",
        },
      ],
    },
    {
      name: "kanban",
      description: "Multi-profile collaboration board (tasks, links, comments)",
      subcommands: [
        {
          name: "init",
          description: "Create kanban.db if missing (idempotent)",
        },
        {
          name: "boards",
          description:
            "Manage kanban boards (one board per project / workstream)",
          subcommands: [
            {
              name: ["list", "ls"],
              description: "List all boards with task counts",
              options: [
                {
                  name: "--json",
                },
                {
                  name: "--all",
                  description: "Include archived boards too",
                },
              ],
            },
            {
              name: ["create", "new"],
              description: "Create a new board",
              options: [
                {
                  name: "--name",
                  description:
                    "Human-readable display name (defaults to Title Case of slug)",
                  args: {
                    name: "name",
                  },
                },
                {
                  name: "--description",
                  description: "Optional description",
                  args: {
                    name: "description",
                  },
                },
                {
                  name: "--icon",
                  description:
                    "Optional emoji or single-character icon for the dashboard",
                  args: {
                    name: "icon",
                  },
                },
                {
                  name: "--color",
                  description:
                    "Optional hex color (e.g. '#8b5cf6') for the dashboard",
                  args: {
                    name: "color",
                  },
                },
                {
                  name: "--switch",
                  description: "Switch to the new board after creating it",
                },
                {
                  name: "--default-workdir",
                  description:
                    "Default workspace path for tasks created on this board",
                  args: {
                    name: "default_workdir",
                    template: "folders",
                  },
                },
              ],
              args: {
                name: "slug",
                description: "Board slug (kebab-case, e.g. atm10-server)",
              },
            },
            {
              name: ["rm", "remove", "delete"],
              description: "Archive (default) or delete a board",
              options: [
                {
                  name: "--delete",
                  description:
                    "Hard-delete the board directory instead of archiving it",
                },
              ],
              args: {
                name: "slug",
              },
            },
            {
              name: ["switch", "use"],
              description: "Set the active board for subsequent CLI calls",
              args: {
                name: "slug",
              },
            },
            {
              name: ["show", "current"],
              description: "Print the currently-active board slug",
            },
            {
              name: "rename",
              description:
                "Change a board's human-readable display name (slug is immutable)",
              args: [
                {
                  name: "slug",
                },
                {
                  name: "name",
                  description: "New display name",
                },
              ],
            },
            {
              name: "set-default-workdir",
              description:
                "Set the default workspace path for tasks on a board",
              args: [
                {
                  name: "slug",
                },
                {
                  name: "path",
                  description: "Absolute path to use as default workdir",
                  isOptional: true,
                  template: "folders",
                },
              ],
            },
            {
              name: "export",
              description: "Export a board to a portable .tar.gz archive",
              options: [
                {
                  name: ["-o", "--output"],
                  description: "Archive path (default: ./<slug>.tar.gz)",
                  args: {
                    name: "output",
                    template: "filepaths",
                  },
                },
                {
                  name: "--no-attachments",
                  description:
                    "Skip attachment files, keeping the archive small",
                },
                {
                  name: "--include-logs",
                  description: "Include per-task worker logs",
                },
                {
                  name: "--json",
                },
              ],
              args: {
                name: "slug",
                description: "Board to export (default: the current board)",
                isOptional: true,
              },
            },
            {
              name: "import",
              description: "Import a board archive as a new board",
              options: [
                {
                  name: "--as",
                  description:
                    "Slug for the imported board (default: from the archive)",
                  args: {
                    name: "as_slug",
                  },
                },
                {
                  name: "--switch",
                  description: "Switch to the imported board afterwards",
                },
                {
                  name: "--json",
                },
              ],
              args: {
                name: "archive",
                description: "Path to the .tar.gz archive",
                template: "filepaths",
              },
            },
          ],
        },
        {
          name: "create",
          description: "Create a new task",
          options: [
            {
              name: "--body",
              description: "Optional opening post",
              args: {
                name: "body",
              },
            },
            {
              name: "--body-file",
              description:
                "Read the opening post from a file ('-' = stdin), so bodies with embedded newlines or flag-like lines survive shell quoting",
              args: {
                name: "path",
                template: "filepaths",
              },
            },
            {
              name: "--assignee",
              description: "Profile name to assign",
              args: {
                name: "assignee",
              },
            },
            {
              name: "--parent",
              description: "Parent task id (repeatable)",
              args: {
                name: "parent",
              },
              isRepeatable: true,
            },
            {
              name: "--workspace",
              description: "Scratch | worktree | worktree:<path> | dir:<path>",
              args: {
                name: "workspace",
              },
            },
            {
              name: "--branch",
              description: "Branch name for worktree tasks, e.g. wt/t6-wire",
              args: {
                name: "branch",
              },
            },
            {
              name: "--project",
              description: "Link to a project (id or slug)",
              args: {
                name: "project",
              },
            },
            {
              name: "--tenant",
              description: "Tenant namespace",
              args: {
                name: "tenant",
              },
            },
            {
              name: "--priority",
              description: "Priority tiebreaker",
              args: {
                name: "priority",
              },
            },
            {
              name: "--triage",
              description:
                "Park in triage — a specifier will flesh out the spec and promote to todo",
            },
            {
              name: "--idempotency-key",
              description: "Dedup key",
              args: {
                name: "idempotency_key",
              },
            },
            {
              name: "--max-runtime",
              description: "Per-task runtime cap",
              args: {
                name: "max_runtime",
              },
            },
            {
              name: "--created-by",
              description: "Author name recorded on the task (default: user)",
              args: {
                name: "created_by",
              },
            },
            {
              name: "--skill",
              description: "Skill to force-load into the worker (repeatable)",
              args: {
                name: "skills",
              },
              isRepeatable: true,
            },
            {
              name: "--max-retries",
              description:
                "Per-task override for the consecutive-failure circuit breaker",
              args: {
                name: "n",
              },
            },
            {
              name: "--model",
              description:
                "Pin the worker to this model (passed as -m <model>) without changing the profile's configured model",
              args: {
                name: "model_override",
              },
            },
            {
              name: "--provider",
              description:
                "Provider the --model belongs to (passed as --provider <name> to the worker)",
              args: {
                name: "provider_override",
              },
            },
            {
              name: "--completion-contract",
              description:
                "Local-only (default), OWNER/REPO for publication, or exact GitHub PR URL; required CI gates done",
              args: {
                name: "contract",
              },
            },
            {
              name: "--goal",
              description:
                "Run the worker in a goal loop: after each turn a judge checks the response against the card title/body and, if not done, the worker keeps going in the same session until the judge agrees it's complete",
            },
            {
              name: "--goal-max-turns",
              description: "Turn budget for --goal workers (default 20)",
              args: {
                name: "n",
              },
            },
            {
              name: "--initial-status",
              description: "Initial card status",
              args: {
                name: "initial_status",
                suggestions: ["blocked", "running"],
              },
            },
            {
              name: "--json",
              description: "Emit JSON output",
            },
          ],
          args: {
            name: "title",
            description: "Task title",
          },
        },
        {
          name: "swarm",
          description:
            "Create a Kanban Swarm v1 graph (parallel workers → verifier → synthesizer)",
          options: [
            {
              name: "--worker",
              description: "Parallel worker card (repeatable)",
              args: {
                name: "profile:title[:skill,skill]",
              },
              isRepeatable: true,
            },
            {
              name: "--verifier",
              description: "Verifier profile",
              args: {
                name: "verifier",
              },
              isRequired: true,
            },
            {
              name: "--synthesizer",
              description: "Synthesizer/writer profile",
              args: {
                name: "synthesizer",
              },
              isRequired: true,
            },
            {
              name: "--tenant",
              description: "Tenant namespace",
              args: {
                name: "tenant",
              },
            },
            {
              name: "--priority",
              description: "Priority tiebreaker",
              args: {
                name: "priority",
              },
            },
            {
              name: "--created-by",
              description: "Creator/anchor profile",
              args: {
                name: "created_by",
              },
            },
            {
              name: "--idempotency-key",
              description: "Dedup key for the root card",
              args: {
                name: "idempotency_key",
              },
            },
            {
              name: "--json",
              description: "Emit JSON output",
            },
          ],
          args: {
            name: "goal",
            description: "Swarm goal / final outcome",
          },
        },
        {
          name: ["list", "ls"],
          description: "List tasks",
          options: [
            {
              name: "--mine",
              description: "Filter by $HERMES_PROFILE as assignee",
            },
            {
              name: "--assignee",
              args: {
                name: "assignee",
              },
            },
            {
              name: "--status",
              args: {
                name: "status",
                suggestions: [
                  "archived",
                  "blocked",
                  "done",
                  "ready",
                  "review",
                  "running",
                  "scheduled",
                  "todo",
                  "triage",
                ],
              },
            },
            {
              name: "--tenant",
              args: {
                name: "tenant",
              },
            },
            {
              name: "--session",
              description:
                "Filter by originating chat/agent session id (set on tasks created from inside an ACP loop)",
              args: {
                name: "session",
              },
            },
            {
              name: "--archived",
              description: "Include archived tasks",
            },
            {
              name: "--json",
            },
            {
              name: "--sort",
              description: "Sort order for listed tasks (default: priority)",
              args: {
                name: "sort",
                suggestions: [
                  "assignee",
                  "completed-desc",
                  "created",
                  "created-desc",
                  "priority",
                  "priority-desc",
                  "status",
                  "title",
                  "updated",
                ],
              },
            },
            {
              name: "--workflow-template-id",
              description: "Restrict to tasks with this workflow_template_id",
              args: {
                name: "id",
              },
            },
            {
              name: "--step-key",
              description: "Restrict to tasks with this current_step_key",
              args: {
                name: "key",
              },
            },
          ],
        },
        {
          name: "show",
          description: "Show a task with comments + events",
          options: [
            {
              name: "--json",
            },
            {
              name: "--state-type",
              description:
                "With --state-name: filter listed runs by task_runs column",
              args: {
                name: "state_type",
                suggestions: ["status", "outcome"],
              },
            },
            {
              name: "--state-name",
              description:
                "With --state-type: keep runs whose column equals this value",
              args: {
                name: "value",
              },
            },
          ],
          args: {
            name: "task_id",
          },
        },
        {
          name: "assign",
          description: "Assign or reassign a task",
          args: [
            {
              name: "task_id",
            },
            {
              name: "profile",
              description: "Profile name (or 'none' to unassign)",
            },
          ],
        },
        {
          name: "set-model",
          description:
            "Set or clear a task's model/provider override (takes effect on the next dispatch)",
          options: [
            {
              name: "--provider",
              description:
                "Provider the model belongs to (worker is spawned with --provider <name>)",
              args: {
                name: "provider",
              },
            },
          ],
          args: [
            {
              name: "task_id",
            },
            {
              name: "model",
              description:
                "Model to pin the worker to (or 'none' to clear the override)",
              isOptional: true,
            },
          ],
        },
        {
          name: "reclaim",
          description: "Release an active worker claim on a running task",
          options: [
            {
              name: "--reason",
              description:
                "Human-readable reason (recorded on the reclaimed event)",
              args: {
                name: "reason",
              },
            },
          ],
          args: {
            name: "task_id",
          },
        },
        {
          name: "reassign",
          description:
            "Reassign a task to a different profile, optionally reclaiming first",
          options: [
            {
              name: "--reclaim",
              description:
                "Release any active claim before reassigning (required if task is running)",
            },
            {
              name: "--reason",
              description:
                "Human-readable reason (recorded on the reclaimed event)",
              args: {
                name: "reason",
              },
            },
          ],
          args: [
            {
              name: "task_id",
            },
            {
              name: "profile",
              description: "New profile name (or 'none' to unassign)",
            },
          ],
        },
        {
          name: ["diagnostics", "diag"],
          description: "List active diagnostics on the current board",
          options: [
            {
              name: "--severity",
              description: "Only show diagnostics at or above this severity",
              args: {
                name: "severity",
                suggestions: ["warning", "error", "critical"],
              },
            },
            {
              name: "--task",
              description: "Only show diagnostics for one task id",
              args: {
                name: "task",
              },
            },
            {
              name: "--json",
              description:
                "Emit JSON (structured) instead of the default human table",
            },
          ],
        },
        {
          name: "link",
          description: "Add a parent->child dependency",
          args: [
            {
              name: "parent_id",
            },
            {
              name: "child_id",
            },
          ],
        },
        {
          name: "unlink",
          description: "Remove a parent->child dependency",
          args: [
            {
              name: "parent_id",
            },
            {
              name: "child_id",
            },
          ],
        },
        {
          name: "claim",
          description:
            "Atomically claim a ready task (prints resolved workspace path)",
          options: [
            {
              name: "--ttl",
              description: "Claim TTL in seconds (default: 900)",
              args: {
                name: "ttl",
              },
            },
          ],
          args: {
            name: "task_id",
          },
        },
        {
          name: "comment",
          description: "Append a comment",
          options: [
            {
              name: "--author",
              description: "Author name (default: $HERMES_PROFILE or 'user')",
              args: {
                name: "author",
              },
            },
            {
              name: "--max-len",
              description:
                "Trim the stored comment body to this many characters",
              args: {
                name: "max_len",
              },
            },
          ],
          args: [
            {
              name: "task_id",
            },
            {
              name: "text",
              description: "Comment body",
              isVariadic: true,
            },
          ],
        },
        {
          name: "attach",
          description: "Attach a local file to a task",
          options: [
            {
              name: "--content-type",
              description:
                "MIME type (default: guessed from the file extension)",
              args: {
                name: "content_type",
              },
            },
            {
              name: "--name",
              description:
                "Stored filename (default: the source file's basename)",
              args: {
                name: "name",
              },
            },
            {
              name: "--author",
              description:
                "Uploaded_by label (default: $HERMES_PROFILE or 'user')",
              args: {
                name: "author",
              },
            },
          ],
          args: [
            {
              name: "task_id",
            },
            {
              name: "path",
              description: "Path to the local file to attach",
              template: "filepaths",
            },
          ],
        },
        {
          name: "attachments",
          description: "List a task's attachments",
          options: [
            {
              name: "--json",
            },
          ],
          args: {
            name: "task_id",
          },
        },
        {
          name: "attach-rm",
          description: "Delete an attachment by id",
          args: {
            name: "attachment_id",
          },
        },
        {
          name: "complete",
          description: "Mark one or more tasks done",
          options: [
            {
              name: "--result",
              description: "Result summary",
              args: {
                name: "result",
              },
            },
            {
              name: "--summary",
              description: "Structured handoff summary for downstream tasks",
              args: {
                name: "summary",
              },
            },
            {
              name: "--metadata",
              description:
                'JSON dict of structured facts (e.g. \'{"changed_files": [...], "tests_run": 12}\')',
              args: {
                name: "metadata",
              },
            },
            {
              name: "--force",
              description:
                "Override the live-claim guard: complete a running, claimed task even without owning its run (closes the worker's run)",
            },
          ],
          args: {
            name: "task_ids",
            description:
              "One or more task ids (only --result applies to all of them)",
            isVariadic: true,
          },
        },
        {
          name: "edit",
          description:
            "Edit task fields or recovery fields on an already-completed task",
          options: [
            {
              name: "--title",
              description: "Replace the task title",
              args: {
                name: "title",
              },
            },
            {
              name: "--body",
              description: "Replace the task body",
              args: {
                name: "body",
              },
            },
            {
              name: "--priority",
              description: "Replace the task priority",
              args: {
                name: "priority",
              },
            },
            {
              name: "--result",
              description: "Backfilled task result text for a done task",
              args: {
                name: "result",
              },
            },
            {
              name: "--summary",
              description: "Structured handoff summary",
              args: {
                name: "summary",
              },
            },
            {
              name: "--metadata",
              description:
                "JSON dict of structured facts to store on the latest completed run",
              args: {
                name: "metadata",
              },
            },
          ],
          args: {
            name: "task_id",
          },
        },
        {
          name: "block",
          description: "Mark one or more tasks blocked",
          options: [
            {
              name: "--ids",
              description:
                "Additional task ids to block with the same reason (bulk mode)",
              args: {
                name: "ids",
                isVariadic: true,
              },
            },
            {
              name: "--kind",
              description: "Typed block reason",
              args: {
                name: "kind",
                suggestions: [
                  "capability",
                  "dependency",
                  "needs_input",
                  "transient",
                ],
              },
            },
          ],
          args: [
            {
              name: "task_id",
            },
            {
              name: "reason",
              description: "Reason (also appended as a comment)",
              isOptional: true,
              isVariadic: true,
            },
          ],
        },
        {
          name: "schedule",
          description:
            "Park one or more tasks in Scheduled (waiting on time, not human input)",
          options: [
            {
              name: "--ids",
              description:
                "Additional task ids to schedule with the same reason (bulk mode)",
              args: {
                name: "ids",
                isVariadic: true,
              },
            },
          ],
          args: [
            {
              name: "task_id",
            },
            {
              name: "reason",
              description: "Reason/timing note (also appended as a comment)",
              isOptional: true,
              isVariadic: true,
            },
          ],
        },
        {
          name: "unblock",
          description:
            "Return blocked/scheduled tasks to ready, or todo while parents remain open",
          options: [
            {
              name: "--reason",
              description:
                "Optional reason/note — recorded as a comment before unblocking",
              args: {
                name: "reason",
              },
            },
          ],
          args: {
            name: "task_ids",
            isVariadic: true,
          },
        },
        {
          name: "request-review",
          description:
            "Move a task to 'review' (implementation done, awaiting review) — NOT a block",
          options: [
            {
              name: "--summary",
              description:
                "What was implemented and how it was verified — shown to the reviewer",
              args: {
                name: "summary",
              },
            },
            {
              name: "--reviewer",
              description:
                "Optional reviewer profile; reassigns the task before review dispatch",
              args: {
                name: "reviewer",
              },
            },
            {
              name: "--metadata",
              description: "JSON object with structured reviewer handoff facts",
              args: {
                name: "metadata",
              },
            },
            {
              name: "--force",
              description:
                "Override the live-claim guard: move a running, claimed task to review even without owning its run (clears the worker's claim)",
            },
          ],
          args: {
            name: "task_id",
          },
        },
        {
          name: "request-changes",
          description:
            "Reviewer verdict: return the active review run to its implementer",
          args: [
            {
              name: "task_id",
            },
            {
              name: "reason",
              description: "Concrete changes required before re-review",
              isVariadic: true,
            },
          ],
        },
        {
          name: "reopen-review",
          description:
            "Send one or more review tasks back for changes (review -> ready/todo)",
          options: [
            {
              name: "--reason",
              description:
                "Optional reason/note — recorded as a comment before reopening",
              args: {
                name: "reason",
              },
            },
          ],
          args: {
            name: "task_ids",
            isVariadic: true,
          },
        },
        {
          name: "promote",
          description:
            "Manually move one or more todo/blocked tasks to ready (recovery path)",
          options: [
            {
              name: "--ids",
              description:
                "Additional task ids to promote with the same reason (bulk mode)",
              args: {
                name: "ids",
                isVariadic: true,
              },
            },
            {
              name: "--dry-run",
              description: "Validate the promotion without mutating state",
            },
            {
              name: "--json",
              description: "Emit machine-readable JSON result",
            },
          ],
          args: [
            {
              name: "task_id",
            },
            {
              name: "reason",
              description:
                "Audit-trail reason (recorded on the task_events row)",
              isOptional: true,
              isVariadic: true,
            },
          ],
        },
        {
          name: "archive",
          description: "Archive one or more tasks",
          options: [
            {
              name: "--rm",
              description:
                "Permanently delete already-archived task ids from the board",
              args: {
                name: "purge_ids",
                isVariadic: true,
              },
            },
          ],
          args: {
            name: "task_ids",
            description: "Task ids to archive (default mode)",
            isOptional: true,
            isVariadic: true,
          },
        },
        {
          name: "tail",
          description: "Follow a task's event stream",
          options: [
            {
              name: "--interval",
              args: {
                name: "interval",
              },
            },
          ],
          args: {
            name: "task_id",
          },
        },
        {
          name: "dispatch",
          description:
            "One dispatcher pass: reclaim stale, promote ready, spawn workers",
          options: [
            {
              name: "--dry-run",
              description:
                "Don't actually spawn processes; just print what would happen",
            },
            {
              name: "--max",
              description: "Cap number of spawns this pass",
              args: {
                name: "max",
              },
            },
            {
              name: "--failure-limit",
              description:
                "Auto-block a task after this many consecutive non-success attempts (spawn_failed, timed_out, or crashed; default: 2)",
              args: {
                name: "failure_limit",
              },
            },
            {
              name: "--json",
            },
          ],
        },
        {
          name: "daemon",
          description: "DEPRECATED — dispatcher now runs in the gateway",
          options: [
            {
              name: "--interval",
              description: "Seconds between dispatch ticks (default: 60)",
              args: {
                name: "interval",
              },
            },
            {
              name: "--max",
              description: "Cap number of spawns per tick",
              args: {
                name: "max",
              },
            },
            {
              name: "--failure-limit",
              args: {
                name: "failure_limit",
              },
            },
            {
              name: "--pidfile",
              description: "Write the daemon's PID to this file on start",
              args: {
                name: "pidfile",
                template: "filepaths",
              },
            },
            {
              name: ["-v", "--verbose"],
              description: "Log each tick's outcome to stdout",
            },
          ],
        },
        {
          name: "watch",
          description:
            "Live-stream task_events to the terminal (Ctrl+C to exit)",
          options: [
            {
              name: "--assignee",
              description:
                "Only show events for tasks assigned to this profile",
              args: {
                name: "assignee",
              },
            },
            {
              name: "--tenant",
              description: "Only show events from tasks in this tenant",
              args: {
                name: "tenant",
              },
            },
            {
              name: "--kinds",
              description:
                "Comma-separated event kinds to include (e.g. 'completed,blocked,gave_up,crashed,timed_out')",
              args: {
                name: "kinds",
              },
            },
            {
              name: "--interval",
              description: "Poll interval in seconds (default: 0.5)",
              args: {
                name: "interval",
              },
            },
          ],
        },
        {
          name: "stats",
          description: "Per-status + per-assignee counts + oldest-ready age",
          options: [
            {
              name: "--json",
            },
          ],
        },
        {
          name: "notify-subscribe",
          description:
            "Subscribe a gateway source to a task's terminal events (used by /kanban subscribe in the gateway adapter)",
          options: [
            {
              name: "--platform",
              args: {
                name: "platform",
              },
              isRequired: true,
            },
            {
              name: "--chat-id",
              args: {
                name: "chat_id",
              },
              isRequired: true,
            },
            {
              name: "--thread-id",
              args: {
                name: "thread_id",
              },
            },
            {
              name: "--user-id",
              args: {
                name: "user_id",
              },
            },
            {
              name: "--user-id-alt",
              args: {
                name: "user_id_alt",
              },
            },
            {
              name: "--chat-type",
              description:
                "Originating source chat_type, recorded so the active-wake delivery modes resolve the operator's real session",
              args: {
                name: "chat_type",
                suggestions: ["dm", "group", "channel", "thread"],
              },
            },
            {
              name: "--parent-chat-id",
              description:
                "Parent channel ID for a thread or forum post, used for multiplex profile routing",
              args: {
                name: "parent_chat_id",
              },
            },
            {
              name: "--guild-id",
              description:
                "Discord guild ID, used for multiplex profile routing",
              args: {
                name: "guild_id",
              },
            },
            {
              name: "--notifier-profile",
              description:
                "Profile gateway that owns/delivers this subscription (default: active profile)",
              args: {
                name: "notifier_profile",
              },
            },
            {
              name: "--delivery-mode",
              description:
                "How the kanban-notifier reacts to terminal events for this subscription: 'notify', 'notify+wake', or 'wake'",
              args: {
                name: "delivery_mode",
                suggestions: ["notify", "notify+wake", "wake"],
              },
            },
          ],
          args: {
            name: "task_id",
          },
        },
        {
          name: "notify-list",
          description:
            "List notification subscriptions (optionally for a single task)",
          options: [
            {
              name: "--json",
            },
          ],
          args: {
            name: "task_id",
            isOptional: true,
          },
        },
        {
          name: "notify-unsubscribe",
          description: "Remove a gateway subscription from a task",
          options: [
            {
              name: "--platform",
              args: {
                name: "platform",
              },
              isRequired: true,
            },
            {
              name: "--chat-id",
              args: {
                name: "chat_id",
              },
              isRequired: true,
            },
            {
              name: "--thread-id",
              args: {
                name: "thread_id",
              },
            },
          ],
          args: {
            name: "task_id",
          },
        },
        {
          name: "log",
          description:
            "Print the worker log for a task (from <kanban-root>/kanban/logs/)",
          options: [
            {
              name: "--tail",
              description: "Only print the last N bytes",
              args: {
                name: "tail",
              },
            },
          ],
          args: {
            name: "task_id",
          },
        },
        {
          name: "runs",
          description:
            "Show attempt history for a task (one row per run: profile, outcome, elapsed, summary)",
          options: [
            {
              name: "--json",
            },
            {
              name: "--state-type",
              description: "With --state-name: filter runs by task_runs column",
              args: {
                name: "state_type",
                suggestions: ["status", "outcome"],
              },
            },
            {
              name: "--state-name",
              description:
                "With --state-type: keep runs whose column equals this value",
              args: {
                name: "value",
              },
            },
          ],
          args: {
            name: "task_id",
          },
        },
        {
          name: "heartbeat",
          description:
            "Emit a heartbeat event for a running task (worker liveness signal)",
          options: [
            {
              name: "--note",
              description:
                "Optional short note attached to the heartbeat event",
              args: {
                name: "note",
              },
            },
          ],
          args: {
            name: "task_id",
          },
        },
        {
          name: "assignees",
          description:
            "List known profiles + per-profile task counts (union of ~/.hermes/profiles/ and current assignees on the board)",
          options: [
            {
              name: "--json",
            },
          ],
        },
        {
          name: "context",
          description:
            "Print the full context a worker sees for a task (title + body + parent results + comments)",
          args: {
            name: "task_id",
          },
        },
        {
          name: "specify",
          description:
            "Flesh out a triage-column task into a concrete spec (title + body) and promote it to todo",
          options: [
            {
              name: "--all",
              description: "Specify every task currently in the triage column",
            },
            {
              name: "--tenant",
              description:
                "When used with --all, restrict the sweep to this tenant",
              args: {
                name: "tenant",
              },
            },
            {
              name: "--author",
              description:
                "Author name recorded on the audit comment (default: $HERMES_PROFILE or 'specifier')",
              args: {
                name: "author",
              },
            },
            {
              name: "--json",
              description: "Emit one JSON object per task on stdout",
            },
          ],
          args: {
            name: "task_id",
            description: "Task id to specify (required unless --all is given)",
            isOptional: true,
          },
        },
        {
          name: "decompose",
          description:
            "Decompose a triage-column task into a graph of child tasks routed to specialist profiles by description",
          options: [
            {
              name: "--all",
              description:
                "Decompose every task currently in the triage column",
            },
            {
              name: "--tenant",
              description:
                "When used with --all, restrict the sweep to this tenant",
              args: {
                name: "tenant",
              },
            },
            {
              name: "--author",
              description:
                "Author name recorded on the audit comment (default: $HERMES_PROFILE or 'decomposer')",
              args: {
                name: "author",
              },
            },
            {
              name: "--json",
              description: "Emit one JSON object per task on stdout",
            },
          ],
          args: {
            name: "task_id",
            description:
              "Task id to decompose (required unless --all is given)",
            isOptional: true,
          },
        },
        {
          name: "gc",
          description:
            "Garbage-collect archived-task workspaces, old events, and old logs",
          options: [
            {
              name: "--event-retention-days",
              description:
                "Delete task_events older than N days for terminal tasks (default: 30; 0 disables)",
              args: {
                name: "event_retention_days",
              },
            },
            {
              name: "--log-retention-days",
              description:
                "Delete worker log files older than N days (default: 30; 0 disables)",
              args: {
                name: "log_retention_days",
              },
            },
          ],
        },
        {
          name: "repair",
          description:
            "Check kanban.db integrity and auto-repair index-only corruption",
          options: [
            {
              name: "--json",
              description: "Emit the repair report as JSON",
            },
          ],
        },
      ],
      options: [
        {
          name: "--board",
          description: "Board slug to operate on",
          args: {
            name: "slug",
          },
        },
      ],
    },
    {
      name: "project",
      description: "Manage projects (named, multi-folder workspaces)",
      subcommands: [
        {
          name: "create",
          description: "Create a new project",
          options: [
            {
              name: "--slug",
              description: "Explicit slug override",
              args: {
                name: "slug",
              },
            },
            {
              name: "--primary",
              description: "Primary repo path",
              args: {
                name: "path",
                template: "folders",
              },
            },
            {
              name: "--description",
              args: {
                name: "description",
              },
            },
            {
              name: "--icon",
              args: {
                name: "icon",
              },
            },
            {
              name: "--color",
              args: {
                name: "color",
              },
            },
            {
              name: "--board",
              description: "Bind a kanban board",
              args: {
                name: "slug",
              },
            },
            {
              name: "--use",
              description: "Set as the active project",
            },
          ],
          args: [
            {
              name: "name",
              description: "Human name, e.g. 'Hermes Agent'",
            },
            {
              name: "folders",
              description: "Folder paths to include (first = primary)",
              isOptional: true,
              isVariadic: true,
              template: "folders",
            },
          ],
        },
        {
          name: ["list", "ls"],
          description: "List projects",
          options: [
            {
              name: "--all",
              description: "Include archived projects",
            },
          ],
        },
        {
          name: "show",
          description: "Show a project's details",
          args: {
            name: "project",
            description: "Project id or slug",
          },
        },
        {
          name: "add-folder",
          description: "Add a folder to a project",
          options: [
            {
              name: "--label",
              args: {
                name: "label",
              },
            },
            {
              name: "--primary",
              description: "Mark as primary repo",
            },
          ],
          args: [
            {
              name: "project",
              description: "Project id or slug",
            },
            {
              name: "path",
              description: "Folder path",
              template: "folders",
            },
          ],
        },
        {
          name: "remove-folder",
          description: "Remove a folder from a project",
          args: [
            {
              name: "project",
              description: "Project id or slug",
            },
            {
              name: "path",
              description: "Folder path",
              template: "folders",
            },
          ],
        },
        {
          name: "rename",
          description: "Rename a project",
          args: [
            {
              name: "project",
              description: "Project id or slug",
            },
            {
              name: "name",
              description: "New name",
            },
          ],
        },
        {
          name: "set-primary",
          description: "Set the primary folder",
          args: [
            {
              name: "project",
              description: "Project id or slug",
            },
            {
              name: "path",
              description: "Folder path (must already be in project)",
              template: "folders",
            },
          ],
        },
        {
          name: "use",
          description: "Set the active project",
          args: {
            name: "project",
            description: "Project id or slug (omit to clear)",
            isOptional: true,
          },
        },
        {
          name: "archive",
          description: "Archive a project",
          args: {
            name: "project",
            description: "Project id or slug",
          },
        },
        {
          name: "restore",
          description: "Restore an archived project",
          args: {
            name: "project",
            description: "Project id or slug",
          },
        },
        {
          name: "bind-board",
          description: "Bind a kanban board to a project",
          args: [
            {
              name: "project",
              description: "Project id or slug",
            },
            {
              name: "board",
              description: "Board slug (omit to unbind)",
              isOptional: true,
            },
          ],
        },
      ],
    },
    {
      name: "hooks",
      description: "Inspect and manage shell-script hooks",
      subcommands: [
        {
          name: ["list", "ls"],
          description:
            "List configured hooks with matcher, timeout, and consent status",
        },
        {
          name: "test",
          description:
            "Fire every hook matching <event> against a synthetic payload",
          options: [
            {
              name: "--for-tool",
              description:
                "Only fire hooks whose matcher matches this tool name (used for pre_tool_call / post_tool_call)",
              args: {
                name: "for_tool",
              },
            },
            {
              name: "--payload-file",
              description:
                "Path to a JSON file whose contents are merged into the synthetic payload before execution",
              args: {
                name: "payload_file",
                template: "filepaths",
              },
            },
          ],
          args: {
            name: "event",
            description:
              "Hook event name (e.g. pre_tool_call, pre_llm_call, subagent_stop)",
          },
        },
        {
          name: ["revoke", "remove", "rm"],
          description:
            "Remove a command's allowlist entries (a running gateway drops it within about 30 seconds)",
          args: {
            name: "command",
            description:
              "The exact command string to revoke (as declared in config.yaml)",
          },
        },
        {
          name: "doctor",
          description:
            "Check each configured hook: exec bit, allowlist, mtime drift, JSON validity, and synthetic run timing",
        },
      ],
    },
    {
      name: "doctor",
      description: "Check configuration and dependencies",
      options: [
        {
          name: "--fix",
          description: "Attempt to fix issues automatically",
        },
        {
          name: "--live",
          description:
            "Opt-in: run one bounded, read-only real-call health probe per configured tool backend after the static checks",
        },
        {
          name: "--ack",
          description: "Acknowledge a security advisory by ID and exit",
          args: {
            name: "advisory_id",
          },
        },
      ],
    },
    {
      name: "verify",
      description: "Detect a project's run recipe and smoke-test it",
      options: [
        {
          name: "--detect-only",
          description: "Only detect and print the recipe as JSON; run nothing",
        },
        {
          name: "--save",
          description:
            "Save the recipe as .hermes/environment.json in the project",
        },
        {
          name: "--skip-start",
          description:
            "Run command phases but skip starting the app / readiness poll",
        },
        {
          name: "--phase",
          description: "Run only the given phase(s); repeatable",
          args: {
            name: "phase",
            suggestions: ["bootstrap", "build", "test", "start"],
          },
          isRepeatable: true,
        },
        {
          name: "--port",
          description: "Override the port used for the readiness poll",
          args: {
            name: "port",
          },
        },
        {
          name: "--timeout",
          description: "Per-phase timeout in seconds (default: 600)",
          args: {
            name: "timeout",
          },
        },
        {
          name: "--ready-timeout",
          description: "Readiness poll timeout in seconds (default: 60)",
          args: {
            name: "ready_timeout",
          },
        },
        {
          name: "--json",
          description: "Emit a machine-readable JSON result",
        },
      ],
      args: {
        name: "path",
        description: "Project root to verify (default: current directory)",
        isOptional: true,
        template: "folders",
      },
    },
    {
      name: "security",
      description:
        "Supply-chain audit (OSV.dev) for venv, plugins, and MCP servers",
      subcommands: [
        {
          name: "audit",
          description: "Run a one-shot supply-chain audit",
          options: [
            {
              name: "--json",
              description:
                "Emit machine-readable JSON instead of human-readable text",
            },
            {
              name: "--fail-on",
              description:
                "Exit non-zero when any finding meets this severity (default: critical)",
              args: {
                name: "fail_on",
                suggestions: ["low", "moderate", "high", "critical"],
              },
            },
            {
              name: "--skip-venv",
              description: "Skip scanning the Hermes Python venv",
            },
            {
              name: "--skip-plugins",
              description: "Skip scanning plugin requirements files",
            },
            {
              name: "--skip-mcp",
              description: "Skip scanning pinned MCP servers in config.yaml",
            },
          ],
        },
      ],
    },
    {
      name: "approvals",
      description:
        "Approval-prompt tools (mine history into allowlist proposals)",
      subcommands: [
        {
          name: "suggest",
          description: "Propose command_allowlist entries from past approvals",
          options: [
            {
              name: "--apply",
              description:
                "Merge the numbered proposals (from a prior run) into command_allowlist in config.yaml",
              args: {
                name: "n[,m...]",
              },
            },
            {
              name: "--json",
              description:
                "Emit machine-readable JSON instead of human-readable text",
            },
            {
              name: "--days",
              description:
                "How far back to scan session history (default: 90; 0 = all)",
              args: {
                name: "days",
              },
            },
            {
              name: "--min-count",
              description:
                "Minimum approval count for a pattern to be proposed (default: 2)",
              args: {
                name: "min_count",
              },
            },
            {
              name: "--limit",
              description: "Maximum number of proposals to show (default: 20)",
              args: {
                name: "limit",
              },
            },
            {
              name: "--db",
              description:
                "Path to an alternate session database (default: ~/.hermes/state.db)",
              args: {
                name: "db",
                template: "filepaths",
              },
            },
          ],
        },
        {
          name: "test",
          description:
            "Dry-run the approval verdict for a command (never executes it)",
          options: [
            {
              name: "--env-type",
              description:
                "Terminal backend type to evaluate against (default: local; isolated container backends like docker skip the guards)",
              args: {
                name: "env_type",
              },
            },
            {
              name: "--json",
              description:
                "Emit machine-readable JSON instead of human-readable text",
            },
          ],
          args: {
            name: "command",
            description:
              "The command to evaluate (prefix with -- to protect its flags)",
            isOptional: true,
            isVariadic: true,
          },
        },
      ],
    },
    {
      name: "dump",
      description: "Dump setup summary for support/debugging",
      options: [
        {
          name: "--show-keys",
          description:
            "Show redacted API key prefixes (first/last 4 chars) instead of just set/not set",
        },
      ],
    },
    {
      name: "debug",
      description: "Debug tools — upload logs and system info for support",
      subcommands: [
        {
          name: "share",
          description:
            "Upload debug report to a paste service and print a shareable URL",
          options: [
            {
              name: "--lines",
              description:
                "Number of log lines to include per log file (default: 200)",
              args: {
                name: "lines",
              },
            },
            {
              name: "--expire",
              description:
                "Dpaste.com fallback retention in days. paste.rs pastes are always deleted after 6 hours, but if the upload falls back to dpaste.com the pastes live for this many days and cannot be deleted",
              args: {
                name: "expire",
              },
            },
            {
              name: "--local",
              description: "Print the report locally instead of uploading",
            },
            {
              name: ["-y", "--yes"],
              description:
                "Skip the confirmation prompt and upload immediately",
            },
            {
              name: "--no-redact",
              description:
                "Disable upload-time secret redaction (default: redact)",
            },
            {
              name: "--nous",
              description:
                "Upload the debug bundle to Nous-internal storage (AWS S3) instead of a public paste service",
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a paste uploaded by 'hermes debug share'",
          args: {
            name: "urls",
            description:
              "One or more paste URLs to delete (e.g. https://paste.rs/abc123)",
            isOptional: true,
            isVariadic: true,
          },
        },
      ],
    },
    {
      name: "backup",
      description: "Back up Hermes home directory to a zip file",
      options: [
        {
          name: ["-o", "--output"],
          description:
            "Output path for the zip file (default: ~/hermes-backup-<timestamp>.zip)",
          args: {
            name: "output",
            template: "filepaths",
          },
        },
        {
          name: ["-q", "--quick"],
          description:
            "Quick snapshot: only critical state files (config, state.db, .env, auth, cron)",
        },
        {
          name: ["-l", "--label"],
          description: "Label for the snapshot (only used with --quick)",
          args: {
            name: "label",
          },
        },
        {
          name: ["-k", "--keep"],
          description:
            "After a full backup, delete older hermes-backup-*.zip files in the output directory beyond the newest N (default 3; 0 keeps everything)",
          args: {
            name: "n",
          },
        },
      ],
    },
    {
      name: "checkpoints",
      description: "Inspect / prune / clear ~/.hermes/checkpoints/",
      subcommands: [
        {
          name: "status",
          description:
            "Show total size, project count, and per-project breakdown",
          options: [
            {
              name: "--limit",
              description: "Max projects to list (default 20)",
              args: {
                name: "limit",
              },
            },
          ],
        },
        {
          name: "list",
          description: "Alias for 'status'",
          options: [
            {
              name: "--limit",
              args: {
                name: "limit",
              },
            },
          ],
        },
        {
          name: "prune",
          description: "Delete orphan/stale checkpoints and GC the store",
          options: [
            {
              name: "--retention-days",
              description:
                "Drop projects whose last_touch is older than N days (default 7)",
              args: {
                name: "retention_days",
              },
            },
            {
              name: "--max-size-mb",
              description:
                "After orphan/stale prune, drop oldest commits per project until total size <= this (default 500)",
              args: {
                name: "max_size_mb",
              },
            },
            {
              name: "--keep-orphans",
              description:
                "Skip deleting projects whose workdir no longer exists",
            },
            {
              name: ["-f", "--force"],
              description: "Skip the orphan-deletion confirmation prompt",
            },
          ],
        },
        {
          name: "clear",
          description:
            "Delete the entire checkpoint base (all /rollback history)",
          options: [
            {
              name: ["-f", "--force"],
              description: "Skip confirmation prompt",
            },
          ],
        },
        {
          name: "clear-legacy",
          description:
            "Delete only the legacy-<ts>/ archives from v1 migration",
          options: [
            {
              name: ["-f", "--force"],
              description: "Skip confirmation prompt",
            },
          ],
        },
      ],
    },
    {
      name: "import",
      description: "Restore a Hermes backup from a zip file",
      options: [
        {
          name: ["-f", "--force"],
          description: "Overwrite existing files without confirmation",
        },
      ],
      args: {
        name: "zipfile",
        description: "Path to the backup zip file",
        template: "filepaths",
      },
    },
    {
      name: "config",
      description: "View and edit configuration",
      subcommands: [
        {
          name: "show",
          description: "Show current configuration",
        },
        {
          name: "edit",
          description: "Open config file in editor",
        },
        {
          name: "get",
          description: "Print a resolved configuration value",
          options: [
            {
              name: "--json",
              description: "Print value as JSON",
            },
            {
              name: "--raw",
              description:
                "Print credential values unmasked (default masks api_key/token/secret-shaped values)",
            },
          ],
          args: {
            name: "key",
            description: "Configuration key (e.g., model)",
            isOptional: true,
          },
        },
        {
          name: "set",
          description: "Set a configuration value",
          options: [
            {
              name: "--force",
              description:
                "Write a key the running version doesn't recognize: an unknown path under a known section is otherwise refused, and an unknown top-level key is written with a notice",
            },
          ],
          args: [
            {
              name: "key",
              description: "Configuration key (e.g., model, terminal.backend)",
              isOptional: true,
            },
            {
              name: "value",
              description: "Value to set",
              isOptional: true,
            },
          ],
        },
        {
          name: "unset",
          description: "Remove a configuration value",
          args: {
            name: "key",
            description: "Configuration key to remove",
            isOptional: true,
          },
        },
        {
          name: "path",
          description: "Print config file path",
        },
        {
          name: "env-path",
          description: "Print .env file path",
        },
        {
          name: "check",
          description: "Check for missing/outdated config",
        },
        {
          name: "migrate",
          description: "Update config with new options",
        },
      ],
    },
    {
      name: "skin",
      description: "List, switch, and tweak skins",
      subcommands: [
        {
          name: "list",
          description: "List available skins",
        },
        {
          name: "use",
          description: "Switch the active skin",
          args: {
            name: "name",
            description: "Skin name",
          },
        },
        {
          name: "set",
          description:
            "Set one color of the active skin (e.g. `skin set ui_tool '#00FFFF'`)",
          options: [
            {
              name: "--skin",
              description: "Target a specific skin instead of the active one",
              args: {
                name: "skin",
              },
            },
          ],
          args: [
            {
              name: "key",
              description: "Color key (e.g. ui_tool, ui_accent, background)",
            },
            {
              name: "value",
              description: "Hex color (#rrggbb)",
            },
          ],
        },
      ],
    },
    {
      name: "console",
      description: "Open the safe Hermes command console",
    },
    {
      name: "pairing",
      description: "Manage DM pairing codes for user authorization",
      subcommands: [
        {
          name: "list",
          description: "Show pending + approved users",
        },
        {
          name: "approve",
          description: "Approve a pairing request",
          args: [
            {
              name: "platform",
              description: "Platform name (telegram, discord, slack, whatsapp)",
            },
            {
              name: "request-id|code",
              description:
                "Request ID from 'pairing list', or the code the bot DM'd the user",
            },
          ],
        },
        {
          name: "revoke",
          description: "Revoke user access",
          args: [
            {
              name: "platform",
              description: "Platform name",
            },
            {
              name: "user_id",
              description: "User ID to revoke",
            },
          ],
        },
        {
          name: "clear-pending",
          description: "Clear all pending codes",
        },
      ],
    },
    {
      name: "skills",
      description: "Search, install, configure, and manage skills",
      subcommands: [
        {
          name: "trust",
          description:
            "Trust a project so its repo-local skills (./.hermes/skills, ./.agents/skills) load",
          args: {
            name: "path",
            description:
              "Project root to trust (default: enclosing git checkout of cwd)",
            isOptional: true,
            template: "folders",
          },
        },
        {
          name: "untrust",
          description: "Revoke project-skill trust for a repo",
          args: {
            name: "path",
            description:
              "Project root to untrust (default: enclosing git checkout of cwd)",
            isOptional: true,
            template: "folders",
          },
        },
        {
          name: "browse",
          description: "Browse all available skills (paginated)",
          options: [
            {
              name: "--page",
              description: "Page number (default: 1)",
              args: {
                name: "page",
              },
            },
            {
              name: "--size",
              description: "Results per page (default: 20)",
              args: {
                name: "size",
              },
            },
            {
              name: "--source",
              description:
                "Filter by source or provider (e.g. nvidia, openai) (default: all)",
              args: {
                name: "source",
                suggestions: [
                  "all",
                  "official",
                  "skills-sh",
                  "well-known",
                  "github",
                  "clawhub",
                  "lobehub",
                  "browse-sh",
                  "nvidia",
                  "openai",
                  "anthropic",
                  "huggingface",
                  "voltagent",
                  "gstack",
                  "minimax",
                ],
              },
            },
          ],
        },
        {
          name: "search",
          description: "Search skill registries",
          options: [
            {
              name: "--source",
              description: "Filter by source or provider (e.g. nvidia, openai)",
              args: {
                name: "source",
                suggestions: [
                  "all",
                  "official",
                  "skills-sh",
                  "well-known",
                  "github",
                  "clawhub",
                  "lobehub",
                  "browse-sh",
                  "nvidia",
                  "openai",
                  "anthropic",
                  "huggingface",
                  "voltagent",
                  "gstack",
                  "minimax",
                ],
              },
            },
            {
              name: "--limit",
              description: "Max results",
              args: {
                name: "limit",
              },
            },
            {
              name: "--json",
              description:
                "Output JSON instead of a table (full identifiers, scripting-friendly)",
            },
          ],
          args: {
            name: "query",
            description: "Search query",
          },
        },
        {
          name: "install",
          description: "Install a skill",
          options: [
            {
              name: "--category",
              description: "Category folder to install into",
              args: {
                name: "category",
              },
            },
            {
              name: "--name",
              description:
                "Override the skill name (useful when installing from a URL whose SKILL.md has no `name:` frontmatter)",
              args: {
                name: "name",
              },
            },
            {
              name: "--force",
              description: "Install despite blocked scan verdict",
            },
            {
              name: ["-y", "--yes"],
              description: "Skip confirmation prompt (needed in TUI mode)",
            },
          ],
          args: {
            name: "identifier",
            description:
              "Skill identifier (e.g. openai/skills/skill-creator) or a direct HTTP(S) URL to a SKILL.md file",
          },
        },
        {
          name: "inspect",
          description: "Preview a skill without installing",
          args: {
            name: "identifier",
            description: "Skill identifier",
          },
        },
        {
          name: "list",
          description: "List installed skills",
          options: [
            {
              name: "--source",
              args: {
                name: "source",
                suggestions: ["all", "hub", "builtin", "local"],
              },
            },
            {
              name: "--enabled-only",
              description: "Hide disabled skills",
            },
          ],
        },
        {
          name: "check",
          description: "Check installed hub skills for updates",
          args: {
            name: "name",
            description: "Specific skill to check (default: all)",
            isOptional: true,
          },
        },
        {
          name: "update",
          description: "Update installed hub skills",
          options: [
            {
              name: "--force",
              description:
                "Overwrite skills you have edited locally (they are skipped by default)",
            },
          ],
          args: {
            name: "name",
            description:
              "Specific skill to update (default: all outdated skills)",
            isOptional: true,
          },
        },
        {
          name: "audit",
          description: "Re-scan installed hub skills",
          options: [
            {
              name: "--deep",
              description:
                "Run AST-level analysis on Python files (opt-in diagnostic)",
            },
          ],
          args: {
            name: "name",
            description: "Specific skill to audit (default: all)",
            isOptional: true,
          },
        },
        {
          name: "uninstall",
          description: "Remove a hub-installed skill",
          options: [
            {
              name: ["-y", "--yes"],
              description: "Skip confirmation prompt",
            },
          ],
          args: {
            name: "name",
            description: "Skill name to remove",
          },
        },
        {
          name: "reset",
          description:
            "Reset a bundled skill — clears 'user-modified' tracking so updates work again",
          options: [
            {
              name: "--restore",
              description:
                "Also delete the current copy and re-copy the bundled version",
            },
            {
              name: ["-y", "--yes"],
              description: "Skip confirmation prompt when using --restore",
            },
          ],
          args: {
            name: "name",
            description: "Skill name to reset (e.g. google-workspace)",
          },
        },
        {
          name: "list-modified",
          description:
            "List bundled skills you've edited (which `hermes update` keeps)",
          options: [
            {
              name: "--json",
              description: "Output the list as JSON",
            },
          ],
        },
        {
          name: "diff",
          description:
            "Show how your copy of a bundled skill differs from the stock version",
          args: {
            name: "name",
            description: "Skill name to diff (e.g. google-workspace)",
          },
        },
        {
          name: "opt-out",
          description:
            "Stop bundled skills from being seeded into this profile",
          options: [
            {
              name: "--remove",
              description:
                "Also delete already-present unmodified bundled skills",
            },
            {
              name: ["-y", "--yes"],
              description: "Skip confirmation prompt when using --remove",
            },
          ],
        },
        {
          name: "opt-in",
          description: "Re-enable bundled-skill seeding (undo opt-out)",
          options: [
            {
              name: "--sync",
              description:
                "Re-seed bundled skills immediately instead of waiting for update",
            },
          ],
        },
        {
          name: "repair-official",
          description:
            "Backfill or restore official optional skills from repo source",
          options: [
            {
              name: "--restore",
              description:
                "Restore from official optional source, backing up existing matching copies",
            },
            {
              name: ["-y", "--yes"],
              description: "Skip confirmation prompt when using --restore",
            },
          ],
          args: {
            name: "name",
            description:
              "Official optional skill folder/frontmatter name, or 'all'",
          },
        },
        {
          name: "publish",
          description: "Publish a skill to a registry",
          options: [
            {
              name: "--to",
              description: "Target registry",
              args: {
                name: "to",
                suggestions: ["github", "clawhub"],
              },
            },
            {
              name: "--repo",
              description: "Target GitHub repo (e.g. openai/skills)",
              args: {
                name: "repo",
              },
            },
          ],
          args: {
            name: "skill_path",
            description: "Path to skill directory",
            template: "folders",
          },
        },
        {
          name: "snapshot",
          description: "Export/import skill configurations",
          subcommands: [
            {
              name: "export",
              description: "Export installed skills to a file",
              args: {
                name: "output",
                description: "Output JSON file path (use - for stdout)",
                template: "filepaths",
              },
            },
            {
              name: "import",
              description: "Import and install skills from a file",
              options: [
                {
                  name: "--force",
                  description: "Force install despite caution verdict",
                },
              ],
              args: {
                name: "input",
                description: "Input JSON file path",
                template: "filepaths",
              },
            },
          ],
        },
        {
          name: "tap",
          description: "Manage skill sources",
          subcommands: [
            {
              name: "list",
              description: "List configured taps",
            },
            {
              name: "add",
              description: "Add a GitHub repo as skill source",
              args: {
                name: "repo",
                description: "GitHub repo (e.g. owner/repo)",
              },
            },
            {
              name: "remove",
              description: "Remove a tap",
              args: {
                name: "name",
                description: "Tap name to remove",
              },
            },
          ],
        },
        {
          name: "config",
          description:
            "Interactive skill configuration — enable/disable individual skills",
        },
      ],
    },
    {
      name: "bundles",
      description:
        "Create, list, and manage skill bundles (aliases for multiple skills)",
      subcommands: [
        {
          name: "list",
          description: "List installed skill bundles",
        },
        {
          name: "show",
          description: "Show one bundle's contents",
          args: {
            name: "name",
            description: "Bundle name",
          },
        },
        {
          name: "create",
          description: "Create a new skill bundle",
          options: [
            {
              name: ["-s", "--skill"],
              description: "Skill name to include (repeat for multiple)",
              args: {
                name: "skill",
              },
              isRepeatable: true,
            },
            {
              name: ["-d", "--description"],
              description:
                "Human-readable description shown in /help and `hermes bundles list`",
              args: {
                name: "description",
              },
            },
            {
              name: ["-i", "--instruction"],
              description:
                "Extra guidance prepended to the loaded skill content",
              args: {
                name: "instruction",
              },
            },
            {
              name: ["-f", "--force"],
              description: "Overwrite an existing bundle with the same name",
            },
          ],
          args: {
            name: "name",
            description: "Bundle name (becomes the /slash command)",
          },
        },
        {
          name: "delete",
          description: "Delete a skill bundle",
          args: {
            name: "name",
            description: "Bundle name",
          },
        },
        {
          name: "reload",
          description: "Re-scan the bundles directory and report changes",
        },
      ],
    },
    {
      name: "plugins",
      description: "Manage and validate plugins",
      subcommands: [
        {
          name: "install",
          description:
            "Install a plugin from the curated catalog, a Git URL, or owner/repo",
          options: [
            {
              name: ["-f", "--force"],
              description:
                "Reinstall over an existing plugin (from the same source, your untracked files are kept)",
            },
            {
              name: "--ref",
              description:
                "Install exactly one immutable 40-character Git commit SHA",
              args: {
                name: "commit_sha",
              },
            },
            {
              name: "--allow-removed",
              description:
                "DANGEROUS: bypass the catalog removed-plugin blocklist check",
            },
            {
              name: "--no-deps",
              description:
                "Download without dependency consent and leave disabled; cannot replace an active plugin",
            },
            {
              name: "--yes-deps",
              description:
                "Answer the Python dependency consent question yourself, so non-interactive installs finish in one run instead of being refused",
            },
            {
              name: "--enable",
              description:
                "Auto-enable the plugin after install (skip confirmation prompt)",
            },
            {
              name: "--no-enable",
              description:
                "Install disabled (skip confirmation prompt); enable later with `hermes plugins enable <name>`",
            },
          ],
          args: {
            name: "identifier",
            description:
              "Bare plugin catalog entry name, Git URL, or owner/repo shorthand",
          },
        },
        {
          name: "search",
          description: "Search the curated Hermes plugin catalog",
          options: [
            {
              name: "--json",
              description: "Print machine-readable JSON",
            },
          ],
          args: {
            name: "term",
            description:
              "Query matched against entry names, descriptions and declared tools (omit to list the whole catalog)",
            isOptional: true,
          },
        },
        {
          name: "browse",
          description: "List every curated plugin catalog entry",
        },
        {
          name: "validate",
          description:
            "Validate a plugin directory for catalog admission (CI gate)",
          options: [
            {
              name: "--install-deps",
              description:
                "Install the plugin's declared Python dependencies into this venv before the capability probe, exactly as `plugins install` would",
            },
            {
              name: "--json",
              description: "Print machine-readable JSON (for CI)",
            },
          ],
          args: {
            name: "path",
            description: "Path to the plugin directory",
            template: "folders",
          },
        },
        {
          name: "update",
          description:
            "Update an installed plugin, or with no name every plugin that has an update",
          options: [
            {
              name: ["-y", "--yes"],
              description:
                "With no name: update everything listed without the confirmation question (required without a terminal)",
            },
            {
              name: ["-f", "--force"],
              description:
                "Apply the update even when the security scan returns a caution verdict (a dangerous verdict still blocks)",
            },
          ],
          args: {
            name: "name",
            description:
              "Plugin name to update (default: list every plugin with an update and offer them all)",
            isOptional: true,
          },
        },
        {
          name: "adopt",
          description:
            "Adopt a self-cloned plugin dir into provenance tracking",
          args: {
            name: "name",
            description: "Self-cloned plugin directory name",
          },
        },
        {
          name: "trust-update-url",
          description: "Confirm a changed plugin update_url into the saved tag",
          args: {
            name: "name",
            description: "Plugin name",
          },
        },
        {
          name: ["check-updates", "check"],
          description:
            "Check whether installed plugins have updates (read-only)",
          options: [
            {
              name: "--json",
              description:
                "Print machine-readable JSON (the receipt-section shape)",
            },
          ],
        },
        {
          name: ["remove", "rm", "uninstall"],
          description: "Remove an installed plugin",
          args: {
            name: "name",
            description: "Plugin directory name to remove",
          },
        },
        {
          name: ["list", "ls"],
          description: "List installed plugins",
          options: [
            {
              name: "--enabled",
              description: "Show only enabled plugins",
            },
            {
              name: "--user",
              description:
                "Show only user-installed plugins (including git plugins)",
            },
            {
              name: "--no-bundled",
              description: "Hide bundled plugins",
            },
            {
              name: "--plain",
              description:
                "Print compact plain-text output instead of a Rich table",
            },
            {
              name: "--json",
              description: "Print machine-readable JSON",
            },
          ],
        },
        {
          name: "enable",
          description: "Enable a disabled plugin",
          options: [
            {
              name: "--allow-tool-override",
              description:
                "Grant this plugin permission to replace built-in tools (e.g. shell_exec, write_file)",
            },
            {
              name: "--no-allow-tool-override",
              description:
                "Enable without granting built-in tool override (skip prompt)",
            },
          ],
          args: {
            name: "name",
            description: "Plugin name to enable",
          },
        },
        {
          name: "disable",
          description: "Disable a plugin without removing it",
          args: {
            name: "name",
            description: "Plugin name to disable",
          },
        },
        {
          name: "capabilities",
          description: "Show declared vs granted capabilities per plugin",
          args: {
            name: "name",
            description:
              "Plugin id to inspect (omit to list all plugins with capabilities)",
            isOptional: true,
          },
        },
        {
          name: "doctor",
          description: "Validate a plugin with the real runtime contracts",
          options: [
            {
              name: "--ci",
              description: "Exit non-zero when validation reports an error",
            },
          ],
          args: {
            name: "target",
            description:
              "Plugin path or installed plugin id (default: current directory)",
            isOptional: true,
            template: "folders",
          },
        },
        {
          name: "pack",
          description: "Declarative, shareable plugin sets (hermes-pack.yaml)",
          subcommands: [
            {
              name: "install",
              description:
                "Review and install a pack from a file path or https URL",
              options: [
                {
                  name: ["-f", "--force"],
                  description: "Reinstall plugins that already exist",
                },
              ],
              args: {
                name: "source",
                description:
                  "Path to a hermes-pack.yaml file, or an https:// URL",
                template: "filepaths",
              },
            },
            {
              name: "export",
              description: "Emit a pack YAML for the current install on stdout",
              options: [
                {
                  name: "--enabled-only",
                  description:
                    "Only include plugins currently in plugins.enabled",
                },
                {
                  name: "--name",
                  description: "Pack name to embed in the exported YAML",
                  args: {
                    name: "name",
                  },
                },
              ],
            },
            {
              name: "show",
              description:
                "Dry-run: parse and display a pack without installing",
              args: {
                name: "source",
                description:
                  "Path to a hermes-pack.yaml file, or an https:// URL",
                template: "filepaths",
              },
            },
          ],
        },
        {
          name: ["show", "info"],
          description:
            "Show details for a single plugin (including emits/listens)",
          args: {
            name: "name",
            description: "Plugin name or key to show",
          },
        },
      ],
    },
    {
      name: "curator",
      description:
        "Background skill maintenance (curator) — status, run, pause, pin",
      subcommands: [
        {
          name: "status",
          description: "Show curator status and skill stats",
        },
        {
          name: "usage",
          description:
            "Show usage telemetry for ALL skills (built-in, hub, agent) with provenance",
          options: [
            {
              name: "--sort",
              description:
                "Sort order: activity (most-used first, default), recent (most-recently-active first), or name (alphabetical)",
              args: {
                name: "sort",
                suggestions: ["activity", "recent", "name"],
              },
            },
            {
              name: "--provenance",
              description: "Only show skills of this origin",
              args: {
                name: "provenance",
                suggestions: ["agent", "bundled", "hub", "external"],
              },
            },
            {
              name: "--json",
              description: "Emit the full report as JSON instead of a table",
            },
          ],
        },
        {
          name: "run",
          description: "Trigger a curator review now",
          options: [
            {
              name: ["--sync", "--synchronous"],
              description:
                "Wait for the LLM review pass to finish (default for manual runs)",
            },
            {
              name: "--background",
              description:
                "Start the LLM review pass in a background thread and return immediately",
            },
            {
              name: "--dry-run",
              description:
                "Report only — no state changes, no archives, no consolidation (use this to preview what curator would do)",
            },
            {
              name: "--consolidate",
              description:
                "Force the LLM umbrella-building consolidation pass on for this run, overriding the config default (off)",
            },
          ],
        },
        {
          name: "pause",
          description: "Pause the curator until resumed",
        },
        {
          name: "resume",
          description: "Resume a paused curator",
        },
        {
          name: "pin",
          description: "Pin a skill so the curator never auto-transitions it",
          args: {
            name: "skill",
            description: "Skill name",
          },
        },
        {
          name: "unpin",
          description: "Unpin a skill",
          args: {
            name: "skill",
            description: "Skill name",
          },
        },
        {
          name: "lock",
          description: "Lock a skill so the agent cannot change it",
          args: {
            name: "skill",
            description: "Skill name",
          },
        },
        {
          name: "unlock",
          description: "Lift a content lock",
          args: {
            name: "skill",
            description: "Skill name",
          },
        },
        {
          name: "list-unmanaged",
          description:
            "List curation-eligible skills with no provenance marker",
        },
        {
          name: "adopt",
          description:
            "Hand unmanaged skills to the curator (provenance is a user declaration)",
          options: [
            {
              name: "--all-unmanaged",
              description:
                "Adopt every curation-eligible skill that has no provenance marker",
            },
            {
              name: "--dry-run",
              description:
                "List what would be adopted without writing anything",
            },
            {
              name: "--yes",
              description: "Skip the confirmation prompt for --all-unmanaged",
            },
          ],
          args: {
            name: "skill",
            description: "Skill name(s) to adopt",
            isOptional: true,
            isVariadic: true,
          },
        },
        {
          name: "restore",
          description: "Restore an archived skill",
          args: {
            name: "skill",
            description: "Skill name",
          },
        },
        {
          name: "list-archived",
          description: "List archived skills",
        },
        {
          name: "archive",
          description:
            "Manually archive a skill (move to .archive/, excluded from prompt)",
          args: {
            name: "skill",
            description: "Skill name",
          },
        },
        {
          name: "prune",
          description:
            "Bulk-archive curator-managed skills idle for >= N days (default: curator.archive_after_days)",
          options: [
            {
              name: "--days",
              description:
                "Archive skills idle for at least N days (default: curator.archive_after_days, 30)",
              args: {
                name: "days",
              },
            },
            {
              name: ["-y", "--yes"],
              description: "Skip the confirmation prompt",
            },
            {
              name: "--dry-run",
              description: "Show what would be archived without doing it",
            },
          ],
        },
        {
          name: "backup",
          description:
            "Take a manual tar.gz snapshot of ~/.hermes/skills/ (curator also does this automatically before every real run)",
          options: [
            {
              name: "--reason",
              description:
                "Free-text label stored in manifest.json (default: 'manual')",
              args: {
                name: "reason",
              },
            },
          ],
        },
        {
          name: "rollback",
          description:
            "Restore ~/.hermes/skills/ from a curator snapshot, or a single mutation by ledger entry id (see `hermes curator ledger`)",
          options: [
            {
              name: "--list",
              description:
                "List available snapshots and exit without restoring",
            },
            {
              name: "--id",
              description:
                "Snapshot id to restore (see `--list`); default: newest",
              args: {
                name: "backup_id",
              },
            },
            {
              name: ["-y", "--yes"],
              description: "Skip confirmation prompt",
            },
          ],
          args: {
            name: "entry_id",
            description:
              "Ledger entry id for single-mutation rollback (from `hermes curator ledger`)",
            isOptional: true,
          },
        },
        {
          name: "ledger",
          description:
            "List the per-mutation skill audit ledger (all actors: curator/agent/user)",
          options: [
            {
              name: "--skill",
              description: "Only show entries for this skill",
              args: {
                name: "skill",
              },
            },
            {
              name: "--limit",
              description: "Max entries to show (default: 20)",
              args: {
                name: "limit",
              },
            },
            {
              name: "--compact",
              description:
                "Rewrite the ledger dropping unchanged paths from every entry (ids and rollback preserved)",
            },
          ],
        },
        {
          name: "purge",
          description:
            "Delete archived skills older than curator.archive_ttl_days (explicit only — never automatic; recorded in the ledger)",
          options: [
            {
              name: "--days",
              description:
                "Override curator.archive_ttl_days for this invocation",
              args: {
                name: "days",
              },
            },
            {
              name: "--dry-run",
              description: "Show what would be purged without deleting",
            },
            {
              name: ["-y", "--yes"],
              description: "Skip the confirmation prompt",
            },
          ],
        },
      ],
    },
    {
      name: "pets",
      description: "Browse, install, and select petdex animated pets",
      subcommands: [
        {
          name: "list",
          description: "Browse the petdex gallery",
          options: [
            {
              name: "--installed",
              description: "Only show installed pets",
            },
            {
              name: "--limit",
              description: "Max rows (0 = all)",
              args: {
                name: "limit",
              },
            },
          ],
          args: {
            name: "query",
            description: "Filter by slug/name substring",
            isOptional: true,
          },
        },
        {
          name: "install",
          description: "Install a pet from the gallery",
          options: [
            {
              name: "--force",
              description: "Re-download even if present",
            },
            {
              name: "--select",
              description: "Make it the active pet",
            },
          ],
          args: {
            name: "slug",
            description: "Pet slug (e.g. boba)",
          },
        },
        {
          name: "select",
          description: "Set the active pet (writes display.pet.*)",
          args: {
            name: "slug",
            description: "Pet slug (omit for picker)",
            isOptional: true,
          },
        },
        {
          name: "show",
          description: "Animate the active pet in the terminal",
          options: [
            {
              name: "--state",
              description: "Single state: idle/run/review/failed/wave/jump",
              args: {
                name: "state",
              },
            },
            {
              name: "--cycle",
              description: "Cycle through all states",
            },
            {
              name: "--once",
              description: "Play once instead of looping",
            },
            {
              name: "--mode",
              description:
                "Override render mode (kitty/iterm/sixel/unicode/auto)",
              args: {
                name: "mode",
              },
            },
            {
              name: "--scale",
              description: "Override scale (0 = config)",
              args: {
                name: "scale",
              },
            },
          ],
          args: {
            name: "slug",
            description: "Pet slug (default: active)",
            isOptional: true,
          },
        },
        {
          name: "off",
          description: "Disable the pet display",
        },
        {
          name: "scale",
          description: "Resize the pet everywhere (display.pet.scale)",
          args: {
            name: "factor",
            description: "Scale factor, e.g. 0.5 (clamped 0.1–3.0)",
          },
        },
        {
          name: "remove",
          description: "Delete an installed pet",
          args: {
            name: "slug",
            description: "Pet slug",
          },
        },
        {
          name: "doctor",
          description: "Check pet setup + terminal graphics support",
        },
      ],
    },
    {
      name: ["journey", "learning", "memory-graph"],
      description: "Timeline of learned skills + memories over time",
      subcommands: [
        {
          name: "list",
          description: "List node ids (for delete/edit)",
          options: [
            {
              name: "--no-color",
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a learned skill (archived) or memory by node id",
          options: [
            {
              name: ["-y", "--yes"],
              description: "Skip the confirmation prompt",
            },
          ],
          args: {
            name: "node",
            description:
              "Node id (skill name, or a memory id exactly as `journey list` prints it)",
          },
        },
        {
          name: "edit",
          description: "Edit a learned skill or memory by node id in $EDITOR",
          args: {
            name: "node",
            description:
              "Node id (skill name, or a memory id exactly as `journey list` prints it)",
          },
        },
      ],
      options: [
        {
          name: "--reveal",
          description:
            "Render the timeline built up to this point (0=oldest, 1=now)",
          args: {
            name: "0..1",
          },
        },
        {
          name: "--play",
          description: "Animate the build-up over time (Ctrl-C to stop)",
        },
        {
          name: "--fps",
          description: "Animation frames per second for --play (default 12)",
          args: {
            name: "fps",
          },
        },
        {
          name: "--width",
          description: "Override render width in columns",
          args: {
            name: "width",
          },
        },
        {
          name: "--height",
          description: "Override render height in rows",
          args: {
            name: "height",
          },
        },
        {
          name: "--no-color",
          description: "Disable color output",
        },
        {
          name: "--json",
          description: "Print the raw graph payload as JSON and exit",
        },
      ],
    },
    {
      name: "memory",
      description: "Configure external memory provider",
      subcommands: [
        {
          name: "setup",
          description: "Interactive provider selection and configuration",
          args: {
            name: "provider",
            description:
              "Provider to configure directly (e.g. honcho), skipping the picker",
            isOptional: true,
          },
        },
        {
          name: "status",
          description: "Show current memory provider config",
        },
        {
          name: "off",
          description: "Disable external provider (built-in only)",
        },
        {
          name: "reset",
          description: "Erase all built-in memory (MEMORY.md and USER.md)",
          options: [
            {
              name: ["-y", "--yes"],
              description: "Skip confirmation prompt",
            },
            {
              name: "--target",
              description:
                "Which store to reset: 'all' (default), 'memory', or 'user'",
              args: {
                name: "target",
                suggestions: ["all", "memory", "user"],
              },
            },
          ],
        },
      ],
    },
    {
      name: "tools",
      description: "Configure which tools are enabled per platform",
      subcommands: [
        {
          name: "list",
          description: "Show all tools and their enabled/disabled status",
          options: [
            {
              name: "--platform",
              description: "Platform to show (default: cli)",
              args: {
                name: "platform",
              },
            },
          ],
        },
        {
          name: "disable",
          description: "Disable toolsets or MCP tools",
          options: [
            {
              name: "--platform",
              description: "Platform to apply to (default: cli)",
              args: {
                name: "platform",
              },
            },
          ],
          args: {
            name: "name",
            description:
              "Toolset name (e.g. web) or MCP tool in server:tool form",
            isVariadic: true,
          },
        },
        {
          name: "enable",
          description: "Enable toolsets or MCP tools",
          options: [
            {
              name: "--platform",
              description: "Platform to apply to (default: cli)",
              args: {
                name: "platform",
              },
            },
          ],
          args: {
            name: "name",
            description: "Toolset name or MCP tool in server:tool form",
            isVariadic: true,
          },
        },
        {
          name: "post-setup",
          description:
            "Run a provider's post-setup install hook (npm/pip/binary)",
          args: {
            name: "key",
            description:
              "Post-setup hook key (e.g. chromium, cua_driver, kittentts)",
          },
        },
      ],
      options: [
        {
          name: "--summary",
          description: "Print a summary of enabled tools per platform and exit",
        },
      ],
    },
    {
      name: "computer-use",
      description:
        "Manage the Computer Use (cua-driver) backend (macOS/Windows/Linux)",
      subcommands: [
        {
          name: "install",
          description:
            "Install or repair the cua-driver binary (macOS/Windows/Linux)",
          options: [
            {
              name: "--upgrade",
              description:
                "Reconcile cua-driver with Hermes' pinned PM package and repair host setup",
            },
          ],
        },
        {
          name: "status",
          description: "Check the selected cua-driver and its runtime contract",
        },
        {
          name: "doctor",
          description:
            "Run cua-driver `health_report` and surface the check matrix",
          options: [
            {
              name: "--include",
              description: "Run only the listed checks",
              args: {
                name: "check",
              },
              isRepeatable: true,
            },
            {
              name: "--skip",
              description: "Skip the listed checks",
              args: {
                name: "check",
              },
              isRepeatable: true,
            },
            {
              name: "--json",
              description:
                "Emit the raw structured payload as JSON (same shape as `tools/call`)",
            },
          ],
        },
        {
          name: "permissions",
          description:
            "Check or grant macOS Accessibility + Screen Recording (macOS)",
          subcommands: [
            {
              name: "status",
              description:
                "Report Accessibility + Screen Recording grant state (read-only)",
              options: [
                {
                  name: "--json",
                  description: "Emit the normalized permission payload as JSON",
                },
              ],
            },
            {
              name: "grant",
              description:
                "Request the grants (opens the dialog attributed to CuaDriver)",
            },
          ],
        },
        {
          name: "screen",
          description:
            "Bot Desktop: the headless screen this profile's computer_use drives (Linux)",
          subcommands: [
            {
              name: "status",
              description:
                "Show whether this profile's screen is installed/running and who holds control",
              options: [
                {
                  name: "--json",
                  description: "Emit the status payload as JSON",
                },
              ],
            },
            {
              name: "start",
              description: "Start this profile's screen",
            },
            {
              name: "stop",
              description:
                "Stop this profile's screen (hands control back to the agent first)",
              options: [
                {
                  name: "--force",
                  description:
                    "Stop even while a human holds control from Hermes Desktop",
                },
              ],
            },
            {
              name: "install",
              description:
                "Install TigerVNC + Xfce core via the host package manager",
              options: [
                {
                  name: ["-y", "--yes"],
                  description: "Do not ask before running the package manager",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "mcp",
      description: "Manage MCP server connections",
      subcommands: [
        {
          name: "add",
          description: "Add an MCP server (discovery-first install)",
          options: [
            {
              name: "--url",
              description: "HTTP/SSE endpoint URL",
              args: {
                name: "url",
              },
            },
            {
              name: "--command",
              description: "Stdio command (e.g. npx)",
              args: {
                name: "mcp_command",
              },
            },
            {
              name: "--args",
              description:
                "Arguments for stdio command; must be the last option",
              args: {
                name: "args",
                isOptional: true,
                isVariadic: true,
              },
            },
            {
              name: "--auth",
              description: "Auth method",
              args: {
                name: "auth",
                suggestions: ["oauth", "header"],
              },
            },
            {
              name: "--preset",
              description: "Known MCP preset name",
              args: {
                name: "preset",
              },
            },
            {
              name: "--connect-timeout",
              description:
                "Timeout in seconds for initial connection and tool discovery",
              args: {
                name: "connect_timeout",
              },
            },
            {
              name: "--env",
              description:
                "Environment variables for stdio servers (KEY=VALUE)",
              args: {
                name: "env",
                isOptional: true,
                isVariadic: true,
              },
            },
          ],
          args: {
            name: "name",
            description: "Server name (used as config key)",
          },
        },
        {
          name: ["remove", "rm"],
          description: "Remove an MCP server",
          args: {
            name: "name",
            description: "Server name to remove",
          },
        },
        {
          name: ["list", "ls"],
          description: "List configured MCP servers",
        },
        {
          name: "test",
          description: "Test MCP server connection",
          args: {
            name: "name",
            description: "Server name to test",
          },
        },
        {
          name: ["configure", "config"],
          description: "Toggle tool selection",
          args: {
            name: "name",
            description: "Server name to configure",
          },
        },
        {
          name: "login",
          description: "Force re-authentication for an OAuth-based MCP server",
          options: [
            {
              name: "--flow",
              description:
                "OAuth flow (overrides oauth.flow): browser PKCE or RFC 8628 device code",
              args: {
                name: "flow",
                suggestions: ["browser", "device"],
              },
            },
          ],
          args: {
            name: "name",
            description: "Server name to re-authenticate",
          },
        },
        {
          name: "reauth",
          description:
            "Re-authenticate one OAuth MCP server, or all of them (--all)",
          options: [
            {
              name: "--all",
              description:
                "Re-authenticate every OAuth server in config, one at a time",
            },
          ],
          args: {
            name: "name",
            description: "Server name to re-authenticate (omit with --all)",
            isOptional: true,
          },
        },
        {
          name: "picker",
          description:
            "Interactive catalog picker (also the default for `hermes mcp`)",
        },
        {
          name: "catalog",
          description:
            "List Nous-approved MCPs available for one-click install",
        },
        {
          name: "install",
          description:
            "Install a catalog MCP by name (e.g. `hermes mcp install deepwiki`)",
          args: {
            name: "identifier",
            description: "Catalog entry name (or `official/<name>`)",
          },
        },
      ],
    },
    {
      name: "connectors",
      description: "Manage hosted app connectors and their accounts",
      subcommands: [
        {
          name: ["list", "ls"],
          description: "Show every connector and whether it is connected",
        },
        {
          name: "accounts",
          description: "Show connected accounts",
          options: [
            {
              name: "--all",
              description: "Also show retired accounts",
            },
          ],
          args: {
            name: "app",
            description: "Only show accounts of this app",
            isOptional: true,
          },
        },
        {
          name: "connect",
          description: "Connect an app account in your browser",
          options: [
            {
              name: "--alias",
              description:
                "Name for a new account (for example work); with --reconnect, the name or label to repair",
              args: {
                name: "alias",
              },
            },
            {
              name: "--reconnect",
              description: "Repair an account that stopped working",
            },
            {
              name: "--force",
              description:
                "With --reconnect, sign in again even if the account is connected",
            },
          ],
          args: {
            name: "app",
            description: "App to connect, for example gmail",
          },
        },
        {
          name: "rename",
          description: "Rename an account",
          options: [
            {
              name: "--to",
              description: "New name for the account",
              args: {
                name: "to",
              },
              isRequired: true,
            },
          ],
          args: [
            {
              name: "app",
              description: "App the account belongs to",
            },
            {
              name: "name",
              description: "Current name or label of the account",
            },
          ],
        },
        {
          name: "disconnect",
          description: "Remove an account",
          options: [
            {
              name: "--alias",
              description: "Name or label of the account to remove",
              args: {
                name: "alias",
              },
            },
            {
              name: ["-y", "--yes"],
              description: "Skip the confirmation prompt",
            },
          ],
          args: {
            name: "app",
            description: "App the account belongs to",
          },
        },
      ],
    },
    {
      name: "sessions",
      description:
        "Manage session history (list, rename, export, prune, delete)",
      subcommands: [
        {
          name: "list",
          description: "List recent sessions",
          options: [
            {
              name: "--source",
              description: "Filter by source (cli, telegram, discord, etc.)",
              args: {
                name: "source",
              },
            },
            {
              name: "--limit",
              description: "Max sessions to show",
              args: {
                name: "limit",
              },
            },
            {
              name: "--workspace",
              description:
                "Only sessions in one workspace: a git repo root or project dir (matched by path substring or basename)",
              args: {
                name: "needle",
                template: "folders",
              },
            },
          ],
        },
        {
          name: "export",
          description: "Export sessions to JSONL, Markdown, or QMD",
          options: [
            {
              name: "--format",
              description: "Export format (default: jsonl)",
              args: {
                name: "format",
                suggestions: ["jsonl", "md", "qmd", "html", "trace"],
              },
            },
            {
              name: "--upload",
              description:
                "Trace only: upload to your Hugging Face traces dataset instead of writing a local file (needs HF_TOKEN)",
            },
            {
              name: "--public",
              description:
                "Trace --upload only: create/update a public dataset instead of private",
            },
            {
              name: "--no-redact",
              description:
                "Trace only: skip the forced secret redaction; only use after manual review",
            },
            {
              name: "--only",
              description:
                "Export only a filtered view (user-prompts: one prompt record per line for jsonl, headed sections for md)",
              args: {
                name: "only",
                suggestions: ["user-prompts"],
              },
            },
            {
              name: "--session-id",
              description: "Session ID or unique prefix to export",
              args: {
                name: "session_id",
              },
            },
            {
              name: "--older-than",
              description:
                "Only export sessions older than AGE (duration like '5h'/'2d', bare number of days, or an ISO timestamp)",
              args: {
                name: "age",
              },
            },
            {
              name: "--newer-than",
              description:
                "Only match sessions active within the last AGE (e.g. '5h', '2d') or after an ISO timestamp",
              args: {
                name: "age",
              },
            },
            {
              name: "--before",
              description:
                "Only match sessions started before TIME (duration ago like '5h', or ISO timestamp like '2026-07-05 14:30')",
              args: {
                name: "time",
              },
            },
            {
              name: "--after",
              description:
                "Only match sessions started at/after TIME (duration ago like '5h', or ISO timestamp)",
              args: {
                name: "time",
              },
            },
            {
              name: "--source",
              description: "Only match sessions from this source",
              args: {
                name: "source",
              },
            },
            {
              name: "--title",
              description:
                "Only match sessions whose title contains this substring",
              args: {
                name: "title",
              },
            },
            {
              name: "--end-reason",
              description: "Only match sessions with this end reason",
              args: {
                name: "end_reason",
              },
            },
            {
              name: "--cwd",
              description:
                "Only match sessions whose working directory is under this path",
              args: {
                name: "cwd",
                template: "folders",
              },
            },
            {
              name: "--min-messages",
              description: "Only match sessions with >= N messages",
              args: {
                name: "min_messages",
              },
            },
            {
              name: "--max-messages",
              description: "Only match sessions with <= N messages",
              args: {
                name: "max_messages",
              },
            },
            {
              name: "--model",
              description:
                "Only match sessions whose model name contains this substring (e.g. 'sonnet', 'gpt-5', 'hermes')",
              args: {
                name: "model",
              },
            },
            {
              name: "--provider",
              description:
                "Only match sessions billed through this provider (e.g. openrouter, anthropic, nous)",
              args: {
                name: "provider",
              },
            },
            {
              name: "--user",
              description: "Only match sessions from this user ID",
              args: {
                name: "user",
              },
            },
            {
              name: "--chat-id",
              description: "Only match sessions from this chat/channel ID",
              args: {
                name: "chat_id",
              },
            },
            {
              name: "--chat-type",
              description:
                "Only match sessions with this chat type (e.g. dm, group)",
              args: {
                name: "chat_type",
              },
            },
            {
              name: "--branch",
              description:
                "Only match sessions whose git branch contains this substring",
              args: {
                name: "branch",
              },
            },
            {
              name: "--min-tokens",
              description:
                "Only match sessions with >= N total tokens (input+output)",
              args: {
                name: "min_tokens",
              },
            },
            {
              name: "--max-tokens",
              description:
                "Only match sessions with <= N total tokens (input+output)",
              args: {
                name: "max_tokens",
              },
            },
            {
              name: "--min-cost",
              description:
                "Only match sessions costing >= N USD (actual or estimated)",
              args: {
                name: "min_cost",
              },
            },
            {
              name: "--max-cost",
              description:
                "Only match sessions costing <= N USD (actual or estimated)",
              args: {
                name: "max_cost",
              },
            },
            {
              name: "--min-tool-calls",
              description: "Only match sessions with >= N tool calls",
              args: {
                name: "min_tool_calls",
              },
            },
            {
              name: "--max-tool-calls",
              description: "Only match sessions with <= N tool calls",
              args: {
                name: "max_tool_calls",
              },
            },
            {
              name: "--dry-run",
              description: "List matching sessions without changing anything",
            },
            {
              name: ["-y", "--yes"],
              description: "Skip confirmation",
            },
            {
              name: "--redact",
              description:
                "Redact secrets (API keys, tokens, credentials) from exported content",
            },
            {
              name: "--lineage",
              description:
                "Md/qmd only: export one row or its compression lineage",
              args: {
                name: "lineage",
                suggestions: ["single", "logical"],
              },
            },
            {
              name: "--delete-after-verified",
              description:
                "Md/qmd only: after verified single-session export, delete that session (needs --yes)",
            },
            {
              name: "--force",
              description: "Md/qmd only: overwrite an existing export file",
            },
          ],
          args: {
            name: "output",
            description:
              "Where to write. jsonl/html/trace: a file path, or a directory (existing, or ending in /) to write a default-named file into",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "delete",
          description: "Delete a specific session",
          options: [
            {
              name: ["-y", "--yes"],
              description: "Skip confirmation",
            },
          ],
          args: {
            name: "session_id",
            description: "Session ID to delete",
          },
        },
        {
          name: "prune",
          description:
            "Delete old sessions (filterable by time window, source, title, ...)",
          options: [
            {
              name: "--older-than",
              description: "Delete sessions older than AGE",
              args: {
                name: "age",
              },
            },
            {
              name: "--newer-than",
              description:
                "Only match sessions active within the last AGE (e.g. '5h', '2d') or after an ISO timestamp",
              args: {
                name: "age",
              },
            },
            {
              name: "--before",
              description:
                "Only match sessions started before TIME (duration ago like '5h', or ISO timestamp like '2026-07-05 14:30')",
              args: {
                name: "time",
              },
            },
            {
              name: "--after",
              description:
                "Only match sessions started at/after TIME (duration ago like '5h', or ISO timestamp)",
              args: {
                name: "time",
              },
            },
            {
              name: "--source",
              description: "Only match sessions from this source",
              args: {
                name: "source",
              },
            },
            {
              name: "--title",
              description:
                "Only match sessions whose title contains this substring",
              args: {
                name: "title",
              },
            },
            {
              name: "--end-reason",
              description: "Only match sessions with this end reason",
              args: {
                name: "end_reason",
              },
            },
            {
              name: "--cwd",
              description:
                "Only match sessions whose working directory is under this path",
              args: {
                name: "cwd",
                template: "folders",
              },
            },
            {
              name: "--min-messages",
              description: "Only match sessions with >= N messages",
              args: {
                name: "min_messages",
              },
            },
            {
              name: "--max-messages",
              description: "Only match sessions with <= N messages",
              args: {
                name: "max_messages",
              },
            },
            {
              name: "--model",
              description:
                "Only match sessions whose model name contains this substring (e.g. 'sonnet', 'gpt-5', 'hermes')",
              args: {
                name: "model",
              },
            },
            {
              name: "--provider",
              description:
                "Only match sessions billed through this provider (e.g. openrouter, anthropic, nous)",
              args: {
                name: "provider",
              },
            },
            {
              name: "--user",
              description: "Only match sessions from this user ID",
              args: {
                name: "user",
              },
            },
            {
              name: "--chat-id",
              description: "Only match sessions from this chat/channel ID",
              args: {
                name: "chat_id",
              },
            },
            {
              name: "--chat-type",
              description:
                "Only match sessions with this chat type (e.g. dm, group)",
              args: {
                name: "chat_type",
              },
            },
            {
              name: "--branch",
              description:
                "Only match sessions whose git branch contains this substring",
              args: {
                name: "branch",
              },
            },
            {
              name: "--min-tokens",
              description:
                "Only match sessions with >= N total tokens (input+output)",
              args: {
                name: "min_tokens",
              },
            },
            {
              name: "--max-tokens",
              description:
                "Only match sessions with <= N total tokens (input+output)",
              args: {
                name: "max_tokens",
              },
            },
            {
              name: "--min-cost",
              description:
                "Only match sessions costing >= N USD (actual or estimated)",
              args: {
                name: "min_cost",
              },
            },
            {
              name: "--max-cost",
              description:
                "Only match sessions costing <= N USD (actual or estimated)",
              args: {
                name: "max_cost",
              },
            },
            {
              name: "--min-tool-calls",
              description: "Only match sessions with >= N tool calls",
              args: {
                name: "min_tool_calls",
              },
            },
            {
              name: "--max-tool-calls",
              description: "Only match sessions with <= N tool calls",
              args: {
                name: "max_tool_calls",
              },
            },
            {
              name: "--dry-run",
              description: "List matching sessions without changing anything",
            },
            {
              name: ["-y", "--yes"],
              description: "Skip confirmation",
            },
            {
              name: "--include-archived",
              description:
                "Also delete archived sessions (excluded by default)",
            },
            {
              name: "--include-pinned",
              description:
                "Also delete pinned sessions (excluded by default — pin is a keep flag)",
            },
            {
              name: "--never-active",
              description:
                "Instead of ended sessions, delete keyed gateway rows that were opened and never used and are older than AGE",
            },
            {
              name: "--force",
              description:
                "With no gateway running: run even while another Hermes process (Desktop, dashboard, cron) holds state.db",
            },
          ],
        },
        {
          name: "archive",
          description:
            "Bulk-archive (soft-hide) sessions matching filters — no deletion",
          options: [
            {
              name: "--older-than",
              description:
                "Only archive sessions older than AGE (duration like '5h'/'2d', bare number of days, or ISO timestamp)",
              args: {
                name: "age",
              },
            },
            {
              name: "--newer-than",
              description:
                "Only match sessions active within the last AGE (e.g. '5h', '2d') or after an ISO timestamp",
              args: {
                name: "age",
              },
            },
            {
              name: "--before",
              description:
                "Only match sessions started before TIME (duration ago like '5h', or ISO timestamp like '2026-07-05 14:30')",
              args: {
                name: "time",
              },
            },
            {
              name: "--after",
              description:
                "Only match sessions started at/after TIME (duration ago like '5h', or ISO timestamp)",
              args: {
                name: "time",
              },
            },
            {
              name: "--source",
              description: "Only match sessions from this source",
              args: {
                name: "source",
              },
            },
            {
              name: "--title",
              description:
                "Only match sessions whose title contains this substring",
              args: {
                name: "title",
              },
            },
            {
              name: "--end-reason",
              description: "Only match sessions with this end reason",
              args: {
                name: "end_reason",
              },
            },
            {
              name: "--cwd",
              description:
                "Only match sessions whose working directory is under this path",
              args: {
                name: "cwd",
                template: "folders",
              },
            },
            {
              name: "--min-messages",
              description: "Only match sessions with >= N messages",
              args: {
                name: "min_messages",
              },
            },
            {
              name: "--max-messages",
              description: "Only match sessions with <= N messages",
              args: {
                name: "max_messages",
              },
            },
            {
              name: "--model",
              description:
                "Only match sessions whose model name contains this substring (e.g. 'sonnet', 'gpt-5', 'hermes')",
              args: {
                name: "model",
              },
            },
            {
              name: "--provider",
              description:
                "Only match sessions billed through this provider (e.g. openrouter, anthropic, nous)",
              args: {
                name: "provider",
              },
            },
            {
              name: "--user",
              description: "Only match sessions from this user ID",
              args: {
                name: "user",
              },
            },
            {
              name: "--chat-id",
              description: "Only match sessions from this chat/channel ID",
              args: {
                name: "chat_id",
              },
            },
            {
              name: "--chat-type",
              description:
                "Only match sessions with this chat type (e.g. dm, group)",
              args: {
                name: "chat_type",
              },
            },
            {
              name: "--branch",
              description:
                "Only match sessions whose git branch contains this substring",
              args: {
                name: "branch",
              },
            },
            {
              name: "--min-tokens",
              description:
                "Only match sessions with >= N total tokens (input+output)",
              args: {
                name: "min_tokens",
              },
            },
            {
              name: "--max-tokens",
              description:
                "Only match sessions with <= N total tokens (input+output)",
              args: {
                name: "max_tokens",
              },
            },
            {
              name: "--min-cost",
              description:
                "Only match sessions costing >= N USD (actual or estimated)",
              args: {
                name: "min_cost",
              },
            },
            {
              name: "--max-cost",
              description:
                "Only match sessions costing <= N USD (actual or estimated)",
              args: {
                name: "max_cost",
              },
            },
            {
              name: "--min-tool-calls",
              description: "Only match sessions with >= N tool calls",
              args: {
                name: "min_tool_calls",
              },
            },
            {
              name: "--max-tool-calls",
              description: "Only match sessions with <= N tool calls",
              args: {
                name: "max_tool_calls",
              },
            },
            {
              name: "--dry-run",
              description: "List matching sessions without changing anything",
            },
            {
              name: ["-y", "--yes"],
              description: "Skip confirmation",
            },
            {
              name: "--include-open",
              description:
                "Also archive never-ended sessions, e.g. Desktop chats",
            },
          ],
        },
        {
          name: "optimize",
          description:
            "Reclaim disk space: merge FTS5 segments + VACUUM (no data change)",
          options: [
            {
              name: "--force",
              description:
                "Run even while another Hermes process (gateway, Desktop, dashboard, cron) holds state.db",
            },
          ],
        },
        {
          name: "clean-markers",
          description:
            "Permanently clear stale tool-call marker content left by sessions from before #78148",
          options: [
            {
              name: "--dry-run",
              description: "Report the affected row count without writing",
            },
            {
              name: "--no-backup",
              description:
                "Skip the timestamped state.db backup taken before writing (not recommended)",
            },
          ],
        },
        {
          name: "optimize-storage",
          description:
            "Migrate the search index to the compact v23 layout (reclaims disk on large DBs)",
          options: [
            {
              name: "--no-vacuum",
              description:
                "Skip the final VACUUM (index is rebuilt but freed pages aren't returned to the OS until a later VACUUM)",
            },
            {
              name: ["-y", "--yes"],
              description: "Skip the disk-space confirmation prompt",
            },
            {
              name: "--force",
              description:
                "Run even while another Hermes process (gateway, Desktop, dashboard, cron) holds state.db",
            },
          ],
        },
        {
          name: "repair",
          description:
            "Repair a malformed state.db schema so hidden sessions reappear",
          options: [
            {
              name: "--check-only",
              description:
                "Only report whether the database opens cleanly; do not modify it",
            },
            {
              name: "--no-backup",
              description: "Skip the timestamped backup copy (not recommended)",
            },
          ],
        },
        {
          name: "set-journal-mode",
          description:
            "Convert state.db between journal_mode=WAL and DELETE offline (every holder stopped)",
          options: [
            {
              name: "--db",
              description:
                "Convert another Hermes SQLite store (e.g. kanban.db) instead of the profile's state.db",
              args: {
                name: "path",
                template: "filepaths",
              },
            },
            {
              name: "--force",
              description:
                "Proceed when the holder scan itself fails (cannot prove the store is quiet) after stopping every Hermes process yourself",
            },
          ],
          args: {
            name: "mode",
            description: "Target journal mode",
            suggestions: ["delete", "wal"],
          },
        },
        {
          name: "repair-routing",
          description:
            "Re-stamp gateway sessions that lost their routing identity",
          options: [
            {
              name: "--apply",
              description: "Perform the adoptions (default: report only)",
            },
            {
              name: "--max-gap-seconds",
              description:
                "Window between a keyed predecessor's last activity and an orphan's start for them to count as the same conversation (default: 900)",
              args: {
                name: "max_gap_seconds",
              },
            },
          ],
        },
        {
          name: "repair-profiles",
          description:
            "Settle session/routing state that landed under the wrong profile",
          options: [
            {
              name: "--apply",
              description: "Perform the repairs (default: report only)",
            },
            {
              name: "--json",
              description: "Machine-readable report",
            },
            {
              name: ["-y", "--yes"],
              description: "Skip the confirmation prompt",
            },
            {
              name: "--legacy-main",
              description:
                "What to do with agent:main rows found inside a named profile's store: 'rekey' them to that profile, 'move' them to the default store, or 'report'",
              args: {
                name: "legacy_main",
                suggestions: ["report", "rekey", "move"],
              },
            },
          ],
        },
        {
          name: "repair-prompts",
          description:
            "Report or clear stored system prompts degraded to a reduced-toolset build",
          options: [
            {
              name: "--apply",
              description: "Clear the verified prompts (default: report only)",
            },
            {
              name: "--json",
              description:
                "Machine-readable output; with --apply, apply without an interactive confirmation",
            },
          ],
          args: {
            name: "session_id",
            description:
              "Destructive override: clear this session even when its stored prompt is healthy",
            isOptional: true,
          },
        },
        {
          name: "refresh-prompts",
          description:
            "Make continuing sessions rebuild their system prompt on their next turn",
          options: [
            {
              name: "--session",
              description: "Refresh only this session (id or unique prefix)",
              args: {
                name: "session_id",
              },
            },
            {
              name: "--json",
              description: "Machine-readable output",
            },
          ],
        },
        {
          name: "recover",
          description:
            "Rebuild canonical session data into a separate clean database",
          options: [
            {
              name: "--source",
              description:
                "Source state.db or preserved backup to inspect/recover",
              args: {
                name: "source",
                template: "filepaths",
              },
              isRequired: true,
            },
            {
              name: "--output",
              description:
                "New recovery database path (required unless --inspect-only)",
              args: {
                name: "output",
                template: "filepaths",
              },
            },
            {
              name: "--inspect-only",
              description:
                "Only report canonical table readability; do not create an output database",
            },
            {
              name: "--work-dir",
              description:
                "Existing directory for the disposable source copy (defaults beside the output)",
              args: {
                name: "work_dir",
                template: "folders",
              },
            },
            {
              name: "--chunk-size",
              description: "Rows committed per recovery batch (default: 1000)",
              args: {
                name: "chunk_size",
              },
            },
            {
              name: "--allow-partial",
              description:
                "Best-effort salvage across damaged row ranges; the output remains separate and every skipped range is recorded",
            },
            {
              name: "--report",
              description:
                "JSON report path (defaults to <output>.recovery.json)",
              args: {
                name: "report",
                template: "filepaths",
              },
            },
          ],
        },
        {
          name: "stats",
          description: "Show session store statistics",
        },
        {
          name: "rename",
          description: "Set or change a session's title",
          args: [
            {
              name: "session_id",
              description: "Session ID to rename",
            },
            {
              name: "title",
              description: "New title for the session",
              isVariadic: true,
            },
          ],
        },
        {
          name: "discard",
          description:
            "Acknowledge turns lost in a gateway crash (unknown admissions) so the session runs again",
          options: [
            {
              name: "--admission",
              description:
                "Discard only this unknown admission (repeatable; default: every unknown admission)",
              args: {
                name: "id",
              },
              isRepeatable: true,
            },
            {
              name: ["-y", "--yes"],
              description:
                "Do not ask for confirmation (required when stdin is not a TTY)",
            },
          ],
          args: {
            name: "session",
            description: "Session ID or title",
          },
        },
        {
          name: "adopt",
          description:
            "Bring this profile's pre-gateway chats under its gateway (run on the host)",
          options: [
            {
              name: "--dry-run",
              description: "Only count what would be adopted",
            },
          ],
        },
        {
          name: "pin",
          description:
            "Pin session(s) — durable keep flag, exempt from auto-archive",
          args: {
            name: "session_ids",
            description: "Session ID(s) or unique prefix(es) to pin",
            isVariadic: true,
          },
        },
        {
          name: "unpin",
          description: "Remove the pin (durable keep flag) from session(s)",
          args: {
            name: "session_ids",
            description: "Session ID(s) or unique prefix(es) to unpin",
            isVariadic: true,
          },
        },
        {
          name: "pinned",
          description: "List pinned sessions",
          options: [
            {
              name: "--json",
              description:
                "Emit machine-readable JSON (for backup/restore scripting)",
            },
          ],
        },
        {
          name: "retitle-skills",
          description:
            "Re-title sessions whose auto-title came from a /skill's own text",
          options: [
            {
              name: "--apply",
              description: "Write the new titles (default: dry run)",
            },
            {
              name: "--limit",
              description: "Maximum sessions to examine (default: 200)",
              args: {
                name: "limit",
              },
            },
          ],
        },
        {
          name: "browse",
          description:
            "Interactive session picker — browse, search, and resume sessions",
          options: [
            {
              name: "--source",
              description: "Filter by source (cli, telegram, discord, etc.)",
              args: {
                name: "source",
              },
            },
            {
              name: "--limit",
              description: "Max sessions to load (default: 500)",
              args: {
                name: "limit",
              },
            },
          ],
        },
        {
          name: "import",
          description: "Import a Claude Code or Codex CLI session into Hermes",
          options: [
            {
              name: "--from",
              description:
                "Which tool to import from (default: pick across both)",
              args: {
                name: "from_source",
                suggestions: ["claude", "codex"],
              },
            },
          ],
          args: {
            name: "path",
            description:
              "Path to a specific session JSONL file (skips the picker)",
            isOptional: true,
            template: "filepaths",
          },
        },
      ],
    },
    {
      name: "insights",
      description: "Show usage insights and analytics",
      options: [
        {
          name: "--days",
          description: "Number of days to analyze (default: 30)",
          args: {
            name: "days",
          },
        },
        {
          name: "--source",
          description: "Filter by platform (cli, telegram, discord, etc.)",
          args: {
            name: "source",
          },
        },
      ],
    },
    {
      name: "usage",
      description:
        "Show account rate-limit windows (the /usage block) without starting a session",
      options: [
        {
          name: "--provider",
          description:
            "Provider to query (default: the configured model provider)",
          args: {
            name: "provider",
          },
        },
        {
          name: "--json",
          description:
            "Print one JSON document instead of the human-readable block",
        },
      ],
    },
    {
      name: "monitoring",
      description: "Inspect gateway monitoring (health & diagnostics export)",
      subcommands: [
        {
          name: "status",
          description:
            "Show monitoring settings, export state, and redaction posture",
        },
      ],
    },
    {
      name: "vault",
      description:
        "Manage the local encrypted autofill vault (add/list/rm credentials)",
      subcommands: [
        {
          name: "add",
          description:
            "Save a login, card or address ahead of time (optional: the agent asks you on the page when it needs one)",
          options: [
            {
              name: "--kind",
              description: "Item kind (interactive prompt when omitted)",
              args: {
                name: "kind",
                suggestions: ["login", "payment", "address"],
              },
            },
          ],
        },
        {
          name: "list",
          description: "List vault items (metadata only, never values)",
        },
        {
          name: "rm",
          description: "Remove a vault item by handle",
          args: {
            name: "handle",
            description: "Item handle (see `hermes vault list`)",
          },
        },
        {
          name: "sources",
          description:
            "Show detected password managers (1Password, Bitwarden); they are on automatically",
          options: [
            {
              name: "--disable",
              description:
                "Stop using a detected manager: onepassword | bitwarden",
              args: {
                name: "name",
              },
            },
            {
              name: "--enable",
              description: "Undo --disable",
              args: {
                name: "name",
              },
            },
          ],
        },
        {
          name: "key",
          description:
            "Show where the local vault key is stored (vault.key file or OS keychain)",
          subcommands: [
            {
              name: "migrate",
              description:
                "Move the vault key to the OS keychain or back to vault.key (verified before the old copy is removed)",
              options: [
                {
                  name: "--to",
                  description: "Destination for the key",
                  args: {
                    name: "to",
                    suggestions: ["keychain", "file"],
                  },
                  isRequired: true,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "pm",
      description:
        "Manage pinned tools, Python dependency environments, and their diagnostics",
      subcommands: [
        {
          name: "lock",
          description:
            "Relock uv.lock from pyproject.toml (or --bump a tool pin in pm/lock.json)",
          options: [
            {
              name: "--bump",
              description:
                "Pin tool NAME at VERSION in pm/lock.json instead of relocking uv.lock",
              args: {
                name: "name",
              },
            },
          ],
          args: {
            name: "version",
            description: "The tool version (only with --bump)",
            isOptional: true,
          },
        },
        {
          name: "install",
          description:
            "Install packages (default: all required + optional defaults)",
          options: [
            {
              name: "--extra",
              description:
                "Enable a declared dependency extra in the venv (repeatable)",
              args: {
                name: "name",
              },
              isRepeatable: true,
            },
            {
              name: "--without",
              description:
                "Leave an optional default package or a recorded extra outside [all] out of this and every later default install and update",
              args: {
                name: "name",
              },
              isRepeatable: true,
            },
            {
              name: "--tools-only",
              description:
                "Install the tool closure, put it on PATH, and stop before the venv sync",
            },
            {
              name: "--trust-recorded",
              description:
                "Trust the recorded tool digest instead of re-hashing every entry. shell activation only. a deliberate install re-checks the bytes",
            },
            {
              name: "--test-environment",
              description:
                "Also make this checkout's isolated test environment current (activation)",
              args: {
                name: "extras",
                isOptional: true,
              },
            },
            {
              name: "--target",
              description:
                "Stage for a cross target (e.g. linux-arm64-bionic on a glibc CI host); requires explicit package names",
              args: {
                name: "target",
                suggestions: [
                  "win32-x64",
                  "win32-arm64",
                  "linux-x64",
                  "linux-arm64",
                  "linux-x64-musl",
                  "linux-arm64-musl",
                  "linux-arm64-bionic",
                  "darwin-x64",
                  "darwin-arm64",
                ],
              },
            },
          ],
          args: {
            name: "names",
            isOptional: true,
            isVariadic: true,
          },
        },
        {
          name: "env",
          description: "Print composed env of installed packages",
          args: {
            name: "names",
            isOptional: true,
            isVariadic: true,
          },
        },
        {
          name: "doctor",
          description: "Check installed state against the lockfile",
          options: [
            {
              name: "--repair",
              description:
                "Remove corrupt entries from PM's uv cache so they are fetched again",
            },
          ],
        },
        {
          name: "repair",
          description:
            "Rebuild the recorded dependency environment without changing its graph",
        },
        {
          name: "environment",
          description:
            "Make a named side environment current and print its python",
          options: [
            {
              name: "--extra",
              args: {
                name: "extra",
              },
              isRepeatable: true,
            },
            {
              name: "--requirement",
              args: {
                name: "req",
              },
              isRepeatable: true,
            },
          ],
          args: {
            name: "name",
          },
        },
        {
          name: "gc",
          description: "Remove store entries nothing references",
        },
        {
          name: "bundle",
          description:
            "Stage a payload (repo+store+facts+relocatable venv) into --out",
          options: [
            {
              name: "--out",
              args: {
                name: "out",
                template: "folders",
              },
              isRequired: true,
            },
            {
              name: "--ref",
              description: "Git ref for the repo snapshot (default HEAD)",
              args: {
                name: "ref",
              },
            },
            {
              name: "--cache",
              description:
                "Persistent build cache (default: UV_CACHE_DIR or PM's shared cache)",
              args: {
                name: "cache",
                template: "folders",
              },
            },
          ],
        },
        {
          name: "status",
          description: "Print the latest pm sync receipt (machine-readable)",
        },
        {
          name: "update",
          description: "Resolve latest versions and re-pin the lockfile",
          options: [
            {
              name: "--check",
              description:
                "Dry-run: print what would change, write nothing (exit 1 if updates exist)",
            },
            {
              name: "--target",
              description:
                "Resolve for a different target instead of this machine (e.g. win32-arm64)",
              args: {
                name: "target",
                suggestions: [
                  "win32-x64",
                  "win32-arm64",
                  "linux-x64",
                  "linux-arm64",
                  "linux-x64-musl",
                  "linux-arm64-musl",
                  "linux-arm64-bionic",
                  "darwin-x64",
                  "darwin-arm64",
                ],
              },
            },
            {
              name: "--skip-target",
              description:
                "Leave TARGET's pins as they are, e.g. linux-arm64-bionic while the termux pool lags upstream (repeatable)",
              args: {
                name: "target",
                suggestions: [
                  "win32-x64",
                  "win32-arm64",
                  "linux-x64",
                  "linux-arm64",
                  "linux-x64-musl",
                  "linux-arm64-musl",
                  "linux-arm64-bionic",
                  "darwin-x64",
                  "darwin-arm64",
                ],
              },
              isRepeatable: true,
            },
            {
              name: "--uv",
              description: "Also refresh uv.lock + venv (uv update + sync)",
            },
            {
              name: "--npm",
              description: "Also refresh package-lock.json (npm update)",
            },
            {
              name: "--termux",
              description:
                "Repin the termux pool archives the pool has retired (the runtime-lib table + the bionic lock rows); --check reports without writing",
            },
          ],
          args: {
            name: "names",
            description:
              "Packages to check/update (default: all with a latest source)",
            isOptional: true,
            isVariadic: true,
          },
        },
      ],
    },
    {
      name: "update",
      description: "Update Hermes Agent to the latest version",
      options: [
        {
          name: "--gateway",
          description:
            "Gateway mode: use file-based IPC for prompts instead of stdin (used internally by /update)",
        },
        {
          name: "--check",
          description:
            "Check whether an update is available without installing anything",
        },
        {
          name: "--plan",
          description:
            "Show the update plan and exit without changing anything: install kind, every running Hermes service across all profiles with its supervisor and running code version, and how each will be restarted",
        },
        {
          name: "--list-venv-holders",
          description:
            "Print the processes the Windows venv-holder guard would refuse on as a JSON list [{pid, exe, argv, kind}] and exit: 0 when the venv is free, 3 when holders are present",
        },
        {
          name: "--no-backup",
          description:
            "Skip ALL pre-update backups for this run (both the quick state snapshot and the full zip; overrides updates.pre_update_backup)",
        },
        {
          name: "--backup",
          description:
            "Force a FULL pre-update backup (quick state snapshot + HERMES_HOME zip) for this run, regardless of updates.pre_update_backup",
        },
        {
          name: ["-y", "--yes"],
          description:
            "Run without blocking on prompts: accepts the config-migration and stash-restore prompts, skips the fork-upstream prompt without adding a remote",
        },
        {
          name: "--keep-stash",
          description: "Do NOT re-apply local changes after the update",
        },
        {
          name: "--branch",
          description:
            "Update against this branch instead of the default (main)",
          args: {
            name: "name",
          },
        },
        {
          name: "--switch-branch",
          description:
            "With updates.parked_branch_strategy: update_in_place configured, override it for this run: switch to the update target and update THERE instead of merging the target into the checked-out branch",
        },
        {
          name: "--force",
          description:
            "Windows: proceed with the update even when another hermes.exe is detected",
        },
        {
          name: "--force-venv",
          description:
            "Windows: mutate the venv even while other processes are running from its interpreter (desktop backend, gateway, terminals)",
        },
        {
          name: "--set-channel",
          description:
            "Persist the update channel for THIS install (recorded per install in config.yaml under update.installs)",
          args: {
            name: "channel",
          },
        },
        {
          name: "--install-id",
          description:
            "Print this install's id and path (the id keys its per-install channel record in config.yaml) and exit",
        },
        {
          name: "--channel",
          description:
            "Track CHANNEL for this run only (transient override; --set-channel persists)",
          args: {
            name: "channel",
          },
        },
        {
          name: "--no-gateway-restart",
          description:
            "Update code and dependencies but defer the fleet restart",
        },
      ],
    },
    {
      name: "uninstall",
      description: "Uninstall Hermes Agent",
      options: [
        {
          name: "--full",
          description:
            "Full uninstall - remove everything including configs and data",
        },
        {
          name: "--gui",
          description:
            "Uninstall only the desktop Chat GUI, leaving the agent intact",
        },
        {
          name: "--data",
          description:
            "Remove only the active Hermes home's user data, leaving installed code intact",
        },
        {
          name: "--gui-summary",
          description:
            "Print a JSON summary of installed GUI/agent artifacts and exit (used by the desktop app to gate uninstall options)",
        },
        {
          name: ["-y", "--yes"],
          description: "Skip confirmation prompts",
        },
        {
          name: "--dry-run",
          description:
            "Print what uninstall would remove without changing anything",
        },
      ],
    },
    {
      name: "acp",
      description: "Run Hermes Agent as an ACP (Agent Client Protocol) server",
      options: [
        {
          name: "--accept-hooks",
          description:
            "Auto-approve unseen shell hooks without a TTY prompt (equivalent to HERMES_ACCEPT_HOOKS=1 / hooks_auto_accept: true)",
        },
        {
          name: "--version",
          description: "Print Hermes ACP version and exit",
        },
        {
          name: "--check",
          description: "Verify ACP dependencies and adapter imports, then exit",
        },
        {
          name: "--setup",
          description:
            "Run interactive Hermes provider/model setup for ACP terminal auth",
        },
        {
          name: "--setup-browser",
          description:
            "Install PM's pinned Chromium for browser_exec (idempotent)",
        },
        {
          name: ["-y", "--yes"],
          description:
            "Accept all prompts (used by --setup-browser to skip the ~400 MB Chromium download confirmation)",
        },
      ],
    },
    {
      name: "profile",
      description: "Manage profiles — multiple isolated Hermes instances",
      subcommands: [
        {
          name: "list",
          description: "List all profiles",
        },
        {
          name: "use",
          description: "Set sticky default profile",
          args: {
            name: "profile_name",
            description: "Profile name (or 'default')",
          },
        },
        {
          name: "create",
          description: "Create a new profile",
          options: [
            {
              name: "--clone",
              description:
                "Copy config.yaml, .env, SOUL.md, and skills from active profile (messaging bot tokens/allowlists are left behind; see --clone-channels)",
            },
            {
              name: "--clone-all",
              description:
                "Full copy of active profile (all state, excluding per-profile history and messaging channels)",
            },
            {
              name: "--clone-from",
              description:
                "Source profile to clone from; implies --clone unless --clone-all is set",
              args: {
                name: "source",
              },
            },
            {
              name: "--clone-channels",
              description:
                "Also copy the source's messaging channels (bot tokens, allowlists, platform sections)",
            },
            {
              name: "--sync-imports",
              description:
                "With --clone/--clone-from: also carry over the `hermes import-agent` sync manifest so the new profile stays registered against the same Claude Code / Codex trees",
            },
            {
              name: "--no-alias",
              description: "Skip wrapper script creation",
            },
            {
              name: "--no-skills",
              description:
                "Create an empty profile with no bundled skills (opts out of `hermes update` skill sync)",
            },
            {
              name: "--description",
              description:
                "One- or two-sentence description of what this profile is good at",
              args: {
                name: "description",
              },
            },
          ],
          args: {
            name: "profile_name",
            description: "Profile name (lowercase, alphanumeric)",
          },
        },
        {
          name: "delete",
          description: "Delete a profile",
          options: [
            {
              name: ["-y", "--yes"],
              description: "Skip confirmation prompt",
            },
          ],
          args: {
            name: "profile_name",
            description: "Profile to delete",
          },
        },
        {
          name: "describe",
          description:
            "Read or set a profile's description (used by the kanban orchestrator)",
          options: [
            {
              name: "--text",
              description:
                "Set description to this exact text (overwrites any existing description)",
              args: {
                name: "text",
              },
            },
            {
              name: "--auto",
              description:
                "Auto-generate description via the auxiliary LLM (uses auxiliary.profile_describer)",
            },
            {
              name: "--overwrite",
              description:
                "With --auto, replace user-authored descriptions too (default: only fill in missing or previously-auto descriptions)",
            },
            {
              name: "--all",
              description:
                "With --auto, run on every profile missing a description",
            },
          ],
          args: {
            name: "profile_name",
            description:
              "Profile to describe (omit + use --all --auto to sweep)",
            isOptional: true,
          },
        },
        {
          name: "show",
          description: "Show profile details",
          args: {
            name: "profile_name",
            description: "Profile to show",
          },
        },
        {
          name: "alias",
          description: "Manage wrapper scripts",
          options: [
            {
              name: "--remove",
              description: "Remove the wrapper script",
            },
            {
              name: "--name",
              description: "Custom alias name (default: profile name)",
              args: {
                name: "name",
              },
            },
          ],
          args: {
            name: "profile_name",
            description: "Profile name",
          },
        },
        {
          name: "rename",
          description:
            "Rename a profile ('default': sets a display name; id unchanged)",
          args: [
            {
              name: "old_name",
              description: "Current profile name",
            },
            {
              name: "new_name",
              description:
                "New profile name (for 'default': a display name — the canonical id stays 'default')",
            },
          ],
        },
        {
          name: "purge-identity",
          description:
            "Retry a deleted profile's session/routing identity purge",
          args: {
            name: "profile_name",
            description: "Deleted profile name",
          },
        },
        {
          name: "migrate-identity",
          description:
            "Retry a renamed profile's session/routing identity migration",
          args: [
            {
              name: "old_name",
              description: "Profile name before the rename",
            },
            {
              name: "new_name",
              description: "Profile name after the rename",
            },
          ],
        },
        {
          name: "export",
          description: "Export a profile to archive",
          options: [
            {
              name: ["-o", "--output"],
              description:
                "Output file (default: a managed profile-exports/<name>-<timestamp>.tar.gz under the default Hermes home)",
              args: {
                name: "output",
                template: "filepaths",
              },
            },
          ],
          args: {
            name: "profile_name",
            description: "Profile to export",
          },
        },
        {
          name: "import",
          description: "Import a profile from archive",
          options: [
            {
              name: "--name",
              description: "Profile name (default: inferred from archive)",
              args: {
                name: "name",
              },
            },
          ],
          args: {
            name: "archive",
            description: "Path to .tar.gz archive",
            template: "filepaths",
          },
        },
        {
          name: "install",
          description:
            "Install a profile distribution from a git URL or local directory",
          options: [
            {
              name: "--name",
              description:
                "Override profile name (default: read from manifest)",
              args: {
                name: "name",
              },
            },
            {
              name: "--alias",
              description:
                "Create a shell wrapper alias for the installed profile",
            },
            {
              name: "--force",
              description:
                "Overwrite an existing profile of the same name (user data preserved)",
            },
            {
              name: ["-y", "--yes"],
              description: "Skip manifest preview confirmation",
            },
          ],
          args: {
            name: "source",
            description: "Distribution source (git URL or local directory)",
            template: "folders",
          },
        },
        {
          name: "update",
          description:
            "Re-pull a distribution and apply updates (user data preserved)",
          options: [
            {
              name: "--force-config",
              description:
                "Also overwrite config.yaml (normally preserved to keep user overrides)",
            },
            {
              name: ["-y", "--yes"],
              description: "Skip confirmation",
            },
          ],
          args: {
            name: "profile_name",
            description: "Profile to update",
          },
        },
        {
          name: "info",
          description:
            "Show a profile's distribution manifest (version, requirements, source)",
          args: {
            name: "profile_name",
            description: "Profile to inspect",
          },
        },
      ],
    },
    {
      name: "completion",
      description: "Print shell completion script (bash, zsh, or fish)",
      args: {
        name: "shell",
        description: "Shell type (default: bash)",
        isOptional: true,
        suggestions: ["bash", "zsh", "fish"],
      },
    },
    {
      name: "dashboard",
      description: "Start the web UI dashboard",
      subcommands: [
        {
          name: "register",
          description:
            "Register a self-hosted dashboard with Nous Portal (writes the OAuth client ID to .env)",
          options: [
            {
              name: "--name",
              description:
                "Human-readable label for the dashboard (default: an auto-generated name)",
              args: {
                name: "name",
              },
            },
            {
              name: "--redirect-uri",
              description:
                "Optional public HTTPS OAuth redirect URI for the dashboard, e.g. https://hermes.example.com/auth/callback",
              args: {
                name: "redirect_uri",
              },
            },
            {
              name: "--portal-url",
              description:
                "Override the Nous Portal base URL for registration (default: the portal you logged into)",
              args: {
                name: "portal_url",
              },
            },
          ],
        },
      ],
      options: [
        {
          name: "--port",
          description: "Port (default 9119, 0 for auto-assign by OS)",
          args: {
            name: "port",
          },
        },
        {
          name: "--host",
          description: "Host (default 127.0.0.1)",
          args: {
            name: "host",
          },
        },
        {
          name: "--insecure",
          description: "DEPRECATED / NO-OP",
        },
        {
          name: "--skip-build",
          description:
            "Skip the web UI build step and serve the existing dist directly",
        },
        {
          name: "--isolated",
          description:
            "When launched from a named profile, run a dedicated server scoped to that profile instead of routing to the machine-level server",
        },
        {
          name: "--stop",
          description: "Stop all running Hermes web server processes and exit",
        },
        {
          name: "--status",
          description: "List running Hermes web server processes and exit",
        },
        {
          name: "--no-open",
          description: "Don't open browser automatically",
        },
      ],
    },
    {
      name: "serve",
      description:
        "Start the Hermes backend server (headless; powers the desktop app and remote backends)",
      options: [
        {
          name: "--port",
          description: "Port (default 9119, 0 for auto-assign by OS)",
          args: {
            name: "port",
          },
        },
        {
          name: "--host",
          description: "Host (default 127.0.0.1)",
          args: {
            name: "host",
          },
        },
        {
          name: "--insecure",
          description: "DEPRECATED / NO-OP",
        },
        {
          name: "--skip-build",
          description:
            "Skip the web UI build step and serve the existing dist directly",
        },
        {
          name: "--isolated",
          description:
            "When launched from a named profile, run a dedicated server scoped to that profile instead of routing to the machine-level server",
        },
        {
          name: "--stop",
          description: "Stop all running Hermes web server processes and exit",
        },
        {
          name: "--status",
          description: "List running Hermes web server processes and exit",
        },
        {
          name: "--ssh-session-token-file",
          description: "Read a one-shot Desktop SSH session token from PATH",
          args: {
            name: "path",
            template: "filepaths",
          },
        },
        {
          name: "--ssh-owner-nonce",
          description: "Identify a Desktop-owned SSH backend process",
          args: {
            name: "nonce",
          },
        },
      ],
    },
    {
      name: "webapp",
      description: "Open the Hermes Desktop workspace in a browser",
      options: [
        {
          name: "--no-open",
          description: "Print the one-use link instead of opening a browser",
        },
        {
          name: "--force-build",
          description:
            "Rebuild the Webapp bundle even when its build receipt is current",
        },
        {
          name: "--skip-build",
          description: "Use the existing Webapp bundle as is",
        },
        {
          name: "--build-only",
          description: "Build the Webapp bundle and stop",
        },
        {
          name: "--status",
          description: "Show whether the gateway is serving the Webapp",
        },
        {
          name: "--sign-out",
          description:
            "Sign out every Webapp tab (each needs a new link from hermes webapp)",
        },
      ],
    },
    {
      name: ["desktop", "gui"],
      description: "Build and launch the native desktop app",
      options: [
        {
          name: "--source",
          description:
            "Launch via `electron .` against apps/desktop/dist instead of the packaged app",
        },
        {
          name: "--build-only",
          description:
            "Build the desktop app but do not launch it (used by the installer's --update flow)",
        },
        {
          name: "--fake-boot",
          description:
            "Enable deterministic desktop boot delays for validating startup UI",
        },
        {
          name: "--ignore-existing",
          description:
            "Skip the installed Hermes runtime so no local backend starts and Desktop offers connect or install instead. --hermes-root and the bundled runtime still win",
        },
        {
          name: "--hermes-root",
          description:
            "Override the Hermes source root used by Desktop (sets HERMES_DESKTOP_HERMES_ROOT)",
          args: {
            name: "hermes_root",
            template: "folders",
          },
        },
        {
          name: "--cwd",
          description:
            "Initial project directory for Desktop chat sessions (sets HERMES_DESKTOP_CWD)",
          args: {
            name: "cwd",
            template: "folders",
          },
        },
        {
          name: "--skip-build",
          description:
            "Skip npm install/package and launch the existing unpacked app from apps/desktop/release",
        },
        {
          name: "--local",
          description:
            "Show the local-models UI in the desktop app (models pane, quickstart, picker rows)",
        },
        {
          name: "--force-build",
          description: "Force a full rebuild even if the content stamp matches",
        },
        {
          name: "--setup-tcc-identity",
          description:
            "MacOS only: create/import a self-signed code-signing certificate in the login keychain and point desktop.macos_signing_identity at it, then re-sign the packaged app",
        },
        {
          name: "--identity",
          description:
            "Certificate name to create/use for --setup-tcc-identity (default: Hermes Local Signing)",
          args: {
            name: "identity",
          },
        },
        {
          name: "--install-apparmor-profile",
          description:
            "Linux only: install an AppArmor profile that lets the packaged app use Chromium's user-namespace sandbox on hosts with kernel.apparmor_restrict_unprivileged_userns=1, then exit",
        },
        {
          name: "--close-preview",
          description:
            "Close the preview pane and exit its fullscreen (out-of-band escape hatch when the pane captured all input)",
        },
      ],
    },
    {
      name: "logs",
      description: "View and filter Hermes log files",
      options: [
        {
          name: ["-n", "--lines"],
          description: "Number of lines to show (default: 50)",
          args: {
            name: "lines",
          },
        },
        {
          name: ["-f", "--follow"],
          description: "Follow the log in real time (like tail -f)",
        },
        {
          name: "--level",
          description:
            "Minimum log level to show (DEBUG, INFO, WARNING, ERROR)",
          args: {
            name: "level",
            suggestions: ["DEBUG", "INFO", "WARNING", "ERROR"],
          },
        },
        {
          name: "--session",
          description: "Filter lines containing this session ID substring",
          args: {
            name: "id",
          },
        },
        {
          name: "--since",
          description: "Show lines since TIME ago (e.g. 1h, 30m, 2d)",
          args: {
            name: "time",
          },
        },
        {
          name: "--component",
          description:
            "Filter by component: gateway, agent, tools, cli, cron, gui",
          args: {
            name: "name",
            suggestions: ["gateway", "agent", "tools", "cli", "cron", "gui"],
          },
        },
      ],
      args: {
        name: "log_name",
        description:
          "Log to view: agent (default), errors, gateway, gui, desktop, update, handoff, or 'list' to show available files",
        isOptional: true,
        suggestions: [
          "agent",
          "errors",
          "gateway",
          "gui",
          "desktop",
          "update",
          "handoff",
          "list",
        ],
      },
    },
    {
      name: "prompt-size",
      description: "Show a byte breakdown of the system prompt + tool schemas",
      options: [
        {
          name: "--platform",
          description: "Platform to simulate (cli, telegram, discord, ...)",
          args: {
            name: "platform",
          },
        },
        {
          name: "--json",
          description: "Emit the breakdown as JSON",
        },
      ],
    },
  ],
  options: [
    {
      name: ["-V", "--version"],
      description: "Show version and exit",
    },
    {
      name: ["-z", "--oneshot"],
      description:
        "One-shot mode: send a single prompt and print ONLY the final response text to stdout",
      args: {
        name: "prompt",
      },
    },
    {
      name: "--usage-file",
      description:
        "One-shot mode only: after the run, write a JSON usage report (estimated cost, token counts, model, api_calls) to PATH",
      args: {
        name: "path",
        template: "filepaths",
      },
    },
    {
      name: ["-m", "--model"],
      description:
        "Model override for this invocation (e.g. anthropic/claude-sonnet-4.6)",
      args: {
        name: "model",
      },
    },
    {
      name: "--provider",
      description:
        "Provider override for this invocation (e.g. openrouter, anthropic)",
      args: {
        name: "provider",
      },
    },
    {
      name: "--reasoning",
      description:
        "Reasoning effort for this invocation: none, minimal, low, medium, high, xhigh, max, or ultra",
      args: {
        name: "level",
        suggestions: [
          "none",
          "minimal",
          "low",
          "medium",
          "high",
          "xhigh",
          "max",
          "ultra",
        ],
      },
    },
    {
      name: ["-t", "--toolsets"],
      description: "Comma-separated toolsets to enable for this invocation",
      args: {
        name: "toolsets",
      },
    },
    {
      name: ["-r", "--resume"],
      description:
        "Resume a previous session by ID or title, or pass 'latest' for the most recent session (workspace-scoped, like -c with no name)",
      args: {
        name: "session",
      },
    },
    {
      name: "--no-restore-cwd",
      description:
        "Don't cd into a resumed session's recorded working directory",
    },
    {
      name: "--in",
      description: "Change into DIR before starting or resuming",
      args: {
        name: "dir",
        template: "folders",
      },
    },
    {
      name: ["-c", "--continue"],
      description:
        "Resume a session by name, or the most recent if no name given",
      args: {
        name: "session_name",
        isOptional: true,
      },
    },
    {
      name: ["-w", "--worktree"],
      description: "Run in an isolated git worktree (for parallel agents)",
    },
    {
      name: "--accept-hooks",
      description:
        "Auto-approve any unseen shell hooks declared in config.yaml without a TTY prompt",
    },
    {
      name: ["-s", "--skills"],
      description:
        "Preload one or more skills for the session (repeat flag or comma-separate)",
      args: {
        name: "skills",
      },
      isRepeatable: true,
    },
    {
      name: "--yolo",
      description:
        "Bypass all dangerous command approval prompts (use at your own risk)",
    },
    {
      name: "--pass-session-id",
      description: "Include the session ID in the agent's system prompt",
    },
    {
      name: "--checkpoints",
      description:
        "Enable filesystem checkpoints before destructive file operations (use /rollback to restore)",
    },
    {
      name: "--ignore-user-config",
      description:
        "Ignore ~/.hermes/config.yaml and fall back to built-in defaults (credentials in .env are still loaded)",
    },
    {
      name: "--ignore-rules",
      description:
        "Skip auto-injection of AGENTS.md, SOUL.md, .cursorrules, memory, and preloaded skills",
    },
    {
      name: "--safe-mode",
      description: "Troubleshooting mode: disable ALL customizations",
    },
    {
      name: "--tui",
      description: "Launch the modern TUI instead of the classic REPL",
    },
    {
      name: ["--native", "--tui-native"],
      description:
        "With --tui: use native terminal scrollback and disable mouse tracking",
    },
    {
      name: "--cli",
      description:
        "Force the classic prompt_toolkit REPL (overrides display.interface=tui)",
    },
    {
      name: "--dev",
      description:
        "With --tui: run TypeScript sources via tsx (skip dist build)",
    },
    {
      name: ["-p", "--profile"],
      description: "Run the command against a named profile's home",
      args: {
        name: "profile",
      },
      isPersistent: true,
    },
    {
      name: ["-h", "--help"],
      description: "Show help for command",
      isPersistent: true,
    },
  ],
};

export default completionSpec;
