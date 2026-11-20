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

const optLimit: Fig.Option = {
  name: "--limit",
  description: "Return the first items from the API up to this limit",
  args: {
    name: "LIMIT",
  },
};

const optLogHttp: Fig.Option = {
  name: "--log-http",
  description:
    "Log all HTTP server requests and responses to stderr. Overrides the default *core/log_http* property value for this command invocation",
};

const optPageSize: Fig.Option = {
  name: "--page-size",
  description: "Retrieve batches of this many items from the API",
  args: {
    name: "PAGE_SIZE",
    description: "Int",
  },
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
  name: "transfer",
  description: "Manage Transfer Service jobs, operations, and agents",
  subcommands: [
    {
      name: "agent-pools",
      description: "Manage on-premise transfer agent pools",
      subcommands: [
        {
          name: "create",
          description: "Create a Transfer Service agent pool",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--bandwidth-limit",
              description:
                "Set how much of your bandwidth to make available to this pool's agents. A bandwidth limit applies to all agents in a pool and can help prevent the pool's transfer workload from disrupting other operations that share your bandwidth. For example, enter '50' to set a bandwidth limit of 50 MB/s. By leaving this flag unspecified, this flag unspecified, this pool's agents will use all bandwidth available to them",
              args: {
                name: "BANDWIDTH_LIMIT",
              },
            },
            optBillingProject,
            optConfiguration,
            {
              name: "--display-name",
              description:
                "A modifiable name to help you identify this pool. You can include details that might not fit in the pool's unique full resource name",
              args: {
                name: "DISPLAY_NAME",
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
            optImpersonateServiceAccount,
            optLogHttp,
            {
              name: "--no-async",
              description:
                "Block other tasks in your terminal until the pool has been created. If not included, pool creation will run asynchronously",
            },
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "NAME",
            description: "A unique, permanent identifier for this pool",
          },
        },
        {
          name: "delete",
          description: "Delete a Transfer Service agent pool",
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
          args: {
            name: "NAME",
            description: "The name of the job you want to delete",
          },
        },
        {
          name: "describe",
          description: "Get details about a specific agent pool",
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
          args: {
            name: "NAME",
            description: "The name of the agent pool you want to describe",
          },
        },
        {
          name: "list",
          description: "List Transfer Service transfer agent pools",
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
            optLimit,
            optLogHttp,
            {
              name: "--names",
              description:
                "The names of the agent pools you want to list. Separate multiple names with commas (e.g., --name=foo,bar). If not specified, all agent pools in your current project will be listed",
              args: {
                name: "NAMES",
                description: "List",
              },
            },
            optPageSize,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
        {
          name: "update",
          description: "Update a Transfer Service agent pool",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--bandwidth-limit",
              description:
                "Set how much of your bandwidth to make available to this pool's agents. A bandwidth limit applies to all agents in a pool and can help prevent the pool's transfer workload from disrupting other operations that share your bandwidth. For example, enter '50' to set a bandwidth limit of 50 MB/s. By leaving this flag unspecified, this flag unspecified, this pool's agents will use all bandwidth available to them",
              args: {
                name: "BANDWIDTH_LIMIT",
              },
            },
            optBillingProject,
            {
              name: "--clear-bandwidth-limit",
              description:
                "Remove the agent pool's bandwidth limit, which enables the pool's agents to use all bandwidth available to them",
            },
            {
              name: "--clear-display-name",
              description: "Remove the display name from the agent pool",
            },
            optConfiguration,
            {
              name: "--display-name",
              description:
                "A modifiable name to help you identify this pool. You can include details that might not fit in the pool's unique full resource name",
              args: {
                name: "DISPLAY_NAME",
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
            optImpersonateServiceAccount,
            optLogHttp,
            {
              name: "--no-clear-bandwidth-limit",
              description:
                "Remove the agent pool's bandwidth limit, which enables the pool's agents to use all bandwidth available to them",
              hidden: true,
            },
            {
              name: "--no-clear-display-name",
              description: "Remove the display name from the agent pool",
              hidden: true,
            },
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "NAME",
            description: "A unique, permanent identifier for this pool",
          },
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
      name: "agents",
      description: "Manage Transfer Service agents",
      subcommands: [
        {
          name: "delete",
          description: "Delete Transfer Service transfer agents",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--all",
              description: "Delete all agents running on your machine",
            },
            optBillingProject,
            optConfiguration,
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            {
              name: "--ids",
              description:
                "The IDs of the agents you want to delete. Separate multiple agent IDs with commas, with no spaces following the commas",
              args: {
                name: "IDS",
                description: "List",
              },
            },
            optImpersonateServiceAccount,
            optLogHttp,
            {
              name: "--no-all",
              description: "Delete all agents running on your machine",
              hidden: true,
            },
            {
              name: "--no-uninstall",
              description:
                "Fully uninstall the agent container image in addition to deleting the agents. Uninstalling the container image will free up space, but you'll need to reinstall it to run agents on this machine in the future",
              hidden: true,
            },
            optProject,
            optQuiet,
            optTraceToken,
            {
              name: "--uninstall",
              description:
                "Fully uninstall the agent container image in addition to deleting the agents. Uninstalling the container image will free up space, but you'll need to reinstall it to run agents on this machine in the future",
            },
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
        {
          name: "install",
          description: "Install Transfer Service agents",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            {
              name: "--count",
              description:
                "Specify the number of agents to install on your current machine. System requirements: 8 GB of memory and 4 CPUs per agent",
              args: {
                name: "COUNT",
                description: "Int",
              },
            },
            {
              name: "--creds-file",
              description:
                "Specify the path to the service account's credentials file",
              args: {
                name: "CREDS_FILE",
                description: "String",
                template: "filepaths",
              },
            },
            {
              name: "--docker-network",
              description:
                "Specify the network to connect the container to. This flag maps directly to the `--network` flag in the underlying 'docker run' command",
              args: {
                name: "DOCKER_NETWORK",
                description: "String",
              },
            },
            {
              name: "--enable-multipart",
              description:
                "Split up files and transfer the resulting chunks in parallel before merging them at the destination. Can be used make transfers of large files faster as long as the network and disk speed are not limiting factors. If unset, agent decides when to use the feature. Use *--enable-multipart* to enable and *--no-enable-multipart* to disable",
            },
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--hdfs-data-transfer-protection",
              description:
                "Client-side quality of protection setting for Kerberized clusters. Client-side QOP value cannot be more restrictive than the server-side QOP value. _HDFS_DATA_TRANSFER_PROTECTION_ must be one of: *authentication*, *integrity*, *privacy*",
              args: {
                name: "HDFS_DATA_TRANSFER_PROTECTION",
                description: "String",
                suggestions: ["authentication", "integrity", "privacy"],
              },
            },
            {
              name: "--hdfs-namenode-uri",
              description:
                'A URI representing an HDFS cluster including a schema, namenode, and port. Examples: "rpc://my-namenode:8020", "http://my-namenode:9870"',
              args: {
                name: "HDFS_NAMENODE_URI",
                description: "String",
              },
            },
            {
              name: "--hdfs-username",
              description:
                "Username for connecting to an HDFS cluster with simple auth",
              args: {
                name: "HDFS_USERNAME",
                description: "String",
              },
            },
            {
              name: "--help",
              description: "Display detailed help",
            },
            {
              name: "--id-prefix",
              description:
                "An optional prefix to add to the agent ID to help identify the agent",
              args: {
                name: "ID_PREFIX",
                description: "String",
              },
            },
            optImpersonateServiceAccount,
            {
              name: "--kerberos-config-file",
              description: "Path to Kerberos config file",
              args: {
                name: "KERBEROS_CONFIG_FILE",
                description: "String",
                template: "filepaths",
              },
            },
            {
              name: "--kerberos-keytab-file",
              description:
                "Path to a Keytab file containing the user principal specified with the --kerberos-user-principal flag",
              args: {
                name: "KERBEROS_KEYTAB_FILE",
                description: "String",
                template: "filepaths",
              },
            },
            {
              name: "--kerberos-service-principal",
              description:
                'Kerberos service principal to use, of the form "<primary>/<instance>". Realm is mapped from your Kerberos config. Any supplied realm is ignored. If not passed in, it will default to "hdfs/<namenode_fqdn>" (fqdn = fully qualified domain name)',
              args: {
                name: "KERBEROS_SERVICE_PRINCIPAL",
                description: "String",
              },
            },
            {
              name: "--kerberos-user-principal",
              description:
                "Kerberos user principal to use when connecting to an HDFS cluster via Kerberos auth",
              args: {
                name: "KERBEROS_USER_PRINCIPAL",
                description: "String",
              },
            },
            optLogHttp,
            {
              name: "--logs-directory",
              description:
                "Specify the absolute path to the directory you want to store transfer logs in. If not specified, gcloud transfer will mount your /tmp directory for logs",
              args: {
                name: "LOGS_DIRECTORY",
                description: "String",
              },
            },
            {
              name: "--memlock-limit",
              description:
                "Set the agent container's memlock limit. A value of 64000000 (default) or higher is required to ensure that agent versions 1.14 or later have enough locked memory to be able to start",
              args: {
                name: "MEMLOCK_LIMIT",
                description: "Int",
              },
            },
            {
              name: "--mount-directories",
              description:
                "If you want to grant agents access to specific parts of your filesystem instead of the entire filesystem, specify which directory paths to mount to the agent container. Multiple paths must be separated by commas with no spaces (e.g., --mount-directories=/system/path/to/dir1,/path/to/dir2). When mounting specific directories, gcloud transfer will also mount a directory for logs (either /tmp or what you've specified for --logs-directory) and your Google credentials file for agent authentication",
              args: {
                name: "MOUNT-DIRECTORIES",
                description: "List",
              },
            },
            {
              name: "--no-enable-multipart",
              description:
                "Split up files and transfer the resulting chunks in parallel before merging them at the destination. Can be used make transfers of large files faster as long as the network and disk speed are not limiting factors. If unset, agent decides when to use the feature",
            },
            {
              name: "--no-s3-compatible-mode",
              description:
                "Allow the agent to work with S3-compatible sources. This flag blocks the agent's ability to work with other source types (e.g., file systems)",
              hidden: true,
            },
            {
              name: "--pool",
              description:
                "The agent pool to associate with the newly installed agent. When creating transfer jobs, the agent pool parameter will determine which agents are activated",
              priority: 100,
              args: {
                name: "POOL",
                description: "String",
              },
            },
            optProject,
            {
              name: "--proxy",
              description:
                "Specify the HTTP URL and port of a proxy server if you want to use a forward proxy. For example, to use the URL 'example.com' and port '8080' specify 'http://www.example.com:8080/'",
              args: {
                name: "PROXY",
                description: "String",
              },
            },
            optQuiet,
            {
              name: "--s3-compatible-mode",
              description:
                "Allow the agent to work with S3-compatible sources. This flag blocks the agent's ability to work with other source types (e.g., file systems)",
            },
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
    },
    {
      name: "authorize",
      description: "Authorize an account for all Transfer Service features",
      options: [
        optAccessTokenFile,
        optAccount,
        {
          name: "--add-missing",
          description:
            "Add IAM roles necessary to use all Transfer Service features to the specified account. By default, this command just prints missing roles",
        },
        optBillingProject,
        optConfiguration,
        {
          name: "--creds-file",
          description:
            'The path to the creds file for an account to authorize. The file should be in JSON format and contain a "type" and "client_email", which are automatically generated for most creds files downloaded from Google (e.g. service account tokens). If this flag is not present, the command authorizes the user currently logged into gcloud',
          args: {
            name: "CREDS_FILE",
            description: "String",
            template: "filepaths",
          },
        },
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
          name: "--no-add-missing",
          description:
            "Add IAM roles necessary to use all Transfer Service features to the specified account. By default, this command just prints missing roles",
          hidden: true,
        },
        optProject,
        optQuiet,
        optTraceToken,
        optUserOutputEnabled,
        optVerbosity,
      ],
    },
    {
      name: "jobs",
      description: "Manage transfer jobs",
      subcommands: [
        {
          name: "create",
          description: "Create a Transfer Service transfer job",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            {
              name: "--custom-storage-class",
              description:
                "Specifies the storage class to set on objects being transferred to Cloud Storage buckets. If unspecified, the objects' storage class is set to the destination bucket default. Valid values are:",
              args: {
                name: "CUSTOM_STORAGE_CLASS",
                description: "String",
              },
            },
            {
              name: "--delete-from",
              description:
                "By default, transfer jobs won't delete any data from your source or destination. These options enable you to delete data if needed for your use case. Options include: - 'destination-if-unique' - Delete files from destination if they're not also at source. Use to sync destination to source (i.e., make destination match source exactly) - 'source-after-transfer' - Delete files from source after they're transferred",
              args: {
                name: "DELETE_FROM",
                description: "String",
                suggestions: ["destination-if-unique", "source-after-transfer"],
              },
            },
            {
              name: "--description",
              description:
                "An optional description to help identify the job using details that don't fit in its name",
              args: {
                name: "DESCRIPTION",
                description: "String",
              },
            },
            {
              name: "--destination-agent-pool",
              description:
                "If using a POSIX filesystem destination, specify the ID of the agent pool associated with destination filesystem",
              args: {
                name: "DESTINATION_AGENT_POOL",
                description: "String",
              },
            },
            {
              name: "--do-not-run",
              description:
                "Disable default Transfer Service behavior of running job upon creation if no schedule is set. If this flag is specified, the job won't run until an operation is manually started or a schedule is added",
            },
            {
              name: "--enable-posix-transfer-logs",
              description:
                "Sets whether to generate logs for transfers with a POSIX filesystem source. This setting will later be merged with other log configurations. Use *--enable-posix-transfer-logs* to enable and *--no-enable-posix-transfer-logs* to disable",
            },
            {
              name: "--event-stream-expires",
              description:
                "Set when to stop listening for events UTC using the %Y-%m-%dT%H:%M:%S%z datetime format (e.g., 2020-04-12T06:42:12+04:00). If not set, the job will continue running and listening for events indefinitely",
              args: {
                name: "EVENT_STREAM_EXPIRES",
                description: "String",
              },
            },
            {
              name: "--event-stream-name",
              description:
                'Specify an event stream that Storage Transfer Service can use to listen for when objects are created or updated. For Google Cloud Storage sources, specify a Cloud Pub/Sub subscription, using format "projects/yourproject/subscriptions/yoursubscription". For Amazon S3 sources, specify the Amazon Resource Name (ARN) of an Amazon Simple Queue Service (SQS) queue using format "arn:aws:sqs:region:account_id:queue_name"',
              args: {
                name: "EVENT_STREAM_NAME",
                description: "String",
              },
            },
            {
              name: "--event-stream-starts",
              description:
                "Set when to start listening for events UTC using the %Y-%m-%dT%H:%M:%S%z datetime format (e.g., 2020-04-12T06:42:12+04:00). If not set, the job will start running and listening for events upon the successful submission of the create job command",
              args: {
                name: "EVENT_STREAM_STARTS",
                description: "String",
              },
            },
            {
              name: "--exclude-prefixes",
              description:
                "Exclude any objects that start with the prefix(es) entered. Separate multiple prefixes with commas, omitting spaces after the commas (e.g., --exclude-prefixes=foo,bar)",
              args: {
                name: "EXCLUDED_PREFIXES",
                description: "List",
              },
            },
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            {
              name: "--include-modified-after-absolute",
              description:
                "Include objects last modified after an absolute date/time. Ex. by specifying '2020-01-01', the transfer would include objects last modified after January 1, 2020. Use the %Y-%m-%dT%H:%M:%S%z datetime format",
              args: {
                name: "INCLUDE_MODIFIED_AFTER_ABSOLUTE",
              },
            },
            {
              name: "--include-modified-after-relative",
              description:
                "Include objects that were modified after a relative date/time in the past. Ex. by specifying a duration of '10d', the transfer would include objects last modified *less than* 10 days before its start time. Use the absolute duration format (ex. 1m for 1 month; 1h30m for 1 hour 30 minutes)",
              args: {
                name: "INCLUDE_MODIFIED_AFTER_RELATIVE",
              },
            },
            {
              name: "--include-modified-before-absolute",
              description:
                "Include objects last modified before an absolute date/time. Ex. by specifying '2020-01-01', the transfer would include objects last modified before January 1, 2020. Use the %Y-%m-%dT%H:%M:%S%z datetime format",
              args: {
                name: "INCLUDE_MODIFIED_BEFORE_ABSOLUTE",
              },
            },
            {
              name: "--include-modified-before-relative",
              description:
                "Include objects that were modified before a relative date/time in the past. Ex. by specifying a duration of '10d', the transfer would include objects last modified *more than* 10 days before its start time. Use the absolute duration format (ex. 1m for 1 month; 1h30m for 1 hour 30 minutes)",
              args: {
                name: "INCLUDE_MODIFIED_BEFORE_RELATIVE",
              },
            },
            {
              name: "--include-prefixes",
              description:
                "Include only objects that start with the specified prefix(es). Separate multiple prefixes with commas, omitting spaces after the commas (e.g., --include-prefixes=foo,bar)",
              args: {
                name: "INCLUDED_PREFIXES",
                description: "List",
              },
            },
            {
              name: "--intermediate-storage-path",
              description:
                "If transferring between filesystems, specify the path to a folder in a Google Cloud Storage bucket (gs://example-bucket/example-folder) to use as intermediary storage. Recommended: Use an empty folder reserved for this transfer job to ensure transferred data doesn't interact with any of your existing Cloud Storage data",
              args: {
                name: "INTERMEDIATE_STORAGE_PATH",
                description: "String",
              },
            },
            {
              name: "--log-action-states",
              description:
                "The states in which the actions specified in --log-actions are logged. Separate multiple states with a comma, omitting the space after the comma (e.g., --log-action-states=succeeded,failed). _LOG_ACTION_STATES_ must be one of: *failed*, *skipped*, *succeeded*",
              args: {
                name: "LOG_ACTION_STATES",
                description: "List",
              },
            },
            {
              name: "--log-actions",
              description:
                "Define the transfer operation actions to report in logs. Separate multiple actions with commas, omitting spaces after the commas (e.g., --log-actions=find,copy). _LOG_ACTIONS_ must be one of: *copy*, *delete*, *find*",
              args: {
                name: "LOG_ACTIONS",
                description: "List",
              },
            },
            optLogHttp,
            {
              name: "--manifest-file",
              description:
                "Path to a .csv file containing a list of files to transfer from your source. For manifest files in Cloud Storage, specify the absolute path (e.g., `gs://mybucket/manifest.csv`). For manifest files stored in a source or destination POSIX file system, provide the relative path (e.g., `source://path/to/manfest.csv` or `destination://path/to/manifest.csv`). For manifest file formatting, see https://cloud.google.com/storage-transfer/docs/manifest",
              args: {
                name: "MANIFEST_FILE",
                description: "String",
                template: "filepaths",
              },
            },
            {
              name: "--name",
              description:
                "A unique identifier for the job. Referring to your source and destination is recommended. If left blank, the name is auto-generated upon submission of the job",
              args: {
                name: "NAME",
                description: "String",
              },
            },
            {
              name: "--no-async",
              description:
                "For jobs set to run upon creation, this flag blocks other tasks in your terminal until the job's initial, immediate transfer operation has completed. If not included, tasks will run asynchronously",
            },
            {
              name: "--no-do-not-run",
              description:
                "Disable default Transfer Service behavior of running job upon creation if no schedule is set. If this flag is specified, the job won't run until an operation is manually started or a schedule is added",
              hidden: true,
            },
            {
              name: "--no-enable-posix-transfer-logs",
              description:
                "Sets whether to generate logs for transfers with a POSIX filesystem source. This setting will later be merged with other log configurations",
            },
            {
              name: "--no-replication",
              description:
                "Enable replication to automatically copy all new and existing objects from the source to the destination. Note: Objects deleted from the source bucket will not be deleted from the destination bucket. Please note that it is an event-driven transfer",
              hidden: true,
            },
            {
              name: "--notification-event-types",
              description:
                "Define which change of transfer operation status will trigger Pub/Sub notifications. Choices include 'success', 'failed', 'aborted'. To trigger notifications for all three status changes, you can leave this flag unspecified as long as you've specified a topic for the --notification-pubsub-topic flag. _EVENT_TYPES_ must be one of: *success*, *failed*, *aborted*",
              args: {
                name: "EVENT_TYPES",
                description: "List",
              },
            },
            {
              name: "--notification-payload-format",
              description:
                "If 'none', no transfer operation details are included with notifications. If 'json', a json representation of the relevant transfer operation is included in notification messages (e.g., to see errors after an operation fails). _NOTIFICATION_PAYLOAD_FORMAT_ must be one of: *json*, *none*",
              args: {
                name: "NOTIFICATION_PAYLOAD_FORMAT",
                description: "String",
                suggestions: ["json", "none"],
              },
            },
            {
              name: "--notification-pubsub-topic",
              description: "Pub/Sub topic used for notifications",
              args: {
                name: "NOTIFICATION_PUBSUB_TOPIC",
                description: "String",
              },
            },
            {
              name: "--overwrite-when",
              description:
                "Determine when destination objects are overwritten by source objects. Options include: - 'different' - Overwrites files with the same name if the contents are different (e.g., if etags or checksums don't match) - 'always' - Overwrite destination file whenever source file has the same name -- even if they're identical - 'never' - Never overwrite destination file when source file has the same name",
              args: {
                name: "OVERWRITE_WHEN",
                description: "String",
                suggestions: ["always", "different", "never"],
              },
            },
            {
              name: "--preserve-metadata",
              description:
                "Specify object metadata values that can optionally be preserved. Example: --preserve-metadata=storage-class,uid",
              args: {
                name: "METADATA_FIELDS",
                description: "List",
              },
            },
            optProject,
            optQuiet,
            {
              name: "--replication",
              description:
                "Enable replication to automatically copy all new and existing objects from the source to the destination. Note: Objects deleted from the source bucket will not be deleted from the destination bucket. Please note that it is an event-driven transfer",
            },
            {
              name: "--s3-cloudfront-domain",
              description:
                "For transfers from S3, optionally route egress traffic through a CloudFront instance. Supply the endpoint of the CloudFront instance: https://example.cloudfront.net. See documentation (https://cloud.google.com/storage-transfer/docs/s3-cloudfront) for more information",
              args: {
                name: "S3_CLOUDFRONT_DOMAIN",
                description: "String",
              },
            },
            {
              name: "--schedule-repeats-every",
              description:
                "Set the frequency of the job using the absolute duration format (e.g., 1 month is p1m; 1 hour 30 minutes is 1h30m). If not set, the job will run once",
              args: {
                name: "SCHEDULE_REPEATS_EVERY",
              },
            },
            {
              name: "--schedule-repeats-until",
              description:
                "Set when the job will stop recurring using the %Y-%m-%dT%H:%M:%S%z datetime format (e.g., 2020-04-12T06:42:12+04:00). If specified, you must also include a value for the --schedule-repeats-every flag. If not specified, the job will continue to repeat as specified in its repeat-every field unless the job is manually disabled or you add this field later",
              args: {
                name: "SCHEDULE_REPEATS_UNTIL",
              },
            },
            {
              name: "--schedule-starts",
              description:
                "Set when the job will start using the %Y-%m-%dT%H:%M:%S%z datetime format (e.g., 2020-04-12T06:42:12+04:00). If not set, the job will run upon the successful submission of the create job command unless the --do-not-run flag is included",
              args: {
                name: "SCHEDULE_STARTS",
              },
            },
            {
              name: "--source-agent-pool",
              description:
                "If using a POSIX filesystem source, specify the ID of the agent pool associated with source filesystem",
              args: {
                name: "SOURCE_AGENT_POOL",
                description: "String",
              },
            },
            {
              name: "--source-auth-method",
              description:
                "For transfers from S3-compatible sources, choose a process for adding authentication information to S3 API requests. Refer to AWS's SigV4 (https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html) and SigV2 (https://docs.aws.amazon.com/general/latest/gr/signature-version-2.html) documentation for more information. _SOURCE_AUTH_METHOD_ must be one of: *AWS_SIGNATURE_V2*, *AWS_SIGNATURE_V4*",
              args: {
                name: "SOURCE_AUTH_METHOD",
                description: "String",
                suggestions: ["AWS_SIGNATURE_V2", "AWS_SIGNATURE_V4"],
              },
            },
            {
              name: "--source-creds-file",
              description:
                'Path to a local file on your machine that includes credentials for an Amazon S3 or Azure Blob Storage source (not required for Google Cloud Storage sources). If not specified for an S3 source, gcloud will check your system for an AWS config file. However, this flag must be specified to use AWS\'s "role_arn" auth service. For formatting, see:',
              args: {
                name: "SOURCE_CREDS_FILE",
                description: "String",
                template: "filepaths",
              },
            },
            {
              name: "--source-endpoint",
              description:
                "For transfers from S3-compatible sources, specify your storage system's endpoint. Check with your provider for formatting (ex. s3.us-east-1.amazonaws.com for Amazon S3)",
              args: {
                name: "SOURCE_ENDPOINT",
                description: "String",
              },
            },
            {
              name: "--source-list-api",
              description:
                "For transfers from S3-compatible sources, choose the version of the S3 listing API for returning objects from the bucket. Refer to AWS's ListObjectsV2 (https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListObjectsV2.html) and ListObjects (https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListObjects.html) documentation for more information. _SOURCE_LIST_API_ must be one of: *LIST_OBJECTS*, *LIST_OBJECTS_V2*",
              args: {
                name: "SOURCE_LIST_API",
                description: "String",
                suggestions: ["LIST_OBJECTS", "LIST_OBJECTS_V2"],
              },
            },
            {
              name: "--source-network-protocol",
              description:
                "For transfers from S3-compatible sources, choose the network protocol agents should use for this job. _SOURCE_NETWORK_PROTOCOL_ must be one of: *HTTP*, *HTTPS*",
              args: {
                name: "SOURCE_NETWORK_PROTOCOL",
                description: "String",
                suggestions: ["HTTP", "HTTPS"],
              },
            },
            {
              name: "--source-request-model",
              description:
                "For transfers from S3-compatible sources, choose which addressing style to use. Determines if the bucket name is in the hostname or part of the URL. For example, https://s3.region.amazonaws.com/bucket-name/key-name for path style and Ex. https://bucket-name.s3.region.amazonaws.com/key-name for virtual-hosted style. _SOURCE_REQUEST_MODEL_ must be one of: *PATH_STYLE*, *VIRTUAL_HOSTED_STYLE*",
              args: {
                name: "SOURCE_REQUEST_MODEL",
                description: "String",
                suggestions: ["PATH_STYLE", "VIRTUAL_HOSTED_STYLE"],
              },
            },
            {
              name: "--source-signing-region",
              description:
                "For transfers from S3-compatible sources, specify a region for signing requests. You can leave this unspecified if your storage provider doesn't require a signing region",
              args: {
                name: "SOURCE_SIGNING_REGION",
                description: "String",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: [
            {
              name: "SOURCE",
              description:
                "The source of your data. Available sources and formatting information:",
            },
            {
              name: "DESTINATION",
              description:
                "The destination of your transferred data. Available destinations and formatting information:",
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a Transfer Service transfer job",
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
          args: {
            name: "NAME",
            description: "The name of the job you want to delete",
          },
        },
        {
          name: "describe",
          description:
            "Get configuration and latest operation details about transfer job",
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
          args: {
            name: "NAME",
            description: "The name of the job you want to describe",
          },
        },
        {
          name: "list",
          description: "List Transfer Service transfer jobs",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            {
              name: "--expand-table",
              description:
                "Include additional table columns (job name, source, destination, frequency, lastest operation name, job status) in command output. Tip: increase the size of your terminal before running the command",
            },
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            {
              name: "--job-names",
              description:
                "The names of the jobs you want to list. Separate multiple job names with commas (e.g., --job-names=foo,bar). If not specified, all jobs will be listed",
              args: {
                name: "JOB_NAMES",
                description: "List",
              },
            },
            {
              name: "--job-statuses",
              description:
                "List only jobs with the statuses you specify. Options include 'enabled', 'disabled', 'deleted' (case insensitive). Separate multiple statuses with commas (e.g., --job-statuses=enabled,deleted). If not specified, all jobs will be listed",
              args: {
                name: "JOB_STATUSES",
                description: "List",
              },
            },
            {
              name: "--job-type",
              description:
                "The type of the job you want to list. _JOB_TYPE_ must be one of: *transfer*, *replication*",
              args: {
                name: "JOB_TYPE",
                description: "String",
                suggestions: ["transfer", "replication"],
              },
            },
            optLimit,
            optLogHttp,
            {
              name: "--no-expand-table",
              description:
                "Include additional table columns (job name, source, destination, frequency, lastest operation name, job status) in command output. Tip: increase the size of your terminal before running the command",
              hidden: true,
            },
            optPageSize,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
        {
          name: "monitor",
          description:
            "Track progress in real time for a transfer job's latest operation",
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
          args: {
            name: "NAME",
            description:
              "The name of the job you want to monitor (you'll see details for the job's latest operation)",
          },
        },
        {
          name: "run",
          description: "Run a Transfer Service transfer job",
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
              name: "--no-async",
              description:
                "Blocks other tasks in your terminal until the transfer operation has completed. If not included, tasks will run asynchronously",
            },
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "NAME",
            description: "The name of the job you want to run",
          },
        },
        {
          name: "update",
          description: "Update a Transfer Service transfer job",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            {
              name: "--clear-custom-storage-class",
              description: "Reverts to using destination default storage class",
            },
            {
              name: "--clear-delete-from",
              description:
                "Remove a specified deletion option from the transfer job. If this flag is specified, the transfer job won't delete any data from your source or destination",
            },
            {
              name: "--clear-description",
              description: "Remove the description from the transfer job",
            },
            {
              name: "--clear-destination-agent-pool",
              description:
                "Remove the destination agent pool from the transfer job",
            },
            {
              name: "--clear-event-stream",
              description:
                "Remove the job's entire event stream configuration by clearing all scheduling all event stream flags. The job will no longer listen for events unless a new configuratin is specified",
            },
            {
              name: "--clear-exclude-prefixes",
              description:
                "Remove the list of object prefixes to exclude from the object conditions",
            },
            {
              name: "--clear-include-modified-after-absolute",
              description:
                "Remove the minimum modification datetime from the object conditions",
            },
            {
              name: "--clear-include-modified-after-relative",
              description:
                "Remove the minimum duration since modification from the object conditions",
            },
            {
              name: "--clear-include-modified-before-absolute",
              description:
                "Remove the maximum modification datetime from the object conditions",
            },
            {
              name: "--clear-include-modified-before-relative",
              description:
                "Remove the maximum duration since modification from the object conditions",
            },
            {
              name: "--clear-include-prefixes",
              description:
                "Remove the list of object prefixes to include from the object conditions",
            },
            {
              name: "--clear-intermediate-storage-path",
              description:
                "Remove the intermediate storage path from the transfer job",
            },
            {
              name: "--clear-log-config",
              description: "Remove the job's full logging config",
            },
            {
              name: "--clear-manifest-file",
              description: "Remove the manifest file from the transfer job",
            },
            {
              name: "--clear-notification-config",
              description:
                "Remove the job's full notification configuration to no longer receive notifications via Cloud Pub/Sub",
            },
            {
              name: "--clear-notification-event-types",
              description:
                "Remove the event types from the notification config",
            },
            {
              name: "--clear-preserve-metadata",
              description:
                "Skips preserving optional metadata fields of objects being transferred",
            },
            {
              name: "--clear-s3-cloudfront-domain",
              description: "Removes S3 CloudFront domain",
            },
            {
              name: "--clear-schedule",
              description:
                "Remove the job's entire schedule by clearing all scheduling flags. The job will no longer run unless an operation is manually started or a new schedule is specified",
            },
            {
              name: "--clear-source-agent-pool",
              description: "Remove the source agent pool from the transfer job",
            },
            {
              name: "--clear-source-auth-method",
              description: "Removes source auth method",
            },
            {
              name: "--clear-source-creds-file",
              description: "Remove the source creds file from the transfer job",
            },
            {
              name: "--clear-source-endpoint",
              description: "Removes source endpoint",
            },
            {
              name: "--clear-source-list-api",
              description: "Removes source list API",
            },
            {
              name: "--clear-source-network-protocol",
              description: "Removes source network protocol",
            },
            {
              name: "--clear-source-request-model",
              description: "Removes source request model",
            },
            {
              name: "--clear-source-signing-region",
              description: "Removes source signing region",
            },
            optConfiguration,
            {
              name: "--custom-storage-class",
              description:
                "Specifies the storage class to set on objects being transferred to Cloud Storage buckets. If unspecified, the objects' storage class is set to the destination bucket default. Valid values are:",
              args: {
                name: "CUSTOM_STORAGE_CLASS",
                description: "String",
              },
            },
            {
              name: "--delete-from",
              description:
                "By default, transfer jobs won't delete any data from your source or destination. These options enable you to delete data if needed for your use case. Options include: - 'destination-if-unique' - Delete files from destination if they're not also at source. Use to sync destination to source (i.e., make destination match source exactly) - 'source-after-transfer' - Delete files from source after they're transferred",
              args: {
                name: "DELETE_FROM",
                description: "String",
                suggestions: ["destination-if-unique", "source-after-transfer"],
              },
            },
            {
              name: "--description",
              description:
                "An optional description to help identify the job using details that don't fit in its name",
              args: {
                name: "DESCRIPTION",
                description: "String",
              },
            },
            {
              name: "--destination",
              description:
                "The destination of your transferred data. Available destinations and formatting information:",
              args: {
                name: "DESTINATION",
                description: "String",
              },
            },
            {
              name: "--destination-agent-pool",
              description:
                "If using a POSIX filesystem destination, specify the ID of the agent pool associated with destination filesystem",
              args: {
                name: "DESTINATION_AGENT_POOL",
                description: "String",
              },
            },
            {
              name: "--enable-posix-transfer-logs",
              description:
                "Sets whether to generate logs for transfers with a POSIX filesystem source. This setting will later be merged with other log configurations. Use *--enable-posix-transfer-logs* to enable and *--no-enable-posix-transfer-logs* to disable",
            },
            {
              name: "--event-stream-expires",
              description:
                "Set when to stop listening for events UTC using the %Y-%m-%dT%H:%M:%S%z datetime format (e.g., 2020-04-12T06:42:12+04:00). If not set, the job will continue running and listening for events indefinitely",
              args: {
                name: "EVENT_STREAM_EXPIRES",
                description: "String",
              },
            },
            {
              name: "--event-stream-name",
              description:
                'Specify an event stream that Storage Transfer Service can use to listen for when objects are created or updated. For Google Cloud Storage sources, specify a Cloud Pub/Sub subscription, using format "projects/yourproject/subscriptions/yoursubscription". For Amazon S3 sources, specify the Amazon Resource Name (ARN) of an Amazon Simple Queue Service (SQS) queue using format "arn:aws:sqs:region:account_id:queue_name"',
              args: {
                name: "EVENT_STREAM_NAME",
                description: "String",
              },
            },
            {
              name: "--event-stream-starts",
              description:
                "Set when to start listening for events UTC using the %Y-%m-%dT%H:%M:%S%z datetime format (e.g., 2020-04-12T06:42:12+04:00). If not set, the job will start running and listening for events upon the successful submission of the create job command",
              args: {
                name: "EVENT_STREAM_STARTS",
                description: "String",
              },
            },
            {
              name: "--exclude-prefixes",
              description:
                "Exclude any objects that start with the prefix(es) entered. Separate multiple prefixes with commas, omitting spaces after the commas (e.g., --exclude-prefixes=foo,bar)",
              args: {
                name: "EXCLUDED_PREFIXES",
                description: "List",
              },
            },
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            {
              name: "--include-modified-after-absolute",
              description:
                "Include objects last modified after an absolute date/time. Ex. by specifying '2020-01-01', the transfer would include objects last modified after January 1, 2020. Use the %Y-%m-%dT%H:%M:%S%z datetime format",
              args: {
                name: "INCLUDE_MODIFIED_AFTER_ABSOLUTE",
              },
            },
            {
              name: "--include-modified-after-relative",
              description:
                "Include objects that were modified after a relative date/time in the past. Ex. by specifying a duration of '10d', the transfer would include objects last modified *less than* 10 days before its start time. Use the absolute duration format (ex. 1m for 1 month; 1h30m for 1 hour 30 minutes)",
              args: {
                name: "INCLUDE_MODIFIED_AFTER_RELATIVE",
              },
            },
            {
              name: "--include-modified-before-absolute",
              description:
                "Include objects last modified before an absolute date/time. Ex. by specifying '2020-01-01', the transfer would include objects last modified before January 1, 2020. Use the %Y-%m-%dT%H:%M:%S%z datetime format",
              args: {
                name: "INCLUDE_MODIFIED_BEFORE_ABSOLUTE",
              },
            },
            {
              name: "--include-modified-before-relative",
              description:
                "Include objects that were modified before a relative date/time in the past. Ex. by specifying a duration of '10d', the transfer would include objects last modified *more than* 10 days before its start time. Use the absolute duration format (ex. 1m for 1 month; 1h30m for 1 hour 30 minutes)",
              args: {
                name: "INCLUDE_MODIFIED_BEFORE_RELATIVE",
              },
            },
            {
              name: "--include-prefixes",
              description:
                "Include only objects that start with the specified prefix(es). Separate multiple prefixes with commas, omitting spaces after the commas (e.g., --include-prefixes=foo,bar)",
              args: {
                name: "INCLUDED_PREFIXES",
                description: "List",
              },
            },
            {
              name: "--intermediate-storage-path",
              description:
                "If transferring between filesystems, specify the path to a folder in a Google Cloud Storage bucket (gs://example-bucket/example-folder) to use as intermediary storage. Recommended: Use an empty folder reserved for this transfer job to ensure transferred data doesn't interact with any of your existing Cloud Storage data",
              args: {
                name: "INTERMEDIATE_STORAGE_PATH",
                description: "String",
              },
            },
            {
              name: "--log-action-states",
              description:
                "The states in which the actions specified in --log-actions are logged. Separate multiple states with a comma, omitting the space after the comma (e.g., --log-action-states=succeeded,failed). _LOG_ACTION_STATES_ must be one of: *failed*, *skipped*, *succeeded*",
              args: {
                name: "LOG_ACTION_STATES",
                description: "List",
              },
            },
            {
              name: "--log-actions",
              description:
                "Define the transfer operation actions to report in logs. Separate multiple actions with commas, omitting spaces after the commas (e.g., --log-actions=find,copy). _LOG_ACTIONS_ must be one of: *copy*, *delete*, *find*",
              args: {
                name: "LOG_ACTIONS",
                description: "List",
              },
            },
            optLogHttp,
            {
              name: "--manifest-file",
              description:
                "Path to a .csv file containing a list of files to transfer from your source. For manifest files in Cloud Storage, specify the absolute path (e.g., `gs://mybucket/manifest.csv`). For manifest files stored in a source or destination POSIX file system, provide the relative path (e.g., `source://path/to/manfest.csv` or `destination://path/to/manifest.csv`). For manifest file formatting, see https://cloud.google.com/storage-transfer/docs/manifest",
              args: {
                name: "MANIFEST_FILE",
                description: "String",
                template: "filepaths",
              },
            },
            {
              name: "--no-clear-custom-storage-class",
              description: "Reverts to using destination default storage class",
              hidden: true,
            },
            {
              name: "--no-clear-delete-from",
              description:
                "Remove a specified deletion option from the transfer job. If this flag is specified, the transfer job won't delete any data from your source or destination",
              hidden: true,
            },
            {
              name: "--no-clear-description",
              description: "Remove the description from the transfer job",
              hidden: true,
            },
            {
              name: "--no-clear-destination-agent-pool",
              description:
                "Remove the destination agent pool from the transfer job",
              hidden: true,
            },
            {
              name: "--no-clear-event-stream",
              description:
                "Remove the job's entire event stream configuration by clearing all scheduling all event stream flags. The job will no longer listen for events unless a new configuratin is specified",
              hidden: true,
            },
            {
              name: "--no-clear-exclude-prefixes",
              description:
                "Remove the list of object prefixes to exclude from the object conditions",
              hidden: true,
            },
            {
              name: "--no-clear-include-modified-after-absolute",
              description:
                "Remove the minimum modification datetime from the object conditions",
              hidden: true,
            },
            {
              name: "--no-clear-include-modified-after-relative",
              description:
                "Remove the minimum duration since modification from the object conditions",
              hidden: true,
            },
            {
              name: "--no-clear-include-modified-before-absolute",
              description:
                "Remove the maximum modification datetime from the object conditions",
              hidden: true,
            },
            {
              name: "--no-clear-include-modified-before-relative",
              description:
                "Remove the maximum duration since modification from the object conditions",
              hidden: true,
            },
            {
              name: "--no-clear-include-prefixes",
              description:
                "Remove the list of object prefixes to include from the object conditions",
              hidden: true,
            },
            {
              name: "--no-clear-intermediate-storage-path",
              description:
                "Remove the intermediate storage path from the transfer job",
              hidden: true,
            },
            {
              name: "--no-clear-log-config",
              description: "Remove the job's full logging config",
              hidden: true,
            },
            {
              name: "--no-clear-manifest-file",
              description: "Remove the manifest file from the transfer job",
              hidden: true,
            },
            {
              name: "--no-clear-notification-config",
              description:
                "Remove the job's full notification configuration to no longer receive notifications via Cloud Pub/Sub",
              hidden: true,
            },
            {
              name: "--no-clear-notification-event-types",
              description:
                "Remove the event types from the notification config",
              hidden: true,
            },
            {
              name: "--no-clear-preserve-metadata",
              description:
                "Skips preserving optional metadata fields of objects being transferred",
              hidden: true,
            },
            {
              name: "--no-clear-s3-cloudfront-domain",
              description: "Removes S3 CloudFront domain",
              hidden: true,
            },
            {
              name: "--no-clear-schedule",
              description:
                "Remove the job's entire schedule by clearing all scheduling flags. The job will no longer run unless an operation is manually started or a new schedule is specified",
              hidden: true,
            },
            {
              name: "--no-clear-source-agent-pool",
              description: "Remove the source agent pool from the transfer job",
              hidden: true,
            },
            {
              name: "--no-clear-source-auth-method",
              description: "Removes source auth method",
              hidden: true,
            },
            {
              name: "--no-clear-source-creds-file",
              description: "Remove the source creds file from the transfer job",
              hidden: true,
            },
            {
              name: "--no-clear-source-endpoint",
              description: "Removes source endpoint",
              hidden: true,
            },
            {
              name: "--no-clear-source-list-api",
              description: "Removes source list API",
              hidden: true,
            },
            {
              name: "--no-clear-source-network-protocol",
              description: "Removes source network protocol",
              hidden: true,
            },
            {
              name: "--no-clear-source-request-model",
              description: "Removes source request model",
              hidden: true,
            },
            {
              name: "--no-clear-source-signing-region",
              description: "Removes source signing region",
              hidden: true,
            },
            {
              name: "--no-enable-posix-transfer-logs",
              description:
                "Sets whether to generate logs for transfers with a POSIX filesystem source. This setting will later be merged with other log configurations",
            },
            {
              name: "--notification-event-types",
              description:
                "Define which change of transfer operation status will trigger Pub/Sub notifications. Choices include 'success', 'failed', 'aborted'. To trigger notifications for all three status changes, you can leave this flag unspecified as long as you've specified a topic for the --notification-pubsub-topic flag. _EVENT_TYPES_ must be one of: *success*, *failed*, *aborted*",
              args: {
                name: "EVENT_TYPES",
                description: "List",
              },
            },
            {
              name: "--notification-payload-format",
              description:
                "If 'none', no transfer operation details are included with notifications. If 'json', a json representation of the relevant transfer operation is included in notification messages (e.g., to see errors after an operation fails). _NOTIFICATION_PAYLOAD_FORMAT_ must be one of: *json*, *none*",
              args: {
                name: "NOTIFICATION_PAYLOAD_FORMAT",
                description: "String",
                suggestions: ["json", "none"],
              },
            },
            {
              name: "--notification-pubsub-topic",
              description: "Pub/Sub topic used for notifications",
              args: {
                name: "NOTIFICATION_PUBSUB_TOPIC",
                description: "String",
              },
            },
            {
              name: "--overwrite-when",
              description:
                "Determine when destination objects are overwritten by source objects. Options include: - 'different' - Overwrites files with the same name if the contents are different (e.g., if etags or checksums don't match) - 'always' - Overwrite destination file whenever source file has the same name -- even if they're identical - 'never' - Never overwrite destination file when source file has the same name",
              args: {
                name: "OVERWRITE_WHEN",
                description: "String",
                suggestions: ["always", "different", "never"],
              },
            },
            {
              name: "--preserve-metadata",
              description:
                "Specify object metadata values that can optionally be preserved. Example: --preserve-metadata=storage-class,uid",
              args: {
                name: "METADATA_FIELDS",
                description: "List",
              },
            },
            optProject,
            optQuiet,
            {
              name: "--s3-cloudfront-domain",
              description:
                "For transfers from S3, optionally route egress traffic through a CloudFront instance. Supply the endpoint of the CloudFront instance: https://example.cloudfront.net. See documentation (https://cloud.google.com/storage-transfer/docs/s3-cloudfront) for more information",
              args: {
                name: "S3_CLOUDFRONT_DOMAIN",
                description: "String",
              },
            },
            {
              name: "--schedule-repeats-every",
              description:
                "Set the frequency of the job using the absolute duration format (e.g., 1 month is p1m; 1 hour 30 minutes is 1h30m). If not set, the job will run once",
              args: {
                name: "SCHEDULE_REPEATS_EVERY",
              },
            },
            {
              name: "--schedule-repeats-until",
              description:
                "Set when the job will stop recurring using the %Y-%m-%dT%H:%M:%S%z datetime format (e.g., 2020-04-12T06:42:12+04:00). If specified, you must also include a value for the --schedule-repeats-every flag. If not specified, the job will continue to repeat as specified in its repeat-every field unless the job is manually disabled or you add this field later",
              args: {
                name: "SCHEDULE_REPEATS_UNTIL",
              },
            },
            {
              name: "--schedule-starts",
              description:
                "Set when the job will start using the %Y-%m-%dT%H:%M:%S%z datetime format (e.g., 2020-04-12T06:42:12+04:00). If not set, the job will run upon the successful submission of the create job command unless the --do-not-run flag is included",
              args: {
                name: "SCHEDULE_STARTS",
              },
            },
            {
              name: "--source",
              description:
                "The source of your data. Available sources and formatting information:",
              args: {
                name: "SOURCE",
                description: "String",
              },
            },
            {
              name: "--source-agent-pool",
              description:
                "If using a POSIX filesystem source, specify the ID of the agent pool associated with source filesystem",
              args: {
                name: "SOURCE_AGENT_POOL",
                description: "String",
              },
            },
            {
              name: "--source-auth-method",
              description:
                "For transfers from S3-compatible sources, choose a process for adding authentication information to S3 API requests. Refer to AWS's SigV4 (https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html) and SigV2 (https://docs.aws.amazon.com/general/latest/gr/signature-version-2.html) documentation for more information. _SOURCE_AUTH_METHOD_ must be one of: *AWS_SIGNATURE_V2*, *AWS_SIGNATURE_V4*",
              args: {
                name: "SOURCE_AUTH_METHOD",
                description: "String",
                suggestions: ["AWS_SIGNATURE_V2", "AWS_SIGNATURE_V4"],
              },
            },
            {
              name: "--source-creds-file",
              description:
                'Path to a local file on your machine that includes credentials for an Amazon S3 or Azure Blob Storage source (not required for Google Cloud Storage sources). If not specified for an S3 source, gcloud will check your system for an AWS config file. However, this flag must be specified to use AWS\'s "role_arn" auth service. For formatting, see:',
              args: {
                name: "SOURCE_CREDS_FILE",
                description: "String",
                template: "filepaths",
              },
            },
            {
              name: "--source-endpoint",
              description:
                "For transfers from S3-compatible sources, specify your storage system's endpoint. Check with your provider for formatting (ex. s3.us-east-1.amazonaws.com for Amazon S3)",
              args: {
                name: "SOURCE_ENDPOINT",
                description: "String",
              },
            },
            {
              name: "--source-list-api",
              description:
                "For transfers from S3-compatible sources, choose the version of the S3 listing API for returning objects from the bucket. Refer to AWS's ListObjectsV2 (https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListObjectsV2.html) and ListObjects (https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListObjects.html) documentation for more information. _SOURCE_LIST_API_ must be one of: *LIST_OBJECTS*, *LIST_OBJECTS_V2*",
              args: {
                name: "SOURCE_LIST_API",
                description: "String",
                suggestions: ["LIST_OBJECTS", "LIST_OBJECTS_V2"],
              },
            },
            {
              name: "--source-network-protocol",
              description:
                "For transfers from S3-compatible sources, choose the network protocol agents should use for this job. _SOURCE_NETWORK_PROTOCOL_ must be one of: *HTTP*, *HTTPS*",
              args: {
                name: "SOURCE_NETWORK_PROTOCOL",
                description: "String",
                suggestions: ["HTTP", "HTTPS"],
              },
            },
            {
              name: "--source-request-model",
              description:
                "For transfers from S3-compatible sources, choose which addressing style to use. Determines if the bucket name is in the hostname or part of the URL. For example, https://s3.region.amazonaws.com/bucket-name/key-name for path style and Ex. https://bucket-name.s3.region.amazonaws.com/key-name for virtual-hosted style. _SOURCE_REQUEST_MODEL_ must be one of: *PATH_STYLE*, *VIRTUAL_HOSTED_STYLE*",
              args: {
                name: "SOURCE_REQUEST_MODEL",
                description: "String",
                suggestions: ["PATH_STYLE", "VIRTUAL_HOSTED_STYLE"],
              },
            },
            {
              name: "--source-signing-region",
              description:
                "For transfers from S3-compatible sources, specify a region for signing requests. You can leave this unspecified if your storage provider doesn't require a signing region",
              args: {
                name: "SOURCE_SIGNING_REGION",
                description: "String",
              },
            },
            {
              name: "--status",
              description:
                "Specify this flag to change the status of the job. Options include 'enabled', 'disabled', 'deleted'. _STATUS_ must be one of: *deleted*, *disabled*, *enabled*",
              args: {
                name: "STATUS",
                description: "String",
                suggestions: ["deleted", "disabled", "enabled"],
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "NAME",
            description: "Name of the transfer job you'd like to update",
          },
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
      name: "operations",
      description: "Manage transfer operations",
      subcommands: [
        {
          name: "cancel",
          description: "Cancel a transfer operation",
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
          args: {
            name: "NAME",
            description:
              "The name of the transfer operation you want to cancel",
          },
        },
        {
          name: "describe",
          description:
            "Get configuration and latest transfer operation details",
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
          args: {
            name: "NAME",
            description: "The name of the operation you want to describe",
          },
        },
        {
          name: "list",
          description: "List Transfer Service transfer operations",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            {
              name: "--expand-table",
              description:
                "Include additional table columns (operation name, start time, status, data copied, status, has errors, job name) in command output. Tip: increase the size of your terminal before running the command",
            },
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            {
              name: "--job-names",
              description:
                "The names of the jobs whose operations you want to list. Separate multiple job names with commas (e.g., --job-names=foo,bar). If not specified, operations for all jobs are listed",
              args: {
                name: "JOB_NAMES",
                description: "List",
              },
            },
            optLimit,
            optLogHttp,
            {
              name: "--no-expand-table",
              description:
                "Include additional table columns (operation name, start time, status, data copied, status, has errors, job name) in command output. Tip: increase the size of your terminal before running the command",
              hidden: true,
            },
            {
              name: "--operation-names",
              description:
                "The names of operations you want to list. Separate multiple operation names with commas (e.g., --operation-names-name=foo,bar). If not specified, all operations are listed",
              args: {
                name: "OPERATION_NAMES",
                description: "List",
              },
            },
            {
              name: "--operation-statuses",
              description:
                "List only transfer operations with the statuses you specify. Options include 'in_progress', 'paused', 'success','failed', 'aborted'. Separate multiple statuses with commas (e.g., --operation-statuses=failed,aborted)",
              args: {
                name: "OPERATION_STATUSES",
                description: "List",
              },
            },
            optPageSize,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
        {
          name: "monitor",
          description: "Track progress in real time for a transfer operation",
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
          args: {
            name: "NAME",
            description: "The name of the operation you want to monitor",
          },
        },
        {
          name: "pause",
          description: "Pause a currently running transfer operation",
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
          args: {
            name: "NAME",
            description:
              "The name of the paused transfer operation you want to cancel",
          },
        },
        {
          name: "resume",
          description: "Resume a currently paused transfer operation",
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
          args: {
            name: "NAME",
            description:
              "The name of the paused transfer operation you want to resume",
          },
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
