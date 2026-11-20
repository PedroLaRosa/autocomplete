// KubeVela vela CLI v1.11.1 (latest stable GitHub tag of kubevela/kubevela, released 2026-11-06; synced 2026-11-20). Source: cobra
// command definitions in references/cli at tag v1.11.1, read statically (the binary was not run) and cross-checked flag by flag
// against the kubevela.io v1.11 CLI reference pages for the generated help text. Not covered: `vela mcp` and `vela module`, which
// exist only on master / v1.12.0-alpha.1 and not in the latest stable release.

// Flags shared by many commands
const envOption: Fig.Option = {
  name: ["-e", "--env"],
  description: "Specify environment name for application",
  args: { name: "env" },
};
const namespaceOption: Fig.Option = {
  name: ["-n", "--namespace"],
  description: "Specify the Kubernetes namespace to use",
  args: { name: "namespace" },
};
const requestEnvOption: Fig.Option = {
  name: ["-e", "--env"],
  description: "The environment name for the CLI request",
  args: { name: "env" },
};
const requestNamespaceOption: Fig.Option = {
  name: ["-n", "--namespace"],
  description: "If present, the namespace scope for this CLI request",
  args: { name: "namespace" },
};
const allNamespacesOption: Fig.Option = {
  name: ["-A", "--all-namespaces"],
  description: "If true, check the specified action in all namespaces",
};
const podClusterOption: Fig.Option = {
  name: "--cluster",
  description: "Filter the pod by the cluster name",
  args: { name: "cluster" },
};
const podComponentOption: Fig.Option = {
  name: ["-c", "--component"],
  description: "Filter the pod by the component name",
  args: { name: "component" },
};
const workflowStepOption: Fig.Option = {
  name: ["-s", "--step"],
  description: "Specify the step name in the workflow",
  args: { name: "step" },
};
const workflowTypeOption: Fig.Option = {
  name: ["-t", "--type"],
  description: "The type of the resource, support: [app, workflow]",
  args: { name: "type", suggestions: ["app", "workflow"] },
};
const definitionNamespaceOption: Fig.Option = {
  name: ["-n", "--namespace"],
  description: "Specify which namespace the definition locates",
  args: { name: "namespace", default: "vela-system" },
};

// Flags shared by `vela addon registry add` and `vela addon registry update`
const addonRegistryOptions: Fig.Option[] = [
  {
    name: "--bucket",
    description: "Specify the OSS bucket name",
    args: { name: "bucket" },
  },
  {
    name: "--endpoint",
    description: "Specify the addon registry endpoint",
    args: { name: "endpoint" },
  },
  {
    name: "--gitToken",
    description: "Specify the github repo token",
    args: { name: "gitToken" },
  },
  {
    name: "--gitlabRepoName",
    description:
      "Specify the gitlab addon registry repoName, must be set when registry is gitlab",
    args: { name: "gitlabRepoName" },
  },
  {
    name: "--insecureSkipTLS",
    description: "Specify the Helm addon registry skip tls verify",
  },
  {
    name: "--password",
    description: "Specify the Helm addon registry password",
    args: { name: "password" },
  },
  {
    name: "--path",
    description:
      "Specify the addon registry path, must be set when addons are not in root of registry",
    args: { name: "path" },
  },
  {
    name: "--type",
    description: "Specify the addon registry type",
    args: {
      name: "type",
      suggestions: ["OSS", "git", "gitee", "gitlab", "helm"],
    },
  },
  {
    name: "--username",
    description: "Specify the Helm addon registry username",
    args: { name: "username" },
  },
];

