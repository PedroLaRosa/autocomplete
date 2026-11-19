// k3d v5.9.0 (latest stable git tag k3d-io/k3d and Homebrew formula, 2026-11-19). Source: cobra command
// definitions in cmd/** at tag v5.9.0 plus pkg/types, read statically from a shallow clone (binary not
// executed). Generated docs/usage/commands/*.md are stale (no --delete-enabled etc.) and were used only to
// cross-check. Not covered: no-op registry start/stop stubs, the unregistered `config view`, plugins (k3d-<name>).

const nonEmptyLines = (out: string) =>
  out.split("\n").filter((line) => line.trim() !== "");

const ClusterGenerator: Fig.Generator = {
  script: ["k3d", "cluster", "list", "--no-headers"],
  postProcess: (out) => {
    return nonEmptyLines(out).map((line) => {
      // Columns: NAME SERVERS AGENTS LOADBALANCER (counts are running/total)
      const [name, servers, agents] = line.split(/\s+/);
      return {
        name,
        icon: "fig://icon?type=kubernetes",
        description: `Servers ${servers}, agents ${agents} (running/total)`,
      };
    });
  },
};

// List of SHELL completions
const ShellCompletions: Fig.Suggestion[] = [
  {
    name: "bash",
    description: "Bash shell",
  },
  {
    name: "zsh",
    description: "Zsh shell",
  },
  {
    name: "fish",
    description: "Fish shell",
  },
  {
    name: "powershell",
    description: "Powershell",
  },
  {
    name: "psh",
    description: "Alias for powershell",
  },
];

// Docker Image Generator
const DockerImageGenerator: Fig.Generator = {
  script: ["docker", "image", "ls", "--format", "{{.Repository}}:{{.Tag}}"],
  postProcess: (out) => {
    return nonEmptyLines(out).map((image) => ({
      name: image,
      icon: "fig://icon?type=docker",
      description: "Docker Image",
    }));
  },
};

// Node Generator
const NodeGenerator: Fig.Generator = {
  script: ["k3d", "node", "list", "--no-headers"],
  postProcess: (out) => {
    return nonEmptyLines(out).map((line) => {
      // Columns: NAME ROLE CLUSTER STATUS
      const [name, role, cluster] = line.split(/\s+/);
      return {
        name,
        icon: "fig://icon?type=kubernetes",
        description: `${role} node of cluster ${cluster}`,
      };
    });
  },
};

// Registry Generator
const RegistryGenerator: Fig.Generator = {
  script: ["k3d", "registry", "list", "--no-headers"],
  postProcess: (out) => {
    return nonEmptyLines(out).map((line) => {
      // Columns: NAME ROLE CLUSTER STATUS (CLUSTER is "*" if not attached)
      const [name, , cluster] = line.split(/\s+/);
      return {
        name,
        description:
          cluster === "*"
            ? `Registry ${name}`
            : `Registry ${name} of cluster ${cluster}`,
      };
    });
  },
};

const clusterArg = (
  description: string,
  extra: Partial<Fig.Arg> = {}
): Fig.Arg => ({
  name: "cluster",
  description,
  generators: ClusterGenerator,
  ...extra,
});

const nodeArg = (extra: Partial<Fig.Arg> = {}): Fig.Arg => ({
  name: "node",
  description: "Name of the node",
  generators: NodeGenerator,
  ...extra,
});

const allOption = (description: string): Fig.Option => ({
  name: ["-a", "--all"],
  description,
});

const noHeadersOption: Fig.Option = {
  name: "--no-headers",
  description: "Disable headers",
};

const outputOption: Fig.Option = {
  name: ["-o", "--output"],
  description: "Output format",
  args: {
    name: "format",
    suggestions: ["json", "yaml"],
  },
};

const waitOption = (description: string): Fig.Option => ({
  name: "--wait",
  description: `${description} (default true)`,
});

const timeoutOption: Fig.Option = {
  name: "--timeout",
  description: "Maximum waiting time for '--wait' before canceling/returning",
  args: {
    name: "duration",
  },
};

const portMappingArg: Fig.Arg = {
  name: "[HOST:][HOSTPORT:]CONTAINERPORT[/PROTOCOL][@NODEFILTER]",
};

