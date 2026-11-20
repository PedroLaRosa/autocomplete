// Terragrunt v1.2.2 (git tag gruntwork-io/terragrunt v1.2.2, commit 2026-11-11, also the current Homebrew formula version; checked 2026-11-20).
// Source: read statically from a shallow clone at v1.2.2 (internal/cli/commands/**, internal/cli/flags/**,
// internal/tf/tf.go, internal/experiment/experiment.go, docs/src/data/**); the binary was not run.
// Rewritten for the v1 CLI: the legacy --terragrunt-* flags and the run-all, terragrunt-info, validate-inputs,
// graph-dependencies, hclfmt and render-json commands no longer exist; unknown top-level commands are no longer
// forwarded to OpenTofu/Terraform (use `terragrunt run -- <command>`). Hidden flags are kept with hidden: true.

const icon = "https://docs.terragrunt.com/favicon.ico";

const workspaceList: Fig.Generator = {
  script: ["terragrunt", "run", "--", "workspace", "list"],
  postProcess: function (out) {
    return out
      .split("\n")
      .map((workspace) => workspace.replace("* ", "").trim())
      .filter(Boolean)
      .map((workspace) => ({
        name: workspace,
        icon,
        description: "Workspace",
      }));
  },
};

const addressList: Fig.Generator = {
  script: ["terragrunt", "state", "list"],
  postProcess: function (out) {
    if (out.includes("No state file was found!") || out.includes("Error")) {
      return [];
    }
    return out
      .split("\n")
      .map((address) => address.replace("* ", "").trim())
      .filter(Boolean)
      .map((address) => ({
        name: address,
        icon,
        description: "Address",
      }));
  },
};

// Terragrunt-level flags valid for every command
const globalOptionList: Fig.Option[] = [
  {
    name: "--log-level",
    description: "Set the logging level for Terragrunt",
    args: {
      name: "level",
      suggestions: [
        "stderr",
        "stdout",
        "error",
        "warn",
        "info",
        "debug",
        "trace",
      ],
    },
  },
  {
    name: "--working-dir",
    description:
      "The path to the directory of Terragrunt configurations. Default is current directory",
    args: {
      template: "folders",
    },
  },
  {
    name: "--log-disable",
    description: "Disable logging",
  },
  {
    name: "--log-show-abs-paths",
    description: "Show absolute paths in logs",
  },
  {
    name: "--no-color",
    description: "Disable color output",
  },
  {
    name: "--log-format",
    description: "Set the log format",
    args: {
      name: "format",
      suggestions: ["bare", "pretty", "json", "key-value"],
    },
  },
  {
    name: "--log-custom-format",
    description: "Set the custom log formatting",
    args: {
      name: "format",
    },
  },
  {
    name: "--non-interactive",
    description: 'Assume "yes" for all prompts',
  },
  {
    name: "--experiment-mode",
    description: "Enable experiment mode for Terragrunt",
  },
  {
    name: "--experiment",
    description: "Enable a specific experiment",
    isRepeatable: true,
    args: {
      name: "experiment",
      suggestions: [
        "symlinks",
        "iac-engine",
        "slow-task-reporting",
        "deep-merge",
        "hook-context-env",
        "otel-logs",
        "browse-tui",
        "tg-login",
        "base64gzip-compat",
        "offline-cas",
        "mcp-command",
        "no-dot-terragrunt-cache",
        "variables-block",
      ],
    },
  },
  {
    name: "--no-tips",
    description: "Disable all tips from being displayed",
  },
  {
    name: "--no-tip",
    description: "Disable a specific tip from being displayed",
    isRepeatable: true,
    args: {
      name: "tip",
      suggestions: [
        "debugging-docs",
        "windows-symlink-warning",
        "stack-target-missing-type-stack",
        "stack-filter-nested-not-generated",
        "missing-dependency-config",
        "inputs-read-not-tracked",
      ],
    },
  },
  {
    name: "--strict-mode",
    description:
      "Enable strict mode for Terragrunt. For more information, run 'terragrunt info strict'",
  },
  {
    name: "--strict-control",
    description:
      "Enable a specific strict control. For a list of available controls, run 'terragrunt info strict'",
    isRepeatable: true,
    args: {
      name: "control",
    },
  },
  {
    name: "--profile-cpu",
    description: "Write a CPU profile to the given path",
    args: {
      template: "filepaths",
    },
  },
  {
    name: "--profile-mem",
    description: "Write a memory (heap) profile to the given path",
    args: {
      template: "filepaths",
    },
  },
  {
    name: "--profile-goroutine",
    description: "Write a goroutine profile to the given path",
    args: {
      template: "filepaths",
    },
  },
  {
    name: "--profile-dir",
    description: "Directory to write profile files (cpu, mem, goroutine)",
    args: {
      template: "folders",
    },
  },
  {
    name: ["-h", "--help"],
    description: "Show help",
  },
  {
    name: ["-v", "--version"],
    description: "Show Terragrunt version",
  },
];

const globalOptions: Fig.Option[] = globalOptionList.map((option) => ({
  ...option,
  isPersistent: true,
}));

