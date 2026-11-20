// tkn v0.47.0 (latest tag on tektoncd/cli and the Homebrew tektoncd-cli formula, 2026-11-20).
// Source: command tree and flags from pkg/cmd (cobra definitions, shared pkg/flags and pkg/formatted)
// and the generated docs/cmd reference at tag v0.47.0, read statically (binary not run).
// Note: docs/cmd for the deprecated "hub" subcommands still shows an old "--type" default of tekton;
// the pkg/cmd/hub source (default "artifact") is authoritative.

const remoteOptions: Fig.Option[] = [
  {
    name: "--remote-bearer",
    description: "A Bearer token to authenticate against the repository",
    args: { name: "remote-bearer" },
  },
  {
    name: "--remote-password",
    description:
      "A password to pass to the registry for basic auth. Must be used with --remote-username",
    dependsOn: ["--remote-username"],
    args: { name: "remote-password" },
  },
  {
    name: "--remote-skip-tls",
    description:
      "Skip TLS certificate verification and allow plain-HTTP connections to the registry (opt-in insecure mode)",
  },
  {
    name: "--remote-username",
    description:
      "A username to pass to the registry for basic auth. Must be used with --remote-password",
    dependsOn: ["--remote-password"],
    args: { name: "remote-username" },
  },
];

const jsonYamlOutput: Fig.Option = {
  name: ["--output", "-o"],
  description: "Output format. One of: json|yaml",
  args: { name: "output", suggestions: ["json", "yaml"] },
};

const deleteOutput: Fig.Option = {
  ...jsonYamlOutput,
  description:
    "Output format. One of: json|yaml. Skips the confirmation prompt",
};

const printOutputFormats = [
  "json",
  "yaml",
  "name",
  "go-template",
  "go-template-file",
  "template",
  "templatefile",
  "jsonpath",
  "jsonpath-as-json",
  "jsonpath-file",
];

const printOptions: Fig.Option[] = [
  {
    name: "--allow-missing-template-keys",
    description:
      "If true, ignore any errors in templates when a field or map key is missing in the template. Only applies to golang and jsonpath output formats",
  },
  {
    name: ["--output", "-o"],
    description:
      "Output format. One of: (json, yaml, name, go-template, go-template-file, template, templatefile, jsonpath, jsonpath-as-json, jsonpath-file)",
    args: { name: "output", suggestions: printOutputFormats },
  },
  {
    name: "--show-managed-fields",
    description:
      "If true, keep the managedFields when printing objects in JSON or YAML format",
  },
  {
    name: "--template",
    description:
      "Template string or path to template file to use when -o=go-template, -o=go-template-file. The template format is golang templates [http://golang.org/pkg/text/template/#pkg-overview]",
    args: { name: "template", template: ["filepaths"] },
  },
];

const kubeOptions: Fig.Option[] = [
  {
    name: ["--context", "-c"],
    description:
      "Name of the kubeconfig context to use (default: kubectl config current-context)",
    isPersistent: true,
    args: { name: "context" },
  },
  {
    name: ["--kubeconfig", "-k"],
    description: "Kubectl config file (default: $HOME/.kube/config)",
    isPersistent: true,
    args: { name: "kubeconfig" },
  },
  {
    name: ["--namespace", "-n"],
    description: "Namespace to use (default: from $KUBECONFIG)",
    isPersistent: true,
    args: { name: "namespace" },
  },
  {
    name: ["--no-color", "-C"],
    description: "Disable coloring (default: false)",
    isPersistent: true,
  },
  {
    name: "--nocolour",
    description: "Disable colouring (default: false)",
    isPersistent: true,
    hidden: true,
  },
];

