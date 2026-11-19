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
  name: "emulators",
  description: "Set up your local development environment using emulators",
  subcommands: [
    {
      name: "firestore",
      description: "Manage your local Firestore emulator",
      subcommands: [
        {
          name: "start",
          description: "Start a local Firestore emulator",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            {
              name: "--database-mode",
              description:
                "The database mode to start the Firestore Emulator in. The valid options are:",
              args: {
                name: "DATABASE_MODE",
                description: "String",
              },
            },
            {
              name: "--edition",
              description:
                "The database edition to start the Firestore Emulator in. _EDITION_ must be one of: *standard*, *enterprise*",
              args: {
                name: "EDITION",
                description: "String",
                suggestions: ["standard", "enterprise"],
              },
            },
            {
              name: "--export-on-exit",
              description:
                "Directory path in which emulator data will be saved upon shutdown. Example:`/home/user/myexports/2024-03-26/`",
              args: {
                name: "EXPORT_ON_EXIT",
                description: "String",
              },
            },
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            {
              name: "--host-port",
              description:
                "The host:port to which the emulator should be bound. Can take the form of a single address (hostname, IPv4, or IPv6) and/or port:",
              args: {
                name: "HOST_PORT",
                description: "String",
              },
            },
            optImpersonateServiceAccount,
            {
              name: "--import-data",
              description:
                "File path to the data to be loaded into the emulator upon start up. Example:`/home/user/myexports/sampleExport/sampleExport.overall_export_metadata.`",
              args: {
                name: "IMPORT_DATA",
                description: "String",
              },
            },
            {
              name: "--licenses",
              description:
                "If set, the emulator will print open-source dependencies and licenses, then exit",
            },
            optLogHttp,
            {
              name: "--no-licenses",
              description:
                "If set, the emulator will print open-source dependencies and licenses, then exit",
              hidden: true,
            },
            {
              name: "--no-use-firestore-in-datastore-mode",
              description: "Runs the emulator in Datastore Mode",
              hidden: true,
            },
            optProject,
            optQuiet,
            {
              name: "--rules",
              description:
                "If set, all projects will use the security rules in this file. More information on Firebase Rules and the syntax for this file is available at https://firebase.google.com/docs/rules",
              args: {
                name: "RULES",
                description: "String",
              },
            },
            optTraceToken,
            {
              name: "--use-firestore-in-datastore-mode",
              description: "Runs the emulator in Datastore Mode",
              hidden: true,
            },
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
    },
    {
      name: "spanner",
      description: "Manage your local Spanner emulator",
      subcommands: [
        {
          name: "env-init",
          description:
            "Print the commands required to export Spanner emulator's env variables",
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
        },
        {
          name: "notices",
          description:
            "Print third-party notices for the local Cloud Spanner emulator",
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
            {
              name: "--no-use-docker",
              description:
                "Use the Cloud Spanner emulator docker image even if the platform has a native binary available in the gcloud CLI. Currently we only provide a native binary for Linux. For other systems, you must install Docker for your platform before starting the emulator",
              hidden: true,
            },
            optProject,
            optQuiet,
            optTraceToken,
            {
              name: "--use-docker",
              description:
                "Use the Cloud Spanner emulator docker image even if the platform has a native binary available in the gcloud CLI. Currently we only provide a native binary for Linux. For other systems, you must install Docker for your platform before starting the emulator",
            },
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
        {
          name: "start",
          description: "Start a local Cloud Spanner emulator",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            {
              name: "--enable-fault-injection",
              description:
                "If true, the emulator will randomly inject faults into transactions. This facilitates application abort-retry testing",
              args: {
                name: "ENABLE_FAULT_INJECTION",
                description: "Int",
              },
            },
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            {
              name: "--host-port",
              description:
                "The host:port to which the emulator should be bound. The default value is localhost:9010. Note that this port serves gRPC requests. To override the default port serving REST requests, use --rest-port. If using Docker to run the emulator, the host must be specified as an ipaddress",
              args: {
                name: "HOST_PORT",
                description: "String",
              },
            },
            optImpersonateServiceAccount,
            optLogHttp,
            optProject,
            optQuiet,
            {
              name: "--rest-port",
              description:
                "The port at which REST requests are served. gcloud uses REST to communicate with the emulator. The default value is 9020",
              args: {
                name: "REST_PORT",
              },
            },
            optTraceToken,
            {
              name: "--use-docker",
              description:
                "Use the Cloud Spanner emulator docker image even if the platform has a native binary available in the gcloud CLI. Currently we only provide a native binary for Linux. For other systems, you must install Docker for your platform before starting the emulator",
              args: {
                name: "USE_DOCKER",
              },
            },
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