// Shared flags (internal/cli/flags/shared)
const configOption: Fig.Option = {
  name: "--config",
  description:
    "The path to the Terragrunt config file. Default is terragrunt.hcl",
  args: {
    template: "filepaths",
  },
};

const downloadDirOption: Fig.Option = {
  name: "--download-dir",
  description:
    "The path to download OpenTofu/Terraform modules into. Default is .terragrunt-cache in the working directory",
  args: {
    template: "folders",
  },
};

const tfPathOption: Fig.Option = {
  name: "--tf-path",
  description:
    "Path to the OpenTofu/Terraform binary. Default is tofu (on PATH)",
  args: {
    template: "filepaths",
  },
};

const authProviderCmdOption: Fig.Option = {
  name: "--auth-provider-cmd",
  description:
    "Run the provided command and arguments to authenticate Terragrunt dynamically when necessary",
  args: {
    name: "command",
  },
};

const noDiscoveryAuthProviderCmdOption: Fig.Option = {
  name: "--no-discovery-auth-provider-cmd",
  description: "Skip running --auth-provider-cmd during the discovery phase",
};

const inputsDebugOption: Fig.Option = {
  name: "--inputs-debug",
  description: "Write debug.tfvars to working folder to help root-cause issues",
};

const noAutoInitOption: Fig.Option = {
  name: "--no-auto-init",
  description:
    "Don't automatically run 'tofu/terraform init' during other terragrunt commands. You must run 'terragrunt init' manually",
};

const sourceOption: Fig.Option = {
  name: "--source",
  description:
    "Download OpenTofu/Terraform configurations from the specified source into a temporary folder, and run OpenTofu/Terraform in that temporary folder",
  args: {
    name: "source",
    template: "folders",
  },
};

const sourceMapOption: Fig.Option = {
  name: "--source-map",
  description:
    "Replace any source URL (including the source URL of a config pulled in with dependency blocks) that has root source with dest",
  isRepeatable: true,
  args: {
    name: "source=replacement",
  },
};

const iamOptions: Fig.Option[] = [
  {
    name: "--iam-assume-role",
    description:
      "Assume the specified IAM role before executing OpenTofu/Terraform",
    args: {
      name: "IAM role ARN",
    },
  },
  {
    name: "--iam-assume-role-duration",
    description: "Session duration for IAM Assume Role session",
    args: {
      name: "seconds",
    },
  },
  {
    name: "--iam-assume-role-session-name",
    description: "Name for the IAM Assumed Role session",
    args: {
      name: "session name",
    },
  },
  {
    name: "--iam-assume-role-web-identity-token",
    description: "For AssumeRoleWithWebIdentity, the WebIdentity token",
    args: {
      name: "token",
    },
  },
];

const backendOptions: Fig.Option[] = [
  {
    name: "--backend-bootstrap",
    description:
      "Automatically bootstrap backend infrastructure before attempting to use it",
  },
  {
    name: "--backend-require-bootstrap",
    description: "Fail if the remote state bucket needs to be created",
  },
  {
    name: "--disable-bucket-update",
    description: "Do not update the remote state bucket",
  },
];

const featureOption: Fig.Option = {
  name: "--feature",
  description: "Set feature flags for the HCL code",
  isRepeatable: true,
  args: {
    name: "name=value",
  },
};

const failFastOption: Fig.Option = {
  name: "--fail-fast",
  description:
    "Fail immediately if any unit fails, rather than continuing to process remaining units",
};

const allOption: Fig.Option = {
  name: ["-a", "--all"],
  description:
    "Run the specified command on the stack of units in the current directory",
};

const graphOption: Fig.Option = {
  name: "--graph",
  description:
    "Run the specified OpenTofu/Terraform command following the Directed Acyclic Graph (DAG) of dependencies",
};

const parallelismOption: Fig.Option = {
  name: "--parallelism",
  description: "Parallelism for --all commands",
  args: {
    name: "N",
  },
};

const queueOptions: Fig.Option[] = [
  {
    name: "--queue-ignore-errors",
    description: "Continue processing units even if a dependency fails",
  },
  {
    name: "--queue-ignore-dag-order",
    description: "Ignore DAG order for --all commands",
  },
  {
    name: "--queue-exclude-external",
    description: "Ignore external dependencies for --all commands",
    hidden: true,
  },
  {
    name: "--queue-include-external",
    description: "Include external dependencies for --all commands",
    hidden: true,
  },
  {
    name: "--queue-excludes-file",
    description:
      "Path to a file with a list of directories that need to be excluded when running --all commands",
    hidden: true,
    args: {
      template: "filepaths",
    },
  },
  {
    name: "--queue-exclude-dir",
    description:
      "Unix-style glob of directories to exclude from the queue of units to run",
    hidden: true,
    isRepeatable: true,
    args: {
      name: "glob",
      template: "folders",
    },
  },
  {
    name: "--queue-include-dir",
    description:
      "Unix-style glob of directories to include from the queue of units to run",
    hidden: true,
    isRepeatable: true,
    args: {
      name: "glob",
      template: "folders",
    },
  },
  {
    name: "--queue-strict-include",
    description:
      "Only include modules under the directories passed in with --queue-include-dir",
    hidden: true,
  },
  {
    name: "--queue-include-units-reading",
    description:
      "Only run the command against units that read the specified file via a Terragrunt HCL function or include",
    hidden: true,
    isRepeatable: true,
    args: {
      template: "filepaths",
    },
  },
];

