// Kamal v2.12.0 (RubyGems / GitHub tag basecamp/kamal v2.12.0, 2026-11-20). Source: lib/kamal/cli/*.rb (Thor
// command and option definitions) at tag v2.12.0, read statically (not run), plus Thor 1.5.0 for option rendering.
// Kamal 2 replaced Traefik with kamal-proxy and dropped envify/healthcheck/destinations, so those were removed.

const destinationGenerator: Fig.Generator = {
  // A destination "staging" is read from config/deploy.staging.yml
  script: ["ls", "-1", "config"],
  cache: {
    cacheByDirectory: true,
    strategy: "stale-while-revalidate",
    ttl: 30,
  },
  postProcess: function (out) {
    return out
      .split("\n")
      .map((file) => file.match(/^deploy\.(.+)\.yml$/)?.[1])
      .filter((destination): destination is string => Boolean(destination))
      .map((destination) => ({
        name: destination,
        description: `config/deploy.${destination}.yml`,
      }));
  },
};

const noCacheOption: Fig.Option = {
  name: "--no-cache",
  description: "Build without using Docker's build cache",
};

const deployOptions: Fig.Option[] = [
  {
    name: ["-P", "--skip-push"],
    description: "Skip image build and push",
  },
  noCacheOption,
];

const confirmedOption: Fig.Option = {
  name: ["-y", "--confirmed"],
  description: "Proceed without confirmation question",
};

const rollingOption = (description: string): Fig.Option => ({
  name: "--rolling",
  description,
});

const interactiveOption = (description: string): Fig.Option => ({
  name: ["-i", "--interactive"],
  description,
});

const reuseOption: Fig.Option = {
  name: "--reuse",
  description:
    "Reuse currently running container instead of starting a new one",
};

const rawOption: Fig.Option = {
  name: "--raw",
  description: "Output raw, unmodified stdout",
};

const registrySkipOptions: Fig.Option[] = [
  { name: ["-L", "--skip-local"], description: "Skip local login" },
  { name: ["-R", "--skip-remote"], description: "Skip remote login" },
];

const logOptions: Fig.Option[] = [
  {
    name: ["-s", "--since"],
    description:
      "Show logs since timestamp (e.g. 2013-01-02T13:23:37Z) or relative (e.g. 42m for 42 minutes)",
    args: { name: "since" },
  },
  {
    name: ["-n", "--lines"],
    description: "Number of log lines to pull from each server",
    args: { name: "lines" },
  },
  {
    name: ["-g", "--grep"],
    description:
      "Show lines with grep match only (use this to fetch specific requests by id)",
    args: { name: "pattern" },
  },
  {
    name: ["-f", "--follow"],
    description:
      "Follow logs on primary server (or specific host set by --hosts)",
  },
  {
    name: ["-T", "--skip-timestamps"],
    description: "Skip appending timestamps to logging output",
  },
];

const grepOptionsOption: Fig.Option = {
  name: "--grep-options",
  description: "Additional options supplied to grep",
  args: { name: "options" },
};

// Thor class options, valid on every command
const persistent = (options: Fig.Option[]): Fig.Option[] =>
  options.map((option) => ({ ...option, isPersistent: true }));

const baseOptions: Fig.Option[] = persistent([
  { name: ["-v", "--verbose"], description: "Detailed logging" },
  { name: ["-q", "--quiet"], description: "Minimal logging" },
  {
    name: "--version",
    args: { name: "VERSION" },
    description: "Run commands against a specific app version",
  },

  {
    name: ["-p", "--primary"],
    description: "Run commands only on primary host instead of all",
  },
  {
    name: ["-h", "--hosts"],
    args: { name: "hosts" },
    description:
      "Run commands on these hosts instead of all (separate by comma, supports wildcards with *)",
  },
  {
    name: ["-r", "--roles"],
    args: { name: "roles" },
    description:
      "Run commands on these roles instead of all (separate by comma, supports wildcards with *)",
  },

  {
    name: ["-c", "--config-file"],
    args: {
      name: "config",
      default: "config/deploy.yml",
      template: "filepaths",
    },
    description: "Path to config file",
  },
  {
    name: ["-d", "--destination"],
    description:
      "Specify destination to be used for config file (staging -> deploy.staging.yml)",
    args: {
      name: "destination",
      description: "Destination to use",
      generators: destinationGenerator,
    },
  },
  { name: ["-H", "--skip-hooks"], description: "Don't run hooks" },
  {
    name: "--lock-wait",
    description:
      "Wait for the deploy lock if it's already held instead of failing immediately",
  },
  {
    name: "--lock-wait-timeout",
    description:
      "Maximum seconds to wait for the deploy lock when --lock-wait is set",
    args: { name: "seconds", default: "900" },
  },
  {
    name: "--lock-wait-interval",
    description: "Seconds between deploy lock polls when --lock-wait is set",
    args: { name: "seconds", default: "15" },
  },
]);

