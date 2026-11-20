// flyctl v0.5.13 (GitHub tag superfly/flyctl v0.5.13, the latest v0.x release tag, cross-checked with the Homebrew formula flyctl 0.5.13; 2026-11-19).
// Source: static walk of the cobra command tree in the Go source at tag v0.5.13 (internal/command/** and internal/flag), extracted with a script, not a live run of the binary.
// Command and flag names, aliases, shorthands, descriptions, hidden/deprecated state and literal defaults come from the source;
// positional arguments come from each command's Use string. Defaults that are computed at runtime are omitted.
// Omitted on purpose: the DEV-only agent debug commands (resolve, probe, instances, establish, connect) and the unregistered restart command.
// The cobra built-ins help and completion are added by hand.

type FlyApp = {
  ID: string;
  Status: string;
  Organization: {
    Slug: string;
  };
};

// Autocompletion generator for Fly apps using flyctl list apps
// https://fly.io/docs/flyctl/apps-list/
const flyAppsGenerator: Fig.Generator = {
  script: ["flyctl", "apps", "list", "--json"],
  postProcess: (output) => {
    const json: FlyApp[] = JSON.parse(output);

    return json.map((app) => {
      const status = app.Status;
      return {
        name: app.ID,
        description: `Organization: ${app.Organization.Slug}`,
        icon:
          status == "running" || status == "deployed"
            ? "🟢"
            : status == "pending"
              ? "🟡"
              : "🔴",
      };
    });
  },
};

// Autocompletion generator for Fly apps using flyctl list orgs
// https://fly.io/docs/flyctl/orgs-list/
const flyOrgsGenerator: Fig.Generator = {
  script: ["fly", "orgs", "list", "--json"],
  postProcess: (output) => {
    const json: Record<string, string> = JSON.parse(output);

    // sort such that "personal" is always first, then alphabetically
    return Object.entries(json)
      .sort(([id1, name1], [id2, name2]) => {
        if (id1 == "personal") {
          return -1;
        } else if (id2 == "personal") {
          return 1;
        } else {
          return name1.localeCompare(name2);
        }
      })
      .map(([id, name]) => ({
        name: id,
        description: name,
        icon: id == "personal" ? "👤" : "🏢",
      }));
  },
};

const accelerateOption: Fig.Option = {
  name: "--accelerate",
  description: "Cache objects on write in all regions",
  hidden: true,
};

const addressOption: Fig.Option = {
  name: ["--address", "-A"],
  description: "Address of VM to connect to",
  args: { name: "address" },
};

const agentOption: Fig.Option = {
  name: "--agent",
  description:
    "Act on exactly the named agent(s) instead of detecting them; include universal to write ~/.agents/skills. One of: universal, claude-code, codex, cursor, opencode, copilot, factory-droid, pi, antigravity. Can be repeated or comma-separated",
  isRepeatable: true,
  args: {
    name: "agent",
    suggestions: [
      "universal",
      "claude-code",
      "codex",
      "cursor",
      "opencode",
      "copilot",
      "factory-droid",
      "pi",
      "antigravity",
    ],
  },
};

const appOption: Fig.Option = {
  name: ["--app", "-a"],
  description: "Application name",
  args: { name: "app", generators: flyAppsGenerator },
};

const autostartOption: Fig.Option = {
  name: "--autostart",
  description:
    "Automatically start a stopped Machine when a network request is received",
};

const autostopOption: Fig.Option = {
  name: "--autostop",
  description:
    "Automatically stop a Machine when there are no network requests for it. Options include 'off', 'stop', and 'suspend'",
  requiresSeparator: true,
  args: {
    name: "autostop",
    isOptional: true,
    default: "off",
    suggestions: ["off", "stop", "suspend"],
  },
};

const bindAddrOption: Fig.Option = {
  name: ["--bind-addr", "-b"],
  description: "Local address to bind to",
  args: { name: "bind-addr", default: "127.0.0.1" },
};

const buildArgOption: Fig.Option = {
  name: "--build-arg",
  description:
    "Set of build time variables in the form of NAME=VALUE pairs. Can be specified multiple times",
  hidden: true,
  isRepeatable: true,
  args: { name: "build-arg" },
};

const buildContextWarnSizeOption: Fig.Option = {
  name: "--build-context-warn-size",
  description:
    "Warn when the Docker build context is larger than this. Accepts a plain number (in MB) or a human-readable size (e.g. 512mb, 1gb). Set to 0 to disable. Also set with FLY_BUILD_CONTEXT_WARN_SIZE",
  args: { name: "build-context-warn-size" },
};

const buildDepotOption: Fig.Option = {
  name: "--build-depot",
  description: "Build your image with depot.dev",
};

const buildLocalOnlyOption: Fig.Option = {
  name: "--build-local-only",
  description: "Only perform builds locally using the local docker daemon",
  hidden: true,
};

const buildNixpacksOption: Fig.Option = {
  name: "--build-nixpacks",
  description: "Build your image with nixpacks",
};

const buildOnlyOption: Fig.Option = {
  name: "--build-only",
  description: "Only build the image without running the machine",
  hidden: true,
};

const buildRemoteOnlyOption: Fig.Option = {
  name: "--build-remote-only",
  description: "Perform builds remotely without using the local docker daemon",
  hidden: true,
};

const buildTargetOption: Fig.Option = {
  name: "--build-target",
  description:
    "Set the target build stage to build if the Dockerfile has more than one stage",
  hidden: true,
  args: { name: "build-target" },
};

const buildkitOption: Fig.Option = {
  name: "--buildkit",
  description: "Deploy using buildkit-based remote builder",
};

const buildkitAddrOption: Fig.Option = {
  name: "--buildkit-addr",
  description:
    "Address of remote buildkit daemon (e.g. tcp://127.0.0.1:1234 or unix:///path/to/socket)",
  hidden: true,
  args: { name: "buildkit-addr" },
};

const buildkitImageOption: Fig.Option = {
  name: "--buildkit-image",
  description: "Image to use for remote buildkit daemon",
  hidden: true,
  args: { name: "buildkit-image" },
};

const cacheDiskPathOption: Fig.Option = {
  name: "--cache-disk-path",
  description: "Absolute path in the Machine at which to mount the cache disk",
  args: { name: "cache-disk-path" },
};

const cacheDiskSizeOption: Fig.Option = {
  name: ["--cache-disk-size", "--cachedrive-size"],
  description:
    "Cache disk size in MiB or a human-readable size (e.g. 512mb, 10gb). Set to 0 to disable. Changing the size discards the disk's contents",
  args: { name: "cache-disk-size" },
};

const claudeOption: Fig.Option = {
  name: "--claude",
  description: "Add MCP server to the Claude client configuration",
};

const commandOption: Fig.Option = {
  name: ["--command", "-C"],
  description: "Command to run on SSH session",
  args: { name: "command" },
};

const compressionOption: Fig.Option = {
  name: "--compression",
  description:
    'Compression algorithm to use for the image. Options are "zstd" or "gzip". Defaults to "gzip"',
  args: { name: "compression", default: "gzip", suggestions: ["zstd", "gzip"] },
};

const compressionLevelOption: Fig.Option = {
  name: "--compression-level",
  description: "Compression level to use for the image. Defaults to 7",
  args: { name: "compression-level", default: "7" },
};

const configOption: Fig.Option = {
  name: ["--config", "-c"],
  description: "Path to application configuration file",
  args: { name: "config", template: "filepaths" },
};

const configOption2: Fig.Option = {
  name: "--config",
  description:
    "Path to the MCP client configuration file (can be specified multiple times)",
  isRepeatable: true,
  args: { name: "config", template: "filepaths" },
};

const containerOption: Fig.Option = {
  name: "--container",
  description: "Container to connect to",
  args: { name: "container" },
};

const copyConfigOption: Fig.Option = {
  name: "--copy-config",
  description: "Use the configuration file if present without prompting",
};

const cursorOption: Fig.Option = {
  name: "--cursor",
  description: "Add MCP server to the Cursor client configuration",
};

const databaseOption: Fig.Option = {
  name: ["--database", "-d"],
  description: "Target database within the cluster",
  args: { name: "database" },
};

const detachOption: Fig.Option = {
  name: "--detach",
  description: "Return immediately instead of monitoring deployment progress",
};

const dnsChecksOption: Fig.Option = {
  name: "--dns-checks",
  description: "Perform DNS checks during deployment",
};

const dockerfileOption: Fig.Option = {
  name: "--dockerfile",
  description:
    "Path to a Dockerfile. Defaults to the Dockerfile in the working directory",
  args: { name: "dockerfile", template: "filepaths" },
};

const dockerfileOption2: Fig.Option = {
  name: "--dockerfile",
  description:
    "The path to a Dockerfile. Defaults to the Dockerfile in the working directory",
  args: { name: "dockerfile", template: "filepaths" },
};

const entrypointOption: Fig.Option = {
  name: "--entrypoint",
  description: "The command to override the Docker ENTRYPOINT",
  args: { name: "entrypoint" },
};

const envOption: Fig.Option = {
  name: ["--env", "-e"],
  description:
    "Set of environment variables in the form of NAME=VALUE pairs. Can be specified multiple times",
  isRepeatable: true,
  args: { name: "env" },
};

const expiryOption: Fig.Option = {
  name: ["--expiry", "-x"],
  description: "The duration that the token will be valid",
  args: { name: "expiry" },
};

const fileLiteralOption: Fig.Option = {
  name: "--file-literal",
  description:
    "Set of literals to write to the Machine, in the form of /path/inside/machine=VALUE pairs, where VALUE is the base64-encoded raw content. Can be specified multiple times",
  isRepeatable: true,
  args: { name: "file-literal" },
};

const fileLiteralOption2: Fig.Option = {
  name: "--file-literal",
  description:
    "Set of literals in the form of /path/inside/machine=VALUE pairs where VALUE is the content. Can be specified multiple times",
  isRepeatable: true,
  args: { name: "file-literal" },
};

const fileLocalOption: Fig.Option = {
  name: "--file-local",
  description:
    "Set of files to write to the Machine, in the form of /path/inside/machine=<local/path> pairs. Can be specified multiple times",
  isRepeatable: true,
  args: { name: "file-local" },
};

const fileLocalOption2: Fig.Option = {
  name: "--file-local",
  description:
    "Set of files in the form of /path/inside/machine=<local/path> pairs. Can be specified multiple times",
  isRepeatable: true,
  args: { name: "file-local" },
};

const fileSecretOption: Fig.Option = {
  name: "--file-secret",
  description:
    "Set of secrets to write to the Machine, in the form of /path/inside/machine=SECRET pairs, where SECRET is the name of the secret. The content of the secret must be base64 encoded. Can be specified multiple times",
  isRepeatable: true,
  args: { name: "file-secret" },
};

const fileSecretOption2: Fig.Option = {
  name: "--file-secret",
  description:
    "Set of secrets in the form of /path/inside/machine=SECRET pairs where SECRET is the name of the secret. Can be specified multiple times",
  isRepeatable: true,
  args: { name: "file-secret" },
};

const fromManifestOption: Fig.Option = {
  name: ["--from-manifest", "-p", "--manifest-path"],
  description: "Path to read the manifest from",
  hidden: true,
  args: { name: "from-manifest", template: "filepaths" },
};

const generateNameOption: Fig.Option = {
  name: "--generate-name",
  description: "Generate an app name",
};

const groupOption: Fig.Option = {
  name: "--group",
  description: "The process group to add the region to",
  args: { name: "group" },
};

const hostDedicationIdOption: Fig.Option = {
  name: "--host-dedication-id",
  description:
    "The dedication id of the reserved hosts for your organization (if any)",
  args: { name: "host-dedication-id" },
};

const imageOption: Fig.Option = {
  name: ["--image", "-i"],
  description: "The Docker image to deploy",
  args: { name: "image" },
};

const imageOption2: Fig.Option = {
  name: ["--image", "-i"],
  description: "Scan the repository image",
  args: { name: "image" },
};

const imageLabelOption: Fig.Option = {
  name: "--image-label",
  description:
    'Image label to use when tagging and pushing to the fly registry. Defaults to "deployment-{timestamp}"',
  hidden: true,
  args: { name: "image-label" },
};

const inspectorOption: Fig.Option = {
  name: ["--inspector", "-i"],
  description:
    "Launch MCP inspector: a developer tool for testing and debugging MCP servers",
};

const internalPortOption: Fig.Option = {
  name: "--internal-port",
  description: "Set internal_port for all services in the generated fly.toml",
  args: { name: "internal-port" },
};

const jsonOption: Fig.Option = {
  name: ["--json", "-j"],
  description: "JSON output",
};

const kernelArgOption: Fig.Option = {
  name: "--kernel-arg",
  description:
    "A list of kernel arguments to provide to the init. Can be specified multiple times",
  isRepeatable: true,
  args: { name: "kernel-arg" },
};

const locationOption: Fig.Option = {
  name: ["--location", "-l"],
  description: "URL identifying third-party service",
  args: { name: "location" },
};

const machineOption: Fig.Option = {
  name: "--machine",
  description: "Run the console in the existing machine with the specified ID",
  args: { name: "machine" },
};

const machineConfigOption: Fig.Option = {
  name: "--machine-config",
  description:
    "Read Machine config from a JSON file or string (use --config for app configuration)",
  args: { name: "machine-config", template: "filepaths" },
};

const metadataOption: Fig.Option = {
  name: ["--metadata", "-m"],
  description:
    "Metadata in the form of NAME=VALUE pairs. Can be specified multiple times",
  isRepeatable: true,
  args: { name: "metadata" },
};

const neovimOption: Fig.Option = {
  name: "--neovim",
  description: "Add MCP server to the Neovim client configuration",
};

const noBuildCacheOption: Fig.Option = {
  name: "--no-build-cache",
  description: "Do not use the cache when building the image",
  hidden: true,
};

const noContainerOption: Fig.Option = {
  name: "--no-container",
  description:
    "Connect to the machine itself rather than to one of its containers",
};

const noDescriptionsOption: Fig.Option = {
  name: "--no-descriptions",
  description: "Disable completion descriptions",
};

const orgOption: Fig.Option = {
  name: ["--org", "-o"],
  description: "The target Fly.io organization",
  args: { name: "org", generators: flyOrgsGenerator },
};

const orgOption2: Fig.Option = {
  name: "--org",
  description: "The organization that will own the app",
  args: { name: "org", generators: flyOrgsGenerator },
};

const portOption: Fig.Option = {
  name: ["--port", "-p"],
  description:
    "The external ports and handlers for services, in the format: port[:machinePort][/protocol[:handler[:handler...]]])",
  isRepeatable: true,
  args: { name: "port" },
};

const processGroupOption: Fig.Option = {
  name: ["--process-group", "-g", "--group"],
  description: "The target process group (also --group)",
  args: { name: "process-group" },
};

const ptyOption: Fig.Option = {
  name: "--pty",
  description:
    "Allocate a pseudo-terminal (default: on when no command is provided)",
};

const publicOption: Fig.Option = {
  name: ["--public", "-p"],
  description: "Objects in the bucket should be publicly accessible",
};

const quietOption: Fig.Option = {
  name: ["--quiet", "-q"],
  description: "Don't print progress indicators for WireGuard",
};

const regionOption: Fig.Option = {
  name: ["--region", "-r"],
  description: "The target region (see 'flyctl platform regions')",
  args: { name: "region" },
};

const restartOption: Fig.Option = {
  name: "--restart",
  description:
    "Set the restart policy for a Machine. Options include 'no', 'always', and 'on-failure'",
  args: { name: "restart", suggestions: ["no", "always", "on-failure"] },
};

const rootfsPersistOption: Fig.Option = {
  name: "--rootfs-persist",
  description:
    "Whether to persist the root filesystem across restarts. Options include 'never', 'always', and 'restart'",
  args: { name: "rootfs-persist", suggestions: ["never", "always", "restart"] },
};

const rootfsSizeOption: Fig.Option = {
  name: "--rootfs-size",
  description:
    "Root filesystem size in GB. Accepts a plain number (in GB) or a human-readable size (e.g. 2gb, 5gb). Uses an overlayfs to allow the root filesystem to exceed its default size. Set to 0 to unset",
  args: { name: "rootfs-size" },
};

const scheduleOption: Fig.Option = {
  name: "--schedule",
  description:
    "Schedule a Machine run at hourly, daily, weekly and monthly intervals",
  args: {
    name: "schedule",
    suggestions: ["hourly", "daily", "weekly", "monthly"],
  },
};

const selectOption: Fig.Option = {
  name: "--select",
  description: "Select from a list of machines",
  hidden: true,
};

const selectOption2: Fig.Option = {
  name: ["--select", "-s"],
  description: "Select available instances",
};

const selectOption3: Fig.Option = {
  name: ["--select", "-s"],
  description: "Select which machine to scan the image of from a list",
};

const serverOption: Fig.Option = {
  name: "--server",
  description: "Name to use for the MCP server in the MCP client configuration",
  args: { name: "server" },
};

const shadowAccessKeyOption: Fig.Option = {
  name: "--shadow-access-key",
  description: "Shadow bucket access key",
  args: { name: "shadow-access-key" },
};

const shadowEndpointOption: Fig.Option = {
  name: "--shadow-endpoint",
  description: "Shadow bucket endpoint",
  args: { name: "shadow-endpoint" },
};

const shadowNameOption: Fig.Option = {
  name: "--shadow-name",
  description: "Shadow bucket name",
  args: { name: "shadow-name" },
};

const shadowRegionOption: Fig.Option = {
  name: "--shadow-region",
  description: "Shadow bucket region",
  args: { name: "shadow-region" },
};

const shadowSecretKeyOption: Fig.Option = {
  name: "--shadow-secret-key",
  description: "Shadow bucket secret key",
  args: { name: "shadow-secret-key" },
};

const shadowWriteThroughOption: Fig.Option = {
  name: "--shadow-write-through",
  description: "Write objects through to the shadow bucket",
};

const skipDnsRegistrationOption: Fig.Option = {
  name: "--skip-dns-registration",
  description:
    "Do not register the machine's 6PN IP with the internal DNS system",
};

const stageOption: Fig.Option = {
  name: "--stage",
  description: "Set secrets but skip deployment for machine apps",
};

const standbyForOption: Fig.Option = {
  name: "--standby-for",
  description:
    "For Machines without services, a comma separated list of Machine IDs to act as standby for",
  isRepeatable: true,
  args: { name: "standby-for" },
};

const swapSizeOption: Fig.Option = {
  name: "--swap-size",
  description:
    "Swap size in MB. Accepts a plain number (in MB) or a human-readable size (e.g. 512mb, 1gb)",
  args: { name: "swap-size" },
};

const tarballOption: Fig.Option = {
  name: "--tarball",
  description:
    "URL or local path of a skills tarball to install from instead of downloading",
  hidden: true,
  args: { name: "tarball", template: "filepaths" },
};

const urlOption: Fig.Option = {
  name: "--url",
  description: "URL of the MCP wrapper server",
  args: { name: "url" },
};

const userOption: Fig.Option = {
  name: ["--user", "-u"],
  description: "Unix username to connect as",
  args: { name: "user", default: "root" },
};

const vmCpuKindOption: Fig.Option = {
  name: ["--vm-cpu-kind", "--vm-cpukind"],
  description:
    "The kind of CPU to use ('shared' or 'performance') (also --vm-cpukind)",
  args: { name: "vm-cpu-kind", suggestions: ["shared", "performance"] },
};

const vmCpusOption: Fig.Option = {
  name: ["--vm-cpus", "--cpus"],
  description: "Number of CPUs (also --cpus)",
  args: { name: "vm-cpus" },
};

const vmGpuKindOption: Fig.Option = {
  name: ["--vm-gpu-kind", "--vm-gpukind"],
  description: "GPU machines are no longer supported",
  hidden: true,
  args: { name: "vm-gpu-kind" },
};

const vmGpusOption: Fig.Option = {
  name: "--vm-gpus",
  description: "GPU machines are no longer supported",
  hidden: true,
  args: { name: "vm-gpus" },
};

const vmMaxMemoryOption: Fig.Option = {
  name: "--vm-max-memory",
  description: "Maximum memory (in megabytes) to allow for the VM",
  hidden: true,
  args: { name: "vm-max-memory" },
};