const filterOptions: Fig.Option[] = [
  {
    name: "--filter",
    description:
      "Filter components using filter syntax. Can be specified multiple times for union (OR) semantics",
    isRepeatable: true,
    args: {
      name: "query",
    },
  },
  {
    name: "--filter-affected",
    description:
      "Filter components affected by changes between main and HEAD. Equivalent to --filter=[main...HEAD]",
  },
  {
    name: "--filter-allow-destroy",
    description: "Allow destroy runs when using Git-based filters",
  },
  {
    name: "--discovery-boundary",
    description: "Bound --filter discovery to a directory, not git root",
    args: {
      template: "folders",
    },
  },
  {
    name: "--filters-file",
    description:
      "Path to a file containing filter queries, one per line. Default is .terragrunt-filters",
    args: {
      template: "filepaths",
    },
  },
  {
    name: "--no-filters-file",
    description: "Disable automatic reading of .terragrunt-filters file",
  },
];

const casOptions: Fig.Option[] = [
  {
    name: "--no-cas",
    description: "Disable the CAS (Content Addressable Storage) feature",
  },
  {
    name: "--cas-clone-depth",
    description:
      "When using CAS, pass this value to git clone --depth (default 1; -1 clones full history). For negative values use --cas-clone-depth=-1",
    args: {
      name: "depth",
    },
  },
  {
    name: "--cas-offline",
    description:
      "When using CAS, never contact a Git remote: answer every Git source from the local store and the persisted probe cache, and fail on anything missing. Requires the 'offline-cas' experiment",
  },
  {
    name: "--cas-refresh",
    description:
      "When using CAS, ignore the persisted probe cache and query every source's remote again. Requires the 'offline-cas' experiment",
  },
  {
    name: "--cas-probe-ttl",
    description:
      "When using CAS, trust a persisted probe of a branch, HEAD, or non-version tag for this long (for example 10m) before querying the remote again. Requires the 'offline-cas' experiment",
    args: {
      name: "duration",
    },
  },
];

const scaffoldingOptions: Fig.Option[] = [
  {
    name: "--root-file-name",
    description: "Name of the root Terragrunt configuration file, if used",
    args: {
      name: "file name",
    },
  },
  {
    name: "--no-include-root",
    description: "Do not include root unit in scaffolding done by catalog",
  },
  {
    name: "--no-shell",
    description: "Disable shell commands when using boilerplate templates",
  },
  {
    name: "--no-hooks",
    description: "Disable hooks when using boilerplate templates",
  },
];

