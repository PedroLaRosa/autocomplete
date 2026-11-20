// Kool v3.9.0 (GitHub release kool-dev/kool tag 3.9.0, 2026-11-20). Source: shallow clone of tag 3.9.0, read
// statically (cobra definitions in commands/*.go and the generated docs/05-Commands-Reference); the binary was not run.
// The pre-3.0 top-level `kool deploy` was replaced upstream by `kool cloud`.

const getScripts: Fig.Generator = {
  script: ["kool", "run", "--help"],
  postProcess: (output) => {
    const lines = output.split("\n");
    const scriptsIndex = lines.findIndex(
      (line) => line.trim() === "Available Scripts:"
    );

    return lines.slice(scriptsIndex + 1).map((line) => ({
      name: line.trim(),
      description: "Script",
    }));
  },
};

const getServices: Fig.Generator = {
  script: ["docker-compose", "config", "--services"],
  splitOn: "\n",
};

const envOption: Fig.Option = {
  name: ["--env", "-e"],
  description: "Environment variables",
  isRepeatable: true,
  args: { name: "env" },
};

const tailOption: Fig.Option = {
  name: ["--tail", "-t"],
  description:
    "Number of lines to show from the end of the logs for each container. A value equal to 0 will show all lines",
  args: { name: "tail", default: "25" },
};

const followOption: Fig.Option = {
  name: ["--follow", "-f"],
  description: "Follow log output",
};

const containerOption: Fig.Option = {
  name: ["--container", "-c"],
  description: "Container target",
  args: { name: "container", default: "default" },
};

const purgeOption: Fig.Option = {
  name: "--purge",
  description: "Remove all persistent data from volume mounts on containers",
};

const rebuildDescription = "Updates and builds service's images";

const answersOptions: Fig.Option[] = [
  {
    name: ["--answer", "-a"],
    description:
      "Answer to a preset question as REF=value (comma separate multiple choices)",
    isRepeatable: true,
    args: { name: "answer" },
  },
  {
    name: ["--no-interaction", "-n"],
    description:
      "Fail on any preset question without an answer instead of prompting",
  },
];

