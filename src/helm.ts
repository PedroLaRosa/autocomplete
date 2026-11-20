// Helm v4.3.2 (latest stable git tag of helm/helm, re-verified 2026-11-20).
// Source: cobra command and flag definitions in helm/helm pkg/cmd/*.go and
// pkg/cli/environment.go at v4.3.2, read statically (binary not run). Audit
// 2026-11-20 removed `helm list --all/-a` (no such flag in v4) and the s3 and
// unittest stubs (third-party plugins, not part of helm). Positional arguments
// are not modelled.

const output: Fig.Option = {
  name: ["--output", "-o"],
  description:
    "Prints the output in the specified format. Allowed values: table, json, yaml",
  args: {
    name: "format",
    default: "table",
    suggestions: ["table", "json", "yaml"],
  },
};

const keyring = (
  description = "Location of public keys used for verification"
): Fig.Option => ({
  name: "--keyring",
  description,
  args: {
    name: "keyring",
    template: "filepaths",
    default: "~/.gnupg/pubring.gpg",
  },
});

const revision = (
  description = "Get the named release with revision"
): Fig.Option => ({
  name: "--revision",
  description,
  args: { name: "revision", default: "0" },
});

const maxColWidth = (dflt: string): Fig.Option => ({
  name: "--max-col-width",
  description: "Maximum column width for output table",
  args: { name: "max-col-width", default: dflt },
});

const timeout: Fig.Option = {
  name: "--timeout",
  description:
    "Time to wait for any individual Kubernetes operation (like Jobs for hooks)",
  args: { name: "timeout", default: "5m0s" },
};

const indexTimeout: Fig.Option = {
  name: "--timeout",
  description: "Time to wait for the index file download to complete",
  args: { name: "timeout", default: "2m0s" },
};

const description: Fig.Option = {
  name: "--description",
  description: "Add a custom description",
  args: { name: "description" },
};

const devel: Fig.Option = {
  name: "--devel",
  description:
    "Use development versions, too. Equivalent to version '>0.0.0-0'. If --version is set, this is ignored",
};

const passCredentials: Fig.Option = {
  name: "--pass-credentials",
  description: "Pass credentials to all domains",
};

const credentials = (
  who = "Chart repository",
  suffix = " where to locate the requested chart"
): Fig.Option[] => [
  {
    name: "--username",
    description: `${who} username${suffix}`,
    args: { name: "username" },
  },
  {
    name: "--password",
    description: `${who} password${suffix}`,
    args: { name: "password" },
  },
];

const certOptions = (client: string): Fig.Option[] => [
  {
    name: "--ca-file",
    description:
      "Verify certificates of HTTPS-enabled servers using this CA bundle",
    args: { name: "ca-file", template: "filepaths" },
  },
  {
    name: "--cert-file",
    description: `Identify ${client} client using this SSL certificate file`,
    args: { name: "cert-file", template: "filepaths" },
  },
  {
    name: "--key-file",
    description: `Identify ${client} client using this SSL key file`,
    args: { name: "key-file", template: "filepaths" },
  },
];

const insecureSkipTlsVerify = (target: string): Fig.Option => ({
  name: "--insecure-skip-tls-verify",
  description: `Skip tls certificate checks for the ${target}`,
});

const plainHttp = (target: string): Fig.Option => ({
  name: "--plain-http",
  description: `Use insecure HTTP connections for the ${target}`,
});

// Chart download client flags (dependency build/update, package)
const chartDownloadOptions: Fig.Option[] = [
  ...credentials(),
  ...certOptions("HTTPS"),
  insecureSkipTlsVerify("chart download"),
  plainHttp("chart download"),
];

// addChartPathOptionsFlags: install, upgrade, template, pull, show *
const chartPathOptions: Fig.Option[] = [
  ...chartDownloadOptions,
  keyring(),
  passCredentials,
  {
    name: "--repo",
    description: "Chart repository url where to locate the requested chart",
    args: { name: "repo" },
  },
  { name: "--verify", description: "Verify the package before using it" },
  {
    name: "--version",
    description:
      "Specify a version constraint for the chart version to use. This constraint can be a specific tag (e.g. 1.1.1) or it may reference a valid range (e.g. ^2.0.0). If this is not specified, the latest version is used",
    args: { name: "version" },
  },
];

