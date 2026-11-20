// Argo Workflows v4.1.6 (latest stable git tag and Homebrew formula, verified
// 2026-11-20). Source: docs/cli/*.md at tag v4.1.6 of argoproj/argo-workflows,
// cross-checked against the cobra definitions in cmd/argo/commands (same
// commands and flags; required flags taken from the Go source, output enums
// from the generated docs)

const sharedArgs = {
  WORKFLOW: {
    name: "WORKFLOW",
    description: "Workflow name or UID",
  },
};

const files: Fig.Arg = {
  name: "FILE",
  isVariadic: true,
  template: "filepaths",
};

const nameOrUidOptions: Fig.Option[] = [
  {
    name: "--name",
    description: "Force the argument to be treated as a name",
    exclusiveOn: ["--uid"],
  },
  {
    name: "--uid",
    description: "Force the argument to be treated as a UID",
    exclusiveOn: ["--name"],
  },
];

const outputOption = (
  formats: string[],
  description = `Output format. One of: ${formats.join("|")}`
): Fig.Option => ({
  name: ["--output", "-o"],
  description,
  args: { name: "string", suggestions: formats },
});

const cronWorkflowOptions = (withSchedule: boolean): Fig.Option[] => [
  {
    name: "--entrypoint",
    description: "Override entrypoint",
    args: { name: "string" },
  },
  {
    name: "--generate-name",
    description: "Override metadata.generateName",
    args: { name: "string" },
  },
  {
    name: ["--labels", "-l"],
    description:
      "Comma separated labels to apply to the workflow. Will override previous values",
    args: { name: "string" },
  },
  {
    name: "--name",
    description: "Override metadata.name",
    args: { name: "string" },
  },
  outputOption(["name", "json", "yaml", "wide"]),
  {
    name: ["--parameter", "-p"],
    description: "Pass an input parameter",
    isRepeatable: true,
    args: { name: "stringArray" },
  },
  {
    name: ["--parameter-file", "-f"],
    description: "Pass a file containing all input parameters",
    args: { name: "string", template: "filepaths" },
  },
  ...(withSchedule
    ? [
        {
          name: "--schedule",
          description: "Override cron workflow schedule",
          args: { name: "string" },
        },
      ]
    : []),
  {
    name: "--serviceaccount",
    description: "Run all pods in the workflow using specified serviceaccount",
    args: { name: "string" },
  },
  {
    name: "--strict",
    description: "Perform strict workflow validation (default true)",
  },
];

const templateUpdate = (kind: string): Fig.Subcommand => ({
  name: "update",
  description: `Update a ${kind}`,
  args: files,
  options: [
    outputOption(["name", "json", "yaml", "wide"]),
    {
      name: "--strict",
      description: "Perform strict workflow validation (default true)",
    },
  ],
});

const syncLimitOptions: Fig.Option[] = [
  {
    name: "--cm-name",
    description: "ConfigMap name (required if type is configmap)",
    args: { name: "string" },
  },
  {
    name: "--type",
    description: "Type of sync limit (database or configmap)",
    isRequired: true,
    args: { name: "string", suggestions: ["database", "configmap"] },
  },
];

