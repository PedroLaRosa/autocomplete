// Railway CLI v5.75.0 (railwayapp/cli git tag v5.75.0, Homebrew formula railway 5.75.0; synced 2026-11-19).
// Source: clap-derive command definitions in src/main.rs and src/commands/** of the v5.75.0 tag, extracted
// statically with a script (the binary was not run). Doc comments / `about` text give the descriptions.
// Dynamic things not modelled: legacy `railway scale --<region> <n>` flags and interactive-only prompts.
const jsonOption: Fig.Option = {
  name: "--json",
  description: "Output in JSON format",
};
const projectOption: Fig.Option = {
  name: ["-p", "--project"],
  description: "Project ID to use (defaults to linked project)",
  args: { name: "project-id" },
};
const yesOption: Fig.Option = {
  name: ["-y", "--yes"],
  description: "Skip the confirmation prompt",
};
const jsonOption2: Fig.Option = {
  name: "--json",
  description: "Output as JSON",
};
const environmentOption: Fig.Option = {
  name: ["-e", "--environment"],
  description: "Environment name or ID (defaults to the linked environment)",
  args: { name: "environment" },
};
const projectOption2: Fig.Option = {
  name: ["-p", "--project"],
  description: "Project ID (defaults to the linked project)",
  args: { name: "project" },
};
const yesOption2: Fig.Option = {
  name: ["-y", "--yes"],
  description: "Skip confirmation dialog",
};
const noDeployOption: Fig.Option = {
  name: "--no-deploy",
  description:
    "Commit the config change without triggering deploys (applies on the next deploy)",
};
const jsonOption3: Fig.Option = {
  name: "--json",
  description: "Output in JSON format",
  isPersistent: true,
};
const environmentOption2: Fig.Option = {
  name: ["-e", "--environment"],
  description: "Environment to use (defaults to linked environment)",
  isPersistent: true,
  args: { name: "environment" },
};
const serviceOption: Fig.Option = {
  name: ["-s", "--service"],
  description: "Service name or ID (defaults to linked service)",
  isPersistent: true,
  args: { name: "service" },
};
const projectOption3: Fig.Option = {
  name: ["-p", "--project"],
  description: "Project ID to use (defaults to linked project)",
  isPersistent: true,
  args: { name: "project-id" },
};
const opt2faCodeOption: Fig.Option = {
  name: "--2fa-code",
  description:
    "2FA code for verification (required if 2FA is enabled in non-interactive mode)",
  args: { name: "two-factor-code" },
};
const serviceOption2: Fig.Option = {
  name: ["-s", "--service"],
  description: "Service name or ID (defaults to linked service)",
  args: { name: "service" },
};
const compactOption: Fig.Option = {
  name: "--compact",
  description: "Print compact JSON",
};
const keepAwakeOption: Fig.Option = {
  name: "--keep-awake",
  description:
    "Accepted for compatibility and ignored; it has no effect on sleep",
  hidden: true,
};
const environmentOption3: Fig.Option = {
  name: "--environment",
  description: "Environment name or ID. Defaults to the linked environment",
  args: { name: "name|id" },
};
const runnerOption: Fig.Option = {
  name: "--runner",
  description: "Optional TypeScript runner binary",
  args: { name: "runner" },
};
const replicasOption: Fig.Option = {
  name: "--replicas",
  description: "Target replica count",
  args: { name: "replicas" },
};
const environmentOption4: Fig.Option = {
  name: ["-e", "--environment"],
  description: "Environment to use (defaults to linked environment)",
  args: { name: "environment" },
};
const codexOption: Fig.Option = {
  name: "--codex",
  description: "Select Codex",
};
const opencodeOption: Fig.Option = {
  name: "--opencode",
  description: "Select OpenCode",
};
const connectionJsonOption: Fig.Option = {
  name: "--connection-json",
  description:
    "Return Codex/OpenCode credentials or Railway endpoint details as JSON",
};
const claudeOption: Fig.Option = {
  name: "--claude",
  description: "Select Claude Code",
};
const grokOption: Fig.Option = {
  name: "--grok",
  description: "Select Grok CLI",
};
const railwayOption: Fig.Option = {
  name: "--railway",
  description: "Select Railway Agent (latest local TUI connected to the VM)",
};
const newOption: Fig.Option = { name: "--new", description: "Create a new VM" };
const bootstrapOption: Fig.Option = {
  name: "--bootstrap",
  description: "Create from a named bootstrap instead of the local default",
  exclusiveOn: ["--no-bootstrap", "--agent", "--rm"],
  args: { name: "bootstrap" },
};
const noBootstrapOption: Fig.Option = {
  name: "--no-bootstrap",
  description: "Create without the local default bootstrap",
  exclusiveOn: ["--agent", "--rm"],
};
const rmOption: Fig.Option = {
  name: "--rm",
  description:
    "Delete this environment's agent and disk (prefer railway ca delete)",
};
const refreshAuthOption: Fig.Option = {
  name: "--refresh-auth",
  description: "Replace cached Claude credentials with a new setup token",
};
const nameOption: Fig.Option = {
  name: "--name",
  description: "Name for a newly created agent (defaults to a generated one)",
  args: { name: "name" },
};
const variableOption: Fig.Option = {
  name: "--variable",
  description:
    "Set variables on a new VM; repeat or separate with commas (supports service references)",
  isRepeatable: true,
  args: { name: "key=value[,key=value...]" },
};
const codeEndpointOption: Fig.Option = {
  name: "--code-endpoint",
  description:
    "Enable a code endpoint on port 4096 (requires --new; automatic for local clients)",
  dependsOn: ["--new"],
};
const codePortOption: Fig.Option = {
  name: "--code-port",
  description: "Enable a code endpoint on this port (requires --new)",
  dependsOn: ["--new"],
  args: { name: "code-port" },
};
const envFileOption: Fig.Option = {
  name: "--env-file",
  description:
    "Load a .env file (repeatable; --variable overrides file values)",
  isRepeatable: true,
  args: { name: "path", template: "filepaths" },
};
const dirOption: Fig.Option = {
  name: "--dir",
  description:
    "Remote project directory for Codex/OpenCode server mode (default: /app)",
  args: { name: "path" },
};
const agentOption: Fig.Option = {
  name: "--agent",
  description:
    "Existing cloud agent for a local Codex/OpenCode client, by name or ID",
  exclusiveOn: ["--new"],
  args: { name: "name-or-id" },
};
const envFileOption2: Fig.Option = {
  name: "--env-file",
  description:
    "Load variables from a .env file (repeatable). `--variable` flags override file entries with the same key",
  isRepeatable: true,
  args: { name: "path", template: "filepaths" },
};
const fileOption: Fig.Option = {
  name: "--file",
  description: "Path to the Railway configuration file",
  args: { name: "file", template: "filepaths" },
};
const jsonOption4: Fig.Option = {
  name: "--json",
  description: "Output raw runner JSON",
};
const yesOption3: Fig.Option = {
  name: "--yes",
  description: "Confirm prompts and proceed non-interactively",
};
const confirmDestructiveOption: Fig.Option = {
  name: "--confirm-destructive",
  description: "Allow destructive applies in non-interactive or agent sessions",
};
const decryptVariablesOption: Fig.Option = {
  name: "--decrypt-variables",
  description:
    "Ask Railway to decrypt variables while planning, when authorized",
};
const includeTypesOption: Fig.Option = {
  name: "--include-types",
  description: "Include generated graph TypeScript types in runner output",
};
const verboseOption: Fig.Option = {
  name: ["--verbose", "--full"],
  description: "Show full change details",
};
const detailedExitCodeOption: Fig.Option = {
  name: "--detailed-exit-code",
  description: "Exit 2 when changes are pending, 0 when none (plan only)",
};
const showValuesOption: Fig.Option = {
  name: "--show-values",
  description: "Print variable values in the plan instead of redacting them",
};
const outOption: Fig.Option = {
  name: "--out",
  description: "Write a pinned plan artifact",
  args: { name: "out", template: "filepaths" },
};
const planOption: Fig.Option = {
  name: "--plan",
  description:
    "Apply this pinned plan without re-evaluating the authoring file",
  args: { name: "plan", template: "filepaths" },
};
const sourceTreeOption: Fig.Option = {
  name: "--source-tree",
  description: "Tree written into `--out`",
  args: { name: "source-tree" },
};
const environmentOption5: Fig.Option = {
  name: ["-e", "--environment"],
  description:
    "Environment to pull variables from (defaults to linked environment)",
  args: { name: "environment" },
};
const serviceOption3: Fig.Option = {
  name: ["-s", "--service"],
  description: "The service ID/name to redeploy from",
  args: { name: "service" },
};
const environmentOption6: Fig.Option = {
  name: ["-e", "--environment"],
  description: "Environment to redeploy in (defaults to linked environment)",
  args: { name: "environment" },
};
const fromSourceOption: Fig.Option = {
  name: "--from-source",
  description:
    "Pull and deploy the latest commit or image from the configured source, instead of redeploying the existing deployment",
  exclusiveOn: ["--commit"],
};
const commitOption: Fig.Option = {
  name: "--commit",
  description:
    "Deploy a specific commit from the connected repository once, without pinning it",
  exclusiveOn: ["--from-source"],
  args: { name: "sha" },
};
const outputOption: Fig.Option = {
  name: ["-o", "--output"],
  description:
    "Output path for docker-compose.yml (defaults to ~/.railway/develop/<project_id>/docker-compose.yml)",
  args: { name: "output", template: "filepaths" },
};
const workspaceOption: Fig.Option = {
  name: ["-w", "--workspace"],
  description: "Workspace ID or name",
  args: { name: "workspace" },
};
const replicasOption2: Fig.Option = {
  name: "--replicas",
  description:
    "Number of replicas (excluding the primary); omit to keep the template default",
  args: { name: "replicas" },
};
const coordinatorsOption: Fig.Option = {
  name: "--coordinators",
  description:
    "Number of coordinator/consensus nodes (e.g. etcd), for clusters that have a coordinator tier; must be odd",
  args: { name: "coordinators" },
};
const edgeOption: Fig.Option = {
  name: "--edge",
  description: "Number of edge/load-balancer replicas (e.g",
  args: { name: "edge" },
};
const removeOrphansOption: Fig.Option = {
  name: "--remove-orphans",
  description:
    "Also delete role-stamped services in this environment that run this engine's cluster images but have no cluster parent left (debris from a revert that died mid-sweep)",
};
const coordinatorsOption2: Fig.Option = {
  name: "--coordinators",
  description: "Target coordinator/consensus node count (must stay odd)",
  args: { name: "coordinators" },
};
const edgeOption2: Fig.Option = {
  name: "--edge",
  description: "Target edge/load-balancer replica count",
  args: { name: "edge" },
};
const toOption: Fig.Option = {
  name: "--to",
  description: "Service name or ID of the node to promote",
  args: { name: "to" },
};
const limitOption: Fig.Option = {
  name: "--limit",
  description: "Maximum entries to show (newest last)",
  args: { name: "limit", default: "50" },
};

