// Okteto v3.25.0 (GitHub release okteto/okteto 2026-11-05, latest stable and Homebrew formula, re-verified 2026-11-20).
// Source: cobra command and flag definitions in main.go and cmd/ at tag 3.25.0 (CLI not installed here).
// Verified every command, alias and flag (long/short names) against the source; hidden commands (kubetoken,
// registrytoken, remote-run, generate-schema) are left out, and `context update-kubeconfig` was removed because
// it is no longer registered under `context` (only `okteto kubeconfig` calls it).

const contexts: Fig.Generator = {
  script: ["okteto", "context", "list"],
  cache: {
    ttl: 1000 * 60 * 30, // 30 minutes
  },
  postProcess: (output) => {
    return output
      .split("\n")
      .slice(1)
      .map((context, ind) => {
        context = context.split(" ")[0];
        return {
          name: context.replace("*", "").trim(),
          description: "Context",
          icon: "fig://icon?type=okteto",
        };
      });
  },
};

const namespaces: Fig.Generator = {
  script: ["okteto", "namespace", "list"],
  cache: {
    ttl: 1000 * 60 * 30, // 30 minutes
  },
  postProcess: (output) => {
    return output
      .split("\n")
      .slice(1)
      .map((namespace, ind) => {
        namespace = namespace.split(" ")[0];
        return {
          name: namespace.replace("*", "").trim(),
          description: "Namespace",
          icon: "fig://icon?type=okteto",
        };
      });
  },
};

const previews: Fig.Generator = {
  script: ["okteto", "preview", "list", "--output", "json"],
  postProcess: (output) => {
    try {
      return (JSON.parse(output) as { name: string; scope: string }[]).map(
        (preview) => ({
          name: preview.name,
          description: `Preview Environment (${preview.scope})`,
          icon: "fig://icon?type=okteto",
        })
      );
    } catch {
      return [];
    }
  },
};

const contextOption: Fig.Option = {
  name: ["--context", "-c"],
  description: "Overwrite the current Okteto Context",
  args: { name: "context", generators: contexts },
};

const namespaceOption: Fig.Option = {
  name: ["--namespace", "-n"],
  description: "Overwrite the current Okteto Namespace",
  args: { name: "namespace", generators: namespaces },
};

const fileOption: Fig.Option = {
  name: ["--file", "-f"],
  description: "The path to the Okteto Manifest",
  args: { name: "file", template: "filepaths" },
};

const nameOption: Fig.Option = {
  name: "--name",
  description: "The name of the Development Environment",
  args: { name: "name" },
};

const manifestOptions = [fileOption, namespaceOption, contextOption];

const output = (...formats: string[]): Fig.Option => ({
  name: ["--output", "-o"],
  description: "Output format",
  args: { name: "format", suggestions: formats },
});

const variable = (description: string): Fig.Option => ({
  name: ["--var", "-v"],
  description,
  isRepeatable: true,
  args: { name: "NAME=VALUE" },
});

const timeout = (description: string): Fig.Option => ({
  name: ["--timeout", "-t"],
  description,
  args: { name: "duration" },
});

const wait = (description: string): Fig.Option => ({
  name: ["--wait", "-w"],
  description,
});

const label = (description: string): Fig.Option => ({
  name: "--label",
  description,
  isRepeatable: true,
  args: { name: "label" },
});

const dependencies = (description: string): Fig.Option => ({
  name: "--dependencies",
  description,
});

const tokenOptions: Fig.Option[] = [
  {
    name: ["--token", "-t"],
    description: "API token for authentication",
    args: { name: "token" },
  },
  {
    name: ["--namespace", "-n"],
    description: "Overwrite the current Okteto Namespace",
    args: { name: "namespace" },
  },
  {
    name: "--okteto",
    description: "Only show Okteto context options",
    hidden: true,
  },
];

const devContainerArg: Fig.Arg = { name: "devContainer", isOptional: true };

const completionShell = (shell: string): Fig.Subcommand => ({
  name: shell,
  description: `Generate the autocompletion script for ${shell}`,
  options: [
    {
      name: "--no-descriptions",
      description: "Disable completion descriptions",
    },
  ],
});