// ------------------------ COMMANDS ------------------------

// TODO: the accessory names can be autocompleted by parsing the config
const accessoryNameArg: Fig.Arg = { name: "name" };

const accessoryNameOrAllArg: Fig.Arg = {
  name: "name",
  suggestions: [{ name: "all", description: "All accessories" }],
};

const accessorySubcommand: Fig.Subcommand = {
  name: "accessory",
  description: "Manage accessories (db/redis/search)",
  subcommands: [
    {
      name: "boot",
      description:
        "Boot new accessory service on host (use NAME=all to boot all accessories)",
      args: accessoryNameOrAllArg,
    },
    {
      name: "upload",
      description: "Upload accessory files to host",
      hidden: true,
      args: accessoryNameArg,
    },
    {
      name: "directories",
      description: "Create accessory directories on host",
      hidden: true,
      args: accessoryNameArg,
    },
    {
      name: "reboot",
      description:
        "Reboot existing accessory on host (stop container, remove container, start new container; use NAME=all to boot all accessories)",
      args: accessoryNameOrAllArg,
    },
    {
      name: "start",
      description: "Start existing accessory container on host",
      args: accessoryNameArg,
    },
    {
      name: "stop",
      description: "Stop existing accessory container on host",
      args: accessoryNameArg,
    },
    {
      name: "restart",
      description: "Restart existing accessory container on host",
      args: accessoryNameArg,
    },
    {
      name: "details",
      description:
        "Show details about accessory on host (use NAME=all to show all accessories)",
      args: accessoryNameOrAllArg,
    },
    {
      name: "exec",
      description:
        "Execute a custom command on servers within the accessory container",
      args: [accessoryNameArg, { name: "CMD", isVariadic: true }],
      options: [
        interactiveOption(
          "Execute command over ssh for an interactive shell (use for console/bash)"
        ),
        reuseOption,
        rawOption,
      ],
    },
    {
      name: "logs",
      description: "Show log lines from accessory on host",
      args: accessoryNameArg,
      options: [...logOptions, grepOptionsOption],
    },
    {
      name: "pull_image",
      description: "Pull accessory image on host",
      hidden: true,
      args: accessoryNameArg,
    },
    {
      name: "remove",
      description:
        "Remove accessory container, image and data directory from host (use NAME=all to remove all accessories)",
      options: [confirmedOption],
      args: accessoryNameOrAllArg,
    },
    {
      name: "remove_container",
      hidden: true,
      description: "Remove accessory container from host",
      args: accessoryNameArg,
    },
    {
      name: "remove_image",
      hidden: true,
      description: "Remove accessory image from host",
      args: accessoryNameArg,
    },
    {
      name: "remove_service_directory",
      hidden: true,
      description:
        "Remove accessory directory used for uploaded files and data directories from host",
      args: accessoryNameArg,
    },
    {
      name: "upgrade",
      description:
        "Upgrade accessories from Kamal 1.x to 2.0 (restart them in 'kamal' network)",
      args: accessoryNameOrAllArg,
      options: [rollingOption("Upgrade one host at a time"), confirmedOption],
    },
  ],
};