// addValueOptionsFlags: install, upgrade, template, lint
const valueOptions: Fig.Option[] = [
  {
    name: "--set",
    description:
      "Set values on the command line (can specify multiple or separate values with commas: key1=val1,key2=val2)",
    isRepeatable: true,
    args: { name: "set" },
  },
  {
    name: "--set-file",
    description:
      "Set values from respective files specified via the command line (can specify multiple or separate values with commas: key1=path1,key2=path2)",
    isRepeatable: true,
    args: { name: "set-file", template: "filepaths" },
  },
  {
    name: "--set-json",
    description:
      'Set JSON values on the command line (can specify multiple or separate values with commas: key1=jsonval1,key2=jsonval2 or using json format: {"key1": jsonval1, "key2": "jsonval2"})',
    isRepeatable: true,
    args: { name: "set-json" },
  },
  {
    name: "--set-literal",
    description: "Set a literal STRING value on the command line",
    isRepeatable: true,
    args: { name: "set-literal" },
  },
  {
    name: "--set-string",
    description:
      "Set STRING values on the command line (can specify multiple or separate values with commas: key1=val1,key2=val2)",
    isRepeatable: true,
    args: { name: "set-string" },
  },
  {
    name: ["--values", "-f"],
    description:
      "Specify values in a YAML file or a URL (can specify multiple)",
    isRepeatable: true,
    args: { name: "values", template: "filepaths" },
  },
];

// Flags with NoOptDefVal: a value must be attached with `=`
const dryRun = (dflt: string, suggestions: string[]): Fig.Option => ({
  name: "--dry-run",
  requiresSeparator: true,
  description: `Simulate the operation without persisting changes. '--dry-run=client' avoids cluster connections; '--dry-run=server' simulates the operation on the server (default: ${dflt})`,
  args: { name: "strategy", isOptional: true, suggestions },
});

const wait: Fig.Option = {
  name: "--wait",
  requiresSeparator: true,
  description:
    "Wait until resources are ready (up to --timeout). Use '--wait' alone for 'watcher' strategy. Default when flag is omitted: 'hookOnly'",
  args: {
    name: "strategy",
    isOptional: true,
    suggestions: ["watcher", "hookOnly", "legacy"],
  },
};

const waitForJobs: Fig.Option = {
  name: "--wait-for-jobs",
  description:
    "If set and --wait enabled, will wait until all Jobs have been completed before marking the release as successful. It will wait for as long as --timeout",
};

const forceOptions: Fig.Option[] = [
  {
    name: "--force",
    description: "Force resource updates by replacement",
    deprecated: { description: "Use --force-replace" },
  },
  {
    name: "--force-conflicts",
    description:
      "If set server-side apply will force changes against conflicts",
    exclusiveOn: ["--force-replace", "--force"],
  },
  {
    name: "--force-replace",
    description: "Force resource updates by replacement",
  },
];

const serverSideAuto: Fig.Option = {
  name: "--server-side",
  description:
    'Object updates run in the server instead of the client ("auto" defaults the value from the previous chart release\'s method)',
  args: {
    name: "server-side",
    default: "auto",
    suggestions: ["true", "false", "auto"],
  },
};

const historyMax: Fig.Option = {
  name: "--history-max",
  description:
    "Limit the maximum number of revisions saved per release. Use 0 for no limit",
  args: { name: "history-max", default: "10" },
};

const cleanupOnFail = (cmd: string): Fig.Option => ({
  name: "--cleanup-on-fail",
  description: `Allow deletion of new resources created in this ${cmd} when ${cmd} fails`,
});

const postRendererOptions: Fig.Option[] = [
  {
    name: "--post-renderer",
    description:
      "The name of a postrenderer type plugin to be used for post rendering. If it exists, the plugin will be used",
    args: { name: "post-renderer" },
  },
  {
    name: "--post-renderer-args",
    description: "An argument to the post-renderer (can specify multiple)",
    isRepeatable: true,
    args: { name: "post-renderer-args" },
  },
];

// Shared by install, upgrade and template
const releaseOptions: Fig.Option[] = [
  ...valueOptions,
  ...chartPathOptions,
  ...forceOptions,
  description,
  devel,
  timeout,
  wait,
  waitForJobs,
  {
    name: "--atomic",
    description: "Roll back on failure",
    deprecated: { description: "Use --rollback-on-failure" },
  },
  {
    name: "--dependency-update",
    description:
      "Update dependencies if they are missing before installing the chart",
  },
  {
    name: "--enable-dns",
    description: "Enable DNS lookups when rendering templates",
  },
  {
    name: "--skip-schema-validation",
    description: "If set, disables JSON schema validation",
  },
];

