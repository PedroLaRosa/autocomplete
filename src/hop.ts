// Hop CLI v0.2.61 (latest git tag of hopinc/hop_cli, released 2024-01-02; no newer release exists as of 2026-11-19,
// the project looks unmaintained). Source: hopinc/hop_cli at tag v0.2.61, clap derive definitions in src/commands/**
// and src/lib.rs, extracted statically with a script and checked by hand; the binary was not built or run.
// The release workflow builds with --all-features, so the `update` command and `completions` are included.
// The enum values of the ScalingStrategy, RestartPolicy, VolumeFs, GatewayType, GatewayProtocol and ChannelType
// arguments come from their FromStr/serde definitions. Webhook event names live in the external `hop` crate and
// are not suggested.

const scalingStrategies = ["manual", "autoscale"];
const ramSizes = [
  "128M",
  "256M",
  "512M",
  "1G",
  "2G",
  "4G",
  "8G",
  "16G",
  "32G",
  "64G",
];

const quietOption = (what: string): Fig.Option => ({
  name: ["--quiet", "-q"],
  description: `Only print the IDs of the ${what}`,
});

const forceOption: Fig.Option = {
  name: ["--force", "-f"],
  description: "Skip confirmation",
};

const noRolloutOption: Fig.Option = {
  name: "--no-rollout",
  description: "Do not roll out the changes, only build",
};

const deploymentArg = (description: string): Fig.Arg => ({
  name: "deployment",
  description,
  isOptional: true,
});

// Options shared by deploy, ignite new, ignite update and ignite templates (DeploymentConfig)
const deploymentConfigOptions: Fig.Option[] = [
  {
    name: ["--name", "-n"],
    description: "Name of the deployment",
    args: { name: "name" },
  },
  {
    name: ["--strategy", "-s"],
    description: "Scaling strategy, defaults to `autoscale`",
    args: { name: "strategy", suggestions: scalingStrategies },
  },
  {
    name: ["--tier", "-t"],
    description: "Tier of the deployment",
    args: { name: "tier" },
  },
  {
    name: ["--cpu", "-c"],
    description: "The number of CPUs to use, overrides the tier",
    args: { name: "cpus" },
  },
  {
    name: ["--ram", "-m"],
    description: "Amount of RAM to use, overrides the tier",
    args: { name: "ram", suggestions: ramSizes },
  },
  {
    name: ["--containers", "-d"],
    description:
      "Amount of containers to deploy if `scaling` is manual, defaults to 1",
    args: { name: "containers" },
  },
  {
    name: ["--env", "-e"],
    description: "Environment variables to set, in the form of `key=value`",
    isRepeatable: true,
    args: { name: "key=value" },
  },
  {
    name: ["--restart-policy", "-r"],
    description: "Restart policy, defaults to `on-failure`",
    args: {
      name: "policy",
      suggestions: ["never", "always", "on-failure"],
    },
  },
  {
    name: ["--volume-mount", "-v"],
    description: "Volume mount to use",
    args: { name: "path" },
  },
  {
    name: "--volume-size",
    description: "Size of the volume to use, defaults to 3GB",
    args: { name: "size" },
  },
  {
    name: "--volume-fs",
    description: "Type of the volume file system, defaults to `ext4`",
    args: { name: "file system", suggestions: ["ext4", "xfs"] },
  },
  {
    name: "--entrypoint",
    description: "Entrypoint to use",
    args: { name: "entrypoint" },
  },
  {
    name: "--command",
    description: "Command to use",
    args: { name: "command" },
  },
  {
    name: "--rm",
    description: "Make containers delete on exit",
  },
];

const imageOption: Fig.Option = {
  name: ["--image", "-i"],
  description: "Image url",
  args: { name: "image" },
};