const appSubcommand: Fig.Subcommand = {
  name: "app",
  description: "Manage application",
  subcommands: [
    {
      name: "boot",
      description: "Boot app on servers (or reboot app if already running)",
    },
    { name: "start", description: "Start existing app container on servers" },
    { name: "stop", description: "Stop app container on servers" },
    { name: "details", description: "Show details about app containers" },
    {
      name: "exec",
      description:
        "Execute a custom command on servers within the app container",
      args: { name: "CMD", isVariadic: true },
      options: [
        interactiveOption(
          "Execute command over ssh for an interactive shell (use for console/bash)"
        ),
        reuseOption,
        {
          name: ["-e", "--env"],
          description: "Set environment variables for the command",
          args: { name: "key:value", isVariadic: true },
        },
        {
          name: "--detach",
          description: "Execute command in a detached container",
        },
        rawOption,
      ],
    },
    { name: "containers", description: "Show app containers on servers" },
    {
      name: "stale_containers",
      description: "Detect app stale containers",
      options: [
        {
          name: ["-s", "--stop"],
          description: "Stop the stale containers found",
        },
      ],
    },
    { name: "images", description: "Show app images on servers" },
    {
      name: "logs",
      description: "Show log lines from app on servers",
      options: [
        ...logOptions,
        grepOptionsOption,
        {
          name: "--container-id",
          description: "Docker container ID to fetch logs",
          args: { name: "container_id" },
        },
      ],
    },
    {
      name: "remove",
      description: "Remove app containers and images from servers",
    },
    { name: "live", description: "Set the app to live mode" },
    {
      name: "maintenance",
      description: "Set the app to maintenance mode",
      options: [
        {
          name: "--drain-timeout",
          description:
            "How long to allow in-flight requests to complete (defaults to drain_timeout from config)",
          args: { name: "seconds" },
        },
        {
          name: "--message",
          description: "Message to display to clients while stopped",
          args: { name: "message" },
        },
      ],
    },
    {
      name: "remove_container",
      description: "Remove app container with given version from servers",
      hidden: true,
      args: { name: "VERSION" },
    },
    {
      name: "remove_containers",
      description: "Remove all app containers from servers",
      hidden: true,
    },
    {
      name: "remove_images",
      description: "Remove all app images from servers",
      hidden: true,
    },
    {
      name: "remove_app_directories",
      description: "Remove the app directories from servers",
      hidden: true,
    },
    {
      name: "version",
      description: "Show app version currently running on servers",
    },
  ],
};

const proxySubcommand: Fig.Subcommand = {
  name: "proxy",
  description: "Manage kamal-proxy",
  icon: "🚦",
  subcommands: [
    { name: "boot", description: "Boot proxy on servers" },
    {
      name: "boot_config",
      description: "Manage kamal-proxy boot configuration",
      deprecated: true,
      args: {
        name: "subcommand",
        suggestions: [{ name: "set" }, { name: "get" }, { name: "reset" }],
      },
      options: [
        {
          name: "--no-publish",
          description: "Do not publish the proxy ports on the host",
        },
        {
          name: "--publish-host-ip",
          description:
            "Host IP address to bind HTTP/HTTPS traffic to (defaults to all interfaces)",
          args: { name: "ip" },
          isRepeatable: true,
        },
        {
          name: "--http-port",
          description: "HTTP port to publish on the host",
          args: { name: "port" },
        },
        {
          name: "--https-port",
          description: "HTTPS port to publish on the host",
          args: { name: "port" },
        },
        {
          name: "--log-max-size",
          description: "Max size of proxy logs",
          args: { name: "size" },
        },
        {
          name: "--registry",
          description: "Registry to use for the proxy image",
          args: { name: "registry" },
        },
        {
          name: "--repository",
          description: "Repository for the proxy image",
          args: { name: "repository" },
        },
        {
          name: "--image-version",
          description: "Version of the proxy to run",
          args: { name: "version" },
        },
        {
          name: "--metrics-port",
          description: "Port to report prometheus metrics on",
          args: { name: "port" },
        },
        {
          name: "--debug",
          description: "Whether to run the proxy in debug mode",
        },
        {
          name: "--docker-options",
          description: "Docker options to pass to the proxy container",
          args: { name: "option=value", isVariadic: true },
        },
      ],
    },
    {
      name: "reboot",
      description:
        "Reboot proxy on servers (stop container, remove container, start new container)",
      options: [
        rollingOption(
          "Reboot proxy on hosts in sequence, rather than in parallel"
        ),
        confirmedOption,
      ],
    },
    {
      name: "upgrade",
      description:
        "Upgrade to kamal-proxy on servers (stop container, remove container, start new container, reboot app)",
      hidden: true,
      options: [
        rollingOption(
          "Reboot proxy on hosts in sequence, rather than in parallel"
        ),
        confirmedOption,
      ],
    },
    { name: "start", description: "Start existing proxy container on servers" },
    { name: "stop", description: "Stop existing proxy container on servers" },
    {
      name: "restart",
      description: "Restart existing proxy container on servers",
    },
    {
      name: "details",
      description: "Show details about proxy container from servers",
    },
    {
      name: "logs",
      description: "Show log lines from proxy on servers",
      options: logOptions,
    },
    {
      name: "remove",
      description: "Remove proxy container and image from servers",
      options: [
        {
          name: "--force",
          description: "Force removing proxy when apps are still installed",
        },
      ],
    },
    {
      name: "remove_container",
      description: "Remove proxy container from servers",
      hidden: true,
    },
    {
      name: "remove_image",
      description: "Remove proxy image from servers",
      hidden: true,
    },
    {
      name: "remove_proxy_directory",
      description: "Remove the proxy directory from servers",
      hidden: true,
    },
  ],
};

