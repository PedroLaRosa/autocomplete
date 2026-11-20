// kubectl v1.37.2 (kubernetes/kubernetes tag v1.37.2 = Homebrew kubernetes-cli
// and dl.k8s.io stable, 2026-11-20). Source: `kubectl --help` walk on v1.34.1
// plus the 1.35-1.37 changelogs, re-audited on 2026-11-20 against the
// kubernetes/kubectl v0.37.2 and cli-runtime v0.37.2 sources (pkg/cmd command
// tree, flag definitions, output formats; read statically, binary not run).

// Internal scripts for this spec, not to be confused with the script property
const scripts = {
  types: ["kubectl", "api-resources", "-o", "name"],
  typeWithoutName: function (type) {
    return ["kubectl", "get", type, "-o", "custom-columns=:.metadata.name"];
  },
};

const sharedPostProcessChecks = {
  connectedToCluster: (out) => {
    return out.includes("The connection to the server");
  },
  generalError: (out) => {
    return out.includes("error:");
  },
};

const sharedPostProcess: Fig.Generator["postProcess"] = (out) => {
  if (
    sharedPostProcessChecks.connectedToCluster(out) ||
    sharedPostProcessChecks.generalError(out)
  ) {
    return [];
  }
  return out.split("\n").map((item) => ({
    name: item,
    icon: "fig://icon?type=kubernetes",
  })) as Fig.Suggestion[];
};

const sharedArgs: Record<string, Fig.Arg> = {
  resourcesArg: {
    name: "Resource Type",
    generators: {
      script: scripts.types,
      cache: {
        strategy: "stale-while-revalidate",
        ttl: 1000 * 60 * 60,
      },
      postProcess: sharedPostProcess,
    },
  },
  runningPodsArg: {
    name: "Running Pods",
    generators: {
      script: [
        "kubectl",
        "get",
        "pods",
        "--field-selector=status.phase=Running",
        "-o",
        "name",
      ],
      postProcess: sharedPostProcess,
    },
  },
  resourceSuggestionsFromResourceType: {
    name: "Resource",
    generators: {
      script: function (context) {
        const resourceType = context[context.length - 2];
        return scripts.typeWithoutName(resourceType);
      },
      postProcess: sharedPostProcess,
      cache: {
        strategy: "stale-while-revalidate",
        ttl: 1000 * 60 * 60,
      },
    },
    isOptional: true,
  },
  listKubeConfContexts: {
    name: "Context",
    generators: {
      script: function (context) {
        const index = context.indexOf("--kubeconfig");
        if (index !== -1) {
          return [
            "kubectl",
            "config",
            `--kubeconfig=${context[index + 1]}`,
            "get-contexts",
            "-o",
            "name",
          ];
        }
        return ["kubectl", "config", "get-contexts", "-o", "name"];
      },
      postProcess: sharedPostProcess,
    },
  },
  listDeployments: {
    name: "Deployments",
    generators: {
      script: scripts.typeWithoutName("deployments"),
      postProcess: sharedPostProcess,
      cache: {
        strategy: "stale-while-revalidate",
        ttl: 1000 * 60 * 60,
      },
    },
  },
  listClusters: {
    name: "Cluster",
    generators: {
      script: function (context) {
        const index = context.indexOf("--kubeconfig");
        if (index !== -1) {
          return [
            "kubectl",
            "config",
            `--kubeconfig=${context[index + 1]}`,
            "get-clusters",
          ];
        }
        return ["kubectl", "config", "get-clusters"];
      },
      postProcess: function (out) {
        if (
          sharedPostProcessChecks.connectedToCluster(out) ||
          sharedPostProcessChecks.generalError(out)
        ) {
          return [];
        }
        return out
          .split("\n")
          .filter((line) => line !== "NAME")
          .map((line) => ({
            name: line,
            icon: "fig://icon?type=kubernetes",
          }));
      },
    },
  },
  typeOrTypeSlashName: {
    name: "TYPE | TYPE/NAME",
    generators: {
      script: function (context) {
        const lastInput = context[context.length - 1];
        if (lastInput.includes("/")) {
          return scripts.typeWithoutName(
            lastInput.substring(0, lastInput.indexOf("/"))
          );
        }
        return scripts.types;
      },
      postProcess: sharedPostProcess,
      trigger: "/",
      getQueryTerm: "/",
      cache: {
        strategy: "stale-while-revalidate",
        ttl: 1000 * 60 * 60,
      },
    },
  },
  listNodes: {
    name: "Node",
    generators: {
      script: scripts.typeWithoutName("nodes"),
      postProcess: sharedPostProcess,
      cache: {
        strategy: "stale-while-revalidate",
        ttl: 1000 * 60 * 60,
      },
    },
  },
  listClusterRoles: {
    name: "Cluster Role",
    generators: {
      script: scripts.typeWithoutName("clusterroles"),
      postProcess: sharedPostProcess,
      cache: {
        strategy: "stale-while-revalidate",
        ttl: 1000 * 60 * 60,
      },
    },
  },
  listContainersFromPod: {
    name: "Container",
    generators: {
      script: (context) => {
        const podIndex = context.findIndex(
          (i) =>
            i === "pods" ||
            i.includes("pods/") ||
            i === "pod" ||
            i.includes("pod/")
        );
        const podName = context[podIndex].includes("/")
          ? context[podIndex]
          : `${context[podIndex]} + ${context[podIndex + 1]}`;
        return ["kubectl", "get", podName, "-o", "json"];
      },
      postProcess: function (out) {
        if (
          sharedPostProcessChecks.connectedToCluster(out) ||
          sharedPostProcessChecks.generalError(out)
        ) {
          return [];
        }
        return JSON.parse(out).spec.containers.map((item) => ({
          name: item.name,
          description: item.image,
          icon: "fig://icon?type=kubernetes",
        }));
      },
    },
  },
};

const sharedOpts: Record<string, Fig.Option> = {
  filename: {
    name: ["-f", "--filename"],
    description:
      "Filename, directory, or URL to files identifying the resource",
    args: {
      name: "File",
      template: "filepaths",
    },
  },
  kustomize: {
    name: ["-k", "--kustomize"],
    description:
      "Process the kustomization directory. This flag can't be used together with -f or -R",
    args: {
      name: "Kustomize Dir",
      template: "folders",
    },
  },
  output: {
    name: ["-o", "--output"],
    description:
      "Output format. One of: json|yaml|kyaml|name|go-template|go-template-file|template|templatefile|jsonpath|jsonpath-as-json|jsonpath-file",
    args: {
      name: "Output Format",
      suggestions: [
        "json",
        "yaml",
        "kyaml",
        "name",
        "go-template",
        "go-template-file",
        "template",
        "templatefile",
        "jsonpath",
        "jsonpath-as-json",
        "jsonpath-file",
      ],
    },
  },
  resourceVersion: {
    name: "--resource-version",
    requiresSeparator: true,
    description:
      "If non-empty, the annotation update will only succeed if this is the current resource-version for the object. Only valid when specifying a single resource",
    args: {},
  },
  dryRun: {
    name: "--dry-run",
    requiresSeparator: true,
    description:
      'Must be "none", "server", or "client". If client strategy, only print the object that would be sent, without sending it. If server strategy, submit server-side request without persisting the resource',
    args: {
      name: "Strategy",
      suggestions: ["none", "server", "client"],
    },
  },
  fieldSelector: {
    name: "--field-selector",
    requiresSeparator: true,
    description:
      "Selector (field query) to filter on, supports '=', '==', and '!='.(e.g. --field-selector key1=value1,key2=value2). The server only supports a limited number of field queries per type",
    args: {},
  },
  local: {
    name: "--local",
    description:
      "If true, annotation will NOT contact api-server but run locally",
  },
  allResources: {
    name: "--all",
    description:
      "Select all resources, including uninitialized ones, in the namespace of the specified resource types",
  },
  allowMissingTemplateKeys: {
    name: "--allow-missing-template-keys",
    description:
      "If true, ignore any errors in templates when a field or map key is missing in the template. Only applies to golang and jsonpath output formats",
  },
  recursive: {
    name: ["-R", "--recursive"],
    description:
      "Process the directory used in -f, --filename recursively. Useful when you want to manage related manifests organized within the same directory",
  },
  selector: {
    name: ["-l", "--selector"],
    description:
      "Selector (label query) to filter on, not including uninitialized ones, supports '=', '==', and '!='.(e.g. -l key1=value1,key2=value2)",
    args: {},
  },
  template: {
    name: "--template",
    requiresSeparator: true,
    description:
      "Template string or path to template file to use when -o=go-template, -o=go-template-file. The template format is golang templates [http://golang.org/pkg/text/template/#pkg-overview]",
    args: {},
  },
  overwrite: {
    name: "--overwrite",
    description:
      "If true, allow annotations to be overwritten, otherwise reject annotation updates that overwrite existing annotations",
  },
  record: {
    name: "--record",
    description:
      "Deprecated, will be removed in the future. Record current kubectl command in the resource annotation",
    deprecated: true,
  },
  allNamespaces: {
    name: ["-A", "--all-namespaces"],
    description:
      "If present, list the requested object(s) across all namespaces. Namespace in current context is ignored even if specified with --namespace",
  },
  fieldManager: {
    name: "--field-manager",
    requiresSeparator: true,
    description: "Name of the manager used to track field ownership",
    args: { name: "Field Manager" },
  },
  showManagedFields: {
    name: "--show-managed-fields",
    description:
      "If true, keep the managedFields when printing objects in JSON or YAML format",
  },
  subresource: {
    name: "--subresource",
    requiresSeparator: true,
    description:
      "If specified, the command will operate on the subresource of the requested object",
    args: { name: "Subresource", suggestions: ["status", "scale", "resize"] },
  },
  validate: {
    name: "--validate",
    requiresSeparator: true,
    description:
      'Must be one of: strict (or true), warn, ignore (or false). "strict" fails the request on schema errors, "warn" only warns about unknown or duplicate fields, "ignore" skips schema validation',
    args: {
      name: "Mode",
      isOptional: true,
      suggestions: ["strict", "warn", "ignore", "true", "false"],
    },
  },
  cascade: {
    name: "--cascade",
    requiresSeparator: true,
    description:
      'Must be "background", "orphan", or "foreground". Selects the deletion cascading strategy for the dependents (e.g. Pods created by a ReplicationController). Defaults to background',
    args: {
      name: "Strategy",
      isOptional: true,
      suggestions: ["background", "orphan", "foreground"],
    },
  },
  chunkSize: {
    name: "--chunk-size",
    requiresSeparator: true,
    description:
      "Return large lists in chunks rather than all at once. Pass 0 to disable",
    args: { name: "INT" },
  },
  quiet: {
    name: ["-q", "--quiet"],
    description: "If true, suppress prompt messages",
  },
  overrideType: {
    name: "--override-type",
    requiresSeparator: true,
    description:
      "The method used to override the generated object: json, merge, or strategic",
    args: { suggestions: ["json", "merge", "strategic"] },
  },
};

// `-o` for commands that print objects through kubectl's resource printers
const outputWithTableFormats: Fig.Option = {
  ...sharedOpts.output,
  description: `${sharedOpts.output.description}|wide|custom-columns|custom-columns-file`,
  args: {
    name: "Output Format",
    suggestions: [
      ...(sharedOpts.output.args as Fig.Arg).suggestions,
      "wide",
      "custom-columns",
      "custom-columns-file",
    ],
  },
};

// Standard RBAC verbs accepted by `create role` and `create clusterrole`
const resourceVerbs = [
  "*",
  "get",
  "delete",
  "list",
  "create",
  "update",
  "patch",
  "watch",
  "proxy",
  "deletecollection",
  "use",
  "bind",
  "escalate",
  "impersonate",
];

// `-o` for commands that accept only a few output formats
const outputFormats = (
  formats: string[],
  description = `Output format. One of: ${formats.join("|")}`
): Fig.Option => ({
  name: ["-o", "--output"],
  description,
  args: { name: "Output Format", suggestions: formats },
});

const detachKeys: Fig.Option = {
  name: "--detach-keys",
  requiresSeparator: true,
  description: "Override the key sequence for detaching a container",
  args: { name: "Key Sequence" },
};

const persistent = (options: Fig.Option[]): Fig.Option[] =>
  options.map((option) => ({ ...option, isPersistent: true }));

// Shared by `top node` and `top pod`
const topNoHeaders: Fig.Option = {
  name: "--no-headers",
  description: "If present, print output without headers",
};
const topUseProtocolBuffers: Fig.Option = {
  name: "--use-protocol-buffers",
  description: "Enables using protocol-buffers to access Metrics API",
};
const topShowSwap: Fig.Option = {
  name: "--show-swap",
  description: "Print resources related to swap memory",
};
const topSortBy: Fig.Option = {
  name: "--sort-by",
  requiresSeparator: true,
  description: "If non-empty, sort the list using specified field",
  args: { suggestions: ["cpu", "memory"] },
};