let globalOptions: Fig.Option[] = [
  {
    name: "--argo-base-href",
    description:
      "Path to use with HTTP client due to Base HREF. Defaults to the ARGO_BASE_HREF environment variable",
    args: {
      name: "string",
    },
  },
  {
    name: "--argo-http1",
    description:
      "If true, use the HTTP client. Defaults to the ARGO_HTTP1 environment variable",
  },
  {
    name: ["--argo-server", "-s"],
    description:
      "API server host:port. e.g. localhost:2746. Defaults to the ARGO_SERVER environment variable",
    args: {
      name: "host:port",
    },
  },
  {
    name: "--as",
    description: "Username to impersonate for the operation",
    args: {
      name: "string",
    },
  },
  {
    name: "--as-group",
    description:
      "Group to impersonate for the operation, this flag can be repeated to specify multiple groups",
    isRepeatable: true,
    args: {
      name: "stringArray",
    },
  },
  {
    name: "--as-uid",
    description: "UID to impersonate for the operation",
    args: {
      name: "string",
    },
  },
  {
    name: "--certificate-authority",
    description: "Path to a cert file for the certificate authority",
    args: {
      name: "string",
    },
  },
  {
    name: "--client-certificate",
    description: "Path to a client certificate file for TLS",
    args: {
      name: "string",
    },
  },
  {
    name: "--client-key",
    description: "Path to a client key file for TLS",
    args: {
      name: "string",
    },
  },
  {
    name: "--cluster",
    description: "The name of the kubeconfig cluster to use",
    args: {
      name: "string",
    },
  },
  {
    name: "--context",
    description: "The name of the kubeconfig context to use",
    args: {
      name: "string",
    },
  },
  {
    name: "--disable-compression",
    description:
      "If true, opt-out of response compression for all requests to the server",
  },
  {
    name: "--gloglevel",
    description: "Set the glog logging level",
    args: {
      name: "int",
    },
  },
  {
    name: ["--header", "-H"],
    description:
      "Sets additional header to all requests made by Argo CLI (repeatable or comma separated). Used only when either ARGO_HTTP1 or --argo-http1 is set to true",
    isRepeatable: true,
    args: {
      name: "strings",
    },
  },
  {
    name: ["--help", "-h"],
    description: "Help for argo",
  },
  {
    name: "--insecure-skip-tls-verify",
    description:
      "If true, the server's certificate will not be checked for validity. This will make your HTTPS connections insecure",
  },
  {
    name: ["--insecure-skip-verify", "-k"],
    description:
      "If true, the Argo Server's certificate will not be checked for validity. This will make your HTTPS connections insecure. Defaults to the ARGO_INSECURE_SKIP_VERIFY environment variable",
  },
  {
    name: "--instanceid",
    description:
      "Submit with a specific controller's instance id label. Default to the ARGO_INSTANCEID environment variable",
    args: {
      name: "string",
    },
  },
  {
    name: "--kubeconfig",
    description: "Path to a kube config. Only required if out-of-cluster",
    args: {
      name: "string",
    },
  },
  {
    name: "--log-format",
    description:
      'The formatter to use for logs. One of: text|json (default "text")',
    args: {
      name: "string",
      suggestions: ["text", "json"],
    },
  },
  {
    name: "--loglevel",
    description:
      'Set the logging level. One of: debug|info|warn|error (default "info")',
    args: {
      name: "string",
      suggestions: ["debug", "info", "warn", "error"],
    },
  },
  {
    name: ["--namespace", "-n"],
    description: "If present, the namespace scope for this CLI request",
    args: {
      name: "string",
    },
  },
  {
    name: "--password",
    description: "Password for basic authentication to the API server",
    args: {
      name: "string",
    },
  },
  {
    name: "--proxy-url",
    description: "If provided, this URL will be used to connect via proxy",
    args: {
      name: "string",
    },
  },
  {
    name: "--request-timeout",
    description:
      'The length of time to wait before giving up on a single server request. Non-zero values should contain a corresponding time unit (e.g. 1s, 2m, 3h). A value of zero means don\'t timeout requests (default "0")',
    args: {
      name: "string",
    },
  },
  {
    name: ["--secure", "-e"],
    description:
      "Whether or not the server is using TLS with the Argo Server. Defaults to the ARGO_SECURE environment variable (default true)",
  },
  {
    name: "--server",
    description: "The address and port of the Kubernetes API server",
    args: {
      name: "string",
    },
  },
  {
    name: "--tls-server-name",
    description:
      "If provided, this name will be used to validate server certificate. If this is not provided, hostname used to contact the server is used",
    args: {
      name: "string",
    },
  },
  {
    name: "--token",
    description: "Bearer token for authentication to the API server",
    args: {
      name: "string",
    },
  },
  {
    name: "--user",
    description: "The name of the kubeconfig user to use",
    args: {
      name: "string",
    },
  },
  {
    name: "--username",
    description: "Username for basic authentication to the API server",
    args: {
      name: "string",
    },
  },
  {
    name: ["--verbose", "-v"],
    description: "Enabled verbose logging, i.e. --loglevel debug",
  },
];

globalOptions = globalOptions.map((option) => ({
  isPersistent: true,
  ...option,
}));