const lockSubcommands: Fig.Subcommand = {
  name: "lock",
  description: "Manage the deploy lock",
  icon: "🔒",
  subcommands: [
    {
      name: "status",
      description: "Report lock status",
    },
    {
      name: "acquire",
      description: "Acquire the deploy lock",
      options: [
        {
          name: ["-m", "--message"],
          description: "A lock message",
          args: { name: "message" },
          isRequired: true,
        },
      ],
    },
    {
      name: "release",
      description: "Release the deploy lock",
    },
  ],
};

const registrySubcommand: Fig.Subcommand = {
  name: "registry",
  description: "Login and -out of the image registry",
  icon: "📦",
  subcommands: [
    {
      name: "setup",
      description:
        "Setup local registry or log in to remote registry locally and remotely",
      options: registrySkipOptions,
    },
    {
      name: "remove",
      description:
        "Remove local registry or log out of remote registry locally and remotely",
      options: registrySkipOptions,
    },
    {
      name: "login",
      description: "Log in to remote registry locally and remotely",
      options: registrySkipOptions,
    },
    {
      name: "logout",
      description: "Log out of remote registry locally and remotely",
      options: registrySkipOptions,
    },
  ],
};

const pruneSubcommand: Fig.Subcommand = {
  name: "prune",
  icon: "🧹",
  description: "Prune old application images and containers",
  subcommands: [
    { name: "all", description: "Prune unused images and stopped containers" },
    { name: "images", description: "Prune unused images" },
    {
      name: "containers",
      description:
        "Prune all stopped containers, except the last n (default 5)",
      options: [
        {
          name: "--retain",
          description: "Number of containers to retain",
          args: { name: "count" },
        },
      ],
    },
  ],
};

const buildOutputOption = (defaultOutput: string): Fig.Option => ({
  name: "--output",
  description:
    "Exported type for the build result, and may be any exported type supported by 'buildx --output'",
  args: { name: "export_type", default: defaultOutput },
});

const buildSubcommand: Fig.Subcommand = {
  name: "build",
  description: "Build application image",
  icon: "🏗️",
  subcommands: [
    {
      name: "deliver",
      description:
        "Build app and push app image to registry then pull image on servers",
    },
    {
      name: "push",
      description: "Build and push app image to registry",
      options: [buildOutputOption("registry"), noCacheOption],
    },
    {
      name: "pull",
      description: "Pull app image from registry onto servers",
    },
    {
      name: "create",
      description: "Create a build setup",
    },
    {
      name: "remove",
      description: "Remove build setup",
    },
    {
      name: "details",
      description: "Show build setup",
    },
    {
      name: "dev",
      description:
        "Build using the working directory, tag it as dirty, and push to local image store",
      options: [buildOutputOption("docker"), noCacheOption],
    },
  ],
};

const secretsSubcommand: Fig.Subcommand = {
  name: "secrets",
  description: "Helpers for extracting secrets",
  subcommands: [
    {
      name: "fetch",
      description: "Fetch secrets from a vault",
      args: { name: "SECRETS", isVariadic: true },
      options: [
        {
          name: ["-a", "--adapter"],
          description: "Which vault adapter to use",
          isRequired: true,
          args: {
            name: "adapter",
            suggestions: [
              "1password",
              "aws_secrets_manager",
              "bitwarden",
              "bitwarden-sm",
              "doppler",
              "enpass",
              "gcp",
              "lastpass",
              "passbolt",
            ],
          },
        },
        {
          name: "--account",
          description: "The account identifier or username",
          args: { name: "account" },
        },
        {
          name: "--from",
          description: "A vault or folder to fetch the secrets from",
          args: { name: "from" },
        },
      ],
    },
    {
      name: "extract",
      description: "Extract a single secret from the results of a fetch call",
      args: [{ name: "name" }, { name: "secrets" }],
    },
    {
      name: "print",
      description: "Print the secrets (for debugging)",
    },
  ],
};

