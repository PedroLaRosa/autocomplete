// Shelve CLI v5.3.0 (npm @shelve/cli latest, published 2026-08-17; synced 2026-11-19).
// Source: HugoRCD/shelve packages/cli (src/index.ts, src/commands/*.ts, citty arg definitions)
// and apps/lp/content/docs/3.cli + skills/shelve/cli-commands.md, read statically (CLI not executed).
// The 5.x CLI has no subcommand/option aliases other than -q and -y; the old c/init/pl/ps/g/cf/-n/-e aliases were removed.
const environmentOption = (description: string): Fig.Option => ({
  name: "--env",
  description,
  args: {
    name: "environment",
    suggestions: ["development", "preview", "production"],
  },
});

const pathOption = (verb: string): Fig.Option => ({
  name: "--path",
  description: `${verb} a single monorepo package instead of every one`,
  args: { name: "dir", template: "folders" },
});

const shelveSubcommands: Fig.Subcommand[] = [
  {
    name: "run",
    description: "Inject secrets into a child process (no .env on disk)",
    icon: "▶️",
    options: [
      environmentOption("Environment to use"),
      {
        name: "--template",
        description:
          "Path to a .env.template file containing shelve:// references and literals to merge",
        args: { name: "file", template: "filepaths" },
      },
      {
        name: "--offline",
        description: "Use only the encrypted offline cache; never call the API",
      },
      {
        name: "--no-cache",
        description: "Disable both cache reads and writes",
      },
      {
        name: "--cache-ttl",
        description: "Override cache freshness (e.g. 15m, 2h, 1d)",
        args: { name: "duration", default: "24h" },
      },
      {
        name: "--watch",
        description:
          "Poll Shelve for variable updates and forward SIGHUP to the child on change",
      },
      {
        name: "--restart-on-change",
        description:
          "In --watch mode, kill the child and respawn instead of sending SIGHUP",
        dependsOn: ["--watch"],
      },
    ],
    args: {
      name: "command",
      description: "Command to run (use -- before it to pass flags verbatim)",
      isVariadic: true,
      isCommand: true,
    },
  },
  {
    name: "push",
    description: "Push variables for specified environment to Shelve",
    icon: "📤",
    options: [
      environmentOption("Environment to push the variables to"),
      pathOption("Push"),
    ],
  },
  {
    name: "pull",
    description: "Pull variables for specified environment from Shelve",
    icon: "📥",
    options: [
      environmentOption("Environment to pull the variables from"),
      pathOption("Pull"),
    ],
  },
  {
    name: "diff",
    description: "Compare local env file with Shelve (no writes)",
    icon: "🔍",
    options: [
      environmentOption("Environment to compare against"),
      pathOption("Diff"),
      {
        name: "--show-values",
        description: "Include secret values in human output (never in JSON)",
      },
    ],
  },
  {
    name: "sync",
    description: "Apply sync policy (push or pull based on sourceOfTruth)",
    icon: "🔁",
    options: [
      environmentOption("Environment to sync"),
      pathOption("Sync"),
      {
        name: "--dry-run",
        description: "Show what would happen without writing",
      },
    ],
  },
  {
    name: "login",
    description: "Login to Shelve",
    icon: "🔑",
    options: [
      {
        name: "--token",
        description: "API token (or set SHELVE_TOKEN)",
        args: { name: "token" },
      },
      {
        name: "--with-token",
        description: "Paste an API token instead of browser device login",
      },
      {
        name: "--no-browser",
        description:
          "Do not open a browser; show the authorization URL and code only",
      },
    ],
  },
  {
    name: "logout",
    description: "Logout from Shelve locally",
    icon: "🚪",
  },
  {
    name: "me",
    description: "Show the currently logged-in user",
    icon: "👤",
  },
  {
    name: "init",
    description:
      "Add agent-aware ignore files and update .gitignore so secrets stay out of model contexts",
    icon: "🛡️",
    options: [
      {
        name: "--cwd",
        description:
          "Directory to initialize (defaults to current working directory)",
        args: { name: "dir", template: "folders" },
      },
    ],
  },
  {
    name: "doctor",
    description: "Validate CLI setup (config, auth, API, cache)",
    icon: "🩺",
    options: [
      environmentOption(
        "Environment to test (defaults to defaultEnv from config)"
      ),
    ],
  },
  {
    name: "create",
    description: "Create a new project and its config",
    icon: "🚀",
    options: [
      {
        name: "--name",
        description: "Name of the project to create",
        args: { name: "project-name" },
      },
      {
        name: "--slug",
        description: "Slug of the team the project belongs to",
        args: { name: "team-slug" },
      },
    ],
  },
  {
    name: "config",
    description: "Show the current configuration",
    icon: "⚙️",
  },
  {
    name: "generate",
    description: "Generate resources for a project",
    icon: "🔄",
    options: [
      {
        name: "--type",
        description: "Resource to generate",
        args: {
          name: "type",
          suggestions: [
            {
              name: "env-example",
              description: "Example env file with placeholder values",
            },
            { name: "eslint", description: "Starter eslint.config.js" },
          ],
        },
      },
    ],
  },
  {
    name: "upgrade",
    description: "Upgrade the Shelve CLI to the latest version",
    icon: "⬆️",
  },
];

const completionSpec: Fig.Spec = {
  name: "shelve",
  description:
    "Shelve CLI a command-line interface designed for the Shelve platform. This tool enables users to authenticate with Shelve, facilitating the seamless transfer of environment variables for project collaboration within a team directly through the terminal interface",
  subcommands: shelveSubcommands,
  options: [
    {
      name: "--json",
      description:
        "Output machine-readable JSON on stdout; errors on stderr as JSON",
      isPersistent: true,
    },
    {
      name: ["--quiet", "-q"],
      description: "Suppress intro/outro/spinners; minimal text output",
      isPersistent: true,
    },
    {
      name: ["--yes", "-y"],
      description: "Skip confirmation prompts",
      isPersistent: true,
    },
    {
      name: "--non-interactive",
      description: "Fail instead of prompting when required input is missing",
      isPersistent: true,
    },
    {
      name: "--debug",
      description: "Enable verbose debug logging (or set SHELVE_DEBUG=1)",
      isPersistent: true,
    },
    {
      name: ["--help", "-h"],
      description: "Show help",
      isPersistent: true,
    },
    {
      name: ["--version", "-v"],
      description: "Show version",
    },
  ],
};
export default completionSpec;
