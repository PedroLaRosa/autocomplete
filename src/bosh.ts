// BOSH CLI v7.11.3 (GitHub tag cloudfoundry/bosh-cli and Homebrew bosh-cli formula, 2026-11-20).
// Source: static read of cmd/opts/opts.go (go-flags definitions of every command and flag),
// cmd/opts/{var_flags,ops_flags}.go, cmd/completion/ and the ui/json_ui.go output shape at tag v7.11.3.
// The binary was not run (downloaded binaries are not executed in this sandbox).

const genericPathArg: Fig.Arg = {
  name: "PATH",
  template: "filepaths",
};

const deployments: Fig.Generator = {
  script: ["bosh", "--json", "deployments"],
  postProcess: function (out) {
    if (out.startsWith("fatal:")) {
      return [];
    }
    try {
      const parsedOutput = JSON.parse(out);
      return parsedOutput.Tables[0].Rows.map((deployment) => ({
        name: deployment.name,
        description: "Deployment",
      }));
    } catch (e) {
      return [];
    }
  },
};

// Reads the local config only (no director round trip)
const environments: Fig.Generator = {
  script: ["bosh", "--json", "environments"],
  postProcess: function (out) {
    try {
      const parsedOutput = JSON.parse(out);
      return parsedOutput.Tables[0].Rows.filter(
        (environment) => environment.alias
      ).map((environment) => ({
        name: environment.alias,
        description: environment.url,
      }));
    } catch (e) {
      return [];
    }
  },
};

const instanceSlugArg: Fig.Arg = {
  name: "INSTANCE-GROUP/INSTANCE-ID",
};

const allOrInstanceSlugArg: Fig.Arg = {
  name: "INSTANCE-GROUP[/INSTANCE-ID]",
  isOptional: true,
};

const manifestPathArg: Fig.Arg = {
  name: "PATH",
  description: "Path to a manifest file",
  template: "filepaths",
};

const cidArg: Fig.Arg = {
  name: "CID",
};

const configTypeSuggestions = ["cloud", "runtime", "cpi"];

// Shared flag groups (VarFlags, OpsFlags, GatewayFlags, ... in cmd/opts)
const varOptions: Fig.Option[] = [
  {
    name: ["-v", "--var"],
    description: "Set variable",
    isRepeatable: true,
    args: { name: "VAR=VALUE" },
  },
  {
    name: "--var-file",
    description: "Set variable to file contents",
    isRepeatable: true,
    args: { name: "VAR=PATH" },
  },
  {
    name: ["-l", "--vars-file"],
    description: "Load variables from a YAML file",
    isRepeatable: true,
    args: genericPathArg,
  },
  {
    name: "--vars-env",
    description:
      "Load variables from environment variables (e.g.: 'MY' to load MY_var=value)",
    isRepeatable: true,
    args: { name: "PREFIX" },
  },
  {
    name: "--vars-store",
    description: "Load/save variables from/to a YAML file",
    args: genericPathArg,
  },
];

const opsOptions: Fig.Option[] = [
  {
    name: ["-o", "--ops-file"],
    description: "Load manifest operations from a YAML file",
    isRepeatable: true,
    args: genericPathArg,
  },
];

const varAndOpsOptions: Fig.Option[] = [...varOptions, ...opsOptions];

const gatewayOptions: Fig.Option[] = [
  {
    name: "--gw-disable",
    description: "Disable usage of gateway connection [$BOSH_GW_DISABLE]",
  },
  {
    name: "--gw-user",
    description: "Username for gateway connection [$BOSH_GW_USER]",
    args: { name: "username" },
  },
  {
    name: "--gw-host",
    description: "Host for gateway connection [$BOSH_GW_HOST]",
    args: { name: "host" },
  },
  {
    name: "--gw-private-key",
    description:
      "Private key path for gateway connection [$BOSH_GW_PRIVATE_KEY]",
    args: genericPathArg,
  },
  {
    name: "--gw-socks5",
    description: "SOCKS5 URL [$BOSH_ALL_PROXY]",
    args: { name: "URL" },
  },
];

const createEnvAuthOptions: Fig.Option[] = [
  {
    name: "--director",
    description:
      "Target the command at the BOSH director (or other type of VM deployed via create-env)",
  },
  {
    name: "--agent-endpoint",
    description:
      "Address to connect to the agent's HTTPS endpoint (used with --director) [$BOSH_AGENT_ENDPOINT]",
    dependsOn: ["--director"],
    args: { name: "address" },
  },
  {
    name: "--agent-certificate",
    description:
      "CA certificate to validate the agent's HTTPS endpoint (used with --director) [$BOSH_AGENT_CERTIFICATE]",
    dependsOn: ["--director"],
    args: { name: "certificate" },
  },
];

const privateKeyOption: Fig.Option = {
  name: ["-i", "--private-key"],
  description: "SSH using authorized key",
  args: genericPathArg,
};

const usernameOption: Fig.Option = {
  name: ["-l", "--username"],
  description: "Login name for authorized key (default: vcap)",
  args: { name: "username", default: "vcap" },
};

