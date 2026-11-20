// Rancher CLI v2.15.3 (latest stable tag of rancher/cli, also Homebrew's rancher-cli version, 2026-11-20).
// Source: static read of the Go sources at tag v2.15.3 (main.go and cmd/*.go, urfave/cli v3.10.1 definitions
// including its built-in `completion` command); the binary was not run. The apps, catalog, globaldns and
// multiclusterapps commands no longer exist upstream and were removed; `token` and `completion` were added.

const serverList = (excludeCurrent: boolean): Fig.Generator => ({
  script: [
    "rancher",
    "server",
    "ls",
    "--format",
    "{{.Current}}|{{.Name}}|{{.URL}}",
  ],
  postProcess: (out) =>
    out
      .split("\n")
      .filter((line) => line.trim() !== "")
      .map((line) => {
        const [current, name, ...url] = line.split("|");
        return { current, name, url: url.join("|") };
      })
      .filter(({ current }) => !(excludeCurrent && current.trim() === "*"))
      .map(({ name, url }) => ({
        name,
        description: url,
        icon: "https://rancher.com/docs/img/favicon.png",
      })),
});

// Most `ls` style commands accept --format with a Go template over their row type
const formatOption = (
  example: string,
  name: string | string[] = "--format"
): Fig.Option => ({
  name,
  description: `Output format: 'json', 'yaml' or a custom Go template, e.g. '${example}'`,
  args: {
    name: "format",
    suggestions: ["json", "yaml"],
  },
});

const settingsFormatOption = formatOption("{{.Setting.Name}}", [
  "--format",
  "-o",
]);

const quietOption: Fig.Option = {
  name: ["--quiet", "-q"],
  description: "Only display IDs or suppress help text",
};

const memberRoleArgs: Fig.Arg[] = [
  {
    name: "USERNAME",
    description: "The name of the user",
  },
  {
    name: "ROLE",
    description: "The role(s) to add or remove",
    isVariadic: true,
  },
];

