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

const optAdditionalAuthenticatedDataFile: Fig.Option = {
  name: "--additional-authenticated-data-file",
  description:
    "File path to the optional file containing the additional authenticated data",
  args: {
    name: "ADDITIONAL_AUTHENTICATED_DATA_FILE",
    description: "String",
    template: "filepaths",
  },
};

const optAll: Fig.Option = {
  name: "--all",
  description:
    "Remove all bindings with this role and principal, irrespective of any conditions",
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

const optCondition: Fig.Option = {
  name: "--condition",
  description:
    "A condition to include in the binding. When the condition is explicitly specified as `None` (`--condition=None`), a binding without a condition is added. When the condition is specified and is not `None`, `--role` cannot be a basic role. Basic roles are `roles/editor`, `roles/owner`, and `roles/viewer`. For more on conditions, refer to the conditions overview guide: https://cloud.google.com/iam/docs/conditions-overview",
  args: {
    name: "KEY=VALUE",
    description: "Dict",
  },
};

const optCondition2: Fig.Option = {
  name: "--condition",
  description:
    "The condition of the binding that you want to remove. When the condition is explicitly specified as `None` (`--condition=None`), a binding without a condition is removed. Otherwise, only a binding with a condition that exactly matches the specified condition (including the optional description) is removed. For more on conditions, refer to the conditions overview guide: https://cloud.google.com/iam/docs/conditions-overview",
  args: {
    name: "KEY=VALUE",
    description: "Dict",
  },
};

const optConditionFromFile: Fig.Option = {
  name: "--condition-from-file",
  description:
    "Path to a local JSON or YAML file that defines the condition. To see available fields, see the help for `--condition`. Use a full or relative path to a local file containing the value of condition",
  args: {
    name: "CONDITION_FROM_FILE",
    template: "filepaths",
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

const optKey: Fig.Option = {
  name: "--key",
  description: "The containing key",
  args: {
    name: "KEY",
    description: "String",
  },
};

const optKey2: Fig.Option = {
  name: "--key",
  description: "To use for signing",
  args: {
    name: "KEY",
    description: "String",
  },
};

const optKeyring: Fig.Option = {
  name: "--keyring",
  description: "Key ring of the import job",
  args: {
    name: "KEYRING",
    description: "String",
  },
};

const optKeyring2: Fig.Option = {
  name: "--keyring",
  description: "Key ring of the key",
  args: {
    name: "KEYRING",
    description: "String",
  },
};

const optKeyring3: Fig.Option = {
  name: "--keyring",
  description: "The KMS keyring of the key",
  args: {
    name: "KEYRING",
    description: "String",
  },
};

const optKeyring4: Fig.Option = {
  name: "--keyring",
  description: "The containing keyring",
  args: {
    name: "KEYRING",
    description: "String",
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
  priority: 100,
  args: {
    name: "LOCATION",
    description: "String",
  },
};

const optLocation2: Fig.Option = {
  name: "--location",
  description: "Location of the import job",
  args: {
    name: "LOCATION",
    description: "String",
  },
};

const optLocation3: Fig.Option = {
  name: "--location",
  description: "Location of the keyring",
  args: {
    name: "LOCATION",
    description: "String",
  },
};

const optLocation4: Fig.Option = {
  name: "--location",
  description: "The Google Cloud location for the ekmconnection",
  args: {
    name: "LOCATION",
    description: "String",
  },
};

const optLocation5: Fig.Option = {
  name: "--location",
  description: "The Google Cloud location for the key",
  args: {
    name: "LOCATION",
    description: "String",
  },
};

const optLocation6: Fig.Option = {
  name: "--location",
  description: "The Google Cloud location for the keyring",
  args: {
    name: "LOCATION",
    description: "String",
  },
};

const optLocation7: Fig.Option = {
  name: "--location",
  description: "The Google Cloud location for the singleTenantHsmInstance",
  args: {
    name: "LOCATION",
    description: "String",
  },
};

const optLocation8: Fig.Option = {
  name: "--location",
  description:
    "The Google Cloud location for the singleTenantHsmInstanceProposal",
  args: {
    name: "LOCATION",
    description: "String",
  },
};

const optLocation9: Fig.Option = {
  name: "--location",
  description: "The location of the resource",
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

const optMember: Fig.Option = {
  name: "--member",
  description:
    "The principal to add the binding for. Should be of the form `user|group|serviceAccount:email` or `domain:domain`",
  priority: 100,
  args: {
    name: "PRINCIPAL",
    description: "String",
  },
};

const optMember2: Fig.Option = {
  name: "--member",
  description:
    "The principal to remove the binding for. Should be of the form `user|group|serviceAccount:email` or `domain:domain`",
  priority: 100,
  args: {
    name: "PRINCIPAL",
    description: "String",
  },
};

const optNextRotationTime: Fig.Option = {
  name: "--next-rotation-time",
  description:
    "Next automatic rotation time of the key. See $ gcloud topic datetimes for information on time formats",
  args: {
    name: "NEXT_ROTATION_TIME",
  },
};

const optNoAll: Fig.Option = {
  name: "--no-all",
  description:
    "Remove all bindings with this role and principal, irrespective of any conditions",
  hidden: true,
};

const optNoSkipIntegrityVerification: Fig.Option = {
  name: "--no-skip-integrity-verification",
  description: "Skip integrity verification on request and response API fields",
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

const optRole: Fig.Option = {
  name: "--role",
  description:
    "Role name to assign to the principal. The role name is the complete path of a predefined role, such as `roles/logging.viewer`, or the role ID for a custom role, such as `organizations/{ORGANIZATION_ID}/roles/logging.viewer`",
  priority: 100,
  args: {
    name: "ROLE",
    description: "String",
  },
};

const optRole2: Fig.Option = {
  name: "--role",
  description: "The role to remove the principal from",
  priority: 100,
  args: {
    name: "ROLE",
    description: "String",
  },
};

const optRotationPeriod: Fig.Option = {
  name: "--rotation-period",
  description:
    "Automatic rotation period of the key. See $ gcloud topic datetimes for information on duration formats",
  args: {
    name: "ROTATION_PERIOD",
  },
};

const optSingleTenantHsmInstance: Fig.Option = {
  name: ["--single-tenant-hsm-instance", "--single_tenant_hsm_instance"],
  description:
    "The KMS single tenant HSM instance of the singleTenantHsmInstanceProposal",
  args: {
    name: "SINGLE_TENANT_HSM_INSTANCE",
    description: "String",
  },
};

const optSkipIntegrityVerification: Fig.Option = {
  name: "--skip-integrity-verification",
  description: "Skip integrity verification on request and response API fields",
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

const optTraceToken: Fig.Option = {
  name: "--trace-token",
  description:
    "Token used to route traces of service requests for investigation of issues. Overrides the default *core/trace_token* property value for this command invocation",
  args: {
    name: "TRACE_TOKEN",
    description: "String",
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

const completionSpec: Fig.Spec = {
  name: "kms",
  description: "Manage cryptographic keys in the cloud",
  subcommands: [
    {
      name: "asymmetric-decrypt",
      description:
        "Decrypt an input file using an asymmetric-encryption key version",
      options: [
        optAccessTokenFile,
        optAccount,
        optBillingProject,
        {
          name: "--ciphertext-file",
          description: "File path of the ciphertext file to decrypt",
          priority: 100,
          args: {
            name: "CIPHERTEXT_FILE",
            description: "String",
            template: "filepaths",
          },
        },
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
          name: "--key",
          description: "To use for asymmetric-decryption",
          args: {
            name: "KEY",
            description: "String",
          },
        },
        optKeyring2,
        optLocation3,
        optLogHttp,
        optNoSkipIntegrityVerification,
        {
          name: "--plaintext-file",
          description: "File path of the plaintext file to output",
          priority: 100,
          args: {
            name: "PLAINTEXT_FILE",
            description: "String",
            template: "filepaths",
          },
        },
        optProject,
        optQuiet,
        optSkipIntegrityVerification,
        optTraceToken,
        optUserOutputEnabled,
        optVerbosity,
      ],
    },
    {
      name: "asymmetric-sign",
      description:
        "Sign a user input file using an asymmetric-signing key version",
      options: [
        optAccessTokenFile,
        optAccount,
        optBillingProject,
        optConfiguration,
        {
          name: "--digest-algorithm",
          description:
            "The algorithm to digest the input. _DIGEST_ALGORITHM_ must be one of: *external-mu*, *sha256*, *sha384*, *sha512*",
          args: {
            name: "DIGEST_ALGORITHM",
            description: "String",
            suggestions: ["external-mu", "sha256", "sha384", "sha512"],
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
          name: "--input-file",
          description: "Path to the input file to sign",
          priority: 100,
          args: {
            name: "INPUT_FILE",
            description: "String",
            template: "filepaths",
          },
        },
        optKey2,
        optKeyring2,
        optLocation3,
        optLogHttp,
        optNoSkipIntegrityVerification,
        optProject,
        optQuiet,
        {
          name: "--signature-file",
          description: "Path to the signature file to output",
          priority: 100,
          args: {
            name: "SIGNATURE_FILE",
            description: "String",
            template: "filepaths",
          },
        },
        optSkipIntegrityVerification,
        optTraceToken,
        optUserOutputEnabled,
        optVerbosity,
      ],
    },
    {
      name: "autokey-config",
      description: "Update and retrieve the AutokeyConfig",
      subcommands: [
        {
          name: "describe",
          description: "Describe the AutokeyConfig of a folder or project",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            optFlagsFile,
            optFlatten,
            {
              name: "--folder",
              description:
                "The folder id in which the AutokeyConfig resource exists",
              args: {
                name: "FOLDER",
                description: "String",
              },
            },
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optLogHttp,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
        {
          name: "show-effective-config",
          description:
            "Gets the effective Cloud KMS AutokeyConfig for a given project",
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
          description: "Update the AutokeyConfig for a folder or project",
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
            name: "CONFIG_FILE",
            description: "The file containing the AutokeyConfig resource",
            template: "filepaths",
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
      name: "decapsulate",
      description:
        "Decapsulate an input file using a key-encapsulation key version",
      options: [
        optAccessTokenFile,
        optAccount,
        optBillingProject,
        {
          name: "--ciphertext-file",
          description: "File path of the ciphertext file to decapsulate",
          priority: 100,
          args: {
            name: "CIPHERTEXT_FILE",
            description: "String",
            template: "filepaths",
          },
        },
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
          name: "--key",
          description: "To use for decapsulation",
          args: {
            name: "KEY",
            description: "String",
          },
        },
        optKeyring2,
        optLocation3,
        optLogHttp,
        optNoSkipIntegrityVerification,
        optProject,
        optQuiet,
        {
          name: "--shared-secret-file",
          description: "File path of the shared secret file to output",
          priority: 100,
          args: {
            name: "SHARED_SECRET_FILE",
            description: "String",
            template: "filepaths",
          },
        },
        optSkipIntegrityVerification,
        optTraceToken,
        optUserOutputEnabled,
        optVerbosity,
      ],
    },
    {
      name: "decrypt",
      description: "Decrypt a ciphertext file using a Cloud KMS key",
      options: [
        optAccessTokenFile,
        optAccount,
        optAdditionalAuthenticatedDataFile,
        optBillingProject,
        {
          name: "--ciphertext-file",
          description:
            "File path of the ciphertext file to decrypt. This file should contain the result of encrypting a file with `gcloud kms encrypt`",
          priority: 100,
          args: {
            name: "CIPHERTEXT_FILE",
            description: "String",
            template: "filepaths",
          },
        },
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
          name: "--key",
          description:
            "Cloud KMS key to use for decryption. * For symmetric keys, Cloud KMS detects the decryption key version from the ciphertext. If you specify a key version as part of a symmetric decryption request, an error is logged and decryption fails. * For asymmetric keys, the encryption key version can't be detected automatically. You must keep track of this information and provide the key version in the decryption request. The key version itself is not sensitive data and does not need to be encrypted",
          args: {
            name: "KEY",
            description: "String",
          },
        },
        optKeyring2,
        optLocation3,
        optLogHttp,
        optNoSkipIntegrityVerification,
        {
          name: "--plaintext-file",
          description: "File path of the plaintext file to output",
          priority: 100,
          args: {
            name: "PLAINTEXT_FILE",
            description: "String",
            template: "filepaths",
          },
        },
        optProject,
        optQuiet,
        optSkipIntegrityVerification,
        optTraceToken,
        optUserOutputEnabled,
        optVerbosity,
      ],
    },
    {
      name: "ekm-config",
      description: "Update and retrieve the EkmConfig",
      subcommands: [
        {
          name: "add-iam-policy-binding",
          description: "Add IAM policy binding to an EkmConfig",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optCondition,
            optConditionFromFile,
            optConfiguration,
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optLocation,
            optLogHttp,
            optMember,
            optProject,
            optQuiet,
            optRole,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
        {
          name: "describe",
          description: "Describe the EkmConfig",
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
            optLocation,
            optLogHttp,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
        {
          name: "get-iam-policy",
          description: "Get the IAM policy for an EkmConfig",
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
            optPageSize,
            optProject,
            optQuiet,
            optSortBy,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
        {
          name: "remove-iam-policy-binding",
          description: "Remove IAM policy binding from an EkmConfig",
          options: [
            optAccessTokenFile,
            optAccount,
            optAll,
            optBillingProject,
            optCondition2,
            optConditionFromFile,
            optConfiguration,
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optLocation,
            optLogHttp,
            optMember2,
            optNoAll,
            optProject,
            optQuiet,
            optRole2,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
        {
          name: "set-iam-policy",
          description: "Set the IAM policy for an EkmConfig",
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
            optLocation,
            optLogHttp,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "POLICY_FILE",
            description: "JSON or YAML file with the IAM policy",
            template: "filepaths",
          },
        },
        {
          name: "update",
          description: "Update the EkmConfig",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            {
              name: "--default-ekm-connection",
              description:
                "The resource name of the EkmConnection to be used as the default EkmConnection for all `external-vpc` CryptoKeys in a project and location. Can be an empty string to remove the default EkmConnection",
              args: {
                name: "DEFAULT_EKM_CONNECTION",
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
            optLocation,
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
    },
    {
      name: "ekm-connections",
      description: "Create and manage ekm connections",
      subcommands: [
        {
          name: "add-iam-policy-binding",
          description: "Add IAM policy binding for a kms ekm connection",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optCondition,
            optConditionFromFile,
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
            optMember,
            optProject,
            optQuiet,
            optRole,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "EKM_CONNECTION",
            description:
              "ID of the ekm connection or fully qualified identifier for the ekm connection",
          },
        },
        {
          name: "create",
          description: "Create a new ekm connection",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            {
              name: "--crypto-space-path",
              description:
                "Crypto space path for the EkmConnection. Required during EkmConnection creation if `--key-management-mode=cloud-kms`",
              args: {
                name: "CRYPTO_SPACE_PATH",
                description: "String",
              },
            },
            {
              name: "--endpoint-filter",
              description:
                "The filter applied to the endpoints of the resolved service. If no filter is specified, all endpoints will be considered",
              args: {
                name: "ENDPOINT_FILTER",
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
              name: "--hostname",
              description:
                "The hostname of the EKM replica used at TLS and HTTP layers",
              priority: 100,
              args: {
                name: "HOSTNAME",
                description: "String",
              },
            },
            optImpersonateServiceAccount,
            {
              name: "--key-management-mode",
              description:
                "Key management mode of the ekm connection. An EkmConnection in `cloud-kms` mode means Cloud KMS will attempt to create and manage the key material that resides on the EKM for crypto keys created with this EkmConnection. An EkmConnection in `manual` mode means the external key material will not be managed by Cloud KMS. Omitting the flag defaults to `manual`. _KEY_MANAGEMENT_MODE_ must be one of: *manual*, *cloud-kms*",
              args: {
                name: "KEY_MANAGEMENT_MODE",
                description: "String",
                suggestions: ["manual", "cloud-kms"],
              },
            },
            optLocation4,
            optLogHttp,
            optProject,
            optQuiet,
            {
              name: "--server-certificates-files",
              description:
                "A list of filenames of leaf server certificates used to authenticate HTTPS connections to the EKM replica in PEM format. If files are not in PEM, the assumed format will be DER",
              priority: 100,
              args: {
                name: "SERVER_CERTIFICATES",
                description: "List",
              },
            },
            {
              name: "--service-directory-service",
              description:
                "The resource name of the Service Directory service pointing to an EKM replica",
              priority: 100,
              args: {
                name: "SERVICE_DIRECTORY_SERVICE",
                description: "String",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "EKM_CONNECTION",
            description:
              "ID of the ekmconnection or fully qualified identifier for the ekmconnection",
          },
        },
        {
          name: "describe",
          description: "Get metadata for an ekmconnection",
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
            name: "EKM_CONNECTION",
            description:
              "ID of the ekmconnection or fully qualified identifier for the ekmconnection",
          },
        },
        {
          name: "get-iam-policy",
          description: "Get the IAM policy for an ekm connection",
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
            optLocation9,
            optLogHttp,
            optPageSize,
            optProject,
            optQuiet,
            optSortBy,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "EKM_CONNECTION",
            description:
              "ID of the ekm connection or fully qualified identifier for the ekm connection",
          },
        },
        {
          name: "list",
          description: "List ekmconnections within a location",
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
          name: "remove-iam-policy-binding",
          description: "Remove IAM policy binding for a kms ekm connection",
          options: [
            optAccessTokenFile,
            optAccount,
            optAll,
            optBillingProject,
            optCondition2,
            optConditionFromFile,
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
            optMember2,
            optNoAll,
            optProject,
            optQuiet,
            optRole2,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "EKM_CONNECTION",
            description:
              "ID of the ekm connection or fully qualified identifier for the ekm connection",
          },
        },
        {
          name: "set-iam-policy",
          description: "Set the IAM policy binding for a KMS ekm connection",
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
          ],
          args: [
            {
              name: "EKM_CONNECTION",
              description:
                "ID of the ekm connection or fully qualified identifier for the ekm connection",
            },
            {
              name: "POLICY_FILE",
              description:
                "Path to a local JSON or YAML formatted file containing a valid policy",
              template: "filepaths",
            },
          ],
        },
        {
          name: "update",
          description: "Update an ekmconnection",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            {
              name: "--crypto-space-path",
              description:
                "Crypto space path for the EkmConnection. Required during EkmConnection creation if `--key-management-mode=cloud-kms`",
              args: {
                name: "CRYPTO_SPACE_PATH",
                description: "String",
              },
            },
            {
              name: "--endpoint-filter",
              description:
                "The filter applied to the endpoints of the resolved service. If no filter is specified, all endpoints will be considered",
              args: {
                name: "ENDPOINT_FILTER",
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
              name: "--hostname",
              description:
                "The hostname of the EKM replica used at TLS and HTTP layers",
              args: {
                name: "HOSTNAME",
                description: "String",
              },
            },
            optImpersonateServiceAccount,
            {
              name: "--key-management-mode",
              description:
                "Key management mode of the ekm connection. An EkmConnection in `cloud-kms` mode means Cloud KMS will attempt to create and manage the key material that resides on the EKM for crypto keys created with this EkmConnection. An EkmConnection in `manual` mode means the external key material will not be managed by Cloud KMS. Omitting the flag defaults to `manual`. _KEY_MANAGEMENT_MODE_ must be one of: *manual*, *cloud-kms*",
              args: {
                name: "KEY_MANAGEMENT_MODE",
                description: "String",
                suggestions: ["manual", "cloud-kms"],
              },
            },
            optLocation4,
            optLogHttp,
            optProject,
            optQuiet,
            {
              name: "--server-certificates-files",
              description:
                "A list of filenames of leaf server certificates used to authenticate HTTPS connections to the EKM replica in PEM format. If files are not in PEM, the assumed format will be DER",
              args: {
                name: "SERVER_CERTIFICATES",
                description: "List",
              },
            },
            {
              name: "--service-directory-service",
              description:
                "The resource name of the Service Directory service pointing to an EKM replica",
              args: {
                name: "SERVICE_DIRECTORY_SERVICE",
                description: "String",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "EKM_CONNECTION",
            description:
              "ID of the ekmconnection or fully qualified identifier for the ekmconnection",
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
      name: "encrypt",
      description: "Encrypt a plaintext file using a key",
      options: [
        optAccessTokenFile,
        optAccount,
        optAdditionalAuthenticatedDataFile,
        optBillingProject,
        {
          name: "--ciphertext-file",
          description: "File path of the ciphertext file to output",
          priority: 100,
          args: {
            name: "CIPHERTEXT_FILE",
            description: "String",
            template: "filepaths",
          },
        },
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
          name: "--key",
          description: "The key to use for encryption",
          args: {
            name: "KEY",
            description: "String",
          },
        },
        optKeyring2,
        optLocation3,
        optLogHttp,
        optNoSkipIntegrityVerification,
        {
          name: "--plaintext-file",
          description: "File path of the plaintext file to encrypt",
          priority: 100,
          args: {
            name: "PLAINTEXT_FILE",
            description: "String",
            template: "filepaths",
          },
        },
        optProject,
        optQuiet,
        optSkipIntegrityVerification,
        optTraceToken,
        optUserOutputEnabled,
        optVerbosity,
      ],
    },
    {
      name: "import-jobs",
      description: "Create and manage import jobs",
      subcommands: [
        {
          name: "add-iam-policy-binding",
          description: "Add IAM policy binding to a KMS import job",
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
            optKeyring4,
            optLocation9,
            optLogHttp,
            optMember,
            optProject,
            optQuiet,
            optRole,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "IMPORT_JOB",
            description:
              "ID of the import job or fully qualified identifier for the import job",
          },
        },
        {
          name: "create",
          description: "Create a new import job",
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
              name: "--import-method",
              description:
                "The wrapping method to be used for incoming key material. For more information about choosing an import method, see https://cloud.google.com/kms/docs/key-wrapping. _IMPORT_METHOD_ must be one of: *rsa-oaep-3072-sha1-aes-256*, *rsa-oaep-3072-sha256*, *rsa-oaep-3072-sha256-aes-256*, *rsa-oaep-4096-sha1-aes-256*, *rsa-oaep-4096-sha256*, *rsa-oaep-4096-sha256-aes-256*",
              priority: 100,
              args: {
                name: "IMPORT_METHOD",
                description: "String",
                suggestions: [
                  "rsa-oaep-3072-sha1-aes-256",
                  "rsa-oaep-3072-sha256",
                  "rsa-oaep-3072-sha256-aes-256",
                  "rsa-oaep-4096-sha1-aes-256",
                  "rsa-oaep-4096-sha256",
                  "rsa-oaep-4096-sha256-aes-256",
                ],
              },
            },
            optKeyring,
            optLocation2,
            optLogHttp,
            optProject,
            {
              name: "--protection-level",
              description:
                "Protection level of the import job. _PROTECTION_LEVEL_ must be one of: *software*, *hsm*, *hsm-single-tenant*",
              priority: 100,
              args: {
                name: "PROTECTION_LEVEL",
                description: "String",
                suggestions: ["software", "hsm", "hsm-single-tenant"],
              },
            },
            optQuiet,
            {
              name: "--single-tenant-hsm-instance",
              description:
                "The single tenant HSM instance to use for the import job",
              args: {
                name: "SINGLE_TENANT_HSM_INSTANCE",
                description: "String",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "IMPORT_JOB",
            description: "Name of the import job to create",
          },
        },
        {
          name: "describe",
          description: "Get metadata for a given import job",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--attestation-file",
              description: "Path to the output attestation file",
              args: {
                name: "ATTESTATION_FILE",
                description: "String",
                template: "filepaths",
              },
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
            optImpersonateServiceAccount,
            optKeyring,
            optLocation2,
            optLogHttp,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "IMPORT_JOB",
            description: "Name of the import job to describe",
          },
        },
        {
          name: "get-iam-policy",
          description: "Get the IAM policy for an import job",
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
            optKeyring4,
            optLimit,
            optLocation9,
            optLogHttp,
            optPageSize,
            optProject,
            optQuiet,
            optSortBy,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "IMPORT_JOB",
            description:
              "ID of the import job or fully qualified identifier for the import job",
          },
        },
        {
          name: "list",
          description: "Lists import jobs within a keyring",
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
            optKeyring,
            optLimit,
            optLocation2,
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
          name: "remove-iam-policy-binding",
          description: "Remove IAM policy binding for a KMS import job",
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
            optKeyring4,
            optLocation9,
            optLogHttp,
            optMember2,
            optProject,
            optQuiet,
            optRole2,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "IMPORT_JOB",
            description:
              "ID of the import job or fully qualified identifier for the import job",
          },
        },
        {
          name: "set-iam-policy",
          description: "Set the IAM policy binding for a KMS import job",
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
            optKeyring4,
            optLocation9,
            optLogHttp,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: [
            {
              name: "IMPORT_JOB",
              description:
                "ID of the import job or fully qualified identifier for the import job",
            },
            {
              name: "POLICY_FILE",
              description:
                "Path to a local JSON or YAML formatted file containing a valid policy",
              template: "filepaths",
            },
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
      name: "inventory",
      description: "Manages the KMS Inventory and Key Tracking commands",
      subcommands: [
        {
          name: "get-protected-resources-summary",
          description: "Gets the protected resources summary",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            {
              name: "--fallback-scope",
              description:
                "If permission is denied at the organization level, fall back to the project level scope. _FALLBACK_SCOPE_ must be one of: *FALLBACK_SCOPE_UNSPECIFIED*, *FALLBACK_SCOPE_PROJECT*",
              args: {
                name: "FALLBACK_SCOPE",
                description: "String",
                suggestions: [
                  "FALLBACK_SCOPE_UNSPECIFIED",
                  "FALLBACK_SCOPE_PROJECT",
                ],
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
              name: "--keyname",
              description:
                "ID of the key or fully qualified identifier for the key",
              priority: 100,
              args: {
                name: "KEYNAME",
                description: "String",
              },
            },
            optKeyring3,
            optLocation5,
            optLogHttp,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
        {
          name: "list-keys",
          description: "Lists the keys in a project",
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
        {
          name: "search-protected-resources",
          description: "Searches the resources protected by a key",
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
            {
              name: "--keyname",
              description:
                "ID of the key or fully qualified identifier for the key",
              priority: 100,
              args: {
                name: "KEYNAME",
                description: "String",
              },
            },
            optKeyring3,
            optLimit,
            optLocation5,
            optLogHttp,
            optNoUri,
            optPageSize,
            optProject,
            optQuiet,
            {
              name: "--resource-types",
              description:
                "A list of resource types that this request searches for. If empty, it will search all the [trackable resource types](https://cloud.google.com/kms/docs/view-key-usage#tracked-resource-types)",
              args: {
                name: "RESOURCE_TYPES",
                description: "List",
              },
            },
            {
              name: "--scope",
              description:
                "The scope of the search, which can be an organization ID or a project ID or a project number",
              priority: 100,
              args: {
                name: "SEARCH_SCOPE",
                description: "String",
              },
            },
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
      name: "key-handles",
      description: "Create and manage KeyHandle resources",
      subcommands: [
        {
          name: "create",
          description: "Create a new KeyHandle",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--generate-key-handle-id",
              description:
                "Generate a KeyHandle id for the new KeyHandle resource",
            },
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            {
              name: "--key-handle-id",
              description: "The KeyHandle id for the new KeyHandle resource",
              args: {
                name: "KEY_HANDLE_ID",
                description: "String",
              },
            },
            optLocation,
            optLogHttp,
            {
              name: "--no-generate-key-handle-id",
              description:
                "Generate a KeyHandle id for the new KeyHandle resource",
              hidden: true,
            },
            optProject,
            optQuiet,
            {
              name: "--resource-type",
              description:
                "The resource type selector for KeyHandle resources of the form {{SERVICE}}.{{UNIVERSE_DOMAIN}}/{{TYPE}}",
              priority: 100,
              args: {
                name: "RESOURCE_TYPE",
                description: "String",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
        {
          name: "describe",
          description: "Get metadata for a KeyHandle",
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
          ],
          args: {
            name: "KEY_HANDLE",
            description:
              "ID of the key handle or fully qualified identifier for the key handle",
          },
        },
        {
          name: "list",
          description: "List KeyHandle resources within a project and location",
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
            {
              name: "--resource-type",
              description:
                "The resource type selector for KeyHandle resources of the form {{SERVICE}}.{{UNIVERSE_DOMAIN}}/{{TYPE}}",
              priority: 100,
              args: {
                name: "RESOURCE_TYPE",
                description: "String",
              },
            },
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
      name: "keyrings",
      description: "Create and manage keyrings",
      subcommands: [
        {
          name: "add-iam-policy-binding",
          description: "Add IAM policy binding for a kms keyring",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optCondition,
            optConditionFromFile,
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
            optMember,
            optProject,
            optQuiet,
            optRole,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "KEYRING",
            description:
              "ID of the keyring or fully qualified identifier for the keyring",
          },
        },
        {
          name: "create",
          description: "Create a new keyring",
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
            name: "KEYRING",
            description:
              "ID of the keyring or fully qualified identifier for the keyring",
          },
        },
        {
          name: "describe",
          description: "Get metadata for a keyring",
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
            name: "KEYRING",
            description:
              "ID of the keyring or fully qualified identifier for the keyring",
          },
        },
        {
          name: "get-iam-policy",
          description: "Get the IAM policy for a keyring",
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
            optLocation3,
            optLogHttp,
            optPageSize,
            optProject,
            optQuiet,
            optSortBy,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "KEYRING",
            description: "Name of the key ring whose IAM policy to fetch",
          },
        },
        {
          name: "list",
          description: "List keyrings within a location",
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
          name: "remove-iam-policy-binding",
          description: "Remove IAM policy binding for a kms keyring",
          options: [
            optAccessTokenFile,
            optAccount,
            optAll,
            optBillingProject,
            optCondition2,
            optConditionFromFile,
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
            optMember2,
            optNoAll,
            optProject,
            optQuiet,
            optRole2,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "KEYRING",
            description:
              "ID of the keyring or fully qualified identifier for the keyring",
          },
        },
        {
          name: "set-iam-policy",
          description: "Set the IAM policy for a keyring",
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
            optLocation3,
            optLogHttp,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: [
            {
              name: "KEYRING",
              description: "Name of the key ring whose IAM policy to update",
            },
            {
              name: "POLICY_FILE",
              description: "JSON or YAML file with the IAM policy",
              template: "filepaths",
            },
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
      name: "keys",
      description: "Create and manage keys",
      subcommands: [
        {
          name: "add-iam-policy-binding",
          description: "Add IAM policy binding for a kms key",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optCondition,
            optConditionFromFile,
            optConfiguration,
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optKeyring4,
            optLocation9,
            optLogHttp,
            optMember,
            optProject,
            optQuiet,
            optRole,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "KEY",
            description:
              "ID of the key or fully qualified identifier for the key",
          },
        },
        {
          name: "create",
          description: "Create a new key",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--allowed-access-reasons",
              description:
                "The list of allowed Key Access Justifications access reasons on the key. The key must be enrolled in Key Access Justifications to configure this field. By default, this field is absent, and all justification codes are allowed. For more information about justification codes, see https://cloud.google.com/assured-workloads/key-access-justifications/docs/justification-codes. _ALLOWED_ACCESS_REASONS_ must be one of: *customer-authorized-workflow-servicing*, *customer-initiated-access*, *customer-initiated-support*, *google-initiated-review*, *google-initiated-service*, *google-initiated-system-operation*, *google-response-to-production-alert*, *modified-customer-initiated-access*, *modified-google-initiated-system-operation*, *reason-not-expected*, *reason-unspecified*, *third-party-data-request*",
              args: {
                name: "ALLOWED_ACCESS_REASONS",
                description: "List",
              },
            },
            optBillingProject,
            optConfiguration,
            {
              name: "--crypto-key-backend",
              description:
                "The resource name of the backend environment where the key material for all CryptoKeyVersions associated with this CryptoKey reside and where all related cryptographic operations are performed. Currently only applicable for EXTERNAL_VPC and EkmConnection resource names",
              args: {
                name: "CRYPTO_KEY_BACKEND",
                description: "String",
              },
            },
            {
              name: "--default-algorithm",
              description:
                "The default algorithm for the crypto key. For more information about choosing an algorithm, see https://cloud.google.com/kms/docs/algorithms. _DEFAULT_ALGORITHM_ must be one of: *aes-128-cbc*, *aes-128-ctr*, *aes-128-gcm*, *aes-256-cbc*, *aes-256-ctr*, *aes-256-gcm*, *ec-sign-ed25519*, *ec-sign-p256-sha256*, *ec-sign-p384-sha384*, *ec-sign-secp256k1-sha256*, *external-symmetric-encryption*, *google-symmetric-encryption*, *hmac-sha1*, *hmac-sha224*, *hmac-sha256*, *hmac-sha384*, *hmac-sha512*, *kem-xwing*, *ml-kem-1024*, *ml-kem-768*, *pq-sign-hash-slh-dsa-sha2-128s-sha256*, *pq-sign-ml-dsa-44*, *pq-sign-ml-dsa-44-external-mu*, *pq-sign-ml-dsa-65*, *pq-sign-ml-dsa-65-external-mu*, *pq-sign-ml-dsa-87*, *pq-sign-ml-dsa-87-external-mu*, *pq-sign-slh-dsa-sha2-128s*, *rsa-decrypt-oaep-2048-sha1*, *rsa-decrypt-oaep-2048-sha256*, *rsa-decrypt-oaep-3072-sha1*, *rsa-decrypt-oaep-3072-sha256*, *rsa-decrypt-oaep-4096-sha1*, *rsa-decrypt-oaep-4096-sha256*, *rsa-decrypt-oaep-4096-sha512*, *rsa-sign-pkcs1-2048-sha256*, *rsa-sign-pkcs1-3072-sha256*, *rsa-sign-pkcs1-4096-sha256*, *rsa-sign-pkcs1-4096-sha512*, *rsa-sign-pss-2048-sha256*, *rsa-sign-pss-3072-sha256*, *rsa-sign-pss-4096-sha256*, *rsa-sign-pss-4096-sha512*, *rsa-sign-raw-pkcs1-2048*, *rsa-sign-raw-pkcs1-3072*, *rsa-sign-raw-pkcs1-4096*",
              args: {
                name: "DEFAULT_ALGORITHM",
                description: "String",
                suggestions: [
                  "aes-128-cbc",
                  "aes-128-ctr",
                  "aes-128-gcm",
                  "aes-256-cbc",
                  "aes-256-ctr",
                  "aes-256-gcm",
                  "ec-sign-ed25519",
                  "ec-sign-p256-sha256",
                  "ec-sign-p384-sha384",
                  "ec-sign-secp256k1-sha256",
                  "external-symmetric-encryption",
                  "google-symmetric-encryption",
                  "hmac-sha1",
                  "hmac-sha224",
                  "hmac-sha256",
                  "hmac-sha384",
                  "hmac-sha512",
                  "kem-xwing",
                  "ml-kem-1024",
                  "ml-kem-768",
                  "pq-sign-hash-slh-dsa-sha2-128s-sha256",
                  "pq-sign-ml-dsa-44",
                  "pq-sign-ml-dsa-44-external-mu",
                  "pq-sign-ml-dsa-65",
                  "pq-sign-ml-dsa-65-external-mu",
                  "pq-sign-ml-dsa-87",
                  "pq-sign-ml-dsa-87-external-mu",
                  "pq-sign-slh-dsa-sha2-128s",
                  "rsa-decrypt-oaep-2048-sha1",
                  "rsa-decrypt-oaep-2048-sha256",
                  "rsa-decrypt-oaep-3072-sha1",
                  "rsa-decrypt-oaep-3072-sha256",
                  "rsa-decrypt-oaep-4096-sha1",
                  "rsa-decrypt-oaep-4096-sha256",
                  "rsa-decrypt-oaep-4096-sha512",
                  "rsa-sign-pkcs1-2048-sha256",
                  "rsa-sign-pkcs1-3072-sha256",
                  "rsa-sign-pkcs1-4096-sha256",
                  "rsa-sign-pkcs1-4096-sha512",
                  "rsa-sign-pss-2048-sha256",
                  "rsa-sign-pss-3072-sha256",
                  "rsa-sign-pss-4096-sha256",
                  "rsa-sign-pss-4096-sha512",
                  "rsa-sign-raw-pkcs1-2048",
                  "rsa-sign-raw-pkcs1-3072",
                  "rsa-sign-raw-pkcs1-4096",
                ],
              },
            },
            {
              name: "--destroy-scheduled-duration",
              description:
                "The amount of time that versions of the key should spend in the DESTROY_SCHEDULED state before transitioning to DESTROYED. See $ gcloud topic datetimes for information on duration formats",
              args: {
                name: "DESTROY_SCHEDULED_DURATION",
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
              name: "--import-only",
              description: "Restrict this key to imported versions only",
            },
            optKeyring3,
            {
              name: "--labels",
              description: "List of label KEY=VALUE pairs to add",
              args: {
                name: "KEY=VALUE",
                description: "Dict",
              },
            },
            optLocation5,
            optLogHttp,
            optNextRotationTime,
            {
              name: "--no-import-only",
              description: "Restrict this key to imported versions only",
              hidden: true,
            },
            {
              name: "--no-skip-initial-version-creation",
              description:
                "Skip creating the first version in a key and setting it as primary during creation",
              hidden: true,
            },
            optProject,
            {
              name: "--protection-level",
              description:
                "Protection level of the key. _PROTECTION_LEVEL_ must be one of: *software*, *hsm*, *hsm-single-tenant*, *external*, *external-vpc*",
              args: {
                name: "PROTECTION_LEVEL",
                description: "String",
                suggestions: [
                  "software",
                  "hsm",
                  "hsm-single-tenant",
                  "external",
                  "external-vpc",
                ],
              },
            },
            {
              name: "--purpose",
              description:
                'The "purpose" of the key. _PURPOSE_ must be one of: *asymmetric-encryption*, *asymmetric-signing*, *encryption*, *key-encapsulation*, *mac*, *raw-encryption*',
              priority: 100,
              args: {
                name: "PURPOSE",
                description: "String",
                suggestions: [
                  "asymmetric-encryption",
                  "asymmetric-signing",
                  "encryption",
                  "key-encapsulation",
                  "mac",
                  "raw-encryption",
                ],
              },
            },
            optQuiet,
            optRotationPeriod,
            {
              name: "--skip-initial-version-creation",
              description:
                "Skip creating the first version in a key and setting it as primary during creation",
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "KEY",
            description:
              "ID of the key or fully qualified identifier for the key",
          },
        },
        {
          name: "delete",
          description: "Delete a key",
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
            optKeyring2,
            {
              name: "--location",
              description: "Location of the key",
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
            name: "KEY",
            description: "Name of the key to delete",
          },
        },
        {
          name: "describe",
          description: "Get metadata for a given key",
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
            optKeyring3,
            optLocation5,
            optLogHttp,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "KEY",
            description:
              "ID of the key or fully qualified identifier for the key",
          },
        },
        {
          name: "get-iam-policy",
          description: "Get the IAM policy for a key",
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
            optKeyring3,
            optLimit,
            optLocation5,
            optLogHttp,
            optPageSize,
            optProject,
            optQuiet,
            optSortBy,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "KEY",
            description:
              "ID of the key or fully qualified identifier for the key",
          },
        },
        {
          name: "list",
          description: "List the keys within a keyring",
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
            {
              name: "--keyring",
              description:
                "ID of the keyring or fully qualified identifier for the keyring",
              priority: 100,
              args: {
                name: "KEYRING",
                description: "String",
              },
            },
            optLimit,
            optLocation6,
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
          name: "remove-iam-policy-binding",
          description: "Remove IAM policy binding for a kms key",
          options: [
            optAccessTokenFile,
            optAccount,
            optAll,
            optBillingProject,
            optCondition2,
            optConditionFromFile,
            optConfiguration,
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optKeyring4,
            optLocation9,
            optLogHttp,
            optMember2,
            optNoAll,
            optProject,
            optQuiet,
            optRole2,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "KEY",
            description:
              "ID of the key or fully qualified identifier for the key",
          },
        },
        {
          name: "remove-rotation-schedule",
          description: "Remove the rotation schedule for a key",
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
            optKeyring3,
            optLocation5,
            optLogHttp,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "KEY",
            description:
              "ID of the key or fully qualified identifier for the key",
          },
        },
        {
          name: "set-iam-policy",
          description: "Set the IAM policy for a key",
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
            optKeyring3,
            optLocation5,
            optLogHttp,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: [
            {
              name: "KEY",
              description:
                "ID of the key or fully qualified identifier for the key",
            },
            {
              name: "POLICY_FILE",
              description: "JSON or YAML file with the IAM policy",
              template: "filepaths",
            },
          ],
        },
        {
          name: "set-primary-version",
          description: "Set the primary version of a key",
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
            optKeyring3,
            optLocation5,
            optLogHttp,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "KEY",
            description:
              "ID of the key or fully qualified identifier for the key",
          },
        },
        {
          name: "set-rotation-schedule",
          description: "Update the rotation schedule for a key",
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
            optKeyring3,
            optLocation5,
            optLogHttp,
            optNextRotationTime,
            optProject,
            optQuiet,
            optRotationPeriod,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "KEY",
            description:
              "ID of the key or fully qualified identifier for the key",
          },
        },
        {
          name: "update",
          description: "Update a key",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--allowed-access-reasons",
              description:
                "The list of allowed Key Access Justifications access reasons on the key. The key must be enrolled in Key Access Justifications to configure this field. By default, this field is absent, and all justification codes are allowed. For more information about justification codes, see https://cloud.google.com/assured-workloads/key-access-justifications/docs/justification-codes. _ALLOWED_ACCESS_REASONS_ must be one of: *customer-authorized-workflow-servicing*, *customer-initiated-access*, *customer-initiated-support*, *google-initiated-review*, *google-initiated-service*, *google-initiated-system-operation*, *google-response-to-production-alert*, *modified-customer-initiated-access*, *modified-google-initiated-system-operation*, *reason-not-expected*, *reason-unspecified*, *third-party-data-request*",
              args: {
                name: "ALLOWED_ACCESS_REASONS",
                description: "List",
              },
            },
            optBillingProject,
            {
              name: "--clear-labels",
              description:
                "Remove all labels. If `--update-labels` is also specified then `--clear-labels` is applied first",
            },
            optConfiguration,
            {
              name: "--default-algorithm",
              description:
                "The default algorithm for the crypto key. For more information about choosing an algorithm, see https://cloud.google.com/kms/docs/algorithms. _DEFAULT_ALGORITHM_ must be one of: *aes-128-cbc*, *aes-128-ctr*, *aes-128-gcm*, *aes-256-cbc*, *aes-256-ctr*, *aes-256-gcm*, *ec-sign-ed25519*, *ec-sign-p256-sha256*, *ec-sign-p384-sha384*, *ec-sign-secp256k1-sha256*, *external-symmetric-encryption*, *google-symmetric-encryption*, *hmac-sha1*, *hmac-sha224*, *hmac-sha256*, *hmac-sha384*, *hmac-sha512*, *kem-xwing*, *ml-kem-1024*, *ml-kem-768*, *pq-sign-hash-slh-dsa-sha2-128s-sha256*, *pq-sign-ml-dsa-44*, *pq-sign-ml-dsa-44-external-mu*, *pq-sign-ml-dsa-65*, *pq-sign-ml-dsa-65-external-mu*, *pq-sign-ml-dsa-87*, *pq-sign-ml-dsa-87-external-mu*, *pq-sign-slh-dsa-sha2-128s*, *rsa-decrypt-oaep-2048-sha1*, *rsa-decrypt-oaep-2048-sha256*, *rsa-decrypt-oaep-3072-sha1*, *rsa-decrypt-oaep-3072-sha256*, *rsa-decrypt-oaep-4096-sha1*, *rsa-decrypt-oaep-4096-sha256*, *rsa-decrypt-oaep-4096-sha512*, *rsa-sign-pkcs1-2048-sha256*, *rsa-sign-pkcs1-3072-sha256*, *rsa-sign-pkcs1-4096-sha256*, *rsa-sign-pkcs1-4096-sha512*, *rsa-sign-pss-2048-sha256*, *rsa-sign-pss-3072-sha256*, *rsa-sign-pss-4096-sha256*, *rsa-sign-pss-4096-sha512*, *rsa-sign-raw-pkcs1-2048*, *rsa-sign-raw-pkcs1-3072*, *rsa-sign-raw-pkcs1-4096*",
              args: {
                name: "DEFAULT_ALGORITHM",
                description: "String",
                suggestions: [
                  "aes-128-cbc",
                  "aes-128-ctr",
                  "aes-128-gcm",
                  "aes-256-cbc",
                  "aes-256-ctr",
                  "aes-256-gcm",
                  "ec-sign-ed25519",
                  "ec-sign-p256-sha256",
                  "ec-sign-p384-sha384",
                  "ec-sign-secp256k1-sha256",
                  "external-symmetric-encryption",
                  "google-symmetric-encryption",
                  "hmac-sha1",
                  "hmac-sha224",
                  "hmac-sha256",
                  "hmac-sha384",
                  "hmac-sha512",
                  "kem-xwing",
                  "ml-kem-1024",
                  "ml-kem-768",
                  "pq-sign-hash-slh-dsa-sha2-128s-sha256",
                  "pq-sign-ml-dsa-44",
                  "pq-sign-ml-dsa-44-external-mu",
                  "pq-sign-ml-dsa-65",
                  "pq-sign-ml-dsa-65-external-mu",
                  "pq-sign-ml-dsa-87",
                  "pq-sign-ml-dsa-87-external-mu",
                  "pq-sign-slh-dsa-sha2-128s",
                  "rsa-decrypt-oaep-2048-sha1",
                  "rsa-decrypt-oaep-2048-sha256",
                  "rsa-decrypt-oaep-3072-sha1",
                  "rsa-decrypt-oaep-3072-sha256",
                  "rsa-decrypt-oaep-4096-sha1",
                  "rsa-decrypt-oaep-4096-sha256",
                  "rsa-decrypt-oaep-4096-sha512",
                  "rsa-sign-pkcs1-2048-sha256",
                  "rsa-sign-pkcs1-3072-sha256",
                  "rsa-sign-pkcs1-4096-sha256",
                  "rsa-sign-pkcs1-4096-sha512",
                  "rsa-sign-pss-2048-sha256",
                  "rsa-sign-pss-3072-sha256",
                  "rsa-sign-pss-4096-sha256",
                  "rsa-sign-pss-4096-sha512",
                  "rsa-sign-raw-pkcs1-2048",
                  "rsa-sign-raw-pkcs1-3072",
                  "rsa-sign-raw-pkcs1-4096",
                ],
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
            optKeyring3,
            optLocation5,
            optLogHttp,
            optNextRotationTime,
            {
              name: "--no-clear-labels",
              description:
                "Remove all labels. If `--update-labels` is also specified then `--clear-labels` is applied first",
              hidden: true,
            },
            {
              name: "--no-remove-key-access-justifications-policy",
              description:
                "Removes the Key Access Justifications policy on the key, making all justification codes allowed",
              hidden: true,
            },
            {
              name: "--no-remove-rotation-schedule",
              description: "Remove any existing rotation schedule on the key",
              hidden: true,
            },
            {
              name: "--primary-version",
              description: "Primary version to make primary",
              args: {
                name: "PRIMARY_VERSION",
                description: "String",
              },
            },
            optProject,
            optQuiet,
            {
              name: "--remove-key-access-justifications-policy",
              description:
                "Removes the Key Access Justifications policy on the key, making all justification codes allowed",
            },
            {
              name: "--remove-labels",
              description:
                "List of label keys to remove. If a label does not exist it is silently ignored. If `--update-labels` is also specified then `--update-labels` is applied first",
              args: {
                name: "KEY",
                description: "List",
              },
            },
            {
              name: "--remove-rotation-schedule",
              description: "Remove any existing rotation schedule on the key",
            },
            optRotationPeriod,
            optTraceToken,
            {
              name: "--update-labels",
              description:
                "List of label KEY=VALUE pairs to update. If a label exists, its value is modified. Otherwise, a new label is created",
              args: {
                name: "KEY=VALUE",
                description: "Dict",
              },
            },
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "KEY",
            description:
              "ID of the key or fully qualified identifier for the key",
          },
        },
        {
          name: "versions",
          description: "Create and manage versions",
          subcommands: [
            {
              name: "create",
              description: "Create a new version",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                optConfiguration,
                {
                  name: "--ekm-connection-key-path",
                  description:
                    'The path to the external key material on the EKM for keys with protection level "external-vpc"',
                  args: {
                    name: "EKM_CONNECTION_KEY_PATH",
                    description: "String",
                  },
                },
                {
                  name: "--external-key-uri",
                  description:
                    'The URI of the external key for keys with protection level "external"',
                  args: {
                    name: "EXTERNAL_KEY_URI",
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
                optKey,
                optKeyring2,
                optLocation3,
                optLogHttp,
                {
                  name: "--no-primary",
                  description:
                    "If specified, immediately makes the new version primary. This should only be used with the `encryption` purpose",
                  hidden: true,
                },
                {
                  name: "--primary",
                  description:
                    "If specified, immediately makes the new version primary. This should only be used with the `encryption` purpose",
                },
                optProject,
                optQuiet,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
            },
            {
              name: "delete",
              description: "Delete a key version",
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
                optKey,
                optKeyring2,
                optLocation3,
                optLogHttp,
                optProject,
                optQuiet,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "VERSION",
                description: "Name of the version to delete",
              },
            },
            {
              name: "describe",
              description: "Get metadata for a given version",
              options: [
                optAccessTokenFile,
                optAccount,
                {
                  name: "--attestation-file",
                  description: "Path to the output attestation file",
                  args: {
                    name: "ATTESTATION_FILE",
                    description: "String",
                    template: "filepaths",
                  },
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
                optImpersonateServiceAccount,
                optKey,
                optKeyring2,
                optLocation3,
                optLogHttp,
                optProject,
                optQuiet,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "VERSION",
                description: "Name of the version to describe",
              },
            },
            {
              name: "destroy",
              description: "Schedule a version to be destroyed",
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
                optKey,
                optKeyring2,
                optLocation3,
                optLogHttp,
                optProject,
                optQuiet,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "VERSION",
                description: "Name of the version to destroy",
              },
            },
            {
              name: "disable",
              description: "Disable a given version",
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
                optKey,
                optKeyring2,
                optLocation3,
                optLogHttp,
                optProject,
                optQuiet,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "VERSION",
                description: "Name of the version to disable",
              },
            },
            {
              name: "enable",
              description: "Enable a given version",
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
                optKey,
                optKeyring2,
                optLocation3,
                optLogHttp,
                optProject,
                optQuiet,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "VERSION",
                description: "Name of the version to enable",
              },
            },
            {
              name: "get-certificate-chain",
              description: "Get a certificate chain for a given version",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                {
                  name: "--certificate-chain-type",
                  description:
                    "Certificate chain to retrieve. _CERTIFICATE_CHAIN_TYPE_ must be one of: *all*, *cavium*, *google-card*, *google-partition*",
                  args: {
                    name: "CERTIFICATE_CHAIN_TYPE",
                    description: "String",
                    suggestions: [
                      "all",
                      "cavium",
                      "google-card",
                      "google-partition",
                    ],
                  },
                },
                optConfiguration,
                optFlagsFile,
                optFlatten,
                optFormat,
                {
                  name: "--help",
                  description: "Display detailed help",
                },
                optImpersonateServiceAccount,
                optKey,
                optKeyring2,
                optLocation3,
                optLogHttp,
                {
                  name: "--output-file",
                  description: "Path to the output file to store PEM",
                  args: {
                    name: "OUTPUT_FILE",
                    description: "String",
                    template: "filepaths",
                  },
                },
                optProject,
                optQuiet,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "VERSION",
                description:
                  "Name of the version from which to get the certificate chain",
              },
            },
            {
              name: "get-public-key",
              description: "Get the public key for a given version",
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
                optKey,
                optKeyring2,
                optLocation3,
                optLogHttp,
                {
                  name: "--output-file",
                  description: "Path to the output file to store public key",
                  args: {
                    name: "OUTPUT_FILE",
                    description: "String",
                    template: "filepaths",
                  },
                },
                optProject,
                {
                  name: "--public-key-format",
                  description:
                    "The format in which the public key will be returned",
                  args: {
                    name: "PUBLIC_KEY_FORMAT",
                    description: "String",
                  },
                },
                optQuiet,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "VERSION",
                description: "Name of the version to get public key",
              },
            },
            {
              name: "import",
              description: "Import a version into an existing crypto key",
              options: [
                optAccessTokenFile,
                optAccount,
                {
                  name: "--algorithm",
                  description:
                    "The algorithm to assign to the new key version. For more information about supported algorithms, see https://cloud.google.com/kms/docs/algorithms. _ALGORITHM_ must be one of: *aes-128-cbc*, *aes-128-ctr*, *aes-128-gcm*, *aes-256-cbc*, *aes-256-ctr*, *aes-256-gcm*, *ec-sign-ed25519*, *ec-sign-p256-sha256*, *ec-sign-p384-sha384*, *ec-sign-secp256k1-sha256*, *google-symmetric-encryption*, *hmac-sha1*, *hmac-sha224*, *hmac-sha256*, *hmac-sha384*, *hmac-sha512*, *kem-xwing*, *ml-kem-1024*, *ml-kem-768*, *pq-sign-hash-slh-dsa-sha2-128s-sha256*, *pq-sign-ml-dsa-44*, *pq-sign-ml-dsa-44-external-mu*, *pq-sign-ml-dsa-65*, *pq-sign-ml-dsa-65-external-mu*, *pq-sign-ml-dsa-87*, *pq-sign-ml-dsa-87-external-mu*, *pq-sign-slh-dsa-sha2-128s*, *rsa-decrypt-oaep-2048-sha1*, *rsa-decrypt-oaep-2048-sha256*, *rsa-decrypt-oaep-3072-sha1*, *rsa-decrypt-oaep-3072-sha256*, *rsa-decrypt-oaep-4096-sha1*, *rsa-decrypt-oaep-4096-sha256*, *rsa-decrypt-oaep-4096-sha512*, *rsa-sign-pkcs1-2048-sha256*, *rsa-sign-pkcs1-3072-sha256*, *rsa-sign-pkcs1-4096-sha256*, *rsa-sign-pkcs1-4096-sha512*, *rsa-sign-pss-2048-sha256*, *rsa-sign-pss-3072-sha256*, *rsa-sign-pss-4096-sha256*, *rsa-sign-pss-4096-sha512*, *rsa-sign-raw-pkcs1-2048*, *rsa-sign-raw-pkcs1-3072*, *rsa-sign-raw-pkcs1-4096*",
                  priority: 100,
                  args: {
                    name: "ALGORITHM",
                    description: "String",
                    suggestions: [
                      "aes-128-cbc",
                      "aes-128-ctr",
                      "aes-128-gcm",
                      "aes-256-cbc",
                      "aes-256-ctr",
                      "aes-256-gcm",
                      "ec-sign-ed25519",
                      "ec-sign-p256-sha256",
                      "ec-sign-p384-sha384",
                      "ec-sign-secp256k1-sha256",
                      "google-symmetric-encryption",
                      "hmac-sha1",
                      "hmac-sha224",
                      "hmac-sha256",
                      "hmac-sha384",
                      "hmac-sha512",
                      "kem-xwing",
                      "ml-kem-1024",
                      "ml-kem-768",
                      "pq-sign-hash-slh-dsa-sha2-128s-sha256",
                      "pq-sign-ml-dsa-44",
                      "pq-sign-ml-dsa-44-external-mu",
                      "pq-sign-ml-dsa-65",
                      "pq-sign-ml-dsa-65-external-mu",
                      "pq-sign-ml-dsa-87",
                      "pq-sign-ml-dsa-87-external-mu",
                      "pq-sign-slh-dsa-sha2-128s",
                      "rsa-decrypt-oaep-2048-sha1",
                      "rsa-decrypt-oaep-2048-sha256",
                      "rsa-decrypt-oaep-3072-sha1",
                      "rsa-decrypt-oaep-3072-sha256",
                      "rsa-decrypt-oaep-4096-sha1",
                      "rsa-decrypt-oaep-4096-sha256",
                      "rsa-decrypt-oaep-4096-sha512",
                      "rsa-sign-pkcs1-2048-sha256",
                      "rsa-sign-pkcs1-3072-sha256",
                      "rsa-sign-pkcs1-4096-sha256",
                      "rsa-sign-pkcs1-4096-sha512",
                      "rsa-sign-pss-2048-sha256",
                      "rsa-sign-pss-3072-sha256",
                      "rsa-sign-pss-4096-sha256",
                      "rsa-sign-pss-4096-sha512",
                      "rsa-sign-raw-pkcs1-2048",
                      "rsa-sign-raw-pkcs1-3072",
                      "rsa-sign-raw-pkcs1-4096",
                    ],
                  },
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
                optImpersonateServiceAccount,
                {
                  name: "--import-job",
                  description: "Name of the import job to import from",
                  priority: 100,
                  args: {
                    name: "IMPORT_JOB",
                    description: "String",
                  },
                },
                {
                  name: "--key",
                  description: "The containing key to import into",
                  args: {
                    name: "KEY",
                    description: "String",
                  },
                },
                optKeyring2,
                optLocation3,
                optLogHttp,
                optProject,
                {
                  name: "--public-key-file",
                  description:
                    "Path to the public key of the ImportJob, used to wrap the key for import. If missing, the public key will be fetched on your behalf",
                  args: {
                    name: "PUBLIC_KEY_FILE",
                    description: "String",
                    template: "filepaths",
                  },
                },
                optQuiet,
                {
                  name: "--rsa-aes-wrapped-key-file",
                  description:
                    "(DEPRECATED) Path to the wrapped RSA AES key file to import",
                  hidden: true,
                  deprecated: true,
                  args: {
                    name: "RSA_AES_WRAPPED_KEY_FILE",
                    description: "String",
                    template: "filepaths",
                  },
                },
                {
                  name: "--target-key-file",
                  description:
                    "Path to the unwrapped target key to import into a Cloud KMS key version. If specified, the key will be securely wrapped before transmission to Google",
                  args: {
                    name: "TARGET_KEY_FILE",
                    description: "String",
                    template: "filepaths",
                  },
                },
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
                {
                  name: "--wrapped-key-file",
                  description:
                    "Path to the RSA/RSA+AES wrapped key file to import",
                  args: {
                    name: "WRAPPED_KEY_FILE",
                    description: "String",
                    template: "filepaths",
                  },
                },
              ],
            },
            {
              name: "list",
              description: "List the versions within a key",
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
                optKey,
                optKeyring2,
                optLimit,
                optLocation3,
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
              name: "restore",
              description: "Restore a version scheduled for destruction",
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
                optKey,
                optKeyring2,
                optLocation3,
                optLogHttp,
                optProject,
                optQuiet,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "VERSION",
                description: "Name of the version to restore",
              },
            },
            {
              name: "update",
              description: "Update a key version",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                optConfiguration,
                {
                  name: "--ekm-connection-key-path",
                  description:
                    'The path to the external key material on the EKM for keys with protection level "external-vpc"',
                  args: {
                    name: "EKM_CONNECTION_KEY_PATH",
                    description: "String",
                  },
                },
                {
                  name: "--external-key-uri",
                  description:
                    'The URI of the external key for keys with protection level "external"',
                  args: {
                    name: "EXTERNAL_KEY_URI",
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
                optKey,
                optKeyring2,
                optLocation3,
                optLogHttp,
                optProject,
                optQuiet,
                {
                  name: "--state",
                  description: "State of the key version",
                  args: {
                    name: "STATE",
                    description: "String",
                  },
                },
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "VERSION",
                description: "Name of the version to describe",
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
    },
    {
      name: "locations",
      description: "View locations available for a project",
      subcommands: [
        {
          name: "list",
          description: "List the project's locations",
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
      name: "mac-sign",
      description: "Sign a user input file using a MAC key version",
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
          name: "--input-file",
          description: "Path to the input file to sign",
          priority: 100,
          args: {
            name: "INPUT_FILE",
            description: "String",
            template: "filepaths",
          },
        },
        optKey2,
        optKeyring2,
        optLocation3,
        optLogHttp,
        optNoSkipIntegrityVerification,
        optProject,
        optQuiet,
        {
          name: "--signature-file",
          description: "Path to the signature file to output",
          priority: 100,
          args: {
            name: "SIGNATURE_FILE",
            description: "String",
            template: "filepaths",
          },
        },
        optSkipIntegrityVerification,
        optTraceToken,
        optUserOutputEnabled,
        optVerbosity,
      ],
    },
    {
      name: "mac-verify",
      description: "Verify a user signature file using a MAC key version",
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
          name: "--input-file",
          description: "Path to the input file to use for verification",
          priority: 100,
          args: {
            name: "INPUT_FILE",
            description: "String",
            template: "filepaths",
          },
        },
        optKey2,
        optKeyring2,
        optLocation3,
        optLogHttp,
        optNoSkipIntegrityVerification,
        optProject,
        optQuiet,
        {
          name: "--signature-file",
          description: "Path to the signature file to be verified",
          priority: 100,
          args: {
            name: "SIGNATURE_FILE",
            description: "String",
            template: "filepaths",
          },
        },
        optSkipIntegrityVerification,
        optTraceToken,
        optUserOutputEnabled,
        optVerbosity,
      ],
    },
    {
      name: "operations",
      description: "Commands for managing operations",
      subcommands: [
        {
          name: "describe",
          description: "View the details of an operation",
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
              description: "The Google Cloud location for the operation",
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
      name: "raw-decrypt",
      description: "Decrypt a ciphertext file using a raw key",
      options: [
        optAccessTokenFile,
        optAccount,
        optAdditionalAuthenticatedDataFile,
        optBillingProject,
        {
          name: "--ciphertext-file",
          description: "File path of the ciphertext file to decrypt",
          priority: 100,
          args: {
            name: "CIPHERTEXT_FILE",
            description: "String",
            template: "filepaths",
          },
        },
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
          name: "--initialization-vector-file",
          description:
            "File path to the optional file containing the initialization vector for decryption",
          args: {
            name: "INITIALIZATION_VECTOR_FILE",
            description: "String",
            template: "filepaths",
          },
        },
        {
          name: "--key",
          description: "The (raw) key to use for decryption",
          args: {
            name: "KEY",
            description: "String",
          },
        },
        optKeyring2,
        optLocation3,
        optLogHttp,
        optNoSkipIntegrityVerification,
        {
          name: "--plaintext-file",
          description:
            "File path of the plaintext file to store the decrypted data",
          priority: 100,
          args: {
            name: "PLAINTEXT_FILE",
            description: "String",
            template: "filepaths",
          },
        },
        optProject,
        optQuiet,
        optSkipIntegrityVerification,
        optTraceToken,
        optUserOutputEnabled,
        optVerbosity,
      ],
    },
    {
      name: "raw-encrypt",
      description: "Encrypt a plaintext file using a raw key",
      options: [
        optAccessTokenFile,
        optAccount,
        optAdditionalAuthenticatedDataFile,
        optBillingProject,
        {
          name: "--ciphertext-file",
          description: "File path of the ciphertext file to output",
          priority: 100,
          args: {
            name: "CIPHERTEXT_FILE",
            description: "String",
            template: "filepaths",
          },
        },
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
          name: "--initialization-vector-file",
          description:
            "File path to the optional file containing the initialization vector for encryption",
          args: {
            name: "INITIALIZATION_VECTOR_FILE",
            description: "String",
            template: "filepaths",
          },
        },
        {
          name: "--key",
          description: "The key to use for encryption",
          args: {
            name: "KEY",
            description: "String",
          },
        },
        optKeyring2,
        optLocation3,
        optLogHttp,
        optNoSkipIntegrityVerification,
        {
          name: "--plaintext-file",
          description: "File path of the plaintext file to encrypt",
          priority: 100,
          args: {
            name: "PLAINTEXT_FILE",
            description: "String",
            template: "filepaths",
          },
        },
        optProject,
        optQuiet,
        optSkipIntegrityVerification,
        optTraceToken,
        optUserOutputEnabled,
        optVerbosity,
      ],
    },
    {
      name: "retired-resources",
      description: "Manage retired resources",
      subcommands: [
        {
          name: "describe",
          description: "Get metadata for a given retired resource",
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
              description: "The Google Cloud location for the retired-resource",
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
            name: "RETIRED_RESOURCE",
            description:
              "ID of the retired-resource or fully qualified identifier for the retired-resource",
          },
        },
        {
          name: "list",
          description: "List the retired resources within a location",
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
      name: "single-tenant-hsm",
      description: "Commands for managing single tenant HSM instances",
      subcommands: [
        {
          name: "create",
          description: "Create a single tenant HSM instance",
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
              name: "--key-portability-enabled",
              description:
                "If set, the single tenant HSM instance will be able to perform key portability operations",
            },
            optLocation,
            optLogHttp,
            {
              name: "--no-key-portability-enabled",
              description:
                "If set, the single tenant HSM instance will be able to perform key portability operations",
              hidden: true,
            },
            optProject,
            optQuiet,
            {
              name: "--single-tenant-hsm-instance-id",
              description:
                "Specify an ID for the single tenant HSM instance. It must be unique within a location and match the regular expression `[a-zA-Z0-9_-]{1,63}`",
              args: {
                name: "SINGLE_TENANT_HSM_INSTANCE_ID",
                description: "String",
              },
            },
            {
              name: "--total-approver-count",
              description:
                "The total number of approvers. This is the N value used for M of N quorum auth. Must be greater than or equal to 3 and less than or equal to 16",
              priority: 100,
              args: {
                name: "TOTAL_APPROVER_COUNT",
                description: "Int",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
        {
          name: "describe",
          description: "Get metadata for a single tenant HSM instance",
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
            name: "SINGLE_TENANT_HSM_INSTANCE",
            description:
              "ID of the singleTenantHsmInstance or fully qualified identifier for the singleTenantHsmInstance",
          },
        },
        {
          name: "list",
          description: "List single tenant HSM instances within a location",
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
          name: "proposal",
          description:
            "Commands for managing single tenant HSM instance proposals",
          subcommands: [
            {
              name: "approve",
              description: "Approve a single tenant HSM instance proposal",
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
                {
                  name: "--quorum-challenge-replies",
                  description:
                    'The challenge replies to approve the proposal. Challenge replies can be sent across multiple requests. Each tuple should be ("signed_challenge_file", "public_key_file")',
                  args: {
                    name: "QUORUM_CHALLENGE_REPLIES",
                    description: "String",
                  },
                },
                {
                  name: "--required-challenge-replies",
                  description:
                    'A list of tuples, each containing the file paths for a required challenge reply. Each tuple should be ("signed_challenge_file", "public_key_file")',
                  args: {
                    name: "REQUIRED_CHALLENGE_REPLIES",
                    description: "String",
                  },
                },
                optSingleTenantHsmInstance,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "SINGLE_TENANT_HSM_INSTANCE_PROPOSAL",
                description:
                  "ID of the singleTenantHsmInstanceProposal or fully qualified identifier for the singleTenantHsmInstanceProposal",
              },
            },
            {
              name: "create",
              description: "Create a single tenant HSM instance proposal",
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
                {
                  name: "--member-public-key-pem",
                  description:
                    "The PEM file containing the public key of the quorum member to add or remove. This field is required for add_quorum_member and remove_quorum_member operation types",
                  args: {
                    name: "MEMBER_PUBLIC_KEY_PEM",
                    description: "String",
                  },
                },
                {
                  name: "--operation-type",
                  description:
                    "The type of operation for the single tenant HSM instance proposal",
                  priority: 100,
                  args: {
                    name: "OPERATION_TYPE",
                    description: "String",
                  },
                },
                optProject,
                optQuiet,
                {
                  name: "--required-approver-count",
                  description:
                    "The number of approvers required for the single tenant HSM instance. This is the M value used for M of N quorum. Must be greater than or equal to 1 and less than or equal to the total approver count of the single tenant HSM instance minus 1. This field is required for the register_2fa_keys operation type",
                  args: {
                    name: "REQUIRED_APPROVER_COUNT",
                    description: "Int",
                  },
                },
                {
                  name: "--single-tenant-hsm-instance-proposal-id",
                  description:
                    "The ID to use for the single tenant HSM instance proposal, which will become the final component of the single tenant HSM instance resource name",
                  args: {
                    name: "SINGLE_TENANT_HSM_INSTANCE_PROPOSAL_ID",
                    description: "String",
                  },
                },
                optTraceToken,
                {
                  name: "--two-factor-public-key-pems",
                  description:
                    "The PEM files containing the two factor public keys 2FA keys for M of N quorum auth tenant HSM instance. This field is required for register_2fa_keys operation type",
                  args: {
                    name: "PEM_FILE_PATH",
                    description: "List",
                    template: "filepaths",
                  },
                },
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "SINGLE_TENANT_HSM_INSTANCE",
                description:
                  "ID of the singleTenantHsmInstance or fully qualified identifier for the singleTenantHsmInstance",
              },
            },
            {
              name: "delete",
              description: "Delete a single tenant HSM instance proposal",
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
                optSingleTenantHsmInstance,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "SINGLE_TENANT_HSM_INSTANCE_PROPOSAL",
                description:
                  "ID of the singleTenantHsmInstanceProposal or fully qualified identifier for the singleTenantHsmInstanceProposal",
              },
            },
            {
              name: "describe",
              description:
                "Get metadata for a single tenant HSM instance proposal",
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
                optSingleTenantHsmInstance,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "SINGLE_TENANT_HSM_INSTANCE_PROPOSAL",
                description:
                  "ID of the singleTenantHsmInstanceProposal or fully qualified identifier for the singleTenantHsmInstanceProposal",
              },
            },
            {
              name: "execute",
              description: "Executes a single tenant HSM proposal",
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
                optSingleTenantHsmInstance,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "SINGLE_TENANT_HSM_INSTANCE_PROPOSAL",
                description:
                  "ID of the singleTenantHsmInstanceProposal or fully qualified identifier for the singleTenantHsmInstanceProposal",
              },
            },
            {
              name: "list",
              description:
                "List single tenant HSM instance proposals within a single tenant HSM instance",
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
                optLocation7,
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
              args: {
                name: "SINGLE_TENANT_HSM_INSTANCE",
                description:
                  "ID of the singleTenantHsmInstance or fully qualified identifier for the singleTenantHsmInstance",
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