// Flags of `terragrunt run` (internal/cli/commands/run/flags.go); also reused by the shortcut commands,
// `stack`, `render`, `info print` and `aws-provider-patch`
const runOptions: Fig.Option[] = [
  {
    name: "--out-dir",
    description: "Directory to store plan files",
    args: {
      template: "folders",
    },
  },
  {
    name: "--json-out-dir",
    description: "Directory to store json plan files",
    args: {
      template: "folders",
    },
  },
  {
    name: "--graph-root",
    description: "Root directory from where to build graph dependencies",
    args: {
      template: "folders",
    },
  },
  {
    name: "--no-stack-generate",
    description:
      "Disable automatic stack regeneration before running the command",
  },
  configOption,
  tfPathOption,
  noAutoInitOption,
  {
    name: "--no-auto-retry",
    description:
      "Don't automatically re-run command in case of transient errors",
  },
  {
    name: "--no-auto-approve",
    description:
      "Don't automatically append '-auto-approve' to the underlying OpenTofu/Terraform commands run with 'run --all'",
  },
  {
    name: "--no-auto-provider-cache-dir",
    description:
      "Disable the auto-provider-cache-dir feature even when the experiment is enabled",
  },
  {
    name: "--no-hooks",
    description: "Disable Terragrunt hooks during run",
  },
  {
    name: "--no-dependency-outputs",
    description:
      "Skip all dependency output resolution. Dependency blocks will not call tofu/terraform output",
  },
  downloadDirOption,
  sourceOption,
  {
    name: "--source-update",
    description:
      "Delete the contents of the temporary folder to clear out any old, cached source code before downloading new source code into it",
  },
  sourceMapOption,
  inputsDebugOption,
  {
    name: "--use-partial-parse-config-cache",
    description:
      "Enable caching of includes during partial parsing operations. Will also be used for the --iam-assume-role option if provided",
  },
  {
    name: "--version-manager-file-name",
    description:
      "File names used during the computation of the cache key for the version manager files",
    isRepeatable: true,
    args: {
      name: "file name",
    },
  },
  {
    name: "--dependency-fetch-output-from-state",
    description:
      "Read dependency outputs directly from the state file. Enabled by default; retained for backwards compatibility",
    deprecated: true,
  },
  {
    name: "--no-dependency-fetch-output-from-state",
    description:
      "Read dependency outputs by running tofu/terraform output instead of reading the state file directly",
  },
  {
    name: "--tf-forward-stdout",
    description:
      "Print the output of OpenTofu/Terraform commands as is, without integrating it into the Terragrunt log",
  },
  {
    name: "--units-that-include",
    description:
      "Only run the command against units that include the specified file. Deprecated: use --filter 'reading=<file>' instead",
    hidden: true,
    deprecated: true,
    isRepeatable: true,
    args: {
      template: "filepaths",
    },
  },
  {
    name: "--disable-command-validation",
    description: "Do not validate the tofu/terraform command",
    hidden: true,
    deprecated: true,
  },
  {
    name: "--no-destroy-dependencies-check",
    description:
      "Do not check for dependent units when destroying. Deprecated: this is the default unless --destroy-dependencies-check is set",
    hidden: true,
    deprecated: true,
  },
  {
    name: "--destroy-dependencies-check",
    description: "Check for dependent units when destroying",
  },
  {
    name: "--provider-cache",
    description: "Enable Terragrunt's provider caching",
  },
  {
    name: "--provider-cache-dir",
    description:
      "The path to the Terragrunt provider cache directory. By default, 'terragrunt/providers' folder in the user cache directory",
    args: {
      template: "folders",
    },
  },
  {
    name: "--provider-cache-token",
    description:
      "The token for authentication to the Terragrunt Provider Cache server. By default, assigned automatically",
    args: {
      name: "token",
    },
  },
  {
    name: "--provider-cache-hostname",
    description:
      "The hostname of the Terragrunt Provider Cache server. By default, 'localhost'",
    args: {
      name: "hostname",
    },
  },
  {
    name: "--provider-cache-port",
    description:
      "The port of the Terragrunt Provider Cache server. By default, assigned automatically",
    args: {
      name: "port",
    },
  },
  {
    name: "--provider-cache-registry-names",
    description:
      "The list of remote registries to be cached by Terragrunt Provider Cache server. By default, 'registry.terraform.io', 'registry.opentofu.org'",
    isRepeatable: true,
    args: {
      name: "registry",
    },
  },
  authProviderCmdOption,
  noDiscoveryAuthProviderCmdOption,
  {
    name: "--experimental-engine",
    description: "Enable the iac-engine experiment to use IaC engines",
    hidden: true,
  },
  {
    name: "--engine-cache-path",
    description: "Cache path for Terragrunt engine files",
    hidden: true,
    args: {
      template: "folders",
    },
  },
  {
    name: "--engine-skip-check",
    description: "Skip checksum check for Terragrunt engine files",
    hidden: true,
  },
  {
    name: "--engine-log-level",
    description: "Terragrunt engine log level",
    hidden: true,
    args: {
      name: "level",
    },
  },
  {
    name: "--no-engine",
    description:
      "Disable IaC engines even when the iac-engine experiment is enabled",
    hidden: true,
  },
  {
    name: "--summary-disable",
    description: "Disable the summary output at the end of a run",
  },
  {
    name: "--summary-per-unit",
    description:
      "Show duration information for each unit in the summary output",
  },
  {
    name: "--report-file",
    description: "Path to generate report file in",
    args: {
      template: "filepaths",
    },
  },
  {
    name: "--report-format",
    description: "Format of the report file",
    args: {
      name: "format",
      suggestions: ["csv", "json"],
    },
  },
  {
    name: "--report-schema-file",
    description: "Path to generate report schema file in",
    args: {
      template: "filepaths",
    },
  },
  ...backendOptions,
  featureOption,
  failFastOption,
  ...iamOptions,
  ...queueOptions,
  ...filterOptions,
  parallelismOption,
  ...casOptions,
];

// OpenTofu/Terraform flags shared by several commands
const tfLockOptions: Fig.Option[] = [
  {
    name: "-lock",
    requiresSeparator: true,
    description:
      "Lock the state file when locking is supported. Defaults to true",
    args: {
      name: "true or false",
      suggestions: ["true", "false"],
    },
  },
  {
    name: "-lock-timeout",
    requiresSeparator: true,
    description: "Duration to retry a state lock. Default 0s",
    args: {
      name: "seconds",
    },
  },
];

const tfCommonOptions: Fig.Option[] = [
  ...tfLockOptions,
  {
    name: "-input",
    requiresSeparator: true,
    description: "Ask for input for variables if not directly set",
    args: {
      name: "true or false",
      suggestions: ["true", "false"],
    },
  },
  {
    name: "-no-color",
    description: "Disable output with coloring",
  },
];

const tfInitOptions: Fig.Option[] = [
  {
    name: "-upgrade",
    description:
      "Opt to upgrade modules and plugins as part of their respective installation steps",
  },
  ...tfCommonOptions,
];

