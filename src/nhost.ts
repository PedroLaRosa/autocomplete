// Nhost CLI v1.53.0 (GitHub release cli@1.53.0 of nhost/nhost, 2026-11-12).
// Source: urfave/cli command definitions in cli/main.go and cli/cmd/**, and
// the generated docs/src/content/docs/reference/cli/commands.mdx

const subdomain = (
  description = "Project's subdomain to operate on, defaults to linked project"
): Fig.Option => ({
  name: "--subdomain",
  description,
  args: { name: "subdomain" },
});

const yes: Fig.Option = { name: "--yes", description: "Skip confirmation" };

const editor: Fig.Option = {
  name: "--editor",
  description: "Editor to use (default: vim, env: $EDITOR)",
  args: { name: "editor" },
};

const port = (name: string, description: string): Fig.Option => ({
  name,
  description,
  args: { name: "port" },
});

const follow: Fig.Option = {
  name: "--follow",
  description: "Specify if the logs should be streamed",
};

const timeout: Fig.Option = {
  name: "--timeout",
  description: "Specify the timeout for streaming logs (default: 5m0s)",
  args: { name: "duration" },
};

// Flags shared by `nhost up` and `nhost up cloud`
const devFlags: Fig.Option[] = [
  port("--http-port", "HTTP port to listen on (default: 443)"),
  { name: "--disable-tls", description: "Disable TLS" },
  {
    name: "--apply-seeds",
    description:
      "Apply seeds. If the .nhost folder does not exist, seeds will be applied regardless of this flag",
  },
  port(
    "--hasura-console-port",
    "If specified, expose hasura console on this port. Not recommended"
  ),
  {
    name: "--dashboard-version",
    description: "Dashboard version to use",
    args: { name: "version" },
  },
  {
    name: "--down-on-error",
    description: "On error, stop the environment without asking",
  },
  {
    name: "--ca-certificates",
    description:
      "Mounts and overrides path to CA certificates in the containers",
    args: { name: "path", template: "filepaths" },
  },
  {
    name: "--user",
    description:
      "User to run containers that write into bind mounts as (default: auto)",
    args: {
      name: "uid:gid",
      suggestions: [
        {
          name: "auto",
          description:
            "Map to your uid:gid on Linux with a local rootful docker daemon",
        },
        { name: "none", description: "Keep the images' default user" },
      ],
    },
  },
];

const runConfig = (isRequired?: true): Fig.Option => ({
  name: "--config",
  description: "Service configuration file (default: nhost-run-service.toml)",
  isRequired,
  args: { name: "file", template: "filepaths" },
});

const overlayName: Fig.Option = {
  name: "--overlay-name",
  description: "If specified, apply this overlay",
  args: { name: "overlay" },
};

const serviceId = (description: string, isRequired?: true): Fig.Option => ({
  name: "--service-id",
  description,
  isRequired,
  args: { name: "service-id" },
});

const secretName: Fig.Arg = { name: "name" };