const releaseDirOption: Fig.Option = {
  name: "--dir",
  description: "Release directory path if not current working directory",
  args: { name: "DIR", template: "folders" },
};

const skipDrainOption: Fig.Option = {
  name: "--skip-drain",
  description: "Skip running drain and pre-stop scripts",
};

const forceOption: Fig.Option = {
  name: "--force",
  description: "Ignore errors",
};

const noRedactOption: Fig.Option = {
  name: "--no-redact",
  description: "Show non-redacted manifest diff",
};

const statePathOption: Fig.Option = {
  name: "--state",
  description: "State file path",
  args: genericPathArg,
};

const packageDirOption: Fig.Option = {
  name: "--package-dir",
  description: "Package cache location override",
  args: { name: "DIR", template: "folders" },
};

const canariesOptions: Fig.Option[] = [
  {
    name: "--canaries",
    description: "Override manifest values for canaries",
    args: { name: "value" },
  },
  {
    name: "--max-in-flight",
    description: "Override manifest values for max_in_flight",
    args: { name: "value" },
  },
];

const convergeOptions: Fig.Option[] = [
  {
    name: "--converge",
    description:
      "Converge the deployment state before running action (default)",
  },
  {
    name: "--no-converge",
    description: "Act only on specified instance",
  },
];

const fixOption: Fig.Option = {
  name: "--fix",
  description:
    "Recreate an instance with an unresponsive agent instead of erroring",
};

const dryRunOption: Fig.Option = {
  name: "--dry-run",
  description: "Renders job templates without altering deployment",
};

const timestampArg: Fig.Arg = {
  name: "TIMESTAMP",
  description: "RFC 3339 timestamp",
};

const nameOptionFor = (kind: string): Fig.Option => ({
  name: "--name",
  description: `${kind} name (default: '')`,
  args: { name: "name" },
});

const versionOptionFor = (description: string): Fig.Option => ({
  name: "--version",
  description,
  args: { name: "version" },
});

const optionalCountOption = (
  name: string | string[],
  description: string
): Fig.Option => ({
  name,
  description,
  requiresSeparator: true,
  args: { name: "N", isOptional: true },
});