const tfPlanOptions: Fig.Option[] = [
  {
    name: "-compact-warnings",
    description:
      "If OpenTofu/Terraform produces any warnings that are not accompanied by errors, show them in a more compact form that includes only the summary messages",
  },
  {
    name: "-destroy",
    description: "If set, generates a plan to destroy all the known resources",
  },
  {
    name: "-detailed-exitcode",
    description: "Return a detailed exit code when the command exits",
  },
  {
    name: "-out",
    requiresSeparator: true,
    description: "The path to save the generated execution plan",
  },
  {
    name: "-parallelism",
    description:
      "Limit the number of concurrent operation as OpenTofu/Terraform walks the graph. Defaults to 10",
    args: {
      name: "number",
    },
  },
  {
    name: "-refresh",
    requiresSeparator: true,
    description: "Update the state prior to checking for differences",
    args: {
      name: "true or false",
      suggestions: ["true", "false"],
    },
  },
  {
    name: "-state",
    requiresSeparator: true,
    description:
      "Path to the state file. Defaults to 'terraform.tfstate'. Ignored when remote state is used",
    args: {
      template: "filepaths",
    },
  },
  {
    name: "-target",
    displayName: "-target=resource",
    description:
      "A Resource Address to target. This flag can be used multiple times",
    isRepeatable: true,
  },
  {
    name: "-var",
    insertValue: "-var {cursor}",
    description:
      "Set a variable in the OpenTofu/Terraform configuration. This flag can be set multiple times",
    isRepeatable: true,
    args: {
      name: "foo=bar",
    },
  },
  {
    name: "-var-file",
    requiresSeparator: true,
    description:
      "Set variables in the OpenTofu/Terraform configuration from a variable file",
    args: {
      template: "filepaths",
    },
  },
  ...tfCommonOptions,
];

const tfTaintOptions: Fig.Option[] = [
  {
    name: "-allow-missing",
    description:
      "If specified, the command will succeed (exit code 0) even if the resource is missing. The command might still return an error for other situations, such as if there is a problem reading or writing the state",
  },
  ...tfLockOptions,
  {
    name: "-ignore-remote-version",
    description:
      "When using the enhanced remote backend with Terraform Cloud, continue even if remote and local Terraform versions differ. This may result in an unusable Terraform Cloud workspace, and should be used with extreme caution",
  },
];

const tfWorkspaceSubcommands: Fig.Subcommand[] = [
  {
    name: "new",
    insertValue: "new '{cursor}'",
    description: "Create a new workspace",
    args: {
      name: "workspace name",
    },
    options: [
      ...tfLockOptions,
      {
        name: "-state",
        requiresSeparator: true,
        description:
          "Path to an existing state file to initialize the state of this environment",
        args: {
          name: "path",
          template: "filepaths",
        },
      },
    ],
  },
  {
    name: "show",
    description: "Display the current workspace",
  },
  {
    name: "list",
    description: "List the workspaces",
  },
  {
    name: "delete",
    description: "Delete the specified workspace",
    args: {
      generators: workspaceList,
      name: "workspace name",
    },
    options: [
      {
        name: "-force",
        requiresSeparator: true,
        description:
          "Delete the workspace even if its state is not empty. Defaults to false",
        args: {
          name: "true or false",
          suggestions: ["true", "false"],
        },
      },
      ...tfLockOptions,
    ],
  },
  {
    name: "select",
    description: "Change the current working workspace",
    args: {
      generators: workspaceList,
      name: "workspace name",
    },
  },
];

// OpenTofu/Terraform commands: the subcommands of `terragrunt run`, and (for those in
// shortcutCommandNames) top-level shortcut commands
const tfCommands: Fig.Subcommand[] = [
  {
    name: "init",
    description: "Prepare your working directory for other commands",
    options: tfInitOptions,
  },
  {
    name: "validate",
    description: "Check whether the configuration is valid",
  },
  {
    name: "plan",
    description: "Show changes required by the current configuration",
    options: tfPlanOptions,
  },
  {
    name: "apply",
    description: "Create or update infrastructure",
  },
  {
    name: "destroy",
    description: "Destroy previously-created infrastructure",
  },
  {
    name: "force-unlock",
    description: "Release a stuck lock on the current workspace",
  },
  {
    name: "import",
    description:
      "Associate existing infrastructure with a OpenTofu/Terraform resource",
  },
  {
    name: "output",
    description: "Show output values from your root module",
  },
  {
    name: "refresh",
    description: "Update the state to match remote systems",
  },
  {
    name: "show",
    description: "Show the current state or a saved plan",
  },
  {
    name: "state",
    description: "Advanced state management",
  },
  {
    name: "test",
    description: "Execute integration tests for OpenTofu/Terraform modules",
  },
];

