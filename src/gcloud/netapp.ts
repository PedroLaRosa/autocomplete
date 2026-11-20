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

const optAsync: Fig.Option = {
  name: "--async",
  description:
    "Return immediately, without waiting for the operation in progress to complete",
};

const optBackupVault: Fig.Option = {
  name: "--backup-vault",
  description:
    "ID of the backup_vault or fully qualified identifier for the backup_vault",
  args: {
    name: "BACKUP_VAULT",
    description: "String",
  },
};

const optBackupVault2: Fig.Option = {
  name: ["--backup-vault", "--backup_vault"],
  description: "The Backup Vault of the backup",
  args: {
    name: "BACKUP_VAULT",
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

const optClearLabels: Fig.Option = {
  name: "--clear-labels",
  description:
    "Remove all labels. If `--update-labels` is also specified then `--clear-labels` is applied first",
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

const optDescription: Fig.Option = {
  name: "--description",
  description: "A description of the Cloud NetApp Backup Vault",
  args: {
    name: "DESCRIPTION",
    description: "String",
  },
};

const optFilter: Fig.Option = {
  name: "--filter",
  description:
    "Apply a Boolean filter _EXPRESSION_ to each resource item to be listed. If the expression evaluates `True`, then that item is listed. For more details and examples of filter expressions, run $ gcloud topic filters. This flag interacts with other flags that are applied in this order: *--flatten*, *--sort-by*, *--filter*, *--limit*",
  args: {
    name: "EXPRESSION",
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

const optLabels: Fig.Option = {
  name: "--labels",
  description: "List of label KEY=VALUE pairs to add",
  args: {
    name: "KEY=VALUE",
    description: "Dict",
  },
};

const optLimit: Fig.Option = {
  name: "--limit",
  description:
    "Maximum number of resources to list. The default is *unlimited*. This flag interacts with other flags that are applied in this order: *--flatten*, *--sort-by*, *--filter*, *--limit*",
  args: {
    name: "LIMIT",
  },
};

const optLocation: Fig.Option = {
  name: "--location",
  description:
    "ID of the location or fully qualified identifier for the location",
  args: {
    name: "LOCATION",
    description: "String",
  },
};

const optLocation2: Fig.Option = {
  name: "--location",
  description: "The location of the active_directory",
  args: {
    name: "LOCATION",
    description: "String",
  },
};

const optLocation3: Fig.Option = {
  name: "--location",
  description: "The location of the backup",
  args: {
    name: "LOCATION",
    description: "String",
  },
};

const optLocation4: Fig.Option = {
  name: "--location",
  description: "The location of the backup_policy",
  args: {
    name: "LOCATION",
    description: "String",
  },
};

const optLocation5: Fig.Option = {
  name: "--location",
  description: "The location of the backup_vault",
  args: {
    name: "LOCATION",
    description: "String",
  },
};

const optLocation6: Fig.Option = {
  name: "--location",
  description: "The location of the host_group",
  args: {
    name: "LOCATION",
    description: "String",
  },
};

const optLocation7: Fig.Option = {
  name: "--location",
  description: "The location of the kms_config",
  args: {
    name: "LOCATION",
    description: "String",
  },
};

const optLocation8: Fig.Option = {
  name: "--location",
  description: "The location of the quota_rule",
  args: {
    name: "LOCATION",
    description: "String",
  },
};

const optLocation9: Fig.Option = {
  name: "--location",
  description: "The location of the replication",
  args: {
    name: "LOCATION",
    description: "String",
  },
};

const optLocation10: Fig.Option = {
  name: "--location",
  description: "The location of the snapshot",
  args: {
    name: "LOCATION",
    description: "String",
  },
};

const optLocation11: Fig.Option = {
  name: "--location",
  description: "The location of the storage_pool",
  args: {
    name: "LOCATION",
    description: "String",
  },
};

const optLocation12: Fig.Option = {
  name: "--location",
  description: "The location of the volume",
  args: {
    name: "LOCATION",
    description: "String",
  },
};

const optLogHttp: Fig.Option = {
  name: "--log-http",
  description:
    "Log all HTTP server requests and responses to stderr. Overrides the default *core/log_http* property value for this command invocation",
};

const optNoAsync: Fig.Option = {
  name: "--no-async",
  description:
    "Return immediately, without waiting for the operation in progress to complete",
  hidden: true,
};

const optNoClearLabels: Fig.Option = {
  name: "--no-clear-labels",
  description:
    "Remove all labels. If `--update-labels` is also specified then `--clear-labels` is applied first",
  hidden: true,
};

const optNoUri: Fig.Option = {
  name: "--no-uri",
  description:
    "Print a list of resource URIs instead of the default output, and change the command output to a list of URIs. If this flag is used with *--format*, the formatting is applied on this URI list. To display URIs alongside other keys instead, use the *uri()* transform",
  hidden: true,
};

const optPageSize: Fig.Option = {
  name: "--page-size",
  description:
    "Some services group resource list output into pages. This flag specifies the maximum number of resources per page. The default is determined by the service if it supports paging, otherwise it is *unlimited* (no paging). Paging may be applied before or after *--filter* and *--limit* depending on the service",
  args: {
    name: "PAGE_SIZE",
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

const optRemoveLabels: Fig.Option = {
  name: "--remove-labels",
  description:
    "List of label keys to remove. If a label does not exist it is silently ignored. If `--update-labels` is also specified then `--update-labels` is applied first",
  args: {
    name: "KEY",
    description: "List",
  },
};

const optSortBy: Fig.Option = {
  name: "--sort-by",
  description:
    "Comma-separated list of resource field key names to sort by. The default order is ascending. Prefix a field with ``~'' for descending order on that field. This flag interacts with other flags that are applied in this order: *--flatten*, *--sort-by*, *--filter*, *--limit*",
  args: {
    name: "FIELD",
    description: "List",
  },
};

const optSourceSnapshot: Fig.Option = {
  name: "--source-snapshot",
  description:
    "ID of the snapshot or fully qualified identifier for the snapshot",
  priority: 100,
  args: {
    name: "SOURCE_SNAPSHOT",
    description: "String",
  },
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

const optUpdateLabels: Fig.Option = {
  name: "--update-labels",
  description:
    "List of label KEY=VALUE pairs to update. If a label exists, its value is modified. Otherwise, a new label is created",
  args: {
    name: "KEY=VALUE",
    description: "Dict",
  },
};

const optUri: Fig.Option = {
  name: "--uri",
  description:
    "Print a list of resource URIs instead of the default output, and change the command output to a list of URIs. If this flag is used with *--format*, the formatting is applied on this URI list. To display URIs alongside other keys instead, use the *uri()* transform",
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

const optVolume: Fig.Option = {
  name: "--volume",
  description: "ID of the volume or fully qualified identifier for the volume",
  args: {
    name: "VOLUME",
    description: "String",
  },
};

const completionSpec: Fig.Spec = {
  name: "netapp",
  description: "Create and manipulate Cloud NetApp Files resources",
  subcommands: [
    {
      name: "active-directories",
      description: "Create and manage Cloud NetApp Active Directories",
      subcommands: [
        {
          name: "create",
          description: "Create a Cloud NetApp Active Directory",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--administrators",
              description:
                "Members of the Active Directory built-in Administrators group",
              args: {
                name: "ADMINISTRATOR",
                description: "List",
              },
            },
            optAsync,
            {
              name: "--backup-operators",
              description:
                "Users to be added to the Built-in Backup Operator Active Directory group",
              args: {
                name: "BACKUP_OPERATOR",
                description: "List",
              },
            },
            optBillingProject,
            optConfiguration,
            {
              name: "--description",
              description: "A description of the Cloud NetApp Active Directory",
              args: {
                name: "DESCRIPTION",
                description: "String",
              },
            },
            {
              name: "--dns",
              description:
                "A comma separated list of DNS server IP addresses for the Active Directory domain",
              priority: 100,
              args: {
                name: "DNS",
                description: "String",
              },
            },
            {
              name: "--domain",
              description: "The Active Directory domain",
              priority: 100,
              args: {
                name: "DOMAIN",
                description: "String",
              },
            },
            {
              name: "--enable-aes",
              description:
                "The Boolean value indiciating whether AES encryption will be enabled for SMB communication",
              args: {
                name: "ENABLE_AES",
              },
            },
            {
              name: "--enable-ldap-signing",
              description:
                "Boolean flag that specifies whether or not LDAP traffic needs to be signed",
              args: {
                name: "ENABLE_LDAP_SIGNING",
              },
            },
            {
              name: "--encrypt-dc-connections",
              description:
                "Boolean flag that specifies whether traffic between SMB server to Domain Controller (DC) will be encrypted",
              args: {
                name: "ENCRYPT_DC_CONNECTIONS",
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
              name: "--kdc-hostname",
              description: "Name of the Active Directory machine",
              args: {
                name: "KDC_HOSTNAME",
                description: "String",
              },
            },
            {
              name: "--kdc-ip",
              description:
                "KDC server IP address for the Active Directory machine",
              args: {
                name: "KDC_IP",
                description: "String",
              },
            },
            optLabels,
            optLocation2,
            optLogHttp,
            {
              name: "--net-bios-prefix",
              description: "NetBIOS prefix name of the server",
              priority: 100,
              args: {
                name: "NET_BIOS_PREFIX",
                description: "String",
              },
            },
            {
              name: "--nfs-users-with-ldap",
              description:
                "Boolean flag that allows access to local users and LDAP users. If access is needed only for LDAP users, it has to be disabled",
              args: {
                name: "NFS_USERS_WITH_LDAP",
              },
            },
            optNoAsync,
            {
              name: "--organizational-unit",
              description:
                "The Organizational Unit (OU) within the Windows Active Directory the user belongs to",
              args: {
                name: "ORGANIZATIONAL_UNIT",
                description: "String",
              },
            },
            {
              name: "--password",
              description:
                "Password of the Active Directory domain administrator",
              priority: 100,
              args: {
                name: "PASSWORD",
                description: "String",
              },
            },
            optProject,
            optQuiet,
            {
              name: "--security-operators",
              description: "Domain users to be given the Security privilege",
              args: {
                name: "SECURITY_OPERATOR",
                description: "List",
              },
            },
            {
              name: "--site",
              description:
                "The Active Directory site the service will limit Domain Controller discovery to",
              args: {
                name: "SITE",
                description: "String",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            {
              name: "--username",
              description:
                "Username of the Active Directory domain administrator",
              priority: 100,
              args: {
                name: "USERNAME",
                description: "String",
              },
            },
            optVerbosity,
          ],
          args: {
            name: "ACTIVE_DIRECTORY",
            description:
              "ID of the active_directory or fully qualified identifier for the active_directory",
          },
        },
        {
          name: "delete",
          description: "Delete a Cloud NetApp Active Directory",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
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
            optLocation2,
            optLogHttp,
            optNoAsync,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "ACTIVE_DIRECTORY",
            description:
              "ID of the active_directory or fully qualified identifier for the active_directory",
          },
        },
        {
          name: "describe",
          description: "Show metadata for a Cloud NetApp Active Directory",
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
            optLocation2,
            optLogHttp,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "ACTIVE_DIRECTORY",
            description:
              "ID of the active_directory or fully qualified identifier for the active_directory",
          },
        },
        {
          name: "list",
          description: "List Cloud NetApp Active Directories",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            optFilter,
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optLimit,
            optLocation,
            optLogHttp,
            optNoUri,
            optPageSize,
            optProject,
            optQuiet,
            optSortBy,
            optTraceToken,
            optUri,
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
        {
          name: "update",
          description: "Update a Cloud NetApp Active Directory",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--administrators",
              description:
                "Members of the Active Directory built-in Administrators group",
              args: {
                name: "ADMINISTRATOR",
                description: "List",
              },
            },
            optAsync,
            {
              name: "--backup-operators",
              description:
                "Users to be added to the Built-in Backup Operator Active Directory group",
              args: {
                name: "BACKUP_OPERATOR",
                description: "List",
              },
            },
            optBillingProject,
            optClearLabels,
            optConfiguration,
            {
              name: "--description",
              description: "A description of the Cloud NetApp Active Directory",
              args: {
                name: "DESCRIPTION",
                description: "String",
              },
            },
            {
              name: "--dns",
              description:
                "A comma separated list of DNS server IP addresses for the Active Directory domain",
              priority: 100,
              args: {
                name: "DNS",
                description: "String",
              },
            },
            {
              name: "--domain",
              description: "The Active Directory domain",
              priority: 100,
              args: {
                name: "DOMAIN",
                description: "String",
              },
            },
            {
              name: "--enable-aes",
              description:
                "The Boolean value indiciating whether AES encryption will be enabled for SMB communication",
              args: {
                name: "ENABLE_AES",
              },
            },
            {
              name: "--enable-ldap-signing",
              description:
                "Boolean flag that specifies whether or not LDAP traffic needs to be signed",
              args: {
                name: "ENABLE_LDAP_SIGNING",
              },
            },
            {
              name: "--encrypt-dc-connections",
              description:
                "Boolean flag that specifies whether traffic between SMB server to Domain Controller (DC) will be encrypted",
              args: {
                name: "ENCRYPT_DC_CONNECTIONS",
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
              name: "--kdc-hostname",
              description: "Name of the Active Directory machine",
              args: {
                name: "KDC_HOSTNAME",
                description: "String",
              },
            },
            {
              name: "--kdc-ip",
              description:
                "KDC server IP address for the Active Directory machine",
              args: {
                name: "KDC_IP",
                description: "String",
              },
            },
            optLocation2,
            optLogHttp,
            {
              name: "--net-bios-prefix",
              description: "NetBIOS prefix name of the server",
              priority: 100,
              args: {
                name: "NET_BIOS_PREFIX",
                description: "String",
              },
            },
            {
              name: "--nfs-users-with-ldap",
              description:
                "Boolean flag that allows access to local users and LDAP users. If access is needed only for LDAP users, it has to be disabled",
              args: {
                name: "NFS_USERS_WITH_LDAP",
              },
            },
            optNoAsync,
            optNoClearLabels,
            {
              name: "--organizational-unit",
              description:
                "The Organizational Unit (OU) within the Windows Active Directory the user belongs to",
              args: {
                name: "ORGANIZATIONAL_UNIT",
                description: "String",
              },
            },
            {
              name: "--password",
              description:
                "Password of the Active Directory domain administrator",
              priority: 100,
              args: {
                name: "PASSWORD",
                description: "String",
              },
            },
            optProject,
            optQuiet,
            optRemoveLabels,
            {
              name: "--security-operators",
              description: "Domain users to be given the Security privilege",
              args: {
                name: "SECURITY_OPERATOR",
                description: "List",
              },
            },
            {
              name: "--site",
              description:
                "The Active Directory site the service will limit Domain Controller discovery to",
              args: {
                name: "SITE",
                description: "String",
              },
            },
            optTraceToken,
            optUpdateLabels,
            optUserOutputEnabled,
            {
              name: "--username",
              description:
                "Username of the Active Directory domain administrator",
              priority: 100,
              args: {
                name: "USERNAME",
                description: "String",
              },
            },
            optVerbosity,
          ],
          args: {
            name: "ACTIVE_DIRECTORY",
            description:
              "ID of the active_directory or fully qualified identifier for the active_directory",
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
      name: "backup-policies",
      description: "Create and manage Cloud NetApp Backup Policies",
      subcommands: [
        {
          name: "create",
          description: "Create a Cloud NetApp Backup Policy",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            optConfiguration,
            {
              name: "--daily-backup-limit",
              description:
                "Maximum number of daily backups to keep. Note that the minimum daily backup limit is 2",
              args: {
                name: "DAILY_BACKUP_LIMIT",
              },
            },
            {
              name: "--description",
              description: "A description of the Cloud NetApp Backup Policy",
              args: {
                name: "DESCRIPTION",
                description: "String",
              },
            },
            {
              name: "--enabled",
              description:
                "The Boolean value indiciating whether backups are made automatically according to the schedules. If enabled, this will be applied to all volumes that have this backup policy attached and enforced on the volume level. If not specified, the default is true",
              args: {
                name: "ENABLED",
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
            optLabels,
            optLocation4,
            optLogHttp,
            {
              name: "--monthly-backup-limit",
              description:
                "Number of monthly backups to keep. Note that the sum of daily, weekly and monthly backups should be greater than 1",
              args: {
                name: "MONTHLY_BACKUP_LIMIT",
              },
            },
            optNoAsync,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
            {
              name: "--weekly-backup-limit",
              description:
                "Number of weekly backups to keep. Note that the sum of daily, weekly and monthly backups should be greater than 1",
              args: {
                name: "WEEKLY_BACKUP_LIMIT",
              },
            },
          ],
          args: {
            name: "BACKUP_POLICY",
            description:
              "ID of the backup_policy or fully qualified identifier for the backup_policy",
          },
        },
        {
          name: "delete",
          description: "Delete a Cloud NetApp Volumes Backup Policy",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
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
            optLocation4,
            optLogHttp,
            optNoAsync,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "BACKUP_POLICY",
            description:
              "ID of the backup_policy or fully qualified identifier for the backup_policy",
          },
        },
        {
          name: "describe",
          description: "Show metadata for a Cloud NetApp Volumes Backup Policy",
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
            optLocation4,
            optLogHttp,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "BACKUP_POLICY",
            description:
              "ID of the backup_policy or fully qualified identifier for the backup_policy",
          },
        },
        {
          name: "list",
          description: "List Cloud NetApp Volumes Backup Policies",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            optFilter,
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optLimit,
            optLocation,
            optLogHttp,
            optNoUri,
            optPageSize,
            optProject,
            optQuiet,
            optSortBy,
            optTraceToken,
            optUri,
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
        {
          name: "update",
          description: "Update a Cloud NetApp Volumes Backup Policies",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            optClearLabels,
            optConfiguration,
            {
              name: "--daily-backup-limit",
              description:
                "Maximum number of daily backups to keep. Note that the minimum daily backup limit is 2",
              args: {
                name: "DAILY_BACKUP_LIMIT",
              },
            },
            {
              name: "--description",
              description: "A description of the Cloud NetApp Backup Policy",
              args: {
                name: "DESCRIPTION",
                description: "String",
              },
            },
            {
              name: "--enabled",
              description:
                "The Boolean value indiciating whether backups are made automatically according to the schedules. If enabled, this will be applied to all volumes that have this backup policy attached and enforced on the volume level. If not specified, the default is true",
              args: {
                name: "ENABLED",
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
            optLocation4,
            optLogHttp,
            {
              name: "--monthly-backup-limit",
              description:
                "Number of monthly backups to keep. Note that the sum of daily, weekly and monthly backups should be greater than 1",
              args: {
                name: "MONTHLY_BACKUP_LIMIT",
              },
            },
            optNoAsync,
            optNoClearLabels,
            optProject,
            optQuiet,
            optRemoveLabels,
            optTraceToken,
            optUpdateLabels,
            optUserOutputEnabled,
            optVerbosity,
            {
              name: "--weekly-backup-limit",
              description:
                "Number of weekly backups to keep. Note that the sum of daily, weekly and monthly backups should be greater than 1",
              args: {
                name: "WEEKLY_BACKUP_LIMIT",
              },
            },
          ],
          args: {
            name: "BACKUP_POLICY",
            description:
              "ID of the backup_policy or fully qualified identifier for the backup_policy",
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
      name: "backup-vaults",
      description: "Create and manage Cloud NetApp Backup Vaults",
      subcommands: [
        {
          name: "backups",
          description: "Create and manage Cloud NetApp Backups",
          subcommands: [
            {
              name: "create",
              description: "Create a Cloud NetApp Backup",
              options: [
                optAccessTokenFile,
                optAccount,
                optAsync,
                optBackupVault,
                optBillingProject,
                optConfiguration,
                optDescription,
                optFlagsFile,
                optFlatten,
                optFormat,
                {
                  name: "--help",
                  description: "Display detailed help",
                },
                optImpersonateServiceAccount,
                optLabels,
                optLocation3,
                optLogHttp,
                optNoAsync,
                optProject,
                optQuiet,
                optSourceSnapshot,
                {
                  name: "--source-volume",
                  description:
                    "ID of the volume or fully qualified identifier for the volume",
                  args: {
                    name: "SOURCE_VOLUME",
                    description: "String",
                  },
                },
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "BACKUP",
                description:
                  "ID of the backup or fully qualified identifier for the backup",
              },
            },
            {
              name: "delete",
              description: "Delete a Cloud NetApp Backup",
              options: [
                optAccessTokenFile,
                optAccount,
                optAsync,
                optBackupVault,
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
                optLocation3,
                optLogHttp,
                optNoAsync,
                optProject,
                optQuiet,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "BACKUP",
                description:
                  "ID of the backup or fully qualified identifier for the backup",
              },
            },
            {
              name: "describe",
              description: "Describe a Cloud NetApp Backup",
              options: [
                optAccessTokenFile,
                optAccount,
                optBackupVault,
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
                optLocation3,
                optLogHttp,
                optProject,
                optQuiet,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "BACKUP",
                description:
                  "ID of the backup or fully qualified identifier for the backup",
              },
            },
            {
              name: "list",
              description: "List Cloud NetApp Backups",
              options: [
                optAccessTokenFile,
                optAccount,
                optBackupVault,
                optBillingProject,
                optConfiguration,
                optFilter,
                optFlagsFile,
                optFlatten,
                optFormat,
                {
                  name: "--help",
                  description: "Display detailed help",
                },
                optImpersonateServiceAccount,
                optLimit,
                optLocation,
                optLogHttp,
                optNoUri,
                optPageSize,
                optProject,
                optQuiet,
                optSortBy,
                optTraceToken,
                optUri,
                optUserOutputEnabled,
                optVerbosity,
              ],
            },
            {
              name: "update",
              description: "Update a Cloud NetApp Backup",
              options: [
                optAccessTokenFile,
                optAccount,
                optAsync,
                optBackupVault,
                optBillingProject,
                optClearLabels,
                optConfiguration,
                {
                  name: "--description",
                  description: "A description of the Cloud NetApp Backup",
                  args: {
                    name: "DESCRIPTION",
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
                optLocation3,
                optLogHttp,
                optNoAsync,
                optNoClearLabels,
                optProject,
                optQuiet,
                optRemoveLabels,
                optTraceToken,
                optUpdateLabels,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "BACKUP",
                description:
                  "ID of the backup or fully qualified identifier for the backup",
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
          name: "create",
          description: "Create a Cloud NetApp Backup Vault",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            {
              name: "--backup-retention-policy",
              description: "Backup Retention Policy of the Backup Vault",
              args: {
                name: "BACKUP_RETENTION_POLICY",
                description: "Dict",
              },
            },
            optBillingProject,
            optConfiguration,
            optDescription,
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            {
              name: "--kms-config",
              description:
                "ID of the kms_config or fully qualified identifier for the kms_config",
              priority: 100,
              args: {
                name: "KMS_CONFIG",
                description: "String",
              },
            },
            optLabels,
            optLocation5,
            optLogHttp,
            optNoAsync,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "BACKUP_VAULT",
            description:
              "ID of the backup_vault or fully qualified identifier for the backup_vault",
          },
        },
        {
          name: "delete",
          description: "Delete a Cloud NetApp Volumes Backup Vault",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
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
            optLocation5,
            optLogHttp,
            optNoAsync,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "BACKUP_VAULT",
            description:
              "ID of the backup_vault or fully qualified identifier for the backup_vault",
          },
        },
        {
          name: "describe",
          description: "Show metadata for a Cloud NetApp Volumes Backup Vault",
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
            optLocation5,
            optLogHttp,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "BACKUP_VAULT",
            description:
              "ID of the backup_vault or fully qualified identifier for the backup_vault",
          },
        },
        {
          name: "list",
          description: "List Cloud NetApp Volumes Backup Vaults",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            optFilter,
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optLimit,
            optLocation,
            optLogHttp,
            optNoUri,
            optPageSize,
            optProject,
            optQuiet,
            optSortBy,
            optTraceToken,
            optUri,
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
        {
          name: "update",
          description: "Update a Cloud NetApp Volumes Backup Vault",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            {
              name: "--backup-retention-policy",
              description: "Backup Retention Policy of the Backup Vault",
              args: {
                name: "BACKUP_RETENTION_POLICY",
                description: "Dict",
              },
            },
            optBillingProject,
            optClearLabels,
            optConfiguration,
            optDescription,
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optLocation5,
            optLogHttp,
            optNoAsync,
            optNoClearLabels,
            optProject,
            optQuiet,
            optRemoveLabels,
            optTraceToken,
            optUpdateLabels,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "BACKUP_VAULT",
            description:
              "ID of the backup_vault or fully qualified identifier for the backup_vault",
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
      name: "host-groups",
      description: "Create and manage Cloud NetApp Host Groups",
      subcommands: [
        {
          name: "create",
          description: "Create a Cloud NetApp Host Group",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            optConfiguration,
            {
              name: "--description",
              description: "A description of the Cloud NetApp Host Group",
              args: {
                name: "DESCRIPTION",
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
              name: "--hosts",
              description: "List of hosts in the host group",
              priority: 100,
              args: {
                name: "HOST",
                description: "List",
              },
            },
            optImpersonateServiceAccount,
            optLabels,
            optLocation6,
            optLogHttp,
            optNoAsync,
            {
              name: "--os-type",
              description:
                "String indicating the OS type of the hosts in the host group. The supported values are: 'LINUX', 'WINDOWS', 'ESXI'. _OS_TYPE_ must be one of: *LINUX*, *WINDOWS*, *ESXI*",
              priority: 100,
              args: {
                name: "OS_TYPE",
                description: "String",
                suggestions: ["LINUX", "WINDOWS", "ESXI"],
              },
            },
            optProject,
            optQuiet,
            optTraceToken,
            {
              name: "--type",
              description:
                "String indicating the type of host group. The supported values are: 'ISCSI_INITIATOR'. _TYPE_ must be (only one value is supported): *ISCSI_INITIATOR*",
              priority: 100,
              args: {
                name: "TYPE",
                description: "String",
                suggestions: ["ISCSI_INITIATOR"],
              },
            },
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "HOST_GROUP",
            description:
              "ID of the host_group or fully qualified identifier for the host_group",
          },
        },
        {
          name: "delete",
          description: "Delete a Cloud NetApp Host Group",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
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
            optLocation6,
            optLogHttp,
            optNoAsync,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "HOST_GROUP",
            description:
              "ID of the host_group or fully qualified identifier for the host_group",
          },
        },
        {
          name: "describe",
          description: "Describe a Cloud NetApp Host Group",
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
            optLocation6,
            optLogHttp,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "HOST_GROUP",
            description:
              "ID of the host_group or fully qualified identifier for the host_group",
          },
        },
        {
          name: "list",
          description: "List Cloud NetApp Host Groups",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            optFilter,
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optLimit,
            optLocation,
            optLogHttp,
            optNoUri,
            optPageSize,
            optProject,
            optQuiet,
            optSortBy,
            optTraceToken,
            optUri,
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
        {
          name: "update",
          description: "Update a Cloud NetApp Host Group",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            optClearLabels,
            optConfiguration,
            {
              name: "--description",
              description: "A description of the Cloud NetApp Host Group",
              args: {
                name: "DESCRIPTION",
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
              name: "--hosts",
              description: "List of hosts in the host group",
              args: {
                name: "HOST",
                description: "List",
              },
            },
            optImpersonateServiceAccount,
            optLocation6,
            optLogHttp,
            optNoAsync,
            optNoClearLabels,
            optProject,
            optQuiet,
            optRemoveLabels,
            optTraceToken,
            optUpdateLabels,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "HOST_GROUP",
            description:
              "ID of the host_group or fully qualified identifier for the host_group",
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
      name: "kms-configs",
      description: "Create and manage Cloud NetApp Volumes KMS Configs",
      subcommands: [
        {
          name: "create",
          description: "Create a Cloud NetApp Volumes KMS Config",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            optConfiguration,
            {
              name: "--description",
              description: "A description of the Cloud NetApp KMS Config",
              args: {
                name: "DESCRIPTION",
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
            {
              name: "--kms-key",
              description:
                "ID of the kms_key or fully qualified identifier for the kms_key",
              priority: 100,
              args: {
                name: "KMS_KEY",
                description: "String",
              },
            },
            {
              name: "--kms-keyring",
              description: "The KMS keyring of the kms_key",
              args: {
                name: "KMS_KEYRING",
                description: "String",
              },
            },
            {
              name: "--kms-location",
              description: "The Cloud location for the kms_key",
              args: {
                name: "KMS_LOCATION",
                description: "String",
              },
            },
            {
              name: "--kms-project",
              description: "The Cloud project for the kms_key",
              args: {
                name: "KMS_PROJECT",
                description: "String",
              },
            },
            optLabels,
            optLocation7,
            optLogHttp,
            optNoAsync,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "KMS_CONFIG",
            description:
              "ID of the kms_config or fully qualified identifier for the kms_config",
          },
        },
        {
          name: "delete",
          description: "Delete a Cloud NetApp Volumes KMS Config",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
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
            optLocation7,
            optLogHttp,
            optNoAsync,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "KMS_CONFIG",
            description:
              "ID of the kms_config or fully qualified identifier for the kms_config",
          },
        },
        {
          name: "describe",
          description: "Show metadata for a Cloud NetApp Volumes KMS Config",
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
            optLocation7,
            optLogHttp,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "KMS_CONFIG",
            description:
              "ID of the kms_config or fully qualified identifier for the kms_config",
          },
        },
        {
          name: "encrypt",
          description:
            "Encrypt all existing volumes and storage pools in the same region with the desired Cloud NetApp Volumes KMS Config",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
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
            optLocation7,
            optLogHttp,
            optNoAsync,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "KMS_CONFIG",
            description:
              "ID of the kms_config or fully qualified identifier for the kms_config",
          },
        },
        {
          name: "list",
          description: "List Cloud NetApp Volumes KMS Configs",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            optFilter,
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optLimit,
            optLocation,
            optLogHttp,
            optNoUri,
            optPageSize,
            optProject,
            optQuiet,
            optSortBy,
            optTraceToken,
            optUri,
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
        {
          name: "update",
          description: "Update a Cloud NetApp Volumes KMS Config",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            optClearLabels,
            optConfiguration,
            {
              name: "--description",
              description: "A description of the Cloud NetApp KMS Config",
              args: {
                name: "DESCRIPTION",
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
            {
              name: "--kms-key",
              description:
                "ID of the kms_key or fully qualified identifier for the kms_key",
              priority: 100,
              args: {
                name: "KMS_KEY",
                description: "String",
              },
            },
            {
              name: "--kms-keyring",
              description: "The KMS keyring of the kms_key",
              args: {
                name: "KMS_KEYRING",
                description: "String",
              },
            },
            {
              name: "--kms-location",
              description: "The Cloud location for the kms_key",
              args: {
                name: "KMS_LOCATION",
                description: "String",
              },
            },
            {
              name: "--kms-project",
              description: "The Cloud project for the kms_key",
              args: {
                name: "KMS_PROJECT",
                description: "String",
              },
            },
            optLocation7,
            optLogHttp,
            optNoAsync,
            optNoClearLabels,
            optProject,
            optQuiet,
            optRemoveLabels,
            optTraceToken,
            optUpdateLabels,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "KMS_CONFIG",
            description:
              "ID of the kms_config or fully qualified identifier for the kms_config",
          },
        },
        {
          name: "verify",
          description:
            "Verify that the Cloud NetApp Volumes KMS Config is reachable",
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
            optLocation7,
            optLogHttp,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "KMS_CONFIG",
            description:
              "ID of the kms_config or fully qualified identifier for the kms_config",
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
      name: "locations",
      description:
        "Get and list locations where Cloud NetApp Files is available",
      subcommands: [
        {
          name: "describe",
          description: "Describe a Cloud NetApp Files location",
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
            name: "LOCATION",
            description:
              "ID of the location or fully qualified identifier for the location",
          },
        },
        {
          name: "list",
          description: "List all Cloud NetApp Files locations",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            optFilter,
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
            optNoUri,
            optPageSize,
            optProject,
            optQuiet,
            optSortBy,
            optTraceToken,
            optUri,
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
      name: "operations",
      description: "Read and manage Cloud NetApp Files Operations",
      subcommands: [
        {
          name: "describe",
          description: "Describe a Cloud NetApp Files operation",
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
            {
              name: "--location",
              description: "The location of the operation",
              args: {
                name: "LOCATION",
                description: "String",
              },
            },
            optLogHttp,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "OPERATION",
            description:
              "ID of the operation or fully qualified identifier for the operation",
          },
        },
        {
          name: "list",
          description: "List Cloud NetApp Files operations",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            optFilter,
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optLimit,
            optLocation,
            optLogHttp,
            optNoUri,
            optPageSize,
            optProject,
            optQuiet,
            optSortBy,
            optTraceToken,
            optUri,
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
      name: "storage-pools",
      description: "Create and manage Cloud NetApp Storage Pools",
      subcommands: [
        {
          name: "create",
          description: "Create a Cloud NetApp Storage Pool",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--active-directory",
              description:
                "ID of the active_directory or fully qualified identifier for the active_directory",
              priority: 100,
              args: {
                name: "ACTIVE_DIRECTORY",
                description: "String",
              },
            },
            {
              name: "--allow-auto-tiering",
              description:
                "Boolean flag indicating whether Storage Pool is allowed to use auto-tiering",
              args: {
                name: "ALLOW_AUTO_TIERING",
              },
            },
            optAsync,
            optBillingProject,
            {
              name: "--capacity",
              description:
                "The desired capacity of the Storage Pool in GiB or TiB units.If no capacity unit is specified, GiB is assumed",
              priority: 100,
              args: {
                name: "CAPACITY",
              },
            },
            optConfiguration,
            {
              name: "--custom-performance-enabled",
              description:
                "Boolean flag indicating whether Storage Pool is a custom performance Storage Pool or not",
              args: {
                name: "CUSTOM_PERFORMANCE_ENABLED",
              },
            },
            {
              name: "--description",
              description: "A description of the Cloud NetApp Storage Pool",
              args: {
                name: "DESCRIPTION",
                description: "String",
              },
            },
            {
              name: "--enable-ldap",
              description:
                "Boolean flag indicating whether Storage Pool is a NFS LDAP Storage Pool or not",
              args: {
                name: "ENABLE_LDAP",
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
              name: "--kms-config",
              description:
                "ID of the kms_config or fully qualified identifier for the kms_config",
              priority: 100,
              args: {
                name: "KMS_CONFIG",
                description: "String",
              },
            },
            optLabels,
            optLocation11,
            optLogHttp,
            {
              name: "--mode",
              description:
                "The mode of the Storage Pool. `ONTAP` mode is for performing ONTAP operations with ONTAP Mode APIs. `DEFAULT` mode is for performing operations allowed with NetApp Files APIs. _MODE_ must be one of: *default*, *ontap*",
              args: {
                name: "MODE",
                suggestions: ["default", "ontap"],
              },
            },
            {
              name: "--network",
              description:
                "Network configuration for a Cloud NetApp Files Storage Pool. Specifying `psa-range` is optional. *name*::: The name of the Google Compute Engine [VPC network](/compute/docs/networks-and-firewalls#networks) to which the volume is connected. Short-form (VPC network ID) or long-form (full VPC network name: projects/PROJECT/locations/LOCATION/networks/NETWORK) are both accepted, but please use the long-form when attempting to create a Storage Pool using a shared VPC. *psa-range*::: This field is not implemented. The values provided in this field are ignored",
              priority: 100,
              args: {
                name: "NETWORK",
                description: "Dict",
              },
            },
            optNoAsync,
            optProject,
            {
              name: "--qos-type",
              description:
                "Quality of service (QoS) type for the Storage Pool. _QOS_TYPE_ must be one of: *auto*, *manual*, *qos-type-unspecified*",
              args: {
                name: "QOS_TYPE",
                suggestions: ["auto", "manual", "qos-type-unspecified"],
              },
            },
            optQuiet,
            {
              name: "--replica-zone",
              description:
                "String indicating replica zone for the Storage Pool",
              args: {
                name: "REPLICA_ZONE",
                description: "String",
              },
            },
            {
              name: "--scale-type",
              description:
                "The scale type of the Storage Pool. `default` scale type is for standard capacity and performance. `scaleout` scale type is for higher capacity and performance. _SCALE_TYPE_ must be one of: *default*, *scaleout*",
              args: {
                name: "SCALE_TYPE",
                suggestions: ["default", "scaleout"],
              },
            },
            {
              name: "--service-level",
              description:
                "The service level for the Cloud NetApp Storage Pool. For more details, see: https://cloud.google.com/netapp/volumes/docs/configure-and-use/storage-pools/overview#service_levels",
              priority: 100,
              args: {
                name: "SERVICE_LEVEL",
                suggestions: ["extreme", "flex", "premium", "standard"],
              },
            },
            {
              name: "--total-iops",
              description: "Integer indicating total IOPS of the Storage Pool",
              args: {
                name: "TOTAL_IOPS",
                description: "Int",
              },
            },
            {
              name: "--total-throughput",
              description:
                "The total throughput of the Storage Pool in MiB/s or GiB/s units. If no throughput unit is specified, MiB/s is assumed",
              args: {
                name: "TOTAL_THROUGHPUT",
              },
            },
            optTraceToken,
            {
              name: "--type",
              description:
                "The type of the Storage Pool. `FILE` pools support file-based volumes only. `UNIFIED` pools support both file and block volumes. _TYPE_ must be one of:",
              args: {
                name: "TYPE",
                suggestions: ["file", "unified"],
              },
            },
            optUserOutputEnabled,
            optVerbosity,
            {
              name: "--zone",
              description: "String indicating active zone of the Storage Pool",
              args: {
                name: "ZONE",
                description: "String",
              },
            },
          ],
          args: {
            name: "STORAGE_POOL",
            description:
              "ID of the storage_pool or fully qualified identifier for the storage_pool",
          },
        },
        {
          name: "delete",
          description: "Delete a Cloud NetApp Storage Pool",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
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
            optLocation11,
            optLogHttp,
            optNoAsync,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "STORAGE_POOL",
            description:
              "ID of the storage_pool or fully qualified identifier for the storage_pool",
          },
        },
        {
          name: "describe",
          description: "Show metadata for a Cloud NetApp Storage Pool",
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
            optLocation11,
            optLogHttp,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "STORAGE_POOL",
            description:
              "ID of the storage_pool or fully qualified identifier for the storage_pool",
          },
        },
        {
          name: "execute",
          description: "Execute an ONTAP CLI command",
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
            optLocation11,
            optLogHttp,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: [
            {
              name: "STORAGE_POOL",
              description:
                "ID of the storage_pool or fully qualified identifier for the storage_pool",
            },
            {
              name: "ONTAP_COMMAND",
              description: "The ONTAP command to execute",
            },
          ],
        },
        {
          name: "list",
          description: "List Cloud NetApp Storage Pools",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            optFilter,
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optLimit,
            optLocation,
            optLogHttp,
            optNoUri,
            optPageSize,
            optProject,
            optQuiet,
            optSortBy,
            optTraceToken,
            optUri,
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
        {
          name: "switch",
          description: "Switch a Regional Cloud NetApp Flex Storage Pool zone",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
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
            optLocation11,
            optLogHttp,
            optNoAsync,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "STORAGE_POOL",
            description:
              "ID of the storage_pool or fully qualified identifier for the storage_pool",
          },
        },
        {
          name: "update",
          description: "Update a Cloud NetApp Storage Pool",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--active-directory",
              description:
                "ID of the active_directory or fully qualified identifier for the active_directory",
              priority: 100,
              args: {
                name: "ACTIVE_DIRECTORY",
                description: "String",
              },
            },
            {
              name: "--allow-auto-tiering",
              description:
                "Boolean flag indicating whether Storage Pool is allowed to use auto-tiering",
              args: {
                name: "ALLOW_AUTO_TIERING",
              },
            },
            optAsync,
            optBillingProject,
            {
              name: "--capacity",
              description:
                "The desired capacity of the Storage Pool in GiB or TiB units.If no capacity unit is specified, GiB is assumed",
              args: {
                name: "CAPACITY",
              },
            },
            optClearLabels,
            optConfiguration,
            {
              name: "--description",
              description: "A description of the Cloud NetApp Storage Pool",
              args: {
                name: "DESCRIPTION",
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
            optLocation11,
            optLogHttp,
            optNoAsync,
            optNoClearLabels,
            optProject,
            {
              name: "--qos-type",
              description:
                "Quality of service (QoS) type for the Storage Pool. _QOS_TYPE_ must be one of: *auto*, *manual*, *qos-type-unspecified*",
              args: {
                name: "QOS_TYPE",
                suggestions: ["auto", "manual", "qos-type-unspecified"],
              },
            },
            optQuiet,
            optRemoveLabels,
            {
              name: "--replica-zone",
              description:
                "String indicating replica zone for the Storage Pool",
              args: {
                name: "REPLICA_ZONE",
                description: "String",
              },
            },
            {
              name: "--total-iops",
              description: "Integer indicating total IOPS of the Storage Pool",
              args: {
                name: "TOTAL_IOPS",
                description: "Int",
              },
            },
            {
              name: "--total-throughput",
              description:
                "The total throughput of the Storage Pool in MiB/s or GiB/s units. If no throughput unit is specified, MiB/s is assumed",
              args: {
                name: "TOTAL_THROUGHPUT",
              },
            },
            optTraceToken,
            optUpdateLabels,
            optUserOutputEnabled,
            optVerbosity,
            {
              name: "--zone",
              description: "String indicating active zone of the Storage Pool",
              args: {
                name: "ZONE",
                description: "String",
              },
            },
          ],
          args: {
            name: "STORAGE_POOL",
            description:
              "ID of the storage_pool or fully qualified identifier for the storage_pool",
          },
        },
        {
          name: "validate-directory-service",
          description:
            "Validate directory service for a Cloud Netapp storage pool",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            optConfiguration,
            {
              name: "--directory-service-type",
              description:
                "String indicating directory service type for the Storage Pool",
              args: {
                name: "DIRECTORY_SERVICE_TYPE",
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
            optLocation11,
            optLogHttp,
            optNoAsync,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "STORAGE_POOL",
            description:
              "ID of the storage_pool or fully qualified identifier for the storage_pool",
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
      name: "volumes",
      description: "Create and manage Cloud NetApp Volumes",
      subcommands: [
        {
          name: "create",
          description: "Create a Cloud NetApp Volume",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            {
              name: "--backup-config",
              description:
                "Backup Config contains backup related config on a volume",
              args: {
                name: "BACKUP_CONFIG",
                description: "Dict",
              },
            },
            optBackupVault2,
            optBillingProject,
            {
              name: "--block-devices",
              description: "A block device to be created with the volume",
              isRepeatable: true,
              args: {
                name: "BLOCK_DEVICES",
                description: "Dict",
              },
            },
            {
              name: "--cache-parameters",
              description:
                "Cache Parameters contains cache parameters of a volume",
              args: {
                name: "CACHE_PARAMETERS",
                description: "Dict",
              },
            },
            {
              name: "--cache-pre-populate",
              description:
                "Cache Pre-populate contains cache pre-populate parameters of a volume",
              args: {
                name: "CACHE_PRE_POPULATE",
                description: "Dict",
              },
            },
            {
              name: "--capacity",
              description:
                "The desired capacity of the Volume in GiB or TiB units.If no capacity unit is specified, GiB is assumed",
              priority: 100,
              args: {
                name: "CAPACITY",
              },
            },
            optConfiguration,
            {
              name: "--description",
              description: "A description of the Cloud NetApp Volume",
              args: {
                name: "DESCRIPTION",
                description: "String",
              },
            },
            {
              name: "--enable-kerberos",
              description:
                "Boolean flag indicating whether Volume is a kerberos Volume or not",
              args: {
                name: "ENABLE_KERBEROS",
              },
            },
            {
              name: "--export-policy",
              description:
                "Export Policy of a Cloud NetApp Files Volume. This will be a field similar to network in which export policy fields can be specified as such: `--export-policy=allowed-clients=ALLOWED_CLIENTS_IP_ADDRESSES, has-root-access=HAS_ROOT_ACCESS_BOOL,access=ACCESS_TYPE,nfsv3=NFSV3, nfsv4=NFSV4,kerberos-5-read-only=KERBEROS_5_READ_ONLY, kerberos-5-read-write=KERBEROS_5_READ_WRITE, kerberos-5i-read-only=KERBEROS_5I_READ_ONLY, kerberos-5i-read-write=KERBEROS_5I_READ_WRITE, kerberos-5p-read-only=KERBEROS_5P_READ_ONLY, kerberos-5p-read-write=KERBEROS_5P_READ_WRITE, squash-mode=SQUASH_MODE,anon-uid=ANON_UID`",
              args: {
                name: "EXPORT_POLICY",
                description: "Dict",
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
              name: "--hybrid-replication-parameters",
              description:
                "Hybrid Replication Parameters contains hybrid replication parameters on a volume",
              args: {
                name: "HYBRID_REPLICATION_PARAMETERS",
                description: "Dict",
              },
            },
            optImpersonateServiceAccount,
            optLabels,
            {
              name: "--large-capacity",
              description:
                "Boolean flag indicating whether Volume is a large capacity Volume or not",
              args: {
                name: "LARGE_CAPACITY",
              },
            },
            {
              name: "--large-capacity-config",
              description:
                "Large Capacity Config contains configuration for large capacity volumes",
              args: {
                name: "LARGE_CAPACITY_CONFIG",
                description: "Dict",
                isOptional: true,
              },
            },
            optLocation12,
            optLogHttp,
            {
              name: "--multiple-endpoints",
              description:
                "Boolean flag indicating whether Volume is a multiple endpoints Volume or not",
              args: {
                name: "MULTIPLE_ENDPOINTS",
              },
            },
            optNoAsync,
            optProject,
            {
              name: "--protocols",
              description:
                "Type of File System protocols for the Cloud NetApp Volume. Valid component values are: `NFSV3`, `NFSV4`, `SMB`, `ISCSI`",
              priority: 100,
              args: {
                name: "PROTOCOL",
                description: "List",
              },
            },
            optQuiet,
            {
              name: "--restricted-actions",
              description:
                "Actions to be restricted for a volume. Valid restricted action options are: 'DELETE'",
              args: {
                name: "RESTRICTED_ACTION",
                description: "List",
              },
            },
            {
              name: "--security-style",
              description:
                "The security style of the Volume. This can either be UNIX or NTFS",
              args: {
                name: "SECURITY_STYLE",
                suggestions: ["ntfs", "unix"],
              },
            },
            {
              name: "--share-name",
              description: "Share name of the Mount path clients will use",
              args: {
                name: "SHARE_NAME",
                description: "String",
              },
            },
            {
              name: "--smb-settings",
              description:
                "List of settings specific to SMB protocol for a Cloud NetApp Files Volume. Valid component values are: `ENCRYPT_DATA`, `BROWSABLE`, `CHANGE_NOTIFY`, `NON_BROWSABLE`, `OPLOCKS`, `SHOW_SNAPSHOT`, `SHOW_PREVIOUS_VERSIONS`, `ACCESS_BASED_ENUMERATION`, `CONTINUOUSLY_AVAILABLE`",
              args: {
                name: "SMB_SETTING",
                description: "List",
              },
            },
            {
              name: "--snap-reserve",
              description:
                "(DEPRECATED) The percentage of volume storage reserved for snapshot storage. The default value for this is 0 percent",
              deprecated: true,
              args: {
                name: "SNAP_RESERVE",
                description: "Float",
              },
            },
            {
              name: "--snapshot-daily",
              description:
                "Make a snapshot every day e.g. at 06:00, 05:20, 23:50",
              args: {
                name: "SNAPSHOT_DAILY",
                description: "Dict",
              },
            },
            {
              name: "--snapshot-directory",
              description:
                "Snapshot Directory if enabled (true) makes the Volume contain a read-only .snapshot directory which provides access to each of the volume's snapshots",
              args: {
                name: "SNAPSHOT_DIRECTORY",
              },
            },
            {
              name: "--snapshot-hourly",
              description:
                "Make a snapshot every hour e.g. at 04:00, 05:20, 06:00",
              args: {
                name: "SNAPSHOT_HOURLY",
                description: "Dict",
              },
            },
            {
              name: "--snapshot-monthly",
              description:
                "Make a snapshot once a month e.g. at 2nd 04:00, 7th 05:20, 24th 23:50",
              args: {
                name: "SNAPSHOT_MONTHLY",
                description: "Dict",
              },
            },
            {
              name: "--snapshot-weekly",
              description:
                "Make a snapshot every week e.g. at Monday 04:00, Wednesday 05:20, Sunday 23:50",
              args: {
                name: "SNAPSHOT_WEEKLY",
                description: "Dict",
              },
            },
            {
              name: "--source-backup",
              description:
                "ID of the backup or fully qualified identifier for the backup",
              priority: 100,
              args: {
                name: "SOURCE_BACKUP",
                description: "String",
              },
            },
            optSourceSnapshot,
            {
              name: "--storage-pool",
              description:
                "ID of the storage_pool or fully qualified identifier for the storage_pool",
              priority: 100,
              args: {
                name: "STORAGE_POOL",
                description: "String",
              },
            },
            {
              name: "--throughput-mibps",
              description: "The desired throughput of the volume in MiB/s",
              args: {
                name: "THROUGHPUT_MIBPS",
                description: "Float",
              },
            },
            {
              name: "--tiering-policy",
              description:
                "Tiering Policy contains auto tiering policy on a volume",
              args: {
                name: "tier-action=ENABLED|PAUSED",
                description: "Dict",
              },
            },
            optTraceToken,
            {
              name: "--unix-permissions",
              description:
                "Unix permissions the mount point will be created with. Unix permissions are only applicable with NFS protocol only",
              args: {
                name: "UNIX_PERMISSIONS",
                description: "String",
              },
            },
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "VOLUME",
            description:
              "ID of the volume or fully qualified identifier for the volume",
          },
        },
        {
          name: "delete",
          description: "Delete a Cloud NetApp Volume",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            optConfiguration,
            optFlagsFile,
            optFlatten,
            {
              name: "--force",
              description:
                "Forces the deletion of a volume and its child resources, such as snapshots",
            },
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optLocation12,
            optLogHttp,
            optNoAsync,
            {
              name: "--no-force",
              description:
                "Forces the deletion of a volume and its child resources, such as snapshots",
              hidden: true,
            },
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "VOLUME",
            description:
              "ID of the volume or fully qualified identifier for the volume",
          },
        },
        {
          name: "describe",
          description: "Show metadata for a Cloud NetApp Volume",
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
            optLocation12,
            optLogHttp,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "VOLUME",
            description:
              "ID of the volume or fully qualified identifier for the volume",
          },
        },
        {
          name: "establish-peering",
          description: "Establish peering for Cache Volumes",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
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
            optLocation12,
            optLogHttp,
            optNoAsync,
            {
              name: "--peer-cluster-name",
              description:
                "Name of the destination cluster to be peered with the source cluster",
              priority: 100,
              args: {
                name: "PEER_CLUSTER_NAME",
                description: "String",
              },
            },
            {
              name: "--peer-ip-addresses",
              description:
                "List of ip addresses to be used for peering. This is required for cluster peering, not required for svm peering",
              args: {
                name: "PEER_IP_ADDRESS",
                description: "List",
              },
            },
            {
              name: "--peer-svm-name",
              description:
                "Name of the local source vserver svm to be peered with the destination cluster",
              priority: 100,
              args: {
                name: "PEER_SVM_NAME",
                description: "String",
              },
            },
            {
              name: "--peer-volume-name",
              description:
                "Name of the source volume to be peered with the destination volume",
              priority: 100,
              args: {
                name: "PEER_VOLUME_NAME",
                description: "String",
              },
            },
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "VOLUME",
            description:
              "ID of the volume or fully qualified identifier for the volume",
          },
        },
        {
          name: "list",
          description: "List Cloud NetApp Volumes",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            optFilter,
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optLimit,
            optLocation,
            optLogHttp,
            optNoUri,
            optPageSize,
            optProject,
            optQuiet,
            optSortBy,
            optTraceToken,
            optUri,
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
        {
          name: "quota-rules",
          description: "Create and manage Cloud NetApp Volume QuotaRules",
          subcommands: [
            {
              name: "create",
              description: "Create a Cloud NetApp Volume Quota Rule",
              options: [
                optAccessTokenFile,
                optAccount,
                optAsync,
                optBillingProject,
                optConfiguration,
                {
                  name: "--description",
                  description: "A description of the Cloud NetApp Quota rule",
                  args: {
                    name: "DESCRIPTION",
                    description: "String",
                  },
                },
                {
                  name: "--disk-limit-mib",
                  description: "The disk limit in MiB for the quota rule",
                  priority: 100,
                  args: {
                    name: "DISK_LIMIT_MIB",
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
                optImpersonateServiceAccount,
                optLabels,
                optLocation8,
                optLogHttp,
                optNoAsync,
                optProject,
                optQuiet,
                {
                  name: "--target",
                  description:
                    "The target of the quota rule. Identified by a Unix UID/GID, Windows SID, or null for default",
                  args: {
                    name: "TARGET",
                    description: "String",
                  },
                },
                optTraceToken,
                {
                  name: "--type",
                  description:
                    "String indicating the type of quota rule. The supported values are: 'DEFAULT_USER_QUOTA','DEFAULT_GROUP_QUOTA','INDIVIDUAL_USER_QUOTA','INDIVIDUAL_GROUP_QUOTA'",
                  priority: 100,
                  args: {
                    name: "TYPE",
                    description: "String",
                  },
                },
                optUserOutputEnabled,
                optVerbosity,
                optVolume,
              ],
              args: {
                name: "QUOTA_RULE",
                description:
                  "ID of the quota_rule or fully qualified identifier for the quota_rule",
              },
            },
            {
              name: "delete",
              description: "Delete a Cloud NetApp Volume QuotaRule",
              options: [
                optAccessTokenFile,
                optAccount,
                optAsync,
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
                optLocation8,
                optLogHttp,
                optNoAsync,
                optProject,
                optQuiet,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
                optVolume,
              ],
              args: {
                name: "QUOTA_RULE",
                description:
                  "ID of the quota_rule or fully qualified identifier for the quota_rule",
              },
            },
            {
              name: "describe",
              description: "Describe a Cloud NetApp Volume Quota Rule",
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
                optLocation8,
                optLogHttp,
                optProject,
                optQuiet,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
                optVolume,
              ],
              args: {
                name: "QUOTA_RULE",
                description:
                  "ID of the quota_rule or fully qualified identifier for the quota_rule",
              },
            },
            {
              name: "list",
              description: "List Cloud NetApp Volume QuotaRules",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                optConfiguration,
                optFilter,
                optFlagsFile,
                optFlatten,
                optFormat,
                {
                  name: "--help",
                  description: "Display detailed help",
                },
                optImpersonateServiceAccount,
                optLimit,
                optLocation,
                optLogHttp,
                optNoUri,
                optPageSize,
                optProject,
                optQuiet,
                optSortBy,
                optTraceToken,
                optUri,
                optUserOutputEnabled,
                optVerbosity,
                optVolume,
              ],
            },
            {
              name: "update",
              description: "Update a Cloud NetApp Volume QuotaRule",
              options: [
                optAccessTokenFile,
                optAccount,
                optAsync,
                optBillingProject,
                optClearLabels,
                optConfiguration,
                {
                  name: "--description",
                  description: "A description of the Cloud NetApp Quota rule",
                  args: {
                    name: "DESCRIPTION",
                    description: "String",
                  },
                },
                {
                  name: "--disk-limit-mib",
                  description: "The disk limit in MiB for the quota rule",
                  args: {
                    name: "DISK_LIMIT_MIB",
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
                optImpersonateServiceAccount,
                optLocation8,
                optLogHttp,
                optNoAsync,
                optNoClearLabels,
                optProject,
                optQuiet,
                optRemoveLabels,
                optTraceToken,
                optUpdateLabels,
                optUserOutputEnabled,
                optVerbosity,
                optVolume,
              ],
              args: {
                name: "QUOTA_RULE",
                description:
                  "ID of the quota_rule or fully qualified identifier for the quota_rule",
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
          name: "replications",
          description: "Create and manage Cloud NetApp Volume Replications",
          subcommands: [
            {
              name: "create",
              description: "Create a Cloud NetApp Volume Replication",
              options: [
                optAccessTokenFile,
                optAccount,
                optAsync,
                optBillingProject,
                {
                  name: "--cluster-location",
                  description: "Location of the user cluster",
                  args: {
                    name: "CLUSTER_LOCATION",
                    description: "String",
                  },
                },
                optConfiguration,
                {
                  name: "--description",
                  description: "A description of the Cloud NetApp Replication",
                  args: {
                    name: "DESCRIPTION",
                    description: "String",
                  },
                },
                {
                  name: "--destination-volume-parameters",
                  description:
                    "Required, sets `destination_volume_parameters` value",
                  priority: 100,
                  args: {
                    name: "DESTINATION_VOLUME_PARAMETERS",
                    description: "Dict",
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
                optLabels,
                optLocation9,
                optLogHttp,
                optNoAsync,
                optProject,
                optQuiet,
                {
                  name: "--replication-schedule",
                  description: "The schedule for the Replication",
                  priority: 100,
                  args: {
                    name: "REPLICATION_SCHEDULE",
                    description: "String",
                  },
                },
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
                optVolume,
              ],
              args: {
                name: "REPLICATION",
                description:
                  "ID of the replication or fully qualified identifier for the replication",
              },
            },
            {
              name: "delete",
              description: "Delete a Cloud NetApp Volume Replication",
              options: [
                optAccessTokenFile,
                optAccount,
                optAsync,
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
                optLocation9,
                optLogHttp,
                optNoAsync,
                optProject,
                optQuiet,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
                optVolume,
              ],
              args: {
                name: "REPLICATION",
                description:
                  "ID of the replication or fully qualified identifier for the replication",
              },
            },
            {
              name: "describe",
              description: "Describe a Cloud NetApp Volume Replication",
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
                optLocation9,
                optLogHttp,
                optProject,
                optQuiet,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
                optVolume,
              ],
              args: {
                name: "REPLICATION",
                description:
                  "ID of the replication or fully qualified identifier for the replication",
              },
            },
            {
              name: "establish-peering",
              description: "Establish peering for Hybrid replication",
              options: [
                optAccessTokenFile,
                optAccount,
                optAsync,
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
                optLocation9,
                optLogHttp,
                optNoAsync,
                {
                  name: "--peer-cluster-name",
                  description:
                    "Name of the destination cluster to be peered with the source cluster",
                  priority: 100,
                  args: {
                    name: "PEER_CLUSTER_NAME",
                    description: "String",
                  },
                },
                {
                  name: "--peer-ip-addresses",
                  description:
                    "List of ip addresses to be used for peering. This is required for cluster peering, not required for svm peering",
                  args: {
                    name: "PEER_IP_ADDRESS",
                    description: "List",
                  },
                },
                {
                  name: "--peer-svm-name",
                  description:
                    "Name of the local source vserver svm to be peered with the destination cluster",
                  priority: 100,
                  args: {
                    name: "PEER_SVM_NAME",
                    description: "String",
                  },
                },
                {
                  name: "--peer-volume-name",
                  description:
                    "Name of the source volume to be peered with the destination volume",
                  priority: 100,
                  args: {
                    name: "PEER_VOLUME_NAME",
                    description: "String",
                  },
                },
                optProject,
                optQuiet,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
                optVolume,
              ],
              args: {
                name: "REPLICATION",
                description:
                  "ID of the replication or fully qualified identifier for the replication",
              },
            },
            {
              name: "list",
              description: "List Cloud NetApp Volume Replications",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                optConfiguration,
                optFilter,
                optFlagsFile,
                optFlatten,
                optFormat,
                {
                  name: "--help",
                  description: "Display detailed help",
                },
                optImpersonateServiceAccount,
                optLimit,
                optLocation,
                optLogHttp,
                optNoUri,
                optPageSize,
                optProject,
                optQuiet,
                optSortBy,
                optTraceToken,
                optUri,
                optUserOutputEnabled,
                optVerbosity,
                optVolume,
              ],
            },
            {
              name: "resume",
              description: "Resume a Cloud NetApp Volume Replication",
              options: [
                optAccessTokenFile,
                optAccount,
                optAsync,
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
                optLocation9,
                optLogHttp,
                optNoAsync,
                optProject,
                optQuiet,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
                optVolume,
              ],
              args: {
                name: "REPLICATION",
                description:
                  "ID of the replication or fully qualified identifier for the replication",
              },
            },
            {
              name: "reverse",
              description:
                "Reverse a Cloud NetApp Volume Replication's direction",
              options: [
                optAccessTokenFile,
                optAccount,
                optAsync,
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
                optLocation9,
                optLogHttp,
                optNoAsync,
                optProject,
                optQuiet,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
                optVolume,
              ],
              args: {
                name: "REPLICATION",
                description:
                  "ID of the replication or fully qualified identifier for the replication",
              },
            },
            {
              name: "stop",
              description: "Stop a Cloud NetApp Volume Replication",
              options: [
                optAccessTokenFile,
                optAccount,
                optAsync,
                optBillingProject,
                optConfiguration,
                optFlagsFile,
                optFlatten,
                {
                  name: "--force",
                  description:
                    "Indicates whether to stop replication forcefully while data transfer is in progress. Warning! if force is true, this will abort any current transfers and can lead to data loss due to partial transfer. If force is false, stop replication will fail while data transfer is in progress and you will need to retry later",
                },
                optFormat,
                {
                  name: "--help",
                  description: "Display detailed help",
                },
                optImpersonateServiceAccount,
                optLocation9,
                optLogHttp,
                optNoAsync,
                {
                  name: "--no-force",
                  description:
                    "Indicates whether to stop replication forcefully while data transfer is in progress. Warning! if force is true, this will abort any current transfers and can lead to data loss due to partial transfer. If force is false, stop replication will fail while data transfer is in progress and you will need to retry later",
                  hidden: true,
                },
                optProject,
                optQuiet,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
                optVolume,
              ],
              args: {
                name: "REPLICATION",
                description:
                  "ID of the replication or fully qualified identifier for the replication",
              },
            },
            {
              name: "sync",
              description: "Sync a Cloud NetApp Volume Replication",
              options: [
                optAccessTokenFile,
                optAccount,
                optAsync,
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
                optLocation9,
                optLogHttp,
                optNoAsync,
                optProject,
                optQuiet,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
                optVolume,
              ],
              args: {
                name: "REPLICATION",
                description:
                  "ID of the replication or fully qualified identifier for the replication",
              },
            },
            {
              name: "update",
              description: "Update a Cloud NetApp Volume Replication",
              options: [
                optAccessTokenFile,
                optAccount,
                optAsync,
                optBillingProject,
                optClearLabels,
                {
                  name: "--cluster-location",
                  description: "Location of the user cluster",
                  args: {
                    name: "CLUSTER_LOCATION",
                    description: "String",
                  },
                },
                optConfiguration,
                {
                  name: "--description",
                  description: "A description of the Cloud NetApp Replication",
                  args: {
                    name: "DESCRIPTION",
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
                optLocation9,
                optLogHttp,
                optNoAsync,
                optNoClearLabels,
                optProject,
                optQuiet,
                optRemoveLabels,
                {
                  name: "--replication-schedule",
                  description: "The schedule for the Replication",
                  args: {
                    name: "REPLICATION_SCHEDULE",
                    description: "String",
                  },
                },
                optTraceToken,
                optUpdateLabels,
                optUserOutputEnabled,
                optVerbosity,
                optVolume,
              ],
              args: {
                name: "REPLICATION",
                description:
                  "ID of the replication or fully qualified identifier for the replication",
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
          name: "restore-backup-files",
          description: "Restore specific files from a backup to a Volume",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            {
              name: "--backup",
              description:
                "ID of the backup or fully qualified identifier for the backup",
              priority: 100,
              args: {
                name: "BACKUP",
                description: "String",
              },
            },
            optBackupVault2,
            optBillingProject,
            optConfiguration,
            {
              name: "--file-list",
              description:
                "List of files to be restored in the form of their absolute path as in source volume",
              priority: 100,
              args: {
                name: "FILE_LIST",
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
            optLocation12,
            optLogHttp,
            optNoAsync,
            optProject,
            optQuiet,
            {
              name: "--restore-destination-path",
              description:
                "Name of the absolute directory path in the destination volume",
              args: {
                name: "RESTORE_DESTINATION_PATH",
                description: "String",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "VOLUME",
            description:
              "ID of the volume or fully qualified identifier for the volume",
          },
        },
        {
          name: "revert",
          description:
            "Revert a Cloud NetApp Volume back to a specified Snapshot",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
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
            optLocation12,
            optLogHttp,
            optNoAsync,
            optProject,
            optQuiet,
            {
              name: "--snapshot",
              description:
                "ID of the snapshot or fully qualified identifier for the snapshot",
              priority: 100,
              args: {
                name: "SNAPSHOT",
                description: "String",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "VOLUME",
            description:
              "ID of the volume or fully qualified identifier for the volume",
          },
        },
        {
          name: "snapshots",
          description: "Create and manage Cloud NetApp Volume Snapshots",
          subcommands: [
            {
              name: "create",
              description: "Create a Cloud NetApp Volume Snapshot",
              options: [
                optAccessTokenFile,
                optAccount,
                optAsync,
                optBillingProject,
                optConfiguration,
                {
                  name: "--description",
                  description: "A description of the Cloud NetApp Snapshot",
                  args: {
                    name: "DESCRIPTION",
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
                optLabels,
                optLocation10,
                optLogHttp,
                optNoAsync,
                optProject,
                optQuiet,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
                optVolume,
              ],
              args: {
                name: "SNAPSHOT",
                description:
                  "ID of the snapshot or fully qualified identifier for the snapshot",
              },
            },
            {
              name: "delete",
              description: "Delete a Cloud NetApp Volume Snapshot",
              options: [
                optAccessTokenFile,
                optAccount,
                optAsync,
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
                optLocation10,
                optLogHttp,
                optNoAsync,
                optProject,
                optQuiet,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
                optVolume,
              ],
              args: {
                name: "SNAPSHOT",
                description:
                  "ID of the snapshot or fully qualified identifier for the snapshot",
              },
            },
            {
              name: "describe",
              description: "Describe a Cloud NetApp Volume Snapshot",
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
                optLocation10,
                optLogHttp,
                optProject,
                optQuiet,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
                optVolume,
              ],
              args: {
                name: "SNAPSHOT",
                description:
                  "ID of the snapshot or fully qualified identifier for the snapshot",
              },
            },
            {
              name: "list",
              description: "List Cloud NetApp Volume Snapshots",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                optConfiguration,
                optFilter,
                optFlagsFile,
                optFlatten,
                optFormat,
                {
                  name: "--help",
                  description: "Display detailed help",
                },
                optImpersonateServiceAccount,
                optLimit,
                optLocation,
                optLogHttp,
                optNoUri,
                optPageSize,
                optProject,
                optQuiet,
                optSortBy,
                optTraceToken,
                optUri,
                optUserOutputEnabled,
                optVerbosity,
                optVolume,
              ],
            },
            {
              name: "update",
              description: "Update a Cloud NetApp Volume Snapshot",
              options: [
                optAccessTokenFile,
                optAccount,
                optAsync,
                optBillingProject,
                optClearLabels,
                optConfiguration,
                {
                  name: "--description",
                  description: "A description of the Cloud NetApp Snapshot",
                  args: {
                    name: "DESCRIPTION",
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
                optLocation10,
                optLogHttp,
                optNoAsync,
                optNoClearLabels,
                optProject,
                optQuiet,
                optRemoveLabels,
                optTraceToken,
                optUpdateLabels,
                optUserOutputEnabled,
                optVerbosity,
                optVolume,
              ],
              args: {
                name: "SNAPSHOT",
                description:
                  "ID of the snapshot or fully qualified identifier for the snapshot",
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
          name: "update",
          description: "Update a Cloud NetApp Volume",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            {
              name: "--backup-config",
              description:
                "Backup Config contains backup related config on a volume",
              args: {
                name: "BACKUP_CONFIG",
                description: "Dict",
              },
            },
            optBackupVault2,
            optBillingProject,
            {
              name: "--block-devices",
              description: "A block device to be created with the volume",
              isRepeatable: true,
              args: {
                name: "BLOCK_DEVICES",
                description: "Dict",
              },
            },
            {
              name: "--cache-parameters",
              description:
                "Cache Parameters contains cache parameters of a volume",
              args: {
                name: "CACHE_PARAMETERS",
                description: "Dict",
              },
            },
            {
              name: "--cache-pre-populate",
              description:
                "Cache Pre-populate contains cache pre-populate parameters of a volume",
              args: {
                name: "CACHE_PRE_POPULATE",
                description: "Dict",
              },
            },
            {
              name: "--capacity",
              description:
                "The desired capacity of the Volume in GiB or TiB units.If no capacity unit is specified, GiB is assumed",
              args: {
                name: "CAPACITY",
              },
            },
            optClearLabels,
            optConfiguration,
            {
              name: "--description",
              description: "A description of the Cloud NetApp Volume",
              args: {
                name: "DESCRIPTION",
                description: "String",
              },
            },
            {
              name: "--enable-kerberos",
              description:
                "Boolean flag indicating whether Volume is a kerberos Volume or not",
              args: {
                name: "ENABLE_KERBEROS",
              },
            },
            {
              name: "--export-policy",
              description:
                "Export Policy of a Cloud NetApp Files Volume. This will be a field similar to network in which export policy fields can be specified as such: `--export-policy=allowed-clients=ALLOWED_CLIENTS_IP_ADDRESSES, has-root-access=HAS_ROOT_ACCESS_BOOL,access=ACCESS_TYPE,nfsv3=NFSV3, nfsv4=NFSV4,kerberos-5-read-only=KERBEROS_5_READ_ONLY, kerberos-5-read-write=KERBEROS_5_READ_WRITE, kerberos-5i-read-only=KERBEROS_5I_READ_ONLY, kerberos-5i-read-write=KERBEROS_5I_READ_WRITE, kerberos-5p-read-only=KERBEROS_5P_READ_ONLY, kerberos-5p-read-write=KERBEROS_5P_READ_WRITE, squash-mode=SQUASH_MODE,anon-uid=ANON_UID`",
              args: {
                name: "EXPORT_POLICY",
                description: "Dict",
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
            optLocation12,
            optLogHttp,
            optNoAsync,
            optNoClearLabels,
            optProject,
            {
              name: "--protocols",
              description:
                "Type of File System protocols for the Cloud NetApp Volume. Valid component values are: `NFSV3`, `NFSV4`, `SMB`, `ISCSI`",
              args: {
                name: "PROTOCOL",
                description: "List",
              },
            },
            optQuiet,
            optRemoveLabels,
            {
              name: "--restricted-actions",
              description:
                "Actions to be restricted for a volume. Valid restricted action options are: 'DELETE'",
              args: {
                name: "RESTRICTED_ACTION",
                description: "List",
              },
            },
            {
              name: "--security-style",
              description:
                "The security style of the Volume. This can either be UNIX or NTFS",
              args: {
                name: "SECURITY_STYLE",
                suggestions: ["ntfs", "unix"],
              },
            },
            {
              name: "--share-name",
              description: "Share name of the Mount path clients will use",
              args: {
                name: "SHARE_NAME",
                description: "String",
              },
            },
            {
              name: "--smb-settings",
              description:
                "List of settings specific to SMB protocol for a Cloud NetApp Files Volume. Valid component values are: `ENCRYPT_DATA`, `BROWSABLE`, `CHANGE_NOTIFY`, `NON_BROWSABLE`, `OPLOCKS`, `SHOW_SNAPSHOT`, `SHOW_PREVIOUS_VERSIONS`, `ACCESS_BASED_ENUMERATION`, `CONTINUOUSLY_AVAILABLE`",
              args: {
                name: "SMB_SETTING",
                description: "List",
              },
            },
            {
              name: "--snap-reserve",
              description:
                "(DEPRECATED) The percentage of volume storage reserved for snapshot storage. The default value for this is 0 percent",
              deprecated: true,
              args: {
                name: "SNAP_RESERVE",
                description: "Float",
              },
            },
            {
              name: "--snapshot-daily",
              description:
                "Make a snapshot every day e.g. at 06:00, 05:20, 23:50",
              args: {
                name: "SNAPSHOT_DAILY",
                description: "Dict",
              },
            },
            {
              name: "--snapshot-directory",
              description:
                "Snapshot Directory if enabled (true) makes the Volume contain a read-only .snapshot directory which provides access to each of the volume's snapshots",
              args: {
                name: "SNAPSHOT_DIRECTORY",
              },
            },
            {
              name: "--snapshot-hourly",
              description:
                "Make a snapshot every hour e.g. at 04:00, 05:20, 06:00",
              args: {
                name: "SNAPSHOT_HOURLY",
                description: "Dict",
              },
            },
            {
              name: "--snapshot-monthly",
              description:
                "Make a snapshot once a month e.g. at 2nd 04:00, 7th 05:20, 24th 23:50",
              args: {
                name: "SNAPSHOT_MONTHLY",
                description: "Dict",
              },
            },
            {
              name: "--snapshot-weekly",
              description:
                "Make a snapshot every week e.g. at Monday 04:00, Wednesday 05:20, Sunday 23:50",
              args: {
                name: "SNAPSHOT_WEEKLY",
                description: "Dict",
              },
            },
            {
              name: "--source-backup",
              description:
                "ID of the backup or fully qualified identifier for the backup",
              priority: 100,
              args: {
                name: "SOURCE_BACKUP",
                description: "String",
              },
            },
            optSourceSnapshot,
            {
              name: "--storage-pool",
              description:
                "ID of the storage_pool or fully qualified identifier for the storage_pool",
              priority: 100,
              args: {
                name: "STORAGE_POOL",
                description: "String",
              },
            },
            {
              name: "--throughput-mibps",
              description: "The desired throughput of the volume in MiB/s",
              args: {
                name: "THROUGHPUT_MIBPS",
                description: "Float",
              },
            },
            {
              name: "--tiering-policy",
              description:
                "Tiering Policy contains auto tiering policy on a volume",
              args: {
                name: "tier-action=ENABLED|PAUSED",
                description: "Dict",
              },
            },
            optTraceToken,
            {
              name: "--unix-permissions",
              description:
                "Unix permissions the mount point will be created with. Unix permissions are only applicable with NFS protocol only",
              args: {
                name: "UNIX_PERMISSIONS",
                description: "String",
              },
            },
            optUpdateLabels,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "VOLUME",
            description:
              "ID of the volume or fully qualified identifier for the volume",
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
