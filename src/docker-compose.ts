// Docker Compose v5.8.0 (gh release view -R docker/compose, 2026-11-19). Source: docs/reference/*.yaml and cmd/compose at v5.8.0
const getComposeCommand = (tokens: string[]) =>
  tokens[0] === "docker" ? ["docker", "compose"] : ["docker-compose"];

const extractFileArgs = (tokens: string[]): string[] => {
  const files: string[] = [];
  for (let i = 0; i < tokens.length - 1; i++) {
    if (tokens[i] === "-f") {
      files.push(tokens[i + 1]);
      i += 1;
    }
  }
  return files.flatMap((f) => ["-f", f]);
};

const servicesGenerator: Fig.Generator = {
  script: (tokens) => {
    const compose = getComposeCommand(tokens);
    const fileArgs = extractFileArgs(tokens);
    return [...compose, ...fileArgs, "config", "--services"];
  },
  splitOn: "\n",
};

const profilesGenerator: Fig.Generator = {
  script: (tokens) => {
    const compose = getComposeCommand(tokens);
    const fileArgs = extractFileArgs(tokens);
    return [...compose, ...fileArgs, "config", "--profiles"];
  },
  splitOn: "\n",
};

const servicesArg: Fig.Arg = {
  name: "service",
  isVariadic: true,
  isOptional: true,
  generators: servicesGenerator,
};

const indexOption: Fig.Option = {
  name: "--index",
  description: "Index of the container if service has multiple replicas",
  args: { name: "index" },
};

const removeOrphansOption: Fig.Option = {
  name: "--remove-orphans",
  description: "Remove containers for services not defined in the Compose file",
};

const quietPullOption: Fig.Option = {
  name: "--quiet-pull",
  description: "Pull without printing progress information",
};

const yesOption: Fig.Option = {
  name: ["--yes", "-y"],
  description:
    'Assume "yes" as answer to all prompts and run non-interactively',
};

const pullPolicyOption = (policies: string[]): Fig.Option => ({
  name: "--pull",
  description: "Pull image before running",
  args: { name: "policy", suggestions: policies },
});

const scaleOption: Fig.Option = {
  name: "--scale",
  description:
    "Scale SERVICE to NUM instances. Overrides the `scale` setting in the Compose file if present",
  isRepeatable: true,
  args: { name: "service=num", generators: servicesGenerator },
};

const waitTimeoutOption: Fig.Option = {
  name: "--wait-timeout",
  description:
    "Maximum duration in seconds to wait for the project to be running|healthy",
  args: { name: "seconds" },
};

const formatOption = (description: string): Fig.Option => ({
  name: "--format",
  description,
  args: { name: "format", default: "table", suggestions: ["table", "json"] },
});