const completionSpec: Fig.Spec = {
  name: "railway",
  description: "Interact with Railway via CLI",
  options: [
    { name: ["-h", "--help"], description: "Print help", isPersistent: true },
    {
      name: ["-V", "--version"],
      description: "Print version",
      isPersistent: true,
    },
  ],
  subcommands: [
    {
      name: "add",
      description: "Add a service to your project",
      options: [
        {
          name: ["-d", "--database"],
          description: "The name of the database to add",
          isRepeatable: true,
          args: { name: "database" },
        },
        {
          name: ["-s", "--service"],
          description:
            "The name of the service to create (leave blank for randomly generated)",
          args: { name: "service" },
        },
        {
          name: ["-r", "--repo"],
          description: "The repo to link to the service",
          args: { name: "repo" },
        },
        {
          name: "--branch",
          description:
            "Branch to deploy from when creating a service from a GitHub repo",
          dependsOn: ["--repo"],
          args: { name: "branch" },
        },
        {
          name: ["-i", "--image"],
          description: "The docker image to link to the service",
          args: { name: "image" },
        },
        {
          name: ["-v", "--variables"],
          description:
            'The "{key}={value}" environment variable pair to set the service variables',
          isRepeatable: true,
          args: { name: "variables" },
        },
        {
          name: "--verbose",
          description: "Verbose logging",
          args: {
            name: "bool",
            isOptional: true,
            suggestions: ["true", "false"],
          },
        },
        jsonOption,
      ],
    },
    {
      name: "agent",
      description: "Interact with the Railway Agent",
      options: [
        {
          name: ["-p", "--prompt"],
          description: "Send a single prompt (omit for interactive mode)",
          args: { name: "message" },
        },
        jsonOption,
        {
          name: "--thread-id",
          description: "Continue an existing thread (see --list)",
          args: { name: "id" },
        },
        {
          name: ["-s", "--service"],
          description: "Service to scope the chat to (name or ID)",
          args: { name: "service" },
        },
        environmentOption4,
        {
          name: "--project",
          description: "Project ID (defaults to the linked project)",
          args: { name: "project" },
        },
        {
          name: "--list",
          description:
            "List existing agent threads for the current environment",
          exclusiveOn: ["--prompt", "--thread-id", "--service"],
        },
        {
          name: ["-y", "--accept", "--yes"],
          description:
            "Start the environment's cloud agent VM, which is billed, without the notice and five-second wait that come before it is first created",
        },
      ],
    },
    {
      name: "api",
      description: "Query the Railway public GraphQL API",
      subcommands: [
        {
          name: "schema",
          description: "Print the live GraphQL introspection schema",
          options: [compactOption],
        },
        {
          name: "search",
          description: "Search GraphQL types and fields",
          options: [
            {
              name: "--kind",
              description: "Restrict search results to a kind",
              args: {
                name: "kind",
                suggestions: [
                  "all",
                  "type",
                  "query",
                  "mutation",
                  "subscription",
                  "field",
                  "input",
                  "enum",
                ],
              },
            },
            {
              name: "--limit",
              description: "Maximum number of results to print",
              args: { name: "n", default: "25" },
            },
            compactOption,
          ],
          args: { name: "term", description: "Search term" },
        },
        {
          name: "describe",
          description: "Describe a GraphQL type or field",
          options: [compactOption],
          args: {
            name: "name",
            description: "Type name, root field name, or Parent.field",
          },
        },
      ],
      options: [
        {
          name: ["-f", "--file"],
          description: "Read the GraphQL document from a file",
          args: { name: "path" },
        },
        {
          name: "--variables",
          description:
            "JSON variables object, or @PATH to read JSON from a file",
          args: { name: "json|@path" },
        },
        {
          name: "--var",
          description:
            "Set a typed variable as KEY=VALUE. VALUE is parsed as JSON when possible",
          isRepeatable: true,
          args: { name: "key=value" },
        },
        {
          name: "--raw-var",
          description: "Set a string variable as KEY=VALUE",
          isRepeatable: true,
          args: { name: "key=value" },
        },
        {
          name: "--operation-name",
          description:
            "GraphQL operation name to execute when the document contains multiple operations",
          args: { name: "name" },
        },
        compactOption,
        {
          name: "--allow-errors",
          description:
            "Exit successfully even when the GraphQL response has an errors array",
        },
      ],
      args: {
        name: "query",
        description: "GraphQL query or mutation document",
        isOptional: true,
      },
    },
    {
      name: "autoupdate",
      description: "Manage auto-update preferences",
      subcommands: [
        { name: ["enable", "on"], description: "Enable automatic updates" },
        { name: ["disable", "off"], description: "Disable automatic updates" },
        { name: "status", description: "Show current auto-update status" },
        {
          name: "skip",
          description:
            "Skip the current pending version (useful if a release is broken)",
        },
      ],
    },
    {
      name: ["bucket", "buckets"],
      description: "Manage project buckets",
      subcommands: [
        {
          name: ["list", "ls"],
          description: "List buckets",
          options: [jsonOption],
        },
        {
          name: ["create", "add", "new"],
          description: "Create a new bucket",
          options: [
            {
              name: ["-r", "--region"],
              description:
                "Bucket region: sjc (US West), iad (US East), ams (EU West), sin (Asia Pacific)",
              args: { name: "region" },
            },
            jsonOption,
          ],
          args: {
            name: "name",
            description: "Optional bucket name",
            isOptional: true,
          },
        },
        {
          name: ["delete", "remove", "rm"],
          description: "Delete a bucket",
          options: [yesOption2, jsonOption, opt2faCodeOption],
        },
        {
          name: ["info", "show", "get"],
          description: "Show bucket details",
          options: [jsonOption],
        },
        {
          name: ["credentials", "creds"],
          description: "Show or reset S3-compatible credentials",
          options: [
            { name: "--reset", description: "Reset S3 credentials" },
            {
              name: ["-y", "--yes"],
              description:
                "Skip confirmation dialog when resetting credentials",
              dependsOn: ["--reset"],
            },
            {
              name: "--2fa-code",
              description:
                "2FA code for verification when resetting credentials",
              dependsOn: ["--reset"],
              args: { name: "two-factor-code" },
            },
            jsonOption,
          ],
        },
        {
          name: ["rename", "mv"],
          description: "Rename a bucket",
          options: [
            {
              name: ["-n", "--name"],
              description: "New bucket name",
              args: { name: "name" },
            },
            jsonOption,
          ],
        },
      ],
      options: [
        {
          name: ["-b", "--bucket"],
          description: "Bucket name or ID",
          isPersistent: true,
          args: { name: "bucket" },
        },
        {
          name: ["-e", "--environment"],
          description: "Environment name or ID",
          isPersistent: true,
          args: { name: "environment" },
        },
      ],
    },
    {
      name: "cdn",
      description: "Manage CDN caching for a service",
      subcommands: [
        { name: "status", description: "Show CDN settings for a service" },
        { name: "enable", description: "Enable CDN caching" },
        { name: "disable", description: "Disable CDN caching" },
        {
          name: "update",
          description: "Update CDN caching settings",
          options: [
            {
              name: "--html-caching",
              description: "HTML caching mode",
              args: {
                name: "html-caching",
                suggestions: ["auto", "force", "never"],
              },
            },
            {
              name: "--default-ttl",
              description:
                "Default TTL: 30m, 1h, 2h, 4h, 12h, 1d, or matching seconds",
              args: { name: "default-ttl" },
            },
            {
              name: "--swr",
              description:
                "Honor stale-while-revalidate Cache-Control directives",
              exclusiveOn: ["--no-swr"],
            },
            {
              name: "--no-swr",
              description:
                "Ignore stale-while-revalidate Cache-Control directives",
              exclusiveOn: ["--swr"],
            },
            {
              name: "--purge-on-deploy",
              description: "Cache purge policy after successful deploys",
              args: {
                name: "purge-on-deploy",
                suggestions: ["off", "html", "all"],
              },
            },
          ],
        },
        {
          name: "purge",
          description: "Purge cached content",
          args: {
            name: "scope",
            description: "Content scope to purge",
            suggestions: ["html", "all"],
          },
        },
      ],
      options: [serviceOption, environmentOption2, projectOption3, jsonOption3],
    },
    {
      name: "ca",
      description: "Manage Railway cloud agents",
      subcommands: [
        {
          name: "bootstrap",
          description: "Save and select reusable cloud-agent bootstraps",
          subcommands: [
            {
              name: ["list", "ls"],
              description:
                "List saved bootstraps and their status in an environment",
              options: [environmentOption, projectOption2, jsonOption2],
            },
            {
              name: "save",
              description:
                "Save a running VM as a named bootstrap (or a new version of that name)",
              options: [
                {
                  name: "--agent",
                  description: "Running VM to capture, by name or ID",
                  args: { name: "agent" },
                },
                {
                  name: "--default",
                  description:
                    "Make this the local default after its capture succeeds",
                },
                {
                  name: "--variable",
                  description:
                    "Set bootstrap variables (repeatable or comma-separated; supports service references)",
                  isRepeatable: true,
                  args: { name: "key=value[,key=value...]" },
                },
                {
                  name: "--env-file",
                  description:
                    "Load bootstrap variables from a .env file (repeatable)",
                  isRepeatable: true,
                  args: { name: "path", template: "filepaths" },
                },
                environmentOption,
                projectOption2,
                jsonOption2,
              ],
              args: {
                name: "name",
                description: "Bootstrap name, unique within this environment",
              },
            },
            {
              name: "default",
              description:
                "Choose the default bootstrap for new VMs in an environment",
              options: [environmentOption, projectOption2, jsonOption2],
              args: {
                name: "name",
                description: "Name of a ready bootstrap in this environment",
              },
            },
          ],
        },
        {
          name: "setup",
          description:
            "Configure how cloud agents are launched (default agent, skills)",
          subcommands: [
            {
              name: "agent",
              description:
                "Install Railway agent skills + MCP server into your editor and log in",
              options: [
                {
                  name: ["-y", "--yes"],
                  description:
                    "Skip prompts and accept defaults: auto-detect installed editors, skip the login flow",
                },
                {
                  name: "--remote",
                  description:
                    "Configure the remote MCP server via the CLI proxy (`railway mcp proxy` → mcp.railway.com, auth via `railway login`)",
                  exclusiveOn: ["--local"],
                },
                {
                  name: "--local",
                  description:
                    "Configure the local GraphQL-backed MCP server (`railway mcp local`) instead of the remote CLI proxy default",
                  exclusiveOn: ["--remote", "--oauth"],
                },
                {
                  name: "--oauth",
                  description:
                    "Use editor OAuth against https://mcp.railway.com directly (not the CLI proxy)",
                  exclusiveOn: ["--local"],
                },
              ],
            },
          ],
        },
        {
          name: "desktop",
          description: "Connect a desktop coding app to a cloud agent",
          options: [
            { name: "--claude", description: "Configure Claude Code Desktop" },
            {
              name: "--codex",
              description:
                "Alias for `railway code --codex desktop-only` when selected alone",
            },
            {
              name: "--opencode",
              description:
                "Start OpenCode on the agent and configure its Desktop app connection",
            },
            {
              name: "--agent",
              description:
                "Agent to point the app at, by name or id (defaults to this environment's, creating one if there is none)",
              args: { name: "name-or-id" },
            },
            {
              name: "--new",
              description:
                "Always create a fresh agent instead of reusing this environment's",
              exclusiveOn: ["--agent", "--remove"],
            },
            {
              name: "--dir",
              description: "Directory sessions open in on the agent",
              args: { name: "path", default: "/app" },
            },
            {
              name: "--alias",
              description:
                "Host alias to write (Codex: railway-<name>; other apps: railway-agent-<name>)",
              args: { name: "alias" },
            },
            {
              name: "--ssh-config",
              description: "SSH config file to write",
              args: { name: "path", template: "filepaths" },
            },
            {
              name: "--dry-run",
              description: "Print the changes without writing anything",
            },
            {
              name: "--remove",
              description: "Remove what this command wrote, for the same agent",
              exclusiveOn: ["--dry-run", "--dir"],
            },
            {
              name: "--no-verify",
              description:
                "Skip SSH probes (backend endpoint authentication is always checked)",
            },
            environmentOption,
            projectOption2,
          ],
        },
        {
          name: "manage",
          description:
            "Open the TUI directly on the manage screen, skipping the first-run nudge",
        },
        {
          name: "start",
          description:
            "Launch a coding agent on a cloud agent VM, without the TUI",
          options: [
            codexOption,
            opencodeOption,
            connectionJsonOption,
            claudeOption,
            grokOption,
            railwayOption,
            newOption,
            bootstrapOption,
            noBootstrapOption,
            keepAwakeOption,
            rmOption,
            refreshAuthOption,
            nameOption,
            variableOption,
            codeEndpointOption,
            codePortOption,
            envFileOption,
            environmentOption,
            projectOption2,
            dirOption,
            agentOption,
          ],
          args: [
            {
              name: "boot-variables",
              description:
                "Internal create-time variables supplied by desktop setup",
            },
            {
              name: "local-name-project",
              description:
                "Preserve directory-based naming when Desktop/the TUI pins a resolved target",
              isOptional: true,
            },
            {
              name: "agent-args",
              description:
                "Client action: remote, connect [AGENT], desktop-only (Codex); or agent arguments after --",
              isOptional: true,
              isVariadic: true,
            },
            {
              name: "initial-prompt",
              description: "A task to hand the agent as it starts",
              isOptional: true,
            },
            {
              name: "agent-id",
              description: "Use exactly this agent",
              isOptional: true,
            },
            {
              name: "shell",
              description:
                "Launch no harness at all — just the VM's login shell",
              suggestions: ["true", "false"],
            },
            {
              name: "app-mode",
              description:
                "Provision for an external app rather than for a session this CLI opens: seed the credential and the skills, but leave the login shell alone",
              suggestions: ["true", "false"],
            },
            {
              name: "bootstrap-setup",
              description:
                "Temporary bootstrap setup VMs never become remembered launch targets",
              suggestions: ["true", "false"],
            },
            {
              name: "client-on-agent",
              description:
                "Explicit `remote` mode keeps both client and server inside the VM",
              suggestions: ["true", "false"],
            },
            {
              name: "resume-session-id",
              description:
                "Resume this exact harness conversation instead of starting a new one — the harness's own session id, from the platform's reported sessions",
              isOptional: true,
            },
          ],
        },
        {
          name: ["list", "ls"],
          description: "List your cloud agents",
          options: [
            {
              name: "--all",
              description:
                "Include agents belonging to other members of the environment",
            },
            {
              name: "--archived",
              description: "List archived agents instead of the rest",
            },
            jsonOption2,
            environmentOption,
            projectOption2,
          ],
        },
        {
          name: ["create", "new"],
          description: "Create a cloud agent VM, without connecting to it",
          options: [
            {
              name: "--code-endpoint",
              description:
                "Provision the public code endpoint (defaults to port 4096)",
            },
            {
              name: "--code-port",
              description: "Provision the public code endpoint on this port",
              args: { name: "code-port" },
            },
            {
              name: "--from-checkpoint",
              description:
                "Restore this cloud-agent checkpoint into the new VM",
              args: { name: "checkpoint-id" },
            },
            {
              name: "--bootstrap",
              description:
                "Start from this named bootstrap instead of your local environment default",
              exclusiveOn: ["--from-checkpoint", "--no-bootstrap"],
              args: { name: "bootstrap" },
            },
            {
              name: "--no-bootstrap",
              description:
                "Create a clean VM without your local environment default bootstrap",
              exclusiveOn: ["--from-checkpoint"],
            },
            {
              name: "--variable",
              description:
                "Set a variable on the agent (repeatable, comma-separable)",
              isRepeatable: true,
              args: { name: "key=value[,key=value...]" },
            },
            envFileOption2,
            {
              name: "--no-wait",
              description:
                "Return as soon as the agent is requested, without waiting for it to finish booting",
            },
            jsonOption2,
            environmentOption,
            projectOption2,
          ],
          args: {
            name: "name",
            description: "Name for the agent (defaults to a generated one)",
            isOptional: true,
          },
        },
        {
          name: ["ssh", "connect"],
          description: "Connect to an existing cloud agent over SSH",
          options: [
            {
              name: "--session",
              description:
                "Attach to a durable session, optionally by name, instead of opening a shell",
              args: { name: "name", isOptional: true },
            },
            {
              name: "--resume",
              description:
                "Resume the most recent Claude conversation in a new terminal session",
              exclusiveOn: ["--session"],
            },
            keepAwakeOption,
            environmentOption,
            projectOption2,
          ],
          args: [
            {
              name: "agent",
              description:
                "Agent name or ID (defaults to this directory's, or your only one)",
              isOptional: true,
            },
            {
              name: "command",
              description: "Run this command instead of opening a shell",
              isOptional: true,
              isVariadic: true,
            },
          ],
        },
        {
          name: "wake",
          description: "Wake a sleeping agent",
          options: [
            {
              name: "--no-wait",
              description:
                "Return as soon as the wake is requested, without waiting for the agent to come up",
            },
            environmentOption,
            projectOption2,
          ],
          args: {
            name: "agent",
            description:
              "Agent name or ID (defaults to this directory's, or your only one)",
            isOptional: true,
          },
        },
        {
          name: "sleep",
          description:
            "Put an agent to sleep, keeping its disk and stopping the compute bill",
          options: [
            {
              name: "--all",
              description:
                "Sleep every running agent you own (narrowed by --environment when given)",
            },
            environmentOption,
            projectOption2,
          ],
          args: {
            name: "agent",
            description:
              "Agent name or ID (defaults to this directory's, or your only one)",
            isOptional: true,
          },
        },
        {
          name: ["delete", "rm"],
          description: "Delete an agent and everything on its disk",
          options: [yesOption, environmentOption, projectOption2],
          args: {
            name: "agent",
            description:
              "Agent name or ID (defaults to this directory's, or your only one)",
            isOptional: true,
          },
        },
        {
          name: "herdr",
          description: "Show cloud agents in herdr as machines (herdr 0.9+)",
          subcommands: [
            {
              name: "install",
              description:
                "Register the herdr plugin: write its manifest and link it",
              options: [
                {
                  name: "--remove",
                  description: "Unlink the plugin and delete its manifest",
                },
                {
                  name: "--print",
                  description:
                    "Print the manifest and exit without writing or linking",
                  exclusiveOn: ["--remove"],
                },
                {
                  name: "--no-keys",
                  description:
                    "Leave herdr's config.toml alone (no keybindings added or removed)",
                },
              ],
            },
            {
              name: "new",
              description:
                "Create a cloud agent and add it to herdr as a machine",
              options: [
                {
                  name: ["-p", "--project"],
                  description: "Project ID (skips the project picker)",
                  args: { name: "project" },
                },
                {
                  name: ["-e", "--environment"],
                  description: "Environment ID (skips the environment picker)",
                  args: { name: "environment" },
                },
                {
                  name: "--claude",
                  description: "Provision for Claude Code",
                  exclusiveOn: ["--codex", "--grok", "--railway"],
                },
                {
                  name: "--codex",
                  description: "Provision for OpenAI Codex",
                  exclusiveOn: ["--grok", "--railway"],
                },
                {
                  name: "--grok",
                  description: "Provision for xAI Grok",
                  exclusiveOn: ["--railway"],
                },
                {
                  name: "--railway",
                  description:
                    "Provision for Railway's own agent (no sign-in needed)",
                },
                {
                  name: "--open",
                  description:
                    "Open this flow in a herdr popup pane instead of running it here",
                },
                {
                  name: "--dry-run",
                  description:
                    "Pick and name only; print what would be created without creating it",
                },
              ],
              args: {
                name: "name",
                description: "Name for the agent (defaults to a generated one)",
                isOptional: true,
              },
            },
            {
              name: "agents",
              description: "Pick an agent: connect, sleep, wake, delete",
              options: [
                {
                  name: "--open",
                  description:
                    "Open the picker in a herdr popup pane instead of this terminal",
                },
                {
                  name: "--remote",
                  description:
                    "Running on a cloud agent VM: no herdr machines here, so connect and new are left to Local; the row for this VM is marked",
                },
                {
                  name: "--wake",
                  description:
                    "Only sleeping agents; with exactly one, wake it without asking",
                },
              ],
            },
            {
              name: "sync",
              description:
                "Reconcile herdr's saved machines with your cloud agents",
              options: [
                {
                  name: "--dry-run",
                  description: "Print what would change and change nothing",
                },
                jsonOption2,
                {
                  name: "--debounce",
                  description:
                    "Do nothing when the last sync was this many seconds ago or less",
                  args: { name: "seconds" },
                },
                {
                  name: "--spawn-watch",
                  description:
                    "Also make sure this session's watcher is running",
                },
              ],
            },
            {
              name: "bootstrap",
              description:
                "Prepare an agent's VM for herdr: integrations, config, workspace",
              subcommands: [
                {
                  name: ["list", "ls"],
                  description:
                    "List saved bootstraps and their status in an environment",
                  options: [environmentOption, projectOption2, jsonOption2],
                },
                {
                  name: "save",
                  description:
                    "Save a running VM as a named bootstrap (or a new version of that name)",
                  options: [
                    {
                      name: "--agent",
                      description: "Running VM to capture, by name or ID",
                      args: { name: "agent" },
                    },
                    {
                      name: "--default",
                      description:
                        "Make this the local default after its capture succeeds",
                    },
                    {
                      name: "--variable",
                      description:
                        "Set bootstrap variables (repeatable or comma-separated; supports service references)",
                      isRepeatable: true,
                      args: { name: "key=value[,key=value...]" },
                    },
                    {
                      name: "--env-file",
                      description:
                        "Load bootstrap variables from a .env file (repeatable)",
                      isRepeatable: true,
                      args: { name: "path", template: "filepaths" },
                    },
                    environmentOption,
                    projectOption2,
                    jsonOption2,
                  ],
                  args: {
                    name: "name",
                    description:
                      "Bootstrap name, unique within this environment",
                  },
                },
                {
                  name: "default",
                  description:
                    "Choose the default bootstrap for new VMs in an environment",
                  options: [environmentOption, projectOption2, jsonOption2],
                  args: {
                    name: "name",
                    description:
                      "Name of a ready bootstrap in this environment",
                  },
                },
              ],
            },
            {
              name: "watch",
              description:
                "Follow cloud agent state and keep herdr's machines in step",
              options: [
                {
                  name: "--foreground",
                  description:
                    "Stay attached to this terminal and print every event; detached, only subscriptions, failures and applied changes are logged",
                },
              ],
            },
          ],
        },
        {
          name: "task",
          description:
            "Run and manage tasks: hand work to a cloud agent and get the result back",
          subcommands: [
            {
              name: "run",
              description: "Hand a task to a cloud agent",
              options: [
                {
                  name: "--agent",
                  description:
                    "Run on this existing agent (name or ID) instead of starting a new one",
                  exclusiveOn: ["--reply-to", "--conversation"],
                  args: { name: "agent" },
                },
                {
                  name: "--session",
                  description: "Continue this session on --agent",
                  dependsOn: ["--agent"],
                  args: { name: "id" },
                },
                {
                  name: "--reply-to",
                  description:
                    "Continue the agent and session an earlier task ran on",
                  exclusiveOn: ["--conversation"],
                  args: { name: "task-id" },
                },
                {
                  name: "--conversation",
                  description: "Your own key for a conversation",
                  args: { name: "key" },
                },
                {
                  name: "--name",
                  description: "Name for a newly created agent",
                  args: { name: "name" },
                },
                {
                  name: "--repo",
                  description: "GitHub owner/repo to clone into a new agent",
                  args: { name: "owner/repo" },
                },
                {
                  name: "--branch",
                  description: "Branch of --repo to check out",
                  dependsOn: ["--repo"],
                  args: { name: "branch" },
                },
                {
                  name: "--service",
                  description:
                    "Service whose source a new agent starts from (ID)",
                  args: { name: "service-id" },
                },
                {
                  name: "--model",
                  description: "Model to run on (see `railway ca task models`)",
                  args: { name: "model" },
                },
                {
                  name: "--effort",
                  description:
                    "Reasoning effort, one of the model's supported values",
                  args: { name: "effort" },
                },
                {
                  name: "--image",
                  description:
                    "Image the agent sees with the prompt: a file path or an https URL. Repeat for up to four",
                  isRepeatable: true,
                  args: { name: "path-or-url" },
                },
                {
                  name: "--output-schema",
                  description:
                    "File holding a JSON Schema; the result then carries matching structured output",
                  args: { name: "file", template: "filepaths" },
                },
                {
                  name: "--idempotency-key",
                  description:
                    "Resending a request with the same key returns the original task instead of starting a second one",
                  args: { name: "key" },
                },
                {
                  name: ["-w", "--watch"],
                  description:
                    "Stay and follow the task to its result, instead of handing it off and returning",
                },
                {
                  name: "--no-wait",
                  description:
                    "Accepted for compatibility: returning at once is the default",
                  hidden: true,
                  exclusiveOn: ["--watch"],
                },
                {
                  name: "--interactive",
                  description:
                    "Let the agent ask you a question and wait for the answer, instead of deciding on its own",
                },
                {
                  name: ["-y", "--accept", "--yes"],
                  description:
                    "Accept that this may start a new, billed cloud agent VM, without being asked",
                },
                jsonOption2,
                environmentOption,
                projectOption2,
              ],
              args: {
                name: "prompt",
                description: "What the agent should do",
                isOptional: true,
              },
            },
            {
              name: ["status", "check"],
              description: "Show a task's state and result",
              options: [
                {
                  name: ["-w", "--watch", "--wait"],
                  description:
                    "Stay and follow the task until it finishes or needs an answer",
                },
                jsonOption2,
                environmentOption,
                projectOption2,
              ],
              args: { name: "task", description: "Task ID" },
            },
            {
              name: ["list", "ls"],
              description: "List tasks in an environment, newest first",
              options: [
                {
                  name: "--status",
                  description: "Only tasks in this state",
                  args: {
                    name: "status",
                    suggestions: [
                      "pending",
                      "running",
                      "awaiting-input",
                      "completed",
                      "failed",
                      "cancelled",
                    ],
                  },
                },
                {
                  name: "--agent",
                  description: "Only tasks that ran on this agent (name or ID)",
                  args: { name: "agent" },
                },
                {
                  name: "--limit",
                  description: "How many tasks to show (1-100)",
                  args: { name: "limit", default: "20" },
                },
                jsonOption2,
                environmentOption,
                projectOption2,
              ],
            },
            {
              name: "respond",
              description: "Answer a question or approval a task is waiting on",
              options: [
                {
                  name: "--request",
                  description: "Which request to answer",
                  args: { name: "id" },
                },
                {
                  name: "--field",
                  description: "Form value for `accept`, as name=value",
                  isRepeatable: true,
                  args: { name: "name=value" },
                },
                jsonOption2,
                environmentOption,
                projectOption2,
              ],
              args: [
                { name: "task", description: "Task ID" },
                {
                  name: "answer",
                  description: "Your answer",
                  suggestions: ["allow", "deny", "accept", "decline", "cancel"],
                },
              ],
            },
            {
              name: "cancel",
              description: "Cancel a task in flight",
              options: [jsonOption2],
              args: { name: "task", description: "Task ID" },
            },
            {
              name: "models",
              description: "List the models a task can run on",
              options: [jsonOption2, environmentOption, projectOption2],
            },
          ],
        },
      ],
      options: [
        codexOption,
        opencodeOption,
        connectionJsonOption,
        claudeOption,
        grokOption,
        railwayOption,
        newOption,
        bootstrapOption,
        noBootstrapOption,
        keepAwakeOption,
        rmOption,
        refreshAuthOption,
        nameOption,
        variableOption,
        codeEndpointOption,
        codePortOption,
        envFileOption,
        environmentOption,
        projectOption2,
        dirOption,
        agentOption,
      ],
      args: [
        {
          name: "boot-variables",
          description:
            "Internal create-time variables supplied by desktop setup",
        },
        {
          name: "local-name-project",
          description:
            "Preserve directory-based naming when Desktop/the TUI pins a resolved target",
          isOptional: true,
        },
        {
          name: "agent-args",
          description:
            "Client action: remote, connect [AGENT], desktop-only (Codex); or agent arguments after --",
          isOptional: true,
          isVariadic: true,
        },
        {
          name: "initial-prompt",
          description: "A task to hand the agent as it starts",
          isOptional: true,
        },
        {
          name: "agent-id",
          description: "Use exactly this agent",
          isOptional: true,
        },
        {
          name: "shell",
          description: "Launch no harness at all — just the VM's login shell",
          suggestions: ["true", "false"],
        },
        {
          name: "app-mode",
          description:
            "Provision for an external app rather than for a session this CLI opens: seed the credential and the skills, but leave the login shell alone",
          suggestions: ["true", "false"],
        },
        {
          name: "bootstrap-setup",
          description:
            "Temporary bootstrap setup VMs never become remembered launch targets",
          suggestions: ["true", "false"],
        },
        {
          name: "client-on-agent",
          description:
            "Explicit `remote` mode keeps both client and server inside the VM",
          suggestions: ["true", "false"],
        },
        {
          name: "resume-session-id",
          description:
            "Resume this exact harness conversation instead of starting a new one — the harness's own session id, from the platform's reported sessions",
          isOptional: true,
        },
      ],
    },
    {
      name: "code",
      description: "Launch a coding agent on a Railway cloud agent VM",
      subcommands: [
        {
          name: "get-config",
          description:
            "Show locally saved connection details for the latest or a named agent",
          options: [
            {
              name: "--json",
              description:
                "Output the saved configuration as JSON, including connection credentials",
            },
          ],
          args: {
            name: "agent",
            description:
              "Agent name or ID (defaults to the most recently saved connection)",
            isOptional: true,
          },
        },
      ],
      options: [
        codexOption,
        opencodeOption,
        connectionJsonOption,
        claudeOption,
        grokOption,
        railwayOption,
        newOption,
        bootstrapOption,
        noBootstrapOption,
        keepAwakeOption,
        rmOption,
        refreshAuthOption,
        nameOption,
        variableOption,
        codeEndpointOption,
        codePortOption,
        envFileOption,
        environmentOption,
        projectOption2,
        dirOption,
        agentOption,
      ],
      args: [
        {
          name: "boot-variables",
          description:
            "Internal create-time variables supplied by desktop setup",
        },
        {
          name: "local-name-project",
          description:
            "Preserve directory-based naming when Desktop/the TUI pins a resolved target",
          isOptional: true,
        },
        {
          name: "agent-args",
          description:
            "Client action: remote, connect [AGENT], desktop-only (Codex); or agent arguments after --",
          isOptional: true,
          isVariadic: true,
        },
        {
          name: "initial-prompt",
          description: "A task to hand the agent as it starts",
          isOptional: true,
        },
        {
          name: "agent-id",
          description: "Use exactly this agent",
          isOptional: true,
        },
        {
          name: "shell",
          description: "Launch no harness at all — just the VM's login shell",
          suggestions: ["true", "false"],
        },
        {
          name: "app-mode",
          description:
            "Provision for an external app rather than for a session this CLI opens: seed the credential and the skills, but leave the login shell alone",
          suggestions: ["true", "false"],
        },
        {
          name: "bootstrap-setup",
          description:
            "Temporary bootstrap setup VMs never become remembered launch targets",
          suggestions: ["true", "false"],
        },
        {
          name: "client-on-agent",
          description:
            "Explicit `remote` mode keeps both client and server inside the VM",
          suggestions: ["true", "false"],
        },
        {
          name: "resume-session-id",
          description:
            "Resume this exact harness conversation instead of starting a new one — the harness's own session id, from the platform's reported sessions",
          isOptional: true,
        },
      ],
    },
    {
      name: "completion",
      description: "Generate completion script",
      args: {
        name: "shell",
        suggestions: ["bash", "elvish", "fish", "powershell", "zsh"],
      },
    },
    {
      name: "config",
      description: "Manage Railway configuration and IaC ownership",
      subcommands: [
        {
          name: "plan",
          description:
            "Preview the changes Railway would make from the authoring file without applying them",
          options: [
            fileOption,
            environmentOption3,
            jsonOption4,
            yesOption3,
            confirmDestructiveOption,
            decryptVariablesOption,
            includeTypesOption,
            runnerOption,
            verboseOption,
            detailedExitCodeOption,
            showValuesOption,
            outOption,
            planOption,
            sourceTreeOption,
          ],
        },
        {
          name: "stage",
          description:
            "Staged Railway configuration changes are not available yet; use `railway config plan` or `railway config apply`",
          hidden: true,
          options: [
            fileOption,
            environmentOption3,
            jsonOption4,
            yesOption3,
            confirmDestructiveOption,
            decryptVariablesOption,
            includeTypesOption,
            runnerOption,
            verboseOption,
            detailedExitCodeOption,
            showValuesOption,
            outOption,
            planOption,
            sourceTreeOption,
          ],
        },
        {
          name: "apply",
          description:
            "Apply the changes from the authoring file to the linked Railway project",
          options: [
            fileOption,
            environmentOption3,
            jsonOption4,
            yesOption3,
            confirmDestructiveOption,
            decryptVariablesOption,
            includeTypesOption,
            runnerOption,
            verboseOption,
            detailedExitCodeOption,
            showValuesOption,
            outOption,
            planOption,
            sourceTreeOption,
          ],
        },
        {
          name: "init",
          description:
            "Create .railway/railway.ts (or .py / .go) for this repo or import from the linked project",
          options: [
            {
              name: "--force",
              description: "Overwrite an existing authoring file",
            },
            {
              name: "--variables",
              description:
                "Who owns service variables when importing: `managed` or `unmanaged`",
              args: {
                name: "managed|unmanaged",
                suggestions: ["managed", "unmanaged"],
              },
            },
          ],
        },
        {
          name: "pull",
          description:
            "Import the linked Railway project's current configuration into the authoring file",
          options: [
            {
              name: "--force",
              description: "Overwrite an existing authoring file",
            },
            environmentOption3,
            {
              name: "--json",
              description:
                "Output raw imported graph JSON instead of writing files",
            },
            runnerOption,
            {
              name: "--omit-preserved-variables",
              description:
                "Omit unknown imported variables instead of rendering them as preserve()",
            },
            {
              name: "--include-variables",
              description:
                "Decrypt and inline non-sealed variable values into the authoring file",
            },
            {
              name: "--agent",
              description:
                "Ask an agent to turn imported state into idiomatic authoring code",
            },
            {
              name: "--variables",
              description:
                "Who owns service variables: `managed` or `unmanaged`",
              args: {
                name: "managed|unmanaged",
                suggestions: ["managed", "unmanaged"],
              },
            },
          ],
        },
        {
          name: "migrate",
          description:
            "Translate railway.json / railway.toml into an authoring file",
          subcommands: [
            {
              name: "cutover",
              description:
                "Switch services off Config as Code so IaC can manage them",
              options: [
                {
                  name: "--service",
                  description: "Cut over only this service",
                  args: { name: "service" },
                },
                { name: "--yes", description: "Skip the confirmation prompt" },
              ],
            },
            {
              name: "undo",
              description:
                "Restore the Config as Code paths saved by the last cutover",
              options: [
                { name: "--yes", description: "Skip the confirmation prompt" },
              ],
            },
            {
              name: "status",
              description:
                "Show migration progress: which services still read Config as Code",
            },
          ],
          options: [
            {
              name: "--apply",
              description: "Write `.railway/railway.ts` (default is dry-run)",
            },
            {
              name: "--force",
              description: "Overwrite an existing `.railway/railway.ts`",
            },
            {
              name: "--show",
              description:
                "Print the full generated authoring file instead of a summary",
            },
            {
              name: "--delete-files",
              description:
                "Delete discovered `railway.json` / `railway.toml` from disk",
            },
            {
              name: "--service",
              description:
                "Migrate only the service with this name in the linked environment",
              args: { name: "service" },
            },
            {
              name: "--lang",
              description:
                "Authoring language to emit: `ts` (default), `py`, or `go`",
              args: { name: "lang", default: "ts" },
            },
            {
              name: "--variables",
              description:
                "Who owns service variables: `managed` or `unmanaged`",
              args: {
                name: "managed|unmanaged",
                suggestions: ["managed", "unmanaged"],
              },
            },
          ],
        },
        {
          name: "partials",
          description:
            "List, release, or transfer named IaC partial ownership without changing resources",
          subcommands: [
            {
              name: "list",
              description:
                "List partials and their owned resource addresses in the linked environment",
              options: [
                {
                  name: "--json",
                  description:
                    "Output the complete address-to-owner map as JSON",
                },
              ],
            },
            {
              name: "release",
              description:
                "Release selected resources, or the entire partial when --resource is omitted",
              options: [
                {
                  name: "--resource",
                  description:
                    "Exact owned address (for example service.api); repeat to select several",
                  isRepeatable: true,
                  args: { name: "address" },
                },
                {
                  name: "--dry-run",
                  description:
                    "Preview exact affected addresses without changing ownership",
                  exclusiveOn: ["--yes"],
                },
                {
                  name: "--yes",
                  description:
                    "Confirm the ownership change and proceed non-interactively",
                },
                {
                  name: "--json",
                  description:
                    "Output JSON and proceed without prompting, as with `railway config apply --json`",
                },
                {
                  name: "--base-config-etag",
                  description:
                    "Require the configEtag from `list`, or baseConfigEtag from a previous --dry-run",
                  args: { name: "etag" },
                },
              ],
              args: {
                name: "partial",
                description:
                  "Named partial to release; use `railway config partials list` to discover names",
              },
            },
            {
              name: "transfer",
              description:
                "Transfer selected resources, or the entire source when --resource is omitted",
              options: [
                {
                  name: "--resource",
                  description:
                    "Exact owned address (for example service.api); repeat to select several",
                  isRepeatable: true,
                  args: { name: "address" },
                },
                {
                  name: "--dry-run",
                  description:
                    "Preview exact affected addresses without changing ownership",
                  exclusiveOn: ["--yes"],
                },
                {
                  name: "--yes",
                  description:
                    "Confirm the ownership change and proceed non-interactively",
                },
                {
                  name: "--json",
                  description:
                    "Output JSON and proceed without prompting, as with `railway config apply --json`",
                },
                {
                  name: "--base-config-etag",
                  description:
                    "Require the configEtag from `list`, or baseConfigEtag from a previous --dry-run",
                  args: { name: "etag" },
                },
              ],
              args: [
                {
                  name: "from-partial",
                  description:
                    "Named partial that currently owns the resources",
                },
                {
                  name: "to-partial",
                  description:
                    "New or existing named partial to receive ownership",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "connect",
      description:
        "Connect to a database's shell (psql for Postgres, mongosh for MongoDB, etc.)",
      options: [
        environmentOption5,
        projectOption,
        {
          name: "--ssh",
          description:
            "Tunnel to the database over SSH instead of a public TCP proxy",
        },
        {
          name: "--no-ssh",
          description:
            "Force the public TCP proxy path and never fall back to SSH",
          exclusiveOn: ["--ssh"],
        },
        {
          name: "--tunnel-only",
          description:
            "Open the local tunnel without launching a database client",
          exclusiveOn: ["--no-ssh"],
        },
        {
          name: ["-P", "--port"],
          description:
            "Local port to bind for the SSH tunnel (defaults to an ephemeral port)",
          args: { name: "port" },
        },
      ],
      args: {
        name: "service-name",
        description: "The name of the database to connect to",
        isOptional: true,
      },
    },
    {
      name: "cron",
      description:
        "View recent runs of a cron service or trigger one off-schedule",
      subcommands: [
        {
          name: ["list", "ls", "runs"],
          description:
            "List recent runs of a cron service with status, start time and duration",
          options: [
            serviceOption2,
            {
              name: ["-e", "--environment"],
              description: "Environment (defaults to linked environment)",
              args: { name: "environment" },
            },
            {
              name: ["-p", "--project"],
              description: "Project ID or name (defaults to linked project)",
              args: { name: "project" },
            },
            {
              name: "--limit",
              description:
                "Maximum number of runs to show (default: 20, max: 1000)",
              args: { name: "limit", default: "20" },
            },
            jsonOption,
          ],
        },
        {
          name: ["run", "trigger"],
          description: "Trigger an off-schedule run of a cron service now",
          options: [
            serviceOption2,
            {
              name: ["-e", "--environment"],
              description: "Environment (defaults to linked environment)",
              args: { name: "environment" },
            },
            {
              name: ["-p", "--project"],
              description: "Project ID or name (defaults to linked project)",
              args: { name: "project" },
            },
            yesOption2,
            jsonOption,
          ],
        },
      ],
    },
    {
      name: ["delete", "rm", "remove"],
      description: "Delete a project",
      options: [
        {
          name: ["-p", "--project"],
          description: "The project ID or name to delete",
          args: { name: "project" },
        },
        yesOption2,
        jsonOption,
        opt2faCodeOption,
      ],
    },
    {
      name: "deploy",
      description: "Provisions a template into your project",
      options: [
        {
          name: ["-t", "--template"],
          description: "The code of the template to deploy",
          isRepeatable: true,
          args: { name: "template" },
        },
        {
          name: ["-v", "--variable"],
          description:
            'The "{key}={value}" environment variable pair to set the template variables',
          isRepeatable: true,
          args: { name: "variable" },
        },
      ],
    },
    {
      name: ["deployment", "deployments"],
      description: "Manage deployments",
      subcommands: [
        {
          name: ["list", "ls"],
          description:
            "List deployments for a service with IDs, statuses and other metadata",
          options: [
            {
              name: ["-s", "--service"],
              description:
                "Service name or ID to list deployments for (defaults to linked service)",
              args: { name: "service" },
            },
            {
              name: ["-e", "--environment"],
              description:
                "Environment to list deployments from (defaults to linked environment)",
              args: { name: "environment" },
            },
            {
              name: ["-p", "--project"],
              description:
                "Project ID or name to list deployments from (defaults to linked project)",
              args: { name: "project" },
            },
            {
              name: "--limit",
              description:
                "Maximum number of deployments to show (default: 20, max: 1000)",
              args: { name: "limit", default: "20" },
            },
            jsonOption,
          ],
        },
        {
          name: ["up", "deploy"],
          description: "Upload and deploy project from the current directory",
          options: [
            {
              name: ["-d", "--detach", "--no-wait"],
              description:
                "Don't attach to the log stream — start the deploy and return immediately",
            },
            {
              name: ["-y", "--yes"],
              description:
                "Accept all defaults — skip the auth confirm prompt for unauthed users and skip the project-name prompt when creating a new project from this directory",
            },
            {
              name: ["-c", "--ci"],
              description:
                "Stream build logs only, then exit (equivalent to setting $CI=true)",
            },
            {
              name: ["-s", "--service"],
              description: "Service to deploy to (defaults to linked service)",
              args: { name: "service" },
            },
            {
              name: ["-e", "--environment"],
              description:
                "Environment to deploy to (defaults to linked environment)",
              args: { name: "environment" },
            },
            {
              name: ["-p", "--project"],
              description:
                "Project ID to deploy to (defaults to linked project)",
              args: { name: "project-id" },
            },
            {
              name: ["-w", "--workspace"],
              description:
                "Workspace to create a new project in (first-run / --new)",
              args: { name: "workspace" },
            },
            {
              name: "--new",
              description:
                "Create a NEW project + service from this directory and deploy it, even if one is already linked",
            },
            {
              name: "--name",
              description:
                "Name for a newly created project (defaults to the current directory's name)",
              args: { name: "name" },
            },
            {
              name: "--no-gitignore",
              description: "Don't ignore paths from .gitignore",
            },
            {
              name: "--path-as-root",
              description:
                "Use the path argument as the prefix for the archive instead of the project directory",
            },
            { name: "--verbose", description: "Verbose output" },
            {
              name: "--json",
              description:
                "Output logs in JSON format (implies CI mode behavior)",
            },
            {
              name: ["-m", "--message"],
              description: "Message to attach to the deployment",
              args: { name: "message" },
            },
          ],
          args: { name: "path", isOptional: true, template: "folders" },
        },
        {
          name: "redeploy",
          description: "Redeploy the latest deployment of a service",
          options: [
            serviceOption3,
            environmentOption6,
            projectOption,
            yesOption2,
            jsonOption,
            fromSourceOption,
            commitOption,
          ],
        },
      ],
    },
    {
      name: ["dev", "develop"],
      description: "Run Railway services locally",
      subcommands: [
        {
          name: ["up", "start"],
          description: "Start services (default when no subcommand provided)",
          options: [
            environmentOption4,
            outputOption,
            {
              name: "--dry-run",
              description:
                "Only generate docker-compose.yml, don't run docker compose up",
            },
            {
              name: "--no-https",
              description:
                "Disable HTTPS and pretty URLs (use localhost instead)",
            },
            {
              name: ["-v", "--verbose"],
              description: "Show verbose domain replacement info",
            },
            {
              name: "--no-tui",
              description: "Disable TUI, stream logs to stdout instead",
            },
          ],
        },
        {
          name: ["down", "stop"],
          description: "Stop services",
          options: [outputOption],
        },
        {
          name: ["clean", "reset"],
          description: "Stop services and remove volumes/data",
          options: [outputOption],
        },
        {
          name: ["configure", "config"],
          description: "Configure local code services",
          options: [
            {
              name: "--service",
              description: "Specific service to configure (by name)",
              args: { name: "service" },
            },
            {
              name: "--remove",
              description:
                "Remove configuration for a service (optionally specify service name)",
              args: { name: "remove", isOptional: true },
            },
          ],
        },
      ],
      options: [
        {
          name: ["-v", "--verbose"],
          description:
            "Show verbose domain replacement info (for default 'up' command)",
        },
      ],
    },
    {
      name: "domain",
      description:
        "Add, list, inspect, update, or delete domains for a service",
      subcommands: [
        { name: ["list", "ls"], description: "List domains for a service" },
        {
          name: "status",
          description: "Show status and DNS details for a domain",
          args: {
            name: "domain-or-id",
            description: "Domain name, URL, or domain ID",
          },
        },
        {
          name: ["delete", "remove", "rm"],
          description: "Delete a custom or service domain",
          options: [yesOption2],
          args: {
            name: "domain-or-id",
            description: "Domain name, URL, or domain ID",
          },
        },
        {
          name: ["update", "edit"],
          description: "Update a domain",
          options: [
            {
              name: "--port",
              description: "The target port to route HTTP traffic to",
              args: { name: "port" },
            },
            {
              name: "--domain",
              description: "Rename a Railway-provided service domain",
              args: { name: "domain" },
            },
          ],
          args: {
            name: "domain-or-id",
            description: "Domain name, URL, or domain ID",
          },
        },
        {
          name: "certificate",
          description: "Manage custom domain certificates",
          subcommands: [
            {
              name: "retry",
              description: "Retry certificate issuance for a custom domain",
              args: {
                name: "domain-or-id",
                description: "Domain name, URL, or domain ID",
              },
            },
          ],
        },
      ],
      options: [
        {
          name: ["-p", "--port"],
          description:
            "The port to connect to the domain when creating a domain",
          args: { name: "port" },
        },
        {
          name: ["-s", "--service"],
          description: "The name of the service to manage domains for",
          isPersistent: true,
          args: { name: "service" },
        },
        environmentOption2,
        {
          name: "--project",
          description: "Project ID to use (defaults to linked project)",
          isPersistent: true,
          args: { name: "project-id" },
        },
        jsonOption3,
      ],
      args: {
        name: "domain",
        description: "Optionally, specify a custom domain to use",
        isOptional: true,
      },
    },
    {
      name: "docs",
      description:
        "Open Railway Documentation in default browser, or print doc URLs in non-interactive mode",
    },
    {
      name: "down",
      description: "Remove the most recent deployment",
      options: [
        {
          name: ["-s", "--service"],
          description:
            "Service to remove the deployment from (defaults to linked service)",
          args: { name: "service" },
        },
        {
          name: ["-e", "--environment"],
          description:
            "Environment to remove the deployment from (defaults to linked environment)",
          args: { name: "environment" },
        },
        projectOption,
        yesOption2,
      ],
    },
    {
      name: ["environment", "env"],
      description: "Create, delete or link an environment",
      subcommands: [
        {
          name: "link",
          description: "Link an environment to the current project",
          options: [jsonOption],
          args: {
            name: "environment",
            description: "The environment to link to",
            isOptional: true,
          },
        },
        {
          name: ["new", "create", "add"],
          description: "Create a new environment",
          options: [
            {
              name: ["-d", "-c", "--duplicate", "--copy"],
              description: "The name/ID of the environment to duplicate",
              args: { name: "duplicate" },
            },
            {
              name: ["-s", "--service-config"],
              description: "Configure a service using dot-path notation",
              isRepeatable: true,
              args: [{ name: "service" }, { name: "path" }, { name: "value" }],
            },
            {
              name: ["-v", "--service-variable"],
              description: "DEPRECATED: Use --service-config",
              hidden: true,
              isRepeatable: true,
              args: [{ name: "service" }, { name: "key=value" }],
            },
            jsonOption,
          ],
          args: {
            name: "name",
            description: "The name of the environment to create",
            isOptional: true,
          },
        },
        {
          name: ["delete", "rm", "remove"],
          description: "Delete an environment",
          options: [yesOption2, jsonOption, opt2faCodeOption],
          args: {
            name: "environment",
            description: "The environment to delete",
            isOptional: true,
          },
        },
        {
          name: ["edit", "update"],
          description: "Edit an environment's configuration",
          options: [
            {
              name: ["-p", "--project"],
              description:
                "Project ID/name to edit (defaults to linked project)",
              args: { name: "project" },
            },
            {
              name: ["-e", "--environment"],
              description:
                "The environment to edit (defaults to linked environment)",
              args: { name: "environment" },
            },
            {
              name: ["-s", "--service-config"],
              description: "Configure a service using dot-path notation",
              isRepeatable: true,
              args: [{ name: "service" }, { name: "path" }, { name: "value" }],
            },
            {
              name: ["-v", "--service-variable"],
              description: "DEPRECATED: Use --service-config",
              hidden: true,
              isRepeatable: true,
              args: [{ name: "service" }, { name: "key=value" }],
            },
            {
              name: ["-m", "--message"],
              description: "Commit message for the changes",
              args: { name: "message" },
            },
            {
              name: "--stage",
              description: "Stage changes without committing",
            },
            jsonOption,
          ],
        },
        {
          name: ["config", "show", "info"],
          description: "Show environment configuration",
          options: [
            {
              name: ["-e", "--environment"],
              description:
                "Environment to show config for (defaults to linked)",
              args: { name: "environment" },
            },
            jsonOption,
          ],
        },
        {
          name: ["list", "ls"],
          description: "List all environments in the project",
          options: [
            {
              name: "--ephemeral",
              description: "Show only ephemeral (PR) environments",
              exclusiveOn: ["--no-ephemeral"],
            },
            {
              name: "--no-ephemeral",
              description: "Hide ephemeral (PR) environments",
              exclusiveOn: ["--ephemeral"],
            },
            jsonOption,
          ],
        },
      ],
      options: [jsonOption],
      args: {
        name: "environment",
        description: "The environment to link to",
        isOptional: true,
      },
    },
    {
      name: ["flag", "flags"],
      description: "Manage feature flags",
      subcommands: [
        {
          name: ["list", "ls"],
          description: "List feature flags for the current project",
          options: [
            {
              name: "--full",
              description: "Show rule IDs and empty rule sections",
            },
          ],
        },
        {
          name: "set",
          description:
            "Set a flag's default value, or set a targeting rule with --when",
          options: [
            {
              name: "--when",
              description:
                'CEL expression subset, e.g. workspace_plan == "enterprise" or bucket(workspace_id) < 0.25 (also accepts raw JSON)',
              args: { name: "when" },
            },
            {
              name: "--rule-id",
              description:
                "Stable rule id for --when (defaults to a hash of name + expression)",
              args: { name: "rule-id" },
            },
            {
              name: "--force",
              description:
                "Allow replacing an existing flag's type (clears rules)",
            },
          ],
          args: [
            { name: "name", description: "Flag name" },
            {
              name: "value",
              description: "Default value, or rule value when --when is passed",
            },
          ],
        },
        {
          name: ["delete", "rm", "remove"],
          description: "Delete a feature flag",
          args: { name: "name", description: "Flag name" },
        },
        {
          name: "unset",
          description: "Remove a rule from a flag",
          options: [
            {
              name: "--rule-id",
              description: "Rule id to remove",
              args: { name: "rule-id" },
            },
          ],
          args: { name: "name", description: "Flag name" },
        },
      ],
      options: [
        {
          name: "--scope",
          description:
            "Project containing the flags, as project:<id> (defaults to the project token or linked project)",
          isPersistent: true,
          args: { name: "scope" },
        },
        {
          name: "--owner",
          description: "Deprecated",
          hidden: true,
          isPersistent: true,
          args: { name: "owner" },
        },
        jsonOption3,
      ],
    },
    {
      name: ["init", "new"],
      description: "Create a new project",
      options: [
        {
          name: ["-n", "--name"],
          description: "Project name",
          args: { name: "name" },
        },
        workspaceOption,
        jsonOption,
      ],
    },
    {
      name: "link",
      description:
        "Associate existing project with current directory, may specify projectId as an argument",
      options: [
        {
          name: ["-e", "--environment"],
          description: "Environment to link to",
          args: { name: "environment" },
        },
        {
          name: ["-p", "--project", "--project_id"],
          description: "Project to link to",
          args: { name: "project" },
        },
        {
          name: ["-s", "--service"],
          description: "The service to link to",
          args: { name: "service" },
        },
        {
          name: ["-t", "--team"],
          description:
            "The team to link to (deprecated: use --workspace instead)",
          args: { name: "team" },
        },
        {
          name: ["-w", "--workspace"],
          description: "The workspace to link to",
          args: { name: "workspace" },
        },
        jsonOption,
      ],
    },
    {
      name: ["list", "ls"],
      description: "List all projects in your Railway account",
      options: [jsonOption],
    },
    {
      name: "login",
      description:
        "Sign in to Railway — also creates a new account if you don't have one",
      options: [
        {
          name: ["-b", "--browserless"],
          description: "Use a device-code flow instead of opening a browser",
        },
      ],
    },
    { name: "logout", description: "Logout of your Railway account" },
    {
      name: "logs",
      description: "View build, deploy, HTTP, network flow, or DNS logs",
      options: [
        {
          name: ["-s", "--service"],
          description: "Service to view logs from (defaults to linked service)",
          args: { name: "service" },
        },
        {
          name: ["-e", "--environment"],
          description:
            "Environment to view logs from (defaults to linked environment)",
          args: { name: "environment" },
        },
        projectOption,
        {
          name: ["-d", "--deployment"],
          description: "Show deployment logs",
          exclusiveOn: ["--build", "--http", "--network", "--dns"],
        },
        {
          name: ["-b", "--build"],
          description: "Show build logs",
          exclusiveOn: ["--deployment", "--http", "--network", "--dns"],
        },
        {
          name: "--http",
          description: "Show HTTP request logs",
          exclusiveOn: ["--deployment", "--build", "--network", "--dns"],
        },
        {
          name: "--network",
          description: "Show network flow logs",
          exclusiveOn: ["--deployment", "--build", "--http", "--dns"],
        },
        {
          name: "--dns",
          description: "Show DNS query logs",
          exclusiveOn: ["--deployment", "--build", "--http", "--network"],
        },
        { name: "--json", description: "Output logs in JSON format" },
        {
          name: ["-n", "--lines", "--tail"],
          description: "Number of log lines to fetch (disables streaming)",
          args: { name: "lines" },
        },
        {
          name: ["-f", "--filter"],
          description: "Filter logs using Railway's query syntax",
          args: { name: "filter" },
        },
        {
          name: "--method",
          description: "Filter HTTP logs by request method (requires --http)",
          dependsOn: ["--http"],
          args: {
            name: "method",
            suggestions: [
              "GET",
              "POST",
              "PUT",
              "DELETE",
              "PATCH",
              "HEAD",
              "OPTIONS",
            ],
          },
        },
        {
          name: "--status",
          description:
            "Filter HTTP logs by status code, network flow logs by status (ok, dropped), or DNS logs by resolution status (ok, failed)",
          args: { name: "status" },
        },
        {
          name: "--path",
          description: "Filter HTTP logs by request path (requires --http)",
          dependsOn: ["--http"],
          args: { name: "path" },
        },
        {
          name: "--request-id",
          description: "Filter HTTP logs by request ID (requires --http)",
          dependsOn: ["--http"],
          args: { name: "id" },
        },
        {
          name: "--protocol",
          description: "Filter network flow logs by layer 4 protocol",
          dependsOn: ["--network"],
          args: {
            name: "protocol",
            suggestions: ["tcp", "udp", "icmp", "icmpv6", "unknown"],
          },
        },
        {
          name: "--direction",
          description: "Filter network flow logs by traffic direction",
          dependsOn: ["--network"],
          args: { name: "direction", suggestions: ["ingress", "egress"] },
        },
        {
          name: "--peer",
          description:
            "Filter network flow logs by peer service name/ID or a well-known peer (internet, dns, edge-proxy)",
          dependsOn: ["--network"],
          args: { name: "peer" },
        },
        {
          name: "--peer-kind",
          description: "Filter network flow logs by peer kind",
          dependsOn: ["--network"],
          args: {
            name: "peer-kind",
            suggestions: [
              "service",
              "internet",
              "edge_proxy",
              "local_dns",
              "unknown",
            ],
          },
        },
        {
          name: "--dropped",
          description:
            "Filter network flow logs by whether packets were dropped",
          dependsOn: ["--network"],
          args: { name: "bool", suggestions: ["true", "false"] },
        },
        {
          name: "--port",
          description: "Filter network flow logs by source or destination port",
          dependsOn: ["--network"],
          args: { name: "port" },
        },
        {
          name: "--src",
          description: "Filter network flow logs by source IP",
          dependsOn: ["--network"],
          args: { name: "ip" },
        },
        {
          name: "--dst",
          description: "Filter network flow logs by destination IP",
          dependsOn: ["--network"],
          args: { name: "ip" },
        },
        {
          name: "--host",
          description: "Filter network flow logs by source or destination IP",
          dependsOn: ["--network"],
          args: { name: "ip" },
        },
        {
          name: "--drop-cause",
          description: "Filter network flow logs by drop cause",
          dependsOn: ["--network"],
          args: { name: "cause" },
        },
        {
          name: "--domain",
          description: "Filter DNS logs by domain, including its subdomains",
          dependsOn: ["--dns"],
          args: { name: "domain" },
        },
        {
          name: "--qname",
          description: "Filter DNS logs by the exact name looked up",
          dependsOn: ["--dns"],
          args: { name: "name" },
        },
        {
          name: "--qtype",
          description: "Filter DNS logs by record type (e.g",
          dependsOn: ["--dns"],
          args: { name: "type" },
        },
        {
          name: "--rcode",
          description: "Filter DNS logs by response code (e.g",
          dependsOn: ["--dns"],
          args: { name: "rcode" },
        },
        {
          name: "--zone",
          description: "Filter DNS logs by lookup zone",
          dependsOn: ["--dns"],
          args: { name: "zone", suggestions: ["internal", "external"] },
        },
        {
          name: "--latest",
          description:
            "Always show logs from the latest deployment, even if it failed or is still building",
        },
        {
          name: ["-S", "--since"],
          description: "Show logs since a specific time (disables streaming)",
          args: { name: "time" },
        },
        {
          name: ["-U", "--until"],
          description: "Show logs until a specific time (disables streaming)",
          args: { name: "time" },
        },
      ],
      args: {
        name: "deployment-id",
        description: "Deployment ID to view logs from",
        isOptional: true,
      },
    },
    {
      name: "mcp",
      description:
        "Connects AI agents to Railway's MCP server, or installs the MCP config into AI coding tools",
      subcommands: [
        {
          name: "install",
          description:
            "Install Railway's MCP server config into AI coding tools (Claude Code, Cursor, OpenCode, Codex, Pi, Antigravity)",
          options: [
            {
              name: "--remove",
              description: "Unlink the plugin and delete its manifest",
            },
            {
              name: "--print",
              description:
                "Print the manifest and exit without writing or linking",
              exclusiveOn: ["--remove"],
            },
            {
              name: "--no-keys",
              description:
                "Leave herdr's config.toml alone (no keybindings added or removed)",
            },
          ],
        },
        {
          name: "local",
          description:
            "Serve the in-process MCP server over stdio, without reaching mcp.railway.com",
        },
        {
          name: "proxy",
          description:
            "Proxy the remote MCP server over stdio — what a bare `railway mcp` now does",
        },
      ],
    },
    {
      name: ["metrics", "metric"],
      description: "View resource and HTTP metrics for a Railway service",
      options: [
        {
          name: ["-s", "--service"],
          description:
            "Service to view metrics for (defaults to linked service)",
          exclusiveOn: ["--all"],
          args: { name: "service" },
        },
        {
          name: ["-a", "--all"],
          description: "Show metrics for all services in the project",
          exclusiveOn: ["--raw"],
        },
        {
          name: ["-e", "--environment"],
          description:
            "Environment to view metrics for (defaults to linked environment)",
          args: { name: "environment" },
        },
        projectOption,
        {
          name: ["-S", "--since"],
          description: "Time window start",
          args: { name: "since", default: "1h" },
        },
        {
          name: ["-U", "--until"],
          description: "Time window end",
          exclusiveOn: ["--watch"],
          args: { name: "until" },
        },
        jsonOption,
        { name: "--cpu", description: "Show only CPU metrics" },
        { name: "--memory", description: "Show only memory metrics" },
        {
          name: "--network",
          description: "Show only public network traffic (egress/ingress)",
        },
        { name: "--volume", description: "Show only volume/disk metrics" },
        { name: "--http", description: "Show only HTTP metrics" },
        {
          name: "--raw",
          description:
            "Output raw time-series data points instead of summaries",
        },
        {
          name: ["-w", "--watch"],
          description:
            "Live dashboard mode — continuously refresh metrics in a TUI",
          exclusiveOn: ["--json", "--raw"],
        },
        {
          name: "--method",
          description:
            "Filter HTTP metrics by request method (requires --http)",
          dependsOn: ["--http"],
          args: {
            name: "method",
            suggestions: [
              "GET",
              "POST",
              "PUT",
              "DELETE",
              "PATCH",
              "HEAD",
              "OPTIONS",
            ],
          },
        },
        {
          name: "--path",
          description: "Filter HTTP metrics by request path (requires --http)",
          dependsOn: ["--http"],
          args: { name: "path" },
        },
      ],
    },
    {
      name: "open",
      description: "Open your project dashboard",
      options: [
        {
          name: ["-p", "--print"],
          description: "Print the URL instead of opening it",
        },
      ],
    },
    {
      name: "outbound-network",
      description: "Manage outbound networking for a service",
      subcommands: [
        { name: "status", description: "Show outbound networking status" },
        {
          name: "static-ip",
          description: "Manage Static Outbound IPs",
          subcommands: [
            { name: "status", description: "Show Static Outbound IP status" },
            { name: "enable", description: "Enable Static Outbound IPs" },
            { name: "disable", description: "Disable Static Outbound IPs" },
          ],
        },
        {
          name: "ipv6",
          description: "Manage Outbound IPv6",
          subcommands: [
            { name: "status", description: "Show Outbound IPv6 status" },
            { name: "enable", description: "Stage enabling Outbound IPv6" },
            { name: "disable", description: "Stage disabling Outbound IPv6" },
          ],
        },
      ],
      options: [serviceOption, environmentOption2, projectOption3, jsonOption3],
    },
    {
      name: "mysql",
      description:
        "Manage MySQL features: high availability and point-in-time recovery",
      subcommands: [
        {
          name: "ha",
          description: "Manage high-availability clustering",
          subcommands: [
            { name: "status", description: "Show HA cluster status" },
            {
              name: "convert",
              description: "Convert a standalone service into an HA cluster",
              options: [
                replicasOption2,
                coordinatorsOption,
                edgeOption,
                yesOption,
                noDeployOption,
              ],
            },
            {
              name: "revert",
              description: "Revert an HA cluster back to a standalone service",
              options: [yesOption, removeOrphansOption, noDeployOption],
            },
            {
              name: "scale",
              description:
                "Scale cluster replicas, coordinators, or edge nodes",
              options: [
                replicasOption,
                coordinatorsOption2,
                edgeOption2,
                yesOption,
                noDeployOption,
              ],
            },
            {
              name: ["switchover", "promote"],
              description: "Promote a replica to primary (brief downtime)",
              options: [toOption, yesOption],
            },
          ],
        },
        {
          name: "pitr",
          description: "Manage point-in-time recovery (continuous backups)",
          subcommands: [
            { name: "status", description: "Show PITR status" },
            {
              name: "enable",
              description: "Enable point-in-time recovery",
              options: [
                {
                  name: "--no-deploy",
                  description:
                    "Commit the config change without triggering deploys -- it applies on the next deploy (standalone only; HA enable always applies live)",
                },
              ],
            },
            {
              name: "disable",
              description: "Disable point-in-time recovery",
              options: [
                yesOption,
                {
                  name: "--no-deploy",
                  description:
                    "Commit the config change without triggering deploys -- it applies on the next deploy (standalone only; HA disable always applies live)",
                },
              ],
            },
            {
              name: "progress",
              description:
                "Show HA PITR enable/disable workflow progress (HA clusters only)",
              options: [
                {
                  name: "--watch",
                  description:
                    "Poll until the workflow reaches a terminal phase",
                },
              ],
            },
            {
              name: "cancel",
              description:
                "Cancel a stuck HA PITR enable/disable workflow (HA clusters only)",
            },
            {
              name: "clear",
              description:
                "Clear a completed HA PITR workflow's progress snapshot (HA clusters only)",
            },
            {
              name: "restore",
              description: "Restore to a point in time into a new service",
              options: [
                {
                  name: "--at",
                  description:
                    'Point in time to restore to: RFC3339 (2026-07-20T12:00:00Z), "YYYY-MM-DD HH:MM:SS" (local timezone), or a relative offset back from now (30m, 2h, 1d)',
                  args: { name: "at" },
                },
                {
                  name: "--new-service-name",
                  description:
                    'Name for the new restored service (defaults to "<source>-restored-YYYYMMDD-HHMM")',
                  args: { name: "new-service-name" },
                },
                {
                  name: "--source-repo-path",
                  description:
                    "Restore from a specific archive sub-prefix (multi-history picker)",
                  args: { name: "source-repo-path" },
                },
                yesOption,
              ],
            },
            {
              name: "backup",
              description: "Manage on-demand backups",
              subcommands: [
                { name: "list", description: "List backups" },
                {
                  name: "create",
                  description: "Create an on-demand backup",
                  options: [
                    {
                      name: "--name",
                      description:
                        'Optional name/label for the backup (defaults to "Manual")',
                      args: { name: "name" },
                    },
                  ],
                },
                {
                  name: "delete",
                  description: "Delete one or more backups",
                  options: [yesOption],
                  args: {
                    name: "ids",
                    description: "Backup ID(s) to delete",
                    isVariadic: true,
                  },
                },
                {
                  name: "lock",
                  description:
                    "Remove a backup's expiration (keep it indefinitely)",
                  args: { name: "id", description: "Backup ID" },
                },
                {
                  name: "restore",
                  description: "Restore from a backup",
                  options: [yesOption],
                  args: {
                    name: "id",
                    description: "Backup ID to restore from",
                  },
                },
              ],
            },
            {
              name: "schedule",
              description: "Manage the automatic backup schedule",
              subcommands: [
                {
                  name: "set",
                  description:
                    "Set the automatic backup schedule (any combination)",
                  options: [
                    { name: "--daily", description: "Keep a daily backup" },
                    { name: "--weekly", description: "Keep a weekly backup" },
                    { name: "--monthly", description: "Keep a monthly backup" },
                    {
                      name: "--none",
                      description:
                        "Remove every automatic backup schedule (existing backups are kept)",
                      exclusiveOn: ["--daily", "--weekly", "--monthly"],
                    },
                  ],
                },
                {
                  name: "list",
                  description: "List the configured backup schedule(s)",
                },
              ],
            },
          ],
        },
        {
          name: "history",
          description: "Show the local audit trail of MySQL operations",
          options: [limitOption],
        },
      ],
      options: [serviceOption, environmentOption2, projectOption3, jsonOption3],
    },
    {
      name: "postgres",
      description:
        "Manage Postgres features: point-in-time recovery, high availability, and connection pooling",
      subcommands: [
        {
          name: "pitr",
          description: "Manage point-in-time recovery (continuous backups)",
          subcommands: [
            { name: "status", description: "Show PITR status" },
            {
              name: "enable",
              description: "Enable point-in-time recovery",
              options: [
                {
                  name: "--no-deploy",
                  description:
                    "Commit the config change without triggering deploys -- it applies on the next deploy (standalone only; HA enable always applies live)",
                },
              ],
            },
            {
              name: "disable",
              description: "Disable point-in-time recovery",
              options: [
                yesOption,
                {
                  name: "--no-deploy",
                  description:
                    "Commit the config change without triggering deploys -- it applies on the next deploy (standalone only; HA disable always applies live)",
                },
              ],
            },
            {
              name: "progress",
              description:
                "Show HA PITR enable/disable workflow progress (HA clusters only)",
              options: [
                {
                  name: "--watch",
                  description:
                    "Poll until the workflow reaches a terminal phase",
                },
              ],
            },
            {
              name: "cancel",
              description:
                "Cancel a stuck HA PITR enable/disable workflow (HA clusters only)",
            },
            {
              name: "clear",
              description:
                "Clear a completed HA PITR workflow's progress snapshot (HA clusters only)",
            },
            {
              name: "restore",
              description: "Restore to a point in time into a new service",
              options: [
                {
                  name: "--at",
                  description:
                    'Point in time to restore to: RFC3339 (2026-07-20T12:00:00Z), "YYYY-MM-DD HH:MM:SS" (local timezone), or a relative offset back from now (30m, 2h, 1d)',
                  args: { name: "at" },
                },
                {
                  name: "--new-service-name",
                  description:
                    'Name for the new restored service (defaults to "<source>-restored-YYYYMMDD-HHMM")',
                  args: { name: "new-service-name" },
                },
                {
                  name: "--source-repo-path",
                  description:
                    "Restore from a specific archive sub-prefix (multi-history picker)",
                  args: { name: "source-repo-path" },
                },
                yesOption,
              ],
            },
            {
              name: "backup",
              description: "Manage on-demand backups",
              subcommands: [
                { name: "list", description: "List backups" },
                {
                  name: "create",
                  description: "Create an on-demand backup",
                  options: [
                    {
                      name: "--name",
                      description:
                        'Optional name/label for the backup (defaults to "Manual")',
                      args: { name: "name" },
                    },
                  ],
                },
                {
                  name: "delete",
                  description: "Delete one or more backups",
                  options: [yesOption],
                  args: {
                    name: "ids",
                    description: "Backup ID(s) to delete",
                    isVariadic: true,
                  },
                },
                {
                  name: "lock",
                  description:
                    "Remove a backup's expiration (keep it indefinitely)",
                  args: { name: "id", description: "Backup ID" },
                },
                {
                  name: "restore",
                  description: "Restore from a backup",
                  options: [yesOption],
                  args: {
                    name: "id",
                    description: "Backup ID to restore from",
                  },
                },
              ],
            },
            {
              name: "schedule",
              description: "Manage the automatic backup schedule",
              subcommands: [
                {
                  name: "set",
                  description:
                    "Set the automatic backup schedule (any combination)",
                  options: [
                    { name: "--daily", description: "Keep a daily backup" },
                    { name: "--weekly", description: "Keep a weekly backup" },
                    { name: "--monthly", description: "Keep a monthly backup" },
                    {
                      name: "--none",
                      description:
                        "Remove every automatic backup schedule (existing backups are kept)",
                      exclusiveOn: ["--daily", "--weekly", "--monthly"],
                    },
                  ],
                },
                {
                  name: "list",
                  description: "List the configured backup schedule(s)",
                },
              ],
            },
          ],
        },
        {
          name: "ha",
          description: "Manage high-availability clustering",
          subcommands: [
            { name: "status", description: "Show HA cluster status" },
            {
              name: "convert",
              description: "Convert a standalone service into an HA cluster",
              options: [
                replicasOption2,
                coordinatorsOption,
                edgeOption,
                yesOption,
                noDeployOption,
              ],
            },
            {
              name: "revert",
              description: "Revert an HA cluster back to a standalone service",
              options: [yesOption, removeOrphansOption, noDeployOption],
            },
            {
              name: "scale",
              description:
                "Scale cluster replicas, coordinators, or edge nodes",
              options: [
                replicasOption,
                coordinatorsOption2,
                edgeOption2,
                yesOption,
                noDeployOption,
              ],
            },
            {
              name: ["switchover", "promote"],
              description: "Promote a replica to primary (brief downtime)",
              options: [toOption, yesOption],
            },
          ],
        },
        {
          name: "pgbouncer",
          description: "Manage PgBouncer connection pooling",
          subcommands: [
            { name: "status", description: "Show PgBouncer status" },
            {
              name: "add",
              description: "Add PgBouncer in front of the database",
              options: [
                {
                  name: "--pool-mode",
                  description: "Pooling mode",
                  args: {
                    name: "pool-mode",
                    suggestions: ["transaction", "session", "statement"],
                  },
                },
                yesOption,
                noDeployOption,
              ],
            },
            {
              name: "remove",
              description: "Remove PgBouncer",
              options: [yesOption, noDeployOption],
            },
            {
              name: "configure",
              description: "Configure pool mode and connection knobs",
              options: [
                {
                  name: "--pool-mode",
                  description: "Pooling mode",
                  args: {
                    name: "pool-mode",
                    suggestions: ["transaction", "session", "statement"],
                  },
                },
                {
                  name: "--max-client-conn",
                  description: "Maximum client connections PgBouncer accepts",
                  args: { name: "max-client-conn" },
                },
                {
                  name: "--default-pool-size",
                  description: "Default pool size per user/database pair",
                  args: { name: "default-pool-size" },
                },
                {
                  name: "--max-prepared-statements",
                  description:
                    "Maximum prepared statements per connection (0 disables; ignored outside transaction mode)",
                  args: { name: "max-prepared-statements" },
                },
                noDeployOption,
              ],
            },
            {
              name: "scale",
              description: "Scale PgBouncer replicas",
              options: [replicasOption, noDeployOption],
            },
          ],
        },
        {
          name: "history",
          description: "Show the local audit trail of Postgres operations",
          options: [limitOption],
        },
      ],
      options: [serviceOption, environmentOption2, projectOption3, jsonOption3],
    },
    {
      name: ["project", "projects"],
      description: "Manage projects",
      subcommands: [
        {
          name: ["list", "ls"],
          description: "List all projects in your Railway account",
          options: [jsonOption],
        },
        {
          name: "link",
          description: "Link a project to the current directory",
          options: [
            {
              name: ["-e", "--environment"],
              description: "Environment to link to",
              args: { name: "environment" },
            },
            {
              name: ["-p", "--project", "--project_id"],
              description: "Project to link to",
              args: { name: "project" },
            },
            {
              name: ["-s", "--service"],
              description: "The service to link to",
              args: { name: "service" },
            },
            {
              name: ["-t", "--team"],
              description:
                "The team to link to (deprecated: use --workspace instead)",
              args: { name: "team" },
            },
            {
              name: ["-w", "--workspace"],
              description: "The workspace to link to",
              args: { name: "workspace" },
            },
            jsonOption,
          ],
        },
        {
          name: ["delete", "rm", "remove"],
          description: "Delete a project",
          options: [
            {
              name: ["-p", "--project"],
              description: "The project ID or name to delete",
              args: { name: "project" },
            },
            yesOption2,
            jsonOption,
            opt2faCodeOption,
          ],
        },
      ],
    },
    {
      name: "private-network",
      description: "Manage private networking for a service",
      subcommands: [
        { name: "status", description: "Show private networking status" },
        {
          name: "update",
          description: "Update the private networking endpoint name",
          args: {
            name: "name",
            description: "Endpoint name prefix, without the .internal suffix",
          },
        },
      ],
      options: [
        serviceOption,
        environmentOption2,
        projectOption3,
        {
          name: "--network",
          description: "Private network name, ID, or DNS name",
          isPersistent: true,
          args: { name: "network" },
        },
        jsonOption3,
      ],
    },
    {
      name: ["run", "local"],
      description:
        "Run a local command using variables from the active environment",
      options: [
        {
          name: ["-s", "--service"],
          description:
            "Service to pull variables from (defaults to linked service)",
          args: { name: "service" },
        },
        environmentOption5,
        projectOption,
        {
          name: "--no-local",
          description:
            "Skip local develop overrides even if docker-compose.yml exists",
        },
        {
          name: ["-v", "--verbose"],
          description: "Show verbose domain replacement info",
        },
      ],
      args: {
        name: "command",
        description: "Command to run, followed by its arguments",
        isOptional: true,
        isVariadic: true,
        isCommand: true,
      },
    },
    {
      name: ["sandbox", "sandboxes", "sbx"],
      description: "Manage ephemeral sandboxes",
      subcommands: [
        {
          name: ["create", "new"],
          description: "Create a sandbox and remember it as the active sandbox",
          options: [
            {
              name: "--idle-timeout-minutes",
              description:
                "Minutes the sandbox may sit idle before it is auto-destroyed",
              args: { name: "idle-timeout-minutes" },
            },
            {
              name: "--variable",
              description:
                "Set a variable on the sandbox (repeatable, comma-separable)",
              isRepeatable: true,
              args: { name: "key=value[,key=value...]" },
            },
            envFileOption2,
            {
              name: "--template",
              description:
                "Create from a built template, by local name or template id (see `railway sandbox template build`)",
              args: { name: "name-or-id" },
            },
            {
              name: "--checkpoint",
              description:
                "Create from a named checkpoint (see `railway sandbox checkpoint create`)",
              exclusiveOn: ["--template"],
              args: { name: "name" },
            },
            {
              name: "--private-network",
              description:
                "Join the environment's private network (default: isolated, public egress only)",
            },
            {
              name: "--domain",
              description:
                "Publish an HTTP domain on a port, optionally with a prefix (repeatable)",
              isRepeatable: true,
              dependsOn: ["--private-network"],
              args: { name: "[prefix:]port" },
            },
            {
              name: "--no-wait",
              description:
                "Return as soon as the sandbox is requested, without waiting for it to start running",
            },
            {
              name: "--json",
              description: "Output the created sandbox as JSON",
            },
          ],
        },
        {
          name: "fork",
          description:
            "Fork an existing sandbox into a new one and make it active",
          options: [
            {
              name: "--id",
              description:
                "Source sandbox ID (alternative to the positional argument)",
              args: { name: "id" },
            },
            {
              name: "--idle-timeout-minutes",
              description:
                "Minutes the new sandbox may sit idle before it is auto-destroyed",
              args: { name: "idle-timeout-minutes" },
            },
            {
              name: "--variable",
              description:
                "Set a variable on the fork (repeatable, comma-separable)",
              isRepeatable: true,
              args: { name: "key=value[,key=value...]" },
            },
            envFileOption2,
            {
              name: "--private-network",
              description:
                "Join the environment's private network (default: isolated, public egress only)",
            },
            {
              name: "--domain",
              description:
                "Publish an HTTP domain on a port, optionally with a prefix (repeatable)",
              isRepeatable: true,
              dependsOn: ["--private-network"],
              args: { name: "[prefix:]port" },
            },
            {
              name: "--no-wait",
              description:
                "Return as soon as the sandbox is requested, without waiting for it to start running",
            },
            {
              name: "--json",
              description: "Output the created sandbox as JSON",
            },
          ],
          args: {
            name: "id",
            description:
              "Source sandbox ID to fork (defaults to the active sandbox)",
            isOptional: true,
          },
        },
        {
          name: "template",
          description:
            "Manage sandbox templates (pre-built filesystem snapshots)",
          subcommands: [
            {
              name: ["build", "create", "new"],
              description: "Build a template from shell instructions",
              options: [
                {
                  name: ["-c", "--command"],
                  description:
                    "Shell instruction to run while building (repeatable, runs in order; each step must exit 0 within 10 minutes)",
                  isRepeatable: true,
                  isRequired: true,
                  args: { name: "shell-command" },
                },
                {
                  name: "--name",
                  description:
                    "Local name for the template, usable with `railway sandbox create --template <name>`",
                  args: { name: "name" },
                },
                {
                  name: "--base-image-digest",
                  description:
                    "Retired: the API stopped accepting a base image in August, and templates build on the default sandbox image",
                  hidden: true,
                  args: { name: "digest" },
                },
                {
                  name: "--wait",
                  description:
                    "Wait for the build to finish (polls until READY or FAILED)",
                },
                jsonOption2,
              ],
            },
            {
              name: "status",
              description: "Show the build status of a template",
              options: [jsonOption2],
              args: {
                name: "id-or-name",
                description: "Template id or local name",
              },
            },
            {
              name: ["list", "ls"],
              description: "List templates this CLI has built",
              options: [jsonOption2],
            },
          ],
        },
        {
          name: "checkpoint",
          description:
            "Manage sandbox checkpoints (named disk snapshots captured from running sandboxes, bootable with `create --checkpoint`)",
          subcommands: [
            {
              name: ["create", "capture", "save"],
              description:
                "Capture a sandbox's current disk into a named checkpoint",
              options: [
                {
                  name: "--id",
                  description:
                    "Source sandbox ID (defaults to the active sandbox)",
                  args: { name: "id" },
                },
                jsonOption2,
              ],
              args: {
                name: "name",
                description:
                  "Name for the checkpoint, usable with `railway sandbox create --checkpoint <name>` (64-character hex names are reserved for template hashes)",
              },
            },
            {
              name: ["list", "ls"],
              description: "List named checkpoints in the environment",
              options: [jsonOption2],
            },
            {
              name: "rename",
              description: "Rename a checkpoint",
              options: [jsonOption2],
              args: [
                { name: "name", description: "Current checkpoint name" },
                { name: "new-name", description: "New checkpoint name" },
              ],
            },
            {
              name: ["delete", "rm"],
              description:
                "Delete a checkpoint and its underlying disk snapshot",
              args: { name: "name", description: "Checkpoint name to delete" },
            },
          ],
        },
        {
          name: ["list", "ls"],
          description: "List sandboxes in the environment",
          options: [
            jsonOption2,
            {
              name: "--all",
              description: "Include destroyed sandboxes (hidden by default)",
            },
          ],
        },
        {
          name: ["ssh", "connect"],
          description:
            "Connect to a sandbox over SSH (defaults to the active sandbox)",
          options: [
            {
              name: "--id",
              description:
                "Sandbox ID to connect to (defaults to the active sandbox)",
              args: { name: "id" },
            },
            {
              name: ["-i", "--identity-file"],
              description:
                "Path to an identity (private key) file, like `ssh -i`",
              args: { name: "path", template: "filepaths" },
            },
            {
              name: "--session",
              description:
                'Resume a durable session by name (the relay announces the name on connect: "Railway durable session: <name>")',
              args: { name: "name" },
            },
            {
              name: "--resume-from-last-read",
              description:
                "When resuming, continue from the last-read position instead of replaying the retained scrollback",
              dependsOn: ["--session"],
            },
          ],
          args: {
            name: "command",
            description: "Command to run instead of an interactive shell",
            isOptional: true,
            isVariadic: true,
          },
        },
        {
          name: "exec",
          description:
            "Run a single command inside a sandbox (defaults to the active sandbox)",
          options: [
            {
              name: "--id",
              description:
                "Sandbox ID to run in (defaults to the active sandbox)",
              args: { name: "id" },
            },
            {
              name: "--timeout",
              description:
                "Client-side deadline in seconds; on expiry the command is terminated and the CLI exits 124",
              args: { name: "timeout" },
            },
            {
              name: "--session",
              description:
                "Reattach to a durable session by name (a command is then optional)",
              exclusiveOn: ["--detach"],
              args: { name: "name" },
            },
            {
              name: "--resume-from-last-read",
              description:
                "When reattaching, resume from the last-read position instead of replaying the retained output",
              dependsOn: ["--session"],
            },
            {
              name: "--detach",
              description:
                "Start the command, print its durable session name to stdout, and exit while it keeps running (reattach with --session)",
            },
          ],
          args: {
            name: "command",
            description:
              "Command to run (everything after `--`; optional with --session)",
            isOptional: true,
            isVariadic: true,
          },
        },
        {
          name: ["forward", "port-forward", "fwd"],
          description:
            "Forward local ports into a sandbox (defaults to the active sandbox)",
          options: [
            {
              name: "--id",
              description:
                "Sandbox ID to forward into (defaults to the active sandbox)",
              args: { name: "id" },
            },
            {
              name: ["-i", "--identity-file"],
              description:
                "Path to an identity (private key) file, like `ssh -i`",
              args: { name: "path", template: "filepaths" },
            },
            {
              name: "--strict",
              description:
                "Fail if a requested local port is busy instead of picking a nearby free one",
            },
          ],
          args: {
            name: "[local:]remote",
            description:
              "Ports to forward: `REMOTE` (same port locally) or `LOCAL:REMOTE`",
            isVariadic: true,
          },
        },
        {
          name: ["destroy", "rm", "delete"],
          description: "Destroy a sandbox (defaults to the active sandbox)",
          options: [
            {
              name: "--id",
              description:
                "Sandbox ID (alternative to the positional argument)",
              args: { name: "id" },
            },
          ],
          args: {
            name: "id",
            description:
              "Sandbox ID to destroy (defaults to the active sandbox)",
            isOptional: true,
          },
        },
      ],
      options: [
        {
          name: ["-e", "--environment"],
          description:
            "Environment name or ID (defaults to the linked environment)",
          isPersistent: true,
          args: { name: "environment" },
        },
        {
          name: ["-p", "--project"],
          description: "Project ID (defaults to the linked project)",
          isPersistent: true,
          args: { name: "project" },
        },
      ],
    },
    {
      name: "service",
      description: "Manage services",
      subcommands: [
        {
          name: ["list", "ls"],
          description: "List services in the current environment",
          options: [
            {
              name: ["-e", "--environment"],
              description:
                "Environment to list services from (defaults to linked environment)",
              args: { name: "environment" },
            },
            projectOption,
            jsonOption,
          ],
        },
        {
          name: ["delete", "remove", "rm"],
          description: "Delete a service from an environment",
          options: [
            {
              name: ["-s", "--service"],
              description:
                "Service name or ID to delete (defaults to linked service)",
              args: { name: "service" },
            },
            {
              name: ["-e", "--environment"],
              description:
                "Environment to delete the service from (defaults to linked environment)",
              args: { name: "environment" },
            },
            projectOption,
            yesOption2,
            jsonOption,
            opt2faCodeOption,
          ],
        },
        {
          name: "link",
          description: "Link a service to the current project",
          args: {
            name: "service",
            description: "The service ID/name to link",
            isOptional: true,
          },
        },
        {
          name: "source",
          description: "Connect or disconnect a service source",
          subcommands: [
            {
              name: "connect",
              description: "Connect a service to a GitHub repo or Docker image",
              options: [
                serviceOption2,
                {
                  name: ["-e", "--environment"],
                  description:
                    "Environment to use for resolving the service (defaults to linked environment)",
                  args: { name: "environment" },
                },
                projectOption,
                {
                  name: "--repo",
                  description: "GitHub repo to connect, in owner/repo format",
                  args: { name: "repo" },
                },
                {
                  name: "--branch",
                  description:
                    "Branch to deploy from when connecting a GitHub repo",
                  dependsOn: ["--repo"],
                  args: { name: "branch" },
                },
                {
                  name: "--image",
                  description: "Docker image to connect, e.g. nginx:latest",
                  args: { name: "image" },
                },
                jsonOption,
              ],
            },
            {
              name: "disconnect",
              description: "Disconnect the service from its current source",
              options: [
                serviceOption2,
                {
                  name: ["-e", "--environment"],
                  description:
                    "Environment to use for resolving the service (defaults to linked environment)",
                  args: { name: "environment" },
                },
                projectOption,
                jsonOption,
              ],
            },
          ],
        },
        {
          name: "status",
          description: "Show deployment status for services",
          options: [
            {
              name: ["-s", "--service"],
              description:
                "Service name or ID to show status for (defaults to linked service)",
              args: { name: "service" },
            },
            projectOption,
            {
              name: ["-a", "--all"],
              description: "Deprecated: use `railway service list` instead",
              hidden: true,
            },
            {
              name: ["-e", "--environment"],
              description:
                "Environment to check status in (defaults to linked environment)",
              args: { name: "environment" },
            },
            jsonOption,
          ],
        },
        {
          name: "logs",
          description: "View logs from a service",
          options: [
            {
              name: ["-s", "--service"],
              description:
                "Service to view logs from (defaults to linked service)",
              args: { name: "service" },
            },
            {
              name: ["-e", "--environment"],
              description:
                "Environment to view logs from (defaults to linked environment)",
              args: { name: "environment" },
            },
            projectOption,
            {
              name: ["-d", "--deployment"],
              description: "Show deployment logs",
              exclusiveOn: ["--build", "--http", "--network", "--dns"],
            },
            {
              name: ["-b", "--build"],
              description: "Show build logs",
              exclusiveOn: ["--deployment", "--http", "--network", "--dns"],
            },
            {
              name: "--http",
              description: "Show HTTP request logs",
              exclusiveOn: ["--deployment", "--build", "--network", "--dns"],
            },
            {
              name: "--network",
              description: "Show network flow logs",
              exclusiveOn: ["--deployment", "--build", "--http", "--dns"],
            },
            {
              name: "--dns",
              description: "Show DNS query logs",
              exclusiveOn: ["--deployment", "--build", "--http", "--network"],
            },
            { name: "--json", description: "Output logs in JSON format" },
            {
              name: ["-n", "--lines", "--tail"],
              description: "Number of log lines to fetch (disables streaming)",
              args: { name: "lines" },
            },
            {
              name: ["-f", "--filter"],
              description: "Filter logs using Railway's query syntax",
              args: { name: "filter" },
            },
            {
              name: "--method",
              description:
                "Filter HTTP logs by request method (requires --http)",
              dependsOn: ["--http"],
              args: {
                name: "method",
                suggestions: [
                  "GET",
                  "POST",
                  "PUT",
                  "DELETE",
                  "PATCH",
                  "HEAD",
                  "OPTIONS",
                ],
              },
            },
            {
              name: "--status",
              description:
                "Filter HTTP logs by status code, network flow logs by status (ok, dropped), or DNS logs by resolution status (ok, failed)",
              args: { name: "status" },
            },
            {
              name: "--path",
              description: "Filter HTTP logs by request path (requires --http)",
              dependsOn: ["--http"],
              args: { name: "path" },
            },
            {
              name: "--request-id",
              description: "Filter HTTP logs by request ID (requires --http)",
              dependsOn: ["--http"],
              args: { name: "id" },
            },
            {
              name: "--protocol",
              description: "Filter network flow logs by layer 4 protocol",
              dependsOn: ["--network"],
              args: {
                name: "protocol",
                suggestions: ["tcp", "udp", "icmp", "icmpv6", "unknown"],
              },
            },
            {
              name: "--direction",
              description: "Filter network flow logs by traffic direction",
              dependsOn: ["--network"],
              args: { name: "direction", suggestions: ["ingress", "egress"] },
            },
            {
              name: "--peer",
              description:
                "Filter network flow logs by peer service name/ID or a well-known peer (internet, dns, edge-proxy)",
              dependsOn: ["--network"],
              args: { name: "peer" },
            },
            {
              name: "--peer-kind",
              description: "Filter network flow logs by peer kind",
              dependsOn: ["--network"],
              args: {
                name: "peer-kind",
                suggestions: [
                  "service",
                  "internet",
                  "edge_proxy",
                  "local_dns",
                  "unknown",
                ],
              },
            },
            {
              name: "--dropped",
              description:
                "Filter network flow logs by whether packets were dropped",
              dependsOn: ["--network"],
              args: { name: "bool", suggestions: ["true", "false"] },
            },
            {
              name: "--port",
              description:
                "Filter network flow logs by source or destination port",
              dependsOn: ["--network"],
              args: { name: "port" },
            },
            {
              name: "--src",
              description: "Filter network flow logs by source IP",
              dependsOn: ["--network"],
              args: { name: "ip" },
            },
            {
              name: "--dst",
              description: "Filter network flow logs by destination IP",
              dependsOn: ["--network"],
              args: { name: "ip" },
            },
            {
              name: "--host",
              description:
                "Filter network flow logs by source or destination IP",
              dependsOn: ["--network"],
              args: { name: "ip" },
            },
            {
              name: "--drop-cause",
              description: "Filter network flow logs by drop cause",
              dependsOn: ["--network"],
              args: { name: "cause" },
            },
            {
              name: "--domain",
              description:
                "Filter DNS logs by domain, including its subdomains",
              dependsOn: ["--dns"],
              args: { name: "domain" },
            },
            {
              name: "--qname",
              description: "Filter DNS logs by the exact name looked up",
              dependsOn: ["--dns"],
              args: { name: "name" },
            },
            {
              name: "--qtype",
              description: "Filter DNS logs by record type (e.g",
              dependsOn: ["--dns"],
              args: { name: "type" },
            },
            {
              name: "--rcode",
              description: "Filter DNS logs by response code (e.g",
              dependsOn: ["--dns"],
              args: { name: "rcode" },
            },
            {
              name: "--zone",
              description: "Filter DNS logs by lookup zone",
              dependsOn: ["--dns"],
              args: { name: "zone", suggestions: ["internal", "external"] },
            },
            {
              name: "--latest",
              description:
                "Always show logs from the latest deployment, even if it failed or is still building",
            },
            {
              name: ["-S", "--since"],
              description:
                "Show logs since a specific time (disables streaming)",
              args: { name: "time" },
            },
            {
              name: ["-U", "--until"],
              description:
                "Show logs until a specific time (disables streaming)",
              args: { name: "time" },
            },
          ],
          args: {
            name: "deployment-id",
            description: "Deployment ID to view logs from",
            isOptional: true,
          },
        },
        {
          name: "redeploy",
          description: "Redeploy the latest deployment of a service",
          options: [
            serviceOption3,
            environmentOption6,
            projectOption,
            yesOption2,
            jsonOption,
            fromSourceOption,
            commitOption,
          ],
        },
        {
          name: "restart",
          description: "Restart the latest deployment of a service",
          options: [
            {
              name: ["-s", "--service"],
              description: "The service ID/name to restart",
              args: { name: "service" },
            },
            {
              name: ["-e", "--environment"],
              description:
                "Environment to restart in (defaults to linked environment)",
              args: { name: "environment" },
            },
            projectOption,
            yesOption2,
            jsonOption,
          ],
        },
        {
          name: "scale",
          description: "Scale a service across regions",
          options: [
            {
              name: ["-s", "--service"],
              description: "The service to scale (defaults to linked service)",
              args: { name: "service" },
            },
            {
              name: ["-e", "--environment"],
              description:
                "The environment the service is in (defaults to linked environment)",
              args: { name: "environment" },
            },
            projectOption,
            jsonOption,
          ],
          args: {
            name: "region=replicas",
            description: "Replica counts by region, e.g. eu-west=2 us-east=1",
            isOptional: true,
            isVariadic: true,
          },
        },
        {
          name: ["files", "file"],
          description: "Manage files in a service filesystem",
          subcommands: [
            {
              name: "download",
              description: "Download a file or directory",
              options: [
                jsonOption,
                {
                  name: ["--overwrite", "--override"],
                  description: "Replace LOCAL_PATH if it already exists",
                },
                {
                  name: "--concurrency",
                  description:
                    "Concurrent file downloads when REMOTE_PATH is a directory",
                  args: { name: "n" },
                },
              ],
              args: [
                {
                  name: "remote-path",
                  description: "The path on the remote server to download from",
                },
                {
                  name: "local-path",
                  description: "The path to save the download",
                  isOptional: true,
                  template: "filepaths",
                  default: ".",
                },
              ],
            },
            {
              name: "upload",
              description: "Upload a file or directory",
              options: [
                jsonOption,
                {
                  name: "--overwrite",
                  description: "Replace REMOTE_PATH if it already exists",
                },
                {
                  name: "--concurrency",
                  description:
                    "Concurrent file uploads when LOCAL_PATH is a directory",
                  args: { name: "n" },
                },
              ],
              args: [
                {
                  name: "local-path",
                  description: "The local file or directory to upload",
                  template: "filepaths",
                },
                {
                  name: "remote-path",
                  description: "The path on the remote server to upload to",
                },
              ],
            },
            {
              name: ["list", "ls"],
              description: "List files in a directory",
              options: [jsonOption],
              args: {
                name: "remote-path",
                description: "The directory path on the remote server to list",
                isOptional: true,
                default: "/",
              },
            },
            {
              name: ["browse", "browser"],
              description: "Browse files interactively",
              options: [
                {
                  name: "--editor",
                  description: "Editor command to use when editing files",
                  args: { name: "command" },
                },
                {
                  name: "--concurrency",
                  description: "Concurrent file downloads",
                  args: { name: "n" },
                },
              ],
              args: {
                name: "remote-path",
                description: "The directory path on the remote server to open",
                isOptional: true,
                default: "/",
              },
            },
            {
              name: ["delete", "rm", "remove"],
              description: "Delete a file",
              options: [jsonOption, yesOption2],
              args: {
                name: "remote-path",
                description: "The path on the remote server to delete",
              },
            },
            {
              name: ["rename", "mv"],
              description: "Rename a file",
              options: [jsonOption],
              args: [
                {
                  name: "old-remote-path",
                  description: "The current path on the remote server",
                },
                {
                  name: "new-remote-path",
                  description: "The new path on the remote server",
                },
              ],
            },
          ],
          options: [serviceOption2, environmentOption4, projectOption],
        },
      ],
      args: {
        name: "service",
        description:
          "The service ID/name to link (deprecated: use 'service link' instead)",
        isOptional: true,
      },
    },
    {
      name: "setup",
      description:
        "Set up your editor for Railway agent functionality (skills, MCP, login)",
      subcommands: [
        {
          name: "agent",
          description:
            "Install Railway agent skills + MCP server into your editor and log in",
          options: [
            {
              name: ["-y", "--yes"],
              description:
                "Skip prompts and accept defaults: auto-detect installed editors, skip the login flow",
            },
            {
              name: "--remote",
              description:
                "Configure the remote MCP server via the CLI proxy (`railway mcp proxy` → mcp.railway.com, auth via `railway login`)",
              exclusiveOn: ["--local"],
            },
            {
              name: "--local",
              description:
                "Configure the local GraphQL-backed MCP server (`railway mcp local`) instead of the remote CLI proxy default",
              exclusiveOn: ["--remote", "--oauth"],
            },
            {
              name: "--oauth",
              description:
                "Use editor OAuth against https://mcp.railway.com directly (not the CLI proxy)",
              exclusiveOn: ["--local"],
            },
          ],
        },
      ],
    },
    {
      name: "shell",
      description: "Open a local subshell with Railway variables available",
      options: [
        {
          name: ["-s", "--service"],
          description:
            "Service to pull variables from (defaults to linked service)",
          args: { name: "service" },
        },
        environmentOption5,
        projectOption,
        { name: "--silent", description: "Open shell without banner" },
      ],
    },
    {
      name: "skills",
      description:
        "Install Railway agent skills for AI coding tools (Claude Code, Cursor, Codex, OpenCode, GitHub Copilot, Factory Droid, Pi, Antigravity, and all tools that support .agents/skills)",
      subcommands: [
        {
          name: ["install", "update", "add"],
          description:
            "Install Railway agent skills for AI coding tools (Claude Code, Cursor, Codex, OpenCode, GitHub Copilot, Factory Droid, Pi, Antigravity, and all tools that support .agents/skills)",
        },
        {
          name: ["remove", "rm", "uninstall"],
          description: "Remove Railway skills from all tools",
        },
      ],
      options: [
        {
          name: "--agent",
          description:
            "Target specific agent(s) instead of all detected (e.g. --agent claude-code)",
          isPersistent: true,
          isRepeatable: true,
          args: { name: "agent" },
        },
        {
          name: "--force",
          description:
            "Overwrite skills you've modified locally instead of skipping them",
          isPersistent: true,
        },
      ],
    },
    {
      name: "ssh",
      description: "Connect to a service via SSH or manage SSH keys",
      subcommands: [
        {
          name: "config",
          description:
            "Add, preview, or remove an OpenSSH config block for a service",
          subcommands: [
            {
              name: ["remove", "rm"],
              description: "Remove the Railway block from the SSH config file",
            },
          ],
          options: [
            {
              name: ["-p", "--project"],
              description: "Project to use (defaults to linked project)",
              isPersistent: true,
              args: { name: "project" },
            },
            {
              name: ["-s", "--service"],
              description: "Service to use (defaults to linked service)",
              isPersistent: true,
              args: { name: "service" },
            },
            environmentOption2,
            {
              name: "--path",
              description: "SSH config file to update or remove from",
              isPersistent: true,
              args: { name: "path", template: "filepaths" },
            },
            {
              name: "--alias",
              description: "Host alias to use in the SSH config",
              args: { name: "alias" },
            },
            {
              name: ["-i", "--identity-file"],
              description:
                "Emit an IdentityFile directive for this private key path",
              args: { name: "path", template: "filepaths" },
            },
            {
              name: "--dry-run",
              description:
                "Print the generated block without writing the SSH config file",
            },
          ],
        },
        {
          name: "keys",
          description: "Manage SSH keys registered with Railway",
          subcommands: [
            {
              name: ["list", "ls"],
              description: "List all registered SSH keys",
            },
            {
              name: ["add", "create", "register"],
              description: "Add/register a local SSH key with Railway",
              options: [
                {
                  name: ["-k", "--key"],
                  description:
                    "Path, fingerprint, or comment of the key to add (defaults to auto-detect)",
                  args: { name: "key" },
                },
                {
                  name: ["-n", "--name"],
                  description: "Name for the key (defaults to filename)",
                  args: { name: "name" },
                },
              ],
            },
            {
              name: ["remove", "rm", "delete"],
              description: "Remove a registered SSH key",
              options: [
                {
                  name: "--2fa-code",
                  description: "2FA code (required if 2FA is enabled)",
                  args: { name: "two-factor-code" },
                },
              ],
              args: {
                name: "key",
                description: "Key ID or fingerprint to remove",
                isOptional: true,
              },
            },
            {
              name: ["github", "import"],
              description: "Import SSH keys from your GitHub account",
            },
          ],
          options: [
            {
              name: "--workspace",
              description:
                "Operate on workspace-owned keys instead of your personal keys",
              isPersistent: true,
              args: { name: "workspace-id" },
            },
          ],
        },
      ],
      options: [
        {
          name: ["-p", "--project"],
          description: "Project to connect to (defaults to linked project)",
          args: { name: "project" },
        },
        {
          name: ["-s", "--service"],
          description: "Service to connect to (defaults to linked service)",
          args: { name: "service" },
        },
        {
          name: ["-e", "--environment"],
          description:
            "Environment to connect to (defaults to linked environment)",
          args: { name: "environment" },
        },
        {
          name: ["-d", "--deployment-instance"],
          description:
            "Deployment instance ID to connect to (defaults to first active instance)",
          args: { name: "deployment-instance-id" },
        },
        {
          name: "--session",
          description: "SSH into the service inside a tmux session",
          args: { name: "session-name", isOptional: true },
        },
        {
          name: "--native",
          description:
            "Deprecated: native SSH is now the default, this flag has no effect",
          hidden: true,
        },
        {
          name: ["-i", "--identity-file"],
          description:
            "Path to identity (private key) file to use, like `ssh -i`",
          args: { name: "path", template: "filepaths" },
        },
      ],
      args: {
        name: "command",
        description:
          "Command to execute instead of starting an interactive shell",
        isOptional: true,
        isVariadic: true,
      },
    },
    { name: "starship", description: "Starship Metadata", hidden: true },
    {
      name: "status",
      description: "Show information about a Railway project",
      options: [
        {
          name: ["-p", "--project"],
          description:
            "Project ID/name to inspect (defaults to linked project)",
          args: { name: "project-id" },
        },
        {
          name: ["-e", "--environment"],
          description:
            "Environment to inspect for human-readable resource details",
          args: { name: "environment" },
        },
        jsonOption,
      ],
    },
    {
      name: ["telemetry", "telemetry_cmd"],
      description: "Manage telemetry preferences",
      subcommands: [
        {
          name: ["enable", "on"],
          description: "Enable telemetry data collection",
        },
        {
          name: ["disable", "off"],
          description: "Disable telemetry data collection",
        },
        { name: "status", description: "Show current telemetry status" },
      ],
    },
    {
      name: ["templates", "template"],
      description: "Discover Railway templates",
      subcommands: [
        {
          name: ["search", "find"],
          description: "Search published templates in the marketplace",
          options: [
            {
              name: "--json",
              description: "Print the GraphQL response shape as JSON",
            },
            {
              name: "--limit",
              description: "Number of results to request",
              args: { name: "limit" },
            },
            {
              name: "--after",
              description: "Fetch the next page using pageInfo.endCursor",
              args: { name: "after" },
            },
            {
              name: "--category",
              description: "Filter by template category",
              args: { name: "category" },
            },
            {
              name: "--verified",
              description: "Filter by verification state",
              args: { name: "bool", suggestions: ["true", "false"] },
            },
          ],
          args: { name: "query", description: "Search term", isOptional: true },
        },
        {
          name: ["list", "ls"],
          description: "List templates owned by a workspace",
          options: [
            workspaceOption,
            { name: "--json", description: "Print results as JSON" },
          ],
        },
        {
          name: ["create", "generate"],
          description: "Create an unpublished template from a project",
          options: [
            {
              name: ["-p", "--project"],
              description: "Project ID or name",
              args: { name: "project" },
            },
            {
              name: ["-e", "--environment"],
              description: "Environment ID or name",
              args: { name: "environment" },
            },
            {
              name: "--json",
              description: "Print the created template as JSON",
            },
          ],
        },
        {
          name: ["publish", "update"],
          description: "Publish or update a template in the marketplace",
          options: [
            {
              name: "--category",
              description: "Marketplace category",
              args: { name: "category" },
            },
            {
              name: "--description",
              description: "Short marketplace description",
              args: { name: "description" },
            },
            {
              name: "--readme",
              description: "Template overview markdown",
              args: { name: "readme" },
            },
            {
              name: "--readme-file",
              description: "File containing the template overview markdown",
              args: { name: "readme-file", template: "filepaths" },
            },
            {
              name: "--image",
              description: "Image URL for the marketplace card",
              args: { name: "image" },
            },
            {
              name: "--demo-project",
              description:
                'Public demo project ID. Use "none" or "clear" to clear it',
              args: { name: "demo-project" },
            },
            workspaceOption,
            {
              name: "--json",
              description: "Print the published template as JSON",
            },
          ],
          args: {
            name: "template",
            description: "Template ID or code",
            isOptional: true,
          },
        },
        {
          name: "unpublish",
          description: "Unpublish a published template from the marketplace",
          options: [
            yesOption2,
            {
              name: "--2fa-code",
              description:
                "2FA code for verification when required by the current auth session",
              args: { name: "two-factor-code" },
            },
            {
              name: "--json",
              description: "Print the unpublished template result as JSON",
            },
          ],
          args: {
            name: "template",
            description: "Template ID or code",
            isOptional: true,
          },
        },
        {
          name: ["delete", "remove", "rm"],
          description: "Delete a template",
          options: [
            yesOption2,
            {
              name: "--2fa-code",
              description:
                "2FA code for verification when required by the current auth session",
              args: { name: "two-factor-code" },
            },
            {
              name: "--json",
              description: "Print the deleted template result as JSON",
            },
          ],
          args: {
            name: "template",
            description: "Template ID or code",
            isOptional: true,
          },
        },
      ],
    },
    {
      name: "tcp-proxy",
      description: "Manage public TCP proxies for a service",
      subcommands: [
        { name: ["list", "ls"], description: "List TCP proxies for a service" },
        {
          name: ["create", "add", "new"],
          description: "Create a TCP proxy for an application port",
          options: [
            {
              name: "--port",
              description: "Application port to expose through the TCP proxy",
              args: { name: "port" },
            },
          ],
        },
        {
          name: "status",
          description: "Show status for a TCP proxy",
          args: {
            name: "proxy",
            description:
              "TCP proxy ID, domain, endpoint, proxy port, or application port",
          },
        },
        {
          name: ["delete", "remove", "rm"],
          description: "Delete a TCP proxy",
          options: [yesOption2],
          args: {
            name: "proxy",
            description:
              "TCP proxy ID, domain, endpoint, proxy port, or application port",
          },
        },
      ],
      options: [serviceOption, environmentOption2, projectOption3, jsonOption3],
    },
    {
      name: ["trace", "traces", "tracing"],
      description:
        "Manage tracing for a service in an environment and inspect its traces",
      subcommands: [
        {
          name: "enable",
          description:
            "Turn tracing on for a service in the environment, or for every service with --all",
          options: [
            {
              name: "--auto-instrument",
              description:
                "Also switch auto-instrumentation (eBPF/OBI) the same way",
            },
            {
              name: ["-a", "--all"],
              description:
                "Change every service in the environment instead of one",
            },
          ],
        },
        {
          name: "disable",
          description:
            "Turn tracing off for a service in the environment, or for every service with --all",
          options: [
            {
              name: "--auto-instrument",
              description:
                "Also switch auto-instrumentation (eBPF/OBI) the same way",
            },
            {
              name: ["-a", "--all"],
              description:
                "Change every service in the environment instead of one",
            },
          ],
        },
        {
          name: "status",
          description:
            "Show tracing settings and when spans were last exported",
          options: [
            {
              name: ["-a", "--all"],
              description: "Show every service in the environment",
            },
          ],
        },
        {
          name: ["list", "ls"],
          description: "List traces, newest first",
          options: [
            {
              name: ["-a", "--all"],
              description: "List traces of every service in the environment",
            },
            {
              name: ["-f", "--filter"],
              description:
                "Filter expression over spans, e.g. '@status:error @http.route:/api/users @duration:>500'",
              args: { name: "filter" },
            },
            {
              name: "--errors",
              description:
                "Only traces with an error span (adds @status:error to the filter)",
            },
            {
              name: ["-S", "--since"],
              description:
                "Start of the time window: relative (30m, 2h, 1d) or ISO 8601",
              args: { name: "since", default: "1h" },
            },
            {
              name: ["-U", "--until"],
              description:
                "End of the time window, same formats as --since (default: now)",
              args: { name: "until" },
            },
            {
              name: ["-n", "--limit"],
              description: "Max traces to return (1 to 500)",
              args: { name: "limit" },
            },
          ],
        },
        {
          name: ["get", "show"],
          description: "Show the spans of one trace as a tree",
          options: [
            {
              name: "--max-spans",
              description:
                "Max spans to return, oldest first (default 1000, max 2000)",
              args: { name: "max-spans" },
            },
          ],
          args: {
            name: "trace-id",
            description: "W3C trace id, 32 hex characters",
          },
        },
      ],
      options: [serviceOption, environmentOption2, projectOption3, jsonOption3],
    },
    {
      name: "unlink",
      description: "Disassociate project from current directory",
      options: [
        { name: ["-s", "--service"], description: "Unlink a service" },
        { name: ["-y", "--yes"], description: "Skip confirmation prompt" },
        jsonOption,
      ],
    },
    {
      name: "up",
      description: "Upload and deploy project from the current directory",
      options: [
        {
          name: ["-d", "--detach", "--no-wait"],
          description:
            "Don't attach to the log stream — start the deploy and return immediately",
        },
        {
          name: ["-y", "--yes"],
          description:
            "Accept all defaults — skip the auth confirm prompt for unauthed users and skip the project-name prompt when creating a new project from this directory",
        },
        {
          name: ["-c", "--ci"],
          description:
            "Stream build logs only, then exit (equivalent to setting $CI=true)",
        },
        {
          name: ["-s", "--service"],
          description: "Service to deploy to (defaults to linked service)",
          args: { name: "service" },
        },
        {
          name: ["-e", "--environment"],
          description:
            "Environment to deploy to (defaults to linked environment)",
          args: { name: "environment" },
        },
        {
          name: ["-p", "--project"],
          description: "Project ID to deploy to (defaults to linked project)",
          args: { name: "project-id" },
        },
        {
          name: ["-w", "--workspace"],
          description:
            "Workspace to create a new project in (first-run / --new)",
          args: { name: "workspace" },
        },
        {
          name: "--new",
          description:
            "Create a NEW project + service from this directory and deploy it, even if one is already linked",
        },
        {
          name: "--name",
          description:
            "Name for a newly created project (defaults to the current directory's name)",
          args: { name: "name" },
        },
        {
          name: "--no-gitignore",
          description: "Don't ignore paths from .gitignore",
        },
        {
          name: "--path-as-root",
          description:
            "Use the path argument as the prefix for the archive instead of the project directory",
        },
        { name: "--verbose", description: "Verbose output" },
        {
          name: "--json",
          description: "Output logs in JSON format (implies CI mode behavior)",
        },
        {
          name: ["-m", "--message"],
          description: "Message to attach to the deployment",
          args: { name: "message" },
        },
      ],
      args: { name: "path", isOptional: true, template: "folders" },
    },
    {
      name: "upgrade",
      description: "Upgrade the Railway CLI to the latest version",
      options: [
        {
          name: "--check",
          description: "Check install method without upgrading",
          exclusiveOn: ["--rollback"],
        },
        {
          name: "--rollback",
          description: "Rollback to the previous version",
          exclusiveOn: ["--check"],
        },
        {
          name: ["-y", "--yes"],
          description:
            "Run without interactive prompts (useful for agents/scripts)",
        },
      ],
    },
    {
      name: "usage",
      description: "Show workspace usage and manage usage limits",
      subcommands: [
        {
          name: "projects",
          description: "Show usage by project",
          options: [
            {
              name: "--project",
              description: "Project name or ID for service-level usage",
              exclusiveOn: ["--limit"],
              args: { name: "project" },
            },
            {
              name: "--period",
              description: "Billing period: current, previous, or YYYY-MM",
              args: { name: "period" },
            },
            {
              name: "--limit",
              description: "Maximum number of projects to return",
              args: { name: "limit" },
            },
          ],
        },
        {
          name: "limit",
          description: "Show or update usage limits",
          subcommands: [
            {
              name: "status",
              description: "Show usage limit status",
              options: [
                {
                  name: "--target",
                  description: "Limit target to show",
                  args: { name: "target", suggestions: ["agent", "workspace"] },
                },
              ],
            },
            {
              name: "set",
              description: "Set usage limits",
              options: [
                {
                  name: "--target",
                  description: "Limit target to set",
                  args: { name: "target", suggestions: ["agent", "workspace"] },
                },
                {
                  name: "--soft",
                  description: "Email alert in dollars",
                  args: { name: "soft" },
                },
                {
                  name: "--hard",
                  description: "Hard limit in dollars",
                  args: { name: "hard" },
                },
              ],
            },
            {
              name: "update",
              description: "Update compute usage limits",
              options: [
                {
                  name: "--soft",
                  description: "Compute email alert in whole dollars",
                  args: { name: "soft" },
                },
                {
                  name: "--hard",
                  description: "Compute hard limit in whole dollars",
                  args: { name: "hard" },
                },
              ],
            },
            {
              name: "remove",
              description: "Remove compute usage limits",
              options: [yesOption2],
            },
          ],
        },
      ],
      options: [
        {
          name: "--workspace",
          description: "Workspace name or ID",
          isPersistent: true,
          args: { name: "workspace" },
        },
        {
          name: "--period",
          description: "Billing period: current, previous, or YYYY-MM",
          args: { name: "period" },
        },
        jsonOption3,
      ],
    },
    {
      name: ["variable", "variables", "vars", "var"],
      description: "Manage environment variables for a service",
      subcommands: [
        {
          name: ["list", "ls"],
          description: "List variables for a service",
          options: [
            {
              name: ["-s", "--service"],
              description: "The service to list variables for",
              args: { name: "service" },
            },
            {
              name: ["-e", "--environment"],
              description: "The environment to list variables from",
              args: { name: "environment" },
            },
            projectOption,
            {
              name: ["-k", "--kv"],
              description: "Show variables in KV format",
            },
            jsonOption,
          ],
        },
        {
          name: "set",
          description: "Set a variable",
          options: [
            {
              name: ["-s", "--service"],
              description: "The service to set the variable for",
              args: { name: "service" },
            },
            {
              name: ["-e", "--environment"],
              description: "The environment to set the variable in",
              args: { name: "environment" },
            },
            projectOption,
            {
              name: "--stdin",
              description:
                "Read the value from stdin instead of the command line (only with single KEY)",
            },
            {
              name: "--skip-deploys",
              description: "Skip triggering deploys when setting the variable",
            },
            jsonOption,
          ],
          args: {
            name: "variables",
            description:
              "Variable(s) in KEY=VALUE format, or just KEY when using --stdin",
            isVariadic: true,
          },
        },
        {
          name: ["delete", "rm", "remove"],
          description: "Delete a variable",
          options: [
            {
              name: ["-s", "--service"],
              description: "The service to delete the variable from",
              args: { name: "service" },
            },
            {
              name: ["-e", "--environment"],
              description: "The environment to delete the variable from",
              args: { name: "environment" },
            },
            projectOption,
            jsonOption,
          ],
          args: { name: "key", description: "The variable key to delete" },
        },
        {
          name: "edit",
          description:
            "Bulk-edit variables in $EDITOR, then confirm an IaC-style diff",
          options: [
            {
              name: ["-s", "--service"],
              description: "The service to edit variables for",
              args: { name: "service" },
            },
            {
              name: ["-e", "--environment"],
              description: "The environment to edit variables in",
              args: { name: "environment" },
            },
            projectOption,
            {
              name: ["-y", "--yes"],
              description: "Skip the confirmation prompt and apply the diff",
            },
            {
              name: "--skip-deploys",
              description:
                "Skip triggering deploys when applying variable changes",
            },
            {
              name: "--reveal",
              description:
                "Show plaintext values in the diff instead of redacting them",
            },
            {
              name: "--demo",
              description:
                "Offline prototype: edit fixture variables and print the would-be apply (no API)",
            },
            {
              name: "--confirm-destructive",
              description:
                "Allow destructive deletes in non-interactive or agent sessions",
            },
          ],
        },
      ],
      options: [
        {
          name: ["-s", "--service"],
          description: "The service to show/set variables for",
          args: { name: "service" },
        },
        {
          name: ["-e", "--environment"],
          description: "The environment to show/set variables for",
          args: { name: "environment" },
        },
        projectOption,
        { name: ["-k", "--kv"], description: "Show variables in KV format" },
        {
          name: "--set",
          description:
            "The \"{key}={value}\" environment variable pair to set the service variables (legacy, use 'variable set' instead)",
          isRepeatable: true,
          args: { name: "set" },
        },
        {
          name: "--set-from-stdin",
          description:
            "Set a variable with the value read from stdin (legacy, use 'variable set --stdin' instead)",
          args: { name: "key" },
        },
        jsonOption,
        {
          name: "--skip-deploys",
          description: "Skip triggering deploys when setting variables",
        },
      ],
    },
    {
      name: "waf",
      description: "Manage WAF settings for a service",
      subcommands: [
        {
          name: "under-attack",
          description: "Manage Under Attack Mode",
          subcommands: [
            { name: "status", description: "Show Under Attack Mode status" },
            {
              name: "enable",
              description: "Enable Under Attack Mode",
              options: [
                {
                  name: "--duration",
                  description:
                    "Duration: forever, 1h, 3h, 12h, 24h, or matching seconds",
                  args: { name: "duration", default: "forever" },
                },
              ],
            },
            { name: "disable", description: "Disable Under Attack Mode" },
          ],
        },
      ],
      options: [serviceOption, environmentOption2, projectOption3, jsonOption3],
    },
    {
      name: "whoami",
      description: "Get the current logged in user",
      options: [jsonOption],
    },
    {
      name: ["volume", "volumes"],
      description: "Manage project volumes",
      subcommands: [
        {
          name: ["list", "ls"],
          description: "List volumes",
          options: [jsonOption],
        },
        {
          name: ["add", "create", "new"],
          description: "Add a new volume",
          options: [
            {
              name: ["-m", "--mount-path"],
              description: "The mount path of the volume",
              args: { name: "mount-path" },
            },
            jsonOption,
          ],
        },
        {
          name: ["delete", "remove", "rm"],
          description: "Delete a volume",
          options: [
            {
              name: ["-v", "--volume"],
              description: "The ID/name of the volume you wish to delete",
              args: { name: "volume" },
            },
            yesOption2,
            jsonOption,
            opt2faCodeOption,
          ],
        },
        {
          name: ["update", "edit", "rename"],
          description: "Update a volume",
          options: [
            {
              name: ["-v", "--volume"],
              description: "The ID/name of the volume you wish to update",
              args: { name: "volume" },
            },
            {
              name: ["-m", "--mount-path"],
              description: "The new mount path of the volume (optional)",
              args: { name: "mount-path" },
            },
            {
              name: ["-n", "--name"],
              description: "The new name of the volume (optional)",
              args: { name: "name" },
            },
            jsonOption,
          ],
        },
        {
          name: "detach",
          description: "Detach a volume from a service",
          options: [
            {
              name: ["-v", "--volume"],
              description: "The ID/name of the volume you wish to detach",
              args: { name: "volume" },
            },
            yesOption2,
            jsonOption,
          ],
        },
      ],
      options: [
        {
          name: ["-s", "--service"],
          description: "Service ID",
          args: { name: "service" },
        },
        {
          name: ["-e", "--environment"],
          description: "Environment ID",
          args: { name: "environment" },
        },
        projectOption,
      ],
    },
    {
      name: "redeploy",
      description: "Redeploy the latest deployment of a service",
      options: [
        serviceOption3,
        environmentOption6,
        projectOption,
        yesOption2,
        jsonOption,
        fromSourceOption,
        commitOption,
      ],
    },
    {
      name: "redis",
      description: "Manage Redis features: high availability",
      subcommands: [
        {
          name: "ha",
          description: "Manage high-availability clustering",
          subcommands: [
            { name: "status", description: "Show HA cluster status" },
            {
              name: "convert",
              description: "Convert a standalone service into an HA cluster",
              options: [
                replicasOption2,
                coordinatorsOption,
                edgeOption,
                yesOption,
                noDeployOption,
              ],
            },
            {
              name: "revert",
              description: "Revert an HA cluster back to a standalone service",
              options: [yesOption, removeOrphansOption, noDeployOption],
            },
            {
              name: "scale",
              description:
                "Scale cluster replicas, coordinators, or edge nodes",
              options: [
                replicasOption,
                coordinatorsOption2,
                edgeOption2,
                yesOption,
                noDeployOption,
              ],
            },
            {
              name: ["switchover", "promote"],
              description: "Promote a replica to primary (brief downtime)",
              options: [toOption, yesOption],
            },
          ],
        },
        {
          name: "history",
          description: "Show the local audit trail of Redis operations",
          options: [limitOption],
        },
      ],
      options: [serviceOption, environmentOption2, projectOption3, jsonOption3],
    },
    {
      name: "restart",
      description:
        "Restart the latest deployment of a service (without rebuilding)",
      options: [
        {
          name: ["-s", "--service"],
          description: "The service ID/name to restart",
          args: { name: "service" },
        },
        {
          name: ["-e", "--environment"],
          description:
            "Environment to restart in (defaults to linked environment)",
          args: { name: "environment" },
        },
        projectOption,
        yesOption2,
        jsonOption,
      ],
    },
    {
      name: "scale",
      description: "Scale a service across regions",
      options: [
        {
          name: ["-s", "--service"],
          description: "The service to scale (defaults to linked service)",
          args: { name: "service" },
        },
        {
          name: ["-e", "--environment"],
          description:
            "The environment the service is in (defaults to linked environment)",
          args: { name: "environment" },
        },
        projectOption,
        jsonOption,
      ],
      args: {
        name: "region=replicas",
        description: "Replica counts by region, e.g. eu-west=2 us-east=1",
        isOptional: true,
        isVariadic: true,
      },
    },
    {
      name: ["check_updates", "check-updates"],
      description: "Test the update check",
      options: [jsonOption],
    },
    {
      name: ["functions", "function", "func", "fn", "funcs", "fns"],
      description: "Manage project functions",
      subcommands: [
        { name: ["list", "ls"], description: "List functions" },
        {
          name: ["new", "create", "add"],
          description: "Add a new function",
          options: [
            {
              name: ["-p", "--path"],
              description: "The path to the function locally",
              args: { name: "path", template: "filepaths" },
            },
            {
              name: ["-n", "--name"],
              description: "The name of the function",
              args: { name: "name" },
            },
            {
              name: ["-c", "--cron"],
              description: "Cron schedule to run the function",
              args: { name: "cron" },
            },
            {
              name: "--http",
              description: "Generate a domain",
              args: {
                name: "bool",
                isOptional: true,
                suggestions: ["true", "false"],
              },
            },
            {
              name: ["-s", "--serverless"],
              description: "Serverless (a.k.a sleeping)",
              args: {
                name: "bool",
                isOptional: true,
                suggestions: ["true", "false"],
              },
            },
            {
              name: ["-w", "--watch"],
              description: "Watch for changes of the file and deploy upon save",
              args: {
                name: "bool",
                isOptional: true,
                suggestions: ["true", "false"],
              },
            },
          ],
        },
        {
          name: ["delete", "remove", "rm"],
          description: "Delete a function",
          options: [
            {
              name: ["-f", "--function"],
              description: "The ID/name of the function you wish to delete",
              args: { name: "function" },
            },
            {
              name: ["-y", "--yes"],
              description: "Skip confirmation for deleting",
              args: {
                name: "bool",
                isOptional: true,
                suggestions: ["true", "false"],
              },
            },
            opt2faCodeOption,
          ],
        },
        {
          name: ["push", "up", "deploy"],
          description: "Push a new change to the function",
          options: [
            {
              name: ["-p", "--path"],
              description: "The path to the function",
              args: { name: "path", template: "filepaths" },
            },
            {
              name: ["-w", "--watch"],
              description: "Watch for changes of the file and deploy upon save",
              args: {
                name: "bool",
                isOptional: true,
                suggestions: ["true", "false"],
              },
            },
          ],
        },
        {
          name: "link",
          description: "Link a function manually",
          options: [
            {
              name: ["-p", "--path"],
              description: "The path to the file",
              args: { name: "path", template: "filepaths" },
            },
            {
              name: ["-f", "--function"],
              description: "The ID/name of the function you wish to link to",
              args: { name: "function" },
            },
          ],
        },
      ],
      options: [
        {
          name: ["-e", "--environment"],
          description: "Environment ID/name",
          args: { name: "environment" },
        },
      ],
    },
    {
      name: "help",
      description: "Print this message or the help of the given subcommand(s)",
      args: { name: "command", isOptional: true, isVariadic: true },
    },
  ],
};

export default completionSpec;
