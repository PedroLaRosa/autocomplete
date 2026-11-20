const optAccessTokenFile: Fig.Option = {
  name: "--access-token-file",
  description:
    "A file path to read the access token. Use this flag to authenticate `gcloud` with an access token. The credentials of the active account (if exists) will be ignored. The file should only contain an access token with no other information. Overrides the default *auth/access_token_file* property value for this command invocation",
  args: {
    name: "ACCESS_TOKEN_FILE",
    description: "String",
    template: "filepaths",
  },
};

const optAccount: Fig.Option = {
  name: "--account",
  description:
    "Google Cloud user account to use for invocation. Overrides the default *core/account* property value for this command invocation",
  args: {
    name: "ACCOUNT",
    description: "String",
  },
};

const optBillingProject: Fig.Option = {
  name: "--billing-project",
  description:
    "The Google Cloud project that will be charged quota for operations performed in `gcloud`. If you need to operate on one project, but need quota against a different project, you can use this flag to specify the billing project. If both `billing/quota_project` and `--billing-project` are specified, `--billing-project` takes precedence. Run `$ gcloud config set --help` to see more information about `billing/quota_project`",
  args: {
    name: "BILLING_PROJECT",
    description: "String",
  },
};

const optConfiguration: Fig.Option = {
  name: "--configuration",
  description:
    "File name of the configuration to use for this command invocation. For more information on how to use configurations, run: `gcloud topic configurations`. You can also use the CLOUDSDK_ACTIVE_CONFIG_NAME environment variable to set the equivalent of this flag for a terminal session",
  args: {
    name: "CONFIGURATION",
    description: "String",
  },
};

const optFlagsFile: Fig.Option = {
  name: "--flags-file",
  description:
    "A YAML or JSON file that specifies a *--flag*:*value* dictionary. Useful for specifying complex flag values with special characters that work with any command interpreter. Additionally, each *--flags-file* arg is replaced by its constituent flags. See $ gcloud topic flags-file for more information",
  args: {
    name: "YAML_FILE",
    description: "String",
    template: "filepaths",
  },
};

const optFlatten: Fig.Option = {
  name: "--flatten",
  description:
    "Flatten _name_[] output resource slices in _KEY_ into separate records for each item in each slice. Multiple keys and slices may be specified. This also flattens keys for *--format* and *--filter*. For example, *--flatten=abc.def* flattens *abc.def[].ghi* references to *abc.def.ghi*. A resource record containing *abc.def[]* with N elements will expand to N records in the flattened output. This allows us to specify what `resource-key` the `filter` will operate on. This flag interacts with other flags that are applied in this order: *--flatten*, *--sort-by*, *--filter*, *--limit*",
  args: {
    name: "KEY",
    description: "List",
  },
};

const optForceKeyFileOverwrite: Fig.Option = {
  name: "--force-key-file-overwrite",
  description:
    "If enabled gcloud will regenerate and overwrite the files associated with a broken SSH key without asking for confirmation in both interactive and non-interactive environment",
};

const optFormat: Fig.Option = {
  name: "--format",
  description:
    "Sets the format for printing command output resources. The default is a command-specific human-friendly output format. If both `core/format` and `--format` are specified, `--format` takes precedence. `--format` and `core/format` both take precedence over `core/default_format`. The supported formats are limited to: `config`, `csv`, `default`, `diff`, `disable`, `flattened`, `get`, `json`, `list`, `multi`, `none`, `object`, `table`, `text`, `value`, `yaml`. For more details run $ gcloud topic formats. Run `$ gcloud config set --help` to see more information about `core/format`",
  args: {
    name: "FORMAT",
    description: "String",
  },
};

const optImpersonateServiceAccount: Fig.Option = {
  name: "--impersonate-service-account",
  description:
    "For this `gcloud` invocation, all API requests will be made as the given service account or target service account in an impersonation delegation chain instead of the currently selected account. You can specify either a single service account as the impersonator, or a comma-separated list of service accounts to create an impersonation delegation chain. The impersonation is done without needing to create, download, and activate a key for the service account or accounts",
  args: {
    name: "SERVICE_ACCOUNT_EMAILS",
    description: "String",
  },
};

const optLogHttp: Fig.Option = {
  name: "--log-http",
  description:
    "Log all HTTP server requests and responses to stderr. Overrides the default *core/log_http* property value for this command invocation",
};

const optNoForceKeyFileOverwrite: Fig.Option = {
  name: "--no-force-key-file-overwrite",
  description:
    "If enabled gcloud will regenerate and overwrite the files associated with a broken SSH key without asking for confirmation in both interactive and non-interactive environment",
  hidden: true,
};

const optNoSshKeyFile: Fig.Option = {
  name: "--no-ssh-key-file",
  description:
    "The path to the SSH key file. By default, this is *~/.ssh/google_compute_engine*",
  hidden: true,
};

const optProject: Fig.Option = {
  name: "--project",
  description:
    "The Google Cloud project ID to use for this invocation. If omitted, then the current project is assumed; the current project can be listed using `gcloud config list --format='text(core.project)'` and can be set using `gcloud config set project PROJECTID`",
  args: {
    name: "PROJECT_ID",
    description: "String",
  },
};

const optQuiet: Fig.Option = {
  name: "--quiet",
  description:
    "Disable all interactive prompts when running `gcloud` commands. If input is required, defaults will be used, or an error will be raised",
};

const optSshKeyFile: Fig.Option = {
  name: "--ssh-key-file",
  description:
    "The path to the SSH key file. By default, this is *~/.ssh/google_compute_engine*",
};