const vmMemoryOption: Fig.Option = {
  name: ["--vm-memory", "--memory"],
  description: "Memory (in megabytes) to attribute to the VM (also --memory)",
  args: { name: "vm-memory" },
};

const vmSizeOption: Fig.Option = {
  name: "--vm-size",
  description:
    'The VM size to set machines to. See "fly platform vm-sizes" for valid values',
  args: { name: "vm-size" },
};

const vscodeOption: Fig.Option = {
  name: "--vscode",
  description: "Add MCP server to the VS Code client configuration",
};

const websiteDomainNameOption: Fig.Option = {
  name: "--website-domain-name",
  description: "Domain name for website",
  hidden: true,
  args: { name: "website-domain-name" },
};

const wgOption: Fig.Option = {
  name: "--wg",
  description:
    "Determines whether communication with remote builders are conducted over wireguard or plain internet(https)",
};

const windsurfOption: Fig.Option = {
  name: "--windsurf",
  description: "Add MCP server to the Windsurf client configuration",
};

const yesOption: Fig.Option = {
  name: ["--yes", "-y", "--auto-confirm"],
  description: "Accept all confirmations (also --auto-confirm)",
};

const zedOption: Fig.Option = {
  name: "--zed",
  description: "Add MCP server to the Zed client configuration",
};

