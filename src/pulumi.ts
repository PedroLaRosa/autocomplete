// Pulumi v3.277.0 (latest stable git tag of github.com/pulumi/pulumi, matches the Homebrew formula, 2026-11-19).
// Source: the generated CLI reference (pulumi/docs content/docs/iac/cli/commands, cobra output of 2026-11-18)
// cross-checked statically against the v3.277.0 cobra sources (pkg/cmd/pulumi: command names, aliases, flags,
// constrictor argument lists). The binary was not run. Hidden commands and flags are left out, except the hidden
// --json alias and the deprecated --copilot flag; `pulumi do` provider subcommands are built at runtime and not listed.

const stacksGenerator: Fig.Generator = {
  cache: {
    cacheByDirectory: true,
  },
  script: ["pulumi", "stack", "ls", "--json"],
  postProcess: (out) => {
    try {
      return JSON.parse(out).map((stack) => ({
        name: stack.name,
        description: stack.description,
      }));
    } catch (e) {
      return [];
    }
  },
};

const icon = "https://www.pulumi.com/logos/brand/avatar-on-white.svg";

const outputOption: Fig.Option = {
  name: "--output",
  description: "Output format. Supported values are: default and json",
  args: {
    name: "format",
    default: "default",
    suggestions: ["default", "json"],
  },
};

const stackOption: Fig.Option = {
  name: ["-s", "--stack"],
  description:
    "The name of the stack to operate on. Defaults to the current stack",
  args: { name: "stack-name", generators: stacksGenerator },
};

const environmentNameArg: Fig.Arg = {
  name: "environment-name",
  description: "[org-name/][project-name/]environment-name",
};

const outputOption2: Fig.Option = {
  name: "--output",
  description: 'Output format: "text" (default) or "json"',
  args: { name: "format", default: "text", suggestions: ["text", "json"] },
};

const yesOption: Fig.Option = {
  name: ["-y", "--yes"],
  description: "Skip confirmation prompts",
  isDangerous: true,
};

const nameArg: Fig.Arg = { name: "name" };

const utcOption: Fig.Option = {
  name: "--utc",
  description: "Display times in UTC",
};

const idArg: Fig.Arg = { name: "id" };

const jsonOption: Fig.Option = {
  name: ["-j", "--json"],
  description: "Emit output as JSON (alias for --output=json)",
  hidden: true,
};

const draftOption: Fig.Option = {
  name: "--draft",
  description:
    "Set flag without a value (--draft) to create a draft rather than saving changes directly. --draft=<change-request-id> to update an existing change request",
  requiresSeparator: true,
  args: { name: "change-request-id", isOptional: true },
};

const reasonOption: Fig.Option = {
  name: "--reason",
  description: "The description for the change request created by --draft",
  args: { name: "reason" },
};

const changeRequestIdArg: Fig.Arg = { name: "change-request-id" };

const configPathOption: Fig.Option = {
  name: "--config-path",
  description:
    "Config keys contain a path to a property in a map or list to set",
};

const providerParameterArg: Fig.Arg = {
  name: "provider-parameter",
  isOptional: true,
  isVariadic: true,
};

const scheduleIdArg: Fig.Arg = { name: "schedule-id" };

const activeOption: Fig.Option = {
  name: "--active",
  description: "Whether the webhook is active (default true)",
};

const configFileOption: Fig.Option = {
  name: "--config-file",
  description:
    "Use the configuration values in the specified file rather than detecting the file name",
  args: { name: "file", template: ["filepaths", "folders"] },
};

const createOption: Fig.Option = {
  name: "--create",
  description: "Create the environment if it does not already exist",
};

const diffOption: Fig.Option = {
  name: "--diff",
  description: "Display operation as a rich diff showing the overall change",
};

const serverOption: Fig.Option = {
  name: "--server",
  description:
    "A URL to download the plugin from. When set, the provider argument is used as the plugin name directly and no package resolution is performed",
  args: { name: "server" },
};

const suppressOutputsOption: Fig.Option = {
  name: "--suppress-outputs",
  description:
    "Suppress display of stack outputs (in case they contain sensitive values)",
};

const suppressPermalinkOption: Fig.Option = {
  name: "--suppress-permalink",
  description: "Suppress display of the state permalink",
  requiresSeparator: true,
  args: { name: "bool", isOptional: true, suggestions: ["false", "true"] },
};

const suppressProgressOption: Fig.Option = {
  name: "--suppress-progress",
  description: "Suppress display of periodic progress dots",
};

const urnsOption: Fig.Option = {
  name: "--urns",
  description: "Display full URNs instead of short resource names",
};

const urlArg: Fig.Arg = { name: "url", isOptional: true };

const debugOption: Fig.Option = {
  name: ["-d", "--debug"],
  description: "Print detailed debugging output during resource operations",
};

const parallelOption: Fig.Option = {
  name: ["-p", "--parallel"],
  description:
    "Allow P resource operations to run in parallel at once (1 for no parallelism)",
  args: { name: "int", default: "16" },
};

const extensionOption: Fig.Option = {
  name: "--extension",
  description:
    'Add an extension layered onto a base provider rather than a replacement. The value is the extension\'s provider-defined parameters as one shell-quoted string, e.g. --extension "key=value ..."',
  args: { name: "extension" },
};

const neoOption: Fig.Option = {
  name: "--neo",
  description:
    "Enable Pulumi Neo's assistance for improved CLI experience and insights (can also be set with PULUMI_NEO environment variable)",
};

const orgOption: Fig.Option = {
  name: "--org",
  description:
    "Organization that owns the Insights account (defaults to the current default org)",
  args: { name: "org" },
};

const overrideEnvOption: Fig.Option = {
  name: "--override-env",
  description:
    "[EXPERIMENTAL] Override an imported environment for this run only, as <env>=<replacement>; repeatable",
  isRepeatable: true,
  args: { name: "override-env" },
};

const showReplacementStepsOption: Fig.Option = {
  name: "--show-replacement-steps",
  description:
    "Show detailed resource replacement creates and deletes instead of a single step",
};

const environmentNameArg2: Fig.Arg = {
  name: "environment-name",
  description: "[org-name/][project-name/]environment-name[@version]",
};

const resourceUrnArg: Fig.Arg = {
  name: "resource-urn",
  isOptional: true,
  isVariadic: true,
};

const templateUrlArg: Fig.Arg = { name: "template|url", isOptional: true };

const webhookNameArg: Fig.Arg = { name: "webhook-name" };

const yesOption2: Fig.Option = {
  name: ["-y", "--yes"],
  description: "Skip prompts and proceed with default values",
  isDangerous: true,
};

const copilotOption: Fig.Option = {
  name: "--copilot",
  description: "Enable Pulumi Neo's assistance (use --neo instead)",
  deprecated: true,
};

const orgOption2: Fig.Option = {
  name: "--org",
  description:
    "The organization that owns the webhook. Defaults to the current org",
  args: { name: "org" },
};

const remoteOption: Fig.Option = {
  name: "--remote",
  description: "[EXPERIMENTAL] Run the operation remotely",
};

const remoteAgentPoolIdOption: Fig.Option = {
  name: "--remote-agent-pool-id",
  description:
    "[EXPERIMENTAL] The agent pool to use to run the deployment job. When empty, the Pulumi Cloud shared queue will be used",
  args: { name: "remote-agent-pool-id" },
};

const remoteEnvOption: Fig.Option = {
  name: "--remote-env",
  description:
    "[EXPERIMENTAL] Environment variables to use in the remote operation of the form NAME=value (e.g. --remote-env FOO=bar)",
  isRepeatable: true,
  args: { name: "name=value" },
};

const remoteEnvSecretOption: Fig.Option = {
  name: "--remote-env-secret",
  description:
    "[EXPERIMENTAL] Environment variables with secret values to use in the remote operation of the form NAME=secretvalue (e.g. --remote-env FOO=secret)",
  isRepeatable: true,
  args: { name: "name=value" },
};

const remoteExecutorImageOption: Fig.Option = {
  name: "--remote-executor-image",
  description: "[EXPERIMENTAL] The Docker image to use for the executor",
  args: { name: "remote-executor-image" },
};

const remoteExecutorImagePasswordOption: Fig.Option = {
  name: "--remote-executor-image-password",
  description:
    "[EXPERIMENTAL] The password for the credentials with access to the Docker image to use for the executor",
  args: { name: "remote-executor-image-password" },
};

const remoteExecutorImageUsernameOption: Fig.Option = {
  name: "--remote-executor-image-username",
  description:
    "[EXPERIMENTAL] The username for the credentials with access to the Docker image to use for the executor",
  args: { name: "remote-executor-image-username" },
};

const remoteGitAuthAccessTokenOption: Fig.Option = {
  name: "--remote-git-auth-access-token",
  description: "[EXPERIMENTAL] Git personal access token",
  args: { name: "remote-git-auth-access-token" },
};

const remoteGitAuthPasswordOption: Fig.Option = {
  name: "--remote-git-auth-password",
  description:
    "[EXPERIMENTAL] Git password; for use with username or with an SSH private key",
  args: { name: "remote-git-auth-password" },
};

const remoteGitAuthSshPrivateKeyOption: Fig.Option = {
  name: "--remote-git-auth-ssh-private-key",
  description:
    "[EXPERIMENTAL] Git SSH private key; use --remote-git-auth-password for the password, if needed",
  args: { name: "remote-git-auth-ssh-private-key" },
};

const remoteGitAuthSshPrivateKeyPathOption: Fig.Option = {
  name: "--remote-git-auth-ssh-private-key-path",
  description:
    "[EXPERIMENTAL] Git SSH private key path; use --remote-git-auth-password for the password, if needed",
  args: { name: "file", template: "filepaths" },
};

const remoteGitAuthUsernameOption: Fig.Option = {
  name: "--remote-git-auth-username",
  description: "[EXPERIMENTAL] Git username",
  args: { name: "remote-git-auth-username" },
};

const remoteGitBranchOption: Fig.Option = {
  name: "--remote-git-branch",
  description:
    "[EXPERIMENTAL] Git branch to deploy; this is mutually exclusive with --remote-git-commit; either value needs to be specified",
  args: { name: "remote-git-branch" },
};

const remoteGitCommitOption: Fig.Option = {
  name: "--remote-git-commit",
  description:
    "[EXPERIMENTAL] Git commit hash of the commit to deploy (if used, HEAD will be in detached mode); this is mutually exclusive with --remote-git-branch; either value needs to be specified",
  args: { name: "remote-git-commit" },
};

const remoteGitRepoDirOption: Fig.Option = {
  name: "--remote-git-repo-dir",
  description:
    "[EXPERIMENTAL] The directory to work from in the project's source repository where Pulumi.yaml is located; used when Pulumi.yaml is not in the project source root",
  args: { name: "remote-git-repo-dir" },
};

const remoteInheritSettingsOption: Fig.Option = {
  name: "--remote-inherit-settings",
  description:
    "[EXPERIMENTAL] Inherit deployment settings from the current stack",
};

const remotePreRunCommandOption: Fig.Option = {
  name: "--remote-pre-run-command",
  description: "[EXPERIMENTAL] Commands to run before the remote operation",
  isRepeatable: true,
  args: { name: "remote-pre-run-command" },
};

const remoteSkipInstallDependenciesOption: Fig.Option = {
  name: "--remote-skip-install-dependencies",
  description:
    "[EXPERIMENTAL] Whether to skip the default dependency installation step",
};

const showConfigOption: Fig.Option = {
  name: "--show-config",
  description: "Show configuration keys and variables",
};

const showFullOutputOption: Fig.Option = {
  name: "--show-full-output",
  description: "Display full length of inputs & outputs",
};

const skipPluginPreInstallOption: Fig.Option = {
  name: "--skip-plugin-pre-install",
  description:
    "Skip the up-front provider plugin install step; missing plugins are installed lazily by the engine",
};

const suppressStreamLogsOption: Fig.Option = {
  name: "--suppress-stream-logs",
  description: "[EXPERIMENTAL] Suppress log streaming of the deployment job",
};

const accountArg: Fig.Arg = { name: "account" };

const keyArg: Fig.Arg = { name: "key" };

const orgNamePolicyPackNameArg: Fig.Arg = { name: "org-name/policy-pack-name" };

const schemaSourceArg: Fig.Arg = { name: "schema-source" };

const messageOption: Fig.Option = {
  name: ["-m", "--message"],
  description: "Optional message to associate with the update operation",
  args: { name: "message" },
};

const offlineOption: Fig.Option = {
  name: ["-o", "--offline"],
  description:
    "Use locally cached templates without making any network requests",
};

const refreshOption: Fig.Option = {
  name: ["-r", "--refresh"],
  description: "Refresh the state of the stack's resources before this update",
  requiresSeparator: true,
  args: { name: "bool", isOptional: true, suggestions: ["true", "false"] },
};

const stackOption2: Fig.Option = {
  name: ["-s", "--stack"],
  description:
    "The name of the stack to operate on. Defaults to the current stack",
  isPersistent: true,
  args: { name: "stack-name", generators: stacksGenerator },
};

const yesOption3: Fig.Option = {
  name: ["-y", "--yes"],
  description: "Skip confirmation prompts, and proceed with removal anyway",
  isDangerous: true,
};

const attachDebuggerOption: Fig.Option = {
  name: "--attach-debugger",
  description:
    "Enable the ability to attach a debugger to the program and source based plugins being executed. Can limit debug type to 'program', 'plugins', 'plugin:<name>' or 'all'",
  isRepeatable: true,
  requiresSeparator: true,
  args: {
    name: "attach-debugger",
    isOptional: true,
    suggestions: ["program", "plugins", "all"],
  },
};

const escConfigOption: Fig.Option = {
  name: "--esc-config",
  description:
    "[EXPERIMENTAL] Create an ESC environment, managed by the stack, that holds the stack's configuration. ESC encrypts secret config values; --secrets-provider applies only to secrets in the stack's state",
};

const excludeDependentsOption: Fig.Option = {
  name: "--exclude-dependents",
  description:
    "Allows ignoring of dependent targets discovered but not specified in --exclude list",
};

const neoTaskOnFailureOption: Fig.Option = {
  name: "--neo-task-on-failure",
  description:
    "Start a Neo task to help debug errors that occur during the operation",
};

const orgOption3: Fig.Option = {
  name: "--org",
  description: "The organization that owns the Policy Group",
  args: { name: "org" },
};

const orgOption4: Fig.Option = {
  name: "--org",
  description:
    "The organization that owns the role. Defaults to the current default organization",
  args: { name: "org" },
};

const policyPackOption: Fig.Option = {
  name: "--policy-pack",
  description: "Run one or more policy packs as part of this update",
  isRepeatable: true,
  args: { name: "policy-pack" },
};

const policyPackConfigOption: Fig.Option = {
  name: "--policy-pack-config",
  description:
    'Path to JSON file containing the config for the policy pack of the corresponding "--policy-pack" flag',
  isRepeatable: true,
  args: { name: "file", template: "filepaths" },
};

const runProgramOption: Fig.Option = {
  name: "--run-program",
  description:
    "Run the program to determine up-to-date state for providers to refresh resources, this only applies if --refresh is set",
};

const runtimeOptionsOption: Fig.Option = {
  name: "--runtime-options",
  description:
    "Additional options for the language runtime (format: key1=value1,key2=value2)",
  isRepeatable: true,
  args: { name: "runtime-options" },
};

const secretsProviderOption: Fig.Option = {
  name: "--secrets-provider",
  description:
    "The type of the provider that should be used to encrypt and decrypt secrets (possible choices: default, passphrase, awskms, azurekeyvault, gcpkms, hashivault)",
  args: {
    name: "secrets-provider",
    default: "default",
    suggestions: [
      "default",
      "passphrase",
      "awskms",
      "azurekeyvault",
      "gcpkms",
      "hashivault",
    ],
  },
};

const showPolicyExceptionsOption: Fig.Option = {
  name: "--show-policy-exceptions",
  description: "Show each exempted policy violation instead of a summary",
};

const showPolicyRemediationsOption: Fig.Option = {
  name: "--show-policy-remediations",
  description:
    "Show per-resource policy remediation details instead of a summary",
};

const showReadsOption: Fig.Option = {
  name: "--show-reads",
  description:
    "Show resources that are being read in, alongside those being managed directly in the stack",
};

const showSecretsOption: Fig.Option = {
  name: "--show-secrets",
  description: "Show secret values in plaintext instead of ciphertext",
};

const showSecretsOption2: Fig.Option = {
  name: "--show-secrets",
  description: "Show static secrets in plaintext rather than ciphertext",
};

const skipConfigValidationOption: Fig.Option = {
  name: "--skip-config-validation",
  description:
    "Skip validation of stack config values against the project config schema",
};

const targetDependentsOption: Fig.Option = {
  name: "--target-dependents",
  description:
    "Allows updating of dependent targets discovered but not specified in --target list",
};

const targetReplaceOption: Fig.Option = {
  name: "--target-replace",
  description:
    "Specify a single resource URN to replace. Other resources will not be updated. Shorthand for --target urn --replace urn",
  isRepeatable: true,
  args: { name: "urn" },
};

const yesOption4: Fig.Option = {
  name: "--yes",
  description: "Skip all confirmation prompts",
  isDangerous: true,
};

const environmentNameArg3: Fig.Arg = {
  name: "environment-name",
  description: "[org-name/][project-name/]environment-name@version",
};

const nameArg2: Fig.Arg = { name: "name", isOptional: true };

const orgNameArg: Fig.Arg = { name: "org-name", isOptional: true };

const roleIdArg: Fig.Arg = { name: "role-id" };

const stackNameArg: Fig.Arg = {
  name: "stack-name",
  isOptional: true,
  generators: stacksGenerator,
};

const valueArg: Fig.Arg = { name: "value" };

const forceOption: Fig.Option = {
  name: ["-f", "--force"],
  description:
    "Forces content to be generated even if it would change existing files",
  isDangerous: true,
};

const jsonOption2: Fig.Option = {
  name: ["-j", "--json"],
  description: "Emit output as JSON",
};

const organizationOption: Fig.Option = {
  name: ["-o", "--organization"],
  description: "The Pulumi organization to configure OIDC for",
  args: { name: "organization" },
};

const remoteOptions: Fig.Option[] = [
  remoteOption,
  remoteAgentPoolIdOption,
  remoteEnvOption,
  remoteEnvSecretOption,
  remoteExecutorImageOption,
  remoteExecutorImagePasswordOption,
  remoteExecutorImageUsernameOption,
  remoteGitAuthAccessTokenOption,
  remoteGitAuthPasswordOption,
  remoteGitAuthSshPrivateKeyOption,
  remoteGitAuthSshPrivateKeyPathOption,
  remoteGitAuthUsernameOption,
  remoteGitBranchOption,
  remoteGitCommitOption,
  remoteGitRepoDirOption,
  remoteInheritSettingsOption,
  remotePreRunCommandOption,
  remoteSkipInstallDependenciesOption,
];

const showOptions: Fig.Option[] = [
  showConfigOption,
  showFullOutputOption,
  showPolicyExceptionsOption,
  showPolicyRemediationsOption,
  showReadsOption,
  showReplacementStepsOption,
];

const optionGroup: Fig.Option[] = [
  stackOption,
  suppressOutputsOption,
  suppressPermalinkOption,
  suppressProgressOption,
  suppressStreamLogsOption,
];