const completionSpec: Fig.Spec = {
  name: "nhost",
  description: "Nhost CLI tool",
  subcommands: [
    {
      name: "config",
      description: "Perform config operations",
      subcommands: [
        {
          name: "default",
          description: "Create default configuration and secrets",
        },
        { name: "example", description: "Shows an example config file" },
        {
          name: "apply",
          description: "Apply configuration to cloud project",
          options: [
            {
              ...subdomain(
                "Subdomain of the Nhost project to apply configuration to"
              ),
              isRequired: true,
            },
            yes,
          ],
        },
        {
          name: "pull",
          description: "Get cloud configuration",
          options: [
            subdomain(
              "Pull this subdomain's configuration. Defaults to linked project"
            ),
            yes,
          ],
        },
        {
          name: "show",
          description: "Shows configuration after resolving secrets",
          options: [
            subdomain(
              "Show this subdomain's rendered configuration. Defaults to base configuration"
            ),
          ],
        },
        {
          name: "validate",
          description: "Validate configuration",
          options: [
            subdomain(
              "Validate this subdomain's configuration. Defaults to linked project"
            ),
          ],
        },
        {
          name: "edit",
          description: "Edit base configuration or an overlay",
          options: [
            subdomain(
              "If specified, edit this subdomain's overlay, otherwise edit base configuration"
            ),
            editor,
          ],
        },
      ],
    },
    {
      name: "configserver",
      description: "Serve the application",
      hidden: true,
    },
    {
      name: "deployments",
      description: "Manage deployments",
      subcommands: [
        {
          name: "list",
          description: "List deployments in the cloud environment",
          options: [subdomain()],
        },
        {
          name: "logs",
          description: "View deployments logs in the cloud environment",
          args: { name: "deployment_id" },
          options: [subdomain(), follow, timeout],
        },
        {
          name: "new",
          description: "[EXPERIMENTAL] Create a new deployment",
          options: [
            subdomain(),
            {
              ...follow,
              description:
                "Wait for the deployment to finish and stream the logs; fail if the deployment fails",
            },
            timeout,
            {
              name: "--ref",
              description: "Git reference (env: $GITHUB_SHA)",
              isRequired: true,
              args: { name: "ref" },
            },
            {
              name: "--message",
              description: "Commit message",
              isRequired: true,
              args: { name: "message" },
            },
            {
              name: "--user",
              description: "Commit user name (env: $GITHUB_ACTOR)",
              isRequired: true,
              args: { name: "user" },
            },
            {
              name: "--user-avatar-url",
              description: "Commit user avatar URL",
              args: { name: "url" },
            },
          ],
        },
      ],
    },
    {
      name: "dev",
      description: "Operate local development environment",
      subcommands: [
        {
          name: "compose",
          description:
            "Docker compose wrapper, sets project name and compose file automatically",
          loadSpec: "docker-compose",
        },
        {
          name: "hasura",
          description: "Hasura CLI wrapper",
          loadSpec: "hasura",
        },
      ],
    },
    {
      name: "up",
      description: "Start local development environment",
      options: [
        ...devFlags,
        port("--postgres-port", "Postgres port to listen on (default: 5432)"),
        port(
          "--auth-port",
          "If specified, expose auth on this port. Not recommended"
        ),
        port(
          "--storage-port",
          "If specified, expose storage on this port. Not recommended"
        ),
        port(
          "--functions-port",
          "If specified, expose functions on this port. Not recommended"
        ),
        port(
          "--hasura-port",
          "If specified, expose hasura on this port. Not recommended"
        ),
        {
          name: "--functions-version",
          description: "Functions version to use",
          args: { name: "version" },
        },
        {
          name: "--run-service",
          description:
            "Run service to add to the development environment. Comma-separated values are also accepted",
          isRepeatable: true,
          args: {
            name: "/path/to/run-service.toml[:overlay_name]",
            template: "filepaths",
          },
        },
        {
          name: "--run-service-volume",
          description: "Mount a local directory into a run service container",
          isRepeatable: true,
          args: { name: "service-name=/local/path:/container/path" },
        },
      ],
      subcommands: [
        {
          name: "cloud",
          description:
            "Start local development environment connected to an Nhost Cloud project (BETA)",
          options: [
            ...devFlags,
            subdomain(),
            {
              name: "--postgres-url",
              description: "Postgres URL",
              isRequired: true,
              args: { name: "url" },
            },
          ],
        },
      ],
    },
    {
      name: "down",
      description: "Stop local development environment",
      options: [{ name: "--volumes", description: "Remove volumes" }],
    },
    {
      name: "logs",
      description: "Show logs from local development environment",
      args: { name: "service", isOptional: true, isVariadic: true },
    },
    {
      name: "docker-credentials",
      description: "Perform docker-credentials operations",
      subcommands: [
        {
          name: "configure",
          description:
            "Install credentials helper and configure docker so it can authenticate with Nhost's registry",
          options: [
            {
              name: "--docker-config",
              description:
                "Path to docker config file (default: $HOME/.docker/config.json)",
              args: { name: "file", template: "filepaths" },
            },
            {
              name: "--no-interactive",
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "get",
          description: "Get credentials for the logged in user",
          hidden: true,
        },
        { name: "store", description: "No-op", hidden: true },
        { name: "erase", description: "No-op", hidden: true },
      ],
    },
    {
      name: "mcp",
      description: "Model Context Protocol (MCP) related commands",
      options: [
        {
          name: "--config-file",
          description:
            "Configuration file path. Defaults to $NHOST_DOT_NHOST_FOLDER/nhost-mcp.toml",
          isPersistent: true,
          args: { name: "file", template: "filepaths" },
        },
      ],
      subcommands: [
        {
          name: "config",
          description: "Generate and save configuration file",
          options: [
            { name: "--confirm", description: "Skip confirmation prompt" },
          ],
          subcommands: [
            {
              name: "dump",
              description: "Dump the configuration to stdout for verification",
            },
          ],
        },
        { name: "start", description: "Starts the MCP server" },
        {
          name: "gen",
          description: "Generate GraphQL schema for Nhost Cloud",
          options: [
            {
              name: "--with-mutations",
              description: "Include mutations in the generated schema",
            },
          ],
        },
      ],
    },
    {
      name: "init",
      description: "Initialize a new Nhost project",
      options: [
        {
          name: "--remote",
          description:
            "Initialize pulling configuration, migrations and metadata from the linked project",
        },
      ],
    },
    { name: "list", description: "List remote apps" },
    { name: "link", description: "Link local app to a remote one" },
    {
      name: "docs",
      description: "Access embedded documentation",
      subcommands: [
        {
          name: ["list", "ls"],
          description: "List all documentation pages",
          options: [
            {
              name: "--grouped",
              description: "Show pages organized by section",
            },
            { name: "--summary", description: "Show page descriptions" },
          ],
        },
        {
          name: ["search", "s", "find"],
          description: "Search documentation pages",
          args: { name: "query", isVariadic: true },
          options: [
            {
              name: ["--limit", "-n"],
              description: "Maximum number of results to return (default: 5)",
              args: { name: "n" },
            },
          ],
        },
        {
          name: ["show", "view"],
          description: "Display contents of a documentation page",
          args: { name: "page-path" },
          options: [
            {
              name: "--raw",
              description: "Show raw MDX content including frontmatter",
            },
          ],
        },
      ],
    },
    {
      name: "run",
      description: "Perform operations on Nhost Run",
      subcommands: [
        {
          name: "config-show",
          description:
            "Shows Run service configuration after resolving secrets",
          options: [runConfig(), overlayName],
        },
        {
          name: "config-deploy",
          description: "Deploy service configuration",
          options: [
            runConfig(true),
            serviceId(
              "Service ID to update. Applies overlay of the same name",
              true
            ),
          ],
        },
        {
          name: "config-edit",
          description: "Edit service configuration",
          options: [runConfig(true), editor, overlayName],
        },
        {
          name: "config-edit-image",
          description: "Edits configuration file and sets the image",
          options: [
            runConfig(),
            {
              name: "--image",
              description: "Image to use",
              isRequired: true,
              args: { name: "image" },
            },
          ],
        },
        {
          name: "config-pull",
          description: "Download service configuration",
          options: [runConfig(), serviceId("Service ID to update", true)],
        },
        {
          name: "config-validate",
          description:
            "Validates service configuration after resolving secrets",
          options: [
            runConfig(),
            overlayName,
            serviceId(
              "If specified, apply this overlay and remote secrets for this service"
            ),
          ],
        },
        { name: "config-example", description: "Shows an example config file" },
        {
          name: "env",
          description:
            "Outputs environment variables. Useful to generate .env files",
          options: [
            runConfig(),
            overlayName,
            {
              name: "--prepend-export",
              description: "Prepend 'export' to each line",
            },
          ],
        },
      ],
    },
    {
      name: "schema",
      description: "Schema utilities",
      subcommands: [
        {
          name: "diff",
          description: "Compare two GraphQL schema files",
          options: [
            {
              name: "-a",
              description: "Path to the first schema file",
              isRequired: true,
              args: { name: "file", template: "filepaths" },
            },
            {
              name: "-b",
              description: "Path to the second schema file",
              isRequired: true,
              args: { name: "file", template: "filepaths" },
            },
            {
              name: "--no-clean",
              description:
                "Disable all normalization/cleaning of known-safe differences",
            },
          ],
        },
        {
          name: "dump",
          description: "Dump a GraphQL schema as SDL",
          options: [
            subdomain(
              "Project subdomain (defaults to the linked project; use 'local' for the local dev stack)"
            ),
            {
              name: ["--url", "-u"],
              description: "GraphQL endpoint URL to introspect",
              args: { name: "url" },
            },
            {
              name: ["--metadata", "-m"],
              description:
                "Path to a Hasura metadata directory to generate the schema from",
              args: { name: "dir", template: "folders" },
            },
            {
              name: ["--role", "-r"],
              description:
                "Role to generate the schema for (metadata mode default: user)",
              args: { name: "role" },
            },
            {
              name: "--admin-secret",
              description:
                "Admin secret (local: nhost-admin-secret; cloud: fetched from Nhost API)",
              args: { name: "secret" },
            },
            {
              name: ["--header", "-H"],
              description:
                'Extra HTTP header to send (e.g. "X-Hasura-Foo: bar")',
              isRepeatable: true,
              args: { name: "header" },
            },
            {
              name: ["--output", "-o"],
              description: "Output file (default: stdout)",
              args: { name: "file", template: "filepaths" },
            },
            {
              name: "--timeout",
              description:
                "HTTP timeout in seconds, URL mode only (default: 30)",
              args: { name: "seconds" },
            },
          ],
        },
      ],
    },
    {
      name: "secrets",
      description: "Manage secrets",
      subcommands: [
        {
          name: "create",
          description: "Create secret in the cloud environment",
          args: [secretName, { name: "value" }],
          options: [subdomain()],
        },
        {
          name: "delete",
          description: "Delete secret in the cloud environment",
          args: secretName,
          options: [subdomain()],
        },
        {
          name: "list",
          description: "List secrets in the cloud environment",
          options: [subdomain()],
        },
        {
          name: "update",
          description: "Update secret in the cloud environment",
          args: [secretName, { name: "value" }],
          options: [subdomain()],
        },
      ],
    },
    {
      name: "sw",
      description: "Perform software management operations",
      subcommands: [
        {
          name: "uninstall",
          description: "Remove the installed CLI from system permanently",
          options: [
            {
              name: "--force",
              description: "Force uninstall without confirmation",
            },
          ],
        },
        {
          name: "upgrade",
          description: "Upgrade the CLI to the latest version",
        },
        {
          name: "version",
          description:
            "Show the current version of Nhost CLI you have installed",
        },
      ],
    },
    { name: "login", description: "Login to Nhost" },
    {
      name: "gen-docs",
      description: "Generate markdown documentation for the CLI",
    },
    {
      name: ["help", "h"],
      description: "Shows a list of commands or help for one command",
      args: { name: "command", isOptional: true },
    },
  ],
  options: [
    {
      name: "--branch",
      description:
        "Git branch name, used to create docker volumes per branch (default: current git branch)",
      isPersistent: true,
      args: { name: "branch" },
    },
    {
      name: "--root-folder",
      description: "Root folder of project (default: .)",
      isPersistent: true,
      args: { name: "dir", template: "folders" },
    },
    {
      name: "--dot-nhost-folder",
      description: "Path to .nhost folder (default: .nhost)",
      isPersistent: true,
      args: { name: "dir", template: "folders" },
    },
    {
      name: "--nhost-folder",
      description: "Path to nhost folder (default: nhost)",
      isPersistent: true,
      args: { name: "dir", template: "folders" },
    },
    {
      name: "--project-name",
      description: "Project name (default: project directory name)",
      isPersistent: true,
      args: { name: "name" },
    },
    {
      name: "--local-subdomain",
      description:
        "Local subdomain to reach the development environment (default: local)",
      isPersistent: true,
      args: { name: "subdomain" },
    },
    {
      name: ["--help", "-h"],
      description: "Show help",
      isPersistent: true,
    },
    { name: ["--version", "-v"], description: "Print the version" },
  ],
};

export default completionSpec;