const completionSpec: Fig.Spec = {
  name: "argo",
  description: "Argo Workflows command line interface",
  subcommands: [
    {
      name: "archive",
      description: "Manage the workflow archive",
      subcommands: [
        {
          name: "delete",
          description: "Delete a workflow in the archive",
          args: { ...sharedArgs.WORKFLOW, isVariadic: true },
          options: nameOrUidOptions,
        },
        {
          name: "get",
          description: "Get a workflow in the archive",
          args: sharedArgs.WORKFLOW,
          options: [
            ...nameOrUidOptions,
            outputOption(
              ["json", "yaml", "wide"],
              'Output format. One of: json|yaml|wide (default "wide")'
            ),
          ],
        },
        {
          name: "list",
          description: "List workflows in the archive",
          options: [
            {
              name: "--chunk-size",
              description:
                "Return large lists in chunks rather than all at once. Pass 0 to disable",
              args: {
                name: "int",
              },
            },
            {
              name: ["--help", "-h"],
              description: "Help for list",
            },
            outputOption(
              ["name", "json", "yaml", "wide"],
              'Output format. One of: name|json|yaml|wide (default "wide")'
            ),
            {
              name: ["--selector", "-l"],
              description:
                "Selector (label query) to filter on, not including uninitialized ones, supports '=', '==', and '!='.(e.g. -l key1=value1,key2=value2)",
              args: {
                name: "string",
              },
            },
          ],
        },
        {
          name: "list-label-keys",
          description: "List workflows label keys in the archive",
        },
        {
          name: "list-label-values",
          description: "Get workflow label values in the archive",
          options: [
            {
              name: ["--help", "-h"],
              description: "Help for list-label-values",
            },
            {
              name: ["--selector", "-l"],
              description:
                "Selector (label query) to query on, allows 1 value (e.g. -l key1)",
              isRequired: true,
              args: {
                name: "string",
              },
            },
          ],
        },
        {
          name: "resubmit",
          description: "Resubmit one or more workflows",
          args: { ...sharedArgs.WORKFLOW, isVariadic: true, isOptional: true },
          options: [
            ...nameOrUidOptions,
            {
              name: "--field-selector",
              description:
                "Selector (field query) to filter on, supports '=', '==', and '!='.(e.g. --field-selector key1=value1,key2=value2). The server only supports a limited number of field queries per type",
              args: {
                name: "string",
              },
            },
            {
              name: ["--help", "-h"],
              description: "Help for resubmit",
            },
            {
              name: "--log",
              description: "Log the workflow until it completes",
            },
            {
              name: "--memoized",
              description:
                "Re-use successful steps & outputs from the previous run",
            },
            outputOption(["name", "json", "yaml", "wide"]),
            {
              name: ["--parameter", "-p"],
              description:
                "Input parameter to override on the original workflow spec",
              isRepeatable: true,
              args: {
                name: "stringArray",
              },
            },
            {
              name: "--priority",
              description: "Workflow priority",
              args: {
                name: "int32",
              },
            },
            {
              name: ["--selector", "-l"],
              description:
                "Selector (label query) to filter on, not including uninitialized ones, supports '=', '==', and '!='.(e.g. -l key1=value1,key2=value2)",
              args: {
                name: "string",
              },
            },
            {
              name: ["--wait", "-w"],
              description:
                "Wait for the workflow to complete, only works when a single workflow is resubmitted",
            },
            {
              name: "--watch",
              description:
                "Watch the workflow until it completes, only works when a single workflow is resubmitted",
            },
          ],
        },
        {
          name: "retry",
          description: "Retry zero or more workflows",
          args: { ...sharedArgs.WORKFLOW, isVariadic: true, isOptional: true },
          options: [
            ...nameOrUidOptions,
            {
              name: "--field-selector",
              description:
                "Selector (field query) to filter on, supports '=', '==', and '!='.(e.g. --field-selector key1=value1,key2=value2). The server only supports a limited number of field queries per type",
              args: {
                name: "string",
              },
            },
            {
              name: ["--help", "-h"],
              description: "Help for retry",
            },
            {
              name: "--log",
              description: "Log the workflow until it completes",
            },
            {
              name: "--node-field-selector",
              description:
                "Selector of nodes to reset, eg: --node-field-selector inputs.parameters.myparam.value=abc",
              args: {
                name: "string",
              },
            },
            outputOption(["name", "json", "yaml", "wide"]),
            {
              name: ["--parameter", "-p"],
              description:
                "Input parameter to override on the original workflow spec",
              isRepeatable: true,
              args: {
                name: "stringArray",
              },
            },
            {
              name: "--restart-successful",
              description:
                "Indicates to restart successful nodes matching the --node-field-selector",
            },
            {
              name: ["--selector", "-l"],
              description:
                "Selector (label query) to filter on, not including uninitialized ones, supports '=', '==', and '!='.(e.g. -l key1=value1,key2=value2)",
              args: {
                name: "string",
              },
            },
            {
              name: ["--wait", "-w"],
              description:
                "Wait for the workflow to complete, only works when a single workflow is retried",
            },
            {
              name: "--watch",
              description:
                "Watch the workflow until it completes, only works when a single workflow is retried",
            },
          ],
        },
      ],
    },
    {
      name: "auth",
      description: "Manage authentication settings",
      subcommands: [
        {
          name: "token",
          description: "Print the auth token",
        },
      ],
    },
    {
      name: ["cluster-template", "cwftmpl", "cwft"],
      description: "Manipulate cluster workflow templates",
      subcommands: [
        {
          name: "create",
          description: "Create a cluster workflow template",
          args: files,
          options: [
            {
              name: ["--help", "-h"],
              description: "Help for create",
            },
            outputOption(["name", "json", "yaml", "wide"]),
            {
              name: "--strict",
              description: "Perform strict workflow validation (default true)",
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a cluster workflow template",
          args: {
            name: "WORKFLOW_TEMPLATE",
          },
          options: [
            {
              name: "--all",
              description: "Delete all cluster workflow templates",
            },
            {
              name: ["--help", "-h"],
              description: "Help for delete",
            },
          ],
        },
        {
          name: "get",
          description: "Display details about a cluster workflow template",
          args: {
            name: "WORKFLOW_TEMPLATE",
            isVariadic: true,
          },
          options: [
            {
              name: ["--help", "-h"],
              description: "Help for get",
            },
            outputOption(["name", "json", "yaml", "wide"]),
          ],
        },
        {
          name: "lint",
          description:
            "Validate files or directories of cluster workflow template manifests",
          args: files,
          options: [
            {
              name: ["--help", "-h"],
              description: "Help for lint",
            },
            outputOption(
              ["pretty", "simple"],
              'Linting results output format. One of: pretty|simple (default "pretty")'
            ),
            {
              name: "--strict",
              description: "Perform strict workflow validation (default true)",
            },
          ],
        },
        {
          name: "list",
          description: "List cluster workflow templates",
          options: [
            {
              name: ["--help", "-h"],
              description: "Help for list",
            },
            outputOption(["wide", "name"]),
          ],
        },
        templateUpdate("cluster workflow template"),
      ],
    },
    {
      name: "completion",
      description:
        "Output shell completion code for the specified shell (bash, zsh or fish)",
      args: { name: "SHELL", suggestions: ["bash", "zsh", "fish"] },
      options: [
        {
          name: ["--help", "-h"],
          description: "Help for completion",
        },
      ],
    },
    {
      name: "convert",
      description:
        "Convert workflow manifests from legacy format to current format",
      args: files,
      options: [
        {
          name: "--no-color",
          description: "Disable colorized output",
        },
        outputOption(
          ["yaml", "json"],
          'Output format. One of: yaml|json (default "yaml")'
        ),
      ],
    },
    {
      name: "cp",
      description: "Copy artifacts from workflow",
      args: [{ name: "my-wf" }, { name: "output-directory" }],
      options: [
        {
          name: "--artifact-name",
          description: "Name of output artifact in workflow",
          args: {
            name: "string",
          },
        },
        {
          name: ["--help", "-h"],
          description: "Help for cp",
        },
        {
          name: "--node-id",
          description: "Id of node in workflow",
          args: {
            name: "string",
          },
        },
        {
          name: "--path",
          description:
            'Use variables {workflowName}, {nodeId}, {templateName}, {artifactName}, and {namespace} to create a customized path to store the artifacts; example: {workflowName}/{templateName}/{artifactName} (default "{namespace}/{workflowName}/{nodeId}/outputs/{artifactName}")',
          args: {
            name: "string",
          },
        },
        {
          name: "--template-name",
          description: "Name of template in workflow",
          args: {
            name: "string",
          },
        },
      ],
    },
    {
      name: "cron",
      description: "Manage cron workflows",
      options: [
        {
          name: ["--help", "-h"],
          description: "Help for cron",
        },
      ],
      subcommands: [
        {
          name: "backfill",
          description: "Create a cron backfill (alpha)",
          args: { name: "CRON_WORKFLOW" },
          options: [
            {
              name: "--argname",
              description:
                'Schedule time argument name for workflow (default "cronScheduleTime")',
              args: { name: "string" },
            },
            {
              name: "--end",
              description: "End Date",
              args: { name: "string" },
            },
            {
              name: "--format",
              description:
                'Date format for Schedule time value (default "Mon, 02 Jan 2006 15:04:05 MST")',
              args: { name: "string" },
            },
            {
              name: "--maxworkflowcount",
              description:
                "Maximum number of generated backfill workflows (default 1000)",
              args: { name: "int" },
            },
            {
              name: "--name",
              description: "Backfill name",
              args: { name: "string" },
            },
            {
              name: "--parallel",
              description: "Run all backfill workflows in parallel",
            },
            {
              name: "--start",
              description: "Start date",
              args: { name: "string" },
            },
          ],
        },
        {
          name: "create",
          description: "Create a cron workflow",
          args: files,
          options: cronWorkflowOptions(true),
        },
        {
          name: "delete",
          description: "Delete a cron workflow",
          args: {
            name: "CRON_WORKFLOW",
            isVariadic: true,
            isOptional: true,
          },
          options: [
            {
              name: "--all",
              description: "Delete all cron workflows",
            },
            {
              name: ["--help", "-h"],
              description: "Help for delete",
            },
          ],
        },
        {
          name: "get",
          description: "Display details about a cron workflow",
          args: {
            name: "CRON_WORKFLOW",
            isVariadic: true,
          },
          options: [
            {
              name: ["--help", "-h"],
              description: "Help for get",
            },
            outputOption(["name", "json", "yaml", "wide"]),
          ],
        },
        {
          name: "lint",
          description:
            "Validate files or directories of cron workflow manifests",
          args: files,
          options: [
            {
              name: ["--help", "-h"],
              description: "Help for lint",
            },
            outputOption(
              ["pretty", "simple"],
              'Linting results output format. One of: pretty|simple (default "pretty")'
            ),
            {
              name: "--strict",
              description: "Perform strict validation (default true)",
            },
          ],
        },
        {
          name: "list",
          description: "List cron workflows",
          options: [
            {
              name: ["--all-namespaces", "-A"],
              description: "Show workflows from all namespaces",
            },
            {
              name: ["--help", "-h"],
              description: "Help for list",
            },
            outputOption(["wide", "name"]),
            {
              name: ["--selector", "-l"],
              description:
                "Selector (label query) to filter on, supports '=', '==', and '!='.(e.g. -l key1=value1,key2=value2). Matching objects must satisfy all of the specified label constraints",
              args: {
                name: "string",
              },
            },
          ],
        },
        {
          name: "resume",
          description: "Resume zero or more cron workflows",
          args: {
            name: "CRON_WORKFLOW",
            isVariadic: true,
            isOptional: true,
          },
        },
        {
          name: "suspend",
          description: "Suspend zero or more cron workflows",
          args: {
            name: "CRON_WORKFLOW",
            isVariadic: true,
          },
        },
        {
          name: "update",
          description: "Update a cron workflow",
          args: files,
          options: cronWorkflowOptions(false),
        },
      ],
    },
    {
      name: "delete",
      description: "Delete workflows",
      args: { name: "WORKFLOW", isVariadic: true, isOptional: true },
      options: [
        {
          name: "--all",
          description: "Delete all workflows",
        },
        {
          name: ["--all-namespaces", "-A"],
          description: "Delete workflows from all namespaces",
        },
        {
          name: "--completed",
          description: "Delete completed workflows",
        },
        {
          name: "--dry-run",
          description:
            "Do not delete the workflow, only print what would happen",
        },
        {
          name: "--field-selector",
          description:
            "Selector (field query) to filter on, supports '=', '==', and '!='.(e.g. --field-selector key1=value1,key2=value2). The server only supports a limited number of field queries per type",
          args: {
            name: "string",
          },
        },
        {
          name: "--force",
          description: "Force delete workflows by removing finalizers",
        },
        {
          name: ["--help", "-h"],
          description: "Help for delete",
        },
        {
          name: "--older",
          description:
            "Delete completed workflows finished before the specified duration (e.g. 10m, 3h, 1d)",
          args: {
            name: "string",
          },
        },
        {
          name: "--prefix",
          description: "Delete workflows by prefix",
          args: {
            name: "string",
          },
        },
        {
          name: "--query-chunk-size",
          description:
            "Run the list query in chunks (deletes will still be executed individually)",
          args: {
            name: "int",
          },
        },
        {
          name: "--resubmitted",
          description: "Delete resubmitted workflows",
        },
        {
          name: ["--selector", "-l"],
          description:
            "Selector (label query) to filter on, not including uninitialized ones, supports '=', '==', and '!='.(e.g. -l key1=value1,key2=value2)",
          args: {
            name: "string",
          },
        },
        {
          name: "--status",
          description: "Delete by status (comma separated)",
          isRepeatable: true,
          args: {
            name: "strings",
          },
        },
      ],
    },
    {
      name: "executor-plugin",
      description: "Manage executor plugins",
      subcommands: [
        {
          name: "build",
          description: "Build an executor plugin",
          args: {
            name: "DIR",
          },
        },
      ],
    },
    {
      name: "get",
      description: "Display details about a workflow",
      args: { name: "WORKFLOW", isVariadic: true },
      options: [
        {
          name: ["--help", "-h"],
          description: "Help for get",
        },
        {
          name: "--no-color",
          description: "Disable colorized output",
        },
        {
          name: "--no-utf8",
          description: "Use plain 7-bits ascii characters",
        },
        {
          name: "--node-field-selector",
          description:
            "Selector of node to display, eg: --node-field-selector phase=abc",
          args: {
            name: "string",
          },
        },
        outputOption(["name", "json", "yaml", "short", "wide"]),
        {
          name: "--status",
          description:
            "Filter by status (Pending, Running, Succeeded, Skipped, Failed, Error)",
          args: {
            name: "string",
          },
        },
      ],
    },
    {
      name: "help",
      description: "Help about any command",
    },
    {
      name: "lint",
      description: "Validate files or directories of manifests",
      args: files,
      options: [
        {
          name: ["--help", "-h"],
          description: "Help for lint",
        },
        {
          name: "--kinds",
          description:
            "Which kinds will be linted. Can be: workflows|workflowtemplates|cronworkflows|clusterworkflowtemplates (default [all])",
          isRepeatable: true,
          args: {
            name: "strings",
          },
        },
        {
          name: "--no-color",
          description: "Disable colorized output",
        },
        {
          name: "--offline",
          description:
            "Perform offline linting. References to other resources are resolved from the provided args",
        },
        outputOption(
          ["pretty", "simple"],
          'Linting results output format. One of: pretty|simple (default "pretty")'
        ),
        {
          name: "--strict",
          description: "Perform strict workflow validation (default true)",
        },
      ],
    },
    {
      name: "list",
      description: "List workflows",
      options: [
        {
          name: ["--all-namespaces", "-A"],
          description: "Show workflows from all namespaces",
        },
        {
          name: "--chunk-size",
          description:
            "Return large lists in chunks rather than all at once. Pass 0 to disable",
          args: {
            name: "int",
          },
        },
        {
          name: "--completed",
          description:
            "Show completed workflows. Mutually exclusive with --running",
        },
        {
          name: "--field-selector",
          description:
            "Selector (field query) to filter on, supports '=', '==', and '!='.(e.g. --field-selector key1=value1,key2=value2). The server only supports a limited number of field queries per type",
          args: {
            name: "string",
          },
        },
        {
          name: ["--help", "-h"],
          description: "Help for list",
        },
        {
          name: "--no-headers",
          description: "Don't print headers (default print headers)",
        },
        {
          name: "--older",
          description:
            "List completed workflows finished before the specified duration (e.g. 10m, 3h, 1d)",
          args: {
            name: "string",
          },
        },
        outputOption(["name", "json", "yaml", "wide"]),
        {
          name: "--prefix",
          description: "Filter workflows by prefix",
          args: {
            name: "string",
          },
        },
        {
          name: "--resubmitted",
          description: "Show resubmitted workflows",
        },
        {
          name: "--running",
          description:
            "Show running workflows. Mutually exclusive with --completed",
        },
        {
          name: ["--selector", "-l"],
          description:
            "Selector (label query) to filter on, not including uninitialized ones, supports '=', '==', and '!='.(e.g. -l key1=value1,key2=value2)",
          args: {
            name: "string",
          },
        },
        {
          name: "--since",
          description:
            "Show only workflows created after than a relative duration",
          args: {
            name: "string",
          },
        },
        {
          name: "--status",
          description: "Filter by status (comma separated)",
          isRepeatable: true,
          args: {
            name: "strings",
          },
        },
      ],
    },
    {
      name: "logs",
      description: "View logs of a pod or workflow",
      args: [
        {
          name: "WORKFLOW",
        },
        {
          name: "POD",
          isOptional: true,
        },
      ],
      options: [
        {
          name: ["--container", "-c"],
          description: 'Print the logs of this container (default "main")',
          args: {
            name: "string",
          },
        },
        {
          name: ["--follow", "-f"],
          description: "Specify if the logs should be streamed",
        },
        {
          name: "--grep",
          description: "Grep for lines",
          args: {
            name: "string",
          },
        },
        {
          name: ["--help", "-h"],
          description: "Help for logs",
        },
        {
          name: "--no-color",
          description: "Disable colorized output",
        },
        {
          name: ["--previous", "-p"],
          description:
            "Specify if the previously terminated container logs should be returned",
        },
        {
          name: ["--selector", "-l"],
          description: "Log selector for some pod",
          args: {
            name: "string",
          },
        },
        {
          name: "--since",
          description:
            "Only return logs newer than a relative duration like 5s, 2m, or 3h. Defaults to all logs. Only one of since-time / since may be used",
          args: {
            name: "duration",
          },
        },
        {
          name: "--since-time",
          description:
            "Only return logs after a specific date (RFC3339). Defaults to all logs. Only one of since-time / since may be used",
          args: {
            name: "string",
          },
        },
        {
          name: "--tail",
          description:
            "If set, the number of lines from the end of the logs to show. If not specified, logs are shown from the creation of the container or sinceSeconds or sinceTime (default -1)",
          args: {
            name: "int",
          },
        },
        {
          name: "--timestamps",
          description: "Include timestamps on each line in the log output",
        },
      ],
    },
    {
      name: "node",
      description: "Perform action on a node in a workflow",
      args: [{ name: "ACTION", suggestions: ["set"] }, { name: "WORKFLOW" }],
      options: [
        {
          name: ["--help", "-h"],
          description: "Help for node",
        },
        {
          name: ["--message", "-m"],
          description:
            'Set the message of a node, eg: --message "Hello, world!"',
          args: {
            name: "string",
          },
        },
        {
          name: "--node-field-selector",
          description:
            "Selector of node to set, eg: --node-field-selector inputs.parameters.myparam.value=abc",
          args: {
            name: "string",
          },
        },
        {
          name: ["--output-parameter", "-p"],
          description:
            'Set a "supplied" output parameter of node, eg: --output-parameter parameter-name="Hello, world!"',
          isRepeatable: true,
          args: {
            name: "stringArray",
          },
        },
        {
          name: "--phase",
          description: "Phase to set the node to, eg: --phase Succeeded",
          args: {
            name: "string",
          },
        },
      ],
    },
    {
      name: "resubmit",
      description: "Resubmit one or more workflows",
      args: { name: "WORKFLOW", isVariadic: true, isOptional: true },
      options: [
        {
          name: "--field-selector",
          description:
            "Selector (field query) to filter on, supports '=', '==', and '!='.(e.g. --field-selector key1=value1,key2=value2). The server only supports a limited number of field queries per type",
          args: {
            name: "string",
          },
        },
        {
          name: ["--help", "-h"],
          description: "Help for resubmit",
        },
        {
          name: "--log",
          description: "Log the workflow until it completes",
        },
        {
          name: "--memoized",
          description:
            "Re-use successful steps & outputs from the previous run",
        },
        outputOption(["name", "json", "yaml", "wide"]),
        {
          name: ["--parameter", "-p"],
          description:
            "Input parameter to override on the original workflow spec",
          isRepeatable: true,
          args: {
            name: "stringArray",
          },
        },
        {
          name: "--priority",
          description: "Workflow priority",
          args: {
            name: "int32",
          },
        },
        {
          name: ["--selector", "-l"],
          description:
            "Selector (label query) to filter on, not including uninitialized ones, supports '=', '==', and '!='.(e.g. -l key1=value1,key2=value2)",
          args: {
            name: "string",
          },
        },
        {
          name: ["--wait", "-w"],
          description:
            "Wait for the workflow to complete - only works when a single workflow is resubmitted",
        },
        {
          name: "--watch",
          description:
            "Watch the workflow until it completes - only works when a single workflow is resubmitted",
        },
      ],
    },
    {
      name: "resume",
      description: "Resume zero or more workflows (opposite of suspend)",
      args: { name: "WORKFLOW", isVariadic: true },
      options: [
        {
          name: ["--help", "-h"],
          description: "Help for resume",
        },
        {
          name: "--node-field-selector",
          description:
            "Selector of node to resume, eg: --node-field-selector inputs.parameters.myparam.value=abc",
          args: { name: "string" },
        },
      ],
    },
    {
      name: "retry",
      description: "Retry zero or more workflows",
      args: { name: "WORKFLOW", isVariadic: true, isOptional: true },
      options: [
        {
          name: "--field-selector",
          description:
            "Selector (field query) to filter on, supports '=', '==', and '!='.(e.g. --field-selector key1=value1,key2=value2). The server only supports a limited number of field queries per type",
          args: {
            name: "string",
          },
        },
        {
          name: ["--help", "-h"],
          description: "Help for retry",
        },
        {
          name: "--log",
          description: "Log the workflow until it completes",
        },
        {
          name: "--node-field-selector",
          description:
            "Selector of nodes to reset, eg: --node-field-selector inputs.parameters.myparam.value=abc",
          args: {
            name: "string",
          },
        },
        outputOption(["name", "json", "yaml", "wide"]),
        {
          name: ["--parameter", "-p"],
          description:
            "Input parameter to override on the original workflow spec",
          isRepeatable: true,
          args: {
            name: "stringArray",
          },
        },
        {
          name: "--restart-successful",
          description:
            "Indicates to restart successful nodes matching the --node-field-selector",
        },
        {
          name: ["--selector", "-l"],
          description:
            "Selector (label query) to filter on, not including uninitialized ones, supports '=', '==', and '!='.(e.g. -l key1=value1,key2=value2)",
          args: {
            name: "string",
          },
        },
        {
          name: ["--wait", "-w"],
          description:
            "Wait for the workflow to complete, only works when a single workflow is retried",
        },
        {
          name: "--watch",
          description:
            "Watch the workflow until it completes, only works when a single workflow is retried",
        },
      ],
    },
    {
      name: "server",
      description: "Start the Argo Server",
      options: [
        {
          name: "--access-control-allow-origin",
          description:
            "Set Access-Control-Allow-Origin header in HTTP responses",
          args: {
            name: "string",
          },
        },
        {
          name: "--allowed-link-protocol",
          description:
            "Allowed protocols for links feature (default [http,https])",
          isRepeatable: true,
          args: {
            name: "stringArray",
          },
        },
        {
          name: "--api-rate-limit",
          description: "Set limit per IP for api ratelimiter (default 1000)",
          args: {
            name: "uint",
          },
        },
        {
          name: "--auth-mode",
          description:
            "API server authentication mode. Any 1 or more length permutation of: client,server,sso (default [client])",
          isRepeatable: true,
          args: {
            name: "stringArray",
          },
        },
        {
          name: "--base-href",
          description:
            'Value for base href in index.html. Used if the server is running behind reverse proxy under subpath different from / (default "/")',
          args: {
            name: "string",
          },
        },
        {
          name: ["-b", "--browser"],
          description: "Enable automatic launching of the browser [local mode]",
        },
        {
          name: "--configmap",
          description:
            'Name of K8s configmap to retrieve workflow controller configuration (default "workflow-controller-configmap")',
          args: {
            name: "string",
          },
        },
        {
          name: "--event-async-dispatch",
          description: "Dispatch event async",
        },
        {
          name: "--event-operation-queue-size",
          description:
            "How many events operations that can be queued at once (default 16)",
          args: {
            name: "int",
          },
        },
        {
          name: "--event-worker-count",
          description: "How many event workers to run (default 4)",
          args: {
            name: "int",
          },
        },
        {
          name: ["-h", "--help"],
          description: "Help for server",
        },
        {
          name: "--hsts",
          description:
            "Whether or not we should add a HTTP Secure Transport Security header. This only has effect if secure is enabled (default true)",
        },
        {
          name: "--kube-api-burst",
          description:
            "Burst to use while talking with kube-apiserver (default 30)",
          args: {
            name: "int",
          },
        },
        {
          name: "--kube-api-qps",
          description:
            "QPS to use while talking with kube-apiserver (default 20)",
          args: {
            name: "float32",
          },
        },
        {
          name: "--managed-namespace",
          description:
            "Namespace that watches, default to the installation namespace",
          args: {
            name: "string",
          },
        },
        {
          name: "--namespaced",
          description: "Run as namespaced mode",
        },
        {
          name: ["-p", "--port"],
          description: "Port to listen on (default 2746)",
          args: {
            name: "int",
          },
        },
        {
          name: "--tls-certificate-secret-name",
          description:
            "The name of a Kubernetes secret that contains the server certificates",
          args: {
            name: "string",
          },
        },
        {
          name: "--x-frame-options",
          description:
            'Set X-Frame-Options header in HTTP responses (default "DENY")',
          args: {
            name: "string",
          },
        },
      ],
    },
    {
      name: "stop",
      description:
        "Stop zero or more workflows allowing all exit handlers to run",
      args: { name: "WORKFLOW", isVariadic: true },
      options: [
        {
          name: "--dry-run",
          description:
            "If true, only print the workflows that would be stopped, without stopping them",
        },
        {
          name: "--field-selector",
          description:
            "Selector (field query) to filter on, supports '=', '==', and '!='.(e.g. --field-selector key1=value1,key2=value2). The server only supports a limited number of field queries per type",
          args: {
            name: "string",
          },
        },
        {
          name: ["-h", "--help"],
          description: "Help for stop",
        },
        {
          name: "--message",
          description: "Message to add to previously running nodes",
          args: {
            name: "string",
          },
        },
        {
          name: "--node-field-selector",
          description:
            "Selector of node to stop, eg: --node-field-selector inputs.parameters.myparam.value=abc",
          args: {
            name: "string",
          },
        },
        {
          name: ["-l", "--selector"],
          description:
            "Selector (label query) to filter on, not including uninitialized ones, supports '=', '==', and '!='.(e.g. -l key1=value1,key2=value2)",
          args: {
            name: "string",
          },
        },
      ],
    },
    {
      name: "submit",
      description: "Submit a workflow",
      args: { ...files, isOptional: true },
      options: [
        {
          name: "--dry-run",
          description:
            "Modify the workflow on the client-side without creating it",
        },
        {
          name: "--entrypoint",
          description: "Override entrypoint",
          args: {
            name: "string",
          },
        },
        {
          name: "--from",
          description:
            "Submit from an existing kind/name E.g., --from=cronwf/hello-world-cwf",
          args: {
            name: "kind/name",
          },
        },
        {
          name: "--generate-name",
          description: "Override metadata.generateName",
          args: {
            name: "string",
          },
        },
        {
          name: ["-h", "--help"],
          description: "Help for submit",
        },
        {
          name: ["-l", "--labels"],
          description:
            "Comma separated labels to apply to the workflow. Will override previous values",
          args: {
            name: "string",
          },
        },
        {
          name: "--log",
          description: "Log the workflow until it completes",
        },
        {
          name: "--name",
          description: "Override metadata.name",
          args: {
            name: "string",
          },
        },
        {
          name: "--node-field-selector",
          description:
            "Selector of node to display, eg: --node-field-selector phase=abc",
          args: {
            name: "string",
          },
        },
        outputOption(["name", "json", "yaml", "wide"]),
        {
          name: ["-p", "--parameter"],
          description: "Pass an input parameter",
          isRepeatable: true,
          args: {
            name: "stringArray",
          },
        },
        {
          name: ["-f", "--parameter-file"],
          description: "Pass a file containing all input parameters",
          args: {
            name: "string",
          },
        },
        {
          name: "--priority",
          description: "Workflow priority",
          args: {
            name: "int32",
          },
        },
        {
          name: "--scheduled-time",
          description:
            "Override the workflow's scheduledTime parameter (useful for backfilling). The time must be RFC3339",
          args: {
            name: "string",
          },
        },
        {
          name: "--server-dry-run",
          description:
            "Send request to server with dry-run flag which will modify the workflow without creating it",
        },
        {
          name: "--serviceaccount",
          description:
            "Run all pods in the workflow using specified serviceaccount",
          args: {
            name: "string",
          },
        },
        {
          name: "--status",
          description:
            "Filter by status (Pending, Running, Succeeded, Skipped, Failed, Error). Should only be used with --watch",
          args: {
            name: "string",
          },
        },
        {
          name: "--strict",
          description: "Perform strict workflow validation (default true)",
        },
        {
          name: ["-w", "--wait"],
          description: "Wait for the workflow to complete",
        },
        {
          name: "--watch",
          description: "Watch the workflow until it completes",
        },
      ],
    },
    {
      name: "suspend",
      description: "Suspend zero or more workflows (opposite of resume)",
      args: { name: "WORKFLOW", isVariadic: true },
      options: [
        {
          name: ["-h", "--help"],
          description: "Help for suspend",
        },
      ],
    },
    {
      name: "sync",
      description: "Manage sync limits",
      subcommands: [
        {
          name: "create",
          description: "Create a sync limit",
          args: { name: "KEY" },
          options: [
            ...syncLimitOptions,
            {
              name: "--limit",
              description: "Sync limit",
              isRequired: true,
              args: { name: "int32" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a sync limit",
          args: { name: "KEY" },
          options: syncLimitOptions,
        },
        {
          name: "get",
          description: "Get a sync limit",
          args: { name: "KEY" },
          options: syncLimitOptions,
        },
        {
          name: "update",
          description: "Update a sync limit",
          args: { name: "KEY" },
          options: [
            ...syncLimitOptions,
            {
              name: "--limit",
              description: "New sync limit",
              isRequired: true,
              args: { name: "int32" },
            },
          ],
        },
      ],
    },
    {
      name: "template",
      description: "Manipulate workflow templates",
      options: [
        {
          name: ["-h", "--help"],
          description: "Help for template",
        },
      ],
      subcommands: [
        {
          name: "create",
          description: "Create a workflow template",
          args: files,
          options: [
            {
              name: ["--help", "-h"],
              description: "Help for create",
            },
            outputOption(["name", "json", "yaml", "wide"]),
            {
              name: "--strict",
              description: "Perform strict workflow validation (default true)",
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a workflow template",
          args: {
            name: "WORKFLOW_TEMPLATE",
          },
          options: [
            {
              name: "--all",
              description: "Delete all workflow templates",
            },
            {
              name: ["-h", "--help"],
              description: "Help for delete",
            },
          ],
        },
        {
          name: "get",
          description: "Display details about a workflow template",
          args: {
            name: "WORKFLOW_TEMPLATE",
            isVariadic: true,
          },
          options: [
            {
              name: ["-h", "--help"],
              description: "Help for get",
            },
            outputOption(["name", "json", "yaml", "wide"]),
          ],
        },
        {
          name: "lint",
          description:
            "Validate a file or directory of workflow template manifests",
          args: files,
          options: [
            {
              name: ["--help", "-h"],
              description: "Help for lint",
            },
            outputOption(
              ["pretty", "simple"],
              'Linting results output format. One of: pretty|simple (default "pretty")'
            ),
            {
              name: "--strict",
              description: "Perform strict workflow validation (default true)",
            },
          ],
        },
        {
          name: "list",
          description: "List workflow templates",
          options: [
            {
              name: ["--all-namespaces", "-A"],
              description: "Show workflows from all namespaces",
            },
            {
              name: ["--help", "-h"],
              description: "Help for list",
            },
            outputOption(["wide", "name"]),
            {
              name: ["--selector", "-l"],
              description:
                "Selector (label query) to filter on, supports '=', '==', and '!='.(e.g. -l key1=value1,key2=value2)",
              args: {
                name: "string",
              },
            },
          ],
        },
        templateUpdate("workflow template"),
      ],
    },
    {
      name: "terminate",
      description: "Terminate zero or more workflows immediately",
      args: {
        name: "WORKFLOW",
        isVariadic: true,
      },
      options: [
        {
          name: "--dry-run",
          description:
            "Do not terminate the workflow, only print what would happen",
        },
        {
          name: "--field-selector",
          description:
            "Selector (field query) to filter on, supports '=', '==', and '!='.(e.g. --field-selector key1=value1,key2=value2). The server only supports a limited number of field queries per type",
          args: {
            name: "string",
          },
        },
        {
          name: ["-h", "--help"],
          description: "Help for terminate",
        },
        {
          name: ["-l", "--selector"],
          description:
            "Selector (label query) to filter on, not including uninitialized ones, supports '=', '==', and '!='.(e.g. -l key1=value1,key2=value2)",
          args: {
            name: "string",
          },
        },
      ],
    },
    {
      name: "version",
      description: "Print version information",
      options: [
        {
          name: ["--help", "-h"],
          description: "Help for version",
        },
        {
          name: "--short",
          description: "Print just the version number",
        },
      ],
    },
    {
      name: "wait",
      description: "Waits for workflows to complete",
      args: { name: "WORKFLOW", isVariadic: true, isOptional: true },
      options: [
        {
          name: ["-h", "--help"],
          description: "Help for wait",
        },
        {
          name: "--ignore-not-found",
          description: "Ignore the wait if the workflow is not found",
        },
      ],
    },
    {
      name: "watch",
      description: "Watch a workflow until it completes",
      args: {
        name: "WORKFLOW",
      },
      options: [
        {
          name: ["-h", "--help"],
          description: "Help for watch",
        },
        {
          name: "--node-field-selector",
          description:
            "Selector of node to display, eg: --node-field-selector phase=abc",
          args: {
            name: "string",
          },
        },
        {
          name: "--status",
          description:
            "Filter by status (Pending, Running, Succeeded, Skipped, Failed, Error)",
          args: {
            name: "string",
          },
        },
      ],
    },
  ],
  options: globalOptions,
  // Only uncomment if argo takes an argument
  // args: {}
};
export default completionSpec;