const completionSpec: Fig.Spec = {
  name: "rancher",
  description: "Rancher CLI, managing containers one UTF-8 character at a time",
  subcommands: [
    {
      name: ["clusters", "cluster"],
      description: "Operations on clusters",
      icon: "https://rancher.com/docs/img/favicon.png",
      subcommands: [
        {
          name: "ls",
          description: "List clusters",
          options: [
            formatOption("{{.Cluster.ID}} {{.Cluster.Name}}"),
            quietOption,
          ],
        },
        {
          name: "create",
          description: "Create a new empty cluster",
          args: {
            name: "NEWCLUSTERNAME",
            description: "The name of the cluster to create",
          },
          options: [
            {
              name: "--description",
              description: "Description to apply to the cluster",
              args: { name: "description" },
            },
          ],
        },
        {
          name: "import",
          description:
            "Import an existing Kubernetes cluster into a Rancher cluster",
          args: {
            name: "CLUSTERID/CLUSTERNAME",
            description: "The ID or name of the cluster to import",
          },
          options: [quietOption],
        },
        {
          name: "add-node",
          description:
            "Output the docker command needed to add a node to an existing Rancher custom cluster",
          args: {
            name: "CLUSTERID/CLUSTERNAME",
            description: "The ID or name of the cluster",
          },
          options: [
            {
              name: "--label",
              description:
                "Label to apply to a node in the format [name]=[value]",
              args: { name: "name=value" },
              isRepeatable: true,
            },
            {
              name: "--etcd",
              description: "Use node for etcd",
            },
            {
              name: "--management",
              description:
                "Use node for management (deprecated, use --controlplane instead)",
              deprecated: true,
            },
            {
              name: "--controlplane",
              description: "Use node for controlplane",
            },
            {
              name: "--worker",
              description: "Use node as a worker",
            },
            quietOption,
          ],
        },
        {
          name: ["delete", "rm"],
          description: "Delete a cluster",
          args: {
            name: "CLUSTERID/CLUSTERNAME",
            description: "The ID or name of the cluster to delete",
            isVariadic: true,
          },
        },
        {
          name: "export",
          description: "Export a cluster",
          args: {
            name: "CLUSTERID/CLUSTERNAME",
            description: "The ID or name of the cluster to export",
          },
        },
        {
          name: ["kubeconfig", "kf"],
          description: "Return the kube config used to access the cluster",
          args: {
            name: "CLUSTERID/CLUSTERNAME",
            description: "The ID or name of the cluster",
          },
        },
        {
          name: "add-member-role",
          description: "Add a member to the cluster",
          args: memberRoleArgs,
          options: [
            {
              name: "--cluster-id",
              description:
                "Optional cluster ID to add member role to, defaults to the current context",
              args: { name: "cluster-id" },
            },
          ],
        },
        {
          name: "delete-member-role",
          description: "Delete a member from the cluster",
          args: memberRoleArgs,
          options: [
            {
              name: "--cluster-id",
              description:
                "Optional cluster ID to remove member role from, defaults to the current context",
              args: { name: "cluster-id" },
            },
          ],
        },
        {
          name: "list-roles",
          description: "List all available roles for a cluster",
        },
        {
          name: "list-members",
          description: "List current members of the cluster",
          options: [
            {
              name: "--cluster-id",
              description:
                "Optional cluster ID to list members for, defaults to the current context",
              args: { name: "cluster-id" },
            },
            formatOption("{{.ID }} {{.Member }}"),
            quietOption,
          ],
        },
      ],
    },
    {
      name: "completion",
      description:
        "Output shell completion script for bash, zsh, fish, or Powershell",
      subcommands: [
        {
          name: "bash",
          description: "Output bash completion script",
        },
        {
          name: "zsh",
          description: "Output zsh completion script",
        },
        {
          name: "fish",
          description: "Output fish completion script",
        },
        {
          name: "pwsh",
          description: "Output pwsh completion script",
        },
      ],
    },
    {
      name: "context",
      description: "Operations for the context",
      subcommands: [
        {
          name: "switch",
          description: "Switch to a new context",
          args: {
            name: "PROJECT_ID/PROJECT_NAME",
            description:
              "The project to switch to, if omitted a list of available projects is displayed",
            isOptional: true,
          },
        },
        {
          name: "current",
          description: "Display the current context",
        },
      ],
    },
    {
      name: "inspect",
      description: "View details of resources",
      args: {
        name: "RESOURCEID/RESOURCENAME",
        description: "The ID or name of the resource to inspect",
      },
      options: [
        {
          name: "--links",
          description: "Include URLs to actions and links in resource output",
        },
        {
          name: "--type",
          description: "Specify the type of resource to inspect",
          args: {
            name: "type",
            suggestions: [
              "cluster",
              "node",
              "project",
              "secret",
              "namespacedSecret",
              "workload",
              "persistentVolume",
              "storageClass",
              "namespace",
            ],
          },
        },
        {
          name: "--format",
          description:
            "Output format: 'json' (default), 'yaml' or a custom Go template, e.g. '{{.kind}}'",
          args: {
            name: "format",
            suggestions: ["json", "yaml"],
          },
        },
      ],
    },
    {
      name: "kubectl",
      description: "Run kubectl commands",
      icon: "fig://icon?type=kubernetes",
      args: {
        name: "kubectl args",
        description:
          "Arguments passed to kubectl using the current cluster context",
        isVariadic: true,
        isOptional: true,
      },
    },
    {
      name: ["login", "l"],
      description: "Login to a Rancher server",
      args: {
        name: "SERVERURL",
        description: "The server url you want to login to",
      },
      options: [
        {
          name: "--context",
          description: "Set the context during login",
          args: { name: "context" },
        },
        {
          name: ["--token", "-t"],
          description: "Token from the Rancher UI",
          args: {
            name: "BEARER_TOKEN",
            description: "The token you want to use",
          },
        },
        {
          name: "--cacert",
          description: "Location of the CACerts to use",
          args: {
            name: "cacert",
            template: "filepaths",
          },
        },
        {
          name: "--name",
          description: "Name of the server",
          args: { name: "name" },
        },
      ],
    },
    {
      name: ["machines", "machine"],
      description: "Operations on machines",
      subcommands: [
        {
          name: "ls",
          description: "List machines",
          options: [
            formatOption("{{.Machine.ID}} {{.Machine.Name}}"),
            quietOption,
          ],
        },
      ],
    },
    {
      name: ["namespaces", "namespace"],
      description: "Operations on namespaces",
      options: [quietOption],
      subcommands: [
        {
          name: "ls",
          description: "List namespaces",
          options: [
            {
              name: "--all-namespaces",
              description: "List all namespaces in the current cluster",
            },
            formatOption("{{.Namespace.ID}} {{.Namespace.Name}}"),
            quietOption,
          ],
        },
        {
          name: "create",
          description: "Create a namespace",
          args: {
            name: "NEWNAMESPACENAME",
            description: "The name of the namespace to create",
          },
          options: [
            {
              name: "--description",
              description: "Description to apply to the namespace",
              args: { name: "description" },
            },
          ],
        },
        {
          name: ["delete", "rm"],
          description: "Delete a namespace by name or ID",
          args: {
            name: "NAMESPACEID/NAMESPACENAME",
            description: "The ID or name of the namespace to delete",
            isVariadic: true,
          },
        },
        {
          name: "move",
          description: "Move a namespace to a different project",
          args: [
            {
              name: "NAMESPACEID/NAMESPACENAME",
              description: "The ID or name of the namespace to move",
            },
            {
              name: "PROJECTID",
              description: "The ID of the project to move the namespace to",
            },
          ],
        },
      ],
    },
    {
      name: ["nodes", "node"],
      description: "Operations on nodes",
      subcommands: [
        {
          name: "ls",
          description: "List nodes",
          options: [formatOption("{{.Node.ID}} {{.Node.Name}}"), quietOption],
        },
        {
          name: ["delete", "rm"],
          description: "Delete a node by ID",
          args: {
            name: "NODEID/NODENAME",
            description: "The ID or name of the node to delete",
            isVariadic: true,
          },
        },
      ],
    },
    {
      name: ["projects", "project"],
      description: "Operations on projects",
      subcommands: [
        {
          name: "ls",
          description: "List projects",
          options: [
            formatOption("{{.Project.ID}} {{.Project.Name}}"),
            quietOption,
          ],
        },
        {
          name: "create",
          description: "Create a project",
          args: {
            name: "NEWPROJECTNAME",
            description: "The name of the project to create",
          },
          options: [
            {
              name: "--cluster",
              description: "Cluster ID to create the project in",
              args: { name: "cluster" },
            },
            {
              name: "--description",
              description: "Description to apply to the project",
              args: { name: "description" },
            },
          ],
        },
        {
          name: ["delete", "rm"],
          description: "Delete a project by ID",
          args: {
            name: "PROJECTID/PROJECTNAME",
            description: "The ID or name of the project to delete",
            isVariadic: true,
          },
        },
        {
          name: "add-member-role",
          description: "Add a member to the project",
          args: memberRoleArgs,
          options: [
            {
              name: "--project-id",
              description:
                "Optional project ID to apply this change to, defaults to the current context",
              args: { name: "project-id" },
            },
          ],
        },
        {
          name: "delete-member-role",
          description: "Delete a member from the project",
          args: memberRoleArgs,
          options: [
            {
              name: "--project-id",
              description:
                "Optional project ID to apply this change to, defaults to the current context",
              args: { name: "project-id" },
            },
          ],
        },
        {
          name: "list-roles",
          description: "List all available roles for a project",
        },
        {
          name: "list-members",
          description: "List current members of the project",
          options: [
            {
              name: "--project-id",
              description:
                "Optional project ID to list members for, defaults to the current context",
              args: { name: "project-id" },
            },
            formatOption("{{.ID }} {{.Member }}"),
            quietOption,
          ],
        },
      ],
    },
    {
      name: "ps",
      description: "Show workloads in a project",
      options: [
        {
          name: "--project",
          description: "Optional project to show workloads for",
          args: { name: "project" },
        },
        formatOption("{{.Name}} {{.Image}}"),
      ],
    },
    {
      name: "server",
      description: "Operations for the server",
      subcommands: [
        {
          name: "current",
          description: "Display the current server",
        },
        {
          name: "delete",
          description: "Delete a server from the local config",
          args: {
            name: "SERVER_NAME",
            description:
              "The name of the server to delete, if omitted a list of servers is displayed",
            isOptional: true,
            generators: serverList(false),
          },
          isDangerous: true,
        },
        {
          name: "ls",
          description: "List all servers",
          options: [formatOption("{{.Name}} {{.URL}}")],
        },
        {
          name: "switch",
          description: "Switch to a new server",
          args: {
            name: "SERVER_NAME",
            description:
              "The name of the server to switch to, if omitted a list of servers is displayed",
            isOptional: true,
            generators: serverList(true),
          },
        },
      ],
    },
    {
      name: ["settings", "setting"],
      description: "Show settings for the current server",
      options: [settingsFormatOption],
      subcommands: [
        {
          name: "ls",
          description: "List settings",
          options: [settingsFormatOption, quietOption],
        },
        {
          name: "get",
          description: "Print a setting",
          args: {
            name: "SETTINGNAME",
            description: "The name of the setting you want to get",
          },
          options: [settingsFormatOption],
        },
        {
          name: "set",
          description: "Set the value for a setting",
          args: [
            {
              name: "SETTINGNAME",
              description: "The name of the setting you want to set",
            },
            {
              name: "VALUE",
              description: "The value of the setting you want to set",
              isOptional: true,
            },
          ],
          options: [
            settingsFormatOption,
            {
              name: "--default",
              description:
                "Reset the setting back to its default value, if the default value is (blank) it will be set to that",
            },
          ],
        },
      ],
    },
    {
      name: "ssh",
      description: "SSH into a node",
      args: [
        {
          name: "NODE_ID/NODE_NAME",
          description: "The ID or name of the node, optionally as login@node",
        },
        {
          name: "command",
          description: "Command to run on the node",
          isVariadic: true,
          isOptional: true,
        },
      ],
      options: [
        {
          name: ["--external", "-e"],
          description: "Use the external ip address of the node",
        },
        {
          name: ["--login", "-l"],
          description: "The login name",
          args: { name: "login" },
        },
      ],
    },
    {
      name: "token",
      description: "Authenticate and generate new kubeconfig token",
      options: [
        {
          name: "--server",
          description: "Name of rancher server",
          args: { name: "server" },
        },
        {
          name: "--user",
          description: "User ID",
          args: { name: "user-id" },
        },
        {
          name: "--cluster",
          description: "Cluster ID",
          args: { name: "cluster-id" },
        },
        {
          name: "--auth-provider",
          description: "Name of auth provider to use for authentication",
          args: { name: "auth-provider" },
        },
        {
          name: "--auth-flow",
          description:
            "Auth flow to use for OAuth providers: 'devicecode' (default) or 'authcode'",
          args: {
            name: "auth-flow",
            suggestions: ["devicecode", "authcode"],
          },
        },
        {
          name: "--cacerts",
          description: "Location of CaCerts to use",
          args: {
            name: "cacerts",
            template: "filepaths",
          },
        },
        {
          name: "--skip-verify",
          description:
            "Skip verification of the CACerts presented by the server",
        },
      ],
      subcommands: [
        {
          name: "delete",
          description:
            "Delete cached token used for kubectl login, or 'all' to delete every cached token",
          args: {
            name: "CACHED_TOKEN",
            description:
              "Cached credential key, e.g. cluster1_c-1234, or 'all'",
            isVariadic: true,
            suggestions: ["all"],
          },
        },
      ],
    },
    {
      name: "up",
      description: "Apply compose config",
      options: [
        {
          name: ["--file", "-f"],
          description: "The location of compose config file",
          args: {
            name: "file",
            template: "filepaths",
          },
        },
      ],
    },
    {
      name: "wait",
      description: "Wait for resources cluster, project",
      args: {
        name: "ID/NAME",
        description: "The ID or name of the cluster or project to wait for",
      },
      options: [
        {
          name: "--timeout",
          description: "Time in seconds to wait for a resource",
          args: { name: "seconds", default: "120" },
        },
      ],
    },
    {
      name: ["help", "h"],
      description: "Shows a list of commands or help for one command",
    },
  ],
  options: [
    {
      name: "--debug",
      description: "Debug logging",
      isPersistent: true,
    },
    {
      name: ["--config", "-c"],
      description:
        "Path to rancher config (default: ~/.rancher, env: RANCHER_CONFIG_DIR)",
      isPersistent: true,
      args: {
        name: "RANCHER_CONFIG_PATH",
        template: "folders",
        description: "The path to the rancher config",
      },
    },
    {
      name: ["--help", "-h"],
      description: "Show help",
      isPersistent: true,
    },
    {
      name: ["--version", "-v"],
      description: "Print the version",
    },
  ],
};
export default completionSpec;