// addInstallFlags: install and template
const installOptions: Fig.Option[] = [
  ...releaseOptions,
  {
    name: "--create-namespace",
    description: "Create the release namespace if not present",
  },
  {
    name: "--disable-openapi-validation",
    description:
      "If set, the installation process will not validate rendered templates against the Kubernetes OpenAPI Schema",
  },
  {
    name: ["--generate-name", "-g"],
    description: "Generate the name (and omit the NAME parameter)",
  },
  {
    name: ["--labels", "-l"],
    description:
      "Labels that would be added to release metadata. Should be divided by comma",
    args: { name: "labels" },
  },
  {
    name: "--name-template",
    description: "Specify template used to name the release",
    args: { name: "name-template" },
  },
  {
    name: "--no-hooks",
    description: "Prevent hooks from running during install",
  },
  {
    name: "--replace",
    description:
      "Reuse the given name, only if that name is a deleted release which remains in the history. This is unsafe in production",
  },
  {
    name: "--rollback-on-failure",
    description:
      'If set, Helm will rollback (uninstall) the installation upon failure. The --wait flag will be default to "watcher" if --rollback-on-failure is set',
  },
  {
    name: "--server-side",
    description:
      "Object updates run in the server instead of the client (default true)",
  },
  {
    name: "--skip-crds",
    description:
      "If set, no CRDs will be installed. By default, CRDs are installed if not already present",
  },
  {
    name: "--take-ownership",
    description:
      "If set, install will ignore the check for helm annotations and take ownership of the existing resources",
  },
];

const notesOptions = (cmd: string): Fig.Option[] => [
  {
    name: "--hide-notes",
    description: `If set, do not show notes in ${cmd} output. Does not affect presence in chart metadata`,
  },
  {
    name: "--render-subchart-notes",
    description: "If set, render subchart notes along with the parent",
  },
];

const hideSecret: Fig.Option = {
  name: "--hide-secret",
  description: "Hide Kubernetes Secrets when also using the --dry-run flag",
};

const showOptions: Fig.Option[] = [devel, ...chartPathOptions];

const noDescriptions: Fig.Option = {
  name: "--no-descriptions",
  description: "Disable completion descriptions",
};