const containersSubcommand: Fig.Subcommand = {
  name: ["containers", "container", "cts"],
  description: "Interact with Ignite containers",
  subcommands: [
    {
      name: ["new", "create"],
      description: "Create containers for a deployment",
      options: [
        {
          name: ["--deployment", "-d"],
          description: "ID of the deployment",
          args: { name: "deployment" },
        },
      ],
      args: {
        name: "count",
        description: "Number of containers to create",
        isOptional: true,
      },
    },
    {
      name: ["rm", "delete"],
      description: "Delete containers",
      options: [forceOption],
      args: {
        name: "containers",
        description: "IDs of the containers",
        isVariadic: true,
      },
    },
    {
      name: "recreate",
      description: "Recreate containers",
      options: [forceOption],
      args: {
        name: "containers",
        description: "IDs of the containers",
        isVariadic: true,
      },
    },
    {
      name: ["ls", "list"],
      description: "List all containers",
      options: [quietOption("deployments")],
      args: deploymentArg("ID of the deployment"),
    },
    {
      name: ["inspect", "info"],
      description: "Inspect a container",
      args: {
        name: "container",
        description: "ID of the container",
        isOptional: true,
      },
    },
    {
      name: ["metrics", "stats"],
      description: "Get metrics for a container",
      options: [
        {
          name: ["--follow", "-f"],
          description: "Show metrics in real time",
        },
      ],
      args: {
        name: "container",
        description: "ID of the container",
        isOptional: true,
      },
    },
    {
      name: ["logs", "log"],
      description: "Get logs of a container",
      options: [
        { name: ["--follow", "-f"], description: "Follow the logs" },
        {
          name: ["--lines", "-n"],
          description: "Number of lines to show (default 10)",
          args: { name: "lines" },
        },
        {
          name: ["--reverse", "-r"],
          description: "Show the newest entries first",
        },
        { name: ["--timestamps", "-t"], description: "Show timestamps" },
        { name: ["--details", "-d"], description: "Show details" },
      ],
      args: {
        name: "container",
        description: "ID of the container",
        isOptional: true,
      },
    },
  ],
};

const domainsSubcommand: Fig.Subcommand = {
  name: ["domains", "domain"],
  description: "Interact with domains",
  subcommands: [
    {
      name: ["attach", "new", "create"],
      description: "Attach a domain to a Gateway",
      args: [
        { name: "gateway", description: "ID of the Gateway", isOptional: true },
        { name: "domain", description: "Name of the domain", isOptional: true },
      ],
    },
    {
      name: ["ls", "list"],
      description: "List all domains attached to a Gateway",
      options: [
        { name: ["--quiet", "-q"], description: "Only display domain IDs" },
      ],
      args: {
        name: "gateway",
        description: "ID of the Gateway",
        isOptional: true,
      },
    },
    {
      name: ["rm", "del", "delete", "remove"],
      description: "Detach a domain from a Gateway",
      args: {
        name: "domain",
        description: "ID of the domain",
        isOptional: true,
      },
    },
  ],
};

const gatewayConfigOptions: Fig.Option[] = [
  {
    name: ["--name", "-n"],
    description: "Name of the Gateway",
    args: { name: "name" },
  },
  {
    name: ["--type", "-t"],
    description: "Type of the Gateway",
    args: { name: "type", suggestions: ["external", "internal"] },
  },
  {
    name: "--protocol",
    description: "Protocol of the Gateway",
    args: { name: "protocol", suggestions: ["http"] },
  },
  {
    name: "--target-port",
    description: "Port of the Gateway",
    args: { name: "port" },
  },
  {
    name: "--internal-domain",
    description: "Internal domain of the Gateway",
    args: { name: "domain" },
  },
];

const gatewaysSubcommand: Fig.Subcommand = {
  name: ["gateways", "gateway"],
  description: "Interact with Ignite Gateways",
  subcommands: [
    {
      name: ["new", "create"],
      description: "Create a Gateway",
      options: gatewayConfigOptions,
      args: deploymentArg("ID of the deployment"),
    },
    {
      name: ["rm", "delete"],
      description: "Delete gateways",
      options: [forceOption],
      args: {
        name: "gateways",
        description: "IDs of the gateways",
        isVariadic: true,
      },
    },
    {
      name: ["ls", "list"],
      description: "List all Gateways",
      options: [quietOption("deployments")],
      args: deploymentArg("ID of the deployment"),
    },
    {
      name: "update",
      description: "Update a Gateway",
      options: gatewayConfigOptions,
      args: {
        name: "gateway",
        description: "ID of the Gateway",
        isOptional: true,
      },
    },
    domainsSubcommand,
  ],
};

const tunnelSubcommand: Fig.Subcommand = {
  name: ["tunnel", "fwd", "forward"],
  description: "Access your application via a tunnel",
  options: [
    {
      name: "--publish",
      description: "Publish a container's port(s) to the host",
      args: { name: "port mapping" },
    },
    {
      name: "--hosts",
      description: "Add an entry to your hosts file with the tunnel domain",
    },
  ],
  args: {
    name: "deployment",
    description: "Resource to tunnel to, can be a deployment name or ID",
    isOptional: true,
  },
};