const completionSpec: Fig.Spec = {
  name: "bosh",
  description: "Bosh cli to managed your bosh deployment",
  subcommands: [
    // Environments
    {
      name: ["environment", "env"],
      description: "Show environment",
      options: [
        {
          name: "--details",
          description: "Show director's certificates details",
        },
      ],
    },
    {
      name: ["environments", "envs"],
      description: "List environments",
    },
    {
      name: "create-env",
      description: "Create or update BOSH environment",
      args: manifestPathArg,
      options: [
        ...varAndOpsOptions,
        skipDrainOption,
        statePathOption,
        {
          name: "--recreate",
          description: "Recreate VM in deployment",
        },
        {
          name: "--recreate-persistent-disks",
          description: "Recreate persistent disks in the deployment",
        },
        {
          name: "--fix-stemcell",
          description:
            "Forces re-upload of the stemcell; any existing stemcell image is orphaned and the VM is recreated",
        },
        packageDirOption,
      ],
    },
    {
      name: "delete-env",
      description: "Delete BOSH environment",
      args: manifestPathArg,
      options: [
        ...varAndOpsOptions,
        skipDrainOption,
        statePathOption,
        packageDirOption,
      ],
    },
    {
      name: "stop-env",
      description: "Stop BOSH environment",
      args: manifestPathArg,
      options: [...varAndOpsOptions, skipDrainOption, statePathOption],
    },
    {
      name: "start-env",
      description: "Start BOSH environment",
      args: manifestPathArg,
      options: [...varAndOpsOptions, statePathOption],
    },
    {
      name: "alias-env",
      description: "Alias environment to save URL and CA certificate",
      args: {
        name: "ALIAS",
        description: "Environment alias",
      },
    },
    {
      name: "unalias-env",
      description: "Remove an aliased environment",
      args: {
        name: "ALIAS",
        description: "Environment alias",
        generators: environments,
      },
    },

    // Authentication
    {
      name: ["log-in", "l", "login"],
      description: "Log in",
    },
    {
      name: ["log-out", "logout"],
      description: "Log out",
    },

    // Tasks
    {
      name: ["task", "t"],
      description: "Show task status and start tracking its output",
      args: {
        name: "ID",
        isOptional: true,
      },
      options: [
        {
          name: "--event",
          description: "Track event log",
        },
        {
          name: "--cpi",
          description: "Track CPI log",
        },
        {
          name: "--debug",
          description: "Track debug log",
        },
        {
          name: "--result",
          description: "Track result log",
        },
        {
          name: ["-a", "--all"],
          description: "Include all task types (ssh, logs, vms, etc)",
        },
      ],
    },
    {
      name: ["tasks", "ts"],
      description: "List running or recent tasks",
      options: [
        optionalCountOption(
          ["-r", "--recent"],
          "Show 30 recent tasks. Use '=' to specify the number of tasks to show"
        ),
        {
          name: ["-a", "--all"],
          description: "Include all task types (ssh, logs, vms, etc)",
        },
      ],
    },
    {
      name: ["cancel-task", "ct"],
      description: "Cancel task at its next checkpoint",
      args: {
        name: "ID",
      },
    },
    {
      name: ["cancel-tasks", "cts"],
      description: "Cancel tasks at their next checkpoints",
      options: [
        {
          name: ["-t", "--type"],
          description: "Task types to cancel (default is all types)",
          isRepeatable: true,
          args: {
            name: "type",
            suggestions: [
              "cck_scan_and_fix",
              "cck_apply",
              "update_release",
              "update_deployment",
              "vms",
            ],
          },
        },
        {
          name: ["-s", "--state"],
          description: "Task states to cancel (default: queued)",
          isRepeatable: true,
          args: {
            name: "state",
            suggestions: ["queued", "processing"],
          },
        },
      ],
    },

    // Misc
    {
      name: "locks",
      description: "List current locks",
    },
    {
      name: "clean-up",
      description: "Clean up old unused resources except orphaned disks",
      options: [
        {
          name: "--all",
          description:
            "Clean up all unused resources including all orphaned disks",
        },
        {
          name: "--dry-run",
          description:
            "Print out the resources that will be deleted but does not delete anything",
        },
        {
          name: "--keep-orphaned-disks",
          description: "Keep orphaned disks even with '--all'",
        },
      ],
    },
    {
      name: "curl",
      description: "Make an HTTP request to the Director",
      args: {
        name: "PATH",
        description: "URL path which can include query string",
      },
      options: [
        {
          name: ["-X", "--method"],
          description: "HTTP method (default: GET)",
          args: {
            name: "method",
            default: "GET",
            suggestions: ["GET", "POST", "PUT", "DELETE"],
          },
        },
        {
          name: ["-H", "--header"],
          description: "HTTP header in 'name: value' format",
          isRepeatable: true,
          args: { name: "header" },
        },
        {
          name: "--body",
          description: "HTTP request body (path)",
          args: genericPathArg,
        },
        {
          name: ["-i", "--show-headers"],
          description: "Show HTTP headers",
        },
      ],
    },

    // Config
    {
      name: ["config", "c"],
      description: "Show current config for either ID or both type and name",
      args: {
        name: "ID",
        description: "Config ID",
        isOptional: true,
      },
      options: [
        {
          name: "--name",
          description: "Config name",
          args: { name: "name" },
        },
        {
          name: "--type",
          description: "Config type",
          args: { name: "type", suggestions: configTypeSuggestions },
        },
      ],
    },
    {
      name: ["configs", "cs"],
      description: "List configs",
      options: [
        {
          name: "--name",
          description: "Config name",
          args: { name: "name" },
        },
        {
          name: "--type",
          description: "Config type",
          args: { name: "type", suggestions: configTypeSuggestions },
        },
        optionalCountOption(
          ["-r", "--recent"],
          "Number of configs to show (default: 1)"
        ),
      ],
    },
    {
      name: ["update-config", "uc"],
      description: "Update config",
      args: {
        name: "PATH",
        description: "Path to a YAML config file",
        template: "filepaths",
      },
      options: [
        {
          name: "--type",
          description: "Config type, e.g. 'cloud', 'runtime', or 'cpi'",
          isRequired: true,
          args: { name: "type", suggestions: configTypeSuggestions },
        },
        {
          name: "--name",
          description: "Config name",
          isRequired: true,
          args: { name: "name" },
        },
        {
          name: "--expected-latest-id",
          description: "Expected ID of latest config",
          args: { name: "ID" },
        },
        ...varAndOpsOptions,
      ],
    },
    {
      name: ["delete-config", "dc"],
      description: "Delete config",
      args: {
        name: "ID",
        description: "Config ID",
        isOptional: true,
      },
      options: [
        {
          name: "--type",
          description: "Config type, e.g. 'cloud', 'runtime', or 'cpi'",
          args: { name: "type", suggestions: configTypeSuggestions },
        },
        {
          name: "--name",
          description: "Config name",
          args: { name: "name" },
        },
      ],
    },
    {
      name: "diff-config",
      description: "Diff two configs by ID or content",
      options: [
        {
          name: "--from-id",
          description: "ID of first config to compare",
          args: { name: "ID" },
        },
        {
          name: "--to-id",
          description: "ID of second config to compare",
          args: { name: "ID" },
        },
        {
          name: "--from-content",
          description: "Path to first config file to compare",
          args: genericPathArg,
        },
        {
          name: "--to-content",
          description: "Path to second config file to compare",
          args: genericPathArg,
        },
      ],
    },

    // Cloud config
    {
      name: ["cloud-config", "cc"],
      description: "Show current cloud config",
      options: [nameOptionFor("Cloud-Config")],
    },
    {
      name: ["update-cloud-config", "ucc"],
      description: "Update current cloud config",
      args: {
        name: "PATH",
        description: "Path to a cloud config file",
        template: "filepaths",
      },
      options: [...varAndOpsOptions, nameOptionFor("Cloud-Config")],
    },

    // CPI config
    {
      name: "cpi-config",
      description: "Show current CPI config",
    },
    {
      name: "update-cpi-config",
      description: "Update current CPI config",
      args: {
        name: "PATH",
        description: "Path to a CPI config file",
        template: "filepaths",
      },
      options: [...varAndOpsOptions, noRedactOption],
    },

    // Runtime config
    {
      name: ["runtime-config", "rc"],
      description: "Show current runtime config",
      options: [nameOptionFor("Runtime-Config")],
    },
    {
      name: ["update-runtime-config", "urc"],
      description: "Update current runtime config",
      args: {
        name: "PATH",
        description: "Path to a runtime config file",
        template: "filepaths",
      },
      options: [
        ...varAndOpsOptions,
        noRedactOption,
        nameOptionFor("Runtime-Config"),
        {
          name: "--fix-releases",
          description:
            "Reupload releases in config and replace corrupt or missing jobs/packages",
        },
      ],
    },

    // Deployments
    {
      name: ["deployment", "dep"],
      description: "Show deployment information",
    },
    {
      name: ["deployments", "ds", "deps"],
      description: "List deployments",
    },
    {
      name: ["delete-deployment", "deld"],
      description: "Delete deployment",
      options: [forceOption],
    },
    {
      name: ["deploy", "d"],
      description: "Update deployment",
      args: manifestPathArg,
      options: [
        ...varAndOpsOptions,
        noRedactOption,
        {
          name: "--recreate",
          description: "Recreate all VMs in deployment",
        },
        {
          name: "--recreate-persistent-disks",
          description: "Recreate all persistent disks in deployment",
        },
        {
          name: "--recreate-vms-created-before",
          description:
            "Only recreate VMs created before the given RFC 3339 timestamp",
          args: timestampArg,
        },
        fixOption,
        {
          name: "--fix-releases",
          description:
            "Reupload releases in manifest and replace corrupt or missing jobs/packages",
        },
        {
          name: "--skip-drain",
          description:
            "Skip running drain and pre-stop scripts for specific instance groups",
          isRepeatable: true,
          requiresSeparator: true,
          args: {
            name: "INSTANCE-GROUP[/INSTANCE-ID]",
            isOptional: true,
          },
        },
        {
          name: "--skip-upload-releases",
          description: "Skips the upload procedure for releases",
        },
        ...canariesOptions,
        dryRunOption,
        {
          name: "--force-latest-variables",
          description:
            "Retrieve the latest variable values from the config server regardless of their update strategy",
        },
      ],
    },
    {
      name: ["manifest", "man"],
      description: "Show deployment manifest",
    },
    {
      name: ["interpolate", "int"],
      description: "Interpolates variables into a manifest",
      args: {
        name: "PATH",
        description: "Path to a template that will be interpolated",
        template: "filepaths",
      },
      options: [
        ...varAndOpsOptions,
        {
          name: "--path",
          description: "Extract value out of template (e.g.: /private_key)",
          args: { name: "OP-PATH" },
        },
        {
          name: "--var-errs",
          description: "Expect all variables to be found, otherwise error",
        },
        {
          name: "--var-errs-unused",
          description: "Expect all variables to be used, otherwise error",
        },
      ],
    },

    // Events
    {
      name: "events",
      description: "List events",
      options: [
        {
          name: "--before-id",
          description: "Show events with ID less than the given ID",
          args: { name: "ID" },
        },
        {
          name: "--before",
          description:
            "Show events before the given timestamp (ex: 2016-05-08 17:26:32)",
          args: { name: "timestamp" },
        },
        {
          name: "--after",
          description:
            "Show events after the given timestamp (ex: 2016-05-08 17:26:32)",
          args: { name: "timestamp" },
        },
        {
          name: "--task",
          description: "Show events with the given task ID",
          args: { name: "ID" },
        },
        {
          name: "--instance",
          description: "Show events with given instance",
          args: { name: "instance" },
        },
        {
          name: "--event-user",
          description: "Show events with given user",
          args: { name: "user" },
        },
        {
          name: "--action",
          description: "Show events with given action",
          args: { name: "action" },
        },
        {
          name: "--object-type",
          description: "Show events with given object type",
          args: { name: "type" },
        },
        {
          name: "--object-name",
          description: "Show events with given object name",
          args: { name: "name" },
        },
      ],
    },
    {
      name: "event",
      description: "Show event details",
      args: {
        name: "ID",
      },
    },

    // Stemcells
    {
      name: ["stemcells", "ss"],
      description: "List stemcells",
    },
    {
      name: "inspect-local-stemcell",
      description: "Display information from stemcell metadata",
      args: {
        name: "PATH-TO-STEMCELL",
        description: "Path to stemcell",
        template: "filepaths",
      },
    },
    {
      name: ["upload-stemcell", "us"],
      description: "Upload stemcell",
      args: {
        name: "URL",
        description: "Path to a local file or URL",
        template: "filepaths",
      },
      options: [
        {
          name: "--fix",
          description: "Replaces the stemcell if already exists",
        },
        {
          name: "--name",
          description:
            "Name used in existence check (is not used with local stemcell file)",
          args: { name: "name" },
        },
        versionOptionFor(
          "Version used in existence check (is not used with local stemcell file)"
        ),
        {
          name: "--sha1",
          description:
            "SHA1 of the remote stemcell (is not used with local files)",
          args: { name: "sha1" },
        },
      ],
    },
    {
      name: ["delete-stemcell", "dels"],
      description: "Delete stemcell",
      args: {
        name: "NAME/VERSION",
      },
      options: [forceOption],
    },
    {
      name: "repack-stemcell",
      description: "Repack stemcell",
      args: [
        {
          name: "PATH-TO-STEMCELL",
          description: "Path to stemcell",
          template: "filepaths",
        },
        {
          name: "PATH-TO-RESULT",
          description: "Path to repacked stemcell",
          template: "filepaths",
        },
      ],
      options: [
        {
          name: "--name",
          description: "Repacked stemcell name",
          args: { name: "name" },
        },
        {
          name: "--cloud-properties",
          description: "Repacked stemcell cloud properties",
          args: { name: "properties" },
        },
        {
          name: "--empty-image",
          description: "Pack zero byte file instead of image",
        },
        {
          name: "--format",
          description:
            "Repacked stemcell formats. Can be used multiple times. Overrides existing formats",
          isRepeatable: true,
          args: { name: "format" },
        },
        versionOptionFor("Repacked stemcell version"),
      ],
    },

    // Releases
    {
      name: ["releases", "rs"],
      description: "List releases",
    },
    {
      name: ["upload-release", "ur"],
      description: "Upload release",
      args: {
        name: "URL",
        description: "Path to a local file or URL",
        isOptional: true,
        template: "filepaths",
      },
      options: [
        releaseDirOption,
        {
          name: "--rebase",
          description:
            "Rebases this release onto the latest version known by the Director",
        },
        {
          name: "--fix",
          description: "Replaces corrupt and missing jobs and packages",
        },
        {
          name: "--name",
          description:
            "Name used in existence check (is not used with local release file)",
          args: { name: "name" },
        },
        versionOptionFor(
          "Version used in existence check (is not used with local release file)"
        ),
        {
          name: "--sha1",
          description:
            "SHA1 of the remote release (is not used with local files)",
          args: { name: "sha1" },
        },
        {
          name: "--stemcell",
          description:
            "Stemcell that the release is compiled against (applies to remote releases)",
          args: { name: "OS/VERSION" },
        },
      ],
    },
    {
      name: "export-release",
      description: "Export the compiled release to a tarball",
      args: [
        {
          name: "NAME/VERSION",
        },
        {
          name: "OS/VERSION",
        },
      ],
      options: [
        {
          name: "--dir",
          description: "Destination directory",
          args: { name: "DIR", template: "folders" },
        },
        {
          name: "--job",
          description: "Name of job to export",
          isRepeatable: true,
          args: { name: "job" },
        },
      ],
    },
    {
      name: "inspect-release",
      description: "List release contents such as jobs",
      args: {
        name: "NAME/VERSION",
      },
    },
    {
      name: "inspect-local-release",
      description: "Display information from release metadata",
      args: {
        name: "PATH-TO-RELEASE",
        description: "Path to release",
        template: "filepaths",
      },
    },
    {
      name: ["delete-release", "delr"],
      description: "Delete release",
      args: {
        name: "NAME[/VERSION]",
      },
      options: [forceOption],
    },

    // Errands
    {
      name: ["errands", "es"],
      description: "List errands",
    },
    {
      name: "run-errand",
      description: "Run errand",
      args: {
        name: "NAME",
      },
      options: [
        {
          name: "--instance",
          description:
            "Instance or group the errand should run on (must specify errand by release job name)",
          isRepeatable: true,
          args: { name: "INSTANCE-GROUP[/INSTANCE-ID]" },
        },
        {
          name: "--keep-alive",
          description:
            "Use existing VM to run an errand and keep it after completion",
        },
        {
          name: "--when-changed",
          description:
            "Run errand only if errand configuration has changed or if the previous run was unsuccessful",
        },
        {
          name: "--with-heartbeat",
          description:
            "Print task state every N seconds while waiting. Use '=' to specify interval",
          requiresSeparator: true,
          args: { name: "N", isOptional: true },
        },
        {
          name: "--download-logs",
          description: "Download logs",
        },
        {
          name: "--logs-dir",
          description: "Destination directory for logs",
          args: { name: "DIR", template: "folders" },
        },
      ],
    },

    // Disks
    {
      name: "disks",
      description: "List disks",
      options: [
        {
          name: ["-o", "--orphaned"],
          description: "List orphaned disks",
        },
        {
          name: "--dynamic",
          description: "List dynamic disks",
        },
      ],
    },
    {
      name: "attach-disk",
      description: "Attach disk to an instance",
      args: [
        instanceSlugArg,
        {
          name: "DISK-CID",
        },
      ],
      options: [
        {
          name: "--disk-properties",
          description:
            "Disk properties to use for the new disk. Use 'copy' to copy the properties from the currently attached disk",
          args: { name: "properties", suggestions: ["copy"] },
        },
      ],
    },
    {
      name: "delete-disk",
      description: "Delete disk",
      args: {
        name: "CID-OR-NAME",
      },
      options: [
        {
          name: "--dynamic",
          description: "Delete a dynamic disk by name",
        },
      ],
    },
    {
      name: "orphan-disk",
      description: "Orphan disk",
      args: cidArg,
    },

    // Networks
    {
      name: "networks",
      description: "List networks",
      options: [
        {
          name: ["-o", "--orphaned"],
          description: "List orphaned networks",
        },
      ],
    },
    {
      name: "delete-network",
      description: "Delete network",
      args: {
        name: "NAME",
      },
    },

    // Snapshots
    {
      name: "snapshots",
      description: "List snapshots",
      args: { ...instanceSlugArg, isOptional: true },
    },
    {
      name: "take-snapshot",
      description: "Take snapshot",
      args: { ...instanceSlugArg, isOptional: true },
    },
    {
      name: "delete-snapshot",
      description: "Delete snapshot",
      args: cidArg,
    },
    {
      name: "delete-snapshots",
      description: "Delete all snapshots in a deployment",
    },

    // Instances
    {
      name: ["instances", "is"],
      description: "List all instances in a deployment",
      options: [
        {
          name: ["-i", "--details"],
          description:
            "Show details including VM CID, persistent disk CID and more",
        },
        {
          name: "--vitals",
          description: "Show vitals",
        },
        {
          name: ["-p", "--ps"],
          description: "Show processes",
        },
        {
          name: ["-f", "--failing"],
          description: "Only show failing instances",
        },
      ],
    },
    {
      name: "vms",
      description: "List all VMs in all deployments",
      options: [
        {
          name: "--vitals",
          description: "Show vitals",
        },
        {
          name: "--cloud-properties",
          description: "Show cloud properties",
        },
      ],
    },
    {
      name: "update-resurrection",
      description: "Enable/disable resurrection",
      args: {
        name: "on|off",
        suggestions: ["on", "off"],
      },
    },
    {
      name: "ignore",
      description: "Ignore an instance",
      args: instanceSlugArg,
    },
    {
      name: "unignore",
      description: "Unignore an instance",
      args: instanceSlugArg,
    },
    {
      name: ["cloud-check", "cck", "cloudcheck"],
      description: "Cloud consistency check and interactive repair",
      options: [
        {
          name: ["-a", "--auto"],
          description: "Resolve problems automatically",
        },
        {
          name: "--resolution",
          description:
            "Apply resolution of given type (e.g.: 'recreate_vm'). Can be used multiple times",
          isRepeatable: true,
          args: { name: "resolution" },
        },
        {
          name: ["-r", "--report"],
          description:
            "Only generate report; don't attempt to resolve problems",
        },
      ],
    },
    {
      name: "create-recovery-plan",
      description: "Interactively generate a recovery plan for disaster repair",
      args: {
        name: "PATH",
        description: "Create recovery plan file at path",
        template: "filepaths",
      },
    },
    {
      name: "recover",
      description: "Apply a recovery plan for disaster repair",
      args: {
        name: "PATH",
        description: "Path to a recovery plan file",
        template: "filepaths",
      },
    },
    {
      name: "orphaned-vms",
      description: "List all the orphaned VMs in all deployments",
    },

    // Instance management
    {
      name: "logs",
      description: "Fetch logs from instance(s)",
      args: allOrInstanceSlugArg,
      options: [
        {
          name: "--dir",
          description: "Destination directory",
          args: { name: "DIR", template: "folders" },
        },
        {
          name: ["-f", "--follow"],
          description: "Follow logs via SSH",
        },
        {
          name: "--num",
          description: "Last number of lines",
          args: { name: "NUM" },
        },
        {
          name: ["-q", "--quiet"],
          description:
            "Suppresses printing of headers when multiple files are being examined",
        },
        {
          name: "--job",
          description:
            "Limit to only specific jobs (can only be used in combination with --follow)",
          isRepeatable: true,
          args: { name: "job" },
        },
        {
          name: "--only",
          description:
            "Filter logs to specific jobs (comma-separated). Like --jobs, but for when --follow is not being used",
          isRepeatable: true,
          args: { name: "jobs" },
        },
        {
          name: "--agent",
          description: "Include only agent logs",
        },
        {
          name: "--system",
          description: "Include only system logs",
        },
        {
          name: "--all-logs",
          description: "Include all logs (agent, system, and job logs)",
        },
        ...gatewayOptions,
        ...createEnvAuthOptions,
      ],
    },
    {
      name: "start",
      description: "Start instance(s)",
      args: allOrInstanceSlugArg,
      options: [...canariesOptions, ...convergeOptions],
    },
    {
      name: "stop",
      description: "Stop instance(s)",
      args: allOrInstanceSlugArg,
      options: [
        {
          name: "--soft",
          description: "Stop process only (default)",
        },
        {
          name: "--hard",
          description: "Delete VM (but keep persistent disk)",
        },
        skipDrainOption,
        ...canariesOptions,
        ...convergeOptions,
      ],
    },
    {
      name: "restart",
      description: "Restart instance(s)",
      args: allOrInstanceSlugArg,
      options: [skipDrainOption, ...canariesOptions, ...convergeOptions],
    },
    {
      name: "recreate",
      description: "Recreate instance(s)",
      args: allOrInstanceSlugArg,
      options: [
        skipDrainOption,
        fixOption,
        {
          name: "--vms-created-before",
          description:
            "Only recreate VMs created before the given RFC 3339 timestamp",
          args: timestampArg,
        },
        ...canariesOptions,
        dryRunOption,
        ...convergeOptions,
      ],
    },
    {
      name: "delete-vm",
      description: "Delete VM",
      args: cidArg,
    },
    {
      name: "pcap",
      description: "Capture network packets on instance(s)",
      args: {
        name: "INSTANCE-GROUP[/INSTANCE-ID]",
        isOptional: true,
        isVariadic: true,
      },
      options: [
        {
          name: ["-i", "--interface"],
          description:
            "Specifies the network interface to listen on (default: eth0)",
          args: { name: "interface", default: "eth0" },
        },
        {
          name: ["-f", "--filter"],
          description: "Filter to apply when running tcpdump",
          args: { name: "filter" },
        },
        {
          name: ["-s", "--snaplen"],
          description:
            "Snarf snaplen bytes of data from each packet rather than the default of 65535 bytes",
          args: { name: "snaplen", default: "65535" },
        },
        {
          name: ["-o", "--output"],
          description: "File to write pcap to",
          isRequired: true,
          args: genericPathArg,
        },
        {
          name: "--stop-timeout",
          description:
            "Timeout to wait for data to flush before session stop (default: 5s)",
          args: { name: "duration", default: "5s" },
        },
        ...gatewayOptions,
      ],
    },

    // SSH instance
    {
      name: "ssh",
      description: "SSH into instance(s)",
      args: {
        name: "INSTANCE-GROUP[/INSTANCE-ID] | IP",
        isOptional: true,
      },
      options: [
        {
          name: ["-c", "--command"],
          description: "Command",
          isRepeatable: true,
          args: { name: "command" },
        },
        {
          name: "--opts",
          description: "Options to pass through to SSH",
          args: { name: "options" },
        },
        {
          name: ["-r", "--results"],
          description: "Collect results into a table instead of streaming",
        },
        privateKeyOption,
        usernameOption,
        ...gatewayOptions,
        ...createEnvAuthOptions,
      ],
    },
    {
      name: "scp",
      description: "SCP to/from instance(s)",
      args: {
        name: "PATH",
        description:
          "Remote (e.g. ':/some/remote/path' or 'router/1:/path') or local path",
        isVariadic: true,
        template: "filepaths",
      },
      options: [
        {
          name: ["-r", "--recursive"],
          description:
            "Recursively copy entire directories. Note that symbolic links encountered are followed in the tree traversal",
        },
        privateKeyOption,
        usernameOption,
        ...gatewayOptions,
        ...createEnvAuthOptions,
      ],
    },

    // Release creation
    {
      name: "init-release",
      description: "Initialize release",
      options: [
        releaseDirOption,
        {
          name: "--git",
          description: "Initialize git repository",
        },
      ],
    },
    {
      name: "reset-release",
      description: "Reset release",
      options: [releaseDirOption],
    },
    {
      name: "generate-job",
      description: "Generate job",
      args: {
        name: "NAME",
      },
      options: [releaseDirOption],
    },
    {
      name: "generate-package",
      description: "Generate package",
      args: {
        name: "NAME",
      },
      options: [releaseDirOption],
    },
    {
      name: ["create-release", "cr"],
      description: "Create release",
      args: {
        ...genericPathArg,
        isOptional: true,
      },
      options: [
        releaseDirOption,
        {
          name: "--name",
          description: "Custom release name",
          args: { name: "name" },
        },
        versionOptionFor(
          "Custom release version (e.g.: 1.0.0, 1.0-beta.2+dev.10)"
        ),
        {
          name: "--timestamp-version",
          description:
            "Create release with the timestamp as the dev version (e.g.: 1+dev.TIMESTAMP)",
        },
        {
          name: "--final",
          description: "Make it a final release",
        },
        {
          name: "--tarball",
          description: "Create release tarball at path (e.g. /tmp/release.tgz)",
          args: genericPathArg,
        },
        {
          name: "--force",
          description: "Ignore Git dirty state check",
        },
      ],
    },
    {
      name: "vendor-package",
      description: "Vendor package",
      args: [
        {
          name: "PACKAGE",
        },
        {
          name: "SRC-DIR",
          template: "folders",
        },
      ],
      options: [
        releaseDirOption,
        {
          name: "--prefix",
          description: "Prefix to add to the package name",
          args: { name: "prefix" },
        },
      ],
    },
    {
      name: "sha1ify-release",
      description: "Convert release tarball to use SHA1",
      args: [
        { ...genericPathArg, isOptional: true },
        { name: "DESTINATION", template: "filepaths", isOptional: true },
      ],
    },
    {
      name: "sha2ify-release",
      description: "Convert release tarball to use SHA256",
      args: [
        { ...genericPathArg, isOptional: true },
        { name: "DESTINATION", template: "filepaths", isOptional: true },
      ],
    },
    {
      name: "finalize-release",
      description: "Create final release from dev release tarball",
      args: genericPathArg,
      options: [
        releaseDirOption,
        {
          name: "--name",
          description: "Custom release name",
          args: { name: "name" },
        },
        versionOptionFor(
          "Custom release version (e.g.: 1.0.0, 1.0-beta.2+dev.10)"
        ),
        {
          name: "--force",
          description: "Ignore Git dirty state check",
        },
      ],
    },

    // Blobs
    {
      name: "blobs",
      description: "List blobs",
      options: [releaseDirOption],
    },
    {
      name: "add-blob",
      description: "Add blob",
      args: [
        {
          name: "PATH",
          template: "filepaths",
        },
        {
          name: "BLOBS-PATH",
        },
      ],
      options: [releaseDirOption],
    },
    {
      name: "remove-blob",
      description: "Remove blob",
      args: {
        name: "BLOBS-PATH",
      },
      options: [releaseDirOption],
    },
    {
      name: "sync-blobs",
      description: "Sync blobs",
      options: [releaseDirOption],
    },
    {
      name: "upload-blobs",
      description: "Upload blobs",
      options: [releaseDirOption],
    },

    {
      name: ["variables", "vars"],
      description: "List variables",
    },

    // Built-in
    {
      name: "help",
      description: "Show this help message",
    },
    {
      name: "completion",
      description:
        "Generate the autocompletion script for bosh for the specified shell",
      subcommands: ["bash", "zsh", "fish", "powershell"].map((shell) => ({
        name: shell,
        description: `Generate the autocompletion script for ${shell}`,
        options: [
          {
            name: "--no-descriptions",
            description: "Disable completion descriptions",
          },
        ],
      })),
    },
  ],
  options: [
    {
      name: ["-h", "--help"],
      description: "Show this help message",
      isPersistent: true,
    },
    {
      name: ["-v", "--version"],
      description: "Show CLI version",
    },
    {
      name: "--config",
      description: "Config file path [$BOSH_CONFIG] (default: ~/.bosh/config)",
      isPersistent: true,
      args: genericPathArg,
    },
    {
      name: ["-e", "--environment"],
      description: "Director environment name or URL [$BOSH_ENVIRONMENT]",
      isPersistent: true,
      args: {
        name: "name",
        generators: environments,
      },
    },
    {
      name: "--ca-cert",
      description: "Director CA certificate path or value [$BOSH_CA_CERT]",
      isPersistent: true,
      args: genericPathArg,
    },
    {
      name: "--sha2",
      description: "Use SHA256 checksums [$BOSH_SHA2]",
      isPersistent: true,
    },
    {
      name: "--parallel",
      description: "The max number of parallel operations (default: 5)",
      isPersistent: true,
      args: {
        name: "amount",
        // Generate whole numbers from 1 to 20
        suggestions: Array.from({ length: 20 }, (_, i) => i + 1).map((number) =>
          number.toString()
        ),
      },
    },
    {
      name: "--client",
      description: "Override username or UAA client [$BOSH_CLIENT]",
      isPersistent: true,
      args: {
        name: "name",
      },
    },
    {
      name: "--client-secret",
      description:
        "Override password or UAA client secret [$BOSH_CLIENT_SECRET]",
      isPersistent: true,
      args: {
        name: "secret",
      },
    },
    {
      name: ["-d", "--deployment"],
      description: "Deployment name [$BOSH_DEPLOYMENT]",
      isPersistent: true,
      args: {
        name: "name",
        generators: deployments,
      },
    },
    {
      name: "--column",
      description:
        "Filter to show only given column(s), use the --column flag for each column you wish to include",
      isPersistent: true,
      isRepeatable: true,
      args: {
        name: "name",
      },
    },
    {
      name: "--json",
      description: "Output as JSON",
      isPersistent: true,
    },
    {
      name: "--tty",
      description: "Force TTY-like output [$BOSH_TTY]",
      isPersistent: true,
    },
    {
      name: "--no-color",
      description: "Toggle colorized output",
      isPersistent: true,
    },
    {
      name: ["-n", "--non-interactive"],
      description: "Don't ask for user input [$BOSH_NON_INTERACTIVE]",
      isPersistent: true,
    },
  ],
};

export default completionSpec;