const subcommands: Fig.Subcommand[] = [
  {
    name: "analytics",
    description: "Enable / Disable analytics",
    options: [
      {
        name: ["--disable", "-d"],
        description: "Disable analytics collection",
      },
    ],
  },
  {
    name: "build",
    description:
      "Build and push the images defined in the 'build' section of your Okteto Manifest",
    args: { name: "image", isVariadic: true, isOptional: true },
    options: [
      contextOption,
      namespaceOption,
      {
        name: ["--file", "-f"],
        description: "The path to the Okteto Manifest or Dockerfile",
        args: { name: "file", template: "filepaths" },
      },
      {
        name: ["--tag", "-t"],
        description: "Tag name to be pushed",
        args: { name: "tag" },
      },
      {
        name: "--target",
        description: "Target build stage to build",
        args: { name: "target" },
      },
      {
        name: "--no-cache",
        description: "Do not use cache when building the image",
      },
      {
        name: "--cache-from",
        description: "Cache source image",
        isRepeatable: true,
        args: { name: "image" },
      },
      {
        name: "--export-cache",
        description: "Image tag for exported cache when building",
        isRepeatable: true,
        args: { name: "image" },
      },
      {
        name: "--progress",
        description: "Show plain/tty build output",
        args: {
          name: "progress",
          suggestions: ["tty", "plain"],
          default: "tty",
        },
      },
      {
        name: "--build-arg",
        description: "Set build-time variables",
        isRepeatable: true,
        args: { name: "NAME=VALUE" },
      },
      {
        name: "--secret",
        description:
          "Secret exposed to the build: id=mysecret,src=/local/secret (file) or id=mysecret,env=MY_ENV_VAR (env var)",
        isRepeatable: true,
        args: { name: "secret" },
      },
      {
        name: "--platform",
        description: "Platform to build the container image for",
        args: { name: "platform" },
      },
    ],
  },
  {
    name: "completion",
    description: "Generate the autocompletion script for the specified shell",
    subcommands: ["bash", "fish", "powershell", "zsh"].map(completionShell),
  },
  {
    name: ["context", "ctx"],
    description: "Set the default Okteto Context",
    subcommands: [
      {
        name: "show",
        description: "Print the current Okteto Context",
        options: [
          output("json", "yaml"),
          {
            name: "--include-token",
            description: "Include the token in the output",
          },
        ],
      },
      {
        name: "use",
        description: "Set the default Okteto Context",
        args: {
          name: "url | Kubernetes context",
          isOptional: true,
          generators: contexts,
        },
        options: tokenOptions,
      },
      {
        name: ["list", "ls"],
        description: "List available Okteto Contexts",
        options: [output("json", "yaml")],
      },
      {
        name: "delete",
        description: "Delete one or more Okteto Contexts",
        args: { name: "context", isVariadic: true, generators: contexts },
      },
    ],
    options: [
      ...tokenOptions,
      {
        name: "--insecure-skip-tls-verify",
        description: "Skip validation of server's certificates",
        isPersistent: true,
      },
    ],
  },
  {
    name: "deploy",
    description:
      "Deploy your Development Environment by running the commands specified in the 'deploy' section of your Okteto Manifest",
    options: [
      nameOption,
      ...manifestOptions,
      variable("Set a variable for the deploy commands"),
      { name: "--no-build", description: "Skip the re-build of images" },
      dependencies(
        "Force deployment of repositories in the 'dependencies' section"
      ),
      {
        name: "--no-bash",
        description:
          "Execute the command using the container's default shell instead of bash",
      },
      {
        name: "--remote",
        description: "Run the deploy commands using Remote Execution",
      },
      wait("Wait until the deployment finishes and pods are healthy"),
      timeout(
        "The maximum time to wait for each dependency and, with --wait, for the deployment to be healthy"
      ),
    ],
  },
  {
    name: "destroy",
    description: "Destroy your Development Environment",
    options: [
      nameOption,
      ...manifestOptions,
      {
        name: ["--volumes", "-v"],
        description: "Remove persistent volumes",
      },
      dependencies("Destroy repositories in the 'dependencies' section"),
      {
        name: "--force-destroy",
        description:
          "Destroy the Development Environment even if the custom destroy commands fail",
      },
      { name: "--no-bash", description: "Execute commands without bash" },
      {
        name: "--all",
        description:
          "Destroy all Development Environments, excluding resources annotated with dev.okteto.com/policy: keep",
      },
      {
        name: "--remote",
        description: "Force running the destroy commands in remote",
      },
    ],
  },
  {
    name: "doctor",
    description:
      "Generate a doctor file with all the information relevant for troubleshooting an issue",
    args: devContainerArg,
    options: manifestOptions,
  },
  {
    name: "down",
    description:
      "Deactivate your Development Container, stop the file synchronization service, and restore your previous deployment configuration",
    args: devContainerArg,
    options: [
      ...manifestOptions,
      {
        name: ["--volumes", "-v"],
        description:
          "Remove persistent volumes where your local folder is synched on remote",
      },
      {
        name: ["--all", "-A"],
        description: "Deactivate all running Development Containers",
      },
    ],
  },
  {
    name: "endpoints",
    description: "List the public endpoints of your Development Environment",
    options: [nameOption, ...manifestOptions, output("json", "md")],
  },
  {
    name: "exec",
    description: "Execute a command inside your Development Container",
    args: [
      devContainerArg,
      { name: "command", isCommand: true, isOptional: true },
    ],
    options: manifestOptions,
  },
  {
    name: "kubeconfig",
    description:
      "Download credentials for the Kubernetes cluster selected via 'okteto context'",
  },
  {
    name: "logs",
    description: "Fetch the logs of your Development Environment",
    args: { name: "service", isOptional: true },
    options: [
      nameOption,
      ...manifestOptions,
      {
        name: ["--all", "-a"],
        description: "Fetch logs from the whole namespace",
      },
      {
        name: ["--exclude", "-e"],
        description: "Exclude by pod name (regular expression)",
        args: { name: "regex" },
      },
      {
        name: ["--since", "-s"],
        description:
          "Return logs newer than a relative duration like 5s, 2m, or 3h",
        args: { name: "duration", default: "48h" },
      },
      {
        name: "--tail",
        description: "The number of lines from the end of the logs to show",
        args: { name: "lines", default: "100" },
      },
      { name: ["--timestamps", "-t"], description: "Print timestamps" },
    ],
  },
  {
    name: ["namespace", "ns"],
    description: "Configure the default namespace of the Okteto Context",
    args: { name: "namespace", isOptional: true, generators: namespaces },
    options: [{ name: "--personal", description: "Load personal namespace" }],
    subcommands: [
      {
        name: ["use", "ns"],
        description: "Configure the default namespace of the Okteto Context",
        args: { name: "namespace", isOptional: true, generators: namespaces },
        options: [
          { name: "--personal", description: "Load personal namespace" },
        ],
      },
      {
        name: ["list", "ls"],
        description: "List your Okteto Namespaces",
        options: [output("json", "yaml")],
      },
      {
        name: "create",
        description: "Create an Okteto Namespace",
        args: { name: "name" },
        options: [
          {
            name: ["--members", "-m"],
            description:
              "Members of the Okteto Namespace, it can be a username or email",
            isRepeatable: true,
            args: { name: "member" },
          },
          {
            name: "--use",
            description:
              "Use the newly created Okteto Namespace as the current namespace (default true)",
          },
        ],
      },
      {
        name: "delete",
        description: "Delete an Okteto Namespace",
        args: { name: "namespace", isOptional: true, generators: namespaces },
        options: [
          wait(
            "Wait until the Okteto Namespace is fully deleted from the cluster (default true)"
          ),
          timeout(
            "The duration to wait for the Okteto Namespace to be deleted"
          ),
        ],
      },
      {
        name: "sleep",
        description: "Sleep an Okteto Namespace",
        args: { name: "namespace", isOptional: true, generators: namespaces },
      },
      {
        name: "wake",
        description:
          "Wake an Okteto Namespace (defaults to the namespace in the Okteto Context)",
        args: { name: "namespace", isOptional: true, generators: namespaces },
      },
    ],
  },
  {
    name: "pipeline",
    description: "Development Environments management commands",
    subcommands: [
      {
        name: "deploy",
        description:
          "Run a job in the cluster that clones a repository and executes okteto deploy on it",
        options: [
          { ...nameOption, name: ["--name", "-p"] },
          contextOption,
          namespaceOption,
          fileOption,
          {
            name: ["--repository", "-r"],
            description:
              "The repository to deploy (defaults to your current repository)",
            args: { name: "repository" },
          },
          {
            name: ["--branch", "-b"],
            description:
              "The branch to deploy (defaults to your current branch)",
            args: { name: "branch" },
          },
          wait("Wait until the deployment finishes (default true)"),
          {
            name: "--skip-if-exists",
            description:
              "Skip the deployment if the Development Environment already exists",
          },
          timeout(
            "The length of time to wait for the deployment, zero means never"
          ),
          variable("Set a variable to be injected in the deploy commands"),
          label("Tag and organize Development Environments using labels"),
          {
            name: "--reuse-params",
            description:
              "If the Development Environment exists, reuse same parameters to redeploy",
          },
          dependencies(
            "Force deployment of repositories in the 'dependencies' section"
          ),
        ],
      },
      {
        name: "destroy",
        description:
          "Run a job in the cluster that clones a repository and executes okteto destroy on it",
        options: [
          { ...nameOption, name: ["--name", "-p"] },
          contextOption,
          namespaceOption,
          wait(
            "Wait until the Development Environment is destroyed (default true)"
          ),
          {
            name: ["--volumes", "-v"],
            description:
              "Destroy persistent volumes created by the Development Environment",
          },
          timeout(
            "The duration to wait for the Development Environment to be destroyed"
          ),
          dependencies("Destroy repositories in the 'dependencies' section"),
        ],
      },
      {
        name: "list",
        description:
          "List all your Development Environments in the current Okteto Namespace",
        options: [
          contextOption,
          namespaceOption,
          label("Filter Development Environments by label"),
          output("json", "yaml"),
        ],
      },
    ],
  },
  {
    name: "preview",
    description: "Preview Environment management commands",
    subcommands: [
      {
        name: "deploy",
        description: "Deploy a Preview Environment",
        args: { name: "name", isOptional: true },
        options: [
          contextOption,
          fileOption,
          {
            name: ["--branch", "-b"],
            description:
              "The branch to deploy (defaults to your current branch)",
            args: { name: "branch" },
          },
          {
            name: ["--repository", "-r"],
            description:
              "The repository to deploy (defaults to your current repository)",
            args: { name: "repository" },
          },
          {
            name: ["--scope", "-s"],
            description: "The scope of Preview Environment to create",
            args: {
              name: "scope",
              suggestions: ["personal", "global"],
              default: "global",
            },
          },
          {
            name: "--sourceUrl",
            description: "The URL of the original pull/merge request",
            args: { name: "url" },
          },
          timeout("The duration to wait for the deployment to complete"),
          variable("Set a variable to be injected in the deploy commands"),
          wait("Wait until the deployment finishes (default true)"),
          label("Tag and organize Preview Environments using labels"),
          dependencies(
            "Force deployment of repositories in the 'dependencies' section"
          ),
        ],
      },
      {
        name: "destroy",
        description: "Destroy a Preview Environment",
        args: { name: "name", generators: previews },
        options: [
          contextOption,
          wait(
            "Wait until the Preview Environment destruction finishes (default true)"
          ),
          timeout(
            "The duration to wait for the Preview Environment to be destroyed"
          ),
        ],
      },
      {
        name: "list",
        description: "List all Preview Environments",
        options: [
          contextOption,
          namespaceOption,
          label("Filter Preview Environments by label"),
          output("json", "yaml"),
        ],
      },
      {
        name: "endpoints",
        description: "List the endpoints of a Preview Environment",
        args: { name: "name", generators: previews },
        options: [contextOption, output("json", "md")],
      },
      {
        name: "sleep",
        description: "Sleep a Preview Environment",
        args: { name: "name", generators: previews },
        options: [contextOption],
      },
      {
        name: "wake",
        description: "Wake a Preview Environment",
        args: { name: "name", generators: previews },
        options: [contextOption],
      },
    ],
  },
  {
    name: "restart",
    description:
      "Restart the containers corresponding to the 'services' section for a given Development Container",
    hidden: true,
    args: devContainerArg,
    options: manifestOptions,
  },
  {
    name: "status",
    description:
      "Status of the file synchronization process for a given Development Container",
    args: devContainerArg,
    options: [
      ...manifestOptions,
      {
        name: ["--info", "-i"],
        description:
          "Show syncthing links for troubleshooting the synchronization service",
      },
      { name: ["--watch", "-w"], description: "Watch for changes" },
    ],
  },
  {
    name: "test",
    description: "Run tests using Remote Execution",
    args: { name: "testName", isVariadic: true, isOptional: true },
    options: [
      nameOption,
      ...manifestOptions,
      variable("Set a variable to be injected in the test commands"),
      timeout("The duration to wait for the Test Container to run"),
      {
        name: "--deploy",
        description: "Force execution of the commands in the 'deploy' section",
      },
      {
        name: "--no-cache",
        description: "Do not reuse the caches of a Test Container",
      },
    ],
  },
  {
    name: "up",
    description: "Activate a Development Container",
    args: [
      { name: "service", isOptional: true },
      { name: "command", isCommand: true, isOptional: true },
    ],
    options: [
      ...manifestOptions,
      {
        name: ["--env", "-e"],
        description: "Set environment variable in the Development Container",
        isRepeatable: true,
        args: { name: "NAME=VALUE" },
      },
      {
        name: ["--remote", "-r"],
        description: "Expose the SSH server in a given port",
        args: { name: "port" },
      },
      {
        name: ["--deploy", "-d"],
        description: "Force the redeployment of your Development Environment",
      },
      {
        name: "--pull",
        description: "Force the Development Container image to be pulled",
        hidden: true,
      },
      {
        name: "--reset",
        description: "Reset the file synchronization service",
      },
    ],
  },
  {
    name: "validate",
    description: "Validate the Okteto Manifest file syntax",
    options: [fileOption],
  },
  {
    name: "version",
    description: "Show the currently installed Okteto CLI binary version",
    subcommands: [
      {
        name: "update",
        description:
          "Show information about how to update the Okteto CLI binary",
      },
      { name: "show", description: "Show Okteto CLI version" },
    ],
  },
];

// `okteto help <command>` mirrors the visible command tree, without options
const helpTree = (commands: Fig.Subcommand[]): Fig.Subcommand[] =>
  commands
    .filter((command) => !command.hidden)
    .map(({ name, description, subcommands }) => ({
      name,
      description,
      subcommands: subcommands && helpTree(subcommands),
    }));

const completionSpec: Fig.Spec = {
  name: "okteto",
  icon: "fig://icon?type=okteto",
  description:
    "The Okteto Command Line Interface is a unified tool to manage Development Environments",
  subcommands: [
    ...subcommands,
    {
      name: "help",
      description: "Help about any command",
      subcommands: helpTree(subcommands),
    },
  ],
  options: [
    {
      name: ["--log-level", "-l"],
      description: "Amount of information output",
      isPersistent: true,
      args: {
        name: "level",
        suggestions: ["debug", "info", "warn", "error"],
        default: "warn",
      },
    },
    {
      name: "--log-output",
      description: "Output format for logs",
      isPersistent: true,
      args: {
        name: "format",
        suggestions: ["tty", "plain", "json"],
        default: "tty",
      },
    },
    {
      name: ["--help", "-h"],
      description: "Help for okteto",
      isPersistent: true,
    },
  ],
};
export default completionSpec;
