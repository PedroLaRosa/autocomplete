// Dapr CLI v1.19.1 (latest stable tag of github.com/dapr/cli via git ls-remote, 2026-11-19). Source: static read of the cobra command definitions in cmd/*.go, cmd/scheduler/*.go and cmd/workflow/*.go at tag v1.19.1 (binary not executed).
// Changes vs the previous spec: `dashboard` command and `--dashboard-version` removed upstream (v1.18.0); added `mcpservers`, `scheduler` and `workflow` commands, init `--scheduler-*`/`--redis-stack` flags and run `--scheduler-host-address`; `--max-body-size`/`--read-buffer-size` replace the removed `--dapr-http-*` size flags.
import { filepaths } from "@tabsmith/autocomplete-generators";

const runningAppsGenerator: Fig.Generator = {
  script: ["dapr", "list", "-A", "-o", "json"],
  postProcess: function (out) {
    try {
      const appList = JSON.parse(out);
      return appList.map((app) => {
        return {
          name: app.appId,
          description: `HTTP Port: ${app.httpPort} age: ${app.age}`,
        };
      });
    } catch {
      return [];
    }
  },
};

const runtimeVersionsGenerator: Fig.Generator = {
  cache: {
    ttl: 1000 * 60 * 60 * 24 * 2, // 2 days
  },
  custom: async (context, executeShellCommand): Promise<Fig.Suggestion[]> => {
    const queryVersions = [
      "-s",
      "-H",
      "Accept: application/json",
      "https://hub.docker.com/v2/namespaces/daprio/repositories/daprd/tags?page_size=100",
    ];

    const out = () =>
      executeShellCommand({
        command: "curl",
        args: queryVersions,
      });

    try {
      const data = JSON.parse((await out()).stdout);

      const results = data.results;

      return results.map((item) => ({
        name: item.name,
        description: `Updated: ${item.last_updated}`,
      })) as Fig.Suggestion[];
    } catch (error) {
      console.error({ error });
      return [];
    }
  },
};

const appProtocols = ["http", "https", "h2c", "grpc", "grpcs"];

const workflowStatuses = [
  "RUNNING",
  "COMPLETED",
  "CONTINUED_AS_NEW",
  "FAILED",
  "CANCELED",
  "TERMINATED",
  "PENDING",
  "SUSPENDED",
];

const helpOption: Fig.Option = {
  name: ["--help", "-h"],
  description: "Print this help message",
};

const kubernetesOption = (
  description: string,
  extra: Partial<Fig.Option> = {}
): Fig.Option => ({
  name: ["--kubernetes", "-k"],
  description,
  ...extra,
});

const yamlFileArg = (name: string, priority: number): Fig.Arg => ({
  name,
  generators: filepaths({
    extensions: ["yaml", "yml"],
    editFileSuggestions: { priority },
  }),
});

const udsOption: Fig.Option = {
  name: ["--unix-domain-socket", "-u"],
  description:
    "Path to a unix domain socket dir. If specified, Dapr API servers will use Unix Domain Sockets",
  args: { name: "unix-domain-socket" },
};

const dataOptions: Fig.Option[] = [
  {
    name: ["--data", "-d"],
    description: "The JSON serialized data string (optional)",
    args: { name: "data" },
  },
  {
    name: ["--data-file", "-f"],
    description: "A file containing the JSON serialized data (optional)",
    args: { name: "data-file", template: "filepaths" },
  },
];

const listOutputOption: Fig.Option = {
  name: ["--output", "-o"],
  description: "Output format (options: json or yaml or list)",
  args: {
    name: "output",
    default: "list",
    suggestions: ["json", "yaml", "list"],
  },
};

// Kubernetes liveness/readiness probe options of `dapr annotate`
const probeOptions = (probe: "liveness" | "readiness"): Fig.Option[] =>
  ["delay", "period", "threshold", "timeout"].map((setting) => ({
    name: `--${probe}-probe-${setting}`,
    description: `The ${setting} to use for the ${probe} probe`,
    args: { name: `${probe}-probe-${setting}`, default: "-1" },
  }));

// Output format option of the scheduler and workflow commands
const tableOutputOption = (formats: string[]): Fig.Option => ({
  name: ["--output", "-o"],
  description: `Output format. One of ${formats.join(", ")}`,
  args: { name: "output", default: "short", suggestions: formats },
});

const outputFormats = ["short", "wide", "yaml", "json"];

const workflowInputOption: Fig.Option = {
  name: ["--input", "-x"],
  description:
    "Optional input data for the new workflow instance. Accepts a JSON string",
  args: { name: "input" },
};

const workflowInstanceArg: Fig.Arg = { name: "instance-id" };