const optTraceToken: Fig.Option = {
  name: "--trace-token",
  description:
    "Token used to route traces of service requests for investigation of issues. Overrides the default *core/trace_token* property value for this command invocation",
  args: {
    name: "TRACE_TOKEN",
    description: "String",
  },
};

const optUserOutputEnabled: Fig.Option = {
  name: "--user-output-enabled",
  description:
    "Print user intended output to the console. Overrides the default *core/user_output_enabled* property value for this command invocation. Use *--no-user-output-enabled* to disable",
};

const optVerbosity: Fig.Option = {
  name: "--verbosity",
  description:
    "Override the default verbosity for this command. Overrides the default *core/verbosity* property value for this command invocation. _VERBOSITY_ must be one of: *debug*, *info*, *warning*, *error*, *critical*, *none*",
  args: {
    name: "VERBOSITY",
    description: "String",
    suggestions: ["debug", "info", "warning", "error", "critical", "none"],
  },
};

const completionSpec: Fig.Spec = {
  name: "cloud-shell",
  description: "Manage Google Cloud Shell",
  subcommands: [
    {
      name: "get-mount-command",
      description:
        "Prints a command to mount the Cloud Shell home directory via sshfs",
      options: [
        optAccessTokenFile,
        optAccount,
        optBillingProject,
        optConfiguration,
        optFlagsFile,
        optFlatten,
        optForceKeyFileOverwrite,
        optFormat,
        {
          name: "--help",
          description: "Display detailed help",
        },
        optImpersonateServiceAccount,
        optLogHttp,
        optNoForceKeyFileOverwrite,
        optNoSshKeyFile,
        optProject,
        optQuiet,
        optSshKeyFile,
        optTraceToken,
        optUserOutputEnabled,
        optVerbosity,
      ],
      args: {
        name: "MOUNT_DIR",
        description:
          "Local directory onto which the Cloud Shell home directory should be mounted",
      },
    },
    {
      name: "scp",
      description: "Copies files between Cloud Shell and the local machine",
      options: [
        optAccessTokenFile,
        optAccount,
        optBillingProject,
        optConfiguration,
        {
          name: "--dry-run",
          description:
            "If provided, prints the command that would be run to standard out instead of executing it",
        },
        optFlagsFile,
        optFlatten,
        optForceKeyFileOverwrite,
        optFormat,
        {
          name: "--help",
          description: "Display detailed help",
        },
        optImpersonateServiceAccount,
        optLogHttp,
        {
          name: "--no-dry-run",
          description:
            "If provided, prints the command that would be run to standard out instead of executing it",
          hidden: true,
        },
        optNoForceKeyFileOverwrite,
        {
          name: "--no-recurse",
          description: "Upload directories recursively",
          hidden: true,
        },
        optNoSshKeyFile,
        optProject,
        optQuiet,
        {
          name: "--recurse",
          description: "Upload directories recursively",
        },
        {
          name: "--scp-flag",
          description:
            "Extra flag to be sent to scp. This flag may be repeated",
          args: {
            name: "SCP_FLAG",
            description: "String",
          },
        },
        optSshKeyFile,
        optTraceToken,
        optUserOutputEnabled,
        optVerbosity,
      ],
      args: [
        {
          name: "(cloudshell|localhost):SRC",
          description: "Specifies the files to copy",
          isVariadic: true,
        },
        {
          name: "(cloudshell|localhost):DEST",
          description: "Specifies a destination for the source files",
        },
      ],
    },
    {
      name: "ssh",
      description:
        "Allows you to establish an interactive SSH session with Cloud Shell",
      options: [
        optAccessTokenFile,
        optAccount,
        {
          name: "--authorize-session",
          description:
            "If provided, sends OAuth credentials to the current Cloud Shell session on behalf of the user. When this completes, the session will be authorized to run various Google Cloud command-line tools without requiring the user to manually authenticate",
        },
        optBillingProject,
        {
          name: "--command",
          description: "A command to run in Cloud Shell",
          args: {
            name: "COMMAND",
            description: "String",
          },
        },
        optConfiguration,
        {
          name: "--dry-run",
          description:
            "If provided, prints the command that would be run to standard out instead of executing it",
        },
        optFlagsFile,
        optFlatten,
        optForceKeyFileOverwrite,
        optFormat,
        {
          name: "--help",
          description: "Display detailed help",
        },
        optImpersonateServiceAccount,
        optLogHttp,
        {
          name: "--no-authorize-session",
          description:
            "If provided, sends OAuth credentials to the current Cloud Shell session on behalf of the user. When this completes, the session will be authorized to run various Google Cloud command-line tools without requiring the user to manually authenticate",
          hidden: true,
        },
        {
          name: "--no-dry-run",
          description:
            "If provided, prints the command that would be run to standard out instead of executing it",
          hidden: true,
        },
        optNoForceKeyFileOverwrite,
        optNoSshKeyFile,
        optProject,
        optQuiet,
        {
          name: "--ssh-flag",
          description: "Additional flags to be passed to *ssh(1)*",
          args: {
            name: "SSH_FLAG",
            description: "String",
          },
        },
        optSshKeyFile,
        optTraceToken,
        optUserOutputEnabled,
        optVerbosity,
      ],
    },
  ],
  options: [
    optAccessTokenFile,
    optAccount,
    optBillingProject,
    optConfiguration,
    optFlagsFile,
    optFlatten,
    optFormat,
    {
      name: "--help",
      description: "Display detailed help",
    },
    optImpersonateServiceAccount,
    optLogHttp,
    optProject,
    optQuiet,
    optTraceToken,
    optUserOutputEnabled,
    optVerbosity,
  ],
};

export default completionSpec;