const rootCommands: Fig.Subcommand[] = [
  {
    name: "setup",
    icon: "🛠️",
    description:
      "Setup all accessories, push the env, and deploy app to servers",
    options: deployOptions,
  },
  {
    name: "deploy",
    description: "Deploy app to servers",
    icon: "🚀",
    priority: 80,
    options: deployOptions,
  },
  {
    name: "redeploy",
    description:
      "Deploy app to servers without bootstrapping servers, starting kamal-proxy and pruning",
    icon: "🚀",
    options: deployOptions,
  },
  {
    name: "rollback",
    description: "Rollback app to VERSION",
    icon: "↩️",
    args: {
      name: "version",
      // TODO: This can be autocompleted by doing `bin/kamal app containers` and parsing output
    },
  },
  {
    name: "details",
    icon: "🔍",
    description: "Show details about all containers",
  },
  {
    name: "audit",
    icon: "🔍",
    description: "Show audit log from servers",
  },
  {
    name: "config",
    description: "Show combined config (including secrets!)",
  },
  {
    name: "docs",
    description: "Show Kamal configuration documentation",
    args: {
      name: "section",
      isOptional: true,
      suggestions: [
        "accessory",
        "alias",
        "boot",
        "builder",
        "env",
        "logging",
        "output",
        "proxy",
        "registry",
        "role",
        "servers",
        "ssh",
        "sshkit",
      ],
    },
  },
  {
    name: "init",
    icon: "🆕",
    description:
      "Create config stub in config/deploy.yml and secrets stub in .kamal",
    options: [
      {
        name: "--bundle",
        description: "Add Kamal to the Gemfile and create a bin/kamal binstub",
      },
    ],
  },
  {
    name: "remove",
    description:
      "Remove kamal-proxy, app, accessories, and registry session from servers",
    icon: "🗑️",
    options: [confirmedOption],
  },
  {
    name: "upgrade",
    description: "Upgrade from Kamal 1.x to 2.0",
    options: [confirmedOption, rollingOption("Upgrade one host at a time")],
  },
  {
    name: "version",
    description: "Show Kamal version",
  },

  // mounted subcommands

  accessorySubcommand,
  appSubcommand,
  buildSubcommand,
  lockSubcommands,
  proxySubcommand,
  pruneSubcommand,
  registrySubcommand,
  secretsSubcommand,
  {
    name: "server",
    description: "Bootstrap servers with curl and Docker",
    subcommands: [
      {
        name: "exec",
        description: "Run a custom command on the server",
        args: { name: "CMD", isVariadic: true },
        options: [
          interactiveOption(
            "Run the command interactively (use for console/bash)"
          ),
          rawOption,
        ],
      },
      { name: "bootstrap", description: "Set up Docker to run Kamal apps" },
    ],
  },
];

const completionSpec: Fig.Spec = {
  name: "kamal",
  description: "Deploy web apps anywhere",
  generateSpec: async (context, executeShellCommand) => {
    // TODO: use logic from this comment https://github.com/withfig/autocomplete/pull/2112#discussion_r1412879317
    const hasBinKamal =
      (
        await executeShellCommand({
          command: "bash",
          args: [
            "-c",
            `while [ ! -f "$PWD/bin/kamal" ] && [ "$PWD" != "/" ]; do cd ..; done; [ -f "$PWD/bin/kamal" ] && echo "true" || echo "false"`,
          ],
        })
      ).stdout == "true";

    return {
      name: "kamal",
      // if it has "bin/kamal" file show all commands
      options: baseOptions,
      subcommands: hasBinKamal
        ? rootCommands
        : rootCommands.map((cmd) =>
            cmd.name === "init" ? { ...cmd, priority: 100 } : cmd
          ),
    };
  },
};

export default completionSpec;