const fromComposeSubcommand: Fig.Subcommand = {
  name: ["from-compose", "compose"],
  description: "Creates new Ignite deployments from a Docker compose file",
  args: {
    name: "file",
    description: "The file to read from, defaults to docker-compose.yml",
    isOptional: true,
    template: "filepaths",
  },
};

const completionSpec: Fig.Spec = {
  name: "hop",
  description: "Interact with Hop in your terminal",
  subcommands: [
    {
      name: "auth",
      description: "Authenticate with Hop",
      subcommands: [
        {
          name: ["ls", "list"],
          description: "List all authenticated users",
          options: [quietOption("authorized users")],
        },
        {
          name: "login",
          description: "Login to Hop",
          options: [
            {
              name: "--token",
              description:
                "Project Token or Personal Authorization Token, you can use `--token=` to take the token from stdin",
              args: { name: "token" },
            },
            {
              name: "--email",
              description: "Email",
              args: { name: "email" },
            },
            {
              name: "--password",
              description:
                "Password, you can use `--password=` to take the token from stdin",
              args: { name: "password" },
            },
          ],
        },
        {
          name: "logout",
          description: "Logout the current user",
        },
        {
          name: "switch",
          description: "Switch to a different user",
        },
        {
          name: ["docker", "registry"],
          description: "Authenticate the current user with Docker",
        },
        {
          name: "help",
          description:
            "Prints this message or the help of the given subcommand(s)",
        },
      ],
    },
    {
      name: "backup",
      description: "Backup files from a deployment to local machine",
      args: {
        name: "source",
        description: "Deployment name or ID",
      },
    },
    {
      name: ["channels", "channel", "ch"],
      description: "Interact with Channels",
      subcommands: [
        {
          name: ["new", "create"],
          description: "Create a new Channel",
          options: [
            {
              name: ["--id", "-i"],
              description: "Custom ID for the channel",
              args: { name: "id" },
            },
            {
              name: ["--type", "-t"],
              description: "Type of the channel",
              args: {
                name: "type",
                suggestions: ["public", "private", "unprotected"],
              },
            },
            {
              name: ["--state", "-s"],
              description:
                "Initial state of the channel, any non-null JSON value",
              args: { name: "json" },
            },
          ],
        },
        {
          name: ["ls", "list"],
          description: "List all Channels",
          options: [quietOption("Channels")],
        },
        {
          name: ["rm", "delete"],
          description: "Delete Channels",
          options: [forceOption],
          args: {
            name: "channels",
            description: "IDs of the Channels",
            isVariadic: true,
          },
        },
        {
          name: ["tokens", "token"],
          description: "Interact with Channel Tokens",
          subcommands: [
            {
              name: ["new", "create"],
              description: "Create a new Leap Token",
              options: [
                {
                  name: ["--expiration", "-e"],
                  description:
                    "Expiration date of the token, can be a date (DD/MM/YYYY, DD-MM-YYYY) or a duration (60s, 1d, 30d, 1y)",
                  args: { name: "expiration" },
                },
                {
                  name: ["--state", "-s"],
                  description:
                    "Initial state of the token, can be any JSON value",
                  args: { name: "json" },
                },
              ],
            },
            {
              name: ["ls", "list"],
              description: "List all Leap Tokens",
              options: [quietOption("Tokens")],
            },
            {
              name: ["rm", "delete"],
              description: "Delete Leap Tokens",
              options: [forceOption],
              args: {
                name: "tokens",
                description: "IDs of the Leap Tokens",
                isVariadic: true,
              },
            },
            {
              name: ["messages", "send", "msg"],
              description: "Send a message to a Leap Token",
              options: [
                {
                  name: ["--token", "-t"],
                  description: "The ID of the Token to send the message to",
                  args: { name: "token" },
                },
                {
                  name: "--event",
                  description: "Event name to send",
                  args: { name: "event" },
                },
                {
                  name: "--data",
                  description: "Event data to send, any JSON value",
                  args: { name: "json" },
                },
              ],
            },
          ],
        },
        {
          name: ["message", "send", "msg"],
          description: "Send a message to a Channel",
          options: [
            {
              name: ["--channel", "-c"],
              description: "The ID of the Channel to send the message to",
              args: { name: "channel" },
            },
            {
              name: "--event",
              description: "Event name to send",
              args: { name: "event" },
            },
            {
              name: "--data",
              description: "Event data to send, any JSON value",
              args: { name: "json" },
            },
          ],
        },
        {
          name: ["subscribe", "sub", "ts"],
          description: "Subscribe a Leap Token to a Channel",
          options: [
            {
              name: ["--channel", "-c"],
              description: "The ID of the Channel to subscribe to",
              args: { name: "channel" },
            },
            {
              name: ["--token", "-t"],
              description:
                "The ID of the Leap Token to subscribe to the Channel",
              args: { name: "token" },
            },
          ],
        },
      ],
    },
    {
      name: ["completions", "complete"],
      description: "Generate completion scripts for the specified shell",
      args: {
        name: "shell",
        description: "The shell to print the completion script for",
        suggestions: ["bash", "elvish", "fish", "powershell", "zsh"],
      },
    },
    containersSubcommand,
    {
      name: "deploy",
      description: "Deploy a new container",
      options: [
        ...deploymentConfigOptions,
        {
          name: ["--env-file", "-E"],
          description:
            "Load environment variables from a .env file in the current directory, in the form of KEY=VALUE",
        },
        {
          name: ["--yes", "-y"],
          description: "Use the default yes answer to all prompts",
        },
        {
          name: ["--local", "-l"],
          description:
            "Build the container locally using nixpacks or docker instead of using the builder",
        },
        noRolloutOption,
      ],
      args: {
        name: "dir",
        description: "Directory to deploy, defaults to current directory",
        isOptional: true,
        template: "folders",
      },
    },
    domainsSubcommand,
    fromComposeSubcommand,
    gatewaysSubcommand,
    {
      name: "help",
      description: "Prints this message or the help of the given subcommand(s)",
      args: {
        name: "command",
        template: "help",
      },
    },
    {
      name: "ignite",
      description: "Interact with Ignite deployments",
      subcommands: [
        {
          name: ["new", "create"],
          description: "Create a new deployment",
          options: [...deploymentConfigOptions, imageOption],
        },
        {
          name: ["ls", "list"],
          description: "List all deployments",
          options: [quietOption("deployments")],
        },
        {
          name: ["rm", "delete"],
          description: "Delete a deployment",
          options: [forceOption],
          args: deploymentArg("ID of the deployment to delete"),
        },
        {
          name: "update",
          description: "Update a deployment",
          options: [...deploymentConfigOptions, imageOption, noRolloutOption],
          args: deploymentArg("ID of the deployment to update"),
        },
        {
          name: ["inspect", "info"],
          description: "Inspect a deployment",
          args: deploymentArg("The ID or name of the deployment"),
        },
        {
          name: ["rollout", "rollouts"],
          description: "Rollout new containers to a deployment",
          args: deploymentArg("ID of the deployment"),
        },
        {
          name: "scale",
          description: "Scale a deployment",
          args: [
            deploymentArg("ID of the deployment to scale"),
            {
              name: "scale",
              description: "Number of replicas to scale to",
              isOptional: true,
            },
          ],
        },
        {
          name: "get-env",
          description: "Get current deployments env values",
          args: deploymentArg("ID of the deployment to get env values"),
        },
        fromComposeSubcommand,
        {
          name: ["health", "check"],
          description: "Interact with Ignite Health Checks",
          subcommands: [
            {
              name: ["new", "create"],
              description: "Create Health Checks for a deployment",
              options: [
                {
                  name: "--port",
                  description: "Port to check",
                  args: { name: "port" },
                },
                {
                  name: "--path",
                  description: "Path to check",
                  args: { name: "path" },
                },
                {
                  name: "--interval",
                  description: "Interval to check",
                  args: { name: "interval" },
                },
                {
                  name: "--timeout",
                  description: "Timeout to check",
                  args: { name: "timeout" },
                },
                {
                  name: "--max-retries",
                  description: "Max retries of the check",
                  args: { name: "retries" },
                },
                {
                  name: "--initial-delay",
                  description: "Initial delay of the check",
                  args: { name: "delay" },
                },
              ],
              args: deploymentArg("ID of the deployment"),
            },
            {
              name: ["state", "status"],
              description: "Get the state of the Health Checks of a deployment",
              args: deploymentArg("ID of the Deployment"),
            },
            {
              name: ["rm", "delete"],
              description: "Delete a Health Check",
              options: [forceOption],
              args: {
                name: "health checks",
                description: "IDs of the Health Check",
                isVariadic: true,
              },
            },
            {
              name: ["ls", "list"],
              description: "List Health Checks in a deployment",
              options: [quietOption("Health Checks")],
              args: deploymentArg("ID of the deployment"),
            },
          ],
        },
        {
          name: ["builds", "build"],
          description: "Interact with Ignite Builds",
          subcommands: [
            {
              name: ["ls", "list"],
              description: "List all builds in a deployment",
              options: [quietOption("builds")],
              args: deploymentArg("ID of the deployment"),
            },
            {
              name: ["cancel", "stop"],
              description: "Cancel a running build",
              options: [forceOption],
              args: {
                name: "build",
                description: "ID of the build",
                isOptional: true,
              },
            },
          ],
        },
        {
          name: ["groups", "gr"],
          description: "Manage groups",
          subcommands: [
            {
              name: ["new", "create"],
              description: "Create a new Ignite group",
              options: [
                {
                  name: ["--deployments", "-d"],
                  description: "The deployments to add to the group",
                  isRepeatable: true,
                  args: { name: "deployment" },
                },
              ],
              args: {
                name: "name",
                description: "The name of the group",
                isOptional: true,
              },
            },
            {
              name: ["rm", "delete"],
              description: "Delete an Ignite group",
              args: {
                name: "group",
                description: "The ID of the group",
                isOptional: true,
              },
            },
            {
              name: ["move", "add-deployment", "add"],
              description: "Move a Deployment to a group",
              args: [
                {
                  name: "group",
                  description:
                    'The ID of the group, or "none" to remove from a group',
                  isOptional: true,
                },
                {
                  name: "deployment",
                  description: "Deployment ID to add",
                  isOptional: true,
                },
              ],
            },
            {
              name: "list",
              description: "List all Ignite groups",
              options: [quietOption("deployments")],
            },
          ],
        },
        {
          name: ["promote", "rollback"],
          description: "Rollback containers in a deployment",
          args: [
            deploymentArg("ID of the deployment"),
            {
              name: "build",
              description: "ID of the build to rollback to",
              isOptional: true,
            },
          ],
        },
        {
          name: ["templates", "template"],
          description: "Create a new deployment from a template",
          options: deploymentConfigOptions,
          args: {
            name: "template",
            description: "Name of the template to use",
            isOptional: true,
          },
        },
        containersSubcommand,
        gatewaysSubcommand,
        tunnelSubcommand,
      ],
    },
    {
      name: "link",
      description: "Link an existing deployment to a hopfile",
      args: [
        {
          name: "dir",
          description: "Directory to link, defaults to current directory",
          isOptional: true,
          template: "folders",
        },
        deploymentArg("ID of the deployment"),
      ],
    },
    {
      name: "oops",
      description: "Instantly roll back your deployment to a previous build",
      args: deploymentArg("ID of the deployment"),
    },
    {
      name: ["payment", "payments", "finance", "finances", "billing"],
      description: "Manage payments",
      subcommands: [
        {
          name: ["ls", "list"],
          description: "List all payment methods",
          options: [quietOption("payment methods")],
        },
        {
          name: "due",
          description: "Check how much is due for a payment method(s)",
          args: {
            name: "payment methods",
            description:
              "The ID(s) of the payment method(s), if not provided all payment methods will be used",
            isOptional: true,
            isVariadic: true,
          },
        },
      ],
    },
    {
      name: ["projects", "project"],
      description: "Interact with projects",
      subcommands: [
        {
          name: ["new", "create"],
          description: "Create a new project",
          options: [
            {
              name: ["--default", "-d"],
              description: "Set as default project",
            },
          ],
          args: [
            {
              name: "namespace",
              description: "Namespace of the project",
              isOptional: true,
            },
            {
              name: "name",
              description: "Name of the project",
              isOptional: true,
            },
          ],
        },
        {
          name: "switch",
          description: "Switch to a different project",
          args: {
            name: "project",
            description: "Namespace or ID of the project to use",
            isOptional: true,
          },
        },
        {
          name: "info",
          description: "Get information about a project",
        },
        {
          name: ["ls", "list"],
          description: "List all projects",
          options: [quietOption("projects")],
        },
        {
          name: ["rm", "delete"],
          description: "Delete a project",
          options: [forceOption],
          args: {
            name: "project",
            description: "Namespace or ID of the project",
            isOptional: true,
          },
        },
      ],
    },
    {
      name: ["secrets", "secret"],
      description: "Interact with secrets",
      subcommands: [
        {
          name: ["set", "create", "update", "new"],
          description: "Set a secret",
          args: [
            { name: "name", description: "Name of the secret" },
            { name: "value", description: "Value of the secret" },
          ],
        },
        {
          name: ["ls", "list"],
          description: "List all secrets",
          options: [quietOption("secrets")],
        },
        {
          name: ["rm", "del", "delete", "remove"],
          description: "Delete a secret",
          options: [forceOption],
          args: {
            name: "name",
            description: "Name of the secret",
            isOptional: true,
          },
        },
      ],
    },
    tunnelSubcommand,
    {
      name: "update",
      description: "Update Hop to the latest version",
      options: [
        { name: ["--force", "-f"], description: "Force update" },
        {
          name: ["--beta", "-b"],
          description: "Update to beta version (if available)",
        },
      ],
    },
    {
      name: ["volumes", "volume", "v"],
      description: "Interact with Volumes",
      subcommands: [
        {
          name: ["ls", "list", "dir"],
          description: "List information about files",
          options: [
            {
              name: ["--long", "-l"],
              description: "Use a long listing format",
            },
            {
              name: ["--all", "-a"],
              description: "Do not ignore entries starting with a dot",
            },
          ],
          args: {
            name: "paths",
            description:
              "The path(s) to list, in the format <deployment name or id>:<path>",
            isVariadic: true,
          },
        },
        {
          name: ["cp", "copy"],
          description: "Copy files between volumes and local machine",
          args: [
            {
              name: "source",
              description:
                "Source, in the format <deployment name or id>:/<path> or <path> if local",
            },
            {
              name: "target",
              description:
                "Target, in the format <deployment name or id>:/<path> or <path> if local",
            },
          ],
        },
        {
          name: ["rm", "delete"],
          description: "Delete files",
          args: {
            name: "paths",
            description:
              "The path(s) to delete, in the format <deployment name or id>:<path>",
            isVariadic: true,
          },
        },
        {
          name: ["mv", "move"],
          description: "Move files",
          args: [
            { name: "source", description: "The path to move" },
            { name: "target", description: "The path to move to" },
          ],
        },
        {
          name: "mkdir",
          description: "Create directories",
          options: [
            {
              name: ["--recursive", "-r"],
              description: "Create recursive directories if they do not exist",
            },
          ],
          args: {
            name: "paths",
            description:
              "The path(s) to create, in the format <deployment name or id>:<path>",
            isVariadic: true,
          },
        },
        {
          name: "backup",
          description: "Backup files from a deployment to local machine",
          args: {
            name: "source",
            description: "Deployment name or ID",
          },
        },
      ],
    },
    {
      name: ["webhooks", "webhook", "wh"],
      description: "Manage webhooks",
      subcommands: [
        {
          name: ["ls", "list"],
          description: "List webhooks",
          options: [quietOption("webhooks")],
        },
        {
          name: ["new", "create", "add"],
          description: "Create a new webhook",
          options: [
            {
              name: ["--events", "-e"],
              description: "The events to send the webhook on",
              isRepeatable: true,
              args: { name: "event" },
            },
          ],
          args: {
            name: "url",
            description: "The url to send the webhook to",
            isOptional: true,
          },
        },
        {
          name: ["update", "edit"],
          description: "Update a webhook",
          options: [
            {
              name: ["--id", "-i"],
              description: "The id of the webhook",
              args: { name: "id" },
            },
            {
              name: ["--url", "-u"],
              description: "The url to send the webhook to",
              args: { name: "url" },
            },
            {
              name: ["--events", "-e"],
              description: "The events to send the webhook on",
              isRepeatable: true,
              args: { name: "event" },
            },
          ],
        },
        {
          name: ["rm", "delete", "del"],
          description: "Delete a webhook",
          options: [
            {
              name: ["--id", "-i"],
              description: "The id of the webhook",
              args: { name: "id" },
            },
          ],
        },
        {
          name: ["regenerate", "regen"],
          description: "Regenerate a webhook secret",
          options: [
            {
              name: ["--id", "-i"],
              description: "The id of the webhook",
              args: { name: "id" },
            },
          ],
        },
      ],
    },
    {
      name: ["whoami", "info", "ctx"],
      description: "Get information about the current user",
    },
  ],
  options: [
    {
      name: ["--help", "-h"],
      description: "Prints help information",
      isPersistent: true,
    },
    {
      name: ["--version", "-V"],
      description: "Prints version information",
    },
    {
      name: ["--project", "-p"],
      description: "Namespace or ID of the project to use",
      isPersistent: true,
      args: { name: "project" },
    },
    {
      name: ["--debug", "-D"],
      description: "Enable debug mode",
      isPersistent: true,
    },
  ],
};
export default completionSpec;