const completionSpec: Fig.Spec = {
  name: "flyctl",
  description: "The Fly.io command line interface",
  subcommands: [
    {
      name: "agent",
      description:
        "Commands that manage the Fly agent, a background process that manages flyctl wireguard connections",
      subcommands: [
        {
          name: "ping",
          description: "Ping the Fly agent",
          options: [jsonOption],
        },
        { name: "restart", description: "Restart the Fly agent" },
        {
          name: ["run", "daemon-start"],
          description: "Run the Fly agent in the foreground",
        },
        { name: "start", description: "Start the Fly agent" },
        { name: "stop", description: "Stop the Fly agent" },
      ],
    },
    {
      name: ["apps", "app"],
      description: "Manage apps",
      subcommands: [
        {
          name: "create",
          description: "Create a new application",
          args: { name: "app" },
          options: [
            generateNameOption,
            jsonOption,
            {
              name: "--machines",
              description: "Use the machines platform",
              hidden: true,
            },
            {
              name: "--name",
              description: "The app name to use",
              args: { name: "name" },
            },
            {
              name: "--network",
              description:
                "Name of the custom private network to create the app on. A network that doesn't exist yet is created",
              args: { name: "network" },
            },
            orgOption,
            {
              name: "--save",
              description: "Save the app name to the config file",
            },
            yesOption,
          ],
        },
        {
          name: ["destroy", "delete", "remove", "rm"],
          description: "Permanently destroy one or more apps",
          args: { name: "app", generators: flyAppsGenerator },
          options: [yesOption],
        },
        {
          name: "errors",
          description: "View application errors on Sentry.io",
          options: [appOption, configOption],
        },
        {
          name: ["list", "ls"],
          description: "List applications",
          options: [
            jsonOption,
            orgOption,
            { name: ["--quiet", "-q"], description: "Only list app names" },
          ],
        },
        {
          name: "move",
          description: "Move an app to another organization",
          args: { name: "app", generators: flyAppsGenerator },
          options: [
            orgOption,
            {
              name: "--skip-health-checks",
              description: "Update machines without waiting for health checks",
            },
            yesOption,
          ],
        },
        {
          name: "open",
          description: "Open browser to current deployed application",
          args: { name: "relative-uri", isOptional: true },
          options: [appOption, configOption],
        },
        {
          name: "releases",
          description: "List app releases",
          options: [
            appOption,
            configOption,
            {
              name: "--image",
              description: "Display the Docker image reference of the release",
            },
            jsonOption,
          ],
        },
        {
          name: "restart",
          description: "Restart an application",
          args: { name: "app", generators: flyAppsGenerator },
          options: [
            {
              name: "--force-stop",
              description: "Performs a force stop against the target Machine",
            },
            {
              name: "--skip-health-checks",
              description: "Restarts app without waiting for health checks",
            },
          ],
        },
        {
          name: "resume",
          description: "Use `fly scale count` instead",
          hidden: true,
          deprecated: { description: "Use `fly scale count` instead" },
          args: { name: "app", generators: flyAppsGenerator },
        },
        {
          name: "suspend",
          description: "Use `fly scale count` instead",
          hidden: true,
          deprecated: { description: "Use `fly scale count` instead" },
          args: { name: "app", generators: flyAppsGenerator },
        },
      ],
    },
    {
      name: "auth",
      description: "Manage authentication",
      subcommands: [
        { name: "docker", description: "Authenticate docker" },
        {
          name: "login",
          description: "Log in a user",
          options: [
            {
              name: "--code",
              description:
                "Finish a login that is waiting for approval, with the one-time code its approval page shows",
              args: { name: "code" },
            },
            {
              name: "--email",
              description: "Login email",
              args: { name: "email" },
            },
            {
              name: ["--interactive", "-i"],
              description: "Log in with an email and password interactively",
            },
            {
              name: "--otp",
              description: "One time password",
              args: { name: "otp" },
            },
            {
              name: "--password",
              description: "Login password",
              args: { name: "password" },
            },
          ],
        },
        {
          name: "logout",
          description: "Logs out the currently logged in user",
          options: [
            {
              name: "--force",
              description:
                "Remove the saved access token even if it could not be revoked",
            },
          ],
        },
        { name: "signup", description: "Create a new fly account" },
        {
          name: "token",
          description: "Show the current auth token in use by flyctl",
          hidden: true,
          options: [
            jsonOption,
            {
              name: ["--quiet", "-q"],
              description: "Suppress deprecation warning",
            },
          ],
        },
        {
          name: "whoami",
          description:
            "Displays the users email address/service identity currently",
          options: [jsonOption],
        },
      ],
    },
    {
      name: "certs",
      description: "Manage certificates",
      subcommands: [
        {
          name: ["add", "create"],
          description: "Add a certificate for an app",
          args: { name: "hostname" },
          options: [appOption, configOption, jsonOption],
        },
        {
          name: ["check", "show"],
          description: "Show certificate and DNS status",
          args: { name: "hostname" },
          options: [appOption, configOption, jsonOption],
        },
        {
          name: "import",
          description: "Import a custom certificate",
          args: { name: "hostname" },
          options: [
            appOption,
            configOption,
            {
              name: "--fullchain",
              description: "Path to certificate chain file (PEM format)",
              args: { name: "fullchain", template: "filepaths" },
            },
            jsonOption,
            {
              name: "--private-key",
              description: "Path to private key file (PEM format)",
              args: { name: "private-key", template: "filepaths" },
            },
          ],
        },
        {
          name: "list",
          description: "List certificates for an app",
          options: [appOption, configOption, jsonOption],
        },
        {
          name: ["remove", "delete"],
          description: "Removes a certificate from an app",
          args: { name: "hostname" },
          options: [
            {
              name: "--acme",
              description:
                "Stop ACME certificate issuance, keeping custom certificates",
            },
            appOption,
            configOption,
            {
              name: "--custom",
              description:
                "Remove only the custom certificate, keeping ACME certificates",
            },
            yesOption,
          ],
        },
        {
          name: "setup",
          description: "Shows certificate setup instructions",
          args: { name: "hostname" },
          options: [appOption, configOption, jsonOption],
        },
      ],
    },
    {
      name: "checks",
      description: "Manage health checks",
      subcommands: [
        {
          name: ["list", "ls"],
          description: "List health checks",
          options: [
            appOption,
            {
              name: "--check-name",
              description: "Filter checks by name",
              args: { name: "check-name" },
            },
            configOption,
            jsonOption,
          ],
        },
      ],
      options: [appOption, configOption],
    },
    {
      name: "completion",
      description: "Generate the autocompletion script for the specified shell",
      subcommands: [
        {
          name: "bash",
          description: "Generate the autocompletion script for bash",
          options: [noDescriptionsOption],
        },
        {
          name: "fish",
          description: "Generate the autocompletion script for fish",
          options: [noDescriptionsOption],
        },
        {
          name: "powershell",
          description: "Generate the autocompletion script for powershell",
          options: [noDescriptionsOption],
        },
        {
          name: "zsh",
          description: "Generate the autocompletion script for zsh",
          options: [noDescriptionsOption],
        },
      ],
    },
    {
      name: "config",
      description: "Manage an app's configuration",
      subcommands: [
        {
          name: "env",
          description: "Display an app's runtime environment variables",
          options: [appOption, configOption],
        },
        {
          name: "save",
          description: "Save an app's config file",
          options: [
            appOption,
            configOption,
            {
              name: "--json",
              description: "Output the configuration in JSON format",
            },
            {
              name: "--yaml",
              description: "Output the configuration in YAML format",
            },
            yesOption,
          ],
        },
        {
          name: ["show", "display"],
          description: "Show an app's configuration",
          options: [
            appOption,
            configOption,
            {
              name: "--local",
              description:
                "Parse and show local fly.toml file instead of fetching from the Fly service",
            },
            {
              name: "--toml",
              description: "Show configuration in TOML format",
            },
            {
              name: "--yaml",
              description: "Show configuration in YAML format",
            },
          ],
        },
        {
          name: "validate",
          description: "Validate an app's config file",
          options: [
            appOption,
            configOption,
            {
              name: ["--strict", "-s"],
              description:
                "Enable strict validation to check for unrecognized sections and keys",
            },
          ],
        },
      ],
    },
    {
      name: "console",
      description: "Run a console in a new or existing machine",
      options: [
        appOption,
        buildArgOption,
        buildContextWarnSizeOption,
        {
          name: "--build-depot",
          description: "Build your image with depot.dev",
          hidden: true,
        },
        buildLocalOnlyOption,
        {
          name: "--build-nixpacks",
          description: "Build your image with nixpacks",
          hidden: true,
        },
        buildOnlyOption,
        buildRemoteOnlyOption,
        buildTargetOption,
        commandOption,
        configOption,
        containerOption,
        dockerfileOption,
        {
          name: "--entrypoint",
          description: "ENTRYPOINT replacement",
          args: { name: "entrypoint" },
        },
        envOption,
        fileLiteralOption,
        fileLocalOption,
        fileSecretOption,
        hostDedicationIdOption,
        {
          name: ["--image", "-i"],
          description: "Image to use (default: current release)",
          args: { name: "image" },
        },
        imageLabelOption,
        machineOption,
        noBuildCacheOption,
        {
          name: ["--port", "-p"],
          description:
            "Publish ports, format: port[:machinePort][/protocol[:handler[:handler...]]])",
          isRepeatable: true,
          args: { name: "port" },
        },
        regionOption,
        {
          name: ["--select", "-s"],
          description:
            "Select the machine and container on which to execute the console from a list",
        },
        {
          name: "--skip-dns-registration",
          description:
            "Do not register the machine's 6PN IP with the internal DNS system",
          hidden: true,
        },
        userOption,
        vmCpuKindOption,
        vmCpusOption,
        vmGpuKindOption,
        vmGpusOption,
        vmMaxMemoryOption,
        vmMemoryOption,
        vmSizeOption,
        {
          name: "--volume",
          description:
            "Volume to mount, in the form of <volume_id_or_name>:/path/inside/machine[:<options>]",
          isRepeatable: true,
          args: { name: "volume" },
        },
        wgOption,
      ],
    },
    {
      name: "consul",
      description: "Enable and manage Consul clusters",
      subcommands: [
        {
          name: "attach",
          description: "Attach Consul cluster to an app",
          options: [
            appOption,
            configOption,
            {
              name: "--variable-name",
              description:
                "The environment variable name that will be added to the consuming app",
              args: { name: "variable-name", default: "FLY_CONSUL_URL" },
            },
          ],
        },
        {
          name: "detach",
          description: "Detach Consul cluster from an app",
          options: [
            appOption,
            configOption,
            {
              name: "--variable-name",
              description: "The secret name that will be removed from the app",
              args: { name: "variable-name", default: "FLY_CONSUL_URL" },
            },
          ],
        },
      ],
    },
    {
      name: "create",
      description: "Use `fly apps create` instead",
      hidden: true,
      deprecated: { description: "Use `fly apps create` instead" },
      options: [
        generateNameOption,
        { name: "--machines", description: "Use the machines platform" },
        {
          name: "--name",
          description: "The app name to use",
          args: { name: "name" },
        },
        {
          name: "--network",
          description:
            "Name of the custom private network to create the app on. A network that doesn't exist yet is created",
          args: { name: "network" },
        },
        orgOption,
      ],
    },
    {
      name: "curl",
      description: "Run a performance test against a URL",
      hidden: true,
      deprecated: {
        description: "`fly curl` will be removed in a future release",
      },
      args: { name: "url" },
      options: [jsonOption],
    },
    {
      name: ["dashboard", "dash"],
      description: "Open web browser on Fly Web UI for this app",
      subcommands: [
        {
          name: "metrics",
          description: "Open web browser on Fly Web UI for this app's metrics",
          options: [
            appOption,
            configOption,
            {
              name: ["--grafana", "-g"],
              description: "Open Grafana metrics dashboard directly",
            },
          ],
        },
      ],
      options: [appOption, configOption],
    },
    {
      name: "deploy",
      description: "Deploy Fly applications",
      args: {
        name: "working-directory",
        isOptional: true,
        template: "folders",
      },
      options: [
        appOption,
        {
          name: "--build-arg",
          description:
            "Set of build time variables in the form of NAME=VALUE pairs. Can be specified multiple times",
          isRepeatable: true,
          args: { name: "build-arg" },
        },
        buildContextWarnSizeOption,
        { name: "--build-only", description: "Build but do not deploy" },
        {
          name: "--build-secret",
          description:
            "Set of build secrets of NAME=VALUE pairs. Can be specified multiple times. See https://docs.docker.com/engine/reference/commandline/buildx_build/#secret",
          isRepeatable: true,
          args: { name: "build-secret" },
        },
        {
          name: "--build-target",
          description:
            "Set the target build stage to build if the Dockerfile has more than one stage",
          args: { name: "build-target" },
        },
        {
          name: "--builder-pool",
          description: "Experimental: Use pooled builder from Fly.io",
          hidden: true,
          requiresSeparator: true,
          args: { name: "builder-pool", isOptional: true, default: "auto" },
        },
        buildkitOption,
        buildkitAddrOption,
        buildkitImageOption,
        {
          name: "--buildpacks-docker-host",
          description:
            "Address to docker daemon that will be exposed to the build container",
          args: { name: "buildpacks-docker-host" },
        },
        {
          name: "--buildpacks-volume",
          description:
            "Mount host volume into the build container, in the form '<host path>:<target path>[:<options>]'",
          isRepeatable: true,
          args: { name: "buildpacks-volume" },
        },
        compressionOption,
        compressionLevelOption,
        configOption,
        {
          name: "--deploy-retries",
          description: "Number of times to retry a deployment if it fails",
          args: { name: "deploy-retries", default: "auto" },
        },
        {
          name: "--depot",
          description: "Deploy using depot to build the image",
          requiresSeparator: true,
          args: {
            name: "depot",
            isOptional: true,
            default: "auto",
            suggestions: ["auto", "true", "false"],
          },
        },
        {
          name: "--depot-scope",
          description:
            "The scope of the Depot builder's cache to use (org or app)",
          args: {
            name: "depot-scope",
            default: "org",
            suggestions: ["org", "app"],
          },
        },
        detachOption,
        dnsChecksOption,
        dockerfileOption,
        envOption,
        {
          name: "--exclude-machines",
          description:
            "Deploy to all machines except machines with these IDs. Multiple IDs can be specified with comma separated values or by providing the flag multiple times",
          isRepeatable: true,
          args: { name: "exclude-machines" },
        },
        {
          name: "--exclude-regions",
          description:
            "Deploy to all machines except machines in these regions. Multiple regions can be specified with comma separated values or by providing the flag multiple times",
          isRepeatable: true,
          args: { name: "exclude-regions" },
        },
        {
          name: "--export-manifest",
          description:
            "Specify a file to export the deployment configuration to a deploy manifest file, or '-' to print to stdout",
          hidden: true,
          args: { name: "export-manifest", template: "filepaths" },
        },
        fileLiteralOption2,
        fileLocalOption2,
        fileSecretOption2,
        { name: "--flycast", description: "Allocate a private IPv6 addresses" },
        {
          name: "--force-machines",
          description: "Use the Apps v2 platform built with Machines",
          hidden: true,
        },
        {
          name: "--from-manifest",
          description: "Path to a deploy manifest file to use for deployment",
          hidden: true,
          args: { name: "from-manifest", template: "filepaths" },
        },
        {
          name: "--ha",
          description: "Create spare machines that increases app availability",
        },
        hostDedicationIdOption,
        {
          name: ["--https-failover", "--http-failover"],
          description:
            "Determines whether to failover to plain internet(https) communication with remote builders if wireguard fails (also --http-failover)",
        },
        {
          name: "--ignorefile",
          description:
            "Path to a Docker ignore file. Defaults to the .dockerignore file in the working directory",
          args: { name: "ignorefile", template: "filepaths" },
        },
        imageOption,
        {
          name: "--image-label",
          description:
            'Image label to use when tagging and pushing to the fly registry. Defaults to "deployment-{timestamp}"',
          args: { name: "image-label" },
        },
        {
          name: "--immediate-max-concurrent",
          description:
            "Maximum number of machines to update concurrently when using the immediate deployment strategy",
          hidden: true,
          args: { name: "immediate-max-concurrent", default: "8" },
        },
        {
          name: "--label",
          description: "Add custom metadata to an image via docker labels",
          isRepeatable: true,
          args: { name: "label" },
        },
        {
          name: "--lease-timeout",
          description:
            "Time duration to lease individual machines while running deployment. All machines are leased at the beginning and released at the end.The lease is refreshed periodically for this same time, which is why it is short.flyctl releases leases in most cases",
          args: { name: "lease-timeout" },
        },
        {
          name: "--local-only",
          description:
            "Perform builds locally using the local docker daemon. The default is --remote-only",
        },
        {
          name: "--max-concurrent",
          description: "Maximum number of machines to operate on concurrently",
          args: { name: "max-concurrent", default: "8" },
        },
        {
          name: "--max-unavailable",
          description:
            "Max number of unavailable machines during rolling updates. A number between 0 and 1 means percent of total machines",
          args: { name: "max-unavailable", default: "0.33" },
        },
        {
          name: "--nixpacks",
          description: "Deploy using nixpacks to build the image",
        },
        {
          name: "--no-cache",
          description: "Do not use the build cache when building the image",
        },
        {
          name: "--no-public-ips",
          description: "Do not allocate any new public IP addresses",
        },
        { name: "--now", description: "Deploy now without confirmation" },
        {
          name: "--only-machines",
          description:
            "Deploy to machines only with these IDs. Multiple IDs can be specified with comma separated values or by providing the flag multiple times",
          isRepeatable: true,
          args: { name: "only-machines" },
        },
        {
          name: "--primary-region",
          description: "Override primary region in fly.toml configuration",
          args: { name: "primary-region" },
        },
        {
          name: "--process-groups",
          description: "Deploy to machines only in these process groups",
          isRepeatable: true,
          args: { name: "process-groups" },
        },
        {
          name: "--push",
          description: "Push image to registry after build is complete",
        },
        {
          name: "--recreate-builder",
          description: "Recreate the builder app, if it exists",
        },
        {
          name: ["--regions", "--only-regions"],
          description:
            "Deploy to machines only in these regions. Multiple regions can be specified with comma separated values or by providing the flag multiple times",
          isRepeatable: true,
          args: { name: "regions" },
        },
        {
          name: "--release-command-timeout",
          description:
            "Time duration to wait for a release command finish running, or 'none' to disable",
          args: { name: "release-command-timeout" },
        },
        {
          name: "--remote-only",
          description:
            "Perform builds on a remote builder instance instead of using the local docker daemon. This is the default. Use --local-only to build locally",
        },
        {
          name: "--rollback",
          description:
            "Record a redeploy of a previous release image as a rollback (requires --image)",
        },
        {
          name: ["--signal", "-s"],
          description:
            "Signal to stop the machine with for bluegreen strategy (default: SIGINT)",
          args: { name: "signal" },
        },
        {
          name: "--skip-release-command",
          description: "Do not run the release command during deployment",
        },
        {
          name: "--smoke-checks",
          description: "Perform smoke checks during deployment",
        },
        {
          name: "--strategy",
          description:
            "The strategy for replacing running instances. Options are canary, rolling, bluegreen, or immediate. The default strategy is rolling",
          args: {
            name: "strategy",
            suggestions: ["canary", "rolling", "bluegreen", "immediate"],
          },
        },
        {
          name: "--update-only",
          description: "Do not create Machines for new process groups",
        },
        vmCpuKindOption,
        vmCpusOption,
        vmGpuKindOption,
        vmGpusOption,
        vmMaxMemoryOption,
        vmMemoryOption,
        vmSizeOption,
        {
          name: "--volume-initial-size",
          description:
            "The initial size in GB for volumes created on first deploy",
          args: { name: "volume-initial-size" },
        },
        {
          name: "--wait-timeout",
          description:
            "Time duration to wait for individual machines to transition states and become healthy",
          args: { name: "wait-timeout" },
        },
        wgOption,
        yesOption,
      ],
    },
    {
      name: "destroy",
      description: "Permanently destroys an app",
      hidden: true,
      deprecated: { description: "Use `fly apps destroy` instead" },
      args: { name: "app", generators: flyAppsGenerator },
      options: [yesOption],
    },
    {
      name: "dig",
      description: "Make DNS requests against Fly.io's internal DNS server",
      args: [{ name: "type", isOptional: true }, { name: "name" }],
      options: [
        appOption,
        configOption,
        orgOption,
        {
          name: ["--short", "-s"],
          description: "Just print the answers, not DNS record details",
        },
      ],
    },
    { name: "docs", description: "View Fly documentation" },
    {
      name: "doctor",
      description:
        "The DOCTOR command allows you to debug your Fly environment",
      subcommands: [
        {
          name: "diag",
          description:
            "Send diagnostic information about your applications back to Fly.io",
          options: [
            appOption,
            configOption,
            {
              name: "--force",
              description:
                "Send diagnostics even if we can't find your local Fly.io app",
            },
          ],
        },
      ],
      options: [
        appOption,
        configOption,
        jsonOption,
        {
          name: ["--org", "-o"],
          description:
            "The name of the organization to use for WireGuard tests",
          args: {
            name: "org",
            default: "personal",
            generators: flyOrgsGenerator,
          },
        },
        {
          name: ["--verbose", "-v"],
          description: "Print extra diagnostic information",
        },
      ],
    },
    {
      name: ["extensions", "ext"],
      description:
        "Extensions are additional functionality that can be added to your Fly apps",
      subcommands: [
        {
          name: "arcjet",
          description: "Provision and manage Arcjet",
          subcommands: [
            {
              name: "create",
              description: "Create an Arcjet site",
              options: [
                appOption,
                configOption,
                {
                  name: ["--name", "-n"],
                  description: "The name of your application",
                  args: { name: "name" },
                },
                orgOption,
                regionOption,
                yesOption,
              ],
            },
            {
              name: "dashboard",
              description: "Visit the Arcjet dashboard",
              args: { name: "site-name", isOptional: true },
              options: [appOption, configOption, orgOption, yesOption],
            },
            {
              name: "destroy",
              description: "Permanently destroy an Arcjet site",
              args: { name: "name", isOptional: true },
              options: [appOption, configOption, yesOption],
            },
            {
              name: ["list", "ls"],
              description: "List your Arcjet sites",
              options: [orgOption, yesOption],
            },
            {
              name: "status",
              description: "Show details about an Arcjet site setup",
              args: { name: "name", isOptional: true },
              options: [appOption, configOption, yesOption],
            },
          ],
        },
        {
          name: ["kubernetes", "k8s"],
          description: "Provision and manage Kubernetes clusters",
          subcommands: [
            {
              name: "create",
              description: "Provision a Kubernetes cluster for an organization",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "The name of your cluster",
                  args: { name: "name" },
                },
                orgOption,
                {
                  name: "--output",
                  description: "The output path to save the kubeconfig file",
                  args: { name: "output", template: "filepaths" },
                },
                regionOption,
              ],
            },
            {
              name: ["destroy", "rm"],
              description: "Permanently destroy a Kubernetes cluster",
              args: { name: "name", isOptional: true },
              options: [yesOption],
            },
            {
              name: "kubectl-token",
              description:
                "Get an authentication token for your Kubernetes clusters",
              hidden: true,
            },
            {
              name: ["list", "ls"],
              description: "List your Kubernetes clusters",
            },
            {
              name: "save-kubeconfig",
              description: "Save the kubeconfig file of your cluster",
              args: { name: "cluster-name", isOptional: true },
              options: [
                {
                  name: "--output",
                  description: "The output path to save the kubeconfig file",
                  args: { name: "output", template: "filepaths" },
                },
              ],
            },
          ],
        },
        {
          name: "sentry",
          description: "Setup a Sentry project for this app",
          subcommands: [
            {
              name: "create",
              description: "Provision a Sentry project for a Fly.io app",
              options: [appOption, configOption, yesOption],
            },
            {
              name: ["dashboard", "errors"],
              description: "View application errors in the Sentry dashboard",
              options: [appOption, configOption, yesOption],
            },
            {
              name: "destroy",
              description: "Permanently destroy a Sentry project",
              args: { name: "project-name", isOptional: true },
              options: [appOption, configOption, yesOption],
            },
            {
              name: ["list", "ls"],
              description: "List your Sentry projects",
              options: [orgOption, yesOption],
            },
          ],
        },
        {
          name: ["storage", "tigris"],
          description: "Provision and manage Tigris object storage buckets",
          subcommands: [
            {
              name: "create",
              description: "Provision a Tigris object storage bucket",
              options: [
                accelerateOption,
                appOption,
                configOption,
                {
                  name: ["--name", "-n"],
                  description: "The name of your bucket",
                  args: { name: "name" },
                },
                orgOption,
                publicOption,
                shadowAccessKeyOption,
                shadowEndpointOption,
                shadowNameOption,
                shadowRegionOption,
                shadowSecretKeyOption,
                shadowWriteThroughOption,
                websiteDomainNameOption,
                yesOption,
              ],
            },
            {
              name: "dashboard",
              description: "Visit the Tigris dashboard",
              args: { name: "bucket-name", isOptional: true },
              options: [appOption, configOption, orgOption, yesOption],
            },
            {
              name: "destroy",
              description: "Permanently destroy a Tigris object storage bucket",
              args: { name: "storage-bucket-name", isOptional: true },
              options: [appOption, configOption, yesOption],
            },
            {
              name: ["list", "ls"],
              description: "List your Tigris object storage buckets",
              options: [orgOption, yesOption],
            },
            {
              name: "status",
              description: "Show details about a Tigris storage bucket",
              args: { name: "name", isOptional: true },
              options: [appOption, configOption, yesOption],
            },
            {
              name: "update",
              description: "Update an existing Tigris object storage bucket",
              args: { name: "bucket-name" },
              options: [
                accelerateOption,
                appOption,
                {
                  name: "--clear-custom-domain",
                  description: "Remove a custom domain from a bucket",
                },
                {
                  name: "--clear-shadow",
                  description: "Remove an existing shadow bucket",
                },
                configOption,
                {
                  name: "--custom-domain",
                  description: "A custom domain name pointing at your bucket",
                  args: { name: "custom-domain" },
                },
                orgOption,
                {
                  name: "--private",
                  description: "Set a public bucket to be private",
                },
                publicOption,
                shadowAccessKeyOption,
                shadowEndpointOption,
                shadowNameOption,
                shadowRegionOption,
                shadowSecretKeyOption,
                shadowWriteThroughOption,
                websiteDomainNameOption,
                yesOption,
              ],
            },
          ],
        },
        {
          name: "vector",
          description: "Provision and manage Upstash Vector index",
          subcommands: [
            {
              name: "create",
              description: "Provision a Upstash Vector index",
              options: [
                appOption,
                configOption,
                {
                  name: ["--name", "-n"],
                  description: "The name of your cluster",
                  args: { name: "name" },
                },
                orgOption,
                regionOption,
                yesOption,
              ],
            },
            {
              name: "dashboard",
              description:
                "Visit the Upstash Vector dashboard on the Upstash web console",
              options: [appOption, configOption, orgOption, yesOption],
            },
            {
              name: "destroy",
              description: "Permanently destroy an Upstash Vector index",
              args: { name: "name", isOptional: true },
              options: [appOption, configOption, yesOption],
            },
            {
              name: ["list", "ls"],
              description: "List your Upstash Vector index",
              options: [orgOption, yesOption],
            },
            {
              name: "status",
              description: "Show details about an Upstash Vector index",
              args: { name: "name", isOptional: true },
              options: [appOption, configOption, yesOption],
            },
          ],
        },
        {
          name: ["wafris", "waf"],
          description:
            "Provision and manage Wafris WAFs (Web Application Firewalls)",
          subcommands: [
            {
              name: "create",
              description: "Provision a Wafris WAF",
              options: [
                appOption,
                configOption,
                {
                  name: ["--name", "-n"],
                  description: "The name of your WAF",
                  args: { name: "name" },
                },
                orgOption,
                regionOption,
                yesOption,
              ],
            },
            {
              name: "dashboard",
              description: "Visit the Wafris dashboard",
              args: { name: "firewall-name", isOptional: true },
              options: [appOption, configOption, orgOption, yesOption],
            },
            {
              name: "destroy",
              description: "Permanently destroy a Wafris WAF",
              args: { name: "name", isOptional: true },
              options: [appOption, configOption, yesOption],
            },
          ],
        },
      ],
    },
    {
      name: "feedback",
      description: "Send feedback to Fly.io",
      args: { name: "note", isOptional: true },
      options: [
        {
          name: "--category",
          description:
            "Type of feedback. One of: bug, documentation, feature_request, other",
          args: {
            name: "category",
            suggestions: ["bug", "documentation", "feature_request", "other"],
          },
        },
        jsonOption,
        {
          name: "--request-id",
          description:
            "The fly-request-id of the request you are reporting (up to 255 characters)",
          args: { name: "request-id" },
        },
        {
          name: "--url",
          description:
            "The page or endpoint you are reporting (up to 2048 characters)",
          args: { name: "url" },
        },
      ],
    },
    {
      name: "help",
      description: "Help about any command",
      args: { name: "command", isOptional: true, isVariadic: true },
    },
    {
      name: "history",
      description: "List an app's change history",
      hidden: true,
      deprecated: { description: "Use `flyctl apps releases` instead" },
      options: [appOption, configOption, jsonOption],
    },
    {
      name: ["image", "img"],
      description: "Manage app image",
      subcommands: [
        {
          name: "show",
          description: "Show image details",
          options: [appOption, configOption, jsonOption],
        },
        {
          name: "update",
          description:
            "Updates the app's image to the latest available version",
          options: [
            appOption,
            configOption,
            {
              name: "--image",
              description: "Target a specific image",
              args: { name: "image" },
            },
            {
              name: "--skip-health-checks",
              description: "Skip waiting for health checks between VM updates",
            },
            yesOption,
          ],
        },
      ],
    },
    {
      name: "incidents",
      description: "Show incidents",
      subcommands: [
        {
          name: "hosts",
          description: "Show hosts' incidents",
          subcommands: [
            {
              name: ["list", "ls"],
              description: "List hosts' issues affecting the application",
              options: [appOption, configOption, jsonOption],
            },
          ],
        },
        {
          name: "list",
          description: "List active incidents",
          options: [appOption, configOption, jsonOption, orgOption],
        },
      ],
    },
    {
      name: "info",
      description: "Shows information about the application",
      hidden: true,
      deprecated: {
        description: "Replaced by 'status', 'ips list', and 'services list'",
      },
      options: [appOption, configOption],
    },
    {
      name: ["ips", "ip"],
      description: "Manage IP addresses for apps",
      subcommands: [
        {
          name: "allocate",
          description: "Allocate recommended IP addresses",
          options: [appOption, configOption, regionOption],
        },
        {
          name: "allocate-egress",
          description: "Allocate app-scoped egress IPs",
          options: [appOption, configOption, regionOption, yesOption],
        },
        {
          name: "allocate-v4",
          description: "Allocate an IPv4 address",
          options: [
            appOption,
            configOption,
            regionOption,
            { name: "--shared", description: "Allocates a shared IPv4" },
            yesOption,
          ],
        },
        {
          name: "allocate-v6",
          description: "Allocate an IPv6 address",
          options: [
            appOption,
            configOption,
            {
              name: "--network",
              description:
                "Target network name for a Flycast private IPv6 address",
              args: { name: "network" },
            },
            orgOption,
            {
              name: "--private",
              description: "Allocate a private IPv6 address",
            },
            regionOption,
          ],
        },
        {
          name: ["list", "ls"],
          description: "List allocated IP addresses",
          options: [appOption, configOption, jsonOption],
        },
        {
          name: "private",
          description: "List instances private IP addresses",
          options: [appOption, configOption, jsonOption],
        },
        {
          name: "release",
          description: "Release ingress IP addresses",
          args: { name: "address", isVariadic: true },
          options: [appOption, configOption],
        },
        {
          name: "release-egress",
          description: "Release egress IP addresses",
          args: { name: "address", isVariadic: true },
          options: [appOption, configOption],
        },
      ],
    },
    {
      name: "jobs",
      description: "Show jobs at Fly.io",
      subcommands: [{ name: "open", description: "Open fly.io/jobs" }],
    },
    {
      name: "launch",
      description:
        "Create and configure a new app from source code or a Docker image",
      subcommands: [
        {
          name: "plan",
          description:
            "[experimental] Granular subcommands for creating and configuring apps",
          hidden: true,
          subcommands: [
            {
              name: "create",
              description: "[experimental] create application",
              options: [
                compressionOption,
                compressionLevelOption,
                fromManifestOption,
                internalPortOption,
              ],
            },
            {
              name: "generate",
              description:
                "[experimental] generate Dockerfile and other configuration files based on the plan",
              options: [
                appOption,
                compressionOption,
                compressionLevelOption,
                configOption,
                copyConfigOption,
                fromManifestOption,
                internalPortOption,
                {
                  name: "--no-deploy",
                  description: "Don't deploy the app",
                  hidden: true,
                },
                orgOption,
                regionOption,
                yesOption,
              ],
            },
            {
              name: "postgres",
              description: "[experimental] create postgres database",
              options: [fromManifestOption],
            },
            {
              name: "propose",
              description:
                "[experimental] propose a plan based on scanning the source code or Dockerfile",
              options: [
                compressionOption,
                compressionLevelOption,
                configOption,
                copyConfigOption,
                {
                  name: "--force-name",
                  description: "Force app name supplied by --name",
                  hidden: true,
                },
                {
                  name: "--from",
                  description:
                    "A github repo URL to use as a template for the new app",
                  args: { name: "from" },
                },
                internalPortOption,
                {
                  name: "--manifest",
                  description: "Output the proposed manifest",
                  hidden: true,
                },
                {
                  name: "--manifest-path",
                  description: "Path to write the manifest to",
                  hidden: true,
                  args: { name: "manifest-path", template: "filepaths" },
                },
                {
                  name: "--name",
                  description: "Name of the new app",
                  args: { name: "name" },
                },
                {
                  name: "--no-blank",
                  description:
                    'Don\'t allow a "blank" app (nothing could be detected)',
                },
                {
                  name: "--no-create",
                  description: "Don't create an app",
                  hidden: true,
                },
                orgOption,
                regionOption,
              ],
            },
            {
              name: "redis",
              description: "[experimental] create redis database",
              options: [fromManifestOption],
            },
            {
              name: "tigris",
              description: "[experimental] create tigris database",
              options: [fromManifestOption],
            },
          ],
        },
      ],
      options: [
        {
          name: "--attach",
          description: "Attach this new application to the current application",
        },
        {
          name: "--auto-stop",
          description:
            "Automatically suspend the app after a period of inactivity. Valid values are 'off', 'stop', and 'suspend'",
          args: {
            name: "auto-stop",
            default: "stop",
            suggestions: ["off", "stop", "suspend"],
          },
        },
        {
          name: "--build-arg",
          description:
            "Set of build time variables in the form of NAME=VALUE pairs. Can be specified multiple times",
          isRepeatable: true,
          args: { name: "build-arg" },
        },
        buildContextWarnSizeOption,
        { name: "--build-only", description: "Build but do not deploy" },
        {
          name: "--build-secret",
          description:
            "Set of build secrets of NAME=VALUE pairs. Can be specified multiple times. See https://docs.docker.com/engine/reference/commandline/buildx_build/#secret",
          isRepeatable: true,
          args: { name: "build-secret" },
        },
        {
          name: "--build-target",
          description:
            "Set the target build stage to build if the Dockerfile has more than one stage",
          args: { name: "build-target" },
        },
        {
          name: "--builder-pool",
          description: "Experimental: Use pooled builder from Fly.io",
          hidden: true,
          requiresSeparator: true,
          args: { name: "builder-pool", isOptional: true, default: "auto" },
        },
        buildkitOption,
        buildkitAddrOption,
        buildkitImageOption,
        {
          name: "--buildpacks-docker-host",
          description:
            "Address to docker daemon that will be exposed to the build container",
          args: { name: "buildpacks-docker-host" },
        },
        {
          name: "--buildpacks-volume",
          description:
            "Mount host volume into the build container, in the form '<host path>:<target path>[:<options>]'",
          isRepeatable: true,
          args: { name: "buildpacks-volume" },
        },
        {
          name: "--command",
          description: "The command to override the Docker CMD",
          args: { name: "command" },
        },
        compressionOption,
        compressionLevelOption,
        configOption,
        copyConfigOption,
        {
          name: "--db",
          description:
            "Provision a Postgres database. Options: mpg (managed postgres), upg/legacy (unmanaged postgres), or true (default type)",
          requiresSeparator: true,
          args: {
            name: "db",
            isOptional: true,
            suggestions: ["mpg", "upg", "legacy", "true"],
          },
        },
        {
          name: "--deploy-retries",
          description: "Number of times to retry a deployment if it fails",
          args: { name: "deploy-retries", default: "auto" },
        },
        {
          name: "--depot",
          description: "Deploy using depot to build the image",
          requiresSeparator: true,
          args: {
            name: "depot",
            isOptional: true,
            default: "auto",
            suggestions: ["auto", "true", "false"],
          },
        },
        {
          name: "--depot-scope",
          description:
            "The scope of the Depot builder's cache to use (org or app)",
          args: {
            name: "depot-scope",
            default: "org",
            suggestions: ["org", "app"],
          },
        },
        detachOption,
        dnsChecksOption,
        dockerfileOption,
        {
          name: "--dockerignore-from-gitignore",
          description:
            "If a .dockerignore does not exist, create one from .gitignore files",
        },
        envOption,
        {
          name: "--exclude-machines",
          description:
            "Deploy to all machines except machines with these IDs. Multiple IDs can be specified with comma separated values or by providing the flag multiple times",
          isRepeatable: true,
          args: { name: "exclude-machines" },
        },
        {
          name: "--exclude-regions",
          description:
            "Deploy to all machines except machines in these regions. Multiple regions can be specified with comma separated values or by providing the flag multiple times",
          isRepeatable: true,
          args: { name: "exclude-regions" },
        },
        fileLiteralOption2,
        fileLocalOption2,
        fileSecretOption2,
        { name: "--flycast", description: "Allocate a private IPv6 addresses" },
        {
          name: "--force-machines",
          description: "Use the Apps v2 platform built with Machines",
          hidden: true,
        },
        {
          name: "--force-name",
          description: "Force app name supplied by --name",
          hidden: true,
        },
        {
          name: "--from",
          description: "A github repo URL to use as a template for the new app",
          args: { name: "from" },
        },
        {
          name: "--from-manifest",
          description:
            "Path to a manifest file for Launch ('-' reads from stdin)",
          hidden: true,
          args: { name: "from-manifest", template: "filepaths" },
        },
        {
          name: "--generate-name",
          description: "Always generate a name for the app, without prompting",
        },
        {
          name: "--ha",
          description: "Create spare machines that increases app availability",
        },
        hostDedicationIdOption,
        {
          name: ["--https-failover", "--http-failover"],
          description:
            "Determines whether to failover to plain internet(https) communication with remote builders if wireguard fails (also --http-failover)",
        },
        {
          name: "--ignorefile",
          description:
            "Path to a Docker ignore file. Defaults to the .dockerignore file in the working directory",
          args: { name: "ignorefile", template: "filepaths" },
        },
        imageOption,
        {
          name: "--image-label",
          description:
            'Image label to use when tagging and pushing to the fly registry. Defaults to "deployment-{timestamp}"',
          args: { name: "image-label" },
        },
        {
          name: "--immediate-max-concurrent",
          description:
            "Maximum number of machines to update concurrently when using the immediate deployment strategy",
          hidden: true,
          args: { name: "immediate-max-concurrent", default: "8" },
        },
        internalPortOption,
        {
          name: "--into",
          description:
            "Destination directory for github repo specified with --from",
          args: { name: "into", template: "folders" },
        },
        {
          name: "--json",
          description: "Generate configuration in JSON format",
        },
        {
          name: "--label",
          description: "Add custom metadata to an image via docker labels",
          isRepeatable: true,
          args: { name: "label" },
        },
        {
          name: "--lease-timeout",
          description:
            "Time duration to lease individual machines while running deployment. All machines are leased at the beginning and released at the end.The lease is refreshed periodically for this same time, which is why it is short.flyctl releases leases in most cases",
          args: { name: "lease-timeout" },
        },
        {
          name: "--legacy",
          description: "Use the legacy CLI interface (deprecated)",
          hidden: true,
        },
        {
          name: "--local-only",
          description:
            "Perform builds locally using the local docker daemon. The default is --remote-only",
        },
        {
          name: "--manifest",
          description: "Output the generated manifest to stdout",
          hidden: true,
        },
        {
          name: "--max-concurrent",
          description: "Maximum number of machines to operate on concurrently",
          args: { name: "max-concurrent", default: "8" },
        },
        {
          name: "--max-unavailable",
          description:
            "Max number of unavailable machines during rolling updates. A number between 0 and 1 means percent of total machines",
          args: { name: "max-unavailable", default: "0.33" },
        },
        {
          name: "--name",
          description: "Name of the new app",
          args: { name: "name" },
        },
        {
          name: "--nixpacks",
          description: "Deploy using nixpacks to build the image",
        },
        {
          name: "--no-cache",
          description: "Do not use the build cache when building the image",
        },
        {
          name: ["--no-create-app", "--no-create"],
          description: "Do not create an app",
          hidden: true,
        },
        {
          name: "--no-db",
          description: "Skip automatically provisioning a database",
        },
        {
          name: "--no-deploy",
          description:
            "Do not immediately deploy the new app after fly launch creates and configures it",
        },
        {
          name: "--no-github-workflow",
          description:
            "Skip automatically provisioning a GitHub fly deploy workflow",
        },
        {
          name: "--no-object-storage",
          description:
            "Skip automatically provisioning an object storage bucket",
        },
        {
          name: "--no-public-ips",
          description: "Do not allocate any new public IP addresses",
        },
        {
          name: "--no-redis",
          description: "Skip automatically provisioning a Redis instance",
        },
        { name: "--now", description: "Deploy now without confirmation" },
        {
          name: "--only-machines",
          description:
            "Deploy to machines only with these IDs. Multiple IDs can be specified with comma separated values or by providing the flag multiple times",
          isRepeatable: true,
          args: { name: "only-machines" },
        },
        orgOption,
        {
          name: "--path",
          description:
            "Path to the app source root, where fly.toml file will be saved",
          args: { name: "path", default: ".", template: "folders" },
        },
        {
          name: "--primary-region",
          description: "Override primary region in fly.toml configuration",
          args: { name: "primary-region" },
        },
        {
          name: "--process-groups",
          description: "Deploy to machines only in these process groups",
          isRepeatable: true,
          args: { name: "process-groups" },
        },
        {
          name: "--push",
          description: "Push image to registry after build is complete",
        },
        {
          name: "--recreate-builder",
          description: "Recreate the builder app, if it exists",
        },
        regionOption,
        {
          name: ["--regions", "--only-regions"],
          description:
            "Deploy to machines only in these regions. Multiple regions can be specified with comma separated values or by providing the flag multiple times",
          isRepeatable: true,
          args: { name: "regions" },
        },
        {
          name: "--release-command-timeout",
          description:
            "Time duration to wait for a release command finish running, or 'none' to disable",
          args: { name: "release-command-timeout" },
        },
        {
          name: "--remote-only",
          description:
            "Perform builds on a remote builder instance instead of using the local docker daemon. This is the default. Use --local-only to build locally",
        },
        {
          name: "--reuse-app",
          description: "Continue even if app name clashes with an existent app",
          hidden: true,
        },
        {
          name: "--secret",
          description:
            "Set of secrets in the form of NAME=VALUE pairs. Can be specified multiple times",
          isRepeatable: true,
          args: { name: "secret" },
        },
        {
          name: ["--signal", "-s"],
          description:
            "Signal to stop the machine with for bluegreen strategy (default: SIGINT)",
          args: { name: "signal" },
        },
        {
          name: "--smoke-checks",
          description: "Perform smoke checks during deployment",
        },
        {
          name: "--strategy",
          description:
            "The strategy for replacing running instances. Options are canary, rolling, bluegreen, or immediate. The default strategy is rolling",
          args: {
            name: "strategy",
            suggestions: ["canary", "rolling", "bluegreen", "immediate"],
          },
        },
        vmCpuKindOption,
        vmCpusOption,
        vmGpuKindOption,
        vmGpusOption,
        vmMaxMemoryOption,
        vmMemoryOption,
        vmSizeOption,
        {
          name: ["--volume", "-v"],
          description:
            "Volume to mount, in the form of <volume_name>:/path/inside/machine[:<options>]",
          isRepeatable: true,
          args: { name: "volume" },
        },
        {
          name: "--volume-initial-size",
          description:
            "The initial size in GB for volumes created on first deploy",
          args: { name: "volume-initial-size" },
        },
        {
          name: "--wait-timeout",
          description:
            "Time duration to wait for individual machines to transition states and become healthy",
          args: { name: "wait-timeout" },
        },
        wgOption,
        {
          name: "--yaml",
          description: "Generate configuration in YAML format",
        },
        yesOption,
      ],
    },
    {
      name: "logs",
      description: "View app logs",
      options: [
        appOption,
        configOption,
        jsonOption,
        {
          name: ["--machine", "-m", "--instance", "-i"],
          description: "Filter by machine ID",
          args: { name: "machine" },
        },
        {
          name: ["--no-tail", "-n"],
          description: "Do not continually stream logs",
        },
        regionOption,
        {
          name: ["--select", "-s"],
          description: "Select a machine from a list",
        },
      ],
    },
    {
      name: ["machine", "machines", "m"],
      description: "Manage Fly Machines",
      subcommands: [
        {
          name: "api-proxy",
          description:
            "Establish a proxy to the Machine API through a Wireguard tunnel for local connections",
          options: [orgOption, quietOption],
        },
        {
          name: "clone",
          description: "Clone a Fly Machine",
          args: { name: "machine-id", isOptional: true },
          options: [
            appOption,
            {
              name: "--attach-volume",
              description:
                "Existing volume to attach to the new Machine in the form of <volume_id>[:/path/inside/machine]",
              args: { name: "attach-volume" },
            },
            {
              name: "--clear-auto-destroy",
              description: "Disable auto destroy setting on the new Machine",
            },
            {
              name: "--clear-cmd",
              description:
                "Set empty CMD on the new Machine so it uses default CMD for the image",
            },
            configOption,
            detachOption,
            {
              name: "--from-snapshot",
              description:
                "Clone attached volumes and restore from snapshot, use 'last' for most recent snapshot. The default is an empty volume",
              args: { name: "from-snapshot" },
            },
            hostDedicationIdOption,
            {
              name: "--name",
              description: "Optional name for the new Machine",
              args: { name: "name" },
            },
            {
              name: "--override-cmd",
              description: "Set CMD on the new Machine to this value",
              args: { name: "override-cmd" },
            },
            regionOption,
            selectOption,
            {
              name: "--standby-for",
              description:
                "Comma separated list of Machine IDs to watch for. You can use '--standby-for=source' to create a standby for the cloned Machine",
              isRepeatable: true,
              args: { name: "standby-for" },
            },
            vmCpuKindOption,
            vmCpusOption,
            vmGpuKindOption,
            vmGpusOption,
            vmMaxMemoryOption,
            vmMemoryOption,
            vmSizeOption,
            {
              name: "--volume-requires-unique-zone",
              description:
                "Require volume to be placed in separate hardware zone from existing volumes. Default true",
            },
          ],
        },
        {
          name: "cordon",
          description: "Deactivate all services on a machine",
          args: { name: "id", isOptional: true, isVariadic: true },
          options: [appOption, configOption, selectOption],
        },
        {
          name: "create",
          description: "Create, but don't start, a machine",
          args: [{ name: "image" }, { name: "command", isOptional: true }],
          options: [
            appOption,
            autostartOption,
            autostopOption,
            buildArgOption,
            buildContextWarnSizeOption,
            buildDepotOption,
            buildLocalOnlyOption,
            buildNixpacksOption,
            buildOnlyOption,
            buildRemoteOnlyOption,
            buildTargetOption,
            cacheDiskPathOption,
            cacheDiskSizeOption,
            configOption,
            detachOption,
            dockerfileOption2,
            entrypointOption,
            envOption,
            fileLiteralOption,
            fileLocalOption,
            fileSecretOption,
            hostDedicationIdOption,
            {
              name: "--id",
              description: "Machine ID, if previously known",
              args: { name: "id" },
            },
            imageLabelOption,
            kernelArgOption,
            machineConfigOption,
            metadataOption,
            {
              name: ["--name", "-n"],
              description: "Machine name. Will be generated if omitted",
              args: { name: "name" },
            },
            noBuildCacheOption,
            orgOption2,
            portOption,
            regionOption,
            restartOption,
            {
              name: "--rm",
              description:
                "Automatically remove the Machine when it exits. Sets the restart-policy to 'never' if not otherwise specified",
            },
            rootfsPersistOption,
            rootfsSizeOption,
            scheduleOption,
            skipDnsRegistrationOption,
            standbyForOption,
            swapSizeOption,
            {
              name: "--use-zstd",
              description: "Enable zstd compression for the image",
            },
            vmCpuKindOption,
            vmCpusOption,
            vmGpuKindOption,
            vmGpusOption,
            vmMaxMemoryOption,
            vmMemoryOption,
            vmSizeOption,
            {
              name: ["--volume", "-v"],
              description:
                "Volume to mount, in the form of <volume_id_or_name>:/path/inside/machine[:<options>]",
              isRepeatable: true,
              args: { name: "volume" },
            },
          ],
        },
        {
          name: ["destroy", "remove", "rm"],
          description: "Destroy Fly machines",
          args: { name: "id", isVariadic: true },
          options: [
            appOption,
            configOption,
            {
              name: ["--force", "-f"],
              description: "Force kill machine regardless of current state",
            },
            {
              name: ["--image", "-i"],
              description: "Remove all machines with the specified image hash",
              args: { name: "image" },
            },
            selectOption,
          ],
        },
        {
          name: "egress-ip",
          description: "Manage static egress IPs",
          hidden: true,
          deprecated: {
            description:
              "Consider using app-scoped egress IPs (fly ip allocate-egress) instead",
          },
          subcommands: [
            {
              name: "allocate",
              description: "Allocate static egress IPs",
              hidden: true,
              args: { name: "machine-id" },
              options: [appOption, configOption, yesOption],
            },
            {
              name: "list",
              description: "List all allocated static egress IPs",
              options: [appOption, configOption],
            },
            {
              name: "promote",
              description: "Promote machine egress IPs to app-scoped",
              args: { name: "machine-id" },
              options: [appOption, configOption, yesOption],
            },
            {
              name: "release",
              description: "Release an egress IP address",
              args: { name: "machine-id" },
              options: [appOption, configOption, yesOption],
            },
          ],
        },
        {
          name: "exec",
          description: "Execute a command on a machine",
          args: [{ name: "machine-id", isOptional: true }, { name: "command" }],
          options: [
            appOption,
            configOption,
            {
              name: "--container",
              description: "Container to run the command in",
              args: { name: "container" },
            },
            jsonOption,
            {
              name: "--no-container",
              description:
                "Run the command on the machine itself rather than in one of its containers",
            },
            selectOption,
            {
              name: "--timeout",
              description: "Timeout in seconds",
              args: { name: "timeout" },
            },
          ],
        },
        {
          name: "kill",
          description: "Kill (SIGKILL) a Fly machine",
          args: { name: "id", isOptional: true },
          options: [appOption, configOption, selectOption],
        },
        {
          name: ["leases", "lease"],
          description: "Manage machine leases",
          subcommands: [
            {
              name: "clear",
              description: "Clear machine leases",
              args: { name: "machine-id", isOptional: true },
              options: [appOption, configOption, selectOption],
            },
            {
              name: "view",
              description: "View machine leases",
              args: { name: "machine-id", isOptional: true },
              options: [appOption, configOption, jsonOption, selectOption],
            },
          ],
        },
        {
          name: ["list", "ls"],
          description: "List Fly machines",
          options: [
            appOption,
            configOption,
            jsonOption,
            { name: ["--quiet", "-q"], description: "Only list machine ids" },
          ],
        },
        {
          name: "place",
          description: "Simulate Machine placements",
          options: [
            configOption,
            {
              name: "--count",
              description: "Number of machines to place",
              args: { name: "count" },
            },
            hostDedicationIdOption,
            jsonOption,
            orgOption,
            {
              name: "--region",
              description: "Comma-delimited list of regions to place machines",
              args: { name: "region" },
            },
            vmCpuKindOption,
            vmCpusOption,
            vmGpuKindOption,
            vmGpusOption,
            vmMaxMemoryOption,
            vmMemoryOption,
            vmSizeOption,
            {
              name: "--volume-name",
              description: "Name of the volume to place machines",
              args: { name: "volume-name" },
            },
            {
              name: "--volume-size",
              description: "Size of the desired volume to place machines",
              args: { name: "volume-size" },
            },
            {
              name: "--weights",
              description:
                "Comma-delimited list of key=value weights to adjust placement preferences. e.g., 'region=5,spread=10'",
              isRepeatable: true,
              args: { name: "weights" },
            },
          ],
        },
        {
          name: "restart",
          description: "Restart one or more Fly machines",
          args: { name: "id", isOptional: true, isVariadic: true },
          options: [
            appOption,
            configOption,
            { name: "--force", description: "Force stop the machine(s)" },
            selectOption,
            {
              name: ["--signal", "-s"],
              description: "Signal to stop the machine with (default: SIGINT)",
              args: { name: "signal" },
            },
            {
              name: "--skip-health-checks",
              description: "Restarts app without waiting for health checks",
            },
            {
              name: "--time",
              description: "Seconds to wait before killing the machine",
              args: { name: "time" },
            },
          ],
        },
        {
          name: "run",
          description: "Run a machine",
          args: [{ name: "image" }, { name: "command", isOptional: true }],
          options: [
            appOption,
            autostartOption,
            autostopOption,
            buildArgOption,
            buildContextWarnSizeOption,
            buildDepotOption,
            buildLocalOnlyOption,
            buildNixpacksOption,
            buildOnlyOption,
            buildRemoteOnlyOption,
            buildTargetOption,
            cacheDiskPathOption,
            cacheDiskSizeOption,
            {
              name: "--command",
              description:
                "Used with --shell. The command to run, if we're shelling into the Machine now (in case you don't have bash)",
              args: { name: "command", default: "/bin/bash" },
            },
            configOption,
            {
              name: "--container",
              description:
                'Container to update with the new image, files, etc; defaults to "app" or the first container in the config',
              args: { name: "container" },
            },
            detachOption,
            dockerfileOption2,
            entrypointOption,
            envOption,
            fileLiteralOption,
            fileLocalOption,
            fileSecretOption,
            hostDedicationIdOption,
            {
              name: "--id",
              description: "Machine ID, if previously known",
              args: { name: "id" },
            },
            imageLabelOption,
            kernelArgOption,
            machineConfigOption,
            metadataOption,
            {
              name: ["--name", "-n"],
              description: "Machine name. Will be generated if omitted",
              args: { name: "name" },
            },
            noBuildCacheOption,
            orgOption2,
            portOption,
            regionOption,
            restartOption,
            {
              name: "--rm",
              description:
                "Automatically remove the Machine when it exits. Sets the restart-policy to 'never' if not otherwise specified",
            },
            rootfsPersistOption,
            rootfsSizeOption,
            scheduleOption,
            {
              name: "--shell",
              description:
                "Open a shell on the Machine once created (implies --it --rm). If no app is specified, an app for interactive shells is created or reused. The Machine is destroyed when the shell exits; the app is retained for future shells. See also --command and --user",
            },
            skipDnsRegistrationOption,
            standbyForOption,
            swapSizeOption,
            {
              name: "--use-zstd",
              description: "Enable zstd compression for the image",
            },
            {
              name: "--user",
              description:
                "Used with --shell. The username, if we're shelling into the Machine now",
              args: { name: "user", default: "root" },
            },
            vmCpuKindOption,
            vmCpusOption,
            vmGpuKindOption,
            vmGpusOption,
            vmMaxMemoryOption,
            vmMemoryOption,
            vmSizeOption,
            {
              name: ["--volume", "-v"],
              description:
                "Volume to mount, in the form of <volume_id_or_name>:/path/inside/machine[:<options>]",
              isRepeatable: true,
              args: { name: "volume" },
            },
            wgOption,
          ],
        },
        {
          name: "start",
          description: "Start one or more Fly machines",
          args: { name: "id", isOptional: true, isVariadic: true },
          options: [
            appOption,
            configOption,
            selectOption,
            {
              name: "--wait",
              description:
                "Wait for the Machines to start and pass configured health checks",
            },
          ],
        },
        {
          name: "status",
          description: "Show current status of a running machine",
          args: { name: "id", isOptional: true },
          options: [
            appOption,
            configOption,
            {
              name: ["--display-config", "-d"],
              description: "Display the machine config as JSON",
            },
            selectOption,
          ],
        },
        {
          name: "stop",
          description: "Stop one or more Fly machines",
          args: { name: "id", isOptional: true, isVariadic: true },
          options: [
            appOption,
            configOption,
            selectOption,
            {
              name: ["--signal", "-s"],
              description: "Signal to stop the machine with (default: SIGINT)",
              args: { name: "signal" },
            },
            {
              name: "--timeout",
              description:
                "Seconds to wait before sending SIGKILL to the machine",
              args: { name: "timeout" },
            },
            {
              name: ["--wait-timeout", "-w"],
              description:
                "Time duration to wait for individual machines to transition states and become stopped",
              args: { name: "wait-timeout" },
            },
          ],
        },
        {
          name: "suspend",
          description: "Suspend one or more Fly machines",
          args: { name: "id", isOptional: true, isVariadic: true },
          options: [
            appOption,
            configOption,
            selectOption,
            {
              name: ["--wait-timeout", "-w"],
              description:
                "Duration to wait for individual Machines to be suspended",
              args: { name: "wait-timeout" },
            },
          ],
        },
        {
          name: "uncordon",
          description: "Reactivate all services on a machine",
          args: { name: "id", isOptional: true, isVariadic: true },
          options: [appOption, configOption, selectOption],
        },
        {
          name: "update",
          description: "Update a machine",
          args: { name: "machine-id", isOptional: true },
          options: [
            appOption,
            autostartOption,
            autostopOption,
            buildArgOption,
            buildContextWarnSizeOption,
            buildDepotOption,
            buildLocalOnlyOption,
            buildNixpacksOption,
            buildOnlyOption,
            buildRemoteOnlyOption,
            buildTargetOption,
            buildkitOption,
            buildkitAddrOption,
            buildkitImageOption,
            cacheDiskPathOption,
            cacheDiskSizeOption,
            {
              name: ["--command", "-C"],
              description: "Command to run",
              args: { name: "command" },
            },
            configOption,
            {
              name: "--container",
              description:
                'Container to update with the new image, files, etc; defaults to "app" or the first container in the config',
              args: { name: "container" },
            },
            detachOption,
            dockerfileOption2,
            entrypointOption,
            envOption,
            fileLiteralOption,
            fileLocalOption,
            fileSecretOption,
            hostDedicationIdOption,
            imageOption,
            imageLabelOption,
            kernelArgOption,
            machineConfigOption,
            metadataOption,
            {
              name: "--mount-point",
              description: "New volume mount point",
              args: { name: "mount-point" },
            },
            noBuildCacheOption,
            portOption,
            restartOption,
            rootfsPersistOption,
            rootfsSizeOption,
            scheduleOption,
            selectOption,
            skipDnsRegistrationOption,
            {
              name: "--skip-health-checks",
              description: "Updates machine without waiting for health checks",
            },
            {
              name: "--skip-start",
              description: "Updates machine without starting it",
            },
            standbyForOption,
            swapSizeOption,
            vmCpuKindOption,
            vmCpusOption,
            vmGpuKindOption,
            vmGpusOption,
            vmMaxMemoryOption,
            vmMemoryOption,
            vmSizeOption,
            {
              name: "--wait-timeout",
              description:
                "Seconds to wait for individual machines to transition states and become healthy. (default 300)",
              args: { name: "wait-timeout", default: "300" },
            },
            yesOption,
          ],
        },
        {
          name: "wait",
          description: "Wait for a machine to reach a state",
          args: { name: "id", isOptional: true },
          options: [
            appOption,
            configOption,
            selectOption,
            {
              name: "--state",
              description: "Machine state to wait for",
              args: { name: "state", default: "settled" },
            },
            {
              name: ["--wait-timeout", "-w"],
              description:
                "Time duration to wait for the machine to reach the requested state",
              args: { name: "wait-timeout" },
            },
          ],
        },
      ],
    },
    {
      name: "mcp",
      description: "Flyctl Model Context Protocol",
      subcommands: [
        {
          name: "add",
          description:
            "[experimental] Add MCP proxy client to a MCP client configuration",
          options: [
            appOption,
            {
              name: "--bearer-token",
              description: "Use bearer token for authentication",
            },
            claudeOption,
            configOption2,
            cursorOption,
            {
              name: "--flycast",
              description: "Use wireguard and flycast for access",
            },
            {
              name: "--name",
              description:
                "Name to use for the MCP server in the MCP client configuration",
              hidden: true,
              args: { name: "name" },
            },
            neovimOption,
            {
              name: "--password",
              description: "Password to authenticate with",
              args: { name: "password" },
            },
            serverOption,
            urlOption,
            {
              name: "--user",
              description: "User to authenticate with",
              args: { name: "user" },
            },
            vscodeOption,
            windsurfOption,
            zedOption,
          ],
        },
        {
          name: "destroy",
          description: "[experimental] Destroy an MCP stdio server",
          options: [
            appOption,
            {
              name: "--claude",
              description:
                "Remove MCP server from to the Claude client configuration",
            },
            {
              name: "--config",
              description: "Path to the MCP client configuration file",
              isRepeatable: true,
              args: { name: "config", template: "filepaths" },
            },
            {
              name: "--cursor",
              description:
                "Remove MCP server from to the Cursor client configuration",
            },
            {
              name: "--neovim",
              description:
                "Remove MCP server from to the Neovim client configuration",
            },
            {
              name: "--server",
              description:
                "Name of the MCP server in the MCP client configuration",
              args: { name: "server" },
            },
            {
              name: "--vscode",
              description:
                "Remove MCP server from to the VS Code client configuration",
            },
            {
              name: "--windsurf",
              description:
                "Remove MCP server from to the Windsurf client configuration",
            },
            { name: ["--yes", "-y"], description: "Accept all confirmations" },
            {
              name: "--zed",
              description:
                "Remove MCP server from to the Zed client configuration",
            },
          ],
        },
        {
          name: "inspect",
          description: "[experimental] Inspect a MCP stdio server",
          options: [
            appOption,
            {
              name: "--bearer-token",
              description: "Bearer token to authenticate with",
              args: { name: "bearer-token" },
            },
            bindAddrOption,
            {
              name: "--claude",
              description: "Use the configuration for Claude client",
            },
            {
              name: "--config",
              description: "Path to the MCP client configuration file",
              args: { name: "config", template: "filepaths" },
            },
            {
              name: "--cursor",
              description: "Use the configuration for Cursor client",
            },
            {
              name: "--instance",
              description:
                "Use fly-force-instance-id to connect to a specific instance",
              args: { name: "instance" },
            },
            {
              name: "--neovim",
              description: "Use the configuration for Neovim client",
            },
            {
              name: ["--password", "-p"],
              description: "Password to authenticate with",
              args: { name: "password" },
            },
            {
              name: "--ping",
              description: "Enable ping for the MCP connection",
            },
            {
              name: "--server",
              description:
                "Name of the MCP server in the MCP client configuration",
              args: { name: "server" },
            },
            {
              name: "--sse",
              description:
                "Use Server-Sent Events (SSE) for the MCP connection",
            },
            {
              name: "--stream",
              description: "Use streaming for the MCP connection",
            },
            {
              name: "--timeout",
              description: "Timeout in seconds for the MCP connection",
              args: { name: "timeout" },
            },
            urlOption,
            {
              name: ["--user", "-u"],
              description: "User to authenticate with",
              args: { name: "user" },
            },
            {
              name: "--vscode",
              description: "Use the configuration for VS Code client",
            },
            {
              name: "--windsurf",
              description: "Use the configuration for Windsurf client",
            },
            {
              name: "--zed",
              description: "Use the configuration for Zed client",
            },
          ],
        },
        {
          name: "launch",
          description: "[experimental] Launch an MCP stdio server",
          args: { name: "command" },
          options: [
            {
              name: "--auto-stop",
              description:
                "Automatically suspend the app after a period of inactivity. Valid values are 'off', 'stop', and 'suspend'",
              args: {
                name: "auto-stop",
                default: "suspend",
                suggestions: ["off", "stop", "suspend"],
              },
            },
            {
              name: "--bearer-token",
              description: "Use bearer token for authentication",
            },
            claudeOption,
            configOption2,
            cursorOption,
            fileLiteralOption2,
            fileLocalOption2,
            fileSecretOption2,
            {
              name: "--flycast",
              description: "Use wireguard and flycast for access",
            },
            hostDedicationIdOption,
            {
              name: "--image",
              description: "The image to use for the app",
              args: { name: "image" },
            },
            inspectorOption,
            {
              name: "--name",
              description: "Suggested name for the app",
              args: { name: "name" },
            },
            neovimOption,
            orgOption2,
            {
              name: "--password",
              description: "Password to authenticate with",
              args: { name: "password" },
            },
            {
              name: ["--region", "-r"],
              description:
                "The target region. By default, the new volume will be created in the source volume's region",
              args: { name: "region" },
            },
            {
              name: "--secret",
              description:
                "Set of secrets in the form of NAME=VALUE pairs. Can be specified multiple times",
              isRepeatable: true,
              args: { name: "secret" },
            },
            serverOption,
            {
              name: "--setup",
              description:
                "Additional setup commands to run before launching the MCP server",
              isRepeatable: true,
              args: { name: "setup" },
            },
            {
              name: "--user",
              description: "User to authenticate with",
              args: { name: "user" },
            },
            vmCpuKindOption,
            vmCpusOption,
            vmGpuKindOption,
            vmGpusOption,
            vmMaxMemoryOption,
            vmMemoryOption,
            vmSizeOption,
            {
              name: ["--volume", "-v"],
              description:
                "Volume to mount, in the form of <volume_name>:/path/inside/machine[:<options>]",
              isRepeatable: true,
              args: { name: "volume" },
            },
            vscodeOption,
            windsurfOption,
            zedOption,
          ],
        },
        {
          name: "list",
          description: "[experimental] List MCP servers",
          options: [
            appOption,
            {
              name: "--claude",
              description:
                "List MCP servers from the Claude client configuration",
            },
            configOption2,
            {
              name: "--cursor",
              description:
                "List MCP servers from the Cursor client configuration",
            },
            { name: "--json", description: "Output in JSON format" },
            {
              name: "--neovim",
              description:
                "List MCP servers from the Neovim client configuration",
            },
            {
              name: "--vscode",
              description:
                "List MCP servers from the VS Code client configuration",
            },
            {
              name: "--windsurf",
              description:
                "List MCP servers from the Windsurf client configuration",
            },
            {
              name: "--zed",
              description: "List MCP servers from the Zed client configuration",
            },
          ],
        },
        {
          name: "logs",
          description: "[experimental] Show log for an MCP server",
          options: [
            appOption,
            {
              name: "--claude",
              description:
                "Select MCP server from the Claude client configuration",
            },
            configOption2,
            {
              name: "--cursor",
              description:
                "Select MCP server from the Cursor client configuration",
            },
            { name: "--json", description: "Output in JSON format" },
            {
              name: "--neovim",
              description:
                "Select MCP server from the Neovim client configuration",
            },
            {
              name: ["--no-tail", "-n"],
              description: "Do not continually stream logs",
            },
            {
              name: "--server",
              description: "Name of the MCP server to show logs for",
              args: { name: "server" },
            },
            {
              name: "--vscode",
              description:
                "Select MCP server from the VS Code client configuration",
            },
            {
              name: "--windsurf",
              description:
                "Select MCP server from the Windsurf client configuration",
            },
            {
              name: "--zed",
              description:
                "Select MCP server from the Zed client configuration",
            },
          ],
        },
        {
          name: "proxy",
          description: "[experimental] Start an MCP proxy client",
          options: [
            appOption,
            {
              name: "--bearer-token",
              description: "Bearer token to authenticate with",
              args: { name: "bearer-token" },
            },
            bindAddrOption,
            inspectorOption,
            {
              name: "--instance",
              description:
                "Use fly-force-instance-id to connect to a specific instance",
              args: { name: "instance" },
            },
            {
              name: ["--password", "-p"],
              description: "Password to authenticate with",
              args: { name: "password" },
            },
            {
              name: "--ping",
              description: "Enable ping for the MCP connection",
            },
            {
              name: "--sse",
              description:
                "Use Server-Sent Events (SSE) for the MCP connection",
            },
            {
              name: "--stream",
              description: "Use streaming for the MCP connection",
            },
            {
              name: "--timeout",
              description: "Timeout in seconds for the MCP connection",
              args: { name: "timeout" },
            },
            urlOption,
            {
              name: ["--user", "-u"],
              description: "User to authenticate with",
              args: { name: "user" },
            },
          ],
        },
        {
          name: "remove",
          description:
            "[experimental] Remove MCP proxy client from a MCP client configuration",
          options: [
            appOption,
            {
              name: "--claude",
              description:
                "Remove MCP server from the Claude client configuration",
            },
            configOption2,
            {
              name: "--cursor",
              description:
                "Remove MCP server from the Cursor client configuration",
            },
            {
              name: "--name",
              description:
                "Name to use for the MCP server in the MCP client configuration",
              hidden: true,
              args: { name: "name" },
            },
            {
              name: "--neovim",
              description:
                "Remove MCP server from the Neovim client configuration",
            },
            serverOption,
            {
              name: "--vscode",
              description:
                "Remove MCP server from the VS Code client configuration",
            },
            {
              name: "--windsurf",
              description:
                "Remove MCP server from the Windsurf client configuration",
            },
            {
              name: "--zed",
              description:
                "Remove MCP server from the Zed client configuration",
            },
          ],
        },
        {
          name: "server",
          description: "[experimental] Start a flyctl MCP server",
          options: [
            bindAddrOption,
            {
              name: "--claude",
              description:
                "Add flyctl MCP server to the Claude client configuration",
            },
            configOption2,
            {
              name: "--cursor",
              description:
                "Add flyctl MCP server to the Cursor client configuration",
            },
            inspectorOption,
            {
              name: "--neovim",
              description:
                "Add flyctl MCP server to the Neovim client configuration",
            },
            {
              name: "--port",
              description: "Port to run the MCP server on (default is 8080)",
              args: { name: "port", default: "8080" },
            },
            serverOption,
            {
              name: "--sse",
              description: "Enable Server-Sent Events (SSE) for MCP commands",
            },
            {
              name: "--stream",
              description: "Enable HTTP streaming output for MCP commands",
            },
            {
              name: "--vscode",
              description:
                "Add flyctl MCP server to the VS Code client configuration",
            },
            {
              name: "--windsurf",
              description:
                "Add flyctl MCP server to the Windsurf client configuration",
            },
            {
              name: "--zed",
              description:
                "Add flyctl MCP server to the Zed client configuration",
            },
          ],
        },
        {
          name: "volume",
          description: "[experimental] mount a fly volume",
          hidden: true,
          options: [
            {
              name: "--auto-extend-size-increment",
              description: "Auto extend size increment",
              args: { name: "auto-extend-size-increment", default: "1GB" },
            },
            {
              name: "--auto-extend-size-limit",
              description: "Auto extend size limit",
              args: { name: "auto-extend-size-limit", default: "10GB" },
            },
            {
              name: "--auto-extend-size-threshold",
              description: "Auto extend size threshold percentage",
              args: { name: "auto-extend-size-threshold", default: "80" },
            },
            claudeOption,
            cursorOption,
            {
              name: "--destination",
              description: "Destination path in the container",
              args: { name: "destination", default: "/data" },
            },
            {
              name: "--initial-size",
              description: "Initial size of the volume",
              args: { name: "initial-size", default: "1GB" },
            },
            neovimOption,
            {
              name: "--server",
              description:
                "Name to use for the MCP server in the MCP client configuration",
              args: { name: "server", default: "volume" },
            },
            {
              name: "--snapshot-retention",
              description: "Snapshot retention period in days",
              args: { name: "snapshot-retention" },
            },
            {
              name: "--source",
              description: "Source of the volume",
              args: { name: "source", default: "data" },
            },
            vscodeOption,
            windsurfOption,
            zedOption,
          ],
        },
        {
          name: "wrap",
          description: "[experimental] Wrap an MCP stdio program",
          options: [
            {
              name: "--bearer-token",
              description:
                "Bearer token to authenticate with. Defaults to the value of the FLY_MCP_BEARER_TOKEN environment variable",
              args: { name: "bearer-token" },
            },
            {
              name: ["--mcp", "-m"],
              description: "Path to the stdio MCP program to be wrapped",
              args: { name: "mcp" },
            },
            {
              name: "--password",
              description:
                "Password to authenticate with. Defaults to the value of the FLY_MCP_PASSWORD environment variable",
              args: { name: "password" },
            },
            {
              name: ["--port", "-p"],
              description: "Port to listen on",
              args: { name: "port", default: "8080" },
            },
            { name: "--private", description: "Use private networking" },
            {
              name: "--user",
              description:
                "User to authenticate with. Defaults to the value of the FLY_MCP_USER environment variable",
              args: { name: "user" },
            },
          ],
        },
      ],
    },
    {
      name: "metrics",
      description: "Commands that handle sending any metrics to flyctl-metrics",
      hidden: true,
      subcommands: [
        {
          name: "send",
          description: "Send any metrics in stdin to flyctl-metrics",
          hidden: true,
        },
      ],
    },
    {
      name: "move",
      description: "Move an app to another organization",
      hidden: true,
      deprecated: { description: "Use `fly apps move` instead" },
      args: { name: "app", generators: flyAppsGenerator },
      options: [orgOption, yesOption],
    },
    {
      name: "mpg",
      description: "Manage Managed Postgres clusters",
      subcommands: [
        {
          name: "attach",
          description: "Attach a managed Postgres cluster to an app",
          args: { name: "cluster-id" },
          options: [
            appOption,
            configOption,
            {
              name: ["--database", "-d"],
              description: "The database to connect to",
              args: { name: "database" },
            },
            {
              name: ["--username", "-u"],
              description: "The username to connect as",
              args: { name: "username" },
            },
            {
              name: "--variable-name",
              description:
                "The name of the environment variable that will be added to the attached app",
              args: { name: "variable-name", default: "DATABASE_URL" },
            },
          ],
        },
        {
          name: ["backup", "backups"],
          description: "Backup commands",
          subcommands: [
            {
              name: "create",
              description: "Create MPG cluster backup",
              args: { name: "cluster-id" },
              options: [
                {
                  name: "--type",
                  description: "Backup type: full or incr",
                  args: {
                    name: "type",
                    default: "full",
                    suggestions: ["full", "incr"],
                  },
                },
              ],
            },
            {
              name: ["list", "ls"],
              description: "List MPG cluster backups",
              args: { name: "cluster-id" },
              options: [
                {
                  name: "--all",
                  description: "Show all backups (default: last 24 hours)",
                },
                jsonOption,
              ],
            },
          ],
        },
        {
          name: "connect",
          description: "Connect to a MPG database using psql",
          args: { name: "cluster-id" },
          options: [
            {
              name: ["--command", "-c"],
              description:
                "The SQL command to run and exit (repeatable; mutually exclusive with --file)",
              isRepeatable: true,
              args: { name: "command" },
            },
            {
              name: ["--database", "-d"],
              description: "The database to connect to",
              args: { name: "database" },
            },
            {
              name: ["--file", "-f"],
              description:
                "The SQL file to run and exit (repeatable, - for stdin; mutually exclusive with --command)",
              isRepeatable: true,
              args: { name: "file", template: "filepaths" },
            },
            {
              name: ["--username", "-u"],
              description: "The username to connect as",
              args: { name: "username" },
            },
          ],
        },
        {
          name: "create",
          description: "Create a new Managed Postgres cluster",
          options: [
            {
              name: "--enable-postgis-support",
              description: "Enable PostGIS for the Postgres cluster",
            },
            {
              name: ["--name", "-n"],
              description: "The name of your Postgres cluster",
              args: { name: "name" },
            },
            orgOption,
            {
              name: "--pg-major-version",
              description:
                "The major version of Postgres to use for the Postgres cluster. Supported versions are 16 and 17",
              args: {
                name: "pg-major-version",
                default: "16",
                suggestions: ["16", "17"],
              },
            },
            {
              name: "--plan",
              description:
                "The plan to use for the Postgres cluster: Basic, Starter, Launch, Scale, Performance",
              args: { name: "plan" },
            },
            regionOption,
            {
              name: "--v2",
              description:
                "Deprecated: Managed Postgres clusters are always created on v2",
              hidden: true,
            },
            {
              name: "--volume-size",
              description:
                "Initial volume size in GB. Defaults to the plan's size",
              args: { name: "volume-size" },
            },
          ],
        },
        {
          name: ["databases", "database", "db", "dbs"],
          description: "Manage databases in a managed postgres cluster",
          subcommands: [
            {
              name: "create",
              description: "Create a database in an MPG cluster",
              args: { name: "cluster-id" },
              options: [
                {
                  name: ["--name", "-n"],
                  description: "The name of the database",
                  args: { name: "name" },
                },
              ],
            },
            {
              name: ["extensions", "extension", "ext"],
              description:
                "Manage Postgres extensions in a managed postgres cluster database",
              subcommands: [
                {
                  name: "disable",
                  description: "Disable a Postgres extension on a database",
                  args: { name: "extension" },
                  options: [
                    {
                      name: ["--cluster", "-c"],
                      description: "Target cluster ID",
                      args: { name: "cluster" },
                    },
                    databaseOption,
                    {
                      name: "--force",
                      description: "Drop dependent objects as well (CASCADE)",
                    },
                  ],
                },
                {
                  name: "enable",
                  description: "Enable a Postgres extension on a database",
                  args: { name: "extension" },
                  options: [
                    {
                      name: ["--cluster", "-c"],
                      description: "Target cluster ID",
                      args: { name: "cluster" },
                    },
                    {
                      name: "--create-schema",
                      description: "Create the schema if it does not exist",
                    },
                    databaseOption,
                    {
                      name: "--schema",
                      description:
                        "Schema in which to create the extension (default: public)",
                      args: { name: "schema" },
                    },
                  ],
                },
                {
                  name: ["list", "ls"],
                  description:
                    "List Postgres extensions for a database in an MPG cluster",
                  args: { name: "cluster-id" },
                  options: [databaseOption, jsonOption],
                },
              ],
            },
            {
              name: ["list", "ls"],
              description: "List databases in an MPG cluster",
              args: { name: "cluster-id" },
              options: [jsonOption],
            },
          ],
        },
        {
          name: ["destroy", "delete", "remove", "rm"],
          description: "Destroy a managed Postgres cluster",
          args: { name: "cluster-id" },
          options: [yesOption],
        },
        {
          name: "detach",
          description: "Detach a managed Postgres cluster from an app",
          args: { name: "cluster-id" },
          options: [appOption, configOption],
        },
        {
          name: "fork",
          description:
            "Fork MPG cluster into a new cluster from its current data",
          args: { name: "cluster-id", isOptional: true },
          options: [
            {
              name: ["--name", "-n"],
              description:
                "The name of the forked cluster (defaults to <source-name>-fork)",
              args: { name: "name" },
            },
            {
              name: "--plan",
              description:
                "The plan for the forked cluster: Basic, Starter, Launch, Scale, Performance (defaults to the source cluster's plan)",
              args: { name: "plan" },
            },
          ],
        },
        {
          name: ["list", "ls"],
          description: "List MPG clusters",
          options: [
            {
              name: "--deleted",
              description: "Show deleted clusters instead of active clusters",
            },
            jsonOption,
            orgOption,
          ],
        },
        {
          name: ["maintenance-window", "maintenance"],
          description: "Show or change a cluster's weekly maintenance window",
          subcommands: [
            {
              name: "set",
              description: "Change an MPG cluster's maintenance window",
              args: { name: "cluster-id", isOptional: true },
              options: [
                {
                  name: "--day",
                  description:
                    "Day of the week the window starts on, e.g. sunday",
                  args: { name: "day" },
                },
                {
                  name: "--duration",
                  description: "Length of the window in hours, 3-8",
                  args: { name: "duration" },
                },
                jsonOption,
                {
                  name: "--start-hour",
                  description:
                    "Hour the window starts, 0-23, in the cluster's timezone",
                  args: { name: "start-hour" },
                },
              ],
            },
            {
              name: "show",
              description: "Show an MPG cluster's maintenance window",
              args: { name: "cluster-id", isOptional: true },
              options: [jsonOption],
            },
          ],
        },
        {
          name: "proxy",
          description: "Proxy to a MPG database",
          args: { name: "cluster-id" },
          options: [
            bindAddrOption,
            {
              name: ["--local-port", "-p"],
              description: "Local port to proxy on",
              args: { name: "local-port", default: "16380" },
            },
          ],
        },
        {
          name: "restore",
          description:
            "Restore MPG cluster from a backup or a point in time into a new cluster",
          args: { name: "cluster-id" },
          options: [
            {
              name: "--backup-id",
              description: "The backup ID to restore from",
              args: { name: "backup-id" },
            },
            {
              name: ["--name", "-n"],
              description:
                "The name of the restored cluster (defaults to a generated name)",
              args: { name: "name" },
            },
            {
              name: "--pitr-time",
              description:
                "Restore to a specific point in time (RFC3339, e.g. 2026-06-01T12:00:00Z). Requires the cluster's PITR recovery window to cover this time. Mutually exclusive with --backup-id",
              args: { name: "pitr-time" },
            },
          ],
        },
        {
          name: "status",
          description: "Show MPG cluster status",
          args: { name: "cluster-id", isOptional: true },
          options: [jsonOption],
        },
        {
          name: ["users", "user"],
          description: "Manage users in a managed postgres cluster",
          subcommands: [
            {
              name: "create",
              description: "Create a user in an MPG cluster",
              args: { name: "cluster-id" },
              options: [
                {
                  name: ["--role", "-r"],
                  description:
                    "The role of the user (schema_admin, writer, or reader)",
                  args: {
                    name: "role",
                    suggestions: ["schema_admin", "writer", "reader"],
                  },
                },
                {
                  name: ["--username", "-u"],
                  description: "The username of the user",
                  args: { name: "username" },
                },
              ],
            },
            {
              name: ["delete", "remove", "rm", "del"],
              description: "Delete a user from an MPG cluster",
              args: { name: "cluster-id" },
              options: [
                {
                  name: ["--username", "-u"],
                  description: "The username to delete",
                  args: { name: "username" },
                },
                yesOption,
              ],
            },
            {
              name: ["list", "ls"],
              description: "List users in an MPG cluster",
              args: { name: "cluster-id" },
              options: [jsonOption],
            },
            {
              name: "rotate-password",
              description: "Rotate a user's password in an MPG cluster",
              args: { name: "cluster-id" },
              options: [
                jsonOption,
                {
                  name: "--kill-sessions",
                  description:
                    "Terminate the user's existing database sessions after rotating the password",
                },
                {
                  name: ["--username", "-u"],
                  description: "The username whose password to rotate",
                  args: { name: "username" },
                },
                yesOption,
              ],
            },
            {
              name: ["set-role", "update-role"],
              description: "Update a user's role in an MPG cluster",
              args: { name: "cluster-id" },
              options: [
                {
                  name: ["--role", "-r"],
                  description:
                    "The new role for the user (schema_admin, writer, or reader)",
                  args: {
                    name: "role",
                    suggestions: ["schema_admin", "writer", "reader"],
                  },
                },
                {
                  name: ["--username", "-u"],
                  description: "The username to update",
                  args: { name: "username" },
                },
              ],
            },
          ],
        },
      ],
      options: [orgOption],
    },
    {
      name: "open",
      description: "Open browser to current deployed application",
      hidden: true,
      deprecated: { description: "Use `fly apps open` instead" },
      args: { name: "relative-uri", isOptional: true },
      options: [appOption, configOption],
    },
    {
      name: "orgs",
      description: "Commands for managing Fly organizations",
      subcommands: [
        {
          name: "create",
          description: "Create an organization",
          args: { name: "name", isOptional: true },
          options: [
            {
              name: "--apps-v2-default-on",
              description:
                "Configure this org to use apps v2 by default for new apps (deprecated)",
              hidden: true,
            },
            jsonOption,
          ],
        },
        {
          name: "cross-network-replays",
          description: "Manage cross-network replay settings",
          subcommands: [
            {
              name: "disable",
              description: "Disable cross-network replays",
              options: [orgOption, yesOption],
            },
            {
              name: "enable",
              description: "Enable cross-network replays",
              options: [orgOption, yesOption],
            },
            {
              name: "status",
              description: "Show cross-network replay status",
              options: [jsonOption, orgOption],
            },
          ],
        },
        {
          name: "delete",
          description: "Delete an organization",
          args: {
            name: "slug",
            isOptional: true,
            generators: flyOrgsGenerator,
          },
          options: [yesOption],
        },
        {
          name: "invite",
          description: "Invite user (by email) to organization",
          args: [
            { name: "slug", isOptional: true, generators: flyOrgsGenerator },
            { name: "email", isOptional: true },
          ],
          options: [jsonOption],
        },
        {
          name: ["list", "ls"],
          description: "Lists organizations for current user",
          options: [jsonOption],
        },
        {
          name: "remove",
          description: "Remove a user from an organization",
          args: [
            { name: "slug", isOptional: true, generators: flyOrgsGenerator },
            { name: "email", isOptional: true },
          ],
        },
        {
          name: "replay-sources",
          description: "Manage allowed replay source organizations",
          subcommands: [
            {
              name: "add",
              description: "Add allowed replay source organizations",
              args: {
                name: "slug",
                isOptional: true,
                isVariadic: true,
                generators: flyOrgsGenerator,
              },
              options: [orgOption],
            },
            {
              name: ["list", "ls"],
              description: "List allowed replay source organizations",
              options: [jsonOption, orgOption],
            },
            {
              name: "remove",
              description: "Remove allowed replay source organizations",
              args: {
                name: "slug",
                isOptional: true,
                isVariadic: true,
                generators: flyOrgsGenerator,
              },
              options: [orgOption, yesOption],
            },
          ],
        },
        {
          name: "show",
          description: "Show information about an organization",
          args: {
            name: "slug",
            isOptional: true,
            generators: flyOrgsGenerator,
          },
          options: [jsonOption],
        },
      ],
    },
    {
      name: "ping",
      description: "Test connectivity with ICMP ping messages",
      args: { name: "hostname", isOptional: true },
      options: [
        appOption,
        configOption,
        {
          name: ["--count", "-n"],
          description: "Number of probes to send (0=indefinite)",
          args: { name: "count" },
        },
        {
          name: ["--interval", "-i"],
          description: "Interval between ping probes",
          args: { name: "interval", default: "1s" },
        },
        orgOption,
        {
          name: ["--size", "-s"],
          description: "Size of probe to send (not including headers)",
          args: { name: "size", default: "12" },
        },
      ],
    },
    {
      name: "platform",
      description: "Fly platform information",
      subcommands: [
        { name: "regions", description: "List regions", options: [jsonOption] },
        {
          name: "status",
          description:
            "Show current platform status with an optional filter for maintenance or incidents in json mode (eg. incidents, maintenance)",
          args: { name: "kind", isOptional: true },
          options: [jsonOption],
        },
        {
          name: "vm-sizes",
          description: "List VM Sizes",
          options: [jsonOption],
        },
      ],
    },
    {
      name: ["postgres", "pg"],
      description: "Unmanaged Postgres cluster commands",
      subcommands: [
        {
          name: "add_flycast",
          description: "Switch from DNS to flycast based pg connections",
          hidden: true,
          options: [appOption, configOption],
        },
        {
          name: "attach",
          description: "Attach a postgres cluster to an app",
          args: { name: "postgres-app" },
          options: [
            appOption,
            configOption,
            {
              name: "--database-name",
              description:
                "The designated database name for this consuming app",
              args: { name: "database-name" },
            },
            {
              name: "--database-user",
              description:
                "The database user to create. By default, we will use the name of the consuming app",
              args: { name: "database-user" },
            },
            {
              name: "--superuser",
              description: "Grants attached user superuser privileges",
            },
            {
              name: "--variable-name",
              description:
                "The environment variable name that will be added to the consuming app",
              args: { name: "variable-name", default: "DATABASE_URL" },
            },
            yesOption,
          ],
        },
        {
          name: ["backup", "backups"],
          description: "Backup commands",
          subcommands: [
            {
              name: "config",
              description: "Manage backup configuration",
              subcommands: [
                {
                  name: "show",
                  description: "Show backup configuration",
                  options: [appOption, configOption],
                },
                {
                  name: "update",
                  description: "Update backup configuration",
                  options: [
                    appOption,
                    {
                      name: "--archive-timeout",
                      description: "Archive timeout",
                      args: { name: "archive-timeout" },
                    },
                    configOption,
                    {
                      name: "--full-backup-frequency",
                      description: "Full backup frequency",
                      args: { name: "full-backup-frequency" },
                    },
                    {
                      name: "--minimum-redundancy",
                      description: "Minimum redundancy",
                      args: { name: "minimum-redundancy" },
                    },
                    {
                      name: "--recovery-window",
                      description: "Recovery window",
                      args: { name: "recovery-window" },
                    },
                  ],
                },
              ],
            },
            {
              name: "create",
              description: "Create a backup",
              options: [
                appOption,
                configOption,
                {
                  name: ["--immediate-checkpoint", "-i"],
                  description:
                    "Forces Postgres to perform an immediate checkpoint",
                },
                {
                  name: ["--name", "-n"],
                  description: "Backup name",
                  args: { name: "name" },
                },
              ],
            },
            {
              name: "enable",
              description:
                "Enable backups on a Postgres cluster, creating a Tigris bucket for storage",
              options: [appOption, configOption],
            },
            {
              name: "list",
              description: "List backups",
              options: [appOption, configOption],
            },
            {
              name: "restore",
              description:
                "Performs a WAL-based restore into a new Postgres cluster",
              args: { name: "destination-app-name" },
              options: [
                appOption,
                configOption,
                detachOption,
                {
                  name: "--image-ref",
                  description:
                    "Specify a non-default base image for the restored Postgres app",
                  args: { name: "image-ref" },
                },
                {
                  name: "--restore-target-inclusive",
                  description:
                    "Set to true to stop recovery after the specified time, or false to stop before it",
                },
                {
                  name: "--restore-target-name",
                  description: "ID or alias of backup to restore",
                  args: { name: "restore-target-name" },
                },
                {
                  name: "--restore-target-time",
                  description:
                    "RFC3339-formatted timestamp up to which recovery will proceed. Example: 2021-07-16T12:34:56Z",
                  args: { name: "restore-target-time" },
                },
              ],
            },
          ],
        },
        {
          name: "barman",
          description: "Manage databases in a cluster (Deprecated)",
          hidden: true,
          subcommands: [
            {
              name: "backup",
              description: "Backup your database on barman",
              options: [appOption, configOption],
            },
            {
              name: "check",
              description: "Check your barman connection",
              options: [appOption, configOption],
            },
            {
              name: "create",
              description: "Create barman machine",
              options: [
                appOption,
                configOption,
                regionOption,
                {
                  name: "--vm-size",
                  description: "The size of the VM",
                  args: { name: "vm-size" },
                },
                {
                  name: "--volume-size",
                  description: "The volume size in GB",
                  args: { name: "volume-size" },
                },
              ],
            },
            {
              name: "list-backup",
              description: "List your barman backups",
              options: [appOption, configOption],
            },
            {
              name: "recover",
              description: "Recover primary database with a barman backup",
              args: { name: "primary-machine-id" },
              options: [
                appOption,
                {
                  name: ["--backup-id", "-b"],
                  description: "Choose one backup ID. Default: latest",
                  args: { name: "backup-id", default: "latest" },
                },
                configOption,
                {
                  name: ["--target-time", "-T"],
                  description:
                    'Choose a target time for PITR. Example: "2023-05-16 20:55:05.958774+00:00". Default: last WAL file on barman',
                  args: { name: "target-time" },
                },
              ],
            },
            {
              name: "show-backup",
              description: "Show a single barman backup",
              args: { name: "backup-id" },
              options: [appOption, configOption],
            },
            {
              name: "switch-wal",
              description: "Switch WAL to sync barman",
              options: [appOption, configOption],
            },
          ],
          options: [jsonOption],
        },
        {
          name: "config",
          description: "Show and manage Postgres configuration",
          subcommands: [
            {
              name: ["show", "view"],
              description: "Show Postgres configuration",
              options: [appOption, configOption],
            },
            {
              name: "update",
              description: "Update Postgres configuration",
              options: [
                appOption,
                configOption,
                detachOption,
                {
                  name: "--force",
                  description: "Skips pg-setting value verification",
                },
                {
                  name: "--log-min-duration-statement",
                  description:
                    "Sets the minimum execution time above which all statements will be logged. (ms)",
                  args: { name: "log-min-duration-statement" },
                },
                {
                  name: "--log-statement",
                  description:
                    "Sets the type of statements logged. (none, ddl, mod, all)",
                  args: {
                    name: "log-statement",
                    suggestions: ["none", "ddl", "mod", "all"],
                  },
                },
                {
                  name: "--maintenance-work-mem",
                  description:
                    "Sets the maximum amount of memory used for maintenance operations like ALTER TABLE, CREATE INDEX, and VACUUM",
                  args: { name: "maintenance-work-mem" },
                },
                {
                  name: "--max-connections",
                  description:
                    "Sets the maximum number of concurrent connections",
                  args: { name: "max-connections" },
                },
                {
                  name: "--max-replication-slots",
                  description:
                    "Specifies the maximum number of replication slots. This should typically match max_wal_senders",
                  args: { name: "max-replication-slots" },
                },
                {
                  name: "--max-wal-senders",
                  description:
                    "Maximum number of concurrent connections from standby servers or streaming backup clients. (0 disables replication)",
                  args: { name: "max-wal-senders" },
                },
                {
                  name: "--shared-buffers",
                  description:
                    "Sets the amount of memory the database server uses for shared memory buffers",
                  args: { name: "shared-buffers" },
                },
                {
                  name: "--shared-preload-libraries",
                  description:
                    "Sets the shared libraries to preload. (comma separated string)",
                  args: { name: "shared-preload-libraries" },
                },
                {
                  name: "--wal-level",
                  description:
                    "Sets the level of information written to the WAL. (minimal, replica, logical)",
                  args: {
                    name: "wal-level",
                    suggestions: ["minimal", "replica", "logical"],
                  },
                },
                {
                  name: "--work-mem",
                  description:
                    "Sets the maximum amount of memory each Postgres query can use",
                  args: { name: "work-mem" },
                },
                yesOption,
              ],
            },
          ],
        },
        {
          name: "connect",
          description: "Connect to the Postgres console",
          options: [
            appOption,
            configOption,
            {
              name: ["--database", "-d"],
              description:
                "The name of the database you would like to connect to",
              args: { name: "database", default: "postgres" },
            },
            {
              name: ["--password", "-p"],
              description: "The postgres user password",
              args: { name: "password" },
            },
            {
              name: ["--user", "-u"],
              description: "The postgres user to connect with",
              args: { name: "user", default: "postgres" },
            },
          ],
        },
        {
          name: "create",
          description: "Create a new Postgres cluster",
          options: [
            {
              name: "--autostart",
              description:
                "Automatically start a stopped Postgres app when a network request is received",
            },
            {
              name: "--consul-url",
              description:
                "Opt into using an existing consul as the backend store by specifying the target consul url",
              args: { name: "consul-url" },
            },
            detachOption,
            {
              name: "--enable-backups",
              description:
                "Create a new tigris bucket and enable WAL-based backups",
            },
            {
              name: "--flex",
              description: "Create a postgres cluster that's managed by Repmgr",
            },
            {
              name: "--fork-from",
              description:
                "Specify a source Postgres application to fork from. Format: <app-name> or <app-name>:<volume-id>",
              args: { name: "fork-from" },
            },
            generateNameOption,
            hostDedicationIdOption,
            {
              name: "--image-ref",
              description:
                "Specify a non-default base image for the Postgres app",
              args: { name: "image-ref" },
            },
            {
              name: "--initial-cluster-size",
              description: "Initial cluster size",
              args: { name: "initial-cluster-size" },
            },
            {
              name: ["--name", "-n"],
              description: "The name of your Postgres app",
              args: { name: "name" },
            },
            {
              name: "--network",
              description:
                "Name of the custom private network to create the cluster on. A network that doesn't exist yet is created",
              args: { name: "network" },
            },
            orgOption,
            {
              name: ["--password", "-p"],
              description:
                "The superuser password. The password will be generated for you if you leave this blank",
              args: { name: "password" },
            },
            regionOption,
            {
              name: "--snapshot-id",
              description:
                "Creates the volume with the contents of the snapshot",
              args: { name: "snapshot-id" },
            },
            {
              name: "--stolon",
              description: "Create a postgres cluster that's managed by Stolon",
            },
            vmCpuKindOption,
            vmCpusOption,
            vmGpuKindOption,
            vmGpusOption,
            vmMaxMemoryOption,
            vmMemoryOption,
            vmSizeOption,
            {
              name: "--volume-size",
              description: "The volume size in GB",
              args: { name: "volume-size" },
            },
          ],
        },
        {
          name: "db",
          description: "Manage databases in a cluster",
          subcommands: [
            {
              name: ["list", "ls"],
              description: "List databases",
              options: [appOption, configOption],
            },
          ],
          options: [jsonOption],
        },
        {
          name: "detach",
          description: "Detach a postgres cluster from an app",
          args: { name: "postgres-app" },
          options: [appOption, configOption],
        },
        {
          name: "events",
          description: "Track major cluster events",
          subcommands: [
            {
              name: "list",
              description: "Outputs a formatted list of cluster events",
              options: [
                { name: ["--all", "-o"], description: "Outputs all entries" },
                appOption,
                {
                  name: ["--compact", "-d"],
                  description: "Omit the 'Details' column",
                },
                configOption,
                {
                  name: ["--event", "-e"],
                  description: "Event type in a postgres cluster",
                  args: { name: "event" },
                },
                {
                  name: ["--limit", "-l"],
                  description:
                    "Set the maximum number of entries to output (default: 20)",
                  args: { name: "limit" },
                },
                {
                  name: ["--node-id", "-i"],
                  description: "Restrict entries to node with this ID",
                  args: { name: "node-id" },
                },
                {
                  name: ["--node-name", "-n"],
                  description: "Restrict entries to node with this name",
                  args: { name: "node-name" },
                },
              ],
            },
          ],
          options: [jsonOption],
        },
        {
          name: "failover",
          description: "Failover to a new primary",
          options: [
            {
              name: "--allow-secondary-region",
              description:
                "Allow failover to a machine in a secondary region. This is useful when the primary region is unavailable, but the secondary region is still healthy. This is only available for flex machines",
            },
            appOption,
            configOption,
            {
              name: "--force",
              description:
                "Force a failover even if we can't connect to the active leader",
            },
          ],
        },
        {
          name: "import",
          description: "Imports database from a specified Postgres URI",
          args: { name: "source-uri" },
          options: [
            appOption,
            {
              name: "--clean",
              description: "Drop database objects prior to creating them",
            },
            configOption,
            {
              name: "--create",
              description:
                "Begin by creating the database itself and reconnecting to it. If --clean is also specified, the script drops and recreates the target database before reconnecting to it",
            },
            {
              name: "--data-only",
              description:
                "Dump only the data, not the schema (data definitions)",
            },
            {
              name: "--image",
              description:
                "Path to public image containing custom migration process",
              args: { name: "image" },
            },
            {
              name: "--no-owner",
              description:
                "Do not set ownership of objects to match the original database. Makes dump restorable by any user",
            },
            {
              name: "--region",
              description: "Region to provision migration machine",
              args: { name: "region" },
            },
            {
              name: "--vm-size",
              description: "The size of the VM",
              args: { name: "vm-size" },
            },
          ],
        },
        {
          name: ["list", "ls"],
          description: "List postgres clusters",
          options: [jsonOption],
        },
        {
          name: "renew-certs",
          description: "Renews the SSH certificates for the Postgres cluster",
          options: [
            appOption,
            configOption,
            {
              name: "--valid-days",
              description:
                "The number of days the certificate should be valid for",
              args: { name: "valid-days", default: "36525" },
            },
          ],
        },
        {
          name: "restart",
          description:
            "Restarts each member of the Postgres cluster one by one",
          options: [
            appOption,
            configOption,
            {
              name: "--force",
              description:
                "Force a restart even we don't have an active leader",
            },
            {
              name: "--skip-health-checks",
              description:
                "Runs rolling restart process without waiting for health checks",
            },
          ],
        },
        {
          name: "users",
          description: "Manage users in a postgres cluster",
          subcommands: [
            {
              name: ["list", "ls"],
              description: "List users",
              options: [appOption, configOption, jsonOption],
            },
          ],
        },
      ],
    },
    {
      name: "proxy",
      description: "Proxies connections to a Fly Machine",
      args: [
        { name: "local:remote" },
        { name: "remote-host", isOptional: true },
      ],
      options: [
        appOption,
        bindAddrOption,
        configOption,
        orgOption,
        quietOption,
        {
          name: ["--select", "-s"],
          description:
            "Prompt to select from available Machines from the current application",
        },
        {
          name: "--watch-stdin",
          description: "Watches stdin and terminates once it gets closed",
        },
      ],
    },
    {
      name: "redis",
      description: "Launch and manage Redis databases managed by Upstash.com",
      subcommands: [
        {
          name: "connect",
          description: "Connect to a Redis database using redis-cli",
          options: [orgOption, regionOption],
        },
        {
          name: "create",
          description: "Create an Upstash Redis database",
          options: [
            {
              name: "--disable-eviction",
              description:
                "Disallow writes when the max data size limit has been reached",
            },
            {
              name: "--enable-auto-upgrade",
              description:
                "Automatically upgrade to a higher plan when hitting resource limits",
            },
            {
              name: "--enable-eviction",
              description: "Evict objects when memory is full",
            },
            {
              name: "--enable-prodpack",
              description:
                "Enable ProdPack add-on for additional features ($200/mo)",
            },
            {
              name: ["--name", "-n"],
              description: "The name of your Redis database",
              args: { name: "name" },
            },
            {
              name: "--no-replicas",
              description: "Don't prompt for selecting replica regions",
            },
            orgOption,
            {
              name: "--plan",
              description:
                "The plan for your Redis database (default: pay-as-you-go)",
              args: { name: "plan" },
            },
            regionOption,
            {
              name: "--replica-regions",
              description:
                "Comma-separated list of regions to deploy read replicas (see 'flyctl platform regions')",
              args: { name: "replica-regions" },
            },
          ],
        },
        {
          name: "dashboard",
          description:
            "View your Upstash Redis databases on the Upstash web console",
          args: { name: "org-slug", generators: flyOrgsGenerator },
        },
        {
          name: ["destroy", "delete"],
          description: "Permanently destroy an Upstash Redis database",
          args: { name: "name" },
          options: [yesOption],
        },
        {
          name: ["list", "ls"],
          description: "List Upstash Redis databases for an organization",
          options: [orgOption],
        },
        { name: "plans", description: "List available Redis plans" },
        {
          name: "proxy",
          description: "Proxy to a Redis database",
          options: [orgOption, regionOption],
        },
        {
          name: "reset",
          description: "Reset the password for an Upstash Redis database",
          args: { name: "name" },
        },
        {
          name: "status",
          description: "Show status of a Redis database",
          args: { name: "name" },
        },
        {
          name: "update",
          description: "Update an Upstash Redis database",
          args: { name: "name" },
          options: [
            {
              name: "--disable-prodpack",
              description:
                "Disable the ProdPack add-on, leaving every other setting untouched",
            },
            {
              name: "--enable-prodpack",
              description:
                "Enable ProdPack add-on for additional features ($200/mo), leaving every other setting untouched",
            },
            orgOption,
            regionOption,
            {
              name: "--replica-regions",
              description:
                "Comma-separated list of regions to deploy read replicas (see 'flyctl platform regions')",
              args: { name: "replica-regions" },
            },
          ],
        },
      ],
    },
    {
      name: "regions",
      description: "V1 APPS ONLY: Manage regions",
      hidden: true,
      subcommands: [
        {
          name: "add",
          description:
            "V1 APPS ONLY: Allow the app to run in the provided regions",
          hidden: true,
          args: { name: "region", isVariadic: true },
          options: [
            appOption,
            configOption,
            groupOption,
            jsonOption,
            yesOption,
          ],
        },
        {
          name: "backup",
          description:
            "V1 APPS ONLY: Sets the backup region pool with provided regions",
          hidden: true,
          args: { name: "region", isVariadic: true },
          options: [appOption, configOption, jsonOption, yesOption],
        },
        {
          name: "list",
          description: "Shows the list of regions the app is allowed to run in",
          options: [appOption, configOption, jsonOption],
        },
        {
          name: "remove",
          description:
            "V1 APPS ONLY: Prevent the app from running in the provided regions",
          hidden: true,
          args: { name: "region", isVariadic: true },
          options: [
            appOption,
            configOption,
            groupOption,
            jsonOption,
            yesOption,
          ],
        },
        {
          name: "set",
          description:
            "V1 APPS ONLY: Sets the region pool with provided regions",
          hidden: true,
          args: { name: "region", isVariadic: true },
          options: [
            appOption,
            configOption,
            groupOption,
            jsonOption,
            yesOption,
          ],
        },
      ],
    },
    {
      name: "registry",
      description: "Operate on registry images [experimental]",
      hidden: true,
      subcommands: [
        {
          name: "files",
          description:
            "Generate a file listing for a registry image [experimental]",
          options: [
            appOption,
            imageOption2,
            {
              name: "--machine",
              description:
                "Scan the image of the machine with the specified ID",
              args: { name: "machine" },
            },
            selectOption3,
          ],
        },
        {
          name: "sbom",
          description: "Generate an SBOM for a registry image [experimental]",
          options: [
            appOption,
            imageOption2,
            {
              name: "--machine",
              description:
                "Scan the image of the machine with the specified ID",
              args: { name: "machine" },
            },
            selectOption3,
          ],
        },
        {
          name: "vulns",
          description:
            "Report possible vulnerabilities in a registry image [experimental]",
          args: { name: "vulnid", isVariadic: true },
          options: [
            appOption,
            imageOption2,
            {
              name: "--json",
              description: "Output the scan results in JSON format",
            },
            {
              name: ["--machine", "-m"],
              description:
                "Scan the image of the machine with the specified ID",
              args: { name: "machine" },
            },
            selectOption3,
            {
              name: ["--severity", "-S"],
              description:
                "Report only issues with a specific severity [LOW MEDIUM HIGH CRITICAL]",
              args: {
                name: "severity",
                suggestions: ["LOW", "MEDIUM", "HIGH", "CRITICAL"],
              },
            },
          ],
        },
        {
          name: "vulnsummary",
          description:
            "Show a summary of possible vulnerabilities in registry images [experimental]",
          args: { name: "vulnid", isVariadic: true },
          options: [
            appOption,
            orgOption,
            {
              name: ["--running", "-r"],
              description: "Only scan images for running machines",
            },
            {
              name: ["--severity", "-S"],
              description:
                "Report only issues with a specific severity [LOW MEDIUM HIGH CRITICAL]",
              args: {
                name: "severity",
                suggestions: ["LOW", "MEDIUM", "HIGH", "CRITICAL"],
              },
            },
          ],
        },
      ],
    },
    {
      name: "releases",
      description: "List app releases",
      options: [
        appOption,
        configOption,
        {
          name: "--image",
          description: "Display the Docker image reference of the release",
        },
        jsonOption,
      ],
    },
    {
      name: "resume",
      description: "Use `fly scale count` instead",
      hidden: true,
      deprecated: { description: "Use `fly scale count` instead" },
      args: { name: "app", generators: flyAppsGenerator },
    },
    {
      name: "scale",
      description: "Scale app resources",
      subcommands: [
        {
          name: "count",
          description: "Change an app's VM count to the given value",
          args: { name: "count", isOptional: true },
          options: [
            appOption,
            configOption,
            envOption,
            {
              name: "--from-snapshot",
              description:
                "New volumes are restored from snapshot, use 'last' for most recent snapshot. The default is an empty volume",
              args: { name: "from-snapshot" },
            },
            hostDedicationIdOption,
            {
              name: "--max-per-region",
              description: "Max number of VMs per region",
              args: { name: "max-per-region" },
            },
            {
              name: ["--process-group", "-g", "--group"],
              description: "The process group to scale",
              args: { name: "process-group" },
            },
            {
              name: ["--region", "-r"],
              description:
                "Comma separated list of regions to act on. Defaults to all regions where the group has machines",
              args: { name: "region" },
            },
            vmCpuKindOption,
            vmCpusOption,
            vmGpuKindOption,
            vmGpusOption,
            vmMaxMemoryOption,
            vmMemoryOption,
            vmSizeOption,
            {
              name: "--with-new-volumes",
              description:
                "New machines each get a new volumes even if there are unattached volumes available",
            },
            yesOption,
          ],
        },
        {
          name: "memory",
          description: "Set VM memory",
          args: { name: "memorymb", isOptional: true },
          options: [
            appOption,
            configOption,
            {
              name: ["--process-group", "-g", "--group"],
              description: "The process group to apply the VM size to",
              args: { name: "process-group" },
            },
          ],
        },
        {
          name: "show",
          description: "Show current resources",
          options: [appOption, configOption, jsonOption],
        },
        {
          name: "vm",
          description:
            "Change an app's VM to a named size (eg. shared-cpu-1x, performance-1x, performance-2x...)",
          args: { name: "size", isOptional: true },
          options: [
            appOption,
            configOption,
            {
              name: ["--process-group", "-g", "--group"],
              description: "The process group to apply the VM size to",
              args: { name: "process-group" },
            },
            {
              name: ["--vm-memory", "--memory"],
              description: "Memory in MB for the VM",
              args: { name: "vm-memory" },
            },
          ],
        },
      ],
    },
    {
      name: "secrets",
      description: "Manage application secrets with the set and unset commands",
      subcommands: [
        {
          name: "deploy",
          description: "Deploy staged secrets for an application",
          options: [appOption, configOption, detachOption, dnsChecksOption],
        },
        {
          name: "import",
          description: "Set secrets as NAME=VALUE pairs from stdin",
          options: [
            appOption,
            configOption,
            detachOption,
            dnsChecksOption,
            stageOption,
          ],
        },
        {
          name: "keys",
          description:
            "Manage application key secrets with the gen, list, and delete commands",
          hidden: true,
          subcommands: [
            {
              name: ["delete", "rm"],
              description: "Delete the application key secret",
              args: { name: "label" },
              options: [
                appOption,
                configOption,
                {
                  name: ["--force", "-f"],
                  description: "Force deletion without prompting",
                },
                {
                  name: ["--noversion", "-n"],
                  description:
                    "Do not automatically match all versions of a key when version is unspecified. all matches must be explicit",
                },
              ],
            },
            {
              name: ["generate", "gen"],
              description: "Generate the application key secret",
              args: [{ name: "type" }, { name: "label" }],
              options: [
                appOption,
                configOption,
                {
                  name: ["--force", "-f"],
                  description: "Force overwriting existing values",
                },
                {
                  name: ["--noversion", "-n"],
                  description: "Do not automatically version the key label",
                },
                {
                  name: ["--quiet", "-q"],
                  description: "Don't print key label",
                },
              ],
            },
            {
              name: ["list", "ls"],
              description: "List application keys secrets names",
              options: [appOption, configOption, jsonOption],
            },
          ],
        },
        {
          name: ["list", "ls"],
          description:
            "List application secret names, digests and deployment status",
          options: [appOption, configOption, jsonOption],
        },
        {
          name: "set",
          description: "Set one or more encrypted secrets for an application",
          args: { name: "name=value", isVariadic: true },
          options: [
            appOption,
            configOption,
            detachOption,
            dnsChecksOption,
            stageOption,
          ],
        },
        {
          name: "sync",
          description:
            "Sync flyctl with the latest versions of app secrets, even if they were set elsewhere",
          options: [
            appOption,
            configOption,
            detachOption,
            dnsChecksOption,
            stageOption,
          ],
        },
        {
          name: "unset",
          description: "Unset one or more encrypted secrets for an application",
          args: { name: "name", isVariadic: true },
          options: [
            appOption,
            configOption,
            detachOption,
            dnsChecksOption,
            stageOption,
          ],
        },
      ],
    },
    {
      name: "services",
      description: "Show the application's services",
      subcommands: [
        {
          name: ["list", "ls"],
          description: "List services",
          options: [appOption, configOption],
        },
      ],
    },
    {
      name: "settings",
      description: "Manage flyctl settings",
      subcommands: [
        {
          name: "analytics",
          description: "Control anonymized analytics collection",
          subcommands: [
            { name: "disable", description: "Disable analytics" },
            { name: "enable", description: "Enable analytics" },
          ],
        },
        {
          name: "autoupdate",
          description: "Control automatic updates",
          subcommands: [
            { name: "disable", description: "Disable automatic updates" },
            { name: "enable", description: "Enable automatic updates" },
          ],
        },
        {
          name: "synthetics",
          description: "Control synthetics agent execution",
          subcommands: [
            { name: "disable", description: "Disable synthetics" },
            { name: "enable", description: "Enable synthetics" },
          ],
        },
      ],
    },
    {
      name: "setup",
      description: "Prepare this machine to use Fly from a coding agent",
      subcommands: [
        {
          name: "agent",
          description:
            "Install Fly skills and the hosted MCP server into local coding agents",
          options: [
            agentOption,
            {
              name: "--force",
              description:
                "Repair a fly MCP entry whose type, URL, tools, or enabled state does not match. Extra keys such as headers are kept",
            },
            jsonOption,
            {
              name: "--skip-login",
              description: "Do not prompt to log in or sign up",
            },
            {
              name: "--skip-mcp",
              description: "Do not write MCP configuration",
            },
            {
              name: "--skip-skills",
              description: "Do not install Fly agent skills",
            },
            yesOption,
          ],
        },
      ],
    },
    {
      name: "sftp",
      description: "Get or put files from a remote VM",
      subcommands: [
        {
          name: "find",
          description:
            "The SFTP FIND command lists files (from an optional root directory) on a remote VM",
          args: { name: "path", isOptional: true },
          options: [
            addressOption,
            appOption,
            commandOption,
            configOption,
            containerOption,
            machineOption,
            noContainerOption,
            orgOption,
            processGroupOption,
            ptyOption,
            quietOption,
            regionOption,
            selectOption2,
            userOption,
          ],
        },
        {
          name: "get",
          description: "The SFTP GET retrieves a file from a remote VM",
          args: [
            { name: "remote-path" },
            { name: "local-path", isOptional: true, template: "filepaths" },
          ],
          options: [
            addressOption,
            appOption,
            commandOption,
            configOption,
            containerOption,
            machineOption,
            noContainerOption,
            orgOption,
            processGroupOption,
            ptyOption,
            quietOption,
            {
              name: ["--recursive", "-R"],
              description: "Download directories recursively",
            },
            regionOption,
            selectOption2,
            userOption,
          ],
        },
        {
          name: "put",
          description: "The SFTP PUT uploads a file to a remote VM",
          args: [
            { name: "local-path", template: "filepaths" },
            { name: "remote-path", isOptional: true },
          ],
          options: [
            addressOption,
            appOption,
            commandOption,
            configOption,
            containerOption,
            machineOption,
            {
              name: ["--mode", "-m"],
              description:
                "File mode/permissions for the uploaded file (default: 0644)",
              args: { name: "mode", default: "0644" },
            },
            noContainerOption,
            orgOption,
            processGroupOption,
            ptyOption,
            quietOption,
            {
              name: ["--recursive", "-R"],
              description: "Upload directories recursively",
            },
            regionOption,
            selectOption2,
            userOption,
          ],
        },
        {
          name: "shell",
          description:
            "The SFTP SHELL command brings up an interactive SFTP session to fetch and push files from/to a VM",
          options: [
            addressOption,
            appOption,
            commandOption,
            configOption,
            containerOption,
            machineOption,
            noContainerOption,
            orgOption,
            processGroupOption,
            ptyOption,
            quietOption,
            regionOption,
            selectOption2,
            userOption,
          ],
        },
      ],
    },
    {
      name: "skills",
      description:
        "Manage the Fly agent skills installed into local coding agents",
      subcommands: [
        {
          name: ["install", "add"],
          description: "Install the Fly agent skills into local coding agents",
          options: [
            agentOption,
            {
              name: "--force",
              description:
                "Overwrite files you have modified locally instead of skipping them",
            },
            {
              name: "--ref",
              description:
                "Install from a branch, tag or commit SHA of superfly/skills. The pin is remembered by later update and status runs; pass --ref main to track main again",
              args: { name: "ref" },
            },
            tarballOption,
            yesOption,
          ],
        },
        {
          name: ["remove", "rm", "uninstall"],
          description: "Remove the Fly agent skills from local coding agents",
          options: [agentOption],
        },
        {
          name: "status",
          description:
            "Show the installed Fly agent skills and whether an update is available",
          options: [
            jsonOption,
            {
              name: "--offline",
              description:
                "Do not contact GitHub to check for a newer revision",
            },
            {
              name: "--ref",
              description:
                "Compare against a branch, tag or commit SHA of superfly/skills instead of the remembered pin or main. Does not change the pin",
              args: { name: "ref" },
            },
            tarballOption,
          ],
        },
        {
          name: ["update", "upgrade"],
          description:
            "Update the installed Fly agent skills to the latest revision",
          options: [
            agentOption,
            {
              name: "--force",
              description:
                "Overwrite files you have modified locally instead of skipping them",
            },
            {
              name: "--ref",
              description:
                "Install from a branch, tag or commit SHA of superfly/skills. The pin is remembered by later update and status runs; pass --ref main to track main again",
              args: { name: "ref" },
            },
            tarballOption,
          ],
        },
      ],
      options: [
        jsonOption,
        {
          name: "--offline",
          description: "Do not contact GitHub to check for a newer revision",
        },
        {
          name: "--ref",
          description:
            "Compare against a branch, tag or commit SHA of superfly/skills instead of the remembered pin or main. Does not change the pin",
          args: { name: "ref" },
        },
        tarballOption,
      ],
    },
    {
      name: "ssh",
      description: "Use SSH to log into or run commands on Machines",
      subcommands: [
        {
          name: "console",
          description: "Connect to a running instance of the current app",
          options: [
            addressOption,
            appOption,
            commandOption,
            configOption,
            containerOption,
            machineOption,
            noContainerOption,
            orgOption,
            processGroupOption,
            ptyOption,
            quietOption,
            regionOption,
            selectOption2,
            userOption,
          ],
        },
        {
          name: "issue",
          description: "Issue a new SSH credential",
          args: [
            { name: "org", isOptional: true, generators: flyOrgsGenerator },
            { name: "path", isOptional: true, template: "filepaths" },
          ],
          options: [
            { name: "--agent", description: "Add key to SSH agent" },
            {
              name: ["--dotssh", "-d"],
              description: "Store keys in ~/.ssh, like normal keys",
            },
            {
              name: "--hours",
              description: "Expiration, in hours (<72)",
              args: { name: "hours", default: "24" },
            },
            orgOption,
            {
              name: "--overwrite",
              description:
                "Overwrite existing SSH keys in same location, if we generated them",
            },
            {
              name: ["--username", "-u"],
              description: "Unix usernames the SSH cert can authenticate as",
              isRepeatable: true,
              args: { name: "username", default: "root,fly" },
            },
          ],
        },
        {
          name: "log",
          description: "Log of all issued SSH certs",
          options: [jsonOption, orgOption],
        },
        {
          name: "sftp",
          description: "Get or put files from a remote VM",
          subcommands: [
            {
              name: "find",
              description:
                "The SFTP FIND command lists files (from an optional root directory) on a remote VM",
              args: { name: "path", isOptional: true },
              options: [
                addressOption,
                appOption,
                commandOption,
                configOption,
                containerOption,
                machineOption,
                noContainerOption,
                orgOption,
                processGroupOption,
                ptyOption,
                quietOption,
                regionOption,
                selectOption2,
                userOption,
              ],
            },
            {
              name: "get",
              description: "The SFTP GET retrieves a file from a remote VM",
              args: [
                { name: "remote-path" },
                { name: "local-path", isOptional: true, template: "filepaths" },
              ],
              options: [
                addressOption,
                appOption,
                commandOption,
                configOption,
                containerOption,
                machineOption,
                noContainerOption,
                orgOption,
                processGroupOption,
                ptyOption,
                quietOption,
                {
                  name: ["--recursive", "-R"],
                  description: "Download directories recursively",
                },
                regionOption,
                selectOption2,
                userOption,
              ],
            },
            {
              name: "put",
              description: "The SFTP PUT uploads a file to a remote VM",
              args: [
                { name: "local-path", template: "filepaths" },
                { name: "remote-path", isOptional: true },
              ],
              options: [
                addressOption,
                appOption,
                commandOption,
                configOption,
                containerOption,
                machineOption,
                {
                  name: ["--mode", "-m"],
                  description:
                    "File mode/permissions for the uploaded file (default: 0644)",
                  args: { name: "mode", default: "0644" },
                },
                noContainerOption,
                orgOption,
                processGroupOption,
                ptyOption,
                quietOption,
                {
                  name: ["--recursive", "-R"],
                  description: "Upload directories recursively",
                },
                regionOption,
                selectOption2,
                userOption,
              ],
            },
            {
              name: "shell",
              description:
                "The SFTP SHELL command brings up an interactive SFTP session to fetch and push files from/to a VM",
              options: [
                addressOption,
                appOption,
                commandOption,
                configOption,
                containerOption,
                machineOption,
                noContainerOption,
                orgOption,
                processGroupOption,
                ptyOption,
                quietOption,
                regionOption,
                selectOption2,
                userOption,
              ],
            },
          ],
        },
      ],
    },
    {
      name: "status",
      description: "Show app status",
      options: [
        { name: "--all", description: "Show completed instances" },
        appOption,
        configOption,
        { name: "--deployment", description: "Always show deployment status" },
        jsonOption,
        {
          name: "--rate",
          description: "Refresh Rate for --watch",
          args: { name: "rate", default: "5" },
        },
        { name: "--watch", description: "Refresh details" },
      ],
    },
    {
      name: ["storage", "tigris"],
      description: "Provision and manage Tigris object storage buckets",
      subcommands: [
        {
          name: "create",
          description: "Provision a Tigris object storage bucket",
          options: [
            accelerateOption,
            appOption,
            configOption,
            {
              name: ["--name", "-n"],
              description: "The name of your bucket",
              args: { name: "name" },
            },
            orgOption,
            publicOption,
            shadowAccessKeyOption,
            shadowEndpointOption,
            shadowNameOption,
            shadowRegionOption,
            shadowSecretKeyOption,
            shadowWriteThroughOption,
            websiteDomainNameOption,
            yesOption,
          ],
        },
        {
          name: "dashboard",
          description: "Visit the Tigris dashboard",
          args: { name: "bucket-name", isOptional: true },
          options: [appOption, configOption, orgOption, yesOption],
        },
        {
          name: "destroy",
          description: "Permanently destroy a Tigris object storage bucket",
          args: { name: "storage-bucket-name", isOptional: true },
          options: [appOption, configOption, yesOption],
        },
        {
          name: ["list", "ls"],
          description: "List your Tigris object storage buckets",
          options: [orgOption, yesOption],
        },
        {
          name: "status",
          description: "Show details about a Tigris storage bucket",
          args: { name: "name", isOptional: true },
          options: [appOption, configOption, yesOption],
        },
        {
          name: "update",
          description: "Update an existing Tigris object storage bucket",
          args: { name: "bucket-name" },
          options: [
            accelerateOption,
            appOption,
            {
              name: "--clear-custom-domain",
              description: "Remove a custom domain from a bucket",
            },
            {
              name: "--clear-shadow",
              description: "Remove an existing shadow bucket",
            },
            configOption,
            {
              name: "--custom-domain",
              description: "A custom domain name pointing at your bucket",
              args: { name: "custom-domain" },
            },
            orgOption,
            {
              name: "--private",
              description: "Set a public bucket to be private",
            },
            publicOption,
            shadowAccessKeyOption,
            shadowEndpointOption,
            shadowNameOption,
            shadowRegionOption,
            shadowSecretKeyOption,
            shadowWriteThroughOption,
            websiteDomainNameOption,
            yesOption,
          ],
        },
      ],
    },
    {
      name: "suspend",
      description: "Use `fly scale count` instead",
      hidden: true,
      deprecated: { description: "Use `fly scale count` instead" },
      args: { name: "app", isOptional: true, generators: flyAppsGenerator },
    },
    {
      name: "synthetics",
      description: "Synthetic monitoring",
      subcommands: [
        { name: "agent", description: "Runs the Synthetics agent" },
      ],
    },
    {
      name: "tokens",
      description: "Manage Fly.io API tokens",
      subcommands: [
        {
          name: ["3p", "third-party"],
          description: "Manage third-party (3P) caveats for Fly.io API tokens",
          subcommands: [
            {
              name: "add",
              description: "Add a third-party caveat",
              options: [
                locationOption,
                {
                  name: ["--secret", "-S"],
                  description:
                    "(insecure) base64 shared secret for third-party caveat",
                  args: { name: "secret" },
                },
                {
                  name: ["--secret-file", "-s"],
                  description:
                    "File containing base64 shared secret for third-party caveat",
                  args: { name: "secret-file", template: "filepaths" },
                },
              ],
            },
            {
              name: "add-discharge",
              description: "Tack a discharge token onto a Fly.io API token",
              options: [
                {
                  name: ["--discharge", "-d"],
                  description: "Third-party discharge token",
                  args: { name: "discharge" },
                },
              ],
            },
            {
              name: "discharge",
              description:
                "Exchange a ticket for the token that discharges a third-party caveat",
              options: [
                locationOption,
                {
                  name: ["--secret", "-S"],
                  description:
                    "(insecure) base64 shared secret for third-party caveat",
                  args: { name: "secret" },
                },
                {
                  name: ["--secret-file", "-s"],
                  description:
                    "File containing base64 shared secret for third-party caveat",
                  args: { name: "secret-file", template: "filepaths" },
                },
                {
                  name: "--ticket",
                  description: "Third party caveat ticket",
                  args: { name: "ticket" },
                },
              ],
            },
            {
              name: "ticket",
              description:
                "Retrieve the ticket from an existing third-party caveat",
              options: [locationOption],
            },
          ],
        },
        {
          name: "attenuate",
          description: "Attenuate Fly.io API tokens",
          options: [
            {
              name: ["--file", "-f"],
              description: "Filename to read caveats from. Defaults to stdin",
              args: { name: "file", template: "filepaths" },
            },
            {
              name: ["--location", "-l"],
              description: "Location identifier of macaroons to attenuate",
              hidden: true,
              args: { name: "location" },
            },
          ],
        },
        {
          name: "create",
          description: "Create Fly.io API tokens",
          subcommands: [
            {
              name: "deploy",
              description: "Create deploy tokens",
              options: [
                appOption,
                configOption,
                expiryOption,
                jsonOption,
                {
                  name: ["--name", "-n"],
                  description: "Token name",
                  args: { name: "name", default: "flyctl deploy token" },
                },
              ],
            },
            {
              name: "machine-exec",
              description: "Create a machine exec token",
              args: { name: "command", isOptional: true, isVariadic: true },
              options: [
                appOption,
                {
                  name: ["--command", "-C"],
                  description:
                    "An allowed command with arguments. This command must match exactly",
                  isRepeatable: true,
                  args: { name: "command" },
                },
                {
                  name: ["--command-prefix", "-p"],
                  description:
                    "An allowed command with arguments. This command must match the prefix of a command",
                  isRepeatable: true,
                  args: { name: "command-prefix" },
                },
                configOption,
                expiryOption,
                jsonOption,
                {
                  name: ["--name", "-n"],
                  description: "Token name",
                  args: { name: "name", default: "flyctl machine-exec token" },
                },
              ],
            },
            {
              name: "org",
              description: "Create org deploy tokens",
              options: [
                expiryOption,
                jsonOption,
                {
                  name: ["--name", "-n"],
                  description: "Token name",
                  args: { name: "name", default: "Org deploy token" },
                },
                orgOption,
              ],
            },
            {
              name: "readonly",
              description: "Create read-only org tokens",
              options: [
                expiryOption,
                {
                  name: "--from-existing",
                  description:
                    "Use an existing token as the basis for the read-only token",
                },
                jsonOption,
                {
                  name: ["--name", "-n"],
                  description: "Token name",
                  args: { name: "name", default: "Read-only org token" },
                },
                orgOption,
              ],
            },
            {
              name: "ssh",
              description: "Create token for SSH'ing to a single app",
              options: [
                appOption,
                configOption,
                expiryOption,
                jsonOption,
                {
                  name: ["--name", "-n"],
                  description: "Token name",
                  args: { name: "name", default: "flyctl ssh token" },
                },
              ],
            },
            {
              name: "wireguard",
              description: "Create a WireGuard token",
              options: [
                expiryOption,
                jsonOption,
                {
                  name: ["--name", "-n"],
                  description: "Token name",
                  args: { name: "name", default: "WireGuard token" },
                },
                orgOption,
              ],
            },
          ],
        },
        {
          name: "debug",
          description: "Debug Fly.io API tokens",
          options: [
            {
              name: ["--file", "-f"],
              description: "Filename to read caveats from. Defaults to stdin",
              args: { name: "file", template: "filepaths" },
            },
          ],
        },
        {
          name: "deploy",
          description: "Create deploy tokens",
          hidden: true,
          options: [
            appOption,
            configOption,
            expiryOption,
            jsonOption,
            {
              name: ["--name", "-n"],
              description: "Token name",
              args: { name: "name", default: "flyctl deploy token" },
            },
          ],
        },
        {
          name: ["list", "ls"],
          description: "List tokens",
          options: [
            appOption,
            configOption,
            orgOption,
            {
              name: ["--scope", "-s"],
              description: "Either 'app' or 'org'",
              args: { name: "scope", suggestions: ["app", "org"] },
            },
          ],
        },
        {
          name: "org",
          description: "Create org deploy tokens",
          hidden: true,
          options: [
            expiryOption,
            jsonOption,
            {
              name: ["--name", "-n"],
              description: "Token name",
              args: { name: "name", default: "Org deploy token" },
            },
            orgOption,
          ],
        },
        {
          name: "revoke",
          description: "Revoke tokens",
          subcommands: [
            {
              name: "supplied",
              description:
                "Revoke an access token supplied by flag or environment",
            },
          ],
        },
      ],
    },
    {
      name: "trace",
      description: "Run a subprocess within a flyctl trace",
      hidden: true,
      subcommands: [
        {
          name: "run",
          description: "Run a command within a trace",
          args: [
            { name: "command" },
            { name: "args", isOptional: true, isVariadic: true },
          ],
        },
      ],
    },
    {
      name: "version",
      description: "Show version information for the flyctl command",
      subcommands: [
        {
          name: "save-install",
          description: "Save-install",
          hidden: true,
          options: [
            {
              name: "--channel",
              description: "Channel to use for updates",
              args: { name: "channel" },
            },
            {
              name: "--disable-auto-update",
              description: "Disable automatic updates",
            },
          ],
        },
        {
          name: ["upgrade", "update"],
          description:
            "Checks for available updates and automatically upgrades",
        },
      ],
      options: [
        jsonOption,
        {
          name: ["--saveinstall", "-s"],
          description: "Save parameter in config",
          hidden: true,
          args: { name: "saveinstall" },
        },
      ],
    },
    {
      name: ["volumes", "volume", "vol", "v"],
      description: "Manage Fly Volumes",
      subcommands: [
        {
          name: "create",
          description: "Create a new volume for an app",
          args: { name: "volume-name" },
          options: [
            appOption,
            configOption,
            {
              name: ["--count", "-n"],
              description: "The number of volumes to create",
              args: { name: "count", default: "1" },
            },
            {
              name: "--fs-type",
              description:
                "Filesystem of this volume. It must be either ext4 or raw. Default is ext4",
              hidden: true,
              args: {
                name: "fs-type",
                default: "ext4",
                suggestions: ["ext4", "raw"],
              },
            },
            hostDedicationIdOption,
            jsonOption,
            {
              name: "--no-encryption",
              description:
                "Do not encrypt the volume contents. Volume contents are encrypted by default",
            },
            regionOption,
            {
              name: "--require-unique-zone",
              description:
                "Place the volume in a separate hardware zone from existing volumes to help ensure availability",
            },
            {
              name: "--scheduled-snapshots",
              description: "Enable scheduled automatic snapshots",
            },
            {
              name: ["--size", "-s"],
              description: "The size of volume in gigabytes",
              args: { name: "size", default: "1" },
            },
            {
              name: "--snapshot-id",
              description: "Create the volume from the specified snapshot",
              args: { name: "snapshot-id" },
            },
            {
              name: "--snapshot-retention",
              description: "Snapshot retention in days",
              args: { name: "snapshot-retention", default: "5" },
            },
            {
              name: "--unique-zone-app-wide",
              description:
                "Checks all volumes in app for unique zone handling, instead of only volumes with the same name (which is the default)",
            },
            vmCpuKindOption,
            vmCpusOption,
            vmGpuKindOption,
            vmGpusOption,
            vmMaxMemoryOption,
            vmMemoryOption,
            vmSizeOption,
            yesOption,
          ],
        },
        {
          name: ["destroy", "delete", "rm"],
          description: "Destroy one or more volumes",
          args: { name: "volume-id", isVariadic: true },
          options: [appOption, configOption, yesOption],
        },
        {
          name: "extend",
          description: "Extend a volume to the specified size",
          args: { name: "volume-id" },
          options: [
            appOption,
            configOption,
            jsonOption,
            {
              name: ["--size", "-s"],
              description: "Target volume size in gigabytes",
              args: { name: "size" },
            },
            yesOption,
          ],
        },
        {
          name: "fork",
          description: "Fork the specified volume",
          args: { name: "volume-id" },
          options: [
            appOption,
            configOption,
            hostDedicationIdOption,
            jsonOption,
            {
              name: ["--name", "-n"],
              description: "The name of the new volume",
              args: { name: "name" },
            },
            {
              name: ["--region", "-r"],
              description:
                "The target region. By default, the new volume will be created in the source volume's region",
              args: { name: "region" },
            },
            {
              name: "--require-unique-zone",
              description:
                "Place the volume in a separate hardware zone from existing volumes. This is the default",
            },
            {
              name: "--unique-zone-app-wide",
              description:
                "Checks all volumes in app for unique zone handling, instead of only volumes with the same name (which is the default)",
            },
            vmCpuKindOption,
            vmCpusOption,
            vmGpuKindOption,
            vmGpusOption,
            vmMaxMemoryOption,
            vmMemoryOption,
            vmSizeOption,
          ],
        },
        {
          name: ["list", "ls"],
          description: "List the volumes associated with an app",
          options: [
            {
              name: "--all",
              description:
                "Show all volumes including those in destroyed states",
            },
            appOption,
            configOption,
            jsonOption,
          ],
        },
        {
          name: "show",
          description: "Show the details of the specified volume",
          args: { name: "volume-id" },
          options: [appOption, configOption, jsonOption],
        },
        {
          name: ["snapshots", "snapshot", "snaps"],
          description: "Manage volume snapshots",
          subcommands: [
            {
              name: "create",
              description: "Create a volume snapshot",
              args: { name: "volume-id" },
              options: [appOption, jsonOption],
            },
            {
              name: ["list", "ls"],
              description: "List snapshots",
              args: { name: "volume-id" },
              options: [appOption, jsonOption],
            },
          ],
        },
        {
          name: "update",
          description: "Update a volume for an app",
          args: { name: "volume-id" },
          options: [
            appOption,
            configOption,
            jsonOption,
            {
              name: "--scheduled-snapshots",
              description: "Activate/deactivate scheduled automatic snapshots",
            },
            {
              name: "--snapshot-retention",
              description: "Snapshot retention in days",
              args: { name: "snapshot-retention" },
            },
          ],
        },
      ],
    },
    {
      name: ["wireguard", "wg"],
      description: "Commands that manage WireGuard peer connections",
      subcommands: [
        {
          name: "create",
          description: "Add a WireGuard peer connection",
          args: [
            { name: "org", isOptional: true, generators: flyOrgsGenerator },
            { name: "region", isOptional: true },
            { name: "name", isOptional: true },
            { name: "file", isOptional: true, template: "filepaths" },
          ],
          options: [
            {
              name: "--network",
              description: "Custom network name",
              args: { name: "network" },
            },
          ],
        },
        {
          name: "list",
          description: "List all WireGuard peer connections",
          args: { name: "org", isOptional: true, generators: flyOrgsGenerator },
          options: [jsonOption],
        },
        {
          name: "remove",
          description: "Remove a WireGuard peer connection",
          args: [
            { name: "org", isOptional: true, generators: flyOrgsGenerator },
            { name: "name", isOptional: true },
          ],
        },
        {
          name: "reset",
          description: "Reset WireGuard peer connection for an organization",
          args: { name: "org", isOptional: true, generators: flyOrgsGenerator },
        },
        {
          name: "token-mode",
          description: "Enable or disable token-mode WireGuard peers",
          args: {
            name: "state",
            isOptional: true,
            suggestions: ["enable", "disable"],
          },
        },
        {
          name: "websockets",
          description: "Enable or disable WireGuard tunneling over WebSockets",
          args: {
            name: "state",
            isOptional: true,
            suggestions: ["enable", "disable"],
          },
        },
      ],
    },
  ],
  options: [
    {
      name: ["--access-token", "-t"],
      description: "Fly API Access Token",
      args: { name: "access-token" },
      isPersistent: true,
    },
    {
      name: "--debug",
      description: "Print additional logs and traces",
      isPersistent: true,
    },
    {
      name: ["--help", "-h"],
      description: "Help for the command",
      isPersistent: true,
    },
    { name: "--verbose", description: "Verbose output", isPersistent: true },
    {
      name: ["--version", "-v"],
      description: "Show version information for flyctl",
    },
  ],
};

export default completionSpec;
