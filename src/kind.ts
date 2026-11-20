// kind v0.33.0 (latest stable: Go proxy + Homebrew formula + git tags, released 2026-08-26; re-verified 2026-11-20). Source: cobra commands and flags in pkg/cmd/kind at tag v0.33.0 (static read, binary not run)
const ClusterGenerator: Fig.Generator = {
  script: ["kind", "get", "clusters"],
  postProcess: (out) => {
    return out
      .split("\n")
      .filter(Boolean)
      .map((cluster) => ({
        name: cluster,
        description: "Cluster",
      }));
  },
};

const NodeGenerator: Fig.Generator = {
  script: ["kind", "get", "nodes", "-A"],
  postProcess: (out) => {
    return out
      .split("\n")
      .filter(Boolean)
      .map((node) => ({
        name: node,
        description: "Node",
      }));
  },
};

const nameOption = (description: string): Fig.Option => ({
  name: ["-n", "--name"],
  description,
  args: {
    name: "cluster name",
    generators: ClusterGenerator,
  },
  priority: 100,
});

const kubeconfigOption: Fig.Option = {
  name: "--kubeconfig",
  description:
    "Sets kubeconfig path instead of $KUBECONFIG or $HOME/.kube/config",
  args: {
    name: "path",
    template: "filepaths",
  },
};

const internalOption: Fig.Option = {
  name: "--internal",
  description: "Use internal address instead of external",
};

const nodesOption: Fig.Option = {
  name: "--nodes",
  description: "Comma separated list of nodes to load images into",
  args: {
    name: "nodes",
    generators: NodeGenerator,
  },
};

const completionSpec: Fig.Spec = {
  name: "kind",
  description: "Kind is a tool for managing local Kubernetes clusters",
  subcommands: [
    {
      name: "build",
      description: "Build one of [node-image]",
      subcommands: [
        {
          name: "node-image",
          description: "Build the node image",
          args: {
            name: "kubernetes-source",
            description:
              "Kubernetes source dir, release tarball path or URL, release version, or ci/ version marker",
            isOptional: true,
            template: "filepaths",
          },
          options: [
            {
              name: "--arch",
              description:
                "Architecture to build for, defaults to the host architecture",
              args: {
                name: "architecture",
              },
            },
            {
              name: "--base-image",
              description: "Name:tag of the base image to use for the build",
              args: {
                name: "name:tag",
              },
            },
            {
              name: "--image",
              description: "Name:tag of the resulting image to be built",
              args: {
                name: "name:tag",
              },
            },
            {
              name: "--type",
              description: "Type of build",
              args: {
                name: "type",
                suggestions: ["url", "file", "release", "ci", "source"],
              },
            },
          ],
        },
      ],
    },
    {
      name: "completion",
      description:
        "Output shell completion code for the specified shell (bash, zsh or fish)",
      subcommands: [
        {
          name: "bash",
          description: "Output shell completions for bash",
        },
        {
          name: "fish",
          description: "Output shell completions for fish",
        },
        {
          name: "powershell",
          description: "Output shell completions for powershell",
        },
        {
          name: "zsh",
          description: "Output shell completions for zsh",
        },
      ],
    },
    {
      name: "create",
      description: "Creates one of [cluster]",
      subcommands: [
        {
          name: "cluster",
          description: "Creates a local Kubernetes cluster",
          options: [
            {
              name: ["-n", "--name"],
              description:
                "Cluster name, overrides KIND_CLUSTER_NAME, config (default kind)",
              args: {
                name: "cluster name",
              },
            },
            {
              name: "--config",
              description: "Path to a kind config file",
              args: {
                name: "path",
                template: "filepaths",
              },
            },
            {
              name: "--image",
              description: "Node docker image to use for booting the cluster",
              args: {
                name: "image",
              },
            },
            kubeconfigOption,
            {
              name: "--retain",
              description:
                "Retain nodes for debugging when cluster creation fails",
            },
            {
              name: "--wait",
              description:
                "Time to wait for control plane node to be ready (e.g. 1s, 2m, 3h)",
              args: {
                name: "duration",
              },
            },
          ],
        },
      ],
    },
    {
      name: "delete",
      description: "Deletes one of [cluster]",
      subcommands: [
        {
          name: "cluster",
          description: "Deletes a cluster",
          options: [nameOption("The cluster name"), kubeconfigOption],
        },
        {
          name: "clusters",
          description: "Deletes one or more clusters",
          args: {
            name: "cluster name",
            isOptional: true,
            isVariadic: true,
            generators: ClusterGenerator,
          },
          options: [
            {
              name: ["-A", "--all"],
              description: "Delete all clusters",
              priority: 100,
            },
            kubeconfigOption,
          ],
        },
      ],
    },
    {
      name: "export",
      description: "Exports one of [kubeconfig, logs]",
      subcommands: [
        {
          name: "kubeconfig",
          description: "Exports cluster kubeconfig",
          options: [
            nameOption("The cluster context name"),
            kubeconfigOption,
            internalOption,
          ],
        },
        {
          name: "logs",
          description: "Exports logs to a tempdir or [output-dir] if specified",
          args: {
            name: "output-dir",
            isOptional: true,
            template: "folders",
          },
          options: [nameOption("The cluster context name")],
        },
      ],
    },
    {
      name: "get",
      description: "Gets one of [clusters, nodes, kubeconfig]",
      subcommands: [
        {
          name: "clusters",
          description: "Lists existing kind clusters by their name",
        },
        {
          name: "kubeconfig",
          description: "Prints cluster kubeconfig",
          options: [nameOption("The cluster context name"), internalOption],
        },
        {
          name: "nodes",
          description: "Lists existing kind nodes by their name",
          options: [
            {
              name: ["-A", "--all-clusters"],
              description:
                "List all the available nodes across all cluster contexts",
              priority: 50,
            },
            nameOption("The cluster context name"),
          ],
        },
      ],
    },
    {
      name: "load",
      description: "Loads images into nodes",
      subcommands: [
        {
          name: "docker-image",
          description: "Loads docker images from host into nodes",
          args: {
            name: "image",
            isVariadic: true,
          },
          options: [nameOption("The cluster context name"), nodesOption],
        },
        {
          name: "image-archive",
          description: "Loads docker image from archive into nodes",
          args: {
            name: "IMAGE.tar",
            isVariadic: true,
            template: "filepaths",
          },
          options: [nameOption("The cluster context name"), nodesOption],
        },
      ],
    },
    {
      name: "version",
      description: "Prints the kind CLI version",
    },
  ],
  options: [
    {
      name: ["-h", "--help"],
      description: "Help for kind",
      isPersistent: true,
    },
    {
      name: ["-q", "--quiet"],
      description: "Silence all stderr output",
      isPersistent: true,
    },
    {
      name: ["-v", "--verbosity"],
      description: "Info log verbosity, higher value produces more output",
      isPersistent: true,
      args: {
        name: "int",
      },
    },
    {
      name: "--version",
      description: "Version for kind",
    },
  ],
};

export default completionSpec;