const completionSpec: Fig.Spec = {
  name: "docker-compose",
  description: "Define and run multi-container applications with Docker",
  subcommands: [
    {
      name: "alpha",
      description: "Experimental commands",
      hidden: true,
      subcommands: [
        {
          name: "generate",
          description:
            "EXPERIMENTAL - Generate a Compose file from existing containers",
          args: { name: "containers", isVariadic: true, isOptional: true },
          options: [
            {
              name: "--format",
              description: "Format the output",
              args: {
                name: "format",
                default: "yaml",
                suggestions: ["yaml", "json"],
              },
            },
            {
              name: "--name",
              description: "Project name to set in the Compose file",
              args: { name: "name" },
            },
            {
              name: "--project-dir",
              description: "Directory to use for the project",
              args: { name: "dir", template: "folders" },
            },
          ],
        },
        {
          name: "viz",
          description:
            "EXPERIMENTAL - Generate a graphviz graph from your compose file",
          options: [
            {
              name: "--image",
              description: "Include service's image name in output graph",
            },
            {
              name: "--indentation-size",
              description: "Number of tabs or spaces to use for indentation",
              args: { name: "size", default: "1" },
            },
            {
              name: "--networks",
              description:
                "Include service's attached networks in output graph",
            },
            {
              name: "--ports",
              description: "Include service's exposed ports in output graph",
            },
            {
              name: "--spaces",
              description: "Indent with spaces instead of tabs",
            },
          ],
        },
      ],
    },
    {
      name: "attach",
      description:
        "Attach local standard input, output, and error streams to a service's running container",
      args: { name: "service", generators: servicesGenerator },
      options: [
        {
          name: "--detach-keys",
          description:
            "Override the key sequence for detaching from a container",
          args: { name: "keys" },
        },
        indexOption,
        { name: "--no-stdin", description: "Do not attach STDIN" },
        {
          name: "--sig-proxy",
          description: "Proxy all received signals to the process",
        },
      ],
    },
    {
      name: "bridge",
      description: "Convert compose files into another model",
      subcommands: [
        {
          name: "convert",
          description:
            "Convert compose files to Kubernetes manifests, Helm charts, or another model",
          options: [
            {
              name: ["--output", "-o"],
              description: "The output directory for the Kubernetes resources",
              args: { name: "dir", default: "out", template: "folders" },
            },
            {
              name: "--templates",
              description: "Directory containing transformation templates",
              args: { name: "dir", template: "folders" },
            },
            {
              name: ["--transformation", "-t"],
              description:
                "Transformation to apply to compose model (default: docker/compose-bridge-kubernetes)",
              isRepeatable: true,
              args: { name: "transformation" },
            },
            {
              name: ["--yes", "-y"],
              description:
                'Assume "yes" to the output directory overwrite prompt',
            },
          ],
        },
        {
          name: "transformations",
          description: "Manage transformation images",
          subcommands: [
            {
              name: "create",
              description: "Create a new transformation",
              args: { name: "path", template: "folders" },
              options: [
                {
                  name: ["--from", "-f"],
                  description:
                    "Existing transformation to copy (default: docker/compose-bridge-kubernetes)",
                  args: { name: "transformation" },
                },
              ],
            },
            {
              name: ["list", "ls"],
              description: "List available transformations",
              options: [
                formatOption("Format the output"),
                {
                  name: ["--quiet", "-q"],
                  description: "Only display transformer names",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "build",
      description: "Build or rebuild services",
      args: {
        name: "services",
        isVariadic: true,
        isOptional: true,
        generators: servicesGenerator,
      },
      options: [
        {
          name: "--build-arg",
          description: "Set build-time variables for services",
          isRepeatable: true,
          args: {
            name: "key=value",
          },
        },
        {
          name: "--builder",
          description: "Set builder to use",
          args: { name: "builder" },
        },
        {
          name: "--check",
          description: "Check build configuration",
        },
        {
          name: "--compress",
          description: "Compress the build context using gzip. DEPRECATED",
          hidden: true,
          deprecated: true,
        },
        {
          name: "--force-rm",
          description: "Always remove intermediate containers. DEPRECATED",
          hidden: true,
          deprecated: true,
        },
        {
          name: ["--memory", "-m"],
          description:
            "Set memory limit for the build container. Not supported by BuildKit",
          args: {
            name: "memory",
          },
        },
        {
          name: "--no-cache",
          description: "Do not use cache when building the image",
        },
        {
          name: "--no-rm",
          description:
            "Do not remove intermediate containers after a successful build. DEPRECATED",
          hidden: true,
          deprecated: true,
        },
        {
          name: "--parallel",
          description: "Build images in parallel. DEPRECATED",
          deprecated: true,
          hidden: true,
        },
        {
          name: "--print",
          description: "Print equivalent bake file",
        },
        {
          name: "--progress",
          description:
            "Set type of ui output. DEPRECATED: use the global --progress",
          hidden: true,
          deprecated: true,
          args: {
            name: "progress",
            suggestions: ["auto", "tty", "plain", "json", "quiet"],
          },
        },
        {
          name: "--provenance",
          description: "Add a provenance attestation",
          args: { name: "provenance" },
        },
        {
          name: "--pull",
          description: "Always attempt to pull a newer version of the image",
        },
        {
          name: "--push",
          description: "Push service images",
        },
        {
          name: ["--quiet", "-q"],
          description: "Suppress the build output",
        },
        {
          name: "--sbom",
          description: "Add a SBOM attestation",
          args: { name: "sbom" },
        },
        {
          name: "--ssh",
          description:
            "Set SSH authentications used when building service images. (use 'default' for using your default SSH Agent)",
          args: {
            name: "ssh",
          },
        },
        {
          name: "--with-dependencies",
          description: "Also build dependencies (transitively)",
        },
      ],
    },
    {
      name: "commit",
      description: "Create a new image from a service container's changes",
      args: [
        { name: "service", generators: servicesGenerator },
        { name: "repository[:tag]", isOptional: true },
      ],
      options: [
        {
          name: ["--author", "-a"],
          description:
            'Author (e.g., "John Hannibal Smith <hannibal@a-team.com>")',
          args: { name: "author" },
        },
        {
          name: ["--change", "-c"],
          description: "Apply Dockerfile instruction to the created image",
          isRepeatable: true,
          args: { name: "instruction" },
        },
        indexOption,
        {
          name: ["--message", "-m"],
          description: "Commit message",
          args: { name: "message" },
        },
        {
          name: ["--pause", "-p"],
          description: "Pause container during commit (default true)",
        },
      ],
    },
    {
      name: "config",
      description: "Parse, resolve and render compose file in canonical format",
      args: {
        name: "services",
        isVariadic: true,
        isOptional: true,
        generators: servicesGenerator,
      },
      options: [
        {
          name: "--environment",
          description: "Print environment used for interpolation",
        },
        {
          name: "--format",
          description: "Format the output",
          args: {
            name: "format",
            suggestions: ["yaml", "json"],
          },
        },
        {
          name: "--hash",
          description: "Print the service config hash, one per line",
          args: {
            name: "hash",
          },
        },
        {
          name: "--images",
          description: "Print the image names, one per line",
        },
        {
          name: "--lock-image-digests",
          description: "Produces an override file with image digests",
        },
        {
          name: "--models",
          description: "Print the model names, one per line",
        },
        {
          name: "--networks",
          description: "Print the network names, one per line",
        },
        {
          name: "--no-consistency",
          description:
            "Don't check model consistency - warning: may produce invalid Compose output",
        },
        {
          name: "--no-env-resolution",
          description: "Don't resolve service env files",
        },
        {
          name: "--no-interpolate",
          description: "Don't interpolate environment variables",
        },
        {
          name: "--no-normalize",
          description: "Don't normalize compose model",
        },
        {
          name: "--no-path-resolution",
          description: "Don't resolve file paths",
        },
        {
          name: ["--output", "-o"],
          description: "Save to file (default to stdout)",
          args: {
            name: "output",
            template: "filepaths",
            suggestCurrentToken: true,
          },
        },
        {
          name: "--profiles",
          description: "Print the profile names, one per line",
        },
        {
          name: ["--quiet", "-q"],
          description: "Only validate the configuration, don't print anything",
        },
        {
          name: "--resolve-image-digests",
          description: "Pin image tags to digests",
        },
        {
          name: "--services",
          description: "Print the service names, one per line",
        },
        {
          name: "--variables",
          description: "Print model variables and default values",
        },
        {
          name: "--volumes",
          description: "Print the volume names, one per line",
        },
      ],
    },
    {
      name: "cp",
      description:
        "Copy files/folders between a service container and the local filesystem",
      args: [{ name: "source path" }, { name: "dest path" }],
      options: [
        {
          name: "--all",
          description: "Include containers created by the run command",
        },
        {
          name: ["--archive", "-a"],
          description: "Archive mode (copy all uid/gid information)",
        },
        {
          name: ["--follow-link", "-L"],
          description: "Always follow symbol link in SRC_PATH",
        },
        indexOption,
      ],
    },
    {
      name: "create",
      description: "Creates containers for a service",
      args: {
        name: "service",
        isVariadic: true,
        isOptional: true,
        generators: servicesGenerator,
      },
      options: [
        {
          name: "--build",
          description: "Build images before starting containers",
        },
        {
          name: "--force-recreate",
          description:
            "Recreate containers even if their configuration and image haven't changed",
        },
        {
          name: "--no-build",
          description: "Don't build an image, even if it's missing",
        },
        {
          name: "--no-recreate",
          description:
            "If containers already exist, don't recreate them. Incompatible with --force-recreate",
        },
        pullPolicyOption(["always", "missing", "never", "build"]),
        quietPullOption,
        removeOrphansOption,
        scaleOption,
        yesOption,
      ],
    },
    {
      name: "down",
      description: "Stop and remove containers, networks",
      args: servicesArg,
      options: [
        removeOrphansOption,
        {
          name: "--rmi",
          description:
            'Remove images used by services. "local" remove only images that don\'t have a custom tag',
          args: {
            name: "rmi",
            suggestions: ["local", "all"],
          },
        },
        {
          name: ["--timeout", "-t"],
          description: "Specify a shutdown timeout in seconds",
          args: {
            name: "timeout",
            default: "10",
          },
        },
        {
          name: ["--volumes", "-v"],
          description:
            "Remove named volumes declared in the `volumes` section of the Compose file and anonymous volumes attached to containers",
        },
      ],
    },
    {
      name: "events",
      description: "Receive real time events from containers",
      args: {
        name: "service",
        isVariadic: true,
        isOptional: true,
        generators: servicesGenerator,
      },
      options: [
        {
          name: "--json",
          description: "Output events as a stream of json objects",
        },
        {
          name: "--since",
          description: "Show all events created since timestamp",
          args: { name: "timestamp" },
        },
        {
          name: "--until",
          description: "Stream events until this timestamp",
          args: { name: "timestamp" },
        },
      ],
    },
    {
      name: "exec",
      description: "Execute a command in a running container",
      args: [
        { name: "service", generators: servicesGenerator },
        { name: "command", isCommand: true, isVariadic: true },
      ],
      options: [
        {
          name: ["--detach", "-d"],
          description: "Detached mode: Run command in the background",
        },
        {
          name: ["--env", "-e"],
          description: "Set environment variables",
          isRepeatable: true,
          args: {
            name: "key=value",
          },
        },
        indexOption,
        {
          name: ["--interactive", "-i"],
          description: "Keep STDIN open even if not attached",
          hidden: true,
        },
        {
          name: ["--no-tty", "-T"],
          description:
            "Disable pseudo-TTY allocation. By default `docker compose exec` allocates a TTY",
        },
        {
          name: "--privileged",
          description: "Give extended privileges to the process",
        },
        {
          name: ["--tty", "-t"],
          description: "Allocate a pseudo-TTY",
          hidden: true,
        },
        {
          name: ["--user", "-u"],
          description: "Run the command as this user",
          args: {
            name: "user",
          },
        },
        {
          name: ["--workdir", "-w"],
          description: "Path to workdir directory for this command",
          args: {
            name: "workdir",
            template: "folders",
          },
        },
      ],
    },
    {
      name: "export",
      description: "Export a service container's filesystem as a tar archive",
      args: { name: "service", generators: servicesGenerator },
      options: [
        indexOption,
        {
          name: ["--output", "-o"],
          description: "Write to a file, instead of STDOUT",
          args: { name: "file", template: "filepaths" },
        },
      ],
    },
    {
      name: "images",
      description: "List images used by the created containers",
      args: {
        name: "service",
        isVariadic: true,
        isOptional: true,
        generators: servicesGenerator,
      },
      options: [
        formatOption("Format the output"),
        {
          name: ["--quiet", "-q"],
          description: "Only display IDs",
        },
      ],
    },
    {
      name: "kill",
      description: "Force stop service containers",
      args: {
        name: "service",
        isVariadic: true,
        isOptional: true,
        generators: servicesGenerator,
      },
      options: [
        removeOrphansOption,
        {
          name: ["--signal", "-s"],
          description: "SIGNAL to send to the container",
          args: {
            name: "signal",
            default: "SIGKILL",
          },
        },
      ],
    },
    {
      name: "logs",
      description: "View output from containers",
      args: {
        name: "service",
        isVariadic: true,
        isOptional: true,
        generators: servicesGenerator,
      },
      options: [
        {
          name: ["--follow", "-f"],
          description: "Follow log output",
        },
        indexOption,
        {
          name: "--no-color",
          description: "Produce monochrome output",
        },
        {
          name: "--no-log-prefix",
          description: "Don't print prefix in logs",
        },
        {
          name: "--since",
          description:
            "Show logs since timestamp (e.g. 2013-01-02T13:23:37Z) or relative (e.g. 42m for 42 minutes)",
          args: {
            name: "since",
          },
        },
        {
          name: ["--tail", "-n"],
          description:
            "Number of lines to show from the end of the logs for each container",
          args: {
            name: "lines",
            suggestions: ["all"],
            default: "all",
          },
        },
        {
          name: ["--timestamps", "-t"],
          description: "Show timestamps",
        },
        {
          name: "--until",
          description:
            "Show logs before a timestamp (e.g. 2013-01-02T13:23:37Z) or relative (e.g. 42m for 42 minutes)",
          args: {
            name: "timestamp",
          },
        },
      ],
    },
    {
      name: "ls",
      description: "List running compose projects",
      options: [
        {
          name: ["--all", "-a"],
          description: "Show all stopped Compose projects",
        },
        {
          name: "--filter",
          description: "Filter output based on conditions provided",
          args: {
            name: "filter",
          },
        },
        formatOption("Format the output"),
        {
          name: ["--quiet", "-q"],
          description: "Only display project names",
        },
      ],
    },
    {
      name: "pause",
      description: "Pause services",
      args: {
        name: "service",
        isVariadic: true,
        isOptional: true,
        generators: servicesGenerator,
      },
    },
    {
      name: "port",
      description:
        "List port mappings or print the public port for a specific mapping for the service",
      args: [
        { name: "service", generators: servicesGenerator },
        { name: "private_port", isOptional: true },
      ],
      options: [
        indexOption,
        {
          name: "--protocol",
          description: "Tcp or udp",
          args: {
            name: "protocol",
            default: "tcp",
            suggestions: ["tcp", "udp"],
          },
        },
      ],
    },
    {
      name: "ps",
      description: "List containers",
      args: {
        name: "service",
        isVariadic: true,
        isOptional: true,
        generators: servicesGenerator,
      },
      options: [
        {
          name: ["--all", "-a"],
          description:
            "Show all stopped containers (including those created by the run command)",
        },
        {
          name: "--filter",
          description:
            "Filter services by a property (supported filters: status)",
          args: {
            name: "filter",
          },
        },
        formatOption("Format output: table, json or a Go template"),
        {
          name: "--no-trunc",
          description: "Don't truncate output",
        },
        {
          name: "--orphans",
          description:
            "Include orphaned services (not declared by project) (default true)",
        },
        {
          name: ["--quiet", "-q"],
          description: "Only display IDs",
        },
        {
          name: "--services",
          description: "Display services",
        },
        {
          name: "--status",
          description:
            "Filter services by status. Values: [paused | restarting | removing | running | dead | created | exited]",
          isRepeatable: true,
          args: {
            name: "status",
            suggestions: [
              "paused",
              "restarting",
              "removing",
              "running",
              "dead",
              "created",
              "exited",
            ],
          },
        },
      ],
    },
    {
      name: "publish",
      description: "Publish compose application",
      args: { name: "repository[:tag]" },
      options: [
        {
          name: "--app",
          description:
            "Published compose application (includes referenced images)",
        },
        {
          name: "--insecure-registry",
          description: "Use insecure registry",
          hidden: true,
        },
        {
          name: "--oci-version",
          description:
            "OCI image/artifact specification version (automatically determined by default)",
          args: { name: "version", suggestions: ["1.0", "1.1"] },
        },
        {
          name: "--resolve-image-digests",
          description: "Pin image tags to digests",
        },
        {
          name: "--with-env",
          description:
            "Include environment variables in the published OCI artifact",
        },
        yesOption,
      ],
    },
    {
      name: "pull",
      description: "Pull service images",
      args: {
        name: "service",
        isVariadic: true,
        isOptional: true,
        generators: servicesGenerator,
      },
      options: [
        {
          name: "--ignore-buildable",
          description: "Ignore images that can be built",
        },
        {
          name: "--ignore-pull-failures",
          description: "Pull what it can and ignores images with pull failures",
        },
        {
          name: "--include-deps",
          description: "Also pull services declared as dependencies",
        },
        {
          name: "--no-parallel",
          description: "DEPRECATED disable parallel pulling",
          deprecated: true,
          hidden: true,
        },
        {
          name: "--parallel",
          description: "DEPRECATED pull multiple images in parallel",
          deprecated: true,
          hidden: true,
        },
        {
          name: "--policy",
          description: "Apply pull policy",
          args: { name: "policy", suggestions: ["missing", "always"] },
        },
        {
          name: ["--quiet", "-q"],
          description: "Pull without printing progress information",
        },
      ],
    },
    {
      name: "push",
      description: "Push service images",
      args: {
        name: "service",
        isVariadic: true,
        isOptional: true,
        generators: servicesGenerator,
      },
      options: [
        {
          name: "--ignore-missing",
          description:
            "Skip images that are not available locally instead of failing to push them",
        },
        {
          name: "--ignore-push-failures",
          description:
            "Push what it can and ignores images with push failures. DEPRECATED: use --ignore-missing",
          deprecated: true,
          hidden: true,
        },
        {
          name: "--include-deps",
          description: "Also push images of services declared as dependencies",
        },
        {
          name: ["--quiet", "-q"],
          description: "Push without printing progress information",
        },
      ],
    },
    {
      name: "restart",
      description: "Restart service containers",
      options: [
        {
          name: "--no-deps",
          description: "Don't restart dependent services",
        },
        {
          name: ["--timeout", "-t"],
          description: "Specify a shutdown timeout in seconds",
          args: {
            name: "timeout",
            default: "10",
          },
        },
      ],
      args: {
        name: "service",
        isVariadic: true,
        isOptional: true,
        generators: servicesGenerator,
      },
    },
    {
      name: "rm",
      description: "Removes stopped service containers",
      args: {
        name: "service",
        isVariadic: true,
        isOptional: true,
        generators: servicesGenerator,
      },
      options: [
        {
          name: ["--all", "-a"],
          description: "Deprecated - no effect",
          hidden: true,
        },
        {
          name: ["--force", "-f"],
          description: "Don't ask to confirm removal",
        },
        {
          name: ["--stop", "-s"],
          description: "Stop the containers, if required, before removing",
        },
        {
          name: ["--volumes", "-v"],
          description: "Remove any anonymous volumes attached to containers",
        },
      ],
    },
    {
      name: "run",
      description: "Run a one-off command on a service",
      args: [
        { name: "service", generators: servicesGenerator },
        { name: "command", isCommand: true, isOptional: true },
      ],
      options: [
        {
          name: "--build",
          description: "Build image before starting container",
        },
        {
          name: "--cap-add",
          description: "Add Linux capabilities",
          isRepeatable: true,
          args: { name: "capability" },
        },
        {
          name: "--cap-drop",
          description: "Drop Linux capabilities",
          isRepeatable: true,
          args: { name: "capability" },
        },
        {
          name: ["--detach", "-d"],
          description: "Run container in background and print container ID",
        },
        {
          name: "--entrypoint",
          description: "Override the entrypoint of the image",
          args: {
            name: "entrypoint",
          },
        },
        {
          name: ["--env", "-e"],
          description: "Set environment variables",
          isRepeatable: true,
          args: {
            name: "env",
          },
        },
        {
          name: "--env-from-file",
          description: "Set environment variables from file",
          isRepeatable: true,
          args: { name: "file", template: "filepaths" },
        },
        {
          name: ["--interactive", "-i"],
          description: "Keep STDIN open even if not attached",
        },
        {
          name: ["--label", "-l"],
          description: "Add or override a label",
          isRepeatable: true,
          args: {
            name: "label",
          },
        },
        {
          name: "--name",
          description: "Assign a name to the container",
          args: {
            name: "name",
          },
        },
        {
          name: "--no-deps",
          description: "Don't start linked services",
        },
        {
          name: "--no-recreate",
          description:
            "If dependent containers already exist, don't recreate them, even if their configuration diverged",
        },
        {
          name: ["--no-tty", "-T"],
          description: "Disable pseudo-TTY allocation (default: auto-detected)",
        },
        {
          name: ["--publish", "-p"],
          description: "Publish a container's port(s) to the host",
          isRepeatable: true,
          args: {
            name: "publish",
          },
        },
        pullPolicyOption(["always", "missing", "never"]),
        {
          name: ["--quiet", "-q"],
          description: "Don't print anything to STDOUT",
        },
        {
          name: "--quiet-build",
          description: "Suppress progress output from the build process",
        },
        quietPullOption,
        removeOrphansOption,
        {
          name: "--rm",
          description: "Automatically remove the container when it exits",
        },
        {
          name: ["--service-ports", "-P"],
          description:
            "Run command with all service's ports enabled and mapped to the host",
        },
        {
          name: ["--tty", "-t"],
          description: "Allocate a pseudo-TTY",
          hidden: true,
        },
        {
          name: "--use-aliases",
          description:
            "Use the service's network useAliases in the network(s) the container connects to",
        },
        {
          name: ["--user", "-u"],
          description: "Run as specified username or uid",
          args: {
            name: "user",
          },
        },
        {
          name: ["--volume", "-v"],
          description: "Bind mount a volume",
          isRepeatable: true,
          args: {
            name: "volume",
          },
        },
        {
          name: ["--workdir", "-w"],
          description: "Working directory inside the container",
          args: {
            name: "workdir",
            template: "folders",
          },
        },
      ],
    },
    {
      name: "scale",
      description: "Scale services",
      args: {
        name: "service=replicas",
        isVariadic: true,
        isOptional: true,
        generators: servicesGenerator,
      },
      options: [
        {
          name: "--no-deps",
          description: "Don't start linked services",
        },
      ],
    },
    {
      name: "start",
      description: "Start services",
      args: {
        name: "service",
        isVariadic: true,
        isOptional: true,
        generators: servicesGenerator,
      },
      options: [
        {
          name: "--wait",
          description:
            "Wait for services to be running|healthy. Implies detached mode",
        },
        waitTimeoutOption,
      ],
    },
    {
      name: "stats",
      description:
        "Display a live stream of container(s) resource usage statistics",
      args: {
        name: "service",
        isOptional: true,
        generators: servicesGenerator,
      },
      options: [
        {
          name: "--aggregate",
          description:
            "Show one line per project, summing the resource usage of its containers (only 'table' and 'json' formats)",
        },
        {
          name: ["--all", "-a"],
          description: "Show all containers (default shows just running)",
        },
        {
          name: "--all-projects",
          description:
            "Show the containers of all projects instead of the current one (only 'table' and 'json' formats)",
        },
        formatOption("Format output: table, json or a Go template"),
        {
          name: "--no-stream",
          description: "Disable streaming stats and only pull the first result",
        },
        {
          name: "--no-trunc",
          description: "Do not truncate output",
        },
      ],
    },
    {
      name: "stop",
      description: "Stop services",
      args: {
        name: "service",
        isVariadic: true,
        isOptional: true,
        generators: servicesGenerator,
      },
      options: [
        {
          name: ["--timeout", "-t"],
          description: "Specify a shutdown timeout in seconds",
          args: {
            name: "timeout",
            default: "10",
          },
        },
      ],
    },
    {
      name: "top",
      description: "Display the running processes",
      args: {
        name: "service",
        isOptional: true,
        isVariadic: true,
        generators: servicesGenerator,
      },
    },
    {
      name: "unpause",
      description: "Unpause services",
      args: {
        name: "service",
        isOptional: true,
        isVariadic: true,
        generators: servicesGenerator,
      },
    },
    {
      name: "up",
      description: "Create and start containers",
      args: {
        name: "service",
        isVariadic: true,
        isOptional: true,
        generators: servicesGenerator,
      },
      options: [
        {
          name: "--abort-on-container-exit",
          description:
            "Stops all containers if any container was stopped. Incompatible with -d",
        },
        {
          name: "--abort-on-container-failure",
          description:
            "Stops all containers if any container exited with failure. Incompatible with -d",
        },
        {
          name: "--always-recreate-deps",
          description:
            "Recreate dependent containers. Incompatible with --no-recreate",
        },
        {
          name: "--attach",
          description:
            "Restrict attaching to the specified services. Incompatible with --attach-dependencies",
          isRepeatable: true,
          args: {
            name: "service",
            generators: servicesGenerator,
          },
        },
        {
          name: "--attach-dependencies",
          description:
            "Automatically attach to log output of dependent services",
        },
        {
          name: "--build",
          description: "Build images before starting containers",
        },
        {
          name: ["--detach", "-d"],
          description: "Detached mode: Run containers in the background",
        },
        {
          name: "--exit-code-from",
          description:
            "Return the exit code of the selected service container. Implies --abort-on-container-exit",
          args: {
            name: "service",
            generators: servicesGenerator,
          },
        },
        {
          name: "--force-recreate",
          description:
            "Recreate containers even if their configuration and image haven't changed",
        },
        {
          name: "--menu",
          description:
            "Enable interactive shortcuts when running attached. Incompatible with --detach",
        },
        {
          name: "--no-attach",
          description: "Do not attach (stream logs) to the specified services",
          isRepeatable: true,
          args: {
            name: "service",
            generators: servicesGenerator,
          },
        },
        {
          name: "--no-build",
          description: "Don't build an image, even if it's missing",
        },
        {
          name: "--no-color",
          description: "Produce monochrome output",
        },
        {
          name: "--no-deps",
          description: "Don't start linked services",
        },
        {
          name: "--no-log-prefix",
          description: "Don't print prefix in logs",
        },
        {
          name: "--no-recreate",
          description:
            "If containers already exist, don't recreate them. Incompatible with --force-recreate",
        },
        {
          name: "--no-start",
          description: "Don't start the services after creating them",
        },
        pullPolicyOption(["always", "missing", "never"]),
        {
          name: "--quiet-build",
          description: "Suppress the build output",
        },
        quietPullOption,
        removeOrphansOption,
        {
          name: ["--renew-anon-volumes", "-V"],
          description:
            "Recreate anonymous volumes instead of retrieving data from the previous containers",
        },
        scaleOption,
        {
          name: ["--timeout", "-t"],
          description:
            "Use this timeout in seconds for container shutdown when attached or when containers are already running",
          args: {
            name: "timeout",
            default: "10",
          },
        },
        {
          name: "--timestamps",
          description: "Show timestamps",
        },
        {
          name: "--wait",
          description:
            "Wait for services to be running|healthy, streaming their logs unless --detach is set",
        },
        waitTimeoutOption,
        {
          name: ["--watch", "-w"],
          description:
            "Watch source code and rebuild/refresh containers when files are updated",
        },
        yesOption,
      ],
    },
    {
      name: "version",
      description: "Show the Docker Compose version information",
      options: [
        {
          name: ["--format", "-f"],
          description:
            "Format the output. Values: [pretty | json]. (Default: pretty)",
          args: {
            name: "format",
            suggestions: ["pretty", "json"],
          },
        },
        {
          name: "--short",
          description: "Shows only Compose's version number",
        },
      ],
    },
    {
      name: "volumes",
      description: "List volumes",
      args: servicesArg,
      options: [
        formatOption("Format output: table, json or a Go template"),
        {
          name: ["--quiet", "-q"],
          description: "Only display volume names",
        },
      ],
    },
    {
      name: "wait",
      description: "Block until containers of all (or specified) services stop",
      args: {
        name: "service",
        isVariadic: true,
        generators: servicesGenerator,
      },
      options: [
        {
          name: "--down-project",
          description: "Drops project when the first container stops",
        },
      ],
    },
    {
      name: "watch",
      description:
        "Watch build context for service and rebuild/refresh containers when files are updated",
      args: servicesArg,
      options: [
        {
          name: "--no-up",
          description: "Do not build & start services before watching",
        },
        {
          name: "--prune",
          description: "Prune dangling images on rebuild (default true)",
        },
        {
          name: "--quiet",
          description: "Hide build output",
        },
      ],
    },
  ],
  options: [
    {
      name: "--all-resources",
      description: "Include all resources, even those not used by services",
    },
    {
      name: "--ansi",
      description:
        'Control when to print ANSI control characters ("never"|"always"|"auto")',
      args: {
        name: "ansi",
        default: "auto",
        suggestions: ["never", "always", "auto"],
      },
    },
    {
      name: "--compatibility",
      description: "Run compose in backward compatibility mode",
    },
    {
      name: "--dry-run",
      description: "Execute command in dry run mode",
      isPersistent: true,
    },
    {
      name: "--env-file",
      description: "Specify an alternate environment file",
      isRepeatable: true,
      args: {
        name: "env-file",
        template: "filepaths",
      },
    },
    {
      name: ["--file", "-f"],
      description: "Compose configuration files",
      isRepeatable: true,
      args: {
        name: "file",
        template: "filepaths",
      },
    },
    {
      name: "--insecure-registry",
      description:
        "Use insecure registry to pull Compose OCI artifacts. Doesn't apply to images",
      hidden: true,
      isRepeatable: true,
      args: { name: "registry" },
    },
    {
      name: "--no-ansi",
      description: "Do not print ANSI control characters (DEPRECATED)",
      deprecated: true,
      hidden: true,
    },
    {
      name: "--parallel",
      description: "Control max parallelism, -1 for unlimited",
      args: { name: "max", default: "-1" },
    },
    {
      name: "--profile",
      description: "Specify a profile to enable",
      isRepeatable: true,
      args: {
        name: "profile",
        generators: profilesGenerator,
      },
    },
    {
      name: "--progress",
      description: "Set type of progress output",
      args: {
        name: "progress",
        suggestions: ["auto", "tty", "plain", "json", "quiet"],
      },
    },
    {
      name: "--project-directory",
      description:
        "Specify an alternate working directory (default: the path of the, first specified, Compose file)",
      args: {
        name: "project-directory",
        template: "folders",
      },
    },
    {
      name: ["--project-name", "-p"],
      description: "Project name",
      args: {
        name: "project-name",
      },
    },
    {
      name: "--verbose",
      description: "Show more output",
      hidden: true,
    },
    {
      name: ["--version", "-v"],
      description: "Show the Docker Compose version information",
      hidden: true,
    },
    {
      name: "--workdir",
      description:
        "DEPRECATED! USE --project-directory INSTEAD. Specify an alternate working directory (default: the path of the, first specified, Compose file)",
      deprecated: true,
      hidden: true,
      args: {
        name: "workdir",
      },
    },
  ],
};

export default completionSpec;