const completionSpec: Fig.Spec = {
  name: "k3d",
  description: "K3d is a lightweight wrapper to run k3s in Docker",
  subcommands: [
    {
      name: "cluster",
      description: "Manage cluster(s)",
      subcommands: [
        {
          name: "create",
          description: "Create a new cluster",
          args: {
            name: "cluster name",
            description: "Name of the cluster to create (default k3s-default)",
            isOptional: true,
          },
          options: [
            {
              name: ["-a", "--agents"],
              description: "Specify how many agents you want to create",
              args: {
                name: "number of agents",
              },
            },
            {
              name: "--agents-memory",
              description:
                "Memory limit imposed on the agents nodes [From docker]",
              args: {
                name: "memory limit",
              },
            },
            {
              name: "--api-port",
              description:
                "Specify the Kubernetes API server port exposed on the LoadBalancer",
              args: {
                name: "[HOST:]HOSTPORT",
              },
            },
            {
              name: ["-c", "--config"],
              description: "Path of a config file to use",
              args: {
                name: "path",
                template: "filepaths",
              },
            },
            {
              name: ["-e", "--env"],
              description: "Add environment variables to nodes",
              isRepeatable: true,
              args: {
                name: "KEY[=VALUE][@NODEFILTER[;NODEFILTER...]]",
              },
            },
            {
              name: "--enforce-registry-port-match",
              description:
                "Make the internal registry port match the external one",
            },
            {
              name: "--gpus",
              description:
                "GPU devices to add to the cluster node containers ('all' to pass all GPUs) [From docker]",
              args: {
                name: "devices",
                suggestions: ["all"],
              },
            },
            {
              name: "--host-alias",
              description: "Add ip:host[,host,...] mappings",
              isRepeatable: true,
              args: {
                name: "ip:host[,host,...]",
              },
            },
            {
              name: "--host-pid-mode",
              description: "Enable host pid mode of server(s) and agent(s)",
            },
            {
              name: ["-i", "--image"],
              description:
                "Specify k3s image that you want to use for the nodes",
              args: {
                name: "image",
              },
            },
            {
              name: "--k3s-arg",
              description: "Additional args passed to k3s command",
              isRepeatable: true,
              args: {
                name: "ARG@NODEFILTER[;@NODEFILTER]",
              },
            },
            {
              name: "--k3s-node-label",
              description: "Add label to k3s node",
              isRepeatable: true,
              args: {
                name: "KEY[=VALUE][@NODEFILTER[;NODEFILTER...]]",
              },
            },
            {
              name: "--kubeconfig-switch-context",
              description:
                "Directly switch the default kubeconfig's current-context to the new cluster's context (requires --kubeconfig-update-default) (default true)",
            },
            {
              name: "--kubeconfig-update-default",
              description:
                "Directly update the default kubeconfig with the new cluster's context (default true)",
            },
            {
              name: "--lb-config-override",
              description:
                "Use dotted YAML path syntax to override nginx loadbalancer settings",
              isRepeatable: true,
              args: {
                name: "path=value",
              },
            },
            {
              name: "--network",
              description: "Join an existing network",
              args: {
                name: "network",
              },
            },
            {
              name: "--no-image-volume",
              description:
                "Disable the creation of a volume for importing images",
            },
            {
              name: "--no-lb",
              description:
                "Disable the creation of a LoadBalancer in front of the server nodes",
            },
            {
              name: "--no-rollback",
              description:
                "Disable the automatic rollback actions, if anything goes wrong",
            },
            {
              name: ["-p", "--port"],
              description:
                "Map ports from the node containers (via the serverlb) to the host",
              isRepeatable: true,
              args: portMappingArg,
            },
            {
              name: "--registry-config",
              description: "Specify path to an extra registries.yaml file",
              args: {
                name: "path",
                template: "filepaths",
              },
            },
            {
              name: "--registry-create",
              description:
                "Create a k3d-managed registry and connect it to the cluster",
              args: {
                name: "NAME[:HOST][:HOSTPORT]",
              },
            },
            {
              name: "--registry-use",
              description:
                "Connect to one or more k3d-managed registries running locally",
              isRepeatable: true,
              args: {
                name: "NAME[:HOST][:HOSTPORT]",
              },
            },
            {
              name: "--runtime-label",
              description: "Add label to container runtime",
              isRepeatable: true,
              args: {
                name: "KEY[=VALUE][@NODEFILTER[;NODEFILTER...]]",
              },
            },
            {
              name: "--runtime-ulimit",
              description: "Add ulimit to container runtime",
              isRepeatable: true,
              args: {
                name: "NAME[=SOFT]:[HARD]",
              },
            },
            {
              name: ["-s", "--servers"],
              description: "Specify how many servers you want to create",
              args: {
                name: "number of servers",
              },
            },
            {
              name: "--servers-memory",
              description:
                "Memory limit imposed on the server nodes [From docker]",
              args: {
                name: "memory limit",
              },
            },
            {
              name: "--subnet",
              description:
                "[Experimental: IPAM] Define a subnet for the newly created container network (Example: 172.28.0.0/16)",
              args: {
                name: "subnet",
              },
            },
            {
              name: "--timeout",
              description:
                "Rollback changes if cluster couldn't be created in specified duration",
              args: {
                name: "duration",
              },
            },
            {
              name: "--token",
              description:
                "Specify a cluster token. By default, we generate one",
              args: {
                name: "token",
              },
            },
            {
              name: ["-v", "--volume"],
              description: "Mount volumes into the nodes",
              isRepeatable: true,
              args: {
                name: "[SOURCE:]DEST[@NODEFILTER[;NODEFILTER...]]",
              },
            },
            waitOption(
              "Wait for the server(s) to be ready before returning, use '--timeout DURATION' to not wait forever"
            ),
          ],
        },
        {
          name: ["delete", "del", "rm"],
          description: "Delete cluster(s)",
          args: clusterArg("Cluster to delete", {
            isOptional: true,
            isVariadic: true,
          }),
          options: [
            allOption("Delete all existing clusters"),
            {
              name: ["-c", "--config"],
              description: "Path of a config file to use",
              args: {
                name: "path",
                template: "filepaths",
              },
            },
          ],
        },
        {
          name: ["edit", "update"],
          description: "[EXPERIMENTAL] Edit cluster(s)",
          args: clusterArg("Cluster to edit"),
          options: [
            {
              name: "--port-add",
              description:
                "Map ports from the node containers (via the serverlb) to the host",
              isRepeatable: true,
              args: portMappingArg,
            },
            {
              name: "--port-delete",
              description:
                "[EXPERIMENTAL] Delete a port mapping with the given format (must be exactly the same as the one used during creation)",
              isRepeatable: true,
              args: portMappingArg,
            },
          ],
        },
        {
          name: ["list", "ls", "get"],
          description: "List cluster(s)",
          args: clusterArg("Cluster to list", {
            isOptional: true,
            isVariadic: true,
          }),
          options: [
            noHeadersOption,
            outputOption,
            {
              name: "--token",
              description: "Print k3s cluster token",
            },
          ],
        },
        {
          name: "restart",
          description: "Restart existing k3d cluster(s)",
          args: clusterArg("Cluster to restart", {
            isOptional: true,
            isVariadic: true,
          }),
          options: [
            allOption("Restart all existing clusters"),
            timeoutOption,
            waitOption(
              "Wait for the server(s) (and loadbalancer) to be ready before returning"
            ),
          ],
        },
        {
          name: "start",
          description: "Start existing k3d cluster(s)",
          args: clusterArg("Cluster to start", {
            isOptional: true,
            isVariadic: true,
          }),
          options: [
            allOption("Start all existing clusters"),
            timeoutOption,
            waitOption(
              "Wait for the server(s) (and loadbalancer) to be ready before returning"
            ),
          ],
        },
        {
          name: "stop",
          description: "Stop existing k3d cluster(s)",
          args: clusterArg("Cluster to stop", {
            isOptional: true,
            isVariadic: true,
          }),
          options: [allOption("Stop all existing clusters")],
        },
      ],
    },
    {
      name: "completion",
      description:
        "Generate completion scripts for bash, zsh, fish, powershell",
      args: {
        name: "shell",
        description: "Shell to generate completion script for",
        suggestions: ShellCompletions,
      },
    },
    {
      name: "config",
      description: "Work with config file(s)",
      subcommands: [
        {
          name: ["init", "create"],
          description: "Write a default k3d config file",
          options: [
            {
              name: ["-f", "--force"],
              description: "Force overwrite of target file",
            },
            {
              name: ["-o", "--output"],
              description:
                'Write a default k3d config, "-" prints to stdout (default "k3d-default.yaml")',
              args: {
                name: "file",
                template: "filepaths",
                suggestions: ["-"],
              },
            },
          ],
        },
        {
          name: ["migrate", "update"],
          description: "Migrate a config file to the latest version",
          args: [
            {
              name: "input",
              description: "Config file to migrate",
              template: "filepaths",
            },
            {
              name: "output",
              description: "Where to write the migrated config",
              template: "filepaths",
              isOptional: true,
            },
          ],
        },
      ],
    },
    {
      name: ["image", "images"],
      description: "Handle container images",
      subcommands: [
        {
          name: ["import", "load"],
          description: "Import image(s) from docker into k3d cluster(s)",
          args: {
            name: "image or archive",
            description: "Image or image archive to import",
            generators: DockerImageGenerator,
            template: "filepaths",
            isVariadic: true,
          },
          options: [
            {
              name: ["-c", "--cluster"],
              description:
                "Select clusters to load the image to (default k3s-default)",
              isRepeatable: true,
              args: clusterArg("Cluster to import image(s) into"),
            },
            {
              name: ["-k", "--keep-tarball"],
              description:
                "Do not delete the tarball containing the saved images from the shared volume",
            },
            {
              name: ["-t", "--keep-tools"],
              description: "Do not delete the tools node after import",
            },
            {
              name: ["-m", "--mode"],
              description:
                "Which method to use to import images into the cluster (default tools-node)",
              args: {
                name: "mode",
                suggestions: ["auto", "direct", "tools-node"],
              },
            },
          ],
        },
      ],
    },
    {
      name: "kubeconfig",
      description: "Manage kubeconfig(s)",
      subcommands: [
        {
          name: ["get", "print", "show"],
          description: "Print kubeconfig(s) from cluster(s)",
          args: clusterArg("Cluster to get kubeconfig for", {
            isOptional: true,
            isVariadic: true,
          }),
          options: [allOption("Output kubeconfigs from all existing clusters")],
        },
        {
          name: ["merge", "write"],
          description:
            "Write/Merge kubeconfig(s) from cluster(s) into new or existing kubeconfig/file",
          args: clusterArg("Cluster to get kubeconfig for", {
            isOptional: true,
            isVariadic: true,
          }),
          options: [
            allOption("Get kubeconfigs from all existing clusters"),
            {
              name: ["-d", "--kubeconfig-merge-default"],
              description:
                "Merge into the default kubeconfig ($KUBECONFIG or ~/.kube/config)",
            },
            {
              name: ["-s", "--kubeconfig-switch-context"],
              description: "Switch to new context (default true)",
            },
            {
              name: ["-o", "--output"],
              description:
                "Define output [ - | FILE ] (default from $KUBECONFIG or ~/.kube/config)",
              args: {
                name: "file",
                template: "filepaths",
                suggestions: ["-"],
              },
            },
            {
              name: "--overwrite",
              description:
                "[Careful!] Overwrite existing file, ignoring its contents",
              isDangerous: true,
            },
            {
              name: ["-u", "--update"],
              description:
                "Update conflicting fields in existing kubeconfig (default true)",
            },
          ],
        },
      ],
    },
    {
      name: "node",
      description: "Manage node(s)",
      subcommands: [
        {
          name: "create",
          description: "Create a new k3s node in docker",
          args: {
            name: "node name",
            description: "Name of the node",
          },
          options: [
            {
              name: ["-c", "--cluster"],
              description:
                "Cluster URL or k3d cluster name to connect to (default k3s-default)",
              args: clusterArg("Cluster to connect to"),
            },
            {
              name: ["-i", "--image"],
              description:
                "Specify k3s image used for the node(s) (default: copied from existing node)",
              args: {
                name: "image",
              },
            },
            {
              name: "--k3s-arg",
              description: "Additional args passed to the k3s command",
              isRepeatable: true,
              args: {
                name: "k3s-arg",
              },
            },
            {
              name: "--k3s-node-label",
              description: 'Specify k3s node labels in format "foo=bar"',
              isRepeatable: true,
              args: {
                name: "label",
              },
            },
            {
              name: "--memory",
              description: "Memory limit imposed on the node [From docker]",
              args: {
                name: "memory",
              },
            },
            {
              name: ["-n", "--network"],
              description: "Add node to (another) runtime network",
              isRepeatable: true,
              args: {
                name: "network",
              },
            },
            {
              name: "--replicas",
              description:
                "Number of replicas of this node specification (default 1)",
              args: {
                name: "replicas",
              },
            },
            {
              name: "--role",
              description: "Specify node role (default agent)",
              args: {
                name: "role",
                suggestions: ["agent", "server"],
              },
            },
            {
              name: "--runtime-label",
              description:
                'Specify container runtime labels in format "foo=bar"',
              isRepeatable: true,
              args: {
                name: "label",
              },
            },
            {
              name: "--runtime-ulimit",
              description:
                'Specify container runtime ulimit in format "ulimit=soft:hard"',
              isRepeatable: true,
              args: {
                name: "ulimit",
              },
            },
            timeoutOption,
            {
              name: ["-t", "--token"],
              description:
                "Override cluster token (required when connecting to an external cluster)",
              args: {
                name: "token",
              },
            },
            waitOption("Wait for the node(s) to be ready before returning"),
          ],
        },
        {
          name: "delete",
          description: "Delete node(s)",
          args: nodeArg({ isOptional: true, isVariadic: true }),
          options: [
            allOption("Delete all existing nodes"),
            {
              name: ["-r", "--registries"],
              description: "Also delete registries",
            },
          ],
        },
        {
          name: ["edit", "update"],
          description: "[EXPERIMENTAL] Edit node(s)",
          args: nodeArg(),
          options: [
            {
              name: "--port-add",
              description:
                "[EXPERIMENTAL] (serverlb only!) Map ports from the node container to the host",
              isRepeatable: true,
              args: portMappingArg,
            },
            {
              name: "--port-delete",
              description:
                "[EXPERIMENTAL] (serverlb only!) Remove port mappings between a node and the host",
              isRepeatable: true,
              args: portMappingArg,
            },
          ],
        },
        {
          name: ["list", "ls", "get"],
          description: "List node(s)",
          args: nodeArg({ isOptional: true, isVariadic: true }),
          options: [noHeadersOption, outputOption],
        },
        {
          name: "start",
          description: "Start an existing k3d node",
          args: nodeArg(),
        },
        {
          name: "stop",
          description: "Stop an existing k3d node",
          args: nodeArg(),
        },
      ],
    },
    {
      name: ["registry", "registries", "reg"],
      description: "Manage registry/registries",
      subcommands: [
        {
          name: "create",
          description: "Create a new registry",
          args: {
            name: "registry name",
            description: "Name of the registry",
            isOptional: true,
          },
          options: [
            {
              name: ["-c", "--cluster"],
              description:
                "[NotReady] Select the cluster(s) that the registry shall connect to",
              hidden: true,
              isRepeatable: true,
              args: clusterArg("Cluster to connect the registry to"),
            },
            {
              name: "--default-network",
              description:
                'Specify the network connected to the registry (default "bridge")',
              args: {
                name: "network",
              },
            },
            {
              name: "--delete-enabled",
              description: "Enable image deletion",
            },
            {
              name: "--enforce-port-match",
              description:
                "Make the internal registry port match the external one",
            },
            {
              name: ["-i", "--image"],
              description:
                'Specify image used for the registry (default "docker.io/library/registry:2")',
              args: {
                name: "image",
              },
            },
            {
              name: "--no-help",
              description: "Disable the help text (How-To use the registry)",
            },
            {
              name: ["-p", "--port"],
              description:
                'Select which port the registry should be listening on on your machine (localhost) (default "random")',
              args: {
                name: "[HOST:]HOSTPORT",
              },
            },
            {
              name: "--proxy-password",
              description:
                "Specify the password of the proxied remote registry",
              args: {
                name: "password",
              },
            },
            {
              name: "--proxy-remote-url",
              description: "Specify the url of the proxied remote registry",
              args: {
                name: "url",
              },
            },
            {
              name: "--proxy-username",
              description:
                "Specify the username of the proxied remote registry",
              args: {
                name: "username",
              },
            },
            {
              name: ["-v", "--volume"],
              description: "Mount volumes into the registry node",
              isRepeatable: true,
              args: {
                name: "[SOURCE:]DEST",
              },
            },
          ],
        },
        {
          name: ["delete", "del", "rm"],
          description: "Delete registry/registries",
          args: {
            name: "registry name",
            description: "Name of the registry",
            generators: RegistryGenerator,
            isOptional: true,
          },
          options: [allOption("Delete all existing registries")],
        },
        {
          name: ["list", "ls", "get"],
          description: "List registries",
          args: {
            name: "registry name",
            description: "Name of the registry",
            generators: RegistryGenerator,
            isOptional: true,
            isVariadic: true,
          },
          options: [noHeadersOption, outputOption],
        },
      ],
    },
    {
      name: "version",
      description: "Show k3d and default k3s version",
      subcommands: [
        {
          name: ["list", "ls"],
          description: "List k3d/K3s versions",
          args: {
            name: "component",
            description: "Component to list versions of",
            suggestions: ["k3d", "k3s", "k3d-proxy", "k3d-tools"],
          },
          options: [
            {
              name: ["-e", "--exclude"],
              description:
                "Exclude Regexp (default excludes pre-releases, arch-specific tags and digests)",
              args: {
                name: "regexp",
              },
            },
            {
              name: ["-f", "--format"],
              description: "Use --output instead",
              deprecated: true,
              exclusiveOn: ["-o", "--output"],
              args: {
                name: "format",
                suggestions: ["raw", "repo"],
              },
            },
            {
              name: ["-i", "--include"],
              description: "Include Regexp (default includes everything)",
              args: {
                name: "regexp",
              },
            },
            {
              name: ["-l", "--limit"],
              description:
                "Limit number of tags in output (0 = unlimited, default 0)",
              args: {
                name: "number",
              },
            },
            {
              name: ["-o", "--output"],
              description: "Output format (default raw)",
              exclusiveOn: ["-f", "--format"],
              args: {
                name: "format",
                suggestions: ["raw", "repo"],
              },
            },
            {
              name: ["-s", "--sort"],
              description: "Sort mode (default desc)",
              args: {
                name: "mode",
                suggestions: ["asc", "desc", "off"],
              },
            },
          ],
        },
      ],
      options: [
        {
          name: ["-o", "--output"],
          description: "Return version information in a different format",
          args: {
            name: "format",
            suggestions: ["json"],
          },
        },
      ],
    },
    {
      name: "debug",
      description: "Debug k3d cluster(s)",
      hidden: true,
      subcommands: [
        {
          name: ["loadbalancer", "lb"],
          description: "Debug the loadbalancer",
          subcommands: [
            {
              name: "get-config",
              description: "Print the loadbalancer config of a cluster",
              args: clusterArg("Cluster to print the loadbalancer config of"),
            },
          ],
        },
      ],
    },
    {
      name: "runtime-info",
      description: "Show some information about the runtime environment",
      hidden: true,
    },
  ],
  options: [
    {
      name: ["-h", "--help"],
      description: "Help for k3d",
      isPersistent: true,
    },
    {
      name: "--verbose",
      description: "Enable verbose output (debug logging)",
      isPersistent: true,
    },
    {
      name: "--trace",
      description: "Enable super verbose output (trace logging)",
      isPersistent: true,
    },
    {
      name: "--version",
      description: "Show k3d and default k3s version",
    },
    {
      name: "--timestamps",
      description: "Enable log timestamps",
      isPersistent: true,
    },
  ],
};

export default completionSpec;