const completionSpec: Fig.Spec = {
  name: "kubectl",
  description: "Kubernetes command-line tool",
  subcommands: [
    {
      name: "annotate",
      description: "Update the annotations on one or more resources",
      args: [
        sharedArgs.resourcesArg,
        sharedArgs.resourceSuggestionsFromResourceType,
        // * INFO: Fig doesn't display options if varidic is true
        {
          name: "KEY=VAL",
          isVariadic: true,
        },
      ],
      options: [
        sharedOpts.filename,
        sharedOpts.kustomize,
        sharedOpts.output,
        sharedOpts.resourceVersion,
        sharedOpts.dryRun,
        sharedOpts.fieldSelector,
        sharedOpts.local,
        sharedOpts.allResources,
        sharedOpts.allNamespaces,
        sharedOpts.allowMissingTemplateKeys,
        sharedOpts.recursive,
        sharedOpts.selector,
        sharedOpts.template,
        sharedOpts.overwrite,
        sharedOpts.record,
        sharedOpts.fieldManager,
        sharedOpts.showManagedFields,
        {
          name: "--list",
          description: "If true, display the annotations for a given resource",
        },
      ],
    },
    {
      name: "api-resources",
      description: "Print the supported API resources on the server",
      options: [
        outputFormats(["json", "yaml", "kyaml", "name", "wide"]),
        {
          name: "--api-group",
          description: "Limit to resources in the specified API group",
          args: {},
        },
        {
          name: "--cached",
          description: "Use the cached list of resources if available",
        },
        {
          name: "--categories",
          requiresSeparator: true,
          isRepeatable: true,
          description:
            "Limit to resources that belong to the specified categories",
          args: { name: "Category" },
        },
        sharedOpts.showManagedFields,
        {
          name: "--namespaced",
          description:
            "If false, non-namespaced resources will be returned, otherwise returning namespaced resources by default",
        },
        {
          name: "--no-headers",
          description:
            "When using the default or custom-column output format, don't print headers (default print headers)",
        },
        {
          name: "--sort-by",
          requiresSeparator: true,
          description:
            "If non-empty, sort list of resources using specified field. The field can be either 'name' or 'kind'",
          args: { suggestions: ["name", "kind"] },
        },
        {
          name: "--verbs",
          requiresSeparator: true,
          description: "Limit to resources that support the specified verbs",
          args: {},
        },
      ],
    },
    {
      name: "api-versions",
      description:
        'Print the supported API versions on the server, in the form of "group/version"',
    },
    {
      name: "apply",
      description:
        "Apply a configuration to a resource by filename or stdin. The resource name must be specified. This resource will be created if it doesn't exist yet. To use 'apply', always create the resource initially with either 'apply' or 'create --save-config'",
      options: [
        sharedOpts.filename,
        sharedOpts.kustomize,
        sharedOpts.output,
        sharedOpts.dryRun,
        sharedOpts.allResources,
        sharedOpts.allowMissingTemplateKeys,
        sharedOpts.recursive,
        sharedOpts.selector,
        sharedOpts.template,
        sharedOpts.record,
        sharedOpts.cascade,
        sharedOpts.fieldManager,
        sharedOpts.showManagedFields,
        sharedOpts.validate,
        {
          ...sharedOpts.subresource,
          description:
            "If specified, apply will operate on the subresource of the requested object. Only allowed when using --server-side",
        },
        {
          name: "--force",
          description:
            "If true, immediately remove resources from API and bypass graceful deletion. Note that immediate deletion of some resources may result in inconsistency or data loss and requires confirmation",
        },
        {
          name: "--force-conflicts",
          description:
            "If true, server-side apply will force the changes against conflicts",
        },
        {
          name: "--grace-period",
          requiresSeparator: true,
          description:
            "Period of time in seconds given to the resource to terminate gracefully. Ignored if negative. Set to 1 for immediate shutdown. Can only be set to 0 when --force is true (force deletion)",
          args: {
            name: "INT (seconds)",
          },
        },
        {
          name: "--openapi-patch",
          description:
            "If true, use openapi to calculate diff when the openapi presents and the resource can be found in the openapi spec. Otherwise, fall back to use baked-in types",
        },
        {
          name: "--overwrite",
          description:
            "Automatically resolve conflicts between the modified and live configuration by using values from the modified configuration",
        },
        {
          name: "--prune",
          description:
            "Automatically delete resource objects, including the uninitialized ones, that do not appear in the configs and are created by either apply or create --save-config. Should be used with either -l or --all",
        },
        {
          name: "--prune-allowlist",
          requiresSeparator: true,
          isRepeatable: true,
          description:
            "Overwrite the default allowlist with <group/version/kind> for --prune",
          args: {
            name: "group/version/kind",
          },
        },
        {
          name: "--server-side",
          description:
            "If true, apply runs in the server instead of the client",
        },
        {
          name: "--timeout",
          requiresSeparator: true,
          description:
            "The length of time to wait before giving up on a delete, zero means determine a timeout from the size of the object",
          args: {
            name: "INT (Seconds)",
          },
        },
        {
          name: "--wait",
          description:
            "If true, wait for resources to be gone before returning. This waits for finalizers",
        },
      ],
      subcommands: [
        {
          name: "edit-last-applied",
          description:
            "Edit the latest last-applied-configuration annotations of resources from the default editor",
          args: [
            sharedArgs.typeOrTypeSlashName,
            sharedArgs.resourceSuggestionsFromResourceType,
          ],
          options: [
            sharedOpts.allowMissingTemplateKeys,
            sharedOpts.filename,
            sharedOpts.kustomize,
            sharedOpts.output,
            sharedOpts.record,
            sharedOpts.recursive,
            sharedOpts.template,
            sharedOpts.validate,
            {
              name: "--windows-line-endings",
              description:
                "Defaults to the line ending native to your platform",
            },
            sharedOpts.fieldManager,
            sharedOpts.showManagedFields,
          ],
        },
        {
          name: "set-last-applied",
          description:
            "Set the latest last-applied-configuration annotations by setting it to match the contents of a file. This results in the last-applied-configuration being updated as though 'kubectl apply -f<file> ' was run, without updating any other parts of the object",
          options: [
            sharedOpts.allowMissingTemplateKeys,
            sharedOpts.dryRun,
            sharedOpts.filename,
            sharedOpts.output,
            sharedOpts.template,
            sharedOpts.showManagedFields,
            {
              name: "--create-annotation",
              description:
                "Will create 'last-applied-configuration' annotations if current objects doesn't have one",
            },
          ],
        },
        {
          name: "view-last-applied",
          description:
            "View the latest last-applied-configuration annotations by type/name or file",
          args: [
            sharedArgs.typeOrTypeSlashName,
            sharedArgs.resourceSuggestionsFromResourceType,
          ],
          options: [
            sharedOpts.allResources,
            sharedOpts.filename,
            sharedOpts.kustomize,
            outputFormats(
              ["yaml", "json"],
              "Output format. Must be one of (yaml, json)"
            ),
            sharedOpts.recursive,
            sharedOpts.selector,
          ],
        },
      ],
    },
    {
      name: "attach",
      description:
        "Attach to a process that is already running inside an existing container",
      args: sharedArgs.runningPodsArg,
      options: [
        {
          name: ["-c", "--container"],
          description:
            "Container name. If omitted, the first container in the pod will be chosen",
          args: sharedArgs.listContainersFromPod,
        },
        {
          name: "--pod-running-timeout",
          requiresSeparator: true,
          description:
            "The length of time (like 5s, 2m, or 3h, higher than zero) to wait until at least one pod is running",
          args: {},
        },
        {
          name: ["-i", "--stdin"],
          description: "Pass stdin to the container",
        },
        {
          name: ["-t", "--tty"],
          description: "Stdin is a TTY",
        },
        {
          ...sharedOpts.quiet,
          description: "Only print output from the remote session",
        },
        detachKeys,
      ],
    },
    {
      name: "auth",
      description: "Inspect authorization",
      subcommands: [
        {
          name: "can-i",
          description: "Check whether an action is allowed",
          args: [
            {
              name: "VERB",
              suggestions: [
                "*",
                "get",
                "list",
                "watch",
                "delete",
                "create",
                "update",
                "patch",
              ],
            },
            sharedArgs.typeOrTypeSlashName,
            sharedArgs.resourceSuggestionsFromResourceType,
          ],
          options: [
            {
              name: ["-A", "--all-namespaces"],
              description:
                "If true, check the specified action in all namespaces",
            },
            {
              name: "--list",
              description: "If true, prints all allowed actions",
            },
            {
              name: "--no-headers",
              description: "If true, prints allowed actions without headers",
            },
            {
              name: ["-q", "--quiet"],
              description:
                "If true, suppress output and just return the exit code",
            },
            {
              name: "--subresource",
              requiresSeparator: true,
              description: "SubResource such as pod/log or deployment/scale",
              // TODO: Generator here
              args: {},
            },
          ],
        },
        {
          name: "reconcile",
          description:
            "Reconciles rules for RBAC Role, RoleBinding, ClusterRole, and ClusterRole binding objects",
          options: [
            sharedOpts.allowMissingTemplateKeys,
            sharedOpts.dryRun,
            sharedOpts.filename,
            sharedOpts.kustomize,
            sharedOpts.output,
            sharedOpts.recursive,
            sharedOpts.template,
            {
              name: "--remove-extra-permissions",
              description: "If true, removes extra permissions added to roles",
            },
            {
              name: "--remove-extra-subjects",
              description:
                "If true, removes extra subjects added to rolebindings",
            },
            sharedOpts.showManagedFields,
          ],
        },
        {
          name: "whoami",
          description:
            "Experimental: Check who you are and your attributes (groups, extra)",
          options: [
            sharedOpts.allowMissingTemplateKeys,
            sharedOpts.output,
            sharedOpts.showManagedFields,
            sharedOpts.template,
          ],
        },
      ],
    },
    {
      name: "autoscale",
      description:
        "Creates an autoscaler that automatically chooses and sets the number of pods that run in a kubernetes cluster",
      args: [
        sharedArgs.typeOrTypeSlashName,
        sharedArgs.resourceSuggestionsFromResourceType,
      ],
      options: [
        sharedOpts.allowMissingTemplateKeys,
        sharedOpts.output,
        sharedOpts.record,
        sharedOpts.recursive,
        sharedOpts.dryRun,
        sharedOpts.filename,
        sharedOpts.kustomize,
        sharedOpts.template,
        sharedOpts.fieldManager,
        sharedOpts.showManagedFields,
        {
          name: "--cpu",
          requiresSeparator: true,
          description:
            'Target CPU utilization over all the pods. A percentage (e.g. "70%") targets average utilization, a quantity (e.g. "500m") targets average value',
          args: {
            name: "Percent or Quantity",
          },
          exclusiveOn: ["--cpu-percent"],
        },
        {
          name: "--memory",
          requiresSeparator: true,
          description:
            'Target memory utilization over all the pods. A percentage (e.g. "60%") targets average utilization, a quantity (e.g. "200Mi") targets average value',
          args: {
            name: "Percent or Quantity",
          },
        },
        {
          name: "--cpu-percent",
          requiresSeparator: true,
          description:
            "Deprecated, use --cpu with a percentage value instead. The target average CPU utilization (represented as a percent of requested CPU) over all the pods",
          args: {
            name: "INT (Percent)",
          },
          deprecated: true,
          exclusiveOn: ["--cpu"],
        },
        {
          name: "--max",
          requiresSeparator: true,
          description:
            "The upper limit for the number of pods that can be set by the autoscaler. Required",
          args: {
            name: "INT",
          },
        },
        {
          name: "--min",
          requiresSeparator: true,
          description:
            "The lower limit for the number of pods that can be set by the autoscaler. If it's not specified or negative, the server will apply a default value",
          args: {
            name: "INT",
          },
        },
        {
          name: "--name",
          requiresSeparator: true,
          description:
            "The name for the newly created object. If not specified, the name of the input resource will be used",
          args: {},
        },
        {
          name: "--save-config",
          description:
            "If true, the configuration of current object will be saved in its annotation. Otherwise, the annotation will be unchanged. This flag is useful when you want to perform kubectl apply on this object in the future",
        },
      ],
    },
    {
      name: "certificate",
      description: "Modify certificate resources",
      subcommands: [
        {
          name: "approve",
          description: "Approve a certificate signing request",
          args: {
            name: "NAME",
          },
          options: [
            sharedOpts.allowMissingTemplateKeys,
            sharedOpts.filename,
            sharedOpts.kustomize,
            sharedOpts.output,
            sharedOpts.recursive,
            sharedOpts.template,
            sharedOpts.showManagedFields,
            {
              name: "--force",
              description: "Update the CSR even if it is already approved",
            },
          ],
        },
        {
          name: "deny",
          description: "Deny a certificate signing request",
          args: {
            name: "NAME",
          },
          options: [
            sharedOpts.allowMissingTemplateKeys,
            sharedOpts.filename,
            sharedOpts.kustomize,
            sharedOpts.output,
            sharedOpts.recursive,
            sharedOpts.template,
            sharedOpts.showManagedFields,
            {
              name: "--force",
              description: "Update the CSR even if it is already approved",
            },
          ],
        },
      ],
    },
    {
      name: "cluster-info",
      description:
        "Display addresses of the master and services with label kubernetes.io/cluster-service=true To further debug and diagnose cluster problems, use 'kubectl cluster-info dump'",
      subcommands: [
        {
          name: "dump",
          description:
            "Dumps cluster info out suitable for debugging and diagnosing cluster problems.  By default, dumps everything to stdout. You can optionally specify a directory with --output-directory.  If you specify a directory, kubernetes will build a set of files in that directory.  By default only dumps things in the 'kube-system' namespace, but you can switch to a different namespace with the --namespaces flag, or specify --all-namespaces to dump all namespaces",
          options: [
            sharedOpts.allowMissingTemplateKeys,
            sharedOpts.output,
            sharedOpts.template,
            {
              name: ["-A", "--all-namespaces"],
              description:
                "If true, dump all namespaces.  If true, --namespaces is ignored",
            },
            {
              name: "--namespaces",
              description: "A comma separated list of namespaces to dump",
              args: {
                name: "Namespaces (Comma separated)",
              },
            },
            {
              name: "--output-directory",
              requiresSeparator: true,
              description:
                "Where to output the files.  If empty or '-' uses stdout, otherwise creates a directory hierarchy in that directory",
              args: {},
            },
            {
              name: "--pod-running-timeout",
              requiresSeparator: true,
              description:
                "The length of time (like 5s, 2m, or 3h, higher than zero) to wait until at least one pod is running",
              args: {
                name: "Length of Time",
              },
            },
            sharedOpts.showManagedFields,
          ],
        },
      ],
    },
    {
      name: "completion",
      description:
        "Output shell completion code for the specified shell (bash, zsh, fish, or powershell)",
      args: {
        name: "SHELL",
        suggestions: ["bash", "zsh", "fish", "powershell"],
      },
    },
    {
      name: "config",
      description:
        'Modify kubeconfig files using subcommands like "kubectl config set current-context my-context"',
      subcommands: [
        {
          name: "current-context",
          description: "Displays the current-context",
        },
        {
          name: "delete-cluster",
          description: "Delete the specified cluster from the kubeconfig",
          args: sharedArgs.listClusters,
        },
        {
          name: "delete-context",
          description: "Delete the specified context from the kubeconfig",
          args: sharedArgs.listKubeConfContexts,
        },
        {
          name: "delete-user",
          description: "Delete the specified user from the kubeconfig",
          args: {
            name: "NAME",
          },
        },
        {
          name: "get-clusters",
          description: "Display clusters defined in the kubeconfig",
        },
        {
          name: "get-contexts",
          description: "Displays one or many contexts from the kubeconfig file",
          args: { ...sharedArgs.listKubeConfContexts, isOptional: true },
          options: [
            outputFormats(["name"], "Output format. One of: (name)"),
            {
              name: "--no-headers",
              description:
                "When using the default or custom-column output format, don't print headers (default print headers)",
            },
          ],
        },
        {
          name: "get-users",
          description: "Display users defined in the kubeconfig",
        },
        {
          name: "rename-context",
          description: "Renames a context from the kubeconfig file",
          args: [
            sharedArgs.listKubeConfContexts,
            {
              name: "New Context Name",
            },
          ],
        },
        {
          name: "set",
          description: "Sets an individual value in a kubeconfig file",
          args: [
            {
              name: "PROPERTY_NAME",
            },
            {
              name: "PROPERTY_VALUE",
            },
          ],
          options: [
            {
              name: "--set-raw-bytes",
              description:
                "When writing a []byte PROPERTY_VALUE, write the given string directly without base64 decoding",
              args: {},
            },
          ],
        },
        {
          name: "set-cluster",
          description: "Sets a cluster entry in kubeconfig",
          args: {
            name: "NAME",
          },
          options: [
            {
              name: "--embed-certs",
              description: "Embed-certs for the cluster entry in kubeconfig",
            },
            {
              name: "--server",
              requiresSeparator: true,
              args: {
                name: "Server",
              },
            },
            {
              name: "--certificate-authority",
              requiresSeparator: true,
              description: "Path to certificate authority",
              args: {
                name: "Certificate Authority",
                template: "filepaths",
              },
            },
            {
              name: "--insecure-skip-tls-verify",
              requiresSeparator: true,
              args: {
                suggestions: ["true", "false"],
              },
            },
            {
              name: "--tls-server-name",
              requiresSeparator: true,
              args: {
                name: "TLS Server Name",
              },
            },
            {
              name: "--proxy-url",
              requiresSeparator: true,
              description: "Proxy-url for the cluster entry in kubeconfig",
              args: {
                name: "URL",
              },
            },
          ],
        },
        {
          name: "set-context",
          description: "Sets a context entry in kubeconfig",
          args: sharedArgs.listKubeConfContexts,
          options: [
            {
              name: "--current",
              description: "Modify the current context",
            },
            {
              name: "--cluster",
              requiresSeparator: true,
              args: {
                name: "cluster_nickname",
              },
            },
            {
              name: "--user",
              requiresSeparator: true,
              args: {
                name: "user_nickname",
              },
            },
            {
              name: ["-n", "--namespace"],
              requiresSeparator: true,
              description: "Namespace for the context entry in kubeconfig",
              args: {
                name: "namespace",
              },
            },
          ],
        },
        {
          name: "set-credentials",
          description: "Sets a user entry in kubeconfig",
          args: { name: "NAME" },
          options: [
            {
              name: "--client-certificate",
              requiresSeparator: true,
              description: "Client cert for user entry",
              args: {
                template: "filepaths",
              },
            },
            {
              name: "--client-key",
              requiresSeparator: true,
              description: "Client key for user entry",
              args: {
                template: "filepaths",
              },
            },
            {
              name: "--token",
              requiresSeparator: true,
              description: "Bearer Token for user entry",
              args: {
                name: "Bearer Token",
              },
            },
            {
              name: "--username",
              requiresSeparator: true,
              description: "Username for basic authentication",
              args: {
                name: "Username",
              },
            },
            {
              name: "--password",
              requiresSeparator: true,
              description: "Password for basic authentication",
              args: {
                name: "Password",
              },
            },
            {
              name: "--auth-provider",
              requiresSeparator: true,
              description: "Auth provider for the user entry in kubeconfig",
              args: {
                name: "Auth Provider",
              },
            },
            {
              name: "--auth-provider-arg",
              requiresSeparator: true,
              description: "'key=value' arguments for the auth provider",
              args: {
                name: "key=value",
              },
            },
            {
              name: "--embed-certs",
              description:
                "Embed client cert/key for the user entry in kubeconfig",
            },
            {
              name: "--exec-api-version",
              requiresSeparator: true,
              description:
                "API version of the exec credential plugin for the user entry in kubeconfig",
              args: {
                name: "API Version",
              },
            },
            {
              name: "--exec-arg",
              requiresSeparator: true,
              description:
                "New arguments for the exec credential plugin command for the user entry in kubeconfig",
              args: {
                name: "Exec Arg",
              },
            },
            {
              name: "--exec-command",
              requiresSeparator: true,
              description:
                "Command for the exec credential plugin for the user entry in kubeconfig",
              args: {
                name: "Exec Command",
              },
            },
            {
              name: "--exec-env",
              requiresSeparator: true,
              description:
                "'key=value' environment values for the exec credential plugin",
              args: {
                name: "key=value",
              },
            },
            {
              name: "--exec-interactive-mode",
              requiresSeparator: true,
              description:
                "InteractiveMode of the exec credentials plugin for the user entry in kubeconfig",
              args: {
                suggestions: ["Never", "IfAvailable", "Always"],
              },
            },
            {
              name: "--exec-provide-cluster-info",
              description:
                "ProvideClusterInfo of the exec credentials plugin for the user entry in kubeconfig",
            },
          ],
        },
        {
          name: "unset",
          description: "Unsets an individual value in a kubeconfig file",
          args: {
            name: "PROPERTY_NAME",
          },
        },
        {
          name: ["use-context", "use"],
          description: "Sets the current-context in a kubeconfig file",
          args: sharedArgs.listKubeConfContexts,
        },
        {
          name: "view",
          description:
            "Display merged kubeconfig settings or a specified kubeconfig file",
          options: [
            sharedOpts.allowMissingTemplateKeys,
            sharedOpts.output,
            sharedOpts.template,
            {
              name: "--flatten",
              description:
                "Flatten the resulting kubeconfig file into self-contained output (useful for creating portable kubeconfig files)",
            },
            {
              name: "--merge",
              description: "Merge the full hierarchy of kubeconfig files",
            },
            {
              name: "--minify",
              description:
                "Remove all information not used by current-context from the output",
            },
            {
              name: "--raw",
              description: "Display raw byte data",
            },
            sharedOpts.showManagedFields,
          ],
        },
      ],
    },
    {
      name: "cordon",
      description: "Mark node as unschedulable",
      args: sharedArgs.listNodes,
      options: [sharedOpts.dryRun, sharedOpts.selector],
    },
    {
      // TODO: Args and generators
      name: "cp",
      description: "Copy files and directories to and from containers",
      args: {},
      options: [
        {
          name: ["-c", "--container"],
          description:
            "Container name. If omitted, the first container in the pod will be chosen",
          args: {},
        },
        {
          name: "--no-preserve",
          description:
            "The copied file/directory's ownership and permissions will not be preserved in the container",
        },
        {
          name: "--retries",
          requiresSeparator: true,
          description:
            "Set number of retries to complete a copy operation from a container. Specify 0 to disable or any negative value for infinite retrying",
          args: { name: "INT" },
        },
      ],
    },
    {
      name: "create",
      description: "Create a resource from a file or from stdin",
      options: [
        sharedOpts.allowMissingTemplateKeys,
        sharedOpts.dryRun,
        sharedOpts.filename,
        sharedOpts.kustomize,
        sharedOpts.output,
        sharedOpts.recursive,
        sharedOpts.selector,
        sharedOpts.template,
        sharedOpts.record,
        sharedOpts.fieldManager,
        sharedOpts.showManagedFields,
        {
          name: "--edit",
          description: "Edit the API resource before creating",
        },
        {
          name: "--raw",
          description:
            "Raw URI to POST to the server.  Uses the transport specified by the kubeconfig file",
        },
        {
          name: "--save-config",
          description:
            "If true, the configuration of current object will be saved in its annotation. Otherwise, the annotation will be unchanged. This flag is useful when you want to perform kubectl apply on this object in the future",
        },
        sharedOpts.validate,
        {
          name: "--windows-line-endings",
          description:
            "Only relevant if --edit=true. Defaults to the line ending native to your platform",
        },
      ],
      subcommands: [
        {
          name: "clusterrole",
          description: "Create a ClusterRole",
          args: {
            name: "NAME",
          },
          options: [
            sharedOpts.allowMissingTemplateKeys,
            sharedOpts.dryRun,
            sharedOpts.output,
            sharedOpts.template,
            sharedOpts.fieldManager,
            sharedOpts.showManagedFields,
            {
              name: "--aggregation-rule",
              requiresSeparator: true,
              description:
                "An aggregation label selector for combining ClusterRoles",
              args: {},
            },
            {
              name: "--non-resource-url",
              description: "A partial url that user should have access to",
              args: {},
            },
            {
              name: "--resource",
              requiresSeparator: true,
              description: "Resource that the rule applies to",
              args: sharedArgs.resourcesArg,
            },
            {
              name: "--resource-name",
              requiresSeparator: true,
              description:
                "Resource in the white list that the rule applies to, repeat this flag for multiple items",
              args: {},
            },
            {
              name: "--save-config",
              description:
                "If true, the configuration of current object will be saved in its annotation. Otherwise, the annotation will be unchanged. This flag is useful when you want to perform kubectl apply on this object in the future",
            },
            sharedOpts.validate,
            {
              name: "--verb",
              requiresSeparator: true,
              description:
                "Verb that applies to the resources contained in the rule",
              args: {
                name: "VERB",
                suggestions: resourceVerbs,
              },
            },
          ],
        },
        {
          name: "clusterrolebinding",
          description:
            "Create a ClusterRoleBinding for a particular ClusterRole",
          args: {
            name: "NAME",
          },
          options: [
            sharedOpts.allowMissingTemplateKeys,
            sharedOpts.dryRun,
            sharedOpts.output,
            sharedOpts.template,
            sharedOpts.fieldManager,
            sharedOpts.showManagedFields,
            {
              name: "--clusterrole",
              requiresSeparator: true,
              description:
                "ClusterRole this ClusterRoleBinding should reference",
              args: sharedArgs.listClusterRoles,
            },
            {
              name: "--user",
              requiresSeparator: true,
              args: {
                name: "User Name",
              },
            },
            {
              name: "--group",
              description: "Groups to bind to the clusterrole",
              args: {
                name: "Group Name",
              },
            },
            {
              name: "--save-config",
              description:
                "If true, the configuration of current object will be saved in its annotation. Otherwise, the annotation will be unchanged. This flag is useful when you want to perform kubectl apply on this object in the future",
            },
            {
              name: "--serviceaccount",
              description:
                "Service accounts to bind to the clusterrole, in the format <namespace>:<name>",
              args: {
                name: "<namespace>:<name>",
              },
            },
            sharedOpts.validate,
          ],
        },
        {
          name: ["configmap", "cm"],
          description:
            "Create a configmap based on a file, directory, or specified literal value",
          args: {
            name: "NAME",
          },
          options: [
            sharedOpts.allowMissingTemplateKeys,
            sharedOpts.dryRun,
            sharedOpts.output,
            sharedOpts.template,
            sharedOpts.fieldManager,
            sharedOpts.showManagedFields,
            {
              name: "--append-hash",
              description: "Append a hash of the configmap to its name",
            },
            {
              name: "--from-env-file",
              requiresSeparator: true,
              description:
                "Specify the path to a file to read lines of key=val pairs to create a configmap (i.e. a Docker .env file)",
              args: {
                template: "filepaths",
              },
            },
            {
              name: "--from-file",
              requiresSeparator: true,
              description:
                "Key file can be specified using its file path, in which case file basename will be used as configmap key, or optionally with a key and file path, in which case the given key will be used.  Specifying a directory will iterate each named file in the directory whose basename is a valid configmap key",
              args: {
                template: "filepaths",
              },
            },
            {
              name: "--from-literal",
              requiresSeparator: true,
              description:
                "Specify a key and literal value to insert in configmap (i.e. mykey=somevalue)",
              args: {
                name: "key=value",
              },
            },
            {
              name: "--save-config",
              description:
                "If true, the configuration of current object will be saved in its annotation. Otherwise, the annotation will be unchanged. This flag is useful when you want to perform kubectl apply on this object in the future",
            },
            sharedOpts.validate,
          ],
        },
        {
          name: ["cronjob", "cj"],
          description: "Create a cronjob with the specified name",
          args: {
            name: "NAME",
          },
          options: [
            sharedOpts.allowMissingTemplateKeys,
            sharedOpts.dryRun,
            sharedOpts.output,
            sharedOpts.template,
            sharedOpts.fieldManager,
            sharedOpts.showManagedFields,
            {
              name: "--image",
              requiresSeparator: true,
              description: "Image name to run",
              args: {
                name: "Image",
              },
            },
            {
              name: "--restart",
              requiresSeparator: true,
              description:
                "Job's restart policy. supported values: OnFailure, Never",
              args: {
                suggestions: ["OnFailure", "Never"],
              },
            },
            {
              name: "--save-config",
              description:
                "If true, the configuration of current object will be saved in its annotation. Otherwise, the annotation will be unchanged. This flag is useful when you want to perform kubectl apply on this object in the future",
            },
            {
              name: "--schedule",
              description:
                "A schedule in the Cron format the job should be run with",
              args: {
                name: "Cron",
              },
            },
            sharedOpts.validate,
          ],
        },
        {
          name: ["deployment", "deploy"],
          description: "Create a deployment with the specified name",
          args: {
            name: "NAME",
          },
          options: [
            sharedOpts.allowMissingTemplateKeys,
            sharedOpts.dryRun,
            sharedOpts.output,
            sharedOpts.template,
            sharedOpts.fieldManager,
            sharedOpts.showManagedFields,
            {
              name: "--image",
              requiresSeparator: true,
              description: "Image name to run",
              args: {
                name: "Image",
              },
            },
            {
              name: "--port",
              requiresSeparator: true,
              description: "The containerPort that this deployment exposes",
              args: {
                name: "Port",
              },
            },
            {
              name: ["-r", "--replicas"],
              requiresSeparator: true,
              description: "Number of replicas to create. Default is 1",
              args: {
                name: "INT",
              },
            },
            {
              name: "--save-config",
              description:
                "If true, the configuration of current object will be saved in its annotation. Otherwise, the annotation will be unchanged. This flag is useful when you want to perform kubectl apply on this object in the future",
            },
            sharedOpts.validate,
          ],
        },
        {
          name: ["ingress", "ing"],
          description: "Create an ingress with the specified name",
          args: {
            name: "NAME",
          },
          options: [
            sharedOpts.allowMissingTemplateKeys,
            sharedOpts.dryRun,
            sharedOpts.output,
            sharedOpts.template,
            sharedOpts.fieldManager,
            sharedOpts.showManagedFields,
            {
              name: "--annotation",
              description:
                "Annotation to insert in the ingress object, in the format annotation=value",
              args: {
                name: "annotation=value",
              },
            },
            {
              name: "--class",
              requiresSeparator: true,
              description: "Ingress Class to be used",
              args: {},
            },
            {
              name: "--default-backend",
              requiresSeparator: true,
              description:
                "Default service for backend, in format of svcname:port",
              args: {
                name: "svcname:port",
              },
            },
            {
              name: "--rule",
              requiresSeparator: true,
              description:
                "Rule in format host/path=service:port[,tls=secretname]. Paths containing the leading character '*' are considered pathType=Prefix. tls argument is optional",
              args: {
                name: "host/path=service:port[,tls=secretname]",
              },
            },
            {
              name: "--save-config",
              description:
                "If true, the configuration of current object will be saved in its annotation. Otherwise, the annotation will be unchanged. This flag is useful when you want to perform kubectl apply on this object in the future",
            },
            sharedOpts.validate,
          ],
        },
        {
          name: "job",
          description: "Create a job with the specified name",
          args: [
            {
              name: "NAME",
            },
            {
              name: "COMMAND",
              isCommand: true,
            },
          ],
          options: [
            sharedOpts.allowMissingTemplateKeys,
            sharedOpts.dryRun,
            sharedOpts.output,
            sharedOpts.template,
            sharedOpts.fieldManager,
            sharedOpts.showManagedFields,
            {
              name: "--from",
              requiresSeparator: true,
              description:
                "The name of the resource to create a Job from (only cronjob is supported)",
              args: {
                name: "Cronjob",
                generators: {
                  script: () => scripts.typeWithoutName("cronjob"),
                  postProcess: (out, tokens) => {
                    return sharedPostProcess(out, tokens).map((item) => ({
                      ...item,
                      name: `cronjob/${item.name}`,
                    })) as Fig.Suggestion[];
                  },
                },
              },
            },
            {
              name: "--image",
              requiresSeparator: true,
              description: "Image name to run",
              args: {
                name: "Image",
              },
            },
            {
              name: "--save-config",
              description:
                "If true, the configuration of current object will be saved in its annotation. Otherwise, the annotation will be unchanged. This flag is useful when you want to perform kubectl apply on this object in the future",
            },
            sharedOpts.validate,
          ],
        },
        {
          name: ["namespace", "ns"],
          description: "Create a namespace with the specified name",
          args: {
            name: "NAME",
          },
          options: [
            sharedOpts.allowMissingTemplateKeys,
            sharedOpts.dryRun,
            sharedOpts.output,
            sharedOpts.template,
            sharedOpts.fieldManager,
            sharedOpts.showManagedFields,
            {
              name: "--save-config",
              description:
                "If true, the configuration of current object will be saved in its annotation. Otherwise, the annotation will be unchanged. This flag is useful when you want to perform kubectl apply on this object in the future",
            },
            sharedOpts.validate,
          ],
        },
        {
          name: ["poddisruptionbudget", "pdb"],
          description:
            "Create a pod disruption budget with the specified name, selector, and desired minimum available pods",
          args: {
            name: "NAME",
          },
          options: [
            sharedOpts.allowMissingTemplateKeys,
            sharedOpts.dryRun,
            sharedOpts.output,
            sharedOpts.template,
            sharedOpts.fieldManager,
            sharedOpts.showManagedFields,
            {
              name: "--selector",
              requiresSeparator: true,
              description:
                "A label selector to use for this budget. Only equality-based selector requirements are supported",
              args: {},
            },
            {
              name: "--max-unavailable",
              description:
                "The maximum number or percentage of unavailable pods this budget requires",
              args: {
                name: "INT (Percent)",
              },
            },
            {
              name: "--min-available",
              description:
                "The minimum number or percentage of available pods this budget requires",
              args: {
                name: "INT (Percent)",
              },
            },
            {
              name: "--save-config",
              description:
                "If true, the configuration of current object will be saved in its annotation. Otherwise, the annotation will be unchanged. This flag is useful when you want to perform kubectl apply on this object in the future",
            },
            sharedOpts.validate,
          ],
        },
        {
          name: ["priorityclass", "pc"],
          description:
            "Create a priorityclass with the specified name, value, globalDefault and description",
          args: {
            name: "NAME",
          },
          options: [
            sharedOpts.allowMissingTemplateKeys,
            sharedOpts.dryRun,
            sharedOpts.output,
            sharedOpts.template,
            sharedOpts.fieldManager,
            sharedOpts.showManagedFields,
            {
              name: "--description",
              requiresSeparator: true,
              description:
                "Description is an arbitrary string that usually provides guidelines on when this priority class should be used",
              args: {
                name: "Description",
              },
            },
            {
              name: "--global-default",
              description:
                "Global-default specifies whether this PriorityClass should be considered as the default priority",
            },
            {
              name: "--preemption-policy",
              description:
                "Preemption-policy is the policy for preempting pods with lower priority",
              args: {
                name: "Preemption Policy",
              },
            },
            {
              name: "--save-config",
              description:
                "If true, the configuration of current object will be saved in its annotation. Otherwise, the annotation will be unchanged. This flag is useful when you want to perform kubectl apply on this object in the future",
            },
            sharedOpts.validate,
            {
              name: "--value",
              requiresSeparator: true,
              description: "The value of this priority class",
              args: {
                name: "INT",
              },
            },
          ],
        },
        {
          name: ["quota", "resourcequota"],
          description:
            "Create a resourcequota with the specified name, hard limits and optional scopes",
          args: {
            name: "NAME",
          },
          options: [
            sharedOpts.allowMissingTemplateKeys,
            sharedOpts.dryRun,
            sharedOpts.output,
            sharedOpts.template,
            sharedOpts.fieldManager,
            sharedOpts.showManagedFields,
            {
              name: "--hard",
              description:
                "A comma-delimited set of resource=quantity pairs that define a hard limit",
              args: {
                name: "key=value (Comma delimited)",
              },
            },
            {
              name: "--save-config",
              description:
                "If true, the configuration of current object will be saved in its annotation. Otherwise, the annotation will be unchanged. This flag is useful when you want to perform kubectl apply on this object in the future",
            },
            {
              name: "--scopes",
              description:
                "A comma-delimited set of quota scopes that must all match each object tracked by the quota",
              args: {
                name: "Scopes (Comma delimited)",
              },
            },
            sharedOpts.validate,
          ],
        },
        {
          name: "role",
          description: "Create a role with single rule",
          args: {
            name: "NAME",
          },
          options: [
            sharedOpts.allowMissingTemplateKeys,
            sharedOpts.dryRun,
            sharedOpts.output,
            sharedOpts.template,
            sharedOpts.fieldManager,
            sharedOpts.showManagedFields,
            {
              name: "--resource",
              requiresSeparator: true,
              description: "Resource that the rule applies to",
              args: sharedArgs.resourcesArg,
            },
            {
              name: "--resource-name",
              requiresSeparator: true,
              description:
                "Resource in the white list that the rule applies to, repeat this flag for multiple items",
              args: {},
            },
            {
              name: "--save-config",
              description:
                "If true, the configuration of current object will be saved in its annotation. Otherwise, the annotation will be unchanged. This flag is useful when you want to perform kubectl apply on this object in the future",
            },
            sharedOpts.validate,
            {
              name: "--verb",
              requiresSeparator: true,
              description:
                "Verb that applies to the resources contained in the rule",
              args: {
                name: "VERB",
                suggestions: resourceVerbs,
              },
            },
          ],
        },
        {
          name: "rolebinding",
          description:
            "Create a RoleBinding for a particular Role or ClusterRole",
          args: {
            name: "NAME",
          },
          options: [
            sharedOpts.allowMissingTemplateKeys,
            sharedOpts.dryRun,
            sharedOpts.output,
            sharedOpts.template,
            sharedOpts.fieldManager,
            sharedOpts.showManagedFields,
            {
              name: "--clusterrole",
              requiresSeparator: true,
              description: "ClusterRole this RoleBinding should reference",
              args: sharedArgs.listClusterRoles,
            },
            {
              name: "--group",
              requiresSeparator: true,
              description: "Groups to bind to the role",
              args: {},
            },
            {
              name: "--role",
              requiresSeparator: true,
              description: "Role this RoleBinding should reference",
              args: {
                name: "Role",
                generators: {
                  script: () => scripts.typeWithoutName("roles"),
                  postProcess: sharedPostProcess,
                },
              },
            },
            {
              name: "--save-config",
              description:
                "If true, the configuration of current object will be saved in its annotation. Otherwise, the annotation will be unchanged. This flag is useful when you want to perform kubectl apply on this object in the future",
            },
            {
              name: "--serviceaccount",
              requiresSeparator: true,
              description:
                "Service accounts to bind to the role, in the format <namespace>:<name>",
              args: {
                name: "<namespace>:<name>",
              },
            },
            {
              name: "--user",
              requiresSeparator: true,
              isRepeatable: true,
              description:
                "Usernames to bind to the role. The flag can be repeated to add multiple users",
              args: {
                name: "Username",
              },
            },
            sharedOpts.validate,
          ],
        },
        {
          name: "secret",
          description: "Create a secret using specified subcommand",
          subcommands: [
            {
              name: "docker-registry",
              args: {
                name: "NAME",
              },
              description: "Create a new secret for use with Docker registries",
              options: [
                sharedOpts.allowMissingTemplateKeys,
                sharedOpts.dryRun,
                sharedOpts.output,
                sharedOpts.template,
                sharedOpts.fieldManager,
                sharedOpts.showManagedFields,
                {
                  name: "--append-hash",
                  description: "Append a hash of the secret to its name",
                },
                {
                  name: "--docker-email",
                  requiresSeparator: true,
                  description: "Email for Docker registry",
                  args: {
                    name: "Email",
                  },
                },
                {
                  name: "--docker-password",
                  requiresSeparator: true,
                  description: "Password for Docker registry authentication",
                  args: {
                    name: "Password",
                  },
                },
                {
                  name: "--docker-server",
                  requiresSeparator: true,
                  description: "Server location for Docker registry",
                  args: {
                    name: "Server",
                  },
                },
                {
                  name: "--docker-username",
                  requiresSeparator: true,
                  description: "Username for Docker registry authentication",
                  args: {
                    name: "Username",
                  },
                },
                {
                  name: "--from-file",
                  requiresSeparator: true,
                  description:
                    "Key files can be specified using their file path, in which case a default name will be given to them, or optionally with a name and file path, in which case the given name will be used.  Specifying a directory will iterate each named file in the directory that is a valid secret key",
                  args: {
                    template: "filepaths",
                  },
                },
                {
                  name: "--save-config",
                  description:
                    "If true, the configuration of current object will be saved in its annotation. Otherwise, the annotation will be unchanged. This flag is useful when you want to perform kubectl apply on this object in the future",
                },
                sharedOpts.validate,
              ],
            },
            {
              name: "generic",
              args: {
                name: "NAME",
              },
              description:
                "Create a secret based on a file, directory, or specified literal value",
              options: [
                sharedOpts.allowMissingTemplateKeys,
                sharedOpts.dryRun,
                sharedOpts.output,
                sharedOpts.template,
                sharedOpts.fieldManager,
                sharedOpts.showManagedFields,
                {
                  name: "--append-hash",
                  description: "Append a hash of the secret to its name",
                },
                {
                  name: "--from-env-file",
                  requiresSeparator: true,
                  description:
                    "Specify the path to a file to read lines of key=val pairs to create a secret (i.e. a Docker .env file)",
                  args: {
                    template: "filepaths",
                  },
                },
                {
                  name: "--from-file",
                  requiresSeparator: true,
                  description:
                    "Key files can be specified using their file path, in which case a default name will be given to them, or optionally with a name and file path, in which case the given name will be used.  Specifying a directory will iterate each named file in the directory that is a valid secret key",
                  args: {
                    template: "filepaths",
                  },
                },
                {
                  name: "--from-literal",
                  requiresSeparator: true,
                  description:
                    "Specify a key and literal value to insert in secret (i.e. mykey=somevalue)",
                  args: {
                    name: "key=value",
                  },
                },
                {
                  name: "--save-config",
                  description:
                    "If true, the configuration of current object will be saved in its annotation. Otherwise, the annotation will be unchanged. This flag is useful when you want to perform kubectl apply on this object in the future",
                },
                {
                  name: "--type",
                  requiresSeparator: true,
                  description: "The type of secret to create",
                  args: {},
                },
                sharedOpts.validate,
              ],
            },
            {
              name: "tls",
              description:
                "Create a TLS secret from the given public/private key pair",
              args: {
                name: "NAME",
              },
              options: [
                sharedOpts.allowMissingTemplateKeys,
                sharedOpts.dryRun,
                sharedOpts.output,
                sharedOpts.template,
                sharedOpts.fieldManager,
                sharedOpts.showManagedFields,
                {
                  name: "--append-hash",
                  description: "Append a hash of the secret to its name",
                },
                {
                  name: "--cert",
                  requiresSeparator: true,
                  description: "Path to PEM encoded public key certificate",
                  args: {
                    template: "filepaths",
                  },
                },
                {
                  name: "--key",
                  requiresSeparator: true,
                  description:
                    "Path to private key associated with given certificate",
                  args: {
                    template: "filepaths",
                  },
                },
                {
                  name: "--save-config",
                  description:
                    "If true, the configuration of current object will be saved in its annotation. Otherwise, the annotation will be unchanged. This flag is useful when you want to perform kubectl apply on this object in the future",
                },
                sharedOpts.validate,
              ],
            },
          ],
        },
        {
          name: ["service", "svc"],
          description: "Create a service using specified subcommand",
          subcommands: [
            {
              name: "clusterip",
              description: "Create a ClusterIP service with the specified name",
              args: {
                name: "NAME",
              },
              options: [
                sharedOpts.allowMissingTemplateKeys,
                sharedOpts.dryRun,
                sharedOpts.output,
                sharedOpts.template,
                sharedOpts.fieldManager,
                sharedOpts.showManagedFields,
                {
                  name: "--clusterip",
                  requiresSeparator: true,
                  description:
                    "Assign your own ClusterIP or set to 'None' for a 'headless' service (no loadbalancing)",
                  args: {
                    name: "ClusterIP",
                    suggestions: ["None"],
                  },
                },
                {
                  name: "--save-config",
                  description:
                    "If true, the configuration of current object will be saved in its annotation. Otherwise, the annotation will be unchanged. This flag is useful when you want to perform kubectl apply on this object in the future",
                },
                {
                  name: "--tcp",
                  requiresSeparator: true,
                  description:
                    "Port pairs can be specified as '<port>:<targetPort>'",
                  args: {
                    name: "<port>:<targetPort>",
                  },
                },
                sharedOpts.validate,
              ],
            },
            {
              name: "externalname",
              description:
                "Create an ExternalName service with the specified name",
              args: {
                name: "NAME",
              },
              options: [
                sharedOpts.allowMissingTemplateKeys,
                sharedOpts.dryRun,
                sharedOpts.output,
                sharedOpts.template,
                sharedOpts.fieldManager,
                sharedOpts.showManagedFields,
                {
                  name: "--external-name",
                  description: "External name of service",
                  args: {
                    name: "External name",
                  },
                },
                {
                  name: "--save-config",
                  description:
                    "If true, the configuration of current object will be saved in its annotation. Otherwise, the annotation will be unchanged. This flag is useful when you want to perform kubectl apply on this object in the future",
                },
                {
                  name: "--tcp",
                  requiresSeparator: true,
                  description:
                    "Port pairs can be specified as '<port>:<targetPort>'",
                  args: {
                    name: "<port>:<targetPort>",
                  },
                },
                sharedOpts.validate,
              ],
            },
            {
              name: "loadbalancer",
              description:
                "Create a LoadBalancer service with the specified name",
              args: {
                name: "NAME",
              },
              options: [
                sharedOpts.allowMissingTemplateKeys,
                sharedOpts.dryRun,
                sharedOpts.output,
                sharedOpts.template,
                sharedOpts.fieldManager,
                sharedOpts.showManagedFields,
                {
                  name: "--save-config",
                  description:
                    "If true, the configuration of current object will be saved in its annotation. Otherwise, the annotation will be unchanged. This flag is useful when you want to perform kubectl apply on this object in the future",
                },
                {
                  name: "--tcp",
                  requiresSeparator: true,
                  description:
                    "Port pairs can be specified as '<port>:<targetPort>'",
                  args: {
                    name: "<port>:<targetPort>",
                  },
                },
                sharedOpts.validate,
              ],
            },
            {
              name: "nodeport",
              description: "Create a NodePort service with the specified name",
              args: {
                name: "NAME",
              },
              options: [
                sharedOpts.allowMissingTemplateKeys,
                sharedOpts.dryRun,
                sharedOpts.output,
                sharedOpts.template,
                sharedOpts.fieldManager,
                sharedOpts.showManagedFields,
                {
                  name: "--node-port",
                  description:
                    "Port used to expose the service on each node in a cluster",
                  args: {
                    name: "Port (INT)",
                  },
                },
                {
                  name: "--save-config",
                  description:
                    "If true, the configuration of current object will be saved in its annotation. Otherwise, the annotation will be unchanged. This flag is useful when you want to perform kubectl apply on this object in the future",
                },
                {
                  name: "--tcp",
                  requiresSeparator: true,
                  description:
                    "Port pairs can be specified as '<port>:<targetPort>'",
                  args: {
                    name: "<port>:<targetPort>",
                  },
                },
                sharedOpts.validate,
              ],
            },
          ],
        },
        {
          name: ["serviceaccount", "sa"],
          description: "Create a service account with the specified name",
          args: {
            name: "NAME",
          },
          options: [
            sharedOpts.allowMissingTemplateKeys,
            sharedOpts.dryRun,
            sharedOpts.output,
            sharedOpts.template,
            sharedOpts.fieldManager,
            sharedOpts.showManagedFields,
            {
              name: "--save-config",
              description:
                "If true, the configuration of current object will be saved in its annotation. Otherwise, the annotation will be unchanged. This flag is useful when you want to perform kubectl apply on this object in the future",
            },
            sharedOpts.validate,
          ],
        },
        {
          name: "token",
          description: "Request a service account token",
          args: {
            name: "SERVICE_ACCOUNT_NAME",
            generators: {
              script: scripts.typeWithoutName("serviceaccounts"),
              postProcess: sharedPostProcess,
            },
          },
          options: [
            sharedOpts.allowMissingTemplateKeys,
            sharedOpts.output,
            sharedOpts.showManagedFields,
            sharedOpts.template,
            {
              name: "--audience",
              requiresSeparator: true,
              isRepeatable: true,
              description:
                "Audience of the requested token. If unset, defaults to requesting a token for use with the Kubernetes API server",
              args: { name: "Audience" },
            },
            {
              name: "--bound-object-kind",
              requiresSeparator: true,
              description:
                "Kind of an object to bind the token to. If set, --bound-object-name must be provided",
              args: { suggestions: ["Node", "Pod", "Secret"] },
            },
            {
              name: "--bound-object-name",
              requiresSeparator: true,
              description:
                "Name of an object to bind the token to. The token will expire when the object is deleted",
              args: { name: "Name" },
              dependsOn: ["--bound-object-kind"],
            },
            {
              name: "--bound-object-uid",
              requiresSeparator: true,
              description:
                "UID of an object to bind the token to. If unset, the UID of the existing object is used",
              args: { name: "UID" },
              dependsOn: ["--bound-object-kind", "--bound-object-name"],
            },
            {
              name: "--duration",
              requiresSeparator: true,
              description:
                "Requested lifetime of the issued token. If not set or if set to 0, the lifetime will be determined by the server automatically",
              args: { name: "Duration" },
            },
          ],
        },
      ],
    },
    {
      name: "debug",
      description:
        "Create debugging sessions for troubleshooting workloads and nodes",
      args: [
        sharedArgs.typeOrTypeSlashName,
        sharedArgs.resourceSuggestionsFromResourceType,
        {
          name: "COMMAND",
          isCommand: true,
          isOptional: true,
        },
      ],
      options: [
        {
          ...sharedOpts.filename,
          description: "Identifying the resource to debug",
        },
        {
          name: "--arguments-only",
          description:
            "If specified, everything after -- will be passed to the new container as Args instead of Command",
        },
        {
          name: "--attach",
          description:
            "If true, wait for the container to start running, and then attach as if 'kubectl attach ...' were called.  Default false, unless '-i/--stdin' is set, in which case the default is true",
        },
        {
          name: ["-c", "--container"],
          requiresSeparator: true,
          description: "Container name to use for debug container",
          args: { name: "Container" },
        },
        {
          name: "--copy-to",
          requiresSeparator: true,
          description: "Create a copy of the target Pod with this name",
          args: { name: "Name" },
        },
        {
          name: "--custom",
          requiresSeparator: true,
          description:
            "Path to a JSON or YAML file containing a partial container spec to customize built-in debug profiles",
          args: { template: "filepaths" },
        },
        {
          name: "--env",
          requiresSeparator: true,
          isRepeatable: true,
          description: "Environment variables to set in the container",
          args: { name: "KEY=VALUE" },
        },
        {
          name: "--image",
          requiresSeparator: true,
          description: "Container image to use for debug container",
          args: { name: "Image" },
        },
        {
          name: "--image-pull-policy",
          requiresSeparator: true,
          description:
            "The image pull policy for the container. If left empty, this value will not be specified by the client and defaulted by the server",
          args: { suggestions: ["Always", "IfNotPresent", "Never"] },
        },
        {
          name: "--keep-annotations",
          description:
            "If true, keep the original pod annotations (only with '--copy-to')",
        },
        {
          name: "--keep-init-containers",
          description:
            "Run the init containers for the pod. Defaults to true (only with '--copy-to')",
        },
        {
          name: "--keep-labels",
          description:
            "If true, keep the original pod labels (only with '--copy-to')",
        },
        {
          name: "--keep-liveness",
          description:
            "If true, keep the original pod liveness probes (only with '--copy-to')",
        },
        {
          name: "--keep-readiness",
          description:
            "If true, keep the original pod readiness probes (only with '--copy-to')",
        },
        {
          name: "--keep-startup",
          description:
            "If true, keep the original startup probes (only with '--copy-to')",
        },
        {
          name: "--profile",
          requiresSeparator: true,
          description:
            'Debugging profile. Defaults to "general"; "legacy" is deprecated and planned for removal in v1.39',
          args: {
            suggestions: [
              "general",
              "baseline",
              "restricted",
              "netadmin",
              "sysadmin",
              "legacy",
            ],
          },
        },
        {
          ...sharedOpts.quiet,
          description: "If true, suppress informational messages",
        },
        {
          name: "--replace",
          description: "When used with '--copy-to', delete the original Pod",
        },
        {
          name: "--same-node",
          description:
            "When used with '--copy-to', schedule the copy of target Pod on the same node",
        },
        {
          name: "--set-image",
          requiresSeparator: true,
          isRepeatable: true,
          description:
            "When used with '--copy-to', a list of name=image pairs for changing container images",
          args: { name: "name=image" },
        },
        {
          name: "--share-processes",
          description:
            "When used with '--copy-to', enable process namespace sharing in the copy",
        },
        {
          name: ["-i", "--stdin"],
          description:
            "Keep stdin open on the container(s) in the pod, even if nothing is attached",
        },
        {
          name: "--target",
          requiresSeparator: true,
          description:
            "When using an ephemeral container, target processes in this container name",
          args: { name: "Container" },
        },
        {
          name: ["-t", "--tty"],
          description: "Allocate a TTY for the debugging container",
        },
      ],
    },
    {
      name: "delete",
      description:
        "Delete resources by filenames, stdin, resources and names, or by resources and label selector",
      args: [
        sharedArgs.typeOrTypeSlashName,
        sharedArgs.resourceSuggestionsFromResourceType,
      ],
      options: [
        sharedOpts.dryRun,
        sharedOpts.filename,
        sharedOpts.kustomize,
        outputFormats(
          ["name"],
          'Output mode. Use "-o name" for shorter output (resource/name)'
        ),
        sharedOpts.recursive,
        sharedOpts.selector,
        sharedOpts.allResources,
        sharedOpts.fieldSelector,
        sharedOpts.allNamespaces,
        sharedOpts.cascade,
        {
          name: ["-i", "--interactive"],
          description: "If true, delete resource only when user confirms",
        },
        {
          name: "--force",
          description:
            "If true, immediately remove resources from API and bypass graceful deletion. Note that immediate deletion of some resources may result in inconsistency or data loss and requires confirmation",
        },
        {
          name: "--grace-period",
          description:
            "Period of time in seconds given to the resource to terminate gracefully. Ignored if negative. Set to 1 for immediate shutdown. Can only be set to 0 when --force is true (force deletion)",
          args: {
            name: "INT (Seconds)",
          },
        },
        {
          name: "--ignore-not-found",
          description:
            'Treat "resource not found" as a successful delete. Defaults to "true" when --all is specified',
        },
        {
          name: "--now",
          description:
            "If true, resources are signaled for immediate shutdown (same as --grace-period=1)",
        },
        {
          name: "--raw",
          description:
            "Raw URI to DELETE to the server.  Uses the transport specified by the kubeconfig file",
        },
        {
          name: "--timeout",
          description:
            "The length of time to wait before giving up on a delete, zero means determine a timeout from the size of the object",
          args: {
            name: "INT (Seconds)",
          },
        },
        {
          name: "--wait",
          description:
            "If true, wait for resources to be gone before returning. This waits for finalizers",
        },
      ],
    },
    {
      name: "describe",
      description: "Show details of a specific resource or group of resources",
      args: [
        sharedArgs.typeOrTypeSlashName,
        sharedArgs.resourceSuggestionsFromResourceType,
      ],
      options: [
        sharedOpts.filename,
        sharedOpts.kustomize,
        sharedOpts.recursive,
        sharedOpts.selector,
        sharedOpts.allNamespaces,
        sharedOpts.chunkSize,
        {
          name: "--show-events",
          description:
            "If true, display events related to the described object. Defaults to true for a single object, false for multiple objects and prefix matching",
        },
      ],
    },
    {
      name: "diff",
      description:
        "Diff configurations specified by filename or stdin between the current online configuration, and the configuration as it would be if applied",
      options: [
        sharedOpts.filename,
        sharedOpts.kustomize,
        sharedOpts.recursive,
        sharedOpts.selector,
        sharedOpts.fieldManager,
        sharedOpts.showManagedFields,
        {
          name: "--concurrency",
          requiresSeparator: true,
          description:
            "Number of objects to process in parallel when diffing against the live version",
          args: { name: "INT" },
        },
        {
          name: "--force-conflicts",
          description:
            "If true, server-side apply will force the changes against conflicts",
        },
        {
          name: "--prune",
          description:
            "Include resources that would be deleted by pruning. Can be used with -l and default shows all resources would be pruned",
        },
        {
          name: "--prune-allowlist",
          requiresSeparator: true,
          isRepeatable: true,
          description:
            "Overwrite the default allowlist with <group/version/kind> for --prune",
          args: { name: "group/version/kind" },
        },
        {
          name: "--server-side",
          description:
            "If true, apply runs in the server instead of the client",
        },
        {
          name: "--show-secrets",
          description: "If true, do not mask secret values in the diff",
        },
      ],
    },
    {
      name: "drain",
      description: "Drain node in preparation for maintenance",
      args: sharedArgs.listNodes,
      options: [
        sharedOpts.dryRun,
        sharedOpts.selector,
        sharedOpts.chunkSize,
        {
          name: "--delete-emptydir-data",
          description:
            "Continue even if there are pods using emptyDir (local data that will be deleted when the node is drained)",
        },
        {
          name: "--disable-eviction",
          description:
            "Force drain to use delete, even if eviction is supported. This will bypass checking PodDisruptionBudgets, use with caution",
        },
        {
          name: "--force",
          description:
            "Continue even if there are pods not managed by a ReplicationController, ReplicaSet, Job, DaemonSet or StatefulSet",
        },
        {
          name: "--grace-period",
          requiresSeparator: true,
          description:
            "Period of time in seconds given to each pod to terminate gracefully. If negative, the default value specified in the pod will be used",
          args: {
            name: "INT (Seconds)",
          },
        },
        {
          name: "--ignore-daemonsets",
          description: "Ignore DaemonSet-managed pods",
        },
        {
          name: "--pod-selector",
          requiresSeparator: true,
          description: "Label selector to filter pods on the node",
          args: {},
        },
        {
          name: "--skip-wait-for-delete-timeout",
          description:
            "If pod DeletionTimestamp older than N seconds, skip waiting for the pod.  Seconds must be greater than 0 to skip",
          args: {},
        },
        {
          name: "--timeout",
          requiresSeparator: true,
          description:
            "The length of time to wait before giving up, zero means infinite",
          args: {
            name: "INT (Seconds)",
          },
        },
      ],
    },
    {
      name: "edit",
      description: "Edit a resource from the default editor",
      args: [
        sharedArgs.typeOrTypeSlashName,
        sharedArgs.resourceSuggestionsFromResourceType,
      ],
      options: [
        sharedOpts.filename,
        sharedOpts.kustomize,
        sharedOpts.output,
        sharedOpts.recursive,
        sharedOpts.allowMissingTemplateKeys,
        sharedOpts.template,
        sharedOpts.record,
        sharedOpts.fieldManager,
        sharedOpts.showManagedFields,
        {
          ...sharedOpts.subresource,
          description:
            "If specified, edit will operate on the subresource of the requested object",
        },
        {
          name: "--output-patch",
          description: "Output the patch if the resource is edited",
        },
        {
          name: "--save-config",
          description:
            "If true, the configuration of current object will be saved in its annotation. Otherwise, the annotation will be unchanged. This flag is useful when you want to perform kubectl apply on this object in the future",
        },
        sharedOpts.validate,
        {
          name: "--windows-line-endings",
          description: "Defaults to the line ending native to your platform",
        },
      ],
    },
    {
      name: "events",
      description: "List events",
      options: [
        sharedOpts.allNamespaces,
        sharedOpts.allowMissingTemplateKeys,
        sharedOpts.chunkSize,
        sharedOpts.output,
        sharedOpts.showManagedFields,
        sharedOpts.template,
        {
          name: "--for",
          requiresSeparator: true,
          description:
            "Filter events to only those pertaining to the specified resource",
          args: sharedArgs.typeOrTypeSlashName,
        },
        {
          name: "--no-headers",
          description:
            "When using the default output format, don't print headers",
        },
        {
          name: "--types",
          requiresSeparator: true,
          isRepeatable: true,
          description: "Output only events of given types",
          args: { suggestions: ["Normal", "Warning"] },
        },
        {
          name: ["-w", "--watch"],
          description:
            "After listing the requested events, watch for more events",
        },
      ],
    },
    {
      name: "exec",
      description: "Execute a command in a container",
      args: [
        sharedArgs.runningPodsArg,
        {
          name: "COMMAND",
          isCommand: true,
        },
      ],
      options: [
        sharedOpts.filename,
        {
          name: ["-c", "--container"],
          description:
            "Container name. If omitted, the first container in the pod will be chosen",
          args: sharedArgs.listContainersFromPod,
        },
        {
          name: "--pod-running-timeout",
          description:
            "The length of time (like 5s, 2m, or 3h, higher than zero) to wait until at least one pod is running",
          args: {},
        },
        {
          name: ["-i", "--stdin"],
          description: "Pass stdin to the container",
        },
        {
          name: ["-t", "--tty"],
          description: "Stdin is a TTY",
        },
        {
          ...sharedOpts.quiet,
          description: "Only print output from the remote session",
        },
      ],
    },
    {
      name: "explain",
      description: "List the fields for supported resources",
      args: sharedArgs.resourcesArg,
      options: [
        {
          name: "--api-version",
          description: "Get different explanations for particular API version",
          args: {},
        },
        {
          name: ["-R", "--recursive"],
          description:
            "Print the fields of fields. Use --max-depth to cap the recursion depth",
        },
        {
          name: "--max-depth",
          requiresSeparator: true,
          description:
            "Maximum recursion depth when printing nested fields with --recursive. 0 means no limit",
          args: { name: "INT" },
          dependsOn: ["--recursive"],
        },
        {
          name: ["-o", "--output"],
          description:
            "Format in which to render the schema (plaintext, plaintext-openapiv2)",
          args: {
            name: "Output Format",
            suggestions: ["plaintext", "plaintext-openapiv2"],
          },
        },
      ],
    },
    {
      name: "expose",
      description: "Expose a resource as a new Kubernetes service",
      args: [
        sharedArgs.typeOrTypeSlashName,
        sharedArgs.resourceSuggestionsFromResourceType,
      ],
      options: [
        sharedOpts.allowMissingTemplateKeys,
        sharedOpts.dryRun,
        sharedOpts.filename,
        sharedOpts.kustomize,
        sharedOpts.output,
        sharedOpts.record,
        sharedOpts.recursive,
        sharedOpts.template,
        sharedOpts.fieldManager,
        sharedOpts.showManagedFields,
        sharedOpts.overrideType,
        {
          name: "--selector",
          requiresSeparator: true,
          description:
            "A label selector to use for this service. Only equality-based selector requirements are supported. If empty (the default) infer the selector from the resource being exposed",
          args: {},
        },
        {
          name: "--cluster-ip",
          requiresSeparator: true,
          description:
            "ClusterIP to be assigned to the service. Leave empty to auto-allocate, or set to 'None' to create a headless service",
          args: {},
        },
        {
          name: "--external-ip",
          requiresSeparator: true,
          description:
            "Additional external IP address (not managed by Kubernetes) to accept for the service. If this IP is routed to a node, the service can be accessed by this IP in addition to its generated service IP",
          args: {},
        },
        {
          name: ["-l", "--labels"],

          requiresSeparator: true,
          description: "Labels to apply to the service created by this call",
          args: {},
        },
        {
          name: "--load-balancer-ip",
          requiresSeparator: true,
          description:
            "IP to assign to the LoadBalancer. If empty, an ephemeral IP will be created and used (cloud-provider specific)",
          args: {},
        },
        {
          name: "--name",
          description: "The name for the newly created object",
          requiresSeparator: true,
          args: {},
        },
        {
          name: "--overrides",
          description:
            "An inline JSON override for the generated object. If this is non-empty, it is used to override the generated object. Requires that the object supply a valid apiVersion field",
          args: {},
        },
        {
          name: "--port",
          requiresSeparator: true,
          description:
            "The port that the service should serve on. Copied from the resource being exposed, if unspecified",
          args: {},
        },
        {
          name: "--protocol",
          requiresSeparator: true,
          description:
            "The network protocol for the service to be created. Default is 'TCP'",
          args: {
            suggestions: ["TCP", "UDP", "SCTP"],
          },
        },
        {
          name: "--save-config",
          description:
            "If true, the configuration of current object will be saved in its annotation. Otherwise, the annotation will be unchanged. This flag is useful when you want to perform kubectl apply on this object in the future",
        },
        {
          name: "--session-affinity",
          requiresSeparator: true,
          description:
            "If non-empty, set the session affinity for the service to this; legal values: 'None', 'ClientIP'",
          args: {},
        },
        {
          name: "--target-port",
          requiresSeparator: true,
          description:
            "Name or number for the port on the container that the service should direct traffic to. Optional",
          args: {},
        },
        {
          name: "--type",
          requiresSeparator: true,
          description:
            "Type for this service: ClusterIP, NodePort, LoadBalancer, or ExternalName. Default is 'ClusterIP'",
          args: {
            suggestions: [
              "ClusterIP",
              "NodePort",
              "LoadBalancer",
              "ExternalName",
            ],
          },
        },
      ],
    },
    {
      name: "get",
      description: "Display one or many resources",
      args: [
        sharedArgs.typeOrTypeSlashName,
        sharedArgs.resourceSuggestionsFromResourceType,
      ],
      options: [
        sharedOpts.allowMissingTemplateKeys,
        sharedOpts.fieldSelector,
        sharedOpts.filename,
        sharedOpts.kustomize,
        outputWithTableFormats,
        sharedOpts.recursive,
        sharedOpts.selector,
        sharedOpts.template,
        sharedOpts.allNamespaces,
        sharedOpts.chunkSize,
        sharedOpts.showManagedFields,
        {
          ...sharedOpts.subresource,
          description:
            "If specified, gets the subresource of the requested object",
        },
        {
          name: "--ignore-not-found",
          description:
            "If the requested object does not exist the command will return exit code 0",
        },
        {
          name: ["-L", "--label-columns"],
          insertValue: "--label-columns",
          description:
            "Accepts a comma separated list of labels that are going to be presented as columns. Names are case-sensitive. You can also use multiple flag options like -L label1 -L label2",
          args: {},
        },
        {
          name: "--no-headers",
          description:
            "When using the default or custom-column output format, don't print headers (default print headers)",
        },
        {
          name: "--output-watch-events",
          description:
            "Output watch event objects when --watch or --watch-only is used. Existing objects are output as initial ADDED events",
        },
        {
          name: "--raw",
          description:
            "Raw URI to request from the server.  Uses the transport specified by the kubeconfig file",
        },
        {
          name: "--server-print",
          description:
            "If true, have the server return the appropriate table output. Supports extension APIs and CRDs",
        },
        {
          name: "--show-kind",
          description:
            "If present, list the resource type for the requested object(s)",
        },
        {
          name: "--show-labels",
          description:
            "When printing, show all labels as the last column (default hide labels column)",
        },
        {
          name: "--sort-by",
          requiresSeparator: true,
          description:
            "If non-empty, sort list types using this field specification.  The field specification is expressed as a JSONPath expression (e.g. '{.metadata.name}'). The field in the API resource specified by this JSONPath expression must be an integer or a string",
          args: {},
        },
        {
          name: ["-w", "--watch"],
          description:
            "After listing/getting the requested object, watch for changes. Uninitialized objects are excluded if no object name is provided",
        },
        {
          name: "--watch-only",
          description:
            "Watch for changes to the requested object(s), without listing/getting first",
        },
      ],
    },
    {
      name: "kuberc",
      description:
        "Manage kuberc configuration files (beta; hidden when KUBECTL_KUBERC=false)",
      subcommands: [
        {
          name: "view",
          description: "Display the current kuberc configuration",
          options: [
            {
              ...sharedOpts.output,
              args: {
                ...(sharedOpts.output.args as Fig.Arg),
                default: "yaml",
              },
            },
            sharedOpts.allowMissingTemplateKeys,
            sharedOpts.showManagedFields,
            sharedOpts.template,
          ],
        },
        {
          name: "set",
          description: "Set values in the kuberc configuration",
          options: [
            {
              name: "--section",
              requiresSeparator: true,
              isRequired: true,
              description: "Section to modify",
              args: {
                suggestions: ["defaults", "aliases", "credentialplugin"],
              },
            },
            {
              name: "--command",
              requiresSeparator: true,
              description:
                "Command to configure (e.g., 'get', 'create', 'set env'). Required for defaults and aliases",
              args: { name: "Command" },
            },
            {
              name: "--name",
              requiresSeparator: true,
              description: "Alias name (required for --section=aliases)",
              args: { name: "Alias" },
            },
            {
              name: "--option",
              requiresSeparator: true,
              isRepeatable: true,
              description: "Flag option in the form flag=value",
              args: { name: "flag=value" },
            },
            {
              name: "--prependarg",
              requiresSeparator: true,
              isRepeatable: true,
              description: "Argument to prepend to the command (aliases only)",
              args: { name: "Arg" },
            },
            {
              name: "--appendarg",
              requiresSeparator: true,
              isRepeatable: true,
              description: "Argument to append to the command (aliases only)",
              args: { name: "Arg" },
            },
            {
              name: "--policy",
              requiresSeparator: true,
              description: "Plugin policy to use for exec credential plugins",
              args: { suggestions: ["AllowAll", "DenyAll", "Allowlist"] },
            },
            {
              name: "--allowlist-entry",
              requiresSeparator: true,
              isRepeatable: true,
              description: "Allowlist entry in the form field=value",
              args: { name: "field=value" },
            },
            {
              name: "--overwrite",
              description: "Allow overwriting existing entries",
            },
          ],
        },
      ],
    },
    {
      name: "kustomize",
      description:
        "Print a set of API resources generated from instructions in a kustomization.yaml file",
      args: {
        name: "DIR",
        template: "folders",
      },
      options: [
        {
          name: ["-o", "--output"],
          description: "If specified, write output to this path",
          args: {
            name: "Path",
            template: "filepaths",
          },
        },
        {
          name: "--as-current-user",
          description:
            "Use the uid and gid of the command executor to run the function in the container",
        },
        {
          name: "--enable-alpha-plugins",
          description: "Enable kustomize plugins",
        },
        {
          name: "--enable-helm",
          description: "Enable use of the Helm chart inflator generator",
        },
        {
          name: "--enable-managedby-label",
          description:
            "Deprecated, use the managedByLabel option in the buildMetadata field instead. Enable adding app.kubernetes.io/managed-by",
          deprecated: true,
        },
        {
          name: ["--env", "-e"],
          description:
            "A list of environment variables to be used by functions",
          requiresSeparator: true,
          isRepeatable: true,
          args: {
            name: "KEY=VALUE",
          },
        },
        {
          name: "--helm-api-versions",
          requiresSeparator: true,
          isRepeatable: true,
          description:
            "Kubernetes api versions used by Helm for Capabilities.APIVersions",
          args: { name: "API Version" },
        },
        {
          name: "--helm-command",
          requiresSeparator: true,
          description: "Helm command (path to executable)",
          args: { name: "Command", template: "filepaths" },
        },
        {
          name: "--helm-debug",
          description:
            "Enable debug output from the Helm chart inflator generator",
        },
        {
          name: "--helm-kube-version",
          requiresSeparator: true,
          description:
            "Kubernetes version used by Helm for Capabilities.KubeVersion",
          args: { name: "Version" },
        },
        {
          name: "--load-restrictor",
          description:
            "If set to 'LoadRestrictionsNone', local kustomizations may load files from outside their root. This does, however, break the relocatability of the kustomization",
          requiresSeparator: true,
          args: {
            suggestions: ["LoadRestrictionsRootOnly", "LoadRestrictionsNone"],
          },
        },
        {
          name: "--mount",
          description: "A list of storage options read from the filesystem",
          requiresSeparator: true,
          args: {},
        },
        {
          name: "--network",
          description: "Enable network access for functions that declare it",
        },
        {
          name: "--network-name",
          description: "The docker network to run the container in",
          requiresSeparator: true,
          args: {},
        },
        {
          name: "--reorder",
          description:
            "Deprecated, use the sortOptions field in kustomization.yaml instead. Reorder the resources just before output",
          requiresSeparator: true,
          args: { suggestions: ["legacy", "none"] },
          deprecated: true,
        },
      ],
    },
    {
      name: "label",
      description: "Update the labels on a resource",
      args: [
        sharedArgs.typeOrTypeSlashName,
        sharedArgs.resourceSuggestionsFromResourceType,
      ],
      options: [
        sharedOpts.allowMissingTemplateKeys,
        sharedOpts.dryRun,
        sharedOpts.fieldSelector,
        sharedOpts.filename,
        sharedOpts.kustomize,
        sharedOpts.local,
        sharedOpts.output,
        sharedOpts.record,
        sharedOpts.recursive,
        sharedOpts.selector,
        sharedOpts.template,
        sharedOpts.resourceVersion,
        sharedOpts.allNamespaces,
        sharedOpts.fieldManager,
        sharedOpts.showManagedFields,
        {
          name: "--all",
          description:
            "Select all resources, including uninitialized ones, in the namespace of the specified resource types",
        },
        {
          name: "--list",
          description: "If true, display the labels for a given resource",
        },
        {
          name: "--overwrite",
          description:
            "If true, allow labels to be overwritten, otherwise reject label updates that overwrite existing labels",
        },
      ],
    },
    {
      name: "logs",
      description:
        "Print the logs for a container in a pod or specified resource. If the pod has only one container, the container name is optional",
      args: [
        sharedArgs.typeOrTypeSlashName,
        sharedArgs.resourceSuggestionsFromResourceType,
      ],
      options: [
        sharedOpts.selector,
        {
          name: "--all-pods",
          description: "Get logs from all pod(s). Sets prefix to true",
        },
        {
          name: "--all-containers",
          description: "Get all containers' logs in the pod(s)",
        },
        {
          name: ["-c", "--container"],
          description: "Print the logs of this container",
          args: {},
        },
        {
          name: ["-f", "--follow"],
          description: "Specify if the logs should be streamed",
        },
        {
          name: "--ignore-errors",
          description:
            "If watching / following pod logs, allow for any errors that occur to be non-fatal",
        },
        {
          name: "--insecure-skip-tls-verify-backend",
          description:
            "Skip verifying the identity of the kubelet that logs are requested from.  In theory, an attacker could provide invalid log content back. You might want to use this if your kubelet serving certificates have expired",
        },
        {
          name: "--limit-bytes",
          requiresSeparator: true,
          description: "Maximum bytes of logs to return. Defaults to no limit",
          args: {},
        },
        {
          name: "--max-log-requests",
          requiresSeparator: true,
          description:
            "Specify maximum number of concurrent logs to follow when using by a selector. Defaults to 5",
          args: {},
        },
        {
          name: "--pod-running-timeout",
          requiresSeparator: true,
          description:
            "The length of time (like 5s, 2m, or 3h, higher than zero) to wait until at least one pod is running",
          args: {},
        },
        {
          name: "--prefix",
          description:
            "Prefix each log line with the log source (pod name and container name)",
        },
        {
          name: ["-p", "--previous"],
          description:
            "If true, print the logs for the previous instance of the container in a pod if it exists",
        },
        {
          name: "--since",
          requiresSeparator: true,
          description:
            "Only return logs newer than a relative duration like 5s, 2m, or 3h. Defaults to all logs. Only one of since-time / since may be used",
          args: {},
        },
        {
          name: "--since-time",
          requiresSeparator: true,
          description:
            "Only return logs after a specific date (RFC3339). Defaults to all logs. Only one of since-time / since may be used",
          args: {},
        },
        {
          name: "--tail",
          requiresSeparator: true,
          description:
            "Lines of recent log file to display. Defaults to -1 with no selector, showing all log lines otherwise 10, if a selector is provided",
          args: {},
        },
        {
          name: "--timestamps",
          description: "Include timestamps on each line in the log output",
        },
      ],
    },
    {
      name: "options",
      description: "Print the list of flags inherited by all commands",
    },
    {
      name: "patch",
      description:
        "Update field(s) of a resource using strategic merge patch, a JSON merge patch, or a JSON patch",
      args: [
        sharedArgs.typeOrTypeSlashName,
        sharedArgs.resourceSuggestionsFromResourceType,
      ],
      options: [
        sharedOpts.allowMissingTemplateKeys,
        sharedOpts.dryRun,
        sharedOpts.filename,
        sharedOpts.kustomize,
        sharedOpts.local,
        sharedOpts.output,
        sharedOpts.record,
        sharedOpts.recursive,
        sharedOpts.template,
        sharedOpts.fieldManager,
        sharedOpts.showManagedFields,
        {
          ...sharedOpts.subresource,
          description:
            "If specified, patch will operate on the subresource of the requested object",
        },
        {
          name: ["-p", "--patch"],
          description: "The patch to be applied to the resource JSON file",
          args: {},
          exclusiveOn: ["--patch-file"],
        },
        {
          name: "--patch-file",
          requiresSeparator: true,
          description:
            "A file containing a patch to be applied to the resource",
          args: { template: "filepaths" },
          exclusiveOn: ["-p", "--patch"],
        },
        {
          name: "--type",
          requiresSeparator: true,
          description:
            "The type of patch being provided; one of [json merge strategic]",
          args: {
            suggestions: ["json", "merge", "strategic"],
          },
        },
      ],
    },
    {
      name: "plugin",
      description: "Provides utilities for interacting with plugins",
      subcommands: [
        {
          name: "list",
          description: "List all visible plugin executables on a user's PATH",
          options: [
            {
              name: "--name-only",
              description:
                "If true, display only the binary name of each plugin, rather than its full path",
            },
          ],
        },
      ],
    },
    {
      name: "port-forward",
      description:
        "Forward one or more local ports to a pod. This command requires the node to have 'socat' installed",
      args: [
        sharedArgs.typeOrTypeSlashName,
        sharedArgs.resourceSuggestionsFromResourceType,
        {
          name: "[LOCAL_PORT:REMOTE_PORT]",
          isVariadic: true,
        },
      ],
      options: [
        {
          name: "--address",
          description:
            "Addresses to listen on (comma separated). Only accepts IP addresses or localhost as a value. When localhost is supplied, kubectl will try to bind on both 127.0.0.1 and ::1 and will fail if neither of these addresses are available to bind",
          args: {},
        },
        {
          name: "--pod-running-timeout",
          requiresSeparator: true,
          description:
            "The length of time (like 5s, 2m, or 3h, higher than zero) to wait until at least one pod is running",
          args: {},
        },
      ],
    },
    {
      name: "proxy",
      description:
        "Creates a proxy server or application-level gateway between localhost and the Kubernetes API Server. It also allows serving static content over specified HTTP path. All incoming data enters through one port and gets forwarded to the remote kubernetes API Server port, except for the path matching the static content path",
      options: [
        {
          name: "--accept-hosts",
          requiresSeparator: true,
          description:
            "Regular expression for hosts that the proxy should accept",
          args: {},
        },
        {
          name: "--accept-paths",
          requiresSeparator: true,
          description:
            "Regular expression for paths that the proxy should accept",
          args: {},
        },
        {
          name: "--address",
          requiresSeparator: true,
          description: "The IP address on which to serve on",
          args: {},
        },
        {
          name: "--api-prefix",
          requiresSeparator: true,
          description: "Prefix to serve the proxied API under",
          args: {},
        },
        {
          name: "--disable-filter",
          description:
            "If true, disable request filtering in the proxy. This is dangerous, and can leave you vulnerable to XSRF attacks, when used with an accessible port",
        },
        {
          name: "--keepalive",
          requiresSeparator: true,
          description:
            "Keepalive specifies the keep-alive period for an active network connection. Set to 0 to disable keepalive",
          args: {},
        },
        {
          name: ["-p", "--port"],

          requiresSeparator: true,
          description:
            "The port on which to run the proxy. Set to 0 to pick a random port",
          args: {},
        },
        {
          name: "--reject-methods",
          requiresSeparator: true,
          description:
            "Regular expression for HTTP methods that the proxy should reject (example --reject-methods='POST,PUT,PATCH')",
          args: {},
        },
        {
          name: "--reject-paths",
          requiresSeparator: true,
          description:
            "Regular expression for paths that the proxy should reject. Paths specified here will be rejected even accepted by --accept-paths",
          args: {},
        },
        {
          name: ["-u", "--unix-socket"],

          requiresSeparator: true,
          description: "Unix socket on which to run the proxy",
          args: {},
        },
        {
          name: ["-w", "--www"],

          requiresSeparator: true,
          description:
            "Also serve static files from the given directory under the specified prefix",
          args: {},
        },
        {
          name: ["-P", "--www-prefix"],

          requiresSeparator: true,
          description:
            "Prefix to serve static files under, if static file directory is specified",
          args: {},
        },
        {
          name: "--append-server-path",
          description:
            "If true, enables automatic path appending of the kube context server path to each request",
        },
      ],
    },
    {
      name: "replace",
      description: "Replace a resource by filename or stdin",
      options: [
        sharedOpts.allowMissingTemplateKeys,
        sharedOpts.dryRun,
        sharedOpts.filename,
        sharedOpts.kustomize,
        sharedOpts.output,
        sharedOpts.recursive,
        sharedOpts.template,
        sharedOpts.cascade,
        sharedOpts.fieldManager,
        sharedOpts.showManagedFields,
        {
          ...sharedOpts.subresource,
          description:
            "If specified, replace will operate on the subresource of the requested object",
        },
        {
          name: "--force",
          description:
            "If true, immediately remove resources from API and bypass graceful deletion. Note that immediate deletion of some resources may result in inconsistency or data loss and requires confirmation",
        },
        {
          name: "--grace-period",
          requiresSeparator: true,
          description:
            "Period of time in seconds given to the resource to terminate gracefully. Ignored if negative. Set to 1 for immediate shutdown. Can only be set to 0 when --force is true (force deletion)",
          args: {},
        },
        {
          name: "--raw",
          requiresSeparator: true,
          description:
            "Raw URI to PUT to the server.  Uses the transport specified by the kubeconfig file",
          args: {},
        },
        {
          name: "--save-config",
          description:
            "If true, the configuration of current object will be saved in its annotation. Otherwise, the annotation will be unchanged. This flag is useful when you want to perform kubectl apply on this object in the future",
        },
        {
          name: "--timeout",
          requiresSeparator: true,
          description:
            "The length of time to wait before giving up on a delete, zero means determine a timeout from the size of the object",
          args: {},
        },
        sharedOpts.validate,
        {
          name: "--wait",
          description:
            "If true, wait for resources to be gone before returning. This waits for finalizers",
        },
      ],
    },
    {
      name: "rollout",
      description: "Manage the rollout of a resource",
      subcommands: [
        {
          name: "history",
          description: "View previous rollout revisions and configurations",
          // TODO: Use this or a more general resource generator?
          args: sharedArgs.listDeployments,
          options: [
            sharedOpts.allowMissingTemplateKeys,
            sharedOpts.filename,
            sharedOpts.kustomize,
            sharedOpts.output,
            sharedOpts.recursive,
            sharedOpts.template,
            sharedOpts.selector,
            sharedOpts.showManagedFields,
            {
              name: "--revision",
              requiresSeparator: true,
              description:
                "See the details, including podTemplate of the revision specified",
              // Generator for revisions of resource specified in args
              args: {},
            },
          ],
        },
        {
          name: "pause",
          description: "Mark the provided resource as paused",
          args: sharedArgs.listDeployments,
          options: [
            sharedOpts.allowMissingTemplateKeys,
            sharedOpts.filename,
            sharedOpts.kustomize,
            sharedOpts.output,
            sharedOpts.recursive,
            sharedOpts.template,
            sharedOpts.selector,
            sharedOpts.fieldManager,
            sharedOpts.showManagedFields,
          ],
        },
        {
          name: "restart",
          description: "Restart a resource",
          args: sharedArgs.listDeployments,
          options: [
            sharedOpts.allowMissingTemplateKeys,
            sharedOpts.filename,
            sharedOpts.kustomize,
            sharedOpts.output,
            sharedOpts.recursive,
            sharedOpts.template,
            sharedOpts.selector,
            sharedOpts.fieldManager,
            sharedOpts.showManagedFields,
          ],
        },
        {
          name: "resume",
          description: "Resume a paused resource",
          args: sharedArgs.listDeployments,
          options: [
            sharedOpts.allowMissingTemplateKeys,
            sharedOpts.filename,
            sharedOpts.kustomize,
            sharedOpts.output,
            sharedOpts.recursive,
            sharedOpts.template,
            sharedOpts.selector,
            sharedOpts.fieldManager,
            sharedOpts.showManagedFields,
          ],
        },
        {
          name: "status",
          description: "Show the status of the rollout",
          args: sharedArgs.listDeployments,
          options: [
            sharedOpts.filename,
            sharedOpts.kustomize,
            sharedOpts.recursive,
            sharedOpts.selector,
            {
              name: "--revision",
              requiresSeparator: true,
              description:
                "Pin to a specific revision for showing its status. Defaults to 0 (last revision)",
              args: {},
            },
            {
              name: "--timeout",
              requiresSeparator: true,
              description:
                "The length of time to wait before ending watch, zero means never. Any other values should contain a corresponding time unit (e.g. 1s, 2m, 3h)",
              args: {},
            },
            {
              name: ["-w", "--watch"],
              description: "Watch the status of the rollout until it's done",
            },
          ],
        },
        {
          name: "undo",
          description: "Rollback to a previous rollout",
          args: sharedArgs.listDeployments,
          options: [
            sharedOpts.allowMissingTemplateKeys,
            sharedOpts.filename,
            sharedOpts.kustomize,
            sharedOpts.recursive,
            sharedOpts.dryRun,
            sharedOpts.output,
            sharedOpts.selector,
            sharedOpts.showManagedFields,
            sharedOpts.template,
            {
              name: "--to-revision",
              requiresSeparator: true,
              description:
                "The revision to rollback to. Default to 0 (last revision)",
              args: { name: "Revision" },
            },
          ],
        },
      ],
    },
    {
      name: "run",
      description: "Create and run a particular image in a pod",
      args: {
        name: "NAME",
      },
      options: [
        sharedOpts.allowMissingTemplateKeys,
        {
          ...sharedOpts.filename,
          description:
            "Deprecated, it is ignored by kubectl run and will be removed in a future release",
          deprecated: true,
        },
        sharedOpts.dryRun,
        sharedOpts.kustomize,
        sharedOpts.recursive,
        sharedOpts.output,
        sharedOpts.record,
        sharedOpts.template,
        sharedOpts.fieldManager,
        sharedOpts.showManagedFields,
        sharedOpts.overrideType,
        detachKeys,
        {
          name: "--privileged",
          description: "If true, run the container in privileged mode",
        },
        {
          name: "--annotations",
          requiresSeparator: true,
          description: "Annotations to apply to the pod",
          args: {},
        },
        {
          name: "--attach",
          description:
            "If true, wait for the Pod to start running, and then attach to the Pod as if 'kubectl attach ...' were called.  Default false, unless '-i/--stdin' is set, in which case the default is true. With '--restart=Never' the exit code of the container process is returned",
        },
        sharedOpts.cascade,
        {
          name: "--command",
          description:
            "If true and extra arguments are present, use them as the 'command' field in the container, rather than the 'args' field which is the default",
        },
        {
          name: "--env",
          requiresSeparator: true,
          description: "Environment variables to set in the container",
          args: {},
        },
        {
          name: "--expose",
          description:
            "If true, service is created for the container(s) which are run",
        },
        {
          name: "--force",
          description:
            "If true, immediately remove resources from API and bypass graceful deletion. Note that immediate deletion of some resources may result in inconsistency or data loss and requires confirmation",
        },
        {
          name: "--grace-period",
          requiresSeparator: true,
          description:
            "Period of time in seconds given to the resource to terminate gracefully. Ignored if negative. Set to 1 for immediate shutdown. Can only be set to 0 when --force is true (force deletion)",
          args: {},
        },
        {
          name: "--image",
          requiresSeparator: true,
          description: "The image for the container to run",
          args: {},
        },
        {
          name: "--image-pull-policy",
          description:
            "The image pull policy for the container. If left empty, this value will not be specified by the client and defaulted by the server",
          args: { suggestions: ["Always", "IfNotPresent", "Never"] },
        },
        {
          name: ["-l", "--labels"],

          requiresSeparator: true,
          description:
            "Comma separated labels to apply to the pod(s). Will override previous values",
          args: {},
        },
        {
          name: "--leave-stdin-open",
          description:
            "If the pod is started in interactive mode or with stdin, leave stdin open after the first attach completes. By default, stdin will be closed after the first attach completes",
        },
        {
          name: "--overrides",
          requiresSeparator: true,
          description:
            "An inline JSON override for the generated object. If this is non-empty, it is used to override the generated object. Requires that the object supply a valid apiVersion field",
          args: {},
        },
        {
          name: "--pod-running-timeout",
          requiresSeparator: true,
          description:
            "The length of time (like 5s, 2m, or 3h, higher than zero) to wait until at least one pod is running",
          args: {},
        },
        {
          name: "--port",
          requiresSeparator: true,
          description: "The port that this container exposes",
          args: {},
        },
        sharedOpts.quiet,
        {
          name: "--restart",
          requiresSeparator: true,
          description:
            "The restart policy for this Pod.  Legal values [Always, OnFailure, Never].  If set to 'Always' a deployment is created, if set to 'OnFailure' a job is created, if set to 'Never', a regular pod is created. For the latter two --replicas must be 1.  Default 'Always', for CronJobs `Never`",
          args: {
            suggestions: ["Always", "OnFailure", "Never"],
          },
        },
        {
          name: "--rm",
          description:
            "If true, delete resources created in this command for attached containers",
        },
        {
          name: "--save-config",
          description:
            "If true, the configuration of current object will be saved in its annotation. Otherwise, the annotation will be unchanged. This flag is useful when you want to perform kubectl apply on this object in the future",
        },
        {
          name: ["-i", "--stdin"],
          description:
            "Keep stdin open on the container(s) in the pod, even if nothing is attached",
        },
        {
          name: "--timeout",
          requiresSeparator: true,
          description:
            "The length of time to wait before giving up on a delete, zero means determine a timeout from the size of the object",
          args: {},
        },
        {
          name: ["-t", "--tty"],
          description: "Allocated a TTY for each container in the pod",
        },
        {
          name: "--wait",
          description:
            "If true, wait for resources to be gone before returning. This waits for finalizers",
        },
      ],
    },
    {
      name: "scale",
      description:
        "Set a new size for a Deployment, ReplicaSet, Replication Controller, or StatefulSet",
      args: [
        sharedArgs.typeOrTypeSlashName,
        sharedArgs.resourceSuggestionsFromResourceType,
      ],
      options: [
        sharedOpts.allowMissingTemplateKeys,
        sharedOpts.filename,
        sharedOpts.kustomize,
        sharedOpts.output,
        sharedOpts.recursive,
        sharedOpts.record,
        sharedOpts.resourceVersion,
        sharedOpts.selector,
        sharedOpts.template,
        sharedOpts.dryRun,
        sharedOpts.showManagedFields,
        {
          name: "--all",
          description:
            "Select all resources in the namespace of the specified resource types",
        },
        {
          name: "--current-replicas",
          requiresSeparator: true,
          description:
            "Precondition for current size. Requires that the current size of the resource match this value in order to scale",
          args: {},
        },
        {
          name: "--replicas",
          requiresSeparator: true,
          description: "The new desired number of replicas. Required",
          args: {},
        },
        {
          name: "--timeout",
          description:
            "The length of time to wait before giving up on a scale operation, zero means don't wait. Any other values should contain a corresponding time unit (e.g. 1s, 2m, 3h)",
          args: {},
        },
      ],
    },
    {
      name: "set",
      description: "Configure application resources",
      subcommands: [
        {
          name: "env",
          description: "Update environment variables on a pod template",
          args: [
            sharedArgs.typeOrTypeSlashName,
            sharedArgs.resourceSuggestionsFromResourceType,
            {
              name: "KEY=VALUE",
              isVariadic: true,
            },
          ],
          options: [
            sharedOpts.allowMissingTemplateKeys,
            sharedOpts.dryRun,
            sharedOpts.filename,
            sharedOpts.kustomize,
            sharedOpts.output,
            sharedOpts.local,
            sharedOpts.fieldManager,
            sharedOpts.showManagedFields,
            sharedOpts.recursive,
            sharedOpts.selector,
            sharedOpts.template,
            {
              name: "--all",
              description:
                "If true, select all resources in the namespace of the specified resource types",
            },
            {
              name: ["-c", "--containers"],

              requiresSeparator: true,
              description:
                "The names of containers in the selected pod templates to change - may use wildcards",
              args: {},
            },
            {
              name: ["-e", "--env"],

              requiresSeparator: true,
              description:
                "Specify a key-value pair for an environment variable to set into each container",
              args: {},
            },
            {
              name: "--from",
              requiresSeparator: true,
              description:
                "The name of a resource from which to inject environment variables",
              args: {},
            },
            {
              name: "--keys",
              requiresSeparator: true,
              description:
                "Comma-separated list of keys to import from specified resource",
              args: {},
            },
            {
              name: "--list",
              description:
                "If true, display the environment and any changes in the standard format. this flag will removed when we have kubectl view env",
            },
            {
              name: "--overwrite",
              description:
                "If true, allow environment to be overwritten, otherwise reject updates that overwrite existing environment",
            },
            {
              name: "--prefix",
              description: "Prefix to append to variable names",
              args: {},
            },
            {
              name: "--resolve",
              description:
                "If true, show secret or configmap references when listing variables",
            },
          ],
        },
        {
          name: "image",
          description: "Update existing container image(s) of resources",
          args: [
            sharedArgs.typeOrTypeSlashName,
            sharedArgs.resourceSuggestionsFromResourceType,
            {
              name: "CONTAINER_NAME=IMAGE_NAME",
              isVariadic: true,
            },
          ],
          options: [
            sharedOpts.allowMissingTemplateKeys,
            sharedOpts.dryRun,
            sharedOpts.filename,
            sharedOpts.kustomize,
            sharedOpts.output,
            sharedOpts.local,
            sharedOpts.fieldManager,
            sharedOpts.showManagedFields,
            sharedOpts.recursive,
            sharedOpts.selector,
            sharedOpts.template,
            sharedOpts.record,
            {
              name: "--all",
              description:
                "Select all resources, including uninitialized ones, in the namespace of the specified resource types",
            },
          ],
        },
        {
          name: "resources",
          description:
            "Specify compute resource requirements (cpu, memory) for any resource that defines a pod template.  If a pod is successfully scheduled, it is guaranteed the amount of resource requested, but may burst up to its specified limits",
          args: [
            sharedArgs.typeOrTypeSlashName,
            sharedArgs.resourceSuggestionsFromResourceType,
          ],
          options: [
            sharedOpts.allowMissingTemplateKeys,
            sharedOpts.dryRun,
            sharedOpts.filename,
            sharedOpts.kustomize,
            sharedOpts.output,
            sharedOpts.local,
            sharedOpts.fieldManager,
            sharedOpts.showManagedFields,
            sharedOpts.recursive,
            sharedOpts.selector,
            sharedOpts.template,
            sharedOpts.record,
            {
              name: "--all",
              description:
                "Select all resources, including uninitialized ones, in the namespace of the specified resource types",
            },
            {
              name: ["-c", "--containers"],

              requiresSeparator: true,
              description:
                "The names of containers in the selected pod templates to change, all containers are selected by default - may use wildcards",
              args: {},
            },
            {
              name: "--limits",
              requiresSeparator: true,
              description:
                "The resource requirement requests for this container.  For example, 'cpu=100m,memory=256Mi'.  Note that server side components may assign requests depending on the server configuration, such as limit ranges",
              args: {},
            },
            {
              name: "--requests",
              requiresSeparator: true,
              description:
                "The resource requirement requests for this container.  For example, 'cpu=100m,memory=256Mi'.  Note that server side components may assign requests depending on the server configuration, such as limit ranges",
              args: {},
            },
          ],
        },
        {
          name: "selector",
          description:
            "Set the selector on a resource. Note that the new selector will overwrite the old selector if the resource had one prior to the invocation of 'set selector'",
          args: [
            sharedArgs.typeOrTypeSlashName,
            sharedArgs.resourceSuggestionsFromResourceType,
            {
              name: "EXPRESSIONS",
            },
          ],
          options: [
            sharedOpts.allowMissingTemplateKeys,
            sharedOpts.dryRun,
            sharedOpts.filename,
            sharedOpts.output,
            sharedOpts.local,
            sharedOpts.fieldManager,
            sharedOpts.showManagedFields,
            sharedOpts.recursive,
            sharedOpts.template,
            sharedOpts.record,
            sharedOpts.resourceVersion,
            {
              name: "--all",
              description:
                "Select all resources in the namespace of the specified resource types",
            },
          ],
        },
        {
          name: ["serviceaccount", "sa"],
          description: "Update ServiceAccount of pod template resources",
          args: [
            sharedArgs.typeOrTypeSlashName,
            sharedArgs.resourceSuggestionsFromResourceType,
          ],
          options: [
            sharedOpts.allowMissingTemplateKeys,
            sharedOpts.dryRun,
            sharedOpts.filename,
            sharedOpts.kustomize,
            sharedOpts.output,
            sharedOpts.local,
            sharedOpts.fieldManager,
            sharedOpts.showManagedFields,
            sharedOpts.recursive,
            sharedOpts.template,
            sharedOpts.record,
            {
              name: "--all",
              description:
                "Select all resources, including uninitialized ones, in the namespace of the specified resource types",
            },
          ],
        },
        {
          // TODO: Check this, I think the docs are wrong...
          name: "subject",
          description:
            "Update User, Group or ServiceAccount in a RoleBinding/ClusterRoleBinding",
          args: [
            sharedArgs.typeOrTypeSlashName,
            sharedArgs.resourceSuggestionsFromResourceType,
          ],
          options: [
            sharedOpts.allowMissingTemplateKeys,
            sharedOpts.dryRun,
            sharedOpts.filename,
            sharedOpts.kustomize,
            sharedOpts.output,
            sharedOpts.local,
            sharedOpts.fieldManager,
            sharedOpts.showManagedFields,
            sharedOpts.recursive,
            sharedOpts.template,
            {
              name: "--all",
              description:
                "Select all resources, including uninitialized ones, in the namespace of the specified resource types",
            },
            {
              name: "--group",
              requiresSeparator: true,
              description: "Groups to bind to the role",
              args: {},
            },
            {
              name: "--serviceaccount",
              requiresSeparator: true,
              description: "Service accounts to bind to the role",
              args: {},
            },
            sharedOpts.selector,
            {
              name: "--user",
              requiresSeparator: true,
              isRepeatable: true,
              description: "Usernames to bind to the role",
              args: { name: "Username" },
            },
          ],
        },
      ],
    },
    {
      name: "taint",
      description: "Update the taints on one or more nodes",
      args: sharedArgs.listNodes,
      options: [
        sharedOpts.allowMissingTemplateKeys,
        sharedOpts.dryRun,
        sharedOpts.output,
        sharedOpts.selector,
        sharedOpts.template,
        sharedOpts.fieldManager,
        sharedOpts.showManagedFields,
        {
          name: "--all",
          description: "Select all nodes in the cluster",
        },
        {
          name: "--overwrite",
          description:
            "If true, allow taints to be overwritten, otherwise reject taint updates that overwrite existing taints",
        },
        sharedOpts.validate,
      ],
    },
    {
      name: "top",
      description: "Display resource (CPU/memory) usage",
      subcommands: [
        {
          name: ["node", "nodes", "no"],
          description: "Display resource (CPU/memory) usage of nodes",
          args: { ...sharedArgs.listNodes, isOptional: true },
          options: [
            sharedOpts.selector,
            topNoHeaders,
            topUseProtocolBuffers,
            {
              name: "--show-capacity",
              description:
                "Print node resources based on Capacity instead of Allocatable(default) of the nodes",
            },
            topShowSwap,
            topSortBy,
          ],
        },
        {
          name: ["pod", "pods", "po"],
          description: "Display resource (CPU/memory) usage of pods",
          args: {
            name: "Pod",
            isOptional: true,
            generators: {
              script: scripts.typeWithoutName("pods"),
              postProcess: sharedPostProcess,
            },
          },
          options: [
            sharedOpts.selector,
            sharedOpts.fieldSelector,
            sharedOpts.allNamespaces,
            topNoHeaders,
            topUseProtocolBuffers,
            {
              name: "--containers",
              description: "If present, print usage of containers within a pod",
            },
            topShowSwap,
            topSortBy,
            {
              name: "--sum",
              description: "Print the sum of the resource usage",
            },
          ],
        },
      ],
    },
    {
      name: "uncordon",
      description: "Mark node as schedulable",
      args: sharedArgs.listNodes,
      options: [sharedOpts.dryRun, sharedOpts.selector],
    },
    {
      name: "version",
      description:
        "Print the client and server version information for the current context",
      options: [
        outputFormats(["yaml", "json"], "One of 'yaml' or 'json'"),
        {
          name: "--client",
          description:
            "If true, shows client version only (no server required)",
        },
      ],
    },
    {
      name: "wait",
      description: "Wait for a specific condition on one or many resources",
      args: [
        sharedArgs.typeOrTypeSlashName,
        sharedArgs.resourceSuggestionsFromResourceType,
      ],
      options: [
        sharedOpts.allowMissingTemplateKeys,
        sharedOpts.fieldSelector,
        sharedOpts.filename,
        sharedOpts.local,
        sharedOpts.output,
        sharedOpts.recursive,
        sharedOpts.selector,
        sharedOpts.template,
        sharedOpts.showManagedFields,
        {
          name: "--all",
          description:
            "Select all resources in the namespace of the specified resource types",
        },
        sharedOpts.allNamespaces,
        {
          name: "--for",
          requiresSeparator: true,
          isRepeatable: true,
          description:
            "The condition to wait on: [create|delete|condition=condition-name[=condition-value]|jsonpath='{JSONPath expression}'=[JSONPath value]]. Repeat to wait for multiple conditions",
          args: {
            name: "Condition",
            suggestions: ["create", "delete", "condition=", "jsonpath="],
          },
        },
        {
          name: "--timeout",
          requiresSeparator: true,
          description:
            "The length of time to wait before giving up.  Zero means check once and don't wait, negative means wait for a week",
          args: {},
        },
      ],
    },
  ],
  // Global options (`kubectl options`)
  options: persistent([
    {
      name: ["-n", "--namespace"],
      args: {
        name: "namespace",
        generators: {
          script: scripts.typeWithoutName("namespaces"),
          postProcess: sharedPostProcess,
        },
      },
      description: "If present, the namespace scope for this CLI request",
    },
    {
      name: "--as",
      description:
        "Username to impersonate for the operation. User could be a regular user or a service account in a namespace",
      args: { name: "User" },
    },
    {
      name: "--as-group",
      isRepeatable: true,
      description:
        "Group to impersonate for the operation, this flag can be repeated to specify multiple groups",
      args: { name: "Group" },
    },
    {
      name: "--as-uid",
      description: "UID to impersonate for the operation",
      args: { name: "UID" },
    },
    {
      name: "--as-user-extra",
      isRepeatable: true,
      description:
        "User extras to impersonate for the operation, this flag can be repeated to specify multiple values for the same key",
      args: { name: "key=value" },
    },
    {
      name: "--cache-dir",
      description: "Default cache directory",
      args: { name: "Directory", template: "folders" },
    },
    {
      name: "--certificate-authority",
      description: "Path to a cert file for the certificate authority",
      args: { name: "File", template: "filepaths" },
    },
    {
      name: "--client-certificate",
      description: "Path to a client certificate file for TLS",
      args: { name: "File", template: "filepaths" },
    },
    {
      name: "--client-key",
      description: "Path to a client key file for TLS",
      args: { name: "File", template: "filepaths" },
    },
    {
      name: "--cluster",
      description: "The name of the kubeconfig cluster to use",
      args: sharedArgs.listClusters,
    },
    {
      name: "--context",
      description: "The name of the kubeconfig context to use",
      args: sharedArgs.listKubeConfContexts,
    },
    {
      name: "--disable-compression",
      description:
        "If true, opt-out of response compression for all requests to the server",
    },
    {
      name: "--insecure-skip-tls-verify",
      description:
        "If true, the server's certificate will not be checked for validity. This will make your HTTPS connections insecure",
    },
    {
      name: "--kubeconfig",
      description: "Path to the kubeconfig file to use for CLI requests",
      args: { name: "File", template: "filepaths" },
    },
    {
      name: "--kuberc",
      description: "Path to the kuberc file to use for preferences",
      args: { name: "File", template: "filepaths" },
    },
    {
      name: "--log-flush-frequency",
      description: "Maximum number of seconds between log flushes",
      args: { name: "Duration" },
    },
    {
      name: "--match-server-version",
      description: "Require server version to match client version",
    },
    {
      name: "--password",
      description: "Password for basic authentication to the API server",
      args: { name: "Password" },
    },
    {
      name: "--profile",
      description: "Name of profile to capture",
      args: {
        suggestions: [
          "none",
          "cpu",
          "heap",
          "goroutine",
          "threadcreate",
          "block",
          "mutex",
          "trace",
        ],
      },
    },
    {
      name: "--profile-output",
      description: "Name of the file to write the profile to",
      args: { name: "File", template: "filepaths" },
    },
    {
      name: "--proxy-url",
      description:
        "Proxy URL to use for requests to the API server, overriding the kubeconfig",
      args: { name: "URL" },
    },
    {
      name: "--request-timeout",
      description:
        "The length of time to wait before giving up on a single server request. Non-zero values should contain a corresponding time unit (e.g. 1s, 2m, 3h). A value of zero means don't timeout requests",
      args: { name: "Duration" },
    },
    {
      name: ["-s", "--server"],
      description: "The address and port of the Kubernetes API server",
      args: { name: "Server" },
    },
    {
      name: "--tls-server-name",
      description:
        "Server name to use for server certificate validation. If it is not provided, the hostname used to contact the server is used",
      args: { name: "Server Name" },
    },
    {
      name: "--token",
      description: "Bearer token for authentication to the API server",
      args: { name: "Token" },
    },
    {
      name: "--user",
      description: "The name of the kubeconfig user to use",
      args: { name: "User" },
    },
    {
      name: "--username",
      description: "Username for basic authentication to the API server",
      args: { name: "Username" },
    },
    {
      name: ["-v", "--v"],
      description: "Number for the log level verbosity",
      args: { name: "Level" },
    },
    {
      name: "--vmodule",
      description:
        "Comma-separated list of pattern=N settings for file-filtered logging (only works for the default text log format)",
      args: { name: "pattern=N" },
    },
    {
      name: "--warnings-as-errors",
      description:
        "Treat warnings received from the server as errors and exit with a non-zero exit code",
    },
  ]),
};

export default completionSpec;