const tfOtherCommands: Fig.Subcommand[] = [
  {
    name: "console",
    description:
      "Try OpenTofu/Terraform expressions at an interactive command prompt",
  },
  {
    name: "fmt",
    description: "Reformat your configuration in the standard style",
  },
  {
    name: "get",
    description: "Install or upgrade remote OpenTofu/Terraform modules",
    options: [
      {
        name: "-update",
        description:
          "If specified, modules that are already downloaded will be checked for updates and the updates will be downloaded if present",
      },
    ],
  },
  {
    name: "graph",
    description: "Generate a Graphviz graph of the steps in an operation",
  },
  {
    name: "login",
    description: "Obtain and save credentials for a remote host",
  },
  {
    name: "logout",
    description: "Remove locally-stored credentials for a remote host",
  },
  {
    name: "metadata",
    description: "Metadata related commands",
  },
  {
    name: "providers",
    description: "Show the providers required for this configuration",
  },
  {
    name: "taint",
    description: "Mark a resource instance as not fully functional",
    options: tfTaintOptions,
    args: {
      generators: addressList,
      name: "address",
    },
  },
  {
    name: "untaint",
    description: "Remove the 'tainted' state from a resource instance",
    options: tfLockOptions,
    args: {
      generators: addressList,
      name: "address",
    },
  },
  {
    name: "version",
    description: "Show the current OpenTofu/Terraform version",
  },
  {
    name: "workspace",
    description: "Workspace management",
    subcommands: tfWorkspaceSubcommands,
  },
  {
    name: "env",
    description: "Deprecated alias of workspace",
    hidden: true,
    deprecated: true,
    subcommands: tfWorkspaceSubcommands,
  },
  {
    name: "push",
    description: "Push a local state file to the remote backend",
    hidden: true,
  },
  {
    name: "query",
    description: "Run a list-resource query",
    hidden: true,
  },
];

// Top-level shortcuts for `terragrunt run -- <command>`; they accept the flags of `run` as well as the
// OpenTofu/Terraform flags of the command
const shortcutCommands: Fig.Subcommand[] = tfCommands.map((command) => ({
  ...command,
  description: `${command.description} (shortcut for 'terragrunt run -- ${command.name}')`,
  options: [...(command.options ?? []), ...runOptions, allOption, graphOption],
}));

const stackOptions: Fig.Option[] = [
  ...runOptions,
  {
    name: "--no-stack-validate",
    description: "Disable automatic stack validation after generation",
    hidden: true,
  },
];

const catalogOptions: Fig.Option[] = [
  ...scaffoldingOptions,
  {
    name: "--format",
    description:
      "Output format for the catalog. Default is tui when stdin and stdout are terminals, jsonl otherwise",
    args: {
      name: "format",
      suggestions: ["tui", "jsonl", "md"],
    },
  },
  {
    name: "--ignore-file",
    description:
      "Path to an additional ignore file layered on top of a repo's .terragrunt-catalog-ignore during discovery",
    args: {
      template: "filepaths",
    },
  },
  ...casOptions,
];

const queueConstructAsOption: Fig.Option = {
  name: ["--queue-construct-as", "--as"],
  description:
    "Construct the queue as if a specific command was run. Implies --dag",
  args: {
    name: "command",
  },
};

const dagOption: Fig.Option = {
  name: "--dag",
  description: "Use DAG mode to sort and group output",
};

const backendCommandOptions: Fig.Option[] = [
  configOption,
  downloadDirOption,
  ...backendOptions,
  featureOption,
];

