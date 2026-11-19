// K9s v0.51.0 (latest GitHub release tag / Homebrew, 2026-11-19). Source: derailed/k9s tag v0.51.0 (cmd/root.go, cmd/info.go, cmd/version.go cobra flag definitions; cobra v1.10.2 default help/completion commands).
// Not run: the binary could not be built in the sandbox, so `k9s --help` output itself was not captured.

const namespaces: Fig.Generator = {
  script: ["kubectl", "get", "namespaces"],
  postProcess: (out) => {
    return out
      .split("\n")
      .slice(1)
      .map((line) => {
        return {
          name: line.split(" ").shift(),
          description: "Kubernetes namespace",
        };
      });
  },
};

const kubeContexts: Fig.Generator = {
  script: ["kubectl", "config", "get-contexts", "-o", "name"],
  postProcess: (out) =>
    out
      .split("\n")
      .filter(Boolean)
      .map((name) => ({ name, description: "Kubeconfig context" })),
};

const kubeClusters: Fig.Generator = {
  script: ["kubectl", "config", "get-clusters"],
  postProcess: (out) =>
    out
      .split("\n")
      .slice(1)
      .filter(Boolean)
      .map((name) => ({ name, description: "Kubeconfig cluster" })),
};

const kubeUsers: Fig.Generator = {
  script: ["kubectl", "config", "view", "-o", "jsonpath={.users[*].name}"],
  postProcess: (out) =>
    out
      .split(/\s+/)
      .filter(Boolean)
      .map((name) => ({ name, description: "Kubeconfig user" })),
};

const completionSpec: Fig.Spec = {
  name: "k9s",
  description:
    "K9s is a terminal based UI to interact with your Kubernetes clusters",
  subcommands: [
    {
      name: "completion",
      description: "Generate the autocompletion script for the specified shell",
      subcommands: [
        {
          name: "bash",
          description: "Generate the autocompletion script for bash",
          options: [
            {
              name: "--no-descriptions",
              description: "Disable completion descriptions",
            },
          ],
        },
        {
          name: "fish",
          description: "Generate the autocompletion script for fish",
          options: [
            {
              name: "--no-descriptions",
              description: "Disable completion descriptions",
            },
          ],
        },
        {
          name: "powershell",
          description: "Generate the autocompletion script for powershell",
          options: [
            {
              name: "--no-descriptions",
              description: "Disable completion descriptions",
            },
          ],
        },
        {
          name: "zsh",
          description: "Generate the autocompletion script for zsh",
          options: [
            {
              name: "--no-descriptions",
              description: "Disable completion descriptions",
            },
          ],
        },
      ],
    },
    {
      name: "help",
      description: "Help about any command",
      args: { name: "command", isOptional: true, template: "help" },
    },
    {
      name: "info",
      description: "List K9s configurations info",
      options: [
        {
          name: ["-h", "--help"],
          description: "Help for info",
        },
      ],
    },
    {
      name: "version",
      description: "Print version/build info",
      options: [
        {
          name: ["-h", "--help"],
          description: "Help for version",
        },
        {
          name: ["-s", "--short"],
          description: "Prints K9s version info in short format",
        },
      ],
    },
  ],
  options: [
    {
      name: ["-A", "--all-namespaces"],
      description: "Launch K9s in all namespaces",
    },
    {
      name: "--as",
      description: "Username to impersonate for the operation",
      args: {
        name: "string",
        description: "The username you want to impersonate",
      },
    },
    {
      name: "--as-group",
      description: "Group to impersonate for the operation",
      args: {
        name: "stringArray",
        description: "The group you want to impersonate",
      },
    },
    {
      name: "--certificate-authority",
      description: "Path to a cert file for the certificate authority",
      args: {
        name: "string",
        description: "The path to a cert file",
        template: "filepaths",
      },
    },
    {
      name: "--client-certificate",
      description: "Path to a client certificate file for TLS",
      args: {
        name: "string",
        description: "The path to a client certificate file",
        template: "filepaths",
      },
    },
    {
      name: "--client-key",
      description: "Path to a client key file for TLS",
      args: {
        name: "string",
        description: "The path to a client key file",
        template: "filepaths",
      },
    },
    {
      name: ["-c", "--command"],
      description:
        "Overrides the default resource to load when the application launches",
      args: {
        name: "string",
        description: "The command you want to execute",
      },
    },
    {
      name: "--cluster",
      description: "The name of the kubeconfig cluster to use",
      args: {
        name: "string",
        description: "The name of the kubeconfig cluster",
        generators: kubeClusters,
      },
    },
    {
      name: "--context",
      description: "The name of the kubeconfig context to use",
      args: {
        name: "string",
        description: "The name of the kubeconfig context",
        generators: kubeContexts,
      },
    },
    {
      name: "--crumbsless",
      description: "Turn K9s crumbs off",
    },
    {
      name: "--headless",
      description: "Turn K9s header off",
    },
    {
      name: ["-h", "--help"],
      description: "Show help for k9s",
    },
    {
      name: "--invert",
      description:
        "Invert skin (dark to light, light to dark), preserving colors",
    },
    {
      name: "--insecure-skip-tls-verify",
      description:
        "If true, the server's caCertFile will not be checked for validity",
    },
    {
      name: "--kubeconfig",
      description: "Path to the kubeconfig file to use for CLI requests",
      args: {
        name: "string",
        description: "The path to the kubeconfig file",
        template: "filepaths",
      },
    },
    {
      name: "--logFile",
      description: "Specify the log file",
      args: {
        name: "string",
        description: "The path of the log file",
        template: "filepaths",
        suggestCurrentToken: true,
      },
    },
    {
      name: ["-l", "--logLevel"],
      description:
        "Specify a log level (error, warn, info, debug) (default 'info')",
      args: {
        name: "string",
        description: "The log level",
        default: "info",
        suggestions: ["error", "warn", "info", "debug"],
      },
    },
    {
      name: "--logoless",
      description: "Turn K9s logo off",
    },
    {
      name: ["-n", "--namespace"],
      description: "If present, the namespace scope for this CLI request",
      args: {
        name: "string",
        description: "The namespace",
        generators: namespaces,
        debounce: true,
      },
    },
    {
      name: "--readonly",
      description:
        "Sets readOnly mode by overriding readOnly configuration setting",
    },
    {
      name: ["-r", "--refresh"],
      description:
        "Specify the default refresh rate as a float (sec) (default 2)",
      args: {
        name: "float",
        description: "The refresh rate (sec)",
        default: "2",
      },
    },
    {
      name: "--request-timeout",
      description:
        "The length of time to wait before giving up on a single server request",
      args: {
        name: "string",
        description: "The length of time to wait",
      },
    },
    {
      name: "--screen-dump-dir",
      description: "Sets a path to a dir for a screen dumps",
      args: {
        name: "string",
        description: "The path to a dir for a screen dumps",
        template: "folders",
      },
    },
    {
      name: "--splashless",
      description: "Turn K9s splash screen off",
    },
    {
      name: "--token",
      description: "Bearer token for authentication to the API server",
      args: {
        name: "string",
        description: "The Bearer token",
      },
    },
    {
      name: "--user",
      description: "The name of the kubeconfig user to use",
      args: {
        name: "string",
        description: "The name of the kubeconfig user",
        generators: kubeUsers,
      },
    },
    {
      name: "--write",
      description:
        "Sets write mode by overriding the readOnly configuration setting",
    },
  ],
};
export default completionSpec;