const completionSpec: Fig.Spec = {
  name: "vela",
  description:
    "A highly extensible platform engine based on Kubernetes and the Open Application Model",
  subcommands: [
    {
      name: "init",
      description: "Create scaffold for an application",
      options: [
        envOption,
        namespaceOption,
        {
          name: "--render-only",
          description: "Rendering vela.yaml in current dir and do not deploy",
        },
      ],
    },
    {
      name: "up",
      description: "Deploy one application",
      args: { name: "application", isOptional: true },
      options: [
        { name: "--debug", description: "Enable debug mode for application" },
        requestEnvOption,
        {
          name: ["-f", "--file"],
          description:
            "The file path for appfile or application. It could be a remote url",
          args: { name: "file", template: "filepaths" },
        },
        requestNamespaceOption,
        {
          name: ["-v", "--publish-version"],
          description: "The publish version for deploying application",
          args: { name: "publish-version" },
        },
        {
          name: ["-r", "--revision"],
          description:
            "The revision to use for deploying the application, if empty, the current application configuration will be used",
          args: { name: "revision" },
        },
        {
          name: ["-s", "--shard-id"],
          description:
            "The shard id assigned to the application. If empty, it will not be used",
          args: { name: "shard-id" },
        },
        {
          name: "--timeout",
          description:
            "Set the timout for wait app to be healthy, if not specified, the default duration is 300s",
          args: { name: "timeout", default: "300s" },
        },
        {
          name: ["-w", "--wait"],
          description:
            "Wait app to be healthy until timout, if no timeout specified, the default duration is 300s",
        },
      ],
    },
    {
      name: "status",
      description: "Show status of an application",
      args: { name: "application" },
      options: [
        {
          name: "--cluster",
          description: "Filter the endpoints or pods by cluster name",
          args: { name: "cluster" },
        },
        {
          name: ["-c", "--component"],
          description: "Filter the endpoints or pods by component name",
          args: { name: "component" },
        },
        {
          name: ["-d", "--detail"],
          description:
            "Display more details in the application like input/output data in context. Note that if you want to show the realtime details of application resources, please use it with --tree",
        },
        {
          name: "--detail-format",
          description:
            "The format for displaying details, must be used with --detail. Can be one of inline, wide, list, table, raw",
          args: {
            name: "detail-format",
            suggestions: ["inline", "wide", "list", "table", "raw"],
            default: "inline",
          },
        },
        {
          name: ["-p", "--endpoint"],
          description: "Show all service endpoints of the application",
        },
        envOption,
        {
          name: ["-m", "--metrics"],
          description:
            "Show resource quota and consumption metrics of the application",
        },
        namespaceOption,
        {
          name: ["-o", "--output"],
          description:
            "Raw Application output format. One of: (json, yaml, jsonpath)",
          args: { name: "format", suggestions: ["json", "yaml", "jsonpath"] },
        },
        { name: "--pod", description: "Show pod list of the application" },
        {
          name: ["-s", "--svc"],
          description: "Service name",
          args: { name: "svc" },
        },
        {
          name: ["-t", "--tree"],
          description: "Display the application resources into tree structure",
        },
      ],
    },
    {
      name: ["ls", "list"],
      description: "List applications",
      options: [
        allNamespacesOption,
        envOption,
        {
          name: "--field-selector",
          description:
            "Selector (field query) to filter on, supports '=', '==', and '!='.(e.g. --field-selector key1=value1,key2=value2)",
          args: { name: "field-selector" },
        },
        namespaceOption,
        {
          name: ["-l", "--selector"],
          description:
            "Selector (label query) to filter on, supports '=', '==', and '!='.(e.g. -l key1=value1,key2=value2)",
          args: { name: "selector" },
        },
      ],
    },
    {
      name: "delete",
      description: "Delete an application",
      args: { name: "applications", isOptional: true, isVariadic: true },
      options: [
        {
          name: "--all",
          description: "Delete all the application under the given namespace",
        },
        requestEnvOption,
        {
          name: ["-f", "--force"],
          description: "Force delete the application",
        },
        {
          name: ["-i", "--interactive"],
          description: "Delete the application interactively",
        },
        requestNamespaceOption,
        {
          name: ["-o", "--orphan"],
          description: "Delete the application and orphan managed resources",
        },
        {
          name: ["-w", "--wait"],
          description: "Wait util the application is deleted completely",
        },
      ],
    },
    {
      name: "env",
      description: "Manage environments for vela applications to run",
      subcommands: [
        {
          name: "delete",
          description: "Delete an environment",
          args: { name: "env-name" },
        },
        {
          name: "init",
          description: "Create environment for vela applications to run",
          args: { name: "env-name" },
          options: [
            {
              name: "--namespace",
              description: "Specify K8s namespace for env",
              args: { name: "namespace" },
            },
          ],
        },
        {
          name: ["ls", "list"],
          description: "List environments for vela applications to run",
          args: { name: "env-name", isOptional: true },
        },
        {
          name: ["set", "sw"],
          description: "Set an environment",
          args: { name: "env-name" },
          options: [
            {
              name: "--labels",
              description: "Set labels for namespace",
              args: { name: "labels" },
            },
          ],
        },
      ],
    },
    {
      name: "show",
      description:
        "Show the reference doc for a component, trait, policy or workflow",
      args: {
        name: "name",
        description:
          "Definition name, or a local CUE definition or Cloud Resource definition YAML file",
        isOptional: true,
        template: "filepaths",
      },
      options: [
        envOption,
        {
          name: "--format",
          description:
            "Specify format of output data, by default it's a pretty human readable format, you can specify markdown(md)",
          args: { name: "format", suggestions: ["md", "markdown"] },
        },
        {
          name: "--i18n",
          description:
            "Specify the location for of the doc generated from definition, now supported options 'zh', 'en'",
          args: {
            name: "i18n",
            default: "https://kubevela.io/reference-i18n.json",
          },
        },
        {
          name: ["-l", "--location"],
          description:
            "Specify the location for of the doc generated from definition, now supported options 'zh', 'en'",
          args: { name: "location", suggestions: ["zh", "en"] },
        },
        namespaceOption,
        {
          name: ["-p", "--path"],
          description:
            "Specify the path for of the doc generated from definition",
          args: { name: "directory", template: "folders" },
        },
        {
          name: ["-r", "--revision"],
          description:
            "Get the specified revision of a definition. Use def get to list revisions",
          args: { name: "revision" },
        },
        { name: "--web", description: "Start web doc site" },
      ],
    },
    {
      name: "dry-run",
      description:
        "Dry Run an application, and output the K8s resources as result to stdout",
      options: [
        {
          name: ["-d", "--definition"],
          description:
            "Specify a definition file or directory, it will only be used in dry-run rather than applied to K8s cluster",
          args: { name: "path", template: "filepaths" },
        },
        {
          name: ["-x", "--definition-namespace"],
          description: "Specify which namespace the definition locates",
          args: { name: "definition-namespace", default: "vela-system" },
        },
        envOption,
        {
          name: ["-f", "--file"],
          description: "Application related file names",
          isRepeatable: true,
          args: { name: "file", template: "filepaths" },
        },
        {
          name: "--merge",
          description: "Merge standalone files to produce dry-run results",
        },
        namespaceOption,
        {
          name: "--offline",
          description:
            "Run dry-run in offline / local mode, all validation steps will be skipped",
        },
      ],
    },
    {
      name: "live-diff",
      description: "Compare application and revisions",
      args: { name: "application", isOptional: true },
      options: [
        {
          name: ["-c", "--context"],
          description:
            "Output number lines of context around changes, by default show all unchanged lines",
          args: { name: "context", default: "-1" },
        },
        {
          name: ["-d", "--definition"],
          description:
            "Specify a file or directory containing capability definitions, they will only be used in dry-run rather than applied to K8s cluster",
          args: { name: "path", template: "filepaths" },
        },
        envOption,
        {
          name: ["-f", "--file"],
          description: "Application file name",
          args: { name: "file", template: "filepaths" },
        },
        namespaceOption,
        {
          name: ["-r", "--revision"],
          description:
            "Specify one or two application revision name(s), by default, it will compare with the latest revision",
          args: { name: "revision" },
        },
      ],
    },
    {
      name: "logs",
      description: "Tail logs for application",
      args: { name: "application" },
      options: [
        podClusterOption,
        podComponentOption,
        {
          name: "--container",
          description: "Specify the container name",
          args: { name: "container" },
        },
        envOption,
        namespaceOption,
        {
          name: ["-o", "--output"],
          description: "Output format for logs, support: [default, raw, json]",
          args: {
            name: "format",
            suggestions: ["default", "raw", "json"],
            default: "default",
          },
        },
        {
          name: ["-p", "--pod"],
          description: "Specify the pod name",
          args: { name: "pod" },
        },
      ],
    },
    {
      name: "port-forward",
      description:
        "Forward local ports to container/service port of vela application",
      args: [
        { name: "application" },
        {
          name: "ports",
          description: "[LOCAL_PORT:]REMOTE_PORT",
          isOptional: true,
          isVariadic: true,
        },
      ],
      options: [
        {
          name: "--address",
          description:
            "Addresses to listen on (comma separated). Only accepts IP addresses or localhost as a value. When localhost is supplied, vela will try to bind on both 127.0.0.1 and ::1 and will fail if neither of these addresses are available to bind",
          isRepeatable: true,
          args: { name: "address" },
        },
        podClusterOption,
        podComponentOption,
        envOption,
        namespaceOption,
        {
          name: "--pod-running-timeout",
          description:
            "The length of time (like 5s, 2m, or 3h, higher than zero) to wait until at least one pod is running",
          args: { name: "duration", default: "1m0s" },
        },
        {
          name: "--resource-name",
          description: "Specify the resource name",
          args: { name: "resource-name" },
        },
        {
          name: ["-t", "--resource-type"],
          description:
            "Specify the resource type, support the service, and pod",
          args: { name: "resource-type", suggestions: ["service", "pod"] },
        },
      ],
    },
    {
      name: "exec",
      description: "Execute command in a container",
      args: { name: "application" },
      options: [
        podClusterOption,
        podComponentOption,
        {
          name: "--container",
          description: "Specify the container name",
          args: { name: "container" },
        },
        envOption,
        namespaceOption,
        {
          name: ["-p", "--pod"],
          description: "Specify the pod name",
          args: { name: "pod" },
        },
        {
          name: "--pod-running-timeout",
          description:
            "The length of time (like 5s, 2m, or 3h, higher than zero) to wait until at least one pod is running",
          args: { name: "duration", default: "1m0s" },
        },
        { name: ["-i", "--stdin"], description: "Pass stdin to the container" },
        { name: ["-t", "--tty"], description: "Stdin is a TTY" },
      ],
    },
    {
      name: "revision",
      description: "Manage Application Revisions",
      subcommands: [
        {
          name: "get",
          description: "Get specific revision of application",
          args: { name: "revision" },
          options: [
            {
              name: ["-d", "--definition"],
              description: "Component definition",
              args: { name: "path", template: "filepaths" },
            },
            envOption,
            namespaceOption,
            {
              name: ["-o", "--output"],
              description:
                "Raw Application output format. One of: (json, yaml, jsonpath)",
              args: {
                name: "format",
                suggestions: ["json", "yaml", "jsonpath"],
              },
            },
          ],
        },
        {
          name: ["list", "ls"],
          description: "List application revisions",
          args: { name: "application" },
          options: [envOption, namespaceOption],
        },
      ],
    },
    {
      name: "debug",
      description: "Debug running application",
      args: { name: "application" },
      options: [
        envOption,
        {
          name: ["-f", "--focus"],
          description:
            "Specify the focus value to debug, only valid for application with workflow",
          args: { name: "focus" },
        },
        namespaceOption,
        {
          name: ["-s", "--step"],
          description: "Specify the step or component to debug",
          args: { name: "step" },
        },
      ],
    },
    {
      name: "policy",
      description: "Manage and debug Application-scoped policies",
      subcommands: [
        {
          name: "dry-run",
          description:
            "Preview what policies would do to an Application without applying changes",
          args: { name: "application", isOptional: true },
          options: [
            {
              name: "--allow-namespace-global-policies",
              description:
                "Simulate a controller run with --allow-namespace-global-policies",
            },
            {
              name: "--allow-skip-global-policies",
              description:
                "Simulate a controller run with --allow-skip-global-policies",
            },
            {
              name: "--details",
              description:
                "Include per-policy output details (context, labels, annotations, spec transforms)",
            },
            envOption,
            {
              name: ["-f", "--file"],
              description: "Path to a local Application YAML file",
              args: { name: "file", template: "filepaths" },
            },
            namespaceOption,
            {
              name: "--outcome",
              description:
                "Include outcome (final spec, labels, annotations and context) in output",
            },
            {
              name: ["-o", "--output"],
              description: "Output format: table, summary, json, yaml",
              args: {
                name: "format",
                suggestions: ["table", "summary", "json", "yaml"],
                default: "table",
              },
            },
            {
              name: ["-p", "--policy"],
              description:
                'Filter output to policies matching a name or glob pattern (e.g. "add-env-*")',
              args: { name: "policy" },
            },
          ],
        },
        {
          name: "view",
          description:
            "View applied Application-scoped policies and their effects",
          args: { name: "application" },
          options: [
            {
              name: "--details",
              description:
                "Include per-policy output details (context, labels, annotations, spec transforms)",
            },
            envOption,
            namespaceOption,
            {
              name: "--outcome",
              description:
                "Include final spec, labels, annotations and context in output",
            },
            {
              name: ["-o", "--output"],
              description: "Output format: table, json, yaml",
              args: {
                name: "format",
                suggestions: ["table", "json", "yaml"],
                default: "table",
              },
            },
            {
              name: ["-p", "--policy"],
              description:
                'Filter output to policies matching a name or glob pattern (e.g. "add-env-*")',
              args: { name: "policy" },
            },
            {
              name: "--wide",
              description:
                "Show additional columns (labels, annotations, context)",
            },
          ],
        },
      ],
    },
    {
      name: "workflow",
      description: "Operate application delivery workflow",
      subcommands: [
        {
          name: "debug",
          description: "Debug workflow steps",
          args: { name: "name" },
          options: [
            envOption,
            {
              name: ["-f", "--focus"],
              description:
                "Specify the focus value to debug, only valid for application with workflow",
              args: { name: "focus" },
            },
            namespaceOption,
            workflowStepOption,
            workflowTypeOption,
          ],
        },
        {
          name: "list",
          description: "List running workflows",
          options: [allNamespacesOption, envOption, namespaceOption],
        },
        {
          name: "logs",
          description: "Tail logs for workflow steps",
          args: { name: "name" },
          options: [
            envOption,
            namespaceOption,
            {
              name: ["-o", "--output"],
              description:
                "Output format for logs, support: [default, raw, json]",
              args: {
                name: "format",
                suggestions: ["default", "raw", "json"],
                default: "default",
              },
            },
            workflowStepOption,
            workflowTypeOption,
          ],
        },
        {
          name: "restart",
          description: "Restart a workflow",
          args: { name: "name" },
          options: [
            envOption,
            namespaceOption,
            workflowStepOption,
            workflowTypeOption,
          ],
        },
        {
          name: "resume",
          description: "Resume a suspend workflow",
          args: { name: "name" },
          options: [
            envOption,
            namespaceOption,
            workflowStepOption,
            workflowTypeOption,
          ],
        },
        {
          name: "rollback",
          description:
            "Rollback an application workflow to the latest revision",
          args: { name: "application" },
          options: [envOption, namespaceOption, workflowTypeOption],
        },
        {
          name: "suspend",
          description: "Suspend a workflow",
          args: { name: "name" },
          options: [
            envOption,
            namespaceOption,
            workflowStepOption,
            workflowTypeOption,
          ],
        },
        {
          name: "terminate",
          description: "Terminate a workflow",
          args: { name: "name" },
          options: [envOption, namespaceOption, workflowTypeOption],
        },
      ],
    },
    {
      name: "adopt",
      description: "Adopt resources into new application",
      args: {
        name: "resources",
        description:
          "<type>[/<cluster>][/<namespace>]/<name>, or a Helm release name with --type helm",
        isOptional: true,
        isVariadic: true,
      },
      options: [
        {
          name: "--adopt-template",
          description:
            "The CUE template for adoption. If not provided, the default template will be used when --auto is switched on",
          args: { name: "adopt-template", template: "filepaths" },
        },
        { name: "--all", description: "Adopt all resources in the namespace" },
        {
          name: "--app-name",
          description:
            "The name of application for adoption. If empty for helm type adoption, it will inherit the helm chart's name",
          args: { name: "app-name" },
        },
        {
          name: "--apply",
          description:
            "If true, the application for adoption will be applied. Otherwise, it will only be printed",
        },
        {
          name: ["-d", "--driver"],
          description:
            "The storage backend of helm adoption. Only take effect when --type=helm",
          args: {
            name: "driver",
            suggestions: ["secret", "configmap", "memory", "sql"],
          },
        },
        requestEnvOption,
        {
          name: ["-m", "--mode"],
          description:
            "The mode of adoption. Available values: [read-only, take-over]",
          args: {
            name: "mode",
            suggestions: ["read-only", "take-over"],
            default: "read-only",
          },
        },
        requestNamespaceOption,
        {
          name: "--recycle",
          description:
            "If true, when the adoption application is successfully applied, the old storage (like Helm secret) will be recycled",
        },
        {
          name: "--resource-topology-rule",
          description:
            "The CUE template for specify the rule of the resource topology. If not provided, the default rule will be used",
          args: { name: "resource-topology-rule", template: "filepaths" },
        },
        {
          name: ["-t", "--type"],
          description: "The type of adoption. Available values: [native, helm]",
          args: {
            name: "type",
            suggestions: ["native", "helm"],
            default: "native",
          },
        },
        { name: ["-y", "--yes"], description: "Skip confirmation prompt" },
      ],
    },
    {
      name: "top",
      description: "Launch UI to display the platform overview",
      options: [allNamespacesOption, envOption, namespaceOption],
    },
    {
      name: "cluster",
      description: "Manage Kubernetes clusters",
      subcommands: [
        {
          name: "alias",
          description: "Alias a named cluster",
          args: [{ name: "cluster-name" }, { name: "alias" }],
        },
        {
          name: "detach",
          description: "Detach managed cluster",
          args: { name: "cluster-name" },
          options: [
            {
              name: ["-p", "--kubeconfig-path"],
              description:
                "Specify the kubeconfig path of managed cluster. If you use ocm to manage your cluster, you must set the kubeconfig-path",
              args: { name: "path", template: "filepaths" },
            },
          ],
        },
        {
          name: "export-config",
          description: "Export multi-cluster kubeconfig",
          options: [
            {
              name: ["-l", "--selector"],
              description: "LabelSelector for select clusters to export",
              args: { name: "selector" },
            },
          ],
        },
        {
          name: "join",
          description: "Join managed cluster",
          args: { name: "kubeconfig", template: "filepaths" },
          options: [
            {
              name: "--create-namespace",
              description:
                "Specifies the namespace need to create in managedCluster",
              args: { name: "create-namespace", default: "vela-system" },
            },
            {
              name: ["-t", "--engine"],
              description:
                "Specify the cluster management engine. If empty, it will use cluster-gateway cluster management solution. Default to be empty",
              args: {
                name: "engine",
                suggestions: ["cluster-gateway", "ocm"],
                default: "cluster-gateway",
              },
            },
            {
              name: "--in-cluster-boostrap",
              description:
                "If true, the registering managed cluster will use the internal endpoint prescribed in the hub cluster's configmap kube-public/cluster-info to register itself to the hub cluster. Otherwise use the original endpoint from the hub kubeconfig",
            },
            {
              name: "--labels",
              description:
                "Specifies the labels need to create in managedCluster",
              args: { name: "labels" },
            },
            {
              name: ["-n", "--name"],
              description:
                "Specify the cluster name. If empty, it will use the cluster name in config file. Default to be empty",
              args: { name: "name" },
            },
          ],
        },
        {
          name: "labels",
          description: "Manage Kubernetes Cluster Labels",
          subcommands: [
            {
              name: "add",
              description: "Add labels to managed cluster",
              args: [
                { name: "cluster-name" },
                {
                  name: "labels",
                  description: "Comma-separated key=value pairs",
                },
              ],
            },
            {
              name: ["del", "delete", "remove"],
              description: "Delete labels for managed cluster",
              args: [
                { name: "cluster-name" },
                { name: "labels", description: "Comma-separated label keys" },
              ],
            },
          ],
        },
        {
          name: ["list", "ls"],
          description: "List managed clusters",
        },
        {
          name: "probe",
          description: "Health probe managed cluster",
          args: { name: "cluster-name" },
        },
        {
          name: "rename",
          description: "Rename managed cluster",
          args: [{ name: "old-name" }, { name: "new-name" }],
        },
      ],
    },
    {
      name: "auth",
      description: "Manage identity and authorizations",
      subcommands: [
        {
          name: "gen-kubeconfig",
          description: "Generate kubeconfig for user",
          options: [
            requestEnvOption,
            {
              name: ["-g", "--group"],
              description:
                "The groups of the generated kubeconfig. This flag only works when --user is set. It will be embedded as the Organization in the X509 certificate",
              isRepeatable: true,
              args: { name: "group" },
            },
            {
              name: ["-n", "--namespace"],
              description:
                "The namespace of the serviceaccount. This flag only works when --serviceaccount is set",
              args: { name: "namespace" },
            },
            {
              name: "--serviceaccount",
              description:
                "The serviceaccount of the generated kubeconfig. If set, a kubeconfig will be generated based on the secret token of the serviceaccount. Cannot be set when --user presents",
              args: { name: "serviceaccount" },
            },
            {
              name: ["-u", "--user"],
              description:
                "The user of the generated kubeconfig. If set, an X509-based kubeconfig will be intended to create. It will be embedded as the Subject in the X509 certificate",
              args: { name: "user" },
            },
          ],
        },
        {
          name: "grant-privileges",
          description: "Grant privileges for user/group/serviceaccount",
          options: [
            {
              name: "--create-namespace",
              description:
                "If set, non-exist namespace will be created automatically",
            },
            requestEnvOption,
            {
              name: "--for-cluster",
              description:
                "The clusters privileges to grant. If empty, the control plane will be used",
              isRepeatable: true,
              args: { name: "for-cluster" },
            },
            {
              name: "--for-namespace",
              description:
                "The namespaces privileges to grant. If empty, cluster-scoped privileges will be granted",
              isRepeatable: true,
              args: { name: "for-namespace" },
            },
            {
              name: ["-g", "--group"],
              description: "The group to grant privileges",
              isRepeatable: true,
              args: { name: "group" },
            },
            {
              name: "--kubeconfig",
              description:
                "The kubeconfig to grant privileges. If set, it will override all the other identity flags",
              args: { name: "path", template: "filepaths" },
            },
            {
              name: ["-n", "--namespace"],
              description:
                "The namespace of the serviceaccount. This flag only works when --serviceaccount is set",
              args: { name: "namespace" },
            },
            {
              name: "--readonly",
              description:
                "If set, only read privileges of resources will be granted. Otherwise, read/write privileges will be granted",
            },
            {
              name: "--serviceaccount",
              description: "The serviceaccount to grant privileges",
              args: { name: "serviceaccount" },
            },
            {
              name: ["-u", "--user"],
              description: "The user to grant privileges",
              args: { name: "user" },
            },
          ],
        },
        {
          name: "list-privileges",
          description: "List privileges for user/group/serviceaccount",
          options: [
            {
              name: ["-c", "--cluster"],
              description:
                "The cluster to list privileges. If not set, the command will list privileges in the control plane",
              isRepeatable: true,
              args: { name: "cluster", default: "local" },
            },
            requestEnvOption,
            {
              name: ["-g", "--group"],
              description:
                "The group to list privileges. Can be set together with --user",
              isRepeatable: true,
              args: { name: "group" },
            },
            {
              name: "--kubeconfig",
              description:
                "The kubeconfig to list privileges. If set, it will override all the other identity flags",
              args: { name: "path", template: "filepaths" },
            },
            {
              name: ["-n", "--namespace"],
              description:
                "The namespace of the serviceaccount. This flag only works when --serviceaccount is set",
              args: { name: "namespace" },
            },
            {
              name: "--serviceaccount",
              description:
                "The serviceaccount to list privileges. Cannot be set with --user and --group",
              args: { name: "serviceaccount" },
            },
            {
              name: ["-u", "--user"],
              description: "The user to list privileges",
              args: { name: "user" },
            },
          ],
        },
      ],
    },
    {
      name: "config",
      description: "Manage the configs",
      subcommands: [
        {
          name: ["create", "c"],
          description: "Create a config",
          args: [
            { name: "name" },
            {
              name: "properties",
              description: "Config properties as key=value",
              isOptional: true,
              isVariadic: true,
            },
          ],
          options: [
            {
              name: "--alias",
              description: "Specify the alias of the config",
              args: { name: "alias" },
            },
            {
              name: "--description",
              description: "Specify the description of the config",
              args: { name: "description" },
            },
            { name: "--dry-run", description: "Dry run to apply the config" },
            {
              name: ["-f", "--file"],
              description: "Specify the file name of the config properties",
              args: { name: "file", template: "filepaths" },
            },
            {
              name: ["-n", "--namespace"],
              description: "Specify the namespace of the config",
              args: { name: "namespace", default: "vela-system" },
            },
            {
              name: "--target",
              description:
                "This config will be distributed if this flag is set",
              isRepeatable: true,
              args: { name: "target" },
            },
            {
              name: ["-t", "--template"],
              description: "Specify the config template name and namespace",
              args: { name: "template" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a config",
          args: { name: "name" },
          options: [
            {
              name: ["-n", "--namespace"],
              description: "Specify the namespace of the config",
              args: { name: "namespace", default: "vela-system" },
            },
            {
              name: "--not-recall",
              description:
                "Means only deleting the config from the local and do not recall from targets",
            },
          ],
        },
        {
          name: ["distribute", "d"],
          description: "Distribute a config",
          args: { name: "name" },
          options: [
            {
              name: ["-n", "--namespace"],
              description: "Specify the namespace of the distribution",
              args: { name: "namespace", default: "vela-system" },
            },
            {
              name: ["-r", "--recall"],
              description:
                "This field means recalling the configs from all targets",
            },
            {
              name: ["-t", "--target"],
              description:
                "Specify the targets that want to distribute,the format is: <clusterName>/<namespace>",
              isRepeatable: true,
              args: { name: "target" },
            },
          ],
        },
        {
          name: "list",
          description: "List the configs",
          options: [
            allNamespacesOption,
            {
              name: ["-n", "--namespace"],
              description: "Specify the namespace of the config",
              args: { name: "namespace", default: "vela-system" },
            },
            {
              name: ["-t", "--template"],
              description: "Specify the template of the config",
              args: { name: "template" },
            },
          ],
        },
      ],
    },
    {
      name: ["config-template", "ct"],
      description: "Manage the template of config",
      subcommands: [
        {
          name: "apply",
          description: "Apply a config template",
          options: [
            {
              name: ["-f", "--file"],
              description: "Specify the template file name",
              args: { name: "file", template: "filepaths" },
            },
            {
              name: "--name",
              description: "Specify the config template name",
              args: { name: "name" },
            },
            {
              name: ["-n", "--namespace"],
              description: "Specify the namespace of the template",
              args: { name: "namespace", default: "vela-system" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a config template",
          args: { name: "name" },
          options: [
            {
              name: ["-n", "--namespace"],
              description: "Specify the namespace of the template",
              args: { name: "namespace", default: "vela-system" },
            },
          ],
        },
        {
          name: "list",
          description: "List the config templates",
          options: [
            allNamespacesOption,
            {
              name: ["-n", "--namespace"],
              description: "Specify the namespace of the template",
              args: { name: "namespace", default: "vela-system" },
            },
          ],
        },
        {
          name: "show",
          description: "Show the documents of the template properties",
          args: { name: "name" },
          options: [
            {
              name: ["-n", "--namespace"],
              description: "Specify the namespace of the template",
              args: { name: "namespace", default: "vela-system" },
            },
          ],
        },
      ],
    },
    {
      name: "addon",
      description: "Manage addons for extension",
      subcommands: [
        {
          name: ["disable", "uninstall"],
          description: "Disable an addon",
          args: { name: "addon" },
          options: [
            {
              name: ["-f", "--force"],
              description:
                "Skip checking if applications are still using this addon",
            },
          ],
        },
        {
          name: ["enable", "install"],
          description: "Enable an addon",
          args: [
            {
              name: "addon",
              description:
                "Addon name, <registry>/<addon>, or a local addon directory",
              template: "folders",
            },
            {
              name: "parameters",
              description: "Addon parameters as key=value",
              isOptional: true,
              isVariadic: true,
            },
          ],
          options: [
            {
              name: ["-c", "--clusters"],
              description: "Specify the runtime-clusters to enable",
              args: { name: "clusters" },
            },
            {
              name: "--dry-run",
              description: "Render all yaml files out without real execute it",
            },
            {
              name: "--override-definitions",
              description:
                "Override existing definitions if conflict with those contained in this addon",
            },
            {
              name: ["-s", "--skip-version-validating"],
              description: "Skip validating system version requirement",
            },
            {
              name: ["-v", "--version"],
              description: "Specify the addon version to enable",
              args: { name: "version" },
            },
            {
              name: ["-y", "--yes"],
              description:
                "All checks will be skipped and the default answer is yes for all validation check",
            },
          ],
        },
        {
          name: "init",
          description: "Create an addon scaffold",
          args: { name: "addon-name" },
          options: [
            {
              name: "--chart",
              description: "Helm Chart name",
              args: { name: "chart" },
            },
            {
              name: "--chart-version",
              description: "Version of the Chart",
              args: { name: "chart-version" },
            },
            {
              name: "--components",
              description:
                "Comma-separated list of component names to scaffold (requires --godef)",
              args: { name: "components" },
            },
            {
              name: ["-f", "--force"],
              description: "Overwrite existing addon files",
            },
            {
              name: "--godef",
              description:
                "Generate Go-based definition scaffolding in godef/ folder",
            },
            {
              name: "--helm-repo",
              description: "URL that points to a Helm repo",
              args: { name: "helm-repo" },
            },
            {
              name: "--no-samples",
              description: "Do not generate sample files",
            },
            {
              name: ["-p", "--path"],
              description:
                "Path to the addon directory, defaults to ./<addon-name>",
              args: { name: "directory", template: "folders" },
            },
            {
              name: "--policies",
              description:
                "Comma-separated list of policy names to scaffold (requires --godef)",
              args: { name: "policies" },
            },
            {
              name: "--traits",
              description:
                "Comma-separated list of trait names to scaffold (requires --godef)",
              args: { name: "traits" },
            },
            {
              name: ["-u", "--url"],
              description: "Add URL resources using ref-object component",
              isRepeatable: true,
              args: { name: "url" },
            },
            {
              name: "--workflowsteps",
              description:
                "Comma-separated list of workflow step names to scaffold (requires --godef)",
              args: { name: "workflowsteps" },
            },
          ],
        },
        {
          name: ["list", "ls"],
          description: "List addons",
          options: [
            {
              name: ["-r", "--registry"],
              description: "Specify the registry name to list",
              args: { name: "registry" },
            },
          ],
        },
        {
          name: "package",
          description: "Package an addon directory",
          args: { name: "addon-directory", template: "folders" },
        },
        {
          name: "push",
          description: "Uploads an addon package to ChartMuseum",
          args: [
            {
              name: "addon",
              description: "Addon directory or packaged addon (.tgz)",
              template: "filepaths",
            },
            {
              name: "chartmuseum",
              description:
                "Name of a helm-type addon registry, or a ChartMuseum URL",
            },
          ],
          options: [
            {
              name: "--access-token",
              description:
                "Send token in Authorization header [$HELM_REPO_ACCESS_TOKEN]",
              args: { name: "access-token" },
            },
            {
              name: ["-a", "--app-version"],
              description: "Override app version pre-push",
              args: { name: "app-version" },
            },
            {
              name: "--auth-header",
              description:
                "Alternative header to use for token auth [$HELM_REPO_AUTH_HEADER]",
              args: { name: "auth-header" },
            },
            {
              name: "--ca-file",
              description:
                "Verify certificates of HTTPS-enabled servers using this CA bundle [$HELM_REPO_CA_FILE]",
              args: { name: "ca-file", template: "filepaths" },
            },
            {
              name: "--cert-file",
              description:
                "Identify HTTPS client using this SSL certificate file [$HELM_REPO_CERT_FILE]",
              args: { name: "cert-file", template: "filepaths" },
            },
            {
              name: "--context-path",
              description: "ChartMuseum context path [$HELM_REPO_CONTEXT_PATH]",
              args: { name: "context-path" },
            },
            {
              name: ["-f", "--force"],
              description: "Force upload even if chart version exists",
            },
            {
              name: "--insecure",
              description:
                "Connect to server with an insecure way by skipping certificate verification [$HELM_REPO_INSECURE]",
            },
            {
              name: "--keep-chartmeta",
              description:
                "Do not update Chart.yaml automatically according to addon metadata (only when addon dir provided)",
            },
            {
              name: "--key-file",
              description:
                "Identify HTTPS client using this SSL key file [$HELM_REPO_KEY_FILE]",
              args: { name: "key-file", template: "filepaths" },
            },
            {
              name: ["-p", "--password"],
              description:
                "Override HTTP basic auth password [$HELM_REPO_PASSWORD]",
              args: { name: "password" },
            },
            {
              name: ["-t", "--timeout"],
              description:
                "The duration (in seconds) vela cli will wait to get response from ChartMuseum",
              args: { name: "seconds", default: "30" },
            },
            { name: "--use-http", description: "Use HTTP" },
            {
              name: ["-u", "--username"],
              description:
                "Override HTTP basic auth username [$HELM_REPO_USERNAME]",
              args: { name: "username" },
            },
            {
              name: ["-v", "--version"],
              description: "Override chart version pre-push",
              args: { name: "version" },
            },
          ],
        },
        {
          name: "registry",
          description: "Manage addon registry",
          subcommands: [
            {
              name: "add",
              description: "Add an addon registry",
              args: { name: "registry-name" },
              options: [...addonRegistryOptions],
            },
            {
              name: "delete",
              description: "Delete an addon registry",
              args: { name: "registry-name" },
            },
            {
              name: "get",
              description: "Get an addon registry",
              args: { name: "registry-name" },
            },
            {
              name: "list",
              description: "List addon registries",
            },
            {
              name: "update",
              description: "Update an addon registry",
              args: { name: "registry-name" },
              options: [...addonRegistryOptions],
            },
          ],
        },
        {
          name: "status",
          description: "Get an addon's status",
          args: { name: "addon" },
          options: [
            {
              name: ["-v", "--verbose"],
              description:
                "Show addon descriptions and parameters in addition to status",
            },
          ],
        },
        {
          name: "upgrade",
          description: "Upgrade an addon",
          args: [
            {
              name: "addon",
              description: "Addon name, or a local addon directory",
              template: "folders",
            },
            {
              name: "parameters",
              description: "Addon parameters as key=value",
              isOptional: true,
              isVariadic: true,
            },
          ],
          options: [
            {
              name: ["-c", "--clusters"],
              description: "Specify the runtime-clusters to upgrade",
              args: { name: "clusters" },
            },
            {
              name: "--override-definitions",
              description:
                "Override existing definitions if conflict with those contained in this addon",
            },
            {
              name: ["-s", "--skip-version-validating"],
              description: "Skip validating system version requirement",
            },
            {
              name: ["-v", "--version"],
              description: "Specify the addon version to upgrade",
              args: { name: "version" },
            },
          ],
        },
      ],
    },
    {
      name: ["uischema", "ui"],
      description: "Manage UI schema for addons",
      subcommands: [
        {
          name: "apply",
          description: "Apply a UI schema file or directory",
          args: {
            name: "path",
            description: "UI schema file or directory",
            template: "filepaths",
          },
        },
      ],
    },
    {
      name: ["component", "comp", "components"],
      description: "List/get components",
      subcommands: [
        {
          name: "get",
          description: "Get component from registry",
          args: { name: "component" },
        },
      ],
      options: [
        { name: "--discover", description: "Discover traits in registries" },
        {
          name: "--label",
          description:
            "A label to filter components, the format is --label type=terraform",
          args: { name: "key=value" },
        },
        {
          name: "--registry",
          description: "Specify the registry name",
          isPersistent: true,
          args: { name: "registry", default: "default" },
        },
        {
          name: "--token",
          description: "Specify token when using --url to specify registry url",
          isPersistent: true,
          args: { name: "token" },
        },
        {
          name: "--url",
          description: "Specify the registry URL",
          isPersistent: true,
          args: { name: "url" },
        },
      ],
    },
    {
      name: ["trait", "traits"],
      description: "List/get traits",
      subcommands: [
        {
          name: "get",
          description: "Get trait from registry",
          args: { name: "trait" },
        },
      ],
      options: [
        { name: "--discover", description: "Discover traits in registries" },
        {
          name: "--label",
          description:
            "A label to filter components, the format is --label type=terraform",
          args: { name: "key=value" },
        },
        {
          name: "--registry",
          description: "Specify the registry name",
          isPersistent: true,
          args: { name: "registry", default: "default" },
        },
        {
          name: "--token",
          description: "Specify token when using --url to specify registry url",
          isPersistent: true,
          args: { name: "token" },
        },
        {
          name: "--url",
          description: "Specify the registry URL",
          isPersistent: true,
          args: { name: "url" },
        },
      ],
    },
    {
      name: "def",
      description: "Manage definitions",
      subcommands: [
        {
          name: "apply",
          description: "Apply X-Definition",
          args: {
            name: "definition",
            description: "DEFINITION.cue or DEFINITION.go file, or a directory",
            template: "filepaths",
          },
          options: [
            {
              name: "--dry-run",
              description:
                "Only build definition from CUE into CRB object without applying it to kubernetes clusters",
            },
            definitionNamespaceOption,
          ],
        },
        {
          name: "apply-module",
          description: "Apply all definitions from a Go module",
          args: {
            name: "module",
            description:
              "Local path or Go module (e.g. github.com/org/defs@v1.0.0)",
            template: "folders",
          },
          options: [
            {
              name: ["-c", "--conflict"],
              description:
                "Conflict resolution strategy: skip, overwrite, fail, rename",
              args: {
                name: "conflict",
                suggestions: ["skip", "overwrite", "fail", "rename"],
                default: "fail",
              },
            },
            {
              name: "--dry-run",
              description:
                "Preview what would be applied without making changes",
            },
            {
              name: "--ignore-placement",
              description:
                "Ignore placement constraints and apply all definitions",
            },
            {
              name: ["-n", "--namespace"],
              description: "Namespace to apply definitions to",
              args: { name: "namespace", default: "vela-system" },
            },
            {
              name: ["-p", "--prefix"],
              description: "Prefix to add to all definition names",
              args: { name: "prefix" },
            },
            {
              name: "--skip-hooks",
              description: "Skip all hooks (pre-apply and post-apply)",
            },
            {
              name: "--skip-post-apply",
              description: "Skip post-apply hooks only",
            },
            {
              name: "--skip-pre-apply",
              description: "Skip pre-apply hooks only",
            },
            {
              name: "--stats",
              description: "Show detailed timing and statistics",
            },
            {
              name: ["-t", "--types"],
              description:
                "Comma-separated list of definition types to apply (component,trait,policy,workflow-step)",
              args: { name: "types" },
            },
            {
              name: ["-v", "--version"],
              description:
                "Version of the module to apply (for remote modules)",
              args: { name: "version" },
            },
          ],
        },
        {
          name: ["compatibility-check", "compat"],
          description:
            "Scan for CUE version incompatibilities in definitions and applications",
          subcommands: [
            {
              name: "applications",
              description:
                "Scan active ApplicationRevisions for CUE incompatibilities",
              options: [
                {
                  name: "--annotation-selector",
                  description:
                    "Filter Applications by annotations, e.g. --annotation-selector owner=team-a",
                  args: { name: "annotation-selector" },
                },
                {
                  name: ["-l", "--label-selector"],
                  description:
                    "Filter Applications by labels, e.g. -l env=prod",
                  args: { name: "label-selector" },
                },
                {
                  name: ["-n", "--namespace"],
                  description:
                    "Only scan Applications in this namespace (default: all namespaces)",
                  args: { name: "namespace" },
                },
                {
                  name: ["-o", "--output"],
                  description: "Output format. One of: table, yaml, json",
                  args: {
                    name: "format",
                    suggestions: ["table", "yaml", "json"],
                    default: "table",
                  },
                },
              ],
            },
            {
              name: "definitions",
              description:
                "Scan all definitions and their revision history for CUE incompatibilities",
              options: [
                {
                  name: "--annotation-selector",
                  description:
                    "Filter by annotations, e.g. --annotation-selector owner=team-a",
                  args: { name: "annotation-selector" },
                },
                {
                  name: "--latest-revision-only",
                  description:
                    "Only check the current live definition; skip DefinitionRevision history",
                },
                {
                  name: ["-l", "--label-selector"],
                  description: "Filter by labels, e.g. -l app=foo,env=prod",
                  args: { name: "label-selector" },
                },
                {
                  name: ["-n", "--namespace"],
                  description:
                    "Only scan definitions in this namespace (default: all namespaces)",
                  args: { name: "namespace" },
                },
                {
                  name: ["-o", "--output"],
                  description: "Output format. One of: table, yaml, json",
                  args: {
                    name: "format",
                    suggestions: ["table", "yaml", "json"],
                    default: "table",
                  },
                },
              ],
            },
          ],
        },
        {
          name: "del",
          description: "Delete X-Definition",
          args: { name: "definition-name" },
          options: [
            definitionNamespaceOption,
            {
              name: ["-t", "--type"],
              description:
                "Specify the definition type of target. Valid types: component, policy, trait, workflow-step, workload",
              args: {
                name: "type",
                suggestions: [
                  "component",
                  "policy",
                  "trait",
                  "workflow-step",
                  "workload",
                ],
              },
            },
          ],
        },
        {
          name: "doc-gen",
          description: "Generate documentation for definitions",
          deprecated: true,
          args: { name: "name" },
          options: [
            {
              name: ["-p", "--path"],
              description:
                "Specify the path for of the doc generated from definition",
              args: { name: "directory", template: "folders" },
            },
            {
              name: ["-l", "--location"],
              description:
                "Specify the location for of the doc generated from definition, now supported options 'zh', 'en'",
              args: { name: "location", suggestions: ["zh", "en"] },
            },
            definitionNamespaceOption,
            {
              name: "--i18n",
              description:
                "Specify the location for of the doc generated from definition, now supported options 'zh', 'en'",
              args: {
                name: "i18n",
                default: "https://kubevela.io/reference-i18n.json",
              },
            },
          ],
        },
        {
          name: "edit",
          description: "Edit X-Definition",
          args: { name: "name" },
          options: [
            definitionNamespaceOption,
            {
              name: ["-t", "--type"],
              description:
                "Specify which definition type to get. If empty, all types will be searched. Valid types: component, policy, trait, workflow-step, workload",
              args: {
                name: "type",
                suggestions: [
                  "component",
                  "policy",
                  "trait",
                  "workflow-step",
                  "workload",
                ],
              },
            },
          ],
        },
        {
          name: "gen-api",
          description: "Generate SDK from X-Definition",
          args: {
            name: "definition",
            description: "DEFINITION.cue",
            template: "filepaths",
          },
          options: [
            {
              name: "--api-dir",
              description:
                "API directory path to put definition API files, relative to output directory. Default value: go: pkg/apis",
              args: { name: "api-dir" },
            },
            {
              name: ["-f", "--file"],
              description:
                "File name of definitions, can be specified multiple times, or use comma to separate multiple files. If directory specified, all files found recursively in the directory will be used",
              isRepeatable: true,
              args: { name: "file", template: "filepaths" },
            },
            {
              name: "--init",
              description:
                "Init the whole SDK project, if not set, only the API file will be generated",
            },
            {
              name: ["-g", "--language"],
              description: "Language to generate code. Valid languages: go",
              args: { name: "language", suggestions: ["go"], default: "go" },
            },
            {
              name: "--language-args",
              description:
                "Language-specific arguments to pass to the go generator. Available options: MainModuleVersion, GoProxy",
              isRepeatable: true,
              args: { name: "language-args" },
            },
            {
              name: ["-o", "--output"],
              description: "Output directory path",
              args: {
                name: "directory",
                template: "folders",
                default: "./apis",
              },
            },
            {
              name: ["-p", "--package"],
              description: "Package name of generated code",
              args: {
                name: "package",
                default: "github.com/kubevela/vela-go-sdk",
              },
            },
            {
              name: "--submodule",
              description:
                "Whether the generated code is a submodule of the project. If set, the directory specified by api-dir will be treated as a submodule of the project",
            },
            {
              name: ["-t", "--template"],
              description:
                "Template file path, if not specified, the default template will be used",
              args: { name: "file", template: "filepaths" },
            },
            { name: ["-v", "--verbose"], description: "Print verbose logs" },
          ],
        },
        {
          name: "gen-cue",
          description: "Generate CUE schema from Go code",
          args: {
            name: "source",
            description: "SOURCE.go",
            template: "filepaths",
          },
          options: [
            {
              name: "--nullable",
              description: "Whether to generate null enum for pointer type",
            },
            {
              name: ["-t", "--type"],
              description:
                "Type of the definition to generate. Valid types: [provider]",
              args: { name: "type", suggestions: ["provider"] },
            },
            {
              name: "--types",
              description:
                "Special types to generate, format: <package+struct>=[any|ellipsis]. e.g. --types=*k8s.io/apimachinery/pkg/apis/meta/v1/unstructured.Unstructured=ellipsis",
              isRepeatable: true,
              args: { name: "key=value" },
            },
          ],
        },
        {
          name: "gen-doc",
          description:
            "Generate documentation for non component, trait, policy and workflow definitions",
          args: {
            name: "source",
            description: "SOURCE.cue",
            isVariadic: true,
            template: "filepaths",
          },
          options: [
            {
              name: ["-t", "--type"],
              description:
                "Type of the definition to generate. Valid types: [provider]",
              args: { name: "type", suggestions: ["provider"] },
            },
          ],
        },
        {
          name: "gen-module",
          description: "Generate CUE code from Go definitions in a module",
          args: {
            name: "module",
            description:
              "Local path or Go module (e.g. github.com/org/defs@v1.0.0)",
            template: "folders",
          },
          options: [
            {
              name: ["-o", "--output"],
              description: "Output directory for generated CUE files",
              args: {
                name: "directory",
                template: "folders",
                default: "cue-generated",
              },
            },
            {
              name: ["-t", "--types"],
              description:
                "Comma-separated list of definition types to generate (component,trait,policy,workflow-step)",
              args: { name: "types" },
            },
            {
              name: ["-v", "--version"],
              description: "Version of the module (for remote modules)",
              args: { name: "version" },
            },
          ],
        },
        {
          name: "get",
          description: "Get definition",
          args: { name: "name" },
          options: [
            definitionNamespaceOption,
            {
              name: ["-r", "--revision"],
              description: "Get the specified version of a definition",
              args: { name: "revision" },
            },
            {
              name: "--revisions",
              description: "List revisions of the specified definition",
            },
            {
              name: ["-t", "--type"],
              description:
                "Specify which definition type to get. If empty, all types will be searched. Valid types: component, policy, trait, workflow-step, workload",
              args: {
                name: "type",
                suggestions: [
                  "component",
                  "policy",
                  "trait",
                  "workflow-step",
                  "workload",
                ],
              },
            },
          ],
        },
        {
          name: "init",
          description: "Init a new definition",
          args: { name: "definition-name" },
          options: [
            {
              name: ["-a", "--alias"],
              description: "Specify the alias of the new definition",
              args: { name: "alias" },
            },
            {
              name: ["-d", "--desc"],
              description: "Specify the description of the new definition",
              args: { name: "desc" },
            },
            {
              name: "--git",
              description:
                "Specify which git repository the configuration(HCL) is stored in. Valid when --provider/-p is set",
              args: { name: "git" },
            },
            {
              name: ["-i", "--interactive"],
              description:
                "Specify whether use interactive process to help generate definitions",
            },
            {
              name: ["-l", "--lang"],
              description:
                "Specify the language of the definition. Valid options: cue, go",
              args: {
                name: "lang",
                suggestions: ["cue", "go"],
                default: "cue",
              },
            },
            {
              name: "--local",
              description:
                "Specify the local path of the configuration(HCL) file. Valid when --provider/-p is set",
              args: { name: "local", template: "filepaths" },
            },
            {
              name: ["-o", "--output"],
              description:
                "Specify the output path of the generated definition. If empty, the definition will be printed in the console",
              args: { name: "path", template: "filepaths" },
            },
            {
              name: "--path",
              description:
                "Specify which path the configuration(HCL) is stored in the Git repository. Valid when --git is set",
              args: { name: "path" },
            },
            {
              name: ["-p", "--provider"],
              description:
                "Specify which provider the cloud resource definition belongs to. Only alibaba, aws, azure, gcp, baidu, tencent, elastic, ucloud, vsphere are supported",
              args: {
                name: "provider",
                suggestions: [
                  "alibaba",
                  "aws",
                  "azure",
                  "gcp",
                  "baidu",
                  "tencent",
                  "elastic",
                  "ucloud",
                  "vsphere",
                ],
              },
            },
            {
              name: ["-f", "--template-yaml"],
              description:
                "Specify the template yaml file that definition will use to build the schema. If empty, a default template for the given definition type will be used",
              args: { name: "template-yaml", template: "filepaths" },
            },
            {
              name: ["-t", "--type"],
              description:
                "Specify the type of the new definition. Valid types: component, policy, trait, workflow-step, workload",
              args: {
                name: "type",
                suggestions: [
                  "component",
                  "policy",
                  "trait",
                  "workflow-step",
                  "workload",
                ],
              },
            },
          ],
        },
        {
          name: "init-module",
          description: "Initialize a new definition module",
          args: { name: "directory", isOptional: true, template: "folders" },
          options: [
            {
              name: "--components",
              description:
                "Comma-separated component names to scaffold (e.g., webservice,worker)",
              args: { name: "components" },
            },
            {
              name: ["-d", "--desc"],
              description: "Description of the module",
              args: { name: "desc" },
            },
            {
              name: ["-g", "--go-module"],
              description: "Go module path (e.g., github.com/myorg/my-defs)",
              args: { name: "go-module" },
            },
            {
              name: ["-n", "--name"],
              description: "Name for the module (defaults to directory name)",
              args: { name: "name" },
            },
            {
              name: "--policies",
              description:
                "Comma-separated policy names to scaffold (e.g., topology,override)",
              args: { name: "policies" },
            },
            {
              name: "--traits",
              description:
                "Comma-separated trait names to scaffold (e.g., autoscaler,ingress)",
              args: { name: "traits" },
            },
            {
              name: ["-e", "--with-examples"],
              description: "Include example definitions",
            },
            {
              name: "--workflowsteps",
              description:
                "Comma-separated workflow step names to scaffold (e.g., deploy,notify)",
              args: { name: "workflowsteps" },
            },
          ],
        },
        {
          name: "list",
          description: "List definitions",
          options: [
            {
              name: "--from",
              description: "Filter definitions by which addon installed them",
              args: { name: "from" },
            },
            definitionNamespaceOption,
            {
              name: ["-t", "--type"],
              description:
                "Specify which definition type to list. If empty, all types will be searched. Valid types: component, policy, trait, workflow-step, workload",
              args: {
                name: "type",
                suggestions: [
                  "component",
                  "policy",
                  "trait",
                  "workflow-step",
                  "workload",
                ],
              },
            },
          ],
        },
        {
          name: "list-module",
          description: "List all definitions in a Go module",
          args: {
            name: "module",
            description:
              "Local path or Go module (e.g. github.com/org/defs@v1.0.0)",
            template: "folders",
          },
          options: [
            {
              name: ["-t", "--types"],
              description: "Comma-separated list of definition types to list",
              args: { name: "types" },
            },
            {
              name: ["-v", "--version"],
              description: "Version of the module (for remote modules)",
              args: { name: "version" },
            },
          ],
        },
        {
          name: "render",
          description: "Render X-Definition",
          args: {
            name: "definition",
            description: "DEFINITION.cue or DEFINITION.go file, or a directory",
            template: "filepaths",
          },
          options: [
            {
              name: ["-f", "--format"],
              description:
                "Specify the output format: 'yaml' (default) for Kubernetes YAML, or 'cue' for raw CUE template output",
              args: {
                name: "format",
                suggestions: ["yaml", "cue"],
                default: "yaml",
              },
            },
            {
              name: "--message",
              description:
                "Specify the header message of the generated file. For example, declaring author information",
              args: { name: "message" },
            },
            {
              name: ["-o", "--output"],
              description:
                "Specify the output path of the rendered definition. If empty, the definition will be printed in the console. If input is a directory, the output path is expected to be a directory as well",
              args: { name: "path", template: "filepaths" },
            },
          ],
        },
        {
          name: "show",
          description:
            "Show the reference doc for a component, trait, policy or workflow",
          args: {
            name: "name",
            description:
              "Definition name, or a local CUE definition or Cloud Resource definition YAML file",
            isOptional: true,
            template: "filepaths",
          },
          options: [
            envOption,
            {
              name: "--format",
              description:
                "Specify format of output data, by default it's a pretty human readable format, you can specify markdown(md)",
              args: { name: "format", suggestions: ["md", "markdown"] },
            },
            {
              name: "--i18n",
              description:
                "Specify the location for of the doc generated from definition, now supported options 'zh', 'en'",
              args: {
                name: "i18n",
                default: "https://kubevela.io/reference-i18n.json",
              },
            },
            {
              name: ["-l", "--location"],
              description:
                "Specify the location for of the doc generated from definition, now supported options 'zh', 'en'",
              args: { name: "location", suggestions: ["zh", "en"] },
            },
            namespaceOption,
            {
              name: ["-p", "--path"],
              description:
                "Specify the path for of the doc generated from definition",
              args: { name: "directory", template: "folders" },
            },
            {
              name: ["-r", "--revision"],
              description:
                "Get the specified revision of a definition. Use def get to list revisions",
              args: { name: "revision" },
            },
            { name: "--web", description: "Start web doc site" },
          ],
        },
        {
          name: "upgrade",
          description: "Upgrade CUE definition for version compatibility",
          args: { name: "definition-file", template: "filepaths" },
          options: [
            {
              name: "--enable-all",
              description:
                "Enable all upgrade passes for this command invocation",
            },
            {
              name: ["-o", "--output"],
              description:
                "Output file path. If not specified, outputs to stdout",
              args: { name: "file", template: "filepaths" },
            },
            {
              name: ["-q", "--quiet"],
              description:
                "Suppress output in validate mode, only return exit code",
            },
            {
              name: "--target-version",
              description:
                "Target KubeVela version (e.g., --target-version=v1.11). If not specified, uses current CLI version",
              args: { name: "target-version" },
            },
            {
              name: "--validate",
              description:
                "Validate if definition needs upgrading without making changes (exit code 1 if upgrade required)",
            },
          ],
        },
        {
          name: "validate-module",
          description: "Validate all definitions in a Go module",
          args: {
            name: "module",
            description:
              "Local path or Go module (e.g. github.com/org/defs@v1.0.0)",
            template: "folders",
          },
          options: [
            {
              name: ["-v", "--version"],
              description: "Version of the module (for remote modules)",
              args: { name: "version" },
            },
          ],
        },
        {
          name: "vet",
          description: "Validate X-Definition",
          args: {
            name: "definition",
            description: "DEFINITION.cue or DEFINITION.go file",
            isVariadic: true,
            template: "filepaths",
          },
        },
      ],
    },
    {
      name: "install",
      description:
        "Installs or Upgrades Kubevela control plane on a Kubernetes cluster",
      options: [
        {
          name: ["-d", "--detail"],
          description: "Show detail log of installation",
        },
        {
          name: ["-f", "--file"],
          description: "Custom the chart path of KubeVela control plane",
          args: { name: "file", template: "filepaths" },
        },
        {
          name: ["-n", "--namespace"],
          description: "Namespace scope for installing KubeVela Core",
          args: { name: "namespace", default: "vela-system" },
        },
        {
          name: ["-r", "--reuse"],
          description: "Will re-use the user's last supplied values",
        },
        {
          name: "--set",
          description:
            "Set values on the command line (can specify multiple or separate values with commas: key1=val1,key2=val2)",
          isRepeatable: true,
          args: { name: "key=value" },
        },
        {
          name: ["-v", "--version"],
          description: "Version of the KubeVela control plane to install",
          args: { name: "version" },
        },
      ],
    },
    {
      name: "uninstall",
      description: "Uninstalls KubeVela from a Kubernetes cluster",
      options: [
        {
          name: ["-d", "--detail"],
          description: "Show detail log of installation",
        },
        {
          name: ["-f", "--force"],
          description: "Force uninstall whole vela include all addons",
        },
        {
          name: ["-n", "--namespace"],
          description: "Namespace scope for installing KubeVela Core",
          args: { name: "namespace", default: "vela-system" },
        },
      ],
    },
    {
      name: "system",
      description: "Manage system",
      subcommands: [
        {
          name: "diagnose",
          description: "Diagnoses system problems",
        },
        {
          name: "info",
          description:
            "Print the system deployment detail information in all namespaces with label app.kubernetes.io/name=vela-core",
          options: [
            {
              name: ["-o", "--output"],
              description: "Specifies the output format. One of: (wide | yaml)",
              args: { name: "format", suggestions: ["wide", "yaml"] },
            },
            {
              name: ["-s", "--specify"],
              description:
                "Specify the name of the deployment to check detail information. If empty, it will print all deployments information. Default to be empty",
              args: { name: "specify" },
            },
          ],
        },
      ],
    },
    {
      name: "version",
      description: "Prints vela build version information",
      subcommands: [
        {
          name: "list",
          description: "List all available versions",
          options: [
            {
              name: ["-a", "--all"],
              description:
                "List all available versions, if not, only list newer version",
            },
          ],
        },
      ],
    },
    {
      name: "kube",
      description: "Managing native Kubernetes resources across clusters",
      subcommands: [
        {
          name: "apply",
          description: "Apply resources in Kubernetes YAML file to clusters",
          options: [
            {
              name: ["-c", "--cluster"],
              description:
                "The cluster to apply objects. Setting multiple clusters will apply objects in order",
              isRepeatable: true,
              args: { name: "cluster", default: "local" },
            },
            {
              name: "--dry-run",
              description:
                "Setting this flag will not apply resources in clusters. It will print out the resource to be applied",
            },
            {
              name: ["-f", "--file"],
              description:
                "Files that include native Kubernetes objects to apply",
              isRepeatable: true,
              args: { name: "file", template: "filepaths" },
            },
            {
              name: ["-n", "--namespace"],
              description:
                "The namespace to apply objects. If empty, the namespace declared in the YAML will be used",
              args: { name: "namespace" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete resources in clusters",
          args: [{ name: "kind" }, { name: "name", isOptional: true }],
          options: [
            {
              name: "--all",
              description:
                "Setting this flag will delete all this kind of resources",
            },
            {
              name: ["-c", "--cluster"],
              description:
                "The cluster to delete objects. Setting multiple clusters will delete objects in order",
              isRepeatable: true,
              args: { name: "cluster", default: "local" },
            },
            {
              name: ["-g", "--group"],
              description:
                "The resource group (e.g. apps) of the resource kind",
              args: { name: "group" },
            },
            {
              name: ["-n", "--namespace"],
              description:
                "The namespace to delete objects. If empty, the default namespace will be used",
              args: { name: "namespace" },
            },
          ],
        },
      ],
    },
    {
      name: "cuex",
      description: "Manage CueX engine for compile",
      subcommands: [
        {
          name: "eval",
          description: "Eval cue file with CueX engine",
          options: [
            {
              name: ["-f", "--file"],
              description: "File for eval",
              args: { name: "file", template: "filepaths" },
            },
            {
              name: ["-o", "--format"],
              description: "Format of the output",
              args: {
                name: "format",
                suggestions: ["json", "yaml", "cue"],
                default: "cue",
              },
            },
            {
              name: ["-p", "--path"],
              description: "Path for eval",
              args: { name: "path" },
            },
          ],
        },
      ],
    },
    {
      name: "ql",
      description: "Show result of executing velaQL",
      subcommands: [
        {
          name: "apply",
          description: "Create and store a VelaQL view",
          args: { name: "view-name", isOptional: true },
          options: [
            {
              name: ["-f", "--file"],
              description:
                "CUE file that stores the view, can be local path, URL, or stdin (-)",
              args: { name: "file", template: "filepaths" },
            },
          ],
        },
      ],
      options: [
        {
          name: ["-f", "--file"],
          description: "The CUE file path for VelaQL, it could be a remote url",
          args: { name: "file", template: "filepaths" },
        },
        {
          name: ["-q", "--query"],
          description: "The query statement for VelaQL",
          args: { name: "query" },
        },
      ],
    },
    {
      name: "completion",
      description:
        "Output shell completion code for the specified shell (bash or zsh)",
      subcommands: [
        {
          name: "bash",
          description: "Generate autocompletions script for bash",
        },
        {
          name: "zsh",
          description: "Generate autocompletions script for zsh",
        },
      ],
    },
    {
      name: "help",
      description: "Help about any command",
      args: { name: "command", isOptional: true },
    },
    {
      name: "workloads",
      description: "List workloads",
      hidden: true,
      options: [envOption, namespaceOption],
    },
    {
      name: "export",
      description: "Export deploy manifests from appfile",
      options: [
        envOption,
        {
          name: ["-f", "--file"],
          description: "Specify file path for appfile",
          args: { name: "file", template: "filepaths" },
        },
        namespaceOption,
      ],
    },
    {
      name: "registry",
      description: "Manage Registry",
      subcommands: [
        {
          name: "config",
          description:
            "Configure (add if not exist) a registry, default is local (built-in capabilities)",
          args: [{ name: "registry-name" }, { name: "center-url" }],
          options: [
            {
              name: ["-t", "--token"],
              description: "Github Repo token",
              args: { name: "token" },
            },
          ],
        },
        {
          name: ["ls", "list"],
          description: "List all registry",
        },
        {
          name: ["remove", "rm"],
          description: "Remove specified registry",
          args: { name: "center-name" },
        },
      ],
    },
    {
      name: "provider",
      description: "Authenticate terraform cloud providers",
      subcommands: [
        {
          name: "add",
          description:
            'Add a Terraform cloud provider (use "vela config create" instead)',
          deprecated: true,
        },
        {
          name: ["delete", "rm", "del"],
          description:
            'Delete a Terraform cloud provider (use "vela config delete" instead)',
          deprecated: true,
        },
        {
          name: ["list", "ls"],
          description: "List Terraform Cloud Providers",
        },
      ],
    },
  ],
  options: [
    {
      name: ["--help", "-h"],
      description: "Help for vela",
      isPersistent: true,
    },
    {
      name: ["--verbosity", "-V"],
      description: "Number for the log level verbosity",
      isPersistent: true,
      args: { name: "level" },
    },
    {
      name: ["--yes", "-y"],
      description: "Assume yes for all user prompts",
      isPersistent: true,
    },
  ],
};

export default completionSpec;