const subcommands: Fig.Subcommand[] = [
  {
    name: "completion",
    description: "Generate autocompletion scripts for the specified shell",
    subcommands: ["bash", "fish", "powershell", "zsh"].map((shell) => ({
      name: shell,
      description: `Generate autocompletion script for ${shell}`,
      options: [noDescriptions],
    })),
  },
  {
    name: "create",
    description: "Create a new chart with the given name",
    options: [
      {
        name: ["--starter", "-p"],
        description: "The name or absolute path to Helm starter scaffold",
        args: { name: "starter" },
      },
      {
        name: "--chart-api-version",
        description: "Chart API version to use (v2 or v3)",
        hidden: true,
        args: {
          name: "chart-api-version",
          default: "v2",
          suggestions: ["v2", "v3"],
        },
      },
    ],
  },
  {
    name: ["dep", "dependencies", "dependency"],
    description: "Manage a chart's dependencies",
    subcommands: [
      {
        name: "build",
        description:
          "Rebuild the charts/ directory based on the Chart.lock file",
        options: [
          ...chartDownloadOptions,
          keyring("Keyring containing public keys"),
          {
            name: "--skip-refresh",
            description: "Do not refresh the local repository cache",
          },
          {
            name: "--verify",
            description: "Verify the packages against signatures",
          },
        ],
      },
      {
        name: ["ls", "list"],
        description: "List the dependencies for the given chart",
        options: [maxColWidth("80")],
      },
      {
        name: ["up", "update"],
        description: "Update charts/ based on the contents of Chart.yaml",
        options: [
          ...chartDownloadOptions,
          keyring("Keyring containing public keys"),
          {
            name: "--skip-refresh",
            description: "Do not refresh the local repository cache",
          },
          {
            name: "--verify",
            description: "Verify the packages against signatures",
          },
        ],
      },
    ],
  },
  {
    name: "docs",
    description: "Generate documentation as markdown or man pages",
    hidden: true,
    options: [
      {
        name: "--dir",
        description: "Directory to which documentation is written",
        args: { name: "dir", template: "folders", default: "./" },
      },
      {
        name: "--generate-headers",
        description: "Generate standard headers for markdown files",
      },
      {
        name: "--type",
        description: "The type of documentation to generate",
        args: {
          name: "type",
          default: "markdown",
          suggestions: ["bash", "man", "markdown"],
        },
      },
    ],
  },
  { name: "env", description: "Helm client environment information" },
  {
    name: "get",
    description: "Download extended information of a named release",
    subcommands: [
      {
        name: "all",
        description: "Download all information for a named release",
        options: [
          revision(),
          {
            name: "--template",
            description:
              "Go template for formatting the output, eg: {{.Release.Name}}",
            args: { name: "template" },
          },
        ],
      },
      {
        name: "hooks",
        description: "Download all hooks for a named release",
        options: [revision()],
      },
      {
        name: "manifest",
        description: "Download the manifest for a named release",
        options: [revision()],
      },
      {
        name: "metadata",
        description: "This command fetches metadata for a given release",
        options: [revision("Specify release revision"), output],
      },
      {
        name: "notes",
        description: "Download the notes for a named release",
        options: [revision()],
      },
      {
        name: "values",
        description: "Download the values file for a named release",
        options: [
          {
            name: ["--all", "-a"],
            description: "Dump all (computed) values",
          },
          output,
          revision(),
        ],
      },
    ],
  },
  {
    name: ["hist", "history"],
    description: "Fetch release history",
    options: [
      {
        name: "--max",
        description: "Maximum number of revision to include in history",
        args: { name: "max", default: "256" },
      },
      output,
      {
        name: "--show-rollback-revision",
        description: "Show the rollback revision column in table output",
      },
    ],
  },
  {
    name: "install",
    description: "Install a chart",
    options: [
      ...installOptions,
      ...notesOptions("install"),
      ...postRendererOptions,
      dryRun("none", ["none", "client", "server"]),
      hideSecret,
      output,
    ],
  },
  {
    name: "lint",
    description: "Examine a chart for possible issues",
    options: [
      ...valueOptions,
      {
        name: "--kube-version",
        description:
          "Kubernetes version used for capabilities and deprecation checks",
        args: { name: "kube-version" },
      },
      { name: "--quiet", description: "Print only warnings and errors" },
      {
        name: "--skip-schema-validation",
        description: "If set, disables JSON schema validation",
      },
      { name: "--strict", description: "Fail on lint warnings" },
      { name: "--with-subcharts", description: "Lint dependent charts" },
    ],
  },
  {
    name: ["ls", "list"],
    description: "List releases",
    options: [
      {
        name: ["--all-namespaces", "-A"],
        description: "List releases across all namespaces",
      },
      { name: ["--date", "-d"], description: "Sort by release date" },
      { name: "--deployed", description: "Show deployed releases" },
      { name: "--failed", description: "Show failed releases" },
      {
        name: ["--filter", "-f"],
        description:
          "A regular expression (Perl compatible). Any releases that match the expression will be included in the results",
        args: { name: "filter" },
      },
      {
        name: ["--max", "-m"],
        description: "Maximum number of releases to fetch",
        args: { name: "max", default: "256" },
      },
      {
        name: "--no-headers",
        description: "Don't print headers when using the default output format",
      },
      {
        name: "--offset",
        description:
          "Next release index in the list, used to offset from start value",
        args: { name: "offset", default: "0" },
      },
      output,
      { name: "--pending", description: "Show pending releases" },
      {
        name: ["--reverse", "-r"],
        description: "Reverse the sort order",
      },
      {
        name: ["--selector", "-l"],
        description:
          "Selector (label query) to filter on, supports '=', '==', and '!='.(e.g. -l key1=value1,key2=value2). Works only for secret(default) and configmap storage backends",
        args: { name: "selector" },
      },
      {
        name: ["--short", "-q"],
        description: "Output short (quiet) listing format",
      },
      {
        name: "--superseded",
        description: "Show superseded releases",
      },
      {
        name: "--time-format",
        description:
          'Format time using golang time formatter. Example: --time-format "2006-01-02 15:04:05Z0700"',
        args: { name: "time-format" },
      },
      {
        name: "--uninstalled",
        description:
          "Show uninstalled releases (if 'helm uninstall --keep-history' was used)",
      },
      {
        name: "--uninstalling",
        description: "Show releases that are currently being uninstalled",
      },
    ],
  },
  {
    name: "package",
    description: "Package a chart directory into a chart archive",
    options: [
      ...chartDownloadOptions,
      {
        name: "--app-version",
        description: "Set the appVersion on the chart to this version",
        args: { name: "app-version" },
      },
      {
        name: ["--dependency-update", "-u"],
        description:
          'Update dependencies from "Chart.yaml" to dir "charts/" before packaging',
      },
      {
        name: ["--destination", "-d"],
        description: "Location to write the chart",
        args: { name: "destination", template: "folders", default: "." },
      },
      {
        name: "--key",
        description:
          "Name of the key to use when signing. Used if --sign is true",
        args: { name: "key" },
      },
      keyring("Location of a public keyring"),
      {
        name: "--passphrase-file",
        description:
          'Location of a file which contains the passphrase for the signing key. Use "-" in order to read from stdin',
        args: { name: "passphrase-file", template: "filepaths" },
      },
      {
        name: "--sign",
        description: "Use a PGP private key to sign this package",
      },
      {
        name: "--version",
        description: "Set the version on the chart to this semver version",
        args: { name: "version" },
      },
    ],
  },
  {
    name: "plugin",
    description: "Install, list, or uninstall Helm plugins",
    subcommands: [
      {
        name: ["add", "install"],
        description: "Install a Helm plugin",
        options: [
          ...credentials("Registry", ""),
          ...certOptions("registry"),
          insecureSkipTlsVerify("plugin download"),
          plainHttp("plugin download"),
          keyring(),
          {
            name: "--verify",
            description:
              "Verify the plugin signature before installing (default true)",
          },
          {
            name: "--version",
            description:
              "Specify a version constraint. If this is not specified, the latest version is installed",
            args: { name: "version" },
          },
        ],
      },
      {
        name: ["ls", "list"],
        description: "List installed Helm plugins",
        options: [
          {
            name: "--type",
            description: "Plugin type",
            args: {
              name: "type",
              suggestions: ["cli/v1", "getter/v1", "postrenderer/v1"],
            },
          },
        ],
      },
      {
        name: "package",
        description: "Package a plugin directory into a plugin archive",
        options: [
          {
            name: ["--destination", "-d"],
            description: "Location to write the plugin tarball",
            args: { name: "destination", template: "folders", default: "." },
          },
          {
            name: "--key",
            description:
              "Name of the key to use when signing. Used if --sign is true",
            args: { name: "key" },
          },
          keyring("Location of a public keyring"),
          {
            name: "--passphrase-file",
            description:
              'Location of a file which contains the passphrase for the signing key. Use "-" to read from stdin',
            args: { name: "passphrase-file", template: "filepaths" },
          },
          {
            name: "--sign",
            description:
              "Use a PGP private key to sign this plugin (default true)",
          },
        ],
      },
      {
        name: ["rm", "remove", "uninstall"],
        description: "Uninstall one or more Helm plugins",
      },
      {
        name: ["up", "update"],
        description: "Update one or more Helm plugins",
      },
      {
        name: "verify",
        description:
          "Verify that a plugin at the given path has been signed and is valid",
        options: [keyring("Keyring containing public keys")],
      },
    ],
  },
  {
    name: ["fetch", "pull"],
    description:
      "Download a chart from a repository and (optionally) unpack it in local directory",
    options: [
      ...chartPathOptions,
      devel,
      {
        name: ["--destination", "-d"],
        description:
          "Location to write the chart. If this and untardir are specified, untardir is appended to this",
        args: { name: "destination", template: "folders", default: "." },
      },
      {
        name: "--prov",
        description:
          "Fetch the provenance file, but don't perform verification",
      },
      {
        name: "--untar",
        description:
          "If set to true, will untar the chart after downloading it",
      },
      {
        name: "--untardir",
        description:
          "If untar is specified, this flag specifies the name of the directory into which the chart is expanded",
        args: { name: "untardir", default: ".", template: "folders" },
      },
    ],
  },
  {
    name: "push",
    description: "Push a chart to remote",
    options: [
      ...credentials(),
      ...certOptions("registry"),
      insecureSkipTlsVerify("chart upload"),
      plainHttp("chart upload"),
    ],
  },
  {
    name: "registry",
    description: "Login to or logout from a registry",
    subcommands: [
      {
        name: "login",
        description: "Login to a registry",
        options: [
          ...certOptions("registry"),
          plainHttp("chart upload"),
          {
            name: "--insecure",
            description: "Allow connections to TLS registry without certs",
          },
          {
            name: ["--password", "-p"],
            description: "Registry password or identity token",
            args: { name: "password" },
          },
          {
            name: "--password-stdin",
            description: "Read password or identity token from stdin",
          },
          {
            name: ["--username", "-u"],
            description: "Registry username",
            args: { name: "username" },
          },
        ],
      },
      { name: "logout", description: "Logout from a registry" },
    ],
  },
  {
    name: "repo",
    description: "Add, list, remove, update, and index chart repositories",
    subcommands: [
      {
        name: "add",
        description: "Add a chart repository",
        options: [
          ...credentials("Chart repository", ""),
          ...certOptions("HTTPS"),
          insecureSkipTlsVerify("repository"),
          passCredentials,
          indexTimeout,
          {
            name: "--allow-deprecated-repos",
            description:
              "By default, this command will not allow adding official repos that have been permanently deleted. This disables that behavior",
          },
          {
            name: "--force-update",
            description: "Replace (overwrite) the repo if it already exists",
          },
          {
            name: "--password-stdin",
            description: "Read chart repository password from stdin",
          },
        ],
      },
      {
        name: "index",
        description:
          "Generate an index file given a directory containing packaged charts",
        options: [
          { name: "--json", description: "Output in JSON format" },
          {
            name: "--merge",
            description: "Merge the generated index into the given index",
            args: { name: "merge", template: "filepaths" },
          },
          {
            name: "--url",
            description: "Url of chart repository",
            args: { name: "url" },
          },
        ],
      },
      {
        name: ["ls", "list"],
        description: "List chart repositories",
        options: [
          {
            name: "--no-headers",
            description: "Suppress headers in the output",
          },
          output,
        ],
      },
      {
        name: ["rm", "remove"],
        description: "Remove one or more chart repositories",
      },
      {
        name: ["up", "update"],
        description:
          "Update information of available charts locally from chart repositories",
        options: [indexTimeout],
      },
    ],
  },
  {
    name: "rollback",
    description: "Roll back a release to a previous revision",
    options: [
      ...forceOptions,
      cleanupOnFail("rollback"),
      {
        name: "--description",
        description:
          "Add a custom description for the rollback (max 256 characters)",
        args: { name: "description" },
      },
      dryRun("none", ["none", "client", "server"]),
      historyMax,
      {
        name: "--no-hooks",
        description: "Prevent hooks from running during rollback",
      },
      serverSideAuto,
      timeout,
      wait,
      waitForJobs,
    ],
  },
  {
    name: "search",
    description: "Search for a keyword in charts",
    subcommands: [
      {
        name: "hub",
        description:
          "Search for charts in the Artifact Hub or your own hub instance",
        options: [
          {
            name: "--endpoint",
            description: "Hub instance to query for charts",
            args: { name: "endpoint", default: "https://hub.helm.sh" },
          },
          {
            name: "--fail-on-no-result",
            description: "Search fails if no results are found",
          },
          {
            name: "--list-repo-url",
            description: "Print charts repository URL",
          },
          maxColWidth("50"),
          output,
        ],
      },
      {
        name: "repo",
        description: "Search repositories for a keyword in charts",
        options: [
          {
            name: "--devel",
            description:
              "Use development versions (alpha, beta, and release candidate releases), too. Equivalent to version '>0.0.0-0'. If --version is set, this is ignored",
          },
          {
            name: "--fail-on-no-result",
            description: "Search fails if no results are found",
          },
          maxColWidth("50"),
          output,
          {
            name: ["--regexp", "-r"],
            description:
              "Use regular expressions for searching repositories you have added",
          },
          {
            name: "--version",
            description:
              "Search using semantic versioning constraints on repositories you have added",
            args: { name: "version" },
          },
          {
            name: ["--versions", "-l"],
            description:
              "Show the long listing, with each version of each chart on its own line, for repositories you have added",
          },
        ],
      },
    ],
  },
  {
    name: ["inspect", "show"],
    description: "Show information of a chart",
    subcommands: [
      {
        name: "all",
        description: "Show all information of the chart",
        options: showOptions,
      },
      {
        name: "chart",
        description: "Show the chart's definition",
        options: showOptions,
      },
      {
        name: "crds",
        description: "Show the chart's CRDs",
        options: showOptions,
      },
      {
        name: "readme",
        description: "Show the chart's README",
        options: showOptions,
      },
      {
        name: "values",
        description: "Show the chart's values",
        options: [
          ...showOptions,
          {
            name: "--jsonpath",
            description: "Supply a JSONPath expression to filter the output",
            args: { name: "jsonpath" },
          },
        ],
      },
    ],
  },
  {
    name: "status",
    description: "Display the status of the named release",
    options: [
      output,
      revision("If set, display the status of the named release with revision"),
    ],
  },
  {
    name: "template",
    description: "Locally render templates",
    options: [
      ...installOptions,
      ...notesOptions("install").map((option) => ({
        ...option,
        hidden: true,
        deprecated: { description: "Has no effect for 'helm template'" },
      })),
      ...postRendererOptions,
      dryRun("client", ["client", "server"]),
      {
        name: ["--api-versions", "-a"],
        description:
          "Kubernetes api versions used for Capabilities.APIVersions (multiple can be specified)",
        isRepeatable: true,
        args: { name: "api-versions" },
      },
      {
        name: "--include-crds",
        description: "Include CRDs in the templated output",
      },
      {
        name: "--is-upgrade",
        description: "Set .Release.IsUpgrade instead of .Release.IsInstall",
      },
      {
        name: "--kube-version",
        description: "Kubernetes version used for Capabilities.KubeVersion",
        args: { name: "kube-version" },
      },
      {
        name: "--output-dir",
        description:
          "Writes the executed templates to files in output-dir instead of stdout",
        args: { name: "output-dir", template: "folders" },
      },
      {
        name: "--release-name",
        description: "Use release name in the output-dir path",
      },
      {
        name: ["--show-only", "-s"],
        description: "Only show manifests rendered from the given templates",
        isRepeatable: true,
        args: { name: "show-only", template: "filepaths" },
      },
      {
        name: "--skip-tests",
        description: "Skip tests from templated output",
      },
      {
        name: "--validate",
        description:
          "Validate your manifests against the Kubernetes cluster you are currently pointing at",
        deprecated: { description: "Use --dry-run=server" },
        exclusiveOn: ["--dry-run"],
      },
    ],
  },
  {
    name: "test",
    description: "Run tests for a release",
    options: [
      {
        name: "--filter",
        description:
          "Specify tests by attribute (currently \"name\") using attribute=value syntax or '!attribute=value' to exclude a test (can specify multiple or separate values with commas: name=test1,name=test2)",
        isRepeatable: true,
        args: { name: "filter" },
      },
      {
        name: "--logs",
        description:
          "Dump the logs from test pods (this runs after all tests are complete, but before any cleanup)",
      },
      timeout,
    ],
  },
  {
    name: ["del", "delete", "un", "uninstall"],
    description: "Uninstall a release",
    options: [
      {
        name: "--cascade",
        description:
          'Selects the deletion cascading strategy for the dependents. Use "foreground" with --wait to ensure resources with finalizers are fully deleted before returning',
        args: {
          name: "cascade",
          default: "background",
          suggestions: ["background", "orphan", "foreground"],
        },
      },
      description,
      { name: "--dry-run", description: "Simulate a uninstall" },
      {
        name: "--ignore-not-found",
        description: 'Treat "release not found" as a successful uninstall',
      },
      {
        name: "--keep-history",
        description:
          "Remove all associated resources and mark the release as deleted, but retain the release history",
      },
      {
        name: "--no-hooks",
        description: "Prevent hooks from running during uninstallation",
      },
      timeout,
      wait,
    ],
  },
  {
    name: "upgrade",
    description: "Upgrade a release",
    options: [
      ...releaseOptions,
      ...notesOptions("upgrade"),
      ...postRendererOptions,
      cleanupOnFail("upgrade"),
      dryRun("none", ["none", "client", "server"]),
      hideSecret,
      historyMax,
      output,
      serverSideAuto,
      {
        name: "--create-namespace",
        description:
          "If --install is set, create the release namespace if not present",
      },
      {
        name: "--disable-openapi-validation",
        description:
          "If set, the upgrade process will not validate rendered templates against the Kubernetes OpenAPI Schema",
      },
      {
        name: ["--install", "-i"],
        description:
          "If a release by this name doesn't already exist, run an install",
      },
      {
        name: ["--labels", "-l"],
        description:
          "Labels that would be added to release metadata. Should be separated by comma. Original release labels will be merged with upgrade labels. You can unset label using null",
        args: { name: "labels" },
      },
      { name: "--no-hooks", description: "Disable pre/post upgrade hooks" },
      {
        name: "--reset-then-reuse-values",
        description:
          "When upgrading, reset the values to the ones built into the chart, apply the last release's values and merge in any overrides from the command line via --set and -f. If '--reset-values' or '--reuse-values' is specified, this is ignored",
      },
      {
        name: "--reset-values",
        description:
          "When upgrading, reset the values to the ones built into the chart",
      },
      {
        name: "--reuse-values",
        description:
          "When upgrading, reuse the last release's values and merge in any overrides from the command line via --set and -f. If '--reset-values' is specified, this is ignored",
      },
      {
        name: "--rollback-on-failure",
        description:
          'If set, Helm will rollback the upgrade to previous success release upon failure. The --wait flag will be defaulted to "watcher" if --rollback-on-failure is set',
      },
      {
        name: "--skip-crds",
        description:
          "If set, no CRDs will be installed when an upgrade is performed with install flag enabled. By default, CRDs are installed if not already present, when an upgrade is performed with install flag enabled",
      },
      {
        name: "--take-ownership",
        description:
          "If set, upgrade will ignore the check for helm annotations and take ownership of the existing resources",
      },
    ],
  },
  {
    name: "verify",
    description:
      "Verify that a chart at the given path has been signed and is valid",
    options: [keyring("Keyring containing public keys")],
  },
  {
    name: "version",
    description: "Print the helm version information",
    options: [
      { name: "--short", description: "Print the version number" },
      {
        name: "--template",
        description: "Template for version string format",
        args: { name: "template" },
      },
    ],
  },
];