const completionSpec: Fig.Spec = {
  name: "pulumi",
  description:
    "Pulumi's open source infrastructure as code SDK enables you to create, deploy, and manage infrastructure on any cloud, using your favorite languages",
  options: [
    {
      name: "--color",
      description: "Colorize output. Choices are: always, never, raw, auto",
      isPersistent: true,
      args: {
        name: "mode",
        default: "auto",
        suggestions: ["always", "never", "raw", "auto"],
      },
    },
    {
      name: ["-C", "--cwd"],
      description: "Run pulumi as if it had been started in another directory",
      isPersistent: true,
      args: { name: "path", template: "folders" },
    },
    {
      name: "--disable-integrity-checking",
      description: "Disable integrity checking of checkpoint files",
      isPersistent: true,
    },
    {
      name: ["-e", "--emoji"],
      description: "Enable emojis in the output",
      isPersistent: true,
    },
    {
      name: ["-Q", "--fully-qualify-stack-names"],
      description: "Show fully-qualified stack names",
      isPersistent: true,
    },
    {
      name: "--logflow",
      description: "Flow log settings to child processes (like plugins)",
      isPersistent: true,
    },
    {
      name: "--logtostderr",
      description: "Log to stderr instead of to files",
      isPersistent: true,
    },
    {
      name: "--memprofilerate",
      description:
        "Enable more precise (and expensive) memory allocation profiles by setting runtime.MemProfileRate",
      isPersistent: true,
      args: { name: "int" },
    },
    {
      name: "--non-interactive",
      description: "Disable interactive mode for all commands",
      isPersistent: true,
    },
    {
      name: "--otel-traces",
      description:
        "Export OpenTelemetry traces to the specified endpoint. Use file:// for local JSON files, grpc:// or https:// for remote collectors",
      isPersistent: true,
      args: { name: "otel-traces" },
    },
    {
      name: "--profiling",
      description:
        "Emit CPU and memory profiles and an execution trace to '[filename].[pid].{cpu,mem,trace}', respectively",
      isPersistent: true,
      args: { name: "profiling" },
    },
    {
      name: "--tracing",
      description:
        "Emit tracing to the specified endpoint. Use the file: scheme to write tracing data to a local file",
      isPersistent: true,
      args: { name: "endpoint" },
    },
    {
      name: ["-v", "--verbose"],
      description:
        "Enable verbose logging (e.g., v=3); anything >3 is very verbose",
      isPersistent: true,
      args: { name: "int" },
    },
    {
      name: ["--help", "-h"],
      description: "Show help",
      isPersistent: true,
    },
  ],
  subcommands: [
    {
      name: "about",
      description: "Print information about the Pulumi environment",
      icon,
      options: [
        {
          name: "--output",
          description: "Output format. Supported values are: default and json",
          isPersistent: true,
          args: {
            name: "format",
            default: "default",
            suggestions: ["default", "json"],
          },
        },
        {
          name: ["-s", "--stack"],
          description:
            "The name of the stack to get info on. Defaults to the current stack",
          isPersistent: true,
          args: { name: "stack-name", generators: stacksGenerator },
        },
        {
          name: ["-t", "--transitive"],
          description: "Include transitive dependencies",
          isPersistent: true,
        },
        jsonOption,
      ],
      subcommands: [
        {
          name: "env",
          description:
            "An overview of the environmental variables used by pulumi",
        },
      ],
    },
    {
      name: "api",
      description: "Call any Pulumi Cloud API endpoint",
      args: { name: "path-or-operation-id", isOptional: true },
      options: [
        {
          name: "--all",
          description: "Follow pagination cursors and emit the combined result",
        },
        {
          name: "--body",
          description:
            "Inline request body sent verbatim (default Content-Type: application/json). Mutually exclusive with --input",
          args: { name: "body" },
        },
        {
          name: "--dry-run",
          description: "Print the resolved request without sending it",
        },
        {
          name: "--envelope-version",
          description: "Pin the JSON envelope version the caller expects",
          args: { name: "int", default: "1" },
        },
        {
          name: ["-F", "--field"],
          description:
            "Typed key=value; numbers/bools/null auto-detected; JSON object/array literals parsed; @file reads file; @- reads stdin. Sent as query params on GET/HEAD, JSON body fields otherwise",
          isRepeatable: true,
          args: { name: "field" },
        },
        {
          name: ["-H", "--header"],
          description: "Custom HTTP header Key: Value (repeatable)",
          isRepeatable: true,
          args: { name: "header" },
        },
        {
          name: ["-i", "--include"],
          description:
            "Include HTTP status line and response headers in output",
        },
        {
          name: "--input",
          description: "Read request body from file; - reads stdin",
          args: { name: "file", template: "filepaths" },
        },
        {
          name: ["-X", "--method"],
          description:
            "HTTP method (default GET, POST when body fields are present)",
          args: { name: "method" },
        },
        {
          name: "--output",
          description:
            "Drive content negotiation and rendering. Default uses the op's primary response content type (usually JSON). json or `markdown` request that format via the Accept header — rejected if the op's spec doesn't declare it. `raw` keeps the op's default Accept and writes the body through unchanged",
          args: { name: "format", suggestions: ["json", "markdown", "raw"] },
        },
        {
          name: ["-f", "--raw-field"],
          description:
            "String key=value with no type coercion. Sent as query params on GET/HEAD, JSON body fields otherwise",
          isRepeatable: true,
          args: { name: "raw-field" },
        },
        {
          name: "--refresh-spec",
          description:
            "Re-fetch the OpenAPI spec from Pulumi Cloud and overwrite the local cache",
          isPersistent: true,
        },
        {
          name: "--silent",
          description:
            "Do not print the response body on success; errors are still printed and exit non-zero",
        },
        {
          name: "--verbose",
          description: "Dump full request and response to stderr",
          isPersistent: true,
        },
      ],
      subcommands: [
        {
          name: "describe",
          description:
            "Show the parameters and schemas for a Pulumi Cloud API operation",
          args: { name: "path-or-operation-id" },
          options: [
            {
              name: ["-X", "--method"],
              description:
                "HTTP method to look up (a path can map to multiple ops by method)",
              args: { name: "method", default: "GET" },
            },
            {
              name: "--output",
              description:
                "Output format: default is a human-readable schema render; markdown emits a markdown document (piping friendly, renders in IDEs/glow); `json` emits the stable agent envelope",
              args: {
                name: "format",
                suggestions: ["default", "markdown", "json"],
              },
            },
          ],
        },
        {
          name: ["list", "ls"],
          description: "List every Pulumi Cloud API endpoint",
          options: [
            {
              name: "--filter",
              description:
                "Show only operations whose ID, path, tag, summary, or description contains this text (case-insensitive)",
              args: { name: "filter" },
            },
            {
              name: "--include-deprecated",
              description: "Include endpoints marked as deprecated",
            },
            {
              name: "--include-preview",
              description: "Include endpoints marked as preview (default true)",
            },
            {
              name: "--output",
              description:
                "Output format: table (human-readable, default when interactive), `json` (stable agent envelope, default when non-interactive). Use --output=table to keep the table when redirecting",
              args: { name: "format", suggestions: ["table", "json"] },
            },
          ],
        },
      ],
    },
    {
      name: "cancel",
      description: "Cancel a stack's currently running update, if any",
      args: stackNameArg,
      options: [
        stackOption,
        {
          name: ["-y", "--yes"],
          description:
            "Skip confirmation prompts, and proceed with cancellation anyway",
          isDangerous: true,
        },
      ],
    },
    {
      name: "config",
      description: "Manage configuration",
      options: [
        {
          name: "--config-file",
          description:
            "Use the configuration values in the specified file rather than detecting the file name",
          isPersistent: true,
          args: { name: "file", template: ["filepaths", "folders"] },
        },
        jsonOption2,
        {
          name: "--open",
          description:
            "Open and resolve any environments listed in the stack configuration. Defaults to true if --show-secrets is set, false otherwise",
        },
        {
          name: "--show-secrets",
          description:
            "Show secret values when listing config instead of displaying blinded values",
        },
        stackOption2,
      ],
      subcommands: [
        {
          name: ["copy", "cp"],
          description: "Copy config to another stack",
          args: { name: "key", isOptional: true },
          options: [
            {
              name: ["-d", "--dest"],
              description: "The name of the new stack to copy the config to",
              args: { name: "dest" },
            },
            {
              name: "--path",
              description:
                "The key contains a path to a property in a map or list to set",
            },
          ],
        },
        {
          name: "env",
          description: "Manage ESC environments for a stack",
          subcommands: [
            {
              name: "add",
              description: "Add environments to a stack",
              args: { name: "environment-name", isVariadic: true },
              options: [
                showSecretsOption,
                {
                  name: ["-y", "--yes"],
                  description: "True to save changes without prompting",
                  isDangerous: true,
                },
              ],
            },
            {
              name: "init",
              description: "Creates an environment for a stack",
              options: [
                {
                  name: "--env",
                  description:
                    'The name of the environment to create. Defaults to "<project name>/<stack name>"',
                  args: { name: "env" },
                },
                {
                  name: "--keep-config",
                  description:
                    "Do not remove configuration values from the stack after creating the environment",
                },
                showSecretsOption,
                {
                  name: ["-y", "--yes"],
                  description:
                    "True to save the created environment without prompting",
                  isDangerous: true,
                },
              ],
            },
            {
              name: ["list", "ls"],
              description: "Lists imported environments",
              options: [outputOption, jsonOption],
            },
            {
              name: ["remove", "delete", "rm"],
              description: "Remove environment from a stack",
              args: { name: "environment-name" },
              options: [
                showSecretsOption,
                {
                  name: ["-y", "--yes"],
                  description: "True to save changes without prompting",
                  isDangerous: true,
                },
              ],
            },
          ],
        },
        {
          name: "get",
          description: "Get a single configuration value",
          args: keyArg,
          options: [
            jsonOption2,
            {
              name: "--open",
              description:
                "Open and resolve any environments listed in the stack configuration (default true)",
            },
            {
              name: "--path",
              description:
                "The key contains a path to a property in a map or list to get",
            },
          ],
        },
        {
          name: "refresh",
          description:
            "Update the local configuration based on the most recent deployment of the stack",
          options: [
            {
              name: ["-f", "--force"],
              description:
                "Overwrite configuration file, if it exists, without creating a backup",
              isDangerous: true,
            },
          ],
        },
        {
          name: ["remove", "delete", "rm"],
          description: "Remove configuration value",
          args: keyArg,
          options: [
            {
              name: "--path",
              description:
                "The key contains a path to a property in a map or list to remove",
            },
          ],
        },
        {
          name: ["remove-all", "delete-all", "rm-all"],
          description: "Remove multiple configuration values",
          args: { name: "key", isVariadic: true },
          options: [
            {
              name: "--path",
              description:
                "Parse the keys as paths in a map or list rather than raw strings",
            },
          ],
        },
        {
          name: "set",
          description: "Set configuration value",
          args: [keyArg, { name: "value", isOptional: true }],
          options: [
            {
              name: "--path",
              description:
                "The key contains a path to a property in a map or list to set",
            },
            {
              name: "--plaintext",
              description: "Save the value as plaintext (unencrypted)",
            },
            {
              name: "--raw",
              description:
                "When setting the value through stdin, do not trim trailing newlines from the value",
            },
            {
              name: "--secret",
              description:
                "Encrypt the value instead of storing it in plaintext",
            },
            {
              name: "--type",
              description:
                "Save the value as the given type. Allowed values are string, bool, int, and float",
              args: {
                name: "type",
                suggestions: ["string", "bool", "int", "float"],
              },
            },
          ],
        },
        {
          name: "set-all",
          description: "Set multiple configuration values",
          options: [
            {
              name: "--json",
              description:
                "Read values from a JSON string in the format produced by 'pulumi config --json'",
              args: { name: "json" },
            },
            {
              name: "--path",
              description:
                "Parse the keys as paths in a map or list rather than raw strings",
            },
            {
              name: "--plaintext",
              description: "Marks a value as plaintext (unencrypted)",
              isRepeatable: true,
              args: { name: "plaintext" },
            },
            {
              name: "--secret",
              description: "Marks a value as secret to be encrypted",
              isRepeatable: true,
              args: { name: "secret" },
            },
          ],
        },
      ],
    },
    {
      name: "console",
      description: "Opens the current stack in the Pulumi Console",
      options: [
        {
          name: ["-s", "--stack"],
          description: "The name of the stack to view",
          args: { name: "stack-name", generators: stacksGenerator },
        },
      ],
    },
    {
      name: "convert",
      description:
        "Convert Pulumi programs from a supported source program into other supported languages",
      args: { name: "arg", isOptional: true, isVariadic: true },
      options: [
        {
          name: "--from",
          description:
            "Which converter plugin to use to read the source program",
          args: { name: "from", default: "yaml" },
        },
        {
          name: "--generate-only",
          description:
            "Generate the converted program(s) only; do not install dependencies",
        },
        {
          name: "--language",
          description:
            "Which language plugin to use to generate the Pulumi project",
          args: { name: "language" },
        },
        {
          name: "--mappings",
          description: "Any mapping files to use in the conversion",
          isRepeatable: true,
          args: { name: "mappings" },
        },
        {
          name: "--name",
          description:
            "The name to use for the converted project; defaults to the directory of the source project",
          args: { name: "name" },
        },
        {
          name: "--out",
          description: "The output directory to write the converted project to",
          args: { name: "dir", default: ".", template: "folders" },
        },
        {
          name: "--strict",
          description:
            "Fail the conversion on errors such as missing variables",
        },
      ],
    },
    {
      name: "delivery",
      description: "[PREVIEW] Manage Pulumi Delivery pipelines on Pulumi Cloud",
      subcommands: [
        {
          name: "register",
          description:
            "[PREVIEW] Register the Pulumi Delivery pipeline that a program declares",
          options: [
            attachDebuggerOption,
            {
              name: ["-c", "--config"],
              description:
                "Config to use during the update and save to the stack config file",
              isRepeatable: true,
              args: { name: "key=value" },
            },
            configFileOption,
            configPathOption,
            {
              name: "--continue-on-error",
              description:
                "Continue updating resources even if an error is encountered (can also be set with PULUMI_CONTINUE_ON_ERROR environment variable)",
            },
            debugOption,
            diffOption,
            {
              name: "--exclude",
              description:
                "Specify a resource URN to ignore. These resources will not be updated. Multiple resources can be specified using --exclude urn1 --exclude urn2. Wildcards (*, **) are also supported",
              isRepeatable: true,
              args: { name: "urn" },
            },
            excludeDependentsOption,
            {
              name: "--expect-no-changes",
              description:
                "Return an error if any changes occur during this update. This check happens after the update is applied",
            },
            {
              name: "--ignore-protect",
              description:
                "Ignore the protect resource option for this operation, allowing protected resources to be deleted or replaced. Use with caution: deleted resources cannot be recovered",
            },
            {
              name: ["-j", "--json"],
              description:
                "Serialize the update diffs, operations, and overall output as JSON",
            },
            messageOption,
            neoOption,
            neoTaskOnFailureOption,
            overrideEnvOption,
            parallelOption,
            policyPackOption,
            policyPackConfigOption,
            refreshOption,
            {
              name: "--replace",
              description:
                "Specify a single resource URN to replace. Multiple resources can be specified using --replace urn1 --replace urn2. Wildcards (*, **) are also supported",
              isRepeatable: true,
              args: { name: "urn" },
            },
            runProgramOption,
            {
              name: "--secrets-provider",
              description:
                "The type of the provider that should be used to encrypt and decrypt secrets (possible choices: default, passphrase, awskms, azurekeyvault, gcpkms, hashivault). Only used when creating a new stack from an existing template",
              args: {
                name: "secrets-provider",
                default: "default",
                suggestions: [
                  "default",
                  "passphrase",
                  "awskms",
                  "azurekeyvault",
                  "gcpkms",
                  "hashivault",
                ],
              },
            },
            ...showOptions,
            {
              name: "--show-sames",
              description:
                "Show resources that don't need be updated because they haven't changed, alongside those that do",
            },
            {
              name: "--show-secrets",
              description: "Show secret outputs in the CLI output",
            },
            skipConfigValidationOption,
            {
              name: "--skip-plugin-pre-install",
              description:
                "Skip the up-front provider plugin install step; missing plugins are installed lazily by the engine. When deploying from a template, also skips installing the project's runtime dependencies",
            },
            {
              name: ["-f", "--skip-preview"],
              description:
                "Do not calculate a preview before performing the update",
            },
            stackOption,
            suppressOutputsOption,
            suppressPermalinkOption,
            suppressProgressOption,
            {
              name: ["-t", "--target"],
              description:
                "Specify a single resource URN to update. Other resources will not be updated. Multiple resources can be specified using --target urn1 --target urn2. Wildcards (*, **) are also supported",
              isRepeatable: true,
              args: { name: "urn" },
            },
            targetDependentsOption,
            targetReplaceOption,
            urnsOption,
            {
              name: ["-y", "--yes"],
              description:
                "Automatically approve and perform the update after previewing it",
              isDangerous: true,
            },
          ],
        },
      ],
    },
    {
      name: "deployment",
      description: "[EXPERIMENTAL] Manage stack deployments on Pulumi Cloud",
      subcommands: [
        {
          name: "cancel",
          description: "[EXPERIMENTAL] Cancel an in-progress deployment",
          args: { name: "deployment-id" },
          options: [
            outputOption,
            stackOption,
            {
              name: ["-y", "--yes"],
              description:
                "Skip confirmation prompts, and proceed with cancellation anyway",
              isDangerous: true,
            },
          ],
        },
        {
          name: "get",
          description: "[EXPERIMENTAL] Get details for a specific deployment",
          args: { name: "deployment-version" },
          options: [outputOption, stackOption],
        },
        {
          name: ["list", "ls"],
          description: "[EXPERIMENTAL] List deployments for a stack",
          options: [
            {
              name: "--all",
              description:
                "Fetch all results (mutually exclusive with --count)",
            },
            {
              name: "--asc",
              description: "Sort in ascending order (default descending)",
            },
            {
              name: "--count",
              description:
                "Number of results to display (fetches multiple pages if needed)",
              args: { name: "int" },
            },
            outputOption,
            {
              name: "--sort",
              description: "The field to sort results by",
              args: { name: "sort" },
            },
            stackOption,
          ],
        },
        {
          name: "log",
          description:
            "[EXPERIMENTAL] Retrieve execution logs for a deployment",
          args: { name: "deployment-version" },
          options: [
            {
              name: "--all",
              description:
                "Fetch every available log line, following server-side pagination; mutually exclusive with --count",
            },
            {
              name: "--count",
              description:
                "The number of log lines to fetch, 1-499 in step mode (0 to leave unset)",
              args: { name: "int" },
            },
            {
              name: "--job",
              description:
                "The job index to fetch step-level logs for (-1 to leave unset)",
              args: { name: "int", default: "-1" },
            },
            {
              name: "--offset",
              description:
                "The offset within the step's logs (0 to leave unset)",
              args: { name: "int" },
            },
            outputOption,
            stackOption,
            {
              name: "--step",
              description:
                "The step index within the job; requires --job (-1 to leave unset)",
              args: { name: "int", default: "-1" },
            },
          ],
        },
        {
          name: "run",
          description: "Launch a deployment job on Pulumi Cloud",
          args: [{ name: "operation" }, urlArg],
          options: [
            {
              name: "--agent-pool-id",
              description:
                "The agent pool to use to run the deployment job. When empty, the Pulumi Cloud shared queue will be used",
              args: { name: "agent-pool-id" },
            },
            {
              name: "--env",
              description:
                "Environment variables to use in the remote operation of the form NAME=value (e.g. --env FOO=bar)",
              isRepeatable: true,
              args: { name: "name=value" },
            },
            {
              name: "--env-secret",
              description:
                "Environment variables with secret values to use in the remote operation of the form NAME=secretvalue (e.g. --env FOO=secret)",
              isRepeatable: true,
              args: { name: "name=value" },
            },
            {
              name: "--executor-image",
              description: "The Docker image to use for the executor",
              args: { name: "executor-image" },
            },
            {
              name: "--executor-image-password",
              description:
                "The password for the credentials with access to the Docker image to use for the executor",
              args: { name: "executor-image-password" },
            },
            {
              name: "--executor-image-username",
              description:
                "The username for the credentials with access to the Docker image to use for the executor",
              args: { name: "executor-image-username" },
            },
            {
              name: "--git-auth-access-token",
              description: "Git personal access token",
              args: { name: "git-auth-access-token" },
            },
            {
              name: "--git-auth-password",
              description:
                "Git password; for use with username or with an SSH private key",
              args: { name: "git-auth-password" },
            },
            {
              name: "--git-auth-ssh-private-key",
              description:
                "Git SSH private key; use --git-auth-password for the password, if needed",
              args: { name: "git-auth-ssh-private-key" },
            },
            {
              name: "--git-auth-ssh-private-key-path",
              description:
                "Git SSH private key path; use --git-auth-password for the password, if needed",
              args: { name: "file", template: "filepaths" },
            },
            {
              name: "--git-auth-username",
              description: "Git username",
              args: { name: "git-auth-username" },
            },
            {
              name: "--git-branch",
              description:
                "Git branch to deploy; this is mutually exclusive with --git-commit; either value needs to be specified",
              args: { name: "git-branch" },
            },
            {
              name: "--git-commit",
              description:
                "Git commit hash of the commit to deploy (if used, HEAD will be in detached mode); this is mutually exclusive with --git-branch; either value needs to be specified",
              args: { name: "git-commit" },
            },
            {
              name: "--git-repo-dir",
              description:
                "The directory to work from in the project's source repository where Pulumi.yaml is located; used when Pulumi.yaml is not in the project source root",
              args: { name: "git-repo-dir" },
            },
            {
              name: "--inherit-settings",
              description:
                "Inherit deployment settings from the current stack (default true)",
            },
            {
              name: "--pre-run-command",
              description: "Commands to run before the remote operation",
              isRepeatable: true,
              args: { name: "pre-run-command" },
            },
            {
              name: "--skip-install-dependencies",
              description:
                "Whether to skip the default dependency installation step",
            },
            stackOption,
            {
              name: "--suppress-permalink",
              description: "Suppress display of the state permalink",
            },
            {
              name: "--suppress-stream-logs",
              description:
                "Suppress log streaming of the deployment job (default true)",
            },
          ],
        },
        {
          name: "settings",
          description: "Manage stack deployment settings",
          subcommands: [
            {
              name: ["edit", "modify", "update"],
              description:
                "[EXPERIMENTAL] Create or update deployment settings for a stack",
              options: [
                {
                  name: "--branch",
                  description: "Source branch",
                  args: { name: "branch" },
                },
                {
                  name: "--cache",
                  description: "Cache dependencies between deployments",
                },
                {
                  name: "--commit",
                  description: "Source commit hash",
                  args: { name: "commit" },
                },
                {
                  name: "--delete-after-destroy",
                  description: "Delete the stack after a successful destroy",
                },
                {
                  name: "--deploy-tags",
                  description:
                    "Run updates for pushed tags (cannot be enabled together with --push-to-deploy)",
                },
                {
                  name: "--env",
                  description:
                    "Set a plaintext environment variable (repeatable, KEY=VALUE)",
                  isRepeatable: true,
                  args: { name: "env" },
                },
                {
                  name: "--executor-image",
                  description:
                    "Custom executor image; empty string clears it to the default image",
                  args: { name: "executor-image" },
                },
                {
                  name: "--executor-root-path",
                  description:
                    "Executor root path; empty string clears it to the default (/)",
                  args: { name: "executor-root-path" },
                },
                {
                  name: "--folder",
                  description:
                    "Path to the Pulumi.yaml folder within the source repo",
                  args: { name: "folder" },
                },
                {
                  name: "--git-auth-access-token",
                  description:
                    "Git source: personal access token (pass --remove-git-auth to remove stored credentials)",
                  args: { name: "git-auth-access-token" },
                },
                {
                  name: "--git-auth-password",
                  description: "Git source: basic auth password",
                  args: { name: "git-auth-password" },
                },
                {
                  name: "--git-auth-ssh-private-key",
                  description:
                    "Git source: PEM-encoded SSH private key, key material and not a path",
                  args: { name: "git-auth-ssh-private-key" },
                },
                {
                  name: "--git-auth-ssh-private-key-password",
                  description: "Git source: password for the SSH private key",
                  args: { name: "git-auth-ssh-private-key-password" },
                },
                {
                  name: "--git-auth-ssh-private-key-path",
                  description:
                    "Git source: path to a PEM-encoded SSH private key file (mutually exclusive with --git-auth-ssh-private-key)",
                  args: { name: "file", template: "filepaths" },
                },
                {
                  name: "--git-auth-username",
                  description: "Git source: basic auth username",
                  args: { name: "git-auth-username" },
                },
                {
                  name: "--git-url",
                  description:
                    "Git source: full repository URL (mutually exclusive with --repo)",
                  args: { name: "git-url" },
                },
                {
                  name: "--installation-id",
                  description:
                    "Version control integration ID; only needed to choose between several integrations for the same provider. List them with: pulumi api ListAllVCSIntegrations -F orgName=<org>",
                  args: { name: "installation-id" },
                },
                {
                  name: "--oidc-aws-duration",
                  description:
                    "AWS OIDC: assume-role session duration (e.g. 30m, 1h)",
                  args: { name: "oidc-aws-duration" },
                },
                {
                  name: "--oidc-aws-policy-arn",
                  description:
                    "AWS OIDC: replace the session policy ARN list (repeatable or comma-separated)",
                  isRepeatable: true,
                  args: { name: "oidc-aws-policy-arn" },
                },
                {
                  name: "--oidc-aws-role-arn",
                  description: "AWS OIDC: IAM role ARN to assume",
                  args: { name: "oidc-aws-role-arn" },
                },
                {
                  name: "--oidc-aws-session-name",
                  description: "AWS OIDC: assume-role session name",
                  args: { name: "oidc-aws-session-name" },
                },
                {
                  name: "--oidc-azure-client-id",
                  description:
                    "Azure OIDC: federated workload identity client ID",
                  args: { name: "oidc-azure-client-id" },
                },
                {
                  name: "--oidc-azure-subscription-id",
                  description:
                    "Azure OIDC: federated workload identity subscription ID",
                  args: { name: "oidc-azure-subscription-id" },
                },
                {
                  name: "--oidc-azure-tenant-id",
                  description:
                    "Azure OIDC: federated workload identity tenant ID",
                  args: { name: "oidc-azure-tenant-id" },
                },
                {
                  name: "--oidc-gcp-project-number",
                  description:
                    "GCP OIDC: numerical project number (e.g. 987654321)",
                  args: { name: "oidc-gcp-project-number" },
                },
                {
                  name: "--oidc-gcp-provider-id",
                  description:
                    "GCP OIDC: identity provider ID within the workload pool",
                  args: { name: "oidc-gcp-provider-id" },
                },
                {
                  name: "--oidc-gcp-region",
                  description: "GCP OIDC: region",
                  args: { name: "oidc-gcp-region" },
                },
                {
                  name: "--oidc-gcp-service-account",
                  description: "GCP OIDC: service account email",
                  args: { name: "oidc-gcp-service-account" },
                },
                {
                  name: "--oidc-gcp-token-lifetime",
                  description:
                    "GCP OIDC: lifetime of the temporary credentials (e.g. 30m, 1h)",
                  args: { name: "oidc-gcp-token-lifetime" },
                },
                {
                  name: "--oidc-gcp-workload-pool-id",
                  description: "GCP OIDC: workload identity pool ID",
                  args: { name: "oidc-gcp-workload-pool-id" },
                },
                outputOption,
                {
                  name: "--path-filter",
                  description:
                    "Replace the path filter list (repeatable; pass once per filter); empty string clears it",
                  isRepeatable: true,
                  args: { name: "path-filter" },
                },
                {
                  name: "--pr-template",
                  description:
                    "Use this stack as a template for PR review stacks",
                },
                {
                  name: "--pre-run-command",
                  description:
                    "Replace the pre-run command list (repeatable; pass once per command); empty string clears it",
                  isRepeatable: true,
                  args: { name: "pre-run-command" },
                },
                {
                  name: "--preview-prs",
                  description: "Run previews for pull requests",
                },
                {
                  name: "--push-to-deploy",
                  description:
                    "Run updates for pushed commits (cannot be enabled together with --deploy-tags)",
                },
                {
                  name: "--remediate-if-drift-detected",
                  description:
                    "Remediate the stack when a drift detection run finds drift",
                },
                {
                  name: "--remove-all-env",
                  description: "Remove every environment variable",
                },
                {
                  name: "--remove-env",
                  description:
                    "Delete an environment variable by key (repeatable or comma-separated)",
                  isRepeatable: true,
                  args: { name: "remove-env" },
                },
                {
                  name: "--remove-git-auth",
                  description:
                    "Remove the stored git credentials, whichever authentication mode they use",
                },
                {
                  name: "--remove-oidc-aws",
                  description: "AWS OIDC: remove the entire configuration",
                },
                {
                  name: "--remove-oidc-azure",
                  description: "Azure OIDC: remove the entire configuration",
                },
                {
                  name: "--remove-oidc-gcp",
                  description: "GCP OIDC: remove the entire configuration",
                },
                {
                  name: "--repo",
                  description:
                    "Version control source: repository reference, e.g. organization/repository (mutually exclusive with --git-url)",
                  args: { name: "repo" },
                },
                {
                  name: "--review-stack-label",
                  description:
                    "GitHub only: replace the labels that trigger a PR review stack (repeatable); empty string clears them",
                  isRepeatable: true,
                  args: { name: "review-stack-label" },
                },
                {
                  name: "--runner-pool",
                  description:
                    "Deployment runner pool ID; empty string clears it to the Pulumi-hosted pool",
                  args: { name: "runner-pool" },
                },
                {
                  name: "--secret-env",
                  description:
                    "Set an encrypted environment variable (repeatable, KEY=VALUE)",
                  isRepeatable: true,
                  args: { name: "secret-env" },
                },
                {
                  name: "--shell",
                  description: "Shell to use for pre-run commands",
                  args: { name: "shell" },
                },
                {
                  name: "--skip-install-deps",
                  description: "Skip automatic dependency installation",
                },
                {
                  name: "--skip-intermediate-deployments",
                  description: "Skip intermediate deployments",
                },
                stackOption,
                {
                  name: "--tag-filter",
                  description:
                    "Replace the tag filter list (repeatable; pass once per filter); empty string clears it",
                  isRepeatable: true,
                  args: { name: "tag-filter" },
                },
                {
                  name: "--template-source-url",
                  description:
                    "Template source URL, e.g. registry://templates/source/acme/vpc; empty string clears it",
                  args: { name: "template-source-url" },
                },
                {
                  name: "--vcs-provider",
                  description:
                    "Version control provider: github, gitlab, azure_devops, bitbucket or custom",
                  args: {
                    name: "vcs-provider",
                    suggestions: [
                      "github",
                      "gitlab",
                      "azure_devops",
                      "bitbucket",
                      "custom",
                    ],
                  },
                },
              ],
            },
            {
              name: "get",
              description:
                "[EXPERIMENTAL] Retrieve the deployment settings for a stack",
              options: [outputOption, stackOption],
            },
          ],
        },
      ],
    },
    {
      name: ["destroy", "dn", "down"],
      description: "Destroy all existing resources in the stack",
      args: urlArg,
      options: [
        {
          name: ["-c", "--config"],
          description:
            "Config to use during the destroy and save to the stack config file",
          isRepeatable: true,
          args: { name: "key=value" },
        },
        configFileOption,
        configPathOption,
        {
          name: "--continue-on-error",
          description:
            "Continue to perform the destroy operation despite the occurrence of errors (can also be set with PULUMI_CONTINUE_ON_ERROR env var)",
        },
        debugOption,
        diffOption,
        {
          name: ["-x", "--exclude"],
          description:
            "Specify a resource URN to ignore. These resources will not be updated. Multiple resources can be specified using --exclude urn1 --exclude urn2. Wildcards (*, **) are also supported",
          isRepeatable: true,
          args: { name: "urn" },
        },
        {
          name: "--exclude-protected",
          description:
            "Do not destroy protected resources. Destroy all other resources",
        },
        {
          name: "--ignore-protect",
          description:
            "Ignore the protect resource option for this operation, allowing protected resources to be destroyed. Use with caution: deleted resources cannot be recovered",
        },
        {
          name: ["-j", "--json"],
          description:
            "Serialize the destroy diffs, operations, and overall output as JSON",
        },
        {
          name: ["-m", "--message"],
          description:
            "Optional message to associate with the destroy operation",
          args: { name: "message" },
        },
        neoOption,
        overrideEnvOption,
        parallelOption,
        {
          name: "--preview-only",
          description:
            "Only show a preview of the destroy, but don't perform the destroy itself",
        },
        refreshOption,
        ...remoteOptions,
        {
          name: "--remove",
          description:
            "Remove the stack and its config file after all resources in the stack have been deleted",
        },
        {
          name: "--run-program",
          description:
            "Run the program to determine up-to-date state for providers to destroy resources",
        },
        showConfigOption,
        showFullOutputOption,
        showReplacementStepsOption,
        {
          name: "--show-sames",
          description:
            "Show resources that don't need to be updated because they haven't changed, alongside those that do",
        },
        {
          name: "--skip-config-validation",
          description:
            "Skip validation of stack config values against the project config schema. Config validation is skipped automatically when --run-program is not set",
        },
        skipPluginPreInstallOption,
        {
          name: ["-f", "--skip-preview"],
          description:
            "Do not calculate a preview before performing the destroy",
        },
        ...optionGroup,
        {
          name: ["-t", "--target"],
          description:
            "Specify a single resource URN to destroy. All resources necessary to destroy this target will also be destroyed. Multiple resources can be specified using: --target urn1 --target urn2. Wildcards (*, **) are also supported",
          isRepeatable: true,
          args: { name: "urn" },
        },
        {
          name: "--target-dependents",
          description:
            "Allows destroying of dependent targets discovered but not specified in --target list",
        },
        urnsOption,
        {
          name: ["-y", "--yes"],
          description:
            "Automatically approve and perform the destroy after previewing it",
          isDangerous: true,
        },
        copilotOption,
      ],
    },
    {
      name: "do",
      description: "[EXPERIMENTAL] Interact directly with cloud resources",
      args: [{ name: "pkg:mod:typ" }, { name: "command", isOptional: true }],
      options: [
        {
          name: "--dry-run",
          description: "Run the operation in preview mode",
        },
        {
          name: "--output",
          description:
            "Output format for resource operation results (supported: default, json)",
          args: { name: "format", suggestions: ["default", "json"] },
        },
        {
          name: "--package",
          description:
            'The package to load, in the form \'name@version\' or a path to a plugin binary or folder. If the package supports parameterization, additional space-separated parameters can be included after the package name, e.g. --package "name@version param1 \\"multi word param\\""',
          args: { name: "package" },
        },
        {
          name: "--show-secrets",
          description: "Show secret values in output",
        },
        {
          name: "--stateless",
          description:
            "Run create/patch/delete directly against the provider without persisting state",
        },
      ],
      subcommands: [
        {
          name: "show-resources",
          description:
            "Show the identifiers `pulumi do` will auto-assign to resources in the current stack",
          options: [
            {
              name: ["-o", "--output"],
              description: "Output format (supported: text, json)",
              args: {
                name: "format",
                default: "text",
                suggestions: ["text", "json"],
              },
            },
          ],
        },
      ],
    },
    {
      name: ["env", "esc"],
      description: "Manage environments",
      options: [
        {
          name: "--env",
          description: "The name of the environment to operate on",
          isPersistent: true,
          args: { name: "env" },
        },
      ],
      subcommands: [
        {
          name: "change-request",
          description: "[EXPERIMENTAL] Manage change requests",
          options: [
            {
              name: ["-o", "--organization"],
              description:
                "The organization that owns the change request (defaults to your default organization)",
              isPersistent: true,
              args: { name: "organization" },
            },
          ],
          subcommands: [
            {
              name: "apply",
              description: "[EXPERIMENTAL] Apply a change request",
              args: changeRequestIdArg,
              options: [
                {
                  name: "--dry-run",
                  description: "Show the proposed change without applying it",
                },
                outputOption2,
                {
                  name: ["-y", "--yes"],
                  description: "Skip the confirmation prompt",
                  isDangerous: true,
                },
              ],
            },
            {
              name: "approve",
              description: "[EXPERIMENTAL] Approve a change request",
              args: changeRequestIdArg,
              options: [
                {
                  name: "--dry-run",
                  description: "Show the proposed change without approving it",
                },
                {
                  name: ["-m", "--message"],
                  description: "A comment to add with the approval",
                  args: { name: "message" },
                },
                {
                  name: ["-y", "--yes"],
                  description: "Skip the confirmation prompt",
                  isDangerous: true,
                },
              ],
            },
            {
              name: "close",
              description: "[EXPERIMENTAL] Close a change request",
              args: changeRequestIdArg,
              options: [
                {
                  name: ["-m", "--message"],
                  description:
                    "A comment explaining why the change request was closed",
                  args: { name: "message" },
                },
              ],
            },
            {
              name: "comment",
              description: "[EXPERIMENTAL] Comment on a change request",
              args: changeRequestIdArg,
              options: [
                {
                  name: ["-m", "--message"],
                  description: "The comment",
                  args: { name: "message" },
                },
              ],
            },
            {
              name: "diff",
              description:
                "[EXPERIMENTAL] Show the change a change request proposes",
              args: changeRequestIdArg,
            },
            {
              name: "get",
              description: "[EXPERIMENTAL] Show a change request",
              args: changeRequestIdArg,
              options: [outputOption2],
            },
            {
              name: ["list", "ls"],
              description: "[EXPERIMENTAL] List change requests",
              options: [
                outputOption2,
                {
                  name: "--status",
                  description:
                    "Only list change requests with this status: open (draft, pending, or ready), applied, closed, or all",
                  args: {
                    name: "status",
                    default: "open",
                    suggestions: ["open", "applied", "closed", "all"],
                  },
                },
              ],
            },
            {
              name: "log",
              description: "[EXPERIMENTAL] Show a change request's events",
              args: changeRequestIdArg,
              options: [outputOption2],
            },
            {
              name: "rebase",
              description:
                "[EXPERIMENTAL] Rebase a draft onto the environment's current revision",
              args: changeRequestIdArg,
              options: [outputOption2],
            },
            {
              name: "unapprove",
              description:
                "[EXPERIMENTAL] Remove your approval from a change request",
              args: changeRequestIdArg,
            },
          ],
        },
        {
          name: "clone",
          description: "Clone an existing environment into a new environment",
          args: [
            {
              name: "src-environment-name",
              description: "[org-name/]src-project-name/src-environment-name",
            },
            {
              name: "dest-environment-name",
              description: "[dest-project-name/]dest-environment-name",
            },
          ],
          options: [
            {
              name: "--preserve-access",
              description:
                "Preserve the same team access on the environment being cloned",
            },
            {
              name: "--preserve-env-tags",
              description: "Preserve any tags on the environment being cloned",
            },
            {
              name: "--preserve-history",
              description: "Preserve history of the environment being cloned",
            },
            {
              name: "--preserve-rev-tags",
              description:
                "Preserve any tags on the environment revisions being cloned",
            },
          ],
        },
        {
          name: "diff",
          description: "Show changes between versions",
          args: [
            environmentNameArg2,
            {
              name: "other-environment",
              description:
                "Environment to compare against, as [[org-name/][project-name/]environment-name]@version",
              isOptional: true,
            },
          ],
          options: [
            {
              name: ["-f", "--format"],
              description:
                "The output format to use. May be 'dotenv', 'json', 'yaml', 'detailed', or 'shell'",
              args: {
                name: "format",
                suggestions: ["dotenv", "json", "yaml", "detailed", "shell"],
              },
            },
            {
              name: "--path",
              description: "Show the diff for a specific path",
              args: { name: "path" },
            },
            showSecretsOption2,
          ],
        },
        {
          name: ["edit", "modify", "update"],
          description: "Edit an environment definition",
          args: environmentNameArg,
          options: [
            draftOption,
            {
              name: "--editor",
              description:
                "The command to use to edit the environment definition",
              args: { name: "editor" },
            },
            {
              name: ["-f", "--file"],
              description:
                "The file that contains the updated environment, if any. Pass - to read from standard input",
              args: { name: "file", template: "filepaths" },
            },
            reasonOption,
            showSecretsOption2,
          ],
        },
        {
          name: "get",
          description: "Get a value within an environment",
          args: [environmentNameArg2, { name: "path" }],
          options: [
            {
              name: "--definition",
              description: "Set to print just the definition",
            },
            showSecretsOption2,
            {
              name: "--value",
              description:
                "Set to print just the value in the given format. May be 'dotenv', 'json', 'detailed', 'shell' or 'string'",
              args: {
                name: "value",
                suggestions: ["dotenv", "json", "detailed", "shell", "string"],
              },
            },
          ],
        },
        {
          name: ["init", "new"],
          description: "Create an empty environment with the given name",
          args: environmentNameArg,
          options: [
            {
              name: ["-f", "--file"],
              description:
                "The file to use to initialize the environment, if any. Pass - to read from standard input",
              args: { name: "file", template: "filepaths" },
            },
          ],
        },
        {
          name: ["list", "ls"],
          description: "List environments",
          options: [
            {
              name: ["-o", "--organization"],
              description:
                "Filter returned environments to those in a specific organization",
              args: { name: "organization" },
            },
            outputOption2,
            {
              name: ["-p", "--project"],
              description:
                "Filter returned environments to those in a specific project",
              args: { name: "project" },
            },
          ],
        },
        {
          name: "open",
          description: "Open the environment with the given name",
          args: [
            environmentNameArg2,
            { name: "property-path", isOptional: true },
          ],
          options: [
            {
              name: "--draft",
              description:
                "Open an environment draft with --draft=<change-request-id>",
              args: { name: "change-request-id" },
            },
            {
              name: ["-f", "--format"],
              description:
                "The output format to use. May be 'dotenv', 'json', 'yaml', 'detailed', 'shell' or 'string'",
              args: {
                name: "format",
                default: "json",
                suggestions: [
                  "dotenv",
                  "json",
                  "yaml",
                  "detailed",
                  "shell",
                  "string",
                ],
              },
            },
            {
              name: ["-l", "--lifetime"],
              description:
                "The lifetime of the opened environment in the form HhMm (e.g. 2h, 1h30m, 15m)",
              args: { name: "duration", default: "2h0m0s" },
            },
          ],
        },
        {
          name: "open-request",
          description: "Create a request for opening a protected environment",
          args: environmentNameArg2,
          options: [
            {
              name: "--access-duration-seconds",
              description: "Duration of access in seconds",
              args: { name: "duration", default: "72h0m0s" },
            },
            {
              name: "--grant-expiration-seconds",
              description: "Expiration time for the grant in seconds",
              args: { name: "duration", default: "25h0m0s" },
            },
            outputOption2,
            {
              name: "--reason",
              description:
                "An optional reason explaining why the environment is being opened, shown to approvers",
              args: { name: "reason" },
            },
          ],
        },
        {
          name: "provider",
          description: "Manage login providers within an environment",
          subcommands: [
            {
              name: "aws-login",
              description: "Add an AWS login provider to an environment",
              subcommands: [
                {
                  name: "oidc",
                  description:
                    "Add an AWS OIDC login provider to an environment",
                  args: [
                    environmentNameArg,
                    { name: "role-arn" },
                    { name: "session-name" },
                  ],
                  options: [
                    createOption,
                    draftOption,
                    {
                      name: "--duration",
                      description: "Optional session duration, e.g. 1h",
                      args: { name: "duration" },
                    },
                    {
                      name: "--export-env-vars",
                      description:
                        "Also set the AWS SDK environment variables (AWS_ACCESS_KEY_ID, etc.) referencing the login outputs",
                    },
                    {
                      name: "--path",
                      description:
                        "Property path under values where the provider block is written",
                      args: { name: "path", default: "aws.login" },
                    },
                    {
                      name: "--policy-arn",
                      description:
                        "AWS managed-policy ARN to attach to the role session (repeatable)",
                      isRepeatable: true,
                      args: { name: "policy-arn" },
                    },
                    reasonOption,
                    {
                      name: "--subject-attribute",
                      description:
                        "OIDC subject attribute to include in the session token (repeatable)",
                      isRepeatable: true,
                      args: { name: "subject-attribute" },
                    },
                  ],
                },
                {
                  name: "static",
                  description:
                    "Add an AWS static-credentials login provider to an environment",
                  args: [
                    environmentNameArg,
                    { name: "access-key-id" },
                    { name: "secret-access-key" },
                  ],
                  options: [
                    createOption,
                    draftOption,
                    {
                      name: "--export-env-vars",
                      description:
                        "Also set the AWS SDK environment variables (AWS_ACCESS_KEY_ID, etc.) referencing the login outputs",
                    },
                    {
                      name: "--path",
                      description:
                        "Property path under values where the provider block is written",
                      args: { name: "path", default: "aws.login" },
                    },
                    reasonOption,
                    {
                      name: "--session-token",
                      description: "Optional AWS session token",
                      args: { name: "session-token" },
                    },
                  ],
                },
              ],
            },
            {
              name: "azure-login",
              description: "Add an Azure login provider to an environment",
              subcommands: [
                {
                  name: "oidc",
                  description:
                    "Add an Azure OIDC login provider to an environment",
                  args: [
                    environmentNameArg,
                    { name: "tenant-id" },
                    { name: "subscription-id" },
                    { name: "client-id" },
                  ],
                  options: [
                    createOption,
                    draftOption,
                    {
                      name: "--export-env-vars",
                      description:
                        "Also set the Azure environment variables (ARM_CLIENT_ID, etc.) referencing the login outputs",
                    },
                    {
                      name: "--path",
                      description:
                        "Property path under values where the provider block is written",
                      args: { name: "path", default: "azure.login" },
                    },
                    reasonOption,
                    {
                      name: "--subject-attribute",
                      description:
                        "OIDC subject attribute to include in the federated token (repeatable)",
                      isRepeatable: true,
                      args: { name: "subject-attribute" },
                    },
                  ],
                },
                {
                  name: "static",
                  description:
                    "Add an Azure static-credentials login provider to an environment",
                  args: [
                    environmentNameArg,
                    { name: "tenant-id" },
                    { name: "subscription-id" },
                    { name: "client-id" },
                    { name: "client-secret" },
                  ],
                  options: [
                    createOption,
                    draftOption,
                    {
                      name: "--export-env-vars",
                      description:
                        "Also set the Azure environment variables (ARM_CLIENT_ID, etc.) referencing the login outputs",
                    },
                    {
                      name: "--path",
                      description:
                        "Property path under values where the provider block is written",
                      args: { name: "path", default: "azure.login" },
                    },
                    reasonOption,
                  ],
                },
              ],
            },
            {
              name: "gcp-login",
              description: "Add a GCP login provider to an environment",
              subcommands: [
                {
                  name: "oidc",
                  description:
                    "Add a GCP OIDC login provider to an environment",
                  args: [environmentNameArg, { name: "project-number" }],
                  options: [
                    createOption,
                    draftOption,
                    {
                      name: "--export-env-vars",
                      description:
                        "Also set the Google SDK environment variables (GOOGLE_PROJECT, etc.) referencing the login outputs",
                    },
                    {
                      name: "--path",
                      description:
                        "Property path under values where the provider block is written",
                      args: { name: "path", default: "gcp.login" },
                    },
                    {
                      name: "--provider-id",
                      description:
                        "GCP workload identity pool provider ID (required)",
                      args: { name: "provider-id" },
                    },
                    reasonOption,
                    {
                      name: "--region",
                      description:
                        "Optional GCP region for the workload identity pool",
                      args: { name: "region" },
                    },
                    {
                      name: "--service-account",
                      description:
                        "GCP service account to impersonate (required)",
                      args: { name: "service-account" },
                    },
                    {
                      name: "--subject-attribute",
                      description:
                        "OIDC subject attribute to include in the federated token (repeatable)",
                      isRepeatable: true,
                      args: { name: "subject-attribute" },
                    },
                    {
                      name: "--token-lifetime",
                      description:
                        "Optional lifetime for impersonated credentials, e.g. 1h30m",
                      args: { name: "token-lifetime" },
                    },
                    {
                      name: "--workload-pool-id",
                      description: "GCP workload identity pool ID (required)",
                      args: { name: "workload-pool-id" },
                    },
                  ],
                },
                {
                  name: "static",
                  description:
                    "Add a GCP static-credentials login provider to an environment",
                  args: [
                    environmentNameArg,
                    { name: "project-number" },
                    { name: "access-token" },
                  ],
                  options: [
                    createOption,
                    draftOption,
                    {
                      name: "--export-env-vars",
                      description:
                        "Also set the Google SDK environment variables (GOOGLE_PROJECT, etc.) referencing the login outputs",
                    },
                    {
                      name: "--path",
                      description:
                        "Property path under values where the provider block is written",
                      args: { name: "path", default: "gcp.login" },
                    },
                    reasonOption,
                    {
                      name: "--service-account",
                      description:
                        "Optional GCP service account to impersonate",
                      args: { name: "service-account" },
                    },
                    {
                      name: "--token-lifetime",
                      description:
                        "Optional lifetime for impersonated credentials, e.g. 1h30m",
                      args: { name: "token-lifetime" },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "referrer",
          description: "Manage environment referrers",
          subcommands: [
            {
              name: ["list", "ls"],
              description: "List entities that reference an environment",
              args: environmentNameArg,
              options: [
                {
                  name: "--all",
                  description:
                    "Return all referrers, paginating through every page. Mutually exclusive with --count",
                },
                {
                  name: "--all-revisions",
                  description:
                    "Include referrers across all revisions of the environment, not just the latest",
                },
                {
                  name: "--count",
                  description:
                    "The maximum number of referrers to return (server default if unset; max 500). Mutually exclusive with --all",
                  args: { name: "int" },
                },
                {
                  name: "--latest-stack-version-only",
                  description:
                    "Only include the latest version of each referring stack",
                },
                outputOption2,
              ],
            },
          ],
        },
        {
          name: ["remove", "delete", "rm"],
          description: "Remove an environment or a value from an environment",
          args: [environmentNameArg, { name: "path", isOptional: true }],
          options: [yesOption3],
        },
        {
          name: "rotate",
          description: "Rotate secrets in an environment",
          args: [
            environmentNameArg,
            { name: "path", isOptional: true, isVariadic: true },
          ],
        },
        {
          name: "run",
          description:
            "Open the environment with the given name and run a command",
          args: [
            environmentNameArg,
            { name: "command", isOptional: true, isVariadic: true },
          ],
          options: [
            {
              name: "--draft",
              description:
                "Open an environment draft with --draft=<change-request-id>",
              args: { name: "change-request-id" },
            },
            {
              name: ["-i", "--interactive"],
              description:
                "True to treat the command as interactive and disable output filters",
            },
            {
              name: ["-l", "--lifetime"],
              description: "The lifetime of the opened environment",
              args: { name: "duration", default: "2h0m0s" },
            },
          ],
        },
        {
          name: "schedule",
          description: "Manage environment scheduled actions",
          subcommands: [
            {
              name: ["edit", "modify", "update"],
              description: "Edit an environment scheduled action",
              args: [environmentNameArg, scheduleIdArg],
              options: [
                {
                  name: "--cron",
                  description:
                    "A cron expression for a recurring schedule (minimum interval: once daily)",
                  args: { name: "cron" },
                },
                {
                  name: "--once",
                  description:
                    "An ISO 8601 / RFC 3339 timestamp in the future for a one-time schedule",
                  args: { name: "once" },
                },
              ],
            },
            {
              name: "get",
              description: "Show details for an environment scheduled action",
              args: [environmentNameArg, scheduleIdArg],
              options: [outputOption2, utcOption],
            },
            {
              name: "history",
              description:
                "Show the execution history of an environment scheduled action",
              args: [environmentNameArg, scheduleIdArg],
              options: [
                {
                  name: "--count",
                  description:
                    "The maximum number of events to return (all if unset)",
                  args: { name: "int" },
                },
                outputOption2,
                utcOption,
              ],
            },
            {
              name: ["list", "ls"],
              description: "List environment scheduled actions",
              args: environmentNameArg,
              options: [
                {
                  name: "--count",
                  description:
                    "The maximum number of schedules to return (all if unset)",
                  args: { name: "int" },
                },
                outputOption2,
                utcOption,
              ],
            },
            {
              name: ["new", "create", "setup"],
              description: "Create a new scheduled action on an environment",
              args: environmentNameArg,
              options: [
                {
                  name: "--cron",
                  description:
                    "A cron expression for a recurring schedule (minimum interval: once daily)",
                  args: { name: "cron" },
                },
                {
                  name: "--once",
                  description:
                    "An ISO 8601 / RFC 3339 timestamp in the future for a one-time schedule",
                  args: { name: "once" },
                },
              ],
            },
            {
              name: ["remove", "delete", "rm"],
              description: "Remove an environment scheduled action",
              args: [environmentNameArg, scheduleIdArg],
              options: [
                {
                  name: ["-y", "--yes"],
                  description:
                    "Skip confirmation prompts and proceed with removal anyway",
                  isDangerous: true,
                },
              ],
            },
          ],
        },
        {
          name: "set",
          description: "Set a value within an environment",
          args: [environmentNameArg, { name: "path" }, valueArg],
          options: [
            draftOption,
            {
              name: ["-f", "--file"],
              description:
                "If set, the value is read from the specified file. Pass - to read from standard input",
              args: { name: "file", template: "filepaths" },
            },
            {
              name: "--plaintext",
              description: "True to leave the value in plaintext",
            },
            reasonOption,
            {
              name: "--secret",
              description: "True to mark the value as secret",
            },
            {
              name: "--string",
              description:
                "True to treat the value as a string rather than attempting to parse it as YAML",
            },
          ],
        },
        {
          name: "settings",
          description: "Manage environment settings",
          subcommands: [
            {
              name: "get",
              description: "Get environment settings",
              args: [
                environmentNameArg,
                { name: "setting-name", isOptional: true },
              ],
              options: [outputOption2],
            },
            {
              name: "set",
              description: "Set an environment setting",
              args: [
                environmentNameArg,
                { name: "setting-name" },
                { name: "setting-value" },
              ],
            },
          ],
        },
        {
          name: "setup",
          description: "[EXPERIMENTAL] Set up cloud provider OIDC integrations",
          subcommands: [
            {
              name: "aws",
              description:
                "[EXPERIMENTAL] Set up AWS OIDC integration for Pulumi ESC",
              options: [
                {
                  name: "--account",
                  description:
                    "An AWS account to set up (repeatable; prompted for when omitted)",
                  isRepeatable: true,
                  args: { name: "account" },
                },
                {
                  name: "--duration",
                  description: "The session duration for the assumed role",
                  args: { name: "duration", default: "1h" },
                },
                organizationOption,
                {
                  name: "--policy",
                  description:
                    "The policy attached to the OIDC role: AdministratorAccess (required for Deployments), ReadOnlyAccess (required for Discovery), or any other policy ARN; prompted for when omitted",
                  args: { name: "policy" },
                },
                {
                  name: "--project",
                  description:
                    "The ESC project that per-account environments are created in",
                  args: { name: "project", default: "aws-login" },
                },
                {
                  name: "--session-name",
                  description:
                    "The AWS session name recorded for the assumed role",
                  args: {
                    name: "session-name",
                    default: "pulumi-environments-session",
                  },
                },
                {
                  name: "--sso",
                  description:
                    "Force AWS SSO browser sign-in instead of using existing credentials, so several accounts can be configured at once (the SSO start URL and region are inferred from your AWS config)",
                },
                {
                  name: "--sso-region",
                  description:
                    "The region the AWS SSO instance is hosted in (inferred from your AWS config when omitted)",
                  args: { name: "sso-region" },
                },
                {
                  name: "--sso-role",
                  description:
                    "The SSO role to assume when setting up each account (prompted for when ambiguous)",
                  args: { name: "sso-role" },
                },
                {
                  name: "--sso-start-url",
                  description:
                    "The AWS SSO start URL; forces the browser sign-in (inferred from your AWS config when omitted)",
                  args: { name: "sso-start-url" },
                },
                yesOption4,
              ],
            },
            {
              name: "azure",
              description:
                "[EXPERIMENTAL] Set up Azure OIDC integration for Pulumi ESC",
              options: [
                {
                  name: "--browser",
                  description:
                    "Force browser sign-in instead of using existing credentials",
                },
                organizationOption,
                {
                  name: "--policy",
                  description:
                    "The role assigned per subscription: Contributor (required for Deployments), Reader (required for Discovery), or any other role definition ID; prompted for when omitted",
                  args: { name: "policy" },
                },
                {
                  name: "--project",
                  description:
                    "The ESC project that per-subscription environments are created in",
                  args: { name: "project", default: "azure-login" },
                },
                {
                  name: "--subscription",
                  description:
                    "An Azure subscription to set up (repeatable; prompted for when omitted)",
                  isRepeatable: true,
                  args: { name: "subscription" },
                },
                {
                  name: "--tenant",
                  description:
                    "The Azure tenant to configure, which only its own subscriptions are visible through (prompted for when omitted)",
                  args: { name: "tenant" },
                },
                yesOption4,
              ],
            },
            {
              name: "gcp",
              description:
                "[EXPERIMENTAL] Set up GCP OIDC integration for Pulumi ESC",
              options: [
                organizationOption,
                {
                  name: "--policy",
                  description:
                    "The role granted to the service account: roles/editor (required for Deployments), roles/viewer (required for Discovery), or any other role; prompted for when omitted",
                  args: { name: "policy" },
                },
                {
                  name: "--project",
                  description:
                    "The ESC project that per-project environments are created in",
                  args: { name: "project", default: "gcp-login" },
                },
                {
                  name: "--project-id",
                  description:
                    "A GCP project to set up (repeatable; prompted for when omitted)",
                  isRepeatable: true,
                  args: { name: "project" },
                },
                yesOption4,
              ],
            },
          ],
        },
        {
          name: "tag",
          description: "Manage environment tags",
          args: [environmentNameArg, nameArg, valueArg],
          options: [utcOption],
          subcommands: [
            {
              name: "get",
              description: "Get an environment tag",
              args: [environmentNameArg, nameArg],
              options: [outputOption2, utcOption],
            },
            {
              name: ["list", "ls"],
              description: "List environment tags",
              args: environmentNameArg,
              options: [
                outputOption2,
                {
                  name: "--pager",
                  description:
                    "The command to use to page through the environment's version tags",
                  args: { name: "pager" },
                },
                utcOption,
              ],
            },
            {
              name: ["move", "mv"],
              description: "Move an environment tag",
              args: [environmentNameArg, nameArg, { name: "new-name" }],
              options: [utcOption],
            },
            {
              name: ["remove", "delete", "rm"],
              description: "Remove an environment tag",
              args: [environmentNameArg, { name: "tag-name" }],
            },
          ],
        },
        {
          name: "version",
          description: "Manage versions",
          args: environmentNameArg3,
          options: [utcOption],
          subcommands: [
            {
              name: "history",
              description: "Show revision history",
              args: environmentNameArg2,
              options: [
                outputOption2,
                {
                  name: "--pager",
                  description:
                    "The command to use to page through the environment's revisions",
                  args: { name: "pager" },
                },
                utcOption,
              ],
            },
            {
              name: "retract",
              description: "Retract a specific revision of an environment",
              args: environmentNameArg3,
              options: [
                {
                  name: "--reason",
                  description: "The reason for the retraction",
                  args: { name: "reason" },
                },
                {
                  name: "--replace-with",
                  description:
                    "The version to use to replace the retracted revision",
                  args: { name: "replace-with" },
                },
              ],
            },
            {
              name: "rollback",
              description: "Roll back to a specific version",
              args: environmentNameArg3,
              options: [draftOption, reasonOption],
            },
            {
              name: "tag",
              description: "Manage tagged versions",
              args: [
                {
                  name: "environment-name",
                  description: "[org-name/][project-name/]environment-name@tag",
                },
                {
                  name: "version",
                  description: "Version as @version",
                  isOptional: true,
                },
              ],
              options: [utcOption],
              subcommands: [
                {
                  name: ["list", "ls"],
                  description: "List tagged versions",
                  args: environmentNameArg,
                  options: [
                    outputOption2,
                    {
                      name: "--pager",
                      description:
                        "The command to use to page through the environment's version tags",
                      args: { name: "pager" },
                    },
                    utcOption,
                  ],
                },
                {
                  name: ["remove", "delete", "rm"],
                  description: "Remove a tagged version",
                  args: {
                    name: "environment-name",
                    description:
                      "[org-name/][project-name/]environment-name@tag",
                  },
                },
              ],
            },
          ],
        },
        {
          name: "webhook",
          description: "Manage environment webhooks",
          subcommands: [
            {
              name: "delivery",
              description: "Manage environment webhook deliveries",
              subcommands: [
                {
                  name: ["list", "ls"],
                  description: "List environment webhook deliveries",
                  args: [environmentNameArg, webhookNameArg],
                  options: [
                    {
                      name: "--count",
                      description:
                        "The maximum number of deliveries to return (all if unset)",
                      args: { name: "int" },
                    },
                    outputOption2,
                    utcOption,
                  ],
                },
              ],
            },
            {
              name: ["edit", "modify", "update"],
              description: "Edit an environment webhook",
              args: [environmentNameArg, webhookNameArg],
              options: [
                activeOption,
                {
                  name: "--add-event",
                  description: "Subscribe to an additional event (repeatable)",
                  isRepeatable: true,
                  args: { name: "add-event" },
                },
                {
                  name: "--add-group",
                  description:
                    "Subscribe to an additional event group (repeatable)",
                  isRepeatable: true,
                  args: { name: "add-group" },
                },
                {
                  name: "--display-name",
                  description: "The display name",
                  args: { name: "display-name" },
                },
                {
                  name: "--event",
                  description: "Replace the subscribed events (repeatable)",
                  isRepeatable: true,
                  args: { name: "event" },
                },
                {
                  name: "--format",
                  description: "The payload format",
                  args: { name: "format" },
                },
                {
                  name: "--group",
                  description:
                    "Replace the subscribed event groups (repeatable)",
                  isRepeatable: true,
                  args: { name: "group" },
                },
                {
                  name: "--remove-event",
                  description: "Unsubscribe from an event (repeatable)",
                  isRepeatable: true,
                  args: { name: "remove-event" },
                },
                {
                  name: "--remove-group",
                  description: "Unsubscribe from an event group (repeatable)",
                  isRepeatable: true,
                  args: { name: "remove-group" },
                },
                {
                  name: "--remove-secret",
                  description: "Clear the existing shared secret",
                },
                {
                  name: "--secret",
                  description: "Shared secret used to sign deliveries",
                  args: { name: "secret" },
                },
                {
                  name: "--url",
                  description: "The payload URL to deliver events to",
                  args: { name: "url" },
                },
              ],
            },
            {
              name: "get",
              description: "Get an environment webhook",
              args: [environmentNameArg, webhookNameArg],
              options: [outputOption2],
            },
            {
              name: ["list", "ls"],
              description: "List environment webhooks",
              args: environmentNameArg,
              options: [
                {
                  name: "--count",
                  description:
                    "The maximum number of webhooks to return (all if unset)",
                  args: { name: "int" },
                },
                outputOption2,
              ],
            },
            {
              name: ["new", "create", "setup"],
              description: "Create a new environment webhook",
              args: [environmentNameArg, { name: "webhook-display-name" }],
              options: [
                activeOption,
                {
                  name: "--event",
                  description: "Event types to subscribe to (repeatable)",
                  isRepeatable: true,
                  args: { name: "event" },
                },
                {
                  name: "--format",
                  description: "The payload format",
                  args: {
                    name: "format",
                    default: "raw",
                    suggestions: ["raw", "slack", "ms_teams"],
                  },
                },
                {
                  name: "--group",
                  description: "Event groups to subscribe to (repeatable)",
                  isRepeatable: true,
                  args: { name: "group" },
                },
                {
                  name: "--secret",
                  description: "Shared secret used to sign deliveries",
                  args: { name: "secret" },
                },
                {
                  name: "--url",
                  description:
                    "The payload URL to deliver events to (required)",
                  args: { name: "url" },
                },
              ],
            },
            {
              name: "ping",
              description: "Send a test delivery to an environment webhook",
              args: [environmentNameArg, webhookNameArg],
            },
            {
              name: ["remove", "delete", "rm"],
              description: "Remove an environment webhook",
              args: [environmentNameArg, webhookNameArg],
            },
          ],
        },
      ],
    },
    {
      name: ["gen-completion", "completion"],
      description: "Generate completion scripts for the Pulumi CLI",
      args: { name: "shell", suggestions: ["bash", "zsh", "fish"] },
    },
    {
      name: "import",
      description: "Import resources into an existing stack",
      args: [
        { name: "type", isOptional: true },
        nameArg2,
        { name: "id", isOptional: true },
      ],
      options: [
        configFileOption,
        debugOption,
        diffOption,
        {
          name: ["-f", "--file"],
          description:
            "The path to a JSON-encoded file containing a list of resources to import",
          args: { name: "file", template: "filepaths" },
        },
        {
          name: "--from",
          description: "Invoke a converter to import the resources",
          args: { name: "from" },
        },
        {
          name: "--generate-code",
          description:
            "Generate resource declaration code for the imported resources (default true)",
        },
        {
          name: "--generate-resources",
          description:
            "When used with --from, always write a JSON-encoded file containing a list of importable resources discovered by conversion to the specified path",
          args: { name: "file", template: "filepaths" },
        },
        {
          name: ["-j", "--json"],
          description:
            "Serialize the import diffs, operations, and overall output as JSON",
        },
        messageOption,
        {
          name: ["-o", "--out"],
          description:
            "The path to the file that will contain the generated resource declarations",
          args: { name: "file", template: "filepaths" },
        },
        parallelOption,
        {
          name: "--parent",
          description:
            "The name and URN of the parent resource in the format name=urn, where name is the variable name of the parent resource",
          args: { name: "parent" },
        },
        {
          name: "--preview-only",
          description:
            "Only show a preview of the import, but don't perform the import itself",
        },
        {
          name: "--properties",
          description:
            "The property names to use for the import in the format name1,name2",
          isRepeatable: true,
          args: { name: "properties" },
        },
        {
          name: "--protect",
          description:
            "Allow resources to be imported with protection from deletion enabled (default true)",
        },
        {
          name: "--provider",
          description:
            "The name and URN of the provider to use for the import in the format name=urn, where name is the variable name for the provider resource",
          args: { name: "provider" },
        },
        skipPluginPreInstallOption,
        {
          name: "--skip-preview",
          description:
            "Do not calculate a preview before performing the import",
        },
        stackOption,
        suppressOutputsOption,
        suppressPermalinkOption,
        suppressProgressOption,
        urnsOption,
        {
          name: ["-y", "--yes"],
          description:
            "Automatically approve and perform the import after previewing it",
          isDangerous: true,
        },
      ],
    },
    {
      name: "insights",
      description:
        "[EXPERIMENTAL] Manage Pulumi Insights resources and accounts",
      subcommands: [
        {
          name: "account",
          description: "[EXPERIMENTAL] Manage Pulumi Insights accounts",
          subcommands: [
            {
              name: ["list", "ls"],
              description:
                "[EXPERIMENTAL] List Insights accounts available to the authenticated user",
              options: [
                { name: "--all", description: "Return every matching account" },
                {
                  name: "--count",
                  description:
                    "Return at most this many accounts (--count 0 is equivalent to --all)",
                  args: { name: "int" },
                },
                {
                  name: "--org",
                  description:
                    "Organization to list accounts for (defaults to the current default org)",
                  args: { name: "org" },
                },
                outputOption,
                {
                  name: "--parent",
                  description:
                    "Filter to child accounts of the named parent account",
                  args: { name: "parent" },
                },
                {
                  name: "--role-id",
                  description:
                    "Filter to accounts accessible by the named role",
                  args: { name: "role-id" },
                },
              ],
            },
            {
              name: ["new", "create", "setup"],
              description: "[EXPERIMENTAL] Create a new Insights account",
              args: nameArg,
              options: [
                {
                  name: "--agent-pool-id",
                  description:
                    "ID of the agent pool to run discovery workflows (defaults to the org's default pool)",
                  args: { name: "agent-pool-id" },
                },
                {
                  name: "--environment",
                  description:
                    "ESC environment containing provider credentials, in the form project/environment with an optional @version suffix",
                  args: { name: "environment" },
                },
                {
                  name: "--org",
                  description:
                    "Organization that will own the Insights account (defaults to the current default org)",
                  args: { name: "org" },
                },
                outputOption,
                {
                  name: "--provider",
                  description:
                    "Cloud provider for the account. One of: aws, gcp, azure-native, oci, kubernetes",
                  args: {
                    name: "provider",
                    suggestions: [
                      "aws",
                      "gcp",
                      "azure-native",
                      "oci",
                      "kubernetes",
                    ],
                  },
                },
                {
                  name: "--provider-config",
                  description:
                    'Provider-specific configuration as an inline JSON object (e.g. \'{"regions":["us-east-1"]}\')',
                  args: { name: "provider-config" },
                },
                {
                  name: "--scan-schedule",
                  description:
                    "Automated scan schedule. One of: none, 12h, daily",
                  args: {
                    name: "scan-schedule",
                    suggestions: ["none", "12h", "daily"],
                  },
                },
                {
                  name: ["-y", "--yes"],
                  description:
                    "Skip prompts; fail if any required value is missing",
                  isDangerous: true,
                },
              ],
            },
            {
              name: "scan",
              description:
                "[EXPERIMENTAL] Trigger a resource discovery scan for an Insights account",
              args: accountArg,
              options: [
                {
                  name: "--agent-pool",
                  description:
                    "Agent pool ID to use for the scan (defaults to the account's default pool)",
                  args: { name: "agent-pool" },
                },
                {
                  name: "--batch-size",
                  description:
                    "Number of resources processed per batch (server default when 0)",
                  args: { name: "int" },
                },
                {
                  name: "--list-concurrency",
                  description:
                    "Parallelism for list operations during the scan (server default when 0)",
                  args: { name: "int" },
                },
                orgOption,
                outputOption,
                {
                  name: "--read-concurrency",
                  description:
                    "Parallelism for read operations during the scan (server default when 0)",
                  args: { name: "int" },
                },
                {
                  name: "--read-timeout",
                  description:
                    "Per-read timeout as a Go duration (e.g. '30s', '5m'); server default when empty",
                  args: { name: "read-timeout" },
                },
              ],
              subcommands: [
                {
                  name: "get",
                  description:
                    "[EXPERIMENTAL] Get details for a specific Insights scan",
                  args: [accountArg, { name: "scan-id" }],
                  options: [orgOption, outputOption],
                },
                {
                  name: ["list", "ls"],
                  description:
                    "[EXPERIMENTAL] List recent scans for an Insights account",
                  args: accountArg,
                  options: [
                    {
                      name: "--all",
                      description: "Return every matching scan",
                    },
                    {
                      name: "--count",
                      description:
                        "Return at most this many scans (--count 0 is equivalent to --all)",
                      args: { name: "int" },
                    },
                    orgOption,
                    outputOption,
                  ],
                },
                {
                  name: "log",
                  description:
                    "[EXPERIMENTAL] Retrieve log output for an Insights scan",
                  args: [accountArg, { name: "scan-id" }],
                  options: [
                    {
                      name: "--all",
                      description:
                        "Fetch every entry (mutually exclusive with --count)",
                    },
                    {
                      name: "--count",
                      description: "Number of log entries to display",
                      args: { name: "int" },
                    },
                    {
                      name: "--job",
                      description:
                        "Switch to step mode and select this job index (combine with --step)",
                      args: { name: "int" },
                    },
                    orgOption,
                    outputOption,
                    {
                      name: "--step",
                      description:
                        "Step index within --job whose log output to fetch",
                      args: { name: "int" },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "resource",
          description:
            "[EXPERIMENTAL] Inspect resources discovered by Pulumi Insights",
          subcommands: [
            {
              name: "get",
              description:
                "[EXPERIMENTAL] Get a single resource discovered by Pulumi Insights",
              args: { name: "resource-type-and-id" },
              options: [
                {
                  name: "--account",
                  description: "Insights account containing the resource",
                  args: { name: "account" },
                },
                orgOption,
                outputOption,
              ],
            },
            {
              name: "search",
              description:
                "[EXPERIMENTAL] Search for resources discovered by Pulumi Insights",
              options: [
                {
                  name: "--asc",
                  description: "Sort in ascending order (default: descending)",
                },
                {
                  name: "--collapse",
                  description:
                    "Consolidate resources that exist in multiple sources into a single result",
                },
                {
                  name: "--cursor",
                  description:
                    "Opaque cursor to continue pagination from (Enterprise plans only)",
                  args: { name: "cursor" },
                },
                {
                  name: "--org",
                  description:
                    "Organization to search within (defaults to the current default org)",
                  args: { name: "org" },
                },
                outputOption,
                {
                  name: "--page",
                  description:
                    "1-based page of results to return (max 10,000 total results)",
                  args: { name: "int" },
                },
                {
                  name: "--page-size",
                  description: "Number of results per page",
                  args: { name: "int" },
                },
                {
                  name: "--properties",
                  description:
                    "Include resource input/output values (requires a supported subscription)",
                },
                {
                  name: ["-q", "--query"],
                  description: "Search query in Pulumi query syntax",
                  args: { name: "query" },
                },
                {
                  name: "--sort",
                  description:
                    "Field(s) to sort results by; repeat or comma-separate for multiple. Allowed values: category, created, custom, delete, dependencies, id, managed, modified, module, name, package, parentUrn, project, protected, providerUrn, stack, type, urn",
                  isRepeatable: true,
                  args: { name: "sort" },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "install",
      description:
        "Install packages and plugins for the current program or policy pack",
      options: [
        {
          name: "--no-dependencies",
          description: "Skip installing dependencies",
        },
        { name: "--no-plugins", description: "Skip installing plugins" },
        {
          name: "--parallel",
          description:
            "The max number of concurrent installs to perform. Parallelism of less than 1 implies unbounded parallelism",
          args: { name: "int", default: "4" },
        },
        {
          name: "--reinstall",
          description: "Reinstall a plugin even if it already exists",
        },
        {
          name: "--use-language-version-tools",
          description:
            "Use language version tools to set up and install the language runtime",
        },
      ],
    },
    {
      name: "login",
      description: "Log in to a Pulumi state backend",
      args: urlArg,
      options: [
        {
          name: ["-c", "--cloud-url"],
          description:
            "The URL of the Pulumi Cloud API to log in with (e.g., 'https://api.pulumi.com')",
          args: { name: "cloud-url" },
        },
        {
          name: "--credential-helper",
          description: "[EXPERIMENTAL] Command to supply backend credentials",
          args: { name: "credential-helper" },
        },
        {
          name: "--credential-helper-arg",
          description:
            "[EXPERIMENTAL] Literal argument to pass to the credentials helper (repeatable)",
          isRepeatable: true,
          args: { name: "credential-helper-arg" },
        },
        {
          name: "--default-org",
          description:
            "A default org to associate with the login. Please note, currently, only the managed and self-hosted backends support organizations",
          args: { name: "default-org" },
        },
        {
          name: "--insecure",
          description: "Allow insecure server connections when using SSL",
        },
        {
          name: "--interactive",
          description: "Show interactive login options based on known accounts",
        },
        {
          name: ["-l", "--local"],
          description: "Use Pulumi in local-only mode",
        },
        {
          name: "--oidc-expiration",
          description:
            "The expiration for the cloud backend access token in duration format (e.g. '15m', '24h')",
          args: { name: "oidc-expiration" },
        },
        {
          name: "--oidc-org",
          description:
            "The organization to use for OIDC token exchange audience",
          args: { name: "oidc-org" },
        },
        {
          name: "--oidc-team",
          description: "The team when exchanging for a team token",
          args: { name: "oidc-team" },
        },
        {
          name: "--oidc-token",
          description:
            "An OIDC token to exchange for a cloud backend access token. Can be either a raw token or a file path prefixed with 'file://'",
          args: { name: "oidc-token" },
        },
        {
          name: "--oidc-user",
          description: "The user when exchanging for a personal token",
          args: { name: "oidc-user" },
        },
      ],
    },
    {
      name: "logout",
      description: "Log out of a Pulumi state backend",
      args: urlArg,
      options: [
        { name: "--all", description: "Log out of all backends" },
        {
          name: ["-c", "--cloud-url"],
          description:
            "A cloud URL to log out of (defaults to the current backend)",
          args: { name: "cloud-url" },
        },
        {
          name: "--delete-credentials-key",
          description:
            "Also delete the key that encrypts stored credentials from the OS credential store. Encrypted credentials in every other PULUMI_HOME, PULUMI_CREDENTIALS_PATH and the agent credentials file become unreadable. Requires --all",
        },
        {
          name: ["-l", "--local"],
          description: "Log out of local-only mode (an alias for file://~)",
        },
      ],
    },
    {
      name: "logs",
      description: "Manage automatic log files",
      options: [stackOption2],
      subcommands: [
        {
          name: "decrypt",
          description: "Decrypt and display automatic logs",
          args: { name: "filename", isOptional: true },
          options: [
            {
              name: "--latest",
              description: "Decrypt the most recent log file without prompting",
            },
          ],
        },
        {
          name: ["list", "ls"],
          description: "List automatic log files",
          options: [outputOption],
        },
        {
          name: ["remove", "delete", "rm"],
          description: "Remove automatic log files",
          options: [
            { name: "--all", description: "Remove all log files" },
            {
              name: "--before",
              description:
                "Remove logs created before this date or duration (e.g. '24h', '2026-01-01')",
              args: { name: "before" },
            },
            yesOption,
          ],
        },
        {
          name: "share",
          description: "Re-encrypt a log file for sharing with Pulumi support",
          args: { name: "filename", isOptional: true },
          options: [
            {
              name: "--include-secrets",
              description:
                "Include secret values in the shared log (by default secrets are redacted)",
            },
            {
              name: "--latest",
              description: "Share the most recent log file without prompting",
            },
          ],
        },
      ],
    },
    {
      name: "neo",
      description: "Start a Pulumi Neo agent task with local tool execution",
      args: { name: "prompt", isOptional: true },
      options: [
        {
          name: "--approval-mode",
          description:
            "Approval mode for tool calls: 'manual' prompts on every call, 'balanced' auto-approves low-risk calls, 'auto' executes everything without prompting",
          args: {
            name: "approval-mode",
            default: "manual",
            suggestions: ["manual", "balanced", "auto"],
          },
        },
        {
          name: "--cwd",
          description:
            "Working directory for local tool execution (defaults to the current directory)",
          args: { name: "path", template: "folders" },
        },
        {
          name: "--debug-preview",
          description:
            "Debug a failed preview. With no value, targets the stack's latest preview; pass =<preview-id> to target a specific one",
          requiresSeparator: true,
          args: { name: "preview-id", isOptional: true },
        },
        {
          name: "--debug-update",
          description:
            "Debug a failed update. With no value, targets the stack's latest update; pass =<version> (e.g. --debug-update=42) to target a specific one",
          requiresSeparator: true,
          args: { name: "version", isOptional: true },
        },
        {
          name: "--disable-integrations",
          description:
            "Run the Neo task with no integration credentials, ignoring any org-enabled integrations",
        },
        {
          name: "--org",
          description:
            "The organization that owns the Neo task (defaults to the user's default org)",
          args: { name: "org" },
        },
        {
          name: "--permission-mode",
          description:
            "Permission mode for the agent: 'default' grants full role-based capabilities, 'read-only' blocks state-mutating operations",
          args: {
            name: "permission-mode",
            default: "default",
            suggestions: ["default", "read-only"],
          },
        },
        {
          name: ["-p", "--print"],
          description:
            "Run a single prompt non-interactively, print the agent's final response to stdout, and exit. Intended for use with other AI agents and scripts",
        },
        {
          name: ["-s", "--stack"],
          description: "The name of the stack to attach to the Neo task",
          args: { name: "stack-name", generators: stacksGenerator },
        },
      ],
      subcommands: [
        {
          name: "resume",
          description:
            "Resume local tool execution for an existing Pulumi Neo task",
          args: { name: "task-id" },
          options: [
            {
              name: "--cwd",
              description:
                "Working directory for local tool execution (defaults to the current directory)",
              args: { name: "path", template: "folders" },
            },
            {
              name: "--org",
              description:
                "The organization that owns the Neo task (defaults to the user's default org)",
              args: { name: "org" },
            },
          ],
        },
      ],
    },
    {
      name: ["new", "create", "setup"],
      description: "Create a new Pulumi project",
      args: templateUrlArg,
      options: [
        {
          name: ["-c", "--config"],
          description: "Config to save",
          isRepeatable: true,
          args: { name: "key=value" },
        },
        configPathOption,
        {
          name: ["-d", "--description"],
          description:
            "The project description; if not specified, a prompt will request it",
          args: { name: "description" },
        },
        {
          name: "--dir",
          description:
            "The location to place the generated project; if not specified, the current directory is used",
          args: { name: "dir", template: "folders" },
        },
        escConfigOption,
        forceOption,
        {
          name: ["-g", "--generate-only"],
          description:
            "Generate the project only; do not create a stack, save config, or install dependencies",
        },
        {
          name: ["-l", "--list-templates"],
          description: "List locally installed templates and exit",
        },
        {
          name: ["-n", "--name"],
          description:
            "The project name; if not specified, a prompt will request it",
          args: { name: "name" },
        },
        offlineOption,
        runtimeOptionsOption,
        secretsProviderOption,
        {
          name: ["-s", "--stack"],
          description:
            "The stack name; either an existing stack or stack to create; if not specified, a prompt will request it",
          args: { name: "stack-name", generators: stacksGenerator },
        },
        yesOption2,
      ],
    },
    {
      name: "org",
      description: "Manage Organization configuration",
      subcommands: [
        {
          name: "audit-log",
          description: "[EXPERIMENTAL] Inspect organization audit logs",
          subcommands: [
            {
              name: "export",
              description:
                "[EXPERIMENTAL] Export audit log events for an organization",
              options: [
                {
                  name: "--count",
                  description:
                    "Truncate the exported response to the given number of bytes (0 returns the full response)",
                  args: { name: "int" },
                },
                {
                  name: "--end-time",
                  description:
                    "The upper bound of the time range, as a Unix timestamp",
                  args: { name: "end-time" },
                },
                {
                  name: "--event-type",
                  description: "Filter by event type",
                  args: { name: "event-type" },
                },
                {
                  name: "--format",
                  description: "The export format. One of: csv, cef",
                  args: {
                    name: "format",
                    default: "csv",
                    suggestions: ["csv", "cef"],
                  },
                },
                {
                  name: "--org",
                  description: "The organization to export audit logs for",
                  args: { name: "org" },
                },
                outputOption,
                {
                  name: "--start-time",
                  description:
                    "The lower bound of the time range, as a Unix timestamp",
                  args: { name: "start-time" },
                },
                {
                  name: "--user",
                  description: "Filter by user login",
                  args: { name: "user" },
                },
              ],
            },
            {
              name: ["list", "ls"],
              description:
                "[EXPERIMENTAL] List audit log events for an organization",
              options: [
                {
                  name: "--all",
                  description:
                    "Return all matching events; mutually exclusive with --count",
                },
                {
                  name: "--count",
                  description:
                    "Maximum number of events to return. Defaults to the size of the first page; larger values auto-paginate",
                  args: { name: "int" },
                },
                {
                  name: "--end-time",
                  description:
                    "The upper bound of the time range, as a Unix timestamp",
                  args: { name: "end-time" },
                },
                {
                  name: "--event-type",
                  description: "Filter by event type",
                  args: { name: "event-type" },
                },
                {
                  name: "--org",
                  description: "The organization to list audit logs for",
                  args: { name: "org" },
                },
                outputOption,
                {
                  name: "--start-time",
                  description:
                    "The lower bound of the time range, as a Unix timestamp",
                  args: { name: "start-time" },
                },
                {
                  name: "--user",
                  description: "Filter by user login",
                  args: { name: "user" },
                },
              ],
            },
          ],
        },
        {
          name: "get-default",
          description: "Get the default org for the current backend",
        },
        {
          name: "member",
          description: "[EXPERIMENTAL] Manage organization members",
          subcommands: [
            {
              name: ["edit", "modify", "update"],
              description:
                "[EXPERIMENTAL] Modify a member's role within an organization",
              args: { name: "user-login" },
              options: [
                {
                  name: "--fga-role-id",
                  description: "The custom role to assign (by ID)",
                  args: { name: "fga-role-id" },
                },
                {
                  name: "--fga-role-name",
                  description:
                    "The custom role to assign (by name; resolved to ID automatically)",
                  args: { name: "fga-role-name" },
                },
                {
                  name: "--org",
                  description: "The organization that owns the member",
                  args: { name: "org" },
                },
                outputOption,
                {
                  name: "--role",
                  description:
                    "The built-in role to assign: member, admin, or billing-manager",
                  args: {
                    name: "role",
                    suggestions: ["member", "admin", "billing-manager"],
                  },
                },
              ],
            },
            {
              name: ["list", "ls"],
              description: "[EXPERIMENTAL] List members of an organization",
              options: [
                {
                  name: "--all",
                  description:
                    "Fetch every page until the server reports no more results. Mutually exclusive with --count",
                },
                {
                  name: "--count",
                  description:
                    "The number of members to return; if larger than the server page size, additional pages are fetched automatically. Defaults to the size of the first page",
                  args: { name: "int" },
                },
                {
                  name: "--org",
                  description:
                    "The organization to list members for. Defaults to the user's default organization",
                  args: { name: "org" },
                },
                outputOption,
              ],
            },
            {
              name: ["remove", "delete", "rm"],
              description:
                "[EXPERIMENTAL] Remove a member from an organization",
              args: { name: "user-login" },
              options: [
                {
                  name: "--org",
                  description: "The organization that owns the member",
                  args: { name: "org" },
                },
                outputOption,
                yesOption,
              ],
            },
          ],
        },
        {
          name: "role",
          description: "[EXPERIMENTAL] Manage organization custom roles",
          subcommands: [
            {
              name: "assign",
              description: "[EXPERIMENTAL] Assign a role to a team",
              args: [roleIdArg, { name: "team" }],
              options: [orgOption4, outputOption],
            },
            {
              name: ["edit", "modify", "update"],
              description:
                "[EXPERIMENTAL] Update a custom role's name, description, or permissions",
              args: roleIdArg,
              options: [
                {
                  name: "--description",
                  description: "Update the role's description",
                  args: { name: "description" },
                },
                {
                  name: "--details-file",
                  description:
                    "Path to a JSON file containing the role's new permission tree (use - for stdin)",
                  args: { name: "file", template: "filepaths" },
                },
                {
                  name: "--name",
                  description: "Rename the role",
                  args: { name: "name" },
                },
                orgOption4,
                outputOption,
              ],
            },
            {
              name: ["list", "ls"],
              description:
                "[EXPERIMENTAL] List custom roles for an organization",
              options: [
                {
                  name: "--org",
                  description:
                    "The organization to list roles for. Defaults to the current default organization",
                  args: { name: "org" },
                },
                outputOption,
                {
                  name: "--purpose",
                  description:
                    "Filter by UX purpose: role, role_private, role_temporary, policy, or set",
                  args: {
                    name: "purpose",
                    default: "role",
                    suggestions: [
                      "role",
                      "role_private",
                      "role_temporary",
                      "policy",
                      "set",
                    ],
                  },
                },
              ],
            },
            {
              name: ["new", "create", "setup"],
              description:
                "[EXPERIMENTAL] Create a new custom role for an organization",
              args: [nameArg, { name: "details-file" }],
              options: [
                {
                  name: "--description",
                  description: "A description for the role",
                  args: { name: "description" },
                },
                {
                  name: "--org",
                  description:
                    "The organization to create the role in. Defaults to the current default organization",
                  args: { name: "org" },
                },
                outputOption,
                {
                  name: "--purpose",
                  description:
                    "The UX purpose for the role: organization, team, or token",
                  args: {
                    name: "purpose",
                    suggestions: ["organization", "team", "token"],
                  },
                },
              ],
            },
            {
              name: ["remove", "delete", "rm"],
              description:
                "[EXPERIMENTAL] Delete a custom role from an organization",
              args: roleIdArg,
              options: [
                {
                  name: "--force",
                  description:
                    "Force deletion even if the role is currently assigned to members or teams",
                  isDangerous: true,
                },
                orgOption4,
                outputOption,
                {
                  name: ["-y", "--yes"],
                  description:
                    "Skip the confirmation prompt and proceed with deletion",
                  isDangerous: true,
                },
              ],
            },
          ],
        },
        {
          name: "search",
          description: "Search for resources in Pulumi Cloud",
          options: [
            {
              name: "--delimiter",
              description: "Delimiter to use when rendering CSV output",
              args: { name: "delimiter" },
            },
            {
              name: "--org",
              description:
                "Name of the organization to search. Defaults to the current user's default organization",
              args: { name: "org" },
            },
            {
              name: "--output",
              description:
                "Output format. Supported values are: default, json, yaml and csv",
              args: {
                name: "format",
                default: "default",
                suggestions: ["default", "json", "yaml", "csv"],
              },
            },
            {
              name: ["-q", "--query"],
              description:
                "A Pulumi Query to send to Pulumi Cloud for resource search (can be repeated)",
              isRepeatable: true,
              args: { name: "query" },
            },
            {
              name: "--web",
              description: "Open the search results in a web browser",
            },
          ],
          subcommands: [
            {
              name: "ai",
              description:
                "Search for resources in Pulumi Cloud using Pulumi AI",
              options: [
                {
                  name: "--delimiter",
                  description: "Delimiter to use when rendering CSV output",
                  args: { name: "delimiter" },
                },
                {
                  name: "--org",
                  description: "Organization name to search within",
                  args: { name: "org" },
                },
                {
                  name: "--output",
                  description:
                    "Output format. Supported values are: default, json, yaml and csv",
                  args: {
                    name: "format",
                    default: "default",
                    suggestions: ["default", "json", "yaml", "csv"],
                  },
                },
                {
                  name: ["-q", "--query"],
                  description: "Plaintext natural language query",
                  args: { name: "query" },
                },
                {
                  name: "--web",
                  description: "Open the search results in a web browser",
                },
              ],
            },
          ],
        },
        {
          name: "set-default",
          description:
            "Set the local default organization for the current backend",
          args: nameArg,
        },
        {
          name: "usage",
          description: "[EXPERIMENTAL] Inspect organization resource usage",
          subcommands: [
            {
              name: "get",
              description:
                "[EXPERIMENTAL] Fetch the resources-under-management summary for an organization",
              options: [
                {
                  name: "--granularity",
                  description:
                    "Time granularity for aggregation. One of: hourly, daily, monthly",
                  args: {
                    name: "granularity",
                    default: "daily",
                    suggestions: ["hourly", "daily", "monthly"],
                  },
                },
                {
                  name: "--lookback-days",
                  description:
                    "Number of days to look back from --lookback-start (or the current time)",
                  args: { name: "int", default: "30" },
                },
                {
                  name: "--lookback-start",
                  description:
                    "Unix timestamp (seconds) marking the end of the lookback window",
                  args: { name: "int" },
                },
                {
                  name: "--org",
                  description:
                    "Organization to fetch usage for (defaults to the current default org)",
                  args: { name: "org" },
                },
                outputOption,
              ],
            },
          ],
        },
        {
          name: "webhook",
          description: "[EXPERIMENTAL] Manage organization-level webhooks",
          subcommands: [
            {
              name: "delivery",
              description:
                "[EXPERIMENTAL] Inspect organization webhook deliveries",
              subcommands: [
                {
                  name: ["list", "ls"],
                  description:
                    "[EXPERIMENTAL] List recent deliveries for an organization webhook",
                  args: idArg,
                  options: [orgOption2, outputOption],
                },
              ],
            },
            {
              name: ["edit", "modify", "update"],
              description:
                "[EXPERIMENTAL] Update an organization webhook's configuration",
              args: idArg,
              options: [
                activeOption,
                {
                  name: "--add-event",
                  description: "An event type to add (repeatable)",
                  isRepeatable: true,
                  args: { name: "add-event" },
                },
                {
                  name: "--add-group",
                  description: "An event group to add (repeatable)",
                  isRepeatable: true,
                  args: { name: "add-group" },
                },
                {
                  name: "--display-name",
                  description: "The webhook display name",
                  args: { name: "display-name" },
                },
                {
                  name: "--hook-format",
                  description: "The webhook format: raw, slack, or ms_teams",
                  args: {
                    name: "hook-format",
                    suggestions: ["raw", "slack", "ms_teams"],
                  },
                },
                orgOption2,
                outputOption,
                {
                  name: "--remove-event",
                  description: "An event type to remove (repeatable)",
                  isRepeatable: true,
                  args: { name: "remove-event" },
                },
                {
                  name: "--remove-group",
                  description: "An event group to remove (repeatable)",
                  isRepeatable: true,
                  args: { name: "remove-group" },
                },
                {
                  name: "--secret",
                  description:
                    "The HMAC key for signature verification (empty string removes the secret)",
                  args: { name: "secret" },
                },
                {
                  name: "--url",
                  description: "The webhook payload URL",
                  args: { name: "url" },
                },
              ],
            },
            {
              name: ["list", "ls"],
              description:
                "[EXPERIMENTAL] List all webhooks configured for an organization",
              options: [
                {
                  name: "--all",
                  description:
                    "Show all results (mutually exclusive with --count)",
                },
                {
                  name: "--count",
                  description: "Number of results to display",
                  args: { name: "int" },
                },
                {
                  name: "--org",
                  description:
                    "The organization to list webhooks for. Defaults to the current org",
                  args: { name: "org" },
                },
                outputOption,
              ],
            },
            {
              name: ["new", "create", "setup"],
              description: "[EXPERIMENTAL] Create a new organization webhook",
              options: [
                activeOption,
                {
                  name: "--event",
                  description: "An event type to subscribe to (repeatable)",
                  isRepeatable: true,
                  args: { name: "event" },
                },
                {
                  name: "--group",
                  description: "An event group to subscribe to (repeatable)",
                  isRepeatable: true,
                  args: { name: "group" },
                },
                {
                  name: "--hook-format",
                  description: "The webhook format: raw, slack, or ms_teams",
                  args: {
                    name: "hook-format",
                    default: "raw",
                    suggestions: ["raw", "slack", "ms_teams"],
                  },
                },
                {
                  name: "--name",
                  description:
                    "The webhook name (1-32 chars, alphanumeric/hyphens/underscores/dots)",
                  args: { name: "name" },
                },
                {
                  name: "--org",
                  description:
                    "The organization to create the webhook in. Defaults to the current org",
                  args: { name: "org" },
                },
                outputOption,
                {
                  name: "--secret",
                  description: "The HMAC key for signature verification",
                  args: { name: "secret" },
                },
                {
                  name: "--url",
                  description:
                    "The webhook payload URL, including protocol (e.g. https://example.com/hook)",
                  args: { name: "url" },
                },
                yesOption2,
              ],
            },
            {
              name: "ping",
              description:
                "[EXPERIMENTAL] Send a test ping to an organization webhook",
              args: idArg,
              options: [orgOption2, outputOption],
            },
            {
              name: ["remove", "delete", "rm"],
              description: "[EXPERIMENTAL] Delete an organization webhook",
              args: idArg,
              options: [orgOption2, yesOption],
            },
          ],
        },
      ],
    },
    {
      name: "package",
      description: "Work with Pulumi packages",
      subcommands: [
        {
          name: "add",
          description:
            "Add a package to your Pulumi project, plugin, or current directory",
          args: [{ name: "provider|schema|path" }, providerParameterArg],
          options: [
            extensionOption,
            {
              name: "--language",
              description:
                "Run outside a Pulumi project or plugin: [nodejs|python|go|dotnet|java]",
              args: {
                name: "language",
                suggestions: ["nodejs", "python", "go", "dotnet", "java"],
              },
            },
            serverOption,
          ],
        },
        {
          name: "gen-sdk",
          description: "Generate SDK(s) from a package or schema",
          args: [schemaSourceArg, providerParameterArg],
          options: [
            extensionOption,
            {
              name: "--language",
              description:
                "The SDK language to generate: [nodejs|python|go|dotnet|java|all]",
              args: {
                name: "language",
                default: "all",
                suggestions: [
                  "nodejs",
                  "python",
                  "go",
                  "dotnet",
                  "java",
                  "all",
                ],
              },
            },
            {
              name: "--local",
              description: "Generate an SDK appropriate for local usage",
            },
            {
              name: ["-o", "--out"],
              description: "The directory to write the SDK to",
              args: { name: "dir", default: "./sdk", template: "folders" },
            },
            serverOption,
            {
              name: "--version",
              description:
                "The provider plugin version to generate the SDK for",
              args: { name: "version" },
            },
          ],
        },
        {
          name: "get-mapping",
          description:
            "Get the mapping information for a given key from a package",
          args: [
            keyArg,
            schemaSourceArg,
            { name: "provider-key", isOptional: true },
            providerParameterArg,
          ],
          options: [
            {
              name: ["-o", "--out"],
              description: "The file to write the mapping data to",
              args: { name: "file", template: "filepaths" },
            },
            serverOption,
          ],
        },
        {
          name: "get-schema",
          description: "Get the schema.json from a package",
          args: [schemaSourceArg, providerParameterArg],
          options: [extensionOption, serverOption],
        },
        {
          name: "info",
          description: "Show information about a package",
          args: [{ name: "provider|schema|path" }, providerParameterArg],
          options: [
            extensionOption,
            {
              name: ["-f", "--function"],
              description: "Function name",
              args: { name: "function" },
            },
            {
              name: ["-m", "--module"],
              description: "Module name",
              args: { name: "module" },
            },
            {
              name: ["-r", "--resource"],
              description: "Resource name",
              args: { name: "resource" },
            },
            serverOption,
          ],
        },
        {
          name: ["new", "create", "setup"],
          description: "[EXPERIMENTAL] Create a new Pulumi package",
          args: templateUrlArg,
          options: [
            {
              name: ["-d", "--description"],
              description:
                "The package description; if not specified, a prompt will request it",
              args: { name: "description" },
            },
            {
              name: "--dir",
              description:
                "The location to place the generated package; if not specified, the current directory is used",
              args: { name: "dir", template: "folders" },
            },
            {
              name: ["-f", "--force"],
              description:
                "Forces content to be generated in a non-empty directory",
              isDangerous: true,
            },
            {
              name: ["-g", "--generate-only"],
              description:
                "Generate the package only; do not install dependencies",
            },
            {
              name: ["-n", "--name"],
              description:
                "The package name; if not specified, a prompt will request it",
              args: { name: "name" },
            },
            offlineOption,
            yesOption2,
          ],
        },
        {
          name: "publish",
          description: "Publish a package to the Private Registry",
          args: [{ name: "provider|schema" }, providerParameterArg],
          options: [
            {
              name: "--installation-configuration",
              description:
                "Path to the installation configuration markdown file",
              args: { name: "installation-configuration" },
            },
            {
              name: "--publisher",
              description:
                "The publisher of the package (e.g., 'pulumi'). Defaults to the publisher set in the package schema or the default organization in your pulumi config",
              args: { name: "publisher" },
            },
            {
              name: "--readme",
              description: "Path to the package readme/index markdown file",
              args: { name: "readme" },
            },
            serverOption,
          ],
        },
        {
          name: ["remove", "delete", "rm"],
          description: "Delete a package version from the registry",
          args: {
            name: "name",
            description: "[[source/]publisher/]name[@version]",
          },
          options: [
            {
              name: ["-y", "--yes"],
              description:
                "Skip confirmation prompts, and proceed with deletion anyway",
              isDangerous: true,
            },
          ],
        },
      ],
    },
    {
      name: "plugin",
      description: "Manage language and resource provider plugins",
      subcommands: [
        {
          name: "install",
          description: "Install one or more plugins",
          args: [
            {
              name: "kind",
              isOptional: true,
              suggestions: [
                "analyzer",
                "language",
                "resource",
                "converter",
                "tool",
              ],
            },
            nameArg2,
            { name: "version", isOptional: true },
          ],
          options: [
            {
              name: "--checksum",
              description:
                "The expected SHA256 checksum for the plugin archive",
              args: { name: "checksum" },
            },
            {
              name: "--exact",
              description:
                "Force installation of an exact version match (usually >= is accepted)",
            },
            {
              name: ["-f", "--file"],
              description:
                "Install a plugin from a binary, folder or tarball, instead of downloading it",
              args: { name: "file", template: "filepaths" },
            },
            {
              name: "--parallel",
              description:
                "The max number of concurrent installs to perform. Parallelism of less than 1 implies unbounded parallelism",
              args: { name: "int", default: "4" },
            },
            {
              name: "--reinstall",
              description: "Reinstall a plugin even if it already exists",
            },
            {
              name: "--server",
              description: "A URL to download plugins from",
              args: { name: "server" },
            },
          ],
        },
        {
          name: ["list", "ls"],
          description: "List plugins",
          options: [
            outputOption,
            {
              name: ["-p", "--project"],
              description: "List only the plugins used by the current project",
            },
            jsonOption,
          ],
        },
        {
          name: ["remove", "delete", "rm"],
          description: "Remove one or more plugins from the download cache",
          args: [
            {
              name: "kind",
              isOptional: true,
              suggestions: [
                "analyzer",
                "language",
                "resource",
                "converter",
                "tool",
              ],
            },
            nameArg2,
            { name: "version", isOptional: true },
          ],
          options: [
            { name: ["-a", "--all"], description: "Remove all plugins" },
            yesOption3,
          ],
        },
        {
          name: "run",
          description: "Run a command on a plugin binary",
          args: [
            { name: "path|name@version" },
            { name: "args", isOptional: true, isVariadic: true },
          ],
          options: [
            {
              name: "--kind",
              description: "The plugin kind",
              args: { name: "kind", default: "tool" },
            },
          ],
        },
      ],
    },
    {
      name: "policy",
      description: "Manage policies, including policy packs, groups and issues",
      subcommands: [
        {
          name: "analyze",
          description: "Analyze existing resource state against policy packs",
          options: [
            {
              name: "--diff",
              description:
                "Display policy diagnostics as a rich diff instead of grouped progress output",
            },
            {
              name: "--file",
              description:
                "Analyze a state file (as produced by pulumi stack export) instead of a live stack",
              args: { name: "file", template: "filepaths" },
            },
            {
              name: ["-j", "--json"],
              description: "Serialize policy analysis events as JSON",
            },
            {
              name: "--policy-pack",
              description: "Path to a policy pack to run during analysis",
              isRepeatable: true,
              args: { name: "policy-pack" },
            },
            {
              name: "--policy-pack-config",
              description:
                "Path to a JSON config file for the corresponding --policy-pack",
              isRepeatable: true,
              args: { name: "file", template: "filepaths" },
            },
            {
              name: ["-s", "--stack"],
              description:
                "The name of the stack to analyze. Defaults to the current stack",
              args: { name: "stack-name", generators: stacksGenerator },
            },
          ],
        },
        {
          name: "compliance",
          description: "[EXPERIMENTAL] Inspect policy compliance results",
          subcommands: [
            {
              name: ["list", "ls"],
              description:
                "[EXPERIMENTAL] List compliance results grouped by entity",
              options: [
                {
                  name: "--count",
                  description:
                    "Maximum number of rows to display (default: all)",
                  args: { name: "int" },
                },
                {
                  name: "--group-by",
                  description:
                    "How to group results: stack, account, or severity",
                  args: {
                    name: "group-by",
                    default: "stack",
                    suggestions: ["stack", "account", "severity"],
                  },
                },
                {
                  name: "--org",
                  description:
                    "The organization to fetch compliance results for",
                  args: { name: "org" },
                },
                outputOption,
              ],
            },
          ],
        },
        {
          name: "disable",
          description: "Disable a Policy Pack for a Pulumi organization",
          args: orgNamePolicyPackNameArg,
          options: [
            outputOption,
            {
              name: "--policy-group",
              description:
                "The Policy Group for which the Policy Pack will be disabled; if not specified, the default Policy Group is used",
              args: { name: "policy-group" },
            },
            {
              name: "--version",
              description:
                "The version of the Policy Pack that will be disabled; if not specified, any enabled version of the Policy Pack will be disabled",
              args: { name: "version" },
            },
          ],
        },
        {
          name: "enable",
          description: "Enable a Policy Pack for a Pulumi organization",
          args: [orgNamePolicyPackNameArg, { name: "latest|version" }],
          options: [
            {
              name: "--config",
              description:
                'The file path for the Policy Pack configuration file; ESC environments listed in its "environments" key are attached to the Policy Pack',
              args: { name: "file", template: "filepaths" },
            },
            outputOption,
            {
              name: "--policy-group",
              description:
                "The Policy Group for which the Policy Pack will be enabled; if not specified, the default Policy Group is used",
              args: { name: "policy-group" },
            },
          ],
        },
        {
          name: "exception",
          description: "[EXPERIMENTAL] Manage policy exceptions",
          hidden: true,
          subcommands: [
            {
              name: "get",
              description:
                "[EXPERIMENTAL] Get the details of a policy exception",
              args: { name: "exception-id" },
              options: [
                {
                  name: "--org",
                  description: "The organization that owns the exception",
                  args: { name: "org" },
                },
                outputOption,
              ],
            },
            {
              name: ["list", "ls"],
              description:
                "[EXPERIMENTAL] List policy exceptions for an organization",
              args: { name: "policy-pack", isOptional: true },
              options: [
                {
                  name: "--org",
                  description: "The organization to list policy exceptions for",
                  args: { name: "org" },
                },
                outputOption,
                {
                  name: "--policy",
                  description: "Only list exceptions that name this policy",
                  args: { name: "policy" },
                },
                {
                  name: "--stack",
                  description:
                    "Only list exceptions with targets in this stack, as <project>/<stack>",
                  args: { name: "stack-name", generators: stacksGenerator },
                },
                {
                  name: "--status",
                  description:
                    "Only list exceptions with this status: active (default) or removed; may be repeated",
                  isRepeatable: true,
                  args: { name: "status", suggestions: ["active", "removed"] },
                },
              ],
            },
            {
              name: ["new", "create"],
              description:
                "[EXPERIMENTAL] Create a policy exception from a run's violations",
              args: { name: "policy-pack", isOptional: true },
              options: [
                {
                  name: "--draft",
                  description:
                    "Request the exception in a change request, even if the organization doesn't require approval",
                },
                {
                  name: "--dry-run",
                  description:
                    "Show the violations and the exception, without creating it",
                },
                {
                  name: "--expires-in",
                  description:
                    "Expire the exception this long after it's created, in days (7d) or hours (12h); by default it never expires",
                  args: { name: "expires-in" },
                },
                {
                  name: "--file",
                  description:
                    "Read the exception from this JSON or YAML file, or from stdin with -; its policyPack is the default",
                  args: { name: "file", template: "filepaths" },
                },
                {
                  name: "--level",
                  description:
                    "Only exempt violations of this enforcement level (mandatory, advisory, remediate or all); may be repeated (default [mandatory])",
                  isRepeatable: true,
                  args: {
                    name: "level",
                    suggestions: ["mandatory", "advisory", "remediate", "all"],
                  },
                },
                outputOption,
                {
                  name: "--policy",
                  description:
                    "Only exempt violations of this policy; may be repeated",
                  isRepeatable: true,
                  args: { name: "policy" },
                },
                {
                  name: "--preview",
                  description:
                    "Read the violations of a preview, as --preview=<id> (default: the latest)",
                  requiresSeparator: true,
                  args: { name: "preview-id", isOptional: true },
                },
                {
                  name: "--reason",
                  description: "Why it's safe to exempt the violations",
                  args: { name: "reason" },
                },
                {
                  name: ["-s", "--stack"],
                  description:
                    "The stack whose violations to read; may be repeated. Defaults to the current stack",
                  isRepeatable: true,
                  args: { name: "stack-name", generators: stacksGenerator },
                },
                {
                  name: "--target",
                  description:
                    "Only exempt violations on this resource URN; may be repeated",
                  isRepeatable: true,
                  args: { name: "urn" },
                },
                {
                  name: "--update",
                  description:
                    "Read the violations of an update, as --update=<version> (default: the latest)",
                  requiresSeparator: true,
                  args: { name: "version", isOptional: true },
                },
                {
                  name: ["-y", "--yes"],
                  description: "Skip prompts and confirmation",
                  isDangerous: true,
                },
              ],
            },
            {
              name: ["remove", "delete", "rm"],
              description: "[EXPERIMENTAL] Remove a policy exception",
              args: { name: "exception-id" },
              options: [
                {
                  name: "--org",
                  description: "The organization that owns the exception",
                  args: { name: "org" },
                },
                outputOption,
                yesOption,
              ],
            },
          ],
        },
        {
          name: "get",
          description: "[EXPERIMENTAL] Get the details of a Policy Pack",
          args: [
            {
              name: "policy-pack-name",
              description: "[org-name/]policy-pack-name",
            },
            { name: "latest|version", isOptional: true },
          ],
          options: [outputOption],
        },
        {
          name: "group",
          description: "Manage policy groups",
          subcommands: [
            {
              name: ["edit", "modify", "update"],
              description:
                "[EXPERIMENTAL] Update a Policy Group's configuration",
              args: nameArg,
              options: [
                {
                  name: "--account-rule",
                  description:
                    "Replace the Insights account match rule, in the same syntax as --stack-rule. Audit groups only. '' removes the rule",
                  args: { name: "account-rule" },
                },
                {
                  name: "--add-insights-account",
                  description:
                    "Add an Insights account to the Policy Group (repeatable)",
                  isRepeatable: true,
                  args: { name: "add-insights-account" },
                },
                {
                  name: "--add-policy-pack",
                  description:
                    "Add a Policy Pack to the Policy Group (repeatable). Format: 'name@version' or 'name'",
                  isRepeatable: true,
                  args: { name: "add-policy-pack" },
                },
                {
                  name: "--add-stack",
                  description:
                    "Add a stack to the Policy Group (repeatable). Format: 'project/stack' or 'stack'",
                  isRepeatable: true,
                  args: { name: "add-stack" },
                },
                {
                  name: "--name",
                  description: "Rename the Policy Group",
                  args: { name: "name" },
                },
                orgOption3,
                outputOption,
                {
                  name: "--remove-insights-account",
                  description:
                    "Remove an Insights account from the Policy Group (repeatable)",
                  isRepeatable: true,
                  args: { name: "remove-insights-account" },
                },
                {
                  name: "--remove-policy-pack",
                  description:
                    "Remove a Policy Pack from the Policy Group (repeatable). Format: 'name@version' or 'name'",
                  isRepeatable: true,
                  args: { name: "remove-policy-pack" },
                },
                {
                  name: "--remove-stack",
                  description:
                    "Remove a stack from the Policy Group (repeatable). Format: 'project/stack' or 'stack'",
                  isRepeatable: true,
                  args: { name: "remove-stack" },
                },
                {
                  name: "--stack-rule",
                  description:
                    "Replace the stack match rule: tag conditions such as 'env=prod,team!=web OR owner', or a JSON expression. '' removes the rule",
                  args: { name: "stack-rule" },
                },
              ],
            },
            {
              name: "get",
              description: "[EXPERIMENTAL] Get the details of a Policy Group",
              args: nameArg,
              options: [
                {
                  name: "--accounts",
                  description:
                    "List the Insights accounts in the group that you can read, added individually or matched by its match rule",
                },
                {
                  name: "--all",
                  description:
                    "With --stacks or --accounts, return every member you can read; mutually exclusive with --count",
                },
                {
                  name: "--count",
                  description:
                    "With --stacks or --accounts, the maximum number of members to return",
                  args: { name: "int", default: "100" },
                },
                orgOption3,
                outputOption,
                {
                  name: "--show-config",
                  description:
                    "List each policy pack's configured policies under the pack",
                },
                {
                  name: "--source",
                  description:
                    "With --stacks or --accounts, list only members that were added individually (explicit) or matched by the match rule (rule)",
                  args: { name: "source" },
                },
                {
                  name: "--stacks",
                  description:
                    "List the stacks in the group that you can read, added individually or matched by its match rule",
                },
              ],
            },
            {
              name: ["list", "ls"],
              description: "List all Policy Groups for a Pulumi organization",
              args: orgNameArg,
              options: [outputOption, jsonOption],
            },
            {
              name: ["new", "create", "setup"],
              description: "[EXPERIMENTAL] Create a new Policy Group",
              args: nameArg,
              options: [
                {
                  name: "--account-rule",
                  description:
                    "Insights account match rule, in the same syntax as --stack-rule. Audit groups only",
                  args: { name: "account-rule" },
                },
                {
                  name: "--agent-pool-id",
                  description: "Agent pool ID for policy evaluation (optional)",
                  args: { name: "agent-pool-id" },
                },
                {
                  name: "--mode",
                  description: "The enforcement mode: audit or preventative",
                  args: {
                    name: "mode",
                    suggestions: ["audit", "preventative"],
                  },
                },
                {
                  name: "--org",
                  description: "The organization to create the Policy Group in",
                  args: { name: "org" },
                },
                outputOption,
                {
                  name: "--stack-rule",
                  description:
                    "Stack match rule: tag conditions such as 'env=prod,team!=web OR owner', or a JSON expression",
                  args: { name: "stack-rule" },
                },
                {
                  name: ["-y", "--yes"],
                  description: "Skip prompts; --mode is then required",
                  isDangerous: true,
                },
              ],
            },
            {
              name: ["remove", "delete", "rm"],
              description: "[EXPERIMENTAL] Delete a Policy Group",
              args: nameArg,
              options: [orgOption3, outputOption, yesOption],
            },
          ],
        },
        {
          name: "install",
          description: "Install required policy packs for a stack",
          options: [stackOption],
        },
        {
          name: "issue",
          description: "[EXPERIMENTAL] Manage policy issues",
          subcommands: [
            {
              name: ["edit", "update"],
              description:
                "[EXPERIMENTAL] Edit the status, priority or assignee of a policy issue",
              args: { name: "issue-id" },
              options: [
                {
                  name: "--assignee",
                  description:
                    "Assign to the Pulumi login of an organization member",
                  args: { name: "assignee" },
                },
                {
                  name: "--org",
                  description: "The organization that owns the issue",
                  args: { name: "org" },
                },
                outputOption,
                {
                  name: "--priority",
                  description: "Set the priority (p0, p1, p2, p3, p4)",
                  args: { name: "priority" },
                },
                {
                  name: "--status",
                  description: "Set the status (open, in_progress, ignored)",
                  args: { name: "status" },
                },
                { name: "--unassign", description: "Clear the assignee" },
              ],
            },
            {
              name: "export",
              description: "[EXPERIMENTAL] Export policy issues as CSV",
              options: [
                {
                  name: "--account",
                  description:
                    "Filter by Insights account, as [<project>/]<account> (repeatable)",
                  isRepeatable: true,
                  args: { name: "account" },
                },
                {
                  name: "--assigned-to",
                  description: "Filter by assignee login (repeatable)",
                  isRepeatable: true,
                  args: { name: "assigned-to" },
                },
                {
                  name: "--closed",
                  description: "Export closed issues instead of active ones",
                },
                {
                  name: "--file",
                  description:
                    "Write the CSV to this file instead of standard output",
                  args: { name: "file", template: "filepaths" },
                },
                {
                  name: "--group",
                  description: "Filter by policy group (repeatable)",
                  isRepeatable: true,
                  args: { name: "group" },
                },
                {
                  name: "--org",
                  description: "The organization to export policy issues for",
                  args: { name: "org" },
                },
                {
                  name: "--pack",
                  description: "Filter by policy pack (repeatable)",
                  isRepeatable: true,
                  args: { name: "pack" },
                },
                {
                  name: "--policy",
                  description: "Filter by policy name (repeatable)",
                  isRepeatable: true,
                  args: { name: "policy" },
                },
                {
                  name: "--priority",
                  description:
                    "Filter by priority (repeatable). One of: p0, p1, p2, p3, p4",
                  isRepeatable: true,
                  args: {
                    name: "priority",
                    suggestions: ["p0", "p1", "p2", "p3", "p4"],
                  },
                },
                {
                  name: "--resource-type",
                  description: "Filter by resource type (repeatable)",
                  isRepeatable: true,
                  args: { name: "resource-type" },
                },
                {
                  name: "--severity",
                  description:
                    "Filter by severity (repeatable). One of: low, medium, high, critical",
                  isRepeatable: true,
                  args: {
                    name: "severity",
                    suggestions: ["low", "medium", "high", "critical"],
                  },
                },
                {
                  name: "--sort",
                  description:
                    "Sort by <field>[:asc|desc], default asc (repeatable). Fields: severity, priority, status, observedAt, lastModified, policyPack, policyName, policyGroupName, resourceType",
                  isRepeatable: true,
                  args: { name: "sort" },
                },
                {
                  name: "--stack",
                  description:
                    "Filter by stack, as <project>/<stack> (repeatable)",
                  isRepeatable: true,
                  args: { name: "stack-name", generators: stacksGenerator },
                },
                {
                  name: "--status",
                  description:
                    "Filter by status (repeatable). One of: open, in_progress, by_design, fixed, ignored",
                  isRepeatable: true,
                  args: {
                    name: "status",
                    suggestions: [
                      "open",
                      "in_progress",
                      "by_design",
                      "fixed",
                      "ignored",
                    ],
                  },
                },
                {
                  name: "--urn",
                  description: "Filter by resource URN (repeatable)",
                  isRepeatable: true,
                  args: { name: "urn" },
                },
              ],
            },
            {
              name: "get",
              description:
                "[EXPERIMENTAL] Get the details of a specific policy issue",
              args: { name: "issue-id" },
              options: [
                {
                  name: "--org",
                  description: "The organization that owns the issue",
                  args: { name: "org" },
                },
                outputOption,
              ],
            },
            {
              name: ["list", "ls"],
              description:
                "[EXPERIMENTAL] List policy issues for an organization",
              options: [
                {
                  name: "--account",
                  description:
                    "Filter by Insights account, as [<project>/]<account> (repeatable)",
                  isRepeatable: true,
                  args: { name: "account" },
                },
                {
                  name: "--all",
                  description:
                    "Return all matching issues; mutually exclusive with --count",
                },
                {
                  name: "--assigned-to",
                  description: "Filter by assignee login (repeatable)",
                  isRepeatable: true,
                  args: { name: "assigned-to" },
                },
                {
                  name: "--closed",
                  description: "List closed issues instead of active ones",
                },
                {
                  name: "--count",
                  description: "Maximum number of issues to return",
                  args: { name: "int", default: "100" },
                },
                {
                  name: "--group",
                  description: "Filter by policy group (repeatable)",
                  isRepeatable: true,
                  args: { name: "group" },
                },
                {
                  name: "--org",
                  description: "The organization to list policy issues for",
                  args: { name: "org" },
                },
                outputOption,
                {
                  name: "--pack",
                  description: "Filter by policy pack (repeatable)",
                  isRepeatable: true,
                  args: { name: "pack" },
                },
                {
                  name: "--policy",
                  description: "Filter by policy name (repeatable)",
                  isRepeatable: true,
                  args: { name: "policy" },
                },
                {
                  name: "--priority",
                  description:
                    "Filter by priority (repeatable). One of: p0, p1, p2, p3, p4",
                  isRepeatable: true,
                  args: { name: "priority" },
                },
                {
                  name: "--resource-type",
                  description: "Filter by resource type (repeatable)",
                  isRepeatable: true,
                  args: { name: "resource-type" },
                },
                {
                  name: "--severity",
                  description:
                    "Filter by severity (repeatable). One of: low, medium, high, critical",
                  isRepeatable: true,
                  args: { name: "severity" },
                },
                {
                  name: "--sort",
                  description:
                    "Sort by <field>[:asc|desc], default asc (repeatable). Fields: severity, priority, status, observedAt, lastModified, policyPack, policyName, policyGroupName, resourceType",
                  isRepeatable: true,
                  args: { name: "sort" },
                },
                {
                  name: "--stack",
                  description:
                    "Filter by stack, as <project>/<stack> (repeatable)",
                  isRepeatable: true,
                  args: { name: "stack-name", generators: stacksGenerator },
                },
                {
                  name: "--status",
                  description:
                    "Filter by status (repeatable). One of: open, in_progress, by_design, fixed, ignored",
                  isRepeatable: true,
                  args: { name: "status" },
                },
                {
                  name: "--urn",
                  description: "Filter by resource URN (repeatable)",
                  isRepeatable: true,
                  args: { name: "urn" },
                },
              ],
            },
          ],
        },
        {
          name: ["list", "ls"],
          description: "List all Policy Packs for a Pulumi organization",
          args: orgNameArg,
          options: [outputOption, jsonOption],
        },
        {
          name: ["new", "create", "setup"],
          description: "Create a new Pulumi Policy Pack",
          args: templateUrlArg,
          options: [
            {
              name: "--dir",
              description:
                "The location to place the generated Policy Pack; if not specified, the current directory is used",
              args: { name: "dir", template: "folders" },
            },
            forceOption,
            {
              name: ["-g", "--generate-only"],
              description:
                "Generate the Policy Pack only; do not install dependencies",
            },
            offlineOption,
            runtimeOptionsOption,
          ],
        },
        {
          name: "publish",
          description: "Publish a Policy Pack to the Pulumi Cloud",
          args: orgNameArg,
          options: [outputOption],
        },
        {
          name: ["remove", "delete", "rm"],
          description: "Removes a Policy Pack from a Pulumi organization",
          args: [orgNamePolicyPackNameArg, { name: "all|version" }],
          options: [outputOption, yesOption3],
        },
        {
          name: "validate-config",
          description: "Validate a Policy Pack configuration",
          args: [orgNamePolicyPackNameArg, { name: "version" }],
          options: [
            {
              name: "--config",
              description:
                "The file path for the Policy Pack configuration file",
              args: { name: "file", template: "filepaths" },
            },
            outputOption,
          ],
        },
      ],
    },
    {
      name: ["preview", "pre"],
      description: "Show a preview of updates to a stack's resources",
      args: urlArg,
      options: [
        attachDebuggerOption,
        {
          name: ["-c", "--config"],
          description:
            "Config to use during the preview and save to the stack config file",
          isRepeatable: true,
          args: { name: "key=value" },
        },
        configFileOption,
        configPathOption,
        debugOption,
        diffOption,
        {
          name: ["-x", "--exclude"],
          description:
            "Specify a resource URN to ignore. These resources will not be updated. Multiple resources can be specified using --exclude urn1 --exclude urn2. Wildcards (*, **) are also supported",
          isRepeatable: true,
          args: { name: "urn" },
        },
        {
          name: "--exclude-dependents",
          description:
            "Allow ignoring of dependent targets discovered but not specified in --exclude list",
        },
        {
          name: "--expect-no-changes",
          description:
            "Return an error if any changes are proposed by this preview",
        },
        {
          name: "--ignore-protect",
          description:
            "Ignore the protect resource option for this operation, previewing the deletion or replacement of protected resources instead of failing",
        },
        {
          name: "--import-file",
          description:
            "Save any creates seen during the preview into an import file to use with 'pulumi import'",
          args: { name: "file", template: "filepaths" },
        },
        {
          name: ["-j", "--json"],
          description:
            "Serialize the preview diffs, operations, and overall output as JSON. Set PULUMI_ENABLE_STREAMING_JSON_PREVIEW to stream JSON events instead",
        },
        {
          name: ["-m", "--message"],
          description:
            "Optional message to associate with the preview operation",
          args: { name: "message" },
        },
        neoOption,
        neoTaskOnFailureOption,
        overrideEnvOption,
        parallelOption,
        policyPackOption,
        policyPackConfigOption,
        refreshOption,
        ...remoteOptions,
        {
          name: "--replace",
          description:
            "Specify resources to replace. Multiple resources can be specified using --replace urn1 --replace urn2",
          isRepeatable: true,
          args: { name: "replace" },
        },
        runProgramOption,
        {
          name: "--save-plan",
          description:
            "[PREVIEW] Save the operations proposed by the preview to a plan file at the given path",
          args: { name: "save-plan" },
        },
        ...showOptions,
        {
          name: "--show-sames",
          description:
            "Show resources that needn't be updated because they haven't changed, alongside those that do",
        },
        {
          name: "--show-secrets",
          description:
            "Show secrets in plaintext in the CLI output, if used with --save-plan the secrets will also be shown in the plan file. Defaults to false",
        },
        skipConfigValidationOption,
        skipPluginPreInstallOption,
        ...optionGroup,
        {
          name: ["-t", "--target"],
          description:
            "Specify a single resource URN to update. Other resources will not be updated. Multiple resources can be specified using --target urn1 --target urn2",
          isRepeatable: true,
          args: { name: "urn" },
        },
        {
          name: "--target-dependents",
          description:
            "Allow updating of dependent targets discovered but not specified in --target list",
        },
        targetReplaceOption,
        urnsOption,
        copilotOption,
      ],
    },
    {
      name: "project",
      description: "Manage Pulumi projects",
      subcommands: [
        {
          name: ["list", "ls"],
          description: "List your Pulumi projects",
          options: [
            {
              name: ["-o", "--organization"],
              description: "The organization whose projects to list",
              args: { name: "organization" },
            },
            outputOption,
            jsonOption,
          ],
        },
        {
          name: ["new", "create", "setup"],
          description: "Create a new Pulumi project",
          args: templateUrlArg,
          options: [
            {
              name: ["-c", "--config"],
              description: "Config to save",
              isRepeatable: true,
              args: { name: "key=value" },
            },
            configPathOption,
            {
              name: ["-d", "--description"],
              description:
                "The project description; if not specified, a prompt will request it",
              args: { name: "description" },
            },
            {
              name: "--dir",
              description:
                "The location to place the generated project; if not specified, the current directory is used",
              args: { name: "dir", template: "folders" },
            },
            escConfigOption,
            forceOption,
            {
              name: ["-g", "--generate-only"],
              description:
                "Generate the project only; do not create a stack, save config, or install dependencies",
            },
            {
              name: ["-l", "--list-templates"],
              description: "List locally installed templates and exit",
            },
            {
              name: ["-n", "--name"],
              description:
                "The project name; if not specified, a prompt will request it",
              args: { name: "name" },
            },
            offlineOption,
            runtimeOptionsOption,
            secretsProviderOption,
            {
              name: ["-s", "--stack"],
              description:
                "The stack name; either an existing stack or stack to create; if not specified, a prompt will request it",
              args: { name: "stack-name", generators: stacksGenerator },
            },
            yesOption2,
          ],
        },
      ],
    },
    {
      name: "refresh",
      description: "Refresh the resources in a stack",
      args: urlArg,
      options: [
        {
          name: "--clear-pending-creates",
          description:
            "Clear all pending creates, dropping them from the state",
        },
        {
          name: ["-c", "--config"],
          description:
            "Config to use during the refresh and save to the stack config file",
          isRepeatable: true,
          args: { name: "key=value" },
        },
        configFileOption,
        configPathOption,
        debugOption,
        diffOption,
        {
          name: ["-x", "--exclude"],
          description:
            "Specify a resource URN to ignore. These resources will not be refreshed. Multiple resources can be specified using --exclude urn1 --exclude urn2. Wildcards (*, **) are also supported",
          isRepeatable: true,
          args: { name: "urn" },
        },
        excludeDependentsOption,
        {
          name: "--expect-no-changes",
          description:
            "Return an error if any changes occur during this refresh. This check happens after the refresh is applied",
        },
        {
          name: "--import-pending-creates",
          description:
            "A list of form [[URN ID]...] describing the provider IDs of pending creates",
          isRepeatable: true,
          args: { name: "import-pending-creates" },
        },
        {
          name: ["-j", "--json"],
          description:
            "Serialize the refresh diffs, operations, and overall output as JSON",
        },
        messageOption,
        neoOption,
        overrideEnvOption,
        parallelOption,
        {
          name: "--preview-only",
          description:
            "Only show a preview of the refresh, but don't perform the refresh itself",
        },
        ...remoteOptions,
        {
          name: "--run-program",
          description:
            "Run the program to determine up-to-date state for providers to refresh resources",
        },
        showReplacementStepsOption,
        {
          name: "--show-sames",
          description:
            "Show resources that needn't be updated because they haven't changed, alongside those that do",
        },
        {
          name: "--skip-config-validation",
          description:
            "Skip validation of stack config values against the project config schema. Config validation is skipped automatically when --run-program is not set",
        },
        {
          name: "--skip-pending-creates",
          description: "Skip importing pending creates in interactive mode",
        },
        skipPluginPreInstallOption,
        {
          name: ["-f", "--skip-preview"],
          description:
            "Do not calculate a preview before performing the refresh",
        },
        ...optionGroup,
        {
          name: ["-t", "--target"],
          description:
            "Specify a single resource URN to refresh. Multiple resource can be specified using: --target urn1 --target urn2",
          isRepeatable: true,
          args: { name: "urn" },
        },
        targetDependentsOption,
        urnsOption,
        {
          name: ["-y", "--yes"],
          description:
            "Automatically approve and perform the refresh after previewing it",
          isDangerous: true,
        },
        copilotOption,
      ],
    },
    {
      name: "schema",
      description: "Analyze package schemas",
      subcommands: [
        {
          name: "check",
          description: "Check a Pulumi package schema for errors",
          args: [schemaSourceArg, providerParameterArg],
          options: [
            {
              name: "--allow-dangling-references",
              description:
                "Whether references to nonexistent types should be considered errors",
            },
            extensionOption,
            {
              name: "--server",
              description:
                "A URL to download the plugin from. When set, the schema source is used as the plugin name directly and no package resolution is performed",
              args: { name: "server" },
            },
          ],
        },
      ],
    },
    {
      name: "stack",
      description: "Manage stacks and view stack state",
      options: [
        outputOption,
        {
          name: ["-i", "--show-ids"],
          description: "Display each resource's provider-assigned unique ID",
        },
        { name: "--show-name", description: "Display only the stack name" },
        {
          name: "--show-secrets",
          description:
            "Display stack outputs which are marked as secret in plaintext",
        },
        {
          name: ["-u", "--show-urns"],
          description:
            "Display each resource's Pulumi-assigned globally unique URN",
        },
        stackOption2,
      ],
      subcommands: [
        {
          name: "change-secrets-provider",
          description: "Change the secrets provider for a stack",
          args: { name: "new-secrets-provider" },
          options: [stackOption],
        },
        {
          name: "drift",
          description: "[EXPERIMENTAL] Inspect stack drift detection results",
          subcommands: [
            {
              name: ["list", "ls"],
              description:
                "[EXPERIMENTAL] List drift detection runs for a stack",
              options: [
                {
                  name: "--all",
                  description:
                    "Fetch all results (mutually exclusive with --count)",
                },
                {
                  name: "--count",
                  description:
                    "Number of results to display (fetches multiple pages if needed)",
                  args: { name: "int" },
                },
                outputOption,
                stackOption,
              ],
            },
            {
              name: "status",
              description:
                "[EXPERIMENTAL] Show the current drift detection status for a stack",
              options: [outputOption, stackOption],
            },
          ],
        },
        {
          name: "export",
          description: "Export a stack's deployment to standard out",
          options: [
            {
              name: "--file",
              description: "A filename to write stack output to",
              args: { name: "file", template: "filepaths" },
            },
            {
              name: "--show-secrets",
              description:
                "Emit secrets in plaintext in exported stack. Defaults to false",
            },
            stackOption,
            {
              name: "--version",
              description:
                "Previous stack version to export. (If unset, will export the latest.)",
              args: { name: "version" },
            },
          ],
        },
        {
          name: "get",
          description:
            "[EXPERIMENTAL] Retrieve detailed information about a stack",
          options: [
            outputOption,
            {
              name: ["-i", "--show-ids"],
              description:
                "Display each resource's provider-assigned unique ID",
            },
            { name: "--show-name", description: "Display only the stack name" },
            {
              name: "--show-secrets",
              description:
                "Display stack outputs which are marked as secret in plaintext",
            },
            {
              name: ["-u", "--show-urns"],
              description:
                "Display each resource's Pulumi-assigned globally unique URN",
            },
            stackOption,
          ],
        },
        {
          name: "graph",
          description: "Export a stack's dependency graph to a file",
          args: { name: "filename", template: "filepaths" },
          options: [
            {
              name: "--dependency-edge-color",
              description: "Sets the color of dependency edges in the graph",
              args: { name: "dependency-edge-color", default: "#246C60" },
            },
            {
              name: "--dot-fragment",
              description:
                "An optional DOT fragment that will be inserted at the top of the digraph element. This can be used for styling the graph elements, setting graph properties etc",
              args: { name: "dot-fragment" },
            },
            {
              name: "--ignore-dependency-edges",
              description:
                "Ignores edges introduced by dependency resource relationships",
            },
            {
              name: "--ignore-parent-edges",
              description:
                "Ignores edges introduced by parent/child resource relationships",
            },
            {
              name: "--parent-edge-color",
              description: "Sets the color of parent edges in the graph",
              args: { name: "parent-edge-color", default: "#AA6639" },
            },
            {
              name: "--short-node-name",
              description:
                "Sets the resource name as the node label for each node of the graph",
            },
            stackOption,
          ],
        },
        {
          name: ["history", "hist"],
          description: "Display history for a stack",
          options: [
            {
              name: "--full-dates",
              description: "Show full dates, instead of relative dates",
            },
            outputOption,
            {
              name: "--page",
              description: "Used with 'page-size' to paginate results",
              args: { name: "int", default: "1" },
            },
            {
              name: "--page-size",
              description:
                "Used with 'page' to control number of results returned",
              args: { name: "int", default: "10" },
            },
            {
              name: "--show-secrets",
              description:
                "Show secret values when listing config instead of displaying blinded values",
            },
            {
              name: ["-s", "--stack"],
              description:
                "Choose a stack other than the currently selected one",
              args: { name: "stack-name", generators: stacksGenerator },
            },
            jsonOption,
          ],
          subcommands: [
            {
              name: "events",
              description:
                "[EXPERIMENTAL] Retrieve engine events for an update",
              args: { name: "update-id" },
              options: [
                {
                  name: "--all",
                  description: "Return every event for the update",
                },
                {
                  name: "--count",
                  description:
                    "Return at least this many events, fetching additional pages as needed",
                  args: { name: "int" },
                },
                {
                  name: "--event-type",
                  description:
                    "Filter by Pulumi Cloud engine event type code; numeric, repeatable",
                  isRepeatable: true,
                  args: { name: "event-type" },
                },
                {
                  name: "--include-non-activated",
                  description: "Include events not yet marked as activated",
                },
                outputOption,
                stackOption,
                {
                  name: "--summary",
                  description:
                    "Reduce the update's events to a single summary document with error diagnostics; implies --all",
                },
                {
                  name: "--urn",
                  description: "Filter by resource URN",
                  args: { name: "urn" },
                },
              ],
            },
          ],
        },
        {
          name: "import",
          description:
            "Import a deployment from standard in into an existing stack",
          options: [
            {
              name: "--file",
              description: "A filename to read stack input from",
              args: { name: "file", template: "filepaths" },
            },
            {
              name: ["-f", "--force"],
              description:
                "Force the import to occur, even if apparent errors are discovered beforehand (not recommended)",
              isDangerous: true,
            },
            stackOption,
          ],
        },
        {
          name: ["list", "ls"],
          description: "List stacks",
          options: [
            {
              name: ["-a", "--all"],
              description:
                "List all stacks instead of just stacks for the current project",
            },
            {
              name: ["-o", "--organization"],
              description:
                "Filter returned stacks to those in a specific organization",
              args: { name: "organization" },
            },
            outputOption,
            {
              name: ["-p", "--project"],
              description:
                "Filter returned stacks to those with a specific project name",
              args: { name: "project" },
            },
            {
              name: ["-t", "--tag"],
              description:
                "Filter returned stacks to those in a specific tag (tag-name or tag-name=tag-value)",
              args: { name: "tag" },
            },
            jsonOption,
          ],
        },
        {
          name: "migrate",
          description:
            "Migrate a stack from another backend to the currently logged-in backend",
          args: [{ name: "url" }, stackNameArg],
          options: [
            {
              name: ["-f", "--force"],
              description:
                "Force the migration to proceed even if the source state fails integrity checks",
              isDangerous: true,
            },
            secretsProviderOption,
            {
              name: "--target",
              description:
                "The name of the stack to create in the target backend. Defaults to the source stack name. For Pulumi Cloud, may be qualified as <org>/<project>/<stack>",
              args: { name: "stack" },
            },
            {
              name: ["-y", "--yes"],
              description: "Skip confirmation prompts and proceed",
              isDangerous: true,
            },
          ],
        },
        {
          name: ["new", "create", "init", "setup"],
          description:
            "Create an empty stack with the given name, ready for updates",
          args: { name: "stack-name", description: "[org-name/]stack-name" },
          options: [
            {
              name: "--copy-config-from",
              description: "The name of the stack to copy existing config from",
              args: { name: "stack-name", generators: stacksGenerator },
            },
            escConfigOption,
            { name: "--no-select", description: "Do not select the stack" },
            {
              name: "--secrets-provider",
              description:
                "The type of the provider that should be used to encrypt and decrypt secrets (possible choices: default, passphrase, awskms, azurekeyvault, gcpkms, hashivault)",
              args: {
                name: "secrets-provider",
                suggestions: [
                  "default",
                  "passphrase",
                  "awskms",
                  "azurekeyvault",
                  "gcpkms",
                  "hashivault",
                ],
              },
            },
            {
              name: ["-s", "--stack"],
              description: "The name of the stack to create",
              args: { name: "stack-name", generators: stacksGenerator },
            },
            {
              name: "--teams",
              description:
                "A list of team names that should have permission to read and update this stack, once created",
              isRepeatable: true,
              args: { name: "teams" },
            },
            {
              name: ["-y", "--yes"],
              description:
                "Skip interactive prompts; fail if required information is missing",
              isDangerous: true,
            },
          ],
        },
        {
          name: "output",
          description: "Show a stack's output properties",
          args: { name: "property-name", isOptional: true },
          options: [
            jsonOption2,
            { name: "--shell", description: "Emit output as a shell script" },
            {
              name: "--show-secrets",
              description:
                "Display outputs which are marked as secret in plaintext",
            },
            stackOption,
          ],
        },
        {
          name: "policy",
          description:
            "[EXPERIMENTAL] Inspect the policies that apply to a stack",
          subcommands: [
            {
              name: ["list", "ls"],
              description:
                "[EXPERIMENTAL] List the Policy Groups and Policy Packs that apply to a stack",
              options: [outputOption, stackOption],
            },
          ],
        },
        {
          name: ["remove", "delete", "rm"],
          description: "Remove a stack and its configuration",
          args: stackNameArg,
          options: [
            {
              name: ["-f", "--force"],
              description:
                "Forces deletion of the stack, leaving behind any resources managed by the stack",
              isDangerous: true,
            },
            {
              name: "--preserve-config",
              description:
                "Do not delete the corresponding Pulumi.<stack-name>.yaml configuration file for the stack",
            },
            {
              name: "--remove-backups",
              description:
                "Additionally remove backups of the stack, if using the DIY backend",
            },
            stackOption,
            yesOption3,
          ],
        },
        {
          name: "rename",
          description: "Rename an existing stack",
          args: { name: "new-stack-name" },
          options: [stackOption],
        },
        {
          name: "schedule",
          description:
            "[EXPERIMENTAL] Manage scheduled deployment actions for a stack",
          subcommands: [
            {
              name: ["edit", "modify", "update"],
              description:
                "[EXPERIMENTAL] Update the configuration of a scheduled deployment action",
              args: scheduleIdArg,
              options: [
                {
                  name: "--auto-remediate",
                  description:
                    "(drift only) Automatically run a remediation update when drift is detected",
                },
                {
                  name: "--cron",
                  description:
                    "Cron expression for recurring executions, evaluated in UTC (raw and drift)",
                  args: { name: "cron" },
                },
                {
                  name: "--delete-after-destroy",
                  description:
                    "(ttl only) Delete the stack from Pulumi Cloud after successfully destroying its resources",
                },
                {
                  name: "--once",
                  description:
                    "ISO 8601 timestamp for a one-time execution (raw and ttl)",
                  args: { name: "once" },
                },
                {
                  name: "--operation",
                  description:
                    "(raw only) Pulumi operation to run. One of: update, preview, refresh, destroy",
                  args: {
                    name: "operation",
                    suggestions: ["update", "preview", "refresh", "destroy"],
                  },
                },
                outputOption,
                stackOption,
              ],
            },
            {
              name: "get",
              description:
                "[EXPERIMENTAL] Retrieve the configuration of a stack schedule",
              args: scheduleIdArg,
              options: [outputOption, stackOption],
            },
            {
              name: ["list", "ls"],
              description:
                "[EXPERIMENTAL] List all scheduled actions configured for a stack",
              options: [
                {
                  name: "--count",
                  description:
                    "Show only the first N schedules. 0 (the default) shows all",
                  args: { name: "int" },
                },
                outputOption,
                stackOption,
              ],
            },
            {
              name: ["new", "create", "setup"],
              description:
                "[EXPERIMENTAL] Create a scheduled deployment action for a stack",
              options: [
                {
                  name: "--auto-remediate",
                  description:
                    "(drift only) Automatically run a remediation update when drift is detected",
                },
                {
                  name: "--cron",
                  description:
                    "Cron expression for recurring executions, evaluated in UTC (e.g. '0 */4 * * *')",
                  args: { name: "cron" },
                },
                {
                  name: "--delete-after-destroy",
                  description:
                    "(ttl only) Delete the stack from Pulumi Cloud after successfully destroying its resources",
                },
                {
                  name: "--kind",
                  description:
                    "Schedule kind (required). One of: raw, drift, ttl",
                  args: { name: "kind", suggestions: ["raw", "drift", "ttl"] },
                },
                {
                  name: "--once",
                  description:
                    "ISO 8601 timestamp for a one-time execution (e.g. '2026-12-31T23:59:00Z')",
                  args: { name: "once" },
                },
                {
                  name: "--operation",
                  description:
                    "(raw only) Pulumi operation to run. One of: update, preview, refresh, destroy",
                  args: { name: "operation" },
                },
                outputOption,
                stackOption,
                {
                  name: ["-y", "--yes"],
                  description:
                    "Skip prompts; fail if any required value is missing",
                  isDangerous: true,
                },
              ],
            },
            {
              name: ["remove", "delete", "rm"],
              description:
                "[EXPERIMENTAL] Delete a scheduled deployment action",
              args: scheduleIdArg,
              options: [stackOption, yesOption],
            },
          ],
        },
        {
          name: "select",
          description: "Switch the current workspace to the given stack",
          args: {
            name: "stack",
            isOptional: true,
            generators: stacksGenerator,
          },
          options: [
            {
              name: ["-c", "--create"],
              description: "If selected stack does not exist, create it",
            },
            {
              name: "--secrets-provider",
              description:
                "Use with --create flag, The type of the provider that should be used to encrypt and decrypt secrets (possible choices: default, passphrase, awskms, azurekeyvault, gcpkms, hashivault)",
              args: {
                name: "secrets-provider",
                default: "default",
                suggestions: [
                  "default",
                  "passphrase",
                  "awskms",
                  "azurekeyvault",
                  "gcpkms",
                  "hashivault",
                ],
              },
            },
            {
              name: ["-s", "--stack"],
              description: "The name of the stack to select",
              args: { name: "stack-name", generators: stacksGenerator },
            },
          ],
        },
        {
          name: "tag",
          description: "Manage stack tags",
          options: [stackOption2],
          subcommands: [
            {
              name: "get",
              description: "Get a single stack tag value",
              args: nameArg,
            },
            {
              name: ["list", "ls"],
              description: "List all stack tags",
              options: [outputOption, jsonOption],
            },
            {
              name: ["remove", "delete", "rm"],
              description: "Remove a stack tag",
              args: nameArg,
            },
            {
              name: "set",
              description: "Set a stack tag",
              args: [nameArg, valueArg],
            },
          ],
        },
        {
          name: "unselect",
          description: "Resets stack selection from the current workspace",
        },
        {
          name: "webhook",
          description: "[EXPERIMENTAL] Manage stack webhooks",
          subcommands: [
            {
              name: "delivery",
              description: "[EXPERIMENTAL] Inspect stack webhook deliveries",
              subcommands: [
                {
                  name: ["list", "ls"],
                  description:
                    "[EXPERIMENTAL] List recent deliveries for a stack webhook",
                  args: idArg,
                  options: [
                    {
                      name: "--count",
                      description:
                        "Number of deliveries to display (default: all)",
                      args: { name: "int" },
                    },
                    outputOption,
                    stackOption,
                  ],
                },
                {
                  name: "redeliver",
                  description:
                    "[EXPERIMENTAL] Redeliver a specific webhook event",
                  args: [idArg, { name: "event-id" }],
                  options: [outputOption, stackOption],
                },
              ],
            },
            {
              name: ["edit", "modify", "update"],
              description:
                "[EXPERIMENTAL] Update a stack webhook's configuration",
              args: idArg,
              options: [
                activeOption,
                {
                  name: "--add-event",
                  description: "An event type to add (repeatable)",
                  isRepeatable: true,
                  args: { name: "add-event" },
                },
                {
                  name: "--add-group",
                  description: "An event group to add (repeatable)",
                  isRepeatable: true,
                  args: { name: "add-group" },
                },
                {
                  name: "--display-name",
                  description: "The webhook display name",
                  args: { name: "display-name" },
                },
                {
                  name: "--hook-format",
                  description:
                    "The webhook format: raw, slack, ms_teams, or pulumi_deployments",
                  args: {
                    name: "hook-format",
                    suggestions: [
                      "raw",
                      "slack",
                      "ms_teams",
                      "pulumi_deployments",
                    ],
                  },
                },
                outputOption,
                {
                  name: "--remove-event",
                  description: "An event type to remove (repeatable)",
                  isRepeatable: true,
                  args: { name: "remove-event" },
                },
                {
                  name: "--remove-group",
                  description: "An event group to remove (repeatable)",
                  isRepeatable: true,
                  args: { name: "remove-group" },
                },
                {
                  name: "--secret",
                  description:
                    "The HMAC key for signature verification (empty string removes the secret)",
                  args: { name: "secret" },
                },
                stackOption,
                {
                  name: "--url",
                  description: "The webhook payload URL",
                  args: { name: "url" },
                },
              ],
            },
            {
              name: "get",
              description: "[EXPERIMENTAL] Get the details of a stack webhook",
              args: idArg,
              options: [outputOption, stackOption],
            },
            {
              name: ["list", "ls"],
              description:
                "[EXPERIMENTAL] List all webhooks configured for a stack",
              options: [outputOption, stackOption],
            },
            {
              name: ["new", "create", "setup"],
              description: "[EXPERIMENTAL] Create a new stack webhook",
              options: [
                activeOption,
                {
                  name: "--event",
                  description: "An event type to subscribe to (repeatable)",
                  isRepeatable: true,
                  args: { name: "event" },
                },
                {
                  name: "--group",
                  description: "An event group to subscribe to (repeatable)",
                  isRepeatable: true,
                  args: { name: "group" },
                },
                {
                  name: "--hook-format",
                  description:
                    "The webhook format: raw, slack, ms_teams, or pulumi_deployments",
                  args: {
                    name: "hook-format",
                    default: "raw",
                    suggestions: [
                      "raw",
                      "slack",
                      "ms_teams",
                      "pulumi_deployments",
                    ],
                  },
                },
                {
                  name: "--name",
                  description: "The webhook name (required)",
                  args: { name: "name" },
                },
                outputOption,
                {
                  name: "--secret",
                  description: "The HMAC key for signature verification",
                  args: { name: "secret" },
                },
                stackOption,
                {
                  name: "--url",
                  description:
                    "The webhook payload URL, including protocol (e.g. https://example.com/hook)",
                  args: { name: "url" },
                },
                yesOption2,
              ],
            },
            {
              name: "ping",
              description: "[EXPERIMENTAL] Send a test ping to a stack webhook",
              args: idArg,
              options: [outputOption, stackOption],
            },
            {
              name: ["remove", "delete", "rm"],
              description: "[EXPERIMENTAL] Delete a stack webhook",
              args: idArg,
              options: [stackOption, yesOption],
            },
          ],
        },
      ],
    },
    {
      name: "state",
      description: "Edit the current stack's state",
      icon,
      subcommands: [
        {
          name: ["edit", "modify", "update"],
          description: "Edit the current stack's state in your EDITOR",
          hidden: true,
          options: [
            {
              name: "--stack",
              description:
                "The name of the stack to operate on. Defaults to the current stack",
              args: { name: "stack-name", generators: stacksGenerator },
            },
          ],
        },
        {
          name: "get",
          description: "Show a resource's state",
          args: { name: "resource", isOptional: true },
          options: [
            outputOption,
            {
              name: "--show-secrets",
              description:
                "Show secret values in plaintext instead of [secret]",
            },
            stackOption,
          ],
        },
        {
          name: ["move", "mv"],
          description: "Move resources from one stack to another",
          args: { name: "urn", isVariadic: true },
          options: [
            {
              name: "--dest",
              description: "The name of the stack to move resources to",
              args: { name: "stack-name", generators: stacksGenerator },
            },
            {
              name: "--include-parents",
              description:
                "Include all the parents of the moved resources as well",
            },
            {
              name: "--parent",
              description:
                "URN of a resource in the destination stack to parent moved resources under. Mutually exclusive with --include-parents",
              args: { name: "parent" },
            },
            {
              name: "--source",
              description: "The name of the stack to move resources from",
              args: { name: "stack-name", generators: stacksGenerator },
            },
            {
              name: ["-y", "--yes"],
              description: "Automatically approve and perform the move",
              isDangerous: true,
            },
          ],
        },
        {
          name: "promote",
          description: "Promote a snippet from state into Pulumi program code",
          args: { name: "snippet-name" },
          options: [stackOption, yesOption],
        },
        {
          name: "protect",
          description: "Protect resource in a stack's state",
          args: resourceUrnArg,
          options: [
            {
              name: "--all",
              description: "Protect all resources in the checkpoint",
            },
            stackOption,
            yesOption,
          ],
        },
        {
          name: ["remove", "delete", "rm"],
          description: "Deletes one or more resources from a stack's state",
          args: resourceUrnArg,
          options: [
            { name: "--all", description: "Delete all resources in the stack" },
            {
              name: "--force",
              description: "Force deletion of protected resources",
              isDangerous: true,
            },
            stackOption,
            {
              name: "--target-dependents",
              description: "Delete the URN and all its dependents",
            },
            yesOption,
          ],
        },
        {
          name: "rename",
          description: "Renames a resource from a stack's state",
          args: [
            { name: "resource-urn", isOptional: true },
            { name: "new-name", isOptional: true },
          ],
          options: [stackOption, yesOption],
        },
        {
          name: "repair",
          description: "Repair an invalid state",
          options: [
            stackOption,
            {
              name: ["-y", "--yes"],
              description: "Automatically approve and perform the repair",
              isDangerous: true,
            },
          ],
        },
        {
          name: "taint",
          description: "Taint one or more resources in the stack's state",
          args: resourceUrnArg,
          options: [stackOption, yesOption],
        },
        {
          name: "unprotect",
          description: "Unprotect resources in a stack's state",
          args: resourceUrnArg,
          options: [
            {
              name: "--all",
              description: "Unprotect all resources in the checkpoint",
            },
            stackOption,
            yesOption,
          ],
        },
        {
          name: "untaint",
          description: "Untaint one or more resources in the stack's state",
          args: resourceUrnArg,
          options: [
            {
              name: "--all",
              description: "Untaint all resources in the checkpoint",
            },
            stackOption,
            yesOption,
          ],
        },
        {
          name: "upgrade",
          description:
            "Migrates the current backend to the latest supported version",
          options: [
            {
              name: ["-y", "--yes"],
              description: "Automatically approve and perform the upgrade",
              isDangerous: true,
            },
          ],
        },
      ],
    },
    {
      name: "template",
      description: "Work with Pulumi templates",
      subcommands: [
        {
          name: ["list", "ls"],
          description: "[EXPERIMENTAL] List registry-backed templates",
          options: [
            {
              name: "--name",
              description:
                "Filter to templates whose name matches the given value",
              args: { name: "name" },
            },
            {
              name: "--org",
              description:
                "Filter to templates owned by the given organization",
              args: { name: "org" },
            },
            outputOption,
            {
              name: "--search",
              description:
                "Free-text search across name, display name, description, metadata values, and runtime",
              args: { name: "search" },
            },
          ],
        },
        {
          name: "publish",
          description: "Publish a template to the Private Registry",
          args: { name: "directory", template: "folders" },
          options: [
            {
              name: "--name",
              description: "The name of the template (required)",
              args: { name: "name" },
            },
            {
              name: "--publisher",
              description:
                "The publisher of the template (e.g., 'pulumi'). Defaults to the default organization in your pulumi config",
              args: { name: "publisher" },
            },
            {
              name: "--version",
              description:
                "The version of the template (required, semver format)",
              args: { name: "version" },
            },
          ],
        },
      ],
    },
    {
      name: ["up", "update"],
      description: "Create or update the resources in a stack",
      args: templateUrlArg,
      options: [
        attachDebuggerOption,
        {
          name: ["-c", "--config"],
          description:
            "Config to use during the update and save to the stack config file",
          isRepeatable: true,
          args: { name: "key=value" },
        },
        configFileOption,
        configPathOption,
        {
          name: "--continue-on-error",
          description:
            "Continue updating resources even if an error is encountered (can also be set with PULUMI_CONTINUE_ON_ERROR environment variable)",
        },
        debugOption,
        diffOption,
        {
          name: "--exclude",
          description:
            "Specify a resource URN to ignore. These resources will not be updated. Multiple resources can be specified using --exclude urn1 --exclude urn2. Wildcards (*, **) are also supported",
          isRepeatable: true,
          args: { name: "urn" },
        },
        excludeDependentsOption,
        {
          name: "--expect-no-changes",
          description:
            "Return an error if any changes occur during this update. This check happens after the update is applied",
        },
        {
          name: "--ignore-protect",
          description:
            "Ignore the protect resource option for this operation, allowing protected resources to be deleted or replaced. Use with caution: deleted resources cannot be recovered",
        },
        {
          name: ["-j", "--json"],
          description:
            "Serialize the update diffs, operations, and overall output as JSON",
        },
        messageOption,
        neoOption,
        neoTaskOnFailureOption,
        overrideEnvOption,
        parallelOption,
        {
          name: "--plan",
          description:
            "[EXPERIMENTAL] Path to a plan file to use for the update. The update will not perform operations that exceed its plan (e.g. replacements instead of updates, or updates instead of sames)",
          args: { name: "file", template: "filepaths" },
        },
        policyPackOption,
        policyPackConfigOption,
        refreshOption,
        ...remoteOptions,
        {
          name: "--replace",
          description:
            "Specify a single resource URN to replace. Multiple resources can be specified using --replace urn1 --replace urn2. Wildcards (*, **) are also supported",
          isRepeatable: true,
          args: { name: "urn" },
        },
        runProgramOption,
        {
          name: "--secrets-provider",
          description:
            "The type of the provider that should be used to encrypt and decrypt secrets (possible choices: default, passphrase, awskms, azurekeyvault, gcpkms, hashivault). Only used when creating a new stack from an existing template",
          args: {
            name: "secrets-provider",
            default: "default",
            suggestions: [
              "default",
              "passphrase",
              "awskms",
              "azurekeyvault",
              "gcpkms",
              "hashivault",
            ],
          },
        },
        ...showOptions,
        {
          name: "--show-sames",
          description:
            "Show resources that don't need be updated because they haven't changed, alongside those that do",
        },
        {
          name: "--show-secrets",
          description: "Show secret outputs in the CLI output",
        },
        skipConfigValidationOption,
        {
          name: "--skip-plugin-pre-install",
          description:
            "Skip the up-front provider plugin install step; missing plugins are installed lazily by the engine. When deploying from a template, also skips installing the project's runtime dependencies",
        },
        {
          name: ["-f", "--skip-preview"],
          description:
            "Do not calculate a preview before performing the update",
        },
        stackOption,
        {
          name: "--strict",
          description:
            "[EXPERIMENTAL] Enable strict plan behavior: generate a plan during preview and constrain the update to that plan (opt-in). Cannot be used with --skip-preview",
        },
        suppressOutputsOption,
        suppressPermalinkOption,
        suppressProgressOption,
        suppressStreamLogsOption,
        {
          name: ["-t", "--target"],
          description:
            "Specify a single resource URN to update. Other resources will not be updated. Multiple resources can be specified using --target urn1 --target urn2. Wildcards (*, **) are also supported",
          isRepeatable: true,
          args: { name: "urn" },
        },
        targetDependentsOption,
        targetReplaceOption,
        urnsOption,
        {
          name: ["-y", "--yes"],
          description:
            "Automatically approve and perform the update after previewing it",
          isDangerous: true,
        },
        copilotOption,
      ],
    },
    { name: "version", description: "Print Pulumi's version number" },
    {
      name: "whoami",
      description: "Display the current logged-in user",
      options: [
        outputOption,
        {
          name: ["-v", "--verbose"],
          description: "Print detailed whoami information",
        },
        jsonOption,
      ],
    },
  ],
};

export default completionSpec;