const terragruntCommands: Fig.Subcommand[] = [
  {
    name: "run",
    description: "Run an OpenTofu/Terraform command",
    options: [...runOptions, allOption, graphOption],
    subcommands: [...tfCommands, ...tfOtherCommands],
  },
  {
    name: "stack",
    description: "Terragrunt stack commands",
    subcommands: [
      {
        name: "generate",
        description: "Generate a stack from a terragrunt.stack.hcl file",
        options: stackOptions,
      },
      {
        name: "run",
        description:
          "Run a command on the stack generated from the current directory",
        options: stackOptions,
        args: {
          name: "OpenTofu/Terraform command",
          isVariadic: true,
        },
      },
      {
        name: "output",
        description: "Fetch the output of the stack",
        options: [
          ...stackOptions,
          {
            name: "--format",
            description: "Stack output format",
            args: {
              name: "format",
              suggestions: ["json", "raw"],
            },
          },
          {
            name: "--raw",
            description: "Stack output in raw format",
          },
          {
            name: "--json",
            description: "Stack output in json format",
          },
        ],
        args: {
          name: "index",
          isOptional: true,
        },
      },
      {
        name: "clean",
        description: "Clean the stack generated from the current directory",
      },
    ],
  },
  {
    name: "exec",
    description: "Execute an arbitrary command",
    options: [
      configOption,
      downloadDirOption,
      tfPathOption,
      authProviderCmdOption,
      inputsDebugOption,
      noAutoInitOption,
      sourceOption,
      sourceMapOption,
      ...iamOptions,
      {
        name: "--in-download-dir",
        description: "Run the provided command in the download directory",
      },
    ],
    args: {
      name: "command",
      isVariadic: true,
    },
  },
  {
    name: "backend",
    description: "Interact with OpenTofu/Terraform backend infrastructure",
    subcommands: [
      {
        name: "bootstrap",
        description: "Bootstrap OpenTofu/Terraform backend infrastructure",
        options: [...backendCommandOptions, allOption, failFastOption],
      },
      {
        name: "delete",
        description: "Delete OpenTofu/Terraform state",
        options: [
          ...backendCommandOptions,
          {
            name: "--bucket",
            description: "Delete the entire bucket",
            hidden: true,
          },
          {
            name: "--force",
            description:
              "Force the backend to be deleted, even if the bucket is not versioned",
          },
          allOption,
          failFastOption,
        ],
      },
      {
        name: "migrate",
        description:
          "Migrate OpenTofu/Terraform state from one location to another",
        options: [
          ...backendCommandOptions,
          {
            name: "--force",
            description:
              "Force the backend to be migrated, even if the bucket is not versioned",
          },
        ],
        args: [
          {
            name: "source unit",
            template: "folders",
          },
          {
            name: "destination unit",
            template: "folders",
          },
        ],
      },
    ],
  },
  {
    name: "catalog",
    description:
      "Launch the user interface for searching and managing your module catalog",
    options: catalogOptions,
    args: {
      name: "repo",
      description: "Repository URL or path",
      isOptional: true,
    },
  },
  {
    name: "scaffold",
    description: "Scaffold a new Terragrunt module",
    options: [
      ...scaffoldingOptions,
      {
        name: "--output-folder",
        description:
          "Folder to write the scaffolded files into. A relative path is resolved against --working-dir",
        args: {
          template: "folders",
        },
      },
      {
        name: "--var",
        description: "Variables for usage in scaffolding",
        isRepeatable: true,
        args: {
          name: "name=value",
        },
      },
      {
        name: "--var-file",
        description:
          "Files with variables for unit scaffolding. A relative path is resolved against --working-dir",
        isRepeatable: true,
        args: {
          template: "filepaths",
        },
      },
      {
        name: "--no-dependency-prompt",
        description: "Do not prompt for confirmation to include dependencies",
      },
      ...backendOptions,
      featureOption,
    ],
    args: [
      {
        name: "module url",
        description: "URL of the OpenTofu/Terraform module to scaffold",
      },
      {
        name: "template url",
        description: "URL of the boilerplate template to use",
        isOptional: true,
      },
    ],
  },
  {
    name: "login",
    description:
      "Sign in to the Gruntwork Developer Portal. Requires the 'tg-login' experiment",
    options: [
      {
        name: "--force",
        description: "Replace the credential from an existing, unexpired login",
      },
    ],
  },
  {
    name: ["find", "fd"],
    description: "Find relevant Terragrunt configurations",
    options: [
      {
        name: "--format",
        description: "Output format for find results. Default is text",
        args: {
          name: "format",
          suggestions: ["text", "json"],
        },
      },
      {
        name: ["-j", "--json"],
        description: "Output in JSON format (equivalent to --format=json)",
      },
      dagOption,
      {
        name: "--no-hidden",
        description: "Exclude hidden directories from find results",
      },
      {
        name: "--hidden",
        description: "Include hidden directories in find results",
        hidden: true,
        deprecated: true,
      },
      {
        name: "--dependencies",
        description:
          "Include dependencies in the results (only when using --format=json)",
      },
      {
        name: "--exclude",
        description:
          "Display exclude configurations in the results (only when using --format=json)",
      },
      {
        name: "--include",
        description:
          "Display include configurations in the results (only when using --format=json)",
      },
      {
        name: "--reading",
        description:
          "Include the list of files that are read by components in the results (only when using --format=json)",
      },
      {
        name: "--external",
        description:
          "Discover external dependencies from initial results, and add them to top-level results (implies discovery of dependencies)",
        hidden: true,
      },
      queueConstructAsOption,
      ...filterOptions,
      ...backendOptions,
      featureOption,
      noDiscoveryAuthProviderCmdOption,
    ],
  },
  {
    name: ["list", "ls"],
    description: "List relevant Terragrunt configurations",
    options: [
      {
        name: "--format",
        description: "Output format for list results. Default is text",
        args: {
          name: "format",
          suggestions: ["text", "tree", "long", "dot"],
        },
      },
      {
        name: "--no-hidden",
        description: "Exclude hidden directories from list results",
      },
      {
        name: "--hidden",
        description: "Include hidden directories in list results",
        hidden: true,
        deprecated: true,
      },
      {
        name: "--dependencies",
        description:
          "Include dependencies in list results (only when using --long)",
      },
      {
        name: "--external",
        description:
          "Discover external dependencies from initial results, and add them to top-level results (implies discovery of dependencies)",
        hidden: true,
      },
      {
        name: ["-T", "--tree"],
        description: "Output in tree format (equivalent to --format=tree)",
      },
      {
        name: ["-l", "--long"],
        description: "Output in long format (equivalent to --format=long)",
      },
      dagOption,
      queueConstructAsOption,
      ...filterOptions,
      ...backendOptions,
      featureOption,
      noDiscoveryAuthProviderCmdOption,
    ],
  },
  {
    name: "browse",
    description:
      "Browse Terragrunt configurations in an interactive TUI. Requires the 'browse-tui' experiment",
    options: [featureOption, noDiscoveryAuthProviderCmdOption],
  },
  {
    name: "hcl",
    description: "Interact with HCL files",
    subcommands: [
      {
        name: ["format", "fmt"],
        description:
          "Recursively find HashiCorp Configuration Language (HCL) files and rewrite them into a canonical format",
        options: [
          {
            name: "--file",
            description:
              "The path to a single HCL file that the command should run on",
            args: {
              template: "filepaths",
            },
          },
          {
            name: "--exclude-dir",
            description: "Skip HCL formatting in given directories",
            isRepeatable: true,
            args: {
              template: "folders",
            },
          },
          {
            name: "--check",
            description:
              "Return a status code of zero when all files are formatted correctly, and a status code of one when they aren't",
          },
          {
            name: "--diff",
            description:
              "Print diff between original and modified file versions",
          },
          {
            name: "--stdin",
            description: "Format HCL from stdin and print result to stdout",
          },
          ...queueOptions,
          ...filterOptions,
          parallelismOption,
        ],
      },
      {
        name: "validate",
        description:
          "Recursively find HashiCorp Configuration Language (HCL) files and validate them",
        options: [
          {
            name: "--strict",
            description:
              "Enable strict mode. When used in combination with the --inputs flag, any inputs defined in Terragrunt that are not used in OpenTofu/Terraform will trigger an error",
          },
          {
            name: "--inputs",
            description:
              "Check if the Terragrunt configured inputs align with OpenTofu/Terraform defined variables",
          },
          {
            name: "--show-config-path",
            description:
              "Emit a list of files with invalid configurations after validating all configurations",
          },
          {
            name: "--json",
            description: "Format results in JSON format",
          },
          tfPathOption,
          ...queueOptions,
          ...filterOptions,
        ],
      },
    ],
  },
  {
    name: "info",
    description: "List of commands to display Terragrunt settings",
    subcommands: [
      {
        name: "strict",
        description: "Command associated with strict control settings",
        subcommands: [
          {
            name: "list",
            description: "List the strict control settings",
            options: [
              {
                name: "--all",
                description: "Show all controls, including completed ones",
              },
            ],
            args: {
              name: "control",
              description: "Name of a strict control to show details for",
              isOptional: true,
            },
          },
        ],
      },
      {
        name: "print",
        description: "Print out a short description of Terragrunt context",
        options: [...runOptions, allOption],
      },
    ],
  },
  {
    name: "dag",
    description: "Interact with the Directed Acyclic Graph (DAG)",
    subcommands: [
      {
        name: "graph",
        description:
          "Graph the Directed Acyclic Graph (DAG) in DOT language. Alias for 'list --format=dot --dag --dependencies --external'",
        options: [
          ...queueOptions,
          ...backendOptions,
          featureOption,
          ...filterOptions,
        ],
      },
    ],
  },
  {
    name: "render",
    description:
      "Render the final terragrunt config, with all variables, includes, and functions resolved, in the specified format",
    options: [
      ...runOptions,
      {
        name: "--format",
        description: "The output format to render the config in",
        args: {
          name: "format",
          suggestions: ["hcl", "json"],
        },
      },
      {
        name: "--json",
        description:
          "Render the config in JSON format. Equivalent to --format=json",
      },
      {
        name: ["-w", "--write"],
        description: "Write the rendered config to a file",
      },
      {
        name: "--out",
        description:
          "The file name that terragrunt should use when rendering the terragrunt.hcl config (next to the unit configuration)",
        args: {
          template: "filepaths",
        },
      },
      {
        name: "--with-metadata",
        description: "Add metadata to the rendered output file",
      },
      {
        name: "--disable-dependent-modules",
        description:
          "Disable identification of dependent modules when rendering config. This flag has no effect as dependent modules discovery has been removed",
        hidden: true,
        deprecated: true,
      },
      allOption,
    ],
  },
  {
    name: "mcp",
    description:
      "Serve Terragrunt operations to AI agents over the Model Context Protocol (stdio). Requires the 'mcp-command' experiment",
    options: [
      {
        name: "--allow",
        description:
          "Grant a capability the server otherwise denies. Repeatable",
        isRepeatable: true,
        args: {
          name: "capability",
          suggestions: ["exec", "http", "sops", "env", "docs"],
        },
      },
      {
        name: "--allow-cmd",
        description:
          "Allow MCP tools to run a command a configuration names, such as one a run_cmd or a hook calls, given as a pattern like 'jq **'. Repeatable. Requires --allow=exec",
        isRepeatable: true,
        args: {
          name: "pattern",
        },
      },
      {
        name: "--dangerously-allow-apply",
        description:
          "Serve apply and destroy tools, which change and tear down real infrastructure. Each run is gated on a person accepting it in your MCP client. Requires --allow=exec",
      },
      tfPathOption,
    ],
  },
  {
    name: "help",
    description: "Show help",
    hidden: true,
  },
  {
    name: "version",
    description: "Show Terragrunt version",
    hidden: true,
  },
  {
    name: "aws-provider-patch",
    description:
      "Overwrite settings on nested AWS providers to work around a Terraform bug (issue #13018). Deprecated",
    hidden: true,
    deprecated: true,
    options: [
      ...runOptions,
      {
        name: "--override-attr",
        description:
          "A key=value attribute to override in a provider block as part of the aws-provider-patch command. May be specified multiple times",
        isRepeatable: true,
        args: {
          name: "key=value",
        },
      },
      allOption,
    ],
  },
];

const completionSpec: Fig.Spec = {
  name: "terragrunt",
  description:
    "Orchestration tool that allows Infrastructure as Code written in OpenTofu/Terraform to scale",
  options: globalOptions,
  parserDirectives: {
    flagsArePosixNoncompliant: true,
  },
  subcommands: [...terragruntCommands, ...shortcutCommands],
};

export default completionSpec;