const completionSpec: Fig.Spec = {
  name: "kool",
  description: "Cloud native environments made easy",
  subcommands: [
    {
      name: "cloud",
      description: "Interact with Kool.dev Cloud and manage your deployments",
      options: [
        {
          name: "--domain",
          description: "Environment domain name to deploy to",
          isPersistent: true,
          args: { name: "domain" },
        },
        {
          name: "--token",
          description: "Token to authenticate with Kool.dev Cloud API",
          isPersistent: true,
          args: { name: "token" },
        },
      ],
      subcommands: [
        {
          name: "deploy",
          description:
            "Deploy a local application to a Kool.dev Cloud environment",
          options: [
            {
              name: "--domain-extra",
              description: "List of extra domain aliases",
              isRepeatable: true,
              args: { name: "domain" },
            },
            {
              name: "--platform",
              description: "Platform for docker build",
              args: { name: "platform", default: "linux/amd64" },
            },
            {
              name: "--timeout",
              description:
                "Timeout in minutes for waiting the deployment to finish",
              args: { name: "minutes" },
            },
            {
              name: "--www-redirect",
              description: "Redirect www to non-www domain",
            },
          ],
        },
        {
          name: "destroy",
          description: "Destroy an environment deployed to Kool.dev Cloud",
        },
        {
          name: "exec",
          description:
            "Execute a command inside a running service container deployed to Kool.dev Cloud",
          parserDirectives: { optionsMustPrecedeArguments: true },
          options: [containerOption],
          args: [
            {
              name: "service",
              description: "Service you want to execute a command",
            },
            {
              name: "command",
              description: "Command to execute inside the container",
              isOptional: true,
              isVariadic: true,
            },
          ],
        },
        {
          name: "logs",
          description:
            "See the logs of running service container deployed to Kool.dev Cloud",
          options: [containerOption, followOption, tailOption],
          args: {
            name: "service",
            description: "Service to get logs from",
          },
        },
        {
          name: "setup",
          description: "Set up local configuration files for deployment",
        },
      ],
    },
    {
      name: "completion",
      description: "Generate shell completion configuration script",
      hidden: true,
      args: {
        name: "shell",
        suggestions: ["bash", "zsh", "fish", "powershell"],
      },
    },
    {
      name: "create",
      description: "Create a new project using a preset",
      options: answersOptions,
      args: [
        {
          name: "preset",
          description: "Preset that will be used to create the project",
          isOptional: true,
        },
        {
          name: "folder",
          description: "Folder where the project will be created",
          isOptional: true,
          template: "folders",
        },
      ],
    },
    {
      name: "docker",
      description: "Create a new container (a powered up 'docker run')",
      parserDirectives: { optionsMustPrecedeArguments: true },
      options: [
        envOption,
        {
          name: ["--network", "-n"],
          description: "Connect a container to a network",
          isRepeatable: true,
          args: { name: "network" },
        },
        {
          name: ["--publish", "-p"],
          description: "Publish a container's port(s) to the host",
          isRepeatable: true,
          args: { name: "publish" },
        },
        {
          name: ["--user", "-u"],
          description:
            "Username or UID (format: <name|uid>[:<group|gid>]) to run the container as",
          args: { name: "user" },
        },
        {
          name: ["--volume", "-v"],
          description: "Bind mount a volume",
          isRepeatable: true,
          args: { name: "volume" },
        },
      ],
      args: [
        {
          name: "image",
          description: "Docker image",
        },
        {
          name: "command",
          description: "Command to execute inside the container",
          isOptional: true,
          isVariadic: true,
        },
      ],
    },
    {
      name: "exec",
      description: "Execute a command inside a running service container",
      parserDirectives: { optionsMustPrecedeArguments: true },
      options: [
        {
          name: ["--detach", "-d"],
          description: "Detached mode: Run command in the background",
        },
        envOption,
      ],
      args: [
        {
          name: "service",
          description: "Service you want to execute a command",
        },
        {
          name: "command",
          description: "Command to execute inside the container",
          isVariadic: true,
        },
      ],
    },
    {
      name: "info",
      description: "Print out information about the local environment",
    },
    {
      name: "logs",
      description: "Display log output from running service containers",
      options: [followOption, tailOption],
      args: {
        name: "service",
        description: "Service to get logs from",
        isOptional: true,
        isVariadic: true,
      },
    },
    {
      name: "preset",
      description:
        "Install configuration files customized for Kool in the current directory",
      options: answersOptions,
      args: {
        name: "preset",
        description: "Preset that will be used to configure the project",
        isOptional: true,
      },
    },
    {
      name: "proxy",
      description: "Manage Kool's local proxy",
      subcommands: [
        {
          name: "aliases",
          description:
            "List configured internal proxy aliases for the current project",
        },
        {
          name: "trust",
          description: "Trust the local proxy certificate authority",
        },
      ],
    },
    {
      name: "recipe",
      description:
        "Adds configuration for some recipe in the current work directory",
      args: {
        name: "recipe",
        description: "Recipe that will be used to add configuration",
        isOptional: true,
      },
    },
    {
      name: "restart",
      description:
        "Restart running service containers (the same as 'kool stop' followed by 'kool start')",
      options: [
        purgeOption,
        {
          name: "--rebuild",
          description: rebuildDescription,
        },
      ],
      args: {
        name: "service",
        description: "Service you want to restart",
        isOptional: true,
        isVariadic: true,
        generators: getServices,
      },
    },
    {
      name: "run",
      description: "Execute a script defined in kool.yml",
      parserDirectives: { optionsMustPrecedeArguments: true },
      options: [envOption],
      args: [
        {
          name: "script",
          description: "Script to be executed",
          generators: getScripts,
        },
        {
          name: "arg",
          description: "Arguments passed to a single-line script",
          isOptional: true,
          isVariadic: true,
        },
      ],
    },
    {
      name: "self-update",
      description: "Update kool to the latest version",
    },
    {
      name: "share",
      description:
        "Live share your local environment on the Internet using an HTTP tunnel",
      options: [
        {
          name: "--port",
          description:
            "The port from the target service that should be shared. If not provided, it will default to port 80",
          args: { name: "port", default: "0" },
        },
        {
          name: "--service",
          description:
            "The name of the local service container you want to share",
          args: { name: "service", default: "app" },
        },
        {
          name: "--subdomain",
          description:
            "The subdomain used to generate your public https://subdomain.kool.live URL",
          args: { name: "subdomain" },
        },
      ],
    },
    {
      name: "start",
      description: "Start service containers defined in docker-compose.yml",
      options: [
        {
          name: ["--foreground", "-f"],
          description: "Start containers in foreground mode",
        },
        {
          name: "--profile",
          description: "Specify a profile to enable",
          args: { name: "profile" },
        },
        {
          name: ["--rebuild", "-b"],
          description: rebuildDescription,
        },
      ],
      args: {
        name: "service",
        description: "Service you want to start",
        isOptional: true,
        isVariadic: true,
        generators: getServices,
      },
    },
    {
      name: "status",
      description: "Show the status of all service containers",
    },
    {
      name: "stop",
      description: "Stop and destroy running service containers",
      options: [purgeOption],
      args: {
        name: "service",
        description: "Service you want to stop",
        isOptional: true,
        isVariadic: true,
        generators: getServices,
      },
    },
  ],
  options: [
    {
      name: "--output",
      description:
        "Output format: json (machine-readable). For 'kool run', place before the script name",
      isPersistent: true,
      args: { name: "format", suggestions: ["json", "text"] },
    },
    {
      name: "--verbose",
      description: "Increases output verbosity",
      isPersistent: true,
    },
    {
      name: ["--working_dir", "-w"],
      description: "Changes the working directory for the command",
      isPersistent: true,
      args: { name: "dir", template: "folders" },
    },
    {
      name: ["--help", "-h"],
      description: "Help for kool",
      isPersistent: true,
    },
    {
      name: ["--version", "-v"],
      description: "Version for kool",
    },
  ],
};

export default completionSpec;