const completionSpec: Fig.Spec = {
  name: "tkn",
  description: "CLI for tekton pipelines",
  subcommands: [
    {
      name: ["tkb", "bundles", "bundle"],
      description: "Manage Tekton Bundles",
      subcommands: [
        {
          name: "list",
          description: "List and print a Tekton bundle's contents",
          options: [
            {
              name: "--allow-missing-template-keys",
              description:
                "If true, ignore any errors in templates when a field or map key is missing in the template. Only applies to golang and jsonpath output formats",
            },
            {
              name: "--cache-dir",
              description:
                "A directory to cache Tekton bundles in. The default follows XDG_CACHE_HOME unless ~/.tekton exists",
              args: { name: "cache-dir", template: "folders" },
            },
            {
              name: "--no-cache",
              description:
                "If set to true, pulls a Tekton bundle from the remote even its exact digest is available in the cache",
            },
            {
              name: ["--output", "-o"],
              description:
                "Output format. One of: (json, yaml, name, go-template, go-template-file, template, templatefile, jsonpath, jsonpath-as-json, jsonpath-file)",
              args: { name: "output", suggestions: printOutputFormats },
            },
            ...remoteOptions,
            {
              name: "--show-managed-fields",
              description:
                "If true, keep the managedFields when printing objects in JSON or YAML format",
            },
            {
              name: "--template",
              description:
                "Template string or path to template file to use when -o=go-template, -o=go-template-file. The template format is golang templates [http://golang.org/pkg/text/template/#pkg-overview]",
              args: { name: "template", template: ["filepaths"] },
            },
          ],
        },
        {
          name: "push",
          description: "Create or replace a Tekton bundle",
          options: [
            {
              name: "--annotate",
              description:
                "OCI Manifest annotation in the form of key=value to be added to the OCI image. Can be provided multiple times to add multiple annotations",
              isRepeatable: true,
              args: { name: "annotate" },
            },
            {
              name: "--ctime",
              description:
                "YYYY-MM-DD, YYYY-MM-DDTHH:MM:SS or RFC3339 formatted created time to set, defaults to current time. In non RFC3339 syntax dates are in UTC timezone",
              args: { name: "ctime" },
            },
            {
              name: ["--filenames", "-f"],
              description:
                "List of fully-qualified file paths containing YAML or JSON defined Tekton objects to include in this bundle",
              isRepeatable: true,
              args: { name: "filenames" },
            },
            {
              name: "--label",
              description:
                "OCI Config labels in the form of key=value to be added to the OCI image. Can be provided multiple times to add multiple labels",
              isRepeatable: true,
              args: { name: "label" },
            },
            ...remoteOptions,
          ],
        },
      ],
      options: [
        {
          name: ["--context", "-c"],
          description:
            "Name of the kubeconfig context to use (default: kubectl config current-context)",
          isPersistent: true,
          hidden: true,
          args: { name: "context" },
        },
        {
          name: ["--kubeconfig", "-k"],
          description: "Kubectl config file (default: $HOME/.kube/config)",
          isPersistent: true,
          hidden: true,
          args: { name: "kubeconfig" },
        },
        {
          name: ["--namespace", "-n"],
          description: "Namespace to use (default: from $KUBECONFIG)",
          isPersistent: true,
          hidden: true,
          args: { name: "namespace" },
        },
        {
          name: ["--no-color", "-C"],
          description: "Disable coloring (default: false)",
          isPersistent: true,
        },
        {
          name: "--nocolour",
          description: "Disable colouring (default: false)",
          isPersistent: true,
          hidden: true,
        },
      ],
    },
    {
      name: ["ctb", "clustertriggerbindings", "clustertriggerbinding"],
      description: "Manage ClusterTriggerBindings",
      subcommands: [
        {
          name: ["rm", "delete"],
          description: "Delete ClusterTriggerBindings",
          options: [
            {
              name: "--all",
              description: "Delete all ClusterTriggerBindings (default: false)",
            },
            {
              name: ["--force", "-f"],
              description: "Whether to force deletion (default: false)",
            },
            deleteOutput,
          ],
        },
        {
          name: ["desc", "describe"],
          description: "Describes a ClusterTriggerBinding",
          options: [
            {
              name: "--allow-missing-template-keys",
              description:
                "If true, ignore any errors in templates when a field or map key is missing in the template. Only applies to golang and jsonpath output formats",
            },
            {
              name: ["--output", "-o"],
              description:
                "Output format. One of: (json, yaml, name, go-template, go-template-file, template, templatefile, jsonpath, jsonpath-as-json, jsonpath-file)",
              args: { name: "output", suggestions: printOutputFormats },
            },
            {
              name: "--show-managed-fields",
              description:
                "If true, keep the managedFields when printing objects in JSON or YAML format",
            },
            {
              name: "--template",
              description:
                "Template string or path to template file to use when -o=go-template, -o=go-template-file. The template format is golang templates [http://golang.org/pkg/text/template/#pkg-overview]",
              args: { name: "template", template: ["filepaths"] },
            },
          ],
        },
        {
          name: ["ls", "list"],
          description: "Lists ClusterTriggerBindings in a namespace",
          options: [
            {
              name: "--allow-missing-template-keys",
              description:
                "If true, ignore any errors in templates when a field or map key is missing in the template. Only applies to golang and jsonpath output formats",
            },
            {
              name: "--no-headers",
              description:
                "Do not print column headers with output (default print column headers with output)",
            },
            {
              name: ["--output", "-o"],
              description:
                "Output format. One of: (json, yaml, name, go-template, go-template-file, template, templatefile, jsonpath, jsonpath-as-json, jsonpath-file)",
              args: { name: "output", suggestions: printOutputFormats },
            },
            {
              name: "--show-managed-fields",
              description:
                "If true, keep the managedFields when printing objects in JSON or YAML format",
            },
            {
              name: "--template",
              description:
                "Template string or path to template file to use when -o=go-template, -o=go-template-file. The template format is golang templates [http://golang.org/pkg/text/template/#pkg-overview]",
              args: { name: "template", template: ["filepaths"] },
            },
          ],
        },
      ],
      options: [
        {
          name: ["--context", "-c"],
          description:
            "Name of the kubeconfig context to use (default: kubectl config current-context)",
          isPersistent: true,
          args: { name: "context" },
        },
        {
          name: ["--kubeconfig", "-k"],
          description: "Kubectl config file (default: $HOME/.kube/config)",
          isPersistent: true,
          args: { name: "kubeconfig" },
        },
        {
          name: ["--namespace", "-n"],
          description: "Namespace to use (default: from $KUBECONFIG)",
          isPersistent: true,
          hidden: true,
          args: { name: "namespace" },
        },
        {
          name: ["--no-color", "-C"],
          description: "Disable coloring (default: false)",
          isPersistent: true,
        },
        {
          name: "--nocolour",
          description: "Disable colouring (default: false)",
          isPersistent: true,
          hidden: true,
        },
      ],
    },
    {
      name: "completion",
      description: "Prints shell completion scripts",
      args: {
        name: "shell",
        suggestions: ["bash", "zsh", "fish", "powershell"],
      },
    },
    {
      name: ["cr", "customruns", "customrun"],
      description: "Manage CustomRuns",
      subcommands: [
        {
          name: ["rm", "delete"],
          description: "Delete CustomRuns in a namespace",
          options: [jsonYamlOutput],
        },
        {
          name: ["desc", "describe"],
          description: "Describe a CustomRun in a namespace",
          options: [
            ...printOptions,
            {
              name: ["--fzf", "-F"],
              description: "Use fzf to select a CustomRun to describe",
            },
            {
              name: ["--last", "-L"],
              description: "Show description for last CustomRun",
            },
            {
              name: "--limit",
              description:
                "Lists number of CustomRuns when selecting a CustomRun to describe",
              args: { name: "limit", default: "5" },
            },
          ],
        },
        {
          name: ["ls", "list"],
          description: "Lists CustomRuns in a namespace",
          options: [
            ...printOptions,
            {
              name: ["--all-namespaces", "-A"],
              description: "List CustomRuns from all namespaces",
            },
            {
              name: "--label",
              description:
                "A selector (label query) to filter on, supports '=', '==', and '!='",
              args: { name: "label" },
            },
            {
              name: "--limit",
              description:
                "Limits the number of CustomRuns. If the limit value is 0 returns all",
              args: { name: "limit", default: "0" },
            },
            {
              name: "--no-headers",
              description:
                "Do not print column headers with output (default print column headers with output)",
            },
            {
              name: "--reverse",
              description: "List CustomRuns in reverse order",
            },
          ],
        },
      ],
      options: kubeOptions,
    },
    {
      name: ["el", "eventlisteners", "eventlistener"],
      description: "Manage EventListeners",
      subcommands: [
        {
          name: ["rm", "delete"],
          description: "Delete EventListeners in a namespace",
          options: [
            {
              name: "--all",
              description:
                "Delete all EventListeners in a namespace (default: false)",
            },
            {
              name: ["--force", "-f"],
              description: "Whether to force deletion (default: false)",
            },
            deleteOutput,
          ],
        },
        {
          name: ["desc", "describe"],
          description: "Describe EventListener in a namespace",
          options: [
            {
              name: "--allow-missing-template-keys",
              description:
                "If true, ignore any errors in templates when a field or map key is missing in the template. Only applies to golang and jsonpath output formats",
            },
            {
              name: ["--output", "-o"],
              description:
                "Output format. One of: (json, yaml, name, go-template, go-template-file, template, templatefile, jsonpath, jsonpath-as-json, jsonpath-file)",
              args: { name: "output", suggestions: printOutputFormats },
            },
            {
              name: "--show-managed-fields",
              description:
                "If true, keep the managedFields when printing objects in JSON or YAML format",
            },
            {
              name: "--template",
              description:
                "Template string or path to template file to use when -o=go-template, -o=go-template-file. The template format is golang templates [http://golang.org/pkg/text/template/#pkg-overview]",
              args: { name: "template", template: ["filepaths"] },
            },
          ],
        },
        {
          name: ["ls", "list"],
          description: "Lists EventListeners in a namespace",
          options: [
            {
              name: ["--all-namespaces", "-A"],
              description: "List EventListeners from all namespaces",
            },
            {
              name: "--allow-missing-template-keys",
              description:
                "If true, ignore any errors in templates when a field or map key is missing in the template. Only applies to golang and jsonpath output formats",
            },
            {
              name: "--no-headers",
              description:
                "Do not print column headers with output (default print column headers with output)",
            },
            {
              name: ["--output", "-o"],
              description:
                "Output format. One of: (json, yaml, name, go-template, go-template-file, template, templatefile, jsonpath, jsonpath-as-json, jsonpath-file)",
              args: { name: "output", suggestions: printOutputFormats },
            },
            {
              name: "--show-managed-fields",
              description:
                "If true, keep the managedFields when printing objects in JSON or YAML format",
            },
            {
              name: "--template",
              description:
                "Template string or path to template file to use when -o=go-template, -o=go-template-file. The template format is golang templates [http://golang.org/pkg/text/template/#pkg-overview]",
              args: { name: "template", template: ["filepaths"] },
            },
          ],
        },
        {
          name: "logs",
          description: "Show EventListener logs",
          options: [
            {
              name: ["--tail", "-t"],
              description:
                "Number of most recent log lines to show. Specify -1 for all logs from each pod",
              args: { name: "tail", default: "10" },
            },
          ],
        },
      ],
      options: [
        {
          name: ["--context", "-c"],
          description:
            "Name of the kubeconfig context to use (default: kubectl config current-context)",
          isPersistent: true,
          args: { name: "context" },
        },
        {
          name: ["--kubeconfig", "-k"],
          description: "Kubectl config file (default: $HOME/.kube/config)",
          isPersistent: true,
          args: { name: "kubeconfig" },
        },
        {
          name: ["--namespace", "-n"],
          description: "Namespace to use (default: from $KUBECONFIG)",
          isPersistent: true,
          args: { name: "namespace" },
        },
        {
          name: ["--no-color", "-C"],
          description: "Disable coloring (default: false)",
          isPersistent: true,
        },
        {
          name: "--nocolour",
          description: "Disable colouring (default: false)",
          isPersistent: true,
          hidden: true,
        },
      ],
    },
    {
      name: "hub",
      description: "Interact with artifacthub",
      subcommands: [
        {
          name: "check-upgrade",
          description: "Check for upgrades of resources if present",
          subcommands: [
            {
              name: "task",
              description: "Check updates for Task installed via Hub CLI",
            },
          ],
          options: [
            {
              name: ["--context", "-c"],
              description:
                "Name of the kubeconfig context to use (default: kubectl config current-context)",
              isPersistent: true,
              args: { name: "context" },
            },
            {
              name: ["--kubeconfig", "-k"],
              description: "Kubectl config file (default: $HOME/.kube/config)",
              isPersistent: true,
              args: { name: "kubeconfig" },
            },
            {
              name: ["--namespace", "-n"],
              description: "Namespace to use (default: from $KUBECONFIG)",
              isPersistent: true,
              args: { name: "namespace" },
            },
          ],
        },
        {
          name: "downgrade",
          description: "Downgrade an installed resource",
          subcommands: [
            {
              name: "task",
              description:
                "Downgrade an installed Task by its name to a lower version",
            },
          ],
          options: [
            {
              name: ["--context", "-c"],
              description:
                "Name of the kubeconfig context to use (default: kubectl config current-context)",
              isPersistent: true,
              args: { name: "context" },
            },
            {
              name: ["--kubeconfig", "-k"],
              description: "Kubectl config file (default: $HOME/.kube/config)",
              isPersistent: true,
              args: { name: "kubeconfig" },
            },
            {
              name: ["--namespace", "-n"],
              description: "Namespace to use (default: from $KUBECONFIG)",
              isPersistent: true,
              args: { name: "namespace" },
            },
            {
              name: "--to",
              description: "Version of Resource",
              isPersistent: true,
              args: { name: "to" },
            },
          ],
        },
        {
          name: "get",
          description:
            "Get resource manifest by its name, kind, catalog, and version",
          subcommands: [
            {
              name: "pipeline",
              description: "Get Pipeline by name, catalog and version",
            },
            {
              name: "task",
              description: "Get Task by name, catalog and version",
            },
          ],
          options: [
            {
              name: "--from",
              description: "Name of Catalog to which resource belongs to",
              isPersistent: true,
              args: { name: "from" },
            },
            {
              name: "--version",
              description: "Version of Resource",
              isPersistent: true,
              args: { name: "version" },
            },
          ],
        },
        {
          name: "info",
          description:
            "Display info of resource by its name, kind, catalog, and version",
          subcommands: [
            {
              name: "task",
              description:
                "Display info of Task by its name, catalog and version",
            },
          ],
          options: [
            {
              name: "--from",
              description: "Name of Catalog to which resource belongs",
              isPersistent: true,
              args: { name: "from" },
            },
            {
              name: "--version",
              description: "Version of Resource",
              isPersistent: true,
              args: { name: "version" },
            },
          ],
        },
        {
          name: "install",
          description:
            "Install a resource from a catalog by its kind, name and version",
          subcommands: [
            {
              name: "task",
              description:
                "Install Task from a catalog by its name and version",
            },
          ],
          options: [
            {
              name: ["--context", "-c"],
              description:
                "Name of the kubeconfig context to use (default: kubectl config current-context)",
              isPersistent: true,
              args: { name: "context" },
            },
            {
              name: "--from",
              description: "Name of Catalog to which resource belongs",
              isPersistent: true,
              args: { name: "from" },
            },
            {
              name: ["--kubeconfig", "-k"],
              description: "Kubectl config file (default: $HOME/.kube/config)",
              isPersistent: true,
              args: { name: "kubeconfig" },
            },
            {
              name: ["--namespace", "-n"],
              description: "Namespace to use (default: from $KUBECONFIG)",
              isPersistent: true,
              args: { name: "namespace" },
            },
            {
              name: "--version",
              description: "Version of Resource",
              isPersistent: true,
              args: { name: "version" },
            },
          ],
        },
        {
          name: "reinstall",
          description: "Reinstall a resource by its kind and name",
          subcommands: [
            { name: "task", description: "Reinstall a Task by its name" },
          ],
          options: [
            {
              name: ["--context", "-c"],
              description:
                "Name of the kubeconfig context to use (default: kubectl config current-context)",
              isPersistent: true,
              args: { name: "context" },
            },
            {
              name: "--from",
              description: "Name of Catalog to which resource belongs",
              isPersistent: true,
              args: { name: "from", default: "tekton" },
            },
            {
              name: ["--kubeconfig", "-k"],
              description: "Kubectl config file (default: $HOME/.kube/config)",
              isPersistent: true,
              args: { name: "kubeconfig" },
            },
            {
              name: ["--namespace", "-n"],
              description: "Namespace to use (default: from $KUBECONFIG)",
              isPersistent: true,
              args: { name: "namespace" },
            },
            {
              name: "--version",
              description: "Version of Resource",
              isPersistent: true,
              args: { name: "version" },
            },
          ],
        },
        {
          name: "search",
          description:
            "Search resource by a combination of name, kind, categories, platforms, and tags",
          options: [
            {
              name: "--categories",
              description: "Accepts a comma separated list of categories",
              isRepeatable: true,
              args: { name: "categories" },
            },
            {
              name: "--kinds",
              description: "Accepts a comma separated list of kinds",
              isRepeatable: true,
              args: { name: "kinds" },
            },
            {
              name: ["--limit", "-l"],
              description: "Max number of resources to fetch",
              args: { name: "limit", default: "0" },
            },
            {
              name: "--match",
              description: "Accept type of search. 'exact' or 'contains'",
              args: {
                name: "match",
                default: "contains",
                suggestions: ["exact", "contains"],
              },
            },
            {
              name: ["--output", "-o"],
              description: "Accepts output format: [table, json, wide]",
              args: {
                name: "output",
                default: "table",
                suggestions: ["table", "json", "wide"],
              },
            },
            {
              name: "--platforms",
              description: "Accepts a comma separated list of platforms",
              isRepeatable: true,
              args: { name: "platforms" },
            },
            {
              name: "--tags",
              description: "Accepts a comma separated list of tags",
              isRepeatable: true,
              args: { name: "tags" },
            },
          ],
        },
        {
          name: "upgrade",
          description: "Upgrade an installed resource",
          subcommands: [
            { name: "task", description: "Upgrade a Task by its name" },
          ],
          options: [
            {
              name: ["--context", "-c"],
              description:
                "Name of the kubeconfig context to use (default: kubectl config current-context)",
              isPersistent: true,
              args: { name: "context" },
            },
            {
              name: ["--kubeconfig", "-k"],
              description: "Kubectl config file (default: $HOME/.kube/config)",
              isPersistent: true,
              args: { name: "kubeconfig" },
            },
            {
              name: ["--namespace", "-n"],
              description: "Namespace to use (default: from $KUBECONFIG)",
              isPersistent: true,
              args: { name: "namespace" },
            },
            {
              name: "--to",
              description: "Version of Resource",
              isPersistent: true,
              args: { name: "to" },
            },
          ],
        },
      ],
      options: [
        {
          name: "--api-server",
          description:
            "Hub API Server URL. For artifact type: default 'https://artifacthub.io' (env: ARTIFACT_HUB_API_SERVER). For tekton type (DEPRECATED): default 'https://api.hub.tekton.dev' (env: TEKTON_HUB_API_SERVER). Can also be set in '$HOME/.tekton/hub-config'",
          isPersistent: true,
          args: { name: "api-server" },
        },
        {
          name: "--type",
          description:
            "The type of Hub from where to pull the resource. Either 'artifact' or 'tekton' (DEPRECATED: tekton type will be removed in a future release)",
          isPersistent: true,
          args: {
            name: "type",
            default: "artifact",
            suggestions: ["artifact", "tekton"],
          },
        },
      ],
    },
    {
      name: ["p", "pipelines", "pipeline"],
      description: "Manage pipelines",
      subcommands: [
        {
          name: ["rm", "delete"],
          description: "Delete Pipelines in a namespace",
          options: [
            {
              name: "--all",
              description:
                "Delete all Pipelines in a namespace (default: false)",
            },
            {
              name: ["--force", "-f"],
              description: "Whether to force deletion (default: false)",
            },
            deleteOutput,
            {
              name: "--prs",
              description:
                "Whether to delete Pipeline(s) and related resources (PipelineRuns) (default: false)",
            },
          ],
        },
        {
          name: ["desc", "describe"],
          description: "Describes a Pipeline in a namespace",
          options: [
            {
              name: "--allow-missing-template-keys",
              description:
                "If true, ignore any errors in templates when a field or map key is missing in the template. Only applies to golang and jsonpath output formats",
            },
            {
              name: ["--output", "-o"],
              description:
                "Output format. One of: (json, yaml, name, go-template, go-template-file, template, templatefile, jsonpath, jsonpath-as-json, jsonpath-file)",
              args: { name: "output", suggestions: printOutputFormats },
            },
            {
              name: "--show-managed-fields",
              description:
                "If true, keep the managedFields when printing objects in JSON or YAML format",
            },
            {
              name: "--template",
              description:
                "Template string or path to template file to use when -o=go-template, -o=go-template-file. The template format is golang templates [http://golang.org/pkg/text/template/#pkg-overview]",
              args: { name: "template", template: ["filepaths"] },
            },
          ],
        },
        {
          name: "export",
          description: "Export Pipeline",
          options: [
            {
              name: "--allow-missing-template-keys",
              description:
                "If true, ignore any errors in templates when a field or map key is missing in the template. Only applies to golang and jsonpath output formats",
            },
            {
              name: ["--output", "-o"],
              description:
                "Output format. One of: (json, yaml, name, go-template, go-template-file, template, templatefile, jsonpath, jsonpath-as-json, jsonpath-file)",
              args: { name: "output", suggestions: printOutputFormats },
            },
            {
              name: "--show-managed-fields",
              description:
                "If true, keep the managedFields when printing objects in JSON or YAML format",
            },
            {
              name: "--template",
              description:
                "Template string or path to template file to use when -o=go-template, -o=go-template-file. The template format is golang templates [http://golang.org/pkg/text/template/#pkg-overview]",
              args: { name: "template", template: ["filepaths"] },
            },
          ],
        },
        {
          name: ["ls", "list"],
          description: "Lists Pipelines in a namespace",
          options: [
            {
              name: ["--all-namespaces", "-A"],
              description: "List Pipelines from all namespaces",
            },
            {
              name: "--allow-missing-template-keys",
              description:
                "If true, ignore any errors in templates when a field or map key is missing in the template. Only applies to golang and jsonpath output formats",
            },
            {
              name: "--no-headers",
              description:
                "Do not print column headers with output (default print column headers with output)",
            },
            {
              name: ["--output", "-o"],
              description:
                "Output format. One of: (json, yaml, name, go-template, go-template-file, template, templatefile, jsonpath, jsonpath-as-json, jsonpath-file)",
              args: { name: "output", suggestions: printOutputFormats },
            },
            {
              name: "--show-managed-fields",
              description:
                "If true, keep the managedFields when printing objects in JSON or YAML format",
            },
            {
              name: "--template",
              description:
                "Template string or path to template file to use when -o=go-template, -o=go-template-file. The template format is golang templates [http://golang.org/pkg/text/template/#pkg-overview]",
              args: { name: "template", template: ["filepaths"] },
            },
          ],
        },
        {
          name: "logs",
          description: "Show Pipeline logs",
          options: [
            {
              name: ["--all", "-a"],
              description:
                "Show all logs including init steps injected by tekton",
            },
            { name: ["--follow", "-f"], description: "Stream live logs" },
            {
              name: ["--last", "-L"],
              description: "Show logs for last PipelineRun",
            },
            {
              name: "--limit",
              description: "Lists number of PipelineRuns",
              args: { name: "limit", default: "5" },
            },
            {
              name: "--prefix",
              description:
                "Prefix each log line with the log source (task name and step name)",
            },
            {
              name: ["--timestamps", "-t"],
              description: "Show logs with timestamp",
            },
          ],
        },
        {
          name: "sign",
          description: "Sign Tekton Pipeline",
          options: [
            {
              name: "--allow-missing-template-keys",
              description:
                "If true, ignore any errors in templates when a field or map key is missing in the template. Only applies to golang and jsonpath output formats",
            },
            {
              name: ["--file-name", "-f"],
              description:
                "Fle name of the signed pipeline, using the original file name will overwrite the file",
              args: { name: "file-name" },
            },
            {
              name: ["--key-file", "-K"],
              description: "Key file",
              args: { name: "key-file" },
            },
            {
              name: ["--kms-key", "-m"],
              description: "KMS key url",
              args: { name: "kms-key" },
            },
            {
              name: ["--output", "-o"],
              description:
                "Output format. One of: (json, yaml, name, go-template, go-template-file, template, templatefile, jsonpath, jsonpath-as-json, jsonpath-file)",
              args: { name: "output", suggestions: printOutputFormats },
            },
            {
              name: "--show-managed-fields",
              description:
                "If true, keep the managedFields when printing objects in JSON or YAML format",
            },
            {
              name: "--template",
              description:
                "Template string or path to template file to use when -o=go-template, -o=go-template-file. The template format is golang templates [http://golang.org/pkg/text/template/#pkg-overview]",
              args: { name: "template", template: ["filepaths"] },
            },
          ],
        },
        {
          name: "start",
          description: "Start Pipelines",
          options: [
            {
              name: "--dry-run",
              description: "Preview PipelineRun without running it",
            },
            {
              name: ["--exit-with-pipelinerun-error", "-E"],
              description:
                "When using --showlog, exit with pipelinerun to the unix shell, 0 if success, 1 if error or unknown status",
            },
            {
              name: ["--filename", "-f"],
              description:
                "Local or remote file name containing a Pipeline definition to start a PipelineRun",
              args: { name: "filename" },
            },
            {
              name: "--finally-timeout",
              description: "Timeout for Finally TaskRuns",
              args: { name: "finally-timeout" },
            },
            {
              name: "--json",
              description:
                "PipelineRun spec as JSON (inline, '-' for stdin, or '@path' for a file)",
              args: { name: "json" },
            },
            {
              name: ["--labels", "-l"],
              description: "Pass labels as label=value",
              isRepeatable: true,
              args: { name: "labels" },
            },
            {
              name: ["--last", "-L"],
              description: "Re-run the Pipeline using last PipelineRun values",
            },
            {
              name: ["--output", "-o"],
              description: "Format of PipelineRun (yaml, json or name)",
              args: { name: "output", suggestions: ["yaml", "json", "name"] },
            },
            {
              name: ["--param", "-p"],
              description:
                'Pass the param as key=value for string type, or key=value1,value2,... for array type, or key="key1:value1, key2:value2" for object type',
              isRepeatable: true,
              args: { name: "param" },
            },
            {
              name: "--pipeline-timeout",
              description: "Timeout for PipelineRun",
              args: { name: "pipeline-timeout" },
            },
            {
              name: "--pod-template",
              description:
                "Local or remote file containing a PodTemplate definition",
              args: { name: "pod-template" },
            },
            {
              name: "--prefix-name",
              description:
                "Specify a prefix for the PipelineRun name (must be lowercase alphanumeric characters)",
              args: { name: "prefix-name" },
            },
            {
              name: "--resolvertype",
              description:
                "Resolver type for remote pipelines (hub, git, http, cluster, bundle, remote)",
              args: {
                name: "resolvertype",
                suggestions: [
                  "hub",
                  "git",
                  "http",
                  "cluster",
                  "bundle",
                  "remote",
                ],
              },
            },
            {
              name: ["--serviceaccount", "-s"],
              description: "Pass the serviceaccount name",
              args: { name: "serviceaccount" },
            },
            {
              name: "--showlog",
              description: "Show logs right after starting the Pipeline",
            },
            {
              name: "--skip-optional-workspace",
              description: "Skips the prompt for optional workspaces",
            },
            {
              name: "--task-serviceaccount",
              description: "Pass the service account corresponding to the task",
              isRepeatable: true,
              args: { name: "task-serviceaccount" },
            },
            {
              name: "--tasks-timeout",
              description: "Timeout for Pipeline TaskRuns",
              args: { name: "tasks-timeout" },
            },
            {
              name: "--timeout",
              description: "Timeout for PipelineRun",
              deprecated: { description: "Use --pipeline-timeout instead" },
              args: { name: "timeout" },
            },
            {
              name: "--use-param-defaults",
              description:
                "Use default parameter values without prompting for input",
            },
            {
              name: "--use-pipelinerun",
              description: "Use this pipelinerun values to re-run the pipeline",
              args: { name: "use-pipelinerun" },
            },
            {
              name: ["--workspace", "-w"],
              description:
                "Pass one or more workspaces to map to the corresponding physical volumes",
              isRepeatable: true,
              args: { name: "workspace" },
            },
          ],
        },
        {
          name: "verify",
          description: "Verify Tekton Pipeline",
          options: [
            {
              name: "--allow-missing-template-keys",
              description:
                "If true, ignore any errors in templates when a field or map key is missing in the template. Only applies to golang and jsonpath output formats",
            },
            {
              name: ["--key-file", "-K"],
              description: "Key file",
              args: { name: "key-file" },
            },
            {
              name: ["--kms-key", "-m"],
              description: "KMS key url",
              args: { name: "kms-key" },
            },
            {
              name: ["--output", "-o"],
              description:
                "Output format. One of: (json, yaml, name, go-template, go-template-file, template, templatefile, jsonpath, jsonpath-as-json, jsonpath-file)",
              args: { name: "output", suggestions: printOutputFormats },
            },
            {
              name: "--show-managed-fields",
              description:
                "If true, keep the managedFields when printing objects in JSON or YAML format",
            },
            {
              name: "--template",
              description:
                "Template string or path to template file to use when -o=go-template, -o=go-template-file. The template format is golang templates [http://golang.org/pkg/text/template/#pkg-overview]",
              args: { name: "template", template: ["filepaths"] },
            },
          ],
        },
      ],
      options: [
        {
          name: ["--context", "-c"],
          description:
            "Name of the kubeconfig context to use (default: kubectl config current-context)",
          isPersistent: true,
          args: { name: "context" },
        },
        {
          name: ["--kubeconfig", "-k"],
          description: "Kubectl config file (default: $HOME/.kube/config)",
          isPersistent: true,
          args: { name: "kubeconfig" },
        },
        {
          name: ["--namespace", "-n"],
          description: "Namespace to use (default: from $KUBECONFIG)",
          isPersistent: true,
          args: { name: "namespace" },
        },
        {
          name: ["--no-color", "-C"],
          description: "Disable coloring (default: false)",
          isPersistent: true,
        },
        {
          name: "--nocolour",
          description: "Disable colouring (default: false)",
          isPersistent: true,
          hidden: true,
        },
      ],
    },
    {
      name: ["pr", "pipelineruns", "pipelinerun"],
      description: "Manage PipelineRuns",
      subcommands: [
        {
          name: "cancel",
          description: "Cancel a PipelineRun in a namespace",
          options: [
            {
              name: "--grace",
              description:
                "Gracefully cancel a PipelineRun To use this, you need to change the feature-flags configmap enable-api-fields to alpha instead of stable. Set to 'CancelledRunFinally' if you want to cancel the current running task and directly run the finally tasks. Set to 'StoppedRunFinally' if you want to cancel the remaining non-final task and directly run the finally tasks",
              args: {
                name: "grace",
                suggestions: ["CancelledRunFinally", "StoppedRunFinally"],
              },
            },
            jsonYamlOutput,
          ],
        },
        {
          name: ["rm", "delete"],
          description: "Delete PipelineRuns in a namespace",
          options: [
            {
              name: "--all",
              description:
                "Delete all PipelineRuns in a namespace (default: false)",
            },
            {
              name: ["--force", "-f"],
              description: "Whether to force deletion (default: false)",
            },
            {
              name: ["--ignore-running", "-i"],
              description: "Ignore running PipelineRun (default: true)",
            },
            {
              name: "--keep",
              description: "Keep n most recent number of PipelineRuns",
              args: { name: "keep", default: "0" },
            },
            {
              name: "--keep-since",
              description:
                "When deleting all PipelineRuns keep the ones that has been completed since n minutes",
              args: { name: "keep-since", default: "0" },
            },
            {
              name: "--label",
              description:
                "A selector (label query) to filter on when running with --all, supports '=', '==', and '!='",
              args: { name: "label" },
            },
            deleteOutput,
            {
              name: ["--pipeline", "-p"],
              description:
                "The name of a Pipeline whose PipelineRuns should be deleted (does not delete the Pipeline)",
              args: { name: "pipeline" },
            },
          ],
        },
        {
          name: ["desc", "describe"],
          description: "Describe a PipelineRun in a namespace",
          options: [
            {
              name: "--allow-missing-template-keys",
              description:
                "If true, ignore any errors in templates when a field or map key is missing in the template. Only applies to golang and jsonpath output formats",
            },
            {
              name: ["--fzf", "-F"],
              description: "Use fzf to select a PipelineRun to describe",
            },
            {
              name: ["--last", "-L"],
              description: "Show description for last PipelineRun",
            },
            {
              name: "--limit",
              description:
                "Lists number of PipelineRuns when selecting a PipelineRun to describe",
              args: { name: "limit", default: "5" },
            },
            {
              name: ["--output", "-o"],
              description:
                "Output format. One of: (json, yaml, name, go-template, go-template-file, template, templatefile, jsonpath, jsonpath-as-json, jsonpath-file)",
              args: { name: "output", suggestions: printOutputFormats },
            },
            {
              name: "--show-managed-fields",
              description:
                "If true, keep the managedFields when printing objects in JSON or YAML format",
            },
            {
              name: "--template",
              description:
                "Template string or path to template file to use when -o=go-template, -o=go-template-file. The template format is golang templates [http://golang.org/pkg/text/template/#pkg-overview]",
              args: { name: "template", template: ["filepaths"] },
            },
          ],
        },
        {
          name: "export",
          description: "Export PipelineRun",
          options: [
            {
              name: "--allow-missing-template-keys",
              description:
                "If true, ignore any errors in templates when a field or map key is missing in the template. Only applies to golang and jsonpath output formats",
            },
            {
              name: ["--output", "-o"],
              description:
                "Output format. One of: (json, yaml, name, go-template, go-template-file, template, templatefile, jsonpath, jsonpath-as-json, jsonpath-file)",
              args: { name: "output", suggestions: printOutputFormats },
            },
            {
              name: "--show-managed-fields",
              description:
                "If true, keep the managedFields when printing objects in JSON or YAML format",
            },
            {
              name: "--template",
              description:
                "Template string or path to template file to use when -o=go-template, -o=go-template-file. The template format is golang templates [http://golang.org/pkg/text/template/#pkg-overview]",
              args: { name: "template", template: ["filepaths"] },
            },
          ],
        },
        {
          name: ["ls", "list"],
          description: "Lists PipelineRuns in a namespace",
          options: [
            {
              name: ["--all-namespaces", "-A"],
              description: "List PipelineRuns from all namespaces",
            },
            {
              name: "--allow-missing-template-keys",
              description:
                "If true, ignore any errors in templates when a field or map key is missing in the template. Only applies to golang and jsonpath output formats",
            },
            {
              name: "--label",
              description:
                "A selector (label query) to filter on, supports '=', '==', and '!='",
              args: { name: "label" },
            },
            {
              name: "--limit",
              description:
                "Limits the number of PipelineRuns. If the limit value is 0 returns all",
              args: { name: "limit", default: "0" },
            },
            {
              name: "--no-headers",
              description:
                "Do not print column headers with output (default print column headers with output)",
            },
            {
              name: ["--output", "-o"],
              description:
                "Output format. One of: (json, yaml, name, go-template, go-template-file, template, templatefile, jsonpath, jsonpath-as-json, jsonpath-file)",
              args: { name: "output", suggestions: printOutputFormats },
            },
            {
              name: "--reverse",
              description: "List PipelineRuns in reverse order",
            },
            {
              name: "--show-managed-fields",
              description:
                "If true, keep the managedFields when printing objects in JSON or YAML format",
            },
            {
              name: "--template",
              description:
                "Template string or path to template file to use when -o=go-template, -o=go-template-file. The template format is golang templates [http://golang.org/pkg/text/template/#pkg-overview]",
              args: { name: "template", template: ["filepaths"] },
            },
          ],
        },
        {
          name: "logs",
          description: "Show the logs of a PipelineRun",
          options: [
            {
              name: ["--all", "-a"],
              description:
                "Show all logs including init steps injected by tekton",
            },
            { name: ["--follow", "-f"], description: "Stream live logs" },
            {
              name: ["--fzf", "-F"],
              description: "Use fzf to select a PipelineRun",
            },
            {
              name: ["--exit-with-pipelinerun-error", "-E"],
              description:
                "Exit with pipelinerun to the unix shell, 0 if success, 1 if error or unknown status",
            },
            {
              name: ["--last", "-L"],
              description: "Show logs for last PipelineRun",
            },
            {
              name: "--limit",
              description: "Lists number of PipelineRuns",
              args: { name: "limit", default: "5" },
            },
            {
              name: "--log-failed",
              description: "Show logs for failed tasks and steps only",
            },
            {
              name: "--long",
              description:
                "Show logs with task display name (display name and step name)",
            },
            {
              name: "--prefix",
              description:
                "Prefix each log line with the log source (task name and step name)",
            },
            {
              name: ["--task", "-t"],
              description: "Show logs for mentioned Tasks only",
              isRepeatable: true,
              args: { name: "task" },
            },
            { name: "--timestamps", description: "Show logs with timestamp" },
          ],
        },
      ],
      options: [
        {
          name: ["--context", "-c"],
          description:
            "Name of the kubeconfig context to use (default: kubectl config current-context)",
          isPersistent: true,
          args: { name: "context" },
        },
        {
          name: ["--kubeconfig", "-k"],
          description: "Kubectl config file (default: $HOME/.kube/config)",
          isPersistent: true,
          args: { name: "kubeconfig" },
        },
        {
          name: ["--namespace", "-n"],
          description: "Namespace to use (default: from $KUBECONFIG)",
          isPersistent: true,
          args: { name: "namespace" },
        },
        {
          name: ["--no-color", "-C"],
          description: "Disable coloring (default: false)",
          isPersistent: true,
        },
        {
          name: "--nocolour",
          description: "Disable colouring (default: false)",
          isPersistent: true,
          hidden: true,
        },
      ],
    },
    {
      name: ["t", "tasks", "task"],
      description: "Manage Tasks",
      subcommands: [
        {
          name: ["rm", "delete"],
          description: "Delete Tasks in a namespace",
          options: [
            {
              name: "--all",
              description: "Delete all Tasks in a namespace (default: false)",
            },
            {
              name: ["--force", "-f"],
              description: "Whether to force deletion (default: false)",
            },
            deleteOutput,
            {
              name: "--trs",
              description:
                "Whether to delete Task(s) and related resources (TaskRuns) (default: false)",
            },
          ],
        },
        {
          name: ["desc", "describe"],
          description: "Describe a Task in a namespace",
          options: [
            {
              name: "--allow-missing-template-keys",
              description:
                "If true, ignore any errors in templates when a field or map key is missing in the template. Only applies to golang and jsonpath output formats",
            },
            {
              name: ["--output", "-o"],
              description:
                "Output format. One of: (json, yaml, name, go-template, go-template-file, template, templatefile, jsonpath, jsonpath-as-json, jsonpath-file)",
              args: { name: "output", suggestions: printOutputFormats },
            },
            {
              name: "--show-managed-fields",
              description:
                "If true, keep the managedFields when printing objects in JSON or YAML format",
            },
            {
              name: "--template",
              description:
                "Template string or path to template file to use when -o=go-template, -o=go-template-file. The template format is golang templates [http://golang.org/pkg/text/template/#pkg-overview]",
              args: { name: "template", template: ["filepaths"] },
            },
          ],
        },
        {
          name: ["ls", "list"],
          description: "Lists Tasks in a namespace",
          options: [
            {
              name: ["--all-namespaces", "-A"],
              description: "List Tasks from all namespaces",
            },
            {
              name: "--allow-missing-template-keys",
              description:
                "If true, ignore any errors in templates when a field or map key is missing in the template. Only applies to golang and jsonpath output formats",
            },
            {
              name: "--no-headers",
              description:
                "Do not print column headers with output (default print column headers with output)",
            },
            {
              name: ["--output", "-o"],
              description:
                "Output format. One of: (json, yaml, name, go-template, go-template-file, template, templatefile, jsonpath, jsonpath-as-json, jsonpath-file)",
              args: { name: "output", suggestions: printOutputFormats },
            },
            {
              name: "--show-managed-fields",
              description:
                "If true, keep the managedFields when printing objects in JSON or YAML format",
            },
            {
              name: "--template",
              description:
                "Template string or path to template file to use when -o=go-template, -o=go-template-file. The template format is golang templates [http://golang.org/pkg/text/template/#pkg-overview]",
              args: { name: "template", template: ["filepaths"] },
            },
          ],
        },
        {
          name: "logs",
          description: "Show Task logs",
          options: [
            {
              name: ["--all", "-a"],
              description:
                "Show all logs including init steps injected by tekton",
            },
            { name: ["--follow", "-f"], description: "Stream live logs" },
            {
              name: ["--last", "-L"],
              description: "Show logs for last TaskRun",
            },
            {
              name: "--limit",
              description: "Lists number of TaskRuns",
              args: { name: "limit", default: "5" },
            },
            {
              name: ["--timestamps", "-t"],
              description: "Show logs with timestamp",
            },
          ],
        },
        {
          name: "sign",
          description: "Sign Tekton Task",
          options: [
            {
              name: "--allow-missing-template-keys",
              description:
                "If true, ignore any errors in templates when a field or map key is missing in the template. Only applies to golang and jsonpath output formats",
            },
            {
              name: ["--file-name", "-f"],
              description:
                "File name of the signed task, using the original file name will overwrite the file",
              args: { name: "file-name" },
            },
            {
              name: ["--key-file", "-K"],
              description: "Key file",
              args: { name: "key-file" },
            },
            {
              name: ["--kms-key", "-m"],
              description: "KMS key url",
              args: { name: "kms-key" },
            },
            {
              name: ["--output", "-o"],
              description:
                "Output format. One of: (json, yaml, name, go-template, go-template-file, template, templatefile, jsonpath, jsonpath-as-json, jsonpath-file)",
              args: { name: "output", suggestions: printOutputFormats },
            },
            {
              name: "--show-managed-fields",
              description:
                "If true, keep the managedFields when printing objects in JSON or YAML format",
            },
            {
              name: "--template",
              description:
                "Template string or path to template file to use when -o=go-template, -o=go-template-file. The template format is golang templates [http://golang.org/pkg/text/template/#pkg-overview]",
              args: { name: "template", template: ["filepaths"] },
            },
          ],
        },
        {
          name: "start",
          description: "Start Tasks",
          options: [
            {
              name: "--dry-run",
              description: "Preview TaskRun without running it",
            },
            {
              name: ["--filename", "-f"],
              description:
                "Local or remote file name containing a Task definition to start a TaskRun",
              args: { name: "filename" },
            },
            {
              name: ["--image", "-i"],
              description: "Use an oci bundle",
              args: { name: "image" },
            },
            {
              name: "--json",
              description:
                "TaskRun spec as JSON (inline, '-' for stdin, or '@path' for a file)",
              args: { name: "json" },
            },
            {
              name: ["--labels", "-l"],
              description: "Pass labels as label=value",
              isRepeatable: true,
              args: { name: "labels" },
            },
            {
              name: ["--last", "-L"],
              description: "Re-run the Task using last TaskRun values",
            },
            {
              name: "--output",
              description: "Format of TaskRun (yaml or json)",
              args: { name: "output", suggestions: ["yaml", "json"] },
            },
            {
              name: ["--param", "-p"],
              description:
                'Pass the param as key=value for string type, or key=value1,value2,... for array type, or key="key1:value1, key2:value2" for object type',
              isRepeatable: true,
              args: { name: "param" },
            },
            {
              name: "--pod-template",
              description:
                "Local or remote file containing a PodTemplate definition",
              args: { name: "pod-template" },
            },
            {
              name: "--prefix-name",
              description:
                "Specify a prefix for the TaskRun name (must be lowercase alphanumeric characters)",
              args: { name: "prefix-name" },
            },
            ...remoteOptions,
            {
              name: ["--serviceaccount", "-s"],
              description: "Pass the serviceaccount name",
              args: { name: "serviceaccount" },
            },
            {
              name: "--showlog",
              description: "Show logs right after starting the Task",
            },
            {
              name: "--skip-optional-workspace",
              description: "Skips the prompt for optional workspaces",
            },
            {
              name: "--timeout",
              description: "Timeout for TaskRun",
              args: { name: "timeout" },
            },
            {
              name: "--use-param-defaults",
              description:
                "Use default parameter values without prompting for input",
            },
            {
              name: "--use-taskrun",
              description:
                "Specify a TaskRun name to use its values to re-run the TaskRun",
              args: { name: "use-taskrun" },
            },
            {
              name: ["--workspace", "-w"],
              description:
                "Pass one or more workspaces to map to the corresponding physical volumes",
              isRepeatable: true,
              args: { name: "workspace" },
            },
          ],
        },
        {
          name: "verify",
          description: "Verify Tekton Task",
          options: [
            {
              name: "--allow-missing-template-keys",
              description:
                "If true, ignore any errors in templates when a field or map key is missing in the template. Only applies to golang and jsonpath output formats",
            },
            {
              name: ["--key-file", "-K"],
              description: "Key file",
              args: { name: "key-file" },
            },
            {
              name: ["--kms-key", "-m"],
              description: "KMS key url",
              args: { name: "kms-key" },
            },
            {
              name: ["--output", "-o"],
              description:
                "Output format. One of: (json, yaml, name, go-template, go-template-file, template, templatefile, jsonpath, jsonpath-as-json, jsonpath-file)",
              args: { name: "output", suggestions: printOutputFormats },
            },
            {
              name: "--show-managed-fields",
              description:
                "If true, keep the managedFields when printing objects in JSON or YAML format",
            },
            {
              name: "--template",
              description:
                "Template string or path to template file to use when -o=go-template, -o=go-template-file. The template format is golang templates [http://golang.org/pkg/text/template/#pkg-overview]",
              args: { name: "template", template: ["filepaths"] },
            },
          ],
        },
      ],
      options: [
        {
          name: ["--context", "-c"],
          description:
            "Name of the kubeconfig context to use (default: kubectl config current-context)",
          isPersistent: true,
          args: { name: "context" },
        },
        {
          name: ["--kubeconfig", "-k"],
          description: "Kubectl config file (default: $HOME/.kube/config)",
          isPersistent: true,
          args: { name: "kubeconfig" },
        },
        {
          name: ["--namespace", "-n"],
          description: "Namespace to use (default: from $KUBECONFIG)",
          isPersistent: true,
          args: { name: "namespace" },
        },
        {
          name: ["--no-color", "-C"],
          description: "Disable coloring (default: false)",
          isPersistent: true,
        },
        {
          name: "--nocolour",
          description: "Disable colouring (default: false)",
          isPersistent: true,
          hidden: true,
        },
      ],
    },
    {
      name: ["tr", "taskruns", "taskrun"],
      description: "Manage TaskRuns",
      subcommands: [
        {
          name: "cancel",
          description: "Cancel a TaskRun in a namespace",
          options: [jsonYamlOutput],
        },
        {
          name: ["rm", "delete"],
          description: "Delete TaskRuns in a namespace",
          options: [
            {
              name: "--all",
              description:
                "Delete all TaskRuns in a namespace (default: false)",
            },
            {
              name: ["--force", "-f"],
              description: "Whether to force deletion (default: false)",
            },
            {
              name: ["--ignore-running", "-i"],
              description: "Ignore running TaskRun (default: true)",
            },
            {
              name: "--ignore-running-pipelinerun",
              description:
                "Ignore deleting taskruns of a running PipelineRun (default: true)",
            },
            {
              name: "--keep",
              description: "Keep n most recent number of TaskRuns",
              args: { name: "keep", default: "0" },
            },
            {
              name: "--keep-since",
              description:
                "When deleting all TaskRuns keep the ones that has been completed since n minutes",
              args: { name: "keep-since", default: "0" },
            },
            deleteOutput,
            {
              name: ["--task", "-t"],
              description:
                "The name of a Task whose TaskRuns should be deleted (does not delete the task)",
              args: { name: "task" },
            },
          ],
        },
        {
          name: ["desc", "describe"],
          description: "Describe a TaskRun in a namespace",
          options: [
            {
              name: "--allow-missing-template-keys",
              description:
                "If true, ignore any errors in templates when a field or map key is missing in the template. Only applies to golang and jsonpath output formats",
            },
            {
              name: ["--fzf", "-F"],
              description: "Use fzf to select a taskrun to describe",
            },
            {
              name: ["--last", "-L"],
              description: "Show description for last TaskRun",
            },
            {
              name: "--limit",
              description:
                "Lists number of TaskRuns when selecting a TaskRun to describe",
              args: { name: "limit", default: "5" },
            },
            {
              name: ["--output", "-o"],
              description:
                "Output format. One of: (json, yaml, name, go-template, go-template-file, template, templatefile, jsonpath, jsonpath-as-json, jsonpath-file)",
              args: { name: "output", suggestions: printOutputFormats },
            },
            {
              name: "--show-managed-fields",
              description:
                "If true, keep the managedFields when printing objects in JSON or YAML format",
            },
            {
              name: "--template",
              description:
                "Template string or path to template file to use when -o=go-template, -o=go-template-file. The template format is golang templates [http://golang.org/pkg/text/template/#pkg-overview]",
              args: { name: "template", template: ["filepaths"] },
            },
          ],
        },
        {
          name: "export",
          description: "Export TaskRun",
          options: [
            {
              name: "--allow-missing-template-keys",
              description:
                "If true, ignore any errors in templates when a field or map key is missing in the template. Only applies to golang and jsonpath output formats",
            },
            {
              name: ["--output", "-o"],
              description:
                "Output format. One of: (json, yaml, name, go-template, go-template-file, template, templatefile, jsonpath, jsonpath-as-json, jsonpath-file)",
              args: { name: "output", suggestions: printOutputFormats },
            },
            {
              name: "--show-managed-fields",
              description:
                "If true, keep the managedFields when printing objects in JSON or YAML format",
            },
            {
              name: "--template",
              description:
                "Template string or path to template file to use when -o=go-template, -o=go-template-file. The template format is golang templates [http://golang.org/pkg/text/template/#pkg-overview]",
              args: { name: "template", template: ["filepaths"] },
            },
          ],
        },
        {
          name: ["ls", "list"],
          description: "Lists TaskRuns in a namespace",
          options: [
            {
              name: ["--all-namespaces", "-A"],
              description: "List TaskRuns from all namespaces",
            },
            {
              name: "--allow-missing-template-keys",
              description:
                "If true, ignore any errors in templates when a field or map key is missing in the template. Only applies to golang and jsonpath output formats",
            },
            {
              name: "--label",
              description:
                "A selector (label query) to filter on, supports '=', '==', and '!='",
              args: { name: "label" },
            },
            {
              name: "--limit",
              description:
                "Limits the number of TaskRuns. If the limit value is 0 returns all",
              args: { name: "limit", default: "0" },
            },
            {
              name: "--no-headers",
              description:
                "Do not print column headers with output (default print column headers with output)",
            },
            {
              name: ["--output", "-o"],
              description:
                "Output format. One of: (json, yaml, name, go-template, go-template-file, template, templatefile, jsonpath, jsonpath-as-json, jsonpath-file)",
              args: { name: "output", suggestions: printOutputFormats },
            },
            {
              name: "--reverse",
              description: "List TaskRuns in reverse order",
            },
            {
              name: "--show-managed-fields",
              description:
                "If true, keep the managedFields when printing objects in JSON or YAML format",
            },
            {
              name: "--template",
              description:
                "Template string or path to template file to use when -o=go-template, -o=go-template-file. The template format is golang templates [http://golang.org/pkg/text/template/#pkg-overview]",
              args: { name: "template", template: ["filepaths"] },
            },
          ],
        },
        {
          name: "logs",
          description: "Show TaskRuns logs",
          options: [
            {
              name: ["--all", "-a"],
              description:
                "Show all logs including init steps injected by tekton",
            },
            { name: ["--follow", "-f"], description: "Stream live logs" },
            {
              name: ["--fzf", "-F"],
              description: "Use fzf to select a TaskRun",
            },
            {
              name: ["--last", "-L"],
              description: "Show logs for last TaskRun",
            },
            {
              name: "--limit",
              description: "Lists number of TaskRuns",
              args: { name: "limit", default: "5" },
            },
            {
              name: "--prefix",
              description:
                "Prefix each log line with the log source (step name)",
            },
            {
              name: ["--step", "-s"],
              description: "Show logs for mentioned steps only",
              isRepeatable: true,
              args: { name: "step" },
            },
            {
              name: ["--timestamps", "-t"],
              description: "Show logs with timestamp",
            },
          ],
        },
      ],
      options: [
        {
          name: ["--context", "-c"],
          description:
            "Name of the kubeconfig context to use (default: kubectl config current-context)",
          isPersistent: true,
          args: { name: "context" },
        },
        {
          name: ["--kubeconfig", "-k"],
          description: "Kubectl config file (default: $HOME/.kube/config)",
          isPersistent: true,
          args: { name: "kubeconfig" },
        },
        {
          name: ["--namespace", "-n"],
          description: "Namespace to use (default: from $KUBECONFIG)",
          isPersistent: true,
          args: { name: "namespace" },
        },
        {
          name: ["--no-color", "-C"],
          description: "Disable coloring (default: false)",
          isPersistent: true,
        },
        {
          name: "--nocolour",
          description: "Disable colouring (default: false)",
          isPersistent: true,
          hidden: true,
        },
      ],
    },
    {
      name: ["tb", "triggerbindings", "triggerbinding"],
      description: "Manage TriggerBindings",
      subcommands: [
        {
          name: ["rm", "delete"],
          description: "Delete TriggerBindings in a namespace",
          options: [
            {
              name: "--all",
              description:
                "Delete all TriggerBindings in a namespace (default: false)",
            },
            {
              name: ["--force", "-f"],
              description: "Whether to force deletion (default: false)",
            },
            deleteOutput,
          ],
        },
        {
          name: ["desc", "describe"],
          description: "Describes a TriggerBinding in a namespace",
          options: [
            {
              name: "--allow-missing-template-keys",
              description:
                "If true, ignore any errors in templates when a field or map key is missing in the template. Only applies to golang and jsonpath output formats",
            },
            {
              name: ["--output", "-o"],
              description:
                "Output format. One of: (json, yaml, name, go-template, go-template-file, template, templatefile, jsonpath, jsonpath-as-json, jsonpath-file)",
              args: { name: "output", suggestions: printOutputFormats },
            },
            {
              name: "--show-managed-fields",
              description:
                "If true, keep the managedFields when printing objects in JSON or YAML format",
            },
            {
              name: "--template",
              description:
                "Template string or path to template file to use when -o=go-template, -o=go-template-file. The template format is golang templates [http://golang.org/pkg/text/template/#pkg-overview]",
              args: { name: "template", template: ["filepaths"] },
            },
          ],
        },
        {
          name: ["ls", "list"],
          description: "Lists TriggerBindings in a namespace",
          options: [
            {
              name: ["--all-namespaces", "-A"],
              description: "List TriggerBindings from all namespaces",
            },
            {
              name: "--allow-missing-template-keys",
              description:
                "If true, ignore any errors in templates when a field or map key is missing in the template. Only applies to golang and jsonpath output formats",
            },
            {
              name: "--no-headers",
              description:
                "Do not print column headers with output (default print column headers with output)",
            },
            {
              name: ["--output", "-o"],
              description:
                "Output format. One of: (json, yaml, name, go-template, go-template-file, template, templatefile, jsonpath, jsonpath-as-json, jsonpath-file)",
              args: { name: "output", suggestions: printOutputFormats },
            },
            {
              name: "--show-managed-fields",
              description:
                "If true, keep the managedFields when printing objects in JSON or YAML format",
            },
            {
              name: "--template",
              description:
                "Template string or path to template file to use when -o=go-template, -o=go-template-file. The template format is golang templates [http://golang.org/pkg/text/template/#pkg-overview]",
              args: { name: "template", template: ["filepaths"] },
            },
          ],
        },
      ],
      options: [
        {
          name: ["--context", "-c"],
          description:
            "Name of the kubeconfig context to use (default: kubectl config current-context)",
          isPersistent: true,
          args: { name: "context" },
        },
        {
          name: ["--kubeconfig", "-k"],
          description: "Kubectl config file (default: $HOME/.kube/config)",
          isPersistent: true,
          args: { name: "kubeconfig" },
        },
        {
          name: ["--namespace", "-n"],
          description: "Namespace to use (default: from $KUBECONFIG)",
          isPersistent: true,
          args: { name: "namespace" },
        },
        {
          name: ["--no-color", "-C"],
          description: "Disable coloring (default: false)",
          isPersistent: true,
        },
        {
          name: "--nocolour",
          description: "Disable colouring (default: false)",
          isPersistent: true,
          hidden: true,
        },
      ],
    },
    {
      name: ["tt", "triggertemplates", "triggertemplate"],
      description: "Manage TriggerTemplates",
      subcommands: [
        {
          name: ["rm", "delete"],
          description: "Delete TriggerTemplates in a namespace",
          options: [
            {
              name: "--all",
              description:
                "Delete all TriggerTemplates in a namespace (default: false)",
            },
            {
              name: ["--force", "-f"],
              description: "Whether to force deletion (default: false)",
            },
            deleteOutput,
          ],
        },
        {
          name: ["desc", "describe"],
          description: "Describes a TriggerTemplate in a namespace",
          options: [
            {
              name: "--allow-missing-template-keys",
              description:
                "If true, ignore any errors in templates when a field or map key is missing in the template. Only applies to golang and jsonpath output formats",
            },
            {
              name: ["--output", "-o"],
              description:
                "Output format. One of: (json, yaml, name, go-template, go-template-file, template, templatefile, jsonpath, jsonpath-as-json, jsonpath-file)",
              args: { name: "output", suggestions: printOutputFormats },
            },
            {
              name: "--show-managed-fields",
              description:
                "If true, keep the managedFields when printing objects in JSON or YAML format",
            },
            {
              name: "--template",
              description:
                "Template string or path to template file to use when -o=go-template, -o=go-template-file. The template format is golang templates [http://golang.org/pkg/text/template/#pkg-overview]",
              args: { name: "template", template: ["filepaths"] },
            },
          ],
        },
        {
          name: ["ls", "list"],
          description: "Lists TriggerTemplates in a namespace",
          options: [
            {
              name: ["--all-namespaces", "-A"],
              description: "List TriggerTemplates from all namespaces",
            },
            {
              name: "--allow-missing-template-keys",
              description:
                "If true, ignore any errors in templates when a field or map key is missing in the template. Only applies to golang and jsonpath output formats",
            },
            {
              name: "--no-headers",
              description:
                "Do not print column headers with output (default print column headers with output)",
            },
            {
              name: ["--output", "-o"],
              description:
                "Output format. One of: (json, yaml, name, go-template, go-template-file, template, templatefile, jsonpath, jsonpath-as-json, jsonpath-file)",
              args: { name: "output", suggestions: printOutputFormats },
            },
            {
              name: "--show-managed-fields",
              description:
                "If true, keep the managedFields when printing objects in JSON or YAML format",
            },
            {
              name: "--template",
              description:
                "Template string or path to template file to use when -o=go-template, -o=go-template-file. The template format is golang templates [http://golang.org/pkg/text/template/#pkg-overview]",
              args: { name: "template", template: ["filepaths"] },
            },
          ],
        },
      ],
      options: [
        {
          name: ["--context", "-c"],
          description:
            "Name of the kubeconfig context to use (default: kubectl config current-context)",
          isPersistent: true,
          args: { name: "context" },
        },
        {
          name: ["--kubeconfig", "-k"],
          description: "Kubectl config file (default: $HOME/.kube/config)",
          isPersistent: true,
          args: { name: "kubeconfig" },
        },
        {
          name: ["--namespace", "-n"],
          description: "Namespace to use (default: from $KUBECONFIG)",
          isPersistent: true,
          args: { name: "namespace" },
        },
        {
          name: ["--no-color", "-C"],
          description: "Disable coloring (default: false)",
          isPersistent: true,
        },
        {
          name: "--nocolour",
          description: "Disable colouring (default: false)",
          isPersistent: true,
          hidden: true,
        },
      ],
    },
    {
      name: "version",
      description: "Prints version information",
      options: [
        {
          name: "--check",
          description: "Check if a newer version is available",
        },
        {
          name: "--component",
          description:
            "Provide a particular component name for its version (client|chains|pipeline|triggers|dashboard)",
          args: {
            name: "component",
            suggestions: [
              "client",
              "chains",
              "pipeline",
              "triggers",
              "dashboard",
            ],
          },
        },
        {
          name: ["--context", "-c"],
          description:
            "Name of the kubeconfig context to use (default: kubectl config current-context)",
          isPersistent: true,
          args: { name: "context" },
        },
        {
          name: ["--kubeconfig", "-k"],
          description: "Kubectl config file (default: $HOME/.kube/config)",
          isPersistent: true,
          args: { name: "kubeconfig" },
        },
        {
          name: ["--namespace", "-n"],
          description: "Namespace to check installed controller version",
          isPersistent: true,
          args: { name: "namespace" },
        },
        {
          name: ["--no-color", "-C"],
          description: "Disable coloring (default: false)",
          isPersistent: true,
        },
        jsonYamlOutput,
        {
          name: "--nocolour",
          description: "Disable colouring (default: false)",
          isPersistent: true,
          hidden: true,
        },
      ],
    },
    {
      name: "help",
      description: "Help about any command",
      subcommands: [
        {
          name: ["tkb", "bundles", "bundle"],
          description: "Manage Tekton Bundles",
          subcommands: [
            {
              name: "list",
              description: "List and print a Tekton bundle's contents",
            },
            { name: "push", description: "Create or replace a Tekton bundle" },
          ],
        },
        {
          name: ["ctb", "clustertriggerbindings", "clustertriggerbinding"],
          description: "Manage ClusterTriggerBindings",
          subcommands: [
            {
              name: ["rm", "delete"],
              description: "Delete ClusterTriggerBindings",
            },
            {
              name: ["desc", "describe"],
              description: "Describes a ClusterTriggerBinding",
            },
            {
              name: ["ls", "list"],
              description: "Lists ClusterTriggerBindings in a namespace",
            },
          ],
        },
        { name: "completion", description: "Prints shell completion scripts" },
        {
          name: ["cr", "customruns", "customrun"],
          description: "Manage CustomRuns",
          subcommands: [
            {
              name: ["rm", "delete"],
              description: "Delete CustomRuns in a namespace",
            },
            {
              name: ["desc", "describe"],
              description: "Describe a CustomRun in a namespace",
            },
            {
              name: ["ls", "list"],
              description: "Lists CustomRuns in a namespace",
            },
          ],
        },
        {
          name: ["el", "eventlisteners", "eventlistener"],
          description: "Manage EventListeners",
          subcommands: [
            {
              name: ["rm", "delete"],
              description: "Delete EventListeners in a namespace",
            },
            {
              name: ["desc", "describe"],
              description: "Describe EventListener in a namespace",
            },
            {
              name: ["ls", "list"],
              description: "Lists EventListeners in a namespace",
            },
            { name: "logs", description: "Show EventListener logs" },
          ],
        },
        {
          name: "hub",
          description: "Interact with artifacthub",
          subcommands: [
            {
              name: "check-upgrade",
              description: "Check for upgrades of resources if present",
              subcommands: [
                {
                  name: "task",
                  description: "Check updates for Task installed via Hub CLI",
                },
              ],
            },
            {
              name: "downgrade",
              description: "Downgrade an installed resource",
              subcommands: [
                {
                  name: "task",
                  description:
                    "Downgrade an installed Task by its name to a lower version",
                },
              ],
            },
            {
              name: "get",
              description:
                "Get resource manifest by its name, kind, catalog, and version",
              subcommands: [
                {
                  name: "pipeline",
                  description: "Get Pipeline by name, catalog and version",
                },
                {
                  name: "task",
                  description: "Get Task by name, catalog and version",
                },
              ],
            },
            {
              name: "info",
              description:
                "Display info of resource by its name, kind, catalog, and version",
              subcommands: [
                {
                  name: "task",
                  description:
                    "Display info of Task by its name, catalog and version",
                },
              ],
            },
            {
              name: "install",
              description:
                "Install a resource from a catalog by its kind, name and version",
              subcommands: [
                {
                  name: "task",
                  description:
                    "Install Task from a catalog by its name and version",
                },
              ],
            },
            {
              name: "reinstall",
              description: "Reinstall a resource by its kind and name",
              subcommands: [
                { name: "task", description: "Reinstall a Task by its name" },
              ],
            },
            {
              name: "search",
              description:
                "Search resource by a combination of name, kind, categories, platforms, and tags",
            },
            {
              name: "upgrade",
              description: "Upgrade an installed resource",
              subcommands: [
                { name: "task", description: "Upgrade a Task by its name" },
              ],
            },
          ],
        },
        {
          name: ["p", "pipelines", "pipeline"],
          description: "Manage pipelines",
          subcommands: [
            {
              name: ["rm", "delete"],
              description: "Delete Pipelines in a namespace",
            },
            {
              name: ["desc", "describe"],
              description: "Describes a Pipeline in a namespace",
            },
            { name: "export", description: "Export Pipeline" },
            {
              name: ["ls", "list"],
              description: "Lists Pipelines in a namespace",
            },
            { name: "logs", description: "Show Pipeline logs" },
            { name: "sign", description: "Sign Tekton Pipeline" },
            { name: "start", description: "Start Pipelines" },
            { name: "verify", description: "Verify Tekton Pipeline" },
          ],
        },
        {
          name: ["pr", "pipelineruns", "pipelinerun"],
          description: "Manage PipelineRuns",
          subcommands: [
            {
              name: "cancel",
              description: "Cancel a PipelineRun in a namespace",
            },
            {
              name: ["rm", "delete"],
              description: "Delete PipelineRuns in a namespace",
            },
            {
              name: ["desc", "describe"],
              description: "Describe a PipelineRun in a namespace",
            },
            { name: "export", description: "Export PipelineRun" },
            {
              name: ["ls", "list"],
              description: "Lists PipelineRuns in a namespace",
            },
            { name: "logs", description: "Show the logs of a PipelineRun" },
          ],
        },
        {
          name: ["t", "tasks", "task"],
          description: "Manage Tasks",
          subcommands: [
            {
              name: ["rm", "delete"],
              description: "Delete Tasks in a namespace",
            },
            {
              name: ["desc", "describe"],
              description: "Describe a Task in a namespace",
            },
            { name: ["ls", "list"], description: "Lists Tasks in a namespace" },
            { name: "logs", description: "Show Task logs" },
            { name: "sign", description: "Sign Tekton Task" },
            { name: "start", description: "Start Tasks" },
            { name: "verify", description: "Verify Tekton Task" },
          ],
        },
        {
          name: ["tr", "taskruns", "taskrun"],
          description: "Manage TaskRuns",
          subcommands: [
            { name: "cancel", description: "Cancel a TaskRun in a namespace" },
            {
              name: ["rm", "delete"],
              description: "Delete TaskRuns in a namespace",
            },
            {
              name: ["desc", "describe"],
              description: "Describe a TaskRun in a namespace",
            },
            { name: "export", description: "Export TaskRun" },
            {
              name: ["ls", "list"],
              description: "Lists TaskRuns in a namespace",
            },
            { name: "logs", description: "Show TaskRuns logs" },
          ],
        },
        {
          name: ["tb", "triggerbindings", "triggerbinding"],
          description: "Manage TriggerBindings",
          subcommands: [
            {
              name: ["rm", "delete"],
              description: "Delete TriggerBindings in a namespace",
            },
            {
              name: ["desc", "describe"],
              description: "Describes a TriggerBinding in a namespace",
            },
            {
              name: ["ls", "list"],
              description: "Lists TriggerBindings in a namespace",
            },
          ],
        },
        {
          name: ["tt", "triggertemplates", "triggertemplate"],
          description: "Manage TriggerTemplates",
          subcommands: [
            {
              name: ["rm", "delete"],
              description: "Delete TriggerTemplates in a namespace",
            },
            {
              name: ["desc", "describe"],
              description: "Describes a TriggerTemplate in a namespace",
            },
            {
              name: ["ls", "list"],
              description: "Lists TriggerTemplates in a namespace",
            },
          ],
        },
        { name: "version", description: "Prints version information" },
      ],
    },
  ],
  options: [
    { name: ["--help", "-h"], description: "Display help", isPersistent: true },
  ],
};
export default completionSpec;