const subcommands: Fig.Subcommand[] = [
  {
    name: "annotate",
    description:
      "Add dapr annotations to a Kubernetes configuration. Supported platforms: Kubernetes",
    options: [
      {
        name: "--api-token-secret",
        description: "The secret to use for the API token",
        args: { name: "api-token-secret" },
      },
      {
        name: ["--app-id", "-a"],
        description: "The app id to annotate",
        args: { name: "app-id", generators: runningAppsGenerator },
      },
      {
        name: "--app-max-concurrency",
        description: "The maximum number of concurrent requests to allow",
        args: { name: "app-max-concurrency", default: "-1" },
      },
      {
        name: ["--app-port", "-p"],
        description: "The port to expose the app on",
        args: { name: "app-port", default: "-1" },
      },
      {
        name: "--app-protocol",
        description:
          "The protocol to use for the app. Allowed values http, https, h2c, grpc, grpcs",
        args: { name: "app-protocol", suggestions: appProtocols },
      },
      {
        name: "--app-ssl",
        description:
          "Enable SSL for the app (use --app-protocol with https or grpcs instead)",
        deprecated: true,
      },
      {
        name: "--app-token-secret",
        description: "The secret to use for the app token",
        args: { name: "app-token-secret" },
      },
      {
        name: ["--config", "-c"],
        description: "The config file to annotate",
        args: yamlFileArg("config", 99),
      },
      {
        name: "--cpu-limit",
        description: "The CPU limit to set",
        args: { name: "cpu-limit" },
      },
      {
        name: "--cpu-request",
        description: "The CPU request to set",
        args: { name: "cpu-request" },
      },
      {
        name: "--dapr-image",
        description: "The image to use for the dapr sidecar container",
        args: { name: "dapr-image" },
      },
      {
        name: "--disable-builtin-k8s-secret-store",
        description: "Disable the built-in k8s secret store",
      },
      {
        name: "--enable-api-logging",
        description: "Enable API logging for the Dapr sidecar",
      },
      { name: "--enable-debug", description: "Enable debug" },
      { name: "--enable-metrics", description: "Enable metrics" },
      { name: "--enable-profile", description: "Enable profiling" },
      {
        name: "--env",
        description:
          "Environment variables to set (key value pairs, comma separated)",
        args: { name: "env" },
      },
      {
        name: "--graceful-shutdown-seconds",
        description: "The number of seconds to wait for the app to shutdown",
        args: { name: "graceful-shutdown-seconds", default: "-1" },
      },
      {
        name: "--http-stream-request-body",
        description: "Enable streaming request body for HTTP",
      },
      kubernetesOption("Apply annotations to Kubernetes resources", {
        isRequired: true,
        priority: 100,
      }),
      {
        name: "--listen-addresses",
        description: "The addresses to listen on",
        args: { name: "listen-addresses" },
      },
      ...probeOptions("liveness"),
      { name: "--log-as-json", description: "Log as JSON" },
      {
        name: "--log-level",
        description: "The log level to use",
        args: { name: "log-level" },
      },
      {
        name: "--max-body-size",
        description: "The maximum request body size to use",
        args: { name: "max-body-size", default: "4Mi" },
      },
      {
        name: "--memory-limit",
        description: "The memory limit to set",
        args: { name: "memory-limit" },
      },
      {
        name: "--memory-request",
        description: "The memory request to set",
        args: { name: "memory-request" },
      },
      {
        name: "--metrics-port",
        description: "The port to expose the metrics on",
        args: { name: "metrics-port", default: "-1" },
      },
      {
        name: ["--namespace", "-n"],
        description:
          "The namespace the resource target is in (can only be set if --resource is also set)",
        args: { name: "namespace" },
      },
      {
        name: "--placement-host-address",
        description:
          "Comma separated list of addresses for Dapr actor placement servers",
        args: { name: "placement-host-address" },
      },
      ...probeOptions("readiness"),
      {
        name: "--read-buffer-size",
        description: "The maximum size of HTTP header read buffer in kilobytes",
        args: { name: "read-buffer-size", default: "4Ki" },
      },
      {
        name: ["--resource", "-r"],
        description: "The resource to target to annotate",
        args: { name: "resource" },
      },
      {
        name: "--unix-domain-socket-path",
        description:
          "Linux domain socket path to use for communicating with the Dapr sidecar",
        args: { name: "unix-domain-socket-path" },
      },
      {
        name: "--volume-mounts",
        description:
          "List of pod volumes to be mounted to the sidecar container in read-only mode",
        args: { name: "volume-mounts" },
      },
      {
        name: "--volume-mounts-rw",
        description:
          "List of pod volumes to be mounted to the sidecar container in read-write mode",
        args: { name: "volume-mounts-rw" },
      },
    ],
    args: yamlFileArg("config", 99),
  },
  {
    name: "build-info",
    description: "Print build info of Dapr CLI and runtime",
    options: [helpOption],
  },
  {
    name: "completion",
    description: "Generates shell completion scripts",
    subcommands: [
      {
        name: "bash",
        description: "Generates bash completion scripts",
        options: [helpOption],
      },
      {
        name: "fish",
        description: "Generates fish completion scripts",
        options: [helpOption],
      },
      {
        name: "powershell",
        description: "Generates powershell completion scripts",
        options: [helpOption],
      },
      {
        name: "zsh",
        description: "Generates zsh completion scripts",
        options: [helpOption],
      },
    ],
    options: [helpOption],
  },
  {
    name: "components",
    description: "List all Dapr components. Supported platforms: Kubernetes",
    options: [
      {
        name: ["--all-namespaces", "-A"],
        description: "If true, list all Dapr components in all namespaces",
      },
      helpOption,
      kubernetesOption("List all Dapr components in a Kubernetes cluster", {
        isRequired: true,
      }),
      {
        name: ["--name", "-n"],
        description: "The components name to be printed (optional)",
        args: { name: "name" },
      },
      {
        name: "--namespace",
        description: "List all namespace components in a Kubernetes cluster",
        args: { name: "namespace" },
      },
      listOutputOption,
    ],
  },
  {
    name: "configurations",
    description:
      "List all Dapr configurations. Supported platforms: Kubernetes",
    options: [
      {
        name: ["--all-namespaces", "-A"],
        description: "If true, list all Dapr configurations in all namespaces",
      },
      helpOption,
      kubernetesOption("List all Dapr configurations in a Kubernetes cluster", {
        isRequired: true,
      }),
      {
        name: ["--name", "-n"],
        description: "The configuration name to be printed (optional)",
        args: { name: "name" },
      },
      {
        name: "--namespace",
        description:
          "List Define namespace configurations in a Kubernetes cluster",
        args: { name: "namespace" },
      },
      listOutputOption,
    ],
  },
  {
    name: "init",
    description:
      "Install Dapr on supported hosting platforms. Supported platforms: Kubernetes and self-hosted",
    options: [
      {
        name: "--ca-root-certificate",
        description: "The root certificate file",
        args: { name: "ca-root-certificate", template: "filepaths" },
      },
      {
        name: "--container-runtime",
        description:
          "The container runtime to use. Supported values are docker (default) and podman",
        args: {
          name: "container-runtime",
          default: "docker",
          suggestions: ["docker", "podman"],
        },
      },
      {
        name: "--dev",
        description:
          "Use Dev mode. Deploy Redis, Zipkin also in the Kubernetes cluster",
      },
      {
        name: "--enable-ha",
        description: "Enable high availability (HA) mode",
      },
      { name: "--enable-mtls", description: "Enable mTLS in your cluster" },
      {
        name: "--from-dir",
        description:
          "Use Dapr artifacts from local directory for self-hosted installation",
        args: { name: "from-dir", template: "folders" },
      },
      helpOption,
      {
        name: "--image-registry",
        description: "Custom/private docker image repository URL",
        args: { name: "image-registry" },
      },
      {
        name: "--image-variant",
        description:
          "The image variant to use for the Dapr runtime, for example: mariner",
        args: { name: "image-variant" },
      },
      {
        name: "--issuer-private-key",
        description: "The issuer certificate private key",
        args: { name: "issuer-private-key", template: "filepaths" },
      },
      {
        name: "--issuer-public-certificate",
        description: "The issuer certificate",
        args: { name: "issuer-public-certificate", template: "filepaths" },
      },
      kubernetesOption("Deploy Dapr to a Kubernetes cluster"),
      {
        name: ["--namespace", "-n"],
        description: "The Kubernetes namespace to install Dapr in",
        args: { name: "namespace", default: "dapr-system" },
      },
      {
        name: "--network",
        description: "The Docker network on which to deploy the Dapr runtime",
        args: { name: "network" },
      },
      {
        name: "--redis-stack",
        description:
          "Self-hosted only. Use redis-stack-server image instead of standard Redis for RediSearch support",
      },
      {
        name: "--runtime-version",
        description:
          "The version of the Dapr runtime to install, for example: 1.0.0",
        args: {
          name: "runtime-version",
          default: "latest",
          suggestCurrentToken: true,
          generators: runtimeVersionsGenerator,
        },
      },
      {
        name: "--scheduler-override-broadcast-host-port",
        description:
          "Self-hosted only. Specify the scheduler broadcast host and port, for example: 192.168.42.42:50006. If not specified, it uses localhost:50006 (6060 for Windows)",
        args: { name: "scheduler-override-broadcast-host-port" },
      },
      {
        name: "--scheduler-placement",
        description:
          "Self-hosted only. Serve actor placement from the scheduler service instead of running the placement service. Requires Dapr 1.19 or later",
      },
      {
        name: "--scheduler-volume",
        description:
          "Self-hosted only. Specify a volume for the scheduler service data directory",
        args: { name: "scheduler-volume", default: "dapr_scheduler" },
      },
      {
        name: "--set",
        description:
          "Set values on the command line (can specify multiple or separate values with commas: key1=val1,key2=val2)",
        isRepeatable: true,
        args: { name: "set" },
      },
      {
        name: ["--slim", "-s"],
        description:
          "Exclude placement service, scheduler service, Redis and Zipkin containers from self-hosted installation",
      },
      {
        name: "--timeout",
        description: "The wait timeout for the Kubernetes installation",
        args: { name: "timeout", default: "300" },
      },
      {
        name: "--wait",
        description: "Wait for Kubernetes initialization to complete",
      },
    ],
  },
  {
    name: "invoke",
    description:
      "Invoke a method on a given Dapr application. Supported platforms: Self-hosted",
    options: [
      {
        name: ["--app-id", "-a"],
        description: "The application id to invoke",
        args: { name: "app-id", generators: runningAppsGenerator },
        isRequired: true,
      },
      ...dataOptions,
      helpOption,
      {
        name: ["--method", "-m"],
        description: "The method to invoke",
        args: { name: "method" },
        isRequired: true,
      },
      udsOption,
      {
        name: ["--verb", "-v"],
        description: "The HTTP verb to use",
        args: { name: "verb", default: "POST" },
      },
    ],
  },
  {
    name: "list",
    description:
      "List all Dapr instances. Supported platforms: Kubernetes and self-hosted",
    options: [
      {
        name: ["--all-namespaces", "-A"],
        description: "If true, list all Dapr pods in all namespaces",
      },
      helpOption,
      kubernetesOption("List all Dapr pods in a Kubernetes cluster"),
      {
        name: "--namespace",
        description: "List define namespace pod in a Kubernetes cluster",
        args: { name: "namespace" },
      },
      {
        name: ["--output", "-o"],
        description:
          "The output format of the list. Valid values are: json, yaml, or table (default)",
        args: { name: "output", suggestions: ["json", "yaml", "table"] },
      },
    ],
  },
  {
    name: "logs",
    description:
      "Get Dapr sidecar logs for an application. Supported platforms: Kubernetes",
    options: [
      {
        name: ["--app-id", "-a"],
        description: "The application id for which logs are needed",
        args: { name: "app-id", generators: runningAppsGenerator },
        isRequired: true,
      },
      helpOption,
      kubernetesOption("Get logs from a Kubernetes cluster", {
        isRequired: true,
        priority: 100,
      }),
      {
        name: ["--namespace", "-n"],
        description:
          "The Kubernetes namespace in which your application is deployed",
        args: { name: "namespace", default: "default" },
      },
      {
        name: ["--pod-name", "-p"],
        description:
          "The name of the pod in Kubernetes, in case your application has multiple pods (optional)",
        args: { name: "pod-name" },
      },
    ],
  },
  {
    name: "mcpservers",
    description:
      "List all Dapr MCPServer resources. Supported platforms: Kubernetes and self-hosted",
    options: [
      {
        name: ["--all-namespaces", "-A"],
        description:
          "If true, list all Dapr MCPServer resources in all namespaces (Kubernetes mode only)",
      },
      helpOption,
      kubernetesOption(
        "List Dapr MCPServer resources from a Kubernetes cluster"
      ),
      {
        name: ["--name", "-n"],
        description: "The MCPServer name to be printed (optional)",
        args: { name: "name" },
      },
      {
        name: "--namespace",
        description:
          "List MCPServer resources in a specific Kubernetes namespace",
        args: { name: "namespace" },
      },
      listOutputOption,
      {
        name: "--resources-path",
        description:
          "Self-hosted only: directory to scan for MCPServer YAML resources (defaults to $HOME/.dapr/components)",
        args: { name: "resources-path", template: "folders" },
      },
    ],
  },
  {
    name: "mtls",
    description: "Check if mTLS is enabled. Supported platforms: Kubernetes",
    subcommands: [
      {
        name: "expiry",
        description: "Checks the expiry of the root certificate",
      },
      {
        name: "export",
        description:
          "Export the root CA, issuer cert and key from Kubernetes to local files",
        options: [
          helpOption,
          {
            name: ["--out", "-o"],
            description: "The output directory path to save the certs",
            args: { name: "out", default: ".", template: "folders" },
          },
        ],
      },
      {
        name: ["renew-cert", "rnc", "renew-certificate"],
        description:
          "Rotates the Dapr root certificate on your Kubernetes cluster",
        options: [
          {
            name: "--ca-root-certificate",
            description: "The root certificate file",
            args: { name: "ca-root-certificate", template: "filepaths" },
          },
          {
            name: "--image-variant",
            description:
              "The image variant to use for the Dapr runtime, for example: mariner",
            args: { name: "image-variant" },
          },
          {
            name: "--issuer-private-key",
            description: "The issuer certificate private key",
            args: { name: "issuer-private-key", template: "filepaths" },
          },
          {
            name: "--issuer-public-certificate",
            description: "The issuer certificate",
            args: { name: "issuer-public-certificate", template: "filepaths" },
          },
          kubernetesOption(
            "Renews root and issuer certificates of Dapr in a Kubernetes cluster",
            { isRequired: true }
          ),
          {
            name: "--private-key",
            description:
              "The root.key file which is used to generate root certificate",
            args: { name: "private-key", template: "filepaths" },
          },
          {
            name: "--restart",
            description: "Restart Dapr control plane services",
          },
          {
            name: "--timeout",
            description: "The timeout for the certificate renewal",
            args: { name: "timeout", default: "300" },
          },
          {
            name: "--valid-until",
            description: "Max days before certificate expires",
            args: { name: "valid-until", default: "365" },
          },
        ],
      },
    ],
    options: [
      helpOption,
      kubernetesOption("Check if mTLS is enabled in a Kubernetes cluster", {
        isRequired: true,
      }),
    ],
  },
  {
    name: "publish",
    description: "Publish a pub-sub event. Supported platforms: Self-hosted",
    options: [
      ...dataOptions,
      helpOption,
      {
        name: ["--metadata", "-m"],
        description: "The JSON serialized publish metadata (optional)",
        args: { name: "metadata" },
      },
      {
        name: ["--publish-app-id", "-i"],
        description: "The ID of the publishing app",
        args: { name: "publish-app-id" },
        isRequired: true,
      },
      {
        name: ["--pubsub", "-p"],
        description: "The name of the pub/sub component",
        args: { name: "pubsub" },
        isRequired: true,
      },
      {
        name: ["--topic", "-t"],
        description: "The topic to be published to",
        args: { name: "topic" },
        isRequired: true,
      },
      udsOption,
    ],
  },
  {
    name: "run",
    description:
      "Run Dapr and (optionally) your application side by side. Supported platforms: Self-hosted",
    options: [
      {
        name: "--app-channel-address",
        description: "The network address the application listens on",
        args: { name: "app-channel-address", default: "127.0.0.1" },
      },
      {
        name: "--app-health-check-path",
        description: "Path used for health checks; HTTP only",
        args: { name: "app-health-check-path" },
      },
      {
        name: "--app-health-probe-interval",
        description: "Interval to probe for the health of the app in seconds",
        args: { name: "app-health-probe-interval", default: "0" },
      },
      {
        name: "--app-health-probe-timeout",
        description: "Timeout for app health probes in milliseconds",
        args: { name: "app-health-probe-timeout", default: "0" },
      },
      {
        name: "--app-health-threshold",
        description:
          "Number of consecutive failures for the app to be considered unhealthy",
        args: { name: "app-health-threshold", default: "0" },
      },
      {
        name: ["--app-id", "-a"],
        description: "The id for your application, used for service discovery",
        args: { name: "app-id" },
      },
      {
        name: "--app-max-concurrency",
        description:
          "The concurrency level of the application, otherwise is unlimited",
        args: { name: "app-max-concurrency", default: "-1" },
      },
      {
        name: ["--app-port", "-p"],
        description: "The port your application is listening on",
        args: { name: "app-port", default: "-1" },
      },
      {
        name: ["--app-protocol", "-P"],
        description:
          "The protocol (grpc, grpcs, http, https, h2c) Dapr uses to talk to the application",
        args: {
          name: "app-protocol",
          default: "http",
          suggestions: appProtocols,
        },
      },
      {
        name: "--app-ssl",
        description:
          "Enable https when Dapr invokes the application (use --app-protocol with https or grpcs instead)",
        deprecated: true,
      },
      {
        name: ["--components-path", "-d"],
        description:
          "The path for components directory. Default is $HOME/.dapr/components or %USERPROFILE%\\.dapr\\components (use --resources-path instead)",
        deprecated: true,
        args: { name: "components-path", template: "folders" },
      },
      {
        name: ["--config", "-c"],
        description: "Dapr configuration file",
        args: yamlFileArg("config", 100),
      },
      {
        name: ["--dapr-grpc-port", "-G"],
        description: "The gRPC port for Dapr to listen on",
        args: { name: "dapr-grpc-port", default: "-1" },
      },
      {
        name: ["--dapr-http-port", "-H"],
        description: "The HTTP port for Dapr to listen on",
        args: { name: "dapr-http-port", default: "-1" },
      },
      {
        name: ["--dapr-internal-grpc-port", "-I"],
        description: "The gRPC port for the Dapr internal API to listen on",
        args: { name: "dapr-internal-grpc-port", default: "-1" },
      },
      {
        name: "--dapr-listen-addresses",
        description:
          "Comma separated list of IP addresses that sidecar will listen to",
        args: { name: "dapr-listen-addresses" },
      },
      {
        name: "--enable-api-logging",
        description:
          "Log API calls at INFO verbosity. Valid values are: true or false",
      },
      {
        name: "--enable-app-health-check",
        description:
          "Enable health checks for the application using the protocol defined with app-protocol",
      },
      {
        name: "--enable-profiling",
        description: "Enable pprof profiling via an HTTP endpoint",
      },
      helpOption,
      kubernetesOption(
        "Run the multi-app run template against Kubernetes environment"
      ),
      {
        name: "--log-level",
        description:
          "The log verbosity. Valid values are: debug, info, warn, error, fatal, or panic",
        args: {
          name: "log-level",
          default: "info",
          suggestions: ["debug", "info", "warn", "error", "fatal", "panic"],
        },
      },
      {
        name: "--max-body-size",
        description: "Max size of request body in MB",
        args: { name: "max-body-size", default: "4Mi" },
      },
      {
        name: ["--metrics-port", "-M"],
        description: "The port of metrics on dapr",
        args: { name: "metrics-port", default: "-1" },
      },
      {
        name: "--placement-host-address",
        description:
          "The address of the placement service. Format is either <hostname> for default port or <hostname>:<port> for custom port. Set to an empty string to disable placement",
        args: { name: "placement-host-address", default: "localhost" },
      },
      {
        name: "--profile-port",
        description: "The port for the profile server to listen on",
        args: { name: "profile-port", default: "-1" },
      },
      {
        name: "--read-buffer-size",
        description: "HTTP header read buffer in KB",
        args: { name: "read-buffer-size", default: "4Ki" },
      },
      {
        name: "--resources-path",
        description: "The path for resources directory",
        isRepeatable: true,
        args: { name: "resources-path", template: "folders" },
      },
      {
        name: ["--run-file", "-f"],
        description:
          "Path to the run template file for the list of apps to run",
        args: yamlFileArg("run-file", 100),
      },
      {
        name: "--scheduler-host-address",
        description:
          "The address of the scheduler service. Format is either <hostname> for default port or <hostname>:<port> for custom port. Set to an empty string to disable scheduler",
        args: { name: "scheduler-host-address", default: "localhost" },
      },
      udsOption,
    ],
  },
  {
    name: ["scheduler", "sched"],
    description:
      "Scheduler management commands. Use -k to target a Kubernetes Dapr cluster",
    subcommands: [
      {
        name: ["delete", "d", "del"],
        description: "Delete one or more jobs from scheduler",
        args: {
          name: "job-name",
          description:
            "Job names are formatted by their type, app ID, then identifier (for example app/my-app-id/my-job-name)",
          isVariadic: true,
        },
      },
      {
        name: ["delete-all", "da", "delall"],
        description:
          "Delete all scheduled jobs in the specified namespace of a particular filter",
        args: {
          name: "filter-key",
          description:
            "Deletes all jobs which match the filter key, for example app/my-app-id or actor/my-actor-type",
          suggestions: ["all", "app", "actor", "workflow"],
        },
      },
      {
        name: "export",
        description:
          "Export all jobs and actor reminders to a binary file, including the tracked count",
        options: [
          {
            name: ["--output-file", "-o"],
            description:
              "Output binary file to export jobs and actor reminders to",
            args: { name: "output-file", template: "filepaths" },
            isRequired: true,
          },
        ],
      },
      {
        name: ["get", "g", "ge"],
        description: "Get scheduled app job or actor reminder in Scheduler",
        options: [tableOutputOption(outputFormats)],
        args: {
          name: "job-name",
          description:
            "Job names are formatted by their type, app ID, then identifier (for example app/my-app-id/my-job-name)",
          isVariadic: true,
        },
      },
      {
        name: "import",
        description:
          "Import all jobs and actor reminders from a binary file generated by 'dapr scheduler export'",
        options: [
          {
            name: ["--input-file", "-f"],
            description: "Input file to import jobs and actor reminders from",
            args: { name: "input-file", template: "filepaths" },
            isRequired: true,
          },
        ],
      },
      {
        name: "list",
        description: "List scheduled jobs in Scheduler",
        options: [
          {
            name: "--filter",
            description: "Filter jobs by type",
            args: {
              name: "filter",
              default: "all",
              suggestions: ["all", "app", "actor", "workflow", "activity"],
            },
          },
          tableOutputOption(outputFormats),
        ],
      },
    ],
    options: [
      {
        name: ["--kubernetes", "-k"],
        description: "Perform scheduler command on a Kubernetes Dapr cluster",
        isPersistent: true,
      },
      {
        name: ["--namespace", "-n"],
        description: "Namespace of the Dapr application",
        isPersistent: true,
        args: { name: "namespace", default: "default" },
      },
      {
        name: "--scheduler-namespace",
        description:
          "Kubernetes namespace where the scheduler is deployed, only relevant if --kubernetes is set",
        isPersistent: true,
        args: { name: "scheduler-namespace", default: "dapr-system" },
      },
    ],
  },
  {
    name: "status",
    description:
      "Show the health status of Dapr services. Supported platforms: Kubernetes",
    options: [
      helpOption,
      kubernetesOption(
        "Show the health status of Dapr services on Kubernetes cluster",
        { isRequired: true }
      ),
    ],
  },
  {
    name: "stop",
    description:
      "Stop Dapr instances and their associated apps. Supported platforms: Self-hosted",
    options: [
      {
        name: ["--app-id", "-a"],
        description: "The application id to be stopped",
        args: { name: "app-id", generators: runningAppsGenerator },
      },
      helpOption,
      kubernetesOption(
        "Stop deployments in Kubernetes based on multi-app run file"
      ),
      {
        name: ["--run-file", "-f"],
        description:
          "Path to the run template file for the list of apps to stop",
        args: yamlFileArg("run-file", 100),
      },
    ],
    args: {
      name: "app-id",
      description: "Application ids to stop",
      isVariadic: true,
      isOptional: true,
      generators: runningAppsGenerator,
    },
  },
  {
    name: "uninstall",
    description:
      "Uninstall Dapr runtime. Supported platforms: Kubernetes and self-hosted",
    options: [
      {
        name: "--all",
        description:
          "Remove .dapr directory, Redis, Placement, Scheduler (and default volume in self-hosted mode), and Zipkin containers on local machine, and CRDs on a Kubernetes cluster",
      },
      {
        name: "--container-runtime",
        description:
          "The container runtime to use. Supported values are docker (default) and podman",
        args: {
          name: "container-runtime",
          default: "docker",
          suggestions: ["docker", "podman"],
        },
      },
      {
        name: "--dev",
        description:
          "Uninstall Dapr Redis and Zipkin installations from Kubernetes cluster",
      },
      helpOption,
      kubernetesOption("Uninstall Dapr from a Kubernetes cluster"),
      {
        name: ["--namespace", "-n"],
        description: "The Kubernetes namespace to uninstall Dapr from",
        args: { name: "namespace", default: "dapr-system" },
      },
      {
        name: "--network",
        description: "The Docker network from which to remove the Dapr runtime",
        args: { name: "network" },
      },
      {
        name: "--timeout",
        description: "The timeout for the Kubernetes uninstall",
        args: { name: "timeout", default: "300" },
      },
    ],
  },
  {
    name: "upgrade",
    description:
      "Upgrades or downgrades a Dapr control plane installation in a cluster. Supported platforms: Kubernetes",
    options: [
      helpOption,
      {
        name: "--image-registry",
        description: "Custom/Private docker image repository URL",
        args: { name: "image-registry" },
      },
      {
        name: "--image-variant",
        description:
          "The image variant to use for the Dapr runtime, for example: mariner",
        args: { name: "image-variant" },
      },
      kubernetesOption("Upgrade or downgrade Dapr in a Kubernetes cluster", {
        isRequired: true,
      }),
      {
        name: "--runtime-version",
        description:
          "The version of the Dapr runtime to upgrade or downgrade to, for example: 1.0.0",
        args: { name: "runtime-version" },
        isRequired: true,
      },
      {
        name: "--set",
        description:
          "Set values on the command line (can specify multiple or separate values with commas: key1=val1,key2=val2)",
        isRepeatable: true,
        args: { name: "set" },
      },
      {
        name: "--timeout",
        description: "The timeout for the Kubernetes upgrade",
        args: { name: "timeout", default: "300" },
      },
    ],
  },
  {
    name: "version",
    description: "Print the Dapr runtime and CLI version",
    options: [
      helpOption,
      {
        name: ["--output", "-o"],
        description:
          "The output format of the version command. Valid values are: json",
        args: { name: "output", suggestions: ["json"] },
      },
    ],
  },
  {
    name: ["workflow", "wf"],
    description:
      "Workflow management commands. Use -k to target a Kubernetes Dapr cluster",
    subcommands: [
      {
        name: "history",
        description: "Get the history of a workflow instance",
        options: [tableOutputOption(outputFormats)],
        args: workflowInstanceArg,
      },
      {
        name: ["list", "ls"],
        description: "List workflows for the given app ID",
        options: [
          {
            name: ["--connection-string", "-c"],
            description:
              "Only used for Dapr runtime versions 1.16. The connection string used to connect and authenticate to the actor state store",
            args: { name: "connection-string" },
          },
          {
            name: ["--filter-max-age", "-m"],
            description:
              "Filter only the workflows started within the given duration or timestamp. Examples: 300ms, 1.5h or 2h45m, 2023-01-02T15:04:05 or 2023-01-02",
            args: { name: "filter-max-age" },
          },
          {
            name: ["--filter-name", "-w"],
            description: "Filter only the workflows with the given name",
            args: { name: "filter-name" },
          },
          {
            name: ["--filter-status", "-s"],
            description:
              "Filter only the workflows with the given runtime status",
            args: { name: "filter-status", suggestions: workflowStatuses },
          },
          tableOutputOption([...outputFormats, "ids"]),
          {
            name: ["--table-name", "-t"],
            description:
              "The name of the table or collection which is used as the actor state store",
            args: { name: "table-name" },
          },
        ],
      },
      {
        name: "purge",
        description: "Purge workflow instances with a terminal state",
        options: [
          {
            name: "--all",
            description:
              "Purge all workflow instances in a terminal state. Use with caution",
          },
          {
            name: "--all-filter-status",
            description:
              "Filter purge to only workflow instances with the given runtime status. Must be used with --all-older-than",
            dependsOn: ["--all-older-than"],
            args: {
              name: "all-filter-status",
              suggestions: workflowStatuses,
            },
          },
          {
            name: "--all-older-than",
            description:
              "Purge workflow instances older than the specified Go duration or timestamp, e.g., '24h' or '2023-01-02T15:04:05Z'",
            args: { name: "all-older-than" },
          },
          {
            name: ["--connection-string", "-c"],
            description:
              "Only used for Dapr runtime versions 1.16. The connection string used to connect and authenticate to the actor state store",
            args: { name: "connection-string" },
          },
          {
            name: "--force",
            description:
              "Force the purge regardless of the current runtime state of the workflow, outside of the workflow state machine (can corrupt state or break workflow execution; avoid unless necessary)",
          },
          {
            name: "--scheduler-namespace",
            description:
              "Kubernetes namespace where the scheduler is deployed, only relevant if --kubernetes is set",
            args: { name: "scheduler-namespace", default: "dapr-system" },
          },
          {
            name: ["--table-name", "-t"],
            description:
              "The name of the table or collection which is used as the actor state store",
            args: { name: "table-name" },
          },
        ],
        args: {
          name: "instance-id",
          description:
            "Workflow instance IDs to purge (not accepted together with --all or --all-older-than)",
          isVariadic: true,
          isOptional: true,
        },
      },
      {
        name: "raise-event",
        description:
          "Raise an event for a workflow waiting for an external event",
        options: [workflowInputOption],
        args: {
          name: "instance-id/event-name",
          description:
            "Instance ID and event name in the form <instance-id>/<event-name>",
        },
      },
      {
        name: "rerun",
        description: "Re-run a workflow instance",
        options: [
          {
            name: ["--event-id", "-e"],
            description:
              "The event ID from which to re-run the workflow. If not provided, the workflow will re-run from the beginning",
            args: { name: "event-id" },
          },
          workflowInputOption,
          {
            name: "--new-instance-id",
            description:
              "Optional new ID for the re-run workflow instance. If not provided, a new ID will be generated",
            args: { name: "new-instance-id" },
          },
        ],
        args: workflowInstanceArg,
      },
      {
        name: "resume",
        description: "Resume a workflow that is suspended",
        options: [
          {
            name: ["--reason", "-r"],
            description: "Reason for resuming the workflow",
            args: { name: "reason" },
          },
        ],
        args: workflowInstanceArg,
      },
      {
        name: "run",
        description: "Run a workflow instance",
        options: [
          {
            name: ["--instance-id", "-i"],
            description: "The target workflow instance ID",
            args: { name: "instance-id" },
          },
          workflowInputOption,
          {
            name: ["--start-time", "-s"],
            description:
              "Optional start time for the workflow in RFC3339 or Go duration string format. If not provided, the workflow starts immediately. A duration of '0s', or any start time, will cause the command to not wait for the command to start",
            args: { name: "start-time" },
          },
        ],
        args: { name: "workflow-name" },
      },
      {
        name: "suspend",
        description: "Suspend a workflow in progress",
        options: [
          {
            name: ["--reason", "-r"],
            description: "Reason for suspending the workflow",
            args: { name: "reason" },
          },
        ],
        args: workflowInstanceArg,
      },
      {
        name: "terminate",
        description: "Terminate a workflow in progress",
        options: [
          {
            name: ["--output", "-o"],
            description:
              "Optional output data for the workflow in JSON string format",
            args: { name: "output" },
          },
        ],
        args: workflowInstanceArg,
      },
    ],
    options: [
      {
        name: ["--app-id", "-a"],
        description: "The app ID owner of the workflow instance",
        isPersistent: true,
        args: { name: "app-id", generators: runningAppsGenerator },
      },
      {
        name: ["--kubernetes", "-k"],
        description: "Target a Kubernetes dapr installation",
        isPersistent: true,
      },
      {
        name: ["--namespace", "-n"],
        description: "Namespace to perform workflow operation on",
        isPersistent: true,
        args: { name: "namespace", default: "default" },
      },
    ],
  },
];

// Mirror of the command tree for cobra's `dapr help <command>`
const toHelpSubcommands = (commands: Fig.Subcommand[]): Fig.Subcommand[] =>
  commands.map(({ name, description, subcommands }) => ({
    name,
    description,
    ...(subcommands && { subcommands: toHelpSubcommands(subcommands) }),
  }));

const completionSpec: Fig.Spec = {
  name: "dapr",
  description: "Dapr CLI",
  subcommands: [
    ...subcommands,
    {
      name: "help",
      description: "Help about any command",
      subcommands: toHelpSubcommands(subcommands),
    },
  ],
  options: [
    { name: ["--version", "-v"], description: "Version for dapr" },
    {
      name: "--log-as-json",
      description: "Log output in JSON format",
      isPersistent: true,
    },
    {
      name: "--runtime-path",
      description: "The path to the dapr runtime installation directory",
      isPersistent: true,
      args: { name: "runtime-path", template: "folders" },
    },
    { name: ["--help", "-h"], description: "Display help", isPersistent: true },
  ],
};
export default completionSpec;