// `helm help <cmd>` mirrors the visible command tree without flags
const helpTree = (commands: Fig.Subcommand[]): Fig.Subcommand[] =>
  commands
    .filter((command) => !command.hidden)
    .map(({ name, description, subcommands }) => ({
      name,
      description,
      subcommands: subcommands && helpTree(subcommands),
    }));

const completionSpec: Fig.Spec = {
  name: "helm",
  description: "The Helm package manager for Kubernetes",
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
      name: "--add-dir-header",
      description:
        "If true, adds the file directory to the header of the log messages",
      isPersistent: true,
      hidden: true,
    },
    {
      name: "--alsologtostderr",
      description: "Log to standard error as well as files",
      isPersistent: true,
      hidden: true,
    },
    {
      name: "--burst-limit",
      description: "Client-side default throttling limit",
      isPersistent: true,
      args: { name: "burst-limit", default: "100" },
    },
    {
      name: ["--color", "--colour"],
      description: "Use colored output",
      isPersistent: true,
      args: {
        name: "mode",
        default: "auto",
        suggestions: ["never", "auto", "always"],
      },
    },
    {
      name: "--content-cache",
      description:
        "Path to the directory containing cached content (e.g. charts)",
      isPersistent: true,
      args: {
        name: "content-cache",
        template: "folders",
        default: "~/Library/Caches/helm/content",
      },
    },
    {
      name: "--debug",
      description: "Enable verbose output",
      isPersistent: true,
    },
    {
      name: "--kube-apiserver",
      description: "The address and the port for the Kubernetes API server",
      isPersistent: true,
      args: { name: "kube-apiserver" },
    },
    {
      name: "--kube-as-group",
      description:
        "Group to impersonate for the operation, this flag can be repeated to specify multiple groups",
      isPersistent: true,
      isRepeatable: true,
      args: { name: "kube-as-group" },
    },
    {
      name: "--kube-as-user",
      description: "Username to impersonate for the operation",
      isPersistent: true,
      args: { name: "kube-as-user" },
    },
    {
      name: "--kube-ca-file",
      description:
        "The certificate authority file for the Kubernetes API server connection",
      isPersistent: true,
      args: { name: "kube-ca-file", template: "filepaths" },
    },
    {
      name: "--kube-context",
      description: "Name of the kubeconfig context to use",
      isPersistent: true,
      args: { name: "kube-context" },
    },
    {
      name: "--kube-insecure-skip-tls-verify",
      description:
        "If true, the Kubernetes API server's certificate will not be checked for validity. This will make your HTTPS connections insecure",
      isPersistent: true,
    },
    {
      name: "--kube-tls-server-name",
      description:
        "Server name to use for Kubernetes API server certificate validation. If it is not provided, the hostname used to contact the server is used",
      isPersistent: true,
      args: { name: "kube-tls-server-name" },
    },
    {
      name: "--kube-token",
      description: "Bearer token used for authentication",
      isPersistent: true,
      args: { name: "kube-token" },
    },
    {
      name: "--kubeconfig",
      description: "Path to the kubeconfig file",
      isPersistent: true,
      args: { name: "kubeconfig", template: "filepaths" },
    },
    {
      name: "--log-backtrace-at",
      description: "When logging hits line file:N, emit a stack trace",
      isPersistent: true,
      hidden: true,
      args: { name: "log-backtrace-at", default: ":0" },
    },
    {
      name: "--log-dir",
      description: "If non-empty, write log files in this directory",
      isPersistent: true,
      hidden: true,
      args: { name: "log-dir", template: "folders" },
    },
    {
      name: "--log-file",
      description: "If non-empty, use this log file",
      isPersistent: true,
      hidden: true,
      args: { name: "log-file", template: "filepaths" },
    },
    {
      name: "--log-file-max-size",
      description:
        "Defines the maximum size a log file can grow to. Unit is megabytes. If the value is 0, the maximum file size is unlimited",
      isPersistent: true,
      hidden: true,
      args: { name: "log-file-max-size", default: "1800" },
    },
    {
      name: "--logtostderr",
      description: "Log to standard error instead of files",
      isPersistent: true,
      hidden: true,
    },
    {
      name: ["--namespace", "-n"],
      description: "Namespace scope for this request",
      isPersistent: true,
      args: { name: "namespace" },
    },
    {
      name: "--one-output",
      description:
        "If true, only write logs to their native severity level (vs also writing to each lower severity level)",
      isPersistent: true,
      hidden: true,
    },
    {
      name: "--qps",
      description:
        "Queries per second used when communicating with the Kubernetes API, not including bursting",
      isPersistent: true,
      args: { name: "qps" },
    },
    {
      name: "--registry-config",
      description: "Path to the registry config file",
      isPersistent: true,
      args: {
        name: "registry-config",
        template: "filepaths",
        default: "~/Library/Preferences/helm/registry/config.json",
      },
    },
    {
      name: "--repository-cache",
      description: "Path to the directory containing cached repository indexes",
      isPersistent: true,
      args: {
        name: "repository-cache",
        template: "folders",
        default: "~/Library/Caches/helm/repository",
      },
    },
    {
      name: "--repository-config",
      description: "Path to the file containing repository names and URLs",
      isPersistent: true,
      args: {
        name: "repository-config",
        template: "filepaths",
        default: "~/Library/Preferences/helm/repositories.yaml",
      },
    },
    {
      name: "--skip-headers",
      description: "If true, avoid header prefixes in the log messages",
      isPersistent: true,
      hidden: true,
    },
    {
      name: "--skip-log-headers",
      description: "If true, avoid headers when opening log files",
      isPersistent: true,
      hidden: true,
    },
    {
      name: "--stderrthreshold",
      description: "Logs at or above this threshold go to stderr",
      isPersistent: true,
      hidden: true,
      args: { name: "stderrthreshold", default: "2" },
    },
    {
      name: ["--v", "-v"],
      description: "Number for the log level verbosity",
      isPersistent: true,
      hidden: true,
      args: { name: "v", default: "0" },
    },
    {
      name: "--vmodule",
      description:
        "Comma-separated list of pattern=N settings for file-filtered logging",
      isPersistent: true,
      hidden: true,
      args: { name: "vmodule" },
    },
    { name: ["--help", "-h"], description: "Display help", isPersistent: true },
  ],
};
export default completionSpec;
